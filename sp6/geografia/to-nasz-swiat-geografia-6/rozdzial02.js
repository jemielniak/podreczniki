// Skróty sekcji (do identyfikatorów ćwiczeń):
//   LAT  = Równoleżniki i szerokość geograficzna
//   LON  = Południki i długość geograficzna
//   COO  = Odczytywanie współrzędnych
//   GPS  = Stopnie, minuty i GPS
//   EXT  = Rozciągłość geograficzna
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_LAT_01",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "single_choice",
    "prompt": "Z których elementów siatki geograficznej odczytujemy szerokość geograficzną?",
    "options": [
      "z równoleżników",
      "z południków",
      "z granic kontynentów",
      "z kierunków wiatrów",
      "z linii brzegowej",
      "z wysokości nad poziomem morza"
    ],
    "answer": 0,
    "image": "r02_globus_rownolezniki.jpg",
    "explanation": "Szerokość geograficzną odczytujemy z równoleżników, czyli wartości zapisanych przy tych liniach na globusie lub mapie."
  },
  {
    "id": "R02_LAT_02",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "true_false",
    "prompt": "Równik jest najdłuższym równoleżnikiem i dzieli Ziemię na półkulę północną oraz południową.",
    "options": null,
    "answer": true,
    "image": "r02_rownik_i_polkul.jpg",
    "explanation": "Równik jest najdłuższym równoleżnikiem. To on oddziela półkulę północną od południowej."
  },
  {
    "id": "R02_LAT_03",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne cechy równoleżników.",
    "options": [
      "mają kształt okręgów",
      "równik jest najdłuższym z nich",
      "każdy ma wartość liczbową",
      "zbiegają się na biegunach",
      "odczytujemy z nich długość geograficzną",
      "południk 0° jest jednym z równoleżników"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Równoleżniki mają kształt okręgów, równik jest najdłuższy, a każdy równoleżnik ma wartość liczbową. Zbieganie się na biegunach dotyczy południków."
  },
  {
    "id": "R02_LAT_04",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "fill_in",
    "prompt": "Szerokość geograficzna może być __________ albo __________.",
    "options": null,
    "answer": [
      "północna",
      "południowa"
    ],
    "altAnswers": [
      [
        "północna",
        "polnocna"
      ],
      [
        "południowa",
        "poludniowa"
      ]
    ],
    "explanation": "Na półkuli północnej podajemy szerokość północną, a na półkuli południowej szerokość południową."
  },
  {
    "id": "R02_LAT_05",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "riddle",
    "prompt": "Najdłuższy równoleżnik, który ma szerokość geograficzną 0°, to...",
    "options": null,
    "answer": "równik",
    "altAnswers": [
      "równik",
      "rownik"
    ],
    "image": "r02_rownik_i_polkul.jpg",
    "explanation": "Równik ma wartość 0° i jest najdłuższym równoleżnikiem."
  },
  {
    "id": "R02_LAT_06",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: równik, zwrotnik Raka, zwrotnik Koziorożca, południk 0°.",
    "options": null,
    "answer": "południk 0°",
    "explanation": "Równik i zwrotniki są równoleżnikami. Południk 0° należy do południków, więc nie pasuje do tej grupy."
  },
  {
    "id": "R02_LAT_07",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "scenario",
    "prompt": "Uczeń odczytuje położenie miasta na mapie. Najpierw szuka równoleżnika, na którym leży to miasto, potem sprawdza wartość liczbową i literę N albo S. Jaką współrzędną odczytuje?",
    "options": [
      "szerokość geograficzną",
      "długość geograficzną",
      "wysokość bezwzględną",
      "rozciągłość równoleżnikową",
      "odległość od morza",
      "skalę mapy"
    ],
    "answer": 0,
    "explanation": "Odczytywanie szerokości geograficznej polega na ustaleniu równoleżnika i określeniu półkuli północnej lub południowej."
  },
  {
    "id": "R02_LAT_08",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "match",
    "prompt": "Połącz miejsce z szerokością geograficzną.",
    "options": null,
    "left": [
      "Kair",
      "Kampala",
      "Britstown"
    ],
    "right": [
      "0°",
      "30°N",
      "30°S"
    ],
    "answer": {
      "Kair": "30°N",
      "Kampala": "0°",
      "Britstown": "30°S"
    },
    "image": "r02_mapa_szerokosci_przyklady.jpg",
    "explanation": "Kair ma szerokość 30°N, Kampala leży na równiku i ma 0°, a Britstown ma 30°S."
  },
  {
    "id": "R02_LAT_09",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "sort",
    "prompt": "Przyporządkuj przykładowe wartości szerokości geograficznej do półkul.",
    "options": null,
    "items": [
      "30°N",
      "70°N",
      "30°S",
      "50°S"
    ],
    "categories": [
      "półkula północna",
      "półkula południowa"
    ],
    "answer": {
      "półkula północna": [
        "30°N",
        "70°N"
      ],
      "półkula południowa": [
        "30°S",
        "50°S"
      ]
    },
    "explanation": "Litera N oznacza półkulę północną, a litera S oznacza półkulę południową."
  },
  {
    "id": "R02_LAT_10",
    "section": "Równoleżniki i szerokość geograficzna",
    "type": "sequence",
    "prompt": "Ułóż czynności odczytywania szerokości geograficznej w poprawnej kolejności.",
    "options": null,
    "items": [
      "określ półkulę N albo S",
      "odczytaj wartość równoleżnika",
      "odnajdź równoleżnik miejsca",
      "zapisz szerokość geograficzną"
    ],
    "answer": [
      "odnajdź równoleżnik miejsca",
      "odczytaj wartość równoleżnika",
      "określ półkulę N albo S",
      "zapisz szerokość geograficzną"
    ],
    "explanation": "Najpierw ustalamy równoleżnik, potem jego wartość, następnie półkulę i dopiero zapisujemy całą szerokość geograficzną."
  },
  {
    "id": "R02_LON_01",
    "section": "Południki i długość geograficzna",
    "type": "single_choice",
    "prompt": "Z których elementów siatki geograficznej odczytujemy długość geograficzną?",
    "options": [
      "z południków",
      "z równoleżników",
      "ze zwrotników",
      "z kół podbiegunowych",
      "z linii wysokości",
      "z granic państw"
    ],
    "answer": 0,
    "image": "r02_globus_poludniki.jpg",
    "explanation": "Długość geograficzną odczytujemy z południków, czyli wartości zapisanych przy tych liniach na globusie i mapie."
  },
  {
    "id": "R02_LON_02",
    "section": "Południki i długość geograficzna",
    "type": "true_false",
    "prompt": "Południki mają kształt półokręgów i zbiegają się na biegunach.",
    "options": null,
    "answer": true,
    "image": "r02_globus_poludniki.jpg",
    "explanation": "Południki są półokręgami. Wszystkie spotykają się na biegunach."
  },
  {
    "id": "R02_LON_03",
    "section": "Południki i długość geograficzna",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne informacje o południkach.",
    "options": [
      "dwa szczególne południki to 0° i 180°",
      "południki dzielą Ziemię na półkulę wschodnią i zachodnią",
      "długość geograficzna ma wartości od 0° do 180°",
      "z południków odczytujemy szerokość geograficzną",
      "równik jest południkiem 0°",
      "południki mają kształt okręgów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_poludnik_zero_180.jpg",
    "explanation": "Południki 0° i 180° dzielą Ziemię na półkulę wschodnią i zachodnią. Długość geograficzna mieści się w przedziale od 0° do 180°."
  },
  {
    "id": "R02_LON_04",
    "section": "Południki i długość geograficzna",
    "type": "fill_in",
    "prompt": "Długość geograficzna może być __________ albo __________.",
    "options": null,
    "answer": [
      "wschodnia",
      "zachodnia"
    ],
    "altAnswers": [
      [
        "wschodnia"
      ],
      [
        "zachodnia"
      ]
    ],
    "explanation": "Na półkuli wschodniej podajemy długość wschodnią, a na półkuli zachodniej długość zachodnią."
  },
  {
    "id": "R02_LON_05",
    "section": "Południki i długość geograficzna",
    "type": "riddle",
    "prompt": "Południk, od którego na półkulach wschodniej i zachodniej liczy się długość geograficzną, to południk...",
    "options": null,
    "answer": "0°",
    "altAnswers": [
      "0°",
      "0",
      "zero",
      "południk 0°",
      "poludnik 0°"
    ],
    "image": "r02_poludnik_zero_180.jpg",
    "explanation": "Długość geograficzna rośnie w obu kierunkach od południka 0° do południka 180°."
  },
  {
    "id": "R02_LON_06",
    "section": "Południki i długość geograficzna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: południk 0°, południk 180°, południk 30°E, równik.",
    "options": null,
    "answer": "równik",
    "explanation": "Trzy pierwsze elementy to południki. Równik jest równoleżnikiem, więc nie pasuje."
  },
  {
    "id": "R02_LON_07",
    "section": "Południki i długość geograficzna",
    "type": "scenario",
    "prompt": "Na mapie fragmentu Ziemi wartości południków rosną na zachód. Którą półkulę przedstawia ten fragment mapy?",
    "options": [
      "zachodnią",
      "wschodnią",
      "północną",
      "południową",
      "obie półkule jednocześnie",
      "nie można określić z kierunku wzrostu wartości"
    ],
    "answer": 0,
    "image": "r02_mapa_poludniki.jpg",
    "explanation": "Jeżeli wartości południków rosną na zachód, mapa obejmuje fragment półkuli zachodniej."
  },
  {
    "id": "R02_LON_08",
    "section": "Południki i długość geograficzna",
    "type": "match",
    "prompt": "Połącz miejsce z długością geograficzną.",
    "options": null,
    "left": [
      "Park Narodowy Grenlandii",
      "Londyn",
      "Dhaka"
    ],
    "right": [
      "0°",
      "30°W",
      "90°E"
    ],
    "answer": {
      "Park Narodowy Grenlandii": "30°W",
      "Londyn": "0°",
      "Dhaka": "90°E"
    },
    "image": "r02_mapa_dlugosci_przyklady.jpg",
    "explanation": "Park Narodowy Grenlandii ma długość 30°W, Londyn leży na południku 0°, a Dhaka ma 90°E."
  },
  {
    "id": "R02_LON_09",
    "section": "Południki i długość geograficzna",
    "type": "sort",
    "prompt": "Przyporządkuj wartości długości geograficznej do półkul.",
    "options": null,
    "items": [
      "30°W",
      "155°W",
      "90°E",
      "112°E"
    ],
    "categories": [
      "półkula zachodnia",
      "półkula wschodnia"
    ],
    "answer": {
      "półkula zachodnia": [
        "30°W",
        "155°W"
      ],
      "półkula wschodnia": [
        "90°E",
        "112°E"
      ]
    },
    "explanation": "Litera W oznacza półkulę zachodnią, a litera E oznacza półkulę wschodnią."
  },
  {
    "id": "R02_LON_10",
    "section": "Południki i długość geograficzna",
    "type": "sequence",
    "prompt": "Ułóż czynności odczytywania długości geograficznej w poprawnej kolejności.",
    "options": null,
    "items": [
      "określ półkulę E albo W",
      "zapisz długość geograficzną",
      "odczytaj wartość południka",
      "odnajdź południk miejsca"
    ],
    "answer": [
      "odnajdź południk miejsca",
      "odczytaj wartość południka",
      "określ półkulę E albo W",
      "zapisz długość geograficzną"
    ],
    "explanation": "Przy odczytywaniu długości najpierw odnajdujemy południk, potem jego wartość i półkulę, a na końcu zapisujemy wynik."
  },
  {
    "id": "R02_COO_01",
    "section": "Odczytywanie współrzędnych",
    "type": "single_choice",
    "prompt": "W jakiej kolejności zapisujemy współrzędne geograficzne danego miejsca?",
    "options": [
      "najpierw szerokość geograficzną, potem długość geograficzną",
      "najpierw długość geograficzną, potem szerokość geograficzną",
      "najpierw wysokość, potem szerokość",
      "najpierw półkulę E lub W, potem N lub S",
      "kolejność jest dowolna",
      "najpierw skalę mapy, potem współrzędne"
    ],
    "answer": 0,
    "image": "r02_siatka_kartograficzna.jpg",
    "explanation": "Przyjęło się, że najpierw podajemy szerokość geograficzną, a dopiero jako drugą długość geograficzną."
  },
  {
    "id": "R02_COO_02",
    "section": "Odczytywanie współrzędnych",
    "type": "true_false",
    "prompt": "Współrzędne geograficzne jednego miejsca składają się z szerokości geograficznej i długości geograficznej.",
    "options": null,
    "answer": true,
    "explanation": "Położenie miejsca na Ziemi określa para wartości: szerokość i długość geograficzna."
  },
  {
    "id": "R02_COO_03",
    "section": "Odczytywanie współrzędnych",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne zapisy współrzędnych geograficznych.",
    "options": [
      "30°N 90°W",
      "30°S 90°E",
      "0° 20°E",
      "30°W 90°N",
      "190°E 20°N",
      "45°N 200°W"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Poprawny zapis podaje najpierw szerokość N lub S, a potem długość E lub W. Długość nie może przekraczać 180°."
  },
  {
    "id": "R02_COO_04",
    "section": "Odczytywanie współrzędnych",
    "type": "fill_in",
    "prompt": "W zapisie 55°N 5°W wartość 55°N oznacza __________, a wartość 5°W oznacza __________.",
    "options": null,
    "answer": [
      "szerokość geograficzną",
      "długość geograficzną"
    ],
    "altAnswers": [
      [
        "szerokość geograficzną",
        "szerokosc geograficzna",
        "szerokość"
      ],
      [
        "długość geograficzną",
        "dlugosc geograficzna",
        "długość"
      ]
    ],
    "explanation": "Pierwsza wartość jest szerokością geograficzną, a druga długością geograficzną."
  },
  {
    "id": "R02_COO_05",
    "section": "Odczytywanie współrzędnych",
    "type": "riddle",
    "prompt": "Litera oznaczająca półkulę północną w zapisie współrzędnych to...",
    "options": null,
    "answer": "N",
    "altAnswers": [
      "N",
      "n"
    ],
    "explanation": "W zapisie współrzędnych litera N oznacza półkulę północną."
  },
  {
    "id": "R02_COO_06",
    "section": "Odczytywanie współrzędnych",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: 30°N 90°W, 30°S 90°W, 30°N 90°E, 90°E 30°N.",
    "options": null,
    "answer": "90°E 30°N",
    "explanation": "Współrzędne zapisuje się w kolejności: najpierw szerokość, potem długość. Zapis 90°E 30°N ma odwróconą kolejność."
  },
  {
    "id": "R02_COO_07",
    "section": "Odczytywanie współrzędnych",
    "type": "scenario",
    "prompt": "Punkt ma zapis 30°S 90°E. Na których półkulach leży ten punkt?",
    "options": [
      "na południowej i wschodniej",
      "na północnej i zachodniej",
      "na północnej i wschodniej",
      "na południowej i zachodniej",
      "tylko na półkuli południowej",
      "tylko na półkuli wschodniej"
    ],
    "answer": 0,
    "image": "r02_siatka_kartograficzna.jpg",
    "explanation": "Litera S oznacza półkulę południową, a E oznacza półkulę wschodnią."
  },
  {
    "id": "R02_COO_08",
    "section": "Odczytywanie współrzędnych",
    "type": "match",
    "prompt": "Połącz literę z półkulą, którą oznacza w zapisie współrzędnych.",
    "options": null,
    "left": [
      "N",
      "S",
      "E",
      "W"
    ],
    "right": [
      "północna",
      "południowa",
      "wschodnia",
      "zachodnia"
    ],
    "answer": {
      "N": "północna",
      "S": "południowa",
      "E": "wschodnia",
      "W": "zachodnia"
    },
    "explanation": "N oznacza północ, S południe, E wschód, a W zachód."
  },
  {
    "id": "R02_COO_09",
    "section": "Odczytywanie współrzędnych",
    "type": "sort",
    "prompt": "Przyporządkuj współrzędne do półkul, na których leżą punkty.",
    "options": null,
    "items": [
      "30°N 90°W",
      "30°S 90°W",
      "30°N 90°E",
      "30°S 90°E"
    ],
    "categories": [
      "północna i zachodnia",
      "południowa i zachodnia",
      "północna i wschodnia",
      "południowa i wschodnia"
    ],
    "answer": {
      "północna i zachodnia": [
        "30°N 90°W"
      ],
      "południowa i zachodnia": [
        "30°S 90°W"
      ],
      "północna i wschodnia": [
        "30°N 90°E"
      ],
      "południowa i wschodnia": [
        "30°S 90°E"
      ]
    },
    "explanation": "Pierwsza litera wskazuje półkulę północną lub południową, a druga wschodnią lub zachodnią."
  },
  {
    "id": "R02_COO_10",
    "section": "Odczytywanie współrzędnych",
    "type": "true_false",
    "prompt": "Na równiku nie określamy półkuli północnej ani południowej przy szerokości geograficznej 0°.",
    "options": null,
    "answer": true,
    "explanation": "Szerokość geograficzna równika to 0°, dlatego nie dopisujemy przy niej N ani S."
  },
  {
    "id": "R02_GPS_01",
    "section": "Stopnie, minuty i GPS",
    "type": "single_choice",
    "prompt": "Ile minut ma jeden stopień w zapisie współrzędnych geograficznych?",
    "options": [
      "60",
      "10",
      "24",
      "100",
      "90",
      "180"
    ],
    "answer": 0,
    "explanation": "Jeden stopień dzieli się na 60 minut, podobnie jak jedna godzina składa się z 60 minut."
  },
  {
    "id": "R02_GPS_02",
    "section": "Stopnie, minuty i GPS",
    "type": "true_false",
    "prompt": "Współrzędne geograficzne można podawać z dokładnością do stopni i minut.",
    "options": null,
    "answer": true,
    "explanation": "Gdy potrzebna jest większa dokładność, obok stopni zapisuje się także minuty."
  },
  {
    "id": "R02_GPS_03",
    "section": "Stopnie, minuty i GPS",
    "type": "fill_in",
    "prompt": "Jeden stopień, czyli 1°, dzieli się na __________ minut.",
    "options": null,
    "answer": [
      "60"
    ],
    "altAnswers": [
      [
        "60",
        "sześćdziesiąt",
        "szescdziesiat"
      ]
    ],
    "explanation": "Jeden stopień dzieli się na 60 minut kątowych."
  },
  {
    "id": "R02_GPS_04",
    "section": "Stopnie, minuty i GPS",
    "type": "riddle",
    "prompt": "Najważniejszy system satelitarny używany do określania współrzędnych geograficznych to...",
    "options": null,
    "answer": "GPS",
    "altAnswers": [
      "GPS",
      "gps"
    ],
    "image": "r02_smartfon_gps.jpg",
    "explanation": "GPS tworzą satelity wysyłające sygnały radiowe odbierane przez urządzenia na Ziemi."
  },
  {
    "id": "R02_GPS_05",
    "section": "Stopnie, minuty i GPS",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne informacje o działaniu GPS.",
    "options": [
      "GPS korzysta ze sztucznych satelitów",
      "satelity wysyłają sygnały radiowe",
      "smartfony mogą wyświetlać współrzędne geograficzne",
      "GPS działa wyłącznie na papierowych mapach",
      "GPS służy do rysowania równoleżników na globusie",
      "w GPS nie występują współrzędne"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_smartfon_gps.jpg",
    "explanation": "GPS opiera się na satelitach i sygnałach radiowych, a współrzędne mogą być odczytywane na urządzeniach takich jak smartfony."
  },
  {
    "id": "R02_GPS_06",
    "section": "Stopnie, minuty i GPS",
    "type": "scenario",
    "prompt": "W aplikacji pojawia się pierwsza wartość dodatnia i druga wartość ujemna. Jak należy oznaczyć półkule przy takim zapisie?",
    "options": [
      "pierwszą jako N, drugą jako W",
      "pierwszą jako S, drugą jako E",
      "pierwszą jako W, drugą jako N",
      "obie jako N",
      "obie jako E",
      "nie dopisuje się żadnych liter"
    ],
    "answer": 0,
    "image": "r02_smartfon_gps.jpg",
    "explanation": "W GPS dodatnia pierwsza wartość oznacza N, ujemna pierwsza oznacza S, dodatnia druga oznacza E, a ujemna druga oznacza W."
  },
  {
    "id": "R02_GPS_07",
    "section": "Stopnie, minuty i GPS",
    "type": "match",
    "prompt": "Połącz zapis dziesiętny z właściwym oznaczeniem półkuli.",
    "options": null,
    "left": [
      "pierwsza wartość dodatnia",
      "pierwsza wartość ujemna",
      "druga wartość dodatnia",
      "druga wartość ujemna"
    ],
    "right": [
      "N",
      "S",
      "E",
      "W"
    ],
    "answer": {
      "pierwsza wartość dodatnia": "N",
      "pierwsza wartość ujemna": "S",
      "druga wartość dodatnia": "E",
      "druga wartość ujemna": "W"
    },
    "explanation": "Pierwsza wartość dotyczy szerokości, druga długości. Znaki dodatnie i ujemne wskazują odpowiednie półkule."
  },
  {
    "id": "R02_GPS_08",
    "section": "Stopnie, minuty i GPS",
    "type": "single_choice",
    "prompt": "Jakie są współrzędne Przylądka Rozewie?",
    "options": [
      "54°50'N 18°20'E",
      "54°20'N 18°50'E",
      "50°54'N 20°18'E",
      "18°20'N 54°50'E",
      "54°50'S 18°20'W",
      "55°N 5°W"
    ],
    "answer": 0,
    "image": "r02_przyladek_rozewie.jpg",
    "explanation": "Przylądek Rozewie ma współrzędne 54°50'N 18°20'E."
  },
  {
    "id": "R02_GPS_09",
    "section": "Stopnie, minuty i GPS",
    "type": "true_false",
    "prompt": "Wartości po kropce w zapisie z aplikacji GPS można przeliczyć na minuty, mnożąc je przez 60.",
    "options": null,
    "answer": true,
    "explanation": "Wartości po kropce należy przeliczyć na minuty przez pomnożenie przez 60."
  },
  {
    "id": "R02_GPS_10",
    "section": "Stopnie, minuty i GPS",
    "type": "sequence",
    "prompt": "Ułóż czynności przeliczania zapisu dziesiętnego z GPS na stopnie i minuty.",
    "options": null,
    "items": [
      "pomnóż część po kropce przez 60",
      "zapisz stopnie i minuty z literami półkul",
      "ustal znaki dodatnie lub ujemne",
      "odczytaj pełne stopnie przed kropką"
    ],
    "answer": [
      "ustal znaki dodatnie lub ujemne",
      "odczytaj pełne stopnie przed kropką",
      "pomnóż część po kropce przez 60",
      "zapisz stopnie i minuty z literami półkul"
    ],
    "explanation": "Najpierw trzeba rozpoznać półkule ze znaków, potem zachować pełne stopnie, przeliczyć część dziesiętną na minuty i zapisać wynik."
  },
  {
    "id": "R02_EXT_01",
    "section": "Rozciągłość geograficzna",
    "type": "single_choice",
    "prompt": "Na podstawie których punktów obszaru określa się rozciągłość południkową?",
    "options": [
      "najdalej na północ i najdalej na południe",
      "najdalej na zachód i najdalej na wschód",
      "najwyżej i najniżej położonych",
      "najbliżej równika i południka 0°",
      "najbliżej morza i najdalej od morza",
      "dowolnych dwóch punktów"
    ],
    "answer": 0,
    "image": "r02_skrajne_punkty_obszaru.jpg",
    "explanation": "Rozciągłość południkową określa się z szerokości geograficznych punktu skrajnie północnego i skrajnie południowego."
  },
  {
    "id": "R02_EXT_02",
    "section": "Rozciągłość geograficzna",
    "type": "single_choice",
    "prompt": "Na podstawie których punktów obszaru określa się rozciągłość równoleżnikową?",
    "options": [
      "najdalej na zachód i najdalej na wschód",
      "najdalej na północ i najdalej na południe",
      "najwyżej i najniżej położonych",
      "na równiku i na biegunie",
      "na południku 0° i 180°",
      "dwóch najbliższych punktów"
    ],
    "answer": 0,
    "image": "r02_skrajne_punkty_obszaru.jpg",
    "explanation": "Rozciągłość równoleżnikową ustala się na podstawie długości geograficznych punktów wysuniętych najdalej na zachód i wschód."
  },
  {
    "id": "R02_EXT_03",
    "section": "Rozciągłość geograficzna",
    "type": "true_false",
    "prompt": "Aby określić położenie rozległego obszaru, można podać współrzędne czterech punktów wysuniętych najdalej w każdą stronę świata.",
    "options": null,
    "answer": true,
    "explanation": "Państwa i kontynenty mają cztery skrajne punkty: północny, południowy, zachodni i wschodni."
  },
  {
    "id": "R02_EXT_04",
    "section": "Rozciągłość geograficzna",
    "type": "multi_select",
    "prompt": "Zaznacz punkty potrzebne do określenia rozciągłości równoleżnikowej obszaru.",
    "options": [
      "punkt wysunięty najdalej na zachód",
      "punkt wysunięty najdalej na wschód",
      "punkt wysunięty najdalej na północ",
      "punkt wysunięty najdalej na południe",
      "punkt o największej wysokości",
      "punkt na równiku"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r02_skrajne_punkty_obszaru.jpg",
    "explanation": "Rozciągłość równoleżnikowa dotyczy różnicy długości geograficznych między skrajnym zachodem i skrajnym wschodem obszaru."
  },
  {
    "id": "R02_EXT_05",
    "section": "Rozciągłość geograficzna",
    "type": "fill_in",
    "prompt": "Rozciągłość południkowa to różnica między __________ geograficzną punktu północnego i punktu południowego.",
    "options": null,
    "answer": [
      "szerokością"
    ],
    "altAnswers": [
      [
        "szerokością",
        "szerokoscia",
        "szerokością geograficzną",
        "szerokoscia geograficzna"
      ]
    ],
    "explanation": "Rozciągłość południkowa jest obliczana z szerokości geograficznych dwóch skrajnych punktów obszaru."
  },
  {
    "id": "R02_EXT_06",
    "section": "Rozciągłość geograficzna",
    "type": "fill_in",
    "prompt": "Rozciągłość równoleżnikowa to różnica między __________ geograficzną punktu zachodniego i punktu wschodniego.",
    "options": null,
    "answer": [
      "długością"
    ],
    "altAnswers": [
      [
        "długością",
        "dlugoscia",
        "długością geograficzną",
        "dlugoscia geograficzna"
      ]
    ],
    "explanation": "Rozciągłość równoleżnikowa jest obliczana z długości geograficznych skrajnego zachodniego i wschodniego punktu obszaru."
  },
  {
    "id": "R02_EXT_07",
    "section": "Rozciągłość geograficzna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: punkt północny, punkt południowy, punkt zachodni, najwyższy szczyt.",
    "options": null,
    "answer": "najwyższy szczyt",
    "explanation": "Przy określaniu położenia rozległego obszaru potrzebne są punkty skrajne w stronach świata. Najwyższy szczyt nie jest jedną z tych czterech stron."
  },
  {
    "id": "R02_EXT_08",
    "section": "Rozciągłość geograficzna",
    "type": "scenario",
    "prompt": "Badacz porównuje długości geograficzne punktu najbardziej zachodniego i najbardziej wschodniego pewnego państwa. Jaką rozciągłość chce określić?",
    "options": [
      "równoleżnikową",
      "południkową",
      "wysokościową",
      "biegunową",
      "południową",
      "północną"
    ],
    "answer": 0,
    "explanation": "Różnica między długościami geograficznymi skrajnego zachodu i wschodu to rozciągłość równoleżnikowa."
  },
  {
    "id": "R02_EXT_09",
    "section": "Rozciągłość geograficzna",
    "type": "sort",
    "prompt": "Przyporządkuj rodzaj rozciągłości do punktów, które są potrzebne do jej określenia.",
    "options": null,
    "items": [
      "północny i południowy",
      "zachodni i wschodni",
      "szerokość geograficzna",
      "długość geograficzna"
    ],
    "categories": [
      "rozciągłość południkowa",
      "rozciągłość równoleżnikowa"
    ],
    "answer": {
      "rozciągłość południkowa": [
        "północny i południowy",
        "szerokość geograficzna"
      ],
      "rozciągłość równoleżnikowa": [
        "zachodni i wschodni",
        "długość geograficzna"
      ]
    },
    "explanation": "Rozciągłość południkowa wynika z szerokości punktów północnego i południowego, a równoleżnikowa z długości punktów zachodniego i wschodniego."
  },
  {
    "id": "R02_EXT_10",
    "section": "Rozciągłość geograficzna",
    "type": "riddle",
    "prompt": "Różnica między długością geograficzną punktu zachodniego i wschodniego obszaru to rozciągłość...",
    "options": null,
    "answer": "równoleżnikowa",
    "altAnswers": [
      "równoleżnikowa",
      "rownoleznikowa",
      "rozciągłość równoleżnikowa",
      "rozciaglosc rownoleznikowa"
    ],
    "explanation": "Rozciągłość równoleżnikowa jest liczona wzdłuż kierunku zachód-wschód, czyli między długościami geograficznymi."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Miasto Hawana leży w połowie drogi między równoleżnikami 22° i 24°. Jaka jest jego przybliżona szerokość geograficzna?",
    "options": [
      "23°N",
      "22°N",
      "24°S",
      "28°N",
      "20°S",
      "30°N"
    ],
    "answer": 0,
    "explanation": "Hawana leży pośrodku między 22° i 24°, dlatego jej szerokość geograficzną określono w przybliżeniu jako 23°N."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Między równoleżnikami 20° i 30° jest 10° różnicy, a podziałka ma pięć pól. O ile stopni różnią się sąsiednie niepodpisane równoleżniki?",
    "options": [
      "2°",
      "4°",
      "5°",
      "10°",
      "20°",
      "1°"
    ],
    "answer": 0,
    "explanation": "10° podzielone na 5 pól daje 2°, więc kolejne niepodpisane równoleżniki różnią się o 2°."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na mapie świata południk 180° może być umieszczony dwa razy, na obu krawędziach mapy, choć na globusie jest to jeden południk.",
    "options": null,
    "answer": true,
    "explanation": "Na mapie świata południk 180° pojawia się na obu krawędziach, ale na globusie jest jeden i ten sam."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Bieguny mają tylko jedną współrzędną: __________ geograficzną.",
    "options": null,
    "answer": [
      "szerokość"
    ],
    "altAnswers": [
      [
        "szerokość",
        "szerokosc",
        "szerokość geograficzną",
        "szerokosc geograficzna"
      ]
    ],
    "explanation": "Na biegunach wszystkie południki się zbiegają, dlatego bieguny mają tylko szerokość geograficzną: 90°N lub 90°S."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Miejscowość na Hawajach położona na szerokości 22°N to...",
    "options": null,
    "answer": "Lihue",
    "altAnswers": [
      "Lihue",
      "lihue"
    ],
    "explanation": "Szerokość geograficzna miejscowości Lihue wynosi 22°N."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Miasto w Indonezji położone na długości 112°E to...",
    "options": null,
    "answer": "Kediri",
    "altAnswers": [
      "Kediri",
      "kediri"
    ],
    "explanation": "Kediri leży na długości geograficznej 112°E."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca leżące na półkuli zachodniej.",
    "options": [
      "Park Narodowy Grenlandii",
      "Hilo",
      "San José",
      "Kediri",
      "Dhaka",
      "Puerto Limón"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Zachodnią długość geograficzną oznacza litera W. Park Narodowy Grenlandii ma 30°W, Hilo 155°W, San José 84°W, a Puerto Limón około 83°W."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń widzi w aplikacji GPS zapis 54.679599, 18.385639. Części po kropce należy pomnożyć przez 60. Który zapis minutowy jest poprawny?",
    "options": [
      "54°41'N 18°23'E",
      "54°23'N 18°41'E",
      "54°50'N 18°20'E",
      "18°23'N 54°41'E",
      "54°41'S 18°23'W",
      "55°N 5°W"
    ],
    "answer": 0,
    "image": "r02_smartfon_gps.jpg",
    "explanation": "0.679599 daje około 41 minut, a 0.385639 około 23 minuty, więc otrzymujemy zapis 54°41'N 18°23'E."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz miejsce z właściwą współrzędną lub parą współrzędnych.",
    "options": null,
    "left": [
      "Tampa",
      "Hilo",
      "Przylądek Rozewie",
      "Puerto Limón"
    ],
    "right": [
      "28°N",
      "155°W",
      "54°50'N 18°20'E",
      "około 83°W"
    ],
    "answer": {
      "Tampa": "28°N",
      "Hilo": "155°W",
      "Przylądek Rozewie": "54°50'N 18°20'E",
      "Puerto Limón": "około 83°W"
    },
    "explanation": "Tampa ma 28°N, Hilo 155°W, Przylądek Rozewie 54°50'N 18°20'E, a Puerto Limón około 83°W."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: 0°, 90°N, 90°S, 180°E.",
    "options": null,
    "answer": "180°E",
    "explanation": "0°, 90°N i 90°S mogą opisywać szerokość geograficzną. 180°E odnosi się do długości geograficznej."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Punkt o współrzędnych 30°N 90°W leży na półkuli północnej i zachodniej.",
    "options": null,
    "answer": true,
    "explanation": "Litera N wskazuje półkulę północną, a W zachodnią."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zapis odpowiada biegunowi południowemu?",
    "options": [
      "90°S",
      "90°N",
      "0°",
      "180°E",
      "30°S 90°E",
      "0° 0°"
    ],
    "answer": 0,
    "explanation": "Szerokość geograficzna bieguna południowego to 90°S."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz dziedziny lub działania, w których wykorzystuje się precyzyjne określanie położenia.",
    "options": [
      "planowanie zagospodarowania przestrzennego",
      "transport",
      "wojskowość",
      "ochrona przyrody",
      "pieczenie chleba",
      "mieszanie farb"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Precyzyjne określanie położenia wykorzystuje się w planowaniu zagospodarowania przestrzennego, transporcie, wojskowości i ochronie przyrody."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy pracy z GPS w poprawnej kolejności.",
    "options": null,
    "items": [
      "odczytać współrzędne z białego pola",
      "stuknąć w mapę na ekranie",
      "otworzyć Google Maps",
      "zobaczyć pinezkę i współrzędne"
    ],
    "answer": [
      "otworzyć Google Maps",
      "stuknąć w mapę na ekranie",
      "zobaczyć pinezkę i współrzędne",
      "odczytać współrzędne z białego pola"
    ],
    "explanation": "Ćwiczenie prowadzi od otwarcia Google Maps przez stuknięcie w mapę, pojawienie się pinezki i współrzędnych, aż po ich odczytanie."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Współrzędne geograficzne",
  icon: "🌍",
  sectionOrder: [
    "Równoleżniki i szerokość geograficzna",
    "Południki i długość geograficzna",
    "Odczytywanie współrzędnych",
    "Stopnie, minuty i GPS",
    "Rozciągłość geograficzna"
  ],
  sectionIcons: {
    "Równoleżniki i szerokość geograficzna": "🌐",
    "Południki i długość geograficzna": "🧭",
    "Odczytywanie współrzędnych": "📍",
    "Stopnie, minuty i GPS": "🛰️",
    "Rozciągłość geograficzna": "↔️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
