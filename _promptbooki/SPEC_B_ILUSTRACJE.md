# Specyfikacja B - ilustracje do ćwiczeń (wersja 4)

Dokument dla modelu generującego ilustracje do pytań aplikacji quizowej.
Wersja 3 wymusza jakość atlasową grafiki: wprowadza obowiązkowy szablon
promptu graficznego (sekcja 6) z dosłownym blokiem stylu i blokiem zakazów
pisanym po angielsku, próg szczegółowości oraz listę wad dyskwalifikujących
z procedurą poprawki (sekcja 7). Powód zmiany: prompty pisane swobodnie i po
polsku dawały grafiki rudymentarne - płaskie cliparty i uproszczone
sylwetki. Wersja 4 dodaje twardą regułę znaków
dozwolonych w nazwie pliku (sekcja 5). Miejsce docelowe i format plików
końcowych bez zmian względem wersji 2.

## 0. Jak używać tej specyfikacji (notka dla wykonawcy)

Wejściem jest manifest `rNN_ilustracje.json` ze Specyfikacji A (plus,
opcjonalnie, PDF rozdziału i plik `rozdzialNN.js` jako kontekst). Dla każdej
pozycji manifestu model pisze JEDEN prompt graficzny ściśle według szablonu
z sekcji 6. Ty generujesz obraz w narzędziu graficznym, oceniasz go listą
wad z sekcji 7 (obraz z wadą generujesz ponownie) i eksportujesz do
finalnego JPG według sekcji 4 - kroki eksportu opisuje
`_INSTRUKCJA_WYKONAWCY.md` (rozdział o Squoosh). Zapisany plik musi nosić
DOKŁADNIE nazwę z pola `filename` manifestu.

---

## 1. Miejsce docelowe

Wszystkie ilustracje jednego podręcznika trafiają do jego podfolderu `img/`
w repozytorium treści:

```
<folder podręcznika>/
  img/
    r04_justynian_mozaika.jpg
    r04_hagia_sophia.jpg
    r05_mieszko_denar.jpg
    ...
```

Folder jest wspólny dla wszystkich rozdziałów podręcznika, dlatego prefiks
`r<NN>_` w nazwie jest obowiązkowy. Publikacja kopiuje z `img/` wyłącznie
pliki użyte w ćwiczeniach - obrazek bez odwołania w żadnym `image` nigdy
nie trafi do aplikacji, więc nazwy z manifestu i nazwy plików muszą się
zgadzać co do znaku, łącznie z wielkością liter.

## 2. Manifest wejściowy

Struktura opisana w Specyfikacji A, sekcja 8. Interpretacja pól:

- `subject` - co ma być na obrazku,
- `purpose` - po co (uzasadnienie poznawcze),
- `noSpoiler` - twarde zakazy treściowe; ich złamanie psuje pytanie,
- `usedBy` - identyfikatory pytań; mając plik rozdziału, można doczytać
  dokładną treść i upewnić się, że obraz nie zdradza odpowiedzi.

Model nie wymyśla własnych nazw plików. Generuje dokładnie te pozycje,
które wymienia manifest.

## 3. Reguła "obraz nie zdradza odpowiedzi"

Reguła krytyczna. Jeśli pytanie brzmi "która budowla była największą
świątynią chrześcijańską?", obraz pokazuje Hagia Sophię, ale bez napisu
"Hagia Sophia". Jeśli pytanie brzmi "kim był ten cesarz?", obraz pokazuje
Justyniana bez podpisu. Praktycznie:

- żadnych podpisów z nazwą miejsca, postaci lub wydarzenia, o które pytamy,
- żadnych dat, jeżeli pytamy o datę,
- żadnych elementów graficznych (kalendarz, zegar, kompas z legendą), które
  wprost kodują odpowiedź.

Pole `noSpoiler` wymienia zakazy dla konkretnej ilustracji - są bezwzględne.
Jednocześnie obraz musi być na tyle konkretny, żeby coś wnosił: dobrze
rozpoznawalna Hagia Sophia bez podpisu bije mglistą panoramę miasta.

