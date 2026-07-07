# Specyfikacja C - infografiki i mapy pojęć (wersja 4)

Dokument dla modelu generującego materiały wizualne wyższego rzędu:
infografiki i mapy pojęć dla jednego rozdziału. Wersja 3 wymusza jakość
atlasową grafiki: dawną frazę stylu (sekcja 6A.1 wersji 2) zastępują dwa
dosłowne bloki STYL pisane po angielsku - osobny dla infografik i osobny
dla map pojęć - a do tego dochodzi obowiązkowy szablon promptu graficznego
(sekcja 6B), próg szczegółowości oraz lista wad dyskwalifikujących z
procedurą poprawki (sekcja 6C). Powód zmiany: prompty po polsku i bez
twardych zakazów dawały plansze rudymentarne, na poziomie clipartu. Wersja 4 zaostrza reguły znaków w nazwie pliku planszy
(sekcja 2): dwukropek i inne znaki nielegalne na Windows są teraz
ZABRONIONE - to one blokowały wgrywanie. Miejsce docelowe, liczba plansz
i format plików końcowych bez zmian względem wersji 2. Dla każdego rozdziału powstają 3 infografiki i 3 mapy
pojęć - łącznie sześć plansz. Mapy pojęć nie mogą powielać treści
infografik (sekcja 4).

## 0. Jak używać tej specyfikacji (notka dla wykonawcy)

Wejściem jest PDF rozdziału (główne źródło) oraz, opcjonalnie, plik
`rozdzialNN.js` jako sygnał, które tematy rozdział akcentuje. Model
projektuje sześć plansz i do każdej pisze JEDEN prompt graficzny ściśle
według szablonu z sekcji 6B. Ty generujesz plansze w narzędziu graficznym,
oceniasz je listą wad z sekcji 6C (plansza z wadą idzie do ponownej
generacji) i eksportujesz do finalnego JPG według sekcji 6 (kroki w
`_INSTRUKCJA_WYKONAWCY.md`). Nazwy plików i układ folderów muszą być
dokładnie takie jak w sekcji 1-2.

---

## 1. Miejsce docelowe

Materiały trafiają do podfolderu `visuals/` w folderze podręcznika, w
podkatalogu o nazwie rozdziału:

```
<folder podręcznika>/
  visuals/
    r04/
      Infografiki/
        01_<Tytuł>.jpg
        02_<Tytuł>.jpg
        03_<Tytuł>.jpg
      Mapy pojęć/
        01_<Tytuł>.jpg
        02_<Tytuł>.jpg
        03_<Tytuł>.jpg
```

Nazwa katalogu rozdziału musi odpowiadać istniejącemu rozdziałowi. Forma
kanoniczna to `r<NN>` (`r04`). Jeżeli plik rozdziału ma identyfikator z
prefiksem (np. `bbt_r01`), katalog nazwany po numerze (`r01`) też zadziała -
aplikacja dopasuje go po numerze rozdziału. Najbezpieczniej trzymać się
`r<NN>` zgodnego z numerem rozdziału.

Podkatalog `Infografiki` piszemy bez polskich znaków, z wielkiej litery.
Podkatalog `Mapy pojęć` w formie kanonicznej ma `ę` i spację; aplikacja
rozumie też `Mapy_pojec`, `Mapy pojec`, `Mapy-pojec`, więc polskie znaki nie
są wymagane, ale są mile widziane.

## 2. Nazwa pliku

Wspólna dla obu kategorii:

```
NN_<Tytuł_rozdzielony_podkreslnikami>.jpg
```

- `NN` to dwucyfrowy numer porządkowy (`01`, `02`, `03`) - ustala kolejność
  wyświetlania. Po numerze obowiązkowo podkreślnik.
