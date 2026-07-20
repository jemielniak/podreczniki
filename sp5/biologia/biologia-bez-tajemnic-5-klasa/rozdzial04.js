// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TKA  = Tkanki roślinne
//   FUN  = Budowa i funkcje tkanek
//   ORG  = Korzeń, łodyga i liść
//   MOD  = Modyfikacje organów
//   KNO  = Kwiat, nasiono i owoc
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_TKA_01",
    "section": "Tkanki roślinne",
    "type": "single_choice",
    "prompt": "Czym jest tkanka?",
    "options": [
      "Zespołem komórek o podobnej budowie pełniących te same funkcje",
      "Pojedynczą komórką zdolną do fotosyntezy",
      "Zespołem wszystkich organów rośliny",
      "Częścią rośliny występującą tylko w korzeniu",
      "Warstwą substancji zapasowych",
      "Układem korzeni bocznych"
    ],
    "answer": 0,
    "explanation": "Tkanka to zespół komórek o podobnej budowie, które pełnią te same funkcje w organizmie.",
    "image": "r04_hierarchia_budowy_rosliny.jpg"
  },
  {
    "id": "R04_TKA_02",
    "section": "Tkanki roślinne",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji rośliny od najmniejszego do największego.",
    "options": null,
    "items": [
      "organizm",
      "tkanka",
      "system organów",
      "komórka",
      "organ"
    ],
    "answer": [
      "komórka",
      "tkanka",
      "organ",
      "system organów",
      "organizm"
    ],
    "explanation": "Komórki tworzą tkanki, tkanki budują organy, organy mogą tworzyć systemy organów, a wszystkie razem składają się na organizm.",
    "image": "r04_hierarchia_budowy_rosliny.jpg"
  },
  {
    "id": "R04_TKA_03",
    "section": "Tkanki roślinne",
    "type": "true_false",
    "prompt": "Mchy mają wszystkie typowe tkanki roślin lądowych.",
    "options": null,
    "answer": false,
    "explanation": "Mchy są wyjątkiem wśród roślin lądowych, ponieważ nie mają wszystkich typowych tkanek roślinnych."
  },
  {
    "id": "R04_TKA_04",
    "section": "Tkanki roślinne",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie tkanek dla roślin lądowych.",
    "options": [
      "Transport wody i substancji odżywczych wewnątrz rośliny",
      "Ochrona przed niekorzystnymi warunkami otoczenia",
      "Wytwarzanie gleby wokół korzeni",
      "Zamiana wszystkich organów w liście",
      "Utrzymywanie stałej temperatury ciała"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Tkanki umożliwiają sprawny transport substancji w organizmie rośliny oraz chronią ją przed takimi czynnikami jak niedobór wody, wiatr czy skrajne temperatury.",
    "image": "r04_rozmieszczenie_tkanek.jpg"
  },
  {
    "id": "R04_TKA_05",
    "section": "Tkanki roślinne",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki z jej ogólną rolą.",
    "options": null,
    "left": [
      "tkanka twórcza",
      "tkanka okrywająca",
      "tkanka miękiszowa",
      "tkanka przewodząca",
      "tkanka wzmacniająca"
    ],
    "right": [
      "umożliwia wzrost rośliny",
      "chroni przed czynnikami zewnętrznymi",
      "magazynuje substancje lub prowadzi fotosyntezę",
      "transportuje substancje",
      "nadaje sztywność i chroni przed uszkodzeniami"
    ],
    "answer": {
      "tkanka twórcza": "umożliwia wzrost rośliny",
      "tkanka okrywająca": "chroni przed czynnikami zewnętrznymi",
      "tkanka miękiszowa": "magazynuje substancje lub prowadzi fotosyntezę",
      "tkanka przewodząca": "transportuje substancje",
      "tkanka wzmacniająca": "nadaje sztywność i chroni przed uszkodzeniami"
    },
    "explanation": "Każdy rodzaj tkanki ma charakterystyczną funkcję wynikającą z budowy tworzących go komórek.",
    "image": "r04_rozmieszczenie_tkanek.jpg"
  },
  {
    "id": "R04_TKA_06",
    "section": "Tkanki roślinne",
    "type": "fill_in",
    "prompt": "Tkanki roślinne dzielimy na tkanki __________ i tkanki __________.",
    "options": null,
    "answer": [
      "twórcze",
      "stałe"
    ],
    "altAnswers": [
      [
        "twórcze",
        "twórcza"
      ],
      [
        "stałe",
        "stała"
      ]
    ],
    "explanation": "Ze względu na budowę i zdolność komórek do podziałów wyróżnia się tkanki twórcze oraz stałe."
  },
  {
    "id": "R04_TKA_07",
    "section": "Tkanki roślinne",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący tkanką roślinną: tkanka okrywająca, tkanka przewodząca, tkanka wzmacniająca, liść.",
    "options": null,
    "answer": "liść",
    "explanation": "Liść jest organem roślinnym, a pozostałe elementy są rodzajami tkanek."
  },
  {
    "id": "R04_TKA_08",
    "section": "Tkanki roślinne",
    "type": "scenario",
    "prompt": "Roślina została zraniona. W miejscu uszkodzenia powstała tkanka, której komórki intensywnie się dzielą i odbudowują uszkodzone części. Jak nazywa się ta tkanka?",
    "options": [
      "kalus",
      "korek",
      "łyko",
      "drewno",
      "miękisz spichrzowy",
      "skórka"
    ],
    "answer": 0,
    "explanation": "W miejscu zranienia roślina wytwarza tkankę przyranną, czyli kalus. Jej komórki intensywnie się dzielą."
  },
  {
    "id": "R04_TKA_09",
    "section": "Tkanki roślinne",
    "type": "single_choice",
    "prompt": "Która grupa zawiera wyłącznie tkanki stałe?",
    "options": [
      "okrywająca, miękiszowa, przewodząca, wzmacniająca",
      "twórcza, okrywająca, miękiszowa, przewodząca",
      "twórcza, wzmacniająca, przewodząca, miękiszowa",
      "okrywająca, twórcza, wzmacniająca, przewodząca",
      "miękiszowa, twórcza, okrywająca, przewodząca",
      "twórcza, okrywająca, przewodząca, wzmacniająca"
    ],
    "answer": 0,
    "explanation": "Do tkanek stałych należą tkanki: okrywająca, miękiszowa, przewodząca i wzmacniająca."
  },
  {
    "id": "R04_TKA_10",
    "section": "Tkanki roślinne",
    "type": "riddle",
    "prompt": "Tkanka przyranna powstająca w miejscu uszkodzenia rośliny to...",
    "options": null,
    "answer": "kalus",
    "altAnswers": [
      "kalus",
      "tkanka przyranna"
    ],
    "explanation": "Kalus tworzy się w miejscu zranienia, a jego intensywnie dzielące się komórki pomagają odbudować uszkodzone części."
  },
  {
    "id": "R04_TKA_11",
    "section": "Tkanki roślinne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do tkanek twórczych i stałych.",
    "options": null,
    "items": [
      "komórki dzielą się intensywnie",
      "umożliwiają wzrost rośliny",
      "z ich komórek powstają tkanki stałe",
      "komórki dzielą się rzadko lub wcale",
      "są wyspecjalizowane w pełnieniu określonych funkcji",
      "mogą być zbudowane z komórek żywych lub martwych"
    ],
    "categories": [
      "tkanki twórcze",
      "tkanki stałe"
    ],
    "answer": {
      "tkanki twórcze": [
        "komórki dzielą się intensywnie",
        "umożliwiają wzrost rośliny",
        "z ich komórek powstają tkanki stałe"
      ],
      "tkanki stałe": [
        "komórki dzielą się rzadko lub wcale",
        "są wyspecjalizowane w pełnieniu określonych funkcji",
        "mogą być zbudowane z komórek żywych lub martwych"
      ]
    },
    "explanation": "Tkanki twórcze zachowują zdolność intensywnych podziałów, natomiast tkanki stałe są wyspecjalizowane i dzielą się rzadko lub wcale."
  },
  {
    "id": "R04_TKA_12",
    "section": "Tkanki roślinne",
    "type": "true_false",
    "prompt": "Tkanki stałe mogą być zbudowane zarówno z komórek żywych, jak i martwych.",
    "options": null,
    "answer": true,
    "explanation": "Wśród tkanek stałych występują tkanki zbudowane z komórek żywych oraz takie, których komórki są martwe."
  },
  {
    "id": "R04_FUN_01",
    "section": "Budowa i funkcje tkanek",
    "type": "single_choice",
    "prompt": "Gdzie znajdują się tkanki twórcze umożliwiające wzrost rośliny na długość?",
    "options": [
      "na wierzchołkach łodyg i korzeni",
      "wyłącznie w skórce liścia",
      "w środku owocu",
      "tylko w kwiatach",
      "w korku starszych łodyg",
      "w bielmie nasion"
    ],
    "answer": 0,
    "explanation": "Tkanki twórcze na wierzchołkach łodyg i korzeni odpowiadają za wzrost rośliny na długość."
  },
  {
    "id": "R04_FUN_02",
    "section": "Budowa i funkcje tkanek",
    "type": "true_false",
    "prompt": "Tkanki twórcze ułożone wzdłuż łodyg i korzeni umożliwiają przyrost rośliny na grubość.",
    "options": null,
    "answer": true,
    "explanation": "Tkanki twórcze położone wzdłuż łodyg i korzeni odpowiadają za wzrost tych organów na grubość."
  },
  {
    "id": "R04_FUN_03",
    "section": "Budowa i funkcje tkanek",
    "type": "match",
    "prompt": "Połącz tkankę lub jej element z funkcją.",
    "options": null,
    "left": [
      "skórka",
      "korek",
      "miękisz asymilacyjny",
      "miękisz spichrzowy",
      "tkanka wzmacniająca"
    ],
    "right": [
      "ochrona młodych organów",
      "ochrona starszych łodyg i korzeni",
      "fotosynteza",
      "gromadzenie substancji zapasowych",
      "usztywnianie organów"
    ],
    "answer": {
      "skórka": "ochrona młodych organów",
      "korek": "ochrona starszych łodyg i korzeni",
      "miękisz asymilacyjny": "fotosynteza",
      "miękisz spichrzowy": "gromadzenie substancji zapasowych",
      "tkanka wzmacniająca": "usztywnianie organów"
    },
    "explanation": "Budowa każdej z tych tkanek jest przystosowana do pełnionej funkcji."
  },
  {
    "id": "R04_FUN_04",
    "section": "Budowa i funkcje tkanek",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe informacje o skórce rośliny.",
    "options": [
      "Jej komórki są żywe",
      "Komórki ściśle do siebie przylegają",
      "Może być pokryta kutykulą",
      "Zawsze składa się z martwych komórek",
      "Transportuje cukry z liści",
      "W liściach może zawierać aparaty szparkowe"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Skórka jest zbudowana z żywych, ściśle przylegających komórek, może być pokryta kutykulą, a w liściach zawiera aparaty szparkowe.",
    "image": "r04_aparat_szparkowy.jpg"
  },
  {
    "id": "R04_FUN_05",
    "section": "Budowa i funkcje tkanek",
    "type": "fill_in",
    "prompt": "Warstwa ograniczająca parowanie wody z powierzchni skórki to __________.",
    "options": null,
    "answer": [
      "kutykula"
    ],
    "altAnswers": [
      [
        "kutykula",
        "kutykulą"
      ]
    ],
    "explanation": "Kutykula jest warstwą substancji nieprzepuszczającej wody, dlatego ogranicza jej parowanie."
  },
  {
    "id": "R04_FUN_06",
    "section": "Budowa i funkcje tkanek",
    "type": "scenario",
    "prompt": "Uczeń ogląda fragment skórki korzenia. Widzi liczne cienkie wypustki zwiększające powierzchnię pobierania wody i soli mineralnych. Co obserwuje?",
    "options": [
      "włośniki",
      "aparaty szparkowe",
      "pylniki",
      "wiązki przewodzące",
      "ciernie",
      "zalążki"
    ],
    "answer": 0,
    "explanation": "Włośniki są cienkimi wypustkami skórki korzenia i zwiększają powierzchnię chłonną."
  },
  {
    "id": "R04_FUN_07",
    "section": "Budowa i funkcje tkanek",
    "type": "single_choice",
    "prompt": "Która tkanka zawiera chloroplasty i prowadzi fotosyntezę?",
    "options": [
      "miękisz asymilacyjny",
      "miękisz spichrzowy",
      "korek",
      "drewno",
      "łyko",
      "tkanka twórcza"
    ],
    "answer": 0,
    "explanation": "Miękisz asymilacyjny występuje w zielonych częściach roślin, a jego komórki zawierają chloroplasty."
  },
  {
    "id": "R04_FUN_08",
    "section": "Budowa i funkcje tkanek",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do drewna i łyka.",
    "options": null,
    "items": [
      "transportuje wodę i sole mineralne",
      "transportuje substancje pokarmowe",
      "jest zbudowane z martwych komórek",
      "jest zbudowane z żywych komórek",
      "komórki tworzą długie rurki bez ścian poprzecznych",
      "komórki mają sita w ścianach poprzecznych"
    ],
    "categories": [
      "drewno",
      "łyko"
    ],
    "answer": {
      "drewno": [
        "transportuje wodę i sole mineralne",
        "jest zbudowane z martwych komórek",
        "komórki tworzą długie rurki bez ścian poprzecznych"
      ],
      "łyko": [
        "transportuje substancje pokarmowe",
        "jest zbudowane z żywych komórek",
        "komórki mają sita w ścianach poprzecznych"
      ]
    },
    "explanation": "Drewno przewodzi wodę z solami mineralnymi, a łyko przenosi substancje pokarmowe powstałe w fotosyntezie.",
    "image": "r04_wiazka_przewodzaca.jpg"
  },
  {
    "id": "R04_FUN_09",
    "section": "Budowa i funkcje tkanek",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do tkanek przewodzących: drewno, łyko, wiązka przewodząca, kutykula.",
    "options": null,
    "answer": "kutykula",
    "explanation": "Kutykula jest warstwą na powierzchni skórki, natomiast drewno i łyko tworzą tkanki przewodzące łączące się w wiązki."
  },
  {
    "id": "R04_FUN_10",
    "section": "Budowa i funkcje tkanek",
    "type": "match",
    "prompt": "Połącz tkankę z charakterystyczną cechą jej komórek.",
    "options": null,
    "left": [
      "tkanka twórcza",
      "skórka",
      "korek",
      "miękisz",
      "tkanka wzmacniająca"
    ],
    "right": [
      "żywe komórki intensywnie się dzielą",
      "żywe komórki ściśle do siebie przylegają",
      "martwe komórki mają grube ściany",
      "komórki mają cienkie ściany i duże wakuole",
      "komórki mają silnie zgrubiałe ściany"
    ],
    "answer": {
      "tkanka twórcza": "żywe komórki intensywnie się dzielą",
      "skórka": "żywe komórki ściśle do siebie przylegają",
      "korek": "martwe komórki mają grube ściany",
      "miękisz": "komórki mają cienkie ściany i duże wakuole",
      "tkanka wzmacniająca": "komórki mają silnie zgrubiałe ściany"
    },
    "explanation": "Cechy komórek są bezpośrednio związane z funkcją pełnioną przez daną tkankę."
  },
  {
    "id": "R04_FUN_11",
    "section": "Budowa i funkcje tkanek",
    "type": "riddle",
    "prompt": "Struktury w skórce liścia umożliwiające wymianę gazową i parowanie wody to...",
    "options": null,
    "answer": "aparaty szparkowe",
    "altAnswers": [
      "aparaty szparkowe",
      "aparat szparkowy",
      "szparki"
    ],
    "explanation": "Aparaty szparkowe umożliwiają wymianę tlenu i dwutlenku węgla oraz parowanie wody.",
    "image": "r04_aparat_szparkowy.jpg"
  },
  {
    "id": "R04_FUN_12",
    "section": "Budowa i funkcje tkanek",
    "type": "true_false",
    "prompt": "Silnie zgrubiałe ściany komórek tkanek wzmacniających pomagają roślinie zachować sztywność i chronią ją przed uszkodzeniami.",
    "options": null,
    "answer": true,
    "explanation": "Grube ściany sprawiają, że tkanki wzmacniające są wytrzymałe i mogą pełnić funkcję rusztowania."
  },
  {
    "id": "R04_ORG_01",
    "section": "Korzeń, łodyga i liść",
    "type": "multi_select",
    "prompt": "Zaznacz organy wegetatywne rośliny.",
    "options": [
      "korzeń",
      "łodyga",
      "liść",
      "kwiat",
      "owoc",
      "nasiono"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Organy wegetatywne to korzeń oraz pęd, który składa się z łodygi i liści."
  },
  {
    "id": "R04_ORG_02",
    "section": "Korzeń, łodyga i liść",
    "type": "match",
    "prompt": "Połącz organ z jego charakterystyczną funkcją.",
    "options": null,
    "left": [
      "korzeń",
      "łodyga",
      "liść"
    ],
    "right": [
      "pobieranie wody i soli mineralnych z gleby",
      "transport substancji i utrzymywanie kształtu rośliny",
      "fotosynteza i wymiana gazowa"
    ],
    "answer": {
      "korzeń": "pobieranie wody i soli mineralnych z gleby",
      "łodyga": "transport substancji i utrzymywanie kształtu rośliny",
      "liść": "fotosynteza i wymiana gazowa"
    },
    "explanation": "Korzeń pobiera wodę, łodyga przewodzi substancje i podtrzymuje roślinę, a liść prowadzi fotosyntezę oraz wymianę gazową."
  },
  {
    "id": "R04_ORG_03",
    "section": "Korzeń, łodyga i liść",
    "type": "single_choice",
    "prompt": "Który opis dotyczy systemu palowego?",
    "options": [
      "Ma gruby i długi korzeń główny oraz cieńsze korzenie boczne",
      "Składa się z licznych korzeni podobnej wielkości",
      "Występuje wyłącznie u traw",
      "Nie ma korzeni bocznych",
      "Tworzą go tylko włośniki",
      "Zawsze rozwija się nad ziemią"
    ],
    "answer": 0,
    "explanation": "System palowy ma wyraźny korzeń główny, od którego odrastają cieńsze korzenie boczne.",
    "image": "r04_systemy_korzeniowe.jpg"
  },
  {
    "id": "R04_ORG_04",
    "section": "Korzeń, łodyga i liść",
    "type": "fill_in",
    "prompt": "Odcinek korzenia pokryty włośnikami to strefa __________.",
    "options": null,
    "answer": [
      "włośnikowa"
    ],
    "altAnswers": [
      [
        "włośnikowa",
        "włośnikowej"
      ]
    ],
    "explanation": "Strefa włośnikowa jest pokryta włośnikami zwiększającymi powierzchnię chłonną korzenia.",
    "image": "r04_strefy_korzenia.jpg"
  },
  {
    "id": "R04_ORG_05",
    "section": "Korzeń, łodyga i liść",
    "type": "sequence",
    "prompt": "Ułóż strefy korzenia od jego wierzchołka ku górze.",
    "options": null,
    "items": [
      "strefa włośnikowa",
      "strefa korzeni bocznych",
      "stożek wzrostu",
      "strefa wydłużania"
    ],
    "answer": [
      "stożek wzrostu",
      "strefa wydłużania",
      "strefa włośnikowa",
      "strefa korzeni bocznych"
    ],
    "explanation": "Najniżej znajduje się stożek wzrostu, następnie strefa wydłużania, strefa włośnikowa i strefa korzeni bocznych.",
    "image": "r04_strefy_korzenia.jpg"
  },
  {
    "id": "R04_ORG_06",
    "section": "Korzeń, łodyga i liść",
    "type": "true_false",
    "prompt": "Włośniki zwiększają powierzchnię, przez którą korzeń pobiera wodę i sole mineralne.",
    "options": null,
    "answer": true,
    "explanation": "Liczne cienkie włośniki znacznie zwiększają powierzchnię chłonną korzenia."
  },
  {
    "id": "R04_ORG_07",
    "section": "Korzeń, łodyga i liść",
    "type": "scenario",
    "prompt": "Uczeń wykopał kępę trawy i zauważył wiele korzeni podobnej wielkości bez wyraźnego korzenia głównego. Jaki system korzeniowy obserwuje?",
    "options": [
      "wiązkowy",
      "palowy",
      "powietrzny",
      "czepny",
      "podporowy",
      "spichrzowy"
    ],
    "answer": 0,
    "explanation": "System wiązkowy składa się z licznych korzeni o podobnych rozmiarach i występuje między innymi u traw.",
    "image": "r04_systemy_korzeniowe.jpg"
  },
  {
    "id": "R04_ORG_08",
    "section": "Korzeń, łodyga i liść",
    "type": "single_choice",
    "prompt": "Jak nazywa się bezlistny odcinek łodygi między dwoma węzłami?",
    "options": [
      "międzywęźle",
      "węzeł",
      "pąk wierzchołkowy",
      "pąk boczny",
      "blaszka liściowa",
      "nerwacja"
    ],
    "answer": 0,
    "explanation": "Międzywęźle jest odcinkiem łodygi położonym między kolejnymi węzłami."
  },
  {
    "id": "R04_ORG_09",
    "section": "Korzeń, łodyga i liść",
    "type": "riddle",
    "prompt": "Nadziemna część rośliny złożona z łodygi i liści to...",
    "options": null,
    "answer": "pęd",
    "altAnswers": [
      "pęd",
      "ped"
    ],
    "explanation": "Pęd składa się z łodygi i liści, a u części roślin także z kwiatów i owoców."
  },
  {
    "id": "R04_ORG_10",
    "section": "Korzeń, łodyga i liść",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący częścią liścia: blaszka liściowa, ogonek liściowy, nerwacja, stożek wzrostu.",
    "options": null,
    "answer": "stożek wzrostu",
    "explanation": "Stożek wzrostu jest częścią wierzchołka korzenia lub pędu, a pozostałe elementy opisują budowę liścia."
  },
  {
    "id": "R04_ORG_11",
    "section": "Korzeń, łodyga i liść",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje liścia wymienione w rozdziale.",
    "options": [
      "fotosynteza",
      "wymiana gazowa",
      "parowanie wody",
      "pobieranie soli mineralnych z gleby",
      "wytwarzanie pyłku",
      "tworzenie korzeni bocznych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Liść przeprowadza fotosyntezę, wymianę gazową oraz parowanie wody."
  },
  {
    "id": "R04_ORG_12",
    "section": "Korzeń, łodyga i liść",
    "type": "true_false",
    "prompt": "Łodyga transportuje wodę z solami mineralnymi z korzenia oraz substancje pokarmowe z liści do innych części rośliny.",
    "options": null,
    "answer": true,
    "explanation": "Łodyga pośredniczy w transporcie obu rodzajów substancji między organami rośliny."
  },
  {
    "id": "R04_MOD_01",
    "section": "Modyfikacje organów",
    "type": "match",
    "prompt": "Połącz modyfikację korzenia z przykładem rośliny.",
    "options": null,
    "left": [
      "korzenie spichrzowe",
      "korzenie powietrzne",
      "korzenie czepne",
      "korzenie podporowe",
      "ssawki"
    ],
    "right": [
      "marchew",
      "storczyk",
      "bluszcz",
      "kukurydza",
      "jemioła"
    ],
    "answer": {
      "korzenie spichrzowe": "marchew",
      "korzenie powietrzne": "storczyk",
      "korzenie czepne": "bluszcz",
      "korzenie podporowe": "kukurydza",
      "ssawki": "jemioła"
    },
    "explanation": "Rozdział podaje te rośliny jako przykłady poszczególnych modyfikacji korzeni.",
    "image": "r04_modyfikacje_korzeni.jpg"
  },
  {
    "id": "R04_MOD_02",
    "section": "Modyfikacje organów",
    "type": "single_choice",
    "prompt": "Jaką funkcję pełnią korzenie powietrzne storczyków?",
    "options": [
      "wchłaniają parę wodną z powietrza",
      "przytwierdzają roślinę do podpory",
      "magazynują skrobię",
      "wytwarzają pyłek",
      "zmniejszają parowanie wody",
      "transportują cukry z liści"
    ],
    "answer": 0,
    "explanation": "Korzenie powietrzne storczyków umożliwiają pobieranie pary wodnej z powietrza.",
    "image": "r04_modyfikacje_korzeni.jpg"
  },
  {
    "id": "R04_MOD_03",
    "section": "Modyfikacje organów",
    "type": "scenario",
    "prompt": "Pnącze wspina się po pniu dzięki korzeniom, które przytwierdzają je do podpory. Jaki to typ korzeni?",
    "options": [
      "czepne",
      "spichrzowe",
      "powietrzne",
      "podporowe",
      "boczne",
      "wiązki korzeniowe"
    ],
    "answer": 0,
    "explanation": "Korzenie czepne, występujące na przykład u bluszczu, umożliwiają przymocowanie rośliny do podpory."
  },
  {
    "id": "R04_MOD_04",
    "section": "Modyfikacje organów",
    "type": "fill_in",
    "prompt": "Korzenie jemioły są przekształcone w __________, które wrastają w gałęzie drzewa żywiciela.",
    "options": null,
    "answer": [
      "ssawki"
    ],
    "altAnswers": [
      [
        "ssawki",
        "ssawkę",
        "ssawkami"
      ]
    ],
    "explanation": "Ssawki jemioły wrastają w gałęzie żywiciela i pobierają z nich wodę oraz sole mineralne."
  },
  {
    "id": "R04_MOD_05",
    "section": "Modyfikacje organów",
    "type": "multi_select",
    "prompt": "Zaznacz modyfikacje łodyg uczestniczące w rozmnażaniu wegetatywnym.",
    "options": [
      "rozłogi truskawki",
      "kłącze imbiru",
      "bulwy ziemniaka",
      "korzenie powietrzne storczyka",
      "aparaty szparkowe liścia",
      "pylniki kwiatu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rozłogi, kłącza i bulwy są przekształconymi łodygami, które mogą brać udział w rozmnażaniu wegetatywnym.",
    "image": "r04_modyfikacje_lodyg_lisci.jpg"
  },
  {
    "id": "R04_MOD_06",
    "section": "Modyfikacje organów",
    "type": "sort",
    "prompt": "Przyporządkuj modyfikacje do organów, z których powstały.",
    "options": null,
    "items": [
      "korzenie spichrzowe marchwi",
      "korzenie podporowe kukurydzy",
      "rozłogi truskawki",
      "kłącze imbiru",
      "bulwy ziemniaka",
      "liście spichrzowe cebuli",
      "ciernie kaktusa"
    ],
    "categories": [
      "korzeń",
      "łodyga",
      "liść"
    ],
    "answer": {
      "korzeń": [
        "korzenie spichrzowe marchwi",
        "korzenie podporowe kukurydzy"
      ],
      "łodyga": [
        "rozłogi truskawki",
        "kłącze imbiru",
        "bulwy ziemniaka"
      ],
      "liść": [
        "liście spichrzowe cebuli",
        "ciernie kaktusa"
      ]
    },
    "explanation": "Modyfikacje mogą dotyczyć korzeni, łodyg lub liści, a ich budowa pozwala pełnić dodatkowe funkcje.",
    "image": "r04_modyfikacje_lodyg_lisci.jpg"
  },
  {
    "id": "R04_MOD_07",
    "section": "Modyfikacje organów",
    "type": "true_false",
    "prompt": "Wąsy czepne mogą być przekształconymi łodygami u winorośli albo liśćmi u grochu.",
    "options": null,
    "answer": true,
    "explanation": "W zależności od gatunku wąsy czepne mogą powstawać z różnych organów."
  },
  {
    "id": "R04_MOD_08",
    "section": "Modyfikacje organów",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący modyfikacją łodygi: rozłóg, kłącze, bulwa ziemniaka, korzeń czepny.",
    "options": null,
    "answer": "korzeń czepny",
    "explanation": "Korzeń czepny jest modyfikacją korzenia, a rozłóg, kłącze i bulwa ziemniaka są modyfikacjami łodygi."
  },
  {
    "id": "R04_MOD_09",
    "section": "Modyfikacje organów",
    "type": "single_choice",
    "prompt": "Która część cebuli magazynuje substancje zapasowe?",
    "options": [
      "liście spichrzowe",
      "korzenie podporowe",
      "wąsy czepne",
      "korek",
      "aparaty szparkowe",
      "pylniki"
    ],
    "answer": 0,
    "explanation": "Mięsiste łuski cebuli są liśćmi spichrzowymi osadzonymi na skróconej łodydze zwanej piętką."
  },
  {
    "id": "R04_MOD_10",
    "section": "Modyfikacje organów",
    "type": "scenario",
    "prompt": "Roślina żyje w suchym środowisku. Jej liście przekształciły się w ciernie, które ograniczają utratę wody i chronią przed zjedzeniem. O jakiej roślinie mówi przykład z rozdziału?",
    "options": [
      "kaktus",
      "truskawka",
      "storczyk",
      "kukurydza",
      "marchew",
      "jemioła"
    ],
    "answer": 0,
    "explanation": "U kaktusów ciernie są przekształconymi liśćmi, zmniejszają parowanie wody i chronią roślinę."
  },
  {
    "id": "R04_MOD_11",
    "section": "Modyfikacje organów",
    "type": "match",
    "prompt": "Połącz modyfikację z funkcją.",
    "options": null,
    "left": [
      "korzenie spichrzowe",
      "korzenie podporowe",
      "wąsy czepne",
      "liście spichrzowe",
      "ciernie"
    ],
    "right": [
      "magazynowanie substancji odżywczych",
      "stabilizowanie rośliny w glebie",
      "owijanie się wokół podpory",
      "gromadzenie substancji zapasowych w cebuli",
      "ograniczanie parowania i ochrona przed zjedzeniem"
    ],
    "answer": {
      "korzenie spichrzowe": "magazynowanie substancji odżywczych",
      "korzenie podporowe": "stabilizowanie rośliny w glebie",
      "wąsy czepne": "owijanie się wokół podpory",
      "liście spichrzowe": "gromadzenie substancji zapasowych w cebuli",
      "ciernie": "ograniczanie parowania i ochrona przed zjedzeniem"
    },
    "explanation": "Każda modyfikacja zwiększa przystosowanie rośliny do warunków życia."
  },
  {
    "id": "R04_MOD_12",
    "section": "Modyfikacje organów",
    "type": "riddle",
    "prompt": "Rozmnażanie bez udziału komórek rozrodczych, na przykład za pomocą rozłogów lub bulw, to rozmnażanie...",
    "options": null,
    "answer": "wegetatywne",
    "altAnswers": [
      "wegetatywne",
      "bezpłciowe",
      "rozmnażanie wegetatywne"
    ],
    "explanation": "Rozmnażanie wegetatywne jest rodzajem rozmnażania bezpłciowego i może zachodzić z udziałem zmodyfikowanych organów."
  },
  {
    "id": "R04_KNO_01",
    "section": "Kwiat, nasiono i owoc",
    "type": "single_choice",
    "prompt": "Jaka jest główna funkcja kwiatu roślin okrytonasiennych?",
    "options": [
      "udział w rozmnażaniu płciowym",
      "pobieranie wody z gleby",
      "transport cukrów",
      "magazynowanie soli mineralnych",
      "utrzymywanie rośliny w podłożu",
      "ochrona korzenia"
    ],
    "answer": 0,
    "explanation": "Kwiaty są organami służącymi do rozmnażania płciowego."
  },
  {
    "id": "R04_KNO_02",
    "section": "Kwiat, nasiono i owoc",
    "type": "multi_select",
    "prompt": "Zaznacz elementy tworzące okwiat.",
    "options": [
      "płatki korony",
      "działki kielicha",
      "pręciki",
      "słupek",
      "zalążnia",
      "pylniki"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Okwiat tworzą płatki korony oraz działki kielicha.",
    "image": "r04_budowa_kwiatu.jpg"
  },
  {
    "id": "R04_KNO_03",
    "section": "Kwiat, nasiono i owoc",
    "type": "match",
    "prompt": "Połącz część kwiatu z jej funkcją lub cechą.",
    "options": null,
    "left": [
      "znamię słupka",
      "szyjka słupka",
      "zalążnia",
      "pylnik",
      "nitka pręcika"
    ],
    "right": [
      "przyjmuje pyłek",
      "łączy znamię z zalążnią",
      "zawiera zalążek",
      "wytwarza pyłek",
      "podtrzymuje pylniki"
    ],
    "answer": {
      "znamię słupka": "przyjmuje pyłek",
      "szyjka słupka": "łączy znamię z zalążnią",
      "zalążnia": "zawiera zalążek",
      "pylnik": "wytwarza pyłek",
      "nitka pręcika": "podtrzymuje pylniki"
    },
    "explanation": "Elementy słupka i pręcika pełnią różne role w rozmnażaniu płciowym roślin.",
    "image": "r04_budowa_kwiatu.jpg"
  },
  {
    "id": "R04_KNO_04",
    "section": "Kwiat, nasiono i owoc",
    "type": "fill_in",
    "prompt": "Męskim elementem kwiatu jest __________, a żeńskim elementem kwiatu jest __________.",
    "options": null,
    "answer": [
      "pręcik",
      "słupek"
    ],
    "altAnswers": [
      [
        "pręcik",
        "pręciki"
      ],
      [
        "słupek",
        "słupki"
      ]
    ],
    "explanation": "Pręciki są elementami męskimi kwiatu, a słupek jest elementem żeńskim."
  },
  {
    "id": "R04_KNO_05",
    "section": "Kwiat, nasiono i owoc",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania płciowego rośliny w prawidłowej kolejności.",
    "options": null,
    "items": [
      "rozwój nasiona i owocu",
      "zapłodnienie",
      "zapylenie"
    ],
    "answer": [
      "zapylenie",
      "zapłodnienie",
      "rozwój nasiona i owocu"
    ],
    "explanation": "Najpierw pyłek trafia na znamię słupka, potem dochodzi do zapłodnienia, a następnie rozwijają się nasiono i owoc."
  },
  {
    "id": "R04_KNO_06",
    "section": "Kwiat, nasiono i owoc",
    "type": "true_false",
    "prompt": "Zapylenie polega na przeniesieniu ziarna pyłku na znamię słupka.",
    "options": null,
    "answer": true,
    "explanation": "Zapylenie jest pierwszym etapem rozmnażania płciowego roślin."
  },
  {
    "id": "R04_KNO_07",
    "section": "Kwiat, nasiono i owoc",
    "type": "scenario",
    "prompt": "Kwiat ma barwny i pachnący okwiat, wytwarza nektar oraz lepki i ciężki pyłek. Do jakiej grupy należy?",
    "options": [
      "rośliny owadopylne",
      "rośliny wiatropylne",
      "rośliny bezkwiatowe",
      "rośliny wodne",
      "rośliny pasożytnicze",
      "rośliny zarodnikowe"
    ],
    "answer": 0,
    "explanation": "Barwny zapachowy okwiat, nektar oraz lepki ciężki pyłek to cechy roślin owadopylnych."
  },
  {
    "id": "R04_KNO_08",
    "section": "Kwiat, nasiono i owoc",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do roślin owadopylnych i wiatropylnych.",
    "options": null,
    "items": [
      "barwny i pachnący okwiat",
      "lepki i ciężki pyłek",
      "wytwarzanie nektaru",
      "prosty zredukowany okwiat",
      "duża ilość lekkiego pyłku"
    ],
    "categories": [
      "rośliny owadopylne",
      "rośliny wiatropylne"
    ],
    "answer": {
      "rośliny owadopylne": [
        "barwny i pachnący okwiat",
        "lepki i ciężki pyłek",
        "wytwarzanie nektaru"
      ],
      "rośliny wiatropylne": [
        "prosty zredukowany okwiat",
        "duża ilość lekkiego pyłku"
      ]
    },
    "explanation": "Cechy kwiatów są przystosowaniem do sposobu przenoszenia pyłku."
  },
  {
    "id": "R04_KNO_09",
    "section": "Kwiat, nasiono i owoc",
    "type": "riddle",
    "prompt": "Roślina na wczesnym etapie rozwoju znajdująca się wewnątrz nasiona to...",
    "options": null,
    "answer": "zarodek",
    "altAnswers": [
      "zarodek",
      "zarodek rośliny"
    ],
    "explanation": "Zarodek powstaje z połączenia komórki jajowej z komórką plemnikową.",
    "image": "r04_budowa_nasiona_owocu.jpg"
  },
  {
    "id": "R04_KNO_10",
    "section": "Kwiat, nasiono i owoc",
    "type": "single_choice",
    "prompt": "W co przekształcają się zalążek i zalążnia po zapłodnieniu?",
    "options": [
      "zalążek w nasiono, zalążnia w owoc",
      "zalążek w owoc, zalążnia w nasiono",
      "oba w korzeń",
      "oba w liść",
      "zalążek w pyłek, zalążnia w pręcik",
      "zalążek w bielmo, zalążnia w łupinę"
    ],
    "answer": 0,
    "explanation": "Po zapłodnieniu zalążek rozwija się w nasiono, a zalążnia w owoc.",
    "image": "r04_budowa_nasiona_owocu.jpg"
  },
  {
    "id": "R04_KNO_11",
    "section": "Kwiat, nasiono i owoc",
    "type": "match",
    "prompt": "Połącz część nasiona z jej funkcją.",
    "options": null,
    "left": [
      "łupina nasienna",
      "zarodek",
      "bielmo"
    ],
    "right": [
      "chroni wnętrze nasiona",
      "jest rośliną na wczesnym etapie rozwoju",
      "stanowi materiał zapasowy"
    ],
    "answer": {
      "łupina nasienna": "chroni wnętrze nasiona",
      "zarodek": "jest rośliną na wczesnym etapie rozwoju",
      "bielmo": "stanowi materiał zapasowy"
    },
    "explanation": "Łupina chroni, zarodek daje początek nowej roślinie, a bielmo dostarcza materiałów zapasowych.",
    "image": "r04_budowa_nasiona_owocu.jpg"
  },
  {
    "id": "R04_KNO_12",
    "section": "Kwiat, nasiono i owoc",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady przystosowań owoców do rozsiewania nasion opisane w rozdziale.",
    "options": [
      "aparat lotny mniszka",
      "haczyki owoców ostu",
      "mięsista owocnia czereśni",
      "pękające strąki soi i fasoli",
      "włośniki korzenia",
      "kutykula liścia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Nasiona mogą być przenoszone przez wiatr, zwierzęta albo wyrzucane z pękających owoców.",
    "image": "r04_rozsiewanie_nasion.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż elementy od poziomu budowy organizmu do procesu zachodzącego w liściu.",
    "options": null,
    "items": [
      "miękisz asymilacyjny",
      "fotosynteza",
      "liść",
      "komórka miękiszu",
      "organizm rośliny"
    ],
    "answer": [
      "organizm rośliny",
      "liść",
      "miękisz asymilacyjny",
      "komórka miękiszu",
      "fotosynteza"
    ],
    "explanation": "Liść jest organem organizmu rośliny, zawiera miękisz asymilacyjny, którego komórki prowadzą fotosyntezę."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element z informacją o żywotności komórek lub transportowanej substancji.",
    "options": null,
    "left": [
      "drewno",
      "łyko",
      "skórka",
      "korek",
      "tkanka twórcza"
    ],
    "right": [
      "martwe komórki przewodzą wodę i sole",
      "żywe komórki przewodzą substancje pokarmowe",
      "żywe ściśle przylegające komórki",
      "martwe komórki wypełnione powietrzem",
      "żywe komórki intensywnie się dzielą"
    ],
    "answer": {
      "drewno": "martwe komórki przewodzą wodę i sole",
      "łyko": "żywe komórki przewodzą substancje pokarmowe",
      "skórka": "żywe ściśle przylegające komórki",
      "korek": "martwe komórki wypełnione powietrzem",
      "tkanka twórcza": "żywe komórki intensywnie się dzielą"
    },
    "explanation": "Rozpoznanie tkanki wymaga połączenia jej budowy z funkcją."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Powierzchnia liścia została pozbawiona warstwy ograniczającej utratę wody. Roślina zaczęła szybciej wysychać. Której struktury zabrakło?",
    "options": [
      "kutykuli",
      "łyka",
      "bielma",
      "zalążni",
      "stożka wzrostu",
      "miękiszu spichrzowego"
    ],
    "answer": 0,
    "explanation": "Kutykula jest nieprzepuszczalną dla wody warstwą na skórce i ogranicza parowanie."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Drewno przewodzi __________ i __________, natomiast łyko przewodzi __________.",
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
        "soli mineralnych"
      ],
      [
        "substancje pokarmowe",
        "cukry",
        "cukier"
      ]
    ],
    "explanation": "Drewno transportuje wodę z solami mineralnymi, a łyko substancje pokarmowe powstałe w fotosyntezie."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zestawienia, w których budowa tkanki poprawnie wyjaśnia jej funkcję.",
    "options": [
      "Brak ścian poprzecznych w drewnie ułatwia przepływ wody",
      "Sita w ścianach komórek łyka umożliwiają transport substancji pokarmowych",
      "Grube ściany komórek wzmacniających zwiększają wytrzymałość organów",
      "Duże wakuole miękiszu uniemożliwiają magazynowanie",
      "Martwe komórki korka tworzą warstwę ochronną",
      "Intensywne podziały komórek twórczych zatrzymują wzrost"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Właściwości komórek drewna, łyka, tkanek wzmacniających i korka są przystosowaniem do ich funkcji."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do drogi wody od gleby do liścia: włośnik, korzeń, drewno, łyko.",
    "options": null,
    "answer": "łyko",
    "explanation": "Woda jest pobierana przez włośniki, przechodzi przez korzeń i jest transportowana drewnem. Łyko przewodzi substancje pokarmowe."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z typem modyfikacji i jej funkcją.",
    "options": null,
    "left": [
      "marchew",
      "storczyk",
      "bluszcz",
      "kukurydza",
      "jemioła"
    ],
    "right": [
      "korzeń spichrzowy magazynujący substancje",
      "korzeń powietrzny pobierający parę wodną",
      "korzeń czepny mocujący do podpory",
      "korzeń podporowy stabilizujący roślinę",
      "ssawka pobierająca wodę i sole z żywiciela"
    ],
    "answer": {
      "marchew": "korzeń spichrzowy magazynujący substancje",
      "storczyk": "korzeń powietrzny pobierający parę wodną",
      "bluszcz": "korzeń czepny mocujący do podpory",
      "kukurydza": "korzeń podporowy stabilizujący roślinę",
      "jemioła": "ssawka pobierająca wodę i sole z żywiciela"
    },
    "explanation": "Każdy przykład łączy konkretną roślinę, typ modyfikacji korzenia i jej znaczenie.",
    "image": "r04_modyfikacje_korzeni.jpg"
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Roślina rośnie na gałęzi innego drzewa i pobiera z niego wodę oraz sole mineralne za pomocą korzeni wrastających w tkanki żywiciela. Jak nazywają się te przekształcone korzenie?",
    "options": [
      "ssawki",
      "korzenie powietrzne",
      "korzenie podporowe",
      "korzenie boczne",
      "włośniki",
      "rozłogi"
    ],
    "answer": 0,
    "explanation": "U jemioły korzenie są przekształcone w ssawki wrastające w gałęzie drzewa żywiciela."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż drogę prowadzącą od powstania pyłku do powstania owocu.",
    "options": null,
    "items": [
      "zalążnia przekształca się w owoc",
      "pyłek powstaje w pylniku",
      "komórka plemnikowa łączy się z komórką jajową",
      "ziarno pyłku trafia na znamię słupka"
    ],
    "answer": [
      "pyłek powstaje w pylniku",
      "ziarno pyłku trafia na znamię słupka",
      "komórka plemnikowa łączy się z komórką jajową",
      "zalążnia przekształca się w owoc"
    ],
    "explanation": "Pyłek powstaje w pylniku, potem dochodzi do zapylenia i zapłodnienia, a po nim zalążnia rozwija się w owoc."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po zapłodnieniu zalążek przekształca się w __________, a zalążnia w __________. Materiałem zapasowym dla zarodka jest __________.",
    "options": null,
    "answer": [
      "nasiono",
      "owoc",
      "bielmo"
    ],
    "altAnswers": [
      [
        "nasiono",
        "nasiona"
      ],
      [
        "owoc",
        "owocu"
      ],
      [
        "bielmo",
        "bielma"
      ]
    ],
    "explanation": "Zalążek daje początek nasieniu, zalążnia owocowi, a bielmo jest materiałem zapasowym dla zarodka."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby rozsiewania nasion do odpowiednich czynników.",
    "options": null,
    "items": [
      "aparat lotny mniszka",
      "mięsista owocnia czereśni",
      "haczyki owoców ostu",
      "pękający strąk fasoli"
    ],
    "categories": [
      "wiatr",
      "zwierzęta",
      "samoczynne wyrzucanie"
    ],
    "answer": {
      "wiatr": [
        "aparat lotny mniszka"
      ],
      "zwierzęta": [
        "mięsista owocnia czereśni",
        "haczyki owoców ostu"
      ],
      "samoczynne wyrzucanie": [
        "pękający strąk fasoli"
      ]
    },
    "explanation": "Wiatr unosi lekkie owoce, zwierzęta zjadają lub przenoszą owoce, a suche strąki mogą samoczynnie wyrzucać nasiona.",
    "image": "r04_rozsiewanie_nasion.jpg"
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W kwiacie usunięto pylniki, ale pozostawiono słupek i okwiat. Czego ten kwiat nie będzie już wytwarzał?",
    "options": [
      "pyłku",
      "nektaru",
      "zalążków",
      "płatków korony",
      "działek kielicha",
      "dna kwiatowego"
    ],
    "answer": 0,
    "explanation": "W pylnikach powstaje pyłek zawierający komórki plemnikowe.",
    "image": "r04_budowa_kwiatu.jpg"
  }
];

const KID_PROMPTS = {
  "R04_TKA_01": "Co to jest tkanka?",
  "R04_FUN_08": "Podziel cechy na drewno i łyko.",
  "R04_ORG_05": "Ułóż części korzenia od czubka ku górze.",
  "R04_MOD_06": "Podziel modyfikacje na korzeń, łodygę i liść.",
  "R04_KNO_03": "Połącz część kwiatu z jej zadaniem.",
  "R04_KNO_05": "Ułóż kolejno zapylenie, zapłodnienie i rozwój owocu.",
  "R04_HARD_04": "Uzupełnij, co przewodzi drewno i co przewodzi łyko.",
  "R04_HARD_11": "Podziel przykłady według sposobu rozsiewania nasion."
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Tkanki i organy roślinne",
  icon: "🌿",
  sectionOrder: [
    "Tkanki roślinne",
    "Budowa i funkcje tkanek",
    "Korzeń, łodyga i liść",
    "Modyfikacje organów",
    "Kwiat, nasiono i owoc"
  ],
  sectionIcons: {
    "Tkanki roślinne": "🧫",
    "Budowa i funkcje tkanek": "🔬",
    "Korzeń, łodyga i liść": "🌱",
    "Modyfikacje organów": "🧩",
    "Kwiat, nasiono i owoc": "🌸"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
