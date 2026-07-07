// Skróty sekcji:
//   FEU = System feudalny
//   RYC = Epoka rycerzy
//   MIA = Średniowieczne miasto i wieś
//   KOS = Kościół w średniowieczu
//   SZT = Sztuka średniowiecza
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_FEU_01",
    "section": "System feudalny",
    "type": "single_choice",
    "prompt": "Kogo w systemie feudalnym nazywano seniorem?",
    "options": [
      "Osobę otrzymującą lenno",
      "Władcę lub pana nadającego dobra ziemskie",
      "Najbiedniejszego mieszkańca miasta",
      "Przewodniczącego rady miejskiej",
      "Zakonnika przepisującego księgi",
      "Chłopa pracującego na ugorze"
    ],
    "answer": 1,
    "explanation": "Seniorem był król lub książę nadający dobra ziemskie wasalowi i zapewniający mu opiekę."
  },
  {
    "id": "R05_FEU_02",
    "section": "System feudalny",
    "type": "true_false",
    "prompt": "Suzeren stał na szczycie drabiny feudalnej i jako jedyny nie był niczyim wasalem.",
    "options": null,
    "answer": true,
    "image": "/img/r05_drabina_feudalna.jpg",
    "explanation": "Suzerenem był władca stojący najwyżej w hierarchii feudalnej."
  },
  {
    "id": "R05_FEU_03",
    "section": "System feudalny",
    "type": "fill_in",
    "prompt": "Senior przekazywał wasalowi ziemię, czyli __________, a wasal miał służyć mu __________ i radą.",
    "options": null,
    "answer": [
      "lenno",
      "zbrojnie"
    ],
    "altAnswers": [
      [
        "lenno",
        "feudum"
      ],
      [
        "zbrojnie",
        "zbrojnie wraz z wojownikami"
      ]
    ],
    "explanation": "Lenno było ziemią nadaną w zamian za wierną służbę i pomoc zbrojną."
  },
  {
    "id": "R05_FEU_04",
    "section": "System feudalny",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym wyjaśnieniem.",
    "options": null,
    "left": [
      "senior",
      "wasal",
      "lenno",
      "suzeren"
    ],
    "right": [
      "władca stojący na szczycie drabiny feudalnej",
      "ziemia nadawana za służbę",
      "osoba nadająca dobra ziemskie",
      "osoba otrzymująca lenno"
    ],
    "answer": {
      "senior": "osoba nadająca dobra ziemskie",
      "wasal": "osoba otrzymująca lenno",
      "lenno": "ziemia nadawana za służbę",
      "suzeren": "władca stojący na szczycie drabiny feudalnej"
    },
    "image": "/img/r05_drabina_feudalna.jpg",
    "explanation": "Te pojęcia opisują podstawowe zależności społeczeństwa feudalnego."
  },
  {
    "id": "R05_FEU_05",
    "section": "System feudalny",
    "type": "multi_select",
    "prompt": "Zaznacz obowiązki wasala wobec seniora.",
    "options": [
      "Służba zbrojna w razie potrzeby",
      "Wspieranie seniora radą",
      "Kupienie na własny koszt konia, broni i zbroi",
      "Wybieranie burmistrza miasta",
      "Przepisywanie ksiąg w skryptorium",
      "Płacenie cechowi za jakość towarów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wasal miał być wierny seniorowi, służyć mu zbrojnie i wspierać go radą."
  },
  {
    "id": "R05_FEU_06",
    "section": "System feudalny",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: duchowieństwo, rycerstwo, mieszczaństwo, burmistrz, chłopstwo.",
    "options": null,
    "answer": "burmistrz",
    "explanation": "Duchowieństwo, rycerstwo, mieszczaństwo i chłopstwo to stany społeczne, a burmistrz to urząd miejski."
  },
  {
    "id": "R05_FEU_07",
    "section": "System feudalny",
    "type": "scenario",
    "prompt": "Podczas uroczystości pewien możnowładca klęka przed władcą, chwyta go za dłonie i składa mu przysięgę wierności. Jak nazywa się ta ceremonia?",
    "options": [
      "Lokacja",
      "Pasowanie",
      "Hołd lenny",
      "Wolnizna",
      "Jarmark",
      "Kapituła"
    ],
    "answer": 2,
    "image": "/img/r05_hold_lenny.jpg",
    "explanation": "Nadanie lenna odbywało się podczas hołdu lennego, po którym senior wręczał symbol nadania."
  },
  {
    "id": "R05_FEU_08",
    "section": "System feudalny",
    "type": "single_choice",
    "prompt": "Który stan był najliczniejszy w społeczeństwie średniowiecznym?",
    "options": [
      "Duchowieństwo",
      "Rycerstwo",
      "Mieszczaństwo",
      "Chłopstwo",
      "Patrycjat",
      "Możnowładcy"
    ],
    "answer": 3,
    "explanation": "Najliczniejszy stan tworzyli chłopi, którzy użytkowali ziemię panów i składali im daniny."
  },
  {
    "id": "R05_FEU_09",
    "section": "System feudalny",
    "type": "true_false",
    "prompt": "Chłopi składali swoim panom hołd lenny tak samo jak rycerze składali go seniorom.",
    "options": null,
    "answer": false,
    "image": "/img/r05_drabina_feudalna.jpg",
    "explanation": "Chłopi podlegali właścicielowi ziemi, ale nie składali mu hołdu lennego."
  },
  {
    "id": "R05_FEU_10",
    "section": "System feudalny",
    "type": "sort",
    "prompt": "Przyporządkuj prawa lub obowiązki do właściwych stanów społecznych.",
    "options": null,
    "items": [
      "własne sądy kościelne",
      "prawo posiadania ziemi i pełnienia funkcji państwowych",
      "prawo do samorządu miejskiego",
      "daniny i praca w majątku pana"
    ],
    "categories": [
      "duchowieństwo",
      "rycerstwo",
      "mieszczaństwo",
      "chłopstwo"
    ],
    "answer": {
      "duchowieństwo": [
        "własne sądy kościelne"
      ],
      "rycerstwo": [
        "prawo posiadania ziemi i pełnienia funkcji państwowych"
      ],
      "mieszczaństwo": [
        "prawo do samorządu miejskiego"
      ],
      "chłopstwo": [
        "daniny i praca w majątku pana"
      ]
    },
    "explanation": "Stany różniły się prawami i obowiązkami, a część z nich otrzymała szczególne przywileje."
  },
  {
    "id": "R05_FEU_11",
    "section": "System feudalny",
    "type": "riddle",
    "prompt": "Średniowieczne społeczeństwo oparte na zależnościach seniorów i wasali to społeczeństwo...",
    "options": null,
    "answer": "społeczeństwo feudalne",
    "altAnswers": [
      "feudalne",
      "spoleczenstwo feudalne",
      "społeczeństwo feudalne"
    ],
    "explanation": "Nazwa społeczeństwo feudalne pochodzi od łacińskiego określenia lenna: feudum."
  },
  {
    "id": "R05_FEU_12",
    "section": "System feudalny",
    "type": "multi_select",
    "prompt": "Zaznacz stany, które dzięki przywilejom zdobyły wpływ na rządy w państwie.",
    "options": [
      "Duchowieństwo",
      "Rycerstwo",
      "Chłopstwo",
      "Plebs",
      "Mieszkańcy wsi bez ziemi",
      "Partacze"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Podsumowanie tematu wskazuje duchownych i rycerzy jako stany, które uzyskały wpływ na rządy."
  },
  {
    "id": "R05_RYC_01",
    "section": "Epoka rycerzy",
    "type": "single_choice",
    "prompt": "Jaki był główny obowiązek średniowiecznych rycerzy?",
    "options": [
      "Przepisywanie ksiąg",
      "Ochrona państwa i mieszkańców",
      "Prowadzenie rady miejskiej",
      "Pobieranie danin w mieście",
      "Uprawa pól pana",
      "Budowa sukiennic"
    ],
    "answer": 1,
    "explanation": "Rycerze mieli chronić państwo i jego mieszkańców w razie wojny lub najazdu."
  },
  {
    "id": "R05_RYC_02",
    "section": "Epoka rycerzy",
    "type": "multi_select",
    "prompt": "Zaznacz cechy idealnego średniowiecznego rycerza.",
    "options": [
      "Odwaga",
      "Prawdomówność",
      "Pobożność",
      "Opieka nad bezbronnymi",
      "Unikanie wszelkiej służby",
      "Zdrada seniora"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ideał rycerski łączył odwagę i umiejętność walki z honorem, pobożnością i opieką nad słabszymi."
  },
  {
    "id": "R05_RYC_03",
    "section": "Epoka rycerzy",
    "type": "sequence",
    "prompt": "Ułóż etapy drogi chłopca z rycerskiego rodu do rycerstwa.",
    "options": null,
    "items": [
      "pasowanie na rycerza",
      "służba jako paź",
      "służba jako giermek",
      "przyjęcie do grona rycerzy"
    ],
    "answer": [
      "służba jako paź",
      "służba jako giermek",
      "pasowanie na rycerza",
      "przyjęcie do grona rycerzy"
    ],
    "image": "/img/r05_pasowanie_rycerza.jpg",
    "explanation": "Chłopiec najpierw był paziem, potem giermkiem, a po pasowaniu stawał się rycerzem."
  },
  {
    "id": "R05_RYC_04",
    "section": "Epoka rycerzy",
    "type": "fill_in",
    "prompt": "Około __________ roku życia chłopiec służył jako __________, a około __________ roku życia mógł zostać __________.",
    "options": null,
    "answer": [
      "7",
      "paź",
      "14",
      "giermkiem"
    ],
    "altAnswers": [
      [
        "7",
        "siódmego",
        "siedmiu"
      ],
      [
        "paź",
        "paziem"
      ],
      [
        "14",
        "czternastego",
        "czternastu"
      ],
      [
        "giermkiem",
        "giermek"
      ]
    ],
    "explanation": "Droga do rycerstwa zaczynała się od służby pazia, a później giermka."
  },
  {
    "id": "R05_RYC_05",
    "section": "Epoka rycerzy",
    "type": "match",
    "prompt": "Połącz element wyposażenia rycerza z jego funkcją.",
    "options": null,
    "left": [
      "hełm",
      "zbroja",
      "tarcza",
      "ostrogi",
      "przyłbica"
    ],
    "right": [
      "ochraniała ciało",
      "służyły do kierowania koniem",
      "chronił głowę",
      "ruchoma osłona twarzy",
      "chroniła i mogła przedstawiać herb"
    ],
    "answer": {
      "hełm": "chronił głowę",
      "zbroja": "ochraniała ciało",
      "tarcza": "chroniła i mogła przedstawiać herb",
      "ostrogi": "służyły do kierowania koniem",
      "przyłbica": "ruchoma osłona twarzy"
    },
    "image": "/img/r05_wyposazenie_rycerza.jpg",
    "explanation": "Wyposażenie rycerza chroniło go w walce, pomagało w jeździe konnej i świadczyło o pozycji społecznej."
  },
  {
    "id": "R05_RYC_06",
    "section": "Epoka rycerzy",
    "type": "riddle",
    "prompt": "Charakterystyczny znak wyróżniający rycerza, z czasem dziedziczny dla rodu, to...",
    "options": null,
    "answer": "herb",
    "altAnswers": [
      "herb",
      "herb rycerski"
    ],
    "explanation": "Herb był znakiem rycerza i rodu, umieszczanym między innymi na tarczy."
  },
  {
    "id": "R05_RYC_07",
    "section": "Epoka rycerzy",
    "type": "true_false",
    "prompt": "Rzucenie rękawicy na ziemię oznaczało wyzwanie przeciwnika na pojedynek.",
    "options": null,
    "answer": true,
    "image": "/img/r05_wyposazenie_rycerza.jpg",
    "explanation": "W infografice o rycerzu wyjaśniono, że rzucona rękawica była znakiem wyzwania na pojedynek."
  },
  {
    "id": "R05_RYC_08",
    "section": "Epoka rycerzy",
    "type": "scenario",
    "prompt": "Czternastoletni chłopiec towarzyszy doświadczonemu wojownikowi, dba o broń, zbroję i konia, a podczas wypraw wojennych jest przy swoim panu. Kim jest?",
    "options": [
      "Paziem",
      "Giermkiem",
      "Opatem",
      "Patrycjuszem",
      "Sołtysem",
      "Kopistą"
    ],
    "answer": 1,
    "image": "/img/r05_pasowanie_rycerza.jpg",
    "explanation": "Giermek uczył się sztuki walki i odpowiadał za gotowość rynsztunku oraz konia bojowego."
  },
  {
    "id": "R05_RYC_09",
    "section": "Epoka rycerzy",
    "type": "single_choice",
    "prompt": "Co otrzymywał młodzieniec podczas pasowania na rycerza?",
    "options": [
      "Pas z mieczem i ostrogi",
      "Dokument lokacyjny",
      "Pług i bronę",
      "Sukno i przyprawy",
      "Regułę zakonną",
      "Klucze do ratusza"
    ],
    "answer": 0,
    "image": "/img/r05_pasowanie_rycerza.jpg",
    "explanation": "Podczas pasowania nowy rycerz otrzymywał pas z mieczem i ostrogi."
  },
  {
    "id": "R05_RYC_10",
    "section": "Epoka rycerzy",
    "type": "multi_select",
    "prompt": "Zaznacz powody udziału rycerzy w turniejach wymienione w podręczniku.",
    "options": [
      "Chęć zdobycia sławy",
      "Wykonywanie ćwiczeń wojskowych",
      "Zamiłowanie do walki",
      "Służenie damom",
      "Nadzieja na korzyści materialne",
      "Uzyskanie święceń kapłańskich"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Turnieje dawały sławę, ćwiczenie wojskowe, przyjemność walki, uznanie dam i szansę na zysk."
  },
  {
    "id": "R05_RYC_11",
    "section": "Epoka rycerzy",
    "type": "fill_in",
    "prompt": "W starciu konnych rycerzy chodziło o zrzucenie przeciwnika z __________, używając tępo zakończonych __________.",
    "options": null,
    "answer": [
      "siodła",
      "kopii"
    ],
    "altAnswers": [
      [
        "siodła",
        "siodlo"
      ],
      [
        "kopii",
        "kopie"
      ]
    ],
    "explanation": "Turniejowe kopie miały tępe zakończenia, aby ograniczyć ryzyko zranienia współzawodnika."
  },
  {
    "id": "R05_RYC_12",
    "section": "Epoka rycerzy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Roland, Zawisza Czarny, William Marshal, święty Benedykt.",
    "options": null,
    "answer": "święty Benedykt",
    "explanation": "Roland, Zawisza Czarny i William Marshal są w rozdziale związani z kulturą rycerską, a święty Benedykt z zakonami."
  },
  {
    "id": "R05_MIA_01",
    "section": "Średniowieczne miasto i wieś",
    "type": "single_choice",
    "prompt": "Czym była lokacja w średniowieczu?",
    "options": [
      "Utworzeniem miasta lub wsi",
      "Ślubami zakonnymi",
      "Zawodami rycerskimi",
      "Systemem zależności seniorów",
      "Zdobieniem ksiąg",
      "Podziałem pola na trzy części"
    ],
    "answer": 0,
    "explanation": "Lokacją nazywano utworzenie miasta lub wsi na podstawie umowy i dokumentu lokacyjnego."
  },
  {
    "id": "R05_MIA_02",
    "section": "Średniowieczne miasto i wieś",
    "type": "true_false",
    "prompt": "Pierwszych lokacji na ziemiach polskich dokonano już na początku XIII wieku.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że pierwsze lokacje na ziemiach polskich miały miejsce na początku XIII wieku."
  },
  {
    "id": "R05_MIA_03",
    "section": "Średniowieczne miasto i wieś",
    "type": "fill_in",
    "prompt": "Dokument lokacyjny zawierał prawa i __________ mieszkańców oraz wytyczne dotyczące placów i __________.",
    "options": null,
    "answer": [
      "obowiązki",
      "ulic"
    ],
    "altAnswers": [
      [
        "obowiązki",
        "obowiazki"
      ],
      [
        "ulic",
        "przebiegu ulic"
      ]
    ],
    "explanation": "Dokument lokacyjny określał zasady funkcjonowania nowej miejscowości oraz jej układ przestrzenny."
  },
  {
    "id": "R05_MIA_04",
    "section": "Średniowieczne miasto i wieś",
    "type": "match",
    "prompt": "Połącz urząd lub organ władzy z jego zadaniem.",
    "options": null,
    "left": [
      "wójt",
      "rada miejska",
      "burmistrz",
      "ława miejska",
      "sołtys"
    ],
    "right": [
      "przewodził wsi i ławie wiejskiej",
      "wybierała burmistrza i uchwalała prawa",
      "przedstawiciel właściciela miasta",
      "dbał o przestrzeganie praw miejskich",
      "sąd miejski"
    ],
    "answer": {
      "wójt": "przedstawiciel właściciela miasta",
      "rada miejska": "wybierała burmistrza i uchwalała prawa",
      "burmistrz": "dbał o przestrzeganie praw miejskich",
      "ława miejska": "sąd miejski",
      "sołtys": "przewodził wsi i ławie wiejskiej"
    },
    "explanation": "Średniowieczne miasto i wieś miały własnych urzędników oraz sądy rozstrzygające spory mieszkańców."
  },
  {
    "id": "R05_MIA_05",
    "section": "Średniowieczne miasto i wieś",
    "type": "multi_select",
    "prompt": "Zaznacz organy samorządu miejskiego wymienione w podsumowaniu tematu.",
    "options": [
      "Rada miejska",
      "Burmistrz",
      "Ława miejska",
      "Sołtys",
      "Giermek",
      "Opat"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Samorząd miejski składał się z rady miejskiej, burmistrza i ławy miejskiej."
  },
  {
    "id": "R05_MIA_06",
    "section": "Średniowieczne miasto i wieś",
    "type": "sort",
    "prompt": "Przyporządkuj grupy mieszczan do ich opisów.",
    "options": null,
    "items": [
      "najbogatsi kupcy",
      "właściciele nieruchomości",
      "drobni kupcy",
      "rzemieślnicy z własnymi warsztatami",
      "żebracy",
      "ludzie najmujący się do pracy"
    ],
    "categories": [
      "patrycjusze",
      "pospólstwo",
      "plebs"
    ],
    "answer": {
      "patrycjusze": [
        "najbogatsi kupcy",
        "właściciele nieruchomości"
      ],
      "pospólstwo": [
        "drobni kupcy",
        "rzemieślnicy z własnymi warsztatami"
      ],
      "plebs": [
        "żebracy",
        "ludzie najmujący się do pracy"
      ]
    },
    "explanation": "Mieszczanie byli zróżnicowani majątkowo: najbogatszy był patrycjat, najliczniejsze pospólstwo, a najbiedniejszy plebs."
  },
  {
    "id": "R05_MIA_07",
    "section": "Średniowieczne miasto i wieś",
    "type": "riddle",
    "prompt": "Organizacja zrzeszająca rzemieślników jednej specjalności to...",
    "options": null,
    "answer": "cech",
    "altAnswers": [
      "cech",
      "cech rzemieślniczy"
    ],
    "explanation": "Cech określał wielkość produkcji, ceny towarów i dbał o jakość wyrobów."
  },
  {
    "id": "R05_MIA_08",
    "section": "Średniowieczne miasto i wieś",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: rynek, ratusz, sukiennice, barbakan, radło.",
    "options": null,
    "answer": "radło",
    "explanation": "Radło było narzędziem rolniczym, a pozostałe elementy wiążą się z zabudową miasta."
  },
  {
    "id": "R05_MIA_09",
    "section": "Średniowieczne miasto i wieś",
    "type": "true_false",
    "prompt": "Partaczami nazywano rzemieślników nienależących do cechu, którzy wykonywali gorszej jakości produkty z tańszych materiałów.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyjaśnia, że partacze działali poza cechem i wykonywali tańsze, gorsze wyroby."
  },
  {
    "id": "R05_MIA_10",
    "section": "Średniowieczne miasto i wieś",
    "type": "scenario",
    "prompt": "Kupiec wchodzi do miejskiej hali targowej, w której handluje się suknem. W jakim miejscu się znajduje?",
    "options": [
      "W sukiennicach",
      "W barbakanie",
      "W skryptorium",
      "W apsydzie",
      "W dormitorium",
      "W ławie wiejskiej"
    ],
    "answer": 0,
    "image": "/img/r05_sredniowieczne_miasto.jpg",
    "explanation": "Sukiennice były halą targową przeznaczoną do handlu suknem."
  },
  {
    "id": "R05_MIA_11",
    "section": "Średniowieczne miasto i wieś",
    "type": "sequence",
    "prompt": "Ułóż prace prowadzące od wysiania zboża do uzyskania mąki.",
    "options": null,
    "items": [
      "mielenie ziarna",
      "siew zboża",
      "młócenie zboża",
      "ścinanie dojrzałego zboża",
      "przykrycie ziarna broną"
    ],
    "answer": [
      "siew zboża",
      "przykrycie ziarna broną",
      "ścinanie dojrzałego zboża",
      "młócenie zboża",
      "mielenie ziarna"
    ],
    "explanation": "W rolnictwie najpierw wysiewano ziarno, potem bronowano pole, ścinano zboże, młócono je i mielono na mąkę."
  },
  {
    "id": "R05_MIA_12",
    "section": "Średniowieczne miasto i wieś",
    "type": "fill_in",
    "prompt": "W trójpolówce jedną część pola obsiewano zbożem __________, drugą zbożem __________, a trzecia była __________.",
    "options": null,
    "answer": [
      "ozimym",
      "jarym",
      "ugorem"
    ],
    "altAnswers": [
      [
        "ozimym",
        "ozime"
      ],
      [
        "jarym",
        "jare"
      ],
      [
        "ugorem",
        "ugór"
      ]
    ],
    "image": "/img/r05_trojpolowka.jpg",
    "explanation": "Trójpolówka zabezpieczała glebę przed wyjałowieniem i zwiększała plony."
  },
  {
    "id": "R05_KOS_01",
    "section": "Kościół w średniowieczu",
    "type": "single_choice",
    "prompt": "Jaki język był w średniowieczu językiem liturgii kościelnej i dyplomacji?",
    "options": [
      "Łacina",
      "Język francuski",
      "Język polski",
      "Greka nowożytna",
      "Arabski",
      "Niemiecki"
    ],
    "answer": 0,
    "explanation": "Duchowni umieli czytać i pisać po łacinie, która była językiem liturgii i dyplomacji."
  },
  {
    "id": "R05_KOS_02",
    "section": "Kościół w średniowieczu",
    "type": "multi_select",
    "prompt": "Zaznacz role duchowieństwa w średniowieczu opisane w podręczniku.",
    "options": [
      "Odprawianie nabożeństw",
      "Udzielanie sakramentów",
      "Doradzanie władcom",
      "Pełnienie funkcji urzędników",
      "Organizowanie turniejów rycerskich",
      "Kierowanie ławą wiejską"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Duchowni odprawiali nabożeństwa, udzielali sakramentów oraz pełnili funkcje doradców i urzędników."
  },
  {
    "id": "R05_KOS_03",
    "section": "Kościół w średniowieczu",
    "type": "true_false",
    "prompt": "Duchowieństwo było w średniowieczu jedyną wykształconą grupą ludności.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że duchowni tworzyli jedyną grupę posiadającą wykształcenie."
  },
  {
    "id": "R05_KOS_04",
    "section": "Kościół w średniowieczu",
    "type": "riddle",
    "prompt": "Celowe wyrzeczenie się wygód, a nawet zadawanie sobie cierpień dla życia wiecznego, to...",
    "options": null,
    "answer": "asceza",
    "altAnswers": [
      "asceza"
    ],
    "explanation": "Asceza była jedną z form okazywania religijności przez ludzi średniowiecza."
  },
  {
    "id": "R05_KOS_05",
    "section": "Kościół w średniowieczu",
    "type": "fill_in",
    "prompt": "Zakonnicy składali śluby __________, __________ i posłuszeństwa.",
    "options": null,
    "answer": [
      "ubóstwa",
      "celibatu"
    ],
    "altAnswers": [
      [
        "ubóstwa",
        "ubostwa"
      ],
      [
        "celibatu"
      ]
    ],
    "explanation": "Śluby zakonne oznaczały rezygnację z majątku osobistego, życia rodzinnego i zobowiązanie do posłuszeństwa władzom zgromadzenia."
  },
  {
    "id": "R05_KOS_06",
    "section": "Kościół w średniowieczu",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "options": null,
    "left": [
      "zakon",
      "klasztor",
      "reguła zakonna",
      "opat",
      "skryptorium"
    ],
    "right": [
      "siedziba zakonników",
      "pomieszczenie do przepisywania ksiąg",
      "przełożony klasztoru",
      "wspólnota religijna",
      "zbiór zasad życia zgromadzenia"
    ],
    "answer": {
      "zakon": "wspólnota religijna",
      "klasztor": "siedziba zakonników",
      "reguła zakonna": "zbiór zasad życia zgromadzenia",
      "opat": "przełożony klasztoru",
      "skryptorium": "pomieszczenie do przepisywania ksiąg"
    },
    "image": "/img/r05_klasztor_skryptorium.jpg",
    "explanation": "Pojęcia te opisują życie średniowiecznych wspólnot zakonnych."
  },
  {
    "id": "R05_KOS_07",
    "section": "Kościół w średniowieczu",
    "type": "single_choice",
    "prompt": "Który zakon założył klasztor na Monte Cassino w VI wieku?",
    "options": [
      "Benedyktyni",
      "Franciszkanie",
      "Dominikanie",
      "Klaryski",
      "Templariusze",
      "Cech tkaczy"
    ],
    "answer": 0,
    "image": "/img/r05_zakony_sredniowieczne.jpg",
    "explanation": "Święty Benedykt założył na Monte Cassino klasztor benedyktynów."
  },
  {
    "id": "R05_KOS_08",
    "section": "Kościół w średniowieczu",
    "type": "true_false",
    "prompt": "Regułę zakonu franciszkanów zatwierdził w 1223 roku papież Honoriusz III.",
    "options": null,
    "answer": true,
    "explanation": "Tekst źródłowy w rozdziale podaje, że regułę franciszkanów oficjalnie zatwierdzono w 1223 roku."
  },
  {
    "id": "R05_KOS_09",
    "section": "Kościół w średniowieczu",
    "type": "multi_select",
    "prompt": "Zaznacz zajęcia średniowiecznych zakonników.",
    "options": [
      "Modlitwa",
      "Przepisywanie ksiąg",
      "Prowadzenie szpitali i przytułków",
      "Uprawa roli i hodowla",
      "Udział w radzie miejskiej jako patrycjusze",
      "Pobieranie danin jako wójt"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_klasztor_skryptorium.jpg",
    "explanation": "Zakonnicy modlili się, pracowali, pomagali ubogim i chorym oraz przepisywali księgi; część utrzymywała się też z uprawy i hodowli."
  },
  {
    "id": "R05_KOS_10",
    "section": "Kościół w średniowieczu",
    "type": "scenario",
    "prompt": "Mnich siedzi w specjalnym pomieszczeniu, używa gęsiego pióra i zapisuje tekst na pergaminowych kartach. Co robi?",
    "options": [
      "Przepisuje księgę",
      "Zakłada wieś",
      "Rządzi jako burmistrz",
      "Toczy pojedynek",
      "Obsiewa ugór",
      "Zamyka barbakan"
    ],
    "answer": 0,
    "image": "/img/r05_klasztor_skryptorium.jpg",
    "explanation": "Kopiści w skryptoriach ręcznie przepisywali księgi, czasem przez wiele miesięcy lub lat."
  },
  {
    "id": "R05_KOS_11",
    "section": "Kościół w średniowieczu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: benedyktyni, cystersi, franciszkanie, dominikanie, patrycjusze.",
    "options": null,
    "answer": "patrycjusze",
    "explanation": "Benedyktyni, cystersi, franciszkanie i dominikanie to zakony, a patrycjusze to najbogatsi mieszczanie."
  },
  {
    "id": "R05_KOS_12",
    "section": "Kościół w średniowieczu",
    "type": "single_choice",
    "prompt": "Który zakon został założony przez świętego Franciszka z Asyżu?",
    "options": [
      "Franciszkanie",
      "Benedyktyni",
      "Cystersi",
      "Dominikanie",
      "Klaryski",
      "Patrycjusze"
    ],
    "answer": 0,
    "image": "/img/r05_zakony_sredniowieczne.jpg",
    "explanation": "Święty Franciszek opracował regułę braci mniejszych, czyli franciszkanów."
  },
  {
    "id": "R05_SZT_01",
    "section": "Sztuka średniowiecza",
    "type": "single_choice",
    "prompt": "Jakie było główne zadanie sztuki średniowiecznej?",
    "options": [
      "Głoszenie chwały Boga i nauczanie wiary",
      "Reklamowanie jarmarków",
      "Opisywanie praw cechowych",
      "Ułatwianie trójpolówki",
      "Szkolenie giermków",
      "Liczenie danin miejskich"
    ],
    "answer": 0,
    "explanation": "Sztuka średniowieczna miała głosić chwałę Boga, przybliżać Biblię i wyjaśniać zasady wiary."
  },
  {
    "id": "R05_SZT_02",
    "section": "Sztuka średniowiecza",
    "type": "riddle",
    "prompt": "Łacińskie określenie biblia pauperum oznacza po polsku...",
    "options": null,
    "answer": "Biblia dla ubogich",
    "altAnswers": [
      "Biblia dla ubogich",
      "biblia dla ubogich",
      "Biblia ubogich"
    ],
    "explanation": "Biblia pauperum, czyli Biblia dla ubogich, pomagała niepiśmiennym wiernym poznawać treść Pisma Świętego."
  },
  {
    "id": "R05_SZT_03",
    "section": "Sztuka średniowiecza",
    "type": "true_false",
    "prompt": "Wiele średniowiecznych dzieł sztuki jest anonimowych, ponieważ twórcy pracowali na chwałę Boga, a nie dla osobistej sławy.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyjaśnia, że artyści często nie podpisywali swoich prac z powodów religijnych."
  },
  {
    "id": "R05_SZT_04",
    "section": "Sztuka średniowiecza",
    "type": "multi_select",
    "prompt": "Zaznacz tematy typowe dla dzieł sztuki średniowiecznej opisane w rozdziale.",
    "options": [
      "Historie z Pisma Świętego",
      "Postaci znane z Biblii",
      "Żywoty świętych",
      "Sceny religijne",
      "Nowoczesne fabryki",
      "Rozkłady jazdy pociągów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Średniowieczni twórcy najczęściej przedstawiali historie i postaci biblijne oraz żywoty świętych."
  },
  {
    "id": "R05_SZT_05",
    "section": "Sztuka średniowiecza",
    "type": "match",
    "prompt": "Połącz element architektury romańskiej z opisem.",
    "options": null,
    "left": [
      "grube mury",
      "małe okna",
      "łuki romańskie",
      "wieże",
      "apsyda"
    ],
    "right": [
      "pełniły funkcję obronną i obserwacyjną",
      "miały kształt półkola",
      "pomieszczenie przylegające do kościoła",
      "dźwigały ciężar masywnej konstrukcji",
      "wpuszczały niewiele światła"
    ],
    "answer": {
      "grube mury": "dźwigały ciężar masywnej konstrukcji",
      "małe okna": "wpuszczały niewiele światła",
      "łuki romańskie": "miały kształt półkola",
      "wieże": "pełniły funkcję obronną i obserwacyjną",
      "apsyda": "pomieszczenie przylegające do kościoła"
    },
    "image": "/img/r05_architektura_romanska_gotycka.jpg",
    "explanation": "Styl romański wyróżniały masywne konstrukcje, grube mury, małe okna i półkoliste łuki."
  },
  {
    "id": "R05_SZT_06",
    "section": "Sztuka średniowiecza",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do stylu romańskiego lub gotyckiego.",
    "options": null,
    "items": [
      "grube mury",
      "małe okna",
      "półkoliste łuki",
      "wysokie okna",
      "witraże",
      "łuki oporowe i przypory",
      "strzeliste wieże",
      "budowle z kamienia"
    ],
    "categories": [
      "styl romański",
      "styl gotycki"
    ],
    "answer": {
      "styl romański": [
        "grube mury",
        "małe okna",
        "półkoliste łuki",
        "budowle z kamienia"
      ],
      "styl gotycki": [
        "wysokie okna",
        "witraże",
        "łuki oporowe i przypory",
        "strzeliste wieże"
      ]
    },
    "image": "/img/r05_architektura_romanska_gotycka.jpg",
    "explanation": "Styl romański był masywny i kamienny, a gotyk dążył do strzelistości, wysokich okien i lżejszej konstrukcji."
  },
  {
    "id": "R05_SZT_07",
    "section": "Sztuka średniowiecza",
    "type": "single_choice",
    "prompt": "Katedra Notre Dame w Paryżu jest w rozdziale podana jako przykład którego stylu?",
    "options": [
      "Gotyckiego",
      "Romańskiego",
      "Barokowego",
      "Renesansowego",
      "Klasycystycznego",
      "Bizantyjskiego"
    ],
    "answer": 0,
    "image": "/img/r05_architektura_romanska_gotycka.jpg",
    "explanation": "Notre Dame w Paryżu została pokazana jako jeden z najważniejszych zabytków gotyku."
  },
  {
    "id": "R05_SZT_08",
    "section": "Sztuka średniowiecza",
    "type": "fill_in",
    "prompt": "Styl romański zaczął się w Europie w __________ wieku, a nowe rozwiązania gotyckie wprowadzono we Francji w połowie __________ wieku.",
    "options": null,
    "answer": [
      "X",
      "XII"
    ],
    "altAnswers": [
      [
        "X",
        "10",
        "dziesiątym"
      ],
      [
        "XII",
        "12",
        "dwunastym"
      ]
    ],
    "image": "/img/r05_architektura_romanska_gotycka.jpg",
    "explanation": "Rozdział podaje, że romanizm rozpoczął się w X stuleciu, a gotyk wyrósł z rozwiązań wprowadzonych we Francji w połowie XII stulecia."
  },
  {
    "id": "R05_SZT_09",
    "section": "Sztuka średniowiecza",
    "type": "multi_select",
    "prompt": "Zaznacz dziedziny lub dzieła sztuki średniowiecznej wymienione w rozdziale.",
    "options": [
      "Relikwiarze",
      "Ołtarze",
      "Miniatury książkowe",
      "Rzeźby",
      "Sztuka złotnicza",
      "Fotografia prasowa"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r05_oltarz_sredniowieczny.jpg",
    "explanation": "Rozdział pokazuje rozwój złotnictwa, malarstwa, rzeźby i miniatur książkowych."
  },
  {
    "id": "R05_SZT_10",
    "section": "Sztuka średniowiecza",
    "type": "single_choice",
    "prompt": "Co jest główną sceną ołtarza Wita Stwosza z kościoła Mariackiego w Krakowie?",
    "options": [
      "Zaśnięcie Marii Panny",
      "Hołd lenny",
      "Lokacja Krakowa",
      "Turniej rycerski",
      "Sąd ławy miejskiej",
      "Trójpolówka"
    ],
    "answer": 0,
    "image": "/img/r05_oltarz_sredniowieczny.jpg",
    "explanation": "Główną sceną ołtarza Wita Stwosza jest Zaśnięcie Marii Panny."
  },
  {
    "id": "R05_SZT_11",
    "section": "Sztuka średniowiecza",
    "type": "true_false",
    "prompt": "W kościołach gotyckich okna były większe niż w romańskich, a witraże wpuszczały do wnętrza kolorowe światło.",
    "options": null,
    "answer": true,
    "image": "/img/r05_architektura_romanska_gotycka.jpg",
    "explanation": "Gotyk stosował wysokie okna i witraże, które tworzyły w świątyni wyjątkową atmosferę."
  },
  {
    "id": "R05_SZT_12",
    "section": "Sztuka średniowiecza",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: relikwiarz, ołtarz, miniatura, burmistrz, rzeźba.",
    "options": null,
    "answer": "burmistrz",
    "explanation": "Relikwiarz, ołtarz, miniatura i rzeźba są związane ze sztuką średniowieczną, a burmistrz z samorządem miejskim."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak po łacinie określano lenno w systemie feudalnym?",
    "options": [
      "Feudum",
      "Patrycjat",
      "Scriptorium",
      "Castrum",
      "Forum",
      "Capitulum"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że lenno po łacinie nazywano feudum."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz symbole nadania lenna wymienione przy opisie hołdu lennego.",
    "options": [
      "Włócznia",
      "Chorągiew",
      "Dokument potwierdzający umowę",
      "Krzyż harcerski",
      "Pług",
      "Ratusz"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r05_hold_lenny.jpg",
    "explanation": "Na koniec hołdu senior wręczał symbol nadania lenna: włócznię, chorągiew lub dokument."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W średniowiecznej Hiszpanii jeden średniej klasy rumak mógł być wart tyle co 40 krów.",
    "options": null,
    "answer": true,
    "explanation": "W tekście o turniejach podano, że przegrana mogła być kosztowna, bo koń bojowy miał ogromną wartość."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rycerz William Marshal startuje w turniejach, pokonuje wielu przeciwników, przejmuje ich konie i zbroje oraz prowadzi listę okupów. Który powód udziału w turniejach najlepiej pokazuje ta sytuacja?",
    "options": [
      "Nadzieja na korzyści materialne",
      "Przyjęcie święceń",
      "Uzyskanie wolnizny",
      "Uchwalenie prawa miejskiego",
      "Przepisywanie ksiąg",
      "Złożenie ślubów zakonnych"
    ],
    "answer": 0,
    "explanation": "Przykład Williama Marshala pokazuje, że turnieje mogły być sposobem zdobycia dużych korzyści materialnych."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W nowo założonym mieście zasadźca zostawał __________, a na czele wsi stał __________.",
    "options": null,
    "answer": [
      "wójtem",
      "sołtys"
    ],
    "altAnswers": [
      [
        "wójtem",
        "wojtem",
        "wójt"
      ],
      [
        "sołtys",
        "soltys",
        "sołtysem"
      ]
    ],
    "explanation": "Zasadźca miasta zostawał wójtem, natomiast zasadźca wsi pełnił funkcję sołtysa."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Okres po założeniu wsi, w którym osadnicy byli zwolnieni z obowiązku składania danin, to...",
    "options": null,
    "answer": "wolnizna",
    "altAnswers": [
      "wolnizna",
      "wolnizną"
    ],
    "explanation": "Wolnizna miała zachęcać osadników i ułatwiać im początki życia w nowej wsi."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz mniej oczywiste pojęcie z rozdziału z jego znaczeniem.",
    "options": null,
    "left": [
      "szafarz",
      "skarbnik",
      "jałmużna",
      "post",
      "celibat"
    ],
    "right": [
      "powstrzymanie się od spożywania określonych pokarmów",
      "zarządzał kuchnią i gospodarstwem klasztoru",
      "bezżenność duchownych",
      "pomoc rozdawana ubogim",
      "dbał o finanse klasztoru"
    ],
    "answer": {
      "szafarz": "zarządzał kuchnią i gospodarstwem klasztoru",
      "skarbnik": "dbał o finanse klasztoru",
      "jałmużna": "pomoc rozdawana ubogim",
      "post": "powstrzymanie się od spożywania określonych pokarmów",
      "celibat": "bezżenność duchownych"
    },
    "explanation": "Rozdział wyjaśnia zarówno pojęcia społeczne, jak i te związane z klasztorem i życiem religijnym."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który święty jest dziś czczony jako patron ekologów według rozdziału?",
    "options": [
      "Święty Franciszek",
      "Święty Benedykt",
      "Święty Dominik",
      "Święty Zygmunt",
      "Święty Roland",
      "Święty Honoriusz"
    ],
    "answer": 0,
    "image": "/img/r05_zakony_sredniowieczne.jpg",
    "explanation": "Rozdział podaje, że święty Franciszek kochał przyrodę i nazywał zwierzęta braćmi, dlatego jest patronem ekologów."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Witraże gotyckie wykonywano z bezbarwnego szkła, aby nie zmieniały światła w kościele.",
    "options": null,
    "answer": false,
    "image": "/img/r05_architektura_romanska_gotycka.jpg",
    "explanation": "Witraże wykonywano z kawałków barwnego szkła i przepuszczały one do wnętrza kolorowe światło."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj zabytki lub dzieła do dziedziny sztuki.",
    "options": null,
    "items": [
      "relikwiarz świętego Zygmunta",
      "ołtarz franciszkański z Torunia",
      "ołtarz Wita Stwosza",
      "miniatury w księgach"
    ],
    "categories": [
      "złotnictwo",
      "malarstwo",
      "rzeźba",
      "książkarstwo"
    ],
    "answer": {
      "złotnictwo": [
        "relikwiarz świętego Zygmunta"
      ],
      "malarstwo": [
        "ołtarz franciszkański z Torunia"
      ],
      "rzeźba": [
        "ołtarz Wita Stwosza"
      ],
      "książkarstwo": [
        "miniatury w księgach"
      ]
    },
    "image": "/img/r05_oltarz_sredniowieczny.jpg",
    "explanation": "Przykłady z rozdziału pokazują, że sztuka średniowieczna obejmowała różne dziedziny: złotnictwo, malarstwo, rzeźbę i książkarstwo."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: gęsie pióro, pergamin, miniatura, druk, skryptorium.",
    "options": null,
    "answer": "druk",
    "image": "/img/r05_klasztor_skryptorium.jpg",
    "explanation": "W średniowieczu księgi przepisywano ręcznie w skryptoriach na pergaminie, a rozdział zaznacza, że nie znano jeszcze techniki drukowania książek."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zasady życia franciszkanów wynikające z przytoczonej reguły.",
    "options": [
      "Życie w posłuszeństwie",
      "Życie bez własności",
      "Życie w czystości",
      "Nieprzyjmowanie pieniędzy",
      "Obowiązek posiadania ziemi",
      "Wybieranie burmistrza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Reguła braci mniejszych nakazywała życie w posłuszeństwie, bez własności i w czystości, a także unikanie przyjmowania pieniędzy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Społeczeństwo średniowiecza",
  icon: "🏰",
  sectionOrder: [
    "System feudalny",
    "Epoka rycerzy",
    "Średniowieczne miasto i wieś",
    "Kościół w średniowieczu",
    "Sztuka średniowiecza",
    "Super trudne"
  ],
  sectionIcons: {
    "System feudalny": "👑",
    "Epoka rycerzy": "🛡️",
    "Średniowieczne miasto i wieś": "🏘️",
    "Kościół w średniowieczu": "⛪",
    "Sztuka średniowiecza": "🎨",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
