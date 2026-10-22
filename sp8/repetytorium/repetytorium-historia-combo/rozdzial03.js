// Skróty sekcji (do identyfikatorów ćwiczeń):
//   UPA = Upadek Rzymu, Frankowie i feudalizm
//   BAS = Bizancjum, Arabowie i Słowianie
//   PIA = Pierwsi Piastowie i rozbicie dzielnicowe
//   ZJE = Zjednoczenie i ostatni Piastowie
//   JAG = Jagiellonowie, Krzyżacy i unie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_UPA_01",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "single_choice",
    "prompt": "W którym roku podzielono Cesarstwo Rzymskie na część zachodnią i wschodnią?",
    "explanation": "Podział cesarstwa nastąpił w 395 roku.",
    "image": "r03_podzial_cesarstwa.jpg",
    "options": [
      "395",
      "476",
      "496",
      "800",
      "843",
      "966"
    ],
    "answer": 0
  },
  {
    "id": "R03_UPA_02",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "multi_select",
    "prompt": "Które pary cesarstwo–stolica odpowiadają podziałowi z 395 roku?",
    "explanation": "Stolicą Cesarstwa Zachodniorzymskiego był Rzym, a Wschodniorzymskiego Konstantynopol.",
    "image": "r03_podzial_cesarstwa.jpg",
    "options": [
      "Cesarstwo Zachodniorzymskie — Rzym",
      "Cesarstwo Wschodniorzymskie — Rzym",
      "Cesarstwo Wschodniorzymskie — Konstantynopol",
      "Cesarstwo Zachodniorzymskie — Konstantynopol"
    ],
    "answer": [
      0,
      2
    ]
  },
  {
    "id": "R03_UPA_03",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "true_false",
    "prompt": "Cesarstwo Zachodniorzymskie upadło w 476 roku.",
    "explanation": "Osiedlanie się ludów germańskich i tworzenie ich państw przyczyniło się do upadku cesarstwa w 476 roku.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_UPA_04",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "match",
    "prompt": "Połącz wydarzenie z odpowiednią datą.",
    "explanation": "Cesarstwo Rzymskie podzielono w 395 roku, część zachodnia upadła w 476, Frankowie przyjęli chrzest w 496, a Karola Wielkiego koronowano w 800 roku.",
    "options": null,
    "left": [
      "Upadek Cesarstwa Zachodniorzymskiego",
      "Koronacja cesarska Karola Wielkiego",
      "Podział Cesarstwa Rzymskiego",
      "Chrzest Franków"
    ],
    "right": [
      "496",
      "395",
      "800",
      "476"
    ],
    "answer": {
      "Podział Cesarstwa Rzymskiego": "395",
      "Upadek Cesarstwa Zachodniorzymskiego": "476",
      "Chrzest Franków": "496",
      "Koronacja cesarska Karola Wielkiego": "800"
    }
  },
  {
    "id": "R03_UPA_05",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "single_choice",
    "prompt": "W którym roku Karol Wielki otrzymał koronę cesarską z rąk papieża?",
    "explanation": "Koronacja cesarska Karola Wielkiego odbyła się w Rzymie w 800 roku.",
    "image": "r03_karol_wielki_koronacja.jpg",
    "options": [
      "732",
      "751",
      "768",
      "800",
      "814",
      "843"
    ],
    "answer": 3
  },
  {
    "id": "R03_UPA_06",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "fill_in",
    "prompt": "Państwo Franków podzielono na trzy części na mocy traktatu w __________ w roku __________.",
    "explanation": "Traktat w Verdun z 843 roku podzielił państwo Karolingów na trzy części.",
    "options": null,
    "altAnswers": [
      [
        "Verdun",
        "verdun"
      ],
      [
        "843",
        "843 r."
      ]
    ],
    "answer": [
      "Verdun",
      "843"
    ]
  },
  {
    "id": "R03_UPA_07",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "riddle",
    "prompt": "Jak nazywano zwierzchnika, któremu wasal służył pomocą i radą?",
    "explanation": "Senior zapewniał wasalowi opiekę i przekazywał mu lenno w zamian za służbę.",
    "options": null,
    "altAnswers": [
      "senior",
      "seniora"
    ],
    "answer": "senior"
  },
  {
    "id": "R03_UPA_08",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "scenario",
    "prompt": "Władca państwa Franków otrzymuje od papieża koronę cesarską w Rzymie. Po jego śmierci państwo zostanie podzielone między wnuków. O którego władcę chodzi?",
    "explanation": "Opis dotyczy Karola Wielkiego; w 800 roku uzyskał koronę cesarską, a jego państwo podzielono w 843 roku.",
    "image": "r03_karol_wielki_koronacja.jpg",
    "options": [
      "Karol Młot",
      "Karol Wielki",
      "Pepin Krótki",
      "Klodwig",
      "Ludwik Pobożny",
      "Bolesław Chrobry"
    ],
    "answer": 1
  },
  {
    "id": "R03_UPA_09",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "sort",
    "prompt": "Rozdziel elementy według tego, czy dotyczą seniora czy wasala w systemie lennym.",
    "explanation": "Senior nadawał lenno i roztaczał opiekę, a wasal zobowiązywał się do służby wojskowej i rady.",
    "image": "r03_drabina_lenna.jpg",
    "options": null,
    "items": [
      "Pełni służbę wojskową",
      "Przekazuje lenno",
      "Udziela rady zwierzchnikowi",
      "Zapewnia opiekę"
    ],
    "categories": [
      "Senior",
      "Wasal"
    ],
    "answer": {
      "Senior": [
        "Przekazuje lenno",
        "Zapewnia opiekę"
      ],
      "Wasal": [
        "Pełni służbę wojskową",
        "Udziela rady zwierzchnikowi"
      ]
    }
  },
  {
    "id": "R03_UPA_10",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "odd_one_out",
    "prompt": "Które pojęcie nie wiąże się z systemem lennym: senior, lenno, wasal, kalifat.",
    "explanation": "Senior, lenno i wasal to pojęcia feudalne; kalifat to państwo stworzone przez Arabów.",
    "image": "r03_drabina_lenna.jpg",
    "options": null,
    "answer": "kalifat"
  },
  {
    "id": "R03_UPA_11",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "explanation": "Podział nastąpił w 395 roku, upadek Zachodu w 476, chrzest Franków w 496, a koronacja Karola w 800.",
    "options": null,
    "items": [
      "Chrzest Franków",
      "Koronacja cesarska Karola Wielkiego",
      "Upadek Cesarstwa Zachodniorzymskiego",
      "Podział Cesarstwa Rzymskiego"
    ],
    "answer": [
      "Koronacja cesarska Karola Wielkiego",
      "Podział Cesarstwa Rzymskiego",
      "Chrzest Franków",
      "Upadek Cesarstwa Zachodniorzymskiego"
    ]
  },
  {
    "id": "R03_UPA_12",
    "section": "Upadek Rzymu, Frankowie i feudalizm",
    "type": "true_false",
    "prompt": "Lenno nadane wasalowi było od początku jego pełną własnością.",
    "explanation": "Lenno początkowo nie było własnością wasala, ale z czasem jego potomkowie zaczęli je dziedziczyć.",
    "options": null,
    "answer": false
  },
  {
    "id": "R03_BAS_01",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "single_choice",
    "prompt": "Jak nazywano cesarstwo wschodniorzymskie po upadku zachodniej części Imperium?",
    "explanation": "Po 476 roku Cesarstwo Wschodniorzymskie nazywano Cesarstwem Bizantyńskim.",
    "image": "r03_mapa_bizancjum.jpg",
    "options": [
      "Cesarstwem Bizantyńskim",
      "Państwem Franków",
      "Królestwem Czech",
      "Kalifatem",
      "Państwem Zakonu Krzyżackiego",
      "Cesarstwem Zachodniorzymskim"
    ],
    "answer": 0
  },
  {
    "id": "R03_BAS_02",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "riddle",
    "prompt": "Jak nazywał się zbiór przepisów prawa rzymskiego zebranych na polecenie cesarza Justyniana I?",
    "explanation": "Justynian I przeprowadził kodyfikację prawa, której efektem był Kodeks Justyniana.",
    "image": "r03_mapa_bizancjum.jpg",
    "options": null,
    "altAnswers": [
      "Kodeks Justyniana",
      "kodeks justyniana",
      "Kodeks Justyniana I"
    ],
    "answer": "Kodeks Justyniana"
  },
  {
    "id": "R03_BAS_03",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "true_false",
    "prompt": "Zwierzchnikiem chrześcijaństwa w Bizancjum był patriarcha rezydujący w Konstantynopolu.",
    "explanation": "Zwierzchnikiem Kościoła w Bizancjum był patriarcha z siedzibą w Konstantynopolu.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_BAS_04",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "match",
    "prompt": "Połącz postać lub pojęcie z jego rolą w średniowieczu.",
    "explanation": "Justynian kodyfikował prawo, Mahomet stworzył islam, Karol Młot pokonał Arabów pod Poitiers, a wiec decydował o sprawach plemienia.",
    "options": null,
    "left": [
      "Wiec",
      "Mahomet",
      "Justynian I",
      "Karol Młot"
    ],
    "right": [
      "Zwycięstwo nad Arabami w 732 roku",
      "Zgromadzenie mężczyzn plemienia",
      "Kodyfikacja prawa rzymskiego",
      "Stworzenie islamu"
    ],
    "answer": {
      "Justynian I": "Kodyfikacja prawa rzymskiego",
      "Mahomet": "Stworzenie islamu",
      "Karol Młot": "Zwycięstwo nad Arabami w 732 roku",
      "Wiec": "Zgromadzenie mężczyzn plemienia"
    }
  },
  {
    "id": "R03_BAS_05",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "fill_in",
    "prompt": "Religię założoną przez Mahometa nazwano __________, a jej wyznawców __________.",
    "explanation": "W VII wieku Mahomet stworzył islam, którego wyznawców nazywa się muzułmanami.",
    "options": null,
    "altAnswers": [
      [
        "islamem",
        "islam"
      ],
      [
        "muzułmanami",
        "muzułmanie"
      ]
    ],
    "answer": [
      "islamem",
      "muzułmanami"
    ]
  },
  {
    "id": "R03_BAS_06",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "multi_select",
    "prompt": "Które dobra pochodzące z Dalekiego Wschodu poznali Europejczycy dzięki Arabom?",
    "explanation": "Arabowie upowszechniali m.in. papier, porcelanę, jedwab i proch; pozwoliło to na przekazanie osiągnięć wielu kultur.",
    "image": "r03_szlaki_kultury_arabskiej.jpg",
    "options": [
      "Papier",
      "Porcelana",
      "Zamki obronne",
      "Jedwab",
      "Proch",
      "Lenno"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ]
  },
  {
    "id": "R03_BAS_07",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "scenario",
    "prompt": "W 732 roku wojownicy powstrzymują pod Poitiers podboje Arabów w Europie Zachodniej. Do jakiego państwa należą zwycięzcy?",
    "explanation": "Pod Poitiers w 732 roku Arabów pokonali Frankowie pod dowództwem Karola Młota.",
    "image": "r03_szlaki_kultury_arabskiej.jpg",
    "options": [
      "Bizancjum",
      "Państwa Wiślan",
      "Państwa Franków",
      "Kalifatu",
      "Państwa Polan",
      "Królestwa Węgier"
    ],
    "answer": 2
  },
  {
    "id": "R03_BAS_08",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "sequence",
    "prompt": "Uporządkuj cztery wydarzenia według chronologii.",
    "explanation": "Wydarzenia miały miejsce kolejno w latach 395, 476, 732 i 800.",
    "options": null,
    "items": [
      "Powstrzymanie Arabów pod Poitiers",
      "Koronacja cesarska Karola Wielkiego",
      "Podział Cesarstwa Rzymskiego",
      "Upadek Cesarstwa Zachodniorzymskiego"
    ],
    "answer": [
      "Podział Cesarstwa Rzymskiego",
      "Upadek Cesarstwa Zachodniorzymskiego",
      "Powstrzymanie Arabów pod Poitiers",
      "Koronacja cesarska Karola Wielkiego"
    ]
  },
  {
    "id": "R03_BAS_09",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie nazywa religii ani wyznania: islam, prawosławie, chrześcijaństwo, kalifat.",
    "explanation": "Kalifat był państwem arabskim, natomiast islam, prawosławie i chrześcijaństwo odnoszą się do religii albo jej wyznania.",
    "options": null,
    "answer": "kalifat"
  },
  {
    "id": "R03_BAS_10",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do zagadnień religijnych albo organizacji państwa i plemienia.",
    "explanation": "Islam, prawosławie i politeizm odnoszą się do religii; kalifat, wiec i książę plemienny dotyczą organizacji władzy.",
    "image": "r03_wiec_slowianski.jpg",
    "options": null,
    "items": [
      "wiec",
      "islam",
      "książę plemienny",
      "prawosławie",
      "kalifat",
      "politeizm"
    ],
    "categories": [
      "Religia",
      "Ustrój i zgromadzenia"
    ],
    "answer": {
      "Religia": [
        "islam",
        "prawosławie",
        "politeizm"
      ],
      "Ustrój i zgromadzenia": [
        "kalifat",
        "wiec",
        "książę plemienny"
      ]
    }
  },
  {
    "id": "R03_BAS_11",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "single_choice",
    "prompt": "Jak nazywało się zgromadzenie dorosłych mężczyzn plemienia słowiańskiego, podejmujące ważne decyzje?",
    "explanation": "Wiec był zgromadzeniem członków plemienia i wybierał wodza, czyli księcia.",
    "image": "r03_wiec_slowianski.jpg",
    "options": [
      "Sejm",
      "Wiec",
      "Synod",
      "Zjazd gnieźnieński",
      "Rada królewska",
      "Kalifat"
    ],
    "answer": 1
  },
  {
    "id": "R03_BAS_12",
    "section": "Bizancjum, Arabowie i Słowianie",
    "type": "true_false",
    "prompt": "Słowianie przed przyjęciem chrześcijaństwa wyznawali religię politeistyczną.",
    "explanation": "Ważnym elementem jednoczącym słowiańskie wspólnoty plemienne była religia politeistyczna.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_PIA_01",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "Które plemię pod wodzą Mieszka I zjednoczyło sąsiednie plemiona i utworzyło państwo polskie?",
    "explanation": "W X wieku państwo polskie powstało w wyniku jednoczenia plemion przez Polan pod wodzą Mieszka I.",
    "options": [
      "Wiślanie",
      "Pomorzanie",
      "Polanie",
      "Mazowszanie",
      "Ślężanie",
      "Obodryci"
    ],
    "answer": 2
  },
  {
    "id": "R03_PIA_02",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "riddle",
    "prompt": "Z jakiej dynastii pochodził Mieszko I?",
    "explanation": "Mieszko I pochodził z rodu Piastów; nazwa dynastii wywodzi się od tego rodu.",
    "options": null,
    "altAnswers": [
      "Piastów",
      "Piastowie",
      "dynastia Piastów"
    ],
    "answer": "Piastów"
  },
  {
    "id": "R03_PIA_03",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "fill_in",
    "prompt": "W roku __________ książę Mieszko I przyjął chrzest.",
    "explanation": "Chrzest Mieszka I w 966 roku wprowadził oficjalnie chrześcijaństwo do jego państwa.",
    "image": "r03_chrzest_mieszka.jpg",
    "options": null,
    "altAnswers": [
      [
        "966",
        "966 r."
      ]
    ],
    "answer": [
      "966"
    ]
  },
  {
    "id": "R03_PIA_04",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "scenario",
    "prompt": "Władca młodego państwa polskiego przyjmuje chrzest, aby umocnić władzę i utrudnić chrześcijańskim sąsiadom najazdy pod pozorem walki z pogaństwem. O kogo chodzi?",
    "explanation": "Mieszko I przyjął chrzest w 966 roku.",
    "image": "r03_chrzest_mieszka.jpg",
    "options": [
      "Mieszko I",
      "Bolesław Chrobry",
      "Bolesław Śmiały",
      "Bolesław Krzywousty",
      "Władysław Łokietek",
      "Kazimierz Wielki"
    ],
    "answer": 0
  },
  {
    "id": "R03_PIA_05",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "multi_select",
    "prompt": "Jakie wydarzenia lub osiągnięcia przypisano Bolesławowi Chrobremu?",
    "explanation": "Bolesław Chrobry poszerzył państwo, w 1000 roku doszło do zjazdu gnieźnieńskiego i utworzono nowe ośrodki kościelne, a w 1025 roku został królem.",
    "image": "r03_zjazd_gnieznienski.jpg",
    "options": [
      "Zjazd gnieźnieński",
      "Podział Polski na dzielnice w 1138 roku",
      "Koronacja królewska w 1025 roku",
      "Rozbudowa organizacji kościelnej",
      "Unia w Krewie",
      "Pokój w Kaliszu"
    ],
    "answer": [
      0,
      2,
      3
    ]
  },
  {
    "id": "R03_PIA_06",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "match",
    "prompt": "Połącz władcę z ważnym wydarzeniem z okresu jego panowania.",
    "explanation": "Mieszko I przyjął chrzest, Bolesław Chrobry i Bolesław Śmiały zostali koronowani, a Bolesław Krzywousty wydał testament.",
    "options": null,
    "left": [
      "Bolesław Krzywousty",
      "Mieszko I",
      "Bolesław Śmiały",
      "Bolesław Chrobry"
    ],
    "right": [
      "Koronacja w 1076 roku",
      "Testament dzielący kraj",
      "Chrzest w 966 roku",
      "Koronacja w 1025 roku"
    ],
    "answer": {
      "Mieszko I": "Chrzest w 966 roku",
      "Bolesław Chrobry": "Koronacja w 1025 roku",
      "Bolesław Śmiały": "Koronacja w 1076 roku",
      "Bolesław Krzywousty": "Testament dzielący kraj"
    }
  },
  {
    "id": "R03_PIA_07",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "sequence",
    "prompt": "Uszereguj wydarzenia od najwcześniejszego do najpóźniejszego.",
    "explanation": "Są to kolejno lata 966, 1000, 1025, 1076 i 1138.",
    "options": null,
    "items": [
      "Podział dzielnicowy Polski",
      "Zjazd gnieźnieński",
      "Koronacja Bolesława Śmiałego",
      "Chrzest Mieszka I",
      "Koronacja Bolesława Chrobrego"
    ],
    "answer": [
      "Chrzest Mieszka I",
      "Zjazd gnieźnieński",
      "Koronacja Bolesława Chrobrego",
      "Koronacja Bolesława Śmiałego",
      "Podział dzielnicowy Polski"
    ]
  },
  {
    "id": "R03_PIA_08",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "W jakim roku, po śmierci Bolesława Krzywoustego, rozpoczęło się rozbicie dzielnicowe Polski?",
    "explanation": "Śmierć Bolesława Krzywoustego i wykonanie testamentu zapoczątkowały w 1138 roku rozbicie dzielnicowe.",
    "image": "r03_mapa_rozbicia.jpg",
    "options": [
      "1076",
      "1102",
      "1138",
      "1226",
      "1241",
      "1320"
    ],
    "answer": 2
  },
  {
    "id": "R03_PIA_09",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "true_false",
    "prompt": "Według testamentu Bolesława Krzywoustego seniorem miał zostawać najstarszy z żyjących synów.",
    "explanation": "Zasada senioratu miała przyznawać zwierzchnictwo najstarszemu synowi, a po nim kolejnemu według wieku.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_PIA_10",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "sort",
    "prompt": "Podziel wydarzenia na okres przed rozbiciem dzielnicowym i po jego rozpoczęciu.",
    "explanation": "Chrzest z 966 roku i dwie koronacje poprzedzały rok 1138; sprowadzenie Krzyżaków w 1226 roku i najazdy tatarskie nastąpiły już w okresie rozbicia.",
    "image": "r03_mapa_rozbicia.jpg",
    "options": null,
    "items": [
      "Sprowadzenie Krzyżaków przez Konrada",
      "Koronacja Bolesława Chrobrego",
      "Testamentowy podział kraju",
      "Chrzest Mieszka I",
      "Najazdy tatarskie w XIII wieku",
      "Koronacja Bolesława Śmiałego"
    ],
    "categories": [
      "Przed rokiem 1138",
      "Od roku 1138"
    ],
    "answer": {
      "Przed rokiem 1138": [
        "Chrzest Mieszka I",
        "Koronacja Bolesława Chrobrego",
        "Koronacja Bolesława Śmiałego"
      ],
      "Od roku 1138": [
        "Testamentowy podział kraju",
        "Sprowadzenie Krzyżaków przez Konrada",
        "Najazdy tatarskie w XIII wieku"
      ]
    }
  },
  {
    "id": "R03_PIA_11",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "odd_one_out",
    "prompt": "Wskaż władcę, który nie należał do dynastii Piastów: Mieszko I, Bolesław Chrobry, Bolesław Krzywousty, Karol Wielki.",
    "explanation": "Karol Wielki był władcą Franków; pozostali byli władcami polskimi z dynastii Piastów.",
    "options": null,
    "answer": "Karol Wielki"
  },
  {
    "id": "R03_PIA_12",
    "section": "Pierwsi Piastowie i rozbicie dzielnicowe",
    "type": "scenario",
    "prompt": "W 1226 roku książę mazowiecki sprowadza rycerski zakon z Niemiec, aby walczył z pogańskimi Prusami. Jak nazywa się ten książę?",
    "explanation": "Konrad Mazowiecki sprowadził Krzyżaków w 1226 roku, a zakon z czasem utworzył własne państwo.",
    "options": [
      "Bolesław Kędzierzawy",
      "Konrad Mazowiecki",
      "Władysław Łokietek",
      "Kazimierz Wielki",
      "Mieszko Stary",
      "Bolesław Śmiały"
    ],
    "answer": 1
  },
  {
    "id": "R03_ZJE_01",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "single_choice",
    "prompt": "Który polski władca koronował się w 1320 roku i zakończył okres rozbicia dzielnicowego?",
    "explanation": "Władysław Łokietek odzyskał władzę nad częścią ziem polskich i koronował się w 1320 roku.",
    "image": "r03_koronacja_lokietka.jpg",
    "options": [
      "Kazimierz Wielki",
      "Władysław Łokietek",
      "Bolesław Krzywousty",
      "Bolesław Chrobry",
      "Mieszko I",
      "Kazimierz Jagiellończyk"
    ],
    "answer": 1
  },
  {
    "id": "R03_ZJE_02",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "multi_select",
    "prompt": "Co sprzyjało ponownemu zjednoczeniu ziem polskich?",
    "explanation": "Wspólna mowa i nazwa kraju, potrzeba bezpieczeństwa, zagrożenie ze strony sąsiadów i uciążliwe opłaty na granicach dzielnic sprzyjały zjednoczeniu.",
    "options": [
      "Wspólna mowa i nazwa kraju",
      "Opłaty pobierane na granicach dzielnic",
      "Podboje Arabów w VIII wieku",
      "Zagrożenie ze strony Krzyżaków",
      "Pragnienie silnej władzy zapewniającej bezpieczeństwo",
      "Wprowadzenie unii lubelskiej"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ]
  },
  {
    "id": "R03_ZJE_03",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "fill_in",
    "prompt": "Władysław Łokietek koronował się na króla w roku __________, a Kazimierz Wielki objął tron w roku __________.",
    "explanation": "Koronacja Łokietka nastąpiła w 1320 roku; po jego śmierci w 1333 roku królem został Kazimierz Wielki.",
    "image": "r03_koronacja_lokietka.jpg",
    "options": null,
    "altAnswers": [
      [
        "1320",
        "1320 r."
      ],
      [
        "1333",
        "1333 r."
      ]
    ],
    "answer": [
      "1320",
      "1333"
    ]
  },
  {
    "id": "R03_ZJE_04",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "riddle",
    "prompt": "Jak brzmiał przydomek Władysława, który ponownie zjednoczył część polskich ziem i koronował się w 1320 roku?",
    "explanation": "Chodzi o Władysława Łokietka, zwycięzcę walk o zjednoczenie Polski.",
    "options": null,
    "altAnswers": [
      "Łokietek",
      "Lokietek"
    ],
    "answer": "Łokietek"
  },
  {
    "id": "R03_ZJE_05",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia XIV wieku w kolejności chronologicznej.",
    "explanation": "Wydarzenia pochodzą z lat 1308, 1320, 1333, 1343 i 1364.",
    "options": null,
    "items": [
      "Pokój w Kaliszu",
      "Założenie Akademii Krakowskiej",
      "Koronacja Kazimierza Wielkiego",
      "Zajęcie Pomorza Gdańskiego przez Krzyżaków",
      "Koronacja Władysława Łokietka"
    ],
    "answer": [
      "Zajęcie Pomorza Gdańskiego przez Krzyżaków",
      "Koronacja Władysława Łokietka",
      "Koronacja Kazimierza Wielkiego",
      "Pokój w Kaliszu",
      "Założenie Akademii Krakowskiej"
    ]
  },
  {
    "id": "R03_ZJE_06",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "match",
    "prompt": "Przyporządkuj wydarzenia do ich dat.",
    "explanation": "Pomorze Gdańskie zajęto w 1308 roku, Władysława Łokietka koronowano w 1320, pokój w Kaliszu zawarto w 1343, a Akademię Krakowską założono w 1364 roku.",
    "options": null,
    "left": [
      "Pokój w Kaliszu",
      "Założenie Akademii Krakowskiej",
      "Zajęcie Pomorza Gdańskiego",
      "Koronacja Łokietka"
    ],
    "right": [
      "1320",
      "1364",
      "1308",
      "1343"
    ],
    "answer": {
      "Zajęcie Pomorza Gdańskiego": "1308",
      "Koronacja Łokietka": "1320",
      "Pokój w Kaliszu": "1343",
      "Założenie Akademii Krakowskiej": "1364"
    }
  },
  {
    "id": "R03_ZJE_07",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "true_false",
    "prompt": "Kazimierz Wielki założył w 1364 roku Akademię Krakowską.",
    "explanation": "Akademia Krakowska, założona w 1364 roku, była pierwszym polskim uniwersytetem.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_ZJE_08",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "sort",
    "prompt": "Przyporządkuj działania Kazimierza Wielkiego do obszaru jego polityki.",
    "explanation": "Kazimierz Wielki wspierał handel i górnictwo, umacniał obronę kraju oraz ufundował Akademię Krakowską.",
    "image": "r03_zamki_kazimierza.jpg",
    "options": null,
    "items": [
      "Założenie Akademii Krakowskiej",
      "Budowanie zamków",
      "Ujednolicenie monet",
      "Otaczanie miast murami",
      "Rozwój kopalń soli",
      "Zniesienie ceł"
    ],
    "categories": [
      "Gospodarka",
      "Obronność",
      "Kultura i nauka"
    ],
    "answer": {
      "Gospodarka": [
        "Rozwój kopalń soli",
        "Ujednolicenie monet",
        "Zniesienie ceł"
      ],
      "Obronność": [
        "Budowanie zamków",
        "Otaczanie miast murami"
      ],
      "Kultura i nauka": [
        "Założenie Akademii Krakowskiej"
      ]
    }
  },
  {
    "id": "R03_ZJE_09",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "odd_one_out",
    "prompt": "Wskaż zdarzenie niezwiązane z polityką gospodarczą Kazimierza Wielkiego: rozwój kopalń soli, ujednolicenie monet, popieranie handlu, bitwa pod Grunwaldem.",
    "explanation": "Kopalnie soli, wspólna moneta i handel były przedmiotem reform Kazimierza; bitwa pod Grunwaldem odbyła się później w 1410 roku.",
    "options": null,
    "answer": "bitwa pod Grunwaldem"
  },
  {
    "id": "R03_ZJE_10",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "scenario",
    "prompt": "Król Polski w 1343 roku zawiera z Krzyżakami pokój w Kaliszu. Zakon ma oddać Kujawy, ale zachowuje Pomorze Gdańskie. Kim jest król?",
    "explanation": "Pokój w Kaliszu w 1343 roku zawarł Kazimierz Wielki, który stosował dyplomację zamiast kolejnej wojny.",
    "options": [
      "Władysław Jagiełło",
      "Władysław Łokietek",
      "Kazimierz Wielki",
      "Bolesław Chrobry",
      "Zygmunt Stary",
      "Kazimierz Jagiellończyk"
    ],
    "answer": 2
  },
  {
    "id": "R03_ZJE_11",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "single_choice",
    "prompt": "Jaką ziemię Krzyżacy zgodzili się zwrócić Polsce w pokoju kaliskim z 1343 roku?",
    "explanation": "Na mocy pokoju kaliskiego Krzyżacy zwrócili Polsce Kujawy, ale zatrzymali Pomorze Gdańskie.",
    "options": [
      "Kujawy",
      "Pomorze Gdańskie",
      "Warmię",
      "Żmudź",
      "Podole",
      "Mazowsze"
    ],
    "answer": 0
  },
  {
    "id": "R03_ZJE_12",
    "section": "Zjednoczenie i ostatni Piastowie",
    "type": "true_false",
    "prompt": "Na mocy pokoju w Kaliszu w 1343 roku Polska odzyskała Pomorze Gdańskie.",
    "explanation": "Pomorze Gdańskie pozostało w rękach Krzyżaków; Polska odzyskała wtedy Kujawy.",
    "options": null,
    "answer": false
  },
  {
    "id": "R03_JAG_01",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "single_choice",
    "prompt": "Kto objął tron Polski po śmierci Kazimierza Wielkiego w 1370 roku?",
    "explanation": "Tron polski przypadł królowi Węgier Ludwikowi Andegaweńskiemu, siostrzeńcowi Kazimierza Wielkiego.",
    "options": [
      "Władysław Jagiełło",
      "Zygmunt August",
      "Jadwiga Andegaweńska",
      "Ludwik Andegaweński",
      "Kazimierz Jagiellończyk",
      "Zygmunt Stary"
    ],
    "answer": 3
  },
  {
    "id": "R03_JAG_02",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "true_false",
    "prompt": "Jadwiga Andegaweńska objęła polski tron w 1384 roku.",
    "explanation": "W 1384 roku na polskim tronie zasiadła Jadwiga, córka Ludwika Andegaweńskiego.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_JAG_03",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "fill_in",
    "prompt": "Unię personalną między Polską a Litwą zapoczątkowało porozumienie w __________ w roku __________.",
    "explanation": "Porozumienie w Krewie w 1385 roku poprzedziło małżeństwo Jadwigi i Jagiełły oraz jego koronację w 1386 roku.",
    "image": "r03_unia_krewo.jpg",
    "options": null,
    "altAnswers": [
      [
        "Krewie",
        "Krewo",
        "Krewie na Litwie"
      ],
      [
        "1385",
        "1385 r."
      ]
    ],
    "answer": [
      "Krewie",
      "1385"
    ]
  },
  {
    "id": "R03_JAG_04",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "explanation": "Jadwiga wstąpiła na tron w 1384 roku, rok później zawarto porozumienie w Krewie, w 1386 koronowano Jagiełłę, a w 1569 zawarto unię w Lublinie.",
    "image": "r03_unia_krewo.jpg",
    "options": null,
    "left": [
      "Unia w Krewie",
      "Unia lubelska",
      "Objęcie tronu przez Jadwigę",
      "Koronacja Władysława Jagiełły"
    ],
    "right": [
      "1386",
      "1569",
      "1384",
      "1385"
    ],
    "answer": {
      "Objęcie tronu przez Jadwigę": "1384",
      "Unia w Krewie": "1385",
      "Koronacja Władysława Jagiełły": "1386",
      "Unia lubelska": "1569"
    }
  },
  {
    "id": "R03_JAG_05",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "single_choice",
    "prompt": "W jakim roku wojska polsko-litewskie zwyciężyły Krzyżaków pod Grunwaldem?",
    "explanation": "Bitwa pod Grunwaldem odbyła się w 1410 roku.",
    "image": "r03_bitwa_grunwald.jpg",
    "options": [
      "1409",
      "1410",
      "1411",
      "1454",
      "1466",
      "1525"
    ],
    "answer": 1
  },
  {
    "id": "R03_JAG_06",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z wojnami Polski z Krzyżakami w kolejności chronologicznej.",
    "explanation": "Wydarzenia odpowiadają latom 1409, 1410, 1411, 1454 i 1466.",
    "image": "r03_bitwa_grunwald.jpg",
    "options": null,
    "items": [
      "Drugi pokój toruński",
      "Bitwa pod Grunwaldem",
      "Początek wojny trzynastoletniej",
      "Pierwszy pokój toruński",
      "Początek wojny z Krzyżakami"
    ],
    "answer": [
      "Początek wojny z Krzyżakami",
      "Bitwa pod Grunwaldem",
      "Pierwszy pokój toruński",
      "Początek wojny trzynastoletniej",
      "Drugi pokój toruński"
    ]
  },
  {
    "id": "R03_JAG_07",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "multi_select",
    "prompt": "Które ziemie Polska odzyskała w wyniku pokoju toruńskiego w 1466 roku?",
    "explanation": "Drugi pokój toruński przyznał Polsce Pomorze Gdańskie, Warmię i ziemię chełmińską.",
    "image": "r03_mapa_drugiego_pokoju.jpg",
    "options": [
      "Pomorze Gdańskie",
      "Kujawy",
      "Warmia",
      "Ruś Halicka",
      "Ziemia chełmińska",
      "Mazowsze"
    ],
    "answer": [
      0,
      2,
      4
    ]
  },
  {
    "id": "R03_JAG_08",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "scenario",
    "prompt": "Po wojnie trzynastoletniej państwo krzyżackie zachowuje część ziem, ale nie może samodzielnie prowadzić polityki zagranicznej, ponieważ jest zależne od Polski. Jak określano tę zależność?",
    "explanation": "Po pokoju w 1466 roku pozostałe państwo zakonne zostało lennem Polski.",
    "image": "r03_mapa_drugiego_pokoju.jpg",
    "options": [
      "Unia personalna",
      "Seniorat",
      "Lenno",
      "Kalifat",
      "Schizma",
      "Równość dwóch monarchii"
    ],
    "answer": 2
  },
  {
    "id": "R03_JAG_09",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "riddle",
    "prompt": "Jak nazywało się świeckie państwo utworzone w miejsce państwa zakonnego, które w 1525 roku uznało zwierzchność Polski?",
    "explanation": "W 1525 roku państwo zakonne zostało przekształcone w Prusy Książęce, zależne od Polski.",
    "options": null,
    "altAnswers": [
      "Prusy Książęce",
      "Prusy Ksiazece"
    ],
    "answer": "Prusy Książęce"
  },
  {
    "id": "R03_JAG_10",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "odd_one_out",
    "prompt": "Wskaż władcę spoza dynastii Jagiellonów: Władysław Jagiełło, Kazimierz Jagiellończyk, Zygmunt August, Kazimierz Wielki.",
    "explanation": "Kazimierz Wielki był ostatnim królem Polski z dynastii Piastów, a pozostali to przedstawiciele Jagiellonów.",
    "options": null,
    "answer": "Kazimierz Wielki"
  },
  {
    "id": "R03_JAG_11",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "sort",
    "prompt": "Przyporządkuj cechy unii personalnej z 1385 roku i unii realnej z 1569 roku.",
    "explanation": "Unia w Krewie łączyła państwa osobą władcy; unia lubelska oprócz monarchy wprowadzała wspólne instytucje i politykę zagraniczną.",
    "image": "r03_unia_lubelska.jpg",
    "options": null,
    "items": [
      "Wspólny skarb",
      "Wspólny władca jako jedyne ogniwo łączące państwa",
      "Wspólna polityka zagraniczna",
      "Wspólny sejm",
      "Wspólna moneta"
    ],
    "categories": [
      "Unia personalna",
      "Unia realna"
    ],
    "answer": {
      "Unia personalna": [
        "Wspólny władca jako jedyne ogniwo łączące państwa"
      ],
      "Unia realna": [
        "Wspólny sejm",
        "Wspólny skarb",
        "Wspólna moneta",
        "Wspólna polityka zagraniczna"
      ]
    }
  },
  {
    "id": "R03_JAG_12",
    "section": "Jagiellonowie, Krzyżacy i unie",
    "type": "true_false",
    "prompt": "Unia zawarta w Lublinie w 1569 roku miała charakter wyłącznie personalny.",
    "explanation": "Unia lubelska była unią realną: Polska i Litwa miały wspólny sejm, skarb, monetę i politykę zagraniczną.",
    "image": "r03_unia_lubelska.jpg",
    "options": null,
    "answer": false
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenia z dziejów państwa Franków z odpowiednimi datami.",
    "explanation": "Oś czasu na stronie 33 wskazuje lata 751, 768, 814 i 843.",
    "options": null,
    "left": [
      "Śmierć Karola Wielkiego",
      "Traktat w Verdun",
      "Początek panowania Pepina Krótkiego",
      "Początek panowania Karola Wielkiego"
    ],
    "right": [
      "768",
      "843",
      "751",
      "814"
    ],
    "answer": {
      "Początek panowania Pepina Krótkiego": "751",
      "Początek panowania Karola Wielkiego": "768",
      "Śmierć Karola Wielkiego": "814",
      "Traktat w Verdun": "843"
    }
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uporządkuj wydarzenia od przybycia Hunów do chrztu Franków.",
    "explanation": "Najazdy Hunów rozpoczęły się około 370 roku, cesarstwo podzielono w 395, część zachodnia upadła w 476, a Frankowie przyjęli chrzest w 496 roku.",
    "options": null,
    "items": [
      "Chrzest Franków",
      "Podział Cesarstwa Rzymskiego",
      "Początek najazdów Hunów na Cesarstwo Rzymskie",
      "Upadek Cesarstwa Zachodniorzymskiego"
    ],
    "answer": [
      "Początek najazdów Hunów na Cesarstwo Rzymskie",
      "Podział Cesarstwa Rzymskiego",
      "Upadek Cesarstwa Zachodniorzymskiego",
      "Chrzest Franków"
    ]
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pierwszym królem Franków z dynastii Merowingów, który przyjął chrzest w 496 roku, był __________.",
    "explanation": "W 496 roku chrzest przyjął Klodwig, pierwszy król Franków z dynastii Merowingów.",
    "options": null,
    "altAnswers": [
      [
        "Klodwig",
        "Klodwiga"
      ]
    ],
    "answer": [
      "Klodwig"
    ]
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto jako majordomus Franków pokonał Arabów pod Poitiers w 732 roku?",
    "explanation": "W bitwie pod Poitiers Frankami dowodził Karol Młot, co zatrzymało arabskie podboje w Europie Zachodniej.",
    "options": [
      "Pepin Krótki",
      "Karol Wielki",
      "Karol Młot",
      "Ludwik Pobożny",
      "Klodwig",
      "Justynian I"
    ],
    "answer": 2
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rycerz otrzymuje lenno od możnego i zobowiązuje się do służby wojskowej. Następnie oddaje część tego lenna innemu rycerzowi, oczekując od niego takiej samej pomocy. Jakie role pełni teraz pierwszy rycerz?",
    "explanation": "W systemie lennym ta sama osoba mogła być wasalem swego seniora i seniorem własnego wasala.",
    "image": "r03_drabina_lenna.jpg",
    "options": [
      "Jest jednocześnie wasalem i seniorem",
      "Jest wyłącznie seniorem",
      "Jest wyłącznie wasalem",
      "Jest patriarchą i księciem",
      "Jest królem i papieżem",
      "Nie uczestniczy już w systemie lennym"
    ],
    "answer": 0
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do stuleci, w których miały miejsce.",
    "explanation": "Lata 1076, 1138, 1226 i 1241 oraz 1320 przypadają kolejno na XI, XII, XIII i XIV stulecie.",
    "options": null,
    "items": [
      "Koronacja Władysława Łokietka w 1320 roku",
      "Sprowadzenie Krzyżaków w 1226 roku",
      "Koronacja Bolesława Śmiałego w 1076 roku",
      "Bitwy z Tatarami w 1241 roku",
      "Początek rozbicia dzielnicowego w 1138 roku"
    ],
    "categories": [
      "XI wiek",
      "XII wiek",
      "XIII wiek",
      "XIV wiek"
    ],
    "answer": {
      "XI wiek": [
        "Koronacja Bolesława Śmiałego w 1076 roku"
      ],
      "XII wiek": [
        "Początek rozbicia dzielnicowego w 1138 roku"
      ],
      "XIII wiek": [
        "Sprowadzenie Krzyżaków w 1226 roku",
        "Bitwy z Tatarami w 1241 roku"
      ],
      "XIV wiek": [
        "Koronacja Władysława Łokietka w 1320 roku"
      ]
    }
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "W jakim mieście Kazimierz Wielki zawarł w 1343 roku pokój z Krzyżakami?",
    "explanation": "Układ z 1343 roku został zawarty w Kaliszu; Krzyżacy zwrócili Kujawy.",
    "options": null,
    "altAnswers": [
      "Kaliszu",
      "Kalisz"
    ],
    "answer": "Kaliszu"
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Justynian I próbował odbudować dawny zasięg Cesarstwa Rzymskiego, rozszerzając terytorium Bizancjum.",
    "explanation": "Justynian I rozszerzył władzę Bizancjum na część dawnych terenów Cesarstwa Zachodniorzymskiego.",
    "image": "r03_mapa_bizancjum.jpg",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz ziemię lub instytucję z datą dotyczącą jej historii.",
    "explanation": "Kujawy wróciły w 1343 roku, Pomorze Gdańskie w 1466, ziemia dobrzyńska w 1411, a Akademię założono w 1364.",
    "options": null,
    "left": [
      "Akademia Krakowska — założenie",
      "Ziemia dobrzyńska — pierwszy pokój toruński",
      "Kujawy — pokój w Kaliszu",
      "Pomorze Gdańskie — powrót do Polski"
    ],
    "right": [
      "1466",
      "1364",
      "1411",
      "1343"
    ],
    "answer": {
      "Kujawy — pokój w Kaliszu": "1343",
      "Pomorze Gdańskie — powrót do Polski": "1466",
      "Ziemia dobrzyńska — pierwszy pokój toruński": "1411",
      "Akademia Krakowska — założenie": "1364"
    }
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy konfliktu z Krzyżakami w XV wieku.",
    "explanation": "Wojna zaczęła się w 1409 roku, rok później stoczono bitwę pod Grunwaldem, a pokój podpisano w 1411; wojna trzynastoletnia trwała od 1454 do 1466.",
    "options": null,
    "items": [
      "Rozpoczęcie wojny trzynastoletniej",
      "Pokój toruński z 1411 roku",
      "Pokój toruński z 1466 roku",
      "Rozpoczęcie wojny w 1409 roku",
      "Bitwa pod Grunwaldem"
    ],
    "answer": [
      "Rozpoczęcie wojny w 1409 roku",
      "Bitwa pod Grunwaldem",
      "Pokój toruński z 1411 roku",
      "Rozpoczęcie wojny trzynastoletniej",
      "Pokój toruński z 1466 roku"
    ]
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który przywilej szlachecki został nadany w 1374 roku w związku z możliwością dziedziczenia polskiego tronu przez córkę Ludwika Andegaweńskiego?",
    "explanation": "Przywilej koszycki z 1374 roku wzmacniał pozycję szlachty; stanowił element ustaleń dotyczących sukcesji po Ludwiku Andegaweńskim.",
    "options": [
      "Przywilej krakowski",
      "Przywilej toruński",
      "Przywilej gnieźnieński",
      "Przywilej koszycki",
      "Przywilej kaliski",
      "Przywilej lubelski"
    ],
    "answer": 3
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "W których miastach utworzono biskupstwa w 1000 roku?",
    "explanation": "Za Bolesława Chrobrego utworzono biskupstwa w Krakowie, Wrocławiu i Kołobrzegu oraz arcybiskupstwo w Gnieźnie.",
    "image": "r03_zjazd_gnieznienski.jpg",
    "options": [
      "Kraków",
      "Poznań",
      "Wrocław",
      "Gniezno",
      "Kołobrzeg",
      "Toruń"
    ],
    "answer": [
      0,
      2,
      4
    ]
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W wyniku jednego traktatu Polska odzyskuje Pomorze Gdańskie, Warmię i ziemię chełmińską. Pozostałe terytorium zakonu krzyżackiego staje się lennem Polski. O który traktat chodzi?",
    "explanation": "Takie skutki przyniósł drugi pokój toruński z 1466 roku, kończący wojnę trzynastoletnią.",
    "image": "r03_mapa_drugiego_pokoju.jpg",
    "options": [
      "Pierwszy pokój toruński z 1411 roku",
      "Drugi pokój toruński z 1466 roku",
      "Pokój kaliski z 1343 roku",
      "Unia w Krewie z 1385 roku",
      "Unia lubelska z 1569 roku",
      "Traktat w Verdun z 843 roku"
    ],
    "answer": 1
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Za panowania króla __________ w roku __________ Prusy Książęce uznały zwierzchnictwo Polski.",
    "explanation": "W 1525 roku podczas panowania Zygmunta Starego dawny zakonny przeciwnik Polski przekształcił się w zależne Prusy Książęce.",
    "options": null,
    "altAnswers": [
      [
        "Zygmunta Starego",
        "Zygmunt Stary",
        "Zygmunta I Starego"
      ],
      [
        "1525",
        "1525 r."
      ]
    ],
    "answer": [
      "Zygmunta Starego",
      "1525"
    ]
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niezwiązaną z dynastiami rządzącymi Frankami: Klodwig, Pepin Krótki, Karol Wielki, Justynian I.",
    "explanation": "Klodwig reprezentował Merowingów, a Pepin Krótki i Karol Wielki Karolingów; Justynian I był cesarzem Bizancjum.",
    "options": null,
    "answer": "Justynian I"
  }
];

