// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WYB  = Wybuch wojny i sojusze
//   FRO  = Fronty i najważniejsze bitwy
//   TAK  = Taktyka i nowe rodzaje broni
//   ROS  = Rewolucje w Rosji
//   POL  = Sprawa polska
//   SKU  = Skutki I wojny światowej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_WYB_01",
    "section": "Wybuch wojny i sojusze",
    "type": "single_choice",
    "prompt": "Kiedy doszło do zamachu w Sarajewie, który stał się bezpośrednią przyczyną wybuchu I wojny światowej?",
    "options": [
      "28 VI 1914 r.",
      "11 XI 1918 r.",
      "3 VIII 1914 r.",
      "7 V 1915 r.",
      "21 II 1916 r.",
      "8 I 1918 r."
    ],
    "answer": 0,
    "image": "r02_zamach_sarajewo.jpg",
    "explanation": "Zamach w Sarajewie miał miejsce 28 czerwca 1914 r. Zginął w nim następca tronu austro-węgierskiego arcyksiążę Franciszek Ferdynand."
  },
  {
    "id": "R02_WYB_02",
    "section": "Wybuch wojny i sojusze",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "Trójprzymierze",
      "Trójporozumienie",
      "Kocioł bałkański",
      "Zamach w Sarajewie"
    ],
    "right": [
      "Niemcy, Austro-Węgry i Włochy",
      "Wielka Brytania, Francja i Rosja",
      "Konflikty i krzyżujące się interesy na Bałkanach",
      "Bezpośrednia przyczyna wybuchu wojny"
    ],
    "answer": {
      "Trójprzymierze": "Niemcy, Austro-Węgry i Włochy",
      "Trójporozumienie": "Wielka Brytania, Francja i Rosja",
      "Kocioł bałkański": "Konflikty i krzyżujące się interesy na Bałkanach",
      "Zamach w Sarajewie": "Bezpośrednia przyczyna wybuchu wojny"
    },
    "explanation": "Trójprzymierze i Trójporozumienie były dwoma blokami państw, a napięcia bałkańskie i zamach w Sarajewie przyczyniły się do wybuchu wojny."
  },
  {
    "id": "R02_WYB_03",
    "section": "Wybuch wojny i sojusze",
    "type": "multi_select",
    "prompt": "Zaznacz państwa należące do Trójporozumienia, czyli Ententy.",
    "options": [
      "Wielka Brytania",
      "Francja",
      "Rosja",
      "Niemcy",
      "Austro-Węgry",
      "Włochy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_mapa_sojuszy_europa.jpg",
    "explanation": "Trójporozumienie tworzyły Wielka Brytania, Francja i Rosja. Państwa te walczyły przeciwko państwom Trójprzymierza i wygrały wojnę."
  },
  {
    "id": "R02_WYB_04",
    "section": "Wybuch wojny i sojusze",
    "type": "true_false",
    "prompt": "Trójprzymierze Niemiec, Austro-Węgier i Włoch zostało zawarte w 1882 r.",
    "options": null,
    "answer": true,
    "explanation": "Układ Niemiec, Austro-Węgier i Włoch został zawarty w 1882 r."
  },
  {
    "id": "R02_WYB_05",
    "section": "Wybuch wojny i sojusze",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do rozszerzenia konfliktu po zamachu w Sarajewie.",
    "options": null,
    "items": [
      "Niemcy wypowiadają wojnę Rosji i Francji",
      "Austro-Węgry stawiają Serbii ultimatum",
      "Rosja ogłasza powszechną mobilizację",
      "Niemcy uderzają na neutralną Belgię",
      "Austro-Węgry wypowiadają wojnę Serbii",
      "Wielka Brytania wypowiada wojnę Niemcom"
    ],
    "answer": [
      "Austro-Węgry stawiają Serbii ultimatum",
      "Austro-Węgry wypowiadają wojnę Serbii",
      "Rosja ogłasza powszechną mobilizację",
      "Niemcy wypowiadają wojnę Rosji i Francji",
      "Niemcy uderzają na neutralną Belgię",
      "Wielka Brytania wypowiada wojnę Niemcom"
    ],
    "explanation": "Po ultimatum i wojnie Austro-Węgier z Serbią nastąpiła mobilizacja Rosji, niemieckie wypowiedzenia wojny, atak na Belgię i przystąpienie Wielkiej Brytanii."
  },
  {
    "id": "R02_WYB_06",
    "section": "Wybuch wojny i sojusze",
    "type": "single_choice",
    "prompt": "Co było bezpośrednią przyczyną wybuchu I wojny światowej?",
    "options": [
      "Zamach w Sarajewie",
      "Bitwę pod Verdun",
      "Rewolucję lutową",
      "Zatopienie Lusitanii",
      "Bitwę nad Sommą",
      "Pokój brzeski"
    ],
    "answer": 0,
    "image": "r02_zamach_sarajewo.jpg",
    "explanation": "Bezpośrednim powodem był zamach w Sarajewie na arcyksięcia Franciszka Ferdynanda 28 VI 1914 r."
  },
  {
    "id": "R02_WYB_07",
    "section": "Wybuch wojny i sojusze",
    "type": "sort",
    "prompt": "Przyporządkuj przyczyny I wojny światowej do odpowiednich kategorii.",
    "options": null,
    "items": [
      "chęć odzyskania Alzacji i Lotaryngii przez Francję",
      "polityka Rzeszy nastawiona na panowanie w Europie i na świecie",
      "chęć dorównania przez Niemcy angielskim siłom morskim",
      "szukanie przez Niemcy surowców w koloniach",
      "zawiązanie Trójprzymierza i Trójporozumienia",
      "wyścig zbrojeń na przełomie XIX i XX w."
    ],
    "categories": [
      "przyczyny polityczne",
      "przyczyny gospodarcze",
      "przyczyny pośrednie"
    ],
    "answer": {
      "przyczyny polityczne": [
        "chęć odzyskania Alzacji i Lotaryngii przez Francję",
        "polityka Rzeszy nastawiona na panowanie w Europie i na świecie"
      ],
      "przyczyny gospodarcze": [
        "chęć dorównania przez Niemcy angielskim siłom morskim",
        "szukanie przez Niemcy surowców w koloniach"
      ],
      "przyczyny pośrednie": [
        "zawiązanie Trójprzymierza i Trójporozumienia",
        "wyścig zbrojeń na przełomie XIX i XX w."
      ]
    },
    "explanation": "Przyczyny dzielą się na polityczne, gospodarcze i pośrednie. Do pośrednich należały m.in. powstanie bloków oraz wyścig zbrojeń."
  },
  {
    "id": "R02_WYB_08",
    "section": "Wybuch wojny i sojusze",
    "type": "fill_in",
    "prompt": "Trójprzymierze zawarto w roku __________, a Trójporozumienie nazywano także __________.",
    "options": null,
    "answer": [
      "1882",
      "Ententą"
    ],
    "altAnswers": [
      [
        "1882",
        "1882 r."
      ],
      [
        "Ententą",
        "Ententa",
        "ententą",
        "ententa"
      ]
    ],
    "explanation": "Układ Niemiec, Austro-Węgier i Włoch zawarto w 1882 r. Trójporozumienie określano nazwą Ententa."
  },
  {
    "id": "R02_WYB_09",
    "section": "Wybuch wojny i sojusze",
    "type": "scenario",
    "prompt": "Po odrzuceniu ultimatum przez Serbię jedno z mocarstw udzieliło jej poparcia i ogłosiło powszechną mobilizację. Niemcy odpowiedziały wypowiedzeniem temu państwu wojny. O jakie państwo chodzi?",
    "options": [
      "Rosję",
      "Francję",
      "Wielką Brytanię",
      "Włochy",
      "Belgię",
      "Turcję"
    ],
    "answer": 0,
    "explanation": "Serbię poparła Rosja. Jej powszechna mobilizacja stała się jednym z kroków prowadzących do niemieckiego wypowiedzenia wojny Rosji i Francji."
  },
  {
    "id": "R02_WYB_10",
    "section": "Wybuch wojny i sojusze",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do Ententy: Wielka Brytania, Francja, Rosja, Niemcy.",
    "options": null,
    "answer": "Niemcy",
    "image": "r02_mapa_sojuszy_europa.jpg",
    "explanation": "Wielka Brytania, Francja i Rosja tworzyły Trójporozumienie. Niemcy należały do przeciwnego bloku."
  },
  {
    "id": "R02_FRO_01",
    "section": "Fronty i najważniejsze bitwy",
    "type": "single_choice",
    "prompt": "Na czym polegał plan Schlieffena?",
    "options": [
      "Na błyskawicznym ataku na Francję",
      "Na desancie w Wielkiej Brytanii",
      "Na ataku Rosji przez Bałkany",
      "Na blokadzie Morza Czarnego",
      "Na obronie wyłącznie w okopach",
      "Na wycofaniu Niemiec z Belgii"
    ],
    "answer": 0,
    "explanation": "Plan Schlieffena zakładał błyskawiczny atak na Francję. Klęska nad Marną pokazała Niemcom, że plan wojny błyskawicznej nie zostanie zrealizowany."
  },
  {
    "id": "R02_FRO_02",
    "section": "Fronty i najważniejsze bitwy",
    "type": "true_false",
    "prompt": "Klęska Niemców nad Marną w 1914 r. powstrzymała ich natarcie na Paryż i przekreśliła szybkie wykonanie planu wojny błyskawicznej.",
    "options": null,
    "answer": true,
    "explanation": "Bitwa nad Marną zatrzymała niemieckie natarcie na Paryż. Po niej front zachodni przeszedł w dużej mierze do wojny pozycyjnej."
  },
  {
    "id": "R02_FRO_03",
    "section": "Fronty i najważniejsze bitwy",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Bitwa pod Tannenbergiem",
      "Bitwa pod Ypres z pierwszym użyciem gazów bojowych",
      "Bitwa pod Verdun",
      "Kontrofensywa gen. Brusiłowa"
    ],
    "right": [
      "1914",
      "1915",
      "1916 - front zachodni",
      "1916 - front wschodni"
    ],
    "answer": {
      "Bitwa pod Tannenbergiem": "1914",
      "Bitwa pod Ypres z pierwszym użyciem gazów bojowych": "1915",
      "Bitwa pod Verdun": "1916 - front zachodni",
      "Kontrofensywa gen. Brusiłowa": "1916 - front wschodni"
    },
    "explanation": "Tannenberg należał do walk 1914 r., Ypres do 1915 r., a Verdun i ofensywa Brusiłowa do 1916 r., lecz na różnych frontach."
  },
  {
    "id": "R02_FRO_04",
    "section": "Fronty i najważniejsze bitwy",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia frontu wschodniego z 1914 r.",
    "options": [
      "Zwycięstwo Niemców pod Tannenbergiem",
      "Zajęcie Lwowa przez wojska carskie",
      "Klęska Rosjan nad jeziorami mazurskimi",
      "Zajęcie części Galicji przez Rosjan",
      "Bitwa pod Verdun",
      "Bitwa nad Sommą"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W 1914 r. na froncie wschodnim doszło m.in. do bitwy pod Tannenbergiem, zajęcia Lwowa, klęski nad jeziorami mazurskimi i walk o Galicję."
  },
  {
    "id": "R02_FRO_05",
    "section": "Fronty i najważniejsze bitwy",
    "type": "scenario",
    "prompt": "Jest jesień 1914 r. Żołnierze obu stron stoją naprzeciw siebie w okopach, schronach i zasiekach na linii rzeki Aisne. Jaki charakter przybrały walki?",
    "options": [
      "Wojna pozycyjna",
      "Wojna domowa",
      "Wojna kolonialna",
      "Wojna partyzancka",
      "Wyłącznie wojna morska",
      "Wyłącznie wojna powietrzna"
    ],
    "answer": 0,
    "image": "r02_okopy_front_zachodni.jpg",
    "explanation": "Na froncie zachodnim po niepowodzeniu szybkiego natarcia ukształtowała się wojna pozycyjna, w której linia frontu była silnie umocniona i mało ruchoma."
  },
  {
    "id": "R02_FRO_06",
    "section": "Fronty i najważniejsze bitwy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia frontu wschodniego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Kontrofensywa gen. Brusiłowa",
      "Przełamanie frontu rosyjskiego pod Gorlicami",
      "Zwycięstwo Niemców pod Tannenbergiem",
      "Rewolucje w Rosji",
      "Kapitulacja Austro-Węgier"
    ],
    "answer": [
      "Zwycięstwo Niemców pod Tannenbergiem",
      "Przełamanie frontu rosyjskiego pod Gorlicami",
      "Kontrofensywa gen. Brusiłowa",
      "Rewolucje w Rosji",
      "Kapitulacja Austro-Węgier"
    ],
    "explanation": "Tannenberg przypada na 1914 r., Gorlice na 1915 r., ofensywa Brusiłowa na 1916 r., rewolucje na 1917 r., a kapitulacja Austro-Węgier na 1918 r."
  },
  {
    "id": "R02_FRO_07",
    "section": "Fronty i najważniejsze bitwy",
    "type": "single_choice",
    "prompt": "Która bitwa była najkrwawszą bitwą I wojny światowej?",
    "options": [
      "Bitwa pod Verdun",
      "Bitwa pod Tannenbergiem",
      "Bitwa pod Gorlicami",
      "Bitwa nad Marną",
      "Bitwa pod Kaniowem",
      "Bitwa nad jeziorami mazurskimi"
    ],
    "answer": 0,
    "image": "r02_bitwa_verdun.jpg",
    "explanation": "Bitwa pod Verdun z 1916 r. była najkrwawszą bitwą I wojny światowej."
  },
  {
    "id": "R02_FRO_08",
    "section": "Fronty i najważniejsze bitwy",
    "type": "single_choice",
    "prompt": "Gdzie rozegrała się największa bitwa morska I wojny światowej?",
    "options": [
      "Niedaleko Półwyspu Jutlandzkiego",
      "U ujścia Tamizy",
      "Na Morzu Czarnym",
      "W Zatoce Ryskiej",
      "Przy Dardanelach",
      "U wybrzeży Belgii"
    ],
    "answer": 0,
    "explanation": "Największa bitwa morska została stoczona 31 V - 1 VI 1916 r. niedaleko Półwyspu Jutlandzkiego. Była nierozstrzygnięta."
  },
  {
    "id": "R02_FRO_09",
    "section": "Fronty i najważniejsze bitwy",
    "type": "fill_in",
    "prompt": "Szarża ułanów polskich pod Rokitną odbyła się 13 VI __________, a dowodził nią rotmistrz Zbigniew __________.",
    "options": null,
    "answer": [
      "1915 r.",
      "Dunin-Wąsowicz"
    ],
    "altAnswers": [
      [
        "1915 r.",
        "1915",
        "1915 r"
      ],
      [
        "Dunin-Wąsowicz",
        "Dunin Wąsowicz",
        "Dunin-Wasowicz",
        "Dunin Wasowicz"
      ]
    ],
    "explanation": "Szarża pod Rokitną z 13 VI 1915 r., dowodzona przez rotm. Zbigniewa Dunin-Wąsowicza, stała się symbolem ofiarności polskich żołnierzy."
  },
  {
    "id": "R02_FRO_10",
    "section": "Fronty i najważniejsze bitwy",
    "type": "odd_one_out",
    "prompt": "Wskaż bitwę z innego frontu niż pozostałe: Marna, Ypres, Verdun, Tannenberg.",
    "options": null,
    "answer": "Tannenberg",
    "explanation": "Marna, Ypres i Verdun należały do frontu zachodniego. Tannenberg był ważnym starciem na froncie wschodnim."
  },
  {
    "id": "R02_FRO_11",
    "section": "Fronty i najważniejsze bitwy",
    "type": "single_choice",
    "prompt": "Jakie wydarzenie z 11 XI 1918 r. oznaczało zakończenie I wojny światowej?",
    "options": [
      "Kapitulacja Niemiec i rozejm w lasku Compiègne",
      "Pokój brzeski",
      "Kapitulacja Rosji",
      "Bitwa pod Verdun",
      "Akt 5 listopada",
      "Zamach w Sarajewie"
    ],
    "answer": 0,
    "explanation": "11 listopada 1918 r. Niemcy skapitulowały i podpisano rozejm w lasku Compiègne pod Paryżem, co kończyło I wojnę światową."
  },
  {
    "id": "R02_TAK_01",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "single_choice",
    "prompt": "Co było charakterystyczne dla wojny pozycyjnej na froncie zachodnim?",
    "options": [
      "Silnie umocnione pozycje i stała linia frontu",
      "Stałe wycofywanie się obu armii",
      "Brak okopów i zasieków",
      "Wyłącznie walki kawalerii",
      "Brak artylerii",
      "Działania prowadzone tylko na morzu"
    ],
    "answer": 0,
    "image": "r02_okopy_front_zachodni.jpg",
    "explanation": "W wojnie pozycyjnej obie strony zajmowały umocnione pozycje, okopy i zasieki, a linia frontu przez długi czas pozostawała stała."
  },
  {
    "id": "R02_TAK_02",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "multi_select",
    "prompt": "Zaznacz środki łączności używane przez armię w warunkach wojny pozycyjnej.",
    "options": [
      "Telefony",
      "Semafory",
      "Lampy sygnałowe",
      "Gołębie pocztowe",
      "Bomby głębinowe",
      "Czołgi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do środków utrzymywania łączności należały telefony, semafory, lampy sygnałowe i gołębie pocztowe."
  },
  {
    "id": "R02_TAK_03",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "true_false",
    "prompt": "Karabin maszynowy stał się symbolem walki w okopach podczas I wojny światowej.",
    "options": null,
    "answer": true,
    "explanation": "Broń maszynowa, zwłaszcza ciężkie karabiny maszynowe, była ważnym elementem obrony pozycyjnej i zwiększała przewagę środków defensywnych."
  },
  {
    "id": "R02_TAK_04",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "match",
    "prompt": "Połącz rodzaj broni lub sprzętu z opisem.",
    "options": null,
    "left": [
      "Moździerz",
      "Bagnet",
      "U-Boot",
      "Iperyt"
    ],
    "right": [
      "Działo o dużej mobilności i krótkim zasięgu",
      "Ostrze nakładane na lufę broni",
      "Niemiecki okręt podwodny",
      "Gaz musztardowy"
    ],
    "answer": {
      "Moździerz": "Działo o dużej mobilności i krótkim zasięgu",
      "Bagnet": "Ostrze nakładane na lufę broni",
      "U-Boot": "Niemiecki okręt podwodny",
      "Iperyt": "Gaz musztardowy"
    },
    "explanation": "W czasie wojny wykorzystywano uzbrojenie piechoty i artylerię, broń chemiczną oraz okręty podwodne."
  },
  {
    "id": "R02_TAK_05",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "single_choice",
    "prompt": "Podczas której bitwy po raz pierwszy użyto czołgów?",
    "options": [
      "Bitwy nad Sommą",
      "Bitwy pod Verdun",
      "Bitwy pod Tannenbergiem",
      "Bitwy pod Gorlicami",
      "Bitwy jutlandzkiej",
      "Bitwy pod Kaniowem"
    ],
    "answer": 0,
    "image": "r02_czolg_mark_i.jpg",
    "explanation": "Pierwsze czołgi zostały użyte podczas bitwy nad Sommą w 1916 r. Jednym z użytych typów był brytyjski czołg Mark I."
  },
  {
    "id": "R02_TAK_06",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "sort",
    "prompt": "Przyporządkuj sprzęt i broń do środowiska działań.",
    "options": null,
    "items": [
      "czołg Mark I",
      "haubica",
      "sterowiec Zeppelin",
      "samolot bombowy",
      "U-Boot",
      "bomba głębinowa"
    ],
    "categories": [
      "działania lądowe",
      "działania powietrzne",
      "działania morskie"
    ],
    "answer": {
      "działania lądowe": [
        "czołg Mark I",
        "haubica"
      ],
      "działania powietrzne": [
        "sterowiec Zeppelin",
        "samolot bombowy"
      ],
      "działania morskie": [
        "U-Boot",
        "bomba głębinowa"
      ]
    },
    "explanation": "Czołgi i haubice służyły na lądzie, sterowce i samoloty w powietrzu, a U-Booty i bomby głębinowe były związane z walką na morzu."
  },
  {
    "id": "R02_TAK_07",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "scenario",
    "prompt": "Niemiecka marynarka atakuje wszystkie cele wodne, również neutralne i cywilne, aby odciąć Wielką Brytanię od zaopatrzenia. Jak nazywa się ta taktyka?",
    "options": [
      "Nieograniczona wojna podwodna",
      "Wojna pozycyjna",
      "Wojna manewrowa",
      "Blitzkrieg",
      "Blokada lądowa",
      "Wojna partyzancka"
    ],
    "answer": 0,
    "image": "r02_uboot_wojna_podwodna.jpg",
    "explanation": "Nieograniczona wojna podwodna polegała na atakowaniu wszystkich celów wodnych, w tym neutralnych, zaprzyjaźnionych i cywilnych."
  },
  {
    "id": "R02_TAK_08",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "single_choice",
    "prompt": "Jaki skutek polityczny miała niemiecka nieograniczona wojna podwodna?",
    "options": [
      "Przystąpienie USA do wojny po stronie Ententy",
      "Wyjście Wielkiej Brytanii z wojny",
      "Przejście Rosji do państw centralnych",
      "Kapitulacja Francji w 1915 r.",
      "Rozwiązanie Ententy",
      "Przystąpienie Belgii do Trójprzymierza"
    ],
    "answer": 0,
    "image": "r02_uboot_wojna_podwodna.jpg",
    "explanation": "Atakowanie także celów neutralnych i cywilnych przyczyniło się do przystąpienia USA do wojny po stronie Ententy i osłabienia państw centralnych."
  },
  {
    "id": "R02_TAK_09",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "fill_in",
    "prompt": "Najbardziej skuteczny gaz bojowy to gaz musztardowy, czyli __________; jego nazwa wiąże się z miejscowością __________.",
    "options": null,
    "answer": [
      "iperyt",
      "Ypres"
    ],
    "altAnswers": [
      [
        "iperyt",
        "Iperyt"
      ],
      [
        "Ypres",
        "ypres"
      ]
    ],
    "explanation": "Gaz musztardowy nazywano iperytem, a nazwa wiąże się z Ypres, gdzie Niemcy użyli gazów bojowych w 1915 r."
  },
  {
    "id": "R02_TAK_10",
    "section": "Taktyka i nowe rodzaje broni",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest typowym składnikiem obrony pozycyjnej: okopy, zasieki z drutu kolczastego, karabin maszynowy, sterowiec.",
    "options": null,
    "answer": "sterowiec",
    "explanation": "Okopy, zasieki i karabiny maszynowe wzmacniały obronę pozycyjną. Sterowiec należał do środków działań powietrznych."
  },
  {
    "id": "R02_ROS_01",
    "section": "Rewolucje w Rosji",
    "type": "single_choice",
    "prompt": "Który car abdykował w wyniku rewolucji lutowej 1917 r.?",
    "options": [
      "Mikołaj II",
      "Aleksander Kiereński",
      "Włodzimierz Lenin",
      "Lew Trocki",
      "Grigorij Rasputin",
      "Feliksa Dzierżyński"
    ],
    "answer": 0,
    "image": "r02_rewolucja_piotrogrod.jpg",
    "explanation": "2 III 1917 r. według kalendarza juliańskiego Mikołaj II abdykował w imieniu swoim i syna, a Rosja stała się republiką."
  },
  {
    "id": "R02_ROS_02",
    "section": "Rewolucje w Rosji",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny rewolucji lutowej.",
    "options": [
      "Nieudolne rządy cara Mikołaja II",
      "Duży wpływ Rasputina",
      "Klęski na frontach wojennych",
      "Kryzys gospodarczy i polityczny",
      "Zwycięstwo Rosji pod Verdun",
      "Przystąpienie Rosji do państw centralnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przyczyn rewolucji lutowej należały nieudolne rządy, wpływ Rasputina, klęski wojenne oraz kryzys gospodarczy i polityczny, który wzmacniał popularność haseł bolszewickich."
  },
  {
    "id": "R02_ROS_03",
    "section": "Rewolucje w Rosji",
    "type": "true_false",
    "prompt": "Po abdykacji Mikołaja II Rosja została republiką.",
    "options": null,
    "answer": true,
    "image": "r02_rewolucja_piotrogrod.jpg",
    "explanation": "Po obaleniu caratu władzę przejął Rząd Tymczasowy, a Rosja została republiką."
  },
  {
    "id": "R02_ROS_04",
    "section": "Rewolucje w Rosji",
    "type": "match",
    "prompt": "Połącz osobę lub instytucję z rolą.",
    "options": null,
    "left": [
      "Aleksander Kiereński",
      "Piotrogrodzka Rada Delegatów Robotniczych i Żołnierskich",
      "Włodzimierz Lenin",
      "Lew Trocki"
    ],
    "right": [
      "Premier Rządu Tymczasowego",
      "Jeden z dwóch ośrodków dwuwładzy",
      "Przywódca bolszewików wracający ze Szwajcarii",
      "Bolszewicki działacz pomagający przejmować kontrolę nad Radami"
    ],
    "answer": {
      "Aleksander Kiereński": "Premier Rządu Tymczasowego",
      "Piotrogrodzka Rada Delegatów Robotniczych i Żołnierskich": "Jeden z dwóch ośrodków dwuwładzy",
      "Włodzimierz Lenin": "Przywódca bolszewików wracający ze Szwajcarii",
      "Lew Trocki": "Bolszewicki działacz pomagający przejmować kontrolę nad Radami"
    },
    "explanation": "Po rewolucji lutowej działały dwa ośrodki władzy, a bolszewicy pod przywództwem Lenina i z udziałem Trockiego stopniowo wzmacniali wpływy w Radach."
  },
  {
    "id": "R02_ROS_05",
    "section": "Rewolucje w Rosji",
    "type": "fill_in",
    "prompt": "System dwóch ośrodków władzy w Rosji w 1917 r. tworzyły __________ oraz __________.",
    "options": null,
    "answer": [
      "Rząd Tymczasowy",
      "Piotrogrodzka Rada Delegatów Robotniczych i Żołnierskich"
    ],
    "altAnswers": [
      [
        "Rząd Tymczasowy",
        "Rzad Tymczasowy"
      ],
      [
        "Piotrogrodzka Rada Delegatów Robotniczych i Żołnierskich",
        "Rada Piotrogrodzka",
        "Piotrogrodzka Rada Delegatow Robotniczych i Zolnierskich"
      ]
    ],
    "explanation": "Po rewolucji lutowej powstała dwuwładza: obok Rządu Tymczasowego działała Piotrogrodzka Rada Delegatów Robotniczych i Żołnierskich."
  },
  {
    "id": "R02_ROS_06",
    "section": "Rewolucje w Rosji",
    "type": "scenario",
    "prompt": "Działacz wraca w 1917 r. ze szwajcarskiej emigracji przy pomocy Niemiec. Po powrocie ogłasza tezy kwietniowe, wzywa do zakończenia wojny i przekazania całej władzy Radom. Kto to?",
    "options": [
      "Włodzimierz Lenin",
      "Aleksander Kiereński",
      "Mikołaj II",
      "Roman Dmowski",
      "Józef Piłsudski",
      "Ignacy Jan Paderewski"
    ],
    "answer": 0,
    "image": "r02_lenin_powrot.jpg",
    "explanation": "Włodzimierz Lenin wrócił ze Szwajcarii przy pomocy Niemiec i ogłosił tezy kwietniowe, w których domagał się m.in. zakończenia wojny i przejęcia władzy przez Rady."
  },
  {
    "id": "R02_ROS_07",
    "section": "Rewolucje w Rosji",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia rosyjskie w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Pokój brzeski z państwami centralnymi",
      "Powrót Lenina i ogłoszenie tez kwietniowych",
      "Abdykacja Mikołaja II",
      "Rewolucja październikowa",
      "Strajki w Piotrogrodzie"
    ],
    "answer": [
      "Strajki w Piotrogrodzie",
      "Abdykacja Mikołaja II",
      "Powrót Lenina i ogłoszenie tez kwietniowych",
      "Rewolucja październikowa",
      "Pokój brzeski z państwami centralnymi"
    ],
    "explanation": "Strajki i abdykacja należały do rewolucji lutowej, Lenin wrócił wiosną 1917 r., bolszewicy przejęli władzę jesienią, a pokój brzeski podpisano 3 III 1918 r."
  },
  {
    "id": "R02_ROS_08",
    "section": "Rewolucje w Rosji",
    "type": "single_choice",
    "prompt": "Kiedy Rosja bolszewicka podpisała w Brześciu pokój z państwami centralnymi?",
    "options": [
      "3 III 1918 r.",
      "28 VI 1914 r.",
      "7 V 1915 r.",
      "21 II 1916 r.",
      "8 I 1918 r.",
      "11 XI 1918 r."
    ],
    "answer": 0,
    "explanation": "Pokój brzeski podpisano 3 III 1918 r. Rosja wycofała się z wojny i zerwała sojusz z Ententą."
  },
  {
    "id": "R02_ROS_09",
    "section": "Rewolucje w Rosji",
    "type": "odd_one_out",
    "prompt": "Wskaż hasło niezgodne z tezami kwietniowymi: zakończenie wojny, upaństwowienie ziemi i fabryk, cała władza w ręce Rad, utrzymanie caratu.",
    "options": null,
    "answer": "utrzymanie caratu",
    "explanation": "Tezy kwietniowe Lenina zakładały zakończenie wojny, upaństwowienie ziemi i fabryk, likwidację Rządu Tymczasowego i przejście do republiki Rad, nie zaś utrzymanie caratu."
  },
  {
    "id": "R02_POL_01",
    "section": "Sprawa polska",
    "type": "single_choice",
    "prompt": "Kto był związany z orientacją prorosyjską i Narodową Demokracją?",
    "options": [
      "Roman Dmowski",
      "Józef Piłsudski",
      "Józef Haller",
      "Stanisław Szeptycki",
      "Kazimierz Sosnkowski",
      "Aleksander Kiereński"
    ],
    "answer": 0,
    "explanation": "Orientację prorosyjską reprezentowali Roman Dmowski i Narodowa Demokracja. Zakładano zwycięstwo Ententy i początkowo autonomię w granicach Rosji."
  },
  {
    "id": "R02_POL_02",
    "section": "Sprawa polska",
    "type": "true_false",
    "prompt": "Orientacja proaustriacka zakładała walkę o niepodległość u boku Austrii i zwycięstwo państw centralnych.",
    "options": null,
    "answer": true,
    "explanation": "Orientacja proaustriacka miała charakter niepodległościowy: Polacy mieli walczyć u boku Austrii przeciw Rosji, licząc na zwycięstwo państw centralnych."
  },
  {
    "id": "R02_POL_03",
    "section": "Sprawa polska",
    "type": "match",
    "prompt": "Połącz postać z działaniem lub formacją.",
    "options": null,
    "left": [
      "Józef Piłsudski",
      "Józef Haller",
      "Stanisław Szeptycki",
      "Ignacy Jan Paderewski"
    ],
    "right": [
      "I Brygada Legionów",
      "II Brygada i polskie wojsko formowane we Francji",
      "III Brygada Legionów",
      "Nagłaśnianie sprawy polskiej także w USA"
    ],
    "answer": {
      "Józef Piłsudski": "I Brygada Legionów",
      "Józef Haller": "II Brygada i polskie wojsko formowane we Francji",
      "Stanisław Szeptycki": "III Brygada Legionów",
      "Ignacy Jan Paderewski": "Nagłaśnianie sprawy polskiej także w USA"
    },
    "image": "r02_legiony_pilsudski.jpg",
    "explanation": "Piłsudski był związany z I Brygadą, Haller z II Brygadą i formowaniem wojska we Francji, Szeptycki z III Brygadą, a Paderewski z działalnością dyplomatyczną."
  },
  {
    "id": "R02_POL_04",
    "section": "Sprawa polska",
    "type": "single_choice",
    "prompt": "Skąd w nocy z 5 na 6 VIII 1914 r. wyruszyła I Kompania Kadrowa Józefa Piłsudskiego?",
    "options": [
      "Z krakowskich Oleandrów",
      "Z Warszawy",
      "Z Puław",
      "Ze Lwowa",
      "Z Poznania",
      "Z Paryża"
    ],
    "answer": 0,
    "explanation": "I Kompania Kadrowa wyruszyła z krakowskich Oleandrów, wkroczyła do Królestwa Polskiego i dotarła do Kielc."
  },
  {
    "id": "R02_POL_05",
    "section": "Sprawa polska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane ze sprawą polską w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Akt 5 listopada",
      "Bitwa pod Kaniowem",
      "Powstanie Związku Walki Czynnej",
      "Wymarsz I Kompanii Kadrowej",
      "Powołanie Rady Regencyjnej",
      "Tworzenie organizacji wojskowych w Galicji"
    ],
    "answer": [
      "Powstanie Związku Walki Czynnej",
      "Tworzenie organizacji wojskowych w Galicji",
      "Wymarsz I Kompanii Kadrowej",
      "Akt 5 listopada",
      "Powołanie Rady Regencyjnej",
      "Bitwa pod Kaniowem"
    ],
    "explanation": "Związek Walki Czynnej powstał w 1908 r., organizacje galicyjskie rozwijano od 1910 r., I Kompania wyruszyła w 1914 r., Akt 5 listopada ogłoszono w 1916 r., Radę Regencyjną powołano w 1917 r., a bitwę pod Kaniowem stoczono w 1918 r."
  },
  {
    "id": "R02_POL_06",
    "section": "Sprawa polska",
    "type": "multi_select",
    "prompt": "Zaznacz zadania Polskiej Organizacji Wojskowej.",
    "options": [
      "Przygotowania do wybuchu powstania",
      "Przekazywanie informacji o sytuacji w Rosji do sztabu I Brygady",
      "Prowadzenie nieograniczonej wojny podwodnej",
      "Obrona Paryża nad Marną",
      "Formowanie Rządu Tymczasowego w Rosji"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "POW była tajną formacją działającą w Królestwie Polskim i Rosji. Przygotowywała powstanie oraz przekazywała informacje o sytuacji w Rosji do sztabu I Brygady."
  },
  {
    "id": "R02_POL_07",
    "section": "Sprawa polska",
    "type": "single_choice",
    "prompt": "Co zapowiadał Akt 5 listopada z 1916 r.?",
    "options": [
      "Powstanie zależnego od cesarzy państwa polskiego jako monarchii konstytucyjnej",
      "Natychmiastowe utworzenie niepodległej republiki polskiej",
      "Przyłączenie Polski do Francji",
      "Rozwiązanie Legionów Polskich",
      "Przekazanie całej Galicji Rosji",
      "Wystąpienie USA z wojny"
    ],
    "answer": 0,
    "image": "r02_akt_5_listopada.jpg",
    "explanation": "Akt 5 listopada, nazywany manifestem dwóch cesarzy, zapowiadał utworzenie zależnego od nich państwa polskiego w formie monarchii konstytucyjnej."
  },
  {
    "id": "R02_POL_08",
    "section": "Sprawa polska",
    "type": "scenario",
    "prompt": "Żołnierze Legionów otrzymują rozkaz złożenia przysięgi na wierność. Część odmawia, oporni są internowani, a Józef Piłsudski trafia do więzienia w Magdeburgu. Jak nazwano to wydarzenie?",
    "options": [
      "Kryzys przysięgowy",
      "Akt 5 listopada",
      "Rewolucja lutowa",
      "Pokój brzeski",
      "Bitwa pod Kaniowem",
      "Deklaracja wersalska"
    ],
    "answer": 0,
    "explanation": "Odmowa złożenia przysięgi doprowadziła do kryzysu przysięgowego. Piłsudskiego uwięziono w Magdeburgu, a opornych legionistów internowano."
  },
  {
    "id": "R02_POL_09",
    "section": "Sprawa polska",
    "type": "fill_in",
    "prompt": "Kwestii polskiej poświęcono punkt __________ orędzia prezydenta Woodrowa Wilsona z 8 I 1918 r.; przewidywał on państwo polskie ze swobodnym dostępem do __________.",
    "options": null,
    "answer": [
      "13",
      "morza"
    ],
    "altAnswers": [
      [
        "13",
        "13.",
        "trzynasty"
      ],
      [
        "morza",
        "morze"
      ]
    ],
    "image": "r02_paderewski_wilson.jpg",
    "explanation": "Trzynasty punkt orędzia Wilsona dotyczył utworzenia państwa polskiego ze swobodnym dostępem do morza. Działalność Paderewskiego pomagała umiędzynarodowić sprawę polską."
  },
  {
    "id": "R02_POL_10",
    "section": "Sprawa polska",
    "type": "single_choice",
    "prompt": "Które państwa ogłosiły deklarację wersalską popierającą przywrócenie niepodległej Polski z dostępem do morza?",
    "options": [
      "Wielka Brytania, Francja i Włochy",
      "Niemcy, Austro-Węgry i Turcja",
      "Rosja, Niemcy i Francja",
      "USA, Rosja i Niemcy",
      "Belgia, Serbia i Rumunia",
      "Austro-Węgry, Rosja i Włochy"
    ],
    "answer": 0,
    "explanation": "Deklarację wersalską w sprawie niepodległości Polski ogłosiły Wielka Brytania, Francja i Włochy."
  },
  {
    "id": "R02_POL_11",
    "section": "Sprawa polska",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie był polską formacją lub organizacją wojskową: I Kompania Kadrowa, Legion Puławski, Polska Organizacja Wojskowa, U-Booty.",
    "options": null,
    "answer": "U-Booty",
    "explanation": "I Kompania Kadrowa, Legion Puławski i Polska Organizacja Wojskowa były związane z polskimi działaniami wojskowymi. U-Booty były niemieckimi okrętami podwodnymi."
  },
  {
    "id": "R02_POL_12",
    "section": "Sprawa polska",
    "type": "multi_select",
    "prompt": "Zaznacz działania lub decyzje, które pomagały umiędzynarodowić sprawę polską.",
    "options": [
      "Uznanie Komitetu Narodowego Polskiego przez mocarstwa zachodnie",
      "Działalność Ignacego Jana Paderewskiego w USA",
      "13 punkt orędzia Woodrowa Wilsona",
      "Deklaracja wersalska w sprawie Polski",
      "Nieograniczona wojna podwodna Niemiec",
      "Bitwa pod Verdun"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_paderewski_wilson.jpg",
    "explanation": "KNP uznano za organ przedstawicielski Polski, Paderewski działał także w USA, Wilson poświęcił Polsce 13 punkt orędzia, a deklaracja wersalska poparła niepodległość Polski."
  },
  {
    "id": "R02_SKU_01",
    "section": "Skutki I wojny światowej",
    "type": "multi_select",
    "prompt": "Zaznacz nowe rodzaje broni i techniki walki związane z I wojną światową.",
    "options": [
      "Czołgi",
      "Samoloty",
      "Łodzie podwodne",
      "Gazy bojowe",
      "Semafory",
      "Gołębie pocztowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do nowych technik walki i rodzajów broni należały czołgi, samoloty, łodzie podwodne i gazy bojowe."
  },
  {
    "id": "R02_SKU_02",
    "section": "Skutki I wojny światowej",
    "type": "single_choice",
    "prompt": "Ilu żołnierzy, w przybliżeniu, poniosło śmierć w I wojnie światowej?",
    "options": [
      "Około 10 mln",
      "Około 1 mln",
      "Około 3 mln",
      "Około 22 mln",
      "Około 50 mln",
      "Około 100 mln"
    ],
    "answer": 0,
    "explanation": "W I wojnie światowej śmierć poniosło około 10 mln żołnierzy, a prawie 22 mln zostało rannych w działaniach wojennych."
  },
  {
    "id": "R02_SKU_03",
    "section": "Skutki I wojny światowej",
    "type": "fill_in",
    "prompt": "W działaniach wojennych rannych zostało prawie __________ mln ludzi, a pandemia hiszpanki trwała w latach __________.",
    "options": null,
    "answer": [
      "22",
      "1918-1919"
    ],
    "altAnswers": [
      [
        "22",
        "22 mln"
      ],
      [
        "1918-1919",
        "1918–1919",
        "1918 - 1919"
      ]
    ],
    "explanation": "Prawie 22 mln żołnierzy zostało rannych, a pandemia hiszpanki w latach 1918-1919 dotknęła około jednej trzeciej ludności świata."
  },
  {
    "id": "R02_SKU_04",
    "section": "Skutki I wojny światowej",
    "type": "true_false",
    "prompt": "Liga Narodów powstała jako organizacja zajmująca się utrzymywaniem światowego pokoju.",
    "options": null,
    "answer": true,
    "explanation": "Powstanie Ligi Narodów było jednym ze skutków wojny; jej zadaniem miało być utrzymywanie światowego pokoju."
  },
  {
    "id": "R02_SKU_05",
    "section": "Skutki I wojny światowej",
    "type": "multi_select",
    "prompt": "Zaznacz dynastie, których upadek należał do skutków I wojny światowej.",
    "options": [
      "Habsburgowie",
      "Romanowowie",
      "Hohenzollernowie",
      "Burbonowie",
      "Tudorowie",
      "Jagiellonowie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wśród skutków wojny znalazł się upadek dynastii Habsburgów, Romanowów i Hohenzollernów."
  },
  {
    "id": "R02_SKU_06",
    "section": "Skutki I wojny światowej",
    "type": "sort",
    "prompt": "Przyporządkuj następstwa wojny do dwóch grup.",
    "options": null,
    "items": [
      "Finlandia",
      "Polska",
      "Czechosłowacja",
      "Królestwo SHS",
      "powstanie Ligi Narodów",
      "Austria staje się republiką",
      "Niemcy przestają być mocarstwem",
      "upadek dynastii Romanowów"
    ],
    "categories": [
      "nowe państwa",
      "inne następstwa polityczne"
    ],
    "answer": {
      "nowe państwa": [
        "Finlandia",
        "Polska",
        "Czechosłowacja",
        "Królestwo SHS"
      ],
      "inne następstwa polityczne": [
        "powstanie Ligi Narodów",
        "Austria staje się republiką",
        "Niemcy przestają być mocarstwem",
        "upadek dynastii Romanowów"
      ]
    },
    "image": "r02_skutki_wojny_europa.jpg",
    "explanation": "Po wojnie zmieniły się granice i powstały nowe państwa, a równocześnie zaszły ważne zmiany ustrojowe i międzynarodowe."
  },
  {
    "id": "R02_SKU_07",
    "section": "Skutki I wojny światowej",
    "type": "single_choice",
    "prompt": "Które państwo odzyskało niepodległość jako jeden ze skutków I wojny światowej?",
    "options": [
      "Polska",
      "Niemcy",
      "Francja",
      "Wielka Brytania",
      "Belgia",
      "Włochy"
    ],
    "answer": 0,
    "explanation": "Odzyskanie niepodległości przez Polskę było jednym ze skutków I wojny światowej."
  },
  {
    "id": "R02_SKU_08",
    "section": "Skutki I wojny światowej",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do nowych państw powstałych po wojnie: Finlandia, Czechosłowacja, Polska, Niemcy.",
    "options": null,
    "answer": "Niemcy",
    "image": "r02_skutki_wojny_europa.jpg",
    "explanation": "Finlandia, Czechosłowacja i Polska należały do państw, które uzyskały lub odzyskały niepodległość po wojnie. Niemcy istniały przed wojną i po niej przestały być mocarstwem."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Francja i Rosja porozumiały się w 1892 r. W którym roku dołączyła Wielka Brytania?",
    "options": [
      "1897",
      "1882",
      "1892",
      "1904",
      "1907",
      "1914"
    ],
    "answer": 0,
    "explanation": "Trójporozumienie powstawało etapami: Francja i Rosja porozumiały się w 1892 r., a Wielka Brytania dołączyła w 1897 r."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Niemcy zaatakowały Belgię i Luksemburg 3-4 VIII __________, a klęskę nad Marną poniosły 6-9 IX __________.",
    "options": null,
    "answer": [
      "1914 r.",
      "1914 r."
    ],
    "altAnswers": [
      [
        "1914 r.",
        "1914",
        "1914 r"
      ],
      [
        "1914 r.",
        "1914",
        "1914 r"
      ]
    ],
    "explanation": "Oba wydarzenia należą do kampanii 1914 r.: atak na Belgię i Luksemburg nastąpił na początku sierpnia, a bitwa nad Marną we wrześniu."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie frontu wschodniego z jego następstwem lub opisem.",
    "options": null,
    "left": [
      "Przełamanie pod Gorlicami",
      "Odzyskanie Lwowa",
      "Zajęcie Królestwa Polskiego",
      "Szarża pod Rokitną"
    ],
    "right": [
      "Rosjanie zostali zmuszeni do odwrotu",
      "Miasto wróciło pod kontrolę Austriaków",
      "Dokonały tego wojska niemieckie",
      "Dowodził rotm. Zbigniew Dunin-Wąsowicz"
    ],
    "answer": {
      "Przełamanie pod Gorlicami": "Rosjanie zostali zmuszeni do odwrotu",
      "Odzyskanie Lwowa": "Miasto wróciło pod kontrolę Austriaków",
      "Zajęcie Królestwa Polskiego": "Dokonały tego wojska niemieckie",
      "Szarża pod Rokitną": "Dowodził rotm. Zbigniew Dunin-Wąsowicz"
    },
    "explanation": "W 1915 r. przełamanie pod Gorlicami wymusiło rosyjski odwrót, Austriacy odzyskali Lwów, Niemcy zajęli Królestwo Polskie, a pod Rokitną szarżowali polscy ułani."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto dowodził kontrofensywą rosyjską z okresu V-IX 1916 r., która przerwała front i przyniosła wielkie straty armii austriackiej?",
    "options": [
      "Aleksiej Brusiłow",
      "Aleksander Kiereński",
      "Lew Trocki",
      "Zbigniew Dunin-Wąsowicz",
      "Józef Haller",
      "Stanisław Szeptycki"
    ],
    "answer": 0,
    "explanation": "Kontrofensywą w 1916 r. dowodził gen. Aleksiej Brusiłow. Rosjanie zajęli Galicję Wschodnią, a armia austriacka poniosła duże straty."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz środek zwalczania U-Bootów z właściwą informacją.",
    "options": null,
    "left": [
      "Statki-pułapki",
      "Bomby głębinowe",
      "Małe sterowce",
      "Specjalne okręty podwodne"
    ],
    "right": [
      "Stosowane od 1915 r. i udawały jednostki cywilne",
      "Wynalezione w 1916 r.",
      "Patrolowały morze",
      "Przeznaczone tylko do zwalczania U-Bootów"
    ],
    "answer": {
      "Statki-pułapki": "Stosowane od 1915 r. i udawały jednostki cywilne",
      "Bomby głębinowe": "Wynalezione w 1916 r.",
      "Małe sterowce": "Patrolowały morze",
      "Specjalne okręty podwodne": "Przeznaczone tylko do zwalczania U-Bootów"
    },
    "image": "r02_uboot_wojna_podwodna.jpg",
    "explanation": "Brytyjczycy odpowiadali na sukcesy U-Bootów statkami-pułapkami, bombami głębinowymi, sterowcami patrolowymi i specjalnymi okrętami podwodnymi."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po rewolucji lutowej w Rosji działały dwa ośrodki władzy. Jeden z nich był wybierany bezpośrednio przez robotników, chłopów, żołnierzy i marynarzy i miał większe poparcie społeczne. O który ośrodek chodzi?",
    "options": [
      "Rady Delegatów Robotniczych i Żołnierskich",
      "Rząd Tymczasowy",
      "Rada Regencyjna",
      "Komitet Narodowy Polski",
      "Naczelny Komitet Narodowy",
      "Trójporozumienie"
    ],
    "answer": 0,
    "image": "r02_rewolucja_piotrogrod.jpg",
    "explanation": "Rady miały większe poparcie niż Rząd Tymczasowy, ponieważ były wybierane bezpośrednio przez robotników, chłopów, żołnierzy i marynarzy."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż szczegółowe wydarzenia rosyjskie w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Pokój brzeski 3 III 1918 r.",
      "Rewolucja październikowa 24/25 X 1917 r.",
      "Abdykacja Mikołaja II 2 III 1917 r.",
      "Zamordowanie Mikołaja II 16-17 VII 1918 r.",
      "Tezy kwietniowe Lenina"
    ],
    "answer": [
      "Abdykacja Mikołaja II 2 III 1917 r.",
      "Tezy kwietniowe Lenina",
      "Rewolucja październikowa 24/25 X 1917 r.",
      "Pokój brzeski 3 III 1918 r.",
      "Zamordowanie Mikołaja II 16-17 VII 1918 r."
    ],
    "explanation": "Po abdykacji cara Lenin ogłosił tezy kwietniowe, jesienią bolszewicy przejęli władzę, w marcu 1918 r. podpisano pokój brzeski, a w lipcu bolszewicy zamordowali byłego cara i jego rodzinę."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto wraz z Józefem Piłsudskim powołał w 1908 r. tajny Związek Walki Czynnej?",
    "options": [
      "Kazimierz Sosnkowski",
      "Roman Dmowski",
      "Ignacy Jan Paderewski",
      "Józef Haller",
      "Stanisław Szeptycki",
      "Zbigniew Dunin-Wąsowicz"
    ],
    "answer": 0,
    "explanation": "W 1908 r. Józef Piłsudski i Kazimierz Sosnkowski powołali Związek Walki Czynnej, który miał przygotowywać kadry do przyszłego powstania w zaborze rosyjskim."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie związane ze sprawą polską z datą.",
    "options": null,
    "left": [
      "Rosyjska odezwa do Polaków",
      "Akt 5 listopada",
      "Orędzie Wilsona z punktem polskim",
      "Bitwa pod Kaniowem"
    ],
    "right": [
      "14 VIII 1914 r.",
      "5 XI 1916 r.",
      "8 I 1918 r.",
      "11 V 1918 r."
    ],
    "answer": {
      "Rosyjska odezwa do Polaków": "14 VIII 1914 r.",
      "Akt 5 listopada": "5 XI 1916 r.",
      "Orędzie Wilsona z punktem polskim": "8 I 1918 r.",
      "Bitwa pod Kaniowem": "11 V 1918 r."
    },
    "explanation": "Daty te pokazują kolejne etapy umiędzynarodowienia sprawy polskiej oraz działań polskich formacji wojskowych."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe zdania dotyczące mobilizacji i strat w I wojnie światowej.",
    "options": [
      "Państwa Ententy zmobilizowały łącznie 29 mln żołnierzy",
      "Niemcy i Austro-Węgry zmobilizowały łącznie 22 mln żołnierzy",
      "Liczba zabitych i zmarłych z ran w armiach Austro-Węgier i Wielkiej Brytanii razem była równa liczbie dla Niemiec",
      "Najniższą wartość zabitych i zmarłych z ran miały Austro-Węgry i Wielka Brytania",
      "Francja zmobilizowała więcej żołnierzy niż Rosja"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Państwa Ententy zmobilizowały łącznie 13+8+8=29 mln żołnierzy, a Niemcy i Austro-Węgry 13+9=22 mln. Austro-Węgry i Wielka Brytania miały po 1,0 mln zabitych i zmarłych z ran, razem tyle co Niemcy - 2,0 mln."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rosja i Niemcy zmobilizowały po __________ mln żołnierzy, a liczba zabitych i zmarłych z ran po stronie Niemiec wyniosła __________ mln.",
    "options": null,
    "answer": [
      "13",
      "2,0"
    ],
    "altAnswers": [
      [
        "13",
        "13 mln"
      ],
      [
        "2,0",
        "2",
        "2 mln",
        "2,0 mln"
      ]
    ],
    "explanation": "Rosja i Niemcy zmobilizowały po 13 mln żołnierzy, a po stronie Niemiec było 2,0 mln zabitych i zmarłych z ran."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 1918 r. Niemcy przerzucają wojska z frontu wschodniego na zachodni, licząc na pokonanie Francji. Plan nie przynosi zwycięstwa, bo na zachodzie pojawił się nowy silny przeciwnik. Które połączenie wydarzeń najlepiej wyjaśnia tę sytuację?",
    "options": [
      "Rosja wycofała się z wojny, a USA przystąpiły do walk po stronie Ententy",
      "Rosja przystąpiła do Ententy, a USA wycofały się z wojny",
      "Włochy przeszły do państw centralnych, a Francja opuściła Ententę",
      "Niemcy podpisały pokój z Wielką Brytanią, a Rosja zajęła Paryż",
      "Austro-Węgry przeszły do Ententy, a USA wsparły Niemcy",
      "Belgia zajęła Rosję, a Francja podpisała pokój brzeski"
    ],
    "answer": 0,
    "explanation": "Wycofanie Rosji umożliwiło Niemcom przesunięcie wojsk na zachód, ale tam zetknęły się one z wojskami USA, które przystąpiły do wojny po stronie Ententy."
  }
];

const KID_PROMPTS = {
  "R02_WYB_09": "Które państwo poparło Serbię i ogłosiło mobilizację?",
  "R02_FRO_05": "Jak nazywała się walka z okopów na stałej linii frontu?",
  "R02_TAK_07": "Jak nazywało się atakowanie przez U-Booty także statków neutralnych i cywilnych?",
  "R02_ROS_06": "Kto wrócił do Rosji w 1917 r. i ogłosił tezy kwietniowe?",
  "R02_POL_08": "Jak nazwano odmowę złożenia przysięgi przez część legionistów?",
  "R02_HARD_12": "Dlaczego niemiecki plan na froncie zachodnim w 1918 r. się nie udał?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "I wojna światowa - wielka wojna",
  icon: "⚔️",
  sectionOrder: [
    "Wybuch wojny i sojusze",
    "Fronty i najważniejsze bitwy",
    "Taktyka i nowe rodzaje broni",
    "Rewolucje w Rosji",
    "Sprawa polska",
    "Skutki I wojny światowej"
  ],
  sectionIcons: {
    "Wybuch wojny i sojusze": "💥",
    "Fronty i najważniejsze bitwy": "🗺️",
    "Taktyka i nowe rodzaje broni": "🛡️",
    "Rewolucje w Rosji": "🇷🇺",
    "Sprawa polska": "🇵🇱",
    "Skutki I wojny światowej": "🕊️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
