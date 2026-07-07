# Instrukcja krok po kroku: jak umieścić rozdział w GitHub

Ta instrukcja jest dla osoby, która nie programuje i nie chce niczego
instalować. Wszystko robisz w przeglądarce internetowej. Prowadzi Cię od
zera - od założenia konta - aż po sprawdzenie, że rozdział jest na miejscu.
Nie musisz rozumieć, czym jest GitHub. Traktuj go jak wspólny dysk w
internecie, na którym leżą foldery z podręcznikami.

Czytaj po kolei. Jeśli coś jest niejasne, napisz do Dariusza - lepiej
zapytać niż zgadywać.

---

## Spis treści

0. Co jest potrzebne, zanim zaczniesz
1. Pierwsze logowanie (robisz raz w życiu)
2. Mapa repozytorium - co gdzie leży i czego nie ruszać
3. Z czego składa się jeden rozdział
4. Zapisanie pliku rozdziału z czatu na komputer
5. Przygotowanie obrazków (kompresja w Squoosh)
6. Wgrywanie na GitHub
7. Poprawianie czegoś, co już wgrałeś
8. Skąd wiadomo, że się udało
9. Zgłoszenie "gotowe" do Dariusza
10. Ściąga - co dokąd trafia

Na końcu: najczęstsze wpadki.

---

## 0. Co jest potrzebne, zanim zaczniesz

- przeglądarka internetowa (Chrome, Edge, Firefox - dowolna),
- konto GitHub (założysz w kroku 1, jest darmowe),
- link z zaproszeniem do repozytorium `podreczniki-content` - przyśle Ci go
  Dariusz na e-mail,
- gotowe pliki rozdziału z czatu (plik `rozdzialNN.js` i obrazki).

Nic nie instalujesz. Wszystko dzieje się na stronie github.com.

---

## 1. Pierwsze logowanie (robisz raz w życiu)

1. Wejdź na `github.com`. Kliknij "Sign up" (załóż konto) i podaj adres
   e-mail, hasło i nazwę użytkownika. Potwierdź e-mail, jeśli GitHub o to
   poprosi.
2. Otwórz e-mail od Dariusza z zaproszeniem do repozytorium
   `podreczniki-content`. Kliknij w nim zielony przycisk "Accept invitation"
   (przyjmij zaproszenie). Bez tego kroku nie zobaczysz folderów.
3. Po przyjęciu zaproszenia trafisz na stronę repozytorium. Zapisz ją w
   zakładkach przeglądarki - to Twoje miejsce pracy. Adres to
   `github.com/jemielniak/podreczniki-content`.

Od tej pory zaczynasz zawsze od wejścia na tę stronę.

---

## 2. Mapa repozytorium - co gdzie leży i czego nie ruszać

Po wejściu na stronę repozytorium widzisz w korzeniu kilka folderów. Cała
Twoja praca dzieje się WYŁĄCZNIE w folderze `content-src/`. Otwórz go i
zobaczysz układ klas:

```
content-src/                 ← tu pracujesz, wchodzisz na start
  sp5/ sp6/ sp7/ sp8/        klasy podstawówki
  lo1/ lo2/ lo3/ lo4/        klasy liceum
    <przedmiot>/             np. historia, biologia, chemia
      <podręcznik>/          np. historia-5-gwo
        _bookConfig.json      ustawienia podręcznika
        rozdzial01.js         rozdziały
        rozdzial02.js
        img/                  obrazki do pytań
        visuals/              infografiki i mapy pojęć
        cover.png             okładka
```

Żeby dojść do swojego podręcznika, klikasz kolejno: `content-src` → klasa →
przedmiot → podręcznik. Na przykład: `content-src` → `sp5` → `historia` →
`historia-5-gwo`.

W KORZENIU repozytorium (obok `content-src/`) leżą foldery `bundles/` oraz
`img/` i plik `catalog.json`. To jest gotowy materiał, który aplikacja sama
sobie generuje przy publikacji. NIE otwieraj ich i niczego w nich nie zmieniaj
- Twoje pliki wgrywasz zawsze wewnątrz `content-src/`.

Czego jeszcze NIE ruszać:

