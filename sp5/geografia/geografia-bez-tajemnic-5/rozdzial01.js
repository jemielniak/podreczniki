// Skróty sekcji:
//   MAP = Mapa źródłem informacji
//   SKA = Skala na mapach i planach
//   UKS = Ukształtowanie powierzchni na mapie
//   POL = Południki i równoleżniki
//   KON = Kontynenty i oceany
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_MAP_01",
    "section": "Mapa źródłem informacji",
    "type": "single_choice",
    "prompt": "Czym według rozdziału jest mapa?",
    "options": [
      "Zdjęciem wykonanym wyłącznie z samolotu",
      "Obrazem powierzchni Ziemi lub jej części na płaszczyźnie",
      "Listą nazw państw i miast",
      "Modelem Ziemi w kształcie kuli",
      "Opisową notatką z wycieczki",
      "Tabelą wysokości gór"
    ],
    "answer": 1,
    "explanation": "Mapa to obraz powierzchni Ziemi lub jej części przedstawiony na płaszczyźnie w pomniejszeniu i za pomocą znaków umownych."
  },
  {
    "id": "R01_MAP_02",
    "section": "Mapa źródłem informacji",
    "type": "multi_select",
    "prompt": "Zaznacz podstawowe cechy mapy.",
    "options": [
      "Jest wykonana na płaskiej powierzchni",
      "Przedstawia treść w skali",
      "Pokazuje obiekty w widoku z góry",
      "Stosuje umowne znaki graficzne",
      "Zawsze ma postać trójwymiarowej kuli",
      "Zawiera wyłącznie nazwy miast"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mapa jest płaska, pomniejszona, pokazuje obiekty z góry i używa znaków kartograficznych."
  },
  {
    "id": "R01_MAP_03",
    "section": "Mapa źródłem informacji",
    "type": "match",
    "prompt": "Połącz element mapy z jego funkcją.",
    "options": null,
    "left": [
      "Tytuł",
      "Skala",
      "Legenda",
      "Siatka kartograficzna"
    ],
    "right": [
      "Informuje, jaki obszar lub zjawisko przedstawiono",
      "Informuje, ile razy pomniejszono wymiary rzeczywiste",
      "Objaśnia znaki kartograficzne użyte na mapie",
      "Ułatwia określenie położenia obiektów"
    ],
    "answer": {
      "Tytuł": "Informuje, jaki obszar lub zjawisko przedstawiono",
      "Skala": "Informuje, ile razy pomniejszono wymiary rzeczywiste",
      "Legenda": "Objaśnia znaki kartograficzne użyte na mapie",
      "Siatka kartograficzna": "Ułatwia określenie położenia obiektów"
    },
    "explanation": "Tytuł, skala, legenda i siatka kartograficzna pomagają prawidłowo odczytać treść mapy."
  },
  {
    "id": "R01_MAP_04",
    "section": "Mapa źródłem informacji",
    "type": "true_false",
    "prompt": "Gdy na mapie nie ma innych oznaczeń, północ wskazuje najczęściej dolna część ramki mapy.",
    "options": null,
    "answer": false,
    "explanation": "W takim przypadku północ wskazuje najczęściej górna część ramki mapy."
  },
  {
    "id": "R01_MAP_05",
    "section": "Mapa źródłem informacji",
    "type": "fill_in",
    "prompt": "Elementy mapy to: tytuł, __________, treść mapy, skala i __________.",
    "options": null,
    "answer": [
      "siatka kartograficzna",
      "legenda"
    ],
    "altAnswers": [
      [
        "siatka kartograficzna",
        "siatkę kartograficzną"
      ],
      [
        "legenda",
        "legendę"
      ]
    ],
    "explanation": "Do głównych elementów mapy należą tytuł, siatka kartograficzna, treść, skala i legenda."
  },
  {
    "id": "R01_MAP_06",
    "section": "Mapa źródłem informacji",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mapa polityczna, mapa drogowa, mapa turystyczna, linijka.",
    "options": null,
    "answer": "linijka",
    "explanation": "Mapa polityczna, drogowa i turystyczna to przykłady map tematycznych, a linijka jest przyrządem."
  },
  {
    "id": "R01_MAP_07",
    "section": "Mapa źródłem informacji",
    "type": "scenario",
    "prompt": "Podczas wycieczki Ola ustawia mapę tak, aby kierunek północy na mapie pokrywał się z kierunkiem północy w terenie. Jak nazywa się ta czynność?",
    "options": [
      "Orientowanie mapy",
      "Generalizacja mapy",
      "Skalowanie mapy",
      "Kolorowanie mapy",
      "Tworzenie legendy",
      "Rysowanie poziomic"
    ],
    "answer": 0,
    "explanation": "Orientowanie mapy polega na ustawieniu jej zgodnie z kierunkiem północnym w terenie."
  },
  {
    "id": "R01_MAP_08",
    "section": "Mapa źródłem informacji",
    "type": "single_choice",
    "prompt": "Na jakie dwie główne grupy dzielimy mapy ze względu na treść?",
    "options": [
      "Małe i duże",
      "Papierowe i ścienne",
      "Ogólnogeograficzne i tematyczne",
      "Kolorowe i czarno-białe",
      "Morskie i górskie",
      "Stare i cyfrowe"
    ],
    "answer": 2,
    "explanation": "Podręcznik dzieli mapy ze względu na treść na ogólnogeograficzne i tematyczne."
  },
  {
    "id": "R01_MAP_09",
    "section": "Mapa źródłem informacji",
    "type": "true_false",
    "prompt": "Mapa cyfrowa może składać się z wielu warstw informacji, na przykład granic państw, ukształtowania terenu i sieci dróg.",
    "options": null,
    "answer": true,
    "explanation": "Mapy cyfrowe powstają z danych przetwarzanych komputerowo i mogą zawierać wiele warstw informacji."
  },
  {
    "id": "R01_MAP_10",
    "section": "Mapa źródłem informacji",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady map do odpowiednich kategorii.",
    "options": null,
    "items": [
      "mapa świata",
      "mapa topograficzna",
      "mapa polityczna",
      "mapa gleb",
      "mapa drogowa",
      "mapa krajobrazowa"
    ],
    "categories": [
      "ogólnogeograficzne",
      "tematyczne"
    ],
    "answer": {
      "ogólnogeograficzne": [
        "mapa świata",
        "mapa topograficzna"
      ],
      "tematyczne": [
        "mapa polityczna",
        "mapa gleb",
        "mapa drogowa",
        "mapa krajobrazowa"
      ]
    },
    "explanation": "Mapy ogólnogeograficzne pokazują ogólny obraz terenu, a tematyczne skupiają się na wybranym zagadnieniu."
  },
  {
    "id": "R01_MAP_11",
    "section": "Mapa źródłem informacji",
    "type": "riddle",
    "prompt": "Zestawienie znaków kartograficznych użytych na mapie oraz ich objaśnień to...",
    "options": null,
    "answer": "legenda",
    "altAnswers": [
      "legenda",
      "Legenda",
      "legendą"
    ],
    "explanation": "Legenda wyjaśnia znaczenie znaków kartograficznych umieszczonych na mapie."
  },
  {
    "id": "R01_MAP_12",
    "section": "Mapa źródłem informacji",
    "type": "multi_select",
    "prompt": "Na co warto zwrócić uwagę podczas czytania mapy?",
    "options": [
      "Na tytuł mapy",
      "Na legendę",
      "Na skalę",
      "Na kierunek północy",
      "Na kolor okładki podręcznika",
      "Na numer strony w stopce"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Tytuł, legenda, skala i kierunek północy są potrzebne do poprawnego korzystania z mapy."
  },
  {
    "id": "R01_SKA_01",
    "section": "Skala na mapach i planach",
    "type": "single_choice",
    "prompt": "O czym informuje skala na mapie?",
    "options": [
      "O liczbie miast na mapie",
      "O liczbie kolorów w legendzie",
      "O tym, ile razy zmniejszono rzeczywiste odległości i wymiary",
      "O kierunku północnym",
      "O wysokości szczytów",
      "O nazwie autora mapy"
    ],
    "answer": 2,
    "explanation": "Skala informuje, ile razy zmniejszono rzeczywiste odległości i wymiary obiektów."
  },
  {
    "id": "R01_SKA_02",
    "section": "Skala na mapach i planach",
    "type": "true_false",
    "prompt": "Skala 1 : 1 oznacza, że określona odległość na mapie odpowiada takiej samej odległości w terenie.",
    "options": null,
    "answer": true,
    "explanation": "W skali 1 : 1 wymiary na rysunku i w terenie byłyby takie same."
  },
  {
    "id": "R01_SKA_03",
    "section": "Skala na mapach i planach",
    "type": "fill_in",
    "prompt": "Skalę możemy przedstawić jako skalę __________, skalę __________ i podziałkę liniową.",
    "options": null,
    "answer": [
      "liczbową",
      "mianowaną"
    ],
    "altAnswers": [
      [
        "liczbową",
        "liczbowa"
      ],
      [
        "mianowaną",
        "mianowana"
      ]
    ],
    "image": "/img/r01_podzialka_liniowa.jpg",
    "explanation": "Ta sama skala może mieć postać liczbową, mianowaną albo graficzną jako podziałka liniowa."
  },
  {
    "id": "R01_SKA_04",
    "section": "Skala na mapach i planach",
    "type": "riddle",
    "prompt": "Graficzne przedstawienie skali, przydatne przy odmierzaniu odległości linijką, cyrklem lub nitką, to...",
    "options": null,
    "answer": "podziałka liniowa",
    "altAnswers": [
      "podziałka liniowa",
      "podzialka liniowa",
      "podziałka",
      "podzialka"
    ],
    "explanation": "Podziałka liniowa jest graficznym zapisem skali."
  },
  {
    "id": "R01_SKA_05",
    "section": "Skala na mapach i planach",
    "type": "single_choice",
    "prompt": "Co oznacza skala 1 : 400 000 zapisana jako skala mianowana?",
    "options": [
      "1 cm - 40 m",
      "1 cm - 400 m",
      "1 cm - 4 km",
      "1 cm - 40 km",
      "1 cm - 400 km",
      "1 cm - 4 m"
    ],
    "answer": 2,
    "explanation": "W skali 1 : 400 000 jeden centymetr na mapie odpowiada 400 000 cm, czyli 4 km w terenie."
  },
  {
    "id": "R01_SKA_06",
    "section": "Skala na mapach i planach",
    "type": "scenario",
    "prompt": "Na mapie w skali 1 : 25 000 odległość między dwoma punktami wynosi 3 cm. Jaka jest odległość w terenie?",
    "options": [
      "75 m",
      "250 m",
      "750 m",
      "7,5 km",
      "25 km",
      "75 km"
    ],
    "answer": 2,
    "explanation": "Trzy centymetry razy 25 000 to 75 000 cm, czyli 750 m."
  },
  {
    "id": "R01_SKA_07",
    "section": "Skala na mapach i planach",
    "type": "match",
    "prompt": "Połącz zapis skali z jego opisem.",
    "options": null,
    "left": [
      "1 : 400 000",
      "1 cm - 4 km",
      "0 4 8 12 km",
      "1 : 50 000"
    ],
    "right": [
      "zapis liczbowy skali 1 : 400 000",
      "zapis mianowany: 1 cm odpowiada 4 km",
      "zapis graficzny z odcinkami",
      "zapis liczbowy skali 1 : 50 000"
    ],
    "answer": {
      "1 : 400 000": "zapis liczbowy skali 1 : 400 000",
      "1 cm - 4 km": "zapis mianowany: 1 cm odpowiada 4 km",
      "0 4 8 12 km": "zapis graficzny z odcinkami",
      "1 : 50 000": "zapis liczbowy skali 1 : 50 000"
    },
    "explanation": "Skalę można zapisać liczbowo, mianowanie albo jako podziałkę liniową."
  },
  {
    "id": "R01_SKA_08",
    "section": "Skala na mapach i planach",
    "type": "multi_select",
    "prompt": "Czym można odmierzać odległości na mapie, gdy korzystamy z podziałki liniowej?",
    "options": [
      "Linijką",
      "Cyrklem",
      "Nitką",
      "Termometrem",
      "Zegarkiem",
      "Lupą bez skali"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r01_podzialka_liniowa.jpg",
    "explanation": "Podręcznik podaje linijkę, cyrkiel i nitkę jako przydatne sposoby odmierzania odległości na mapie."
  },
  {
    "id": "R01_SKA_09",
    "section": "Skala na mapach i planach",
    "type": "true_false",
    "prompt": "Im większy mianownik skali, tym większa skala mapy.",
    "options": null,
    "answer": false,
    "explanation": "Skala jest ułamkiem, więc większy mianownik oznacza mniejszy ułamek i mniejszą skalę."
  },
  {
    "id": "R01_SKA_10",
    "section": "Skala na mapach i planach",
    "type": "fill_in",
    "prompt": "Wraz ze zmniejszaniem skali maleje __________ mapy; to uproszczenie nazywamy __________ mapy.",
    "options": null,
    "answer": [
      "szczegółowość",
      "generalizacją"
    ],
    "altAnswers": [
      [
        "szczegółowość",
        "szczegolowosc"
      ],
      [
        "generalizacją",
        "generalizacja"
      ]
    ],
    "explanation": "Gdy skala maleje, mapa pokazuje mniej szczegółów, czyli ulega generalizacji."
  },
  {
    "id": "R01_SKA_11",
    "section": "Skala na mapach i planach",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: 1 : 400 000, 1 cm - 4 km, podziałka liniowa, poziomica.",
    "options": null,
    "answer": "poziomica",
    "explanation": "Trzy pierwsze przykłady dotyczą zapisu skali, a poziomica służy do przedstawiania wysokości."
  },
  {
    "id": "R01_SKA_12",
    "section": "Skala na mapach i planach",
    "type": "scenario",
    "prompt": "Uczeń chce wybrać mapę, na której zobaczy więcej szczegółów małego obszaru. Która skala będzie do tego najlepsza?",
    "options": [
      "1 : 10 000",
      "1 : 100 000",
      "1 : 2 000 000",
      "1 : 20 000 000"
    ],
    "answer": 0,
    "explanation": "Większa skala pozwala pokazać więcej szczegółów, a z podanych przykładów największa jest 1 : 10 000."
  },
  {
    "id": "R01_UKS_01",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "single_choice",
    "prompt": "Od czego mierzymy wysokość bezwzględną danego miejsca?",
    "options": [
      "Od najbliższej rzeki",
      "Od poziomu morza",
      "Od podnóża góry",
      "Od najbliższej drogi",
      "Od środka Ziemi",
      "Od granicy państwa"
    ],
    "answer": 1,
    "explanation": "Wysokość bezwzględna jest mierzona od poziomu morza i zapisywana w m n.p.m."
  },
  {
    "id": "R01_UKS_02",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "true_false",
    "prompt": "Wysokość względną zapisuje się jako wysokość mierzoną od poziomu morza w m n.p.m.",
    "options": null,
    "answer": false,
    "explanation": "Wysokość względna jest mierzona względem innego punktu odniesienia, na przykład od podnóża do szczytu."
  },
  {
    "id": "R01_UKS_03",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "fill_in",
    "prompt": "Szczyt leży na wysokości 400 m n.p.m., a podnóże na 150 m n.p.m. Wysokość względna wynosi __________ m.",
    "options": null,
    "answer": [
      "250"
    ],
    "altAnswers": [
      [
        "250",
        "250 m"
      ]
    ],
    "explanation": "Wysokość względną obliczamy przez odjęcie wysokości podnóża od wysokości szczytu: 400 m - 150 m = 250 m."
  },
  {
    "id": "R01_UKS_04",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "riddle",
    "prompt": "Linie łączące punkty położone na tej samej wysokości nad poziomem morza to...",
    "options": null,
    "answer": "poziomice",
    "altAnswers": [
      "poziomice",
      "poziomica"
    ],
    "image": "/img/r01_poziomice_wzniesienie.jpg",
    "explanation": "Poziomice łączą punkty o tej samej wysokości bezwzględnej."
  },
  {
    "id": "R01_UKS_05",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o poziomicach.",
    "options": [
      "Łączą punkty o tej samej wysokości",
      "Nigdy się nie przecinają",
      "Blisko położone oznaczają bardziej stromy stok",
      "Pozwalają odczytać wysokość bezwzględną",
      "Zawsze oznaczają granice państw",
      "Zawsze są niebieskimi liniami rzek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Poziomice pokazują wysokości bezwzględne, nie przecinają się i pozwalają oceniać nachylenie stoku."
  },
  {
    "id": "R01_UKS_06",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "single_choice",
    "prompt": "Jak nazywa się mapa, na której przestrzenie między poziomicami wypełniono kolorami według skali barw?",
    "options": [
      "Mapa polityczna",
      "Mapa drogowa",
      "Mapa hipsometryczna",
      "Plan miasta",
      "Mapa gleb",
      "Mapa konturowa"
    ],
    "answer": 2,
    "explanation": "Mapa hipsometryczna przedstawia ukształtowanie powierzchni za pomocą poziomic i skali barw."
  },
  {
    "id": "R01_UKS_07",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "Wysokość bezwzględna",
      "Wysokość względna",
      "Poziomice",
      "Mapa hipsometryczna"
    ],
    "right": [
      "Wysokość mierzona od poziomu morza",
      "Różnica wysokości względem wybranego punktu odniesienia",
      "Linie punktów o tej samej wysokości",
      "Mapa z przestrzeniami między poziomicami wypełnionymi kolorami"
    ],
    "answer": {
      "Wysokość bezwzględna": "Wysokość mierzona od poziomu morza",
      "Wysokość względna": "Różnica wysokości względem wybranego punktu odniesienia",
      "Poziomice": "Linie punktów o tej samej wysokości",
      "Mapa hipsometryczna": "Mapa z przestrzeniami między poziomicami wypełnionymi kolorami"
    },
    "explanation": "Wysokości, poziomice i mapa hipsometryczna to pojęcia służące do opisu ukształtowania powierzchni."
  },
  {
    "id": "R01_UKS_08",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wysokość bezwzględna, wysokość względna, poziom morza, legenda.",
    "options": null,
    "answer": "legenda",
    "explanation": "Legenda jest elementem mapy, a pozostałe pojęcia dotyczą określania wysokości."
  },
  {
    "id": "R01_UKS_09",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "scenario",
    "prompt": "Turysta patrzy na mapę poziomicową i widzi, że poziomice są położone bardzo blisko siebie. Jaki stok przedstawiono w tym miejscu?",
    "options": [
      "Bardzo łagodny",
      "Bardzo stromy",
      "Całkowicie płaski",
      "Podwodny",
      "Bez wysokości",
      "Zaznaczony jako granica państwa"
    ],
    "answer": 1,
    "image": "/img/r01_poziomice_wzniesienie.jpg",
    "explanation": "Im mniejsze są odległości między poziomicami, tym bardziej stromy jest stok lub zbocze."
  },
  {
    "id": "R01_UKS_10",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "true_false",
    "prompt": "Odczytując wysokości z poziomic, odczytujemy wysokość bezwzględną.",
    "options": null,
    "answer": true,
    "explanation": "Poziomice na mapie pokazują wysokości nad poziomem morza, czyli wysokości bezwzględne."
  },
  {
    "id": "R01_UKS_11",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do mapy poziomicowej albo hipsometrycznej.",
    "options": null,
    "items": [
      "linie tej samej wysokości",
      "poziomice nie przecinają się",
      "przestrzenie między poziomicami wypełnione kolorami",
      "skala barw wysokości",
      "odczyt wysokości bezwzględnej z linii",
      "łatwiejsze wyobrażenie rzeźby dzięki kolorom"
    ],
    "categories": [
      "mapa poziomicowa",
      "mapa hipsometryczna"
    ],
    "answer": {
      "mapa poziomicowa": [
        "linie tej samej wysokości",
        "poziomice nie przecinają się",
        "odczyt wysokości bezwzględnej z linii"
      ],
      "mapa hipsometryczna": [
        "przestrzenie między poziomicami wypełnione kolorami",
        "skala barw wysokości",
        "łatwiejsze wyobrażenie rzeźby dzięki kolorom"
      ]
    },
    "explanation": "Mapa poziomicowa opiera się na poziomicach, a hipsometryczna dodatkowo wypełnia przestrzenie kolorami."
  },
  {
    "id": "R01_UKS_12",
    "section": "Ukształtowanie powierzchni na mapie",
    "type": "fill_in",
    "prompt": "Im większe odległości między poziomicami, tym bardziej __________ jest stok; im mniejsze odległości, tym bardziej __________ jest stok.",
    "options": null,
    "answer": [
      "łagodny",
      "stromy"
    ],
    "altAnswers": [
      [
        "łagodny",
        "lagodny"
      ],
      [
        "stromy",
        "stromy"
      ]
    ],
    "explanation": "Duże odstępy między poziomicami oznaczają stok łagodny, a małe odstępy stok stromy."
  },
  {
    "id": "R01_POL_01",
    "section": "Południki i równoleżniki",
    "type": "single_choice",
    "prompt": "Czym są południki?",
    "options": [
      "Liniami równoległymi do równika",
      "Liniami łączącymi najkrótszą drogą oba bieguny",
      "Kołami podbiegunowymi",
      "Kolorami na mapie hipsometrycznej",
      "Znakami w legendzie",
      "Nazwami oceanów"
    ],
    "answer": 1,
    "explanation": "Południki to linie umowne łączące najkrótszą drogą biegun północny z biegunem południowym."
  },
  {
    "id": "R01_POL_02",
    "section": "Południki i równoleżniki",
    "type": "true_false",
    "prompt": "Równoleżniki są prostopadłe do południków.",
    "options": null,
    "answer": true,
    "explanation": "Równoleżniki to linie umowne położone równolegle do równika i prostopadle do południków."
  },
  {
    "id": "R01_POL_03",
    "section": "Południki i równoleżniki",
    "type": "fill_in",
    "prompt": "Południk początkowy ma wartość __________, a przeciwległy południk ma wartość __________.",
    "options": null,
    "answer": [
      "0°",
      "180°"
    ],
    "altAnswers": [
      [
        "0°",
        "0",
        "0 stopni"
      ],
      [
        "180°",
        "180",
        "180 stopni"
      ]
    ],
    "explanation": "Na siatce geograficznej południk początkowy ma 0°, a przeciwległy południk 180°."
  },
  {
    "id": "R01_POL_04",
    "section": "Południki i równoleżniki",
    "type": "riddle",
    "prompt": "Najdłuższy równoleżnik, oznaczany jako 0°, to...",
    "options": null,
    "answer": "równik",
    "altAnswers": [
      "równik",
      "Równik",
      "rownik"
    ],
    "image": "/img/r01_globus_siatka_geograficzna.jpg",
    "explanation": "Równik jest najdłuższym równoleżnikiem i dzieli Ziemię na półkulę północną i południową."
  },
  {
    "id": "R01_POL_05",
    "section": "Południki i równoleżniki",
    "type": "multi_select",
    "prompt": "Które półkule wyznacza płaszczyzna równika?",
    "options": [
      "Północną",
      "Południową",
      "Wschodnią",
      "Zachodnią",
      "Oceaniczną",
      "Kontynentalną"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Równik dzieli kulę ziemską na półkulę północną i południową."
  },
  {
    "id": "R01_POL_06",
    "section": "Południki i równoleżniki",
    "type": "single_choice",
    "prompt": "Gdzie występuje siatka geograficzna, a gdzie siatka kartograficzna?",
    "options": [
      "Geograficzna na mapie, kartograficzna na globusie",
      "Obie tylko w legendzie",
      "Geograficzna na globusie, kartograficzna na mapie",
      "Obie tylko na zdjęciach satelitarnych",
      "Geograficzna tylko w oceanach, kartograficzna tylko na lądach"
    ],
    "answer": 2,
    "explanation": "Południki i równoleżniki tworzą na globusie siatkę geograficzną, a na mapie siatkę kartograficzną."
  },
  {
    "id": "R01_POL_07",
    "section": "Południki i równoleżniki",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "Równik",
      "Południk 0°",
      "Południk 180°",
      "Siatka geograficzna"
    ],
    "right": [
      "Najdłuższy równoleżnik",
      "Południk początkowy",
      "Południk przeciwległy do początkowego",
      "Układ południków i równoleżników na globusie"
    ],
    "answer": {
      "Równik": "Najdłuższy równoleżnik",
      "Południk 0°": "Południk początkowy",
      "Południk 180°": "Południk przeciwległy do początkowego",
      "Siatka geograficzna": "Układ południków i równoleżników na globusie"
    },
    "explanation": "Południki i równoleżniki umożliwiają określanie położenia punktów na Ziemi."
  },
  {
    "id": "R01_POL_08",
    "section": "Południki i równoleżniki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: równik, zwrotnik Raka, koło podbiegunowe północne, południk 0°.",
    "options": null,
    "answer": "południk 0°",
    "image": "/img/r01_globus_siatka_geograficzna.jpg",
    "explanation": "Równik, zwrotnik Raka i koło podbiegunowe północne są równoleżnikami, a południk 0° jest południkiem."
  },
  {
    "id": "R01_POL_09",
    "section": "Południki i równoleżniki",
    "type": "scenario",
    "prompt": "Punkt leży na północ od równika i na wschód od południka 0°. Na których półkulach się znajduje?",
    "options": [
      "Północnej i wschodniej",
      "Północnej i zachodniej",
      "Południowej i wschodniej",
      "Południowej i zachodniej"
    ],
    "answer": 0,
    "explanation": "Położenie na północ od równika oznacza półkulę północną, a na wschód od południka 0° półkulę wschodnią."
  },
  {
    "id": "R01_POL_10",
    "section": "Południki i równoleżniki",
    "type": "true_false",
    "prompt": "Siatka kartograficzna na mapie może mieć zniekształcone kształty południków i równoleżników, bo kulistą Ziemię przedstawia się na płaszczyźnie.",
    "options": null,
    "answer": true,
    "explanation": "Przeniesienie kulistej powierzchni Ziemi na płaską mapę powoduje zniekształcenia."
  },
  {
    "id": "R01_POL_11",
    "section": "Południki i równoleżniki",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do południków albo równoleżników.",
    "options": null,
    "items": [
      "południk 0°",
      "południk 180°",
      "linia łącząca bieguny",
      "równik",
      "zwrotnik Raka",
      "koło podbiegunowe południowe"
    ],
    "categories": [
      "południki",
      "równoleżniki"
    ],
    "answer": {
      "południki": [
        "południk 0°",
        "południk 180°",
        "linia łącząca bieguny"
      ],
      "równoleżniki": [
        "równik",
        "zwrotnik Raka",
        "koło podbiegunowe południowe"
      ]
    },
    "explanation": "Południki łączą bieguny, a równoleżniki są liniami równoległymi do równika."
  },
  {
    "id": "R01_POL_12",
    "section": "Południki i równoleżniki",
    "type": "fill_in",
    "prompt": "Płaszczyzna równika dzieli kulę ziemską na półkulę __________ i __________.",
    "options": null,
    "answer": [
      "północną",
      "południową"
    ],
    "altAnswers": [
      [
        "północną",
        "polnocna",
        "północna"
      ],
      [
        "południową",
        "poludniowa",
        "południowa"
      ]
    ],
    "explanation": "Równik dzieli Ziemię na półkulę północną oraz południową."
  },
  {
    "id": "R01_KON_01",
    "section": "Kontynenty i oceany",
    "type": "multi_select",
    "prompt": "Zaznacz nazwy kontynentów.",
    "options": [
      "Azja",
      "Ocean Atlantycki",
      "Afryka",
      "Australia",
      "Pacyfik",
      "Europa"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "image": "/img/r01_kontynenty_oceany_mapa.jpg",
    "explanation": "Kontynenty to wielkie obszary lądowe, takie jak Azja, Afryka, Australia i Europa."
  },
  {
    "id": "R01_KON_02",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Który kontynent ma największą powierzchnię według listy w podręczniku?",
    "options": [
      "Europa",
      "Australia",
      "Azja",
      "Antarktyda",
      "Ameryka Południowa",
      "Afryka"
    ],
    "answer": 2,
    "explanation": "W zestawieniu kontynentów od największego do najmniejszego pierwsze miejsce zajmuje Azja."
  },
  {
    "id": "R01_KON_03",
    "section": "Kontynenty i oceany",
    "type": "true_false",
    "prompt": "Na Ziemi jest pięć oceanów i siedem kontynentów.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje pięć oceanów i siedem kontynentów."
  },
  {
    "id": "R01_KON_04",
    "section": "Kontynenty i oceany",
    "type": "match",
    "prompt": "Połącz nazwę lub pojęcie z opisem.",
    "options": null,
    "left": [
      "Azja",
      "Ocean Spokojny",
      "Wszechocean",
      "Australia"
    ],
    "right": [
      "Największy kontynent",
      "Pacyfik",
      "Ocean światowy",
      "Najmniejszy kontynent"
    ],
    "answer": {
      "Azja": "Największy kontynent",
      "Ocean Spokojny": "Pacyfik",
      "Wszechocean": "Ocean światowy",
      "Australia": "Najmniejszy kontynent"
    },
    "explanation": "Nazwy kontynentów i oceanów pozwalają opisywać rozmieszczenie lądów i wód na Ziemi."
  },
  {
    "id": "R01_KON_05",
    "section": "Kontynenty i oceany",
    "type": "fill_in",
    "prompt": "Morza i oceany tworzą ocean światowy, nazywany __________.",
    "options": null,
    "answer": [
      "wszechoceanem"
    ],
    "altAnswers": [
      [
        "wszechoceanem",
        "wszechocean",
        "oceanem światowym",
        "ocean światowy"
      ]
    ],
    "explanation": "Wszechocean to ogólne określenie wszystkich wód mórz i oceanów na powierzchni Ziemi."
  },
  {
    "id": "R01_KON_06",
    "section": "Kontynenty i oceany",
    "type": "sort",
    "prompt": "Przyporządkuj nazwy do kontynentów albo oceanów.",
    "options": null,
    "items": [
      "Europa",
      "Ocean Indyjski",
      "Ameryka Południowa",
      "Ocean Arktyczny",
      "Antarktyda",
      "Ocean Południowy"
    ],
    "categories": [
      "kontynenty",
      "oceany"
    ],
    "answer": {
      "kontynenty": [
        "Europa",
        "Ameryka Południowa",
        "Antarktyda"
      ],
      "oceany": [
        "Ocean Indyjski",
        "Ocean Arktyczny",
        "Ocean Południowy"
      ]
    },
    "image": "/img/r01_kontynenty_oceany_mapa.jpg",
    "explanation": "Europa, Ameryka Południowa i Antarktyda są kontynentami, a Ocean Indyjski, Arktyczny i Południowy są oceanami."
  },
  {
    "id": "R01_KON_07",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Jaką wysokość osiągają niziny według definicji z rozdziału?",
    "options": [
      "Do 300 m n.p.m.",
      "Powyżej 300 m n.p.m.",
      "Powyżej 1000 m n.p.m.",
      "Zawsze poniżej poziomu morza",
      "Tylko 500 m n.p.m.",
      "Tylko powyżej 3000 m n.p.m."
    ],
    "answer": 0,
    "explanation": "Niziny są obszarami osiągającymi wysokość do 300 m n.p.m."
  },
  {
    "id": "R01_KON_08",
    "section": "Kontynenty i oceany",
    "type": "true_false",
    "prompt": "Wyżyny są położone powyżej 300 m n.p.m. i mają zwykle małe wysokości względne.",
    "options": null,
    "answer": true,
    "explanation": "Wyżyny według rozdziału leżą powyżej 300 m n.p.m. i mają zwykle małe, do 300 m, wysokości względne."
  },
  {
    "id": "R01_KON_09",
    "section": "Kontynenty i oceany",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Azja, Afryka, Europa, Ocean Indyjski.",
    "options": null,
    "answer": "Ocean Indyjski",
    "explanation": "Azja, Afryka i Europa to kontynenty, a Ocean Indyjski jest oceanem."
  },
  {
    "id": "R01_KON_10",
    "section": "Kontynenty i oceany",
    "type": "sequence",
    "prompt": "Ułóż kontynenty od największego do najmniejszego zgodnie z listą w podręczniku.",
    "options": null,
    "items": [
      "Europa",
      "Azja",
      "Australia",
      "Ameryka Południowa",
      "Afryka",
      "Antarktyda",
      "Ameryka Północna"
    ],
    "answer": [
      "Azja",
      "Afryka",
      "Ameryka Północna",
      "Ameryka Południowa",
      "Antarktyda",
      "Europa",
      "Australia"
    ],
    "explanation": "Podręcznik szereguje kontynenty według powierzchni: Azja, Afryka, Ameryka Północna, Ameryka Południowa, Antarktyda, Europa, Australia."
  },
  {
    "id": "R01_KON_11",
    "section": "Kontynenty i oceany",
    "type": "scenario",
    "prompt": "Podróżnik chce przepłynąć z Europy do Ameryki najkrótszą drogą przez ocean leżący między tymi kontynentami. Który ocean musi pokonać?",
    "options": [
      "Ocean Atlantycki",
      "Ocean Indyjski",
      "Ocean Arktyczny",
      "Ocean Południowy",
      "Ocean Spokojny"
    ],
    "answer": 0,
    "explanation": "Ocean Atlantycki leży między Europą i Ameryką."
  },
  {
    "id": "R01_KON_12",
    "section": "Kontynenty i oceany",
    "type": "match",
    "prompt": "Połącz podróżnika z trasą lub dokonaniem opisanym w rozdziale.",
    "options": null,
    "left": [
      "Wikingowie",
      "Marco Polo",
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "James Cook"
    ],
    "right": [
      "Dotarli do Islandii, Grenlandii i wschodnich wybrzeży Kanady",
      "Dotarł do Chin i Japonii oraz odwiedził Indie",
      "Dotarł przez Atlantyk do Ameryki",
      "Jako pierwszy dotarł drogą morską do Półwyspu Indyjskiego",
      "Jego statki jako pierwsze opłynęły Ziemię",
      "Ustalił wielkość kontynentu Australii"
    ],
    "answer": {
      "Wikingowie": "Dotarli do Islandii, Grenlandii i wschodnich wybrzeży Kanady",
      "Marco Polo": "Dotarł do Chin i Japonii oraz odwiedził Indie",
      "Krzysztof Kolumb": "Dotarł przez Atlantyk do Ameryki",
      "Vasco da Gama": "Jako pierwszy dotarł drogą morską do Półwyspu Indyjskiego",
      "Ferdynand Magellan": "Jego statki jako pierwsze opłynęły Ziemię",
      "James Cook": "Ustalił wielkość kontynentu Australii"
    },
    "explanation": "W rozdziale opisano najważniejszych podróżników i trasy ich wypraw."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na mapie w skali 1 : 50 000 zmierzono odcinek 6 cm. Ile wynosi odpowiadająca mu odległość w terenie?",
    "options": [
      "300 m",
      "500 m",
      "1,5 km",
      "3 km",
      "30 km",
      "300 km"
    ],
    "answer": 3,
    "explanation": "W skali 1 : 50 000 jeden centymetr odpowiada 500 m, więc 6 cm to 3000 m, czyli 3 km."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Mapa w skali 1 : 2 000 000 przedstawia większy obszar, ale mniej szczegółów niż mapa w skali 1 : 100 000.",
    "options": null,
    "answer": true,
    "explanation": "Skala 1 : 2 000 000 jest mniejsza, dlatego mapa pokazuje większy obszar i mniej szczegółów."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zdania zgodne z podziałem Ziemi na półkule.",
    "options": [
      "Równik dzieli Ziemię na półkulę północną i południową",
      "Południki 0° i 180° dzielą Ziemię na półkulę wschodnią i zachodnią",
      "Zwrotnik Raka dzieli Ziemię na półkulę wschodnią i zachodnią",
      "Każdy równoleżnik łączy biegun północny z południowym",
      "Południki i równoleżniki pomagają określać położenie punktów"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "image": "/img/r01_globus_siatka_geograficzna.jpg",
    "explanation": "Równik dzieli Ziemię na półkulę północną i południową, a płaszczyzna południków 0° i 180° na wschodnią i zachodnią."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Płaszczyzna południków __________ i __________ dzieli kulę ziemską na półkulę wschodnią i zachodnią.",
    "options": null,
    "answer": [
      "0°",
      "180°"
    ],
    "altAnswers": [
      [
        "0°",
        "0",
        "0 stopni"
      ],
      [
        "180°",
        "180",
        "180 stopni"
      ]
    ],
    "explanation": "Półkule wschodnią i zachodnią wyznacza płaszczyzna południka 0° oraz południka 180°."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na rysunku poziomicowym wartości poziomic maleją ku środkowi obszaru. Jaką formę terenu pokazuje rysunek?",
    "options": [
      "Szczyt wzniesienia",
      "Obniżenie terenu",
      "Poziom morza",
      "Równik",
      "Granica oceanów",
      "Szlak turystyczny"
    ],
    "answer": 1,
    "image": "/img/r01_poziomice_wzniesienie.jpg",
    "explanation": "Jeżeli wartości poziomic maleją ku środkowi, oznacza to obniżenie terenu."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz skalę liczbową z odległością w terenie odpowiadającą 1 cm na mapie.",
    "options": null,
    "left": [
      "1 : 25 000",
      "1 : 50 000",
      "1 : 400 000",
      "1 : 2 000 000"
    ],
    "right": [
      "250 m",
      "500 m",
      "4 km",
      "20 km"
    ],
    "answer": {
      "1 : 25 000": "250 m",
      "1 : 50 000": "500 m",
      "1 : 400 000": "4 km",
      "1 : 2 000 000": "20 km"
    },
    "explanation": "Aby zamienić skalę liczbową na mianowaną, przeliczamy centymetry w terenie na metry lub kilometry."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które kontynenty w całości leżą na półkuli północnej?",
    "options": [
      "Europa",
      "Ameryka Północna",
      "Afryka",
      "Australia",
      "Ameryka Południowa",
      "Antarktyda"
    ],
    "answer": [
      0,
      1
    ],
    "image": "/img/r01_kontynenty_oceany_mapa.jpg",
    "explanation": "Europa i Ameryka Północna leżą w całości na półkuli północnej; Azja sięga również na południe od równika."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Krzysztof Kolumb, Ferdynand Magellan, James Cook, poziomica.",
    "options": null,
    "answer": "poziomica",
    "explanation": "Kolumb, Magellan i Cook to podróżnicy lub odkrywcy opisani w rozdziale, a poziomica jest linią na mapie."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wyprawy od najwcześniejszej do najpóźniejszej zgodnie z datami na mapie wypraw.",
    "options": null,
    "items": [
      "James Cook (1768-1771)",
      "Krzysztof Kolumb (1492-1493)",
      "wikingowie (800-1100)",
      "Ferdynand Magellan (1519-1522)",
      "Marco Polo (1271-1288)",
      "Vasco da Gama (1497-1498)"
    ],
    "answer": [
      "wikingowie (800-1100)",
      "Marco Polo (1271-1288)",
      "Krzysztof Kolumb (1492-1493)",
      "Vasco da Gama (1497-1498)",
      "Ferdynand Magellan (1519-1522)",
      "James Cook (1768-1771)"
    ],
    "explanation": "Daty podane w rozdziale układają się od wypraw wikingów, przez Marco Polo, Kolumba, da Gamę, Magellana, aż po Jamesa Cooka."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego kształty południków i równoleżników na mapie różnią się od tych na globusie?",
    "options": [
      "Bo mapa zawsze pokazuje tylko oceany",
      "Bo kulistą powierzchnię Ziemi przedstawia się na płaszczyźnie",
      "Bo południki znikają na mapie",
      "Bo równoleżniki są znakami legendy",
      "Bo skala nie dotyczy map świata",
      "Bo globus nie ma kierunków świata"
    ],
    "answer": 1,
    "explanation": "Na płaskiej mapie trudno przedstawić kulistą powierzchnię Ziemi bez zniekształceń."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Posługuję się mapą",
  icon: "🗺️",
  sectionOrder: [
  "Mapa źródłem informacji",
  "Skala na mapach i planach",
  "Ukształtowanie powierzchni na mapie",
  "Południki i równoleżniki",
  "Kontynenty i oceany",
  "Super trudne"
],
  sectionIcons: {
  "Mapa źródłem informacji": "🧭",
  "Skala na mapach i planach": "📏",
  "Ukształtowanie powierzchni na mapie": "⛰️",
  "Południki i równoleżniki": "🌐",
  "Kontynenty i oceany": "🌍",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
