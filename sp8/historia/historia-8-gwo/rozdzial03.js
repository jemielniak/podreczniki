// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PWO  = Powojenne przejęcie władzy
//   STA  = Stalinizm w Polsce
//   ODW  = Odwilż i rządy Gomułki
//   GIE  = Od Gomułki do Gierka
//   SOL  = Solidarność i kryzys PRL
//   UPA  = Stan wojenny i upadek PRL
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_PWO_01",
    "section": "Powojenne przejęcie władzy",
    "type": "single_choice",
    "prompt": "Kto wydał 19 stycznia 1945 r. rozkaz o rozwiązaniu Armii Krajowej?",
    "options": [
      "Leopold Okulicki",
      "Stanisław Mikołajczyk",
      "Bolesław Bierut",
      "Władysław Gomułka",
      "Konstanty Rokossowski",
      "Edward Gierek"
    ],
    "answer": 0,
    "image": "r03_zolnierze_podziemia.jpg",
    "explanation": "Generał Leopold Okulicki rozwiązał AK, chcąc uniknąć jej walk z Armią Czerwoną i uchronić akowców przed represjami."
  },
  {
    "id": "R03_PWO_02",
    "section": "Powojenne przejęcie władzy",
    "type": "multi_select",
    "prompt": "Zaznacz przekonania, które skłaniały żołnierzy podziemia niepodległościowego do dalszej walki po 1944 r.",
    "options": [
      "Polska nadal nie była w pełni niepodległa",
      "Wkrótce może wybuchnąć wojna Zachodu z ZSRR",
      "Bez dalszej walki groziło im aresztowanie przez NKWD lub UB",
      "PKWN zapewni im swobodę działania",
      "Niemcy ponownie obejmą władzę w Polsce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Część żołnierzy uważała, że walka o wolność się nie skończyła, spodziewała się wojny Zachodu z ZSRR i obawiała się aresztowań przez NKWD lub UB."
  },
  {
    "id": "R03_PWO_03",
    "section": "Powojenne przejęcie władzy",
    "type": "match",
    "prompt": "Połącz element komunistycznego aparatu bezpieczeństwa z jego rolą.",
    "options": null,
    "left": [
      "Milicja Obywatelska (MO)",
      "Urzędy Bezpieczeństwa (UB)",
      "Korpus Bezpieczeństwa Wewnętrznego (KBW)"
    ],
    "right": [
      "zastąpiła przedwojenną policję",
      "prześladowały przeciwników nowej władzy",
      "oddziały wojskowe do walki z podziemiem"
    ],
    "answer": {
      "Milicja Obywatelska (MO)": "zastąpiła przedwojenną policję",
      "Urzędy Bezpieczeństwa (UB)": "prześladowały przeciwników nowej władzy",
      "Korpus Bezpieczeństwa Wewnętrznego (KBW)": "oddziały wojskowe do walki z podziemiem"
    },
    "explanation": "MO zastąpiła przedwojenną policję, UB prześladował ludzi niechętnych nowej władzy, a KBW był formacją wojskową przeznaczoną do walki z podziemiem."
  },
  {
    "id": "R03_PWO_04",
    "section": "Powojenne przejęcie władzy",
    "type": "true_false",
    "prompt": "Proces szesnastu odbył się w Moskwie w czerwcu 1945 r.",
    "options": null,
    "answer": true,
    "explanation": "NKWD uprowadziło przywódców Polskiego Państwa Podziemnego do Moskwy, gdzie w czerwcu 1945 r. odbył się ich pokazowy proces."
  },
  {
    "id": "R03_PWO_05",
    "section": "Powojenne przejęcie władzy",
    "type": "fill_in",
    "prompt": "W lipcu 1945 r. podczas obławy augustowskiej aresztowano około __________ mieszkańców okolic __________.",
    "options": null,
    "answer": [
      "600",
      "Puszczy Augustowskiej"
    ],
    "altAnswers": [
      [
        "600",
        "około 600",
        "ok. 600"
      ],
      [
        "Puszczy Augustowskiej",
        "puszczy augustowskiej"
      ]
    ],
    "explanation": "W obławie augustowskiej NKWD aresztowało około 600 mieszkańców wsi leżących w okolicach Puszczy Augustowskiej."
  },
  {
    "id": "R03_PWO_06",
    "section": "Powojenne przejęcie władzy",
    "type": "riddle",
    "prompt": "Skrót nazwy rządu utworzonego w czerwcu 1945 r., w którym Stanisław Mikołajczyk został wicepremierem i ministrem rolnictwa, to...",
    "options": null,
    "answer": "TRJN",
    "altAnswers": [
      "TRJN",
      "Tymczasowy Rząd Jedności Narodowej"
    ],
    "explanation": "Tymczasowy Rząd Jedności Narodowej powstał w czerwcu 1945 r.; Stanisław Mikołajczyk został w nim wicepremierem i ministrem rolnictwa."
  },
  {
    "id": "R03_PWO_07",
    "section": "Powojenne przejęcie władzy",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do kategorii: granice Polski albo powojenne przesiedlenia ludności.",
    "options": null,
    "items": [
      "linia Curzona",
      "Odra i Nysa Łużycka",
      "wysiedlenie Niemców z Ziem Odzyskanych",
      "akcja Wisła",
      "przybycie Polaków z Kresów"
    ],
    "categories": [
      "granice Polski",
      "przesiedlenia ludności"
    ],
    "answer": {
      "granice Polski": [
        "linia Curzona",
        "Odra i Nysa Łużycka"
      ],
      "przesiedlenia ludności": [
        "wysiedlenie Niemców z Ziem Odzyskanych",
        "akcja Wisła",
        "przybycie Polaków z Kresów"
      ]
    },
    "explanation": "Konferencja poczdamska określiła zachodnią granicę Polski na Odrze i Nysie Łużyckiej, a granicę z ZSRR w przybliżeniu wzdłuż linii Curzona. Po wojnie nastąpiły wielkie przesiedlenia Niemców, Ukraińców i Polaków."
  },
  {
    "id": "R03_PWO_08",
    "section": "Powojenne przejęcie władzy",
    "type": "multi_select",
    "prompt": "Zaznacz materialne skutki II wojny światowej w Polsce.",
    "options": [
      "zrujnowane miasta",
      "zniszczone wsie",
      "zniszczone zakłady przemysłowe",
      "rozgrabione dobra kultury",
      "powszechna nadwyżka mieszkań"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_warszawa_ruiny_1945.jpg",
    "explanation": "Wiele miast, wsi i zakładów przemysłowych zostało zniszczonych, a dobra kultury niszczono lub rozgrabiano."
  },
  {
    "id": "R03_PWO_09",
    "section": "Powojenne przejęcie władzy",
    "type": "scenario",
    "prompt": "Jest czerwiec 1946 r. Władze prowadzą kampanię pod hasłem 3 razy tak, a PSL wzywa do odpowiedzi nie na pierwsze pytanie. Czego dotyczyło pierwsze pytanie referendum?",
    "options": [
      "zniesienia Senatu",
      "wejścia Polski do NATO",
      "utworzenia PZPR",
      "wyboru prezydenta przez naród",
      "przyjęcia planu sześcioletniego",
      "wprowadzenia stanu wojennego"
    ],
    "answer": 0,
    "explanation": "Pierwsze pytanie referendum z 1946 r. dotyczyło zniesienia Senatu. Komuniści wzywali do głosowania 3 razy tak, a PSL do odpowiedzi nie na pierwsze pytanie."
  },
  {
    "id": "R03_PWO_10",
    "section": "Powojenne przejęcie władzy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "wybory do sejmu",
      "powstanie TRJN",
      "rozwiązanie AK",
      "referendum ludowe"
    ],
    "answer": [
      "rozwiązanie AK",
      "powstanie TRJN",
      "referendum ludowe",
      "wybory do sejmu"
    ],
    "explanation": "AK rozwiązano w styczniu 1945 r., TRJN powstał w czerwcu 1945 r., referendum odbyło się w czerwcu 1946 r., a wybory do sejmu w styczniu 1947 r."
  },
  {
    "id": "R03_STA_01",
    "section": "Stalinizm w Polsce",
    "type": "single_choice",
    "prompt": "W jakich latach trwał w Polsce okres określany jako stalinizm?",
    "options": [
      "1948-1956",
      "1944-1947",
      "1956-1970",
      "1970-1980",
      "1980-1981",
      "1981-1989"
    ],
    "answer": 0,
    "explanation": "Rządy stalinistów w Polsce trwały w latach 1948-1956."
  },
  {
    "id": "R03_STA_02",
    "section": "Stalinizm w Polsce",
    "type": "match",
    "prompt": "Połącz decyzję z 1947 r. z jej znaczeniem.",
    "options": null,
    "left": [
      "Bolesław Bierut prezydentem",
      "rząd bez PSL",
      "Mała konstytucja"
    ],
    "right": [
      "najważniejszy urząd objął polityk ściśle związany ze Stalinem",
      "opozycja utraciła wpływ na rząd",
      "zatarcie granic między władzami państwa"
    ],
    "answer": {
      "Bolesław Bierut prezydentem": "najważniejszy urząd objął polityk ściśle związany ze Stalinem",
      "rząd bez PSL": "opozycja utraciła wpływ na rząd",
      "Mała konstytucja": "zatarcie granic między władzami państwa"
    },
    "explanation": "Nowy sejm wybrał Bolesława Bieruta na prezydenta, powstał rząd bez PSL, a Mała konstytucja naruszyła trójpodział władzy."
  },
  {
    "id": "R03_STA_03",
    "section": "Stalinizm w Polsce",
    "type": "true_false",
    "prompt": "PZPR powstała w grudniu 1948 r. w wyniku połączenia PPR i PPS, przy czym PPS została faktycznie wchłonięta przez PPR.",
    "options": null,
    "answer": true,
    "explanation": "W grudniu 1948 r. PPR i PPS zostały połączone w PZPR; opis wskazuje, że w praktyce oznaczało to wchłonięcie PPS przez PPR."
  },
  {
    "id": "R03_STA_04",
    "section": "Stalinizm w Polsce",
    "type": "fill_in",
    "prompt": "Konstytucja z __________ r. wprowadziła nazwę Polska Rzeczpospolita Ludowa i zlikwidowała urząd __________.",
    "options": null,
    "answer": [
      "1952",
      "prezydenta"
    ],
    "altAnswers": [
      [
        "1952",
        "1952 r."
      ],
      [
        "prezydenta",
        "prezydent"
      ]
    ],
    "explanation": "Konstytucję PRL uchwalono w 1952 r. Utrzymała ona większość organów władzy z Małej konstytucji, ale zlikwidowała urząd prezydenta."
  },
  {
    "id": "R03_STA_05",
    "section": "Stalinizm w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj działania władz do obszaru gospodarki.",
    "options": null,
    "items": [
      "kary dla właścicieli prywatnych sklepów",
      "kolektywizacja rolnictwa",
      "budowa wielkich zakładów przemysłowych",
      "nękanie kontrolami warsztatów rzemieślniczych",
      "tworzenie spółdzielni rolniczych",
      "rozwój przemysłu ciężkiego"
    ],
    "categories": [
      "sektor prywatny",
      "rolnictwo",
      "przemysł"
    ],
    "answer": {
      "sektor prywatny": [
        "kary dla właścicieli prywatnych sklepów",
        "nękanie kontrolami warsztatów rzemieślniczych"
      ],
      "rolnictwo": [
        "kolektywizacja rolnictwa",
        "tworzenie spółdzielni rolniczych"
      ],
      "przemysł": [
        "budowa wielkich zakładów przemysłowych",
        "rozwój przemysłu ciężkiego"
      ]
    },
    "explanation": "Władze ograniczały sektor prywatny, prowadziły kolektywizację rolnictwa i rozwijały państwowy przemysł ciężki w ramach centralnego planowania."
  },
  {
    "id": "R03_STA_06",
    "section": "Stalinizm w Polsce",
    "type": "single_choice",
    "prompt": "Jaki był główny cel planu sześcioletniego realizowanego w latach 1950-1955?",
    "options": [
      "industrializacja według wzorów radzieckich",
      "likwidacja przemysłu ciężkiego",
      "prywatyzacja wielkich zakładów",
      "rozwój wyłącznie rolnictwa",
      "wprowadzenie gospodarki rynkowej",
      "rezygnacja z centralnego planowania"
    ],
    "answer": 0,
    "image": "r03_nowahuta_budowa.jpg",
    "explanation": "Plan sześcioletni miał doprowadzić do industrializacji państwa według wzorów radzieckich, ze szczególnym naciskiem na przemysł ciężki i maszynowy."
  },
  {
    "id": "R03_STA_07",
    "section": "Stalinizm w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz negatywne skutki i problemy związane z realizacją planu sześcioletniego.",
    "options": [
      "zaniedbanie budownictwa",
      "zaniedbanie przemysłu lekkiego",
      "zaniedbanie rolnictwa",
      "sprzedaż węgla ZSRR po nieopłacalnych cenach",
      "import niewydajnych technologii",
      "szybka likwidacja niedoborów żywności"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rozbudowa przemysłu odbywała się kosztem budownictwa, przemysłu lekkiego i rolnictwa; Polska sprzedawała ZSRR węgiel po nieopłacalnych cenach i importowała niewydajne technologie."
  },
  {
    "id": "R03_STA_08",
    "section": "Stalinizm w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do typowych tematów socrealizmu: robotnicy na wielkich budowach, portrety przywódców partii, traktorzystki, rycerze średniowieczni.",
    "options": null,
    "answer": "rycerze średniowieczni",
    "explanation": "Socrealizm przedstawiał m.in. robotników, przywódców partii i traktorzystów. Rycerze średniowieczni nie należeli do typowej tematyki socrealistycznej."
  },
  {
    "id": "R03_STA_09",
    "section": "Stalinizm w Polsce",
    "type": "scenario",
    "prompt": "Uczeń w pierwszej połowie lat 50. chodzi do szkoły, w której władze chcą wychować nowego człowieka całkowicie posłusznego systemowi. Czego ma go przede wszystkim uczyć szkoła?",
    "options": [
      "przywiązania do ideologii komunistycznej",
      "zasad gospodarki wolnorynkowej",
      "niezależności od państwa",
      "wielopartyjnej demokracji",
      "swobody publikowania bez cenzury",
      "sprzeciwu wobec centralnego planowania"
    ],
    "answer": 0,
    "image": "r03_pochod_pierwszomajowy.jpg",
    "explanation": "W czasach stalinowskich szkoła miała uczyć przywiązania do ideologii komunistycznej."
  },
  {
    "id": "R03_STA_10",
    "section": "Stalinizm w Polsce",
    "type": "riddle",
    "prompt": "Książka Czesława Miłosza z 1951 r., w której autor próbował wyjaśnić, dlaczego wielu intelektualistów uwierzyło w komunizm, nosi tytuł...",
    "options": null,
    "answer": "Zniewolony umysł",
    "altAnswers": [
      "Zniewolony umysł",
      "zniewolony umysł"
    ],
    "explanation": "Czesław Miłosz opisał problem ulegania ideologii komunistycznej w książce Zniewolony umysł."
  },
  {
    "id": "R03_ODW_01",
    "section": "Odwilż i rządy Gomułki",
    "type": "riddle",
    "prompt": "Jak nazywa się fala przemian rozpoczęta w październiku 1956 r., związana z destalinizacją i dojściem Władysława Gomułki do władzy?",
    "options": null,
    "answer": "polski Październik",
    "altAnswers": [
      "polski Październik",
      "Polski Październik",
      "destalinizacja"
    ],
    "explanation": "Przemiany rozpoczęte w październiku 1956 r. nazywano polskim Październikiem albo destalinizacją."
  },
  {
    "id": "R03_ODW_02",
    "section": "Odwilż i rządy Gomułki",
    "type": "match",
    "prompt": "Połącz wydarzenie w stosunkach państwo-Kościół z rokiem.",
    "options": null,
    "left": [
      "porozumienie rządu z episkopatem",
      "aresztowanie prymasa Stefana Wyszyńskiego",
      "uwolnienie prymasa Stefana Wyszyńskiego"
    ],
    "right": [
      "1950",
      "1953",
      "1956"
    ],
    "answer": {
      "porozumienie rządu z episkopatem": "1950",
      "aresztowanie prymasa Stefana Wyszyńskiego": "1953",
      "uwolnienie prymasa Stefana Wyszyńskiego": "1956"
    },
    "explanation": "W 1950 r. rząd i episkopat zawarły porozumienie, w 1953 r. aresztowano prymasa Stefana Wyszyńskiego, a w 1956 r. został on uwolniony."
  },
  {
    "id": "R03_ODW_03",
    "section": "Odwilż i rządy Gomułki",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny Poznańskiego Czerwca 1956 r.",
    "options": [
      "ubóstwo i niesprawiedliwość",
      "zakłamanie władz",
      "odrzucenie żądania poprawy warunków pracy i płacy",
      "zgoda władz na wszystkie postulaty robotników",
      "zniesienie cenzury"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do przyczyn należały ubóstwo i niesprawiedliwość, zakłamanie władz oraz bezpośrednio odrzucenie żądania poprawy warunków pracy i płacy w Zakładach im. Stalina."
  },
  {
    "id": "R03_ODW_04",
    "section": "Odwilż i rządy Gomułki",
    "type": "scenario",
    "prompt": "Robotnicy wychodzą na ulice Poznania, protest zostaje stłumiony przez wojsko, ginie co najmniej 57 osób, a kilkaset zostaje rannych. Jak nazwano to wydarzenie?",
    "options": [
      "Poznański Czerwiec",
      "Marzec 1968",
      "Grudzień 1970",
      "Sierpień 1980",
      "Czerwiec 1976",
      "Polski Październik"
    ],
    "answer": 0,
    "image": "r03_poznan_czerwiec_1956.jpg",
    "explanation": "Poznański Czerwiec 1956 był robotniczym protestem w Poznaniu, stłumionym przez wojsko."
  },
  {
    "id": "R03_ODW_05",
    "section": "Odwilż i rządy Gomułki",
    "type": "true_false",
    "prompt": "W Poznańskim Czerwcu 1956 r. zginęło co najmniej 57 osób, a kilkaset zostało rannych.",
    "options": null,
    "answer": true,
    "explanation": "Podsumowanie wydarzeń podaje co najmniej 57 zabitych i kilkuset rannych."
  },
  {
    "id": "R03_ODW_06",
    "section": "Odwilż i rządy Gomułki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w stosunkach państwo-Kościół w kolejności chronologicznej.",
    "options": null,
    "items": [
      "orędzie biskupów polskich do biskupów niemieckich",
      "uwolnienie prymasa Wyszyńskiego",
      "porozumienie rządu z episkopatem",
      "nasilenie prześladowań Kościoła",
      "aresztowanie prymasa Wyszyńskiego"
    ],
    "answer": [
      "nasilenie prześladowań Kościoła",
      "porozumienie rządu z episkopatem",
      "aresztowanie prymasa Wyszyńskiego",
      "uwolnienie prymasa Wyszyńskiego",
      "orędzie biskupów polskich do biskupów niemieckich"
    ],
    "explanation": "Po nasileniu prześladowań od 1947 r. zawarto porozumienie w 1950 r., aresztowano prymasa w 1953 r., uwolniono go w 1956 r., a w 1965 r. biskupi polscy skierowali orędzie do biskupów niemieckich."
  },
  {
    "id": "R03_ODW_07",
    "section": "Odwilż i rządy Gomułki",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany wprowadzone podczas polskiego Października.",
    "options": [
      "uwolnienie prymasa i więźniów politycznych",
      "powrót religii do szkół",
      "rezygnacja z przymuszania chłopów do kolektywizacji",
      "odstąpienie od socrealizmu w sztuce",
      "zaostrzenie cenzury jako element przemian październikowych",
      "przywrócenie radzieckiego ministra obrony"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Uwolniono prymasa i więźniów politycznych, religia wróciła do szkół, zaprzestano przymuszania chłopów do kolektywizacji i odstąpiono od socrealizmu."
  },
  {
    "id": "R03_ODW_08",
    "section": "Odwilż i rządy Gomułki",
    "type": "single_choice",
    "prompt": "Jakie wydarzenie uznano za symboliczny koniec polskiego Października?",
    "options": [
      "zamknięcie tygodnika Po Prostu",
      "powstanie PZPR",
      "uchwalenie Konstytucji PRL",
      "powstanie KOR",
      "wprowadzenie stanu wojennego",
      "wybory z czerwca 1989 r."
    ],
    "answer": 0,
    "explanation": "Za symboliczny koniec polskiego Października uznano zamknięcie tygodnika Po Prostu w październiku 1957 r."
  },
  {
    "id": "R03_ODW_09",
    "section": "Odwilż i rządy Gomułki",
    "type": "odd_one_out",
    "prompt": "Wskaż zmianę, która nie pasuje do przemian polskiego Października: religia w szkołach, uwolnienie więźniów politycznych, odejście od socrealizmu, zaostrzenie przymusowej kolektywizacji.",
    "options": null,
    "answer": "zaostrzenie przymusowej kolektywizacji",
    "explanation": "W czasie polskiego Października zaprzestano przymuszania chłopów do kolektywizacji, a nie ją zaostrzono."
  },
  {
    "id": "R03_ODW_10",
    "section": "Odwilż i rządy Gomułki",
    "type": "fill_in",
    "prompt": "W 1965 r. biskupi polscy napisali do biskupów niemieckich: udzielamy wybaczenia i __________ o nie. W __________ r. PRL i RFN podpisały układ o uznaniu granicy na Odrze i Nysie Łużyckiej.",
    "options": null,
    "answer": [
      "prosimy",
      "1970"
    ],
    "altAnswers": [
      [
        "prosimy",
        "prosimy o nie"
      ],
      [
        "1970",
        "1970 r."
      ]
    ],
    "explanation": "Orędzie z 1965 r. zawierało wezwanie do wzajemnego wybaczenia. W 1970 r. PRL i RFN podpisały układ o uznaniu granicy na Odrze i Nysie Łużyckiej."
  },
  {
    "id": "R03_GIE_01",
    "section": "Od Gomułki do Gierka",
    "type": "single_choice",
    "prompt": "Który zestaw najlepiej opisuje trzy główne elementy Marca 1968?",
    "options": [
      "protesty studentów, walka o władzę w PZPR, kampania antysemicka",
      "strajk górników, reforma rolna, zniesienie cenzury",
      "wybory do Senatu, legalizacja Solidarności, zmiana konstytucji",
      "kolektywizacja, plan sześcioletni, socrealizm",
      "stan wojenny, internowania, godzina milicyjna",
      "referendum, akcja Wisła, proces szesnastu"
    ],
    "answer": 0,
    "explanation": "Marzec 1968 łączył protesty studentów, walkę o władzę w PZPR oraz antysemicką kampanię propagandową określaną jako walka z syjonizmem."
  },
  {
    "id": "R03_GIE_02",
    "section": "Od Gomułki do Gierka",
    "type": "scenario",
    "prompt": "Władze zdejmują z afisza Dziady Adama Mickiewicza. Po ostatnim przedstawieniu studenci maszerują pod pomnik poety, a później protesty ogarniają kolejne miasta. Z jakim wydarzeniem wiąże się ten opis?",
    "options": [
      "Marzec 1968",
      "Grudzień 1970",
      "Czerwiec 1976",
      "Sierpień 1980",
      "Poznański Czerwiec",
      "stan wojenny"
    ],
    "answer": 0,
    "explanation": "Zakaz dalszego wystawiania Dziadów i protest studentów w Warszawie były początkiem wydarzeń Marca 1968."
  },
  {
    "id": "R03_GIE_03",
    "section": "Od Gomułki do Gierka",
    "type": "true_false",
    "prompt": "W latach 1968-1969 Polskę opuściło ponad 15 tysięcy osób żydowskiego pochodzenia, szykanowanych podczas kampanii antysemickiej.",
    "options": null,
    "answer": true,
    "image": "r03_uniwersytet_marzec_1968.jpg",
    "explanation": "Kampania antysemicka doprowadziła do emigracji ponad 15 tysięcy osób w latach 1968-1969."
  },
  {
    "id": "R03_GIE_04",
    "section": "Od Gomułki do Gierka",
    "type": "multi_select",
    "prompt": "Zaznacz miasta wymienione jako miejsca walk lub rozruchów w Grudniu 1970.",
    "options": [
      "Gdańsk",
      "Gdynia",
      "Szczecin",
      "Zakopane",
      "Białystok",
      "Lublin"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do walk i rozruchów doszło m.in. w Gdańsku, Gdyni i Szczecinie; wydarzenia odnotowano także w innych miastach."
  },
  {
    "id": "R03_GIE_05",
    "section": "Od Gomułki do Gierka",
    "type": "fill_in",
    "prompt": "W Grudniu 1970 zginęło około __________ osób, a około __________ zostało rannych.",
    "options": null,
    "answer": [
      "45",
      "1165"
    ],
    "altAnswers": [
      [
        "45",
        "około 45",
        "ok. 45"
      ],
      [
        "1165",
        "około 1165",
        "ok. 1165"
      ]
    ],
    "image": "r03_gdynia_grudzien_1970.jpg",
    "explanation": "Podsumowanie Grudnia 1970 podaje około 45 zabitych i około 1165 rannych."
  },
  {
    "id": "R03_GIE_06",
    "section": "Od Gomułki do Gierka",
    "type": "single_choice",
    "prompt": "Kto 20 grudnia 1970 r. zastąpił Władysława Gomułkę na stanowisku pierwszego sekretarza KC PZPR?",
    "options": [
      "Edward Gierek",
      "Bolesław Bierut",
      "Stanisław Mikołajczyk",
      "Lech Wałęsa",
      "Czesław Kiszczak",
      "Tadeusz Mazowiecki"
    ],
    "answer": 0,
    "explanation": "Po wydarzeniach Grudnia 1970 Władysław Gomułka został zmuszony do ustąpienia, a przywódcą partii i państwa został Edward Gierek."
  },
  {
    "id": "R03_GIE_07",
    "section": "Od Gomułki do Gierka",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do pierwszych lat dekady Gierka: zachodnie kredyty, Fiat 126p, lepsze zaopatrzenie, przymusowa kolektywizacja.",
    "options": null,
    "answer": "przymusowa kolektywizacja",
    "image": "r03_fiat_126p_1970s.jpg",
    "explanation": "Pierwsze lata rządów Gierka kojarzono z kredytami zachodnimi, poprawą zaopatrzenia i upowszechnieniem dóbr takich jak Fiat 126p. Przymusowa kolektywizacja była charakterystyczna dla okresu stalinowskiego."
  },
  {
    "id": "R03_GIE_08",
    "section": "Od Gomułki do Gierka",
    "type": "scenario",
    "prompt": "Jest 1975 r. Zadłużenie PRL przekracza 8 miliardów dolarów, a państwo nie ma pieniędzy na spłatę odsetek od zachodnich kredytów. Jak określono tę sytuację?",
    "options": [
      "pułapka kredytowa",
      "plan trzyletni",
      "mała stabilizacja",
      "odwilż",
      "kolektywizacja",
      "referendum ludowe"
    ],
    "answer": 0,
    "explanation": "W 1975 r. PRL znalazła się w pułapce kredytowej: zadłużenie rosło, a państwo nie miało środków na spłatę odsetek."
  },
  {
    "id": "R03_GIE_09",
    "section": "Od Gomułki do Gierka",
    "type": "multi_select",
    "prompt": "W których miastach doszło do starć ulicznych podczas Czerwca 1976?",
    "options": [
      "Ursus",
      "Radom",
      "Płock",
      "Gdynia",
      "Poznań",
      "Szczecin"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podczas protestów w czerwcu 1976 r. do starć ulicznych z milicją doszło w Ursusie, Radomiu i Płocku."
  },
  {
    "id": "R03_GIE_10",
    "section": "Od Gomułki do Gierka",
    "type": "riddle",
    "prompt": "Organizacja założona we wrześniu 1976 r. przez intelektualistów, aby pomagać represjonowanym robotnikom i przełamywać monopol informacyjny władz, to...",
    "options": null,
    "answer": "Komitet Obrony Robotników",
    "altAnswers": [
      "Komitet Obrony Robotników",
      "KOR"
    ],
    "explanation": "Komitet Obrony Robotników, czyli KOR, zbierał pomoc dla represjonowanych, zapewniał wsparcie prawne i wydawał nielegalne materiały informacyjne."
  },
  {
    "id": "R03_SOL_01",
    "section": "Solidarność i kryzys PRL",
    "type": "match",
    "prompt": "Połącz twórcę z odpowiednią informacją o jego twórczości.",
    "options": null,
    "left": [
      "Zbigniew Herbert",
      "Wisława Szymborska",
      "Andrzej Wajda",
      "Czesław Miłosz"
    ],
    "right": [
      "poezja",
      "poetka i późniejsza noblistka",
      "reżyser filmowy",
      "poeta tworzący na emigracji"
    ],
    "answer": {
      "Zbigniew Herbert": "poezja",
      "Wisława Szymborska": "poetka i późniejsza noblistka",
      "Andrzej Wajda": "reżyser filmowy",
      "Czesław Miłosz": "poeta tworzący na emigracji"
    },
    "explanation": "W PRL tworzyli m.in. poeta Zbigniew Herbert, poetka Wisława Szymborska i reżyser Andrzej Wajda; na emigracji tworzył także Czesław Miłosz."
  },
  {
    "id": "R03_SOL_02",
    "section": "Solidarność i kryzys PRL",
    "type": "true_false",
    "prompt": "Karol Wojtyła został wybrany papieżem 16 października 1978 r. i przyjął imię Jan Paweł II.",
    "options": null,
    "answer": true,
    "explanation": "Arcybiskup krakowski Karol Wojtyła został wybrany papieżem 16 października 1978 r. i przyjął imię Jan Paweł II."
  },
  {
    "id": "R03_SOL_03",
    "section": "Solidarność i kryzys PRL",
    "type": "multi_select",
    "prompt": "Zaznacz skutki pierwszej pielgrzymki Jana Pawła II do Polski w 1979 r.",
    "options": [
      "społeczeństwo poczuło własną siłę",
      "wzrosło znaczenie Kościoła",
      "osłabł ideologiczny autorytet PZPR",
      "natychmiast zalegalizowano Solidarność",
      "zniesiono urząd pierwszego sekretarza PZPR"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_jan_pawel_ii_1979.jpg",
    "explanation": "Pielgrzymka wzmocniła poczucie siły społeczeństwa, zwiększyła znaczenie Kościoła i osłabiła ideologiczny autorytet PZPR."
  },
  {
    "id": "R03_SOL_04",
    "section": "Solidarność i kryzys PRL",
    "type": "single_choice",
    "prompt": "Jaki był nadrzędny cel Komitetu Samoobrony Społecznej KOR?",
    "options": [
      "tworzenie społeczeństwa obywatelskiego niezależnego od władz",
      "utworzenie nowej partii komunistycznej",
      "wprowadzenie przymusowej kolektywizacji",
      "likwidacja niezależnych wydawnictw",
      "przejęcie władzy przez wojsko",
      "odbudowa systemu stalinowskiego"
    ],
    "answer": 0,
    "explanation": "KSS KOR dążył do budowy społeczeństwa obywatelskiego niezależnego od władz."
  },
  {
    "id": "R03_SOL_05",
    "section": "Solidarność i kryzys PRL",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie, które nie pasuje do metod KSS KOR: pomoc osobom prześladowanym, nielegalne wydawnictwa, współtworzenie niezależnych organizacji, walka zbrojna.",
    "options": null,
    "answer": "walka zbrojna",
    "explanation": "KSS KOR odrzucał przemoc. Pomagał prześladowanym, prowadził działalność wydawniczą i współtworzył niezależne organizacje."
  },
  {
    "id": "R03_SOL_06",
    "section": "Solidarność i kryzys PRL",
    "type": "scenario",
    "prompt": "14 sierpnia 1980 r. robotnicy Stoczni Gdańskiej im. Lenina rozpoczynają strajk po zwolnieniu Anny Walentynowicz. Lech Wałęsa przyłącza się do protestu, a fala strajków obejmuje kolejne zakłady. Jak nazywa się ta fala wydarzeń?",
    "options": [
      "Sierpień 1980",
      "Marzec 1968",
      "Grudzień 1970",
      "Czerwiec 1976",
      "Polski Październik",
      "Poznański Czerwiec"
    ],
    "answer": 0,
    "explanation": "Strajk w Stoczni Gdańskiej zapoczątkował Sierpień 1980, który doprowadził do porozumień sierpniowych i narodzin Solidarności."
  },
  {
    "id": "R03_SOL_07",
    "section": "Solidarność i kryzys PRL",
    "type": "fill_in",
    "prompt": "Gdański MKS ogłosił __________ postulatów. Najważniejsze porozumienie sierpniowe podpisano w Stoczni Gdańskiej __________ sierpnia 1980 r.",
    "options": null,
    "answer": [
      "21",
      "31"
    ],
    "altAnswers": [
      [
        "21",
        "dwadzieścia jeden"
      ],
      [
        "31",
        "31 sierpnia"
      ]
    ],
    "image": "r03_stocznia_gdanska_sierpien_1980.jpg",
    "explanation": "MKS ogłosił 21 postulatów. Porozumienie gdańskie podpisano 31 sierpnia 1980 r."
  },
  {
    "id": "R03_SOL_08",
    "section": "Solidarność i kryzys PRL",
    "type": "sort",
    "prompt": "Przyporządkuj cechy protestów do Grudnia 1970 albo Sierpnia 1980.",
    "options": null,
    "items": [
      "demonstracje uliczne robotników",
      "brak wspólnej koordynacji zakładów",
      "strajki okupacyjne w zakładach",
      "Międzyzakładowe Komitety Strajkowe",
      "wsparcie działaczy KSS KOR",
      "porozumienia sierpniowe"
    ],
    "categories": [
      "Grudzień 1970",
      "Sierpień 1980"
    ],
    "answer": {
      "Grudzień 1970": [
        "demonstracje uliczne robotników",
        "brak wspólnej koordynacji zakładów"
      ],
      "Sierpień 1980": [
        "strajki okupacyjne w zakładach",
        "Międzyzakładowe Komitety Strajkowe",
        "wsparcie działaczy KSS KOR",
        "porozumienia sierpniowe"
      ]
    },
    "explanation": "W Grudniu 1970 robotnicy wyszli na ulice i nie mieli wspólnej koordynacji między zakładami. W Sierpniu 1980 dominowały strajki okupacyjne, działały MKS-y, a strajkujących wspierali działacze opozycji."
  },
  {
    "id": "R03_SOL_09",
    "section": "Solidarność i kryzys PRL",
    "type": "single_choice",
    "prompt": "Ilu członków liczyła NSZZ Solidarność w 1981 r.?",
    "options": [
      "około 9,5 miliona",
      "około 950 tysięcy",
      "około 95 tysięcy",
      "około 19 milionów",
      "około 3 milionów",
      "około 500 tysięcy"
    ],
    "answer": 0,
    "explanation": "W 1981 r. NSZZ Solidarność liczyła około 9,5 miliona członków."
  },
  {
    "id": "R03_SOL_10",
    "section": "Solidarność i kryzys PRL",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "pierwsza pielgrzymka Jana Pawła II do Polski",
      "powstanie KOR",
      "porozumienie gdańskie",
      "wybór Karola Wojtyły na papieża",
      "początek strajku w Stoczni Gdańskiej"
    ],
    "answer": [
      "powstanie KOR",
      "wybór Karola Wojtyły na papieża",
      "pierwsza pielgrzymka Jana Pawła II do Polski",
      "początek strajku w Stoczni Gdańskiej",
      "porozumienie gdańskie"
    ],
    "explanation": "KOR powstał w 1976 r., Karol Wojtyła został papieżem w 1978 r., pierwsza pielgrzymka odbyła się w 1979 r., strajk w Stoczni Gdańskiej rozpoczął się 14 sierpnia 1980 r., a porozumienie gdańskie podpisano 31 sierpnia 1980 r."
  },
  {
    "id": "R03_UPA_01",
    "section": "Stan wojenny i upadek PRL",
    "type": "single_choice",
    "prompt": "Kiedy wprowadzono w Polsce stan wojenny?",
    "options": [
      "13 grudnia 1981 r.",
      "31 sierpnia 1980 r.",
      "22 lipca 1983 r.",
      "4 czerwca 1989 r.",
      "16 października 1978 r.",
      "20 grudnia 1970 r."
    ],
    "answer": 0,
    "image": "r03_stan_wojenny_transporter.jpg",
    "explanation": "Stan wojenny rozpoczął się o północy 13 grudnia 1981 r."
  },
  {
    "id": "R03_UPA_02",
    "section": "Stan wojenny i upadek PRL",
    "type": "multi_select",
    "prompt": "Zaznacz ograniczenia wprowadzone w pierwszym okresie stanu wojennego.",
    "options": [
      "zawieszenie działalności Solidarności",
      "zakaz strajków i manifestacji",
      "godzina milicyjna",
      "cenzura listów i kontrola rozmów telefonicznych",
      "militaryzacja wielu zakładów",
      "pełna swoboda wydawania prasy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Zawieszono działalność Solidarności, zakazano strajków i manifestacji, wprowadzono godzinę milicyjną, cenzurę listów i kontrolę rozmów telefonicznych oraz zmilitaryzowano wiele zakładów i instytucji."
  },
  {
    "id": "R03_UPA_03",
    "section": "Stan wojenny i upadek PRL",
    "type": "scenario",
    "prompt": "16 grudnia 1981 r. ZOMO szturmuje zakład pracy, a podczas pacyfikacji ginie 9 górników. O jaki zakład chodzi?",
    "options": [
      "kopalnia Wujek",
      "Stocznia Gdańska",
      "Huta im. Lenina",
      "Zakłady im. Stalina w Poznaniu",
      "Stocznia Gdyńska",
      "kopalnia Piast"
    ],
    "answer": 0,
    "explanation": "Do najtragiczniejszej pacyfikacji doszło w kopalni Wujek w Katowicach, gdzie 16 grudnia 1981 r. zginęło 9 górników."
  },
  {
    "id": "R03_UPA_04",
    "section": "Stan wojenny i upadek PRL",
    "type": "riddle",
    "prompt": "Jak nazywano strategię pokojowej, długotrwałej walki podziemnej Solidarności, która miała skłonić władze do ugody i przyznania społeczeństwu swobód demokratycznych?",
    "options": null,
    "answer": "długi marsz",
    "altAnswers": [
      "długi marsz",
      "taktyka długiego marszu"
    ],
    "explanation": "Podziemna Solidarność przyjęła taktykę długiego marszu, czyli pokojowej i długotrwałej presji na władze."
  },
  {
    "id": "R03_UPA_05",
    "section": "Stan wojenny i upadek PRL",
    "type": "match",
    "prompt": "Połącz formę oporu podziemnej Solidarności z przykładem.",
    "options": null,
    "left": [
      "działalność wydawnicza",
      "manifestacje",
      "akcje symboliczne",
      "radio"
    ],
    "right": [
      "nielegalne czasopisma i książki",
      "pochody i demonstracje",
      "noszenie oporników i świece w oknach",
      "audycje Radia Solidarność"
    ],
    "answer": {
      "działalność wydawnicza": "nielegalne czasopisma i książki",
      "manifestacje": "pochody i demonstracje",
      "akcje symboliczne": "noszenie oporników i świece w oknach",
      "radio": "audycje Radia Solidarność"
    },
    "explanation": "Podziemna Solidarność wydawała nielegalną prasę i książki, organizowała manifestacje, prowadziła symboliczne akcje protestacyjne i nadawała audycje radiowe."
  },
  {
    "id": "R03_UPA_06",
    "section": "Stan wojenny i upadek PRL",
    "type": "true_false",
    "prompt": "Stan wojenny został zniesiony 22 lipca 1983 r.",
    "options": null,
    "answer": true,
    "explanation": "Władze zniosły stan wojenny 22 lipca 1983 r., choć represje wobec opozycji nie ustały."
  },
  {
    "id": "R03_UPA_07",
    "section": "Stan wojenny i upadek PRL",
    "type": "single_choice",
    "prompt": "Który kapelan Solidarności został porwany i zamordowany przez funkcjonariuszy SB w październiku 1984 r.?",
    "options": [
      "Jerzy Popiełuszko",
      "Stefan Wyszyński",
      "Karol Wojtyła",
      "Leopold Okulicki",
      "Jacek Kuroń",
      "Bronisław Geremek"
    ],
    "answer": 0,
    "explanation": "W październiku 1984 r. funkcjonariusze SB porwali i zamordowali księdza Jerzego Popiełuszkę."
  },
  {
    "id": "R03_UPA_08",
    "section": "Stan wojenny i upadek PRL",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "rozmowy okrągłego stołu",
      "zabójstwo księdza Jerzego Popiełuszki",
      "wprowadzenie stanu wojennego",
      "strajki wiosną i latem 1988 r.",
      "Pokojowa Nagroda Nobla dla Lecha Wałęsy"
    ],
    "answer": [
      "wprowadzenie stanu wojennego",
      "Pokojowa Nagroda Nobla dla Lecha Wałęsy",
      "zabójstwo księdza Jerzego Popiełuszki",
      "strajki wiosną i latem 1988 r.",
      "rozmowy okrągłego stołu"
    ],
    "explanation": "Stan wojenny wprowadzono w 1981 r., Lech Wałęsa otrzymał Pokojową Nagrodę Nobla w 1983 r., ksiądz Jerzy Popiełuszko został zamordowany w 1984 r., strajki wybuchły ponownie w 1988 r., a rozmowy okrągłego stołu odbyły się w 1989 r."
  },
  {
    "id": "R03_UPA_09",
    "section": "Stan wojenny i upadek PRL",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia porozumień okrągłego stołu.",
    "options": [
      "legalizacja NSZZ Solidarność",
      "utworzenie urzędu prezydenta PRL",
      "wolne wybory do Senatu",
      "65% miejsc w Sejmie zarezerwowanych dla PZPR i jej sojuszników",
      "likwidacja Rady Państwa",
      "natychmiastowe całkowicie wolne wybory do Sejmu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r03_okragly_stol_1989.jpg",
    "explanation": "Ustalono legalizację Solidarności, urząd prezydenta PRL, wolne wybory do Senatu, częściowo wolne wybory do Sejmu, likwidację Rady Państwa i dostęp opozycji do mediów."
  },
  {
    "id": "R03_UPA_10",
    "section": "Stan wojenny i upadek PRL",
    "type": "fill_in",
    "prompt": "W wyborach 4 czerwca 1989 r. kandydaci opozycji zdobyli w Senacie __________ miejsc na 100, a w Sejmie __________ ze 161 miejsc, które mogli zdobyć.",
    "options": null,
    "answer": [
      "99",
      "161"
    ],
    "altAnswers": [
      [
        "99",
        "99 miejsc"
      ],
      [
        "161",
        "161 miejsc"
      ]
    ],
    "image": "r03_wybory_1989_solidarnosc.jpg",
    "explanation": "W wyborach z 4 czerwca 1989 r. opozycja zdobyła 99 ze 100 miejsc w Senacie oraz wszystkie 161 dostępnych dla niej mandatów w Sejmie."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dokładną datę lub miesiąc z wydarzeniem.",
    "options": null,
    "left": [
      "rozwiązanie AK",
      "porozumienie gdańskie",
      "wprowadzenie stanu wojennego",
      "wybory do Sejmu i Senatu"
    ],
    "right": [
      "19 stycznia 1945",
      "31 sierpnia 1980",
      "13 grudnia 1981",
      "4 czerwca 1989"
    ],
    "answer": {
      "rozwiązanie AK": "19 stycznia 1945",
      "porozumienie gdańskie": "31 sierpnia 1980",
      "wprowadzenie stanu wojennego": "13 grudnia 1981",
      "wybory do Sejmu i Senatu": "4 czerwca 1989"
    },
    "explanation": "Rozwiązanie AK nastąpiło 19 stycznia 1945 r., porozumienie gdańskie podpisano 31 sierpnia 1980 r., stan wojenny wprowadzono 13 grudnia 1981 r., a wybory do Sejmu i Senatu odbyły się 4 czerwca 1989 r."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pod koniec 1945 r. podziemie niepodległościowe liczyło około __________ żołnierzy. Z amnestii w 1947 r. skorzystało ponad __________ osób, a w walkach z lat 1944-1947 zginęło około __________ żołnierzy podziemia.",
    "options": null,
    "answer": [
      "80 tysięcy",
      "76 tysięcy",
      "20 tysięcy"
    ],
    "altAnswers": [
      [
        "80 tysięcy",
        "80 tys.",
        "80000"
      ],
      [
        "76 tysięcy",
        "76 tys.",
        "76000"
      ],
      [
        "20 tysięcy",
        "20 tys.",
        "20000"
      ]
    ],
    "explanation": "Pod koniec 1945 r. podziemie liczyło około 80 tysięcy żołnierzy. Z amnestii skorzystało ponad 76 tysięcy, a w walkach zginęło około 20 tysięcy żołnierzy podziemia."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Władze chcą ograniczyć legalną opozycję. Najpierw fałszują wybory, później Stanisław Mikołajczyk ucieka za granicę, a w 1949 r. jego dawne stronnictwo zostaje połączone z innymi ugrupowaniami chłopskimi. Jaka organizacja powstaje?",
    "options": [
      "Zjednoczone Stronnictwo Ludowe",
      "Polska Zjednoczona Partia Robotnicza",
      "Komitet Obrony Robotników",
      "Tymczasowy Rząd Jedności Narodowej",
      "Międzyzakładowy Komitet Strajkowy",
      "Wolne Związki Zawodowe"
    ],
    "answer": 0,
    "explanation": "W 1949 r. z pozbawionego samodzielności PSL i innych ugrupowań chłopskich utworzono Zjednoczone Stronnictwo Ludowe, będące przybudówką PPR."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż parę, która nie pasuje do pozostałych: Rembertów - uwolnienie ok. 500 więźniów, Puszcza Augustowska - aresztowanie ok. 600 mieszkańców, kopalnia Wujek - śmierć 9 górników, Nowa Huta - śmierć ok. 45 osób w Grudniu 1970.",
    "options": null,
    "answer": "Nowa Huta - śmierć ok. 45 osób w Grudniu 1970",
    "explanation": "Około 45 osób zginęło w Grudniu 1970 na Wybrzeżu, a nie w Nowej Hucie. Pozostałe pary poprawnie łączą miejsce z odpowiednią liczbą."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w relacjach państwo-Kościół od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "układ PRL-RFN o uznaniu granicy zachodniej",
      "aresztowanie prymasa Wyszyńskiego",
      "orędzie biskupów polskich do biskupów niemieckich",
      "nasilenie prześladowań Kościoła",
      "uwolnienie prymasa Wyszyńskiego",
      "porozumienie rządu z episkopatem"
    ],
    "answer": [
      "nasilenie prześladowań Kościoła",
      "porozumienie rządu z episkopatem",
      "aresztowanie prymasa Wyszyńskiego",
      "uwolnienie prymasa Wyszyńskiego",
      "orędzie biskupów polskich do biskupów niemieckich",
      "układ PRL-RFN o uznaniu granicy zachodniej"
    ],
    "explanation": "Kolejność to: prześladowania od 1947 r., porozumienie z episkopatem w 1950 r., aresztowanie prymasa w 1953 r., uwolnienie w 1956 r., orędzie do biskupów niemieckich w 1965 r. i układ PRL-RFN w 1970 r."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia Konstytucji PRL z 1952 r.",
    "options": [
      "określenie Polski jako państwa demokracji ludowej",
      "likwidacja urzędu prezydenta",
      "uzależnienie swobód obywatelskich od wypełniania obowiązków",
      "wprowadzenie wolnych wyborów do Senatu",
      "zniesienie kierowniczej roli partii komunistycznej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Konstytucja określała Polskę jako państwo demokracji ludowej, zlikwidowała urząd prezydenta i uzależniała swobody obywatelskie od wypełniania obowiązków."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jakie miasto w 1953 r. przemianowano na Stalinogród, a w 1956 r. przywrócono mu dawną nazwę?",
    "options": null,
    "answer": "Katowice",
    "altAnswers": [
      "Katowice",
      "katowice"
    ],
    "explanation": "W 1953 r. Katowice przemianowano na Stalinogród. W 1956 r. miasto ponownie otrzymało nazwę Katowice."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W Rejestrze elementu przestępczego i podejrzanego z 1954 r. znajdowało się ponad __________ nazwisk.",
    "options": null,
    "answer": [
      "5 milionów"
    ],
    "altAnswers": [
      [
        "5 milionów",
        "5 mln",
        "5000000",
        "ponad 5 milionów"
      ]
    ],
    "explanation": "W 1954 r. w tym rejestrze znajdowało się ponad 5 milionów nazwisk."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W sierpniu 1968 r. 24 tysiące polskich żołnierzy bierze udział w inwazji, która kończy Praską Wiosnę. W ramach jakiego sojuszu wojskowego przeprowadzono tę interwencję?",
    "options": [
      "Układ Warszawski",
      "NATO",
      "ONZ",
      "Rada Europy",
      "Europejska Wspólnota Gospodarcza",
      "Liga Narodów"
    ],
    "answer": 0,
    "explanation": "Polscy żołnierze uczestniczyli w 1968 r. w interwencji wojsk państw Układu Warszawskiego w Czechosłowacji."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rok z wielkością zadłużenia PRL.",
    "options": null,
    "left": [
      "1975",
      "1980",
      "1987"
    ],
    "right": [
      "ponad 8 mld dolarów",
      "ponad 24 mld dolarów",
      "ponad 37 mld dolarów"
    ],
    "answer": {
      "1975": "ponad 8 mld dolarów",
      "1980": "ponad 24 mld dolarów",
      "1987": "ponad 37 mld dolarów"
    },
    "explanation": "Zadłużenie przekroczyło 8 miliardów dolarów w 1975 r., 24 miliardy w 1980 r., a w 1987 r. wzrosło do ponad 37 miliardów dolarów."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po wprowadzeniu stanu wojennego strajki objęły 199 przedsiębiorstw z około 7 tysięcy działających zakładów.",
    "options": null,
    "answer": true,
    "explanation": "Po 13 grudnia 1981 r. strajki objęły 199 przedsiębiorstw spośród około 7 tysięcy działających zakładów."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj uczestników rozmów okrągłego stołu do strony rządowej albo solidarnościowo-opozycyjnej.",
    "options": null,
    "items": [
      "Czesław Kiszczak",
      "Aleksander Kwaśniewski",
      "Leszek Miller",
      "Lech Wałęsa",
      "Zbigniew Bujak",
      "Bronisław Geremek",
      "Jacek Kuroń",
      "Tadeusz Mazowiecki"
    ],
    "categories": [
      "strona rządowa",
      "strona solidarnościowo-opozycyjna"
    ],
    "answer": {
      "strona rządowa": [
        "Czesław Kiszczak",
        "Aleksander Kwaśniewski",
        "Leszek Miller"
      ],
      "strona solidarnościowo-opozycyjna": [
        "Lech Wałęsa",
        "Zbigniew Bujak",
        "Bronisław Geremek",
        "Jacek Kuroń",
        "Tadeusz Mazowiecki"
      ]
    },
    "explanation": "Stronie rządowej przewodniczył Czesław Kiszczak; byli w niej m.in. Aleksander Kwaśniewski i Leszek Miller. Stronie solidarnościowo-opozycyjnej przewodniczył Lech Wałęsa; uczestniczyli w niej m.in. Zbigniew Bujak, Bronisław Geremek, Jacek Kuroń i Tadeusz Mazowiecki."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Polska Rzeczpospolita Ludowa",
  icon: "🇵🇱",
  sectionOrder: [
  "Powojenne przejęcie władzy",
  "Stalinizm w Polsce",
  "Odwilż i rządy Gomułki",
  "Od Gomułki do Gierka",
  "Solidarność i kryzys PRL",
  "Stan wojenny i upadek PRL"
],
  sectionIcons: {
  "Powojenne przejęcie władzy": "🗳️",
  "Stalinizm w Polsce": "🏭",
  "Odwilż i rządy Gomułki": "🌤️",
  "Od Gomułki do Gierka": "📉",
  "Solidarność i kryzys PRL": "✊",
  "Stan wojenny i upadek PRL": "🔓"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
