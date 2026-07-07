// Skróty sekcji:
//   RKR = Rzym od królestwa do republiki
//   IMP = Imperium Rzymskie
//   WOJ = Armia i wojny Rzymu
//   CYW = Cywilizacja starożytnego Rzymu
//   CHR = Chrześcijaństwo i schyłek starożytności
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_RKR_01",
    "section": "Rzym od królestwa do republiki",
    "type": "single_choice",
    "prompt": "Nad jaką rzeką leżał starożytny Rzym?",
    "options": [
      "Nil",
      "Tyber",
      "Dunaj",
      "Ren",
      "Eufrat",
      "Jordan"
    ],
    "answer": 1,
    "image": "/img/r03_mapa_italii_rzym.jpg",
    "explanation": "Rzym powstał w Lacjum, w środkowej Italii, nad rzeką Tyber."
  },
  {
    "id": "R03_RKR_02",
    "section": "Rzym od królestwa do republiki",
    "type": "fill_in",
    "prompt": "Zgodnie z tradycją Rzym został założony w roku __________ p.n.e., a jego pierwszym władcą był __________.",
    "options": null,
    "answer": [
      "753",
      "Romulus"
    ],
    "altAnswers": [
      [
        "753",
        "753."
      ],
      [
        "Romulus",
        "Romulusa"
      ]
    ],
    "image": "/img/r03_wilczyca_romulus_remus.jpg",
    "explanation": "Tradycja rzymska łączyła założenie miasta z rokiem 753 p.n.e. i postacią Romulusa."
  },
  {
    "id": "R03_RKR_03",
    "section": "Rzym od królestwa do republiki",
    "type": "true_false",
    "prompt": "W republice rzymskiej w zgromadzeniach mogli uczestniczyć zarówno obywatele mężczyźni, jak i kobiety.",
    "options": null,
    "answer": false,
    "explanation": "Prawo udziału w sprawowaniu władzy przysługiwało w Rzymie tylko obywatelom mężczyznom."
  },
  {
    "id": "R03_RKR_04",
    "section": "Rzym od królestwa do republiki",
    "type": "multi_select",
    "prompt": "Zaznacz prawa i obowiązki obywateli rzymskich wymienione w podręczniku.",
    "options": [
      "służba wojskowa",
      "płacenie podatków",
      "udział w zgromadzeniach",
      "kandydowanie na urzędy",
      "udział kobiet w głosowaniach",
      "dożywotnie sprawowanie konsulatu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do powinności obywateli należały służba wojskowa i płacenie podatków, a do praw udział w zgromadzeniach i kandydowanie na urzędy."
  },
  {
    "id": "R03_RKR_05",
    "section": "Rzym od królestwa do republiki",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "patrycjusze",
      "plebejusze",
      "konsulowie",
      "trybunowie ludowi"
    ],
    "right": [
      "ubożsi obywatele stanowiący większość społeczeństwa",
      "dwaj najwyżsi urzędnicy republiki",
      "bogatsi obywatele początkowo uprawnieni do urzędów",
      "urzędnicy broniący praw uboższych obywateli"
    ],
    "answer": {
      "patrycjusze": "bogatsi obywatele początkowo uprawnieni do urzędów",
      "plebejusze": "ubożsi obywatele stanowiący większość społeczeństwa",
      "konsulowie": "dwaj najwyżsi urzędnicy republiki",
      "trybunowie ludowi": "urzędnicy broniący praw uboższych obywateli"
    },
    "image": "/img/r03_senat_rzymski.jpg",
    "explanation": "Patrycjusze, plebejusze, konsulowie i trybunowie ludowi pełnili różne role w społeczeństwie i ustroju republiki."
  },
  {
    "id": "R03_RKR_06",
    "section": "Rzym od królestwa do republiki",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Lacjum, Tyber, siedem wzgórz, Kartagina.",
    "options": null,
    "answer": "Kartagina",
    "explanation": "Lacjum, Tyber i siedem wzgórz odnoszą się do położenia lub początków Rzymu, a Kartagina była odrębnym miastem-państwem."
  },
  {
    "id": "R03_RKR_07",
    "section": "Rzym od królestwa do republiki",
    "type": "scenario",
    "prompt": "Uboższy obywatel Rzymu uważa, że decyzja urzędnika szkodzi większości obywateli. Do którego urzędnika powinien zwrócić się o unieważnienie tej decyzji?",
    "options": [
      "konsula",
      "trybuna ludowego",
      "liktora",
      "króla",
      "cesarza",
      "gladiatora"
    ],
    "answer": 1,
    "explanation": "Trybun ludowy mógł unieważnić decyzję pozostałych urzędników, jeśli uznał ją za niekorzystną dla większości obywateli."
  },
  {
    "id": "R03_RKR_08",
    "section": "Rzym od królestwa do republiki",
    "type": "riddle",
    "prompt": "Forma rządów, w której najwyższe organy władzy są wybierane przez obywateli na określony czas, to...",
    "options": null,
    "answer": "republika",
    "altAnswers": [
      "republika",
      "rzeczpospolita",
      "Republika"
    ],
    "explanation": "Republika oznaczała dla Rzymian wspólnotę obywateli połączonych prawami i obowiązkami."
  },
  {
    "id": "R03_RKR_09",
    "section": "Rzym od królestwa do republiki",
    "type": "single_choice",
    "prompt": "Czym był senat w republice rzymskiej?",
    "options": [
      "radą byłych urzędników",
      "zgromadzeniem wszystkich kobiet",
      "oddziałem gladiatorów",
      "kolegium kapłanów",
      "grupą greckich kolonistów",
      "flotą wojenną"
    ],
    "answer": 0,
    "image": "/img/r03_senat_rzymski.jpg",
    "explanation": "Senat był radą złożoną z doświadczonych byłych urzędników; doradzał urzędnikom i zajmował się m.in. wojną, pokojem i poselstwami."
  },
  {
    "id": "R03_RKR_10",
    "section": "Rzym od królestwa do republiki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i zjawiska w porządku chronologicznym.",
    "options": null,
    "items": [
      "walka plebejuszy o równouprawnienie",
      "ustanowienie republiki",
      "rządy królów",
      "założenie Rzymu"
    ],
    "answer": [
      "założenie Rzymu",
      "rządy królów",
      "ustanowienie republiki",
      "walka plebejuszy o równouprawnienie"
    ],
    "explanation": "Najpierw powstało miasto Rzym, potem trwał okres królewski, w 509 roku p.n.e. ustanowiono republikę, a później plebejusze walczyli o pełne prawa."
  },
  {
    "id": "R03_IMP_01",
    "section": "Imperium Rzymskie",
    "type": "single_choice",
    "prompt": "Kiedy ostatnie niezależne miasto italskie dostało się pod władzę Rzymu?",
    "options": [
      "w VIII wieku p.n.e.",
      "w VI wieku p.n.e.",
      "w połowie III wieku p.n.e.",
      "w 44 roku p.n.e.",
      "w 313 roku n.e.",
      "w 476 roku n.e."
    ],
    "answer": 2,
    "explanation": "Podręcznik podaje, że stało się to w połowie III wieku p.n.e."
  },
  {
    "id": "R03_IMP_02",
    "section": "Imperium Rzymskie",
    "type": "true_false",
    "prompt": "Po zakończeniu walk Rzymianie odbierali pokonanym miastom Italii wszystkie wewnętrzne prawa.",
    "options": null,
    "answer": false,
    "explanation": "Pokonane miasta zachowywały swoje wewnętrzne prawa, ale musiały uznać zwierzchnictwo Rzymu i oddać wojska pod jego dowództwo."
  },
  {
    "id": "R03_IMP_03",
    "section": "Imperium Rzymskie",
    "type": "multi_select",
    "prompt": "Zaznacz korzyści, które Rzym czerpał z podbojów i prowincji.",
    "options": [
      "łupy wojenne",
      "niewolnicy",
      "część ziem uprawnych",
      "pieniądze i podatki",
      "produkty rolne i rzemieślnicze",
      "równy udział prowincji w rzymskich zgromadzeniach"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Z podbojów i prowincji do Rzymu napływały łupy, ziemie, podatki, produkty i niewolnicy."
  },
  {
    "id": "R03_IMP_04",
    "section": "Imperium Rzymskie",
    "type": "fill_in",
    "prompt": "Terytoria zdobyte poza obszarem Italii Rzymianie nazywali __________, a władzę sprawowali tam przysyłani z Rzymu __________.",
    "options": null,
    "answer": [
      "prowincjami",
      "urzędnicy"
    ],
    "altAnswers": [
      [
        "prowincjami",
        "prowincje"
      ],
      [
        "urzędnicy",
        "rzymscy urzędnicy"
      ]
    ],
    "image": "/img/r03_mapa_imperium_rzymskiego.jpg",
    "explanation": "Poza Italią Rzym tworzył prowincje, którymi zarządzali urzędnicy przysyłani z Rzymu."
  },
  {
    "id": "R03_IMP_05",
    "section": "Imperium Rzymskie",
    "type": "riddle",
    "prompt": "Potężne państwo, mocarstwo podbijające inne kraje, to...",
    "options": null,
    "answer": "imperium",
    "altAnswers": [
      "imperium",
      "Imperium"
    ],
    "explanation": "Podręcznik definiuje imperium jako potężne państwo, które podbija inne kraje."
  },
  {
    "id": "R03_IMP_06",
    "section": "Imperium Rzymskie",
    "type": "match",
    "prompt": "Połącz pojęcie lub postać z opisem.",
    "options": null,
    "left": [
      "Kartagina",
      "Galia",
      "prowincja",
      "Oktawian August"
    ],
    "right": [
      "potężne miasto-państwo założone przez Fenicjan w północnej Afryce",
      "obszar dzisiejszej Francji podbity przez Juliusza Cezara",
      "terytorium zdobyte poza Italią i włączone do państwa rzymskiego",
      "pierwszy cesarz rzymski"
    ],
    "answer": {
      "Kartagina": "potężne miasto-państwo założone przez Fenicjan w północnej Afryce",
      "Galia": "obszar dzisiejszej Francji podbity przez Juliusza Cezara",
      "prowincja": "terytorium zdobyte poza Italią i włączone do państwa rzymskiego",
      "Oktawian August": "pierwszy cesarz rzymski"
    },
    "explanation": "Pojęcia i postacie odnoszą się do powstania Imperium Rzymskiego oraz narodzin cesarstwa."
  },
  {
    "id": "R03_IMP_07",
    "section": "Imperium Rzymskie",
    "type": "scenario",
    "prompt": "Senat odebrał Juliuszowi Cezarowi dowództwo po jego sukcesach w Galii. Cezar zlekceważył tę decyzję i wkroczył z armią do Italii. Co rozpoczęło się w państwie rzymskim?",
    "options": [
      "wojna domowa",
      "założenie Rzymu",
      "wojna trojańska",
      "reforma alfabetu",
      "upadek Kartaginy",
      "budowa akweduktu"
    ],
    "answer": 0,
    "explanation": "Wkroczenie Cezara z wojskiem do Italii było złamaniem prawa i początkiem wojny domowej."
  },
  {
    "id": "R03_IMP_08",
    "section": "Imperium Rzymskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "nadanie Oktawianowi tytułu Augusta",
      "wojny z Kartaginą",
      "zamordowanie Juliusza Cezara",
      "podbicie Italii",
      "zwycięstwo Oktawiana nad przeciwnikami"
    ],
    "answer": [
      "podbicie Italii",
      "wojny z Kartaginą",
      "zamordowanie Juliusza Cezara",
      "zwycięstwo Oktawiana nad przeciwnikami",
      "nadanie Oktawianowi tytułu Augusta"
    ],
    "image": "/img/r03_mapa_imperium_rzymskiego.jpg",
    "explanation": "Najpierw Rzym podbił Italię i pokonał Kartaginę, później Cezar zdobył pełnię władzy i został zamordowany, a po wojnach domowych Oktawian otrzymał tytuł Augusta."
  },
  {
    "id": "R03_IMP_09",
    "section": "Imperium Rzymskie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Grecja, Egipt, Palestyna, Lacjum.",
    "options": null,
    "answer": "Lacjum",
    "explanation": "Grecja, Egipt i Palestyna zostały wymienione jako ziemie zdobywane przez Rzym poza Italią, a Lacjum było krainą w środkowej Italii z Rzymem."
  },
  {
    "id": "R03_IMP_10",
    "section": "Imperium Rzymskie",
    "type": "single_choice",
    "prompt": "Kogo podręcznik uznaje za pierwszego cesarza rzymskiego?",
    "options": [
      "Romulusa",
      "Tarkwiniusza Pysznego",
      "Juliusza Cezara",
      "Oktawiana Augusta",
      "Spartakusa",
      "Odoakra"
    ],
    "answer": 3,
    "explanation": "Za pierwszego cesarza rzymskiego uznaje się Oktawiana Augusta, który skupił najwyższą władzę po wojnach domowych."
  },
  {
    "id": "R03_WOJ_01",
    "section": "Armia i wojny Rzymu",
    "type": "single_choice",
    "prompt": "Ilu żołnierzy liczył rzymski legion w okresie opisanym w infografice?",
    "options": [
      "około 300",
      "około 1000",
      "około 4500",
      "około 10 000",
      "około 50 000",
      "około 250 000"
    ],
    "answer": 2,
    "explanation": "Infografika podaje, że legion liczył około 4500 żołnierzy, a w późniejszym okresie 6000."
  },
  {
    "id": "R03_WOJ_02",
    "section": "Armia i wojny Rzymu",
    "type": "true_false",
    "prompt": "Trzon armii rzymskiej stanowiła lekkozbrojna jazda.",
    "options": null,
    "answer": false,
    "explanation": "Trzon armii rzymskiej stanowiła ciężkozbrojna piechota."
  },
  {
    "id": "R03_WOJ_03",
    "section": "Armia i wojny Rzymu",
    "type": "fill_in",
    "prompt": "Ludy żyjące poza granicami Imperium Rzymskiego, które Rzymianie uznawali za słabiej rozwinięte cywilizacyjnie, nazywano __________.",
    "options": null,
    "answer": [
      "barbarzyńcami"
    ],
    "altAnswers": [
      [
        "barbarzyńcami",
        "barbarzyńcy",
        "barbarzyncami",
        "barbarzyncy"
      ]
    ],
    "explanation": "Rzymianie, podobnie jak wcześniej Grecy, używali określenia barbarzyńcy."
  },
  {
    "id": "R03_WOJ_04",
    "section": "Armia i wojny Rzymu",
    "type": "multi_select",
    "prompt": "Zaznacz elementy zabezpieczające rzymski obóz wojskowy przed atakiem.",
    "options": [
      "wał ziemny",
      "drewniana palisada",
      "głęboki rów",
      "kopuła",
      "akwedukt",
      "łuk triumfalny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r03_oboz_legionowy.jpg",
    "explanation": "Rzymski obóz chroniły między innymi wał ziemny, drewniana palisada i głęboki rów."
  },
  {
    "id": "R03_WOJ_05",
    "section": "Armia i wojny Rzymu",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "Galowie",
      "Germanowie",
      "Wał Hadriana",
      "legion"
    ],
    "right": [
      "mieszkańcy obszarów dzisiejszej Francji",
      "ludy mieszkające na wschód od Renu i na północ od Dunaju",
      "umocnienie chroniące rzymską Brytanię",
      "wielka jednostka armii rzymskiej"
    ],
    "answer": {
      "Galowie": "mieszkańcy obszarów dzisiejszej Francji",
      "Germanowie": "ludy mieszkające na wschód od Renu i na północ od Dunaju",
      "Wał Hadriana": "umocnienie chroniące rzymską Brytanię",
      "legion": "wielka jednostka armii rzymskiej"
    },
    "explanation": "Galowie, Germanowie, Wał Hadriana i legion pojawiają się w opisie rzymskiej wojskowości i granic."
  },
  {
    "id": "R03_WOJ_06",
    "section": "Armia i wojny Rzymu",
    "type": "scenario",
    "prompt": "Młody legionista pierwszy raz trafia do nowego obozu. Mimo to szybko znajduje swój namiot i wie, dokąd biec w razie ataku. Dlaczego?",
    "options": [
      "obozy budowano zawsze według tego samego wzoru",
      "każdy obóz miał plan Aten",
      "legioniści mieszkali wyłącznie w miastach",
      "obozy nie miały zabezpieczeń",
      "każdy żołnierz spał w senacie",
      "obozem kierował gladiator"
    ],
    "answer": 0,
    "image": "/img/r03_oboz_legionowy.jpg",
    "explanation": "Rzymskie obozy wojskowe budowano według tego samego wzoru, co ułatwiało żołnierzom orientację."
  },
  {
    "id": "R03_WOJ_07",
    "section": "Armia i wojny Rzymu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wał ziemny, drewniana palisada, głęboki rów, akwedukt.",
    "options": null,
    "answer": "akwedukt",
    "explanation": "Wał, palisada i rów były elementami obronnymi obozu, a akwedukt służył do doprowadzania wody do miast."
  },
  {
    "id": "R03_WOJ_08",
    "section": "Armia i wojny Rzymu",
    "type": "riddle",
    "prompt": "Wielka jednostka armii rzymskiej licząca tysiące żołnierzy to...",
    "options": null,
    "answer": "legion",
    "altAnswers": [
      "legion",
      "legion rzymski"
    ],
    "explanation": "Rzymska armia dzieliła się na legiony."
  },
  {
    "id": "R03_WOJ_09",
    "section": "Armia i wojny Rzymu",
    "type": "true_false",
    "prompt": "Galia została ostatecznie włączona w granice Rzymu w I wieku p.n.e.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje, że w I wieku p.n.e. Galia została ostatecznie włączona do Rzymu."
  },
  {
    "id": "R03_WOJ_10",
    "section": "Armia i wojny Rzymu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do kategorii.",
    "options": null,
    "items": [
      "legion",
      "ciężkozbrojna piechota",
      "obóz wojskowy",
      "Wał Hadriana",
      "termy",
      "Panteon",
      "teatr",
      "akwedukt"
    ],
    "categories": [
      "wojskowość",
      "życie cywilne i budownictwo"
    ],
    "answer": {
      "wojskowość": [
        "legion",
        "ciężkozbrojna piechota",
        "obóz wojskowy",
        "Wał Hadriana"
      ],
      "życie cywilne i budownictwo": [
        "termy",
        "Panteon",
        "teatr",
        "akwedukt"
      ]
    },
    "explanation": "Legion, piechota i obozy dotyczą wojskowości, a termy, Panteon i akwedukt należą do cywilnego dziedzictwa rzymskiego."
  },
  {
    "id": "R03_CYW_01",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "single_choice",
    "prompt": "Co oznacza romanizacja?",
    "options": [
      "przejmowanie kultury, obyczajów i łaciny Rzymian",
      "zakładanie wyłącznie greckich kolonii",
      "zakaz budowy dróg",
      "zmiana republiki w demokrację ateńską",
      "ucieczka Germanów z imperium",
      "spisywanie tylko mitów greckich"
    ],
    "answer": 0,
    "explanation": "Romanizacja to przejmowanie przez różne ludy rzymskiej kultury, obyczajów i języka łacińskiego."
  },
  {
    "id": "R03_CYW_02",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia techniczne lub budowlane Rzymian wymienione w podręczniku.",
    "options": [
      "sieć dróg",
      "łuk i kopuła",
      "zaprawa cementowa",
      "akwedukty",
      "termy",
      "druk ruchomą czcionką"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rzymianie budowali sieć dróg, stosowali łuk i kopułę, używali zaprawy cementowej oraz wznosili akwedukty i termy."
  },
  {
    "id": "R03_CYW_03",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "fill_in",
    "prompt": "Rzymianie z dumą powtarzali powiedzenie: „Wszystkie drogi prowadzą do __________”.",
    "options": null,
    "answer": [
      "Rzymu"
    ],
    "altAnswers": [
      [
        "Rzymu",
        "rzymu",
        "Rzym"
      ]
    ],
    "explanation": "Powiedzenie nawiązuje do sieci dróg łączących stolicę imperium z odległymi prowincjami."
  },
  {
    "id": "R03_CYW_04",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "match",
    "prompt": "Połącz budowlę z jej funkcją.",
    "options": null,
    "left": [
      "Panteon",
      "akwedukt",
      "łuk triumfalny",
      "termy"
    ],
    "right": [
      "świątynia wszystkich bogów",
      "wodociąg doprowadzający wodę do miasta",
      "budowla wystawiana ku czci zwycięskiego wodza",
      "publiczne łaźnie"
    ],
    "answer": {
      "Panteon": "świątynia wszystkich bogów",
      "akwedukt": "wodociąg doprowadzający wodę do miasta",
      "łuk triumfalny": "budowla wystawiana ku czci zwycięskiego wodza",
      "termy": "publiczne łaźnie"
    },
    "image": "/img/r03_budowle_rzymskie.jpg",
    "explanation": "Rzymskie budowle łączyły piękny wygląd z praktycznym zastosowaniem lub funkcją reprezentacyjną."
  },
  {
    "id": "R03_CYW_05",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "riddle",
    "prompt": "Sztuka wypowiadania się, której uczono synów najbogatszych Rzymian, to...",
    "options": null,
    "answer": "retoryka",
    "altAnswers": [
      "retoryka",
      "sztuka wymowy"
    ],
    "explanation": "Retoryka przygotowywała młodych obywateli do przemawiania na zgromadzeniach i w senacie."
  },
  {
    "id": "R03_CYW_06",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "true_false",
    "prompt": "Rzymianie nie stworzyli odrębnej nauki prawa, a ich zasady prawne nie miały później znaczenia.",
    "options": null,
    "answer": false,
    "explanation": "Prawo stało się w Rzymie odrębną nauką, a wiele rzymskich zasad prawnych obowiązuje do dziś."
  },
  {
    "id": "R03_CYW_07",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Jowisz, Junona, Minerwa, Jezus z Nazaretu.",
    "options": null,
    "answer": "Jezus z Nazaretu",
    "explanation": "Jowisz, Junona i Minerwa byli bogami rzymskiej religii politeistycznej, a Jezus z Nazaretu był założycielem chrześcijaństwa."
  },
  {
    "id": "R03_CYW_08",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "single_choice",
    "prompt": "Który rzymski poeta napisał Eneidę?",
    "options": [
      "Wergiliusz",
      "Horacy",
      "Owidiusz",
      "Liwiusz",
      "Tacyt",
      "Cyceron"
    ],
    "answer": 0,
    "explanation": "Najchętniej czytanym rzymskim poetą był Wergiliusz, autor Eneidy."
  },
  {
    "id": "R03_CYW_09",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "scenario",
    "prompt": "Syn zamożnego Rzymianina ma w przyszłości przemawiać na zgromadzeniu i w senacie. Jakiego przedmiotu powinien się uczyć u nauczyciela?",
    "options": [
      "retoryki",
      "walk gladiatorów",
      "budowy palisady",
      "sztuki wróżb",
      "szycia togi",
      "kopania rowów"
    ],
    "answer": 0,
    "explanation": "Najbogatsi Rzymianie wysyłali synów do nauczycieli retoryki, czyli sztuki wypowiadania się."
  },
  {
    "id": "R03_CYW_10",
    "section": "Cywilizacja starożytnego Rzymu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do kategorii.",
    "options": null,
    "items": [
      "walki gladiatorów",
      "wyścigi zaprzęgów",
      "sztuki teatralne",
      "akwedukty",
      "drogi",
      "mosty"
    ],
    "categories": [
      "widowiska",
      "technika i budownictwo"
    ],
    "answer": {
      "widowiska": [
        "walki gladiatorów",
        "wyścigi zaprzęgów",
        "sztuki teatralne"
      ],
      "technika i budownictwo": [
        "akwedukty",
        "drogi",
        "mosty"
      ]
    },
    "image": "/img/r03_budowle_rzymskie.jpg",
    "explanation": "Walki gladiatorów, wyścigi zaprzęgów i sztuki teatralne były widowiskami, a akwedukty, drogi i mosty należały do osiągnięć techniczno-budowlanych."
  },
  {
    "id": "R03_CHR_01",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "single_choice",
    "prompt": "W jakiej krainie narodziło się chrześcijaństwo?",
    "options": [
      "Palestyna",
      "Galia",
      "Brytania",
      "Kartagina",
      "Lacjum",
      "Germania"
    ],
    "answer": 0,
    "explanation": "Chrześcijaństwo narodziło się w I wieku n.e. w Palestynie pod panowaniem Rzymu."
  },
  {
    "id": "R03_CHR_02",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "true_false",
    "prompt": "Żydzi wyróżniali się w Imperium Rzymskim wiarą w wielu bogów.",
    "options": null,
    "answer": false,
    "explanation": "Żydzi wyróżniali się monoteizmem, czyli wiarą w jedynego Boga."
  },
  {
    "id": "R03_CHR_03",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "fill_in",
    "prompt": "Założycielem chrześcijaństwa był __________ z __________.",
    "options": null,
    "answer": [
      "Jezus",
      "Nazaretu"
    ],
    "altAnswers": [
      [
        "Jezus",
        "Jezus Chrystus"
      ],
      [
        "Nazaretu",
        "Nazaret"
      ]
    ],
    "explanation": "Podręcznik wskazuje Jezusa z Nazaretu jako założyciela chrześcijaństwa."
  },
  {
    "id": "R03_CHR_04",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym znaczeniem.",
    "options": null,
    "left": [
      "Ewangelia",
      "Nowy Testament",
      "poganie",
      "papieże"
    ],
    "right": [
      "Dobra Nowina, czyli nauka chrześcijan",
      "zbiór najstarszych chrześcijańskich tekstów religijnych",
      "określenie wyznawców religii innych niż judaizm i chrześcijaństwo",
      "biskupi Rzymu uznawani za następców Piotra i Pawła"
    ],
    "answer": {
      "Ewangelia": "Dobra Nowina, czyli nauka chrześcijan",
      "Nowy Testament": "zbiór najstarszych chrześcijańskich tekstów religijnych",
      "poganie": "określenie wyznawców religii innych niż judaizm i chrześcijaństwo",
      "papieże": "biskupi Rzymu uznawani za następców Piotra i Pawła"
    },
    "explanation": "Pojęcia te porządkują podstawowe informacje o chrześcijaństwie i Kościele w imperium."
  },
  {
    "id": "R03_CHR_05",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny nieufności i prześladowań wobec pierwszych chrześcijan podane w rozdziale.",
    "options": [
      "odmawiali składania ofiar rzymskim bogom",
      "nie uznawali boskości cesarzy",
      "wyznawali religię monoteistyczną",
      "zawsze dowodzili legionami",
      "burzyli wszystkie akwedukty",
      "zakładali greckie kolonie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Chrześcijanie budzili nieufność, ponieważ nie chcieli składać ofiar rzymskim bogom ani uznawać boskości cesarzy."
  },
  {
    "id": "R03_CHR_06",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "ogłoszenie chrześcijaństwa religią państwową",
      "narodziny Jezusa",
      "przyznanie chrześcijanom wolności religijnej",
      "upadek cesarstwa zachodniorzymskiego",
      "pierwsze prześladowania chrześcijan w Rzymie"
    ],
    "answer": [
      "narodziny Jezusa",
      "pierwsze prześladowania chrześcijan w Rzymie",
      "przyznanie chrześcijanom wolności religijnej",
      "ogłoszenie chrześcijaństwa religią państwową",
      "upadek cesarstwa zachodniorzymskiego"
    ],
    "explanation": "Kolejność wydarzeń to narodziny Jezusa, pierwsze prześladowania w 64 roku, wolność religijna w 313 roku, religia państwowa w 380 roku i upadek cesarstwa zachodniorzymskiego w 476 roku."
  },
  {
    "id": "R03_CHR_07",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "single_choice",
    "prompt": "Który symbol pierwszych chrześcijan miał nazwę pochodzącą od greckiego słowa ichtys?",
    "options": [
      "ryba",
      "orzeł",
      "wieniec laurowy",
      "piorun",
      "rzymska toga",
      "pęk rózeg"
    ],
    "answer": 0,
    "image": "/img/r03_symbole_chrzescijanstwa.jpg",
    "explanation": "Ichtýs po grecku oznacza rybę; znak ryby był dla chrześcijan skrótem wyznania wiary w Jezusa Chrystusa."
  },
  {
    "id": "R03_CHR_08",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "scenario",
    "prompt": "Chrześcijanin żyjący po 313 roku n.e. chce publicznie modlić się i pomagać we wznoszeniu kościoła. Dlaczego może to robić bez wcześniejszych przeszkód?",
    "options": [
      "Konstantyn Wielki przyznał chrześcijanom wolność religijną",
      "Romulus założył Rzym",
      "Cezar podbił Galię",
      "Tarkwiniusz Pyszny został królem",
      "Spartakus stłumił powstanie",
      "Odoaker został konsulem"
    ],
    "answer": 0,
    "explanation": "W 313 roku Konstantyn Wielki przyznał chrześcijanom wolność religijną, co pozwoliło im jawnie budować kościoły i odprawiać nabożeństwa."
  },
  {
    "id": "R03_CHR_09",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "single_choice",
    "prompt": "Który cesarz w 380 roku n.e. zakazał wyznawania religii pogańskich, czyniąc chrześcijaństwo religią państwową?",
    "options": [
      "Teodozjusz",
      "Konstantyn Wielki",
      "Oktawian August",
      "Trajan",
      "Juliusz Cezar",
      "Odoaker"
    ],
    "answer": 0,
    "explanation": "W 380 roku n.e. cesarz Teodozjusz ogłosił chrześcijaństwo religią państwową w Cesarstwie Rzymskim."
  },
  {
    "id": "R03_CHR_10",
    "section": "Chrześcijaństwo i schyłek starożytności",
    "type": "multi_select",
    "prompt": "Wskaż przyczyny upadku Cesarstwa Rzymskiego na Zachodzie wymienione w rozdziale.",
    "options": [
      "najazdy ludów barbarzyńskich",
      "rabowanie rzymskich ziem",
      "powstawanie germańskich królestw",
      "trudności w zarządzaniu rozległym imperium",
      "walka plebejuszy z patrycjuszami",
      "wypędzenie Tarkwiniusza Pysznego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r03_najazdy_barbarzyncow.jpg",
    "explanation": "Upadek cesarstwa na Zachodzie wiązał się z najazdami barbarzyńców, rabowaniem ziem, osiedlaniem się części ludów w granicach imperium i powstawaniem germańskich królestw."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Według legendy Romulus i Remus byli synami boga wojny __________, a wykarmiła ich __________.",
    "options": null,
    "answer": [
      "Marsa",
      "wilczyca"
    ],
    "altAnswers": [
      [
        "Marsa",
        "Mars"
      ],
      [
        "wilczyca",
        "Wilczyca"
      ]
    ],
    "image": "/img/r03_wilczyca_romulus_remus.jpg",
    "explanation": "Legenda podaje, że bliźniacy byli synami Marsa, a po porzuceniu nad Tybrem wykarmiła ich wilczyca."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Której zalety położenia Rzymu nie wymienił Cyceron w przytoczonym fragmencie?",
    "options": [
      "spławna rzeka o spokojnym nurcie",
      "położenie niedaleko wybrzeża",
      "teren obfitujący w źródła wody",
      "przewiewne pagórki",
      "cień padający w doliny",
      "kopalnie złota w obrębie miasta"
    ],
    "answer": 5,
    "explanation": "Cyceron chwalił położenie nad spławną rzeką, bliskość wybrzeża, źródła wody i przewiewne wzgórza; nie pisał o kopalniach złota."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zadania senatu rzymskiego wymienione w rozdziale.",
    "options": [
      "udzielanie rad urzędnikom",
      "przyjmowanie poselstw zagranicznych",
      "decydowanie w sprawach wojny i pokoju",
      "wydawanie wynagrodzeń wszystkim urzędnikom",
      "dowodzenie każdą jednostką legionu",
      "wybieranie królowej Rzymu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r03_senat_rzymski.jpg",
    "explanation": "Senat doradzał urzędnikom, przyjmował poselstwa zagraniczne oraz decydował w sprawach wojny i pokoju."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz autora z dziełem albo rolą wskazaną w podręczniku.",
    "options": null,
    "left": [
      "Wergiliusz",
      "Cyceron",
      "Juliusz Cezar",
      "św. Paweł"
    ],
    "right": [
      "Eneida",
      "wzór mów i wystąpień publicznych",
      "O wojnie galijskiej i O wojnie domowej",
      "Listy w Nowym Testamencie"
    ],
    "answer": {
      "Wergiliusz": "Eneida",
      "Cyceron": "wzór mów i wystąpień publicznych",
      "Juliusz Cezar": "O wojnie galijskiej i O wojnie domowej",
      "św. Paweł": "Listy w Nowym Testamencie"
    },
    "explanation": "Rozdział wymienia Wergiliusza jako autora Eneidy, Cycerona jako wzór mów, Juliusza Cezara jako autora dzieł o wojnach oraz św. Pawła jako autora listów w Nowym Testamencie."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż formy państwa rzymskiego od najwcześniejszej do najpóźniejszej.",
    "options": null,
    "items": [
      "cesarstwo",
      "republika",
      "królestwo"
    ],
    "answer": [
      "królestwo",
      "republika",
      "cesarstwo"
    ],
    "explanation": "Dzieje Rzymu w rozdziale porządkują trzy etapy: królestwo, republikę i cesarstwo."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Za Oktawiana Augusta formalnie nadal istniały republikańskie urzędy, lecz straciły dawne znaczenie.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że senat, konsulowie i inni urzędnicy nadal istnieli, ale rzeczywistą władzę sprawował Oktawian August."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Zbiór prawa rzymskiego uporządkowany i spisany z inicjatywy cesarza Justyniana to...",
    "options": null,
    "answer": "Kodeks Justyniana",
    "altAnswers": [
      "Kodeks Justyniana",
      "kodeks Justyniana",
      "Codex Iustinianus"
    ],
    "explanation": "Kodeks Justyniana zebrał i uporządkował dorobek prawa rzymskiego na początku średniowiecza."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń analizuje mapę granic Imperium Rzymskiego w Europie. Ma wskazać dwie wielkie rzeki, na których opierała się granica państwa. Który zestaw powinien wybrać?",
    "options": [
      "Ren i Dunaj",
      "Tyber i Nil",
      "Eufrat i Jordan",
      "Sekwana i Tamiza",
      "Wisła i Odra",
      "Tag i Ebro"
    ],
    "answer": 0,
    "image": "/img/r03_mapa_imperium_rzymskiego.jpg",
    "explanation": "Granice Rzymu w Europie opierały się między innymi na Renie i Dunaju."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do epoki względem narodzin Chrystusa.",
    "options": null,
    "items": [
      "założenie Rzymu",
      "powstanie republiki",
      "śmierć Juliusza Cezara",
      "wolność religijna dla chrześcijan",
      "chrześcijaństwo religią państwową",
      "upadek cesarstwa zachodniorzymskiego"
    ],
    "categories": [
      "p.n.e.",
      "n.e."
    ],
    "answer": {
      "p.n.e.": [
        "założenie Rzymu",
        "powstanie republiki",
        "śmierć Juliusza Cezara"
      ],
      "n.e.": [
        "wolność religijna dla chrześcijan",
        "chrześcijaństwo religią państwową",
        "upadek cesarstwa zachodniorzymskiego"
      ]
    },
    "explanation": "Założenie Rzymu, powstanie republiki i śmierć Cezara należą do czasów p.n.e., a edykt Konstantyna, decyzja Teodozjusza i upadek cesarstwa na Zachodzie do n.e."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: res publica, rzeczpospolita, rzecz wspólna, fasces.",
    "options": null,
    "answer": "fasces",
    "explanation": "Res publica, rzecz wspólna i rzeczpospolita odnoszą się do pojęcia republiki, a fasces był symbolem władzy urzędników."
  }
];

const KID_PROMPTS = {
  "R03_RKR_07": "Który urzędnik bronił uboższych obywateli?",
  "R03_IMP_07": "Co zaczęło się, gdy Cezar wszedł z wojskiem do Italii?",
  "R03_WOJ_06": "Dlaczego rzymskie obozy wyglądały podobnie?",
  "R03_CYW_09": "Czego uczył się bogaty chłopiec, żeby dobrze przemawiać?",
  "R03_CHR_08": "Co zmieniło się dla chrześcijan w 313 roku?",
  "R03_HARD_02": "Która rzecz nie była zaletą położenia Rzymu według Cycerona?",
  "R03_HARD_08": "Jakie dwie rzeki były ważnymi granicami Rzymu w Europie?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Starożytny Rzym",
  "icon": "🏛️",
  "sectionOrder": [
    "Rzym od królestwa do republiki",
    "Imperium Rzymskie",
    "Armia i wojny Rzymu",
    "Cywilizacja starożytnego Rzymu",
    "Chrześcijaństwo i schyłek starożytności",
    "Super trudne"
  ],
  "sectionIcons": {
    "Rzym od królestwa do republiki": "🏛️",
    "Imperium Rzymskie": "🦅",
    "Armia i wojny Rzymu": "⚔️",
    "Cywilizacja starożytnego Rzymu": "🏟️",
    "Chrześcijaństwo i schyłek starożytności": "✝️",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
