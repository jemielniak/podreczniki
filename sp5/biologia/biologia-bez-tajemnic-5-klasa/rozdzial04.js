const ALL_EXERCISES = [
  {
    "id": "R04_TKANKI_01",
    "section": "Czym są tkanki roślinne?",
    "type": "single_choice",
    "prompt": "Co to jest tkanka?",
    "options": [
      "zespół podobnych komórek pełniących tę samą funkcję",
      "pojedyncza komórka liścia",
      "cała roślina",
      "tylko część korzenia"
    ],
    "answer": 0,
    "explanation": "Tkanka to zespół komórek o podobnej budowie, które wykonują tę samą funkcję."
  },
  {
    "id": "R04_TKANKI_02",
    "section": "Czym są tkanki roślinne?",
    "type": "true_false",
    "prompt": "Mchy nie mają wszystkich typowych tkanek roślinnych.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale podano, że mchy są wyjątkiem i nie mają wszystkich typowych tkanek roślinnych."
  },
  {
    "id": "R04_TKANKI_03",
    "section": "Czym są tkanki roślinne?",
    "type": "sequence",
    "prompt": "Ułóż poziomy budowy rośliny od najmniejszego do największego.",
    "options": null,
    "items": [
      "organ",
      "organizm",
      "komórka",
      "tkanka"
    ],
    "answer": [
      "komórka",
      "tkanka",
      "organ",
      "organizm"
    ],
    "image": "/img/bbt_r04_hierarchiczna_budowa_rosliny.jpg",
    "explanation": "Najpierw jest komórka. Z komórek powstaje tkanka, z tkanek organ, a z organów cały organizm."
  },
  {
    "id": "R04_TKANKI_04",
    "section": "Czym są tkanki roślinne?",
    "type": "multi_select",
    "prompt": "Zaznacz organy rośliny wymienione w rozdziale.",
    "options": [
      "korzeń",
      "łodyga",
      "liść",
      "jądro",
      "kwiat",
      "owoc"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Do organów roślin należą korzeń, łodyga, liść, kwiat i owoc. Jądro nie jest organem rośliny."
  },
  {
    "id": "R04_TKANKI_05",
    "section": "Czym są tkanki roślinne?",
    "type": "fill_in",
    "prompt": "Uzupełnij: Tkanka to zespół __________ o podobnej budowie, które pełnią tę samą __________.",
    "options": null,
    "answer": [
      "komórek",
      "funkcję"
    ],
    "altAnswers": [
      [
        "komórek",
        "komórki",
        "komórka"
      ],
      [
        "funkcję",
        "funkcja",
        "funkcje"
      ]
    ],
    "explanation": "Tkanka składa się z komórek i wykonuje określoną funkcję w organizmie."
  },
  {
    "id": "R04_TKANKI_06",
    "section": "Czym są tkanki roślinne?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: korzeń, łodyga, liść, tkanka.",
    "options": null,
    "answer": "tkanka",
    "explanation": "Korzeń, łodyga i liść to organy. Tkanka jest poziomem budowy niższym niż organ."
  },
  {
    "id": "R04_TKANKI_07",
    "section": "Czym są tkanki roślinne?",
    "type": "single_choice",
    "prompt": "Po co roślinom lądowym potrzebne są tkanki?",
    "options": [
      "pomagają transportować substancje i chronią przed warunkami otoczenia",
      "sprawiają, że roślina może świecić w ciemności",
      "zamieniają roślinę w zwierzę",
      "służą tylko do ozdoby"
    ],
    "answer": 0,
    "explanation": "Tkanki pomagają roślinom żyć na lądzie - przewodzą substancje i chronią przed trudnymi warunkami."
  },
  {
    "id": "R04_TKANKI_08",
    "section": "Czym są tkanki roślinne?",
    "type": "scenario",
    "prompt": "Ola patrzy na ilustrację poziomów budowy rośliny. Widzi element znajdujący się między komórką a organem. Co to jest?",
    "options": [
      "tkanka",
      "owoc",
      "kwiat",
      "kora"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_hierarchiczna_budowa_rosliny.jpg",
    "explanation": "Między komórką a organem znajduje się tkanka."
  },
  {
    "id": "R04_TKANKI_09",
    "section": "Czym są tkanki roślinne?",
    "type": "match",
    "prompt": "Połącz poziom budowy z przykładem.",
    "options": null,
    "left": [
      "komórka",
      "tkanka",
      "organ",
      "organizm"
    ],
    "right": [
      "pojedyncza komórka liścia",
      "grupa podobnych komórek",
      "np. liść",
      "cała roślina"
    ],
    "answer": {
      "komórka": "pojedyncza komórka liścia",
      "tkanka": "grupa podobnych komórek",
      "organ": "np. liść",
      "organizm": "cała roślina"
    },
    "explanation": "Poziomy budowy rośliny układają się od komórki do całego organizmu."
  },
  {
    "id": "R04_TKANKI_10",
    "section": "Czym są tkanki roślinne?",
    "type": "single_choice",
    "prompt": "Jak nazywa się część rośliny wyspecjalizowana w pełnieniu określonej funkcji, zbudowana z różnych tkanek?",
    "options": [
      "organ",
      "chloroplast",
      "włośnik",
      "gatunek"
    ],
    "answer": 0,
    "explanation": "Zespoły tkanek tworzą organy, które pełnią określone funkcje."
  },
  {
    "id": "R04_BUDOWA_01",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "single_choice",
    "prompt": "Które tkanki umożliwiają roślinie wzrost?",
    "options": [
      "tkanki twórcze",
      "tkanki okrywające",
      "tkanki wzmacniające",
      "tkanki miękiszowe"
    ],
    "answer": 0,
    "explanation": "Tkanki twórcze mają komórki, które intensywnie się dzielą, dlatego roślina rośnie."
  },
  {
    "id": "R04_BUDOWA_02",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "scenario",
    "prompt": "Na ilustracji zaznaczono miejsca, w których roślina rośnie na długość i na grubość. Jakie tkanki tam działają?",
    "options": [
      "tkanki twórcze",
      "tkanki wzmacniające",
      "tkanki okrywające",
      "tkanki miękiszowe"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_tkanka_tworcza_wzrost.jpg",
    "explanation": "Wzrost rośliny umożliwiają tkanki twórcze."
  },
  {
    "id": "R04_BUDOWA_03",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "single_choice",
    "prompt": "Która tkanka znajduje się na powierzchni łodyg, korzeni i liści?",
    "options": [
      "okrywająca",
      "przewodząca",
      "miękiszowa",
      "twórcza"
    ],
    "answer": 0,
    "explanation": "Tkanka okrywająca leży na powierzchni organów i chroni roślinę."
  },
  {
    "id": "R04_BUDOWA_04",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "true_false",
    "prompt": "Kutykula na skórce ogranicza parowanie wody.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Kutykula jest warstwą, która ogranicza utratę wody."
  },
  {
    "id": "R04_BUDOWA_05",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "single_choice",
    "prompt": "Co w skórce liścia umożliwia wymianę tlenu i dwutlenku węgla?",
    "options": [
      "aparaty szparkowe",
      "włośniki",
      "bulwy",
      "stożek wzrostu"
    ],
    "answer": 0,
    "explanation": "Wymiana gazowa odbywa się przez aparaty szparkowe."
  },
  {
    "id": "R04_BUDOWA_06",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "single_choice",
    "prompt": "Która struktura zwiększa powierzchnię, przez którą korzeń pobiera wodę?",
    "options": [
      "włośniki",
      "korek",
      "ciernie",
      "kłącze"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_skorka_korek_wlosniki.jpg",
    "explanation": "Włośniki zwiększają powierzchnię chłonną korzenia."
  },
  {
    "id": "R04_BUDOWA_07",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "single_choice",
    "prompt": "W której tkance zachodzi fotosynteza?",
    "options": [
      "w miękiszu asymilacyjnym",
      "w korku",
      "w drewnie",
      "w tkance wzmacniającej"
    ],
    "answer": 0,
    "explanation": "Miękisz asymilacyjny zawiera chloroplasty, dlatego zachodzi w nim fotosynteza."
  },
  {
    "id": "R04_BUDOWA_08",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "single_choice",
    "prompt": "Która tkanka gromadzi substancje zapasowe?",
    "options": [
      "miękisz spichrzowy",
      "drewno",
      "korek",
      "łyko"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_tkanki_miekiszowe.jpg",
    "explanation": "Miękisz spichrzowy magazynuje substancje zapasowe, na przykład skrobię."
  },
  {
    "id": "R04_BUDOWA_09",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "match",
    "prompt": "Połącz tkankę przewodzącą z tym, co transportuje.",
    "options": null,
    "left": [
      "łyko",
      "drewno"
    ],
    "right": [
      "substancje pokarmowe",
      "woda i sole mineralne"
    ],
    "answer": {
      "łyko": "substancje pokarmowe",
      "drewno": "woda i sole mineralne"
    },
    "image": "/img/bbt_r04_tkanki_przewodzace_lyko_drewno.jpg",
    "explanation": "Łyko przewodzi substancje pokarmowe, a drewno wodę z solami mineralnymi."
  },
  {
    "id": "R04_BUDOWA_10",
    "section": "Jak budowa tkanek pomaga roślinie?",
    "type": "single_choice",
    "prompt": "Która tkanka pomaga liściowi utrzymać kształt i chroni roślinę przed uszkodzeniami?",
    "options": [
      "wzmacniająca",
      "okrywająca",
      "miękiszowa",
      "twórcza"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_tkanki_wzmacniajace_lisc.jpg",
    "explanation": "Tkanka wzmacniająca usztywnia organy rośliny i chroni je przed uszkodzeniami."
  },
  {
    "id": "R04_ORGANY_01",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "single_choice",
    "prompt": "Które organy nazywamy wegetatywnymi?",
    "options": [
      "korzeń, łodyga i liść",
      "kwiat i owoc",
      "nasiono i zarodek",
      "tylko liść"
    ],
    "answer": 0,
    "explanation": "Organami wegetatywnymi są korzeń, łodyga i liść."
  },
  {
    "id": "R04_ORGANY_02",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "single_choice",
    "prompt": "Który organ najczęściej przeprowadza fotosyntezę?",
    "options": [
      "liść",
      "korzeń",
      "nasiono",
      "korek"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_funkcje_organow_rosliny.jpg",
    "explanation": "Głównym miejscem fotosyntezy jest liść."
  },
  {
    "id": "R04_ORGANY_03",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje liścia.",
    "options": [
      "fotosynteza",
      "wymiana gazowa",
      "parowanie wody",
      "utrzymywanie rośliny w podłożu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Liść przeprowadza fotosyntezę, wymianę gazową i parowanie wody. Utrzymywanie rośliny w podłożu to zadanie korzenia."
  },
  {
    "id": "R04_ORGANY_04",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "single_choice",
    "prompt": "Który organ transportuje wodę z korzenia do innych części rośliny?",
    "options": [
      "łodyga",
      "liść",
      "owoc",
      "nasiono"
    ],
    "answer": 0,
    "explanation": "Łodyga pośredniczy w transporcie wody i soli mineralnych z korzenia."
  },
  {
    "id": "R04_ORGANY_05",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "single_choice",
    "prompt": "Który organ utrzymuje roślinę w podłożu?",
    "options": [
      "korzeń",
      "łodyga",
      "liść",
      "kwiat"
    ],
    "answer": 0,
    "explanation": "Korzeń utrzymuje roślinę w glebie."
  },
  {
    "id": "R04_ORGANY_06",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "sort",
    "prompt": "Przyporządkuj funkcje do właściwego organu rośliny.",
    "options": null,
    "items": [
      "fotosynteza",
      "utrzymywanie w podłożu",
      "transport wody",
      "parowanie wody",
      "pobieranie wody i soli mineralnych",
      "utrzymanie kształtu rośliny"
    ],
    "categories": [
      "korzeń",
      "łodyga",
      "liść"
    ],
    "answer": {
      "korzeń": [
        "utrzymywanie w podłożu",
        "pobieranie wody i soli mineralnych"
      ],
      "łodyga": [
        "transport wody",
        "utrzymanie kształtu rośliny"
      ],
      "liść": [
        "fotosynteza",
        "parowanie wody"
      ]
    },
    "explanation": "Korzeń pobiera i utrzymuje, łodyga transportuje i podtrzymuje, a liść prowadzi fotosyntezę i paruje wodę."
  },
  {
    "id": "R04_ORGANY_07",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "true_false",
    "prompt": "Łodyga może brać udział w rozmnażaniu wegetatywnym.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale podano, że łodyga może uczestniczyć w rozmnażaniu wegetatywnym."
  },
  {
    "id": "R04_ORGANY_08",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "fill_in",
    "prompt": "Uzupełnij: Korzeń pobiera z gleby __________ i __________.",
    "options": null,
    "answer": [
      "wodę",
      "sole mineralne"
    ],
    "altAnswers": [
      [
        "wodę",
        "woda"
      ],
      [
        "sole mineralne",
        "soli mineralne",
        "sole",
        "sole mineralne z gleby"
      ]
    ],
    "explanation": "Korzeń pobiera z gleby wodę i sole mineralne."
  },
  {
    "id": "R04_ORGANY_09",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "scenario",
    "prompt": "Na ilustracji widać trzy główne organy rośliny. Który z nich najczęściej gromadzi substancje zapasowe?",
    "options": [
      "korzeń",
      "kwiat",
      "aparat szparkowy",
      "kutykula"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_funkcje_organow_rosliny.jpg",
    "explanation": "Jedną z funkcji korzenia jest gromadzenie substancji zapasowych."
  },
  {
    "id": "R04_ORGANY_10",
    "section": "Korzeń, łodyga i liść - co robią?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: korzeń, łodyga, liść, kutykula.",
    "options": null,
    "answer": "kutykula",
    "explanation": "Korzeń, łodyga i liść to organy. Kutykula jest warstwą na skórce."
  },
  {
    "id": "R04_KORZEN_01",
    "section": "Korzeń i jego modyfikacje",
    "type": "single_choice",
    "prompt": "W którym systemie korzeniowym jest jeden gruby korzeń główny?",
    "options": [
      "w palowym",
      "w wiązkowym",
      "w żadnym",
      "w obu tak samo"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_systemy_korzeniowe.jpg",
    "explanation": "System palowy ma korzeń główny oraz cieńsze korzenie boczne."
  },
  {
    "id": "R04_KORZEN_02",
    "section": "Korzeń i jego modyfikacje",
    "type": "single_choice",
    "prompt": "Który system korzeniowy występuje na przykład u traw?",
    "options": [
      "wiązkowy",
      "palowy",
      "powietrzny",
      "spichrzowy"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że system wiązkowy występuje na przykład u traw."
  },
  {
    "id": "R04_KORZEN_03",
    "section": "Korzeń i jego modyfikacje",
    "type": "single_choice",
    "prompt": "Od czego odrastają korzenie boczne w systemie palowym?",
    "options": [
      "od korzenia głównego",
      "od liścia",
      "od owocu",
      "od aparatu szparkowego"
    ],
    "answer": 0,
    "explanation": "Korzenie boczne odrastają od korzenia głównego."
  },
  {
    "id": "R04_KORZEN_04",
    "section": "Korzeń i jego modyfikacje",
    "type": "single_choice",
    "prompt": "W której strefie korzenia znajdują się włośniki?",
    "options": [
      "w strefie włośnikowej",
      "w stożku wzrostu",
      "w strefie kwiatowej",
      "w pąku bocznym"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_budowa_korzenia_strefy.jpg",
    "explanation": "Włośniki występują w strefie włośnikowej."
  },
  {
    "id": "R04_KORZEN_05",
    "section": "Korzeń i jego modyfikacje",
    "type": "true_false",
    "prompt": "Czapeczka chroni stożek wzrostu korzenia przed uszkodzeniami.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Czapeczka osłania delikatny stożek wzrostu."
  },
  {
    "id": "R04_KORZEN_06",
    "section": "Korzeń i jego modyfikacje",
    "type": "fill_in",
    "prompt": "Uzupełnij: Stożek wzrostu jest miejscem intensywnych podziałów __________.",
    "options": null,
    "answer": [
      "komórek"
    ],
    "altAnswers": [
      [
        "komórek",
        "komórki",
        "komórka"
      ]
    ],
    "explanation": "W stożku wzrostu komórki intensywnie się dzielą, dlatego korzeń rośnie."
  },
  {
    "id": "R04_KORZEN_07",
    "section": "Korzeń i jego modyfikacje",
    "type": "single_choice",
    "prompt": "Jak nazywa się modyfikacja korzenia marchwi, która magazynuje substancje odżywcze?",
    "options": [
      "korzeń spichrzowy",
      "korzeń czepny",
      "korzeń powietrzny",
      "ssawka"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_modyfikacje_korzeni.jpg",
    "explanation": "Korzeń marchwi jest korzeniem spichrzowym i magazynuje zapasy."
  },
  {
    "id": "R04_KORZEN_08",
    "section": "Korzeń i jego modyfikacje",
    "type": "single_choice",
    "prompt": "Jakie korzenie ma storczyk, gdy pobiera parę wodną z powietrza?",
    "options": [
      "powietrzne",
      "spichrzowe",
      "podporowe",
      "boczne"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_modyfikacje_korzeni.jpg",
    "explanation": "Storczyki mają korzenie powietrzne, które pomagają pobierać wodę z powietrza."
  },
  {
    "id": "R04_KORZEN_09",
    "section": "Korzeń i jego modyfikacje",
    "type": "single_choice",
    "prompt": "Która modyfikacja korzenia pomaga kukurydzy stać stabilnie w glebie?",
    "options": [
      "korzenie podporowe",
      "korzenie czepne",
      "ssawki",
      "korzenie powietrzne"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_modyfikacje_korzeni.jpg",
    "explanation": "Korzenie podporowe podpierają roślinę i stabilizują ją w glebie."
  },
  {
    "id": "R04_KORZEN_10",
    "section": "Korzeń i jego modyfikacje",
    "type": "scenario",
    "prompt": "Jemioła wrasta w gałęzie drzewa i pobiera z niego wodę oraz sole mineralne. Jak nazywają się takie korzenie?",
    "options": [
      "ssawki",
      "włośniki",
      "korzenie boczne",
      "rozłogi"
    ],
    "answer": 0,
    "explanation": "Korzenie jemioły są przekształcone w ssawki."
  },
  {
    "id": "R04_LISC_01",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Jak nazywa się pąk na szczycie łodygi, dzięki któremu roślina rośnie na długość?",
    "options": [
      "pąk wierzchołkowy",
      "pąk boczny",
      "węzeł",
      "międzywęźle"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_budowa_lodygi.jpg",
    "explanation": "Pąk wierzchołkowy znajduje się na szczycie łodygi i odpowiada za wzrost na długość."
  },
  {
    "id": "R04_LISC_02",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Jak nazywa się miejsce na łodydze, z którego wyrastają liście?",
    "options": [
      "węzeł",
      "międzywęźle",
      "stożek wzrostu",
      "ssawka"
    ],
    "answer": 0,
    "explanation": "Węzeł to miejsce, w którym z łodygi wyrastają liście."
  },
  {
    "id": "R04_LISC_03",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Jak nazywa się bezlistny odcinek łodygi między węzłami?",
    "options": [
      "międzywęźle",
      "pąk boczny",
      "nerwacja",
      "kutykula"
    ],
    "answer": 0,
    "explanation": "Międzywęźle to odcinek łodygi między dwoma węzłami."
  },
  {
    "id": "R04_LISC_04",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Która część liścia łączy go z łodygą?",
    "options": [
      "ogonek liściowy",
      "blaszka liściowa",
      "nerwacja",
      "włośnik"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_budowa_liscia.jpg",
    "explanation": "Liść z łodygą łączy ogonek liściowy."
  },
  {
    "id": "R04_LISC_05",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Jak nazywa się system wiązek przewodzących w liściu?",
    "options": [
      "nerwacja",
      "kutykula",
      "czapeczka",
      "korek"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_budowa_liscia.jpg",
    "explanation": "System wiązek przewodzących w liściu to nerwacja."
  },
  {
    "id": "R04_LISC_06",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "true_false",
    "prompt": "Aparaty szparkowe umożliwiają wymianę gazową i parowanie wody.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Przez aparaty szparkowe roślina wymienia gazy i traci część wody."
  },
  {
    "id": "R04_LISC_07",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Do czego służą rozłogi truskawki?",
    "options": [
      "do rozmnażania wegetatywnego",
      "do pobierania wody z powietrza",
      "do ochrony przed zimnem",
      "do wymiany gazowej"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_modyfikacje_lodyg_lisci.jpg",
    "explanation": "Rozłogi truskawki pomagają roślinie rozmnażać się wegetatywnie."
  },
  {
    "id": "R04_LISC_08",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Co robią wąsy czepne roślin pnących?",
    "options": [
      "owijają się wokół podpory",
      "zamieniają się w kwiaty",
      "pobierają sole mineralne z gleby",
      "chronią stożek wzrostu"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_modyfikacje_lodyg_lisci.jpg",
    "explanation": "Wąsy czepne pomagają roślinie wspinać się po podporze."
  },
  {
    "id": "R04_LISC_09",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "single_choice",
    "prompt": "Bulwy ziemniaka są zmodyfikowanymi...",
    "options": [
      "łodygami",
      "liśćmi",
      "korzeniami bocznymi",
      "włośnikami"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_modyfikacje_lodyg_lisci.jpg",
    "explanation": "Bulwy ziemniaka to podziemne łodygi."
  },
  {
    "id": "R04_LISC_10",
    "section": "Łodyga, liść i ich modyfikacje",
    "type": "riddle",
    "prompt": "Jestem przekształconym liściem albo pędem. Zmniejszam parowanie wody i chronię roślinę przed zjedzeniem. Kim jestem?",
    "options": null,
    "answer": "cierń",
    "altAnswers": [
      "cierń",
      "ciernie",
      "cierniem",
      "ciernia",
      "cierniami"
    ],
    "explanation": "Ciernie ograniczają utratę wody i chronią roślinę przed roślinożercami."
  },
  {
    "id": "R04_SUPER_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz tkankę z najlepiej pasującą informacją.",
    "options": null,
    "left": [
      "twórcza",
      "okrywająca",
      "przewodząca",
      "wzmacniająca",
      "miękiszowa"
    ],
    "right": [
      "transportuje substancje",
      "chroni powierzchnię organów",
      "wypełnia większość organów",
      "dzieli się intensywnie",
      "usztywnia roślinę"
    ],
    "answer": {
      "twórcza": "dzieli się intensywnie",
      "okrywająca": "chroni powierzchnię organów",
      "przewodząca": "transportuje substancje",
      "wzmacniająca": "usztywnia roślinę",
      "miękiszowa": "wypełnia większość organów"
    },
    "explanation": "Każdy rodzaj tkanki ma swoją budowę i zadanie: jedne rosną, inne chronią, przewodzą, wzmacniają albo wypełniają."
  },
  {
    "id": "R04_SUPER_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij ciąg poziomów budowy rośliny: __________ → tkanka → __________ → organizm.",
    "options": null,
    "answer": [
      "komórka",
      "organ"
    ],
    "altAnswers": [
      [
        "komórka",
        "komorka",
        "komórki"
      ],
      [
        "organ",
        "organy"
      ]
    ],
    "explanation": "Poziomy budowy to: komórka, tkanka, organ, organizm."
  },
  {
    "id": "R04_SUPER_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na ilustracji pokazano dwa systemy korzeniowe. Który z nich pasuje do mniszka lekarskiego?",
    "options": [
      "system A",
      "system B",
      "oba tak samo",
      "żaden"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_systemy_korzeniowe.jpg",
    "explanation": "Mniszek ma system palowy, czyli taki z jednym grubym korzeniem głównym - na ilustracji to system A."
  },
  {
    "id": "R04_SUPER_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie prawdziwe zdania o tkankach przewodzących.",
    "options": [
      "łyko transportuje substancje pokarmowe",
      "drewno przewodzi wodę i sole mineralne",
      "komórki drewna są martwe",
      "komórki łyka są martwe",
      "tkanki przewodzące łączą się w wiązki przewodzące"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Prawdziwe są informacje o łyku, drewnie i wiązkach przewodzących. Martwe są komórki drewna, a nie łyka."
  },
  {
    "id": "R04_SUPER_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego brak ścian poprzecznych w komórkach drewna ułatwia ich działanie?",
    "options": [
      "bo woda może płynąć bez większych przeszkód",
      "bo komórki wtedy przeprowadzają fotosyntezę",
      "bo dzięki temu powstają kwiaty",
      "bo korzeń może się wspinać"
    ],
    "answer": 0,
    "explanation": "Komórki drewna tworzą długie rurki. Brak ścian poprzecznych ułatwia przepływ wody."
  },
  {
    "id": "R04_SUPER_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Stara łodyga drzewa potrzebuje ochrony przed uszkodzeniami i zimnem. Która tkanka najlepiej spełnia to zadanie?",
    "options": [
      "korek",
      "miękisz asymilacyjny",
      "łyko",
      "stożek wzrostu"
    ],
    "answer": 0,
    "explanation": "Na starszych łodygach skórka jest zastępowana przez korek, który chroni i izoluje."
  },
  {
    "id": "R04_SUPER_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Na podstawie ilustracji przyporządkuj modyfikacje do ich głównej roli.",
    "options": null,
    "items": [
      "rozłogi truskawki",
      "wąsy czepne",
      "kłącze imbiru",
      "bulwy ziemniaka",
      "liście spichrzowe cebuli",
      "ciernie"
    ],
    "categories": [
      "rozmnażanie",
      "wspinanie się",
      "magazynowanie zapasów",
      "ochrona i ograniczanie parowania"
    ],
    "answer": {
      "rozmnażanie": [
        "rozłogi truskawki"
      ],
      "wspinanie się": [
        "wąsy czepne"
      ],
      "magazynowanie zapasów": [
        "kłącze imbiru",
        "bulwy ziemniaka",
        "liście spichrzowe cebuli"
      ],
      "ochrona i ograniczanie parowania": [
        "ciernie"
      ]
    },
    "image": "/img/bbt_r04_modyfikacje_lodyg_lisci.jpg",
    "explanation": "Rozłogi pomagają w rozmnażaniu, wąsy w wspinaniu, kłącze, bulwy i liście spichrzowe magazynują zapasy, a ciernie chronią i zmniejszają parowanie."
  },
  {
    "id": "R04_SUPER_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywa się tkanka przyranna, która powstaje w miejscu zranienia rośliny?",
    "options": [
      "kalus",
      "korek",
      "łyko",
      "skórka"
    ],
    "answer": 0,
    "explanation": "W miejscu zranienia roślina wytwarza kalus, który pomaga odbudować uszkodzone fragmenty."
  },
  {
    "id": "R04_SUPER_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji są dwie tkanki miękiszowe. Która z nich prowadzi fotosyntezę?",
    "options": [
      "miękisz asymilacyjny",
      "miękisz spichrzowy",
      "obie tak samo",
      "żadna"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_tkanki_miekiszowe.jpg",
    "explanation": "Fotosyntezę prowadzi miękisz asymilacyjny, bo ma chloroplasty."
  },
  {
    "id": "R04_SUPER_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: Drewno przewodzi __________ i __________, a łyko przewodzi __________.",
    "options": null,
    "answer": [
      "wodę",
      "sole mineralne",
      "substancje pokarmowe"
    ],
    "altAnswers": [
      [
        "wodę",
        "woda"
      ],
      [
        "sole mineralne",
        "sole"
      ],
      [
        "substancje pokarmowe",
        "cukry",
        "cukier",
        "pokarm"
      ]
    ],
    "explanation": "Drewno przewodzi wodę z solami mineralnymi, a łyko substancje pokarmowe."
  },
  {
    "id": "R04_SUPER_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Liść stracił sztywność, bo uszkodzono tkankę biegnącą wzdłuż wiązek przewodzących. Która tkanka została uszkodzona?",
    "options": [
      "wzmacniająca",
      "twórcza",
      "skórka",
      "miękisz spichrzowy"
    ],
    "answer": 0,
    "explanation": "Tkanka wzmacniająca tworzy w liściu rusztowanie i pomaga mu zachować kształt."
  },
  {
    "id": "R04_SUPER_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji łodygi wskaż nazwę bezlistnego odcinka między dwoma węzłami.",
    "options": [
      "międzywęźle",
      "pąk boczny",
      "pąk wierzchołkowy",
      "korzeń boczny"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_budowa_lodygi.jpg",
    "explanation": "Bezlistny odcinek między węzłami to międzywęźle."
  },
  {
    "id": "R04_SUPER_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji liścia wybierz nazwę części, w której przede wszystkim zachodzi fotosynteza.",
    "options": [
      "blaszka liściowa",
      "ogonek liściowy",
      "węzeł",
      "czapeczka"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_budowa_liscia.jpg",
    "explanation": "Głównym miejscem fotosyntezy w liściu jest blaszka liściowa."
  },
  {
    "id": "R04_SUPER_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje, które mogą pełnić zarówno korzeń, jak i łodyga.",
    "options": [
      "rozmnażanie wegetatywne",
      "gromadzenie substancji zapasowych",
      "utrzymywanie rośliny w podłożu",
      "transport wody do innych części rośliny"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Zarówno korzeń, jak i łodyga mogą brać udział w rozmnażaniu wegetatywnym i magazynować zapasy. Pozostałe funkcje nie dotyczą obu organów jednocześnie."
  },
  {
    "id": "R04_SUPER_15",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: korzenie spichrzowe, korzenie powietrzne, korzenie podporowe, tkanka wzmacniająca.",
    "options": null,
    "answer": "tkanka wzmacniająca",
    "explanation": "Trzy pierwsze przykłady to modyfikacje korzeni. Tkanka wzmacniająca jest rodzajem tkanki."
  },
  {
    "id": "R04_SUPER_16",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego włośniki są tak ważne dla korzenia?",
    "options": [
      "zwiększają powierzchnię chłonną",
      "zamieniają się w kwiaty",
      "wytwarzają nasiona",
      "chronią stożek wzrostu"
    ],
    "answer": 0,
    "explanation": "Dzięki włośnikom korzeń może pobierać więcej wody i soli mineralnych."
  },
  {
    "id": "R04_SUPER_17",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na ilustracji pokazano różne tkanki w roślinie. Która z nich leży na powierzchni organów?",
    "options": [
      "okrywająca",
      "miękiszowa",
      "przewodząca",
      "wzmacniająca"
    ],
    "answer": 0,
    "image": "/img/bbt_r04_tkanki_w_roslinie_mapa.jpg",
    "explanation": "Tkanka okrywająca leży na powierzchni łodyg, korzeni i liści."
  },
  {
    "id": "R04_SUPER_18",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strefę korzenia z jej rolą.",
    "options": null,
    "left": [
      "strefa korzeni bocznych",
      "strefa włośnikowa",
      "strefa wydłużania",
      "stożek wzrostu"
    ],
    "right": [
      "powstają korzenie boczne",
      "pobieranie wody i soli",
      "komórki się wydłużają",
      "intensywne podziały komórek"
    ],
    "answer": {
      "strefa korzeni bocznych": "powstają korzenie boczne",
      "strefa włośnikowa": "pobieranie wody i soli",
      "strefa wydłużania": "komórki się wydłużają",
      "stożek wzrostu": "intensywne podziały komórek"
    },
    "image": "/img/bbt_r04_budowa_korzenia_strefy.jpg",
    "explanation": "Każda strefa korzenia ma inne zadanie: boczne tworzą odgałęzienia, włośniki pobierają, wydłużania rośnie na długość, a stożek wzrostu dzieli komórki."
  },
  {
    "id": "R04_SUPER_19",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Bulwy ziemniaka i kłącze imbiru są zmodyfikowanymi łodygami.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Obie te struktury są modyfikacjami łodygi."
  },
  {
    "id": "R04_SUPER_20",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Wkładasz fragment łodygi grubosza do wody. Po pewnym czasie pojawiają się korzenie i nowa roślina. Jaki to sposób rozmnażania?",
    "options": [
      "rozmnażanie wegetatywne",
      "rozmnażanie płciowe",
      "kiełkowanie nasion",
      "oddychanie"
    ],
    "answer": 0,
    "explanation": "Powstanie nowej rośliny z fragmentu łodygi to rozmnażanie wegetatywne."
  }
];
const KID_PROMPTS = {
  "R04_TKANKI_08": "Co jest między komórką a organem?",
  "R04_BUDOWA_02": "Która tkanka odpowiada za wzrost rośliny?",
  "R04_ORGANY_09": "Który organ gromadzi zapasy?",
  "R04_KORZEN_10": "Jak nazywają się korzenie jemioły?",
  "R04_LISC_10": "Jak nazywa się ostry twór chroniący roślinę?"
};
const chapter = {
  id: "r04",
  number: 4,
  title: "Tkanki i organy roślinne",
  icon: "🌿",
  sectionOrder: [
    "Czym są tkanki roślinne?",
    "Jak budowa tkanek pomaga roślinie?",
    "Korzeń, łodyga i liść - co robią?",
    "Korzeń i jego modyfikacje",
    "Łodyga, liść i ich modyfikacje"
  ],
  sectionIcons: {
    "Czym są tkanki roślinne?": "🧩",
    "Jak budowa tkanek pomaga roślinie?": "🔬",
    "Korzeń, łodyga i liść - co robią?": "🌱",
    "Korzeń i jego modyfikacje": "🟤",
    "Łodyga, liść i ich modyfikacje": "🍃"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