## 4. Specyfikacja techniczna PLIKU KOŃCOWEGO

To, co ląduje w `img/`, ma spełniać wszystkie poniższe warunki:

| Parametr | Wartość |
|---|---|
| Format | JPG (JPEG) |
| Szerokość | maksymalnie 1400 px (wysokość proporcjonalnie) |
| Jakość | około 70 (Squoosh: MozJPEG, quality 70) |
| Rozmiar pliku | poniżej 300 KB; absolutne maksimum 500 KB |
| Tryb koloru | RGB |

Generuj w narzędziu graficznym w natywnej, wysokiej rozdzielczości -
finalny rozmiar i format nadaje dopiero eksport (Squoosh, przepis
w `_INSTRUKCJA_WYKONAWCY.md`). Jeżeli po eksporcie plik przekracza 300 KB,
zejdź z jakością do 60.

Obraz w aplikacji wyświetla się w kontenerze o szerokości około 480 px na
średnim telefonie. Treść musi pozostać czytelna po takim pomniejszeniu -
duże, dobrze rozpoznawalne formy zamiast drobnych detali.

## 5. Konwencja nazwy pliku

Nazwę dyktuje manifest. Obowiązujący wzór:

```
r<numer:02d>_<opis_snake_case>.jpg
```

Opis po polsku, ale bez polskich znaków diakrytycznych (ł→l, ą→a, ę→e, ś→s,
ć→c, ż→z, ź→z, ń→n, ó→o), małe litery, podkreślniki zamiast spacji.
Dozwolone znaki w nazwie: wyłącznie małe litery ASCII `a-z`, cyfry `0-9`
i podkreślnik. Bez spacji, bez polskich liter, bez znaków `: ? " < > | / \ *`.
Te znaki są niedozwolone w nazwach plików na Windows i blokują wgranie na
GitHub.

Przykłady:

```
r04_justynian_mozaika.jpg
r04_hagia_sophia_przekroj.jpg
r06_komorka_roslinna_schemat.jpg
```

## 6. Prompt graficzny - obowiązkowy szablon

Sekcja zastępuje dawny rozdział "Styl wizualny". Decyzję stylistyczną nadal
podejmuje się raz na podręcznik i trzyma w każdym rozdziale, ale styl musi
być powtórzony w całości w KAŻDYM prompcie - modele graficzne nie pamiętają
ustaleń między generacjami i każdy prompt bez pełnego opisu stylu wraca do
swojego domyślnego, clipartowego wyglądu.

### 6.1. Zasady nadrzędne

- Cały prompt po angielsku. Jedyny wyjątek: napisy, które mają fizycznie
  pojawić się na obrazie - te podajemy po polsku, w cudzysłowach. Modele
  graficzne realizują angielskie opisy stylu wyraźnie lepiej; polskojęzyczny
  prompt to jedna z głównych przyczyn rudymentarnych wyników.
- Blok STYL stoi na samym początku promptu - wiele modeli mocniej waży
  początek tekstu.
- Jeden prompt = jeden obraz. Zamawianie kilku ilustracji naraz kończy się
  kolażem.
- Prompt zawsze podaje proporcje kadru, np. `horizontal 4:3` albo
  `vertical 3:4`.

### 6.2. Struktura promptu

```
[STYL] + [TINT TŁA] + [TREŚĆ] + [KOMPOZYCJA] + [TEKST] + [ZAKAZY]
```

Wszystkie sześć bloków obowiązkowe, w tej kolejności.

### 6.3. Blok STYL - dosłowny, w każdym prompcie

> Educational atlas illustration in the style of vintage natural history
> and classic school atlas plates: hand-drawn with fine ink linework and
> soft watercolor-gouache shading, realistic proportions, rich fine detail,
> subtle paper grain, muted harmonious natural palette, soft ambient
> lighting, museum-quality finish.

Wolno dodać jedno-dwa słowa techniki dopasowane do tematu (np. `delicate
cross-hatching`, `hand-colored engraving look`). Nie wolno niczego z bloku
usuwać ani osłabiać.

