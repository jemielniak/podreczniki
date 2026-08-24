// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NER  = Budowa i funkcje układu nerwowego
//   HIG  = Jak dbać o układ nerwowy?
//   OKO  = Oko - narząd wzroku
//   UCH  = Ucho - narząd słuchu i równowagi
//   ZMY  = Inne zmysły człowieka - dotyk, smak i węch
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_NER_01",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "single_choice",
    "prompt": "Które elementy tworzą ośrodkowy układ nerwowy?",
    "options": [
      "Mózgowie i rdzeń kręgowy",
      "Nerwy czaszkowe i rdzeniowe",
      "Mózgowie i nerwy czaszkowe",
      "Rdzeń kręgowy i nerwy rdzeniowe",
      "Mózgowie i receptory",
      "Rdzeń kręgowy i mięśnie"
    ],
    "answer": 0,
    "explanation": "Ośrodkowy układ nerwowy składa się z mózgowia i rdzenia kręgowego."
  },
  {
    "id": "R05_NER_02",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "match",
    "prompt": "Połącz część neuronu z jej podstawową funkcją.",
    "options": null,
    "left": [
      "dendryty",
      "ciało komórki",
      "akson",
      "osłonka mielinowa"
    ],
    "right": [
      "odbierają sygnały od innych komórek",
      "zawiera jądro i zarządza pracą neuronu",
      "przesyła sygnały do kolejnych neuronów lub narządów",
      "przyspiesza przekazywanie impulsu"
    ],
    "answer": {
      "dendryty": "odbierają sygnały od innych komórek",
      "ciało komórki": "zawiera jądro i zarządza pracą neuronu",
      "akson": "przesyła sygnały do kolejnych neuronów lub narządów",
      "osłonka mielinowa": "przyspiesza przekazywanie impulsu"
    },
    "image": "r05_neuron.jpg",
    "explanation": "Dendryty odbierają sygnały, ciało komórki zarządza pracą neuronu, akson przekazuje sygnał dalej, a osłonka mielinowa przyspiesza przewodzenie impulsu."
  },
  {
    "id": "R05_NER_03",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "sequence",
    "prompt": "Ułóż części neuronu zgodnie z kierunkiem przepływu impulsu nerwowego.",
    "options": null,
    "items": [
      "akson",
      "dendryty",
      "zakończenia aksonu",
      "ciało komórki"
    ],
    "answer": [
      "dendryty",
      "ciało komórki",
      "akson",
      "zakończenia aksonu"
    ],
    "image": "r05_neuron.jpg",
    "explanation": "Sygnał jest odbierany przez dendryty, trafia do ciała komórki, a następnie biegnie aksonem do jego zakończeń."
  },
  {
    "id": "R05_NER_04",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "true_false",
    "prompt": "Neurony stykają się ze sobą bezpośrednio, dzięki czemu impuls przechodzi z jednej komórki na drugą.",
    "options": null,
    "answer": false,
    "explanation": "Neurony nie stykają się bezpośrednio. Sygnały przekazują sobie przez synapsy, a w większości synaps chemicznych uczestniczą neuroprzekaźniki."
  },
  {
    "id": "R05_NER_05",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "fill_in",
    "prompt": "Układ nerwowy dzieli się na układ __________ i __________.",
    "options": null,
    "answer": [
      "ośrodkowy",
      "obwodowy"
    ],
    "altAnswers": [
      [
        "ośrodkowy",
        "osrodkowy"
      ],
      [
        "obwodowy"
      ]
    ],
    "explanation": "Dwie główne części układu nerwowego to układ ośrodkowy i obwodowy."
  },
  {
    "id": "R05_NER_06",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do części układu nerwowego.",
    "options": null,
    "items": [
      "mózgowie",
      "rdzeń kręgowy",
      "nerwy czaszkowe",
      "nerwy rdzeniowe"
    ],
    "categories": [
      "ośrodkowy układ nerwowy",
      "obwodowy układ nerwowy"
    ],
    "answer": {
      "ośrodkowy układ nerwowy": [
        "mózgowie",
        "rdzeń kręgowy"
      ],
      "obwodowy układ nerwowy": [
        "nerwy czaszkowe",
        "nerwy rdzeniowe"
      ]
    },
    "explanation": "Mózgowie i rdzeń kręgowy tworzą układ ośrodkowy, a nerwy czaszkowe i rdzeniowe należą do układu obwodowego."
  },
  {
    "id": "R05_NER_07",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "single_choice",
    "prompt": "Jak nazywa się droga, którą przebywa impuls nerwowy podczas odruchu?",
    "options": [
      "Łuk odruchowy",
      "Synapsa",
      "Osłonka mielinowa",
      "Nerw wzrokowy",
      "Kanał półkolisty",
      "Odruch warunkowy"
    ],
    "answer": 0,
    "explanation": "Droga impulsu nerwowego od zarejestrowania bodźca do wywołania reakcji to łuk odruchowy."
  },
  {
    "id": "R05_NER_08",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "sequence",
    "prompt": "Ułóż elementy łuku odruchowego od odebrania bodźca do wykonania reakcji.",
    "options": null,
    "items": [
      "mięsień",
      "neuron ruchowy",
      "receptor",
      "ośrodek nerwowy",
      "neuron czuciowy"
    ],
    "answer": [
      "receptor",
      "neuron czuciowy",
      "ośrodek nerwowy",
      "neuron ruchowy",
      "mięsień"
    ],
    "image": "r05_luk_odruchowy.jpg",
    "explanation": "Receptor odbiera bodziec, neuron czuciowy przesyła impuls do ośrodka nerwowego, a neuron ruchowy przekazuje polecenie do mięśnia."
  },
  {
    "id": "R05_NER_09",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz odruchy bezwarunkowe.",
    "options": [
      "kichanie",
      "ssanie",
      "mruganie",
      "odruch kolanowy",
      "jazda na rowerze",
      "pisanie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kichanie, ssanie, mruganie i odruch kolanowy są wrodzone i automatyczne. Jazdy na rowerze i pisania trzeba się nauczyć."
  },
  {
    "id": "R05_NER_10",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład, który nie jest odruchem bezwarunkowym: kichanie, mruganie, ssanie, jazda na rowerze.",
    "options": null,
    "answer": "jazda na rowerze",
    "explanation": "Jazda na rowerze jest odruchem warunkowym, czyli nabytym i wyuczonym. Pozostałe przykłady są odruchami bezwarunkowymi."
  },
  {
    "id": "R05_NER_11",
    "section": "Budowa i funkcje układu nerwowego",
    "type": "scenario",
    "prompt": "Dotykasz przypadkiem gorącego przedmiotu i natychmiast cofasz rękę, zanim zdążysz o tym pomyśleć. Który element układu nerwowego może w tym odruchu pełnić funkcję ośrodka nerwowego?",
    "options": [
      "Rdzeń kręgowy",
      "Mózgowie",
      "Neuron czuciowy",
      "Neuron ruchowy",
      "Receptor",
      "Mięsień"
    ],
    "answer": 0,
    "explanation": "W tym odruchu ośrodkiem nerwowym jest rdzeń kręgowy, który przetwarza informację i wysyła polecenie do mięśnia."
  },
  {
    "id": "R05_HIG_01",
    "section": "Jak dbać o układ nerwowy?",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które mogą zaburzać pracę układu nerwowego.",
    "options": [
      "nadmierny stres",
      "niedobór snu",
      "używki",
      "urazy",
      "infekcje",
      "zdrowa dieta"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Pracę układu nerwowego mogą zaburzać m.in. nadmierny stres, niedobór snu, używki, urazy i infekcje. Zdrowa dieta wspiera jego prawidłowe działanie."
  },
  {
    "id": "R05_HIG_02",
    "section": "Jak dbać o układ nerwowy?",
    "type": "single_choice",
    "prompt": "Który skutek może pojawić się przy długotrwałym stresie?",
    "options": [
      "Pogorszenie koncentracji i pamięci",
      "Trwałe polepszenie snu",
      "Wzrost odporności organizmu",
      "Stałe zmniejszenie zmęczenia",
      "Lepsze dotlenienie mózgu",
      "Wyostrzenie wzroku"
    ],
    "answer": 0,
    "explanation": "Długotrwały stres może pogarszać koncentrację i pamięć, powodować zmęczenie i problemy ze snem oraz osłabiać odporność."
  },
  {
    "id": "R05_HIG_03",
    "section": "Jak dbać o układ nerwowy?",
    "type": "multi_select",
    "prompt": "Które działania pomagają radzić sobie ze stresem?",
    "options": [
      "uprawianie sportu",
      "głębokie oddychanie",
      "spędzanie czasu na świeżym powietrzu",
      "rozmowa z bliskimi",
      "zajmowanie się hobby",
      "ograniczanie snu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r05_sen_i_stres.jpg",
    "explanation": "Ruch, ćwiczenia oddechowe, kontakt z naturą, rozmowa z bliskimi i hobby pomagają rozładować napięcie. Ograniczanie snu nie jest sposobem dbania o układ nerwowy."
  },
  {
    "id": "R05_HIG_04",
    "section": "Jak dbać o układ nerwowy?",
    "type": "fill_in",
    "prompt": "Zalecana temperatura w sypialni to __________°C, a optymalna pora zasypiania nastolatków mieści się między godziną __________ a __________.",
    "options": null,
    "answer": [
      "18-20",
      "21",
      "23"
    ],
    "altAnswers": [
      [
        "18-20",
        "18–20"
      ],
      [
        "21",
        "21:00"
      ],
      [
        "23",
        "23:00"
      ]
    ],
    "explanation": "W sypialni zalecana jest temperatura 18-20°C, a dla nastolatków optymalna pora zasypiania to czas między 21 a 23."
  },
  {
    "id": "R05_HIG_05",
    "section": "Jak dbać o układ nerwowy?",
    "type": "true_false",
    "prompt": "Podczas snu mózg porządkuje informacje i wzmacnia pamięć, a organizm ma czas na regenerację.",
    "options": null,
    "answer": true,
    "explanation": "Sen jest czasem regeneracji: mózg porządkuje informacje i wzmacnia pamięć, komórki nerwowe odpoczywają, a organizm ma czas na naprawę."
  },
  {
    "id": "R05_HIG_06",
    "section": "Jak dbać o układ nerwowy?",
    "type": "match",
    "prompt": "Połącz chorobę neurologiczną z opisem.",
    "options": null,
    "left": [
      "stwardnienie rozsiane",
      "choroba Alzheimera",
      "epilepsja",
      "choroba Parkinsona"
    ],
    "right": [
      "układ odpornościowy atakuje osłonki mielinowe nerwów",
      "stopniowo zanikają komórki nerwowe w mózgu i pogarsza się pamięć",
      "występują napady związane z niekontrolowanymi wyładowaniami elektrycznymi",
      "stopniowo obumierają komórki nerwowe i pojawiają się głównie zaburzenia ruchowe"
    ],
    "answer": {
      "stwardnienie rozsiane": "układ odpornościowy atakuje osłonki mielinowe nerwów",
      "choroba Alzheimera": "stopniowo zanikają komórki nerwowe w mózgu i pogarsza się pamięć",
      "epilepsja": "występują napady związane z niekontrolowanymi wyładowaniami elektrycznymi",
      "choroba Parkinsona": "stopniowo obumierają komórki nerwowe i pojawiają się głównie zaburzenia ruchowe"
    },
    "explanation": "Choroby neurologiczne mogą uszkadzać komórki nerwowe lub ich osłonki, a ich skutki zależą od rodzaju choroby."
  },
  {
    "id": "R05_HIG_07",
    "section": "Jak dbać o układ nerwowy?",
    "type": "sort",
    "prompt": "Przyporządkuj skutek do odpowiedniej substancji.",
    "options": null,
    "items": [
      "spowalnia reakcje",
      "utrudnia dotlenienie mózgu",
      "powoduje problemy ze snem",
      "pogarsza pamięć i zdolność logicznego myślenia",
      "osłabia koncentrację",
      "wywołuje ból głowy i uczucie niepokoju"
    ],
    "categories": [
      "alkohol",
      "nikotyna",
      "kofeina"
    ],
    "answer": {
      "alkohol": [
        "spowalnia reakcje",
        "pogarsza pamięć i zdolność logicznego myślenia"
      ],
      "nikotyna": [
        "utrudnia dotlenienie mózgu",
        "osłabia koncentrację"
      ],
      "kofeina": [
        "powoduje problemy ze snem",
        "wywołuje ból głowy i uczucie niepokoju"
      ]
    },
    "explanation": "Alkohol spowalnia reakcje i pogarsza pamięć, nikotyna utrudnia dotlenienie mózgu i osłabia koncentrację, a kofeina może powodować problemy ze snem, ból głowy i niepokój."
  },
  {
    "id": "R05_HIG_08",
    "section": "Jak dbać o układ nerwowy?",
    "type": "single_choice",
    "prompt": "Dlaczego dopalacze są szczególnie niebezpieczne?",
    "options": [
      "Niektóre mają nieznany skład i mogą działać silniej niż narkotyki",
      "Zawsze poprawiają koncentrację",
      "Nie wpływają na świadomość",
      "Nie mogą uzależniać",
      "Działają wyłącznie na mięśnie",
      "Są bezpieczne po jednej dawce"
    ],
    "answer": 0,
    "explanation": "Niektóre dopalacze mają nieznany skład, mogą działać silniej niż narkotyki i mogą uzależniać nawet po jednej dawce."
  },
  {
    "id": "R05_HIG_09",
    "section": "Jak dbać o układ nerwowy?",
    "type": "scenario",
    "prompt": "Nastolatek tuż przed snem długo korzysta z telefonu, a potem ma trudność z wyciszeniem się. Która zmiana najlepiej odpowiada zasadom higieny snu?",
    "options": [
      "Ograniczyć przed snem niebieskie światło ekranów",
      "Zwiększyć głośność muzyki w słuchawkach",
      "Pić więcej kofeiny wieczorem",
      "Kłaść się codziennie o innej porze",
      "Podwyższyć temperaturę sypialni do 28°C",
      "Skrócić sen, by szybciej zasnąć następnego dnia"
    ],
    "answer": 0,
    "image": "r05_sen_i_stres.jpg",
    "explanation": "Przed snem warto się wyciszyć i unikać niebieskiego światła ekranów. Regularny rytm dnia również sprzyja lepszemu wypoczynkowi."
  },
  {
    "id": "R05_HIG_10",
    "section": "Jak dbać o układ nerwowy?",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do pozostałych: alkohol, nikotyna, kofeina, glukoza.",
    "options": null,
    "answer": "glukoza",
    "explanation": "Alkohol, nikotyna i kofeina są substancjami psychoaktywnymi, natomiast glukoza jest potrzebna mózgowi do działania."
  },
  {
    "id": "R05_HIG_11",
    "section": "Jak dbać o układ nerwowy?",
    "type": "riddle",
    "prompt": "Choroba, w której układ odpornościowy atakuje osłonki mielinowe nerwów, to...",
    "options": null,
    "answer": "stwardnienie rozsiane",
    "altAnswers": [
      "stwardnienie rozsiane"
    ],
    "explanation": "W stwardnieniu rozsianym układ odpornościowy atakuje osłonki mielinowe nerwów, co prowadzi m.in. do problemów z koordynacją ruchową i równowagą."
  },
  {
    "id": "R05_OKO_01",
    "section": "Oko - narząd wzroku",
    "type": "match",
    "prompt": "Połącz element oka z jego funkcją.",
    "options": null,
    "left": [
      "rogówka",
      "źrenica",
      "tęczówka",
      "naczyniówka",
      "soczewka"
    ],
    "right": [
      "przepuszcza światło i chroni wnętrze oka",
      "jest otworem, przez który światło wpada do oka",
      "reguluje wielkość źrenicy",
      "dostarcza tlen i substancje odżywcze",
      "załamuje światło i zmienia kształt, aby wyostrzyć obraz"
    ],
    "answer": {
      "rogówka": "przepuszcza światło i chroni wnętrze oka",
      "źrenica": "jest otworem, przez który światło wpada do oka",
      "tęczówka": "reguluje wielkość źrenicy",
      "naczyniówka": "dostarcza tlen i substancje odżywcze",
      "soczewka": "załamuje światło i zmienia kształt, aby wyostrzyć obraz"
    },
    "image": "r05_budowa_oka.jpg",
    "explanation": "Każdy element oka pełni określoną funkcję: rogówka chroni i przepuszcza światło, źrenica jest otworem, tęczówka reguluje jej wielkość, naczyniówka odżywia oko, a soczewka skupia światło."
  },
  {
    "id": "R05_OKO_02",
    "section": "Oko - narząd wzroku",
    "type": "sequence",
    "prompt": "Ułóż elementy zgodnie z drogą światła i informacji wzrokowej od wejścia do oka do mózgu.",
    "options": null,
    "items": [
      "nerw wzrokowy",
      "soczewka",
      "mózg",
      "rogówka",
      "siatkówka",
      "źrenica"
    ],
    "answer": [
      "rogówka",
      "źrenica",
      "soczewka",
      "siatkówka",
      "nerw wzrokowy",
      "mózg"
    ],
    "image": "r05_budowa_oka.jpg",
    "explanation": "Światło przechodzi przez rogówkę, źrenicę i soczewkę, trafia na siatkówkę, a powstałe impulsy biegną nerwem wzrokowym do mózgu."
  },
  {
    "id": "R05_OKO_03",
    "section": "Oko - narząd wzroku",
    "type": "single_choice",
    "prompt": "Jaki obraz powstaje na siatkówce?",
    "options": [
      "Pomniejszony i odwrócony",
      "Powiększony i prosty",
      "Pomniejszony i prosty",
      "Powiększony i odwrócony",
      "Zawsze czarno-biały",
      "Nie powstaje tam obraz"
    ],
    "answer": 0,
    "explanation": "Soczewka skupia światło na siatkówce, gdzie powstaje obraz pomniejszony i odwrócony. Mózg interpretuje impulsy i pozwala świadomie widzieć obiekt we właściwej pozycji."
  },
  {
    "id": "R05_OKO_04",
    "section": "Oko - narząd wzroku",
    "type": "true_false",
    "prompt": "Tęczówka jest barwną częścią oka i za pomocą mięśni reguluje wielkość źrenicy.",
    "options": null,
    "answer": true,
    "explanation": "Tęczówka zawiera mięśnie regulujące wielkość źrenicy, a przez źrenicę światło dostaje się do oka."
  },
  {
    "id": "R05_OKO_05",
    "section": "Oko - narząd wzroku",
    "type": "multi_select",
    "prompt": "Zaznacz elementy chroniące oko przed urazami, zanieczyszczeniami, światłem lub wysychaniem.",
    "options": [
      "powieki",
      "brwi",
      "rzęsy",
      "łzy",
      "ślimak",
      "trąbka słuchowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Powieki, brwi, rzęsy i łzy tworzą ochronę oka. Zatrzymują zanieczyszczenia, osłaniają przed urazami i światłem oraz nawilżają powierzchnię oka."
  },
  {
    "id": "R05_OKO_06",
    "section": "Oko - narząd wzroku",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do odpowiedniej wady wzroku.",
    "options": null,
    "items": [
      "wyraźne widzenie z bliska",
      "obraz tworzy się przed siatkówką",
      "korekcja soczewką wklęsłą",
      "wyraźne widzenie z daleka",
      "obraz tworzy się za siatkówką",
      "korekcja soczewką wypukłą"
    ],
    "categories": [
      "krótkowzroczność",
      "dalekowzroczność"
    ],
    "answer": {
      "krótkowzroczność": [
        "wyraźne widzenie z bliska",
        "obraz tworzy się przed siatkówką",
        "korekcja soczewką wklęsłą"
      ],
      "dalekowzroczność": [
        "wyraźne widzenie z daleka",
        "obraz tworzy się za siatkówką",
        "korekcja soczewką wypukłą"
      ]
    },
    "image": "r05_wady_wzroku.jpg",
    "explanation": "W krótkowzroczności obraz powstaje przed siatkówką i stosuje się soczewki wklęsłe. W dalekowzroczności obraz powstaje za siatkówką i stosuje się soczewki wypukłe."
  },
  {
    "id": "R05_OKO_07",
    "section": "Oko - narząd wzroku",
    "type": "scenario",
    "prompt": "Dziadek odsuwa książkę coraz dalej od oczu, bo tekst oglądany z bliska staje się niewyraźny. Jaka wada wzroku pasuje do tego opisu?",
    "options": [
      "Dalekowzroczność",
      "Krótkowzroczność",
      "Obie wady jednocześnie",
      "Żadna z tych wad"
    ],
    "answer": 0,
    "image": "r05_wady_wzroku.jpg",
    "explanation": "W dalekowzroczności obiekty z bliska są niewyraźne, a obraz tworzy się za siatkówką."
  },
  {
    "id": "R05_OKO_08",
    "section": "Oko - narząd wzroku",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do oka: rogówka, źrenica, soczewka, ślimak.",
    "options": null,
    "answer": "ślimak",
    "explanation": "Ślimak jest częścią ucha wewnętrznego. Rogówka, źrenica i soczewka są elementami oka."
  },
  {
    "id": "R05_OKO_09",
    "section": "Oko - narząd wzroku",
    "type": "fill_in",
    "prompt": "Receptory światłoczułe znajdują się w __________, a impulsy do mózgu przesyła nerw __________.",
    "options": null,
    "answer": [
      "siatkówce",
      "wzrokowy"
    ],
    "altAnswers": [
      [
        "siatkówce",
        "siatkówka"
      ],
      [
        "wzrokowy",
        "wzrokowym"
      ]
    ],
    "explanation": "Czopki i pręciki są receptorami siatkówki, a impulsy nerwowe z oka biegną do mózgu nerwem wzrokowym."
  },
  {
    "id": "R05_OKO_10",
    "section": "Oko - narząd wzroku",
    "type": "single_choice",
    "prompt": "Jaką soczewkę stosuje się do korekcji krótkowzroczności?",
    "options": [
      "Wklęsłą i rozpraszającą",
      "Wypukłą i skupiającą",
      "Wypukłą i rozpraszającą",
      "Wklęsłą i skupiającą"
    ],
    "answer": 0,
    "image": "r05_wady_wzroku.jpg",
    "explanation": "Krótkowzroczność koryguje się soczewkami wklęsłymi, rozpraszającymi, oznaczonymi znakiem minus."
  },
  {
    "id": "R05_OKO_11",
    "section": "Oko - narząd wzroku",
    "type": "riddle",
    "prompt": "Punkt siatkówki bez receptorów, w którym zaczyna się nerw wzrokowy, to...",
    "options": null,
    "answer": "plamka ślepa",
    "altAnswers": [
      "plamka ślepa",
      "plamka slepa"
    ],
    "image": "r05_budowa_oka.jpg",
    "explanation": "Plamka ślepa to punkt bez receptorów na siatkówce; w tym miejscu zaczyna się nerw wzrokowy."
  },
  {
    "id": "R05_UCH_01",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "single_choice",
    "prompt": "Jakie dwie główne funkcje pełni ucho?",
    "options": [
      "Odbiera dźwięki i uczestniczy w utrzymaniu równowagi",
      "Odbiera zapachy i reguluje temperaturę",
      "Rozpoznaje smaki i obrazy",
      "Chroni oko i skórę",
      "Wytwarza impulsy ruchowe dla mięśni",
      "Steruje pamięcią i mową"
    ],
    "answer": 0,
    "explanation": "Ucho jest narządem słuchu, a znajdujące się w uchu wewnętrznym kanały półkoliste uczestniczą w utrzymaniu równowagi."
  },
  {
    "id": "R05_UCH_02",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "match",
    "prompt": "Połącz element ucha z jego funkcją.",
    "options": null,
    "left": [
      "małżowina uszna",
      "błona bębenkowa",
      "kosteczki słuchowe",
      "ślimak",
      "trąbka słuchowa"
    ],
    "right": [
      "zbiera dźwięki z otoczenia",
      "drga pod wpływem dźwięku",
      "przekazuje drgania do ucha wewnętrznego",
      "zawiera receptory zmieniające drgania w impulsy nerwowe",
      "wyrównuje ciśnienie po obu stronach błony bębenkowej"
    ],
    "answer": {
      "małżowina uszna": "zbiera dźwięki z otoczenia",
      "błona bębenkowa": "drga pod wpływem dźwięku",
      "kosteczki słuchowe": "przekazuje drgania do ucha wewnętrznego",
      "ślimak": "zawiera receptory zmieniające drgania w impulsy nerwowe",
      "trąbka słuchowa": "wyrównuje ciśnienie po obu stronach błony bębenkowej"
    },
    "image": "r05_budowa_ucha.jpg",
    "explanation": "Dźwięk jest zbierany przez małżowinę, wprawia błonę bębenkową w drgania, kosteczki przekazują je dalej, a receptory ślimaka zamieniają je w impulsy. Trąbka słuchowa wyrównuje ciśnienie."
  },
  {
    "id": "R05_UCH_03",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "sequence",
    "prompt": "Ułóż drogę dźwięku przez ucho do powstania impulsów nerwowych.",
    "options": null,
    "items": [
      "ślimak",
      "błona bębenkowa",
      "małżowina uszna",
      "kosteczki słuchowe",
      "przewód słuchowy"
    ],
    "answer": [
      "małżowina uszna",
      "przewód słuchowy",
      "błona bębenkowa",
      "kosteczki słuchowe",
      "ślimak"
    ],
    "image": "r05_budowa_ucha.jpg",
    "explanation": "Małżowina kieruje fale do przewodu słuchowego, fala wprawia w drgania błonę bębenkową, kosteczki przenoszą drgania do ślimaka."
  },
  {
    "id": "R05_UCH_04",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "fill_in",
    "prompt": "Poziom hałasu uznawany za niebezpieczny dla słuchu zaczyna się od około __________ dB.",
    "options": null,
    "answer": [
      "85"
    ],
    "altAnswers": [
      [
        "85",
        "85 dB"
      ]
    ],
    "explanation": "Długotrwałe narażenie na hałas od około 85 dB może prowadzić do pogorszenia słuchu."
  },
  {
    "id": "R05_UCH_05",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "true_false",
    "prompt": "Przewlekły hałas może powodować nie tylko problemy ze słuchem, ale także stres, zaburzenia snu i obniżenie koncentracji.",
    "options": null,
    "answer": true,
    "explanation": "Długotrwały hałas może uszkadzać słuch i powodować również inne problemy, m.in. stres, kłopoty ze snem, bóle głowy i obniżenie koncentracji."
  },
  {
    "id": "R05_UCH_06",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "multi_select",
    "prompt": "Zaznacz dobre nawyki pomagające chronić słuch.",
    "options": [
      "nie słuchać muzyki zbyt głośno",
      "unikać miejsc z dużym hałasem",
      "używać ochronników słuchu",
      "dbać o higienę uszu i słuchawek",
      "zwiększać głośność słuchawek powyżej 60%",
      "lekceważyć infekcje ucha"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Słuch chronią umiarkowana głośność, unikanie hałasu, stosowanie ochronników oraz higiena uszu i słuchawek. Infekcji ucha nie należy lekceważyć."
  },
  {
    "id": "R05_UCH_07",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "scenario",
    "prompt": "Uczeń codziennie przez wiele godzin słucha bardzo głośnej muzyki przez słuchawki. Który skutek jest zgodny z wpływem długotrwałego hałasu?",
    "options": [
      "Może dojść do pogorszenia słuchu i szumów usznych",
      "Słuch trwale staje się bardziej czuły",
      "Poprawia się jakość snu i koncentracja",
      "Komórki słuchowe stają się odporniejsze na hałas",
      "Maleje ryzyko niedosłuchu",
      "Długotrwały hałas nie wpływa na zdrowie"
    ],
    "answer": 0,
    "explanation": "Długotrwałe narażenie na hałas może powodować czasowe pogorszenie słuchu, uczucie zatkanych uszu, szumy uszne, a nawet niedosłuch."
  },
  {
    "id": "R05_UCH_08",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "single_choice",
    "prompt": "Który element ucha jest narządem zmysłu równowagi?",
    "options": [
      "Kanały półkoliste",
      "Błona bębenkowa",
      "Małżowina uszna",
      "Trąbka słuchowa",
      "Przewód słuchowy",
      "Kosteczki słuchowe"
    ],
    "answer": 0,
    "explanation": "Kanały półkoliste w uchu wewnętrznym są wypełnione płynem i pomagają wykrywać ruchy głowy, co umożliwia utrzymanie równowagi."
  },
  {
    "id": "R05_UCH_09",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "riddle",
    "prompt": "Łączy ucho z gardłem i wyrównuje ciśnienie po obu stronach błony bębenkowej. To...",
    "options": null,
    "answer": "trąbka słuchowa",
    "altAnswers": [
      "trąbka słuchowa",
      "trabka sluchowa"
    ],
    "image": "r05_budowa_ucha.jpg",
    "explanation": "Trąbka słuchowa łączy ucho z gardłem i pomaga wyrównywać ciśnienie po obu stronach błony bębenkowej."
  },
  {
    "id": "R05_UCH_10",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do narządu słuchu: małżowina uszna, przewód słuchowy, błona bębenkowa, siatkówka.",
    "options": null,
    "answer": "siatkówka",
    "explanation": "Siatkówka jest częścią oka. Pozostałe elementy należą do ucha."
  },
  {
    "id": "R05_UCH_11",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "scenario",
    "prompt": "Podczas jazdy samochodem mózg otrzymuje sprzeczne informacje ze wzroku i zmysłu równowagi. Jakie objawy mogą się wtedy pojawić?",
    "options": [
      "Nudności, zawroty głowy i wymioty",
      "Szumy uszne i niedosłuch",
      "Pogorszenie koncentracji i problemy ze snem",
      "Ból oka i niewyraźne widzenie z bliska",
      "Utrata smaku bez zatkania nosa",
      "Kichanie i odruch kolanowy"
    ],
    "answer": 0,
    "image": "r05_kanaly_polkoliste.jpg",
    "explanation": "Sprzeczne informacje z różnych zmysłów mogą wywołać chorobę lokomocyjną, której objawami są m.in. nudności, zawroty głowy i wymioty."
  },
  {
    "id": "R05_ZMY_01",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "match",
    "prompt": "Połącz zmysł z jego narządem lub miejscem receptorów.",
    "options": null,
    "left": [
      "dotyk",
      "smak",
      "węch"
    ],
    "right": [
      "skóra",
      "kubki smakowe",
      "górna część jamy nosowej"
    ],
    "answer": {
      "dotyk": "skóra",
      "smak": "kubki smakowe",
      "węch": "górna część jamy nosowej"
    },
    "explanation": "Receptory dotyku znajdują się w skórze, narządem smaku są kubki smakowe, a receptory węchowe leżą w górnej części jamy nosowej."
  },
  {
    "id": "R05_ZMY_02",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "multi_select",
    "prompt": "Jakie informacje mogą odbierać receptory rozmieszczone w skórze?",
    "options": [
      "nacisk",
      "temperaturę",
      "ból",
      "ruch i teksturę",
      "barwę światła",
      "dźwięki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_receptory_skory.jpg",
    "explanation": "Receptory skóry odbierają m.in. nacisk, temperaturę, ból, ruch, teksturę i kształt. Barwa światła i dźwięki są odbierane przez inne narządy zmysłów."
  },
  {
    "id": "R05_ZMY_03",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "single_choice",
    "prompt": "Gdzie znajduje się szczególnie dużo receptorów dotyku?",
    "options": [
      "Na opuszkach palców",
      "Na plecach",
      "Na ramieniu",
      "Na przedramieniu",
      "Na łydce",
      "Na brzuchu"
    ],
    "answer": 0,
    "explanation": "Receptorów dotyku jest szczególnie dużo na opuszkach palców, dlatego są one bardzo wrażliwe na dotyk."
  },
  {
    "id": "R05_ZMY_04",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "true_false",
    "prompt": "Dotyk jest pierwszym zmysłem, który rozwija się u człowieka.",
    "options": null,
    "answer": true,
    "explanation": "Dotyk jest pierwszym rozwijającym się zmysłem i pomaga poznawać otoczenie oraz budować poczucie bezpieczeństwa i więzi."
  },
  {
    "id": "R05_ZMY_05",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "multi_select",
    "prompt": "Zaznacz pięć podstawowych smaków.",
    "options": [
      "słodki",
      "słony",
      "kwaśny",
      "gorzki",
      "umami",
      "ostry",
      "miętowy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r05_smak_i_wech.jpg",
    "explanation": "Pięć podstawowych smaków to: słodki, słony, kwaśny, gorzki i umami."
  },
  {
    "id": "R05_ZMY_06",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "true_false",
    "prompt": "Kubki smakowe rozpoznające smaki znajdują się wyłącznie na kilku oddzielnych strefach języka.",
    "options": null,
    "answer": false,
    "explanation": "Brodawki smakowe są rozmieszczone na powierzchni całego języka, a każdy kubek smakowy może rozpoznawać wszystkie smaki."
  },
  {
    "id": "R05_ZMY_07",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "riddle",
    "prompt": "Podstawowy smak określany jako \"mięsny\", kojarzony np. z rosołem lub serem, to...",
    "options": null,
    "answer": "umami",
    "altAnswers": [
      "umami"
    ],
    "image": "r05_smak_i_wech.jpg",
    "explanation": "Umami jest jednym z pięciu podstawowych smaków i bywa określany jako smak \"mięsny\"."
  },
  {
    "id": "R05_ZMY_08",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "fill_in",
    "prompt": "Receptory węchowe znajdują się w górnej części jamy __________, w błonie __________.",
    "options": null,
    "answer": [
      "nosowej",
      "śluzowej"
    ],
    "altAnswers": [
      [
        "nosowej"
      ],
      [
        "śluzowej",
        "sluzowej"
      ]
    ],
    "explanation": "Receptory węchowe znajdują się w górnej części jamy nosowej, w błonie śluzowej."
  },
  {
    "id": "R05_ZMY_09",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "sequence",
    "prompt": "Ułóż etapy działania węchu od pojawienia się cząsteczek zapachowych do rozpoznania zapachu.",
    "options": null,
    "items": [
      "impuls biegnie nerwem węchowym",
      "mózg analizuje informację",
      "cząsteczki zapachowe trafiają do nosa",
      "pobudzane są receptory węchowe"
    ],
    "answer": [
      "cząsteczki zapachowe trafiają do nosa",
      "pobudzane są receptory węchowe",
      "impuls biegnie nerwem węchowym",
      "mózg analizuje informację"
    ],
    "image": "r05_smak_i_wech.jpg",
    "explanation": "Cząsteczki zapachowe pobudzają receptory węchowe, które wytwarzają impuls. Nerw węchowy przesyła go do mózgu, gdzie zapach jest analizowany i rozpoznawany."
  },
  {
    "id": "R05_ZMY_10",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "scenario",
    "prompt": "Podczas kataru nos jest zatkany i jedzenie wydaje się prawie bez smaku. Co najlepiej wyjaśnia to zjawisko?",
    "options": [
      "Węch i smak ściśle współpracują, a wiele wrażeń smakowych zależy od zapachu",
      "Katar sprawia, że kubki smakowe przestają odbierać wszystkie podstawowe smaki",
      "Zatkany nos zatrzymuje ślinę i dlatego związki smakowe nie docierają do języka",
      "Receptory węchowe znajdują się na języku i podczas kataru zostają zasłonięte",
      "Ślimak ucha blokuje wtedy impulsy pochodzące z kubków smakowych",
      "Mózg przestaje podczas kataru odbierać wszystkie impulsy z narządów zmysłów"
    ],
    "answer": 0,
    "explanation": "Podczas jedzenia mózg łączy sygnały z języka i nosa. Przy zatkanym nosie węch działa słabiej, dlatego potrawa wydaje się mniej wyrazista."
  },
  {
    "id": "R05_ZMY_11",
    "section": "Inne zmysły człowieka - dotyk, smak i węch",
    "type": "odd_one_out",
    "prompt": "Wskaż określenie, które nie jest jednym z pięciu podstawowych smaków: słodki, słony, kwaśny, ostry.",
    "options": null,
    "answer": "ostry",
    "explanation": "Do pięciu podstawowych smaków należą słodki, słony, kwaśny, gorzki i umami. \"Ostry\" nie znajduje się na tej liście."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile neuronów znajduje się w ludzkim mózgu?",
    "options": [
      "Około 86 mld",
      "Około 8,6 mln",
      "Około 860 tys.",
      "Około 5 mln",
      "Około 200 mln",
      "Około 10 tys."
    ],
    "answer": 0,
    "explanation": "W mózgu znajduje się około 86 miliardów neuronów."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Mózg stanowi około __________% masy ciała, a zużywa około __________% zasobów energetycznych organizmu.",
    "options": null,
    "answer": [
      "2",
      "20-30"
    ],
    "altAnswers": [
      [
        "2",
        "2%"
      ],
      [
        "20-30",
        "20–30",
        "20-30%",
        "20–30%"
      ]
    ],
    "explanation": "Mózg stanowi około 2% masy ciała, a zużywa około 20-30% zasobów energetycznych organizmu."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile różnych zapachów potrafi rozpoznać człowiek?",
    "options": [
      "Nawet bilion",
      "Około tysiąca",
      "Około 10 tysięcy",
      "Około 5 milionów",
      "Około 86 miliardów",
      "Dokładnie 200 milionów"
    ],
    "answer": 0,
    "explanation": "Człowiek potrafi rozpoznać nawet bilion różnych zapachów."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile receptorów węchowych znajduje się w ludzkim nosie?",
    "options": [
      "Około 5 mln",
      "Około 200 mln",
      "Około 10 tys.",
      "Około 100",
      "Około 86 mld",
      "Około 500"
    ],
    "answer": 0,
    "explanation": "W ludzkim nosie znajduje się około 5 milionów receptorów węchowych; u psa może ich być nawet około 200 milionów."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wielkość z odpowiadającą jej informacją.",
    "options": null,
    "left": [
      "10 mln",
      "10 tys.",
      "100",
      "500",
      "ponad 10"
    ],
    "right": [
      "liczba kolorów, które człowiek może rozróżnić",
      "przybliżona liczba kubków smakowych na języku",
      "przybliżona liczba receptorów smaku w jednym kubku smakowym",
      "przybliżona liczba kubków smakowych u kota",
      "średnia liczba receptorów dotyku na 1 cm² skóry"
    ],
    "answer": {
      "10 mln": "liczba kolorów, które człowiek może rozróżnić",
      "10 tys.": "przybliżona liczba kubków smakowych na języku",
      "100": "przybliżona liczba receptorów smaku w jednym kubku smakowym",
      "500": "przybliżona liczba kubków smakowych u kota",
      "ponad 10": "średnia liczba receptorów dotyku na 1 cm² skóry"
    },
    "explanation": "Dane liczbowe pokazują dużą czułość narządów zmysłów: człowiek rozróżnia ok. 10 mln kolorów, ma ok. 10 tys. kubków smakowych, a na 1 cm² skóry przypada średnio ponad 10 receptorów dotyku."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W jasnym pomieszczeniu źrenica staje się mniejsza, a w słabo oświetlonym większa. Który element oka bezpośrednio reguluje tę zmianę?",
    "options": [
      "Tęczówka",
      "Siatkówka",
      "Naczyniówka",
      "Nerw wzrokowy",
      "Ciało szkliste",
      "Plamka ślepa"
    ],
    "answer": 0,
    "image": "r05_budowa_oka.jpg",
    "explanation": "Tęczówka jest zbudowana z mięśni regulujących wielkość źrenicy, dzięki czemu zmienia się ilość światła wpadającego do oka."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz chorobę z najbardziej charakterystycznym opisem skutków.",
    "options": null,
    "left": [
      "stwardnienie rozsiane",
      "choroba Alzheimera",
      "epilepsja",
      "choroba Parkinsona"
    ],
    "right": [
      "problemy z koordynacją ruchową i równowagą",
      "utrata pamięci i zdolności poznawczych",
      "napady związane z niekontrolowanymi wyładowaniami elektrycznymi",
      "drżenie, spowolnienie ruchów i zaburzenia chodu"
    ],
    "answer": {
      "stwardnienie rozsiane": "problemy z koordynacją ruchową i równowagą",
      "choroba Alzheimera": "utrata pamięci i zdolności poznawczych",
      "epilepsja": "napady związane z niekontrolowanymi wyładowaniami elektrycznymi",
      "choroba Parkinsona": "drżenie, spowolnienie ruchów i zaburzenia chodu"
    },
    "explanation": "Stwardnienie rozsiane może zaburzać koordynację i równowagę, Alzheimer pogarsza pamięć i zdolności poznawcze, epilepsja powoduje napady, a Parkinson przede wszystkim zaburzenia ruchowe."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel przykłady odruchów na bezwarunkowe i warunkowe.",
    "options": null,
    "items": [
      "kichanie",
      "ssanie",
      "mruganie",
      "odruch kolanowy",
      "jazda na rowerze",
      "pisanie",
      "reakcja na dzwonek",
      "rozglądanie się przed wejściem na jezdnię"
    ],
    "categories": [
      "bezwarunkowe",
      "warunkowe"
    ],
    "answer": {
      "bezwarunkowe": [
        "kichanie",
        "ssanie",
        "mruganie",
        "odruch kolanowy"
      ],
      "warunkowe": [
        "jazda na rowerze",
        "pisanie",
        "reakcja na dzwonek",
        "rozglądanie się przed wejściem na jezdnię"
      ]
    },
    "explanation": "Odruchy bezwarunkowe są wrodzone i automatyczne, a warunkowe są nabyte i trzeba się ich nauczyć."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż szczegółową drogę informacji wzrokowej od światła odbitego od przedmiotu do świadomego widzenia.",
    "options": null,
    "items": [
      "mózg interpretuje impulsy",
      "soczewka skupia promienie na siatkówce",
      "światło przechodzi przez rogówkę i źrenicę",
      "nerw wzrokowy przesyła impulsy",
      "receptory siatkówki przetwarzają światło na impulsy"
    ],
    "answer": [
      "światło przechodzi przez rogówkę i źrenicę",
      "soczewka skupia promienie na siatkówce",
      "receptory siatkówki przetwarzają światło na impulsy",
      "nerw wzrokowy przesyła impulsy",
      "mózg interpretuje impulsy"
    ],
    "image": "r05_budowa_oka.jpg",
    "explanation": "Światło przechodzi przez rogówkę i źrenicę, soczewka skupia je na siatkówce, receptory tworzą impulsy, nerw wzrokowy przekazuje je do mózgu, a mózg je interpretuje."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż szczegółową drogę bodźca słuchowego od fali dźwiękowej do rozpoznania dźwięku.",
    "options": null,
    "items": [
      "nerw słuchowy przesyła impulsy do mózgu",
      "kosteczki słuchowe przenoszą drgania",
      "małżowina kieruje falę do przewodu słuchowego",
      "komórki słuchowe w ślimaku tworzą impulsy",
      "błona bębenkowa zaczyna drgać",
      "mózg analizuje i rozpoznaje dźwięk"
    ],
    "answer": [
      "małżowina kieruje falę do przewodu słuchowego",
      "błona bębenkowa zaczyna drgać",
      "kosteczki słuchowe przenoszą drgania",
      "komórki słuchowe w ślimaku tworzą impulsy",
      "nerw słuchowy przesyła impulsy do mózgu",
      "mózg analizuje i rozpoznaje dźwięk"
    ],
    "image": "r05_budowa_ucha.jpg",
    "explanation": "Fala jest kierowana do błony bębenkowej, jej drgania przechodzą przez kosteczki do ślimaka, gdzie komórki słuchowe tworzą impulsy. Nerw słuchowy przesyła je do mózgu."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W łuku odruchowym impuls biegnie kolejno przez __________, neuron __________, ośrodek nerwowy, neuron __________ i __________.",
    "options": null,
    "answer": [
      "receptor",
      "czuciowy",
      "ruchowy",
      "mięsień"
    ],
    "altAnswers": [
      [
        "receptor"
      ],
      [
        "czuciowy"
      ],
      [
        "ruchowy"
      ],
      [
        "mięsień",
        "miesien"
      ]
    ],
    "image": "r05_luk_odruchowy.jpg",
    "explanation": "Receptor odbiera bodziec, neuron czuciowy prowadzi impuls do ośrodka nerwowego, neuron ruchowy przekazuje polecenie, a mięsień wykonuje reakcję."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do oka: plamka żółta, plamka ślepa, naczyniówka, kanały półkoliste.",
    "options": null,
    "answer": "kanały półkoliste",
    "explanation": "Kanały półkoliste należą do ucha wewnętrznego i odpowiadają za zmysł równowagi. Pozostałe elementy są częściami oka."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U jednej osoby obraz tworzy się przed siatkówką, a u drugiej za siatkówką. Który zestaw korekcji jest właściwy?",
    "options": [
      "Pierwsza: soczewka wklęsła; druga: soczewka wypukła",
      "Pierwsza: soczewka wypukła; druga: soczewka wklęsła",
      "Obie: soczewki wklęsłe",
      "Obie: soczewki wypukłe",
      "Pierwsza: brak korekcji; druga: soczewka wklęsła",
      "Pierwsza: soczewka wypukła; druga: brak korekcji"
    ],
    "answer": 0,
    "image": "r05_wady_wzroku.jpg",
    "explanation": "Obraz przed siatkówką oznacza krótkowzroczność korygowaną soczewką wklęsłą, a obraz za siatkówką oznacza dalekowzroczność korygowaną soczewką wypukłą."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rodzaj receptora lub komórki z bodźcem, który odbiera.",
    "options": null,
    "left": [
      "czopki i pręciki",
      "komórki słuchowe w ślimaku",
      "receptory węchowe",
      "receptory smaku",
      "receptory temperatury w skórze"
    ],
    "right": [
      "światło",
      "drgania mechaniczne",
      "cząsteczki zapachowe",
      "związki chemiczne rozpuszczone w ślinie",
      "ciepło lub zimno"
    ],
    "answer": {
      "czopki i pręciki": "światło",
      "komórki słuchowe w ślimaku": "drgania mechaniczne",
      "receptory węchowe": "cząsteczki zapachowe",
      "receptory smaku": "związki chemiczne rozpuszczone w ślinie",
      "receptory temperatury w skórze": "ciepło lub zimno"
    },
    "explanation": "Różne receptory są wyspecjalizowane w odbieraniu określonych bodźców: światła, drgań, substancji chemicznych lub temperatury."
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne zależności łączące zmysły z pracą mózgu.",
    "options": [
      "Wrażenia zmysłowe powstają po analizie impulsów w mózgu",
      "Mózg interpretuje impulsy przesłane nerwem wzrokowym",
      "Mózg rozpoznaje impulsy przesłane nerwem słuchowym jako dźwięki",
      "Mózg łączy sygnały smaku i węchu w wrażenie smaku potrawy",
      "Siatkówka samodzielnie odwraca obraz do właściwej pozycji",
      "Kanały półkoliste samodzielnie rozpoznają zapachy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mózg analizuje i interpretuje informacje z narządów zmysłów. Dotyczy to m.in. wzroku, słuchu oraz łączonych wrażeń smaku i węchu."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Układ nerwowy i narządy zmysłów",
  icon: "🧠",
  sectionOrder: [
    "Budowa i funkcje układu nerwowego",
    "Jak dbać o układ nerwowy?",
    "Oko - narząd wzroku",
    "Ucho - narząd słuchu i równowagi",
    "Inne zmysły człowieka - dotyk, smak i węch"
  ],
  sectionIcons: {
    "Budowa i funkcje układu nerwowego": "🧠",
    "Jak dbać o układ nerwowy?": "🛡️",
    "Oko - narząd wzroku": "👁️",
    "Ucho - narząd słuchu i równowagi": "👂",
    "Inne zmysły człowieka - dotyk, smak i węch": "👃"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
