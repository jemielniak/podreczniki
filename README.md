# podreczniki-content - repo treści (GitHub Pages)

Publiczne repo z treścią aplikacji "Podręczniki". Aplikacja pobiera stąd
katalog i paczki podręczników. Zawartość tego folderu przenieś 1:1 do
osobnego repozytorium i włącz GitHub Pages (Settings → Pages → Deploy from
branch → `main`, folder `/ (root)`).

Po włączeniu Pages adres bazowy to zwykle:

```
https://<twoja-nazwa>.github.io/podreczniki-content
```

Ten adres wpisujesz w aplikacji w JEDNYM miejscu:
`src/config.js` → `CONTENT_BASE_URL`.

## Układ plików

```
catalog.json              katalog: klasy, przedmioty, podręczniki (manifest)
bundles/<id>.json         paczka treści jednego podręcznika (Faza 3: pobierana)
img/<id>/cover.png        okładka podręcznika (pokazywana na liście)
img/<id>/...              obrazki treści (te z pola "images" paczki)
```

## catalog.json - format

```json
{
  "version": 1,
  "levels":   [{ "id": "sp5", "label": "Klasa 5", "stage": "sp", "grade": 5 }],
  "subjects": [{ "id": "historia", "label": "Historia", "icon": "📜" },
               { "id": "repetytorium", "label": "Repetytorium", "icon": "🎯", "special": true }],
  "companions": [{
    "id": "historia-5",
    "levelId": "sp5",
    "subjectId": "historia",
    "title": "Historia - klasa 5",
    "publisher": "Przykładowe Wydawnictwo",
    "cover": "img/historia-5/cover.png",
    "chapterCount": 8,
    "bundleUrl": "bundles/historia-5.json",
    "bundleVersion": 1,
    "bundleHash": "sha256 pola contentHash z paczki",
    "entitlementId": "companion_historia_5",
    "offeringId": "companion_historia_5",
    "freeFirstChapter": true
  }]
}
```

Zasady:

- `levels.stage`: `"sp"` (szkoła podstawowa, klasy 5-8) albo `"lo"` (szkoła
  średnia, klasy 1-4). Aplikacja grupuje karty klas po tym polu.
- `subjects`: wpis z `"special": true` (Repetytorium) jest wyróżniony
  wizualnie i zawsze pokazywany na końcu listy przedmiotów.
- **Każdy companion z `subjectId: "repetytorium"` MUSI mieć
  `freeFirstChapter: false`** - repetytoria nie mają darmowego rozdziału.
  Aplikacja i tak wymusza tę regułę po swojej stronie, ale katalog ma mówić
  prawdę.
- `cover` i `bundleUrl` mogą być ścieżkami względnymi (liczonymi od adresu
  bazowego) albo pełnymi URL-ami `https://...` - oba warianty działają.
- `entitlementId` / `offeringId`: identyfikatory RevenueCat dla odblokowania
  tego podręcznika (użyje ich Faza 4). Konwencja: `companion_<id z podkreśleniami>`.

## Publikacja nowej wersji podręcznika

1. W repo aplikacji: edytuj rozdziały, podbij `bundleVersion`
   w `src/chapters/_bookConfig.js`, uruchom `node scripts/build-bundle.mjs`.
2. Skopiuj wygenerowaną paczkę do `bundles/<id>.json` TUTAJ.
3. W `catalog.json` ustaw `bundleVersion` na nową wartość i `bundleHash` na
   pole `contentHash` z wnętrza paczki (aplikacja unieważnia po tym cache
   w Fazie 3).
4. Wgraj obrazki z listy `images` paczki do `img/<id>/` (dokładnie te nazwy
   plików) oraz okładkę `img/<id>/cover.png`.
5. Commit + push. GitHub Pages publikuje się samo po chwili.

## Uwagi

- Paczka `bundles/historia-5.json` w tym starterze to kopia paczki
  przykładowej wbudowanej w aplikację (id `historia-5`, hash w katalogu jest
  jej prawdziwym `contentHash`).
- `biologia-5` i `repetytorium-historia-8` to wpisy-atrapy: pokazują
  strukturę katalogu, ale ich paczek jeszcze nie ma. W aplikacji otwierają
  ekran "pobieranie w Fazie 3".
- Okładek jeszcze nie ma w repo - aplikacja pokazuje wtedy ikonę przedmiotu
  (wbudowany fallback), niczego nie psując.
- GitHub Pages serwuje pliki z nagłówkami CORS `*`, a aplikacja i tak pobiera
  przez natywny CapacitorHttp, więc webview nie blokuje żądań.

## Faza 3: jak aplikacja pobiera i weryfikuje paczki

1. Przy otwarciu podręcznika aplikacja porównuje `bundleVersion` + `bundleHash`
   z manifestu z tym, co ma zapisane na urządzeniu. Zgodne = otwiera z cache'u
   bez sieci. Różne = pobiera `bundleUrl`, liczy sha256 z
   `JSON.stringify({bookConfig, chapters, images})` sparsowanej paczki
   i porównuje z `bundleHash`. Niezgodność = paczka odrzucona.
2. Obrazki z listy `images` są pobierane od razu po paczce, spod
   `img/<id>/<nazwa>`. Brak pojedynczego pliku nie blokuje podręcznika
   (aplikacja dociągnie go przy następnym otwarciu), ale docelowo wszystkie
   pliki z `images` muszą leżeć w repo.
3. **Publikacja aktualizacji**: wygeneruj paczkę (`node scripts/build-bundle.mjs`
   po podbiciu `bundleVersion` w `_bookConfig.js`), wgraj do `bundles/`,
   w `catalog.json` podbij `bundleVersion` i wklej NOWY `contentHash` jako
   `bundleHash`. Stare wersje na urządzeniach sprzątną się same przy
   pierwszym otwarciu po aktualizacji.

## Paczka testowa

`bundles/biologia-5.json` to mała, poprawna paczka (1 rozdział, 6 ćwiczeń,
1 obrazek `img/biologia-5/b5_test_lupa.png`) służąca wyłącznie do testowania
pobierania end-to-end. Jej `bundleHash` w `catalog.json` jest prawdziwy.
Przed publikacją produkcyjną podmień ją na prawdziwą treść albo usuń wpis
z katalogu.