- pliku `_bookConfig.json` (ustawienia podręcznika - pilnuje ich Dariusz),
- pliku `content-src/_przedmioty.json`, jeśli go zobaczysz (lista przedmiotów),
- cudzych folderów - pracuj tylko w podręczniku, który masz przydzielony,
- nazw folderów podręczników (raz nadana nazwa zostaje na zawsze).

Jeśli nie widzisz folderu, do którego masz coś wgrać, napisz do Dariusza -
prawdopodobnie trzeba go najpierw założyć.

---

## 3. Z czego składa się jeden rozdział

Jeden rozdział to zwykle:

- jeden plik `rozdzialNN.js` (np. `rozdzial03.js`) - treść pytań,
- kilka-kilkanaście obrazków `.jpg` do pytań (folder `img/`),
- opcjonalnie 6 plansz w folderze `visuals/` (3 infografiki + 3 mapy pojęć).

Wszystkie te pliki dostajesz gotowe: plik rozdziału z czatu (Specyfikacja A),
obrazki z czatu (Specyfikacja B) i plansze (Specyfikacja C). Twoje zadanie to
zapisać je na komputer i wgrać we właściwe miejsca. Numer w nazwie pliku
(`rozdzial03.js`) mówi, który to rozdział - pilnuj, żeby się zgadzał.

---

## 4. Zapisanie pliku rozdziału z czatu na komputer

Plik rozdziału to zwykły tekst, ale musi mieć rozszerzenie `.js` i być
zapisany w kodowaniu UTF-8 (żeby polskie znaki nie zamieniły się w krzaczki).

Na Windows 11:

1. W czacie skopiuj CAŁĄ treść pliku rozdziału (od pierwszej linijki z
   komentarzem po ostatnią linię `export default chapter;`).
2. Otwórz Notatnik (Notepad): menu Start → wpisz "Notatnik".
3. Wklej skopiowaną treść (Ctrl+V).
4. Kliknij "Plik" → "Zapisz jako".
5. W okienku zapisu:
   - w polu "Nazwa pliku" wpisz dokładnie `rozdzial03.js` (albo z numerem
     Twojego rozdziału),
   - w polu "Zapisz jako typ" wybierz "Wszystkie pliki" (żeby Notatnik nie
     dokleił `.txt`),
   - u dołu okienka w polu "Kodowanie" wybierz "UTF-8",
   - wskaż folder na komputerze, np. Pulpit, i kliknij "Zapisz".
6. Sprawdź, że zapisany plik nazywa się `rozdzial03.js`, a nie
   `rozdzial03.js.txt`. Jeśli nie widzisz rozszerzeń, w Eksploratorze plików
   włącz "Widok" → zaznacz "Rozszerzenia nazw plików".

Ta sama metoda działa dla manifestu ilustracji (`rNN_ilustracje.json`), gdyby
był potrzebny - ale manifest zostaje u Ciebie i NIE trafia na GitHub, służy
tylko do wygenerowania obrazków.

---

## 5. Przygotowanie obrazków (kompresja w Squoosh)

Obrazki z generatora bywają ciężkie (kilka MB). Do aplikacji muszą być lekkie
- poniżej 300 KB - bo uczniowie pobierają je przez komórkowy internet. Ten
krok zmniejsza plik i zamienia go na format `.jpg`. Robisz to na darmowej
stronie, bez instalacji.

Strona: `squoosh.app`. Dla KAŻDEGO obrazka do pytania:

1. Wejdź na `squoosh.app`. Przeciągnij obrazek na stronę (albo kliknij i
   wskaż plik).
2. Po prawej stronie zobaczysz panel ustawień. Znajdź sekcję "Resize"
   (zmiana rozmiaru), zaznacz ją i w polu "Width" (szerokość) wpisz `1400`.
   Wysokość dobierze się sama.
3. Niżej, w polu formatu (rozwijana lista), wybierz "MozJPEG". Suwak
   "Quality" (jakość) ustaw na `70`.
4. Na dole zobaczysz nowy rozmiar pliku (np. "180 KB"). Ma być poniżej
   300 KB. Jeśli jest większy, zmniejsz "Quality" do `60`.
5. Kliknij przycisk pobierania (strzałka w dół, prawy dolny róg).
6. Zapisz plik pod DOKŁADNĄ nazwą, jakiej wymaga pytanie - taką, jaka jest w
   pliku rozdziału w polu `image` (np. `r03_zamek_krzyzacki.jpg`). Wielkość
   liter musi się zgadzać.

