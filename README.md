# content-src - treści podręczników (instrukcja dla autora treści)

Ten folder to całe Twoje miejsce pracy. Nie musisz znać programowania -
wystarczy trzymać się układu folderów i formatu ćwiczeń.

Do generowania treści służą gotowe promptbooki w folderze `_promptbooki/`
(A - ćwiczenia, B - ilustracje do pytań, C - infografiki i mapy pojęć).
Pliki, które z nich wychodzą, są od razu gotowe do wgrania - bez dalszej
obróbki. Wgrywanie na GitHub krok po kroku dla osoby nietechnicznej opisuje
`_INSTRUKCJA_WYKONAWCY.md`.

## Układ folderów

```
content-src/
  sp5/ sp6/ sp7/ sp8/        klasy szkoły podstawowej
  lo1/ lo2/ lo3/ lo4/        klasy szkoły średniej
    <przedmiot>/             np. historia, biologia, chemia, repetytorium
      <id-podręcznika>/      np. chemia-7-nowa-era (małe litery, cyfry, myślniki)
        _bookConfig.json     tytuł podręcznika (i ewentualnie ikona, wydawca, free)
        rozdzial01.js        rozdziały z ćwiczeniami (albo rozdzial01.json)
        rozdzial02.js        ...
        img/                 obrazki do ćwiczeń
        cover.png            okładka podręcznika
```

Położenie folderu mówi wszystko: klasa i przedmiot biorą się ze ścieżki,
identyfikator podręcznika z nazwy jego folderu. Nazwy folderu podręcznika
NIE zmienia się po pierwszej publikacji.

Podręcznik z polem `"free": true` w `_bookConfig.json` jest w aplikacji w
całości darmowy (wszystkie rozdziały otwarte, bez zakupu) - to tryb testowy.
Bez tego pola obowiązuje normalna reguła: darmowy rozdział 1, reszta za
zakupem. Pole usuwasz, gdy podręcznik ma być płatny.

Repetytoria (przygotowanie do egzaminów) trafiają do folderu
`repetytorium` w klasach egzaminacyjnych: `sp7`, `sp8`, `lo3`, `lo4`.
W aplikacji pojawią się automatycznie na złotej karcie "Repetytorium"
obok przedmiotów tej klasy. Repetytoria nie mają darmowego rozdziału -
to też dzieje się samo.

## Wersja robocza (szkic)

Folder podręcznika zaczynający się od podkreślnika, np.
`_chemia-7-nowa-era`, jest SZKICEM - publikacja go pomija. Pracuj
spokojnie w szkicu; gdy treść jest gotowa, zmień nazwę folderu
(usuń podkreślnik).

Gotowy, kompletny przykład ze wszystkimi 10 typami ćwiczeń leży w
`sp7/chemia/_chemia-7-przyklad/` - najlepiej zacząć od skopiowania go.

## Nowy podręcznik krok po kroku

1. Skopiuj folder przykładu w docelowe miejsce, np.
   `sp7/chemia/_chemia-7-nowa-era/` (na razie ze szkicowym podkreślnikiem).
   Albo poproś o wygenerowanie szkieletu komendą
   `node scripts/new-companion.mjs` (opis w BUILD_PROGRESS.md).
2. W `_bookConfig.json` wpisz tytuł (oraz wydawcę, jeśli ma być widoczny):

   ```json
   { "title": "Chemia - klasa 7", "publisher": "Nowa Era" }
   ```

3. Napisz rozdziały `rozdzial01.js`, `rozdzial02.js`, ... Format ćwiczeń
   (10 typów, wszystkie pola z przykładami) opisuje plik
   `src/chapters/_SZABLON_ROZDZIALU.js`. Każde ćwiczenie ma unikalny `id`
   i sekcję z listy `sectionOrder` rozdziału.
4. Obrazki wrzuć do `img/` i podawaj w ćwiczeniach SAMĄ nazwę pliku,
   np. `"image": "r01_uklad_okresowy.jpg"`. Zalecany format to `.jpg`
   skompresowany do szerokości ok. 1400 px i wagi poniżej 300 KB
   (uczniowie pobierają je przez komórkowy internet). Bez spacji i bez
   polskich znaków w nazwach plików. Wielkość liter w nazwie musi być
   identyczna w ćwiczeniu i w pliku.
5. Dodaj okładkę `cover.png` (pionowa, proporcje mniej więcej 3:4).
6. Zmień nazwę folderu - usuń podkreślnik. Gotowe: resztą (publikacją)
   zajmuje się właściciel projektu.

Jeśli przedmiotu, którego potrzebujesz, nie ma jeszcze na liście
w `_przedmioty.json`, zgłoś to - dodanie go to jedna linijka.

## Aktualizacja istniejącego podręcznika

Po prostu popraw pliki rozdziałów albo dodaj nowe (`rozdzial09.js`, ...).
Numeracji wersji nie dotykasz - pilnuje jej automat przy publikacji.

## Infografiki i mapy pojęć (opcjonalne)

Obok rozdziałów możesz dodać folder `visuals` z grafikami do oglądania
w aplikacji. Układ:

```
visuals/
  r01/
    Infografiki/
      01_Czas_i_epoki.jpg
      02_Zycie_ludzi_paleolitu.jpg
    Mapy pojęć/
      01_Powstanie_pierwszych_spoleczenstw.jpg
  r02/
    ...
```

Zasady:

- nazwa folderu w `visuals/` to id rozdziału (`r01`, `r02`...) - musi istnieć
  taki rozdział,
- podfoldery rozpoznawane po nazwie: `Infografiki` oraz `Mapy pojęć`
  (może być też `Mapy_pojec` - polskie znaki nie są wymagane),
- formaty plików: `.jpg`, `.png`, `.webp`,
- NAZWA PLIKU staje się tytułem w aplikacji: podkreślenia zamieniają się na
  spacje, numer z przodu (`01_`) znika. `02_Zycie_ludzi_paleolitu.jpg`
  wyświetli się jako "Zycie ludzi paleolitu" - polskie znaki w nazwie pliku
  są mile widziane i bezpieczne (`02_Życie_ludzi_paleolitu.jpg`),
- numer z przodu ustala kolejność wyświetlania,
- folder zaczynający się od `_` jest szkicem i nie publikuje się,
- KOMPRESUJ grafiki przed dodaniem: docelowo plik poniżej 300 KB
  (JPEG jakość ~70, szerokość do 1600 px wystarcza na telefonach).
  Uczniowie pobierają te pliki przez komórkową transmisję danych.

W aplikacji rozdział z wizualizacjami dostaje na karcie przycisk
"🖼 Infografiki i mapy (N)"; w rozdziale zamkniętym przycisk otwiera paywall,
tak jak sam rozdział.

## Częste błędy, które zatrzyma kontrola jakości

Publikację poprzedza automatyczna walidacja - komunikaty są po polsku
i wskazują plik, id ćwiczenia i powód. Najczęstsze potknięcia:
numer poprawnej odpowiedzi spoza listy opcji, liczba luk `__________`
w pytaniu inna niż liczba odpowiedzi, dwa ćwiczenia o tym samym id,
sekcja nieobecna w `sectionOrder`, obrazek podany ze ścieżką
(`img/plik.png` zamiast samego `plik.png`) albo plik obrazka o innej
wielkości liter niż w ćwiczeniu.
