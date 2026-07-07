# podreczniki - repozytorium źródeł treści

To jest repozytorium ŹRÓDŁOWE aplikacji "Podręczniki". Tutaj powstają
i mieszkają surowe treści: pliki rozdziałów, obrazki do pytań, infografiki
i mapy pojęć. Wykonawca treści pracuje wyłącznie w tym repozytorium.

Jednej rzeczy to repozytorium nie robi: aplikacja go NIE czyta. Uczniowie
pobierają gotowe, skompilowane paczki z osobnego repozytorium
`podreczniki-content` (to, które serwuje GitHub Pages). Drogę od źródła
do produkcji przechodzi się jednym poleceniem publikacji, które uruchamia
właściciel projektu. Wykonawca tego nie uruchamia - pisze i wysyła źródła,
resztą zajmuje się właściciel.

## Układ plików

Foldery klas leżą w korzeniu repozytorium. Wewnątrz każdej klasy są
przedmioty, a w przedmiocie podręczniki:

```
sp5/ sp6/ sp7/ sp8/          klasy podstawówki
lo1/ lo2/ lo3/ lo4/          klasy liceum
  <przedmiot>/               np. historia, biologia
    <podręcznik>/            np. historia-5-gwo
      _bookConfig.json        tytuł i wydawca podręcznika
      rozdzial01.js           rozdziały (ćwiczenia)
      rozdzial02.js
      img/                    obrazki do pytań (.jpg)
      visuals/rNN/            infografiki i mapy pojęć
      cover.png               okładka (opcjonalna)
_przedmioty.json             rejestr przedmiotów (id, etykieta, ikona)
_promptbooki/                specyfikacje A, B, C dla modelu generującego treść
_INSTRUKCJA_WYKONAWCY.md     jak pracować (wariant przeglądarkowy)
_INSTRUKCJA_WYKONAWCY_GITHUB_DESKTOP.md   jak pracować w GitHub Desktop
```

Foldery i pliki zaczynające się od podkreślnika (`_promptbooki`, instrukcje)
są pomijane przy publikacji - to materiały pomocnicze, nie treść.

## Kto co robi

Wykonawca treści dodaje i poprawia pliki w folderach podręczników: nowy
`rozdzialNN.js`, skompresowane obrazki w `img/`, plansze w `visuals/rNN/`.
Nie dotyka `_bookConfig.json` ani `_przedmioty.json` bez uzgodnienia.
Codzienna praca w GitHub Desktop jest opisana krok po kroku w
`_INSTRUKCJA_WYKONAWCY_GITHUB_DESKTOP.md`.

Właściciel projektu publikuje. Po tym, jak wykonawca wypchnie nową porcję
treści tutaj, właściciel uruchamia jedno polecenie (niżej), które sprawdza
treść, kompiluje ją do paczek i wypycha wynik do `podreczniki-content`.
GitHub Pages rozkłada zmianę, a aplikacja pobiera świeży katalog przy
następnym uruchomieniu.

## Publikacja - jedno polecenie (właściciel)

Publikację uruchamia się z folderu projektu aplikacji (tam, gdzie są
skrypty), nie z tego repozytorium:

```
node scripts/publish-and-push.mjs
```

Skrypt robi trzy rzeczy po kolei. Pobiera najświeższe źródła z tego
repozytorium (`git pull`). Sprawdza i kompiluje treść (`publish-all`) -
przy jakimkolwiek błędzie zatrzymuje się i nic nie wypycha. Gdy wszystko
się zgadza, zapisuje wynik do klona `podreczniki-content` i wypycha go na
GitHub (`git commit` + `git push`).

Ścieżki obu repozytoriów skrypt bierze z pliku `scripts/publish.config.json`
w projekcie aplikacji (ustawia się je raz). Przydatne warianty:

```
node scripts/publish-and-push.mjs --dry-run          pokaż plan, nie zapisuj, nie wypychaj
node scripts/publish-and-push.mjs --only historia-5-gwo   tylko jeden podręcznik
node scripts/publish-and-push.mjs --message "rozdział 5 biologii"
```

Zanim treść pojawi się u uczniów, GitHub Pages musi rozłożyć nową wersję.
Zwykle trwa to około minuty. Adres kontrolny to
`https://jemielniak.github.io/podreczniki-content/catalog.json` - po
publikacji ma tam wzrosnąć numer `version`.

## Zasady nazw i formatu (skrót)

Pełne reguły są w `_promptbooki/`. Najkrótsza wersja: identyfikator
rozdziału to `rNN` (np. `r05`), nazwa pliku to `rozdzialNN.js`. Obrazki do
pytań mają gołe nazwy z prefiksem rozdziału i tylko znaki `a-z`, `0-9`,
podkreślnik (`r05_sosna_szyszka.jpg`). Nazwy plansz w `visuals/` mogą mieć
polskie litery, ale nie znaki nielegalne na Windows (`: ? " / \ | * < >`);
podtytuł zapisuje się jako `_-_`, co w aplikacji daje " - ".

Nazwa folderu podręcznika (jego identyfikator) jest trwała po pierwszej
publikacji - nie zmienia się jej później.
