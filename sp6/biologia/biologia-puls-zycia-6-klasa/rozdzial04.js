// Skróty sekcji (do identyfikatorów ćwiczeń):
//   RYB  = Ryby - środowisko i budowa
//   ZRY  = Ryby - różnorodność i znaczenie
//   PLA  = Płazy - środowisko i rozwój
//   ZPL  = Płazy - różnorodność i ochrona
//   GAD  = Gady - życie na lądzie
//   ZGA  = Gady - różnorodność i znaczenie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_RYB_01",
    "section": "Ryby - środowisko i budowa",
    "type": "single_choice",
    "prompt": "W jakich środowiskach wodnych żyją ryby?",
    "options": [
      "Tylko w ciepłych morzach tropikalnych",
      "Tylko w wodach słodkich",
      "We wszystkich typach środowisk wodnych",
      "Tylko w strefie przybrzeżnej mórz",
      "Wyłącznie w rzekach i strumieniach",
      "Tylko w wodach Arktyki"
    ],
    "answer": 2,
    "explanation": "Ryby zamieszkują zarówno wody słone, jak i słodkie oraz różne części zbiorników wodnych."
  },
  {
    "id": "R04_RYB_02",
    "section": "Ryby - środowisko i budowa",
    "type": "match",
    "prompt": "Połącz element budowy ryby z jego funkcją.",
    "options": null,
    "image": "r04_budowa_ryby.jpg",
    "left": [
      "łuski",
      "linia boczna",
      "płetwa grzbietowa",
      "płetwy piersiowe i brzuszne"
    ],
    "right": [
      "ochrona ciała przed uszkodzeniami",
      "informowanie o kierunku i szybkości ruchów wody",
      "utrzymywanie równowagi",
      "sterowanie ciałem"
    ],
    "answer": {
      "łuski": "ochrona ciała przed uszkodzeniami",
      "linia boczna": "informowanie o kierunku i szybkości ruchów wody",
      "płetwa grzbietowa": "utrzymywanie równowagi",
      "płetwy piersiowe i brzuszne": "sterowanie ciałem"
    },
    "explanation": "Łuski chronią ciało, linia boczna odbiera ruchy wody, a płetwy pomagają w utrzymaniu równowagi i sterowaniu."
  },
  {
    "id": "R04_RYB_03",
    "section": "Ryby - środowisko i budowa",
    "type": "true_false",
    "prompt": "Temperatura ciała ryb zmienia się w zależności od temperatury środowiska.",
    "options": null,
    "answer": true,
    "explanation": "Ryby są zwierzętami zmiennocieplnymi, więc temperatura ich ciała zależy od temperatury otoczenia."
  },
  {
    "id": "R04_RYB_04",
    "section": "Ryby - środowisko i budowa",
    "type": "multi_select",
    "prompt": "Zaznacz cechy, które ułatwiają rybom życie w wodzie.",
    "options": [
      "opływowy kształt ciała",
      "skóra pokryta śluzem",
      "obecność płetw",
      "blaszkowate skrzela",
      "rogowe tarczki na głowie",
      "pazury na palcach"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Opływowy kształt, śluz, płetwy i skrzela to przystosowania ryb do pływania i oddychania w wodzie."
  },
  {
    "id": "R04_RYB_05",
    "section": "Ryby - środowisko i budowa",
    "type": "fill_in",
    "prompt": "Ryby oddychają za pomocą __________, które są omywane wodą dostarczającą tlen.",
    "options": null,
    "answer": [
      "skrzeli"
    ],
    "altAnswers": [
      [
        "skrzeli",
        "skrzelami"
      ]
    ],
    "explanation": "Skrzela pobierają tlen rozpuszczony w wodzie i oddają do wody dwutlenek węgla."
  },
  {
    "id": "R04_RYB_06",
    "section": "Ryby - środowisko i budowa",
    "type": "riddle",
    "prompt": "Narząd ryby informujący o kierunku i szybkości ruchów wody to...",
    "options": null,
    "answer": "linia boczna",
    "altAnswers": [
      "linia boczna",
      "linia boczna ryby"
    ],
    "explanation": "Linia boczna ma postać kanałów biegnących po obu stronach ciała ryby."
  },
  {
    "id": "R04_RYB_07",
    "section": "Ryby - środowisko i budowa",
    "type": "scenario",
    "prompt": "Podczas tarła samica składa ikrę, a samiec polewa ją mleczem zawierającym plemniki. Jak nazywa się taki sposób zapłodnienia?",
    "options": [
      "zapłodnienie wewnętrzne",
      "zapłodnienie zewnętrzne",
      "rozwój prosty",
      "rozwój złożony",
      "odrętwienie zimowe",
      "wylinka"
    ],
    "answer": 1,
    "image": "r04_tarlo_ryb.jpg",
    "explanation": "U większości ryb do połączenia komórki jajowej z plemnikiem dochodzi poza organizmem samicy, czyli zachodzi zapłodnienie zewnętrzne."
  },
  {
    "id": "R04_RYB_08",
    "section": "Ryby - środowisko i budowa",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania ryb jajorodnych w poprawnej kolejności.",
    "options": null,
    "items": [
      "z zapłodnionych jaj wylęga się potomstwo",
      "samiec polewa ikrę mleczem",
      "samica składa ikrę",
      "dochodzi do zapłodnienia"
    ],
    "answer": [
      "samica składa ikrę",
      "samiec polewa ikrę mleczem",
      "dochodzi do zapłodnienia",
      "z zapłodnionych jaj wylęga się potomstwo"
    ],
    "explanation": "Najpierw samica składa ikrę, potem samiec polewa ją mleczem, dochodzi do zapłodnienia i z jaj wylęga się potomstwo."
  },
  {
    "id": "R04_RYB_09",
    "section": "Ryby - środowisko i budowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do przystosowań większości ryb: łuski, płetwy, skrzela, powieki.",
    "options": null,
    "answer": "powieki",
    "explanation": "Oczy większości ryb nie mają powiek, ponieważ są stale omywane przez wodę."
  },
  {
    "id": "R04_ZRY_01",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "single_choice",
    "prompt": "Dlaczego ryby mają różne kształty ciała?",
    "options": [
      "Ponieważ wszystkie żyją w tym samym miejscu zbiornika",
      "Ponieważ zajmują różne części zbiorników i prowadzą odmienny tryb życia",
      "Ponieważ zmieniają kształt ciała w czasie tarła",
      "Ponieważ ryby roślinożerne zawsze są okrągłe",
      "Ponieważ kształt ciała zależy wyłącznie od wieku",
      "Ponieważ każda ryba ma ciało spłaszczone"
    ],
    "answer": 1,
    "image": "r04_ksztalty_ryb.jpg",
    "explanation": "Kształt ciała ryb jest związany z miejscem życia i sposobem poruszania się, na przykład w toni wodnej, przy dnie albo wśród skał i roślin."
  },
  {
    "id": "R04_ZRY_02",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady ryb lub środowisk do kształtu ciała.",
    "options": null,
    "items": [
      "tuńczyk w otwartej toni wodnej",
      "patelnica przy piaszczystym dnie",
      "murena w szczelinach rafy",
      "ryba szybko pływająca w toni",
      "ryba ukryta pod warstwą piasku",
      "ryba omijająca skały i rośliny"
    ],
    "categories": [
      "opływowy kształt",
      "silnie spłaszczone ciało",
      "wydłużone ciało"
    ],
    "answer": {
      "opływowy kształt": [
        "tuńczyk w otwartej toni wodnej",
        "ryba szybko pływająca w toni"
      ],
      "silnie spłaszczone ciało": [
        "patelnica przy piaszczystym dnie",
        "ryba ukryta pod warstwą piasku"
      ],
      "wydłużone ciało": [
        "murena w szczelinach rafy",
        "ryba omijająca skały i rośliny"
      ]
    },
    "explanation": "Ryby z toni wodnej zwykle mają ciało opływowe, ryby denne bywają spłaszczone, a gatunki żyjące wśród przeszkód często są wydłużone."
  },
  {
    "id": "R04_ZRY_03",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "true_false",
    "prompt": "Ryby mogą żyć samotnie albo tworzyć duże stada zwane ławicami.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że ryby żyją samotnie lub skupiają się w duże stada, które nazywamy ławicami."
  },
  {
    "id": "R04_ZRY_04",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady znaczenia ryb dla człowieka.",
    "options": [
      "są źródłem mięsa",
      "dostarczają ikry spożywanej jako kawior",
      "służą do pozyskiwania tranu",
      "umożliwiają ocenę czystości wód",
      "wytwarzają jad do produkcji leków przeciwbólowych",
      "zawsze niszczą rośliny uprawne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ryby są wykorzystywane jako pokarm, źródło ikry i tranu, a niektóre gatunki są wskaźnikami czystości wód."
  },
  {
    "id": "R04_ZRY_05",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "match",
    "prompt": "Połącz rybę z opisaną cechą lub zachowaniem.",
    "options": null,
    "image": "r04_obrona_ryb.jpg",
    "left": [
      "żaglica",
      "skorpena",
      "pensetnik dwuoki",
      "makrela",
      "rekin wielorybi"
    ],
    "right": [
      "najszybsza ryba świata",
      "drapieżnik z kolcami jadowymi",
      "ma plamę nazywaną fałszywym okiem",
      "żyje w ławicach",
      "łagodny planktonożerca"
    ],
    "answer": {
      "żaglica": "najszybsza ryba świata",
      "skorpena": "drapieżnik z kolcami jadowymi",
      "pensetnik dwuoki": "ma plamę nazywaną fałszywym okiem",
      "makrela": "żyje w ławicach",
      "rekin wielorybi": "łagodny planktonożerca"
    },
    "explanation": "Przykłady z rozdziału pokazują różne sposoby polowania, obrony i życia ryb."
  },
  {
    "id": "R04_ZRY_06",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "single_choice",
    "prompt": "Z jakich ryb pozyskuje się kawior czerwony i czarny?",
    "options": [
      "czerwony z łososi i czarny z jesiotrów",
      "czerwony z dorszy i czarny z makreli",
      "czerwony z tuńczyków i czarny z rekinów",
      "czerwony z pławikoników i czarny z mureny",
      "czerwony z pstrągów i czarny ze skorpen",
      "oba rodzaje tylko z karpi"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że kawior czerwony pozyskuje się z łososi, a czarny z jesiotrów."
  },
  {
    "id": "R04_ZRY_07",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "fill_in",
    "prompt": "Nadmiernym połowom ryb zapobiega stosowanie sieci o odpowiednich rozmiarach __________.",
    "options": null,
    "answer": [
      "oczek"
    ],
    "altAnswers": [
      [
        "oczek",
        "oczek sieci"
      ]
    ],
    "explanation": "Odpowiednie rozmiary oczek sieci ograniczają wyławianie zbyt małych ryb."
  },
  {
    "id": "R04_ZRY_08",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "scenario",
    "prompt": "W strumieniu żyją ryby wymagające czystej i dobrze natlenionej wody. Po zanieczyszczeniu wody ich liczba szybko maleje. Jaką rolę mogą pełnić takie ryby?",
    "options": [
      "wskaźników czystości wód",
      "narządów oddechowych",
      "gatunków składających skrzek",
      "błon płodowych",
      "zwierząt stałocieplnych",
      "roślin wodnych"
    ],
    "answer": 0,
    "explanation": "Niektóre gatunki ryb mogą żyć tylko w wodzie czystej i dobrze natlenionej, dlatego wskazują stan czystości wód."
  },
  {
    "id": "R04_ZRY_09",
    "section": "Ryby - różnorodność i znaczenie",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm niebędący rybą: tuńczyk, makrela, dorsz, ropucha.",
    "options": null,
    "answer": "ropucha",
    "explanation": "Tuńczyk, makrela i dorsz to ryby, a ropucha jest płazem."
  },
  {
    "id": "R04_PLA_01",
    "section": "Płazy - środowisko i rozwój",
    "type": "single_choice",
    "prompt": "Dlaczego większość płazów nazywa się zwierzętami dwuśrodowiskowymi?",
    "options": [
      "Bo część życia spędzają na lądzie i część w wodzie",
      "Bo mają dwa rodzaje łusek",
      "Bo oddychają wyłącznie skrzelami przez całe życie",
      "Bo żyją tylko w wodach słonych",
      "Bo zawsze mają dwie pary skrzydeł",
      "Bo składają jaja wyłącznie w suchym piasku"
    ],
    "answer": 0,
    "explanation": "Większość płazów żyje na lądzie, ale na czas rozrodu wędruje do zbiorników wody słodkiej."
  },
  {
    "id": "R04_PLA_02",
    "section": "Płazy - środowisko i rozwój",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy płazów ułatwiające życie w wodzie i na lądzie.",
    "options": [
      "cienka i wilgotna skóra",
      "skóra dobrze ukrwiona",
      "błona pławna między palcami kończyn tylnych",
      "powieki chroniące oczy",
      "rogowe łuski i tarczki",
      "płetwa ogonowa u dorosłej żaby"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_budowa_zaby.jpg",
    "explanation": "Cienka wilgotna skóra, dobre ukrwienie, błona pławna i powieki pomagają płazom funkcjonować w wodzie i na lądzie."
  },
  {
    "id": "R04_PLA_03",
    "section": "Płazy - środowisko i rozwój",
    "type": "true_false",
    "prompt": "Płazy występują na wszystkich kontynentach poza Antarktydą.",
    "options": null,
    "answer": true,
    "explanation": "Jako zwierzęta zmiennocieplne płazy nie występują na Antarktydzie, gdzie skrajnie niska temperatura utrzymuje się przez cały rok."
  },
  {
    "id": "R04_PLA_04",
    "section": "Płazy - środowisko i rozwój",
    "type": "match",
    "prompt": "Połącz cechę budowy żaby z jej znaczeniem.",
    "options": null,
    "image": "r04_budowa_zaby.jpg",
    "left": [
      "skóra",
      "powieki",
      "nozdrza na górnej stronie głowy",
      "błona pławna"
    ],
    "right": [
      "umożliwia wymianę gazową i wchłanianie wody",
      "chronią i nawilżają oczy",
      "pozwalają oddychać przy powierzchni wody",
      "ułatwia pływanie"
    ],
    "answer": {
      "skóra": "umożliwia wymianę gazową i wchłanianie wody",
      "powieki": "chronią i nawilżają oczy",
      "nozdrza na górnej stronie głowy": "pozwalają oddychać przy powierzchni wody",
      "błona pławna": "ułatwia pływanie"
    },
    "explanation": "Budowa żaby łączy cechy potrzebne w wodzie i na lądzie."
  },
  {
    "id": "R04_PLA_05",
    "section": "Płazy - środowisko i rozwój",
    "type": "fill_in",
    "prompt": "Większość dorosłych płazów prowadzi wymianę gazową przez __________ i __________.",
    "options": null,
    "answer": [
      "płuca",
      "skórę"
    ],
    "altAnswers": [
      [
        "płuca",
        "pluca"
      ],
      [
        "skórę",
        "skora",
        "skórę"
      ]
    ],
    "explanation": "Dorosłe płazy oddychają płucami, a w wymianie gazowej uczestniczy również ich cienka i wilgotna skóra."
  },
  {
    "id": "R04_PLA_06",
    "section": "Płazy - środowisko i rozwój",
    "type": "riddle",
    "prompt": "Jaja żab składane do wody nazywamy...",
    "options": null,
    "answer": "skrzek",
    "altAnswers": [
      "skrzek",
      "skrzekiem"
    ],
    "explanation": "Samice żab składają do wody tysiące jaj, które nazywamy skrzekiem."
  },
  {
    "id": "R04_PLA_07",
    "section": "Płazy - środowisko i rozwój",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju żaby trawnej w poprawnej kolejności.",
    "options": null,
    "image": "r04_rozwoj_zaby.jpg",
    "items": [
      "dorosła żaba",
      "skrzek w wodzie",
      "kijanka oddychająca skrzelami",
      "przeobrażanie kijanki"
    ],
    "answer": [
      "skrzek w wodzie",
      "kijanka oddychająca skrzelami",
      "przeobrażanie kijanki",
      "dorosła żaba"
    ],
    "explanation": "Żaba rozwija się od jaj w wodzie przez kijankę i przeobrażenie do osobnika dorosłego."
  },
  {
    "id": "R04_PLA_08",
    "section": "Płazy - środowisko i rozwój",
    "type": "scenario",
    "prompt": "W wodzie wylęga się larwa płaza. Ma ogon zakończony płetwą, odżywia się głównie pokarmem roślinnym i oddycha skrzelami. Jak nazywa się ta larwa?",
    "options": [
      "kijanka",
      "ikra",
      "pętówka",
      "zaskroniec",
      "skrzek",
      "mlecz"
    ],
    "answer": 0,
    "explanation": "Larwa płaza nazywa się kijanką; różni się budową i trybem życia od dorosłego płaza."
  },
  {
    "id": "R04_PLA_09",
    "section": "Płazy - środowisko i rozwój",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do rozmnażania i rozwoju płazów: skrzek, kijanka, przeobrażenie, ikra.",
    "options": null,
    "answer": "ikra",
    "explanation": "Ikra to jaja ryb, natomiast skrzek i kijanka dotyczą rozwoju płazów."
  },
  {
    "id": "R04_ZPL_01",
    "section": "Płazy - różnorodność i ochrona",
    "type": "single_choice",
    "prompt": "Jakie trzy główne grupy płazów wyróżniono w rozdziale?",
    "options": [
      "ogoniaste, bezogonowe i beznogie",
      "jajorodne, żyworodne i łuskonośne",
      "wodne, morskie i pustynne",
      "węże, żółwie i krokodyle",
      "ryby, płazy i gady",
      "drapieżne, roślinożerne i planktonożerne"
    ],
    "answer": 0,
    "image": "r04_grupy_plazow.jpg",
    "explanation": "Płazy dzieli się na ogoniaste, bezogonowe i beznogie na podstawie budowy zewnętrznej."
  },
  {
    "id": "R04_ZPL_02",
    "section": "Płazy - różnorodność i ochrona",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do grup płazów.",
    "options": null,
    "items": [
      "salamandra plamista",
      "traszka",
      "żaba",
      "ropucha",
      "rzekotka",
      "marszczelec"
    ],
    "categories": [
      "płazy ogoniaste",
      "płazy bezogonowe",
      "płazy beznogie"
    ],
    "answer": {
      "płazy ogoniaste": [
        "salamandra plamista",
        "traszka"
      ],
      "płazy bezogonowe": [
        "żaba",
        "ropucha",
        "rzekotka"
      ],
      "płazy beznogie": [
        "marszczelec"
      ]
    },
    "explanation": "Salamandra i traszka mają ogon, żaby i ropuchy nie mają ogona, a marszczelec należy do płazów beznogich."
  },
  {
    "id": "R04_ZPL_03",
    "section": "Płazy - różnorodność i ochrona",
    "type": "true_false",
    "prompt": "Wszystkie płazy żyjące w Polsce podlegają ochronie gatunkowej.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że ochronie gatunkowej podlegają wszystkie płazy w Polsce."
  },
  {
    "id": "R04_ZPL_04",
    "section": "Płazy - różnorodność i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz działania, które pomagają chronić płazy.",
    "options": [
      "dbanie o istniejące oczka wodne",
      "tworzenie nowych oczek wodnych",
      "budowanie tuneli pod drogami",
      "przenoszenie płazów przez drogę przy przenośnych ogrodzeniach",
      "osuszanie zbiorników rozrodczych",
      "zanieczyszczanie wód pestycydami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Płazy chroni się przez zachowanie i tworzenie zbiorników wodnych oraz przez zabezpieczanie ich wędrówek przez drogi."
  },
  {
    "id": "R04_ZPL_05",
    "section": "Płazy - różnorodność i ochrona",
    "type": "match",
    "prompt": "Połącz płaza z cechą opisaną w rozdziale.",
    "options": null,
    "image": "r04_plazy_w_polsce.jpg",
    "left": [
      "rzekotka drzewna",
      "ropucha",
      "kumak",
      "salamandra plamista",
      "grzebiuszka ziemna"
    ],
    "right": [
      "ma przylgi na długich palcach",
      "ma chropowatą skórę z brodawkami",
      "pokazuje jaskrawe plamy na brzuchu",
      "jaskrawym ubarwieniem odstrasza drapieżniki",
      "ukrywa się w norach w piaszczystej glebie"
    ],
    "answer": {
      "rzekotka drzewna": "ma przylgi na długich palcach",
      "ropucha": "ma chropowatą skórę z brodawkami",
      "kumak": "pokazuje jaskrawe plamy na brzuchu",
      "salamandra plamista": "jaskrawym ubarwieniem odstrasza drapieżniki",
      "grzebiuszka ziemna": "ukrywa się w norach w piaszczystej glebie"
    },
    "explanation": "Różne gatunki płazów rozpoznaje się po charakterystycznych cechach budowy i zachowania."
  },
  {
    "id": "R04_ZPL_06",
    "section": "Płazy - różnorodność i ochrona",
    "type": "scenario",
    "prompt": "Wiosną żaby wędrują do zbiornika na gody, a ich trasa przecina ruchliwą drogę. Które rozwiązanie najlepiej zmniejszy liczbę ginących płazów?",
    "options": [
      "budowa tunelu pod drogą i ustawienie ogrodzeń naprowadzających",
      "osuszenie pobliskiego stawu",
      "poszerzenie jezdni bez przejść dla płazów",
      "wyłapywanie wszystkich płazów do akwariów",
      "usuwanie roślinności przy zbiorniku",
      "zanieczyszczenie rowów przydrożnych"
    ],
    "answer": 0,
    "image": "r04_ochrona_plazow_droga.jpg",
    "explanation": "Tunele, tablice ostrzegawcze i przenośne ogrodzenia pomagają chronić płazy podczas sezonowych wędrówek."
  },
  {
    "id": "R04_ZPL_07",
    "section": "Płazy - różnorodność i ochrona",
    "type": "fill_in",
    "prompt": "Płazy pomagają człowiekowi, ponieważ zjadają __________ i __________ niszczące rośliny uprawne.",
    "options": null,
    "answer": [
      "owady",
      "ślimaki"
    ],
    "altAnswers": [
      [
        "owady",
        "owadami"
      ],
      [
        "ślimaki",
        "slimaki",
        "ślimaki"
      ]
    ],
    "explanation": "Dorosłe płazy odżywiają się między innymi owadami i ślimakami, które mogą być szkodnikami upraw."
  },
  {
    "id": "R04_ZPL_08",
    "section": "Płazy - różnorodność i ochrona",
    "type": "riddle",
    "prompt": "Płaz sprowadzony do Australii do walki ze szkodnikami trzciny cukrowej, który sam stał się problemem, to...",
    "options": null,
    "answer": "ropucha olbrzymia",
    "altAnswers": [
      "ropucha olbrzymia",
      "ropucha aga",
      "aga"
    ],
    "explanation": "W rozdziale opisano przykład ropuchy olbrzymiej, która zamiast zwalczyć szkodniki zaczęła się gwałtownie rozprzestrzeniać."
  },
  {
    "id": "R04_ZPL_09",
    "section": "Płazy - różnorodność i ochrona",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę niebędące płazem: salamandra, traszka, rzekotka, krokodyl.",
    "options": null,
    "answer": "krokodyl",
    "explanation": "Salamandra, traszka i rzekotka to płazy, a krokodyl jest gadem."
  },
  {
    "id": "R04_GAD_01",
    "section": "Gady - życie na lądzie",
    "type": "single_choice",
    "prompt": "Która grupa kręgowców jako pierwsza w pełni przystosowała się do życia na lądzie?",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ptaki wodne",
      "ssaki morskie",
      "bezkręgowce"
    ],
    "answer": 2,
    "explanation": "W rozdziale podano, że gady są pierwszą grupą kręgowców w pełni przystosowaną do życia na lądzie."
  },
  {
    "id": "R04_GAD_02",
    "section": "Gady - życie na lądzie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy gadów będące przystosowaniami do życia na lądzie.",
    "options": [
      "sucha skóra pokryta rogowymi łuskami",
      "dobrze umięśnione kończyny z pazurami",
      "płuca o dużej powierzchni wymiany gazowej",
      "powieki chroniące oczy",
      "skóra stale wilgotna i naga",
      "skrzela u dorosłych osobników"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_budowa_jaszczurki.jpg",
    "explanation": "Sucha skóra z łuskami, pazury, sprawne płuca i powieki ułatwiają gadom życie na lądzie."
  },
  {
    "id": "R04_GAD_03",
    "section": "Gady - życie na lądzie",
    "type": "true_false",
    "prompt": "Gady, podobnie jak płazy, spotykamy na wszystkich kontynentach z wyjątkiem Antarktydy.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje, że gady występują na wszystkich kontynentach poza Antarktydą."
  },
  {
    "id": "R04_GAD_04",
    "section": "Gady - życie na lądzie",
    "type": "fill_in",
    "prompt": "Ciało gadów jest pokryte suchą skórą z rogowymi __________ i __________.",
    "options": null,
    "answer": [
      "łuskami",
      "tarczkami"
    ],
    "altAnswers": [
      [
        "łuskami",
        "luskami"
      ],
      [
        "tarczkami",
        "tarczki"
      ]
    ],
    "explanation": "Rogowe łuski i tarczki chronią ciało gadów przed uszkodzeniami oraz utratą wody."
  },
  {
    "id": "R04_GAD_05",
    "section": "Gady - życie na lądzie",
    "type": "match",
    "prompt": "Połącz cechę gada z jej znaczeniem.",
    "options": null,
    "image": "r04_budowa_jaszczurki.jpg",
    "left": [
      "rogowe łuski",
      "pazury",
      "powieki",
      "gąbczaste płuca"
    ],
    "right": [
      "ograniczają utratę wody",
      "pomagają w poruszaniu się oraz obronie",
      "chronią i nawilżają oczy",
      "zwiększają powierzchnię wymiany gazowej"
    ],
    "answer": {
      "rogowe łuski": "ograniczają utratę wody",
      "pazury": "pomagają w poruszaniu się oraz obronie",
      "powieki": "chronią i nawilżają oczy",
      "gąbczaste płuca": "zwiększają powierzchnię wymiany gazowej"
    },
    "explanation": "Każda z tych cech pomaga gadom sprawnie funkcjonować poza wodą."
  },
  {
    "id": "R04_GAD_06",
    "section": "Gady - życie na lądzie",
    "type": "riddle",
    "prompt": "Jedynym narządem oddechowym gadów są...",
    "options": null,
    "answer": "płuca",
    "altAnswers": [
      "płuca",
      "pluca"
    ],
    "explanation": "Skóra gadów nie bierze udziału w oddychaniu, dlatego ich jedynym narządem oddechowym są płuca."
  },
  {
    "id": "R04_GAD_07",
    "section": "Gady - życie na lądzie",
    "type": "scenario",
    "prompt": "W klimacie umiarkowanym temperatura otoczenia spada bardzo nisko. Gady przestają być aktywne i przeczekują ten okres. Jak nazywa się taki stan opisany w rozdziale?",
    "options": [
      "odrętwienie",
      "tarło",
      "przeobrażenie",
      "linie boczne",
      "ławica",
      "skrzek"
    ],
    "answer": 0,
    "explanation": "Gdy temperatura otoczenia staje się zbyt niska, gady mogą zapadać w stan odrętwienia."
  },
  {
    "id": "R04_GAD_08",
    "section": "Gady - życie na lądzie",
    "type": "true_false",
    "prompt": "U wszystkich gatunków gadów występuje zapłodnienie wewnętrzne.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że u wszystkich gadów zapłodnienie odbywa się wewnątrz organizmu samicy."
  },
  {
    "id": "R04_GAD_09",
    "section": "Gady - życie na lądzie",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania i rozwoju większości gadów w poprawnej kolejności.",
    "options": null,
    "items": [
      "młode podobne do rodziców zaczynają samodzielne życie",
      "samica składa jaja na lądzie",
      "zachodzi zapłodnienie wewnętrzne",
      "rozwój przebiega bez postaci larwalnej"
    ],
    "answer": [
      "zachodzi zapłodnienie wewnętrzne",
      "samica składa jaja na lądzie",
      "rozwój przebiega bez postaci larwalnej",
      "młode podobne do rodziców zaczynają samodzielne życie"
    ],
    "explanation": "U gadów zapłodnienie jest wewnętrzne, jaja są składane na lądzie, a potomstwo rozwija się bez stadium larwy."
  },
  {
    "id": "R04_ZGA_01",
    "section": "Gady - różnorodność i znaczenie",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera cztery podstawowe grupy gadów wymienione w rozdziale?",
    "options": [
      "jaszczurki, węże, żółwie i krokodyle",
      "żaby, ropuchy, kumaki i rzekotki",
      "ryby denne, ryby drapieżne, planktonożerne i roślinożerne",
      "traszki, salamandry, marszczelce i pętówki",
      "łososie, dorsze, makrele i skorpeny",
      "ptaki, ssaki, płazy i owady"
    ],
    "answer": 0,
    "image": "r04_grupy_gadow.jpg",
    "explanation": "Do gadów należą jaszczurki, węże, żółwie i krokodyle."
  },
  {
    "id": "R04_ZGA_02",
    "section": "Gady - różnorodność i znaczenie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do grup gadów.",
    "options": null,
    "items": [
      "jaszczurka zwinka",
      "padalec zwyczajny",
      "żmija zygzakowata",
      "zaskroniec zwyczajny",
      "wąż Eskulapa",
      "żółw błotny",
      "krokodyl"
    ],
    "categories": [
      "jaszczurki",
      "węże",
      "żółwie",
      "krokodyle"
    ],
    "answer": {
      "jaszczurki": [
        "jaszczurka zwinka",
        "padalec zwyczajny"
      ],
      "węże": [
        "żmija zygzakowata",
        "zaskroniec zwyczajny",
        "wąż Eskulapa"
      ],
      "żółwie": [
        "żółw błotny"
      ],
      "krokodyle": [
        "krokodyl"
      ]
    },
    "explanation": "Padalec jest beznogą jaszczurką, a w Polsce występują przedstawiciele gadów z wyjątkiem krokodyli."
  },
  {
    "id": "R04_ZGA_03",
    "section": "Gady - różnorodność i znaczenie",
    "type": "true_false",
    "prompt": "Padalec zwyczajny to wąż, ponieważ nie ma kończyn.",
    "options": null,
    "answer": false,
    "image": "r04_gady_polski.jpg",
    "explanation": "Padalec zwyczajny nie ma kończyn, ale jest jaszczurką, dlatego bywa mylony z wężami."
  },
  {
    "id": "R04_ZGA_04",
    "section": "Gady - różnorodność i znaczenie",
    "type": "match",
    "prompt": "Połącz gada żyjącego w Polsce z jego cechą.",
    "options": null,
    "image": "r04_gady_polski.jpg",
    "left": [
      "żmija zygzakowata",
      "zaskroniec zwyczajny",
      "wąż Eskulapa",
      "jaszczurka zwinka",
      "żółw błotny"
    ],
    "right": [
      "jedyny jadowity gad w Polsce",
      "ma żółte plamy po bokach głowy",
      "dorasta do około 2 m długości",
      "samce w czasie godów stają się intensywnie zielone",
      "żyje w płytkich zbiornikach wodnych"
    ],
    "answer": {
      "żmija zygzakowata": "jedyny jadowity gad w Polsce",
      "zaskroniec zwyczajny": "ma żółte plamy po bokach głowy",
      "wąż Eskulapa": "dorasta do około 2 m długości",
      "jaszczurka zwinka": "samce w czasie godów stają się intensywnie zielone",
      "żółw błotny": "żyje w płytkich zbiornikach wodnych"
    },
    "explanation": "Cechy te pomagają rozpoznawać wybrane gatunki gadów występujących w Polsce."
  },
  {
    "id": "R04_ZGA_05",
    "section": "Gady - różnorodność i znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady znaczenia gadów dla człowieka.",
    "options": [
      "zjadają szkodniki lasów i roślin uprawnych",
      "jad węży wykorzystuje się do produkcji leków i kosmetyków",
      "skóra węży i krokodyli z farm służy do wyrobu torebek i butów",
      "mięso i jaja niektórych gadów są pożywieniem w wybranych krajach",
      "wszystkie gady są zawsze groźne dla człowieka",
      "dorosłe gady są wskaźnikami czystości wód dzięki skrzelom"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Gady mogą być pożyteczne jako drapieżniki szkodników, źródło jadu, skóry, mięsa i jaj, choć niektóre są niebezpieczne."
  },
  {
    "id": "R04_ZGA_06",
    "section": "Gady - różnorodność i znaczenie",
    "type": "scenario",
    "prompt": "Ktoś chce zabić beznogą jaszczurkę, bo myli ją z wężem. O którym gadzie z rozdziału mowa?",
    "options": [
      "padalec zwyczajny",
      "zaskroniec zwyczajny",
      "żółw błotny",
      "wąż Eskulapa",
      "krokodyl nilowy",
      "rzekotka drzewna"
    ],
    "answer": 0,
    "image": "r04_gady_polski.jpg",
    "explanation": "Padalec zwyczajny jest jaszczurką pozbawioną kończyn i często bywa mylony z wężem."
  },
  {
    "id": "R04_ZGA_07",
    "section": "Gady - różnorodność i znaczenie",
    "type": "fill_in",
    "prompt": "W Polsce nie występują naturalnie __________, a wszystkie polskie gady podlegają __________ gatunkowej.",
    "options": null,
    "answer": [
      "krokodyle",
      "ochronie"
    ],
    "altAnswers": [
      [
        "krokodyle",
        "krokodyli"
      ],
      [
        "ochronie",
        "ochrona"
      ]
    ],
    "explanation": "W Polsce żyją jaszczurki, węże i żółw błotny, ale nie krokodyle; wszystkie polskie gady są chronione."
  },
  {
    "id": "R04_ZGA_08",
    "section": "Gady - różnorodność i znaczenie",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę niebędące gadem: jaszczurka zwinka, padalec zwyczajny, żmija zygzakowata, salamandra plamista.",
    "options": null,
    "answer": "salamandra plamista",
    "explanation": "Salamandra plamista jest płazem ogoniastym, a pozostałe zwierzęta to gady."
  },
  {
    "id": "R04_ZGA_09",
    "section": "Gady - różnorodność i znaczenie",
    "type": "riddle",
    "prompt": "Jedyny jadowity gad żyjący w Polsce to...",
    "options": null,
    "answer": "żmija zygzakowata",
    "altAnswers": [
      "żmija zygzakowata",
      "zmija zygzakowata",
      "żmija"
    ],
    "explanation": "Żmija zygzakowata uśmierca ofiarę ukąszeniem, w czasie którego wstrzykuje jad."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz nazwę z grupą zwierząt, której dotyczy.",
    "options": null,
    "left": [
      "ikra",
      "skrzek",
      "jaja z osłonkami składane na lądzie",
      "kijanka"
    ],
    "right": [
      "ryby",
      "płazy",
      "gady",
      "larwa płaza"
    ],
    "answer": {
      "ikra": "ryby",
      "skrzek": "płazy",
      "jaja z osłonkami składane na lądzie": "gady",
      "kijanka": "larwa płaza"
    },
    "explanation": "Ikra to jaja ryb, skrzek to jaja żab, a gady składają jaja na lądzie; kijanka jest larwą płaza."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj grupy zwierząt do typu zapłodnienia opisanego w rozdziale.",
    "options": null,
    "items": [
      "większość ryb",
      "większość płazów",
      "gady"
    ],
    "categories": [
      "zapłodnienie zewnętrzne",
      "zapłodnienie wewnętrzne"
    ],
    "answer": {
      "zapłodnienie zewnętrzne": [
        "większość ryb",
        "większość płazów"
      ],
      "zapłodnienie wewnętrzne": [
        "gady"
      ]
    },
    "explanation": "U większości ryb i płazów zapłodnienie zachodzi poza organizmem samicy, a u gadów wewnątrz organizmu samicy."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Łosoś atlantycki na tarło wraca do rzeki, z której pochodzi, a węgorz europejski płynie do Morza __________.",
    "options": null,
    "answer": [
      "Sargassowego"
    ],
    "altAnswers": [
      [
        "Sargassowego",
        "Sargassowe",
        "Morza Sargassowego"
      ]
    ],
    "explanation": "Węgorz europejski na tarło wędruje do Morza Sargassowego, pokonując niemal 7 tysięcy kilometrów."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para zakresów temperatur jest zgodna z przykładami z rozdziału?",
    "options": [
      "ustniczek 22-26°C, dorsz 2-7°C",
      "ustniczek 2-7°C, dorsz 22-26°C",
      "ustniczek 0-2°C, dorsz 30-35°C",
      "oba gatunki 15-18°C",
      "ustniczek 7-9°C, dorsz 26-30°C",
      "oba gatunki poniżej 0°C"
    ],
    "answer": 0,
    "explanation": "Ustniczek z rafy koralowej najlepiej czuje się w cieplejszej wodzie 22-26°C, a dorsz w chłodniejszych wodach 2-7°C."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz działania ochronne wymienione przy wędrówkach płazów przez drogi.",
    "options": [
      "ustawianie tablic ostrzegawczych",
      "budowanie tuneli pod drogami",
      "zakładanie przenośnych ogrodzeń",
      "chwytanie i przenoszenie płazów na drugą stronę drogi",
      "likwidowanie zbiorników rozrodczych",
      "zwiększanie ruchu samochodowego nocą"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przy drogach stosuje się tablice, tunele, ogrodzenia oraz przenoszenie płazów, aby ograniczyć ich śmiertelność."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Skóra gadów bierze udział w oddychaniu tak samo jak skóra dorosłych płazów.",
    "options": null,
    "answer": false,
    "explanation": "Skóra gadów jest sucha i nie uczestniczy w oddychaniu; ich jedynym narządem oddechowym są płuca."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Błona płodowa gromadząca szkodliwe i niepotrzebne substancje wydalane przez rozwijający się organizm to...",
    "options": null,
    "answer": "omocznia",
    "altAnswers": [
      "omocznia"
    ],
    "image": "r04_jajo_gada.jpg",
    "explanation": "Omocznia gromadzi zbędne substancje powstające podczas rozwoju zarodka gada."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz błonę płodową z jej funkcją.",
    "options": null,
    "image": "r04_jajo_gada.jpg",
    "left": [
      "kosmówka",
      "owodnia",
      "omocznia",
      "pęcherzyk żółtkowy"
    ],
    "right": [
      "uczestniczy w wymianie gazowej",
      "tworzy komorę wypełnioną płynem",
      "gromadzi szkodliwe substancje",
      "otacza żółtko będące źródłem pokarmu"
    ],
    "answer": {
      "kosmówka": "uczestniczy w wymianie gazowej",
      "owodnia": "tworzy komorę wypełnioną płynem",
      "omocznia": "gromadzi szkodliwe substancje",
      "pęcherzyk żółtkowy": "otacza żółtko będące źródłem pokarmu"
    },
    "explanation": "Błony płodowe umożliwiają rozwój gadów w środowisku lądowym."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę niepasujące do przykładów opieki nad jajami lub potomstwem: pyszczak, skalar, pętówka, tuńczyk.",
    "options": null,
    "answer": "tuńczyk",
    "explanation": "Pyszczaki, skalary i pętówki są przykładami opieki nad jajami lub potomstwem; tuńczyk nie został podany jako taki przykład."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń znajduje kręgowca o suchej skórze pokrytej rogowymi łuskami. Zwierzę oddycha płucami, a jego potomstwo rozwija się bez larwy. Do której grupy najpewniej należy?",
    "options": [
      "gadów",
      "ryb",
      "płazów",
      "larw płazów",
      "planktonożerców",
      "płazów beznogich"
    ],
    "answer": 0,
    "explanation": "Sucha skóra z rogowymi łuskami, płuca i rozwój bez postaci larwalnej to cechy gadów."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj narządy oddechowe do grupy lub stadium rozwoju.",
    "options": null,
    "items": [
      "blaszkowate skrzela",
      "płuca i skóra",
      "skrzela larw",
      "gąbczaste płuca"
    ],
    "categories": [
      "ryby",
      "dorosłe płazy",
      "larwy płazów",
      "gady"
    ],
    "answer": {
      "ryby": [
        "blaszkowate skrzela"
      ],
      "dorosłe płazy": [
        "płuca i skóra"
      ],
      "larwy płazów": [
        "skrzela larw"
      ],
      "gady": [
        "gąbczaste płuca"
      ]
    },
    "explanation": "Ryby oddychają skrzelami, dorosłe płazy płucami i skórą, larwy płazów skrzelami, a gady płucami."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Ryby, płazy i gady są kręgowcami zmiennocieplnymi.",
    "options": null,
    "answer": true,
    "explanation": "Wszystkie trzy grupy należą do kręgowców zmiennocieplnych omawianych w rozdziale."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W stawie żyje zwierzę dorosłe oddychające płucami i skórą. Jego larwy oddychają skrzelami, a jaja są składane do wody jako skrzek. Co to za grupa?",
    "options": [
      "płazy",
      "ryby",
      "gady",
      "ptaki",
      "ssaki",
      "skorupiaki"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy płazów, których rozwój przebiega w wodzie i obejmuje stadium kijanki."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie sposoby ochrony ryb opisane w rozdziale?",
    "options": [
      "ochrona gatunkowa, okresy ochronne, limity połowów i ochrona miejsc tarła",
      "osuszanie jezior, łowienie w okresie tarła i niszczenie miejsc zimowania",
      "zakładanie pagórków z kamieni, ochrona polan i chwytanie rzadkich okazów",
      "budowanie tuneli pod drogami, przenoszenie żab i ochrona skrzeku",
      "usuwanie roślinności wodnej, zanieczyszczanie rzek i zmniejszanie oczek sieci",
      "wprowadzanie ropuch olbrzymich i niszczenie omacnicy prosowianki"
    ],
    "answer": 0,
    "explanation": "Ochrona ryb obejmuje między innymi ochronę gatunkową, okresy ochronne, limity połowów oraz ochronę miejsc tarła i zimowania."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Kręgowce zmiennocieplne",
  icon: "🐢",
  sectionOrder: [
    "Ryby - środowisko i budowa",
    "Ryby - różnorodność i znaczenie",
    "Płazy - środowisko i rozwój",
    "Płazy - różnorodność i ochrona",
    "Gady - życie na lądzie",
    "Gady - różnorodność i znaczenie"
  ],
  sectionIcons: {
    "Ryby - środowisko i budowa": "🐟",
    "Ryby - różnorodność i znaczenie": "🐠",
    "Płazy - środowisko i rozwój": "🐸",
    "Płazy - różnorodność i ochrona": "🦎",
    "Gady - życie na lądzie": "🐍",
    "Gady - różnorodność i znaczenie": "🐢"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
