// Skróty sekcji:
//   ROZ = Różnorodność krajobrazów
//   NAD = Krajobraz nadmorski
//   POJ = Krajobraz pojezierny
//   NIZ = Niziny środkowej Polski
//   MIA = Krajobraz wielkomiejski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_ROZ_01",
    "section": "Różnorodność krajobrazów",
    "type": "single_choice",
    "prompt": "Jak w podręczniku zdefiniowano krajobraz?",
    "options": [
      "Tylko lasy i jeziora",
      "To, co widzimy wokół nas",
      "Wyłącznie miasta i wsie",
      "Mapa wysokości bezwzględnych",
      "Tylko ukształtowanie powierzchni",
      "Zbiór nazw krain geograficznych"
    ],
    "answer": 1,
    "explanation": "Krajobraz to wszystko, co widzimy wokół nas: elementy naturalne i wytwory działalności człowieka."
  },
  {
    "id": "R02_ROZ_02",
    "section": "Różnorodność krajobrazów",
    "type": "single_choice",
    "prompt": "Które tereny zaliczamy do nizin według wysokości bezwzględnej?",
    "options": [
      "Powyżej 1000 m n.p.m.",
      "Powyżej 500 m n.p.m.",
      "Poniżej 300 m n.p.m.",
      "Dokładnie na poziomie morza",
      "Tylko poniżej 0 m n.p.m.",
      "Między 300 a 600 m n.p.m."
    ],
    "answer": 2,
    "explanation": "Niziny to obszary położone poniżej 300 m n.p.m., dlatego w Polsce dominują tereny nizinne."
  },
  {
    "id": "R02_ROZ_03",
    "section": "Różnorodność krajobrazów",
    "type": "true_false",
    "prompt": "W Polsce dominują obszary nizinne.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że większość obszaru Polski to niziny o wysokościach bezwzględnych do 300 m n.p.m."
  },
  {
    "id": "R02_ROZ_04",
    "section": "Różnorodność krajobrazów",
    "type": "true_false",
    "prompt": "Krajobraz kulturowy to krajobraz całkowicie pozbawiony wpływu człowieka.",
    "options": null,
    "answer": false,
    "explanation": "Krajobraz kulturowy jest przekształcony przez człowieka, a krajobraz naturalny ma ograniczony wpływ działalności człowieka."
  },
  {
    "id": "R02_ROZ_05",
    "section": "Różnorodność krajobrazów",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady elementów naturalnych krajobrazu wymienione w podręczniku.",
    "options": [
      "skały",
      "jeziora",
      "budynki",
      "lasy",
      "drogi",
      "pola uprawne"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Do elementów naturalnych krajobrazu należą między innymi skały, jeziora i lasy."
  },
  {
    "id": "R02_ROZ_06",
    "section": "Różnorodność krajobrazów",
    "type": "fill_in",
    "prompt": "Niziny to tereny położone poniżej __________ m n.p.m.",
    "options": null,
    "answer": [
      "300"
    ],
    "altAnswers": [
      [
        "300",
        "300 m",
        "300 metrów"
      ]
    ],
    "explanation": "Granica 300 m n.p.m. odróżnia w podręczniku obszary nizinne od wyżej położonych terenów."
  },
  {
    "id": "R02_ROZ_07",
    "section": "Różnorodność krajobrazów",
    "type": "riddle",
    "prompt": "Jak nazywa się układ pasów rzeźby Polski biegnących ze wschodu na zachód?",
    "options": null,
    "answer": "równoleżnikowy",
    "altAnswers": [
      "równoleżnikowy",
      "układ równoleżnikowy"
    ],
    "explanation": "Pasy krajobrazowe Polski mają układ równoleżnikowy, czyli przebiegają ogólnie ze wschodu na zachód."
  },
  {
    "id": "R02_ROZ_08",
    "section": "Różnorodność krajobrazów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pas pobrzeży, pas pojezierzy, pas nizin środkowopolskich, pas pustyń.",
    "options": null,
    "answer": "pas pustyń",
    "explanation": "W Polsce wyróżnia się między innymi pas pobrzeży, pojezierzy i nizin środkowopolskich, ale nie pas pustyń."
  },
  {
    "id": "R02_ROZ_09",
    "section": "Różnorodność krajobrazów",
    "type": "scenario",
    "prompt": "Uczeń ogląda mapę ukształtowania powierzchni Polski i widzi, że wielkie formy terenu układają się pasami od zachodu ku wschodowi. Jak powinien nazwać taki układ?",
    "options": [
      "południkowy",
      "równoleżnikowy",
      "promienisty",
      "wyspowy"
    ],
    "answer": 1,
    "image": "/img/r02_pasy_krajobrazowe_polski.png",
    "explanation": "Taki przebieg pasów krajobrazowych określa się jako układ równoleżnikowy."
  },
  {
    "id": "R02_ROZ_10",
    "section": "Różnorodność krajobrazów",
    "type": "match",
    "prompt": "Połącz pas krajobrazowy z opisem.",
    "options": null,
    "left": [
      "Pas pobrzeży",
      "Pas pojezierzy",
      "Pas wyżyn",
      "Pas gór"
    ],
    "right": [
      "piaszczyste plaże i jeziora przybrzeżne",
      "wzniesienia i jeziora polodowcowe",
      "skały wapienne, jaskinie i wąwozy",
      "szczyty i głębokie doliny"
    ],
    "answer": {
      "Pas pobrzeży": "piaszczyste plaże i jeziora przybrzeżne",
      "Pas pojezierzy": "wzniesienia i jeziora polodowcowe",
      "Pas wyżyn": "skały wapienne, jaskinie i wąwozy",
      "Pas gór": "szczyty i głębokie doliny"
    },
    "explanation": "Każdy pas krajobrazowy ma inne cechy, np. pobrzeża mają plaże, a pas gór - szczyty i głębokie doliny."
  },
  {
    "id": "R02_ROZ_11",
    "section": "Różnorodność krajobrazów",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady krajobrazów do grup.",
    "options": null,
    "items": [
      "nadmorski",
      "pojezierny",
      "górski",
      "rolniczy",
      "przemysłowy",
      "miejski"
    ],
    "categories": [
      "naturalne",
      "kulturowe"
    ],
    "answer": {
      "naturalne": [
        "nadmorski",
        "pojezierny",
        "górski"
      ],
      "kulturowe": [
        "rolniczy",
        "przemysłowy",
        "miejski"
      ]
    },
    "explanation": "Podręcznik dzieli krajobrazy na naturalne oraz kulturowe, czyli przekształcone przez człowieka."
  },
  {
    "id": "R02_ROZ_12",
    "section": "Różnorodność krajobrazów",
    "type": "sequence",
    "prompt": "Ułóż pasy krajobrazowe Polski od północy ku południu.",
    "options": null,
    "items": [
      "pas wyżyn",
      "pas pobrzeży",
      "pas gór",
      "pas pojezierzy",
      "pas kotlin podkarpackich",
      "pas nizin środkowopolskich"
    ],
    "answer": [
      "pas pobrzeży",
      "pas pojezierzy",
      "pas nizin środkowopolskich",
      "pas wyżyn",
      "pas kotlin podkarpackich",
      "pas gór"
    ],
    "image": "/img/r02_pasy_krajobrazowe_polski.png",
    "explanation": "W Polsce pasy krajobrazowe następują od północy ku południu: pobrzeża, pojezierza, niziny środkowopolskie, wyżyny, kotliny podkarpackie i góry."
  },
  {
    "id": "R02_NAD_01",
    "section": "Krajobraz nadmorski",
    "type": "single_choice",
    "prompt": "Który pas krajobrazowy Polski leży najdalej na północ?",
    "options": [
      "pas pobrzeży",
      "pas pojezierzy",
      "pas wyżyn",
      "pas gór",
      "pas kotlin podkarpackich",
      "pas nizin środkowopolskich"
    ],
    "answer": 0,
    "explanation": "Najdalej na północ, nad Morzem Bałtyckim, znajduje się pas pobrzeży, nazywany też nizinami nadmorskimi."
  },
  {
    "id": "R02_NAD_02",
    "section": "Krajobraz nadmorski",
    "type": "single_choice",
    "prompt": "Jak nazywa się fragment Pobrzeża Koszalińskiego położony bezpośrednio nad Morzem Bałtyckim?",
    "options": [
      "Wybrzeże Słowińskie",
      "Nizina Mazowiecka",
      "Pojezierze Mazurskie",
      "Puszcza Kampinoska",
      "Kotlina Warszawska",
      "Wyżyna Małopolska"
    ],
    "answer": 0,
    "explanation": "Część Pobrzeża Koszalińskiego nad samym morzem to Wybrzeże Słowińskie."
  },
  {
    "id": "R02_NAD_03",
    "section": "Krajobraz nadmorski",
    "type": "true_false",
    "prompt": "Wybrzeże niskie powstaje dzięki budującej działalności fal morskich i tworzeniu wydm.",
    "options": null,
    "answer": true,
    "image": "/img/r02_typy_wybrzezy.png",
    "explanation": "Fale przenoszą piasek na brzeg, a wiatr usypuje z niego wydmy, dlatego powstaje wybrzeże niskie, czyli wydmowe."
  },
  {
    "id": "R02_NAD_04",
    "section": "Krajobraz nadmorski",
    "type": "true_false",
    "prompt": "Bryza dzienna wieje od lądu w stronę morza.",
    "options": null,
    "answer": false,
    "explanation": "W dzień bryza wieje od morza ku lądowi, a w nocy od lądu w stronę morza."
  },
  {
    "id": "R02_NAD_05",
    "section": "Krajobraz nadmorski",
    "type": "multi_select",
    "prompt": "Zaznacz cechy i elementy krajobrazu Wybrzeża Słowińskiego.",
    "options": [
      "mierzeje",
      "wydmy",
      "jeziora przybrzeżne",
      "wysokie Tatry",
      "latarnie morskie",
      "pustynie kamieniste"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Na Wybrzeżu Słowińskim występują między innymi mierzeje, wydmy, jeziora przybrzeżne, latarnie i porty."
  },
  {
    "id": "R02_NAD_06",
    "section": "Krajobraz nadmorski",
    "type": "fill_in",
    "prompt": "Najniżej położony punkt Polski według podręcznika znajduje się we wsi __________ i ma wysokość __________ m n.p.m.",
    "options": null,
    "answer": [
      "Marzęcino",
      "-2,2"
    ],
    "altAnswers": [
      [
        "Marzęcino",
        "Marzęcinie"
      ],
      [
        "-2,2",
        "−2,2",
        "minus 2,2"
      ]
    ],
    "explanation": "Podręcznik podaje, że najniżej położony punkt Polski leży w Marzęcinie i ma -2,2 m n.p.m."
  },
  {
    "id": "R02_NAD_07",
    "section": "Krajobraz nadmorski",
    "type": "riddle",
    "prompt": "Jak nazywa się piaszczysty wał, który odcina zatokę od morza?",
    "options": null,
    "answer": "mierzeja",
    "altAnswers": [
      "mierzeja",
      "mierzeję",
      "mierzei"
    ],
    "explanation": "Mierzeja powstaje z piasku nanoszonego przez przybrzeżny prąd i może odciąć zatokę od pełnego morza."
  },
  {
    "id": "R02_NAD_08",
    "section": "Krajobraz nadmorski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Kołobrzeg, Ustka, Dąbki, Zakopane.",
    "options": null,
    "answer": "Zakopane",
    "explanation": "Kołobrzeg, Ustka i Dąbki są przykładami miejscowości nadmorskich lub uzdrowisk, a Zakopane leży w górach."
  },
  {
    "id": "R02_NAD_09",
    "section": "Krajobraz nadmorski",
    "type": "scenario",
    "prompt": "Turysta widzi wąską, miejscami kamienistą plażę oraz stromy brzeg podmywany przez fale. Jaki typ wybrzeża obserwuje?",
    "options": [
      "niskie, wydmowe",
      "wysokie, klifowe",
      "równinne, pradolinne",
      "pojezierne, morenowe"
    ],
    "answer": 1,
    "image": "/img/r02_typy_wybrzezy.png",
    "explanation": "Wysokie, klifowe wybrzeże powstaje wskutek niszczącej działalności fal morskich."
  },
  {
    "id": "R02_NAD_10",
    "section": "Krajobraz nadmorski",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "sztorm",
      "bryza",
      "klif",
      "wydma"
    ],
    "right": [
      "silny porywisty wiatr i wysokie fale",
      "lokalny wiatr nad morzem",
      "stromy brzeg morski",
      "piaszczyste wzniesienie"
    ],
    "answer": {
      "sztorm": "silny porywisty wiatr i wysokie fale",
      "bryza": "lokalny wiatr nad morzem",
      "klif": "stromy brzeg morski",
      "wydma": "piaszczyste wzniesienie"
    },
    "explanation": "Sztorm, bryza, klif i wydma to typowe pojęcia potrzebne do opisu krajobrazu nadmorskiego."
  },
  {
    "id": "R02_NAD_11",
    "section": "Krajobraz nadmorski",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do krajobrazu naturalnego lub kulturowego Wybrzeża Słowińskiego.",
    "options": null,
    "items": [
      "wydmy",
      "mierzeje",
      "jeziora przybrzeżne",
      "porty",
      "miejscowości wypoczynkowe",
      "latarnie morskie"
    ],
    "categories": [
      "naturalny",
      "kulturowy"
    ],
    "answer": {
      "naturalny": [
        "wydmy",
        "mierzeje",
        "jeziora przybrzeżne"
      ],
      "kulturowy": [
        "porty",
        "miejscowości wypoczynkowe",
        "latarnie morskie"
      ]
    },
    "explanation": "Naturalne elementy wybrzeża tworzy głównie morze i wiatr, a kulturowe powstały dzięki działalności człowieka."
  },
  {
    "id": "R02_NAD_12",
    "section": "Krajobraz nadmorski",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania niektórych jezior przybrzeżnych.",
    "options": null,
    "items": [
      "powstaje jezioro przybrzeżne",
      "zatoka zostaje odcięta od pełnego morza",
      "przybrzeżny prąd nanosi piasek",
      "tworzy się mierzeja"
    ],
    "answer": [
      "przybrzeżny prąd nanosi piasek",
      "tworzy się mierzeja",
      "zatoka zostaje odcięta od pełnego morza",
      "powstaje jezioro przybrzeżne"
    ],
    "image": "/img/r02_wydmy_ruchome.png",
    "explanation": "Przybrzeżny prąd nanosi piasek, z niego powstaje mierzeja, która odcina zatokę od morza i tworzy jezioro przybrzeżne."
  },
  {
    "id": "R02_POJ_01",
    "section": "Krajobraz pojezierny",
    "type": "single_choice",
    "prompt": "Która kraina geograficzna leży w północno-wschodniej części pasa pojezierzy?",
    "options": [
      "Pojezierze Mazurskie",
      "Pobrzeże Koszalińskie",
      "Nizina Mazowiecka",
      "Kotlina Warszawska",
      "Wyżyna Małopolska",
      "Pobrzeże Gdańskie"
    ],
    "answer": 0,
    "explanation": "W północno-wschodniej części pasa pojezierzy znajduje się Pojezierze Mazurskie."
  },
  {
    "id": "R02_POJ_02",
    "section": "Krajobraz pojezierny",
    "type": "single_choice",
    "prompt": "Które jezioro wskazano w podręczniku jako największe w Polsce?",
    "options": [
      "Śniardwy",
      "Łebsko",
      "Gardno",
      "Jamno",
      "Niegocin",
      "Bukowo"
    ],
    "answer": 0,
    "explanation": "Największym jeziorem w Polsce są Śniardwy, położone na Pojezierzu Mazurskim."
  },
  {
    "id": "R02_POJ_03",
    "section": "Krajobraz pojezierny",
    "type": "true_false",
    "prompt": "Największy wpływ na krajobraz pojezierzy miał lądolód.",
    "options": null,
    "answer": true,
    "explanation": "Lądolód ukształtował wzniesienia i zagłębienia, w których powstały jeziora polodowcowe."
  },
  {
    "id": "R02_POJ_04",
    "section": "Krajobraz pojezierny",
    "type": "true_false",
    "prompt": "Szlak Wielkich Jezior Mazurskich prowadzi od Węgorzewa do Rucianego-Nidy.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że żeglugowy szlak prowadzi od Węgorzewa do Rucianego-Nidy i ma 120 km długości."
  },
  {
    "id": "R02_POJ_05",
    "section": "Krajobraz pojezierny",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady ptaków wodnych wymienione przy opisie Pojezierza Mazurskiego.",
    "options": [
      "czapla",
      "gęś",
      "perkoz",
      "pingwin",
      "struś",
      "żuraw"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r02_jezioro_szuwary_ptaki.png",
    "explanation": "Tereny podmokłe i brzegi jezior są schronieniem między innymi dla czapli, gęsi i perkozów."
  },
  {
    "id": "R02_POJ_06",
    "section": "Krajobraz pojezierny",
    "type": "fill_in",
    "prompt": "Szlak Wielkich Jezior Mazurskich ma długość __________ km i można go pokonać żaglówką lub __________.",
    "options": null,
    "answer": [
      "120",
      "kajakiem"
    ],
    "altAnswers": [
      [
        "120",
        "120 km"
      ],
      [
        "kajakiem",
        "kajak"
      ]
    ],
    "explanation": "Największe jeziora połączono kanałami, tworząc 120-kilometrowy szlak żeglowny dostępny także dla kajaków."
  },
  {
    "id": "R02_POJ_07",
    "section": "Krajobraz pojezierny",
    "type": "riddle",
    "prompt": "Jak nazywa się gruba warstwa lodu pokrywająca duże obszary Ziemi?",
    "options": null,
    "answer": "lądolód",
    "altAnswers": [
      "lądolód",
      "lądolodu"
    ],
    "explanation": "Taka warstwa lodu to lądolód, który w epoce lodowcowej przykrywał duże obszary Polski."
  },
  {
    "id": "R02_POJ_08",
    "section": "Krajobraz pojezierny",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pałka wodna, trzcina pospolita, sit rozpierzchły, sosna wydmowa.",
    "options": null,
    "answer": "sosna wydmowa",
    "explanation": "Pałka wodna, trzcina i sit tworzą przybrzeżną roślinność jeziorną, czyli szuwary."
  },
  {
    "id": "R02_POJ_09",
    "section": "Krajobraz pojezierny",
    "type": "scenario",
    "prompt": "Rodzina chce spędzić wakacje nad jeziorami, żeglować kanałami i odwiedzić Giżycko oraz Mikołajki. Który region najlepiej pasuje do tego planu?",
    "options": [
      "Pojezierze Mazurskie",
      "Wybrzeże Słowińskie",
      "Nizina Mazowiecka",
      "Tatry"
    ],
    "answer": 0,
    "explanation": "Giżycko i Mikołajki to popularne miejscowości wypoczynkowe Pojezierza Mazurskiego."
  },
  {
    "id": "R02_POJ_10",
    "section": "Krajobraz pojezierny",
    "type": "match",
    "prompt": "Połącz obiekt lub pojęcie z opisem.",
    "options": null,
    "left": [
      "Śniardwy",
      "Twierdza Boyen",
      "Kanał Elbląski",
      "Wilczy Szaniec"
    ],
    "right": [
      "największe jezioro w Polsce",
      "obiekt militarny w Giżycku",
      "zabytek techniki z pochylniami",
      "sieć bunkrów z czasów II wojny światowej"
    ],
    "answer": {
      "Śniardwy": "największe jezioro w Polsce",
      "Twierdza Boyen": "obiekt militarny w Giżycku",
      "Kanał Elbląski": "zabytek techniki z pochylniami",
      "Wilczy Szaniec": "sieć bunkrów z czasów II wojny światowej"
    },
    "explanation": "Podręcznik wymienia zarówno elementy przyrodnicze Mazur, jak i atrakcje historyczne oraz techniczne."
  },
  {
    "id": "R02_POJ_11",
    "section": "Krajobraz pojezierny",
    "type": "sort",
    "prompt": "Przyporządkuj elementy Pojezierza Mazurskiego do kategorii.",
    "options": null,
    "items": [
      "Śniardwy",
      "szuwary",
      "Szlak Wielkich Jezior Mazurskich",
      "zamek krzyżacki",
      "Twierdza Boyen",
      "kajakarstwo"
    ],
    "categories": [
      "przyroda",
      "turystyka i zabytki"
    ],
    "answer": {
      "przyroda": [
        "Śniardwy",
        "szuwary"
      ],
      "turystyka i zabytki": [
        "Szlak Wielkich Jezior Mazurskich",
        "zamek krzyżacki",
        "Twierdza Boyen",
        "kajakarstwo"
      ]
    },
    "explanation": "Krajobraz Mazur łączy przyrodę jeziorną, aktywny wypoczynek i zabytki."
  },
  {
    "id": "R02_POJ_12",
    "section": "Krajobraz pojezierny",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania krajobrazu polodowcowego pojezierzy.",
    "options": null,
    "items": [
      "w zagłębieniach powstają jeziora",
      "lądolód przykrywa obszar",
      "tworzą się wzniesienia z gliny, piasku i żwiru",
      "wody roztopowe wyżłabiają zagłębienia"
    ],
    "answer": [
      "lądolód przykrywa obszar",
      "tworzą się wzniesienia z gliny, piasku i żwiru",
      "wody roztopowe wyżłabiają zagłębienia",
      "w zagłębieniach powstają jeziora"
    ],
    "image": "/img/r02_jezioro_szuwary_ptaki.png",
    "explanation": "Lądolód pozostawił materiał skalny, a wody roztopowe wyżłobiły zagłębienia, w których powstały jeziora polodowcowe."
  },
  {
    "id": "R02_NIZ_01",
    "section": "Niziny środkowej Polski",
    "type": "single_choice",
    "prompt": "Która kraina jest największą niziną w Polsce według podręcznika?",
    "options": [
      "Nizina Mazowiecka",
      "Nizina Śląska",
      "Nizina Północnopodlaska",
      "Pobrzeże Gdańskie",
      "Pojezierze Pomorskie",
      "Kotlina Warszawska"
    ],
    "answer": 0,
    "explanation": "Nizina Mazowiecka jest największą niziną w Polsce i leży w środkowo-wschodniej części pasa nizin."
  },
  {
    "id": "R02_NIZ_02",
    "section": "Niziny środkowej Polski",
    "type": "single_choice",
    "prompt": "Która rzeka jest główną rzeką Niziny Mazowieckiej?",
    "options": [
      "Wisła",
      "Odra",
      "Warta",
      "San",
      "Wieprz",
      "Niemen"
    ],
    "answer": 0,
    "explanation": "Główną rzeką Niziny Mazowieckiej jest Wisła, do której uchodzą między innymi Narew, Pilica i Bzura."
  },
  {
    "id": "R02_NIZ_03",
    "section": "Niziny środkowej Polski",
    "type": "true_false",
    "prompt": "Na Nizinie Mazowieckiej charakterystyczne są rozległe równiny, kotliny i szerokie doliny rzeczne.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik opisuje Nizinę Mazowiecką jako obszar mało urozmaicony, z równinami, kotlinami i szerokimi dolinami rzek."
  },
  {
    "id": "R02_NIZ_04",
    "section": "Niziny środkowej Polski",
    "type": "true_false",
    "prompt": "Puszcza Kampinoska leży na południowy wschód od Warszawy.",
    "options": null,
    "answer": false,
    "explanation": "Puszcza Kampinoska jest położona na północny zachód od Warszawy."
  },
  {
    "id": "R02_NIZ_05",
    "section": "Niziny środkowej Polski",
    "type": "multi_select",
    "prompt": "Zaznacz duże rzeki Niziny Mazowieckiej wymienione w podręczniku.",
    "options": [
      "Wisła",
      "Narew",
      "Pilica",
      "Bzura",
      "Dunaj",
      "Tamiza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wśród dużych rzek tego obszaru podręcznik wymienia Wisłę, Narew, Pilicę, Bzurę, Wkrę i Bug."
  },
  {
    "id": "R02_NIZ_06",
    "section": "Niziny środkowej Polski",
    "type": "fill_in",
    "prompt": "Rzeki płynące po terenach równinnych tworzą zakola, czyli __________, a odcięte zakola zamieniają się w __________.",
    "options": null,
    "answer": [
      "meandry",
      "starorzecza"
    ],
    "altAnswers": [
      [
        "meandry",
        "meander"
      ],
      [
        "starorzecza",
        "starorzecze"
      ]
    ],
    "image": "/img/r02_meander_starorzecze.png",
    "explanation": "Meandry to zakola rzek, a starorzecze jest pozostałością dawnego meandru."
  },
  {
    "id": "R02_NIZ_07",
    "section": "Niziny środkowej Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się niewielkie, szybko zarastające jezioro powstałe z odciętego meandru rzeki?",
    "options": null,
    "answer": "starorzecze",
    "altAnswers": [
      "starorzecze",
      "starorzecza"
    ],
    "image": "/img/r02_meander_starorzecze.png",
    "explanation": "Odcięty od głównego koryta meander tworzy starorzecze."
  },
  {
    "id": "R02_NIZ_08",
    "section": "Niziny środkowej Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wycinanki, stroje ludowe, tańce ludowe, latarnie morskie.",
    "options": null,
    "answer": "latarnie morskie",
    "explanation": "Wycinanki, stroje i tańce ludowe są elementami folkloru Niziny Mazowieckiej, a latarnie morskie należą do krajobrazu nadmorskiego."
  },
  {
    "id": "R02_NIZ_09",
    "section": "Niziny środkowej Polski",
    "type": "scenario",
    "prompt": "Rolnik wybiera miejsce pod sad jabłoniowy. Podręcznik wskazuje, że w okolicy Łowicza i Grójca jest wiele sadów, a z regionu pochodzi większość uprawianych w Polsce jabłek. Którą krainę opisano?",
    "options": [
      "Nizina Mazowiecka",
      "Wybrzeże Słowińskie",
      "Pojezierze Mazurskie",
      "Pas gór"
    ],
    "answer": 0,
    "explanation": "Sady w okolicach Łowicza i Grójca są charakterystycznym elementem Niziny Mazowieckiej."
  },
  {
    "id": "R02_NIZ_10",
    "section": "Niziny środkowej Polski",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "wysoczyzna",
      "kotliny",
      "meander",
      "Puszcza Kampinoska"
    ],
    "right": [
      "faliste wzniesienie między dolinami",
      "obniżenia otoczone wzniesieniami",
      "zakole rzeki",
      "duży kompleks leśny koło Warszawy"
    ],
    "answer": {
      "wysoczyzna": "faliste wzniesienie między dolinami",
      "kotliny": "obniżenia otoczone wzniesieniami",
      "meander": "zakole rzeki",
      "Puszcza Kampinoska": "duży kompleks leśny koło Warszawy"
    },
    "explanation": "Opis Niziny Mazowieckiej wymaga rozróżnienia form terenu i elementów przyrody chronionej."
  },
  {
    "id": "R02_NIZ_11",
    "section": "Niziny środkowej Polski",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do krajobrazu lub kultury Niziny Mazowieckiej.",
    "options": null,
    "items": [
      "szerokie doliny rzeczne",
      "wysoczyzny",
      "starorzecza",
      "wycinanki",
      "stroje łowickie",
      "tańce ludowe"
    ],
    "categories": [
      "krajobraz",
      "folklor"
    ],
    "answer": {
      "krajobraz": [
        "szerokie doliny rzeczne",
        "wysoczyzny",
        "starorzecza"
      ],
      "folklor": [
        "wycinanki",
        "stroje łowickie",
        "tańce ludowe"
      ]
    },
    "explanation": "Nizina Mazowiecka ma zarówno cechy krajobrazu rzecznego i polodowcowego, jak i wyraźny folklor łowicki oraz kurpiowski."
  },
  {
    "id": "R02_NIZ_12",
    "section": "Niziny środkowej Polski",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania starorzecza.",
    "options": null,
    "items": [
      "powstaje starorzecze",
      "rzeka tworzy zakole",
      "nurt przerzuca się od brzegu do brzegu",
      "meander zostaje odcięty od koryta"
    ],
    "answer": [
      "nurt przerzuca się od brzegu do brzegu",
      "rzeka tworzy zakole",
      "meander zostaje odcięty od koryta",
      "powstaje starorzecze"
    ],
    "image": "/img/r02_meander_starorzecze.png",
    "explanation": "Rzeka tworzy meander, przewężenie zostaje przerwane, a dawny fragment koryta zamienia się w starorzecze."
  },
  {
    "id": "R02_MIA_01",
    "section": "Krajobraz wielkomiejski",
    "type": "single_choice",
    "prompt": "Które miasto jest stolicą Polski i leży nad Wisłą na Nizinie Mazowieckiej?",
    "options": [
      "Warszawa",
      "Kraków",
      "Wrocław",
      "Łódź",
      "Poznań",
      "Gdańsk"
    ],
    "answer": 0,
    "image": "/img/r02_warszawa_wielkie_miasto.png",
    "explanation": "Warszawa leży nad Wisłą na Nizinie Mazowieckiej i jest stolicą Polski."
  },
  {
    "id": "R02_MIA_02",
    "section": "Krajobraz wielkomiejski",
    "type": "single_choice",
    "prompt": "Jak nazywa się proces powstawania i rozwoju miast?",
    "options": [
      "urbanizacja",
      "depresja",
      "meandrowanie",
      "erozja",
      "akumulacja",
      "zlodowacenie"
    ],
    "answer": 0,
    "explanation": "Proces powstawania i rozwoju miast to urbanizacja."
  },
  {
    "id": "R02_MIA_03",
    "section": "Krajobraz wielkomiejski",
    "type": "true_false",
    "prompt": "Krajobraz miejski jest krajobrazem kulturowym, ukształtowanym przez człowieka.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik określa krajobraz miejski jako kulturowy, inaczej antropogeniczny."
  },
  {
    "id": "R02_MIA_04",
    "section": "Krajobraz wielkomiejski",
    "type": "true_false",
    "prompt": "W dużym mieście przeważają pola uprawne i pastwiska.",
    "options": null,
    "answer": false,
    "explanation": "W krajobrazie wielkomiejskim brakuje terenów rolniczych, a przeważają zabudowa i gęsta sieć ulic."
  },
  {
    "id": "R02_MIA_05",
    "section": "Krajobraz wielkomiejski",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje dużego miasta wymienione przy opisie Warszawy.",
    "options": [
      "administracyjna",
      "handlowa",
      "transportowa",
      "kulturalna",
      "wydmowa",
      "lodowcowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Warszawa pełni między innymi funkcję administracyjną, handlową, transportową, kulturalną i edukacyjną."
  },
  {
    "id": "R02_MIA_06",
    "section": "Krajobraz wielkomiejski",
    "type": "fill_in",
    "prompt": "Najstarsza, zabytkowa część miasta to __________, a centralna część dużego miasta to __________.",
    "options": null,
    "answer": [
      "Stare Miasto",
      "śródmieście"
    ],
    "altAnswers": [
      [
        "Stare Miasto",
        "stare miasto"
      ],
      [
        "śródmieście",
        "śródmieścia"
      ]
    ],
    "explanation": "W podręczniku Stare Miasto oznacza najstarszą część miasta, a śródmieście jest jego częścią centralną."
  },
  {
    "id": "R02_MIA_07",
    "section": "Krajobraz wielkomiejski",
    "type": "riddle",
    "prompt": "Jak nazywa się symbol Warszawy, którego pomnik znajduje się między innymi na Rynku Starego Miasta?",
    "options": null,
    "answer": "Warszawska Syrenka",
    "altAnswers": [
      "Warszawska Syrenka",
      "Syrenka",
      "syrenka warszawska"
    ],
    "explanation": "Symbolem Warszawy jest Warszawska Syrenka."
  },
  {
    "id": "R02_MIA_08",
    "section": "Krajobraz wielkomiejski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: metro, tramwaje, gęsta sieć ulic, ruchome wydmy.",
    "options": null,
    "answer": "ruchome wydmy",
    "explanation": "Metro, tramwaje i gęsta sieć ulic są elementami krajobrazu wielkomiejskiego, a ruchome wydmy występują nad morzem."
  },
  {
    "id": "R02_MIA_09",
    "section": "Krajobraz wielkomiejski",
    "type": "scenario",
    "prompt": "Uczeń opisuje miejsce z wysokimi budynkami, wielorodzinnymi osiedlami, gęstą siecią ulic, korkami i smogiem. Jaki krajobraz opisuje?",
    "options": [
      "wielkomiejski",
      "pojezierny",
      "nadmorski",
      "górski"
    ],
    "answer": 0,
    "image": "/img/r02_warszawa_wielkie_miasto.png",
    "explanation": "Takie cechy są typowe dla krajobrazu dużego miasta."
  },
  {
    "id": "R02_MIA_10",
    "section": "Krajobraz wielkomiejski",
    "type": "match",
    "prompt": "Połącz miejsce w Warszawie z opisem z podręcznika.",
    "options": null,
    "left": [
      "Stare Miasto",
      "Łazienki Królewskie",
      "Muzeum Powstania Warszawskiego",
      "Stadion Narodowy"
    ],
    "right": [
      "wpisane na listę UNESCO po odbudowie",
      "największy park w Warszawie",
      "upamiętnia walkę mieszkańców stolicy",
      "zbudowany na Euro 2012"
    ],
    "answer": {
      "Stare Miasto": "wpisane na listę UNESCO po odbudowie",
      "Łazienki Królewskie": "największy park w Warszawie",
      "Muzeum Powstania Warszawskiego": "upamiętnia walkę mieszkańców stolicy",
      "Stadion Narodowy": "zbudowany na Euro 2012"
    },
    "explanation": "Podręcznik przedstawia wybrane miejsca Warszawy i wyjaśnia, z czym są związane."
  },
  {
    "id": "R02_MIA_11",
    "section": "Krajobraz wielkomiejski",
    "type": "sort",
    "prompt": "Przyporządkuj elementy wielkiego miasta do zalet lub problemów życia w mieście.",
    "options": null,
    "items": [
      "łatwy dostęp do szkół",
      "liczne centra handlowe",
      "teatry i muzea",
      "korki",
      "smog",
      "hałas"
    ],
    "categories": [
      "zalety",
      "problemy"
    ],
    "answer": {
      "zalety": [
        "łatwy dostęp do szkół",
        "liczne centra handlowe",
        "teatry i muzea"
      ],
      "problemy": [
        "korki",
        "smog",
        "hałas"
      ]
    },
    "explanation": "Duże miasto daje dostęp do wielu usług, ale wiąże się też z korkami, smogiem i hałasem."
  },
  {
    "id": "R02_MIA_12",
    "section": "Krajobraz wielkomiejski",
    "type": "sequence",
    "prompt": "Ułóż od najstarszej części miasta do jego obrzeży.",
    "options": null,
    "items": [
      "przedmieścia",
      "Stare Miasto",
      "osiedla mieszkaniowe i dzielnice przemysłowe",
      "śródmieście"
    ],
    "answer": [
      "Stare Miasto",
      "śródmieście",
      "osiedla mieszkaniowe i dzielnice przemysłowe",
      "przedmieścia"
    ],
    "explanation": "Podręcznik opisuje Stare Miasto jako najstarszą część, śródmieście jako część centralną, dalej osiedla i dzielnice, a na skraju przedmieścia."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które pasy krajobrazowe podręcznik zalicza do nizin?",
    "options": [
      "pobrzeży, pojezierzy, nizin środkowopolskich, kotlin podkarpackich",
      "pobrzeży, wyżyn, gór, kotlin podkarpackich",
      "pojezierzy, wyżyn, gór, pobrzeży",
      "nizin środkowopolskich, wyżyn, gór, pobrzeży",
      "pobrzeży, pojezierzy, wyżyn, gór",
      "pojezierzy, nizin środkowopolskich, wyżyn, kotlin podkarpackich"
    ],
    "answer": 0,
    "explanation": "Do nizin zaliczono pas pobrzeży, pas pojezierzy, pas nizin środkowopolskich oraz pas kotlin podkarpackich."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który z wymienionych obiektów jest ujęciem wody opisanym w Warszawie?",
    "options": [
      "Gruba Kaśka",
      "Wydma Łącka",
      "Rowokół",
      "Twierdza Boyen",
      "Kanał Elbląski",
      "Kotlina Warszawska"
    ],
    "answer": 0,
    "explanation": "Gruba Kaśka to charakterystyczna budowla w korycie Wisły, będąca elementem systemu pobierającego wodę spod dna rzeki."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Góry Świętokrzyskie leżą w pasie gór, bo są górami.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik zaznacza, że Góry Świętokrzyskie leżą na wyżynach i są częścią Wyżyny Małopolskiej."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Łebsko, największe jezioro Wybrzeża Słowińskiego, powstało wskutek podniesienia się poziomu morza i zalania łąk.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik odróżnia Łebsko od części jezior przybrzeżnych odciętych przez mierzeje i wskazuje jego powstanie przez zalanie łąk."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny pionierskie wydm wymienione w podręczniku.",
    "options": [
      "piaskownica zwyczajna",
      "wydmuchrzyca piaskowa",
      "mikołajek nadmorski",
      "pałka wodna",
      "trzcina pospolita",
      "sit rozpierzchły"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r02_wydmy_ruchome.png",
    "explanation": "Wśród roślin pionierskich wymieniono piaskownicę zwyczajną, wydmuchrzycę piaskową i mikołajka nadmorskiego."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Najwyższa ruchoma wydma w okolicach Łeby to __________, która ma ponad __________ m wysokości.",
    "options": null,
    "answer": [
      "Wydma Łącka",
      "40"
    ],
    "altAnswers": [
      [
        "Wydma Łącka",
        "Łącka",
        "wydma Łącka"
      ],
      [
        "40",
        "40 m",
        "czterdzieści"
      ]
    ],
    "image": "/img/r02_wydmy_ruchome.png",
    "explanation": "W Słowińskim Parku Narodowym najwyższa jest Wydma Łącka o wysokości ponad 40 m."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się rodzaj bagiennego torfu wydobywany między innymi w Kołobrzegu i stosowany w uzdrowiskach?",
    "options": null,
    "answer": "borowina",
    "altAnswers": [
      "borowina",
      "borowiną",
      "borowiny"
    ],
    "explanation": "Borowina ma właściwości lecznicze i jest wykorzystywana do zabiegów leczniczych."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Ryn, Giżycko, Kętrzyn, Kołobrzeg.",
    "options": null,
    "answer": "Kołobrzeg",
    "explanation": "Ryn, Giżycko i Kętrzyn są wymienione przy zamkach krzyżackich na Mazurach, a Kołobrzeg to miejscowość nadmorska."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Wędrowiec w Puszczy Kampinoskiej widzi suche piaszczyste wzniesienia obok obniżeń z bagnami i torfowiskami. Który proces pomógł utworzyć te piaszczyste wzniesienia?",
    "options": [
      "działalność wiatru",
      "działalność raf koralowych",
      "wybuchy wulkanów",
      "budowa falochronów"
    ],
    "answer": 0,
    "image": "/img/r02_meander_starorzecze.png",
    "explanation": "Gdy klimat był chłodniejszy, wiatr usypał z piasków wydmy śródlądowe."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz nazwę z właściwą informacją szczegółową.",
    "options": null,
    "left": [
      "Rowokół",
      "Wydma Łącka",
      "Kotlina Warszawska",
      "Lotnisko Chopina"
    ],
    "right": [
      "wzniesienie polodowcowe koło Słupska",
      "ruchoma wydma ponad 40 m",
      "największa kotlina Niziny Mazowieckiej",
      "największy port lotniczy w Polsce"
    ],
    "answer": {
      "Rowokół": "wzniesienie polodowcowe koło Słupska",
      "Wydma Łącka": "ruchoma wydma ponad 40 m",
      "Kotlina Warszawska": "największa kotlina Niziny Mazowieckiej",
      "Lotnisko Chopina": "największy port lotniczy w Polsce"
    },
    "explanation": "Pytanie łączy szczegóły z różnych części rozdziału: nad morzem, na Mazurach, Mazowszu i w Warszawie."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady zmian w krajobrazie do pozytywnych lub negatywnych skutków działalności człowieka.",
    "options": null,
    "items": [
      "tworzenie parków narodowych",
      "wytyczanie szlaków turystycznych",
      "odbudowa warszawskiej Starówki",
      "zanieczyszczenie plaż",
      "zmniejszenie powierzchni lasów",
      "hałas w wielkich miastach"
    ],
    "categories": [
      "zmiany pozytywne",
      "zmiany negatywne"
    ],
    "answer": {
      "zmiany pozytywne": [
        "tworzenie parków narodowych",
        "wytyczanie szlaków turystycznych",
        "odbudowa warszawskiej Starówki"
      ],
      "zmiany negatywne": [
        "zanieczyszczenie plaż",
        "zmniejszenie powierzchni lasów",
        "hałas w wielkich miastach"
      ]
    },
    "explanation": "Podsumowanie działu podaje przykłady zmian korzystnych, takich jak parki narodowe, oraz niekorzystnych, takich jak zanieczyszczenia i zmniejszanie powierzchni lasów."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia lub procesy zgodnie z opisami rozdziału - od przyrodniczego początku po współczesne wykorzystanie terenu.",
    "options": null,
    "items": [
      "rozwój turystyki i miast",
      "działalność lądolodu",
      "tworzenie meandrów przez rzeki",
      "wycinanie lasów pod pola uprawne"
    ],
    "answer": [
      "działalność lądolodu",
      "tworzenie meandrów przez rzeki",
      "wycinanie lasów pod pola uprawne",
      "rozwój turystyki i miast"
    ],
    "explanation": "Najpierw krajobraz pojezierzy i nizin kształtował lądolód, potem rzeki i wiatr tworzyły formy terenu, a później człowiek przekształcał krajobraz przez rolnictwo, miasta i turystykę."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Krajobrazy nizinne Polski",
  icon: "🌄",
  sectionOrder: [
    "Różnorodność krajobrazów",
    "Krajobraz nadmorski",
    "Krajobraz pojezierny",
    "Niziny środkowej Polski",
    "Krajobraz wielkomiejski",
    "Super trudne"
  ],
  sectionIcons: {
    "Różnorodność krajobrazów": "🗺️",
    "Krajobraz nadmorski": "🌊",
    "Krajobraz pojezierny": "⛵",
    "Niziny środkowej Polski": "🌾",
    "Krajobraz wielkomiejski": "🏙️",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
