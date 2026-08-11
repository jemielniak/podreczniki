// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SAS  = Czasy saskie
//   ELE  = Ostatnia elekcja i I rozbiór
//   REF  = Reformy stanisławowskie
//   KON  = Sejm Wielki i Konstytucja 3 maja
//   ROZ  = Wojny i rozbiory końcowe
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_SAS_01",
    "section": "Czasy saskie",
    "type": "single_choice",
    "prompt": "Z jaką dynastią wiązało się panowanie Augusta II Mocnego i Augusta III w Rzeczypospolitej?",
    "options": [
      "Wazowie",
      "Wettinowie",
      "Jagiellonowie",
      "Habsburgowie",
      "Czartoryscy",
      "Burbonowie"
    ],
    "answer": 1,
    "image": "r05_unia_polsko_saska.jpg",
    "explanation": "August II Mocny i August III pochodzili z saskiej dynastii Wettinów, dlatego ich panowanie nazywa się czasami saskimi."
  },
  {
    "id": "R05_SAS_02",
    "section": "Czasy saskie",
    "type": "true_false",
    "prompt": "Unia polsko-saska była unią personalną, ponieważ Rzeczpospolita i Saksonia miały tego samego władcę.",
    "options": null,
    "answer": true,
    "explanation": "Po wyborze Wettinów na tron polski Rzeczpospolita została połączona z Saksonią osobą monarchy, czyli unią personalną."
  },
  {
    "id": "R05_SAS_03",
    "section": "Czasy saskie",
    "type": "fill_in",
    "prompt": "Wojna północna trwała w latach __________, a jej głównymi przeciwnikami w regionie były Rosja i __________.",
    "options": null,
    "answer": [
      "1700-1721",
      "Szwecja"
    ],
    "altAnswers": [
      [
        "1700-1721",
        "1700 - 1721"
      ],
      [
        "Szwecja",
        "Szwecji"
      ]
    ],
    "explanation": "Wojna północna trwała w latach 1700-1721 i toczyła się przede wszystkim między Rosją a Szwecją."
  },
  {
    "id": "R05_SAS_04",
    "section": "Czasy saskie",
    "type": "multi_select",
    "prompt": "Zaznacz skutki lub okoliczności wojny północnej dotyczące Rzeczypospolitej.",
    "options": [
      "August II sprzymierzył się z Rosją jako władca Saksonii",
      "Ziemie państwa polsko-litewskiego stały się terenem działań wojennych",
      "Szwedzi zajęli część ziem Rzeczypospolitej",
      "Rzeczpospolita samodzielnie zdobyła Inflanty",
      "Wojna natychmiast wzmocniła sejm i armię"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "August II wszedł do wojny jako elektor Saksonii, lecz działania wojenne objęły neutralne ziemie Rzeczypospolitej, a wojska szwedzkie zajęły część jej obszaru."
  },
  {
    "id": "R05_SAS_05",
    "section": "Czasy saskie",
    "type": "match",
    "prompt": "Połącz osobę lub wydarzenie z właściwą informacją.",
    "options": null,
    "left": [
      "August II Mocny",
      "Stanisław Leszczyński",
      "Bitwa pod Połtawą",
      "Sejm Niemy"
    ],
    "right": [
      "król z dynastii Wettinów",
      "król popierany przez Szwedów",
      "klęska Szwecji w 1709 roku",
      "obrady pod presją Rosji w 1717 roku"
    ],
    "answer": {
      "August II Mocny": "król z dynastii Wettinów",
      "Stanisław Leszczyński": "król popierany przez Szwedów",
      "Bitwa pod Połtawą": "klęska Szwecji w 1709 roku",
      "Sejm Niemy": "obrady pod presją Rosji w 1717 roku"
    },
    "explanation": "Te połączenia porządkują najważniejsze postacie i wydarzenia z początku czasów saskich."
  },
  {
    "id": "R05_SAS_06",
    "section": "Czasy saskie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Rosja, Prusy, Austria, Szwecja.",
    "options": null,
    "answer": "Szwecja",
    "explanation": "Rosja, Prusy i Austria występowały jako ościenne mocarstwa ingerujące w reformy Rzeczypospolitej, a Szwecja była głównym przeciwnikiem Rosji w wojnie północnej."
  },
  {
    "id": "R05_SAS_07",
    "section": "Czasy saskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Sejm Niemy",
      "bitwa pod Połtawą",
      "wybór Stanisława Leszczyńskiego popieranego przez Szwedów",
      "traktat trzech czarnych orłów"
    ],
    "answer": [
      "wybór Stanisława Leszczyńskiego popieranego przez Szwedów",
      "bitwa pod Połtawą",
      "Sejm Niemy",
      "traktat trzech czarnych orłów"
    ],
    "explanation": "Leszczyńskiego wybrano w 1704 roku, bitwa pod Połtawą była w 1709 roku, Sejm Niemy odbył się w 1717 roku, a traktat trzech czarnych orłów zawarto w 1732 roku."
  },
  {
    "id": "R05_SAS_08",
    "section": "Czasy saskie",
    "type": "scenario",
    "prompt": "Jesteś posłem w 1717 roku. Marszałek odczytuje postanowienia, a prawie nikt nie może zabierać głosu, aby nie zerwać obrad. Jak nazwano ten sejm?",
    "options": [
      "Sejm Wielki",
      "Sejm Niemy",
      "sejm grodzieński",
      "sejm rozbiorowy",
      "sejm elekcyjny",
      "sejm konwokacyjny"
    ],
    "answer": 1,
    "image": "r05_sejm_niemy.jpg",
    "explanation": "Sejm z 1717 roku nazwano Niemym, ponieważ w obawie przed liberum veto prawie nikomu nie wolno było przemawiać."
  },
  {
    "id": "R05_SAS_09",
    "section": "Czasy saskie",
    "type": "sort",
    "prompt": "Przyporządkuj reformatorów i pisma do właściwych propozycji.",
    "options": null,
    "items": [
      "Głos wolny wolność ubezpieczający",
      "O skutecznym rad sposobie",
      "wolność osobista chłopów",
      "zniesienie liberum veto"
    ],
    "categories": [
      "Stanisław Leszczyński",
      "Stanisław Konarski"
    ],
    "answer": {
      "Stanisław Leszczyński": [
        "Głos wolny wolność ubezpieczający",
        "wolność osobista chłopów"
      ],
      "Stanisław Konarski": [
        "O skutecznym rad sposobie",
        "zniesienie liberum veto"
      ]
    },
    "explanation": "Leszczyńskiemu przypisywano broszurę Głos wolny wolność ubezpieczający, a Konarski napisał O skutecznym rad sposobie i postulował zniesienie liberum veto."
  },
  {
    "id": "R05_SAS_10",
    "section": "Czasy saskie",
    "type": "riddle",
    "prompt": "Jak nazywała się nowoczesna szkoła dla młodzieży szlacheckiej założona w Warszawie przez Stanisława Konarskiego?",
    "options": null,
    "answer": "Collegium Nobilium",
    "altAnswers": [
      "Collegium Nobilium",
      "kolegium nobilium"
    ],
    "explanation": "W latach 40. XVIII wieku Stanisław Konarski założył w Warszawie Collegium Nobilium."
  },
  {
    "id": "R05_SAS_11",
    "section": "Czasy saskie",
    "type": "single_choice",
    "prompt": "Co było największą bolączką życia politycznego za panowania Augusta III Sasa?",
    "options": [
      "zrywanie sejmów",
      "zbyt częste koronacje",
      "brak wolnej elekcji",
      "zbyt silna armia zawodowa",
      "nadmiar podatków mieszczańskich",
      "likwidacja magnaterii"
    ],
    "answer": 0,
    "explanation": "Za panowania Augusta III największą bolączką było zrywanie sejmów; z czternastu zwołanych do skutku doszedł tylko jeden."
  },
  {
    "id": "R05_SAS_12",
    "section": "Czasy saskie",
    "type": "true_false",
    "prompt": "W czasach saskich nietolerancja religijna dawała Prusom i Rosji pretekst do ingerencji w sprawy polskie.",
    "options": null,
    "answer": true,
    "explanation": "Prusy i Rosja wykorzystywały hasło obrony protestantów i prawosławnych jako pretekst do silniejszego mieszania się w sprawy Rzeczypospolitej."
  },
  {
    "id": "R05_ELE_01",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "single_choice",
    "prompt": "Kogo szlachta wybrała na króla w 1764 roku?",
    "options": [
      "Stanisława Augusta Poniatowskiego",
      "Stanisława Leszczyńskiego",
      "Augusta III Sasa",
      "Tadeusza Kościuszkę",
      "Józefa Poniatowskiego",
      "Kazimierza Pułaskiego"
    ],
    "answer": 0,
    "image": "r05_stanislaw_august_koronacyjny.jpg",
    "explanation": "Po śmierci Augusta III w 1764 roku wybrano Stanisława Poniatowskiego, który podczas koronacji przyjął imię Stanisława Augusta."
  },
  {
    "id": "R05_ELE_02",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "riddle",
    "prompt": "Jak nazywało się stronnictwo Czartoryskich dążące do reform przy poparciu Rosji?",
    "options": null,
    "answer": "Familia",
    "altAnswers": [
      "Familia",
      "familią",
      "stronnictwo Familia"
    ],
    "explanation": "Czartoryscy tworzyli stronnictwo polityczne zwane Familią, ponieważ było oparte na magnackim rodzie."
  },
  {
    "id": "R05_ELE_03",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "multi_select",
    "prompt": "Zaznacz reformy pierwszych lat panowania Stanisława Augusta.",
    "options": [
      "głosowanie większością w sprawach skarbu i gospodarki",
      "cło generalne obejmujące także szlachtę i duchowieństwo",
      "założenie Szkoły Rycerskiej",
      "natychmiastowe zniesienie monarchii",
      "III rozbiór Rzeczypospolitej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W pierwszych latach wprowadzono większościowe głosowanie w wybranych sprawach, uchwalono cło generalne i założono Szkołę Rycerską."
  },
  {
    "id": "R05_ELE_04",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "true_false",
    "prompt": "Sejm konwokacyjny w 1764 roku był skonfederowany, więc nie można go było zerwać liberum veto.",
    "options": null,
    "answer": true,
    "explanation": "Skonfederowanie sejmu oznaczało, że uchwały podejmowano większością głosów i nie można było zerwać obrad."
  },
  {
    "id": "R05_ELE_05",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "prawa kardynalne",
      "Szkoła Rycerska",
      "konfederacja barska",
      "Tadeusz Rejtan"
    ],
    "right": [
      "zasady uznane za podstawę złotej wolności",
      "uczelnia dla przyszłych oficerów i urzędników",
      "zbrojny związek szlachty zawiązany w 1768 roku",
      "poseł protestujący przeciw zatwierdzeniu rozbioru"
    ],
    "answer": {
      "prawa kardynalne": "zasady uznane za podstawę złotej wolności",
      "Szkoła Rycerska": "uczelnia dla przyszłych oficerów i urzędników",
      "konfederacja barska": "zbrojny związek szlachty zawiązany w 1768 roku",
      "Tadeusz Rejtan": "poseł protestujący przeciw zatwierdzeniu rozbioru"
    },
    "image": "r05_szkola_rycerska.jpg",
    "explanation": "Każde z pojęć odnosi się do wydarzeń od elekcji Stanisława Augusta do zatwierdzenia I rozbioru."
  },
  {
    "id": "R05_ELE_06",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "fill_in",
    "prompt": "Konfederację barską zawiązano w roku __________ w miasteczku __________ na Ukrainie.",
    "options": null,
    "answer": [
      "1768",
      "Bar"
    ],
    "altAnswers": [
      [
        "1768",
        "1768 roku"
      ],
      [
        "Bar",
        "Barze"
      ]
    ],
    "image": "r05_konfederat_barski.jpg",
    "explanation": "Konfederacja barska powstała na początku 1768 roku w Barze na Ukrainie."
  },
  {
    "id": "R05_ELE_07",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wolna elekcja, liberum veto, prawo wypowiadania królowi posłuszeństwa, cło generalne.",
    "options": null,
    "answer": "cło generalne",
    "explanation": "Wolna elekcja, liberum veto i prawo wypowiadania posłuszeństwa należały do praw kardynalnych, a cło generalne było reformą finansową."
  },
  {
    "id": "R05_ELE_08",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "I rozbiór Rzeczypospolitej",
      "zawiązanie konfederacji barskiej",
      "elekcja Stanisława Augusta Poniatowskiego",
      "sejm zatwierdzający I rozbiór"
    ],
    "answer": [
      "elekcja Stanisława Augusta Poniatowskiego",
      "zawiązanie konfederacji barskiej",
      "I rozbiór Rzeczypospolitej",
      "sejm zatwierdzający I rozbiór"
    ],
    "explanation": "Elekcja odbyła się w 1764 roku, konfederacja barska zaczęła się w 1768 roku, I rozbiór nastąpił w 1772 roku, a sejm zatwierdził go w roku następnym."
  },
  {
    "id": "R05_ELE_09",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "scenario",
    "prompt": "Na sejmie poseł rzuca się pod nogi wychodzących z sali posłów, aby nie dopuścić do zatwierdzenia rozbioru. Kto stał się symbolem takiego protestu?",
    "options": [
      "Tadeusz Rejtan",
      "Kazimierz Pułaski",
      "Hugo Kołłątaj",
      "Stanisław Małachowski",
      "Seweryn Rzewuski",
      "Wojciech Bogusławski"
    ],
    "answer": 0,
    "image": "r05_rejtan_sejm_rozbiorowy.jpg",
    "explanation": "Tadeusz Rejtan protestował przeciw uchwale zatwierdzającej I rozbiór, m.in. rzucając się pod nogi opuszczających salę posłów."
  },
  {
    "id": "R05_ELE_10",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do zaborcy z I rozbioru.",
    "options": null,
    "items": [
      "Prusy Królewskie bez Gdańska i Torunia",
      "Warmia",
      "zachodnia część Ukrainy ze Lwowem",
      "część ziem białoruskich"
    ],
    "categories": [
      "Prusy",
      "Austria",
      "Rosja"
    ],
    "answer": {
      "Prusy": [
        "Prusy Królewskie bez Gdańska i Torunia",
        "Warmia"
      ],
      "Austria": [
        "zachodnia część Ukrainy ze Lwowem"
      ],
      "Rosja": [
        "część ziem białoruskich"
      ]
    },
    "explanation": "W I rozbiorze Prusy zajęły m.in. Prusy Królewskie bez Gdańska i Torunia oraz Warmię, Austria ziemie z Lwowem, a Rosja część ziem białoruskich."
  },
  {
    "id": "R05_ELE_11",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "single_choice",
    "prompt": "Jaki procent dotychczasowego obszaru państwa utraciła Rzeczpospolita w I rozbiorze?",
    "options": [
      "około 10%",
      "około 20%",
      "około 30%",
      "około 50%",
      "około 70%",
      "prawie cały obszar"
    ],
    "answer": 2,
    "explanation": "Na mocy traktatu z 1772 roku Rzeczpospolita utraciła około 30% dotychczasowego obszaru i 35% ludności."
  },
  {
    "id": "R05_ELE_12",
    "section": "Ostatnia elekcja i I rozbiór",
    "type": "true_false",
    "prompt": "Konfederaci barscy uzyskali niewielkie wsparcie od Francji i Turcji, ale ich działania militarne były prowadzone nieudolnie.",
    "options": null,
    "answer": true,
    "explanation": "Konfederaci otrzymali niewielką pomoc od Francji i Turcji, lecz prowadzili działania nieudolnie."
  },
  {
    "id": "R05_REF_01",
    "section": "Reformy stanisławowskie",
    "type": "single_choice",
    "prompt": "Jaką instytucję powołano w 1773 roku jako pierwsze na świecie ministerstwo oświaty?",
    "options": [
      "Komisję Edukacji Narodowej",
      "Radę Nieustającą",
      "Szkołę Rycerską",
      "Towarzystwo do Ksiąg Elementarnych",
      "Straż Praw",
      "Collegium Nobilium"
    ],
    "answer": 0,
    "image": "r05_komisja_edukacji_narodowej.jpg",
    "explanation": "W 1773 roku sejm rozbiorowy powołał Komisję Edukacji Narodowej, określoną jako pierwsze na świecie ministerstwo oświaty."
  },
  {
    "id": "R05_REF_02",
    "section": "Reformy stanisławowskie",
    "type": "multi_select",
    "prompt": "Zaznacz działania Komisji Edukacji Narodowej.",
    "options": [
      "odnowienie uniwersytetów w Krakowie i Wilnie",
      "tworzenie nowego typu szkół podstawowych i średnich",
      "wprowadzenie lekcji w szkołach średnich po polsku zamiast po łacinie",
      "wydanie aktu konfederacji targowickiej",
      "powołanie obozu hetmańskiego"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "KEN zreformowała szkolnictwo: odnowiła uniwersytety, tworzyła szkoły podstawowe i średnie oraz upowszechniała język polski w szkołach średnich."
  },
  {
    "id": "R05_REF_03",
    "section": "Reformy stanisławowskie",
    "type": "fill_in",
    "prompt": "Towarzystwo do Ksiąg Elementarnych opracowywało nowe __________ szkolne i wydawało nowoczesne __________.",
    "options": null,
    "answer": [
      "programy",
      "podręczniki"
    ],
    "altAnswers": [
      [
        "programy",
        "programy szkolne"
      ],
      [
        "podręczniki",
        "podręczniki szkolne"
      ]
    ],
    "explanation": "Towarzystwo do Ksiąg Elementarnych przygotowywało programy szkolne i podręczniki w duchu oświeceniowym."
  },
  {
    "id": "R05_REF_04",
    "section": "Reformy stanisławowskie",
    "type": "riddle",
    "prompt": "Jak nazywała się instytucja określona jako pierwszy w dziejach Polski rząd?",
    "options": null,
    "answer": "Rada Nieustająca",
    "altAnswers": [
      "Rada Nieustająca",
      "Radę Nieustającą"
    ],
    "explanation": "Rada Nieustająca była najwyższym organem władzy wykonawczej odpowiedzialnym przed sejmem."
  },
  {
    "id": "R05_REF_05",
    "section": "Reformy stanisławowskie",
    "type": "match",
    "prompt": "Połącz reformę lub zjawisko z jej opisem.",
    "options": null,
    "left": [
      "czynsz",
      "manufaktura w Kozienicach",
      "komisje dobrego porządku",
      "Teatr Narodowy"
    ],
    "right": [
      "regularna opłata pieniężna zamiast pańszczyzny",
      "zakład produkujący broń palną",
      "instytucje dbające o porządek w miastach królewskich",
      "scena założona dzięki mecenatowi króla"
    ],
    "answer": {
      "czynsz": "regularna opłata pieniężna zamiast pańszczyzny",
      "manufaktura w Kozienicach": "zakład produkujący broń palną",
      "komisje dobrego porządku": "instytucje dbające o porządek w miastach królewskich",
      "Teatr Narodowy": "scena założona dzięki mecenatowi króla"
    },
    "explanation": "Reformy stanisławowskie obejmowały gospodarkę, sytuację chłopów, miasta królewskie i kulturę."
  },
  {
    "id": "R05_REF_06",
    "section": "Reformy stanisławowskie",
    "type": "true_false",
    "prompt": "Rada Nieustająca miała pięć departamentów, m.in. skarbu, wojska i policji.",
    "options": null,
    "answer": true,
    "explanation": "Rada Nieustająca została podzielona na departamenty spraw zagranicznych, sprawiedliwości, skarbu, wojska i policji."
  },
  {
    "id": "R05_REF_07",
    "section": "Reformy stanisławowskie",
    "type": "scenario",
    "prompt": "Latem król zaprasza artystów, uczonych i literatów do Łazienek Królewskich na spotkania zwane obiadami czwartkowymi. Który władca był mecenasem tych spotkań?",
    "options": [
      "Stanisław August Poniatowski",
      "August II Mocny",
      "August III Sas",
      "Stanisław Leszczyński",
      "Jan III Sobieski",
      "Henryk Walezy"
    ],
    "answer": 0,
    "image": "r05_lazienki_krolewskie.jpg",
    "explanation": "Obiady czwartkowe organizował Stanisław August Poniatowski, a jego mecenat wspierał rozwój kultury i literatury."
  },
  {
    "id": "R05_REF_08",
    "section": "Reformy stanisławowskie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Łazienki Królewskie, Zamek Królewski, Teatr Narodowy, Sejm Niemy.",
    "options": null,
    "answer": "Sejm Niemy",
    "explanation": "Łazienki Królewskie, Zamek Królewski i Teatr Narodowy wiążą się z kulturą epoki stanisławowskiej, a Sejm Niemy należy do czasów Augusta II."
  },
  {
    "id": "R05_REF_09",
    "section": "Reformy stanisławowskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "powołanie Komisji Edukacji Narodowej",
      "I rozbiór Rzeczypospolitej",
      "obrady Sejmu Wielkiego",
      "założenie Szkoły Rycerskiej"
    ],
    "answer": [
      "założenie Szkoły Rycerskiej",
      "I rozbiór Rzeczypospolitej",
      "powołanie Komisji Edukacji Narodowej",
      "obrady Sejmu Wielkiego"
    ],
    "explanation": "Szkoła Rycerska powstała na początku panowania Stanisława Augusta, I rozbiór był w 1772 roku, KEN w 1773 roku, a Sejm Wielki obradował w latach 1788-1792."
  },
  {
    "id": "R05_REF_10",
    "section": "Reformy stanisławowskie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do dziedziny reform stanisławowskich.",
    "options": null,
    "items": [
      "Komisja Edukacji Narodowej",
      "Towarzystwo do Ksiąg Elementarnych",
      "czynsz zamiast pańszczyzny",
      "manufaktura broni w Kozienicach",
      "Teatr Narodowy",
      "obiady czwartkowe"
    ],
    "categories": [
      "edukacja",
      "gospodarka",
      "kultura"
    ],
    "answer": {
      "edukacja": [
        "Komisja Edukacji Narodowej",
        "Towarzystwo do Ksiąg Elementarnych"
      ],
      "gospodarka": [
        "czynsz zamiast pańszczyzny",
        "manufaktura broni w Kozienicach"
      ],
      "kultura": [
        "Teatr Narodowy",
        "obiady czwartkowe"
      ]
    },
    "explanation": "Reformy stanisławowskie obejmowały równocześnie szkoły, gospodarkę i życie kulturalne."
  },
  {
    "id": "R05_REF_11",
    "section": "Reformy stanisławowskie",
    "type": "single_choice",
    "prompt": "Jaką liczbę mieszkańców przekroczyła Warszawa pod koniec XVIII wieku?",
    "options": [
      "10 tys.",
      "30 tys.",
      "50 tys.",
      "ponad 100 tys.",
      "około 300 tys.",
      "ponad milion"
    ],
    "answer": 3,
    "explanation": "Pod koniec XVIII wieku Warszawa liczyła ponad 100 tysięcy mieszkańców i należała do większych miast europejskich."
  },
  {
    "id": "R05_REF_12",
    "section": "Reformy stanisławowskie",
    "type": "riddle",
    "prompt": "Jak nazywano Wojciecha Bogusławskiego w związku z jego zasługami dla Teatru Narodowego?",
    "options": null,
    "answer": "Ojciec sceny polskiej",
    "altAnswers": [
      "Ojciec sceny polskiej",
      "ojciec sceny polskiej"
    ],
    "explanation": "Wojciech Bogusławski, wieloletni dyrektor Teatru Narodowego, jest nazwany Ojcem sceny polskiej."
  },
  {
    "id": "R05_KON_01",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "W jakich latach obradował Sejm Wielki?",
    "options": [
      "1764-1768",
      "1772-1773",
      "1773-1775",
      "1788-1792",
      "1792-1793",
      "1794-1795"
    ],
    "answer": 3,
    "explanation": "Sejm Wielki, zwany też Czteroletnim, obradował w latach 1788-1792."
  },
  {
    "id": "R05_KON_02",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "true_false",
    "prompt": "Sejm Wielki był skonfederowany, dlatego nie obowiązywało na nim liberum veto.",
    "options": null,
    "answer": true,
    "explanation": "Podobnie jak wcześniejsze sejmy reformatorskie został skonfederowany, a uchwały podejmowano większością głosów."
  },
  {
    "id": "R05_KON_03",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "fill_in",
    "prompt": "Marszałkiem Sejmu Wielkiego został __________, jeden z przywódców stronnictwa reform.",
    "options": null,
    "answer": [
      "Stanisław Małachowski"
    ],
    "altAnswers": [
      [
        "Stanisław Małachowski",
        "Stanisława Małachowskiego",
        "Małachowski"
      ]
    ],
    "explanation": "Stanisław Małachowski był marszałkiem Sejmu Wielkiego i współtwórcą Konstytucji 3 maja."
  },
  {
    "id": "R05_KON_04",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "multi_select",
    "prompt": "Zaznacz osoby jako ważne przy przygotowaniu Konstytucji 3 maja.",
    "options": [
      "Stanisław August Poniatowski",
      "Stanisław Małachowski",
      "Ignacy Potocki",
      "Hugo Kołłątaj",
      "August II Mocny",
      "Jan Kiliński"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W przygotowaniu konstytucji największą rolę odegrali Stanisław August, Stanisław Małachowski, Ignacy Potocki i Hugo Kołłątaj."
  },
  {
    "id": "R05_KON_05",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "match",
    "prompt": "Połącz stronnictwo lub postać z właściwą informacją.",
    "options": null,
    "left": [
      "stronnictwo reform",
      "obóz hetmański",
      "Seweryn Rzewuski",
      "Ignacy Potocki"
    ],
    "right": [
      "patriotyczni zwolennicy zmian",
      "przeciwnicy reform i obrońcy dawnego ustroju",
      "hetman sprzeciwiający się reformom",
      "współtwórca Konstytucji 3 maja"
    ],
    "answer": {
      "stronnictwo reform": "patriotyczni zwolennicy zmian",
      "obóz hetmański": "przeciwnicy reform i obrońcy dawnego ustroju",
      "Seweryn Rzewuski": "hetman sprzeciwiający się reformom",
      "Ignacy Potocki": "współtwórca Konstytucji 3 maja"
    },
    "explanation": "Podczas Sejmu Wielkiego ukształtowały się przeciwne obozy: reformatorski i hetmański."
  },
  {
    "id": "R05_KON_06",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Stanisław Małachowski, Ignacy Potocki, Hugo Kołłątaj, Seweryn Rzewuski.",
    "options": null,
    "answer": "Seweryn Rzewuski",
    "explanation": "Małachowski, Potocki i Kołłątaj należeli do twórców lub przywódców reform, a Seweryn Rzewuski był przeciwnikiem reform."
  },
  {
    "id": "R05_KON_07",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "scenario",
    "prompt": "Rosja jest zajęta wojną z Turcją, a Prusy są z nią skłócone. Reformatorzy wykorzystują tę sytuację do zwołania sejmu w Warszawie. Jaki sejm rozpoczął wtedy obrady?",
    "options": [
      "Sejm Wielki",
      "Sejm Niemy",
      "sejm grodzieński",
      "sejm rozbiorowy",
      "sejm koronacyjny",
      "sejm elekcyjny"
    ],
    "answer": 0,
    "explanation": "Sprzyjająca sytuacja międzynarodowa pozwoliła w 1788 roku zwołać Sejm Wielki."
  },
  {
    "id": "R05_KON_08",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "single_choice",
    "prompt": "Które stwierdzenie o Konstytucji 3 maja jest prawdziwe?",
    "options": [
      "Była pierwszą konstytucją uchwaloną w Europie",
      "Była pierwszą konstytucją na świecie",
      "Została uchwalona po III rozbiorze",
      "Przywróciła liberum veto",
      "Znosiła wszystkie stany społeczne",
      "Została narzucona przez Rosję"
    ],
    "answer": 0,
    "image": "r05_uchwalenie_konstytucji_3_maja.jpg",
    "explanation": "Konstytucja 3 maja była pierwszą konstytucją w Europie i drugą na świecie, po konstytucji Stanów Zjednoczonych."
  },
  {
    "id": "R05_KON_09",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "multi_select",
    "prompt": "Zaznacz najważniejsze postanowienia Konstytucji 3 maja.",
    "options": [
      "zniesienie liberum veto",
      "zniesienie wolnej elekcji",
      "wprowadzenie monarchii dziedzicznej",
      "powołanie Straży Praw",
      "przywrócenie Sejmu Niemego",
      "oddanie władzy ambasadorowi rosyjskiemu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konstytucja znosiła liberum veto i wolną elekcję, wprowadzała monarchię dziedziczną oraz tworzyła Straż Praw."
  },
  {
    "id": "R05_KON_10",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do władz według trójpodziału z Konstytucji 3 maja.",
    "options": null,
    "items": [
      "sejm",
      "król i Straż Praw",
      "niezależne sądy"
    ],
    "categories": [
      "władza ustawodawcza",
      "władza wykonawcza",
      "władza sądownicza"
    ],
    "answer": {
      "władza ustawodawcza": [
        "sejm"
      ],
      "władza wykonawcza": [
        "król i Straż Praw"
      ],
      "władza sądownicza": [
        "niezależne sądy"
      ]
    },
    "explanation": "Konstytucja 3 maja wprowadzała trójpodział władz: sejm stanowił prawo, król i Straż Praw wykonywali władzę, a sądy miały być niezależne."
  },
  {
    "id": "R05_KON_11",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "uchwalenie Konstytucji 3 maja",
      "zwołanie Sejmu Wielkiego",
      "zniesienie Rady Nieustającej",
      "utworzenie Zgromadzenia Przyjaciół Konstytucji"
    ],
    "answer": [
      "zwołanie Sejmu Wielkiego",
      "zniesienie Rady Nieustającej",
      "utworzenie Zgromadzenia Przyjaciół Konstytucji",
      "uchwalenie Konstytucji 3 maja"
    ],
    "image": "r05_uchwalenie_konstytucji_3_maja.jpg",
    "explanation": "Sejm Wielki rozpoczął obrady w 1788 roku, następnie reformatorzy znosili dawne narzędzia zależności i przygotowali organizację wspierającą konstytucję, którą uchwalono 3 maja 1791 roku."
  },
  {
    "id": "R05_KON_12",
    "section": "Sejm Wielki i Konstytucja 3 maja",
    "type": "riddle",
    "prompt": "Jak nazywał się najwyższy organ władzy wykonawczej utworzony przez Konstytucję 3 maja?",
    "options": null,
    "answer": "Straż Praw",
    "altAnswers": [
      "Straż Praw",
      "Straz Praw",
      "Strażą Praw"
    ],
    "explanation": "Konstytucja 3 maja powoływała Straż Praw, złożoną z króla i odpowiedzialnych przed sejmem ministrów."
  },
  {
    "id": "R05_ROZ_01",
    "section": "Wojny i rozbiory końcowe",
    "type": "single_choice",
    "prompt": "Jak nazywała się konfederacja zawiązana przez przeciwników Konstytucji 3 maja w 1792 roku?",
    "options": [
      "targowicka",
      "barska",
      "warszawska",
      "grodzieńska",
      "połaniecka",
      "radomska"
    ],
    "answer": 0,
    "explanation": "Seweryn Rzewuski i Ksawery Branicki zawiązali konfederację targowicką, która dała Rosji pretekst do interwencji."
  },
  {
    "id": "R05_ROZ_02",
    "section": "Wojny i rozbiory końcowe",
    "type": "scenario",
    "prompt": "Po zwycięstwie pod Zieleńcami król ustanawia najwyższe polskie odznaczenie wojskowe. Jak nazywa się to odznaczenie?",
    "options": [
      "Order Virtuti Militari",
      "Order Orła Białego",
      "Krzyż Walecznych",
      "Medal Komisji Edukacji Narodowej",
      "Krzyż Niepodległości",
      "Ryngraf barski"
    ],
    "answer": 0,
    "image": "r05_order_virtuti_militari.jpg",
    "explanation": "Po bitwie pod Zieleńcami Stanisław August ustanowił Order Virtuti Militari, najwyższe polskie odznaczenie wojskowe."
  },
  {
    "id": "R05_ROZ_03",
    "section": "Wojny i rozbiory końcowe",
    "type": "multi_select",
    "prompt": "Zaznacz osoby, które po przystąpieniu króla do konfederacji targowickiej opuściły kraj na znak protestu.",
    "options": [
      "Tadeusz Kościuszko",
      "Ignacy Potocki",
      "Stanisław Małachowski",
      "Hugo Kołłątaj",
      "August III Sas",
      "Tadeusz Rejtan"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wymienia się Kościuszkę, Potockiego, Małachowskiego i Kołłątaja wśród obrońców reform, którzy opuścili kraj."
  },
  {
    "id": "R05_ROZ_04",
    "section": "Wojny i rozbiory końcowe",
    "type": "true_false",
    "prompt": "W II rozbiorze Rzeczypospolitej uczestniczyły Rosja i Prusy, a Austria nie brała w nim udziału.",
    "options": null,
    "answer": true,
    "explanation": "W 1793 roku ziemie Rzeczypospolitej podzieliły między siebie Rosja i Prusy; Austria w II rozbiorze nie uczestniczyła."
  },
  {
    "id": "R05_ROZ_05",
    "section": "Wojny i rozbiory końcowe",
    "type": "fill_in",
    "prompt": "Ostatni sejm dawnej Rzeczypospolitej odbył się w __________ w roku __________.",
    "options": null,
    "answer": [
      "Grodnie",
      "1793"
    ],
    "altAnswers": [
      [
        "Grodnie",
        "Grodno"
      ],
      [
        "1793",
        "1793 roku"
      ]
    ],
    "explanation": "Sejm grodzieński w 1793 roku zatwierdził pod presją II rozbiór i był ostatnim sejmem dawnej Rzeczypospolitej."
  },
  {
    "id": "R05_ROZ_06",
    "section": "Wojny i rozbiory końcowe",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą lub skutkiem.",
    "options": null,
    "left": [
      "przysięga Kościuszki w Krakowie",
      "bitwa pod Racławicami",
      "Uniwersał połaniecki",
      "rzeź Pragi"
    ],
    "right": [
      "24 marca 1794 roku",
      "zwycięstwo kosynierów i wojsk powstańczych",
      "7 maja 1794 roku",
      "masakra ludności cywilnej prawobrzeżnej Warszawy"
    ],
    "answer": {
      "przysięga Kościuszki w Krakowie": "24 marca 1794 roku",
      "bitwa pod Racławicami": "zwycięstwo kosynierów i wojsk powstańczych",
      "Uniwersał połaniecki": "7 maja 1794 roku",
      "rzeź Pragi": "masakra ludności cywilnej prawobrzeżnej Warszawy"
    },
    "image": "r05_kosynier_raclawice.jpg",
    "explanation": "Te wydarzenia wyznaczają najważniejsze etapy insurekcji kościuszkowskiej."
  },
  {
    "id": "R05_ROZ_07",
    "section": "Wojny i rozbiory końcowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Zieleńce, Dubienka, Racławice, Targowica.",
    "options": null,
    "answer": "Targowica",
    "explanation": "Zieleńce, Dubienka i Racławice to bitwy, a Targowica była miejscem ogłoszenia konfederacji przeciwników konstytucji."
  },
  {
    "id": "R05_ROZ_08",
    "section": "Wojny i rozbiory końcowe",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "III rozbiór Rzeczypospolitej",
      "powstanie kościuszkowskie",
      "II rozbiór Rzeczypospolitej",
      "wojna polsko-rosyjska w obronie konstytucji"
    ],
    "answer": [
      "wojna polsko-rosyjska w obronie konstytucji",
      "II rozbiór Rzeczypospolitej",
      "powstanie kościuszkowskie",
      "III rozbiór Rzeczypospolitej"
    ],
    "explanation": "Wojna w obronie konstytucji była w 1792 roku, II rozbiór w 1793 roku, powstanie kościuszkowskie w 1794 roku, a III rozbiór w 1795 roku."
  },
  {
    "id": "R05_ROZ_09",
    "section": "Wojny i rozbiory końcowe",
    "type": "sort",
    "prompt": "Przyporządkuj postanowienia Uniwersału połanieckiego do właściwej kategorii.",
    "options": null,
    "items": [
      "wolność osobista chłopów",
      "prawo opuszczania wsi",
      "zakaz usuwania chłopów z roli",
      "zmniejszenie pańszczyzny",
      "zwolnienie rekrutów z pańszczyzny"
    ],
    "categories": [
      "swobody osobiste",
      "ochrona gospodarstwa",
      "ulgi w pańszczyźnie"
    ],
    "answer": {
      "swobody osobiste": [
        "wolność osobista chłopów",
        "prawo opuszczania wsi"
      ],
      "ochrona gospodarstwa": [
        "zakaz usuwania chłopów z roli"
      ],
      "ulgi w pańszczyźnie": [
        "zmniejszenie pańszczyzny",
        "zwolnienie rekrutów z pańszczyzny"
      ]
    },
    "explanation": "Uniwersał połaniecki miał zachęcić chłopów do poparcia powstania przez gwarancje osobiste, ochronę roli i ograniczenie pańszczyzny."
  },
  {
    "id": "R05_ROZ_10",
    "section": "Wojny i rozbiory końcowe",
    "type": "riddle",
    "prompt": "Jak nazywano chłopskich powstańców uzbrojonych w kosy osadzone pionowo na drzewcu?",
    "options": null,
    "answer": "kosynierzy",
    "altAnswers": [
      "kosynierzy",
      "kosynier"
    ],
    "image": "r05_kosynier_raclawice.jpg",
    "explanation": "Powstańców chłopskich uzbrojonych w kosy na sztorc nazywano kosynierami."
  },
  {
    "id": "R05_ROZ_11",
    "section": "Wojny i rozbiory końcowe",
    "type": "single_choice",
    "prompt": "Które wydarzenie przypieczętowało kapitulację lewobrzeżnej Warszawy 5 listopada 1794 roku?",
    "options": [
      "rzeź Pragi",
      "uchwalenie Konstytucji 3 maja",
      "zawiązanie konfederacji barskiej",
      "bitwa pod Połtawą",
      "powołanie KEN",
      "Sejm Niemy"
    ],
    "answer": 0,
    "image": "r05_rzez_pragi.jpg",
    "explanation": "Masakra ludności cywilnej Pragi przez wojska rosyjskie zaważyła na decyzji o kapitulacji lewobrzeżnej Warszawy."
  },
  {
    "id": "R05_ROZ_12",
    "section": "Wojny i rozbiory końcowe",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, które dokonały III rozbioru Rzeczypospolitej w 1795 roku.",
    "options": [
      "Rosja",
      "Prusy",
      "Austria",
      "Szwecja",
      "Francja",
      "Turcja"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r05_mapa_rozbiorow.jpg",
    "explanation": "Po klęsce powstania kościuszkowskiego Rosja, Prusy i Austria podzieliły między siebie resztę ziem Rzeczypospolitej."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką maksymalną liczebność zawodowej armii Rzeczypospolitej ustalono na Sejmie Niemym?",
    "options": [
      "12 tys. żołnierzy",
      "24 tys. żołnierzy",
      "50 tys. żołnierzy",
      "57 tys. żołnierzy",
      "100 tys. żołnierzy",
      "150 tys. żołnierzy"
    ],
    "answer": 1,
    "explanation": "Sejm Niemy ustalił maksymalny stan armii na 24 tysiące żołnierzy, choć faktycznie zebrano pieniądze tylko na około 12 tysięcy."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy traktatu trzech czarnych orłów.",
    "options": [
      "zawarto go w 1732 roku",
      "dotyczył wspólnego kandydata do tronu polskiego",
      "w razie potrzeby przewidywał interwencję zbrojną",
      "jego stronami były Austria, Prusy i Rosja",
      "gwarantował dziedziczność tronu po Stanisławie Auguście",
      "został podpisany przez konfederatów barskich"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Austria, Prusy i Rosja zawarły w 1732 roku porozumienie, w którym zapowiadały poparcie wspólnego kandydata i ewentualną interwencję."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Za panowania Augusta III na __________ zwołanych sejmów do skutku doszedł tylko __________.",
    "options": null,
    "answer": [
      "czternaście",
      "jeden"
    ],
    "altAnswers": [
      [
        "czternaście",
        "14"
      ],
      [
        "jeden",
        "1"
      ]
    ],
    "explanation": "Za Augusta III z czternastu sejmów do skutku doszedł tylko jeden."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz nazwisko z mniej oczywistą informacją.",
    "options": null,
    "left": [
      "Kazimierz Pułaski",
      "Jan Kiliński",
      "Berek Joselewicz",
      "Wojciech Bogusławski"
    ],
    "right": [
      "przywódca konfederacji barskiej i późniejszy uczestnik wojny o niepodległość USA",
      "mistrz szewski stojący na czele ludu Warszawy w kwietniu 1794 roku",
      "dowódca pułku jazdy złożonego z polskich Żydów",
      "autor dzieła Cud mniemany czyli Krakowiacy i Górale"
    ],
    "answer": {
      "Kazimierz Pułaski": "przywódca konfederacji barskiej i późniejszy uczestnik wojny o niepodległość USA",
      "Jan Kiliński": "mistrz szewski stojący na czele ludu Warszawy w kwietniu 1794 roku",
      "Berek Joselewicz": "dowódca pułku jazdy złożonego z polskich Żydów",
      "Wojciech Bogusławski": "autor dzieła Cud mniemany czyli Krakowiacy i Górale"
    },
    "explanation": "Podaje się charakterystyczne informacje o każdej z tych postaci, wykraczające poza same daty polityczne."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Konstytucja 3 maja była mniej radykalna niż konstytucje amerykańska i francuska, bo nie znosiła całkowicie podziału społeczeństwa na stany.",
    "options": null,
    "answer": true,
    "explanation": "Konstytucja 3 maja była ogromnym krokiem naprzód, ale nie likwidowała całkowicie tradycyjnego podziału stanowego."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś w Warszawie w 1794 roku. Władze powstańcze emitują pierwszy w historii Polski papierowy pieniądz, a ministrem skarbu jest sympatyk rewolucji francuskiej. O kogo chodzi?",
    "options": [
      "Hugona Kołłątaja",
      "Ignacego Krasickiego",
      "Stanisława Małachowskiego",
      "Seweryna Rzewuskiego",
      "Tadeusza Rejtana",
      "Kazimierza Pułaskiego"
    ],
    "answer": 0,
    "image": "r05_pierwszy_banknot.jpg",
    "explanation": "Podczas insurekcji Hugo Kołłątaj jako minister skarbu zarządził emisję pierwszego w historii Polski pieniądza papierowego."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia powstania kościuszkowskiego w porządku chronologicznym.",
    "options": null,
    "items": [
      "rzeź Pragi",
      "Uniwersał połaniecki",
      "przysięga Kościuszki w Krakowie",
      "bitwa pod Maciejowicami",
      "walki w Warszawie i Wilnie"
    ],
    "answer": [
      "przysięga Kościuszki w Krakowie",
      "walki w Warszawie i Wilnie",
      "Uniwersał połaniecki",
      "bitwa pod Maciejowicami",
      "rzeź Pragi"
    ],
    "explanation": "Najpierw Kościuszko zaprzysiągł akt powstania 24 marca, potem wybuchły walki w Warszawie i Wilnie, 7 maja ogłoszono Uniwersał połaniecki, w październiku nastąpiła klęska pod Maciejowicami, a następnie rzeź Pragi."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Stanisław August, Stanisław Małachowski, Ignacy Potocki, Hugo Kołłątaj.",
    "options": null,
    "answer": "Stanisław August",
    "explanation": "Małachowski, Potocki i Kołłątaj opuścili kraj po przystąpieniu króla do targowicy, a Stanisław August był właśnie królem podejmującym tę decyzję."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj dane liczbowe do państwa według tabel.",
    "options": null,
    "items": [
      "armia 150000",
      "armia 250000",
      "armia 350000",
      "armia 57000",
      "dochód 425 ton srebra",
      "dochód 960 ton srebra Austrii",
      "dochód 960 ton srebra Rosji",
      "dochód 60 ton srebra"
    ],
    "categories": [
      "Prusy",
      "Austria",
      "Rosja",
      "Polska"
    ],
    "answer": {
      "Prusy": [
        "armia 150000",
        "dochód 425 ton srebra"
      ],
      "Austria": [
        "armia 250000",
        "dochód 960 ton srebra Austrii"
      ],
      "Rosja": [
        "armia 350000",
        "dochód 960 ton srebra Rosji"
      ],
      "Polska": [
        "armia 57000",
        "dochód 60 ton srebra"
      ]
    },
    "explanation": "Tabele zestawiają ogromną przewagę armii i dochodów zaborców nad Polską w drugiej połowie XVIII wieku."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaką złośliwą nazwą określano Radę Nieustającą z powodu wpływów rosyjskich?",
    "options": null,
    "answer": "Rada Nieustającej Zdrady",
    "altAnswers": [
      "Rada Nieustającej Zdrady",
      "Radą Nieustającej Zdrady",
      "Nieustająca Zdrada"
    ],
    "explanation": "Krytycy mówili o Radzie Nieustającej jako o Radzie Nieustającej Zdrady, ponieważ część jej członków była opłacana przez ambasadora rosyjskiego."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz ziemie lub miasta zabrane przez Prusy w II rozbiorze.",
    "options": [
      "Wielkopolska",
      "Kujawy",
      "północna część Mazowsza",
      "Gdańsk",
      "Toruń",
      "Lwów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W II rozbiorze Prusy zajęły Wielkopolskę, Kujawy, północne Mazowsze oraz ważne dla handlu Gdańsk i Toruń; Lwów należał do ziem zajętych przez Austrię w I rozbiorze."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po II rozbiorze okrojona Rzeczpospolita liczyła nieco ponad __________ km kw. i około __________ mieszkańców.",
    "options": null,
    "answer": [
      "210 tys.",
      "4 mln"
    ],
    "altAnswers": [
      [
        "210 tys.",
        "210 tysięcy",
        "ponad 210 tys."
      ],
      [
        "4 mln",
        "4 miliony",
        "około 4 mln"
      ]
    ],
    "explanation": "Po II rozbiorze Rzeczpospolita miała nieco ponad 210 tys. km kw. i około 4 mln mieszkańców."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Polska w XVIII wieku",
  icon: "🇵🇱",
  sectionOrder: [
    "Czasy saskie",
    "Ostatnia elekcja i I rozbiór",
    "Reformy stanisławowskie",
    "Sejm Wielki i Konstytucja 3 maja",
    "Wojny i rozbiory końcowe"
  ],
  sectionIcons: {
    "Czasy saskie": "👑",
    "Ostatnia elekcja i I rozbiór": "🗳️",
    "Reformy stanisławowskie": "🏛️",
    "Sejm Wielki i Konstytucja 3 maja": "📜",
    "Wojny i rozbiory końcowe": "⚔️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
