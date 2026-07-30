// Skróty sekcji:
//   POD = Podstawy krajobrazu
//   POP = Pobrzeża i pojezierza
//   NIW = Niziny i Warszawa
//   WSL = Wyżyny Śląska i Lubelska
//   JUT = Jura i Tatry
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_POD_01",
    "section": "Podstawy krajobrazu",
    "type": "single_choice",
    "prompt": "Czym jest krajobraz?",
    "options": [
      "Wyglądem części powierzchni Ziemi",
      "Tylko pogodą w danym miejscu",
      "Wyłącznie mapą administracyjną",
      "Nazwą pasa rzeźby terenu",
      "Tylko zbiorem budynków",
      "Rodzajem gleby"
    ],
    "answer": 0,
    "explanation": "Krajobraz to określony wygląd części powierzchni Ziemi."
  },
  {
    "id": "R02_POD_02",
    "section": "Podstawy krajobrazu",
    "type": "multi_select",
    "prompt": "Zaznacz elementy krajobrazu wymienione w podręczniku.",
    "options": [
      "ukształtowanie powierzchni",
      "wody powierzchniowe",
      "szata roślinna",
      "wytwory działalności człowieka",
      "numer PESEL mieszkańców",
      "rozkład lekcji w szkole"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do elementów krajobrazu należą m.in. ukształtowanie powierzchni, skały, wody, roślinność i wytwory działalności człowieka."
  },
  {
    "id": "R02_POD_03",
    "section": "Podstawy krajobrazu",
    "type": "true_false",
    "prompt": "Krajobraz kulturowy został przekształcony przez człowieka.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik przeciwstawia krajobraz kulturowy krajobrazowi naturalnemu."
  },
  {
    "id": "R02_POD_04",
    "section": "Podstawy krajobrazu",
    "type": "fill_in",
    "prompt": "W Polsce wyróżnia się sześć pasów rzeźby terenu: pobrzeża, pojezierza, Niziny Środkowopolskie, Wyżyny Polskie, Kotliny Podkarpackie i __________.",
    "options": null,
    "answer": [
      "góry"
    ],
    "altAnswers": [
      [
        "góry",
        "gor",
        "pas gór",
        "gór"
      ]
    ],
    "explanation": "Ostatnim z sześciu pasów rzeźby terenu jest pas gór."
  },
  {
    "id": "R02_POD_05",
    "section": "Podstawy krajobrazu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pobrzeża, pojezierza, Wyżyny Polskie, klimat.",
    "options": null,
    "answer": "klimat",
    "explanation": "Pobrzeża, pojezierza i Wyżyny Polskie to pasy rzeźby terenu, a klimat nie jest pasem rzeźby."
  },
  {
    "id": "R02_POD_06",
    "section": "Podstawy krajobrazu",
    "type": "match",
    "prompt": "Połącz typ krajobrazu kulturowego z jego cechą.",
    "options": null,
    "left": [
      "rolniczy",
      "przemysłowy",
      "miejski"
    ],
    "right": [
      "wsie i pola uprawne",
      "fabryki",
      "gęsta zabudowa i sieć ulic"
    ],
    "answer": {
      "rolniczy": "wsie i pola uprawne",
      "przemysłowy": "fabryki",
      "miejski": "gęsta zabudowa i sieć ulic"
    },
    "explanation": "Krajobrazy kulturowe różnią się dominującym sposobem zagospodarowania terenu."
  },
  {
    "id": "R02_POD_07",
    "section": "Podstawy krajobrazu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do grup: przyrodnicze lub wytworzone przez człowieka.",
    "options": null,
    "items": [
      "rzeka",
      "las",
      "skała",
      "droga",
      "fabryka",
      "blok mieszkalny"
    ],
    "categories": [
      "przyrodnicze",
      "wytworzone przez człowieka"
    ],
    "answer": {
      "przyrodnicze": [
        "rzeka",
        "las",
        "skała"
      ],
      "wytworzone przez człowieka": [
        "droga",
        "fabryka",
        "blok mieszkalny"
      ]
    },
    "explanation": "Rzeka, las i skała są elementami przyrodniczymi, natomiast droga, fabryka i blok są wytworami człowieka."
  },
  {
    "id": "R02_POD_08",
    "section": "Podstawy krajobrazu",
    "type": "sequence",
    "prompt": "Ułóż pasy rzeźby terenu Polski od północy ku południu.",
    "options": null,
    "items": [
      "Wyżyny Polskie",
      "pobrzeża",
      "góry",
      "pojezierza",
      "Niziny Środkowopolskie",
      "Kotliny Podkarpackie"
    ],
    "answer": [
      "pobrzeża",
      "pojezierza",
      "Niziny Środkowopolskie",
      "Wyżyny Polskie",
      "Kotliny Podkarpackie",
      "góry"
    ],
    "image": "/img/r02_pasy_rzezby_polski.jpg",
    "explanation": "Pasy rzeźby terenu układają się w Polsce mniej więcej równoleżnikowo od pobrzeży po góry."
  },
  {
    "id": "R02_POD_09",
    "section": "Podstawy krajobrazu",
    "type": "riddle",
    "prompt": "Nazwa krajobrazu, w którym przeważają wsie i pola uprawne, to krajobraz...",
    "options": null,
    "answer": "rolniczy",
    "altAnswers": [
      "rolniczy",
      "krajobraz rolniczy"
    ],
    "explanation": "Krajobraz rolniczy rozpoznaje się po polach uprawnych i zabudowie wiejskiej."
  },
  {
    "id": "R02_POD_10",
    "section": "Podstawy krajobrazu",
    "type": "scenario",
    "prompt": "Uczeń opisuje teren pełen bloków, ulic, linii komunikacyjnych i wysokich budynków. Jaki typ krajobrazu kulturowego opisuje?",
    "options": [
      "miejski",
      "rolniczy",
      "naturalny",
      "wysokogórski",
      "nadmorski",
      "pojezierny"
    ],
    "answer": 0,
    "explanation": "Taki zestaw cech wskazuje na krajobraz miejski."
  },
  {
    "id": "R02_POP_01",
    "section": "Pobrzeża i pojezierza",
    "type": "single_choice",
    "prompt": "Który pas rzeźby terenu ciągnie się wzdłuż wybrzeża Morza Bałtyckiego?",
    "options": [
      "pobrzeża",
      "pojezierza",
      "Wyżyny Polskie",
      "Kotliny Podkarpackie",
      "Niziny Środkowopolskie",
      "góry"
    ],
    "answer": 0,
    "explanation": "Wzdłuż Bałtyku rozciąga się pas pobrzeży."
  },
  {
    "id": "R02_POP_02",
    "section": "Pobrzeża i pojezierza",
    "type": "multi_select",
    "prompt": "Zaznacz elementy charakterystyczne dla Wybrzeża Słowińskiego.",
    "options": [
      "piaszczyste plaże",
      "wydmy",
      "jeziora przybrzeżne",
      "nadmorskie równiny",
      "turnie granitowe",
      "hałdy górnicze"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r02_wydmy_plaza.jpg",
    "explanation": "Wybrzeże Słowińskie ma piaszczyste plaże, wydmy, jeziora przybrzeżne i nadmorskie równiny."
  },
  {
    "id": "R02_POP_03",
    "section": "Pobrzeża i pojezierza",
    "type": "true_false",
    "prompt": "Ruchome wydmy mogą zmieniać położenie pod wpływem przewiewania piasku przez wiatr.",
    "options": null,
    "answer": true,
    "image": "/img/r02_wydmy_plaza.jpg",
    "explanation": "Podręcznik podaje, że stałe przewiewanie piasku powoduje przemieszczanie się wydm."
  },
  {
    "id": "R02_POP_04",
    "section": "Pobrzeża i pojezierza",
    "type": "fill_in",
    "prompt": "Jeziora Łebsko, Jamno i Gardno to jeziora __________.",
    "options": null,
    "answer": [
      "przybrzeżne"
    ],
    "altAnswers": [
      [
        "przybrzeżne",
        "przybrzezne",
        "jeziora przybrzeżne"
      ]
    ],
    "explanation": "Są to jeziora przybrzeżne powstałe przy wybrzeżu niskim."
  },
  {
    "id": "R02_POP_05",
    "section": "Pobrzeża i pojezierza",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania jeziora przybrzeżnego.",
    "options": null,
    "items": [
      "mierzeja staje się coraz dłuższa",
      "z dawnej zatoki powstaje jezioro przybrzeżne",
      "prąd przybrzeżny nanosi piasek",
      "piasek tworzy mierzeję"
    ],
    "answer": [
      "prąd przybrzeżny nanosi piasek",
      "piasek tworzy mierzeję",
      "mierzeja staje się coraz dłuższa",
      "z dawnej zatoki powstaje jezioro przybrzeżne"
    ],
    "explanation": "Prąd przybrzeżny nanosi piasek, powstaje i wydłuża się mierzeja, a dawna zatoka staje się jeziorem przybrzeżnym."
  },
  {
    "id": "R02_POP_06",
    "section": "Pobrzeża i pojezierza",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "wydma",
      "mierzeja",
      "klif",
      "prąd przybrzeżny"
    ],
    "right": [
      "wzniesienie usypane z piasku przez wiatr",
      "piaszczysty wał odcinający zatokę",
      "strome wysokie wybrzeże",
      "strumień wody płynącej wzdłuż brzegu"
    ],
    "answer": {
      "wydma": "wzniesienie usypane z piasku przez wiatr",
      "mierzeja": "piaszczysty wał odcinający zatokę",
      "klif": "strome wysokie wybrzeże",
      "prąd przybrzeżny": "strumień wody płynącej wzdłuż brzegu"
    },
    "explanation": "Pojęcia te opisują procesy i formy nadmorskiego krajobrazu."
  },
  {
    "id": "R02_POP_07",
    "section": "Pobrzeża i pojezierza",
    "type": "single_choice",
    "prompt": "Które największe jeziora Polski leżą na Pojezierzu Mazurskim?",
    "options": [
      "Śniardwy i Mamry",
      "Łebsko i Gardno",
      "Jamno i Wicko",
      "Gopło i Malta",
      "Rożnowskie i Solińskie",
      "Czorsztyńskie i Żywieckie"
    ],
    "answer": 0,
    "image": "/img/r02_jeziora_mazurskie.jpg",
    "explanation": "W Krainie Wielkich Jezior Mazurskich znajdują się Śniardwy i Mamry."
  },
  {
    "id": "R02_POP_08",
    "section": "Pobrzeża i pojezierza",
    "type": "true_false",
    "prompt": "Pojezierze Mazurskie zostało w dużej mierze ukształtowane przez lądolód.",
    "options": null,
    "answer": true,
    "explanation": "Lądolód pozostawił na pojezierzach wzniesienia i zagłębienia, z których część wypełniła się wodą."
  },
  {
    "id": "R02_POP_09",
    "section": "Pobrzeża i pojezierza",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do krajobrazu nadmorskiego albo pojeziernego.",
    "options": null,
    "items": [
      "plaża",
      "klif",
      "lądolód",
      "Śniardwy",
      "Mamry",
      "wydma"
    ],
    "categories": [
      "nadmorski",
      "pojezierny"
    ],
    "answer": {
      "nadmorski": [
        "plaża",
        "klif",
        "wydma"
      ],
      "pojezierny": [
        "lądolód",
        "Śniardwy",
        "Mamry"
      ]
    },
    "explanation": "Plaża i klif są związane z wybrzeżem, a lądolód, wzniesienia i wielkie jeziora z krajobrazem pojeziernym."
  },
  {
    "id": "R02_POP_10",
    "section": "Pobrzeża i pojezierza",
    "type": "scenario",
    "prompt": "Rodzina planuje wakacje z żeglarstwem i kajakarstwem na szlaku wielu połączonych jezior. Który region z rozdziału najlepiej pasuje do takiego planu?",
    "options": [
      "Pojezierze Mazurskie",
      "Wyżyna Śląska",
      "Nizina Mazowiecka",
      "Wyżyna Lubelska",
      "Tatry Zachodnie",
      "Wybrzeże Słowińskie"
    ],
    "answer": 0,
    "image": "/img/r02_jeziora_mazurskie.jpg",
    "explanation": "Pojezierze Mazurskie jest opisane jako dobre miejsce do uprawiania żeglarstwa i kajakarstwa."
  },
  {
    "id": "R02_NIW_01",
    "section": "Niziny i Warszawa",
    "type": "single_choice",
    "prompt": "Jaka rzeźba terenu przeważa w krajobrazie Niziny Mazowieckiej?",
    "options": [
      "równiny i wysoczyzny porozcinane dolinami rzek",
      "strome turnie i granie",
      "czynne wulkany",
      "wysokie klify morskie",
      "głębokie jaskinie krasowe",
      "hałdy i kopalnie"
    ],
    "answer": 0,
    "explanation": "W krajobrazie Niziny Mazowieckiej przeważają równiny oraz wysoczyzny porozcinane dolinami rzek."
  },
  {
    "id": "R02_NIW_02",
    "section": "Niziny i Warszawa",
    "type": "multi_select",
    "prompt": "Zaznacz elementy związane z Kampinoskim Parkiem Narodowym.",
    "options": [
      "Puszcza Kampinoska",
      "bagna",
      "wydmy porośnięte lasem sosnowym",
      "położenie niedaleko Warszawy",
      "najwyższy szczyt Polski",
      "latarnie morskie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Park obejmuje Puszczę Kampinoską, w której sąsiadują m.in. bagna i wydmy porośnięte lasem sosnowym."
  },
  {
    "id": "R02_NIW_03",
    "section": "Niziny i Warszawa",
    "type": "true_false",
    "prompt": "Warszawa leży po obu brzegach Wisły.",
    "options": null,
    "answer": true,
    "image": "/img/r02_warszawa_panorama.jpg",
    "explanation": "Podręcznik podaje, że Warszawa leży w centralnej części kraju, po obu brzegach Wisły."
  },
  {
    "id": "R02_NIW_04",
    "section": "Niziny i Warszawa",
    "type": "fill_in",
    "prompt": "Warszawa jest __________ Polski.",
    "options": null,
    "answer": [
      "stolicą"
    ],
    "altAnswers": [
      [
        "stolicą",
        "stolica",
        "stolicą Polski",
        "stolica Polski"
      ]
    ],
    "explanation": "Warszawa jest stolicą naszego kraju."
  },
  {
    "id": "R02_NIW_05",
    "section": "Niziny i Warszawa",
    "type": "match",
    "prompt": "Połącz warszawski obiekt z opisem z rozdziału.",
    "options": null,
    "left": [
      "Stare Miasto",
      "Łazienki Królewskie",
      "Centrum Nauki Kopernik",
      "Stadion Narodowy"
    ],
    "right": [
      "miejsce wpisane na Listę UNESCO",
      "parkowo-pałacowa atrakcja stolicy",
      "centrum popularyzujące naukę",
      "arena wydarzeń sportowych i kulturalnych"
    ],
    "answer": {
      "Stare Miasto": "miejsce wpisane na Listę UNESCO",
      "Łazienki Królewskie": "parkowo-pałacowa atrakcja stolicy",
      "Centrum Nauki Kopernik": "centrum popularyzujące naukę",
      "Stadion Narodowy": "arena wydarzeń sportowych i kulturalnych"
    },
    "image": "/img/r02_warszawa_panorama.jpg",
    "explanation": "Rozdział przedstawia kilka znanych atrakcji Warszawy."
  },
  {
    "id": "R02_NIW_06",
    "section": "Niziny i Warszawa",
    "type": "single_choice",
    "prompt": "Która cecha najlepiej opisuje krajobraz wielkomiejski Warszawy?",
    "options": [
      "zwarta wielopiętrowa zabudowa i gęsta sieć ulic",
      "rozległe pola pszenicy i chmielu",
      "ruchome wydmy i mierzeje",
      "turnie, żleby i piargi",
      "wąwozy lessowe bez miast",
      "wyłącznie naturalne lasy"
    ],
    "answer": 0,
    "explanation": "Krajobraz wielkomiejski cechuje zwarta, wielopiętrowa zabudowa oraz rozbudowana sieć ulic i komunikacji."
  },
  {
    "id": "R02_NIW_07",
    "section": "Niziny i Warszawa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Sejm, Senat, Prezydent RP, latarnia morska.",
    "options": null,
    "answer": "latarnia morska",
    "explanation": "Sejm, Senat i Prezydent RP to organy władzy państwowej mające siedziby w Warszawie, a latarnia morska jest obiektem nadmorskim."
  },
  {
    "id": "R02_NIW_08",
    "section": "Niziny i Warszawa",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do Niziny Mazowieckiej lub Warszawy.",
    "options": null,
    "items": [
      "Puszcza Kampinoska",
      "Kurpie",
      "metro",
      "Stare Miasto",
      "siedziby władz państwowych",
      "Twierdza Modlin"
    ],
    "categories": [
      "Nizina Mazowiecka",
      "Warszawa"
    ],
    "answer": {
      "Nizina Mazowiecka": [
        "Puszcza Kampinoska",
        "Kurpie",
        "Twierdza Modlin"
      ],
      "Warszawa": [
        "metro",
        "Stare Miasto",
        "siedziby władz państwowych"
      ]
    },
    "explanation": "Puszcza Kampinoska i Kurpie dotyczą Niziny Mazowieckiej, a metro, Stare Miasto i siedziby władz są związane z Warszawą."
  },
  {
    "id": "R02_NIW_09",
    "section": "Niziny i Warszawa",
    "type": "riddle",
    "prompt": "Największa rzeka przepływająca przez Warszawę to...",
    "options": null,
    "answer": "Wisła",
    "altAnswers": [
      "Wisła",
      "Wisla",
      "rzeka Wisła"
    ],
    "explanation": "Warszawa leży po obu brzegach Wisły."
  },
  {
    "id": "R02_NIW_10",
    "section": "Niziny i Warszawa",
    "type": "scenario",
    "prompt": "Turysta chce zobaczyć miejsce urodzenia Fryderyka Chopina na Nizinie Mazowieckiej. Którą miejscowość powinien wybrać?",
    "options": [
      "Żelazowa Wola",
      "Łeba",
      "Giżycko",
      "Zamość",
      "Zakopane",
      "Tarnowskie Góry"
    ],
    "answer": 0,
    "explanation": "Muzeum w Żelazowej Woli jest przedstawione jako atrakcja Niziny Mazowieckiej związana z koncertami fortepianowymi."
  },
  {
    "id": "R02_WSL_01",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "single_choice",
    "prompt": "Jaki surowiec szczególnie przyczynił się do rozwoju przemysłu na Wyżynie Śląskiej?",
    "options": [
      "węgiel kamienny",
      "sól morska",
      "granit tatrzański",
      "less",
      "piasek wydmowy",
      "wapień jurajski"
    ],
    "answer": 0,
    "image": "/img/r02_kopalnia_halda.jpg",
    "explanation": "Do rozwoju przemysłu na Wyżynie Śląskiej przyczyniły się bogate złoża węgla kamiennego."
  },
  {
    "id": "R02_WSL_02",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "multi_select",
    "prompt": "Zaznacz negatywne skutki działalności kopalń i przemysłu na Wyżynie Śląskiej.",
    "options": [
      "powstawanie hałd",
      "zanieczyszczenie powietrza",
      "szkody górnicze",
      "silne przekształcenie środowiska",
      "powstawanie jezior przybrzeżnych",
      "narastanie stalaktytów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r02_kopalnia_halda.jpg",
    "explanation": "Rozwój przemysłu spowodował przekształcenie środowiska, hałdy, zanieczyszczenie powietrza i szkody górnicze."
  },
  {
    "id": "R02_WSL_03",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "true_false",
    "prompt": "Hałdy to wzniesienia utworzone z odpadów przemysłowych.",
    "options": null,
    "answer": true,
    "image": "/img/r02_kopalnia_halda.jpg",
    "explanation": "Podręcznik definiuje hałdy jako wzniesienia z odpadów przemysłowych."
  },
  {
    "id": "R02_WSL_04",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "fill_in",
    "prompt": "Najważniejsze święto górników obchodzone 4 grudnia to __________.",
    "options": null,
    "answer": [
      "Barbórka"
    ],
    "altAnswers": [
      [
        "Barbórka",
        "Barborka"
      ]
    ],
    "explanation": "Barbórka jest świętem górników obchodzonym w dzień św. Barbary."
  },
  {
    "id": "R02_WSL_05",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "match",
    "prompt": "Połącz element kultury lub przemysłu Śląska z opisem.",
    "options": null,
    "left": [
      "gwara śląska",
      "Barbórka",
      "Szlak Zabytków Techniki",
      "Park Śląski"
    ],
    "right": [
      "regionalna odmiana języka",
      "święto górników",
      "zabytkowe obiekty przemysłowe",
      "teren zielony na obszarach przekształconych"
    ],
    "answer": {
      "gwara śląska": "regionalna odmiana języka",
      "Barbórka": "święto górników",
      "Szlak Zabytków Techniki": "zabytkowe obiekty przemysłowe",
      "Park Śląski": "teren zielony na obszarach przekształconych"
    },
    "explanation": "Rozdział łączy Śląsk z górnictwem, gwarą śląską, Barbórką i Szlakiem Zabytków Techniki."
  },
  {
    "id": "R02_WSL_06",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "single_choice",
    "prompt": "Który krajobraz przeważa na Wyżynie Lubelskiej?",
    "options": [
      "rolniczy",
      "wysokogórski",
      "nadmorski",
      "miejsko-przemysłowy",
      "pojezierny",
      "naturalny"
    ],
    "answer": 0,
    "explanation": "Na Wyżynie Lubelskiej przeważa krajobraz rolniczy z polami uprawnymi."
  },
  {
    "id": "R02_WSL_07",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny uprawiane na Wyżynie Lubelskiej wymienione w podręczniku.",
    "options": [
      "pszenica",
      "buraki cukrowe",
      "tytoń",
      "chmiel",
      "kosodrzewina",
      "mikołajek nadmorski"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na Wyżynie Lubelskiej uprawia się m.in. pszenicę, buraki cukrowe, tytoń i chmiel."
  },
  {
    "id": "R02_WSL_08",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "fill_in",
    "prompt": "Skała, w której na Wyżynie Lubelskiej tworzą się wąwozy, to __________.",
    "options": null,
    "answer": [
      "less"
    ],
    "altAnswers": [
      [
        "less",
        "lessie"
      ]
    ],
    "explanation": "Wąwozy na Wyżynie Lubelskiej powstały w łatwo wymywanym lessie."
  },
  {
    "id": "R02_WSL_09",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do Wyżyny Śląskiej albo Wyżyny Lubelskiej.",
    "options": null,
    "items": [
      "kopalnie",
      "hałdy",
      "less",
      "wąwozy",
      "pszenica",
      "Spodek"
    ],
    "categories": [
      "Wyżyna Śląska",
      "Wyżyna Lubelska"
    ],
    "answer": {
      "Wyżyna Śląska": [
        "kopalnie",
        "hałdy",
        "Spodek"
      ],
      "Wyżyna Lubelska": [
        "less",
        "wąwozy",
        "pszenica"
      ]
    },
    "explanation": "Wyżyna Śląska wiąże się z kopalniami i przemysłem, a Wyżyna Lubelska z lessami, wąwozami i rolnictwem."
  },
  {
    "id": "R02_WSL_10",
    "section": "Wyżyny Śląska i Lubelska",
    "type": "scenario",
    "prompt": "Rolnik szuka miejsca z żyznymi glebami brunatnymi i czarnoziemami, gdzie można uprawiać pszenicę, buraki cukrowe, tytoń i chmiel. Która kraina z rozdziału pasuje najlepiej?",
    "options": [
      "Wyżyna Lubelska",
      "Wybrzeże Słowińskie",
      "Tatry Wysokie",
      "Pojezierze Mazurskie",
      "Wyżyna Śląska",
      "Nizina Mazowiecka"
    ],
    "answer": 0,
    "image": "/img/r02_wawoz_lessowy.jpg",
    "explanation": "Tak opisano rolniczy krajobraz Wyżyny Lubelskiej."
  },
  {
    "id": "R02_JUT_01",
    "section": "Jura i Tatry",
    "type": "single_choice",
    "prompt": "Z jakich skał zbudowana jest głównie Wyżyna Krakowsko-Częstochowska?",
    "options": [
      "wapiennych",
      "granitowych",
      "bazaltowych",
      "lessowych",
      "węglowych",
      "ilastych"
    ],
    "answer": 0,
    "image": "/img/r02_jaskinia_krasowa.jpg",
    "explanation": "Wyżynę Krakowsko-Częstochowską budują głównie skały wapienne."
  },
  {
    "id": "R02_JUT_02",
    "section": "Jura i Tatry",
    "type": "fill_in",
    "prompt": "Rozpuszczanie skał wapiennych przez wodę opadową z dwutlenkiem węgla to __________.",
    "options": null,
    "answer": [
      "krasowienie"
    ],
    "altAnswers": [
      [
        "krasowienie",
        "proces krasowienia"
      ]
    ],
    "explanation": "To zjawisko nazywa się krasowieniem i prowadzi do powstawania form krasowych."
  },
  {
    "id": "R02_JUT_03",
    "section": "Jura i Tatry",
    "type": "match",
    "prompt": "Połącz formę krasową z opisem.",
    "options": null,
    "left": [
      "stalaktyt",
      "stalagmit",
      "stalagnat",
      "wywierzysko"
    ],
    "right": [
      "zwisa ze stropu jaskini",
      "wyrasta z dna jaskini",
      "powstaje z połączenia stalaktytu i stalagmitu",
      "źródło krasowe"
    ],
    "answer": {
      "stalaktyt": "zwisa ze stropu jaskini",
      "stalagmit": "wyrasta z dna jaskini",
      "stalagnat": "powstaje z połączenia stalaktytu i stalagmitu",
      "wywierzysko": "źródło krasowe"
    },
    "image": "/img/r02_jaskinia_krasowa.jpg",
    "explanation": "Stalaktyt zwisa ze stropu, stalagmit narasta od dna, a stalagnat jest kolumną z połączenia obu form."
  },
  {
    "id": "R02_JUT_04",
    "section": "Jura i Tatry",
    "type": "true_false",
    "prompt": "Szlak Orlich Gniazd prowadzi przez Wyżynę Krakowsko-Częstochowską.",
    "options": null,
    "answer": true,
    "explanation": "Szlak Orlich Gniazd biegnie z Krakowa do Częstochowy i obejmuje ruiny zamków oraz warowni na wzniesieniach."
  },
  {
    "id": "R02_JUT_05",
    "section": "Jura i Tatry",
    "type": "single_choice",
    "prompt": "Która część Tatr jest zbudowana głównie ze skał granitowych?",
    "options": [
      "Tatry Wysokie",
      "Tatry Zachodnie",
      "Podhale",
      "Roztocze",
      "Pogórze",
      "Kotliny Podkarpackie"
    ],
    "answer": 0,
    "image": "/img/r02_tatry_wysokie.jpg",
    "explanation": "Tatry Wysokie są zbudowane głównie z granitu i tworzą najwyższą część Tatr."
  },
  {
    "id": "R02_JUT_06",
    "section": "Jura i Tatry",
    "type": "multi_select",
    "prompt": "Zaznacz cechy krajobrazu wysokogórskiego Tatr Wysokich.",
    "options": [
      "duże wysokości względne i bezwzględne",
      "głębokie doliny",
      "strome stoki",
      "turnie i granie",
      "ruchome wydmy",
      "hałdy górnicze"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r02_tatry_wysokie.jpg",
    "explanation": "Tatry Wysokie cechują duże wysokości, głębokie doliny, strome stoki, turnie, granie, żleby i piargi."
  },
  {
    "id": "R02_JUT_07",
    "section": "Jura i Tatry",
    "type": "sequence",
    "prompt": "Ułóż piętra roślinności w Tatrach od najniższego do najwyższego.",
    "options": null,
    "items": [
      "hale",
      "regiel dolny",
      "turnie",
      "pogórze",
      "piętro kosodrzewiny",
      "regiel górny"
    ],
    "answer": [
      "pogórze",
      "regiel dolny",
      "regiel górny",
      "piętro kosodrzewiny",
      "hale",
      "turnie"
    ],
    "image": "/img/r02_pietra_roslinnosci_tatr.jpg",
    "explanation": "Piętra roślinne w Tatrach to kolejno: pogórze, regiel dolny, regiel górny, kosodrzewina, hale, turnie."
  },
  {
    "id": "R02_JUT_08",
    "section": "Jura i Tatry",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do Tatr Wysokich lub Tatr Zachodnich.",
    "options": null,
    "items": [
      "skały granitowe",
      "wyższe pasmo",
      "strome stoki",
      "skały wapienne",
      "zaokrąglone wierzchołki",
      "liczne jaskinie"
    ],
    "categories": [
      "Tatry Wysokie",
      "Tatry Zachodnie"
    ],
    "answer": {
      "Tatry Wysokie": [
        "skały granitowe",
        "wyższe pasmo",
        "strome stoki"
      ],
      "Tatry Zachodnie": [
        "skały wapienne",
        "zaokrąglone wierzchołki",
        "liczne jaskinie"
      ]
    },
    "explanation": "Tatry Wysokie są granitowe, wyższe i bardziej strome, a Tatry Zachodnie są wapienne, niższe i mają zaokrąglone wierzchołki."
  },
  {
    "id": "R02_JUT_09",
    "section": "Jura i Tatry",
    "type": "riddle",
    "prompt": "Silny, ciepły i suchy wiatr wiejący w Tatrach z południa to...",
    "options": null,
    "answer": "halny",
    "altAnswers": [
      "halny",
      "wiatr halny"
    ],
    "explanation": "Halny zimą przynosi ocieplenie i może powodować gwałtowne topnienie śniegu."
  },
  {
    "id": "R02_JUT_10",
    "section": "Jura i Tatry",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: turnia, grań, żleb, mierzeja.",
    "options": null,
    "answer": "mierzeja",
    "explanation": "Turnia, grań i żleb to formy skalne krajobrazu wysokogórskiego, a mierzeja jest formą nadmorską."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej wyjaśnia, dlaczego Tatry Zachodnie są niższe i mniej strome od Tatr Wysokich?",
    "options": [
      "Budują je mniej odporne skały wapienne",
      "Są położone nad morzem",
      "Nie działały tam żadne procesy niszczące",
      "Zbudowane są wyłącznie z lessu",
      "Powstały z hałd przemysłowych",
      "Leżą na Nizinie Mazowieckiej"
    ],
    "answer": 0,
    "explanation": "Tatry Zachodnie zbudowane są głównie ze skał wapiennych, mniej odpornych na niszczenie niż granit Tatr Wysokich."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz pary: obiekt lub zjawisko oraz właściwy region.",
    "options": [
      "Łebsko — Wybrzeże Słowińskie",
      "Śniardwy — Pojezierze Mazurskie",
      "Barbórka — Wyżyna Śląska",
      "Zamość — Wyżyna Lubelska",
      "Morskie Oko — Wyżyna Śląska",
      "Spodek — Tatry Zachodnie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wszystkie poprawne pary łączą obiekt lub zjawisko z regionem wskazanym w rozdziale."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Stalaktyty w jaskiniach wydłużają się bardzo powoli, około 1 mm na rok.",
    "options": null,
    "answer": true,
    "explanation": "Schemat rzeźby krasowej podaje, że stalaktyty wydłużają się bardzo powoli, około 1 mm rocznie."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Najgłębszą i najdłuższą jaskinią w Polsce, położoną w Tatrach Zachodnich, jest Wielka Jaskinia __________.",
    "options": null,
    "answer": [
      "Śnieżna"
    ],
    "altAnswers": [
      [
        "Śnieżna",
        "Sniezna",
        "Wielka Jaskinia Śnieżna",
        "Wielka Jaskinia Sniezna"
      ]
    ],
    "explanation": "Wielka Jaskinia Śnieżna znajduje się w Tatrach Zachodnich."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz liczbę z informacją z rozdziału.",
    "options": null,
    "left": [
      "2499 m n.p.m.",
      "163 km",
      "600 m",
      "4 grudnia"
    ],
    "right": [
      "wysokość Rysów",
      "długość Szlaku Orlich Gniazd",
      "długość podziemnego przepływu w Sztolni Czarnego Pstrąga",
      "data Barbórki"
    ],
    "answer": {
      "2499 m n.p.m.": "wysokość Rysów",
      "163 km": "długość Szlaku Orlich Gniazd",
      "600 m": "długość podziemnego przepływu w Sztolni Czarnego Pstrąga",
      "4 grudnia": "data Barbórki"
    },
    "explanation": "Te liczby pojawiają się w opisach konkretnych krajobrazów i obiektów."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż obiekty od północy Polski ku południu.",
    "options": null,
    "items": [
      "Tatry",
      "Nizina Mazowiecka",
      "Wybrzeże Słowińskie",
      "Pojezierze Mazurskie"
    ],
    "answer": [
      "Wybrzeże Słowińskie",
      "Pojezierze Mazurskie",
      "Nizina Mazowiecka",
      "Tatry"
    ],
    "image": "/img/r02_pasy_rzezby_polski.jpg",
    "explanation": "Wybrzeże Słowińskie leży nad Bałtykiem, Pojezierze Mazurskie na północnym wschodzie, Nizina Mazowiecka w centrum, a Tatry na południu."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj procesy do skutków w krajobrazie.",
    "options": null,
    "items": [
      "odcięcie zatoki przez mierzeję",
      "zanik lądolodu",
      "krasowienie wapieni",
      "wymywanie lessu",
      "działalność kopalń",
      "lodowce górskie w Tatrach"
    ],
    "categories": [
      "tworzy jeziora lub doliny naturalne",
      "tworzy formy krasowe lub lessowe",
      "przekształca krajobraz przemysłowo"
    ],
    "answer": {
      "tworzy jeziora lub doliny naturalne": [
        "odcięcie zatoki przez mierzeję",
        "zanik lądolodu",
        "lodowce górskie w Tatrach"
      ],
      "tworzy formy krasowe lub lessowe": [
        "krasowienie wapieni",
        "wymywanie lessu"
      ],
      "przekształca krajobraz przemysłowo": [
        "działalność kopalń"
      ]
    },
    "explanation": "Różne czynniki rzeźbotwórcze tworzą charakterystyczne elementy krajobrazów Polski."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie elementy krajobrazu krasowego Jury Krakowsko-Częstochowskiej?",
    "options": [
      "skałki wapienne, jaskinie, stalaktyty, wywierzyska",
      "wydmy, mierzeje, klify, latarnie",
      "hałdy, kopalnie, szyby, filtry kominowe",
      "turnie, granie, piargi, hale",
      "pola pszenicy, chmiel, less, Barbórka",
      "metro, Sejm, Senat, plaża"
    ],
    "answer": 0,
    "image": "/img/r02_jaskinia_krasowa.jpg",
    "explanation": "Do form krasowych należą m.in. skałki wapienne, jaskinie, stalaktyty i wywierzyska."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Nazwa źródła krasowego, z którego woda wydostaje się na powierzchnię, to...",
    "options": null,
    "answer": "wywierzysko",
    "altAnswers": [
      "wywierzysko",
      "wywierzyska"
    ],
    "explanation": "Wywierzyska są źródłami dającymi początek niektórym rzekom Wyżyny Krakowsko-Częstochowskiej."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: piaskownica zwyczajna, mikołajek nadmorski, wydmuchrzyca piaskowa, limba.",
    "options": null,
    "answer": "limba",
    "explanation": "Piaskownica, mikołajek i wydmuchrzyca są roślinami wydm, a limba jest charakterystyczna dla Tatr."
  }
];

const KID_PROMPTS = {
  "R02_POD_08": "Ułóż pasy Polski od morza do gór.",
  "R02_POP_05": "Ułóż, jak z zatoki robi się jezioro przybrzeżne.",
  "R02_NIW_05": "Połącz znane miejsca w Warszawie z opisami.",
  "R02_WSL_10": "Wybierz krainę z żyznymi polami i wąwozami.",
  "R02_JUT_07": "Ułóż piętra roślin w Tatrach od dołu do góry.",
  "R02_HARD_06": "Ułóż krainy Polski od północy do południa."
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Krajobrazy Polski",
  icon: "🗺️",
  sectionOrder: [
  "Podstawy krajobrazu",
  "Pobrzeża i pojezierza",
  "Niziny i Warszawa",
  "Wyżyny Śląska i Lubelska",
  "Jura i Tatry",
  "Super trudne"
],
  sectionIcons: {
  "Podstawy krajobrazu": "🌍",
  "Pobrzeża i pojezierza": "🌊",
  "Niziny i Warszawa": "🏙️",
  "Wyżyny Śląska i Lubelska": "⛏️",
  "Jura i Tatry": "⛰️",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
