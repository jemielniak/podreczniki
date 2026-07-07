# Specyfikacja A - generowanie ćwiczeń rozdziału (wersja 3)

Dokument dla modelu językowego generującego ćwiczenia do aplikacji quizowej
na podstawie jednego rozdziału podręcznika. Wersja 3 dodaje twardą regułę
znaków w nazwach plików obrazków (sekcja 6). Wersja 2 zmieniła miejsce
docelowe plików (repozytorium treści zamiast kodu aplikacji), format odwołań
do obrazków i reguły sekcji "Super trudne". Pliki wytworzone według tej
specyfikacji są OSTATECZNE - trafiają do repozytorium bez żadnej dalszej
obróbki, a automatyczna kontrola jakości przy publikacji sprawdza je co do
znaku. Każda reguła oznaczona [AUTOMAT] jest egzekwowana maszynowo: jej
złamanie zatrzymuje publikację całego podręcznika.

## 0. Jak używać tej specyfikacji (notka dla wykonawcy)

Wklej do modelu całą specyfikację razem z PDF-em rozdziału i napisz, który to
rozdział (numer i tytuł). Wyjściem są dwa artefakty:

- `rozdzialNN.js` - plik rozdziału z ćwiczeniami,
- `rNN_ilustracje.json` - manifest ilustracji (wejście do Specyfikacji B).

Model nie generuje obrazków. Decyduje tylko, które pytania potrzebują
ilustracji, i opisuje je w manifeście. Zapis plików i wgranie ich na GitHub
opisuje `_INSTRUKCJA_WYKONAWCY.md`.

---

## 1. Miejsce docelowe plików

Każdy podręcznik ma w repozytorium treści własny folder. Plik rozdziału
ląduje bezpośrednio w folderze podręcznika, obrazki w jego podfolderze
`img/`:

```
<folder podręcznika>/            np. sp5/historia/historia-5-gwo/
  _bookConfig.json               NIE dotykamy - zakłada właściciel
  rozdzial01.js
  rozdzial02.js                  ← tu trafia nowy plik rozdziału
  img/                           ← tu trafiają ilustracje (Specyfikacja B)
  visuals/                       ← infografiki i mapy pojęć (Specyfikacja C)
  cover.png                      okładka - osobno, raz na podręcznik
```

Nazwa pliku rozdziału: `rozdzial` + dwucyfrowy numer + `.js`
(`rozdzial02.js`, `rozdzial12.js`). [AUTOMAT] Inna nazwa nie zostanie
wykryta. Plik zaczynający się od podkreślnika (`_rozdzial05.js`) jest
szkicem i publikacja go pomija.

## 2. Identyfikator rozdziału

`chapterId` ma postać `r` + dwucyfrowy numer: `r02`, `r04`, `r12`. Małe
litery. Występuje jako pole `id` rozdziału, w numerze nazwy pliku
(`rozdzial04.js` ↔ `r04`) i jako prefiks nazw ilustracji
(`r04_hagia_sophia.jpg`). Spójność jest obowiązkowa.

## 3. Plik rozdziału

### 3.1. Struktura

```javascript
// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BIZ  = Bizancjum
//   ARA  = Arabowie i początki islamu
//   FRA  = Nowe państwa w Europie
//   KON  = Konflikt papiestwa z cesarstwem
//   HARD = Super trudne

const ALL_EXERCISES = [
  // obiekty ćwiczeń - specyfikacja w sekcji 4
];

const KID_PROMPTS = {
  // opcjonalnie: id ćwiczenia -> uproszczona wersja pytania
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Początki średniowiecza",
  icon: "🏰",
  sectionOrder: [
    "Bizancjum",
    "Arabowie i początki islamu",
    "Nowe państwa w Europie",
    "Konflikt papiestwa z cesarstwem"
  ],
  sectionIcons: {
    "Bizancjum": "🏛️",
    "Arabowie i początki islamu": "🌙",
    "Nowe państwa w Europie": "👑",
    "Konflikt papiestwa z cesarstwem": "⚔️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
```

### 3.2. Pola rozdziału

