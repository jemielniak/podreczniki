// Skróty sekcji:
//   FEU = Feudalna Europa
//   RYC = Na rycerskim zamku
//   MCH = Mieszczanie i chłopi
//   DUK = Duchowieństwo i kultura średniowiecza
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_FEU_01",
    "section": "Feudalna Europa",
    "type": "single_choice",
    "prompt": "Czym był stan w średniowiecznym społeczeństwie?",
    "options": [
      "grupą ludzi o tych samych prawach, obowiązkach i zajęciach",
      "wojskowym oddziałem seniora",
      "miejscem obrad rady miejskiej",
      "ziemią nadaną przez seniora",
      "rodzajem średniowiecznego podatku",
      "budowlą obronną w mieście"
    ],
    "answer": 0,
    "explanation": "Stan oznaczał grupę ludzi różniącą się prawami, obowiązkami i codziennymi zajęciami."
  },
  {
    "id": "R05_FEU_02",
    "section": "Feudalna Europa",
    "type": "multi_select",
    "prompt": "Zaznacz cztery stany średniowiecza wymienione w podręczniku.",
    "options": [
      "duchowieństwo",
      "rycerstwo",
      "mieszczaństwo",
      "chłopstwo",
      "uczeni uniwersyteccy",
      "kupcy dalekomorscy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W rozdziale wymieniono duchowieństwo, rycerstwo, mieszczaństwo i chłopstwo."
  },
  {
    "id": "R05_FEU_03",
    "section": "Feudalna Europa",
    "type": "true_false",
    "prompt": "Do stanu wchodziło się zwykle przez urodzenie, poza stanem duchownym.",
    "options": null,
    "answer": true,
    "explanation": "Przynależność stanowa była zwykle dziedziczna, ale do duchowieństwa można było wstąpić."
  },
  {
    "id": "R05_FEU_04",
    "section": "Feudalna Europa",
    "type": "fill_in",
    "prompt": "Część ziemi przekazana rycerzowi w użytkowanie przez seniora nazywała się __________.",
    "options": null,
    "answer": [
      "lenno"
    ],
    "altAnswers": [
      [
        "lenno",
        "lennem",
        "lenna"
      ]
    ],
    "explanation": "Lenno było podstawą utrzymania rycerza i elementem stosunku lennego."
  },
  {
    "id": "R05_FEU_05",
    "section": "Feudalna Europa",
    "type": "riddle",
    "prompt": "Senior, który nikomu nie podlegał, to...",
    "options": null,
    "answer": "suzeren",
    "altAnswers": [
      "suzeren",
      "suzerenem"
    ],
    "explanation": "Suzeren był najwyższym seniorem i zwykle nie był niczyim wasalem."
  },
  {
    "id": "R05_FEU_06",
    "section": "Feudalna Europa",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "senior",
      "wasal",
      "lenno",
      "poddany"
    ],
    "right": [
      "możniejszy nadający opiekę lub ziemię",
      "osoba zależna od seniora",
      "ziemia oddana w użytkowanie",
      "chłop zależny od pana"
    ],
    "answer": {
      "senior": "możniejszy nadający opiekę lub ziemię",
      "wasal": "osoba zależna od seniora",
      "lenno": "ziemia oddana w użytkowanie",
      "poddany": "chłop zależny od pana"
    },
    "image": "/img/r05_drabina_feudalna.jpg",
    "explanation": "Pojęcia opisują podstawowe relacje systemu feudalnego."
  },
  {
    "id": "R05_FEU_07",
    "section": "Feudalna Europa",
    "type": "single_choice",
    "prompt": "Dlaczego w IX-X wieku monarchowie przekształcili ciężkozbrojną jazdę w rycerstwo?",
    "options": [
      "utrzymywanie jeźdźców i ich rodzin było bardzo drogie",
      "zakazano używania koni bojowych",
      "chłopi odmówili uprawiania ziemi",
      "miasta przejęły organizację armii",
      "duchowni zaczęli dowodzić wojskiem",
      "wszystkie lenna wróciły do chłopów"
    ],
    "answer": 0,
    "explanation": "Utrzymywanie jeźdźców i ich rodzin było zbyt drogie, więc rycerze mieli utrzymywać się z ziemi."
  },
  {
    "id": "R05_FEU_08",
    "section": "Feudalna Europa",
    "type": "scenario",
    "prompt": "Rycerz otrzymał od monarchy ziemię w użytkowanie i ma w zamian służyć w jego armii. Jak nazywa się relacja między nimi?",
    "options": [
      "stosunek lenny",
      "samorząd miejski",
      "pańszczyzna",
      "dziesięcina",
      "rozejm boży",
      "majstersztyk"
    ],
    "answer": 0,
    "image": "/img/r05_drabina_feudalna.jpg",
    "explanation": "Władca był seniorem, a rycerz wasalem; łączył ich stosunek lenny."
  },
  {
    "id": "R05_FEU_09",
    "section": "Feudalna Europa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: senior, wasal, lenno, ratusz.",
    "options": null,
    "answer": "ratusz",
    "explanation": "Ratusz był budynkiem miejskim, a pozostałe pojęcia dotyczą feudalizmu."
  },
  {
    "id": "R05_FEU_10",
    "section": "Feudalna Europa",
    "type": "sequence",
    "prompt": "Ułóż etapy ceremonii nadania lenna w poprawnej kolejności.",
    "options": null,
    "items": [
      "Senior przekazywał symbol władzy nad lennem",
      "Wasal klękał przed seniorem",
      "Wasal przysięgał dozgonną wierność",
      "Senior nadawał ziemię i obiecywał opiekę"
    ],
    "answer": [
      "Wasal klękał przed seniorem",
      "Wasal przysięgał dozgonną wierność",
      "Senior przekazywał symbol władzy nad lennem",
      "Senior nadawał ziemię i obiecywał opiekę"
    ],
    "explanation": "Ceremonia zaczynała się hołdem lennym, a potem następowała inwestytura."
  },
  {
    "id": "R05_FEU_11",
    "section": "Feudalna Europa",
    "type": "true_false",
    "prompt": "Poddani byli wasalami swojego pana i łączył ich z nim stosunek lenny.",
    "options": null,
    "answer": false,
    "explanation": "Chłopi byli poddanymi pana, ale nie byli jego wasalami i nie łączył ich z nim stosunek lenny."
  },
  {
    "id": "R05_FEU_12",
    "section": "Feudalna Europa",
    "type": "fill_in",
    "prompt": "Rozdrobnienie feudalne oznaczało rozbicie państw na liczne __________.",
    "options": null,
    "answer": [
      "państewka"
    ],
    "altAnswers": [
      [
        "państewka",
        "p panstewka",
        "małe państewka",
        "liczne państewka"
      ]
    ],
    "explanation": "Rozdrobnienie feudalne prowadziło do powstania wielu państewek, które często ze sobą walczyły."
  },
  {
    "id": "R05_RYC_01",
    "section": "Na rycerskim zamku",
    "type": "multi_select",
    "prompt": "Zaznacz elementy uzbrojenia rycerza wymienione w rozdziale.",
    "options": [
      "kopia",
      "miecz",
      "topór lub młot bojowy",
      "sztylet",
      "kusza automatyczna",
      "armata"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rycerza chroniły zbroja, hełm i tarcza, a jego bronią były m.in. kopia, miecz, topór lub młot bojowy oraz sztylet."
  },
  {
    "id": "R05_RYC_02",
    "section": "Na rycerskim zamku",
    "type": "single_choice",
    "prompt": "Do czego służyła kopia rycerska?",
    "options": [
      "do przebijania zbroi przeciwnika",
      "do pisania listów lennych",
      "do zamykania bramy miejskiej",
      "do mierzenia pola chłopskiego",
      "do budowy przypór",
      "do ważenia zboża"
    ],
    "answer": 0,
    "explanation": "Kopia miała co najmniej 4 metry długości i służyła do przebijania zbroi przeciwnika."
  },
  {
    "id": "R05_RYC_03",
    "section": "Na rycerskim zamku",
    "type": "true_false",
    "prompt": "Rycerz zwykle wolał wziąć innego rycerza do niewoli niż go zabić.",
    "options": null,
    "answer": true,
    "explanation": "Za uwolnienie rycerza można było otrzymać wysoki okup."
  },
  {
    "id": "R05_RYC_04",
    "section": "Na rycerskim zamku",
    "type": "riddle",
    "prompt": "Zawody rycerzy połączone z ćwiczeniami wojskowymi to...",
    "options": null,
    "answer": "turniej rycerski",
    "altAnswers": [
      "turniej rycerski",
      "turniej"
    ],
    "explanation": "Turniej rycerski był formą ćwiczeń, rywalizacji i zdobywania sławy."
  },
  {
    "id": "R05_RYC_05",
    "section": "Na rycerskim zamku",
    "type": "scenario",
    "prompt": "Na placu dwie drużyny konnych rycerzy ruszają na siebie, a ten, kto spada z konia, trafia do niewoli. Jaki rodzaj walki turniejowej opisano?",
    "options": [
      "pozorowana bitwa",
      "hołd lenny",
      "inwestytura",
      "rada miejska",
      "majstersztyk",
      "dziesięcina"
    ],
    "answer": 0,
    "image": "/img/r05_turniej_rycerski.jpg",
    "explanation": "Pozorowana bitwa była udawaną walką dwóch drużyn rycerzy."
  },
  {
    "id": "R05_RYC_06",
    "section": "Na rycerskim zamku",
    "type": "single_choice",
    "prompt": "Na czym polegał rozejm boży wprowadzany przez Kościół?",
    "options": [
      "na zakazie wojen od środy wieczorem do poniedziałku rano i w święta",
      "na obowiązku oddania dziesiątej części plonów",
      "na przekazaniu lenna wasalowi",
      "na budowie murów miejskich",
      "na ćwiczeniu kopią codziennie rano",
      "na wyborze rady miejskiej"
    ],
    "answer": 0,
    "explanation": "Rozejm boży zakazywał toczenia wojen od środy wieczorem do poniedziałku rano oraz w święta kościelne."
  },
  {
    "id": "R05_RYC_07",
    "section": "Na rycerskim zamku",
    "type": "multi_select",
    "prompt": "Które cechy pasują do ideału rycerza bez skazy?",
    "options": [
      "dobry chrześcijanin",
      "wierny władcy",
      "uprzejmy wobec dam",
      "mężnie broniący słabszych",
      "rabujący wsie",
      "lekceważący przysięgi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ideał rycerza bez skazy obejmował pobożność, wierność władcy, uprzejmość wobec dam i obronę słabszych."
  },
  {
    "id": "R05_RYC_08",
    "section": "Na rycerskim zamku",
    "type": "match",
    "prompt": "Połącz etap drogi do rycerstwa z opisem.",
    "options": null,
    "left": [
      "paź",
      "giermek",
      "pasowanie",
      "rycerz"
    ],
    "right": [
      "chłopiec od około 7 lat uczący się obyczajów dworskich",
      "pomocnik rycerza od około 14 lat",
      "uroczystość nadania godności rycerskiej",
      "zawodowy wojownik po złożeniu przysięgi"
    ],
    "answer": {
      "paź": "chłopiec od około 7 lat uczący się obyczajów dworskich",
      "giermek": "pomocnik rycerza od około 14 lat",
      "pasowanie": "uroczystość nadania godności rycerskiej",
      "rycerz": "zawodowy wojownik po złożeniu przysięgi"
    },
    "explanation": "Syn rycerza przechodził kolejno etap pazia, giermka i pasowania."
  },
  {
    "id": "R05_RYC_09",
    "section": "Na rycerskim zamku",
    "type": "sequence",
    "prompt": "Ułóż drogę syna rycerza do rycerstwa w kolejności.",
    "options": null,
    "items": [
      "giermek",
      "pasowanie na rycerza",
      "paź",
      "rycerz"
    ],
    "answer": [
      "paź",
      "giermek",
      "pasowanie na rycerza",
      "rycerz"
    ],
    "explanation": "Najpierw chłopiec zostawał paziem, potem giermkiem, a po spełnieniu warunków przechodził pasowanie."
  },
  {
    "id": "R05_RYC_10",
    "section": "Na rycerskim zamku",
    "type": "single_choice",
    "prompt": "Po co budowano zamki?",
    "options": [
      "aby zapewnić bezpieczeństwo mieszkańcom i krajowi",
      "aby prowadzić wyłącznie targi miejskie",
      "aby przechowywać dziesięcinę w ratuszu",
      "aby zastąpić klasztory benedyktyńskie",
      "aby uczyć studentów teologii",
      "aby produkować buty w cechu"
    ],
    "answer": 0,
    "explanation": "Zamki miały zapewniać bezpieczeństwo mieszkańcom i krajowi, a w razie najazdu chroniła się w nich okoliczna ludność."
  },
  {
    "id": "R05_RYC_11",
    "section": "Na rycerskim zamku",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: paź, giermek, rycerz, sołtys.",
    "options": null,
    "answer": "sołtys",
    "explanation": "Sołtys rządził wsią w imieniu pana, a pozostałe pojęcia opisują drogę do rycerstwa."
  },
  {
    "id": "R05_RYC_12",
    "section": "Na rycerskim zamku",
    "type": "fill_in",
    "prompt": "Syn rycerza zostawał paziem po ukończeniu __________ lat, a giermkiem po ukończeniu __________ lat.",
    "options": null,
    "answer": [
      "7",
      "14"
    ],
    "altAnswers": [
      [
        "7",
        "siedmiu",
        "7 lat"
      ],
      [
        "14",
        "czternastu",
        "14 lat"
      ]
    ],
    "explanation": "Podręcznik podaje, że paź miał około 7 lat, a giermek około 14 lat."
  },
  {
    "id": "R05_MCH_01",
    "section": "Mieszczanie i chłopi",
    "type": "single_choice",
    "prompt": "Czym przede wszystkim zajmowali się mieszkańcy średniowiecznej wsi?",
    "options": [
      "rolnictwem",
      "teologią",
      "turniejami rycerskimi",
      "przepisywaniem ksiąg",
      "rządzeniem diecezjami",
      "budową katedr"
    ],
    "answer": 0,
    "explanation": "Chłopi, czyli mieszkańcy wsi, trudnili się przede wszystkim rolnictwem."
  },
  {
    "id": "R05_MCH_02",
    "section": "Mieszczanie i chłopi",
    "type": "multi_select",
    "prompt": "Czym głównie zajmowali się mieszczanie?",
    "options": [
      "rzemiosłem",
      "handlem",
      "usługami",
      "rolnictwem jako głównym zajęciem",
      "służbą lenną",
      "umartwieniami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mieszczanie zajmowali się głównie rzemiosłem, handlem i usługami."
  },
  {
    "id": "R05_MCH_03",
    "section": "Mieszczanie i chłopi",
    "type": "single_choice",
    "prompt": "Które miasto było największe w Polsce pod koniec XV wieku według rozdziału?",
    "options": [
      "Gdańsk",
      "Kraków",
      "Toruń",
      "Elbląg",
      "Poznań",
      "Lublin"
    ],
    "answer": 0,
    "explanation": "Pod koniec XV wieku największym miastem w Polsce był Gdańsk, liczący niecałe 30 tysięcy mieszkańców."
  },
  {
    "id": "R05_MCH_04",
    "section": "Mieszczanie i chłopi",
    "type": "match",
    "prompt": "Połącz miejską budowlę lub miejsce z opisem.",
    "options": null,
    "left": [
      "mury miejskie",
      "brama miejska",
      "rynek",
      "ratusz"
    ],
    "right": [
      "chroniły miasto przed napadami",
      "wejście zamykane na noc i w razie niebezpieczeństwa",
      "główny plac miejski",
      "siedziba władz miasta"
    ],
    "answer": {
      "mury miejskie": "chroniły miasto przed napadami",
      "brama miejska": "wejście zamykane na noc i w razie niebezpieczeństwa",
      "rynek": "główny plac miejski",
      "ratusz": "siedziba władz miasta"
    },
    "image": "/img/r05_sredniowieczne_miasto.jpg",
    "explanation": "Najważniejsze elementy miasta to m.in. mury, bramy, rynek i ratusz."
  },
  {
    "id": "R05_MCH_05",
    "section": "Mieszczanie i chłopi",
    "type": "true_false",
    "prompt": "Ogień był dużym zagrożeniem dla średniowiecznego miasta, bo domy często stały gęsto i wiele z nich było drewnianych.",
    "options": null,
    "answer": true,
    "explanation": "Drewniane domy, ciasna zabudowa i używanie ognia do ogrzewania, gotowania i oświetlenia sprzyjały pożarom."
  },
  {
    "id": "R05_MCH_06",
    "section": "Mieszczanie i chłopi",
    "type": "sort",
    "prompt": "Przyporządkuj grupy mieszczan do opisów.",
    "options": null,
    "items": [
      "najbogatsi kupcy i rzemieślnicy",
      "ubożsi kupcy i rzemieślnicy",
      "najbiedniejsi mieszkańcy miasta"
    ],
    "categories": [
      "patrycjat",
      "pospólstwo",
      "plebs"
    ],
    "answer": {
      "patrycjat": [
        "najbogatsi kupcy i rzemieślnicy"
      ],
      "pospólstwo": [
        "ubożsi kupcy i rzemieślnicy"
      ],
      "plebs": [
        "najbiedniejsi mieszkańcy miasta"
      ]
    },
    "explanation": "Mieszczanie dzielili się na patrycjat, pospólstwo i plebs."
  },
  {
    "id": "R05_MCH_07",
    "section": "Mieszczanie i chłopi",
    "type": "single_choice",
    "prompt": "Kto zwykle zasiadał w radzie miejskiej?",
    "options": [
      "przedstawiciele patrycjatu",
      "wszyscy chłopi ze wsi",
      "wyłącznie giermkowie",
      "franciszkanie żebrzący",
      "poddani pana wsi",
      "uczniowie uniwersytetu"
    ],
    "answer": 0,
    "explanation": "W radzie miejskiej zasiadali przede wszystkim przedstawiciele patrycjatu, czyli najbogatsi mieszczanie."
  },
  {
    "id": "R05_MCH_08",
    "section": "Mieszczanie i chłopi",
    "type": "riddle",
    "prompt": "Organizacja skupiająca rzemieślników tego samego zawodu, np. szewców, to...",
    "options": null,
    "answer": "cech",
    "altAnswers": [
      "cech",
      "cechem"
    ],
    "explanation": "Cech kontrolował produkcję, ceny i jakość wyrobów rzemieślniczych."
  },
  {
    "id": "R05_MCH_09",
    "section": "Mieszczanie i chłopi",
    "type": "single_choice",
    "prompt": "Co musiał wykonać czeladnik, aby móc zostać mistrzem?",
    "options": [
      "majstersztyk",
      "hołd lenny",
      "dziesięcinę",
      "ostrołuk",
      "rozejm boży",
      "regułę zakonną"
    ],
    "answer": 0,
    "explanation": "Czeladnik wykonywał majstersztyk, a jeśli komisja uznała go za doskonały, mógł zostać mistrzem."
  },
  {
    "id": "R05_MCH_10",
    "section": "Mieszczanie i chłopi",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: patrycjat, pospólstwo, plebs, wasal.",
    "options": null,
    "answer": "wasal",
    "explanation": "Wasal należy do pojęć feudalnych, a pozostałe to grupy mieszczan."
  },
  {
    "id": "R05_MCH_11",
    "section": "Mieszczanie i chłopi",
    "type": "fill_in",
    "prompt": "Chłopi dzierżawili ziemię pana, czyli użytkowali ją w zamian za __________ lub świadczenia.",
    "options": null,
    "answer": [
      "opłaty"
    ],
    "altAnswers": [
      [
        "opłaty",
        "oplaty",
        "opłatę",
        "oplate"
      ]
    ],
    "explanation": "Dzierżawa oznaczała użytkowanie ziemi w zamian za opłaty albo świadczenia."
  },
  {
    "id": "R05_MCH_12",
    "section": "Mieszczanie i chłopi",
    "type": "match",
    "prompt": "Połącz opłatę lub świadczenie chłopskie z wyjaśnieniem.",
    "options": null,
    "left": [
      "czynsz",
      "pańszczyzna",
      "dziesięcina",
      "podatki państwowe"
    ],
    "right": [
      "zapłata panu w pieniądzach",
      "darmowa praca w gospodarstwie pana",
      "jedna dziesiąta plonów oddawana parafii",
      "świadczenia na rzecz państwa"
    ],
    "answer": {
      "czynsz": "zapłata panu w pieniądzach",
      "pańszczyzna": "darmowa praca w gospodarstwie pana",
      "dziesięcina": "jedna dziesiąta plonów oddawana parafii",
      "podatki państwowe": "świadczenia na rzecz państwa"
    },
    "image": "/img/r05_chlopska_wies.jpg",
    "explanation": "Chłopów obciążały czynsz, pańszczyzna, dziesięcina i podatki państwowe."
  },
  {
    "id": "R05_MCH_13",
    "section": "Mieszczanie i chłopi",
    "type": "true_false",
    "prompt": "Sołtys rządził wsią w imieniu pana i mógł być szczególnie zamożny.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że bogaty był zwłaszcza sołtys, który rządził wsią w imieniu pana."
  },
  {
    "id": "R05_MCH_14",
    "section": "Mieszczanie i chłopi",
    "type": "scenario",
    "prompt": "Mieszkaniec miasta szyje ubrania, nie jest najbogatszy, ale należy do grupy uboższych rzemieślników. Do której grupy mieszczan należy?",
    "options": [
      "pospólstwo",
      "patrycjat",
      "plebs",
      "rycerstwo",
      "duchowieństwo",
      "poddani"
    ],
    "answer": 0,
    "explanation": "Ubożsi kupcy i rzemieślnicy tworzyli pospólstwo."
  },
  {
    "id": "R05_DUK_01",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Czym był średniowieczny uniwersalizm?",
    "options": [
      "wspólną kulturą i dążeniem do jednego społeczeństwa chrześcijańskiej Europy",
      "zasadą dziedziczenia lenn przez dzieci",
      "organizacją rzemieślników jednego zawodu",
      "podatkiem oddawanym parafii",
      "udawaną bitwą podczas turnieju",
      "sposobem wyboru rady miejskiej"
    ],
    "answer": 0,
    "explanation": "Była to wspólna kultura i dążenie do stworzenia jednego społeczeństwa chrześcijańskiej Europy."
  },
  {
    "id": "R05_DUK_02",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "multi_select",
    "prompt": "Zaznacz elementy wspólnej kultury chrześcijańskiej Europy wymienione w rozdziale.",
    "options": [
      "te same święta kościelne",
      "zakony",
      "przedmioty w szkołach",
      "architektura",
      "obowiązkowe turnieje rycerskie",
      "jednakowe rady miejskie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wspólna kultura obejmowała m.in. święta kościelne, zakony, przedmioty w szkołach, architekturę i wiarę w cuda."
  },
  {
    "id": "R05_DUK_03",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "true_false",
    "prompt": "Łacina stała się w średniowiecznej Europie międzynarodowym językiem ludzi wykształconych.",
    "options": null,
    "answer": true,
    "explanation": "Kościół zachował łacinę, która była językiem ludzi wykształconych."
  },
  {
    "id": "R05_DUK_04",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Kto założył klasztor na Monte Cassino w VI wieku?",
    "options": [
      "św. Benedykt",
      "św. Franciszek z Asyżu",
      "św. Jadwiga",
      "Jan z Beka",
      "Christine de Pisan",
      "Giotto"
    ],
    "answer": 0,
    "image": "/img/r05_klasztor_benedyktynski.jpg",
    "explanation": "Klasztor na Monte Cassino założył św. Benedykt."
  },
  {
    "id": "R05_DUK_05",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "riddle",
    "prompt": "Zbiór przepisów i zaleceń określających, jak powinni żyć mnisi, to...",
    "options": null,
    "answer": "reguła zakonna",
    "altAnswers": [
      "reguła zakonna",
      "regula zakonna",
      "reguła",
      "regula"
    ],
    "explanation": "Reguła zakonna porządkowała życie mnichów w klasztorze."
  },
  {
    "id": "R05_DUK_06",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "multi_select",
    "prompt": "Jakie działania benedyktynów wspierały rozwój Europy?",
    "options": [
      "zakładali szpitale",
      "prowadzili szkoły",
      "przepisywali księgi",
      "uczyli lepszych metod uprawy roli",
      "organizowali rady miejskie",
      "nakładali podatki miejskie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_klasztor_benedyktynski.jpg",
    "explanation": "Benedyktyni zakładali szpitale, karmili głodnych, udzielali gościny podróżnym, prowadzili szkoły, przepisywali księgi i pracowali w gospodarstwach."
  },
  {
    "id": "R05_DUK_07",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Dlaczego benedyktyni poddawali się umartwieniom?",
    "options": [
      "aby zbliżyć się do Boga i mniej myśleć o własnych potrzebach",
      "aby zdobyć prawo do warsztatu w mieście",
      "aby zostać wasalami króla",
      "aby otrzymać okup za jeńców",
      "aby ominąć dziesięcinę",
      "aby budować wyłącznie zamki"
    ],
    "answer": 0,
    "explanation": "Uważali, że umartwienia pomagają zbliżyć się do Boga, zasłużyć na zbawienie i ograniczyć własne potrzeby."
  },
  {
    "id": "R05_DUK_08",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Czym zakon franciszkański różnił się od benedyktynów według rozdziału?",
    "options": [
      "był zakonem żebraczym bez własnych gospodarstw",
      "skupiał wyłącznie rzemieślników szewskich",
      "zakazywał kazań poza katedrami",
      "tworzył rady miejskie",
      "utrzymywał ciężkozbrojną jazdę",
      "pobierał czynsz od cechów"
    ],
    "answer": 0,
    "explanation": "Franciszkanie byli zakonem żebraczym: nie mieli własnych gospodarstw i żyli z tego, co dostali od ludzi."
  },
  {
    "id": "R05_DUK_09",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "match",
    "prompt": "Połącz styl architektoniczny z cechą.",
    "options": null,
    "left": [
      "styl romański",
      "styl gotycki",
      "rozeta",
      "przypory"
    ],
    "right": [
      "grube mury i małe okna",
      "ostrołuki i strzeliste katedry",
      "wielkie okrągłe okno z witrażami",
      "elementy podtrzymujące mury"
    ],
    "answer": {
      "styl romański": "grube mury i małe okna",
      "styl gotycki": "ostrołuki i strzeliste katedry",
      "rozeta": "wielkie okrągłe okno z witrażami",
      "przypory": "elementy podtrzymujące mury"
    },
    "image": "/img/r05_style_architektury.jpg",
    "explanation": "Styl romański miał grube mury i małe okna, a gotyk wprowadzał ostrołuki, przypory i wielkie okna."
  },
  {
    "id": "R05_DUK_10",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "true_false",
    "prompt": "Kościoły gotyckie mogły mieć wielkie okna, ponieważ ciężar sklepienia spoczywał także na przyporach.",
    "options": null,
    "answer": true,
    "explanation": "Zastosowanie ostrołuków i przypór pozwoliło wznosić wyższe katedry z dużymi oknami."
  },
  {
    "id": "R05_DUK_11",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do stylu romańskiego lub gotyckiego.",
    "options": null,
    "items": [
      "grube kamienne mury",
      "małe okna",
      "ostrołuki",
      "wielkie okna z witrażami",
      "strzeliste wieże",
      "mrok we wnętrzu"
    ],
    "categories": [
      "styl romański",
      "styl gotycki"
    ],
    "answer": {
      "styl romański": [
        "grube kamienne mury",
        "małe okna",
        "mrok we wnętrzu"
      ],
      "styl gotycki": [
        "ostrołuki",
        "wielkie okna z witrażami",
        "strzeliste wieże"
      ]
    },
    "image": "/img/r05_style_architektury.jpg",
    "explanation": "Cechy te odróżniają dwa najważniejsze style średniowiecznej architektury."
  },
  {
    "id": "R05_DUK_12",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Gdzie powstał pierwszy europejski uniwersytet?",
    "options": [
      "w Bolonii",
      "w Krakowie",
      "w Oksfordzie",
      "w Paryżu",
      "w Sankt Gallen",
      "w Asyżu"
    ],
    "answer": 0,
    "explanation": "Pierwszy uniwersytet w Europie powstał u schyłku XI wieku w Bolonii."
  },
  {
    "id": "R05_DUK_13",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "multi_select",
    "prompt": "Jakie przedmioty zajmowały ważne miejsce na średniowiecznym uniwersytecie?",
    "options": [
      "teologia",
      "prawo",
      "medycyna",
      "filozofia",
      "kowalstwo cechowe",
      "turnieje konne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Najważniejsza była teologia, a ważne były też prawo, medycyna i filozofia."
  },
  {
    "id": "R05_DUK_14",
    "section": "Duchowieństwo i kultura średniowiecza",
    "type": "true_false",
    "prompt": "Kobietom wolno było studiować na średniowiecznych uniwersytetach na takich samych zasadach jak mężczyznom.",
    "options": null,
    "answer": false,
    "explanation": "Kobietom nie wolno było studiować; niektóre dziewczynki uczyły się w klasztorach żeńskich."
  },
  {
    "id": "R05_MIE_01",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do obszaru życia średniowiecznego.",
    "options": null,
    "items": [
      "lenno",
      "hołd lenny",
      "cech",
      "ratusz",
      "reguła zakonna",
      "ostrołuk"
    ],
    "categories": [
      "feudalizm",
      "miasto",
      "kultura i Kościół"
    ],
    "answer": {
      "feudalizm": [
        "lenno",
        "hołd lenny"
      ],
      "miasto": [
        "cech",
        "ratusz"
      ],
      "kultura i Kościół": [
        "reguła zakonna",
        "ostrołuk"
      ]
    },
    "explanation": "Ćwiczenie łączy najważniejsze pojęcia z różnych części rozdziału."
  },
  {
    "id": "R05_MIE_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz osobę lub grupę z typowym miejscem.",
    "options": null,
    "left": [
      "rycerz",
      "mieszczanin",
      "chłop",
      "mnich"
    ],
    "right": [
      "zamek lub dwór",
      "miasto",
      "wieś",
      "klasztor"
    ],
    "answer": {
      "rycerz": "zamek lub dwór",
      "mieszczanin": "miasto",
      "chłop": "wieś",
      "mnich": "klasztor"
    },
    "explanation": "Miejsca pokazują, gdzie najłatwiej spotkać przedstawicieli różnych stanów i grup."
  },
  {
    "id": "R05_MIE_03",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż zjawiska w kolejności od ogólnego systemu do czynności chłopa.",
    "options": null,
    "items": [
      "chłop odrabia pańszczyznę",
      "senior nadaje lenno",
      "wasal służy w armii",
      "powstaje stosunek lenny"
    ],
    "answer": [
      "senior nadaje lenno",
      "powstaje stosunek lenny",
      "wasal służy w armii",
      "chłop odrabia pańszczyznę"
    ],
    "explanation": "Feudalizm opierał się na zależnościach, ziemi i pracy poddanych."
  },
  {
    "id": "R05_MIE_04",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: dziesięcina, pańszczyzna, czynsz, kopia.",
    "options": null,
    "answer": "kopia",
    "explanation": "Kopia była bronią rycerską, a pozostałe pojęcia dotyczą świadczeń chłopskich."
  },
  {
    "id": "R05_MIE_05",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "W średniowieczu większość Europejczyków należała do chłopstwa.",
    "options": null,
    "answer": true,
    "explanation": "Chłopi byli najliczniejszym stanem: z każdych dziesięciu Europejczyków dziewięciu należało do chłopstwa."
  },
  {
    "id": "R05_MIE_06",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Który zestaw najlepiej pokazuje różnicę między miastem a wsią?",
    "options": [
      "miasto: rzemiosło, handel i usługi; wieś: rolnictwo",
      "miasto: pańszczyzna; wieś: uniwersytety",
      "miasto: kopia i zbroja; wieś: ostrołuki",
      "miasto: klasztory; wieś: rady miejskie",
      "miasto: lenna; wieś: turnieje",
      "miasto: umartwienia; wieś: wykłady po łacinie"
    ],
    "answer": 0,
    "explanation": "Miasto opierało się głównie na rzemiośle, handlu i usługach, a wieś na rolnictwie."
  },
  {
    "id": "R05_MIE_07",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Uczeń widzi budowlę z grubymi murami, małymi oknami i mrocznym wnętrzem. Jaki styl opisuje?",
    "options": [
      "romański",
      "gotycki",
      "barokowy",
      "renesansowy",
      "franciszkański",
      "feudalny"
    ],
    "answer": 0,
    "image": "/img/r05_style_architektury.jpg",
    "explanation": "Grube mury, małe okna i mrok we wnętrzu są cechami stylu romańskiego."
  },
  {
    "id": "R05_MIE_08",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Wykłady na średniowiecznych uniwersytetach odbywały się po __________.",
    "options": null,
    "answer": [
      "łacinie"
    ],
    "altAnswers": [
      [
        "łacinie",
        "lacinie",
        "po łacinie",
        "po lacinie"
      ]
    ],
    "explanation": "Łacina była językiem ludzi wykształconych i językiem wykładów uniwersyteckich."
  },
  {
    "id": "R05_MIE_09",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady instytucji lub organizacji wymienionych w rozdziale.",
    "options": [
      "cech",
      "rada miejska",
      "zakon",
      "uniwersytet",
      "drukarnia parowa",
      "parlament robotniczy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozdział omawia m.in. cechy, radę miejską, zakony i uniwersytety."
  },
  {
    "id": "R05_MIE_10",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Darmowa praca chłopa w gospodarstwie pana to...",
    "options": null,
    "answer": "pańszczyzna",
    "altAnswers": [
      "pańszczyzna",
      "panszczyzna",
      "pańszczyznę",
      "panszczyzne"
    ],
    "explanation": "Pańszczyzna zastępowała czasem czynsz pieniężny."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile mniej więcej kosztował koń bojowy według rozdziału?",
    "options": [
      "tyle co osiem wołów",
      "tyle co jeden snop zboża",
      "tyle co dziesięcina z parafii",
      "tyle co dwa majstersztyki",
      "tyle co rok pracy czeladnika",
      "tyle co jedna rozeta"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że sam koń bojowy kosztował tyle co osiem wołów."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Zasada „wasal mojego wasala nie jest moim wasalem” utrudniała seniorowi wydawanie poleceń wasalom swoich wasali.",
    "options": null,
    "answer": true,
    "explanation": "Senior nie mógł niczego żądać od wasala swego wasala, co sprzyjało rozdrobnieniu feudalnemu."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Król Anglii ma własne królestwo, ale posiada też księstwo we Francji i z tego powodu składa hołd królowi Francji. Jaką podwójną sytuację opisuje ten przykład?",
    "options": [
      "w jednym kraju był wasalem, a w drugim suzerenem",
      "wszędzie był poddanym chłopskim",
      "był jednocześnie czeladnikiem i mistrzem",
      "nie należał do żadnego stanu",
      "był opatem i sołtysem",
      "był wyłącznie członkiem plebsu"
    ],
    "answer": 0,
    "image": "/img/r05_drabina_feudalna.jpg",
    "explanation": "Podręcznik pokazuje, że Edward I był wasalem króla Francji w związku z posiadłością we Francji, ale w Anglii był suzerenem."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki plon z jednego ziarna uzyskiwał średnio chłop w XIII-wiecznej Polsce według rozdziału?",
    "options": [
      "4 ziarna",
      "10 ziaren",
      "30 ziaren",
      "70 ziaren",
      "100 ziaren",
      "1 ziarno"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że z jednego zasianego ziarna chłop uzyskiwał średnio 4 ziarna plonu."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Jeśli chłop uciekł do miasta i spędził tam __________ i jeden dzień, stawał się wolny.",
    "options": null,
    "answer": [
      "rok"
    ],
    "altAnswers": [
      [
        "rok",
        "1 rok",
        "jeden rok"
      ]
    ],
    "explanation": "W ramce podano zasadę: rok i jeden dzień w mieście dawały zbiegłemu chłopu wolność."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę lub okres z wydarzeniem albo zjawiskiem.",
    "options": null,
    "left": [
      "VI w.",
      "IX-X w.",
      "początek XIII w.",
      "schyłek XI w."
    ],
    "right": [
      "założenie klasztoru na Monte Cassino",
      "powstanie feudalizmu",
      "odnowa zapoczątkowana przez św. Franciszka",
      "pierwszy uniwersytet w Bolonii"
    ],
    "answer": {
      "VI w.": "założenie klasztoru na Monte Cassino",
      "IX-X w.": "powstanie feudalizmu",
      "początek XIII w.": "odnowa zapoczątkowana przez św. Franciszka",
      "schyłek XI w.": "pierwszy uniwersytet w Bolonii"
    },
    "explanation": "Daty pochodzą z rozdziału i dotyczą feudalizmu, zakonów oraz uniwersytetów."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Bolonia, Sorbona, Oksford, Carcassonne.",
    "options": null,
    "answer": "Carcassonne",
    "explanation": "Bolonia, Sorbona i Oksford to przykłady pierwszych uniwersytetów, a Carcassonne jest przykładem średniowiecznego miasta z murami."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj osoby do informacji z rozdziału.",
    "options": null,
    "items": [
      "św. Benedykt",
      "św. Franciszek z Asyżu",
      "Christine de Pisan",
      "Jan z Beka"
    ],
    "categories": [
      "zakony",
      "kultura rycerska i kobiety"
    ],
    "answer": {
      "zakony": [
        "św. Benedykt",
        "św. Franciszek z Asyżu"
      ],
      "kultura rycerska i kobiety": [
        "Christine de Pisan",
        "Jan z Beka"
      ]
    },
    "explanation": "Osoby pojawiają się w częściach o rycerstwie, zakonach i kulturze."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Społeczeństwo średniowiecznej Europy",
  "icon": "🏰",
  "sectionOrder": [
    "Feudalna Europa",
    "Na rycerskim zamku",
    "Mieszczanie i chłopi",
    "Duchowieństwo i kultura średniowiecza",
    "Powtórka mieszana",
    "Super trudne"
  ],
  "sectionIcons": {
    "Feudalna Europa": "⚜️",
    "Na rycerskim zamku": "🛡️",
    "Mieszczanie i chłopi": "🏘️",
    "Duchowieństwo i kultura średniowiecza": "⛪",
    "Powtórka mieszana": "🧩",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