### 6.4. Tint tła

Jedno zdanie zaraz po bloku STYL, dobrane do przedmiotu i stałe w obrębie
podręcznika:

- historia starożytna i średniowiecze: `warm sandy parchment background`,
- botanika i biologia: `soft sage-green tinted background`,
- anatomia i zdrowie: `pale cool blue tinted background`,
- geografia i mapy: `light ochre map-paper background`.

### 6.5. Blok TREŚĆ

Opis pisany jak zamówienie u ilustratora: co dokładnie widać, w jakim
ujęciu, z jakich materiałów, z jakimi detalami. Pole `subject` z manifestu
jest punktem wyjścia, nie gotowym promptem - model rozwija je o konkrety
ikonograficzne z PDF rozdziału.

Źle: `Roman emperor`. Dobrze: `Byzantine emperor Justinian modeled on the
Ravenna mosaic: frontal half-figure, purple chlamys with gold tablion,
jeweled diadem with pendilia, halo, solemn expression, rendered as soft
gouache with fine ink detail`.

### 6.6. Blok KOMPOZYCJA

Kadr, plan, tło: `single subject filling most of the frame, plain tinted
background, no clutter`. Duże, dobrze rozpoznawalne formy - obraz musi się
czytać po pomniejszeniu do 480 px (sekcja 4).

### 6.7. Blok TEKST

Domyślnie: `No text, no letters, no numbers anywhere in the image.`
Ilustracja do pytania zwykle nie potrzebuje napisów, a każdy napis to
ryzyko pseudołaciny i spoilera (sekcja 3).

Jeżeli napis jest niezbędny (legenda mapy, etykiety schematu): najwyżej
kilka krótkich polskich etykiet, każda wypisana w prompcie dosłownie, w
cudzysłowie: `Labels in Polish, exactly: "ściana komórkowa", "błona
komórkowa", "jądro".` Obraz z jakimkolwiek przekręconym napisem generujemy
ponownie.

### 6.8. Blok ZAKAZY - dosłowny, w każdym prompcie

> No flat vector art, no clipart, no stock icons, no stick figures, no
> cartoon, no emoji style, no coloring-book outlines, no heavy uniform
> black contours, no 3D render, no photorealistic photo, no neon or
> oversaturated colors, no watermark, no signature, no logo, no decorative
> border, no English text, no gibberish pseudo-text.

Do bloku dokleja się zakazy z pola `noSpoiler`, przetłumaczone na angielski,
np. `no building name captions, no dates anywhere`.

### 6.9. Przykład kompletnego promptu

Pozycja manifestu: `r04_hagia_sophia.jpg`, subject "Hagia Sophia z
zewnątrz, epoka bizantyjska", noSpoiler "bez nazwy budowli, bez dat".

> Educational atlas illustration in the style of vintage natural history
> and classic school atlas plates: hand-drawn with fine ink linework and
> soft watercolor-gouache shading, realistic proportions, rich fine detail,
> subtle paper grain, muted harmonious natural palette, soft ambient
> lighting, museum-quality finish. Warm sandy parchment background.
> Byzantine-era Hagia Sophia seen from a three-quarter view: massive
> central dome on pendentives, semi-domes, buttresses, rows of arched
> windows, visible stone and brick texture, a few small human figures for
> scale. Single subject filling most of the frame, horizontal 4:3, plain
> tinted background, no clutter. No text, no letters, no numbers anywhere
> in the image. No flat vector art, no clipart, no stock icons, no stick
> figures, no cartoon, no emoji style, no coloring-book outlines, no heavy
> uniform black contours, no 3D render, no photorealistic photo, no neon or
> oversaturated colors, no watermark, no signature, no logo, no decorative
> border, no English text, no gibberish pseudo-text, no building name
> captions, no dates anywhere.

## 7. Próg jakości i wady dyskwalifikujące

Próg szczegółowości ("test dziesięciu sekund"): jeżeli kształt dałoby się
odręcznie przerysować w dziesięć sekund, jest za prosty. Konkretnie:

