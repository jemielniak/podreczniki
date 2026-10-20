// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WRZ  = Kampania wrześniowa 1939
//   FRN  = Fronty II wojny światowej
//   OKU  = Okupacja i zbrodnie wojenne
//   POD  = Polskie Państwo Podziemne
//   POL  = Rząd na uchodźstwie i Polacy na frontach
//   KON  = Konferencje i skutki wojny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R06_WRZ_01",
    section: "Kampania wrześniowa 1939",
    type: "single_choice",
    prompt: "Jak nazywał się niemiecki plan ataku na Polskę we wrześniu 1939 r.?",
    explanation: "Plan Fall Weiss zakładał wojnę błyskawiczną, czyli szybkie uderzenia wojsk pancernych wspieranych lotnictwem.",
    options: [
      "Barbarossa",
      "Fall Weiss",
      "Overlord",
      "Burza",
      "Weserübung",
      "Market Garden"
    ],
    image: "r06_mapa_agresji_1939.jpg",
    answer: 1
  },
  {
    id: "R06_WRZ_02",
    section: "Kampania wrześniowa 1939",
    type: "single_choice",
    prompt: "Kto dowodził polską załogą Westerplatte?",
    explanation: "Obroną Westerplatte przez siedem dni kierował mjr Henryk Sucharski.",
    options: [
      "Władysław Raginis",
      "Franciszek Kleeberg",
      "Henryk Sucharski",
      "Juliusz Rómmel",
      "Konrad Guderski",
      "Edward Rydz-Śmigły"
    ],
    image: "r06_westerplatte_1939.jpg",
    answer: 2
  },
  {
    id: "R06_WRZ_03",
    section: "Kampania wrześniowa 1939",
    type: "multi_select",
    prompt: "Które żądania Hitler wysunął wobec Polski w marcu 1939 r.?",
    explanation: "Hitler zażądał Gdańska oraz eksterytorialnej drogi i linii kolejowej przez polskie Pomorze.",
    options: [
      "Włączenie Gdańska do Niemiec",
      "Zgoda na eksterytorialną autostradę przez Pomorze",
      "Zgoda na eksterytorialną linię kolejową przez Pomorze",
      "Oddanie Warszawy Niemcom",
      "Przekazanie Niemcom całej Małopolski"
    ],
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R06_WRZ_04",
    section: "Kampania wrześniowa 1939",
    type: "true_false",
    prompt: "We wrześniu 1939 r. Polska miała więcej czołgów niż III Rzesza.",
    explanation: "Na początku kampanii wrześniowej Polska dysponowała około 300 czołgami, a Niemcy około 2700.",
    options: null,
    answer: false
  },
  {
    id: "R06_WRZ_05",
    section: "Kampania wrześniowa 1939",
    type: "fill_in",
    prompt: "Niemcy zaatakowały Polskę __________ września 1939 r., a Armia Czerwona wkroczyła do Polski __________ września 1939 r.",
    explanation: "Agresja niemiecka nastąpiła 1 września, a sowiecka 17 września 1939 r.",
    options: null,
    altAnswers: [
      [
        "1",
        "1.",
        "pierwszego"
      ],
      [
        "17",
        "17.",
        "siedemnastego"
      ]
    ],
    image: "r06_mapa_agresji_1939.jpg",
    answer: [
      "1",
      "17"
    ]
  },
  {
    id: "R06_WRZ_06",
    section: "Kampania wrześniowa 1939",
    type: "riddle",
    prompt: "Jak nazywa się miejscowość, której obronę w 1939 r. nazwano polskimi Termopilami?",
    explanation: "Tak określano bitwę pod Wizną, gdzie oddział kpt. Władysława Raginisa stawiał opór przeważającym wojskom niemieckim.",
    options: null,
    altAnswers: [
      "Wizna",
      "Wizną",
      "pod Wizną"
    ],
    image: "r06_obrona_wizny.jpg",
    answer: "Wizna"
  },
  {
    id: "R06_WRZ_07",
    section: "Kampania wrześniowa 1939",
    type: "odd_one_out",
    prompt: "Wskaż bitwę spoza kampanii obronnej Polski w 1939 r.: Mokra, Wizna, Bzura, Midway.",
    explanation: "Mokra, Wizna i Bzura wiążą się z walkami w Polsce w 1939 r.; bitwa o Midway to starcie z czerwca 1942 r. na Pacyfiku.",
    options: null,
    answer: "Midway"
  },
  {
    id: "R06_WRZ_08",
    section: "Kampania wrześniowa 1939",
    type: "scenario",
    prompt: "Jest 17 września 1939 r. Polskie oddziały walczą już z Niemcami, a od wschodu granicę przekracza kolejna armia. Które państwo dokonało tej agresji?",
    explanation: "17 września 1939 r. Armia Czerwona wkroczyła do Polski, realizując ustalenia paktu Ribbentrop-Mołotow.",
    options: [
      "Włochy",
      "Japonia",
      "Związek Radziecki",
      "Węgry",
      "Rumunia",
      "Francja"
    ],
    image: "r06_mapa_agresji_1939.jpg",
    answer: 2
  },
  {
    id: "R06_WRZ_09",
    section: "Kampania wrześniowa 1939",
    type: "match",
    prompt: "Połącz miejsca walk we wrześniu 1939 roku z dowódcami lub obrońcami.",
    explanation: "Westerplatte bronił mjr Sucharski, Wizny kpt. Raginis, poczty ppor. Guderski, a pod Kockiem walczyła jednostka gen. Kleeberga.",
    options: null,
    left: [
      "Westerplatte",
      "Wizna",
      "Poczta Polska w Gdańsku",
      "Kock"
    ],
    right: [
      "Franciszek Kleeberg",
      "Henryk Sucharski",
      "Konrad Guderski",
      "Władysław Raginis"
    ],
    answer: {
      Westerplatte: "Henryk Sucharski",
      Wizna: "Władysław Raginis",
      "Poczta Polska w Gdańsku": "Konrad Guderski",
      Kock: "Franciszek Kleeberg"
    }
  },
  {
    id: "R06_WRZ_10",
    section: "Kampania wrześniowa 1939",
    type: "sequence",
    prompt: "Ułóż wydarzenia kampanii 1939 r. chronologicznie.",
    explanation: "Niemcy wkroczyli 1 września, alianci wypowiedzieli wojnę 3 września, ZSRR napadł 17 września, Warszawa poddała się 28 września, a pod Kockiem walczono 2-5 października.",
    options: null,
    items: [
      "Agresja sowiecka na Polskę",
      "Kapitulacja Warszawy",
      "Agresja niemiecka na Polskę",
      "Bitwa pod Kockiem",
      "Wypowiedzenie wojny Niemcom przez Francję i Wielką Brytanię"
    ],
    answer: [
      "Agresja niemiecka na Polskę",
      "Wypowiedzenie wojny Niemcom przez Francję i Wielką Brytanię",
      "Agresja sowiecka na Polskę",
      "Kapitulacja Warszawy",
      "Bitwa pod Kockiem"
    ]
  },
  {
    id: "R06_FRN_01",
    section: "Fronty II wojny światowej",
    type: "single_choice",
    prompt: "Z którego portu ewakuowano około 340 tys. alianckich żołnierzy w 1940 r.?",
    explanation: "Po niemieckim przełamaniu frontu w 1940 r. ewakuacja przez Dunkierkę pozwoliła uratować około 340 tys. żołnierzy.",
    options: [
      "Le Havre",
      "Marsylia",
      "Dunkierka",
      "Brest",
      "Hawr",
      "Calais"
    ],
    answer: 2
  },
  {
    id: "R06_FRN_02",
    section: "Fronty II wojny światowej",
    type: "single_choice",
    prompt: "Kto dowodził niemieckim Afrika Korps w Afryce Północnej?",
    explanation: "Afrika Korps wysłano na pomoc wojskom włoskim, a jego dowódcą został gen. Erwin Rommel.",
    options: [
      "Erwin Rommel",
      "Georgij Żukow",
      "Dwight Eisenhower",
      "Alfred Jodl",
      "Winston Churchill",
      "Gerd von Rundstedt"
    ],
    answer: 0
  },
  {
    id: "R06_FRN_03",
    section: "Fronty II wojny światowej",
    type: "multi_select",
    prompt: "Które państwa Niemcy zaatakowały 10 maja 1940 r., naruszając ich neutralność?",
    explanation: "Niemcy 10 maja 1940 r. zaatakowały Belgię, Holandię i Luksemburg, a także uderzyły na Francję.",
    options: [
      "Belgia",
      "Holandia",
      "Luksemburg",
      "Szwajcaria",
      "Szwecja"
    ],
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R06_FRN_04",
    section: "Fronty II wojny światowej",
    type: "true_false",
    prompt: "Bitwę o Anglię ostatecznie wygrali Brytyjczycy wspierani między innymi przez polskich lotników.",
    explanation: "W 1940 r. lotnicy brytyjscy przy wsparciu Francuzów, Polaków i Czechów odparli ataki Luftwaffe.",
    options: null,
    image: "r06_bitwa_o_anglie.jpg",
    answer: true
  },
  {
    id: "R06_FRN_05",
    section: "Fronty II wojny światowej",
    type: "fill_in",
    prompt: "Operację niemieckiego ataku na ZSRR nazwano __________, a rozpoczęła się ona 22 czerwca __________ r.",
    explanation: "Plan Barbarossa przewidywał szybkie rozbicie Armii Czerwonej; niemieckie wojska wkroczyły do ZSRR 22 czerwca 1941 r.",
    options: null,
    altAnswers: [
      [
        "Barbarossa",
        "operacja Barbarossa",
        "plan Barbarossa"
      ],
      [
        "1941",
        "1941 r."
      ]
    ],
    image: "r06_ruiny_stalingradu.jpg",
    answer: [
      "Barbarossa",
      "1941"
    ]
  },
  {
    id: "R06_FRN_06",
    section: "Fronty II wojny światowej",
    type: "scenario",
    prompt: "7 grudnia 1941 r. samoloty zbombardowały amerykańską bazę morską na Pacyfiku. Atak sprawił, że Stany Zjednoczone przystąpiły do wojny przeciwko napastnikowi. Jakie państwo przeprowadziło nalot?",
    explanation: "Pearl Harbor zostało zaatakowane przez japońskie lotnictwo; dzień później USA wypowiedziały wojnę Japonii.",
    options: [
      "Niemcy",
      "Włochy",
      "ZSRR",
      "Japonia",
      "Francja",
      "Wielka Brytania"
    ],
    image: "r06_pearl_harbor.jpg",
    answer: 3
  },
  {
    id: "R06_FRN_07",
    section: "Fronty II wojny światowej",
    type: "riddle",
    prompt: "Pod jaką miejscowością w 1943 r. rozegrano największą bitwę pancerną II wojny światowej?",
    explanation: "Latem 1943 r. Niemcy przegrali wielką bitwę pancerną w rejonie Kurska, ponosząc straty szacowane tutaj na 1500 czołgów.",
    options: null,
    altAnswers: [
      "Kursk",
      "Kurskiem",
      "pod Kurskiem"
    ],
    answer: "Kursk"
  },
  {
    id: "R06_FRN_08",
    section: "Fronty II wojny światowej",
    type: "sort",
    prompt: "Przyporządkuj wydarzenia do obszarów walk.",
    explanation: "Pearl Harbor i Midway wiążą się z walkami na Pacyfiku, Tobruk i El Alamein z Afryką, a Moskwa i Stalingrad z wojną niemiecko-radziecką.",
    options: null,
    items: [
      "Pearl Harbor",
      "Tobruk",
      "Bitwa o Moskwę",
      "Midway",
      "El Alamein",
      "Stalingrad"
    ],
    categories: [
      "Pacyfik",
      "Afryka Północna",
      "Front wschodni"
    ],
    answer: {
      Pacyfik: [
        "Pearl Harbor",
        "Midway"
      ],
      "Afryka Północna": [
        "Tobruk",
        "El Alamein"
      ],
      "Front wschodni": [
        "Bitwa o Moskwę",
        "Stalingrad"
      ]
    }
  },
  {
    id: "R06_FRN_09",
    section: "Fronty II wojny światowej",
    type: "match",
    prompt: "Połącz wydarzenie z jego datą.",
    explanation: "Zestawienie obejmuje wojnę zimową, klęskę Francji, atak na ZSRR i zakończenie bitwy stalingradzkiej.",
    options: null,
    left: [
      "Atak ZSRR na Finlandię",
      "Kapitulacja Francji",
      "Początek operacji Barbarossa",
      "Kapitulacja wojsk niemieckich pod Stalingradem"
    ],
    right: [
      "2 lutego 1943 r.",
      "22 czerwca 1941 r.",
      "30 listopada 1939 r.",
      "22 czerwca 1940 r."
    ],
    answer: {
      "Atak ZSRR na Finlandię": "30 listopada 1939 r.",
      "Kapitulacja Francji": "22 czerwca 1940 r.",
      "Początek operacji Barbarossa": "22 czerwca 1941 r.",
      "Kapitulacja wojsk niemieckich pod Stalingradem": "2 lutego 1943 r."
    }
  },
  {
    id: "R06_FRN_10",
    section: "Fronty II wojny światowej",
    type: "sequence",
    prompt: "Ułóż wydarzenia wojny w kolejności od najwcześniejszego.",
    explanation: "Dania i Norwegia padły ofiarą agresji wiosną 1940 r., Francja skapitulowała w czerwcu 1940 r., ZSRR zaatakowano w czerwcu 1941 r., Pearl Harbor w grudniu 1941 r., a Stalingrad zakończył się w lutym 1943 r.",
    options: null,
    items: [
      "Japoński atak na Pearl Harbor",
      "Kapitulacja wojsk niemieckich pod Stalingradem",
      "Niemiecki atak na Danię i Norwegię",
      "Rozpoczęcie wojny niemiecko-radzieckiej",
      "Kapitulacja Francji"
    ],
    answer: [
      "Niemiecki atak na Danię i Norwegię",
      "Kapitulacja Francji",
      "Rozpoczęcie wojny niemiecko-radzieckiej",
      "Japoński atak na Pearl Harbor",
      "Kapitulacja wojsk niemieckich pod Stalingradem"
    ]
  },
  {
    id: "R06_OKU_01",
    section: "Okupacja i zbrodnie wojenne",
    type: "single_choice",
    prompt: "Kto został generalnym gubernatorem okupowanych ziem polskich ze stolicą w Krakowie?",
    explanation: "Generalne Gubernatorstwo utworzono dekretem z 12 października 1939 r.; jego stolicą był Kraków, a gubernatorem Hans Frank.",
    options: [
      "Arthur Greiser",
      "Hans Frank",
      "Heinrich Himmler",
      "Joseph Goebbels",
      "Erich Koch",
      "Alfred Jodl"
    ],
    answer: 1
  },
  {
    id: "R06_OKU_02",
    section: "Okupacja i zbrodnie wojenne",
    type: "single_choice",
    prompt: "Jak nazywano niemiecką listę narodową wykorzystywaną w germanizacji terenów wcielonych do Rzeszy?",
    explanation: "Deutsche Volksliste służyła władzom niemieckim do zmiany składu narodowościowego ziem wcielonych do III Rzeszy.",
    options: [
      "Deutsche Volksliste",
      "Generalplan Ost",
      "Einsatzgruppen",
      "Afrika Korps",
      "Kedyw",
      "Karta Atlantycka"
    ],
    answer: 0
  },
  {
    id: "R06_OKU_03",
    section: "Okupacja i zbrodnie wojenne",
    type: "multi_select",
    prompt: "Jakie działania podejmował niemiecki okupant wobec ludności polskiej podczas II wojny światowej?",
    explanation: "W okupowanej Polsce Niemcy stosowali pracę przymusową, wysiedlenia, kontyngenty żywnościowe oraz ograniczenia oświaty i kultury.",
    options: [
      "Praca przymusowa",
      "Wysiedlenia",
      "Ograniczenie polskiego szkolnictwa",
      "Obowiązkowe dostawy żywności",
      "Swobodny dostęp Polaków do studiów wyższych"
    ],
    image: "r06_praca_przymusowa.jpg",
    answer: [
      0,
      1,
      2,
      3
    ]
  },
  {
    id: "R06_OKU_04",
    section: "Okupacja i zbrodnie wojenne",
    type: "true_false",
    prompt: "W latach 1940-1941 władze sowieckie przeprowadziły cztery duże fale deportacji Polaków z Kresów Wschodnich.",
    explanation: "Władze sowieckie przeprowadziły cztery wielkie fale deportacji ludności polskiej do łagrów i na przymusowe osiedlenie w głębi ZSRR.",
    options: null,
    image: "r06_deportacja_sowiecka.jpg",
    answer: true
  },
  {
    id: "R06_OKU_05",
    section: "Okupacja i zbrodnie wojenne",
    type: "fill_in",
    prompt: "Stolicą Generalnego Gubernatorstwa był __________, a jego gubernatorem został __________.",
    explanation: "Generalne Gubernatorstwo utworzono z części ziem polskich nieprzyłączonych bezpośrednio do Rzeszy.",
    options: null,
    altAnswers: [
      [
        "Kraków",
        "Krakow"
      ],
      [
        "Hans Frank",
        "Hans Franka"
      ]
    ],
    answer: [
      "Kraków",
      "Hans Frank"
    ]
  },
  {
    id: "R06_OKU_06",
    section: "Okupacja i zbrodnie wojenne",
    type: "riddle",
    prompt: "Jak nazywano zagładę Romów prowadzoną przez niemieckich nazistów?",
    explanation: "Porajmos to określenie zagłady Romów, którzy byli prześladowani i mordowani między innymi w Auschwitz-Birkenau.",
    options: null,
    altAnswers: [
      "Porajmos",
      "porajmos"
    ],
    answer: "Porajmos"
  },
  {
    id: "R06_OKU_07",
    section: "Okupacja i zbrodnie wojenne",
    type: "odd_one_out",
    prompt: "Wskaż miejsce egzekucji dokonywanych przez Niemców, a nie przez NKWD: Katyń, Twer, Charków, Palmiry.",
    explanation: "W Palmirach okupant niemiecki rozstrzeliwał przedstawicieli polskiego społeczeństwa; Katyń, Twer i Charków były miejscami sowieckich mordów na polskich oficerach.",
    options: null,
    image: "r06_las_palmiry.jpg",
    answer: "Palmiry"
  },
  {
    id: "R06_OKU_08",
    section: "Okupacja i zbrodnie wojenne",
    type: "scenario",
    prompt: "W okupowanej Warszawie działaczka przenosi do getta lekarstwa i pomaga żydowskim dzieciom uzyskać fałszywe dokumenty oraz schronienie. Kto kierował referatem dziecięcym Żegoty?",
    explanation: "Irena Sendlerowa działała w Żegocie i pomagała ratować żydowskie dzieci z getta warszawskiego.",
    options: [
      "Zofia Kossak-Szczucka",
      "Irena Sendlerowa",
      "Antonina Żabińska",
      "Jan Karski",
      "Aleksander Kamiński",
      "Władysław Raczkiewicz"
    ],
    image: "r06_getto_i_przesladowania.jpg",
    answer: 1
  },
  {
    id: "R06_OKU_09",
    section: "Okupacja i zbrodnie wojenne",
    type: "sort",
    prompt: "Przyporządkuj wydarzenia do okupanta, który za nie odpowiadał.",
    explanation: "Za zbrodnie w Palmirach, na Zamojszczyźnie i na profesorach lwowskich odpowiadali Niemcy, a za mordy w Katyniu, Twerze i Charkowie – sowieckie NKWD.",
    options: null,
    items: [
      "Egzekucje w Palmirach",
      "Mord polskich oficerów w Katyniu",
      "Wysiedlenia z Zamojszczyzny",
      "Zabójstwa polskich jeńców w Twerze",
      "Kaźń profesorów lwowskich",
      "Mord polskich oficerów w Charkowie"
    ],
    categories: [
      "Niemcy",
      "ZSRR"
    ],
    answer: {
      Niemcy: [
        "Egzekucje w Palmirach",
        "Wysiedlenia z Zamojszczyzny",
        "Kaźń profesorów lwowskich"
      ],
      ZSRR: [
        "Mord polskich oficerów w Katyniu",
        "Zabójstwa polskich jeńców w Twerze",
        "Mord polskich oficerów w Charkowie"
      ]
    }
  },
  {
    id: "R06_OKU_10",
    section: "Okupacja i zbrodnie wojenne",
    type: "match",
    prompt: "Połącz miejsce z wydarzeniem z okresu okupacji.",
    explanation: "Te miejsca wiążą się z różnymi formami zbrodni niemieckich i sowieckich podczas II wojny światowej.",
    options: null,
    left: [
      "Palmiry",
      "Katyń",
      "Zamojszczyzna",
      "Treblinka"
    ],
    right: [
      "Wysiedlenia ludności polskiej",
      "Niemiecki ośrodek zagłady Żydów",
      "Masowe egzekucje polskiej inteligencji",
      "Zbrodnia NKWD na polskich oficerach"
    ],
    answer: {
      Palmiry: "Masowe egzekucje polskiej inteligencji",
      "Katyń": "Zbrodnia NKWD na polskich oficerach",
      Zamojszczyzna: "Wysiedlenia ludności polskiej",
      Treblinka: "Niemiecki ośrodek zagłady Żydów"
    }
  },
  {
    id: "R06_POD_01",
    section: "Polskie Państwo Podziemne",
    type: "single_choice",
    prompt: "Jaką organizację przekształcono w Armię Krajową 14 lutego 1942 r.?",
    explanation: "14 lutego 1942 r. Związek Walki Zbrojnej został przekształcony w Armię Krajową.",
    options: [
      "Służbę Zwycięstwu Polski",
      "Związek Walki Zbrojnej",
      "Armię Ludową",
      "Bataliony Chłopskie",
      "Narodowe Siły Zbrojne",
      "Krajową Radę Narodową"
    ],
    answer: 1
  },
  {
    id: "R06_POD_02",
    section: "Polskie Państwo Podziemne",
    type: "single_choice",
    prompt: "Kto dowodził Kierownictwem Dywersji Armii Krajowej, czyli Kedywem?",
    explanation: "Kedywem kierował płk August Emil Fieldorf, pseudonim Nil. Organizacja prowadziła akcje dywersyjne i sabotażowe.",
    options: [
      "Stefan Rowecki Grot",
      "Tadeusz Komorowski Bór",
      "August Emil Fieldorf Nil",
      "Leopold Okulicki Niedźwiadek",
      "Jan Bytnar Rudy",
      "Michał Żymierski Rola"
    ],
    answer: 2
  },
  {
    id: "R06_POD_03",
    section: "Polskie Państwo Podziemne",
    type: "multi_select",
    prompt: "Które działania były przykładami małego sabotażu podczas niemieckiej okupacji?",
    explanation: "Mały sabotaż obejmował działania propagandowe i symboliczne, takie jak malowanie haseł, ulotki i usuwanie znaków okupanta.",
    options: [
      "Malowanie patriotycznych haseł",
      "Zrywanie niemieckich flag",
      "Rozrzucanie ulotek",
      "Zawieszanie polskich flag",
      "Formowanie armii pancernej"
    ],
    image: "r06_kotwica_polska_walczaca.jpg",
    answer: [
      0,
      1,
      2,
      3
    ]
  },
  {
    id: "R06_POD_04",
    section: "Polskie Państwo Podziemne",
    type: "true_false",
    prompt: "Powstanie warszawskie rozpoczęło się 1 sierpnia 1944 r. o godzinie 17.00.",
    explanation: "Godzina W, czyli 17.00 dnia 1 sierpnia 1944 r., wyznaczała początek powstania warszawskiego.",
    options: null,
    image: "r06_powstanie_warszawskie.jpg",
    answer: true
  },
  {
    id: "R06_POD_05",
    section: "Polskie Państwo Podziemne",
    type: "fill_in",
    prompt: "W lutym 1942 r. Związek Walki Zbrojnej przekształcono w __________.",
    explanation: "Armia Krajowa była najważniejszą formacją zbrojną podporządkowaną Polskiemu Państwu Podziemnemu.",
    options: null,
    altAnswers: [
      [
        "Armię Krajową",
        "Armia Krajowa",
        "AK"
      ]
    ],
    answer: [
      "Armię Krajową"
    ]
  },
  {
    id: "R06_POD_06",
    section: "Polskie Państwo Podziemne",
    type: "odd_one_out",
    prompt: "Wskaż działanie, które nie należy do małego sabotażu: malowanie haseł, zrywanie flag okupanta, rozrzucanie ulotek, budowa okrętów wojennych.",
    explanation: "Mały sabotaż był działaniem konspiracyjnym na ulicach i w przestrzeni publicznej, a nie produkcją uzbrojenia morskiego.",
    options: null,
    answer: "budowa okrętów wojennych"
  },
  {
    id: "R06_POD_07",
    section: "Polskie Państwo Podziemne",
    type: "scenario",
    prompt: "W 1943 r. harcerze Szarych Szeregów atakują konwój więźniów w Warszawie, by uwolnić towarzyszy z rąk Gestapo. Wśród odbitych jest Jan Bytnar Rudy. Jak nazywa się ta akcja?",
    explanation: "Szare Szeregi przeprowadziły w 1943 r. akcję pod Arsenałem, uwalniając między innymi Jana Bytnara.",
    options: [
      "Akcja Burza",
      "Akcja pod Arsenałem",
      "Bitwa pod Kockiem",
      "Akcja pod Monte Cassino",
      "Operacja Barbarossa",
      "Bitwa pod Wizną"
    ],
    image: "r06_powstanie_warszawskie.jpg",
    answer: 1
  },
  {
    id: "R06_POD_08",
    section: "Polskie Państwo Podziemne",
    type: "match",
    prompt: "Połącz konspiracyjnego dowódcę z pseudonimem.",
    explanation: "Dowódcy Armii Krajowej i Kedywu posługiwali się pseudonimami konspiracyjnymi.",
    options: null,
    left: [
      "Stefan Rowecki",
      "Tadeusz Komorowski",
      "Leopold Okulicki",
      "August Emil Fieldorf"
    ],
    right: [
      "Niedźwiadek",
      "Nil",
      "Grot",
      "Bór"
    ],
    answer: {
      "Stefan Rowecki": "Grot",
      "Tadeusz Komorowski": "Bór",
      "Leopold Okulicki": "Niedźwiadek",
      "August Emil Fieldorf": "Nil"
    }
  },
  {
    id: "R06_POD_09",
    section: "Polskie Państwo Podziemne",
    type: "sort",
    prompt: "Przyporządkuj działania polskiej konspiracji do właściwej formy oporu.",
    explanation: "Polskie podziemie stosowało opór symboliczny, akcje dywersyjne i tajną edukację.",
    options: null,
    items: [
      "Malowanie symbolu Polski Walczącej",
      "Zrywanie flag niemieckich",
      "Wysadzanie mostów",
      "Uszkadzanie niemieckich pociągów",
      "Organizowanie tajnych kompletów",
      "Realizacja programu szkoły w konspiracji"
    ],
    categories: [
      "Mały sabotaż",
      "Dywersja zbrojna",
      "Tajne nauczanie"
    ],
    answer: {
      "Mały sabotaż": [
        "Malowanie symbolu Polski Walczącej",
        "Zrywanie flag niemieckich"
      ],
      "Dywersja zbrojna": [
        "Wysadzanie mostów",
        "Uszkadzanie niemieckich pociągów"
      ],
      "Tajne nauczanie": [
        "Organizowanie tajnych kompletów",
        "Realizacja programu szkoły w konspiracji"
      ]
    }
  },
  {
    id: "R06_POD_10",
    section: "Polskie Państwo Podziemne",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z podziemiem i powstaniem w kolejności chronologicznej.",
    explanation: "SZP powstała we wrześniu 1939 r., ZWZ w listopadzie 1939 r., AK w lutym 1942 r., a powstanie trwało od 1 sierpnia do 2 października 1944 r.",
    options: null,
    items: [
      "Przekształcenie ZWZ w Armię Krajową",
      "Kapitulacja powstania warszawskiego",
      "Powstanie Służby Zwycięstwu Polski",
      "Wybuch powstania warszawskiego",
      "Utworzenie Związku Walki Zbrojnej"
    ],
    answer: [
      "Powstanie Służby Zwycięstwu Polski",
      "Utworzenie Związku Walki Zbrojnej",
      "Przekształcenie ZWZ w Armię Krajową",
      "Wybuch powstania warszawskiego",
      "Kapitulacja powstania warszawskiego"
    ]
  },
  {
    id: "R06_POL_01",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "single_choice",
    prompt: "Kto objął urząd prezydenta RP na uchodźstwie po internowaniu Ignacego Mościckiego?",
    explanation: "Ignacy Mościcki wskazał Władysława Raczkiewicza jako swego następcę na urzędzie prezydenta RP.",
    options: [
      "Władysław Raczkiewicz",
      "Stanisław Mikołajczyk",
      "Tomasz Arciszewski",
      "Władysław Sikorski",
      "Cyryl Ratajski",
      "Kazimierz Sosnkowski"
    ],
    answer: 0
  },
  {
    id: "R06_POL_02",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "single_choice",
    prompt: "Kto został premierem polskiego rządu na uchodźstwie po śmierci gen. Władysława Sikorskiego?",
    explanation: "Po śmierci Sikorskiego premierem został Stanisław Mikołajczyk, a Naczelnym Wodzem Kazimierz Sosnkowski.",
    options: [
      "Tomasz Arciszewski",
      "Edward Rydz-Śmigły",
      "Stanisław Mikołajczyk",
      "Władysław Anders",
      "Kazimierz Sosnkowski",
      "Ignacy Mościcki"
    ],
    answer: 2
  },
  {
    id: "R06_POL_03",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "multi_select",
    prompt: "Które postanowienia zawierał układ Sikorski-Majski z 30 lipca 1941 r.?",
    explanation: "Porozumienie Sikorski-Majski przywróciło stosunki dyplomatyczne, przewidywało wspólną walkę, armię polską w ZSRR i amnestię.",
    options: [
      "Przywrócenie stosunków dyplomatycznych Polski i ZSRR",
      "Utworzenie Armii Polskiej w ZSRR",
      "Amnestia dla polskich obywateli więzionych w ZSRR",
      "Wspólna walka przeciwko III Rzeszy",
      "Zgoda Polski na oddanie Kresów Wschodnich"
    ],
    answer: [
      0,
      1,
      2,
      3
    ]
  },
  {
    id: "R06_POL_04",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "true_false",
    prompt: "Samodzielna Brygada Strzelców Podhalańskich uczestniczyła w walkach o Narwik w Norwegii.",
    explanation: "Brygada Strzelców Podhalańskich walczyła pod Narwikiem; w kampanii norweskiej uczestniczyły także polskie okręty wojenne.",
    options: null,
    answer: true
  },
  {
    id: "R06_POL_05",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "fill_in",
    prompt: "II Korpusem Polskim walczącym w 1944 r. pod Monte Cassino dowodził gen. __________.",
    explanation: "Gen. Władysław Anders dowodził II Korpusem Polskim uczestniczącym w kampanii włoskiej.",
    options: null,
    altAnswers: [
      [
        "Władysław Anders",
        "Władysława Andersa",
        "Anders"
      ]
    ],
    image: "r06_monte_cassino.jpg",
    answer: [
      "Władysław Anders"
    ]
  },
  {
    id: "R06_POL_06",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "riddle",
    prompt: "Jak nazywał się generał dowodzący polską brygadą spadochronową walczącą pod Arnhem w 1944 r.?",
    explanation: "Polska Brygada Spadochronowa dowodzona przez gen. Stanisława Sosabowskiego wzięła udział w operacji powietrzno-desantowej pod Arnhem.",
    options: null,
    altAnswers: [
      "Stanisław Sosabowski",
      "Stanisława Sosabowskiego",
      "Sosabowski"
    ],
    answer: "Stanisław Sosabowski"
  },
  {
    id: "R06_POL_07",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "odd_one_out",
    prompt: "Wskaż miejsce, w którym nie walczyła polska formacja wojskowa podczas II wojny światowej: Narwik, Monte Cassino, Arnhem, Pearl Harbor.",
    explanation: "Polacy walczyli pod Narwikiem, Monte Cassino i Arnhem. Pearl Harbor był miejscem japońskiego ataku na bazę USA.",
    options: null,
    image: "r06_monte_cassino.jpg",
    answer: "Pearl Harbor"
  },
  {
    id: "R06_POL_08",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "scenario",
    prompt: "W maju 1944 r. żołnierze polscy szturmują silnie bronione wzgórze na linii Gustawa we Włoszech. Jaka formacja odniosła tam zwycięstwo?",
    explanation: "Monte Cassino zdobyli żołnierze II Korpusu Polskiego dowodzonego przez gen. Andersa.",
    options: [
      "1. Dywizja Pancerna",
      "II Korpus Polski",
      "1. Dywizja Piechoty im. Tadeusza Kościuszki",
      "Brygada Strzelców Podhalańskich",
      "Polska Brygada Spadochronowa",
      "1. Brygada Artylerii im. Józefa Bema"
    ],
    image: "r06_monte_cassino.jpg",
    answer: 1
  },
  {
    id: "R06_POL_09",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "match",
    prompt: "Połącz polską jednostkę walczącą podczas II wojny światowej z jej dowódcą.",
    explanation: "Polskie jednostki wojskowe walczyły m.in. w Norwegii, Afryce Północnej i Europie Zachodniej.",
    options: null,
    left: [
      "Samodzielna Brygada Strzelców Podhalańskich",
      "Samodzielna Brygada Strzelców Karpackich",
      "1. Dywizja Pancerna",
      "Polska Brygada Spadochronowa"
    ],
    right: [
      "Stanisław Kopański",
      "Stanisław Sosabowski",
      "Stanisław Maczek",
      "Zygmunt Szyszko-Bohusz"
    ],
    answer: {
      "Samodzielna Brygada Strzelców Podhalańskich": "Zygmunt Szyszko-Bohusz",
      "Samodzielna Brygada Strzelców Karpackich": "Stanisław Kopański",
      "1. Dywizja Pancerna": "Stanisław Maczek",
      "Polska Brygada Spadochronowa": "Stanisław Sosabowski"
    }
  },
  {
    id: "R06_POL_10",
    section: "Rząd na uchodźstwie i Polacy na frontach",
    type: "sequence",
    prompt: "Ułóż wydarzenia dotyczące polskiego wysiłku wojennego chronologicznie.",
    explanation: "Układ zawarto w 1941 r., ewakuacja nastąpiła w 1942 r., II Korpus utworzono w 1943 r., Monte Cassino zdobyto w 1944 r., a Berlin w 1945 r.",
    options: null,
    items: [
      "Zdobycie Monte Cassino przez II Korpus",
      "Układ Sikorski-Majski",
      "Ewakuacja armii Andersa do Iranu",
      "Sformowanie II Korpusu Polskiego",
      "Udział polskiej dywizji w szturmie na Berlin"
    ],
    answer: [
      "Układ Sikorski-Majski",
      "Ewakuacja armii Andersa do Iranu",
      "Sformowanie II Korpusu Polskiego",
      "Zdobycie Monte Cassino przez II Korpus",
      "Udział polskiej dywizji w szturmie na Berlin"
    ]
  },
  {
    id: "R06_KON_01",
    section: "Konferencje i skutki wojny",
    type: "single_choice",
    prompt: "W którym roku przywódcy wielkiej trójki spotkali się w Teheranie?",
    explanation: "Konferencja w Teheranie odbyła się od 28 listopada do 1 grudnia 1943 r.",
    options: [
      "1940",
      "1941",
      "1942",
      "1943",
      "1944",
      "1945"
    ],
    image: "r06_konferencja_wielkiej_trojki.jpg",
    answer: 3
  },
  {
    id: "R06_KON_02",
    section: "Konferencje i skutki wojny",
    type: "single_choice",
    prompt: "Na ile stref okupacyjnych postanowiono podzielić Niemcy na konferencji w Poczdamie?",
    explanation: "W Poczdamie ustalono cztery strefy: radziecką, amerykańską, brytyjską i francuską.",
    options: [
      "Dwie",
      "Trzy",
      "Cztery",
      "Pięć",
      "Sześć",
      "Siedem"
    ],
    answer: 2
  },
  {
    id: "R06_KON_03",
    section: "Konferencje i skutki wojny",
    type: "multi_select",
    prompt: "Które obszary według postanowień powojennych miały znaleźć się w granicach Polski?",
    explanation: "Ustalenia konferencji przewidywały dla Polski Gdańsk, Warmię i Mazury, ale granicę wschodnią wyznaczała linia Curzona.",
    options: [
      "Gdańsk",
      "Warmia",
      "Mazury",
      "Lwów",
      "Większość Kresów Wschodnich"
    ],
    image: "r06_mapa_powojennej_polski.jpg",
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R06_KON_04",
    section: "Konferencje i skutki wojny",
    type: "true_false",
    prompt: "Na konferencji w Jałcie postanowiono zastąpić Ligę Narodów Organizacją Narodów Zjednoczonych.",
    explanation: "Uczestnicy konferencji jałtańskiej zaakceptowali utworzenie ONZ w miejsce Ligi Narodów.",
    options: null,
    answer: true
  },
  {
    id: "R06_KON_05",
    section: "Konferencje i skutki wojny",
    type: "fill_in",
    prompt: "W Poczdamie wyznaczono zachodnią granicę Polski na Odrze i __________.",
    explanation: "Konferencja poczdamska ostatecznie potwierdziła linię Odry i Nysy Łużyckiej jako polską granicę zachodnią.",
    options: null,
    altAnswers: [
      [
        "Nysie Łużyckiej",
        "Nysa Łużycka",
        "Nysy Łużyckiej"
      ]
    ],
    answer: [
      "Nysie Łużyckiej"
    ]
  },
  {
    id: "R06_KON_06",
    section: "Konferencje i skutki wojny",
    type: "odd_one_out",
    prompt: "Wskaż miejsce, które nie było gospodarzem konferencji wielkiej trójki: Teheran, Jałta, Poczdam, Narwik.",
    explanation: "Teheran, Jałta i Poczdam były miejscami konferencji aliantów; pod Narwikiem toczyły się walki w 1940 r.",
    options: null,
    answer: "Narwik"
  },
  {
    id: "R06_KON_07",
    section: "Konferencje i skutki wojny",
    type: "scenario",
    prompt: "Latem 1945 r. mocarstwa obradują o przyszłości Niemiec. Prezydent Roosevelt już nie żyje, a przy stole konferencyjnym zasiada nowy prezydent USA. Kto nim jest?",
    explanation: "W Poczdamie Stany Zjednoczone reprezentował prezydent Harry Truman, następca Franklina D. Roosevelta.",
    options: [
      "Franklin D. Roosevelt",
      "Harry Truman",
      "Winston Churchill",
      "Dwight Eisenhower",
      "Clement Attlee",
      "Joseph Stalin"
    ],
    image: "r06_konferencja_wielkiej_trojki.jpg",
    answer: 1
  },
  {
    id: "R06_KON_08",
    section: "Konferencje i skutki wojny",
    type: "match",
    prompt: "Połącz konferencje wielkiej trójki z podjętymi na nich ustaleniami.",
    explanation: "W Teheranie rozważano przyszłe granice, w Jałcie kwestię rządu polskiego, a w Poczdamie okupację Niemiec.",
    options: null,
    left: [
      "Teheran",
      "Jałta",
      "Poczdam"
    ],
    right: [
      "Podział Niemiec na cztery strefy okupacyjne",
      "Zapowiedź powołania rządu jedności narodowej w Polsce",
      "Wstępne ustalenia dotyczące przyszłej granicy wschodniej Polski"
    ],
    answer: {
      Teheran: "Wstępne ustalenia dotyczące przyszłej granicy wschodniej Polski",
      "Jałta": "Zapowiedź powołania rządu jedności narodowej w Polsce",
      Poczdam: "Podział Niemiec na cztery strefy okupacyjne"
    }
  },
  {
    id: "R06_KON_09",
    section: "Konferencje i skutki wojny",
    type: "sort",
    prompt: "Podziel następstwa II wojny światowej według ich głównego charakteru.",
    explanation: "Wojna spowodowała straty ludnościowe, migracje, zniszczenia i zmianę układu sił międzynarodowych.",
    options: null,
    items: [
      "Masowe przesiedlenia ludności",
      "Miliony ofiar śmiertelnych",
      "Wzrost znaczenia USA i ZSRR",
      "Osłabienie pozycji Francji i Wielkiej Brytanii",
      "Ruiny wielu miast",
      "Zniszczenie gospodarek państw"
    ],
    categories: [
      "Ludnościowe",
      "Polityczne",
      "Gospodarcze i materialne"
    ],
    image: "r06_mapa_powojennej_polski.jpg",
    answer: {
      "Ludnościowe": [
        "Masowe przesiedlenia ludności",
        "Miliony ofiar śmiertelnych"
      ],
      Polityczne: [
        "Wzrost znaczenia USA i ZSRR",
        "Osłabienie pozycji Francji i Wielkiej Brytanii"
      ],
      "Gospodarcze i materialne": [
        "Ruiny wielu miast",
        "Zniszczenie gospodarek państw"
      ]
    }
  },
  {
    id: "R06_KON_10",
    section: "Konferencje i skutki wojny",
    type: "sequence",
    prompt: "Ułóż wydarzenia z lat 1943-1945 w kolejności chronologicznej.",
    explanation: "Teheran odbył się w 1943 r., Jałta w lutym 1945 r., III Rzesza skapitulowała w maju, Poczdam obradował latem, a Japonia skapitulowała we wrześniu 1945 r.",
    options: null,
    items: [
      "Kapitulacja Japonii",
      "Konferencja w Jałcie",
      "Konferencja w Poczdamie",
      "Konferencja w Teheranie",
      "Kapitulacja III Rzeszy"
    ],
    answer: [
      "Konferencja w Teheranie",
      "Konferencja w Jałcie",
      "Kapitulacja III Rzeszy",
      "Konferencja w Poczdamie",
      "Kapitulacja Japonii"
    ]
  },
  {
    id: "R06_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu polskich żołnierzy przez siedem dni broniło Westerplatte we wrześniu 1939 roku?",
    explanation: "Westerplatte broniła załoga licząca 182 żołnierzy, dowodzona przez mjr. Henryka Sucharskiego.",
    options: [
      "150",
      "182",
      "360",
      "500",
      "700",
      "1000"
    ],
    image: "r06_westerplatte_1939.jpg",
    answer: 1
  },
  {
    id: "R06_HARD_02",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile samolotów miała Polska na początku kampanii wrześniowej w 1939 roku?",
    explanation: "Na początku kampanii wrześniowej siły polskie liczyły około 400 samolotów, a niemieckie około 1300.",
    options: [
      "300",
      "400",
      "800",
      "1000",
      "1300",
      "2700"
    ],
    answer: 1
  },
  {
    id: "R06_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które miejscowości polskie odzyskały wojska polskie w trakcie bitwy nad Bzurą?",
    explanation: "Opis bitwy nad Bzurą wymienia odebranie Niemcom Łęczycy, Piątku i Łowicza.",
    options: [
      "Łęczyca",
      "Piątek",
      "Łowicz",
      "Dunkierka",
      "Narwik"
    ],
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R06_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Dowódcą polskiego odcinka obrony pod Wizną był kpt. __________.",
    explanation: "Kpt. Władysław Raginis wraz z około 360 żołnierzami stawiał opór znacznie liczniejszym oddziałom niemieckim.",
    options: null,
    altAnswers: [
      [
        "Władysław Raginis",
        "Władysława Raginisa",
        "Raginis"
      ]
    ],
    image: "r06_obrona_wizny.jpg",
    answer: [
      "Władysław Raginis"
    ]
  },
  {
    id: "R06_HARD_05",
    section: "Super trudne",
    type: "sequence",
    prompt: "Uszereguj starcia i wydarzenia wojenne według dat.",
    explanation: "Francja skapitulowała w czerwcu 1940 r., bitwa o Anglię zaczęła się w sierpniu 1940 r., Barbarossa w czerwcu 1941 r., Pearl Harbor w grudniu 1941 r., Midway w czerwcu 1942 r., a Kursk w lecie 1943 r.",
    options: null,
    items: [
      "Bitwa pancerna pod Kurskiem",
      "Rozpoczęcie bitwy o Anglię",
      "Kapitulacja Francji",
      "Bitwa o Midway",
      "Japoński atak na Pearl Harbor",
      "Rozpoczęcie operacji Barbarossa"
    ],
    answer: [
      "Kapitulacja Francji",
      "Rozpoczęcie bitwy o Anglię",
      "Rozpoczęcie operacji Barbarossa",
      "Japoński atak na Pearl Harbor",
      "Bitwa o Midway",
      "Bitwa pancerna pod Kurskiem"
    ]
  },
  {
    id: "R06_HARD_06",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz dowódców wojskowych z wydarzeniami, w których uczestniczyli.",
    explanation: "Szyszko-Bohusz dowodził polską brygadą pod Narwikiem, Żukow obroną Moskwy, Rommel Afrika Korps, a Kleeberg ostatnią bitwą kampanii polskiej.",
    options: null,
    left: [
      "Zygmunt Szyszko-Bohusz",
      "Georgij Żukow",
      "Erwin Rommel",
      "Franciszek Kleeberg"
    ],
    right: [
      "Obrona Moskwy",
      "Bitwa pod Kockiem",
      "Walki o Narwik",
      "Działania Afrika Korps"
    ],
    answer: {
      "Zygmunt Szyszko-Bohusz": "Walki o Narwik",
      "Georgij Żukow": "Obrona Moskwy",
      "Erwin Rommel": "Działania Afrika Korps",
      "Franciszek Kleeberg": "Bitwa pod Kockiem"
    }
  },
  {
    id: "R06_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W którym roku alianci odnieśli zasadnicze zwycięstwo w bitwie o Atlantyk?",
    explanation: "Wskutek rozwoju techniki wykrywania i zwalczania U-Bootów alianci zasadniczo wygrali bitwę o Atlantyk w 1943 r.",
    options: [
      "1939",
      "1940",
      "1941",
      "1942",
      "1943",
      "1945"
    ],
    answer: 4
  },
  {
    id: "R06_HARD_08",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które założenia powojennego porządku omawiano podczas konferencji w Teheranie?",
    explanation: "W Teheranie omawiano przyszłe granice Polski i organizację bezpieczeństwa; strefy okupacyjne Niemiec i linię Odry-Nysy ostatecznie ustalono w Poczdamie.",
    options: [
      "Uznanie linii Curzona za przyszłą granicę wschodnią Polski",
      "Wstępne ustalenia o przesunięciu granicy zachodniej Polski ku Odrze",
      "Postulat powołania organizacji międzynarodowej strzegącej pokoju",
      "Decyzja o podziale Niemiec na cztery strefy okupacyjne",
      "Wyznaczenie Nysy Łużyckiej jako ostatecznej granicy zachodniej Polski"
    ],
    image: "r06_konferencja_wielkiej_trojki.jpg",
    answer: [
      0,
      1,
      2
    ]
  },
  {
    id: "R06_HARD_09",
    section: "Super trudne",
    type: "true_false",
    prompt: "W konferencji w Teheranie uczestniczył prezydent Stanów Zjednoczonych Harry Truman.",
    explanation: "W Teheranie USA reprezentował Franklin D. Roosevelt. Harry Truman wziął udział w konferencji w Poczdamie.",
    options: null,
    answer: false
  },
  {
    id: "R06_HARD_10",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Założycielką Rady Pomocy Żydom Żegota była __________.",
    explanation: "Zofia Kossak-Szczucka była pisarką i założycielką Żegoty, organizacji niosącej pomoc prześladowanym Żydom.",
    options: null,
    altAnswers: [
      [
        "Zofia Kossak-Szczucka",
        "Zofię Kossak-Szczucką",
        "Kossak-Szczucka"
      ]
    ],
    image: "r06_getto_i_przesladowania.jpg",
    answer: [
      "Zofia Kossak-Szczucka"
    ]
  },
  {
    id: "R06_HARD_11",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż miejsce niebędące kierunkiem deportacji Polaków w głąb ZSRR: Syberia, środkowy Ural, Azja Środkowa, Normandia.",
    explanation: "Sowieci wywozili Polaków na Syberię, środkowy Ural i do Azji Środkowej. Normandia leży we Francji.",
    options: null,
    image: "r06_deportacja_sowiecka.jpg",
    answer: "Normandia"
  },
  {
    id: "R06_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jest rok 1944. Polska jednostka powietrznodesantowa ma wesprzeć aliantów w operacji pod Arnhem, aby przełamać niemiecką linię obrony na Renie. Który generał dowodzi tą brygadą?",
    explanation: "Polska Brygada Spadochronowa dowodzona przez gen. Stanisława Sosabowskiego wzięła udział w operacji pod Arnhem.",
    options: [
      "Stanisław Maczek",
      "Zygmunt Szyszko-Bohusz",
      "Stanisław Sosabowski",
      "Stanisław Kopański",
      "Władysław Anders",
      "Zygmunt Berling"
    ],
    answer: 2
  },
  {
    id: "R06_HARD_13",
    section: "Super trudne",
    type: "match",
    prompt: "Dopasuj organizacje konspiracyjne i cywilne do związanych z nimi osób.",
    explanation: "Cyryl Ratajski został delegatem rządu, Fieldorf dowodził Kedywem, Sendlerowa referatem dziecięcym Żegoty, a Żymierski Armią Ludową.",
    options: null,
    left: [
      "Delegat Rządu na Kraj (1940 r.)",
      "Kedyw Armii Krajowej",
      "Referat dziecięcy Żegoty",
      "Armia Ludowa (1944 r.)"
    ],
    right: [
      "Michał Żymierski",
      "Irena Sendlerowa",
      "Cyryl Ratajski",
      "August Emil Fieldorf"
    ],
    answer: {
      "Delegat Rządu na Kraj (1940 r.)": "Cyryl Ratajski",
      "Kedyw Armii Krajowej": "August Emil Fieldorf",
      "Referat dziecięcy Żegoty": "Irena Sendlerowa",
      "Armia Ludowa (1944 r.)": "Michał Żymierski"
    }
  },
  {
    id: "R06_HARD_14",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy tworzenia władz i struktur podziemia od 1939 do 1944 r.",
    explanation: "ZWZ powstał w listopadzie 1939 r., PKP w lutym 1940 r., AK w lutym 1942 r., Kierownictwo Walki Podziemnej w lipcu 1943 r., a RJN w styczniu 1944 r.",
    options: null,
    items: [
      "Powstanie Rady Jedności Narodowej",
      "Powstanie Politycznego Komitetu Porozumiewawczego",
      "Powstanie Kierownictwa Walki Podziemnej",
      "Powołanie Związku Walki Zbrojnej",
      "Powołanie Armii Krajowej"
    ],
    answer: [
      "Powołanie Związku Walki Zbrojnej",
      "Powstanie Politycznego Komitetu Porozumiewawczego",
      "Powołanie Armii Krajowej",
      "Powstanie Kierownictwa Walki Podziemnej",
      "Powstanie Rady Jedności Narodowej"
    ]
  },
  {
    id: "R06_HARD_15",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki organ utworzono w lipcu 1943 r. przez połączenie Kierownictwa Walki Cywilnej i Kierownictwa Walki Konspiracyjnej?",
    explanation: "W lipcu 1943 r. połączono struktury walki cywilnej i konspiracyjnej, tworząc Kierownictwo Walki Podziemnej.",
    options: [
      "Kierownictwo Walki Podziemnej",
      "Krajową Radę Narodową",
      "Polityczny Komitet Porozumiewawczy",
      "Radę Jedności Narodowej",
      "Związek Walki Zbrojnej",
      "Służbę Zwycięstwu Polski"
    ],
    answer: 0
  }
];

