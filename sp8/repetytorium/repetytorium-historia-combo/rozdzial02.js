// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POC  = Początki człowieka i cywilizacji
//   EGI  = Egipt i Mezopotamia
//   IZR  = Starożytny Izrael i chrześcijaństwo
//   GRE  = Starożytna Grecja
//   RZY  = Starożytny Rzym
//   DOK  = Dokonania Greków i Rzymian
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_POC_01",
    "section": "Początki człowieka i cywilizacji",
    "type": "single_choice",
    "prompt": "Na którym kontynencie pojawili się pierwsi ludzie?",
    "options": [
      "W Afryce",
      "W Azji",
      "W Europie",
      "W Ameryce Północnej",
      "W Ameryce Południowej",
      "W Australii"
    ],
    "answer": 0,
    "explanation": "Pierwsi ludzie pojawili się około 3 mln lat temu w Afryce Środkowej.",
    "image": "r02_obozowisko_praludzi.jpg"
  },
  {
    "id": "R02_POC_02",
    "section": "Początki człowieka i cywilizacji",
    "type": "multi_select",
    "prompt": "Zaznacz zajęcia i cechy życia ludzi pierwotnych przed rewolucją neolityczną.",
    "options": [
      "Zbieractwo",
      "Myślistwo",
      "Stała uprawa pól",
      "Koczowniczy tryb życia",
      "Hodowla udomowionych stad",
      "Zamieszkiwanie jaskiń i szałasów"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Pierwotni ludzie trudnili się zbieractwem i myślistwem, wędrowali za pożywieniem i korzystali z jaskiń lub szałasów."
  },
  {
    "id": "R02_POC_03",
    "section": "Początki człowieka i cywilizacji",
    "type": "true_false",
    "prompt": "Rewolucja neolityczna wiązała się z przejściem od koczowniczego do osiadłego trybu życia.",
    "options": null,
    "answer": true,
    "explanation": "Uprawa roślin i hodowla zwierząt pozwoliły ludziom pozostawać w jednym miejscu zamiast nieustannie szukać pożywienia.",
    "image": "r02_osada_neolityczna.jpg"
  },
  {
    "id": "R02_POC_04",
    "section": "Początki człowieka i cywilizacji",
    "type": "fill_in",
    "prompt": "Pierwsi ludzie pojawili się około __________ milionów lat temu w Afryce __________.",
    "options": null,
    "answer": [
      "3",
      "Środkowej"
    ],
    "explanation": "Początki człowieka datuje się orientacyjnie na około 3 mln lat temu; wiąże się je z Afryką Środkową.",
    "altAnswers": [
      [
        "3",
        "trzech"
      ],
      [
        "Środkowej",
        "środkowej"
      ]
    ]
  },
  {
    "id": "R02_POC_05",
    "section": "Początki człowieka i cywilizacji",
    "type": "riddle",
    "prompt": "Jak nazywa się tryb życia polegający na częstym przemieszczaniu się w poszukiwaniu pożywienia?",
    "options": null,
    "answer": "koczowniczy",
    "explanation": "Przed opanowaniem rolnictwa i hodowli ludzie prowadzili koczowniczy tryb życia.",
    "altAnswers": [
      "koczowniczy",
      "koczowniczy tryb życia",
      "koczownictwo"
    ],
    "image": "r02_obozowisko_praludzi.jpg"
  },
  {
    "id": "R02_POC_06",
    "section": "Początki człowieka i cywilizacji",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do przemian rewolucji neolitycznej: uprawa roślin, hodowla zwierząt, osiadły tryb życia, stałe wędrówki.",
    "options": null,
    "answer": "stałe wędrówki",
    "explanation": "Rewolucja neolityczna sprzyjała osiedlaniu się ludzi, a nie ich ciągłym wędrówkom."
  },
  {
    "id": "R02_POC_07",
    "section": "Początki człowieka i cywilizacji",
    "type": "scenario",
    "prompt": "Rodzina zaczęła uprawiać zboże i hodować zwierzęta. Zbudowała trwałe domostwo, bo nie musiała już podążać za stadami. Jaką przemianę ilustruje ta sytuacja?",
    "options": [
      "Rozwój łowiectwa",
      "Rewolucję neolityczną",
      "Powstanie republiki",
      "Rozwój politeizmu",
      "Początek demokracji ateńskiej",
      "Podział Cesarstwa Rzymskiego"
    ],
    "answer": 1,
    "explanation": "Przejście do rolnictwa, hodowli i osiadłego życia to istota rewolucji neolitycznej."
  },
  {
    "id": "R02_POC_08",
    "section": "Początki człowieka i cywilizacji",
    "type": "match",
    "prompt": "Połącz najstarsze cywilizacje z rzekami, nad którymi się rozwijały.",
    "options": null,
    "answer": {
      "Egipt": "Nil",
      "Mezopotamia": "Tygrys i Eufrat",
      "Indie": "Indus",
      "Chiny": "Huang He"
    },
    "explanation": "Pierwsze cywilizacje rozwijały się w dolinach dużych rzek dzięki wodzie, żyznym glebom i warunkom do uprawy.",
    "left": [
      "Egipt",
      "Mezopotamia",
      "Indie",
      "Chiny"
    ],
    "right": [
      "Indus",
      "Huang He",
      "Nil",
      "Tygrys i Eufrat"
    ],
    "image": "r02_dolina_wielkiej_rzeki.jpg"
  },
  {
    "id": "R02_POC_09",
    "section": "Początki człowieka i cywilizacji",
    "type": "sort",
    "prompt": "Podziel zjawiska na charakterystyczne dla okresu przed rewolucją neolityczną i po niej.",
    "options": null,
    "answer": {
      "Przed rewolucją neolityczną": [
        "zbieractwo",
        "myślistwo",
        "koczowniczy tryb życia"
      ],
      "Po rewolucji neolitycznej": [
        "uprawa roślin",
        "hodowla zwierząt",
        "osiadły tryb życia"
      ]
    },
    "explanation": "Przed przemianą dominowały zbieractwo i łowiectwo, a potem rolnictwo oraz hodowla umożliwiły stałe osadnictwo.",
    "items": [
      "osiadły tryb życia",
      "myślistwo",
      "hodowla zwierząt",
      "zbieractwo",
      "uprawa roślin",
      "koczowniczy tryb życia"
    ],
    "categories": [
      "Przed rewolucją neolityczną",
      "Po rewolucji neolitycznej"
    ],
    "image": "r02_osada_neolityczna.jpg"
  },
  {
    "id": "R02_POC_10",
    "section": "Początki człowieka i cywilizacji",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia rozwoju pierwszych cywilizacji od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Początek rewolucji neolitycznej na Bliskim Wschodzie",
      "Powstanie Jerycha",
      "Rozwój pierwszych państw w Mezopotamii",
      "Powstanie państwa egipskiego"
    ],
    "explanation": "Rewolucję neolityczną datuje się na około 9000 r. p.n.e., początki Jerycha na około 8000 r. p.n.e., pierwsze państwa na IV tysiąclecie p.n.e., a państwo egipskie na około 3000 r. p.n.e.",
    "items": [
      "Powstanie państwa egipskiego",
      "Powstanie Jerycha",
      "Rozwój pierwszych państw w Mezopotamii",
      "Początek rewolucji neolitycznej na Bliskim Wschodzie"
    ]
  },
  {
    "id": "R02_EGI_01",
    "section": "Egipt i Mezopotamia",
    "type": "single_choice",
    "prompt": "Która rzeka umożliwiła rozwój starożytnego Egiptu?",
    "options": [
      "Eufrat",
      "Tygrys",
      "Nil",
      "Indus",
      "Ganges",
      "Huang He"
    ],
    "answer": 2,
    "explanation": "Nil wylewał, zapewniając wodę i żyzny muł, dlatego Egipt określano jako dar Nilu.",
    "image": "r02_kanaly_nawadniajace.jpg"
  },
  {
    "id": "R02_EGI_02",
    "section": "Egipt i Mezopotamia",
    "type": "multi_select",
    "prompt": "Zaznacz zadania wykonywane przez urzędników w państwie faraonów.",
    "options": [
      "Ściąganie podatków",
      "Nadzór nad kanałami",
      "Składanie ofiar jako główne zadanie",
      "Nadzorowanie budowy piramid",
      "Wykonywanie rozkazów faraona",
      "Orzekanie o losach zmarłych"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Urzędnicy realizowali polecenia władcy, ściągali podatki, opiekowali się kanałami i nadzorowali wielkie przedsięwzięcia budowlane."
  },
  {
    "id": "R02_EGI_03",
    "section": "Egipt i Mezopotamia",
    "type": "true_false",
    "prompt": "W starożytnym Egipcie władza faraona była ograniczana przez głosowanie wszystkich mieszkańców.",
    "options": null,
    "answer": false,
    "explanation": "Egipt był monarchią, a faraon miał nieograniczoną władzę i poddani musieli wykonywać jego rozkazy."
  },
  {
    "id": "R02_EGI_04",
    "section": "Egipt i Mezopotamia",
    "type": "fill_in",
    "prompt": "Starożytny Egipt był __________, a jego władca nosił tytuł __________.",
    "options": null,
    "answer": [
      "monarchią",
      "faraona"
    ],
    "explanation": "Starożytny Egipt był monarchią, na której czele stał faraon.",
    "altAnswers": [
      [
        "monarchią",
        "monarchia"
      ],
      [
        "faraona",
        "faraon"
      ]
    ]
  },
  {
    "id": "R02_EGI_05",
    "section": "Egipt i Mezopotamia",
    "type": "riddle",
    "prompt": "Jak nazywano w starożytnym Egipcie osoby duchowne opiekujące się świątyniami i składające ofiary bogom?",
    "options": null,
    "answer": "kapłani",
    "explanation": "Kapłani sprawowali obrzędy religijne i pełnili też rolę doradców faraona.",
    "altAnswers": [
      "kapłani",
      "kapłanów",
      "kapłan"
    ]
  },
  {
    "id": "R02_EGI_06",
    "section": "Egipt i Mezopotamia",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie była bogiem egipskim: Re, Ozyrys, Anubis, Posejdon.",
    "options": null,
    "answer": "Posejdon",
    "explanation": "Re, Ozyrys i Anubis to bogowie egipscy; Posejdon występuje w wierzeniach greckich.",
    "image": "r02_bogowie_egiptu.jpg"
  },
  {
    "id": "R02_EGI_07",
    "section": "Egipt i Mezopotamia",
    "type": "scenario",
    "prompt": "Po wylewie rzeki mieszkańcy osady chcą kierować wodę na dalsze pola. Budują kanały, wspólnie je czyszczą i naprawiają. Jaki system opisano?",
    "options": [
      "System nawadniający",
      "Szlak karawanowy",
      "System dróg bitych",
      "Szlak morski",
      "System akweduktów rzymskich",
      "System obronnych wałów miejskich"
    ],
    "answer": 0,
    "explanation": "Rozbudowane systemy kanałów służyły nawadnianiu pól i wymagały zorganizowanej pracy.",
    "image": "r02_kanaly_nawadniajace.jpg"
  },
  {
    "id": "R02_EGI_08",
    "section": "Egipt i Mezopotamia",
    "type": "match",
    "prompt": "Połącz egipskiego boga z dziedziną, której patronował.",
    "options": null,
    "answer": {
      "Re": "Słońce oraz niebo i Ziemia",
      "Ozyrys": "Sądzenie zmarłych",
      "Anubis": "Prowadzenie zmarłych do zaświatów",
      "Izyda": "Życie i rodzina"
    },
    "explanation": "Re był bogiem Słońca, Ozyrys sądził zmarłych, Anubis ich prowadził, a Izyda opiekowała się rodziną.",
    "left": [
      "Re",
      "Ozyrys",
      "Anubis",
      "Izyda"
    ],
    "right": [
      "Życie i rodzina",
      "Prowadzenie zmarłych do zaświatów",
      "Słońce oraz niebo i Ziemia",
      "Sądzenie zmarłych"
    ],
    "image": "r02_bogowie_egiptu.jpg"
  },
  {
    "id": "R02_EGI_09",
    "section": "Egipt i Mezopotamia",
    "type": "sort",
    "prompt": "Przydziel grupy społeczne starożytnego Egiptu do ich głównych funkcji.",
    "options": null,
    "answer": {
      "Rządzenie i kult": [
        "faraon",
        "kapłani",
        "urzędnicy"
      ],
      "Produkcja rolna i rzemiosło": [
        "chłopi",
        "rzemieślnicy"
      ],
      "Handel": [
        "kupcy"
      ],
      "Służba zależna": [
        "niewolnicy"
      ]
    },
    "explanation": "W Egipcie istniał podział obowiązków i pozycji społecznej między siedem wymienionych grup.",
    "items": [
      "rzemieślnicy",
      "kapłani",
      "niewolnicy",
      "faraon",
      "kupcy",
      "chłopi",
      "urzędnicy"
    ],
    "categories": [
      "Rządzenie i kult",
      "Produkcja rolna i rzemiosło",
      "Handel",
      "Służba zależna"
    ]
  },
  {
    "id": "R02_EGI_10",
    "section": "Egipt i Mezopotamia",
    "type": "single_choice",
    "prompt": "Dlaczego Egipt nazywano „darem Nilu”?",
    "options": [
      "Ponieważ Nil rozdzielał Grecję na polis",
      "Ponieważ Nil był drogą do Chin",
      "Ponieważ Nil dostarczał żelazo",
      "Ponieważ Nil zastąpił wszystkie kanały",
      "Ponieważ Nil nawadniał i użyźniał pola",
      "Ponieważ Nil stanowił granicę państwa rzymskiego"
    ],
    "answer": 4,
    "explanation": "Wylewy Nilu zapewniały wodę i żyzny muł, dzięki którym rozwijało się rolnictwo."
  },
  {
    "id": "R02_IZR_01",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "single_choice",
    "prompt": "Jak nazywa się wiara w jednego boga, charakterystyczna dla judaizmu i chrześcijaństwa?",
    "options": [
      "Politeizm",
      "Monoteizm",
      "Panteon",
      "Kult herosów",
      "Mitologia",
      "Religia olimpijska"
    ],
    "answer": 1,
    "explanation": "Judaizm i chrześcijaństwo są religiami monoteistycznymi."
  },
  {
    "id": "R02_IZR_02",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o dziejach Izraelitów.",
    "options": [
      "Izraelici nazywani są także Żydami",
      "Wywodzili się z miasta Rzym",
      "Początkowo zajmowali się pasterstwem",
      "Pod wodzą Mojżesza opuścili Egipt",
      "Od początku mieszkali wyłącznie w Atenach",
      "Założyli Królestwo Izraela"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Izraelici przybyli z Mezopotamii, byli pasterzami, pod wodzą Mojżesza opuścili Egipt i stworzyli własne państwo.",
    "image": "r02_wedrowka_izraelitow.jpg"
  },
  {
    "id": "R02_IZR_03",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "true_false",
    "prompt": "Wszyscy Żydzi uznali Jezusa za zapowiadanego Mesjasza.",
    "options": null,
    "answer": false,
    "explanation": "Jezus przedstawiał się jako oczekiwany Mesjasz, lecz nie wszyscy Żydzi uznali go za Mesjasza.",
    "image": "r02_poczatki_chrzescijanstwa.jpg"
  },
  {
    "id": "R02_IZR_04",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "fill_in",
    "prompt": "Izraelici opuścili Egipt pod wodzą __________, a ich własne państwo nazywało się Królestwem __________.",
    "options": null,
    "answer": [
      "Mojżesza",
      "Izraela"
    ],
    "explanation": "Opis dziejów Izraelitów łączy wyjście z Egiptu z Mojżeszem i powstaniem Królestwa Izraela.",
    "altAnswers": [
      [
        "Mojżesza",
        "Mojżesz"
      ],
      [
        "Izraela",
        "Izrael"
      ]
    ]
  },
  {
    "id": "R02_IZR_05",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "riddle",
    "prompt": "Jak nazywano oczekiwanego przez Żydów wybawcę, który miał wyzwolić ich spod obcego panowania?",
    "options": null,
    "answer": "Mesjasz",
    "explanation": "Po utracie własnego państwa Żydzi oczekiwali Mesjasza.",
    "altAnswers": [
      "Mesjasz",
      "Mesjasza",
      "mesjasz"
    ]
  },
  {
    "id": "R02_IZR_06",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niezwiązaną z dziejami Izraelitów ani początkami chrześcijaństwa: Mojżesz, Dawid, Salomon, Hefajstos.",
    "options": null,
    "answer": "Hefajstos",
    "explanation": "Mojżesz, Dawid i Salomon to postacie dziejów Izraela, a Hefajstos był bogiem greckim."
  },
  {
    "id": "R02_IZR_07",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "scenario",
    "prompt": "W starożytnym mieście spotykasz wspólnotę wierzącą w jednego, wszechmocnego Boga, uznającą się za lud wybrany i oczekującą Mesjasza. Jaka to religia?",
    "options": [
      "Judaizm",
      "Kult bogów olimpijskich",
      "Religia starożytnego Egiptu",
      "Kult bogów Rzymu",
      "Religia starożytnej Mezopotamii",
      "Kult herosów greckich"
    ],
    "answer": 0,
    "explanation": "Opis wierzeń o jednym Bogu, ludzie wybranym i oczekiwanym Mesjaszu odnosi się do judaizmu."
  },
  {
    "id": "R02_IZR_08",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "match",
    "prompt": "Połącz postać z rolą opisaną w dziejach Izraela i chrześcijaństwa.",
    "options": null,
    "answer": {
      "Mojżesz": "Przywódca wyjścia Izraelitów z Egiptu",
      "Dawid": "Król Izraela przed Salomonem",
      "Salomon": "Król Izraela po Dawidzie",
      "Jezus": "Nauczyciel związany z powstaniem chrześcijaństwa"
    },
    "explanation": "Mojżesz poprowadził Izraelitów z Egiptu; Dawid i Salomon byli królami Izraela, a nauczanie Jezusa dało początek chrześcijaństwu.",
    "left": [
      "Mojżesz",
      "Dawid",
      "Salomon",
      "Jezus"
    ],
    "right": [
      "Król Izraela po Dawidzie",
      "Nauczyciel związany z powstaniem chrześcijaństwa",
      "Przywódca wyjścia Izraelitów z Egiptu",
      "Król Izraela przed Salomonem"
    ]
  },
  {
    "id": "R02_IZR_09",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "sort",
    "prompt": "Przyporządkuj religie do monoteizmu lub politeizmu.",
    "options": null,
    "answer": {
      "Monoteizm": [
        "judaizm",
        "chrześcijaństwo"
      ],
      "Politeizm": [
        "religia starożytnego Egiptu",
        "religia starożytnych Greków",
        "religia dawnych Rzymian"
      ]
    },
    "explanation": "Monoteizm to wiara w jednego Boga; politeizm oznacza wiarę w wielu bogów.",
    "items": [
      "religia starożytnych Greków",
      "chrześcijaństwo",
      "religia dawnych Rzymian",
      "judaizm",
      "religia starożytnego Egiptu"
    ],
    "categories": [
      "Monoteizm",
      "Politeizm"
    ]
  },
  {
    "id": "R02_IZR_10",
    "section": "Starożytny Izrael i chrześcijaństwo",
    "type": "sequence",
    "prompt": "Uszereguj wydarzenia z dziejów Izraelitów od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Wyjście Izraelitów z Egiptu",
      "Panowanie Dawida i Salomona",
      "Zależność Izraela od Asyrii",
      "Niewola babilońska Żydów"
    ],
    "explanation": "Wyjście Izraelitów z Egiptu poprzedzało panowanie królów, a następnie zależność od Asyrii i niewolę babilońską.",
    "items": [
      "Niewola babilońska Żydów",
      "Wyjście Izraelitów z Egiptu",
      "Zależność Izraela od Asyrii",
      "Panowanie Dawida i Salomona"
    ],
    "image": "r02_wedrowka_izraelitow.jpg"
  },
  {
    "id": "R02_GRE_01",
    "section": "Starożytna Grecja",
    "type": "single_choice",
    "prompt": "Jak Grecy nazywali swoje państwa-miasta?",
    "options": [
      "Prowincje",
      "Imperia",
      "Polis",
      "Monarchie",
      "Prefektury",
      "Królestwa"
    ],
    "answer": 2,
    "explanation": "W starożytnej Grecji istniało wiele niewielkich polis, z których najsłynniejsze były Ateny."
  },
  {
    "id": "R02_GRE_02",
    "section": "Starożytna Grecja",
    "type": "multi_select",
    "prompt": "Zaznacz instytucje i czynności związane z demokracją ateńską w V wieku p.n.e.",
    "options": [
      "Zgromadzenie Ludowe podejmowało decyzje w głosowaniu",
      "Faraon samodzielnie uchwalał prawa Aten",
      "Rada Pięciuset przygotowywała projekty uchwał",
      "Trybunał Ludowy rozstrzygał spory",
      "Niewolnicy stanowili wszystkich obywateli",
      "Urzędnicy wdrażali uchwały Zgromadzenia Ludowego"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Zgromadzenie Ludowe głosowało uchwały, Rada Pięciuset przygotowywała projekty uchwał, Trybunał rozstrzygał spory, a urzędnicy wykonywali decyzje.",
    "image": "r02_atenska_agora.jpg"
  },
  {
    "id": "R02_GRE_03",
    "section": "Starożytna Grecja",
    "type": "true_false",
    "prompt": "W demokracji ateńskiej z V wieku p.n.e. obywatelami byli wszyscy mieszkańcy Aten bez wyjątku.",
    "options": null,
    "answer": false,
    "explanation": "Z praw obywatelskich korzystali dorośli mężczyźni będący Ateńczykami; nie mieli ich niewolnicy, cudzoziemcy oraz żony i dzieci obywateli."
  },
  {
    "id": "R02_GRE_04",
    "section": "Starożytna Grecja",
    "type": "fill_in",
    "prompt": "Grecy nazywali siebie __________, a swoją krainę __________.",
    "options": null,
    "answer": [
      "Hellenami",
      "Helladą"
    ],
    "explanation": "Starożytni Grecy nazywali siebie Hellenami, a swój kraj Helladą.",
    "altAnswers": [
      [
        "Hellenami",
        "Hellenowie",
        "Hellenów"
      ],
      [
        "Helladą",
        "Hellada"
      ]
    ]
  },
  {
    "id": "R02_GRE_05",
    "section": "Starożytna Grecja",
    "type": "riddle",
    "prompt": "Jak nazywamy ogół bogów greckich wspólnie czczonych przez Hellenów?",
    "options": null,
    "answer": "panteon",
    "explanation": "Panteon to zbiorcze określenie bogów greckich; opowieści o bogach i herosach nazywano mitami.",
    "altAnswers": [
      "panteon",
      "panteon grecki"
    ],
    "image": "r02_olimp_bogowie_greccy.jpg"
  },
  {
    "id": "R02_GRE_06",
    "section": "Starożytna Grecja",
    "type": "odd_one_out",
    "prompt": "Wskaż postać nienależącą do greckiego panteonu: Zeus, Hera, Atena, Anubis.",
    "options": null,
    "answer": "Anubis",
    "explanation": "Zeus, Hera i Atena są bogami greckimi, a Anubis jest bogiem egipskim.",
    "image": "r02_olimp_bogowie_greccy.jpg"
  },
  {
    "id": "R02_GRE_07",
    "section": "Starożytna Grecja",
    "type": "scenario",
    "prompt": "Grecki żeglarz prosi bóstwo o spokojne morze. Wyobraża je sobie z trójzębem, którym może wzburzać i uciszać fale. Do kogo się modli?",
    "options": [
      "Zeus",
      "Posejdon",
      "Hades",
      "Ares",
      "Hermes",
      "Apollo"
    ],
    "answer": 1,
    "explanation": "Posejdon był greckim władcą mórz i oceanów, a jego atrybutem był trójząb."
  },
  {
    "id": "R02_GRE_08",
    "section": "Starożytna Grecja",
    "type": "match",
    "prompt": "Połącz greckiego boga z jego charakterystycznym atrybutem.",
    "options": null,
    "answer": {
      "Zeus": "Błyskawice",
      "Atena": "Hełm i włócznia",
      "Hermes": "Uskrzydlone sandały",
      "Apollo": "Lira"
    },
    "explanation": "Bogowie greccy mieli charakterystyczne atrybuty, dzięki którym można było rozpoznać ich w sztuce.",
    "left": [
      "Zeus",
      "Atena",
      "Hermes",
      "Apollo"
    ],
    "right": [
      "Lira",
      "Uskrzydlone sandały",
      "Błyskawice",
      "Hełm i włócznia"
    ]
  },
  {
    "id": "R02_GRE_09",
    "section": "Starożytna Grecja",
    "type": "sort",
    "prompt": "Podziel mieszkańców Aten według prawa do uczestnictwa w demokracji ateńskiej V wieku p.n.e.",
    "options": null,
    "answer": {
      "Obywatele": [
        "dorośli mężczyźni będący Ateńczykami"
      ],
      "Bez praw obywatelskich": [
        "niewolnicy",
        "obcokrajowcy",
        "żony obywateli",
        "dzieci obywateli"
      ]
    },
    "explanation": "W Atenach udział we władzy przysługiwał ograniczonej grupie dorosłych mężczyzn posiadających obywatelstwo.",
    "items": [
      "obcokrajowcy",
      "dorośli mężczyźni będący Ateńczykami",
      "żony obywateli",
      "niewolnicy",
      "dzieci obywateli"
    ],
    "categories": [
      "Obywatele",
      "Bez praw obywatelskich"
    ],
    "image": "r02_atenska_agora.jpg"
  },
  {
    "id": "R02_GRE_10",
    "section": "Starożytna Grecja",
    "type": "single_choice",
    "prompt": "Która ateńska instytucja przygotowywała projekty uchwał i zarządzała finansami państwa?",
    "options": [
      "Trybunał Ludowy",
      "Rada kapłanów",
      "Sąd faraona",
      "Rada Pięciuset",
      "Senat Cesarstwa Rzymskiego",
      "Zgromadzenie Niewolników"
    ],
    "answer": 3,
    "explanation": "Na schemacie ustroju Aten te zadania przypisano Radzie Pięciuset."
  },
  {
    "id": "R02_RZY_01",
    "section": "Starożytny Rzym",
    "type": "single_choice",
    "prompt": "W którym roku, zgodnie z tradycją o Romulusie i Remusie, założono Rzym?",
    "options": [
      "508 p.n.e.",
      "31 p.n.e.",
      "395 n.e.",
      "476 n.e.",
      "753 p.n.e.",
      "3000 p.n.e."
    ],
    "answer": 4,
    "explanation": "Tradycyjna data założenia Rzymu to 753 r. p.n.e.; wiąże się z legendą o Romulusie i Remusie.",
    "image": "r02_forum_rzymskie.jpg"
  },
  {
    "id": "R02_RZY_02",
    "section": "Starożytny Rzym",
    "type": "multi_select",
    "prompt": "Wybierz cechy państwa rzymskiego.",
    "options": [
      "Początkowo był państwem-miastem",
      "Powstał w dolinie Indusu",
      "Rozszerzał granice przez podboje",
      "Przez cały czas pozostawał republiką",
      "Stał się imperium wokół Morza Śródziemnego",
      "Na początku rządzili w nim królowie"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Rzym rozpoczął jako państwo-miasto, zdobywał nowe ziemie i stał się imperium wokół Morza Śródziemnego; początkowo był monarchią."
  },
  {
    "id": "R02_RZY_03",
    "section": "Starożytny Rzym",
    "type": "true_false",
    "prompt": "W 395 roku Cesarstwo Rzymskie zostało podzielone na część zachodnią i wschodnią.",
    "options": null,
    "answer": true,
    "explanation": "Część zachodnia miała stolicę w Rzymie, a wschodnia w Konstantynopolu.",
    "image": "r02_podzial_imperium.jpg"
  },
  {
    "id": "R02_RZY_04",
    "section": "Starożytny Rzym",
    "type": "fill_in",
    "prompt": "Cesarstwo Zachodniorzymskie upadło w roku __________, a stolica Cesarstwa Wschodniorzymskiego mieściła się w __________.",
    "options": null,
    "answer": [
      "476",
      "Konstantynopolu"
    ],
    "explanation": "Podział cesarstwa nastąpił w 395 roku, a zachodnia część upadła w 476 roku.",
    "altAnswers": [
      [
        "476",
        "476 r.",
        "476 n.e."
      ],
      [
        "Konstantynopolu",
        "Konstantynopol"
      ]
    ]
  },
  {
    "id": "R02_RZY_05",
    "section": "Starożytny Rzym",
    "type": "riddle",
    "prompt": "Jak nazywał się ustrój Rzymu po obaleniu monarchii, gdy władza należała do ogółu obywateli?",
    "options": null,
    "answer": "republika",
    "explanation": "Rzym przeszedł od królestwa do republiki, a następnie do cesarstwa.",
    "altAnswers": [
      "republika",
      "republiką"
    ],
    "image": "r02_forum_rzymskie.jpg"
  },
  {
    "id": "R02_RZY_06",
    "section": "Starożytny Rzym",
    "type": "odd_one_out",
    "prompt": "Wskaż boga, który nie był bóstwem rzymskim: Jowisz, Mars, Merkury, Ozyrys.",
    "options": null,
    "answer": "Ozyrys",
    "explanation": "Jowisz, Mars i Merkury to rzymskie odpowiedniki greckich bogów, natomiast Ozyrys był bogiem Egipcjan."
  },
  {
    "id": "R02_RZY_07",
    "section": "Starożytny Rzym",
    "type": "scenario",
    "prompt": "Wyobraź sobie obywatela Rzymu, który żył w czasach, gdy skończyła się republika, a władzę sprawował jeden człowiek noszący tytuł cesarza. Jaki ustrój zapanował?",
    "options": [
      "Demokracja ateńska",
      "Monarchia faraonów",
      "Cesarstwo",
      "Wspólnota polis",
      "Państwo-miasto bez władcy",
      "Królestwo Izraela"
    ],
    "answer": 2,
    "explanation": "Za koniec republiki rzymskiej przyjmuje się 31 rok p.n.e., po którym umacniał się ustrój cesarski."
  },
  {
    "id": "R02_RZY_08",
    "section": "Starożytny Rzym",
    "type": "match",
    "prompt": "Dopasuj greckie imiona bogów do rzymskich odpowiedników.",
    "options": null,
    "answer": {
      "Zeus": "Jowisz",
      "Ares": "Mars",
      "Afrodyta": "Wenus",
      "Posejdon": "Neptun"
    },
    "explanation": "Rzymianie czcili wielu bogów podobnych do greckich, nadając im inne imiona.",
    "left": [
      "Zeus",
      "Ares",
      "Afrodyta",
      "Posejdon"
    ],
    "right": [
      "Neptun",
      "Wenus",
      "Mars",
      "Jowisz"
    ]
  },
  {
    "id": "R02_RZY_09",
    "section": "Starożytny Rzym",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia dotyczące Rzymu do ustroju państwa lub religii.",
    "options": null,
    "answer": {
      "Ustrój polityczny": [
        "królestwo",
        "republika",
        "cesarstwo"
      ],
      "Religia": [
        "politeizm",
        "chrześcijaństwo"
      ]
    },
    "explanation": "Rzym zmieniał formę rządów, a w dziejach jego wierzeń politeizm ustąpił miejsca chrześcijaństwu.",
    "items": [
      "chrześcijaństwo",
      "cesarstwo",
      "królestwo",
      "politeizm",
      "republika"
    ],
    "categories": [
      "Ustrój polityczny",
      "Religia"
    ]
  },
  {
    "id": "R02_RZY_10",
    "section": "Starożytny Rzym",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów państwa rzymskiego chronologicznie.",
    "options": null,
    "answer": [
      "Tradycyjna data założenia Rzymu",
      "Początek republiki rzymskiej",
      "Koniec republiki i początek cesarstwa",
      "Podział Cesarstwa Rzymskiego",
      "Upadek Cesarstwa Zachodniorzymskiego"
    ],
    "explanation": "Oś czasu wskazuje kolejno: 753 r. p.n.e., 508 r. p.n.e., 31 r. p.n.e., 395 r. n.e. i 476 r. n.e.",
    "items": [
      "Podział Cesarstwa Rzymskiego",
      "Tradycyjna data założenia Rzymu",
      "Upadek Cesarstwa Zachodniorzymskiego",
      "Początek republiki rzymskiej",
      "Koniec republiki i początek cesarstwa"
    ]
  },
  {
    "id": "R02_DOK_01",
    "section": "Dokonania Greków i Rzymian",
    "type": "single_choice",
    "prompt": "Kto jest nazywany ojcem medycyny?",
    "options": [
      "Hipokratesa",
      "Archimedesa",
      "Pitagorasa",
      "Euklidesa",
      "Herodota",
      "Platona"
    ],
    "answer": 0,
    "explanation": "Hipokrates formułował zalecenia dotyczące zdrowia oraz zasadę, by lekarz przede wszystkim nie szkodził pacjentowi."
  },
  {
    "id": "R02_DOK_02",
    "section": "Dokonania Greków i Rzymian",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia starożytnych Greków.",
    "options": [
      "Filozofia",
      "Teatr z komedią i tragedią",
      "Prawo rzymskie",
      "Igrzyska olimpijskie",
      "Akwedukty",
      "Style architektoniczne"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Grecy rozwinęli filozofię, teatr, igrzyska olimpijskie i charakterystyczne style architektury; akwedukty i prawo rzymskie omówiono jako osiągnięcia Rzymian.",
    "image": "r02_teatr_grecki.jpg"
  },
  {
    "id": "R02_DOK_03",
    "section": "Dokonania Greków i Rzymian",
    "type": "true_false",
    "prompt": "Prawo rzymskie wywarło wpływ na współczesne systemy prawne.",
    "options": null,
    "answer": true,
    "explanation": "Rzymskie normy prawne stanowią podstawę wielu późniejszych rozwiązań prawnych.",
    "image": "r02_budowle_rzymskie.jpg"
  },
  {
    "id": "R02_DOK_04",
    "section": "Dokonania Greków i Rzymian",
    "type": "fill_in",
    "prompt": "Z zasadą \"przede wszystkim nie szkodzić\" wiąże się przysięga __________, a starożytną wiedzę z geometrii opracowywał __________.",
    "options": null,
    "answer": [
      "Hipokratesa",
      "Euklides"
    ],
    "explanation": "Hipokrates był lekarzem, a Euklides zajmował się geometrią.",
    "altAnswers": [
      [
        "Hipokratesa",
        "Hipokrates"
      ],
      [
        "Euklides",
        "Euklidesa"
      ]
    ]
  },
  {
    "id": "R02_DOK_05",
    "section": "Dokonania Greków i Rzymian",
    "type": "riddle",
    "prompt": "Jak nazywano w starożytnym Rzymie budowlę doprowadzającą wodę do miasta z odległego ujęcia?",
    "options": null,
    "answer": "akwedukt",
    "explanation": "Akwedukty należały do ważnych rzymskich budowli użyteczności publicznej.",
    "altAnswers": [
      "akwedukt",
      "akwedukty"
    ]
  },
  {
    "id": "R02_DOK_06",
    "section": "Dokonania Greków i Rzymian",
    "type": "odd_one_out",
    "prompt": "Wskaż konkurencję, która nie należała do dyscyplin starożytnych igrzysk olimpijskich: biegi, zapasy, skok w dal, pływanie.",
    "options": null,
    "answer": "pływanie",
    "explanation": "Na starożytnych igrzyskach rywalizowano między innymi w biegach, zapasach, skoku w dal oraz rzutach oszczepem i dyskiem, lecz nie w pływaniu."
  },
  {
    "id": "R02_DOK_07",
    "section": "Dokonania Greków i Rzymian",
    "type": "scenario",
    "prompt": "Lekarz zaleca ruch, właściwą dietę i masaż, a przed podjęciem leczenia przypomina sobie zasadę, aby przede wszystkim nie szkodzić. Do tradycji którego uczonego nawiązuje?",
    "options": [
      "Pitagorasa",
      "Hipokratesa",
      "Euklidesa",
      "Archimedesa",
      "Zeusa",
      "Apollina"
    ],
    "answer": 1,
    "explanation": "Hipokratesowi przypisuje się te poglądy oraz zasadę etyczną dotyczącą postępowania lekarzy."
  },
  {
    "id": "R02_DOK_08",
    "section": "Dokonania Greków i Rzymian",
    "type": "match",
    "prompt": "Połącz greckiego uczonego z jego dziedziną lub dokonaniem.",
    "options": null,
    "answer": {
      "Hipokrates": "Medycyna i etyka lekarza",
      "Archimedes": "Prawo wyporu w cieczy",
      "Euklides": "Uporządkowanie wiedzy geometrycznej",
      "Pitagoras": "Szkoła pitagorejska"
    },
    "explanation": "Dorobek tych czterech uczonych obejmuje medycynę, fizykę i matematykę.",
    "left": [
      "Hipokrates",
      "Archimedes",
      "Euklides",
      "Pitagoras"
    ],
    "right": [
      "Szkoła pitagorejska",
      "Prawo wyporu w cieczy",
      "Medycyna i etyka lekarza",
      "Uporządkowanie wiedzy geometrycznej"
    ]
  },
  {
    "id": "R02_DOK_09",
    "section": "Dokonania Greków i Rzymian",
    "type": "sort",
    "prompt": "Podziel osiągnięcia na greckie i rzymskie.",
    "options": null,
    "answer": {
      "Grecy": [
        "filozofia",
        "teatr z tragedią i komedią",
        "igrzyska olimpijskie",
        "szkoła pitagorejska"
      ],
      "Rzymianie": [
        "prawo rzymskie",
        "akwedukty",
        "drogi bite",
        "alfabet łaciński"
      ]
    },
    "explanation": "Grecy rozwijali naukę, kulturę i sport, a Rzymianie wnieśli istotny wkład w prawo i infrastrukturę.",
    "items": [
      "prawo rzymskie",
      "teatr z tragedią i komedią",
      "alfabet łaciński",
      "filozofia",
      "drogi bite",
      "igrzyska olimpijskie",
      "akwedukty",
      "szkoła pitagorejska"
    ],
    "categories": [
      "Grecy",
      "Rzymianie"
    ],
    "image": "r02_teatr_grecki.jpg"
  },
  {
    "id": "R02_DOK_10",
    "section": "Dokonania Greków i Rzymian",
    "type": "single_choice",
    "prompt": "Jaki rodzaj budowli rzymskich był przeznaczony na walki gladiatorów?",
    "options": [
      "Akwedukty",
      "Termy",
      "Amfiteatry",
      "Bazyliki",
      "Łuki triumfalne",
      "Kolumny pamiątkowe"
    ],
    "answer": 2,
    "explanation": "Walki gladiatorów odbywały się w amfiteatrach, czyli otwartych budowlach z areną.",
    "image": "r02_budowle_rzymskie.jpg"
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz cywilizację z jej wynalazkiem lub sposobem zapisu.",
    "options": null,
    "answer": {
      "Mezopotamia": "Pismo klinowe",
      "Egipt": "Hieroglify",
      "Indie": "Cyfry zwane arabskimi i system dziesiętny",
      "Chiny": "Papier"
    },
    "explanation": "Poszczególne wynalazki i sposoby zapisu wiążą się z Mezopotamią, Egiptem, Indiami lub Chinami.",
    "left": [
      "Mezopotamia",
      "Egipt",
      "Indie",
      "Chiny"
    ],
    "right": [
      "Hieroglify",
      "Papier",
      "Pismo klinowe",
      "Cyfry zwane arabskimi i system dziesiętny"
    ]
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około którego tysiąclecia p.n.e. rozpoczęła się na Bliskim Wschodzie rewolucja neolityczna?",
    "options": [
      "XII tysiąclecia p.n.e.",
      "X tysiąclecia p.n.e.",
      "VIII tysiąclecia p.n.e.",
      "VI tysiąclecia p.n.e.",
      "IV tysiąclecia p.n.e.",
      "II tysiąclecia p.n.e."
    ],
    "answer": 1,
    "explanation": "Początki rolnictwa, hodowli i osadnictwa na Bliskim Wschodzie datuje się na około 9000 r. p.n.e."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W starożytnym Egipcie wyżsi urzędnicy nadzorowali budowę __________ i __________.",
    "options": null,
    "answer": [
      "świątyń",
      "piramid"
    ],
    "explanation": "Wyżsi urzędnicy byli doradcami faraona i zajmowali się m.in. organizacją handlu oraz nadzorem nad budową świątyń i piramid.",
    "altAnswers": [
      [
        "świątyń",
        "świątyni"
      ],
      [
        "piramid",
        "piramidy"
      ]
    ]
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż parę, która nie łączy greckiego bóstwa z jego rzymskim odpowiednikiem: Zeus–Jowisz, Ares–Mars, Posejdon–Neptun, Hermes–Hades.",
    "options": null,
    "answer": "Hermes–Hades",
    "explanation": "Hermes i Hades to dwaj różni bogowie greccy; rzymskim odpowiednikiem Hermesa był Merkury."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia historyczne od najstarszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Powstanie państwa egipskiego",
      "Panowanie Dawida i Salomona w Izraelu",
      "Narodziny demokracji ateńskiej",
      "Podział Cesarstwa Rzymskiego"
    ],
    "explanation": "Egipt powstał około 3000 r. p.n.e.; Dawid i Salomon panowali około X w. p.n.e.; demokracja ateńska narodziła się w V w. p.n.e.; podział Rzymu nastąpił w 395 r. n.e.",
    "items": [
      "Podział Cesarstwa Rzymskiego",
      "Narodziny demokracji ateńskiej",
      "Powstanie państwa egipskiego",
      "Panowanie Dawida i Salomona w Izraelu"
    ]
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zdania zgodne z chronologią podanych wydarzeń.",
    "options": [
      "Rewolucja neolityczna poprzedza powstanie starożytnych państw",
      "Demokracja ateńska powstała przed Egiptem faraonów",
      "Egipt faraonów powstał przed demokracją ateńską",
      "Rzym upadł na zachodzie przed podziałem w 395 r.",
      "Cesarstwo Zachodniorzymskie upadło po podziale imperium",
      "Chrześcijaństwo powstało przed panowaniem Dawida i Salomona"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Rewolucja neolityczna poprzedza pierwsze państwa; państwo egipskie powstało przed demokracją ateńską; upadek Zachodniego Cesarstwa nastąpił po jego podziale."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W państwie faraona pewien urzędnik codziennie sprawdza stan kanałów i pilnuje poboru podatków. Które stanowisko w opisanym podziale obowiązków pełni najprawdopodobniej?",
    "options": [
      "Władca faraon",
      "Najwyższy kapłan",
      "Kupiec",
      "Niższy urzędnik",
      "Rzemieślnik",
      "Wojskowy gladiator"
    ],
    "answer": 3,
    "explanation": "Niżsi urzędnicy egipscy nadzorowali kanały i pobierali podatki."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Który bóg grecki był jednocześnie boskim posłańcem oraz patronem kupców, pasterzy i złodziei?",
    "options": null,
    "answer": "Hermes",
    "explanation": "Hermesa można było rozpoznać po uskrzydlonych sandałach i magicznym nakryciu głowy.",
    "altAnswers": [
      "Hermes",
      "Hermesa"
    ]
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W wyniku podziału cesarstwa w 395 r. stolica części zachodniej pozostała w __________, a wschodniej w __________.",
    "options": null,
    "answer": [
      "Rzymie",
      "Konstantynopolu"
    ],
    "explanation": "Po podziale cesarstwa w 395 roku część zachodnia miała stolicę w Rzymie, a wschodnia w Konstantynopolu.",
    "altAnswers": [
      [
        "Rzymie",
        "Rzym"
      ],
      [
        "Konstantynopolu",
        "Konstantynopol"
      ]
    ]
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 393 roku, rok po decyzji o zakazie wyznawania innych religii niż chrześcijaństwo, Teodozjusz Wielki zakazał organizowania igrzysk olimpijskich.",
    "options": null,
    "answer": true,
    "explanation": "W 392 roku Teodozjusz Wielki uczynił chrześcijaństwo religią państwową, a w 393 roku zakazał igrzysk olimpijskich."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wynalazki do właściwych obszarów cywilizacyjnych.",
    "options": null,
    "answer": {
      "Mezopotamia": [
        "pismo klinowe",
        "koło i wóz"
      ],
      "Egipt": [
        "hieroglify",
        "żagiel"
      ],
      "Indie": [
        "system dziesiętny",
        "uprawa bawełny"
      ],
      "Chiny": [
        "papier",
        "igła magnetyczna w nawigacji"
      ]
    },
    "explanation": "Oś czasu i opis osiągnięć Dalekiego Wschodu wiążą te wynalazki z czterema obszarami rozwoju cywilizacji.",
    "items": [
      "igła magnetyczna w nawigacji",
      "żagiel",
      "uprawa bawełny",
      "koło i wóz",
      "system dziesiętny",
      "papier",
      "hieroglify",
      "pismo klinowe"
    ],
    "categories": [
      "Mezopotamia",
      "Egipt",
      "Indie",
      "Chiny"
    ]
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj organ demokracji ateńskiej do jego zadania w V wieku p.n.e.",
    "options": null,
    "answer": {
      "Zgromadzenie Ludowe": "Głosowanie nad najważniejszymi decyzjami",
      "Rada Pięciuset": "Przygotowywanie projektów uchwał",
      "Trybunał Ludowy": "Rozstrzyganie sporów i wyroki",
      "Urzędnicy": "Wdrażanie uchwał i dowodzenie wojskiem"
    },
    "explanation": "Schemat demokracji ateńskiej rozdzielał przygotowanie decyzji, głosowanie, sądownictwo i wykonywanie uchwał.",
    "left": [
      "Zgromadzenie Ludowe",
      "Rada Pięciuset",
      "Trybunał Ludowy",
      "Urzędnicy"
    ],
    "right": [
      "Przygotowywanie projektów uchwał",
      "Rozstrzyganie sporów i wyroki",
      "Wdrażanie uchwał i dowodzenie wojskiem",
      "Głosowanie nad najważniejszymi decyzjami"
    ]
  }
];

const KID_PROMPTS = {
  "R02_POC_05": "Jak nazywa się życie, w którym ludzie często zmieniają miejsce zamieszkania?",
  "R02_POC_07": "Ludzie zaczęli siać zboże, hodować zwierzęta i mieszkać stale w jednym miejscu. Jak nazywa się ta zmiana?",
  "R02_EGI_07": "Mieszkańcy chcą dostarczać wodę z rzeki na pola za pomocą kanałów. Co budują?",
  "R02_EGI_10": "Dlaczego Nil był tak ważny dla egipskich rolników?",
  "R02_IZR_05": "Jak Żydzi nazywali wybawcę, na którego czekali?",
  "R02_IZR_07": "Jak nazywa się religia Żydów, którzy wierzyli w jednego Boga i czekali na Mesjasza?",
  "R02_GRE_05": "Jak nazywa się cała grupa bogów greckich?",
  "R02_GRE_07": "Który bóg grecki miał trójząb i opiekował się morzem?",
  "R02_RZY_05": "Jak nazywa się ustrój Rzymu po rządach królów, ale przed cesarzami?",
  "R02_RZY_07": "Po republice Rzymem zaczął rządzić cesarz. Jak nazywał się nowy ustrój?",
  "R02_DOK_05": "Jak nazywa się budowla, która prowadzi wodę do miasta?",
  "R02_DOK_07": "Który grecki lekarz uczył, żeby nie szkodzić pacjentom?"
};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Prehistoria i starożytność",
  "icon": "🏺",
  "sectionOrder": [
    "Początki człowieka i cywilizacji",
    "Egipt i Mezopotamia",
    "Starożytny Izrael i chrześcijaństwo",
    "Starożytna Grecja",
    "Starożytny Rzym",
    "Dokonania Greków i Rzymian"
  ],
  "sectionIcons": {
    "Początki człowieka i cywilizacji": "🪨",
    "Egipt i Mezopotamia": "🏺",
    "Starożytny Izrael i chrześcijaństwo": "📜",
    "Starożytna Grecja": "🏛️",
    "Starożytny Rzym": "🦅",
    "Dokonania Greków i Rzymian": "🏟️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
