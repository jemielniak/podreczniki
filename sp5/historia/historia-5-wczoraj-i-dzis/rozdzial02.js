// Skróty sekcji:
//   ATE = Demokratyczne Ateny
//   SPA = Sparta i wojny z Persami
//   BOG = Bogowie i mity
//   KUL = Kultura starożytnej Grecji
//   ALE = Imperium Aleksandra Wielkiego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_ATE_01",
    "section": "Demokratyczne Ateny",
    "type": "single_choice",
    "prompt": "Jak starożytni Grecy nazywali samych siebie?",
    "options": [
      "Rzymianami",
      "Hellenami",
      "Persami",
      "Egipcjanami",
      "Macedończykami",
      "Fenicianami"
    ],
    "answer": 1,
    "explanation": "Starożytni Grecy nazywali siebie Hellenami, a swoją ojczyznę Helladą."
  },
  {
    "id": "R02_ATE_02",
    "section": "Demokratyczne Ateny",
    "type": "multi_select",
    "prompt": "Zaznacz zajęcia i uprawy typowe dla mieszkańców Hellady według podręcznika.",
    "options": [
      "uprawa oliwek",
      "uprawa winorośli",
      "hodowla owiec i kóz",
      "uprawa ryżu na wielkich równinach",
      "żegluga",
      "wydobywanie węgla kamiennego"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Grecy uprawiali między innymi oliwki, winorośl i zboża, hodowali owce oraz kozy i byli dobrymi żeglarzami.",
    "image": "/img/r02_grecja_teren_gorzysty_polis.jpg"
  },
  {
    "id": "R02_ATE_03",
    "section": "Demokratyczne Ateny",
    "type": "true_false",
    "prompt": "Każda grecka polis miała własne władze i wojsko.",
    "options": null,
    "answer": true,
    "explanation": "Polis były samodzielnymi miastami-państwami, dlatego miały własne władze i własne siły zbrojne."
  },
  {
    "id": "R02_ATE_04",
    "section": "Demokratyczne Ateny",
    "type": "fill_in",
    "prompt": "Grecy nazywali swoją ojczyznę __________, a samodzielne miasta-państwa określali jako __________.",
    "options": null,
    "answer": [
      "Helladą",
      "polis"
    ],
    "altAnswers": [
      [
        "Helladą",
        "Hellada",
        "Hellady"
      ],
      [
        "polis",
        "poleis"
      ]
    ],
    "explanation": "Hellada to grecka ojczyzna, a polis to samodzielne miasto-państwo z okolicznymi wsiami."
  },
  {
    "id": "R02_ATE_05",
    "section": "Demokratyczne Ateny",
    "type": "single_choice",
    "prompt": "W którym wieku p.n.e. ostatecznie ukształtowały się greckie polis?",
    "options": [
      "w XII wieku p.n.e.",
      "w VIII wieku p.n.e.",
      "w V wieku p.n.e.",
      "w III wieku p.n.e.",
      "w I wieku p.n.e.",
      "w I wieku n.e."
    ],
    "answer": 1,
    "explanation": "Podręcznik podaje, że greckie miasta-państwa ostatecznie ukształtowały się w VIII wieku p.n.e."
  },
  {
    "id": "R02_ATE_06",
    "section": "Demokratyczne Ateny",
    "type": "riddle",
    "prompt": "Centralny plac greckiego miasta, na którym odbywały się spotkania, dyskusje i handel, to...",
    "options": null,
    "answer": "agora",
    "altAnswers": [
      "agora",
      "agorą",
      "agorze"
    ],
    "explanation": "Agora była centralnym placem polis, miejscem handlu, uroczystości, spotkań politycznych i dyskusji.",
    "image": "/img/r02_starozytne_ateny_agora_akropol.jpg"
  },
  {
    "id": "R02_ATE_07",
    "section": "Demokratyczne Ateny",
    "type": "single_choice",
    "prompt": "Jaką rolę w greckiej polis pełnił akropol?",
    "options": [
      "Był portem wojennym",
      "Był wzgórzem z funkcją twierdzy i miejsca kultu",
      "Był wyłącznie targiem rybnym",
      "Był szkołą dla niewolników",
      "Był siedzibą perskiego namiestnika",
      "Był stadionem olimpijskim"
    ],
    "answer": 1,
    "explanation": "Akropol był wzgórzem górującym nad miastem; pełnił funkcję obronną i kultową.",
    "image": "/img/r02_starozytne_ateny_agora_akropol.jpg"
  },
  {
    "id": "R02_ATE_08",
    "section": "Demokratyczne Ateny",
    "type": "scenario",
    "prompt": "Mieszkaniec Aten chce przemawiać na zgromadzeniu ludowym. Jest pełnoletnim mężczyzną, a jego rodzice są Ateńczykami. Jak określiłby go podręcznik?",
    "options": [
      "obywatel Aten",
      "helota",
      "periojek",
      "niewolnik",
      "przybysz bez praw",
      "król"
    ],
    "answer": 0,
    "explanation": "Obywatelami Aten byli tylko pełnoletni mężczyźni, których rodzice byli Ateńczykami."
  },
  {
    "id": "R02_ATE_09",
    "section": "Demokratyczne Ateny",
    "type": "true_false",
    "prompt": "W demokracji ateńskiej kobiety, niewolnicy i przybysze mogli uczestniczyć w podejmowaniu decyzji państwowych na równi z obywatelami.",
    "options": null,
    "answer": false,
    "explanation": "Prawa polityczne mieli wyłącznie obywatele, czyli pełnoletni mężczyźni pochodzący z Aten."
  },
  {
    "id": "R02_ATE_10",
    "section": "Demokratyczne Ateny",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "Perykles",
      "zgromadzenie ludowe",
      "amfora",
      "mury Aten"
    ],
    "right": [
      "naczynie do przechowywania wina lub oliwy",
      "miejsce podejmowania najważniejszych decyzji",
      "polityk uznawany za głównego twórcę demokracji ateńskiej",
      "ochrona miasta przed wrogami"
    ],
    "answer": {
      "Perykles": "polityk uznawany za głównego twórcę demokracji ateńskiej",
      "zgromadzenie ludowe": "miejsce podejmowania najważniejszych decyzji",
      "amfora": "naczynie do przechowywania wina lub oliwy",
      "mury Aten": "ochrona miasta przed wrogami"
    },
    "explanation": "Perykles był wybitnym ateńskim politykiem, a najważniejsze decyzje zapadały na zgromadzeniu ludowym; amfory i mury należały do codzienności miasta."
  },
  {
    "id": "R02_ATE_11",
    "section": "Demokratyczne Ateny",
    "type": "multi_select",
    "prompt": "Jakie sprawy mogły być omawiane na ateńskim zgromadzeniu ludowym według podręcznika?",
    "options": [
      "wypowiedzenie wojny",
      "zawarcie pokoju",
      "nałożenie nowych podatków",
      "wybór faraona Egiptu",
      "ustalenie kursu monet Lidów",
      "budowa piramid w Gizie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Na zgromadzeniu ludowym dyskutowano między innymi o wojnie, pokoju i podatkach."
  },
  {
    "id": "R02_ATE_12",
    "section": "Demokratyczne Ateny",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Ateny, Sparta, Korynt, amfora.",
    "options": null,
    "answer": "amfora",
    "explanation": "Ateny, Sparta i Korynt to greckie polis, natomiast amfora to naczynie."
  },
  {
    "id": "R02_SPA_01",
    "section": "Sparta i wojny z Persami",
    "type": "single_choice",
    "prompt": "W jakiej krainie leżała Sparta?",
    "options": [
      "w Lakonii",
      "w Attyce",
      "w Fenicji",
      "w Egipcie",
      "w Babilonii",
      "w Baktrii"
    ],
    "answer": 0,
    "explanation": "Sparta była położona w Lakonii, na południu Grecji."
  },
  {
    "id": "R02_SPA_02",
    "section": "Sparta i wojny z Persami",
    "type": "match",
    "prompt": "Połącz grupę społeczną lub władzę Sparty z opisem.",
    "options": null,
    "left": [
      "Spartanie",
      "heloci",
      "periojkowie",
      "dwaj królowie"
    ],
    "right": [
      "pełnoprawni obywatele i żołnierze",
      "podbitą ludność zmieniono w niewolników",
      "wolni mieszkańcy bez praw politycznych",
      "jeden mógł wyruszać na wojnę, drugi zostawał w polis"
    ],
    "answer": {
      "Spartanie": "pełnoprawni obywatele i żołnierze",
      "heloci": "podbitą ludność zmieniono w niewolników",
      "periojkowie": "wolni mieszkańcy bez praw politycznych",
      "dwaj królowie": "jeden mógł wyruszać na wojnę, drugi zostawał w polis"
    },
    "explanation": "Społeczeństwo Sparty dzieliło się na pełnoprawnych Spartan, niewolnych helotów i wolnych, lecz pozbawionych praw politycznych periojków."
  },
  {
    "id": "R02_SPA_03",
    "section": "Sparta i wojny z Persami",
    "type": "true_false",
    "prompt": "Podstawowym zajęciem Spartan była służba wojskowa, która obowiązywała ich do 60. roku życia.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje, że spartańscy mężczyźni byli zobowiązani do służby wojskowej do 60. roku życia."
  },
  {
    "id": "R02_SPA_04",
    "section": "Sparta i wojny z Persami",
    "type": "sequence",
    "prompt": "Ułóż etapy życia Spartanina w kolejności od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "po 20. roku życia — obowiązkowa służba wojskowa",
      "do 7. roku życia — wychowanie przez matkę",
      "po 60. roku życia — koniec nakazu służby wojskowej",
      "po 7. roku życia — surowe wychowanie",
      "po 30. roku życia — opuszczenie koszar"
    ],
    "answer": [
      "do 7. roku życia — wychowanie przez matkę",
      "po 7. roku życia — surowe wychowanie",
      "po 20. roku życia — obowiązkowa służba wojskowa",
      "po 30. roku życia — opuszczenie koszar",
      "po 60. roku życia — koniec nakazu służby wojskowej"
    ],
    "explanation": "Podręcznik przedstawia życie Spartanina jako ciąg surowego wychowania i wieloletniej służby wojskowej."
  },
  {
    "id": "R02_SPA_05",
    "section": "Sparta i wojny z Persami",
    "type": "multi_select",
    "prompt": "Zaznacz elementy uzbrojenia hoplity wymienione w podręczniku.",
    "options": [
      "włócznia",
      "miecz",
      "okrągła tarcza hoplon",
      "hełm",
      "pancerz",
      "kusza"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Hoplita walczył włócznią i mieczem, a chroniły go hełm, pancerz oraz okrągła tarcza hoplon.",
    "image": "/img/r02_hoplita_falanga.jpg"
  },
  {
    "id": "R02_SPA_06",
    "section": "Sparta i wojny z Persami",
    "type": "riddle",
    "prompt": "Zwarty szyk bojowy greckiej piechoty, tworzony przez ustawionych blisko siebie hoplitów, to...",
    "options": null,
    "answer": "falanga",
    "altAnswers": [
      "falanga",
      "falangą",
      "falangi"
    ],
    "explanation": "Falanga była zwartym szykiem, w którym hoplici osłaniali się zachodzącymi na siebie tarczami.",
    "image": "/img/r02_hoplita_falanga.jpg"
  },
  {
    "id": "R02_SPA_07",
    "section": "Sparta i wojny z Persami",
    "type": "single_choice",
    "prompt": "Które greckie miasto przewodziło antyperskiemu powstaniu w Azji Mniejszej w 499 roku p.n.e.?",
    "options": [
      "Milet",
      "Ateny",
      "Sparta",
      "Olimpia",
      "Itaka",
      "Gordion"
    ],
    "answer": 0,
    "explanation": "Powstaniu przeciw Persom przewodził Milet, wsparty przez Ateńczyków."
  },
  {
    "id": "R02_SPA_08",
    "section": "Sparta i wojny z Persami",
    "type": "fill_in",
    "prompt": "W roku __________ p.n.e. król perski __________ wysłał armię przeciwko Atenom.",
    "options": null,
    "answer": [
      "490",
      "Dariusz"
    ],
    "altAnswers": [
      [
        "490",
        "490 roku"
      ],
      [
        "Dariusz",
        "Dariusza"
      ]
    ],
    "explanation": "Dariusz chciał ukarać Ateny za wsparcie buntu w Milecie, lecz Persowie ponieśli klęskę pod Maratonem."
  },
  {
    "id": "R02_SPA_09",
    "section": "Sparta i wojny z Persami",
    "type": "scenario",
    "prompt": "Oddział 300 Spartan pod wodzą Leonidasa pozostaje w wąskim przesmyku, aby osłonić odwrót Greków. O której bitwie mowa?",
    "options": [
      "pod Termopilami",
      "pod Maratonem",
      "pod Issos",
      "pod Gaugamelą",
      "nad Granikiem",
      "pod Cheroneą"
    ],
    "answer": 0,
    "explanation": "W Termopilach 300 Spartan pod wodzą Leonidasa zginęło, broniąc przesmyku przed Persami."
  },
  {
    "id": "R02_SPA_10",
    "section": "Sparta i wojny z Persami",
    "type": "true_false",
    "prompt": "Bitwa pod Salaminą była starciem morskim z 480 roku p.n.e., które zakończyło się klęską floty perskiej.",
    "options": null,
    "answer": true,
    "explanation": "Pod Salaminą Grecy rozbili perską flotę, co zmusiło Persów do rezygnacji z planów podboju Grecji."
  },
  {
    "id": "R02_SPA_11",
    "section": "Sparta i wojny z Persami",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Maraton, Termopile, Salamina, Olimpia.",
    "options": null,
    "answer": "Olimpia",
    "explanation": "Maraton, Termopile i Salamina to miejsca bitew grecko-perskich, a Olimpia była miejscem igrzysk ku czci Zeusa."
  },
  {
    "id": "R02_SPA_12",
    "section": "Sparta i wojny z Persami",
    "type": "scenario",
    "prompt": "Ateński wódz nakazuje ludności opuścić miasto, bo chce stoczyć decydującą bitwę z Persami na morzu. Jak się nazywał ten wódz?",
    "options": [
      "Temistokles",
      "Perykles",
      "Leonidas",
      "Filip II",
      "Sokrates",
      "Homer"
    ],
    "answer": 0,
    "explanation": "Temistokles postanowił rozegrać bitwę morską, która zakończyła się zwycięstwem Greków pod Salaminą."
  },
  {
    "id": "R02_BOG_01",
    "section": "Bogowie i mity",
    "type": "single_choice",
    "prompt": "Jak nazywa się wiara w wielu bogów?",
    "options": [
      "politeizm",
      "demokracja",
      "filozofia",
      "hellenizacja",
      "olimpiada",
      "falanga"
    ],
    "answer": 0,
    "explanation": "Politeizm oznacza wiarę w wielu bogów, taką jak religia starożytnych Greków."
  },
  {
    "id": "R02_BOG_02",
    "section": "Bogowie i mity",
    "type": "fill_in",
    "prompt": "Według Greków bogowie mieszkali na górze __________, a nieśmiertelność zapewniały im __________ i __________.",
    "options": null,
    "answer": [
      "Olimp",
      "ambrozja",
      "nektar"
    ],
    "altAnswers": [
      [
        "Olimp",
        "Olimpie",
        "Olimpu"
      ],
      [
        "ambrozja",
        "ambrozję"
      ],
      [
        "nektar",
        "nektarem"
      ]
    ],
    "explanation": "Siedzibą bogów był Olimp, a ich cudownym pokarmem i napojem były ambrozja oraz nektar."
  },
  {
    "id": "R02_BOG_03",
    "section": "Bogowie i mity",
    "type": "match",
    "prompt": "Połącz boga z jego atrybutem lub znakiem rozpoznawczym.",
    "options": null,
    "left": [
      "Zeus",
      "Posejdon",
      "Apollo",
      "Hades"
    ],
    "right": [
      "piorun",
      "trójząb",
      "lira",
      "Cerber"
    ],
    "answer": {
      "Zeus": "piorun",
      "Posejdon": "trójząb",
      "Apollo": "lira",
      "Hades": "Cerber"
    },
    "explanation": "Greckich bogów rozpoznawano po atrybutach, na przykład Zeus miał piorun, a Posejdon trójząb.",
    "image": "/img/r02_bogowie_olimpijscy_atrybuty.jpg"
  },
  {
    "id": "R02_BOG_04",
    "section": "Bogowie i mity",
    "type": "multi_select",
    "prompt": "Zaznacz postacie, które w podręczniku występują jako bogowie olimpijscy.",
    "options": [
      "Atena",
      "Ares",
      "Hera",
      "Posejdon",
      "Herakles",
      "Achilles"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Atena, Ares, Hera i Posejdon należą do bogów, natomiast Herakles i Achilles są herosami.",
    "image": "/img/r02_bogowie_olimpijscy_atrybuty.jpg"
  },
  {
    "id": "R02_BOG_05",
    "section": "Bogowie i mity",
    "type": "riddle",
    "prompt": "Półbóg, którego jedno z rodziców było bogiem, a drugie człowiekiem, to...",
    "options": null,
    "answer": "heros",
    "altAnswers": [
      "heros",
      "herosem",
      "półbóg",
      "polbog"
    ],
    "explanation": "Herosi wyróżniali się niezwykłą urodą i siłą, ale w przeciwieństwie do bogów byli śmiertelni."
  },
  {
    "id": "R02_BOG_06",
    "section": "Bogowie i mity",
    "type": "single_choice",
    "prompt": "Ile trudnych zadań musiał wykonać Herakles?",
    "options": [
      "7",
      "10",
      "12",
      "20",
      "30",
      "100"
    ],
    "answer": 2,
    "explanation": "Herakles, syn Zeusa, musiał wykonać 12 niezwykle trudnych prac."
  },
  {
    "id": "R02_BOG_07",
    "section": "Bogowie i mity",
    "type": "true_false",
    "prompt": "Mity pomagały Grekom wyjaśniać pochodzenie świata, zjawiska przyrodnicze i właściwe wzorce postępowania.",
    "options": null,
    "answer": true,
    "explanation": "Mity były opowieściami o bogach i herosach, które tłumaczyły świat oraz uczyły, jak należy postępować."
  },
  {
    "id": "R02_BOG_08",
    "section": "Bogowie i mity",
    "type": "single_choice",
    "prompt": "Komu przypisuje się autorstwo Iliady i Odysei?",
    "options": [
      "Homerowi",
      "Sofoklesowi",
      "Peryklesowi",
      "Pitagorasowi",
      "Temistoklesowi",
      "Hipokratesowi"
    ],
    "answer": 0,
    "explanation": "Autorstwo Iliady i Odysei przypisuje się Homerowi."
  },
  {
    "id": "R02_BOG_09",
    "section": "Bogowie i mity",
    "type": "match",
    "prompt": "Połącz postać lub utwór z właściwym opisem.",
    "options": null,
    "left": [
      "Iliada",
      "Odyseja",
      "Achilles",
      "Penelopa"
    ],
    "right": [
      "opowieść o walkach pod Troją",
      "opowieść o tułaczce Odyseusza",
      "waleczny heros",
      "wierna żona Odyseusza"
    ],
    "answer": {
      "Iliada": "opowieść o walkach pod Troją",
      "Odyseja": "opowieść o tułaczce Odyseusza",
      "Achilles": "waleczny heros",
      "Penelopa": "wierna żona Odyseusza"
    },
    "explanation": "Iliada dotyczy wojny trojańskiej, Odyseja powrotu Odyseusza, a Achilles i Penelopa są ważnymi postaciami tych opowieści."
  },
  {
    "id": "R02_BOG_10",
    "section": "Bogowie i mity",
    "type": "scenario",
    "prompt": "Król Itaki wymyśla podstęp z ogromnym drewnianym koniem, w którym ukrywają się greccy wojownicy. Kto jest autorem tego planu?",
    "options": [
      "Odyseusz",
      "Achilles",
      "Hades",
      "Ares",
      "Hefajstos",
      "Perykles"
    ],
    "answer": 0,
    "explanation": "Według opowieści Odyseusz kazał zbudować drewnianego konia, dzięki któremu Grecy zdobyli Troję.",
    "image": "/img/r02_kon_trojanski.jpg"
  },
  {
    "id": "R02_BOG_11",
    "section": "Bogowie i mity",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Zeus, Hera, Posejdon, Perykles.",
    "options": null,
    "answer": "Perykles",
    "explanation": "Zeus, Hera i Posejdon to bogowie greccy, a Perykles był ateńskim politykiem."
  },
  {
    "id": "R02_BOG_12",
    "section": "Bogowie i mity",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z podstępem konia trojańskiego we właściwej kolejności.",
    "options": null,
    "items": [
      "Trojanie wprowadzają drewnianą budowlę do miasta",
      "Odyseusz każe zbudować ogromnego drewnianego konia",
      "Greccy wojownicy wychodzą nocą i otwierają bramy",
      "Najdzielniejsi wojownicy ukrywają się wewnątrz konia"
    ],
    "answer": [
      "Odyseusz każe zbudować ogromnego drewnianego konia",
      "Najdzielniejsi wojownicy ukrywają się wewnątrz konia",
      "Trojanie wprowadzają drewnianą budowlę do miasta",
      "Greccy wojownicy wychodzą nocą i otwierają bramy"
    ],
    "explanation": "Podstęp polegał na ukryciu wojowników w drewnianym koniu, którego Trojanie sami wprowadzili do miasta.",
    "image": "/img/r02_kon_trojanski.jpg"
  },
  {
    "id": "R02_KUL_01",
    "section": "Kultura starożytnej Grecji",
    "type": "multi_select",
    "prompt": "Zaznacz dziedziny kultury i aktywności, które według podręcznika szczególnie rozwinęli Grecy.",
    "options": [
      "malarstwo wazowe",
      "rzeźba",
      "teatr",
      "filozofia",
      "sport",
      "druk książek"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Podręcznik wymienia między innymi malarstwo wazowe, rzeźbę, teatr, filozofię i sport jako ważne dziedziny greckiej kultury."
  },
  {
    "id": "R02_KUL_02",
    "section": "Kultura starożytnej Grecji",
    "type": "single_choice",
    "prompt": "Dzięki czemu możemy dziś najlepiej poznawać greckie malarstwo wymienione w podręczniku?",
    "options": [
      "dzięki dekorowanym wazom i amforom",
      "dzięki drukowanym gazetom",
      "dzięki fotografiach z Olimpu",
      "dzięki pergaminom z Rzymu",
      "dzięki żelaznym mieczom",
      "dzięki fortowi Qait Baj"
    ],
    "answer": 0,
    "explanation": "Greckie malarstwo znamy głównie z dekorowanych waz i amfor."
  },
  {
    "id": "R02_KUL_03",
    "section": "Kultura starożytnej Grecji",
    "type": "match",
    "prompt": "Połącz postać z dziedziną lub dziełem wspomnianym w podręczniku.",
    "options": null,
    "left": [
      "Fidiasz",
      "Myron",
      "Sofokles",
      "Arystofanes"
    ],
    "right": [
      "rzeźba Ateny i posąg Zeusa",
      "Dyskobol",
      "tragedie",
      "komedie"
    ],
    "answer": {
      "Fidiasz": "rzeźba Ateny i posąg Zeusa",
      "Myron": "Dyskobol",
      "Sofokles": "tragedie",
      "Arystofanes": "komedie"
    },
    "explanation": "Fidiasz i Myron byli rzeźbiarzami, Sofokles tworzył tragedie, a Arystofanes komedie."
  },
  {
    "id": "R02_KUL_04",
    "section": "Kultura starożytnej Grecji",
    "type": "single_choice",
    "prompt": "Z których uroczystości narodził się teatr grecki?",
    "options": [
      "z Wielkich Dionizji ku czci Dionizosa",
      "z igrzysk ku czci Zeusa",
      "z obrad zgromadzenia ludowego",
      "z wypraw Aleksandra",
      "z walk pod Termopilami",
      "z konkursów hoplitów"
    ],
    "answer": 0,
    "explanation": "Teatr grecki narodził się około VI wieku p.n.e. z uroczystości religijnych ku czci Dionizosa.",
    "image": "/img/r02_teatr_grecki_amfiteatr.jpg"
  },
  {
    "id": "R02_KUL_05",
    "section": "Kultura starożytnej Grecji",
    "type": "true_false",
    "prompt": "Aktorami w starożytnej Grecji byli wyłącznie mężczyźni, którzy grali także role kobiece.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że w greckim teatrze aktorami byli tylko mężczyźni.",
    "image": "/img/r02_teatr_grecki_amfiteatr.jpg"
  },
  {
    "id": "R02_KUL_06",
    "section": "Kultura starożytnej Grecji",
    "type": "fill_in",
    "prompt": "Poważne sztuki teatralne nazywano __________, a przedstawienia żartobliwe — __________.",
    "options": null,
    "answer": [
      "tragediami",
      "komediami"
    ],
    "altAnswers": [
      [
        "tragediami",
        "tragedie"
      ],
      [
        "komediami",
        "komedie"
      ]
    ],
    "explanation": "Tragedie poruszały ważne problemy, a komedie w zabawny sposób komentowały wydarzenia i wady obywateli.",
    "image": "/img/r02_teatr_grecki_amfiteatr.jpg"
  },
  {
    "id": "R02_KUL_07",
    "section": "Kultura starożytnej Grecji",
    "type": "riddle",
    "prompt": "Greckie słowo oznaczające „umiłowanie mądrości” to...",
    "options": null,
    "answer": "filozofia",
    "altAnswers": [
      "filozofia",
      "filozofią"
    ],
    "explanation": "Hellenowie nazywali rozważania o świecie i życiu filozofią, czyli umiłowaniem mądrości."
  },
  {
    "id": "R02_KUL_08",
    "section": "Kultura starożytnej Grecji",
    "type": "match",
    "prompt": "Połącz uczonego lub filozofa z informacją z podręcznika.",
    "options": null,
    "left": [
      "Sokrates",
      "Platon",
      "Arystoteles",
      "Hipokrates"
    ],
    "right": [
      "uczył, że trzeba dążyć do dobrego życia i wiedzy",
      "wyróżniał świat materii i idei",
      "opisał ponad 500 gatunków zwierząt",
      "uważany za twórcę współczesnej medycyny"
    ],
    "answer": {
      "Sokrates": "uczył, że trzeba dążyć do dobrego życia i wiedzy",
      "Platon": "wyróżniał świat materii i idei",
      "Arystoteles": "opisał ponad 500 gatunków zwierząt",
      "Hipokrates": "uważany za twórcę współczesnej medycyny"
    },
    "explanation": "Greccy myśliciele zajmowali się filozofią, nauką i medycyną, a ich osiągnięcia oddziaływały przez stulecia."
  },
  {
    "id": "R02_KUL_09",
    "section": "Kultura starożytnej Grecji",
    "type": "single_choice",
    "prompt": "Gdzie organizowano najsłynniejsze greckie igrzyska ku czci Zeusa?",
    "options": [
      "w Olimpii",
      "w Troi",
      "w Itace",
      "w Gordion",
      "w Babilonie",
      "w Efezie"
    ],
    "answer": 0,
    "explanation": "Najsłynniejsze igrzyska odbywały się ku czci Zeusa w Olimpii na Peloponezie."
  },
  {
    "id": "R02_KUL_10",
    "section": "Kultura starożytnej Grecji",
    "type": "multi_select",
    "prompt": "Zaznacz konkurencje wchodzące w skład pięcioboju olimpijskiego według infografiki.",
    "options": [
      "bieg",
      "skok w dal",
      "zapasy",
      "rzut dyskiem",
      "rzut oszczepem",
      "pływanie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Pięciobój olimpijski obejmował bieg, skok w dal, zapasy, rzut dyskiem i rzut oszczepem.",
    "image": "/img/r02_piecioboj_olimpijski.jpg"
  },
  {
    "id": "R02_KUL_11",
    "section": "Kultura starożytnej Grecji",
    "type": "true_false",
    "prompt": "Olimpiadą nazywano czteroletni okres między kolejnymi igrzyskami olimpijskimi.",
    "options": null,
    "answer": true,
    "explanation": "Igrzyska odbywały się co cztery lata, a okres między nimi nazywano olimpiadą."
  },
  {
    "id": "R02_KUL_12",
    "section": "Kultura starożytnej Grecji",
    "type": "scenario",
    "prompt": "Zawodnik zwycięża w starożytnych igrzyskach w Olimpii. Jaką symboliczną nagrodę otrzymuje według podręcznika?",
    "options": [
      "wieniec z gałązek drzewa oliwnego",
      "złotą koronę królewską",
      "puchar z porcelany",
      "perski rydwan",
      "purpurową togę",
      "miecz z brązu"
    ],
    "answer": 0,
    "explanation": "Zwycięzcy dostawali wieńce z gałązek drzewa oliwnego, symbolizujące sławę i uznanie."
  },
  {
    "id": "R02_ALE_01",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "single_choice",
    "prompt": "Kim był Filip II, ojciec Aleksandra Wielkiego?",
    "options": [
      "królem Macedonii",
      "królem Persji",
      "wodzem Sparty",
      "filozofem ateńskim",
      "poetą z Itaki",
      "kapłanem Zeusa"
    ],
    "answer": 0,
    "explanation": "Filip II był królem Macedonii i podporządkował sobie niemal całą Grecję."
  },
  {
    "id": "R02_ALE_02",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "true_false",
    "prompt": "Macedonia leżała na północ od Grecji i w IV wieku p.n.e. stała się silnym państwem.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik opisuje Macedonię jako krainę na północ od Grecji, która za Filipa II bardzo się wzmocniła."
  },
  {
    "id": "R02_ALE_03",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny planowanej wyprawy przeciw Persji wymienione w podręczniku.",
    "options": [
      "odwet za perskie najazdy na Grecję",
      "chęć zdobycia bogactw Wschodu",
      "ambicja zbudowania wielkiego imperium",
      "poszukiwanie konia trojańskiego",
      "zakaz igrzysk w Olimpii",
      "obrona Troi przed Grekami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wyprawę uzasadniano odwetem za najazdy Persów, chęcią zdobycia bogactw i ambicją zbudowania imperium."
  },
  {
    "id": "R02_ALE_04",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "fill_in",
    "prompt": "Aleksander rozpoczął podbój Persji w roku __________ p.n.e., zwyciężył pod Issos w roku __________ p.n.e., a zmarł w roku __________ p.n.e.",
    "options": null,
    "answer": [
      "334",
      "333",
      "323"
    ],
    "altAnswers": [
      [
        "334",
        "334 roku"
      ],
      [
        "333",
        "333 roku"
      ],
      [
        "323",
        "323 roku"
      ]
    ],
    "explanation": "Oś czasu w podręczniku wskazuje: początek podboju Persji w 334 roku p.n.e., bitwę pod Issos w 333 roku p.n.e. i śmierć Aleksandra w 323 roku p.n.e."
  },
  {
    "id": "R02_ALE_05",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "match",
    "prompt": "Połącz miejsce lub wydarzenie z informacją z wyprawy Aleksandra.",
    "options": null,
    "left": [
      "Granik",
      "Issos",
      "Gaugamela",
      "Indus"
    ],
    "right": [
      "zwycięstwo otwierające drogę do Azji Mniejszej",
      "klęska armii Dariusza III w 333 roku p.n.e.",
      "rozstrzygająca bitwa z 331 roku p.n.e.",
      "rzeka, do której dotarły wojska w Indiach"
    ],
    "answer": {
      "Granik": "zwycięstwo otwierające drogę do Azji Mniejszej",
      "Issos": "klęska armii Dariusza III w 333 roku p.n.e.",
      "Gaugamela": "rozstrzygająca bitwa z 331 roku p.n.e.",
      "Indus": "rzeka, do której dotarły wojska w Indiach"
    },
    "explanation": "Wyprawa Aleksandra prowadziła przez zwycięstwa nad Granikiem, pod Issos i Gaugamelą aż do Indusu.",
    "image": "/img/r02_aleksander_bitwa_issos.jpg"
  },
  {
    "id": "R02_ALE_06",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "scenario",
    "prompt": "Król Persji proponuje pokój i oddanie połowy państwa, ale macedoński władca odrzuca tę propozycję i rusza dalej. Kto tak postąpił?",
    "options": [
      "Aleksander Wielki",
      "Filip II",
      "Dariusz III",
      "Leonidas",
      "Temistokles",
      "Perykles"
    ],
    "answer": 0,
    "explanation": "Aleksander odrzucił propozycję Dariusza III i kontynuował podbój imperium perskiego.",
    "image": "/img/r02_aleksander_bitwa_issos.jpg"
  },
  {
    "id": "R02_ALE_07",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "single_choice",
    "prompt": "Który król perski dowodził armią rozbitą przez Aleksandra pod Issos?",
    "options": [
      "Dariusz III",
      "Kserkses",
      "Dariusz I",
      "Leonidas",
      "Ptolemeusz II",
      "Hefajstos"
    ],
    "answer": 0,
    "explanation": "Pod Issos w 333 roku p.n.e. Aleksander pokonał armię perską dowodzoną przez Dariusza III.",
    "image": "/img/r02_aleksander_bitwa_issos.jpg"
  },
  {
    "id": "R02_ALE_08",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "riddle",
    "prompt": "Skomplikowany sznur z miasta Gordion, który Aleksander rozwiązał przez przecięcie mieczem, to...",
    "options": null,
    "answer": "węzeł gordyjski",
    "altAnswers": [
      "węzeł gordyjski",
      "wezel gordyjski",
      "węzeł z Gordion",
      "wezel z Gordion"
    ],
    "explanation": "Historia węzła gordyjskiego miała obrazować zdecydowany charakter Aleksandra Macedońskiego."
  },
  {
    "id": "R02_ALE_09",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "true_false",
    "prompt": "W 327 roku p.n.e. wojska Aleksandra dotarły do Indii, nad rzekę Indus.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje, że oddziały Aleksandra dotarły do Indii nad Indus, lecz żołnierze wymusili odwrót."
  },
  {
    "id": "R02_ALE_10",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "single_choice",
    "prompt": "Co stało się z imperium Aleksandra po jego śmierci w Babilonie?",
    "options": [
      "uległo podziałowi na kilka państw",
      "zostało w całości przyłączone do Sparty",
      "przekształciło się w demokrację ateńską",
      "wróciło pod władzę Dariusza III",
      "stało się jedną polis",
      "zostało opuszczone przez Greków"
    ],
    "answer": 0,
    "explanation": "Po śmierci Aleksandra jego ogromne imperium podzieliło się na kilka państw rządzonych przez greckich zdobywców."
  },
  {
    "id": "R02_ALE_11",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "fill_in",
    "prompt": "Przyjmowanie greckiego stylu życia przez ludy Wschodu nazywamy __________, a kulturę powstałą z połączenia wpływów greckich i wschodnich — kulturą __________.",
    "options": null,
    "answer": [
      "hellenizacją",
      "hellenistyczną"
    ],
    "altAnswers": [
      [
        "hellenizacją",
        "hellenizacja"
      ],
      [
        "hellenistyczną",
        "hellenistyczna"
      ]
    ],
    "explanation": "Hellenizacja oznaczała upowszechnianie greckiego języka i stylu życia, a kultura hellenistyczna łączyła wpływy Grecji i Wschodu."
  },
  {
    "id": "R02_ALE_12",
    "section": "Imperium Aleksandra Wielkiego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Babilonia, Egipt, Persja, Lakonia.",
    "options": null,
    "answer": "Lakonia",
    "explanation": "Babilonia, Egipt i Persja należały do krajów zdobytych przez Aleksandra, natomiast Lakonia była krainą Sparty."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z wojnami grecko-perskimi w kolejności chronologicznej.",
    "options": null,
    "items": [
      "bitwa pod Maratonem",
      "bitwa morska pod Salaminą",
      "powstanie w Milecie przeciw Persom",
      "obrona wąwozu Termopile"
    ],
    "answer": [
      "powstanie w Milecie przeciw Persom",
      "bitwa pod Maratonem",
      "obrona wąwozu Termopile",
      "bitwa morska pod Salaminą"
    ],
    "explanation": "Najpierw wybuchło powstanie w Milecie w 499 roku p.n.e., potem była bitwa pod Maratonem w 490 roku p.n.e., a w 480 roku p.n.e. Termopile i Salamina."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rok z wydarzeniem z rozdziału.",
    "options": null,
    "left": [
      "776 p.n.e.",
      "490 p.n.e.",
      "480 p.n.e.",
      "334 p.n.e.",
      "323 p.n.e."
    ],
    "right": [
      "pierwsze igrzyska olimpijskie",
      "bitwa pod Maratonem",
      "bitwy pod Termopilami i Salaminą",
      "początek podboju Persji przez Aleksandra",
      "śmierć Aleksandra Wielkiego"
    ],
    "answer": {
      "776 p.n.e.": "pierwsze igrzyska olimpijskie",
      "490 p.n.e.": "bitwa pod Maratonem",
      "480 p.n.e.": "bitwy pod Termopilami i Salaminą",
      "334 p.n.e.": "początek podboju Persji przez Aleksandra",
      "323 p.n.e.": "śmierć Aleksandra Wielkiego"
    },
    "explanation": "Te daty wyznaczają najważniejsze wydarzenia z tematów o igrzyskach, wojnach perskich i wyprawie Aleksandra."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj postacie do kategorii: mityczne albo historyczne.",
    "options": null,
    "items": [
      "Odyseusz",
      "Fidiasz",
      "Temistokles",
      "Herakles",
      "Achilles",
      "Leonidas"
    ],
    "categories": [
      "postacie mityczne",
      "postacie historyczne"
    ],
    "answer": {
      "postacie mityczne": [
        "Odyseusz",
        "Herakles",
        "Achilles"
      ],
      "postacie historyczne": [
        "Fidiasz",
        "Temistokles",
        "Leonidas"
      ]
    },
    "explanation": "Odyseusz, Herakles i Achilles należą do mitów, natomiast Fidiasz, Temistokles i Leonidas to postacie historyczne wspomniane w rozdziale."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz ograniczenia demokracji ateńskiej opisane w podręczniku.",
    "options": [
      "prawa polityczne mieli tylko pełnoletni mężczyźni pochodzący z Aten",
      "kobiety nie mogły korzystać z praw obywatelskich",
      "niewolnicy nie uczestniczyli w podejmowaniu decyzji",
      "przybysze z innych miast nie mieli praw obywatelskich",
      "każdy mieszkaniec Aten mógł głosować",
      "obywatelem zostawał automatycznie każdy cudzoziemiec"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Demokracja ateńska była ograniczona do obywateli, czyli dorosłych mężczyzn pochodzących z Aten."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń opisuje pogląd filozofa, że świat składa się z materii oraz idei, a ciało ulega rozpadowi, lecz dusza trwa wiecznie. O kim mowa?",
    "options": [
      "Platon",
      "Sokrates",
      "Arystoteles",
      "Pitagoras",
      "Tales z Miletu",
      "Hipokrates"
    ],
    "answer": 0,
    "explanation": "Podręcznik przypisuje taki pogląd Platonowi, uczniowi Sokratesa."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Latarnia morska na Faros została wzniesiona w __________ wieku p.n.e.; według tekstu ogień na jej około __________-metrowej wieży widziano nawet z __________ kilometrów.",
    "options": null,
    "answer": [
      "III",
      "130",
      "60"
    ],
    "altAnswers": [
      [
        "III",
        "3",
        "trzecim"
      ],
      [
        "130",
        "130-metrowej"
      ],
      [
        "60",
        "60 kilometrów"
      ]
    ],
    "explanation": "Tekst o Faros podaje III wiek p.n.e., około 130 metrów wysokości i widoczność ognia nawet z 60 kilometrów.",
    "image": "/img/r02_latarnia_faros.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywał się architekt, któremu tekst przypisuje projekt latarni aleksandryjskiej na Faros?",
    "options": [
      "Sostratos",
      "Fidiasz",
      "Myron",
      "Ptolemeusz II",
      "Sofokles",
      "Arystofanes"
    ],
    "answer": 0,
    "explanation": "W tekście jako projektant latarni występuje Sostratos.",
    "image": "/img/r02_latarnia_faros.jpg"
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z dziedziną lub poglądem wskazanym w rozdziale.",
    "options": null,
    "left": [
      "Pitagoras i Tales",
      "Hipokrates",
      "Sokrates",
      "Arystoteles"
    ],
    "right": [
      "reguły matematyczne",
      "twórca współczesnej medycyny",
      "dążenie do dobrego życia dzięki wiedzy",
      "badania u podstaw biologii, fizyki i logiki"
    ],
    "answer": {
      "Pitagoras i Tales": "reguły matematyczne",
      "Hipokrates": "twórca współczesnej medycyny",
      "Sokrates": "dążenie do dobrego życia dzięki wiedzy",
      "Arystoteles": "badania u podstaw biologii, fizyki i logiki"
    },
    "explanation": "Rozdział pokazuje, że greccy uczeni zajmowali się matematyką, medycyną, filozofią i badaniami przyrody."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj grupy społeczeństwa Sparty do opisów ich sytuacji.",
    "options": null,
    "items": [
      "Spartanie",
      "heloci",
      "periojkowie"
    ],
    "categories": [
      "pełne prawa polityczne",
      "niewolni",
      "wolni bez praw politycznych"
    ],
    "answer": {
      "pełne prawa polityczne": [
        "Spartanie"
      ],
      "niewolni": [
        "heloci"
      ],
      "wolni bez praw politycznych": [
        "periojkowie"
      ]
    },
    "explanation": "Tylko Spartanie mieli pełne prawa polityczne; heloci byli niewolni, a periojkowie wolni, lecz bez praw politycznych."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W czasie Dionizji autor wystawia żartobliwą sztukę o aktualnych wydarzeniach i wadach obywateli, aby skłonić ich do poprawy. Jaki to rodzaj przedstawienia?",
    "options": [
      "komedia",
      "tragedia",
      "mit",
      "epos",
      "olimpiada",
      "falanga"
    ],
    "answer": 0,
    "explanation": "Komedie miały żartobliwy charakter, ośmieszały wady obywateli i pełniły funkcję wychowawczą.",
    "image": "/img/r02_teatr_grecki_amfiteatr.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Starożytna Grecja",
  "icon": "🏛️",
  "sectionOrder": [
    "Demokratyczne Ateny",
    "Sparta i wojny z Persami",
    "Bogowie i mity",
    "Kultura starożytnej Grecji",
    "Imperium Aleksandra Wielkiego",
    "Super trudne"
  ],
  "sectionIcons": {
    "Demokratyczne Ateny": "🏛️",
    "Sparta i wojny z Persami": "🛡️",
    "Bogowie i mity": "⚡",
    "Kultura starożytnej Grecji": "🎭",
    "Imperium Aleksandra Wielkiego": "🗺️",
    "Super trudne": "🔥"
  }
,
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
