// Skróty sekcji (do identyfikatorów ćwiczeń):
//   GEO  = Geografia i czytanie map
//   SKA  = Skala i przedstawianie rzeźby terenu
//   PAS  = Pasy rzeźby Polski
//   GOW  = Krajobrazy gór i wyżyn
//   NIZ  = Krajobrazy nizin, pojezierzy i pobrzeży
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_GEO_01",
    "section": "Geografia i czytanie map",
    "type": "single_choice",
    "prompt": "Która nauka zajmuje się wodami Ziemi?",
    "options": [
      "pedologia",
      "geomorfologia",
      "biogeografia",
      "geologia",
      "meteorologia",
      "hydrologia"
    ],
    "image": "r01_sfery_srodowiska.jpg",
    "answer": 5,
    "explanation": "Hydrologia bada hydrosferę, czyli wody Ziemi."
  },
  {
    "id": "R01_GEO_02",
    "section": "Geografia i czytanie map",
    "type": "match",
    "prompt": "Połącz każdą sferę środowiska z nauką, która ją bada.",
    "options": null,
    "left": [
      "litosfera",
      "atmosfera",
      "hydrosfera",
      "pedosfera",
      "biosfera"
    ],
    "right": [
      "biogeografia",
      "pedologia",
      "hydrologia",
      "geologia",
      "meteorologia"
    ],
    "image": "r01_sfery_srodowiska.jpg",
    "answer": {
      "litosfera": "geologia",
      "atmosfera": "meteorologia",
      "hydrosfera": "hydrologia",
      "pedosfera": "pedologia",
      "biosfera": "biogeografia"
    },
    "explanation": "Geologia bada litosferę, meteorologia atmosferę, hydrologia hydrosferę, pedologia gleby, a biogeografia świat organiczny."
  },
  {
    "id": "R01_GEO_03",
    "section": "Geografia i czytanie map",
    "type": "true_false",
    "prompt": "Geografia fizyczna zajmuje się przede wszystkim ludnością, przemysłem i usługami.",
    "options": null,
    "answer": false,
    "explanation": "Ludność, przemysł i usługi należą do geografii społeczno-ekonomicznej, natomiast geografia fizyczna opisuje środowisko naturalne."
  },
  {
    "id": "R01_GEO_04",
    "section": "Geografia i czytanie map",
    "type": "single_choice",
    "prompt": "Do czego służy System Informacji Geograficznej (GIS)?",
    "options": [
      "Do mierzenia temperatury powietrza w stacjach",
      "Wyłącznie do wyznaczania kierunków kompasem",
      "Wyłącznie do drukowania map papierowych",
      "Do rozpoznawania skał bez danych przestrzennych",
      "Tylko do obliczania skali liczbowej",
      "Do wprowadzania, gromadzenia, przetwarzania i wizualizacji danych geograficznych"
    ],
    "answer": 5,
    "explanation": "GIS służy do wprowadzania, gromadzenia, przetwarzania oraz wizualizacji danych geograficznych."
  },
  {
    "id": "R01_GEO_05",
    "section": "Geografia i czytanie map",
    "type": "fill_in",
    "prompt": "Mapa jest obrazem Ziemi lub jej fragmentu przedstawionym na płaszczyźnie w __________ za pomocą znaków umownych.",
    "options": null,
    "answer": [
      "pomniejszeniu"
    ],
    "explanation": "Istotą mapy jest pomniejszenie rzeczywistego obszaru i przedstawienie go umownymi znakami."
  },
  {
    "id": "R01_GEO_06",
    "section": "Geografia i czytanie map",
    "type": "single_choice",
    "prompt": "Jak dzieli się mapy ze względu na ich treść?",
    "options": [
      "Na południkowe i równoleżnikowe",
      "Na ogólnogeograficzne i tematyczne",
      "Na liczbowe i mianowane",
      "Na duże i małe",
      "Na poziomicowe i liniowe",
      "Na topograficzne i przeglądowe"
    ],
    "answer": 1,
    "explanation": "Podział według treści obejmuje mapy ogólnogeograficzne i tematyczne; topograficzne i przeglądowe odróżnia się według skali."
  },
  {
    "id": "R01_GEO_07",
    "section": "Geografia i czytanie map",
    "type": "multi_select",
    "prompt": "Wybierz przykłady map tematycznych.",
    "options": [
      "mapa ogólnogeograficzna",
      "mapa samochodowa",
      "mapa klimatyczna",
      "mapa hipsometryczna"
    ],
    "answer": [
      1,
      2
    ],
    "explanation": "Mapy samochodowe i klimatyczne to przykłady map tematycznych; mapy hipsometryczne zalicza się w tym podziale do ogólnogeograficznych."
  },
  {
    "id": "R01_GEO_08",
    "section": "Geografia i czytanie map",
    "type": "scenario",
    "prompt": "Na mapie przedstawiono rozmieszczenie surowców mineralnych za pomocą małych figur i liter. Jakiej metody prezentacji użyto?",
    "options": [
      "metody sygnaturowej",
      "metody kartogramu",
      "metody izolinii",
      "metody kartodiagramu"
    ],
    "image": "r01_mapa_sygnaturowa.jpg",
    "answer": 0,
    "explanation": "Metoda sygnaturowa polega na oznaczaniu zjawisk symbolami, takimi jak figury, litery lub obrazki."
  },
  {
    "id": "R01_GEO_09",
    "section": "Geografia i czytanie map",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest metodą prezentowania zjawisk na mapie: metoda sygnaturowa, metoda izolinii, metoda kartogramu, skala mianowana.",
    "options": null,
    "answer": "skala mianowana",
    "explanation": "Skala mianowana to sposób zapisu skali, natomiast pozostałe elementy są metodami prezentacji zjawisk."
  },
  {
    "id": "R01_GEO_10",
    "section": "Geografia i czytanie map",
    "type": "single_choice",
    "prompt": "Na mapie umieszczono diagramy kołowe pokazujące strukturę wieku mieszkańców województw. Jaka to metoda?",
    "options": [
      "kartogramu",
      "odwzorowania",
      "kartodiagramu",
      "sygnaturowa",
      "poziomicowa",
      "izolinii"
    ],
    "image": "r01_kartodiagram.jpg",
    "answer": 2,
    "explanation": "Metoda kartodiagramu polega na umieszczaniu diagramów na mapie."
  },
  {
    "id": "R01_GEO_11",
    "section": "Geografia i czytanie map",
    "type": "single_choice",
    "prompt": "Na mapie powiaty oznaczono odcieniami koloru zależnie od gęstości zaludnienia. Jaką metodę zastosowano?",
    "options": [
      "kartodiagramu",
      "poziomicową",
      "kartogramu",
      "izolinii",
      "sygnaturową",
      "podziałki liniowej"
    ],
    "image": "r01_kartogram.jpg",
    "answer": 2,
    "explanation": "Kartogram ukazuje średnią intensywność zjawiska w jednostkach obszarowych za pomocą barw."
  },
  {
    "id": "R01_GEO_12",
    "section": "Geografia i czytanie map",
    "type": "sort",
    "prompt": "Rozdziel wymienione zagadnienia według dwóch działów geografii.",
    "options": null,
    "items": [
      "pogoda",
      "rzeźba terenu",
      "świat roślinny",
      "ludność",
      "przemysł",
      "usługi"
    ],
    "categories": [
      "geografia fizyczna",
      "geografia społeczno-ekonomiczna"
    ],
    "answer": {
      "geografia fizyczna": [
        "pogoda",
        "rzeźba terenu",
        "świat roślinny"
      ],
      "geografia społeczno-ekonomiczna": [
        "ludność",
        "przemysł",
        "usługi"
      ]
    },
    "explanation": "Geografia fizyczna opisuje środowisko naturalne, natomiast społeczno-ekonomiczna działalność człowieka."
  },
  {
    "id": "R01_SKA_01",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "single_choice",
    "prompt": "Co oznacza skala mapy 1:200 000?",
    "options": [
      "1 cm na mapie odpowiada 20 km w terenie",
      "1 cm na mapie odpowiada 2 km w terenie",
      "1 cm na mapie odpowiada 200 km w terenie",
      "1 cm na mapie odpowiada 20 m w terenie",
      "1 cm na mapie odpowiada 200 m w terenie",
      "1 cm na mapie odpowiada 2 m w terenie"
    ],
    "answer": 1,
    "explanation": "200 000 cm to 2000 m, czyli 2 km. Skala 1:200 000 oznacza, że 1 cm na mapie odpowiada 2 km w terenie."
  },
  {
    "id": "R01_SKA_02",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "true_false",
    "prompt": "Skala 1:400 jest mniejsza od skali 1:4 000 000.",
    "options": null,
    "answer": false,
    "explanation": "Przy jednakowym liczniku skala o mniejszym mianowniku jest większa, czyli 1:400 jest większa."
  },
  {
    "id": "R01_SKA_03",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "match",
    "prompt": "Dopasuj nazwę rodzaju skali do sposobu jej zapisu.",
    "options": null,
    "left": [
      "skala liczbowa",
      "skala mianowana",
      "skala liniowa"
    ],
    "right": [
      "graficzna podziałka odległości",
      "1 cm — 2 km",
      "1:200 000"
    ],
    "image": "r01_podzialka_mapy.jpg",
    "answer": {
      "skala liczbowa": "1:200 000",
      "skala mianowana": "1 cm — 2 km",
      "skala liniowa": "graficzna podziałka odległości"
    },
    "explanation": "Skalę można przedstawić w postaci liczbowej, mianowanej lub liniowej, zwanej podziałką."
  },
  {
    "id": "R01_SKA_04",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "fill_in",
    "prompt": "W skali 1:2000 jednemu centymetrowi na mapie odpowiada __________ centymetrów w terenie.",
    "options": null,
    "answer": [
      "2000"
    ],
    "explanation": "Skala 1:2000 oznacza 2000 jednostek w terenie na jedną taką samą jednostkę na mapie."
  },
  {
    "id": "R01_SKA_05",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "single_choice",
    "prompt": "Jak nazywa się objaśnienie znaków występujących na mapie?",
    "options": [
      "tytuł",
      "podziałka",
      "legenda",
      "poziomica",
      "skala",
      "odwzorowanie"
    ],
    "answer": 2,
    "explanation": "Legenda objaśnia znaki umowne umieszczone na mapie."
  },
  {
    "id": "R01_SKA_06",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "riddle",
    "prompt": "Jak nazywa się obraz niewielkiego obszaru powierzchni Ziemi wykonany w dużej skali?",
    "options": null,
    "altAnswers": [
      "plan",
      "plan miasta"
    ],
    "answer": "plan",
    "explanation": "Plan przedstawia niewielki obszar w dużej skali, na przykład fragment miasta."
  },
  {
    "id": "R01_SKA_07",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie poprawne nazwy izolinii.",
    "options": [
      "poziomica",
      "legenda",
      "izobara",
      "podziałka",
      "izoterma",
      "izobata"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Izoterma łączy miejsca o tej samej temperaturze, izobara o tym samym ciśnieniu, izobata o tej samej głębokości, a poziomica o tej samej wysokości bezwzględnej."
  },
  {
    "id": "R01_SKA_08",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "single_choice",
    "prompt": "Do jakiego poziomu odnosi się wysokość bezwzględna?",
    "options": [
      "do podstawy wzniesienia",
      "do najwyższego drzewa",
      "do linii poziomicy 100 m",
      "do poziomu morza",
      "do dna doliny rzecznej",
      "do najbliższej przełęczy"
    ],
    "image": "r01_wysokosc_wzgledna.jpg",
    "answer": 3,
    "explanation": "Wysokość bezwzględna to wysokość punktu liczona od poziomu morza."
  },
  {
    "id": "R01_SKA_09",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie jest rodzajem izolinii: izoterma, izobara, izobata, podziałka.",
    "options": null,
    "answer": "podziałka",
    "explanation": "Podziałka przedstawia skalę liniową, a pozostałe trzy nazwy oznaczają izolinie."
  },
  {
    "id": "R01_SKA_10",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "scenario",
    "prompt": "Turysta ogląda mapę poziomicową. W jednym miejscu poziomice przebiegają bardzo blisko siebie. Jaki jest tam stok?",
    "options": [
      "pozbawiony nachylenia",
      "płaski",
      "łagodny",
      "stromy"
    ],
    "image": "r01_poziomice_stoki.jpg",
    "answer": 3,
    "explanation": "Małe odległości między poziomicami świadczą o stromym stoku."
  },
  {
    "id": "R01_SKA_11",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "true_false",
    "prompt": "Poziomice łączą na mapie miejsca o tej samej wysokości bezwzględnej.",
    "options": null,
    "answer": true,
    "explanation": "Poziomice, zwane też izohipsami, łączą punkty o tej samej wysokości nad poziomem morza."
  },
  {
    "id": "R01_SKA_12",
    "section": "Skala i przedstawianie rzeźby terenu",
    "type": "sort",
    "prompt": "Przyporządkuj opisy do właściwego rodzaju wysokości.",
    "options": null,
    "items": [
      "odniesienie do poziomu morza",
      "zapis w metrach nad poziomem morza",
      "odniesienie do podstawy formy terenu",
      "różnica między wierzchołkiem a podstawą wzniesienia"
    ],
    "categories": [
      "wysokość bezwzględna",
      "wysokość względna"
    ],
    "image": "r01_wysokosc_wzgledna.jpg",
    "answer": {
      "wysokość bezwzględna": [
        "odniesienie do poziomu morza",
        "zapis w metrach nad poziomem morza"
      ],
      "wysokość względna": [
        "odniesienie do podstawy formy terenu",
        "różnica między wierzchołkiem a podstawą wzniesienia"
      ]
    },
    "explanation": "Wysokość bezwzględną liczy się od poziomu morza, a względną od podstawy określonej formy terenu."
  },
  {
    "id": "R01_PAS_01",
    "section": "Pasy rzeźby Polski",
    "type": "single_choice",
    "prompt": "Jaki procent powierzchni Polski zajmują niziny?",
    "options": [
      "około 9%",
      "około 30%",
      "około 73%",
      "około 91%",
      "około 17%",
      "około 50%"
    ],
    "image": "r01_pasy_rzezby_polski.jpg",
    "answer": 3,
    "explanation": "Niziny stanowią około 91% powierzchni Polski."
  },
  {
    "id": "R01_PAS_02",
    "section": "Pasy rzeźby Polski",
    "type": "riddle",
    "prompt": "Ile wynosi średnia wysokość Polski? Podaj liczbę z jednostką.",
    "options": null,
    "altAnswers": [
      "173 m n.p.m.",
      "173 m npm",
      "173 m",
      "173"
    ],
    "answer": "173 m n.p.m.",
    "explanation": "Średnia wysokość Polski wynosi 173 m n.p.m., a Europy około 292 m n.p.m."
  },
  {
    "id": "R01_PAS_03",
    "section": "Pasy rzeźby Polski",
    "type": "sequence",
    "prompt": "Ułóż pasy rzeźby Polski od południa ku północy.",
    "options": null,
    "items": [
      "pojezierza",
      "wyżyny",
      "góry",
      "pobrzeża",
      "kotliny podkarpackie",
      "niziny środkowopolskie"
    ],
    "image": "r01_pasy_rzezby_polski.jpg",
    "answer": [
      "góry",
      "kotliny podkarpackie",
      "wyżyny",
      "niziny środkowopolskie",
      "pojezierza",
      "pobrzeża"
    ],
    "explanation": "Pasy przebiegają równoleżnikowo, od gór na południu do pobrzeży na północy."
  },
  {
    "id": "R01_PAS_04",
    "section": "Pasy rzeźby Polski",
    "type": "multi_select",
    "prompt": "Które trzy pasy rzeźby tworzą Niż Polski?",
    "options": [
      "kotliny podkarpackie",
      "góry",
      "pojezierza",
      "pobrzeża",
      "wyżyny",
      "niziny środkowopolskie"
    ],
    "answer": [
      2,
      3,
      5
    ],
    "explanation": "Niż Polski obejmuje pas nizin środkowopolskich, pojezierzy oraz pobrzeży."
  },
  {
    "id": "R01_PAS_05",
    "section": "Pasy rzeźby Polski",
    "type": "true_false",
    "prompt": "Ogólnie wysokości bezwzględne terenu Polski maleją w kierunku północnym.",
    "options": null,
    "answer": true,
    "explanation": "W pasowym układzie rzeźby Polski wysokości bezwzględne na ogół maleją ku północy."
  },
  {
    "id": "R01_PAS_06",
    "section": "Pasy rzeźby Polski",
    "type": "match",
    "prompt": "Połącz każdy szczyt z pasmem górskim, w którym się znajduje.",
    "options": null,
    "left": [
      "Rysy",
      "Śnieżka",
      "Łysica"
    ],
    "right": [
      "Łysogóry",
      "Tatry",
      "Karkonosze"
    ],
    "image": "r01_szczyty_gorskie.jpg",
    "answer": {
      "Rysy": "Tatry",
      "Śnieżka": "Karkonosze",
      "Łysica": "Łysogóry"
    },
    "explanation": "Rysy leżą w Tatrach, Śnieżka w Karkonoszach, a Łysica w Łysogórach."
  },
  {
    "id": "R01_PAS_07",
    "section": "Pasy rzeźby Polski",
    "type": "single_choice",
    "prompt": "Jakie obniżenie oddziela Karpaty od Sudetów?",
    "options": [
      "Kotlina Warszawska",
      "Brama Krakowska",
      "Kotlina Sandomierska",
      "Brama Morawska",
      "Niecka Nidziańska",
      "Kotlina Oświęcimska"
    ],
    "answer": 3,
    "explanation": "Karpaty i Sudety rozdziela Brama Morawska."
  },
  {
    "id": "R01_PAS_08",
    "section": "Pasy rzeźby Polski",
    "type": "single_choice",
    "prompt": "Jaką wysokość ma najniżej położone miejsce w Polsce, znajdujące się we wsi Marzęcino?",
    "options": [
      "-12,2 m n.p.m.",
      "-22 m n.p.m.",
      "12,2 m n.p.m.",
      "-2,2 m n.p.m.",
      "2,2 m n.p.m.",
      "-0,2 m n.p.m."
    ],
    "answer": 3,
    "explanation": "Najniższe miejsce w depresji we wsi Marzęcino leży 2,2 m poniżej poziomu morza."
  },
  {
    "id": "R01_PAS_09",
    "section": "Pasy rzeźby Polski",
    "type": "fill_in",
    "prompt": "Najwyższym szczytem Polski są __________, osiągające __________ m n.p.m.",
    "options": null,
    "altAnswers": [
      [
        "Rysy",
        "Rysów"
      ],
      [
        "2499",
        "2 499"
      ]
    ],
    "answer": [
      "Rysy",
      "2499"
    ],
    "explanation": "Najwyższy polski szczyt to Rysy, o wysokości 2499 m n.p.m."
  },
  {
    "id": "R01_PAS_10",
    "section": "Pasy rzeźby Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż pas rzeźby niezaliczany do Niżu Polskiego: pobrzeża, pojezierza, niziny środkowopolskie, wyżyny.",
    "options": null,
    "answer": "wyżyny",
    "explanation": "Wyżyny leżą na południe od Nizin Środkowopolskich i nie należą do Niżu Polskiego."
  },
  {
    "id": "R01_PAS_11",
    "section": "Pasy rzeźby Polski",
    "type": "scenario",
    "prompt": "Podróżujesz znad Bałtyku na południe. Po przejechaniu pasa pobrzeży docierasz do pojezierzy. Jaki pas rzeźby znajdziesz dalej na południe?",
    "options": [
      "pas wyżyn",
      "pas kotlin podkarpackich",
      "pas nizin środkowopolskich",
      "pas gór"
    ],
    "image": "r01_pasy_rzezby_polski.jpg",
    "answer": 2,
    "explanation": "Bezpośrednio na południe od pojezierzy rozciąga się pas nizin środkowopolskich."
  },
  {
    "id": "R01_PAS_12",
    "section": "Pasy rzeźby Polski",
    "type": "sort",
    "prompt": "Przyporządkuj wymienione krainy do odpowiednich pasów rzeźby.",
    "options": null,
    "items": [
      "Tatry",
      "Karkonosze",
      "Wyżyna Lubelska",
      "Wyżyna Śląska",
      "Pojezierze Mazurskie",
      "Pojezierze Pomorskie",
      "Pobrzeże Gdańskie",
      "Pobrzeże Szczecińskie"
    ],
    "categories": [
      "pas gór",
      "pas wyżyn",
      "pas pojezierzy",
      "pas pobrzeży"
    ],
    "answer": {
      "pas gór": [
        "Tatry",
        "Karkonosze"
      ],
      "pas wyżyn": [
        "Wyżyna Lubelska",
        "Wyżyna Śląska"
      ],
      "pas pojezierzy": [
        "Pojezierze Mazurskie",
        "Pojezierze Pomorskie"
      ],
      "pas pobrzeży": [
        "Pobrzeże Gdańskie",
        "Pobrzeże Szczecińskie"
      ]
    },
    "explanation": "Mapa pasów rzeźby i ich opis przyporządkowują poszczególne krainy do gór, wyżyn, pojezierzy i pobrzeży."
  },
  {
    "id": "R01_GOW_01",
    "section": "Krajobrazy gór i wyżyn",
    "type": "single_choice",
    "prompt": "W czasie której orogenezy powstały Tatry?",
    "options": [
      "sudeckiej",
      "alpejskiej",
      "kaledońskiej",
      "pomorskiej",
      "mazurskiej",
      "hercyńskiej"
    ],
    "image": "r01_szczyty_gorskie.jpg",
    "answer": 1,
    "explanation": "Tatry są górami fałdowymi powstałymi podczas orogenezy alpejskiej."
  },
  {
    "id": "R01_GOW_02",
    "section": "Krajobrazy gór i wyżyn",
    "type": "multi_select",
    "prompt": "Które formy terenu są charakterystyczne dla Tatr?",
    "options": [
      "wąskie granie",
      "konurbacje",
      "mierzeje",
      "doliny U-kształtne",
      "strome turnie",
      "stożki piargowe"
    ],
    "answer": [
      0,
      3,
      4,
      5
    ],
    "explanation": "W krajobrazie tatrzańskim występują m.in. turnie, granie, stożki piargowe i polodowcowe doliny U-kształtne."
  },
  {
    "id": "R01_GOW_03",
    "section": "Krajobrazy gór i wyżyn",
    "type": "true_false",
    "prompt": "W Tatrach temperatura wzrasta wraz z wysokością przeciętnie o 0,6°C na każde 100 m.",
    "options": null,
    "answer": false,
    "explanation": "Temperatura powietrza spada przeciętnie o około 0,6°C na każde 100 m wzrostu wysokości."
  },
  {
    "id": "R01_GOW_04",
    "section": "Krajobrazy gór i wyżyn",
    "type": "match",
    "prompt": "Połącz tatrzańską formę terenu z jej objaśnieniem.",
    "options": null,
    "left": [
      "grań",
      "żleb",
      "stożek piargowy",
      "kar polodowcowy"
    ],
    "right": [
      "zagłębienie polodowcowe mogące mieścić jezioro",
      "długi i wąski grzbiet górski",
      "pionowe zagłębienie na stoku",
      "usypisko odłamków skalnych u wylotu żlebu"
    ],
    "answer": {
      "grań": "długi i wąski grzbiet górski",
      "żleb": "pionowe zagłębienie na stoku",
      "stożek piargowy": "usypisko odłamków skalnych u wylotu żlebu",
      "kar polodowcowy": "zagłębienie polodowcowe mogące mieścić jezioro"
    },
    "explanation": "W Tatrach spotyka się grzbiety zwane graniami, żleby, stożki piargowe oraz kary polodowcowe."
  },
  {
    "id": "R01_GOW_05",
    "section": "Krajobrazy gór i wyżyn",
    "type": "single_choice",
    "prompt": "Jakie piętro roślinne w Tatrach leży pomiędzy reglem górnym a halami?",
    "options": [
      "hale",
      "regiel dolny",
      "kosodrzewina",
      "pogórze",
      "turnie",
      "regiel górny"
    ],
    "image": "r01_pietra_tatr.jpg",
    "answer": 2,
    "explanation": "Schemat pięter roślinności przedstawia kolejno regiel górny, kosodrzewinę i hale."
  },
  {
    "id": "R01_GOW_06",
    "section": "Krajobrazy gór i wyżyn",
    "type": "riddle",
    "prompt": "Jak nazywa się proces rozpuszczania wapieni przez wodę zawierającą dwutlenek węgla?",
    "options": null,
    "altAnswers": [
      "krasowienie",
      "proces krasowienia"
    ],
    "answer": "krasowienie",
    "explanation": "W Wyżynie Krakowsko-Częstochowskiej woda z dwutlenkiem węgla rozpuszcza wapienie, tworząc rzeźbę krasową."
  },
  {
    "id": "R01_GOW_07",
    "section": "Krajobrazy gór i wyżyn",
    "type": "odd_one_out",
    "prompt": "Wskaż formę, która nie jest przykładem rzeźby krasowej: lej krasowy, jaskinia, stalaktyt, wydma paraboliczna.",
    "options": null,
    "image": "r01_jaskinia_nacieki.jpg",
    "answer": "wydma paraboliczna",
    "explanation": "Wydma paraboliczna jest formą eoliczną, podczas gdy leje, jaskinie i stalaktyty wiążą się z krasem."
  },
  {
    "id": "R01_GOW_08",
    "section": "Krajobrazy gór i wyżyn",
    "type": "fill_in",
    "prompt": "Naciek wapienny zwisający ze stropu jaskini to __________, a naciek rosnący z jej dna to __________.",
    "options": null,
    "image": "r01_jaskinia_nacieki.jpg",
    "answer": [
      "stalaktyt",
      "stalagmit"
    ],
    "explanation": "Stalaktyty wiszą ze stropu jaskini, a stalagmity wznoszą się z jej dna."
  },
  {
    "id": "R01_GOW_09",
    "section": "Krajobrazy gór i wyżyn",
    "type": "scenario",
    "prompt": "Wycieczka podziwia wapienne ostańce, jaskinie i Ojcowski Park Narodowy. W której krainie geograficznej przebywa?",
    "options": [
      "na Wyżynie Krakowsko-Częstochowskiej",
      "na Wyżynie Lubelskiej",
      "na Nizinie Mazowieckiej",
      "na Wyżynie Śląskiej"
    ],
    "image": "r01_jaskinia_nacieki.jpg",
    "answer": 0,
    "explanation": "Ostańce i jaskinie krasowe oraz Ojcowski Park Narodowy to cechy Wyżyny Krakowsko-Częstochowskiej."
  },
  {
    "id": "R01_GOW_10",
    "section": "Krajobrazy gór i wyżyn",
    "type": "single_choice",
    "prompt": "W której krainie leżą złoża cynku i ołowiu w okolicach Olkusza i Zawiercia?",
    "options": [
      "na Pobrzeżu Słowińskim",
      "na Nizinie Mazowieckiej",
      "w Tatrach",
      "na Wyżynie Krakowsko-Częstochowskiej",
      "na Wyżynie Lubelskiej",
      "na Pojezierzu Mazurskim"
    ],
    "answer": 3,
    "explanation": "Złoża rud cynku i ołowiu w rejonie Olkusza i Zawiercia znajdują się na Wyżynie Krakowsko-Częstochowskiej."
  },
  {
    "id": "R01_GOW_11",
    "section": "Krajobrazy gór i wyżyn",
    "type": "multi_select",
    "prompt": "Które z podanych roślin uprawia się na Wyżynie Lubelskiej?",
    "options": [
      "pszenica",
      "chmiel",
      "kosodrzewina",
      "mikołajek nadmorski",
      "tytoń",
      "buraki cukrowe"
    ],
    "image": "r01_wawoz_lessowy.jpg",
    "answer": [
      0,
      1,
      4,
      5
    ],
    "explanation": "Rolniczy krajobraz Wyżyny Lubelskiej obejmuje uprawy chmielu, tytoniu, buraków cukrowych i pszenicy."
  },
  {
    "id": "R01_GOW_12",
    "section": "Krajobrazy gór i wyżyn",
    "type": "single_choice",
    "prompt": "Jak nazywa się typ aglomeracji policentrycznej złożonej z równorzędnych miast, występujący na Górnym Śląsku?",
    "options": [
      "osada",
      "wieś turystyczna",
      "metropolia jednordzeniowa",
      "przysiółek",
      "konurbacja",
      "strefa rolnicza"
    ],
    "image": "r01_krajobraz_przemyslowy.jpg",
    "answer": 4,
    "explanation": "Równoważne miasta Górnośląskiego Okręgu Przemysłowego tworzą konurbację."
  },
  {
    "id": "R01_NIZ_01",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "single_choice",
    "prompt": "Jak nazywa się duży obszar leśny położony na północny zachód od Warszawy?",
    "options": [
      "Tatrzański Park Narodowy",
      "Puszcza Notecka",
      "Ojcowski Park Narodowy",
      "Bory Tucholskie",
      "Puszcza Kampinoska",
      "Słowiński Park Narodowy"
    ],
    "answer": 4,
    "explanation": "Puszcza Kampinoska rozciąga się na północny zachód od Warszawy i bywa nazywana płucami stolicy."
  },
  {
    "id": "R01_NIZ_02",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "true_false",
    "prompt": "Gęsta, wysoka zabudowa i rozbudowana sieć ulic są cechami krajobrazu wielkomiejskiego.",
    "options": null,
    "answer": true,
    "explanation": "Krajobraz wielkomiejski Warszawy wyróżniają gęsta i wysoka zabudowa oraz rozwinięta sieć ulic i połączeń komunikacyjnych."
  },
  {
    "id": "R01_NIZ_03",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "multi_select",
    "prompt": "Które jeziora Pojezierza Mazurskiego są jeziorami morenowymi?",
    "options": [
      "Śniardwy",
      "Mamry",
      "Wigry",
      "Jeziorak",
      "Niegocin",
      "Hańcza"
    ],
    "image": "r01_jeziora_morenowe.jpg",
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Mamry, Śniardwy i Niegocin to jeziora morenowe, a Hańcza, Wigry i Jeziorak to jeziora rynnowe."
  },
  {
    "id": "R01_NIZ_04",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "match",
    "prompt": "Połącz jeziora z ich charakterystycznymi cechami.",
    "options": null,
    "left": [
      "Hańcza",
      "Śniardwy",
      "Mamry",
      "Wigry"
    ],
    "right": [
      "jezioro rynnowe wymienione obok Hańczy",
      "największe powierzchniowo jezioro Polski",
      "jezioro morenowe wymienione obok Śniardw",
      "najgłębsze jezioro Polski"
    ],
    "answer": {
      "Hańcza": "najgłębsze jezioro Polski",
      "Śniardwy": "największe powierzchniowo jezioro Polski",
      "Mamry": "jezioro morenowe wymienione obok Śniardw",
      "Wigry": "jezioro rynnowe wymienione obok Hańczy"
    },
    "explanation": "Hańcza ma 108,5 m głębokości, Śniardwy 113,8 km² powierzchni, a Mamry i Wigry reprezentują odpowiednio jeziora morenowe i rynnowe."
  },
  {
    "id": "R01_NIZ_05",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "riddle",
    "prompt": "Jak nazywa się najgłębsze jezioro Polski, o głębokości 108,5 m?",
    "options": null,
    "answer": "Hańcza",
    "explanation": "Hańcza jest najgłębszym jeziorem Polski; jej głębokość wynosi 108,5 m."
  },
  {
    "id": "R01_NIZ_06",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "scenario",
    "prompt": "Podczas wycieczki po Mazurach obserwujesz liczne świeżo ukształtowane formy polodowcowe, pozostałe po wytopieniu lądolodu. Jak nazywa się ten typ krajobrazu?",
    "options": [
      "młodoglacjalny",
      "staroglacjalny",
      "krasowy",
      "miejsko-przemysłowy"
    ],
    "image": "r01_jeziora_morenowe.jpg",
    "answer": 0,
    "explanation": "Krajobraz Pojezierza Mazurskiego określono jako młodoglacjalny, z wyraźną rzeźbą polodowcową."
  },
  {
    "id": "R01_NIZ_07",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "single_choice",
    "prompt": "Które wzniesienie moreny czołowej na pojezierzach osiąga 312 m n.p.m.?",
    "options": [
      "Rysy",
      "Dylewska Góra",
      "Góra Szeska",
      "Góra św. Anny",
      "Łysica",
      "Śnieżka"
    ],
    "answer": 1,
    "explanation": "Dylewska Góra ma 312 m n.p.m., a wspomniana obok Góra Szeska 309 m n.p.m."
  },
  {
    "id": "R01_NIZ_08",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "sort",
    "prompt": "Rozdziel elementy krajobrazu charakterystyczne dla Pojezierza Mazurskiego i Pobrzeża Słowińskiego.",
    "options": null,
    "items": [
      "jeziora morenowe",
      "pola sandrowe",
      "wzgórza morenowe",
      "ruchome wydmy",
      "mierzeje",
      "szerokie piaszczyste plaże"
    ],
    "categories": [
      "Pojezierze Mazurskie",
      "Pobrzeże Słowińskie"
    ],
    "image": "r01_wydmy_i_wybrzeze.jpg",
    "answer": {
      "Pojezierze Mazurskie": [
        "jeziora morenowe",
        "pola sandrowe",
        "wzgórza morenowe"
      ],
      "Pobrzeże Słowińskie": [
        "ruchome wydmy",
        "mierzeje",
        "szerokie piaszczyste plaże"
      ]
    },
    "explanation": "Na Mazurach dominują formy polodowcowe, zaś na Pobrzeżu Słowińskim charakterystyczne są nadmorskie formy akumulacyjne."
  },
  {
    "id": "R01_NIZ_09",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "single_choice",
    "prompt": "Który park narodowy chroni nadmorskie wydmy w okolicach jeziora Łebsko?",
    "options": [
      "Ojcowski Park Narodowy",
      "Słowiński Park Narodowy",
      "Woliński Park Narodowy",
      "Biebrzański Park Narodowy",
      "Tatrzański Park Narodowy",
      "Kampinoski Park Narodowy"
    ],
    "image": "r01_wydmy_i_wybrzeze.jpg",
    "answer": 1,
    "explanation": "Słowiński Park Narodowy chroni m.in. ruchome wydmy w pobliżu jeziora Łebsko."
  },
  {
    "id": "R01_NIZ_10",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "odd_one_out",
    "prompt": "Wskaż formę niezwiązaną z opisanym krajobrazem wybrzeża: plaża, klif, mierzeja, wąwóz lessowy.",
    "options": null,
    "answer": "wąwóz lessowy",
    "explanation": "Wąwozy lessowe występują na Wyżynie Lubelskiej, natomiast plaże, klify i mierzeje są charakterystyczne dla wybrzeża."
  },
  {
    "id": "R01_NIZ_11",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "fill_in",
    "prompt": "Stromy brzeg morski podcinany przez fale nazywa się __________.",
    "options": null,
    "image": "r01_wydmy_i_wybrzeze.jpg",
    "answer": [
      "klif"
    ],
    "explanation": "Klif powstaje na wysokim wybrzeżu w wyniku podcinania brzegu przez fale morskie."
  },
  {
    "id": "R01_NIZ_12",
    "section": "Krajobrazy nizin, pojezierzy i pobrzeży",
    "type": "true_false",
    "prompt": "Wydmy w okolicach jeziora Łebsko są nieruchome i nie zmieniają położenia pod wpływem wiatru.",
    "options": null,
    "image": "r01_wydmy_i_wybrzeze.jpg",
    "answer": false,
    "explanation": "Wiatr przenosi ziarna piasku, dlatego niektóre wydmy Pobrzeża Słowińskiego wędrują."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który uczony jako pierwszy użył nazwy geografia w III wieku p.n.e.?",
    "options": [
      "Herodot z Halikarnasu",
      "Eratostenes z Cyreny",
      "Arystoteles",
      "Archimedes",
      "Ptolemeusz",
      "Hipokrates"
    ],
    "answer": 1,
    "explanation": "Za pierwszego użytkownika terminu „geografia” uważa się Eratostenesa z Cyreny."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się polski kartograf, który wprowadził skalę barw hipsometrycznych i batymetrycznych?",
    "options": null,
    "altAnswers": [
      "Eugeniusz Romer",
      "Eugeniusza Romera",
      "Romer",
      "E. Romer"
    ],
    "answer": "Eugeniusz Romer",
    "explanation": "Eugeniusz Romer rozwinął kartograficzną skalę barw wysokościowych i głębokościowych."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Międzynarodową skalę barw wysokościowych zatwierdzono na konferencji w __________ w roku __________.",
    "options": null,
    "altAnswers": [
      [
        "Paryżu",
        "Paryż",
        "Paryzu"
      ],
      [
        "1913",
        "1913 r."
      ]
    ],
    "answer": [
      "Paryżu",
      "1913"
    ],
    "explanation": "Międzynarodową skalę barw wysokościowych uchwalono ostatecznie w Paryżu w 1913 r."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj szczyty górskie do odpowiadających im wysokości.",
    "options": null,
    "left": [
      "Gerlach",
      "Rysy",
      "Śnieżka",
      "Łysica"
    ],
    "right": [
      "612 m",
      "1602 m",
      "2655 m",
      "2499 m"
    ],
    "image": "r01_szczyty_gorskie.jpg",
    "answer": {
      "Gerlach": "2655 m",
      "Rysy": "2499 m",
      "Śnieżka": "1602 m",
      "Łysica": "612 m"
    },
    "explanation": "Gerlach leży na Słowacji i ma 2655 m, Rysy w Polsce 2499 m, Śnieżka 1602 m, a Łysica 612 m."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż wszystkie prawdziwe stwierdzenia o jeziorach i pojezierzach.",
    "options": [
      "Hańcza ma 108,5 m głębokości",
      "Śniardwy są najgłębszym jeziorem Polski",
      "Hańcza jest największym powierzchniowo jeziorem Polski",
      "Największą łączną powierzchnię jezior ma Pojezierze Mazurskie",
      "Najwięcej jezior występuje na Pojezierzu Pomorskim",
      "Śniardwy zajmują 113,8 km²"
    ],
    "answer": [
      0,
      3,
      4,
      5
    ],
    "explanation": "Hańcza to najgłębsze jezioro Polski, a Śniardwy jest największe powierzchniowo. Na Pojezierzu Pomorskim jest więcej jezior, natomiast na Mazurach zajmują one łącznie większą powierzchnię."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para łańcuchów górskich jest rozdzielona Bramą Morawską, a ich najwyższe pasma to odpowiednio Tatry i Karkonosze?",
    "options": [
      "Karkonosze i Łysogóry",
      "Sudety i Karpaty",
      "Karpaty i Sudety",
      "Tatry i Łysogóry",
      "Sudety i Góry Świętokrzyskie",
      "Karpaty i Góry Świętokrzyskie"
    ],
    "answer": 2,
    "explanation": "Brama Morawska rozdziela Karpaty i Sudety; w Karpatach najwyższe są Tatry, a w Sudetach Karkonosze."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż piętra roślinne Tatr od najniższego do najwyższego.",
    "options": null,
    "items": [
      "kosodrzewina",
      "regiel dolny",
      "turnie",
      "pogórze",
      "hale",
      "regiel górny"
    ],
    "image": "r01_pietra_tatr.jpg",
    "answer": [
      "pogórze",
      "regiel dolny",
      "regiel górny",
      "kosodrzewina",
      "hale",
      "turnie"
    ],
    "explanation": "Schemat pokazuje kolejno pogórze, regiel dolny i górny, kosodrzewinę, hale oraz turnie."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz formy terenu i obszary powstałe w wyniku działalności lądolodu lub lodowców.",
    "options": [
      "jeziora w tatrzańskich karach",
      "pola sandrowe Mazur",
      "jeziora morenowe Mazur",
      "stalaktyty jaskiń",
      "tatrzańskie doliny U-kształtne",
      "wąwozy lessowe na Wyżynie Lubelskiej"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Dolina U-kształtna, kar polodowcowy, jeziora morenowe i pola sandrowe są przykładami form polodowcowych; nacieki i wąwozy lessowe powstają w innych procesach."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Turysta planuje wyprawę nad Morskie Oko, dalej do Doliny Pięciu Stawów Polskich. Na trasie oczekuje granitowych skał. Do której części Tatr należą wymienione miejsca?",
    "options": [
      "do Tatr Wysokich",
      "do Łysogór",
      "do Karkonoszy",
      "do Tatr Zachodnich"
    ],
    "image": "r01_szczyty_gorskie.jpg",
    "answer": 0,
    "explanation": "Morskie Oko, Dolina Pięciu Stawów Polskich i skały granitowe są charakterystyczne dla Tatr Wysokich."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pustynia Błędowska leży na Wyżynie Śląskiej, której południową część pokrywają osady mioceńskie i polodowcowe.",
    "options": null,
    "image": "r01_krajobraz_przemyslowy.jpg",
    "answer": true,
    "explanation": "Opis krajobrazu Wyżyny Śląskiej wspomina Pustynię Błędowską oraz iły i piaski mioceńskie przykryte osadami polodowcowymi."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się wieś, w której znajduje się najniżej położony punkt Polski (−2,2 m n.p.m.)?",
    "options": null,
    "altAnswers": [
      "Marzęcino",
      "Marzecino"
    ],
    "answer": "Marzęcino",
    "explanation": "Najniżej położone miejsce w Polsce (−2,2 m n.p.m.) znajduje się we wsi Marzęcino."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Przybrzeżne fale odkładają piasek i tworzą długi wał oddzielający fragment zatoki od otwartego morza. Jak nazywa się taka forma terenu?",
    "options": [
      "wąwóz",
      "mierzeja",
      "klif",
      "żleb"
    ],
    "image": "r01_wydmy_i_wybrzeze.jpg",
    "answer": 1,
    "explanation": "W Pobrzeżu Słowińskim mierzeje powstają dzięki akumulacyjnej działalności morza; mogą odcinać zatoki i tworzyć jeziora przybrzeżne."
  }
];

const KID_PROMPTS = {
  "R01_GEO_01": "Jaka nauka bada wody na Ziemi?",
  "R01_GEO_05": "Uzupełnij: mapa pokazuje teren w __________.",
  "R01_GEO_10": "Jaka metoda używa wykresów kołowych na mapie?",
  "R01_SKA_05": "Jak nazywa się część mapy wyjaśniająca znaki?",
  "R01_SKA_10": "Poziomice są blisko siebie. Czy stok jest stromy czy łagodny?",
  "R01_PAS_04": "Wybierz trzy pasy terenu należące do Niżu Polskiego.",
  "R01_PAS_06": "Dopasuj góry do szczytów: Rysy, Śnieżka i Łysica.",
  "R01_GOW_05": "Co rośnie w Tatrach ponad reglem górnym, ale poniżej hal?",
  "R01_GOW_08": "Jak nazywa się naciek u góry jaskini i naciek na jej dnie?",
  "R01_NIZ_03": "Które wymienione jeziora to jeziora morenowe Mazur?",
  "R01_NIZ_09": "Który park narodowy chroni wydmy koło jeziora Łebsko?",
  "R01_HARD_07": "Ułóż piętra roślinne Tatr od dołu do góry."
};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Mapa i krajobrazy Polski",
  "icon": "🗺️",
  "sectionOrder": [
    "Geografia i czytanie map",
    "Skala i przedstawianie rzeźby terenu",
    "Pasy rzeźby Polski",
    "Krajobrazy gór i wyżyn",
    "Krajobrazy nizin, pojezierzy i pobrzeży"
  ],
  "sectionIcons": {
    "Geografia i czytanie map": "🌍",
    "Skala i przedstawianie rzeźby terenu": "📏",
    "Pasy rzeźby Polski": "🗺️",
    "Krajobrazy gór i wyżyn": "⛰️",
    "Krajobrazy nizin, pojezierzy i pobrzeży": "🌊"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