- Tytuł z wielkiej litery, słowa rozdzielone podkreślnikami. Polskie znaki
  diakrytyczne są dozwolone i bezpieczne (aplikacja i publikacja radzą sobie
  z nimi). ZABRONIONE są znaki nielegalne w nazwach plików na Windows:
  dwukropek `:`, znak zapytania `?`, cudzysłów `"`, ukośniki `/` i `\`,
  kreska pionowa `|`, gwiazdka `*`, nawiasy ostrokątne `<` `>`. Nazwa nie
  może też kończyć się spacją ani kropką. Jeden taki znak sprawia, że pliku
  nie da się utworzyć na Windows ani wgrać przez GitHub Desktop - cała porcja
  wtedy staje.
- Podtytuł po dwukropku zapisujesz jako `_-_` (podkreślnik, myślnik,
  podkreślnik). Aplikacja pokaże to jako " - ". Przykład niżej.
- Bez prefiksu rozdziału (`r04_`) - przynależność wynika z katalogu.

Aplikacja przy wyświetlaniu zdejmuje numer i zamienia podkreślniki na spacje.
Plik `03_Nagonasienne_-_gatunki_w_Polsce.jpg` pokaże się jako
"Nagonasienne - gatunki w Polsce" (`_-_` daje " - "). Plik
`01_Życie_ludzi_paleolitu.jpg` pokaże się jako "Życie ludzi paleolitu" -
polskie litery przechodzą bez problemu. Numerowanie startuje od `01` osobno
dla infografik i osobno dla map pojęć - to dwie niezależne sekwencje.

Sprawdzian nazwy przed zapisem: zostają tylko litery (w tym polskie), cyfry,
podkreślniki i myślniki. Jeśli w nazwie jest `:` `?` `"` `/` `\` `|` `*` `<`
`>`, popraw ją - inaczej plik nie wgra się na Windows.

## 3. Liczba i rola materiałów

Twardo: 3 infografiki + 3 mapy pojęć na rozdział. Rola infografiki to
skondensowane, atlasowe podsumowanie jednego dużego tematu - synteza, nie
analiza relacji. Rola mapy pojęć to pokazanie struktury pojęciowej: węzły to
pojęcia, krawędzie to opisane relacje (konwencja Novaka, sekcja 5).

Infografika odpowiada na pytanie "co to jest, jak wygląda, z czego się
składa". Mapa pojęć odpowiada na pytanie "jak to się ma do reszty, co z
czego wynika, co czemu się przeciwstawia". Role są komplementarne.

## 4. Reguła nieparafrazowania

Trzy infografiki i trzy mapy pojęć w rozdziale nie mogą być różnymi ujęciami
tej samej treści. Reguła działa na dwóch osiach.

### 4.1. Rozłączność tematyczna

Każda z sześciu pozycji ma własny temat główny; tematy infografik i map
pojęć się nie pokrywają.

Źle (rozdział o średniowieczu):

- Infografika 01: "Bizancjum w skrócie"
- Mapa pojęć 01: "Bizancjum - struktura państwa" ← powtarza temat

Dobrze:

- Infografika 01: "Bizancjum w skrócie" (kto, kiedy, gdzie, cechy)
- Mapa pojęć 01: "Schizma wschodnia - przyczyny i skutki" (relacje między
  papiestwem, patriarchatem i polityką)

### 4.2. Rozłączność strukturalna

Nawet gdy temat się dotyka, struktura relacji ma być inna. Infografika daje
strukturę hierarchiczną, sekwencyjną albo atlasową. Mapa pojęć daje strukturę
sieciową z opisanymi relacjami. Mapa pojęć, której węzły to nagłówki bloków
z infografiki połączone strzałkami "należy do", to infografika z dorysowanymi
strzałkami - i tego nie robimy.

### 4.3. Pytanie testowe

Po przygotowaniu kompletu sześciu plansz model pyta sam siebie: czy uczeń,
który zapamiętał treść trzech infografik, znajdzie w mapach pojęć coś nowego?
Jeśli nie, komplet wymaga przebudowy.

## 5. Konwencja mapy pojęć (Novak)

