// Skróty sekcji:
//   RYB = Ryby
//   ZNA = Znaczenie i ochrona
//   PLA = Płazy
//   GAD = Gady
//   ZPG = Płazy i gady: znaczenie
//   MIX = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_RYB_01",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "Co jest wspólną cechą wszystkich kręgowców?",
    "options": [
      "obecność kręgosłupa",
      "obecność skrzydeł",
      "życie wyłącznie w wodzie",
      "zapłodnienie zewnętrzne",
      "skóra pokryta łuskami",
      "rozwój złożony"
    ],
    "answer": 0,
    "image": "/img/r04_kregowce_podzial.jpg",
    "explanation": "Kręgowce mają kręgosłup, czyli część szkieletu wewnętrznego."
  },
  {
    "id": "R04_RYB_02",
    "section": "Ryby",
    "type": "multi_select",
    "prompt": "Zaznacz grupy zwierząt zaliczane do kręgowców.",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki",
      "owady"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r04_kregowce_podzial.jpg",
    "explanation": "Do kręgowców należą ryby, płazy, gady, ptaki i ssaki."
  },
  {
    "id": "R04_RYB_03",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "W jakich środowiskach występują ryby opisane w rozdziale?",
    "options": [
      "w wodach słodkich i słonych",
      "wyłącznie w morzach",
      "wyłącznie w rzekach i jeziorach",
      "wyłącznie na lądzie",
      "wyłącznie w wodach arktycznych",
      "tylko w wodzie tropikalnej"
    ],
    "answer": 0,
    "image": "/img/r04_ryby_srodowiska.jpg",
    "explanation": "Ryby żyją w wodach słodkich, takich jak rzeki i jeziora, oraz w wodach słonych, czyli morzach i oceanach."
  },
  {
    "id": "R04_RYB_04",
    "section": "Ryby",
    "type": "true_false",
    "prompt": "Temperatura ciała ryb zależy od temperatury otoczenia.",
    "options": null,
    "answer": true,
    "explanation": "Ryby są zwierzętami zmiennocieplnymi, więc temperatura ich ciała zmienia się wraz z warunkami środowiska."
  },
  {
    "id": "R04_RYB_05",
    "section": "Ryby",
    "type": "fill_in",
    "prompt": "Zwierzęta, których temperatura ciała zależy od temperatury otoczenia, nazywamy __________.",
    "options": null,
    "answer": [
      "zmiennocieplnymi"
    ],
    "altAnswers": [
      [
        "zmiennocieplnymi",
        "zmiennocieplne"
      ]
    ],
    "explanation": "Zmiennocieplność oznacza zależność temperatury ciała od czynników zewnętrznych, przede wszystkim od temperatury otoczenia."
  },
  {
    "id": "R04_RYB_06",
    "section": "Ryby",
    "type": "match",
    "prompt": "Połącz przystosowanie ryby z jego funkcją.",
    "options": null,
    "left": [
      "opływowy kształt ciała",
      "skrzela",
      "płetwy",
      "linia boczna",
      "pęcherz pławny"
    ],
    "right": [
      "zmniejsza opór wody",
      "umożliwiają wymianę gazową",
      "służą do poruszania się",
      "odbiera informacje o ruchu wody",
      "ułatwia kontrolowanie głębokości zanurzenia"
    ],
    "answer": {
      "opływowy kształt ciała": "zmniejsza opór wody",
      "skrzela": "umożliwiają wymianę gazową",
      "płetwy": "służą do poruszania się",
      "linia boczna": "odbiera informacje o ruchu wody",
      "pęcherz pławny": "ułatwia kontrolowanie głębokości zanurzenia"
    },
    "image": "/img/r04_ryba_budowa.jpg",
    "explanation": "Budowa ryby jest dostosowana do życia w wodzie, poruszania się, oddychania i odbierania bodźców."
  },
  {
    "id": "R04_RYB_07",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "Który narząd ryby służy do wymiany gazowej w wodzie?",
    "options": [
      "skrzela",
      "płuca",
      "linia boczna",
      "pęcherz pławny",
      "łuski",
      "płetwa ogonowa"
    ],
    "answer": 0,
    "image": "/img/r04_ryba_budowa.jpg",
    "explanation": "Skrzela umożliwiają rybom pobieranie tlenu rozpuszczonego w wodzie."
  },
  {
    "id": "R04_RYB_08",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "Co odbiera linia boczna ryby?",
    "options": [
      "informacje o ruchu wody",
      "światło słoneczne",
      "temperaturę powietrza",
      "zapach pokarmu na lądzie",
      "dźwięk przez błonę bębenkową",
      "ilość gazów w pęcherzu pławnym"
    ],
    "answer": 0,
    "image": "/img/r04_ryba_budowa.jpg",
    "explanation": "Linia boczna jest narządem czuciowym, który odbiera informacje o ruchu wody."
  },
  {
    "id": "R04_RYB_09",
    "section": "Ryby",
    "type": "riddle",
    "prompt": "Okres rozmnażania ryb, podczas którego samica składa ikrę, to...",
    "options": null,
    "answer": "tarło",
    "altAnswers": [
      "tarło",
      "tarlo"
    ],
    "image": "/img/r04_ryba_rozwoj.jpg",
    "explanation": "Tarło to okres godowy ryb, w którym samica składa ikrę, a samiec polewa ją mleczem."
  },
  {
    "id": "R04_RYB_10",
    "section": "Ryby",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania i rozwoju ryb w poprawnej kolejności.",
    "options": null,
    "items": [
      "z ikry rozwija się narybek",
      "dorosłe ryby rozmnażają się płciowo",
      "samica składa ikrę",
      "samiec polewa ikrę mleczem"
    ],
    "answer": [
      "dorosłe ryby rozmnażają się płciowo",
      "samica składa ikrę",
      "samiec polewa ikrę mleczem",
      "z ikry rozwija się narybek"
    ],
    "image": "/img/r04_ryba_rozwoj.jpg",
    "explanation": "U większości ryb zapłodnienie zachodzi poza ciałem samicy, a młode ryby przypominają osobniki dorosłe."
  },
  {
    "id": "R04_RYB_11",
    "section": "Ryby",
    "type": "single_choice",
    "prompt": "Jaki typ rozwoju przechodzą ryby opisane w rozdziale?",
    "options": [
      "rozwój prosty",
      "rozwój złożony z kijanką",
      "rozwój z poczwarką",
      "rozwój bez jaj",
      "rozwój wyłącznie wewnątrz organizmu matki",
      "brak rozwoju osobniczego"
    ],
    "answer": 0,
    "image": "/img/r04_ryba_rozwoj.jpg",
    "explanation": "Ryby przechodzą rozwój prosty, bo narybek jest podobny do osobników dorosłych."
  },
  {
    "id": "R04_RYB_12",
    "section": "Ryby",
    "type": "true_false",
    "prompt": "Ikra to jaja ryb.",
    "options": null,
    "answer": true,
    "image": "/img/r04_ryba_rozwoj.jpg",
    "explanation": "Jaja ryb nazywa się ikrą."
  },
  {
    "id": "R04_ZNA_01",
    "section": "Znaczenie i ochrona",
    "type": "sort",
    "prompt": "Przyporządkuj ryby do środowiska występowania podanego w rozdziale.",
    "options": null,
    "items": [
      "pstrąg",
      "okoń",
      "karp",
      "śledź",
      "tuńczyk",
      "dorsz"
    ],
    "categories": [
      "słodkowodne",
      "słonowodne"
    ],
    "answer": {
      "słodkowodne": [
        "pstrąg",
        "okoń",
        "karp"
      ],
      "słonowodne": [
        "śledź",
        "tuńczyk",
        "dorsz"
      ]
    },
    "image": "/img/r04_ryby_srodowiska.jpg",
    "explanation": "Pstrąg, okoń i karp są przykładami ryb słodkowodnych, a śledź, tuńczyk i dorsz ryb słonowodnych."
  },
  {
    "id": "R04_ZNA_02",
    "section": "Znaczenie i ochrona",
    "type": "sort",
    "prompt": "Przyporządkuj ryby do sposobu odżywiania.",
    "options": null,
    "items": [
      "amur biały",
      "świnka pospolita",
      "płoć",
      "karaś pospolity",
      "szczupak pospolity",
      "sum pospolity"
    ],
    "categories": [
      "roślinożerne",
      "wszystkożerne",
      "mięsożerne"
    ],
    "answer": {
      "roślinożerne": [
        "amur biały",
        "świnka pospolita"
      ],
      "wszystkożerne": [
        "płoć",
        "karaś pospolity"
      ],
      "mięsożerne": [
        "szczupak pospolity",
        "sum pospolity"
      ]
    },
    "image": "/img/r04_roznorodnosc_ryb.jpg",
    "explanation": "W rozdziale ryby podzielono na roślinożerne, wszystkożerne i mięsożerne zależnie od rodzaju pobieranego pokarmu."
  },
  {
    "id": "R04_ZNA_03",
    "section": "Znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne znaczenie ryb dla człowieka.",
    "options": [
      "są źródłem pokarmu",
      "są źródłem tranu",
      "dostarczają mączki rybnej",
      "mogą być obiektem hobby",
      "zawsze niszczą zbiorniki wodne",
      "wyłącznie zatruwają wodę"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_znaczenie_ryb.jpg",
    "explanation": "Ryby są ważne jako pokarm, źródło tranu i mączki rybnej, a także jako obiekt wędkarstwa, akwarystyki i nurkowania."
  },
  {
    "id": "R04_ZNA_04",
    "section": "Znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie ryb w przyrodzie.",
    "options": [
      "regulują liczebność organizmów wodnych",
      "mogą być pokarmem dla innych zwierząt",
      "pomagają utrzymać równowagę w zbiorniku",
      "zawsze zaburzają równowagę akwenu",
      "nie uczestniczą w łańcuchach pokarmowych",
      "żyją wyłącznie w akwariach"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r04_znaczenie_ryb.jpg",
    "explanation": "Ryby regulują liczebność organizmów wodnych, są pokarmem dla innych zwierząt i pomagają utrzymać równowagę zbiorników."
  },
  {
    "id": "R04_ZNA_05",
    "section": "Znaczenie i ochrona",
    "type": "multi_select",
    "prompt": "Zaznacz działania człowieka szkodliwe dla ryb.",
    "options": [
      "zanieczyszczanie wód",
      "nadmierne odławianie",
      "osuszanie zbiorników wodnych",
      "budowa zapór zaburzających wędrówki",
      "tworzenie przepławek",
      "kontrola połowów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_zagrozenia_ryb.jpg",
    "explanation": "Do zagrożeń dla ryb należą zanieczyszczenia, nadmierne odławianie, osuszanie zbiorników i budowa zapór utrudniających wędrówki."
  },
  {
    "id": "R04_ZNA_06",
    "section": "Znaczenie i ochrona",
    "type": "single_choice",
    "prompt": "Po co buduje się przepławki dla ryb?",
    "options": [
      "aby ryby mogły ominąć zaporę podczas wędrówki",
      "aby zatrzymać wszystkie ryby w jednym miejscu",
      "aby osuszyć rzekę",
      "aby zmniejszyć ilość tlenu w wodzie",
      "aby uniemożliwić tarło",
      "aby zastąpić skrzela"
    ],
    "answer": 0,
    "image": "/img/r04_przeplawka_ryby.jpg",
    "explanation": "Przepławka pozwala rybom ominąć zaporę i kontynuować wędrówkę."
  },
  {
    "id": "R04_ZNA_07",
    "section": "Znaczenie i ochrona",
    "type": "match",
    "prompt": "Połącz działanie z jego wpływem na ryby.",
    "options": null,
    "left": [
      "monitorowanie czystości wód",
      "oczyszczalnie ścieków",
      "okresy ochronne",
      "wymiary ochronne",
      "tworzenie przepławek"
    ],
    "right": [
      "pozwala ocenić stan zbiornika",
      "zmniejsza ilość zanieczyszczeń",
      "ograniczają połów w czasie rozrodu",
      "chronią zbyt małe osobniki",
      "ułatwia rybom wędrówki"
    ],
    "answer": {
      "monitorowanie czystości wód": "pozwala ocenić stan zbiornika",
      "oczyszczalnie ścieków": "zmniejsza ilość zanieczyszczeń",
      "okresy ochronne": "ograniczają połów w czasie rozrodu",
      "wymiary ochronne": "chronią zbyt małe osobniki",
      "tworzenie przepławek": "ułatwia rybom wędrówki"
    },
    "image": "/img/r04_ochrona_ryb.jpg",
    "explanation": "Działania ochronne zmniejszają presję człowieka na ryby i ich środowisko życia."
  },
  {
    "id": "R04_ZNA_08",
    "section": "Znaczenie i ochrona",
    "type": "scenario",
    "prompt": "W rzece powstaje zapora. Część ryb nie może dotrzeć do miejsc rozrodu. Jakie działanie najlepiej ograniczy ten problem?",
    "options": [
      "budowa przepławki",
      "osuszenie rzeki",
      "zwiększenie połowów",
      "wprowadzenie ścieków",
      "zniszczenie roślinności brzegowej",
      "kolekcjonerskie odławianie ryb"
    ],
    "answer": 0,
    "image": "/img/r04_przeplawka_ryby.jpg",
    "explanation": "Przepławka umożliwia rybom swobodne omijanie zapory podczas wędrówki."
  },
  {
    "id": "R04_ZNA_09",
    "section": "Znaczenie i ochrona",
    "type": "true_false",
    "prompt": "Ryby wrażliwe na zanieczyszczenia mogą być wskaźnikiem czystości środowiska.",
    "options": null,
    "answer": true,
    "explanation": "Niektóre ryby reagują na zanieczyszczenia, dlatego ich obecność lub brak może świadczyć o stanie środowiska."
  },
  {
    "id": "R04_ZNA_10",
    "section": "Znaczenie i ochrona",
    "type": "riddle",
    "prompt": "Tłuszcz pozyskiwany z wątroby niektórych ryb, np. dorszy, to...",
    "options": null,
    "answer": "tran",
    "altAnswers": [
      "tran"
    ],
    "explanation": "Tran jest tłuszczem rybnym, który zawiera m.in. dużo witaminy D."
  },
  {
    "id": "R04_ZNA_11",
    "section": "Znaczenie i ochrona",
    "type": "single_choice",
    "prompt": "Który opis najlepiej wyjaśnia, dlaczego masowe śnięcie ryb jest sygnałem problemu w zbiorniku?",
    "options": [
      "może świadczyć o niedostatku tlenu lub obecności szkodliwych związków",
      "zawsze oznacza naturalne tarło",
      "dowodzi, że ryby są stałocieplne",
      "jest dowodem na rozwój prosty",
      "zawsze jest skutkiem braku pęcherza pławnego",
      "oznacza, że w wodzie nie ma glonów"
    ],
    "answer": 0,
    "image": "/img/r04_zagrozenia_ryb.jpg",
    "explanation": "Śnięcie ryb może być spowodowane niedostatkiem tlenu, szkodliwymi związkami lub niekorzystną temperaturą wody."
  },
  {
    "id": "R04_ZNA_12",
    "section": "Znaczenie i ochrona",
    "type": "single_choice",
    "prompt": "Która para obejmuje ryby wędrujące między wodą słodką a słoną w związku z rozmnażaniem?",
    "options": [
      "łosoś i węgorz",
      "okoń i leszcz",
      "karp i płoć",
      "szczupak i karaś",
      "amur i świnka",
      "tuńczyk i dorsz"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że łososie, węgorze i trocie spędzają część życia w wodzie słodkiej i część w słonej, a zmiana środowiska jest związana z rozmnażaniem."
  },
  {
    "id": "R04_PLA_01",
    "section": "Płazy",
    "type": "single_choice",
    "prompt": "Dlaczego płazy nazywa się zwierzętami dwuśrodowiskowymi?",
    "options": [
      "ponieważ ich organizmy są przystosowane do życia w wodzie i na lądzie",
      "ponieważ żyją wyłącznie w morzach",
      "ponieważ zawsze mają pancerz",
      "ponieważ nie przechodzą rozwoju złożonego",
      "ponieważ są stałocieplne",
      "ponieważ ich jaja rozwijają się wyłącznie w suchym piasku"
    ],
    "answer": 0,
    "image": "/img/r04_plaz_dwa_srodowiska.jpg",
    "explanation": "Płazy są związane z wodą i lądem: dorosłe osobniki mogą żyć na lądzie, ale rozmnażanie większości płazów odbywa się w wodzie."
  },
  {
    "id": "R04_PLA_02",
    "section": "Płazy",
    "type": "true_false",
    "prompt": "Płazy są zwierzętami zmiennocieplnymi.",
    "options": null,
    "answer": true,
    "explanation": "Temperatura ciała płazów zależy od temperatury otoczenia."
  },
  {
    "id": "R04_PLA_03",
    "section": "Płazy",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do grup płazów.",
    "options": null,
    "items": [
      "mają ogon",
      "nie mają ogona",
      "nie mają kończyn",
      "przykład: salamandra",
      "przykład: żaba",
      "przykład: marszczelec"
    ],
    "categories": [
      "ogoniaste",
      "bezogonowe",
      "beznogie"
    ],
    "answer": {
      "ogoniaste": [
        "mają ogon",
        "przykład: salamandra"
      ],
      "bezogonowe": [
        "nie mają ogona",
        "przykład: żaba"
      ],
      "beznogie": [
        "nie mają kończyn",
        "przykład: marszczelec"
      ]
    },
    "image": "/img/r04_plazy_podzial.jpg",
    "explanation": "Płazy dzielą się na ogoniaste, bezogonowe i beznogie, różniące się m.in. obecnością ogona i kończyn."
  },
  {
    "id": "R04_PLA_04",
    "section": "Płazy",
    "type": "single_choice",
    "prompt": "Której grupy płazów nie spotyka się w Polsce według rozdziału?",
    "options": [
      "beznogich",
      "bezogonowych",
      "ogoniastych",
      "żab",
      "ropuch",
      "traszek"
    ],
    "answer": 0,
    "image": "/img/r04_plazy_podzial.jpg",
    "explanation": "Płazy beznogie, np. marszczelce, nie występują w Polsce."
  },
  {
    "id": "R04_PLA_05",
    "section": "Płazy",
    "type": "match",
    "prompt": "Połącz przystosowanie żaby z jego znaczeniem.",
    "options": null,
    "left": [
      "śluz na skórze",
      "powieki",
      "płuca",
      "błona pławna",
      "cztery kończyny"
    ],
    "right": [
      "chroni przed wysychaniem i ułatwia ruch w wodzie",
      "chronią oczy przed wyschnięciem",
      "umożliwiają wymianę gazową na lądzie",
      "ułatwia pływanie",
      "ułatwiają poruszanie się"
    ],
    "answer": {
      "śluz na skórze": "chroni przed wysychaniem i ułatwia ruch w wodzie",
      "powieki": "chronią oczy przed wyschnięciem",
      "płuca": "umożliwiają wymianę gazową na lądzie",
      "błona pławna": "ułatwia pływanie",
      "cztery kończyny": "ułatwiają poruszanie się"
    },
    "image": "/img/r04_zaba_budowa.jpg",
    "explanation": "Budowa żaby łączy przystosowania do środowiska wodnego i lądowego."
  },
  {
    "id": "R04_PLA_06",
    "section": "Płazy",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania płazów do życia na lądzie.",
    "options": [
      "płuca",
      "powieki",
      "cztery kończyny",
      "śluz na skórze chroniący przed wysychaniem",
      "pęcherz pławny",
      "ikra"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_zaba_budowa.jpg",
    "explanation": "Płuca, powieki, kończyny i śluz na skórze pomagają dorosłym płazom funkcjonować na lądzie."
  },
  {
    "id": "R04_PLA_07",
    "section": "Płazy",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania płazów do środowiska wodnego.",
    "options": [
      "błona pławna między palcami",
      "śluz na skórze",
      "położenie oczu i nozdrzy po grzbietowej stronie głowy",
      "pancerz kostny",
      "sucha skóra z łuskami",
      "błony płodowe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r04_zaba_budowa.jpg",
    "explanation": "Błona pławna, śluz i położenie oczu oraz nozdrzy ułatwiają płazom życie i poruszanie się w wodzie."
  },
  {
    "id": "R04_PLA_08",
    "section": "Płazy",
    "type": "riddle",
    "prompt": "Jaja płazów składane do wody to...",
    "options": null,
    "answer": "skrzek",
    "altAnswers": [
      "skrzek"
    ],
    "image": "/img/r04_plaz_rozwoj.jpg",
    "explanation": "Jaja płazów nazywa się skrzekiem."
  },
  {
    "id": "R04_PLA_09",
    "section": "Płazy",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju płazów bezogonowych w poprawnej kolejności.",
    "options": null,
    "items": [
      "kijanka rośnie i wyrastają jej nogi",
      "dorosłe żaby rozmnażają się płciowo",
      "z jaj wylęgają się kijanki",
      "młoda żaba traci ogon",
      "samica składa skrzek w wodzie"
    ],
    "answer": [
      "dorosłe żaby rozmnażają się płciowo",
      "samica składa skrzek w wodzie",
      "z jaj wylęgają się kijanki",
      "kijanka rośnie i wyrastają jej nogi",
      "młoda żaba traci ogon"
    ],
    "image": "/img/r04_plaz_rozwoj.jpg",
    "explanation": "Płazy bezogonowe przechodzą rozwój złożony, w którym występuje larwa — kijanka."
  },
  {
    "id": "R04_PLA_10",
    "section": "Płazy",
    "type": "single_choice",
    "prompt": "Jak nazywa się larwa płaza?",
    "options": [
      "kijanka",
      "narybek",
      "ikra",
      "poczwarka",
      "mlecz",
      "błona płodowa"
    ],
    "answer": 0,
    "image": "/img/r04_plaz_rozwoj.jpg",
    "explanation": "Larwa płaza to kijanka, która różni się wyglądem od osobnika dorosłego."
  },
  {
    "id": "R04_PLA_11",
    "section": "Płazy",
    "type": "single_choice",
    "prompt": "Jaki typ rozwoju przechodzą płazy?",
    "options": [
      "rozwój złożony",
      "rozwój prosty bez larwy",
      "rozwój w pęcherzu pławnym",
      "rozwój wyłącznie w jajach ze skorupką skórzastą",
      "rozwój z poczwarką",
      "brak rozwoju larwalnego"
    ],
    "answer": 0,
    "image": "/img/r04_plaz_rozwoj.jpg",
    "explanation": "Płazy przechodzą rozwój złożony, ponieważ występuje larwa niepodobna do dorosłego osobnika."
  },
  {
    "id": "R04_PLA_12",
    "section": "Płazy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: skrzek, kijanka, błona pławna, płuca i skóra, pęcherz pławny.",
    "options": null,
    "answer": "pęcherz pławny",
    "explanation": "Pęcherz pławny jest narządem ryb, a pozostałe elementy dotyczą płazów."
  },
  {
    "id": "R04_GAD_01",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Co oznacza, że gady uniezależniły rozmnażanie od wody?",
    "options": [
      "rozmnażanie i rozwój odbywają się na lądzie",
      "zawsze składają skrzek w wodzie",
      "ich larwy żyją tylko w wodzie",
      "oddychają wyłącznie przez skórę",
      "nie są kręgowcami",
      "zawsze opiekują się potomstwem"
    ],
    "answer": 0,
    "image": "/img/r04_gad_rozwoj_jaja.jpg",
    "explanation": "Gady rozmnażają się i rozwijają na lądzie, nawet jeśli część gatunków zdobywa pokarm w wodzie."
  },
  {
    "id": "R04_GAD_02",
    "section": "Gady",
    "type": "true_false",
    "prompt": "Gady, podobnie jak ryby i płazy, są zmiennocieplne.",
    "options": null,
    "answer": true,
    "explanation": "Temperatura ciała gadów zależy od temperatury otoczenia."
  },
  {
    "id": "R04_GAD_03",
    "section": "Gady",
    "type": "multi_select",
    "prompt": "Zaznacz cechy skóry gadów opisane w rozdziale.",
    "options": [
      "jest sucha",
      "jest pokryta łuskami",
      "jest nieprzepuszczalna dla gazów i wody",
      "umożliwia główną wymianę gazową",
      "jest stale mokra jak u kijanki",
      "tworzy błonę pławną"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r04_jaszczurka_budowa.jpg",
    "explanation": "Skóra gadów jest sucha, pokryta łuskami i nieprzepuszczalna dla gazów oraz wody."
  },
  {
    "id": "R04_GAD_04",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Przez jaki narząd zachodzi wymiana gazowa u gadów?",
    "options": [
      "przez płuca",
      "przez skórę i płuca",
      "przez skrzela",
      "przez linię boczną",
      "przez pęcherz pławny",
      "przez błonę pławną"
    ],
    "answer": 0,
    "image": "/img/r04_jaszczurka_budowa.jpg",
    "explanation": "U gadów wymiana gazowa zachodzi tylko przez płuca, ponieważ ich skóra jest sucha i nieprzepuszczalna dla gazów."
  },
  {
    "id": "R04_GAD_05",
    "section": "Gady",
    "type": "match",
    "prompt": "Połącz cechę gadów z jej znaczeniem.",
    "options": null,
    "left": [
      "sucha skóra z łuskami",
      "płuca",
      "powieki",
      "kończyny z pazurami",
      "błony płodowe"
    ],
    "right": [
      "ogranicza utratę wody",
      "umożliwiają wymianę gazową",
      "chronią oczy przed wysychaniem",
      "ułatwiają poruszanie się po lądzie",
      "umożliwiają rozwój zarodka na lądzie"
    ],
    "answer": {
      "sucha skóra z łuskami": "ogranicza utratę wody",
      "płuca": "umożliwiają wymianę gazową",
      "powieki": "chronią oczy przed wysychaniem",
      "kończyny z pazurami": "ułatwiają poruszanie się po lądzie",
      "błony płodowe": "umożliwiają rozwój zarodka na lądzie"
    },
    "image": "/img/r04_jaszczurka_budowa.jpg",
    "explanation": "Cechy budowy gadów są związane z przystosowaniem do życia na lądzie."
  },
  {
    "id": "R04_GAD_06",
    "section": "Gady",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do grup gadów.",
    "options": null,
    "items": [
      "jaszczurka żyworodna",
      "padalec zwyczajny",
      "gniewosz plamisty",
      "zaskroniec zwyczajny",
      "żółw błotny",
      "krokodyl syjamski"
    ],
    "categories": [
      "jaszczurki",
      "węże",
      "żółwie",
      "krokodyle"
    ],
    "answer": {
      "jaszczurki": [
        "jaszczurka żyworodna",
        "padalec zwyczajny"
      ],
      "węże": [
        "gniewosz plamisty",
        "zaskroniec zwyczajny"
      ],
      "żółwie": [
        "żółw błotny"
      ],
      "krokodyle": [
        "krokodyl syjamski"
      ]
    },
    "image": "/img/r04_gady_podzial.jpg",
    "explanation": "W rozdziale gady podzielono m.in. na jaszczurki, węże, żółwie i krokodyle."
  },
  {
    "id": "R04_GAD_07",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Która grupa gadów nie ma kończyn?",
    "options": [
      "węże",
      "żółwie",
      "krokodyle",
      "większość jaszczurek",
      "płazy ogoniaste",
      "ryby kostnoszkieletowe"
    ],
    "answer": 0,
    "image": "/img/r04_gady_podzial.jpg",
    "explanation": "Węże mają bardzo wydłużone ciało i nie mają kończyn."
  },
  {
    "id": "R04_GAD_08",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Która grupa gadów ma pancerz zbudowany z tkanki kostnej pokrytej rogowymi tarczkami?",
    "options": [
      "żółwie",
      "węże",
      "jaszczurki",
      "krokodyle",
      "płazy bezogonowe",
      "ryby słonowodne"
    ],
    "answer": 0,
    "image": "/img/r04_gady_podzial.jpg",
    "explanation": "Żółwie mają pancerz z tkanki kostnej pokrytej rogowymi tarczkami."
  },
  {
    "id": "R04_GAD_09",
    "section": "Gady",
    "type": "riddle",
    "prompt": "Struktury w jaju gada, które zapewniają zarodkowi środowisko wodne i pokarm, to...",
    "options": null,
    "answer": "błony płodowe",
    "altAnswers": [
      "błony płodowe",
      "blony plodowe"
    ],
    "image": "/img/r04_gad_rozwoj_jaja.jpg",
    "explanation": "Błony płodowe umożliwiają gadom rozwój zarodka na lądzie."
  },
  {
    "id": "R04_GAD_10",
    "section": "Gady",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania i rozwoju większości gadów w poprawnej kolejności.",
    "options": null,
    "items": [
      "z jaj wykluwają się młode podobne do dorosłych",
      "dorosłe osobniki rozmnażają się płciowo",
      "samica składa jaja na lądzie",
      "wewnątrz jaj rozwijają się zarodki"
    ],
    "answer": [
      "dorosłe osobniki rozmnażają się płciowo",
      "samica składa jaja na lądzie",
      "wewnątrz jaj rozwijają się zarodki",
      "z jaj wykluwają się młode podobne do dorosłych"
    ],
    "image": "/img/r04_gad_rozwoj_jaja.jpg",
    "explanation": "U większości gadów samica składa jaja na lądzie, a młode są podobne do osobników dorosłych."
  },
  {
    "id": "R04_GAD_11",
    "section": "Gady",
    "type": "single_choice",
    "prompt": "Jakie zapłodnienie występuje u gadów?",
    "options": [
      "wewnętrzne",
      "zewnętrzne w wodzie",
      "zewnętrzne na skrzeku",
      "bez udziału komórek rozrodczych",
      "wyłącznie przez ikrę",
      "zachodzące w pęcherzu pławnym"
    ],
    "answer": 0,
    "image": "/img/r04_gad_rozwoj_jaja.jpg",
    "explanation": "U gadów zapłodnienie zachodzi wewnątrz ciała samicy."
  },
  {
    "id": "R04_GAD_12",
    "section": "Gady",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: sucha skóra, łuski, płuca, błony płodowe, kijanka.",
    "options": null,
    "answer": "kijanka",
    "explanation": "Kijanka jest larwą płaza, a pozostałe pojęcia dotyczą gadów."
  },
  {
    "id": "R04_GAD_13",
    "section": "Gady",
    "type": "scenario",
    "prompt": "Uczeń obserwuje zwierzę o suchej skórze pokrytej łuskami, które oddycha płucami i składa jaja na lądzie. Do której grupy kręgowców należy?",
    "options": [
      "gady",
      "płazy",
      "ryby",
      "ptaki",
      "ssaki",
      "pierścienice"
    ],
    "answer": 0,
    "image": "/img/r04_jaszczurka_budowa.jpg",
    "explanation": "Sucha skóra z łuskami, płuca i rozmnażanie na lądzie wskazują na gada."
  },
  {
    "id": "R04_ZPG_01",
    "section": "Płazy i gady: znaczenie",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli płazów do grup.",
    "options": null,
    "items": [
      "salamandra plamista",
      "traszka zwyczajna",
      "rzekotka drzewna",
      "żaba trawna",
      "ropucha szara",
      "kumak nizinny"
    ],
    "categories": [
      "ogoniaste",
      "bezogonowe"
    ],
    "answer": {
      "ogoniaste": [
        "salamandra plamista",
        "traszka zwyczajna"
      ],
      "bezogonowe": [
        "rzekotka drzewna",
        "żaba trawna",
        "ropucha szara",
        "kumak nizinny"
      ]
    },
    "image": "/img/r04_przedstawiciele_plazow.jpg",
    "explanation": "Salamandra i traszka to płazy ogoniaste, a rzekotka, żaba, ropucha i kumak to płazy bezogonowe."
  },
  {
    "id": "R04_ZPG_02",
    "section": "Płazy i gady: znaczenie",
    "type": "single_choice",
    "prompt": "Który płaz jest opisany jako największy polski płaz?",
    "options": [
      "salamandra plamista",
      "rzekotka drzewna",
      "żaba trawna",
      "ropucha szara",
      "kumak nizinny",
      "marszczelec pierścieniowaty"
    ],
    "answer": 0,
    "image": "/img/r04_przedstawiciele_plazow.jpg",
    "explanation": "Salamandra plamista została opisana jako największy polski płaz."
  },
  {
    "id": "R04_ZPG_03",
    "section": "Płazy i gady: znaczenie",
    "type": "match",
    "prompt": "Połącz płaza z cechą opisaną w rozdziale.",
    "options": null,
    "left": [
      "rzekotka drzewna",
      "ropucha szara",
      "kumak nizinny",
      "żaba trawna"
    ],
    "right": [
      "ma długie palce z przylgami",
      "ma brodawki z gruczołami jadowymi",
      "ma ostrzegawcze plamy na brzuchu",
      "poza okresem rozrodu prowadzi lądowy tryb życia"
    ],
    "answer": {
      "rzekotka drzewna": "ma długie palce z przylgami",
      "ropucha szara": "ma brodawki z gruczołami jadowymi",
      "kumak nizinny": "ma ostrzegawcze plamy na brzuchu",
      "żaba trawna": "poza okresem rozrodu prowadzi lądowy tryb życia"
    },
    "image": "/img/r04_przedstawiciele_plazow.jpg",
    "explanation": "Przedstawiciele płazów różnią się wyglądem, środowiskiem i sposobami obrony."
  },
  {
    "id": "R04_ZPG_04",
    "section": "Płazy i gady: znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie płazów w przyrodzie.",
    "options": [
      "regulują liczebność bezkręgowców",
      "są pokarmem dla innych zwierząt",
      "kijanki oczyszczają zbiorniki wodne",
      "zawsze niszczą rośliny wodne",
      "są jedynymi kręgowcami z pancerzem",
      "nie wpływają na ekosystem"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r04_znaczenie_plazow.jpg",
    "explanation": "Płazy zjadają bezkręgowce, są pokarmem dla innych zwierząt, a kijanki pomagają oczyszczać zbiorniki wodne."
  },
  {
    "id": "R04_ZPG_05",
    "section": "Płazy i gady: znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz zagrożenia dla płazów spowodowane działalnością człowieka.",
    "options": [
      "osuszanie zbiorników wodnych",
      "drogi przecinające szlaki wędrówek",
      "zanieczyszczenie środowiska",
      "wypalanie łąk i pól",
      "budowa przepustów pod drogami",
      "odtwarzanie małych zbiorników"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_zagrozenia_plazow.jpg",
    "explanation": "Płazom zagrażają m.in. osuszanie zbiorników, drogi na trasach wędrówek, zanieczyszczenia i wypalanie łąk."
  },
  {
    "id": "R04_ZPG_06",
    "section": "Płazy i gady: znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz działania korzystne dla płazów.",
    "options": [
      "okresowe zamykanie dróg podczas wędrówek",
      "tworzenie przepustów pod jezdnią",
      "odtwarzanie niewielkich zbiorników wodnych",
      "edukacja społeczeństwa",
      "osuszanie stawów",
      "wypalanie łąk"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_ochrona_plazow.jpg",
    "explanation": "Działania ochronne pomagają płazom bezpiecznie migrować i zachować miejsca rozrodu."
  },
  {
    "id": "R04_ZPG_07",
    "section": "Płazy i gady: znaczenie",
    "type": "true_false",
    "prompt": "Wszystkie gatunki płazów w Polsce są objęte ochroną ścisłą.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że wszystkie gatunki płazów w Polsce są objęte ochroną ścisłą."
  },
  {
    "id": "R04_ZPG_08",
    "section": "Płazy i gady: znaczenie",
    "type": "sort",
    "prompt": "Przyporządkuj polskie gady do grup.",
    "options": null,
    "items": [
      "jaszczurka zwinka",
      "padalec zwyczajny",
      "żmija zygzakowata",
      "zaskroniec zwyczajny",
      "żółw błotny",
      "wąż Eskulapa"
    ],
    "categories": [
      "jaszczurki",
      "węże",
      "żółwie"
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
      ]
    },
    "image": "/img/r04_gady_polskie.jpg",
    "explanation": "Padalec jest beznogą jaszczurką, a żmija, zaskroniec i wąż Eskulapa należą do węży."
  },
  {
    "id": "R04_ZPG_09",
    "section": "Płazy i gady: znaczenie",
    "type": "match",
    "prompt": "Połącz gada z opisem.",
    "options": null,
    "left": [
      "jaszczurka zwinka",
      "padalec zwyczajny",
      "wąż Eskulapa",
      "gniewosz plamisty"
    ],
    "right": [
      "najczęściej spotykany gad w Polsce",
      "beznoga jaszczurka, może odrzucić ogon",
      "największy z polskich węży",
      "odżywia się głównie jaszczurkami"
    ],
    "answer": {
      "jaszczurka zwinka": "najczęściej spotykany gad w Polsce",
      "padalec zwyczajny": "beznoga jaszczurka, może odrzucić ogon",
      "wąż Eskulapa": "największy z polskich węży",
      "gniewosz plamisty": "odżywia się głównie jaszczurkami"
    },
    "image": "/img/r04_gady_polskie.jpg",
    "explanation": "Różnorodność gadów w Polsce obejmuje jaszczurki, węże i żółwia błotnego."
  },
  {
    "id": "R04_ZPG_10",
    "section": "Płazy i gady: znaczenie",
    "type": "match",
    "prompt": "Połącz cechę z wężem, któremu odpowiada.",
    "options": null,
    "left": [
      "trójkątna głowa",
      "owalna głowa",
      "pionowa źrenica",
      "żółte plamy za skroniami"
    ],
    "right": [
      "żmija zygzakowata",
      "zaskroniec zwyczajny",
      "żmija zygzakowata",
      "zaskroniec zwyczajny"
    ],
    "answer": {
      "trójkątna głowa": "żmija zygzakowata",
      "owalna głowa": "zaskroniec zwyczajny",
      "pionowa źrenica": "żmija zygzakowata",
      "żółte plamy za skroniami": "zaskroniec zwyczajny"
    },
    "image": "/img/r04_weze_porownanie.jpg",
    "explanation": "Żmija zygzakowata i zaskroniec zwyczajny różnią się m.in. kształtem głowy, źrenicą i ubarwieniem."
  },
  {
    "id": "R04_ZPG_11",
    "section": "Płazy i gady: znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne znaczenie gadów dla człowieka lub przyrody.",
    "options": [
      "zjadają małe zwierzęta",
      "są pokarmem dla innych zwierząt",
      "zmniejszają liczbę szkodników w uprawach i ogrodach",
      "niektóre substancje mają zastosowanie w medycynie",
      "zawsze niszczą wszystkie uprawy",
      "nie mają żadnego znaczenia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_znaczenie_gadow.jpg",
    "explanation": "Gady uczestniczą w sieciach pokarmowych, mogą ograniczać szkodniki, a substancje niektórych gatunków mają zastosowanie w medycynie."
  },
  {
    "id": "R04_ZPG_12",
    "section": "Płazy i gady: znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz zagrożenia dla gadów spowodowane przez człowieka.",
    "options": [
      "przekształcanie środowiska naturalnego",
      "zanieczyszczenie środowiska",
      "chwytanie w celu hodowli",
      "nieuzasadnione zabijanie",
      "ochrona gatunkowa",
      "edukacja społeczeństwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_zagrozenia_gadow.jpg",
    "explanation": "Gadom zagrażają m.in. niszczenie siedlisk, zanieczyszczenia, chwytanie do hodowli i zabijanie."
  },
  {
    "id": "R04_ZPG_13",
    "section": "Płazy i gady: znaczenie",
    "type": "multi_select",
    "prompt": "Zaznacz działania korzystne dla gadów.",
    "options": [
      "ochrona gatunkowa",
      "ochrona środowiska zamieszkanego przez gady",
      "tworzenie nowych miejsc życia gadów",
      "działania edukacyjne",
      "nieuzasadnione zabijanie",
      "przekształcanie siedlisk"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_ochrona_gadow.jpg",
    "explanation": "Ochrona gatunkowa, ochrona siedlisk, tworzenie nowych miejsc życia i edukacja pomagają zachować różnorodność gadów."
  },
  {
    "id": "R04_MIX_01",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do grup kręgowców.",
    "options": null,
    "items": [
      "skrzela u dorosłych",
      "skrzek",
      "błony płodowe",
      "płuca i sucha skóra",
      "kijanka",
      "linia boczna"
    ],
    "categories": [
      "ryby",
      "płazy",
      "gady"
    ],
    "answer": {
      "ryby": [
        "skrzela u dorosłych",
        "linia boczna"
      ],
      "płazy": [
        "skrzek",
        "kijanka"
      ],
      "gady": [
        "błony płodowe",
        "płuca i sucha skóra"
      ]
    },
    "image": "/img/r04_porownanie_ryb_plazow_gadow.jpg",
    "explanation": "Ryby, płazy i gady różnią się budową, środowiskiem rozwoju oraz sposobem rozmnażania."
  },
  {
    "id": "R04_MIX_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz nazwę z definicją.",
    "options": null,
    "left": [
      "ikra",
      "skrzek",
      "kijanka",
      "błony płodowe",
      "zmiennocieplność"
    ],
    "right": [
      "jaja ryb",
      "jaja płazów",
      "larwa płaza",
      "struktury umożliwiające rozwój zarodka gada na lądzie",
      "zależność temperatury ciała od otoczenia"
    ],
    "answer": {
      "ikra": "jaja ryb",
      "skrzek": "jaja płazów",
      "kijanka": "larwa płaza",
      "błony płodowe": "struktury umożliwiające rozwój zarodka gada na lądzie",
      "zmiennocieplność": "zależność temperatury ciała od otoczenia"
    },
    "explanation": "Te pojęcia są kluczowe do porównania rozmnażania i rozwoju ryb, płazów i gadów."
  },
  {
    "id": "R04_MIX_03",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Która grupa kręgowców ma rozwój złożony z larwą — kijanką?",
    "options": [
      "płazy",
      "ryby",
      "gady",
      "ptaki",
      "ssaki",
      "żółwie"
    ],
    "answer": 0,
    "image": "/img/r04_plaz_rozwoj.jpg",
    "explanation": "Płazy przechodzą rozwój złożony, a larwa płaza to kijanka."
  },
  {
    "id": "R04_MIX_04",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Która grupa kręgowców jest w pełni uniezależniona od wody w rozmnażaniu?",
    "options": [
      "gady",
      "ryby",
      "większość płazów",
      "kijanki",
      "narybek",
      "płazy bezogonowe"
    ],
    "answer": 0,
    "image": "/img/r04_gad_rozwoj_jaja.jpg",
    "explanation": "Gady rozmnażają się i rozwijają na lądzie dzięki zapłodnieniu wewnętrznemu oraz błonom płodowym."
  },
  {
    "id": "R04_MIX_05",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz grupy kręgowców z tego rozdziału, które są zmiennocieplne.",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki",
      "owady"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ryby, płazy i gady są zmiennocieplne."
  },
  {
    "id": "R04_MIX_06",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ikra, skrzek, kijanka, błony płodowe, mlecz.",
    "options": null,
    "answer": "błony płodowe",
    "explanation": "Błony płodowe są charakterystyczne dla rozwoju gadów na lądzie, a pozostałe pojęcia dotyczą rozmnażania ryb lub płazów w wodzie."
  },
  {
    "id": "R04_MIX_07",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż grupy kręgowców od najbardziej związanej z wodą w rozrodzie do najbardziej uniezależnionej od wody.",
    "options": null,
    "items": [
      "gady",
      "ryby",
      "płazy"
    ],
    "answer": [
      "ryby",
      "płazy",
      "gady"
    ],
    "explanation": "Ryby rozmnażają się w wodzie, płazy są związane z wodą podczas rozrodu, a gady rozmnażają się na lądzie."
  },
  {
    "id": "R04_MIX_08",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Zwierzę ma kręgosłup, żyje w wodzie, oddycha skrzelami, ma płetwy i linię boczną. Do której grupy należy?",
    "options": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki",
      "owady"
    ],
    "answer": 0,
    "image": "/img/r04_ryba_budowa.jpg",
    "explanation": "Skrzela, płetwy i linia boczna wskazują na rybę."
  },
  {
    "id": "R04_MIX_09",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Zwierzę jest kręgowcem, ma śluz na skórze, oddycha płucami i przez skórę, a jego larwa żyje w wodzie. Do której grupy należy?",
    "options": [
      "płazy",
      "ryby",
      "gady",
      "ptaki",
      "ssaki",
      "małże"
    ],
    "answer": 0,
    "image": "/img/r04_zaba_budowa.jpg",
    "explanation": "Śluz na skórze, wymiana gazowa przez płuca i skórę oraz larwa w wodzie wskazują na płaza."
  },
  {
    "id": "R04_MIX_10",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Zwierzę jest kręgowcem, ma suchą skórę z łuskami, oddycha płucami i składa jaja na lądzie. Do której grupy należy?",
    "options": [
      "gady",
      "płazy",
      "ryby",
      "ptaki",
      "ssaki",
      "owady"
    ],
    "answer": 0,
    "image": "/img/r04_jaszczurka_budowa.jpg",
    "explanation": "Sucha skóra z łuskami, płuca i jaja składane na lądzie wskazują na gada."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie pojęcia związane z rozmnażaniem ryb?",
    "options": [
      "tarło, ikra, mlecz, narybek",
      "skrzek, kijanka, płuca, błona pławna",
      "błony płodowe, skórzasta skorupka, zapłodnienie wewnętrzne",
      "powieki, płuca, sucha skóra, pazury",
      "rozwój złożony, kijanka, skrzek, błony płodowe",
      "tarło, skrzek, kijanka, rozwój prosty"
    ],
    "answer": 0,
    "image": "/img/r04_ryba_rozwoj.jpg",
    "explanation": "Tarło, ikra, mlecz i narybek to pojęcia związane z rozmnażaniem oraz rozwojem ryb."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy, które odróżniają rozmnażanie gadów od rozmnażania większości płazów.",
    "options": [
      "zapłodnienie wewnętrzne",
      "rozwój na lądzie",
      "obecność błon płodowych",
      "rozwój prosty",
      "składanie skrzeku w wodzie",
      "larwa zwana kijanką"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r04_gad_rozwoj_jaja.jpg",
    "explanation": "Gady mają zapłodnienie wewnętrzne, rozwijają się na lądzie, mają błony płodowe i przechodzą rozwój prosty."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przystosowanie z problemem środowiska, który pomaga rozwiązać.",
    "options": null,
    "left": [
      "opływowy kształt ryby",
      "śluz na skórze płaza",
      "sucha skóra gada",
      "pęcherz pławny ryby"
    ],
    "right": [
      "duży opór wody",
      "ryzyko wysychania na lądzie",
      "utrata wody przez skórę",
      "kontrola głębokości zanurzenia"
    ],
    "answer": {
      "opływowy kształt ryby": "duży opór wody",
      "śluz na skórze płaza": "ryzyko wysychania na lądzie",
      "sucha skóra gada": "utrata wody przez skórę",
      "pęcherz pławny ryby": "kontrola głębokości zanurzenia"
    },
    "image": "/img/r04_porownanie_ryb_plazow_gadow.jpg",
    "explanation": "Przystosowania kręgowców odpowiadają na konkretne problemy środowiska wodnego lub lądowego."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do typu rozwoju.",
    "options": null,
    "items": [
      "narybek",
      "kijanka",
      "młody gad podobny do dorosłego",
      "larwa płaza",
      "młoda ryba podobna do dorosłej",
      "zanikający ogon u młodej żaby"
    ],
    "categories": [
      "rozwój prosty",
      "rozwój złożony"
    ],
    "answer": {
      "rozwój prosty": [
        "narybek",
        "młody gad podobny do dorosłego",
        "młoda ryba podobna do dorosłej"
      ],
      "rozwój złożony": [
        "kijanka",
        "larwa płaza",
        "zanikający ogon u młodej żaby"
      ]
    },
    "explanation": "W rozwoju prostym młody osobnik przypomina dorosłego, a w rozwoju złożonym występuje larwa różniąca się od dorosłego."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W stawie ubyło ryb drapieżnych, a liczebność części drobnych organizmów wodnych gwałtownie wzrosła. Które znaczenie ryb ilustruje ta sytuacja?",
    "options": [
      "regulowanie liczebności organizmów wodnych",
      "wytwarzanie tranu",
      "wędrówki przez przepławki",
      "oddychanie skrzelami",
      "rozwój prosty",
      "pobieranie tlenu z powietrza"
    ],
    "answer": 0,
    "image": "/img/r04_znaczenie_ryb.jpg",
    "explanation": "Ryby pomagają regulować liczebność organizmów wodnych i utrzymywać równowagę w zbiorniku."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W okolicy stawu wybudowano ruchliwą drogę. Co może szczególnie zagrozić populacji płazów?",
    "options": [
      "przecięcie tras wędrówek do zbiornika wodnego",
      "zwiększenie liczby kijanek",
      "pojawienie się skrzeli u dorosłych żab",
      "powstanie błon płodowych",
      "zmiana ikry w mlecz",
      "zanik potrzeby rozrodu w wodzie"
    ],
    "answer": 0,
    "image": "/img/r04_zagrozenia_plazow.jpg",
    "explanation": "Drogi przecinające szlaki wędrówek płazów do zbiorników wodnych są jednym z ważnych zagrożeń."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego sucha, nieprzepuszczalna skóra gadów wymusza oddychanie przez płuca?",
    "options": [
      "bo przez taką skórę nie zachodzi wymiana gazowa",
      "bo gady nie mają kręgosłupa",
      "bo gady zawsze żyją w wodzie",
      "bo ich jaja to skrzek",
      "bo linia boczna odbiera tlen",
      "bo pęcherz pławny zastępuje płuca"
    ],
    "answer": 0,
    "image": "/img/r04_jaszczurka_budowa.jpg",
    "explanation": "Skóra gadów jest nieprzepuszczalna dla gazów, dlatego wymiana gazowa zachodzi przez płuca."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: żmija zygzakowata, zaskroniec zwyczajny, gniewosz plamisty, wąż Eskulapa, rzekotka drzewna.",
    "options": null,
    "answer": "rzekotka drzewna",
    "explanation": "Rzekotka drzewna jest płazem bezogonowym, a pozostałe zwierzęta to węże, czyli gady."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Kręgowce, część 1",
  icon: "🐟",
  sectionOrder: [
    "Ryby",
    "Znaczenie i ochrona",
    "Płazy",
    "Gady",
    "Płazy i gady: znaczenie",
    "Powtórka mieszana",
    "Super trudne"
  ],
  sectionIcons: {
    "Ryby": "🐟",
    "Znaczenie i ochrona": "🌊",
    "Płazy": "🐸",
    "Gady": "🦎",
    "Płazy i gady: znaczenie": "🌿",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
