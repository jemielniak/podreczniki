// Skróty sekcji:
//   POC = Początki Polski
//   CHR = Polska Bolesława Chrobrego
//   NAJ = W najdawniejszej Polsce
//   UPA = Upadek i odbudowa państwa
//   KRZ = Polska Bolesława Krzywoustego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_POC_01",
    "section": "Początki Polski",
    "type": "single_choice",
    "prompt": "Które plemię odegrało najważniejszą rolę w powstaniu państwa polskiego?",
    "options": [
      "Wiślanie",
      "Ślężanie",
      "Polanie",
      "Pomorzanie",
      "Prusowie",
      "Czesi"
    ],
    "answer": 2,
    "explanation": "Państwo, z którego powstała Polska, utworzyli w X wieku Polanie.",
    "image": "/img/r06_pisanka_polan.jpg"
  },
  {
    "id": "R06_POC_02",
    "section": "Początki Polski",
    "type": "multi_select",
    "prompt": "Zaznacz plemiona słowiańskie mieszkające w IX wieku między Odrą a Bugiem według podręcznika.",
    "options": [
      "Polanie",
      "Wiślanie",
      "Ślężanie",
      "Mazowszanie",
      "Prusowie",
      "Frankowie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podręcznik wymienia Polan, Wiślan, Ślężan, Mazowszan i Pomorzan; Prusowie nie byli Słowianami, a Frankowie mieszkali na zachodzie Europy."
  },
  {
    "id": "R06_POC_03",
    "section": "Początki Polski",
    "type": "true_false",
    "prompt": "Wiec był zgromadzeniem wszystkich wolnych mężczyzn w plemieniu.",
    "options": null,
    "answer": true,
    "explanation": "Najwyższą władzę w plemieniu sprawował wiec, czyli zgromadzenie wolnych mężczyzn."
  },
  {
    "id": "R06_POC_04",
    "section": "Początki Polski",
    "type": "fill_in",
    "prompt": "Mieszko I rozpoczął rządy około roku __________, a chrzest przyjął w roku __________.",
    "options": null,
    "answer": [
      "960",
      "966"
    ],
    "altAnswers": [
      [
        "960",
        "ok. 960",
        "około 960"
      ],
      [
        "966",
        "966 r."
      ]
    ],
    "explanation": "Oś czasu w rozdziale wskazuje początek rządów Mieszka około 960 roku i chrzest Polski w 966 roku."
  },
  {
    "id": "R06_POC_05",
    "section": "Początki Polski",
    "type": "riddle",
    "prompt": "Ustrój, w którym państwo było osobistą własnością panującego, to...",
    "options": null,
    "answer": "monarchia patrymonialna",
    "altAnswers": [
      "monarchia patrymonialna",
      "monarchią patrymonialną"
    ],
    "explanation": "Mieszko I traktował państwo jak swoją własność, dlatego był to przykład monarchii patrymonialnej."
  },
  {
    "id": "R06_POC_06",
    "section": "Początki Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Wielkopolska, Mazowsze, Kujawy, Saksonia.",
    "options": null,
    "answer": "Saksonia",
    "explanation": "Wielkopolska, Mazowsze i Kujawy należały do państwa Mieszka na początku jego rządów, a Saksonia była krainą niemiecką."
  },
  {
    "id": "R06_POC_07",
    "section": "Początki Polski",
    "type": "scenario",
    "prompt": "Jesteś możnym z otoczenia Mieszka I. Władca chce zdobyć Pomorze, ale wie, że jako poganin nie może łatwo zawierać sojuszy z chrześcijańskimi władcami. Która decyzja najlepiej pomaga w tej sytuacji?",
    "options": [
      "Przyjęcie chrztu i sojusz z Czechami",
      "Zrzeczenie się Pomorza na rzecz Prusów",
      "Podział państwa między wojów",
      "Zniszczenie grodów w Wielkopolsce"
    ],
    "answer": 0,
    "explanation": "Przyjęcie chrztu ułatwiało Mieszkowi zawieranie sojuszy z chrześcijańskimi władcami."
  },
  {
    "id": "R06_POC_08",
    "section": "Początki Polski",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "wiec",
      "drużyna",
      "danina",
      "biskupstwo misyjne"
    ],
    "right": [
      "zgromadzenie wolnych mężczyzn",
      "wojsko utrzymywane przez księcia",
      "świadczenie płacone władcy",
      "organizacja kościelna podległa papieżowi"
    ],
    "answer": {
      "wiec": "zgromadzenie wolnych mężczyzn",
      "drużyna": "wojsko utrzymywane przez księcia",
      "danina": "świadczenie płacone władcy",
      "biskupstwo misyjne": "organizacja kościelna podległa papieżowi"
    },
    "explanation": "Te pojęcia opisują organizację plemienną, państwo Mieszka i początki Kościoła w Polsce."
  },
  {
    "id": "R06_POC_09",
    "section": "Początki Polski",
    "type": "sort",
    "prompt": "Przyporządkuj skutki chrztu Polski do odpowiednich kategorii.",
    "options": null,
    "items": [
      "uznanie władzy Mieszka przez papieża",
      "przybycie zakonników",
      "budowa kamiennych kościołów",
      "mniejszy pretekst do ataków na Polan"
    ],
    "categories": [
      "polityczne",
      "kulturowe"
    ],
    "answer": {
      "polityczne": [
        "uznanie władzy Mieszka przez papieża",
        "mniejszy pretekst do ataków na Polan"
      ],
      "kulturowe": [
        "przybycie zakonników",
        "budowa kamiennych kościołów"
      ]
    },
    "explanation": "Chrzest miał skutki polityczne, ale też włączył państwo w krąg kultury zachodnioeuropejskiej.",
    "image": "/img/r06_chrzest_mieszka.jpg"
  },
  {
    "id": "R06_POC_10",
    "section": "Początki Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z życia Mieszka I w kolejności chronologicznej.",
    "options": null,
    "items": [
      "bitwa pod Cedynią",
      "chrzest Polski",
      "początek rządów Mieszka I",
      "śmierć Mieszka I"
    ],
    "answer": [
      "początek rządów Mieszka I",
      "chrzest Polski",
      "bitwa pod Cedynią",
      "śmierć Mieszka I"
    ],
    "explanation": "Kolejność to: ok. 960, 966, 972 i 992."
  },
  {
    "id": "R06_POC_11",
    "section": "Początki Polski",
    "type": "single_choice",
    "prompt": "Gdzie powstało w 968 roku biskupstwo misyjne utworzone dzięki Mieszkowi I?",
    "options": [
      "w Krakowie",
      "w Poznaniu",
      "w Gnieźnie",
      "we Wrocławiu",
      "w Kołobrzegu",
      "w Płocku"
    ],
    "answer": 1,
    "explanation": "Pierwsze biskupstwo misyjne w państwie Mieszka I powstało w Poznaniu i podlegało papieżowi."
  },
  {
    "id": "R06_POC_12",
    "section": "Początki Polski",
    "type": "true_false",
    "prompt": "Po chrzcie Mieszko I utracił Pomorze, Małopolskę i Śląsk.",
    "options": null,
    "answer": false,
    "explanation": "Po chrzcie Mieszko przyłączył Pomorze, a pod koniec życia Małopolskę i Śląsk."
  },
  {
    "id": "R06_CHR_01",
    "section": "Polska Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Jakie znaczenie miał przydomek Chrobry?",
    "options": [
      "mądry",
      "dzielny i waleczny",
      "bogaty",
      "pobożny",
      "stary",
      "sprawiedliwy"
    ],
    "answer": 1,
    "explanation": "Przydomek Chrobry oznaczał człowieka dzielnego i walecznego."
  },
  {
    "id": "R06_CHR_02",
    "section": "Polska Bolesława Chrobrego",
    "type": "multi_select",
    "prompt": "Zaznacz cele Bolesława Chrobrego związane z misją biskupa Wojciecha do Prus.",
    "options": [
      "nawrócenie Prusów",
      "podporządkowanie Prusów Polsce",
      "zdobycie szacunku jako krzewiciel chrześcijaństwa",
      "ucieczka przed Henrykiem II",
      "likwidacja arcybiskupstwa w Gnieźnie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Chrobry liczył, że nawróceni Prusowie poddadzą się jego władzy, a nawet nieudana misja przyniesie mu prestiż."
  },
  {
    "id": "R06_CHR_03",
    "section": "Polska Bolesława Chrobrego",
    "type": "true_false",
    "prompt": "W 997 roku Prusowie zabili biskupa Wojciecha, a Bolesław Chrobry wykupił jego ciało.",
    "options": null,
    "answer": true,
    "explanation": "Po śmierci Wojciecha Chrobry wykupił jego ciało i złożył je jako relikwię w Gnieźnie."
  },
  {
    "id": "R06_CHR_04",
    "section": "Polska Bolesława Chrobrego",
    "type": "fill_in",
    "prompt": "Zjazd gnieźnieński odbył się w roku __________, a uczestniczyli w nim Bolesław Chrobry i cesarz __________.",
    "options": null,
    "answer": [
      "1000",
      "Otton III"
    ],
    "altAnswers": [
      [
        "1000",
        "1000 r."
      ],
      [
        "Otton III",
        "Ottona III",
        "cesarz Otton III"
      ]
    ],
    "explanation": "W 1000 roku do Gniezna przybył cesarz Otton III na pielgrzymkę do grobu św. Wojciecha.",
    "image": "/img/r06_zjazd_gnieznienski.jpg"
  },
  {
    "id": "R06_CHR_05",
    "section": "Polska Bolesława Chrobrego",
    "type": "riddle",
    "prompt": "Miasto, w którym w 1000 roku ustanowiono polskie arcybiskupstwo, to...",
    "options": null,
    "answer": "Gniezno",
    "altAnswers": [
      "Gniezno",
      "Gnieźnie"
    ],
    "explanation": "Papieski dokument przywieziony przez Ottona III ustanowił arcybiskupstwo w Gnieźnie."
  },
  {
    "id": "R06_CHR_06",
    "section": "Polska Bolesława Chrobrego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Gniezno, Kraków, Kołobrzeg, Rzym.",
    "options": null,
    "answer": "Rzym",
    "explanation": "Gniezno, Kraków i Kołobrzeg były polskimi ośrodkami kościelnymi po zjeździe gnieźnieńskim; Rzym nie był polskim biskupstwem."
  },
  {
    "id": "R06_CHR_07",
    "section": "Polska Bolesława Chrobrego",
    "type": "scenario",
    "prompt": "Cesarz wkłada Bolesławowi na głowę diadem i daje mu kopię włóczni św. Maurycego. Co miały symbolizować te gesty?",
    "options": [
      "uznanie oznak władzy królewskiej",
      "nakaz wyprawy na Ruś",
      "odebranie Polsce niezależności",
      "karę za śmierć Wojciecha"
    ],
    "answer": 0,
    "explanation": "Diadem i kopia włóczni św. Maurycego były oznakami władzy królewskiej."
  },
  {
    "id": "R06_CHR_08",
    "section": "Polska Bolesława Chrobrego",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "śmierć św. Wojciecha",
      "zjazd gnieźnieński",
      "początek wojen polsko-niemieckich",
      "koronacja Bolesława Chrobrego"
    ],
    "right": [
      "997",
      "1000",
      "1002",
      "1025"
    ],
    "answer": {
      "śmierć św. Wojciecha": "997",
      "zjazd gnieźnieński": "1000",
      "początek wojen polsko-niemieckich": "1002",
      "koronacja Bolesława Chrobrego": "1025"
    },
    "explanation": "Daty te porządkują główne wydarzenia panowania Bolesława Chrobrego."
  },
  {
    "id": "R06_CHR_09",
    "section": "Polska Bolesława Chrobrego",
    "type": "sort",
    "prompt": "Podziel ziemie według tego, czy Chrobry utrzymał je po wojnach z Niemcami, czy tylko czasowo opanował.",
    "options": null,
    "items": [
      "Łużyce",
      "Milsko",
      "Czechy",
      "Miśnia"
    ],
    "categories": [
      "utrzymane po pokoju 1018",
      "opanowane czasowo"
    ],
    "answer": {
      "utrzymane po pokoju 1018": [
        "Łużyce",
        "Milsko"
      ],
      "opanowane czasowo": [
        "Czechy",
        "Miśnia"
      ]
    },
    "explanation": "Po pokoju z 1018 roku Polska utrzymała Łużyce i Milsko; Czechy i Miśnia były opanowane tylko czasowo."
  },
  {
    "id": "R06_CHR_10",
    "section": "Polska Bolesława Chrobrego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia panowania Bolesława Chrobrego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "koronacja królewska Chrobrego",
      "wyprawa kijowska",
      "zjazd gnieźnieński",
      "śmierć św. Wojciecha"
    ],
    "answer": [
      "śmierć św. Wojciecha",
      "zjazd gnieźnieński",
      "wyprawa kijowska",
      "koronacja królewska Chrobrego"
    ],
    "explanation": "Wydarzenia nastąpiły w latach 997, 1000, 1018 i 1025."
  },
  {
    "id": "R06_CHR_11",
    "section": "Polska Bolesława Chrobrego",
    "type": "single_choice",
    "prompt": "Jaki był główny cel Polski w wojnach polsko-niemieckich z lat 1002-1018?",
    "options": [
      "obrona niezależności od cesarstwa",
      "zniszczenie Gniezna",
      "nawrócenie Prusów",
      "przeniesienie stolicy do Krakowa",
      "podział kraju na dzielnice",
      "zdobycie Pomorza Zachodniego"
    ],
    "answer": 0,
    "explanation": "Podręcznik podkreśla, że Polska walczyła przede wszystkim o niezależność od cesarstwa."
  },
  {
    "id": "R06_CHR_12",
    "section": "Polska Bolesława Chrobrego",
    "type": "true_false",
    "prompt": "Wyprawa kijowska Chrobrego w 1018 roku zakończyła się złupieniem Kijowa i przyłączeniem Grodów Czerwieńskich.",
    "options": null,
    "answer": true,
    "explanation": "Chrobry złupił Kijów, a w drodze powrotnej przyłączył do Polski Grody Czerwieńskie."
  },
  {
    "id": "R06_NAJ_01",
    "section": "W najdawniejszej Polsce",
    "type": "single_choice",
    "prompt": "Co było głównym zadaniem drużyny pierwszych Piastów?",
    "options": [
      "obrona kraju, podboje i wymuszanie posłuszeństwa",
      "prowadzenie szkół w grodach",
      "pisanie kronik po łacinie",
      "budowanie wyłącznie kościołów",
      "handel solą w Bizancjum",
      "wybór księcia na wiecu"
    ],
    "answer": 0,
    "explanation": "Drużyna broniła kraju, zdobywała nowe ziemie i pomagała władcy utrzymać posłuszeństwo poddanych.",
    "image": "/img/r06_woj_piastowski.jpg"
  },
  {
    "id": "R06_NAJ_02",
    "section": "W najdawniejszej Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz powinności mieszkańców najdawniejszej Polski wobec władcy.",
    "options": [
      "składanie danin",
      "goszczenie panującego",
      "pomoc przy budowie grodów",
      "obowiązek krzyku",
      "udział w wyborach parlamentarnych",
      "płacenie podatku dochodowego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mieszkańcy składali daniny i wykonywali różne powinności, m.in. gościli władcę, pomagali przy grodach i ścigali zbiegłego przestępcę."
  },
  {
    "id": "R06_NAJ_03",
    "section": "W najdawniejszej Polsce",
    "type": "true_false",
    "prompt": "Około 1000 roku Polska liczyła nieco ponad milion mieszkańców.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że około 1000 roku w Polsce mieszkało nieco ponad milion ludzi."
  },
  {
    "id": "R06_NAJ_04",
    "section": "W najdawniejszej Polsce",
    "type": "fill_in",
    "prompt": "W najdawniejszej Polsce chłopi składali daniny między innymi w __________ i __________.",
    "options": null,
    "answer": [
      "zbożu",
      "bydle"
    ],
    "altAnswers": [
      [
        "zbożu",
        "zboże"
      ],
      [
        "bydle",
        "bydłu"
      ]
    ],
    "explanation": "Daniny składano głównie w naturze, na przykład w zbożu, bydle, rybach i miodzie."
  },
  {
    "id": "R06_NAJ_05",
    "section": "W najdawniejszej Polsce",
    "type": "riddle",
    "prompt": "Wyspa na jeziorze Lednica, na której znajdował się ważny gród Mieszka I, to...",
    "options": null,
    "answer": "Ostrów Lednicki",
    "altAnswers": [
      "Ostrów Lednicki",
      "Ostrowie Lednickim"
    ],
    "explanation": "Ostrów Lednicki był jedną z głównych siedzib władcy państwa Polan.",
    "image": "/img/r06_grod_ostrow_lednicki.jpg"
  },
  {
    "id": "R06_NAJ_06",
    "section": "W najdawniejszej Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do jadłospisu mieszkańców najdawniejszej Polski: kasza, polewka zbożowa, ryby, pomidory.",
    "options": null,
    "answer": "pomidory",
    "explanation": "Mieszkańcy najdawniejszej Polski nie znali pomidorów, ziemniaków, ryżu, cukru ani herbaty."
  },
  {
    "id": "R06_NAJ_07",
    "section": "W najdawniejszej Polsce",
    "type": "scenario",
    "prompt": "Kupiec przyjeżdża do grodu około 1000 roku. Mieszkaniec nie ma wielu monet, ale chce coś kupić. Czym według podręcznika mógł zapłacić?",
    "options": [
      "płatami lnu, skórkami kun albo solą",
      "banknotami papierowymi",
      "kartą płatniczą",
      "złotymi dukatami z XVI wieku"
    ],
    "answer": 0,
    "explanation": "Moneta nie odgrywała wtedy większej roli, więc płacono towarami, na przykład płatami lnu, skórkami zwierząt, solą albo rybami."
  },
  {
    "id": "R06_NAJ_08",
    "section": "W najdawniejszej Polsce",
    "type": "match",
    "prompt": "Połącz element grodu na Ostrowie Lednickim z opisem.",
    "options": null,
    "left": [
      "wał",
      "palatium",
      "kaplica książęca",
      "podgrodzie"
    ],
    "right": [
      "drewniano-ziemna obrona grodu",
      "kamienny pałac władcy",
      "miejsce modlitwy władcy i dworu",
      "część z chatami wojów, chłopów i rzemieślników"
    ],
    "answer": {
      "wał": "drewniano-ziemna obrona grodu",
      "palatium": "kamienny pałac władcy",
      "kaplica książęca": "miejsce modlitwy władcy i dworu",
      "podgrodzie": "część z chatami wojów, chłopów i rzemieślników"
    },
    "explanation": "Infografika grodu pokazuje wał, palatium, kaplicę i podgrodzie z drewnianymi chatami.",
    "image": "/img/r06_grod_ostrow_lednicki.jpg"
  },
  {
    "id": "R06_NAJ_09",
    "section": "W najdawniejszej Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj elementy życia codziennego do kategorii.",
    "options": null,
    "items": [
      "mięso",
      "piwo",
      "koszule z lnu",
      "grzebienie",
      "polewki zbożowe",
      "łaźnie"
    ],
    "categories": [
      "pożywienie i napoje",
      "ubiór i higiena"
    ],
    "answer": {
      "pożywienie i napoje": [
        "mięso",
        "piwo",
        "polewki zbożowe"
      ],
      "ubiór i higiena": [
        "koszule z lnu",
        "grzebienie",
        "łaźnie"
      ]
    },
    "explanation": "Podręcznik opisuje zarówno jedzenie i napoje, jak i dbanie o czystość oraz ubrania mieszkańców."
  },
  {
    "id": "R06_NAJ_10",
    "section": "W najdawniejszej Polsce",
    "type": "sequence",
    "prompt": "Ułóż etapy utrzymania drużyny przez władcę w logicznej kolejności.",
    "options": null,
    "items": [
      "chłopi składają daniny",
      "władca gromadzi dochody",
      "władca daje wojom broń i żywność",
      "wojowie służą w drużynie"
    ],
    "answer": [
      "chłopi składają daniny",
      "władca gromadzi dochody",
      "władca daje wojom broń i żywność",
      "wojowie służą w drużynie"
    ],
    "explanation": "Dochody z danin pozwalały księciu utrzymywać drużynę, od której zależała jego siła."
  },
  {
    "id": "R06_NAJ_11",
    "section": "W najdawniejszej Polsce",
    "type": "single_choice",
    "prompt": "Dlaczego wielu mieszkańców tęskniło za czasami plemiennymi?",
    "options": [
      "bo daniny i powinności wobec państwa były uciążliwe",
      "bo wszyscy chcieli zostać zakonnikami",
      "bo nie było wtedy żadnych lasów",
      "bo zakazano im jeść kaszy",
      "bo musieli płacić kartami",
      "bo państwo nie prowadziło wojen"
    ],
    "answer": 0,
    "explanation": "Rosnące daniny i powinności, zwłaszcza podczas wojen Chrobrego, sprawiały, że część ludzi tęskniła za dawnymi czasami."
  },
  {
    "id": "R06_NAJ_12",
    "section": "W najdawniejszej Polsce",
    "type": "true_false",
    "prompt": "Mieszkańcy najdawniejszej Polski nie dbali o czystość, bo nie znali grzebieni ani łaźni.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik podaje, że prali odzież, używali grzebieni i budowali łaźnie."
  },
  {
    "id": "R06_UPA_01",
    "section": "Upadek i odbudowa państwa",
    "type": "single_choice",
    "prompt": "Kto został królem Polski po śmierci Bolesława Chrobrego?",
    "options": [
      "Mieszko II",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały",
      "Władysław Herman",
      "Zbigniew",
      "Bolesław Krzywousty"
    ],
    "answer": 0,
    "explanation": "Po śmierci Chrobrego w 1025 roku królem Polski został jego syn Mieszko II."
  },
  {
    "id": "R06_UPA_02",
    "section": "Upadek i odbudowa państwa",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, które wystąpiły przeciwko Polsce za panowania Mieszka II według podręcznika.",
    "options": [
      "Niemcy",
      "Czechy",
      "Ruś Kijowska",
      "Węgry",
      "Prusy",
      "Bizancjum"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przeciw Polsce wystąpiły Niemcy, Czechy i Ruś Kijowska."
  },
  {
    "id": "R06_UPA_03",
    "section": "Upadek i odbudowa państwa",
    "type": "true_false",
    "prompt": "W 1031 roku Polska została niemal jednocześnie zaatakowana ze wschodu i z zachodu.",
    "options": null,
    "answer": true,
    "explanation": "Atak Niemiec i Rusi Kijowskiej w 1031 roku sprawił, że Polacy znaleźli się w dwa ognie."
  },
  {
    "id": "R06_UPA_04",
    "section": "Upadek i odbudowa państwa",
    "type": "fill_in",
    "prompt": "Po śmierci Mieszka II około roku __________ w Wielkopolsce wybuchło powstanie ludowe, a w roku __________ kraj spustoszył najazd Brzetysława.",
    "options": null,
    "answer": [
      "1038",
      "1039"
    ],
    "altAnswers": [
      [
        "1038",
        "ok. 1038",
        "około 1038"
      ],
      [
        "1039",
        "1039 r."
      ]
    ],
    "explanation": "Powstanie ludowe wybuchło około 1038 roku, a najazd Brzetysława nastąpił w 1039 roku."
  },
  {
    "id": "R06_UPA_05",
    "section": "Upadek i odbudowa państwa",
    "type": "riddle",
    "prompt": "Przydomek Kazimierza, który odnowił państwo po latach chaosu, to...",
    "options": null,
    "answer": "Odnowiciel",
    "altAnswers": [
      "Odnowiciel",
      "Kazimierz Odnowiciel"
    ],
    "explanation": "Kazimierz zyskał przydomek Odnowiciel, ponieważ przy pomocy mieszkańców odbudował państwo."
  },
  {
    "id": "R06_UPA_06",
    "section": "Upadek i odbudowa państwa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Gniezno, Poznań, Ostrów Lednicki, Kraków.",
    "options": null,
    "answer": "Kraków",
    "explanation": "Gniezno, Poznań i Ostrów Lednicki ucierpiały w czasie kryzysu i najazdu; Kraków stał się nową siedzibą Kazimierza."
  },
  {
    "id": "R06_UPA_07",
    "section": "Upadek i odbudowa państwa",
    "type": "scenario",
    "prompt": "Kazimierz wraca do kraju po najeździe Brzetysława. Gniezno i Poznań są zniszczone, więc musi wybrać siedzibę władcy. Które miasto wybiera?",
    "options": [
      "Kraków",
      "Kołobrzeg",
      "Miśnię",
      "Głogów"
    ],
    "answer": 0,
    "explanation": "Kazimierz Odnowiciel ustanowił swoją siedzibę w Krakowie, bo dawne centra władzy były zniszczone."
  },
  {
    "id": "R06_UPA_08",
    "section": "Upadek i odbudowa państwa",
    "type": "match",
    "prompt": "Połącz władcę z działaniem.",
    "options": null,
    "left": [
      "Mieszko II",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały",
      "Brzetysław"
    ],
    "right": [
      "utracił zdobycze Chrobrego",
      "odnowił państwo i przeniósł siedzibę do Krakowa",
      "poparł papieża i koronował się w 1076 roku",
      "spustoszył Wielkopolskę w 1039 roku"
    ],
    "answer": {
      "Mieszko II": "utracił zdobycze Chrobrego",
      "Kazimierz Odnowiciel": "odnowił państwo i przeniósł siedzibę do Krakowa",
      "Bolesław Śmiały": "poparł papieża i koronował się w 1076 roku",
      "Brzetysław": "spustoszył Wielkopolskę w 1039 roku"
    },
    "explanation": "Każda z tych postaci wiąże się z innym etapem kryzysu i odbudowy państwa."
  },
  {
    "id": "R06_UPA_09",
    "section": "Upadek i odbudowa państwa",
    "type": "sort",
    "prompt": "Przyporządkuj działania do władców.",
    "options": null,
    "items": [
      "nadawał wojom ziemię",
      "nadawał ziemię duchowieństwu",
      "poparł Grzegorza VII",
      "skazał biskupa Stanisława na śmierć"
    ],
    "categories": [
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały"
    ],
    "answer": {
      "Kazimierz Odnowiciel": [
        "nadawał wojom ziemię",
        "nadawał ziemię duchowieństwu"
      ],
      "Bolesław Śmiały": [
        "poparł Grzegorza VII",
        "skazał biskupa Stanisława na śmierć"
      ]
    },
    "explanation": "Kazimierz zmienił sposób utrzymania wojska i Kościoła, a Bolesław Śmiały prowadził politykę niezależności i wszedł w konflikt z biskupem."
  },
  {
    "id": "R06_UPA_10",
    "section": "Upadek i odbudowa państwa",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od kryzysu po koronację Bolesława Śmiałego.",
    "options": null,
    "items": [
      "najazd Brzetysława",
      "koronacja Bolesława Śmiałego",
      "atak Niemiec i Rusi na Polskę",
      "powrót Kazimierza Odnowiciela"
    ],
    "answer": [
      "atak Niemiec i Rusi na Polskę",
      "najazd Brzetysława",
      "powrót Kazimierza Odnowiciela",
      "koronacja Bolesława Śmiałego"
    ],
    "explanation": "Kolejność to 1031, 1039, koniec 1039 roku i 1076."
  },
  {
    "id": "R06_UPA_11",
    "section": "Upadek i odbudowa państwa",
    "type": "single_choice",
    "prompt": "Co uzyskał Bolesław Śmiały dzięki poparciu papieża Grzegorza VII w konflikcie z Henrykiem IV?",
    "options": [
      "zgodę na koronację królewską",
      "dzielnicę senioralną",
      "arcybiskupstwo w Magdeburgu",
      "powrót Zbigniewa",
      "zniszczenie Pomorza",
      "trybut od Niemiec"
    ],
    "answer": 0,
    "explanation": "Papież zgodził się na koronację Bolesława, dzięki czemu Polska znów stała się królestwem."
  },
  {
    "id": "R06_UPA_12",
    "section": "Upadek i odbudowa państwa",
    "type": "true_false",
    "prompt": "Egzekucja biskupa Stanisława uspokoiła bunt możnych i umocniła władzę Bolesława Śmiałego.",
    "options": null,
    "answer": false,
    "explanation": "Stało się odwrotnie: bunt wybuchł ze zdwojoną siłą, a Bolesław musiał uciekać na Węgry."
  },
  {
    "id": "R06_KRZ_01",
    "section": "Polska Bolesława Krzywoustego",
    "type": "single_choice",
    "prompt": "Kto został następcą Bolesława Śmiałego?",
    "options": [
      "Władysław Herman",
      "Kazimierz Odnowiciel",
      "Mieszko II",
      "Henryk V",
      "Zbigniew",
      "Otton III"
    ],
    "answer": 0,
    "explanation": "Po Bolesławie Śmiałym władzę objął jego młodszy brat Władysław Herman."
  },
  {
    "id": "R06_KRZ_02",
    "section": "Polska Bolesława Krzywoustego",
    "type": "multi_select",
    "prompt": "Zaznacz informacje prawdziwe o podziale Polski po śmierci Władysława Hermana.",
    "options": [
      "Zbigniew rządził północą",
      "Bolesław Krzywousty rządził południem",
      "bracia prowadzili różną politykę",
      "Polska od razu została królestwem",
      "krajem rządził Otton III"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Po 1102 roku Zbigniew otrzymał północ, Bolesław południe, a ich odmienna polityka doprowadziła do konfliktu."
  },
  {
    "id": "R06_KRZ_03",
    "section": "Polska Bolesława Krzywoustego",
    "type": "true_false",
    "prompt": "Bolesław Krzywousty dążył do większej niezależności od Niemiec niż Zbigniew.",
    "options": null,
    "answer": true,
    "explanation": "Bolesław starał się o niezależność od Niemiec, podczas gdy Zbigniew znosił zależność od nich."
  },
  {
    "id": "R06_KRZ_04",
    "section": "Polska Bolesława Krzywoustego",
    "type": "fill_in",
    "prompt": "Wojna polsko-niemiecka z Henrykiem V wybuchła w roku __________, a ustawa sukcesyjna weszła w życie w roku __________.",
    "options": null,
    "answer": [
      "1109",
      "1138"
    ],
    "altAnswers": [
      [
        "1109",
        "1109 r."
      ],
      [
        "1138",
        "1138 r."
      ]
    ],
    "explanation": "Najazd Henryka V nastąpił w 1109 roku, a ustawa sukcesyjna zaczęła obowiązywać po śmierci Krzywoustego w 1138 roku."
  },
  {
    "id": "R06_KRZ_05",
    "section": "Polska Bolesława Krzywoustego",
    "type": "riddle",
    "prompt": "Gród, którego Henryk V nie zdołał zdobyć w 1109 roku, to...",
    "options": null,
    "answer": "Głogów",
    "altAnswers": [
      "Głogów",
      "Glogow",
      "Głogowa"
    ],
    "explanation": "Wojska niemieckie i czeskie utknęły pod Głogowem, a po niepowodzeniach Henryk V wycofał się do Niemiec.",
    "image": "/img/r06_glogow_oblezenie.jpg"
  },
  {
    "id": "R06_KRZ_06",
    "section": "Polska Bolesława Krzywoustego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Zbigniew, Bolesław Krzywousty, Władysław Herman, św. Wojciech.",
    "options": null,
    "answer": "św. Wojciech",
    "explanation": "Zbigniew, Bolesław Krzywousty i Władysław Herman należą do historii konfliktu po 1102 roku; św. Wojciech wiąże się z czasami Chrobrego."
  },
  {
    "id": "R06_KRZ_07",
    "section": "Polska Bolesława Krzywoustego",
    "type": "scenario",
    "prompt": "Henryk V żąda od Bolesława oddania połowy państwa Zbigniewowi oraz płacenia trybutu albo wysyłania 300 rycerzy. Co robi Bolesław według podręcznika?",
    "options": [
      "odrzuca żądania, bo uzależniłyby Polskę od Niemiec",
      "oddaje całą Polskę Zbigniewowi",
      "prosi Henryka o koronę królewską",
      "ucieka na Ruś Kijowską"
    ],
    "answer": 0,
    "explanation": "Zgoda na żądania Henryka V oznaczałaby zależność od Niemiec, dlatego Krzywousty je odrzucił."
  },
  {
    "id": "R06_KRZ_08",
    "section": "Polska Bolesława Krzywoustego",
    "type": "match",
    "prompt": "Połącz osobę z opisem.",
    "options": null,
    "left": [
      "Zbigniew",
      "Bolesław Krzywousty",
      "Henryk V",
      "Gall Anonim"
    ],
    "right": [
      "przyrodni brat Bolesława, wygnany po wojnie domowej",
      "książę, który obronił niezależność Polski w 1109 roku",
      "król Niemiec, który najechał Polskę",
      "autor Kroniki polskiej na dworze Krzywoustego"
    ],
    "answer": {
      "Zbigniew": "przyrodni brat Bolesława, wygnany po wojnie domowej",
      "Bolesław Krzywousty": "książę, który obronił niezależność Polski w 1109 roku",
      "Henryk V": "król Niemiec, który najechał Polskę",
      "Gall Anonim": "autor Kroniki polskiej na dworze Krzywoustego"
    },
    "explanation": "Te postacie tworzą główną oś opowieści o konflikcie Krzywoustego ze Zbigniewem i Niemcami."
  },
  {
    "id": "R06_KRZ_09",
    "section": "Polska Bolesława Krzywoustego",
    "type": "sort",
    "prompt": "Przyporządkuj postanowienia ustawy sukcesyjnej do ich znaczenia.",
    "options": null,
    "items": [
      "zasada senioratu",
      "dzielnica senioralna",
      "dzielnice dziedziczne",
      "własność dynastii Piastów"
    ],
    "categories": [
      "miało zachować jedność państwa",
      "wzmacniało poszczególnych książąt"
    ],
    "answer": {
      "miało zachować jedność państwa": [
        "zasada senioratu",
        "dzielnica senioralna"
      ],
      "wzmacniało poszczególnych książąt": [
        "dzielnice dziedziczne",
        "własność dynastii Piastów"
      ]
    },
    "explanation": "Seniorat i dzielnica senioralna miały utrzymać zwierzchnictwo seniora, ale dziedziczne dzielnice sprzyjały rozbiciu kraju.",
    "image": "/img/r06_podzial_1138_mapa.jpg"
  },
  {
    "id": "R06_KRZ_10",
    "section": "Polska Bolesława Krzywoustego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia konfliktu Bolesława Krzywoustego ze Zbigniewem w kolejności.",
    "options": null,
    "items": [
      "Zbigniew prosi Henryka V o pomoc",
      "Bolesław wygrywa wojnę domową i wygania Zbigniewa",
      "Bolesław każe oślepić Zbigniewa",
      "po śmierci Władysława Hermana bracia dzielą Polskę"
    ],
    "answer": [
      "po śmierci Władysława Hermana bracia dzielą Polskę",
      "Bolesław wygrywa wojnę domową i wygania Zbigniewa",
      "Zbigniew prosi Henryka V o pomoc",
      "Bolesław każe oślepić Zbigniewa"
    ],
    "explanation": "Najpierw doszło do podziału kraju, potem wojny domowej, prośby Zbigniewa o pomoc i późniejszego oślepienia brata."
  },
  {
    "id": "R06_KRZ_11",
    "section": "Polska Bolesława Krzywoustego",
    "type": "single_choice",
    "prompt": "Do kiedy Bolesław Krzywousty opanował wybrzeże Bałtyku od Pomorza Gdańskiego po ujście Odry?",
    "options": [
      "do 1000 roku",
      "do 1102 roku",
      "do 1123 roku",
      "do 1138 roku",
      "do 1039 roku",
      "do 1076 roku"
    ],
    "answer": 2,
    "explanation": "Podręcznik podaje, że do 1123 roku Krzywousty opanował wybrzeże Bałtyku od Pomorza Gdańskiego po ujście Odry."
  },
  {
    "id": "R06_KRZ_12",
    "section": "Polska Bolesława Krzywoustego",
    "type": "true_false",
    "prompt": "Ustawa sukcesyjna trwale zapobiegła rozpadaniu się Polski na coraz mniejsze księstwa.",
    "options": null,
    "answer": false,
    "explanation": "Młodsi synowie szybko obalili zasadę senioratu, a Polska zaczęła rozpadać się na mniejsze księstwa."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego podległość biskupstwa poznańskiego bezpośrednio papieżowi wzmacniała niezależność państwa Mieszka I?",
    "options": [
      "bo nie podporządkowywała Kościoła w Polsce niemieckiemu arcybiskupowi",
      "bo likwidowała wszystkie daniny dla księcia",
      "bo zmieniała chłopów w rycerzy",
      "bo pozwalała Mieszkowi koronować się w 966 roku",
      "bo zabraniała budowy kościołów",
      "bo znosiła monarchię patrymonialną"
    ],
    "answer": 0,
    "explanation": "Biskupstwo w Poznaniu podlegało samemu papieżowi, a nie niemieckiemu arcybiskupowi, co chroniło niezależność państwa Mieszka."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz te elementy, które pokazują, że zjazd gnieźnieński wzmacniał międzynarodową pozycję Polski.",
    "options": [
      "ustanowienie arcybiskupstwa w Gnieźnie",
      "uznanie Polski za równą państwom chrześcijańskim",
      "diadem i kopia włóczni św. Maurycego dla Bolesława",
      "zrzeczenie się przez Chrobrego tytułu książęcego",
      "podporządkowanie Polski Magdeburgowi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Arcybiskupstwo, gesty Ottona III i uznanie Polski za ważne państwo chrześcijańskie podniosły rangę Chrobrego i jego kraju."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Kazimierz Odnowiciel wzmocnił państwo, ale po jego rządach Polska nadal była zależna od Niemiec.",
    "options": null,
    "answer": true,
    "explanation": "Kazimierz odbudował państwo, lecz musiał uzyskiwać zgodę władcy Niemiec na ważniejsze decyzje."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Bolesław Śmiały poparł papieża __________ w sporze z Henrykiem IV, dzięki czemu w roku __________ koronował się na króla.",
    "options": null,
    "answer": [
      "Grzegorza VII",
      "1076"
    ],
    "altAnswers": [
      [
        "Grzegorza VII",
        "Grzegorz VII"
      ],
      [
        "1076",
        "1076 r."
      ]
    ],
    "explanation": "Bolesław Śmiały wykorzystał konflikt Grzegorza VII z Henrykiem IV, by uzyskać zgodę na koronację."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wojna podjazdowa, zasadzki w lasach, unikanie otwartej bitwy, koronacja w 1025 roku.",
    "options": null,
    "answer": "koronacja w 1025 roku",
    "explanation": "Pierwsze trzy elementy opisują sposób walki z silniejszym przeciwnikiem; koronacja w 1025 roku dotyczy Chrobrego i nie jest taktyką wojenną."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś doradcą Bolesława Krzywoustego przed 1138 rokiem. Książę chce uniknąć wojny między synami, ale każdy z nich ma dostać własną dzielnicę. Który mechanizm z ustawy ma utrzymać jedność kraju?",
    "options": [
      "zasada senioratu",
      "powstanie ludowe",
      "daniny w zbożu",
      "biskupstwo misyjne w Poznaniu"
    ],
    "answer": 0,
    "explanation": "Zasada senioratu miała sprawić, że najstarszy Piast będzie zwierzchnim władcą całego państwa."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz problem państwa z próbą jego rozwiązania.",
    "options": null,
    "left": [
      "zagrożenie atakami pod pozorem nawracania",
      "chaos po 1039 roku",
      "zależność od Niemiec za Kazimierza",
      "ryzyko wojny między synami Krzywoustego"
    ],
    "right": [
      "chrzest Mieszka I",
      "odbudowa państwa przez Kazimierza",
      "polityka Bolesława Śmiałego i koronacja",
      "ustawa sukcesyjna"
    ],
    "answer": {
      "zagrożenie atakami pod pozorem nawracania": "chrzest Mieszka I",
      "chaos po 1039 roku": "odbudowa państwa przez Kazimierza",
      "zależność od Niemiec za Kazimierza": "polityka Bolesława Śmiałego i koronacja",
      "ryzyko wojny między synami Krzywoustego": "ustawa sukcesyjna"
    },
    "explanation": "Każde rozwiązanie odpowiada innemu kryzysowi lub celowi politycznemu opisanych Piastów."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż w kolejności etapy zmiany organizacji wojska od Mieszka I do Kazimierza Odnowiciela.",
    "options": null,
    "items": [
      "władca utrzymuje drużynę z danin",
      "woje zależą od panującego",
      "skarb państwa po kryzysie jest pusty",
      "Kazimierz nadaje wojom ziemię"
    ],
    "answer": [
      "władca utrzymuje drużynę z danin",
      "woje zależą od panującego",
      "skarb państwa po kryzysie jest pusty",
      "Kazimierz nadaje wojom ziemię"
    ],
    "explanation": "Pierwsi Piastowie utrzymywali drużynę, a Kazimierz Odnowiciel po kryzysie zaczął nadawać wojom ziemię, co upodabniało ich do rycerzy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "Polska pierwszych Piastów",
  "icon": "⚔️",
  "sectionOrder": [
    "Początki Polski",
    "Polska Bolesława Chrobrego",
    "W najdawniejszej Polsce",
    "Upadek i odbudowa państwa",
    "Polska Bolesława Krzywoustego",
    "Super trudne"
  ],
  "sectionIcons": {
    "Początki Polski": "🌱",
    "Polska Bolesława Chrobrego": "👑",
    "W najdawniejszej Polsce": "🏘️",
    "Upadek i odbudowa państwa": "♻️",
    "Polska Bolesława Krzywoustego": "🛡️",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
