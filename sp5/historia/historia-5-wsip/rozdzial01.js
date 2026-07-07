// Skróty sekcji:
//   NDC = Najdawniejsze dzieje człowieka
//   MEZ = Mezopotamia
//   EGI = Starożytny Egipt
//   IZR = Starożytny Izrael
//   IND = Starożytne Indie i Chiny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_NDC_01",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "single_choice",
    "prompt": "Na którym kontynencie pojawili się najstarsi przodkowie współczesnych ludzi?",
    "options": [
      "Afryka",
      "Europa",
      "Azja",
      "Australia",
      "Ameryka Północna",
      "Antarktyda"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że najstarsi przodkowie ludzi pojawili się w Afryce około 4 milionów lat temu."
  },
  {
    "id": "R01_NDC_02",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "true_false",
    "prompt": "Człowiek rozumny pojawił się w Afryce około 160-100 tysięcy lat temu.",
    "options": null,
    "answer": true,
    "explanation": "Człowiek rozumny, czyli gatunek współczesnych ludzi, pojawił się w Afryce około 160-100 tysięcy lat temu."
  },
  {
    "id": "R01_NDC_03",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "fill_in",
    "prompt": "Około __________ miliona lat temu człowiek zaczął samodzielnie wytwarzać __________ narzędzia.",
    "options": null,
    "answer": [
      "2,5",
      "kamienne"
    ],
    "altAnswers": [
      [
        "2,5",
        "2.5",
        "dwóch i pół"
      ],
      [
        "kamienne",
        "z kamienia"
      ]
    ],
    "explanation": "Wielka zmiana nastąpiła około 2,5 miliona lat temu, gdy ludzie zaczęli wytwarzać narzędzia z kamienia."
  },
  {
    "id": "R01_NDC_04",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby zdobywania pożywienia przez ludzi paleolitu.",
    "options": [
      "Zbieranie dziko rosnących owoców i nasion",
      "Polowanie na zwierzęta",
      "Uprawa pól z pszenicą",
      "Chwytanie mniejszych zwierząt",
      "Hodowla drobiu",
      "Wypiekanie placków z własnego zboża"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "image": "/img/r01_ludzie_w_jaskini.jpg",
    "explanation": "Paleolityczni ludzie utrzymywali się ze zbieractwa i łowiectwa, a rolnictwo pojawiło się dopiero w neolicie."
  },
  {
    "id": "R01_NDC_05",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pięściak, grot włóczni, gliniane naczynie, prymitywny nóż.",
    "options": null,
    "answer": "gliniane naczynie",
    "explanation": "Pięściaki, groty i prymitywne noże należą do narzędzi kamiennych paleolitu, a lepienie naczyń z gliny rozwinęło się później w neolicie."
  },
  {
    "id": "R01_NDC_06",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "scenario",
    "prompt": "Grupa łowców i zbieraczy po pewnym czasie nie znajduje już w okolicy wystarczająco dużo pożywienia. Przenosi obozowisko na inne tereny i mieszka w jaskiniach lub szałasach. Jak nazywamy taki tryb życia?",
    "options": [
      "Koczowniczy",
      "Osiadły",
      "Miejski",
      "Państwowy",
      "Rzemieślniczy",
      "Kupiecki"
    ],
    "answer": 0,
    "image": "/img/r01_obozowisko_lowcow.jpg",
    "explanation": "Wędrowny, czyli koczowniczy tryb życia wynikał z konieczności szukania nowych terenów łowieckich i zbierackich."
  },
  {
    "id": "R01_NDC_07",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "match",
    "prompt": "Połącz epokę lub pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "Paleolit",
      "Neolit",
      "Epoka brązu",
      "Rewolucja neolityczna"
    ],
    "right": [
      "starsza epoka kamienia i życie koczownicze",
      "młodsza epoka kamienia i rozwój rolnictwa",
      "czas upowszechniania narzędzi ze stopu miedzi i cyny",
      "przejście od łowiectwa i zbieractwa do rolnictwa"
    ],
    "answer": {
      "Paleolit": "starsza epoka kamienia i życie koczownicze",
      "Neolit": "młodsza epoka kamienia i rozwój rolnictwa",
      "Epoka brązu": "czas upowszechniania narzędzi ze stopu miedzi i cyny",
      "Rewolucja neolityczna": "przejście od łowiectwa i zbieractwa do rolnictwa"
    },
    "explanation": "Paleolit wiąże się z koczownictwem, neolit z rolnictwem, a epoka brązu z użyciem stopu miedzi i cyny."
  },
  {
    "id": "R01_NDC_08",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie rewolucji neolitycznej?",
    "options": [
      "Przejście od gospodarki łowiecko-zbierackiej do rolniczej i od koczownictwa do osiadłości",
      "Wynalezienie pisma klinowego w Mezopotamii",
      "Zbudowanie pierwszych piramid w Egipcie",
      "Podbicie Palestyny przez Babilonię",
      "Powstanie Jedwabnego Szlaku",
      "Zjednoczenie Chin przez pierwszego cesarza"
    ],
    "answer": 0,
    "image": "/img/r01_osada_neolityczna.jpg",
    "explanation": "Rewolucja neolityczna była powolnym procesem przechodzenia do rolnictwa i osiadłego trybu życia."
  },
  {
    "id": "R01_NDC_09",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "multi_select",
    "prompt": "Które rośliny mieszkańcy Żyznego Półksiężyca zaczęli uprawiać w neolicie?",
    "options": [
      "Pszenica",
      "Jęczmień",
      "Soczewica",
      "Len",
      "Kukurydza",
      "Ziemniaki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_zyzny_polksiezyc_uprawy.jpg",
    "explanation": "W podręczniku wymieniono m.in. pszenicę, jęczmień, proso, soczewicę, groch, len i drzewa owocowe."
  },
  {
    "id": "R01_NDC_10",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj cechy życia ludzi do paleolitu albo neolitu.",
    "options": null,
    "items": [
      "koczownicze obozowiska",
      "łowiectwo i zbieractwo",
      "stałe osady przy polach",
      "uprawa roślin",
      "hodowla zwierząt",
      "mieszkanie w jaskiniach i szałasach"
    ],
    "categories": [
      "Paleolit",
      "Neolit"
    ],
    "answer": {
      "Paleolit": [
        "koczownicze obozowiska",
        "łowiectwo i zbieractwo",
        "mieszkanie w jaskiniach i szałasach"
      ],
      "Neolit": [
        "stałe osady przy polach",
        "uprawa roślin",
        "hodowla zwierząt"
      ]
    },
    "image": "/img/r01_osada_neolityczna.jpg",
    "explanation": "Paleolit to życie wędrowne łowców i zbieraczy, a neolit to osiadłe społeczności rolników i hodowców."
  },
  {
    "id": "R01_NDC_11",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "riddle",
    "prompt": "Stop miedzi i cyny, twardszy od czystej miedzi, to...",
    "options": null,
    "answer": "brąz",
    "altAnswers": [
      "brąz",
      "braz"
    ],
    "explanation": "Brąz jest stopem miedzi i cyny, który lepiej od kamienia nadawał się do wyrobu narzędzi i przedmiotów codziennego użytku."
  },
  {
    "id": "R01_NDC_12",
    "section": "Najdawniejsze dzieje człowieka",
    "type": "sequence",
    "prompt": "Ułóż etapy pradziejów w kolejności chronologicznej.",
    "options": null,
    "items": [
      "początek epoki brązu",
      "pojawienie się człowieka rozumnego",
      "początek paleolitu",
      "początek neolitu",
      "początek epoki żelaza"
    ],
    "answer": [
      "początek paleolitu",
      "pojawienie się człowieka rozumnego",
      "początek neolitu",
      "początek epoki brązu",
      "początek epoki żelaza"
    ],
    "explanation": "Najpierw rozpoczął się paleolit, potem pojawił się człowiek rozumny, następnie neolit, epoka brązu i epoka żelaza."
  },
  {
    "id": "R01_MEZ_01",
    "section": "Mezopotamia",
    "type": "single_choice",
    "prompt": "Między którymi rzekami leżała Mezopotamia?",
    "options": [
      "Eufratem i Tygrysem",
      "Nilem i Jordanem",
      "Indusem i Gangesem",
      "Huang He i Jangcy",
      "Wisłą i Odrą",
      "Brahmaputrą i Nilem"
    ],
    "answer": 0,
    "image": "/img/r01_mezopotamia_miedzy_rzekami.jpg",
    "explanation": "Nazwa Mezopotamia oznacza międzyrzecze, czyli krainę między Eufratem a Tygrysem."
  },
  {
    "id": "R01_MEZ_02",
    "section": "Mezopotamia",
    "type": "true_false",
    "prompt": "Wylewy Eufratu i Tygrysu zawsze były regularne i bezpieczne dla mieszkańców Mezopotamii.",
    "options": null,
    "answer": false,
    "explanation": "Wylewy tych rzek bywały nieregularne i gwałtowne, dlatego mieszkańcy budowali kanały, zbiorniki i wały."
  },
  {
    "id": "R01_MEZ_03",
    "section": "Mezopotamia",
    "type": "fill_in",
    "prompt": "Najstarszy znany lud Mezopotamii to __________, a najstarsze państwa tej krainy nazywamy __________.",
    "options": null,
    "answer": [
      "Sumerowie",
      "miastami-państwami"
    ],
    "altAnswers": [
      [
        "Sumerowie",
        "Sumerowie."
      ],
      [
        "miastami-państwami",
        "miasta-państwa",
        "miastami panstwami",
        "miasta panstwa"
      ]
    ],
    "explanation": "Sumerowie zakładali miasta, które wraz z okolicą tworzyły niewielkie miasta-państwa."
  },
  {
    "id": "R01_MEZ_04",
    "section": "Mezopotamia",
    "type": "multi_select",
    "prompt": "Zaznacz działania, dzięki którym rolnicy w Mezopotamii panowali nad wodą.",
    "options": [
      "Kopanie kanałów nawadniających",
      "Budowanie zbiorników wodnych",
      "Usypywanie wałów",
      "Czyszczenie i naprawianie sieci kanałów",
      "Mumifikowanie zwłok",
      "Hodowla jedwabników"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_kanaly_nawadniajace.jpg",
    "explanation": "Kanały, zbiorniki i wały pozwalały doprowadzać wodę do pól oraz chronić uprawy przed zbyt dużymi wylewami."
  },
  {
    "id": "R01_MEZ_05",
    "section": "Mezopotamia",
    "type": "riddle",
    "prompt": "Mezopotamska budowla świątynna wznosząca się tarasami ku górze to...",
    "options": null,
    "answer": "ziggurat",
    "altAnswers": [
      "ziggurat",
      "zikkurat"
    ],
    "image": "/img/r01_ziggurat_tarasy.jpg",
    "explanation": "Ziggurat był budowlą świątynną, na której najwyższym tarasie znajdowała się świątynia bóstwa."
  },
  {
    "id": "R01_MEZ_06",
    "section": "Mezopotamia",
    "type": "scenario",
    "prompt": "Kupiec z miasta-państwa zapisuje na glinianej tabliczce informacje o towarach. Używa trzcinowego rylca, a znaki mają kształt klinów. Jak nazywa się ten rodzaj pisma?",
    "options": [
      "Pismo klinowe",
      "Hieroglify",
      "Alfabet łaciński",
      "Pismo chińskie",
      "Pismo runiczne",
      "Pismo obrazkowe Indusu"
    ],
    "answer": 0,
    "image": "/img/r01_tabliczka_pismo_klinowe.jpg",
    "explanation": "W Mezopotamii pismo obrazkowe stopniowo uproszczono do znaków klinowych zapisywanych na glinianych tabliczkach."
  },
  {
    "id": "R01_MEZ_07",
    "section": "Mezopotamia",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym objaśnieniem.",
    "options": null,
    "left": [
      "Politeizm",
      "Miasto-państwo",
      "Pismo klinowe",
      "Cywilizacja"
    ],
    "right": [
      "wiara w wielu bogów",
      "miasto z najbliższą okolicą podległe jednemu władcy",
      "znaki w kształcie klinów zapisywane na glinianych tabliczkach",
      "poziom rozwoju związany z miastami, państwem i pismem"
    ],
    "answer": {
      "Politeizm": "wiara w wielu bogów",
      "Miasto-państwo": "miasto z najbliższą okolicą podległe jednemu władcy",
      "Pismo klinowe": "znaki w kształcie klinów zapisywane na glinianych tabliczkach",
      "Cywilizacja": "poziom rozwoju związany z miastami, państwem i pismem"
    },
    "explanation": "Te pojęcia opisują najważniejsze cechy społeczeństwa i kultury Mezopotamii."
  },
  {
    "id": "R01_MEZ_08",
    "section": "Mezopotamia",
    "type": "single_choice",
    "prompt": "Który władca Babilonii zasłynął jako zdobywca i prawodawca?",
    "options": [
      "Hammurabi",
      "Cheops",
      "Salomon",
      "Dawid",
      "Szy Huang-ti",
      "Abraham"
    ],
    "answer": 0,
    "image": "/img/r01_slupek_praw_mezopotamia.jpg",
    "explanation": "Hammurabi opanował w XVIII wieku p.n.e. niemal całą Mezopotamię i nakazał spisać prawa Babilonii."
  },
  {
    "id": "R01_MEZ_09",
    "section": "Mezopotamia",
    "type": "true_false",
    "prompt": "W podręczniku przyjęto, że pojawienie się pisma zakończyło prehistorię i rozpoczęło czasy historyczne.",
    "options": null,
    "answer": true,
    "explanation": "Pismo pozwoliło utrwalać informacje, dlatego wraz z jego pojawieniem się rozpoczyna się starożytność."
  },
  {
    "id": "R01_MEZ_10",
    "section": "Mezopotamia",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia ludów starożytnej Mezopotamii wymienione w podręczniku.",
    "options": [
      "Wynalezienie pisma",
      "Wynalezienie koła",
      "Opracowanie kalendarza",
      "Budowa systemów nawadniających",
      "Produkcja papieru",
      "Mumifikowanie faraonów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_wynalazki_mezopotamii.jpg",
    "explanation": "Do osiągnięć Mezopotamii należały m.in. pismo, koło, kalendarz, systemy nawadniające oraz wkład w matematykę i astronomię."
  },
  {
    "id": "R01_MEZ_11",
    "section": "Mezopotamia",
    "type": "fill_in",
    "prompt": "Mezopotamscy uczeni opracowali system liczbowy oparty na liczbie __________; do dziś używamy go np. przy minutach i miarach kątów.",
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
    "explanation": "System sześćdziesiątkowy widać do dziś w podziale godziny na 60 minut oraz w mierzeniu kątów."
  },
  {
    "id": "R01_MEZ_12",
    "section": "Mezopotamia",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Eufrat, Tygrys, Nil, Babilon.",
    "options": null,
    "answer": "Nil",
    "explanation": "Eufrat, Tygrys i Babilon są związane z Mezopotamią, natomiast Nil jest rzeką starożytnego Egiptu."
  },
  {
    "id": "R01_EGI_01",
    "section": "Starożytny Egipt",
    "type": "single_choice",
    "prompt": "Nad którą rzeką ukształtowała się cywilizacja starożytnego Egiptu?",
    "options": [
      "Nilem",
      "Eufratem",
      "Tygrysem",
      "Jordanem",
      "Indusem",
      "Huang He"
    ],
    "answer": 0,
    "explanation": "Egipt powstał w dolinie i delcie Nilu, gdzie coroczne wylewy użyźniały ziemię."
  },
  {
    "id": "R01_EGI_02",
    "section": "Starożytny Egipt",
    "type": "true_false",
    "prompt": "Około 3100 roku p.n.e. Dolny i Górny Egipt zostały zjednoczone pod władzą jednego króla.",
    "options": null,
    "answer": true,
    "image": "/img/r01_mapa_egiptu_nil_delta.jpg",
    "explanation": "Podręcznik podaje, że około 3100 roku p.n.e. dwa królestwa Egiptu połączono pod władzą jednego króla."
  },
  {
    "id": "R01_EGI_03",
    "section": "Starożytny Egipt",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje faraona w starożytnym Egipcie.",
    "options": [
      "Najwyższy kapłan",
      "Główny wódz wojsk",
      "Najwyższy sędzia",
      "Stanowienie praw",
      "Kupiec przewożący jedwab",
      "Wódz wyprowadzający Żydów z Egiptu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_spoleczenstwo_egiptu_piramida.jpg",
    "explanation": "Faraon miał nieograniczoną władzę: był najwyższym kapłanem, wodzem, prawodawcą i sędzią."
  },
  {
    "id": "R01_EGI_04",
    "section": "Starożytny Egipt",
    "type": "fill_in",
    "prompt": "Formę rządów, w której władca ma nieograniczone uprawnienia i jest uważany za boga lub osobę związaną z bogami, nazywamy __________.",
    "options": null,
    "answer": [
      "monarchią despotyczną"
    ],
    "altAnswers": [
      [
        "monarchią despotyczną",
        "monarchia despotyczna",
        "monarchia despotyczną",
        "monarchia despotyczna"
      ]
    ],
    "explanation": "Władza faraona w Egipcie była przykładem monarchii despotycznej."
  },
  {
    "id": "R01_EGI_05",
    "section": "Starożytny Egipt",
    "type": "match",
    "prompt": "Połącz grupę społeczną Egiptu z jej rolą.",
    "options": null,
    "left": [
      "Faraon",
      "Urzędnicy",
      "Kapłani",
      "Chłopi"
    ],
    "right": [
      "sprawował nieograniczoną władzę",
      "zarządzali kanałami, daninami i pracami budowlanymi",
      "prowadzili obrzędy religijne i zajmowali się nauką",
      "uprawiali ziemię i oddawali część plonów"
    ],
    "answer": {
      "Faraon": "sprawował nieograniczoną władzę",
      "Urzędnicy": "zarządzali kanałami, daninami i pracami budowlanymi",
      "Kapłani": "prowadzili obrzędy religijne i zajmowali się nauką",
      "Chłopi": "uprawiali ziemię i oddawali część plonów"
    },
    "image": "/img/r01_spoleczenstwo_egiptu_piramida.jpg",
    "explanation": "Egipskie społeczeństwo miało hierarchiczną strukturę, z faraonem na szczycie i chłopami jako najliczniejszą grupą."
  },
  {
    "id": "R01_EGI_06",
    "section": "Starożytny Egipt",
    "type": "riddle",
    "prompt": "Materiał pisarski wytwarzany z łodyg cibory rosnącej nad Nilem to...",
    "options": null,
    "answer": "papirus",
    "altAnswers": [
      "papirus",
      "papirusu"
    ],
    "image": "/img/r01_papirus_hieroglify.jpg",
    "explanation": "Egipcjanie wyrabiali papirus z łodyg cibory papirusowej i zapisywali na nim teksty."
  },
  {
    "id": "R01_EGI_07",
    "section": "Starożytny Egipt",
    "type": "single_choice",
    "prompt": "Jak nazywało się uroczyste pismo starożytnych Egipcjan pokazane w podręczniku?",
    "options": [
      "Hieroglify",
      "Pismo klinowe",
      "Alfabet łaciński",
      "Runy",
      "Pismo aramejskie",
      "Wedy"
    ],
    "answer": 0,
    "image": "/img/r01_papirus_hieroglify.jpg",
    "explanation": "Uroczyste pismo egipskie nosi nazwę hieroglifów."
  },
  {
    "id": "R01_EGI_08",
    "section": "Starożytny Egipt",
    "type": "scenario",
    "prompt": "Kapłani usuwają wnętrzności, osuszają ciało zmarłego, owijają je bandażami i składają do sarkofagu. Jaki obrzęd wykonują?",
    "options": [
      "Mumifikację",
      "Koronację",
      "Budowę zigguratu",
      "Spisywanie kodeksu",
      "Hodowlę jedwabników",
      "Wyprawę do Ziemi Obiecanej"
    ],
    "answer": 0,
    "image": "/img/r01_mumifikacja_sarkofag.jpg",
    "explanation": "Mumifikacja miała zachować ciało, bo Egipcjanie wierzyli, że dusza potrzebuje go po śmierci."
  },
  {
    "id": "R01_EGI_09",
    "section": "Starożytny Egipt",
    "type": "true_false",
    "prompt": "Starożytni Egipcjanie wyznawali politeizm, czyli czcili wielu bogów.",
    "options": null,
    "answer": true,
    "explanation": "Egipcjanie czcili wielu bogów, m.in. Re, Ozyrysa, Izydę, Thota i Hathor."
  },
  {
    "id": "R01_EGI_10",
    "section": "Starożytny Egipt",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia starożytnych Egipcjan wymienione w podręczniku.",
    "options": [
      "Rozwój medycyny",
      "Obliczanie powierzchni i objętości figur",
      "Obserwacje astronomiczne",
      "Mumifikowanie zwłok",
      "Wynalezienie koła",
      "Produkcja jedwabiu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_piramida_budowa.jpg",
    "explanation": "Egipcjanie rozwijali medycynę, matematykę i astronomię, a z wierzeniami pośmiertnymi wiązała się mumifikacja i budowa grobowców."
  },
  {
    "id": "R01_EGI_11",
    "section": "Starożytny Egipt",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Re, Ozyrys, Izyda, Marduk, Thot.",
    "options": null,
    "answer": "Marduk",
    "explanation": "Re, Ozyrys, Izyda i Thot to bogowie egipscy, a Marduk był bóstwem opiekuńczym Babilonu."
  },
  {
    "id": "R01_EGI_12",
    "section": "Starożytny Egipt",
    "type": "sequence",
    "prompt": "Ułóż etapy rocznego cyklu rolniczego nad Nilem w kolejności opisanej w podręczniku.",
    "options": null,
    "items": [
      "wiosenne zbiory",
      "letni przybór i wylew Nilu",
      "wzrost roślin podczas ciepłej zimy",
      "opadanie wód i pozostawienie żyznego mułu",
      "siew na nawodnionej glebie"
    ],
    "answer": [
      "letni przybór i wylew Nilu",
      "opadanie wód i pozostawienie żyznego mułu",
      "siew na nawodnionej glebie",
      "wzrost roślin podczas ciepłej zimy",
      "wiosenne zbiory"
    ],
    "explanation": "Nil wzbierał latem, potem zostawiał żyzny muł, po siewie rośliny rosły zimą, a plony zbierano wiosną."
  },
  {
    "id": "R01_IZR_01",
    "section": "Starożytny Izrael",
    "type": "single_choice",
    "prompt": "Jak inaczej nazywano Żydów w czasach starożytnych?",
    "options": [
      "Hebrajczykami i Izraelitami",
      "Sumerami i Babilończykami",
      "Ariami i Maurjami",
      "Egipcjanami i Nubijczykami",
      "Chińczykami i jedwabnikami",
      "Kapłanami i urzędnikami"
    ],
    "answer": 0,
    "explanation": "W podręczniku podano, że Żydów nazywano wówczas Hebrajczykami, a później także Izraelitami."
  },
  {
    "id": "R01_IZR_02",
    "section": "Starożytny Izrael",
    "type": "true_false",
    "prompt": "Judaizm jest w podręczniku określony jako najstarsza religia monoteistyczna.",
    "options": null,
    "answer": true,
    "explanation": "Religia żydowska, czyli judaizm, wyróżniała się wiarą w jednego Boga i została nazwana najstarszą religią monoteistyczną."
  },
  {
    "id": "R01_IZR_03",
    "section": "Starożytny Izrael",
    "type": "fill_in",
    "prompt": "Żydzi nazywali jedynego Boga imieniem __________, a Palestynę uważali za swoją __________.",
    "options": null,
    "answer": [
      "Jahwe",
      "Ziemię Obiecaną"
    ],
    "altAnswers": [
      [
        "Jahwe",
        "Jahwe."
      ],
      [
        "Ziemię Obiecaną",
        "Ziemia Obiecana",
        "Ziemie Obiecana",
        "Ziemię Obiecana"
      ]
    ],
    "explanation": "Izraelici wierzyli, że Jahwe zawarł z nimi przymierze i obiecał im Palestynę jako Ziemię Obiecaną."
  },
  {
    "id": "R01_IZR_04",
    "section": "Starożytny Izrael",
    "type": "multi_select",
    "prompt": "Zaznacz zasady i cechy religii starożytnego Izraela opisane w podręczniku.",
    "options": [
      "Wiara w jednego Boga",
      "Przestrzeganie Dziesięciu Przykazań",
      "Zakaz sporządzania wizerunków ludzi i zwierząt",
      "Zakaz spożywania mięsa wieprzowego",
      "Oddawanie czci wielu bóstwom opiekuńczym",
      "Mumifikowanie faraonów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Judaizm opierał się na monoteizmie, przymierzu, przykazaniach oraz szczegółowych nakazach i zakazach religijnych."
  },
  {
    "id": "R01_IZR_05",
    "section": "Starożytny Izrael",
    "type": "riddle",
    "prompt": "Zbiór świętych ksiąg judaizmu i chrześcijaństwa to...",
    "options": null,
    "answer": "Biblia",
    "altAnswers": [
      "Biblia",
      "Pismo Święte",
      "Pismo Swiete",
      "biblia"
    ],
    "image": "/img/r01_zwoj_tory.jpg",
    "explanation": "Biblia jest zbiorem świętych ksiąg religii żydowskiej i chrześcijaństwa, a jej starsza część to Biblia hebrajska."
  },
  {
    "id": "R01_IZR_06",
    "section": "Starożytny Izrael",
    "type": "match",
    "prompt": "Połącz postać z jej rolą w dziejach Izraela według podręcznika.",
    "options": null,
    "left": [
      "Abraham",
      "Mojżesz",
      "Dawid",
      "Salomon"
    ],
    "right": [
      "przyprowadził Hebrajczyków do Ziemi Obiecanej",
      "wyprowadził Izraelitów z Egiptu i otrzymał Dziesięć Przykazań",
      "uczynił Jerozolimę stolicą i centrum religijnym",
      "kazał wznieść świątynię Jahwe w Jerozolimie"
    ],
    "answer": {
      "Abraham": "przyprowadził Hebrajczyków do Ziemi Obiecanej",
      "Mojżesz": "wyprowadził Izraelitów z Egiptu i otrzymał Dziesięć Przykazań",
      "Dawid": "uczynił Jerozolimę stolicą i centrum religijnym",
      "Salomon": "kazał wznieść świątynię Jahwe w Jerozolimie"
    },
    "explanation": "Abraham, Mojżesz, Dawid i Salomon to najważniejsze postacie biblijnych dziejów Izraela wymienione w rozdziale."
  },
  {
    "id": "R01_IZR_07",
    "section": "Starożytny Izrael",
    "type": "scenario",
    "prompt": "Izraelici opuszczają Egipt i wędrują do Ziemi Obiecanej. Według Biblii ich przywódca otrzymuje na górze Synaj Dziesięć Przykazań. O kim mowa?",
    "options": [
      "Mojżesz",
      "Abraham",
      "Dawid",
      "Salomon",
      "Hammurabi",
      "Cheops"
    ],
    "answer": 0,
    "image": "/img/r01_tablice_przykazan_synaj.jpg",
    "explanation": "Według Biblii Mojżesz wyprowadził Izraelitów z Egiptu i otrzymał od Boga Dziesięć Przykazań."
  },
  {
    "id": "R01_IZR_08",
    "section": "Starożytny Izrael",
    "type": "single_choice",
    "prompt": "Które miasto stało się za panowania Dawida stolicą i centrum religijnym Izraela?",
    "options": [
      "Jerozolima",
      "Babilon",
      "Memfis",
      "Ur",
      "Niniwa",
      "Mohendżo Daro"
    ],
    "answer": 0,
    "explanation": "Za panowania Dawida stolicą i centrum religijnym Izraela stała się Jerozolima."
  },
  {
    "id": "R01_IZR_09",
    "section": "Starożytny Izrael",
    "type": "true_false",
    "prompt": "Salomon polecił wznieść w Jerozolimie świątynię Jahwe.",
    "options": null,
    "answer": true,
    "image": "/img/r01_swiatynia_salomona_przekroj.jpg",
    "explanation": "Salomon kazał zbudować w Jerozolimie świątynię, w której składano ofiary Jahwe."
  },
  {
    "id": "R01_IZR_10",
    "section": "Starożytny Izrael",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Abraham, Mojżesz, Cheops, Salomon.",
    "options": null,
    "answer": "Cheops",
    "explanation": "Abraham, Mojżesz i Salomon są związani z dziejami Izraela, a Cheops był faraonem egipskim."
  },
  {
    "id": "R01_IZR_11",
    "section": "Starożytny Izrael",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do judaizmu albo do religii politeistycznych Egiptu i Mezopotamii.",
    "options": null,
    "items": [
      "wiara w jednego Boga",
      "wielu bogów",
      "zakaz sporządzania wizerunków ludzi i zwierząt",
      "bóstwa opiekuńcze miast",
      "Dziesięć Przykazań",
      "świątynie jako domy wielu bóstw"
    ],
    "categories": [
      "Judaizm",
      "Religie politeistyczne"
    ],
    "answer": {
      "Judaizm": [
        "wiara w jednego Boga",
        "zakaz sporządzania wizerunków ludzi i zwierząt",
        "Dziesięć Przykazań"
      ],
      "Religie politeistyczne": [
        "wielu bogów",
        "bóstwa opiekuńcze miast",
        "świątynie jako domy wielu bóstw"
      ]
    },
    "explanation": "Judaizm wyróżniał się monoteizmem, a religie Egiptu i Mezopotamii były politeistyczne."
  },
  {
    "id": "R01_IZR_12",
    "section": "Starożytny Izrael",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów Izraela w kolejności chronologicznej według rozdziału.",
    "options": null,
    "items": [
      "niewola babilońska",
      "wyjście Izraelitów z Egiptu pod wodzą Mojżesza",
      "przybycie Abrahama do Ziemi Obiecanej",
      "panowanie Dawida i Salomona",
      "rozpad królestwa po śmierci Salomona"
    ],
    "answer": [
      "przybycie Abrahama do Ziemi Obiecanej",
      "wyjście Izraelitów z Egiptu pod wodzą Mojżesza",
      "panowanie Dawida i Salomona",
      "rozpad królestwa po śmierci Salomona",
      "niewola babilońska"
    ],
    "explanation": "Według narracji rozdziału po Abrahamie nastąpił pobyt i wyjście z Egiptu, potem królestwo Dawida i Salomona, rozpad państwa i niewola babilońska."
  },
  {
    "id": "R01_IND_01",
    "section": "Starożytne Indie i Chiny",
    "type": "single_choice",
    "prompt": "Gdzie powstawały najstarsze cywilizacje Indii i Chin?",
    "options": [
      "Nad wielkimi rzekami",
      "W głębi pustyń",
      "Na lodowcach",
      "Na wyspach Morza Śródziemnego",
      "W europejskich lasach",
      "Wyłącznie w górach"
    ],
    "answer": 0,
    "explanation": "Podręcznik podkreśla, że cywilizacje Indii i Chin rozwinęły się w żyznych dolinach wielkich rzek."
  },
  {
    "id": "R01_IND_02",
    "section": "Starożytne Indie i Chiny",
    "type": "multi_select",
    "prompt": "Zaznacz rzeki, nad którymi rozwinęły się starożytne cywilizacje Indii.",
    "options": [
      "Indus",
      "Ganges",
      "Brahmaputra",
      "Nil",
      "Tygrys",
      "Huang He"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Cywilizacje Indii ukształtowały się nad Indusem, Gangesem i Brahmaputrą."
  },
  {
    "id": "R01_IND_03",
    "section": "Starożytne Indie i Chiny",
    "type": "true_false",
    "prompt": "Najstarsza cywilizacja Indii narodziła się około 2400 lat p.n.e. w dolinie Indusu.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale wskazano, że najstarsza cywilizacja Indii powstała około 2400 lat p.n.e. w dolinie Indusu."
  },
  {
    "id": "R01_IND_04",
    "section": "Starożytne Indie i Chiny",
    "type": "fill_in",
    "prompt": "Dwa wielkie, precyzyjnie rozplanowane miasta cywilizacji doliny Indusu to __________ i __________.",
    "options": null,
    "answer": [
      "Mohendżo Daro",
      "Harappa"
    ],
    "altAnswers": [
      [
        "Mohendżo Daro",
        "Mohendzo Daro",
        "Mohenjo-Daro",
        "Mohenjo Daro"
      ],
      [
        "Harappa",
        "Harappę",
        "Harappe"
      ]
    ],
    "image": "/img/r01_mohendzo_daro_miasto.jpg",
    "explanation": "Najważniejszymi miastami cywilizacji doliny Indusu były Mohendżo Daro i Harappa."
  },
  {
    "id": "R01_IND_05",
    "section": "Starożytne Indie i Chiny",
    "type": "multi_select",
    "prompt": "Zaznacz cechy Mohendżo Daro i Harappy opisane w podręczniku.",
    "options": [
      "Szerokie, równe ulice przecinające się pod kątem prostym",
      "Piętrowe domy z wypalanej cegły",
      "Studnie i pokoje kąpielowe",
      "Sieć kanalizacyjna",
      "Piramidy faraonów",
      "Zigguraty z tarasami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_mohendzo_daro_miasto.jpg",
    "explanation": "Miasta doliny Indusu miały uporządkowany układ ulic, domy z wypalanej cegły oraz rozwiązania związane z wodą i kanalizacją."
  },
  {
    "id": "R01_IND_06",
    "section": "Starożytne Indie i Chiny",
    "type": "riddle",
    "prompt": "Religijne teksty Ariów, których nazwa oznacza „wiedzę”, to...",
    "options": null,
    "answer": "Wedy",
    "altAnswers": [
      "Wedy",
      "wedy"
    ],
    "explanation": "Wedy były recytowanymi tekstami religijnymi Ariów, później spisanymi z użyciem nowego pisma."
  },
  {
    "id": "R01_IND_07",
    "section": "Starożytne Indie i Chiny",
    "type": "single_choice",
    "prompt": "Który lud około 1500 lat p.n.e. wtargnął do Indii z północnego zachodu?",
    "options": [
      "Ariowie",
      "Sumerowie",
      "Hebrajczycy",
      "Egipcjanie",
      "Babilończycy",
      "Chińczycy"
    ],
    "answer": 0,
    "explanation": "Około 1500 lat p.n.e. na obszar Indii wtargnęli Ariowie i zniszczyli resztki cywilizacji Indusu."
  },
  {
    "id": "R01_IND_08",
    "section": "Starożytne Indie i Chiny",
    "type": "true_false",
    "prompt": "Po najeździe Ariów Indie natychmiast stały się jednym wielkim państwem z siecią wielkich miast.",
    "options": null,
    "answer": false,
    "explanation": "Ariowie pozostali społeczeństwem wiejskim, a przez kolejne stulecia w Indiach istniało wiele niezależnych państewek."
  },
  {
    "id": "R01_IND_09",
    "section": "Starożytne Indie i Chiny",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym objaśnieniem.",
    "options": null,
    "left": [
      "Wedy",
      "Mahabharata",
      "Ramajana",
      "Hinduizm"
    ],
    "right": [
      "starożytne teksty religijne Ariów",
      "wielki poemat religijny Indii",
      "wielki poemat religijny Indii",
      "wierzenia religijne wywodzące się z dawnych Indii"
    ],
    "answer": {
      "Wedy": "starożytne teksty religijne Ariów",
      "Mahabharata": "wielki poemat religijny Indii",
      "Ramajana": "wielki poemat religijny Indii",
      "Hinduizm": "wierzenia religijne wywodzące się z dawnych Indii"
    },
    "explanation": "Wedy, Mahabharata i Ramajana odgrywają ważną rolę w hinduizmie."
  },
  {
    "id": "R01_IND_10",
    "section": "Starożytne Indie i Chiny",
    "type": "single_choice",
    "prompt": "Nad którymi rzekami powstała starożytna cywilizacja chińska?",
    "options": [
      "Huang He i Jangcy",
      "Nil i Jordan",
      "Eufrat i Tygrys",
      "Indus i Ganges",
      "Brahmaputra i Nil",
      "Jordan i Eufrat"
    ],
    "answer": 0,
    "explanation": "Cywilizacja chińska rozwinęła się nad Huang He, czyli Żółtą Rzeką, oraz Jangcy, czyli Niebieską Rzeką."
  },
  {
    "id": "R01_IND_11",
    "section": "Starożytne Indie i Chiny",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia starożytnych Chin wymienione w podręczniku.",
    "options": [
      "Wytwarzanie papieru",
      "Produkcja jedwabiu",
      "Skomplikowany system pisma",
      "Budowa miast i pałaców",
      "Mumifikowanie faraonów",
      "Kodeks Hammurabiego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_produkcja_jedwabiu.jpg",
    "explanation": "Starożytni Chińczycy rozwinęli pismo, budowali miasta i pałace oraz wynaleźli papier i produkcję jedwabiu."
  },
  {
    "id": "R01_IND_12",
    "section": "Starożytne Indie i Chiny",
    "type": "scenario",
    "prompt": "Kupiec wiezie z Chin delikatną, drogą tkaninę z kokonów jedwabników. Jego droga prowadzi przez tysiące kilometrów aż ku zachodnim krainom. Jak nazywano tę trasę handlową?",
    "options": [
      "Jedwabny Szlak",
      "Droga Mojżesza",
      "Szlak Nilu",
      "Droga do Harappy",
      "Kanał Eufratu",
      "Ścieżka faraonów"
    ],
    "answer": 0,
    "image": "/img/r01_jedwabny_szlak_karawana.jpg",
    "explanation": "Jedwabny Szlak służył kupcom przewożącym jedwab z Chin na zachód, nawet do Europy."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i procesy w kolejności chronologicznej.",
    "options": null,
    "items": [
      "powstanie cywilizacji doliny Indusu",
      "początek rewolucji neolitycznej",
      "narodziny cywilizacji w Mezopotamii",
      "zjednoczenie ziem egipskich",
      "powstanie pierwszego państwa w Chinach",
      "panowanie Dawida i Salomona"
    ],
    "answer": [
      "początek rewolucji neolitycznej",
      "narodziny cywilizacji w Mezopotamii",
      "zjednoczenie ziem egipskich",
      "powstanie cywilizacji doliny Indusu",
      "powstanie pierwszego państwa w Chinach",
      "panowanie Dawida i Salomona"
    ],
    "explanation": "Kolejność to około 10000 p.n.e., 3500 p.n.e., 3100 p.n.e., 2400 p.n.e., XVIII wiek p.n.e. i XI-X wiek p.n.e."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem lub początkiem epoki.",
    "options": null,
    "left": [
      "160-100 tys. lat temu",
      "około 3500 lat p.n.e.",
      "około 3100 lat p.n.e.",
      "około 2400 lat p.n.e.",
      "około 1200 lat p.n.e."
    ],
    "right": [
      "pojawienie się człowieka rozumnego",
      "narodziny cywilizacji w Mezopotamii i początek epoki brązu",
      "zjednoczenie Egiptu",
      "powstanie cywilizacji doliny Indusu",
      "początek epoki żelaza"
    ],
    "answer": {
      "160-100 tys. lat temu": "pojawienie się człowieka rozumnego",
      "około 3500 lat p.n.e.": "narodziny cywilizacji w Mezopotamii i początek epoki brązu",
      "około 3100 lat p.n.e.": "zjednoczenie Egiptu",
      "około 2400 lat p.n.e.": "powstanie cywilizacji doliny Indusu",
      "około 1200 lat p.n.e.": "początek epoki żelaza"
    },
    "explanation": "Daty pochodzą z osi czasu i podsumowań rozdziału."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wspólne starożytnych cywilizacji Mezopotamii, Egiptu, Indii i Chin wskazane w ćwiczeniu powtórzeniowym.",
    "options": [
      "Posługiwanie się pismem",
      "Zakładanie miast",
      "Uprawa ziemi",
      "Wytwarzanie jedwabiu",
      "Wykorzystywanie papirusa",
      "Wznoszenie zigguratów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wszystkie cztery cywilizacje łączyły pismo, miasta i rolnictwo; pozostałe cechy dotyczą tylko wybranych kultur."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Władca z XVIII wieku p.n.e. podporządkował sobie niemal całą Mezopotamię, a jego prawa wyryto na kamiennych słupach ustawianych w miejscach publicznych. Kto to był?",
    "options": [
      "Hammurabi",
      "Szy Huang-ti",
      "Cheops",
      "Dawid",
      "Salomon",
      "Mojżesz"
    ],
    "answer": 0,
    "image": "/img/r01_slupek_praw_mezopotamia.jpg",
    "explanation": "Opis dotyczy Hammurabiego, króla Babilonii i twórcy najstarszego zachowanego w całości zbioru praw."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Około __________ lat p.n.e. w Mezopotamii wykształciło się pierwsze pismo; wraz z jego pojawieniem się kończy się __________.",
    "options": null,
    "answer": [
      "3500",
      "prehistoria"
    ],
    "altAnswers": [
      [
        "3500",
        "3500."
      ],
      [
        "prehistoria",
        "prehistoryja"
      ]
    ],
    "explanation": "Podręcznik wiąże początki pisma w Mezopotamii z około 3500 rokiem p.n.e. i uznaje je za granicę między prehistorią a historią."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Wedy, Mahabharata, Ramajana, Kodeks Hammurabiego.",
    "options": null,
    "answer": "Kodeks Hammurabiego",
    "explanation": "Wedy, Mahabharata i Ramajana są związane z kulturą Indii, a Kodeks Hammurabiego z Babilonią."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Biblia jest dla badaczy ważnym źródłem do dziejów Izraela, ale podręcznik zaznacza, że naukowcy zestawiają opowieści biblijne z innymi źródłami, zwłaszcza archeologicznymi.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podkreśla religijny charakter Biblii i potrzebę porównywania jej przekazów z innymi źródłami."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia i zabytki do cywilizacji lub kręgu kulturowego.",
    "options": null,
    "items": [
      "ziggurat",
      "Kodeks Hammurabiego",
      "mumia",
      "piramida",
      "Tora",
      "Świątynia Salomona",
      "Wedy",
      "Jedwabny Szlak"
    ],
    "categories": [
      "Mezopotamia",
      "Egipt",
      "Izrael",
      "Indie i Chiny"
    ],
    "answer": {
      "Mezopotamia": [
        "ziggurat",
        "Kodeks Hammurabiego"
      ],
      "Egipt": [
        "mumia",
        "piramida"
      ],
      "Izrael": [
        "Tora",
        "Świątynia Salomona"
      ],
      "Indie i Chiny": [
        "Wedy",
        "Jedwabny Szlak"
      ]
    },
    "explanation": "Każde pojęcie pochodzi z innej części rozdziału i jest charakterystyczne dla wskazanej cywilizacji lub tradycji."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Okres, gdy po zburzeniu Jerozolimy część Żydów przesiedlono do Babilonii, to...",
    "options": null,
    "answer": "niewola babilońska",
    "altAnswers": [
      "niewola babilońska",
      "niewola babilonska"
    ],
    "explanation": "Niewola babilońska trwała kilkadziesiąt lat po podboju Palestyny przez króla Babilonii w VI wieku p.n.e."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego w Mezopotamii, Egipcie i Chinach tylko niewielu ludzi potrafiło czytać i pisać?",
    "options": [
      "Systemy pisma liczyły bardzo wiele znaków i wymagały długiej nauki",
      "Władcy zakazali pisania kapłanom i urzędnikom",
      "Papier i papirus nie były znane żadnej z tych cywilizacji",
      "Każdy tekst musiał być zapisany po łacinie",
      "Pismo służyło wyłącznie do ozdabiania grobowców",
      "Ludzie znali tylko liczby, ale nie znali żadnych znaków"
    ],
    "answer": 0,
    "explanation": "W rozdziale kilka razy podkreślono, że dawne systemy pisma zawierały tysiące znaków, dlatego umiejętność pisania była trudna i rzadka."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Pradzieje i najdawniejsze cywilizacje",
  icon: "🌍",
  sectionOrder: [
    "Najdawniejsze dzieje człowieka",
    "Mezopotamia",
    "Starożytny Egipt",
    "Starożytny Izrael",
    "Starożytne Indie i Chiny",
    "Super trudne"
  ],
  sectionIcons: {
    "Najdawniejsze dzieje człowieka": "🪨",
    "Mezopotamia": "🏺",
    "Starożytny Egipt": "🏜️",
    "Starożytny Izrael": "📜",
    "Starożytne Indie i Chiny": "🐉",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
