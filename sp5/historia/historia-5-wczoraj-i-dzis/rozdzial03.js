// Skróty sekcji:
//   UST = Ustrój starożytnego Rzymu
//   IMP = Imperium Rzymskie
//   ZYC = Życie w Wiecznym Mieście
//   DOK = Dokonania starożytnych Rzymian
//   CHR = Początki chrześcijaństwa
//   BUR = Bursztynowy szlak
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_UST_01",
    "section": "Ustrój starożytnego Rzymu",
    "type": "single_choice",
    "prompt": "Według legendy w którym roku założono Rzym?",
    "explanation": "Podręcznik podaje tradycyjną datę założenia Rzymu: 753 rok p.n.e.",
    "options": [
      "753 rok p.n.e.",
      "509 rok p.n.e.",
      "44 rok p.n.e.",
      "27 rok p.n.e.",
      "313 rok n.e.",
      "476 rok n.e."
    ],
    "answer": 0,
    "image": "/img/r03_wilczyca_kapitolska.jpg"
  },
  {
    "id": "R03_UST_02",
    "section": "Ustrój starożytnego Rzymu",
    "type": "fill_in",
    "prompt": "Rzym powstał nad rzeką __________ w krainie zwanej __________.",
    "explanation": "Rzym leżał nad Tybrem, w Lacjum zamieszkiwanym przez Latynów.",
    "options": null,
    "answer": [
      "Tyber",
      "Lacjum"
    ],
    "altAnswers": [
      [
        "Tyber",
        "Tybrem",
        "rzeką Tyber"
      ],
      [
        "Lacjum",
        "Lacjum."
      ]
    ]
  },
  {
    "id": "R03_UST_03",
    "section": "Ustrój starożytnego Rzymu",
    "type": "sequence",
    "prompt": "Ułóż formy ustroju starożytnego Rzymu w kolejności chronologicznej.",
    "explanation": "Najpierw Rzym był królestwem, potem republiką, a od czasów Oktawiana cesarstwem.",
    "options": null,
    "items": [
      "cesarstwo",
      "królestwo",
      "republika"
    ],
    "answer": [
      "królestwo",
      "republika",
      "cesarstwo"
    ]
  },
  {
    "id": "R03_UST_04",
    "section": "Ustrój starożytnego Rzymu",
    "type": "true_false",
    "prompt": "Słowo „republika” pochodzi od łacińskiego wyrażenia oznaczającego „rzecz wspólną”.",
    "explanation": "Res publica oznaczała państwo jako wspólne dobro obywateli.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_UST_05",
    "section": "Ustrój starożytnego Rzymu",
    "type": "match",
    "prompt": "Połącz urząd republiki rzymskiej z jego zadaniem.",
    "explanation": "Konsulowie, pretorzy, kwestorzy i trybuni ludowi pełnili różne funkcje w republice.",
    "options": null,
    "left": [
      "konsulowie",
      "pretorzy",
      "kwestorzy",
      "trybuni ludowi"
    ],
    "right": [
      "zwoływali senat i dowodzili armią",
      "sprawowali władzę sądowniczą",
      "odpowiadali za pobór podatków",
      "reprezentowali plebejuszy"
    ],
    "answer": {
      "konsulowie": "zwoływali senat i dowodzili armią",
      "pretorzy": "sprawowali władzę sądowniczą",
      "kwestorzy": "odpowiadali za pobór podatków",
      "trybuni ludowi": "reprezentowali plebejuszy"
    },
    "image": "/img/r03_schemat_republiki.jpg"
  },
  {
    "id": "R03_UST_06",
    "section": "Ustrój starożytnego Rzymu",
    "type": "multi_select",
    "prompt": "Zaznacz cechy republiki rzymskiej opisane w podręczniku.",
    "explanation": "W republice obywatele wybierali urzędników, kadencje zwykle trwały rok, a ważną rolę odgrywał senat.",
    "options": [
      "Urzędnicy byli wybierani przez obywateli.",
      "Kadencja urzędnika zwykle trwała rok.",
      "Senat uczestniczył w podejmowaniu najważniejszych decyzji.",
      "Każdy mieszkaniec imperium miał od początku pełne prawa polityczne.",
      "Władza należała do króla przez całe życie.",
      "Zgromadzenie ludowe wybierało urzędników."
    ],
    "answer": [
      0,
      1,
      2,
      5
    ]
  },
  {
    "id": "R03_UST_07",
    "section": "Ustrój starożytnego Rzymu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: konsul, pretor, kwestor, faraon.",
    "explanation": "Konsul, pretor i kwestor to urzędy rzymskie, a faraon był władcą Egiptu.",
    "options": null,
    "answer": "faraon"
  },
  {
    "id": "R03_UST_08",
    "section": "Ustrój starożytnego Rzymu",
    "type": "riddle",
    "prompt": "Urzędnik wybierany przez plebejuszy, który mógł sprzeciwiać się niekorzystnym dla nich prawom, to...",
    "explanation": "Trybun ludowy reprezentował plebejuszy i kontrolował decyzje urzędników, poza decyzjami dyktatora.",
    "options": null,
    "answer": "trybun ludowy",
    "altAnswers": [
      "trybun ludowy",
      "trybun",
      "trybuni ludowi"
    ]
  },
  {
    "id": "R03_UST_09",
    "section": "Ustrój starożytnego Rzymu",
    "type": "scenario",
    "prompt": "Jesteś plebejuszem w początkach republiki. Nie możesz obejmować urzędów i chcesz, by ktoś bronił twojej grupy przed decyzjami patrycjuszy. O jaki urząd będziesz walczyć?",
    "explanation": "Plebejusze wywalczyli prawo wyboru własnych urzędników, czyli trybunów ludowych.",
    "options": [
      "trybun ludowy",
      "cenzor",
      "dyktator",
      "król",
      "cesarz",
      "kwestor"
    ],
    "answer": 0,
    "image": "/img/r03_schemat_republiki.jpg"
  },
  {
    "id": "R03_UST_10",
    "section": "Ustrój starożytnego Rzymu",
    "type": "single_choice",
    "prompt": "Który władca zapoczątkował okres cesarstwa w dziejach Rzymu?",
    "explanation": "Oktawian August zachował pozory republiki, ale faktycznie skupił władzę w swoich rękach.",
    "options": [
      "Gajusz Juliusz Cezar",
      "Oktawian August",
      "Romulus",
      "Remus",
      "Konstantyn Wielki",
      "Hannibal"
    ],
    "answer": 1
  },
  {
    "id": "R03_IMP_01",
    "section": "Imperium Rzymskie",
    "type": "single_choice",
    "prompt": "Jak nazywało się potężne miasto-państwo, z którym Rzym stoczył trzy wojny w III i II wieku p.n.e.?",
    "explanation": "Najgroźniejszym rywalem Rzymu w tym okresie była Kartagina.",
    "options": [
      "Kartagina",
      "Ateny",
      "Sparta",
      "Tyr",
      "Aleksandria",
      "Bizancjum"
    ],
    "answer": 0
  },
  {
    "id": "R03_IMP_02",
    "section": "Imperium Rzymskie",
    "type": "fill_in",
    "prompt": "W 146 roku p.n.e. Rzymianie zniszczyli __________, a jej terytoria przyłączyli jako prowincję __________.",
    "explanation": "Po zwycięstwie nad Kartaginą jej ziemie stały się rzymską prowincją Afryka.",
    "options": null,
    "answer": [
      "Kartaginę",
      "Afryka"
    ],
    "altAnswers": [
      [
        "Kartaginę",
        "Kartagina",
        "Kartaginy"
      ],
      [
        "Afryka",
        "Afrykę",
        "Afryki"
      ]
    ]
  },
  {
    "id": "R03_IMP_03",
    "section": "Imperium Rzymskie",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie, które według podręcznika znalazły się pod panowaniem Rzymu do I wieku n.e.",
    "explanation": "Do I wieku n.e. Rzymianie opanowali między innymi Grecję, Egipt, Syrię, Hiszpanię, Galię i Brytanię.",
    "options": [
      "Grecja",
      "Egipt",
      "Syria",
      "Hiszpania",
      "Galia",
      "Chiny"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r03_imperium_rzymskie_mapa.jpg"
  },
  {
    "id": "R03_IMP_04",
    "section": "Imperium Rzymskie",
    "type": "riddle",
    "prompt": "Potężny system umocnień granicznych nad Renem i Dunajem nazywano...",
    "explanation": "Limesy chroniły granice państwa rzymskiego przed atakami ludów spoza imperium.",
    "options": null,
    "answer": "limesy",
    "altAnswers": [
      "limesy",
      "limes",
      "rzymskie limesy"
    ]
  },
  {
    "id": "R03_IMP_05",
    "section": "Imperium Rzymskie",
    "type": "true_false",
    "prompt": "Legion był oddziałem około czterech tysięcy ciężkozbrojnych, dobrze wyszkolonych piechurów.",
    "explanation": "Podstawą potęgi armii rzymskiej były legiony liczące około 4 tysięcy żołnierzy piechoty.",
    "options": null,
    "answer": true,
    "image": "/img/r03_legionista_wyposazenie.jpg"
  },
  {
    "id": "R03_IMP_06",
    "section": "Imperium Rzymskie",
    "type": "match",
    "prompt": "Połącz element wyposażenia legionisty lub machiny z jego funkcją.",
    "explanation": "Wyposażenie legionisty łączyło ochronę, atak i możliwość długiego marszu, a katapulta służyła oblężeniom.",
    "options": null,
    "left": [
      "hełm",
      "oszczep",
      "tarcza",
      "katapulta",
      "sandały"
    ],
    "right": [
      "chronił głowę",
      "służył do walki na odległość",
      "osłaniała przed ciosami",
      "burzyła mury szturmowanych miast",
      "ułatwiały długie marsze"
    ],
    "answer": {
      "hełm": "chronił głowę",
      "oszczep": "służył do walki na odległość",
      "tarcza": "osłaniała przed ciosami",
      "katapulta": "burzyła mury szturmowanych miast",
      "sandały": "ułatwiały długie marsze"
    },
    "image": "/img/r03_legionista_wyposazenie.jpg"
  },
  {
    "id": "R03_IMP_07",
    "section": "Imperium Rzymskie",
    "type": "scenario",
    "prompt": "Rzymianie podbijają nowy obszar. Jego mieszkańcy płacą podatki na rzecz Rzymu, a porządku pilnują tam legiony. Jak nazywano takie terytorium?",
    "explanation": "Podbite przez Rzym terytoria nazywano prowincjami.",
    "options": [
      "prowincja",
      "kolonia grecka",
      "limes",
      "forum",
      "gmina",
      "cyrk"
    ],
    "answer": 0
  },
  {
    "id": "R03_IMP_08",
    "section": "Imperium Rzymskie",
    "type": "single_choice",
    "prompt": "Co oznacza określenie pax Romana w kontekście Imperium Rzymskiego?",
    "explanation": "Pax Romana to okres pokoju w imperium, sprzyjający rozwojowi gospodarczemu i kulturalnemu.",
    "options": [
      "czasy pokoju w imperium",
      "rzymski system podatkowy",
      "wojny z Kartaginą",
      "podział cesarstwa",
      "oddział konnicy",
      "kodeks prawny"
    ],
    "answer": 0
  },
  {
    "id": "R03_IMP_09",
    "section": "Imperium Rzymskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów Imperium Rzymskiego w kolejności chronologicznej.",
    "explanation": "Najpierw Rzym pokonał Kartaginę, potem nastąpił okres świetności imperium, później podział państwa, a na końcu upadek cesarstwa zachodniego.",
    "options": null,
    "items": [
      "upadek cesarstwa zachodniorzymskiego",
      "zniszczenie Kartaginy",
      "podział cesarstwa na wschodnie i zachodnie",
      "okres świetności Imperium Rzymskiego"
    ],
    "answer": [
      "zniszczenie Kartaginy",
      "okres świetności Imperium Rzymskiego",
      "podział cesarstwa na wschodnie i zachodnie",
      "upadek cesarstwa zachodniorzymskiego"
    ],
    "image": "/img/r03_imperium_rzymskie_mapa.jpg"
  },
  {
    "id": "R03_IMP_10",
    "section": "Imperium Rzymskie",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny upadku cesarstwa zachodniorzymskiego wymienione w podręczniku.",
    "explanation": "Do upadku zachodniej części cesarstwa przyczyniły się kryzys gospodarczy i polityczny, najazdy plemion barbarzyńskich oraz spadek znaczenia Rzymu.",
    "options": [
      "kryzys gospodarczy",
      "chaos polityczny i walki o władzę",
      "najazdy plemion barbarzyńskich",
      "upadek znaczenia Rzymu",
      "wynalezienie betonu",
      "zbyt mała liczba dróg"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R03_ZYC_01",
    "section": "Życie w Wiecznym Mieście",
    "type": "single_choice",
    "prompt": "Ilu mieszkańców miał Rzym w okresie świetności w pierwszych wiekach naszej ery?",
    "explanation": "Podręcznik podaje, że stolica cesarstwa liczyła około miliona mieszkańców.",
    "options": [
      "około miliona",
      "około dziesięciu tysięcy",
      "około dwudziestu tysięcy",
      "około pięciu milionów",
      "około stu milionów",
      "około tysiąca"
    ],
    "answer": 0
  },
  {
    "id": "R03_ZYC_02",
    "section": "Życie w Wiecznym Mieście",
    "type": "riddle",
    "prompt": "Plac będący centrum życia miasta, przy którym znajdowały się najważniejsze budynki publiczne i świątynie, to...",
    "explanation": "Forum Romanum było najważniejszym placem starożytnego Rzymu.",
    "options": null,
    "answer": "Forum Romanum",
    "altAnswers": [
      "Forum Romanum",
      "forum",
      "forum rzymskie"
    ],
    "image": "/img/r03_forum_romanum.jpg"
  },
  {
    "id": "R03_ZYC_03",
    "section": "Życie w Wiecznym Mieście",
    "type": "match",
    "prompt": "Połącz grupę społeczną z opisem jej sytuacji w Rzymie.",
    "explanation": "Społeczeństwo Rzymu tworzyli między innymi patrycjusze, plebs i niewolnicy, a gladiatorzy często byli niewolnikami lub jeńcami.",
    "options": null,
    "left": [
      "patrycjusze",
      "plebs",
      "niewolnicy",
      "gladiatorzy"
    ],
    "right": [
      "sprawowali najważniejsze urzędy i zarządzali majątkami",
      "pracowali najemnie, zajmowali się rzemiosłem i drobnym handlem",
      "nie mieli praw ani własności",
      "walczyli na arenie"
    ],
    "answer": {
      "patrycjusze": "sprawowali najważniejsze urzędy i zarządzali majątkami",
      "plebs": "pracowali najemnie, zajmowali się rzemiosłem i drobnym handlem",
      "niewolnicy": "nie mieli praw ani własności",
      "gladiatorzy": "walczyli na arenie"
    }
  },
  {
    "id": "R03_ZYC_04",
    "section": "Życie w Wiecznym Mieście",
    "type": "multi_select",
    "prompt": "Zaznacz bóstwa zaliczane w podręczniku do najważniejszych bogów rzymskich.",
    "explanation": "Do najważniejszych bogów rzymskich należeli Jowisz, Junona, Minerwa, Neptun i Mars.",
    "options": [
      "Jowisz",
      "Junona",
      "Minerwa",
      "Neptun",
      "Mars",
      "Zeus"
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
    "id": "R03_ZYC_05",
    "section": "Życie w Wiecznym Mieście",
    "type": "fill_in",
    "prompt": "Rzymianie wyznawali __________, a domowe bóstwa opiekuńcze nazywano larami i __________.",
    "explanation": "Religia Rzymian była politeistyczna, a w domach czczono lary i penaty.",
    "options": null,
    "answer": [
      "politeizm",
      "penatami"
    ],
    "altAnswers": [
      [
        "politeizm",
        "wielobóstwo"
      ],
      [
        "penatami",
        "penaty",
        "penatów"
      ]
    ]
  },
  {
    "id": "R03_ZYC_06",
    "section": "Życie w Wiecznym Mieście",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Jowisz, Mars, Neptun, Zeus.",
    "explanation": "Zeus to bóg grecki, a Jowisz, Mars i Neptun to rzymskie odpowiedniki bogów greckich.",
    "options": null,
    "answer": "Zeus"
  },
  {
    "id": "R03_ZYC_07",
    "section": "Życie w Wiecznym Mieście",
    "type": "scenario",
    "prompt": "Jesteś biednym mieszkańcem Rzymu. Wynajmujesz bardzo małe mieszkanie w kamienicy, bez ogrzewania, i utrzymujesz się z drobnego handlu. Do której grupy najpewniej należysz?",
    "explanation": "Plebejusze często mieszkali w małych mieszkaniach w kamienicach i zajmowali się rzemiosłem lub handlem.",
    "options": [
      "plebejusze",
      "patrycjusze",
      "senatorowie",
      "westalki",
      "cesarze",
      "konsulowie"
    ],
    "answer": 0,
    "image": "/img/r03_gladiator_amfiteatr.jpg"
  },
  {
    "id": "R03_ZYC_08",
    "section": "Życie w Wiecznym Mieście",
    "type": "true_false",
    "prompt": "Westalki pilnowały wiecznego ognia symbolizującego boginię Westę.",
    "explanation": "Westalki były kapłankami Westy i miały strzec świętego ognia.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_ZYC_09",
    "section": "Życie w Wiecznym Mieście",
    "type": "single_choice",
    "prompt": "Co zniszczyło Pompeje w 79 roku n.e.?",
    "explanation": "Pompeje zostały zasypane pyłem wulkanicznym po wybuchu Wezuwiusza.",
    "options": [
      "wybuch Wezuwiusza",
      "najazd Hunów",
      "pożar Kartaginy",
      "trzęsienie ziemi w Rzymie",
      "powódź Tybru",
      "oblężenie przez Germanów"
    ],
    "answer": 0,
    "image": "/img/r03_pompeje_wezuwiusz.jpg"
  },
  {
    "id": "R03_ZYC_10",
    "section": "Życie w Wiecznym Mieście",
    "type": "sort",
    "prompt": "Przyporządkuj imiona do tradycji religijnej.",
    "explanation": "Rzymianie pod wpływem Greków zaczęli utożsamiać swoich bogów z bóstwami greckimi.",
    "options": null,
    "items": [
      "Jowisz",
      "Junona",
      "Mars",
      "Zeus",
      "Hera",
      "Ares"
    ],
    "categories": [
      "bóstwa rzymskie",
      "bóstwa greckie"
    ],
    "answer": {
      "bóstwa rzymskie": [
        "Jowisz",
        "Junona",
        "Mars"
      ],
      "bóstwa greckie": [
        "Zeus",
        "Hera",
        "Ares"
      ]
    }
  },
  {
    "id": "R03_DOK_01",
    "section": "Dokonania starożytnych Rzymian",
    "type": "single_choice",
    "prompt": "W jakim celu Rzymianie budowali akwedukty?",
    "explanation": "Akwedukty były wodociągami doprowadzającymi świeżą wodę z górskich źródeł do miast.",
    "options": [
      "aby doprowadzać świeżą wodę do miast",
      "aby urządzać wyścigi rydwanów",
      "aby przechowywać zboże",
      "aby wybierać urzędników",
      "aby spisywać prawo",
      "aby składać ofiary wszystkim bogom"
    ],
    "answer": 0,
    "image": "/img/r03_akwedukt_luki.jpg"
  },
  {
    "id": "R03_DOK_02",
    "section": "Dokonania starożytnych Rzymian",
    "type": "multi_select",
    "prompt": "Zaznacz rozwiązania architektoniczne lub materiały stosowane przez Rzymian.",
    "explanation": "Rzymianie stosowali łuk, kopułę, cement i beton, dzięki czemu wznosili trwałe budowle.",
    "options": [
      "łuk",
      "kopuła",
      "cement",
      "beton",
      "druk",
      "proch strzelniczy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R03_DOK_03",
    "section": "Dokonania starożytnych Rzymian",
    "type": "scenario",
    "prompt": "Dowódca legionów chce szybko przenieść oddziały z jednej prowincji do drugiej, a kupcy chcą bezpieczniej podróżować z towarami. Które rzymskie osiągnięcie najbardziej im pomaga?",
    "explanation": "Sieć kamiennych dróg ułatwiała przemieszczanie wojsk i kupców po imperium.",
    "options": [
      "sieć utwardzonych dróg",
      "Prawo XII tablic",
      "ody Horacego",
      "kult Westy",
      "igrzyska gladiatorów",
      "domowe lary"
    ],
    "answer": 0
  },
  {
    "id": "R03_DOK_04",
    "section": "Dokonania starożytnych Rzymian",
    "type": "riddle",
    "prompt": "Najsłynniejsza rzymska świątynia poświęcona wszystkim bogom to...",
    "explanation": "Panteon był świątynią poświęconą wszystkim bogom i słynął z betonowej kopuły.",
    "options": null,
    "answer": "Panteon",
    "altAnswers": [
      "Panteon",
      "Pantheon",
      "panteon"
    ],
    "image": "/img/r03_panteon_kopula.jpg"
  },
  {
    "id": "R03_DOK_05",
    "section": "Dokonania starożytnych Rzymian",
    "type": "match",
    "prompt": "Połącz rzymski obiekt z jego funkcją lub przeznaczeniem.",
    "explanation": "Koloseum, Circus Maximus, łuki triumfalne i Panteon należały do najbardziej charakterystycznych obiektów Rzymu.",
    "options": null,
    "left": [
      "Koloseum",
      "Circus Maximus",
      "łuk triumfalny",
      "Panteon"
    ],
    "right": [
      "walki gladiatorów i widowiska",
      "wyścigi rydwanów",
      "upamiętnianie zwycięstw",
      "świątynia wszystkich bogów"
    ],
    "answer": {
      "Koloseum": "walki gladiatorów i widowiska",
      "Circus Maximus": "wyścigi rydwanów",
      "łuk triumfalny": "upamiętnianie zwycięstw",
      "Panteon": "świątynia wszystkich bogów"
    },
    "image": "/img/r03_panteon_kopula.jpg"
  },
  {
    "id": "R03_DOK_06",
    "section": "Dokonania starożytnych Rzymian",
    "type": "fill_in",
    "prompt": "Najstarszy zbiór przepisów rzymskich to Prawo __________, spisane w V wieku p.n.e. i wystawione na __________.",
    "explanation": "Prawo XII tablic wystawiono na Forum Romanum, aby każdy mógł zapoznać się z przepisami.",
    "options": null,
    "answer": [
      "XII tablic",
      "Forum Romanum"
    ],
    "altAnswers": [
      [
        "XII tablic",
        "Dwunastu tablic",
        "12 tablic"
      ],
      [
        "Forum Romanum",
        "forum",
        "forum rzymskim"
      ]
    ],
    "image": "/img/r03_prawo_xii_tablic.jpg"
  },
  {
    "id": "R03_DOK_07",
    "section": "Dokonania starożytnych Rzymian",
    "type": "true_false",
    "prompt": "Kodeks Justyniana powstał w VI wieku n.e. już po upadku zachodniego Imperium Rzymskiego.",
    "explanation": "Cesarz wschodniorzymski Justynian I Wielki zebrał przepisy w jednym kodeksie w VI wieku n.e.",
    "options": null,
    "answer": true,
    "image": "/img/r03_prawo_xii_tablic.jpg"
  },
  {
    "id": "R03_DOK_08",
    "section": "Dokonania starożytnych Rzymian",
    "type": "single_choice",
    "prompt": "Kto był autorem Eneidy?",
    "explanation": "Eneidę napisał rzymski poeta Wergiliusz.",
    "options": [
      "Wergiliusz",
      "Horacy",
      "Oktawian August",
      "Justynian I Wielki",
      "Pliniusz",
      "Ptolemeusz"
    ],
    "answer": 0
  },
  {
    "id": "R03_DOK_09",
    "section": "Dokonania starożytnych Rzymian",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Wergiliusz, Horacy, ody, akwedukt.",
    "explanation": "Wergiliusz, Horacy i ody wiążą się z literaturą, a akwedukt z architekturą i wodociągami.",
    "options": null,
    "answer": "akwedukt"
  },
  {
    "id": "R03_DOK_10",
    "section": "Dokonania starożytnych Rzymian",
    "type": "multi_select",
    "prompt": "Zaznacz rzymskie zasady prawne opisane w podręczniku jako ważne do dziś.",
    "explanation": "Podręcznik wymienia zasadę, że prawo nie działa wstecz, oraz zasadę wysłuchania obu stron i prawo do obrony.",
    "options": [
      "prawo nie działa wstecz",
      "należy wysłuchać obydwu stron",
      "osoba przed sądem ma prawo do obrony",
      "można karać za czyn, który nie był przestępstwem",
      "sędzia powinien słuchać tylko oskarżyciela",
      "prawo musi być tajne"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R03_CHR_01",
    "section": "Początki chrześcijaństwa",
    "type": "single_choice",
    "prompt": "Gdzie narodziło się chrześcijaństwo?",
    "explanation": "Chrześcijaństwo narodziło się w Palestynie w I wieku n.e.",
    "options": [
      "w Palestynie",
      "w Galii",
      "w Brytanii",
      "w Kartaginie",
      "w Dacji",
      "w Germanii"
    ],
    "answer": 0,
    "image": "/img/r03_ostatnia_wieczerza.jpg"
  },
  {
    "id": "R03_CHR_02",
    "section": "Początki chrześcijaństwa",
    "type": "fill_in",
    "prompt": "Jezus z Nazaretu nauczał, że najważniejsza jest miłość do jedynego __________ oraz do __________.",
    "explanation": "Jezus głosił miłość do jedynego Boga i bliźnich.",
    "options": null,
    "answer": [
      "Boga",
      "bliźnich"
    ],
    "altAnswers": [
      [
        "Boga",
        "boga"
      ],
      [
        "bliźnich",
        "bliźniego",
        "innych ludzi"
      ]
    ],
    "image": "/img/r03_ostatnia_wieczerza.jpg"
  },
  {
    "id": "R03_CHR_03",
    "section": "Początki chrześcijaństwa",
    "type": "true_false",
    "prompt": "Według podręcznika Jezus został około 33 roku n.e. skazany na śmierć przez ukrzyżowanie.",
    "explanation": "Śmierć Jezusa przez ukrzyżowanie około 33 roku n.e. podręcznik łączy z początkami chrześcijaństwa.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_CHR_04",
    "section": "Początki chrześcijaństwa",
    "type": "riddle",
    "prompt": "Najbliżsi uczniowie Jezusa, którzy rozpowszechniali jego nauki, to...",
    "explanation": "Apostołowie głosili, że Jezus zmartwychwstał, i udzielali chrztu kolejnym wyznawcom.",
    "options": null,
    "answer": "apostołowie",
    "altAnswers": [
      "apostołowie",
      "Apostołowie",
      "uczniowie Jezusa"
    ]
  },
  {
    "id": "R03_CHR_05",
    "section": "Początki chrześcijaństwa",
    "type": "multi_select",
    "prompt": "Zaznacz zdania zgodne z naukami Jezusa opisanymi w rozdziale.",
    "explanation": "Nauki Jezusa podkreślały miłość, przebaczenie i równość ludzi wobec Boga, a nie walkę polityczną z Rzymem.",
    "options": [
      "Należy kochać Boga i bliźnich.",
      "Trzeba wybaczać nawet prześladowcom.",
      "Wszyscy ludzie są równi wobec Boga.",
      "Najważniejsze jest zrzucenie rzymskiego panowania.",
      "Bóg oczekuje wyłącznie licznych ofiar.",
      "Dobre uczynki prowadzą do zmartwychwstania i życia wiecznego w raju."
    ],
    "answer": [
      0,
      1,
      2,
      5
    ]
  },
  {
    "id": "R03_CHR_06",
    "section": "Początki chrześcijaństwa",
    "type": "scenario",
    "prompt": "Paweł z Tarsu podróżuje po krajach Imperium Rzymskiego i głosi, że chrześcijaństwo może przyjąć każdy, niezależnie od pochodzenia. Jaki skutek miała taka działalność?",
    "explanation": "Dzięki działalności apostołów, szczególnie Pawła, chrześcijaństwo rozprzestrzeniło się poza Palestynę.",
    "options": [
      "rozprzestrzenienie chrześcijaństwa poza Palestynę",
      "zamknięcie chrześcijaństwa tylko wśród patrycjuszy",
      "natychmiastowy upadek Rzymu",
      "koniec wszystkich gmin",
      "zakaz podróży misyjnych",
      "powstanie Kartaginy"
    ],
    "answer": 0
  },
  {
    "id": "R03_CHR_07",
    "section": "Początki chrześcijaństwa",
    "type": "match",
    "prompt": "Połącz postać z rolą opisaną w podręczniku.",
    "explanation": "Piotr, Paweł, Konstantyn i Teodozjusz odegrali różne role w dziejach chrześcijaństwa w świecie rzymskim.",
    "options": null,
    "left": [
      "święty Piotr",
      "święty Paweł",
      "Konstantyn Wielki",
      "Teodozjusz"
    ],
    "right": [
      "według tradycji pierwszy biskup Rzymu",
      "prowadził podróże misyjne",
      "wydał Edykt mediolański",
      "zakazał wyznawania innych religii"
    ],
    "answer": {
      "święty Piotr": "według tradycji pierwszy biskup Rzymu",
      "święty Paweł": "prowadził podróże misyjne",
      "Konstantyn Wielki": "wydał Edykt mediolański",
      "Teodozjusz": "zakazał wyznawania innych religii"
    }
  },
  {
    "id": "R03_CHR_08",
    "section": "Początki chrześcijaństwa",
    "type": "single_choice",
    "prompt": "W którym roku wydano Edykt mediolański zezwalający na swobodne wyznawanie chrześcijaństwa?",
    "explanation": "Edykt mediolański wydano w 313 roku n.e.",
    "options": [
      "313 rok n.e.",
      "33 rok n.e.",
      "79 rok n.e.",
      "395 rok n.e.",
      "476 rok n.e.",
      "753 rok p.n.e."
    ],
    "answer": 0,
    "image": "/img/r03_ryba_symbol_chrzescijan.jpg"
  },
  {
    "id": "R03_CHR_09",
    "section": "Początki chrześcijaństwa",
    "type": "true_false",
    "prompt": "Jedną z przyczyn prześladowań chrześcijan była ich odmowa udziału w państwowych obrzędach ku czci cesarzy.",
    "explanation": "Chrześcijanom nie pozwalała na to wiara w jedynego Boga, dlatego władze rzymskie zaczęły traktować ich wrogo.",
    "options": null,
    "answer": true,
    "image": "/img/r03_ryba_symbol_chrzescijan.jpg"
  },
  {
    "id": "R03_CHR_10",
    "section": "Początki chrześcijaństwa",
    "type": "fill_in",
    "prompt": "Biblia chrześcijan składa się ze __________ i z __________.",
    "explanation": "Pismo Święte chrześcijan tworzą Stary Testament i Nowy Testament.",
    "options": null,
    "answer": [
      "Starego Testamentu",
      "Nowego Testamentu"
    ],
    "altAnswers": [
      [
        "Starego Testamentu",
        "Stary Testament"
      ],
      [
        "Nowego Testamentu",
        "Nowy Testament"
      ]
    ]
  },
  {
    "id": "R03_BUR_01",
    "section": "Bursztynowy szlak",
    "type": "single_choice",
    "prompt": "Czym jest bursztyn według podręcznika?",
    "explanation": "Bursztyn to skamieniała żywica drzew iglastych.",
    "options": [
      "skamieniała żywica drzew iglastych",
      "zastygła lawa",
      "metal szlachetny",
      "wyrób ze srebra",
      "rzymska moneta",
      "rodzaj szkła"
    ],
    "answer": 0
  },
  {
    "id": "R03_BUR_02",
    "section": "Bursztynowy szlak",
    "type": "multi_select",
    "prompt": "Zaznacz ślady kontaktów ziem polskich z Imperium Rzymskim wymienione w tekście o bursztynowym szlaku.",
    "explanation": "Na terenach Polski znajdowano składy bursztynu, rzymskie monety i przedmioty codziennego użytku.",
    "options": [
      "składy bursztynu",
      "rzymskie monety",
      "rzymskie przedmioty codziennego użytku",
      "rzymskie piramidy",
      "średniowieczne zamki",
      "koleje żelazne"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R03_BUR_03",
    "section": "Bursztynowy szlak",
    "type": "riddle",
    "prompt": "Droga, którą kupcy rzymscy podążali nad Bałtyk po bursztyn, to...",
    "explanation": "Trasa wypraw po bursztyn była określana jako bursztynowy szlak.",
    "options": null,
    "answer": "bursztynowy szlak",
    "altAnswers": [
      "bursztynowy szlak",
      "szlak bursztynowy",
      "Bursztynowy szlak"
    ]
  },
  {
    "id": "R03_BUR_04",
    "section": "Bursztynowy szlak",
    "type": "scenario",
    "prompt": "Kupiec znad Morza Śródziemnego przekracza Bramę Morawską, podąża na północ przez obecne ziemie polskie i dociera do osad nad Bałtykiem. Po jaki surowiec wyruszył?",
    "explanation": "Rzymscy handlarze wyprawiali się nad Bałtyk po drogocenny bursztyn.",
    "options": [
      "bursztyn",
      "oliwę",
      "marmur",
      "papirus",
      "sól z Sahary",
      "jedwab z Chin"
    ],
    "answer": 0,
    "image": "/img/r03_kupcy_bursztyn_baltyk.jpg"
  },
  {
    "id": "R03_BUR_05",
    "section": "Bursztynowy szlak",
    "type": "match",
    "prompt": "Połącz nazwę z opisem z tekstu o bursztynowym szlaku.",
    "explanation": "Tekst o bursztynowym szlaku łączy Ptolemeusza, Calisię, Bramę Morawską i Pruszcz Gdański z kontaktami handlowymi.",
    "options": null,
    "left": [
      "Ptolemeusz",
      "Calisia",
      "Brama Morawska",
      "Pruszcz Gdański"
    ],
    "right": [
      "grecki geograf i astronom",
      "nazwa miejscowości zapisana w starożytnym źródle",
      "naturalne obniżenie między Sudetami i Karpatami",
      "miejsce rekonstrukcji osady z czasów rzymskich"
    ],
    "answer": {
      "Ptolemeusz": "grecki geograf i astronom",
      "Calisia": "nazwa miejscowości zapisana w starożytnym źródle",
      "Brama Morawska": "naturalne obniżenie między Sudetami i Karpatami",
      "Pruszcz Gdański": "miejsce rekonstrukcji osady z czasów rzymskich"
    }
  },
  {
    "id": "R03_BUR_06",
    "section": "Bursztynowy szlak",
    "type": "true_false",
    "prompt": "Rzymianie wykorzystywali bursztyn wyłącznie jako przyprawę do jedzenia.",
    "explanation": "Rzymianie robili z bursztynu biżuterię, figurki bóstw, ozdabiali nim broń oraz używali go jako środka zapachowego, leczniczego i magicznego.",
    "options": null,
    "answer": false
  },
  {
    "id": "R03_BUR_07",
    "section": "Bursztynowy szlak",
    "type": "fill_in",
    "prompt": "Grecy nazywali bursztyn słowem __________, od którego wywodzi się wyraz __________.",
    "explanation": "Grecka nazwa elektron wiąże się z właściwościami elektrostatycznymi bursztynu i dała początek słowu elektryczność.",
    "options": null,
    "answer": [
      "elektron",
      "elektryczność"
    ],
    "altAnswers": [
      [
        "elektron",
        "elektronem"
      ],
      [
        "elektryczność",
        "elektryczności"
      ]
    ]
  },
  {
    "id": "R03_BUR_08",
    "section": "Bursztynowy szlak",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: bursztyn, jantar, amber, marmur.",
    "explanation": "Bursztyn, jantar i amber to nazwy tego samego surowca, a marmur jest kamieniem.",
    "options": null,
    "answer": "marmur"
  },
  {
    "id": "R03_BUR_09",
    "section": "Bursztynowy szlak",
    "type": "single_choice",
    "prompt": "W rejonie którego współczesnego miasta Rzymianie przerabiali bursztyn na biżuterię i ozdoby?",
    "explanation": "Podręcznik podaje, że bursztyn przywożono w rejon dzisiejszej Wenecji, gdzie rzemieślnicy wykonywali z niego ozdoby.",
    "options": [
      "Wenecji",
      "Londynu",
      "Paryża",
      "Aten",
      "Aleksandrii",
      "Kartaginy"
    ],
    "answer": 0
  },
  {
    "id": "R03_BUR_10",
    "section": "Bursztynowy szlak",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do drogi kupców albo do wykorzystania bursztynu.",
    "explanation": "Kupcy wędrowali przez Bramę Morawską i ziemie polskie do osad nad Bałtykiem, a bursztyn przerabiano na ozdoby i przedmioty kultowe.",
    "options": null,
    "items": [
      "Brama Morawska",
      "rzeki obecnych ziem polskich",
      "osady nad Bałtykiem",
      "biżuteria",
      "figurki bóstw",
      "ozdabianie broni"
    ],
    "categories": [
      "droga kupców",
      "wykorzystanie bursztynu"
    ],
    "answer": {
      "droga kupców": [
        "Brama Morawska",
        "rzeki obecnych ziem polskich",
        "osady nad Bałtykiem"
      ],
      "wykorzystanie bursztynu": [
        "biżuteria",
        "figurki bóstw",
        "ozdabianie broni"
      ]
    }
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "explanation": "Kolejność dat to: 753 p.n.e., 509 p.n.e., 44 p.n.e., 27 p.n.e., 395 n.e. i 476 n.e.",
    "options": null,
    "items": [
      "podział cesarstwa na wschodnie i zachodnie",
      "założenie Rzymu",
      "śmierć Gajusza Juliusza Cezara",
      "upadek cesarstwa zachodniorzymskiego",
      "wprowadzenie republiki",
      "Oktawian August przejmuje pełnię władzy"
    ],
    "answer": [
      "założenie Rzymu",
      "wprowadzenie republiki",
      "śmierć Gajusza Juliusza Cezara",
      "Oktawian August przejmuje pełnię władzy",
      "podział cesarstwa na wschodnie i zachodnie",
      "upadek cesarstwa zachodniorzymskiego"
    ]
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary bóstw rzymskich i ich greckich odpowiedników z podręcznika.",
    "explanation": "Pod wpływem religii greckiej Rzymianie utożsamiali między innymi Jowisza z Zeusem, Junonę z Herą, Marsa z Aresem, Neptuna z Posejdonem i Wenus z Afrodytą.",
    "options": [
      "Jowisz — Zeus",
      "Junona — Hera",
      "Mars — Ares",
      "Neptun — Posejdon",
      "Wenus — Afrodyta",
      "Minerwa — Demeter"
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
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Gajusz Juliusz Cezar podbił __________, a następnie zmusił senat do przyznania mu tytułu __________.",
    "explanation": "Cezar wykorzystał sukces w Galii i został dożywotnim dyktatorem, choć formalnie nie zlikwidował dawnych urzędów.",
    "options": null,
    "answer": [
      "Galię",
      "dożywotniego dyktatora"
    ],
    "altAnswers": [
      [
        "Galię",
        "Galia",
        "Galii"
      ],
      [
        "dożywotniego dyktatora",
        "dyktatora dożywotniego",
        "dożywotni dyktator"
      ]
    ]
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś rzymskim obywatelem w V wieku p.n.e. Chcesz, aby przepisy nie zależały tylko od pamięci i zwyczaju, lecz były dostępne dla wszystkich. Gdzie zgodnie z podręcznikiem należało wystawić spisane prawa?",
    "explanation": "Prawo XII tablic wystawiono na Forum Romanum, aby każdy mógł zapoznać się z obowiązującymi przepisami.",
    "options": [
      "na Forum Romanum",
      "w prywatnej willi patrycjusza",
      "w obozie Hunów",
      "w świątyni w Kartaginie",
      "na bursztynowym szlaku",
      "w cyrku"
    ],
    "answer": 0,
    "image": "/img/r03_prawo_xii_tablic.jpg"
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem opisanym w rozdziale.",
    "explanation": "Daty te pojawiają się w różnych częściach rozdziału i dotyczą wojen, rozrywek, budowli oraz chrześcijaństwa.",
    "options": null,
    "left": [
      "146 rok p.n.e.",
      "73 rok p.n.e.",
      "79 rok n.e.",
      "113 rok n.e.",
      "313 rok n.e."
    ],
    "right": [
      "zniszczenie Kartaginy",
      "wybuch powstania Spartakusa",
      "zniszczenie Pompejów przez Wezuwiusza",
      "wzniesienie Kolumny Trajana",
      "wydanie Edyktu mediolańskiego"
    ],
    "answer": {
      "146 rok p.n.e.": "zniszczenie Kartaginy",
      "73 rok p.n.e.": "wybuch powstania Spartakusa",
      "79 rok n.e.": "zniszczenie Pompejów przez Wezuwiusza",
      "113 rok n.e.": "wzniesienie Kolumny Trajana",
      "313 rok n.e.": "wydanie Edyktu mediolańskiego"
    }
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pozbawienie władzy Romulusa Augustulusa w 476 roku n.e. historycy uznali za symboliczny koniec starożytności.",
    "explanation": "Podręcznik wskazuje 476 rok n.e. jako upadek cesarstwa zachodniorzymskiego i symboliczny koniec starożytności.",
    "options": null,
    "answer": true
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: lary, penaty, westalki, trybuni ludowi.",
    "explanation": "Lary, penaty i westalki wiążą się z religią rzymską, a trybuni ludowi byli urzędnikami reprezentującymi plebejuszy.",
    "options": null,
    "answer": "trybuni ludowi"
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co w podręczniku oznacza zasada „prawo nie działa wstecz”?",
    "explanation": "Zasada ta oznacza, że można karać tylko za czyn, który w chwili popełnienia był uznawany za przestępstwo.",
    "options": [
      "można karać tylko za czyn uznawany za przestępstwo w chwili popełnienia",
      "każde prawo wygasa po roku",
      "wyrok wolno wydać bez wysłuchania oskarżonego",
      "prawo dotyczy tylko senatorów",
      "sąd zawsze działa za murami miasta",
      "niewolnik ma więcej praw niż obywatel"
    ],
    "answer": 0
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Proces, w którym część ludności podbitych krajów przyjmowała język łaciński i rzymskie wzorce kulturowe, to...",
    "explanation": "Romanizacja oznaczała przejmowanie języka łacińskiego oraz rzymskich zwyczajów, rozrywek i ubioru.",
    "options": null,
    "answer": "romanizacja",
    "altAnswers": [
      "romanizacja",
      "Romanizacja"
    ]
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do rozwoju imperium albo do osłabienia cesarstwa zachodniego.",
    "explanation": "Legiony, drogi i pax Romana sprzyjały potędze Rzymu, natomiast kryzys, najazdy i chaos polityczny osłabiały cesarstwo zachodnie.",
    "options": null,
    "items": [
      "legiony",
      "sieć dróg",
      "pax Romana",
      "kryzys gospodarczy",
      "najazdy barbarzyńców",
      "walki o tron cesarski"
    ],
    "categories": [
      "czynniki rozwoju Imperium",
      "czynniki osłabienia Zachodu"
    ],
    "answer": {
      "czynniki rozwoju Imperium": [
        "legiony",
        "sieć dróg",
        "pax Romana"
      ],
      "czynniki osłabienia Zachodu": [
        "kryzys gospodarczy",
        "najazdy barbarzyńców",
        "walki o tron cesarski"
      ]
    }
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Starożytny Rzym",
  icon: "🏛️",
  sectionOrder: [
    "Ustrój starożytnego Rzymu",
    "Imperium Rzymskie",
    "Życie w Wiecznym Mieście",
    "Dokonania starożytnych Rzymian",
    "Początki chrześcijaństwa",
    "Bursztynowy szlak",
    "Super trudne"
  ],
  sectionIcons: {
    "Ustrój starożytnego Rzymu": "⚖️",
    "Imperium Rzymskie": "🦅",
    "Życie w Wiecznym Mieście": "🏟️",
    "Dokonania starożytnych Rzymian": "🏗️",
    "Początki chrześcijaństwa": "✝️",
    "Bursztynowy szlak": "🟠",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