Dla PLANSZ z folderu `visuals/` (infografiki i mapy pojęć) robisz to samo, z
jedną różnicą: w kroku 2 wpisz szerokość `1600` zamiast `1400`. Nazwy plansz
zostawiasz takie, jakie podał czat (np. `01_Bizancjum_w_skrocie.jpg`) - tu
polskie znaki w nazwie są dozwolone.

Okładkę `cover.png` zostawiasz w formacie PNG (nie przerabiaj jej na JPG),
ale też zadbaj, żeby ważyła poniżej 300 KB.

Jeśli masz dużo obrazków naraz, wygodniejsza bywa strona `iloveimg.com`
(narzędzia "Zmień rozmiar" i "Kompresja obrazu" obsługują wiele plików za
jednym razem). Zasada ta sama: szerokość 1400 px dla pytań, 1600 px dla
plansz, format JPG, waga poniżej 300 KB.

---

## 6. Wgrywanie na GitHub

Teraz przenosisz gotowe pliki na wspólny dysk. Wszystko w przeglądarce.

### 6.1. Wgranie pliku rozdziału

1. Na stronie repozytorium wejdź do swojego podręcznika: klikaj kolejno
   `content-src` → klasa → przedmiot → podręcznik (np. `content-src` →
   `sp5` → `historia` → `historia-5-gwo`). Powinieneś zobaczyć istniejące
   pliki `rozdzial01.js` itd.