const KID_PROMPTS = {
  "R03_UPA_01": "Kiedy Rzym podzielono na dwa cesarstwa?",
  "R03_UPA_06": "Uzupełnij nazwę miejsca i rok podziału państwa Franków: traktat w __________ w roku __________.",
  "R03_BAS_01": "Jak nazwano wschodnią część dawnego cesarstwa?",
  "R03_BAS_11": "Jak nazywało się zebranie Słowian, które wybierało wodza?",
  "R03_PIA_03": "W którym roku Mieszko I przyjął chrzest: __________?",
  "R03_PIA_08": "Kiedy zaczęło się rozbicie dzielnicowe Polski?",
  "R03_ZJE_01": "Kto został królem Polski w 1320 roku?",
  "R03_JAG_05": "Kiedy była bitwa pod Grunwaldem?",
  "R03_JAG_12": "Czy unia lubelska z 1569 roku była tylko unią personalną?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Średniowiecze",
  "icon": "🏰",
  "sectionOrder": [
    "Upadek Rzymu, Frankowie i feudalizm",
    "Bizancjum, Arabowie i Słowianie",
    "Pierwsi Piastowie i rozbicie dzielnicowe",
    "Zjednoczenie i ostatni Piastowie",
    "Jagiellonowie, Krzyżacy i unie"
  ],
  "sectionIcons": {
    "Upadek Rzymu, Frankowie i feudalizm": "🏰",
    "Bizancjum, Arabowie i Słowianie": "🌙",
    "Pierwsi Piastowie i rozbicie dzielnicowe": "👑",
    "Zjednoczenie i ostatni Piastowie": "🛡️",
    "Jagiellonowie, Krzyżacy i unie": "⚔️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
