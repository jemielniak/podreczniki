// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PRE = Prehistoria i rewolucja neolityczna
//   CYW = Pierwsze cywilizacje
//   IZE = Starożytny Izrael i Egipt
//   GRE = Starożytna Grecja
//   ROM = Starożytny Rzym
//   CHR = Narodziny chrześcijaństwa
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_PRE_01",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "single_choice",
    "prompt": "Jak nazywa się starsza epoka kamienna?",
    "options": [
      "Paleolit",
      "Neolit",
      "Epoka brązu",
      "Starożytność",
      "Epoka żelaza",
      "Średniowiecze"
    ],
    "answer": 0,
    "explanation": "Starszą epokę kamienną nazywamy paleolitem. Ludzie wędrowali wtedy z miejsca na miejsce i utrzymywali się głównie ze zbieractwa i myślistwa.",
    "image": "r01_krzemienne_narzedzia.jpg"
  },
  {
    "id": "R01_PRE_02",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "multi_select",
    "prompt": "Wskaż cechy życia ludzi w paleolicie.",
    "options": [
      "Koczowniczy tryb życia",
      "Budowa stałych osad rolniczych",
      "Zbieractwo i myślistwo",
      "Zamieszkiwanie jaskiń",
      "Uprawa pól",
      "Hodowla zwierząt gospodarskich"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Ludzie paleolitu prowadzili koczowniczy tryb życia, zbierali pożywienie, polowali i korzystali m.in. z jaskiń oraz namiotów."
  },
  {
    "id": "R01_PRE_03",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "true_false",
    "prompt": "Garncarstwo rozwinęło się wraz z potrzebami ludzi prowadzących osiadły tryb życia.",
    "options": null,
    "answer": true,
    "explanation": "W neolicie zaczęto wytwarzać gliniane naczynia, przydatne do przechowywania ziarna czy mleka.",
    "image": "r01_osada_neolityczna.jpg"
  },
  {
    "id": "R01_PRE_04",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "fill_in",
    "prompt": "Rewolucja neolityczna polegała na przejściu od myślistwa i zbieractwa do __________ oraz __________ zwierząt.",
    "options": null,
    "answer": [
      "rolnictwa",
      "hodowli"
    ],
    "explanation": "Po ociepleniu klimatu ludzie zaczęli uprawiać ziemię i hodować zwierzęta, co umożliwiło im osiadły tryb życia.",
    "altAnswers": [
      [
        "rolnictwa",
        "uprawy ziemi"
      ],
      [
        "hodowli"
      ]
    ]
  },
  {
    "id": "R01_PRE_05",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "riddle",
    "prompt": "Z jakiej twardej skały wyrabiano w paleolicie narzędzia i korzystano przy rozpalaniu ognia?",
    "options": null,
    "answer": "krzemień",
    "explanation": "Krzemień wykorzystywano do produkcji prostych narzędzi, a jego kawałki pomagały rozniecać ogień.",
    "image": "r01_krzemienne_narzedzia.jpg",
    "altAnswers": [
      "krzemień",
      "krzemienia"
    ]
  },
  {
    "id": "R01_PRE_06",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do typowych narzędzi paleolitycznych: pięściak, łuk, oszczep, koło.",
    "options": null,
    "answer": "koło",
    "explanation": "Pięściaki, łuki i oszczepy były używane przez łowców w paleolicie. Wynalezienie koła wiąże się natomiast z późniejszym rozwojem cywilizacji, m.in. Sumerów."
  },
  {
    "id": "R01_PRE_07",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "scenario",
    "prompt": "Ludzie zaczęli uprawiać ziemię, hodować zwierzęta i budować trwałe domy. Jak nazywał się tryb życia, który zastąpił wędrówki?",
    "options": [
      "Koczowniczy",
      "Osiadły",
      "Wędrowny",
      "Łowiecki",
      "Pastersko-koczowniczy",
      "Nomadyczny"
    ],
    "answer": 1,
    "explanation": "Rewolucja neolityczna doprowadziła do przyjęcia osiadłego trybu życia i powstawania stałych domostw.",
    "image": "r01_osada_neolityczna.jpg"
  },
  {
    "id": "R01_PRE_08",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "match",
    "prompt": "Połącz pojęcia z ich opisami.",
    "options": null,
    "answer": {
      "Paleolit": "Starsza epoka kamienna",
      "Neolit": "Młodsza epoka kamienna",
      "Rewolucja neolityczna": "Przejście do rolnictwa i hodowli"
    },
    "explanation": "Paleolit oznacza starszą, a neolit młodszą epokę kamienną. Najważniejszą przemianą neolitu było przejście do rolnictwa i hodowli.",
    "left": [
      "Paleolit",
      "Neolit",
      "Rewolucja neolityczna"
    ],
    "right": [
      "Przejście do rolnictwa i hodowli",
      "Starsza epoka kamienna",
      "Młodsza epoka kamienna"
    ]
  },
  {
    "id": "R01_PRE_09",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do paleolitu lub neolitu.",
    "options": null,
    "answer": {
      "Paleolit": [
        "Wędrowanie za pożywieniem",
        "Myślistwo i zbieractwo",
        "Narzędzia z krzemienia"
      ],
      "Neolit": [
        "Trwałe domostwa",
        "Uprawa ziemi",
        "Garncarstwo i tkactwo"
      ]
    },
    "explanation": "W paleolicie dominowały wędrówki, zbieractwo i łowiectwo. Neolit przyniósł rolnictwo, stałe domostwa i nowe rzemiosła.",
    "items": [
      "Garncarstwo i tkactwo",
      "Myślistwo i zbieractwo",
      "Uprawa ziemi",
      "Narzędzia z krzemienia",
      "Trwałe domostwa",
      "Wędrowanie za pożywieniem"
    ],
    "categories": [
      "Paleolit",
      "Neolit"
    ]
  },
  {
    "id": "R01_PRE_10",
    "section": "Prehistoria i rewolucja neolityczna",
    "type": "sequence",
    "prompt": "Ułóż etapy przemian prowadzących do osiadłego trybu życia w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "Koczownicze życie łowców i zbieraczy",
      "Ocieplenie po cofnięciu się lądolodu",
      "Rozpoczęcie uprawy ziemi i hodowli",
      "Budowanie trwałych domostw"
    ],
    "explanation": "Ocieplenie klimatu pozwoliło stopniowo przejść od koczownictwa do rolnictwa i osiadłego trybu życia.",
    "items": [
      "Rozpoczęcie uprawy ziemi i hodowli",
      "Koczownicze życie łowców i zbieraczy",
      "Budowanie trwałych domostw",
      "Ocieplenie po cofnięciu się lądolodu"
    ]
  },
  {
    "id": "R01_CYW_01",
    "section": "Pierwsze cywilizacje",
    "type": "single_choice",
    "prompt": "Między jakimi dwiema rzekami leżała Mezopotamia zamieszkana przez Sumerów?",
    "options": [
      "Nilem i Jordanem",
      "Indusem i Gangesem",
      "Tygrysem i Eufratem",
      "Huang-ho i Jangcy",
      "Dunajem i Renem",
      "Tygrysem i Nilem"
    ],
    "answer": 2,
    "explanation": "Mezopotamia to kraina położona między Tygrysem i Eufratem. Rozwinęła się tam cywilizacja Sumerów.",
    "image": "r01_mezopotamia_rzeki.jpg"
  },
  {
    "id": "R01_CYW_02",
    "section": "Pierwsze cywilizacje",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia starożytnych Sumerów.",
    "options": [
      "System nawadniający",
      "Wynalezienie pisma",
      "Budowa rzymskich akweduktów",
      "Pierwsze koło",
      "Wynalezienie druku",
      "Wytwarzanie brązu"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Sumerowie opracowali system nawadniający, wynaleźli pismo i szkło, skonstruowali koło oraz wytwarzali brąz.",
    "image": "r01_pismo_klinowe.jpg"
  },
  {
    "id": "R01_CYW_03",
    "section": "Pierwsze cywilizacje",
    "type": "true_false",
    "prompt": "W miastach cywilizacji doliny Indusu istniała kanalizacja, a domostwa miały łazienki.",
    "options": null,
    "answer": true,
    "explanation": "Kanalizacja miejska i łazienki w domach należały do charakterystycznych osiągnięć cywilizacji doliny Indusu.",
    "image": "r01_miasto_doliny_indusu.jpg"
  },
  {
    "id": "R01_CYW_04",
    "section": "Pierwsze cywilizacje",
    "type": "fill_in",
    "prompt": "Brąz wytwarzany przez Sumerów był stopem __________ i __________.",
    "options": null,
    "answer": [
      "miedzi",
      "cyny"
    ],
    "explanation": "Brąz to stop miedzi z cyną; wykorzystywano go do wyrobu narzędzi.",
    "altAnswers": [
      [
        "miedzi"
      ],
      [
        "cyny"
      ]
    ]
  },
  {
    "id": "R01_CYW_05",
    "section": "Pierwsze cywilizacje",
    "type": "riddle",
    "prompt": "Jak nazywa się pismo Sumerów widoczne na glinianych tabliczkach?",
    "options": null,
    "answer": "pismo klinowe",
    "explanation": "Sumerom przypisuje się wynalezienie pisma około 3500 r. p.n.e. Posługiwali się pismem klinowym.",
    "image": "r01_pismo_klinowe.jpg",
    "altAnswers": [
      "pismo klinowe",
      "klinowe"
    ]
  },
  {
    "id": "R01_CYW_06",
    "section": "Pierwsze cywilizacje",
    "type": "odd_one_out",
    "prompt": "Wskaż określenie, które nie jest nazwą starożytnej cywilizacji: Sumerowie, cywilizacja doliny Indusu, cywilizacja Chińczyków, gladiatorzy.",
    "options": null,
    "answer": "gladiatorzy",
    "explanation": "Sumerowie, cywilizacja doliny Indusu i starożytni Chińczycy należeli do wczesnych cywilizacji. Gladiatorzy byli natomiast zawodnikami walczącymi na arenach rzymskich, często niewolnikami."
  },
  {
    "id": "R01_CYW_07",
    "section": "Pierwsze cywilizacje",
    "type": "scenario",
    "prompt": "Na polach między Tygrysem a Eufratem zbiory znacznie wzrosły dzięki kanałom doprowadzającym wodę. Nie wszyscy mieszkańcy musieli już produkować żywność. Co stało się możliwe?",
    "options": [
      "Odejście od osiadłego życia",
      "Zaprzestanie wymiany handlowej",
      "Porzucenie rzemiosła",
      "Zanik miast",
      "Podział pracy i rozwój rzemiosła",
      "Rezygnacja z rolnictwa"
    ],
    "answer": 4,
    "explanation": "Nadwyżki żywności pozwoliły na podział pracy: część mieszkańców mogła zamiast rolnictwa zajmować się rzemiosłem.",
    "image": "r01_mezopotamia_rzeki.jpg"
  },
  {
    "id": "R01_CYW_08",
    "section": "Pierwsze cywilizacje",
    "type": "match",
    "prompt": "Połącz cywilizację z jej położeniem.",
    "options": null,
    "answer": {
      "Sumerowie": "Między Tygrysem a Eufratem",
      "Cywilizacja doliny Indusu": "Tereny dzisiejszych Indii i Pakistanu",
      "Cywilizacja Chińczyków": "Nad rzeką Huang-ho"
    },
    "explanation": "Sumerowie żyli w Mezopotamii, cywilizacja Indusu rozwinęła się na terenach dzisiejszych Indii i Pakistanu, a chińska nad Huang-ho.",
    "left": [
      "Sumerowie",
      "Cywilizacja doliny Indusu",
      "Cywilizacja Chińczyków"
    ],
    "right": [
      "Nad rzeką Huang-ho",
      "Między Tygrysem a Eufratem",
      "Tereny dzisiejszych Indii i Pakistanu"
    ]
  },
  {
    "id": "R01_CYW_09",
    "section": "Pierwsze cywilizacje",
    "type": "sort",
    "prompt": "Przyporządkuj osiągnięcia do odpowiednich cywilizacji.",
    "options": null,
    "answer": {
      "Sumerowie": [
        "Pismo klinowe",
        "System nawadniający"
      ],
      "Cywilizacja doliny Indusu": [
        "Łazienki w domach",
        "Kanalizacja miast"
      ],
      "Chińczycy": [
        "Własne pismo obrazkowe",
        "Słynne wyroby ceramiczne"
      ]
    },
    "explanation": "Sumerowie rozwijali pismo klinowe i irygację, cywilizacja doliny Indusu słynęła z urządzeń sanitarnych, a starożytni Chińczycy z ceramiki i pisma obrazkowego.",
    "items": [
      "Kanalizacja miast",
      "Własne pismo obrazkowe",
      "System nawadniający",
      "Słynne wyroby ceramiczne",
      "Pismo klinowe",
      "Łazienki w domach"
    ],
    "categories": [
      "Sumerowie",
      "Cywilizacja doliny Indusu",
      "Chińczycy"
    ]
  },
  {
    "id": "R01_CYW_10",
    "section": "Pierwsze cywilizacje",
    "type": "sequence",
    "prompt": "Ułóż początki i etapy rozwoju pierwszych cywilizacji od najwcześniejszego.",
    "options": null,
    "answer": [
      "Początki cywilizacji Sumerów (4000 r. p.n.e.)",
      "Początki cywilizacji doliny Indusu (około 3500 r. p.n.e.)",
      "Rozkwit cywilizacji doliny Indusu (od 2500 r. p.n.e.)",
      "Początki cywilizacji chińskiej (około 1700 r. p.n.e.)"
    ],
    "explanation": "Sumerowie istnieli od około 4000 r. p.n.e., cywilizacja Indusu od około 3500 r. p.n.e. (rozkwit od 2500 r.), a chińska od około 1700 r. p.n.e.",
    "items": [
      "Rozkwit cywilizacji doliny Indusu (od 2500 r. p.n.e.)",
      "Początki cywilizacji chińskiej (około 1700 r. p.n.e.)",
      "Początki cywilizacji Sumerów (4000 r. p.n.e.)",
      "Początki cywilizacji doliny Indusu (około 3500 r. p.n.e.)"
    ]
  },
  {
    "id": "R01_CYW_11",
    "section": "Pierwsze cywilizacje",
    "type": "single_choice",
    "prompt": "Na obszarze których dzisiejszych państw rozwinęła się cywilizacja doliny Indusu?",
    "options": [
      "Iraku i Iranu",
      "Egiptu i Sudanu",
      "Grecji i Turcji",
      "Indii i Pakistanu",
      "Chin i Mongolii",
      "Izraela i Jordanii"
    ],
    "answer": 3,
    "explanation": "Cywilizacja doliny Indusu rozwijała się na terenach zajmowanych dziś przez Indie i Pakistan.",
    "image": "r01_miasto_doliny_indusu.jpg"
  },
  {
    "id": "R01_IZE_01",
    "section": "Starożytny Izrael i Egipt",
    "type": "single_choice",
    "prompt": "Kto według dziejów Izraelitów wyprowadził Hebrajczyków z niewoli egipskiej?",
    "options": [
      "Abraham",
      "Mojżesz",
      "Saul",
      "Dawid",
      "Salomon",
      "Jakub"
    ],
    "answer": 1,
    "explanation": "Zgodnie z tradycją biblijną Mojżesz wyprowadził Hebrajczyków z Egiptu do Ziemi Obiecanej."
  },
  {
    "id": "R01_IZE_02",
    "section": "Starożytny Izrael i Egipt",
    "type": "multi_select",
    "prompt": "Zaznacz teksty i zasady szczególnie ważne dla judaizmu.",
    "options": [
      "Tora",
      "Nowy Testament",
      "Dekalog",
      "Ewangelie",
      "Stary Testament",
      "Iliada"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "W judaizmie uznawany jest Stary Testament (Biblia hebrajska), a szczególne znaczenie mają Tora oraz Dekalog."
  },
  {
    "id": "R01_IZE_03",
    "section": "Starożytny Izrael i Egipt",
    "type": "true_false",
    "prompt": "Izraelici wierzyli w jednego Boga, którego nazywali Jahwe.",
    "options": null,
    "answer": true,
    "explanation": "Izraelici wyznawali monoteizm, czyli wiarę w jednego Boga. Ich religią był judaizm."
  },
  {
    "id": "R01_IZE_04",
    "section": "Starożytny Izrael i Egipt",
    "type": "fill_in",
    "prompt": "Pierwszym królem zjednoczonego państwa izraelskiego był __________, a po śmierci Salomona królestwo podzielono na Judę i __________.",
    "options": null,
    "answer": [
      "Saul",
      "Izrael"
    ],
    "explanation": "Pierwszym królem zjednoczonego Izraela był Saul. Po rządach Dawida i Salomona państwo podzieliło się na Judę i Izrael.",
    "altAnswers": [
      [
        "Saul",
        "Saula"
      ],
      [
        "Izrael",
        "Izraela"
      ]
    ]
  },
  {
    "id": "R01_IZE_05",
    "section": "Starożytny Izrael i Egipt",
    "type": "match",
    "prompt": "Połącz postacie z ich rolami w dziejach Izraelitów.",
    "options": null,
    "answer": {
      "Abraham": "Praojciec Hebrajczyków",
      "Jakub": "Jego dwunastu synów przewodziło plemionom hebrajskim",
      "Mojżesz": "Wyprowadził Hebrajczyków z Egiptu",
      "Salomon": "Za jego panowania wznoszono świątynię w Jerozolimie"
    },
    "explanation": "Abraham jest przedstawiony jako praojciec Hebrajczyków, Jakub jako ojciec przywódców dwunastu plemion, Mojżesz jako wyzwoliciel, a Salomon jako budowniczy świątyni.",
    "left": [
      "Abraham",
      "Jakub",
      "Mojżesz",
      "Salomon"
    ],
    "right": [
      "Wyprowadził Hebrajczyków z Egiptu",
      "Za jego panowania wznoszono świątynię w Jerozolimie",
      "Praojciec Hebrajczyków",
      "Jego dwunastu synów przewodziło plemionom hebrajskim"
    ]
  },
  {
    "id": "R01_IZE_06",
    "section": "Starożytny Izrael i Egipt",
    "type": "scenario",
    "prompt": "Rok 587 p.n.e. Król Babilonu zdobywa Judę i nakazuje przesiedlenie wielu jej mieszkańców. Jak nazywał się ten władca?",
    "options": [
      "Dawid",
      "Herod Wielki",
      "Saul",
      "Nabuchodonozor II",
      "Salomon",
      "Mojżesz"
    ],
    "answer": 3,
    "explanation": "W 587 r. p.n.e. Nabuchodonozor II podbił Judę i wywiózł część mieszkańców do Babilonii. Wydarzenie nazwano niewolą babilońską."
  },
  {
    "id": "R01_IZE_07",
    "section": "Starożytny Izrael i Egipt",
    "type": "single_choice",
    "prompt": "Dlaczego Egipt nazywano darem Nilu?",
    "options": [
      "Coroczne wylewy rzeki nawadniały pola",
      "Egipcjanie nie musieli uprawiać ziemi",
      "Nil był granicą między Judą i Izraelem",
      "Rzeka była jedynym źródłem kamienia",
      "W Egipcie nie było kanałów",
      "Nad Nilem nie powstawały miasta"
    ],
    "answer": 0,
    "explanation": "Nil wylewał raz do roku i nawadniał pola, podtrzymując życie oraz rozwój rolnictwa egipskiego.",
    "image": "r01_nil_i_pola.jpg"
  },
  {
    "id": "R01_IZE_08",
    "section": "Starożytny Izrael i Egipt",
    "type": "multi_select",
    "prompt": "Które postacie należały do bóstw czczonych w starożytnym Egipcie?",
    "options": [
      "Ra",
      "Ozyrys",
      "Zeus",
      "Horus",
      "Posejdon",
      "Tot"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Egipcjanie czcili wielu bogów, m.in. Ra, Ozyrysa, Horusa i Tota."
  },
  {
    "id": "R01_IZE_09",
    "section": "Starożytny Izrael i Egipt",
    "type": "true_false",
    "prompt": "Egipcjanie pisali wyłącznie na glinianych tabliczkach i nie znali papirusu.",
    "options": null,
    "answer": false,
    "explanation": "W Egipcie używano papirusu, wytwarzanego z roślin rosnących nad Nilem. Ważne teksty wykuwano także w kamieniu.",
    "image": "r01_hieroglify_egipskie.jpg"
  },
  {
    "id": "R01_IZE_10",
    "section": "Starożytny Izrael i Egipt",
    "type": "riddle",
    "prompt": "Jak nazywano wysokiego urzędnika, który w Egipcie rządził krajem w imieniu faraona?",
    "options": null,
    "answer": "wezyr",
    "explanation": "Wezyr zajmował jeden z najwyższych szczebli hierarchii urzędniczej Egiptu i sprawował rządy w imieniu faraona.",
    "altAnswers": [
      "wezyr",
      "wezyra"
    ]
  },
  {
    "id": "R01_IZE_11",
    "section": "Starożytny Izrael i Egipt",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do cywilizacji, z którą były związane.",
    "options": null,
    "answer": {
      "Starożytny Izrael": [
        "Judaizm",
        "Wiara w Jahwe",
        "Tora"
      ],
      "Starożytny Egipt": [
        "Politeizm egipski",
        "Kult boga Ra",
        "Balsamowanie zwłok"
      ]
    },
    "explanation": "Izraelici wyznawali judaizm i wierzyli w Jahwe, natomiast Egipcjanie czcili wielu bogów i balsamowali zmarłych z powodu wiary w życie pozagrobowe.",
    "items": [
      "Kult boga Ra",
      "Tora",
      "Balsamowanie zwłok",
      "Judaizm",
      "Politeizm egipski",
      "Wiara w Jahwe"
    ],
    "categories": [
      "Starożytny Izrael",
      "Starożytny Egipt"
    ]
  },
  {
    "id": "R01_IZE_12",
    "section": "Starożytny Izrael i Egipt",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Powstanie państwa egipskiego (około 3100 r. p.n.e.)",
      "Budowa piramidy Cheopsa (XXVI w. p.n.e.)",
      "Podbój Judy przez Babilończyków (587 r. p.n.e.)",
      "Wchłonięcie Egiptu przez Rzym (30 r. p.n.e.)"
    ],
    "explanation": "Państwo egipskie uformowało się około 3100 r. p.n.e.; piramida Cheopsa powstała w XXVI w. p.n.e. Podbój Judy nastąpił w 587 r. p.n.e., a Egipt został włączony do państwa rzymskiego w 30 r. p.n.e.",
    "image": "r01_piramida_i_grobowce.jpg",
    "items": [
      "Podbój Judy przez Babilończyków (587 r. p.n.e.)",
      "Wchłonięcie Egiptu przez Rzym (30 r. p.n.e.)",
      "Powstanie państwa egipskiego (około 3100 r. p.n.e.)",
      "Budowa piramidy Cheopsa (XXVI w. p.n.e.)"
    ]
  },
  {
    "id": "R01_GRE_01",
    "section": "Starożytna Grecja",
    "type": "single_choice",
    "prompt": "Jak nazywały się greckie miasta-państwa?",
    "options": [
      "Cesarstwa",
      "Polis",
      "Prowincje",
      "Satrapie",
      "Księstwa",
      "Dzielnice"
    ],
    "answer": 1,
    "explanation": "Grecy nie stworzyli jednego państwa. Organizowali życie polityczne w odrębnych miastach-państwach, zwanych polis."
  },
  {
    "id": "R01_GRE_02",
    "section": "Starożytna Grecja",
    "type": "multi_select",
    "prompt": "Wskaż trzy greckie porządki architektoniczne.",
    "options": [
      "Dorycki",
      "Romański",
      "Joński",
      "Gotycki",
      "Koryncki",
      "Barokowy"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Grecy stworzyli porządki dorycki, joński i koryncki, czyli określone zasady konstruowania i zdobienia budowli.",
    "image": "r01_greckie_kolumny.jpg"
  },
  {
    "id": "R01_GRE_03",
    "section": "Starożytna Grecja",
    "type": "true_false",
    "prompt": "W demokracji ateńskiej kobiety i niewolnicy mieli takie samo prawo głosu jak obywatele.",
    "options": null,
    "answer": false,
    "explanation": "Prawo do udziału w Zgromadzeniu Ludowym przysługiwało obywatelom, czyli mężczyznom, których rodzice byli Ateńczykami."
  },
  {
    "id": "R01_GRE_04",
    "section": "Starożytna Grecja",
    "type": "fill_in",
    "prompt": "Grecy nazywali siebie __________, a swój kraj __________.",
    "options": null,
    "answer": [
      "Hellenami",
      "Helladą"
    ],
    "explanation": "Starożytni Grecy używali wobec siebie nazwy Hellenowie, a swój kraj nazywali Helladą.",
    "altAnswers": [
      [
        "Hellenami",
        "Hellenowie"
      ],
      [
        "Helladą",
        "Hellada"
      ]
    ]
  },
  {
    "id": "R01_GRE_05",
    "section": "Starożytna Grecja",
    "type": "riddle",
    "prompt": "Jak nazywała się ateńska praktyka wygnania na 10 lat osoby uznanej za zagrożenie dla demokracji?",
    "options": null,
    "answer": "ostracyzm",
    "explanation": "Ostracyzm polegał na głosowaniu z użyciem glinianych skorupek zwanych ostrakonami. Przy spełnieniu warunków można było skazać osobę na dziesięcioletnie wygnanie.",
    "altAnswers": [
      "ostracyzm",
      "ostracyzmu"
    ]
  },
  {
    "id": "R01_GRE_06",
    "section": "Starożytna Grecja",
    "type": "odd_one_out",
    "prompt": "Wskaż postać spoza mitologii greckiej w podanych imionach: Zeus, Posejdon, Atena, Jowisz.",
    "options": null,
    "answer": "Jowisz",
    "explanation": "Zeus, Posejdon i Atena to imiona greckich bóstw. Jowisz jest rzymskim odpowiednikiem Zeusa."
  },
  {
    "id": "R01_GRE_07",
    "section": "Starożytna Grecja",
    "type": "scenario",
    "prompt": "W Atenach obywatele zbierają się kilka razy w miesiącu. Wysłuchują przemówień, po czym podnoszą ręce, aby zdecydować o wojnie lub ustanowieniu prawa. Która instytucja obraduje?",
    "options": [
      "Zgromadzenie Ludowe",
      "Rada Pięciuset",
      "Sąd Ludowy",
      "Senat rzymski",
      "Kolegium kapłanów",
      "Urząd faraona"
    ],
    "answer": 0,
    "explanation": "Zgromadzenie Ludowe zbierało się cztery razy w miesiącu; uczestnicy głosowali przez podniesienie ręki i decydowali o najważniejszych sprawach polis.",
    "image": "r01_zgromadzenie_atenskie.jpg"
  },
  {
    "id": "R01_GRE_08",
    "section": "Starożytna Grecja",
    "type": "match",
    "prompt": "Połącz greckie bóstwa z dziedzinami ich opieki.",
    "options": null,
    "answer": {
      "Zeus": "Najważniejszy z greckich bogów",
      "Posejdon": "Bóg mórz",
      "Atena": "Bogini mądrości",
      "Demeter": "Bogini urodzaju i rolnictwa"
    },
    "explanation": "W greckim panteonie Zeus był najważniejszym bogiem, Posejdon opiekował się morzami, Atena mądrością, a Demeter urodzajem.",
    "left": [
      "Zeus",
      "Posejdon",
      "Atena",
      "Demeter"
    ],
    "right": [
      "Bogini urodzaju i rolnictwa",
      "Bóg mórz",
      "Najważniejszy z greckich bogów",
      "Bogini mądrości"
    ]
  },
  {
    "id": "R01_GRE_09",
    "section": "Starożytna Grecja",
    "type": "sort",
    "prompt": "Przyporządkuj zadania do instytucji demokracji ateńskiej.",
    "options": null,
    "answer": {
      "Zgromadzenie Ludowe": [
        "Głosowanie nad prawami",
        "Podejmowanie decyzji o wojnie"
      ],
      "Rada Pięciuset": [
        "Zarządzanie finansami państwa",
        "Przygotowywanie tematów obrad"
      ],
      "Sąd Ludowy": [
        "Rozstrzyganie spraw sądowych",
        "Orzekanie większością głosów"
      ]
    },
    "explanation": "Zgromadzenie Ludowe podejmowało główne decyzje, Rada Pięciuset przygotowywała obrady i zajmowała się finansami, a Sąd Ludowy rozstrzygał sprawy większością głosów.",
    "image": "r01_zgromadzenie_atenskie.jpg",
    "items": [
      "Przygotowywanie tematów obrad",
      "Podejmowanie decyzji o wojnie",
      "Orzekanie większością głosów",
      "Głosowanie nad prawami",
      "Zarządzanie finansami państwa",
      "Rozstrzyganie spraw sądowych"
    ],
    "categories": [
      "Zgromadzenie Ludowe",
      "Rada Pięciuset",
      "Sąd Ludowy"
    ]
  },
  {
    "id": "R01_GRE_10",
    "section": "Starożytna Grecja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dziejów Grecji chronologicznie.",
    "options": null,
    "answer": [
      "Rozkwit kultury minojskiej (1600-1400 r. p.n.e.)",
      "Początek wieków ciemnych (około 1100 r. p.n.e.)",
      "Pierwsze igrzyska w Olimpii (776 r. p.n.e.)",
      "Narodziny demokracji ateńskiej (VI/V w. p.n.e.)"
    ],
    "explanation": "Kultura minojska rozkwitała w II tysiącleciu p.n.e.; wieki ciemne zaczęły się około 1100 r. p.n.e. Igrzyska rozpoczęły się w 776 r. p.n.e., a demokracja ateńska pojawiła się na przełomie VI i V w. p.n.e.",
    "items": [
      "Narodziny demokracji ateńskiej (VI/V w. p.n.e.)",
      "Pierwsze igrzyska w Olimpii (776 r. p.n.e.)",
      "Rozkwit kultury minojskiej (1600-1400 r. p.n.e.)",
      "Początek wieków ciemnych (około 1100 r. p.n.e.)"
    ]
  },
  {
    "id": "R01_GRE_11",
    "section": "Starożytna Grecja",
    "type": "single_choice",
    "prompt": "Kto był autorem eposów Iliada i Odyseja?",
    "options": [
      "Sofokles",
      "Herodot",
      "Arystoteles",
      "Hipokrates",
      "Homer",
      "Fidiasz"
    ],
    "answer": 4,
    "explanation": "„Iliada” i „Odyseja” są przypisywane Homerowi i należą do najważniejszych dzieł literatury greckiej."
  },
  {
    "id": "R01_GRE_12",
    "section": "Starożytna Grecja",
    "type": "multi_select",
    "prompt": "Którzy z wymienionych byli słynnymi greckimi filozofami?",
    "options": [
      "Homer",
      "Sokrates",
      "Platon",
      "Eurypides",
      "Arystoteles",
      "Fidiasz"
    ],
    "answer": [
      1,
      2,
      4
    ],
    "explanation": "Do najwybitniejszych greckich filozofów należeli Sokrates, Platon i Arystoteles."
  },
  {
    "id": "R01_ROM_01",
    "section": "Starożytny Rzym",
    "type": "single_choice",
    "prompt": "Jaka była umowna data założenia Rzymu?",
    "options": [
      "3100 r. p.n.e.",
      "776 r. p.n.e.",
      "753 r. p.n.e.",
      "500 r. p.n.e.",
      "44 r. p.n.e.",
      "30 r. p.n.e."
    ],
    "answer": 2,
    "explanation": "Rzymianie za tradycyjną datę założenia swojego miasta uznawali 21 kwietnia 753 r. p.n.e."
  },
  {
    "id": "R01_ROM_02",
    "section": "Starożytny Rzym",
    "type": "multi_select",
    "prompt": "Zaznacz urzędy występujące w republice rzymskiej.",
    "options": [
      "Konsul",
      "Faraon",
      "Pretor",
      "Wezyr",
      "Cenzor",
      "Strateg"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do rzymskich urzędników należeli m.in. konsulowie, pretorzy i cenzorzy. Faraon i wezyr to urzędy związane z Egiptem, a strateg pełnił funkcję m.in. w Atenach."
  },
  {
    "id": "R01_ROM_03",
    "section": "Starożytny Rzym",
    "type": "true_false",
    "prompt": "Ustrój republiki rzymskiej dawał przeciętnemu obywatelowi tyle samo możliwości bezpośredniego wpływu na politykę co demokracja ateńska.",
    "options": null,
    "answer": false,
    "explanation": "W republice rzymskiej występowało mniej elementów demokracji bezpośredniej niż w Atenach, a dominujący wpływ na politykę miała arystokracja."
  },
  {
    "id": "R01_ROM_04",
    "section": "Starożytny Rzym",
    "type": "fill_in",
    "prompt": "Wolni mieszkańcy Rzymu dzielili się m.in. na arystokratycznych __________ i należących do ludu __________.",
    "options": null,
    "answer": [
      "patrycjuszy",
      "plebejuszy"
    ],
    "explanation": "Patrycjusze stanowili arystokrację i sprawowali kontrolę nad władzami państwowymi, a plebejusze byli ogółem ludu.",
    "altAnswers": [
      [
        "patrycjuszy",
        "patrycjusze"
      ],
      [
        "plebejuszy",
        "plebejusze"
      ]
    ]
  },
  {
    "id": "R01_ROM_05",
    "section": "Starożytny Rzym",
    "type": "riddle",
    "prompt": "Jak nazywała się budowla doprowadzająca wodę pitną do rzymskich miast?",
    "options": null,
    "answer": "akwedukt",
    "explanation": "Rzymianie wznosili akwedukty, czyli wodociągi doprowadzające wodę do ośrodków miejskich.",
    "image": "r01_akwedukt_rzymski.jpg",
    "altAnswers": [
      "akwedukt",
      "akwedukty",
      "akweduktu"
    ]
  },
  {
    "id": "R01_ROM_06",
    "section": "Starożytny Rzym",
    "type": "odd_one_out",
    "prompt": "Wskaż urzędnika nienależącego do systemu władz republiki rzymskiej: konsul, pretor, cenzor, wezyr.",
    "options": null,
    "answer": "wezyr",
    "explanation": "Konsul, pretor i cenzor byli urzędnikami republiki rzymskiej. Wezyr zarządzał Egiptem w imieniu faraona."
  },
  {
    "id": "R01_ROM_07",
    "section": "Starożytny Rzym",
    "type": "scenario",
    "prompt": "Jesteś plebejuszem w republice rzymskiej. Urzędnik broni Twoich interesów i może zawetować decyzję władz państwowych. Jaki urząd piastuje?",
    "options": [
      "Konsul",
      "Cenzor",
      "Pretor",
      "Trybun ludowy",
      "Senator",
      "Wezyr"
    ],
    "answer": 3,
    "explanation": "Trybunowie ludowi bronili interesów plebejuszy i mogli sprzeciwiać się decyzjom władz dzięki prawu weta."
  },
  {
    "id": "R01_ROM_08",
    "section": "Starożytny Rzym",
    "type": "match",
    "prompt": "Połącz rzymski urząd z jego charakterystyczną funkcją.",
    "options": null,
    "answer": {
      "Konsul": "Najwyższa władza państwowa i wojskowa",
      "Pretor": "Zajmowanie się sądownictwem",
      "Cenzor": "Przeprowadzanie spisu ludności i majątków",
      "Trybun ludowy": "Obrona plebejuszy dzięki prawu weta"
    },
    "explanation": "Konsulowie dowodzili państwem i wojskiem; pretorzy sądzili; cenzorzy prowadzili spisy; trybunowie ludowi chronili prawa plebejuszy.",
    "left": [
      "Konsul",
      "Pretor",
      "Cenzor",
      "Trybun ludowy"
    ],
    "right": [
      "Przeprowadzanie spisu ludności i majątków",
      "Obrona plebejuszy dzięki prawu weta",
      "Zajmowanie się sądownictwem",
      "Najwyższa władza państwowa i wojskowa"
    ]
  },
  {
    "id": "R01_ROM_09",
    "section": "Starożytny Rzym",
    "type": "sort",
    "prompt": "Przyporządkuj rzymskie budowle i miejsca do ich funkcji.",
    "options": null,
    "answer": {
      "Widowiska i igrzyska": [
        "Koloseum",
        "Circus Maximus"
      ],
      "Woda i wypoczynek": [
        "Akwedukt",
        "Termy Dioklecjana"
      ],
      "Życie publiczne i upamiętnianie": [
        "Forum Romanum",
        "Łuk triumfalny"
      ]
    },
    "explanation": "Koloseum i Circus Maximus służyły widowiskom, akwedukty oraz termy potrzebom mieszkańców, a Forum Romanum i łuki triumfalne wiązały się z życiem państwa i zwycięstwami.",
    "image": "r01_amfiteatr_rzymski.jpg",
    "items": [
      "Forum Romanum",
      "Termy Dioklecjana",
      "Koloseum",
      "Łuk triumfalny",
      "Akwedukt",
      "Circus Maximus"
    ],
    "categories": [
      "Widowiska i igrzyska",
      "Woda i wypoczynek",
      "Życie publiczne i upamiętnianie"
    ]
  },
  {
    "id": "R01_ROM_10",
    "section": "Starożytny Rzym",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia politycznych dziejów Rzymu chronologicznie.",
    "options": null,
    "answer": [
      "Tradycyjna data założenia Rzymu (753 r. p.n.e.)",
      "Początek republiki (około 500 r. p.n.e.)",
      "Zamordowanie Juliusza Cezara (44 r. p.n.e.)",
      "Początek cesarstwa za Oktawiana Augusta (30 r. p.n.e.)"
    ],
    "explanation": "Tradycyjna data założenia Rzymu to 753 r. p.n.e., republika powstała około 500 r. p.n.e., Cezara zabito w 44 r. p.n.e., a początki cesarstwa w tym ujęciu datuje się na 30 r. p.n.e.",
    "items": [
      "Zamordowanie Juliusza Cezara (44 r. p.n.e.)",
      "Początek cesarstwa za Oktawiana Augusta (30 r. p.n.e.)",
      "Tradycyjna data założenia Rzymu (753 r. p.n.e.)",
      "Początek republiki (około 500 r. p.n.e.)"
    ]
  },
  {
    "id": "R01_ROM_11",
    "section": "Starożytny Rzym",
    "type": "single_choice",
    "prompt": "Która rzymska budowla słynie z zastosowania wielkiej kopuły?",
    "options": [
      "Panteon",
      "Koloseum",
      "Circus Maximus",
      "Forum Romanum",
      "Termy Dioklecjana",
      "Łuk Konstantyna"
    ],
    "answer": 0,
    "explanation": "Rzymski Panteon ma kopułę, której powstanie wiązało się z rozwojem umiejętności stosowania łuków architektonicznych."
  },
  {
    "id": "R01_ROM_12",
    "section": "Starożytny Rzym",
    "type": "scenario",
    "prompt": "Niewolnik w Rzymie uzbierał pieniądze i wykupił się z niewoli. Zyskał wolność, choć nie mógł czynnie uczestniczyć w polityce. Jak określano takie osoby?",
    "options": [
      "Patrycjuszami",
      "Wyzwoleńcami",
      "Konsulami",
      "Cenzorami",
      "Pretorami",
      "Gladiatorami"
    ],
    "answer": 1,
    "explanation": "Osobę, która odzyskała wolność po wykupieniu się z niewoli, nazywano wyzwoleńcem. Wyzwoleńcy nie otrzymywali pełni praw politycznych."
  },
  {
    "id": "R01_CHR_01",
    "section": "Narodziny chrześcijaństwa",
    "type": "single_choice",
    "prompt": "Na jakim obszarze narodziło się chrześcijaństwo?",
    "options": [
      "Mezopotamii",
      "Grecji",
      "Palestynie",
      "Italii",
      "Egipcie",
      "Dolinie Indusu"
    ],
    "answer": 2,
    "explanation": "Chrześcijaństwo narodziło się w Palestynie, gdzie zgodnie z przekazami ewangelicznymi urodził się i nauczał Jezus Chrystus."
  },
  {
    "id": "R01_CHR_02",
    "section": "Narodziny chrześcijaństwa",
    "type": "multi_select",
    "prompt": "Dlaczego pierwsi chrześcijanie budzili nieufność władz rzymskich?",
    "options": [
      "Odmawiali składania ofiar bogom rzymskim",
      "Popierali obowiązkowy kult Jowisza",
      "Odmawiali czci posągowi cesarza",
      "Żądali przywrócenia rządów faraonów",
      "Ich postawę uznawano za przestępstwo polityczne",
      "Odrzucali wszelkie formy wspólnoty"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Odmawiali ofiar dla bóstw opiekuńczych Rzymu i kultu cesarza; władze uznawały to za poważne przewinienie polityczne.",
    "image": "r01_wczesni_chrzescijanie.jpg"
  },
  {
    "id": "R01_CHR_03",
    "section": "Narodziny chrześcijaństwa",
    "type": "true_false",
    "prompt": "Edykt mediolański z 313 r. zapewnił równouprawnienie wyznań, w tym chrześcijaństwa.",
    "options": null,
    "answer": true,
    "explanation": "Konstantyn wydał w 313 r. edykt mediolański, który wprowadzał równość wyznań. Chrześcijaństwo stało się oficjalną religią cesarstwa w 380 r."
  },
  {
    "id": "R01_CHR_04",
    "section": "Narodziny chrześcijaństwa",
    "type": "fill_in",
    "prompt": "Edykt mediolański ogłoszono w __________ r., a chrześcijaństwo stało się oficjalną religią Cesarstwa Rzymskiego w __________ r.",
    "options": null,
    "answer": [
      "313",
      "380"
    ],
    "explanation": "W 313 r. cesarz Konstantyn ogłosił edykt mediolański. W 380 r. chrześcijaństwo uzyskało status oficjalnej religii państwa.",
    "altAnswers": [
      [
        "313",
        "313 r."
      ],
      [
        "380",
        "380 r."
      ]
    ]
  },
  {
    "id": "R01_CHR_05",
    "section": "Narodziny chrześcijaństwa",
    "type": "riddle",
    "prompt": "Jak nazywano dwunastu wybranych przez Jezusa uczniów, którzy po jego śmierci tworzyli wspólnotę wiernych?",
    "options": null,
    "answer": "apostołowie",
    "explanation": "Jezus wybrał dwunastu zwolenników nazywanych apostołami, a po jego śmierci rozwijali oni Kościół.",
    "altAnswers": [
      "apostołowie",
      "apostołów",
      "apostołami"
    ]
  },
  {
    "id": "R01_CHR_06",
    "section": "Narodziny chrześcijaństwa",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niezwiązaną z dziejami narodzin chrześcijaństwa omawianymi w rozdziale: Jezus Chrystus, apostołowie, Konstantyn, Ozyrys.",
    "options": null,
    "answer": "Ozyrys",
    "explanation": "Jezus, apostołowie i Konstantyn występują w opowieści o narodzinach i rozwoju chrześcijaństwa. Ozyrys to egipski bóg świata zmarłych."
  },
  {
    "id": "R01_CHR_07",
    "section": "Narodziny chrześcijaństwa",
    "type": "scenario",
    "prompt": "W Rzymie w 64 r. n.e. po wielkim pożarze cesarz obarcza chrześcijan winą za podpalenie i rozpoczyna ich prześladowania. O którego cesarza chodzi?",
    "options": [
      "Neron",
      "Konstantyn",
      "Oktawian August",
      "Juliusz Cezar",
      "Dioklecjan",
      "Romulus"
    ],
    "answer": 0,
    "explanation": "W 64 r. n.e. Neron oskarżył chrześcijan o podpalenie Rzymu. Wielu z nich poniosło śmierć w czasie prześladowań.",
    "image": "r01_wczesni_chrzescijanie.jpg"
  },
  {
    "id": "R01_CHR_08",
    "section": "Narodziny chrześcijaństwa",
    "type": "match",
    "prompt": "Połącz postacie i grupy z ich rolą w dziejach wczesnego chrześcijaństwa.",
    "options": null,
    "answer": {
      "Jezus Chrystus": "Jego życie i nauczanie zapoczątkowały chrześcijaństwo",
      "Apostołowie": "Dwunastu wybranych uczniów Jezusa",
      "Neron": "Oskarżył chrześcijan o podpalenie Rzymu",
      "Konstantyn": "Wydał edykt mediolański"
    },
    "explanation": "Jezus był źródłem nauki chrześcijańskiej, apostołowie tworzyli Kościół, Neron prześladował wyznawców, a Konstantyn ogłosił edykt w 313 r.",
    "left": [
      "Jezus Chrystus",
      "Apostołowie",
      "Neron",
      "Konstantyn"
    ],
    "right": [
      "Wydał edykt mediolański",
      "Dwunastu wybranych uczniów Jezusa",
      "Jego życie i nauczanie zapoczątkowały chrześcijaństwo",
      "Oskarżył chrześcijan o podpalenie Rzymu"
    ]
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o instytucjach demokracji ateńskiej są prawdziwe?",
    "options": [
      "Rada Pięciuset miała po 50 przedstawicieli z każdego z 10 okręgów.",
      "Sąd Ludowy składał się z 500 sędziów.",
      "Zgromadzenie Ludowe spotykało się cztery razy w miesiącu.",
      "Członków Rady Pięciuset mianował faraon.",
      "Sąd Ludowy liczył 6000 sędziów.",
      "Na obradach Zgromadzenia Ludowego głosowano wyłącznie na piśmie."
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Rada Pięciuset miała po 50 członków z każdego z 10 okręgów; Sąd Ludowy liczył 6000 sędziów, a Zgromadzenie Ludowe obradowało cztery razy w miesiącu."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W __________ r. p.n.e. Juda została zdobyta przez władcę Babilonu o imieniu __________.",
    "options": null,
    "answer": [
      "587",
      "Nabuchodonozor II"
    ],
    "explanation": "Podbój Judy przez Nabuchodonozora II w 587 r. p.n.e. rozpoczął niewolę babilońską znacznej części jej mieszkańców.",
    "altAnswers": [
      [
        "587",
        "587 r."
      ],
      [
        "Nabuchodonozor II",
        "Nabuchodonozora II",
        "Nabuchodonozor 2"
      ]
    ]
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz starożytną cywilizację z opisem jej pisma.",
    "options": null,
    "answer": {
      "Sumerowie": "Pismo klinowe",
      "Egipcjanie": "Hieroglify",
      "Cywilizacja doliny Indusu": "Pismo nieodczytane do dziś",
      "Chińczycy": "Własne pismo obrazkowe"
    },
    "explanation": "Sumerowie używali pisma klinowego, Egipcjanie hieroglifów, pismo Indusu pozostaje nieodczytane, a Chińczycy stworzyli własne pismo obrazkowe.",
    "image": "r01_hieroglify_egipskie.jpg",
    "left": [
      "Sumerowie",
      "Egipcjanie",
      "Cywilizacja doliny Indusu",
      "Chińczycy"
    ],
    "right": [
      "Własne pismo obrazkowe",
      "Hieroglify",
      "Pismo nieodczytane do dziś",
      "Pismo klinowe"
    ]
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu przedstawicieli z każdego z dziesięciu okręgów Aten wchodziło do Rady Pięciuset?",
    "options": [
      "10",
      "20",
      "40",
      "50",
      "100",
      "500"
    ],
    "answer": 3,
    "explanation": "Rada Pięciuset składała się z 50 przedstawicieli każdego z 10 okręgów, czyli łącznie z 500 osób."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów różnych cywilizacji chronologicznie.",
    "options": null,
    "answer": [
      "Wynalezienie pisma przez Sumerów (około 3500 r. p.n.e.)",
      "Powstanie państwa egipskiego (około 3100 r. p.n.e.)",
      "Niewola babilońska po podboju Judy (587 r. p.n.e.)",
      "Edykt mediolański (313 r. n.e.)"
    ],
    "explanation": "Zestawienie obejmuje kolejno sumeryjskie pismo, początek państwa egipskiego, podbój Judy przez Babilon i edykt mediolański Konstantyna.",
    "items": [
      "Edykt mediolański (313 r. n.e.)",
      "Niewola babilońska po podboju Judy (587 r. p.n.e.)",
      "Wynalezienie pisma przez Sumerów (około 3500 r. p.n.e.)",
      "Powstanie państwa egipskiego (około 3100 r. p.n.e.)"
    ]
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się spis wolnej ludności rzymskiej według posiadanego majątku, przeprowadzany przez cenzorów?",
    "options": null,
    "answer": "cenzus",
    "explanation": "Cenzorowie dokonywali cenzusu, czyli spisu wolnych obywateli według majątku, oraz dzielili ich na klasy.",
    "altAnswers": [
      "cenzus",
      "cenzusu"
    ]
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj nazwy i funkcje do form pisma egipskiego.",
    "options": null,
    "answer": {
      "Hieroglify": [
        "Pismo obejmujące znaki obrazkowe i dźwiękowe",
        "Napisy utrwalane także w kamieniu"
      ],
      "Pismo hieratyczne": [
        "Uproszczone pismo używane na co dzień",
        "Pismo zwane kapłańskim"
      ],
      "Pismo demotyczne": [
        "Pismo zwane ludowym",
        "Najprostsza forma pisma egipskiego"
      ]
    },
    "explanation": "W starożytnym Egipcie używano hieroglifów, uproszczonego pisma hieratycznego (kapłańskiego) oraz jeszcze prostszego pisma demotycznego (ludowego), używanego od VIII w. p.n.e.",
    "image": "r01_hieroglify_egipskie.jpg",
    "items": [
      "Pismo zwane ludowym",
      "Napisy utrwalane także w kamieniu",
      "Uproszczone pismo używane na co dzień",
      "Najprostsza forma pisma egipskiego",
      "Pismo obejmujące znaki obrazkowe i dźwiękowe",
      "Pismo zwane kapłańskim"
    ],
    "categories": [
      "Hieroglify",
      "Pismo hieratyczne",
      "Pismo demotyczne"
    ]
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W republice rzymskiej trybun ludowy mógł stosować weto, natomiast cenzorzy sporządzali listy senatorów.",
    "options": null,
    "answer": true,
    "explanation": "Trybunowie ludowi bronili plebejuszy przez prawo weta. Cenzorzy przeprowadzali spis ludności i ustalali listy senatorów."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Ateńscy obywatele zapisują imię niebezpiecznego polityka na glinianych skorupkach. W głosowaniu bierze udział co najmniej 6000 osób. Na jak długo skazany obywatel może zostać wygnany z Aten?",
    "options": [
      "1 rok",
      "2 lata",
      "5 lat",
      "8 lat",
      "10 lat",
      "20 lat"
    ],
    "answer": 4,
    "explanation": "Ostracyzm wymagał udziału co najmniej 6000 obywateli i mógł prowadzić do dziesięcioletniego wygnania."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie należała do greckich twórców literatury lub dramatu: Homer, Safona, Sofokles, Ceres.",
    "options": null,
    "answer": "Ceres",
    "explanation": "Homer tworzył eposy, Safona poezję, a Sofokles dramaty. Ceres była rzymską boginią urodzaju i rolnictwa."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku odkryto niemal nienaruszony grobowiec Tutanchamona?",
    "options": [
      "1875",
      "1922",
      "1905",
      "1939",
      "1945",
      "1960"
    ],
    "answer": 1,
    "explanation": "W 1922 r. odkryto grobowiec Tutanchamona, którego zachowanie uczyniło odkrycie wyjątkowym na tle licznych rabowanych grobów faraonów.",
    "image": "r01_piramida_i_grobowce.jpg"
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj egipskich bogów do ich ról i funkcji.",
    "options": null,
    "answer": {
      "Ra": "Bóg tarczy słonecznej",
      "Ozyrys": "Bóg świata zmarłych i sędzia zmarłych",
      "Horus": "Opiekun niebios i władzy faraona",
      "Tot": "Bóg mądrości i patron uczonych"
    },
    "explanation": "Egipski panteon obejmował Ra, Ozyrysa, Horusa i Tota, pełniących odmienne funkcje związane ze słońcem, zaświatami, faraonem i wiedzą.",
    "left": [
      "Ra",
      "Ozyrys",
      "Horus",
      "Tot"
    ],
    "right": [
      "Opiekun niebios i władzy faraona",
      "Bóg mądrości i patron uczonych",
      "Bóg tarczy słonecznej",
      "Bóg świata zmarłych i sędzia zmarłych"
    ]
  }
];

const KID_PROMPTS = {
  "R01_PRE_07": "Co się zmieniło, gdy ludzie zaczęli mieszkać w stałych domach i uprawiać ziemię?",
  "R01_CYW_07": "Co mogli robić Sumerowie, gdy z pól zbierali dużo więcej jedzenia niż potrzebowali?",
  "R01_IZE_06": "Kto był królem Babilonu, który zdobył Judę w 587 r. p.n.e.?",
  "R01_GRE_07": "Jak nazywano zebranie obywateli Aten głosujących nad prawami i wojną?",
  "R01_ROM_07": "Kto w Rzymie bronił plebejuszy i mógł powiedzieć władzom nie?",
  "R01_CHR_07": "Który cesarz oskarżył chrześcijan o pożar Rzymu w 64 roku?",
  "R01_HARD_09": "Na ile lat można było wygnać obywatela Aten po głosowaniu na glinianych skorupkach?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Starożytność",
  icon: "🏺",
  sectionOrder: [
    "Prehistoria i rewolucja neolityczna",
    "Pierwsze cywilizacje",
    "Starożytny Izrael i Egipt",
    "Starożytna Grecja",
    "Starożytny Rzym",
    "Narodziny chrześcijaństwa"
  ],
  sectionIcons: {
    "Prehistoria i rewolucja neolityczna": "🪨",
    "Pierwsze cywilizacje": "🏺",
    "Starożytny Izrael i Egipt": "📜",
    "Starożytna Grecja": "🏛️",
    "Starożytny Rzym": "🏟️",
    "Narodziny chrześcijaństwa": "✝️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
