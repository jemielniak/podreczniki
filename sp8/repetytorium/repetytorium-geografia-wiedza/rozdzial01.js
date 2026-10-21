// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MAP  = Mapa i skala
//   ORI  = Rodzaje map i orientacja
//   RZE  = Rzeźba i wysokości terenu
//   WBR  = Krajobraz Polski i pobrzeża
//   NIZ  = Pojezierza, niziny i Warszawa
//   GOR  = Wyżyny i góry Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_MAP_01",
    "section": "Mapa i skala",
    "type": "single_choice",
    "prompt": "Który element objaśnia znaczenie znaków umownych użytych na mapie?",
    "options": [
      "Tytuł",
      "Legenda",
      "Skala liczbowa",
      "Siatka planu",
      "Podziałka liniowa",
      "Dane wydawnicze"
    ],
    "answer": 1,
    "explanation": "Legenda wyjaśnia symbole kartograficzne, dzięki czemu można odczytywać treść mapy."
  },
  {
    "id": "R01_MAP_02",
    "section": "Mapa i skala",
    "type": "multi_select",
    "prompt": "Wybierz podstawowe elementy, które powinna zawierać mapa.",
    "options": [
      "Tytuł",
      "Skala",
      "Fotografia satelitarna",
      "Legenda",
      "Elementy treści",
      "Prognoza pogody"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Każda mapa ma tytuł, treść, skalę i legendę. Nie musi zawierać fotografii ani opisu pogody."
  },
  {
    "id": "R01_MAP_03",
    "section": "Mapa i skala",
    "type": "true_false",
    "prompt": "W skali 1:25 000 jeden centymetr odpowiada 250 metrom w terenie.",
    "options": null,
    "answer": true,
    "explanation": "25 000 cm to 250 m, dlatego 1 cm na mapie odpowiada 250 m w terenie."
  },
  {
    "id": "R01_MAP_04",
    "section": "Mapa i skala",
    "type": "fill_in",
    "prompt": "Skala liczbowa 1:200 000 odpowiada skali mianowanej 1 cm – __________ km.",
    "options": null,
    "answer": [
      "2"
    ],
    "altAnswers": [
      [
        "2",
        "2,0",
        "2.0"
      ]
    ],
    "explanation": "200 000 cm to 2000 m, czyli 2 km; stąd 1 cm na mapie oznacza 2 km w terenie."
  },
  {
    "id": "R01_MAP_05",
    "section": "Mapa i skala",
    "type": "riddle",
    "prompt": "Jak nazywa się określenie stopnia zmniejszenia odległości na mapie względem terenu?",
    "options": null,
    "answer": "skala mapy",
    "altAnswers": [
      "skala mapy",
      "skala"
    ],
    "explanation": "Skala pokazuje, ile razy odległości w rzeczywistości zostały zmniejszone na mapie."
  },
  {
    "id": "R01_MAP_06",
    "section": "Mapa i skala",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do podstawowych elementów mapy: tytuł, legenda, skala, gumka do mazania.",
    "options": null,
    "answer": "gumka do mazania",
    "explanation": "Tytuł, legenda i skala należą do elementów mapy; gumka to przyrząd do pracy, a nie część mapy."
  },
  {
    "id": "R01_MAP_07",
    "section": "Mapa i skala",
    "type": "scenario",
    "prompt": "Uczeń mierzy nitką krętą trasę przedstawioną w skali 1:100 000. Nitka ma po wyprostowaniu długość 3 cm. Jaką odległość w terenie przedstawia?",
    "options": [
      "300 m",
      "30 km",
      "3 km",
      "300 km",
      "1 km",
      "3 m"
    ],
    "answer": 2,
    "explanation": "W skali 1:100 000 każdy centymetr odpowiada 1 km, więc 3 cm oznaczają 3 km.",
    "image": "r01_pomiar_nitka_linijka.jpg"
  },
  {
    "id": "R01_MAP_08",
    "section": "Mapa i skala",
    "type": "match",
    "prompt": "Połącz rodzaj skali ze sposobem jej zapisu.",
    "options": null,
    "left": [
      "Skala liczbowa",
      "Skala mianowana",
      "Skala liniowa"
    ],
    "right": [
      "Graficzna podziałka z odcinkami",
      "1:25 000",
      "1 cm – 250 m"
    ],
    "answer": {
      "Skala liczbowa": "1:25 000",
      "Skala mianowana": "1 cm – 250 m",
      "Skala liniowa": "Graficzna podziałka z odcinkami"
    },
    "explanation": "Skalę można zapisać jako stosunek liczbowy, odległość przypisaną jednostce lub graficzną podziałkę."
  },
  {
    "id": "R01_MAP_09",
    "section": "Mapa i skala",
    "type": "sequence",
    "prompt": "Ułóż kolejne zapisy przeliczenia skali 1:200 000 na skalę mianowaną.",
    "options": null,
    "items": [
      "1 cm – 2 km",
      "1 cm – 200 000 cm",
      "1 cm – 2000 m"
    ],
    "answer": [
      "1 cm – 200 000 cm",
      "1 cm – 2000 m",
      "1 cm – 2 km"
    ],
    "explanation": "Najpierw zapisuje się odległość w centymetrach, następnie w metrach, a na końcu w kilometrach."
  },
  {
    "id": "R01_MAP_10",
    "section": "Mapa i skala",
    "type": "single_choice",
    "prompt": "Która z poniższych skal jest największa?",
    "options": [
      "1:25 000",
      "1:100 000",
      "1:2 500 000",
      "1:1 000 000",
      "1:200 000",
      "1:500 000"
    ],
    "answer": 0,
    "explanation": "Skala 1:25 000 jest większa niż 1:100 000 i 1:2 500 000, bo jej mianownik jest najmniejszy."
  },
  {
    "id": "R01_ORI_01",
    "section": "Rodzaje map i orientacja",
    "type": "single_choice",
    "prompt": "Jaki rodzaj mapy przedstawia szczegółowo jedno wybrane zjawisko, na przykład lesistość?",
    "options": [
      "Mapa tematyczna",
      "Mapa ogólnogeograficzna",
      "Globus",
      "Plan zabudowy",
      "Mapa topograficzna o pełnej treści",
      "Atlas bez map"
    ],
    "answer": 0,
    "explanation": "Mapa tematyczna skupia się na jednym zagadnieniu, a inne elementy pokazuje w uproszczeniu."
  },
  {
    "id": "R01_ORI_02",
    "section": "Rodzaje map i orientacja",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które mogą pojawiać się na mapie ogólnogeograficznej.",
    "options": [
      "Rzeźba terenu",
      "Sieć wodna",
      "Drogi",
      "Jedynie wysokość opadów",
      "Granice administracyjne",
      "Wyłącznie występowanie jednego gatunku"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Mapa ogólnogeograficzna pokazuje m.in. rzeźbę terenu, sieć wodną, drogi i granice administracyjne."
  },
  {
    "id": "R01_ORI_03",
    "section": "Rodzaje map i orientacja",
    "type": "true_false",
    "prompt": "Plan przedstawia zwykle olbrzymi obszar w małej skali i pomija większość szczegółów.",
    "options": null,
    "answer": false,
    "explanation": "Plan jest szczegółowym przedstawieniem małego fragmentu powierzchni, z niewielkim uproszczeniem treści."
  },
  {
    "id": "R01_ORI_04",
    "section": "Rodzaje map i orientacja",
    "type": "fill_in",
    "prompt": "Pola siatki pomagającej odszukiwać obiekty na planie oznacza się literami oraz __________.",
    "options": null,
    "answer": [
      "liczbami"
    ],
    "altAnswers": [
      [
        "liczbami",
        "cyframi"
      ]
    ],
    "explanation": "Poziome i pionowe linie dzielą plan na pola oznaczone literami i liczbami."
  },
  {
    "id": "R01_ORI_05",
    "section": "Rodzaje map i orientacja",
    "type": "riddle",
    "prompt": "Jak nazywa się przyrząd z igłą magnetyczną używany do wyznaczania kierunku północ–południe?",
    "options": null,
    "answer": "kompas",
    "altAnswers": [
      "kompas",
      "busola"
    ],
    "explanation": "Kompas lub busola pozwala zorientować kierunki świata i odpowiednio ustawić mapę."
  },
  {
    "id": "R01_ORI_06",
    "section": "Rodzaje map i orientacja",
    "type": "scenario",
    "prompt": "Turysta trzyma poziomo mapę i przykłada do jej bocznej ramki kompas. Co powinien następnie zrobić, aby zorientować mapę magnetycznie?",
    "options": [
      "Złożyć mapę wzdłuż przekątnej",
      "Obrócić mapę z kompasem do zgodnego ustawienia igły północ–południe",
      "Ustawić mapę pionowo pod wiatr",
      "Zmierzyć temperaturę powietrza",
      "Ułożyć kompas na środku walizki",
      "Odwrócić mapę zadrukowaną stroną do dołu"
    ],
    "answer": 1,
    "explanation": "Mapę wraz z kompasem należy obracać poziomo, aż igła ustawi się zgodnie z oznaczeniem północ–południe.",
    "image": "r01_kompas_na_drewnie.jpg"
  },
  {
    "id": "R01_ORI_07",
    "section": "Rodzaje map i orientacja",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który typowo nie jest oznaczany sygnaturą punktową: muzeum, hotel, pomnik, rzeka.",
    "options": null,
    "answer": "rzeka",
    "explanation": "Rzeka jest obiektem liniowym, a muzeum, hotel i pomnik mogą być przedstawiane sygnaturami punktowymi."
  },
  {
    "id": "R01_ORI_08",
    "section": "Rodzaje map i orientacja",
    "type": "match",
    "prompt": "Połącz metodę prezentacji na mapie z odpowiednim przykładem.",
    "options": null,
    "left": [
      "Sygnatury punktowe",
      "Sygnatury liniowe",
      "Metoda powierzchniowa"
    ],
    "right": [
      "Zwarte obszary lasów",
      "Położenie muzeów",
      "Przebieg dróg"
    ],
    "answer": {
      "Sygnatury punktowe": "Położenie muzeów",
      "Sygnatury liniowe": "Przebieg dróg",
      "Metoda powierzchniowa": "Zwarte obszary lasów"
    },
    "explanation": "Punkty pokazują pojedyncze obiekty, linie wyznaczają przebieg elementów, a powierzchnie oznaczają rozległe obszary."
  },
  {
    "id": "R01_ORI_09",
    "section": "Rodzaje map i orientacja",
    "type": "sort",
    "prompt": "Przyporządkuj rodzaje opracowań do ich głównych zastosowań.",
    "options": null,
    "items": [
      "Mapa samochodowa",
      "Mapa projektowa",
      "Szlaki i atrakcje dla turystów",
      "Opracowanie w bardzo dużej skali do projektu",
      "Mapa turystyczna",
      "Trasy dla kierowców"
    ],
    "categories": [
      "Turystyka",
      "Budownictwo",
      "Komunikacja"
    ],
    "answer": {
      "Turystyka": [
        "Mapa turystyczna",
        "Szlaki i atrakcje dla turystów"
      ],
      "Budownictwo": [
        "Mapa projektowa",
        "Opracowanie w bardzo dużej skali do projektu"
      ],
      "Komunikacja": [
        "Mapa samochodowa",
        "Trasy dla kierowców"
      ]
    },
    "explanation": "Mapy turystyczne pomagają podróżnym, projektowe służą w budownictwie, a samochodowe w komunikacji."
  },
  {
    "id": "R01_ORI_10",
    "section": "Rodzaje map i orientacja",
    "type": "sequence",
    "prompt": "Ułóż kroki orientacji topograficznej od pierwszego do ostatniego.",
    "options": null,
    "items": [
      "Obróć mapę zgodnie z kierunkami do obiektów",
      "Znajdź trzy charakterystyczne obiekty w terenie",
      "Odszukaj te obiekty na mapie",
      "Znajdź na mapie swoje położenie"
    ],
    "answer": [
      "Znajdź na mapie swoje położenie",
      "Znajdź trzy charakterystyczne obiekty w terenie",
      "Odszukaj te obiekty na mapie",
      "Obróć mapę zgodnie z kierunkami do obiektów"
    ],
    "explanation": "Najpierw trzeba ustalić własną pozycję, później punkty orientacyjne i ich odpowiedniki na mapie, a dopiero na końcu ją obrócić."
  },
  {
    "id": "R01_RZE_01",
    "section": "Rzeźba i wysokości terenu",
    "type": "single_choice",
    "prompt": "Jak nazywają się linie łączące na mapie punkty o tej samej wysokości bezwzględnej?",
    "options": [
      "Południki",
      "Granice administracyjne",
      "Równoleżniki",
      "Poziomice",
      "Szlaki turystyczne",
      "Izotermy"
    ],
    "answer": 3,
    "explanation": "Poziomice, czyli izohipsy, łączą miejsca leżące na tej samej wysokości względem poziomu morza."
  },
  {
    "id": "R01_RZE_02",
    "section": "Rzeźba i wysokości terenu",
    "type": "multi_select",
    "prompt": "Wskaż wypukłe formy terenu.",
    "options": [
      "Pagórek",
      "Dolina",
      "Wzgórze",
      "Kotlina",
      "Góra"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do wypukłych form należą m.in. pagórki, wzgórza i góry. Doliny i kotliny są wklęsłe."
  },
  {
    "id": "R01_RZE_03",
    "section": "Rzeźba i wysokości terenu",
    "type": "true_false",
    "prompt": "Gdy poziomice leżą blisko siebie, oznacza to zwykle łagodny stok.",
    "options": null,
    "answer": false,
    "explanation": "Duże zagęszczenie poziomic świadczy o szybkiej zmianie wysokości na niewielkiej odległości."
  },
  {
    "id": "R01_RZE_04",
    "section": "Rzeźba i wysokości terenu",
    "type": "fill_in",
    "prompt": "Między wysokościami 868 m n.p.m. i 520 m n.p.m. różnica wysokości wynosi __________ m.",
    "options": null,
    "answer": [
      "348"
    ],
    "altAnswers": [
      [
        "348",
        "348 m"
      ]
    ],
    "explanation": "Wysokość względną oblicza się przez odjęcie wysokości niższego punktu od wysokości wyższego: 868 − 520 = 348 m."
  },
  {
    "id": "R01_RZE_05",
    "section": "Rzeźba i wysokości terenu",
    "type": "riddle",
    "prompt": "Jak nazywa się teren położony poniżej poziomu morza?",
    "options": null,
    "answer": "depresja",
    "altAnswers": [
      "depresja",
      "teren depresyjny"
    ],
    "explanation": "Depresja to obszar lądu leżący poniżej 0 m n.p.m.; w Polsce występuje m.in. na Żuławach Wiślanych."
  },
  {
    "id": "R01_RZE_06",
    "section": "Rzeźba i wysokości terenu",
    "type": "odd_one_out",
    "prompt": "Wskaż formę wklęsłą spośród pozostałych form wypukłych: pagórek, wzgórze, góra, kotlina.",
    "options": null,
    "answer": "kotlina",
    "explanation": "Kotlina jest zagłębieniem, natomiast pagórek, wzgórze i góra są formami wypukłymi."
  },
  {
    "id": "R01_RZE_07",
    "section": "Rzeźba i wysokości terenu",
    "type": "scenario",
    "prompt": "Dwie osoby wspinają się na różne stoki. Jeden jest krótki i bardzo stromy, drugi łagodnie wznosi się przez dłuższy odcinek. Na którym stoku poziomice będą bardziej zagęszczone?",
    "options": [
      "Na stoku bardzo stromym",
      "Na stoku łagodnym",
      "Jednakowo na obu stokach",
      "Zagęszczenie zależy wyłącznie od długości dnia"
    ],
    "answer": 0,
    "explanation": "Na stoku stromym zmiana wysokości zachodzi szybciej, dlatego linie jednakowych wysokości leżą bliżej siebie.",
    "image": "r01_zbocze_strome_lagodne.jpg"
  },
  {
    "id": "R01_RZE_08",
    "section": "Rzeźba i wysokości terenu",
    "type": "match",
    "prompt": "Dopasuj barwę hipsometryczną do rodzaju wysokości terenu.",
    "options": null,
    "left": [
      "Zielona",
      "Żółta",
      "Czerwona"
    ],
    "right": [
      "Najwyższe wysokości",
      "Najniższe wysokości",
      "Wysokości pośrednie"
    ],
    "answer": {
      "Zielona": "Najniższe wysokości",
      "Żółta": "Wysokości pośrednie",
      "Czerwona": "Najwyższe wysokości"
    },
    "explanation": "W umownych barwach hipsometrycznych zieleń odpowiada nizinom, żółć wyżynom, a czerwień najwyższym partiom gór."
  },
  {
    "id": "R01_RZE_09",
    "section": "Rzeźba i wysokości terenu",
    "type": "sort",
    "prompt": "Przyporządkuj opis do formy terenu.",
    "options": null,
    "items": [
      "Dolina",
      "Wzgórze",
      "Kotlina",
      "Pagórek",
      "Góra",
      "Zagłębienie terenu"
    ],
    "categories": [
      "Formy wypukłe",
      "Formy wklęsłe"
    ],
    "answer": {
      "Formy wypukłe": [
        "Wzgórze",
        "Pagórek",
        "Góra"
      ],
      "Formy wklęsłe": [
        "Kotlina",
        "Dolina",
        "Zagłębienie terenu"
      ]
    },
    "explanation": "Formy wypukłe wznoszą się nad otoczeniem, a wklęsłe stanowią obniżenia powierzchni."
  },
  {
    "id": "R01_RZE_10",
    "section": "Rzeźba i wysokości terenu",
    "type": "sequence",
    "prompt": "Ułóż trzy typy rzeźby nizinnej od najmniej do najbardziej urozmaiconej.",
    "options": null,
    "items": [
      "Nizina pagórkowata",
      "Nizina płaska",
      "Nizina falista"
    ],
    "answer": [
      "Nizina płaska",
      "Nizina falista",
      "Nizina pagórkowata"
    ],
    "explanation": "Równiny płaskie mają najmniej urozmaiconą rzeźbę, faliste niewielkie wzniesienia, a pagórkowate największe wysokości względne."
  },
  {
    "id": "R01_WBR_01",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie krajobrazu?",
    "options": [
      "Tylko rośliny danego miejsca",
      "Wygląd powierzchni Ziemi wynikający z przyrody i działalności człowieka",
      "Wyłącznie zabytki",
      "Jedynie wzniesienia górskie",
      "Tylko pogoda w dniu obserwacji",
      "Lista nazw geograficznych"
    ],
    "answer": 1,
    "explanation": "Krajobraz to wygląd powierzchni Ziemi, na który wpływają elementy przyrody i działalność człowieka."
  },
  {
    "id": "R01_WBR_02",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "multi_select",
    "prompt": "Wskaż naturalne składniki krajobrazu.",
    "options": [
      "Wody powierzchniowe",
      "Skały podłoża",
      "Fabryki",
      "Roślinność",
      "Rzeźba terenu",
      "Linie kolejowe"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "W krajobrazie uwzględnia się rzeźbę terenu, skały podłoża, wody oraz roślinność; drogi i fabryki są wytworami ludzi."
  },
  {
    "id": "R01_WBR_03",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "true_false",
    "prompt": "Sześć głównych pasów krajobrazowych Polski ma przebieg zbliżony do równoleżnikowego.",
    "options": null,
    "answer": true,
    "explanation": "Pobrzeża, pojezierza, niziny, wyżyny, kotliny i góry układają się w Polsce pasowo, niemal równoleżnikowo."
  },
  {
    "id": "R01_WBR_04",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "fill_in",
    "prompt": "W Polsce wyróżnia się __________ głównych pasów krajobrazowych.",
    "options": null,
    "answer": [
      "sześć"
    ],
    "altAnswers": [
      [
        "sześć",
        "6"
      ]
    ],
    "explanation": "W Polsce wyróżnia się sześć pasów krajobrazowych: pobrzeża, pojezierza, Niziny Środkowopolskie, Wyżyny Polskie, Kotliny Podkarpackie i góry."
  },
  {
    "id": "R01_WBR_05",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "riddle",
    "prompt": "Jaka siła przyrody usypuje nadmorskie wydmy z niesionego piasku?",
    "options": null,
    "answer": "wiatr",
    "altAnswers": [
      "wiatr"
    ],
    "explanation": "Wiatr przenosi ziarna piasku i formuje z nich nadmorskie wydmy, m.in. na Wybrzeżu Słowińskim."
  },
  {
    "id": "R01_WBR_06",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "odd_one_out",
    "prompt": "Wskaż formę niezwiązaną typowo z krajobrazem nadmorskim Wybrzeża Słowińskiego: plaża, wydma, klif, stalagmit.",
    "options": null,
    "answer": "stalagmit",
    "explanation": "Stalagmit jest naciekiem jaskiniowym, natomiast plaża, wydma i klif to charakterystyczne formy wybrzeża.",
    "image": "r01_wydmy_nadmorskie.jpg"
  },
  {
    "id": "R01_WBR_07",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "scenario",
    "prompt": "Podczas sztormu fale uderzają w podstawę wysokiego brzegu, podcinając go i powodując osuwanie materiału skalnego. Jaki proces zachodzi?",
    "options": [
      "Powstawanie moreny czołowej",
      "Tworzenie gleby lessowej",
      "Niszczenie klifu przez fale morskie",
      "Krasowienie wapienia",
      "Powstawanie piargów",
      "Osadzanie lodowcowych głazów"
    ],
    "answer": 2,
    "explanation": "Silne fale morskie niszczą podstawę klifu, powodując jego cofanie się; podcięcie to nisza abrazyjna.",
    "image": "r01_klif_fale.jpg"
  },
  {
    "id": "R01_WBR_08",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "match",
    "prompt": "Połącz czynnik z jego rolą w krajobrazie Wybrzeża Słowińskiego.",
    "options": null,
    "left": [
      "Wiatr",
      "Fale morskie",
      "Prądy przybrzeżne"
    ],
    "right": [
      "Tworzenie mierzei i jezior przybrzeżnych",
      "Podcinanie klifów",
      "Usypywanie wydm"
    ],
    "answer": {
      "Wiatr": "Usypywanie wydm",
      "Fale morskie": "Podcinanie klifów",
      "Prądy przybrzeżne": "Tworzenie mierzei i jezior przybrzeżnych"
    },
    "explanation": "Wiatr buduje wydmy, fale niszczą wysokie brzegi, a transport piasku wzdłuż brzegu może odcinać zatoki od morza."
  },
  {
    "id": "R01_WBR_09",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "sort",
    "prompt": "Przyporządkuj elementy wybrzeża do procesów, które je kształtują.",
    "options": null,
    "items": [
      "Kosa",
      "Nisza abrazyjna",
      "Wydma ruchoma",
      "Mierzeja",
      "Piasek przenoszony przez wiatr",
      "Podcinanie klifu"
    ],
    "categories": [
      "Procesy związane z wiatrem",
      "Procesy związane z falami",
      "Procesy związane z prądami przybrzeżnymi"
    ],
    "answer": {
      "Procesy związane z wiatrem": [
        "Wydma ruchoma",
        "Piasek przenoszony przez wiatr"
      ],
      "Procesy związane z falami": [
        "Nisza abrazyjna",
        "Podcinanie klifu"
      ],
      "Procesy związane z prądami przybrzeżnymi": [
        "Kosa",
        "Mierzeja"
      ]
    },
    "explanation": "Na wybrzeże oddziałują wiatr, fale oraz prądy przybrzeżne."
  },
  {
    "id": "R01_WBR_10",
    "section": "Krajobraz Polski i pobrzeża",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania jeziora przybrzeżnego w odpowiedniej kolejności.",
    "options": null,
    "items": [
      "Zatoka zostaje odcięta od morza i tworzy się jezioro",
      "Powstaje kosa z transportowanego piasku",
      "Prądy przybrzeżne przenoszą piasek",
      "Kosa wydłuża się w mierzeję"
    ],
    "answer": [
      "Prądy przybrzeżne przenoszą piasek",
      "Powstaje kosa z transportowanego piasku",
      "Kosa wydłuża się w mierzeję",
      "Zatoka zostaje odcięta od morza i tworzy się jezioro"
    ],
    "explanation": "Transport piasku przez prądy przybrzeżne prowadzi do budowy kosy, mierzei, a następnie oddzielenia zbiornika od morza."
  },
  {
    "id": "R01_NIZ_01",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "single_choice",
    "prompt": "Które jezioro należy do Krainy Wielkich Jezior Mazurskich?",
    "options": [
      "Śniardwy",
      "Łebsko",
      "Gardno",
      "Jamno",
      "Wicko",
      "Morskie Oko"
    ],
    "answer": 0,
    "explanation": "Śniardwy, Mamry i Niegocin są jeziorami Pojezierza Mazurskiego.",
    "image": "r01_mazurskie_jeziora.jpg"
  },
  {
    "id": "R01_NIZ_02",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "multi_select",
    "prompt": "Wskaż cechy krajobrazu młodoglacjalnego Pojezierza Mazurskiego.",
    "options": [
      "Liczne jeziora polodowcowe",
      "Wzniesienia morenowe",
      "Powszechny brak jezior",
      "Ślady ostatniego zlodowacenia",
      "Miejscami torfowiska",
      "Rozległe klify morskie"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Ostatnie zlodowacenie pozostawiło na pojezierzach jeziora polodowcowe, wzgórza morenowe i urozmaiconą rzeźbę."
  },
  {
    "id": "R01_NIZ_03",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "true_false",
    "prompt": "Nizina Mazowiecka ma krajobraz młodoglacjalny, a ślady ostatniego zlodowacenia są w nim wyraźniejsze niż na Mazurach.",
    "options": null,
    "answer": false,
    "explanation": "Nizinę Mazowiecką cechuje rzeźba staroglacjalna z rozległymi, niewysokimi wzniesieniami i brakiem typowych jezior polodowcowych."
  },
  {
    "id": "R01_NIZ_04",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "fill_in",
    "prompt": "Przez Nizinę Mazowiecką przepływa rzeka __________, do której uchodzą między innymi Narew i Pilica.",
    "options": null,
    "answer": [
      "Wisła"
    ],
    "altAnswers": [
      [
        "Wisła",
        "Wisła (rzeka)"
      ]
    ],
    "explanation": "Na Nizinie Mazowieckiej główną rzeką jest Wisła, do której wpływają m.in. Narew, Pilica i Bzura."
  },
  {
    "id": "R01_NIZ_05",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "riddle",
    "prompt": "Jakie zwierzę jest symbolem Kampinoskiego Parku Narodowego?",
    "options": null,
    "answer": "łoś",
    "altAnswers": [
      "łoś",
      "los"
    ],
    "explanation": "Łoś jest jednym z symboli Kampinoskiego Parku Narodowego."
  },
  {
    "id": "R01_NIZ_06",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "odd_one_out",
    "prompt": "Wskaż jezioro wśród nazw rzek związanych z Niziną Mazowiecką: Wisła, Narew, Pilica, Mamry.",
    "options": null,
    "answer": "Mamry",
    "explanation": "Mamry to jezioro na Mazurach; Wisła, Narew i Pilica to rzeki.",
    "image": "r01_mazurskie_jeziora.jpg"
  },
  {
    "id": "R01_NIZ_07",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "scenario",
    "prompt": "Gospodarstwo w południowej części Niziny Mazowieckiej dostarcza do Warszawy duże ilości owoców. Jaka działalność rolnicza jest tam szczególnie popularna?",
    "options": [
      "Wydobycie węgla",
      "Sadownictwo",
      "Produkcja soli morskiej",
      "Uprawa ryżu",
      "Połów ryb morskich",
      "Hodowla reniferów"
    ],
    "answer": 1,
    "explanation": "Na Nizinie Mazowieckiej, zwłaszcza na południu, silnie rozwinęło się sadownictwo i warzywnictwo.",
    "image": "r01_sad_mazowiecki.jpg"
  },
  {
    "id": "R01_NIZ_08",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "match",
    "prompt": "Połącz obszar z charakterystycznym obiektem lub zjawiskiem.",
    "options": null,
    "left": [
      "Pojezierze Mazurskie",
      "Nizina Mazowiecka",
      "Warszawa"
    ],
    "right": [
      "Pałac Kultury i Nauki",
      "Jezioro Śniardwy",
      "Kampinoski Park Narodowy"
    ],
    "answer": {
      "Pojezierze Mazurskie": "Jezioro Śniardwy",
      "Nizina Mazowiecka": "Kampinoski Park Narodowy",
      "Warszawa": "Pałac Kultury i Nauki"
    },
    "explanation": "Śniardwy leżą na Mazurach, Kampinoski Park Narodowy na Nizinie Mazowieckiej, a Pałac Kultury i Nauki w Warszawie.",
    "image": "r01_warszawa_sylwetka.jpg"
  },
  {
    "id": "R01_NIZ_09",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "sort",
    "prompt": "Przyporządkuj elementy krajobrazu do odpowiadających im obszarów.",
    "options": null,
    "items": [
      "Metro",
      "Sporty żeglarskie",
      "Krajobraz staroglacjalny",
      "Wielkie Jeziora Mazurskie",
      "Gęsta sieć ulic",
      "Wydmy śródlądowe Kampinosu",
      "Wysokie budynki i drapacze chmur",
      "Uprawa sadownicza",
      "Krajobraz młodoglacjalny"
    ],
    "categories": [
      "Pojezierze Mazurskie",
      "Nizina Mazowiecka",
      "Warszawa"
    ],
    "answer": {
      "Pojezierze Mazurskie": [
        "Wielkie Jeziora Mazurskie",
        "Sporty żeglarskie",
        "Krajobraz młodoglacjalny"
      ],
      "Nizina Mazowiecka": [
        "Krajobraz staroglacjalny",
        "Uprawa sadownicza",
        "Wydmy śródlądowe Kampinosu"
      ],
      "Warszawa": [
        "Wysokie budynki i drapacze chmur",
        "Metro",
        "Gęsta sieć ulic"
      ]
    },
    "explanation": "Mazury kojarzą się z jeziorami polodowcowymi, Mazowsze z równinami i rolnictwem, a Warszawa z krajobrazem wielkomiejskim."
  },
  {
    "id": "R01_NIZ_10",
    "section": "Pojezierza, niziny i Warszawa",
    "type": "sequence",
    "prompt": "Ułóż główne pasy krajobrazowe Polski w kolejności od północy ku południu.",
    "options": null,
    "items": [
      "Wyżyny Polskie",
      "Pobrzeża",
      "Góry",
      "Niziny Środkowopolskie",
      "Kotliny Podkarpackie",
      "Pojezierza"
    ],
    "answer": [
      "Pobrzeża",
      "Pojezierza",
      "Niziny Środkowopolskie",
      "Wyżyny Polskie",
      "Kotliny Podkarpackie",
      "Góry"
    ],
    "explanation": "Polska ma sześć niemal równoleżnikowych pasów: pobrzeża, pojezierza, niziny środkowopolskie, wyżyny, kotliny i góry."
  },
  {
    "id": "R01_GOR_01",
    "section": "Wyżyny i góry Polski",
    "type": "single_choice",
    "prompt": "Jaki surowiec był podstawą rozwoju przemysłowego Górnego Śląska?",
    "options": [
      "Ropa naftowa",
      "Sól kamienna",
      "Węgiel kamienny",
      "Torf",
      "Bursztyn",
      "Kreda"
    ],
    "answer": 2,
    "explanation": "Od końca XVIII wieku na Górnym Śląsku wydobywano węgiel kamienny, na którym oparto rozwój fabryk.",
    "image": "r01_slask_halda_kopalnia.jpg"
  },
  {
    "id": "R01_GOR_02",
    "section": "Wyżyny i góry Polski",
    "type": "multi_select",
    "prompt": "Wskaż atrakcje turystyczne Wyżyny Śląskiej.",
    "options": [
      "Pustynia Błędowska",
      "Morskie Oko",
      "Spodek w Katowicach",
      "Zamek w Pszczynie",
      "Jezioro Śniardwy",
      "Sztolnia Czarnego Pstrąga"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Do atrakcji Wyżyny Śląskiej należą Pustynia Błędowska, Spodek w Katowicach, zamek w Pszczynie i Sztolnia Czarnego Pstrąga."
  },
  {
    "id": "R01_GOR_03",
    "section": "Wyżyny i góry Polski",
    "type": "true_false",
    "prompt": "Na Wyżynie Lubelskiej lessy sprzyjają powstawaniu żyznych gleb, dzięki którym rozwinęło się rolnictwo.",
    "options": null,
    "answer": true,
    "explanation": "Na lessach powstają m.in. czarnoziemy oraz żyzne gleby brunatne i płowe, sprzyjające uprawie pszenicy i buraków cukrowych."
  },
  {
    "id": "R01_GOR_04",
    "section": "Wyżyny i góry Polski",
    "type": "fill_in",
    "prompt": "Naciek jaskiniowy rosnący od stropu ku dołowi nazywa się __________.",
    "options": null,
    "answer": [
      "stalaktytem"
    ],
    "altAnswers": [
      [
        "stalaktytem",
        "stalaktyt"
      ]
    ],
    "explanation": "Stalaktyt zwisa ze stropu jaskini; stalagmit rośnie od jej dna ku górze."
  },
  {
    "id": "R01_GOR_05",
    "section": "Wyżyny i góry Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się naciek jaskiniowy powstający z połączenia stalaktytu i stalagmitu?",
    "options": null,
    "answer": "stalagnat",
    "altAnswers": [
      "stalagnat",
      "stalagnaty"
    ],
    "explanation": "Po połączeniu nacieku zwisającego ze stropu i rosnącego od dna powstaje stalagnat."
  },
  {
    "id": "R01_GOR_06",
    "section": "Wyżyny i góry Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest formą naciekową jaskini krasowej: stalaktyt, stalagmit, stalagnat, hałda.",
    "options": null,
    "answer": "hałda",
    "explanation": "Hałda to usypisko odpadów górniczych; pozostałe nazwy oznaczają nacieki jaskiniowe.",
    "image": "r01_nacieki_jaskiniowe.jpg"
  },
  {
    "id": "R01_GOR_07",
    "section": "Wyżyny i góry Polski",
    "type": "scenario",
    "prompt": "Po ulewnych deszczach woda rozcina podatny na erozję less, tworząc wąską dolinę o stromych zboczach. Jak nazywa się taka forma, typowa dla Wyżyny Lubelskiej?",
    "options": [
      "Wąwóz lessowy",
      "Mierzeja",
      "Morena czołowa",
      "Klif nadmorski",
      "Piarg",
      "Cyrk lodowcowy"
    ],
    "answer": 0,
    "explanation": "Wąwozy lessowe powstają wskutek erozji wodnej osadów lessowych; występują m.in. koło Kazimierza Dolnego.",
    "image": "r01_wawoz_lessowy.jpg"
  },
  {
    "id": "R01_GOR_08",
    "section": "Wyżyny i góry Polski",
    "type": "match",
    "prompt": "Połącz region z jego charakterystyczną cechą.",
    "options": null,
    "left": [
      "Wyżyna Śląska",
      "Wyżyna Lubelska",
      "Wyżyna Krakowsko-Częstochowska",
      "Tatry"
    ],
    "right": [
      "Alpejska rzeźba wysokogórska",
      "Wapienne ostańce i jaskinie",
      "Krajobraz miejsko-przemysłowy",
      "Wąwozy lessowe i żyzne gleby"
    ],
    "answer": {
      "Wyżyna Śląska": "Krajobraz miejsko-przemysłowy",
      "Wyżyna Lubelska": "Wąwozy lessowe i żyzne gleby",
      "Wyżyna Krakowsko-Częstochowska": "Wapienne ostańce i jaskinie",
      "Tatry": "Alpejska rzeźba wysokogórska"
    },
    "explanation": "Różnice podłoża, ukształtowania i działalności człowieka tworzą odmienne krajobrazy tych czterech regionów."
  },
  {
    "id": "R01_GOR_09",
    "section": "Wyżyny i góry Polski",
    "type": "sort",
    "prompt": "Rozdziel cechy wysokogórskiego krajobrazu Tatr Wysokich i krasowego krajobrazu Tatr Zachodnich.",
    "options": null,
    "items": [
      "Jaskinie krasowe",
      "Piargi",
      "Wapienne podłoże",
      "Żleby",
      "Granitowe ostre szczyty",
      "Lejki krasowe"
    ],
    "categories": [
      "Tatry Wysokie",
      "Tatry Zachodnie"
    ],
    "answer": {
      "Tatry Wysokie": [
        "Granitowe ostre szczyty",
        "Żleby",
        "Piargi"
      ],
      "Tatry Zachodnie": [
        "Wapienne podłoże",
        "Jaskinie krasowe",
        "Lejki krasowe"
      ]
    },
    "explanation": "Tatry Wysokie cechują granitowe, ostre formy i usypiska skalne, a Tatry Zachodnie mają liczne formy krasowe w wapieniach.",
    "image": "r01_tatry_dolina_szczyty.jpg"
  },
  {
    "id": "R01_GOR_10",
    "section": "Wyżyny i góry Polski",
    "type": "sequence",
    "prompt": "Uporządkuj piętra roślinne Tatr od najniższego do najwyższego.",
    "options": null,
    "items": [
      "Hale górskie",
      "Regiel górny",
      "Pogórze",
      "Turnie",
      "Kosodrzewina",
      "Regiel dolny"
    ],
    "answer": [
      "Pogórze",
      "Regiel dolny",
      "Regiel górny",
      "Kosodrzewina",
      "Hale górskie",
      "Turnie"
    ],
    "explanation": "Kolejne piętra to pogórze, regiel dolny, regiel górny, kosodrzewina, hale górskie i turnie.",
    "image": "r01_pietra_roslin_zdjecia.jpg"
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na mapie o skali 1:25 000 turysta zmierzył trasę o długości 6 cm. Ile metrów przejdzie w terenie, jeśli pomiar odpowiada dokładnie tej trasie?",
    "options": [
      "250 m",
      "1500 m",
      "600 m",
      "15 000 m",
      "2500 m",
      "6000 m"
    ],
    "answer": 1,
    "explanation": "Jeden centymetr odpowiada 250 m, więc 6 × 250 m = 1500 m.",
    "image": "r01_pomiar_nitka_linijka.jpg"
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zestawienia metod kartograficznych i obiektów są poprawne na mapie turystycznej okolic Włodawy?",
    "options": [
      "Sygnaturowa punktowa — muzeum",
      "Sygnaturowa liniowa — rzeka",
      "Sygnaturowa punktowa — cała powierzchnia lasu",
      "Powierzchniowa — grunty orne",
      "Powierzchniowa — przebieg drogi",
      "Sygnaturowa liniowa — granica państwa"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Sygnatury punktowe opisują pojedyncze obiekty, liniowe drogi i granice, a metoda powierzchniowa m.in. lasy i pola."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj typ rzeźby do odpowiadającego mu udziału w powierzchni lądów świata.",
    "options": null,
    "left": [
      "Niziny",
      "Wyżyny",
      "Góry"
    ],
    "right": [
      "Około 28%",
      "Około 34%",
      "Około 38%"
    ],
    "answer": {
      "Niziny": "Około 34%",
      "Wyżyny": "Około 38%",
      "Góry": "Około 28%"
    },
    "explanation": "Przy przyjętym podziale powierzchni lądowej Ziemi niziny zajmują około 34%, wyżyny 38%, a góry 28%."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Średnia wysokość Polski wynosi __________ m n.p.m.",
    "options": null,
    "answer": [
      "173"
    ],
    "altAnswers": [
      [
        "173",
        "173 m"
      ]
    ],
    "explanation": "Średnia wysokość Polski wynosi 173 m n.p.m., niemal dwa razy mniej niż średnia europejska."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przydziel pasma górskie do odpowiednich klas wysokości.",
    "options": null,
    "items": [
      "Tatry",
      "Do 1500 m n.p.m.",
      "Góry Świętokrzyskie",
      "Powyżej 1500 m n.p.m.",
      "Beskidy",
      "Do 500 m n.p.m.",
      "Sudety"
    ],
    "categories": [
      "Góry niskie",
      "Góry średnie",
      "Góry wysokie"
    ],
    "answer": {
      "Góry niskie": [
        "Góry Świętokrzyskie",
        "Do 500 m n.p.m."
      ],
      "Góry średnie": [
        "Sudety",
        "Beskidy",
        "Do 1500 m n.p.m."
      ],
      "Góry wysokie": [
        "Tatry",
        "Powyżej 1500 m n.p.m."
      ]
    },
    "explanation": "Góry Świętokrzyskie należą do gór niskich, Sudety i Beskidy do średnich, a Tatry do wysokich."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Żuławy Wiślane są w całości położone wysoko ponad 300 m n.p.m.",
    "options": null,
    "answer": false,
    "explanation": "Żuławy Wiślane obejmują tereny depresyjne, czyli położone poniżej poziomu morza."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest poprawna wysokość względna między punktami położonymi na wysokościach 868 i 520 m n.p.m.?",
    "options": [
      "1388 m",
      "408 m",
      "348 m",
      "520 m",
      "868 m",
      "288 m"
    ],
    "answer": 2,
    "explanation": "Różnica wysokości bezwzględnych wynosi 868 − 520 = 348 m."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż jezioro, które nie jest jeziorem przybrzeżnym: Łebsko, Gardno, Wicko, Śniardwy.",
    "options": null,
    "answer": "Śniardwy",
    "explanation": "Łebsko, Gardno i Wicko to jeziora przybrzeżne; Śniardwy leży na Pojezierzu Mazurskim."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się mazurska góra morenowa o wysokości 309 m n.p.m.?",
    "options": null,
    "answer": "Szeska Góra",
    "altAnswers": [
      "Szeska Góra",
      "Szeska Gora"
    ],
    "explanation": "Szeska Góra ma 309 m n.p.m. i jest wysokim wzniesieniem morenowym na Mazurach."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które formy ukształtowania Tatr powstały w wyniku działalności dawnych lodowców górskich?",
    "options": [
      "Doliny U-kształtne",
      "Hałdy górnicze",
      "Cyrki lodowcowe",
      "Stawy górskie",
      "Mierzeje",
      "Kary wypełnione wodą"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Lodowce górskie pozostawiły m.in. doliny U-kształtne, cyrki lodowcowe i stawy w zagłębieniach polodowcowych.",
    "image": "r01_tatry_dolina_szczyty.jpg"
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Którego dnia tradycyjnie obchodzi się śląską Barbórkę?",
    "options": [
      "1 maja",
      "3 maja",
      "11 listopada",
      "4 grudnia",
      "6 grudnia",
      "1 września"
    ],
    "answer": 3,
    "explanation": "Barbórka jest świętem górniczym obchodzonym 4 grudnia, w dniu św. Barbary."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj piętro roślinne Tatr do jego górnej granicy wysokości.",
    "options": null,
    "left": [
      "Regiel dolny",
      "Regiel górny",
      "Kosodrzewina",
      "Hale górskie"
    ],
    "right": [
      "2300 m n.p.m.",
      "1800 m n.p.m.",
      "1200 m n.p.m.",
      "1550 m n.p.m."
    ],
    "answer": {
      "Regiel dolny": "1200 m n.p.m.",
      "Regiel górny": "1550 m n.p.m.",
      "Kosodrzewina": "1800 m n.p.m.",
      "Hale górskie": "2300 m n.p.m."
    },
    "explanation": "Górne granice pięter roślinnych Tatr wynoszą w przybliżeniu: regiel dolny 1200 m, regiel górny 1550 m, kosodrzewina 1800 m, hale 2300 m n.p.m.",
    "image": "r01_pietra_roslin_zdjecia.jpg"
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Średnio o ile stopni Celsjusza spada temperatura w Tatrach przy wzroście wysokości o każde 100 m? Wpisz __________°C.",
    "options": null,
    "answer": [
      "0,6"
    ],
    "altAnswers": [
      [
        "0,6",
        "0.6"
      ]
    ],
    "explanation": "Średni spadek temperatury w górach wynosi około 0,6°C na każde 100 m wysokości."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz opisuje sieć rzeczną Niziny Mazowieckiej. Obserwuje Bug wpływający do Narwi, a następnie Narew uchodzącą do większej rzeki. Do jakiej rzeki uchodzi Narew?",
    "options": [
      "Odry",
      "Pilicy",
      "Wisły",
      "Bzury",
      "Warty",
      "Sanu"
    ],
    "answer": 2,
    "explanation": "Narew zbiera wody Bugu i uchodzi do Wisły."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uporządkuj trzy główne typy rzeźby według rosnącego udziału w powierzchni lądów świata.",
    "options": null,
    "items": [
      "Wyżyny — 38%",
      "Niziny — 34%",
      "Góry — 28%"
    ],
    "answer": [
      "Góry — 28%",
      "Niziny — 34%",
      "Wyżyny — 38%"
    ],
    "explanation": "Góry zajmują około 28%, niziny 34%, a wyżyny 38% powierzchni lądów."
  }
];

const KID_PROMPTS = {
  "R01_MAP_01": "Która część mapy tłumaczy użyte na niej symbole?",
  "R01_MAP_07": "Na mapie w skali 1:100 000 trasa ma 3 cm. Ile to kilometrów?",
  "R01_ORI_01": "Jaka mapa pokazuje jeden temat, na przykład lasy?",
  "R01_ORI_06": "Co zrobić z mapą i kompasem, aby ustawić ją we właściwym kierunku?",
  "R01_RZE_01": "Jak nazywają się linie pokazujące jednakową wysokość?",
  "R01_RZE_04": "Ile metrów różnicy jest między wysokościami 868 m i 520 m?",
  "R01_WBR_01": "Co nazywamy krajobrazem?",
  "R01_WBR_07": "Fale podczas sztormu podcinają stromy morski brzeg. Co się dzieje?",
  "R01_NIZ_02": "Co jest charakterystyczne dla młodego krajobrazu polodowcowego Mazur?",
  "R01_NIZ_07": "Na południu Mazowsza rolnik uprawia drzewa owocowe. Jak nazywa się taka działalność?",
  "R01_GOR_03": "Czy lessy na Wyżynie Lubelskiej pomagają w rozwoju rolnictwa?",
  "R01_GOR_07": "Deszcz wyżłobił w lessie wąską dolinę. Jak się nazywa?",
  "R01_HARD_01": "Trasa ma 6 cm na mapie 1:25 000. Ile to metrów w terenie?"
};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Mapa i krajobrazy Polski",
  "icon": "🌍",
  "sectionOrder": [
    "Mapa i skala",
    "Rodzaje map i orientacja",
    "Rzeźba i wysokości terenu",
    "Krajobraz Polski i pobrzeża",
    "Pojezierza, niziny i Warszawa",
    "Wyżyny i góry Polski"
  ],
  "sectionIcons": {
    "Mapa i skala": "🗺️",
    "Rodzaje map i orientacja": "🧭",
    "Rzeźba i wysokości terenu": "⛰️",
    "Krajobraz Polski i pobrzeża": "🏖️",
    "Pojezierza, niziny i Warszawa": "🌳",
    "Wyżyny i góry Polski": "🏔️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
