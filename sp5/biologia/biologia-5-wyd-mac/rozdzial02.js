const ALL_EXERCISES = [
  {
    "id": "R02_BA_01",
    "section": "Królestwo: bakterie",
    "type": "single_choice",
    "prompt": "Na ilustracji widzisz komórkę bakterii. Które zdanie najlepiej ją opisuje?",
    "image": "/img/bbt_r02_komorka_bakteryjna.jpg",
    "options": [
      "jest mikroskopijna i jednokomórkowa",
      "jest duża i wielokomórkowa",
      "ma korzenie i liście",
      "zawsze tworzy kapelusz"
    ],
    "answer": 0,
    "explanation": "Bakterie są bardzo małe i zbudowane tylko z jednej komórki."
  },
  {
    "id": "R02_BA_02",
    "section": "Królestwo: bakterie",
    "type": "multi_select",
    "prompt": "Spójrz na ilustrację i zaznacz kształty, które mogą mieć bakterie.",
    "image": "/img/bbt_r02_bakterie_ksztalty.jpg",
    "options": [
      "ziarniaki",
      "laseczki",
      "śrubowce",
      "motyle",
      "przecinkowce"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Komórki bakterii mogą mieć różne kształty, na przykład ziarenek, laseczek, śrubek albo przecinków."
  },
  {
    "id": "R02_BA_03",
    "section": "Królestwo: bakterie",
    "type": "true_false",
    "prompt": "Komórka bakteryjna ma jądro komórkowe.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Bakterie nie mają jądra komórkowego."
  },
  {
    "id": "R02_BA_04",
    "section": "Królestwo: bakterie",
    "type": "fill_in",
    "prompt": "W komórce bakteryjnej występują __________, __________ i materiał genetyczny.",
    "options": null,
    "answer": [
      "cytoplazma",
      "błona komórkowa"
    ],
    "altAnswers": [
      [
        "cytoplazma",
        "cytoplazmę",
        "cytoplazmie"
      ],
      [
        "błona komórkowa",
        "błona",
        "błonę komórkową",
        "błonie komórkowej"
      ]
    ],
    "explanation": "Komórka bakteryjna ma cytoplazmę, błonę komórkową i materiał genetyczny, ale nie ma jądra."
  },
  {
    "id": "R02_BA_05",
    "section": "Królestwo: bakterie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: jądro komórkowe, błona komórkowa, cytoplazma, ściana komórkowa.",
    "options": null,
    "answer": "jądro komórkowe",
    "explanation": "Bakteria nie ma jądra komórkowego. Pozostałe elementy mogą występować w komórce bakteryjnej."
  },
  {
    "id": "R02_BA_06",
    "section": "Królestwo: bakterie",
    "type": "scenario",
    "prompt": "Ola przeczytała, że niektóre bakterie żyją w gorących źródłach. Co z tego wynika?",
    "options": [
      "bakterie potrafią przystosować się do bardzo różnych warunków",
      "bakterie żyją tylko w ciele człowieka",
      "wszystkie bakterie potrzebują lodu",
      "bakterie nie potrzebują pokarmu"
    ],
    "answer": 0,
    "explanation": "Bakterie potrafią zasiedlać bardzo różne środowiska, nawet takie, które dla wielu innych organizmów są zbyt trudne."
  },
  {
    "id": "R02_BA_07",
    "section": "Królestwo: bakterie",
    "type": "single_choice",
    "prompt": "Które bakterie są samożywne?",
    "options": [
      "te, które same wytwarzają pokarm, na przykład podczas fotosyntezy",
      "te, które zawsze zjadają inne bakterie",
      "te, które żyją tylko na skórze",
      "te, które nigdy nie oddychają"
    ],
    "answer": 0,
    "explanation": "Bakterie samożywne same wytwarzają pokarm. Niektóre robią to dzięki fotosyntezie."
  },
  {
    "id": "R02_BA_08",
    "section": "Królestwo: bakterie",
    "type": "single_choice",
    "prompt": "Na ilustracji pokazano dwa sposoby życia bakterii z innymi organizmami. Która sytuacja jest korzystna dla obu stron?",
    "image": "/img/bbt_r02_bakterie_symbioza_pasozyt.jpg",
    "options": [
      "symbioza",
      "pasożytnictwo",
      "brak związku",
      "sen zimowy"
    ],
    "answer": 0,
    "explanation": "W symbiozie obie strony odnoszą korzyść. W pasożytnictwie zyskuje pasożyt, a gospodarz traci."
  },
  {
    "id": "R02_BA_09",
    "section": "Królestwo: bakterie",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania się bakterii we właściwej kolejności.",
    "image": "/img/bbt_r02_podzial_bakterii.jpg",
    "options": null,
    "items": [
      "podwojenie materiału genetycznego",
      "podział komórki na pół",
      "powstanie dwóch komórek potomnych"
    ],
    "answer": [
      "podwojenie materiału genetycznego",
      "podział komórki na pół",
      "powstanie dwóch komórek potomnych"
    ],
    "explanation": "Bakteria najpierw powiela materiał genetyczny, potem dzieli się na pół i powstają dwie komórki potomne."
  },
  {
    "id": "R02_BA_10",
    "section": "Królestwo: bakterie",
    "type": "true_false",
    "prompt": "Niektóre bakterie w trudnych warunkach mogą tworzyć przetrwalniki.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Przetrwalniki pomagają bakteriom przetrwać suszę i inne niekorzystne warunki."
  },
  {
    "id": "R02_BWC_01",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "single_choice",
    "prompt": "Spójrz na schemat obiegu materii. Dlaczego bakterie saprofityczne są ważne w przyrodzie?",
    "image": "/img/bbt_r02_bakterie_obieg_materii.jpg",
    "options": [
      "rozkładają martwą materię i uwalniają związki potrzebne roślinom",
      "zamieniają wszystkie rośliny w grzyby",
      "zatrzymują obieg substancji w przyrodzie",
      "zjadają tylko kamienie"
    ],
    "answer": 0,
    "explanation": "Bakterie saprofityczne rozkładają martwą materię organiczną. Dzięki temu do środowiska wracają potrzebne związki chemiczne."
  },
  {
    "id": "R02_BWC_02",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady pożytecznego wykorzystania bakterii przez człowieka.",
    "image": "/img/bbt_r02_bakterie_wykorzystanie.jpg",
    "options": [
      "produkcja jogurtu i kiszonej kapusty",
      "oczyszczanie ścieków",
      "otrzymywanie insuliny",
      "leczenie drewna farbą",
      "produkcja niektórych serów"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Bakterie wykorzystuje się między innymi do produkcji żywności, oczyszczania ścieków i otrzymywania niektórych leków."
  },
  {
    "id": "R02_BWC_03",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "true_false",
    "prompt": "Wybrzuszone wieczko konserwy może oznaczać, że w środku namnożyły się groźne bakterie.",
    "image": "/img/bbt_r02_bombaz_konserwy.jpg",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Takie wybrzuszenie nazywa się bombażem i może oznaczać, że zawartość jest niebezpieczna."
  },
  {
    "id": "R02_BWC_04",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "fill_in",
    "prompt": "Niektóre bakterie żyjące w jelicie grubym człowieka pomagają wytwarzać __________ i żyją z nami w __________.",
    "options": null,
    "answer": [
      "witaminy",
      "symbiozie"
    ],
    "altAnswers": [
      [
        "witaminy",
        "witaminę",
        "witamin"
      ],
      [
        "symbiozie",
        "symbioza",
        "symbiozą"
      ]
    ],
    "explanation": "Pożyteczne bakterie jelitowe pomagają między innymi wytwarzać witaminy. Taki związek z człowiekiem to symbioza."
  },
  {
    "id": "R02_BWC_05",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "sort",
    "prompt": "Posortuj przykłady na pożyteczne i szkodliwe działanie bakterii.",
    "options": null,
    "items": [
      "produkcja kiszonej kapusty",
      "oczyszczanie ścieków",
      "gruźlica",
      "salmonelloza",
      "produkcja insuliny",
      "borelioza"
    ],
    "categories": [
      "pożyteczne działanie",
      "szkodliwe działanie"
    ],
    "answer": {
      "pożyteczne działanie": [
        "produkcja kiszonej kapusty",
        "oczyszczanie ścieków",
        "produkcja insuliny"
      ],
      "szkodliwe działanie": [
        "gruźlica",
        "salmonelloza",
        "borelioza"
      ]
    },
    "explanation": "Bakterie mogą pomagać ludziom, ale niektóre wywołują też groźne choroby."
  },
  {
    "id": "R02_BWC_06",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "scenario",
    "prompt": "Bartek skaleczył się zardzewiałym drutem ubrudzonym ziemią. Przed jaką chorobą trzeba go szczególnie chronić?",
    "image": "/img/bbt_r02_choroby_bakteryjne_drogi.jpg",
    "options": [
      "tężec",
      "malaria",
      "grypa",
      "ospa wietrzna"
    ],
    "answer": 0,
    "explanation": "Tężec może rozwinąć się po zakażeniu rany bakteriami obecnymi w glebie."
  },
  {
    "id": "R02_BWC_07",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "single_choice",
    "prompt": "Którą chorobę bakteryjną przenoszą kleszcze?",
    "options": [
      "boreliozę",
      "salmonellozę",
      "tężec",
      "czerwonkę pełzakową"
    ],
    "answer": 0,
    "explanation": "Borelioza jest przenoszona przez zakażone kleszcze."
  },
  {
    "id": "R02_BWC_08",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz działania, które pomagają ograniczać zakażenia bakteryjne.",
    "options": [
      "mycie rąk",
      "szczepienia ochronne",
      "dbanie o czystość ran",
      "jedzenie zepsutej żywności",
      "picie wody z pewnego źródła"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Higiena, szczepienia, dbanie o rany i bezpieczna woda zmniejszają ryzyko zakażeń."
  },
  {
    "id": "R02_BWC_09",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "riddle",
    "prompt": "Jestem wybrzuszeniem wieczka puszki. Ostrzegam, że jedzenie w środku może być groźne. Jak się nazywam?",
    "options": null,
    "answer": "bombaż",
    "altAnswers": [
      "bombaż",
      "bombażem",
      "bombazu",
      "bombażu"
    ],
    "explanation": "Wybrzuszone wieczko konserwy to bombaż. Taka puszka nie nadaje się do jedzenia."
  },
  {
    "id": "R02_BWC_10",
    "section": "Bakterie w przyrodzie i w życiu człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: tężec, gruźlica, salmonelloza, grypa.",
    "options": null,
    "answer": "grypa",
    "explanation": "Grypa jest chorobą wirusową, a tężec, gruźlica i salmonelloza to choroby bakteryjne."
  },
  {
    "id": "R02_GR_01",
    "section": "Królestwo: grzyby",
    "type": "single_choice",
    "prompt": "Na ilustracji pokazano budowę grzyba. Jak nazywa się splątana sieć strzępek ukryta w podłożu?",
    "image": "/img/bbt_r02_grzyby_budowa.jpg",
    "options": [
      "grzybnia",
      "korzeń",
      "łodyga",
      "liść"
    ],
    "answer": 0,
    "explanation": "Sieć strzępek grzyba to grzybnia. To ona pobiera pokarm z podłoża."
  },
  {
    "id": "R02_GR_02",
    "section": "Królestwo: grzyby",
    "type": "multi_select",
    "prompt": "Zaznacz cechy komórek grzybów.",
    "options": [
      "mają jądro komórkowe",
      "mają ścianę komórkową z chityny",
      "mają chloroplasty",
      "wielu przedstawicieli ma ciało zbudowane ze strzępek"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Komórki grzybów mają jądro i ścianę z chityny. Nie mają chloroplastów."
  },
  {
    "id": "R02_GR_03",
    "section": "Królestwo: grzyby",
    "type": "true_false",
    "prompt": "Większość grzybów to organizmy cudzożywne.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Grzyby nie prowadzą fotosyntezy, więc muszą pobierać gotowe substancje odżywcze."
  },
  {
    "id": "R02_GR_04",
    "section": "Królestwo: grzyby",
    "type": "fill_in",
    "prompt": "Cienkie nitki budujące ciało wielu grzybów to __________, a ich gęsta sieć to __________.",
    "options": null,
    "answer": [
      "strzępki",
      "grzybnia"
    ],
    "altAnswers": [
      [
        "strzępki",
        "strzępka",
        "strzępek"
      ],
      [
        "grzybnia",
        "grzybnię",
        "grzybni"
      ]
    ],
    "explanation": "Pojedyncze nitki to strzępki. Ich gęsta, splątana masa tworzy grzybnię."
  },
  {
    "id": "R02_GR_05",
    "section": "Królestwo: grzyby",
    "type": "scenario",
    "prompt": "Na ilustracji pokazano, jak grzyb zdobywa pokarm. Gdzie zachodzi trawienie pokarmu u grzyba?",
    "image": "/img/bbt_r02_grzyb_trawienie.jpg",
    "options": [
      "poza organizmem grzyba",
      "w jamie ustnej grzyba",
      "w żołądku grzyba",
      "tylko w kapeluszu"
    ],
    "answer": 0,
    "explanation": "Grzyby wydzielają substancje trawiące na zewnątrz swojego ciała, a potem wchłaniają gotowe składniki."
  },
  {
    "id": "R02_GR_06",
    "section": "Królestwo: grzyby",
    "type": "single_choice",
    "prompt": "Jak rozmnażają się drożdże pokazane na ilustracji?",
    "image": "/img/bbt_r02_drozdze_paczkowanie.jpg",
    "options": [
      "przez pączkowanie",
      "przez nasiona",
      "przez jaja",
      "przez liście"
    ],
    "answer": 0,
    "explanation": "Drożdże rozmnażają się bezpłciowo przez pączkowanie."
  },
  {
    "id": "R02_GR_07",
    "section": "Królestwo: grzyby",
    "type": "single_choice",
    "prompt": "Który sposób rozmnażania grzybów daje potomstwo bardziej zróżnicowane?",
    "image": "/img/bbt_r02_grzyby_zarodniki_i_plciowe.jpg",
    "options": [
      "rozmnażanie płciowe",
      "rozmnażanie przez pączkowanie",
      "rozmnażanie bezpłciowe jednego osobnika",
      "żaden"
    ],
    "answer": 0,
    "explanation": "W rozmnażaniu płciowym biorą udział dwa organizmy, więc potomstwo ma mieszaninę ich cech."
  },
  {
    "id": "R02_GR_08",
    "section": "Królestwo: grzyby",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: strzępka, grzybnia, owocnik, chloroplast.",
    "options": null,
    "answer": "chloroplast",
    "explanation": "Grzyby nie mają chloroplastów. Pozostałe wyrazy dotyczą budowy grzybów."
  },
  {
    "id": "R02_GR_09",
    "section": "Królestwo: grzyby",
    "type": "riddle",
    "prompt": "Jestem jednokomórkowym grzybem. Dzięki mnie ciasto może rosnąć. Kim jestem?",
    "options": null,
    "answer": "drożdże",
    "altAnswers": [
      "drożdże",
      "drożdżami",
      "drozdze",
      "drożdżach"
    ],
    "explanation": "Drożdże to jednokomórkowe grzyby wykorzystywane między innymi do pieczenia."
  },
  {
    "id": "R02_GR_10",
    "section": "Królestwo: grzyby",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania płciowego grzyba kapeluszowego.",
    "options": null,
    "items": [
      "połączenie strzępek dwóch osobników",
      "powstanie wspólnej grzybni",
      "wytworzenie owocnika",
      "rozsiewanie zarodników"
    ],
    "answer": [
      "połączenie strzępek dwóch osobników",
      "powstanie wspólnej grzybni",
      "wytworzenie owocnika",
      "rozsiewanie zarodników"
    ],
    "explanation": "Najpierw łączą się strzępki dwóch osobników, potem powstaje wspólna grzybnia, owocnik i zarodniki."
  },
  {
    "id": "R02_GWC_01",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "match",
    "prompt": "Połącz partnera mikoryzy z tym, co przekazuje drugiej stronie.",
    "image": "/img/bbt_r02_mikoryza.jpg",
    "options": null,
    "left": [
      "roślina",
      "grzyb"
    ],
    "right": [
      "cukry wytworzone w liściach",
      "woda i sole mineralne z gleby"
    ],
    "answer": {
      "roślina": "cukry wytworzone w liściach",
      "grzyb": "woda i sole mineralne z gleby"
    },
    "explanation": "W mikoryzie obie strony korzystają. Roślina daje cukry, a grzyb pomaga pobierać wodę i sole mineralne."
  },
  {
    "id": "R02_GWC_02",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "single_choice",
    "prompt": "Czym jest porost?",
    "options": [
      "wspólnym organizmem grzyba i glonu",
      "samą rośliną wodną",
      "samą bakterią",
      "rodzajem owada"
    ],
    "answer": 0,
    "explanation": "Porost tworzą razem grzyb i jednokomórkowy glon lub sinica."
  },
  {
    "id": "R02_GWC_03",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "true_false",
    "prompt": "W poroście zielona warstwa glonów wykonuje fotosyntezę.",
    "image": "/img/bbt_r02_porost_przekroj.jpg",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Zielona warstwa glonów w poroście wytwarza pokarm podczas fotosyntezy."
  },
  {
    "id": "R02_GWC_04",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "single_choice",
    "prompt": "Które porosty zwykle rosną tam, gdzie powietrze jest najczystsze?",
    "image": "/img/bbt_r02_porosty_typy.jpg",
    "options": [
      "krzaczkowate",
      "listkowate",
      "proszkowate",
      "żadne porosty"
    ],
    "answer": 0,
    "explanation": "Porosty krzaczkowate są najbardziej wrażliwe na zanieczyszczenie powietrza."
  },
  {
    "id": "R02_GWC_05",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady pożytecznego wykorzystania grzybów przez człowieka.",
    "image": "/img/bbt_r02_grzyby_zastosowania.jpg",
    "options": [
      "pieczenie chleba",
      "produkcja serów pleśniowych",
      "otrzymywanie antybiotyków",
      "uprawa pieczarek",
      "robienie plastikowych zabawek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Grzyby są używane w piekarnictwie, przy produkcji niektórych serów, leków i jadalnych pieczarek."
  },
  {
    "id": "R02_GWC_06",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "scenario",
    "prompt": "Kuba codziennie długo chodzi w nieprzewiewnych butach, a stopy ma często wilgotne. Co może się rozwinąć?",
    "options": [
      "grzybica stóp",
      "borelioza",
      "krzywica",
      "malaria"
    ],
    "answer": 0,
    "explanation": "Wilgoć i brak przewiewu sprzyjają rozwojowi grzybicy stóp."
  },
  {
    "id": "R02_GWC_07",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "sort",
    "prompt": "Posortuj przykłady na korzystny i szkodliwy wpływ grzybów.",
    "options": null,
    "items": [
      "rozkład martwej materii",
      "produkcja sera pleśniowego",
      "grzybica skóry",
      "choroby roślin uprawnych",
      "produkcja antybiotyków",
      "psucie żywności"
    ],
    "categories": [
      "korzystny wpływ",
      "szkodliwy wpływ"
    ],
    "answer": {
      "korzystny wpływ": [
        "rozkład martwej materii",
        "produkcja sera pleśniowego",
        "produkcja antybiotyków"
      ],
      "szkodliwy wpływ": [
        "grzybica skóry",
        "choroby roślin uprawnych",
        "psucie żywności"
      ]
    },
    "explanation": "Grzyby pomagają w przyrodzie i w produkcji żywności czy leków, ale mogą też powodować choroby i psuć jedzenie."
  },
  {
    "id": "R02_GWC_08",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "fill_in",
    "prompt": "Porosty należą do organizmów __________, bo potrafią rosnąć nawet na __________ skale.",
    "options": null,
    "answer": [
      "pionierskich",
      "nagiej"
    ],
    "altAnswers": [
      [
        "pionierskich",
        "pionierskie",
        "organizmów pionierskich"
      ],
      [
        "nagiej",
        "gołej",
        "nagiej skale",
        "gołej skale"
      ]
    ],
    "explanation": "Porosty mogą osiedlać się tam, gdzie prawie nic jeszcze nie rośnie, nawet na nagiej skale."
  },
  {
    "id": "R02_GWC_09",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "single_choice",
    "prompt": "Dlaczego wiele grzybów rośnie w wilgotnych miejscach?",
    "options": [
      "bo do życia potrzebują odpowiedniej wilgotności",
      "bo lubią tylko śnieg",
      "bo same wytwarzają wodę w liściach",
      "bo unikają wszelkiej materii organicznej"
    ],
    "answer": 0,
    "explanation": "Grzyby dobrze rozwijają się tam, gdzie mają wilgoć i dostęp do substancji organicznych."
  },
  {
    "id": "R02_GWC_10",
    "section": "Grzyby w przyrodzie i w życiu człowieka",
    "type": "riddle",
    "prompt": "Jestem związkiem grzyba i glonu. Często rosnę na kamieniach i korze drzew. Kim jestem?",
    "options": null,
    "answer": "porost",
    "altAnswers": [
      "porost",
      "porostem",
      "porosty",
      "poroście"
    ],
    "explanation": "Porost to wspólny organizm grzyba i glonu."
  },
  {
    "id": "R02_PR_01",
    "section": "Królestwo: protisty",
    "type": "single_choice",
    "prompt": "Na ilustracji pokazano różne protisty. Co łączy wszystkie te organizmy?",
    "image": "/img/bbt_r02_protisty_roznorodnosc.jpg",
    "options": [
      "mają komórki z jądrem",
      "wszystkie mają kapelusze",
      "wszystkie są bakteriami",
      "wszystkie żyją tylko na pustyni"
    ],
    "answer": 0,
    "explanation": "Protisty są bardzo różne, ale wszystkie mają komórki z jądrem."
  },
  {
    "id": "R02_PR_02",
    "section": "Królestwo: protisty",
    "type": "true_false",
    "prompt": "Większość protistów żyje w wodzie albo w bardzo wilgotnych miejscach.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Protisty najczęściej żyją w wodzie, wilgotnej glebie albo w innych organizmach."
  },
  {
    "id": "R02_PR_03",
    "section": "Królestwo: protisty",
    "type": "multi_select",
    "prompt": "Zaznacz zdania prawdziwe o protistach.",
    "options": [
      "wśród protistów są organizmy samożywne",
      "wśród protistów są organizmy cudzożywne",
      "niektóre protisty są jednokomórkowe",
      "niektóre protisty są wielokomórkowe",
      "żaden protist nie ma jądra komórkowego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Protisty są bardzo zróżnicowane. Mogą być samożywne lub cudzożywne, jedno- albo wielokomórkowe."
  },
  {
    "id": "R02_PR_04",
    "section": "Królestwo: protisty",
    "type": "scenario",
    "prompt": "Euglena ma mało gotowego pokarmu. W którą stronę zwykle będzie się przemieszczać?",
    "image": "/img/bbt_r02_euglena.jpg",
    "options": [
      "w stronę światła",
      "w stronę lodu",
      "w stronę piasku",
      "donikąd, bo nie potrafi się ruszać"
    ],
    "answer": 0,
    "explanation": "Euglena może odżywiać się samożywnie, więc gdy brakuje pokarmu, przemieszcza się w stronę światła."
  },
  {
    "id": "R02_PR_05",
    "section": "Królestwo: protisty",
    "type": "single_choice",
    "prompt": "Który organizm łapie pokarm za pomocą nibynóżek?",
    "image": "/img/bbt_r02_pantofelek_ameba_wirczyk.jpg",
    "options": [
      "ameba",
      "pantofelek",
      "wirczyk",
      "pieczarka"
    ],
    "answer": 0,
    "explanation": "Ameba porusza się i zdobywa pokarm dzięki nibynóżkom."
  },
  {
    "id": "R02_PR_06",
    "section": "Królestwo: protisty",
    "type": "fill_in",
    "prompt": "Samożywne protisty zaliczamy do __________, a większość protistów żyjących w wodzie oddycha __________.",
    "options": null,
    "answer": [
      "glonów",
      "tlenowo"
    ],
    "altAnswers": [
      [
        "glonów",
        "glony",
        "glon"
      ],
      [
        "tlenowo",
        "tlenem",
        "oddycha tlenowo"
      ]
    ],
    "explanation": "Samożywne protisty to glony. Większość protistów oddycha tlenowo."
  },
  {
    "id": "R02_PR_07",
    "section": "Królestwo: protisty",
    "type": "sort",
    "prompt": "Przyporządkuj chorobę do drogi zakażenia.",
    "options": null,
    "items": [
      "pełzak czerwonki",
      "toksoplazma",
      "zarodziec malarii"
    ],
    "categories": [
      "zanieczyszczona woda lub żywność",
      "kontakt z odchodami kotów lub zakażonym mięsem",
      "ukąszenie komara"
    ],
    "answer": {
      "zanieczyszczona woda lub żywność": [
        "pełzak czerwonki"
      ],
      "kontakt z odchodami kotów lub zakażonym mięsem": [
        "toksoplazma"
      ],
      "ukąszenie komara": [
        "zarodziec malarii"
      ]
    },
    "explanation": "Różne pasożytnicze protisty dostają się do organizmu człowieka różnymi drogami."
  },
  {
    "id": "R02_PR_08",
    "section": "Królestwo: protisty",
    "type": "sequence",
    "prompt": "Ułóż etapy prostej hodowli protistów we właściwej kolejności.",
    "image": "/img/bbt_r02_hodowla_protistow.jpg",
    "options": null,
    "items": [
      "włożyć siano do słoika i zalać wodą",
      "odstawić słoik na kilka dni",
      "nanieść kroplę płynu na szkiełko",
      "obejrzeć preparat pod mikroskopem"
    ],
    "answer": [
      "włożyć siano do słoika i zalać wodą",
      "odstawić słoik na kilka dni",
      "nanieść kroplę płynu na szkiełko",
      "obejrzeć preparat pod mikroskopem"
    ],
    "explanation": "Najpierw przygotowuje się hodowlę, potem czeka, robi preparat i ogląda go pod mikroskopem."
  },
  {
    "id": "R02_PR_09",
    "section": "Królestwo: protisty",
    "type": "single_choice",
    "prompt": "Który protist wywołuje malarię?",
    "options": [
      "zarodziec malarii",
      "drożdże",
      "gronkowiec",
      "huba"
    ],
    "answer": 0,
    "explanation": "Malarię wywołuje pasożytniczy protist nazywany zarodźcem malarii."
  },
  {
    "id": "R02_PR_10",
    "section": "Królestwo: protisty",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ameba, euglena, pantofelek, borowik.",
    "options": null,
    "answer": "borowik",
    "explanation": "Borowik jest grzybem, a pozostałe organizmy to protisty."
  },
  {
    "id": "R02_ST_01",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Posortuj cechy do właściwego królestwa.",
    "image": "/img/bbt_r02_krolestwa_porownanie.jpg",
    "options": null,
    "items": [
      "brak jądra komórkowego",
      "ściana komórkowa z chityny",
      "euglena",
      "przetrwalnik",
      "drożdże",
      "pantofelek"
    ],
    "categories": [
      "bakterie",
      "grzyby",
      "protisty"
    ],
    "answer": {
      "bakterie": [
        "brak jądra komórkowego",
        "przetrwalnik"
      ],
      "grzyby": [
        "ściana komórkowa z chityny",
        "drożdże"
      ],
      "protisty": [
        "euglena",
        "pantofelek"
      ]
    },
    "explanation": "Bakterie nie mają jądra i mogą tworzyć przetrwalniki, grzyby mają chitynę, a euglena i pantofelek to protisty."
  },
  {
    "id": "R02_ST_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Bakterie rozmnażają się przez __________, a w trudnych warunkach niektóre tworzą __________.",
    "options": null,
    "answer": [
      "podział",
      "przetrwalniki"
    ],
    "altAnswers": [
      [
        "podział",
        "podział komórki",
        "dzielenie się",
        "podział na pół"
      ],
      [
        "przetrwalniki",
        "przetrwalnik",
        "przetrwalników"
      ]
    ],
    "explanation": "Typowym sposobem rozmnażania bakterii jest podział komórki. W trudnych warunkach część z nich tworzy przetrwalniki."
  },
  {
    "id": "R02_ST_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Spójrz na wybrzuszoną konserwę i zaznacz poprawne wnioski.",
    "image": "/img/bbt_r02_bombaz_konserwy.jpg",
    "options": [
      "w środku mogły namnożyć się bakterie beztlenowe",
      "zawartość puszki może być trująca",
      "taką konserwę można bezpiecznie zjeść po otwarciu",
      "puszkę należy wyrzucić"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Bombaż może oznaczać rozwój groźnych bakterii i obecność toksyny. Takiej konserwy nie wolno jeść."
  },
  {
    "id": "R02_ST_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dlaczego choroby bakteryjne potrafią rozprzestrzeniać się szybko?",
    "options": [
      "bo bakterie są mikroskopijne i mogą szybko się mnożyć",
      "bo każda bakteria jest wielka jak mysz",
      "bo bakterie nigdy nie giną",
      "bo bakterie mają skrzydła"
    ],
    "answer": 0,
    "explanation": "Bakterie są małe, łatwo przenoszą się między miejscami i często rozmnażają się bardzo szybko."
  },
  {
    "id": "R02_ST_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z odpowiednim typem zależności lub sposobem życia bakterii.",
    "image": "/img/bbt_r02_bakterie_symbioza_pasozyt.jpg",
    "options": null,
    "left": [
      "bakterie w jelicie grubym człowieka",
      "Helicobacter pylori w żołądku",
      "bakterie rozkładające martwą materię"
    ],
    "right": [
      "symbioza",
      "pasożytnictwo",
      "saprofityzm"
    ],
    "answer": {
      "bakterie w jelicie grubym człowieka": "symbioza",
      "Helicobacter pylori w żołądku": "pasożytnictwo",
      "bakterie rozkładające martwą materię": "saprofityzm"
    },
    "explanation": "Bakterie mogą żyć z innymi organizmami na różne sposoby: korzystnie dla obu stron, pasożytniczo albo jako saprofity."
  },
  {
    "id": "R02_ST_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Antybiotyk pomaga zwalczać choroby wirusowe tak samo jak bakteryjne.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Antybiotyki działają na bakterie, a nie na wirusy."
  },
  {
    "id": "R02_ST_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Na podstawie ilustracji zaznacz warunki sprzyjające rozwojowi wielu grzybów saprofitycznych.",
    "image": "/img/bbt_r02_grzyb_trawienie.jpg",
    "options": [
      "obecność martwej materii organicznej",
      "odpowiednia wilgotność",
      "całkowity brak pożywienia",
      "dostęp do podłoża, w które mogą wrastać",
      "temperatura niższa niż na Antarktydzie"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Grzyby saprofityczne potrzebują materii organicznej, odpowiedniej wilgotności i podłoża, z którego mogą pobierać pokarm."
  },
  {
    "id": "R02_ST_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania płciowego grzybów we właściwej kolejności.",
    "image": "/img/bbt_r02_grzyby_zarodniki_i_plciowe.jpg",
    "options": null,
    "items": [
      "połączenie strzępek dwóch osobników",
      "powstanie wspólnej grzybni",
      "utworzenie owocnika",
      "rozsianie zróżnicowanych zarodników"
    ],
    "answer": [
      "połączenie strzępek dwóch osobników",
      "powstanie wspólnej grzybni",
      "utworzenie owocnika",
      "rozsianie zróżnicowanych zarodników"
    ],
    "explanation": "W rozmnażaniu płciowym najpierw łączą się strzępki dwóch osobników, a potem powstają zróżnicowane zarodniki."
  },
  {
    "id": "R02_ST_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W poroście grzyb otrzymuje od glonu __________, a glon dzięki grzybowi łatwiej zdobywa __________ i sole mineralne.",
    "image": "/img/bbt_r02_porost_przekroj.jpg",
    "options": null,
    "answer": [
      "cukry",
      "wodę"
    ],
    "altAnswers": [
      [
        "cukry",
        "cukier",
        "cukrów"
      ],
      [
        "wodę",
        "woda",
        "wodę z otoczenia"
      ]
    ],
    "explanation": "Glon wytwarza cukry podczas fotosyntezy, a grzyb pomaga zatrzymywać wodę i pobierać sole mineralne."
  },
  {
    "id": "R02_ST_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W pewnej okolicy rosną prawie wyłącznie porosty proszkowate. Co można podejrzewać?",
    "image": "/img/bbt_r02_porosty_typy.jpg",
    "options": [
      "powietrze jest dość silnie zanieczyszczone",
      "powietrze jest wyjątkowo czyste",
      "w okolicy nie ma żadnych skał",
      "to na pewno pustynia"
    ],
    "answer": 0,
    "explanation": "Porosty proszkowate najlepiej znoszą zanieczyszczenia. Ich przewaga może świadczyć o gorszej jakości powietrza."
  },
  {
    "id": "R02_ST_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego porost może rosnąć na nagiej skale, choć zwykły grzyb miałby z tym problem?",
    "options": [
      "bo partner glonowy sam wytwarza pokarm",
      "bo porost ma korzenie",
      "bo porost zjada kamienie",
      "bo skała zamienia się dla niego w mięso"
    ],
    "answer": 0,
    "explanation": "Glon w poroście prowadzi fotosyntezę, więc dostarcza pokarm nawet tam, gdzie nie ma martwej materii organicznej."
  },
  {
    "id": "R02_ST_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Euglena może zmieniać sposób odżywiania zależnie od warunków.",
    "image": "/img/bbt_r02_euglena.jpg",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Euglena może odżywiać się samożywnie lub cudzożywnie."
  },
  {
    "id": "R02_ST_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby ograniczania ryzyka zachorowania na malarię podczas podróży.",
    "image": "/img/bbt_r02_malaria_komar.jpg",
    "options": [
      "przyjmowanie leków przeciwmalarycznych",
      "używanie moskitier",
      "noszenie odzieży chroniącej przed komarami",
      "jedzenie większej ilości chleba",
      "unikanie ukąszeń komarów"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Malaria jest przenoszona przez komary, więc trzeba ograniczać ukąszenia i stosować profilaktykę lekową."
  },
  {
    "id": "R02_ST_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pasożytniczego protista z drogą zakażenia.",
    "options": null,
    "left": [
      "pełzak czerwonki",
      "toksoplazma",
      "zarodziec malarii"
    ],
    "right": [
      "zanieczyszczona żywność lub woda",
      "kontakt z odchodami kotów lub zakażonym mięsem",
      "ukąszenie komara"
    ],
    "answer": {
      "pełzak czerwonki": "zanieczyszczona żywność lub woda",
      "toksoplazma": "kontakt z odchodami kotów lub zakażonym mięsem",
      "zarodziec malarii": "ukąszenie komara"
    },
    "explanation": "Te trzy choroby pochodzą od protistów, ale do zakażenia dochodzi różnymi drogami."
  },
  {
    "id": "R02_ST_15",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem zielonym partnerem porostu. Wytwarzam pokarm dla całego układu. Kim jestem?",
    "options": null,
    "answer": "glon",
    "altAnswers": [
      "glon",
      "glonem",
      "glony",
      "jednokomórkowy glon"
    ],
    "explanation": "W poroście glon wykonuje fotosyntezę i dostarcza pokarm."
  },
  {
    "id": "R02_ST_16",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po długiej antybiotykoterapii u niektórych osób może rozwinąć się grzybica. Jaka jest jedna z przyczyn?",
    "options": [
      "antybiotyk niszczy też pożyteczne bakterie",
      "antybiotyk zamienia grzyby w rośliny",
      "antybiotyk powoduje brak tlenu w domu",
      "grzyby rozmnażają się tylko po deszczu"
    ],
    "answer": 0,
    "explanation": "Antybiotyk może zniszczyć również pożyteczne bakterie, które zwykle pomagają hamować rozwój grzybów."
  },
  {
    "id": "R02_ST_17",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które królestwo na pewno nie obejmuje organizmów z jądrem komórkowym?",
    "image": "/img/bbt_r02_krolestwa_porownanie.jpg",
    "options": [
      "bakterie",
      "grzyby",
      "protisty",
      "żadne z nich"
    ],
    "answer": 0,
    "explanation": "Bakterie nie mają jądra komórkowego. Grzyby i protisty je mają."
  },
  {
    "id": "R02_ST_18",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W mikoryzie grzyb pomaga roślinie pobierać z gleby __________ i __________.",
    "options": null,
    "answer": [
      "wodę",
      "sole mineralne"
    ],
    "altAnswers": [
      [
        "wodę",
        "woda"
      ],
      [
        "sole mineralne",
        "sole",
        "sól mineralną",
        "soli mineralnych"
      ]
    ],
    "explanation": "Strzępki grzyba zwiększają możliwości pobierania przez roślinę wody i soli mineralnych."
  },
  {
    "id": "R02_ST_19",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: porost, mikoryza, symbioza, pasożytnictwo.",
    "options": null,
    "answer": "pasożytnictwo",
    "explanation": "Porost, mikoryza i symbioza wiążą się ze współpracą organizmów. Pasożytnictwo szkodzi jednej ze stron."
  },
  {
    "id": "R02_ST_20",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz organizmy, które według tego rozdziału mogą rozmnażać się bezpłciowo.",
    "options": [
      "bakterie",
      "drożdże",
      "wiele protistów",
      "porosty jako cały układ",
      "grzyby wytwarzające zarodniki bezpłciowe"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Bakterie rozmnażają się przez podział, drożdże przez pączkowanie, wiele protistów bezpłciowo, a część grzybów przez zarodniki bezpłciowe."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Bakterie, grzyby i protisty",
  "icon": "🦠",
  "sectionOrder": [
    "Królestwo: bakterie",
    "Bakterie w przyrodzie i w życiu człowieka",
    "Królestwo: grzyby",
    "Grzyby w przyrodzie i w życiu człowieka",
    "Królestwo: protisty"
  ],
  "sectionIcons": {
    "Królestwo: bakterie": "🦠",
    "Bakterie w przyrodzie i w życiu człowieka": "🧫",
    "Królestwo: grzyby": "🍄",
    "Grzyby w przyrodzie i w życiu człowieka": "🌱",
    "Królestwo: protisty": "🫧"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