const KID_PROMPTS = {
  R06_WRZ_01: "Jak nazywał się plan Niemiec, według którego zaatakowano Polskę w 1939 r.?",
  R06_FRN_03: "Które z tych krajów Niemcy zaatakowały 10 maja 1940 r., mimo że miały być neutralne?",
  R06_OKU_03: "Zaznacz, co Niemcy robili Polakom w czasie okupacji.",
  R06_POD_03: "Zaznacz przykłady małego sabotażu podczas okupacji.",
  R06_POL_03: "Co ustalono w układzie Sikorski-Majski w 1941 r.?",
  R06_KON_09: "Podziel skutki wojny na trzy rodzaje."
};

const chapter = {
  id: "r06",
  number: 6,
  title: "II wojna światowa - kampania, okupacja i sprawa polska",
  icon: "🌍",
  sectionOrder: [
    "Kampania wrześniowa 1939",
    "Fronty II wojny światowej",
    "Okupacja i zbrodnie wojenne",
    "Polskie Państwo Podziemne",
    "Rząd na uchodźstwie i Polacy na frontach",
    "Konferencje i skutki wojny"
  ],
  sectionIcons: {
    "Kampania wrześniowa 1939": "🛡️",
    "Fronty II wojny światowej": "🌍",
    "Okupacja i zbrodnie wojenne": "🕯️",
    "Polskie Państwo Podziemne": "✊",
    "Rząd na uchodźstwie i Polacy na frontach": "🇵🇱",
    "Konferencje i skutki wojny": "🕊️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
