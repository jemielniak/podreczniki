// Skróty sekcji:
//   MAP = Mapa i skala
//   ODL = Odległości na mapie i w terenie
//   UKS = Ukształtowanie powierzchni na mapach
//   CZY = Czytamy mapę najbliższej okolicy
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_MAP_01",
    "section": "Mapa i skala",
    "type": "single_choice",
    "prompt": "Czym jest mapa według rozdziału?",
    "options": [
      "Zdjęciem krajobrazu z boku",
      "Obrazem powierzchni Ziemi lub jej fragmentu widzianym z góry",
      "Spisem nazw miejscowości",
      "Rysunkiem wyłącznie granic państw",
      "Tabelą odległości między miastami",
      "Opisem pogody na danym obszarze"
    ],
    "answer": 1,
    "image": "/img/r01_elementy_mapy_schemat.png",
    "explanation": "Mapa jest obrazem powierzchni Ziemi lub jej fragmentu widzianym z góry, przedstawionym na płaszczyźnie i w pomniejszeniu."
  },
  {
    "id": "R01_MAP_02",
    "section": "Mapa i skala",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które powinna zawierać mapa.",
    "options": [
      "treść",
      "skala",
      "legenda",
      "tytuł",
      "spis treści podręcznika",
      "prognoza pogody"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r01_elementy_mapy_schemat.png",
    "explanation": "Aby obraz mógł być mapą, powinien zawierać treść, skalę, legendę oraz tytuł."
  },
  {
    "id": "R01_MAP_03",
    "section": "Mapa i skala",
    "type": "true_false",
    "prompt": "Skala informuje, ile razy pomniejszono na mapie rzeczywiste odległości lub wymiary obiektów.",
    "options": null,
    "answer": true,
    "explanation": "Skala pozwala przeliczać pomiary z mapy na odległości lub wymiary w terenie."
  },
  {
    "id": "R01_MAP_04",
    "section": "Mapa i skala",
    "type": "fill_in",
    "prompt": "Znaki kartograficzne dzielimy na znaki __________, __________ i __________.",
    "options": null,
    "answer": [
      "punktowe",
      "liniowe",
      "powierzchniowe"
    ],
    "altAnswers": [
      [
        "punktowe",
        "punktowe."
      ],
      [
        "liniowe",
        "liniowe."
      ],
      [
        "powierzchniowe",
        "powierzchniowe."
      ]
    ],
    "explanation": "W rozdziale wyróżniono znaki punktowe, liniowe i powierzchniowe."
  },
  {
    "id": "R01_MAP_05",
    "section": "Mapa i skala",
    "type": "riddle",
    "prompt": "Zestawienie wszystkich znaków kartograficznych użytych na mapie wraz z ich wyjaśnieniem to...",
    "options": null,
    "answer": "legenda",
    "altAnswers": [
      "legenda",
      "legenda mapy"
    ],
    "explanation": "Legenda objaśnia znaczenie znaków zastosowanych na mapie."
  },
  {
    "id": "R01_MAP_06",
    "section": "Mapa i skala",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: tytuł, legenda, skala, termometr.",
    "options": null,
    "answer": "termometr",
    "explanation": "Termometr nie jest podstawowym elementem mapy, a tytuł, legenda i skala są elementami mapy."
  },
  {
    "id": "R01_MAP_07",
    "section": "Mapa i skala",
    "type": "match",
    "prompt": "Połącz rodzaj znaku kartograficznego z przykładem.",
    "options": null,
    "left": [
      "znak punktowy",
      "znak liniowy",
      "znak powierzchniowy"
    ],
    "right": [
      "las lub zabudowa",
      "droga lub rzeka",
      "pojedynczy budynek lub przystań"
    ],
    "answer": {
      "znak punktowy": "pojedynczy budynek lub przystań",
      "znak liniowy": "droga lub rzeka",
      "znak powierzchniowy": "las lub zabudowa"
    },
    "explanation": "Znaki punktowe oznaczają pojedyncze obiekty, liniowe przebieg dróg lub rzek, a powierzchniowe zasięg rozległych obiektów."
  },
  {
    "id": "R01_MAP_08",
    "section": "Mapa i skala",
    "type": "single_choice",
    "prompt": "Który zapis jest przykładem skali liczbowej?",
    "options": [
      "1:1000",
      "1 cm - 10 m",
      "0 10 20 30 m",
      "barwa zielona",
      "legenda mapy",
      "poziomica 500"
    ],
    "answer": 0,
    "explanation": "Skala liczbowa ma postać stosunku, na przykład 1:1000."
  },
  {
    "id": "R01_MAP_09",
    "section": "Mapa i skala",
    "type": "fill_in",
    "prompt": "W skali 1:100 000 odcinek 1 cm na mapie odpowiada w terenie __________ km.",
    "options": null,
    "answer": [
      "1"
    ],
    "altAnswers": [
      [
        "1",
        "1 km",
        "jednemu",
        "jednemu kilometrowi"
      ]
    ],
    "image": "/img/r01_podzialka_liniowa.png",
    "explanation": "100 000 cm to 1000 m, czyli 1 km."
  },
  {
    "id": "R01_MAP_10",
    "section": "Mapa i skala",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do sposobów przedstawiania skali.",
    "options": null,
    "items": [
      "1:10 000",
      "1 cm - 100 m",
      "0 100 200 300 m",
      "1:500 000",
      "1 cm - 5 km"
    ],
    "categories": [
      "skala liczbowa",
      "skala mianowana",
      "podziałka liniowa"
    ],
    "answer": {
      "skala liczbowa": [
        "1:10 000",
        "1:500 000"
      ],
      "skala mianowana": [
        "1 cm - 100 m",
        "1 cm - 5 km"
      ],
      "podziałka liniowa": [
        "0 100 200 300 m"
      ]
    },
    "explanation": "Skalę można zapisać liczbowo, mianowanie albo pokazać za pomocą podziałki liniowej."
  },
  {
    "id": "R01_ODL_01",
    "section": "Odległości na mapie i w terenie",
    "type": "single_choice",
    "prompt": "W skali 1:30 000 jeden centymetr na mapie odpowiada ilu metrom w terenie?",
    "options": [
      "30 m",
      "300 m",
      "3 km",
      "30 km",
      "3000 km",
      "1 m"
    ],
    "answer": 1,
    "explanation": "30 000 cm to 300 m, dlatego 1 cm na mapie odpowiada 300 m w terenie."
  },
  {
    "id": "R01_ODL_02",
    "section": "Odległości na mapie i w terenie",
    "type": "scenario",
    "prompt": "Na mapie w skali 1:30 000 odcinek między punktami ma 3 cm. Jaką długość ma ten odcinek w terenie?",
    "options": [
      "90 m",
      "300 m",
      "900 m",
      "2,7 km",
      "9 km",
      "30 km"
    ],
    "answer": 2,
    "explanation": "W tej skali 1 cm odpowiada 300 m, więc 3 cm odpowiadają 900 m."
  },
  {
    "id": "R01_ODL_03",
    "section": "Odległości na mapie i w terenie",
    "type": "fill_in",
    "prompt": "Trasa na mapie w skali 1:30 000 składa się z odcinków 6 cm i 3 cm. Jej długość w terenie wynosi __________ km.",
    "options": null,
    "answer": [
      "2,7"
    ],
    "altAnswers": [
      [
        "2,7",
        "2.7",
        "2,7 km",
        "2.7 km"
      ]
    ],
    "explanation": "Suma odcinków to 9 cm, a 9 razy 0,3 km daje 2,7 km."
  },
  {
    "id": "R01_ODL_04",
    "section": "Odległości na mapie i w terenie",
    "type": "true_false",
    "prompt": "Do obliczania odległości w linii prostej na mapie można użyć linijki oraz skali liczbowej.",
    "options": null,
    "answer": true,
    "explanation": "Linijka i skala liczbowa są odpowiednie do odcinków prostych oraz tras złożonych z prostych odcinków."
  },
  {
    "id": "R01_ODL_05",
    "section": "Odległości na mapie i w terenie",
    "type": "single_choice",
    "prompt": "Czego najlepiej użyć do zmierzenia krętej trasy na mapie?",
    "options": [
      "nitki i podziałki liniowej",
      "tylko kątomierza",
      "wyłącznie kompasu",
      "termometru",
      "legendy bez skali",
      "siatki kartograficznej bez pomiaru"
    ],
    "answer": 0,
    "image": "/img/r01_podzialka_liniowa.png",
    "explanation": "Przy nieregularnej trasie najlepiej użyć nitki oraz podziałki liniowej."
  },
  {
    "id": "R01_ODL_06",
    "section": "Odległości na mapie i w terenie",
    "type": "sequence",
    "prompt": "Ułóż czynności mierzenia krętej trasy nitką w poprawnej kolejności.",
    "options": null,
    "items": [
      "Przyłóż naprężoną nitkę do podziałki liniowej",
      "Ułóż nitkę wzdłuż mierzonej trasy",
      "Zaznacz na nitce koniec trasy",
      "Odczytaj długość trasy z podziałki"
    ],
    "answer": [
      "Ułóż nitkę wzdłuż mierzonej trasy",
      "Zaznacz na nitce koniec trasy",
      "Przyłóż naprężoną nitkę do podziałki liniowej",
      "Odczytaj długość trasy z podziałki"
    ],
    "explanation": "Najpierw układa się nitkę na trasie, potem zaznacza długość, prostuje nitkę i przykłada ją do podziałki."
  },
  {
    "id": "R01_ODL_07",
    "section": "Odległości na mapie i w terenie",
    "type": "match",
    "prompt": "Połącz zapis skali z odpowiadającą mu odległością w terenie dla 1 cm na mapie.",
    "options": null,
    "left": [
      "1:10 000",
      "1:250 000",
      "1:500 000",
      "1:1 000 000"
    ],
    "right": [
      "10 km",
      "100 m",
      "2,5 km",
      "5 km"
    ],
    "answer": {
      "1:10 000": "100 m",
      "1:250 000": "2,5 km",
      "1:500 000": "5 km",
      "1:1 000 000": "10 km"
    },
    "explanation": "Mianownik skali liczbowej podaje liczbę centymetrów w terenie odpowiadających 1 cm na mapie."
  },
  {
    "id": "R01_ODL_08",
    "section": "Odległości na mapie i w terenie",
    "type": "riddle",
    "prompt": "Graficzne przedstawienie skali, pokazujące odległości w terenie na odcinku z podziałem, to...",
    "options": null,
    "answer": "podziałka liniowa",
    "altAnswers": [
      "podziałka liniowa",
      "podzialka liniowa",
      "podziałka"
    ],
    "explanation": "Podziałka liniowa pozwala odczytywać odległości bez wykonywania pełnych obliczeń."
  },
  {
    "id": "R01_ODL_09",
    "section": "Odległości na mapie i w terenie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: linijka, nitka, podziałka liniowa, wysokość bezwzględna.",
    "options": null,
    "answer": "wysokość bezwzględna",
    "explanation": "Wysokość bezwzględna dotyczy ukształtowania terenu, a pozostałe elementy pomagają mierzyć odległości na mapie."
  },
  {
    "id": "R01_ODL_10",
    "section": "Odległości na mapie i w terenie",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe informacje o mierzeniu odległości na mapie.",
    "options": [
      "Odległość w linii prostej można zmierzyć linijką.",
      "Przy krętej trasie przydaje się nitka.",
      "Podziałka liniowa pomaga odczytać odległość w terenie.",
      "Skala nie jest potrzebna do obliczania odległości.",
      "Każdą krętą drogę najdokładniej mierzy się tylko kątomierzem."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do prostych odcinków przydaje się linijka i skala liczbowa, a do tras krętych nitka i podziałka liniowa."
  },
  {
    "id": "R01_UKS_01",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "single_choice",
    "prompt": "Jak nazywa się wysokość punktu mierzona od poziomu morza?",
    "options": [
      "wysokość bezwzględna",
      "wysokość względna",
      "skala liczbowa",
      "podziałka liniowa",
      "legenda",
      "azymut"
    ],
    "answer": 0,
    "explanation": "Wysokość bezwzględna to wysokość mierzona od poziomu morza."
  },
  {
    "id": "R01_UKS_02",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "true_false",
    "prompt": "Wysokość względną mierzy się od wybranego miejsca, na przykład od podnóża wzniesienia do jego szczytu.",
    "options": null,
    "answer": true,
    "explanation": "Wysokość względna zależy od miejsca, od którego ją mierzymy."
  },
  {
    "id": "R01_UKS_03",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "riddle",
    "prompt": "Linia na mapie łącząca punkty położone na tej samej wysokości nad poziomem morza to...",
    "options": null,
    "answer": "poziomica",
    "altAnswers": [
      "poziomica",
      "izohipsa",
      "poziomice",
      "izohipsy"
    ],
    "image": "/img/r01_poziomice_wzniesienie.png",
    "explanation": "Poziomica, czyli izohipsa, łączy punkty o tej samej wysokości bezwzględnej."
  },
  {
    "id": "R01_UKS_04",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "fill_in",
    "prompt": "Mapa, na której ukształtowanie terenu przedstawiono za pomocą poziomic, to mapa __________.",
    "options": null,
    "answer": [
      "poziomicowa"
    ],
    "altAnswers": [
      [
        "poziomicowa",
        "poziomicową",
        "poziomicowej"
      ]
    ],
    "image": "/img/r01_poziomice_wzniesienie.png",
    "explanation": "Mapa poziomicowa przedstawia ukształtowanie terenu za pomocą poziomic."
  },
  {
    "id": "R01_UKS_05",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "single_choice",
    "prompt": "Gdzie teren jest najbardziej stromy na mapie poziomicowej?",
    "options": [
      "tam, gdzie poziomice są bardzo blisko siebie",
      "tam, gdzie poziomice są daleko od siebie",
      "tam, gdzie nie ma żadnej poziomicy",
      "zawsze przy legendzie mapy",
      "wyłącznie przy rzekach",
      "tylko na obszarach zielonych"
    ],
    "answer": 0,
    "image": "/img/r01_poziomice_wzniesienie.png",
    "explanation": "Im bliżej siebie leżą poziomice, tym teren jest bardziej stromy."
  },
  {
    "id": "R01_UKS_06",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "multi_select",
    "prompt": "Co można odczytać lub określić z mapy poziomicowej?",
    "options": [
      "wysokość bezwzględną",
      "wysokość względną",
      "nachylenie terenu",
      "rodzaje form terenu",
      "cenę biletu do muzeum",
      "aktualną temperaturę powietrza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Układ poziomic pozwala odczytać wysokość bezwzględną, obliczyć wysokość względną, rozpoznać formy terenu i nachylenie stoków."
  },
  {
    "id": "R01_UKS_07",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "match",
    "prompt": "Połącz formę terenu ze sposobem rozpoznawania jej na mapie poziomicowej.",
    "options": null,
    "left": [
      "dolina",
      "kotlina",
      "góra z dwoma wierzchołkami"
    ],
    "right": [
      "wartości poziomic maleją do środka, a poziomice otaczają dno prawie ze wszystkich stron",
      "wartości poziomic rosną ku dwóm najwyższym punktom, między którymi jest przełęcz",
      "wartości poziomic maleją ku rzece, a poziomice są prawie równoległe do rzeki"
    ],
    "answer": {
      "dolina": "wartości poziomic maleją ku rzece, a poziomice są prawie równoległe do rzeki",
      "kotlina": "wartości poziomic maleją do środka, a poziomice otaczają dno prawie ze wszystkich stron",
      "góra z dwoma wierzchołkami": "wartości poziomic rosną ku dwóm najwyższym punktom, między którymi jest przełęcz"
    },
    "explanation": "Dolina, kotlina i góra mają różny układ poziomic oraz różny kierunek zmian wysokości."
  },
  {
    "id": "R01_UKS_08",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "sort",
    "prompt": "Przyporządkuj barwy i zakresy do form ukształtowania powierzchni na mapie hipsometrycznej.",
    "options": null,
    "items": [
      "odcienie zieleni od 0 do 300 m n.p.m.",
      "odcienie żółci powyżej 300 m n.p.m.",
      "pomarańczowy i czerwony powyżej 500 m n.p.m.",
      "ciemnozielony poniżej poziomu morza",
      "niebieski"
    ],
    "categories": [
      "niziny",
      "wyżyny",
      "góry",
      "depresje",
      "wody"
    ],
    "answer": {
      "niziny": [
        "odcienie zieleni od 0 do 300 m n.p.m."
      ],
      "wyżyny": [
        "odcienie żółci powyżej 300 m n.p.m."
      ],
      "góry": [
        "pomarańczowy i czerwony powyżej 500 m n.p.m."
      ],
      "depresje": [
        "ciemnozielony poniżej poziomu morza"
      ],
      "wody": [
        "niebieski"
      ]
    },
    "image": "/img/r01_barwy_hipsometryczne.png",
    "explanation": "Na mapach hipsometrycznych niziny, wyżyny, góry, depresje i wody oznacza się różnymi barwami."
  },
  {
    "id": "R01_UKS_09",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "scenario",
    "prompt": "Szczyt leży na wysokości 720 m n.p.m., a dno doliny na 200 m n.p.m. Jaka jest wysokość względna wzniesienia względem dna doliny?",
    "options": [
      "200 m",
      "520 m",
      "720 m",
      "920 m",
      "1440 m",
      "20 m"
    ],
    "answer": 1,
    "explanation": "Wysokość względną obliczamy przez odjęcie wysokości dna doliny od wysokości szczytu: 720 m - 200 m = 520 m."
  },
  {
    "id": "R01_UKS_10",
    "section": "Ukształtowanie powierzchni na mapach",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: poziomica, izohipsa, wysokość bezwzględna, linia autobusowa.",
    "options": null,
    "answer": "linia autobusowa",
    "explanation": "Linia autobusowa nie służy do przedstawiania ukształtowania powierzchni, a pozostałe pojęcia są z nim związane."
  },
  {
    "id": "R01_CZY_01",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "single_choice",
    "prompt": "Które mapy przedstawiają podstawowe informacje o obszarze, takie jak rzeźba terenu, rzeki, jeziora, miasta, drogi i granice?",
    "options": [
      "mapy ogólnogeograficzne",
      "plany miast",
      "mapy turystyczne",
      "mapy krajobrazowe",
      "podziałki liniowe",
      "legendy"
    ],
    "answer": 0,
    "explanation": "Mapy ogólnogeograficzne pokazują podstawowe informacje o danym obszarze."
  },
  {
    "id": "R01_CZY_02",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "match",
    "prompt": "Połącz rodzaj mapy z jej głównym zastosowaniem.",
    "options": null,
    "left": [
      "mapa ogólnogeograficzna",
      "mapa krajobrazowa",
      "mapa turystyczna",
      "plan miasta"
    ],
    "right": [
      "pełna sieć ulic, nazwy ulic i ważne budynki",
      "podstawowe informacje o obszarze",
      "zagospodarowanie terenu, pola, łąki, lasy i zabudowa",
      "szlaki turystyczne i ciekawe miejsca do zwiedzania"
    ],
    "answer": {
      "mapa ogólnogeograficzna": "podstawowe informacje o obszarze",
      "mapa krajobrazowa": "zagospodarowanie terenu, pola, łąki, lasy i zabudowa",
      "mapa turystyczna": "szlaki turystyczne i ciekawe miejsca do zwiedzania",
      "plan miasta": "pełna sieć ulic, nazwy ulic i ważne budynki"
    },
    "explanation": "Różne mapy zawierają różną treść, dostosowaną do potrzeb użytkowników."
  },
  {
    "id": "R01_CZY_03",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "multi_select",
    "prompt": "Zaznacz zalety map cyfrowych wymienione w rozdziale.",
    "options": [
      "można je dowolnie powiększać i pomniejszać",
      "można wybierać wyświetlane informacje",
      "można mieć je przy sobie w telefonie lub tablecie",
      "są często aktualizowane",
      "zawsze są wykonane na papierze",
      "nie potrzebują legendy ani skali"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mapy cyfrowe można powiększać i pomniejszać, wybierać na nich informacje, mieć je przy sobie i często aktualizować."
  },
  {
    "id": "R01_CZY_04",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "fill_in",
    "prompt": "Zorientowanie mapy polega na takim jej ułożeniu, aby kierunki geograficzne na mapie pokrywały się z kierunkami geograficznymi w __________.",
    "options": null,
    "answer": [
      "terenie"
    ],
    "altAnswers": [
      [
        "terenie",
        "terenie."
      ]
    ],
    "image": "/img/r01_orientowanie_mapy.png",
    "explanation": "Mapę orientuje się po to, aby jej kierunki zgadzały się z kierunkami w terenie."
  },
  {
    "id": "R01_CZY_05",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "sequence",
    "prompt": "Ułóż czynności orientowania mapy za pomocą kompasu w poprawnej kolejności.",
    "options": null,
    "items": [
      "Obracaj mapę, aż północ na mapie pokryje się z północą wskazywaną przez kompas",
      "Rozłóż mapę poziomo",
      "Przyłóż kompas do lewej krawędzi ramki mapy",
      "Odczekaj, aż igła magnetyczna wskaże północ"
    ],
    "answer": [
      "Rozłóż mapę poziomo",
      "Przyłóż kompas do lewej krawędzi ramki mapy",
      "Odczekaj, aż igła magnetyczna wskaże północ",
      "Obracaj mapę, aż północ na mapie pokryje się z północą wskazywaną przez kompas"
    ],
    "image": "/img/r01_orientowanie_mapy.png",
    "explanation": "Najpierw rozkłada się mapę, następnie przykłada kompas, czeka na igłę i obraca mapę zgodnie z kierunkiem północnym."
  },
  {
    "id": "R01_CZY_06",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "true_false",
    "prompt": "Na mapach turystycznych i planach miast kierunek północny bardzo często znajduje się na górze arkusza.",
    "options": null,
    "answer": true,
    "explanation": "W takiej sytuacji południe jest na dole, zachód po lewej, a wschód po prawej."
  },
  {
    "id": "R01_CZY_07",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "single_choice",
    "prompt": "Co na planie miasta pomaga szybko znaleźć obiekt w polu oznaczonym na przykład C2?",
    "options": [
      "siatka z literami i liczbami",
      "barwa hipsometryczna",
      "odcinek wsteczny podziałki",
      "wysokość względna",
      "poziomica 500 m",
      "granica państwa"
    ],
    "answer": 0,
    "explanation": "Siatka z literami i liczbami na obrzeżach planu ułatwia odnajdywanie obiektów."
  },
  {
    "id": "R01_CZY_08",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "scenario",
    "prompt": "Stoisz w terenie i widzisz samotne drzewo, most oraz pojedynczy budynek. Chcesz zorientować mapę bez kompasu. Co powinieneś zrobić?",
    "options": [
      "odszukać te obiekty na mapie i obracać mapę, aż kierunki się pokryją",
      "zmienić skalę liczbową na mianowaną",
      "pokolorować mapę barwami hipsometrycznymi",
      "mierzyć wysokość bezwzględną mostu",
      "usunąć legendę z mapy",
      "policzyć wszystkie ulice w mieście"
    ],
    "answer": 0,
    "image": "/img/r01_orientowanie_mapy.png",
    "explanation": "Mapę można zorientować za pomocą obiektów w terenie, odnajdując je na mapie i obracając mapę tak, aby kierunki się zgadzały."
  },
  {
    "id": "R01_CZY_09",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: mapa cyfrowa, nawigacja satelitarna, aktualizacja danych, poziom morza.",
    "options": null,
    "answer": "poziom morza",
    "explanation": "Poziom morza jest punktem odniesienia wysokości, a pozostałe pojęcia dotyczą map cyfrowych."
  },
  {
    "id": "R01_CZY_10",
    "section": "Czytamy mapę najbliższej okolicy",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do mapy turystycznej albo planu miasta.",
    "options": null,
    "items": [
      "szlaki turystyczne",
      "trasy rowerowe",
      "pełna sieć ulic",
      "nazwy ulic",
      "zabytkowe budowle na trasie",
      "ważne budynki, np. poczty i muzea"
    ],
    "categories": [
      "mapa turystyczna",
      "plan miasta"
    ],
    "answer": {
      "mapa turystyczna": [
        "szlaki turystyczne",
        "trasy rowerowe",
        "zabytkowe budowle na trasie"
      ],
      "plan miasta": [
        "pełna sieć ulic",
        "nazwy ulic",
        "ważne budynki, np. poczty i muzea"
      ]
    },
    "explanation": "Mapy turystyczne pomagają w wycieczkach, a plany miast w poruszaniu się po zróżnicowanej sieci ulic."
  },
  {
    "id": "R01_MIE_01",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie podstawowe elementy mapy?",
    "options": [
      "treść, skala, legenda, tytuł",
      "kompas, linijka, nitka, telefon",
      "barwy, pogoda, zdjęcie, opis",
      "rzeka, jezioro, las, miasto",
      "wysokość, temperatura, wiatr, opad",
      "arkusz, ołówek, gumka, zeszyt"
    ],
    "answer": 0,
    "explanation": "Podstawowe elementy mapy to treść, skala, legenda i tytuł."
  },
  {
    "id": "R01_MIE_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "mapa",
      "skala",
      "legenda",
      "poziomica"
    ],
    "right": [
      "linia łącząca punkty na tej samej wysokości nad poziomem morza",
      "obraz powierzchni Ziemi lub jej fragmentu w pomniejszeniu",
      "informacja, ile razy pomniejszono rzeczywiste odległości lub wymiary",
      "zestawienie znaków kartograficznych i ich wyjaśnień"
    ],
    "answer": {
      "mapa": "obraz powierzchni Ziemi lub jej fragmentu w pomniejszeniu",
      "skala": "informacja, ile razy pomniejszono rzeczywiste odległości lub wymiary",
      "legenda": "zestawienie znaków kartograficznych i ich wyjaśnień",
      "poziomica": "linia łącząca punkty na tej samej wysokości nad poziomem morza"
    },
    "explanation": "W rozdziale zdefiniowano mapę, skalę, legendę i poziomicę jako podstawowe pojęcia pracy z mapą."
  },
  {
    "id": "R01_MIE_03",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Plan miasta przedstawia zwykle niewielki obszar, na przykład miasto lub osiedle.",
    "options": null,
    "answer": true,
    "explanation": "Plany miast dotyczą zwykle niewielkich obszarów, a mapy mogą przedstawiać dużo większe fragmenty powierzchni Ziemi."
  },
  {
    "id": "R01_MIE_04",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z rozdziałem.",
    "options": [
      "Mapa jest obrazem widzianym z góry i przedstawionym w pomniejszeniu.",
      "Skalę można zapisać w postaci liczbowej, mianowanej i jako podziałkę liniową.",
      "Do krętej trasy można użyć nitki.",
      "Poziomice łączą punkty o tej samej wysokości nad poziomem morza.",
      "Legenda służy do mierzenia temperatury.",
      "Barwy hipsometryczne oznaczają wyłącznie zabudowę."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozdział wyjaśnia między innymi definicję mapy, rodzaje skali, użycie nitki i znaczenie poziomic."
  },
  {
    "id": "R01_MIE_05",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Na mapach hipsometrycznych wody oznacza się barwą __________, a niziny odcieniami __________.",
    "options": null,
    "answer": [
      "niebieską",
      "zieleni"
    ],
    "altAnswers": [
      [
        "niebieską",
        "niebieska",
        "niebieskim",
        "niebieski"
      ],
      [
        "zieleni",
        "zieloną",
        "zielony",
        "zielonej"
      ]
    ],
    "explanation": "Wody są niebieskie, a niziny oznacza się odcieniami zieleni."
  },
  {
    "id": "R01_MIE_06",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż działania przy obliczaniu odległości w linii prostej ze skali liczbowej.",
    "options": null,
    "items": [
      "Pomnóż długość odcinka przez wartość odpowiadającą 1 cm w terenie",
      "Odczytaj skalę liczbową",
      "Zmierz linijką odcinek na mapie",
      "Zamień centymetry ze skali na metry lub kilometry"
    ],
    "answer": [
      "Zmierz linijką odcinek na mapie",
      "Odczytaj skalę liczbową",
      "Zamień centymetry ze skali na metry lub kilometry",
      "Pomnóż długość odcinka przez wartość odpowiadającą 1 cm w terenie"
    ],
    "explanation": "Najpierw mierzy się odcinek na mapie, potem odczytuje skalę, przelicza 1 cm i mnoży przez długość odcinka."
  },
  {
    "id": "R01_MIE_07",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Mała ikonka oznaczająca pojedynczy obiekt, na przykład budynek, pocztę lub przystań, to znak...",
    "options": null,
    "answer": "punktowy",
    "altAnswers": [
      "punktowy",
      "znak punktowy"
    ],
    "explanation": "Znak punktowy przedstawia pojedynczy obiekt na mapie."
  },
  {
    "id": "R01_MIE_08",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do tematów.",
    "options": null,
    "items": [
      "legenda",
      "tytuł",
      "nitka",
      "podziałka liniowa",
      "poziomica",
      "wysokość względna",
      "kompas",
      "obiekty w terenie"
    ],
    "categories": [
      "elementy mapy",
      "pomiar odległości",
      "ukształtowanie terenu",
      "orientowanie mapy"
    ],
    "answer": {
      "elementy mapy": [
        "legenda",
        "tytuł"
      ],
      "pomiar odległości": [
        "nitka",
        "podziałka liniowa"
      ],
      "ukształtowanie terenu": [
        "poziomica",
        "wysokość względna"
      ],
      "orientowanie mapy": [
        "kompas",
        "obiekty w terenie"
      ]
    },
    "explanation": "Pojęcia z rozdziału można pogrupować według tego, czy dotyczą elementów mapy, pomiaru odległości, ukształtowania terenu czy orientowania mapy."
  },
  {
    "id": "R01_MIE_09",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: niziny, wyżyny, góry, przystanki autobusowe.",
    "options": null,
    "answer": "przystanki autobusowe",
    "explanation": "Niziny, wyżyny i góry to formy ukształtowania powierzchni, a przystanki autobusowe są elementami zagospodarowania lub komunikacji."
  },
  {
    "id": "R01_MIE_10",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Uczeń chce sprawdzić, czy droga na stok jest łagodna. Na mapie widzi, że poziomice są tam daleko od siebie. Co powinien wnioskować?",
    "options": [
      "stok jest łagodny",
      "stok jest bardzo stromy",
      "to na pewno depresja",
      "nie da się tego ocenić z poziomic",
      "teren leży poniżej poziomu morza",
      "to znak liniowy drogi krajowej"
    ],
    "answer": 0,
    "image": "/img/r01_poziomice_wzniesienie.png",
    "explanation": "Tam, gdzie poziomice są daleko od siebie, teren jest nachylony łagodnie."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na mapie poziomicowej punkt A leży dokładnie na poziomicy 450 m n.p.m., a punkt B między poziomicami 350 i 400 m n.p.m. Którą informację można podać najdokładniej?",
    "options": [
      "punkt A ma 450 m n.p.m.",
      "punkt B ma dokładnie 375 m n.p.m.",
      "punkt B ma dokładnie 400 m n.p.m.",
      "oba punkty mają tę samą wysokość",
      "punkt A leży poniżej poziomu morza",
      "nie można podać żadnej wysokości"
    ],
    "answer": 0,
    "explanation": "Punkt leżący na poziomicy ma wysokość równą wartości tej poziomicy, a punkt między poziomicami ma tylko wysokość przybliżoną."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co oznacza odcinek wsteczny podziałki liniowej?",
    "options": [
      "część podziałki po lewej stronie zera służącą do dokładniejszego odczytu",
      "odcinek pokazujący wyłącznie kierunek północny",
      "symbol drogi gruntowej",
      "miejsce na tytuł mapy",
      "kolor oznaczający depresję",
      "najwyższą poziomicę na mapie"
    ],
    "answer": 0,
    "image": "/img/r01_podzialka_liniowa.png",
    "explanation": "Odcinek wsteczny jest podzielony na mniejsze części i umożliwia dokładniejsze odczytywanie odległości."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W skali 1:250 000 odcinek 4 cm na mapie odpowiada w terenie __________ km.",
    "options": null,
    "answer": [
      "10"
    ],
    "altAnswers": [
      [
        "10",
        "10 km",
        "dziesięć",
        "dziesięć kilometrów"
      ]
    ],
    "explanation": "W skali 1:250 000 jeden centymetr odpowiada 2,5 km, więc 4 cm odpowiadają 10 km."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na mapie hipsometrycznej poziomice nie muszą być opisane, ponieważ wysokości można odczytywać ze skali barw w legendzie.",
    "options": null,
    "answer": true,
    "image": "/img/r01_barwy_hipsometryczne.png",
    "explanation": "Skala barw pomaga odczytywać zakresy wysokości na mapie hipsometrycznej."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z typem znaku lub elementu mapy.",
    "options": null,
    "left": [
      "linia kolejowa",
      "cmentarz jako obszar",
      "urząd pocztowy",
      "1 cm - 100 m",
      "nazwa przedstawionego obszaru"
    ],
    "right": [
      "tytuł",
      "znak punktowy",
      "skala mianowana",
      "znak liniowy",
      "znak powierzchniowy"
    ],
    "answer": {
      "linia kolejowa": "znak liniowy",
      "cmentarz jako obszar": "znak powierzchniowy",
      "urząd pocztowy": "znak punktowy",
      "1 cm - 100 m": "skala mianowana",
      "nazwa przedstawionego obszaru": "tytuł"
    },
    "explanation": "Ten zestaw wymaga odróżnienia znaków kartograficznych od elementów mapy i sposobów przedstawiania skali."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Mapa przedstawia kotlinę i dolinę. W obu przypadkach wartości poziomic maleją ku niższemu miejscu. Co najbardziej pomaga odróżnić kotlinę od doliny?",
    "options": [
      "układ poziomic wokół dna oraz obecność rzeki w dolinie",
      "sam kolor tytułu mapy",
      "liczba liter w nazwie formy terenu",
      "brak legendy",
      "skala mianowana",
      "wyłącznie wysokość 0 m n.p.m."
    ],
    "answer": 0,
    "image": "/img/r01_poziomice_wzniesienie.png",
    "explanation": "W kotlinie poziomice otaczają dno niemal ze wszystkich stron, a w dolinie przebiegają prawie równolegle do rzeki."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne wnioski wynikające z porównania planu miasta i mapy.",
    "options": [
      "Plan miasta przedstawia zwykle niewielki obszar.",
      "Na planie miasta można znaleźć sieć ulic i ich nazwy.",
      "Mapa może przedstawiać dużą część powierzchni Ziemi.",
      "Plan miasta zawsze pokazuje wyłącznie ukształtowanie powierzchni.",
      "Mapa turystyczna nie ma legendy."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Plan obejmuje zwykle niewielki obszar i pokazuje dużo szczegółów ulicznych, a mapa może przedstawiać większy obszar."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj czynności do właściwego sposobu orientowania mapy.",
    "options": null,
    "items": [
      "przyłóż kompas do krawędzi ramki mapy",
      "odczekaj, aż igła magnetyczna wskaże północ",
      "odszukaj samotne drzewo lub most w terenie",
      "odnajdź te same obiekty na mapie",
      "obracaj mapę, aż kierunki do obiektów się pokryją"
    ],
    "categories": [
      "za pomocą kompasu",
      "za pomocą obiektów w terenie"
    ],
    "answer": {
      "za pomocą kompasu": [
        "przyłóż kompas do krawędzi ramki mapy",
        "odczekaj, aż igła magnetyczna wskaże północ"
      ],
      "za pomocą obiektów w terenie": [
        "odszukaj samotne drzewo lub most w terenie",
        "odnajdź te same obiekty na mapie",
        "obracaj mapę, aż kierunki do obiektów się pokryją"
      ]
    },
    "image": "/img/r01_orientowanie_mapy.png",
    "explanation": "Mapę można orientować kompasem albo przez porównanie kierunków do obiektów w terenie i na mapie."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zakresy wysokości od najniższego do najwyższego według opisu barw hipsometrycznych.",
    "options": null,
    "items": [
      "góry powyżej 500 m n.p.m.",
      "niziny od 0 do 300 m n.p.m.",
      "depresje poniżej 0 m n.p.m.",
      "wyżyny powyżej 300 m n.p.m."
    ],
    "answer": [
      "depresje poniżej 0 m n.p.m.",
      "niziny od 0 do 300 m n.p.m.",
      "wyżyny powyżej 300 m n.p.m.",
      "góry powyżej 500 m n.p.m."
    ],
    "explanation": "Depresje leżą poniżej 0 m n.p.m., potem są niziny 0-300 m, wyżyny powyżej 300 m i góry powyżej 500 m n.p.m."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: 1:10 000, 1 cm - 100 m, podziałka liniowa, poziomica 100 m.",
    "options": null,
    "answer": "poziomica 100 m",
    "explanation": "Trzy pierwsze elementy są sposobami przedstawiania skali, a poziomica 100 m dotyczy wysokości terenu."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Mapa Polski",
  "icon": "🗺️",
  "sectionOrder": [
    "Mapa i skala",
    "Odległości na mapie i w terenie",
    "Ukształtowanie powierzchni na mapach",
    "Czytamy mapę najbliższej okolicy",
    "Powtórka mieszana",
    "Super trudne"
  ],
  "sectionIcons": {
    "Mapa i skala": "🗺️",
    "Odległości na mapie i w terenie": "📏",
    "Ukształtowanie powierzchni na mapach": "⛰️",
    "Czytamy mapę najbliższej okolicy": "🧭",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
