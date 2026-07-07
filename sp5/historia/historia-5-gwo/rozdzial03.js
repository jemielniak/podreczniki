// Skróty sekcji:
//   POC = Początki i armia Rzymu
//   UST = Republika i cesarstwo
//   SPO = Społeczeństwo rzymskie
//   OSI = Osiągnięcia i rozrywki
//   CHR = Narodziny chrześcijaństwa
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_POC_01",
    "section": "Początki i armia Rzymu",
    "type": "single_choice",
    "prompt": "Według rzymskiej tradycji Rzym został założony w roku...",
    "image": "/img/r03_wilczyca_romulus_remus.jpg",
    "options": [
      "753 p.n.e.",
      "500 p.n.e.",
      "49 p.n.e.",
      "30 p.n.e.",
      "313 n.e.",
      "476 n.e."
    ],
    "answer": 0,
    "explanation": "Rzymianie wierzyli, że ich miasto powstało w 753 r. p.n.e."
  },
  {
    "id": "R03_POC_02",
    "section": "Początki i armia Rzymu",
    "type": "fill_in",
    "prompt": "Półwysep Apeniński nazywano w starożytności __________, a starożytni Rzymianie mówili po __________.",
    "options": null,
    "answer": [
      "Italią",
      "łacinie"
    ],
    "altAnswers": [
      [
        "Italią",
        "Italia",
        "Italii"
      ],
      [
        "łacinie",
        "łacina",
        "po łacinie"
      ]
    ],
    "explanation": "Italia była starożytną nazwą Półwyspu Apenińskiego, a językiem Rzymian była łacina."
  },
  {
    "id": "R03_POC_03",
    "section": "Początki i armia Rzymu",
    "type": "multi_select",
    "prompt": "Zaznacz obszary, które do II w. n.e. znalazły się w granicach Imperium Rzymskiego.",
    "image": "/img/r03_imperium_rzymskie_mapa.jpg",
    "options": [
      "Brytania",
      "Hiszpania",
      "Mezopotamia",
      "Chiny",
      "Skandynawia",
      "Japonia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Imperium w II w. n.e. obejmowało ziemie od Brytanii i Hiszpanii po Mezopotamię oraz wybrzeża Morza Śródziemnego w Europie, Azji i Afryce."
  },
  {
    "id": "R03_POC_04",
    "section": "Początki i armia Rzymu",
    "type": "true_false",
    "prompt": "Imperium Rzymskie w II w. n.e. było największym mocarstwem starożytności.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że Imperium Rzymskie było największym mocarstwem starożytności."
  },
  {
    "id": "R03_POC_05",
    "section": "Początki i armia Rzymu",
    "type": "single_choice",
    "prompt": "Podstawową jednostką armii rzymskiej był...",
    "options": [
      "legion",
      "falanga",
      "polis",
      "senat",
      "akwedukt",
      "termopolium"
    ],
    "answer": 0,
    "explanation": "Podstawową jednostką armii rzymskiej był legion liczący kilka tysięcy żołnierzy."
  },
  {
    "id": "R03_POC_06",
    "section": "Początki i armia Rzymu",
    "type": "fill_in",
    "prompt": "Jeden legion liczył około __________ tysięcy ludzi i miał także około __________ jeźdźców.",
    "options": null,
    "answer": [
      "4,5–6",
      "300"
    ],
    "altAnswers": [
      [
        "4,5–6",
        "4,5-6",
        "od 4,5 do 6",
        "4,5 do 6"
      ],
      [
        "300",
        "trzystu",
        "300 jeźdźców"
      ]
    ],
    "explanation": "Legion liczył 4,5–6 tysięcy ludzi i składał się głównie z ciężkozbrojnej piechoty oraz 300 jeźdźców."
  },
  {
    "id": "R03_POC_07",
    "section": "Początki i armia Rzymu",
    "type": "multi_select",
    "prompt": "Które elementy wyposażenia legionisty miały chronić jego ciało?",
    "image": "/img/r03_legionista_wyposazenie.jpg",
    "options": [
      "hełm",
      "pancerz",
      "tarcza",
      "oszczep",
      "sandały",
      "krótki miecz"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Hełm, pancerz i tarcza bezpośrednio chroniły legionistę przed ciosami przeciwnika."
  },
  {
    "id": "R03_POC_08",
    "section": "Początki i armia Rzymu",
    "type": "true_false",
    "prompt": "Od schyłku II w. p.n.e. armia rzymska była armią zawodową.",
    "options": null,
    "answer": true,
    "explanation": "Żołnierze otrzymywali wtedy od państwa broń, wyżywienie i żołd."
  },
  {
    "id": "R03_POC_09",
    "section": "Początki i armia Rzymu",
    "type": "single_choice",
    "prompt": "Jak długo trwała służba w rzymskiej armii zawodowej?",
    "options": [
      "20–25 lat",
      "2–3 lata",
      "5 lat",
      "40 lat",
      "do końca życia",
      "jeden rok"
    ],
    "answer": 0,
    "explanation": "Służba w armii rzymskiej trwała 20–25 lat."
  },
  {
    "id": "R03_POC_10",
    "section": "Początki i armia Rzymu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: hełm, pancerz, tarcza, senat.",
    "options": null,
    "answer": "senat",
    "explanation": "Hełm, pancerz i tarcza to elementy wyposażenia żołnierza, a senat był instytucją polityczną."
  },
  {
    "id": "R03_POC_11",
    "section": "Początki i armia Rzymu",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "Italia",
      "legion",
      "żołd",
      "Mezopotamia"
    ],
    "right": [
      "pieniądze wypłacane żołnierzowi",
      "podstawowa jednostka armii rzymskiej",
      "starożytna nazwa Półwyspu Apenińskiego",
      "wschodni kraniec zasięgu imperium w II w. n.e."
    ],
    "answer": {
      "Italia": "starożytna nazwa Półwyspu Apenińskiego",
      "legion": "podstawowa jednostka armii rzymskiej",
      "żołd": "pieniądze wypłacane żołnierzowi",
      "Mezopotamia": "wschodni kraniec zasięgu imperium w II w. n.e."
    },
    "explanation": "Pojęcia opisują początki Rzymu, zasięg imperium i organizację armii."
  },
  {
    "id": "R03_POC_12",
    "section": "Początki i armia Rzymu",
    "type": "scenario",
    "prompt": "Rzymski żołnierz ucieka z pola walki. Dowódcy uznają to za dezercję. Jaka kara według podręcznika groziła za taki czyn?",
    "options": [
      "kara śmierci",
      "awans",
      "wygnanie na jeden dzień",
      "nagroda pieniężna"
    ],
    "answer": 0,
    "explanation": "W armii rzymskiej tchórzostwo i dezercję karano śmiercią."
  },
  {
    "id": "R03_UST_01",
    "section": "Republika i cesarstwo",
    "type": "single_choice",
    "prompt": "Jaki ustrój zastąpił monarchię w Rzymie około 500 r. p.n.e.?",
    "options": [
      "republika",
      "demokracja bezpośrednia",
      "cesarstwo",
      "teokracja",
      "monarchia absolutna",
      "kalifat"
    ],
    "answer": 0,
    "explanation": "Około 500 r. p.n.e. ostatni król został wygnany, a Rzym stał się republiką."
  },
  {
    "id": "R03_UST_02",
    "section": "Republika i cesarstwo",
    "type": "riddle",
    "prompt": "Łacińskie wyrażenie oznaczające „rzecz wspólną”, od którego pochodzi słowo republika, to...",
    "options": null,
    "answer": "res publica",
    "altAnswers": [
      "res publica",
      "Res publica",
      "res publika"
    ],
    "explanation": "Res publica znaczy po łacinie „rzecz wspólna”, czyli rzeczpospolita."
  },
  {
    "id": "R03_UST_03",
    "section": "Republika i cesarstwo",
    "type": "true_false",
    "prompt": "Republika rzymska była demokracją taką jak Ateny.",
    "options": null,
    "answer": false,
    "explanation": "W republice rzymskiej rzeczywistą władzę sprawowała arystokracja, więc nie była to demokracja ateńska."
  },
  {
    "id": "R03_UST_04",
    "section": "Republika i cesarstwo",
    "type": "multi_select",
    "prompt": "Które instytucje należały do władz republiki rzymskiej?",
    "image": "/img/r03_senat_rzymski_obrady.jpg",
    "options": [
      "zgromadzenia ludowe",
      "urzędnicy państwowi",
      "senat",
      "faraon",
      "papież",
      "kalif"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Władze republiki tworzyły zgromadzenia ludowe, urzędnicy państwowi i senat."
  },
  {
    "id": "R03_UST_05",
    "section": "Republika i cesarstwo",
    "type": "single_choice",
    "prompt": "Kto stał na czele republiki rzymskiej?",
    "options": [
      "dwaj konsulowie",
      "jeden faraon",
      "dwunastu apostołów",
      "jeden cesarz",
      "trybunowie gladiatorów",
      "kapłani Jowisza"
    ],
    "answer": 0,
    "explanation": "Na czele republiki stali dwaj konsulowie wybierani przez zgromadzenia ludowe."
  },
  {
    "id": "R03_UST_06",
    "section": "Republika i cesarstwo",
    "type": "fill_in",
    "prompt": "Trybun ludowy chronił lud przed niesprawiedliwością i miał prawo __________.",
    "options": null,
    "answer": [
      "weta"
    ],
    "altAnswers": [
      [
        "weta",
        "weto",
        "prawo weta"
      ]
    ],
    "explanation": "Trybun ludowy mógł użyć prawa weta, by zablokować nowe prawo lub działanie innego urzędnika."
  },
  {
    "id": "R03_UST_07",
    "section": "Republika i cesarstwo",
    "type": "true_false",
    "prompt": "Senatorowie w republice rzymskiej zasiadali w senacie dożywotnio.",
    "options": null,
    "answer": true,
    "explanation": "Senatorami zostawali zwykle byli urzędnicy państwowi i zasiadali w senacie dożywotnio."
  },
  {
    "id": "R03_UST_08",
    "section": "Republika i cesarstwo",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "rządy Oktawiana Augusta",
      "obalenie republiki przez Juliusza Cezara",
      "założenie Rzymu według tradycji",
      "powstanie republiki rzymskiej"
    ],
    "answer": [
      "założenie Rzymu według tradycji",
      "powstanie republiki rzymskiej",
      "obalenie republiki przez Juliusza Cezara",
      "rządy Oktawiana Augusta"
    ],
    "explanation": "Najpierw według tradycji założono Rzym, potem powstała republika, Cezar ją obalił, a Oktawian August rozpoczął cesarstwo."
  },
  {
    "id": "R03_UST_09",
    "section": "Republika i cesarstwo",
    "type": "single_choice",
    "prompt": "Kto w 49 r. p.n.e. obalił republikę rzymską?",
    "options": [
      "Juliusz Cezar",
      "Oktawian August",
      "Neron",
      "Konstantyn Wielki",
      "Wergiliusz",
      "Herod Agryppa"
    ],
    "answer": 0,
    "explanation": "Republikę obalił Juliusz Cezar, który z wiernymi żołnierzami zajął Italię."
  },
  {
    "id": "R03_UST_10",
    "section": "Republika i cesarstwo",
    "type": "scenario",
    "prompt": "Po śmierci Cezara w państwie wybucha wojna domowa. Zwycięsko wychodzi z niej krewny Cezara i zostaje pierwszym cesarzem. O kogo chodzi?",
    "image": "/img/r03_oktawian_august_posag.jpg",
    "options": [
      "Oktawian August",
      "Jowisz",
      "Romulus",
      "Neron",
      "Horacy",
      "Seneka"
    ],
    "answer": 0,
    "explanation": "Pierwszym cesarzem Rzymu został Oktawian August."
  },
  {
    "id": "R03_UST_11",
    "section": "Republika i cesarstwo",
    "type": "fill_in",
    "prompt": "Cesarstwo było odmianą __________, w której zamiast króla rządził __________.",
    "options": null,
    "answer": [
      "monarchii",
      "cesarz"
    ],
    "altAnswers": [
      [
        "monarchii",
        "monarchia"
      ],
      [
        "cesarz",
        "cesarzem"
      ]
    ],
    "explanation": "Podręcznik opisuje cesarstwo jako odmianę monarchii, z cesarzem zamiast króla."
  },
  {
    "id": "R03_UST_12",
    "section": "Republika i cesarstwo",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do ustroju republiki lub cesarstwa.",
    "options": null,
    "items": [
      "dwaj konsulowie",
      "senat doradzający urzędnikom",
      "Oktawian August jako pierwszy cesarz",
      "ograniczenie władzy zgromadzeń przez cesarza"
    ],
    "categories": [
      "republika",
      "cesarstwo"
    ],
    "answer": {
      "republika": [
        "dwaj konsulowie",
        "senat doradzający urzędnikom"
      ],
      "cesarstwo": [
        "Oktawian August jako pierwszy cesarz",
        "ograniczenie władzy zgromadzeń przez cesarza"
      ]
    },
    "explanation": "W republice działały zgromadzenia, konsulowie i senat, a w cesarstwie najwyższą władzę skupił cesarz."
  },
  {
    "id": "R03_SPO_01",
    "section": "Społeczeństwo rzymskie",
    "type": "single_choice",
    "prompt": "Na jakie dwie główne grupy dzielili się mieszkańcy Imperium Rzymskiego?",
    "options": [
      "ludzi wolnych i niewolników",
      "kapłanów i faraonów",
      "rycerzy i mieszczan",
      "chrześcijan i muzułmanów",
      "senatorów i poetów",
      "gladiatorów i woźniców"
    ],
    "answer": 0,
    "explanation": "Mieszkańcy imperium dzielili się przede wszystkim na ludzi wolnych i niewolników."
  },
  {
    "id": "R03_SPO_02",
    "section": "Społeczeństwo rzymskie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy życia rzymskich arystokratów.",
    "image": "/img/r03_arystokrata_rzymski_dom.jpg",
    "options": [
      "ogromne majątki ziemskie",
      "luksusowe domy",
      "setki niewolników",
      "codzienna praca w kopalni",
      "brak jakiejkolwiek własności",
      "mieszkanie w ciasnej kamienicy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Arystokraci mieli ogromne majątki, luksusowe domy i setki niewolników, a pracą fizyczną gardzili."
  },
  {
    "id": "R03_SPO_03",
    "section": "Społeczeństwo rzymskie",
    "type": "true_false",
    "prompt": "Proletariusze byli najbiedniejszymi mieszkańcami rzymskich miast.",
    "options": null,
    "answer": true,
    "explanation": "Proletariusze byli biedakami, którzy otrzymywali od państwa darmową żywność i domagali się rozrywek."
  },
  {
    "id": "R03_SPO_04",
    "section": "Społeczeństwo rzymskie",
    "type": "single_choice",
    "prompt": "Kogo pogardliwie nazywano proletariuszami?",
    "options": [
      "najbiedniejszych mieszkańców miast",
      "najbogatszych senatorów",
      "zawodowych żołnierzy",
      "wyłącznie kapłanów",
      "wyłącznie poetów",
      "greckich filozofów"
    ],
    "answer": 0,
    "explanation": "Proletariuszami nazywano najbiedniejszych ludzi, dosłownie „posiadających tylko dzieci”."
  },
  {
    "id": "R03_SPO_05",
    "section": "Społeczeństwo rzymskie",
    "type": "multi_select",
    "prompt": "Kto według podręcznika mógł zostać rzymskim niewolnikiem?",
    "options": [
      "jeniec wojenny",
      "człowiek porwany przez piratów",
      "dziecko niewolników",
      "dłużnik niemogący spłacić długu",
      "każdy konsul po roku urzędowania",
      "każdy poeta"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Niewolnikami zostawali jeńcy wojenni, porwani przez piratów, dzieci niewolników oraz dłużnicy, którzy nie mogli spłacić długu."
  },
  {
    "id": "R03_SPO_06",
    "section": "Społeczeństwo rzymskie",
    "type": "true_false",
    "prompt": "Wielu Rzymian nazywało niewolników „narzędziami mówiącymi”.",
    "options": null,
    "answer": true,
    "explanation": "To określenie pokazuje, jak nisko wielu Rzymian ceniło życie niewolników."
  },
  {
    "id": "R03_SPO_07",
    "section": "Społeczeństwo rzymskie",
    "type": "fill_in",
    "prompt": "Byłych niewolników nazywano __________.",
    "options": null,
    "answer": [
      "wyzwoleńcami"
    ],
    "altAnswers": [
      [
        "wyzwoleńcami",
        "wyzwoleńcy",
        "wyzwolencami",
        "wyzwolency"
      ]
    ],
    "explanation": "Wyzwoleńcy byli dawnymi niewolnikami, którzy wykupili się z niewoli albo zostali wyzwoleni przez pana."
  },
  {
    "id": "R03_SPO_08",
    "section": "Społeczeństwo rzymskie",
    "type": "single_choice",
    "prompt": "Czego nie mogli robić wyzwoleńcy?",
    "options": [
      "sprawować urzędów państwowych i uczestniczyć w zgromadzeniach",
      "pracować jako rzemieślnicy",
      "mieszkać w mieście",
      "mieć dzieci",
      "zarabiać pieniędzy za zgodą pana",
      "zostać kucharzami"
    ],
    "answer": 0,
    "explanation": "Wyzwoleńcy byli osobiście wolni, ale nie mogli sprawować urzędów ani uczestniczyć w zgromadzeniach ludowych."
  },
  {
    "id": "R03_SPO_09",
    "section": "Społeczeństwo rzymskie",
    "type": "riddle",
    "prompt": "Mężczyzna stojący na czele rzymskiego domu, któremu podlegali domownicy, to...",
    "options": null,
    "answer": "ojciec rodziny",
    "altAnswers": [
      "ojciec rodziny",
      "ojciec",
      "pater familias",
      "paterfamilias"
    ],
    "explanation": "Rzymianie nazywali go ojcem rodziny; miał bardzo dużą władzę nad domownikami."
  },
  {
    "id": "R03_SPO_10",
    "section": "Społeczeństwo rzymskie",
    "type": "true_false",
    "prompt": "Rzymskie kobiety miały mniej swobody niż Atenki.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik podaje odwrotnie: rzymskie kobiety miały więcej swobody niż Atenki, choć nie mogły obejmować urzędów."
  },
  {
    "id": "R03_SPO_11",
    "section": "Społeczeństwo rzymskie",
    "type": "sort",
    "prompt": "Przyporządkuj grupy do kategorii: ludzie wolni albo niewolni.",
    "options": null,
    "items": [
      "arystokraci",
      "rzemieślnicy",
      "proletariusze",
      "niewolnicy"
    ],
    "categories": [
      "ludzie wolni",
      "niewolni"
    ],
    "answer": {
      "ludzie wolni": [
        "arystokraci",
        "rzemieślnicy",
        "proletariusze"
      ],
      "niewolni": [
        "niewolnicy"
      ]
    },
    "explanation": "Arystokraci, rzemieślnicy i proletariusze byli ludźmi wolnymi, a niewolnicy byli zależni od właściciela."
  },
  {
    "id": "R03_SPO_12",
    "section": "Społeczeństwo rzymskie",
    "type": "scenario",
    "prompt": "Bogaty Rzymianin decyduje, że jeden z jego ludzi będzie pracował jako kucharz, a inny w kopalni. O której grupie społecznej mowa?",
    "options": [
      "niewolnikach",
      "konsulach",
      "senatorach",
      "trybunach"
    ],
    "answer": 0,
    "explanation": "Właściciel decydował o pracy niewolników; najgorszy los czekał tych wysyłanych do kopalni i gospodarstw rolnych."
  },
  {
    "id": "R03_OSI_01",
    "section": "Osiągnięcia i rozrywki",
    "type": "single_choice",
    "prompt": "Czym było Forum Romanum?",
    "image": "/img/r03_forum_romanum.jpg",
    "options": [
      "rynkiem rzymskim",
      "koszarami legionów",
      "kopalnią srebra",
      "pustynią w Palestynie",
      "szkołą gladiatorów",
      "wioską piratów"
    ],
    "answer": 0,
    "explanation": "Forum Romanum było rozległym placem w sercu Rzymu, pełnym posągów, urzędów, świątyń i bazylik."
  },
  {
    "id": "R03_OSI_02",
    "section": "Osiągnięcia i rozrywki",
    "type": "multi_select",
    "prompt": "Co znajdowało się na Forum Romanum?",
    "image": "/img/r03_forum_romanum.jpg",
    "options": [
      "posągi",
      "urzędy państwowe",
      "świątynie",
      "bazyliki",
      "latarnie morskie",
      "piramidy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na Forum Romanum były marmurowe posągi, urzędy państwowe, świątynie i bazyliki."
  },
  {
    "id": "R03_OSI_03",
    "section": "Osiągnięcia i rozrywki",
    "type": "single_choice",
    "prompt": "Który element architektoniczny Rzymianie wykorzystywali do budowy mostów, akweduktów i amfiteatrów?",
    "options": [
      "łuk architektoniczny",
      "hieroglif",
      "papirus",
      "ostrakon",
      "kolczuga",
      "rydwan"
    ],
    "answer": 0,
    "explanation": "Łuki architektoniczne mogły udźwignąć duży ciężar i umożliwiały budowę wielu rzymskich konstrukcji."
  },
  {
    "id": "R03_OSI_04",
    "section": "Osiągnięcia i rozrywki",
    "type": "riddle",
    "prompt": "Wodociąg doprowadzający wodę do miasta to...",
    "image": "/img/r03_akwedukt_budowa.jpg",
    "options": null,
    "answer": "akwedukt",
    "altAnswers": [
      "akwedukt",
      "akwedukty",
      "wodociąg",
      "wodociag"
    ],
    "explanation": "Akwedukty doprowadzały do Rzymu czystą wodę."
  },
  {
    "id": "R03_OSI_05",
    "section": "Osiągnięcia i rozrywki",
    "type": "true_false",
    "prompt": "Rzymskie drogi liczyły prawie 80 tysięcy kilometrów długości.",
    "image": "/img/r03_rzymska_droga_przekroj.jpg",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik porównuje długość rzymskich dróg do dwóch okrążeń Ziemi."
  },
  {
    "id": "R03_OSI_06",
    "section": "Osiągnięcia i rozrywki",
    "type": "multi_select",
    "prompt": "Komu służyły rzymskie drogi?",
    "image": "/img/r03_rzymska_droga_przekroj.jpg",
    "options": [
      "podróżnym",
      "kupcom",
      "żołnierzom",
      "wyłącznie gladiatorom",
      "wyłącznie kapłanom",
      "tylko cesarzowi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Drogi służyły podróżnym, kupcom oraz żołnierzom, którzy mogli szybko dotrzeć w zagrożone miejsce."
  },
  {
    "id": "R03_OSI_07",
    "section": "Osiągnięcia i rozrywki",
    "type": "single_choice",
    "prompt": "Gdzie Rzymianie ćwiczyli, pływali, spotykali się z przyjaciółmi i korzystali z biblioteki?",
    "options": [
      "w termach",
      "w senacie",
      "w katakumbach",
      "w legionie",
      "w kopalni",
      "na zgromadzeniu ludowym"
    ],
    "answer": 0,
    "explanation": "Termy były dużymi obiektami sportowo-rekreacyjnymi z basenami, salą gimnastyczną, biblioteką i bufetami."
  },
  {
    "id": "R03_OSI_08",
    "section": "Osiągnięcia i rozrywki",
    "type": "match",
    "prompt": "Połącz budowlę lub miejsce z funkcją.",
    "options": null,
    "left": [
      "termy",
      "amfiteatr",
      "cyrk",
      "Panteon"
    ],
    "right": [
      "obiekt sportowo-rekreacyjny",
      "miejsce walk gladiatorów i igrzysk",
      "tor wyścigowy dla rydwanów",
      "świątynia ku czci wszystkich bogów"
    ],
    "answer": {
      "termy": "obiekt sportowo-rekreacyjny",
      "amfiteatr": "miejsce walk gladiatorów i igrzysk",
      "cyrk": "tor wyścigowy dla rydwanów",
      "Panteon": "świątynia ku czci wszystkich bogów"
    },
    "explanation": "Termy, amfiteatry i cyrki służyły różnym formom życia publicznego i rozrywki."
  },
  {
    "id": "R03_OSI_09",
    "section": "Osiągnięcia i rozrywki",
    "type": "single_choice",
    "prompt": "Jak dziś najczęściej nazywamy Amfiteatr Flawiuszów?",
    "image": "/img/r03_koloseum_arena.jpg",
    "options": [
      "Koloseum",
      "Circus Maximus",
      "Forum Romanum",
      "Panteon",
      "Kapitol",
      "Bazylika Julia"
    ],
    "answer": 0,
    "explanation": "Amfiteatr Flawiuszów w Rzymie znamy dziś pod średniowieczną nazwą Koloseum."
  },
  {
    "id": "R03_OSI_10",
    "section": "Osiągnięcia i rozrywki",
    "type": "single_choice",
    "prompt": "Co było prawdziwą namiętnością Rzymian według podręcznika?",
    "image": "/img/r03_wyscigi_rydwanow.jpg",
    "options": [
      "wyścigi rydwanów",
      "szachy",
      "turnieje rycerskie",
      "mecze hokeja",
      "polowania na lisy",
      "drukowanie książek"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że szczególnie popularne były wyścigi rydwanów w cyrku."
  },
  {
    "id": "R03_OSI_11",
    "section": "Osiągnięcia i rozrywki",
    "type": "fill_in",
    "prompt": "Największy cyrk w Rzymie nazywał się __________ i mieścił około __________ tysięcy widzów.",
    "image": "/img/r03_wyscigi_rydwanow.jpg",
    "options": null,
    "answer": [
      "Circus Maximus",
      "250"
    ],
    "altAnswers": [
      [
        "Circus Maximus",
        "cyrk maksymus",
        "Cirkus Maksimus"
      ],
      [
        "250",
        "250 tysięcy",
        "250 tys."
      ]
    ],
    "explanation": "Circus Maximus był największym cyrkiem w Rzymie i mieścił 250 tysięcy widzów."
  },
  {
    "id": "R03_OSI_12",
    "section": "Osiągnięcia i rozrywki",
    "type": "match",
    "prompt": "Połącz poetę z dziełem lub rodzajem twórczości.",
    "options": null,
    "left": [
      "Wergiliusz",
      "Horacy",
      "Owidiusz"
    ],
    "right": [
      "Eneida",
      "pieśni, satyry i listy",
      "wiersze miłosne"
    ],
    "answer": {
      "Wergiliusz": "Eneida",
      "Horacy": "pieśni, satyry i listy",
      "Owidiusz": "wiersze miłosne"
    },
    "explanation": "Wergiliusz napisał Eneidę, Horacy tworzył pieśni, satyry i listy, a Owidiusz pisał wiersze miłosne."
  },
  {
    "id": "R03_OSI_13",
    "section": "Osiągnięcia i rozrywki",
    "type": "multi_select",
    "prompt": "Które języki podręcznik podaje jako romańskie, wywodzące się z łaciny?",
    "options": [
      "włoski",
      "francuski",
      "hiszpański",
      "portugalski",
      "rumuński",
      "fiński"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Łacina stała się podstawą języków romańskich, m.in. włoskiego, francuskiego, hiszpańskiego, portugalskiego i rumuńskiego."
  },
  {
    "id": "R03_OSI_14",
    "section": "Osiągnięcia i rozrywki",
    "type": "true_false",
    "prompt": "Prawo rzymskie jest podstawą dzisiejszego prawa w wielu państwach, także w Polsce.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyjaśnia, że przyszli prawnicy nadal uczą się prawa rzymskiego, bo wiele jego zasad wciąż obowiązuje."
  },
  {
    "id": "R03_CHR_01",
    "section": "Narodziny chrześcijaństwa",
    "type": "single_choice",
    "prompt": "Jaką religię wyznawali starożytni Rzymianie przed rozpowszechnieniem chrześcijaństwa?",
    "options": [
      "politeizm",
      "monoteizm żydowski",
      "islam",
      "buddyzm",
      "ateizm państwowy",
      "protestantyzm"
    ],
    "answer": 0,
    "explanation": "Starożytni Rzymianie wyznawali politeizm, czyli wiarę w wielu bogów."
  },
  {
    "id": "R03_CHR_02",
    "section": "Narodziny chrześcijaństwa",
    "type": "match",
    "prompt": "Połącz rzymskie bóstwo z greckim odpowiednikiem.",
    "options": null,
    "left": [
      "Jowisz",
      "Minerwa",
      "Neptun",
      "Wenus"
    ],
    "right": [
      "Zeus",
      "Atena",
      "Posejdon",
      "Afrodyta"
    ],
    "answer": {
      "Jowisz": "Zeus",
      "Minerwa": "Atena",
      "Neptun": "Posejdon",
      "Wenus": "Afrodyta"
    },
    "explanation": "Po podboju Grecji rzymscy bogowie upodobnili się do greckich, różniąc się głównie imionami."
  },
  {
    "id": "R03_CHR_03",
    "section": "Narodziny chrześcijaństwa",
    "type": "fill_in",
    "prompt": "Rzymska tolerancja religijna miała ograniczenia: należało składać ofiary rzymskim __________ i oddawać boską cześć posągowi __________.",
    "options": null,
    "answer": [
      "bogom",
      "cesarza"
    ],
    "altAnswers": [
      [
        "bogom",
        "bogom rzymskim"
      ],
      [
        "cesarza",
        "cesarzowi"
      ]
    ],
    "explanation": "Rzymianie pozwalali na różne religie, ale wymagali ofiar dla bogów rzymskich i czci dla posągu cesarza."
  },
  {
    "id": "R03_CHR_04",
    "section": "Narodziny chrześcijaństwa",
    "type": "true_false",
    "prompt": "Żydzi byli zwolnieni z obowiązku składania ofiar rzymskim bogom i oddawania boskiej czci posągowi cesarza.",
    "options": null,
    "answer": true,
    "explanation": "Żydzi, jako wyznawcy monoteizmu, byli zwolnieni z tych obowiązków."
  },
  {
    "id": "R03_CHR_05",
    "section": "Narodziny chrześcijaństwa",
    "type": "single_choice",
    "prompt": "Gdzie urodził się i działał Jezus z Nazaretu?",
    "image": "/img/r03_palestyna_judea.jpg",
    "options": [
      "w Palestynie",
      "w Hiszpanii",
      "w Brytanii",
      "w Galii",
      "w Mezopotamii jako cesarz",
      "w Kartaginie"
    ],
    "answer": 0,
    "explanation": "Jezus urodził się i działał w Palestynie, która należała do Imperium Rzymskiego."
  },
  {
    "id": "R03_CHR_06",
    "section": "Narodziny chrześcijaństwa",
    "type": "multi_select",
    "prompt": "Co według podręcznika głosił Jezus Chrystus?",
    "options": [
      "miłość Boga i bliźniego",
      "że jest Synem Bożym",
      "nadstawienie drugiego policzka",
      "odbudowę potęgi legionów",
      "boskość posągu cesarza",
      "obowiązek składania ofiar Jowiszowi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Jezus mówił, że jest Synem Bożym, głosił miłość Boga i bliźniego oraz zmieniał rozumienie nakazu „oko za oko”."
  },
  {
    "id": "R03_CHR_07",
    "section": "Narodziny chrześcijaństwa",
    "type": "single_choice",
    "prompt": "Jaką karą Rzymianie ukarali Jezusa?",
    "options": [
      "ukrzyżowaniem",
      "wygnaniem do Brytanii",
      "walką w cyrku jako woźnica",
      "grzywną",
      "uwięzieniem w senacie",
      "spaleniem biblioteki"
    ],
    "answer": 0,
    "explanation": "Jezus został skazany na śmierć przez ukrzyżowanie, karę uznawaną za hańbiącą."
  },
  {
    "id": "R03_CHR_08",
    "section": "Narodziny chrześcijaństwa",
    "type": "riddle",
    "prompt": "Wspólnota osób wierzących w Chrystusa to...",
    "options": null,
    "answer": "Kościół",
    "altAnswers": [
      "Kościół",
      "Kościół chrześcijan",
      "Kosciol",
      "wspólnota chrześcijan",
      "wspolnota chrzescijan"
    ],
    "explanation": "Apostołowie utworzyli Kościół, czyli wspólnotę chrześcijan."
  },
  {
    "id": "R03_CHR_09",
    "section": "Narodziny chrześcijaństwa",
    "type": "true_false",
    "prompt": "Pierwsi chrześcijanie spotykali się w prywatnych domach, bo nie mieli własnych świątyń.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że pierwsi wyznawcy Chrystusa nie mieli własnych świątyń."
  },
  {
    "id": "R03_CHR_10",
    "section": "Narodziny chrześcijaństwa",
    "type": "multi_select",
    "prompt": "Dlaczego władze rzymskie uznały chrześcijaństwo za niebezpieczne?",
    "options": [
      "nie składali ofiar rzymskim bogom",
      "nie oddawali boskiej czci posągowi cesarza",
      "uważano, że mogą ściągnąć gniew bogów",
      "chcieli zostać gladiatorami",
      "budowali akwedukty bez zgody",
      "pisali Eneidę"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Chrześcijanie odmawiali składania ofiar rzymskim bogom i boskiej czci posągowi cesarza."
  },
  {
    "id": "R03_CHR_11",
    "section": "Narodziny chrześcijaństwa",
    "type": "scenario",
    "prompt": "W 64 r. n.e. cesarz oskarża chrześcijan o podpalenie Rzymu i każe ich okrutnie karać. Który to cesarz?",
    "image": "/img/r03_przesladowania_chrzescijan.jpg",
    "options": [
      "Neron",
      "Konstantyn Wielki",
      "Oktawian August",
      "Juliusz Cezar",
      "Marek Aureliusz",
      "Wergiliusz"
    ],
    "answer": 0,
    "explanation": "W 64 r. n.e. prześladowania chrześcijan prowadził Neron."
  },
  {
    "id": "R03_CHR_12",
    "section": "Narodziny chrześcijaństwa",
    "type": "multi_select",
    "prompt": "Dlaczego mimo prześladowań liczba chrześcijan rosła?",
    "options": [
      "dawało nadzieję na życie po śmierci",
      "jasno wskazywało, co jest dobre, a co złe",
      "głosiło, że wszyscy są braćmi i siostrami",
      "obiecywało każdemu urząd konsula",
      "pozwalało oddawać boską cześć cesarzowi",
      "nakazywało walki gladiatorów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Chrześcijaństwo dawało nadzieję na życie po śmierci, wskazywało dobro i zło oraz głosiło braterstwo wszystkich ludzi."
  },
  {
    "id": "R03_CHR_13",
    "section": "Narodziny chrześcijaństwa",
    "type": "fill_in",
    "prompt": "W __________ r. Konstantyn Wielki zezwolił na swobodne wyznawanie chrześcijaństwa, a w __________ r. stało się ono religią państwową imperium.",
    "options": null,
    "answer": [
      "313",
      "380"
    ],
    "altAnswers": [
      [
        "313",
        "313 r.",
        "313 n.e."
      ],
      [
        "380",
        "380 r.",
        "380 n.e."
      ]
    ],
    "explanation": "Konstantyn wydał zgodę w 313 r., a w 380 r. chrześcijaństwo stało się religią państwową Imperium Rzymskiego."
  },
  {
    "id": "R03_CHR_14",
    "section": "Narodziny chrześcijaństwa",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "chrześcijaństwo religią państwową Imperium Rzymskiego",
      "zgoda Konstantyna na swobodne wyznawanie chrześcijaństwa",
      "narodziny Jezusa Chrystusa",
      "prześladowania chrześcijan przez Nerona",
      "śmierć Chrystusa na krzyżu"
    ],
    "answer": [
      "narodziny Jezusa Chrystusa",
      "śmierć Chrystusa na krzyżu",
      "prześladowania chrześcijan przez Nerona",
      "zgoda Konstantyna na swobodne wyznawanie chrześcijaństwa",
      "chrześcijaństwo religią państwową Imperium Rzymskiego"
    ],
    "explanation": "Najpierw narodził się Jezus, później zmarł na krzyżu, następnie Neron prześladował chrześcijan, Konstantyn zezwolił na ich religię, a w 380 r. stała się ona religią państwową."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który historyk wyjaśniał sukces Rzymian ich nieustannymi ćwiczeniami wojskowymi?",
    "options": [
      "Józef Flawiusz",
      "Ammianus Marcellinus",
      "Horacy",
      "Owidiusz",
      "Seneka",
      "Leonardo da Vinci"
    ],
    "answer": 0,
    "explanation": "W tekście źródłowym Józef Flawiusz pisał, że wielkość państwa była owocem męstwa i ćwiczeń Rzymian."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Armia rzymska w I–II w. n.e. składała się z około __________ legionów.",
    "image": "/img/r03_legionista_wyposazenie.jpg",
    "options": null,
    "answer": [
      "25–30"
    ],
    "altAnswers": [
      [
        "25–30",
        "25-30",
        "od 25 do 30",
        "25 do 30"
      ]
    ],
    "explanation": "Infografika o legionistach podaje, że w I–II w. n.e. armia rzymska składała się z 25–30 legionów."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Trybun ludowy był nietykalny, a za zlekceważenie jego weta groziła kara śmierci.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że kara śmierci groziła nawet za zlekceważenie weta trybuna."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który autor nazwał Circus Maximus prawdziwym centrum nadziei i pragnień Rzymian?",
    "options": [
      "Ammianus Marcellinus",
      "Józef Flawiusz",
      "Wergiliusz",
      "Święty Paweł",
      "Dionizy Mały",
      "Neron"
    ],
    "answer": 0,
    "explanation": "W tekście źródłowym Ammianus Marcellinus pisał o ogromnym znaczeniu Circus Maximus dla widzów."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wergiliusz pisał __________ przez 10 lat, codziennie po jednej linijce.",
    "options": null,
    "answer": [
      "Eneidę"
    ],
    "altAnswers": [
      [
        "Eneidę",
        "Eneida",
        "Eneide"
      ]
    ],
    "explanation": "Podręcznik podaje, że Wergiliusz przez 10 lat pisał Eneidę, chcąc, by utwór był doskonały."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Jowisz, Minerwa, Neptun, Mesjasz.",
    "options": null,
    "answer": "Mesjasz",
    "explanation": "Jowisz, Minerwa i Neptun to bogowie rzymscy, a Mesjasz to postać oczekiwana w religii żydowskiej i chrześcijańskiej."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń twierdzi: „Rzymianie pozwalali na wszystkie religie bez żadnych warunków”. Co jest nie tak z tym zdaniem?",
    "options": [
      "pomija obowiązek ofiar dla bogów i czci dla posągu cesarza",
      "myli Rzym z Atenami",
      "zapomina, że Rzym leżał w Egipcie",
      "błędnie zakłada, że Rzymianie nie znali żadnych bogów"
    ],
    "answer": 0,
    "explanation": "Rzymska tolerancja miała ograniczenia: z wyjątkiem Żydów trzeba było składać ofiary rzymskim bogom i oddawać boską cześć cesarzowi."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz liczbę lub datę z informacją z rozdziału.",
    "options": null,
    "left": [
      "45 tysięcy",
      "250 tysięcy",
      "80 tysięcy km",
      "64 n.e."
    ],
    "right": [
      "widownia Amfiteatru Flawiuszów",
      "widownia Circus Maximus",
      "długość rzymskich dróg",
      "prześladowania chrześcijan przez Nerona"
    ],
    "answer": {
      "45 tysięcy": "widownia Amfiteatru Flawiuszów",
      "250 tysięcy": "widownia Circus Maximus",
      "80 tysięcy km": "długość rzymskich dróg",
      "64 n.e.": "prześladowania chrześcijan przez Nerona"
    },
    "explanation": "Zestaw łączy liczby podane w różnych częściach rozdziału: daty, pojemność budowli i długość dróg."
  }
];

const KID_PROMPTS = {
  "R03_POC_01": "Według rzymskiej tradycji Rzym został założony w roku...",
  "R03_POC_02": "Półwysep Apeniński nazywano w starożytności __________, a starożytni Rzymianie mówili po __________.",
  "R03_POC_03": "Wybierz obszary, które do II w. n.e. znalazły się w granicach Imperium Rzymskiego.",
  "R03_POC_04": "Imperium Rzymskie w II w. n.e. było największym mocarstwem starożytności.",
  "R03_POC_05": "Podstawową jednostką armii rzymskiej był...",
  "R03_POC_06": "Jeden legion liczył około __________ tysięcy ludzi i miał także około __________ jeźdźców.",
  "R03_POC_07": "Które elementy wyposażenia legionisty miały chronić jego ciało?",
  "R03_POC_08": "Od schyłku II w. p.n.e. armia rzymska była armią zawodową.",
  "R03_POC_09": "Jak długo trwała służba w rzymskiej armii zawodowej?",
  "R03_POC_10": "Wskaż, co nie pasuje do pozostałych: hełm, pancerz, tarcza, senat.",
  "R03_POC_11": "Połącz pojęcie z opisem.",
  "R03_POC_12": "Rzymski żołnierz ucieka z pola walki. Dowódcy uznają to za dezercję. Jaka kara z lekcji groziła za taki czyn?",
  "R03_UST_01": "Jaki ustrój zastąpił monarchię w Rzymie około 500 r. p.n.e.?",
  "R03_UST_02": "Łacińskie wyrażenie oznaczające „rzecz wspólną”, od którego pochodzi słowo republika, to...",
  "R03_UST_03": "Republika rzymska była demokracją taką jak Ateny.",
  "R03_UST_04": "Które instytucje należały do władz republiki rzymskiej?",
  "R03_UST_05": "Kto stał na czele republiki rzymskiej?",
  "R03_UST_06": "Trybun ludowy chronił lud przed niesprawiedliwością i miał prawo __________.",
  "R03_UST_07": "Senatorowie w republice rzymskiej zasiadali w senacie dożywotnio.",
  "R03_UST_08": "Ustaw wydarzenia od najwcześniejszego do najpóźniejszego.",
  "R03_UST_09": "Kto w 49 r. p.n.e. obalił republikę rzymską?",
  "R03_UST_10": "Po śmierci Cezara w państwie wybucha wojna domowa",
  "R03_UST_11": "Cesarstwo było odmianą __________, w której zamiast króla rządził __________.",
  "R03_UST_12": "Dopasuj elementy do ustroju republiki lub cesarstwa.",
  "R03_SPO_01": "Na jakie dwie główne grupy dzielili się mieszkańcy Imperium Rzymskiego?",
  "R03_SPO_02": "Wybierz cechy życia rzymskich arystokratów.",
  "R03_SPO_03": "Proletariusze byli najbiedniejszymi mieszkańcami rzymskich miast.",
  "R03_SPO_04": "Kogo pogardliwie nazywano proletariuszami?",
  "R03_SPO_05": "Kto z lekcji mógł zostać rzymskim niewolnikiem?",
  "R03_SPO_06": "Wielu Rzymian nazywało niewolników „narzędziami mówiącymi”.",
  "R03_SPO_07": "Byłych niewolników nazywano __________.",
  "R03_SPO_08": "Czego nie mogli robić wyzwoleńcy?",
  "R03_SPO_09": "Mężczyzna stojący na czele rzymskiego domu, któremu podlegali domownicy, to...",
  "R03_SPO_10": "Rzymskie kobiety miały mniej swobody niż Atenki.",
  "R03_SPO_11": "Dopasuj grupy do kategorii: ludzie wolni albo niewolni.",
  "R03_SPO_12": "Bogaty Rzymianin decyduje, że jeden z jego ludzi będzie pracował jako kucharz, a inny w kopalni",
  "R03_OSI_01": "Czym było Forum Romanum?",
  "R03_OSI_02": "Co znajdowało się na Forum Romanum?",
  "R03_OSI_03": "Który element architektoniczny Rzymianie wykorzystywali do budowy mostów, akweduktów i amfiteatrów?",
  "R03_OSI_04": "Wodociąg doprowadzający wodę do miasta to...",
  "R03_OSI_05": "Rzymskie drogi liczyły prawie 80 tysięcy kilometrów długości.",
  "R03_OSI_06": "Komu służyły rzymskie drogi?",
  "R03_OSI_07": "Gdzie Rzymianie ćwiczyli, pływali, spotykali się z przyjaciółmi i korzystali z biblioteki?",
  "R03_OSI_08": "Połącz budowlę lub miejsce z funkcją.",
  "R03_OSI_09": "Jak dziś najczęściej nazywamy Amfiteatr Flawiuszów?",
  "R03_OSI_10": "Co było prawdziwą namiętnością Rzymian z lekcji?",
  "R03_OSI_11": "Największy cyrk w Rzymie nazywał się __________ i mieścił około __________ tysięcy widzów.",
  "R03_OSI_12": "Połącz poetę z dziełem lub rodzajem twórczości.",
  "R03_OSI_13": "Które języki podręcznik podaje jako romańskie, wywodzące się z łaciny?",
  "R03_OSI_14": "Prawo rzymskie jest podstawą dzisiejszego prawa w wielu państwach, także w Polsce.",
  "R03_CHR_01": "Jaką religię wyznawali starożytni Rzymianie przed rozpowszechnieniem chrześcijaństwa?",
  "R03_CHR_02": "Połącz rzymskie bóstwo z greckim odpowiednikiem.",
  "R03_CHR_03": "Rzymska tolerancja religijna miała ograniczenia: należało składać ofiary rzymskim __________ i oddawać boską cześć posągowi __________",
  "R03_CHR_04": "Żydzi byli zwolnieni z obowiązku składania ofiar rzymskim bogom i oddawania boskiej czci posągowi cesarza.",
  "R03_CHR_05": "Gdzie urodził się i działał Jezus z Nazaretu?",
  "R03_CHR_06": "Co z lekcji głosił Jezus Chrystus?",
  "R03_CHR_07": "Jaką karą Rzymianie ukarali Jezusa?",
  "R03_CHR_08": "Wspólnota osób wierzących w Chrystusa to...",
  "R03_CHR_09": "Pierwsi chrześcijanie spotykali się w prywatnych domach, bo nie mieli własnych świątyń.",
  "R03_CHR_10": "Dlaczego władze rzymskie uznały chrześcijaństwo za niebezpieczne?",
  "R03_CHR_11": "W 64 r. n.e. cesarz oskarża chrześcijan o podpalenie Rzymu i każe ich okrutnie karać. Który to cesarz?",
  "R03_CHR_12": "Dlaczego mimo prześladowań liczba chrześcijan rosła?",
  "R03_CHR_13": "W __________ r",
  "R03_CHR_14": "Ustaw wydarzenia od najwcześniejszego do najpóźniejszego.",
  "R03_HARD_01": "Który historyk wyjaśniał sukces Rzymian ich nieustannymi ćwiczeniami wojskowymi?",
  "R03_HARD_02": "Armia rzymska w I–II w. n.e. składała się z około __________ legionów.",
  "R03_HARD_03": "Trybun ludowy był nietykalny, a za zlekceważenie jego weta groziła kara śmierci.",
  "R03_HARD_04": "Który autor nazwał Circus Maximus prawdziwym centrum nadziei i pragnień Rzymian?",
  "R03_HARD_05": "Wergiliusz pisał __________ przez 10 lat, codziennie po jednej linijce.",
  "R03_HARD_06": "Wskaż, co nie pasuje do pozostałych: Jowisz, Minerwa, Neptun, Mesjasz.",
  "R03_HARD_07": "Uczeń twierdzi: „Rzymianie pozwalali na wszystkie religie bez żadnych warunków”. Co jest nie tak z tym zdaniem?",
  "R03_HARD_08": "Połącz liczbę lub datę z informacją z rozdziału."
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Antyczny Rzym",
  icon: "🏛️",
  sectionOrder: [
  "Początki i armia Rzymu",
  "Republika i cesarstwo",
  "Społeczeństwo rzymskie",
  "Osiągnięcia i rozrywki",
  "Narodziny chrześcijaństwa",
  "Super trudne"
],
  sectionIcons: {
  "Początki i armia Rzymu": "🐺",
  "Republika i cesarstwo": "🏛️",
  "Społeczeństwo rzymskie": "👥",
  "Osiągnięcia i rozrywki": "🏟️",
  "Narodziny chrześcijaństwa": "✝️",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