| Pole | Typ | Wymagane | Opis |
|---|---|---|---|
| `id` | string | tak | `"r04"` - małe litery, zgodne z numerem pliku. |
| `number` | number | tak | Numer rozdziału (liczba całkowita, sortowanie w menu). |
| `title` | string | tak | Pełny tytuł rozdziału. |
| `icon` | string | tak | Jedno emoji. |
| `sectionOrder` | string[] | tak | Sekcje ZWYKŁE w kolejności wyświetlania. |
| `sectionIcons` | object | tak | Mapa: nazwa sekcji zwykłej → emoji. |
| `exercises` | object[] | tak | Niepusta tablica ćwiczeń. |
| `kidPrompts` | object | nie | Mapa: id ćwiczenia → prostsza wersja pytania. |

[AUTOMAT] Innych pól rozdziału nie wolno dodawać - pipeline je odrzuca przy
budowie paczki, więc i tak nie dotrą do aplikacji.

### 3.3. Sekcje - zwykłe i specjalne

Sekcje zwykłe (tematyczne) wymyślasz na podstawie budowy rozdziału: 4-6
sekcji, każda po 8-15 ćwiczeń. [AUTOMAT] Każde ćwiczenie z sekcją zwykłą
musi mieć tę sekcję wpisaną w `sectionOrder`, a każda pozycja `sectionOrder`
musi mieć emoji w `sectionIcons`. Nazwa w polu `section` ćwiczenia musi być
IDENTYCZNA co do znaku z pozycją w `sectionOrder`.

Sekcja `"Super trudne"` jest SPECJALNA i rządzi się odwrotną regułą:
ćwiczenia dostają `section: "Super trudne"`, ale samej nazwy NIE wpisuje się
do `sectionOrder` ani do `sectionIcons`. Aplikacja pokazuje ją automatycznie
w grupie "Specjalne" z ikoną ⭐, a jej pytania nie są losowane do zwykłego
quizu - uczeń wybiera je świadomie. Wpisanie jej do `sectionOrder` to błąd
tej specyfikacji (starsze rozdziały tak mają i aplikacja to toleruje, ale
nowych tak nie piszemy).

Nazwa `"Dawne błędne"` jest zarezerwowana dla aplikacji (automatyczna
powtórka pomyłek ucznia). [AUTOMAT] Nigdy nie tworzymy ćwiczeń z tą sekcją.

### 3.4. Liczby

Standardowy rozdział: 60-80 ćwiczeń łącznie. Sekcje zwykłe: 4-6, po 8-15
ćwiczeń. "Super trudne": 10-20 ćwiczeń. Dystrybucja typów różnorodna -
żaden typ nie przekracza 40% rozdziału, a w rozdziale występuje co najmniej
7 z 10 typów.

## 4. Typy ćwiczeń

### 4.1. Pola wspólne

| Pole | Typ | Wymagane | Opis |
|---|---|---|---|
| `id` | string | tak | Unikalny identyfikator (sekcja 5). |
| `section` | string | tak | Nazwa sekcji - co do znaku jak w `sectionOrder` (albo `"Super trudne"`). |
| `type` | string | tak | Jeden z 10 typów poniżej. |
| `prompt` | string | tak | Treść pytania. |
| `explanation` | string | tak | Wyjaśnienie po odpowiedzi. [AUTOMAT] Brak = blokada. |
| `image` | string | nie | GOŁA nazwa pliku ilustracji, np. `"r04_hagia_sophia.jpg"` (sekcja 6). |

[AUTOMAT] `id`, `section`, `prompt`, `explanation` są obowiązkowe w KAŻDYM
ćwiczeniu bez wyjątku.

### 4.2. single_choice

Jedna poprawna odpowiedź. [AUTOMAT] `options` to tablica co najmniej 2
tekstów; `answer` to INDEKS poprawnej opcji (licząc od 0), mieszczący się w
tablicy. Zalecane: 6 opcji (1 poprawna + 5 błędnych) - aplikacja wylosuje z
błędnych trzy i pokaże razem z poprawną, więc pytanie za każdym razem
wygląda trochę inaczej.

```javascript
{
  id: "R04_BIZ_01",
  section: "Bizancjum",
  type: "single_choice",
  prompt: "Jak nazywała się stolica cesarstwa wschodniorzymskiego?",
  options: ["Rzym", "Konstantynopol", "Ateny", "Aleksandria", "Antiochia", "Damaszek"],
  answer: 1,
  explanation: "Konstantynopol założono w IV wieku w miejscu dawnej greckiej kolonii Bizancjum."
}
```

