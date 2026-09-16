// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NAP  = Napaść na Polskę
//   POD  = Podbój Europy przez Hitlera i Stalina
//   ZSR  = Wojna III Rzeszy z ZSRS
//   OKU  = Polityka okupacyjna III Rzeszy
//   POZ  = Wojna poza Europą
//   DRO  = Droga do zwycięstwa
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_NAP_01",
    "section": "Napaść na Polskę",
    "type": "single_choice",
    "prompt": "Które wydarzenie rozpoczęło II wojnę światową?",
    "options": [
      "Atak Niemiec na Polskę 1 września 1939 r.",
      "Atak ZSRS na Finlandię 30 listopada 1939 r.",
      "Atak Niemiec na Francję 10 maja 1940 r.",
      "Atak Japonii na Pearl Harbor 7 grudnia 1941 r.",
      "Atak Niemiec na ZSRS 22 czerwca 1941 r.",
      "Lądowanie aliantów w Normandii 6 czerwca 1944 r."
    ],
    "answer": 0,
    "explanation": "Niemcy zaatakowały Polskę 1 września 1939 r.; tę datę uznaje się za początek II wojny światowej.",
    "image": "r01_westerplatte.jpg"
  },
  {
    "id": "R01_NAP_02",
    "section": "Napaść na Polskę",
    "type": "true_false",
    "prompt": "Armia Czerwona wkroczyła do Polski 17 września 1939 r.",
    "options": null,
    "answer": true,
    "explanation": "17 września 1939 r. ZSRS zaatakował Rzeczpospolitą od wschodu."
  },
  {
    "id": "R01_NAP_03",
    "section": "Napaść na Polskę",
    "type": "multi_select",
    "prompt": "Zaznacz założenia wojny błyskawicznej stosowanej przez Niemców.",
    "options": [
      "Uderzenie sił pancernych wspieranych przez lotnictwo",
      "Atak na wybranych odcinkach frontu",
      "Okrążenie i zniszczenie oddziałów przeciwnika",
      "Wkroczenie piechoty w powstałe wyłomy",
      "Prowadzenie wyłącznie wojny pozycyjnej",
      "Unikanie użycia lotnictwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Blitzkrieg zakładał skoncentrowane uderzenia, przełamanie obrony przez siły pancerne i lotnictwo, szybkie wejście piechoty oraz okrążanie przeciwnika."
  },
  {
    "id": "R01_NAP_04",
    "section": "Napaść na Polskę",
    "type": "fill_in",
    "prompt": "Niemiecki pancernik __________ rozpoczął ostrzał Westerplatte o godz. 4.45.",
    "options": null,
    "answer": [
      "Schleswig-Holstein"
    ],
    "altAnswers": [
      [
        "Schleswig-Holstein",
        "Schleswig Holstein"
      ]
    ],
    "explanation": "O godz. 4.45 pancernik Schleswig-Holstein rozpoczął ostrzał polskiej placówki na Westerplatte.",
    "image": "r01_westerplatte.jpg"
  },
  {
    "id": "R01_NAP_05",
    "section": "Napaść na Polskę",
    "type": "match",
    "prompt": "Połącz wydarzenie kampanii wrześniowej z datą.",
    "options": null,
    "left": [
      "Atak Niemiec na Polskę",
      "Wkroczenie Armii Czerwonej",
      "Kapitulacja Warszawy",
      "Kapitulacja Helu"
    ],
    "right": [
      "1 września 1939 r.",
      "17 września 1939 r.",
      "28 września 1939 r.",
      "2 października 1939 r."
    ],
    "answer": {
      "Atak Niemiec na Polskę": "1 września 1939 r.",
      "Wkroczenie Armii Czerwonej": "17 września 1939 r.",
      "Kapitulacja Warszawy": "28 września 1939 r.",
      "Kapitulacja Helu": "2 października 1939 r."
    },
    "explanation": "Najważniejsze daty kampanii to 1 i 17 września, kapitulacja Warszawy 28 września oraz Helu 2 października."
  },
  {
    "id": "R01_NAP_06",
    "section": "Napaść na Polskę",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia kampanii polskiej w porządku chronologicznym.",
    "options": null,
    "items": [
      "Kapitulacja Warszawy",
      "Atak Niemiec na Polskę",
      "Wkroczenie Armii Czerwonej",
      "Kapitulacja Helu"
    ],
    "answer": [
      "Atak Niemiec na Polskę",
      "Wkroczenie Armii Czerwonej",
      "Kapitulacja Warszawy",
      "Kapitulacja Helu"
    ],
    "explanation": "Kolejność wyznaczają daty: 1 IX, 17 IX, 28 IX i 2 X 1939 r."
  },
  {
    "id": "R01_NAP_07",
    "section": "Napaść na Polskę",
    "type": "scenario",
    "prompt": "Jest wrzesień 1939 r. Niewielki polski oddział przez kilka dni powstrzymuje wielokrotnie liczniejsze siły niemieckie. Dowodzi nim kapitan Władysław Raginis. O jakiej obronie mowa?",
    "options": [
      "Wizny",
      "Westerplatte",
      "Helu",
      "Warszawy",
      "Poczty Polskiej w Gdańsku",
      "Mokrej"
    ],
    "answer": 0,
    "explanation": "Kapitan Władysław Raginis dowodził obroną Wizny w dniach 7-10 września 1939 r.; walki te nazwano później polskimi Termopilami."
  },
  {
    "id": "R01_NAP_08",
    "section": "Napaść na Polskę",
    "type": "riddle",
    "prompt": "Jak nazywała się największa polska operacja zaczepna kampanii wrześniowej, toczona 9-22 września 1939 r.?",
    "options": null,
    "answer": "bitwa nad Bzurą",
    "altAnswers": [
      "bitwa nad Bzurą",
      "Bzura",
      "bitwa nad Bzura"
    ],
    "explanation": "Armie Poznań i Pomorze podjęły nad Bzurą próbę przebicia się w kierunku Warszawy."
  },
  {
    "id": "R01_NAP_09",
    "section": "Napaść na Polskę",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych miejsc walk kampanii wrześniowej: Westerplatte, Wizna, Bzura, Midway.",
    "options": null,
    "answer": "Midway",
    "explanation": "Westerplatte, Wizna i Bzura wiążą się z kampanią polską w 1939 r.; Midway było miejscem bitwy na Pacyfiku w 1942 r."
  },
  {
    "id": "R01_POD_01",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "single_choice",
    "prompt": "Które państwo zachowało niepodległość po wojnie zimowej z ZSRS?",
    "options": [
      "Finlandia",
      "Estonia",
      "Łotwa",
      "Litwa",
      "Francja",
      "Norwegia"
    ],
    "answer": 0,
    "explanation": "Finlandia utraciła na rzecz ZSRS około 10% terytorium, ale zachowała niepodległość."
  },
  {
    "id": "R01_POD_02",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "true_false",
    "prompt": "Francja skapitulowała 22 czerwca 1940 r.",
    "options": null,
    "answer": true,
    "explanation": "Agresja niemiecka na zachodzie rozpoczęła się 10 maja 1940 r., a Francja skapitulowała 22 czerwca."
  },
  {
    "id": "R01_POD_03",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "multi_select",
    "prompt": "Zaznacz państwa zaatakowane przez Niemcy 10 maja 1940 r.",
    "options": [
      "Holandia",
      "Belgia",
      "Luksemburg",
      "Francja",
      "Szwecja",
      "Szwajcaria"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "10 maja 1940 r. Niemcy zaatakowały Holandię, Belgię, Luksemburg i Francję."
  },
  {
    "id": "R01_POD_04",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "fill_in",
    "prompt": "Państwo utworzone na południu Francji po klęsce w 1940 r. nazywano państwem __________.",
    "options": null,
    "answer": [
      "Vichy"
    ],
    "altAnswers": [
      [
        "Vichy",
        "vichy"
      ]
    ],
    "explanation": "Po upadku Francji na południu powstało państwo Vichy, którego władze współpracowały z III Rzeszą."
  },
  {
    "id": "R01_POD_05",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "match",
    "prompt": "Połącz wydarzenie z właściwym okresem lub datą.",
    "options": null,
    "left": [
      "Początek wojny zimowej",
      "Atak Niemiec na Francję",
      "Bitwa o Anglię",
      "Kapitulacja Francji"
    ],
    "right": [
      "30 listopada 1939 r.",
      "10 maja 1940 r.",
      "lipiec-październik 1940 r.",
      "22 czerwca 1940 r."
    ],
    "answer": {
      "Początek wojny zimowej": "30 listopada 1939 r.",
      "Atak Niemiec na Francję": "10 maja 1940 r.",
      "Bitwa o Anglię": "lipiec-październik 1940 r.",
      "Kapitulacja Francji": "22 czerwca 1940 r."
    },
    "explanation": "Te daty pokazują szybkie rozszerzanie się wojny w Europie w latach 1939-1940."
  },
  {
    "id": "R01_POD_06",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Kapitulacja Francji",
      "Początek wojny zimowej",
      "Bitwa o Anglię",
      "Atak Niemiec na Danię i Norwegię"
    ],
    "answer": [
      "Początek wojny zimowej",
      "Atak Niemiec na Danię i Norwegię",
      "Kapitulacja Francji",
      "Bitwa o Anglię"
    ],
    "explanation": "Wojna zimowa rozpoczęła się w listopadzie 1939 r., atak na Danię i Norwegię nastąpił w kwietniu 1940 r., Francja skapitulowała w czerwcu, a bitwa o Anglię trwała od lipca do października."
  },
  {
    "id": "R01_POD_07",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "scenario",
    "prompt": "Brytyjskie i alianckie oddziały są okrążone we Francji. Z portu i plaż setki jednostek wojskowych i cywilnych przewożą ponad 330 tys. żołnierzy do Wielkiej Brytanii. O jakie wydarzenie chodzi?",
    "options": [
      "Ewakuację Dunkierki",
      "Bitwę o Anglię",
      "Obronę Narwiku",
      "Wojnę zimową",
      "Atak na Pearl Harbor",
      "Lądowanie w Normandii"
    ],
    "answer": 0,
    "explanation": "Od 27 maja do 4 czerwca 1940 r. z Dunkierki ewakuowano do Wielkiej Brytanii ponad 330 tys. żołnierzy alianckich.",
    "image": "r01_dunkierka.jpg"
  },
  {
    "id": "R01_POD_08",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "riddle",
    "prompt": "Jak nazywał się brytyjski premier, który w maju 1940 r. objął urząd i organizował obronę Wysp Brytyjskich?",
    "options": null,
    "answer": "Winston Churchill",
    "altAnswers": [
      "Winston Churchill",
      "Churchill"
    ],
    "explanation": "Winston Churchill został premierem Wielkiej Brytanii w maju 1940 r. i odrzucał możliwość porozumienia z Hitlerem.",
    "image": "r01_bitwa_o_anglie.jpg"
  },
  {
    "id": "R01_POD_09",
    "section": "Podbój Europy przez Hitlera i Stalina",
    "type": "sort",
    "prompt": "Przyporządkuj państwa do właściwej grupy z 1940 r.",
    "options": null,
    "items": [
      "Finlandia",
      "Litwa",
      "Łotwa",
      "Estonia",
      "Francja",
      "Wielka Brytania"
    ],
    "categories": [
      "zachowało niepodległość po wojnie z ZSRS",
      "zostało włączone do ZSRS",
      "skapitulowało przed Niemcami",
      "odparło niemiecką ofensywę powietrzną"
    ],
    "answer": {
      "zachowało niepodległość po wojnie z ZSRS": [
        "Finlandia"
      ],
      "zostało włączone do ZSRS": [
        "Litwa",
        "Łotwa",
        "Estonia"
      ],
      "skapitulowało przed Niemcami": [
        "Francja"
      ],
      "odparło niemiecką ofensywę powietrzną": [
        "Wielka Brytania"
      ]
    },
    "explanation": "Finlandia zachowała niepodległość, państwa bałtyckie zostały zaanektowane przez ZSRS, Francja skapitulowała, a Wielka Brytania obroniła się w bitwie powietrznej."
  },
  {
    "id": "R01_ZSR_01",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "single_choice",
    "prompt": "Jaki kryptonim nosił niemiecki plan ataku na ZSRS?",
    "options": [
      "Barbarossa",
      "Seelöwe",
      "Overlord",
      "Market Garden",
      "Torch",
      "Fall Gelb"
    ],
    "answer": 0,
    "explanation": "Atak Niemiec na ZSRS 22 czerwca 1941 r. przeprowadzono według planu Barbarossa."
  },
  {
    "id": "R01_ZSR_02",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "true_false",
    "prompt": "Atak Niemiec na ZSRS rozpoczął się 22 czerwca 1941 r.",
    "options": null,
    "answer": true,
    "explanation": "22 czerwca 1941 r. III Rzesza zaatakowała Związek Sowiecki."
  },
  {
    "id": "R01_ZSR_03",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które pogorszyły sytuację wojsk niemieckich podczas ofensywy na Moskwę.",
    "options": [
      "Jesienne błoto",
      "Sroga zima",
      "Brak przygotowania do warunków zimowych",
      "Grzęźnięcie ciężkiego sprzętu",
      "Przewaga niemieckiej floty na Atlantyku",
      "Ewakuacja Dunkierki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Jesienne błoto i sroga zima utrudniały działania, a niemieckie wojska nie były odpowiednio przygotowane do takich warunków.",
    "image": "r01_front_wschodni_zima.jpg"
  },
  {
    "id": "R01_ZSR_04",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "fill_in",
    "prompt": "W ZSRS wojnę z III Rzeszą nazywano Wielką Wojną __________.",
    "options": null,
    "answer": [
      "Ojczyźnianą"
    ],
    "altAnswers": [
      [
        "Ojczyźnianą",
        "Ojczyzniana",
        "Ojczyźniana"
      ]
    ],
    "explanation": "Określenie Wielka Wojna Ojczyźniana miało wzbudzać patriotyczne nastroje w społeczeństwie sowieckim."
  },
  {
    "id": "R01_ZSR_05",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "match",
    "prompt": "Połącz bitwę z okresem jej trwania.",
    "options": null,
    "left": [
      "Blokada Leningradu",
      "Bitwa o Stalingrad",
      "Bitwa na Łuku Kurskim"
    ],
    "right": [
      "wrzesień 1941-styczeń 1944",
      "sierpień 1942-luty 1943",
      "lipiec-sierpień 1943"
    ],
    "answer": {
      "Blokada Leningradu": "wrzesień 1941-styczeń 1944",
      "Bitwa o Stalingrad": "sierpień 1942-luty 1943",
      "Bitwa na Łuku Kurskim": "lipiec-sierpień 1943"
    },
    "explanation": "Walki pod Stalingradem i na Łuku Kurskim stały się przełomowymi porażkami III Rzeszy na froncie wschodnim."
  },
  {
    "id": "R01_ZSR_06",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia frontu wschodniego w porządku chronologicznym.",
    "options": null,
    "items": [
      "Bitwa na Łuku Kurskim",
      "Atak Niemiec na ZSRS",
      "Bitwa o Stalingrad",
      "Niemcy podchodzą pod Moskwę"
    ],
    "answer": [
      "Atak Niemiec na ZSRS",
      "Niemcy podchodzą pod Moskwę",
      "Bitwa o Stalingrad",
      "Bitwa na Łuku Kurskim"
    ],
    "explanation": "Atak rozpoczął się w czerwcu 1941 r., pod Moskwę Niemcy podeszli jesienią 1941 r., Stalingrad przypadł na 1942-1943, a Kursk na lato 1943 r."
  },
  {
    "id": "R01_ZSR_07",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "scenario",
    "prompt": "Wielka bitwa toczy się miesiącami w zabudowie miejskiej i zakładach przemysłowych. Sowieci przechodzą do kontrataku i okrążają wojska niemieckie. O jaką bitwę chodzi?",
    "options": [
      "O Stalingrad",
      "O Moskwę",
      "Na Łuku Kurskim",
      "O Leningrad",
      "O Narwik",
      "O El Alamein"
    ],
    "answer": 0,
    "explanation": "Bitwa o Stalingrad należała do najcięższych i najkrwawszych walk II wojny światowej; zakończyła się klęską wojsk niemieckich."
  },
  {
    "id": "R01_ZSR_08",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "riddle",
    "prompt": "Jak nazywał się sowiecki czołg o pochyłym pancerzu i szerokich gąsienicach, uznawany za bardzo skuteczny na froncie wschodnim?",
    "options": null,
    "answer": "T-34",
    "altAnswers": [
      "T-34",
      "T34",
      "t-34"
    ],
    "explanation": "T-34 miał pochyły pancerz zmniejszający ryzyko przebicia oraz szerokie gąsienice ułatwiające jazdę po grząskim terenie.",
    "image": "r01_czolg_t34.jpg"
  },
  {
    "id": "R01_ZSR_09",
    "section": "Wojna III Rzeszy z ZSRS",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych wydarzeń frontu wschodniego: Stalingrad, Łuk Kurski, Leningrad, Dunkierka.",
    "options": null,
    "answer": "Dunkierka",
    "explanation": "Stalingrad, Łuk Kurski i Leningrad były związane z walkami Niemiec i ZSRS; Dunkierka leżała na froncie zachodnim."
  },
  {
    "id": "R01_OKU_01",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "single_choice",
    "prompt": "Jak nazywa się zagłada europejskich Żydów dokonana przez Niemców podczas II wojny światowej?",
    "options": [
      "Holokaust",
      "Blitzkrieg",
      "Kolaboracja",
      "Izolacjonizm",
      "Desant",
      "Internowanie"
    ],
    "answer": 0,
    "explanation": "Zagładę europejskich Żydów określa się jako Holokaust, a w tradycji żydowskiej jako Szoa.",
    "image": "r01_oboz_zaglady.jpg"
  },
  {
    "id": "R01_OKU_02",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "true_false",
    "prompt": "Niemiecka polityka okupacyjna była łagodniejsza w Europie Zachodniej niż w Europie Środkowo-Wschodniej.",
    "options": null,
    "answer": true,
    "explanation": "Niemcy traktowali Europę Środkowo-Wschodnią jako przyszłą przestrzeń życiową i prowadzili tam szczególnie brutalną politykę."
  },
  {
    "id": "R01_OKU_03",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "multi_select",
    "prompt": "Zaznacz formy prześladowania Żydów na terenach okupowanych.",
    "options": [
      "Nakaz noszenia oznaczeń z gwiazdą Dawida",
      "Zamykanie w gettach",
      "Masowe egzekucje",
      "Deportacje do obozów zagłady",
      "Przyznawanie pełnych praw politycznych",
      "Swobodne opuszczanie terenów okupowanych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Żydzi byli oznaczani, izolowani w gettach, mordowani w masowych egzekucjach i deportowani do obozów zagłady.",
    "image": "r01_getto.jpg"
  },
  {
    "id": "R01_OKU_04",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "fill_in",
    "prompt": "Decyzję o planie zagłady Żydów określano jako ostateczne rozwiązanie kwestii __________.",
    "options": null,
    "answer": [
      "żydowskiej"
    ],
    "altAnswers": [
      [
        "żydowskiej",
        "zydowskiej"
      ]
    ],
    "explanation": "Władze III Rzeszy przyjęły plan określany jako ostateczne rozwiązanie kwestii żydowskiej."
  },
  {
    "id": "R01_OKU_05",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "options": null,
    "left": [
      "getto",
      "kolaboracja",
      "ruch oporu",
      "Holokaust"
    ],
    "right": [
      "wydzielona dzielnica przymusowego zamieszkania Żydów",
      "współpraca z okupantem",
      "działalność przeciw okupantowi",
      "zagłada europejskich Żydów"
    ],
    "answer": {
      "getto": "wydzielona dzielnica przymusowego zamieszkania Żydów",
      "kolaboracja": "współpraca z okupantem",
      "ruch oporu": "działalność przeciw okupantowi",
      "Holokaust": "zagłada europejskich Żydów"
    },
    "explanation": "Pojęcia te opisują różne elementy rzeczywistości okupowanej Europy."
  },
  {
    "id": "R01_OKU_06",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "sequence",
    "prompt": "Ułóż etapy nasilania prześladowań Żydów od izolacji do masowej zagłady.",
    "options": null,
    "items": [
      "Deportacje do obozów zagłady",
      "Nakaz noszenia oznaczeń",
      "Masowe mordy",
      "Zamykanie w gettach"
    ],
    "answer": [
      "Nakaz noszenia oznaczeń",
      "Zamykanie w gettach",
      "Masowe mordy",
      "Deportacje do obozów zagłady"
    ],
    "explanation": "Prześladowania obejmowały oznaczanie i izolowanie ludności żydowskiej, a następnie masowe mordy i deportacje do obozów zagłady."
  },
  {
    "id": "R01_OKU_07",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "scenario",
    "prompt": "Mieszkaniec okupowanego kraju ukrywa prześladowaną żydowską rodzinę i dostarcza jej żywność, ryzykując własnym życiem. Jaką postawę wobec Holokaustu przedstawia ta sytuacja?",
    "options": [
      "Pomoc ofiarom",
      "Kolaborację z okupantem",
      "Obojętność",
      "Służbę w armii niemieckiej",
      "Udział w deportacjach",
      "Donosicielstwo"
    ],
    "answer": 0,
    "explanation": "W okupowanej Europie część ludzi narażała życie, pomagając Żydom. Przykładem była działalność Ireny Sendlerowej i organizacji Żegota."
  },
  {
    "id": "R01_OKU_08",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "riddle",
    "prompt": "Jak nazywała się organizacja pomagająca Żydom, z którą związana była Irena Sendlerowa?",
    "options": null,
    "answer": "Żegota",
    "altAnswers": [
      "Żegota",
      "Zegota",
      "Rada Pomocy Żydom Żegota"
    ],
    "explanation": "Żegota była organizacją niosącą pomoc Żydom; w działalność pomocową angażowała się m.in. Irena Sendlerowa."
  },
  {
    "id": "R01_OKU_09",
    "section": "Polityka okupacyjna III Rzeszy",
    "type": "sort",
    "prompt": "Przyporządkuj działania do postaw ludności wobec niemieckiej okupacji.",
    "options": null,
    "items": [
      "ukrywanie Żydów",
      "walka partyzancka",
      "współpraca z okupantem",
      "wydawanie ukrywających się ludzi"
    ],
    "categories": [
      "opór i pomoc",
      "kolaboracja"
    ],
    "answer": {
      "opór i pomoc": [
        "ukrywanie Żydów",
        "walka partyzancka"
      ],
      "kolaboracja": [
        "współpraca z okupantem",
        "wydawanie ukrywających się ludzi"
      ]
    },
    "explanation": "Postawy wobec okupacji były zróżnicowane: od oporu i pomocy prześladowanym po współpracę z Niemcami."
  },
  {
    "id": "R01_POZ_01",
    "section": "Wojna poza Europą",
    "type": "single_choice",
    "prompt": "Które wydarzenie bezpośrednio spowodowało przystąpienie Stanów Zjednoczonych do II wojny światowej?",
    "options": [
      "Atak Japonii na Pearl Harbor",
      "Bitwa o Midway",
      "Atak Niemiec na ZSRS",
      "Upadek Francji",
      "Bitwa o Anglię",
      "Wojna zimowa"
    ],
    "answer": 0,
    "explanation": "7 grudnia 1941 r. Japonia zaatakowała bazę Pearl Harbor na Hawajach, a w konsekwencji USA przystąpiły do wojny.",
    "image": "r01_pearl_harbor.jpg"
  },
  {
    "id": "R01_POZ_02",
    "section": "Wojna poza Europą",
    "type": "true_false",
    "prompt": "Bitwa o Atlantyk dotyczyła m.in. ochrony konwojów z zaopatrzeniem płynących z Ameryki Północnej do Europy.",
    "options": null,
    "answer": true,
    "explanation": "Niemieckie okręty podwodne atakowały konwoje przewożące zaopatrzenie m.in. dla Wielkiej Brytanii i ZSRS.",
    "image": "r01_uboat_konwoj.jpg"
  },
  {
    "id": "R01_POZ_03",
    "section": "Wojna poza Europą",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia związane z wojną na Pacyfiku.",
    "options": [
      "Pearl Harbor",
      "Midway",
      "Guadalcanal",
      "Iwo Jima",
      "El Alamein",
      "Monte Cassino"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pearl Harbor, Midway, Guadalcanal i Iwo Jima były związane z wojną na Pacyfiku; El Alamein leży w Afryce, a Monte Cassino we Włoszech."
  },
  {
    "id": "R01_POZ_04",
    "section": "Wojna poza Europą",
    "type": "fill_in",
    "prompt": "W czerwcu 1942 r. USA przejęły inicjatywę na Pacyfiku po bitwie o wyspy __________.",
    "options": null,
    "answer": [
      "Midway"
    ],
    "altAnswers": [
      [
        "Midway",
        "midway"
      ]
    ],
    "explanation": "Zwycięstwo pod Midway w czerwcu 1942 r. zmusiło Japonię do przejścia do działań defensywnych."
  },
  {
    "id": "R01_POZ_05",
    "section": "Wojna poza Europą",
    "type": "match",
    "prompt": "Połącz wydarzenie z miejscem działań.",
    "options": null,
    "left": [
      "Bitwa o El Alamein",
      "Atak na Pearl Harbor",
      "Bitwa o Midway",
      "Bitwa o Atlantyk"
    ],
    "right": [
      "Afryka Północna",
      "Hawaje",
      "Pacyfik",
      "szlaki między Ameryką Północną a Europą"
    ],
    "answer": {
      "Bitwa o El Alamein": "Afryka Północna",
      "Atak na Pearl Harbor": "Hawaje",
      "Bitwa o Midway": "Pacyfik",
      "Bitwa o Atlantyk": "szlaki między Ameryką Północną a Europą"
    },
    "explanation": "Działania wojenne poza Europą obejmowały Afrykę Północną, Atlantyk i rozległy obszar Pacyfiku."
  },
  {
    "id": "R01_POZ_06",
    "section": "Wojna poza Europą",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Bitwa o Guadalcanal",
      "Atak na Pearl Harbor",
      "Bitwa o Midway",
      "Zakończenie walk w Afryce Północnej"
    ],
    "answer": [
      "Atak na Pearl Harbor",
      "Bitwa o Midway",
      "Bitwa o Guadalcanal",
      "Zakończenie walk w Afryce Północnej"
    ],
    "explanation": "Pearl Harbor miało miejsce w grudniu 1941 r., Midway w czerwcu 1942 r., Guadalcanal od sierpnia 1942 r. do lutego 1943 r., a walki w Afryce zakończyły się w maju 1943 r."
  },
  {
    "id": "R01_POZ_07",
    "section": "Wojna poza Europą",
    "type": "scenario",
    "prompt": "Amerykanie rozszyfrowali meldunki przeciwnika, poznali jego plan i skierowali swoje lotniskowce w rejon wysp. W bitwie zatopili cztery japońskie lotniskowce. O jakie starcie chodzi?",
    "options": [
      "Bitwę o Midway",
      "Bitwę o Guadalcanal",
      "Atak na Pearl Harbor",
      "Bitwę o El Alamein",
      "Bitwę o Atlantyk",
      "Bitwę o Anglię"
    ],
    "answer": 0,
    "explanation": "W bitwie o Midway Amerykanie wykorzystali znajomość japońskich planów i zatopili cztery lotniskowce przeciwnika."
  },
  {
    "id": "R01_POZ_08",
    "section": "Wojna poza Europą",
    "type": "riddle",
    "prompt": "Jak nazywano niemieckie okręty podwodne atakujące alianckie konwoje na Atlantyku?",
    "options": null,
    "answer": "U-booty",
    "altAnswers": [
      "U-booty",
      "U-Booty",
      "U-boot",
      "U-Boot"
    ],
    "explanation": "Niemieckie U-booty miały odcinać Wielką Brytanię od dostaw płynących przez Atlantyk.",
    "image": "r01_uboat_konwoj.jpg"
  },
  {
    "id": "R01_POZ_09",
    "section": "Wojna poza Europą",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych miejsc działań wojny poza Europą: Pearl Harbor, Midway, Guadalcanal, Kursk.",
    "options": null,
    "answer": "Kursk",
    "explanation": "Pearl Harbor, Midway i Guadalcanal wiążą się z wojną na Pacyfiku; Kursk leży na froncie wschodnim w Europie."
  },
  {
    "id": "R01_DRO_01",
    "section": "Droga do zwycięstwa",
    "type": "single_choice",
    "prompt": "Gdzie odbyła się pierwsza konferencja przywódców Wielkiej Trójki?",
    "options": [
      "W Teheranie",
      "W Jałcie",
      "W Berlinie",
      "W Londynie",
      "W Rzymie",
      "W Moskwie"
    ],
    "answer": 0,
    "explanation": "Pierwsze spotkanie przywódców USA, Wielkiej Brytanii i ZSRS odbyło się pod koniec 1943 r. w Teheranie.",
    "image": "r01_wielka_trojka.jpg"
  },
  {
    "id": "R01_DRO_02",
    "section": "Droga do zwycięstwa",
    "type": "true_false",
    "prompt": "Alianci wylądowali w Normandii 6 czerwca 1944 r.",
    "options": null,
    "answer": true,
    "explanation": "Desant w Normandii 6 czerwca 1944 r. otworzył drugi front w Europie Zachodniej.",
    "image": "r01_normandia.jpg"
  },
  {
    "id": "R01_DRO_03",
    "section": "Droga do zwycięstwa",
    "type": "multi_select",
    "prompt": "Zaznacz państwa zaliczane do Wielkiej Trójki.",
    "options": [
      "Stany Zjednoczone",
      "Wielka Brytania",
      "Związek Sowiecki",
      "Niemcy",
      "Włochy",
      "Japonia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wielką Trójkę tworzyli przywódcy Stanów Zjednoczonych, Wielkiej Brytanii i Związku Sowieckiego.",
    "image": "r01_wielka_trojka.jpg"
  },
  {
    "id": "R01_DRO_04",
    "section": "Droga do zwycięstwa",
    "type": "fill_in",
    "prompt": "Klasztor na Monte Cassino zdobyli w maju 1944 r. żołnierze __________ Korpusu Polskich Sił Zbrojnych.",
    "options": null,
    "answer": [
      "2."
    ],
    "altAnswers": [
      [
        "2.",
        "2",
        "Drugiego",
        "II"
      ]
    ],
    "explanation": "W maju 1944 r. klasztor Monte Cassino zdobyli żołnierze 2. Korpusu Polskich Sił Zbrojnych.",
    "image": "r01_monte_cassino.jpg"
  },
  {
    "id": "R01_DRO_05",
    "section": "Droga do zwycięstwa",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "options": null,
    "left": [
      "Konferencja w Teheranie",
      "Lądowanie w Normandii",
      "Kapitulacja Niemiec",
      "Kapitulacja Japonii"
    ],
    "right": [
      "28 listopada-1 grudnia 1943 r.",
      "6 czerwca 1944 r.",
      "8/9 maja 1945 r.",
      "2 września 1945 r."
    ],
    "answer": {
      "Konferencja w Teheranie": "28 listopada-1 grudnia 1943 r.",
      "Lądowanie w Normandii": "6 czerwca 1944 r.",
      "Kapitulacja Niemiec": "8/9 maja 1945 r.",
      "Kapitulacja Japonii": "2 września 1945 r."
    },
    "explanation": "Te wydarzenia wyznaczają kolejne etapy prowadzące do zakończenia wojny."
  },
  {
    "id": "R01_DRO_06",
    "section": "Droga do zwycięstwa",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia końcowego etapu wojny w porządku chronologicznym.",
    "options": null,
    "items": [
      "Kapitulacja Japonii",
      "Lądowanie w Normandii",
      "Konferencja w Teheranie",
      "Kapitulacja Niemiec"
    ],
    "answer": [
      "Konferencja w Teheranie",
      "Lądowanie w Normandii",
      "Kapitulacja Niemiec",
      "Kapitulacja Japonii"
    ],
    "explanation": "Teheran odbył się pod koniec 1943 r., desant w Normandii w czerwcu 1944 r., Niemcy skapitulowały w maju 1945 r., a Japonia 2 września 1945 r."
  },
  {
    "id": "R01_DRO_07",
    "section": "Droga do zwycięstwa",
    "type": "scenario",
    "prompt": "Jest 6 czerwca 1944 r. Olbrzymie siły alianckie lądują na wybrzeżu Francji, otwierając drugi front w Europie Zachodniej. Jak nazywa się ten region?",
    "options": [
      "Normandia",
      "Bretania",
      "Sycylia",
      "Krym",
      "Bawaria",
      "Flandria"
    ],
    "answer": 0,
    "explanation": "6 czerwca 1944 r. alianci rozpoczęli desant w Normandii, największą operację desantową w dziejach.",
    "image": "r01_normandia.jpg"
  },
  {
    "id": "R01_DRO_08",
    "section": "Droga do zwycięstwa",
    "type": "riddle",
    "prompt": "Jak nazywało się japońskie miasto, na które 6 sierpnia 1945 r. zrzucono pierwszą bombę atomową?",
    "options": null,
    "answer": "Hiroszima",
    "altAnswers": [
      "Hiroszima",
      "Hiroshima"
    ],
    "explanation": "Pierwszą bombę atomową użyto 6 sierpnia 1945 r. przeciw Hiroszimie; 9 sierpnia zrzucono kolejną na Nagasaki.",
    "image": "r01_grzyb_atomowy.jpg"
  },
  {
    "id": "R01_DRO_09",
    "section": "Droga do zwycięstwa",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do teatru działań.",
    "options": null,
    "items": [
      "Monte Cassino",
      "Normandia",
      "Hiroszima",
      "Nagasaki",
      "Teheran",
      "Jałta"
    ],
    "categories": [
      "front europejski",
      "wojna z Japonią",
      "konferencje Wielkiej Trójki"
    ],
    "answer": {
      "front europejski": [
        "Monte Cassino",
        "Normandia"
      ],
      "wojna z Japonią": [
        "Hiroszima",
        "Nagasaki"
      ],
      "konferencje Wielkiej Trójki": [
        "Teheran",
        "Jałta"
      ]
    },
    "explanation": "Monte Cassino i Normandia były miejscami walk w Europie, Hiroszima i Nagasaki celem ataków atomowych, a Teheran i Jałta miejscami konferencji Wielkiej Trójki."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która data oznacza dzień rozpoczęcia bitwy o Anglię?",
    "options": [
      "10 lipca 1940 r.",
      "10 maja 1940 r.",
      "22 czerwca 1940 r.",
      "30 listopada 1939 r.",
      "22 czerwca 1941 r.",
      "7 grudnia 1941 r."
    ],
    "answer": 0,
    "explanation": "Bitwa o Anglię rozpoczęła się 10 lipca 1940 r. i trwała do 31 października 1940 r.",
    "image": "r01_bitwa_o_anglie.jpg"
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz trzy państwa bałtyckie włączone do ZSRS w 1940 r.",
    "options": [
      "Litwa",
      "Łotwa",
      "Estonia",
      "Finlandia",
      "Norwegia",
      "Dania"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W 1940 r. ZSRS zaanektował Litwę, Łotwę i Estonię."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dowódcę lub polityka z wydarzeniem.",
    "options": null,
    "left": [
      "Władysław Raginis",
      "Tadeusz Kutrzeba",
      "Stefan Starzyński",
      "Winston Churchill"
    ],
    "right": [
      "obrona Wizny",
      "bitwa nad Bzurą",
      "obrona Warszawy",
      "obrona Wielkiej Brytanii"
    ],
    "answer": {
      "Władysław Raginis": "obrona Wizny",
      "Tadeusz Kutrzeba": "bitwa nad Bzurą",
      "Stefan Starzyński": "obrona Warszawy",
      "Winston Churchill": "obrona Wielkiej Brytanii"
    },
    "explanation": "Raginis dowodził pod Wizną, Kutrzeba Armią Poznań nad Bzurą, Starzyński odegrał ważną rolę w obronie Warszawy, a Churchill kierował brytyjskim rządem w czasie bitwy o Anglię."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż cztery przełomowe wydarzenia wojny od najwcześniejszego.",
    "options": null,
    "items": [
      "Bitwa o Stalingrad",
      "Bitwa o Anglię",
      "Bitwa o Midway",
      "Atak Niemiec na ZSRS"
    ],
    "answer": [
      "Bitwa o Anglię",
      "Atak Niemiec na ZSRS",
      "Bitwa o Midway",
      "Bitwa o Stalingrad"
    ],
    "explanation": "Bitwa o Anglię trwała w 1940 r., atak na ZSRS nastąpił w czerwcu 1941 r., Midway w czerwcu 1942 r., a Stalingrad od sierpnia 1942 r. do lutego 1943 r."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Bitwa o Stalingrad trwała od sierpnia __________ do lutego __________.",
    "options": null,
    "answer": [
      "1942",
      "1943"
    ],
    "altAnswers": [
      [
        "1942",
        "1942 r."
      ],
      [
        "1943",
        "1943 r."
      ]
    ],
    "explanation": "Walki o Stalingrad trwały od sierpnia 1942 r. do lutego 1943 r."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które wydarzenie nastąpiło najpóźniej?",
    "options": [
      "Bitwa na Łuku Kurskim",
      "Bitwa o Midway",
      "Bitwa o Anglię",
      "Kapitulacja Francji",
      "Atak na Pearl Harbor",
      "Atak Niemiec na ZSRS"
    ],
    "answer": 0,
    "explanation": "Bitwa na Łuku Kurskim toczyła się latem 1943 r.; pozostałe wydarzenia miały miejsce w latach 1940-1942."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do lat 1939-1941 albo 1942-1945.",
    "options": null,
    "items": [
      "wojna zimowa",
      "bitwa o Anglię",
      "atak na Pearl Harbor",
      "bitwa o Midway",
      "bitwa na Łuku Kurskim",
      "lądowanie w Normandii"
    ],
    "categories": [
      "1939-1941",
      "1942-1945"
    ],
    "answer": {
      "1939-1941": [
        "wojna zimowa",
        "bitwa o Anglię",
        "atak na Pearl Harbor"
      ],
      "1942-1945": [
        "bitwa o Midway",
        "bitwa na Łuku Kurskim",
        "lądowanie w Normandii"
      ]
    },
    "explanation": "Pierwsza grupa obejmuje wydarzenia z lat 1939-1941, druga zaś od 1942 r. do końca wojny."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia będące przełomowymi porażkami państw Osi lub momentami utraty przez nie inicjatywy.",
    "options": [
      "Bitwa o Anglię",
      "Bitwa o Stalingrad",
      "Bitwa na Łuku Kurskim",
      "Bitwa o Midway",
      "Kapitulacja Francji",
      "Atak na Polskę"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Bitwa o Anglię była pierwszym niepowodzeniem Hitlera, Stalingrad i Kursk przełamały sytuację na froncie wschodnim, a Midway dało USA inicjatywę na Pacyfiku."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie z jego bezpośrednim następstwem.",
    "options": null,
    "left": [
      "Atak na Pearl Harbor",
      "Zwycięstwo pod Midway",
      "Lądowanie w Normandii",
      "Zrzucenie bomb atomowych"
    ],
    "right": [
      "przystąpienie USA do wojny",
      "przejście Japonii do obrony",
      "otwarcie drugiego frontu w Europie Zachodniej",
      "przyspieszenie kapitulacji Japonii"
    ],
    "answer": {
      "Atak na Pearl Harbor": "przystąpienie USA do wojny",
      "Zwycięstwo pod Midway": "przejście Japonii do obrony",
      "Lądowanie w Normandii": "otwarcie drugiego frontu w Europie Zachodniej",
      "Zrzucenie bomb atomowych": "przyspieszenie kapitulacji Japonii"
    },
    "explanation": "Każde z tych wydarzeń wywołało wyraźną zmianę strategiczną w dalszym przebiegu wojny."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż konferencje i kapitulacje w porządku chronologicznym.",
    "options": null,
    "items": [
      "Kapitulacja Japonii",
      "Konferencja w Jałcie",
      "Kapitulacja Niemiec",
      "Konferencja w Teheranie"
    ],
    "answer": [
      "Konferencja w Teheranie",
      "Konferencja w Jałcie",
      "Kapitulacja Niemiec",
      "Kapitulacja Japonii"
    ],
    "explanation": "Teheran odbył się w 1943 r., Jałta na początku 1945 r., Niemcy skapitulowały w maju, a Japonia we wrześniu 1945 r."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dowódca obserwuje, że jesienią ciężki sprzęt grzęźnie w błocie, a zimą żołnierze nie mają odpowiedniego przygotowania do mrozu. W jakiej kampanii te warunki szczególnie pomogły zahamować niemiecką ofensywę?",
    "options": [
      "W kampanii przeciw ZSRS w 1941 r.",
      "W kampanii francuskiej w 1940 r.",
      "W kampanii polskiej w 1939 r.",
      "W kampanii afrykańskiej w 1942 r.",
      "Podczas desantu w Normandii",
      "Podczas ataku na Pearl Harbor"
    ],
    "answer": 0,
    "explanation": "Jesienne błoto i sroga zima pogorszyły sytuację Niemców podczas ofensywy na Moskwę w 1941 r.",
    "image": "r01_front_wschodni_zima.jpg"
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para miast została zaatakowana bombami atomowymi w sierpniu 1945 r.?",
    "options": [
      "Hiroszima i Nagasaki",
      "Tokio i Osaka",
      "Berlin i Hamburg",
      "Londyn i Coventry",
      "Warszawa i Kraków",
      "Moskwa i Leningrad"
    ],
    "answer": 0,
    "explanation": "6 sierpnia bomba atomowa spadła na Hiroszimę, a 9 sierpnia na Nagasaki.",
    "image": "r01_grzyb_atomowy.jpg"
  }
];

const KID_PROMPTS = {
  "R01_NAP_03": "Które działania były częścią niemieckiej wojny błyskawicznej?",
  "R01_POD_07": "Jak nazywała się wielka ewakuacja alianckich żołnierzy z Francji do Wielkiej Brytanii?",
  "R01_ZSR_03": "Co utrudniło Niemcom atak na Moskwę?",
  "R01_OKU_07": "Jaką postawę pokazuje osoba, która ukrywa prześladowaną rodzinę żydowską?",
  "R01_POZ_07": "W której bitwie Amerykanie zatopili cztery japońskie lotniskowce?",
  "R01_DRO_07": "Gdzie alianci wylądowali 6 czerwca 1944 r.?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "II wojna światowa",
  icon: "🌍",
  sectionOrder: [
    "Napaść na Polskę",
    "Podbój Europy przez Hitlera i Stalina",
    "Wojna III Rzeszy z ZSRS",
    "Polityka okupacyjna III Rzeszy",
    "Wojna poza Europą",
    "Droga do zwycięstwa"
  ],
  sectionIcons: {
    "Napaść na Polskę": "🛡️",
    "Podbój Europy przez Hitlera i Stalina": "🌍",
    "Wojna III Rzeszy z ZSRS": "❄️",
    "Polityka okupacyjna III Rzeszy": "⛓️",
    "Wojna poza Europą": "🌊",
    "Droga do zwycięstwa": "🏁"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
