// Skróty sekcji (do identyfikatorów ćwiczeń):
// POL = Jagiellonowie i unia lubelska
// SEJ = Demokracja szlachecka i wolne elekcje
// WOJ = Wojny i polityka nad Bałtykiem
// GOS = Gospodarka i folwarki
// KUL = Wiele narodów i kultura renesansu
// HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_POL_01",
    "section": "Jagiellonowie i unia lubelska",
    "type": "single_choice",
    "prompt": "Na tronach których państw zasiedli Jagiellonowie na przełomie XV i XVI wieku?",
    "options": [
      "Polski, Litwy, Czech i Węgier",
      "Polski, Danii, Szwecji i Moskwy",
      "Polski, Prus, Mołdawii i Inflant",
      "Litwy, Rzeszy, Francji i Hiszpanii",
      "Czech, Węgier, Danii i Szwecji",
      "Korony, Prus Książęcych, Rusi i Tatarów"
    ],
    "answer": 0,
    "explanation": "Na przełomie XV i XVI wieku Jagiellonowie panowali w Polsce, na Litwie, w Czechach i na Węgrzech, dlatego byli jedną z najpotężniejszych dynastii Europy."
  },
  {
    "id": "R02_POL_02",
    "section": "Jagiellonowie i unia lubelska",
    "type": "true_false",
    "prompt": "W pierwszej połowie XVI wieku Korona Polska i Wielkie Księstwo Litewskie były już jednym jednolitym państwem.",
    "options": null,
    "answer": false,
    "explanation": "Były to jeszcze dwa odrębne państwa, połączone unią personalną, czyli osobą wspólnego monarchy z dynastii jagiellońskiej."
  },
  {
    "id": "R02_POL_03",
    "section": "Jagiellonowie i unia lubelska",
    "type": "fill_in",
    "prompt": "W 1526 roku Księstwo __________ zostało włączone do __________.",
    "options": null,
    "answer": [
      "Mazowieckie",
      "Korony"
    ],
    "altAnswers": [
      [
        "Mazowieckie",
        "mazowieckie"
      ],
      [
        "Korony",
        "Korony Polskiej",
        "Korony Królestwa Polskiego"
      ]
    ],
    "explanation": "Po śmierci ostatnich książąt mazowieckich ziemie księstwa włączono do Korony, a Warszawa stała się coraz ważniejszą rezydencją królewską i miejscem sejmów."
  },
  {
    "id": "R02_POL_04",
    "section": "Jagiellonowie i unia lubelska",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny dążenia do ściślejszej unii Polski i Litwy w latach 60. XVI wieku.",
    "options": [
      "Przedłużająca się i kosztowna wojna o Inflanty",
      "Chęć wzmocnienia pozycji Polski i Litwy na arenie międzynarodowej",
      "Dążenie szlachty litewskiej do przywilejów podobnych do polskich",
      "Brak męskiego potomka Zygmunta Augusta",
      "Plan stworzenia jednego Kościoła państwowego",
      "Zamiar przeniesienia stolicy do Królewca"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do unii skłaniały wojna i koszty obrony, potrzeba wzmocnienia obu państw, aspiracje szlachty litewskiej oraz problem bezpotomności Zygmunta Augusta."
  },
  {
    "id": "R02_POL_05",
    "section": "Jagiellonowie i unia lubelska",
    "type": "single_choice",
    "prompt": "Jaki był najważniejszy skutek traktatu krakowskiego z 1525 roku?",
    "options": [
      "Albrecht Hohenzollern złożył hołd lenny królowi Polski, a państwo zakonne przekształcono w Prusy Książęce",
      "Zakon krzyżacki odzyskał Pomorze Gdańskie i Malbork",
      "Księstwo Mazowieckie stało się lennem Prus Książęcych",
      "Moskwa uznała zwierzchność króla Zygmunta Starego",
      "Zygmunt August został królem Polski za życia ojca",
      "Korona Polska zrzekła się praw do Prus Królewskich"
    ],
    "answer": 0,
    "image": "r02_hold_pruski.jpg",
    "explanation": "W 1525 roku w Krakowie Albrecht Hohenzollern złożył Zygmuntowi Staremu hołd lenny, a dawne państwo zakonne stało się świeckim lennem Polski, czyli Prusami Książęcymi."
  },
  {
    "id": "R02_POL_06",
    "section": "Jagiellonowie i unia lubelska",
    "type": "riddle",
    "prompt": "Jak nazywa się typ unii, którą Polska i Litwa zawarły w Lublinie w 1569 roku?",
    "options": null,
    "answer": "unia realna",
    "altAnswers": [
      "unia realna",
      "realna",
      "unia lubelska"
    ],
    "explanation": "Unia lubelska miała charakter unii realnej, bo tworzyła wspólne najważniejsze instytucje i wspólną politykę w wielu podstawowych sprawach."
  },
  {
    "id": "R02_POL_07",
    "section": "Jagiellonowie i unia lubelska",
    "type": "sort",
    "prompt": "Przyporządkuj postanowienia unii lubelskiej do właściwej kategorii.",
    "options": null,
    "items": [
      "wspólny monarcha",
      "wspólny sejm",
      "wspólna polityka zagraniczna",
      "osobne wojsko",
      "osobne urzędy",
      "osobne skarby"
    ],
    "categories": [
      "wspólne",
      "osobne"
    ],
    "answer": {
      "wspólne": [
        "wspólny monarcha",
        "wspólny sejm",
        "wspólna polityka zagraniczna"
      ],
      "osobne": [
        "osobne wojsko",
        "osobne urzędy",
        "osobne skarby"
      ]
    },
    "image": "r02_herby_korony_i_litwy.jpg",
    "explanation": "Po unii lubelskiej wspólne były m.in. monarcha, sejm i polityka zagraniczna, lecz Korona i Litwa zachowały osobne wojsko, urzędy i skarby."
  },
  {
    "id": "R02_POL_08",
    "section": "Jagiellonowie i unia lubelska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Unia lubelska",
      "Hołd pruski",
      "Śmierć Zygmunta Augusta",
      "Włączenie Mazowsza do Korony"
    ],
    "answer": [
      "Hołd pruski",
      "Włączenie Mazowsza do Korony",
      "Unia lubelska",
      "Śmierć Zygmunta Augusta"
    ],
    "explanation": "Hołd pruski odbył się w 1525 roku, Mazowsze włączono w 1526 roku, unię lubelską zawarto w 1569 roku, a Zygmunt August zmarł w 1572 roku."
  },
  {
    "id": "R02_POL_09",
    "section": "Jagiellonowie i unia lubelska",
    "type": "scenario",
    "prompt": "Jesteś posłem na długim sejmie w Lublinie w 1569 roku. Po burzliwych obradach powstaje wspólne państwo Korony Polskiej i Wielkiego Księstwa Litewskiego. Jak je nazywamy?",
    "options": [
      "Rzeczpospolitą Obojga Narodów",
      "Prusami Książęcymi",
      "Wielkim Księstwem Moskiewskim",
      "Koroną Czeską",
      "Państwem Zakonu Inflanckiego",
      "Hospodarstwem Mołdawskim"
    ],
    "answer": 0,
    "image": "r02_akt_unii_lubelskiej.jpg",
    "explanation": "Państwo utworzone przez unię lubelską nosi nazwę Rzeczpospolita Obojga Narodów i przetrwało do schyłku XVIII wieku."
  },
  {
    "id": "R02_POL_10",
    "section": "Jagiellonowie i unia lubelska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do postanowień unii lubelskiej: wspólny sejm, wspólny monarcha, wspólna polityka zagraniczna, wspólne wojsko.",
    "options": null,
    "answer": "wspólne wojsko",
    "explanation": "Wojsko pozostało osobne: istniało wojsko koronne i wojsko litewskie. Wspólne były sejm, monarcha i polityka zagraniczna."
  },
  {
    "id": "R02_POL_11",
    "section": "Jagiellonowie i unia lubelska",
    "type": "true_false",
    "prompt": "Rzeczpospolita Obojga Narodów utworzona w 1569 roku przetrwała ponad dwieście lat, do schyłku XVIII wieku.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że państwo powstałe po unii lubelskiej przetrwało ponad dwieście lat, aż do końca XVIII wieku."
  },
  {
    "id": "R02_SEJ_01",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "single_choice",
    "prompt": "Co oznaczała konstytucja nihil novi uchwalona w 1505 roku?",
    "options": [
      "Król nie mógł ustanawiać nowych praw bez zgody senatu i izby poselskiej",
      "Król mógł samodzielnie nakładać podatki bez sejmu",
      "Mieszczanie uzyskali większość miejsc w senacie",
      "Chłopi otrzymali prawo wyboru posłów",
      "Sejm przestał obradować regularnie",
      "Wprowadzono dziedziczność tronu po Jagiellonach"
    ],
    "answer": 0,
    "explanation": "Nihil novi, czyli nic nowego, ograniczała króla: bez zgody obu izb sejmu nie mógł on ustanawiać nowych praw."
  },
  {
    "id": "R02_SEJ_02",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "sejm walny",
      "senat",
      "izba poselska",
      "sejmik ziemski"
    ],
    "right": [
      "król oraz dwie izby",
      "izba wywodząca się z dawnej rady królewskiej",
      "izba z posłami wybieranymi przez sejmiki",
      "zjazd szlachty z ziemi lub województwa"
    ],
    "answer": {
      "sejm walny": "król oraz dwie izby",
      "senat": "izba wywodząca się z dawnej rady królewskiej",
      "izba poselska": "izba z posłami wybieranymi przez sejmiki",
      "sejmik ziemski": "zjazd szlachty z ziemi lub województwa"
    },
    "image": "r02_obrady_sejmu.jpg",
    "explanation": "Sejm walny składał się z króla, senatu i izby poselskiej. Posłów wybierano na sejmikach ziemskich."
  },
  {
    "id": "R02_SEJ_03",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "true_false",
    "prompt": "W Polsce XVI-XVIII wieku konstytucja oznaczała pojedynczą ustawę, a nie koniecznie całościowy opis ustroju państwa.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyjaśnia, że w dawnej Polsce konstytucją nazywano pojedynczą ustawę sejmową."
  },
  {
    "id": "R02_SEJ_04",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "fill_in",
    "prompt": "Sejm walny składał się z króla oraz dwóch izb: __________ i __________.",
    "options": null,
    "answer": [
      "senatu",
      "izby poselskiej"
    ],
    "altAnswers": [
      [
        "senatu",
        "Senatu"
      ],
      [
        "izby poselskiej",
        "Izby Poselskiej",
        "izby posłów"
      ]
    ],
    "explanation": "Sejm walny tworzyli król, senat oraz izba poselska, w której zasiadali posłowie wybierani przez sejmiki."
  },
  {
    "id": "R02_SEJ_05",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady praw lub politycznej roli szlachty w XVI-wiecznej Rzeczypospolitej.",
    "options": [
      "Udział w sejmikach i wybieranie posłów",
      "Współdecydowanie o ustawach przez sejm",
      "Wyłączne prawo do wielu wyższych urzędów i majątków ziemskich",
      "Wpływ sejmu na nowe podatki i pospolite ruszenie",
      "Wybieranie posłów przez chłopów",
      "Dominacja mieszczan w senacie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Szlachta uczestniczyła w sejmikach, wpływała na ustawy przez sejm, korzystała z przywilejów urzędowych i ziemskich oraz decydowała o podatkach i pospolitym ruszeniu."
  },
  {
    "id": "R02_SEJ_06",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "single_choice",
    "prompt": "Czym było pospolite ruszenie?",
    "options": [
      "Ogółem szlachty powoływanej do służby wojskowej w czasie konfliktów",
      "Zebraniem kupców gdańskich przed podróżą morską",
      "Nadzwyczajnym podatkiem płaconym przez chłopów",
      "Uroczystym powitaniem króla na początku sejmu",
      "Nazwą posłów wybranych przez miasta",
      "Sądem działającym tylko na Litwie"
    ],
    "answer": 0,
    "image": "r02_obrady_sejmu.jpg",
    "explanation": "Pospolite ruszenie oznaczało ogół szlachty powoływanej do służby wojskowej w czasie konfliktów zbrojnych."
  },
  {
    "id": "R02_SEJ_07",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "odd_one_out",
    "prompt": "Wskaż, kto nie pasuje do składu senatu: arcybiskupi, wojewodowie, kasztelani, mieszczanie.",
    "options": null,
    "answer": "mieszczanie",
    "explanation": "W senacie zasiadali senatorowie duchowni oraz świeccy dostojnicy, np. wojewodowie i kasztelani. Mieszczanie nie tworzyli składu senatu."
  },
  {
    "id": "R02_SEJ_08",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "scenario",
    "prompt": "Szlachcic ma szlachecki rodowód, ale posiada bardzo mało ziemi albo nie ma jej wcale. Jak określano taką grupę szlachty?",
    "options": [
      "gołota",
      "magnateria",
      "senatorowie duchowni",
      "mieszczaństwo",
      "podskarbiowie",
      "kaprowie"
    ],
    "answer": 0,
    "explanation": "Uboga szlachta bez majątku ziemskiego była nazywana gołotą. Mimo ubóstwa należała do uprzywilejowanego stanu szlacheckiego."
  },
  {
    "id": "R02_SEJ_09",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "single_choice",
    "prompt": "Na czym polegała wolna elekcja wprowadzona po śmierci Zygmunta Augusta?",
    "options": [
      "Na wyborze króla przez ogół szlachty na sejmie elekcyjnym",
      "Na dziedziczeniu tronu przez najstarszego syna monarchy",
      "Na wyborze króla wyłącznie przez senatorów duchownych",
      "Na mianowaniu króla przez papieża i cesarza",
      "Na losowaniu monarchy spośród wojewodów",
      "Na przekazaniu tronu wielkiemu księciu litewskiemu"
    ],
    "answer": 0,
    "image": "r02_pole_elekcyjne.jpg",
    "explanation": "Po 1572 roku króla wybierał ogół szlachty na specjalnym sejmie elekcyjnym. Mógł na niego przybyć każdy szlachcic."
  },
  {
    "id": "R02_SEJ_10",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do artykułów henrykowskich albo do pacta conventa.",
    "options": null,
    "items": [
      "niezmienne zasady ustrojowe",
      "podpisywane przez każdego króla",
      "zakaz naruszania wolnej elekcji",
      "osobiste obietnice władcy",
      "układane dla konkretnego monarchy",
      "program polityki i gospodarki"
    ],
    "categories": [
      "artykuły henrykowskie",
      "pacta conventa"
    ],
    "answer": {
      "artykuły henrykowskie": [
        "niezmienne zasady ustrojowe",
        "podpisywane przez każdego króla",
        "zakaz naruszania wolnej elekcji"
      ],
      "pacta conventa": [
        "osobiste obietnice władcy",
        "układane dla konkretnego monarchy",
        "program polityki i gospodarki"
      ]
    },
    "explanation": "Artykuły henrykowskie były stałymi zasadami ustrojowymi, a pacta conventa osobistymi zobowiązaniami wyborczymi konkretnego króla."
  },
  {
    "id": "R02_SEJ_11",
    "section": "Demokracja szlachecka i wolne elekcje",
    "type": "true_false",
    "prompt": "Henryk Walezy rządził w Polsce tylko kilka miesięcy, a potem potajemnie opuścił kraj, by objąć tron Francji.",
    "options": null,
    "answer": true,
    "explanation": "Rządy Henryka Walezego w Polsce trwały tylko cztery miesiące. Po śmierci brata wyjechał do Francji, by objąć dziedziczny tron."
  },
  {
    "id": "R02_WOJ_01",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "single_choice",
    "prompt": "Które państwo było w XVI wieku głównym zagrożeniem dla wschodnich granic Litwy?",
    "options": [
      "Wielkie Księstwo Moskiewskie",
      "Królestwo Danii",
      "Księstwo Mazowieckie",
      "Prusy Książęce",
      "Królestwo Francji",
      "Państwo Habsburgów"
    ],
    "answer": 0,
    "explanation": "Władcy Moskwy dążyli do zjednoczenia dawnych ziem ruskich, co prowadziło do wielu wojen z Wielkim Księstwem Litewskim."
  },
  {
    "id": "R02_WOJ_02",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "fill_in",
    "prompt": "Władcy Moskwy głosili, że ich państwo jest nowym, trzecim __________, a w XVI wieku przyjęli tytuł __________.",
    "options": null,
    "answer": [
      "Rzymem",
      "carów"
    ],
    "altAnswers": [
      [
        "Rzymem",
        "Rzym",
        "trzecim Rzymem"
      ],
      [
        "carów",
        "carowie",
        "cara"
      ]
    ],
    "explanation": "Moskwa przedstawiała się jako kontynuacja Rzymu i Bizancjum, czyli trzeci Rzym, a jej władcy przyjęli tytuł carów."
  },
  {
    "id": "R02_WOJ_03",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "multi_select",
    "prompt": "Zaznacz państwa zaangażowane w konflikt o dominację nad Morzem Bałtyckim opisany w rozdziale.",
    "options": [
      "Szwecja",
      "Dania",
      "Rosja",
      "Polska i Litwa",
      "Hiszpania",
      "Państwo Kościelne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W konflikcie o dominację nad Bałtykiem uczestniczyły przede wszystkim Szwecja, Dania, Rosja oraz Polska z Litwą."
  },
  {
    "id": "R02_WOJ_04",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "single_choice",
    "prompt": "Kim byli kaprowie w czasach Zygmunta Augusta?",
    "options": [
      "Marynarzami działającymi z upoważnienia władcy przeciw okrętom nieprzyjaciela",
      "Posłami litewskimi wysyłanymi na sejm w Lublinie",
      "Chłopami służącymi w piechocie wybranieckiej",
      "Kupcami przewożącymi zboże Wisłą do Gdańska",
      "Urzędnikami pilnującymi skarbu litewskiego",
      "Duchownymi zasiadającymi w senacie"
    ],
    "answer": 0,
    "image": "r02_okret_kaperski.jpg",
    "explanation": "Kaprowie byli dawnymi korsarzami: marynarzami, którzy z upoważnienia władcy zwalczali okręty państwa nieprzyjacielskiego."
  },
  {
    "id": "R02_WOJ_05",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "true_false",
    "prompt": "Wojna o Inflanty skłoniła Zygmunta Augusta do stworzenia pierwszej w dziejach Polski marynarki wojennej i powołania Komisji Morskiej.",
    "options": null,
    "answer": true,
    "explanation": "W 1568 roku powołano Komisję Morską, która miała czuwać nad organizacją floty i dyscypliną załóg."
  },
  {
    "id": "R02_WOJ_06",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "scenario",
    "prompt": "W latach 60. XVI wieku Iwan IV Groźny odnosi sukcesy w Inflantach i coraz bardziej zagraża Litwie. Jaka idea zaczyna przez to zyskiwać popularność?",
    "options": [
      "Ściślejsze zjednoczenie Korony Polskiej z Wielkim Księstwem Litewskim",
      "Całkowite zerwanie unii personalnej z Polską",
      "Przeniesienie stolicy Litwy do Królewca",
      "Oddanie Inflant Danii bez walki",
      "Wyprawa przeciw Habsburgom na Węgry",
      "Likwidacja sejmu walnego"
    ],
    "answer": 0,
    "explanation": "Rosnące zagrożenie moskiewskie wzmacniało na Litwie przekonanie, że potrzebna jest ściślejsza współpraca z Koroną Polską."
  },
  {
    "id": "R02_WOJ_07",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "match",
    "prompt": "Połącz nazwę z opisem.",
    "options": null,
    "left": [
      "Inflanty",
      "Królewiec",
      "Jama Zapolski",
      "Psków"
    ],
    "right": [
      "kraina nad Zatoką Ryską i Zatoką Fińską",
      "stolica Prus Książęcych",
      "miejsce rozejmu z 1582 roku",
      "silnie umocnione miasto oblegane przez Batorego"
    ],
    "answer": {
      "Inflanty": "kraina nad Zatoką Ryską i Zatoką Fińską",
      "Królewiec": "stolica Prus Książęcych",
      "Jama Zapolski": "miejsce rozejmu z 1582 roku",
      "Psków": "silnie umocnione miasto oblegane przez Batorego"
    },
    "explanation": "Inflanty leżały nad Zatoką Ryską i Fińską, Królewiec był stolicą Prus Książęcych, a kampanie Batorego zakończył rozejm w Jamie Zapolskim."
  },
  {
    "id": "R02_WOJ_08",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z wojnami i polityką zagraniczną w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powołanie Komisji Morskiej",
      "Hołd pruski",
      "Ostatnia wojna polsko-krzyżacka",
      "Rozejm w Jamie Zapolskim"
    ],
    "answer": [
      "Ostatnia wojna polsko-krzyżacka",
      "Hołd pruski",
      "Powołanie Komisji Morskiej",
      "Rozejm w Jamie Zapolskim"
    ],
    "explanation": "Ostatnia wojna polsko-krzyżacka trwała w latach 1519-1521, hołd pruski odbył się w 1525 roku, Komisję Morską powołano w 1568 roku, a rozejm w Jamie Zapolskim zawarto w 1582 roku."
  },
  {
    "id": "R02_WOJ_09",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "single_choice",
    "prompt": "Jaką reformę wojskową przeprowadził Stefan Batory?",
    "options": [
      "Utworzył oddziały piechoty wybranieckiej",
      "Zlikwidował wojsko litewskie",
      "Wprowadził obowiązkową służbę mieszczan w marynarce",
      "Zastąpił pospolite ruszenie wojskami duńskimi",
      "Przekazał Inflanty Moskwie",
      "Rozwiązał wszystkie oddziały królewskie"
    ],
    "answer": 0,
    "image": "r02_stefan_batory.jpg",
    "explanation": "Batory utworzył piechotę wybraniecką, złożoną z wybranych do służby wojennej chłopów z dóbr królewskich."
  },
  {
    "id": "R02_WOJ_10",
    "section": "Wojny i polityka nad Bałtykiem",
    "type": "riddle",
    "prompt": "Jak nazywało się potężnie umocnione miasto oblegane przez wojska Stefana Batorego podczas wojny z Rosją?",
    "options": null,
    "answer": "Psków",
    "altAnswers": [
      "Psków",
      "Pskow"
    ],
    "explanation": "W kampaniach przeciw Rosji wojska Batorego zdobyły Połock i Wielkie Łuki oraz obległy Psków."
  },
  {
    "id": "R02_GOS_01",
    "section": "Gospodarka i folwarki",
    "type": "single_choice",
    "prompt": "Dlaczego w XVI wieku uprawa zbóż zaczęła przynosić szlachcie coraz większe zyski?",
    "options": [
      "Rosła liczba ludności i zapotrzebowanie na żywność, a ceny zboża wzrosły",
      "Zabroniono eksportu zboża przez Gdańsk",
      "Chłopi przestali pracować w rolnictwie",
      "Bałtyk został zamknięty dla handlu morskiego",
      "Zboże zastąpiono głównie przyprawami z kolonii",
      "Wszystkie folwarki przejęli mieszczanie"
    ],
    "answer": 0,
    "explanation": "W XVI wieku rosła liczba ludności w Rzeczypospolitej i Europie, więc wzrosło zapotrzebowanie na żywność i ceny zboża."
  },
  {
    "id": "R02_GOS_02",
    "section": "Gospodarka i folwarki",
    "type": "true_false",
    "prompt": "Określenie Polski jako spichlerza Europy wiązało się z eksportem zboża na zachód Europy.",
    "options": null,
    "answer": true,
    "explanation": "Polskie zboże spławiano Wisłą do Gdańska i sprzedawano drogą morską do krajów Europy Zachodniej."
  },
  {
    "id": "R02_GOS_03",
    "section": "Gospodarka i folwarki",
    "type": "multi_select",
    "prompt": "Zaznacz towary eksportowane z Rzeczypospolitej lub jej ziem w XVI wieku według rozdziału.",
    "options": [
      "zboże",
      "drewno",
      "smoła",
      "skóry zwierzęce",
      "miód pszczeli",
      "porcelana chińska"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Oprócz zboża eksportowano produkty leśne i zwierzęce, m.in. drewno, smołę, skóry oraz miód pszczeli."
  },
  {
    "id": "R02_GOS_04",
    "section": "Gospodarka i folwarki",
    "type": "fill_in",
    "prompt": "Zboże spławiano __________ do __________, największego portu Rzeczypospolitej.",
    "options": null,
    "answer": [
      "Wisłą",
      "Gdańska"
    ],
    "altAnswers": [
      [
        "Wisłą",
        "Wisłą do Gdańska",
        "rzeką Wisłą"
      ],
      [
        "Gdańska",
        "Gdańsk"
      ]
    ],
    "explanation": "Zboże przewożono szlakiem wiślanym do Gdańska, który był najważniejszym portem handlu zbożowego."
  },
  {
    "id": "R02_GOS_05",
    "section": "Gospodarka i folwarki",
    "type": "single_choice",
    "prompt": "Jaką rolę odgrywali kupcy gdańscy w handlu zbożem?",
    "options": [
      "Byli pośrednikami między szlacheckimi producentami a kupcami z Europy Zachodniej",
      "Zakazywali spławiania zboża Wisłą do portu",
      "Wybierali króla podczas wolnej elekcji",
      "Zarządzali piechotą wybraniecką",
      "Prowadzili sejmiki ziemskie dla chłopów",
      "Przekształcili Gdańsk w lenno Moskwy"
    ],
    "answer": 0,
    "image": "r02_dwor_artusa_gdansk.jpg",
    "explanation": "Kupcy gdańscy pośredniczyli między przywożącymi zboże szlacheckimi producentami z Polski a kupcami holenderskimi, niemieckimi i angielskimi."
  },
  {
    "id": "R02_GOS_06",
    "section": "Gospodarka i folwarki",
    "type": "riddle",
    "prompt": "Jak nazywano gospodarstwo należące bezpośrednio do szlachty, nastawione m.in. na produkcję zboża?",
    "options": null,
    "answer": "folwark",
    "altAnswers": [
      "folwark",
      "folwarki",
      "folwark szlachecki"
    ],
    "explanation": "Folwark był częścią majątku szlacheckiego należącą bezpośrednio do właściciela, a w XVI wieku liczba folwarków rosła."
  },
  {
    "id": "R02_GOS_07",
    "section": "Gospodarka i folwarki",
    "type": "single_choice",
    "prompt": "Czym była pańszczyzna?",
    "options": [
      "Przymusową pracą chłopów na rzecz szlachcica",
      "Podatkiem płaconym przez kupców gdańskich królowi",
      "Zebraniem posłów w izbie poselskiej",
      "Złotą monetą bitą przez Zygmunta Starego",
      "Prawem szlachty do wyboru monarchy",
      "Nazwą pokoju zawartego z Rosją"
    ],
    "answer": 0,
    "image": "r02_folwark_szlachecki.jpg",
    "explanation": "Pańszczyzna oznaczała przymusowe roboty chłopów na rzecz właściciela folwarku, czyli szlachcica."
  },
  {
    "id": "R02_GOS_08",
    "section": "Gospodarka i folwarki",
    "type": "true_false",
    "prompt": "Szlachta uchwalała na sejmach prawa szczególnie korzystne dla miast, m.in. pozwalające rodzimym kupcom bez ograniczeń wysyłać towary na zachód Europy.",
    "options": null,
    "answer": false,
    "explanation": "Było odwrotnie: szlachta uchwalała prawa niekorzystne dla miast, m.in. ograniczała samodzielny handel zagraniczny rodzimych kupców."
  },
  {
    "id": "R02_GOS_09",
    "section": "Gospodarka i folwarki",
    "type": "match",
    "prompt": "Połącz nazwę pieniądza z opisem.",
    "options": null,
    "left": [
      "złoty czerwony",
      "talar",
      "grosz",
      "szeląg"
    ],
    "right": [
      "złota moneta",
      "srebrna moneta o większej wartości",
      "srebrna moneta o nieco mniejszej wartości",
      "miedziana moneta o najniższej wartości"
    ],
    "answer": {
      "złoty czerwony": "złota moneta",
      "talar": "srebrna moneta o większej wartości",
      "grosz": "srebrna moneta o nieco mniejszej wartości",
      "szeląg": "miedziana moneta o najniższej wartości"
    },
    "explanation": "W XVI wieku złote monety zwano złotymi czerwonymi, a w obiegu przeważały monety srebrne: talary i grosze. Najniższą wartość miały miedziane szelągi."
  },
  {
    "id": "R02_GOS_10",
    "section": "Gospodarka i folwarki",
    "type": "scenario",
    "prompt": "Szlachcic powiększa folwark i zabrania chłopom swobodnego opuszczania wsi. Jaki skutek dla chłopów najlepiej oddaje ta sytuacja?",
    "options": [
      "Rosnące uzależnienie chłopów i zwiększanie ciężaru pańszczyzny",
      "Uzyskanie przez chłopów pełnych praw politycznych",
      "Przeniesienie chłopów do senatu jako osobnej izby",
      "Natychmiastowe zwolnienie chłopów z pracy na roli",
      "Przekształcenie chłopów w kupców gdańskich",
      "Otrzymanie przez chłopów prawa wyboru króla"
    ],
    "answer": 0,
    "explanation": "Rozwój folwarków oznaczał dla chłopów większe obciążenia pańszczyzną i ograniczanie możliwości opuszczania gospodarstw."
  },
  {
    "id": "R02_KUL_01",
    "section": "Wiele narodów i kultura renesansu",
    "type": "single_choice",
    "prompt": "Jak duże było terytorium Rzeczypospolitej po unii z 1569 roku?",
    "options": [
      "Około 800 tysięcy kilometrów kwadratowych",
      "Około 80 tysięcy kilometrów kwadratowych",
      "Około 3 miliony kilometrów kwadratowych",
      "Około 150 tysięcy kilometrów kwadratowych",
      "Tyle samo co dzisiejsza Polska",
      "Mniejsze niż terytorium Mazowsza"
    ],
    "answer": 0,
    "explanation": "Po unii lubelskiej Rzeczpospolita stała się jednym z największych państw Europy, z terytorium liczącym około 800 tysięcy kilometrów kwadratowych."
  },
  {
    "id": "R02_KUL_02",
    "section": "Wiele narodów i kultura renesansu",
    "type": "true_false",
    "prompt": "W dawnej Rzeczypospolitej Polacy stanowili mniej niż połowę całej ludności państwa.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podkreśla wielonarodowy charakter państwa: Polacy stanowili mniej niż połowę ludności, a jeszcze mniej liczni byli Litwini."
  },
  {
    "id": "R02_KUL_03",
    "section": "Wiele narodów i kultura renesansu",
    "type": "multi_select",
    "prompt": "Zaznacz narody lub grupy etniczno-religijne wymienione jako mieszkańcy dawnej Rzeczypospolitej.",
    "options": [
      "Rusini",
      "Litwini",
      "Niemcy",
      "Żydzi",
      "Ormianie",
      "Aztekowie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Dawną Rzeczpospolitą zamieszkiwali m.in. Polacy, Rusini, Litwini, Niemcy i Żydzi oraz Ormianie; Aztekowie nie należeli do grup wymienionych jako mieszkańcy państwa."
  },
  {
    "id": "R02_KUL_04",
    "section": "Wiele narodów i kultura renesansu",
    "type": "single_choice",
    "prompt": "Które wyznanie protestanckie zdobyło w XVI wieku poparcie zwłaszcza wśród części szlachty?",
    "options": [
      "kalwinizm",
      "prawosławie",
      "judaizm",
      "islam",
      "grekokatolicyzm",
      "katolicyzm ormiański"
    ],
    "answer": 0,
    "explanation": "Podręcznik wskazuje, że pewna część szlachty w XVI wieku przyjęła kalwinizm."
  },
  {
    "id": "R02_KUL_05",
    "section": "Wiele narodów i kultura renesansu",
    "type": "match",
    "prompt": "Połącz grupę lub wyznanie z właściwą charakterystyką.",
    "options": null,
    "left": [
      "luteranie",
      "kalwiniści",
      "grekokatolicy",
      "bracia polscy"
    ],
    "right": [
      "często niemieckojęzyczne mieszczaństwo",
      "część polskiej szlachty",
      "Kościół uznający zwierzchnictwo papieża po unii brzeskiej",
      "arianie powstali pod wpływem reformacji"
    ],
    "answer": {
      "luteranie": "często niemieckojęzyczne mieszczaństwo",
      "kalwiniści": "część polskiej szlachty",
      "grekokatolicy": "Kościół uznający zwierzchnictwo papieża po unii brzeskiej",
      "bracia polscy": "arianie powstali pod wpływem reformacji"
    },
    "explanation": "Różne wyznania miały odmienne zaplecze społeczne i historię: luteranizm był silny w miastach niemieckojęzycznych, kalwinizm wśród szlachty, a Kościół greckokatolicki powstał po unii brzeskiej."
  },
  {
    "id": "R02_KUL_06",
    "section": "Wiele narodów i kultura renesansu",
    "type": "scenario",
    "prompt": "Kupcy z wielu krajów spotykają się w mieście na Rusi, które ma trzy katolickie arcybiskupstwa: rzymskokatolickie, greckokatolickie i ormiańskokatolickie. O jakie miasto chodzi?",
    "options": [
      "Lwów",
      "Kraków",
      "Gdańsk",
      "Królewiec",
      "Zamość",
      "Wilno"
    ],
    "answer": 0,
    "image": "r02_lwow_wielu_kultur.jpg",
    "explanation": "Lwów był miastem wielu narodów i religii oraz ważnym ośrodkiem handlu, położonym na szlakach między Azją a Europą."
  },
  {
    "id": "R02_KUL_07",
    "section": "Wiele narodów i kultura renesansu",
    "type": "true_false",
    "prompt": "Konfederacja warszawska z 1573 roku stała się podstawą tolerancji religijnej w Rzeczypospolitej.",
    "options": null,
    "answer": true,
    "explanation": "Akt konfederacji warszawskiej wprowadzał wieczysty pokój między wyznaniami chrześcijańskimi i gwarantował prawa religijne ludziom wolnym."
  },
  {
    "id": "R02_KUL_08",
    "section": "Wiele narodów i kultura renesansu",
    "type": "riddle",
    "prompt": "Jak inaczej nazywano braci polskich, jedną z grup powstałych pod wpływem reformacji?",
    "options": null,
    "answer": "arianie",
    "altAnswers": [
      "arianie",
      "arian"
    ],
    "explanation": "Bracia polscy byli arianami. Odrzucali dogmat o Trójcy Świętej i wnieśli ważny wkład w rozwój polskiej kultury."
  },
  {
    "id": "R02_KUL_09",
    "section": "Wiele narodów i kultura renesansu",
    "type": "multi_select",
    "prompt": "Zaznacz drogi, którymi idee renesansu i humanizmu docierały do Polski i na Litwę.",
    "options": [
      "Studia synów zamożnej szlachty za granicą",
      "Przyjazdy uczonych i reformatorów protestanckich",
      "Działalność humanistów w Akademii Krakowskiej",
      "Zakładanie licznych drukarni",
      "Zakaz drukowania książek po polsku",
      "Zamknięcie dworu królewskiego dla cudzoziemców"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_wawel_kruzganki.jpg",
    "explanation": "Nowe prądy kultury docierały przez studia zagraniczne, uczonych i reformatorów przybywających do kraju, Akademię Krakowską oraz drukarnie."
  },
  {
    "id": "R02_KUL_10",
    "section": "Wiele narodów i kultura renesansu",
    "type": "single_choice",
    "prompt": "Czym wyróżniał się Mikołaj Rej według rozdziału?",
    "options": [
      "Z dumą pisał swoje utwory wyłącznie po polsku",
      "Założył Zamość i Akademię Zamojską",
      "Był włoskim architektem pracującym na Wawelu",
      "Przetłumaczył Biblię jako jezuita Jakub Wujek",
      "Dowodził kampanią pskowską",
      "Zaprojektował pruską flotę kaperską"
    ],
    "answer": 0,
    "explanation": "Mikołaj Rej był jednym z pisarzy szczególnie ważnych dla rozwoju języka polskiego i pisał swoje dzieła po polsku."
  },
  {
    "id": "R02_KUL_11",
    "section": "Wiele narodów i kultura renesansu",
    "type": "single_choice",
    "prompt": "Gdzie Jan Kochanowski spędził ostatnie lata życia?",
    "options": [
      "W Czarnolesie koło Radomia",
      "W Królewcu",
      "W Jamie Zapolskim",
      "W Inflantach",
      "W Pskowie",
      "W Brześciu Litewskim"
    ],
    "answer": 0,
    "explanation": "Jan Kochanowski po pracy jako sekretarz królewski spędził ostatnie lata w swoim szlacheckim majątku w Czarnolesie koło Radomia."
  },
  {
    "id": "R02_KUL_12",
    "section": "Wiele narodów i kultura renesansu",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady dorobku złotego wieku do dziedzin.",
    "options": null,
    "items": [
      "przebudowa Wawelu",
      "kaplica Zygmuntowska",
      "Zamość",
      "twórczość Mikołaja Reja",
      "poezja Jana Kochanowskiego",
      "tłumaczenia Biblii na język polski"
    ],
    "categories": [
      "architektura i miasta",
      "język i literatura"
    ],
    "answer": {
      "architektura i miasta": [
        "przebudowa Wawelu",
        "kaplica Zygmuntowska",
        "Zamość"
      ],
      "język i literatura": [
        "twórczość Mikołaja Reja",
        "poezja Jana Kochanowskiego",
        "tłumaczenia Biblii na język polski"
      ]
    },
    "image": "r02_zamosc_renesansowy.jpg",
    "explanation": "Złoty wiek obejmował zarówno renesansową architekturę, jak i rozwój języka oraz literatury polskiej."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kim dla Zygmunta Starego był Albrecht Hohenzollern, wielki mistrz zakonu krzyżackiego?",
    "options": [
      "siostrzeńcem",
      "bratem",
      "synem",
      "ojcem",
      "stryjem",
      "dziadkiem"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że Albrecht Hohenzollern był siostrzeńcem polskiego króla Zygmunta Starego."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Prusy Książęce pozostały lennem Polski do połowy XVII wieku, a ich Hohenzollernowie przez prawie 130 lat z reguły byli wiernymi lennikami.",
    "options": null,
    "answer": true,
    "image": "r02_hold_pruski.jpg",
    "explanation": "Po hołdzie pruskim Prusy Książęce były lennem Polski do połowy XVII wieku, a Hohenzollernowie długo zachowywali się zwykle jak lojalni lennicy."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sejm lubelski z 1569 roku trwał około __________ miesięcy, a akt unii uchwalono 1 lipca __________ roku.",
    "options": null,
    "answer": [
      "siedmiu",
      "1569"
    ],
    "altAnswers": [
      [
        "siedmiu",
        "7"
      ],
      [
        "1569",
        "1569 r."
      ]
    ],
    "image": "r02_akt_unii_lubelskiej.jpg",
    "explanation": "Sejm w Lublinie należał do najdłuższych, trwał około siedmiu miesięcy. Akt unii lubelskiej nosi datę 1 lipca 1569 roku."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz działania lub okoliczności związane z doprowadzeniem do unii lubelskiej.",
    "options": [
      "Potajemny wyjazd części magnatów litewskich z Lublina",
      "Włączenie do Korony wschodnich terenów Ukrainy wraz z Kijowem",
      "Włączenie do Korony Podlasia",
      "Przeniesienie przez Zygmunta Augusta dziedzicznych praw do tronu litewskiego na Królestwo Polskie",
      "Koronacja osobnego króla Litwy w Wilnie",
      "Oddanie Inflant Szwecji"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Opór części magnatów litewskich przełamano m.in. przez włączenie Podlasia i ziem ukraińskich do Korony. Ważne było też to, że bezpotomny Zygmunt August przeniósł dziedziczne prawa do tronu litewskiego na Królestwo Polskie."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do opisu unii lubelskiej u litewskiego historyka: wspólny władca, wspólny sejm wyborczy w Polsce, koronacja w Krakowie, osobne uroczystości litewskie.",
    "options": null,
    "answer": "osobne uroczystości litewskie",
    "explanation": "Litewski historyk podkreślał, że osobne uroczystości dla Wielkiego Księstwa Litewskiego nie były przewidziane."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które ziemie Zygmunt August włączył do Korony, aby złamać opór części magnatów litewskich wobec unii?",
    "options": [
      "Wschodnie tereny Ukrainy z Kijowem oraz Podlasie",
      "Prusy Książęce i Królewiec",
      "Inflanty i Rygę",
      "Mazowsze i Warszawę",
      "Czechy i Węgry",
      "Danię i Szwecję"
    ],
    "answer": 0,
    "explanation": "Aby przełamać opór litewskich magnatów, Zygmunt August włączył do Korony wschodnie tereny Ukrainy wraz z Kijowem oraz Podlasie."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z kampanii Stefana Batorego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "kampania pskowska",
      "rozejm w Jamie Zapolskim",
      "kampania połocka",
      "kampania wielkołucka"
    ],
    "answer": [
      "kampania połocka",
      "kampania wielkołucka",
      "kampania pskowska",
      "rozejm w Jamie Zapolskim"
    ],
    "image": "r02_stefan_batory.jpg",
    "explanation": "Kolejność wskazana w rozdziale to kampania połocka w 1579 roku, wielkołucka w 1580 roku, pskowska w latach 1580-1581 i rozejm w Jamie Zapolskim w 1582 roku."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W XVI wieku złoty polski był jednostką obrachunkową równą __________ groszom, a miedzianą monetą o najniższej wartości był __________.",
    "options": null,
    "answer": [
      "30",
      "szeląg"
    ],
    "altAnswers": [
      [
        "30",
        "trzydziestu"
      ],
      [
        "szeląg",
        "szelągi"
      ]
    ],
    "explanation": "Złoty polski służył jako jednostka obrachunkowa i równał się 30 groszom, a najniższą wartość miały miedziane szelągi."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które miasto miało w epoce nowożytnej aż trzy katolickie arcybiskupstwa: rzymskokatolickie, greckokatolickie i ormiańskokatolickie?",
    "options": [
      "Lwów",
      "Gdańsk",
      "Zamość",
      "Poznań",
      "Królewiec",
      "Psków"
    ],
    "answer": 0,
    "image": "r02_lwow_wielu_kultur.jpg",
    "explanation": "Lwów był wyjątkowym miastem wielu narodów i religii; miał trzy katolickie arcybiskupstwa różnych obrządków."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poglądy lub cechy przypisywane w rozdziale braciom polskim albo jednemu z ich odłamów.",
    "options": [
      "Odrzucenie dogmatu o Trójcy Świętej",
      "Potępienie przemocy i wojen przez jeden z odłamów",
      "Sprzeciw wobec kary śmierci przez jeden z odłamów",
      "Krytyka pańszczyzny chłopów przez jeden z odłamów",
      "Noszenie drewnianych szabel jako znaku sprzeciwu wobec przemocy",
      "Dążenie do rozpoczęcia wojen religijnych w Rzeczypospolitej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Arianie odrzucali dogmat o Trójcy Świętej, a jeden z ich odłamów potępiał przemoc, wojny, karę śmierci i pańszczyznę, nosząc drewniane szable jako znak postawy pokojowej."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z informacją z rozdziału.",
    "options": null,
    "left": [
      "Stanisław Murzynowski",
      "Andrzej Frycz Modrzewski",
      "Mikołaj Rej",
      "Jan Kochanowski"
    ],
    "right": [
      "tłumacz Nowego Testamentu i autor pracy o ortografii",
      "autor dzieła O poprawie Rzeczypospolitej",
      "pisarz tworzący z dumą wyłącznie po polsku",
      "poeta związany z Czarnolasem"
    ],
    "answer": {
      "Stanisław Murzynowski": "tłumacz Nowego Testamentu i autor pracy o ortografii",
      "Andrzej Frycz Modrzewski": "autor dzieła O poprawie Rzeczypospolitej",
      "Mikołaj Rej": "pisarz tworzący z dumą wyłącznie po polsku",
      "Jan Kochanowski": "poeta związany z Czarnolasem"
    },
    "explanation": "Wszyscy ci twórcy i uczeni są powiązani z rozwojem kultury i języka polskiego w XVI wieku."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Król mówi, że jest władcą ludzi, a nie ludzkich sumień. Którą cechę polityki Rzeczypospolitej najlepiej oddaje ta wypowiedź?",
    "options": [
      "tolerancję religijną",
      "dziedziczność tronu",
      "zakaz działania protestantów",
      "likwidację sejmu",
      "monopol jednego języka urzędowego",
      "podporządkowanie miast chłopom"
    ],
    "answer": 0,
    "explanation": "Słowa przypisywane Zygmuntowi Augustowi wyrażają tolerancyjną postawę wobec wyznań, która sprzyjała pokojowi religijnemu w państwie."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto był autorem projektu Zamościa oraz jego fortyfikacji?",
    "options": [
      "Bernardo Morando",
      "Jan Kochanowski",
      "Mikołaj Rej",
      "Stanisław Murzynowski",
      "Albrecht Hohenzollern",
      "Iwan IV Groźny"
    ],
    "answer": 0,
    "image": "r02_zamosc_renesansowy.jpg",
    "explanation": "Zamość założył Jan Zamoyski w 1580 roku, a projekt miasta i fortyfikacji opracował włoski architekt Bernardo Morando."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W sprowadzaniu włoskich artystów na dwór królewski ważną rolę odegrała Bona Sforza, żona Zygmunta Starego i matka Zygmunta Augusta.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje, że w rozwoju renesansu na dworze królewskim ważną rolę odegrali ostatni Jagiellonowie oraz Bona Sforza."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Polska w XVI wieku",
  "icon": "🏰",
  "sectionOrder": [
    "Jagiellonowie i unia lubelska",
    "Demokracja szlachecka i wolne elekcje",
    "Wojny i polityka nad Bałtykiem",
    "Gospodarka i folwarki",
    "Wiele narodów i kultura renesansu"
  ],
  "sectionIcons": {
    "Jagiellonowie i unia lubelska": "👑",
    "Demokracja szlachecka i wolne elekcje": "🗳️",
    "Wojny i polityka nad Bałtykiem": "⚔️",
    "Gospodarka i folwarki": "🌾",
    "Wiele narodów i kultura renesansu": "🎭"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
