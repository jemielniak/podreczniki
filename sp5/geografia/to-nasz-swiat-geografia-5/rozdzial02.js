// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MAP  = Mapa i plan
//   SKA  = Skala mapy i planu
//   UKS  = Ukształtowanie terenu
//   KRA  = Krajobraz
//   OCH  = Ochrona przyrody
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_MAP_01",
    "section": "Mapa i plan",
    "type": "single_choice",
    "prompt": "Czym jest mapa?",
    "options": [
      "Bardzo pomniejszonym obrazem powierzchni Ziemi lub jej fragmentu",
      "Modelem Ziemi w kształcie kuli",
      "Listą nazw rzek i miast bez rysunku",
      "Zdjęciem, którego nie wolno zmieniać w rysunek",
      "Obrazem tylko jednego budynku bez otoczenia",
      "Zbiorem map ułożonych w książce"
    ],
    "answer": 0,
    "image": "r02_zdjecie_z_lotu_ptaka.jpg",
    "explanation": "Mapa to obraz powierzchni Ziemi lub jej fragmentu, bardzo pomniejszony i przygotowany na papierze albo w wersji cyfrowej."
  },
  {
    "id": "R02_MAP_02",
    "section": "Mapa i plan",
    "type": "true_false",
    "prompt": "Dawniej mapy wykonywano ręcznie, a obecnie sporządza się je między innymi na podstawie zdjęć wykonanych z góry.",
    "options": null,
    "answer": true,
    "image": "r02_zdjecie_z_lotu_ptaka.jpg",
    "explanation": "Współczesne mapy mogą powstawać ze zdjęć wykonanych z samolotów, balonów, dronów lub satelitów."
  },
  {
    "id": "R02_MAP_03",
    "section": "Mapa i plan",
    "type": "fill_in",
    "prompt": "Osobę tworzącą mapy nazywa się __________, a dział geografii zajmujący się mapami to __________.",
    "options": null,
    "answer": [
      "kartografem",
      "kartografia"
    ],
    "altAnswers": [
      [
        "kartografem",
        "kartograf"
      ],
      [
        "kartografia",
        "kartografią"
      ]
    ],
    "image": "r02_kartograf_przy_mapie.jpg",
    "explanation": "Twórca map to kartograf, a dział geografii zajmujący się mapami nazywa się kartografią."
  },
  {
    "id": "R02_MAP_04",
    "section": "Mapa i plan",
    "type": "match",
    "prompt": "Połącz element mapy z jego znaczeniem.",
    "options": null,
    "left": [
      "siatka kartograficzna",
      "legenda",
      "skala",
      "tytuł mapy"
    ],
    "right": [
      "układ południków i równoleżników umieszczony na mapie",
      "miejsce z objaśnieniem znaków użytych na mapie",
      "informacja o stopniu pomniejszenia obszaru",
      "nazwa przedstawionego obszaru lub zjawiska"
    ],
    "answer": {
      "siatka kartograficzna": "układ południków i równoleżników umieszczony na mapie",
      "legenda": "miejsce z objaśnieniem znaków użytych na mapie",
      "skala": "informacja o stopniu pomniejszenia obszaru",
      "tytuł mapy": "nazwa przedstawionego obszaru lub zjawiska"
    },
    "image": "r02_elementy_mapy.jpg",
    "explanation": "Elementy mapy pomagają odczytać jej treść: legenda objaśnia znaki, skala pokazuje pomniejszenie, a tytuł mówi, czego dotyczy mapa."
  },
  {
    "id": "R02_MAP_05",
    "section": "Mapa i plan",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które może zawierać mapa.",
    "options": [
      "treść mapy",
      "tytuł mapy",
      "legenda",
      "skala",
      "oznaczenie kierunków świata",
      "przepis kulinarny"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Mapa zawiera między innymi treść, tytuł, legendę, skalę, oznaczenie kierunków świata i siatkę kartograficzną."
  },
  {
    "id": "R02_MAP_06",
    "section": "Mapa i plan",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do elementów mapy: legenda, skala, tytuł, numer strony.",
    "options": null,
    "answer": "numer strony",
    "explanation": "Legenda, skala i tytuł to elementy mapy. Numer strony należy do atlasu lub książki, w której mapę wydrukowano."
  },
  {
    "id": "R02_MAP_07",
    "section": "Mapa i plan",
    "type": "single_choice",
    "prompt": "Co przedstawiają mapy ogólnogeograficzne?",
    "options": [
      "Ogólne, podstawowe elementy środowiska geograficznego",
      "Tylko prognozę pogody",
      "Wyłącznie zabytki i muzea",
      "Tylko jeden budynek i jego najbliższe otoczenie",
      "Wyłącznie rozmieszczenie zakładów przemysłowych",
      "Tylko znaki zakazu w parkach narodowych"
    ],
    "answer": 0,
    "explanation": "Mapy ogólnogeograficzne pokazują podstawowe elementy środowiska, takie jak rzeki, jeziora, miasta, granice państw i ukształtowanie terenu."
  },
  {
    "id": "R02_MAP_08",
    "section": "Mapa i plan",
    "type": "single_choice",
    "prompt": "Czym wyróżniają się mapy tematyczne?",
    "options": [
      "Przedstawiają szczegółowe informacje na jeden temat",
      "Zawsze przedstawiają całą Ziemię",
      "Nie mają legendy ani skali",
      "Są wyłącznie mapami papierowymi",
      "Pokazują tylko prostokątne pola planu",
      "Nie można ich odczytywać podczas podróży"
    ],
    "answer": 0,
    "explanation": "Mapy tematyczne dotyczą jednego tematu, na przykład turystyki, historii, gospodarki albo pogody."
  },
  {
    "id": "R02_MAP_09",
    "section": "Mapa i plan",
    "type": "multi_select",
    "prompt": "Zaznacz informacje, które mogą znajdować się na mapie turystycznej.",
    "options": [
      "zabytki",
      "muzea",
      "składniki ciasta",
      "szlaki turystyczne",
      "hotele i schroniska",
      "restauracje"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Mapy turystyczne zawierają informacje o miejscach wartych odwiedzenia oraz oznaczenia szlaków, obiektów sportowych, hoteli, schronisk i restauracji."
  },
  {
    "id": "R02_MAP_10",
    "section": "Mapa i plan",
    "type": "scenario",
    "prompt": "Podczas wycieczki uczeń korzysta z mapy na smartfonie. Może ją powiększać, przesuwać i widzi aktualne informacje po zbudowaniu nowych dróg. Z jakiej mapy korzysta?",
    "options": [
      "mapy cyfrowej",
      "mapy papierowej",
      "globusa",
      "planu tylko jednego budynku",
      "atlasu ściennego",
      "legendy"
    ],
    "answer": 0,
    "image": "r02_telefon_z_mapa_cyfrowa.jpg",
    "explanation": "Mapy cyfrowe wyświetla się na ekranach komputerów, smartfonów lub nawigacji; można je powiększać, przesuwać i aktualizować."
  },
  {
    "id": "R02_MAP_11",
    "section": "Mapa i plan",
    "type": "riddle",
    "prompt": "Jak nazywamy zbiór map?",
    "options": null,
    "answer": "atlas",
    "altAnswers": [
      "atlas",
      "atlasem"
    ],
    "explanation": "Zbiór map nazywamy atlasem."
  },
  {
    "id": "R02_MAP_12",
    "section": "Mapa i plan",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzaju mapy.",
    "options": null,
    "items": [
      "mapa w atlasie",
      "mapa na ścianie",
      "mapa w smartfonie",
      "mapa w nawigacji samochodowej"
    ],
    "categories": [
      "mapy papierowe",
      "mapy cyfrowe"
    ],
    "answer": {
      "mapy papierowe": [
        "mapa w atlasie",
        "mapa na ścianie"
      ],
      "mapy cyfrowe": [
        "mapa w smartfonie",
        "mapa w nawigacji samochodowej"
      ]
    },
    "explanation": "Mapy papierowe znajdują się na przykład w książce, atlasie lub na ścianie, a cyfrowe wyświetla się na ekranach urządzeń."
  },
  {
    "id": "R02_SKA_01",
    "section": "Skala mapy i planu",
    "type": "single_choice",
    "prompt": "Do czego służy skala mapy lub planu?",
    "options": [
      "Informuje, jak pomniejszono odległości i wymiary obiektów",
      "Wyjaśnia znaczenie znaków użytych na mapie",
      "Pokazuje wyłącznie północ",
      "Zastępuje tytuł mapy",
      "Podaje nazwy wszystkich miast",
      "Zawsze pokazuje tylko pogodę"
    ],
    "answer": 0,
    "image": "r02_linijka_na_mapie.jpg",
    "explanation": "Skala informuje, w jakim stopniu pomniejszono obiekty, i pozwala obliczać rzeczywiste odległości."
  },
  {
    "id": "R02_SKA_02",
    "section": "Skala mapy i planu",
    "type": "match",
    "prompt": "Połącz zapis skali z jej rodzajem.",
    "options": null,
    "left": [
      "1:200 000",
      "1 cm - 2 km",
      "odcinek podzielony na równe części"
    ],
    "right": [
      "skala liczbowa",
      "skala mianowana",
      "podziałka liniowa"
    ],
    "answer": {
      "1:200 000": "skala liczbowa",
      "1 cm - 2 km": "skala mianowana",
      "odcinek podzielony na równe części": "podziałka liniowa"
    },
    "explanation": "Skala liczbowa ma postać dzielenia, mianowana zawiera jednostki odległości, a podziałka liniowa jest odcinkiem z podziałem."
  },
  {
    "id": "R02_SKA_03",
    "section": "Skala mapy i planu",
    "type": "fill_in",
    "prompt": "W skali 1:15 000 jeden centymetr na mapie odpowiada w terenie odległości __________.",
    "options": null,
    "answer": [
      "150 m"
    ],
    "altAnswers": [
      [
        "150 m",
        "150 metrów"
      ]
    ],
    "image": "r02_linijka_na_mapie.jpg",
    "explanation": "W skali 1:15 000 jeden centymetr na mapie to 15 000 cm w terenie, czyli 150 m."
  },
  {
    "id": "R02_SKA_04",
    "section": "Skala mapy i planu",
    "type": "true_false",
    "prompt": "Im większa liczba po znaku dzielenia w zapisie skali liczbowej, tym bardziej pomniejszono obszar lub obiekt.",
    "options": null,
    "answer": true,
    "explanation": "Większa liczba po znaku dzielenia oznacza większe pomniejszenie przedstawionego obszaru."
  },
  {
    "id": "R02_SKA_05",
    "section": "Skala mapy i planu",
    "type": "scenario",
    "prompt": "Chcesz zaplanować wycieczkę i sprawdzić, jaka jest rzeczywista odległość między dwoma miejscami na mapie. Który element mapy jest do tego potrzebny?",
    "options": [
      "skala",
      "tytuł",
      "nazwa rzeki",
      "kolor okładki atlasu",
      "piktogram hotelu",
      "ramka strony"
    ],
    "answer": 0,
    "explanation": "Do obliczania rzeczywistych odległości z mapy lub planu potrzebna jest skala."
  },
  {
    "id": "R02_SKA_06",
    "section": "Skala mapy i planu",
    "type": "fill_in",
    "prompt": "W skali 1:1 500 000 jeden centymetr na mapie to __________ w terenie, więc 3 cm to __________.",
    "options": null,
    "answer": [
      "15 km",
      "45 km"
    ],
    "altAnswers": [
      [
        "15 km",
        "15 kilometrów"
      ],
      [
        "45 km",
        "45 kilometrów"
      ]
    ],
    "explanation": "1:1 500 000 oznacza 1 cm - 15 km. Jeśli na mapie są 3 cm, to w terenie jest 3 razy 15 km, czyli 45 km."
  },
  {
    "id": "R02_SKA_07",
    "section": "Skala mapy i planu",
    "type": "sequence",
    "prompt": "Ułóż czynności w kolejności obliczania odległości w linii prostej na podstawie mapy.",
    "options": null,
    "items": [
      "Przelicz odległość na metry lub kilometry",
      "Zmierz odległość na mapie",
      "Odczytaj skalę mapy",
      "Pomnóż zmierzoną odległość przez wartość wynikającą ze skali"
    ],
    "answer": [
      "Zmierz odległość na mapie",
      "Odczytaj skalę mapy",
      "Przelicz odległość na metry lub kilometry",
      "Pomnóż zmierzoną odległość przez wartość wynikającą ze skali"
    ],
    "image": "r02_trasa_na_mapie.jpg",
    "explanation": "Najpierw mierzy się odległość na mapie, następnie odczytuje skalę i przelicza ją na rzeczywistą odległość."
  },
  {
    "id": "R02_SKA_08",
    "section": "Skala mapy i planu",
    "type": "single_choice",
    "prompt": "Przy skali 1:15 000 odległość 5 cm na mapie odpowiada jakiej odległości w terenie?",
    "options": [
      "750 m",
      "75 m",
      "150 m",
      "5 km",
      "750 km",
      "15 m"
    ],
    "answer": 0,
    "explanation": "W skali 1:15 000 jeden centymetr to 150 m, więc 5 cm odpowiada 750 m."
  },
  {
    "id": "R02_SKA_09",
    "section": "Skala mapy i planu",
    "type": "riddle",
    "prompt": "Jak nazywa się rodzaj skali przedstawiony jako odcinek podzielony na równe części?",
    "options": null,
    "answer": "podziałka liniowa",
    "altAnswers": [
      "podziałka liniowa",
      "podzialka liniowa"
    ],
    "explanation": "Podziałka liniowa to graficzny odcinek podzielony na równe części z zapisanymi wartościami."
  },
  {
    "id": "R02_SKA_10",
    "section": "Skala mapy i planu",
    "type": "multi_select",
    "prompt": "Zaznacz czynności przydatne podczas korzystania ze skali.",
    "options": [
      "zmierzenie odległości linijką",
      "odczytanie skali mapy",
      "zsumowanie kilku odcinków trasy",
      "obliczenie metrów lub kilometrów w terenie",
      "wybranie koloru okładki zeszytu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Korzystanie ze skali polega na pomiarze odległości na mapie lub planie, odczytaniu skali i obliczeniu rzeczywistej odległości."
  },
  {
    "id": "R02_SKA_11",
    "section": "Skala mapy i planu",
    "type": "true_false",
    "prompt": "Gdy trasa nie biegnie w linii prostej, można podzielić ją na odcinki, zmierzyć je osobno i dodać ich długości.",
    "options": null,
    "answer": true,
    "explanation": "Trasę złożoną z kilku odcinków mierzy się odcinkami, sumuje i dopiero potem przelicza według skali."
  },
  {
    "id": "R02_SKA_12",
    "section": "Skala mapy i planu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do rodzajów skali: skala liczbowa, skala mianowana, podziałka liniowa, legenda.",
    "options": null,
    "answer": "legenda",
    "explanation": "Skala liczbowa, mianowana i podziałka liniowa to trzy rodzaje skali, a legenda objaśnia znaki na mapie."
  },
  {
    "id": "R02_UKS_01",
    "section": "Ukształtowanie terenu",
    "type": "single_choice",
    "prompt": "Od czego mierzy się wysokość bezwzględną?",
    "options": [
      "od poziomu morza",
      "od podnóża góry",
      "od najbliższego budynku",
      "od początku szlaku turystycznego",
      "od północnej krawędzi mapy",
      "od środka legendy"
    ],
    "answer": 0,
    "explanation": "Wysokość bezwzględną mierzy się zawsze od poziomu morza i podaje w metrach nad poziomem morza."
  },
  {
    "id": "R02_UKS_02",
    "section": "Ukształtowanie terenu",
    "type": "single_choice",
    "prompt": "Czym jest wysokość względna?",
    "options": [
      "wysokością danego punktu mierzoną względem innego punktu",
      "wysokością mierzoną wyłącznie od poziomu morza",
      "głębokością jeziora",
      "odległością między miastami na planie",
      "kolorem użytym na mapie ogólnogeograficznej",
      "nazwą punktu wysokościowego"
    ],
    "answer": 0,
    "explanation": "Wysokość względna jest mierzona względem wybranego miejsca, dlatego trzeba określić punkt odniesienia."
  },
  {
    "id": "R02_UKS_03",
    "section": "Ukształtowanie terenu",
    "type": "fill_in",
    "prompt": "Skrót n.p.m. oznacza __________, a skrót p.p.m. oznacza __________.",
    "options": null,
    "answer": [
      "nad poziomem morza",
      "poniżej poziomu morza"
    ],
    "altAnswers": [
      [
        "nad poziomem morza",
        "metry nad poziomem morza"
      ],
      [
        "poniżej poziomu morza",
        "ponizej poziomu morza"
      ]
    ],
    "explanation": "Wysokości bezwzględne podaje się w metrach nad poziomem morza, a głębokości depresji oznacza się jako poniżej poziomu morza."
  },
  {
    "id": "R02_UKS_04",
    "section": "Ukształtowanie terenu",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby przedstawiania wysokości bezwzględnych na mapach.",
    "options": [
      "punkty wysokościowe",
      "poziomice",
      "legenda z objaśnieniem znaków",
      "kompas",
      "kropki lub trójkąty wysokościowe"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Na mapach wysokości bezwzględne przedstawia się za pomocą punktów wysokościowych, zwykle kropek lub trójkątów, oraz poziomic."
  },
  {
    "id": "R02_UKS_05",
    "section": "Ukształtowanie terenu",
    "type": "riddle",
    "prompt": "Jak nazywają się linie łączące punkty o jednakowej wysokości nad poziomem morza?",
    "options": null,
    "answer": "poziomice",
    "altAnswers": [
      "poziomice",
      "poziomica"
    ],
    "explanation": "Poziomice łączą punkty o jednakowej wysokości bezwzględnej."
  },
  {
    "id": "R02_UKS_06",
    "section": "Ukształtowanie terenu",
    "type": "true_false",
    "prompt": "Poziomice na mapie nigdy się nie przecinają.",
    "options": null,
    "answer": true,
    "explanation": "Poziomice nigdy się nie przecinają."
  },
  {
    "id": "R02_UKS_07",
    "section": "Ukształtowanie terenu",
    "type": "single_choice",
    "prompt": "Co oznacza mała odległość między poziomicami na mapie?",
    "options": [
      "stromy stok",
      "bardzo płaski teren",
      "brak wysokości bezwzględnych",
      "jezioro",
      "legendę mapy",
      "kierunek północny"
    ],
    "answer": 0,
    "image": "r02_stromy_stok.jpg",
    "explanation": "Gdy poziomice są blisko siebie, stok jest bardziej stromy; gdy są daleko od siebie, stok jest łagodniejszy."
  },
  {
    "id": "R02_UKS_08",
    "section": "Ukształtowanie terenu",
    "type": "match",
    "prompt": "Połącz formę terenu z układem poziomic.",
    "options": null,
    "left": [
      "góra lub wzgórze",
      "obniżenie terenu",
      "dolina"
    ],
    "right": [
      "wartości poziomic rosną do środka",
      "wartości poziomic maleją do środka",
      "wydłużone obniżenie, często z rzeką na dnie"
    ],
    "answer": {
      "góra lub wzgórze": "wartości poziomic rosną do środka",
      "obniżenie terenu": "wartości poziomic maleją do środka",
      "dolina": "wydłużone obniżenie, często z rzeką na dnie"
    },
    "explanation": "Z układu poziomic można odczytywać formy terenu: przy górze wartości rosną ku środkowi, przy obniżeniu maleją, a dolina jest wydłużona."
  },
  {
    "id": "R02_UKS_09",
    "section": "Ukształtowanie terenu",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do kategorii.",
    "options": null,
    "items": [
      "poziomica",
      "punkt wysokościowy",
      "n.p.m.",
      "p.p.m."
    ],
    "categories": [
      "sposób przedstawiania wysokości",
      "skrót wysokości lub głębokości"
    ],
    "answer": {
      "sposób przedstawiania wysokości": [
        "poziomica",
        "punkt wysokościowy"
      ],
      "skrót wysokości lub głębokości": [
        "n.p.m.",
        "p.p.m."
      ]
    },
    "explanation": "Poziomice i punkty wysokościowe są sposobami przedstawiania wysokości na mapie, a n.p.m. i p.p.m. to skróty związane z poziomem morza."
  },
  {
    "id": "R02_UKS_10",
    "section": "Ukształtowanie terenu",
    "type": "scenario",
    "prompt": "Turysta porównuje dwie trasy w górach. Na pierwszej poziomice są daleko od siebie, a na drugiej bardzo blisko. Która trasa będzie łagodniejsza?",
    "options": [
      "pierwsza trasa",
      "druga trasa",
      "obie zawsze są jednakowo strome",
      "nie da się tego ocenić z poziomic",
      "ta z większą liczbą hoteli",
      "ta bez legendy"
    ],
    "answer": 0,
    "image": "r02_stromy_stok.jpg",
    "explanation": "Większe odstępy między poziomicami oznaczają łagodniejszy stok, a mniejsze odstępy bardziej stromy teren."
  },
  {
    "id": "R02_UKS_11",
    "section": "Ukształtowanie terenu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do sposobów przedstawiania wysokości na mapie: poziomica, punkt wysokościowy, trójkąt wysokościowy, tytuł mapy.",
    "options": null,
    "answer": "tytuł mapy",
    "explanation": "Poziomice oraz punkty wysokościowe, często oznaczane kropkami lub trójkątami, służą do przedstawiania wysokości; tytuł mapy ma inne zadanie."
  },
  {
    "id": "R02_UKS_12",
    "section": "Ukształtowanie terenu",
    "type": "true_false",
    "prompt": "Depresja to teren położony niżej niż poziom morza.",
    "options": null,
    "answer": true,
    "explanation": "Teren położony niżej niż poziom morza nazywa się depresją, a jego głębokość oznacza się skrótem p.p.m."
  },
  {
    "id": "R02_KRA_01",
    "section": "Krajobraz",
    "type": "single_choice",
    "prompt": "Jak najczęściej przedstawia się wysokości na mapach ogólnogeograficznych dużych obszarów?",
    "options": [
      "kolorami",
      "wyłącznie zdjęciami zwierząt",
      "tylko znakami zakazu",
      "samymi nazwami miast",
      "planem jednego budynku",
      "wyłącznie cyframi w tabeli"
    ],
    "answer": 0,
    "explanation": "Na mapach ogólnogeograficznych dużych obszarów wysokości przedstawia się najczęściej kolorami."
  },
  {
    "id": "R02_KRA_02",
    "section": "Krajobraz",
    "type": "match",
    "prompt": "Połącz barwę z tym, co zazwyczaj oznacza na mapie ogólnogeograficznej Polski.",
    "options": null,
    "left": [
      "zielone barwy",
      "żółte barwy",
      "pomarańczowe, czerwone i brązowe barwy",
      "ciemniejszy odcień niebieskiego"
    ],
    "right": [
      "niziny",
      "wyżyny",
      "góry",
      "większa głębokość zbiornika wodnego"
    ],
    "answer": {
      "zielone barwy": "niziny",
      "żółte barwy": "wyżyny",
      "pomarańczowe, czerwone i brązowe barwy": "góry",
      "ciemniejszy odcień niebieskiego": "większa głębokość zbiornika wodnego"
    },
    "image": "r02_krajobraz_gorski_i_nizinny.jpg",
    "explanation": "Zielony kolor oznacza najczęściej niziny, żółty wyżyny, a pomarańczowy, czerwony i brązowy góry; ciemniejszy niebieski wskazuje większą głębokość."
  },
  {
    "id": "R02_KRA_03",
    "section": "Krajobraz",
    "type": "fill_in",
    "prompt": "Niziny to obszary od __________ m n.p.m., wyżyny od __________ m n.p.m., a góry są położone powyżej __________ m n.p.m.",
    "options": null,
    "answer": [
      "0 do 300",
      "300 do 500",
      "500"
    ],
    "altAnswers": [
      [
        "0 do 300",
        "0-300"
      ],
      [
        "300 do 500",
        "300-500"
      ],
      [
        "500",
        "500 m"
      ]
    ],
    "explanation": "Niziny mają wysokości 0-300 m n.p.m., wyżyny 300-500 m n.p.m., a góry leżą powyżej 500 m n.p.m."
  },
  {
    "id": "R02_KRA_04",
    "section": "Krajobraz",
    "type": "true_false",
    "prompt": "Góry to także tereny o wysokościach względnych większych niż 300 m.",
    "options": null,
    "answer": true,
    "explanation": "Oprócz wysokości bezwzględnych powyżej 500 m n.p.m. góry opisano jako tereny o wysokościach względnych większych niż 300 m."
  },
  {
    "id": "R02_KRA_05",
    "section": "Krajobraz",
    "type": "multi_select",
    "prompt": "Zaznacz elementy krajobrazu.",
    "options": [
      "ukształtowanie terenu",
      "wody",
      "roślinność i zwierzęta",
      "wytwory człowieka",
      "pogoda",
      "numer strony podręcznika"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Na krajobraz składają się między innymi ukształtowanie terenu, wody, gleby, roślinność i zwierzęta, pogoda oraz elementy wprowadzone przez człowieka."
  },
  {
    "id": "R02_KRA_06",
    "section": "Krajobraz",
    "type": "riddle",
    "prompt": "Jak nazywa się krajobraz w dominującym stopniu przekształcony przez człowieka?",
    "options": null,
    "answer": "antropogeniczny",
    "altAnswers": [
      "antropogeniczny",
      "krajobraz antropogeniczny"
    ],
    "explanation": "Krajobraz w dominującym stopniu przekształcony przez człowieka nazywamy antropogenicznym."
  },
  {
    "id": "R02_KRA_07",
    "section": "Krajobraz",
    "type": "single_choice",
    "prompt": "Ile pasów krajobrazowych wyróżniono w Polsce?",
    "options": [
      "sześć",
      "dwa",
      "trzy",
      "cztery",
      "osiem",
      "dziesięć"
    ],
    "answer": 0,
    "explanation": "W Polsce wyróżniono sześć pasów krajobrazowych: pobrzeży, pojezierzy, nizin, wyżyn, kotlin i gór."
  },
  {
    "id": "R02_KRA_08",
    "section": "Krajobraz",
    "type": "sequence",
    "prompt": "Ułóż pasy krajobrazowe Polski od północy ku południu.",
    "options": null,
    "items": [
      "pas wyżyn",
      "pas pobrzeży",
      "pas gór",
      "pas pojezierzy",
      "pas kotlin",
      "pas nizin"
    ],
    "answer": [
      "pas pobrzeży",
      "pas pojezierzy",
      "pas nizin",
      "pas wyżyn",
      "pas kotlin",
      "pas gór"
    ],
    "explanation": "Pasy krajobrazowe Polski układają się pasowo: od pobrzeży nad Bałtykiem, przez pojezierza, niziny, wyżyny i kotliny, po góry na południu."
  },
  {
    "id": "R02_KRA_09",
    "section": "Krajobraz",
    "type": "match",
    "prompt": "Połącz pas krajobrazowy z cechą.",
    "options": null,
    "left": [
      "pas pobrzeży",
      "pas pojezierzy",
      "pas nizin",
      "pas kotlin"
    ],
    "right": [
      "tereny nad Morzem Bałtyckim z plażami i klifami",
      "obszar z bardzo licznymi jeziorami",
      "ogromny obszar równinny do 300 m n.p.m.",
      "obniżone równinne obszary między wyżynami a górami"
    ],
    "answer": {
      "pas pobrzeży": "tereny nad Morzem Bałtyckim z plażami i klifami",
      "pas pojezierzy": "obszar z bardzo licznymi jeziorami",
      "pas nizin": "ogromny obszar równinny do 300 m n.p.m.",
      "pas kotlin": "obniżone równinne obszary między wyżynami a górami"
    },
    "explanation": "Pasy krajobrazowe mają wspólne cechy rzeźby terenu i wysokości, na przykład pobrzeża leżą nad Bałtykiem, a kotliny między wyżynami i górami."
  },
  {
    "id": "R02_KRA_10",
    "section": "Krajobraz",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do elementów krajobrazu naturalnego: rzeźba terenu, wody, roślinność, zabudowa.",
    "options": null,
    "answer": "zabudowa",
    "explanation": "Rzeźba terenu, wody i roślinność to elementy krajobrazu naturalnego. Zabudowa jest dziełem człowieka, więc należy do krajobrazu kulturowego."
  },
  {
    "id": "R02_KRA_11",
    "section": "Krajobraz",
    "type": "scenario",
    "prompt": "Na mapie zaznaczono pokrycie terenu lasami, polami uprawnymi, łąkami i zabudową. Jaki to typ mapy?",
    "options": [
      "mapa krajobrazowa",
      "mapa pogody",
      "plan jednego budynku",
      "podziałka liniowa",
      "globus",
      "legenda"
    ],
    "answer": 0,
    "explanation": "Mapy krajobrazowe przedstawiają pokrycie terenu, na przykład lasami, polami uprawnymi lub zabudową."
  },
  {
    "id": "R02_KRA_12",
    "section": "Krajobraz",
    "type": "sort",
    "prompt": "Przyporządkuj elementy krajobrazu do grup.",
    "options": null,
    "items": [
      "rzeka",
      "las",
      "zwierzęta",
      "budynki",
      "drogi",
      "mosty"
    ],
    "categories": [
      "elementy naturalne",
      "elementy wprowadzone przez człowieka"
    ],
    "answer": {
      "elementy naturalne": [
        "rzeka",
        "las",
        "zwierzęta"
      ],
      "elementy wprowadzone przez człowieka": [
        "budynki",
        "drogi",
        "mosty"
      ]
    },
    "explanation": "W krajobrazie występują elementy naturalne, takie jak wody i roślinność, oraz elementy wprowadzone przez człowieka, na przykład budynki, drogi i mosty."
  },
  {
    "id": "R02_OCH_01",
    "section": "Ochrona przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz powody ochrony przyrody.",
    "options": [
      "zachowanie przyrodniczego bogactwa planety",
      "ocalenie życia zwierząt, roślin i innych organizmów",
      "przeciwdziałanie zmianie klimatu",
      "życie w środowisku sprzyjającym zdrowiu człowieka",
      "niewyczerpanie naturalnych zasobów Ziemi",
      "zastąpienie parków narodowych parkingami"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Przyrodę chroni się między innymi dla zachowania bogactwa planety, ochrony organizmów, przeciwdziałania zmianie klimatu, zdrowego środowiska i zasobów naturalnych."
  },
  {
    "id": "R02_OCH_02",
    "section": "Ochrona przyrody",
    "type": "true_false",
    "prompt": "Na łonie natury należy schodzić z wyznaczonych szlaków, aby lepiej poznać teren.",
    "options": null,
    "answer": false,
    "explanation": "Wprost zapisano, że nie należy schodzić z wyznaczonych szlaków."
  },
  {
    "id": "R02_OCH_03",
    "section": "Ochrona przyrody",
    "type": "sort",
    "prompt": "Przyporządkuj zachowania do właściwych grup.",
    "options": null,
    "items": [
      "zakręcanie wody w kranie",
      "segregowanie śmieci",
      "hałasowanie w naturze",
      "zrywanie roślin"
    ],
    "categories": [
      "dobre nawyki",
      "czego nie robić na łonie natury"
    ],
    "answer": {
      "dobre nawyki": [
        "zakręcanie wody w kranie",
        "segregowanie śmieci"
      ],
      "czego nie robić na łonie natury": [
        "hałasowanie w naturze",
        "zrywanie roślin"
      ]
    },
    "explanation": "Na co dzień warto oszczędzać wodę i segregować śmieci, a na łonie natury nie należy hałasować ani zrywać roślin."
  },
  {
    "id": "R02_OCH_04",
    "section": "Ochrona przyrody",
    "type": "single_choice",
    "prompt": "Czym są parki narodowe?",
    "options": [
      "obszarami najcenniejszymi przyrodniczo, gdzie chroni się przyrodę ożywioną i nieożywioną",
      "miejscami, w których wolno niszczyć rośliny",
      "obszarami bez żadnych ograniczeń dla człowieka",
      "wyłącznie mapami turystycznymi",
      "drogami ekspresowymi na mapie",
      "polami uprawnymi bez ochrony"
    ],
    "answer": 0,
    "image": "r02_park_narodowy_szlak.jpg",
    "explanation": "Parki narodowe obejmują obszary najcenniejsze przyrodniczo i chroni się w nich przyrodę ożywioną oraz nieożywioną."
  },
  {
    "id": "R02_OCH_05",
    "section": "Ochrona przyrody",
    "type": "match",
    "prompt": "Połącz formę ochrony przyrody z opisem.",
    "options": null,
    "left": [
      "park narodowy",
      "rezerwat przyrody",
      "park krajobrazowy",
      "ochrona gatunków"
    ],
    "right": [
      "duży obszar o najcenniejszych walorach przyrodniczych",
      "mniejszy obszar, gdzie chroni się całą naturę lub jej wybrane elementy",
      "obszar, w którym chroni się krajobraz",
      "ochrona zwierząt, roślin lub grzybów przed zakłócaniem i niszczeniem"
    ],
    "answer": {
      "park narodowy": "duży obszar o najcenniejszych walorach przyrodniczych",
      "rezerwat przyrody": "mniejszy obszar, gdzie chroni się całą naturę lub jej wybrane elementy",
      "park krajobrazowy": "obszar, w którym chroni się krajobraz",
      "ochrona gatunków": "ochrona zwierząt, roślin lub grzybów przed zakłócaniem i niszczeniem"
    },
    "explanation": "Różne formy ochrony obejmują różne obszary i cele: od parków narodowych po ochronę konkretnych gatunków."
  },
  {
    "id": "R02_OCH_06",
    "section": "Ochrona przyrody",
    "type": "riddle",
    "prompt": "Jaki park narodowy jest największy w Polsce?",
    "options": null,
    "answer": "Biebrzański Park Narodowy",
    "altAnswers": [
      "Biebrzański Park Narodowy",
      "Biebrzański",
      "Biebrzanski Park Narodowy",
      "Biebrzanski"
    ],
    "explanation": "Wskazano rozlewiska Biebrzy w Biebrzańskim Parku Narodowym i opisano go jako największy park narodowy w Polsce."
  },
  {
    "id": "R02_OCH_07",
    "section": "Ochrona przyrody",
    "type": "fill_in",
    "prompt": "Cis Henrykowski w Henrykowie Lubańskim to najstarsze drzewo w Polsce i liczy około __________ lat.",
    "options": null,
    "answer": [
      "1250"
    ],
    "altAnswers": [
      [
        "1250",
        "około 1250",
        "ok. 1250"
      ]
    ],
    "image": "r02_cis_henrykowski.jpg",
    "explanation": "Cis Henrykowski liczy około 1250 lat i jest obecnie chroniony specjalnym rusztowaniem."
  },
  {
    "id": "R02_OCH_08",
    "section": "Ochrona przyrody",
    "type": "scenario",
    "prompt": "Podczas wycieczki uczeń chce nakarmić napotkane dzikie zwierzę i podejść bliżej, żeby je przestraszyć dla żartu. Jak powinien postąpić?",
    "options": [
      "nie dokarmiać i nie płoszyć zwierząt",
      "nakarmić zwierzę resztkami jedzenia",
      "płoszyć zwierzęta, aby uciekły",
      "zrywać rośliny obok zwierzęcia",
      "zejść ze szlaku, żeby znaleźć więcej zwierząt",
      "hałasować, żeby zwierzęta było słychać"
    ],
    "answer": 0,
    "explanation": "Na łonie natury nie należy dokarmiać ani płoszyć zwierząt."
  },
  {
    "id": "R02_OCH_09",
    "section": "Ochrona przyrody",
    "type": "true_false",
    "prompt": "Rezerwaty przyrody są mniejsze od parków narodowych, a działalność człowieka jest w nich mocno ograniczona.",
    "options": null,
    "answer": true,
    "explanation": "Rezerwaty są mniejsze od parków narodowych i że działalność człowieka jest w nich mocno ograniczona."
  },
  {
    "id": "R02_OCH_10",
    "section": "Ochrona przyrody",
    "type": "single_choice",
    "prompt": "Co chroni się w parkach krajobrazowych?",
    "options": [
      "krajobraz danego obszaru",
      "wyłącznie ruch samolotów",
      "tylko nazwy ulic",
      "jedynie skale liczbowe",
      "wszystkie parkingi",
      "tylko ekrany smartfonów"
    ],
    "answer": 0,
    "explanation": "W parkach krajobrazowych chroni się krajobraz danego obszaru, przy ograniczonej ingerencji człowieka."
  },
  {
    "id": "R02_OCH_11",
    "section": "Ochrona przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do codziennej ochrony przyrody: zakręcanie wody, segregowanie śmieci, filtrowanie wody, kupowanie plastikowej torby.",
    "options": null,
    "answer": "kupowanie plastikowej torby",
    "explanation": "Zakręcanie wody, segregowanie śmieci i filtrowanie wody zamiast kupowania plastikowych butelek pomagają chronić przyrodę; kupowanie plastikowej torby na każde zakupy temu przeczy."
  },
  {
    "id": "R02_OCH_12",
    "section": "Ochrona przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz zachowania, których nie należy robić na łonie natury.",
    "options": [
      "dokarmiać i płoszyć zwierząt",
      "zrywać roślin",
      "śmiecić",
      "hałasować",
      "schodzić z wyznaczonych szlaków",
      "segregować śmieci w domu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W naturze nie należy dokarmiać i płoszyć zwierząt, zrywać roślin, śmiecić, hałasować ani schodzić z wyznaczonych szlaków."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Skala liczbowa 1:800 000 w postaci mianowanej to 1 cm - __________.",
    "options": null,
    "answer": [
      "8 km"
    ],
    "altAnswers": [
      [
        "8 km",
        "8 kilometrów"
      ]
    ],
    "explanation": "800 000 cm to 8000 m, czyli 8 km, dlatego skala 1:800 000 oznacza 1 cm - 8 km."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Od domu do szkoły są 2 km. Na planie sporządzonym w skali 1:5000 trzeba zaznaczyć tę odległość. Ile centymetrów będzie miała na planie?",
    "options": [
      "40 cm",
      "4 cm",
      "20 cm",
      "400 cm",
      "10 cm",
      "2 cm"
    ],
    "answer": 0,
    "explanation": "W skali 1:5000 jeden centymetr odpowiada 50 m. Odległość 2 km to 2000 m, a 2000 m podzielone przez 50 m daje 40 cm."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Mapa w skali 1:25 000 ma skalę mianowaną:",
    "options": [
      "1 cm - 250 m",
      "1 cm - 25 m",
      "1 cm - 2,5 km",
      "1 cm - 25 km",
      "1 cm - 2500 m",
      "1 cm - 250 km"
    ],
    "answer": 0,
    "explanation": "W skali 1:25 000 jeden centymetr na mapie odpowiada 25 000 cm, czyli 250 m w terenie."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż czynności w kolejności obliczania długości trasy złożonej z kilku odcinków.",
    "options": null,
    "items": [
      "Odczytaj skalę i przelicz długość całej trasy",
      "Zmierz każdy odcinek osobno",
      "Podziel trasę na odcinki",
      "Zsumuj długości odcinków"
    ],
    "answer": [
      "Podziel trasę na odcinki",
      "Zmierz każdy odcinek osobno",
      "Zsumuj długości odcinków",
      "Odczytaj skalę i przelicz długość całej trasy"
    ],
    "explanation": "Trasę, która nie biegnie w linii prostej, dzieli się na odcinki, mierzy osobno, sumuje i przelicza według skali."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o poziomicach.",
    "options": [
      "łączą punkty o jednakowej wysokości nad poziomem morza",
      "nigdy się nie przecinają",
      "odległości między nimi informują o stromości stoku",
      "ważniejsze poziomice mogą być pogrubione",
      "zawsze zastępują tytuł mapy",
      "zawsze pokazują głębokość mórz kolorem niebieskim"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_stromy_stok.jpg",
    "explanation": "Poziomice łączą punkty o tej samej wysokości, nie przecinają się, a ich odstępy pomagają ocenić stromość stoku; ważniejsze poziomice mogą być pogrubione."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz próg wysokości z właściwym pojęciem.",
    "options": null,
    "left": [
      "0-300 m n.p.m.",
      "300-500 m n.p.m.",
      "powyżej 500 m n.p.m.",
      "powyżej 300 m wysokości względnej"
    ],
    "right": [
      "niziny",
      "wyżyny",
      "góry według wysokości bezwzględnej",
      "góry według wysokości względnej"
    ],
    "answer": {
      "0-300 m n.p.m.": "niziny",
      "300-500 m n.p.m.": "wyżyny",
      "powyżej 500 m n.p.m.": "góry według wysokości bezwzględnej",
      "powyżej 300 m wysokości względnej": "góry według wysokości względnej"
    },
    "explanation": "Podaje się progi wysokości dla nizin, wyżyn i gór oraz przypomina, że góry można rozpoznawać także po wysokości względnej powyżej 300 m."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do przykładów map tematycznych: mapa turystyczna, mapa historyczna, mapa gospodarcza, mapa ogólnogeograficzna.",
    "options": null,
    "answer": "mapa ogólnogeograficzna",
    "explanation": "Mapy turystyczne, historyczne i gospodarcze są przykładami map tematycznych, a mapa ogólnogeograficzna jest osobnym rodzajem mapy ze względu na treść."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na mapach głębokość zbiorników wodnych oznacza się tak, że im jaśniejszy odcień niebieskiego, tym większa głębokość.",
    "options": null,
    "answer": false,
    "explanation": "Podano odwrotną zasadę: im ciemniejszy odcień niebieskiego, tym większa głębokość zbiornika wodnego."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się dział geografii zajmujący się mapami?",
    "options": null,
    "answer": "kartografia",
    "altAnswers": [
      "kartografia",
      "kartografią"
    ],
    "explanation": "Dział geografii zajmujący się mapami to kartografia."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń widzi na mapie rzeki, jeziora, miasta, granice państw i ukształtowanie terenu. Jaki typ mapy rozpoznaje?",
    "options": [
      "mapę ogólnogeograficzną",
      "mapę pogody",
      "mapę gospodarczą",
      "plan budynku",
      "podziałkę liniową",
      "legendę"
    ],
    "answer": 0,
    "explanation": "Mapy ogólnogeograficzne przedstawiają podstawowe elementy środowiska geograficznego, takie jak rzeki, jeziora, miasta, granice i ukształtowanie terenu."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do pasów krajobrazowych.",
    "options": null,
    "items": [
      "plaże i klify",
      "kilka tysięcy jezior",
      "Góra Kamieńska jako wyjątek",
      "doliny i przełęcze"
    ],
    "categories": [
      "pas pobrzeży",
      "pas pojezierzy",
      "pas nizin",
      "pas gór"
    ],
    "answer": {
      "pas pobrzeży": [
        "plaże i klify"
      ],
      "pas pojezierzy": [
        "kilka tysięcy jezior"
      ],
      "pas nizin": [
        "Góra Kamieńska jako wyjątek"
      ],
      "pas gór": [
        "doliny i przełęcze"
      ]
    },
    "explanation": "Pobrzeża mają plaże i klify, pojezierza liczne jeziora, w pasie nizin wyjątkiem wysokościowym jest Góra Kamieńska, a w górach występują doliny i przełęcze."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na planach kolumny oznacza się zwykle __________, a wiersze __________, dzięki czemu pola mogą mieć oznaczenia takie jak C2.",
    "options": null,
    "answer": [
      "literami",
      "cyframi"
    ],
    "altAnswers": [
      [
        "literami",
        "literami alfabetu"
      ],
      [
        "cyframi",
        "liczbami"
      ]
    ],
    "explanation": "Plany bywają podzielone na prostokątne pola: kolumny oznacza się literami, a wiersze cyframi, co ułatwia określanie położenia obiektów."
  }
];

const KID_PROMPTS = {
  "R02_MAP_01": "Czym jest mapa?",
  "R02_MAP_05": "Które elementy mogą być na mapie?",
  "R02_MAP_10": "Jaka mapa jest w smartfonie?",
  "R02_SKA_01": "Po co jest skala?",
  "R02_SKA_07": "Jak po kolei obliczyć odległość z mapy?",
  "R02_UKS_01": "Od czego mierzy się wysokość bezwzględną?",
  "R02_UKS_05": "Jak nazywają się linie tej samej wysokości?",
  "R02_KRA_05": "Co może tworzyć krajobraz?",
  "R02_KRA_07": "Ile jest pasów krajobrazowych Polski?",
  "R02_OCH_01": "Dlaczego chronimy przyrodę?",
  "R02_OCH_04": "Czym jest park narodowy?",
  "R02_HARD_02": "Ile cm na planie ma 2 km w skali 1:5000?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Mapa",
  icon: "🗺️",
  sectionOrder: [
    "Mapa i plan",
    "Skala mapy i planu",
    "Ukształtowanie terenu",
    "Krajobraz",
    "Ochrona przyrody"
  ],
  sectionIcons: {
    "Mapa i plan": "🗺️",
    "Skala mapy i planu": "📏",
    "Ukształtowanie terenu": "⛰️",
    "Krajobraz": "🏞️",
    "Ochrona przyrody": "🌿"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
