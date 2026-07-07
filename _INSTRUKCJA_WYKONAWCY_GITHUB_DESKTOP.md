# Instrukcja: praca w GitHub Desktop na Windows - dla twórcy treści

Ta instrukcja prowadzi Cię od momentu, w którym przyjąłeś zaproszenie do
repozytorium, do wygodnej codziennej pracy na własnym komputerze. Zakłada,
że nie znasz GitHuba i niczego wcześniej nie instalowałeś. Czytaj po kolei
i nie przeskakuj kroków.

Dwa pojęcia na start, obrazowo. Repozytorium to wspólny folder w
internecie - nazywa się `podreczniki-content` i należy do Dariusza. Klon to
kopia tego folderu na Twoim dysku. Pracujesz na kopii, a program GitHub
Desktop przenosi Twoje zmiany do internetu jednym przyciskiem.

Zasada nadrzędna, od której zależy bezpieczeństwo całej aplikacji: Twoje
miejsce pracy to WYŁĄCZNIE podfolder `content-src`. Wszystko poza nim
(foldery `bundles`, `img` oraz plik `catalog.json` w głównym folderze) to
materiał generowany automatycznie - aplikacja uczniów czyta go wprost,
więc ręczna zmiana czegokolwiek tam może zepsuć działające podręczniki.
Ta instrukcja pokazuje w kroku 4 i 6, jak ustawić sobie pracę tak, żeby
poza `content-src` w ogóle nie zaglądać.

---

## Spis treści

1. Gdzie jest ten katalog, czyli dostęp po przyjęciu zaproszenia
2. Instalacja GitHub Desktop (raz)
3. Logowanie w GitHub Desktop (raz)
4. Pobranie katalogu na dysk, czyli klonowanie (raz)
5. Skrót na pulpicie - Twoje jedyne wejście do plików
6. Codzienna praca: pobierz, pracuj, sprawdź, wyślij
7. Poprawianie i usuwanie plików
8. Czego nigdy nie robić
9. Gdy coś nie gra - najczęstsze sytuacje
10. Ściąga na jeden ekran

---

## 1. Gdzie jest ten katalog, czyli dostęp po przyjęciu zaproszenia

Po kliknięciu "Accept invitation" nic się samo nie otwiera i nigdzie nie ma
nowego kafelka - to normalne. Repozytorium znajdujesz po prostu pod jego
adresem.

1. Otwórz przeglądarkę i zaloguj się na `github.com` na TO konto, na które
   przyszło zaproszenie (prawy górny róg - jeśli widzisz "Sign in", kliknij
   i zaloguj się).
2. Wejdź pod adres:

   ```
   https://github.com/jemielniak/podreczniki-content
   ```

3. Zapisz tę stronę w zakładkach przeglądarki (Ctrl+D) - to Twój punkt
   startowy na przyszłość.
4. Zobaczysz listę folderów i plików. Twoim miejscem pracy jest folder
   `content-src` - kliknij go, a w środku znajdziesz foldery klas
   (`sp5`, `sp6`, ...), a w nich przedmioty i podręczniki.

Jeśli coś się nie zgadza:

- Strona pokazuje błąd 404 ("This is not the web page you are looking
  for"). Dwie możliwe przyczyny: nie jesteś zalogowany albo jesteś
  zalogowany na inne konto niż to z zaproszenia. Sprawdź awatar w prawym
  górnym rogu. Zaproszenie jest też ważne tylko 7 dni - jeśli minęło,
  poproś Dariusza o nowe.
- Repozytorium się otwiera, ale NIE MA w nim folderu `content-src`
  (widzisz tylko `bundles`, `img`, `catalog.json`). To znaczy, że folder
  roboczy nie został jeszcze wgrany - napisz do Dariusza i poczekaj z
  dalszymi krokami, aż potwierdzi.

## 2. Instalacja GitHub Desktop (raz)

1. Wejdź na `desktop.github.com`.
2. Kliknij "Download for Windows (64bit)".
3. Uruchom pobrany plik `GitHubDesktopSetup-x64.exe` (znajdziesz go w
   folderze Pobrane). Instalator nie zadaje pytań - po chwili aplikacja
   otworzy się sama.

## 3. Logowanie w GitHub Desktop (raz)

1. Na ekranie powitalnym kliknij "Sign in to GitHub.com".
2. Otworzy się przeglądarka. Jeśli trzeba, zaloguj się (to samo konto co w
   kroku 1!) i kliknij zielony przycisk "Authorize desktop".
3. Przeglądarka zapyta, czy otworzyć GitHub Desktop - zgódź się
   ("Otwórz GitHubDesktop").
4. Z powrotem w aplikacji pojawi się ekran "Configure Git" z Twoją nazwą i
   adresem e-mail. Niczego nie zmieniaj, kliknij "Finish".

## 4. Pobranie katalogu na dysk, czyli klonowanie (raz)

1. W GitHub Desktop wybierz z menu: File → Clone repository.
2. W okienku przejdź na zakładkę "GitHub.com". Na liście powinno być
   `jemielniak/podreczniki-content` - kliknij je. Jeśli listy nie widać
   albo jest pusta, przejdź na zakładkę "URL" i w górne pole wklej:

   ```
   https://github.com/jemielniak/podreczniki-content
   ```

3. Pole "Local path" mówi, GDZIE na dysku wyląduje kopia. Zostaw
   proponowaną ścieżkę w Dokumentach (kończy się na
   `\Documents\GitHub\podreczniki-content`) ALBO kliknij "Choose..." i
   wskaż inne miejsce. Jedna zasada jest twarda: folder NIE może być w
   miejscu synchronizowanym z chmurą (OneDrive, Dysk Google, Dropbox).
   Chmura podmienia pliki w tle i psuje współpracę z GitHubem. Ścieżka
   z "OneDrive" w nazwie odpada; zwykłe `C:\Users\...\Documents` jest w
   porządku, o ile Twoje Dokumenty nie są spięte z OneDrive - jeśli są,
   wybierz np. `C:\Praca\podreczniki-content`.
4. Kliknij "Clone". Zobaczysz pasek postępu - repozytorium zawiera
   obrazki wszystkich podręczników, więc waży kilkaset megabajtów i
   pierwsze pobranie może potrwać od kilku do kilkunastu minut. To
   jednorazowe; później pobierają się już tylko zmiany.
5. Po zakończeniu zobaczysz główne okno programu: u góry trzy przyciski
   (nazwa repozytorium, "Current branch: main", "Fetch origin"), a po
   lewej zakładki "Changes" i "History". Tak ma być.

## 5. Skrót na pulpicie - Twoje jedyne wejście do plików

GitHub Desktop nie ma ustawienia "pracuj tylko w jednym podfolderze",
więc ochronę budujemy nawykiem: na dysk wchodzisz zawsze przez skrót
prowadzący prosto do `content-src`, a główny folder repozytorium omijasz.

1. W GitHub Desktop wybierz z menu: Repository → Show in Explorer.
   Otworzy się folder `podreczniki-content` na Twoim dysku.
2. Wejdź do podfolderu `content-src`.
3. Wróć o jeden poziom wyżej (strzałka wstecz), tak żeby folder
   `content-src` widzieć na liście. Kliknij go PRAWYM przyciskiem.
   W Windows 11 wybierz "Pokaż więcej opcji", potem "Wyślij do" →
   "Pulpit (utwórz skrót)". W Windows 10 pozycja "Wyślij do" jest od
   razu w menu.
4. Na pulpicie pojawi się skrót "content-src - skrót". Możesz zmienić mu
   nazwę na np. "Podręczniki - treści".

Od tej chwili do plików wchodzisz WYŁĄCZNIE tym skrótem. Wewnątrz
poruszasz się po znajomej strukturze: klasa → przedmiot → podręcznik
(np. `sp5` → `historia` → `historia-5-gwo`). Co dokładnie wkładasz do
folderu podręcznika (nazwy plików, rozmiary obrazków, kompresja w
Squoosh), opisuje sąsiedni dokument `_INSTRUKCJA_WYKONAWCY.md` w
sekcjach 3, 4 i 5 - tamte zasady obowiązują bez zmian, różni się tylko
sposób wysyłki.

## 6. Codzienna praca: pobierz, pracuj, sprawdź, wyślij

Ten rytm powtarzasz przy każdej porcji pracy. Cztery ruchy.

### 6.1. Pobierz (zawsze na początku)

1. Otwórz GitHub Desktop.
2. Kliknij "Fetch origin" (u góry). Jeśli przycisk zmieni się na
   "Pull origin" z liczbą - kliknij go też. Właśnie pobrałeś cudze
   zmiany, w tym efekty publikacji. Zaczynanie dnia od tego kroku
   zapobiega konfliktom.

### 6.2. Pracuj

Przez skrót z pulpitu wejdź do swojego podręcznika i rób swoje: dodaj
`rozdzialNN.js`, wrzuć skompresowane obrazki do `img\`, plansze do
`visuals\rNN\Infografiki` i `visuals\rNN\Mapy pojęć`. GitHub Desktop może
być w tym czasie zamknięty - on tylko obserwuje folder.

### 6.3. Sprawdź (kontrola bezpieczeństwa przed wysyłką)

1. Wróć do GitHub Desktop, zakładka "Changes" po lewej. Zobaczysz listę
   wszystkich plików, które doszły lub się zmieniły, każdy z ptaszkiem.
2. Przeczytaj ścieżki. KAŻDA pozycja musi zaczynać się od `content-src/`.
   Przykład dobrej pozycji:
   `content-src/sp5/historia/historia-5-gwo/rozdzial03.js`.
3. Jeżeli na liście jest COKOLWIEK innego (ścieżka zaczynająca się od
   `bundles/`, od `img/` bez `content-src` na początku, albo sam
   `catalog.json`) - to przypadkowa zmiana poza Twoim terenem. Zrób dwie
   rzeczy: odznacz ptaszek przy tym pliku, a następnie kliknij go PRAWYM
   przyciskiem i wybierz "Discard changes...", potwierdź. Plik wraca do
   stanu sprzed Twojej zmiany i nie zostanie wysłany.
4. Ten jeden rzut oka na listę to cała tajemnica bezpiecznej pracy.
   Wysyłasz tylko to, co sam świadomie zaznaczyłeś.

### 6.4. Wyślij

1. W polu "Summary (required)" na dole po lewej wpisz krótki opis po
   polsku, np. `Historia 5 GWO - rozdział 3 + obrazki`. Pole
   "Description" zostaw puste.
2. Kliknij niebieski przycisk "Commit to main". Zmiany są teraz
   zapakowane, ale wciąż tylko u Ciebie.
3. Kliknij "Push origin" (u góry). Dopiero to wysyła pliki do internetu.
   Gdy strzałka z liczbą zniknie, wysyłka się udała.
4. Kontrola: odśwież stronę repozytorium w przeglądarce (zakładka z
   kroku 1) i wejdź w `content-src` do swojego podręcznika - Twoje pliki
   są na liście, obok widnieje Twój opis.

Na koniec porcji napisz Dariuszowi, który podręcznik i rozdział jest
gotowy - publikacja i automatyczna kontrola jakości są po jego stronie.
Jeśli kontrola coś znajdzie, dostaniesz komunikaty po polsku ze
wskazaniem pliku i pytania do poprawki.

## 7. Poprawianie i usuwanie plików

Poprawka pliku: edytuj go na dysku (przez skrót!) albo podmień obrazek
plikiem o tej samej nazwie. Desktop sam zauważy zmianę - dalej rytm z
punktu 6.3 i 6.4.

Usunięcie pliku: skasuj go w Eksploratorze. Na liście "Changes" pojawi
się z czerwonym oznaczeniem jako usunięty - commit i push jak zwykle,
usunięcie też jest zmianą do wysłania.

Zmiana nazwy pliku: najbezpieczniej zrobić to w Eksploratorze (F2), a
Desktop pokaże parę usunięty + nowy. To w porządku.

## 8. Czego nigdy nie robić

- Nie zmieniaj niczego poza `content-src` (punkt 6.3 wyłapie wpadki).
- Nie klikaj w "Current branch" i nie twórz gałęzi (Branch → New branch) -
  u góry ma zawsze być napisane `main`.
- Nie używaj niczego w zakładce "History", zwłaszcza opcji "Revert
  changes in commit".
- Nie przenoś sklonowanego folderu w inne miejsce na dysku i nie wciągaj
  go do chmury (OneDrive, Dysk Google).
- Nie zmieniaj nazw folderów podręczników ani plików `_bookConfig.json`
  i `_przedmioty.json`.
- Nie pracuj na dwóch kopiach naraz (np. druga kopia na innym komputerze
  bez pobrania zmian) - zawsze najpierw "Fetch/Pull".

## 9. Gdy coś nie gra - najczęstsze sytuacje

Push odrzucony, komunikat o nowszych zmianach na serwerze ("newer
commits on the remote"). Kliknij "Pull origin", poczekaj, potem znów
"Push origin". To znaczy tylko tyle, że ktoś wysłał coś przed Tobą.

Desktop mówi o konflikcie ("resolve conflicts"). Zatrzymaj się i napisz
do Dariusza - nic nie klikaj dalej. Konflikt zdarza się wyłącznie, gdy
dwie osoby zmieniły TEN SAM plik, więc przy pracy na osobnych
podręcznikach praktycznie nie występuje.

Na liście "Changes" są dziesiątki plików, których nie ruszałeś. Najpewniej
folder trafił pod synchronizację chmury, która masowo dotyka pliki.
Niczego nie commituj, napisz do Dariusza.

Zapisujesz plik, a lista "Changes" pozostaje pusta ("No local changes").
Zapisujesz w złym miejscu - w innej kopii folderu albo w Pobranych.
Wejdź przez skrót z pulpitu i zapisz tam.

W Desktop widnieje inne repozytorium. Kliknij w lewym górnym rogu
"Current repository" i wybierz `podreczniki-content` z listy.

Chcesz tylko szybko coś podejrzeć bez komputera. Strona repozytorium w
przeglądarce zawsze działa - a drobne wgrywki da się zrobić wariantem
przeglądarkowym opisanym w `_INSTRUKCJA_WYKONAWCY.md`. Obie drogi
prowadzą do tego samego miejsca.

## 10. Ściąga na jeden ekran

| Kiedy | Co klikasz |
|---|---|
| Początek pracy | GitHub Desktop → "Fetch origin" (i "Pull origin", jeśli się pojawi) |
| Dodawanie plików | skrót z pulpitu → klasa → przedmiot → podręcznik |
| Przed wysyłką | zakładka "Changes": każda ścieżka zaczyna się od `content-src/`; obce pozycje - odznacz i "Discard changes" |
| Wysyłka | opis w "Summary" → "Commit to main" → "Push origin" |
| Kontrola | odśwież stronę repo w przeglądarce, znajdź swoje pliki w `content-src` |
| Coś dziwnego | zatrzymaj się i napisz do Dariusza |
