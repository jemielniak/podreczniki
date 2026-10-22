// Skróty sekcji (do identyfikatorów ćwiczeń):
//   IWS = I wojna światowa i pokój wersalski
//   NIE = Odzyskanie niepodległości i granice Polski
//   IIR = II Rzeczpospolita
//   MID = Europa międzywojenna
//   IIS = II wojna światowa i okupacja Polski
//   OPO = Polski opór i powojenny podział Europy
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_IWS_01",
    "section": "I wojna światowa i pokój wersalski",
    "type": "single_choice",
    "prompt": "Jakie wydarzenie stało się bezpośrednią przyczyną wybuchu I wojny światowej?",
    "explanation": "28 czerwca 1914 roku serbski spiskowiec zabił w Sarajewie następcę tronu Austro-Węgier. Konflikt dyplomatyczny z Serbią doprowadził do wojny.",
    "options": [
      "Wybuch rewolucji w Niemczech",
      "Zamach na następcę tronu Austro-Węgier w Sarajewie",
      "Podpisanie traktatu wersalskiego",
      "Powstanie Ligi Narodów",
      "Zajęcie Austrii przez Niemcy",
      "Wprowadzenie złotego w Polsce"
    ],
    "answer": 1
  },
  {
    "id": "R06_IWS_02",
    "section": "I wojna światowa i pokój wersalski",
    "type": "multi_select",
    "prompt": "Zaznacz państwa należące przed I wojną światową do Trójporozumienia.",
    "explanation": "Trójporozumienie tworzyły Wielka Brytania, Francja i Rosja. Niemcy, Austro-Węgry oraz Włochy zawarły Trójprzymierze.",
    "options": [
      "Wielka Brytania",
      "Niemcy",
      "Francja",
      "Włochy",
      "Rosja",
      "Austro-Węgry"
    ],
    "answer": [
      0,
      2,
      4
    ]
  },
  {
    "id": "R06_IWS_03",
    "section": "I wojna światowa i pokój wersalski",
    "type": "true_false",
    "prompt": "Walki na froncie zachodnim podczas I wojny światowej często przybierały charakter wojny pozycyjnej.",
    "explanation": "Walczące armie przez długi czas pozostawały w systemach okopów, nie mogąc znacząco przesunąć linii frontu.",
    "options": null,
    "answer": true,
    "image": "r06_okopy_front_zachodni.jpg"
  },
  {
    "id": "R06_IWS_04",
    "section": "I wojna światowa i pokój wersalski",
    "type": "fill_in",
    "prompt": "I wojna światowa wybuchła w roku __________, a zawieszenie broni na froncie zachodnim podpisano w roku __________.",
    "explanation": "Wojna rozpoczęła się 28 lipca 1914 roku, a 11 listopada 1918 roku Niemcy podpisały zawieszenie broni.",
    "options": null,
    "answer": [
      "1914",
      "1918"
    ],
    "altAnswers": [
      [
        "1914",
        "1914 r."
      ],
      [
        "1918",
        "1918 r."
      ]
    ]
  },
  {
    "id": "R06_IWS_05",
    "section": "I wojna światowa i pokój wersalski",
    "type": "riddle",
    "prompt": "Jak nazywał się blok państw skupiony wokół Wielkiej Brytanii, Francji i Rosji w czasie I wojny światowej?",
    "explanation": "Trójporozumienie, czyli sojusz tych trzech mocarstw, określano w czasie wojny jako ententę.",
    "options": null,
    "answer": "ententa",
    "altAnswers": [
      "ententa",
      "Ententa",
      "trójporozumienie",
      "Trójporozumienie"
    ]
  },
  {
    "id": "R06_IWS_06",
    "section": "I wojna światowa i pokój wersalski",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do pierwotnego Trójprzymierza: Niemcy, Austro-Węgry, Włochy, Francja.",
    "explanation": "Trójprzymierze powstało z udziałem Niemiec, Austro-Węgier i Włoch. Francja należała do przeciwnego sojuszu.",
    "options": null,
    "answer": "Francja"
  },
  {
    "id": "R06_IWS_07",
    "section": "I wojna światowa i pokój wersalski",
    "type": "scenario",
    "prompt": "Jesteś żołnierzem na froncie zachodnim. Od miesięcy przebywasz w okopach, a linia frontu prawie się nie zmienia. Jaki sposób prowadzenia działań wojennych opisujesz?",
    "explanation": "Na froncie zachodnim system okopów i niewielkie zmiany położenia wojsk były cechami wojny pozycyjnej.",
    "options": [
      "Wojnę manewrową",
      "Wojnę pozycyjną",
      "Wojnę błyskawiczną",
      "Wyłącznie wojnę morską"
    ],
    "answer": 1,
    "image": "r06_okopy_front_zachodni.jpg"
  },
  {
    "id": "R06_IWS_08",
    "section": "I wojna światowa i pokój wersalski",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "explanation": "Zamach w Sarajewie poprzedził wybuch wojny, USA weszły do walk w 1917 roku, rozejm podpisano w 1918 roku, a traktat wersalski w 1919 roku.",
    "options": null,
    "answer": {
      "Zamach w Sarajewie": "28 czerwca 1914",
      "Przystąpienie USA do wojny": "1917",
      "Zawieszenie broni z Niemcami": "11 listopada 1918",
      "Traktat pokojowy z Niemcami w Wersalu": "1919"
    },
    "left": [
      "Zamach w Sarajewie",
      "Przystąpienie USA do wojny",
      "Zawieszenie broni z Niemcami",
      "Traktat pokojowy z Niemcami w Wersalu"
    ],
    "right": [
      "1919",
      "11 listopada 1918",
      "1917",
      "28 czerwca 1914"
    ]
  },
  {
    "id": "R06_IWS_09",
    "section": "I wojna światowa i pokój wersalski",
    "type": "sort",
    "prompt": "Przyporządkuj państwa do przedwojennych sojuszy.",
    "explanation": "Wielka Brytania, Francja i Rosja zawarły Trójporozumienie, a Niemcy, Austro-Węgry i Włochy należały do Trójprzymierza.",
    "options": null,
    "answer": {
      "Trójporozumienie": [
        "Wielka Brytania",
        "Francja",
        "Rosja"
      ],
      "Trójprzymierze": [
        "Niemcy",
        "Austro-Węgry",
        "Włochy"
      ]
    },
    "items": [
      "Wielka Brytania",
      "Rosja",
      "Austro-Węgry",
      "Francja",
      "Niemcy",
      "Włochy"
    ],
    "categories": [
      "Trójporozumienie",
      "Trójprzymierze"
    ]
  },
  {
    "id": "R06_IWS_10",
    "section": "I wojna światowa i pokój wersalski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z I wojną światową w kolejności chronologicznej.",
    "explanation": "Wydarzenia następowały kolejno w latach 1914, 1914, 1917, 1918 i 1919.",
    "options": null,
    "answer": [
      "Zamach w Sarajewie (czerwiec 1914)",
      "Wybuch I wojny światowej (lipiec 1914)",
      "Przystąpienie USA do wojny (1917)",
      "Zawieszenie broni z Niemcami (1918)",
      "Podpisanie traktatu wersalskiego (1919)"
    ],
    "items": [
      "Wybuch I wojny światowej (lipiec 1914)",
      "Zawieszenie broni z Niemcami (1918)",
      "Zamach w Sarajewie (czerwiec 1914)",
      "Przystąpienie USA do wojny (1917)",
      "Podpisanie traktatu wersalskiego (1919)"
    ]
  },
  {
    "id": "R06_NIE_01",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "single_choice",
    "prompt": "Kto stanął na czele odradzającego się państwa polskiego w listopadzie 1918 roku jako Naczelnik Państwa?",
    "explanation": "Józef Piłsudski jako Naczelnik Państwa organizował ogólnopaństwowe władze po odzyskaniu niepodległości.",
    "options": [
      "Roman Dmowski",
      "Józef Haller",
      "Józef Piłsudski",
      "Ignacy Paderewski",
      "Władysław Grabski",
      "Jędrzej Moraczewski"
    ],
    "answer": 2,
    "image": "r06_legiony_polskie.jpg"
  },
  {
    "id": "R06_NIE_02",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "multi_select",
    "prompt": "Które działania Polaków w czasie I wojny światowej były związane z dążeniem do niepodległości?",
    "explanation": "Józef Piłsudski inicjował tworzenie Legionów Polskich, Józef Haller współtworzył Błękitną Armię, a Dmowski i Paderewski zabiegali o poparcie dyplomatyczne.",
    "options": [
      "Tworzenie Legionów Polskich",
      "Utworzenie Błękitnej Armii we Francji",
      "Dyplomacja Romana Dmowskiego i Ignacego Paderewskiego",
      "Rozwiązywanie Ligi Narodów",
      "Podpisanie paktu stalowego"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R06_NIE_03",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "true_false",
    "prompt": "Odzyskanie niepodległości 11 listopada 1918 roku oznaczało, że wszystkie granice Polski były już ustalone.",
    "explanation": "Po listopadzie 1918 roku Polacy nadal walczyli o granice m.in. z bolszewikami oraz w powstaniu wielkopolskim i powstaniach śląskich.",
    "options": null,
    "answer": false
  },
  {
    "id": "R06_NIE_04",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "fill_in",
    "prompt": "Zwycięskie powstanie __________ w latach 1918-1919 umożliwiło przyłączenie Wielkopolski do Polski.",
    "explanation": "Sukces powstania wielkopolskiego wpłynął na przyznanie Polsce Wielkopolski w traktacie wersalskim.",
    "options": null,
    "answer": [
      "wielkopolskie"
    ],
    "altAnswers": [
      [
        "wielkopolskie",
        "wielkopolskie powstanie"
      ]
    ],
    "image": "r06_powstanie_wielkopolskie.jpg"
  },
  {
    "id": "R06_NIE_05",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "riddle",
    "prompt": "Jaką nazwę otrzymał Gdańsk, który po traktacie wersalskim nie został włączony bezpośrednio do Polski?",
    "explanation": "Gdańsk stał się Wolnym Miastem Gdańskiem pod zarządem Ligi Narodów; Polsce przyznano Pomorze Gdańskie bez miasta.",
    "options": null,
    "answer": "Wolne Miasto Gdańsk",
    "altAnswers": [
      "Wolne Miasto Gdańsk",
      "wolne miasto Gdańsk"
    ]
  },
  {
    "id": "R06_NIE_06",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący polską walką zbrojną o granice: powstanie wielkopolskie, powstania śląskie, wojna polsko-bolszewicka, traktat wersalski.",
    "explanation": "Traktat wersalski był porozumieniem pokojowym. Pozostałe wydarzenia stanowiły działania zbrojne związane z ustalaniem polskich granic.",
    "options": null,
    "answer": "traktat wersalski"
  },
  {
    "id": "R06_NIE_07",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "scenario",
    "prompt": "Mieszkańcy spornego regionu po I wojnie światowej mają w głosowaniu zdecydować, czy chcą znaleźć się w granicach Polski czy Niemiec. Jak nazywa się ta procedura?",
    "explanation": "O przynależności m.in. Śląska, Warmii i Powiśla decydowały plebiscyty, czyli głosowania mieszkańców.",
    "options": [
      "Plebiscyt",
      "Abdykacja",
      "Reparacja",
      "Mobilizacja"
    ],
    "answer": 0
  },
  {
    "id": "R06_NIE_08",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "match",
    "prompt": "Połącz wydarzenie związane z granicami Polski z jego skutkiem.",
    "explanation": "Granice Polski po 1918 roku kształtowano poprzez walkę, plebiscyty i decyzje traktatowe.",
    "options": null,
    "answer": {
      "Wojna polsko-bolszewicka": "Ustalenie granicy wschodniej",
      "Powstanie wielkopolskie": "Przyłączenie Wielkopolski",
      "Powstania śląskie": "Przyznanie Polsce części Śląska",
      "Traktat wersalski": "Przyznanie Pomorza Gdańskiego bez Gdańska"
    },
    "left": [
      "Wojna polsko-bolszewicka",
      "Powstanie wielkopolskie",
      "Powstania śląskie",
      "Traktat wersalski"
    ],
    "right": [
      "Przyznanie Pomorza Gdańskiego bez Gdańska",
      "Przyznanie Polsce części Śląska",
      "Przyłączenie Wielkopolski",
      "Ustalenie granicy wschodniej"
    ]
  },
  {
    "id": "R06_NIE_09",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "sort",
    "prompt": "Przyporządkuj działania do sposobu ustalania granic II Rzeczpospolitej.",
    "explanation": "Powstania i wojny były formami walki zbrojnej, plebiscyty były głosowaniami mieszkańców, a traktaty określały przynależność części ziem.",
    "options": null,
    "answer": {
      "Walka zbrojna": [
        "Powstanie wielkopolskie",
        "Wojna polsko-bolszewicka"
      ],
      "Plebiscyt": [
        "Głosowanie na Warmii i Powiślu",
        "Głosowanie na Śląsku"
      ],
      "Decyzja traktatowa": [
        "Przyznanie Pomorza Gdańskiego w Wersalu",
        "Odzyskanie Galicji na mocy traktatu z Austrią"
      ]
    },
    "items": [
      "Powstanie wielkopolskie",
      "Głosowanie na Warmii i Powiślu",
      "Przyznanie Pomorza Gdańskiego w Wersalu",
      "Wojna polsko-bolszewicka",
      "Głosowanie na Śląsku",
      "Odzyskanie Galicji na mocy traktatu z Austrią"
    ],
    "categories": [
      "Walka zbrojna",
      "Plebiscyt",
      "Decyzja traktatowa"
    ]
  },
  {
    "id": "R06_NIE_10",
    "section": "Odzyskanie niepodległości i granice Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z walki o niepodległość i granice w kolejności.",
    "explanation": "I Kompania Kadrowa wyruszyła w 1914 roku, niepodległość odzyskano w 1918 roku, a powstania śląskie miały miejsce kolejno w latach 1919, 1920 i 1921.",
    "options": null,
    "answer": [
      "Wymarsz I Kompanii Kadrowej (1914)",
      "Odzyskanie niepodległości (1918)",
      "Pierwsze powstanie śląskie (1919)",
      "Drugie powstanie śląskie (1920)",
      "Trzecie powstanie śląskie (1921)"
    ],
    "items": [
      "Odzyskanie niepodległości (1918)",
      "Drugie powstanie śląskie (1920)",
      "Wymarsz I Kompanii Kadrowej (1914)",
      "Pierwsze powstanie śląskie (1919)",
      "Trzecie powstanie śląskie (1921)"
    ]
  },
  {
    "id": "R06_IIR_01",
    "section": "II Rzeczpospolita",
    "type": "single_choice",
    "prompt": "Kto przeprowadził w 1924 roku reformę skarbową i walutową, wprowadzając złotego?",
    "explanation": "Władysław Grabski ograniczył wydatki państwa, usprawnił pobór podatków i wprowadził złotego w 1924 roku.",
    "options": [
      "Eugeniusz Kwiatkowski",
      "Jędrzej Moraczewski",
      "Józef Piłsudski",
      "Władysław Grabski",
      "Ignacy Paderewski",
      "Roman Dmowski"
    ],
    "answer": 3
  },
  {
    "id": "R06_IIR_02",
    "section": "II Rzeczpospolita",
    "type": "multi_select",
    "prompt": "Które rozwiązania wprowadzał pierwszy centralny rząd Jędrzeja Moraczewskiego?",
    "explanation": "Rząd Moraczewskiego wprowadzał powszechne prawa wyborcze, równość praw, ośmiogodzinny dzień pracy i ubezpieczenia społeczne.",
    "options": [
      "Powszechne prawo wyborcze",
      "Równe prawa obywateli niezależnie od płci",
      "Ośmiogodzinny dzień pracy",
      "Pozbawienie kobiet praw wyborczych",
      "Ubezpieczenia społeczne",
      "Likwidacja republiki"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ]
  },
  {
    "id": "R06_IIR_03",
    "section": "II Rzeczpospolita",
    "type": "true_false",
    "prompt": "Konstytucja marcowa z 1921 roku stwierdzała, że władza zwierzchnia w Polsce należy do narodu.",
    "explanation": "Artykuł 2 konstytucji marcowej ustanawiał zasadę zwierzchnictwa narodu.",
    "options": null,
    "answer": true,
    "image": "r06_konstytucja_dokument.jpg"
  },
  {
    "id": "R06_IIR_04",
    "section": "II Rzeczpospolita",
    "type": "fill_in",
    "prompt": "W 1935 roku uchwalono konstytucję __________, pod rządami której Polska zachowała republikę, ale przyjęła rządy __________.",
    "explanation": "Konstytucja kwietniowa ograniczała demokrację, skupiając władzę państwową w rękach prezydenta.",
    "options": null,
    "answer": [
      "kwietniową",
      "autorytarne"
    ],
    "altAnswers": [
      [
        "kwietniową",
        "kwietniowa"
      ],
      [
        "autorytarne",
        "autorytarne rządy"
      ]
    ]
  },
  {
    "id": "R06_IIR_05",
    "section": "II Rzeczpospolita",
    "type": "riddle",
    "prompt": "Jak nazywało się miasto, w którym II Rzeczpospolita wybudowała nowoczesny port handlowy?",
    "explanation": "Budowę portu w Gdyni uchwalono w 1922 roku, a od 1926 roku intensywnie rozwijano ją dzięki Eugeniuszowi Kwiatkowskiemu.",
    "options": null,
    "answer": "Gdynia",
    "altAnswers": [
      "Gdynia",
      "Gdyni"
    ],
    "image": "r06_port_gdynia.jpg"
  },
  {
    "id": "R06_IIR_06",
    "section": "II Rzeczpospolita",
    "type": "odd_one_out",
    "prompt": "Wskaż instytucję niewymienioną w konstytucji kwietniowej wśród organów podległych prezydentowi: Rząd, Sejm, Senat, Liga Narodów.",
    "explanation": "W przytoczonym artykule konstytucji kwietniowej prezydentowi podlegały m.in. Rząd, Sejm i Senat. Liga Narodów była organizacją międzynarodową.",
    "options": null,
    "answer": "Liga Narodów"
  },
  {
    "id": "R06_IIR_07",
    "section": "II Rzeczpospolita",
    "type": "scenario",
    "prompt": "W 1924 roku jesteś kupcem. Reforma walutowa zastępuje tracącą wartość markę polską nową walutą. Jaką?",
    "explanation": "Reforma Władysława Grabskiego z 1924 roku wprowadziła złotego jako nową polską walutę.",
    "options": [
      "Rublem",
      "Frankiem",
      "Złotym",
      "Marką niemiecką"
    ],
    "answer": 2
  },
  {
    "id": "R06_IIR_08",
    "section": "II Rzeczpospolita",
    "type": "match",
    "prompt": "Połącz wydarzenie w II Rzeczpospolitej z rokiem.",
    "explanation": "Konstytucję marcową uchwalono w 1921 roku, port w Gdyni zaplanowano w 1922 roku, reformę Grabskiego przeprowadzono w 1924 roku, a konstytucję kwietniową przyjęto w 1935 roku.",
    "options": null,
    "answer": {
      "Konstytucja marcowa": "1921",
      "Uchwała o budowie portu w Gdyni": "1922",
      "Reforma walutowa Grabskiego": "1924",
      "Konstytucja kwietniowa": "1935"
    },
    "left": [
      "Konstytucja marcowa",
      "Uchwała o budowie portu w Gdyni",
      "Reforma walutowa Grabskiego",
      "Konstytucja kwietniowa"
    ],
    "right": [
      "1935",
      "1924",
      "1922",
      "1921"
    ]
  },
  {
    "id": "R06_IIR_09",
    "section": "II Rzeczpospolita",
    "type": "sort",
    "prompt": "Przyporządkuj działania władz II Rzeczpospolitej do dziedziny.",
    "explanation": "Władze odradzającej się Polski reformowały prawa obywateli, walutę i gospodarkę oraz zasady sprawowania władzy.",
    "options": null,
    "answer": {
      "Prawa obywatelskie": [
        "Przyznanie kobietom prawa wyborczego",
        "Wprowadzenie równości praw obywateli"
      ],
      "Gospodarka": [
        "Wprowadzenie złotego",
        "Budowa portu w Gdyni"
      ],
      "Ustrój państwa": [
        "Uchwalenie konstytucji marcowej",
        "Uchwalenie konstytucji kwietniowej"
      ]
    },
    "items": [
      "Przyznanie kobietom prawa wyborczego",
      "Wprowadzenie złotego",
      "Uchwalenie konstytucji marcowej",
      "Wprowadzenie równości praw obywateli",
      "Budowa portu w Gdyni",
      "Uchwalenie konstytucji kwietniowej"
    ],
    "categories": [
      "Prawa obywatelskie",
      "Gospodarka",
      "Ustrój państwa"
    ]
  },
  {
    "id": "R06_IIR_10",
    "section": "II Rzeczpospolita",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące II Rzeczpospolitej w porządku chronologicznym.",
    "explanation": "Po utworzeniu pierwszego rządu centralnego nastąpiły reformy ustrojowe i gospodarcze w latach 1921, 1922, 1924 i 1935.",
    "options": null,
    "answer": [
      "Powstanie rządu Moraczewskiego (1918)",
      "Konstytucja marcowa (1921)",
      "Uchwała o budowie portu w Gdyni (1922)",
      "Reforma walutowa Grabskiego (1924)",
      "Konstytucja kwietniowa (1935)"
    ],
    "items": [
      "Konstytucja marcowa (1921)",
      "Reforma walutowa Grabskiego (1924)",
      "Powstanie rządu Moraczewskiego (1918)",
      "Uchwała o budowie portu w Gdyni (1922)",
      "Konstytucja kwietniowa (1935)"
    ]
  },
  {
    "id": "R06_MID_01",
    "section": "Europa międzywojenna",
    "type": "single_choice",
    "prompt": "Które dwa państwa podpisały w 1936 roku pakt antykominternowski?",
    "explanation": "W 1936 roku Niemcy i Japonia podpisały pakt antykominternowski skierowany przeciw wpływom komunistycznym i ZSRR; Włochy dołączyły w 1937 roku.",
    "options": [
      "Niemcy i Japonia",
      "Wielka Brytania i Francja",
      "Polska i Rumunia",
      "Niemcy i ZSRR",
      "Włochy i ZSRR",
      "Francja i USA"
    ],
    "answer": 0
  },
  {
    "id": "R06_MID_02",
    "section": "Europa międzywojenna",
    "type": "multi_select",
    "prompt": "Które działania świadczyły o ekspansji Niemiec przed 1 września 1939 roku?",
    "explanation": "III Rzesza obsadziła Nadrenię w 1936 roku, przyłączyła Austrię w 1938 roku, a następnie podporządkowała Czechosłowację.",
    "options": [
      "Wprowadzenie wojsk do Nadrenii",
      "Przyłączenie Austrii do Rzeszy",
      "Przejęcie kontroli nad Czechosłowacją",
      "Podpisanie kapitulacji Niemiec",
      "Utworzenie NATO"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r06_ekspansja_niemiec_mapa.jpg"
  },
  {
    "id": "R06_MID_03",
    "section": "Europa międzywojenna",
    "type": "true_false",
    "prompt": "Liga Narodów potrafiła skutecznie rozwiązać wszystkie konflikty w okresie międzywojennym.",
    "explanation": "Liga Narodów nie miała skutecznych środków zapobiegania konfliktom i nie utrzymała pokoju w Europie.",
    "options": null,
    "answer": false
  },
  {
    "id": "R06_MID_04",
    "section": "Europa międzywojenna",
    "type": "fill_in",
    "prompt": "W latach 30. przywódcą faszystowskich Włoch był Benito __________, a nazistowskich Niemiec Adolf __________.",
    "explanation": "Benito Mussolini i Adolf Hitler głosili ekspansję terytorialną, podważając ład wersalski.",
    "options": null,
    "answer": [
      "Mussolini",
      "Hitler"
    ],
    "altAnswers": [
      [
        "Mussolini",
        "Benito Mussolini"
      ],
      [
        "Hitler",
        "Adolf Hitler"
      ]
    ]
  },
  {
    "id": "R06_MID_05",
    "section": "Europa międzywojenna",
    "type": "riddle",
    "prompt": "Jak nazywał się sojusz polityczno-wojskowy zawarty przez Niemcy i Włochy w maju 1939 roku?",
    "explanation": "W maju 1939 roku Niemcy i Włochy zawarły w Berlinie sojusz polityczno-wojskowy określany jako pakt stalowy.",
    "options": null,
    "answer": "pakt stalowy",
    "altAnswers": [
      "pakt stalowy",
      "Pakt stalowy"
    ]
  },
  {
    "id": "R06_MID_06",
    "section": "Europa międzywojenna",
    "type": "odd_one_out",
    "prompt": "Które państwo nie należało do osi Rzym-Berlin-Tokio: Japonia, Niemcy, Włochy, Wielka Brytania.",
    "explanation": "Oś Rzym-Berlin-Tokio łączyła interesy Niemiec, Włoch i Japonii. Wielka Brytania przeciwstawiała się niemieckiej ekspansji.",
    "options": null,
    "answer": "Wielka Brytania"
  },
  {
    "id": "R06_MID_07",
    "section": "Europa międzywojenna",
    "type": "scenario",
    "prompt": "Wrzesień 1938 roku. Przywódcy Niemiec, Włoch, Francji i Wielkiej Brytanii rozmawiają o przejęciu przez Niemcy terenów Czechosłowacji zamieszkałych przez ludność niemiecką. Gdzie odbywają się te rozmowy?",
    "explanation": "Konferencja monachijska odbyła się we wrześniu 1938 roku. Zachodnie mocarstwa nie przeciwstawiły się zdecydowanie żądaniom Hitlera.",
    "options": [
      "W Poczdamie",
      "W Jałcie",
      "W Teheranie",
      "W Monachium"
    ],
    "answer": 3,
    "image": "r06_konferencja_monachijska.jpg"
  },
  {
    "id": "R06_MID_08",
    "section": "Europa międzywojenna",
    "type": "match",
    "prompt": "Połącz działanie ekspansywne z rokiem.",
    "explanation": "Włosi zajęli Etiopię w 1935 roku i Albanię w 1939 roku, a Niemcy obsadzili Nadrenię w 1936 roku i przyłączyli Austrię w 1938 roku.",
    "options": null,
    "answer": {
      "Zajęcie Etiopii przez Włochy": "1935",
      "Obsadzenie Nadrenii wojskiem niemieckim": "1936",
      "Przyłączenie Austrii do III Rzeszy": "1938",
      "Zajęcie Albanii przez Włochy": "1939"
    },
    "left": [
      "Zajęcie Etiopii przez Włochy",
      "Obsadzenie Nadrenii wojskiem niemieckim",
      "Przyłączenie Austrii do III Rzeszy",
      "Zajęcie Albanii przez Włochy"
    ],
    "right": [
      "1939",
      "1938",
      "1936",
      "1935"
    ]
  },
  {
    "id": "R06_MID_09",
    "section": "Europa międzywojenna",
    "type": "sort",
    "prompt": "Przyporządkuj ekspansję przed II wojną światową do państwa.",
    "explanation": "Hitler realizował ekspansję w Europie Środkowej, a Mussolini prowadził podboje m.in. w Afryce i Albanii.",
    "options": null,
    "answer": {
      "Niemcy": [
        "Wprowadzenie wojsk do Nadrenii",
        "Anschluss Austrii",
        "Zajęcie ziem czeskich"
      ],
      "Włochy": [
        "Zajęcie Etiopii",
        "Zajęcie Albanii"
      ]
    },
    "items": [
      "Wprowadzenie wojsk do Nadrenii",
      "Zajęcie ziem czeskich",
      "Zajęcie Albanii",
      "Anschluss Austrii",
      "Zajęcie Etiopii"
    ],
    "categories": [
      "Niemcy",
      "Włochy"
    ]
  },
  {
    "id": "R06_MID_10",
    "section": "Europa międzywojenna",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do II wojny światowej w kolejności.",
    "explanation": "Kolejne ustępstwa wobec agresywnej polityki III Rzeszy i Włoch poprzedziły układ niemiecko-radziecki z sierpnia 1939 roku.",
    "options": null,
    "answer": [
      "Zajęcie Etiopii przez Włochy (1935)",
      "Obsadzenie Nadrenii przez Niemcy (1936)",
      "Anschluss Austrii (marzec 1938)",
      "Konferencja monachijska (wrzesień 1938)",
      "Pakt Ribbentrop-Mołotow (sierpień 1939)"
    ],
    "items": [
      "Obsadzenie Nadrenii przez Niemcy (1936)",
      "Konferencja monachijska (wrzesień 1938)",
      "Zajęcie Etiopii przez Włochy (1935)",
      "Anschluss Austrii (marzec 1938)",
      "Pakt Ribbentrop-Mołotow (sierpień 1939)"
    ]
  },
  {
    "id": "R06_IIS_01",
    "section": "II wojna światowa i okupacja Polski",
    "type": "single_choice",
    "prompt": "Kiedy III Rzesza rozpoczęła atak na Polskę, co uznaje się za początek II wojny światowej?",
    "explanation": "1 września 1939 roku Niemcy napadły na Polskę bez wypowiedzenia wojny. 17 września Polskę zaatakował również ZSRR.",
    "options": [
      "17 września 1939 roku",
      "1 września 1939 roku",
      "28 czerwca 1914 roku",
      "8 maja 1945 roku",
      "23 sierpnia 1939 roku",
      "2 września 1945 roku"
    ],
    "answer": 1,
    "image": "r06_wojna_obrona_polski.jpg"
  },
  {
    "id": "R06_IIS_02",
    "section": "II wojna światowa i okupacja Polski",
    "type": "multi_select",
    "prompt": "Które państwa należały do koalicji antyhitlerowskiej?",
    "explanation": "Wielka Brytania, USA i ZSRR znalazły się w koalicji walczącej przeciw III Rzeszy i jej sojusznikom.",
    "options": [
      "Wielka Brytania",
      "Stany Zjednoczone",
      "III Rzesza",
      "Związek Radziecki",
      "Japonia",
      "Włochy Mussoliniego"
    ],
    "answer": [
      0,
      1,
      3
    ]
  },
  {
    "id": "R06_IIS_03",
    "section": "II wojna światowa i okupacja Polski",
    "type": "true_false",
    "prompt": "Związek Radziecki zaatakował Polskę 17 września 1939 roku.",
    "explanation": "Atak ZSRR zmusił Polskę do walki na dwa fronty i przyczynił się do klęski w kampanii 1939 roku.",
    "options": null,
    "answer": true
  },
  {
    "id": "R06_IIS_04",
    "section": "II wojna światowa i okupacja Polski",
    "type": "fill_in",
    "prompt": "W Europie II wojna światowa zakończyła się bezwarunkową kapitulacją __________ w maju 1945 roku, a we wrześniu skapitulowała __________.",
    "explanation": "Niemcy skapitulowały 8 maja 1945 roku, a Japonia 2 września 1945 roku.",
    "options": null,
    "answer": [
      "Niemiec",
      "Japonia"
    ],
    "altAnswers": [
      [
        "Niemiec",
        "III Rzeszy",
        "Niemcy"
      ],
      [
        "Japonia",
        "Japonii"
      ]
    ]
  },
  {
    "id": "R06_IIS_05",
    "section": "II wojna światowa i okupacja Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się masowa zagłada ludności żydowskiej dokonana przez Niemcy podczas II wojny światowej?",
    "explanation": "W okupowanej Europie Niemcy tworzyli getta i obozy zagłady, prowadząc systematyczną eksterminację Żydów.",
    "options": null,
    "answer": "Holokaust",
    "altAnswers": [
      "Holokaust",
      "holokaust",
      "Holocaust"
    ]
  },
  {
    "id": "R06_IIS_06",
    "section": "II wojna światowa i okupacja Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo nienależące do koalicji antyhitlerowskiej: Wielka Brytania, Stany Zjednoczone, Związek Radziecki, III Rzesza.",
    "explanation": "III Rzesza była głównym przeciwnikiem aliantów, do których należały Wielka Brytania, USA i Związek Radziecki.",
    "options": null,
    "answer": "III Rzesza"
  },
  {
    "id": "R06_IIS_07",
    "section": "II wojna światowa i okupacja Polski",
    "type": "scenario",
    "prompt": "Jest rok 1944. Wojska alianckie po opanowaniu Normandii rozpoczynają walki w północnej Francji. Na którym froncie walczą?",
    "explanation": "Po opanowaniu Normandii alianci rozpoczęli w 1944 roku ofensywę na froncie zachodnim w Europie.",
    "options": [
      "Na froncie zachodnim",
      "Na froncie wschodnim",
      "Na froncie afrykańskim",
      "Wyłącznie na Pacyfiku"
    ],
    "answer": 0,
    "image": "r06_desant_normandia.jpg"
  },
  {
    "id": "R06_IIS_08",
    "section": "II wojna światowa i okupacja Polski",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "explanation": "Wojna rozpoczęła się napaścią Niemiec i ZSRR na Polskę w 1939 roku; USA przystąpiły do niej w 1941 roku, a Niemcy skapitulowały w maju 1945 roku.",
    "options": null,
    "answer": {
      "Atak III Rzeszy na Polskę": "1 września 1939",
      "Atak ZSRR na Polskę": "17 września 1939",
      "Przystąpienie USA do II wojny światowej": "1941",
      "Kapitulacja Niemiec": "8 maja 1945"
    },
    "left": [
      "Atak III Rzeszy na Polskę",
      "Atak ZSRR na Polskę",
      "Przystąpienie USA do II wojny światowej",
      "Kapitulacja Niemiec"
    ],
    "right": [
      "8 maja 1945",
      "1941",
      "17 września 1939",
      "1 września 1939"
    ]
  },
  {
    "id": "R06_IIS_09",
    "section": "II wojna światowa i okupacja Polski",
    "type": "sort",
    "prompt": "Przyporządkuj działania podczas okupacji Polski do odpowiedniego okupanta.",
    "explanation": "Na okupowanych terenach Niemcy prowadzili terror i zagładę Żydów, a Sowieci narzucali komunizm, odbierali własność i deportowali ludzi do łagrów.",
    "options": null,
    "answer": {
      "Okupant niemiecki": [
        "Utworzenie Generalnego Gubernatorstwa",
        "Przesiedlanie Żydów do gett",
        "Prowadzenie obozów zagłady"
      ],
      "Okupant sowiecki": [
        "Wprowadzanie ustroju komunistycznego",
        "Zsyłanie Polaków do łagrów",
        "Odbieranie mieszkańcom własności na zajętych terenach"
      ]
    },
    "items": [
      "Utworzenie Generalnego Gubernatorstwa",
      "Prowadzenie obozów zagłady",
      "Zsyłanie Polaków do łagrów",
      "Przesiedlanie Żydów do gett",
      "Wprowadzanie ustroju komunistycznego",
      "Odbieranie mieszkańcom własności na zajętych terenach"
    ],
    "categories": [
      "Okupant niemiecki",
      "Okupant sowiecki"
    ]
  },
  {
    "id": "R06_IIS_10",
    "section": "II wojna światowa i okupacja Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia II wojny światowej w porządku chronologicznym.",
    "explanation": "Wojna w Europie zaczęła się w 1939 roku, a zakończyła w maju 1945 roku. Na Dalekim Wschodzie walki trwały do września 1945 roku.",
    "options": null,
    "answer": [
      "Atak Niemiec na Polskę (1 września 1939)",
      "Atak ZSRR na Polskę (17 września 1939)",
      "Atak Niemiec na ZSRR (1941)",
      "Lądowanie aliantów w Normandii (1944)",
      "Kapitulacja Niemiec (maj 1945)",
      "Kapitulacja Japonii (wrzesień 1945)"
    ],
    "items": [
      "Atak ZSRR na Polskę (17 września 1939)",
      "Lądowanie aliantów w Normandii (1944)",
      "Kapitulacja Japonii (wrzesień 1945)",
      "Atak Niemiec na Polskę (1 września 1939)",
      "Atak Niemiec na ZSRR (1941)",
      "Kapitulacja Niemiec (maj 1945)"
    ]
  },
  {
    "id": "R06_OPO_01",
    "section": "Polski opór i powojenny podział Europy",
    "type": "single_choice",
    "prompt": "Kto został naczelnym wodzem polskich sił zbrojnych przy władzach na uchodźstwie we Francji?",
    "explanation": "We wrześniu 1939 roku powstały polskie władze na uchodźstwie. Prezydentem był Władysław Raczkiewicz, a naczelnym wodzem generał Władysław Sikorski.",
    "options": [
      "Władysław Sikorski",
      "Władysław Raczkiewicz",
      "Józef Haller",
      "Władysław Grabski",
      "Józef Piłsudski",
      "Eugeniusz Kwiatkowski"
    ],
    "answer": 0
  },
  {
    "id": "R06_OPO_02",
    "section": "Polski opór i powojenny podział Europy",
    "type": "multi_select",
    "prompt": "Jakie działania były formami cywilnego oporu w Polskim Państwie Podziemnym?",
    "explanation": "Podziemna prasa, tajne komplety oraz mały sabotaż pozwalały podtrzymywać polską tożsamość podczas okupacji.",
    "options": [
      "Wydawanie prasy podziemnej",
      "Prowadzenie tajnego nauczania",
      "Malowanie patriotycznych haseł na murach",
      "Budowa hitlerowskich obozów koncentracyjnych",
      "Zrywanie niemieckich plakatów propagandowych"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "image": "r06_tajne_nauczanie.jpg"
  },
  {
    "id": "R06_OPO_03",
    "section": "Polski opór i powojenny podział Europy",
    "type": "true_false",
    "prompt": "Powstanie warszawskie w 1944 roku trwało 63 dni.",
    "explanation": "Żołnierze Armii Krajowej walczyli z Niemcami przez 63 dni. Po upadku powstania okupanci wypędzili mieszkańców i zniszczyli znaczną część miasta.",
    "options": null,
    "answer": true
  },
  {
    "id": "R06_OPO_04",
    "section": "Polski opór i powojenny podział Europy",
    "type": "fill_in",
    "prompt": "Konspiracyjna __________ powstała w 1942 roku. Po klęsce Francji polskie władze na uchodźstwie przeniosły się do __________.",
    "explanation": "Armia Krajowa została utworzona w 1942 roku, a polskie władze na uchodźstwie działały w Londynie od 1940 roku.",
    "options": null,
    "answer": [
      "Armia Krajowa",
      "Londynu"
    ],
    "altAnswers": [
      [
        "Armia Krajowa",
        "Armia Krajowa (AK)",
        "AK"
      ],
      [
        "Londynu",
        "Londyn"
      ]
    ]
  },
  {
    "id": "R06_OPO_05",
    "section": "Polski opór i powojenny podział Europy",
    "type": "riddle",
    "prompt": "Jak określano narastającą po II wojnie światowej rywalizację bloku socjalistycznego i demokratycznego?",
    "explanation": "Zimna wojna polegała na długotrwałej rywalizacji politycznej i militarnej, w tym wyścigu zbrojeń, między dwoma blokami.",
    "options": null,
    "answer": "zimna wojna",
    "altAnswers": [
      "zimna wojna",
      "Zimna wojna"
    ]
  },
  {
    "id": "R06_OPO_06",
    "section": "Polski opór i powojenny podział Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, którego nie zaliczano do Wielkiej Trójki podczas II wojny światowej: Stany Zjednoczone, Wielka Brytania, Związek Radziecki, Francja.",
    "explanation": "Wielką Trójkę stanowiły Stany Zjednoczone, Wielka Brytania i Związek Radziecki; ich przywódcy uzgadniali m.in. zasady powojennego ładu.",
    "options": null,
    "answer": "Francja"
  },
  {
    "id": "R06_OPO_07",
    "section": "Polski opór i powojenny podział Europy",
    "type": "scenario",
    "prompt": "Jesteś harcerzem Szarych Szeregów podczas okupacji. Nocą malujesz na ścianie znak Polski Walczącej i zdejmujesz niemiecki plakat propagandowy. Do jakiej formy oporu należą te działania?",
    "explanation": "Malowanie patriotycznych znaków i usuwanie okupacyjnych plakatów zaliczano do małego sabotażu prowadzonego m.in. przez Szare Szeregi.",
    "options": [
      "Do reformy walutowej",
      "Do małego sabotażu",
      "Do rokowań pokojowych",
      "Do powszechnego głosowania"
    ],
    "answer": 1,
    "image": "r06_polska_walczaca_mur.jpg"
  },
  {
    "id": "R06_OPO_08",
    "section": "Polski opór i powojenny podział Europy",
    "type": "match",
    "prompt": "Połącz polską organizację lub instytucję z opisem jej roli w czasie II wojny światowej.",
    "explanation": "Władze emigracyjne współdziałały z polską konspiracją w kraju, w tym Armią Krajową i młodzieżą Szarych Szeregów.",
    "options": null,
    "answer": {
      "Szare Szeregi": "Konspiracyjne harcerstwo",
      "Armia Krajowa": "Konspiracyjna organizacja zbrojna",
      "Polskie Państwo Podziemne": "Tajne władze cywilne i wojskowe w kraju",
      "Władze polskie na uchodźstwie": "Polski ośrodek władzy poza okupowanym krajem"
    },
    "left": [
      "Szare Szeregi",
      "Armia Krajowa",
      "Polskie Państwo Podziemne",
      "Władze polskie na uchodźstwie"
    ],
    "right": [
      "Polski ośrodek władzy poza okupowanym krajem",
      "Tajne władze cywilne i wojskowe w kraju",
      "Konspiracyjna organizacja zbrojna",
      "Konspiracyjne harcerstwo"
    ]
  },
  {
    "id": "R06_OPO_09",
    "section": "Polski opór i powojenny podział Europy",
    "type": "sort",
    "prompt": "Przyporządkuj państwa i organizacje do powojennych bloków politycznych.",
    "explanation": "Polska weszła do bloku państw socjalistycznych zdominowanego przez ZSRR, a USA i Wielka Brytania należały do bloku demokratycznego z NATO.",
    "options": null,
    "answer": {
      "Blok socjalistyczny": [
        "Polska po II wojnie światowej",
        "Związek Radziecki",
        "Układ Warszawski"
      ],
      "Blok demokratyczny": [
        "Stany Zjednoczone",
        "Wielka Brytania",
        "NATO"
      ]
    },
    "items": [
      "Polska po II wojnie światowej",
      "Układ Warszawski",
      "Wielka Brytania",
      "Związek Radziecki",
      "Stany Zjednoczone",
      "NATO"
    ],
    "categories": [
      "Blok socjalistyczny",
      "Blok demokratyczny"
    ],
    "image": "r06_europa_dwa_bloki.jpg"
  },
  {
    "id": "R06_OPO_10",
    "section": "Polski opór i powojenny podział Europy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Polską w czasie i po II wojnie światowej.",
    "explanation": "Polskie władze emigracyjne i podziemne działały podczas wojny, a w okresie powojennym Polska znalazła się w bloku socjalistycznym.",
    "options": null,
    "answer": [
      "Utworzenie władz polskich na uchodźstwie (1939)",
      "Przeniesienie władz na uchodźstwie do Londynu (1940)",
      "Powstanie Armii Krajowej (1942)",
      "Powstanie warszawskie (1944)",
      "Utworzenie Układu Warszawskiego (1955)"
    ],
    "items": [
      "Przeniesienie władz na uchodźstwie do Londynu (1940)",
      "Powstanie warszawskie (1944)",
      "Utworzenie władz polskich na uchodźstwie (1939)",
      "Powstanie Armii Krajowej (1942)",
      "Utworzenie Układu Warszawskiego (1955)"
    ]
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Komu, według konstytucji kwietniowej, prezydent Rzeczypospolitej odpowiadał za losy państwa?",
    "explanation": "Artykuł 2 konstytucji kwietniowej określał odpowiedzialność prezydenta wobec Boga i historii.",
    "options": [
      "Sejmowi i Senatowi",
      "Sądowi Najwyższemu",
      "Bogu i historii",
      "Lidze Narodów",
      "Premierowi",
      "Wszystkim ministrom"
    ],
    "answer": 2,
    "image": "r06_konstytucja_dokument.jpg"
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek mieszkańców II Rzeczypospolitej w 1931 roku stanowili Białorusini?",
    "explanation": "W 1931 roku Białorusini stanowili 5% ludności II RP, Polacy 69%, Ukraińcy 14%, Żydzi 9%, Niemcy 2%, a inne grupy 1%.",
    "options": [
      "2%",
      "5%",
      "9%",
      "14%",
      "31%",
      "69%"
    ],
    "answer": 1
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz ograniczenia nałożone na Niemcy traktatem wersalskim.",
    "explanation": "Traktat wersalski ograniczył armię i zbrojenia Niemiec, ustanowił demilitaryzację Nadrenii oraz nakazał wypłatę reparacji i oddanie kolonii.",
    "options": [
      "Ograniczenie armii do 100 tysięcy żołnierzy",
      "Zakaz posiadania lotnictwa wojskowego",
      "Zakaz posiadania okrętów podwodnych",
      "Nakaz oddania wszystkich ziem Francji",
      "Zakaz utrzymywania wojsk w Nadrenii",
      "Obowiązek wypłacenia odszkodowań wojennych"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ]
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które rzeki wskazano w tajnym protokole paktu Ribbentrop-Mołotow jako przybliżoną linię podziału Polski?",
    "explanation": "Tajny protokół wskazywał w przybliżeniu linię rzek Narew, Wisła i San jako granicę stref interesów Niemiec i ZSRR.",
    "options": [
      "Narew",
      "Odra",
      "Wisła",
      "San",
      "Dunaj",
      "Warta"
    ],
    "answer": [
      0,
      2,
      3
    ]
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Niemcy wprowadziły wojska do Nadrenii w roku __________, a Austrię przyłączyły do Rzeszy w roku __________.",
    "explanation": "Zajęcie zdemilitaryzowanej Nadrenii nastąpiło w 1936 roku, a Anschluss Austrii w 1938 roku.",
    "options": null,
    "answer": [
      "1936",
      "1938"
    ],
    "altAnswers": [
      [
        "1936",
        "1936 r."
      ],
      [
        "1938",
        "1938 r."
      ]
    ],
    "image": "r06_ekspansja_niemiec_mapa.jpg"
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Zgodnie z konstytucją marcową władzę ustawodawczą w Polsce sprawowały __________ i __________.",
    "explanation": "Konstytucja marcowa z 1921 roku wymieniała Sejm i Senat jako organy władzy ustawodawczej.",
    "options": null,
    "answer": [
      "Sejm",
      "Senat"
    ],
    "altAnswers": [
      [
        "Sejm",
        "sejm"
      ],
      [
        "Senat",
        "senat"
      ]
    ]
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Delegat na konferencji pokojowej w 1919 roku analizuje postanowienia traktatu wersalskiego. Do jakiej maksymalnej liczebności ograniczono armię niemiecką?",
    "explanation": "Traktat wersalski ograniczył armię niemiecką do 100 tysięcy żołnierzy, zakazując też powszechnej służby wojskowej.",
    "options": [
      "50 tysięcy żołnierzy",
      "100 tysięcy żołnierzy",
      "200 tysięcy żołnierzy",
      "500 tysięcy żołnierzy"
    ],
    "answer": 1,
    "image": "r06_traktat_wersalski_sala.jpg"
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Członek Polskiego Państwa Podziemnego planuje przerwać niemiecki transport wojskowy i zniszczyć magazyn amunicji. Jak nazywa się taki rodzaj działań?",
    "explanation": "Niszczenie transportów wojskowych, magazynów broni i amunicji było dywersją prowadzoną przez konspirację.",
    "options": [
      "Tajne nauczanie",
      "Reforma skarbowa",
      "Dywersja",
      "Plebiscyt"
    ],
    "answer": 2
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz osobę z jej działaniem na rzecz niepodległości lub odbudowy Polski.",
    "explanation": "Piłsudski i Haller tworzyli polskie formacje wojskowe, a Grabski i Kwiatkowski przyczynili się do gospodarczego rozwoju II Rzeczpospolitej.",
    "options": null,
    "answer": {
      "Józef Piłsudski": "Organizowanie Legionów Polskich",
      "Józef Haller": "Tworzenie Błękitnej Armii we Francji",
      "Władysław Grabski": "Reforma walutowa z 1924 roku",
      "Eugeniusz Kwiatkowski": "Przyspieszenie rozbudowy portu w Gdyni"
    },
    "left": [
      "Józef Piłsudski",
      "Józef Haller",
      "Władysław Grabski",
      "Eugeniusz Kwiatkowski"
    ],
    "right": [
      "Przyspieszenie rozbudowy portu w Gdyni",
      "Reforma walutowa z 1924 roku",
      "Tworzenie Błękitnej Armii we Francji",
      "Organizowanie Legionów Polskich"
    ]
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj podane zjawiska do I lub II wojny światowej.",
    "explanation": "Poszczególne zjawiska wiążą się z wydarzeniami i datami I albo II wojny światowej.",
    "options": null,
    "answer": {
      "I wojna światowa": [
        "Wprowadzenie gazów bojowych przez Niemców",
        "Wojna pozycyjna na froncie zachodnim w latach 1914-1918",
        "Przystąpienie USA do wojny w 1917 roku"
      ],
      "II wojna światowa": [
        "Atak ZSRR na Polskę we wrześniu 1939 roku",
        "Lądowanie aliantów w Normandii w 1944 roku",
        "Bombardowania atomowe Hiroszimy i Nagasaki"
      ]
    },
    "items": [
      "Wprowadzenie gazów bojowych przez Niemców",
      "Przystąpienie USA do wojny w 1917 roku",
      "Lądowanie aliantów w Normandii w 1944 roku",
      "Wojna pozycyjna na froncie zachodnim w latach 1914-1918",
      "Atak ZSRR na Polskę we wrześniu 1939 roku",
      "Bombardowania atomowe Hiroszimy i Nagasaki"
    ],
    "categories": [
      "I wojna światowa",
      "II wojna światowa"
    ],
    "image": "r06_zolnierze_maski_gazowe.jpg"
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uszereguj wydarzenia i dokumenty z różnych okresów według dat.",
    "explanation": "Te wydarzenia wyznaczają kolejne etapy historii Europy od pokoju po I wojnie światowej do ustalania ładu po II wojnie światowej.",
    "options": null,
    "answer": [
      "Traktat wersalski (1919)",
      "Konstytucja marcowa (1921)",
      "Konstytucja kwietniowa (1935)",
      "Konferencja monachijska (1938)",
      "Pakt Ribbentrop-Mołotow (1939)",
      "Konferencja w Teheranie (1943)"
    ],
    "items": [
      "Konstytucja marcowa (1921)",
      "Konferencja monachijska (1938)",
      "Konferencja w Teheranie (1943)",
      "Traktat wersalski (1919)",
      "Konstytucja kwietniowa (1935)",
      "Pakt Ribbentrop-Mołotow (1939)"
    ],
    "image": "r06_wielka_trojka_obrady.jpg"
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się pakt podpisany przez Niemcy i Japonię w 1936 roku, do którego rok później dołączyły Włochy?",
    "explanation": "Pakt antykominternowski został zawarty przez Niemcy i Japonię w 1936 roku, a Włochy przystąpiły do niego w 1937 roku.",
    "options": null,
    "answer": "pakt antykominternowski",
    "altAnswers": [
      "pakt antykominternowski",
      "Pakt antykominternowski"
    ]
  }
];

const KID_PROMPTS = {
  "R06_IWS_01": "Co bezpośrednio spowodowało wybuch I wojny światowej?",
  "R06_NIE_01": "Kto kierował Polską jako Naczelnik Państwa w 1918 roku?",
  "R06_IIR_01": "Kto wprowadził złotego w 1924 roku?",
  "R06_MID_07": "W jakim mieście w 1938 roku rozmawiano o ziemiach Czechosłowacji?",
  "R06_IIS_07": "Na którym froncie walczyli alianci po lądowaniu w Normandii?",
  "R06_OPO_07": "Jak nazywała się akcja malowania polskich symboli i zrywania niemieckich plakatów?"
};

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "I wojna światowa, okres międzywojenny i II wojna światowa",
  "icon": "🌍",
  "sectionOrder": [
    "I wojna światowa i pokój wersalski",
    "Odzyskanie niepodległości i granice Polski",
    "II Rzeczpospolita",
    "Europa międzywojenna",
    "II wojna światowa i okupacja Polski",
    "Polski opór i powojenny podział Europy"
  ],
  "sectionIcons": {
    "I wojna światowa i pokój wersalski": "⚔️",
    "Odzyskanie niepodległości i granice Polski": "🇵🇱",
    "II Rzeczpospolita": "🏛️",
    "Europa międzywojenna": "🌍",
    "II wojna światowa i okupacja Polski": "🪖",
    "Polski opór i powojenny podział Europy": "🕊️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
