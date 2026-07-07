// Skróty sekcji:
//   HEL = Świat Hellenów
//   POL = Demokratyczne Ateny i Sparta
//   MIT = Wierzenia i mitologia
//   IGR = Teatr i igrzyska
//   KUL = Nauka, literatura i sztuka
//   WOJ = Wojny i Aleksander
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_HEL_01",
    "section": "Świat Hellenów",
    "type": "single_choice",
    "prompt": "Który opis najlepiej pasuje do warunków naturalnych starożytnej Grecji?",
    "options": [
      "Rozległe równiny wokół jednej wielkiej rzeki",
      "Górzysta kraina oblana morzami",
      "Pustynna kraina bez dostępu do morza",
      "Nizina nawadniana kanałami",
      "Jedna wielka wyspa na oceanie",
      "Las równikowy przecięty rzekami"
    ],
    "answer": 1,
    "image": "/img/r02_mapa_hellady.jpg",
    "explanation": "Grecja była krajem górzystym, oblanym morzami, dlatego warunki życia Greków różniły się od warunków w Mezopotamii czy Egipcie."
  },
  {
    "id": "R02_HEL_02",
    "section": "Świat Hellenów",
    "type": "multi_select",
    "prompt": "Zaznacz skutki górzystego położenia i bliskości morza w Helladzie.",
    "options": [
      "Łatwiej podróżowano drogą morską niż lądową",
      "Grecy stali się dobrymi żeglarzami i budowniczymi statków",
      "W Grecji rozwinęła się jedna wielka monarchia rzeczna",
      "Wiele wspólnot rozwijało się oddzielnie w dolinach i na nizinach",
      "Podstawą rolnictwa była uprawa ryżu",
      "Grecy nie potrzebowali portów"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Góry i linia brzegowa sprzyjały podróżom morskim oraz powstawaniu oddzielnych wspólnot, a nie jednego państwa."
  },
  {
    "id": "R02_HEL_03",
    "section": "Świat Hellenów",
    "type": "true_false",
    "prompt": "W Grecji, w przeciwieństwie do Egiptu i Mezopotamii, nie ukształtowała się jedna wielka monarchia.",
    "options": null,
    "answer": true,
    "explanation": "W dolinach i na nizinach oddzielonych górami powstawały niewielkie wspólnoty, z których rozwinęły się polis."
  },
  {
    "id": "R02_HEL_04",
    "section": "Świat Hellenów",
    "type": "fill_in",
    "prompt": "Grecy nazywali siebie __________, a swoją dużą ojczyznę __________.",
    "options": null,
    "answer": [
      "Hellenami",
      "Helladą"
    ],
    "altAnswers": [
      [
        "Hellenami",
        "Hellenowie"
      ],
      [
        "Helladą",
        "Hellada"
      ]
    ],
    "explanation": "Grecy mieli poczucie wspólnoty i określali siebie jako Hellenów, a ziemie zamieszkane przez siebie jako Helladę."
  },
  {
    "id": "R02_HEL_05",
    "section": "Świat Hellenów",
    "type": "riddle",
    "prompt": "Główny plac greckiego miasta z budynkami publicznymi i straganami kupców to...",
    "options": null,
    "answer": "agora",
    "altAnswers": [
      "agora",
      "Agora"
    ],
    "image": "/img/r02_agora_akropol.jpg",
    "explanation": "Agora była centrum życia miejskiego, miejscem handlu oraz otoczeniem ważnych budowli publicznych."
  },
  {
    "id": "R02_HEL_06",
    "section": "Świat Hellenów",
    "type": "riddle",
    "prompt": "Wzgórze z najważniejszymi świątyniami, które podczas najazdu mogło być miejscem schronienia mieszkańców polis, to...",
    "options": null,
    "answer": "akropol",
    "altAnswers": [
      "akropol",
      "Akropol"
    ],
    "image": "/img/r02_agora_akropol.jpg",
    "explanation": "Akropol górował nad miastem i pełnił funkcję religijną oraz obronną."
  },
  {
    "id": "R02_HEL_07",
    "section": "Świat Hellenów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: oliwa, wino, ceramika, papirus.",
    "options": null,
    "answer": "papirus",
    "explanation": "Oliwa, wino i ceramika były towarami wywożonymi przez Greków, natomiast papirus kojarzy się z Egiptem."
  },
  {
    "id": "R02_HEL_08",
    "section": "Świat Hellenów",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym objaśnieniem.",
    "options": null,
    "left": [
      "polis",
      "Hellada",
      "barbarzyńcy",
      "kolonia"
    ],
    "right": [
      "greckie miasto-państwo i wspólnota obywateli",
      "ziemie zamieszkane przez Hellenów",
      "ludy nieposługujące się językiem greckim",
      "nowe miasto-państwo zakładane na obcych wybrzeżach"
    ],
    "answer": {
      "polis": "greckie miasto-państwo i wspólnota obywateli",
      "Hellada": "ziemie zamieszkane przez Hellenów",
      "barbarzyńcy": "ludy nieposługujące się językiem greckim",
      "kolonia": "nowe miasto-państwo zakładane na obcych wybrzeżach"
    },
    "explanation": "Te pojęcia opisują podstawy świata Hellenów: polis, wspólną ojczyznę, stosunek do obcych ludów i kolonizację."
  },
  {
    "id": "R02_HEL_09",
    "section": "Świat Hellenów",
    "type": "scenario",
    "prompt": "Kupiec z greckiej polis ładuje na statek naczynia ceramiczne, oliwę i wino, a z wyprawy chce przywieźć żywność, której w Helladzie brakowało. Co najpewniej sprowadza z zagranicy?",
    "options": [
      "zboże",
      "marmur",
      "wino",
      "oliwę",
      "hełmy hoplickie",
      "maski teatralne"
    ],
    "answer": 0,
    "explanation": "Miejscowe rolnictwo nie mogło wyżywić całej ludności, więc Grecy sprowadzali zboże, a wywozili m.in. oliwę, wino i ceramikę."
  },
  {
    "id": "R02_HEL_10",
    "section": "Świat Hellenów",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w przybliżonym porządku chronologicznym.",
    "options": null,
    "items": [
      "Ukształtowanie się polis około VIII wieku p.n.e.",
      "Przybycie pierwszych greckich plemion około 2000 roku p.n.e.",
      "Początek wielkiej kolonizacji greckiej około IX wieku p.n.e."
    ],
    "answer": [
      "Przybycie pierwszych greckich plemion około 2000 roku p.n.e.",
      "Początek wielkiej kolonizacji greckiej około IX wieku p.n.e.",
      "Ukształtowanie się polis około VIII wieku p.n.e."
    ],
    "explanation": "Najpierw na obszary greckie przybyły plemiona, później rozpoczęła się kolonizacja, a około VIII wieku p.n.e. ukształtowały się polis."
  },
  {
    "id": "R02_POL_01",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "single_choice",
    "prompt": "Co w języku Greków oznaczało słowo demokracja?",
    "options": [
      "władzę ludu",
      "rządy jednego króla",
      "panowanie kapłanów",
      "władzę cudzoziemców",
      "rządy armii",
      "prawo niewolników"
    ],
    "answer": 0,
    "explanation": "Demokracja oznaczała ustrój, w którym obywatele mieli prawo brać udział w sprawowaniu władzy."
  },
  {
    "id": "R02_POL_02",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "true_false",
    "prompt": "Zgromadzenie ludowe w Atenach zbierało się cztery razy w miesiącu i głosowało przez podniesienie ręki.",
    "options": null,
    "answer": true,
    "explanation": "Zgromadzenie ludowe było najważniejszym organem władzy demokracji ateńskiej i podejmowało decyzje większością głosów."
  },
  {
    "id": "R02_POL_03",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "fill_in",
    "prompt": "Najważniejszym organem władzy demokracji ateńskiej było __________, a decyzje podejmowano większością __________.",
    "options": null,
    "answer": [
      "zgromadzenie ludowe",
      "głosów"
    ],
    "altAnswers": [
      [
        "zgromadzenie ludowe",
        "zgromadzenie"
      ],
      [
        "głosów",
        "glosow"
      ]
    ],
    "explanation": "Na zgromadzeniu obywatele debatowali nad sprawami państwa i głosowali nad uchwałami."
  },
  {
    "id": "R02_POL_04",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "multi_select",
    "prompt": "Zaznacz uprawnienia obywatela ateńskiego w demokracji.",
    "options": [
      "udział w zgromadzeniu ludowym",
      "zabieranie głosu podczas obrad",
      "składanie propozycji uchwał",
      "automatyczne zwolnienie ze służby wojskowej",
      "możliwość bycia urzędnikiem lub członkiem rady",
      "prawo sprzedawania innych obywateli jako niewolników"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Obywatele uczestniczyli w zgromadzeniu, przemawiali, proponowali uchwały i mogli sprawować urzędy lub zasiadać w radzie."
  },
  {
    "id": "R02_POL_05",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "riddle",
    "prompt": "Najsłynniejszy ateński polityk V wieku p.n.e., którego czasy nazywa się epoką peryklejską, to...",
    "options": null,
    "answer": "Perykles",
    "altAnswers": [
      "Perykles",
      "perykles"
    ],
    "explanation": "Perykles miał wielki wpływ na politykę Aten i wprowadził wynagrodzenia ułatwiające ubogim udział w życiu publicznym."
  },
  {
    "id": "R02_POL_06",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "single_choice",
    "prompt": "Czemu służył ostracyzm w Atenach?",
    "options": [
      "usunięciu na pewien czas polityka uznanego za zagrożenie dla demokracji",
      "wyborowi króla na całe życie",
      "nadaniu obywatelstwa metojkom",
      "wybraniu zwycięzcy igrzysk",
      "podziałowi ziemi między niewolników",
      "złożeniu ofiary Dionizosowi"
    ],
    "answer": 0,
    "image": "/img/r02_ostrakon_glosowanie.jpg",
    "explanation": "Podczas ostracyzmu obywatele zapisywali na skorupkach imię osoby uznanej za groźną dla ustroju."
  },
  {
    "id": "R02_POL_07",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: obywatel, metojk, niewolnik, bogini.",
    "options": null,
    "answer": "bogini",
    "explanation": "Obywatel, metojk i niewolnik to grupy społeczne Aten, a bogini należy do świata religii."
  },
  {
    "id": "R02_POL_08",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "sort",
    "prompt": "Przyporządkuj grupy mieszkańców Aten do kategorii praw politycznych.",
    "options": null,
    "items": [
      "mężczyźni obywatele",
      "kobiety ateńskie",
      "metojkowie",
      "niewolnicy"
    ],
    "categories": [
      "mieli prawa polityczne",
      "nie mieli praw politycznych"
    ],
    "answer": {
      "mieli prawa polityczne": [
        "mężczyźni obywatele"
      ],
      "nie mieli praw politycznych": [
        "kobiety ateńskie",
        "metojkowie",
        "niewolnicy"
      ]
    },
    "explanation": "W demokracji ateńskiej udział w sprawowaniu władzy mieli tylko mężczyźni będący obywatelami."
  },
  {
    "id": "R02_POL_09",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "scenario",
    "prompt": "Spartański chłopiec kończy siedem lat. Zamiast nadal wychowywać się wyłącznie w domu, trafia do grupy rówieśników, ćwiczy sprawność, znosi surową dyscyplinę i uczy się życia wojownika. Jak nazywamy taki model wychowania?",
    "options": [
      "spartańskie wychowanie",
      "ostracyzm",
      "olimpiada",
      "kolonizacja",
      "demokracja",
      "filozofia"
    ],
    "answer": 0,
    "explanation": "Spartańskie wychowanie podporządkowywało życie chłopców przygotowaniu do wojny i znoszenia trudów."
  },
  {
    "id": "R02_POL_10",
    "section": "Demokratyczne Ateny i Sparta",
    "type": "match",
    "prompt": "Połącz element uzbrojenia spartańskiego hoplity z właściwym opisem.",
    "options": null,
    "left": [
      "hełm",
      "tarcza",
      "włócznia",
      "nagolenniki"
    ],
    "right": [
      "ochrona głowy",
      "osłona ciała i sąsiada w szyku",
      "broń drzewcowa do walki",
      "osłona nóg"
    ],
    "answer": {
      "hełm": "ochrona głowy",
      "tarcza": "osłona ciała i sąsiada w szyku",
      "włócznia": "broń drzewcowa do walki",
      "nagolenniki": "osłona nóg"
    },
    "image": "/img/r02_hoplici_falanga.jpg",
    "explanation": "Hoplita był ciężkozbrojnym piechurem, a jego uzbrojenie służyło walce w zwartym szyku."
  },
  {
    "id": "R02_MIT_01",
    "section": "Wierzenia i mitologia",
    "type": "single_choice",
    "prompt": "Religia starożytnych Greków była politeistyczna, czyli Grecy wierzyli...",
    "options": [
      "w wielu bogów",
      "w jednego boga",
      "wyłącznie w duchy przodków",
      "tylko w herosów",
      "w boskość każdego obywatela",
      "wyłącznie w prawa przyrody"
    ],
    "answer": 0,
    "image": "/img/r02_bogowie_olimp.jpg",
    "explanation": "Politeizm oznacza wiarę w wielu bogów, a Grecy czcili m.in. Zeusa, Herę, Atenę, Apolla, Artemidę i Aresa."
  },
  {
    "id": "R02_MIT_02",
    "section": "Wierzenia i mitologia",
    "type": "match",
    "prompt": "Połącz greckie bóstwo z jego funkcją lub cechą.",
    "options": null,
    "left": [
      "Zeus",
      "Hera",
      "Artemida",
      "Atena"
    ],
    "right": [
      "władca bogów, pan nieba i błyskawic",
      "żona Zeusa, opiekunka ogniska domowego",
      "bogini łowów i opiekunka zwierząt",
      "bogini mądrości i sztuki wojennej"
    ],
    "answer": {
      "Zeus": "władca bogów, pan nieba i błyskawic",
      "Hera": "żona Zeusa, opiekunka ogniska domowego",
      "Artemida": "bogini łowów i opiekunka zwierząt",
      "Atena": "bogini mądrości i sztuki wojennej"
    },
    "image": "/img/r02_bogowie_olimp.jpg",
    "explanation": "Grecy wyobrażali sobie bogów jako wielką rodzinę, ale poszczególnym bóstwom przypisywali różne dziedziny opieki."
  },
  {
    "id": "R02_MIT_03",
    "section": "Wierzenia i mitologia",
    "type": "true_false",
    "prompt": "W starożytnej Grecji istniała jedna księga zawierająca zbiór prawd religijnych obowiązujących wszystkich Greków.",
    "options": null,
    "answer": false,
    "explanation": "W Grecji nie powstała taka księga; o bogach i herosach opowiadały mity przekazywane ustnie, a potem utrwalone w literaturze."
  },
  {
    "id": "R02_MIT_04",
    "section": "Wierzenia i mitologia",
    "type": "fill_in",
    "prompt": "Na czele greckich bogów stał __________, a ich siedzibą był __________.",
    "options": null,
    "answer": [
      "Zeus",
      "Olimp"
    ],
    "altAnswers": [
      [
        "Zeus",
        "Dzeus"
      ],
      [
        "Olimp",
        "góra Olimp",
        "Olimpie"
      ]
    ],
    "explanation": "Grecy uważali Zeusa za najważniejszego boga, a Olimp za miejsce spotkań bogów."
  },
  {
    "id": "R02_MIT_05",
    "section": "Wierzenia i mitologia",
    "type": "multi_select",
    "prompt": "Zaznacz cechy, które według mitów odróżniały bogów od ludzi lub ich charakteryzowały.",
    "options": [
      "nieśmiertelność",
      "nadprzyrodzona moc",
      "władza nad siłami natury",
      "całkowita wszechmoc",
      "podobieństwo do ludzi w uczuciach i zachowaniach",
      "obowiązek udziału w zgromadzeniu ludowym"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "image": "/img/r02_bogowie_olimp.jpg",
    "explanation": "Bogowie byli nieśmiertelni i mieli nadprzyrodzoną moc, ale przypominały im się ludzkie uczucia i nie byli wszechmocni."
  },
  {
    "id": "R02_MIT_06",
    "section": "Wierzenia i mitologia",
    "type": "riddle",
    "prompt": "Najsławniejszy grecki heros, syn Zeusa, przedstawiany z maczugą i słynący z ogromnej siły, to...",
    "options": null,
    "answer": "Herakles",
    "altAnswers": [
      "Herakles",
      "Herkules",
      "herakles"
    ],
    "image": "/img/r02_herakles_cerber.jpg",
    "explanation": "Herakles był śmiertelnym herosem, który według mitu wykonał dwanaście bardzo trudnych prac."
  },
  {
    "id": "R02_MIT_07",
    "section": "Wierzenia i mitologia",
    "type": "single_choice",
    "prompt": "Kto według greckich wierzeń strzegł wejścia do podziemnego świata zmarłych?",
    "options": [
      "Cerber",
      "Apollo",
      "Perykles",
      "Pitagoras",
      "Dionizos",
      "Odyseusz"
    ],
    "answer": 0,
    "explanation": "Wejścia do Hadesu miał strzec Cerber, olbrzymi trzygłowy pies."
  },
  {
    "id": "R02_MIT_08",
    "section": "Wierzenia i mitologia",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Zeus, Hera, Atena, Ozyrys.",
    "options": null,
    "answer": "Ozyrys",
    "explanation": "Zeus, Hera i Atena należą do mitologii greckiej, a Ozyrys jest bóstwem egipskim."
  },
  {
    "id": "R02_MIT_09",
    "section": "Wierzenia i mitologia",
    "type": "scenario",
    "prompt": "Mieszkańcy Aten obchodzą uroczystość ku czci bóstwa opiekuńczego swojej polis. Której bogini szczególnie oddają cześć?",
    "options": [
      "Atenie",
      "Herze",
      "Artemidzie",
      "Afrodycie",
      "Safonie",
      "Demeter"
    ],
    "answer": 0,
    "explanation": "Opiekunką Aten była Atena, dlatego w tej polis otaczano ją szczególnym kultem."
  },
  {
    "id": "R02_MIT_10",
    "section": "Wierzenia i mitologia",
    "type": "sort",
    "prompt": "Przyporządkuj postacie i istoty do kategorii świata mitologii greckiej.",
    "options": null,
    "items": [
      "Zeus",
      "Atena",
      "Herakles",
      "Cerber"
    ],
    "categories": [
      "bogowie",
      "herosi",
      "istoty mityczne"
    ],
    "answer": {
      "bogowie": [
        "Zeus",
        "Atena"
      ],
      "herosi": [
        "Herakles"
      ],
      "istoty mityczne": [
        "Cerber"
      ]
    },
    "explanation": "Zeus i Atena byli bogami, Herakles herosem, a Cerber mitycznym strażnikiem Hadesu."
  },
  {
    "id": "R02_IGR_01",
    "section": "Teatr i igrzyska",
    "type": "single_choice",
    "prompt": "Czym był gimnazjon w greckim mieście?",
    "options": [
      "zespołem boisk, bieżni i budynków do ćwiczeń sportowych",
      "świątynią Zeusa w Olimpii",
      "miejscem głosowania na skorupkach",
      "domem niewolników",
      "warsztatem rzeźbiarza",
      "portem handlowym"
    ],
    "answer": 0,
    "explanation": "Gimnazjon był miejscem, w którym obywatele, zwykle mężczyźni, spotykali się, aby uprawiać sport."
  },
  {
    "id": "R02_IGR_02",
    "section": "Teatr i igrzyska",
    "type": "true_false",
    "prompt": "Pierwsze igrzyska w Olimpii zorganizowano w 776 roku p.n.e., a kolejne odbywały się co cztery lata.",
    "options": null,
    "answer": true,
    "image": "/img/r02_igrzyska_olimpia.jpg",
    "explanation": "Igrzyska olimpijskie odbywały się regularnie co cztery lata, a czteroletni okres między nimi nazywano olimpiadą."
  },
  {
    "id": "R02_IGR_03",
    "section": "Teatr i igrzyska",
    "type": "multi_select",
    "prompt": "Zaznacz dyscypliny wymienione w opisie starożytnych igrzysk greckich.",
    "options": [
      "biegi",
      "rzut dyskiem",
      "skok w dal",
      "wyścigi konnych zaprzęgów",
      "łucznictwo konne",
      "pływanie synchroniczne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na igrzyskach rywalizowano m.in. w biegach, rzucie dyskiem, skoku w dal, zapasach, walce na pięści i wyścigach zaprzęgów."
  },
  {
    "id": "R02_IGR_04",
    "section": "Teatr i igrzyska",
    "type": "fill_in",
    "prompt": "Przed igrzyskami olimpijskimi posłańcy ogłaszali w Helladzie __________, aby zawodnicy mogli bezpiecznie dotrzeć do __________.",
    "options": null,
    "answer": [
      "święty pokój",
      "Olimpii"
    ],
    "altAnswers": [
      [
        "święty pokój",
        "swiety pokoj"
      ],
      [
        "Olimpii",
        "Olimpia"
      ]
    ],
    "image": "/img/r02_igrzyska_olimpia.jpg",
    "explanation": "Święty pokój oznaczał przerwanie działań wojennych, by nie zakłócać sportowej i religijnej uroczystości."
  },
  {
    "id": "R02_IGR_05",
    "section": "Teatr i igrzyska",
    "type": "riddle",
    "prompt": "Bóg winorośli i wina, ku którego czci odbywały się uroczystości będące początkiem greckiego teatru, to...",
    "options": null,
    "answer": "Dionizos",
    "altAnswers": [
      "Dionizos",
      "Dionizosa",
      "dionizos"
    ],
    "explanation": "Przedstawienia teatralne wywodziły się z radosnych ceremonii religijnych ku czci Dionizosa."
  },
  {
    "id": "R02_IGR_06",
    "section": "Teatr i igrzyska",
    "type": "single_choice",
    "prompt": "Który gatunek dramatu greckiego zwykle poruszał poważne problemy i często kończył się śmiercią głównego bohatera?",
    "options": [
      "tragedia",
      "komedia",
      "epos",
      "bajka",
      "mit",
      "kronika"
    ],
    "answer": 0,
    "explanation": "Tragedie opowiadały najczęściej o wydarzeniach z mitologii i poruszały poważne problemy."
  },
  {
    "id": "R02_IGR_07",
    "section": "Teatr i igrzyska",
    "type": "match",
    "prompt": "Połącz element greckiego teatru lub stroju aktora z funkcją.",
    "options": null,
    "left": [
      "maska",
      "koturny",
      "chór",
      "widownia"
    ],
    "right": [
      "pomagała odgrywać różne postacie",
      "podwyższone buty zwiększające widoczność aktora",
      "komentował akcję spektaklu",
      "miejsce dla oglądających przedstawienie"
    ],
    "answer": {
      "maska": "pomagała odgrywać różne postacie",
      "koturny": "podwyższone buty zwiększające widoczność aktora",
      "chór": "komentował akcję spektaklu",
      "widownia": "miejsce dla oglądających przedstawienie"
    },
    "image": "/img/r02_teatr_grecki.jpg",
    "explanation": "Aktorzy używali masek i koturnów, a chór oraz widownia były ważnymi elementami greckiego przedstawienia."
  },
  {
    "id": "R02_IGR_08",
    "section": "Teatr i igrzyska",
    "type": "scenario",
    "prompt": "W greckim teatrze występuje trzech mężczyzn, którzy w kolejnych scenach grają różne postacie, także kobiece. Co pomaga im zmieniać role?",
    "options": [
      "maski",
      "ostraka",
      "tarcze hoplitów",
      "gałązki oliwne",
      "kolumny jońskie",
      "tabliczki z alfabetem"
    ],
    "answer": 0,
    "image": "/img/r02_teatr_grecki.jpg",
    "explanation": "W starożytnej Grecji aktorami byli mężczyźni, którzy odgrywali różne role i przywdziewali odpowiednie maski."
  },
  {
    "id": "R02_IGR_09",
    "section": "Teatr i igrzyska",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do igrzysk albo teatru.",
    "options": null,
    "items": [
      "wieniec oliwny",
      "święty pokój",
      "maska",
      "chór",
      "Dionizos",
      "rzut dyskiem"
    ],
    "categories": [
      "igrzyska",
      "teatr"
    ],
    "answer": {
      "igrzyska": [
        "wieniec oliwny",
        "święty pokój",
        "rzut dyskiem"
      ],
      "teatr": [
        "maska",
        "chór",
        "Dionizos"
      ]
    },
    "explanation": "Igrzyska łączyły się ze sportem i pokojem olimpijskim, a teatr z Dionizosem, maskami i chórem."
  },
  {
    "id": "R02_IGR_10",
    "section": "Teatr i igrzyska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: bieg, zapasy, rzut dyskiem, czytanie.",
    "options": null,
    "answer": "czytanie",
    "explanation": "Bieg, zapasy i rzut dyskiem były dyscyplinami sportowymi, a czytanie nie było konkurencją igrzysk."
  },
  {
    "id": "R02_KUL_01",
    "section": "Nauka, literatura i sztuka",
    "type": "single_choice",
    "prompt": "Co dosłownie oznacza greckie słowo filozofia?",
    "options": [
      "umiłowanie mądrości",
      "władza ludu",
      "opowieść o bogach",
      "miasto-państwo",
      "święty pokój",
      "sztuka budowania okrętów"
    ],
    "answer": 0,
    "explanation": "Filozofia oznacza umiłowanie mądrości; filozofowie starali się dochodzić do prawdy przez rozumowanie."
  },
  {
    "id": "R02_KUL_02",
    "section": "Nauka, literatura i sztuka",
    "type": "fill_in",
    "prompt": "Uczniem Sokratesa był __________, a uczniem Platona był __________.",
    "options": null,
    "answer": [
      "Platon",
      "Arystoteles"
    ],
    "altAnswers": [
      [
        "Platon",
        "Platona"
      ],
      [
        "Arystoteles",
        "Arystotelesa"
      ]
    ],
    "explanation": "Sokrates, Platon i Arystoteles tworzą jeden z najważniejszych ciągów nauczycieli i uczniów w greckiej filozofii."
  },
  {
    "id": "R02_KUL_03",
    "section": "Nauka, literatura i sztuka",
    "type": "multi_select",
    "prompt": "Zaznacz dziedziny wiedzy, które rozwijały się w starożytnej Grecji pod wpływem dociekań filozoficznych.",
    "options": [
      "matematyka",
      "fizyka",
      "astronomia",
      "medycyna",
      "wiedza przyrodnicza",
      "budowa kanałów nawadniających w dolinie Nilu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W podręczniku wymieniono rozwój matematyki, fizyki, astronomii, wiedzy przyrodniczej i medycyny."
  },
  {
    "id": "R02_KUL_04",
    "section": "Nauka, literatura i sztuka",
    "type": "match",
    "prompt": "Połącz postać z dziedziną lub osiągnięciem wskazanym w rozdziale.",
    "options": null,
    "left": [
      "Pitagoras",
      "Hipokrates",
      "Herodot",
      "Homer"
    ],
    "right": [
      "filozof i wybitny matematyk",
      "lekarz, który podkreślał zasadę 'nie szkodzić'",
      "ojciec historii",
      "autor Iliady i Odysei"
    ],
    "answer": {
      "Pitagoras": "filozof i wybitny matematyk",
      "Hipokrates": "lekarz, który podkreślał zasadę 'nie szkodzić'",
      "Herodot": "ojciec historii",
      "Homer": "autor Iliady i Odysei"
    },
    "explanation": "Rozdział pokazuje, że Grecy rozwijali filozofię, medycynę, historię i literaturę."
  },
  {
    "id": "R02_KUL_05",
    "section": "Nauka, literatura i sztuka",
    "type": "true_false",
    "prompt": "Greccy filozofowie szukali odpowiedzi na pytania o świat i człowieka wyłącznie w mitach, a nie w rozumowaniu.",
    "options": null,
    "answer": false,
    "explanation": "Filozofowie odchodzili od wyjaśnień mitycznych i starali się dochodzić do prawdy poprzez rozumowanie."
  },
  {
    "id": "R02_KUL_06",
    "section": "Nauka, literatura i sztuka",
    "type": "riddle",
    "prompt": "Autor dwóch najsłynniejszych greckich eposów, Iliady i Odysei, to...",
    "options": null,
    "answer": "Homer",
    "altAnswers": [
      "Homer",
      "homera",
      "Homera"
    ],
    "explanation": "Iliada i Odyseja były najważniejszymi eposami greckiej literatury i podstawą wykształcenia młodych Greków."
  },
  {
    "id": "R02_KUL_07",
    "section": "Nauka, literatura i sztuka",
    "type": "single_choice",
    "prompt": "O czym opowiada Odyseja?",
    "options": [
      "o pełnym przygód powrocie Odyseusza z wojny trojańskiej do domu",
      "o głosowaniu ostracyzmem",
      "o bitwie morskiej pod Salaminą",
      "o stworzeniu alfabetu przez Fenicjan",
      "o zbudowaniu pierwszego teatru w Atenach",
      "o wychowaniu spartańskich chłopców"
    ],
    "answer": 0,
    "explanation": "Odyseja opisuje powrót Odyseusza z wojny trojańskiej do domu, natomiast Iliada dotyczy wojny pod Troją."
  },
  {
    "id": "R02_KUL_08",
    "section": "Nauka, literatura i sztuka",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do dziedzin greckiej sztuki.",
    "options": null,
    "items": [
      "malowidła na wazach",
      "rzeźby bogów i ludzi",
      "świątynie otoczone kolumnami",
      "porządki dorycki, joński i koryncki"
    ],
    "categories": [
      "ceramika",
      "rzeźba",
      "architektura"
    ],
    "answer": {
      "ceramika": [
        "malowidła na wazach"
      ],
      "rzeźba": [
        "rzeźby bogów i ludzi"
      ],
      "architektura": [
        "świątynie otoczone kolumnami",
        "porządki dorycki, joński i koryncki"
      ]
    },
    "image": "/img/r02_porzadki_kolumn.jpg",
    "explanation": "Grecy osiągnęli mistrzostwo w ceramice, rzeźbie i architekturze świątynnej."
  },
  {
    "id": "R02_KUL_09",
    "section": "Nauka, literatura i sztuka",
    "type": "match",
    "prompt": "Połącz porządek architektoniczny z jego miejscem w zestawieniu głowic kolumn z podręcznika.",
    "options": null,
    "left": [
      "dorycki",
      "joński",
      "koryncki"
    ],
    "right": [
      "pierwszy w zestawieniu",
      "drugi w zestawieniu",
      "trzeci w zestawieniu"
    ],
    "answer": {
      "dorycki": "pierwszy w zestawieniu",
      "joński": "drugi w zestawieniu",
      "koryncki": "trzeci w zestawieniu"
    },
    "image": "/img/r02_porzadki_kolumn.jpg",
    "explanation": "Podręcznik pokazuje trzy porządki greckiej architektury: dorycki, joński i koryncki."
  },
  {
    "id": "R02_KUL_10",
    "section": "Nauka, literatura i sztuka",
    "type": "scenario",
    "prompt": "Uczeń ogląda rzeźbę przedstawiającą sportowca w ruchu z dyskiem w dłoni. Nauczyciel mówi, że jej autorem był mistrz ukazywania postaci w ruchu. O jaką rzeźbę chodzi?",
    "options": [
      "Dyskobol",
      "Atena Partenos",
      "Cerber",
      "Partenon",
      "Odyseja",
      "ostrakon"
    ],
    "answer": 0,
    "image": "/img/r02_dyskobol_rzezba.jpg",
    "explanation": "Myron był autorem słynnego Dyskobola, rzeźby ukazującej ludzką postać w ruchu."
  },
  {
    "id": "R02_WOJ_01",
    "section": "Wojny i Aleksander",
    "type": "single_choice",
    "prompt": "W której bitwie w 490 roku p.n.e. ateńscy hoplici pokonali liczniejszą armię perską?",
    "options": [
      "pod Maratonem",
      "pod Termopilami",
      "pod Salaminą",
      "pod Issos",
      "pod Gaugamelą",
      "pod Troją"
    ],
    "answer": 0,
    "image": "/img/r02_wojny_grecko_perskie_mapa.jpg",
    "explanation": "W 490 roku p.n.e. Ateńczycy zwyciężyli Persów w bitwie pod Maratonem."
  },
  {
    "id": "R02_WOJ_02",
    "section": "Wojny i Aleksander",
    "type": "true_false",
    "prompt": "Pod Termopilami do końca walczyło 300 spartańskich hoplitów, którzy osłaniali odwrót sił greckich.",
    "options": null,
    "answer": true,
    "image": "/img/r02_wojny_grecko_perskie_mapa.jpg",
    "explanation": "Podręcznik podkreśla, że 300 Spartan walczyło do śmierci, aby osłonić odwrót Greków."
  },
  {
    "id": "R02_WOJ_03",
    "section": "Wojny i Aleksander",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia związane z obroną Greków przed Persami w V wieku p.n.e.",
    "options": [
      "zwycięstwo ateńskich hoplitów pod Maratonem",
      "obrona wąwozu Termopile",
      "zwycięstwo ateńskich okrętów pod Salaminą",
      "wyprawa Aleksandra na Persję w 334 roku p.n.e.",
      "powstanie monarchii hellenistycznych",
      "założenie Fenicji"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r02_hoplici_falanga.jpg",
    "explanation": "Maraton, Termopile i Salamina należą do opisu wojen grecko-perskich; wyprawa Aleksandra była późniejsza."
  },
  {
    "id": "R02_WOJ_04",
    "section": "Wojny i Aleksander",
    "type": "fill_in",
    "prompt": "W V wieku p.n.e. greckim polis zagroziła __________, ale Grecy zdołali obronić swoją __________.",
    "options": null,
    "answer": [
      "Persja",
      "niepodległość"
    ],
    "altAnswers": [
      [
        "Persja",
        "państwo perskie",
        "Persowie"
      ],
      [
        "niepodległość",
        "wolność"
      ]
    ],
    "explanation": "Persja podbiła wiele krain i zagroziła Grecji, lecz Grecy obronili niezależność swoich polis."
  },
  {
    "id": "R02_WOJ_05",
    "section": "Wojny i Aleksander",
    "type": "scenario",
    "prompt": "Ateński okręt wojenny wykorzystuje żagle i pracę wioślarzy. Bierze udział w bitwie morskiej z Persami w 480 roku p.n.e. O którą bitwę chodzi?",
    "options": [
      "pod Salaminą",
      "pod Maratonem",
      "pod Termopilami",
      "pod Olimpią",
      "pod Spartą",
      "nad Indusem"
    ],
    "answer": 0,
    "explanation": "W 480 roku p.n.e. ateńskie okręty pokonały flotę perską w bitwie morskiej pod Salaminą."
  },
  {
    "id": "R02_WOJ_06",
    "section": "Wojny i Aleksander",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Maraton, Termopile, Salamina, Aleksandria.",
    "options": null,
    "answer": "Aleksandria",
    "explanation": "Maraton, Termopile i Salamina to miejsca bitew wojen grecko-perskich, a Aleksandria kojarzy się z podbojami Aleksandra i miastami kultury greckiej."
  },
  {
    "id": "R02_WOJ_07",
    "section": "Wojny i Aleksander",
    "type": "single_choice",
    "prompt": "Który władca Macedonii uzależnił od siebie greckie miasta-państwa?",
    "options": [
      "Filip II",
      "Perykles",
      "Leonidas",
      "Dariusz",
      "Sokrates",
      "Homer"
    ],
    "answer": 0,
    "image": "/img/r02_podboje_aleksandra_mapa.jpg",
    "explanation": "W drugiej połowie IV wieku p.n.e. Filip II podporządkował sobie greckie polis."
  },
  {
    "id": "R02_WOJ_08",
    "section": "Wojny i Aleksander",
    "type": "fill_in",
    "prompt": "Aleksander Wielki wyruszył na podbój Persji w roku __________ p.n.e. i dotarł aż do doliny __________.",
    "options": null,
    "answer": [
      "334",
      "Indusu"
    ],
    "altAnswers": [
      [
        "334",
        "334 roku"
      ],
      [
        "Indusu",
        "Indus"
      ]
    ],
    "image": "/img/r02_podboje_aleksandra_mapa.jpg",
    "explanation": "Aleksander w 334 roku p.n.e. rozpoczął wyprawę przeciw Persji, a jego wojska dotarły do doliny Indusu."
  },
  {
    "id": "R02_WOJ_09",
    "section": "Wojny i Aleksander",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Bitwa pod Salaminą",
      "Wyprawa Aleksandra Wielkiego na Persję",
      "Bitwa pod Maratonem",
      "Bitwa pod Termopilami",
      "Powstanie monarchii hellenistycznych"
    ],
    "answer": [
      "Bitwa pod Maratonem",
      "Bitwa pod Termopilami",
      "Bitwa pod Salaminą",
      "Wyprawa Aleksandra Wielkiego na Persję",
      "Powstanie monarchii hellenistycznych"
    ],
    "explanation": "Maraton to 490 rok p.n.e., Termopile i Salamina to 480 rok p.n.e., wyprawa Aleksandra zaczęła się w 334 roku p.n.e., a monarchie hellenistyczne powstały po jego śmierci."
  },
  {
    "id": "R02_WOJ_10",
    "section": "Wojny i Aleksander",
    "type": "match",
    "prompt": "Połącz pojęcie lub postać z opisem.",
    "options": null,
    "left": [
      "Persja",
      "Macedonia",
      "Aleksander Wielki",
      "monarchie hellenistyczne"
    ],
    "right": [
      "państwo zagrażające greckim polis w V wieku p.n.e.",
      "królestwo sąsiadujące z Grecją, rządzone przez Filipa II",
      "władca, który poprowadził Greków i Macedończyków przeciw Persji",
      "państwa powstałe po rozpadzie imperium Aleksandra"
    ],
    "answer": {
      "Persja": "państwo zagrażające greckim polis w V wieku p.n.e.",
      "Macedonia": "królestwo sąsiadujące z Grecją, rządzone przez Filipa II",
      "Aleksander Wielki": "władca, który poprowadził Greków i Macedończyków przeciw Persji",
      "monarchie hellenistyczne": "państwa powstałe po rozpadzie imperium Aleksandra"
    },
    "explanation": "Te pojęcia porządkują przejście od obrony Greków przed Persami do podbojów Aleksandra i świata hellenistycznego."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak Grecy według podręcznika określali 429 rok p.n.e., czyli rok śmierci Peryklesa?",
    "options": [
      "4 rok 87 olimpiady",
      "1 rok 1 olimpiady",
      "10 rok epoki Peryklesa",
      "rok bitwy pod Maratonem",
      "rok założenia Olimpii",
      "rok 334 przed Aleksandrem"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje przykład, że 429 rok p.n.e. określano jako 4 rok 87 olimpiady."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Perykles był wybierany na urząd stratega czternaście razy.",
    "options": null,
    "answer": true,
    "explanation": "Podpis w podręczniku informuje, że Peryklesa aż 14 razy wybierano na urząd stratega."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W ostracyzmie polityk uznany za zagrożenie dla demokracji musiał opuścić Ateny na __________ lat, ale nie tracił obywatelstwa ani __________.",
    "options": null,
    "answer": [
      "dziesięć",
      "majątku"
    ],
    "altAnswers": [
      [
        "dziesięć",
        "10",
        "dziesiec"
      ],
      [
        "majątku",
        "majatek"
      ]
    ],
    "image": "/img/r02_ostrakon_glosowanie.jpg",
    "explanation": "Ostracyzm oznaczał dziesięcioletnie wygnanie bez utraty obywatelstwa i majątku."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz autora z typem twórczości dramatycznej wymienionym w rozdziale.",
    "options": null,
    "left": [
      "Ajschylos",
      "Sofokles",
      "Eurypides",
      "Arystofanes"
    ],
    "right": [
      "autor tragedii",
      "autor tragedii",
      "autor tragedii",
      "twórca komedii"
    ],
    "answer": {
      "Ajschylos": "autor tragedii",
      "Sofokles": "autor tragedii",
      "Eurypides": "autor tragedii",
      "Arystofanes": "twórca komedii"
    },
    "explanation": "Ajschylos, Sofokles i Eurypides należeli do najsłynniejszych tragików, a Arystofanes był najwybitniejszym twórcą komedii."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje prawdziwe o metojkach w Atenach.",
    "options": [
      "byli cudzoziemcami osiadłymi w Atenach",
      "zajmowali się głównie kupiectwem lub rzemiosłem",
      "płacili podatki i służyli w wojsku",
      "mieli prawo głosować na zgromadzeniu",
      "mogli sprawować urzędy",
      "zawsze byli niewolnikami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Metojkowie mieszkali w Atenach, pracowali głównie w handlu lub rzemiośle, płacili podatki i służyli w wojsku, ale nie mieli obywatelstwa."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Gliniana skorupka, na której podczas ostracyzmu zapisywano imię polityka, to...",
    "options": null,
    "answer": "ostrakon",
    "altAnswers": [
      "ostrakon",
      "ostraka",
      "skorupka"
    ],
    "explanation": "Nazwa ostracyzm pochodzi od greckiego słowa ostrakon, oznaczającego skorupkę."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Pierwsze igrzyska w Olimpii",
      "Bitwa pod Maratonem",
      "Przybycie pierwszych greckich plemion",
      "Wyprawa Aleksandra na Persję"
    ],
    "answer": [
      "Przybycie pierwszych greckich plemion",
      "Pierwsze igrzyska w Olimpii",
      "Bitwa pod Maratonem",
      "Wyprawa Aleksandra na Persję"
    ],
    "explanation": "Kolejność to: około 2000 rok p.n.e., 776 rok p.n.e., 490 rok p.n.e. i 334 rok p.n.e."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń czyta o autorze z V wieku p.n.e., który opisał m.in. wojny Greków z Persami i jest nazywany ojcem historii. Kogo dotyczy opis?",
    "options": [
      "Herodota",
      "Tukidydesa",
      "Homera",
      "Sokratesa",
      "Myrona",
      "Pitagorasa"
    ],
    "answer": 0,
    "explanation": "Herodot tworzył w V wieku p.n.e., opisał wojny Greków z Persami i jest nazywany ojcem historii."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Według późniejszych wierzeń duchy dobrych i dzielnych ludzi trafiały na __________ __________.",
    "options": null,
    "answer": [
      "Pola",
      "Elizejskie"
    ],
    "altAnswers": [
      [
        "Pola",
        "pola"
      ],
      [
        "Elizejskie",
        "elizejskie"
      ]
    ],
    "explanation": "W późniejszej religii greckiej pojawiła się wiara w Pola Elizejskie jako szczęśliwe miejsce dla dobrych i dzielnych ludzi."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Perykles, Sokrates, Platon, Arystoteles.",
    "options": null,
    "answer": "Perykles",
    "explanation": "Sokrates, Platon i Arystoteles to filozofowie, a Perykles był ateńskim politykiem i strategiem."
  }
];

const KID_PROMPTS = {
  "R02_HEL_01": "Jaka była Grecja: górzysta czy równinna?",
  "R02_POL_01": "Co znaczy demokracja?",
  "R02_MIT_01": "Czy Grecy wierzyli w jednego boga, czy w wielu bogów?",
  "R02_IGR_02": "Co ile lat odbywały się igrzyska w Olimpii?",
  "R02_KUL_06": "Kto napisał Iliadę i Odyseję?",
  "R02_WOJ_01": "Gdzie Ateńczycy pokonali Persów w 490 roku p.n.e.?"
};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Starożytna Grecja",
  "icon": "🏺",
  "sectionOrder": [
    "Świat Hellenów",
    "Demokratyczne Ateny i Sparta",
    "Wierzenia i mitologia",
    "Teatr i igrzyska",
    "Nauka, literatura i sztuka",
    "Wojny i Aleksander",
    "Super trudne"
  ],
  "sectionIcons": {
    "Świat Hellenów": "🌊",
    "Demokratyczne Ateny i Sparta": "🏛️",
    "Wierzenia i mitologia": "⚡",
    "Teatr i igrzyska": "🏟️",
    "Nauka, literatura i sztuka": "📜",
    "Wojny i Aleksander": "🛡️",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
