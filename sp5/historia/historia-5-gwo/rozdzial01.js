// Skróty sekcji:
//   CZA = Czas i epoki
//   PAL = Paleolit
//   NEO = Neolit
//   CYW = Pierwsze cywilizacje
//   EGI = Egipt
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_CZA_01",
    "section": "Czas i epoki",
    "type": "single_choice",
    "prompt": "Czym zajmuje się chronologia?",
    "options": [
      "Mierzeniem czasu w przeszłości i ustalaniem kolejności wydarzeń",
      "Badaniem budowy piramid",
      "Odczytywaniem pisma chińskiego",
      "Wytwarzaniem narzędzi z brązu",
      "Planowaniem kanałów nawadniających",
      "Opisem wierzeń Egipcjan"
    ],
    "answer": 0,
    "explanation": "Chronologia mierzy czas w przeszłości i ustala kolejność wydarzeń."
  },
  {
    "id": "R01_CZA_02",
    "section": "Czas i epoki",
    "type": "true_false",
    "prompt": "W podręczniku wyjaśniono, że roku 0 nie było.",
    "options": null,
    "answer": true,
    "explanation": "Na osi czasu po 1 roku p.n.e. następuje 1 rok n.e., bez roku zerowego."
  },
  {
    "id": "R01_CZA_03",
    "section": "Czas i epoki",
    "type": "fill_in",
    "prompt": "Skrót n.e. oznacza naszą erę, a skrót p.n.e. oznacza __________.",
    "options": null,
    "answer": [
      "przed naszą erą"
    ],
    "altAnswers": [
      [
        "przed naszą erą",
        "przed nasza era",
        "przed n.e."
      ]
    ],
    "explanation": "Skrót p.n.e. oznacza czas przed naszą erą."
  },
  {
    "id": "R01_CZA_04",
    "section": "Czas i epoki",
    "type": "single_choice",
    "prompt": "Do którego wieku należy rok 1370 n.e.?",
    "options": [
      "XII wieku",
      "XIII wieku",
      "XIV wieku",
      "XV wieku",
      "XVI wieku",
      "XI wieku"
    ],
    "answer": 2,
    "explanation": "Rok 1370 należy do XIV wieku, bo dla lat bez zer na końcu dodaje się jeden do liczby setek."
  },
  {
    "id": "R01_CZA_05",
    "section": "Czas i epoki",
    "type": "single_choice",
    "prompt": "Do którego wieku należy rok 1500?",
    "options": [
      "XIII wieku",
      "XIV wieku",
      "XV wieku",
      "XVI wieku",
      "XVII wieku",
      "XX wieku"
    ],
    "answer": 2,
    "explanation": "Przy latach kończących się dwoma zerami nie dodaje się jedynki, więc 1500 rok należy do XV wieku."
  },
  {
    "id": "R01_CZA_06",
    "section": "Czas i epoki",
    "type": "riddle",
    "prompt": "Długi okres w historii lub prehistorii, który ma początek i koniec, to...",
    "options": null,
    "answer": "epoka",
    "altAnswers": [
      "epoka",
      "Epoka"
    ],
    "explanation": "Epoka to długi okres w historii lub prehistorii odróżniający się od innych epok."
  },
  {
    "id": "R01_CZA_07",
    "section": "Czas i epoki",
    "type": "multi_select",
    "prompt": "Zaznacz epoki prehistoryczne wymienione w podręczniku.",
    "options": [
      "starsza epoka kamienia",
      "młodsza epoka kamienia",
      "starożytność",
      "średniowiecze",
      "nowożytność"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "W prehistorii wyróżniono starszą i młodszą epokę kamienia."
  },
  {
    "id": "R01_CZA_08",
    "section": "Czas i epoki",
    "type": "sequence",
    "prompt": "Ułóż epoki historyczne od najwcześniejszej do najpóźniejszej.",
    "options": null,
    "items": [
      "nowożytność",
      "starożytność",
      "średniowiecze"
    ],
    "answer": [
      "starożytność",
      "średniowiecze",
      "nowożytność"
    ],
    "explanation": "Podręcznik podaje kolejność: starożytność, średniowiecze, nowożytność."
  },
  {
    "id": "R01_CZA_09",
    "section": "Czas i epoki",
    "type": "single_choice",
    "prompt": "Kiedy według podręcznika zaczyna się historia ludzkości?",
    "options": [
      "około 200 tysięcy lat temu",
      "około 40 tysięcy lat temu",
      "około 3500 r. p.n.e.",
      "w 476 r. n.e.",
      "w 1492 r.",
      "w 2001 r."
    ],
    "answer": 2,
    "image": "/img/r01_tabliczka_sumeryjska.jpg",
    "explanation": "Historia zaczyna się od wynalezienia pisma, czyli około 3500 r. p.n.e."
  },
  {
    "id": "R01_CZA_10",
    "section": "Czas i epoki",
    "type": "match",
    "prompt": "Połącz pojęcie z objaśnieniem.",
    "options": null,
    "left": [
      "chronologia",
      "prehistoria",
      "historia",
      "tysiąclecie"
    ],
    "right": [
      "nauka o mierzeniu czasu i kolejności wydarzeń",
      "dzieje przed wynalezieniem pisma",
      "dzieje od wynalezienia pisma",
      "pełne tysiąc lat"
    ],
    "answer": {
      "chronologia": "nauka o mierzeniu czasu i kolejności wydarzeń",
      "prehistoria": "dzieje przed wynalezieniem pisma",
      "historia": "dzieje od wynalezienia pisma",
      "tysiąclecie": "pełne tysiąc lat"
    },
    "explanation": "Chronologia, prehistoria, historia i tysiąclecie mają w rozdziale odrębne znaczenia."
  },
  {
    "id": "R01_CZA_11",
    "section": "Czas i epoki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: starożytność, średniowiecze, nowożytność, paleolit.",
    "options": null,
    "answer": "paleolit",
    "explanation": "Paleolit jest epoką prehistoryczną, a pozostałe nazwy odnoszą się do epok historycznych."
  },
  {
    "id": "R01_CZA_12",
    "section": "Czas i epoki",
    "type": "true_false",
    "prompt": "Podział na epoki jest umowny, bo historycy przyjmują wybrane wydarzenia jako granice epok.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że daty graniczne epok są umowne i mogą być różnie wskazywane."
  },
  {
    "id": "R01_PAL_01",
    "section": "Paleolit",
    "type": "single_choice",
    "prompt": "Około kiedy pojawił się człowiek rozumny?",
    "options": [
      "około 4,6 miliarda lat temu",
      "około 450 milionów lat temu",
      "około 200 tysięcy lat temu",
      "około 40 tysięcy lat temu",
      "około 10 tysięcy lat temu",
      "około 3500 r. p.n.e."
    ],
    "answer": 2,
    "explanation": "Najstarsze odnalezione kości ludzi rozumnych mają około 200 tysięcy lat."
  },
  {
    "id": "R01_PAL_02",
    "section": "Paleolit",
    "type": "single_choice",
    "prompt": "Około kiedy ludzie rozumni przywędrowali do Europy?",
    "options": [
      "około 200 tysięcy lat temu",
      "około 40 tysięcy lat temu",
      "około 20 tysięcy lat temu",
      "około 8000 r. p.n.e.",
      "około 2500 r. p.n.e.",
      "około 1700 r. p.n.e."
    ],
    "answer": 1,
    "explanation": "Podręcznik podaje, że ludzie przywędrowali do Europy około 40 tysięcy lat temu."
  },
  {
    "id": "R01_PAL_03",
    "section": "Paleolit",
    "type": "multi_select",
    "prompt": "Zaznacz cechy życia ludzi starszej epoki kamienia.",
    "options": [
      "koczowniczy tryb życia",
      "myślistwo i zbieractwo",
      "proste narzędzia kamienne",
      "trwałe domy z gliny i trzciny",
      "uprawa pól zbożowych",
      "garncarstwo"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ludzie paleolitu żyli koczowniczo, zajmowali się myślistwem i zbieractwem oraz używali prostych narzędzi kamiennych."
  },
  {
    "id": "R01_PAL_04",
    "section": "Paleolit",
    "type": "true_false",
    "prompt": "Ludzie paleolitu prowadzili koczowniczy tryb życia, ponieważ wędrowali w poszukiwaniu żywności.",
    "options": null,
    "answer": true,
    "image": "/img/r01_jaskinia_paleolit.jpg",
    "explanation": "Nie budowali trwałych domów, lecz przemieszczali się za pożywieniem."
  },
  {
    "id": "R01_PAL_05",
    "section": "Paleolit",
    "type": "fill_in",
    "prompt": "Starsza epoka kamienia to inaczej __________.",
    "options": null,
    "answer": [
      "paleolit"
    ],
    "altAnswers": [
      [
        "paleolit",
        "paleolitem",
        "Paleolit"
      ]
    ],
    "explanation": "Starsza epoka kamienia jest nazywana paleolitem."
  },
  {
    "id": "R01_PAL_06",
    "section": "Paleolit",
    "type": "single_choice",
    "prompt": "Z czego ludzie starszej epoki kamienia budowali namioty?",
    "options": [
      "z wypalanych cegieł",
      "z kamienia i zaprawy",
      "z kości mamuta i zwierzęcych skór",
      "z papirusu",
      "z brązu i drewna",
      "z cegieł suszonych na słońcu"
    ],
    "answer": 2,
    "explanation": "W rozdziale opisano namioty z kości mamuta okrytych zwierzęcymi skórami."
  },
  {
    "id": "R01_PAL_07",
    "section": "Paleolit",
    "type": "multi_select",
    "prompt": "Co jedli lub zdobywali ludzie paleolitu według podręcznika?",
    "options": [
      "mięso mamutów i reniferów",
      "ryby",
      "owoce i nasiona",
      "jadalne korzenie",
      "jaja ptaków",
      "chleb z uprawianego zboża"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Myśliwi polowali na duże zwierzęta i łowili ryby, a kobiety i dzieci zbierały rośliny oraz jaja ptaków."
  },
  {
    "id": "R01_PAL_08",
    "section": "Paleolit",
    "type": "riddle",
    "prompt": "Twarda skała łupana na ostre kawałki, używana do wyrobu narzędzi i broni, to...",
    "options": null,
    "answer": "krzemień",
    "altAnswers": [
      "krzemień",
      "krzemien",
      "Krzemień"
    ],
    "explanation": "Krzemień pozwalał wyrabiać ostre narzędzia, toporki i oszczepy."
  },
  {
    "id": "R01_PAL_09",
    "section": "Paleolit",
    "type": "single_choice",
    "prompt": "Jak ludzie paleolitu rozpalali ogień według podręcznika?",
    "options": [
      "pocierali dwa kawałki papirusu",
      "uderzali krzemieniem w piryt",
      "używali szkła powiększającego",
      "podpalali węgiel w piecu",
      "korzystali z brązowych zapałek",
      "przynosili ogień z kuźni"
    ],
    "answer": 1,
    "explanation": "Uderzali krzemieniem w piryt, a iskry podpalały suchą trawę lub podobny materiał."
  },
  {
    "id": "R01_PAL_10",
    "section": "Paleolit",
    "type": "scenario",
    "prompt": "Gromada liczy 25 osób, mieszka w jaskini, poluje i zbiera rośliny, a po wyczerpaniu zwierzyny rusza dalej. Jaki tryb życia prowadzi?",
    "options": [
      "osiadły",
      "koczowniczy",
      "miejski",
      "rzemieślniczy",
      "państwowy",
      "kupiecki"
    ],
    "answer": 1,
    "image": "/img/r01_jaskinia_paleolit.jpg",
    "explanation": "Opis pasuje do koczowniczego trybu życia ludzi paleolitu."
  },
  {
    "id": "R01_PAL_11",
    "section": "Paleolit",
    "type": "match",
    "prompt": "Połącz element z jego zastosowaniem w paleolicie.",
    "options": null,
    "left": [
      "jaskinia",
      "ogień",
      "łuk",
      "krzemień"
    ],
    "right": [
      "schronienie przed zimnem i zwierzętami",
      "ogrzewanie, pieczenie mięsa i odstraszanie zwierząt",
      "łatwiejsze polowanie na szybkie zwierzęta",
      "wyrób ostrych narzędzi i broni"
    ],
    "answer": {
      "jaskinia": "schronienie przed zimnem i zwierzętami",
      "ogień": "ogrzewanie, pieczenie mięsa i odstraszanie zwierząt",
      "łuk": "łatwiejsze polowanie na szybkie zwierzęta",
      "krzemień": "wyrób ostrych narzędzi i broni"
    },
    "explanation": "W rozdziale opisano praktyczne znaczenie jaskini, ognia, łuku i krzemienia."
  },
  {
    "id": "R01_PAL_12",
    "section": "Paleolit",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mamut, renifer, koń, piryt.",
    "options": null,
    "answer": "piryt",
    "explanation": "Piryt to kamień wykorzystywany do rozpalania ognia, a pozostałe elementy to zwierzęta, na które polowano."
  },
  {
    "id": "R01_NEO_01",
    "section": "Neolit",
    "type": "single_choice",
    "prompt": "Gdzie jako pierwsi ludzie w dziejach zaczęli uprawiać ziemię?",
    "options": [
      "w Europie Północnej",
      "na Bliskim Wschodzie",
      "w Australii",
      "w Ameryce",
      "na Antarktydzie",
      "w Rzymie"
    ],
    "answer": 1,
    "explanation": "Podręcznik wskazuje mieszkańców Bliskiego Wschodu jako pierwszych rolników."
  },
  {
    "id": "R01_NEO_02",
    "section": "Neolit",
    "type": "fill_in",
    "prompt": "Przejście ludzi od myślistwa i zbieractwa do rolnictwa nazywamy __________.",
    "options": null,
    "answer": [
      "rewolucją neolityczną"
    ],
    "altAnswers": [
      [
        "rewolucją neolityczną",
        "rewolucja neolityczna",
        "rewolucją neolityczna"
      ]
    ],
    "explanation": "Rewolucja neolityczna oznacza przejście do uprawy ziemi i hodowli zwierząt."
  },
  {
    "id": "R01_NEO_03",
    "section": "Neolit",
    "type": "multi_select",
    "prompt": "Zaznacz skutki rewolucji neolitycznej wymienione w podręczniku.",
    "options": [
      "osiadły tryb życia",
      "udoskonalenie kamiennych narzędzi",
      "udomowienie kóz, owiec, bydła i świń",
      "powstanie garncarstwa i tkactwa",
      "całkowite zniknięcie rolnictwa",
      "zaprzestanie budowy domów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_wies_neolityczna.jpg",
    "explanation": "Do skutków należały osiadły tryb życia, ulepszenie narzędzi, udomowienie zwierząt i rozwój rzemiosła."
  },
  {
    "id": "R01_NEO_04",
    "section": "Neolit",
    "type": "true_false",
    "prompt": "Rolnictwo obejmuje uprawę ziemi oraz hodowlę zwierząt.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik definiuje rolnictwo jako uprawę ziemi i hodowlę zwierząt."
  },
  {
    "id": "R01_NEO_05",
    "section": "Neolit",
    "type": "single_choice",
    "prompt": "Dlaczego rolnicy zaczęli prowadzić osiadły tryb życia?",
    "options": [
      "musieli doglądać pól",
      "nie znali ognia",
      "nie mieli żadnych narzędzi",
      "żyli wyłącznie w jaskiniach",
      "nie mogli jeść zboża",
      "nie umieli hodować zwierząt"
    ],
    "answer": 0,
    "explanation": "Musieli pozostawać w jednym miejscu, aby doglądać pól i hodowanych zwierząt."
  },
  {
    "id": "R01_NEO_06",
    "section": "Neolit",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do paleolitu albo neolitu.",
    "options": null,
    "items": [
      "jaskinie i namioty",
      "trwałe domy",
      "myślistwo i zbieractwo",
      "rolnictwo",
      "garncarstwo",
      "odzież ze skór"
    ],
    "categories": [
      "paleolit",
      "neolit"
    ],
    "answer": {
      "paleolit": [
        "jaskinie i namioty",
        "myślistwo i zbieractwo",
        "odzież ze skór"
      ],
      "neolit": [
        "trwałe domy",
        "rolnictwo",
        "garncarstwo"
      ]
    },
    "explanation": "Paleolit wiązał się z koczowniczym myślistwem i zbieractwem, a neolit z osiadłym rolnictwem i rzemiosłem."
  },
  {
    "id": "R01_NEO_07",
    "section": "Neolit",
    "type": "single_choice",
    "prompt": "Które gałęzie rzemiosła powstały jako jedne z pierwszych w neolicie?",
    "options": [
      "garncarstwo i tkactwo",
      "drukarstwo i zegarmistrzostwo",
      "hutnictwo stali i kolejnictwo",
      "żeglarstwo oceaniczne i bankowość",
      "kamieniarstwo piramid i pisarstwo",
      "malarstwo ścienne i fotografia"
    ],
    "answer": 0,
    "explanation": "Podręcznik wymienia garncarstwo i tkactwo jako pierwsze gałęzie rzemiosła."
  },
  {
    "id": "R01_NEO_08",
    "section": "Neolit",
    "type": "match",
    "prompt": "Połącz neolityczne rzemiosło z jego wyrobem lub zastosowaniem.",
    "options": null,
    "left": [
      "garncarstwo",
      "tkactwo",
      "wygładzanie narzędzi",
      "hodowla"
    ],
    "right": [
      "gliniane naczynia do przechowywania i gotowania",
      "tkaniny z wełny i lnu",
      "lepsze kamienne narzędzia osadzane na trzonkach",
      "mięso, mleko, wełna i skóry"
    ],
    "answer": {
      "garncarstwo": "gliniane naczynia do przechowywania i gotowania",
      "tkactwo": "tkaniny z wełny i lnu",
      "wygładzanie narzędzi": "lepsze kamienne narzędzia osadzane na trzonkach",
      "hodowla": "mięso, mleko, wełna i skóry"
    },
    "explanation": "Garncarstwo dawało naczynia z gliny, a tkactwo przewiewne stroje z wełny i lnu."
  },
  {
    "id": "R01_NEO_09",
    "section": "Neolit",
    "type": "scenario",
    "prompt": "Rodzina mieszka w trwałym domu z drewna i gliny, uprawia zboże, hoduje kozy i robi naczynia. W której epoce żyje?",
    "options": [
      "w paleolicie",
      "w neolicie",
      "w średniowieczu",
      "w epoce nowożytnej",
      "w XX wieku",
      "w czasach rzymskich"
    ],
    "answer": 1,
    "image": "/img/r01_wies_neolityczna.jpg",
    "explanation": "Opis dotyczy młodszej epoki kamienia, czyli neolitu."
  },
  {
    "id": "R01_NEO_10",
    "section": "Neolit",
    "type": "multi_select",
    "prompt": "Które zwierzęta udomowili ludzie neolitu według podręcznika?",
    "options": [
      "kozy",
      "owce",
      "bydło",
      "świnie",
      "mamut",
      "renifer"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W rozdziale wymieniono kozy, owce, bydło i świnie."
  },
  {
    "id": "R01_NEO_11",
    "section": "Neolit",
    "type": "true_false",
    "prompt": "Rolnictwo pozwalało wyżywić więcej ludzi niż myślistwo i zbieractwo.",
    "options": null,
    "answer": true,
    "explanation": "Dzięki rolnictwu na Bliskim Wschodzie przybywało ludzi i powstawały ludniejsze osady."
  },
  {
    "id": "R01_NEO_12",
    "section": "Neolit",
    "type": "sequence",
    "prompt": "Ułóż przemiany w kolejności przyczynowo-skutkowej.",
    "options": null,
    "items": [
      "ludzie prowadzą osiadły tryb życia",
      "klimat się ociepla",
      "powstają coraz ludniejsze wsie",
      "mieszkańcy Bliskiego Wschodu zaczynają uprawiać ziemię"
    ],
    "answer": [
      "klimat się ociepla",
      "mieszkańcy Bliskiego Wschodu zaczynają uprawiać ziemię",
      "ludzie prowadzą osiadły tryb życia",
      "powstają coraz ludniejsze wsie"
    ],
    "explanation": "Ocieplenie klimatu stworzyło lepsze warunki, potem rozwinęło się rolnictwo, osiadły tryb życia i liczniejsze wsie."
  },
  {
    "id": "R01_CYW_01",
    "section": "Pierwsze cywilizacje",
    "type": "single_choice",
    "prompt": "Czym według podręcznika jest cywilizacja?",
    "options": [
      "poziom rozwoju społeczeństwa znającego osady lub miasta, rolnictwo, rzemiosło i pismo",
      "każda mała gromada myśliwych",
      "wyłącznie system wierzeń egipskich",
      "każdy kraj leżący nad morzem",
      "tylko grupa ludzi bez władzy",
      "zbiór narzędzi z krzemienia"
    ],
    "answer": 0,
    "explanation": "Cywilizacja to poziom rozwoju społeczeństwa mieszkającego w osadach lub miastach, znającego rolnictwo, rzemiosło i pismo."
  },
  {
    "id": "R01_CYW_02",
    "section": "Pierwsze cywilizacje",
    "type": "multi_select",
    "prompt": "Zaznacz obszary, na których powstały pierwsze cywilizacje wymienione w rozdziale.",
    "options": [
      "Mezopotamia",
      "Egipt",
      "Indie",
      "Chiny",
      "Grenlandia",
      "Antarktyda"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podręcznik wymienia Mezopotamię, Egipt, Indie i Chiny."
  },
  {
    "id": "R01_CYW_03",
    "section": "Pierwsze cywilizacje",
    "type": "fill_in",
    "prompt": "Mezopotamia to inaczej __________, kraina między Tygrysem i Eufratem.",
    "options": null,
    "answer": [
      "Międzyrzecze"
    ],
    "altAnswers": [
      [
        "Międzyrzecze",
        "międzyrzecze",
        "Miedzyrzecze",
        "miedzyrzecze"
      ]
    ],
    "image": "/img/r01_zyzny_polksiezyc_mapa.jpg",
    "explanation": "Mezopotamia jest nazywana Międzyrzeczem, bo leży między dwiema rzekami i wokół nich."
  },
  {
    "id": "R01_CYW_04",
    "section": "Pierwsze cywilizacje",
    "type": "true_false",
    "prompt": "Najstarsze cywilizacje powstawały nad rzekami nawadniającymi pola.",
    "options": null,
    "answer": true,
    "explanation": "Rzeki ułatwiały rolnictwo i wytwarzanie nadwyżek pożywienia."
  },
  {
    "id": "R01_CYW_05",
    "section": "Pierwsze cywilizacje",
    "type": "single_choice",
    "prompt": "Jaki lud po 4000 r. p.n.e. osiedlił się w Mezopotamii?",
    "options": [
      "Sumerowie",
      "Egipcjanie",
      "Rzymianie",
      "Grecy",
      "Frankowie",
      "Majowie"
    ],
    "answer": 0,
    "explanation": "Sumerowie osiedlili się w Mezopotamii po 4000 r. p.n.e."
  },
  {
    "id": "R01_CYW_06",
    "section": "Pierwsze cywilizacje",
    "type": "multi_select",
    "prompt": "Co umożliwiła Sumerom nadwyżka pożywienia?",
    "options": [
      "podział pracy między rolników i rzemieślników",
      "przekształcanie się wsi w miasta",
      "rozwój rzemiosła",
      "całkowite porzucenie kanałów",
      "zniknięcie pisma",
      "brak potrzeby władzy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nadwyżka pozwoliła części ludzi odejść od rolnictwa, rozwijać rzemiosło i tworzyć miasta."
  },
  {
    "id": "R01_CYW_07",
    "section": "Pierwsze cywilizacje",
    "type": "single_choice",
    "prompt": "Który wynalazek Sumerów około 3500 r. p.n.e. wyznacza początek historii?",
    "options": [
      "pismo",
      "papier",
      "żelazo",
      "kompas",
      "druk",
      "moneta"
    ],
    "answer": 0,
    "image": "/img/r01_tabliczka_sumeryjska.jpg",
    "explanation": "Wynalezienie pisma zakończyło prehistorię i rozpoczęło historię."
  },
  {
    "id": "R01_CYW_08",
    "section": "Pierwsze cywilizacje",
    "type": "match",
    "prompt": "Połącz cywilizację z obszarem.",
    "options": null,
    "left": [
      "cywilizacja Sumerów",
      "cywilizacja doliny Indusu",
      "cywilizacja chińska",
      "cywilizacja egipska"
    ],
    "right": [
      "Mezopotamia",
      "tereny dzisiejszych Indii i Pakistanu",
      "tereny nad Huang He",
      "dolina Nilu"
    ],
    "answer": {
      "cywilizacja Sumerów": "Mezopotamia",
      "cywilizacja doliny Indusu": "tereny dzisiejszych Indii i Pakistanu",
      "cywilizacja chińska": "tereny nad Huang He",
      "cywilizacja egipska": "dolina Nilu"
    },
    "explanation": "Sumerowie żyli w Mezopotamii, cywilizacja Indusu na terenach dzisiejszych Indii i Pakistanu, a cywilizacja chińska nad Huang He."
  },
  {
    "id": "R01_CYW_09",
    "section": "Pierwsze cywilizacje",
    "type": "multi_select",
    "prompt": "Czym odznaczała się cywilizacja doliny Indusu?",
    "options": [
      "domy z wypalanych cegieł",
      "prywatne łazienki i kanalizacja",
      "narzędzia z brązu",
      "pismo, którego uczeni jeszcze nie odczytali",
      "brak rolnictwa",
      "wyłącznie koczowniczy tryb życia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_mohendzo_daro.jpg",
    "explanation": "Mieszkańcy doliny Indusu budowali z wypalanych cegieł, mieli łazienki i kanalizację, znali brąz, pismo oraz handel."
  },
  {
    "id": "R01_CYW_10",
    "section": "Pierwsze cywilizacje",
    "type": "single_choice",
    "prompt": "Nad którą rzeką powstała cywilizacja chińska około 1700 r. p.n.e.?",
    "options": [
      "Huang He",
      "Nil",
      "Tygrys",
      "Eufrat",
      "Indus",
      "Wisła"
    ],
    "answer": 0,
    "image": "/img/r01_wielki_mur.jpg",
    "explanation": "Cywilizacja chińska powstała nad Huang He, czyli Żółtą Rzeką."
  },
  {
    "id": "R01_CYW_11",
    "section": "Pierwsze cywilizacje",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pismo, rolnictwo, rzemiosło, lądolód.",
    "options": null,
    "answer": "lądolód",
    "explanation": "Pismo, rolnictwo i rzemiosło są cechami cywilizacji, a lądolód należy do opisu warunków paleolitu."
  },
  {
    "id": "R01_CYW_12",
    "section": "Pierwsze cywilizacje",
    "type": "sort",
    "prompt": "Przyporządkuj osiągnięcia do cywilizacji.",
    "options": null,
    "items": [
      "pismo około 3500 r. p.n.e.",
      "koło i pierwsze wozy",
      "prywatne łazienki i kanalizacja",
      "domy z wypalanych cegieł",
      "pismo obrazkowe",
      "wyroby ceramiczne wysokiej jakości"
    ],
    "categories": [
      "Sumerowie",
      "dolina Indusu",
      "Chiny"
    ],
    "answer": {
      "Sumerowie": [
        "pismo około 3500 r. p.n.e.",
        "koło i pierwsze wozy"
      ],
      "dolina Indusu": [
        "prywatne łazienki i kanalizacja",
        "domy z wypalanych cegieł"
      ],
      "Chiny": [
        "pismo obrazkowe",
        "wyroby ceramiczne wysokiej jakości"
      ]
    },
    "explanation": "Rozdział przypisuje pismo klinowe, koło, szkło i brąz Sumerom, kanalizację i domy z cegieł dolinie Indusu, a pismo obrazkowe oraz wyroby ceramiczne Chinom."
  },
  {
    "id": "R01_EGI_01",
    "section": "Egipt",
    "type": "single_choice",
    "prompt": "Dlaczego starożytny Egipt nazwano darem Nilu?",
    "options": [
      "bo Nil nawadniał pola i nanosił żyzny muł",
      "bo Nil był najkrótszą rzeką świata",
      "bo Egipt leżał w Europie",
      "bo Egipcjanie nie budowali kanałów",
      "bo w Egipcie codziennie padał deszcz",
      "bo Nil dostarczał brązu"
    ],
    "answer": 0,
    "image": "/img/r01_nil_i_pola.jpg",
    "explanation": "Wylewy Nilu nawadniały pola i zostawiały żyzny muł, dzięki czemu Egipt mógł istnieć pośród pustyń."
  },
  {
    "id": "R01_EGI_02",
    "section": "Egipt",
    "type": "true_false",
    "prompt": "W Egipcie deszcz prawie nie padał, dlatego system nawadniający miał ogromne znaczenie.",
    "options": null,
    "answer": true,
    "explanation": "Bez Nilu i kanałów duża część kraju byłaby pustynią."
  },
  {
    "id": "R01_EGI_03",
    "section": "Egipt",
    "type": "fill_in",
    "prompt": "Państwo egipskie powstało około __________ r. p.n.e.",
    "options": null,
    "answer": [
      "3100"
    ],
    "altAnswers": [
      [
        "3100",
        "3100.",
        "ok. 3100",
        "około 3100"
      ]
    ],
    "explanation": "Podręcznik podaje, że państwo egipskie powstało około 3100 r. p.n.e."
  },
  {
    "id": "R01_EGI_04",
    "section": "Egipt",
    "type": "single_choice",
    "prompt": "Jak nazywał się król starożytnego Egiptu?",
    "options": [
      "faraon",
      "wezyr",
      "pisarz",
      "kapłan",
      "rzemieślnik",
      "najemnik"
    ],
    "answer": 0,
    "explanation": "Egipcjanie podlegali władzy faraona."
  },
  {
    "id": "R01_EGI_05",
    "section": "Egipt",
    "type": "multi_select",
    "prompt": "Jakie uprawnienia i role miał faraon według podręcznika?",
    "options": [
      "uważano go za syna boga słońca Ra",
      "miał prawo decydować o życiu i śmierci mieszkańców",
      "posiadał całą ziemię w państwie",
      "był najwyższym dowódcą wojskowym, sędzią i kapłanem",
      "był zwykłym chłopem",
      "nie miał żadnej władzy nad urzędnikami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Faraon był uznawany za syna Ra, miał władzę nad życiem i śmiercią, posiadał ziemię oraz pełnił najwyższe funkcje wojskowe, sądowe i kapłańskie."
  },
  {
    "id": "R01_EGI_06",
    "section": "Egipt",
    "type": "match",
    "prompt": "Połącz grupę społeczną Egiptu z jej rolą.",
    "options": null,
    "left": [
      "wezyr",
      "pisarze",
      "chłopi",
      "niewolnicy"
    ],
    "right": [
      "najwyższy urzędnik po faraonie",
      "zapisywali informacje potrzebne do rządzenia",
      "uprawiali ziemię faraona i oddawali daniny",
      "należeli do pana i nie mieli praw"
    ],
    "answer": {
      "wezyr": "najwyższy urzędnik po faraonie",
      "pisarze": "zapisywali informacje potrzebne do rządzenia",
      "chłopi": "uprawiali ziemię faraona i oddawali daniny",
      "niewolnicy": "należeli do pana i nie mieli praw"
    },
    "explanation": "Społeczeństwo egipskie miało wyraźną hierarchię i różne obowiązki grup."
  },
  {
    "id": "R01_EGI_07",
    "section": "Egipt",
    "type": "sequence",
    "prompt": "Ułóż warstwy społeczeństwa egipskiego od najwyższej do najniższej według podsumowania podręcznika.",
    "options": null,
    "items": [
      "urzędnicy",
      "chłopi",
      "faraon",
      "wezyr",
      "kapłani",
      "niewolnicy",
      "rzemieślnicy",
      "żołnierze"
    ],
    "answer": [
      "faraon",
      "wezyr",
      "kapłani",
      "urzędnicy",
      "rzemieślnicy",
      "żołnierze",
      "chłopi",
      "niewolnicy"
    ],
    "image": "/img/r01_piramida_spoleczna_egiptu.jpg",
    "explanation": "Podręcznik przedstawia społeczeństwo jako piramidę: faraon, wezyr, kapłani, urzędnicy, rzemieślnicy, żołnierze, chłopi, niewolnicy."
  },
  {
    "id": "R01_EGI_08",
    "section": "Egipt",
    "type": "single_choice",
    "prompt": "Jak Grecy nazwali pismo egipskie?",
    "options": [
      "hieroglify",
      "pismo klinowe",
      "alfabet łaciński",
      "runy",
      "pismo obrazkowe chińskie",
      "cyrylica"
    ],
    "answer": 0,
    "image": "/img/r01_hieroglify_papirus.jpg",
    "explanation": "Grecy nazwali je hieroglifami, czyli świętymi znakami."
  },
  {
    "id": "R01_EGI_09",
    "section": "Egipt",
    "type": "multi_select",
    "prompt": "Na czym lub w jaki sposób pisali Egipcjanie według rozdziału?",
    "options": [
      "wykuwali hieroglify w skałach i na ścianach",
      "pisali pędzelkiem na papirusie",
      "używali uproszczonego pisma kapłańskiego na co dzień",
      "pisali wyłącznie na papierze z fabryki",
      "ryli znaki tylko na glinianych tabliczkach",
      "drukowali książki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Hieroglify wykuwano na kamieniu, a uproszczone pismo kapłańskie pisano pędzelkiem na papirusie."
  },
  {
    "id": "R01_EGI_10",
    "section": "Egipt",
    "type": "riddle",
    "prompt": "Ciało zmarłego zabezpieczone przed rozkładem to...",
    "options": null,
    "answer": "mumia",
    "altAnswers": [
      "mumia",
      "Mumia"
    ],
    "image": "/img/r01_mumia_i_grobowiec.jpg",
    "explanation": "Podręcznik wyjaśnia mumię przy opowieści o Ozyrysie i Anubisie."
  },
  {
    "id": "R01_EGI_11",
    "section": "Egipt",
    "type": "single_choice",
    "prompt": "Po co faraonowie budowali grobowce, czyli „domy wieczności”?",
    "options": [
      "aby ukazać potęgę i zabrać przedmioty na tamten świat",
      "aby przechowywać zboże chłopów",
      "aby ćwiczyć wojsko",
      "aby prowadzić handel z Chinami",
      "aby pisać pismo klinowe",
      "aby hodować kozy"
    ],
    "answer": 0,
    "image": "/img/r01_mumia_i_grobowiec.jpg",
    "explanation": "Grobowce miały ukazywać potęgę władcy i pomieścić przedmioty potrzebne mu na tamtym świecie."
  },
  {
    "id": "R01_EGI_12",
    "section": "Egipt",
    "type": "scenario",
    "prompt": "Archeolog znajduje w Egipcie materiał przypominający papier, wykonany z łodyg trzciny rosnącej nad Nilem. Co to jest?",
    "options": [
      "papirus",
      "brąz",
      "krzemień",
      "piryt",
      "glina",
      "wełna"
    ],
    "answer": 0,
    "explanation": "Egipcjanie wytwarzali papirus z łodyg trzciny papirusowej."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które lata obejmuje pierwsza połowa II wieku p.n.e. według podręcznika?",
    "options": [
      "200-151 p.n.e.",
      "150-101 p.n.e.",
      "101-150 n.e.",
      "151-200 n.e.",
      "100-1 p.n.e.",
      "1-100 n.e."
    ],
    "answer": 0,
    "explanation": "Przed naszą erą połowy wieków liczymy odwrotnie; pierwsza połowa II wieku p.n.e. to lata 200-151 p.n.e."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który rok według przykładów z podręcznika należy do VIII wieku p.n.e.?",
    "options": [
      "776 r. p.n.e.",
      "1370 r. n.e.",
      "1500 r.",
      "2000 r.",
      "64 r. n.e.",
      "1001 r. n.e."
    ],
    "answer": 0,
    "explanation": "Podręcznik pokazuje przykład: 776 rok p.n.e. to VIII wiek p.n.e."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "początek neolitu na Bliskim Wschodzie",
      "przybycie ludzi rozumnych do Europy",
      "początek ocieplania się klimatu",
      "pojawienie się człowieka rozumnego"
    ],
    "answer": [
      "pojawienie się człowieka rozumnego",
      "przybycie ludzi rozumnych do Europy",
      "początek ocieplania się klimatu",
      "początek neolitu na Bliskim Wschodzie"
    ],
    "explanation": "Najwcześniej pojawili się ludzie rozumni, potem przybyli do Europy, następnie rozpoczęło się ocieplanie klimatu i neolit na Bliskim Wschodzie."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia przypisane w podręczniku Sumerom jako pierwszym w dziejach.",
    "options": [
      "pismo około 3500 r. p.n.e.",
      "koło i pierwsze wozy",
      "szkło",
      "brąz około 2500 r. p.n.e.",
      "piramida Cheopsa",
      "papirus"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozdział wymienia sumeryjskie pismo, koło i pierwsze wozy, szkło oraz uzyskanie brązu."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co zakończyło młodszą epokę kamienia według fragmentu o Sumerach?",
    "options": [
      "uzyskanie brązu",
      "wynalezienie łuku",
      "udomowienie psa",
      "budowa jaskiń",
      "wylew Nilu",
      "powstanie papirusu"
    ],
    "answer": 0,
    "explanation": "Wynalazek brązu zakończył młodszą epokę kamienia."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pismo egipskie powstało około __________ r. p.n.e.",
    "options": null,
    "answer": [
      "3000"
    ],
    "altAnswers": [
      [
        "3000",
        "3000.",
        "ok. 3000",
        "około 3000"
      ]
    ],
    "explanation": "W rozdziale podano, że pismo egipskie powstało około 3000 r. p.n.e."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile znaków liczyło pismo hieroglificzne według podręcznika?",
    "options": [
      "około 80",
      "około 800",
      "około 8000",
      "około 20",
      "około 3500",
      "około 2300000"
    ],
    "answer": 1,
    "explanation": "Podręcznik podaje, że pismo hieroglificzne liczyło około 800 znaków."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która budowla została opisana jako najwyższa kamienna budowla na Ziemi, o wysokości 138 metrów?",
    "options": [
      "piramida Cheopsa",
      "Wielki Mur Chiński",
      "grobowiec Tutanchamona",
      "świątynia Ozyrysa",
      "pałac w Mohendżo Daro",
      "wieża z gliny w Mezopotamii"
    ],
    "answer": 0,
    "image": "/img/r01_piramida_cheopsa.jpg",
    "explanation": "Opis dotyczy piramidy Cheopsa, zbudowanej w XXVI wieku p.n.e."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Grobowiec Tutanchamona został odkryty w 1922 roku i nie był wcześniej obrabowany jak znane piramidy i grobowce.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że w 1922 roku archeolodzy odkryli grobowiec Tutanchamona pełen złota i kosztowności."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz liczbę lub datę z informacją z rozdziału.",
    "options": null,
    "left": [
      "4 miliardy 600 milionów lat",
      "450 milionów lat temu",
      "2 300 000 bloków",
      "III w. p.n.e."
    ],
    "right": [
      "wiek Ziemi podany w spirali dziejów",
      "pojawienie się pierwszych roślin lądowych",
      "liczba bloków użytych do budowy piramidy Cheopsa",
      "zjednoczenie Chin"
    ],
    "answer": {
      "4 miliardy 600 milionów lat": "wiek Ziemi podany w spirali dziejów",
      "450 milionów lat temu": "pojawienie się pierwszych roślin lądowych",
      "2 300 000 bloków": "liczba bloków użytych do budowy piramidy Cheopsa",
      "III w. p.n.e.": "zjednoczenie Chin"
    },
    "image": "/img/r01_piramida_cheopsa.jpg",
    "explanation": "Te szczegóły pojawiają się w różnych częściach rozdziału i wymagają precyzyjnego kojarzenia."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Ra, Ozyrys, Anubis, Eannatum.",
    "options": null,
    "answer": "Eannatum",
    "explanation": "Ra, Ozyrys i Anubis to bóstwa egipskie, a Eannatum był sumeryjskim królem wspomnianym przy płaskorzeźbie."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do kategorii: przyczyny, skutki albo przykłady osiągnięć.",
    "options": null,
    "items": [
      "ocieplenie klimatu",
      "żyzne wylewy Nilu",
      "osiadły tryb życia",
      "nadwyżka pożywienia",
      "pismo Sumerów",
      "hieroglify"
    ],
    "categories": [
      "przyczyny",
      "skutki",
      "osiągnięcia"
    ],
    "answer": {
      "przyczyny": [
        "ocieplenie klimatu",
        "żyzne wylewy Nilu"
      ],
      "skutki": [
        "osiadły tryb życia",
        "nadwyżka pożywienia"
      ],
      "osiągnięcia": [
        "pismo Sumerów",
        "hieroglify"
      ]
    },
    "explanation": "Ćwiczenie łączy informacje z całego rozdziału: warunki naturalne powodowały zmiany, a społeczeństwa tworzyły konkretne osiągnięcia."
  }
];

const KID_PROMPTS = {
  "R01_CZA_01": "Czym zajmuje się chronologia?",
  "R01_CZA_09": "Od czego zaczyna się historia?",
  "R01_PAL_03": "Jak żyli ludzie w paleolicie?",
  "R01_PAL_09": "Jak rozpalano ogień w paleolicie?",
  "R01_NEO_02": "Jak nazywa się przejście do rolnictwa?",
  "R01_NEO_05": "Dlaczego rolnicy mieszkali stale w jednym miejscu?",
  "R01_CYW_01": "Co to jest cywilizacja?",
  "R01_CYW_07": "Jaki wynalazek Sumerów rozpoczął historię?",
  "R01_EGI_01": "Dlaczego Egipt nazwano darem Nilu?",
  "R01_EGI_04": "Jak nazywał się król Egiptu?",
  "R01_EGI_08": "Jak nazywało się pismo egipskie?",
  "R01_EGI_10": "Co to jest mumia?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Początki cywilizacji",
  icon: "🏺",
  sectionOrder: ["Czas i epoki", "Paleolit", "Neolit", "Pierwsze cywilizacje", "Egipt", "Super trudne"],
  sectionIcons: {"Czas i epoki": "⏳", "Paleolit": "🪨", "Neolit": "🌾", "Pierwsze cywilizacje": "🏛️", "Egipt": "🔺", "Super trudne": "🔥"},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
