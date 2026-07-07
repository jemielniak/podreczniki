// Skróty sekcji:
//   UNI = Unia Polski z Litwą
//   WOJ = Wielka wojna z zakonem krzyżackim
//   SYN = Synowie Jagiełły
//   SZL = Od rycerstwa do szlachty
//   KUL = Polska i Litwa w XV wieku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R08_UNI_01",
    "section": "Unia Polski z Litwą",
    "type": "single_choice",
    "prompt": "Dlaczego unię Polski z Węgrami z 1370 r. nazywamy unią personalną?",
    "explanation": "Unię nazywano personalną, ponieważ Polskę i Węgry łączyła tylko osoba wspólnego monarchy, a każde państwo zachowało osobne urzędy, skarb, armię i prawa.",
    "options": [
      "Bo oba państwa miały wspólnego króla",
      "Bo Polska została wcielona do Węgier",
      "Bo Węgry przyjęły polskie prawa",
      "Bo oba państwa miały jeden skarb",
      "Bo oba państwa połączyły armie",
      "Bo rządzili nimi wspólnie rycerze"
    ],
    "answer": 0
  },
  {
    "id": "R08_UNI_02",
    "section": "Unia Polski z Litwą",
    "type": "true_false",
    "prompt": "Jadwiga Andegaweńska została koronowana na króla Polski, bo miała pełne prawa monarchy.",
    "explanation": "Jadwigę zwykle nazywa się królową, ale w 1384 r. została koronowana na króla Polski i miała prawa monarchy.",
    "options": null,
    "answer": true,
    "image": "/img/r08_jadwiga_jagiello_unia.jpg"
  },
  {
    "id": "R08_UNI_03",
    "section": "Unia Polski z Litwą",
    "type": "multi_select",
    "prompt": "Zaznacz cechy Litwinów przed chrztem Jagiełły według rozdziału.",
    "explanation": "Podręcznik podkreśla, że Litwini należeli do ludów bałtyckich, byli poganami i nie znali pisma.",
    "options": [
      "Należeli do ludów bałtyckich",
      "Byli poganami",
      "Nie znali pisma",
      "Byli prawosławnymi Słowianami",
      "Od X w. znali pismo",
      "Byli poddanymi króla Polski"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R08_UNI_04",
    "section": "Unia Polski z Litwą",
    "type": "match",
    "prompt": "Połącz grupę z opisem.",
    "explanation": "W rozdziale Litwini i Rusini zostali zestawieni przez pochodzenie, religię i znajomość pisma.",
    "options": null,
    "left": [
      "Litwini",
      "Rusini",
      "Bojarzy",
      "Krzyżacy"
    ],
    "right": [
      "lud bałtycki, początkowo pogański",
      "słowianie, od X w. prawosławni",
      "możni panowie i rycerze litewscy",
      "zakon zagrażający Litwie"
    ],
    "answer": {
      "Litwini": "lud bałtycki, początkowo pogański",
      "Rusini": "słowianie, od X w. prawosławni",
      "Bojarzy": "możni panowie i rycerze litewscy",
      "Krzyżacy": "zakon zagrażający Litwie"
    }
  },
  {
    "id": "R08_UNI_05",
    "section": "Unia Polski z Litwą",
    "type": "sort",
    "prompt": "Przyporządkuj oczekiwane korzyści z unii do państwa.",
    "explanation": "Polska chciała zakończyć najazdy i odzyskać ziemie, a Litwa szukała pomocy przeciw Krzyżakom i Moskwie oraz chrztu z rąk Polaków.",
    "options": null,
    "items": [
      "położenie kresu litewskim najazdom",
      "odzyskanie utraconych ziem",
      "obrona przed Krzyżakami",
      "pomoc przeciwko Moskwie",
      "przyjęcie chrztu od Polaków"
    ],
    "categories": [
      "Polska",
      "Litwa"
    ],
    "answer": {
      "Polska": [
        "położenie kresu litewskim najazdom",
        "odzyskanie utraconych ziem"
      ],
      "Litwa": [
        "obrona przed Krzyżakami",
        "pomoc przeciwko Moskwie",
        "przyjęcie chrztu od Polaków"
      ]
    }
  },
  {
    "id": "R08_UNI_06",
    "section": "Unia Polski z Litwą",
    "type": "fill_in",
    "prompt": "Umowę o warunkach przyszłej unii podpisano w __________ w roku __________.",
    "explanation": "Warunki przyszłej unii ustalono w Krewie w 1385 r.",
    "options": null,
    "answer": [
      "Krewie",
      "1385"
    ],
    "altAnswers": [
      [
        "Krewie",
        "Krewo"
      ],
      [
        "1385",
        "1385 r."
      ]
    ]
  },
  {
    "id": "R08_UNI_07",
    "section": "Unia Polski z Litwą",
    "type": "multi_select",
    "prompt": "Co obiecał Jagiełło w zamian za rękę Jadwigi i polską koronę?",
    "explanation": "W Krewie Jagiełło zobowiązał się m.in. przyjąć chrzest, odzyskać utracone ziemie Polski, uwolnić jeńców i przyłączyć Litwę do Polski.",
    "options": [
      "Przyjąć chrzest wraz z poddanymi",
      "Odzyskać ziemie utracone przez Polskę",
      "Uwolnić polskich jeńców wojennych",
      "Przyłączyć Wielkie Księstwo Litewskie do Polski",
      "Oddać Pomorze Gdańskie Krzyżakom",
      "Podporządkować Ruś Tatarom"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R08_UNI_08",
    "section": "Unia Polski z Litwą",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "explanation": "Najpierw doszło do śmierci Kazimierza Wielkiego i unii z Węgrami, później koronacji Jadwigi, umowy w Krewie oraz chrztu, ślubu i koronacji Jagiełły.",
    "options": null,
    "items": [
      "umowa w Krewie",
      "koronacja Jadwigi",
      "chrzest, ślub i koronacja Jagiełły",
      "śmierć Kazimierza Wielkiego"
    ],
    "answer": [
      "śmierć Kazimierza Wielkiego",
      "koronacja Jadwigi",
      "umowa w Krewie",
      "chrzest, ślub i koronacja Jagiełły"
    ]
  },
  {
    "id": "R08_UNI_09",
    "section": "Unia Polski z Litwą",
    "type": "single_choice",
    "prompt": "Jakie imię przyjął Jagiełło na chrzcie w 1386 r.?",
    "explanation": "Po chrzcie Jagiełło otrzymał imię Władysław.",
    "options": [
      "Władysław",
      "Kazimierz",
      "Ludwik",
      "Witold",
      "Jan",
      "Aleksander"
    ],
    "answer": 0,
    "image": "/img/r08_jadwiga_jagiello_unia.jpg"
  },
  {
    "id": "R08_UNI_10",
    "section": "Unia Polski z Litwą",
    "type": "riddle",
    "prompt": "Jak nazywała się uczelnia, której Jadwiga zapisała swoje klejnoty?",
    "explanation": "Jadwiga zapisała klejnoty Akademii Krakowskiej, a Władysław Jagiełło odnowił ją w 1400 r.",
    "options": null,
    "answer": "Akademia Krakowska",
    "altAnswers": [
      "Akademia Krakowska",
      "Akademii Krakowskiej",
      "Uniwersytet Krakowski"
    ]
  },
  {
    "id": "R08_UNI_11",
    "section": "Unia Polski z Litwą",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Krzyżacy, Wielkie Księstwo Moskiewskie, Tatarzy, Akademia Krakowska.",
    "explanation": "Krzyżacy, Moskwa i Tatarzy byli wrogami lub zagrożeniami Litwy, a Akademia Krakowska była uczelnią.",
    "options": null,
    "answer": "Akademia Krakowska"
  },
  {
    "id": "R08_UNI_12",
    "section": "Unia Polski z Litwą",
    "type": "scenario",
    "prompt": "Jesteś litewskim bojarzynem w 1385 r. Liczysz, że po unii z Polską twoja grupa uzyska prawa podobne do praw polskiego rycerstwa. Która korzyść z unii najlepiej opisuje twoją nadzieję?",
    "explanation": "Litewscy bojarzy liczyli, że dzięki unii otrzymają uprawnienia polskiego rycerstwa.",
    "options": [
      "Uzyskanie uprawnień polskiego rycerstwa",
      "Odzyskanie Pomorza Gdańskiego",
      "Zwiększenie podatków dla szlachty",
      "Zajęcie Malborka",
      "Zerwanie kontaktów z Polską"
    ],
    "answer": 0
  },
  {
    "id": "R08_WOJ_01",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "single_choice",
    "prompt": "Dlaczego po unii polsko-litewskiej sytuacja zakonu krzyżackiego pogorszyła się?",
    "explanation": "Po unii przeciwnicy zakonu połączyli siły, a chrzest Litwy osłabił sens istnienia zakonu jako siły nawracającej pogan.",
    "options": [
      "Przeciwnicy zakonu połączyli siły, a Litwa przyjęła chrzest",
      "Zakon zdobył całe Pomorze Gdańskie",
      "Polska przestała interesować się Litwą",
      "Litwa wróciła do pogaństwa",
      "Krzyżacy dobrowolnie oddali Malbork",
      "Węgry zajęły Prusy"
    ],
    "answer": 0
  },
  {
    "id": "R08_WOJ_02",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "true_false",
    "prompt": "Zamek w Malborku był stolicą państwa zakonu krzyżackiego.",
    "explanation": "Podręcznik opisuje zamek w Malborku jako stolicę zakonnego państwa i jedną z najpotężniejszych warowni w Europie.",
    "options": null,
    "answer": true,
    "image": "/img/r08_zamek_malbork.jpg"
  },
  {
    "id": "R08_WOJ_03",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "multi_select",
    "prompt": "Zaznacz elementy zamku w Malborku wymienione w infografice.",
    "explanation": "Infografika wskazuje m.in. Zamek Wysoki, Pałac wielkiego mistrza, Wielki refektarz i gdanisko.",
    "options": [
      "Zamek Wysoki",
      "Pałac wielkiego mistrza",
      "Wielki refektarz",
      "Gdanisko",
      "Koloseum",
      "Latarnia morska"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r08_zamek_malbork.jpg"
  },
  {
    "id": "R08_WOJ_04",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "fill_in",
    "prompt": "Wielka wojna z zakonem krzyżackim trwała w latach __________-__________.",
    "explanation": "Wielka wojna Polski i Litwy z zakonem krzyżackim trwała od 1409 do 1411 r.",
    "options": null,
    "answer": [
      "1409",
      "1411"
    ],
    "altAnswers": [
      [
        "1409",
        "1409 r."
      ],
      [
        "1411",
        "1411 r."
      ]
    ]
  },
  {
    "id": "R08_WOJ_05",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "scenario",
    "prompt": "Na Żmudzi wybucha powstanie przeciw Krzyżakom. Litwini je popierają, a polski poseł zapowiada, że Polska stanie w obronie Litwy. Co robi zakon?",
    "explanation": "Krzyżacy postanowili najpierw uderzyć na Polskę: wypowiedzieli jej wojnę i zajęli ziemię dobrzyńską.",
    "options": [
      "Wypowiada wojnę Polsce i zajmuje ziemię dobrzyńską",
      "Oddaje Żmudź bez walki",
      "Prosi Jagiełłę o chrzest",
      "Przenosi stolicę do Krakowa"
    ],
    "answer": 0
  },
  {
    "id": "R08_WOJ_06",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "single_choice",
    "prompt": "Kiedy rozegrała się bitwa pod Grunwaldem?",
    "explanation": "Obie armie spotkały się 15 lipca 1410 r. na Mazurach, gdzie doszło do bitwy pod Grunwaldem.",
    "options": [
      "15 lipca 1410 r.",
      "10 listopada 1444 r.",
      "13 października 1466 r.",
      "1 stycznia 1400 r.",
      "15 lipca 1386 r.",
      "3 maja 1505 r."
    ],
    "answer": 0,
    "image": "/img/r08_bitwa_grunwald.jpg"
  },
  {
    "id": "R08_WOJ_07",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "match",
    "prompt": "Połącz armię z jej opisem spod Grunwaldu.",
    "explanation": "Podręcznik podaje, że armia polsko-litewska liczyła około 30 tysięcy ludzi, a krzyżacka około 20 tysięcy.",
    "options": null,
    "left": [
      "armia polsko-litewska",
      "armia krzyżacka",
      "goście zakonu",
      "odwód"
    ],
    "right": [
      "około 30 tysięcy ludzi: Polacy, Litwini, Rusini, Czesi i Tatarzy",
      "około 20 tysięcy ludzi, w tym Krzyżacy, rycerze i najemnicy",
      "rycerze z Zachodu walczący po stronie zakonu",
      "rezerwowy oddział wojska"
    ],
    "answer": {
      "armia polsko-litewska": "około 30 tysięcy ludzi: Polacy, Litwini, Rusini, Czesi i Tatarzy",
      "armia krzyżacka": "około 20 tysięcy ludzi, w tym Krzyżacy, rycerze i najemnicy",
      "goście zakonu": "rycerze z Zachodu walczący po stronie zakonu",
      "odwód": "rezerwowy oddział wojska"
    }
  },
  {
    "id": "R08_WOJ_08",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "true_false",
    "prompt": "Wielki mistrz przysłał Jagielle dwa miecze, a dziś historycy widzą w tym raczej zachętę do walki niż wyłącznie obrazę.",
    "explanation": "Podręcznik zaznacza, że dawny kronikarz uznał gest za obraźliwy, ale współcześni historycy traktują go jako zachętę do walki świadczącą o szacunku.",
    "options": null,
    "answer": true
  },
  {
    "id": "R08_WOJ_09",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia bitwy pod Grunwaldem w poprawnej kolejności.",
    "explanation": "Najpierw doszło do przekazania mieczy i ataku, później upadku chorągwi, ataku wielkiego mistrza i decydującego uderzenia odwodów Jagiełły.",
    "options": null,
    "items": [
      "wielki mistrz rusza z najlepszymi oddziałami",
      "Jagiełło przyjmuje dwa miecze i daje rozkaz ataku",
      "upada chorągiew Królestwa Polskiego",
      "odwody Jagiełły przesądzają wynik bitwy"
    ],
    "answer": [
      "Jagiełło przyjmuje dwa miecze i daje rozkaz ataku",
      "upada chorągiew Królestwa Polskiego",
      "wielki mistrz rusza z najlepszymi oddziałami",
      "odwody Jagiełły przesądzają wynik bitwy"
    ]
  },
  {
    "id": "R08_WOJ_10",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "single_choice",
    "prompt": "Co przesądziło o wyniku bitwy pod Grunwaldem według podręcznika?",
    "explanation": "Wynik bitwy przesądziło natarcie jazdy i piechoty, które Jagiełło trzymał w odwodzie.",
    "options": [
      "Natarcie jazdy i piechoty trzymanych w odwodzie",
      "Zdobycie Malborka tego samego dnia",
      "Ucieczka całej armii polskiej",
      "Pomoc wojsk tureckich",
      "Rozejm zawarty przed bitwą",
      "Oddanie Pomorza Gdańskiego"
    ],
    "answer": 0,
    "image": "/img/r08_bitwa_grunwald.jpg"
  },
  {
    "id": "R08_WOJ_11",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia pierwszego pokoju toruńskiego z 1411 r.",
    "explanation": "Pierwszy pokój toruński oddał Polsce ziemię dobrzyńską, Litwie Żmudź i nakazał Krzyżakom zapłacić ogromne odszkodowanie.",
    "options": [
      "Polska odzyskała ziemię dobrzyńską",
      "Litwa odzyskała Żmudź",
      "Krzyżacy zapłacili ogromne odszkodowanie",
      "Polska odzyskała Pomorze Gdańskie",
      "Litwa zajęła Malbork",
      "Zakon został lennem Polski"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R08_WOJ_12",
    "section": "Wielka wojna z zakonem krzyżackim",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ziemia dobrzyńska, Żmudź, odszkodowanie wojenne, Warna.",
    "explanation": "Ziemia dobrzyńska, Żmudź i odszkodowanie wiążą się z pierwszym pokojem toruńskim, a Warna z bitwą Władysława Warneńczyka z Turkami.",
    "options": null,
    "answer": "Warna"
  },
  {
    "id": "R08_SYN_01",
    "section": "Synowie Jagiełły",
    "type": "single_choice",
    "prompt": "Czym różni się monarchia elekcyjna od dziedzicznej?",
    "explanation": "W monarchii elekcyjnej król pochodzi z wyboru, a w dziedzicznej tron obejmuje syn lub inny krewny zmarłego władcy.",
    "options": [
      "W elekcyjnej króla wybierano, a w dziedzicznej tron przejmował krewny",
      "W elekcyjnej rządził zawsze najstarszy syn",
      "W dziedzicznej króla wybierała szlachta",
      "W elekcyjnej nie było króla",
      "W dziedzicznej rządziły miasta",
      "W elekcyjnej rządził sułtan"
    ],
    "answer": 0
  },
  {
    "id": "R08_SYN_02",
    "section": "Synowie Jagiełły",
    "type": "true_false",
    "prompt": "Po wyborze Jagiełły na polski tron Polska stała się monarchią elekcyjną.",
    "explanation": "Podręcznik stwierdza, że po wyborze Jagiełły Polska przestała być monarchią dziedziczną i stała się elekcyjną.",
    "options": null,
    "answer": true
  },
  {
    "id": "R08_SYN_03",
    "section": "Synowie Jagiełły",
    "type": "fill_in",
    "prompt": "Władysław, syn Jagiełły, został koronowany na króla Węgier w roku __________.",
    "explanation": "W 1440 r. szesnastoletni Władysław został koronowany na króla Węgier, co stworzyło drugą unię polsko-węgierską.",
    "options": null,
    "answer": [
      "1440"
    ],
    "altAnswers": [
      [
        "1440",
        "1440 r."
      ]
    ]
  },
  {
    "id": "R08_SYN_04",
    "section": "Synowie Jagiełły",
    "type": "multi_select",
    "prompt": "Dlaczego polscy możni poparli Władysława jako kandydata do tronu Węgier?",
    "explanation": "Polscy możni chcieli zawrzeć unię z Węgrami, wspólnie wypędzić Turków z Europy i zwiększyć znaczenie Polski.",
    "options": [
      "Chcieli zawrzeć unię z Węgrami",
      "Liczyli na wspólną walkę z Turkami",
      "Mieli nadzieję na wzrost znaczenia Polski",
      "Chcieli oddać Pomorze Krzyżakom",
      "Chcieli zlikwidować Akademię Krakowską",
      "Chcieli przyłączyć Polskę do imperium osmańskiego"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R08_SYN_05",
    "section": "Synowie Jagiełły",
    "type": "scenario",
    "prompt": "Król zawiera z sułtanem korzystny, dziesięcioletni pokój, ale wysłannik papieża namawia go do wznowienia wojny, twierdząc, że układ z „niewiernymi” jest nieważny. O którym królu mowa?",
    "explanation": "Chodzi o Władysława Warneńczyka, którego namówiono do złamania pokoju z Turkami.",
    "options": [
      "Władysław Warneńczyk",
      "Kazimierz Wielki",
      "Ludwik Węgierski",
      "Wit Stwosz",
      "Paweł Włodkowic"
    ],
    "answer": 0,
    "image": "/img/r08_bitwa_warna.jpg"
  },
  {
    "id": "R08_SYN_06",
    "section": "Synowie Jagiełły",
    "type": "single_choice",
    "prompt": "Jak zakończyła się bitwa pod Warną w 1444 r.?",
    "explanation": "Bitwa zakończyła się klęską Węgrów; Władysław zginął, a jego śmierć położyła kres unii polsko-węgierskiej.",
    "options": [
      "Klęską Węgrów i śmiercią Władysława",
      "Zdobyciem Konstantynopola przez Polskę",
      "Zwycięstwem Polaków i zajęciem Malborka",
      "Zawarciem unii Polski z Litwą",
      "Powstaniem Związku Pruskiego",
      "Koronacją Jadwigi"
    ],
    "answer": 0,
    "image": "/img/r08_bitwa_warna.jpg"
  },
  {
    "id": "R08_SYN_07",
    "section": "Synowie Jagiełły",
    "type": "riddle",
    "prompt": "Jakim przydomkiem nazwano Władysława po śmierci w bitwie z Turkami?",
    "explanation": "Po śmierci pod Warną Władysław otrzymał przydomek Warneńczyk.",
    "options": null,
    "answer": "Warneńczyk",
    "altAnswers": [
      "Warneńczyk",
      "Władysław Warneńczyk"
    ]
  },
  {
    "id": "R08_SYN_08",
    "section": "Synowie Jagiełły",
    "type": "match",
    "prompt": "Połącz pojęcie lub osobę z opisem.",
    "explanation": "Rozdział wyjaśnia kluczowe pojęcia dotyczące synów Jagiełły i wojny trzynastoletniej.",
    "options": null,
    "left": [
      "sułtan",
      "janczarzy",
      "Związek Pruski",
      "akt inkorporacji"
    ],
    "right": [
      "władca Turcji osmańskiej",
      "najlepsze oddziały tureckiej piechoty",
      "organizacja mieszczan i rycerzy państwa zakonnego",
      "dokument wcielenia Prus do Polski"
    ],
    "answer": {
      "sułtan": "władca Turcji osmańskiej",
      "janczarzy": "najlepsze oddziały tureckiej piechoty",
      "Związek Pruski": "organizacja mieszczan i rycerzy państwa zakonnego",
      "akt inkorporacji": "dokument wcielenia Prus do Polski"
    }
  },
  {
    "id": "R08_SYN_09",
    "section": "Synowie Jagiełły",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do wojny trzynastoletniej.",
    "explanation": "Najpierw powstał Związek Pruski, następnie wypowiedział posłuszeństwo wielkiemu mistrzowi, wybuchło powstanie, a Kazimierz Jagiellończyk wydał akt inkorporacji.",
    "options": null,
    "items": [
      "wybuch powstania w Prusach",
      "założenie Związku Pruskiego",
      "akt inkorporacji Prus do Polski",
      "wypowiedzenie posłuszeństwa wielkiemu mistrzowi"
    ],
    "answer": [
      "założenie Związku Pruskiego",
      "wypowiedzenie posłuszeństwa wielkiemu mistrzowi",
      "wybuch powstania w Prusach",
      "akt inkorporacji Prus do Polski"
    ]
  },
  {
    "id": "R08_SYN_10",
    "section": "Synowie Jagiełły",
    "type": "single_choice",
    "prompt": "Dlaczego wojna trzynastoletnia otrzymała taką nazwę?",
    "explanation": "Wojna trwała od 1454 do 1466 r., czyli 13 lat.",
    "options": [
      "Bo trwała 13 lat",
      "Bo walczyło w niej 13 królów",
      "Bo zdobyto 13 zamków jednego dnia",
      "Bo rozpoczęła się 13 lipca",
      "Bo zakończyła się w XIII wieku",
      "Bo brało w niej udział 13 państw"
    ],
    "answer": 0
  },
  {
    "id": "R08_SYN_11",
    "section": "Synowie Jagiełły",
    "type": "multi_select",
    "prompt": "Co zrobił Kazimierz Jagiellończyk, gdy zrozumiał, że do zwycięstwa potrzebuje pieniędzy?",
    "explanation": "Król zdobył pieniądze dzięki podatkom, pożyczkom i pomocy miast pomorskich, zwerbował najemników oraz wykupił zamek w Malborku.",
    "options": [
      "Uzyskał pieniądze z podatków i pożyczek",
      "Skorzystał ze wsparcia Gdańska i innych miast pomorskich",
      "Zwerbował wojska najemne",
      "Wykupił zamek w Malborku od najemników",
      "Rozwiązał Związek Pruski",
      "Oddał Prusy zakonowi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r08_zamek_malbork.jpg"
  },
  {
    "id": "R08_SYN_12",
    "section": "Synowie Jagiełły",
    "type": "sort",
    "prompt": "Przyporządkuj skutki drugiego pokoju toruńskiego.",
    "explanation": "Drugi pokój toruński przyłączył do Polski Prusy Królewskie, a państwo zakonne stało się jej lennem jako Prusy Zakonne.",
    "options": null,
    "items": [
      "Pomorze Gdańskie",
      "ziemia chełmińska",
      "Malbork",
      "Elbląg",
      "Warmia",
      "Prusy Zakonne"
    ],
    "categories": [
      "Prusy Królewskie",
      "Lenno Polski"
    ],
    "answer": {
      "Prusy Królewskie": [
        "Pomorze Gdańskie",
        "ziemia chełmińska",
        "Malbork",
        "Elbląg",
        "Warmia"
      ],
      "Lenno Polski": [
        "Prusy Zakonne"
      ]
    }
  },
  {
    "id": "R08_SZL_01",
    "section": "Od rycerstwa do szlachty",
    "type": "single_choice",
    "prompt": "Co przyznawał rycerstwu przywilej koszycki z 1374 r.?",
    "explanation": "Przywilej koszycki wprowadzał dla stanu rycerskiego tylko jeden stały i niewielki podatek.",
    "options": [
      "Jeden stały i niewielki podatek",
      "Prawo do wyboru papieża",
      "Zakaz posiadania herbów",
      "Obowiązek płacenia wielu nowych podatków",
      "Prawo mieszczan do głosu w sejmie",
      "Zniesienie monarchii"
    ],
    "answer": 0
  },
  {
    "id": "R08_SZL_02",
    "section": "Od rycerstwa do szlachty",
    "type": "true_false",
    "prompt": "Przywileje szlacheckie ograniczały władzę monarchy.",
    "explanation": "Przywileje zmniejszały dochody króla i uzależniały podatki oraz pospolite ruszenie od zgody szlachty.",
    "options": null,
    "answer": true
  },
  {
    "id": "R08_SZL_03",
    "section": "Od rycerstwa do szlachty",
    "type": "match",
    "prompt": "Połącz przywilej z postanowieniem.",
    "explanation": "Najważniejsze przywileje dawały rycerstwu i szlachcie ochronę majątku, osobistą nietykalność i wpływ na podatki oraz pospolite ruszenie.",
    "options": null,
    "left": [
      "Koszyce 1374",
      "Czerwińsk 1422",
      "Jedlnia i Kraków 1430/1433",
      "Cerekwica i Nieszawa 1454"
    ],
    "right": [
      "jeden stały i niewielki podatek",
      "król nie może zająć majątku szlachcica bez wyroku sądu",
      "król nie może uwięzić szlachcica bez wyroku sądu",
      "nowe podatki i pospolite ruszenie wymagają zgody szlachty"
    ],
    "answer": {
      "Koszyce 1374": "jeden stały i niewielki podatek",
      "Czerwińsk 1422": "król nie może zająć majątku szlachcica bez wyroku sądu",
      "Jedlnia i Kraków 1430/1433": "król nie może uwięzić szlachcica bez wyroku sądu",
      "Cerekwica i Nieszawa 1454": "nowe podatki i pospolite ruszenie wymagają zgody szlachty"
    }
  },
  {
    "id": "R08_SZL_04",
    "section": "Od rycerstwa do szlachty",
    "type": "fill_in",
    "prompt": "Zjazdy szlachty danego województwa albo ziemi nazywano __________.",
    "explanation": "Sejmiki szlacheckie były zjazdami szlachty danego województwa albo ziemi.",
    "options": null,
    "answer": [
      "sejmikami"
    ],
    "altAnswers": [
      [
        "sejmikami",
        "sejmiki",
        "sejmikami szlacheckimi",
        "sejmiki szlacheckie"
      ]
    ]
  },
  {
    "id": "R08_SZL_05",
    "section": "Od rycerstwa do szlachty",
    "type": "multi_select",
    "prompt": "Zaznacz trzy stany sejmujące sejmu walnego.",
    "explanation": "Sejm walny składał się z króla, izby senatorskiej i izby poselskiej.",
    "options": [
      "Król",
      "Izba senatorska",
      "Izba poselska",
      "Związek Pruski",
      "Janczarzy",
      "Akademia Krakowska"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r08_sejm_walny.jpg"
  },
  {
    "id": "R08_SZL_06",
    "section": "Od rycerstwa do szlachty",
    "type": "single_choice",
    "prompt": "Co oznaczała konstytucja Nihil novi z 1505 r.?",
    "explanation": "Nihil novi oznaczało, że sejm nie mógł uchwalić nic nowego bez zgody wszystkich trzech stanów sejmujących.",
    "options": [
      "Nic nowego bez zgody króla, senatu i izby poselskiej",
      "Król może sam ustanowić każdy podatek",
      "Mieszczanie przejmują władzę w sejmie",
      "Zakon krzyżacki zostaje rozwiązany",
      "Uniwersytet w Krakowie zostaje zamknięty",
      "Wszystkie przywileje szlachty tracą ważność"
    ],
    "answer": 0
  },
  {
    "id": "R08_SZL_07",
    "section": "Od rycerstwa do szlachty",
    "type": "sequence",
    "prompt": "Ułóż kolejne kroki działania sejmu walnego według infografiki.",
    "explanation": "Najpierw król zawiadamiał szlachtę i zwoływał sejmiki, potem wybierano posłów i dawano im instrukcje, na sejmie dyskutowano projekt, a nowe prawo wymagało zgody trzech stanów.",
    "options": null,
    "items": [
      "zgoda trzech stanów sejmujących nadaje prawu moc",
      "sejmiki wybierają posłów i dają instrukcje",
      "król zawiadamia o terminie, miejscu i tematach sejmu",
      "izba poselska dyskutuje nad projektem"
    ],
    "answer": [
      "król zawiadamia o terminie, miejscu i tematach sejmu",
      "sejmiki wybierają posłów i dają instrukcje",
      "izba poselska dyskutuje nad projektem",
      "zgoda trzech stanów sejmujących nadaje prawu moc"
    ]
  },
  {
    "id": "R08_SZL_08",
    "section": "Od rycerstwa do szlachty",
    "type": "riddle",
    "prompt": "Jak nazywano siłę zbrojną złożoną z całej szlachty, zwoływaną przez króla?",
    "explanation": "Pospolite ruszenie było siłą zbrojną złożoną ze szlachty, która musiała stawić się konno i zbrojnie na wezwanie króla.",
    "options": null,
    "answer": "pospolite ruszenie",
    "altAnswers": [
      "pospolite ruszenie",
      "pospolitego ruszenia"
    ]
  },
  {
    "id": "R08_SZL_09",
    "section": "Od rycerstwa do szlachty",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: król, izba senatorska, izba poselska, Zamek Wysoki.",
    "explanation": "Król, izba senatorska i izba poselska były stanami sejmującymi; Zamek Wysoki to część zamku w Malborku.",
    "options": null,
    "answer": "Zamek Wysoki"
  },
  {
    "id": "R08_SZL_10",
    "section": "Od rycerstwa do szlachty",
    "type": "true_false",
    "prompt": "Mieszczanie w Polsce mogli głosować w sejmie i sejmikach tak samo jak szlachta.",
    "explanation": "Podręcznik podaje, że mieszczanie nie mogli głosować w sejmie ani w sejmikach, dlatego państwo zaczęło służyć interesom szlachty.",
    "options": null,
    "answer": false
  },
  {
    "id": "R08_SZL_11",
    "section": "Od rycerstwa do szlachty",
    "type": "single_choice",
    "prompt": "Jak podręcznik określa ustrój Polski od XVI do XVIII w.?",
    "explanation": "Ustrój Polski od XVI do XVIII w. nazwano monarchiczno-szlacheckim: najwyższą władzę miał król, ale państwem współrządziła szlachta.",
    "options": [
      "monarchiczno-szlachecki",
      "cesarstwo osmańskie",
      "republika miejska",
      "monarchia absolutna bez sejmu",
      "teokracja krzyżacka",
      "państwo patrymonialne bez stanów"
    ],
    "answer": 0
  },
  {
    "id": "R08_SZL_12",
    "section": "Od rycerstwa do szlachty",
    "type": "sort",
    "prompt": "Przyporządkuj osoby lub grupy do roli w życiu politycznym.",
    "explanation": "Sejmiki wybierały posłów, senatorami zostawali magnaci, a mieszczanie nie mieli prawa głosu w sejmie ani sejmikach.",
    "options": null,
    "items": [
      "posłowie",
      "senatorowie",
      "mieszczanie",
      "król"
    ],
    "categories": [
      "mieli udział w sejmie walnym",
      "nie głosowali w sejmie i sejmikach"
    ],
    "answer": {
      "mieli udział w sejmie walnym": [
        "posłowie",
        "senatorowie",
        "król"
      ],
      "nie głosowali w sejmie i sejmikach": [
        "mieszczanie"
      ]
    }
  },
  {
    "id": "R08_KUL_01",
    "section": "Polska i Litwa w XV wieku",
    "type": "single_choice",
    "prompt": "Jaka wartość była najważniejszym wkładem Polski do kultury europejskiej od drugiej połowy XIV w.?",
    "explanation": "Podręcznik wskazuje tolerancję religijną jako najważniejszą wartość wnoszoną przez Polaków do kultury europejskiej.",
    "options": [
      "tolerancja religijna",
      "budowa piramid",
      "podboje kolonialne",
      "likwidacja szkół",
      "przymusowy chrzest Rusinów",
      "zakaz nauki łaciny"
    ],
    "answer": 0
  },
  {
    "id": "R08_KUL_02",
    "section": "Polska i Litwa w XV wieku",
    "type": "true_false",
    "prompt": "Kazimierz Wielki przyłączył Ruś Halicką i nie nakłaniał prawosławnych Rusinów do przejścia na katolicyzm.",
    "explanation": "To przykład polskiej tolerancji religijnej opisany w rozdziale.",
    "options": null,
    "answer": true
  },
  {
    "id": "R08_KUL_03",
    "section": "Polska i Litwa w XV wieku",
    "type": "multi_select",
    "prompt": "Jakie grupy religijne i narodowościowe żyły w Polsce i Litwie po unii?",
    "explanation": "Po unii w obu państwach żyli m.in. Polacy katolicy, Rusini prawosławni, Litwini katolicy, Żydzi oraz muzułmańscy Tatarzy.",
    "options": [
      "Polacy katolicy",
      "Rusini prawosławni",
      "Litwini nawracani na katolicyzm",
      "Żydzi wyznający judaizm",
      "Tatarzy muzułmanie",
      "Janczarzy jako stan sejmujący"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "R08_KUL_04",
    "section": "Polska i Litwa w XV wieku",
    "type": "single_choice",
    "prompt": "Kto zwykle chodził do szkół parafialnych w średniowieczu?",
    "explanation": "Do szkół parafialnych chodziło zwykle 15-20 chłopców: synów rycerzy, mieszczan, a czasem chłopów.",
    "options": [
      "Chłopcy, głównie synowie rycerzy, mieszczan, czasem chłopów",
      "Wszystkie dziewczynki i chłopcy bez wyjątku",
      "Wyłącznie synowie królów",
      "Tylko janczarzy",
      "Tylko zagraniczni kupcy",
      "Wyłącznie senatorowie"
    ],
    "answer": 0
  },
  {
    "id": "R08_KUL_05",
    "section": "Polska i Litwa w XV wieku",
    "type": "multi_select",
    "prompt": "Czego uczono w szkołach parafialnych?",
    "explanation": "W szkołach parafialnych uczono przede wszystkim czytania i pisania po łacinie, katechizmu, trochę matematyki i śpiewu kościelnego.",
    "options": [
      "czytania i pisania po łacinie",
      "zasad katechizmu",
      "trochę matematyki",
      "śpiewu kościelnego",
      "pilotowania samolotów",
      "używania druku cyfrowego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R08_KUL_06",
    "section": "Polska i Litwa w XV wieku",
    "type": "true_false",
    "prompt": "W XV w. Akademia Krakowska była jedynym polskim uniwersytetem.",
    "explanation": "Rozdział mówi, że w XV w. jedynym polskim uniwersytetem była Akademia Krakowska.",
    "options": null,
    "answer": true,
    "image": "/img/r08_akademia_krakowska.jpg"
  },
  {
    "id": "R08_KUL_07",
    "section": "Polska i Litwa w XV wieku",
    "type": "single_choice",
    "prompt": "Jakie nauki miały znakomitych profesorów w Akademii Krakowskiej w XV w.?",
    "explanation": "Akademia Krakowska miała znakomitych profesorów astronomii, matematyki i geografii.",
    "options": [
      "astronomia, matematyka i geografia",
      "wyłącznie prawo łowieckie",
      "tylko kowalstwo i żeglarstwo",
      "alchemia wojskowa i szermierka",
      "malarstwo jaskiniowe",
      "wyłącznie muzyka dworska"
    ],
    "answer": 0,
    "image": "/img/r08_akademia_krakowska.jpg"
  },
  {
    "id": "R08_KUL_08",
    "section": "Polska i Litwa w XV wieku",
    "type": "match",
    "prompt": "Połącz postać z osiągnięciem.",
    "explanation": "Rozdział wymienia czterech ważnych twórców i uczonych związanych z kulturą XV-wiecznej Polski.",
    "options": null,
    "left": [
      "Paweł Włodkowic",
      "Jan Długosz",
      "Mikołaj Kopernik",
      "Wit Stwosz"
    ],
    "right": [
      "potępiał nawracanie pogan siłą",
      "autor Roczników, czyli Kronik sławnego Królestwa Polskiego",
      "udowodnił, że planety krążą wokół Słońca",
      "twórca ołtarza Zaśnięcia Najświętszej Marii Panny w Krakowie"
    ],
    "answer": {
      "Paweł Włodkowic": "potępiał nawracanie pogan siłą",
      "Jan Długosz": "autor Roczników, czyli Kronik sławnego Królestwa Polskiego",
      "Mikołaj Kopernik": "udowodnił, że planety krążą wokół Słońca",
      "Wit Stwosz": "twórca ołtarza Zaśnięcia Najświętszej Marii Panny w Krakowie"
    }
  },
  {
    "id": "R08_KUL_09",
    "section": "Polska i Litwa w XV wieku",
    "type": "fill_in",
    "prompt": "Wit Stwosz pracował nad ołtarzem w Kościele Mariackim w latach __________-__________.",
    "explanation": "Infografika podaje, że Wit Stwosz pracował nad swoim arcydziełem 12 lat, od 1477 do 1489 r.",
    "options": null,
    "answer": [
      "1477",
      "1489"
    ],
    "altAnswers": [
      [
        "1477",
        "1477 r."
      ],
      [
        "1489",
        "1489 r."
      ]
    ],
    "image": "/img/r08_oltarz_wita_stwosza.jpg"
  },
  {
    "id": "R08_KUL_10",
    "section": "Polska i Litwa w XV wieku",
    "type": "single_choice",
    "prompt": "Co przedstawia centralna część ołtarza Wita Stwosza?",
    "explanation": "Centralna część ołtarza przedstawia zaśnięcie Najświętszej Marii Panny otoczonej przez dwunastu apostołów.",
    "options": [
      "Zaśnięcie Najświętszej Marii Panny",
      "Bitwę pod Grunwaldem",
      "Koronację Władysława Warneńczyka",
      "Zjazd sejmiku w kościele",
      "Akt inkorporacji Prus",
      "Chrzest Mieszka I"
    ],
    "answer": 0,
    "image": "/img/r08_oltarz_wita_stwosza.jpg"
  },
  {
    "id": "R08_KUL_11",
    "section": "Polska i Litwa w XV wieku",
    "type": "riddle",
    "prompt": "Jak nazywał się najznakomitszy kronikarz polskiego średniowiecza opisany w rozdziale?",
    "explanation": "Jan Długosz przez 25 lat pisał po łacinie Roczniki, czyli Kroniki sławnego Królestwa Polskiego.",
    "options": null,
    "answer": "Jan Długosz",
    "altAnswers": [
      "Jan Długosz",
      "Długosz",
      "Jana Długosza"
    ]
  },
  {
    "id": "R08_KUL_12",
    "section": "Polska i Litwa w XV wieku",
    "type": "scenario",
    "prompt": "Jesteś żakiem w Krakowie w XV w. Możesz przenieść się na uniwersytet do Włoch i nadal rozumieć wykłady, bo na uniwersytetach używa się wspólnego języka. Jaki to język?",
    "explanation": "Żacy mogli przenosić się między uniwersytetami, ponieważ wykłady prowadzono po łacinie.",
    "options": [
      "łacina",
      "polski",
      "litewski",
      "turecki",
      "pruski",
      "tatarski"
    ],
    "answer": 0
  },
  {
    "id": "R08_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia całego rozdziału w porządku chronologicznym.",
    "explanation": "Chronologia prowadzi od unii z Węgrami, przez unię polsko-litewską i Grunwald, po drugi pokój toruński i Nihil novi.",
    "options": null,
    "items": [
      "drugi pokój toruński",
      "unia Polski z Litwą",
      "konstytucja Nihil novi",
      "unia polsko-węgierska Ludwika",
      "bitwa pod Grunwaldem"
    ],
    "answer": [
      "unia polsko-węgierska Ludwika",
      "unia Polski z Litwą",
      "bitwa pod Grunwaldem",
      "drugi pokój toruński",
      "konstytucja Nihil novi"
    ]
  },
  {
    "id": "R08_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie najlepiej pokazuje zmianę znaczenia zakonu po chrzcie Litwy?",
    "explanation": "Chrzest Litwy sprawił, że zakon tracił uzasadnienie prowadzenia wypraw misyjnych, a po Grunwaldzie jego potęga została złamana.",
    "options": [
      "Chrzest Litwy odebrał pretekst do misji, a Grunwald złamał potęgę zakonu",
      "Chrzest Litwy wzmocnił pogaństwo zakonu, a Grunwald dał mu Pomorze",
      "Zakon powstał dopiero po drugim pokoju toruńskim",
      "Krzyżacy od początku byli lennem Polski",
      "Litwa nigdy nie była zagrożona przez zakon"
    ],
    "answer": 0
  },
  {
    "id": "R08_HARD_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do pokoju toruńskiego, którego dotyczą.",
    "explanation": "Pierwszy pokój toruński miał skromniejsze zdobycze terytorialne, drugi przywrócił Polsce dostęp do Bałtyku i podporządkował państwo zakonne.",
    "options": null,
    "items": [
      "Polska odzyskała ziemię dobrzyńską",
      "Litwa odzyskała Żmudź",
      "Polska odzyskała Pomorze Gdańskie",
      "Prusy Zakonne stały się lennem Polski",
      "Krzyżacy zapłacili ogromne odszkodowanie"
    ],
    "categories": [
      "pierwszy pokój toruński",
      "drugi pokój toruński"
    ],
    "answer": {
      "pierwszy pokój toruński": [
        "Polska odzyskała ziemię dobrzyńską",
        "Litwa odzyskała Żmudź",
        "Krzyżacy zapłacili ogromne odszkodowanie"
      ],
      "drugi pokój toruński": [
        "Polska odzyskała Pomorze Gdańskie",
        "Prusy Zakonne stały się lennem Polski"
      ]
    }
  },
  {
    "id": "R08_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady sytuacji, w których władca potrzebował zgody szlachty po przywileju cerekwicko-nieszawskim.",
    "explanation": "Po 1454 r. król potrzebował zgody szlachty, gdy chciał nałożyć nowe podatki lub zwołać pospolite ruszenie.",
    "options": [
      "nałożenie nowego podatku",
      "zwołanie pospolitego ruszenia",
      "nadanie imienia królewiczowi",
      "wybór stroju na ucztę",
      "odczytanie Bogurodzicy",
      "ustalenie godziny obiadu"
    ],
    "answer": [
      0,
      1
    ]
  },
  {
    "id": "R08_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie z konsekwencją dla państwa.",
    "explanation": "Pojęcia z rozdziału opisują przemiany polityczne Polski od monarchii dziedzicznej ku ustrojowi monarchiczno-szlacheckiemu.",
    "options": null,
    "left": [
      "monarchia elekcyjna",
      "przywileje szlacheckie",
      "Nihil novi",
      "monarchiczno-szlachecki ustrój"
    ],
    "right": [
      "król pochodził z wyboru możnowładców",
      "ograniczały władzę monarchy i wzmacniały szlachtę",
      "każda ustawa wymagała zgody trzech stanów sejmujących",
      "król miał najwyższą władzę, ale współrządziła szlachta"
    ],
    "answer": {
      "monarchia elekcyjna": "król pochodził z wyboru możnowładców",
      "przywileje szlacheckie": "ograniczały władzę monarchy i wzmacniały szlachtę",
      "Nihil novi": "każda ustawa wymagała zgody trzech stanów sejmujących",
      "monarchiczno-szlachecki ustrój": "król miał najwyższą władzę, ale współrządziła szlachta"
    }
  },
  {
    "id": "R08_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Król chce szybko zdobyć pieniądze na wojnę po 1454 r. Sejmiki odmawiają zgody na nowy podatek. Jaki jest skutek?",
    "explanation": "Po przywileju cerekwicko-nieszawskim bez zgody szlachty król nie mógł nałożyć nowego podatku, więc brak zgody oznaczał brak legalnych środków z tego podatku.",
    "options": [
      "Król nie może legalnie nałożyć tego podatku",
      "Podatek wchodzi automatycznie",
      "Decyduje wyłącznie wielki mistrz",
      "Mieszczanie w sejmie uchwalają podatek sami",
      "Sułtan zatwierdza podatek"
    ],
    "answer": 0
  },
  {
    "id": "R08_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: tolerancja religijna, nawracanie słowem i przykładem, prawo pogan do własnego państwa, wyprawy misyjne Krzyżaków.",
    "explanation": "Pierwsze trzy elementy łączą się z polską tolerancją i poglądami Pawła Włodkowica, a wyprawy Krzyżaków były przemocą wobec Litwy.",
    "options": null,
    "answer": "wyprawy misyjne Krzyżaków"
  },
  {
    "id": "R08_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który wniosek najlepiej wyjaśnia, dlaczego Litwini woleli chrzest od Polaków niż od Krzyżaków?",
    "explanation": "Chrzest od Polaków dawał Litwie sojusz i odbierał zakonowi pretekst do najazdów, podczas gdy Krzyżacy byli znienawidzonym wrogiem.",
    "options": [
      "Chrzest od Polaków wzmacniał sojusz i odbierał Krzyżakom pretekst do najazdów",
      "Krzyżacy nie byli chrześcijanami",
      "Polacy obiecali Litwie podbój Węgier",
      "Chrzest od Krzyżaków dawał Litwie większą samodzielność",
      "Litwini nie mieli żadnych wrogów"
    ],
    "answer": 0
  },
  {
    "id": "R08_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po drugim pokoju toruńskim ziemie odzyskane i uzyskane przez Polskę nazwano __________, a zależne od Polski państwo zakonne __________.",
    "explanation": "Tereny odzyskane i uzyskane przez Polskę nazwano Prusami Królewskimi, a lenno krzyżackie Prusami Zakonnymi.",
    "options": null,
    "answer": [
      "Prusami Królewskimi",
      "Prusami Zakonnymi"
    ],
    "altAnswers": [
      [
        "Prusami Królewskimi",
        "Prusy Królewskie"
      ],
      [
        "Prusami Zakonnymi",
        "Prusy Zakonne"
      ]
    ]
  },
  {
    "id": "R08_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Zwycięstwo pod Grunwaldem dało od razu Polsce Pomorze Gdańskie, ale nie osłabiło zakonu.",
    "explanation": "To fałsz: pierwszy pokój toruński nie oddał Polsce Pomorza Gdańskiego, natomiast przegrana wojna poważnie osłabiła zakon.",
    "options": null,
    "answer": false
  }
];

const KID_PROMPTS = {
  "R08_UNI_01": "Dlaczego Polska i Węgry miały jednego króla, ale nadal były osobnymi państwami?",
  "R08_UNI_06": "Gdzie i kiedy ustalono warunki unii Polski z Litwą?",
  "R08_WOJ_06": "Kiedy była bitwa pod Grunwaldem?",
  "R08_WOJ_11": "Co ustalono w pierwszym pokoju toruńskim?",
  "R08_SYN_06": "Co stało się z Władysławem pod Warną?",
  "R08_SYN_12": "Co Polska zyskała po drugim pokoju toruńskim?",
  "R08_SZL_05": "Jakie trzy części miał sejm walny?",
  "R08_SZL_06": "Co znaczyło Nihil novi?",
  "R08_KUL_01": "Jaka ważna wartość wyróżniała Polskę w Europie?",
  "R08_KUL_08": "Dopasuj znane osoby do tego, co zrobiły."
};

const chapter = {
  id: "r08",
  number: 8,
  title: "Polska i Litwa",
  icon: "🛡️",
  sectionOrder: [
  "Unia Polski z Litwą",
  "Wielka wojna z zakonem krzyżackim",
  "Synowie Jagiełły",
  "Od rycerstwa do szlachty",
  "Polska i Litwa w XV wieku",
  "Super trudne"
],
  sectionIcons: {
  "Unia Polski z Litwą": "🤝",
  "Wielka wojna z zakonem krzyżackim": "⚔️",
  "Synowie Jagiełły": "👑",
  "Od rycerstwa do szlachty": "🏛️",
  "Polska i Litwa w XV wieku": "📚",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
