// Skróty sekcji:
//   ZIE = Ziemia i globus
//   SIA = Siatka geograficzna i półkule
//   KON = Kontynenty i oceany
//   ODK = Wielkie odkrycia geograficzne
//   BAD = Badacze i podróże nowożytne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_ZIE_01",
    "section": "Ziemia i globus",
    "type": "single_choice",
    "prompt": "Jak w uproszczeniu można określić kształt Ziemi?",
    "explanation": "Ziemia ma kształt zbliżony do kuli, choć jest lekko spłaszczona na biegunach.",
    "options": [
      "płaski dysk",
      "kula",
      "sześcian",
      "stożek",
      "walec",
      "półkula"
    ],
    "answer": 1,
    "image": "/img/r03_globus_os_ziemska.jpg"
  },
  {
    "id": "R03_ZIE_02",
    "section": "Ziemia i globus",
    "type": "true_false",
    "prompt": "Oś ziemska przebiega przez środek Ziemi i łączy biegun północny z biegunem południowym.",
    "explanation": "Oś ziemska to prosta przechodząca przez środek Ziemi i oba bieguny.",
    "options": null,
    "answer": true,
    "image": "/img/r03_globus_os_ziemska.jpg"
  },
  {
    "id": "R03_ZIE_03",
    "section": "Ziemia i globus",
    "type": "fill_in",
    "prompt": "Model naszej planety w kształcie kuli to __________.",
    "explanation": "Globus jest kulistym modelem Ziemi.",
    "options": null,
    "answer": [
      "globus"
    ],
    "altAnswers": [
      [
        "globus",
        "globusem"
      ]
    ]
  },
  {
    "id": "R03_ZIE_04",
    "section": "Ziemia i globus",
    "type": "single_choice",
    "prompt": "Ile w przybliżeniu lat istnieje Ziemia?",
    "explanation": "Ziemia istnieje około 4,5 miliarda lat.",
    "options": [
      "około 4,5 mln lat",
      "około 45 mln lat",
      "około 4,5 mld lat",
      "około 450 tys. lat",
      "około 14 mld lat",
      "około 400 lat"
    ],
    "answer": 2
  },
  {
    "id": "R03_ZIE_05",
    "section": "Ziemia i globus",
    "type": "true_false",
    "prompt": "Ziemia obraca się wokół własnej osi.",
    "explanation": "Ruch obrotowy Ziemi odbywa się wokół osi ziemskiej.",
    "options": null,
    "answer": true,
    "image": "/img/r03_globus_os_ziemska.jpg"
  },
  {
    "id": "R03_ZIE_06",
    "section": "Ziemia i globus",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: biegun północny, biegun południowy, oś ziemska, zwrotnik Raka.",
    "explanation": "Zwrotnik Raka jest równoleżnikiem, a pozostałe elementy są bezpośrednio związane z osią i biegunami Ziemi.",
    "options": null,
    "answer": "zwrotnik Raka"
  },
  {
    "id": "R03_ZIE_07",
    "section": "Ziemia i globus",
    "type": "riddle",
    "prompt": "Punkt na powierzchni Ziemi połączony osią ziemską z biegunem południowym to...",
    "explanation": "Oś ziemska łączy biegun północny i biegun południowy.",
    "options": null,
    "answer": "biegun północny",
    "altAnswers": [
      "biegun północny",
      "północny biegun",
      "Biegun Północny"
    ]
  },
  {
    "id": "R03_ZIE_08",
    "section": "Ziemia i globus",
    "type": "single_choice",
    "prompt": "Dlaczego w uproszczeniu mówi się, że Ziemia jest kulą?",
    "explanation": "Wzniesienia, zagłębienia i spłaszczenie biegunów są niewielkie w porównaniu z rozmiarami planety.",
    "options": [
      "bo nie ma na niej oceanów",
      "bo wszystkie mapy są okrągłe",
      "bo odkształcenia są małe wobec rozmiarów planety",
      "bo globus jest płaski",
      "bo Ziemia nie obraca się",
      "bo lądy zajmują całą powierzchnię"
    ],
    "answer": 2
  },
  {
    "id": "R03_ZIE_09",
    "section": "Ziemia i globus",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "explanation": "Te pojęcia opisują podstawowy model i oś obrotu Ziemi.",
    "options": null,
    "left": [
      "oś ziemska",
      "biegun północny",
      "biegun południowy",
      "globus"
    ],
    "right": [
      "kulisty model Ziemi",
      "punkt na północnym końcu osi",
      "punkt na południowym końcu osi",
      "prosta przechodząca przez środek Ziemi"
    ],
    "answer": {
      "oś ziemska": "prosta przechodząca przez środek Ziemi",
      "biegun północny": "punkt na północnym końcu osi",
      "biegun południowy": "punkt na południowym końcu osi",
      "globus": "kulisty model Ziemi"
    }
  },
  {
    "id": "R03_ZIE_10",
    "section": "Ziemia i globus",
    "type": "scenario",
    "prompt": "Uczeń patrzy na model Ziemi, który może się obracać wokół pręta przechodzącego przez jego środek i oba bieguny. Jaki model ogląda?",
    "explanation": "Taki model to globus, czyli kulisty model Ziemi.",
    "options": [
      "mapę polityczną",
      "plan miasta",
      "globus",
      "kompas",
      "atlas samochodowy"
    ],
    "answer": 2,
    "image": "/img/r03_globus_os_ziemska.jpg"
  },
  {
    "id": "R03_ZIE_11",
    "section": "Ziemia i globus",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o Ziemi.",
    "explanation": "Ziemia ma kształt zbliżony do kuli, obraca się wokół własnej osi i jest lekko spłaszczona na biegunach.",
    "options": [
      "Ziemia obraca się wokół własnej osi",
      "Ziemia jest idealnym sześcianem",
      "Ziemia jest lekko spłaszczona na biegunach",
      "Globus jest modelem Ziemi",
      "Na Ziemi nie ma wzniesień ani zagłębień"
    ],
    "answer": [
      0,
      2,
      3
    ]
  },
  {
    "id": "R03_ZIE_12",
    "section": "Ziemia i globus",
    "type": "sequence",
    "prompt": "Ułóż czynności w kolejności, w jakiej najprościej wyjaśnisz budowę osi ziemskiej.",
    "explanation": "Oś ziemska przechodzi przez środek Ziemi i oba bieguny.",
    "options": null,
    "items": [
      "Wskaż środek Ziemi",
      "Wskaż biegun północny",
      "Wskaż biegun południowy",
      "Połącz te punkty prostą"
    ],
    "answer": [
      "Wskaż środek Ziemi",
      "Wskaż biegun północny",
      "Wskaż biegun południowy",
      "Połącz te punkty prostą"
    ]
  },
  {
    "id": "R03_SIA_01",
    "section": "Siatka geograficzna i półkule",
    "type": "single_choice",
    "prompt": "Jak nazywają się linie biegnące z północy na południe i łączące bieguny?",
    "explanation": "Południki łączą bieguny kuli ziemskiej.",
    "options": [
      "równoleżniki",
      "południki",
      "zwrotniki",
      "równik",
      "koła podbiegunowe",
      "granice kontynentów"
    ],
    "answer": 1,
    "image": "/img/r03_siatka_geograficzna.jpg"
  },
  {
    "id": "R03_SIA_02",
    "section": "Siatka geograficzna i półkule",
    "type": "single_choice",
    "prompt": "Który równoleżnik jest najdłuższy?",
    "explanation": "Najdłuższym równoleżnikiem jest równik.",
    "options": [
      "zwrotnik Raka",
      "zwrotnik Koziorożca",
      "równik",
      "koło podbiegunowe północne",
      "koło podbiegunowe południowe",
      "południk zerowy"
    ],
    "answer": 2,
    "image": "/img/r03_siatka_geograficzna.jpg"
  },
  {
    "id": "R03_SIA_03",
    "section": "Siatka geograficzna i półkule",
    "type": "true_false",
    "prompt": "Wszystkie południki mają taką samą długość.",
    "explanation": "Południki są równej długości.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_SIA_04",
    "section": "Siatka geograficzna i półkule",
    "type": "true_false",
    "prompt": "Równoleżniki przecinają południki pod kątem prostym.",
    "explanation": "Równoleżniki przecinają południki pod kątem prostym.",
    "options": null,
    "answer": true,
    "image": "/img/r03_siatka_geograficzna.jpg"
  },
  {
    "id": "R03_SIA_05",
    "section": "Siatka geograficzna i półkule",
    "type": "fill_in",
    "prompt": "Na globusie południki i równoleżniki tworzą siatkę __________, a na mapie siatkę __________.",
    "explanation": "Na globusie jest to siatka geograficzna, a na mapie siatka kartograficzna.",
    "options": null,
    "answer": [
      "geograficzną",
      "kartograficzną"
    ],
    "altAnswers": [
      [
        "geograficzną",
        "geograficzna"
      ],
      [
        "kartograficzną",
        "kartograficzna"
      ]
    ]
  },
  {
    "id": "R03_SIA_06",
    "section": "Siatka geograficzna i półkule",
    "type": "multi_select",
    "prompt": "Zaznacz równoleżniki, którym nadano własne nazwy.",
    "explanation": "Własne nazwy mają równik, dwa zwrotniki i dwa koła podbiegunowe.",
    "options": [
      "równik",
      "zwrotnik Raka",
      "południk 180°",
      "zwrotnik Koziorożca",
      "południk zerowy",
      "koło podbiegunowe północne"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ]
  },
  {
    "id": "R03_SIA_07",
    "section": "Siatka geograficzna i półkule",
    "type": "single_choice",
    "prompt": "Jaka płaszczyzna dzieli Ziemię na półkulę północną i południową?",
    "explanation": "Płaszczyzna równika dzieli Ziemię na półkulę północną i południową.",
    "options": [
      "płaszczyzna równika",
      "płaszczyzna południka 0° i 180°",
      "płaszczyzna zwrotnika Raka",
      "płaszczyzna koła podbiegunowego",
      "płaszczyzna dowolnej mapy",
      "płaszczyzna osi ziemskiej"
    ],
    "answer": 0
  },
  {
    "id": "R03_SIA_08",
    "section": "Siatka geograficzna i półkule",
    "type": "single_choice",
    "prompt": "Które południki tworzą płaszczyznę podziału na półkulę wschodnią i zachodnią?",
    "explanation": "Podział ten tworzą południk zerowy oraz południk 180°.",
    "options": [
      "równik i zwrotnik Raka",
      "południk 0° i południk 180°",
      "dwa dowolne równoleżniki",
      "koła podbiegunowe",
      "zwrotniki Raka i Koziorożca",
      "równik i południk 0°"
    ],
    "answer": 1
  },
  {
    "id": "R03_SIA_09",
    "section": "Siatka geograficzna i półkule",
    "type": "match",
    "prompt": "Połącz oznaczenie kierunku z jego znaczeniem.",
    "explanation": "Skróty kierunków pochodzą od nazw używanych na mapach i globusach.",
    "options": null,
    "left": [
      "N",
      "S",
      "E",
      "W"
    ],
    "right": [
      "północ",
      "południe",
      "wschód",
      "zachód"
    ],
    "answer": {
      "N": "północ",
      "S": "południe",
      "E": "wschód",
      "W": "zachód"
    }
  },
  {
    "id": "R03_SIA_10",
    "section": "Siatka geograficzna i półkule",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: równik, zwrotnik Raka, zwrotnik Koziorożca, południk zerowy.",
    "explanation": "Południk zerowy jest południkiem, a pozostałe nazwy dotyczą równoleżników.",
    "options": null,
    "answer": "południk zerowy"
  },
  {
    "id": "R03_SIA_11",
    "section": "Siatka geograficzna i półkule",
    "type": "scenario",
    "prompt": "Na globusie chcesz określić, czy punkt leży na półkuli północnej czy południowej. Którą linię musisz najpierw odszukać?",
    "explanation": "Równik jest granicą między półkulą północną i południową.",
    "options": [
      "równik",
      "południk 180°",
      "zwrotnik Koziorożca",
      "dowolną rzekę",
      "granicę kontynentu"
    ],
    "answer": 0
  },
  {
    "id": "R03_SIA_12",
    "section": "Siatka geograficzna i półkule",
    "type": "sort",
    "prompt": "Przyporządkuj linie do grup.",
    "explanation": "Zwrotniki, koła podbiegunowe i równik są równoleżnikami, a południki 0° i 180° są południkami.",
    "options": null,
    "items": [
      "równik",
      "południk zerowy",
      "zwrotnik Raka",
      "południk 180°",
      "koło podbiegunowe południowe"
    ],
    "categories": [
      "równoleżniki",
      "południki"
    ],
    "answer": {
      "równoleżniki": [
        "równik",
        "zwrotnik Raka",
        "koło podbiegunowe południowe"
      ],
      "południki": [
        "południk zerowy",
        "południk 180°"
      ]
    }
  },
  {
    "id": "R03_SIA_13",
    "section": "Siatka geograficzna i półkule",
    "type": "riddle",
    "prompt": "Równoleżnik leżący w połowie odległości między biegunami to...",
    "explanation": "Równik przebiega w połowie odległości między biegunami.",
    "options": null,
    "answer": "równik",
    "altAnswers": [
      "równik",
      "rownik"
    ]
  },
  {
    "id": "R03_SIA_14",
    "section": "Siatka geograficzna i półkule",
    "type": "true_false",
    "prompt": "Europa leży na półkuli północnej oraz częściowo na półkuli wschodniej i zachodniej.",
    "explanation": "Południk 0° przebiega przez Europę, a cały kontynent leży na północ od równika.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_KON_01",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Ile kontynentów wyróżnia się na Ziemi?",
    "explanation": "Na Ziemi wyróżnia się siedem kontynentów.",
    "options": [
      "pięć",
      "sześć",
      "siedem",
      "osiem",
      "dziewięć",
      "dziesięć"
    ],
    "answer": 2,
    "image": "/img/r03_kontynenty_oceany_mapa.jpg"
  },
  {
    "id": "R03_KON_02",
    "section": "Kontynenty i oceany",
    "type": "multi_select",
    "prompt": "Zaznacz kontynenty.",
    "explanation": "Wśród siedmiu kontynentów są między innymi Azja, Afryka, Europa i Australia.",
    "options": [
      "Azja",
      "Afryka",
      "Europa",
      "Australia",
      "Grenlandia",
      "Ocean Indyjski"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R03_KON_03",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Ile oceanów wchodzi w skład oceanu światowego?",
    "explanation": "Ocean światowy jest umownie podzielony na pięć oceanów.",
    "options": [
      "trzy",
      "cztery",
      "pięć",
      "sześć",
      "siedem",
      "dwa"
    ],
    "answer": 2,
    "image": "/img/r03_kontynenty_oceany_mapa.jpg"
  },
  {
    "id": "R03_KON_04",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Który ocean nazywany jest Pacyfikiem?",
    "explanation": "Pacyfik to inna nazwa Oceanu Spokojnego.",
    "options": [
      "Ocean Atlantycki",
      "Ocean Indyjski",
      "Ocean Spokojny",
      "Ocean Arktyczny",
      "Ocean Południowy",
      "Ocean Śródziemny"
    ],
    "answer": 2
  },
  {
    "id": "R03_KON_05",
    "section": "Kontynenty i oceany",
    "type": "single_choice",
    "prompt": "Który ocean nazywany jest Atlantykiem?",
    "explanation": "Atlantyk to inna nazwa Oceanu Atlantyckiego.",
    "options": [
      "Ocean Spokojny",
      "Ocean Atlantycki",
      "Ocean Indyjski",
      "Ocean Arktyczny",
      "Ocean Południowy",
      "Ocean Światowy"
    ],
    "answer": 1
  },
  {
    "id": "R03_KON_06",
    "section": "Kontynenty i oceany",
    "type": "true_false",
    "prompt": "Europa i Azja w rzeczywistości tworzą jeden wielki kontynent nazywany Eurazją.",
    "explanation": "Europę i Azję dzieli się umownie ze względów historycznych i kulturowych.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_KON_07",
    "section": "Kontynenty i oceany",
    "type": "fill_in",
    "prompt": "Duże obszary lądowe otoczone wodami mórz i oceanów to __________.",
    "explanation": "Kontynenty to bardzo duże obszary lądu otoczone wodami mórz i oceanów.",
    "options": null,
    "answer": [
      "kontynenty"
    ],
    "altAnswers": [
      [
        "kontynenty",
        "kontynentami"
      ]
    ]
  },
  {
    "id": "R03_KON_08",
    "section": "Kontynenty i oceany",
    "type": "match",
    "prompt": "Połącz nazwę z typem obiektu.",
    "explanation": "Azja i Antarktyda to kontynenty, a Ocean Indyjski i Arktyczny to oceany.",
    "options": null,
    "left": [
      "Azja",
      "Ocean Indyjski",
      "Antarktyda",
      "Ocean Arktyczny"
    ],
    "right": [
      "kontynent",
      "ocean",
      "kontynent",
      "ocean"
    ],
    "answer": {
      "Azja": "kontynent",
      "Ocean Indyjski": "ocean",
      "Antarktyda": "kontynent",
      "Ocean Arktyczny": "ocean"
    }
  },
  {
    "id": "R03_KON_09",
    "section": "Kontynenty i oceany",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Azja, Afryka, Ocean Spokojny, Australia.",
    "explanation": "Ocean Spokojny jest oceanem, a pozostałe nazwy to kontynenty.",
    "options": null,
    "answer": "Ocean Spokojny"
  },
  {
    "id": "R03_KON_10",
    "section": "Kontynenty i oceany",
    "type": "scenario",
    "prompt": "Uczeń ma wskazać kontynent leżący na południe od Europy, przez który przebiegają równik i południk zerowy. Co powinien wskazać?",
    "explanation": "Afryka leży na południe od Europy, a przez jej obszar przebiegają równik i południk zerowy.",
    "options": [
      "Australia",
      "Afryka",
      "Antarktyda",
      "Ameryka Północna",
      "Europa"
    ],
    "answer": 1,
    "image": "/img/r03_kontynenty_oceany_mapa.jpg"
  },
  {
    "id": "R03_KON_11",
    "section": "Kontynenty i oceany",
    "type": "sort",
    "prompt": "Przyporządkuj nazwy do kategorii.",
    "explanation": "Kontynenty są obszarami lądowymi, a oceany tworzą części oceanu światowego.",
    "options": null,
    "items": [
      "Ameryka Północna",
      "Ocean Południowy",
      "Europa",
      "Ocean Atlantycki",
      "Ameryka Południowa",
      "Ocean Arktyczny"
    ],
    "categories": [
      "kontynenty",
      "oceany"
    ],
    "answer": {
      "kontynenty": [
        "Ameryka Północna",
        "Europa",
        "Ameryka Południowa"
      ],
      "oceany": [
        "Ocean Południowy",
        "Ocean Atlantycki",
        "Ocean Arktyczny"
      ]
    }
  },
  {
    "id": "R03_KON_12",
    "section": "Kontynenty i oceany",
    "type": "true_false",
    "prompt": "Kontynenty zajmują większą powierzchnię na półkuli północnej niż na półkuli południowej.",
    "explanation": "Kontynenty są rozmieszczone nierównomiernie, a większa powierzchnia lądów znajduje się na półkuli północnej.",
    "options": null,
    "answer": true,
    "image": "/img/r03_kontynenty_oceany_mapa.jpg"
  },
  {
    "id": "R03_KON_13",
    "section": "Kontynenty i oceany",
    "type": "riddle",
    "prompt": "Jeden wielki kontynent tworzony w rzeczywistości przez Europę i Azję to...",
    "explanation": "Europa i Azja tworzą Eurazję, choć zwykle omawia się je jako dwa kontynenty.",
    "options": null,
    "answer": "Eurazja",
    "altAnswers": [
      "Eurazja",
      "eurazja"
    ]
  },
  {
    "id": "R03_ODK_01",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Kto był jednym z pierwszych wielkich podróżników i odkrywców wnętrza Azji?",
    "explanation": "Marco Polo odbył wieloletnią wyprawę w głąb Azji.",
    "options": [
      "Marco Polo",
      "Krzysztof Kolumb",
      "James Cook",
      "Robert Peary",
      "Roald Amundsen",
      "Paweł Strzelecki"
    ],
    "answer": 0
  },
  {
    "id": "R03_ODK_02",
    "section": "Wielkie odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "Wyprawa Marca Polo w głąb Azji trwała od roku __________ do roku __________.",
    "explanation": "Wyprawa Marca Polo trwała od 1271 do 1295 roku.",
    "options": null,
    "answer": [
      "1271",
      "1295"
    ],
    "altAnswers": [
      [
        "1271",
        "1271 r."
      ],
      [
        "1295",
        "1295 r."
      ]
    ]
  },
  {
    "id": "R03_ODK_03",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Do jakiego miasta w Chinach dotarł Marco Polo drogą lądową?",
    "explanation": "Marco Polo dotarł do Pekinu, stolicy Chin.",
    "options": [
      "Pekin",
      "Szanghaj",
      "Kanton",
      "Tokio",
      "Delhi",
      "Bagdad"
    ],
    "answer": 0
  },
  {
    "id": "R03_ODK_04",
    "section": "Wielkie odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Które towary zaczęto sprowadzać z Azji dzięki poznaniu odległych państw przez Europejczyków?",
    "explanation": "Do przypraw sprowadzanych z Azji należały pieprz, cynamon, goździki i gałka muszkatołowa.",
    "options": [
      "pieprz",
      "cynamon",
      "goździki",
      "gałka muszkatołowa",
      "ziemniaki",
      "kakao"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R03_ODK_05",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Dlaczego w drugiej połowie XV wieku europejscy kupcy szukali nowej drogi do Azji?",
    "explanation": "Dotychczasowe lądowe szlaki handlowe zostały zablokowane przez Turków.",
    "options": [
      "bo zabrakło statków",
      "bo lądowe szlaki handlowe zablokowali Turcy",
      "bo odkryto Antarktydę",
      "bo zakazano używania kompasu",
      "bo Europa była bezludna",
      "bo nie znano przypraw"
    ],
    "answer": 1
  },
  {
    "id": "R03_ODK_06",
    "section": "Wielkie odkrycia geograficzne",
    "type": "true_false",
    "prompt": "W morską podróż do Azji jako pierwsi wyruszyli Portugalczycy, wybierając drogę wokół Afryki.",
    "explanation": "Portugalczycy szukali drogi do Azji wokół Afryki.",
    "options": null,
    "answer": true,
    "image": "/img/r03_karawela_ocean.jpg"
  },
  {
    "id": "R03_ODK_07",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Który podróżnik dotarł w 1498 roku do zachodniego wybrzeża Indii po przepłynięciu Oceanu Indyjskiego?",
    "explanation": "Vasco da Gama dopłynął do Indii w 1498 roku.",
    "options": [
      "Vasco da Gama",
      "Krzysztof Kolumb",
      "Ferdynand Magellan",
      "James Cook",
      "Henry Stanley",
      "Marco Polo"
    ],
    "answer": 0
  },
  {
    "id": "R03_ODK_08",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Do jakich wysp dotarł Krzysztof Kolumb w 1492 roku?",
    "explanation": "Kolumb dotarł do Bahamów, Kuby i Haiti.",
    "options": [
      "Bahamów, Kuby i Haiti",
      "Hawajów, Filipin i Jawy",
      "Grenlandii, Islandii i Spitsbergenu",
      "Moluków, Jawy i Borneo",
      "Wysp Brytyjskich i Sycylii",
      "Nowej Zelandii i Tasmanii"
    ],
    "answer": 0
  },
  {
    "id": "R03_ODK_09",
    "section": "Wielkie odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Krzysztof Kolumb od razu wiedział, że dotarł do nowego kontynentu.",
    "explanation": "Kolumb sądził, że dopłynął do Indii, dlatego wyspy nazwał Indiami Zachodnimi.",
    "options": null,
    "answer": false
  },
  {
    "id": "R03_ODK_10",
    "section": "Wielkie odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Od imienia którego podróżnika nazwano Amerykę?",
    "explanation": "Nazwa Ameryka pochodzi od imienia Ameriga Vespucciego.",
    "options": null,
    "answer": "Amerigo Vespucci",
    "altAnswers": [
      "Amerigo Vespucci",
      "Vespucci",
      "Ameriga Vespucciego",
      "Amerigo"
    ]
  },
  {
    "id": "R03_ODK_11",
    "section": "Wielkie odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Żeglarz płynie na zachód przez Ocean Atlantycki, chce dotrzeć do Indii, ale trafia na Bahamy, Kubę i Haiti. Kto to jest?",
    "explanation": "Krzysztof Kolumb w 1492 roku popłynął na zachód przez Atlantyk i dotarł do wysp Ameryki.",
    "options": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Marco Polo",
      "David Livingstone",
      "Robert Peary"
    ],
    "answer": 0,
    "image": "/img/r03_karawela_ocean.jpg"
  },
  {
    "id": "R03_ODK_12",
    "section": "Wielkie odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz podróżnika z dokonaniem.",
    "explanation": "Każdy z tych podróżników jest powiązany z innym etapem poznawania świata.",
    "options": null,
    "left": [
      "Marco Polo",
      "Vasco da Gama",
      "Krzysztof Kolumb",
      "Ferdynand Magellan"
    ],
    "right": [
      "dotarł drogą lądową do Pekinu",
      "dopłynął do Indii wokół Afryki",
      "dotarł do Bahamów, Kuby i Haiti",
      "dowodził wyprawą, która opłynęła Ziemię"
    ],
    "answer": {
      "Marco Polo": "dotarł drogą lądową do Pekinu",
      "Vasco da Gama": "dopłynął do Indii wokół Afryki",
      "Krzysztof Kolumb": "dotarł do Bahamów, Kuby i Haiti",
      "Ferdynand Magellan": "dowodził wyprawą, która opłynęła Ziemię"
    }
  },
  {
    "id": "R03_ODK_13",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "explanation": "Marco Polo wyruszył w 1271 roku, Kolumb w 1492, Vasco da Gama dotarł do Indii w 1498, a Magellan rozpoczął wyprawę w 1519 roku.",
    "options": null,
    "items": [
      "Wyprawa Kolumba do Ameryki",
      "Wyprawa Vasco da Gamy do Indii",
      "Początek wyprawy Magellana",
      "Początek wyprawy Marca Polo"
    ],
    "answer": [
      "Początek wyprawy Marca Polo",
      "Wyprawa Kolumba do Ameryki",
      "Wyprawa Vasco da Gamy do Indii",
      "Początek wyprawy Magellana"
    ]
  },
  {
    "id": "R03_ODK_14",
    "section": "Wielkie odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Bahamy, Kuba, Haiti, Hawaje.",
    "explanation": "Bahamy, Kuba i Haiti są związane z wyprawą Kolumba, a Hawaje z wyprawami Jamesa Cooka.",
    "options": null,
    "answer": "Hawaje"
  },
  {
    "id": "R03_ODK_15",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Jak nazywano okres dalekich podróży morskich w poszukiwaniu szlaków handlowych do Azji?",
    "explanation": "Ten okres nazwano epoką wielkich odkryć geograficznych.",
    "options": [
      "epoka wielkich odkryć geograficznych",
      "rewolucja przemysłowa",
      "wielka wędrówka ludów",
      "średniowieczny pokój morski",
      "epoka lodowcowa",
      "czas wielkich bitew"
    ],
    "answer": 0,
    "image": "/img/r03_karawela_ocean.jpg"
  },
  {
    "id": "R03_BAD_01",
    "section": "Badacze i podróże nowożytne",
    "type": "single_choice",
    "prompt": "Kto dowodził wyprawą, której uczestnicy jako pierwsi opłynęli Ziemię?",
    "explanation": "Pierwszą wyprawą dookoła świata dowodził Ferdynand Magellan.",
    "options": [
      "Ferdynand Magellan",
      "James Cook",
      "Marco Polo",
      "Krzysztof Kolumb",
      "Henry Stanley",
      "Robert Peary"
    ],
    "answer": 0,
    "image": "/img/r03_magellan_ciesnina.jpg"
  },
  {
    "id": "R03_BAD_02",
    "section": "Badacze i podróże nowożytne",
    "type": "fill_in",
    "prompt": "Wyprawa Magellana rozpoczęła się w roku __________ i powróciła do Hiszpanii w roku __________.",
    "explanation": "Wyprawa trwała od 1519 do 1522 roku.",
    "options": null,
    "answer": [
      "1519",
      "1522"
    ],
    "altAnswers": [
      [
        "1519",
        "1519 r."
      ],
      [
        "1522",
        "1522 r."
      ]
    ]
  },
  {
    "id": "R03_BAD_03",
    "section": "Badacze i podróże nowożytne",
    "type": "single_choice",
    "prompt": "Jak Magellan nazwał ocean leżący na zachód od Ameryki Południowej?",
    "explanation": "Magellan nazwał ten ocean Pacyfikiem, czyli Oceanem Spokojnym.",
    "options": [
      "Pacyfikiem",
      "Atlantykiem",
      "Oceanem Arktycznym",
      "Oceanem Indyjskim",
      "Morzem Śródziemnym",
      "Oceanem Południowym"
    ],
    "answer": 0
  },
  {
    "id": "R03_BAD_04",
    "section": "Badacze i podróże nowożytne",
    "type": "true_false",
    "prompt": "Magellan zginął na Filipinach.",
    "explanation": "Magellan zginął w walce z tubylcami na Filipinach.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_BAD_05",
    "section": "Badacze i podróże nowożytne",
    "type": "single_choice",
    "prompt": "Który podróżnik trzykrotnie opłynął Ziemię i odkrył wiele wysp na Oceanie Spokojnym, m.in. Hawaje?",
    "explanation": "James Cook trzykrotnie opłynął Ziemię i odkrył wiele wysp na Oceanie Spokojnym, w tym Hawaje.",
    "options": [
      "James Cook",
      "Willem Janszoon",
      "David Livingstone",
      "Henry Stanley",
      "Roald Amundsen",
      "Don Walsh"
    ],
    "answer": 0
  },
  {
    "id": "R03_BAD_06",
    "section": "Badacze i podróże nowożytne",
    "type": "single_choice",
    "prompt": "Kto odkrył Australię w 1605 roku?",
    "explanation": "Willem Janszoon był holenderskim żeglarzem, który dotarł do Australii w 1605 roku.",
    "options": [
      "Willem Janszoon",
      "James Cook",
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Robert Peary",
      "Edmund Hillary"
    ],
    "answer": 0
  },
  {
    "id": "R03_BAD_07",
    "section": "Badacze i podróże nowożytne",
    "type": "match",
    "prompt": "Połącz badacza z dokonaniem.",
    "explanation": "Zestawia się tych badaczy z odkryciami w Afryce i wyprawami polarnymi.",
    "options": null,
    "left": [
      "David Livingstone",
      "Henry Stanley",
      "Robert Peary",
      "Roald Amundsen"
    ],
    "right": [
      "odkrył Wodospady Wiktorii",
      "odszukał źródła Nilu",
      "zdobył biegun północny",
      "zdobył biegun południowy"
    ],
    "answer": {
      "David Livingstone": "odkrył Wodospady Wiktorii",
      "Henry Stanley": "odszukał źródła Nilu",
      "Robert Peary": "zdobył biegun północny",
      "Roald Amundsen": "zdobył biegun południowy"
    },
    "image": "/img/r03_wodospady_wiktorii.jpg"
  },
  {
    "id": "R03_BAD_08",
    "section": "Badacze i podróże nowożytne",
    "type": "single_choice",
    "prompt": "Kto zdobył najwyższy szczyt Ziemi w 1953 roku?",
    "explanation": "Mount Everest zdobyli Edmund Hillary i Tenzing Norgay.",
    "options": [
      "Edmund Hillary i Tenzing Norgay",
      "Robert Peary i Don Walsh",
      "Roald Amundsen i James Cook",
      "Marco Polo i Vasco da Gama",
      "David Livingstone i Henry Stanley",
      "Willem Janszoon i Amerigo Vespucci"
    ],
    "answer": 0,
    "image": "/img/r03_bieguny_everest_row_marianski.jpg"
  },
  {
    "id": "R03_BAD_09",
    "section": "Badacze i podróże nowożytne",
    "type": "single_choice",
    "prompt": "Do jakiego najgłębszego miejsca na Ziemi opuścili się Jacques Piccard i Don Walsh?",
    "explanation": "Jacques Piccard i Don Walsh opuścili się na dno Rowu Mariańskiego.",
    "options": [
      "Rowu Mariańskiego",
      "Morza Kaspijskiego",
      "Jeziora Tanganika",
      "Kanału Sueskiego",
      "Cieśniny Magellana",
      "Zatoki Hudsona"
    ],
    "answer": 0,
    "image": "/img/r03_bieguny_everest_row_marianski.jpg"
  },
  {
    "id": "R03_BAD_10",
    "section": "Badacze i podróże nowożytne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia XX wieku w kolejności chronologicznej.",
    "explanation": "Kolejność z tabeli to: 1909, 1911, 1953 i 1960.",
    "options": null,
    "items": [
      "Zdobycie Mount Everestu",
      "Zejście na dno Rowu Mariańskiego",
      "Zdobycie bieguna północnego",
      "Zdobycie bieguna południowego"
    ],
    "answer": [
      "Zdobycie bieguna północnego",
      "Zdobycie bieguna południowego",
      "Zdobycie Mount Everestu",
      "Zejście na dno Rowu Mariańskiego"
    ],
    "image": "/img/r03_bieguny_everest_row_marianski.jpg"
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który ocean trzeba było przepłynąć po opłynięciu Ameryki od południa, aby według przypuszczeń dotrzeć do wschodnich wybrzeży Azji?",
    "explanation": "Po zachodniej stronie Ameryki Południowej leży Ocean Spokojny, nazwany przez Magellana Pacyfikiem.",
    "options": [
      "Ocean Spokojny",
      "Ocean Atlantycki",
      "Ocean Arktyczny",
      "Ocean Południowy",
      "Ocean Indyjski",
      "Ocean Światowy"
    ],
    "answer": 0,
    "image": "/img/r03_magellan_ciesnina.jpg"
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz obszary, przez które przebiegała trasa Marca Polo.",
    "explanation": "Trasa Marca Polo wiodła między innymi przez Nizinę Mezopotamską, Wyżynę Irańską, Pamir i pustynię Gobi.",
    "options": [
      "Nizina Mezopotamska",
      "Wyżyna Irańska",
      "góry Pamir",
      "pustynia Gobi",
      "Cieśnina Magellana",
      "Hawaje"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywał się najdalej na południe wysunięty punkt Afryki, do którego dotarł Vasco da Gama?",
    "explanation": "Vasco da Gama dotarł do Przylądka Igielnego.",
    "options": [
      "Przylądek Igielny",
      "Przylądek Dobrej Nadziei",
      "Przylądek Horn",
      "Cieśnina Magellana",
      "Zatoka Hudsona",
      "Wyspa Luzon"
    ],
    "answer": 0
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "James Cook przekroczył oba koła podbiegunowe.",
    "explanation": "James Cook przekroczył oba koła podbiegunowe.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obiekt geograficzny z podróżnikiem, którego dotyczy.",
    "explanation": "Góry Pamir wiążą się z podróżą Marca Polo, Przylądek Igielny z wyprawą Vasco da Gamy, Wodospady Wiktorii z Davidem Livingstone’em, a Hawaje z Jamesem Cookiem.",
    "options": null,
    "left": [
      "góry Pamir",
      "Przylądek Igielny",
      "Wodospady Wiktorii",
      "Hawaje"
    ],
    "right": [
      "Marco Polo",
      "Vasco da Gama",
      "David Livingstone",
      "James Cook"
    ],
    "answer": {
      "góry Pamir": "Marco Polo",
      "Przylądek Igielny": "Vasco da Gama",
      "Wodospady Wiktorii": "David Livingstone",
      "Hawaje": "James Cook"
    }
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Marek Kamiński w 1995 roku zdobył najpierw biegun __________, a później samotnie biegun __________.",
    "explanation": "Marek Kamiński dotarł do bieguna północnego w marcu 1995 roku, a w grudniu samotnie zdobył biegun południowy.",
    "options": null,
    "answer": [
      "północny",
      "południowy"
    ],
    "altAnswers": [
      [
        "północny",
        "północnego"
      ],
      [
        "południowy",
        "południowego"
      ]
    ],
    "image": "/img/r03_bieguny_everest_row_marianski.jpg"
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz XIX wieku bada okolice jeziora Tanganika, biegi rzek Zambezi i Konga oraz odkrywa Wodospady Wiktorii. Kto to jest?",
    "explanation": "David Livingstone badał okolice jeziora Tanganika oraz biegi Zambezi i Konga, a także odkrył Wodospady Wiktorii.",
    "options": [
      "David Livingstone",
      "Henry Stanley",
      "James Cook",
      "Robert Peary",
      "Roald Amundsen"
    ],
    "answer": 0,
    "image": "/img/r03_wodospady_wiktorii.jpg"
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które wyspy były celem wyprawy dowodzonej przez Ferdynanda Magellana, nazywane wówczas Wyspami Korzennymi?",
    "explanation": "Celem wyprawy Magellana były Moluki, czyli Wyspy Korzenne.",
    "options": [
      "Moluki",
      "Hawaje",
      "Bahamy",
      "Filipiny",
      "Kuba i Haiti",
      "Nowa Zelandia"
    ],
    "answer": 0
  }
];

const KID_PROMPTS = {
  "R03_ZIE_01": "Jaki kształt ma Ziemia w uproszczeniu?",
  "R03_SIA_01": "Jak nazywają się linie od bieguna do bieguna?",
  "R03_SIA_07": "Co dzieli Ziemię na północ i południe?",
  "R03_KON_01": "Ile jest kontynentów?",
  "R03_KON_03": "Ile jest oceanów?",
  "R03_ODK_01": "Który podróżnik dotarł daleko w głąb Azji?",
  "R03_ODK_08": "Do jakich wysp dotarł Kolumb?",
  "R03_BAD_01": "Kto dowodził pierwszą wyprawą dookoła świata?",
  "R03_BAD_08": "Kto zdobył Mount Everest w 1953 roku?",
  "R03_HARD_07": "Który badacz odkrył Wodospady Wiktorii?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Lądy i oceany na Ziemi",
  "icon": "🌍",
  "sectionOrder": [
    "Ziemia i globus",
    "Siatka geograficzna i półkule",
    "Kontynenty i oceany",
    "Wielkie odkrycia geograficzne",
    "Badacze i podróże nowożytne",
    "Super trudne"
  ],
  "sectionIcons": {
    "Ziemia i globus": "🌍",
    "Siatka geograficzna i półkule": "🧭",
    "Kontynenty i oceany": "🗺️",
    "Wielkie odkrycia geograficzne": "⛵",
    "Badacze i podróże nowożytne": "🏔️",
    "Super trudne": "🔥"
  }
,
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