### 4.3. multi_select

Kilka poprawnych odpowiedzi; uczeń widzi wszystkie opcje. [AUTOMAT] `answer`
to niepusta tablica indeksów bez powtórzeń, każdy w zakresie `options`.
Zalecane 3-6 opcji.

```javascript
{
  id: "R04_ARA_02",
  section: "Arabowie i początki islamu",
  type: "multi_select",
  prompt: "Zaznacz elementy należące do pięciu filarów islamu.",
  options: ["Publiczne wyznanie wiary", "Pielgrzymka do Mekki", "Chrzest", "Post w ramadanie"],
  answer: [0, 1, 3],
  explanation: "Pięć filarów islamu to: wyznanie wiary, modlitwa, jałmużna, post w ramadanie i pielgrzymka do Mekki."
}
```

### 4.4. true_false

Stwierdzenie prawdziwe albo fałszywe. [AUTOMAT] `answer` to `true` albo
`false` (boolean, nie tekst); `options: null`.

```javascript
{
  id: "R04_BIZ_02",
  section: "Bizancjum",
  type: "true_false",
  prompt: "Cesarstwo wschodniorzymskie powstało w 395 roku.",
  options: null,
  answer: true,
  explanation: "Państwo wyodrębniło się po podziale Imperium Rzymskiego pod koniec IV wieku."
}
```

### 4.5. fill_in

Tekst z lukami. Każda luka to DOKŁADNIE 10 podkreślników: `__________`.
[AUTOMAT] Liczba luk w `prompt` musi równać się długości tablicy `answer`
(jedna odpowiedź na lukę, w kolejności występowania). `options: null`.
Opcjonalne `altAnswers` to tablica tablic - po jednej liście akceptowanych
form na lukę - i każda lista MUSI zawierać także odpowiedź kanoniczną.

```javascript
{
  id: "R04_FRA_03",
  section: "Nowe państwa w Europie",
  type: "fill_in",
  prompt: "Karol Wielki został koronowany w roku __________ przez papieża __________.",
  options: null,
  answer: ["800", "Leona III"],
  altAnswers: [
    ["800", "800 r."],
    ["Leona III", "Leon III", "Leona Trzeciego"]
  ],
  explanation: "Koronacja w Bazylice św. Piotra w Rzymie odnowiła cesarstwo na zachodzie."
}
```

### 4.6. riddle

Krótka odpowiedź wpisywana z klawiatury. [AUTOMAT] `answer` to tekst;
`options: null`. Opcjonalne `altAnswers` to PŁASKA tablica akceptowanych
form, zawierająca również odpowiedź kanoniczną. Wielkość liter nie ma
znaczenia przy sprawdzaniu.

```javascript
{
  id: "R04_BIZ_03",
  section: "Bizancjum",
  type: "riddle",
  prompt: "Zbiór praw rzymskich spisany na polecenie Justyniana to...",
  options: null,
  answer: "Kodeks Justyniana",
  altAnswers: ["Kodeks Justyniana", "Codex Iustinianus", "kodeks"],
  explanation: "Kodyfikacja objęła dwanaście ksiąg i ponad 4600 przepisów."
}
```

### 4.7. odd_one_out

Wskazanie elementu niepasującego. Mechanika parsowania jest sztywna, więc
`prompt` musi mieć budowę: tekst wprowadzający, DWUKROPEK, elementy
oddzielone przecinkami. [AUTOMAT] Aplikacja bierze wszystko po PIERWSZYM
dwukropku (albo znaku zapytania, gdy dwukropka nie ma), tnie po przecinkach
i obcina kropkę kończącą zdanie. `answer` musi być IDENTYCZNE co do znaku z
jednym ze sparsowanych elementów. Wnioski praktyczne:

- co najmniej 3, wygodnie 4-5 elementów,
- ŻADNYCH przecinków wewnątrz elementu (przecinek = nowy element),
- tylko jeden dwukropek w całym `prompt` (ten oddzielający listę),
- zdanie z listą kończy się KROPKĄ, nigdy znakiem zapytania - końcowy "?"
  przykleiłby się do ostatniego elementu; formę pytającą umieść PRZED
  dwukropkiem ("Co nie pasuje do pozostałych: a, b, c."),
