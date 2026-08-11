// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DLU  = Długość geograficzna
//   SZE  = Szerokość geograficzna
//   WSP  = Współrzędne geograficzne
//   ROZ  = Rozciągłość obszarów
//   GPS  = GPS i siatki
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_DLU_01",
    "section": "Długość geograficzna",
    "type": "single_choice",
    "prompt": "Czym jest długość geograficzna punktu na Ziemi?",
    "options": [
      "wartością południka przechodzącego przez punkt",
      "odległością punktu od najbliższego miasta",
      "wysokością punktu nad poziomem morza",
      "wartością równoleżnika przechodzącego przez punkt",
      "długością trasy między dwoma punktami",
      "powierzchnią obszaru na mapie"
    ],
    "answer": 0,
    "image": "r01_poludniki_globus.jpg",
    "explanation": "Długość geograficzną określa wartość południka przechodzącego przez dany punkt."
  },
  {
    "id": "R01_DLU_02",
    "section": "Długość geograficzna",
    "type": "fill_in",
    "prompt": "Długość geograficzna pozwala określić, jak bardzo na __________ lub __________ od południka 0° jest oddalony dany punkt.",
    "options": null,
    "answer": [
      "zachód",
      "wschód"
    ],
    "explanation": "Długość geograficzna opisuje położenie na zachód albo na wschód od południka początkowego."
  },
  {
    "id": "R01_DLU_03",
    "section": "Długość geograficzna",
    "type": "true_false",
    "prompt": "Długość geograficzną odczytujemy na podstawie wartości równoleżników.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Długość geograficzną odczytujemy na podstawie wartości południków."
  },
  {
    "id": "R01_DLU_04",
    "section": "Długość geograficzna",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o długości geograficznej.",
    "options": [
      "odczytuje się ją na podstawie południków",
      "przyjmuje wartości 0°-180° na wschód lub zachód od południka 0°",
      "może być oznaczona literą E albo W",
      "odczytuje się ją na podstawie równoleżników",
      "ma zawsze wartość od 0° do 90°",
      "określa położenie na północ albo południe od równika"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_poludniki_globus.jpg",
    "explanation": "Długość geograficzną podaje się w miarach kątowych, odczytuje z południków i określa jako wschodnią lub zachodnią."
  },
  {
    "id": "R01_DLU_05",
    "section": "Długość geograficzna",
    "type": "scenario",
    "prompt": "Na fragmencie mapy wartości południków rosną w kierunku wschodnim. Jaką półkulę długości geograficznej należy dopisać do odczytanej wartości punktu?",
    "options": [
      "wschodnią, E",
      "zachodnią, W",
      "północną, N",
      "południową, S",
      "równikową, 0°",
      "biegunową, 90°"
    ],
    "answer": 0,
    "explanation": "Jeżeli wartości południków rosną na wschód, punkt leży na półkuli wschodniej, czyli oznaczamy długość literą E."
  },
  {
    "id": "R01_DLU_06",
    "section": "Długość geograficzna",
    "type": "single_choice",
    "prompt": "Który skrót oznacza długość geograficzną zachodnią?",
    "options": [
      "W",
      "E",
      "N",
      "S",
      "GPS",
      "0"
    ],
    "answer": 0,
    "explanation": "Półkulę zachodnią oznaczono literą W, a wschodnią literą E."
  },
  {
    "id": "R01_DLU_07",
    "section": "Długość geograficzna",
    "type": "riddle",
    "prompt": "Jak nazywa się południk o wartości 0°, od którego mierzy się długość geograficzną?",
    "options": null,
    "answer": "południk początkowy",
    "altAnswers": [
      "południk początkowy",
      "południk zerowy",
      "zerowy",
      "początkowy"
    ],
    "image": "r01_greenwich_obserwatorium.jpg",
    "explanation": "Południk o wartości 0° to południk początkowy, nazywany też południkiem zerowym."
  },
  {
    "id": "R01_DLU_08",
    "section": "Długość geograficzna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: południk, długość geograficzna, półkula wschodnia, równoleżnik.",
    "options": null,
    "answer": "równoleżnik",
    "explanation": "Równoleżnik służy do określania szerokości geograficznej, a pozostałe pojęcia dotyczą długości geograficznej."
  },
  {
    "id": "R01_DLU_09",
    "section": "Długość geograficzna",
    "type": "sequence",
    "prompt": "Ułóż czynności określania długości punktu leżącego między zaznaczonymi południkami.",
    "options": null,
    "items": [
      "Sprawdź, w którą stronę rosną wartości południków",
      "Określ, co ile stopni narysowano południki",
      "Sprawdź, między którymi południkami leży punkt",
      "Podziel odległość między południkami na równe odcinki"
    ],
    "answer": [
      "Sprawdź, między którymi południkami leży punkt",
      "Określ, co ile stopni narysowano południki",
      "Podziel odległość między południkami na równe odcinki",
      "Sprawdź, w którą stronę rosną wartości południków"
    ],
    "image": "r01_poludniki_globus.jpg",
    "explanation": "Najpierw trzeba ustalić południki graniczne, potem odstęp między nimi, wyznaczyć przebieg południka punktu i dopiero na końcu określić półkulę."
  },
  {
    "id": "R01_DLU_10",
    "section": "Długość geograficzna",
    "type": "fill_in",
    "prompt": "Jeden stopień dzieli się na __________ minut, a jedna minuta na __________ sekund.",
    "options": null,
    "answer": [
      "60",
      "60"
    ],
    "explanation": "Współrzędne można podawać z dokładnością do minut i sekund kątowych: 1° = 60', a 1' = 60\"."
  },
  {
    "id": "R01_DLU_11",
    "section": "Długość geograficzna",
    "type": "match",
    "prompt": "Połącz zapis długości geograficznej z jego odczytaniem.",
    "options": null,
    "left": [
      "40°E",
      "120°W",
      "4°30'W",
      "0°"
    ],
    "right": [
      "40 stopni długości wschodniej",
      "120 stopni długości zachodniej",
      "4 stopnie i 30 minut długości zachodniej",
      "południk początkowy"
    ],
    "answer": {
      "40°E": "40 stopni długości wschodniej",
      "120°W": "120 stopni długości zachodniej",
      "4°30'W": "4 stopnie i 30 minut długości zachodniej",
      "0°": "południk początkowy"
    },
    "explanation": "Litera E oznacza długość wschodnią, W zachodnią, a zapis z minutami podaje wartość dokładniejszą niż pełny stopień."
  },
  {
    "id": "R01_DLU_12",
    "section": "Długość geograficzna",
    "type": "true_false",
    "prompt": "Jeśli na mapie wartości południków rosną na zachód, punkt leży na półkuli zachodniej.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Kierunek wzrostu wartości południków pozwala ustalić, czy chodzi o półkulę W czy E."
  },
  {
    "id": "R01_SZE_01",
    "section": "Szerokość geograficzna",
    "type": "single_choice",
    "prompt": "Co określa szerokość geograficzną danego punktu?",
    "options": [
      "wartość równoleżnika przechodzącego przez punkt",
      "wartość południka przechodzącego przez punkt",
      "odległość od południka 0° w kilometrach",
      "powierzchnia pola na mapie",
      "wysokość nad poziomem morza",
      "czas dojścia do równika"
    ],
    "answer": 0,
    "image": "r01_rownolezniki_globus.jpg",
    "explanation": "Szerokość geograficzną określa wartość równoleżnika przechodzącego przez dany punkt."
  },
  {
    "id": "R01_SZE_02",
    "section": "Szerokość geograficzna",
    "type": "true_false",
    "prompt": "Płaszczyzna równika dzieli Ziemię na półkulę wschodnią i zachodnią.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Płaszczyzna równika dzieli Ziemię na półkulę północną i południową."
  },
  {
    "id": "R01_SZE_03",
    "section": "Szerokość geograficzna",
    "type": "fill_in",
    "prompt": "Szerokość geograficzna przyjmuje wartości od 0° do __________ na półkuli północnej lub __________.",
    "options": null,
    "answer": [
      "90°",
      "południowej"
    ],
    "explanation": "Wartości szerokości geograficznej są ograniczone równikiem 0° i biegunami 90°, a półkule oznacza się N i S."
  },
  {
    "id": "R01_SZE_04",
    "section": "Szerokość geograficzna",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o szerokości geograficznej.",
    "options": [
      "odczytujemy ją na podstawie równoleżników",
      "może być północna N albo południowa S",
      "przyjmuje wartości od 0° do 90°",
      "odczytujemy ją na podstawie południków",
      "może być wschodnia E albo zachodnia W",
      "mierzy położenie względem południka 0°"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_rownolezniki_globus.jpg",
    "explanation": "Szerokość odczytuje się z równoleżników, podaje w miarach kątowych i oznacza jako północną lub południową."
  },
  {
    "id": "R01_SZE_05",
    "section": "Szerokość geograficzna",
    "type": "scenario",
    "prompt": "Na mapie bez równika wartości równoleżników rosną w kierunku południowym. Jaką półkulę trzeba podać przy szerokości punktu?",
    "options": [
      "południową, S",
      "północną, N",
      "wschodnią, E",
      "zachodnią, W",
      "południka 0°",
      "półkulę Greenwich"
    ],
    "answer": 0,
    "explanation": "Jeżeli wartości równoleżników rosną na południe, punkt leży na półkuli południowej, czyli ma oznaczenie S."
  },
  {
    "id": "R01_SZE_06",
    "section": "Szerokość geograficzna",
    "type": "single_choice",
    "prompt": "Jaką wartość szerokości geograficznej mają punkty położone na równiku?",
    "options": [
      "0°",
      "30°",
      "60°",
      "90°",
      "180°",
      "360°"
    ],
    "answer": 0,
    "explanation": "Równik ma wartość 0°, więc wszystkie punkty leżące na równiku mają szerokość 0°."
  },
  {
    "id": "R01_SZE_07",
    "section": "Szerokość geograficzna",
    "type": "riddle",
    "prompt": "Jaka umowna linia ma kształt okręgu i łączy punkty położone w tej samej odległości od równika?",
    "options": null,
    "answer": "równoleżnik",
    "altAnswers": [
      "równoleżnik",
      "rownoleznik"
    ],
    "explanation": "Taka linia to równoleżnik. Umożliwia on określenie szerokości geograficznej punktu."
  },
  {
    "id": "R01_SZE_08",
    "section": "Szerokość geograficzna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: równik, równoleżnik, szerokość geograficzna, południk.",
    "options": null,
    "answer": "południk",
    "explanation": "Południk dotyczy długości geograficznej, a pozostałe pojęcia wiążą się z szerokością geograficzną."
  },
  {
    "id": "R01_SZE_09",
    "section": "Szerokość geograficzna",
    "type": "sequence",
    "prompt": "Ułóż czynności określania szerokości punktu leżącego między zaznaczonymi równoleżnikami.",
    "options": null,
    "items": [
      "Sprawdź, w którą stronę rosną wartości równoleżników",
      "Podziel odległość między równoleżnikami na równe odcinki",
      "Określ, co ile stopni narysowano równoleżniki",
      "Sprawdź, między którymi równoleżnikami leży punkt"
    ],
    "answer": [
      "Sprawdź, między którymi równoleżnikami leży punkt",
      "Określ, co ile stopni narysowano równoleżniki",
      "Podziel odległość między równoleżnikami na równe odcinki",
      "Sprawdź, w którą stronę rosną wartości równoleżników"
    ],
    "image": "r01_rownolezniki_globus.jpg",
    "explanation": "Kolejność pracy jest podobna jak przy długości: najpierw lokalizacja między liniami, potem odstęp, podział i ustalenie półkuli."
  },
  {
    "id": "R01_SZE_10",
    "section": "Szerokość geograficzna",
    "type": "match",
    "prompt": "Połącz oznaczenie lub wartość z odpowiednim znaczeniem.",
    "options": null,
    "left": [
      "N",
      "S",
      "0° szerokości",
      "90° szerokości"
    ],
    "right": [
      "półkula północna",
      "półkula południowa",
      "równik",
      "bieguny"
    ],
    "answer": {
      "N": "półkula północna",
      "S": "półkula południowa",
      "0° szerokości": "równik",
      "90° szerokości": "bieguny"
    },
    "explanation": "N oznacza półkulę północną, S południową, 0° należy do równika, a 90° do biegunów."
  },
  {
    "id": "R01_SZE_11",
    "section": "Szerokość geograficzna",
    "type": "fill_in",
    "prompt": "Szerokość geograficzna pozwala określić, jak bardzo na __________ lub __________ od równika jest położony punkt.",
    "options": null,
    "answer": [
      "północ",
      "południe"
    ],
    "explanation": "Szerokość geograficzna mówi o położeniu punktu względem równika w kierunku północnym lub południowym."
  },
  {
    "id": "R01_SZE_12",
    "section": "Szerokość geograficzna",
    "type": "true_false",
    "prompt": "Wszystkie punkty leżące na półkuli południowej mają szerokość geograficzną południową.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Na półkuli południowej szerokość geograficzną oznacza się literą S."
  },
  {
    "id": "R01_WSP_01",
    "section": "Współrzędne geograficzne",
    "type": "single_choice",
    "prompt": "Z czego składają się współrzędne geograficzne punktu?",
    "options": [
      "z szerokości i długości geograficznej",
      "z wysokości i głębokości terenu",
      "z długości trasy i czasu podróży",
      "z kierunku północnego i skali mapy",
      "z nazwy miasta i kraju",
      "z powierzchni i obwodu obszaru"
    ],
    "answer": 0,
    "explanation": "Współrzędne geograficzne to szerokość i długość geograficzna podane w jednostkach kątowych."
  },
  {
    "id": "R01_WSP_02",
    "section": "Współrzędne geograficzne",
    "type": "true_false",
    "prompt": "Przy podawaniu współrzędnych najczęściej najpierw określa się szerokość geograficzną, a potem długość geograficzną.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W pierwszej kolejności najczęściej zapisuje się szerokość, a po niej długość."
  },
  {
    "id": "R01_WSP_03",
    "section": "Współrzędne geograficzne",
    "type": "fill_in",
    "prompt": "W zapisie 53°46'N, 20°28'E pierwsza wartość to __________ geograficzna, a druga to __________ geograficzna.",
    "options": null,
    "answer": [
      "szerokość",
      "długość"
    ],
    "image": "r01_zapis_wspolrzednych.jpg",
    "explanation": "Współrzędne zapisuje się zwykle jako szerokość, a następnie długość geograficzną."
  },
  {
    "id": "R01_WSP_04",
    "section": "Współrzędne geograficzne",
    "type": "scenario",
    "prompt": "Organizator wycieczki podał współrzędne 53°46'N, 20°28'E. Który Olsztyn wskazują te współrzędne według przykładu?",
    "options": [
      "Olsztyn na Pojezierzu Mazurskim",
      "Olsztyn na Wyżynie Krakowsko-Częstochowskiej",
      "Warszawę",
      "Kielce",
      "Tarnów",
      "Rzym"
    ],
    "answer": 0,
    "image": "r01_mapka_olsztyny.jpg",
    "explanation": "Te współrzędne wskazują Olsztyn na Pojezierzu Mazurskim."
  },
  {
    "id": "R01_WSP_05",
    "section": "Współrzędne geograficzne",
    "type": "riddle",
    "prompt": "Jak nazywają się wartości szerokości i długości geograficznej, które umożliwiają lokalizację dowolnego punktu na Ziemi?",
    "options": null,
    "answer": "współrzędne geograficzne",
    "altAnswers": [
      "współrzędne geograficzne",
      "wspolrzedne geograficzne",
      "współrzędne"
    ],
    "explanation": "To współrzędne geograficzne. Dzięki nim można precyzyjnie określić położenie miejsca na Ziemi."
  },
  {
    "id": "R01_WSP_06",
    "section": "Współrzędne geograficzne",
    "type": "match",
    "prompt": "Połącz część zapisu współrzędnych z jej znaczeniem.",
    "options": null,
    "left": [
      "49°06'N",
      "22°40'E",
      "35°S",
      "18°W"
    ],
    "right": [
      "szerokość północna",
      "długość wschodnia",
      "szerokość południowa",
      "długość zachodnia"
    ],
    "answer": {
      "49°06'N": "szerokość północna",
      "22°40'E": "długość wschodnia",
      "35°S": "szerokość południowa",
      "18°W": "długość zachodnia"
    },
    "explanation": "N i S odnoszą się do szerokości geograficznej, a E i W do długości geograficznej."
  },
  {
    "id": "R01_WSP_07",
    "section": "Współrzędne geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz sytuacje z życia codziennego, w których wskazuje się wykorzystanie współrzędnych geograficznych.",
    "options": [
      "wyznaczanie trasy podróży",
      "śledzenie zamówionej przesyłki",
      "gry wymagające określenia lokalizacji",
      "ustalanie koloru okładki książki",
      "liczenie liczby stron zeszytu",
      "wybór rodzaju papieru"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przykłady związane z GPS to: wyznaczanie trasy, śledzenie przesyłki i gry wymagające określenia lokalizacji."
  },
  {
    "id": "R01_WSP_08",
    "section": "Współrzędne geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: 51°50'36'N, 19°28'37'E, 51.843333N, 20 km.",
    "options": null,
    "answer": "20 km",
    "explanation": "Trzy pierwsze zapisy mogą być wartościami współrzędnych geograficznych, a 20 km jest jednostką długości liniowej."
  },
  {
    "id": "R01_WSP_09",
    "section": "Współrzędne geograficzne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do szerokości lub długości geograficznej.",
    "options": null,
    "items": [
      "odczytywana z równoleżników",
      "odczytywana z południków",
      "może być północna",
      "może być zachodnia",
      "określa położenie względem równika",
      "określa położenie względem południka 0°"
    ],
    "categories": [
      "szerokość geograficzna",
      "długość geograficzna"
    ],
    "answer": {
      "szerokość geograficzna": [
        "odczytywana z równoleżników",
        "może być północna",
        "określa położenie względem równika"
      ],
      "długość geograficzna": [
        "odczytywana z południków",
        "może być zachodnia",
        "określa położenie względem południka 0°"
      ]
    },
    "explanation": "Szerokość odczytujemy z równoleżników i oznaczamy N/S, a długość z południków i oznaczamy E/W."
  },
  {
    "id": "R01_WSP_10",
    "section": "Współrzędne geograficzne",
    "type": "scenario",
    "prompt": "Przez punkt A na fragmencie mapy turystycznej przechodzi równoleżnik 49°06'N i południk 22°40'E. Jak zapisać jego współrzędne?",
    "options": [
      "49°06'N, 22°40'E",
      "22°40'E, 49°06'N",
      "49°06'E, 22°40'N",
      "22°40'N, 49°06'E",
      "49°40'N, 22°06'E",
      "49°06'S, 22°40'W"
    ],
    "answer": 0,
    "image": "r01_mapka_olsztyny.jpg",
    "explanation": "Najpierw zapisujemy szerokość, a potem długość geograficzną, więc poprawny zapis to 49°06'N, 22°40'E."
  },
  {
    "id": "R01_WSP_11",
    "section": "Współrzędne geograficzne",
    "type": "true_false",
    "prompt": "Podanie współrzędnych geograficznych pozwala precyzyjnie określić lokalizację miejsca w przestrzeni geograficznej.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Współrzędne umożliwiają dokładne wskazanie położenia miejsca."
  },
  {
    "id": "R01_WSP_12",
    "section": "Współrzędne geograficzne",
    "type": "fill_in",
    "prompt": "Współrzędne geograficzne wyrażamy w jednostkach __________, czyli na przykład w stopniach, minutach i sekundach.",
    "options": null,
    "answer": [
      "kątowych"
    ],
    "explanation": "Współrzędne są wartościami szerokości i długości geograficznej wyrażonymi w jednostkach kątowych."
  },
  {
    "id": "R01_ROZ_01",
    "section": "Rozciągłość obszarów",
    "type": "single_choice",
    "prompt": "Czym jest rozciągłość południkowa obszaru?",
    "options": [
      "różnicą szerokości geograficznej punktów skrajnych N i S",
      "różnicą długości geograficznej punktów skrajnych W i E",
      "sumą wysokości najwyższych punktów",
      "odległością od równika do południka 0°",
      "liczbą równoleżników na mapie",
      "różnicą czasu słonecznego"
    ],
    "answer": 0,
    "explanation": "Rozciągłość południkowa to różnica wartości szerokości geograficznej między punktem najdalej wysuniętym na północ i punktem najdalej wysuniętym na południe."
  },
  {
    "id": "R01_ROZ_02",
    "section": "Rozciągłość obszarów",
    "type": "single_choice",
    "prompt": "Czym jest rozciągłość równoleżnikowa obszaru?",
    "options": [
      "różnicą długości geograficznej punktów skrajnych W i E",
      "różnicą szerokości geograficznej punktów skrajnych N i S",
      "liczbą wszystkich południków na globusie",
      "wysokością kontynentu nad poziomem morza",
      "długością równika w kilometrach",
      "odległością od bieguna do równika"
    ],
    "answer": 0,
    "explanation": "Rozciągłość równoleżnikowa to różnica wartości długości geograficznej punktów wysuniętych najdalej na zachód i wschód."
  },
  {
    "id": "R01_ROZ_03",
    "section": "Rozciągłość obszarów",
    "type": "true_false",
    "prompt": "Do określania położenia większych obiektów, takich jak państwa, wyspy lub kontynenty, można wykorzystać współrzędne ich skrajnych punktów.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Właśnie na podstawie skrajnych punktów oblicza się rozciągłość południkową i równoleżnikową."
  },
  {
    "id": "R01_ROZ_04",
    "section": "Rozciągłość obszarów",
    "type": "fill_in",
    "prompt": "Gdy skrajne punkty leżą na tej samej półkuli, wartości współrzędnych __________; gdy leżą na różnych półkulach, wartości __________.",
    "options": null,
    "answer": [
      "odejmujemy",
      "dodajemy"
    ],
    "explanation": "Pokazano zasadę: na tej samej półkuli wartości odejmujemy, a na różnych półkulach dodajemy."
  },
  {
    "id": "R01_ROZ_05",
    "section": "Rozciągłość obszarów",
    "type": "scenario",
    "prompt": "Afryka ma punkt najdalej na północ przy 37°N i punkt najdalej na południe przy 35°S. Ile wynosi jej rozciągłość południkowa według przykładu?",
    "options": [
      "72°",
      "2°",
      "37°",
      "35°",
      "69°",
      "107°"
    ],
    "answer": 0,
    "image": "r01_afryka_skrajne_punkty.jpg",
    "explanation": "Punkty leżą na różnych półkulach, więc wartości szerokości dodajemy: 37° + 35° = 72°."
  },
  {
    "id": "R01_ROZ_06",
    "section": "Rozciągłość obszarów",
    "type": "scenario",
    "prompt": "Afryka ma punkt najdalej na zachód przy 18°W i punkt najdalej na wschód przy 51°E. Ile wynosi jej rozciągłość równoleżnikowa według przykładu?",
    "options": [
      "69°",
      "33°",
      "18°",
      "51°",
      "72°",
      "107°"
    ],
    "answer": 0,
    "image": "r01_afryka_skrajne_punkty.jpg",
    "explanation": "Punkty leżą na różnych półkulach, więc wartości długości dodajemy: 18° + 51° = 69°."
  },
  {
    "id": "R01_ROZ_07",
    "section": "Rozciągłość obszarów",
    "type": "match",
    "prompt": "Połącz skrajny punkt Afryki z współrzędnymi.",
    "options": null,
    "left": [
      "Przylądek Ras al-Ghiran",
      "Przylądek Igielny",
      "Przylądek Almadi",
      "Przylądek Raas Xaafuun"
    ],
    "right": [
      "37°N, 10°E",
      "35°S, 20°E",
      "15°N, 18°W",
      "10°N, 51°E"
    ],
    "answer": {
      "Przylądek Ras al-Ghiran": "37°N, 10°E",
      "Przylądek Igielny": "35°S, 20°E",
      "Przylądek Almadi": "15°N, 18°W",
      "Przylądek Raas Xaafuun": "10°N, 51°E"
    },
    "image": "r01_afryka_skrajne_punkty.jpg",
    "explanation": "Przykład podaje współrzędne czterech skrajnych punktów Afryki."
  },
  {
    "id": "R01_ROZ_08",
    "section": "Rozciągłość obszarów",
    "type": "sort",
    "prompt": "Przyporządkuj czynności do rodzaju rozciągłości.",
    "options": null,
    "items": [
      "porównanie punktu najdalej na północ i najdalej na południe",
      "różnica wartości szerokości geograficznej",
      "porównanie punktu najdalej na zachód i najdalej na wschód",
      "różnica wartości długości geograficznej"
    ],
    "categories": [
      "rozciągłość południkowa",
      "rozciągłość równoleżnikowa"
    ],
    "answer": {
      "rozciągłość południkowa": [
        "porównanie punktu najdalej na północ i najdalej na południe",
        "różnica wartości szerokości geograficznej"
      ],
      "rozciągłość równoleżnikowa": [
        "porównanie punktu najdalej na zachód i najdalej na wschód",
        "różnica wartości długości geograficznej"
      ]
    },
    "image": "r01_sardynia_rozciaglosc.jpg",
    "explanation": "Rozciągłość południkowa opiera się na szerokościach skrajnych punktów N i S, a równoleżnikowa na długościach punktów W i E."
  },
  {
    "id": "R01_ROZ_09",
    "section": "Rozciągłość obszarów",
    "type": "riddle",
    "prompt": "Jak nazywa się cecha obszaru, która opisuje jego wymiary za pomocą różnicy współrzędnych skrajnych punktów?",
    "options": null,
    "answer": "rozciągłość",
    "altAnswers": [
      "rozciągłość",
      "rozciągłość obszaru",
      "rozciaglosc"
    ],
    "explanation": "Chodzi o rozciągłość obszaru, obliczaną jako rozciągłość południkowa lub równoleżnikowa."
  },
  {
    "id": "R01_ROZ_10",
    "section": "Rozciągłość obszarów",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: państwo, wyspa, kontynent, pojedynczy punkt.",
    "options": null,
    "answer": "pojedynczy punkt",
    "explanation": "Rozciągłość obliczamy dla większych obszarów, takich jak państwa, wyspy i kontynenty. Pojedynczy punkt nie ma rozciągłości obszarowej."
  },
  {
    "id": "R01_ROZ_11",
    "section": "Rozciągłość obszarów",
    "type": "scenario",
    "prompt": "Skrajny zachodni punkt lądowej Australii podano przy 113°E, a skrajny wschodni przy 154°E. Ile wynosi rozciągłość równoleżnikowa?",
    "options": [
      "41°",
      "267°",
      "154°",
      "113°",
      "31°",
      "51°"
    ],
    "answer": 0,
    "explanation": "Oba punkty leżą na półkuli wschodniej, więc odejmujemy wartości długości: 154° - 113° = 41°."
  },
  {
    "id": "R01_ROZ_12",
    "section": "Rozciągłość obszarów",
    "type": "sequence",
    "prompt": "Ułóż działania potrzebne do obliczenia rozciągłości Afryki w przykładzie.",
    "options": null,
    "items": [
      "Oblicz rozciągłość równoleżnikową z długości punktów W i E",
      "Zapisz szerokości punktów najbardziej wysuniętych na N i S",
      "Wskaż skrajne punkty kontynentu",
      "Oblicz rozciągłość południkową z szerokości punktów N i S"
    ],
    "answer": [
      "Wskaż skrajne punkty kontynentu",
      "Zapisz szerokości punktów najbardziej wysuniętych na N i S",
      "Oblicz rozciągłość południkową z szerokości punktów N i S",
      "Oblicz rozciągłość równoleżnikową z długości punktów W i E"
    ],
    "image": "r01_afryka_skrajne_punkty.jpg",
    "explanation": "Najpierw wskazuje się skrajne punkty, potem zapisuje współrzędne N i S oraz W i E, a następnie wykonuje odpowiednie dodawanie albo odejmowanie."
  },
  {
    "id": "R01_GPS_01",
    "section": "GPS i siatki",
    "type": "single_choice",
    "prompt": "Co oznacza skrót GPS?",
    "options": [
      "Global Positioning System",
      "Geographic Parallel Scale",
      "Globe Position Section",
      "General Plane System",
      "Greenwich Point Standard",
      "Global Paper Symbol"
    ],
    "answer": 0,
    "image": "r01_odbiornik_gps.jpg",
    "explanation": "GPS to Global Positioning System, czyli światowy system określania współrzędnych stosowany do nawigacji satelitarnej."
  },
  {
    "id": "R01_GPS_02",
    "section": "GPS i siatki",
    "type": "true_false",
    "prompt": "Do ustalania pozycji za pomocą GPS wykorzystuje się sieć satelitów umieszczonych na orbitach okołoziemskich.",
    "options": null,
    "answer": true,
    "image": "r01_jelen_gps.jpg",
    "explanation": "To prawda. Urządzenia naziemne odbierają sygnały wysyłane przez satelity."
  },
  {
    "id": "R01_GPS_03",
    "section": "GPS i siatki",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje urządzeń i aplikacji GPS.",
    "options": [
      "podają współrzędne miejsca",
      "odszukują punkt na podstawie znanych współrzędnych",
      "zapisują przebytą trasę",
      "obliczają długość trasy i pokonaną wysokość",
      "wskazują kierunki świata",
      "zmieniają wartości południków na mapie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r01_odbiornik_gps.jpg",
    "explanation": "Wymienia się między innymi podawanie współrzędnych, wyszukiwanie punktu, zapis trasy, obliczanie długości i pokonanej wysokości oraz wskazywanie kierunków świata."
  },
  {
    "id": "R01_GPS_04",
    "section": "GPS i siatki",
    "type": "true_false",
    "prompt": "Urządzenia GPS najlepiej działają wewnątrz budynków, z dala od otwartej przestrzeni.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. GPS najlepiej działa na zewnątrz budynków, na otwartych przestrzeniach."
  },
  {
    "id": "R01_GPS_05",
    "section": "GPS i siatki",
    "type": "scenario",
    "prompt": "Aplikacja pokazuje położenie raz jako 51°50'36'N, 19°28'37'E, a raz jako 51.843333N, 19.476944E. Co pokazuje ten przykład?",
    "options": [
      "dwa sposoby zapisu współrzędnych geograficznych",
      "dwie różne półkule jednocześnie",
      "dwie nazwy jednego oceanu",
      "dwa rodzaje skali mapy",
      "dwie wysokości nad poziomem morza",
      "dwa kierunki wiatru"
    ],
    "answer": 0,
    "image": "r01_zapis_wspolrzednych.jpg",
    "explanation": "Ten sam punkt może być zapisany w stopniach, minutach i sekundach albo w formacie ułamka dziesiętnego."
  },
  {
    "id": "R01_GPS_06",
    "section": "GPS i siatki",
    "type": "single_choice",
    "prompt": "Czym jest siatka geograficzna?",
    "options": [
      "układem południków i równoleżników na globusie lub powierzchni Ziemi",
      "układem ulic w dużym mieście",
      "zbiorem znaków drogowych",
      "zestawem zdjęć satelitarnych bez linii",
      "skalą wysokości na mapie",
      "listą wszystkich państw świata"
    ],
    "answer": 0,
    "image": "r01_siatka_geograficzna_globus.jpg",
    "explanation": "Siatka geograficzna to układ południków i równoleżników na globusie lub wyobrażony na powierzchni Ziemi."
  },
  {
    "id": "R01_GPS_07",
    "section": "GPS i siatki",
    "type": "single_choice",
    "prompt": "Czym jest siatka kartograficzna?",
    "options": [
      "układem południków i równoleżników przedstawionym na mapie",
      "prawdziwą siecią dróg na powierzchni Ziemi",
      "układem kabli w odbiorniku GPS",
      "zbiorem zdjęć zwierząt z nadajnikami",
      "linią łączącą tylko bieguny",
      "skalą barw na mapie"
    ],
    "answer": 0,
    "image": "r01_siatka_kartograficzna_mapa.jpg",
    "explanation": "Siatka kartograficzna to układ południków i równoleżników przedstawiony na mapie."
  },
  {
    "id": "R01_GPS_08",
    "section": "GPS i siatki",
    "type": "match",
    "prompt": "Połącz element siatki z jego cechą.",
    "options": null,
    "left": [
      "południki",
      "równoleżniki",
      "równik",
      "południk 0° i 180°"
    ],
    "right": [
      "półokręgi o tej samej długości",
      "okręgi malejące ku biegunom",
      "najdłuższy równoleżnik",
      "linie dzielące Ziemię na półkulę E i W"
    ],
    "answer": {
      "południki": "półokręgi o tej samej długości",
      "równoleżniki": "okręgi malejące ku biegunom",
      "równik": "najdłuższy równoleżnik",
      "południk 0° i 180°": "linie dzielące Ziemię na półkulę E i W"
    },
    "image": "r01_siatka_geograficzna_globus.jpg",
    "explanation": "Południki są półokręgami jednakowej długości, a równoleżniki okręgami, których długości maleją w miarę oddalania się od równika."
  },
  {
    "id": "R01_GPS_09",
    "section": "GPS i siatki",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do siatki geograficznej i kartograficznej.",
    "options": null,
    "items": [
      "układ na globusie",
      "układ wyobrażony na powierzchni Ziemi",
      "układ przedstawiony na mapie",
      "może mieć zniekształcone kształty linii"
    ],
    "categories": [
      "siatka geograficzna",
      "siatka kartograficzna"
    ],
    "answer": {
      "siatka geograficzna": [
        "układ na globusie",
        "układ wyobrażony na powierzchni Ziemi"
      ],
      "siatka kartograficzna": [
        "układ przedstawiony na mapie",
        "może mieć zniekształcone kształty linii"
      ]
    },
    "image": "r01_siatka_kartograficzna_mapa.jpg",
    "explanation": "Siatka geograficzna dotyczy globusa lub powierzchni Ziemi, a siatka kartograficzna mapy, na której występują zniekształcenia."
  },
  {
    "id": "R01_GPS_10",
    "section": "GPS i siatki",
    "type": "riddle",
    "prompt": "Jaki system służy do precyzyjnego określania położenia i nawigacji przy użyciu sygnałów satelitarnych?",
    "options": null,
    "answer": "GPS",
    "altAnswers": [
      "GPS",
      "Global Positioning System",
      "system GPS"
    ],
    "image": "r01_odbiornik_gps.jpg",
    "explanation": "Tę funkcję pełni GPS, czyli Global Positioning System."
  },
  {
    "id": "R01_GPS_11",
    "section": "GPS i siatki",
    "type": "true_false",
    "prompt": "Przedstawienie powierzchni kuli ziemskiej na płaszczyźnie mapy powoduje powstanie zniekształceń.",
    "options": null,
    "answer": true,
    "image": "r01_siatka_kartograficzna_mapa.jpg",
    "explanation": "To prawda. W siatce kartograficznej kształty południków i równoleżników mogą różnić się od rzeczywistych."
  },
  {
    "id": "R01_GPS_12",
    "section": "GPS i siatki",
    "type": "fill_in",
    "prompt": "Przez każdy punkt na powierzchni Ziemi, oprócz biegunów, przechodzi jeden __________ i jeden __________.",
    "options": null,
    "answer": [
      "południk",
      "równoleżnik"
    ],
    "image": "r01_siatka_geograficzna_globus.jpg",
    "explanation": "Podsumowanie działu podaje, że przez każdy punkt poza biegunami przechodzi jeden południk i jeden równoleżnik."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "O ile metrów w 1984 roku przesunięto przyjęty południk zerowy względem dawniej obowiązującego południka w Greenwich?",
    "options": [
      "102 m na wschód",
      "102 m na zachód",
      "180 m na wschód",
      "60 m na zachód",
      "1 km na północ",
      "0 m, nie przesunięto go"
    ],
    "answer": 0,
    "image": "r01_greenwich_obserwatorium.jpg",
    "explanation": "W siatce z 1984 roku południk zerowy przesunięto o 102 m na wschód od dawnego."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pod koniec XIX wieku ustalono, że południk 0° przechodzi przez Królewskie Obserwatorium Astronomiczne __________ w Londynie.",
    "options": null,
    "answer": [
      "Greenwich"
    ],
    "altAnswers": [
      [
        "Greenwich",
        "greenwich"
      ]
    ],
    "image": "r01_greenwich_obserwatorium.jpg",
    "explanation": "Wskazano obserwatorium w Greenwich jako miejsce dawnego południka początkowego."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Północny skraj Islandii ma szerokość 66°32'N, a południowy 63°23'N. Ile wynosi rozciągłość południkowa Islandii?",
    "options": [
      "3°09'",
      "3°55'",
      "2°69'",
      "129°55'",
      "10°59'",
      "1°09'"
    ],
    "answer": 0,
    "image": "r01_islandia_skrajne_punkty.jpg",
    "explanation": "Oba punkty leżą na półkuli północnej, więc odejmujemy: 66°32' - 63°23' = 3°09'."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zachodni skraj Islandii ma długość 24°32'W, a wschodni 13°33'W. Ile wynosi rozciągłość równoleżnikowa Islandii?",
    "options": [
      "10°59'",
      "11°01'",
      "37°65'",
      "9°59'",
      "3°09'",
      "10°01'"
    ],
    "answer": 0,
    "image": "r01_islandia_skrajne_punkty.jpg",
    "explanation": "Oba punkty leżą na półkuli zachodniej, więc odejmujemy: 24°32' - 13°33' = 10°59'."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Morze Bałtyckie rozciąga się od 65°54'N do 53°34'N. Ile wynosi jego rozciągłość południkowa?",
    "options": [
      "12°20'",
      "11°80'",
      "119°28'",
      "12°00'",
      "13°20'",
      "10°54'"
    ],
    "answer": 0,
    "image": "r01_baltyk_mapa.jpg",
    "explanation": "Oba punkty leżą na półkuli północnej, więc odejmujemy: 65°54' - 53°34' = 12°20'."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Której szerokości geograficznej dotyczą ryczące czterdziestki?",
    "options": [
      "około 40°S",
      "około 40°N",
      "około 50°N",
      "około 60°E",
      "około 90°S",
      "około 0°"
    ],
    "answer": 0,
    "explanation": "Ryczące czterdziestki to obszar w pobliżu szerokości geograficznych 40°S, znany z częstych sztormów."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz nazwy szerokości geograficznych na półkuli południowej wymienione w ciekawostce żeglarskiej.",
    "options": [
      "ryczące czterdziestki",
      "wyjące pięćdziesiątki",
      "bezludne sześćdziesiątki",
      "zielone trzydziestki",
      "grenwichowskie dziesiątki",
      "spokojne dziewięćdziesiątki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W ciekawostce pojawiają się ryczące czterdziestki, wyjące pięćdziesiątki i bezludne sześćdziesiątki."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Opis centrum Rzymu brzmi: czterdzieści jeden stopni i pięćdziesiąt trzy minuty szerokości północnej oraz dwanaście stopni i dwadzieścia dziewięć minut długości wschodniej. Który skrócony zapis jest poprawny?",
    "options": [
      "41°53'N, 12°29'E",
      "12°29'N, 41°53'E",
      "41°53'S, 12°29'W",
      "41°29'N, 12°53'E",
      "41°53'E, 12°29'N",
      "12°53'N, 41°29'E"
    ],
    "answer": 0,
    "explanation": "Skracamy zapis do 41°53'N, 12°29'E, zachowując kolejność: szerokość przed długością."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel zapisy na poprawne i niepoprawne według zakresów szerokości i długości geograficznej.",
    "options": null,
    "items": [
      "98°15'E",
      "120°24'W",
      "35°35'N",
      "230°22'E",
      "127°24'S",
      "2°00'N"
    ],
    "categories": [
      "poprawny zapis",
      "niepoprawny zapis"
    ],
    "answer": {
      "poprawny zapis": [
        "98°15'E",
        "120°24'W",
        "35°35'N",
        "2°00'N"
      ],
      "niepoprawny zapis": [
        "230°22'E",
        "127°24'S"
      ]
    },
    "explanation": "Szerokość nie może przekraczać 90°, a długość geograficzna nie może przekraczać 180°."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaki rodzaj rozciągłości Sardynii oznacza różnicę szerokości geograficznej punktów najbardziej wysuniętych na północ i południe?",
    "options": null,
    "answer": "rozciągłość południkowa",
    "altAnswers": [
      "rozciągłość południkowa",
      "poludnikowa",
      "rozciaglosc poludnikowa"
    ],
    "image": "r01_sardynia_rozciaglosc.jpg",
    "explanation": "Różnica szerokości geograficznej skrajnych punktów N i S to rozciągłość południkowa."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dwa sposoby zapisu tej samej wartości współrzędnych z przykładu aplikacji GPS.",
    "options": null,
    "left": [
      "51°50'36'N",
      "19°28'37'E"
    ],
    "right": [
      "51.843333N",
      "19.476944E"
    ],
    "answer": {
      "51°50'36'N": "51.843333N",
      "19°28'37'E": "19.476944E"
    },
    "image": "r01_zapis_wspolrzednych.jpg",
    "explanation": "Współrzędne można zapisać w stopniach, minutach i sekundach albo w postaci ułamka dziesiętnego."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Przylądek Raas Xaafuun, Przylądek Almadi, Przylądek Ras al-Ghiran, Greenwich.",
    "options": null,
    "answer": "Greenwich",
    "image": "r01_afryka_skrajne_punkty.jpg",
    "explanation": "Trzy pierwsze nazwy to skrajne punkty Afryki z przykładu, a Greenwich dotyczy południka początkowego."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż elementy zapisu 39°12'45'E od największej do najmniejszej jednostki i oznaczenia półkuli.",
    "options": null,
    "items": [
      "sekundy",
      "oznaczenie półkuli",
      "stopnie",
      "minuty"
    ],
    "answer": [
      "stopnie",
      "minuty",
      "sekundy",
      "oznaczenie półkuli"
    ],
    "explanation": "W zapisie współrzędnych najpierw występują stopnie, potem minuty, sekundy i oznaczenie półkuli."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Punkt skrajny leży na 42°W, a drugi na 50°E. Jak obliczyć rozciągłość równoleżnikową, gdy punkty są na różnych półkulach?",
    "options": [
      "42° + 50° = 92°",
      "50° - 42° = 8°",
      "42° - 50° = -8°",
      "180° - 50° = 130°",
      "90° + 42° = 132°",
      "50° + 42° + 180° = 272°"
    ],
    "answer": 0,
    "explanation": "Jeśli punkty leżą na różnych półkulach, wartości długości geograficznej dodajemy: 42° + 50° = 92°."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Współrzędne geograficzne",
  icon: "🌐",
  sectionOrder: [
  "Długość geograficzna",
  "Szerokość geograficzna",
  "Współrzędne geograficzne",
  "Rozciągłość obszarów",
  "GPS i siatki"
],
  sectionIcons: {
  "Długość geograficzna": "↔️",
  "Szerokość geograficzna": "↕️",
  "Współrzędne geograficzne": "📍",
  "Rozciągłość obszarów": "📏",
  "GPS i siatki": "🛰️"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
