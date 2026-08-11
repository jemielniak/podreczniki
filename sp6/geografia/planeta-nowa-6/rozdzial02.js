// Skróty sekcji (do identyfikatorów ćwiczeń):
//   USL  = Ziemia w Układzie Słonecznym
//   OBR  = Ruch obrotowy Ziemi
//   OBI  = Ruch obiegowy Ziemi
//   STO  = Strefy oświetlenia Ziemi
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_USL_01",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "single_choice",
    "prompt": "Co tworzy Układ Słoneczny?",
    "options": [
      "Słońce i krążące wokół niego ciała niebieskie",
      "Tylko Słońce i Księżyc",
      "Wyłącznie osiem planet",
      "Ziemia oraz wszystkie gwiazdy nocnego nieba",
      "Tylko planety skaliste",
      "Słońce i obiekty krążące wokół Ziemi"
    ],
    "answer": 0,
    "explanation": "Układ Słoneczny tworzą Słońce oraz ciała niebieskie, które krążą wokół niego."
  },
  {
    "id": "R02_USL_02",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "sequence",
    "prompt": "Ułóż planety Układu Słonecznego w kolejności od najbliższej Słońca do najdalszej.",
    "options": null,
    "items": [
      "Mars",
      "Merkury",
      "Neptun",
      "Wenus",
      "Jowisz",
      "Ziemia",
      "Uran",
      "Saturn"
    ],
    "answer": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars",
      "Jowisz",
      "Saturn",
      "Uran",
      "Neptun"
    ],
    "image": "r02_uklad_sloneczny.jpg",
    "explanation": "Planety w kolejności od Słońca to: Merkury, Wenus, Ziemia, Mars, Jowisz, Saturn, Uran i Neptun."
  },
  {
    "id": "R02_USL_03",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "sort",
    "prompt": "Przyporządkuj planety do dwóch grup.",
    "options": null,
    "items": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars",
      "Jowisz",
      "Saturn",
      "Uran",
      "Neptun"
    ],
    "categories": [
      "planety skaliste",
      "planety olbrzymy"
    ],
    "answer": {
      "planety skaliste": [
        "Merkury",
        "Wenus",
        "Ziemia",
        "Mars"
      ],
      "planety olbrzymy": [
        "Jowisz",
        "Saturn",
        "Uran",
        "Neptun"
      ]
    },
    "image": "r02_uklad_sloneczny.jpg",
    "explanation": "Najbliżej Słońca znajdują się cztery planety skaliste, a dalej cztery planety olbrzymy zbudowane głównie z gazów."
  },
  {
    "id": "R02_USL_04",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "true_false",
    "prompt": "Pluton jest podany jako największa planeta karłowata Układu Słonecznego.",
    "options": null,
    "answer": true,
    "explanation": "Pluton jest największą spośród pięciu planet karłowatych."
  },
  {
    "id": "R02_USL_05",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "riddle",
    "prompt": "Jak nazywa się jedyny naturalny satelita Ziemi?",
    "options": null,
    "answer": "Księżyc",
    "altAnswers": [
      "Księżyc",
      "Ksiezyc"
    ],
    "explanation": "Jedynym naturalnym satelitą Ziemi jest Księżyc."
  },
  {
    "id": "R02_USL_06",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "fill_in",
    "prompt": "Okrążenie Ziemi zajmuje Księżycowi dokładnie __________ i 7 godzin.",
    "options": null,
    "answer": [
      "27 dni"
    ],
    "altAnswers": [
      [
        "27 dni",
        "dwadzieścia siedem dni",
        "27 dniom"
      ]
    ],
    "explanation": "Księżyc obiega Ziemię w czasie 27 dni i 7 godzin; tyle samo trwa jego pełny obrót wokół własnej osi."
  },
  {
    "id": "R02_USL_07",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "multi_select",
    "prompt": "Zaznacz ciała niebieskie jako obecne w Układzie Słonecznym poza planetami.",
    "options": [
      "planety karłowate",
      "księżyce",
      "planetoidy",
      "komety",
      "chmury burzowe",
      "kontynenty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Oprócz planet w Układzie Słonecznym znajdują się między innymi planety karłowate, księżyce, planetoidy i komety."
  },
  {
    "id": "R02_USL_08",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "match",
    "prompt": "Połącz ciało niebieskie z opisem.",
    "options": null,
    "left": [
      "gwiazda",
      "planeta",
      "naturalny satelita",
      "kometa"
    ],
    "right": [
      "świeci własnym światłem",
      "świeci światłem odbitym",
      "krąży wokół planety",
      "ma skalno-lodowe jądro i warkocz"
    ],
    "answer": {
      "gwiazda": "świeci własnym światłem",
      "planeta": "świeci światłem odbitym",
      "naturalny satelita": "krąży wokół planety",
      "kometa": "ma skalno-lodowe jądro i warkocz"
    },
    "explanation": "Słońce jest gwiazdą, planety odbijają światło, księżyce krążą wokół planet, a komety mają jądro oraz warkocz."
  },
  {
    "id": "R02_USL_09",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Merkury, Wenus, Mars, Jowisz.",
    "options": null,
    "answer": "Jowisz",
    "explanation": "Merkury, Wenus i Mars są planetami skalistymi, a Jowisz należy do planet olbrzymów."
  },
  {
    "id": "R02_USL_10",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "scenario",
    "prompt": "Uczeń patrzy na Księżyc i widzi całą jego tarczę. Jak nazywa się ta faza?",
    "options": [
      "pełnia",
      "nów",
      "orbita",
      "zaćmienie",
      "meteor",
      "planetoida"
    ],
    "answer": 0,
    "image": "r02_fazy_ksiezyca.jpg",
    "explanation": "Gdy z Ziemi możemy zobaczyć całą tarczę Księżyca, jest pełnia."
  },
  {
    "id": "R02_USL_11",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "single_choice",
    "prompt": "Jak nazywamy obiekt, który przetrwał lot przez atmosferę i spadł na powierzchnię Ziemi?",
    "options": [
      "meteoryt",
      "meteor",
      "kometa",
      "planetoida",
      "księżyc",
      "planeta karłowata"
    ],
    "answer": 0,
    "explanation": "Meteor widzimy w atmosferze, natomiast obiekt, który spada na powierzchnię Ziemi, nazywamy meteorytem."
  },
  {
    "id": "R02_USL_12",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "true_false",
    "prompt": "Kometa Halleya przelatuje przez Układ Słoneczny średnio co 76 lat.",
    "options": null,
    "answer": true,
    "image": "r02_kometa_halleya.jpg",
    "explanation": "Kometa Halleya przelatuje przez Układ Słoneczny średnio co 76 lat."
  },
  {
    "id": "R02_USL_13",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "match",
    "prompt": "Połącz planetę z informacją.",
    "options": null,
    "left": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars"
    ],
    "right": [
      "najmniejsza planeta skalista",
      "ma atmosferę z dwutlenkiem węgla",
      "ma atmosferę bogatą w tlen",
      "ma dwa księżyce"
    ],
    "answer": {
      "Merkury": "najmniejsza planeta skalista",
      "Wenus": "ma atmosferę z dwutlenkiem węgla",
      "Ziemia": "ma atmosferę bogatą w tlen",
      "Mars": "ma dwa księżyce"
    },
    "explanation": "Te informacje opisują cztery planety skaliste."
  },
  {
    "id": "R02_USL_14",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "fill_in",
    "prompt": "Słońce znajduje się w odległości około __________ km od Ziemi.",
    "options": null,
    "answer": [
      "150 mln"
    ],
    "altAnswers": [
      [
        "150 mln",
        "150 milionów",
        "około 150 mln",
        "ok. 150 mln"
      ]
    ],
    "explanation": "Słońce jest najbliższą Ziemi gwiazdą i leży w odległości około 150 mln km."
  },
  {
    "id": "R02_USL_15",
    "section": "Ziemia w Układzie Słonecznym",
    "type": "single_choice",
    "prompt": "Który polski uczony dowiódł, że Ziemia i inne planety obiegają Słońce?",
    "options": [
      "Mikołaj Kopernik",
      "Galileusz",
      "Isaac Newton",
      "Jan Heweliusz",
      "Johannes Kepler",
      "Albert Einstein"
    ],
    "answer": 0,
    "explanation": "Wskazano Mikołaja Kopernika jako uczonego, który przyczynił się do zmiany przekonań o Układzie Słonecznym."
  },
  {
    "id": "R02_OBR_01",
    "section": "Ruch obrotowy Ziemi",
    "type": "single_choice",
    "prompt": "Ile trwa pełny obrót Ziemi wokół własnej osi?",
    "options": [
      "24 godziny",
      "12 godzin",
      "365 dni",
      "27 dni i 7 godzin",
      "84 lata",
      "76 lat"
    ],
    "answer": 0,
    "image": "r02_ruch_obrotowy_ziemi.jpg",
    "explanation": "Pełny obrót Ziemi o 360° trwa 24 godziny, czyli dobę."
  },
  {
    "id": "R02_OBR_02",
    "section": "Ruch obrotowy Ziemi",
    "type": "fill_in",
    "prompt": "Ziemia wykonuje ruch obrotowy z __________ na __________.",
    "options": null,
    "answer": [
      "zachodu",
      "wschód"
    ],
    "altAnswers": [
      [
        "zachodu",
        "zachód"
      ],
      [
        "wschód",
        "wschodu"
      ]
    ],
    "explanation": "Ruch obrotowy Ziemi odbywa się z zachodu na wschód."
  },
  {
    "id": "R02_OBR_03",
    "section": "Ruch obrotowy Ziemi",
    "type": "true_false",
    "prompt": "Występowanie dnia i nocy jest skutkiem ruchu obrotowego Ziemi.",
    "options": null,
    "answer": true,
    "image": "r02_dzien_i_noc_na_ziemi.jpg",
    "explanation": "Ponieważ Ziemia się obraca, kolejne obszary przechodzą ze strefy dnia do strefy nocy."
  },
  {
    "id": "R02_OBR_04",
    "section": "Ruch obrotowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz następstwa ruchu obrotowego Ziemi.",
    "options": [
      "występowanie dnia i nocy",
      "pozorny ruch Słońca i gwiazd po niebie",
      "różnica czasu na Ziemi",
      "występowanie astronomicznych pór roku",
      "zmiana długości roku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Następstwa ruchu obrotowego to dzień i noc, pozorny ruch ciał niebieskich oraz różnica czasu."
  },
  {
    "id": "R02_OBR_05",
    "section": "Ruch obrotowy Ziemi",
    "type": "scenario",
    "prompt": "Miejsce, w którym stoisz, zaczyna wchodzić w strefę dnia. Co obserwujesz na horyzoncie?",
    "options": [
      "wschód Słońca",
      "zachód Słońca",
      "pełnię Księżyca",
      "noc polarną",
      "zaćmienie Księżyca",
      "przesilenie zimowe"
    ],
    "answer": 0,
    "explanation": "Wschód Słońca następuje wtedy, gdy obszar zaczyna wchodzić w strefę dnia."
  },
  {
    "id": "R02_OBR_06",
    "section": "Ruch obrotowy Ziemi",
    "type": "single_choice",
    "prompt": "Kiedy w ciągu dnia Słońce góruje najwyżej nad horyzontem?",
    "options": [
      "około godziny 12.00",
      "tuż po wschodzie",
      "tuż przed zachodem",
      "o północy",
      "około godziny 18.00",
      "zawsze o tej samej wysokości"
    ],
    "answer": 0,
    "image": "r02_gnomon_cien.jpg",
    "explanation": "Około godziny 12.00 Słońce góruje, czyli znajduje się najwyżej nad horyzontem."
  },
  {
    "id": "R02_OBR_07",
    "section": "Ruch obrotowy Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się pionowo ustawiony kij, pręt lub słupek używany do obserwowania pozornego ruchu Słońca?",
    "options": null,
    "answer": "gnomon",
    "altAnswers": [
      "gnomon",
      "Gnomon"
    ],
    "image": "r02_gnomon_cien.jpg",
    "explanation": "Gnomon pozwala obserwować zmiany długości i kierunku cienia w ciągu dnia."
  },
  {
    "id": "R02_OBR_08",
    "section": "Ruch obrotowy Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do następstw ruchu obrotowego: dzień i noc, pozorny ruch Słońca, różnica czasu, pory roku.",
    "options": null,
    "answer": "pory roku",
    "explanation": "Pory roku są następstwem ruchu obiegowego Ziemi i nachylenia jej osi, a pozostałe przykłady wynikają z ruchu obrotowego."
  },
  {
    "id": "R02_OBR_09",
    "section": "Ruch obrotowy Ziemi",
    "type": "match",
    "prompt": "Połącz kierunek dalekiej podróży z zasadą ustawiania zegarka.",
    "options": null,
    "left": [
      "podróż na wschód",
      "podróż na zachód",
      "ta sama strefa czasowa"
    ],
    "right": [
      "przesuwamy zegarek w przód",
      "cofamy zegarek",
      "obowiązuje ta sama godzina"
    ],
    "answer": {
      "podróż na wschód": "przesuwamy zegarek w przód",
      "podróż na zachód": "cofamy zegarek",
      "ta sama strefa czasowa": "obowiązuje ta sama godzina"
    },
    "explanation": "Podczas podróży na wschód dodajemy czas, a podczas podróży na zachód go odejmujemy."
  },
  {
    "id": "R02_OBR_10",
    "section": "Ruch obrotowy Ziemi",
    "type": "fill_in",
    "prompt": "Kulę ziemską podzielono na __________ strefy czasowe, a granice stref poprowadzono co __________ długości geograficznej.",
    "options": null,
    "answer": [
      "24",
      "15°"
    ],
    "altAnswers": [
      [
        "24",
        "dwadzieścia cztery"
      ],
      [
        "15°",
        "15 stopni",
        "15"
      ]
    ],
    "image": "r02_strefy_czasowe_zegary.jpg",
    "explanation": "Ziemię podzielono na 24 strefy czasowe, a każda odpowiada pasowi około 15° długości geograficznej."
  },
  {
    "id": "R02_OBR_11",
    "section": "Ruch obrotowy Ziemi",
    "type": "true_false",
    "prompt": "Tę samą godzinę czasu słonecznego mają tylko miejscowości leżące wzdłuż jednego południka.",
    "options": null,
    "answer": true,
    "explanation": "Czas słoneczny, czyli miejscowy, jest taki sam dla miejsc położonych na tym samym południku."
  },
  {
    "id": "R02_OBR_12",
    "section": "Ruch obrotowy Ziemi",
    "type": "scenario",
    "prompt": "Podróżujesz daleko na zachód. Co robisz ze wskazówkami zegarka?",
    "options": [
      "cofasz je",
      "przesuwasz je do przodu",
      "ustawiasz południe słoneczne",
      "zmieniasz datę na co drugi dzień",
      "nie zmieniasz nigdy godziny",
      "ustawiasz godzinę 12.00"
    ],
    "answer": 0,
    "explanation": "W podróży na zachód cofamy zegarki, czyli odejmujemy czas."
  },
  {
    "id": "R02_OBR_13",
    "section": "Ruch obrotowy Ziemi",
    "type": "sequence",
    "prompt": "Ułóż obserwacje pozornej wędrówki Słońca w kolejności od rana do wieczora.",
    "options": null,
    "items": [
      "Słońce zachodzi za horyzontem",
      "Słońce góruje najwyżej nad horyzontem",
      "Słońce pojawia się na horyzoncie",
      "cienie stają się coraz krótsze po wschodzie"
    ],
    "answer": [
      "Słońce pojawia się na horyzoncie",
      "cienie stają się coraz krótsze po wschodzie",
      "Słońce góruje najwyżej nad horyzontem",
      "Słońce zachodzi za horyzontem"
    ],
    "explanation": "Po wschodzie Słońce wznosi się coraz wyżej, około południa góruje, a potem obniża się aż do zachodu."
  },
  {
    "id": "R02_OBR_14",
    "section": "Ruch obrotowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem pozornej wędrówki Słońca w różnych porach roku.",
    "options": [
      "Latem wysokość górowania Słońca jest największa w roku",
      "Zimą wysokość górowania Słońca jest niewielka",
      "Miejsca wschodu i zachodu Słońca zmieniają się w ciągu roku",
      "Słońce zawsze wschodzi i zachodzi dokładnie w tych samych miejscach",
      "Zimą miejsca wschodu i zachodu są bardziej oddalone niż latem"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Miejsca wschodu i zachodu oraz wysokość górowania Słońca zmieniają się w ciągu roku."
  },
  {
    "id": "R02_OBR_15",
    "section": "Ruch obrotowy Ziemi",
    "type": "single_choice",
    "prompt": "Wzdłuż którego południka lub w jego pobliżu przebiega umowna linia zmiany daty?",
    "options": [
      "180°",
      "0°",
      "15°E",
      "23°26′N",
      "66°34′S",
      "90°"
    ],
    "answer": 0,
    "image": "r02_strefy_czasowe_zegary.jpg",
    "explanation": "Umowna linia zmiany daty ciągnie się wzdłuż południka 180° lub w jego pobliżu."
  },
  {
    "id": "R02_OBI_01",
    "section": "Ruch obiegowy Ziemi",
    "type": "single_choice",
    "prompt": "Jak nazywamy ruch Ziemi wokół Słońca?",
    "options": [
      "ruch obiegowy",
      "ruch obrotowy",
      "górowanie Słońca",
      "czas strefowy",
      "linia zmiany daty",
      "faza Księżyca"
    ],
    "answer": 0,
    "explanation": "Ziemia obiega Słońce, a ten ruch nazywamy ruchem obiegowym."
  },
  {
    "id": "R02_OBI_02",
    "section": "Ruch obiegowy Ziemi",
    "type": "fill_in",
    "prompt": "Pełny obieg Ziemi wokół Słońca trwa __________ dni, 5 godzin i __________ minut.",
    "options": null,
    "answer": [
      "365",
      "49"
    ],
    "altAnswers": [
      [
        "365",
        "trzysta sześćdziesiąt pięć"
      ],
      [
        "49",
        "czterdzieści dziewięć"
      ]
    ],
    "explanation": "Przebycie całej drogi wokół Słońca zajmuje Ziemi 365 dni, 5 godzin i 49 minut."
  },
  {
    "id": "R02_OBI_03",
    "section": "Ruch obiegowy Ziemi",
    "type": "true_false",
    "prompt": "Nachylenie osi ziemskiej względem płaszczyzny orbity nie ulega zmianie podczas ruchu obiegowego.",
    "options": null,
    "answer": true,
    "explanation": "Podczas obiegu Ziemi wokół Słońca nachylenie osi ziemskiej względem płaszczyzny orbity pozostaje stałe."
  },
  {
    "id": "R02_OBI_04",
    "section": "Ruch obiegowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz następstwa ruchu obiegowego Ziemi.",
    "options": [
      "zmiany oświetlenia kuli ziemskiej",
      "astronomiczne pory roku",
      "zmiany długości dnia i nocy",
      "zmiany wysokości górowania Słońca",
      "różnica czasu między strefami",
      "pozorna wędrówka Słońca po niebie w ciągu dnia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_pory_roku.jpg",
    "explanation": "Do skutków ruchu obiegowego należą zmiany oświetlenia, pory roku, zmiany wysokości górowania Słońca oraz długości dnia i nocy."
  },
  {
    "id": "R02_OBI_05",
    "section": "Ruch obiegowy Ziemi",
    "type": "match",
    "prompt": "Połącz datę z równoleżnikiem, na którym Słońce góruje wtedy w zenicie.",
    "options": null,
    "left": [
      "około 20 marca",
      "około 21 czerwca",
      "około 22 września",
      "około 21 grudnia"
    ],
    "right": [
      "równik",
      "zwrotnik Raka",
      "równik po raz drugi",
      "zwrotnik Koziorożca"
    ],
    "answer": {
      "około 20 marca": "równik",
      "około 21 czerwca": "zwrotnik Raka",
      "około 22 września": "równik po raz drugi",
      "około 21 grudnia": "zwrotnik Koziorożca"
    },
    "explanation": "W dniach równonocy Słońce góruje w zenicie na równiku, a w dniach przesileń na odpowiednim zwrotniku."
  },
  {
    "id": "R02_OBI_06",
    "section": "Ruch obiegowy Ziemi",
    "type": "sequence",
    "prompt": "Ułóż początki astronomicznych pór roku na półkuli północnej w kolejności od marca do grudnia.",
    "options": null,
    "items": [
      "zima - około 21 grudnia",
      "lato - około 21 czerwca",
      "wiosna - około 20 marca",
      "jesień - około 22 września"
    ],
    "answer": [
      "wiosna - około 20 marca",
      "lato - około 21 czerwca",
      "jesień - około 22 września",
      "zima - około 21 grudnia"
    ],
    "image": "r02_pory_roku.jpg",
    "explanation": "Na półkuli północnej astronomiczna wiosna zaczyna się około 20 marca, lato około 21 czerwca, jesień około 22 września, a zima około 21 grudnia."
  },
  {
    "id": "R02_OBI_07",
    "section": "Ruch obiegowy Ziemi",
    "type": "scenario",
    "prompt": "Jest około 21 czerwca. Słońce góruje w zenicie na zwrotniku Raka. Jaka pora roku zaczyna się na półkuli północnej?",
    "options": [
      "lato",
      "zima",
      "jesień",
      "wiosna",
      "pora deszczowa",
      "noc polarna"
    ],
    "answer": 0,
    "explanation": "Około 21 czerwca na półkuli północnej rozpoczyna się lato, a na półkuli południowej zima."
  },
  {
    "id": "R02_OBI_08",
    "section": "Ruch obiegowy Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do następstw ruchu obiegowego: pory roku, zmiana długości dnia, zmiana wysokości górowania Słońca, różnica czasu.",
    "options": null,
    "answer": "różnica czasu",
    "explanation": "Różnica czasu jest skutkiem ruchu obrotowego Ziemi, a pozostałe zjawiska wiążą się z ruchem obiegowym."
  },
  {
    "id": "R02_OBI_09",
    "section": "Ruch obiegowy Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się rok, do którego co cztery lata dodaje się jeden dzień?",
    "options": null,
    "answer": "rok przestępny",
    "altAnswers": [
      "rok przestępny",
      "przestępny",
      "rok przestepny"
    ],
    "explanation": "Nadmiar prawie 6 godzin z każdego roku powoduje, że co cztery lata dodaje się jeden dzień; taki rok nazywamy przestępnym."
  },
  {
    "id": "R02_OBI_10",
    "section": "Ruch obiegowy Ziemi",
    "type": "single_choice",
    "prompt": "Gdzie dzień i noc przez cały rok trwają około 12 godzin?",
    "options": [
      "na równiku",
      "na zwrotniku Raka",
      "na kole podbiegunowym północnym",
      "na biegunie północnym",
      "w strefie podbiegunowej",
      "na zwrotniku Koziorożca"
    ],
    "answer": 0,
    "explanation": "Na równiku zarówno dzień, jak i noc przez cały rok trwają około 12 godzin."
  },
  {
    "id": "R02_OBI_11",
    "section": "Ruch obiegowy Ziemi",
    "type": "true_false",
    "prompt": "Na obszarach innych niż równik zrównanie czasu trwania dnia i nocy następuje tylko dwa razy w roku.",
    "options": null,
    "answer": true,
    "explanation": "Poza równikiem zrównanie dnia i nocy następuje 20 marca i 22 września."
  },
  {
    "id": "R02_OBI_12",
    "section": "Ruch obiegowy Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem dnia polarnego i nocy polarnej.",
    "options": [
      "występują na obszarach okołobiegunowych",
      "na biegunach trwają po pół roku",
      "na kołach podbiegunowych trwają jedną dobę",
      "podczas nocy polarnej Słońce nie wschodzi",
      "na równiku trwają po pół roku",
      "podczas dnia polarnego Słońce zachodzi codziennie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_dzien_polarny.jpg",
    "explanation": "Dzień polarny i noc polarna występują w okolicach biegunów; na biegunach trwają po pół roku, a na kołach podbiegunowych jedną dobę."
  },
  {
    "id": "R02_OBI_13",
    "section": "Ruch obiegowy Ziemi",
    "type": "fill_in",
    "prompt": "Około 21 grudnia Słońce góruje w zenicie na zwrotniku __________, a na półkuli północnej rozpoczyna się __________.",
    "options": null,
    "answer": [
      "Koziorożca",
      "zima"
    ],
    "altAnswers": [
      [
        "Koziorożca",
        "Koziorozca",
        "zwrotniku Koziorożca"
      ],
      [
        "zima",
        "astronomiczna zima"
      ]
    ],
    "explanation": "Podczas przesilenia zimowego Słońce góruje w zenicie na zwrotniku Koziorożca, a na półkuli północnej zaczyna się zima."
  },
  {
    "id": "R02_OBI_14",
    "section": "Ruch obiegowy Ziemi",
    "type": "scenario",
    "prompt": "Księżyc znajduje się pomiędzy Słońcem a Ziemią. Jakie zjawisko można wtedy obserwować?",
    "options": [
      "zaćmienie Słońca",
      "zaćmienie Księżyca",
      "pełnię Księżyca",
      "dzień polarny",
      "linię zmiany daty",
      "równonoc jesienną"
    ],
    "answer": 0,
    "image": "r02_zacmienie_na_niebie.jpg",
    "explanation": "Gdy Księżyc znajduje się pomiędzy Słońcem a Ziemią, dochodzi do zaćmienia Słońca."
  },
  {
    "id": "R02_OBI_15",
    "section": "Ruch obiegowy Ziemi",
    "type": "match",
    "prompt": "Połącz ustawienie ciał niebieskich z rodzajem zaćmienia.",
    "options": null,
    "left": [
      "Księżyc między Słońcem a Ziemią",
      "Ziemia między Słońcem a Księżycem"
    ],
    "right": [
      "zaćmienie Słońca",
      "zaćmienie Księżyca"
    ],
    "answer": {
      "Księżyc między Słońcem a Ziemią": "zaćmienie Słońca",
      "Ziemia między Słońcem a Księżycem": "zaćmienie Księżyca"
    },
    "image": "r02_zacmienie_na_niebie.jpg",
    "explanation": "Zaćmienie zależy od tego, które ciało znajduje się pośrodku wspólnej linii Słońca, Ziemi i Księżyca."
  },
  {
    "id": "R02_STO_01",
    "section": "Strefy oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Od czego zależy ilość energii słonecznej otrzymywanej przez obszar na Ziemi?",
    "options": [
      "od kąta padania promieni słonecznych",
      "od liczby kontynentów",
      "od nazwy oceanu",
      "od liczby księżyców planety",
      "od stref czasowych",
      "od długości orbity Księżyca"
    ],
    "answer": 0,
    "explanation": "Na ilość energii słonecznej i ciepła wpływa kąt padania promieni słonecznych, który zmienia się wraz z szerokością geograficzną."
  },
  {
    "id": "R02_STO_02",
    "section": "Strefy oświetlenia Ziemi",
    "type": "true_false",
    "prompt": "W okolicach równika promienie słoneczne padają w południe pod bardzo dużym kątem, nawet 90°.",
    "options": null,
    "answer": true,
    "explanation": "W pobliżu równika promienie padają pod bardzo dużym kątem, dlatego wiązka ogrzewa mały obszar."
  },
  {
    "id": "R02_STO_03",
    "section": "Strefy oświetlenia Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz strefy oświetlenia Ziemi.",
    "options": [
      "strefa międzyzwrotnikowa",
      "strefy umiarkowane",
      "strefy podbiegunowe",
      "strefa księżycowa",
      "strefa meteorytowa",
      "strefa planetarna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_strefy_oswietlenia_krajobrazy.jpg",
    "explanation": "Wyróżniamy jedną strefę międzyzwrotnikową, dwie strefy umiarkowane i dwie strefy podbiegunowe."
  },
  {
    "id": "R02_STO_04",
    "section": "Strefy oświetlenia Ziemi",
    "type": "fill_in",
    "prompt": "Strefa międzyzwrotnikowa rozciąga się między zwrotnikiem __________ a zwrotnikiem __________.",
    "options": null,
    "answer": [
      "Raka",
      "Koziorożca"
    ],
    "altAnswers": [
      [
        "Raka",
        "zwrotnikiem Raka"
      ],
      [
        "Koziorożca",
        "Koziorozca",
        "zwrotnikiem Koziorożca"
      ]
    ],
    "explanation": "Strefa międzyzwrotnikowa leży między zwrotnikiem Raka a zwrotnikiem Koziorożca."
  },
  {
    "id": "R02_STO_05",
    "section": "Strefy oświetlenia Ziemi",
    "type": "match",
    "prompt": "Połącz strefę oświetlenia z jej cechą.",
    "options": null,
    "left": [
      "strefa międzyzwrotnikowa",
      "strefa umiarkowana",
      "strefa podbiegunowa"
    ],
    "right": [
      "otrzymuje najwięcej energii słonecznej",
      "latem dni są długie a zimą krótkie",
      "występują tam dzień polarny i noc polarna"
    ],
    "answer": {
      "strefa międzyzwrotnikowa": "otrzymuje najwięcej energii słonecznej",
      "strefa umiarkowana": "latem dni są długie a zimą krótkie",
      "strefa podbiegunowa": "występują tam dzień polarny i noc polarna"
    },
    "image": "r02_strefy_oswietlenia_krajobrazy.jpg",
    "explanation": "Każda strefa oświetlenia ma inne warunki związane z wysokością górowania Słońca i długością dnia."
  },
  {
    "id": "R02_STO_06",
    "section": "Strefy oświetlenia Ziemi",
    "type": "sort",
    "prompt": "Przyporządkuj krajobrazy do stref oświetlenia.",
    "options": null,
    "items": [
      "wilgotne lasy równikowe",
      "sawanny",
      "pustynie gorące",
      "lasy liściaste i mieszane",
      "stepy",
      "tajga",
      "tundra",
      "pustynie lodowe"
    ],
    "categories": [
      "strefa międzyzwrotnikowa",
      "strefa umiarkowana",
      "strefa podbiegunowa"
    ],
    "answer": {
      "strefa międzyzwrotnikowa": [
        "wilgotne lasy równikowe",
        "sawanny",
        "pustynie gorące"
      ],
      "strefa umiarkowana": [
        "lasy liściaste i mieszane",
        "stepy",
        "tajga"
      ],
      "strefa podbiegunowa": [
        "tundra",
        "pustynie lodowe"
      ]
    },
    "explanation": "Łączy się strefy oświetlenia ze strefami klimatycznymi i krajobrazowymi."
  },
  {
    "id": "R02_STO_07",
    "section": "Strefy oświetlenia Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do strefy międzyzwrotnikowej: zwrotnik Raka, zwrotnik Koziorożca, Słońce w zenicie, noc polarna.",
    "options": null,
    "answer": "noc polarna",
    "explanation": "Noc polarna występuje w strefach podbiegunowych, a nie w strefie międzyzwrotnikowej."
  },
  {
    "id": "R02_STO_08",
    "section": "Strefy oświetlenia Ziemi",
    "type": "scenario",
    "prompt": "W pewnej strefie Słońce góruje bardzo nisko, dociera najmniej energii słonecznej i występują dzień polarny oraz noc polarna. Co to za strefa?",
    "options": [
      "strefa podbiegunowa",
      "strefa międzyzwrotnikowa",
      "strefa umiarkowana",
      "strefa klimatów równikowych",
      "strefa krajobrazu śródziemnomorskiego",
      "strefa zwrotnikowa"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy stref podbiegunowych, rozciągających się od kół podbiegunowych do biegunów."
  },
  {
    "id": "R02_STO_09",
    "section": "Strefy oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Jak w strefach umiarkowanych zmienia się długość dnia w ciągu roku?",
    "options": [
      "latem dni są długie a zimą krótkie",
      "dni i noce zawsze trwają po 12 godzin",
      "przez pół roku trwa tylko dzień",
      "przez cały rok występuje noc polarna",
      "najkrótszy dzień trwa około 10,5 godziny a najdłuższy 13,5 godziny",
      "długość dnia nie zależy od pory roku"
    ],
    "answer": 0,
    "explanation": "W strefach umiarkowanych latem dni są długie, a zimą krótkie."
  },
  {
    "id": "R02_STO_10",
    "section": "Strefy oświetlenia Ziemi",
    "type": "true_false",
    "prompt": "Zróżnicowanie oświetlenia Ziemi jest przyczyną występowania stref klimatycznych oraz stref krajobrazowych.",
    "options": null,
    "answer": true,
    "explanation": "Ilość energii słonecznej wpływa na temperaturę, a to wiąże się ze strefami klimatycznymi i krajobrazowymi."
  },
  {
    "id": "R02_STO_11",
    "section": "Strefy oświetlenia Ziemi",
    "type": "match",
    "prompt": "Połącz strefę klimatyczną z przykładowym krajobrazem z tabeli.",
    "options": null,
    "left": [
      "strefa klimatów równikowych",
      "strefa klimatów zwrotnikowych",
      "strefa klimatów umiarkowanych",
      "strefa klimatów okołobiegunowych"
    ],
    "right": [
      "wilgotne lasy równikowe",
      "pustynie gorące",
      "tajga",
      "tundra"
    ],
    "answer": {
      "strefa klimatów równikowych": "wilgotne lasy równikowe",
      "strefa klimatów zwrotnikowych": "pustynie gorące",
      "strefa klimatów umiarkowanych": "tajga",
      "strefa klimatów okołobiegunowych": "tundra"
    },
    "explanation": "Pokazuje się przykładowe powiązania stref klimatycznych i krajobrazowych."
  },
  {
    "id": "R02_STO_12",
    "section": "Strefy oświetlenia Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się zjawisko, gdy w nocy nie zapada całkowita ciemność, a zmierzch przechodzi bezpośrednio w brzask?",
    "options": null,
    "answer": "białe noce",
    "altAnswers": [
      "białe noce",
      "biale noce",
      "biała noc",
      "biala noc"
    ],
    "image": "r02_biale_noce.jpg",
    "explanation": "Białe noce polegają na tym, że nocą nie zapada całkowita ciemność, bo Słońce chowa się płytko za horyzontem."
  },
  {
    "id": "R02_STO_13",
    "section": "Strefy oświetlenia Ziemi",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem białych nocy.",
    "options": [
      "występują w wysokich szerokościach geograficznych",
      "można je obserwować wiosną i latem",
      "w Polsce najlepiej widać je na północy kraju",
      "polegają na całkowitej ciemności przez pół roku",
      "występują w pobliżu kół podbiegunowych",
      "są fazą Księżyca"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "image": "r02_biale_noce.jpg",
    "explanation": "Białe noce obserwuje się wiosną i latem w wysokich szerokościach, także w Polsce od początku czerwca do połowy lipca, najlepiej na północy kraju."
  },
  {
    "id": "R02_STO_14",
    "section": "Strefy oświetlenia Ziemi",
    "type": "sequence",
    "prompt": "Ułóż strefy oświetlenia od bieguna północnego do bieguna południowego.",
    "options": null,
    "items": [
      "strefa umiarkowana południowa",
      "strefa podbiegunowa północna",
      "strefa międzyzwrotnikowa",
      "strefa podbiegunowa południowa",
      "strefa umiarkowana północna"
    ],
    "answer": [
      "strefa podbiegunowa północna",
      "strefa umiarkowana północna",
      "strefa międzyzwrotnikowa",
      "strefa umiarkowana południowa",
      "strefa podbiegunowa południowa"
    ],
    "explanation": "Od północy ku południu układają się kolejno strefa podbiegunowa północna, umiarkowana północna, międzyzwrotnikowa, umiarkowana południowa i podbiegunowa południowa."
  },
  {
    "id": "R02_STO_15",
    "section": "Strefy oświetlenia Ziemi",
    "type": "single_choice",
    "prompt": "Który zestaw krajobrazów przypisano w tabeli do strefy podbiegunowej?",
    "options": [
      "tundra i pustynie lodowe",
      "sawanny i pustynie gorące",
      "stepy i wilgotne lasy równikowe",
      "krajobraz śródziemnomorski i sawanny",
      "lasy podzwrotnikowe i pustynie gorące",
      "tajga i sawanny"
    ],
    "answer": 0,
    "explanation": "W tabeli strefie podbiegunowej przypisano klimat okołobiegunowy oraz krajobrazy tundry i pustyń lodowych."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "O ile stopni obraca się Ziemia w ciągu jednej godziny?",
    "options": [
      "15°",
      "24°",
      "30°",
      "90°",
      "180°",
      "360°"
    ],
    "answer": 0,
    "explanation": "Pełny obrót to 360° w 24 godziny, więc w ciągu godziny Ziemia obraca się o 15°."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pełny obieg Ziemi wokół Słońca trwa 365 dni, __________ godzin i __________ minut.",
    "options": null,
    "answer": [
      "5",
      "49"
    ],
    "altAnswers": [
      [
        "5",
        "pięć",
        "piec"
      ],
      [
        "49",
        "czterdzieści dziewięć",
        "czterdziesci dziewiec"
      ]
    ],
    "explanation": "Dokładny czas obiegu Ziemi to 365 dni, 5 godzin i 49 minut."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Z Ziemi obserwujemy zawsze tę samą półkulę Księżyca, ponieważ jego obieg Ziemi i obrót wokół osi trwają tyle samo.",
    "options": null,
    "answer": true,
    "explanation": "Księżyc obiega Ziemię w 27 dni i 7 godzin i tyle samo trwa jego pełny obrót wokół osi."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o planetach olbrzymach.",
    "options": [
      "Jowisz jest największą planetą Układu Słonecznego",
      "Saturn ma widoczne pierścienie z brył lodu",
      "Uran obiega Słońce w ciągu 84 lat",
      "Neptun znajduje się najdalej od Słońca",
      "Merkury jest planetą olbrzymem",
      "Mars jest zbudowany głównie z wodoru i helu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Jowisz, Saturn, Uran i Neptun są planetami olbrzymami; podaje się ich cechy, między innymi pierścienie Saturna i dalekie położenie Neptuna."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz planetę z czasem obiegu Słońca.",
    "options": null,
    "left": [
      "Merkury",
      "Wenus",
      "Jowisz",
      "Uran",
      "Neptun"
    ],
    "right": [
      "88 dni",
      "224 dni",
      "niespełna 12 lat",
      "84 lata",
      "około 165 lat"
    ],
    "answer": {
      "Merkury": "88 dni",
      "Wenus": "224 dni",
      "Jowisz": "niespełna 12 lat",
      "Uran": "84 lata",
      "Neptun": "około 165 lat"
    },
    "explanation": "Planety obiegają Słońce w różnym czasie; im dalej od Słońca przebiega orbita, tym dłuższy jest czas obiegu."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Statek płynie z Los Angeles do Tokio i przekracza linię zmiany daty. Co dzieje się z datą dla pasażerów?",
    "options": [
      "tracą jeden dzień i zmieniają datę na dzień następny",
      "zyskują jeden dzień i cofają datę",
      "nie zmieniają daty",
      "ustawiają zawsze datę 1 stycznia",
      "dodają tylko jedną godzinę",
      "cofają zegary o 24 godziny bez zmiany daty"
    ],
    "answer": 0,
    "explanation": "W przykładzie podróży z Los Angeles do Tokio po przekroczeniu linii zmiany daty pasażerowie tracą jeden dzień i zmieniają datę na dzień następny."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do dat początku astronomicznych pór roku: około 20 marca, około 21 czerwca, około 22 września, około 15 listopada.",
    "options": null,
    "answer": "około 15 listopada",
    "explanation": "Podaje się daty około 20 marca, 21 czerwca, 22 września i 21 grudnia, a nie 15 listopada."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Pod jakim stałym kątem oś ziemska jest nachylona do płaszczyzny orbity?",
    "options": null,
    "answer": "66°34′",
    "altAnswers": [
      "66°34′",
      "66°34'",
      "66 stopni 34 minuty",
      "66 34",
      "66°34"
    ],
    "explanation": "Oś ziemska jest nachylona do płaszczyzny orbity pod stałym kątem 66°34′."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzaju ciała niebieskiego.",
    "options": null,
    "items": [
      "Pluton",
      "Księżyc",
      "Kometa Halleya",
      "planetoida"
    ],
    "categories": [
      "planeta karłowata",
      "naturalny satelita",
      "kometa",
      "małe ciało skalne"
    ],
    "answer": {
      "planeta karłowata": [
        "Pluton"
      ],
      "naturalny satelita": [
        "Księżyc"
      ],
      "kometa": [
        "Kometa Halleya"
      ],
      "małe ciało skalne": [
        "planetoida"
      ]
    },
    "explanation": "Pluton jest planetą karłowatą, Księżyc naturalnym satelitą Ziemi, Kometa Halleya kometą, a planetoidy to niewielkie ciała krążące wokół Słońca."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zjawiska w kolejności w ciągu roku kalendarzowego na półkuli północnej.",
    "options": null,
    "items": [
      "równonoc jesienna",
      "przesilenie zimowe",
      "przesilenie letnie",
      "równonoc wiosenna"
    ],
    "answer": [
      "równonoc wiosenna",
      "przesilenie letnie",
      "równonoc jesienna",
      "przesilenie zimowe"
    ],
    "explanation": "W ciągu roku kolejno występują: równonoc wiosenna, przesilenie letnie, równonoc jesienna i przesilenie zimowe."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który meteoryt opisano jako największy znany meteoryt, który dotarł na Ziemię w jednym kawałku?",
    "options": [
      "Hoba",
      "Morasko",
      "Kometa Halleya",
      "Pluton",
      "Cerro Armazones",
      "ELT"
    ],
    "answer": 0,
    "explanation": "W materiale dodatkowym opisano meteoryt Hoba z Namibii, ważący 60 t, jako największy znany meteoryt zachowany w jednym kawałku."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W materiale podano, że w Polsce białe noce można obserwować od początku czerwca do połowy lipca, najlepiej na północy kraju.",
    "options": null,
    "answer": true,
    "explanation": "Opis białych nocy wskazuje, że w Polsce występują one od początku czerwca do połowy lipca i najlepiej widać je na północy kraju."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Ruchy Ziemi",
  icon: "🌍",
  sectionOrder: [
    "Ziemia w Układzie Słonecznym",
    "Ruch obrotowy Ziemi",
    "Ruch obiegowy Ziemi",
    "Strefy oświetlenia Ziemi"
  ],
  sectionIcons: {
    "Ziemia w Układzie Słonecznym": "☀️",
    "Ruch obrotowy Ziemi": "🔄",
    "Ruch obiegowy Ziemi": "🌤️",
    "Strefy oświetlenia Ziemi": "🌐"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
