// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WZR  = Budowa i działanie narządu wzroku
//   UCH  = Ucho - narząd słuchu i równowagi
//   HIG  = Higiena oka i ucha
//   ZMY  = Zmysły powonienia, smaku i dotyku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R08_WZR_01",
    "section": "Budowa i działanie narządu wzroku",
    "type": "single_choice",
    "prompt": "W której błonie gałki ocznej znajdują się czopki i pręciki?",
    "options": [
      "Twardówce",
      "Naczyniówce",
      "Siatkówce",
      "Spojówce",
      "Tęczówce",
      "Rogówce"
    ],
    "answer": 2,
    "explanation": "Czopki i pręciki są receptorami wzroku znajdującymi się w siatkówce.",
    "image": "r08_przekroj_galki_ocznej.jpg"
  },
  {
    "id": "R08_WZR_02",
    "section": "Budowa i działanie narządu wzroku",
    "type": "multi_select",
    "prompt": "Zaznacz elementy aparatu ochronnego oka.",
    "options": [
      "Powieki",
      "Rzęsy",
      "Gruczoł łzowy",
      "Spojówka",
      "Soczewka",
      "Nerw wzrokowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Aparat ochronny oka tworzą między innymi powieki, rzęsy, gruczoł łzowy i spojówka.",
    "image": "r08_aparat_ochronny_oka.jpg"
  },
  {
    "id": "R08_WZR_03",
    "section": "Budowa i działanie narządu wzroku",
    "type": "true_false",
    "prompt": "Rogówka jest przezroczystą częścią twardówki położoną z przodu oka.",
    "options": null,
    "answer": true,
    "explanation": "W przedniej części oka twardówka jest cieńsza i przezroczysta; tę część nazywa się rogówką."
  },
  {
    "id": "R08_WZR_04",
    "section": "Budowa i działanie narządu wzroku",
    "type": "fill_in",
    "prompt": "Ściana gałki ocznej jest zbudowana z trzech błon: __________, __________ i __________.",
    "options": null,
    "answer": [
      "twardówki",
      "naczyniówki",
      "siatkówki"
    ],
    "altAnswers": [
      [
        "twardówki",
        "twardowki"
      ],
      [
        "naczyniówki",
        "naczyniowki"
      ],
      [
        "siatkówki",
        "siatkowki"
      ]
    ],
    "explanation": "Trzy błony ściany gałki ocznej to twardówka, naczyniówka i siatkówka."
  },
  {
    "id": "R08_WZR_05",
    "section": "Budowa i działanie narządu wzroku",
    "type": "riddle",
    "prompt": "Jak nazywa się miejsce w siatkówce, w którym znajduje się największe skupisko czopków i które odpowiada za najostrzejsze widzenie?",
    "options": null,
    "answer": "plamka",
    "altAnswers": [
      "plamka"
    ],
    "explanation": "Najwięcej czopków znajduje się w plamce, dlatego jest to miejsce najostrzejszego widzenia."
  },
  {
    "id": "R08_WZR_06",
    "section": "Budowa i działanie narządu wzroku",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest błoną gałki ocznej: twardówka, naczyniówka, siatkówka, młoteczek.",
    "options": null,
    "answer": "młoteczek",
    "explanation": "Twardówka, naczyniówka i siatkówka tworzą ścianę gałki ocznej, a młoteczek jest kosteczką słuchową."
  },
  {
    "id": "R08_WZR_07",
    "section": "Budowa i działanie narządu wzroku",
    "type": "scenario",
    "prompt": "Wchodzisz z jasno oświetlonego miejsca do ciemnego pomieszczenia. Co dzieje się ze źrenicą, aby do oka mogło wpaść więcej światła?",
    "options": [
      "Jej średnica zwiększa się",
      "Jej średnica zmniejsza się",
      "Zmienia się w rogówkę",
      "Przesuwa się na siatkówkę",
      "Zamyka się całkowicie",
      "Nie zachodzi żadna zmiana"
    ],
    "answer": 0,
    "explanation": "Przy słabym oświetleniu mięśnie tęczówki zwiększają średnicę źrenicy. Jest to element adaptacji oka.",
    "image": "r08_zrenica_oswietlenie.jpg"
  },
  {
    "id": "R08_WZR_08",
    "section": "Budowa i działanie narządu wzroku",
    "type": "match",
    "prompt": "Połącz element oka z jego funkcją.",
    "options": null,
    "left": [
      "Tęczówka",
      "Soczewka",
      "Siatkówka",
      "Nerw wzrokowy"
    ],
    "right": [
      "Nadaje oku kolor i reguluje średnicę źrenicy",
      "Załamuje promienie świetlne",
      "Zawiera receptory bodźców świetlnych",
      "Przekazuje impulsy do mózgu"
    ],
    "answer": {
      "Tęczówka": "Nadaje oku kolor i reguluje średnicę źrenicy",
      "Soczewka": "Załamuje promienie świetlne",
      "Siatkówka": "Zawiera receptory bodźców świetlnych",
      "Nerw wzrokowy": "Przekazuje impulsy do mózgu"
    },
    "explanation": "Tęczówka reguluje ilość światła, soczewka je załamuje, siatkówka odbiera bodźce, a nerw wzrokowy przewodzi informację do mózgu.",
    "image": "r08_przekroj_galki_ocznej.jpg"
  },
  {
    "id": "R08_WZR_09",
    "section": "Budowa i działanie narządu wzroku",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do aparatu ochronnego oka albo do gałki ocznej.",
    "options": null,
    "items": [
      "Powieka",
      "Rzęsy",
      "Spojówka",
      "Gruczoł łzowy",
      "Rogówka",
      "Soczewka",
      "Siatkówka",
      "Ciało szkliste"
    ],
    "categories": [
      "Aparat ochronny",
      "Gałka oczna"
    ],
    "answer": {
      "Aparat ochronny": [
        "Powieka",
        "Rzęsy",
        "Spojówka",
        "Gruczoł łzowy"
      ],
      "Gałka oczna": [
        "Rogówka",
        "Soczewka",
        "Siatkówka",
        "Ciało szkliste"
      ]
    },
    "explanation": "Powieki, rzęsy, spojówka i gruczoł łzowy chronią oko. Rogówka, soczewka, siatkówka i ciało szkliste są elementami gałki ocznej.",
    "image": "r08_przekroj_galki_ocznej.jpg"
  },
  {
    "id": "R08_WZR_10",
    "section": "Budowa i działanie narządu wzroku",
    "type": "sequence",
    "prompt": "Ułóż drogę informacji wzrokowej od wejścia światła do oka do przekazania informacji do mózgu.",
    "options": null,
    "items": [
      "Soczewka",
      "Nerw wzrokowy",
      "Rogówka",
      "Siatkówka",
      "Źrenica"
    ],
    "answer": [
      "Rogówka",
      "Źrenica",
      "Soczewka",
      "Siatkówka",
      "Nerw wzrokowy"
    ],
    "explanation": "Światło przechodzi przez rogówkę i źrenicę, jest załamywane przez soczewkę i skupia się na siatkówce. Informacja z receptorów biegnie nerwem wzrokowym do mózgu."
  },
  {
    "id": "R08_WZR_11",
    "section": "Budowa i działanie narządu wzroku",
    "type": "single_choice",
    "prompt": "Jak zmienia się soczewka, gdy patrzymy na przedmiot znajdujący się blisko?",
    "options": [
      "Uwypukla się",
      "Spłaszcza się",
      "Staje się nieprzezroczysta",
      "Zmniejsza średnicę źrenicy",
      "Przesuwa się do plamki",
      "Przestaje załamywać światło"
    ],
    "answer": 0,
    "explanation": "Podczas widzenia bliskiego soczewka się uwypukla, dzięki czemu światło jest mocniej załamywane.",
    "image": "r08_ogniskowanie_oka.jpg"
  },
  {
    "id": "R08_WZR_12",
    "section": "Budowa i działanie narządu wzroku",
    "type": "true_false",
    "prompt": "Na siatkówce powstaje powiększony i nieodwrócony obraz oglądanego przedmiotu.",
    "options": null,
    "answer": false,
    "explanation": "Na siatkówce powstaje obraz pomniejszony i odwrócony.",
    "image": "r08_ogniskowanie_oka.jpg"
  },
  {
    "id": "R08_WZR_13",
    "section": "Budowa i działanie narządu wzroku",
    "type": "scenario",
    "prompt": "Podczas doświadczenia z krzyżykiem i kropką jeden z symboli na chwilę przestaje być widoczny. Co najlepiej wyjaśnia to zjawisko?",
    "options": [
      "Obraz symbolu pada na tarczę nerwu wzrokowego pozbawioną receptorów",
      "Soczewka przestaje załamywać światło",
      "Tęczówka całkowicie zasłania źrenicę",
      "Czopki zamieniają się w pręciki",
      "Rogówka staje się nieprzezroczysta",
      "Gruczoł łzowy zatrzymuje światło"
    ],
    "answer": 0,
    "explanation": "Tarcza nerwu wzrokowego nie zawiera receptorów wzroku. Gdy obraz symbolu pada na to miejsce, nie jest rejestrowany."
  },
  {
    "id": "R08_WZR_14",
    "section": "Budowa i działanie narządu wzroku",
    "type": "single_choice",
    "prompt": "Jaka jest w przybliżeniu średnica źrenicy przy słabym oświetleniu?",
    "options": [
      "1-2 mm",
      "2-3 mm",
      "4-5 mm",
      "5-6 mm",
      "7-8 mm",
      "10-12 mm"
    ],
    "answer": 4,
    "explanation": "Przy słabym oświetleniu średnica źrenicy wynosi około 7-8 mm; przy silnym świetle zmniejsza się do około 2-3 mm.",
    "image": "r08_zrenica_oswietlenie.jpg"
  },
  {
    "id": "R08_UCH_01",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "single_choice",
    "prompt": "Które elementy tworzą ucho zewnętrzne?",
    "options": [
      "Małżowina uszna i przewód słuchowy",
      "Ślimak i kanały półkoliste",
      "Jama bębenkowa i trąbka słuchowa",
      "Młoteczek i kowadełko",
      "Przedsionek i ślimak",
      "Błona bębenkowa i siatkówka"
    ],
    "answer": 0,
    "explanation": "Ucho zewnętrzne tworzą małżowina uszna i przewód słuchowy.",
    "image": "r08_budowa_ucha.jpg"
  },
  {
    "id": "R08_UCH_02",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do ucha środkowego.",
    "options": [
      "Jama bębenkowa",
      "Młoteczek",
      "Kowadełko",
      "Strzemiączko",
      "Trąbka słuchowa",
      "Ślimak"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Ucho środkowe obejmuje jamę bębenkową z trzema kosteczkami słuchowymi oraz trąbkę słuchową."
  },
  {
    "id": "R08_UCH_03",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "true_false",
    "prompt": "W ślimaku znajdują się komórki zmysłowe będące właściwymi receptorami słuchu.",
    "options": null,
    "answer": true,
    "explanation": "Komórki zmysłowe ślimaka przetwarzają drgania na impulsy nerwowe."
  },
  {
    "id": "R08_UCH_04",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "fill_in",
    "prompt": "Trzy kosteczki słuchowe to: __________, __________ i __________.",
    "options": null,
    "answer": [
      "młoteczek",
      "kowadełko",
      "strzemiączko"
    ],
    "altAnswers": [
      [
        "młoteczek",
        "mloteczek"
      ],
      [
        "kowadełko",
        "kowadelko"
      ],
      [
        "strzemiączko",
        "strzemiaczko"
      ]
    ],
    "explanation": "W jamie bębenkowej znajdują się młoteczek, kowadełko i strzemiączko."
  },
  {
    "id": "R08_UCH_05",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "riddle",
    "prompt": "Jaki przewód łączy ucho środkowe z gardłem i pomaga utrzymać jednakowe ciśnienie po obu stronach błony bębenkowej?",
    "options": null,
    "answer": "trąbka słuchowa",
    "altAnswers": [
      "trąbka słuchowa",
      "trabka sluchowa"
    ],
    "explanation": "Trąbka słuchowa łączy ucho środkowe z gardłem i wyrównuje ciśnienie po obu stronach błony bębenkowej."
  },
  {
    "id": "R08_UCH_06",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do drogi dźwięku w uchu: małżowina uszna, przewód słuchowy, błona bębenkowa, siatkówka.",
    "options": null,
    "answer": "siatkówka",
    "explanation": "Siatkówka należy do narządu wzroku. Pozostałe elementy uczestniczą w odbieraniu dźwięku."
  },
  {
    "id": "R08_UCH_07",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "scenario",
    "prompt": "Podczas szybkiej zmiany wysokości odczuwasz różnicę ciśnienia w uszach. Który element ucha pomaga wyrównać ciśnienie po obu stronach błony bębenkowej?",
    "options": [
      "Trąbka słuchowa",
      "Ślimak",
      "Kanał półkolisty",
      "Małżowina uszna",
      "Przewód słuchowy",
      "Nerw wzrokowy"
    ],
    "answer": 0,
    "explanation": "Trąbka słuchowa umożliwia utrzymanie jednakowego ciśnienia powietrza po obu stronach błony bębenkowej."
  },
  {
    "id": "R08_UCH_08",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "match",
    "prompt": "Połącz element ucha z jego funkcją.",
    "options": null,
    "left": [
      "Małżowina uszna",
      "Błona bębenkowa",
      "Ślimak",
      "Kanały półkoliste"
    ],
    "right": [
      "Wychwytuje fale dźwiękowe",
      "Wprawiana jest w drgania przez falę dźwiękową",
      "Zawiera receptory słuchu",
      "Rejestruje zmiany położenia ciała"
    ],
    "answer": {
      "Małżowina uszna": "Wychwytuje fale dźwiękowe",
      "Błona bębenkowa": "Wprawiana jest w drgania przez falę dźwiękową",
      "Ślimak": "Zawiera receptory słuchu",
      "Kanały półkoliste": "Rejestruje zmiany położenia ciała"
    },
    "explanation": "Każdy z tych elementów pełni inną rolę w odbiorze dźwięku albo utrzymaniu równowagi.",
    "image": "r08_budowa_ucha.jpg"
  },
  {
    "id": "R08_UCH_09",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "sort",
    "prompt": "Przyporządkuj elementy ucha do właściwej części.",
    "options": null,
    "items": [
      "Małżowina uszna",
      "Przewód słuchowy",
      "Jama bębenkowa",
      "Kosteczki słuchowe",
      "Trąbka słuchowa",
      "Przedsionek",
      "Ślimak",
      "Kanały półkoliste"
    ],
    "categories": [
      "Ucho zewnętrzne",
      "Ucho środkowe",
      "Ucho wewnętrzne"
    ],
    "answer": {
      "Ucho zewnętrzne": [
        "Małżowina uszna",
        "Przewód słuchowy"
      ],
      "Ucho środkowe": [
        "Jama bębenkowa",
        "Kosteczki słuchowe",
        "Trąbka słuchowa"
      ],
      "Ucho wewnętrzne": [
        "Przedsionek",
        "Ślimak",
        "Kanały półkoliste"
      ]
    },
    "explanation": "Ucho zewnętrzne wychwytuje fale, środkowe przenosi i wzmacnia drgania, a wewnętrzne zawiera ślimak i narząd równowagi.",
    "image": "r08_budowa_ucha.jpg"
  },
  {
    "id": "R08_UCH_10",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "sequence",
    "prompt": "Ułóż kolejne elementy drogi drgań dźwiękowych od ucha zewnętrznego do ostatniej kosteczki słuchowej.",
    "options": null,
    "items": [
      "Kowadełko",
      "Przewód słuchowy",
      "Strzemiączko",
      "Małżowina uszna",
      "Młoteczek",
      "Błona bębenkowa"
    ],
    "answer": [
      "Małżowina uszna",
      "Przewód słuchowy",
      "Błona bębenkowa",
      "Młoteczek",
      "Kowadełko",
      "Strzemiączko"
    ],
    "explanation": "Fala jest wychwytywana przez małżowinę, przechodzi przewodem, porusza błonę bębenkową, a następnie młoteczek, kowadełko i strzemiączko."
  },
  {
    "id": "R08_UCH_11",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "single_choice",
    "prompt": "Która kosteczka słuchowa przekazuje drgania do ucha wewnętrznego?",
    "options": [
      "Młoteczek",
      "Kowadełko",
      "Strzemiączko",
      "Przedsionek",
      "Ślimak",
      "Małżowina uszna"
    ],
    "answer": 2,
    "explanation": "Ostatnią kosteczką w łańcuchu jest strzemiączko, które przekazuje drgania do ucha wewnętrznego.",
    "image": "r08_budowa_ucha.jpg"
  },
  {
    "id": "R08_UCH_12",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "true_false",
    "prompt": "Ucho wewnętrzne tworzą przestrzenie wewnątrz kości czaszki nazywane błędnikiem.",
    "options": null,
    "answer": true,
    "explanation": "Błędnik jest częścią ucha wewnętrznego i obejmuje przedsionek, ślimak oraz kanały półkoliste."
  },
  {
    "id": "R08_UCH_13",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "scenario",
    "prompt": "Podczas kołysania statku pojawiają się mdłości i zawroty głowy. Który mechanizm najlepiej wyjaśnia te objawy?",
    "options": [
      "Kanały półkoliste wysyłają bardzo dużo impulsów podczas gwałtownych i częstych zmian położenia",
      "Soczewka oka zbyt mocno załamuje światło",
      "Woskowina blokuje przepływ krwi",
      "Siatkówka przestaje odbierać kolory",
      "Błona bębenkowa przestaje drgać",
      "Gruczoł łzowy produkuje zbyt mało łez"
    ],
    "answer": 0,
    "explanation": "Podczas częstych zmian położenia kanały półkoliste wysyłają ogromną liczbę impulsów, a układ nerwowy nie nadąża z dostosowaniem organizmu. Może pojawić się choroba morska.",
    "image": "r08_kanaly_polkoliste.jpg"
  },
  {
    "id": "R08_UCH_14",
    "section": "Ucho - narząd słuchu i równowagi",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o kanałach półkolistych.",
    "options": [
      "Są wypełnione płynem",
      "Zawierają komórki zmysłowe z rzęskami",
      "Każdy leży w innej płaszczyźnie",
      "Ruch płynu może powodować powstawanie impulsów nerwowych",
      "Znajdują się w twardówce",
      "Służą głównie do rozpoznawania barw"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ruch płynu w kanałach półkolistych odchyla rzęski receptorów, co prowadzi do powstawania impulsów informujących mózg o zmianie położenia ciała.",
    "image": "r08_kanaly_polkoliste.jpg"
  },
  {
    "id": "R08_HIG_01",
    "section": "Higiena oka i ucha",
    "type": "single_choice",
    "prompt": "Jakimi soczewkami koryguje się krótkowzroczność?",
    "options": [
      "Dwuwklęsłymi",
      "Wypukłymi",
      "Cylindrycznymi",
      "Płaskimi",
      "Barwnymi",
      "Nieprzezroczystymi"
    ],
    "answer": 0,
    "explanation": "W krótkowzroczności promienie skupiają się przed siatkówką, a korekcję wykonuje się soczewkami dwuwklęsłymi.",
    "image": "r08_wady_wzroku.jpg"
  },
  {
    "id": "R08_HIG_02",
    "section": "Higiena oka i ucha",
    "type": "multi_select",
    "prompt": "Zaznacz zachowania pomagające dbać o wzrok.",
    "options": [
      "Noszenie okularów z filtrem UV w słoneczny dzień",
      "Unikanie bezpośredniego patrzenia na słońce lub żarówkę",
      "Czytanie przy odpowiednim oświetleniu",
      "Okresowe patrzenie w dal podczas czytania",
      "Długie wpatrywanie się w ekran bez przerw",
      "Czytanie książki w ciemnym pokoju"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Oczy należy chronić przed zbyt silnym światłem, zapewniać właściwe oświetlenie i robić przerwy od patrzenia z bliska."
  },
  {
    "id": "R08_HIG_03",
    "section": "Higiena oka i ucha",
    "type": "true_false",
    "prompt": "W dalekowzroczności promienie świetlne mogą skupiać się za siatkówką.",
    "options": null,
    "answer": true,
    "explanation": "Przy dalekowzroczności gałka oczna może być skrócona lub światło może być zbyt słabo załamywane, dlatego ognisko powstaje za siatkówką.",
    "image": "r08_wady_wzroku.jpg"
  },
  {
    "id": "R08_HIG_04",
    "section": "Higiena oka i ucha",
    "type": "fill_in",
    "prompt": "W astygmatyzmie światło nie jest skupiane w jednym punkcie, a korekcja polega na zastosowaniu soczewek __________.",
    "options": null,
    "answer": [
      "cylindrycznych"
    ],
    "altAnswers": [
      [
        "cylindrycznych",
        "cylindryczne"
      ]
    ],
    "explanation": "Astygmatyzm wiąże się z niewłaściwym kształtem soczewki lub nierówną powierzchnią rogówki i koryguje się go soczewkami cylindrycznymi."
  },
  {
    "id": "R08_HIG_05",
    "section": "Higiena oka i ucha",
    "type": "riddle",
    "prompt": "Jak nazywa się choroba oka, w której soczewka mętnieje, a widzenie staje się nieostre i przymglone?",
    "options": null,
    "answer": "zaćma",
    "altAnswers": [
      "zaćma",
      "zacma"
    ],
    "explanation": "Zaćma polega na zmętnieniu soczewki; może powodować nieostre, przymglone widzenie i zaburzoną ocenę odległości.",
    "image": "r08_choroby_oczu.jpg"
  },
  {
    "id": "R08_HIG_06",
    "section": "Higiena oka i ucha",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który jest chorobą oka, a nie wadą wzroku korygowaną soczewkami: krótkowzroczność, dalekowzroczność, astygmatyzm, zaćma.",
    "options": null,
    "answer": "zaćma",
    "explanation": "Krótkowzroczność, dalekowzroczność i astygmatyzm są wadami wzroku korygowanymi odpowiednimi soczewkami, natomiast zaćma jest chorobą polegającą na zmętnieniu soczewki."
  },
  {
    "id": "R08_HIG_07",
    "section": "Higiena oka i ucha",
    "type": "scenario",
    "prompt": "U pacjenta stopniowo zawęża się pole widzenia, a lekarz stwierdza uszkodzenie nerwu wzrokowego. Która choroba najbardziej pasuje do tego opisu?",
    "options": [
      "Jaskra",
      "Zaćma",
      "Jęczmień",
      "Zapalenie spojówek",
      "Daltonizm",
      "Astygmatyzm"
    ],
    "answer": 0,
    "explanation": "Jaskra wiąże się z uszkodzeniem nerwu wzrokowego, a jej objawem jest zawężenie pola widzenia.",
    "image": "r08_choroby_oczu.jpg"
  },
  {
    "id": "R08_HIG_08",
    "section": "Higiena oka i ucha",
    "type": "match",
    "prompt": "Połącz wadę lub chorobę z właściwym sposobem korekcji albo leczenia.",
    "options": null,
    "left": [
      "Krótkowzroczność",
      "Dalekowzroczność",
      "Astygmatyzm",
      "Zaćma"
    ],
    "right": [
      "Soczewki dwuwklęsłe",
      "Soczewki wypukłe",
      "Soczewki cylindryczne",
      "Chirurgiczne zastąpienie zmętniałej soczewki"
    ],
    "answer": {
      "Krótkowzroczność": "Soczewki dwuwklęsłe",
      "Dalekowzroczność": "Soczewki wypukłe",
      "Astygmatyzm": "Soczewki cylindryczne",
      "Zaćma": "Chirurgiczne zastąpienie zmętniałej soczewki"
    },
    "explanation": "Każda z tych wad lub chorób wymaga innego sposobu korekcji albo leczenia.",
    "image": "r08_wady_wzroku.jpg"
  },
  {
    "id": "R08_HIG_09",
    "section": "Higiena oka i ucha",
    "type": "sort",
    "prompt": "Przyporządkuj nazwy do wad wzroku albo chorób oczu.",
    "options": null,
    "items": [
      "Krótkowzroczność",
      "Dalekowzroczność",
      "Astygmatyzm",
      "Zapalenie spojówek",
      "Jęczmień",
      "Jaskra",
      "Zaćma"
    ],
    "categories": [
      "Wady wzroku",
      "Choroby oczu"
    ],
    "answer": {
      "Wady wzroku": [
        "Krótkowzroczność",
        "Dalekowzroczność",
        "Astygmatyzm"
      ],
      "Choroby oczu": [
        "Zapalenie spojówek",
        "Jęczmień",
        "Jaskra",
        "Zaćma"
      ]
    },
    "explanation": "Krótkowzroczność, dalekowzroczność i astygmatyzm to wady wzroku. Zapalenie spojówek, jęczmień, jaskra i zaćma są chorobami oczu."
  },
  {
    "id": "R08_HIG_10",
    "section": "Higiena oka i ucha",
    "type": "sequence",
    "prompt": "Ułóż ciąg zdarzeń pokazujący, jak długotrwały nadmierny hałas może doprowadzić do utraty słuchu.",
    "options": null,
    "items": [
      "Uszkodzenie komórek zmysłowych ślimaka",
      "Silne drgania błony bębenkowej i kosteczek",
      "Upośledzenie lub utrata słuchu",
      "Długotrwałe działanie zbyt głośnych dźwięków"
    ],
    "answer": [
      "Długotrwałe działanie zbyt głośnych dźwięków",
      "Silne drgania błony bębenkowej i kosteczek",
      "Uszkodzenie komórek zmysłowych ślimaka",
      "Upośledzenie lub utrata słuchu"
    ],
    "explanation": "Długotrwały hałas wywołuje bardzo silne drgania, które mogą uszkodzić elementy ucha oraz nieregenerujące się komórki zmysłowe ślimaka."
  },
  {
    "id": "R08_HIG_11",
    "section": "Higiena oka i ucha",
    "type": "single_choice",
    "prompt": "W jakiej jednostce mierzy się natężenie dźwięku?",
    "options": [
      "Decybelach",
      "Milimetrach",
      "Litrach",
      "Stopniach Celsjusza",
      "Centymetrach kwadratowych",
      "Sekundach"
    ],
    "answer": 0,
    "explanation": "Natężenie dźwięku jest mierzone w decybelach, oznaczanych skrótem dB.",
    "image": "r08_ochrona_sluchu.jpg"
  },
  {
    "id": "R08_HIG_12",
    "section": "Higiena oka i ucha",
    "type": "true_false",
    "prompt": "Komórki zmysłowe w ślimaku mają zdolność regeneracji po uszkodzeniu przez hałas.",
    "options": null,
    "answer": false,
    "explanation": "Komórki zmysłowe ślimaka nie mają zdolności regeneracji, dlatego ich uszkodzenie może prowadzić do trwałego upośledzenia lub utraty słuchu."
  },
  {
    "id": "R08_HIG_13",
    "section": "Higiena oka i ucha",
    "type": "scenario",
    "prompt": "Po krótkim przebywaniu w głośnym miejscu przez pewien czas słyszysz szum w uszach. Co najlepiej opisuje tę sytuację?",
    "options": [
      "Chwilowe zakłócenie słuchu po krótkotrwałym hałasie",
      "Pewna całkowita głuchota",
      "Zaćma",
      "Adaptacja oka",
      "Uszkodzenie siatkówki przez światło",
      "Daltonizm"
    ],
    "answer": 0,
    "explanation": "Krótkotrwały hałas może wywołać chwilowe zakłócenie słuchu i szum w uszach, a rzadko prowadzi do trwałych urazów.",
    "image": "r08_ochrona_sluchu.jpg"
  },
  {
    "id": "R08_HIG_14",
    "section": "Higiena oka i ucha",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które mogą zostać uszkodzone przez długotrwałe działanie zbyt głośnych dźwięków.",
    "options": [
      "Błona bębenkowa",
      "Kosteczki słuchowe",
      "Komórki zmysłowe ślimaka",
      "Twardówka",
      "Kubki smakowe",
      "Gruczoł łzowy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nadmierny hałas może uszkodzić błonę bębenkową, kosteczki słuchowe oraz komórki zmysłowe ślimaka.",
    "image": "r08_ochrona_sluchu.jpg"
  },
  {
    "id": "R08_ZMY_01",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "single_choice",
    "prompt": "Gdzie znajdują się komórki węchowe?",
    "options": [
      "W górnej części jamy nosowej",
      "W ślimaku",
      "Na siatkówce",
      "W jamie bębenkowej",
      "W soczewce",
      "W trąbce słuchowej"
    ],
    "answer": 0,
    "explanation": "Komórki węchowe leżą w górnej części jamy nosowej i są pobudzane przez cząsteczki substancji zapachowych.",
    "image": "r08_komorki_wechowe.jpg"
  },
  {
    "id": "R08_ZMY_02",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "multi_select",
    "prompt": "Zaznacz pięć podstawowych smaków rozróżnianych przez człowieka.",
    "options": [
      "Słodki",
      "Słony",
      "Kwaśny",
      "Gorzki",
      "Umami",
      "Ostry"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Pięć podstawowych smaków to słodki, słony, kwaśny, gorzki i umami. Ostre wrażenie jest związane z pobudzeniem receptorów bólu.",
    "image": "r08_budowa_jezyka.jpg"
  },
  {
    "id": "R08_ZMY_03",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "true_false",
    "prompt": "Smak ostry jest jednym z pięciu podstawowych smaków.",
    "options": null,
    "answer": false,
    "explanation": "Ostra substancja, na przykład z papryczki chilli, pobudza receptory bólu w języku, a nie kubki smakowe."
  },
  {
    "id": "R08_ZMY_04",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "fill_in",
    "prompt": "Związki chemiczne z pożywienia rozpuszczają się w __________, a następnie pobudzają __________ w kubkach smakowych.",
    "options": null,
    "answer": [
      "ślinie",
      "komórki smakowe"
    ],
    "altAnswers": [
      [
        "ślinie",
        "slinie"
      ],
      [
        "komórki smakowe",
        "komorki smakowe"
      ]
    ],
    "explanation": "Pokarm musi być nawilżony: związki chemiczne rozpuszczają się w ślinie, wnikają do kubków smakowych i pobudzają komórki smakowe."
  },
  {
    "id": "R08_ZMY_05",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "riddle",
    "prompt": "Jak nazywa się podstawowy smak określany jako mięsny?",
    "options": null,
    "answer": "umami",
    "altAnswers": [
      "umami"
    ],
    "explanation": "Umami jest jednym z pięciu podstawowych smaków i jest opisywany jako smak mięsny."
  },
  {
    "id": "R08_ZMY_06",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest rodzajem brodawki języka: liściasta, grzybowata, okolona, kanał półkolisty.",
    "options": null,
    "answer": "kanał półkolisty",
    "explanation": "Liściaste, grzybowate i okolone są rodzajami brodawek języka. Kanał półkolisty jest częścią ucha wewnętrznego."
  },
  {
    "id": "R08_ZMY_07",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "scenario",
    "prompt": "Masz silny katar i znane potrawy wydają ci się inne w smaku. Co najlepiej wyjaśnia to zjawisko?",
    "options": [
      "Zmysł węchu współdziała ze zmysłem smaku w ocenie pokarmu",
      "Kanały półkoliste przestają działać",
      "Soczewka zmienia kształt",
      "Błona bębenkowa rozszerza się",
      "Pręciki przestają reagować na światło",
      "Skóra traci receptory bólu"
    ],
    "answer": 0,
    "explanation": "Gdy węch jest mniej sprawny, na przykład podczas kataru, zmienia się całość doznań powstających dzięki współpracy smaku i powonienia."
  },
  {
    "id": "R08_ZMY_08",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "match",
    "prompt": "Połącz receptor lub narząd z odbieranym bodźcem.",
    "options": null,
    "left": [
      "Komórki węchowe",
      "Komórki smakowe",
      "Receptory dotyku w skórze",
      "Receptory bólu"
    ],
    "right": [
      "Cząsteczki substancji zapachowych",
      "Związki chemiczne rozpuszczone w ślinie",
      "Dotyk i ucisk",
      "Silne bodźce mogące uszkodzić ciało"
    ],
    "answer": {
      "Komórki węchowe": "Cząsteczki substancji zapachowych",
      "Komórki smakowe": "Związki chemiczne rozpuszczone w ślinie",
      "Receptory dotyku w skórze": "Dotyk i ucisk",
      "Receptory bólu": "Silne bodźce mogące uszkodzić ciało"
    },
    "explanation": "Powonienie i smak reagują na bodźce chemiczne, natomiast receptory skóry odbierają między innymi dotyk, ucisk i ból."
  },
  {
    "id": "R08_ZMY_09",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do zmysłu powonienia, smaku albo dotyku.",
    "options": null,
    "items": [
      "Komórki węchowe",
      "Jama nosowa",
      "Kubki smakowe",
      "Brodawki grzybowate",
      "Skóra",
      "Receptory bólu"
    ],
    "categories": [
      "Powonienie",
      "Smak",
      "Dotyk"
    ],
    "answer": {
      "Powonienie": [
        "Komórki węchowe",
        "Jama nosowa"
      ],
      "Smak": [
        "Kubki smakowe",
        "Brodawki grzybowate"
      ],
      "Dotyk": [
        "Skóra",
        "Receptory bólu"
      ]
    },
    "explanation": "Komórki węchowe znajdują się w jamie nosowej, kubki smakowe w określonych brodawkach języka, a receptory dotyku i bólu w skórze."
  },
  {
    "id": "R08_ZMY_10",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania wrażenia smakowego.",
    "options": null,
    "items": [
      "Impulsy docierają nerwami do kory mózgowej",
      "Związki chemiczne rozpuszczają się w ślinie",
      "Komórki smakowe zostają pobudzone",
      "Związki chemiczne wnikają do kubków smakowych",
      "Informacja jest interpretowana jako określony smak"
    ],
    "answer": [
      "Związki chemiczne rozpuszczają się w ślinie",
      "Związki chemiczne wnikają do kubków smakowych",
      "Komórki smakowe zostają pobudzone",
      "Impulsy docierają nerwami do kory mózgowej",
      "Informacja jest interpretowana jako określony smak"
    ],
    "explanation": "Pokarm jest najpierw rozpuszczany w ślinie, substancje docierają do kubków i pobudzają komórki smakowe, a impulsy są następnie interpretowane w korze mózgowej."
  },
  {
    "id": "R08_ZMY_11",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "single_choice",
    "prompt": "Na których brodawkach języka nie ma kubków smakowych?",
    "options": [
      "Nitkowatych",
      "Liściastych",
      "Grzybowatych",
      "Okolonych",
      "Liściastych i okolonych",
      "Grzybowatych i okolonych"
    ],
    "answer": 0,
    "explanation": "Kubki smakowe występują na brodawkach liściastych, grzybowatych i okolonych, ale nie na nitkowatych.",
    "image": "r08_budowa_jezyka.jpg"
  },
  {
    "id": "R08_ZMY_12",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "true_false",
    "prompt": "Receptory bólu są najliczniejszymi receptorami występującymi w skórze.",
    "options": null,
    "answer": true,
    "explanation": "Receptory bólu są najliczniejsze spośród receptorów skóry i pełnią ważną funkcję ochronną.",
    "image": "r08_dotyk_braille.jpg"
  },
  {
    "id": "R08_ZMY_13",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "scenario",
    "prompt": "Osoba niewidoma rozpoznaje wypukłe punkty alfabetu Braille'a opuszkami palców. Który zmysł jest tu szczególnie wykorzystywany?",
    "options": [
      "Dotyk",
      "Wzrok",
      "Słuch",
      "Równowaga",
      "Powonienie",
      "Smak"
    ],
    "answer": 0,
    "explanation": "Bardzo wrażliwe opuszki palców pozwalają odczytywać wypukłe punkty dzięki zmysłowi dotyku.",
    "image": "r08_dotyk_braille.jpg"
  },
  {
    "id": "R08_ZMY_14",
    "section": "Zmysły powonienia, smaku i dotyku",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o zmyśle powonienia.",
    "options": [
      "Pomaga oceniać pokarm",
      "Może ostrzegać przed substancjami trującymi",
      "Komórki węchowe wykrywają nawet bardzo małe ilości substancji chemicznych",
      "Przy katarze wrażenia smakowe mogą się zmieniać",
      "Receptory węchu znajdują się w ślimaku",
      "Powonienie odbiera wyłącznie bodźce mechaniczne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Powonienie reaguje na bodźce chemiczne, współdziała ze smakiem i może ostrzegać przed niebezpiecznymi substancjami.",
    "image": "r08_komorki_wechowe.jpg"
  },
  {
    "id": "R08_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie liczby receptorów w jednym oku jest prawidłowe?",
    "options": [
      "Około 120 mln pręcików i 7 mln czopków",
      "Około 7 mln pręcików i 120 mln czopków",
      "Około 120 tys. pręcików i 7 tys. czopków",
      "Po około 60 mln pręcików i czopków",
      "Około 12 mln pręcików i 70 mln czopków",
      "Po około 7 mln pręcików i czopków"
    ],
    "answer": 0,
    "explanation": "W jednym oku znajduje się około 120 mln pręcików i około 7 mln czopków.",
    "image": "r08_przekroj_galki_ocznej.jpg"
  },
  {
    "id": "R08_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Przy słabym oświetleniu źrenica ma około __________ mm średnicy, a przy silnym świetle około __________ mm.",
    "options": null,
    "answer": [
      "7-8",
      "2-3"
    ],
    "altAnswers": [
      [
        "7-8",
        "7–8"
      ],
      [
        "2-3",
        "2–3"
      ]
    ],
    "explanation": "Adaptacja oka obejmuje zmianę średnicy źrenicy: około 7-8 mm w słabym świetle i około 2-3 mm w silnym.",
    "image": "r08_zrenica_oswietlenie.jpg"
  },
  {
    "id": "R08_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz błonę gałki ocznej z jej najbardziej charakterystyczną cechą lub funkcją.",
    "options": null,
    "left": [
      "Twardówka",
      "Naczyniówka",
      "Siatkówka"
    ],
    "right": [
      "Chroni głębiej położone elementy oka",
      "Dostarcza tlen i substancje odżywcze",
      "Zawiera czopki i pręciki"
    ],
    "answer": {
      "Twardówka": "Chroni głębiej położone elementy oka",
      "Naczyniówka": "Dostarcza tlen i substancje odżywcze",
      "Siatkówka": "Zawiera czopki i pręciki"
    },
    "explanation": "Twardówka pełni funkcję ochronną, naczyniówka odżywia gałkę oczną, a siatkówka odbiera bodźce świetlne.",
    "image": "r08_przekroj_galki_ocznej.jpg"
  },
  {
    "id": "R08_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pełny ciąg od światła odbitego od przedmiotu do powstania informacji analizowanej przez mózg.",
    "options": null,
    "items": [
      "Pobudzenie czopków i pręcików",
      "Przejście światła przez źrenicę",
      "Przekazanie impulsów nerwem wzrokowym",
      "Załamanie promieni przez soczewkę",
      "Przejście światła przez rogówkę",
      "Powstanie obrazu na siatkówce"
    ],
    "answer": [
      "Przejście światła przez rogówkę",
      "Przejście światła przez źrenicę",
      "Załamanie promieni przez soczewkę",
      "Powstanie obrazu na siatkówce",
      "Pobudzenie czopków i pręcików",
      "Przekazanie impulsów nerwem wzrokowym"
    ],
    "explanation": "Rogówka i źrenica prowadzą światło do soczewki, soczewka skupia je na siatkówce, receptory przetwarzają bodziec, a nerw wzrokowy prowadzi impulsy do mózgu."
  },
  {
    "id": "R08_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu obserwator patrzy jednym okiem na krzyżyk i przysuwa kartkę. W pewnej odległości kropka znika, a potem przy dalszym zbliżaniu może znów być widoczna. Co jest kluczową przyczyną chwilowego zniknięcia?",
    "options": [
      "Obraz kropki pada na tarczę nerwu wzrokowego bez receptorów",
      "Źrenica ma dokładnie 2 mm",
      "Soczewka jest całkowicie płaska",
      "Pręciki reagują wyłącznie na kolor czerwony",
      "Spojówka zasłania siatkówkę",
      "Ciało szkliste pochłania światło"
    ],
    "answer": 0,
    "explanation": "Tarcza nerwu wzrokowego jest pozbawiona receptorów. Gdy obraz pada właśnie na ten obszar, bodziec nie jest rejestrowany."
  },
  {
    "id": "R08_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem jaskry.",
    "options": [
      "Dochodzi do uszkodzenia nerwu wzrokowego",
      "Możliwą przyczyną jest zbyt wysokie ciśnienie płynu wewnątrz oka",
      "Możliwą przyczyną jest niedokrwienie",
      "Objawem może być zawężenie pola widzenia",
      "Leczenie może obejmować obniżanie ciśnienia w gałce ocznej",
      "Podstawową zmianą jest zmętnienie soczewki"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Jaskra wiąże się z uszkodzeniem nerwu wzrokowego. Może mieć związek z niedokrwieniem lub zbyt wysokim ciśnieniem wewnątrz oka, a leczenie obejmuje między innymi jego obniżanie.",
    "image": "r08_choroby_oczu.jpg"
  },
  {
    "id": "R08_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który mechanizm jest charakterystyczny dla jaskry, a nie dla zaćmy?",
    "options": [
      "Uszkodzenie nerwu wzrokowego związane między innymi ze zbyt wysokim ciśnieniem wewnątrz oka",
      "Zmętnienie soczewki związane ze starzeniem",
      "Nieostre i przymglone widzenie",
      "Chirurgiczne zastąpienie zniszczonej soczewki",
      "Zmiana barwy zmętniałej soczewki",
      "Możliwe widzenie podwójne jednym okiem"
    ],
    "answer": 0,
    "explanation": "Jaskra dotyczy uszkodzenia nerwu wzrokowego i może być związana z wysokim ciśnieniem płynu wewnątrz oka. Pozostałe odpowiedzi opisują zaćmę.",
    "image": "r08_choroby_oczu.jpg"
  },
  {
    "id": "R08_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do ucha zewnętrznego, środkowego i wewnętrznego.",
    "options": null,
    "items": [
      "Małżowina uszna",
      "Przewód słuchowy",
      "Jama bębenkowa",
      "Młoteczek",
      "Kowadełko",
      "Strzemiączko",
      "Trąbka słuchowa",
      "Przedsionek",
      "Ślimak",
      "Kanały półkoliste"
    ],
    "categories": [
      "Ucho zewnętrzne",
      "Ucho środkowe",
      "Ucho wewnętrzne"
    ],
    "answer": {
      "Ucho zewnętrzne": [
        "Małżowina uszna",
        "Przewód słuchowy"
      ],
      "Ucho środkowe": [
        "Jama bębenkowa",
        "Młoteczek",
        "Kowadełko",
        "Strzemiączko",
        "Trąbka słuchowa"
      ],
      "Ucho wewnętrzne": [
        "Przedsionek",
        "Ślimak",
        "Kanały półkoliste"
      ]
    },
    "explanation": "Ucho zewnętrzne wychwytuje dźwięk, środkowe zawiera jamę i kosteczki oraz trąbkę słuchową, a wewnętrzne tworzy błędnik z przedsionkiem, ślimakiem i kanałami półkolistymi.",
    "image": "r08_budowa_ucha.jpg"
  },
  {
    "id": "R08_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia od dotarcia fali dźwiękowej do przewodu słuchowego do wytworzenia impulsów nerwowych w uchu wewnętrznym.",
    "options": null,
    "items": [
      "Ruch płynu w kanałach ślimaka",
      "Drgania błony bębenkowej",
      "Przekazanie drgań przez kosteczki słuchowe",
      "Pobudzenie komórek zmysłowych ślimaka",
      "Wytworzenie impulsów nerwowych"
    ],
    "answer": [
      "Drgania błony bębenkowej",
      "Przekazanie drgań przez kosteczki słuchowe",
      "Ruch płynu w kanałach ślimaka",
      "Pobudzenie komórek zmysłowych ślimaka",
      "Wytworzenie impulsów nerwowych"
    ],
    "explanation": "Błona bębenkowa porusza kosteczki, strzemiączko wprawia w ruch płyn ślimaka, a ruch płynu pobudza komórki zmysłowe wytwarzające impulsy nerwowe."
  },
  {
    "id": "R08_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Bardzo głośny dźwięk przekraczający 130 dB może wywołać wrażenie zmiany położenia ciała, mimo że ciało się nie porusza. Dlaczego?",
    "options": [
      "Gwałtowne ruchy płynu w błędniku pobudzają także narząd równowagi",
      "Źrenica gwałtownie się rozszerza",
      "Soczewka przestaje zmieniać kształt",
      "Woskowina dociera do ślimaka",
      "Twardówka przekazuje drgania do mózgu",
      "Kubki smakowe zaczynają wysyłać impulsy"
    ],
    "answer": 0,
    "explanation": "Dźwięki powyżej 130 dB mogą wywołać gwałtowne ruchy płynu błędnika. Ponieważ płyn występuje także w kanałach półkolistych, może dojść do fałszywego sygnału o zmianie położenia ciała.",
    "image": "r08_kanaly_polkoliste.jpg"
  },
  {
    "id": "R08_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Komórki węchowe zajmują w górnej części jamy nosowej powierzchnię około __________ cm².",
    "options": null,
    "answer": [
      "4-5"
    ],
    "altAnswers": [
      [
        "4-5",
        "4–5"
      ]
    ],
    "explanation": "Komórki węchowe zajmują powierzchnię około 4-5 cm², a na tym niewielkim obszarze znajdują się miliony komórek.",
    "image": "r08_komorki_wechowe.jpg"
  },
  {
    "id": "R08_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Na których rodzajach brodawek języka występują kubki smakowe?",
    "options": [
      "Liściastych",
      "Grzybowatych",
      "Okolonych",
      "Nitkowatych",
      "Na wszystkich czterech rodzajach",
      "Wyłącznie na nitkowatych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kubki smakowe występują na brodawkach liściastych, grzybowatych i okolonych. Brodawki nitkowate nie zawierają kubków smakowych.",
    "image": "r08_budowa_jezyka.jpg"
  },
  {
    "id": "R08_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz smak z substancją lub grupą substancji, która może go wywoływać.",
    "options": null,
    "left": [
      "Słodki",
      "Umami",
      "Słony",
      "Kwaśny",
      "Gorzki"
    ],
    "right": [
      "Węglowodany",
      "Kwas glutaminowy",
      "Sole sodu i potasu",
      "Kwasy",
      "Alkaloidy i część soli nieorganicznych"
    ],
    "answer": {
      "Słodki": "Węglowodany",
      "Umami": "Kwas glutaminowy",
      "Słony": "Sole sodu i potasu",
      "Kwaśny": "Kwasy",
      "Gorzki": "Alkaloidy i część soli nieorganicznych"
    },
    "explanation": "Smak słodki wiąże się z węglowodanami, umami z kwasem glutaminowym, słony z solami sodu i potasu, kwaśny z kwasami, a gorzki może sygnalizować alkaloidy i niektóre sole nieorganiczne."
  },
  {
    "id": "R08_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń najpierw patrzy na odległy obiekt, a potem wchodzi do słabo oświetlonego pomieszczenia. Które dwie różne reakcje oka zachodzą odpowiednio w tych sytuacjach?",
    "options": [
      "Spłaszczenie soczewki, a następnie zwiększenie średnicy źrenicy",
      "Uwypuklenie soczewki, a następnie zmniejszenie średnicy źrenicy",
      "Zmniejszenie średnicy źrenicy, a następnie spłaszczenie soczewki",
      "Zmętnienie soczewki, a następnie rozszerzenie rogówki",
      "Rozszerzenie rogówki, a następnie zamknięcie źrenicy",
      "Brak zmian w obu sytuacjach"
    ],
    "answer": 0,
    "explanation": "Przy widzeniu dalekim soczewka się spłaszcza. W słabym oświetleniu adaptacja oka polega między innymi na zwiększeniu średnicy źrenicy."
  }
];

const chapter = {
  id: "r08",
  number: 8,
  title: "Narządy zmysłów",
  icon: "👁️",
  sectionOrder: [
    "Budowa i działanie narządu wzroku",
    "Ucho - narząd słuchu i równowagi",
    "Higiena oka i ucha",
    "Zmysły powonienia, smaku i dotyku"
  ],
  sectionIcons: {
    "Budowa i działanie narządu wzroku": "👁️",
    "Ucho - narząd słuchu i równowagi": "👂",
    "Higiena oka i ucha": "🧼",
    "Zmysły powonienia, smaku i dotyku": "👃"
  },
  exercises: ALL_EXERCISES
};

export default chapter;