- kropka WEWNĄTRZ elementu jest bezpieczna ("św. Wojciech"), ale element
  nie może KOŃCZYĆ SIĘ kropką skrótu ("n.e.") - parser obcina kropkę z
  końca każdego elementu; taki skrót przeformułuj albo przenieś w głąb
  elementu ("rok 622 n.e." zamiast "n.e."),
- `options: null`.

```javascript
{
  id: "R04_KON_02",
  section: "Konflikt papiestwa z cesarstwem",
  type: "odd_one_out",
  prompt: "Wskaż, co nie pasuje do pozostałych: papież, biskup, kardynał, sułtan.",
  options: null,
  answer: "sułtan",
  explanation: "Sułtan to władca muzułmański, pozostałe to godności w Kościele katolickim."
}
```

### 4.8. scenario

Mechanika identyczna jak `single_choice` (te same reguły [AUTOMAT]), ale
`prompt` jest dłuższą narracją osadzającą pytanie w sytuacji.

```javascript
{
  id: "R04_KON_05",
  section: "Konflikt papiestwa z cesarstwem",
  type: "scenario",
  prompt: "Zima 1077 roku. Władca stoi boso w śniegu pod murami zamku, prosząc papieża o zdjęcie klątwy. Kim jest ten władca?",
  options: ["Henryk IV", "Otton I", "Karol Wielki", "Fryderyk Barbarossa"],
  answer: 0,
  explanation: "Henryk IV odbył pokutę w Canossie, by Grzegorz VII cofnął ekskomunikę."
}
```

### 4.9. match

Łączenie w pary. [AUTOMAT] `left` i `right` to tablice tej samej długości;
`answer` to obiekt, którego klucze to DOKŁADNIE wszystkie elementy `left`,
a wartości to DOKŁADNIE wszystkie elementy `right` (każdy raz).
`options: null`. Zalecane 3-5 par.

```javascript
{
  id: "R04_BIZ_05",
  section: "Bizancjum",
  type: "match",
  prompt: "Połącz wydarzenie z rokiem.",
  options: null,
  left: ["Koronacja Karola Wielkiego", "Schizma wschodnia", "Hidżra"],
  right: ["622", "800", "1054"],
  answer: {
    "Koronacja Karola Wielkiego": "800",
    "Schizma wschodnia": "1054",
    "Hidżra": "622"
  },
  explanation: "Te trzy daty wyznaczają punkty zwrotne wczesnego średniowiecza."
}
```

### 4.10. sort

Rozdzielanie elementów do kategorii. [AUTOMAT] Klucze `answer` to DOKŁADNIE
wszystkie `categories`; elementy rozdzielone w `answer` to DOKŁADNIE
wszystkie `items` - każdy element trafia do JEDNEJ kategorii, bez powtórzeń
i bez pominięć. Kategorii ma być 2-4 (5+ przechodzi, ale generuje
ostrzeżenie i jest nieczytelne na telefonie). `options: null`.

```javascript
{
  id: "R04_ARA_06",
  section: "Arabowie i początki islamu",
  type: "sort",
  prompt: "Przyporządkuj postaci do religii.",
  options: null,
  items: ["Justynian", "Mahomet", "Karol Wielki", "Abu Bakr"],
  categories: ["chrześcijaństwo", "islam"],
  answer: {
    "chrześcijaństwo": ["Justynian", "Karol Wielki"],
    "islam": ["Mahomet", "Abu Bakr"]
  },
  explanation: "Justynian i Karol Wielki byli władcami chrześcijańskimi; Mahomet założył islam, Abu Bakr był pierwszym kalifem."
}
```

### 4.11. sequence

Układanie w kolejności. [AUTOMAT] `items` (kolejność pomieszana, taką widzi
uczeń) i `answer` (kolejność poprawna) muszą zawierać DOKŁADNIE te same
teksty. `options: null`. Zalecane 4-6 elementów; `items` naprawdę
przetasowane, nie w kolejności poprawnej.

