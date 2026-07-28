// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NAD  = Krajobraz nadmorski
//   POJ  = Krajobraz pojezierny
//   NIZ  = Krajobraz nizinny
//   WYZ  = Krajobraz wyżynny
//   GOR  = Krajobraz wysokogórski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_NAD_01",
    "section": "Krajobraz nadmorski",
    "type": "single_choice",
    "prompt": "Gdzie w Polsce występuje krajobraz nadmorski?",
    "options": [
      "W pasie pobrzeży na północy kraju",
      "W pasie gór na południu kraju",
      "Na Nizinie Mazowieckiej",
      "Na Wyżynie Krakowsko-Częstochowskiej",
      "Tylko na Pojezierzu Mazurskim",
      "W dolinach Tatr"
    ],
    "answer": 0,
    "image": "r03_plaza_i_wydma.jpg",
    "explanation": "Krajobraz nadmorski występuje w Polsce tylko w pasie pobrzeży na północy kraju, wzdłuż wybrzeża Morza Bałtyckiego."
  },
  {
    "id": "R03_NAD_02",
    "section": "Krajobraz nadmorski",
    "type": "true_false",
    "prompt": "Najważniejszymi czynnikami kształtującymi krajobraz nadmorski są morze i wiatr.",
    "options": null,
    "answer": true,
    "explanation": "Morze i wiatr mogą zarówno budować, jak i niszczyć brzeg morski."
  },
  {
    "id": "R03_NAD_03",
    "section": "Krajobraz nadmorski",
    "type": "multi_select",
    "prompt": "Zaznacz charakterystyczne elementy krajobrazu nadmorskiego.",
    "options": [
      "plaże",
      "wydmy",
      "jeziora przybrzeżne",
      "klify",
      "turnie",
      "stalagnaty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_plaza_i_wydma.jpg",
    "explanation": "Do charakterystycznych elementów krajobrazu nadmorskiego należą plaże, wydmy, jeziora przybrzeżne i klify."
  },
  {
    "id": "R03_NAD_04",
    "section": "Krajobraz nadmorski",
    "type": "fill_in",
    "prompt": "Plaże są kształtowane przez __________ wyrzucany na brzeg przez __________.",
    "options": null,
    "answer": [
      "piasek",
      "morze"
    ],
    "altAnswers": [
      [
        "piasek",
        "piach"
      ],
      [
        "morze",
        "wody morza"
      ]
    ],
    "explanation": "Plaże powstają z piasku wyrzucanego na brzeg przez morze."
  },
  {
    "id": "R03_NAD_05",
    "section": "Krajobraz nadmorski",
    "type": "riddle",
    "prompt": "Wysoki i stromy brzeg morski, którego podstawę podmywają fale, to...",
    "options": null,
    "answer": "klif",
    "altAnswers": [
      "klif",
      "brzeg klifowy"
    ],
    "image": "r03_klif_nadmorski.jpg",
    "explanation": "Klif jest przykładem wybrzeża wysokiego. Fale podmywają jego podstawę, przez co ściana obrywa się lub osuwa."
  },
  {
    "id": "R03_NAD_06",
    "section": "Krajobraz nadmorski",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do krajobrazu nadmorskiego: plaża, wydma, jezioro przybrzeżne, piarg.",
    "options": null,
    "answer": "piarg",
    "explanation": "Piarg jest elementem rzeźby wysokogórskiej, a plaża, wydma i jezioro przybrzeżne są związane z krajobrazem nadmorskim."
  },
  {
    "id": "R03_NAD_07",
    "section": "Krajobraz nadmorski",
    "type": "scenario",
    "prompt": "Spacerujesz po wybrzeżu. Wiatr nanosi piasek i tworzy z niego wzniesienie, które może się przemieszczać. Jak nazywa się taka forma terenu?",
    "options": [
      "wydma",
      "klif",
      "pradolina",
      "turnia",
      "stalagmit",
      "grań"
    ],
    "answer": 0,
    "explanation": "Wydmy to wzniesienia tworzone z piasku nanoszonego przez wiatr. Niektóre z nich są ruchome."
  },
  {
    "id": "R03_NAD_08",
    "section": "Krajobraz nadmorski",
    "type": "match",
    "prompt": "Połącz element krajobrazu nadmorskiego z opisem.",
    "options": null,
    "left": [
      "plaża",
      "wydma",
      "klif",
      "mierzeja"
    ],
    "right": [
      "pas piasku nad morzem",
      "wzniesienie z piasku nanoszonego przez wiatr",
      "wysoki stromy brzeg",
      "wąski pas lądu odcinający zatokę"
    ],
    "answer": {
      "plaża": "pas piasku nad morzem",
      "wydma": "wzniesienie z piasku nanoszonego przez wiatr",
      "klif": "wysoki stromy brzeg",
      "mierzeja": "wąski pas lądu odcinający zatokę"
    },
    "explanation": "Plaże, wydmy, klify i mierzeje są opisane jako formy związane z działaniem morza i wiatru na pobrzeżach."
  },
  {
    "id": "R03_NAD_09",
    "section": "Krajobraz nadmorski",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do czynnika, z którym są w tekście najmocniej związane.",
    "options": null,
    "items": [
      "plaża",
      "klif",
      "wydma",
      "ruchoma wydma"
    ],
    "categories": [
      "morze",
      "wiatr"
    ],
    "answer": {
      "morze": [
        "plaża",
        "klif"
      ],
      "wiatr": [
        "wydma",
        "ruchoma wydma"
      ]
    },
    "explanation": "Plaże kształtuje piasek wyrzucany przez morze, klify są podmywane przez fale, a wydmy powstają z piasku nanoszonego przez wiatr."
  },
  {
    "id": "R03_NAD_10",
    "section": "Krajobraz nadmorski",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania jeziora przybrzeżnego w poprawnej kolejności.",
    "options": null,
    "items": [
      "mierzeja zamyka zatokę",
      "prąd przybrzeżny nanosi piasek",
      "powstaje jezioro przybrzeżne",
      "piasek stopniowo buduje mierzeję"
    ],
    "answer": [
      "prąd przybrzeżny nanosi piasek",
      "piasek stopniowo buduje mierzeję",
      "mierzeja zamyka zatokę",
      "powstaje jezioro przybrzeżne"
    ],
    "image": "r03_jezioro_przybrzezne.jpg",
    "explanation": "Prąd przybrzeżny nanosi piasek, piasek buduje mierzeję, a ta odcina zatokę od morza, tworząc jezioro przybrzeżne."
  },
  {
    "id": "R03_NAD_11",
    "section": "Krajobraz nadmorski",
    "type": "single_choice",
    "prompt": "Co jest najbardziej charakterystyczne dla krajobrazu Wybrzeża Słowińskiego?",
    "options": [
      "piaszczyste plaże i wydmy",
      "wysokie turnie i granie",
      "wąwozy lessowe",
      "sady jabłoniowe",
      "rozległe kopalnie",
      "pola ryżowe"
    ],
    "answer": 0,
    "explanation": "W podręczniku podano, że najbardziej charakterystycznymi elementami Wybrzeża Słowińskiego są piaszczyste plaże i wydmy."
  },
  {
    "id": "R03_POJ_01",
    "section": "Krajobraz pojezierny",
    "type": "single_choice",
    "prompt": "Co w głównej mierze ukształtowało krajobraz pojezierzy?",
    "options": [
      "lądolód",
      "czynne wulkany",
      "fale oceaniczne",
      "wiatr halny",
      "ruchy wydm śródlądowych",
      "budowa zamków"
    ],
    "answer": 0,
    "image": "r03_pojezierze_mazurskie.jpg",
    "explanation": "Krajobraz pojezierzy został ukształtowany głównie przez zalegający dawniej lądolód."
  },
  {
    "id": "R03_POJ_02",
    "section": "Krajobraz pojezierny",
    "type": "true_false",
    "prompt": "Pojezierza to tereny o największej liczbie jezior w Polsce.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale pojezierza opisano jako obszary o największej liczbie jezior w Polsce."
  },
  {
    "id": "R03_POJ_03",
    "section": "Krajobraz pojezierny",
    "type": "fill_in",
    "prompt": "Topniejący lądolód pozostawił liczne __________, wzniesienia i doliny oraz skały zwane __________.",
    "options": null,
    "answer": [
      "jeziora",
      "głazami narzutowymi"
    ],
    "altAnswers": [
      [
        "jeziora",
        "jezior"
      ],
      [
        "głazami narzutowymi",
        "głazy narzutowe"
      ]
    ],
    "explanation": "Po lądolodzie pozostały m.in. jeziora, wzniesienia, doliny oraz głazy narzutowe."
  },
  {
    "id": "R03_POJ_04",
    "section": "Krajobraz pojezierny",
    "type": "riddle",
    "prompt": "Skały uwięzione niegdyś w ciele lądolodu i pozostawione po jego stopnieniu to...",
    "options": null,
    "answer": "głazy narzutowe",
    "altAnswers": [
      "głazy narzutowe",
      "głaz narzutowy"
    ],
    "explanation": "Głazy narzutowe przemieszczały się wraz z lądolodem, a po jego stopnieniu pozostały na pojezierzach."
  },
  {
    "id": "R03_POJ_05",
    "section": "Krajobraz pojezierny",
    "type": "single_choice",
    "prompt": "Jak nazywa się największe jezioro Pojezierza Mazurskiego i całej Polski?",
    "options": [
      "Śniardwy",
      "Gardno",
      "Łebsko",
      "Morskie Oko",
      "Niegocin",
      "Tałty"
    ],
    "answer": 0,
    "image": "r03_pojezierze_mazurskie.jpg",
    "explanation": "Największym jeziorem Pojezierza Mazurskiego, a także całej Polski, są Śniardwy."
  },
  {
    "id": "R03_POJ_06",
    "section": "Krajobraz pojezierny",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które według rozdziału przyciągają turystów na Pojezierze Mazurskie.",
    "options": [
      "obiekty wypoczynkowe",
      "restauracje",
      "przystanie",
      "szlaki piesze i rowerowe",
      "ruchome wydmy",
      "stalaktyty"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_szlak_jezior_mazurskich.jpg",
    "explanation": "Na Pojezierzu Mazurskim powstały obiekty wypoczynkowe, restauracje i przystanie, a w lasach wyznaczono szlaki piesze i rowerowe."
  },
  {
    "id": "R03_POJ_07",
    "section": "Krajobraz pojezierny",
    "type": "match",
    "prompt": "Połącz pojęcie z informacją o Pojezierzu Mazurskim.",
    "options": null,
    "left": [
      "Pojezierze Mazurskie",
      "Śniardwy",
      "Olsztyn",
      "Puszcza Piska"
    ],
    "right": [
      "Kraina Tysiąca Jezior",
      "największe jezioro w Polsce",
      "największe miasto regionu",
      "gęsty i rozległy las"
    ],
    "answer": {
      "Pojezierze Mazurskie": "Kraina Tysiąca Jezior",
      "Śniardwy": "największe jezioro w Polsce",
      "Olsztyn": "największe miasto regionu",
      "Puszcza Piska": "gęsty i rozległy las"
    },
    "explanation": "Tekst nazywa Pojezierze Mazurskie Krainą Tysiąca Jezior, wskazuje Śniardwy jako największe jezioro, Olsztyn jako największe miasto i Puszczę Piską jako rozległy las."
  },
  {
    "id": "R03_POJ_08",
    "section": "Krajobraz pojezierny",
    "type": "sort",
    "prompt": "Przyporządkuj zajęcia mieszkańców Pojezierza Mazurskiego do odpowiednich grup.",
    "options": null,
    "items": [
      "praca w hotelu",
      "wypożyczanie łodzi",
      "praca w rolnictwie",
      "przetwórstwo drzewne"
    ],
    "categories": [
      "turystyka",
      "inne źródła utrzymania"
    ],
    "answer": {
      "turystyka": [
        "praca w hotelu",
        "wypożyczanie łodzi"
      ],
      "inne źródła utrzymania": [
        "praca w rolnictwie",
        "przetwórstwo drzewne"
      ]
    },
    "explanation": "Wielu mieszkańców pracuje w turystyce, ale część jest zatrudniona także w rolnictwie oraz przetwórstwie drzewnym lub spożywczym."
  },
  {
    "id": "R03_POJ_09",
    "section": "Krajobraz pojezierny",
    "type": "scenario",
    "prompt": "Turyści chcą spać na wsi, odpoczywać blisko przyrody i uczestniczyć w codziennym wiejskim życiu, na przykład doglądać zwierząt i wypiekać chleb. Jaki typ obiektu wybiorą?",
    "options": [
      "gospodarstwo agroturystyczne",
      "przystań jachtowa",
      "zakład przetwórstwa",
      "park narodowy",
      "klif",
      "kopalnia"
    ],
    "answer": 0,
    "image": "r03_szlak_jezior_mazurskich.jpg",
    "explanation": "Gospodarstwa agroturystyczne to obiekty noclegowe na obszarach wiejskich, w których goście mogą odpoczywać blisko przyrody i poznawać wiejskie życie."
  },
  {
    "id": "R03_POJ_10",
    "section": "Krajobraz pojezierny",
    "type": "riddle",
    "prompt": "Park utworzony na Mazurach, aby chronić krajobraz polodowcowy oraz roślinność i zwierzęta, to...",
    "options": null,
    "answer": "Mazurski Park Krajobrazowy",
    "altAnswers": [
      "Mazurski Park Krajobrazowy",
      "mazurski park krajobrazowy"
    ],
    "image": "r03_puszcza_piska.jpg",
    "explanation": "W rozdziale podano, że dla ochrony krajobrazu polodowcowego oraz roślinności i zwierząt utworzono Mazurski Park Krajobrazowy."
  },
  {
    "id": "R03_POJ_11",
    "section": "Krajobraz pojezierny",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zwierząt Pojezierza Mazurskiego: kormoran, łoś, bóbr, foka.",
    "options": null,
    "answer": "foka",
    "image": "r03_puszcza_piska.jpg",
    "explanation": "Foki wymieniono przy krajobrazie nadmorskim, natomiast kormorany, łosie i bobry należą do charakterystycznych zwierząt Pojezierza Mazurskiego."
  },
  {
    "id": "R03_NIZ_01",
    "section": "Krajobraz nizinny",
    "type": "single_choice",
    "prompt": "Jaką wysokość bezwzględną mają zwykle niziny?",
    "options": [
      "poniżej 300 m n.p.m.",
      "od 300 do 500 m n.p.m.",
      "powyżej 500 m n.p.m.",
      "dokładnie 2499 m n.p.m.",
      "od 150 do 200 mln lat",
      "ponad 2000 m n.p.m."
    ],
    "answer": 0,
    "image": "r03_pola_niziny_mazowieckiej.jpg",
    "explanation": "Niziny to tereny równinne o wysokościach bezwzględnych mniejszych niż 300 m n.p.m."
  },
  {
    "id": "R03_NIZ_02",
    "section": "Krajobraz nizinny",
    "type": "true_false",
    "prompt": "Pas nizin jest najrozleglejszym pasem krajobrazowym Polski.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik opisuje niziny jako najrozleglejszy pas krajobrazowy Polski."
  },
  {
    "id": "R03_NIZ_03",
    "section": "Krajobraz nizinny",
    "type": "fill_in",
    "prompt": "Na nizinach dawne wzniesienia zostały zrównane między innymi przez wiatry, deszcze, płynącą wodę i __________, a dawne jeziora __________.",
    "options": null,
    "answer": [
      "niską temperaturę",
      "zarosły"
    ],
    "altAnswers": [
      [
        "niską temperaturę",
        "niska temperatura"
      ],
      [
        "zarosły",
        "zarosly"
      ]
    ],
    "explanation": "Na nizinach późniejsze procesy naturalne wyrównały wzniesienia, a jeziora zarosły."
  },
  {
    "id": "R03_NIZ_04",
    "section": "Krajobraz nizinny",
    "type": "riddle",
    "prompt": "Szerokie i bardzo długie obniżenia terenu o płaskim dnie, wyrzeźbione przez wody z topniejącego lądolodu, to...",
    "options": null,
    "answer": "pradoliny",
    "altAnswers": [
      "pradoliny",
      "pradolina"
    ],
    "explanation": "Pradoliny powstały, gdy ogromne ilości wód roztopowych żłobiły szerokie obniżenia terenu."
  },
  {
    "id": "R03_NIZ_05",
    "section": "Krajobraz nizinny",
    "type": "multi_select",
    "prompt": "Zaznacz elementy związane z krajobrazem Niziny Mazowieckiej.",
    "options": [
      "pola uprawne",
      "pradoliny",
      "Warszawa",
      "Puszcza Kampinoska",
      "Tatry Wysokie",
      "Grota Łokietka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na Nizinie Mazowieckiej występują pola uprawne i pradoliny, leży tam Warszawa, a cennym obszarem przyrodniczym jest Puszcza Kampinoska."
  },
  {
    "id": "R03_NIZ_06",
    "section": "Krajobraz nizinny",
    "type": "single_choice",
    "prompt": "Jakie zwierzę jest symbolem Kampinoskiego Parku Narodowego?",
    "options": [
      "łoś",
      "foka",
      "kormoran",
      "kozica",
      "sieciarz jaskiniowy",
      "rybitwa"
    ],
    "answer": 0,
    "image": "r03_puszcza_kampinoska.jpg",
    "explanation": "Charakterystycznym zwierzęciem Puszczy Kampinoskiej i symbolem Kampinoskiego Parku Narodowego jest łoś."
  },
  {
    "id": "R03_NIZ_07",
    "section": "Krajobraz nizinny",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do krajobrazu nizinnego: pola uprawne, sady, pastwiska, stalaktyty.",
    "options": null,
    "answer": "stalaktyty",
    "explanation": "Stalaktyty są formami krasowymi spotykanymi w jaskiniach, a pola uprawne, sady i pastwiska są związane z krajobrazem nizin."
  },
  {
    "id": "R03_NIZ_08",
    "section": "Krajobraz nizinny",
    "type": "match",
    "prompt": "Połącz element Niziny Mazowieckiej z właściwą informacją.",
    "options": null,
    "left": [
      "Warszawa",
      "Puszcza Kampinoska",
      "okolice Grójca",
      "przetwórstwo spożywcze"
    ],
    "right": [
      "stolica Polski",
      "obszar objęty parkiem narodowym",
      "jedne z największych sadów w Polsce",
      "sery jogurty dżemy i soki"
    ],
    "answer": {
      "Warszawa": "stolica Polski",
      "Puszcza Kampinoska": "obszar objęty parkiem narodowym",
      "okolice Grójca": "jedne z największych sadów w Polsce",
      "przetwórstwo spożywcze": "sery jogurty dżemy i soki"
    },
    "explanation": "Nizina Mazowiecka obejmuje Warszawę, Puszczę Kampinoską, sady w okolicach Grójca i liczne zakłady przetwórstwa spożywczego."
  },
  {
    "id": "R03_NIZ_09",
    "section": "Krajobraz nizinny",
    "type": "scenario",
    "prompt": "W regionie jest dużo gospodarstw rolnych, warzyw, owoców i mleka. Powstają zakłady, które wytwarzają sery, jogurty, dżemy i soki. Jaki rodzaj działalności opisano?",
    "options": [
      "przetwórstwo spożywcze",
      "wspinaczkę skalną",
      "rybołówstwo",
      "wypas owiec na halach",
      "wydobycie wapieni",
      "narciarstwo"
    ],
    "answer": 0,
    "image": "r03_pola_niziny_mazowieckiej.jpg",
    "explanation": "Duża ilość surowców rolnych sprzyja rozwojowi przetwórstwa spożywczego, czyli wytwarzaniu produktów z warzyw, owoców i mleka."
  },
  {
    "id": "R03_NIZ_10",
    "section": "Krajobraz nizinny",
    "type": "sort",
    "prompt": "Rozdziel elementy na związane z rolnictwem, przetwórstwem spożywczym i ochroną przyrody na Nizinie Mazowieckiej.",
    "options": null,
    "items": [
      "zboża",
      "bydło",
      "sery i jogurty",
      "dżemy i soki",
      "Puszcza Kampinoska",
      "wydmy śródlądowe"
    ],
    "categories": [
      "rolnictwo",
      "przetwórstwo spożywcze",
      "ochrona przyrody"
    ],
    "answer": {
      "rolnictwo": [
        "zboża",
        "bydło"
      ],
      "przetwórstwo spożywcze": [
        "sery i jogurty",
        "dżemy i soki"
      ],
      "ochrona przyrody": [
        "Puszcza Kampinoska",
        "wydmy śródlądowe"
      ]
    },
    "explanation": "Na nizinach uprawia się rośliny i hoduje bydło, produkty rolne trafiają do przetwórstwa, a cenne przyrodniczo obszary chroni się m.in. w Kampinoskim Parku Narodowym."
  },
  {
    "id": "R03_NIZ_11",
    "section": "Krajobraz nizinny",
    "type": "multi_select",
    "prompt": "Zaznacz cechy Puszczy Kampinoskiej opisane w rozdziale.",
    "options": [
      "bagna",
      "wydmy śródlądowe",
      "głównie sosny",
      "łoś jako symbol parku",
      "ruchome wydmy nadmorskie",
      "najwyższy szczyt Polski"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_puszcza_kampinoska.jpg",
    "explanation": "W Puszczy Kampinoskiej występują bagna i wydmy śródlądowe, porastają ją głównie sosny, a symbolem parku jest łoś."
  },
  {
    "id": "R03_WYZ_01",
    "section": "Krajobraz wyżynny",
    "type": "single_choice",
    "prompt": "Na jakich wysokościach położone są wyżyny według rozdziału?",
    "options": [
      "od 300 do 500 m n.p.m.",
      "poniżej 300 m n.p.m.",
      "powyżej 500 m n.p.m.",
      "od 0 do 6 km",
      "około 2499 m n.p.m.",
      "tylko na poziomie morza"
    ],
    "answer": 0,
    "explanation": "Wspólną cechą wyżyn jest położenie na wysokości od 300 do 500 m n.p.m."
  },
  {
    "id": "R03_WYZ_02",
    "section": "Krajobraz wyżynny",
    "type": "multi_select",
    "prompt": "Zaznacz wyżyny wymienione w rozdziale jako najbardziej znane polskie wyżyny.",
    "options": [
      "Wyżyna Krakowsko-Częstochowska",
      "Wyżyna Śląska",
      "Wyżyna Lubelska",
      "Wyżyna Kielecka",
      "Pojezierze Mazurskie",
      "Nizina Mazowiecka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podręcznik wymienia Wyżynę Krakowsko-Częstochowską, Śląską, Lubelską i Kielecką."
  },
  {
    "id": "R03_WYZ_03",
    "section": "Krajobraz wyżynny",
    "type": "true_false",
    "prompt": "Wapienie Jury powstały ze szczątków organizmów żyjących w ciepłym morzu.",
    "options": null,
    "answer": true,
    "explanation": "Wapienie powstały z nagromadzonych szkieletów i muszli organizmów, gdy duża część dzisiejszej Polski była zalana ciepłym morzem."
  },
  {
    "id": "R03_WYZ_04",
    "section": "Krajobraz wyżynny",
    "type": "fill_in",
    "prompt": "Rozpuszczanie skał przez wodę zawierającą dwutlenek węgla nazywamy __________, a powstałe formy rzeźby - formami __________.",
    "options": null,
    "answer": [
      "krasowieniem",
      "krasowymi"
    ],
    "altAnswers": [
      [
        "krasowieniem",
        "krasowienie"
      ],
      [
        "krasowymi",
        "krasowe"
      ]
    ],
    "explanation": "Krasowienie to powolne rozpuszczanie skał, głównie wapiennych, przez wodę z dwutlenkiem węgla."
  },
  {
    "id": "R03_WYZ_05",
    "section": "Krajobraz wyżynny",
    "type": "riddle",
    "prompt": "Najsłynniejszy w Polsce ostaniec krasowy w Ojcowskim Parku Narodowym, wysoki na 25 m, to...",
    "options": null,
    "answer": "Maczuga Herkulesa",
    "altAnswers": [
      "Maczuga Herkulesa",
      "maczuga herkulesa"
    ],
    "image": "r03_wapienne_ostance.jpg",
    "explanation": "Maczuga Herkulesa znajduje się w Ojcowskim Parku Narodowym na Wyżynie Krakowsko-Częstochowskiej."
  },
  {
    "id": "R03_WYZ_06",
    "section": "Krajobraz wyżynny",
    "type": "match",
    "prompt": "Połącz formę jaskiniową z opisem.",
    "options": null,
    "left": [
      "stalaktyt",
      "stalagmit",
      "stalagnat",
      "jaskinia"
    ],
    "right": [
      "sopel zwisający ze stropu",
      "forma rosnąca od dna ku górze",
      "kolumna po połączeniu dwóch form",
      "korytarze i komory w skale"
    ],
    "answer": {
      "stalaktyt": "sopel zwisający ze stropu",
      "stalagmit": "forma rosnąca od dna ku górze",
      "stalagnat": "kolumna po połączeniu dwóch form",
      "jaskinia": "korytarze i komory w skale"
    },
    "image": "r03_jaskinia_krasowa.jpg",
    "explanation": "W jaskiniach występują stalaktyty, stalagmity i stalagnaty, a sama jaskinia powstaje z poszerzanych szczelin, korytarzy i komór."
  },
  {
    "id": "R03_WYZ_07",
    "section": "Krajobraz wyżynny",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do form krasowych Jury: ostaniec, jaskinia, stalaktyt, pradolina.",
    "options": null,
    "answer": "pradolina",
    "explanation": "Pradolina jest formą związaną z wodami roztopowymi na nizinach, a ostańce, jaskinie i stalaktyty powstają w wyniku krasowienia."
  },
  {
    "id": "R03_WYZ_08",
    "section": "Krajobraz wyżynny",
    "type": "scenario",
    "prompt": "Turysta przyjechał na Jurę. Widzi strome, niemal pionowe skały wapienne, na których wytyczono drogi sportowe. Jaki sport jest tu popularny?",
    "options": [
      "wspinaczka skalna",
      "windsurfing",
      "narciarstwo",
      "kajakarstwo na Szlaku Wielkich Jezior",
      "rybołówstwo",
      "wypas bydła"
    ],
    "answer": 0,
    "image": "r03_wapienne_ostance.jpg",
    "explanation": "W Jurze popularna jest wspinaczka skalna, bo wapienne skały mają strome, często pionowe ściany."
  },
  {
    "id": "R03_WYZ_09",
    "section": "Krajobraz wyżynny",
    "type": "multi_select",
    "prompt": "Zaznacz atrakcje i elementy związane z Wyżyną Krakowsko-Częstochowską.",
    "options": [
      "Szlak Orlich Gniazd",
      "Ojcowski Park Narodowy",
      "jaskinie",
      "ostańce krasowe",
      "Morskie Oko",
      "Puszcza Piska"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_wapienne_ostance.jpg",
    "explanation": "Jura słynie z Ojcowskiego Parku Narodowego, jaskiń, ostańców krasowych i zamków na Szlaku Orlich Gniazd."
  },
  {
    "id": "R03_WYZ_10",
    "section": "Krajobraz wyżynny",
    "type": "riddle",
    "prompt": "Jadowite pająki żyjące w niektórych jaskiniach Jury to...",
    "options": null,
    "answer": "sieciarze jaskiniowe",
    "altAnswers": [
      "sieciarze jaskiniowe",
      "sieciarz jaskiniowy"
    ],
    "image": "r03_jaskinia_krasowa.jpg",
    "explanation": "W jaskiniach Jury występują m.in. nietoperze oraz sieciarze jaskiniowe, czyli jadowite pająki."
  },
  {
    "id": "R03_WYZ_11",
    "section": "Krajobraz wyżynny",
    "type": "single_choice",
    "prompt": "Dlaczego Wyżynę Krakowsko-Częstochowską nazywa się Jurą?",
    "options": [
      "Bo jej jasne skały wapienne powstały w okresie dziejów Ziemi zwanym jurą",
      "Bo leży w pasie gór",
      "Bo znajduje się tam największe jezioro Polski",
      "Bo jest porośnięta wyłącznie puszczą",
      "Bo powstała z ruchomych wydm",
      "Bo ma wysokość większą niż 500 m n.p.m."
    ],
    "answer": 0,
    "explanation": "Nazwa Jura nawiązuje do okresu dziejów Ziemi, w którym powstały tamtejsze jasne skały wapienne."
  },
  {
    "id": "R03_GOR_01",
    "section": "Krajobraz wysokogórski",
    "type": "single_choice",
    "prompt": "Jaką wysokość bezwzględną mają góry według rozdziału?",
    "options": [
      "większą niż 500 m n.p.m.",
      "mniejszą niż 300 m n.p.m.",
      "od 300 do 500 m n.p.m.",
      "zawsze 2499 m n.p.m.",
      "dokładnie 405,6 m n.p.m.",
      "tylko 0 m n.p.m."
    ],
    "answer": 0,
    "image": "r03_tatry_wysokie.jpg",
    "explanation": "Góry to tereny o wysokościach bezwzględnych większych niż 500 m n.p.m."
  },
  {
    "id": "R03_GOR_02",
    "section": "Krajobraz wysokogórski",
    "type": "match",
    "prompt": "Połącz pojęcie górskie z definicją.",
    "options": null,
    "left": [
      "góra",
      "pasmo górskie",
      "łańcuch górski",
      "staw"
    ],
    "right": [
      "wzniesienie o dużej wysokości względnej",
      "wiele gór",
      "wiele pasm górskich",
      "jezioro w Tatrach"
    ],
    "answer": {
      "góra": "wzniesienie o dużej wysokości względnej",
      "pasmo górskie": "wiele gór",
      "łańcuch górski": "wiele pasm górskich",
      "staw": "jezioro w Tatrach"
    },
    "explanation": "Podręcznik rozróżnia górę, pasmo i łańcuch górski, a jeziora tatrzańskie nazywa stawami."
  },
  {
    "id": "R03_GOR_03",
    "section": "Krajobraz wysokogórski",
    "type": "true_false",
    "prompt": "Tatry są jedynym obszarem o krajobrazie wysokogórskim w Polsce.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że Tatry to jedyny obszar o krajobrazie wysokogórskim w Polsce."
  },
  {
    "id": "R03_GOR_04",
    "section": "Krajobraz wysokogórski",
    "type": "fill_in",
    "prompt": "Tatry Polskie dzielimy na Tatry __________ i Tatry __________.",
    "options": null,
    "answer": [
      "Zachodnie",
      "Wysokie"
    ],
    "altAnswers": [
      [
        "Zachodnie",
        "Tatry Zachodnie"
      ],
      [
        "Wysokie",
        "Tatry Wysokie"
      ]
    ],
    "explanation": "Tatry Polskie dzielą się na Tatry Zachodnie i Tatry Wysokie."
  },
  {
    "id": "R03_GOR_05",
    "section": "Krajobraz wysokogórski",
    "type": "riddle",
    "prompt": "Najwyższy szczyt w Polsce, wznoszący się na 2499 m n.p.m., to...",
    "options": null,
    "answer": "Rysy",
    "altAnswers": [
      "Rysy"
    ],
    "image": "r03_tatry_wysokie.jpg",
    "explanation": "Rysy leżą w Tatrach Wysokich i są najwyższym szczytem Polski."
  },
  {
    "id": "R03_GOR_06",
    "section": "Krajobraz wysokogórski",
    "type": "multi_select",
    "prompt": "Zaznacz elementy wysokogórskiej rzeźby terenu wymienione w rozdziale.",
    "options": [
      "turnie",
      "granie",
      "przełęcze",
      "piargi",
      "żleby",
      "sady"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do elementów wysokogórskiej rzeźby terenu należą m.in. turnie, granie, przełęcze, piargi i żleby."
  },
  {
    "id": "R03_GOR_07",
    "section": "Krajobraz wysokogórski",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do tatrzańskich roślin i zwierząt.",
    "options": null,
    "items": [
      "kozica",
      "świstak",
      "niedźwiedź brunatny",
      "szarotka alpejska",
      "sosna limba",
      "dębik ośmiopłatkowy"
    ],
    "categories": [
      "zwierzęta",
      "rośliny"
    ],
    "answer": {
      "zwierzęta": [
        "kozica",
        "świstak",
        "niedźwiedź brunatny"
      ],
      "rośliny": [
        "szarotka alpejska",
        "sosna limba",
        "dębik ośmiopłatkowy"
      ]
    },
    "image": "r03_pietra_roslinnosci_tatr.jpg",
    "explanation": "W Tatrach występują m.in. kozice, świstaki i niedźwiedzie brunatne, a wśród roślin szarotka alpejska, sosna limba i dębik ośmiopłatkowy."
  },
  {
    "id": "R03_GOR_08",
    "section": "Krajobraz wysokogórski",
    "type": "sequence",
    "prompt": "Ułóż piętra roślinności Tatr od najniższego do najwyższego.",
    "options": null,
    "items": [
      "hale",
      "regiel dolny",
      "turnie",
      "kosodrzewina",
      "pogórze",
      "regiel górny"
    ],
    "answer": [
      "pogórze",
      "regiel dolny",
      "regiel górny",
      "kosodrzewina",
      "hale",
      "turnie"
    ],
    "image": "r03_pietra_roslinnosci_tatr.jpg",
    "explanation": "Wraz ze wzrostem wysokości roślinność staje się uboższa: od pogórza przez regle i kosodrzewinę po hale i turnie."
  },
  {
    "id": "R03_GOR_09",
    "section": "Krajobraz wysokogórski",
    "type": "scenario",
    "prompt": "Na popularnym szlaku ktoś zostawia śmieci i dokarmia dzikie zwierzęta. Jakiego problemu dotyczą te zachowania?",
    "options": [
      "negatywnego wpływu turystów na tatrzańską przyrodę",
      "powstawania jeziora przybrzeżnego",
      "rozwoju przetwórstwa spożywczego",
      "budowania mierzei",
      "krasowienia wapieni",
      "zanikania pradolin"
    ],
    "answer": 0,
    "image": "r03_tatry_wysokie.jpg",
    "explanation": "Podręcznik wskazuje, że liczna obecność turystów szkodzi tatrzańskiej przyrodzie m.in. przez śmieci i dokarmianie dzikich zwierząt."
  },
  {
    "id": "R03_GOR_10",
    "section": "Krajobraz wysokogórski",
    "type": "single_choice",
    "prompt": "Które miasto leżące u stóp Tatr jest nazywane zimową stolicą Polski?",
    "options": [
      "Zakopane",
      "Olsztyn",
      "Warszawa",
      "Łeba",
      "Giżycko",
      "Mikołajki"
    ],
    "answer": 0,
    "explanation": "Zakopane leży u stóp Tatr i jest nazywane zimową stolicą Polski."
  },
  {
    "id": "R03_GOR_11",
    "section": "Krajobraz wysokogórski",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do często odwiedzanych miejsc w Tatrach: Morskie Oko, Giewont, Kasprowy Wierch, Słowiński Park Narodowy.",
    "options": null,
    "answer": "Słowiński Park Narodowy",
    "explanation": "Morskie Oko, Giewont i Kasprowy Wierch są wymienione wśród najczęściej odwiedzanych miejsc w Tatrach, a Słowiński Park Narodowy leży na wybrzeżu."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy krajobrazu do pasów krajobrazowych Polski.",
    "options": null,
    "items": [
      "klify",
      "głazy narzutowe",
      "pradoliny",
      "ostańce krasowe",
      "jeziora przybrzeżne",
      "Puszcza Piska",
      "pola uprawne",
      "jaskinie"
    ],
    "categories": [
      "pobrzeża",
      "pojezierza",
      "niziny",
      "wyżyny"
    ],
    "answer": {
      "pobrzeża": [
        "klify",
        "jeziora przybrzeżne"
      ],
      "pojezierza": [
        "głazy narzutowe",
        "Puszcza Piska"
      ],
      "niziny": [
        "pradoliny",
        "pola uprawne"
      ],
      "wyżyny": [
        "ostańce krasowe",
        "jaskinie"
      ]
    },
    "explanation": "Każdy pas ma charakterystyczne elementy: pobrzeża mają klify i jeziora przybrzeżne, pojezierza głazy narzutowe i puszcze, niziny pradoliny i pola, a wyżyny formy krasowe."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obszar chroniony z informacją z rozdziału.",
    "options": null,
    "left": [
      "Słowiński Park Narodowy",
      "Mazurski Park Krajobrazowy",
      "Kampinoski Park Narodowy",
      "Tatrzański Park Narodowy"
    ],
    "right": [
      "obejmuje cenne obszary Wybrzeża Słowińskiego",
      "chroni krajobraz polodowcowy oraz roślinność i zwierzęta",
      "jego symbolem jest łoś",
      "powstał ze względu na unikatową przyrodę Tatr"
    ],
    "answer": {
      "Słowiński Park Narodowy": "obejmuje cenne obszary Wybrzeża Słowińskiego",
      "Mazurski Park Krajobrazowy": "chroni krajobraz polodowcowy oraz roślinność i zwierzęta",
      "Kampinoski Park Narodowy": "jego symbolem jest łoś",
      "Tatrzański Park Narodowy": "powstał ze względu na unikatową przyrodę Tatr"
    },
    "explanation": "W rozdziale opisano kilka form ochrony przyrody powiązanych z różnymi pasami krajobrazowymi."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para czynników jest wspólna dla budowania plaż i niszczenia klifów na pobrzeżu?",
    "options": [
      "morze i wiatr",
      "lądolód i ciepłe morze",
      "niskie temperatury i rzeki",
      "woda z dwutlenkiem węgla i wapienie",
      "turystyka i przetwórstwo",
      "hale i turnie"
    ],
    "answer": 0,
    "image": "r03_klif_nadmorski.jpg",
    "explanation": "Krajobraz pobrzeży kształtują morze i wiatr. Morze wyrzuca piasek na plaże, a fale podmywają klify."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wydmy śródlądowe w Puszczy Kampinoskiej przemieszczają się tak samo jak ruchome wydmy nadmorskie.",
    "options": null,
    "answer": false,
    "image": "r03_puszcza_kampinoska.jpg",
    "explanation": "Wydmy śródlądowe w Puszczy Kampinoskiej nie przemieszczają się, ponieważ drzewa i inne rośliny stabilizują je korzeniami."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pojezierze Mazurskie nazywa się Krainą Tysiąca Jezior, ale jezior jest tam ponad __________, a największe z nich to __________.",
    "options": null,
    "answer": [
      "2000",
      "Śniardwy"
    ],
    "altAnswers": [
      [
        "2000",
        "dwa tysiące",
        "ponad 2000"
      ],
      [
        "Śniardwy",
        "Sniardwy"
      ]
    ],
    "image": "r03_pojezierze_mazurskie.jpg",
    "explanation": "W rozdziale podano, że na Pojezierzu Mazurskim jest ponad 2000 jezior, a największe to Śniardwy."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Proces rozpuszczania wapieni przez wodę zawierającą dwutlenek węgla, prowadzący do powstawania jaskiń i ostańców, to...",
    "options": null,
    "answer": "krasowienie",
    "altAnswers": [
      "krasowienie"
    ],
    "explanation": "Krasowienie tworzy formy krasowe na powierzchni ziemi i pod nią."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń obserwuje, że podczas wejścia coraz wyżej w Tatrach robi się chłodniej, a roślinność jest coraz uboższa. Która zależność to wyjaśnia?",
    "options": [
      "Wraz ze wzrostem wysokości spada temperatura powietrza",
      "Im bliżej morza tym więcej wapieni",
      "Wydmy stabilizują się korzeniami",
      "Prąd przybrzeżny buduje mierzeję",
      "Lądolód tworzy klify",
      "Przetwórstwo spożywcze rozwija turystykę"
    ],
    "answer": 0,
    "image": "r03_tatry_wysokie.jpg",
    "explanation": "W Tatrach wraz ze wzrostem wysokości nad poziomem morza spada temperatura, dlatego roślinność staje się uboższa."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do miejscowości związanych z Pojezierzem Mazurskim: Olsztyn, Giżycko, Mikołajki, Warszawa.",
    "options": null,
    "answer": "Warszawa",
    "explanation": "Olsztyn, Giżycko i Mikołajki są wymienione przy Pojezierzu Mazurskim, natomiast Warszawa leży na Nizinie Mazowieckiej."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które razem najlepiej opisują krajobraz Wyżyny Krakowsko-Częstochowskiej.",
    "options": [
      "wapienie",
      "ostańce krasowe",
      "jaskinie",
      "Szlak Orlich Gniazd",
      "jeziora przybrzeżne",
      "piargi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_wapienne_ostance.jpg",
    "explanation": "Jura jest związana z wapieniami, krasowieniem, ostańcami, jaskiniami oraz zamkami na Szlaku Orlich Gniazd."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz popularną aktywność turystyczną z obszarem, z którym łączy ją rozdział.",
    "options": null,
    "left": [
      "windsurfing",
      "żeglarstwo i kajakarstwo",
      "wspinaczka skalna",
      "narciarstwo"
    ],
    "right": [
      "pobrzeża",
      "Szlak Wielkich Jezior Mazurskich",
      "Jura",
      "Tatry"
    ],
    "answer": {
      "windsurfing": "pobrzeża",
      "żeglarstwo i kajakarstwo": "Szlak Wielkich Jezior Mazurskich",
      "wspinaczka skalna": "Jura",
      "narciarstwo": "Tatry"
    },
    "explanation": "Rozdział łączy windsurfing z pobrzeżami, żeglarstwo i kajakarstwo z Mazurami, wspinaczkę skalną z Jurą, a narciarstwo z Tatrami."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pasy krajobrazowe zgodnie z trasą podręcznikowej wędrówki przez Polskę z północy na południe.",
    "options": null,
    "items": [
      "pas nizin",
      "pas gór",
      "pas pobrzeży",
      "pas wyżyn",
      "pas pojezierzy"
    ],
    "answer": [
      "pas pobrzeży",
      "pas pojezierzy",
      "pas nizin",
      "pas wyżyn",
      "pas gór"
    ],
    "explanation": "Wędrówka przez krajobrazy Polski prowadzi od pobrzeży przez pojezierza, niziny i wyżyny aż do gór."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która forma terenu na nizinach powstała dzięki wodom roztopowym topniejącego lądolodu?",
    "options": [
      "pradolina",
      "stalaktyt",
      "klif",
      "grań",
      "mierzeja",
      "turnia"
    ],
    "answer": 0,
    "explanation": "Pradolina to szerokie i długie obniżenie terenu wyrzeźbione przez wody z topniejącego lądolodu."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Giewont jest nazywany Śpiącym rycerzem, a na jego wierzchołku znajduje się duży metalowy krzyż.",
    "options": null,
    "answer": true,
    "explanation": "Giewont wyróżnia się charakterystycznym kształtem, dlatego jest nazywany Śpiącym rycerzem; na szczycie stoi duży metalowy krzyż."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Jedną z najbardziej znanych jaskiń Jury jest __________, a kolumna powstała z połączenia stalaktytu i stalagmitu to __________.",
    "options": null,
    "answer": [
      "Grota Łokietka",
      "stalagnat"
    ],
    "altAnswers": [
      [
        "Grota Łokietka",
        "Grota Lokietka"
      ],
      [
        "stalagnat",
        "stalagnaty"
      ]
    ],
    "image": "r03_jaskinia_krasowa.jpg",
    "explanation": "Grota Łokietka znajduje się w Ojcowskim Parku Narodowym, a stalagnat powstaje z połączenia stalaktytu ze stalagmitem."
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W okolicach Grójca znajdują się bardzo duże sady. Które owoce z tego regionu są w rozdziale szczególnie cenione?",
    "options": [
      "polskie jabłka",
      "banany",
      "cytrusy",
      "winogrona z Tatr",
      "oliwki",
      "kokosy"
    ],
    "answer": 0,
    "explanation": "W rozdziale podkreślono, że w okolicach Grójca są jedne z największych sadów w Polsce, a szczególnie cenione są polskie jabłka."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Krajobrazy Polski",
  icon: "🗺️",
  sectionOrder: [
    "Krajobraz nadmorski",
    "Krajobraz pojezierny",
    "Krajobraz nizinny",
    "Krajobraz wyżynny",
    "Krajobraz wysokogórski"
  ],
  sectionIcons: {
    "Krajobraz nadmorski": "🌊",
    "Krajobraz pojezierny": "🛶",
    "Krajobraz nizinny": "🌾",
    "Krajobraz wyżynny": "🪨",
    "Krajobraz wysokogórski": "⛰️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
