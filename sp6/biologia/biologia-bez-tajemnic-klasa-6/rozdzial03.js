// Skróty sekcji:
//   STA = Stawonogi
//   PRZ = Przystosowania stawonogów
//   ZNA = Znaczenie stawonogów
//   MIE = Mięczaki
//   MIX = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_STA_01",
    "section": "Stawonogi",
    "type": "single_choice",
    "prompt": "Od czego pochodzi nazwa „stawonogi”?",
    "options": [
      "od odnóży złożonych z odcinków połączonych stawami",
      "od miękkiej muszli chroniącej ciało",
      "od ciała podzielonego wyłącznie na pierścienie",
      "od obecności skrzeli u wszystkich gatunków",
      "od worka trzewiowego",
      "od płetwy służącej do pływania"
    ],
    "answer": 0,
    "explanation": "Nazwa stawonogi nawiązuje do odnóży złożonych z krótkich odcinków połączonych ruchomymi stawami."
  },
  {
    "id": "R03_STA_02",
    "section": "Stawonogi",
    "type": "true_false",
    "prompt": "Stawonogi tworzą jedną z najliczniejszych i najbardziej różnorodnych grup zwierząt.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że opisano ponad milion gatunków stawonogów."
  },
  {
    "id": "R03_STA_03",
    "section": "Stawonogi",
    "type": "sort",
    "prompt": "Przyporządkuj grupy stawonogów do ich cech budowy.",
    "options": null,
    "items": [
      "5 par odnóży krocznych",
      "4 pary odnóży krocznych",
      "3 pary odnóży krocznych",
      "brak czułków",
      "czułki",
      "głowa, tułów i odwłok"
    ],
    "categories": [
      "skorupiaki",
      "pajęczaki",
      "owady"
    ],
    "answer": {
      "skorupiaki": [
        "5 par odnóży krocznych",
        "czułki"
      ],
      "pajęczaki": [
        "4 pary odnóży krocznych",
        "brak czułków"
      ],
      "owady": [
        "3 pary odnóży krocznych",
        "głowa, tułów i odwłok"
      ]
    },
    "image": "/img/r03_stawonogi_trzy_grupy.jpg",
    "explanation": "Skorupiaki mają zwykle 5 par odnóży krocznych i czułki, pajęczaki 4 pary odnóży i brak czułków, a owady 3 pary odnóży oraz ciało z głową, tułowiem i odwłokiem."
  },
  {
    "id": "R03_STA_04",
    "section": "Stawonogi",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy stawonogów opisane w rozdziale.",
    "options": [
      "segmentowane ciało",
      "odnóża ze stawami",
      "chitynowy oskórek",
      "narządy zmysłów",
      "worek trzewiowy jako główna część ciała",
      "muszla z dwóch części"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Stawonogi mają segmentowane ciało, odnóża ze stawami, chitynowy oskórek i narządy zmysłów."
  },
  {
    "id": "R03_STA_05",
    "section": "Stawonogi",
    "type": "fill_in",
    "prompt": "Ciało owadów jest podzielone na głowę, __________ i odwłok.",
    "options": null,
    "answer": [
      "tułów"
    ],
    "altAnswers": [
      [
        "tułów",
        "tulow"
      ]
    ],
    "explanation": "U owadów wyróżnia się głowę, tułów i odwłok."
  },
  {
    "id": "R03_STA_06",
    "section": "Stawonogi",
    "type": "single_choice",
    "prompt": "Który zestaw części ciała jest typowy dla pajęczaków i skorupiaków opisanych w rozdziale?",
    "options": [
      "głowotułów i odwłok",
      "głowa, noga i worek trzewiowy",
      "głowa, tułów i odwłok",
      "głowa, ramiona i lejek",
      "muszla i zawias",
      "pancerz, płetwa i syfon"
    ],
    "answer": 0,
    "explanation": "U pajęczaków i skorupiaków głowa jest zrośnięta z tułowiem, tworząc głowotułów, za którym znajduje się odwłok."
  },
  {
    "id": "R03_STA_07",
    "section": "Stawonogi",
    "type": "match",
    "prompt": "Połącz cechę stawonogów z jej znaczeniem.",
    "options": null,
    "left": [
      "chitynowy oskórek",
      "narządy zmysłów",
      "narządy oddechowe",
      "mięśnie"
    ],
    "right": [
      "chroni ciało i działa jak szkielet zewnętrzny",
      "umożliwiają odbieranie bodźców",
      "zapewniają wymianę gazową",
      "umożliwiają sprawne poruszanie się"
    ],
    "answer": {
      "chitynowy oskórek": "chroni ciało i działa jak szkielet zewnętrzny",
      "narządy zmysłów": "umożliwiają odbieranie bodźców",
      "narządy oddechowe": "zapewniają wymianę gazową",
      "mięśnie": "umożliwiają sprawne poruszanie się"
    },
    "explanation": "Każda z tych cech pomaga stawonogom funkcjonować w określonym środowisku życia."
  },
  {
    "id": "R03_STA_08",
    "section": "Stawonogi",
    "type": "sequence",
    "prompt": "Ułóż etapy linienia stawonoga w poprawnej kolejności.",
    "options": null,
    "items": [
      "nowa powłoka twardnieje",
      "stary oskórek pęka",
      "zwierzę wysuwa się z wylinki",
      "miękka nowa powłoka umożliwia wzrost"
    ],
    "answer": [
      "stary oskórek pęka",
      "zwierzę wysuwa się z wylinki",
      "miękka nowa powłoka umożliwia wzrost",
      "nowa powłoka twardnieje"
    ],
    "image": "/img/r03_linienie_stawonoga.jpg",
    "explanation": "Podczas linienia stary oskórek pęka, zwierzę z niego wychodzi, rośnie pod miękką powłoką, a potem nowa powłoka twardnieje."
  },
  {
    "id": "R03_STA_09",
    "section": "Stawonogi",
    "type": "riddle",
    "prompt": "Proces zrzucania twardego oskórka lub pancerza to...",
    "options": null,
    "answer": "linienie",
    "altAnswers": [
      "linienie"
    ],
    "image": "/img/r03_linienie_stawonoga.jpg",
    "explanation": "Linienie umożliwia powiększenie ciała, ponieważ twardy oskórek ogranicza wzrost stawonoga."
  },
  {
    "id": "R03_STA_10",
    "section": "Stawonogi",
    "type": "multi_select",
    "prompt": "Zaznacz środowiska życia stawonogów wymienione w rozdziale.",
    "options": [
      "lądy",
      "morza i oceany",
      "rzeki, jeziora i stawy",
      "powietrze",
      "wyłącznie wnętrze muszli",
      "wyłącznie gleba bez wody"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r03_srodowiska_stawonogow.jpg",
    "explanation": "Stawonogi występują na lądzie, w wodach słodkich i słonych oraz w powietrzu."
  },
  {
    "id": "R03_STA_11",
    "section": "Stawonogi",
    "type": "true_false",
    "prompt": "Wszystkie stawonogi prowadzą pasożytniczy tryb życia.",
    "options": null,
    "answer": false,
    "explanation": "Wśród stawonogów są gatunki wolno żyjące, osiadłe i pasożytnicze."
  },
  {
    "id": "R03_STA_12",
    "section": "Stawonogi",
    "type": "single_choice",
    "prompt": "Która cecha pozwala odróżnić pająka od owada?",
    "options": [
      "4 pary odnóży krocznych i brak czułków",
      "3 pary odnóży krocznych i czułki",
      "pojedyncza spiralna muszla",
      "ciało bez narządów zmysłów",
      "dwie części muszli połączone zawiasem",
      "noga przekształcona w ramiona"
    ],
    "answer": 0,
    "image": "/img/r03_stawonogi_trzy_grupy.jpg",
    "explanation": "Pająki są pajęczakami, mają 4 pary odnóży krocznych i nie mają czułków."
  },
  {
    "id": "R03_STA_13",
    "section": "Stawonogi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mucha, biedronka, pszczoła, ośmiornica, komar.",
    "options": null,
    "answer": "ośmiornica",
    "explanation": "Ośmiornica jest głowonogiem należącym do mięczaków, a pozostałe organizmy to owady, czyli stawonogi."
  },
  {
    "id": "R03_STA_14",
    "section": "Stawonogi",
    "type": "fill_in",
    "prompt": "Twardy oskórek stawonogów jest zbudowany głównie z __________.",
    "options": null,
    "answer": [
      "chityny"
    ],
    "altAnswers": [
      [
        "chityny",
        "chityna"
      ]
    ],
    "explanation": "Chitynowy oskórek chroni ciało i pełni funkcję szkieletu zewnętrznego."
  },
  {
    "id": "R03_PRZ_01",
    "section": "Przystosowania stawonogów",
    "type": "single_choice",
    "prompt": "Które narządy oddechowe pozwalają skorupiakom oddychać tlenem rozpuszczonym w wodzie?",
    "options": [
      "skrzela",
      "płuca ssaków",
      "worki płucne roślin",
      "syfony wypustowe",
      "tarki na języku",
      "ramiona z przyssawkami"
    ],
    "answer": 0,
    "image": "/img/r03_rak_budowa.jpg",
    "explanation": "Skorupiaki żyjące w wodzie oddychają za pomocą skrzeli."
  },
  {
    "id": "R03_PRZ_02",
    "section": "Przystosowania stawonogów",
    "type": "match",
    "prompt": "Połącz typ oczu stawonogów z opisem.",
    "options": null,
    "left": [
      "oczy proste",
      "oczy złożone"
    ],
    "right": [
      "są wrażliwe głównie na intensywność światła",
      "składają się z tysięcy małych oczek i dają obraz mozaikowy"
    ],
    "answer": {
      "oczy proste": "są wrażliwe głównie na intensywność światła",
      "oczy złożone": "składają się z tysięcy małych oczek i dają obraz mozaikowy"
    },
    "image": "/img/r03_oczy_stawonogow.jpg",
    "explanation": "Oczy proste i złożone różnią się budową oraz sposobem odbierania informacji z otoczenia."
  },
  {
    "id": "R03_PRZ_03",
    "section": "Przystosowania stawonogów",
    "type": "true_false",
    "prompt": "Oczy złożone stawonogów są zbudowane z wielu małych oczek.",
    "options": null,
    "answer": true,
    "image": "/img/r03_oczy_stawonogow.jpg",
    "explanation": "Oczy złożone składają się z tysięcy drobnych oczek i pomagają wykrywać ruch."
  },
  {
    "id": "R03_PRZ_04",
    "section": "Przystosowania stawonogów",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budowy raka ułatwiające aktywne życie w wodzie.",
    "options": [
      "wachlarz ogonowy",
      "skrzela",
      "oczy złożone na słupkach",
      "szczypce",
      "pojedyncza spiralna muszla",
      "rzęski na nabłonku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r03_rak_budowa.jpg",
    "explanation": "Rak ma m.in. wachlarz ogonowy, skrzela, oczy na słupkach i szczypce, które pomagają mu żyć w środowisku wodnym."
  },
  {
    "id": "R03_PRZ_05",
    "section": "Przystosowania stawonogów",
    "type": "single_choice",
    "prompt": "Do czego służą szczypce raka?",
    "options": [
      "do zdobywania i rozdrabniania pokarmu oraz obrony",
      "do filtrowania wody jak u małży",
      "do wytwarzania pajęczyny",
      "do pobierania nektaru kwiatowego",
      "do lotu",
      "do tworzenia pereł"
    ],
    "answer": 0,
    "image": "/img/r03_rak_budowa.jpg",
    "explanation": "Szczypce raka służą do zdobywania i rozdrabniania pokarmu oraz obrony przed drapieżnikami."
  },
  {
    "id": "R03_PRZ_06",
    "section": "Przystosowania stawonogów",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania pająków do drapieżnego trybu życia.",
    "options": [
      "szczękoczułki połączone z gruczołem jadowym",
      "kądziołki przędne i gruczoły przędne",
      "4 pary odnóży krocznych",
      "liczne oczy proste",
      "pojedyncza muszla spiralna",
      "syfon wypustowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r03_pajak_budowa.jpg",
    "explanation": "Pająki mają szczękoczułki z jadem, narządy przędne, 4 pary odnóży i oczy proste, co pomaga im polować."
  },
  {
    "id": "R03_PRZ_07",
    "section": "Przystosowania stawonogów",
    "type": "riddle",
    "prompt": "Narządy pająka służące do wytwarzania nici, z których powstaje pajęczyna, to...",
    "options": null,
    "answer": "kądziołki przędne",
    "altAnswers": [
      "kądziołki przędne",
      "kadziolki przedne",
      "gruczoły przędne",
      "gruczoly przedne"
    ],
    "image": "/img/r03_pajak_budowa.jpg",
    "explanation": "Kądziołki przędne wraz z gruczołami przędnymi służą do wytwarzania nici pajęczej."
  },
  {
    "id": "R03_PRZ_08",
    "section": "Przystosowania stawonogów",
    "type": "single_choice",
    "prompt": "Która cecha umożliwia owadom aktywne opanowanie powietrza?",
    "options": [
      "skrzydła",
      "skrzela",
      "syfon wpustowy",
      "worek trzewiowy",
      "dwuczęściowa muszla",
      "lejek"
    ],
    "answer": 0,
    "image": "/img/r03_pszczola_budowa.jpg",
    "explanation": "U owadów skrzydła umożliwiają lot, ucieczkę przed drapieżnikami oraz poszukiwanie pokarmu i miejsc składania jaj."
  },
  {
    "id": "R03_PRZ_09",
    "section": "Przystosowania stawonogów",
    "type": "match",
    "prompt": "Połącz element budowy pszczoły z jego funkcją.",
    "options": null,
    "left": [
      "czułki",
      "skrzydła",
      "żądło",
      "koszyczek"
    ],
    "right": [
      "odbierają bodźce zapachowe i dotykowe",
      "zapewniają zdolność lotu",
      "służy do obrony",
      "służy do przechowywania pyłku"
    ],
    "answer": {
      "czułki": "odbierają bodźce zapachowe i dotykowe",
      "skrzydła": "zapewniają zdolność lotu",
      "żądło": "służy do obrony",
      "koszyczek": "służy do przechowywania pyłku"
    },
    "image": "/img/r03_pszczola_budowa.jpg",
    "explanation": "Elementy budowy pszczoły są dostosowane do życia na lądzie, lotu, odbierania bodźców i zbierania pokarmu."
  },
  {
    "id": "R03_PRZ_10",
    "section": "Przystosowania stawonogów",
    "type": "scenario",
    "prompt": "Pasożyt żyje na skórze głowy człowieka, nie ma skrzydeł, ma spłaszczone ciało i odnóża czepne zakończone pazurem. Co to za owad?",
    "options": [
      "wesz ludzka",
      "biedronka siedmiokropka",
      "rurecznik mułowy",
      "rak szlachetny",
      "wstężyk gajowy",
      "kałamarnica"
    ],
    "answer": 0,
    "image": "/img/r03_wsza_ludzka_przystosowania.jpg",
    "explanation": "Wesz ludzka jest pasożytem zewnętrznym człowieka, ma ciało i odnóża przystosowane do utrzymywania się na włosach."
  },
  {
    "id": "R03_PRZ_11",
    "section": "Przystosowania stawonogów",
    "type": "single_choice",
    "prompt": "Jaki aparat gębowy ma wesz ludzka?",
    "options": [
      "kłująco-ssący",
      "gryzący",
      "liżący",
      "ssący do nektaru",
      "tarka na języku",
      "dziób filtrujący"
    ],
    "answer": 0,
    "image": "/img/r03_wsza_ludzka_przystosowania.jpg",
    "explanation": "Aparat gębowy typu kłująco-ssącego umożliwia wszy nakłuwanie skóry i pobieranie krwi."
  },
  {
    "id": "R03_PRZ_12",
    "section": "Przystosowania stawonogów",
    "type": "match",
    "prompt": "Połącz typ aparatu gębowego owadów z przykładową funkcją.",
    "options": null,
    "left": [
      "gryzący",
      "ssący",
      "liżący",
      "kłująco-ssący"
    ],
    "right": [
      "odrywanie i rozdrabnianie pokarmu",
      "wysysanie płynnego nektaru",
      "zlizywanie płynnego pokarmu",
      "nakłuwanie skóry i pobieranie krwi"
    ],
    "answer": {
      "gryzący": "odrywanie i rozdrabnianie pokarmu",
      "ssący": "wysysanie płynnego nektaru",
      "liżący": "zlizywanie płynnego pokarmu",
      "kłująco-ssący": "nakłuwanie skóry i pobieranie krwi"
    },
    "image": "/img/r03_aparaty_gebowe_owadow.jpg",
    "explanation": "Typ aparatu gębowego owada jest dostosowany do rodzaju pobieranego pokarmu."
  },
  {
    "id": "R03_PRZ_13",
    "section": "Przystosowania stawonogów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: aparat gryzący, aparat ssący, aparat liżący, aparat kłująco-ssący, płetwa ogonowa.",
    "options": null,
    "answer": "płetwa ogonowa",
    "image": "/img/r03_aparaty_gebowe_owadow.jpg",
    "explanation": "Płetwa ogonowa nie jest typem aparatu gębowego owadów."
  },
  {
    "id": "R03_PRZ_14",
    "section": "Przystosowania stawonogów",
    "type": "sort",
    "prompt": "Przyporządkuj typy odnóży owadów do ich funkcji.",
    "options": null,
    "items": [
      "odnóża kroczne",
      "odnóża skoczne",
      "odnóża pływne",
      "odnóża grzebne",
      "odnóża chwytne"
    ],
    "categories": [
      "poruszanie po powierzchni",
      "skakanie",
      "pływanie",
      "kopanie",
      "łapanie ofiary"
    ],
    "answer": {
      "poruszanie po powierzchni": [
        "odnóża kroczne"
      ],
      "skakanie": [
        "odnóża skoczne"
      ],
      "pływanie": [
        "odnóża pływne"
      ],
      "kopanie": [
        "odnóża grzebne"
      ],
      "łapanie ofiary": [
        "odnóża chwytne"
      ]
    },
    "image": "/img/r03_odnoza_owadow_typy.jpg",
    "explanation": "Odnóża owadów mogą być przystosowane do różnych funkcji, takich jak chodzenie, skakanie, pływanie, grzebanie lub chwytanie."
  },
  {
    "id": "R03_ZNA_01",
    "section": "Znaczenie stawonogów",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli stawonogów do grup.",
    "options": null,
    "items": [
      "rak szlachetny",
      "stonoga murowa",
      "kleszcz pospolity",
      "kosarz pospolity",
      "mucha domowa",
      "biedronka siedmiokropka"
    ],
    "categories": [
      "skorupiaki",
      "pajęczaki",
      "owady"
    ],
    "answer": {
      "skorupiaki": [
        "rak szlachetny",
        "stonoga murowa"
      ],
      "pajęczaki": [
        "kleszcz pospolity",
        "kosarz pospolity"
      ],
      "owady": [
        "mucha domowa",
        "biedronka siedmiokropka"
      ]
    },
    "image": "/img/r03_przedstawiciele_stawonogow.jpg",
    "explanation": "Rak i stonoga to skorupiaki, kleszcz i kosarz to pajęczaki, a mucha i biedronka to owady."
  },
  {
    "id": "R03_ZNA_02",
    "section": "Znaczenie stawonogów",
    "type": "single_choice",
    "prompt": "Który skorupiak jest opisany jako składnik planktonu słodkowodnego i filtrator wód?",
    "options": [
      "rozwielitka",
      "homar europejski",
      "stonoga murowa",
      "kleszcz pospolity",
      "mucha domowa",
      "paź królowej"
    ],
    "answer": 0,
    "explanation": "Rozwielitka, zwana dafnią, należy do planktonu słodkowodnego i pełni funkcję filtratora wód."
  },
  {
    "id": "R03_ZNA_03",
    "section": "Znaczenie stawonogów",
    "type": "single_choice",
    "prompt": "Który stawonóg może być wskaźnikiem czystości środowiska wodnego?",
    "options": [
      "rak szlachetny",
      "mucha domowa",
      "brudnica mniszka",
      "stonka ziemniaczana",
      "rybik cukrowy",
      "roztocz kurzu domowego"
    ],
    "answer": 0,
    "explanation": "Obecność niektórych skorupiaków, np. raka szlachetnego, wskazuje na czyste środowisko wodne."
  },
  {
    "id": "R03_ZNA_04",
    "section": "Znaczenie stawonogów",
    "type": "match",
    "prompt": "Połącz stawonoga z jego opisem.",
    "options": null,
    "left": [
      "kryl antarktyczny",
      "homar europejski",
      "krewetka tygrysia",
      "stonoga murowa"
    ],
    "right": [
      "żyje w ławicach i jest pokarmem wielu zwierząt",
      "żyje na skalnym dnie mórz",
      "jest dużym gatunkiem krewetki poławianym i hodowanym",
      "żyje w wilgotnych miejscach pod kamieniami lub korą"
    ],
    "answer": {
      "kryl antarktyczny": "żyje w ławicach i jest pokarmem wielu zwierząt",
      "homar europejski": "żyje na skalnym dnie mórz",
      "krewetka tygrysia": "jest dużym gatunkiem krewetki poławianym i hodowanym",
      "stonoga murowa": "żyje w wilgotnych miejscach pod kamieniami lub korą"
    },
    "explanation": "Przykłady skorupiaków pokazują, że grupa ta obejmuje formy lądowe, planktonowe i morskie."
  },
  {
    "id": "R03_ZNA_05",
    "section": "Znaczenie stawonogów",
    "type": "riddle",
    "prompt": "Pajęczak żywiący się krwią i mogący przenosić boreliozę to...",
    "options": null,
    "answer": "kleszcz pospolity",
    "altAnswers": [
      "kleszcz pospolity",
      "kleszcz"
    ],
    "image": "/img/r03_pajeczaki_przedstawiciele.jpg",
    "explanation": "Kleszcz pospolity jest pasożytem zewnętrznym człowieka i innych zwierząt oraz może przenosić choroby."
  },
  {
    "id": "R03_ZNA_06",
    "section": "Znaczenie stawonogów",
    "type": "single_choice",
    "prompt": "Który pajęczak drąży korytarze w skórze człowieka i wywołuje świerzb?",
    "options": [
      "świerzbowiec ludzki",
      "kosarz pospolity",
      "ptasznik goliat",
      "rozwielitka",
      "kryl antarktyczny",
      "biedronka siedmiokropka"
    ],
    "answer": 0,
    "image": "/img/r03_pajeczaki_przedstawiciele.jpg",
    "explanation": "Świerzbowiec ludzki jest pasożytem zewnętrznym, który drąży korytarze w skórze i wywołuje świerzb."
  },
  {
    "id": "R03_ZNA_07",
    "section": "Znaczenie stawonogów",
    "type": "true_false",
    "prompt": "Kosarz pospolity jest pajęczakiem, ale nie należy do pająków.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że kosarz jest pajęczakiem, często mylonym z pająkiem, ale pająkiem nie jest."
  },
  {
    "id": "R03_ZNA_08",
    "section": "Znaczenie stawonogów",
    "type": "single_choice",
    "prompt": "Który owad jest hodowany głównie w celu pozyskiwania włókien jedwabnych z kokonów?",
    "options": [
      "jedwabnik morwowy",
      "mucha domowa",
      "biedronka siedmiokropka",
      "stonka ziemniaczana",
      "rybik cukrowy",
      "żagnica sina"
    ],
    "answer": 0,
    "explanation": "Jedwabnik morwowy jest hodowany dla włókien jedwabnych uzyskiwanych z kokonów."
  },
  {
    "id": "R03_ZNA_09",
    "section": "Znaczenie stawonogów",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne znaczenie stawonogów dla przyrody lub człowieka.",
    "options": [
      "zapylają rośliny",
      "stanowią pokarm dla innych zwierząt",
      "filtrują wodę lub oczyszczają środowisko",
      "mogą wytwarzać miód, wosk lub jedwab",
      "zawsze przenoszą choroby",
      "wyłącznie niszczą uprawy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Stawonogi mogą zapylać rośliny, stanowić pokarm, oczyszczać środowisko i wytwarzać ważne produkty."
  },
  {
    "id": "R03_ZNA_10",
    "section": "Znaczenie stawonogów",
    "type": "multi_select",
    "prompt": "Zaznacz negatywne znaczenie stawonogów opisane w rozdziale.",
    "options": [
      "mogą być szkodnikami upraw",
      "mogą przenosić choroby",
      "mogą wywoływać alergie",
      "mogą niszczyć drewno lub żywność",
      "zawsze filtrują wodę",
      "zawsze wytwarzają jedwab"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Niektóre stawonogi są szkodnikami, pasożytami, roznosicielami chorób lub powodują alergie i szkody gospodarcze."
  },
  {
    "id": "R03_ZNA_11",
    "section": "Znaczenie stawonogów",
    "type": "match",
    "prompt": "Połącz owada z jego znaczeniem opisanym w rozdziale.",
    "options": null,
    "left": [
      "biedronka siedmiokropka",
      "stonka ziemniaczana",
      "mucha domowa",
      "brudnica mniszka"
    ],
    "right": [
      "zjada mszyce i inne szkodniki roślin",
      "jest szkodnikiem upraw ziemniaka",
      "może roznosić groźne choroby bakteryjne",
      "jej gąsienice zagrażają lasom"
    ],
    "answer": {
      "biedronka siedmiokropka": "zjada mszyce i inne szkodniki roślin",
      "stonka ziemniaczana": "jest szkodnikiem upraw ziemniaka",
      "mucha domowa": "może roznosić groźne choroby bakteryjne",
      "brudnica mniszka": "jej gąsienice zagrażają lasom"
    },
    "image": "/img/r03_owady_znaczenie.jpg",
    "explanation": "Owady mogą mieć znaczenie pozytywne lub negatywne w zależności od gatunku i jego sposobu życia."
  },
  {
    "id": "R03_ZNA_12",
    "section": "Znaczenie stawonogów",
    "type": "scenario",
    "prompt": "Na polu ziemniaków pojawia się chrząszcz, który żywi się liśćmi, kwiatami i łodygami, obniżając plon. Który owad opisuje ta sytuacja?",
    "options": [
      "stonka ziemniaczana",
      "biedronka siedmiokropka",
      "jedwabnik morwowy",
      "żagnica sina",
      "kleszcz pospolity",
      "rozwielitka"
    ],
    "answer": 0,
    "image": "/img/r03_owady_znaczenie.jpg",
    "explanation": "Stonka ziemniaczana jest szkodnikiem upraw ziemniaka i może poważnie obniżyć plon."
  },
  {
    "id": "R03_ZNA_13",
    "section": "Znaczenie stawonogów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: miód, wosk, jedwab, perły, pyłek przenoszony przez owady.",
    "options": null,
    "answer": "perły",
    "explanation": "Perły są związane z małżami, czyli mięczakami, a pozostałe przykłady dotyczą stawonogów, zwłaszcza owadów."
  },
  {
    "id": "R03_ZNA_14",
    "section": "Znaczenie stawonogów",
    "type": "fill_in",
    "prompt": "Stawonogi mogą mieć znaczenie pozytywne i __________ dla człowieka.",
    "options": null,
    "answer": [
      "negatywne"
    ],
    "altAnswers": [
      [
        "negatywne",
        "ujemne"
      ]
    ],
    "explanation": "W rozdziale opisano zarówno korzyści ze stawonogów, jak i szkody oraz zagrożenia powodowane przez niektóre gatunki."
  },
  {
    "id": "R03_MIE_01",
    "section": "Mięczaki",
    "type": "single_choice",
    "prompt": "Jaka jest wspólna cecha mięczaków wskazana w rozdziale?",
    "options": [
      "miękkie ciało",
      "odnóża ze stawami",
      "chitynowy oskórek",
      "ciało zawsze podzielone na segmenty",
      "4 pary odnóży",
      "brak worka trzewiowego"
    ],
    "answer": 0,
    "explanation": "Mięczaki mają miękkie ciało; większość z nich wytwarza także twardą muszlę."
  },
  {
    "id": "R03_MIE_02",
    "section": "Mięczaki",
    "type": "multi_select",
    "prompt": "Zaznacz środowiska, w których występują mięczaki.",
    "options": [
      "ląd",
      "woda słodka",
      "woda słona",
      "wilgotne i zacienione miejsca na lądzie",
      "wyłącznie suche pustynie",
      "wyłącznie powietrze"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mięczaki żyją w wodzie słodkiej i słonej oraz na lądzie, zwykle w miejscach wilgotnych i zacienionych."
  },
  {
    "id": "R03_MIE_03",
    "section": "Mięczaki",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli do grup mięczaków.",
    "options": null,
    "items": [
      "wstężyk gajowy",
      "błotniarka stawowa",
      "omułek jadalny",
      "perłopław",
      "ośmiornica",
      "kałamarnica"
    ],
    "categories": [
      "ślimaki",
      "małże",
      "głowonogi"
    ],
    "answer": {
      "ślimaki": [
        "wstężyk gajowy",
        "błotniarka stawowa"
      ],
      "małże": [
        "omułek jadalny",
        "perłopław"
      ],
      "głowonogi": [
        "ośmiornica",
        "kałamarnica"
      ]
    },
    "image": "/img/r03_mieczaki_podzial.jpg",
    "explanation": "Do mięczaków należą ślimaki, małże oraz głowonogi."
  },
  {
    "id": "R03_MIE_04",
    "section": "Mięczaki",
    "type": "fill_in",
    "prompt": "Ciało większości mięczaków składa się z głowy, nogi i __________.",
    "options": null,
    "answer": [
      "worka trzewiowego"
    ],
    "altAnswers": [
      [
        "worka trzewiowego",
        "worek trzewiowy"
      ]
    ],
    "explanation": "Worek trzewiowy zawiera większość narządów wewnętrznych mięczaka."
  },
  {
    "id": "R03_MIE_05",
    "section": "Mięczaki",
    "type": "single_choice",
    "prompt": "Która część ciała ślimaka służy do poruszania się?",
    "options": [
      "noga",
      "zawias muszli",
      "syfon wypustowy",
      "kądziołki przędne",
      "żądło",
      "wachlarz ogonowy"
    ],
    "answer": 0,
    "image": "/img/r03_slimak_budowa.jpg",
    "explanation": "Ślimaki poruszają się za pomocą nogi."
  },
  {
    "id": "R03_MIE_06",
    "section": "Mięczaki",
    "type": "multi_select",
    "prompt": "Zaznacz cechy ślimaków opisane w rozdziale.",
    "options": [
      "ciało z głowy, nogi i worka trzewiowego",
      "u większości pojedyncza, spiralnie skręcona muszla",
      "występują w wodzie i na lądzie",
      "u roślinożernych występuje tarka na języku",
      "zawsze mają dwuczęściową muszlę",
      "nie mają głowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r03_slimak_budowa.jpg",
    "explanation": "Ślimaki mają głowę, nogę i worek trzewiowy, zwykle pojedynczą muszlę, żyją w wodzie lub na lądzie, a roślinożerne używają tarki."
  },
  {
    "id": "R03_MIE_07",
    "section": "Mięczaki",
    "type": "true_false",
    "prompt": "Wszystkie ślimaki oddychają za pomocą skrzeli.",
    "options": null,
    "answer": false,
    "explanation": "Ślimaki wodne mają skrzela, natomiast ślimaki lądowe mają narząd działający podobnie do płuca."
  },
  {
    "id": "R03_MIE_08",
    "section": "Mięczaki",
    "type": "riddle",
    "prompt": "Narząd na języku roślinożernych ślimaków, służący do zeskrobywania pokarmu, to...",
    "options": null,
    "answer": "tarka",
    "altAnswers": [
      "tarka"
    ],
    "explanation": "Tarka umożliwia roślinożernym ślimakom ścieranie i pobieranie pokarmu."
  },
  {
    "id": "R03_MIE_09",
    "section": "Mięczaki",
    "type": "match",
    "prompt": "Połącz element budowy małża z funkcją.",
    "options": null,
    "left": [
      "muszla z dwóch części",
      "syfon wpustowy",
      "syfon wypustowy",
      "noga"
    ],
    "right": [
      "chroni ciało i jest połączona zawiasem",
      "wprowadza wodę do ciała",
      "odprowadza wodę z ciała",
      "służy do zakotwiczania się lub zagrzebywania w mule"
    ],
    "answer": {
      "muszla z dwóch części": "chroni ciało i jest połączona zawiasem",
      "syfon wpustowy": "wprowadza wodę do ciała",
      "syfon wypustowy": "odprowadza wodę z ciała",
      "noga": "służy do zakotwiczania się lub zagrzebywania w mule"
    },
    "image": "/img/r03_malze_budowa.jpg",
    "explanation": "Budowa małża jest związana z osiadłym trybem życia i filtrowaniem wody."
  },
  {
    "id": "R03_MIE_10",
    "section": "Mięczaki",
    "type": "true_false",
    "prompt": "Małże nie mają głowy.",
    "options": null,
    "answer": true,
    "image": "/img/r03_malze_budowa.jpg",
    "explanation": "W rozdziale podano, że małże są jedyną z omawianych grup mięczaków bez głowy."
  },
  {
    "id": "R03_MIE_11",
    "section": "Mięczaki",
    "type": "single_choice",
    "prompt": "Która cecha jest typowa dla małży?",
    "options": [
      "muszla złożona z dwóch części połączonych zawiasem",
      "noga przekształcona w ramiona",
      "4 pary odnóży krocznych",
      "oczy złożone na słupkach",
      "chitynowy oskórek",
      "skrzydła"
    ],
    "answer": 0,
    "explanation": "Małże mają muszlę złożoną z dwóch części połączonych zawiasem."
  },
  {
    "id": "R03_MIE_12",
    "section": "Mięczaki",
    "type": "single_choice",
    "prompt": "W co jest przekształcona noga głowonogów?",
    "options": [
      "w ramiona z przyssawkami",
      "w dwuczęściową muszlę",
      "w odnóża ze stawami",
      "w skrzydła",
      "w szczypce",
      "w syfon wpustowy"
    ],
    "answer": 0,
    "image": "/img/r03_glowonog_budowa.jpg",
    "explanation": "U głowonogów noga jest przekształcona w ramiona wyposażone w przyssawki."
  },
  {
    "id": "R03_MIE_13",
    "section": "Mięczaki",
    "type": "match",
    "prompt": "Połącz element budowy głowonoga z funkcją.",
    "options": null,
    "left": [
      "ramiona z przyssawkami",
      "lejek",
      "płetwa",
      "skrzela"
    ],
    "right": [
      "chwytanie ofiary",
      "gwałtowne wyrzucanie wody i ruch odrzutowy",
      "poruszanie się",
      "wymiana gazowa w wodzie"
    ],
    "answer": {
      "ramiona z przyssawkami": "chwytanie ofiary",
      "lejek": "gwałtowne wyrzucanie wody i ruch odrzutowy",
      "płetwa": "poruszanie się",
      "skrzela": "wymiana gazowa w wodzie"
    },
    "image": "/img/r03_glowonog_budowa.jpg",
    "explanation": "Głowonogi są morskimi drapieżnikami, a ich budowa umożliwia polowanie i sprawne poruszanie się."
  },
  {
    "id": "R03_MIE_14",
    "section": "Mięczaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ośmiornica, kałamarnica, mątwa, kleszcz pospolity.",
    "options": null,
    "answer": "kleszcz pospolity",
    "explanation": "Kleszcz pospolity jest pajęczakiem, a ośmiornica, kałamarnica i mątwa to głowonogi."
  },
  {
    "id": "R03_MIX_01",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj zwierzęta do grup bezkręgowców.",
    "options": null,
    "items": [
      "rak szlachetny",
      "pająk krzyżak",
      "pszczoła miodna",
      "wstężyk gajowy",
      "omułek jadalny",
      "kałamarnica"
    ],
    "categories": [
      "stawonogi",
      "mięczaki"
    ],
    "answer": {
      "stawonogi": [
        "rak szlachetny",
        "pająk krzyżak",
        "pszczoła miodna"
      ],
      "mięczaki": [
        "wstężyk gajowy",
        "omułek jadalny",
        "kałamarnica"
      ]
    },
    "explanation": "Rak, pająk i pszczoła są stawonogami, a ślimak, małż i kałamarnica należą do mięczaków."
  },
  {
    "id": "R03_MIX_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz grupę z typową cechą.",
    "options": null,
    "left": [
      "stawonogi",
      "ślimaki",
      "małże",
      "głowonogi"
    ],
    "right": [
      "odnóża ze stawami",
      "pojedyncza muszla u większości gatunków",
      "muszla z dwóch części",
      "ramiona z przyssawkami"
    ],
    "answer": {
      "stawonogi": "odnóża ze stawami",
      "ślimaki": "pojedyncza muszla u większości gatunków",
      "małże": "muszla z dwóch części",
      "głowonogi": "ramiona z przyssawkami"
    },
    "explanation": "Cechy budowy pozwalają rozróżniać główne grupy stawonogów i mięczaków."
  },
  {
    "id": "R03_MIX_03",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Które zwierzę jest stawonogiem, a nie mięczakiem?",
    "options": [
      "rak szlachetny",
      "wstężyk gajowy",
      "omułek jadalny",
      "kałamarnica",
      "ośmiornica",
      "pomrów wielki"
    ],
    "answer": 0,
    "explanation": "Rak szlachetny jest skorupiakiem, czyli stawonogiem."
  },
  {
    "id": "R03_MIX_04",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Które zwierzę jest mięczakiem, a nie stawonogiem?",
    "options": [
      "ośmiornica",
      "pszczoła miodna",
      "pająk krzyżak",
      "mucha domowa",
      "kleszcz pospolity",
      "stonoga murowa"
    ],
    "answer": 0,
    "image": "/img/r03_mieczaki_podzial.jpg",
    "explanation": "Ośmiornica jest głowonogiem, czyli mięczakiem."
  },
  {
    "id": "R03_MIX_05",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: chitynowy oskórek, linienie, odnóża ze stawami, worek trzewiowy.",
    "options": null,
    "answer": "worek trzewiowy",
    "explanation": "Worek trzewiowy jest częścią ciała mięczaków, a pozostałe pojęcia dotyczą stawonogów."
  },
  {
    "id": "R03_MIX_06",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz organizmy, które według rozdziału mogą mieć znaczenie jako pasożyty człowieka lub zwierząt.",
    "options": [
      "wesz ludzka",
      "kleszcz pospolity",
      "pchła psia",
      "świerzbowiec ludzki",
      "rozwielitka",
      "biedronka siedmiokropka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wesz, kleszcz, pchła i świerzbowiec to przykłady stawonogów pasożytniczych."
  },
  {
    "id": "R03_MIX_07",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Zarówno stawonogi, jak i mięczaki należą do bezkręgowców.",
    "options": null,
    "answer": true,
    "explanation": "Obie omawiane grupy nie mają kręgosłupa, dlatego należą do bezkręgowców."
  },
  {
    "id": "R03_MIX_08",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Uczeń obserwuje zwierzę o miękkim ciele, z głową, nogą i spiralnie skręconą muszlą. Do której grupy należy ten organizm?",
    "options": [
      "ślimaki",
      "owady",
      "pajęczaki",
      "skorupiaki",
      "głowonogi",
      "ryby"
    ],
    "answer": 0,
    "image": "/img/r03_slimak_budowa.jpg",
    "explanation": "Opis wskazuje na ślimaka, który jest mięczakiem."
  },
  {
    "id": "R03_MIX_09",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Stawonogi mają odnóża ze stawami, a mięczaki mają zwykle __________ ciało.",
    "options": null,
    "answer": [
      "miękkie"
    ],
    "altAnswers": [
      [
        "miękkie",
        "miekkie"
      ]
    ],
    "explanation": "Miękkie ciało jest wspólną cechą mięczaków."
  },
  {
    "id": "R03_MIX_10",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż przykładową drogę korzystnego działania małży w zbiorniku wodnym.",
    "options": null,
    "items": [
      "woda wpływa przez syfon wpustowy",
      "małż odfiltrowuje cząstki pokarmowe",
      "oczyszczona woda wypływa z ciała",
      "zbiornik jest filtrowany"
    ],
    "answer": [
      "woda wpływa przez syfon wpustowy",
      "małż odfiltrowuje cząstki pokarmowe",
      "oczyszczona woda wypływa z ciała",
      "zbiornik jest filtrowany"
    ],
    "image": "/img/r03_malze_budowa.jpg",
    "explanation": "Małże filtrują wodę, pobierając z niej tlen i cząstki pokarmowe, a następnie wypuszczając wodę z ciała."
  },
  {
    "id": "R03_MIX_11",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz znaczenie z przykładem organizmu.",
    "options": null,
    "left": [
      "zapylanie roślin",
      "filtrowanie wody",
      "produkcja jedwabiu",
      "uszkadzanie drewnianych elementów statków"
    ],
    "right": [
      "pszczoła miodna",
      "omułek jadalny",
      "jedwabnik morwowy",
      "świdrak okrętowiec"
    ],
    "answer": {
      "zapylanie roślin": "pszczoła miodna",
      "filtrowanie wody": "omułek jadalny",
      "produkcja jedwabiu": "jedwabnik morwowy",
      "uszkadzanie drewnianych elementów statków": "świdrak okrętowiec"
    },
    "explanation": "Różne bezkręgowce mogą mieć odmienne znaczenie dla środowiska i człowieka."
  },
  {
    "id": "R03_MIX_12",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Która para zawiera wyłącznie zwierzęta opisane jako filtratory lub oczyszczające wodę?",
    "options": [
      "rozwielitka i omułek jadalny",
      "kleszcz i wesz ludzka",
      "stonka ziemniaczana i brudnica mniszka",
      "pająk krzyżak i ośmiornica",
      "świdrak okrętowiec i pchła psia",
      "biedronka i mucha domowa"
    ],
    "answer": 0,
    "explanation": "Rozwielitka filtruje wodę jako składnik planktonu, a omułek jadalny oczyszcza wodę przez filtrację."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które cechy chitynowego oskórka stawonogów są opisane w rozdziale?",
    "options": [
      "chroni przed urazami",
      "ogranicza utratę wody na lądzie",
      "pełni funkcję szkieletu zewnętrznego",
      "musi być okresowo zrzucany",
      "jest częścią dwuczęściowej muszli małży",
      "służy do filtrowania wody"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r03_linienie_stawonoga.jpg",
    "explanation": "Chitynowy oskórek chroni ciało, ogranicza utratę wody, działa jak szkielet zewnętrzny i jest okresowo zrzucany podczas linienia."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zwierzę ma głowotułów i odwłok, 4 pary odnóży krocznych, brak czułków, liczne oczy proste oraz gruczoły przędne. Do której grupy należy?",
    "options": [
      "pajęczaki",
      "owady",
      "skorupiaki",
      "małże",
      "ślimaki",
      "głowonogi"
    ],
    "answer": 0,
    "image": "/img/r03_pajak_budowa.jpg",
    "explanation": "Zestaw cech wskazuje na pajęczaka, a obecność gruczołów przędnych pasuje do pająka."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy umożliwiające owadom życie na lądzie i lot.",
    "options": [
      "chitynowy oskórek chroniący przed utratą wody",
      "skrzydła u form latających",
      "tlen atmosferyczny jako źródło tlenu do oddychania",
      "różne typy odnóży krocznych",
      "dwuczęściowa muszla",
      "syfon wpustowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r03_pszczola_budowa.jpg",
    "explanation": "Owady mają oskórek, skrzydła u wielu gatunków, oddychają tlenem atmosferycznym i mają odnóża przystosowane do różnych funkcji."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz gatunek z jego znaczeniem dla człowieka.",
    "options": null,
    "left": [
      "pomrów wielki",
      "świdrak okrętowiec",
      "perłopław",
      "roztocza kurzu domowego"
    ],
    "right": [
      "powoduje szkody w uprawach roślin",
      "uszkadza drewniane elementy statków",
      "wytwarza perły używane do ozdób",
      "mogą wywoływać alergie"
    ],
    "answer": {
      "pomrów wielki": "powoduje szkody w uprawach roślin",
      "świdrak okrętowiec": "uszkadza drewniane elementy statków",
      "perłopław": "wytwarza perły używane do ozdób",
      "roztocza kurzu domowego": "mogą wywoływać alergie"
    },
    "explanation": "W rozdziale pokazano, że zarówno mięczaki, jak i stawonogi mogą mieć pozytywne i negatywne znaczenie dla człowieka."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który opis najlepiej wyjaśnia, dlaczego głowonogi mogą być aktywnymi drapieżnikami?",
    "options": [
      "mają ramiona z przyssawkami, duże oczy i lejek umożliwiający ruch odrzutowy",
      "mają syfony do filtrowania wody i brak głowy",
      "mają 3 pary odnóży i skrzydła",
      "mają odnóża czepne i żyją na włosach człowieka",
      "mają dwuczęściową muszlę i prowadzą osiadły tryb życia",
      "mają czułki oraz 5 par odnóży krocznych"
    ],
    "answer": 0,
    "image": "/img/r03_glowonog_budowa.jpg",
    "explanation": "Ramiona z przyssawkami służą do chwytania ofiary, a lejek i oczy wspierają aktywne polowanie."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż logiczny ciąg związany z aparatem gębowym owadów.",
    "options": null,
    "items": [
      "rodzaj pokarmu ma określoną konsystencję",
      "aparat gębowy jest dostosowany do pokarmu",
      "owad skutecznie pobiera pokarm",
      "różne gatunki mogą korzystać z różnych źródeł pożywienia"
    ],
    "answer": [
      "rodzaj pokarmu ma określoną konsystencję",
      "aparat gębowy jest dostosowany do pokarmu",
      "owad skutecznie pobiera pokarm",
      "różne gatunki mogą korzystać z różnych źródeł pożywienia"
    ],
    "image": "/img/r03_aparaty_gebowe_owadow.jpg",
    "explanation": "Różnorodność aparatów gębowych pozwala owadom korzystać z różnych rodzajów pokarmu."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: syfon wpustowy, syfon wypustowy, noga do zagrzebywania, lejek do ruchu odrzutowego.",
    "options": null,
    "answer": "lejek do ruchu odrzutowego",
    "explanation": "Lejek jest elementem budowy głowonogów, a pozostałe elementy dotyczą budowy małża."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Największy bezkręgowiec na świecie wymieniony w rozdziale to...",
    "options": null,
    "answer": "kałamarnica olbrzymia",
    "altAnswers": [
      "kałamarnica olbrzymia",
      "kalamarnica olbrzymia"
    ],
    "explanation": "W rozdziale podano, że do głowonogów należy największy bezkręgowiec świata — kałamarnica olbrzymia."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W wodzie znajduje się zwierzę z dwuczęściową muszlą, syfonem wpustowym i wypustowym oraz nogą do zagrzebywania w mule. Jaką pełni ważną funkcję ekologiczną?",
    "options": [
      "filtruje wodę",
      "zapyla rośliny",
      "wytwarza pajęczynę",
      "przenosi boreliozę",
      "drąży korytarze w skórze człowieka",
      "produkuje miód"
    ],
    "answer": 0,
    "image": "/img/r03_malze_budowa.jpg",
    "explanation": "Opis wskazuje na małża, który pobiera wodę przez syfon i może oczyszczać zbiorniki wodne przez filtrowanie."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która informacja najlepiej odróżnia ślimaki lądowe od wodnych w rozdziale?",
    "options": [
      "lądowe mają narząd działający podobnie do płuca, a wodne mają skrzela",
      "lądowe mają zawsze dwuczęściową muszlę, a wodne nie mają muszli",
      "lądowe mają 4 pary odnóży, a wodne 3 pary",
      "lądowe mają lejek, a wodne mają żądło",
      "lądowe są zawsze pasożytami, a wodne są zawsze owadami",
      "lądowe nie mają worka trzewiowego, a wodne go mają"
    ],
    "answer": 0,
    "explanation": "Ślimaki wodne mają skrzela, natomiast ślimaki lądowe oddychają narządem funkcjonującym podobnie do płuca."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Bezkręgowce, część 2",
  icon: "🦋",
  sectionOrder: [
    "Stawonogi",
    "Przystosowania stawonogów",
    "Znaczenie stawonogów",
    "Mięczaki",
    "Powtórka mieszana",
    "Super trudne"
  ],
  sectionIcons: {
    "Stawonogi": "🦗",
    "Przystosowania stawonogów": "🕷️",
    "Znaczenie stawonogów": "🐝",
    "Mięczaki": "🐚",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