```javascript
{
  id: "R04_FRA_07",
  section: "Nowe państwa w Europie",
  type: "sequence",
  prompt: "Ułóż wydarzenia w porządku chronologicznym.",
  options: null,
  items: ["Koronacja Karola Wielkiego", "Bitwa pod Poitiers", "Hidżra Mahometa", "Wielka schizma wschodnia"],
  answer: ["Hidżra Mahometa", "Bitwa pod Poitiers", "Koronacja Karola Wielkiego", "Wielka schizma wschodnia"],
  explanation: "Hidżra (622), Poitiers (732), koronacja Karola (800), schizma (1054)."
}
```

## 5. Identyfikatory ćwiczeń

Format: `R<numer rozdziału:02d>_<SKRÓT SEKCJI>_<numer:02d>`, np.
`R04_BIZ_01`, `R04_HARD_07`, `R12_FOT_03`. Wielkie litery, skrót sekcji 3-4
znaki ASCII (bez polskich liter), numeracja w sekcji od 01, ciągła. Tabela
skrótów jako komentarz na początku pliku. [AUTOMAT] Identyfikator musi być
unikalny w obrębie CAŁEGO podręcznika, nie tylko rozdziału - prefiks
`R<NN>_` załatwia to automatycznie, o ile numer rozdziału się zgadza.

## 6. Ilustracje w ćwiczeniach

Pole `image` zawiera GOŁĄ nazwę pliku, bez żadnej ścieżki:

```javascript
image: "r04_hagia_sophia.jpg"
```

Zapis `"/img/plik.jpg"` ze starszych rozdziałów jest tolerowany (pipeline go
skoryguje), ale w nowych plikach używamy wyłącznie gołej nazwy. Konwencja
nazwy:

```
r<numer:02d>_<opis_snake_case>.jpg
```

Opis po polsku, ale bez polskich znaków (transliteracja: ł→l, ą→a, ę→e,
ś→s, ć→c, ż→z, ź→z, ń→n, ó→o), małe litery, podkreślniki zamiast spacji,
rozszerzenie `.jpg`. Dozwolone znaki w nazwie: wyłącznie małe litery ASCII `a-z`, cyfry `0-9`
i podkreślnik. Bez spacji, bez polskich liter, bez znaków `: ? " < > | / \ *`.
Te znaki są niedozwolone w nazwach plików na Windows i blokują wgranie na
GitHub. [AUTOMAT] Nazwa w ćwiczeniu i nazwa
pliku na dysku muszą zgadzać się co do wielkości liter.

Reguły doboru:

- ilustracja tylko tam, gdzie wnosi wartość poznawczą lub mnemoniczną;
  zwykle 8-15 ilustracji na rozdział, nie przy każdym pytaniu,
- jedna ilustracja może obsługiwać kilka pytań (ten sam `image` w kilku
  ćwiczeniach),
- treść obrazka odpowiada pytaniu, ale NIE ZDRADZA odpowiedzi (szczegóły w
  Specyfikacji B),
- każda nazwa użyta w `image` musi mieć wpis w manifeście (sekcja 8)
  i odwrotnie. Pliki niewymienione w żadnym ćwiczeniu w ogóle nie trafią
  do aplikacji - publikacja kopiuje wyłącznie obrazki użyte w ćwiczeniach.

## 7. Wytyczne treściowe

Wszystkie ćwiczenia opierają się wyłącznie na materiale z dostarczonego
rozdziału. Jeżeli fakt nie pada w rozdziale wprost, nie pytamy o niego.
Wyjaśnienia (`explanation`) są merytoryczne, jedno- lub kilkuzdaniowe,
zweryfikowane faktograficznie; daty, nazwiska i liczby sprawdzone.

Dystraktory w `single_choice` i `scenario` muszą być prawdopodobne i z tego
samego pola semantycznego co odpowiedź (przy pytaniu o miasto - inne miasta,
nie budowle). `prompt` jednoznaczny; bez pytań "co jest najważniejsze",
w których odpowiedź zależy od interpretacji.

"Super trudne" to pytania obiektywnie trudniejsze: drobne daty, mniej znane
nazwiska, łączenie informacji z różnych miejsc rozdziału. Trudność nie
polega na podstępach językowych.

`KID_PROMPTS` jest opcjonalne: uproszczona wersja pytania dla młodszego
dziecka (krótsze zdanie, prostsze słowa). Klucz to `id` istniejącego
ćwiczenia; mechanika i odpowiedź się nie zmieniają, więc uproszczenie nie
może zmieniać sensu pytania.

