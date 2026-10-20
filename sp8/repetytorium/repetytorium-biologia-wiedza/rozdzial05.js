// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SKO = Skóra i organizacja ciała
//   RUC = Układ ruchu
//   POK = Układ pokarmowy i odżywianie
//   KRW = Krew i układ krążenia
//   ODP = Układ odpornościowy
//   ODD = Układ oddechowy
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_SKO_01",
    "section": "Skóra i organizacja ciała",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji ciała od najprostszego do najbardziej złożonego.",
    "options": null,
    "answer": [
      "atomy",
      "cząsteczki",
      "komórki",
      "tkanki",
      "narządy",
      "układy narządów",
      "organizm"
    ],
    "explanation": "Atomy budują cząsteczki, z których powstają struktury komórkowe; komórki tworzą tkanki, tkanki narządy, a narządy układy współtworzące organizm.",
    "items": [
      "narządy",
      "cząsteczki",
      "układy narządów",
      "atomy",
      "organizm",
      "tkanki",
      "komórki"
    ]
  },
  {
    "id": "R05_SKO_02",
    "section": "Skóra i organizacja ciała",
    "type": "single_choice",
    "prompt": "Które dwie warstwy tworzą skórę człowieka?",
    "options": [
      "Skóra właściwa i tkanka podskórna",
      "Naskórek i skóra właściwa",
      "Naskórek i tkanka mięśniowa",
      "Warstwa rogowa i tkanka kostna",
      "Tkanka podskórna i okostna",
      "Skóra właściwa i chrząstka"
    ],
    "answer": 1,
    "explanation": "Skóra składa się z naskórka i skóry właściwej. Leżąca pod nimi tkanka podskórna jest silnie ze skórą związana, ale nie stanowi jej warstwy.",
    "image": "r05_warstwy_skory.jpg"
  },
  {
    "id": "R05_SKO_03",
    "section": "Skóra i organizacja ciała",
    "type": "match",
    "prompt": "Połącz strukturę z jej rolą w powłoce ciała.",
    "options": null,
    "answer": {
      "Naskórek": "ochrona przed utratą wody i drobnoustrojami",
      "Skóra właściwa": "odbieranie bodźców i udział w termoregulacji",
      "Tkanka podskórna": "magazynowanie tłuszczu i ograniczanie utraty ciepła"
    },
    "explanation": "Naskórek chroni, skóra właściwa zawiera receptory i naczynia krwionośne, a tkanka podskórna z komórkami tłuszczowymi stanowi rezerwę energetyczną.",
    "image": "r05_warstwy_skory.jpg",
    "left": [
      "Naskórek",
      "Skóra właściwa",
      "Tkanka podskórna"
    ],
    "right": [
      "magazynowanie tłuszczu i ograniczanie utraty ciepła",
      "ochrona przed utratą wody i drobnoustrojami",
      "odbieranie bodźców i udział w termoregulacji"
    ]
  },
  {
    "id": "R05_SKO_04",
    "section": "Skóra i organizacja ciała",
    "type": "true_false",
    "prompt": "Tkanka podskórna jest zaliczana do dwóch warstw skóry.",
    "options": null,
    "answer": false,
    "explanation": "Skóra składa się z naskórka i skóry właściwej. Tkanka podskórna leży pod nimi i nie jest warstwą skóry."
  },
  {
    "id": "R05_SKO_05",
    "section": "Skóra i organizacja ciała",
    "type": "multi_select",
    "prompt": "Zaznacz receptory występujące w skórze.",
    "options": [
      "Mechanoreceptory",
      "Fotoreceptory",
      "Termoreceptory",
      "Chemoreceptory węchowe",
      "Nocyceptory",
      "Pręciki siatkówki"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Mechanoreceptory reagują na dotyk i nacisk, termoreceptory na temperaturę, a nocyceptory na bodźce bólowe."
  },
  {
    "id": "R05_SKO_06",
    "section": "Skóra i organizacja ciała",
    "type": "fill_in",
    "prompt": "Brunatny barwnik chroniący skórę przed promieniowaniem UV to __________.",
    "options": null,
    "answer": [
      "melanina"
    ],
    "explanation": "Melanina nadaje barwę skórze, oczom i włosom oraz ogranicza działanie promieniowania UV na głębsze warstwy skóry.",
    "altAnswers": [
      [
        "melanina",
        "melaniny"
      ]
    ]
  },
  {
    "id": "R05_SKO_07",
    "section": "Skóra i organizacja ciała",
    "type": "scenario",
    "prompt": "W gorący dzień wzrasta wydzielanie potu, a naczynia krwionośne skóry rozszerzają się. Jaki proces pomaga to regulować?",
    "options": [
      "Wytwarzanie krwinek",
      "Trawienie białek",
      "Ruchy perystaltyczne",
      "Termoregulację",
      "Mineralizację kości",
      "Krzepnięcie krwi"
    ],
    "answer": 3,
    "explanation": "Parowanie potu chłodzi ciało, a rozszerzenie naczyń skórnych ułatwia oddawanie ciepła. To elementy termoregulacji."
  },
  {
    "id": "R05_SKO_08",
    "section": "Skóra i organizacja ciała",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący wytworem naskórka: włos, paznokieć, gruczoł potowy, kość.",
    "options": null,
    "answer": "kość",
    "explanation": "Włosy, paznokcie i gruczoły potowe są wytworami naskórka; kość jest elementem układu szkieletowego."
  },
  {
    "id": "R05_SKO_09",
    "section": "Skóra i organizacja ciała",
    "type": "riddle",
    "prompt": "Jak nazywa się dolna rozszerzona część korzenia włosa znajdująca się w mieszku włosowym?",
    "options": null,
    "answer": "cebulka włosa",
    "explanation": "Cebulka leży w dolnej części korzenia włosa. Znajdują się tam komórki związane ze wzrostem włosa.",
    "altAnswers": [
      "cebulka włosa",
      "cebulka"
    ]
  },
  {
    "id": "R05_SKO_10",
    "section": "Skóra i organizacja ciała",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odpowiedniej roli.",
    "options": null,
    "answer": {
      "odbiór bodźców": [
        "mechanoreceptory",
        "termoreceptory",
        "nocyceptory"
      ],
      "wydzielanie": [
        "gruczoły potowe",
        "gruczoły łojowe",
        "gruczoły mlekowe"
      ]
    },
    "explanation": "Trzy typy receptorów odbierają bodźce, a gruczoły potowe, łojowe i mlekowe odpowiadają za wydzielanie odpowiednich substancji.",
    "items": [
      "gruczoły łojowe",
      "termoreceptory",
      "gruczoły mlekowe",
      "mechanoreceptory",
      "gruczoły potowe",
      "nocyceptory"
    ],
    "categories": [
      "odbiór bodźców",
      "wydzielanie"
    ]
  },
  {
    "id": "R05_SKO_11",
    "section": "Skóra i organizacja ciała",
    "type": "single_choice",
    "prompt": "Co wydzielają gruczoły łojowe skóry?",
    "options": [
      "Pot",
      "Melaninę",
      "Żółć",
      "Ślinę",
      "Łój",
      "Sok trzustkowy"
    ],
    "answer": 4,
    "explanation": "Gruczoły łojowe produkują łój, który natłuszcza skórę i włosy oraz pomaga chronić je przed drobnoustrojami."
  },
  {
    "id": "R05_RUC_01",
    "section": "Układ ruchu",
    "type": "single_choice",
    "prompt": "Ile kości ma szkielet dorosłego człowieka?",
    "options": [
      "200",
      "204",
      "206",
      "208",
      "212",
      "216"
    ],
    "answer": 2,
    "explanation": "Szkielet dorosłego człowieka składa się zwykle z 206 kości.",
    "image": "r05_szkielet_czlowieka.jpg"
  },
  {
    "id": "R05_RUC_02",
    "section": "Układ ruchu",
    "type": "match",
    "prompt": "Połącz część szkieletu z należącą do niej strukturą.",
    "options": null,
    "answer": {
      "Szkielet osiowy": "kręgosłup",
      "Szkielet obręczy": "obręcz barkowa",
      "Szkielet kończyn": "kość udowa"
    },
    "explanation": "Kręgosłup należy do szkieletu osiowego, obręcz barkowa do szkieletu obręczy, a kość udowa do szkieletu kończyn.",
    "image": "r05_szkielet_czlowieka.jpg",
    "left": [
      "Szkielet osiowy",
      "Szkielet obręczy",
      "Szkielet kończyn"
    ],
    "right": [
      "obręcz barkowa",
      "kość udowa",
      "kręgosłup"
    ]
  },
  {
    "id": "R05_RUC_03",
    "section": "Układ ruchu",
    "type": "fill_in",
    "prompt": "Kręgosłup człowieka składa się z około __________ kręgów.",
    "options": null,
    "answer": [
      "33–34"
    ],
    "explanation": "Kręgosłup człowieka składa się zwykle z 33–34 kręgów tworzących pięć odcinków.",
    "altAnswers": [
      [
        "33–34",
        "33-34",
        "33 do 34",
        "33 lub 34"
      ]
    ]
  },
  {
    "id": "R05_RUC_04",
    "section": "Układ ruchu",
    "type": "sequence",
    "prompt": "Ułóż odcinki kręgosłupa od góry do dołu.",
    "options": null,
    "answer": [
      "szyjny",
      "piersiowy",
      "lędźwiowy",
      "krzyżowy",
      "guziczny"
    ],
    "explanation": "Kolejność od głowy ku dołowi to odcinek szyjny, piersiowy, lędźwiowy, krzyżowy i guziczny.",
    "image": "r05_szkielet_czlowieka.jpg",
    "items": [
      "guziczny",
      "lędźwiowy",
      "szyjny",
      "krzyżowy",
      "piersiowy"
    ]
  },
  {
    "id": "R05_RUC_05",
    "section": "Układ ruchu",
    "type": "single_choice",
    "prompt": "Który rodzaj szpiku kostnego produkuje elementy morfotyczne krwi?",
    "options": [
      "Szpik czerwony",
      "Szpik żółty",
      "Szpik tłuszczowy",
      "Maź stawowa",
      "Chrząstka stawowa",
      "Okostna"
    ],
    "answer": 0,
    "explanation": "Szpik czerwony wytwarza elementy morfotyczne krwi. Szpik żółty jest zbudowany głównie z tkanki tłuszczowej i nie pełni tej funkcji.",
    "image": "r05_kosc_dluga_przekroj.jpg"
  },
  {
    "id": "R05_RUC_06",
    "section": "Układ ruchu",
    "type": "true_false",
    "prompt": "U dorosłego człowieka większość kości czaszki jest połączona nieruchomymi szwami, z wyjątkiem żuchwy.",
    "options": null,
    "answer": true,
    "explanation": "Szwy są nieruchomymi połączeniami kości czaszki; wyjątek stanowi ruchoma żuchwa."
  },
  {
    "id": "R05_RUC_07",
    "section": "Układ ruchu",
    "type": "match",
    "prompt": "Połącz typ stawu z opisem ruchu.",
    "options": null,
    "answer": {
      "Staw zawiasowy": "ruch głównie w jednej płaszczyźnie",
      "Staw kulisty": "ruch w wielu płaszczyznach",
      "Staw obrotowy": "obracanie kości względem siebie"
    },
    "explanation": "Staw łokciowy jest przykładem zawiasowego, barkowy kulistego, a połączenie umożliwiające obrót kości jest stawem obrotowym.",
    "image": "r05_staw_przekroj.jpg",
    "left": [
      "Staw zawiasowy",
      "Staw kulisty",
      "Staw obrotowy"
    ],
    "right": [
      "obracanie kości względem siebie",
      "ruch głównie w jednej płaszczyźnie",
      "ruch w wielu płaszczyznach"
    ]
  },
  {
    "id": "R05_RUC_08",
    "section": "Układ ruchu",
    "type": "odd_one_out",
    "prompt": "Wskaż kość nienależącą do kończyny górnej: kość ramienna, kość łokciowa, kość promieniowa, kość udowa.",
    "options": null,
    "answer": "kość udowa",
    "explanation": "Kość udowa należy do kończyny dolnej, a pozostałe wymienione kości do kończyny górnej."
  },
  {
    "id": "R05_RUC_09",
    "section": "Układ ruchu",
    "type": "scenario",
    "prompt": "Po upadku kości w stawie ustawiły się nieprawidłowo względem siebie i pojawił się silny ból. Jak nazywa się taki uraz?",
    "options": [
      "Skręcenie",
      "Zwichnięcie",
      "Złamanie trzonu kości",
      "Krzywica",
      "Skolioza",
      "Osteoporoza"
    ],
    "answer": 1,
    "explanation": "Zwichnięcie oznacza nieprawidłowe ustawienie kości tworzących staw; przy skręceniu dochodzi do uszkodzenia elementów stawu bez przemieszczenia kości."
  },
  {
    "id": "R05_RUC_10",
    "section": "Układ ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje aparatu ruchu.",
    "options": [
      "Utrzymywanie postawy ciała",
      "Wytwarzanie żółci",
      "Ochrona narządów wewnętrznych",
      "Wydzielanie soku żołądkowego",
      "Magazynowanie składników mineralnych w kościach",
      "Umożliwianie ruchu"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Aparat ruchu umożliwia poruszanie się i utrzymywanie postawy, chroni narządy, a kości magazynują składniki mineralne. Nie odpowiada za produkcję żółci ani trawienie tłuszczów."
  },
  {
    "id": "R05_RUC_11",
    "section": "Układ ruchu",
    "type": "sort",
    "prompt": "Przyporządkuj kości do właściwej kończyny.",
    "options": null,
    "answer": {
      "kończyna górna": [
        "kość ramienna",
        "kość promieniowa",
        "kość łokciowa"
      ],
      "kończyna dolna": [
        "kość udowa",
        "kość piszczelowa",
        "kość strzałkowa"
      ]
    },
    "explanation": "Ramię i przedramię należą do kończyny górnej, natomiast udo i podudzie tworzą część kończyny dolnej.",
    "items": [
      "kość piszczelowa",
      "kość łokciowa",
      "kość udowa",
      "kość promieniowa",
      "kość strzałkowa",
      "kość ramienna"
    ],
    "categories": [
      "kończyna górna",
      "kończyna dolna"
    ]
  },
  {
    "id": "R05_POK_01",
    "section": "Układ pokarmowy i odżywianie",
    "type": "sequence",
    "prompt": "Ułóż elementy przewodu pokarmowego według drogi przesuwania się pokarmu.",
    "options": null,
    "answer": [
      "jama ustna",
      "gardło",
      "przełyk",
      "żołądek",
      "jelito cienkie",
      "jelito grube"
    ],
    "explanation": "Pokarm przechodzi kolejno przez jamę ustną, gardło, przełyk, żołądek, jelito cienkie i jelito grube.",
    "image": "r05_uklad_pokarmowy.jpg",
    "items": [
      "jelito grube",
      "gardło",
      "żołądek",
      "jama ustna",
      "jelito cienkie",
      "przełyk"
    ]
  },
  {
    "id": "R05_POK_02",
    "section": "Układ pokarmowy i odżywianie",
    "type": "match",
    "prompt": "Połącz gruczoł trawienny z jego produktem.",
    "options": null,
    "answer": {
      "Ślinianki": "ślina",
      "Wątroba": "żółć",
      "Trzustka": "enzymy trawienne"
    },
    "explanation": "Ślinianki wytwarzają ślinę, wątroba żółć, a trzustka m.in. enzymy trawienne.",
    "image": "r05_uklad_pokarmowy.jpg",
    "left": [
      "Ślinianki",
      "Wątroba",
      "Trzustka"
    ],
    "right": [
      "enzymy trawienne",
      "ślina",
      "żółć"
    ]
  },
  {
    "id": "R05_POK_03",
    "section": "Układ pokarmowy i odżywianie",
    "type": "single_choice",
    "prompt": "Które zęby służą przede wszystkim do odgryzania kęsów?",
    "options": [
      "Siekacze",
      "Kły",
      "Przedtrzonowe",
      "Trzonowe",
      "Zęby mądrości",
      "Zęby mleczne"
    ],
    "answer": 0,
    "explanation": "Siekacze odpowiadają za odgryzanie kęsów. Zęby trzonowe i przedtrzonowe rozcierają pokarm.",
    "image": "r05_zab_przekroj.jpg"
  },
  {
    "id": "R05_POK_04",
    "section": "Układ pokarmowy i odżywianie",
    "type": "true_false",
    "prompt": "Uzębienie mleczne człowieka składa się z 20 zębów.",
    "options": null,
    "answer": true,
    "explanation": "Uzębienie mleczne człowieka obejmuje zwykle 20 zębów, a stałe – 32."
  },
  {
    "id": "R05_POK_05",
    "section": "Układ pokarmowy i odżywianie",
    "type": "odd_one_out",
    "prompt": "Który element nie należy do jelita cienkiego: dwunastnica, jelito czcze, jelito kręte, okrężnica.",
    "options": null,
    "answer": "okrężnica",
    "explanation": "Dwunastnica, jelito czcze i jelito kręte tworzą jelito cienkie. Okrężnica należy do jelita grubego."
  },
  {
    "id": "R05_POK_06",
    "section": "Układ pokarmowy i odżywianie",
    "type": "fill_in",
    "prompt": "Pofałdowania błony śluzowej jelita cienkiego zwiększające powierzchnię wchłaniania to __________.",
    "options": null,
    "answer": [
      "kosmki jelitowe"
    ],
    "explanation": "Kosmki jelitowe, a na ich powierzchni mikrokosmki, zwiększają powierzchnię wchłaniania składników pokarmowych.",
    "image": "r05_jelito_cienkie_kosmki.jpg",
    "altAnswers": [
      [
        "kosmki jelitowe",
        "kosmki"
      ]
    ]
  },
  {
    "id": "R05_POK_07",
    "section": "Układ pokarmowy i odżywianie",
    "type": "scenario",
    "prompt": "Uczeń analizuje preparat ściany jelita z licznymi kosmkami i mikrokosmkami. Jaka funkcja jest dzięki nim usprawniana?",
    "options": [
      "Wydzielanie żółci do przewodu pokarmowego",
      "Wstępne trawienie skrobi",
      "Wchłanianie składników pokarmowych",
      "Mieszanie pokarmu w żołądku",
      "Rozdrabnianie pokarmu przez zęby",
      "Formowanie kału w jelicie grubym"
    ],
    "answer": 2,
    "explanation": "Kosmki i mikrokosmki zwiększają powierzchnię kontaktu treści pokarmowej ze ścianą jelita, co usprawnia wchłanianie.",
    "image": "r05_jelito_cienkie_kosmki.jpg"
  },
  {
    "id": "R05_POK_08",
    "section": "Układ pokarmowy i odżywianie",
    "type": "multi_select",
    "prompt": "Zaznacz procesy zachodzące w jelicie grubym.",
    "options": [
      "Wchłanianie wody i soli mineralnych",
      "Wydzielanie pepsyny",
      "Formowanie kału",
      "Produkcja śliny",
      "Rozkład resztek pokarmowych przez bakterie",
      "Produkcja soku trzustkowego"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "W jelicie grubym bakterie rozkładają resztki pokarmowe, wchłaniana jest woda i formowany jest kał. Intensywne wchłanianie aminokwasów i praca pepsyny dotyczą innych odcinków."
  },
  {
    "id": "R05_POK_09",
    "section": "Układ pokarmowy i odżywianie",
    "type": "sort",
    "prompt": "Podziel witaminy według rozpuszczalności.",
    "options": null,
    "answer": {
      "rozpuszczalne w tłuszczach": [
        "A",
        "D",
        "E",
        "K"
      ],
      "rozpuszczalne w wodzie": [
        "C",
        "B1",
        "B6",
        "B12"
      ]
    },
    "explanation": "Do witamin rozpuszczalnych w tłuszczach należą A, D, E i K, a do rozpuszczalnych w wodzie witamina C oraz witaminy z grupy B.",
    "items": [
      "B6",
      "A",
      "K",
      "C",
      "D",
      "B12",
      "E",
      "B1"
    ],
    "categories": [
      "rozpuszczalne w tłuszczach",
      "rozpuszczalne w wodzie"
    ]
  },
  {
    "id": "R05_POK_10",
    "section": "Układ pokarmowy i odżywianie",
    "type": "riddle",
    "prompt": "Jaka wydzielina wytwarzana w wątrobie rozbija tłuszcz na drobne kropelki?",
    "options": null,
    "answer": "żółć",
    "explanation": "Żółć powstaje w wątrobie, jest magazynowana w woreczku żółciowym i emulguje tłuszcze, ułatwiając ich trawienie.",
    "altAnswers": [
      "żółć",
      "zolc"
    ]
  },
  {
    "id": "R05_POK_11",
    "section": "Układ pokarmowy i odżywianie",
    "type": "single_choice",
    "prompt": "Który enzym rozpoczyna trawienie skrobi w jamie ustnej?",
    "options": [
      "Pepsyna",
      "Lipaza trzustkowa",
      "Trypsyna",
      "Nukleaza",
      "Amylaza ślinowa",
      "Amylaza trzustkowa"
    ],
    "answer": 4,
    "explanation": "Amylaza ślinowa produkowana w śliniankach rozpoczyna rozkład cukrów, przede wszystkim skrobi, w jamie ustnej."
  },
  {
    "id": "R05_POK_12",
    "section": "Układ pokarmowy i odżywianie",
    "type": "true_false",
    "prompt": "Błonnik pokarmowy jest trawiony i wchłaniany w jelicie cienkim, dlatego stanowi główne źródło energii.",
    "options": null,
    "answer": false,
    "explanation": "Błonnik nie jest trawiony ani wchłaniany; pobudza perystaltykę jelit, wiąże wodę i ułatwia wypróżnianie."
  },
  {
    "id": "R05_POK_13",
    "section": "Układ pokarmowy i odżywianie",
    "type": "match",
    "prompt": "Połącz składnik pokarmowy z funkcją.",
    "options": null,
    "answer": {
      "Białka": "materiał budulcowy i składnik enzymów",
      "Węglowodany": "główne źródło energii",
      "Tłuszcze": "rezerwa energii i budowa błon",
      "Woda": "rozpuszczalnik i udział w termoregulacji"
    },
    "explanation": "Białka często pełnią funkcje budulcowe i regulujące; węglowodany są źródłem energii, tłuszcze także magazynują energię, a woda jest rozpuszczalnikiem i uczestniczy w termoregulacji.",
    "left": [
      "Białka",
      "Węglowodany",
      "Tłuszcze",
      "Woda"
    ],
    "right": [
      "rozpuszczalnik i udział w termoregulacji",
      "rezerwa energii i budowa błon",
      "materiał budulcowy i składnik enzymów",
      "główne źródło energii"
    ]
  },
  {
    "id": "R05_KRW_01",
    "section": "Krew i układ krążenia",
    "type": "multi_select",
    "prompt": "Zaznacz elementy morfotyczne krwi.",
    "options": [
      "Osocze",
      "Erytrocyty",
      "Limfa",
      "Leukocyty",
      "Trombocyty",
      "Maź stawowa"
    ],
    "answer": [
      1,
      3,
      4
    ],
    "explanation": "Elementy morfotyczne krwi to erytrocyty, leukocyty i trombocyty. Osocze jest płynną substancją międzykomórkową."
  },
  {
    "id": "R05_KRW_02",
    "section": "Krew i układ krążenia",
    "type": "match",
    "prompt": "Połącz element krwi z podstawową funkcją.",
    "options": null,
    "answer": {
      "Erytrocyty": "transport tlenu",
      "Leukocyty": "obrona przed patogenami",
      "Trombocyty": "udział w krzepnięciu krwi",
      "Osocze": "transport rozpuszczonych substancji"
    },
    "explanation": "Erytrocyty przenoszą gazy oddechowe, leukocyty biorą udział w odporności, trombocyty w hemostazie, a osocze transportuje wiele substancji.",
    "left": [
      "Erytrocyty",
      "Leukocyty",
      "Trombocyty",
      "Osocze"
    ],
    "right": [
      "udział w krzepnięciu krwi",
      "transport rozpuszczonych substancji",
      "obrona przed patogenami",
      "transport tlenu"
    ]
  },
  {
    "id": "R05_KRW_03",
    "section": "Krew i układ krążenia",
    "type": "single_choice",
    "prompt": "Jaką część objętości krwi stanowi osocze?",
    "options": [
      "25%",
      "40%",
      "55%",
      "65%",
      "75%",
      "90%"
    ],
    "answer": 2,
    "explanation": "Osocze stanowi około 55% objętości krwi; pozostałą część stanowią elementy morfotyczne."
  },
  {
    "id": "R05_KRW_04",
    "section": "Krew i układ krążenia",
    "type": "fill_in",
    "prompt": "Białko w erytrocytach, które przenosi tlen i zawiera żelazo, to __________.",
    "options": null,
    "answer": [
      "hemoglobina"
    ],
    "explanation": "Hemoglobina nadaje krwi czerwoną barwę. Jej hem zawiera żelazo, a w płucach białko to wiąże tlen.",
    "altAnswers": [
      [
        "hemoglobina",
        "hemoglobiny"
      ]
    ]
  },
  {
    "id": "R05_KRW_05",
    "section": "Krew i układ krążenia",
    "type": "sequence",
    "prompt": "Ułóż etapy krzepnięcia krwi od pierwszego do ostatniego.",
    "options": null,
    "answer": [
      "obkurczenie zranionego naczynia",
      "utworzenie czopa z płytek krwi",
      "przemiana fibrynogenu w fibrynę",
      "przyczepienie krwinek do sieci fibryny"
    ],
    "explanation": "Uszkodzone naczynie obkurcza się, płytki tworzą czop, fibrynogen przekształca się w fibrynę, a do jej sieci przylegają krwinki.",
    "items": [
      "przyczepienie krwinek do sieci fibryny",
      "utworzenie czopa z płytek krwi",
      "obkurczenie zranionego naczynia",
      "przemiana fibrynogenu w fibrynę"
    ]
  },
  {
    "id": "R05_KRW_06",
    "section": "Krew i układ krążenia",
    "type": "true_false",
    "prompt": "Doświadczalnym wyróżnikiem grupy krwi AB jest obecność antygenów A i B na powierzchni erytrocytów.",
    "options": null,
    "answer": true,
    "explanation": "Erytrocyty osób z grupą AB mają na powierzchni zarówno antygen A, jak i antygen B."
  },
  {
    "id": "R05_KRW_07",
    "section": "Krew i układ krążenia",
    "type": "sort",
    "prompt": "Przyporządkuj grupę krwi do rodzaju antygenów obecnych na krwinkach czerwonych.",
    "options": null,
    "answer": {
      "antygen A": [
        "grupa A"
      ],
      "antygen B": [
        "grupa B"
      ],
      "antygeny A i B": [
        "grupa AB"
      ],
      "brak antygenów A i B": [
        "grupa O"
      ]
    },
    "explanation": "W układzie ABO grupa A ma antygen A, grupa B antygen B, AB oba, a 0 nie ma antygenów A ani B.",
    "items": [
      "grupa AB",
      "grupa O",
      "grupa B",
      "grupa A"
    ],
    "categories": [
      "antygen A",
      "antygen B",
      "antygeny A i B",
      "brak antygenów A i B"
    ]
  },
  {
    "id": "R05_KRW_08",
    "section": "Krew i układ krążenia",
    "type": "single_choice",
    "prompt": "Z którym antygenem na erytrocytach związane jest oznaczenie Rh+?",
    "options": [
      "Antygenem A",
      "Antygenem B",
      "Antygenem H",
      "Antygenem K",
      "Antygenem D",
      "Antygenem C"
    ],
    "answer": 4,
    "explanation": "Oznaczenie Rh+ wynika z obecności antygenu D na powierzchni czerwonych krwinek."
  },
  {
    "id": "R05_KRW_09",
    "section": "Krew i układ krążenia",
    "type": "scenario",
    "prompt": "Podczas stania przez długi czas krew w kończynach dolnych musi płynąć do serca wbrew grawitacji. Co w żyłach utrudnia cofanie się krwi?",
    "options": [
      "Kurczenie ścian tętnic",
      "Zastawki żylne",
      "Naczynia włosowate",
      "Śródbłonek",
      "Sieć naczyń wieńcowych",
      "Przegroda międzykomorowa"
    ],
    "answer": 1,
    "explanation": "Żyły mają zastawki, które otwierają się przy przepływie krwi do serca i zamykają podczas próby cofania.",
    "image": "r05_naczynia_krwionosne.jpg"
  },
  {
    "id": "R05_KRW_10",
    "section": "Krew i układ krążenia",
    "type": "sequence",
    "prompt": "Ułóż główne etapy krwiobiegu małego zaczynając od prawej komory.",
    "options": null,
    "answer": [
      "prawa komora",
      "tętnice płucne",
      "naczynia włosowate płuc",
      "żyły płucne",
      "lewy przedsionek"
    ],
    "explanation": "Krążenie płucne prowadzi krew odtlenowaną z prawej komory do płuc i odprowadza krew natlenowaną żyłami płucnymi do lewego przedsionka.",
    "image": "r05_serce_przekroj.jpg",
    "items": [
      "naczynia włosowate płuc",
      "lewy przedsionek",
      "tętnice płucne",
      "prawa komora",
      "żyły płucne"
    ]
  },
  {
    "id": "R05_KRW_11",
    "section": "Krew i układ krążenia",
    "type": "match",
    "prompt": "Połącz naczynie z jego główną cechą.",
    "options": null,
    "answer": {
      "Tętnice": "prowadzą krew od serca",
      "Żyły": "prowadzą krew do serca",
      "Naczynia włosowate": "umożliwiają wymianę substancji z tkankami"
    },
    "explanation": "Tętnice odprowadzają krew z serca, żyły doprowadzają ją do serca, a cienkościenne naczynia włosowate uczestniczą w wymianie gazów i substancji.",
    "image": "r05_naczynia_krwionosne.jpg",
    "left": [
      "Tętnice",
      "Żyły",
      "Naczynia włosowate"
    ],
    "right": [
      "umożliwiają wymianę substancji z tkankami",
      "prowadzą krew do serca",
      "prowadzą krew od serca"
    ]
  },
  {
    "id": "R05_ODP_01",
    "section": "Układ odpornościowy",
    "type": "single_choice",
    "prompt": "Jaką cechę budowy ma układ limfatyczny?",
    "options": [
      "Jest układem otwartym",
      "Składa się tylko z tętnic",
      "Nie zawiera naczyń",
      "Ma wyłącznie dwa narządy",
      "Przenosi tylko erytrocyty",
      "Jest fragmentem przewodu pokarmowego"
    ],
    "answer": 0,
    "explanation": "Układ limfatyczny jest otwarty: początkowe naczynia odbierają płyn tkankowy z przestrzeni międzykomórkowych.",
    "image": "r05_uklad_limfatyczny.jpg"
  },
  {
    "id": "R05_ODP_02",
    "section": "Układ odpornościowy",
    "type": "multi_select",
    "prompt": "Które narządy należą do układu limfatycznego?",
    "options": [
      "Grasica",
      "Trzustka",
      "Śledziona",
      "Węzły chłonne",
      "Żołądek",
      "Szpik kostny"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Do narządów układu chłonnego należą m.in. grasica, szpik kostny, śledziona i węzły chłonne.",
    "image": "r05_uklad_limfatyczny.jpg"
  },
  {
    "id": "R05_ODP_03",
    "section": "Układ odpornościowy",
    "type": "match",
    "prompt": "Połącz narząd limfatyczny z przypisaną mu funkcją.",
    "options": null,
    "answer": {
      "Grasica": "dojrzewanie limfocytów T",
      "Szpik kostny czerwony": "dojrzewanie limfocytów B",
      "Węzły chłonne": "filtrowanie limfy i zatrzymywanie patogenów",
      "Śledziona": "rozkład starych erytrocytów i trombocytów"
    },
    "explanation": "Limfocyty T dojrzewają w grasicy, B w szpiku; węzły chłonne filtrują limfę, a śledziona rozkłada zużyte elementy krwi.",
    "left": [
      "Grasica",
      "Szpik kostny czerwony",
      "Węzły chłonne",
      "Śledziona"
    ],
    "right": [
      "filtrowanie limfy i zatrzymywanie patogenów",
      "rozkład starych erytrocytów i trombocytów",
      "dojrzewanie limfocytów B",
      "dojrzewanie limfocytów T"
    ]
  },
  {
    "id": "R05_ODP_04",
    "section": "Układ odpornościowy",
    "type": "true_false",
    "prompt": "Odporność wrodzona działa podobnie przeciw różnym patogenom i nie wymaga udziału limfocytów.",
    "options": null,
    "answer": true,
    "explanation": "Odporność wrodzona jest nieswoista i działa szybko, bez potrzeby wcześniejszego kontaktu z patogenem."
  },
  {
    "id": "R05_ODP_05",
    "section": "Układ odpornościowy",
    "type": "sort",
    "prompt": "Podziel przykłady na elementy odporności wrodzonej i nabytej.",
    "options": null,
    "answer": {
      "wrodzona (nieswoista)": [
        "skóra jako bariera",
        "kwaśny sok żołądkowy",
        "makrofagi"
      ],
      "nabyta (swoista)": [
        "limfocyty pamięci",
        "przeciwciała skierowane przeciw antygenowi",
        "limfocyty B"
      ]
    },
    "explanation": "Bariery ciała i makrofagi uczestniczą w odporności nieswoistej; limfocyty i swoiste przeciwciała działają w odporności nabytej.",
    "items": [
      "limfocyty pamięci",
      "makrofagi",
      "limfocyty B",
      "skóra jako bariera",
      "przeciwciała skierowane przeciw antygenowi",
      "kwaśny sok żołądkowy"
    ],
    "categories": [
      "wrodzona (nieswoista)",
      "nabyta (swoista)"
    ]
  },
  {
    "id": "R05_ODP_06",
    "section": "Układ odpornościowy",
    "type": "fill_in",
    "prompt": "Substancja zdolna do wywołania swoistej odpowiedzi immunologicznej to __________.",
    "options": null,
    "answer": [
      "antygen"
    ],
    "explanation": "Antygen wywołuje odpowiedź immunologiczną i może zostać rozpoznany przez swoiste przeciwciała.",
    "altAnswers": [
      [
        "antygen",
        "antygenu"
      ]
    ]
  },
  {
    "id": "R05_ODP_07",
    "section": "Układ odpornościowy",
    "type": "scenario",
    "prompt": "Po narażeniu na czynnik chorobotwórczy lekarz podaje preparat zawierający gotowe przeciwciała, które mają zacząć działać od razu. Co to za preparat?",
    "options": [
      "Szczepionka profilaktyczna",
      "Szczepionka mRNA",
      "Szczepionka z osłabionymi patogenami",
      "Surowica odpornościowa",
      "Osocze krwi",
      "Limfa"
    ],
    "answer": 3,
    "explanation": "Surowica zawiera gotowe przeciwciała i jest stosowana po narażeniu lub zakażeniu. Szczepionka pobudza organizm do własnej odpowiedzi."
  },
  {
    "id": "R05_ODP_08",
    "section": "Układ odpornościowy",
    "type": "sequence",
    "prompt": "Ułóż etapy swoistej odpowiedzi limfocytów T.",
    "options": null,
    "answer": [
      "makrofag pochłania czynnik chorobotwórczy",
      "makrofag przedstawia antygen limfocytowi T",
      "limfocyty T namnażają się",
      "limfocyty T niszczą zainfekowane komórki"
    ],
    "explanation": "Makrofag prezentuje antygen limfocytowi T, który po pobudzeniu namnaża się i może niszczyć zakażone komórki.",
    "items": [
      "limfocyty T niszczą zainfekowane komórki",
      "makrofag przedstawia antygen limfocytowi T",
      "makrofag pochłania czynnik chorobotwórczy",
      "limfocyty T namnażają się"
    ]
  },
  {
    "id": "R05_ODP_09",
    "section": "Układ odpornościowy",
    "type": "odd_one_out",
    "prompt": "Wskaż narząd nienależący do centralnych narządów limfatycznych: grasica, szpik kostny, węzeł chłonny.",
    "options": null,
    "answer": "węzeł chłonny",
    "explanation": "Centralne narządy limfatyczne to grasica i szpik kostny. Węzły chłonne są narządami obwodowymi."
  },
  {
    "id": "R05_ODP_10",
    "section": "Układ odpornościowy",
    "type": "riddle",
    "prompt": "Jak nazywa się przeszczep, w którym dawcą i biorcą jest ta sama osoba?",
    "options": null,
    "answer": "autoprzeszczep",
    "explanation": "Autoprzeszczep polega na przeniesieniu tkanki w obrębie jednego organizmu, np. skóry w leczeniu rozległego oparzenia.",
    "altAnswers": [
      "autoprzeszczep",
      "przeszczep autologiczny"
    ]
  },
  {
    "id": "R05_ODD_01",
    "section": "Układ oddechowy",
    "type": "sequence",
    "prompt": "Ułóż drogę powietrza od wejścia do dróg oddechowych do miejsca wymiany gazowej.",
    "options": null,
    "answer": [
      "jama nosowa",
      "gardło",
      "krtań",
      "tchawica",
      "oskrzela",
      "oskrzeliki",
      "pęcherzyki płucne"
    ],
    "explanation": "Powietrze przechodzi przez jamę nosową, gardło, krtań, tchawicę i drzewo oskrzelowe aż do pęcherzyków płucnych.",
    "image": "r05_uklad_oddechowy.jpg",
    "items": [
      "oskrzeliki",
      "jama nosowa",
      "pęcherzyki płucne",
      "krtań",
      "gardło",
      "oskrzela",
      "tchawica"
    ]
  },
  {
    "id": "R05_ODD_02",
    "section": "Układ oddechowy",
    "type": "single_choice",
    "prompt": "W którym odcinku układu oddechowego znajdują się struny głosowe?",
    "options": [
      "Jama nosowa",
      "Gardło",
      "Tchawica",
      "Krtań",
      "Oskrzela",
      "Pęcherzyki płucne"
    ],
    "answer": 3,
    "explanation": "Struny głosowe (fałdy głosowe) znajdują się w krtani, w obrębie głośni.",
    "image": "r05_uklad_oddechowy.jpg"
  },
  {
    "id": "R05_ODD_03",
    "section": "Układ oddechowy",
    "type": "true_false",
    "prompt": "Prawe płuco człowieka ma trzy płaty, a lewe dwa.",
    "options": null,
    "answer": true,
    "explanation": "Prawe płuco ma trzy płaty, a lewe dwa."
  },
  {
    "id": "R05_ODD_04",
    "section": "Układ oddechowy",
    "type": "match",
    "prompt": "Połącz mechanizm w jamie nosowej z jego efektem.",
    "options": null,
    "answer": {
      "Śluz": "wyłapywanie zanieczyszczeń",
      "Rzęski nabłonka": "usuwanie zanieczyszczeń",
      "Dobre ukrwienie": "ogrzewanie powietrza"
    },
    "explanation": "Śluz wiąże cząstki zanieczyszczeń, rzęski pomagają je usuwać, a naczynia krwionośne ogrzewają wdychane powietrze.",
    "left": [
      "Śluz",
      "Rzęski nabłonka",
      "Dobre ukrwienie"
    ],
    "right": [
      "ogrzewanie powietrza",
      "wyłapywanie zanieczyszczeń",
      "usuwanie zanieczyszczeń"
    ]
  },
  {
    "id": "R05_ODD_05",
    "section": "Układ oddechowy",
    "type": "multi_select",
    "prompt": "Co zachodzi podczas spokojnego wdechu?",
    "options": [
      "Przepona kurczy się i obniża",
      "Przepona rozluźnia się i unosi",
      "Objętość klatki piersiowej rośnie",
      "Żebra opadają",
      "Mięśnie międzyżebrowe zewnętrzne kurczą się",
      "Powietrze jest wypychane z płuc"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Podczas wdechu przepona kurczy się i obniża, mięśnie międzyżebrowe zewnętrzne unoszą żebra, a objętość klatki piersiowej zwiększa się.",
    "image": "r05_wdech_wydech.jpg"
  },
  {
    "id": "R05_ODD_06",
    "section": "Układ oddechowy",
    "type": "scenario",
    "prompt": "W otoczeniu pęcherzyka płucnego krew ma mniej tlenu niż powietrze wewnątrz pęcherzyka. W którą stronę przemieszcza się tlen?",
    "options": [
      "Z krwi do pęcherzyka",
      "Z pęcherzyka do krwi",
      "Nie przemieszcza się",
      "W obie strony równie szybko niezależnie od stężenia",
      "Z pęcherzyka tylko do limfy",
      "Z krwi do oskrzelików"
    ],
    "answer": 1,
    "explanation": "Tlen dyfunduje z pęcherzyka płucnego do naczyń włosowatych, natomiast dwutlenek węgla przemieszcza się w kierunku przeciwnym.",
    "image": "r05_pecherzyk_plucny.jpg"
  },
  {
    "id": "R05_ODD_07",
    "section": "Układ oddechowy",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do faz oddychania.",
    "options": null,
    "answer": {
      "wdech": [
        "skurcz przepony",
        "obniżenie przepony",
        "zwiększenie objętości klatki piersiowej"
      ],
      "wydech": [
        "rozluźnienie przepony",
        "uniesienie przepony",
        "zmniejszenie objętości klatki piersiowej"
      ]
    },
    "explanation": "Skurcz i obniżenie przepony sprzyjają wdechowi. Jej rozluźnienie i uniesienie pomagają usunąć powietrze podczas wydechu.",
    "image": "r05_wdech_wydech.jpg",
    "items": [
      "uniesienie przepony",
      "skurcz przepony",
      "zmniejszenie objętości klatki piersiowej",
      "zwiększenie objętości klatki piersiowej",
      "obniżenie przepony",
      "rozluźnienie przepony"
    ],
    "categories": [
      "wdech",
      "wydech"
    ]
  },
  {
    "id": "R05_ODD_08",
    "section": "Układ oddechowy",
    "type": "riddle",
    "prompt": "Jak nazywa się cienkościenna struktura w płucach otoczona naczyniami włosowatymi, w której zachodzi wymiana gazowa?",
    "options": null,
    "answer": "pęcherzyk płucny",
    "explanation": "Pęcherzyki płucne mają cienkie ściany z nabłonka jednowarstwowego, co ułatwia wymianę gazową drogą dyfuzji.",
    "image": "r05_pecherzyk_plucny.jpg",
    "altAnswers": [
      "pęcherzyk płucny",
      "pęcherzyki płucne",
      "pęcherzyk"
    ]
  },
  {
    "id": "R05_ODD_09",
    "section": "Układ oddechowy",
    "type": "fill_in",
    "prompt": "Przenikanie gazów z miejsca o większym stężeniu do miejsca o mniejszym stężeniu nazywa się __________.",
    "options": null,
    "answer": [
      "dyfuzją"
    ],
    "explanation": "Wymiana tlenu i dwutlenku węgla przez ścianę pęcherzyków płucnych zachodzi dzięki dyfuzji.",
    "altAnswers": [
      [
        "dyfuzją",
        "dyfuzja",
        "dyfuzji"
      ]
    ]
  },
  {
    "id": "R05_ODD_10",
    "section": "Układ oddechowy",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę nienależącą do drogi przepływu wdychanego powietrza: jama nosowa, krtań, tchawica, przełyk.",
    "options": null,
    "answer": "przełyk",
    "explanation": "Przełyk jest odcinkiem przewodu pokarmowego; jama nosowa, krtań i tchawica należą do dróg oddechowych."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Odcinek szyjny kręgosłupa składa się z __________ kręgów, a piersiowy z __________.",
    "options": null,
    "answer": [
      "7",
      "12"
    ],
    "explanation": "Odcinek szyjny kręgosłupa składa się z siedmiu kręgów, a piersiowy – z dwunastu.",
    "image": "r05_szkielet_czlowieka.jpg",
    "altAnswers": [
      [
        "7",
        "siedem"
      ],
      [
        "12",
        "dwanaście"
      ]
    ]
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pacjentowi po uszkodzeniu naczynia nie tworzy się stabilny skrzep mimo powstania czopa płytkowego. Która przemiana odpowiada za utworzenie rusztowania skrzepu?",
    "options": [
      "Fibryny w fibrynogen",
      "Hemoglobiny w oksyhemoglobinę",
      "Glukozy w glikogen",
      "Pepsynogenu w pepsynę",
      "Fibrynogenu w fibrynę",
      "Skrobi w dwucukry"
    ],
    "answer": 4,
    "explanation": "W kaskadzie krzepnięcia fibrynogen zostaje przekształcony w fibrynę, której włókna stanowią szkielet skrzepu."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Gdzie w ciele dorosłego człowieka występuje czerwony szpik kostny?",
    "options": [
      "Tylko w jamie szpikowej kości długich",
      "Wyłącznie w zębach",
      "W kościach płaskich i nasadach kości długich",
      "W chrząstce stawowej",
      "W tkance podskórnej",
      "W torebkach stawowych"
    ],
    "answer": 2,
    "explanation": "U dorosłych czerwony szpik znajduje się przede wszystkim w kościach płaskich i nasadach kości długich.",
    "image": "r05_kosc_dluga_przekroj.jpg"
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz nazwę witaminy z charakterystycznym skutkiem jej niedoboru.",
    "options": null,
    "answer": {
      "Witamina A": "kurza ślepota",
      "Witamina D": "krzywica",
      "Witamina C": "szkorbut",
      "Witamina K": "zaburzenia krzepnięcia krwi"
    },
    "explanation": "Niedobór witaminy A powoduje m.in. kurzą ślepotę, D – krzywicę, C – szkorbut, a K – zaburzenia krzepnięcia krwi.",
    "left": [
      "Witamina A",
      "Witamina D",
      "Witamina C",
      "Witamina K"
    ],
    "right": [
      "krzywica",
      "zaburzenia krzepnięcia krwi",
      "kurza ślepota",
      "szkorbut"
    ]
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż składnik wchłaniany do limfy zamiast bezpośrednio do krwi: glukoza, aminokwas, kwas tłuszczowy, sól mineralna.",
    "options": null,
    "answer": "kwas tłuszczowy",
    "explanation": "Produkty trawienia tłuszczów, np. kwasy tłuszczowe, są wchłaniane do limfy; cukry proste, aminokwasy i sole mineralne trafiają do krwi."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel substancje wchłaniane z jelita cienkiego według rodzaju naczynia, do którego trafiają.",
    "options": null,
    "answer": {
      "do krwi": [
        "glukoza",
        "aminokwasy",
        "sole mineralne",
        "witamina C"
      ],
      "do limfy": [
        "kwasy tłuszczowe",
        "glicerol",
        "witamina A",
        "witamina D"
      ]
    },
    "explanation": "Cukry proste, aminokwasy, sole mineralne i witaminy rozpuszczalne w wodzie wchłaniają się do krwi, a większość produktów trawienia tłuszczów i witaminy rozpuszczalne w tłuszczach – do limfy.",
    "image": "r05_jelito_cienkie_kosmki.jpg",
    "items": [
      "witamina A",
      "glukoza",
      "glicerol",
      "sole mineralne",
      "kwasy tłuszczowe",
      "aminokwasy",
      "witamina D",
      "witamina C"
    ],
    "categories": [
      "do krwi",
      "do limfy"
    ]
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż drogę krwi od prawej komory serca do lewej komory przez płuca.",
    "options": null,
    "answer": [
      "prawa komora",
      "tętnice płucne",
      "płuca",
      "żyły płucne",
      "lewy przedsionek",
      "lewa komora"
    ],
    "explanation": "W małym obiegu krew z prawej komory płynie tętnicami płucnymi do płuc, wraca żyłami płucnymi do lewego przedsionka, a następnie trafia do lewej komory.",
    "image": "r05_serce_przekroj.jpg",
    "items": [
      "żyły płucne",
      "prawa komora",
      "lewa komora",
      "płuca",
      "lewy przedsionek",
      "tętnice płucne"
    ]
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o przeciwciałach układu ABO są prawidłowe?",
    "options": [
      "Grupa O ma przeciwciała anty-A i anty-B",
      "Grupa AB ma przeciwciała anty-A i anty-B",
      "Grupa A ma przeciwciała anty-B",
      "Grupa B nie ma żadnych przeciwciał ABO",
      "Grupa AB nie ma przeciwciał anty-A ani anty-B",
      "Grupa O ma na erytrocytach antygeny A i B"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Osoba z grupą 0 ma przeciwciała anty-A i anty-B, z grupą A ma anty-B, a z grupą AB nie ma przeciwciał anty-A ani anty-B."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po przeszczepie szpiku lekarz obserwuje, czy zgodność antygenów dawcy i biorcy nie jest zbyt mała. Przed jakim problemem próbuje się zabezpieczyć pacjenta?",
    "options": [
      "Odrzuceniem przeszczepu",
      "Powstaniem kamieni żółciowych",
      "Uszkodzeniem szkliwa",
      "Odmrożeniem skóry",
      "Zatrzymaniem perystaltyki",
      "Niedoborem błonnika"
    ],
    "answer": 0,
    "explanation": "Układ odpornościowy może uznać przeszczep za obcy i go odrzucić. Dlatego ważna jest duża zgodność tkankowa."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj układ organizmu do elementu, który jednocześnie pełni funkcję ochronną.",
    "options": null,
    "answer": {
      "Skóra": "warstwa rogowa jako bariera",
      "Układ ruchu": "klatka piersiowa osłaniająca serce i płuca",
      "Układ pokarmowy": "kwaśny sok żołądkowy",
      "Układ odpornościowy": "makrofagi pochłaniające patogeny"
    },
    "explanation": "Do mechanizmów obrony należą bariery fizyczne (naskórek, kości osłaniające narządy), bariery chemiczne (kwaśny sok żołądkowy) i komórki odpornościowe (makrofagi).",
    "left": [
      "Skóra",
      "Układ ruchu",
      "Układ pokarmowy",
      "Układ odpornościowy"
    ],
    "right": [
      "kwaśny sok żołądkowy",
      "klatka piersiowa osłaniająca serce i płuca",
      "makrofagi pochłaniające patogeny",
      "warstwa rogowa jako bariera"
    ]
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W krążeniu płucnym tętnice przenoszą krew odtlenowaną, a żyły krew natlenowaną.",
    "options": null,
    "answer": true,
    "explanation": "Tętnice płucne prowadzą krew z prawej komory do płuc, a żyły płucne odprowadzają utlenowaną krew do lewego przedsionka."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się zjawisko osłabienia odpowiedzi receptora skóry, gdy ten sam bodziec działa przez dłuższy czas?",
    "options": null,
    "answer": "adaptacja receptorów",
    "explanation": "Gdy czynnik zewnętrzny działa przez dłuższy czas, receptory skóry mogą reagować na niego coraz słabiej. To adaptacja receptorów.",
    "altAnswers": [
      "adaptacja receptorów",
      "adaptacja"
    ]
  }
];

const KID_PROMPTS = {
  "R05_SKO_02": "Jakie dwie warstwy tworzą skórę?",
  "R05_SKO_05": "Które receptory są w skórze?",
  "R05_RUC_05": "Który szpik tworzy komórki krwi?",
  "R05_RUC_09": "Jak nazywa się uraz, gdy kości przesunęły się w stawie?",
  "R05_POK_06": "Jak nazywają się wypustki w jelicie, które pomagają wchłaniać pokarm?",
  "R05_POK_08": "Co dzieje się w jelicie grubym?",
  "R05_KRW_01": "Które z podanych to elementy krwi?",
  "R05_KRW_09": "Co zapobiega cofaniu się krwi w żyłach?",
  "R05_ODP_06": "Jak nazywa się substancja uruchamiająca reakcję odpornościową?",
  "R05_ODD_05": "Co się dzieje, kiedy robimy wdech?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Organizm człowieka – część 1",
  "icon": "🧍",
  "sectionOrder": [
    "Skóra i organizacja ciała",
    "Układ ruchu",
    "Układ pokarmowy i odżywianie",
    "Krew i układ krążenia",
    "Układ odpornościowy",
    "Układ oddechowy"
  ],
  "sectionIcons": {
    "Skóra i organizacja ciała": "🧬",
    "Układ ruchu": "🦴",
    "Układ pokarmowy i odżywianie": "🥗",
    "Krew i układ krążenia": "❤️",
    "Układ odpornościowy": "🛡️",
    "Układ oddechowy": "🫁"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