- węzły to pojęcia zapisane rzeczownikowo w mianowniku ("Cesarstwo
  bizantyjskie", nie "Bizantyjczycy podbijali"),
- krawędzie to opisane relacje - krótka fraza czasownikowa ("składa się z",
  "powstaje w wyniku", "przeciwstawia się", "wynika z"),
- każda strzałka ma kierunek; relacje są asymetryczne,
- opcjonalnie: typ relacji rozróżniony kolorem strzałki.

Czytelnik powinien móc wskazać palcem łańcuch: węzeł A → relacja → węzeł B →
relacja → węzeł C. Format poziomy lub kwadratowy rozkłada taką strukturę
lepiej niż pionowy.

## 6. Specyfikacja techniczna PLIKU KOŃCOWEGO

To, co ląduje w `visuals/`, ma spełniać wszystkie warunki:

| Parametr | Wartość |
|---|---|
| Format | JPG (JPEG) |
| Orientacja | pionowa lub kwadratowa dla infografik; pozioma lub kwadratowa dla map pojęć |
| Szerokość | maksymalnie 1600 px (wysokość proporcjonalnie) |
| Jakość | około 70 (Squoosh: MozJPEG, quality 70) |
| Rozmiar pliku | poniżej 300 KB; absolutne maksimum 500 KB |
| Tryb koloru | RGB |

Generuj w narzędziu graficznym w wysokiej rozdzielczości (spokojnie 1600 px
i więcej na dłuższym boku), a finalny rozmiar i format nadaj eksportem
(Squoosh, przepis w `_INSTRUKCJA_WYKONAWCY.md`). Jeżeli po eksporcie plik
przekracza 300 KB, zejdź z jakością do 60.

Tekst musi być czytelny po pomniejszeniu do 480 px (kontener aplikacji na
średnim telefonie). To mocno ogranicza gęstość tekstu: jedna plansza to
najwyżej kilkanaście krótkich etykiet, nie pełne akapity. W aplikacji
użytkownik może planszę powiększyć, więc wysoka rozdzielczość źródłowa
decyduje, czy po zoomie tekst pozostanie ostry.

## 6A. Wymagany poziom jakości wizualnej

Styl atlasowy nie oznacza zwykłej grafiki edukacyjnej ani prostych ikon.
Każda plansza ma wyglądać jak dopracowana strona nowoczesnego atlasu:
kremowe albo lekko barwione tło z subtelną fakturą papieru, spójna paleta
4-6 przygaszonych kolorów, eleganckie ramki, dużo światła, wyraźna hierarchia
tekstu, ilustracje na poziomie rycin atlasowych zamiast clipartu.

Próg szczegółowości ("test dziesięciu sekund"): ilustracja, którą dałoby
się odręcznie przerysować w dziesięć sekund, jest za prosta. Postać ma twarz
z rysami i dłonie z palcami; roślina ma żyłkowanie; zwierzę ma fakturę
sierści, łusek albo piór; budowla ma fakturę muru; mapa ma ręcznie rysowaną
linię brzegową i delikatny relief. Ikonka w miejscu ryciny dyskwalifikuje
planszę.

Wymagania kompozycyjne: jeden dominujący tytuł u góry; 3-7 bloków treści
(infografika) albo 6-15 węzłów (mapa pojęć); widoczne marginesy i oddech;
spójny system ramek, strzałek i podpisów; ilustracje niosące treść, nie
ozdobne ikonki; tekst ograniczony do krótkich etykiet. Wszystkie sześć
plansz rozdziału używa tej samej rodziny stylistycznej: podobne tło,
typografia, ramki, paleta i poziom szczegółu.

## 6B. Prompt graficzny - obowiązkowy szablon

Sekcja zastępuje dawną "obowiązkową frazę stylu" (6A.1 wersji 2) - tamta
fraza przestaje obowiązywać. Styl musi być powtórzony w całości w KAŻDYM
prompcie, bo modele graficzne nie pamiętają ustaleń między generacjami i
każdy prompt bez pełnego opisu stylu wraca do domyślnego, clipartowego
wyglądu.

### 6B.1. Zasady nadrzędne

- Cały prompt po angielsku. Jedyny wyjątek: napisy, które mają fizycznie
  pojawić się na planszy (tytuł, etykiety, opisy strzałek) - te podajemy po
  polsku, w cudzysłowach. Modele graficzne realizują angielskie opisy stylu
  wyraźnie lepiej; polskojęzyczny prompt to jedna z głównych przyczyn
  rudymentarnych wyników.
- Blok STYL stoi na samym początku promptu - wiele modeli mocniej waży
  początek tekstu.
- Jeden prompt = jedna plansza. Zamawianie kilku plansz naraz kończy się
  kolażem.
- Prompt zawsze podaje orientację zgodną z sekcją 6: `vertical 3:4` lub
  `square 1:1` dla infografik, `horizontal 4:3` lub `square 1:1` dla map
  pojęć.

### 6B.2. Struktura promptu

```
[STYL] + [TREŚĆ] + [KOMPOZYCJA] + [TEKST] + [ZAKAZY]
```

Wszystkie pięć bloków obowiązkowe, w tej kolejności.

### 6B.3. Blok STYL dla infografiki - dosłowny

> Premium educational atlas plate in the style of vintage natural history
> atlases: cream paper background with subtle paper grain, elegant
> editorial layout with generous margins and thin ruled frames, refined
> serif typography, hand-drawn scientific illustrations with fine ink
> linework and soft watercolor-gouache shading, muted harmonious 4-6 color
> palette, generous white space, richly detailed, museum-quality finish.

### 6B.4. Blok STYL dla mapy pojęć - dosłowny

> Hand-illustrated concept map on cream textured paper, premium school
> atlas style: concept nodes as softly shaded rounded panels with thin ink
> borders, elegant curved arrows with short caption labels along them,
> small hand-drawn illustrative vignettes beside key nodes, refined
> typography, muted harmonious 4-6 color palette, generous white space,
> editorial composition, museum-quality finish.

Do obu bloków wolno dodać jedno-dwa słowa techniki (np. `delicate
cross-hatching`, `hand-colored engraving look`). Nie wolno niczego usuwać
ani osłabiać.

### 6B.5. Blok TREŚĆ

Infografika: wypisz 3-7 bloków treści z zawartością każdego i wskaż, co jest
rysowane jako rycina (`hand-drawn vignette of a pine branch with cones`).
Mapa pojęć: wypisz pełną strukturę w formie listy `węzeł A -> (relacja) ->
węzeł B` - model graficzny dostaje gotową sieć, nie ogólnik w rodzaju "mapa
pojęć o Bizancjum". Treść merytoryczna wynika z PDF rozdziału.

### 6B.6. Blok KOMPOZYCJA

Orientacja (sekcja 6B.1), tytuł u góry, rozmieszczenie bloków albo węzłów,
marginesy: `title banner at the top, three content blocks stacked
vertically with generous spacing` albo `central node with related concepts
arranged around it, clear reading paths`.

### 6B.7. Blok TEKST

Każdy napis, który ma pojawić się na planszy, wypisany dosłownie po polsku,
w cudzysłowie: tytuł (`Title at top, exactly: "..."`), etykiety bloków,
etykiety węzłów, opisy strzałek. Napisy krótkie, zgodnie z sekcjami 7-8.
Plansza z choćby jednym przekręconym napisem idzie do ponownej generacji.

Dla map pojęć: limit 15 węzłów z sekcji 8 pozostaje, ale do generacji celuj
w 6-10 - powyżej 10 etykiet ryzyko zniekształconego tekstu wyraźnie rośnie.
Etykiety strzałek 1-2 słowa.

### 6B.8. Blok ZAKAZY - dosłowny, w każdym prompcie

> No flat vector art, no clipart, no stock icons, no stick figures, no
> cartoon, no emoji, no 3D render, no photo, no default infographic
> template, no PowerPoint or Canva look, no corporate flowchart style, no
> neon or oversaturated colors, no heavy uniform outlines, no coloring-book
> style, no watermark, no signature, no logo, no English text, no gibberish
> pseudo-text.

### 6B.9. Przykład promptu mapy pojęć (skrót)

> Hand-illustrated concept map on cream textured paper, premium school
> atlas style: concept nodes as softly shaded rounded panels with thin ink
> borders, elegant curved arrows with short caption labels along them,
> small hand-drawn illustrative vignettes beside key nodes, refined
> typography, muted harmonious 4-6 color palette, generous white space,
> editorial composition, museum-quality finish. Concept map structure:
> node "Papiestwo" -> arrow "rywalizuje z" -> node "Patriarchat
> Konstantynopola"; node "Spór o liturgię" -> arrow "prowadzi do" -> node
> "Wielka schizma"; node "Wielka schizma" -> arrow "dzieli" -> node
> "Chrześcijaństwo zachodnie" and node "Chrześcijaństwo wschodnie".
> Title at top, exactly: "Schizma wschodnia - przyczyny i skutki".
> Horizontal 4:3, title banner at the top, generous margins. All labels in
> Polish, exactly as given. No flat vector art, no clipart, no stock icons,
> no stick figures, no cartoon, no emoji, no 3D render, no photo, no
> default infographic template, no PowerPoint or Canva look, no corporate
> flowchart style, no neon or oversaturated colors, no heavy uniform
> outlines, no coloring-book style, no watermark, no signature, no logo, no
> English text, no gibberish pseudo-text.

## 6C. Wady dyskwalifikujące i procedura poprawki

Wady dyskwalifikujące - każda wymusza ponowną generację planszy:

- wygląd slajdu prezentacyjnego, plakatu z przypadkowymi ikonami albo
  szkolnej kolorowanki,
- uproszczone sylwetki bez twarzy i dłoni (stickman, piktogram) w miejscu
  rycin,
- płaskie, jednolite wypełnienia bez cieniowania i faktury,
- mapa pojęć wyglądająca jak korporacyjny diagram przepływu (prostokąty i
  łamane strzałki bez ilustracji),
- krzykliwe, przesycone kolory; chaotyczny układ bez marginesów,
- przekręcone napisy, pseudołacina, znak wodny, logo,
- niespójność z pozostałymi planszami rozdziału (inne tło, typografia,
  paleta).

Procedura poprawki: sprawdź, czy blok STYL stoi na początku promptu; dopisz
zaobserwowaną wadę do bloku ZAKAZY (np. `no simplified silhouettes`); dodaj
do STYLU jedno-dwa słowa techniki (`delicate cross-hatching`, `visible
gouache texture`); wygeneruj ponownie. Dwie nieudane próby z rzędu to
sygnał, żeby uprościć TREŚĆ (mniej bloków albo węzłów, krótsze etykiety) -
stylu nie upraszczamy nigdy.

## 7. Wytyczne treściowe - infografiki

Infografika zawiera: jeden wyraźny tytuł u góry (pokrywający się z nazwą
pliku po zdjęciu numeru); 3-7 elementów składowych ułożonych według logiki
tematu (chronologicznie, hierarchicznie albo porównawczo); minimum tekstu;
elementy graficzne wspierające zapamiętanie. Cały tekst po polsku, sprawdzony
ortograficznie; daty i nazwy zweryfikowane na podstawie PDF rozdziału.
Kolorystyka spójna w obrębie rozdziału.

## 8. Wytyczne treściowe - mapy pojęć

Mapa pojęć zawiera: 6-15 węzłów (więcej jest nieczytelne na telefonie;
do generacji najlepiej 6-10, sekcja 6B.7); każdą strzałkę z etykietą
czasownikową (nie ma pustych strzałek); jeden wyraźny tytuł u góry (zgodny
z nazwą pliku). Pojęcia tej samej kategorii (np. wszystkie postacie) mogą
być wyróżnione kolorem albo kształtem.

Mapa pojęć nie jest schematem blokowym ani diagramem przepływu - czyta się ją
z dowolnego węzła, w dowolną stronę. Strzałki opisane krótko (1-3 słowa).
Relacje muszą wynikać z treści rozdziału, nie z wiedzy ogólnej modelu.

## 9. Porównanie

| Cecha | Infografika | Mapa pojęć |
|---|---|---|
| Relacje | hierarchiczne lub sekwencyjne | sieciowe, opisane |
| Strzałki | ozdobne lub brak | obowiązkowe, z czasownikiem |
| Tekst | krótkie etykiety, ikony, daty | etykiety w węzłach + opisy na strzałkach |
| Cel | synteza tematu | struktura pojęciowa i relacje |
| Format | pionowy lub kwadratowy | poziomy lub kwadratowy |
| Czytanie | liniowe | sieciowe |

## 10. Lista kontrolna

Dokładnie 3 infografiki i 3 mapy pojęć; poprawne prefiksy `01_`, `02_`,
`03_`, numery ciągłe i unikalne w obrębie podkatalogu. Tytuł po zdjęciu
prefiksu sensowny; tytuł na obrazie zgodny z nazwą pliku. Sześć tematów
rozłącznych tematycznie i strukturalnie (sekcja 4). Każda strzałka mapy
pojęć ma etykietę czasownikową i kierunek.

Każdy prompt zbudowany według sekcji 6B: po angielsku, pięć bloków w
kolejności, właściwy blok STYL (osobny dla infografik i map) i blok ZAKAZY
wklejone dosłownie, wszystkie napisy docelowe po polsku w cudzysłowach.
Żadna plansza nie wykazuje wad z sekcji 6C (test dziesięciu sekund
zaliczony).

Nazwy plików bez znaków nielegalnych na Windows (`: ? " / \ | * < >`),
bez spacji i kropki na końcu; podtytuł jako `_-_`; polskie litery dozwolone.

Pliki: JPG, dłuższy bok do 1600 px, poniżej 300 KB. Tekst czytelny po
pomniejszeniu do 480 px, po polsku, bez błędów i pseudołaciny; daty i
nazwiska zweryfikowane. Wszystkie sześć plansz ma spójną rodzinę wizualną.
