// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SIA  = Siatka geograficzna
//   SDL  = Szerokość i długość
//   ODC  = Odczytywanie współrzędnych
//   GPS  = GPS i mapy cyfrowe
//   ROZ  = Rozciągłość obszarów
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_SIA_01",
    "section": "Siatka geograficzna",
    "type": "single_choice",
    "prompt": "Jak nazywają się linie na globusie biegnące w kierunku północ-południe?",
    "options": [
      "południki",
      "równoleżniki",
      "zwrotniki",
      "równik",
      "skale mapy",
      "granice państw"
    ],
    "answer": 0,
    "image": "r01_siatka_geograficzna.jpg",
    "explanation": "Południki biegną w kierunku północ-południe. Równoleżniki biegną w kierunku wschód-zachód."
  },
  {
    "id": "R01_SIA_02",
    "section": "Siatka geograficzna",
    "type": "single_choice",
    "prompt": "Jak nazywają się linie na globusie biegnące w kierunku wschód-zachód?",
    "options": [
      "równoleżniki",
      "południki",
      "południk 0°",
      "południk 180°",
      "półpłaszczyzny",
      "promienie Ziemi"
    ],
    "answer": 0,
    "explanation": "Równoleżniki biegną w kierunku wschód-zachód, a południki w kierunku północ-południe."
  },
  {
    "id": "R01_SIA_03",
    "section": "Siatka geograficzna",
    "type": "true_false",
    "prompt": "Równik oddziela półkulę północną od półkuli południowej.",
    "options": null,
    "answer": true,
    "image": "r01_rownik_polkul.jpg",
    "explanation": "Równik jest najdłuższym równoleżnikiem i dzieli kulę ziemską na półkulę północną oraz południową."
  },
  {
    "id": "R01_SIA_04",
    "section": "Siatka geograficzna",
    "type": "single_choice",
    "prompt": "Które południki wyznaczają półkulę wschodnią i półkulę zachodnią?",
    "options": [
      "0° i 180°",
      "0° i 90°",
      "90° i 180°",
      "zwrotnik Raka i zwrotnik Koziorożca",
      "równik i południk 0°",
      "równoleżnik 60° i południk 30°"
    ],
    "answer": 0,
    "image": "r01_poludnik_zero_i_180.jpg",
    "explanation": "Półkulę wschodnią i zachodnią wyznaczają południk 0° oraz południk 180°."
  },
  {
    "id": "R01_SIA_05",
    "section": "Siatka geograficzna",
    "type": "multi_select",
    "prompt": "Zaznacz cechy południków opisane w rozdziale.",
    "options": [
      "Biegną w kierunku północ-południe",
      "Wszystkie mają taką samą długość",
      "Przecinają równoleżniki pod kątem prostym",
      "Najdłuższy z nich to równik",
      "Mają różną długość"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_siatka_geograficzna.jpg",
    "explanation": "Południki biegną z północy na południe, mają taką samą długość i wraz z równoleżnikami tworzą siatkę geograficzną, przecinając się pod kątem prostym."
  },
  {
    "id": "R01_SIA_06",
    "section": "Siatka geograficzna",
    "type": "fill_in",
    "prompt": "Południki biegną w kierunku __________, a równoleżniki w kierunku __________.",
    "options": null,
    "answer": [
      "północ-południe",
      "wschód-zachód"
    ],
    "altAnswers": [
      [
        "północ-południe",
        "północ południe",
        "północ - południe"
      ],
      [
        "wschód-zachód",
        "wschód zachód",
        "wschód - zachód"
      ]
    ],
    "explanation": "W rozdziale wskazano dwa podstawowe kierunki: południki biegną północ-południe, a równoleżniki wschód-zachód."
  },
  {
    "id": "R01_SIA_07",
    "section": "Siatka geograficzna",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest równoleżnikiem: równik, zwrotnik Raka, południk 0°, zwrotnik Koziorożca.",
    "options": null,
    "answer": "południk 0°",
    "image": "r01_rownik_polkul.jpg",
    "explanation": "Równik i zwrotniki są równoleżnikami, natomiast południk 0° należy do południków."
  },
  {
    "id": "R01_SIA_08",
    "section": "Siatka geograficzna",
    "type": "riddle",
    "prompt": "Najdłuższy równoleżnik, mający około 40 tys. km długości, to...",
    "options": null,
    "answer": "równik",
    "altAnswers": [
      "równik",
      "rownik"
    ],
    "explanation": "Najdłuższym równoleżnikiem jest równik, który dzieli Ziemię na półkulę północną i południową."
  },
  {
    "id": "R01_SIA_09",
    "section": "Siatka geograficzna",
    "type": "match",
    "prompt": "Połącz element siatki geograficznej z jego opisem.",
    "options": null,
    "left": [
      "południk",
      "równoleżnik",
      "równik",
      "siatka geograficzna"
    ],
    "right": [
      "linia biegnąca północ-południe",
      "linia biegnąca wschód-zachód",
      "najdłuższy równoleżnik",
      "układ przecinających się południków i równoleżników"
    ],
    "answer": {
      "południk": "linia biegnąca północ-południe",
      "równoleżnik": "linia biegnąca wschód-zachód",
      "równik": "najdłuższy równoleżnik",
      "siatka geograficzna": "układ przecinających się południków i równoleżników"
    },
    "explanation": "Południki i równoleżniki przecinają się pod kątem prostym i tworzą siatkę geograficzną."
  },
  {
    "id": "R01_SIA_10",
    "section": "Siatka geograficzna",
    "type": "sort",
    "prompt": "Przyporządkuj opisy do południków i równoleżników.",
    "options": null,
    "items": [
      "biegną północ-południe",
      "biegną wschód-zachód",
      "mają taką samą długość",
      "mają różną długość",
      "wyznaczają długość geograficzną",
      "wyznaczają szerokość geograficzną"
    ],
    "categories": [
      "południki",
      "równoleżniki"
    ],
    "answer": {
      "południki": [
        "biegną północ-południe",
        "mają taką samą długość",
        "wyznaczają długość geograficzną"
      ],
      "równoleżniki": [
        "biegną wschód-zachód",
        "mają różną długość",
        "wyznaczają szerokość geograficzną"
      ]
    },
    "explanation": "Długość geograficzną wyznaczają południki, a szerokość geograficzną - równoleżniki."
  },
  {
    "id": "R01_SIA_11",
    "section": "Siatka geograficzna",
    "type": "true_false",
    "prompt": "Wszystkie południki mają taką samą długość.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podkreślono, że wszystkie południki mają taką samą długość, w przeciwieństwie do równoleżników."
  },
  {
    "id": "R01_SIA_12",
    "section": "Siatka geograficzna",
    "type": "single_choice",
    "prompt": "Co tworzą południki i równoleżniki, gdy przecinają się pod kątem prostym?",
    "options": [
      "siatkę geograficzną",
      "skalę mapy",
      "zwrotnik Koziorożca",
      "półkulę południową",
      "odbiornik GPS",
      "rozciągłość obszaru"
    ],
    "answer": 0,
    "explanation": "Południki i równoleżniki przecinają się pod kątem prostym i tworzą siatkę geograficzną."
  },
  {
    "id": "R01_SDL_01",
    "section": "Szerokość i długość",
    "type": "single_choice",
    "prompt": "Z czego składają się współrzędne geograficzne danego punktu?",
    "options": [
      "z szerokości geograficznej i długości geograficznej",
      "z wysokości bezwzględnej i skali mapy",
      "z północy i południa",
      "z równika i zwrotnika",
      "z nazwy państwa i miasta",
      "z trasy i odległości"
    ],
    "answer": 0,
    "image": "r01_odczyt_krakow.jpg",
    "explanation": "Współrzędne geograficzne składają się z szerokości geograficznej oraz długości geograficznej."
  },
  {
    "id": "R01_SDL_02",
    "section": "Szerokość i długość",
    "type": "true_false",
    "prompt": "Każdy punkt na Ziemi ma własne, niepowtarzalne współrzędne geograficzne.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wyjaśnia, że współrzędne pozwalają określić położenie danego punktu na Ziemi."
  },
  {
    "id": "R01_SDL_03",
    "section": "Szerokość i długość",
    "type": "single_choice",
    "prompt": "Czym jest szerokość geograficzna?",
    "options": [
      "kątem między płaszczyzną równika a promieniem Ziemi przechodzącym przez dany punkt",
      "kątem między półpłaszczyzną południka 0° a półpłaszczyzną południka punktu",
      "odległością w kilometrach od równika",
      "długością najbliższego południka",
      "nazwą równoleżnika 180°",
      "wartością skali mapy"
    ],
    "answer": 0,
    "image": "r01_szerokosc_geograficzna_kat.jpg",
    "explanation": "Szerokość geograficzna jest miarą kątową odniesioną do płaszczyzny równika i promienia Ziemi przechodzącego przez punkt."
  },
  {
    "id": "R01_SDL_04",
    "section": "Szerokość i długość",
    "type": "single_choice",
    "prompt": "Jakie wartości może mieć szerokość geograficzna?",
    "options": [
      "od 0° na równiku do 90° na biegunach",
      "od 0° do 180° tylko na wschód",
      "od 0° do 180° tylko na zachód",
      "od 1° do 60° na równiku",
      "od 30° do 90° na południkach",
      "od 0° do 360° na równoleżnikach"
    ],
    "answer": 0,
    "explanation": "Szerokość geograficzna wynosi od 0° na równiku do 90° na biegunach."
  },
  {
    "id": "R01_SDL_05",
    "section": "Szerokość i długość",
    "type": "fill_in",
    "prompt": "Jeden stopień kątowy dzieli się na __________ minut, a jedna minuta na __________ sekund.",
    "options": null,
    "answer": [
      "60",
      "60"
    ],
    "altAnswers": [
      [
        "60",
        "sześćdziesiąt"
      ],
      [
        "60",
        "sześćdziesiąt"
      ]
    ],
    "explanation": "Miary kątowe zapisuje się w stopniach, minutach i sekundach: 1° = 60' oraz 1' = 60\"."
  },
  {
    "id": "R01_SDL_06",
    "section": "Szerokość i długość",
    "type": "scenario",
    "prompt": "Na globusie zaznaczono punkt A o szerokości 40°N. Po której stronie równika leży ten punkt?",
    "options": [
      "na północ od równika",
      "na południe od równika",
      "na południku 0°",
      "na południku 180°",
      "na półkuli zachodniej",
      "na biegunie południowym"
    ],
    "answer": 0,
    "image": "r01_szerokosc_geograficzna_kat.jpg",
    "explanation": "Litera N oznacza półkulę północną, więc punkt o szerokości 40°N leży na północ od równika."
  },
  {
    "id": "R01_SDL_07",
    "section": "Szerokość i długość",
    "type": "match",
    "prompt": "Połącz litery stosowane we współrzędnych z ich znaczeniem.",
    "options": null,
    "left": [
      "N",
      "S",
      "E",
      "W"
    ],
    "right": [
      "północ",
      "południe",
      "wschód",
      "zachód"
    ],
    "answer": {
      "N": "północ",
      "S": "południe",
      "E": "wschód",
      "W": "zachód"
    },
    "explanation": "N pochodzi od north, S od south, E od east, a W od west. Litery pokazują, na której półkuli leży punkt."
  },
  {
    "id": "R01_SDL_08",
    "section": "Szerokość i długość",
    "type": "single_choice",
    "prompt": "Czym jest długość geograficzna?",
    "options": [
      "kątem między półpłaszczyzną południka 0° a półpłaszczyzną południka przechodzącego przez punkt",
      "kątem między płaszczyzną równika a promieniem Ziemi punktu",
      "odległością w kilometrach od bieguna północnego",
      "wartością równoleżnika widocznego na mapie",
      "nazwą południka 90°",
      "liczbą równoleżników na globusie"
    ],
    "answer": 0,
    "image": "r01_dlugosc_geograficzna_kat.jpg",
    "explanation": "Długość geograficzna odnosi się do południka zerowego i południka przechodzącego przez dany punkt."
  },
  {
    "id": "R01_SDL_09",
    "section": "Szerokość i długość",
    "type": "true_false",
    "prompt": "Długość geograficzna może wynosić od 0° do 180° na półkuli wschodniej i zachodniej.",
    "options": null,
    "answer": true,
    "explanation": "Wartości długości geograficznej rosną od południka 0° do południka 180° zarówno na wschód, jak i na zachód."
  },
  {
    "id": "R01_SDL_10",
    "section": "Szerokość i długość",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o wzroście wartości szerokości i długości geograficznej.",
    "options": [
      "Na półkuli północnej szerokość rośnie ku biegunowi północnemu",
      "Na półkuli południowej szerokość rośnie ku biegunowi południowemu",
      "Na półkuli wschodniej długość rośnie w kierunku wschodnim",
      "Na półkuli zachodniej długość rośnie w kierunku wschodnim",
      "Szerokość zawsze rośnie od bieguna do równika"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Szerokość rośnie od równika ku odpowiedniemu biegunowi, a długość na półkuli wschodniej rośnie ku wschodowi."
  },
  {
    "id": "R01_SDL_11",
    "section": "Szerokość i długość",
    "type": "riddle",
    "prompt": "W zapisie współrzędnych Krakowa 50°N, 20°E długość geograficzna wynosi...",
    "options": null,
    "answer": "20°E",
    "altAnswers": [
      "20°E",
      "20 E",
      "20 stopni E",
      "20 stopni długości geograficznej wschodniej"
    ],
    "explanation": "W zapisie 50°N, 20°E pierwsza wartość oznacza szerokość, a druga długość geograficzną."
  },
  {
    "id": "R01_SDL_12",
    "section": "Szerokość i długość",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie dotyczy szerokości geograficznej: N, S, równoleżnik, W.",
    "options": null,
    "answer": "W",
    "explanation": "Szerokość geograficzną określają równoleżniki i litery N lub S. Litera W dotyczy długości geograficznej zachodniej."
  },
  {
    "id": "R01_ODC_01",
    "section": "Odczytywanie współrzędnych",
    "type": "single_choice",
    "prompt": "Jakie współrzędne geograficzne Krakowa podano w rozdziale?",
    "options": [
      "50°N, 20°E",
      "20°N, 50°E",
      "50°S, 20°E",
      "50°N, 20°W",
      "40°N, 60°W",
      "53°N, 10°E"
    ],
    "answer": 0,
    "image": "r01_odczyt_krakow.jpg",
    "explanation": "W przykładzie z Krakowem podano współrzędne 50°N, 20°E."
  },
  {
    "id": "R01_ODC_02",
    "section": "Odczytywanie współrzędnych",
    "type": "scenario",
    "prompt": "Na mapie świata równoleżniki i południki poprowadzono co 30°. Punkt A leży na równoleżniku 60° i południku 30° na półkulach północnej i wschodniej. Jakie ma współrzędne?",
    "options": [
      "60°N, 30°E",
      "30°N, 60°E",
      "60°S, 30°E",
      "60°N, 30°W",
      "30°S, 60°W",
      "0°, 30°E"
    ],
    "answer": 0,
    "image": "r01_mapa_swiata_punkt_a.jpg",
    "explanation": "Punkt A leży na północ od równika i na wschód od południka 0°, więc jego współrzędne to 60°N, 30°E."
  },
  {
    "id": "R01_ODC_03",
    "section": "Odczytywanie współrzędnych",
    "type": "sequence",
    "prompt": "Ułóż czynności wyznaczania współrzędnych punktu na mapie świata w poprawnej kolejności.",
    "options": null,
    "items": [
      "ustal półkule punktu",
      "odczytaj wartości równoleżnika i południka",
      "sprawdź odstęp siatki kartograficznej",
      "podaj współrzędne z literami kierunków"
    ],
    "answer": [
      "sprawdź odstęp siatki kartograficznej",
      "odczytaj wartości równoleżnika i południka",
      "ustal półkule punktu",
      "podaj współrzędne z literami kierunków"
    ],
    "image": "r01_mapa_swiata_punkt_a.jpg",
    "explanation": "Najpierw sprawdza się, co ile stopni narysowano siatkę, potem odczytuje wartości, ustala półkule i zapisuje współrzędne."
  },
  {
    "id": "R01_ODC_04",
    "section": "Odczytywanie współrzędnych",
    "type": "true_false",
    "prompt": "W przykładzie odczytywania punktu A wartości równoleżników są opisane na obrzeżu mapy, a wartości południków wzdłuż równika.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje, że na mapie świata wartości równoleżników odczytuje się z obrzeża mapy, a wartości południków wzdłuż równika."
  },
  {
    "id": "R01_ODC_05",
    "section": "Odczytywanie współrzędnych",
    "type": "single_choice",
    "prompt": "Jakie współrzędne geograficzne Hamburga wyznaczono na podstawie mapy Europy?",
    "options": [
      "53°N, 10°E",
      "50°N, 5°E",
      "53°S, 10°E",
      "46°N, 1°W",
      "60°N, 30°E",
      "35°58'N, 9°30'W"
    ],
    "answer": 0,
    "image": "r01_mapa_europy_hamburg.jpg",
    "explanation": "W przykładzie podano, że Hamburg leży na równoleżniku 53°N i południku 10°E."
  },
  {
    "id": "R01_ODC_06",
    "section": "Odczytywanie współrzędnych",
    "type": "fill_in",
    "prompt": "Współrzędne geograficzne Hamburga to __________ szerokości geograficznej północnej i __________ długości geograficznej wschodniej.",
    "options": null,
    "answer": [
      "53°",
      "10°"
    ],
    "altAnswers": [
      [
        "53°",
        "53",
        "53 stopnie"
      ],
      [
        "10°",
        "10",
        "10 stopni"
      ]
    ],
    "image": "r01_mapa_europy_hamburg.jpg",
    "explanation": "Hamburg ma współrzędne 53°N, 10°E."
  },
  {
    "id": "R01_ODC_07",
    "section": "Odczytywanie współrzędnych",
    "type": "scenario",
    "prompt": "Jeżewo leży mniej więcej w połowie odległości między równoleżnikami 53° i 54°. Jaką szerokość geograficzną podano w przykładzie?",
    "options": [
      "53°30'N",
      "54°30'N",
      "53°30'S",
      "18°30'E",
      "46°N",
      "1°W"
    ],
    "answer": 0,
    "explanation": "Połowa stopnia to 30 minut, więc szerokość geograficzna Jeżewa wynosi około 53°30'N."
  },
  {
    "id": "R01_ODC_08",
    "section": "Odczytywanie współrzędnych",
    "type": "scenario",
    "prompt": "Jeżewo leży mniej więcej w połowie odległości między południkami 18° i 19°. Jaką długość geograficzną podano w przykładzie?",
    "options": [
      "18°30'E",
      "18°30'W",
      "53°30'N",
      "19°30'E",
      "10°E",
      "30°E"
    ],
    "answer": 0,
    "explanation": "Połowa stopnia to 30 minut, a Jeżewo leży na wschód od południka 18°, dlatego długość wynosi około 18°30'E."
  },
  {
    "id": "R01_ODC_09",
    "section": "Odczytywanie współrzędnych",
    "type": "single_choice",
    "prompt": "Jakie miasto wskazano jako położone na współrzędnych 46°N, 1°W?",
    "options": [
      "Rochefort",
      "Hamburg",
      "Kraków",
      "Jeżewo",
      "Sydney",
      "Petersburg"
    ],
    "answer": 0,
    "explanation": "W przykładzie z mapą drogową miastem o współrzędnych 46°N, 1°W jest Rochefort."
  },
  {
    "id": "R01_ODC_10",
    "section": "Odczytywanie współrzędnych",
    "type": "match",
    "prompt": "Połącz miasta z podanymi w rozdziale współrzędnymi.",
    "options": null,
    "left": [
      "Chicago",
      "Delhi",
      "La Paz",
      "Johannesburg",
      "Petersburg"
    ],
    "right": [
      "42°N, 88°W",
      "29°N, 77°E",
      "16°S, 68°W",
      "26°S, 28°E",
      "60°N, 30°E"
    ],
    "answer": {
      "Chicago": "42°N, 88°W",
      "Delhi": "29°N, 77°E",
      "La Paz": "16°S, 68°W",
      "Johannesburg": "26°S, 28°E",
      "Petersburg": "60°N, 30°E"
    },
    "explanation": "Te współrzędne występują w ćwiczeniu z zaznaczaniem miast na mapie."
  },
  {
    "id": "R01_ODC_11",
    "section": "Odczytywanie współrzędnych",
    "type": "sort",
    "prompt": "Przyporządkuj współrzędne miast do półkuli wynikającej z szerokości geograficznej.",
    "options": null,
    "items": [
      "50°N, 20°E",
      "16°S, 68°W",
      "29°N, 77°E",
      "26°S, 28°E",
      "60°N, 30°E"
    ],
    "categories": [
      "półkula północna",
      "półkula południowa"
    ],
    "answer": {
      "półkula północna": [
        "50°N, 20°E",
        "29°N, 77°E",
        "60°N, 30°E"
      ],
      "półkula południowa": [
        "16°S, 68°W",
        "26°S, 28°E"
      ]
    },
    "explanation": "Litera N oznacza szerokość północną, a litera S szerokość południową."
  },
  {
    "id": "R01_ODC_12",
    "section": "Odczytywanie współrzędnych",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto, które według podanych współrzędnych leży na półkuli południowej: Hamburg, Jeżewo, Petersburg, La Paz.",
    "options": null,
    "answer": "La Paz",
    "explanation": "La Paz ma współrzędne 16°S, 68°W, więc leży na półkuli południowej. Pozostałe miasta mają szerokość północną."
  },
  {
    "id": "R01_GPS_01",
    "section": "GPS i mapy cyfrowe",
    "type": "single_choice",
    "prompt": "Jaki system nawigacji satelitarnej wskazano w rozdziale jako najpopularniejszy?",
    "options": [
      "GPS",
      "równik",
      "siatka geograficzna",
      "południk 180°",
      "atlas papierowy",
      "zwrotnik Raka"
    ],
    "answer": 0,
    "image": "r01_odbiornik_gps.jpg",
    "explanation": "Do wyznaczania współrzędnych można wykorzystywać systemy nawigacji satelitarnej, a najpopularniejszym z nich jest GPS."
  },
  {
    "id": "R01_GPS_02",
    "section": "GPS i mapy cyfrowe",
    "type": "true_false",
    "prompt": "Odbiornik GPS podaje współrzędne punktu na podstawie sygnałów wysyłanych przez satelity krążące wokół Ziemi.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale opisano, że odbiornik GPS korzysta z sygnałów wysyłanych przez satelity."
  },
  {
    "id": "R01_GPS_03",
    "section": "GPS i mapy cyfrowe",
    "type": "multi_select",
    "prompt": "Zaznacz urządzenia, w których według rozdziału może znajdować się odbiornik GPS.",
    "options": [
      "tablet",
      "smartfon",
      "smartwatch",
      "osobne urządzenie",
      "papierowy globus",
      "ołówek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Odbiornik GPS może być osobnym urządzeniem albo elementem tabletu, smartfona czy smartwatcha."
  },
  {
    "id": "R01_GPS_04",
    "section": "GPS i mapy cyfrowe",
    "type": "single_choice",
    "prompt": "Do czego najczęściej wykorzystuje się systemy nawigacji satelitarnej?",
    "options": [
      "do wyznaczania trasy podczas poruszania się pieszo, rowerem lub samochodem",
      "do rysowania południka 180° na globusie",
      "do mierzenia długości równika w kilometrach",
      "do zmiany nazw kontynentów",
      "do obliczania skali mapy bez siatki",
      "do zamalowywania półkul"
    ],
    "answer": 0,
    "explanation": "Najczęstszym zastosowaniem systemów nawigacji satelitarnej jest wyznaczanie trasy, na przykład pieszej, rowerowej lub samochodowej."
  },
  {
    "id": "R01_GPS_05",
    "section": "GPS i mapy cyfrowe",
    "type": "scenario",
    "prompt": "Masz współrzędne geograficzne szukanego obiektu i korzystasz z aplikacji z mapą. Co należy zrobić, aby odnaleźć obiekt?",
    "options": [
      "wpisać współrzędne w odpowiednie miejsce w aplikacji",
      "odjąć długość geograficzną od szerokości",
      "narysować południk 180° na równiku",
      "zamienić N na S i E na W",
      "pominąć wartości minut kątowych",
      "zawsze użyć tylko papierowego atlasu"
    ],
    "answer": 0,
    "image": "r01_mapa_cyfrowa_wspolrzedne.jpg",
    "explanation": "Rozdział wyjaśnia, że po wpisaniu współrzędnych w aplikacji można odnaleźć obiekt na cyfrowej mapie."
  },
  {
    "id": "R01_GPS_06",
    "section": "GPS i mapy cyfrowe",
    "type": "riddle",
    "prompt": "Skrót GPS pochodzi od angielskiego określenia...",
    "options": null,
    "answer": "Global Positioning System",
    "altAnswers": [
      "Global Positioning System",
      "global positioning system",
      "GPS"
    ],
    "explanation": "W części dla dociekliwych podano rozwinięcie skrótu GPS: Global Positioning System."
  },
  {
    "id": "R01_GPS_07",
    "section": "GPS i mapy cyfrowe",
    "type": "true_false",
    "prompt": "Odbiorniki GPS mogą służyć do śledzenia tras wędrówek zagrożonych gatunków zwierząt, na przykład żółwi morskich.",
    "options": null,
    "answer": true,
    "image": "r01_odbiornik_gps.jpg",
    "explanation": "W ciekawostce wskazano, że odbiorniki GPS pozwalają śledzić trasy wędrówek zagrożonych gatunków, np. żółwi morskich."
  },
  {
    "id": "R01_GPS_08",
    "section": "GPS i mapy cyfrowe",
    "type": "sort",
    "prompt": "Przyporządkuj czynności do dwóch zastosowań GPS opisanych w rozdziale.",
    "options": null,
    "items": [
      "ustalenie współrzędnych miejsca, w którym jesteś",
      "odszukanie konkretnego miejsca po współrzędnych",
      "wytyczenie trasy wędrówki",
      "wpisanie współrzędnych szukanego obiektu w aplikacji"
    ],
    "categories": [
      "ustalanie położenia",
      "odszukiwanie miejsca"
    ],
    "answer": {
      "ustalanie położenia": [
        "ustalenie współrzędnych miejsca, w którym jesteś",
        "wytyczenie trasy wędrówki"
      ],
      "odszukiwanie miejsca": [
        "odszukanie konkretnego miejsca po współrzędnych",
        "wpisanie współrzędnych szukanego obiektu w aplikacji"
      ]
    },
    "explanation": "GPS pomaga zarówno ustalić położenie, jak i odszukać miejsce na podstawie znanych współrzędnych."
  },
  {
    "id": "R01_GPS_09",
    "section": "GPS i mapy cyfrowe",
    "type": "fill_in",
    "prompt": "Odbiornik GPS wyznacza współrzędne na podstawie sygnałów wysyłanych przez __________ krążące wokół __________.",
    "options": null,
    "answer": [
      "satelity",
      "Ziemi"
    ],
    "altAnswers": [
      [
        "satelity",
        "satelitów"
      ],
      [
        "Ziemi",
        "ziemi"
      ]
    ],
    "explanation": "Odbiornik GPS korzysta z sygnałów satelitów krążących wokół Ziemi."
  },
  {
    "id": "R01_GPS_10",
    "section": "GPS i mapy cyfrowe",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest urządzeniem z odbiornikiem GPS wymienionym w rozdziale: tablet, smartfon, smartwatch, globus.",
    "options": null,
    "answer": "globus",
    "explanation": "W rozdziale wymieniono tablet, smartfon, smartwatch i osobny odbiornik GPS. Globus nie został podany jako urządzenie z GPS."
  },
  {
    "id": "R01_ROZ_01",
    "section": "Rozciągłość obszarów",
    "type": "single_choice",
    "prompt": "Czym jest rozciągłość południkowa obszaru?",
    "options": [
      "różnicą szerokości geograficznej między punktem najdalej na północ i najdalej na południe",
      "różnicą długości geograficznej między punktem najdalej na wschód i najdalej na zachód",
      "sumą wszystkich południków na mapie",
      "odległością od równika do południka 0°",
      "liczbą równoleżników w granicach państwa",
      "wartością skali mapy"
    ],
    "answer": 0,
    "image": "r01_rozciaglosc_polska.jpg",
    "explanation": "Rozciągłość południkowa to różnica szerokości geograficznej między skrajnym punktem północnym i południowym."
  },
  {
    "id": "R01_ROZ_02",
    "section": "Rozciągłość obszarów",
    "type": "single_choice",
    "prompt": "Czym jest rozciągłość równoleżnikowa obszaru?",
    "options": [
      "różnicą długości geograficznej między punktem najdalej na wschód i najdalej na zachód",
      "różnicą szerokości geograficznej między biegunami",
      "sumą wartości równoleżników na półkuli północnej",
      "odległością w kilometrach od równika",
      "liczbą punktów skrajnych kontynentu",
      "wartością południka 0°"
    ],
    "answer": 0,
    "image": "r01_rozciaglosc_polska.jpg",
    "explanation": "Rozciągłość równoleżnikowa to różnica długości geograficznej między punktem wysuniętym najdalej na wschód i najdalej na zachód."
  },
  {
    "id": "R01_ROZ_03",
    "section": "Rozciągłość obszarów",
    "type": "match",
    "prompt": "Połącz punkt skrajny z kierunkiem, którego dotyczy.",
    "options": null,
    "left": [
      "punkt najdalej na północ",
      "punkt najdalej na południe",
      "punkt najdalej na zachód",
      "punkt najdalej na wschód"
    ],
    "right": [
      "północ",
      "południe",
      "zachód",
      "wschód"
    ],
    "answer": {
      "punkt najdalej na północ": "północ",
      "punkt najdalej na południe": "południe",
      "punkt najdalej na zachód": "zachód",
      "punkt najdalej na wschód": "wschód"
    },
    "explanation": "Skrajne punkty obszaru to miejsca wysunięte najdalej w czterech głównych kierunkach."
  },
  {
    "id": "R01_ROZ_04",
    "section": "Rozciągłość obszarów",
    "type": "scenario",
    "prompt": "Europa bez wysp ma skrajny punkt północny 71°08'N i południowy 35°58'N. Jaką rozciągłość południkową podano w rozdziale?",
    "options": [
      "35°10'",
      "77°44'",
      "71°08'",
      "9°30'",
      "68°14'",
      "35°58'"
    ],
    "answer": 0,
    "image": "r01_rozciaglosc_europa.jpg",
    "explanation": "Oba punkty leżą na półkuli północnej, dlatego odejmuje się wartości szerokości: 71°08' - 35°58' = 35°10'."
  },
  {
    "id": "R01_ROZ_05",
    "section": "Rozciągłość obszarów",
    "type": "scenario",
    "prompt": "Przylądek Roca ma 9°30'W, a ujście Bajdaraty 68°14'E. Jaką rozciągłość równoleżnikową Europy podano w rozdziale?",
    "options": [
      "77°44'",
      "35°10'",
      "58°44'",
      "68°14'",
      "9°30'",
      "71°08'"
    ],
    "answer": 0,
    "image": "r01_rozciaglosc_europa.jpg",
    "explanation": "Punkty leżą na różnych półkulach, więc długości geograficzne dodaje się: 9°30' + 68°14' = 77°44'."
  },
  {
    "id": "R01_ROZ_06",
    "section": "Rozciągłość obszarów",
    "type": "true_false",
    "prompt": "Gdy skrajne punkty obszaru leżą na tej samej półkuli, przy obliczaniu rozciągłości odejmuje się ich wartości.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że przy skrajnych punktach na tej samej półkuli odejmuje się wartości odpowiednich współrzędnych."
  },
  {
    "id": "R01_ROZ_07",
    "section": "Rozciągłość obszarów",
    "type": "true_false",
    "prompt": "Gdy skrajne punkty obszaru leżą na różnych półkulach, przy obliczaniu rozciągłości dodaje się ich wartości.",
    "options": null,
    "answer": true,
    "explanation": "Jeżeli punkty skrajne leżą po przeciwnych stronach równika lub południka 0°, ich wartości dodaje się."
  },
  {
    "id": "R01_ROZ_08",
    "section": "Rozciągłość obszarów",
    "type": "fill_in",
    "prompt": "Rozciągłość południkową oblicza się między punktami wysuniętymi najdalej na __________ i __________.",
    "options": null,
    "answer": [
      "północ",
      "południe"
    ],
    "altAnswers": [
      [
        "północ",
        "polnoc"
      ],
      [
        "południe",
        "poludnie"
      ]
    ],
    "explanation": "Rozciągłość południkową wyznacza się między skrajnym punktem północnym i południowym obszaru."
  },
  {
    "id": "R01_ROZ_09",
    "section": "Rozciągłość obszarów",
    "type": "scenario",
    "prompt": "Gallinas ma 12°N, a Froward 54°S. Jak obliczyć rozciągłość południkową między tymi punktami?",
    "options": [
      "dodać 12° i 54°",
      "odjąć 12° od 54°",
      "odjąć 54° od 12°",
      "dodać 12° i 35°W",
      "użyć południków 35°W i 81°W",
      "pominąć szerokość geograficzną"
    ],
    "answer": 0,
    "explanation": "Gallinas i Froward leżą na różnych półkulach, więc wartości szerokości geograficznej należy dodać."
  },
  {
    "id": "R01_ROZ_10",
    "section": "Rozciągłość obszarów",
    "type": "multi_select",
    "prompt": "Jakie informacje są potrzebne do obliczenia rozciągłości południkowej obszaru?",
    "options": [
      "szerokość geograficzna punktu najdalej na północ",
      "szerokość geograficzna punktu najdalej na południe",
      "długość geograficzna punktu najdalej na wschód",
      "długość geograficzna punktu najdalej na zachód",
      "nazwa odbiornika GPS"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Rozciągłość południkowa zależy od szerokości geograficznych punktów wysuniętych najdalej na północ i południe."
  },
  {
    "id": "R01_ROZ_11",
    "section": "Rozciągłość obszarów",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do rodzaju rozciągłości.",
    "options": null,
    "items": [
      "punkt najdalej na północ",
      "punkt najdalej na południe",
      "punkt najdalej na zachód",
      "punkt najdalej na wschód",
      "różnica szerokości geograficznej",
      "różnica długości geograficznej"
    ],
    "categories": [
      "rozciągłość południkowa",
      "rozciągłość równoleżnikowa"
    ],
    "answer": {
      "rozciągłość południkowa": [
        "punkt najdalej na północ",
        "punkt najdalej na południe",
        "różnica szerokości geograficznej"
      ],
      "rozciągłość równoleżnikowa": [
        "punkt najdalej na zachód",
        "punkt najdalej na wschód",
        "różnica długości geograficznej"
      ]
    },
    "explanation": "Rozciągłość południkowa dotyczy skrajnych szerokości, a równoleżnikowa - skrajnych długości geograficznych."
  },
  {
    "id": "R01_ROZ_12",
    "section": "Rozciągłość obszarów",
    "type": "sequence",
    "prompt": "Ułóż czynności obliczania rozciągłości obszaru w poprawnej kolejności.",
    "options": null,
    "items": [
      "wykonaj dodawanie albo odejmowanie",
      "odczytaj właściwe współrzędne punktów skrajnych",
      "sprawdź, czy punkty leżą na tej samej czy na różnych półkulach",
      "wskaż punkty skrajne potrzebne do danego rodzaju rozciągłości"
    ],
    "answer": [
      "wskaż punkty skrajne potrzebne do danego rodzaju rozciągłości",
      "odczytaj właściwe współrzędne punktów skrajnych",
      "sprawdź, czy punkty leżą na tej samej czy na różnych półkulach",
      "wykonaj dodawanie albo odejmowanie"
    ],
    "explanation": "Najpierw wybiera się odpowiednie punkty skrajne, potem odczytuje ich współrzędne i decyduje, czy należy dodać, czy odjąć wartości."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne zależności między miarami kątowymi.",
    "options": [
      "1° = 60'",
      "1' = 60\"",
      "1° = 60\"",
      "1\" = 60'",
      "1° = 180'"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Współrzędne podaje się w stopniach, minutach i sekundach kątowych: 1° dzieli się na 60 minut, a 1 minuta na 60 sekund."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Przez które miejsce przebiega południk 0° wymieniony w ciekawostce?",
    "options": [
      "Królewskie Obserwatorium Astronomiczne w Greenwich w Londynie",
      "Kraków",
      "Sydney",
      "przylądek Nordkyn",
      "przylądek Roca",
      "Jeżewo"
    ],
    "answer": 0,
    "image": "r01_poludnik_zero_i_180.jpg",
    "explanation": "W ciekawostce podano, że południk 0° przebiega przez Królewskie Obserwatorium Astronomiczne w Greenwich w Londynie."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Współrzędne Sydney podano jako 33°52'S, 151°12'E. Jakie są wartości dwóch kątów opisujących to położenie?",
    "options": [
      "33°52' i 151°12'",
      "33°52' i 151°12\"",
      "151°12' i 33°52'",
      "33°S i 151°E",
      "52°33' i 12°151'",
      "0° i 180°"
    ],
    "answer": 0,
    "explanation": "Szerokość Sydney ma wartość 33°52', a długość geograficzna 151°12'. Litery S i E wskazują półkule."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Punkt A z przykładu ma współrzędne 40°N, 60°W, więc jego szerokość wynosi __________, a długość wynosi __________.",
    "options": null,
    "answer": [
      "40°N",
      "60°W"
    ],
    "altAnswers": [
      [
        "40°N",
        "40 N",
        "40 stopni N"
      ],
      [
        "60°W",
        "60 W",
        "60 stopni W"
      ]
    ],
    "explanation": "Pierwsza część zapisu współrzędnych oznacza szerokość geograficzną, a druga długość geograficzną."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego przy rozciągłości równoleżnikowej Europy w przykładzie dodano 9°30'W i 68°14'E?",
    "options": [
      "bo skrajne punkty leżą na półkuli zachodniej i wschodniej",
      "bo oba punkty leżą na półkuli północnej",
      "bo są to wartości szerokości geograficznej",
      "bo 1° dzieli się na 60 sekund",
      "bo południki mają różną długość",
      "bo wartość długości zawsze wynosi 90°"
    ],
    "answer": 0,
    "image": "r01_dlugosc_geograficzna_kat.jpg",
    "explanation": "Gdy skrajne punkty leżą na różnych półkulach względem południka 0°, wartości długości geograficznej dodaje się."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Miasto odszukane w przykładzie na podstawie współrzędnych 46°N, 1°W to...",
    "options": null,
    "answer": "Rochefort",
    "altAnswers": [
      "Rochefort",
      "rochefort"
    ],
    "explanation": "W przykładzie z mapą drogową punkt przecięcia równoleżnika 46°N i południka 1°W wskazywał Rochefort."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz miasto z parą półkul wynikającą z podanych współrzędnych.",
    "options": null,
    "left": [
      "Chicago",
      "La Paz",
      "Johannesburg",
      "Delhi"
    ],
    "right": [
      "północna i zachodnia",
      "południowa i zachodnia",
      "południowa i wschodnia",
      "północna i wschodnia"
    ],
    "answer": {
      "Chicago": "północna i zachodnia",
      "La Paz": "południowa i zachodnia",
      "Johannesburg": "południowa i wschodnia",
      "Delhi": "północna i wschodnia"
    },
    "explanation": "Litera N lub S określa półkulę północną albo południową, a E lub W - wschodnią albo zachodnią."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do szerokości i długości geograficznej.",
    "options": null,
    "items": [
      "wartość równoleżnika",
      "zakres 0°-90°",
      "litery N i S",
      "wartość południka",
      "zakres 0°-180°",
      "litery E i W"
    ],
    "categories": [
      "szerokość geograficzna",
      "długość geograficzna"
    ],
    "answer": {
      "szerokość geograficzna": [
        "wartość równoleżnika",
        "zakres 0°-90°",
        "litery N i S"
      ],
      "długość geograficzna": [
        "wartość południka",
        "zakres 0°-180°",
        "litery E i W"
      ]
    },
    "explanation": "Szerokość geograficzna wiąże się z równoleżnikami i literami N/S, a długość z południkami i literami E/W."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W przykładzie skrajne punkty Europy na północy i południu mają szerokości 71°08'N oraz 35°58'N. Jaką operację należy wykonać?",
    "options": [
      "odjąć 35°58' od 71°08'",
      "dodać 71°08' i 35°58'",
      "odjąć 71°08' od 35°58'",
      "dodać 9°30' i 68°14'",
      "zamienić minuty na kilometry",
      "użyć długości geograficznej"
    ],
    "answer": 0,
    "image": "r01_rozciaglosc_europa.jpg",
    "explanation": "Oba punkty leżą na półkuli północnej, więc przy rozciągłości południkowej odejmuje się wartości szerokości geograficznej."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do długości geograficznej: 9°30'W, 68°14'E, 151°12'E, 33°52'S.",
    "options": null,
    "answer": "33°52'S",
    "explanation": "Litera S oznacza szerokość geograficzną południową, a W i E oznaczają długość geograficzną zachodnią lub wschodnią."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Punkt A z przykładu 40°N, 60°W leży na półkuli północnej i zachodniej.",
    "options": null,
    "answer": true,
    "explanation": "Litera N oznacza półkulę północną, a W półkulę zachodnią."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż czynności odszukiwania miasta o współrzędnych 46°N, 1°W w poprawnej kolejności.",
    "options": null,
    "items": [
      "odczytaj nazwę miasta w miejscu przecięcia",
      "odszukaj równoleżnik 46°N",
      "ustal odstęp siatki kartograficznej",
      "wyznacz południk 1°W między 0° i 2°W"
    ],
    "answer": [
      "ustal odstęp siatki kartograficznej",
      "odszukaj równoleżnik 46°N",
      "wyznacz południk 1°W między 0° i 2°W",
      "odczytaj nazwę miasta w miejscu przecięcia"
    ],
    "explanation": "W przykładzie najpierw analizuje się siatkę, następnie znajduje równoleżnik i południk, a na ich przecięciu odczytuje nazwę miasta."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz jednostki miar kątowych, w których podaje się współrzędne geograficzne.",
    "options": [
      "stopnie",
      "minuty",
      "sekundy",
      "kilometry",
      "metry",
      "godziny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Współrzędne geograficzne zapisuje się w stopniach, minutach i sekundach kątowych."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Gdy skrajne punkty obszaru leżą na różnych półkulach, wartości współrzędnych należy __________, a gdy na tej samej półkuli - __________.",
    "options": null,
    "answer": [
      "dodać",
      "odjąć"
    ],
    "altAnswers": [
      [
        "dodać",
        "dodac"
      ],
      [
        "odjąć",
        "odjac"
      ]
    ],
    "explanation": "Rozdział podaje odwrotne zasady: na różnych półkulach wartości się dodaje, a na tej samej półkuli odejmuje."
  }
];

const KID_PROMPTS = {
  "R01_SIA_01": "Które linie na globusie biegną z północy na południe?",
  "R01_SIA_03": "Co oddziela półkulę północną od południowej?",
  "R01_SDL_01": "Z jakich dwóch części składają się współrzędne?",
  "R01_SDL_07": "Co znaczą litery N, S, E i W we współrzędnych?",
  "R01_ODC_01": "Jakie współrzędne ma Kraków w przykładzie?",
  "R01_ODC_05": "Jakie współrzędne ma Hamburg w przykładzie?",
  "R01_GPS_01": "Jaki system pomaga wyznaczać współrzędne?",
  "R01_GPS_05": "Co zrobić w aplikacji, gdy znasz współrzędne miejsca?",
  "R01_ROZ_01": "Co porównujemy przy rozciągłości południkowej?",
  "R01_ROZ_02": "Co porównujemy przy rozciągłości równoleżnikowej?",
  "R01_HARD_13": "W jakich jednostkach zapisujemy współrzędne?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Współrzędne geograficzne",
  icon: "🧭",
  sectionOrder: [
    "Siatka geograficzna",
    "Szerokość i długość",
    "Odczytywanie współrzędnych",
    "GPS i mapy cyfrowe",
    "Rozciągłość obszarów"
  ],
  sectionIcons: {
    "Siatka geograficzna": "🌐",
    "Szerokość i długość": "📐",
    "Odczytywanie współrzędnych": "🗺️",
    "GPS i mapy cyfrowe": "🛰️",
    "Rozciągłość obszarów": "📏"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;