## 8. Manifest ilustracji (rNN_ilustracje.json)

Drugi obowiązkowy artefakt - wejście do Specyfikacji B. Struktura:

```json
{
  "chapterId": "r04",
  "illustrations": [
    {
      "filename": "r04_justynian_mozaika.jpg",
      "usedBy": ["R04_BIZ_01", "R04_BIZ_04"],
      "subject": "Cesarz Justynian I według mozaiki z Bazyliki San Vitale w Rawennie: postać w purpurowych szatach z koroną i nimbem, w otoczeniu dworzan i duchownych.",
      "purpose": "Kontekst wizualny do pytań o Justyniana i okres jego panowania.",
      "noSpoiler": "Nie podpisywać postaci imieniem ani nie umieszczać dat panowania."
    }
  ]
}
```

| Pole | Wymagane | Opis |
|---|---|---|
| `chapterId` | tak | Identyczne z `id` rozdziału. |
| `filename` | tak | Nazwa zgodna z konwencją z sekcji 6, rozszerzenie `.jpg`. |
| `usedBy` | tak | Identyfikatory ćwiczeń używających ilustracji. |
| `subject` | tak | Konkretny opis, co ma być na obrazku. |
| `purpose` | tak | Po co ta ilustracja jest (uzasadnienie poznawcze). |
| `noSpoiler` | tak | Czego bezwzględnie nie wolno umieścić, by nie zdradzić odpowiedzi. |

Spójność: każda nazwa z pól `image` ma dokładnie jeden wpis w manifeście,
żaden wpis nie jest nieużywany, wszystkie nazwy zaczynają się od `r<NN>_`
zgodnego z `chapterId`.

## 9. Format wyjścia

Plik rozdziału zwracasz jako CZYSTĄ zawartość pliku `.js`: zaczyna się od
komentarza ze skrótami sekcji, kończy na `export default chapter;`. Bez
ogrodzeń markdown (```), bez komentarza od siebie przed ani po. Wyłącznie
proste cudzysłowy `"` w kodzie - nigdy typograficzne „” ani ‘’ (psują
składnię JavaScript). Kodowanie UTF-8, polskie znaki w treściach pytań
normalnie. Manifest analogicznie: czysty JSON.

## 10. Lista kontrolna przed oddaniem

Metadane: `id` zgodne z numerem w nazwie pliku; `number` liczbą; `title`
i `icon` wypełnione; żadnych pól spoza tabeli 3.2.

Sekcje: każda sekcja zwykła użyta w ćwiczeniach jest w `sectionOrder` i ma
emoji w `sectionIcons`; "Super trudne" NIE występuje w `sectionOrder` ani
`sectionIcons`; "Dawne błędne" nie występuje nigdzie.

Ćwiczenia: każde ma `id`, `section`, `type`, `prompt`, `explanation`;
identyfikatory unikalne; typy tylko z listy dziesięciu; `options: null` tam,
gdzie typ tego wymaga. Dla `single_choice`/`scenario`/`multi_select` -
`answer` to poprawne indeksy. Dla `fill_in` - liczba luk `__________`
(dokładnie 10 podkreślników każda) równa liczbie odpowiedzi, `altAnswers`
zawierają odpowiedzi kanoniczne. Dla `odd_one_out` - `answer` identyczne
z jednym z elementów po dwukropku, elementy bez wewnętrznych przecinków.
Dla `match`/`sort`/`sequence` - zbiory elementów w `answer` dokładnie
odpowiadają zbiorom wejściowym; `sort` ma 2-4 kategorie.

Liczby: 60-80 ćwiczeń; sekcje zwykłe 4-6 po 8-15; "Super trudne" 10-20;
żaden typ ponad 40%; co najmniej 7 typów użytych.

Ilustracje: gołe nazwy `.jpg` z prefiksem `r<NN>_`; nazwa tylko z `a-z`,
`0-9` i podkreślnika (żadnych `: ? " < > | / \ *`, spacji ani polskich
liter); komplet i wyłączność wpisów w manifeście.

Format: czysty plik, proste cudzysłowy, poprawny JavaScript.
