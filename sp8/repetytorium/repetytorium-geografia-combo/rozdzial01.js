// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SKA = Skala mapy i rzeźba terenu
//   WSP = Współrzędne geograficzne
//   CZA = Ruch obrotowy i czas
//   SLN = Ruch obiegowy i Słońce
//   KLI = Lądy, oceany i klimatogramy
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_SKA_01",
    "section": "Skala mapy i rzeźba terenu",
    "type": "single_choice",
    "prompt": "Co oznacza zapis skali liczbowej 1:5000?",
    "options": [
      "1 cm na mapie to 5 m w terenie",
      "1 cm na mapie to 500 m w terenie",
      "1 cm na mapie to 50 m w terenie",
      "5 cm na mapie to 1 m w terenie",
      "1 m na mapie to 5000 km w terenie",
      "1 cm na mapie to 5 km w terenie"
    ],
    "answer": 2,
    "image": "r01_skala_i_podzialka.jpg",
    "explanation": "Jeden centymetr na mapie odpowiada 5000 cm, czyli 50 m, w terenie."
  },
  {
    "id": "R01_SKA_02",
    "section": "Skala mapy i rzeźba terenu",
    "type": "single_choice",
    "prompt": "Która skala jest największa?",
    "options": [
      "1:10",
      "1:30",
      "1:100",
      "1:5000",
      "1:500 000",
      "1:50 000 000"
    ],
    "answer": 0,
    "explanation": "Im mniejszy mianownik skali liczbowej, tym większa skala."
  },
  {
    "id": "R01_SKA_03",
    "section": "Skala mapy i rzeźba terenu",
    "type": "multi_select",
    "prompt": "Wskaż poprawne sposoby przedstawiania skali mapy.",
    "options": [
      "Skala liczbowa",
      "Wykres kołowy",
      "Skala mianowana",
      "Wykres klimatyczny",
      "Podziałka liniowa",
      "Róża wiatrów"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "image": "r01_skala_i_podzialka.jpg",
    "explanation": "Skalę przedstawia się w postaci liczbowej, mianowanej lub graficznie jako podziałkę."
  },
  {
    "id": "R01_SKA_04",
    "section": "Skala mapy i rzeźba terenu",
    "type": "true_false",
    "prompt": "Na mapie w skali 1:30 blat o długości 120 cm ma długość 4 cm.",
    "options": null,
    "answer": true,
    "explanation": "120 cm podzielone przez 30 daje 4 cm."
  },
  {
    "id": "R01_SKA_05",
    "section": "Skala mapy i rzeźba terenu",
    "type": "fill_in",
    "prompt": "W skali 1:500 000 jeden centymetr na mapie odpowiada __________ kilometrom w terenie.",
    "options": null,
    "answer": [
      "5"
    ],
    "altAnswers": [
      [
        "5",
        "5 km"
      ]
    ],
    "explanation": "500 000 cm to 5000 m, czyli 5 km."
  },
  {
    "id": "R01_SKA_06",
    "section": "Skala mapy i rzeźba terenu",
    "type": "riddle",
    "prompt": "Jak nazywa się linia na mapie łącząca punkty o jednakowej wysokości nad poziomem morza?",
    "options": null,
    "answer": "poziomica",
    "altAnswers": [
      "poziomica"
    ],
    "image": "r01_poziomice_wzgorze.jpg",
    "explanation": "Poziomice przedstawiają rzeźbę terenu i pozwalają odczytywać wysokość."
  },
  {
    "id": "R01_SKA_07",
    "section": "Skala mapy i rzeźba terenu",
    "type": "odd_one_out",
    "prompt": "Który element nie jest formą wklęsłą terenu: kotlina, dolina rzeczna, wąwóz, pagórek.",
    "options": null,
    "answer": "pagórek",
    "explanation": "Pagórek jest formą wypukłą; pozostałe to formy wklęsłe."
  },
  {
    "id": "R01_SKA_08",
    "section": "Skala mapy i rzeźba terenu",
    "type": "scenario",
    "prompt": "Na mapie turystycznej poziomice są bardzo blisko siebie. Idziesz pieszo w poprzek tych linii. Jaki będzie ten odcinek?",
    "options": [
      "Płaski",
      "Stromy",
      "Zawsze podmokły",
      "Zawsze zalesiony",
      "Położony na równiku",
      "Pozbawiony wzniesień"
    ],
    "answer": 1,
    "image": "r01_poziomice_wzgorze.jpg",
    "explanation": "Blisko położone poziomice oznaczają stromy stok."
  },
  {
    "id": "R01_SKA_09",
    "section": "Skala mapy i rzeźba terenu",
    "type": "match",
    "prompt": "Połącz skalę liczbową z odpowiadającą jej skalą mianowaną.",
    "options": null,
    "left": [
      "1:100",
      "1:5000",
      "1:500 000",
      "1:50 000 000"
    ],
    "right": [
      "1 cm – 5 km",
      "1 cm – 500 km",
      "1 cm – 1 m",
      "1 cm – 50 m"
    ],
    "answer": {
      "1:100": "1 cm – 1 m",
      "1:5000": "1 cm – 50 m",
      "1:500 000": "1 cm – 5 km",
      "1:50 000 000": "1 cm – 500 km"
    },
    "explanation": "Centymetry zamienia się na metry lub kilometry, zachowując mianownik skali."
  },
  {
    "id": "R01_SKA_10",
    "section": "Skala mapy i rzeźba terenu",
    "type": "sort",
    "prompt": "Przyporządkuj formy terenu do kategorii.",
    "options": null,
    "items": [
      "wąwóz",
      "góra",
      "kotlina",
      "wzgórze",
      "dolina rzeczna",
      "pagórek"
    ],
    "categories": [
      "formy wypukłe",
      "formy wklęsłe"
    ],
    "answer": {
      "formy wypukłe": [
        "góra",
        "pagórek",
        "wzgórze"
      ],
      "formy wklęsłe": [
        "kotlina",
        "wąwóz",
        "dolina rzeczna"
      ]
    },
    "explanation": "Góra, pagórek i wzgórze są formami wypukłymi, a kotlina, wąwóz i dolina rzeczna wklęsłymi."
  },
  {
    "id": "R01_SKA_11",
    "section": "Skala mapy i rzeźba terenu",
    "type": "sequence",
    "prompt": "Ułóż etapy obliczania odległości w terenie na podstawie skali mapy.",
    "options": null,
    "items": [
      "Zamień centymetry na metry lub kilometry",
      "Sprawdź mianownik skali",
      "Odczytaj odległość na mapie",
      "Pomnóż odległość mapową przez mianownik"
    ],
    "answer": [
      "Odczytaj odległość na mapie",
      "Sprawdź mianownik skali",
      "Pomnóż odległość mapową przez mianownik",
      "Zamień centymetry na metry lub kilometry"
    ],
    "explanation": "W skali liczbowej należy najpierw odczytać dane, potem pomnożyć, a na końcu zamienić jednostki."
  },
  {
    "id": "R01_SKA_12",
    "section": "Skala mapy i rzeźba terenu",
    "type": "single_choice",
    "prompt": "Co na mapie poziomicowej oznacza cięcie poziomicowe 50 m?",
    "options": [
      "Każda poziomica ma długość 50 m",
      "Mapa ma 50 m szerokości",
      "Najwyższy szczyt mierzy 50 m",
      "Sąsiednie główne poziomice różnią się o 50 m",
      "Rzeka ma 50 m głębokości",
      "Wszystkie stoki mają nachylenie 50°"
    ],
    "answer": 3,
    "image": "r01_dolina_poziomice.jpg",
    "explanation": "Różnica wysokości między kolejnymi głównymi poziomicami wynosi 50 m."
  },
  {
    "id": "R01_WSP_01",
    "section": "Współrzędne geograficzne",
    "type": "single_choice",
    "prompt": "Które linie siatki geograficznej pozwalają określać długość geograficzną?",
    "options": [
      "Równoleżniki",
      "Południki",
      "Poziomice",
      "Izobary",
      "Linie brzegowe",
      "Linie spadku"
    ],
    "answer": 1,
    "image": "r01_siatka_globusa.jpg",
    "explanation": "Długość geograficzną odczytuje się na podstawie południków."
  },
  {
    "id": "R01_WSP_02",
    "section": "Współrzędne geograficzne",
    "type": "multi_select",
    "prompt": "Wskaż prawdziwe cechy południków.",
    "options": [
      "Są równoległymi okręgami",
      "Łączą oba bieguny",
      "Pomagają odczytać długość geograficzną",
      "Najdłuższy z nich to równik",
      "Południk 0° przechodzi przez Greenwich",
      "Mają długości malejące ku biegunom"
    ],
    "answer": [
      1,
      2,
      4
    ],
    "image": "r01_siatka_globusa.jpg",
    "explanation": "Południki łączą bieguny, służą do wyznaczania długości geograficznej, a południk 0° przechodzi przez Greenwich."
  },
  {
    "id": "R01_WSP_03",
    "section": "Współrzędne geograficzne",
    "type": "true_false",
    "prompt": "Dwa punkty na tym samym równoleżniku mają tę samą szerokość geograficzną.",
    "options": null,
    "answer": true,
    "explanation": "Wartość szerokości geograficznej jest wspólna dla całego danego równoleżnika."
  },
  {
    "id": "R01_WSP_04",
    "section": "Współrzędne geograficzne",
    "type": "fill_in",
    "prompt": "Jeden stopień kątowy dzieli się na __________ minut kątowych.",
    "options": null,
    "answer": [
      "60"
    ],
    "altAnswers": [
      [
        "60"
      ]
    ],
    "explanation": "1° to 60 minut kątowych; 1 minuta to 60 sekund."
  },
  {
    "id": "R01_WSP_05",
    "section": "Współrzędne geograficzne",
    "type": "riddle",
    "prompt": "Jak nazywa się najdłuższy równoleżnik Ziemi?",
    "options": null,
    "answer": "równik",
    "altAnswers": [
      "równik",
      "rownik"
    ],
    "image": "r01_siatka_globusa.jpg",
    "explanation": "Równik dzieli Ziemię na półkulę północną i południową."
  },
  {
    "id": "R01_WSP_06",
    "section": "Współrzędne geograficzne",
    "type": "odd_one_out",
    "prompt": "Co nie jest oznaczeniem kierunku geograficznego: N, S, E, H.",
    "options": null,
    "answer": "H",
    "explanation": "N oznacza północ, S południe, E wschód; litera H nie jest jednym z czterech oznaczeń kierunków."
  },
  {
    "id": "R01_WSP_07",
    "section": "Współrzędne geograficzne",
    "type": "scenario",
    "prompt": "Podróżnik znajduje się na południe od równika i na wschód od Greenwich. Jakie oznaczenia znajdą się przy jego współrzędnych?",
    "options": [
      "N i W",
      "N i E",
      "S i E",
      "S i W",
      "N i S",
      "E i W"
    ],
    "answer": 2,
    "image": "r01_punkt_na_siatce.jpg",
    "explanation": "Szerokość południową oznacza S, a długość wschodnią E."
  },
  {
    "id": "R01_WSP_08",
    "section": "Współrzędne geograficzne",
    "type": "match",
    "prompt": "Połącz symbol kierunku z jego polską nazwą.",
    "options": null,
    "left": [
      "N",
      "S",
      "E",
      "W"
    ],
    "right": [
      "zachód",
      "wschód",
      "północ",
      "południe"
    ],
    "answer": {
      "N": "północ",
      "S": "południe",
      "E": "wschód",
      "W": "zachód"
    },
    "explanation": "Międzynarodowe symbole to N (north), S (south), E (east) i W (west)."
  },
  {
    "id": "R01_WSP_09",
    "section": "Współrzędne geograficzne",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do szerokości albo długości geograficznej.",
    "options": null,
    "items": [
      "oznaczenia E i W",
      "równik jako punkt odniesienia",
      "wartości od 0° do 180°",
      "oznaczenia N i S",
      "południk Greenwich jako punkt odniesienia",
      "wartości od 0° do 90°"
    ],
    "categories": [
      "szerokość geograficzna",
      "długość geograficzna"
    ],
    "answer": {
      "szerokość geograficzna": [
        "równik jako punkt odniesienia",
        "oznaczenia N i S",
        "wartości od 0° do 90°"
      ],
      "długość geograficzna": [
        "południk Greenwich jako punkt odniesienia",
        "oznaczenia E i W",
        "wartości od 0° do 180°"
      ]
    },
    "explanation": "Szerokość liczy się od równika, a długość od południka zerowego."
  },
  {
    "id": "R01_WSP_10",
    "section": "Współrzędne geograficzne",
    "type": "sequence",
    "prompt": "Ułóż kolejne kroki odczytywania współrzędnych punktu z mapy.",
    "options": null,
    "items": [
      "Odczytaj długość geograficzną",
      "Odczytaj szerokość i zapisz pełne współrzędne",
      "Sprawdź odstęp stopniowy siatki",
      "Określ położenie względem równika",
      "Określ położenie względem południka 0°"
    ],
    "answer": [
      "Sprawdź odstęp stopniowy siatki",
      "Określ położenie względem południka 0°",
      "Odczytaj długość geograficzną",
      "Określ położenie względem równika",
      "Odczytaj szerokość i zapisz pełne współrzędne"
    ],
    "explanation": "Współrzędne geograficzne można odczytać, ustalając długość względem południka Greenwich, a następnie szerokość względem równika."
  },
  {
    "id": "R01_WSP_11",
    "section": "Współrzędne geograficzne",
    "type": "single_choice",
    "prompt": "Jaki zakres wartości przyjmuje szerokość geograficzna na jednej półkuli?",
    "options": [
      "0°–90°",
      "0°–180°",
      "0°–360°",
      "15°–180°",
      "23°26′–66°34′",
      "90°–270°"
    ],
    "answer": 0,
    "explanation": "Od równika do bieguna szerokość zmienia się od 0° do 90°."
  },
  {
    "id": "R01_WSP_12",
    "section": "Współrzędne geograficzne",
    "type": "true_false",
    "prompt": "Południk Greenwich służy za początek pomiaru szerokości geograficznej.",
    "options": null,
    "answer": false,
    "explanation": "Greenwich jest punktem odniesienia dla długości geograficznej; szerokość liczy się od równika."
  },
  {
    "id": "R01_CZA_01",
    "section": "Ruch obrotowy i czas",
    "type": "single_choice",
    "prompt": "W którą stronę Ziemia obraca się wokół własnej osi?",
    "options": [
      "Z północy na południe",
      "Ze wschodu na zachód",
      "Z południa na północ",
      "Z zachodu na wschód",
      "Na zmianę w obu kierunkach",
      "Tylko w stronę bieguna północnego"
    ],
    "answer": 3,
    "image": "r01_obrot_ziemi.jpg",
    "explanation": "Ruch obrotowy Ziemi przebiega z zachodu na wschód."
  },
  {
    "id": "R01_CZA_02",
    "section": "Ruch obrotowy i czas",
    "type": "multi_select",
    "prompt": "Które zjawiska są następstwami ruchu obrotowego Ziemi?",
    "options": [
      "Następowanie dnia i nocy",
      "Pory roku",
      "Pozorna dobowa wędrówka Słońca",
      "Zmiana długości roku",
      "Siła Coriolisa",
      "Spłaszczenie Ziemi przy biegunach"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "image": "r01_obrot_ziemi.jpg",
    "explanation": "Ruch obrotowy odpowiada m.in. za dzień i noc, pozorny ruch Słońca, siłę Coriolisa i spłaszczenie Ziemi przy biegunach."
  },
  {
    "id": "R01_CZA_03",
    "section": "Ruch obrotowy i czas",
    "type": "true_false",
    "prompt": "Prędkość liniowa ruchu obrotowego Ziemi na biegunach wynosi 0 km/h.",
    "options": null,
    "answer": true,
    "explanation": "Na biegunie punkt nie zatacza okręgu wokół osi obrotu; liniowa prędkość wynosi tam 0 km/h."
  },
  {
    "id": "R01_CZA_04",
    "section": "Ruch obrotowy i czas",
    "type": "fill_in",
    "prompt": "Ziemia obraca się o 15° długości geograficznej w ciągu __________ godziny.",
    "options": null,
    "answer": [
      "1"
    ],
    "altAnswers": [
      [
        "1",
        "jednej",
        "1 godziny"
      ]
    ],
    "explanation": "Pełne 360° w 24 godziny daje 15° w 1 godzinę."
  },
  {
    "id": "R01_CZA_05",
    "section": "Ruch obrotowy i czas",
    "type": "riddle",
    "prompt": "Jak nazywa się zjawisko odchylające na półkuli północnej tor ruchu swobodnie poruszających się ciał w prawo?",
    "options": null,
    "answer": "siła Coriolisa",
    "altAnswers": [
      "siła Coriolisa",
      "sila Coriolisa",
      "Coriolis"
    ],
    "image": "r01_obrot_ziemi.jpg",
    "explanation": "Siła Coriolisa wynika z ruchu obrotowego i zróżnicowania prędkości liniowych."
  },
  {
    "id": "R01_CZA_06",
    "section": "Ruch obrotowy i czas",
    "type": "odd_one_out",
    "prompt": "Wskaż jednostkę lub wielkość niepasującą do obliczeń czasu słonecznego: stopień długości geograficznej, minuta czasu, godzina, milimetr opadu.",
    "options": null,
    "answer": "milimetr opadu",
    "explanation": "Milimetr opadu opisuje opady atmosferyczne, a nie różnicę czasu wynikającą z długości geograficznej."
  },
  {
    "id": "R01_CZA_07",
    "section": "Ruch obrotowy i czas",
    "type": "scenario",
    "prompt": "W mieście A jest południe słoneczne. Miasto B leży 15° na wschód od A. Która jest godzina czasu słonecznego w B?",
    "options": [
      "10:00",
      "11:00",
      "13:00",
      "12:00",
      "14:00",
      "09:00"
    ],
    "answer": 2,
    "image": "r01_sloneczne_gorowanie.jpg",
    "explanation": "15° różnicy długości to jedna godzina; na wschodzie czas słoneczny jest późniejszy."
  },
  {
    "id": "R01_CZA_08",
    "section": "Ruch obrotowy i czas",
    "type": "match",
    "prompt": "Połącz wielkość obrotu Ziemi z upływem czasu.",
    "options": null,
    "left": [
      "360°",
      "15°",
      "1°",
      "30°"
    ],
    "right": [
      "2 godziny",
      "4 minuty",
      "24 godziny",
      "1 godzina"
    ],
    "answer": {
      "360°": "24 godziny",
      "15°": "1 godzina",
      "1°": "4 minuty",
      "30°": "2 godziny"
    },
    "explanation": "360°/24 h = 15° na godzinę, więc 1° odpowiada 4 minutom."
  },
  {
    "id": "R01_CZA_09",
    "section": "Ruch obrotowy i czas",
    "type": "sort",
    "prompt": "Przyporządkuj zdania do czasu miejscowego lub strefowego.",
    "options": null,
    "items": [
      "wprowadzono 24 strefy",
      "ten sam na jednym południku",
      "sąsiednie strefy różnią się o godzinę",
      "zmienia się przy przesuwaniu na wschód lub zachód",
      "odnosi się do południka środkowego strefy",
      "południe wyznacza górowanie Słońca"
    ],
    "categories": [
      "czas miejscowy",
      "czas strefowy"
    ],
    "answer": {
      "czas miejscowy": [
        "południe wyznacza górowanie Słońca",
        "zmienia się przy przesuwaniu na wschód lub zachód",
        "ten sam na jednym południku"
      ],
      "czas strefowy": [
        "wprowadzono 24 strefy",
        "sąsiednie strefy różnią się o godzinę",
        "odnosi się do południka środkowego strefy"
      ]
    },
    "explanation": "Czas miejscowy wynika z pozornego ruchu Słońca; strefowy to umownie ujednolicony czas."
  },
  {
    "id": "R01_CZA_10",
    "section": "Ruch obrotowy i czas",
    "type": "sequence",
    "prompt": "Ułóż kroki obliczania czasu słonecznego w drugim mieście.",
    "options": null,
    "items": [
      "Dodaj lub odejmij różnicę czasu zgodnie z kierunkiem",
      "Pomnóż liczbę stopni przez 4 minuty",
      "Odczytaj długości geograficzne obu miejsc",
      "Wyznacz różnicę długości geograficznej"
    ],
    "answer": [
      "Odczytaj długości geograficzne obu miejsc",
      "Wyznacz różnicę długości geograficznej",
      "Pomnóż liczbę stopni przez 4 minuty",
      "Dodaj lub odejmij różnicę czasu zgodnie z kierunkiem"
    ],
    "explanation": "Aby obliczyć różnicę czasów miejscowych, każdy stopień długości przeliczamy na 4 minuty."
  },
  {
    "id": "R01_CZA_11",
    "section": "Ruch obrotowy i czas",
    "type": "single_choice",
    "prompt": "Według którego południka ustala się w Polsce czas urzędowy zimą?",
    "options": [
      "0°",
      "45°E",
      "30°E",
      "15°W",
      "15°E",
      "180°"
    ],
    "answer": 4,
    "image": "r01_strefy_czasowe.jpg",
    "explanation": "Zimą w Polsce obowiązuje czas środkowoeuropejski, oparty na południku 15°E."
  },
  {
    "id": "R01_CZA_12",
    "section": "Ruch obrotowy i czas",
    "type": "true_false",
    "prompt": "Gdy przekracza się linię zmiany daty, należy zmienić datę kalendarzową.",
    "options": null,
    "answer": true,
    "explanation": "Linia zmiany daty przebiega w przybliżeniu wzdłuż południka 180°."
  },
  {
    "id": "R01_SLN_01",
    "section": "Ruch obiegowy i Słońce",
    "type": "single_choice",
    "prompt": "Jaki kształt ma orbita Ziemi wokół Słońca?",
    "options": [
      "Trójkąt",
      "Elipsa",
      "Linia prosta",
      "Spirala",
      "Kwadrat",
      "Półokrąg"
    ],
    "answer": 1,
    "image": "r01_ruch_obiegowy.jpg",
    "explanation": "Ziemia porusza się wokół Słońca po orbicie eliptycznej, prawie kołowej."
  },
  {
    "id": "R01_SLN_02",
    "section": "Ruch obiegowy i Słońce",
    "type": "multi_select",
    "prompt": "Wskaż następstwa ruchu obiegowego i stałego nachylenia osi Ziemi.",
    "options": [
      "Występowanie pór roku",
      "Zmiany długości dnia w ciągu roku",
      "Dobowa pozorna wędrówka gwiazd",
      "Zmiany wysokości górowania Słońca",
      "Powstanie 24 stref czasowych",
      "Zmiany kierunku wschodu i zachodu Słońca"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "image": "r01_oswietlenie_polkul.jpg",
    "explanation": "Skutki ruchu obiegowego Ziemi to m.in. pory roku, zmiany wysokości górowania Słońca, długości dnia i nocy oraz miejsca wschodu i zachodu Słońca."
  },
  {
    "id": "R01_SLN_03",
    "section": "Ruch obiegowy i Słońce",
    "type": "true_false",
    "prompt": "Podczas równonocy promienie słoneczne padają w południe prostopadle na równik.",
    "options": null,
    "answer": true,
    "explanation": "Równonoce przypadają około 20–21 marca i 22–23 września; Słońce góruje wtedy w zenicie nad równikiem."
  },
  {
    "id": "R01_SLN_04",
    "section": "Ruch obiegowy i Słońce",
    "type": "fill_in",
    "prompt": "Dnia 22 czerwca promienie słoneczne padają prostopadle na zwrotnik __________.",
    "options": null,
    "answer": [
      "Raka"
    ],
    "altAnswers": [
      [
        "Raka",
        "raka"
      ]
    ],
    "image": "r01_droga_slonca.jpg",
    "explanation": "W przesilenie czerwcowe Słońce jest w zenicie nad zwrotnikiem Raka (23°26′N)."
  },
  {
    "id": "R01_SLN_05",
    "section": "Ruch obiegowy i Słońce",
    "type": "riddle",
    "prompt": "Jak nazywa się zjawisko, gdy Słońce przez całą dobę nie zachodzi za horyzontem?",
    "options": null,
    "answer": "dzień polarny",
    "altAnswers": [
      "dzień polarny",
      "dzien polarny"
    ],
    "image": "r01_oswietlenie_polkul.jpg",
    "explanation": "Dzień polarny może występować w strefach podbiegunowych."
  },
  {
    "id": "R01_SLN_06",
    "section": "Ruch obiegowy i Słońce",
    "type": "odd_one_out",
    "prompt": "Wybierz element spoza grupy stref oświetlenia Ziemi: międzyzwrotnikowa, umiarkowana, podbiegunowa, oceaniczna.",
    "options": null,
    "answer": "oceaniczna",
    "explanation": "Wyróżnia się strefę międzyzwrotnikową, dwie umiarkowane i dwie podbiegunowe."
  },
  {
    "id": "R01_SLN_07",
    "section": "Ruch obiegowy i Słońce",
    "type": "scenario",
    "prompt": "Jest 22 grudnia, a obserwator stoi na półkuli północnej. Co jest charakterystyczne dla tego dnia?",
    "options": [
      "Najkrótszy dzień roku",
      "Najdłuższy dzień roku",
      "12 godzin dnia i 12 godzin nocy wszędzie",
      "Słońce góruje w zenicie nad zwrotnikiem Raka",
      "Pierwszy dzień lata na półkuli północnej",
      "Słońce w zenicie nad równikiem"
    ],
    "answer": 0,
    "image": "r01_oswietlenie_polkul.jpg",
    "explanation": "22 grudnia dzień jest tam najkrótszy w roku, a noc najdłuższa."
  },
  {
    "id": "R01_SLN_08",
    "section": "Ruch obiegowy i Słońce",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem astronomicznym na półkuli północnej.",
    "options": null,
    "left": [
      "21 marca",
      "22 czerwca",
      "23 września",
      "22 grudnia"
    ],
    "right": [
      "przesilenie zimowe",
      "równonoc jesienna",
      "równonoc wiosenna",
      "przesilenie letnie"
    ],
    "answer": {
      "21 marca": "równonoc wiosenna",
      "22 czerwca": "przesilenie letnie",
      "23 września": "równonoc jesienna",
      "22 grudnia": "przesilenie zimowe"
    },
    "explanation": "Te cztery daty wyznaczają początki astronomicznych pór roku."
  },
  {
    "id": "R01_SLN_09",
    "section": "Ruch obiegowy i Słońce",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do stref oświetlenia Ziemi.",
    "options": null,
    "items": [
      "może wystąpić noc polarna",
      "Słońce nie góruje w zenicie",
      "położenie między dwoma zwrotnikami",
      "może wystąpić dzień polarny",
      "między zwrotnikiem a kołem podbiegunowym",
      "możliwe górowanie Słońca w zenicie"
    ],
    "categories": [
      "międzyzwrotnikowa",
      "umiarkowana",
      "podbiegunowa"
    ],
    "answer": {
      "międzyzwrotnikowa": [
        "możliwe górowanie Słońca w zenicie",
        "położenie między dwoma zwrotnikami"
      ],
      "umiarkowana": [
        "Słońce nie góruje w zenicie",
        "między zwrotnikiem a kołem podbiegunowym"
      ],
      "podbiegunowa": [
        "może wystąpić noc polarna",
        "może wystąpić dzień polarny"
      ]
    },
    "explanation": "W zenicie Słońce może pojawiać się w strefie międzyzwrotnikowej, a dzień i noc polarne są możliwe za kołami podbiegunowymi."
  },
  {
    "id": "R01_SLN_10",
    "section": "Ruch obiegowy i Słońce",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia astronomiczne w kolejności od początku roku.",
    "options": null,
    "items": [
      "przesilenie zimowe",
      "równonoc jesienna",
      "przesilenie letnie",
      "równonoc wiosenna"
    ],
    "answer": [
      "równonoc wiosenna",
      "przesilenie letnie",
      "równonoc jesienna",
      "przesilenie zimowe"
    ],
    "explanation": "Kolejno: 21 marca, 22 czerwca, 23 września, 22 grudnia."
  },
  {
    "id": "R01_SLN_11",
    "section": "Ruch obiegowy i Słońce",
    "type": "single_choice",
    "prompt": "Jaką szerokość geograficzną ma zwrotnik Koziorożca?",
    "options": [
      "66°34′N",
      "23°26′N",
      "23°26′S",
      "66°34′S",
      "0°",
      "90°S"
    ],
    "answer": 2,
    "image": "r01_droga_slonca.jpg",
    "explanation": "Zwrotnik Koziorożca przebiega w przybliżeniu na szerokości 23°26′S."
  },
  {
    "id": "R01_SLN_12",
    "section": "Ruch obiegowy i Słońce",
    "type": "true_false",
    "prompt": "Dnia 22 czerwca na półkuli południowej przypada najdłuższy dzień roku.",
    "options": null,
    "answer": false,
    "explanation": "22 czerwca jest tam przesileniem zimowym i najkrótszym dniem roku."
  },
  {
    "id": "R01_KLI_01",
    "section": "Lądy, oceany i klimatogramy",
    "type": "single_choice",
    "prompt": "Który ocean ma największą powierzchnię na Ziemi?",
    "options": [
      "Ocean Spokojny",
      "Ocean Atlantycki",
      "Ocean Indyjski",
      "Ocean Południowy",
      "Ocean Arktyczny",
      "Morze Bałtyckie"
    ],
    "answer": 0,
    "image": "r01_lady_oceany.jpg",
    "explanation": "Ocean Spokojny ma powierzchnię około 156 mln km², większą od pozostałych oceanów."
  },
  {
    "id": "R01_KLI_02",
    "section": "Lądy, oceany i klimatogramy",
    "type": "multi_select",
    "prompt": "Które określenia dotyczą klimatu, a nie chwilowej pogody?",
    "options": [
      "Dziś w Warszawie pada deszcz",
      "Zimą w Polsce często występują temperatury poniżej 0°C",
      "Jutro w Bydgoszczy nie będzie opadów",
      "W Egipcie od czerwca do sierpnia zwykle nie notuje się opadów",
      "W kolejnych latach latem nad Bałtykiem często pada",
      "Obecnie wieje silny wiatr"
    ],
    "answer": [
      1,
      3,
      4
    ],
    "image": "r01_klimatogram_bez_podpisow.jpg",
    "explanation": "Klimat opisuje powtarzające się przez wiele lat warunki pogodowe w określonym miejscu."
  },
  {
    "id": "R01_KLI_03",
    "section": "Lądy, oceany i klimatogramy",
    "type": "true_false",
    "prompt": "Klimatogram przedstawia roczny przebieg średnich temperatur miesięcznych oraz miesięcznych sum opadów.",
    "options": null,
    "answer": true,
    "explanation": "Wykres łączy dwa rodzaje danych: temperaturę w °C i opady w mm."
  },
  {
    "id": "R01_KLI_04",
    "section": "Lądy, oceany i klimatogramy",
    "type": "fill_in",
    "prompt": "Dla Poznania przyjęto średnią temperaturę kwietnia na poziomie __________ °C.",
    "options": null,
    "answer": [
      "8,2"
    ],
    "altAnswers": [
      [
        "8,2",
        "8.2"
      ]
    ],
    "image": "r01_klimatogram_bez_podpisow.jpg",
    "explanation": "W przyjętych danych dla kwietnia średnia temperatura wynosi 8,2°C, a suma opadów 35 mm."
  },
  {
    "id": "R01_KLI_05",
    "section": "Lądy, oceany i klimatogramy",
    "type": "riddle",
    "prompt": "Jak nazywa się wykres łączący średnią temperaturę miesięczną i sumę opadów w poszczególnych miesiącach?",
    "options": null,
    "answer": "klimatogram",
    "altAnswers": [
      "klimatogram"
    ],
    "image": "r01_klimatogram_bez_podpisow.jpg",
    "explanation": "Klimatogram ilustruje obie wielkości dla kolejnych miesięcy roku."
  },
  {
    "id": "R01_KLI_06",
    "section": "Lądy, oceany i klimatogramy",
    "type": "odd_one_out",
    "prompt": "Który obiekt nie jest oceanem: Ocean Indyjski, Ocean Arktyczny, Ocean Atlantycki, Afryka.",
    "options": null,
    "answer": "Afryka",
    "explanation": "Afryka jest kontynentem, a pozostałe trzy nazwy to oceany."
  },
  {
    "id": "R01_KLI_07",
    "section": "Lądy, oceany i klimatogramy",
    "type": "scenario",
    "prompt": "Uczeń czyta klimatogram Poznania i chce znaleźć miesiąc z największym opadem. Na który element wykresu powinien spojrzeć?",
    "options": [
      "Czerwoną linię temperatury",
      "Słupki opadów",
      "Skalę liczbową mapy",
      "Poziomice na szczycie",
      "Południk Greenwich",
      "Linię zmiany daty"
    ],
    "answer": 1,
    "image": "r01_klimatogram_bez_podpisow.jpg",
    "explanation": "Na klimatogramie sumy opadów są przedstawione słupkami i odczytywane w milimetrach."
  },
  {
    "id": "R01_KLI_08",
    "section": "Lądy, oceany i klimatogramy",
    "type": "match",
    "prompt": "Połącz kontynent lub ocean z jego przybliżoną powierzchnią.",
    "options": null,
    "left": [
      "Azja",
      "Afryka",
      "Australia",
      "Ocean Indyjski"
    ],
    "right": [
      "8 mln km²",
      "74 mln km²",
      "30 mln km²",
      "44 mln km²"
    ],
    "answer": {
      "Azja": "44 mln km²",
      "Afryka": "30 mln km²",
      "Australia": "8 mln km²",
      "Ocean Indyjski": "74 mln km²"
    },
    "image": "r01_lady_oceany.jpg",
    "explanation": "Kontynenty i oceany różnią się wielkością; przyporządkowane wartości są ich przybliżonymi powierzchniami."
  },
  {
    "id": "R01_KLI_09",
    "section": "Lądy, oceany i klimatogramy",
    "type": "sort",
    "prompt": "Przyporządkuj elementy klimatogramu do właściwej wielkości.",
    "options": null,
    "items": [
      "słupki opadów",
      "średnia miesięczna",
      "milimetry",
      "linia temperatury",
      "miesięczna suma",
      "stopnie Celsjusza"
    ],
    "categories": [
      "temperatura",
      "opady"
    ],
    "answer": {
      "temperatura": [
        "stopnie Celsjusza",
        "linia temperatury",
        "średnia miesięczna"
      ],
      "opady": [
        "milimetry",
        "słupki opadów",
        "miesięczna suma"
      ]
    },
    "explanation": "Temperaturę najczęściej oznacza się linią i skalą °C, a opady słupkami i skalą mm."
  },
  {
    "id": "R01_KLI_10",
    "section": "Lądy, oceany i klimatogramy",
    "type": "sequence",
    "prompt": "Ułóż kroki wyznaczania rocznej sumy opadów z klimatogramu.",
    "options": null,
    "items": [
      "Dodaj wszystkie 12 wartości",
      "Zapisz wynik w milimetrach",
      "Odczytaj sumę opadów w styczniu",
      "Odczytaj sumy opadów w pozostałych miesiącach"
    ],
    "answer": [
      "Odczytaj sumę opadów w styczniu",
      "Odczytaj sumy opadów w pozostałych miesiącach",
      "Dodaj wszystkie 12 wartości",
      "Zapisz wynik w milimetrach"
    ],
    "explanation": "Roczna suma opadów jest sumą miesięcznych opadów podanych w mm."
  },
  {
    "id": "R01_KLI_11",
    "section": "Lądy, oceany i klimatogramy",
    "type": "single_choice",
    "prompt": "Który kontynent ma powierzchnię około 14 mln km²?",
    "options": [
      "Azja",
      "Afryka",
      "Australia",
      "Antarktyda",
      "Ameryka Północna",
      "Europa"
    ],
    "answer": 3,
    "image": "r01_lady_oceany.jpg",
    "explanation": "Antarktyda zajmuje około 14 mln km²."
  },
  {
    "id": "R01_KLI_12",
    "section": "Lądy, oceany i klimatogramy",
    "type": "true_false",
    "prompt": "Aby obliczyć średnią roczną temperaturę z miesięcznych średnich, należy ich sumę podzielić przez 12.",
    "options": null,
    "answer": true,
    "explanation": "Średnia roczna temperatura jest średnią arytmetyczną dwunastu średnich miesięcznych temperatur."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na planie w skali 1:50 skwer ma pole 400 cm². Ile wynosi jego rzeczywista powierzchnia?",
    "options": [
      "20 m²",
      "50 m²",
      "100 m²",
      "200 m²",
      "400 m²",
      "1000 m²"
    ],
    "answer": 2,
    "image": "r01_skala_i_podzialka.jpg",
    "explanation": "400 cm² × 50² = 1 000 000 cm² = 100 m²."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na mapie w skali 1:300 000 odległość Słupsk–Ustka ma 6 cm, więc w terenie wynosi __________ km.",
    "options": null,
    "answer": [
      "18"
    ],
    "altAnswers": [
      [
        "18",
        "18 km"
      ]
    ],
    "explanation": "1 cm w tej skali odpowiada 3 km, a 6 cm to 18 km."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na mapie główne poziomice mają wysokości 750 m i 800 m n.p.m. Między nimi zaznaczono jedną poziomicę pomocniczą dokładnie pośrodku. Jaką ma wysokość?",
    "options": [
      "725 m",
      "750 m",
      "760 m",
      "790 m",
      "775 m",
      "825 m"
    ],
    "answer": 4,
    "image": "r01_dolina_poziomice.jpg",
    "explanation": "Środkowa linia ma wysokość (750+800)/2 = 775 m n.p.m."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz prawidłowe stwierdzenia o skalowaniu powierzchni.",
    "options": [
      "W skali 1:30 długość jest zmniejszona 30 razy",
      "W skali 1:30 pole jest zmniejszone 30 razy",
      "W skali 1:30 pole jest zmniejszone 900 razy",
      "W skali 1:50 pole jest zmniejszone 50 razy",
      "W skali 1:50 pole jest zmniejszone 2500 razy"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Długości w skali 1:k są zmniejszone k razy, a powierzchnie k² razy; dla 1:30 jest to 900 razy."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile czasu słonecznego odpowiada różnicy 28° długości geograficznej?",
    "options": [
      "1 godzina 28 minut",
      "1 godzina 52 minuty",
      "2 godziny 28 minut",
      "28 minut",
      "52 minuty",
      "4 godziny 40 minut"
    ],
    "answer": 1,
    "image": "r01_strefy_czasowe.jpg",
    "explanation": "28° × 4 minuty = 112 minut, czyli 1 godzina 52 minuty."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Prędkość liniowa obrotu Ziemi na równiku wynosi około __________ km/h.",
    "options": null,
    "answer": [
      "1667"
    ],
    "altAnswers": [
      [
        "1667",
        "1 667"
      ]
    ],
    "explanation": "Na równiku punkt Ziemi porusza się podczas obrotu z prędkością około 1667 km/h."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z odpowiadającą jej wysokością górowania Słońca w Warszawie (52°N).",
    "options": null,
    "left": [
      "21 marca",
      "22 czerwca",
      "22 grudnia"
    ],
    "right": [
      "61°26′",
      "14°34′",
      "38°"
    ],
    "answer": {
      "21 marca": "38°",
      "22 czerwca": "61°26′",
      "22 grudnia": "14°34′"
    },
    "image": "r01_droga_slonca.jpg",
    "explanation": "W Warszawie w czasie równonocy Słońce góruje na wysokości 38°, w czerwcu 61°26′, a w grudniu 14°34′."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ile stopni i minut wynosi nachylenie osi Ziemi do płaszczyzny orbity? Podaj zapis bez spacji.",
    "options": null,
    "answer": "66°34′",
    "altAnswers": [
      "66°34′",
      "66°34'",
      "66 stopni 34 minuty"
    ],
    "image": "r01_ruch_obiegowy.jpg",
    "explanation": "Oś Ziemi zachowuje nachylenie 66°34′ do płaszczyzny orbity."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką sumę rocznych opadów w Poznaniu uzyskano z danych z klimatogramu?",
    "options": [
      "320 mm",
      "420 mm",
      "500 mm",
      "520 mm",
      "620 mm",
      "1168 mm"
    ],
    "answer": 3,
    "image": "r01_klimatogram_bez_podpisow.jpg",
    "explanation": "Zsumowanie dwunastu miesięcznych opadów daje 520 mm."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rozpatrujesz zimową wysokość górowania Słońca w Warszawie na 52°N. Jaki wynik daje wzór 90° − 52° − 23°26′?",
    "options": [
      "14°34′",
      "23°26′",
      "38°",
      "52°",
      "61°26′",
      "66°34′"
    ],
    "answer": 0,
    "image": "r01_droga_slonca.jpg",
    "explanation": "W przesilenie zimowe wysokość wynosi 14°34′ nad horyzontem."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż poprawne zdania dotyczące powierzchni oceanów.",
    "options": [
      "Ocean Spokojny ma około 156 mln km²",
      "Ocean Atlantycki ma około 74 mln km²",
      "Ocean Indyjski ma około 74 mln km²",
      "Ocean Arktyczny ma około 20 mln km²",
      "Ocean Południowy ma około 20 mln km²"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "image": "r01_lady_oceany.jpg",
    "explanation": "Ocean Spokojny: 156, Atlantycki: 106, Indyjski: 74, Południowy: 20, Arktyczny: 14 mln km²."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Średnia temperatura powietrza w Poznaniu w lipcu w przyjętym zestawie danych klimatycznych wynosi __________ °C.",
    "options": null,
    "answer": [
      "18,2"
    ],
    "altAnswers": [
      [
        "18,2",
        "18.2"
      ]
    ],
    "explanation": "W przyjętych danych średnia temperatura lipca w Poznaniu wynosi 18,2°C."
  }
];

const KID_PROMPTS = {
  "R01_SKA_01": "Ilu metrom odpowiada 1 cm na mapie 1:5000?",
  "R01_SKA_08": "Na mapie poziomice leżą blisko siebie. Jaki to stok?",
  "R01_WSP_07": "Jakie litery oznaczają południe i wschód?",
  "R01_CZA_07": "Jeżeli 15° na wschód jest później o godzinę, która jest tam godzina po 12:00?",
  "R01_SLN_07": "Jaki jest dzień 22 grudnia na półkuli północnej?",
  "R01_KLI_07": "Co na klimatogramie pokazuje opady?"
};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Podstawy geografii: mapa, Ziemia i klimat",
  "icon": "🌍",
  "sectionOrder": [
    "Skala mapy i rzeźba terenu",
    "Współrzędne geograficzne",
    "Ruch obrotowy i czas",
    "Ruch obiegowy i Słońce",
    "Lądy, oceany i klimatogramy"
  ],
  "sectionIcons": {
    "Skala mapy i rzeźba terenu": "🗺️",
    "Współrzędne geograficzne": "🧭",
    "Ruch obrotowy i czas": "🌍",
    "Ruch obiegowy i Słońce": "☀️",
    "Lądy, oceany i klimatogramy": "🌦️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