2. Kliknij przycisk "Add file" (u góry po prawej) → "Upload files".
3. Przeciągnij plik `rozdzial03.js` w zaznaczone pole (albo kliknij "choose
   your files" i wskaż go).
4. Na dole, w polu opisu, wpisz krótko po polsku, co dodajesz, np.
   `Historia 5 - rozdział 3`.
5. Kliknij zielony przycisk "Commit changes". Po chwili plik pojawi się na
   liście.

### 6.2. Wgranie obrazków do pytań

1. W folderze podręcznika wejdź do podfolderu `img/` (kliknij go na liście).
   Jeśli podfolderu `img/` jeszcze nie ma, patrz uwaga na końcu tej sekcji.
2. Kliknij "Add file" → "Upload files".
3. Przeciągnij WSZYSTKIE skompresowane pliki `.jpg` tego rozdziału naraz
   (możesz zaznaczyć wiele plików w Eksploratorze i przeciągnąć razem).
4. Wpisz opis, np. `Historia 5 - obrazki do rozdziału 3`.
5. Kliknij "Commit changes".

### 6.3. Wgranie plansz (infografiki i mapy pojęć)

Plansze mają zagnieżdżone foldery (`r03/Infografiki/...` i
`r03/Mapy pojęć/...`), więc wgrywasz cały folder naraz - przeglądarka
zachowa jego wewnętrzną strukturę.

1. W folderze podręcznika wejdź do podfolderu `visuals/` (jeśli istnieje;
   jeśli nie - patrz uwaga poniżej).
2. Kliknij "Add file" → "Upload files".
3. Z Eksploratora plików przeciągnij CAŁY folder `r03` (ten, w którym są
   podfoldery `Infografiki` i `Mapy pojęć`) w pole na stronie. GitHub wgra
   go z zachowaniem podfolderów.
4. Wpisz opis, np. `Historia 5 - infografiki i mapy do rozdziału 3`.
5. Kliknij "Commit changes".

Uwaga o brakujących podfolderach: jeśli podręcznik jest nowy i nie ma jeszcze
`img/` ani `visuals/`, nie szkodzi - przeciągnij od razu cały folder `img`
(z obrazkami w środku) albo cały folder `visuals` (z folderem `r03` w
środku) tak samo jak wyżej. Przeglądarka utworzy brakujące foldery przy
wgraniu.

Limity jednego wgrania: do około 100 plików naraz i do 25 MB na pojedynczy
plik. Twoje skompresowane obrazki są dużo mniejsze, więc problem pojawia się
tylko przy naprawdę dużych partiach - wtedy wgraj w dwóch turach.

---

## 7. Poprawianie czegoś, co już wgrałeś

Nie usuwasz starego pliku - po prostu wgrywasz nowy o tej samej nazwie, a
GitHub podmieni zawartość.

- Poprawiony obrazek albo plik rozdziału: wgraj go jeszcze raz według
  kroku 6, pod DOKŁADNIE tą samą nazwą. Nowa wersja zastąpi starą.
- Drobna poprawka w treści pliku rozdziału (np. literówka): wejdź w plik na
  liście, kliknij ikonę ołówka ("Edit this file") u góry po prawej, popraw
  tekst w oknie, potem "Commit changes" na dole. Uważaj tylko, żeby nie
  ruszyć cudzysłowów i nawiasów.

---

## 8. Skąd wiadomo, że się udało

Po każdym "Commit changes" plik od razu widać na liście w repozytorium -
możesz w niego kliknąć i sprawdzić, czy to właściwa zawartość. Obrazek po
kliknięciu wyświetli się jako podgląd. To wystarczy, żeby wiedzieć, że plik
dotarł.

Czy pytania działają w aplikacji - to sprawdza Dariusz przy publikacji.
Jego narzędzie automatycznie kontroluje każdy rozdział i albo publikuje, albo
zwraca listę błędów z dokładnym wskazaniem pliku i powodu. Jeśli coś jest do
poprawki, dostaniesz to wypisane po polsku.

---

## 9. Zgłoszenie "gotowe" do Dariusza

Gdy wgrasz komplet (plik rozdziału + obrazki + ewentualne plansze), napisz do
Dariusza krótką wiadomość: który podręcznik i który rozdział jest gotowy do
publikacji. Na przykład: "Historia 5 GWO - rozdział 3 wgrany, obrazki i
plansze też". Reszta należy do niego.

---

## 10. Ściąga - co dokąd trafia

Wszystkie ścieżki poniżej są WEWNĄTRZ folderu podręcznika, czyli
`content-src/<klasa>/<przedmiot>/<podręcznik>/`.

| Co | Dokąd (w folderze podręcznika) | Format | Wzór nazwy | Waga |
|---|---|---|---|---|
| Plik rozdziału | wprost w folderze podręcznika | `.js`, UTF-8 | `rozdzial03.js` | - |
| Obrazek do pytania | podfolder `img/` | `.jpg`, szer. do 1400 px | `r03_zamek_krzyzacki.jpg` | < 300 KB |
| Infografika / mapa pojęć | podfolder `visuals/r03/...` | `.jpg`, szer. do 1600 px | `01_Bizancjum_w_skrocie.jpg` | < 300 KB |
| Okładka | podfolder `img/` | `.png` | dokładnie `cover.png` | < 300 KB |
| Manifest ilustracji | NIGDZIE (zostaje u Ciebie) | - | - | - |

---

## Najczęstsze wpadki

Wielkość liter w nazwach obrazków. Pytanie odwołuje się do
`r03_zamek.jpg`, a plik nazywa się `R03_Zamek.jpg` - dla komputera to dwa
różne pliki i obrazek się nie pokaże. Nazwy muszą się zgadzać co do znaku.

Polskie znaki w nazwach. W nazwach obrazków do pytań NIE używamy polskich
znaków (piszemy `krzyzacki`, nie `krzyżacki`). W nazwach plansz w
`visuals/` polskie znaki są dozwolone.

Zła wielkość pliku. Obrazek powyżej 300 KB spowalnia pobieranie w
aplikacji. Jeśli po kompresji plik jest za duży, zejdź z jakością w Squoosh
do 60.

Notatnik dokleił `.txt`. Plik `rozdzial03.js.txt` nie zadziała. Przy
zapisie wybierz typ "Wszystkie pliki" i sprawdź rozszerzenie w Eksploratorze.

Krzaczki zamiast polskich liter. Powstają, gdy plik zapiszesz w złym
kodowaniu. Przy zapisie w Notatniku wybierz "UTF-8".

Podmieniony cudzysłów w pliku rozdziału. Jeśli edytujesz plik `.js` przez
ołówek na GitHub, nie zamieniaj prostych cudzysłowów `"` na ozdobne „ ” -
ozdobne psują plik. Najbezpieczniej drobne poprawki też robić w Notatniku i
wgrywać na nowo.
