// Skróty sekcji:
//   RDZ = Rozbicie dzielnicowe
//   GOS = Społeczeństwo i gospodarka
//   ODB = Odbudowa Królestwa Polskiego
//   KAZ = Polska Kazimierza Wielkiego
//   UNI = Unie i Grunwald
//   JAG = Jagiellonowie i monarchia stanowa
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_RDZ_01",
    "section": "Rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "Które wydarzenie rozpoczęło okres rozbicia dzielnicowego w Polsce?",
    "options": [
      "Śmierć Bolesława Krzywoustego",
      "Koronacja Władysława Łokietka",
      "Bitwa pod Grunwaldem",
      "Zawarcie unii w Krewie",
      "Drugi pokój toruński",
      "Założenie Akademii Krakowskiej"
    ],
    "answer": 0,
    "explanation": "Okres rozbicia dzielnicowego rozpoczął się po śmierci Bolesława Krzywoustego w 1138 roku."
  },
  {
    "id": "R07_RDZ_02",
    "section": "Rozbicie dzielnicowe",
    "type": "true_false",
    "prompt": "Zasada senioratu zapewniła trwały pokój między synami Bolesława Krzywoustego.",
    "options": null,
    "answer": false,
    "explanation": "Seniorat nie zapobiegł walkom między seniorem a młodszymi Piastami."
  },
  {
    "id": "R07_RDZ_03",
    "section": "Rozbicie dzielnicowe",
    "type": "multi_select",
    "prompt": "Zaznacz skutki rozbicia dzielnicowego opisane w podręczniku.",
    "options": [
      "Powstanie kilkunastu księstw piastowskich",
      "Częste walki między książętami",
      "Osłabienie znaczenia Polski za granicą",
      "Wzmocnienie jednej władzy królewskiej",
      "Łatwiejsze najazdy wrogów",
      "Natychmiastowe odzyskanie Pomorza Gdańskiego"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Rozbicie dzielnicowe dzieliło państwo, osłabiało współdziałanie książąt i ułatwiało najazdy zewnętrzne.",
    "image": "/img/r07_mapa_polska_dzielnicowa.jpg"
  },
  {
    "id": "R07_RDZ_04",
    "section": "Rozbicie dzielnicowe",
    "type": "fill_in",
    "prompt": "W roku __________ Konrad Mazowiecki nadał Krzyżakom ziemię __________.",
    "options": null,
    "answer": [
      "1226",
      "chełmińską"
    ],
    "altAnswers": [
      [
        "1226",
        "1226 r.",
        "1226 roku"
      ],
      [
        "chełmińską",
        "ziemię chełmińską",
        "chełmińska"
      ]
    ],
    "explanation": "Konrad Mazowiecki w 1226 roku porozumiał się z Krzyżakami i przekazał im ziemię chełmińską.",
    "image": "/img/r07_rycerz_krzyzacki.jpg"
  },
  {
    "id": "R07_RDZ_05",
    "section": "Rozbicie dzielnicowe",
    "type": "riddle",
    "prompt": "Bitwa z 1241 roku, w której zginął Henryk Pobożny, to bitwa pod...",
    "options": null,
    "answer": "Legnicą",
    "altAnswers": [
      "Legnicą",
      "Legnica",
      "pod Legnicą",
      "bitwa pod Legnicą"
    ],
    "explanation": "W bitwie pod Legnicą Mongołowie rozbili wojska dowodzone przez księcia Henryka Pobożnego.",
    "image": "/img/r07_bitwa_pod_legnica.jpg"
  },
  {
    "id": "R07_RDZ_06",
    "section": "Rozbicie dzielnicowe",
    "type": "scenario",
    "prompt": "Jesteś Konradem Mazowieckim. Mazowsze nękają najazdy Prusów, a ty jesteś zajęty sporami z innymi Piastami. Kogo sprowadzasz, aby pomógł w obronie i podboju ziem pruskich?",
    "options": [
      "Krzyżaków",
      "Mongołów",
      "Andegawenów",
      "Habsburgów",
      "Jagiellonów",
      "Związek Pruski"
    ],
    "answer": 0,
    "explanation": "Konrad Mazowiecki porozumiał się z zakonem krzyżackim, licząc na pomoc w walce z pogańskimi Prusami."
  },
  {
    "id": "R07_RDZ_07",
    "section": "Rozbicie dzielnicowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Prusowie, Jaćwingowie, Litwini, Andegawenowie.",
    "options": null,
    "answer": "Andegawenowie",
    "explanation": "Prusowie, Jaćwingowie i Litwini byli pogańskimi sąsiadami ziem polskich, a Andegawenowie byli dynastią królewską."
  },
  {
    "id": "R07_RDZ_08",
    "section": "Rozbicie dzielnicowe",
    "type": "match",
    "prompt": "Połącz zjawisko lub postać z właściwym skutkiem albo miejscem.",
    "options": null,
    "left": [
      "Brandenburgia",
      "Krzyżacy",
      "Mongołowie",
      "Konrad Mazowiecki"
    ],
    "right": [
      "podporządkowanie Pomorza Zachodniego",
      "podbój Prus",
      "bitwa pod Legnicą",
      "nadanie ziemi chełmińskiej"
    ],
    "answer": {
      "Brandenburgia": "podporządkowanie Pomorza Zachodniego",
      "Krzyżacy": "podbój Prus",
      "Mongołowie": "bitwa pod Legnicą",
      "Konrad Mazowiecki": "nadanie ziemi chełmińskiej"
    },
    "explanation": "Każdy z tych przykładów pokazuje zagrożenia lub decyzje polityczne z czasów rozbicia dzielnicowego."
  },
  {
    "id": "R07_RDZ_09",
    "section": "Rozbicie dzielnicowe",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Najazd mongolski na Polskę",
      "Sprowadzenie Krzyżaków",
      "Początek rozbicia dzielnicowego",
      "Podbój Prus przez Krzyżaków"
    ],
    "answer": [
      "Początek rozbicia dzielnicowego",
      "Sprowadzenie Krzyżaków",
      "Najazd mongolski na Polskę",
      "Podbój Prus przez Krzyżaków"
    ],
    "explanation": "Kolejność to: 1138, 1226, 1241, a następnie systematyczny podbój Prus zakończony pod koniec XIII wieku."
  },
  {
    "id": "R07_RDZ_10",
    "section": "Rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "Co według podręcznika dawało Mongołom szczególną przewagę militarną?",
    "options": [
      "Świetnie zorganizowane konne oddziały łuczników",
      "Sieć zamków z czerwonej cegły",
      "Ciężkie okręty wojenne",
      "Wybór króla przez sejmiki",
      "Przywileje miejskie",
      "Piechota zaciężna z bronią palną"
    ],
    "answer": 0,
    "explanation": "Mongołowie dysponowali ruchliwą jazdą, która zasypywała przeciwnika strzałami z łuków."
  },
  {
    "id": "R07_GOS_01",
    "section": "Społeczeństwo i gospodarka",
    "type": "single_choice",
    "prompt": "Czym była lokacja w średniowiecznej Polsce?",
    "options": [
      "Założeniem lub nadaniem praw miastu albo wsi",
      "Koronacją nowego monarchy",
      "Wyprawą wojenną przeciw poganom",
      "Przysięgą lenną wielkiego mistrza",
      "Podziałem państwa między synów",
      "Utworzeniem zakonu rycerskiego"
    ],
    "answer": 0,
    "explanation": "Lokacja oznaczała założenie nowej osady lub nadanie nowych praw już istniejącej miejscowości."
  },
  {
    "id": "R07_GOS_02",
    "section": "Społeczeństwo i gospodarka",
    "type": "true_false",
    "prompt": "Do Polski w okresie rozbicia dzielnicowego napływali głównie osadnicy z Niemiec.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje, że przybysze przybywali głównie z Niemiec i posługiwali się własnym prawem osadniczym."
  },
  {
    "id": "R07_GOS_03",
    "section": "Społeczeństwo i gospodarka",
    "type": "fill_in",
    "prompt": "W trójpolówce jedna część ziemi odpoczywała, jedną obsiewano roślinami __________, a jedną roślinami __________.",
    "options": null,
    "answer": [
      "jarymi",
      "ozimymi"
    ],
    "altAnswers": [
      [
        "jarymi",
        "jare"
      ],
      [
        "ozimymi",
        "ozime"
      ]
    ],
    "explanation": "Trójpolówka pozwalała obsiewać co roku dwie trzecie gruntów, co zwiększało plony.",
    "image": "/img/r07_trojpolowka.jpg"
  },
  {
    "id": "R07_GOS_04",
    "section": "Społeczeństwo i gospodarka",
    "type": "multi_select",
    "prompt": "Zaznacz prawa i gwarancje, które otrzymywali osadnicy we wsiach lokowanych na prawie niemieckim.",
    "options": [
      "Wolność osobistą",
      "Dziedziczne użytkowanie ziemi",
      "Stały czynsz",
      "Prawo do samowolnego zmieniania granic księstw",
      "Gwarancję, że właściciel nie zmieni czynszu samowolnie",
      "Prawo wyboru króla"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Osadnicy otrzymywali wolność osobistą, dziedziczne użytkowanie ziemi i stały czynsz."
  },
  {
    "id": "R07_GOS_05",
    "section": "Społeczeństwo i gospodarka",
    "type": "riddle",
    "prompt": "Człowiek, który zbierał osadników do nowo lokowanej wsi, to...",
    "options": null,
    "answer": "zasadźca",
    "altAnswers": [
      "zasadźca",
      "zasadzca",
      "zasadźcą",
      "zasadzcą"
    ],
    "explanation": "Zasadźca zawierał umowę z właścicielem ziemi i sprowadzał osadników."
  },
  {
    "id": "R07_GOS_06",
    "section": "Społeczeństwo i gospodarka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: sołtys, wójt, ława wiejska, wielki mistrz.",
    "options": null,
    "answer": "wielki mistrz",
    "explanation": "Sołtys, wójt i ława wiejska wiążą się z samorządem lokacyjnym, a wielki mistrz był zwierzchnikiem zakonu krzyżackiego."
  },
  {
    "id": "R07_GOS_07",
    "section": "Społeczeństwo i gospodarka",
    "type": "match",
    "prompt": "Połącz urząd lub instytucję z jego funkcją.",
    "options": null,
    "left": [
      "sołtys",
      "wójt",
      "burmistrz",
      "ława"
    ],
    "right": [
      "czuwał nad porządkiem we wsi",
      "dziedziczny urząd zasadźcy w mieście",
      "wybierany zwierzchnik władz miejskich",
      "organ sądowy samorządu"
    ],
    "answer": {
      "sołtys": "czuwał nad porządkiem we wsi",
      "wójt": "dziedziczny urząd zasadźcy w mieście",
      "burmistrz": "wybierany zwierzchnik władz miejskich",
      "ława": "organ sądowy samorządu"
    },
    "explanation": "Prawo niemieckie wprowadzało samorząd miejski i wiejski z własnymi urzędami oraz sądami."
  },
  {
    "id": "R07_GOS_08",
    "section": "Społeczeństwo i gospodarka",
    "type": "scenario",
    "prompt": "Nowi osadnicy karczują las, budują gospodarstwa i przez pierwsze lata nie płacą czynszu, aby zdążyć się zagospodarować. Jak nazywał się taki okres zwolnienia z czynszu?",
    "options": [
      "wolnizna",
      "seniorat",
      "elekcja",
      "jałmużna",
      "unia personalna",
      "konstytucja"
    ],
    "answer": 0,
    "explanation": "Wolnizna dawała osadnikom czas na zagospodarowanie nowej wsi przed rozpoczęciem opłat."
  },
  {
    "id": "R07_GOS_09",
    "section": "Społeczeństwo i gospodarka",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do wsi albo miasta lokowanego na prawie niemieckim.",
    "options": null,
    "items": [
      "sołtys",
      "ława wiejska",
      "wójt",
      "rada miejska",
      "rynek",
      "gospodarstwa wzdłuż drogi"
    ],
    "categories": [
      "wieś lokacyjna",
      "miasto lokacyjne"
    ],
    "answer": {
      "wieś lokacyjna": [
        "sołtys",
        "ława wiejska",
        "gospodarstwa wzdłuż drogi"
      ],
      "miasto lokacyjne": [
        "wójt",
        "rada miejska",
        "rynek"
      ]
    },
    "explanation": "We wsi najważniejszy był sołtys i ława wiejska, a w mieście funkcjonowały wójt, rada, ława i regularny układ z rynkiem.",
    "image": "/img/r07_miasto_lokacyjne_krakow.jpg"
  },
  {
    "id": "R07_GOS_10",
    "section": "Społeczeństwo i gospodarka",
    "type": "sequence",
    "prompt": "Ułóż etapy lokacji wsi w logicznej kolejności.",
    "options": null,
    "items": [
      "karczowanie lasu i budowa gospodarstw",
      "umowa właściciela z zasadźcą",
      "wyznaczenie granic osady",
      "przybycie osadników"
    ],
    "answer": [
      "wyznaczenie granic osady",
      "umowa właściciela z zasadźcą",
      "przybycie osadników",
      "karczowanie lasu i budowa gospodarstw"
    ],
    "explanation": "Najpierw właściciel wyznaczał obszar i zawierał umowę z zasadźcą, potem przybywali osadnicy i zagospodarowywali teren."
  },
  {
    "id": "R07_ODB_01",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "single_choice",
    "prompt": "Który arcybiskup był pod koniec XIII wieku ważnym zwolennikiem zjednoczenia Polski?",
    "options": [
      "Jakub Świnka",
      "Jan Długosz",
      "Zbigniew Oleśnicki",
      "Mikołaj Wierzynek",
      "Karol IV",
      "Ulrich von Jungingen"
    ],
    "answer": 0,
    "explanation": "Arcybiskup Jakub Świnka popierał koronację jednego z Piastów, licząc na zjednoczenie ziem polskich."
  },
  {
    "id": "R07_ODB_02",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "true_false",
    "prompt": "Kult św. Stanisława wyrażał nadzieję, że podzielone Królestwo Polskie zjednoczy się jak ciało biskupa z legendy.",
    "options": null,
    "answer": true,
    "explanation": "Legenda o cudownym zrośnięciu ciała św. Stanisława stała się symbolem przyszłego zjednoczenia Polski."
  },
  {
    "id": "R07_ODB_03",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "fill_in",
    "prompt": "Przemysł II został koronowany na króla Polski w roku __________, a Władysław Łokietek w roku __________.",
    "options": null,
    "answer": [
      "1295",
      "1320"
    ],
    "altAnswers": [
      [
        "1295",
        "1295 r.",
        "1295 roku"
      ],
      [
        "1320",
        "1320 r.",
        "1320 roku"
      ]
    ],
    "explanation": "Koronacja Przemysła II była pierwszą próbą odnowienia królestwa, a koronacja Łokietka symbolicznie zakończyła rozbicie dzielnicowe.",
    "image": "/img/r07_pieczec_przemysla_ii.jpg"
  },
  {
    "id": "R07_ODB_04",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "riddle",
    "prompt": "Król Czech, który w 1300 roku został koronowany w Gnieźnie na króla Polski, to...",
    "options": null,
    "answer": "Wacław II",
    "altAnswers": [
      "Wacław II",
      "Waclaw II",
      "Wacław Drugi",
      "Waclaw Drugi"
    ],
    "explanation": "Po śmierci Przemysła II Wacław II opanował większość ziem polskich i został koronowany w Gnieźnie."
  },
  {
    "id": "R07_ODB_05",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie, które weszły w skład państwa Władysława Łokietka po jego koronacji.",
    "options": [
      "Małopolska",
      "Wielkopolska",
      "Kujawy",
      "Śląsk",
      "Pomorze Gdańskie",
      "Mazowsze"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Królestwo Łokietka obejmowało Małopolskę, Wielkopolskę i Kujawy; poza nim pozostały m.in. Śląsk, Mazowsze i Pomorze Gdańskie."
  },
  {
    "id": "R07_ODB_06",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z odbudową Królestwa Polskiego w porządku chronologicznym.",
    "options": null,
    "items": [
      "Koronacja Władysława Łokietka",
      "Koronacja Przemysła II",
      "Koronacja Wacława II",
      "Zajęcie Pomorza Gdańskiego przez Krzyżaków"
    ],
    "answer": [
      "Koronacja Przemysła II",
      "Koronacja Wacława II",
      "Zajęcie Pomorza Gdańskiego przez Krzyżaków",
      "Koronacja Władysława Łokietka"
    ],
    "explanation": "Kolejno było: 1295, 1300, 1308-1309 i 1320 rok."
  },
  {
    "id": "R07_ODB_07",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "scenario",
    "prompt": "Uczestniczysz w uroczystości w katedrze na Wawelu w 1320 roku. Władca otrzymuje koronę, jabłko i berło, a Kraków ponownie staje się stolicą państwa. Kto zostaje królem?",
    "options": [
      "Władysław Łokietek",
      "Przemysł II",
      "Wacław II",
      "Kazimierz Jagiellończyk",
      "Ludwik Węgierski",
      "Władysław Warneńczyk"
    ],
    "answer": 0,
    "explanation": "W 1320 roku Władysław Łokietek został koronowany w katedrze krakowskiej na Wawelu.",
    "image": "/img/r07_szczerbiec_lokietek.jpg"
  },
  {
    "id": "R07_ODB_08",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "match",
    "prompt": "Połącz postać lub wydarzenie z właściwym opisem.",
    "options": null,
    "left": [
      "Przemysł II",
      "Wacław II",
      "Władysław Łokietek",
      "Płowce"
    ],
    "right": [
      "koronacja w 1295 roku",
      "czeski król na polskim tronie",
      "koronacja w Krakowie w 1320 roku",
      "bitwa z Krzyżakami w 1331 roku"
    ],
    "answer": {
      "Przemysł II": "koronacja w 1295 roku",
      "Wacław II": "czeski król na polskim tronie",
      "Władysław Łokietek": "koronacja w Krakowie w 1320 roku",
      "Płowce": "bitwa z Krzyżakami w 1331 roku"
    },
    "explanation": "Te wydarzenia tworzą najważniejsze etapy odnowienia Królestwa Polskiego i konfliktu z zakonem."
  },
  {
    "id": "R07_ODB_09",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do ziem państwa Władysława Łokietka po koronacji: Małopolska, Wielkopolska, Kujawy, Śląsk.",
    "options": null,
    "answer": "Śląsk",
    "explanation": "Śląsk pozostał poza granicami odnowionego królestwa Łokietka i uległ wpływom czeskim."
  },
  {
    "id": "R07_ODB_10",
    "section": "Odbudowa Królestwa Polskiego",
    "type": "true_false",
    "prompt": "Bitwa pod Płowcami była nierozstrzygnięta, ale Krzyżacy ponieśli w niej duże straty.",
    "options": null,
    "answer": true,
    "explanation": "Pod Płowcami w 1331 roku wynik bitwy nie był rozstrzygający, choć rycerze zakonni stracili wielu ludzi."
  },
  {
    "id": "R07_KAZ_01",
    "section": "Polska Kazimierza Wielkiego",
    "type": "single_choice",
    "prompt": "Kto objął tron Polski po śmierci Władysława Łokietka w 1333 roku?",
    "options": [
      "Kazimierz Wielki",
      "Władysław Jagiełło",
      "Ludwik Węgierski",
      "Przemysł II",
      "Kazimierz Jagiellończyk",
      "Wacław II"
    ],
    "answer": 0,
    "explanation": "Po Władysławie Łokietku władzę objął jego syn Kazimierz, później nazwany Wielkim."
  },
  {
    "id": "R07_KAZ_02",
    "section": "Polska Kazimierza Wielkiego",
    "type": "true_false",
    "prompt": "Pokój kaliski z 1343 roku zwrócił Polsce Kujawy i ziemię dobrzyńską, ale Krzyżacy zatrzymali Pomorze Gdańskie jako wieczystą jałmużnę.",
    "options": null,
    "answer": true,
    "explanation": "Kazimierz zakończył spór z zakonem pokojowo, odzyskując część ziem, lecz nie Pomorze Gdańskie."
  },
  {
    "id": "R07_KAZ_03",
    "section": "Polska Kazimierza Wielkiego",
    "type": "fill_in",
    "prompt": "Kazimierz Wielki założył Akademię Krakowską w roku __________.",
    "options": null,
    "answer": [
      "1364"
    ],
    "altAnswers": [
      [
        "1364",
        "1364 r.",
        "1364 roku"
      ]
    ],
    "explanation": "Akademia Krakowska była pierwszym polskim uniwersytetem i miała kształcić ludzi potrzebnych państwu."
  },
  {
    "id": "R07_KAZ_04",
    "section": "Polska Kazimierza Wielkiego",
    "type": "multi_select",
    "prompt": "Zaznacz działania Kazimierza Wielkiego wzmacniające państwo.",
    "options": [
      "Zakładanie miast i wsi",
      "Budowa zamków i murów miejskich",
      "Ujednolicenie prawa",
      "Reforma monety",
      "Powołanie urzędów centralnych",
      "Oddanie całej Rusi Halickiej Krzyżakom"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Kazimierz wzmacniał państwo reformami gospodarczymi, prawnymi, wojskowymi i administracyjnymi."
  },
  {
    "id": "R07_KAZ_05",
    "section": "Polska Kazimierza Wielkiego",
    "type": "riddle",
    "prompt": "Najstarszy w polskiej historii spisany zbiór praw ustanowiony przez Kazimierza Wielkiego to...",
    "options": null,
    "answer": "Statuty Kazimierza Wielkiego",
    "altAnswers": [
      "Statuty Kazimierza Wielkiego",
      "statuty Kazimierza Wielkiego",
      "statuty",
      "Statuty"
    ],
    "explanation": "Statuty ujednolicały prawo w zjednoczonym Królestwie Polskim."
  },
  {
    "id": "R07_KAZ_06",
    "section": "Polska Kazimierza Wielkiego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do ziem odzyskanych lub przyłączonych przez Kazimierza Wielkiego: Kujawy, ziemia dobrzyńska, Ruś Halicko-Włodzimierska, Pomorze Gdańskie.",
    "options": null,
    "answer": "Pomorze Gdańskie",
    "explanation": "Kazimierz nie odzyskał Pomorza Gdańskiego; Krzyżacy zatrzymali je jako wieczystą jałmużnę."
  },
  {
    "id": "R07_KAZ_07",
    "section": "Polska Kazimierza Wielkiego",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "pokój w Kaliszu",
      "Karol IV",
      "Ludwik Andegaweński",
      "Mikołaj Wierzynek"
    ],
    "right": [
      "porozumienie z Krzyżakami",
      "król Czech",
      "następca Kazimierza na polskim tronie",
      "gospodarz słynnej uczty w Krakowie"
    ],
    "answer": {
      "pokój w Kaliszu": "porozumienie z Krzyżakami",
      "Karol IV": "król Czech",
      "Ludwik Andegaweński": "następca Kazimierza na polskim tronie",
      "Mikołaj Wierzynek": "gospodarz słynnej uczty w Krakowie"
    },
    "explanation": "Kazimierz prowadził aktywną dyplomację, utrzymywał sojusz z Węgrami i organizował zjazdy monarchów."
  },
  {
    "id": "R07_KAZ_08",
    "section": "Polska Kazimierza Wielkiego",
    "type": "scenario",
    "prompt": "Król potrzebuje wykształconych prawników i urzędników do sprawnego zarządzania państwem. Jaką instytucję zakłada w 1364 roku?",
    "options": [
      "Akademię Krakowską",
      "Związek Pruski",
      "radę miejską",
      "sejmik ziemski",
      "zakon krzyżacki",
      "unię personalną"
    ],
    "answer": 0,
    "explanation": "Akademia Krakowska miała kształcić ludzi potrzebnych do działania państwa i wzmacniać znaczenie Polski."
  },
  {
    "id": "R07_KAZ_09",
    "section": "Polska Kazimierza Wielkiego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z czasów Kazimierza Wielkiego w porządku chronologicznym.",
    "options": null,
    "items": [
      "Założenie Akademii Krakowskiej",
      "Objęcie tronu przez Kazimierza",
      "Pokój kaliski z Krzyżakami",
      "Śmierć Kazimierza Wielkiego"
    ],
    "answer": [
      "Objęcie tronu przez Kazimierza",
      "Pokój kaliski z Krzyżakami",
      "Założenie Akademii Krakowskiej",
      "Śmierć Kazimierza Wielkiego"
    ],
    "explanation": "Kazimierz panował od 1333 roku, zawarł pokój kaliski w 1343 roku, założył Akademię w 1364 roku i zmarł w 1370 roku."
  },
  {
    "id": "R07_KAZ_10",
    "section": "Polska Kazimierza Wielkiego",
    "type": "sort",
    "prompt": "Przyporządkuj działania Kazimierza Wielkiego do polityki zagranicznej albo wewnętrznej.",
    "options": null,
    "items": [
      "pokój z Krzyżakami",
      "pokój z Czechami",
      "przyłączenie Rusi Halicko-Włodzimierskiej",
      "budowa zamków",
      "ujednolicenie prawa",
      "reforma monety"
    ],
    "categories": [
      "polityka zagraniczna",
      "polityka wewnętrzna"
    ],
    "answer": {
      "polityka zagraniczna": [
        "pokój z Krzyżakami",
        "pokój z Czechami",
        "przyłączenie Rusi Halicko-Włodzimierskiej"
      ],
      "polityka wewnętrzna": [
        "budowa zamków",
        "ujednolicenie prawa",
        "reforma monety"
      ]
    },
    "explanation": "Kazimierz łączył dyplomację i zdobycze terytorialne z reformami wewnętrznymi."
  },
  {
    "id": "R07_UNI_01",
    "section": "Unie i Grunwald",
    "type": "single_choice",
    "prompt": "Kto został królem Polski po śmierci Kazimierza Wielkiego w 1370 roku?",
    "options": [
      "Ludwik Andegaweński",
      "Władysław Jagiełło",
      "Władysław Warneńczyk",
      "Kazimierz Jagiellończyk",
      "Przemysł II",
      "Karol IV"
    ],
    "answer": 0,
    "explanation": "Po Kazimierzu Wielkim władzę objął jego siostrzeniec, król Węgier Ludwik Andegaweński."
  },
  {
    "id": "R07_UNI_02",
    "section": "Unie i Grunwald",
    "type": "true_false",
    "prompt": "Unia personalna oznacza połączenie państw pod władzą jednego monarchy przy zachowaniu ich odrębności.",
    "options": null,
    "answer": true,
    "explanation": "Tak podręcznik definiuje unię personalną, na przykład związek Polski i Węgier pod rządami Ludwika."
  },
  {
    "id": "R07_UNI_03",
    "section": "Unie i Grunwald",
    "type": "fill_in",
    "prompt": "Jadwiga przybyła do Krakowa w roku __________, a unia w Krewie została zawarta w roku __________.",
    "options": null,
    "answer": [
      "1384",
      "1385"
    ],
    "altAnswers": [
      [
        "1384",
        "1384 r.",
        "1384 roku"
      ],
      [
        "1385",
        "1385 r.",
        "1385 roku"
      ]
    ],
    "explanation": "Jadwiga została koronowana w 1384 roku, a rok później podpisano akt unii polsko-litewskiej w Krewie.",
    "image": "/img/r07_unia_w_krewie.jpg"
  },
  {
    "id": "R07_UNI_04",
    "section": "Unie i Grunwald",
    "type": "multi_select",
    "prompt": "Zaznacz ustalenia lub przyczyny związane z unią w Krewie.",
    "options": [
      "Jagiełło miał poślubić Jadwigę",
      "Jagiełło miał przyjąć chrzest z pogańskimi poddanymi",
      "Wspólnym zagrożeniem byli Krzyżacy",
      "Jagiełło miał odzyskać dla Polski utracone ziemie",
      "Litwa miała zostać oddana Krzyżakom",
      "Polska miała stać się częścią państwa zakonnego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Unia wynikała m.in. z zagrożenia krzyżackiego i zakładała małżeństwo Jagiełły z Jadwigą oraz chrzest Litwy."
  },
  {
    "id": "R07_UNI_05",
    "section": "Unie i Grunwald",
    "type": "riddle",
    "prompt": "Północna kraina Litwy, którą Krzyżacy szczególnie chcieli zdobyć, to...",
    "options": null,
    "answer": "Żmudź",
    "altAnswers": [
      "Żmudź",
      "Zmudź",
      "Zmudz",
      "żmudź",
      "zmudź"
    ],
    "explanation": "Żmudź rozdzielała ziemie zakonu w Prusach i Inflantach, dlatego była dla Krzyżaków bardzo ważna."
  },
  {
    "id": "R07_UNI_06",
    "section": "Unie i Grunwald",
    "type": "scenario",
    "prompt": "W 1386 roku wielki książę litewski przybywa do Polski, przyjmuje chrzest, poślubia Jadwigę i zostaje koronowany na króla. Jakie imię chrześcijańskie otrzymuje?",
    "options": [
      "Władysław",
      "Kazimierz",
      "Ludwik",
      "Przemysł",
      "Zbigniew",
      "Karol"
    ],
    "answer": 0,
    "explanation": "Jagiełło po chrzcie otrzymał imię Władysław i jako Władysław Jagiełło został królem Polski."
  },
  {
    "id": "R07_UNI_07",
    "section": "Unie i Grunwald",
    "type": "match",
    "prompt": "Połącz postać z właściwą rolą.",
    "options": null,
    "left": [
      "Ludwik Węgierski",
      "Jadwiga",
      "Władysław Jagiełło",
      "Witold"
    ],
    "right": [
      "król Polski i Węgier",
      "córka Ludwika koronowana w Polsce",
      "wielki książę litewski i król Polski",
      "dowódca wojsk litewskich pod Grunwaldem"
    ],
    "answer": {
      "Ludwik Węgierski": "król Polski i Węgier",
      "Jadwiga": "córka Ludwika koronowana w Polsce",
      "Władysław Jagiełło": "wielki książę litewski i król Polski",
      "Witold": "dowódca wojsk litewskich pod Grunwaldem"
    },
    "explanation": "Unie personalne połączyły losy dynastii Andegawenów, Jadwigi i litewskiego rodu Jagiełły."
  },
  {
    "id": "R07_UNI_08",
    "section": "Unie i Grunwald",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Bitwa pod Grunwaldem",
      "Koronacja Jadwigi",
      "Unia w Krewie",
      "Koronacja Władysława Jagiełły",
      "Objęcie tronu przez Ludwika Węgierskiego"
    ],
    "answer": [
      "Objęcie tronu przez Ludwika Węgierskiego",
      "Koronacja Jadwigi",
      "Unia w Krewie",
      "Koronacja Władysława Jagiełły",
      "Bitwa pod Grunwaldem"
    ],
    "explanation": "Kolejność to: 1370, 1384, 1385, 1386 i 1410 rok."
  },
  {
    "id": "R07_UNI_09",
    "section": "Unie i Grunwald",
    "type": "single_choice",
    "prompt": "Jak zakończyła się wielka wojna z Krzyżakami w 1411 roku?",
    "options": [
      "Pierwszym pokojem toruńskim",
      "Drugim pokojem toruńskim",
      "Pokojem kaliskim",
      "Unią w Krewie",
      "Przywilejem koszyckim",
      "Konstytucją nihil novi"
    ],
    "answer": 0,
    "explanation": "W 1411 roku podpisano pierwszy pokój toruński: zakon zwrócił ziemię dobrzyńską i Żmudź oraz zapłacił odszkodowanie.",
    "image": "/img/r07_bitwa_pod_grunwaldem.jpg"
  },
  {
    "id": "R07_UNI_10",
    "section": "Unie i Grunwald",
    "type": "true_false",
    "prompt": "Po chrzcie Litwy Krzyżacy próbowali przekonywać europejskich władców, że chrzest Jagiełły był nieszczery.",
    "options": null,
    "answer": true,
    "explanation": "Chrystianizacja Litwy osłabiała propagandowe uzasadnienie krzyżackich wypraw przeciw Litwinom."
  },
  {
    "id": "R07_JAG_01",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "single_choice",
    "prompt": "Kto objął polski tron po śmierci Władysława Jagiełły?",
    "options": [
      "Władysław Warneńczyk",
      "Kazimierz Wielki",
      "Jan Olbracht",
      "Aleksander Jagiellończyk",
      "Zygmunt Stary",
      "Ludwik Węgierski"
    ],
    "answer": 0,
    "explanation": "Po Jagielle królem został jego starszy syn Władysław Warneńczyk."
  },
  {
    "id": "R07_JAG_02",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "true_false",
    "prompt": "Władysław Warneńczyk zginął w 1444 roku w bitwie pod Warną z Turkami osmańskimi.",
    "options": null,
    "answer": true,
    "explanation": "Śmierć Warneńczyka pod Warną zakończyła drugą unię polsko-węgierską."
  },
  {
    "id": "R07_JAG_03",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "fill_in",
    "prompt": "Drugi pokój toruński podpisano w roku __________; Polska odzyskała wtedy Pomorze __________ i ziemię chełmińską.",
    "options": null,
    "answer": [
      "1466",
      "Gdańskie"
    ],
    "altAnswers": [
      [
        "1466",
        "1466 r.",
        "1466 roku"
      ],
      [
        "Gdańskie",
        "gdańskie",
        "Pomorze Gdańskie",
        "pomorze gdańskie"
      ]
    ],
    "explanation": "Drugi pokój toruński kończył wojnę trzynastoletnią i przywracał Polsce dostęp do Bałtyku."
  },
  {
    "id": "R07_JAG_04",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące Związku Pruskiego i wojny trzynastoletniej.",
    "options": [
      "Związek Pruski tworzyli rycerze i mieszczanie pruscy",
      "Związek wystąpił przeciw rządom Krzyżaków",
      "Kazimierz Jagiellończyk ogłosił włączenie Prus do Polski",
      "Wojna trwała trzynaście lat",
      "Polska od razu wygrała bitwę pod Chojnicami",
      "Krzyżacy nie używali wojsk zaciężnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Związek Pruski poprosił Kazimierza Jagiellończyka o pomoc, a konflikt przerodził się w długą wojnę trzynastoletnią."
  },
  {
    "id": "R07_JAG_05",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "riddle",
    "prompt": "Wojsko złożone z zawodowych żołnierzy wynajętych za opłatą to wojsko...",
    "options": null,
    "answer": "zaciężne",
    "altAnswers": [
      "zaciężne",
      "zacieżne",
      "zaciężne wojsko",
      "wojsko zaciężne"
    ],
    "explanation": "Wojna trzynastoletnia pokazała znaczenie zdyscyplinowanych i opłacanych oddziałów zaciężnych."
  },
  {
    "id": "R07_JAG_06",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "match",
    "prompt": "Połącz wydarzenie lub postać z opisem.",
    "options": null,
    "left": [
      "Chojnice 1454",
      "Związek Pruski",
      "drugi pokój toruński",
      "Wit Stwosz"
    ],
    "right": [
      "klęska polskiego rycerstwa",
      "powstanie przeciw Krzyżakom",
      "powstanie Prus Królewskich",
      "ołtarz w kościele Mariackim"
    ],
    "answer": {
      "Chojnice 1454": "klęska polskiego rycerstwa",
      "Związek Pruski": "powstanie przeciw Krzyżakom",
      "drugi pokój toruński": "powstanie Prus Królewskich",
      "Wit Stwosz": "ołtarz w kościele Mariackim"
    },
    "explanation": "Kazimierz Jagiellończyk pokonał zakon dopiero po długich i kosztownych zmaganiach, a jego czasy były także okresem rozwoju kultury."
  },
  {
    "id": "R07_JAG_07",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "scenario",
    "prompt": "Jesteś nowo wybranym wielkim mistrzem krzyżackim po 1466 roku. Co musisz zrobić zgodnie z drugim pokojem toruńskim?",
    "options": [
      "Złożyć przysięgę wierności królowi polskiemu",
      "Przenieść stolicę do Krakowa",
      "Zrzec się całych Prus na rzecz Litwy",
      "Zostać senatorem w sejmie",
      "Założyć Akademię Krakowską",
      "Nadać przywilej koszycki"
    ],
    "answer": 0,
    "explanation": "Po drugim pokoju toruńskim wielki mistrz miał obowiązek złożenia przysięgi wierności polskiemu królowi."
  },
  {
    "id": "R07_JAG_08",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "single_choice",
    "prompt": "Czym była monarchia stanowa?",
    "options": [
      "Państwem, w którym władza monarchy była ograniczona uprawnieniami stanów",
      "Państwem rządzonym wyłącznie przez zakon rycerski",
      "Państwem bez żadnych przywilejów",
      "Okresem całkowitego rozpadu dzielnic",
      "Unią dwóch państw pod jednym monarchą",
      "Zbiorem praw miejskich"
    ],
    "answer": 0,
    "explanation": "W monarchii stanowej przedstawiciele stanów uczestniczyli w rządzeniu i ograniczali samodzielność władcy."
  },
  {
    "id": "R07_JAG_09",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "match",
    "prompt": "Połącz pojęcie ustrojowe z opisem.",
    "options": null,
    "left": [
      "sejmik ziemski",
      "sejm walny",
      "senat",
      "izba poselska"
    ],
    "right": [
      "zjazd szlachty jednej ziemi",
      "ogólnopaństwowy zjazd",
      "izba wyrosła z rady królewskiej",
      "izba posłów wybieranych na sejmikach"
    ],
    "answer": {
      "sejmik ziemski": "zjazd szlachty jednej ziemi",
      "sejm walny": "ogólnopaństwowy zjazd",
      "senat": "izba wyrosła z rady królewskiej",
      "izba poselska": "izba posłów wybieranych na sejmikach"
    },
    "explanation": "Sejm dwuizbowy składał się z senatu i izby poselskiej, a posłów wybierano na sejmikach.",
    "image": "/img/r07_sejm_walny.jpg"
  },
  {
    "id": "R07_JAG_10",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "single_choice",
    "prompt": "Jaki przywilej w 1374 roku zwolnił szlachtę z większości podatków?",
    "options": [
      "przywilej koszycki",
      "nihil novi",
      "pokój kaliski",
      "unia w Krewie",
      "drugi pokój toruński",
      "statuty Kazimierza"
    ],
    "answer": 0,
    "explanation": "Przywilej koszycki Ludwik Węgierski nadał w zamian za zgodę szlachty na dziedziczenie tronu przez jedną z córek."
  },
  {
    "id": "R07_JAG_11",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "fill_in",
    "prompt": "W 1505 roku uchwalono konstytucję __________ __________, czyli „nic nowego”.",
    "options": null,
    "answer": [
      "nihil",
      "novi"
    ],
    "altAnswers": [
      [
        "nihil",
        "Nihil"
      ],
      [
        "novi",
        "Novi"
      ]
    ],
    "explanation": "Nihil novi głosiło, że król nie może ustanawiać nowych praw bez zgody senatu i izby poselskiej."
  },
  {
    "id": "R07_JAG_12",
    "section": "Jagiellonowie i monarchia stanowa",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do kategorii: przywileje szlachty albo instytucje sejmu.",
    "options": null,
    "items": [
      "nietykalność osobista i majątkowa",
      "zgoda na nowe podatki",
      "senat",
      "izba poselska",
      "sejmiki ziemskie",
      "wynagrodzenie za wyprawę zagraniczną"
    ],
    "categories": [
      "przywileje szlachty",
      "instytucje sejmu"
    ],
    "answer": {
      "przywileje szlachty": [
        "nietykalność osobista i majątkowa",
        "zgoda na nowe podatki",
        "wynagrodzenie za wyprawę zagraniczną"
      ],
      "instytucje sejmu": [
        "senat",
        "izba poselska",
        "sejmiki ziemskie"
      ]
    },
    "explanation": "Przywileje zwiększały prawa stanu szlacheckiego, a sejmiki, senat i izba poselska tworzyły mechanizmy udziału szlachty w rządzeniu."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary: władca — ważne rozstrzygnięcie polityczne.",
    "options": [
      "Kazimierz Wielki — pokój kaliski z Krzyżakami",
      "Ludwik Węgierski — przywilej koszycki",
      "Władysław Jagiełło — unia w Krewie",
      "Kazimierz Jagiellończyk — drugi pokój toruński",
      "Przemysł II — konstytucja nihil novi",
      "Władysław Łokietek — założenie Akademii Krakowskiej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Cztery pierwsze pary łączą władców z wydarzeniami opisanymi w rozdziale; dwie ostatnie mieszają fakty z innych czasów."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym od rozbicia dzielnicowego do unii polsko-litewskiej.",
    "options": null,
    "items": [
      "pokój kaliski",
      "koronacja Łokietka",
      "unia w Krewie",
      "najazd mongolski",
      "śmierć Bolesława Krzywoustego",
      "sprowadzenie Krzyżaków"
    ],
    "answer": [
      "śmierć Bolesława Krzywoustego",
      "sprowadzenie Krzyżaków",
      "najazd mongolski",
      "koronacja Łokietka",
      "pokój kaliski",
      "unia w Krewie"
    ],
    "explanation": "Daty to kolejno: 1138, 1226, 1241, 1320, 1343 i 1385 rok."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś dyplomatą zakonu krzyżackiego po 1386 roku. Chrzest Litwy osłabia twoje uzasadnienie wojen. Jaką argumentację próbujesz rozpowszechniać w Europie?",
    "options": [
      "Że chrzest Jagiełły był nieszczery, a Litwa pozostała pogańska",
      "Że zakon nigdy nie walczył z Litwą",
      "Że Polska oddała zakonowi Kraków",
      "Że Jadwiga była córką Kazimierza Jagiellończyka",
      "Że Pomorze Gdańskie nie miało znaczenia",
      "Że sejm walny powinien zniknąć"
    ],
    "answer": 0,
    "explanation": "Krzyżacy starali się podważyć chrystianizację Litwy, bo odbierała im pretekst do wypraw przeciw poganom."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem.",
    "options": null,
    "left": [
      "1308-1309",
      "1331",
      "1410",
      "1493"
    ],
    "right": [
      "zajęcie Pomorza Gdańskiego przez Krzyżaków",
      "bitwa pod Płowcami",
      "bitwa pod Grunwaldem",
      "pierwszy sejm dwuizbowy"
    ],
    "answer": {
      "1308-1309": "zajęcie Pomorza Gdańskiego przez Krzyżaków",
      "1331": "bitwa pod Płowcami",
      "1410": "bitwa pod Grunwaldem",
      "1493": "pierwszy sejm dwuizbowy"
    },
    "explanation": "Daty te wyznaczają kolejne etapy konfliktów z zakonem i rozwoju ustroju monarchii stanowej."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej odróżnia Prusy Królewskie od Prus Krzyżackich po 1466 roku?",
    "options": [
      "Prusy Królewskie włączono do Polski, a Prusy Krzyżackie pozostały przy zakonie jako obszar zależny od króla polskiego",
      "Prusy Królewskie należały do Czech, a Prusy Krzyżackie do Węgier",
      "Prusy Królewskie były częścią Litwy, a Prusy Krzyżackie częścią Mazowsza",
      "Obie części całkowicie zniknęły z mapy",
      "Prusy Krzyżackie obejmowały Kraków i Lwów",
      "Prusy Królewskie powstały dopiero po konstytucji nihil novi"
    ],
    "answer": 0,
    "explanation": "Drugi pokój toruński podzielił ziemie pruskie na włączone do Polski Prusy Królewskie i pozostawione zakonowi Prusy Krzyżackie."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Wacław II, Ludwik Andegaweński, Władysław Jagiełło, Kazimierz Wielki.",
    "options": null,
    "answer": "Kazimierz Wielki",
    "explanation": "Wacław II, Ludwik Andegaweński i Jagiełło byli władcami spoza dynastii Piastów na polskim tronie, a Kazimierz Wielki był ostatnim królem z dynastii Piastów."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sejm ukształtowany pod koniec średniowiecza składał się z trzech stanów sejmujących: króla, __________ i izby __________.",
    "options": null,
    "answer": [
      "senatu",
      "poselskiej"
    ],
    "altAnswers": [
      [
        "senatu",
        "senat"
      ],
      [
        "poselskiej",
        "izby poselskiej",
        "poselska"
      ]
    ],
    "explanation": "Trzy stany sejmujące to król, senat i izba poselska."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Konstytucja nihil novi oznaczała, że król może sam wprowadzać nowe prawa bez zgody senatu i izby poselskiej.",
    "options": null,
    "answer": false,
    "explanation": "Nihil novi stanowiła odwrotnie: nowe prawa wymagały zgody senatu i izby poselskiej."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Polska dzielnicowa i zjednoczona",
  icon: "🇵🇱",
  sectionOrder: [
  "Rozbicie dzielnicowe",
  "Społeczeństwo i gospodarka",
  "Odbudowa Królestwa Polskiego",
  "Polska Kazimierza Wielkiego",
  "Unie i Grunwald",
  "Jagiellonowie i monarchia stanowa",
  "Super trudne"
],
  sectionIcons: {
  "Rozbicie dzielnicowe": "🧩",
  "Społeczeństwo i gospodarka": "🌾",
  "Odbudowa Królestwa Polskiego": "👑",
  "Polska Kazimierza Wielkiego": "🏰",
  "Unie i Grunwald": "⚔️",
  "Jagiellonowie i monarchia stanowa": "📜",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
