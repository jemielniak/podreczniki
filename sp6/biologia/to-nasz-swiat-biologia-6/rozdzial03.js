// Skróty sekcji:
//   STA = Stawonogi
//   SKO = Skorupiaki
//   PAJ = Pajęczaki
//   OWA = Owady
//   MIE = Mięczaki
//   POW = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_STA_01",
    "section": "Stawonogi",
    "type": "single_choice",
    "prompt": "Do jakiej grupy zwierząt należą biedronka, motyl, rak, krab i pająk?",
    "options": [
      "do mięczaków",
      "do stawonogów",
      "do ryb",
      "do płazów",
      "do pierścienic",
      "do parzydełkowców"
    ],
    "answer": 1,
    "explanation": "Wszystkie wymienione zwierzęta mają odnóża z części połączonych stawami, dlatego należą do stawonogów."
  },
  {
    "id": "R03_STA_02",
    "section": "Stawonogi",
    "type": "multi_select",
    "prompt": "Zaznacz wspólne cechy każdego stawonoga.",
    "options": [
      "ciało zbudowane z segmentów",
      "odnóża z części połączonych stawami",
      "mocny chitynowy pancerz lub oskórek",
      "obecność kręgosłupa",
      "muszla rosnąca razem z ciałem",
      "ciało pokryte piórami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Stawonogi mają segmentowane ciało, stawowe odnóża oraz chitynowy pancerz lub oskórek.",
    "image": "/img/r03_stawonog_cechy.jpg"
  },
  {
    "id": "R03_STA_03",
    "section": "Stawonogi",
    "type": "true_false",
    "prompt": "Stawonogi można spotkać wyłącznie w wodzie.",
    "options": null,
    "answer": false,
    "explanation": "Stawonogi żyją w wodzie, powietrzu, na lądzie i w glebie."
  },
  {
    "id": "R03_STA_04",
    "section": "Stawonogi",
    "type": "fill_in",
    "prompt": "Staw to ruchome połączenie między częściami __________.",
    "options": null,
    "answer": [
      "odnóży"
    ],
    "altAnswers": [
      [
        "odnóży",
        "odnóża",
        "nog"
      ]
    ],
    "explanation": "Nazwa stawonogi pochodzi od odnóży z części połączonych stawami."
  },
  {
    "id": "R03_STA_05",
    "section": "Stawonogi",
    "type": "riddle",
    "prompt": "Proces zrzucania zbyt małego chitynowego pancerza przez stawonoga to...",
    "options": null,
    "answer": "linienie",
    "altAnswers": [
      "linienie",
      "proces linienia"
    ],
    "explanation": "Chitynowy pancerz nie rośnie, więc stawonóg co pewien czas zrzuca go w procesie linienia.",
    "image": "/img/r03_linienie_stawonoga.jpg"
  },
  {
    "id": "R03_STA_06",
    "section": "Stawonogi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: skorupiaki, pajęczaki, owady, głowonogi.",
    "options": null,
    "answer": "głowonogi",
    "explanation": "Skorupiaki, pajęczaki i owady to grupy stawonogów, a głowonogi należą do mięczaków."
  },
  {
    "id": "R03_STA_07",
    "section": "Stawonogi",
    "type": "scenario",
    "prompt": "Podczas obserwacji uczeń widzi zwierzę o ciele podzielonym na segmenty, z odnóżami złożonymi z części połączonych stawami i z chitynową osłoną. Jak najtrafniej nazwie takie zwierzę?",
    "options": [
      "stawonóg",
      "mięczak",
      "ryba",
      "ptak",
      "płaz",
      "ssak"
    ],
    "answer": 0,
    "explanation": "Taki zestaw cech jest charakterystyczny dla stawonogów.",
    "image": "/img/r03_stawonog_cechy.jpg"
  },
  {
    "id": "R03_STA_08",
    "section": "Stawonogi",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "segmenty",
      "chityna",
      "staw",
      "linienie"
    ],
    "right": [
      "części, z których zbudowane jest ciało",
      "wodoszczelny i wytrzymały związek chemiczny",
      "ruchome połączenie między częściami odnóży",
      "zrzucanie starego pancerza"
    ],
    "answer": {
      "segmenty": "części, z których zbudowane jest ciało",
      "chityna": "wodoszczelny i wytrzymały związek chemiczny",
      "staw": "ruchome połączenie między częściami odnóży",
      "linienie": "zrzucanie starego pancerza"
    },
    "explanation": "Te pojęcia opisują najważniejsze elementy budowy i wzrostu stawonogów."
  },
  {
    "id": "R03_STA_09",
    "section": "Stawonogi",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady zwierząt do grup stawonogów.",
    "options": null,
    "items": [
      "krab tęczowy",
      "tygrzyk paskowany",
      "konik wąsacz",
      "rak",
      "pająk topik",
      "biedronka"
    ],
    "categories": [
      "skorupiaki",
      "pajęczaki",
      "owady"
    ],
    "answer": {
      "skorupiaki": [
        "krab tęczowy",
        "rak"
      ],
      "pajęczaki": [
        "tygrzyk paskowany",
        "pająk topik"
      ],
      "owady": [
        "konik wąsacz",
        "biedronka"
      ]
    },
    "explanation": "Kraby i raki to skorupiaki, pająki należą do pajęczaków, a konik wąsacz i biedronka są owadami."
  },
  {
    "id": "R03_STA_10",
    "section": "Stawonogi",
    "type": "sequence",
    "prompt": "Ułóż etapy linienia stawonoga w prawidłowej kolejności.",
    "options": null,
    "items": [
      "ciało pokrywa się nowym, miękkim pancerzem",
      "pancerz staje się zbyt mały",
      "nowy pancerz twardnieje",
      "stawonóg zrzuca stary pancerz"
    ],
    "answer": [
      "pancerz staje się zbyt mały",
      "stawonóg zrzuca stary pancerz",
      "ciało pokrywa się nowym, miękkim pancerzem",
      "nowy pancerz twardnieje"
    ],
    "explanation": "Najpierw stary pancerz ogranicza wzrost, potem jest zrzucany, a nowa osłona stopniowo twardnieje.",
    "image": "/img/r03_linienie_stawonoga.jpg"
  },
  {
    "id": "R03_SKO_01",
    "section": "Skorupiaki",
    "type": "single_choice",
    "prompt": "Gdzie najczęściej żyją skorupiaki?",
    "options": [
      "wyłącznie w suchych piaskach",
      "głównie w wodzie lub miejscach wilgotnych",
      "tylko w powietrzu",
      "wyłącznie we wnętrzach drzew",
      "tylko na śniegu",
      "tylko na pustyniach"
    ],
    "answer": 1,
    "explanation": "Skorupiaki żyją głównie w wodzie lub w wilgotnych miejscach, choć niektóre prowadzą tryb wodno-lądowy.",
    "image": "/img/r03_skorupiaki_srodowiska.jpg"
  },
  {
    "id": "R03_SKO_02",
    "section": "Skorupiaki",
    "type": "true_false",
    "prompt": "Stonoga murowa ma sto nóg, zgodnie ze swoją nazwą.",
    "options": null,
    "answer": false,
    "explanation": "W podręczniku podano, że stonoga murowa ma tylko 14 nóg."
  },
  {
    "id": "R03_SKO_03",
    "section": "Skorupiaki",
    "type": "fill_in",
    "prompt": "Typowymi przedstawicielami skorupiaków w Polsce są __________, żyjące w czystych rzekach, jeziorach i stawach.",
    "options": null,
    "answer": [
      "raki"
    ],
    "altAnswers": [
      [
        "raki",
        "rak",
        "raki słodkowodne"
      ]
    ],
    "explanation": "W Polsce typowymi skorupiakami są raki, na przykład rak szlachetny i rak błotny."
  },
  {
    "id": "R03_SKO_04",
    "section": "Skorupiaki",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budowy raka opisane w podręczniku.",
    "options": [
      "2 pary czułków",
      "5 par odnóży krocznych",
      "oczy na ruchomych słupkach",
      "odnóża odwłokowe pomagające w pływaniu",
      "3 pary odnóży krocznych",
      "pióra na odwłoku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rak ma 2 pary czułków, 5 par odnóży krocznych, oczy na ruchomych słupkach i odnóża odwłokowe.",
    "image": "/img/r03_rak_budowa.jpg"
  },
  {
    "id": "R03_SKO_05",
    "section": "Skorupiaki",
    "type": "single_choice",
    "prompt": "Jak nazywa się pierwsza para odnóży krocznych raka?",
    "options": [
      "czułki",
      "szczypce",
      "płetwa grzbietowa",
      "skrzydła",
      "nogogłaszczki",
      "worek trzewiowy"
    ],
    "answer": 1,
    "explanation": "Pierwsza para odnóży krocznych raka tworzy szczypce służące do obrony i zdobywania pożywienia.",
    "image": "/img/r03_rak_budowa.jpg"
  },
  {
    "id": "R03_SKO_06",
    "section": "Skorupiaki",
    "type": "match",
    "prompt": "Połącz element budowy raka z jego funkcją.",
    "options": null,
    "left": [
      "czułki",
      "szczypce",
      "odnóża odwłokowe",
      "wachlarzowata płetwa"
    ],
    "right": [
      "narządy dotyku, smaku i węchu",
      "obrona i zdobywanie pożywienia",
      "pomoc w pływaniu i utrzymywaniu jaj u samic",
      "ułatwia ucieczkę do tyłu"
    ],
    "answer": {
      "czułki": "narządy dotyku, smaku i węchu",
      "szczypce": "obrona i zdobywanie pożywienia",
      "odnóża odwłokowe": "pomoc w pływaniu i utrzymywaniu jaj u samic",
      "wachlarzowata płetwa": "ułatwia ucieczkę do tyłu"
    },
    "explanation": "Budowa raka jest przystosowana do odbierania bodźców, zdobywania pokarmu, pływania i ucieczki.",
    "image": "/img/r03_rak_budowa.jpg"
  },
  {
    "id": "R03_SKO_07",
    "section": "Skorupiaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: rak, homar, krab, skorpion.",
    "options": null,
    "answer": "skorpion",
    "explanation": "Rak, homar i krab to skorupiaki, a skorpion jest pajęczakiem."
  },
  {
    "id": "R03_SKO_08",
    "section": "Skorupiaki",
    "type": "scenario",
    "prompt": "Na kadłubie statku osiadły małe skorupiaki, które zwiększają jego masę i utrudniają pływanie. O jakich skorupiakach mówi opis?",
    "options": [
      "pąkle",
      "raki",
      "oczlikach",
      "stonogach murowych",
      "homarach",
      "krabach palmowych"
    ],
    "answer": 0,
    "explanation": "Pąkle mogą przyczepiać się do statków, zwiększać ich masę i utrudniać pływanie.",
    "image": "/img/r03_skorupiaki_srodowiska.jpg"
  },
  {
    "id": "R03_SKO_09",
    "section": "Skorupiaki",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady znaczenia skorupiaków do kategorii.",
    "options": null,
    "items": [
      "czyszczą dna zbiorników wodnych",
      "zooplankton stanowi pożywienie dla ryb",
      "raki, homary i kraby są poławiane na pokarm",
      "pąkle utrudniają pływanie statków",
      "niektóre skorupiaki pasożytują na innych skorupiakach"
    ],
    "categories": [
      "znaczenie pozytywne",
      "znaczenie negatywne"
    ],
    "answer": {
      "znaczenie pozytywne": [
        "czyszczą dna zbiorników wodnych",
        "zooplankton stanowi pożywienie dla ryb",
        "raki, homary i kraby są poławiane na pokarm"
      ],
      "znaczenie negatywne": [
        "pąkle utrudniają pływanie statków",
        "niektóre skorupiaki pasożytują na innych skorupiakach"
      ]
    },
    "explanation": "Skorupiaki mogą być pożyteczne w ekosystemach i gospodarce, ale niektóre powodują szkody lub pasożytują."
  },
  {
    "id": "R03_SKO_10",
    "section": "Skorupiaki",
    "type": "true_false",
    "prompt": "Większość skorupiaków pobiera tlen z wody skrzelami.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że większość skorupiaków ma skrzela, którymi pobiera tlen z wody."
  },
  {
    "id": "R03_PAJ_01",
    "section": "Pajęczaki",
    "type": "single_choice",
    "prompt": "Na jakie główne części jest podzielone ciało pajęczaka?",
    "options": [
      "głowa, tułów i odwłok",
      "głowotułów i odwłok",
      "głowa i stopa",
      "worek trzewiowy i muszla",
      "tułów i skrzydła",
      "głowa i ogon"
    ],
    "answer": 1,
    "explanation": "Ciało pajęczaka jest podzielone na głowotułów i odwłok."
  },
  {
    "id": "R03_PAJ_02",
    "section": "Pajęczaki",
    "type": "multi_select",
    "prompt": "Zaznacz grupy należące do pajęczaków.",
    "options": [
      "pająki",
      "kosarze",
      "roztocze",
      "skorpiony",
      "małże",
      "muchówki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do pajęczaków należą między innymi pająki, kosarze, roztocze i skorpiony.",
    "image": "/img/r03_pajeczaki_roznorodnosc.jpg"
  },
  {
    "id": "R03_PAJ_03",
    "section": "Pajęczaki",
    "type": "fill_in",
    "prompt": "Pajęczaki mają __________ pary odnóży krocznych.",
    "options": null,
    "answer": [
      "4"
    ],
    "altAnswers": [
      [
        "4",
        "cztery",
        "cztery pary"
      ]
    ],
    "explanation": "Pajęczaki mają cztery pary odnóży krocznych, czyli osiem odnóży.",
    "image": "/img/r03_pajak_budowa.jpg"
  },
  {
    "id": "R03_PAJ_04",
    "section": "Pajęczaki",
    "type": "true_false",
    "prompt": "Spośród wymienianych w rozdziale pajęczaków tylko pająki przędą sieci.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że spośród kosarzy, pająków, roztoczy i skorpionów tylko pająki przędą sieci."
  },
  {
    "id": "R03_PAJ_05",
    "section": "Pajęczaki",
    "type": "riddle",
    "prompt": "Odnóża gębowe pająka zakończone pazurem z ujściem gruczołu jadowego to...",
    "options": null,
    "answer": "szczękoczułki",
    "altAnswers": [
      "szczękoczułki",
      "szczekoczulki"
    ],
    "explanation": "Szczękoczułki służą pająkom do ataku, a na ich końcu znajduje się pazur z ujściem gruczołu jadowego.",
    "image": "/img/r03_pajak_budowa.jpg"
  },
  {
    "id": "R03_PAJ_06",
    "section": "Pajęczaki",
    "type": "match",
    "prompt": "Połącz grupę pajęczaków z opisem.",
    "options": null,
    "left": [
      "kosarze",
      "roztocze",
      "skorpiony",
      "pająki"
    ],
    "right": [
      "mają długie odnóża i nie są jadowite",
      "mają zrośnięty głowotułów i odwłok oraz kłująco-ssący aparat gębowy",
      "polują, wykorzystując kolec jadowy na końcu odwłoka",
      "przędą sieci"
    ],
    "answer": {
      "kosarze": "mają długie odnóża i nie są jadowite",
      "roztocze": "mają zrośnięty głowotułów i odwłok oraz kłująco-ssący aparat gębowy",
      "skorpiony": "polują, wykorzystując kolec jadowy na końcu odwłoka",
      "pająki": "przędą sieci"
    },
    "explanation": "Każda z tych grup pajęczaków ma charakterystyczne cechy budowy lub trybu życia.",
    "image": "/img/r03_pajeczaki_roznorodnosc.jpg"
  },
  {
    "id": "R03_PAJ_07",
    "section": "Pajęczaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: tygrzyk paskowany, kwietnik, skakun arlekinowy, zaleszczotek książkowy.",
    "options": null,
    "answer": "zaleszczotek książkowy",
    "explanation": "Tygrzyk, kwietnik i skakun to pająki, a zaleszczotek książkowy jest pajęczakiem podobnym do skorpiona, ale nie pająkiem.",
    "image": "/img/r03_pajeczaki_roznorodnosc.jpg"
  },
  {
    "id": "R03_PAJ_08",
    "section": "Pajęczaki",
    "type": "scenario",
    "prompt": "Dziecko chce dotknąć nieznanego pająka znalezionego w ogrodzie. Które uzasadnienie ostrożności najlepiej pasuje do informacji z podręcznika?",
    "options": [
      "Wiele pajęczaków ma gruczoły jadowe.",
      "Pająki mają skrzela i mogą wciągnąć do wody.",
      "Pająki są małżami i zamykają muszlę.",
      "Każdy pająk niszczy drewno statków."
    ],
    "answer": 0,
    "explanation": "Wśród pajęczaków dominują drapieżniki i większość ma gruczoły jadowe, więc nieznanego pająka należy traktować ostrożnie."
  },
  {
    "id": "R03_PAJ_09",
    "section": "Pajęczaki",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady znaczenia pajęczaków do kategorii.",
    "options": null,
    "items": [
      "regulują liczbę drobnych zwierząt",
      "ograniczają liczebność komarów",
      "stanowią pokarm dla ptaków",
      "mogą przenosić choroby",
      "niektóre są pasożytami ludzi i zwierząt",
      "jad niektórych może być groźny"
    ],
    "categories": [
      "znaczenie pozytywne",
      "znaczenie negatywne"
    ],
    "answer": {
      "znaczenie pozytywne": [
        "regulują liczbę drobnych zwierząt",
        "ograniczają liczebność komarów",
        "stanowią pokarm dla ptaków"
      ],
      "znaczenie negatywne": [
        "mogą przenosić choroby",
        "niektóre są pasożytami ludzi i zwierząt",
        "jad niektórych może być groźny"
      ]
    },
    "explanation": "Pajęczaki pełnią ważne funkcje w ekosystemach, ale niektóre mogą szkodzić ludziom i zwierzętom."
  },
  {
    "id": "R03_PAJ_10",
    "section": "Pajęczaki",
    "type": "single_choice",
    "prompt": "Do czego służą gruczoły przędne pająka?",
    "options": [
      "do wytwarzania pajęczej nici",
      "do oddychania skrzelami",
      "do rozcierania muszli",
      "do składania jaj skorupiaków",
      "do wykrywania smaku u raków",
      "do kopania tuneli"
    ],
    "answer": 0,
    "explanation": "Gruczoły przędne znajdują się od spodu odwłoka i wytwarzają pajęczą nić.",
    "image": "/img/r03_pajak_budowa.jpg"
  },
  {
    "id": "R03_OWA_01",
    "section": "Owady",
    "type": "single_choice",
    "prompt": "Ile par odnóży krocznych mają owady?",
    "options": [
      "2 pary",
      "3 pary",
      "4 pary",
      "5 par",
      "6 par",
      "nie mają odnóży"
    ],
    "answer": 1,
    "explanation": "Owady odróżnia od innych stawonogów między innymi obecność trzech par odnóży krocznych.",
    "image": "/img/r03_owad_budowa.jpg"
  },
  {
    "id": "R03_OWA_02",
    "section": "Owady",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy owadów opisane w rozdziale.",
    "options": [
      "ciało podzielone na głowę, tułów i odwłok",
      "trzy pary odnóży krocznych",
      "czułki",
      "u wielu owadów skrzydła",
      "ciało podzielone na głowotułów i odwłok",
      "podwójna muszla"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Owady mają głowę, tułów i odwłok, trzy pary odnóży, czułki, a wiele z nich także skrzydła.",
    "image": "/img/r03_owad_budowa.jpg"
  },
  {
    "id": "R03_OWA_03",
    "section": "Owady",
    "type": "true_false",
    "prompt": "Owady są jedynymi bezkręgowcami zdolnymi do aktywnego lotu.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że owady to jedyne bezkręgowce zdolne do aktywnego lotu."
  },
  {
    "id": "R03_OWA_04",
    "section": "Owady",
    "type": "fill_in",
    "prompt": "Ciało owada składa się z głowy, __________ i odwłoka.",
    "options": null,
    "answer": [
      "tułowia"
    ],
    "altAnswers": [
      [
        "tułowia",
        "tułów",
        "tulowia",
        "tulow"
      ]
    ],
    "explanation": "Owady mają ciało podzielone na głowę, tułów i odwłok."
  },
  {
    "id": "R03_OWA_05",
    "section": "Owady",
    "type": "match",
    "prompt": "Połącz typ odnóża owada z przykładem z podręcznika.",
    "options": null,
    "left": [
      "odnóże skoczne",
      "odnóże pływne",
      "odnóże grzebne",
      "odnóże chwytne"
    ],
    "right": [
      "konik polny",
      "pływak żółtobrzeżek",
      "turkuć podjadek",
      "modliszka zielona"
    ],
    "answer": {
      "odnóże skoczne": "konik polny",
      "odnóże pływne": "pływak żółtobrzeżek",
      "odnóże grzebne": "turkuć podjadek",
      "odnóże chwytne": "modliszka zielona"
    },
    "explanation": "Różne rodzaje odnóży pomagają owadom skakać, pływać, grzebać lub chwytać zdobycz.",
    "image": "/img/r03_odnoza_aparaty_owadow.jpg"
  },
  {
    "id": "R03_OWA_06",
    "section": "Owady",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady owadów do typów aparatów gębowych.",
    "options": null,
    "items": [
      "szerszeń europejski",
      "komar pospolity",
      "motyl zorzynka rzeżuchowiec"
    ],
    "categories": [
      "aparat gryzący",
      "aparat kłująco-ssący",
      "aparat ssący"
    ],
    "answer": {
      "aparat gryzący": [
        "szerszeń europejski"
      ],
      "aparat kłująco-ssący": [
        "komar pospolity"
      ],
      "aparat ssący": [
        "motyl zorzynka rzeżuchowiec"
      ]
    },
    "explanation": "Podręcznik pokazuje aparat gryzący u szerszenia, kłująco-ssący u komara i ssący u motyla.",
    "image": "/img/r03_odnoza_aparaty_owadow.jpg"
  },
  {
    "id": "R03_OWA_07",
    "section": "Owady",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: chrząszcze, pluskwiaki, muchówki, skorpiony.",
    "options": null,
    "answer": "skorpiony",
    "explanation": "Chrząszcze, pluskwiaki i muchówki to grupy owadów, a skorpiony należą do pajęczaków."
  },
  {
    "id": "R03_OWA_08",
    "section": "Owady",
    "type": "scenario",
    "prompt": "Uczeń ogląda zwierzę z głową, tułowiem i odwłokiem, trzema parami odnóży oraz dwiema parami skrzydeł. Do której grupy najpewniej należy to zwierzę?",
    "options": [
      "owady",
      "pajęczaki",
      "małże",
      "skorupiaki",
      "głowonogi",
      "kosarze"
    ],
    "answer": 0,
    "explanation": "Trzy pary odnóży, podział na głowę, tułów i odwłok oraz skrzydła wskazują na owada.",
    "image": "/img/r03_owad_budowa.jpg"
  },
  {
    "id": "R03_OWA_09",
    "section": "Owady",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne przykłady znaczenia owadów.",
    "options": [
      "zapylają rośliny kwiatowe",
      "są pokarmem dla innych zwierząt",
      "dostarczają miodu, wosku i jedwabiu",
      "mogą pomagać w walce ze szkodnikami",
      "niszczą uprawy",
      "przenoszą choroby"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Owady zapylają rośliny, są pokarmem dla zwierząt, dostarczają surowców i mogą pomagać ograniczać szkodniki."
  },
  {
    "id": "R03_OWA_10",
    "section": "Owady",
    "type": "single_choice",
    "prompt": "Która kolejność etapów rozwoju motyla jest prawidłowa?",
    "options": [
      "jajo → larwa → poczwarka → dorosły osobnik",
      "larwa → jajo → dorosły osobnik → poczwarka",
      "poczwarka → jajo → larwa → dorosły osobnik",
      "jajo → poczwarka → larwa → dorosły osobnik",
      "dorosły osobnik → poczwarka → jajo → larwa",
      "jajo → dorosły osobnik → larwa → poczwarka"
    ],
    "answer": 0,
    "explanation": "W rozwoju motyla występują kolejno: jajo, larwa, poczwarka i osobnik dorosły.",
    "image": "/img/r03_motyl_rozwoj.jpg"
  },
  {
    "id": "R03_MIE_01",
    "section": "Mięczaki",
    "type": "single_choice",
    "prompt": "Która cecha najlepiej opisuje mięczaki?",
    "options": [
      "mają miękkie ciało, nagie albo osłonięte muszlą",
      "zawsze mają chitynowy pancerz i stawowe odnóża",
      "mają trzy pary odnóży i skrzydła",
      "zawsze żyją wyłącznie w powietrzu",
      "zawsze mają kręgosłup",
      "zawsze mają kolec jadowy"
    ],
    "answer": 0,
    "explanation": "Mięczaki to bezkręgowce o miękkim ciele, które może być nagie albo osłonięte muszlą.",
    "image": "/img/r03_mieczaki_budowa.jpg"
  },
  {
    "id": "R03_MIE_02",
    "section": "Mięczaki",
    "type": "multi_select",
    "prompt": "Zaznacz grupy należące do mięczaków.",
    "options": [
      "ślimaki",
      "małże",
      "głowonogi",
      "pajęczaki",
      "skorupiaki",
      "owady"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wśród mięczaków wyróżnia się między innymi ślimaki, małże i głowonogi.",
    "image": "/img/r03_mieczaki_roznorodnosc.jpg"
  },
  {
    "id": "R03_MIE_03",
    "section": "Mięczaki",
    "type": "true_false",
    "prompt": "Małże mają głowę tak jak większość mięczaków.",
    "options": null,
    "answer": false,
    "explanation": "Małże są wyjątkiem wśród mięczaków, ponieważ nie mają głowy."
  },
  {
    "id": "R03_MIE_04",
    "section": "Mięczaki",
    "type": "fill_in",
    "prompt": "Ciało większości mięczaków składa się z głowy, nogi oraz worka __________.",
    "options": null,
    "answer": [
      "trzewiowego"
    ],
    "altAnswers": [
      [
        "trzewiowego",
        "trzewiowy"
      ]
    ],
    "explanation": "W worku trzewiowym znajdują się narządy wewnętrzne mięczaka.",
    "image": "/img/r03_mieczaki_budowa.jpg"
  },
  {
    "id": "R03_MIE_05",
    "section": "Mięczaki",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem dotyczącym mięczaków.",
    "options": null,
    "left": [
      "ślimaki",
      "małże",
      "głowonogi",
      "muszla"
    ],
    "right": [
      "najliczniejsza grupa mięczaków",
      "mięczaki wodne, często o osiadłym trybie życia",
      "drapieżne morskie mięczaki o dobrze rozwiniętych zmysłach",
      "szkielet zewnętrzny rosnący razem ze zwierzęciem"
    ],
    "answer": {
      "ślimaki": "najliczniejsza grupa mięczaków",
      "małże": "mięczaki wodne, często o osiadłym trybie życia",
      "głowonogi": "drapieżne morskie mięczaki o dobrze rozwiniętych zmysłach",
      "muszla": "szkielet zewnętrzny rosnący razem ze zwierzęciem"
    },
    "explanation": "Ślimaki, małże i głowonogi różnią się trybem życia, a muszla jest zewnętrzną osłoną wielu mięczaków.",
    "image": "/img/r03_mieczaki_budowa.jpg"
  },
  {
    "id": "R03_MIE_06",
    "section": "Mięczaki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: winniczek, szczeżuja pospolita, ośmiornica zwyczajna, rak błotny.",
    "options": null,
    "answer": "rak błotny",
    "explanation": "Winniczek, szczeżuja i ośmiornica to mięczaki, a rak błotny jest skorupiakiem.",
    "image": "/img/r03_mieczaki_roznorodnosc.jpg"
  },
  {
    "id": "R03_MIE_07",
    "section": "Mięczaki",
    "type": "scenario",
    "prompt": "W czystej wodzie słodkiej żyje mało ruchliwe zwierzę, które odfiltrowuje z wody plankton i bakterie. Która grupa mięczaków najlepiej pasuje do opisu?",
    "options": [
      "małże",
      "pająki",
      "owady",
      "skorpiony",
      "kraby",
      "kosarze"
    ],
    "answer": 0,
    "explanation": "Małże zwykle są mało ruchliwe lub osiadłe i odżywiają się planktonem oraz bakteriami odfiltrowanymi z wody."
  },
  {
    "id": "R03_MIE_08",
    "section": "Mięczaki",
    "type": "sort",
    "prompt": "Przyporządkuj mięczaki do środowiska życia.",
    "options": null,
    "items": [
      "winniczek",
      "ślimak afrykański",
      "szczeżuja pospolita",
      "zatoczek rogowy",
      "ośmiornica zwyczajna",
      "omułek jadalny"
    ],
    "categories": [
      "ląd",
      "wody słodkie",
      "wody słone"
    ],
    "answer": {
      "ląd": [
        "winniczek",
        "ślimak afrykański"
      ],
      "wody słodkie": [
        "szczeżuja pospolita",
        "zatoczek rogowy"
      ],
      "wody słone": [
        "ośmiornica zwyczajna",
        "omułek jadalny"
      ]
    },
    "explanation": "Mięczaki żyją na lądzie oraz w wodach słodkich i słonych.",
    "image": "/img/r03_mieczaki_roznorodnosc.jpg"
  },
  {
    "id": "R03_MIE_09",
    "section": "Mięczaki",
    "type": "true_false",
    "prompt": "Muszla mięczaka rośnie razem z nim, dlatego ślimak nie musi zrzucać jej tak jak stawonóg zrzuca pancerz.",
    "options": null,
    "answer": true,
    "explanation": "Muszla mięczaka stanowi szkielet zewnętrzny i rośnie razem z ciałem zwierzęcia."
  },
  {
    "id": "R03_MIE_10",
    "section": "Mięczaki",
    "type": "single_choice",
    "prompt": "Co pokrywa ciało mięczaków i jest wytwarzane przez gruczoły śluzowe?",
    "options": [
      "śluz",
      "chitynowy pancerz",
      "pióra",
      "łuski ryb",
      "kolec jadowy",
      "pajęcza nić"
    ],
    "answer": 0,
    "explanation": "Ciało mięczaków pokrywa śluz wytwarzany przez gruczoły śluzowe."
  },
  {
    "id": "R03_POW_01",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz grupę zwierząt z charakterystyczną cechą.",
    "options": null,
    "left": [
      "owady",
      "pajęczaki",
      "skorupiaki",
      "mięczaki"
    ],
    "right": [
      "trzy pary odnóży krocznych",
      "cztery pary odnóży krocznych",
      "zwykle pięć par odnóży krocznych u raka",
      "miękkie ciało, często z muszlą"
    ],
    "answer": {
      "owady": "trzy pary odnóży krocznych",
      "pajęczaki": "cztery pary odnóży krocznych",
      "skorupiaki": "zwykle pięć par odnóży krocznych u raka",
      "mięczaki": "miękkie ciało, często z muszlą"
    },
    "explanation": "Liczba odnóży i obecność miękkiego ciała z muszlą pomagają odróżniać omawiane grupy."
  },
  {
    "id": "R03_POW_02",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj zwierzęta do dwóch dużych grup.",
    "options": null,
    "items": [
      "rak",
      "pająk",
      "konik wąsacz",
      "winniczek",
      "szczeżuja",
      "ośmiornica"
    ],
    "categories": [
      "stawonogi",
      "mięczaki"
    ],
    "answer": {
      "stawonogi": [
        "rak",
        "pająk",
        "konik wąsacz"
      ],
      "mięczaki": [
        "winniczek",
        "szczeżuja",
        "ośmiornica"
      ]
    },
    "explanation": "Raki, pająki i owady są stawonogami, a ślimaki, małże i głowonogi są mięczakami."
  },
  {
    "id": "R03_POW_03",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Która z podanych grup nie należy do stawonogów?",
    "options": [
      "skorupiaki",
      "pajęczaki",
      "owady",
      "mięczaki",
      "żadne z powyższych",
      "wszystkie powyższe"
    ],
    "answer": 3,
    "explanation": "Mięczaki są osobną grupą bezkręgowców, a nie stawonogami."
  },
  {
    "id": "R03_POW_04",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Stawonogi mają chitynowy pancerz lub oskórek, a wiele mięczaków ma muszlę, która rośnie razem z ciałem.",
    "options": null,
    "answer": true,
    "explanation": "To ważna różnica: pancerz stawonogów nie rośnie, a muszla mięczaka może rosnąć razem z nim.",
    "image": "/img/r03_stawonog_cechy.jpg"
  },
  {
    "id": "R03_POW_05",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Do stawonogów zaliczamy m.in. skorupiaki, __________ i __________.",
    "options": null,
    "answer": [
      "pajęczaki",
      "owady"
    ],
    "altAnswers": [
      [
        "pajęczaki",
        "pajeczaki"
      ],
      [
        "owady"
      ]
    ],
    "explanation": "W rozdziale jako główne grupy stawonogów wymieniono skorupiaki, pajęczaki i owady."
  },
  {
    "id": "R03_POW_06",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż nazwy od grupy najbardziej ogólnej do przykładowego gatunku.",
    "options": null,
    "items": [
      "pająki",
      "tygrzyk paskowany",
      "stawonogi",
      "pajęczaki"
    ],
    "answer": [
      "stawonogi",
      "pajęczaki",
      "pająki",
      "tygrzyk paskowany"
    ],
    "explanation": "Tygrzyk paskowany jest pająkiem, pająki należą do pajęczaków, a pajęczaki do stawonogów."
  },
  {
    "id": "R03_POW_07",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: szczypce, czułki, 5 par odnóży krocznych, czułki z oczami na końcach.",
    "options": null,
    "answer": "czułki z oczami na końcach",
    "explanation": "Szczypce, czułki i 5 par odnóży krocznych dotyczą budowy raka, a czułki z oczami na końcach są cechą ślimaka."
  },
  {
    "id": "R03_POW_08",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Uczeń porównuje raka i winniczka. Jedno zwierzę ma chitynowy pancerz, który musi zrzucać, a drugie ma muszlę rosnącą razem z ciałem. Które zestawienie jest poprawne?",
    "options": [
      "rak — chitynowy pancerz; winniczek — muszla",
      "rak — muszla; winniczek — chitynowy pancerz",
      "oba zwierzęta mają wyłącznie pióra",
      "oba zwierzęta mają skrzydła i trzy pary odnóży"
    ],
    "answer": 0,
    "explanation": "Rak jako stawonóg ma chitynowy pancerz, a winniczek jako ślimak ma muszlę rosnącą razem z ciałem.",
    "image": "/img/r03_mieczaki_budowa.jpg"
  },
  {
    "id": "R03_POW_09",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz zdania prawdziwe.",
    "options": [
      "Owady mają trzy pary odnóży krocznych.",
      "Pajęczaki mają cztery pary odnóży krocznych.",
      "Rak ma pięć par odnóży krocznych.",
      "Małże żyją w wodzie.",
      "Mięczaki zawsze mają stawowe odnóża.",
      "Owady mają ciało podzielone na głowotułów i odwłok."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Prawdziwe są informacje o liczbie odnóży owadów, pajęczaków i raka oraz o wodnym środowisku życia małży."
  },
  {
    "id": "R03_POW_10",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Najliczniejsza grupa mięczaków to...",
    "options": null,
    "answer": "ślimaki",
    "altAnswers": [
      "ślimaki",
      "slimaki",
      "ślimaki lądowe i wodne"
    ],
    "explanation": "Podręcznik podaje, że ślimaki są najliczniejszą grupą mięczaków."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który skorupiak żyje w wodzie tylko na początkowym etapie rozwoju, a jako dorosły osobnik nie potrafi pływać?",
    "options": [
      "krab palmowy",
      "rak błotny",
      "pąkla",
      "oczlik",
      "rozwielitka",
      "homar"
    ],
    "answer": 0,
    "explanation": "Krab palmowy prowadzi wodno-lądowy tryb życia, ale jako dorosły osobnik nie potrafi pływać.",
    "image": "/img/r03_skorupiaki_srodowiska.jpg"
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem pająka topika.",
    "options": [
      "jest pajęczakiem",
      "może przebywać pod wodą",
      "korzysta z wytworzonej przez siebie bańki powietrza",
      "jest skorupiakiem",
      "ma podwójną muszlę",
      "należy do małży"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pająk topik jest pajęczakiem, który może przebywać pod wodą w wytworzonej przez siebie bańce powietrza."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Najedzona samica kleszcza pospolitego może osiągnąć długość 10–12 mm.",
    "options": null,
    "answer": true,
    "explanation": "Ilustracja w rozdziale podaje, że najedzona samica kleszcza ma około 10–12 mm."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pąkle i kaczenice prowadzą __________ tryb życia.",
    "options": null,
    "answer": [
      "osiadły"
    ],
    "altAnswers": [
      [
        "osiadły",
        "osiadly",
        "osiadły tryb życia"
      ]
    ],
    "explanation": "Pąkle i kaczenice są przykładami skorupiaków prowadzących osiadły tryb życia."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz organizm z informacją podaną w ramkach o podobieństwie owadów.",
    "options": null,
    "left": [
      "trzmielówka wielka",
      "przeziernik osowiec",
      "paśnik niszczyciel",
      "zaleszczotek książkowy"
    ],
    "right": [
      "upodabnia się do os i składa jaja w ich gniazdach",
      "motyl podobny do szerszenia",
      "chrząszcz podobny do szerszenia",
      "pajęczak spotykany w starych książkach, ulach lub pod korą"
    ],
    "answer": {
      "trzmielówka wielka": "upodabnia się do os i składa jaja w ich gniazdach",
      "przeziernik osowiec": "motyl podobny do szerszenia",
      "paśnik niszczyciel": "chrząszcz podobny do szerszenia",
      "zaleszczotek książkowy": "pajęczak spotykany w starych książkach, ulach lub pod korą"
    },
    "explanation": "Rozdział pokazuje przykłady upodabniania się owadów do groźniejszych gatunków oraz zaleszczotka podobnego do skorpiona.",
    "image": "/img/r03_pszczola_osa_szerszen_trzmiel.jpg"
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pąkle, kaczenice, omułki, kraby czerwone.",
    "options": null,
    "answer": "kraby czerwone",
    "explanation": "Pąkle, kaczenice i omułki prowadzą osiadły tryb życia lub tworzą kolonie, a kraby czerwone wędrują z lądu do oceanu."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Ktoś twierdzi, że każdy pajęczak jest pająkiem. Który przykład z rozdziału najprościej pokazuje, że to nieprawda?",
    "options": [
      "kleszcz pospolity",
      "tygrzyk paskowany",
      "kwietnik",
      "skakun arlekinowy",
      "zyzuś tłuścioch",
      "lejkowiec labiryntowy"
    ],
    "answer": 0,
    "explanation": "Kleszcz pospolity jest roztoczem, czyli pajęczakiem, ale nie jest pająkiem.",
    "image": "/img/r03_pajeczaki_roznorodnosc.jpg"
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do sposobu odżywiania opisanego w rozdziale.",
    "options": null,
    "items": [
      "pąkle",
      "oczliki",
      "małże",
      "głowonogi",
      "duże skorupiaki"
    ],
    "categories": [
      "drobne cząstki zawieszone w wodzie",
      "odfiltrowany plankton i bakterie",
      "polowanie na inne zwierzęta"
    ],
    "answer": {
      "drobne cząstki zawieszone w wodzie": [
        "pąkle",
        "oczliki"
      ],
      "odfiltrowany plankton i bakterie": [
        "małże"
      ],
      "polowanie na inne zwierzęta": [
        "głowonogi",
        "duże skorupiaki"
      ]
    },
    "explanation": "Małe skorupiaki korzystają z drobnych cząstek w toni wodnej, małże filtrują pokarm z wody, a głowonogi i duże skorupiaki polują."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które odnóża gębowe pajęczaków pełnią funkcję narządu dotyku oraz służą do przytrzymywania i rozdrabniania zdobyczy?",
    "options": [
      "nogogłaszczki",
      "szczękoczułki",
      "czułki pierwszej pary",
      "odnóża odwłokowe",
      "wachlarzowata płetwa",
      "gruczoły przędne"
    ],
    "answer": 0,
    "explanation": "Nogogłaszczki są narządem dotyku i pomagają przytrzymywać oraz rozdrabniać zdobycz.",
    "image": "/img/r03_pajak_budowa.jpg"
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż stadia rozwoju motyla w kolejności od początku do osobnika dorosłego.",
    "options": null,
    "items": [
      "poczwarka",
      "osobnik dorosły",
      "jajo",
      "larwa"
    ],
    "answer": [
      "jajo",
      "larwa",
      "poczwarka",
      "osobnik dorosły"
    ],
    "explanation": "Rozwój motyla przebiega przez stadia: jajo, larwa, poczwarka, osobnik dorosły.",
    "image": "/img/r03_motyl_rozwoj.jpg"
  }
];

const KID_PROMPTS = {
  "R03_STA_01": "Do jakiej grupy należą rak, pająk i biedronka?",
  "R03_SKO_05": "Jak nazywają się duże „łapki” raka?",
  "R03_PAJ_03": "Ile par nóg ma pająk i inne pajęczaki?",
  "R03_OWA_01": "Ile par nóg mają owady?",
  "R03_MIE_02": "Które zwierzęta są mięczakami?",
  "R03_POW_03": "Która grupa nie jest stawonogami?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Zwierzęta bezkręgowe: stawonogi i mięczaki",
  "icon": "🦀",
  "sectionOrder": [
    "Stawonogi",
    "Skorupiaki",
    "Pajęczaki",
    "Owady",
    "Mięczaki",
    "Powtórka mieszana",
    "Super trudne"
  ],
  "sectionIcons": {
    "Stawonogi": "🦗",
    "Skorupiaki": "🦀",
    "Pajęczaki": "🕷️",
    "Owady": "🐝",
    "Mięczaki": "🐌",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