- postać ludzka ma twarz z rysami, dłonie z palcami, ubranie z fałdami i
  fakturą tkaniny,
- roślina i zwierzę mają struktury wewnętrzne: żyłkowanie liścia, łuski,
  grupy piór, cieniowanie bryły,
- budowla ma fakturę materiału: ciosy kamienne, warstwy cegieł, dachówki,
- mapa ma ręcznie rysowaną linię brzegową, delikatny relief i wypełnienia
  z fakturą zamiast płaskich plam.

Wady dyskwalifikujące - każda wymusza ponowną generację:

- uproszczone sylwetki bez twarzy i dłoni (stickman, piktogram),
- płaskie, jednolite wypełnienia bez cieniowania i faktury,
- wygląd zestawu ikon stockowych albo clipartu,
- krzykliwe, przesycone kolory,
- pseudonapisy, znak wodny, podpis autora, logo narzędzia,
- puste tło zajmujące większość kadru.

Procedura poprawki: sprawdź, czy blok STYL stoi na początku promptu; dopisz
zaobserwowaną wadę do bloku ZAKAZY (np. `no simplified silhouettes`); dodaj
do STYLU jedno-dwa słowa techniki (`delicate cross-hatching`, `visible
gouache texture`); wygeneruj ponownie. Dwie nieudane próby z rzędu to
sygnał, żeby uprościć TREŚĆ (mniej obiektów, większy motyw główny) - stylu
nie upraszczamy nigdy.

## 8. Treść ilustracji

`subject` z manifestu jest wytyczną treściową. Model:

- przedstawia dokładnie wskazany obiekt, postać albo scenę,
- nie dodaje elementów spoza materiału rozdziału,
- nie miesza epok (żadnej armaty w scenie z VIII wieku),
- przy postaciach historycznych trzyma się udokumentowanej ikonografii
  (Justynian z mozaiki w Rawennie, nie wymyślona twarz).

Poprawność merytoryczna ponad interpretację artystyczną: schemat komórki
roślinnej ma ścianę komórkową na zewnątrz błony, nie odwrotnie. Mapy -
czytelne, z granicami właściwymi epoce i krótką polską legendą. Obiekty
biologiczne - proporcje realne, kolory zgodne z konwencją dydaktyczną
(chloroplasty zielone, jądro ciemniejsze).

## 9. Okładka podręcznika (raz na podręcznik)

Osobny, jednorazowy plik: `cover.png` w folderze `img/` podręcznika. To
JEDYNY plik, który zostaje w formacie PNG i którego nazwa jest sztywna -
dokładnie `cover.png`, bez prefiksu rozdziału. Pionowa, proporcje około
3:4 (np. 600 × 800 px), poniżej 300 KB. Przedstawia temat podręcznika w tym
samym stylu atlasowym; prompt na okładkę pisze się według szablonu z
sekcji 6, a tytuł przedmiotu jest jedynym dozwolonym napisem i musi być
podany dosłownie w bloku TEKST. Bez okładki aplikacja pokaże ikonę
przedmiotu, więc to element mile widziany, ale nieblokujący.

## 10. Lista kontrolna

Liczba plików równa liczbie pozycji manifestu; nazwy identyczne z polami
`filename` (łącznie z wielkością liter). Każdy prompt zbudowany według
sekcji 6: po angielsku, sześć bloków w kolejności, STYL i ZAKAZY wklejone
dosłownie, napisy docelowe po polsku w cudzysłowach. Każdy plik: JPG,
szerokość do 1400 px, poniżej 300 KB, nazwa tylko z `a-z`, `0-9` i
podkreślnika (żadnych `: ? " < > | / \ *`, spacji ani polskich liter). Każdy realizuje `subject`, żaden nie
łamie `noSpoiler` ani nie zdradza odpowiedzi pytań z `usedBy`. Żaden obraz
nie wykazuje wad z sekcji 7 (test dziesięciu sekund zaliczony). Napisy po
polsku, bez błędów, bez pseudołaciny; zero znaków wodnych. Styl jednolity
w obrębie rozdziału i zgodny z resztą podręcznika.
