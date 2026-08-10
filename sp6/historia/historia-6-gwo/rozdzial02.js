// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ZYG  = Zygmunt I Stary i złoty wiek
//   PRU  = Wojna z zakonem i hołd pruski
//   TUR  = Turcja i Mazowsze
//   AUG  = Zygmunt II August i Barbara Radziwiłłówna
//   INF  = Inflanty i pierwsza wojna północna
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_ZYG_01",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "single_choice",
    "prompt": "W którym roku Zygmunt I Stary został wielkim księciem litewskim, a następnie królem Polski?",
    "options": [
      "1506",
      "1518",
      "1525",
      "1529",
      "1548",
      "1572"
    ],
    "answer": 0,
    "explanation": "Zygmunt I Stary objął władzę w 1506 r. Najpierw został wielkim księciem litewskim, a potem królem Polski.",
    "image": "r02_zygmunt_stary_portret.jpg"
  },
  {
    "id": "R02_ZYG_02",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "multi_select",
    "prompt": "Zaznacz zjawiska, które charakteryzowały pomyślny okres czasów zygmuntowskich.",
    "options": [
      "Polska i Litwa należały do europejskich potęg",
      "Wzrastał eksport zboża za granicę",
      "Rozwijała się kultura",
      "Tolerancja religijna mogła być wzorem dla Europy",
      "Wojny stale niszczyły oba państwa",
      "Eksport zboża za granicę zanikał"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podręcznik podkreśla potęgę Polski i Litwy, wzrost eksportu zboża, rozwój kultury i tolerancję religijną. Wojny nie niszczyły wówczas państwa.",
    "image": "r02_zloty_wiek_dworska_scena.jpg"
  },
  {
    "id": "R02_ZYG_03",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "true_false",
    "prompt": "Złoty wiek Polski i Litwy obejmował czasy zygmuntowskie oraz kilkanaście następnych lat, aż do śmierci Stefana Batorego w 1586 r.",
    "options": null,
    "answer": true,
    "explanation": "Tak. W podręczniku złoty wiek obejmuje czasy zygmuntowskie i okres do śmierci Stefana Batorego w 1586 r."
  },
  {
    "id": "R02_ZYG_04",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "fill_in",
    "prompt": "Zygmunt Stary ożenił się z Boną w roku __________, a do koronacji ich 10-letniego syna za życia ojca doszło w roku __________.",
    "options": null,
    "answer": [
      "1518",
      "1530"
    ],
    "altAnswers": [
      [
        "1518",
        "1518 r."
      ],
      [
        "1530",
        "1530 r."
      ]
    ],
    "explanation": "Ślub Zygmunta Starego z Boną odbył się w 1518 r. Bona doprowadziła do koronacji 10-letniego Zygmunta Augusta w 1530 r.",
    "image": "r02_krolowa_bona_dwor.jpg"
  },
  {
    "id": "R02_ZYG_05",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "riddle",
    "prompt": "Włoska księżniczka, która w 1518 r. została żoną Zygmunta Starego, to...",
    "options": null,
    "answer": "Bona",
    "altAnswers": [
      "Bona",
      "królowa Bona",
      "Bona Sforza"
    ],
    "explanation": "Zygmunt Stary poślubił w 1518 r. włoską księżniczkę Bonę. Królowa prowadziła w Polsce własną politykę."
  },
  {
    "id": "R02_ZYG_06",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do działań Zygmunta Starego: zwiększanie dochodów skarbu, dobór doradców spośród senatorów, zapewnianie bezpieczeństwa granicom, koronacja Barbary Radziwiłłówny.",
    "options": null,
    "answer": "koronacja Barbary Radziwiłłówny",
    "explanation": "Koronację Barbary Radziwiłłówny przeprowadził Zygmunt II August. Pozostałe działania podręcznik przypisuje Zygmuntowi Staremu.",
    "image": "r02_zygmunt_stary_portret.jpg"
  },
  {
    "id": "R02_ZYG_07",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "scenario",
    "prompt": "Jest rok 1530. Dziesięcioletni królewicz zostaje koronowany jeszcze za życia swojego ojca, wbrew polskiej tradycji. Kto doprowadził do tej koronacji?",
    "options": [
      "Królowa Bona",
      "Barbara Radziwiłłówna",
      "Katarzyna Jagiellonka",
      "Mikołaj Kopernik",
      "Albrecht Hohenzollern",
      "Marcin Luter"
    ],
    "answer": 0,
    "explanation": "To królowa Bona doprowadziła do koronacji swojego 10-letniego syna Zygmunta Augusta jeszcze za życia Zygmunta Starego.",
    "image": "r02_krolowa_bona_dwor.jpg"
  },
  {
    "id": "R02_ZYG_08",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "match",
    "prompt": "Połącz postać z informacją, która jej dotyczy.",
    "options": null,
    "left": [
      "Zygmunt I Stary",
      "Bona",
      "Zygmunt II August",
      "Stefan Batory"
    ],
    "right": [
      "Objął władzę w 1506 r.",
      "Doprowadziła do koronacji syna w 1530 r.",
      "Od 1548 r. sprawował samodzielne rządy",
      "Jego śmierć w 1586 r. zamyka okres złotego wieku"
    ],
    "answer": {
      "Zygmunt I Stary": "Objął władzę w 1506 r.",
      "Bona": "Doprowadziła do koronacji syna w 1530 r.",
      "Zygmunt II August": "Od 1548 r. sprawował samodzielne rządy",
      "Stefan Batory": "Jego śmierć w 1586 r. zamyka okres złotego wieku"
    },
    "explanation": "Daty 1506, 1530, 1548 i 1586 porządkują najważniejsze informacje o początkach i końcu okresu opisanego jako złoty wiek."
  },
  {
    "id": "R02_ZYG_09",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "sort",
    "prompt": "Przyporządkuj działania do Zygmunta Starego albo królowej Bony.",
    "options": null,
    "items": [
      "Zwiększył dochody skarbu królewskiego",
      "Dobierał doradców spośród senatorów",
      "Wysyłała do Włoch zyski ze swoich dóbr",
      "Doprowadziła do koronacji syna za życia ojca",
      "Organizował obronę kresów południowo-wschodnich"
    ],
    "categories": [
      "Zygmunt Stary",
      "Bona"
    ],
    "answer": {
      "Zygmunt Stary": [
        "Zwiększył dochody skarbu królewskiego",
        "Dobierał doradców spośród senatorów",
        "Organizował obronę kresów południowo-wschodnich"
      ],
      "Bona": [
        "Wysyłała do Włoch zyski ze swoich dóbr",
        "Doprowadziła do koronacji syna za życia ojca"
      ]
    },
    "explanation": "Zygmunt Stary wzmacniał państwo i skarb, a Bona prowadziła własną politykę, zarządzała dobrami i doprowadziła do wcześniejszej koronacji syna."
  },
  {
    "id": "R02_ZYG_10",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Koronacja 10-letniego Zygmunta Augusta",
      "Ślub Zygmunta Starego z Boną",
      "Śmierć Zygmunta Starego",
      "Objęcie władzy przez Zygmunta Starego"
    ],
    "answer": [
      "Objęcie władzy przez Zygmunta Starego",
      "Ślub Zygmunta Starego z Boną",
      "Koronacja 10-letniego Zygmunta Augusta",
      "Śmierć Zygmunta Starego"
    ],
    "explanation": "Kolejność wyznaczają daty: 1506, 1518, 1530 i 1548."
  },
  {
    "id": "R02_ZYG_11",
    "section": "Zygmunt I Stary i złoty wiek",
    "type": "single_choice",
    "prompt": "Dlaczego królowa Bona budziła wrogość części polskiej szlachty?",
    "options": [
      "Prowadziła własną politykę i była oskarżana o realizowanie ambicji kosztem Polski",
      "Odmówiła poślubienia Zygmunta Starego",
      "Sprzeciwiła się koronacji Zygmunta Augusta",
      "Oddała Mazowsze Imperium Osmańskiemu",
      "Poparła zakon krzyżacki w wojnie z Polską",
      "Zabroniła królowi korzystać z doradców"
    ],
    "answer": 0,
    "explanation": "Szlachtę drażniła samodzielna polityka Bony, wysyłanie zysków do Włoch i doprowadzenie do koronacji jej syna za życia ojca."
  },
  {
    "id": "R02_PRU_01",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "single_choice",
    "prompt": "Co stało się z państwem krzyżackim na mocy drugiego pokoju toruńskiego z 1466 r.?",
    "options": [
      "Zostało ograniczone do Prus Zakonnych i stało się lennem Polski",
      "Zostało wcielone w całości do Litwy",
      "Przeniosło stolicę do Krakowa",
      "Przekształciło się od razu w Prusy Książęce",
      "Zajęło Mazowsze",
      "Poddało Inflanty Zygmuntowi Augustowi"
    ],
    "answer": 0,
    "explanation": "Po drugim pokoju toruńskim Krzyżacy oddali Polsce Prusy Królewskie, a ich państwo ograniczone do Prus Zakonnych stało się lennem Polski."
  },
  {
    "id": "R02_PRU_02",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "true_false",
    "prompt": "Albrecht Hohenzollern złożył Zygmuntowi Staremu hołd lenny jeszcze przed wybuchem ostatniej wojny polsko-krzyżackiej.",
    "options": null,
    "answer": false,
    "explanation": "Nie. Albrecht odmówił hołdu, a wojna wybuchła w 1519 r. Hołd pruski złożył dopiero w 1525 r."
  },
  {
    "id": "R02_PRU_03",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "fill_in",
    "prompt": "Ostatnia wojna polsko-krzyżacka trwała od roku __________ do roku __________, a czteroletni rozejm zawarto w roku __________.",
    "options": null,
    "answer": [
      "1519",
      "1521",
      "1521"
    ],
    "altAnswers": [
      [
        "1519",
        "1519 r."
      ],
      [
        "1521",
        "1521 r."
      ],
      [
        "1521",
        "1521 r."
      ]
    ],
    "explanation": "Wojna trwała w latach 1519-1521. W 1521 r. obie strony, wyczerpane finansowo, zawarły czteroletni rozejm."
  },
  {
    "id": "R02_PRU_04",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "riddle",
    "prompt": "Astronom, który w styczniu 1521 r. dowodził obroną Olsztyna przed Krzyżakami, to...",
    "options": null,
    "answer": "Mikołaj Kopernik",
    "altAnswers": [
      "Mikołaj Kopernik",
      "Kopernik"
    ],
    "explanation": "Obroną Olsztyna kierował Mikołaj Kopernik. Krzyżacki szturm nie zaskoczył obrońców i miasto pozostało w polskich rękach.",
    "image": "r02_zamek_olsztyn_obrona.jpg"
  },
  {
    "id": "R02_PRU_05",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "single_choice",
    "prompt": "Z jakim państwem Albrecht Hohenzollern zawarł antypolski sojusz przed wojną z lat 1519-1521?",
    "options": [
      "Moskwą",
      "Danią",
      "Szwecją",
      "Imperium Osmańskim",
      "Litwą",
      "Prusami Królewskimi"
    ],
    "answer": 0,
    "explanation": "Albrecht Hohenzollern zawarł antypolski sojusz z Moskwą, czyli Wielkim Księstwem Moskiewskim."
  },
  {
    "id": "R02_PRU_06",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "multi_select",
    "prompt": "Zaznacz decyzje Albrechta Hohenzollerna podjęte przed hołdem pruskim, gdy wznowienie wojny groziło zakonowi klęską.",
    "options": [
      "Rozwiązał zakon krzyżacki w Prusach",
      "Przeszedł z katolicyzmu na luteranizm",
      "Ogłosił swoje państwo świeckim księstwem",
      "Przyłączył Mazowsze do Polski",
      "Poddał Inflanty Zygmuntowi Augustowi",
      "Zawarł pokój z sułtanem"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Za namową Marcina Lutra Albrecht rozwiązał zakon w Prusach, przeszedł na luteranizm i utworzył świeckie Prusy Książęce."
  },
  {
    "id": "R02_PRU_07",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do przemian państwa krzyżackiego w Prusach: Prusy Królewskie, Prusy Zakonne, Prusy Książęce, Mazowsze.",
    "options": null,
    "answer": "Mazowsze",
    "explanation": "Mazowsze nie było nazwą części państwa krzyżackiego. Pozostałe trzy nazwy występują w opisie stosunków Polski z zakonem i skutków hołdu pruskiego."
  },
  {
    "id": "R02_PRU_08",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "scenario",
    "prompt": "Kraków, 1525 r. Świecki książę klęczy przed Zygmuntem Starym, przysięga mu wierność, a król przekazuje mu chorągiew jako znak lenna. Jak nazywało się to wydarzenie?",
    "options": [
      "Hołd pruski",
      "Unia lubelska",
      "Pokój z sułtanem",
      "Pierwsza wojna północna",
      "Koronacja Barbary Radziwiłłówny",
      "Przyłączenie Mazowsza"
    ],
    "answer": 0,
    "explanation": "W 1525 r. Albrecht Hohenzollern złożył Zygmuntowi Staremu hołd lenny w Krakowie. Wydarzenie nazwano hołdem pruskim.",
    "image": "r02_hold_pruski_krakow.jpg"
  },
  {
    "id": "R02_PRU_09",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Drugi pokój toruński",
      "Wybuch ostatniej wojny polsko-krzyżackiej",
      "Zawarcie czteroletniego rozejmu",
      "Hołd pruski"
    ],
    "right": [
      "1466",
      "1519",
      "1521",
      "1525"
    ],
    "answer": {
      "Drugi pokój toruński": "1466",
      "Wybuch ostatniej wojny polsko-krzyżackiej": "1519",
      "Zawarcie czteroletniego rozejmu": "1521",
      "Hołd pruski": "1525"
    },
    "explanation": "Kolejne etapy konfliktu wyznaczają lata 1466, 1519, 1521 i 1525."
  },
  {
    "id": "R02_PRU_10",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Hołd pruski",
      "Czteroletni rozejm",
      "Drugi pokój toruński",
      "Wybuch ostatniej wojny polsko-krzyżackiej"
    ],
    "answer": [
      "Drugi pokój toruński",
      "Wybuch ostatniej wojny polsko-krzyżackiej",
      "Czteroletni rozejm",
      "Hołd pruski"
    ],
    "explanation": "Najpierw był drugi pokój toruński w 1466 r., potem wojna rozpoczęta w 1519 r., rozejm z 1521 r. i hołd pruski z 1525 r."
  },
  {
    "id": "R02_PRU_11",
    "section": "Wojna z zakonem i hołd pruski",
    "type": "single_choice",
    "prompt": "Dlaczego Zygmunt Stary mógł uważać hołd pruski za duży sukces?",
    "options": [
      "Prusy Książęce stały się słabym protestanckim lennem Polski",
      "Krzyżacy oddali Polsce Inflanty bez żadnych warunków",
      "Moskwa została lennem Polski",
      "Zakon krzyżacki przejął Mazowsze",
      "Szwecja uznała zwierzchnictwo Zygmunta Starego",
      "Imperium Osmańskie wycofało się z Węgier"
    ],
    "answer": 0,
    "explanation": "Nowe Prusy Książęce były słabym, protestanckim państwem lennym. Król liczył, że w przyszłości zostaną pokojowo wcielone do Polski.",
    "image": "r02_hold_pruski_krakow.jpg"
  },
  {
    "id": "R02_TUR_01",
    "section": "Turcja i Mazowsze",
    "type": "single_choice",
    "prompt": "Które państwo stanowiło w czasach Zygmunta Starego rosnące zagrożenie od południa?",
    "options": [
      "Imperium Osmańskie",
      "Prusy Książęce",
      "Dania",
      "Szwecja",
      "Prusy Królewskie",
      "Inflanty"
    ],
    "answer": 0,
    "explanation": "Imperium Osmańskie znajdowało się wówczas u szczytu potęgi i prowadziło podboje w Afryce, Azji i Europie.",
    "image": "r02_imperium_osmanskie_wojsko.jpg"
  },
  {
    "id": "R02_TUR_02",
    "section": "Turcja i Mazowsze",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Bitwa pod Mohaczem",
      "Przyłączenie Mazowsza do Polski",
      "Pokój Zygmunta Starego z sułtanem"
    ],
    "right": [
      "1526",
      "1529",
      "1533"
    ],
    "answer": {
      "Bitwa pod Mohaczem": "1526",
      "Przyłączenie Mazowsza do Polski": "1529",
      "Pokój Zygmunta Starego z sułtanem": "1533"
    },
    "explanation": "Turcy rozgromili Węgrów pod Mohaczem w 1526 r., Mazowsze przyłączono w 1529 r., a pokój z sułtanem zawarto w 1533 r."
  },
  {
    "id": "R02_TUR_03",
    "section": "Turcja i Mazowsze",
    "type": "true_false",
    "prompt": "Mazowsze zostało przyłączone do Polski w 1529 r. po wygaśnięciu Piastów mazowieckich; wcześniej było lennem Polski.",
    "options": null,
    "answer": true,
    "explanation": "Tak. Po wygaśnięciu Piastów mazowieckich Zygmunt Stary przyłączył Mazowsze do Polski w 1529 r."
  },
  {
    "id": "R02_TUR_04",
    "section": "Turcja i Mazowsze",
    "type": "fill_in",
    "prompt": "Turcy rozgromili Węgrów pod Mohaczem w roku __________, a Zygmunt Stary zawarł pokój z sułtanem w roku __________.",
    "options": null,
    "answer": [
      "1526",
      "1533"
    ],
    "altAnswers": [
      [
        "1526",
        "1526 r."
      ],
      [
        "1533",
        "1533 r."
      ]
    ],
    "explanation": "Bitwa pod Mohaczem odbyła się w 1526 r. Pokój z sułtanem z 1533 r. zapewnił Polsce bezpieczeństwo od strony Turcji na prawie 90 lat."
  },
  {
    "id": "R02_TUR_05",
    "section": "Turcja i Mazowsze",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia związane z ekspansją Imperium Osmańskiego w kierunku Europy Środkowej.",
    "options": [
      "Rozgromienie Węgrów pod Mohaczem",
      "Zdobycie Budy",
      "Zbliżenie się Turków do granic Polski",
      "Rozwiązanie zakonu kawalerów mieczowych",
      "Hołd pruski",
      "Przyłączenie Inflant do Polski i Litwy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W 1526 r. Turcy pokonali Węgrów pod Mohaczem, następnie zdobyli Budę i zbliżyli się do granic Polski."
  },
  {
    "id": "R02_TUR_06",
    "section": "Turcja i Mazowsze",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do polityki południowej Zygmunta Starego: bitwa pod Mohaczem, zdobycie Budy, pokój z sułtanem, hołd pruski.",
    "options": null,
    "answer": "hołd pruski",
    "explanation": "Hołd pruski dotyczył stosunków z Albrechtem Hohenzollernem i Prusami. Pozostałe elementy wiążą się z zagrożeniem osmańskim."
  },
  {
    "id": "R02_TUR_07",
    "section": "Turcja i Mazowsze",
    "type": "scenario",
    "prompt": "Po klęsce Węgier pod Mohaczem i zajęciu Budy Turcy zbliżają się do granic Polski. Zygmunt Stary nie może pomóc Węgrom i chce uchronić kraj przed wojną. Co robi?",
    "options": [
      "Zawiera pokój z sułtanem",
      "Składa hołd Albrechtowi Hohenzollernowi",
      "Oddaje Mazowsze Turcji",
      "Przyłącza Inflanty",
      "Sprzymierza się ze Szwecją przeciw Danii",
      "Rozwiązuje zakon krzyżacki"
    ],
    "answer": 0,
    "explanation": "Zygmunt Stary zawarł z sułtanem pokój w 1533 r., zapewniając Polsce bezpieczeństwo od strony Turcji na prawie 90 lat.",
    "image": "r02_imperium_osmanskie_wojsko.jpg"
  },
  {
    "id": "R02_TUR_08",
    "section": "Turcja i Mazowsze",
    "type": "riddle",
    "prompt": "Tytuł władcy Imperium Osmańskiego używany w rozdziale to...",
    "options": null,
    "answer": "sułtan",
    "altAnswers": [
      "sułtan",
      "sultan"
    ],
    "explanation": "Podręcznik wyjaśnia, że sułtan był władcą Imperium Osmańskiego."
  },
  {
    "id": "R02_TUR_09",
    "section": "Turcja i Mazowsze",
    "type": "single_choice",
    "prompt": "Dlaczego Zygmunt Stary mógł w 1529 r. przyłączyć Mazowsze do Polski?",
    "options": [
      "Wymarli Piastowie mazowieccy",
      "Mazowsze zostało zdobyte w bitwie pod Mohaczem",
      "Albrecht oddał Mazowsze w hołdzie pruskim",
      "Szwecja zrzekła się Mazowsza",
      "Bona kupiła Mazowsze za zyski z dóbr",
      "Zakon kawalerów mieczowych opuścił Mazowsze"
    ],
    "answer": 0,
    "explanation": "Po wygaśnięciu Piastów mazowieckich dotychczasowe lenno mogło zostać bezpośrednio przyłączone do Polski."
  },
  {
    "id": "R02_TUR_10",
    "section": "Turcja i Mazowsze",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia chronologicznie.",
    "options": null,
    "items": [
      "Pokój z sułtanem",
      "Śmierć Zygmunta Starego",
      "Przyłączenie Mazowsza",
      "Bitwa pod Mohaczem"
    ],
    "answer": [
      "Bitwa pod Mohaczem",
      "Przyłączenie Mazowsza",
      "Pokój z sułtanem",
      "Śmierć Zygmunta Starego"
    ],
    "explanation": "Kolejność wyznaczają daty 1526, 1529, 1533 i 1548."
  },
  {
    "id": "R02_AUG_01",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "single_choice",
    "prompt": "Od którego roku Zygmunt II August sprawował samodzielne rządy?",
    "options": [
      "1548",
      "1506",
      "1518",
      "1525",
      "1561",
      "1572"
    ],
    "answer": 0,
    "explanation": "Zygmunt II August objął samodzielne rządy w 1548 r., po śmierci Zygmunta Starego.",
    "image": "r02_zygmunt_august_portret.jpg"
  },
  {
    "id": "R02_AUG_02",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "true_false",
    "prompt": "Barbara Radziwiłłówna była Litwinką pochodzącą z jednego z najpotężniejszych rodów na Litwie.",
    "options": null,
    "answer": true,
    "explanation": "Tak. Radziwiłłowie należeli do najpotężniejszych rodów litewskich, a Barbara była Litwinką."
  },
  {
    "id": "R02_AUG_03",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "multi_select",
    "prompt": "Zaznacz informacje opisujące spór szlachty z Zygmuntem Augustem o Barbarę Radziwiłłównę.",
    "options": [
      "Szlachta obawiała się wpływu litewskich magnatów na sprawy Polski",
      "Szlachta sprzeciwiała się koronacji Barbary",
      "Szlachta żądała unieważnienia królewskiego małżeństwa",
      "Król ustąpił i zrezygnował z koronacji żony",
      "Barbara była córką Albrechta Hohenzollerna",
      "Spór zakończył się przyłączeniem Mazowsza"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Szlachta bała się wzrostu wpływów Radziwiłłów, sprzeciwiała się koronacji Barbary i żądała unieważnienia małżeństwa. Król się nie ugiął.",
    "image": "r02_barbara_radziwillowna_portret.jpg"
  },
  {
    "id": "R02_AUG_04",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "fill_in",
    "prompt": "Zygmunt II August zmarł bezpotomnie w roku __________, co oznaczało wygaśnięcie dynastii __________.",
    "options": null,
    "answer": [
      "1572",
      "Jagiellonów"
    ],
    "altAnswers": [
      [
        "1572",
        "1572 r."
      ],
      [
        "Jagiellonów",
        "Jagiellonowie",
        "dynastii Jagiellonów"
      ]
    ],
    "explanation": "Śmierć Zygmunta Augusta w 1572 r. bez potomka oznaczała wygaśnięcie dynastii Jagiellonów."
  },
  {
    "id": "R02_AUG_05",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "riddle",
    "prompt": "Litwinka, którą Zygmunt August potajemnie poślubił jeszcze za życia ojca, to...",
    "options": null,
    "answer": "Barbara Radziwiłłówna",
    "altAnswers": [
      "Barbara Radziwiłłówna",
      "Barbara Radziwillowna",
      "Barbara"
    ],
    "explanation": "Zygmunt August potajemnie poślubił Barbarę Radziwiłłównę. Po objęciu władzy doprowadził do jej koronacji mimo sprzeciwu szlachty."
  },
  {
    "id": "R02_AUG_06",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do zestawu języków, w których Zygmunt August swobodnie rozmawiał: łacina, włoski, niemiecki, turecki.",
    "options": null,
    "answer": "turecki",
    "explanation": "Podręcznik podaje, że Zygmunt August swobodnie rozmawiał po łacinie, włosku i niemiecku."
  },
  {
    "id": "R02_AUG_07",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "scenario",
    "prompt": "Nowy król ujawnia potajemne małżeństwo z Litwinką. Szlachta żąda jego unieważnienia i sprzeciwia się koronacji żony, ale monarcha nie ustępuje. Który władca znalazł się w tej sytuacji?",
    "options": [
      "Zygmunt II August",
      "Zygmunt I Stary",
      "Albrecht Hohenzollern",
      "Stefan Batory",
      "Zygmunt Waza",
      "Mikołaj Kopernik"
    ],
    "answer": 0,
    "explanation": "Był to Zygmunt II August. Mimo oporu szlachty doprowadził do koronacji Barbary Radziwiłłówny."
  },
  {
    "id": "R02_AUG_08",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "match",
    "prompt": "Połącz osobę lub ród z właściwą informacją.",
    "options": null,
    "left": [
      "Barbara Radziwiłłówna",
      "Radziwiłłowie",
      "Zygmunt II August",
      "Zygmunt I Stary"
    ],
    "right": [
      "Potajemnie poślubiona Litwinka",
      "Jeden z najpotężniejszych rodów na Litwie",
      "Zmarł bezpotomnie w 1572 r.",
      "Zmarł w 1548 r."
    ],
    "answer": {
      "Barbara Radziwiłłówna": "Potajemnie poślubiona Litwinka",
      "Radziwiłłowie": "Jeden z najpotężniejszych rodów na Litwie",
      "Zygmunt II August": "Zmarł bezpotomnie w 1572 r.",
      "Zygmunt I Stary": "Zmarł w 1548 r."
    },
    "explanation": "Informacje te wyjaśniają zarówno konflikt wokół Barbary, jak i zmianę władcy w 1548 r. oraz wygaśnięcie dynastii w 1572 r."
  },
  {
    "id": "R02_AUG_09",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "sort",
    "prompt": "Podziel informacje o Zygmuncie Auguście na dwie kategorie.",
    "options": null,
    "items": [
      "Rozmawiał po łacinie włosku i niemiecku",
      "Zbierał obrazy i księgi",
      "Utrzymywał dworską kapelę",
      "Potajemnie poślubił Barbarę Radziwiłłównę",
      "Nie doczekał się potomstwa"
    ],
    "categories": [
      "Wykształcenie i kultura",
      "Rodzina i następstwo"
    ],
    "answer": {
      "Wykształcenie i kultura": [
        "Rozmawiał po łacinie włosku i niemiecku",
        "Zbierał obrazy i księgi",
        "Utrzymywał dworską kapelę"
      ],
      "Rodzina i następstwo": [
        "Potajemnie poślubił Barbarę Radziwiłłównę",
        "Nie doczekał się potomstwa"
      ]
    },
    "explanation": "Zygmunt August był dobrze wykształcony i interesował się kulturą. Jego życie rodzinne miało znaczenie polityczne, a brak potomka doprowadził do wygaśnięcia dynastii.",
    "image": "r02_zygmunt_august_portret.jpg"
  },
  {
    "id": "R02_AUG_10",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Zygmuntem Augustem w poprawnej kolejności.",
    "options": null,
    "items": [
      "Koronacja Barbary Radziwiłłówny",
      "Śmierć Zygmunta Augusta",
      "Potajemny ślub z Barbarą Radziwiłłówną",
      "Śmierć Zygmunta Starego i objęcie samodzielnych rządów"
    ],
    "answer": [
      "Potajemny ślub z Barbarą Radziwiłłówną",
      "Śmierć Zygmunta Starego i objęcie samodzielnych rządów",
      "Koronacja Barbary Radziwiłłówny",
      "Śmierć Zygmunta Augusta"
    ],
    "explanation": "Ślub z Barbarą odbył się jeszcze za życia Zygmunta Starego. Po jego śmierci w 1548 r. Zygmunt August doprowadził do koronacji żony, a sam zmarł w 1572 r."
  },
  {
    "id": "R02_AUG_11",
    "section": "Zygmunt II August i Barbara Radziwiłłówna",
    "type": "single_choice",
    "prompt": "Co bezpośrednio spowodowało wygaśnięcie dynastii Jagiellonów w 1572 r.?",
    "options": [
      "Bezpotomna śmierć Zygmunta Augusta",
      "Śmierć Barbary Radziwiłłówny",
      "Rozwiązanie zakonu krzyżackiego",
      "Przyłączenie Mazowsza",
      "Pokój z sułtanem",
      "Podział Inflant"
    ],
    "answer": 0,
    "explanation": "Zygmunt August nie doczekał się potomstwa. Jego śmierć w 1572 r. zakończyła panowanie dynastii Jagiellonów."
  },
  {
    "id": "R02_INF_01",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "single_choice",
    "prompt": "Pod jaką nazwą przetrwał zakon krzyżacki w Inflantach po rozwiązaniu go w Prusach?",
    "options": [
      "Zakon kawalerów mieczowych",
      "Prusy Książęce",
      "Prusy Królewskie",
      "Zakon mazowiecki",
      "Księstwo Moskiewskie",
      "Unia północna"
    ],
    "answer": 0,
    "explanation": "W Prusach zakon rozwiązano w 1525 r., ale w Inflantach przetrwał jako zakon kawalerów mieczowych.",
    "image": "r02_inflanty_zamek_nad_baltykiem.jpg"
  },
  {
    "id": "R02_INF_02",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "multi_select",
    "prompt": "Które cztery państwa rywalizowały o ziemie słabego państwa zakonnego w Inflantach?",
    "options": [
      "Litwa",
      "Moskwa",
      "Dania",
      "Szwecja",
      "Imperium Osmańskie",
      "Prusy Królewskie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "O Inflanty rywalizowały Litwa, Moskwa, Dania i Szwecja. Spór dotyczył m.in. dostępu do portów i handlu nad Bałtykiem."
  },
  {
    "id": "R02_INF_03",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "true_false",
    "prompt": "Dania i Szwecja chciały ułatwić Litwie i Moskwie dostęp do handlu morskiego nad Bałtykiem.",
    "options": null,
    "answer": false,
    "explanation": "Nie. Dania i Szwecja nie chciały dopuścić Litwy i Moskwy do handlu morskiego, a zarazem chciały wzmocnić własną pozycję nad Bałtykiem."
  },
  {
    "id": "R02_INF_04",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "fill_in",
    "prompt": "Wielki mistrz zakonu kawalerów mieczowych rozwiązał zakon i poddał Inflanty Zygmuntowi Augustowi w roku __________, a pierwsza wojna północna trwała od roku __________ do roku __________.",
    "options": null,
    "answer": [
      "1561",
      "1563",
      "1570"
    ],
    "altAnswers": [
      [
        "1561",
        "1561 r."
      ],
      [
        "1563",
        "1563 r."
      ],
      [
        "1570",
        "1570 r."
      ]
    ],
    "explanation": "Inflanty zostały poddane Zygmuntowi Augustowi w 1561 r. Sprzeciw pozostałych państw doprowadził do wojny z lat 1563-1570."
  },
  {
    "id": "R02_INF_05",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "riddle",
    "prompt": "Litewskie miasto zdobyte przez oddziały moskiewskie w 1563 r. to...",
    "options": null,
    "answer": "Połock",
    "altAnswers": [
      "Połock",
      "Polock"
    ],
    "explanation": "W 1563 r. wojska moskiewskie zdobyły Połock, wydarzenie pokazane na ilustracji w rozdziale.",
    "image": "r02_polock_szturm_1563.jpg"
  },
  {
    "id": "R02_INF_06",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do czterech rywali o Inflanty: Litwa, Moskwa, Dania, Szwecja, Imperium Osmańskie.",
    "options": null,
    "answer": "Imperium Osmańskie",
    "explanation": "O Inflanty rywalizowały Litwa, Moskwa, Dania i Szwecja. Imperium Osmańskie występuje w rozdziale w innym kontekście."
  },
  {
    "id": "R02_INF_07",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "scenario",
    "prompt": "Wielki mistrz słabego zakonu w Inflantach jest zagrożony przez cztery państwa. Szuka opieki u polskiego króla, rozwiązuje zakon i oddaje Inflanty pod jego władzę. Któremu królowi je poddał?",
    "options": [
      "Zygmuntowi II Augustowi",
      "Zygmuntowi I Staremu",
      "Stefanowi Batoremu",
      "Zygmuntowi Wazie",
      "Albrechtowi Hohenzollernowi",
      "Mikołajowi Kopernikowi"
    ],
    "answer": 0,
    "explanation": "W 1561 r. wielki mistrz zakonu kawalerów mieczowych poddał Inflanty Zygmuntowi Augustowi.",
    "image": "r02_inflanty_zamek_nad_baltykiem.jpg"
  },
  {
    "id": "R02_INF_08",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "match",
    "prompt": "Połącz uczestnika sporu o Inflanty z właściwą informacją.",
    "options": null,
    "left": [
      "Litwa i Moskwa",
      "Dania i Szwecja",
      "Zygmunt II August",
      "Wielki mistrz zakonu kawalerów mieczowych"
    ],
    "right": [
      "Chciały portów nad Bałtykiem i zysków z handlu morskiego",
      "Chciały ograniczyć dostęp rywali do handlu i wzmocnić własną pozycję nad Bałtykiem",
      "Przyjął poddanie Inflant w 1561 r.",
      "Po rozwiązaniu zakonu został świeckim księciem części Inflant"
    ],
    "answer": {
      "Litwa i Moskwa": "Chciały portów nad Bałtykiem i zysków z handlu morskiego",
      "Dania i Szwecja": "Chciały ograniczyć dostęp rywali do handlu i wzmocnić własną pozycję nad Bałtykiem",
      "Zygmunt II August": "Przyjął poddanie Inflant w 1561 r.",
      "Wielki mistrz zakonu kawalerów mieczowych": "Po rozwiązaniu zakonu został świeckim księciem części Inflant"
    },
    "explanation": "Rywalizacja o Inflanty łączyła interesy handlowe nad Bałtykiem z decyzją wielkiego mistrza o poddaniu ziem Zygmuntowi Augustowi."
  },
  {
    "id": "R02_INF_09",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "sort",
    "prompt": "Przyporządkuj państwa do stron pierwszej wojny północnej.",
    "options": null,
    "items": [
      "Polska",
      "Litwa",
      "Dania",
      "Moskwa",
      "Szwecja"
    ],
    "categories": [
      "Sojusz Polski i Litwy",
      "Przeciwnicy"
    ],
    "answer": {
      "Sojusz Polski i Litwy": [
        "Polska",
        "Litwa",
        "Dania"
      ],
      "Przeciwnicy": [
        "Moskwa",
        "Szwecja"
      ]
    },
    "explanation": "W pierwszej wojnie północnej Polska i Litwa sprzymierzyły się z Danią przeciwko Moskwie i Szwecji."
  },
  {
    "id": "R02_INF_10",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Prusami i Inflantami w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Zdobycie Połocka przez wojska moskiewskie",
      "Rozwiązanie zakonu krzyżackiego w Prusach",
      "Zakończenie pierwszej wojny północnej",
      "Rozwiązanie zakonu kawalerów mieczowych i poddanie Inflant"
    ],
    "answer": [
      "Rozwiązanie zakonu krzyżackiego w Prusach",
      "Rozwiązanie zakonu kawalerów mieczowych i poddanie Inflant",
      "Zdobycie Połocka przez wojska moskiewskie",
      "Zakończenie pierwszej wojny północnej"
    ],
    "explanation": "Kolejność wyznaczają lata 1525, 1561, 1563 i 1570.",
    "image": "r02_polock_szturm_1563.jpg"
  },
  {
    "id": "R02_INF_11",
    "section": "Inflanty i pierwsza wojna północna",
    "type": "single_choice",
    "prompt": "Jak zakończyła się pierwsza wojna północna z lat 1563-1570?",
    "options": [
      "Inflanty podzielono między uczestników wojny",
      "Całe Inflanty przyłączono do Moskwy",
      "Dania stała się lennem Polski",
      "Szwecja oddała Polsce swoją koronę",
      "Zakon kawalerów mieczowych odzyskał całe państwo",
      "Prusy Książęce zostały wcielone do Polski"
    ],
    "answer": 0,
    "explanation": "Kilkuletnie walki nie przyniosły rozstrzygnięcia, dlatego Inflanty zostały podzielone między uczestników wojny."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia, które miały miejsce przed końcem 1529 r.",
    "options": [
      "Objęcie władzy przez Zygmunta Starego",
      "Ślub Zygmunta Starego z Boną",
      "Ostatnia wojna polsko-krzyżacka",
      "Hołd pruski",
      "Przyłączenie Mazowsza",
      "Pokój z sułtanem",
      "Śmierć Zygmunta Starego"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Przed końcem 1529 r. wydarzyły się kolejno: objęcie władzy w 1506 r., ślub w 1518 r., wojna 1519-1521, hołd w 1525 r. i przyłączenie Mazowsza w 1529 r. Pokój z sułtanem zawarto w 1533 r., a Zygmunt Stary zmarł w 1548 r."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z decyzją lub wydarzeniem.",
    "options": null,
    "left": [
      "Zygmunt I Stary",
      "Albrecht Hohenzollern",
      "Zygmunt II August",
      "Wielki mistrz zakonu kawalerów mieczowych"
    ],
    "right": [
      "Zawarł pokój z sułtanem w 1533 r.",
      "W 1525 r. stał się świeckim księciem Prus Książęcych",
      "W 1561 r. przyjął poddanie Inflant",
      "Po rozwiązaniu zakonu został świeckim księciem części Inflant"
    ],
    "answer": {
      "Zygmunt I Stary": "Zawarł pokój z sułtanem w 1533 r.",
      "Albrecht Hohenzollern": "W 1525 r. stał się świeckim księciem Prus Książęcych",
      "Zygmunt II August": "W 1561 r. przyjął poddanie Inflant",
      "Wielki mistrz zakonu kawalerów mieczowych": "Po rozwiązaniu zakonu został świeckim księciem części Inflant"
    },
    "explanation": "Zadanie łączy politykę obu Zygmuntów z dwoma przypadkami rozwiązania zakonów i utworzenia świeckich księstw."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż sześć wydarzeń od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Poddanie Inflant Zygmuntowi Augustowi",
      "Hołd pruski",
      "Wygaśnięcie dynastii Jagiellonów",
      "Drugi pokój toruński",
      "Przyłączenie Mazowsza",
      "Objęcie władzy przez Zygmunta Starego"
    ],
    "answer": [
      "Drugi pokój toruński",
      "Objęcie władzy przez Zygmunta Starego",
      "Hołd pruski",
      "Przyłączenie Mazowsza",
      "Poddanie Inflant Zygmuntowi Augustowi",
      "Wygaśnięcie dynastii Jagiellonów"
    ],
    "explanation": "Daty tych wydarzeń to kolejno 1466, 1506, 1525, 1529, 1561 i 1572."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Od hołdu pruskiego w roku __________ do pierwszego rozbioru Polski w roku __________ minęło __________ lat.",
    "options": null,
    "answer": [
      "1525",
      "1772",
      "247"
    ],
    "altAnswers": [
      [
        "1525",
        "1525 r."
      ],
      [
        "1772",
        "1772 r."
      ],
      [
        "247",
        "247 lat"
      ]
    ],
    "explanation": "W części poświęconej ocenie hołdu pruskiego podano, że od 1525 do 1772 r. minęło 247 lat. To argument przeciw obciążaniu Zygmunta Starego odpowiedzialnością za wydarzenia odległe o ponad dwa stulecia."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie poprawnie porównuje los zakonu w Prusach i w Inflantach po 1525 r.?",
    "options": [
      "W Prusach zakon rozwiązano w 1525 r., a w Inflantach przetrwał jeszcze jako zakon kawalerów mieczowych",
      "W Inflantach zakon rozwiązano wcześniej niż w Prusach",
      "W obu miejscach zakon rozwiązano dokładnie w 1525 r.",
      "W Prusach zakon poddał się Zygmuntowi Augustowi w 1561 r.",
      "W Inflantach zakon przekształcił się w Prusy Książęce",
      "W obu miejscach zakon pozostał bez zmian do 1572 r."
    ],
    "answer": 0,
    "explanation": "Albrecht rozwiązał zakon w Prusach w 1525 r. W Inflantach zakon przetrwał jako zakon kawalerów mieczowych aż do 1561 r.",
    "image": "r02_hold_pruski_krakow.jpg"
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Ktoś twierdzi, że Zygmunt Stary powinien był w 1525 r. przewidzieć rozbiory Polski w XVIII w. Który argument podważa takie rozumowanie?",
    "options": [
      "Od hołdu pruskiego do pierwszego rozbioru minęło 247 lat, więc nie należy oceniać decyzji króla tak, jakby znał odległą przyszłość",
      "Zygmunt Stary nie wiedział, że istnieją Prusy",
      "Hołd pruski odbył się już po pierwszym rozbiorze",
      "Prusy Książęce nigdy nie stały się zagrożeniem dla Polski",
      "Albrecht był królem Polski",
      "Rozbiory nastąpiły za życia Zygmunta Augusta"
    ],
    "answer": 0,
    "explanation": "Rozdział zwraca uwagę na 247 lat dzielących hołd pruski od pierwszego rozbioru i ostrzega przed ocenianiem dawnych decyzji z wiedzą o bardzo odległych skutkach."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie była związana z konfliktem polsko-krzyżackim ani jego opisanymi następstwami: Albrecht Hohenzollern, Marcin Luter, Mikołaj Kopernik, Barbara Radziwiłłówna.",
    "options": null,
    "answer": "Barbara Radziwiłłówna",
    "explanation": "Albrecht był wielkim mistrzem, Luter doradzał mu sekularyzację, a Kopernik bronił Olsztyna przed Krzyżakami. Barbara Radziwiłłówna wiąże się z życiem Zygmunta Augusta."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Zarówno Albrecht Hohenzollern w Prusach, jak i wielki mistrz zakonu kawalerów mieczowych w Inflantach po rozwiązaniu swoich zakonów zostali świeckimi książętami.",
    "options": null,
    "answer": true,
    "explanation": "Tak. Albrecht został świeckim księciem Prus Książęcych, a wielki mistrz inflancki został świeckim księciem niewielkiej części Inflant."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj działania polityczne do właściwego władcy.",
    "options": null,
    "items": [
      "Przyjął hołd pruski",
      "Przyłączył Mazowsze",
      "Zawarł pokój z sułtanem",
      "Przyjął poddanie Inflant",
      "Wziął udział w pierwszej wojnie północnej",
      "Doprowadził do koronacji Barbary Radziwiłłówny"
    ],
    "categories": [
      "Zygmunt I Stary",
      "Zygmunt II August"
    ],
    "answer": {
      "Zygmunt I Stary": [
        "Przyjął hołd pruski",
        "Przyłączył Mazowsze",
        "Zawarł pokój z sułtanem"
      ],
      "Zygmunt II August": [
        "Przyjął poddanie Inflant",
        "Wziął udział w pierwszej wojnie północnej",
        "Doprowadził do koronacji Barbary Radziwiłłówny"
      ]
    },
    "explanation": "Zygmunt Stary prowadził politykę wobec Prus, Mazowsza i Turcji, a Zygmunt August wobec Inflant i przeciwników w pierwszej wojnie północnej oraz bronił swojego małżeństwa z Barbarą."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Syn Katarzyny Jagiellonki urodzony podczas uwięzienia rodziców na zamku Gripsholm, który później został królem Polski, to...",
    "options": null,
    "answer": "Zygmunt Waza",
    "altAnswers": [
      "Zygmunt Waza",
      "Zygmunt III Waza"
    ],
    "explanation": "W zamku Gripsholm urodził się syn Katarzyny Jagiellonki, Zygmunt Waza, który później został królem Polski."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która siostra Zygmunta Augusta wyszła za mąż za brata króla Szwecji i została uwięziona z mężem na zamku Gripsholm?",
    "options": [
      "Katarzyna Jagiellonka",
      "Barbara Radziwiłłówna",
      "Bona",
      "Anna Mazowiecka",
      "Katarzyna Hohenzollern",
      "Barbara Jagiellonka"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że była to Katarzyna Jagiellonka. W czasie uwięzienia na Gripsholm urodził się jej syn Zygmunt Waza."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne zestawienia daty i wydarzenia.",
    "options": [
      "1525 - rozwiązanie zakonu krzyżackiego w Prusach",
      "1561 - rozwiązanie zakonu kawalerów mieczowych",
      "1563 - początek pierwszej wojny północnej",
      "1570 - koniec pierwszej wojny północnej",
      "1529 - hołd pruski",
      "1533 - przyłączenie Mazowsza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zakon w Prusach rozwiązano w 1525 r., zakon w Inflantach w 1561 r., a pierwsza wojna północna trwała w latach 1563-1570. Hołd pruski był w 1525 r., Mazowsze przyłączono w 1529 r."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Porównujesz dwa wydarzenia: w pierwszym wielki mistrz rozwiązuje zakon w Prusach i składa hołd Zygmuntowi Staremu; w drugim wielki mistrz rozwiązuje zakon w Inflantach i poddaje je Zygmuntowi Augustowi. Które lata odpowiadają tym wydarzeniom?",
    "options": [
      "1525 i 1561",
      "1519 i 1521",
      "1529 i 1533",
      "1548 i 1572",
      "1563 i 1570",
      "1506 i 1518"
    ],
    "answer": 0,
    "explanation": "Sekularyzacja państwa Albrechta i hołd pruski przypadły na 1525 r., a rozwiązanie zakonu kawalerów mieczowych i poddanie Inflant na 1561 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Czasy zygmuntowskie",
  icon: "👑",
  sectionOrder: [
    "Zygmunt I Stary i złoty wiek",
    "Wojna z zakonem i hołd pruski",
    "Turcja i Mazowsze",
    "Zygmunt II August i Barbara Radziwiłłówna",
    "Inflanty i pierwsza wojna północna"
  ],
  sectionIcons: {
    "Zygmunt I Stary i złoty wiek": "👑",
    "Wojna z zakonem i hołd pruski": "⚔️",
    "Turcja i Mazowsze": "🛡️",
    "Zygmunt II August i Barbara Radziwiłłówna": "💍",
    "Inflanty i pierwsza wojna północna": "⛵"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
