// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie geograficzne Polski
//   KLI  = Klimat Polski i jego zróżnicowanie
//   POG  = Pogoda i działalność człowieka
//   GOR  = Góry i zlodowacenia
//   SUR  = Surowce mineralne Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_POL_01",
    "section": "Położenie geograficzne Polski",
    "type": "single_choice",
    "prompt": "Na których półkulach leży w całości Polska?",
    "options": [
      "północnej i wschodniej",
      "północnej i zachodniej",
      "południowej i wschodniej",
      "południowej i zachodniej",
      "północnej i południowej",
      "wschodniej i zachodniej"
    ],
    "answer": 0,
    "explanation": "Polska leży w całości na półkuli północnej i wschodniej."
  },
  {
    "id": "R01_POL_02",
    "section": "Położenie geograficzne Polski",
    "type": "fill_in",
    "prompt": "Rozciągłość południkowa Polski wynosi __________, a rozciągłość równoleżnikowa __________.",
    "options": null,
    "answer": [
      "5°50'",
      "10°02'"
    ],
    "altAnswers": [
      [
        "5°50'",
        "5 stopni 50 minut",
        "5° 50'"
      ],
      [
        "10°02'",
        "10 stopni 2 minuty",
        "10° 02'"
      ]
    ],
    "image": "r01_mapa_skrajnych_punktow.jpg",
    "explanation": "Rozciągłość południkowa Polski wynosi 5°50', a równoleżnikowa 10°02'."
  },
  {
    "id": "R01_POL_03",
    "section": "Położenie geograficzne Polski",
    "type": "true_false",
    "prompt": "Na wschodnim krańcu Polski Słońce wschodzi, góruje i zachodzi około 40 minut wcześniej niż na zachodnim krańcu.",
    "options": null,
    "answer": true,
    "image": "r01_mapa_skrajnych_punktow.jpg",
    "explanation": "Różnica czasu słonecznego między skrajnymi punktami na wschodzie i zachodzie Polski wynosi około 40 minut."
  },
  {
    "id": "R01_POL_04",
    "section": "Położenie geograficzne Polski",
    "type": "multi_select",
    "prompt": "Zaznacz konsekwencje rozciągłości południkowej Polski.",
    "options": [
      "różnica wysokości górowania Słońca",
      "różnica długości dnia i nocy",
      "około 40 minut różnicy czasu słonecznego między wschodem a zachodem",
      "wcześniejszy wschód Słońca na wschodzie kraju",
      "inne kąty padania promieni słonecznych na północy i południu"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Rozciągłość południkowa powoduje różnice w wysokości górowania Słońca oraz w długości dnia i nocy między północą a południem kraju."
  },
  {
    "id": "R01_POL_05",
    "section": "Położenie geograficzne Polski",
    "type": "match",
    "prompt": "Połącz cechę położenia Polski z wynikającą z niej korzyścią.",
    "options": null,
    "left": [
      "centrum Europy",
      "przewaga nizin",
      "Morze Bałtyckie",
      "liczne rzeki"
    ],
    "right": [
      "transport morski i turystyka",
      "łatwiejsza budowa dróg",
      "szlaki handlowe północ-południe i wschód-zachód",
      "stałe źródło wody"
    ],
    "answer": {
      "centrum Europy": "szlaki handlowe północ-południe i wschód-zachód",
      "przewaga nizin": "łatwiejsza budowa dróg",
      "Morze Bałtyckie": "transport morski i turystyka",
      "liczne rzeki": "stałe źródło wody"
    },
    "explanation": "Położenie w centrum Europy sprzyja transportowi i handlowi, przewaga nizin ułatwia komunikację, Bałtyk sprzyja transportowi morskiemu i turystyce, a rzeki zapewniają wodę."
  },
  {
    "id": "R01_POL_06",
    "section": "Położenie geograficzne Polski",
    "type": "odd_one_out",
    "prompt": "Co nie należy do pasów tworzących Nizinę Polską: pobrzeża, pojezierza, niziny, góry.",
    "options": null,
    "answer": "góry",
    "image": "r01_pasowy_uklad_rzezby.jpg",
    "explanation": "Nizinę Polską tworzą pasy pobrzeży, pojezierzy i nizin; góry leżą w południowej części kraju."
  },
  {
    "id": "R01_POL_07",
    "section": "Położenie geograficzne Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się pamiątkowy kamień w Jastrzębiej Górze wyznaczający najdalej na północ wysunięty punkt Polski?",
    "options": null,
    "answer": "Gwiazda Północy",
    "altAnswers": [
      "Gwiazda Północy",
      "gwiazda północy"
    ],
    "image": "r01_gwiazda_polnocy.jpg",
    "explanation": "Pamiątkowy kamień w Jastrzębiej Górze nosi nazwę Gwiazda Północy."
  },
  {
    "id": "R01_POL_08",
    "section": "Położenie geograficzne Polski",
    "type": "scenario",
    "prompt": "Jest zima. Chcesz wybrać miejsce w Polsce, w którym dzień będzie dłuższy. Który kierunek wyjazdu lepiej spełnia ten warunek?",
    "options": [
      "na południe Polski",
      "na północ Polski",
      "na wschód Polski",
      "na zachód Polski",
      "kierunek nie ma znaczenia",
      "nad sam Bałtyk"
    ],
    "answer": 0,
    "explanation": "Jesienią i zimą dzień na południu Polski jest dłuższy niż na północy."
  },
  {
    "id": "R01_POL_09",
    "section": "Położenie geograficzne Polski",
    "type": "true_false",
    "prompt": "Powierzchnia Polski łącznie z wodami śródlądowymi wynosi 311 895 km².",
    "options": null,
    "answer": true,
    "explanation": "Powierzchnia Polski łącznie z jeziorami i rzekami wynosi 311 895 km²."
  },
  {
    "id": "R01_POL_10",
    "section": "Położenie geograficzne Polski",
    "type": "sort",
    "prompt": "Przyporządkuj skutki do rodzaju rozciągłości geograficznej Polski.",
    "options": null,
    "items": [
      "różnica wysokości górowania Słońca",
      "różnica długości dnia i nocy",
      "około 40 minut różnicy czasu słonecznego",
      "wcześniejszy zachód Słońca na wschodzie"
    ],
    "categories": [
      "południkowa",
      "równoleżnikowa"
    ],
    "answer": {
      "południkowa": [
        "różnica wysokości górowania Słońca",
        "różnica długości dnia i nocy"
      ],
      "równoleżnikowa": [
        "około 40 minut różnicy czasu słonecznego",
        "wcześniejszy zachód Słońca na wschodzie"
      ]
    },
    "explanation": "Rozciągłość południkowa wiąże się z różnicami wysokości Słońca i długości dnia, a równoleżnikowa z różnicą czasu słonecznego między wschodem i zachodem."
  },
  {
    "id": "R01_KLI_01",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "single_choice",
    "prompt": "Jak określa się klimat Polski?",
    "options": [
      "umiarkowany ciepły przejściowy",
      "umiarkowany chłodny morski",
      "podzwrotnikowy kontynentalny",
      "okołobiegunowy",
      "zwrotnikowy morski",
      "umiarkowany ciepły wyłącznie kontynentalny"
    ],
    "answer": 0,
    "explanation": "Klimat Polski jest umiarkowany ciepły przejściowy między morskim a kontynentalnym."
  },
  {
    "id": "R01_KLI_02",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki kształtujące klimat Polski.",
    "options": [
      "szerokość geograficzna",
      "wysokość nad poziomem morza",
      "oddziaływanie Oceanu Atlantyckiego i Eurazji",
      "wpływ Morza Bałtyckiego",
      "ośrodki baryczne i masy powietrza",
      "długość geograficzna jako samodzielny główny czynnik"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Na klimat Polski wpływają szerokość geograficzna, wysokość nad poziomem morza, Atlantyk i Eurazja, Bałtyk oraz ośrodki baryczne i masy powietrza."
  },
  {
    "id": "R01_KLI_03",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "true_false",
    "prompt": "Wraz ze wzrostem wysokości nad poziomem morza temperatura zwykle spada, a opady rosną.",
    "options": null,
    "answer": true,
    "image": "r01_sniezka_karpacz.jpg",
    "explanation": "Obszary położone wyżej mają niższe temperatury i wyższe opady; zależność jest szczególnie widoczna w górach."
  },
  {
    "id": "R01_KLI_04",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "fill_in",
    "prompt": "Temperatura wilgotnego powietrza spada średnio o __________ na każde 100 m wzrostu wysokości, a suchego o __________ na 100 m.",
    "options": null,
    "answer": [
      "0,6°C",
      "1°C"
    ],
    "altAnswers": [
      [
        "0,6°C",
        "0,6 °C",
        "0.6°C"
      ],
      [
        "1°C",
        "1 °C",
        "1.0°C"
      ]
    ],
    "image": "r01_sniezka_karpacz.jpg",
    "explanation": "Średni spadek wynosi około 0,6°C na 100 m dla powietrza wilgotnego i 1°C na 100 m dla suchego."
  },
  {
    "id": "R01_KLI_05",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "match",
    "prompt": "Połącz cechę z typem klimatu, dla którego jest charakterystyczna.",
    "options": null,
    "left": [
      "umiarkowanie ciepłe lato bez upałów",
      "mroźna zima",
      "większe zachmurzenie i wyższe opady",
      "upalne lato"
    ],
    "right": [
      "oceaniczny - lato",
      "kontynentalny - zima",
      "oceaniczny - wilgotność",
      "kontynentalny - lato"
    ],
    "answer": {
      "umiarkowanie ciepłe lato bez upałów": "oceaniczny - lato",
      "mroźna zima": "kontynentalny - zima",
      "większe zachmurzenie i wyższe opady": "oceaniczny - wilgotność",
      "upalne lato": "kontynentalny - lato"
    },
    "explanation": "Klimat oceaniczny ma łagodniejsze temperatury i większe opady, a kontynentalny cechują upalne lata, mroźne zimy i niższe opady."
  },
  {
    "id": "R01_KLI_06",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "sort",
    "prompt": "Przyporządkuj cechy klimatu do zachodniej lub wschodniej części Polski.",
    "options": null,
    "items": [
      "łagodniejsze zimy",
      "mniejsza roczna amplituda temperatury",
      "mroźniejsze zimy",
      "większa roczna amplituda temperatury"
    ],
    "categories": [
      "zachód Polski",
      "wschód Polski"
    ],
    "answer": {
      "zachód Polski": [
        "łagodniejsze zimy",
        "mniejsza roczna amplituda temperatury"
      ],
      "wschód Polski": [
        "mroźniejsze zimy",
        "większa roczna amplituda temperatury"
      ]
    },
    "explanation": "Na zachodzie silniejszy jest wpływ oceanu, a na wschodzie rośnie kontynentalizm klimatu."
  },
  {
    "id": "R01_KLI_07",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "riddle",
    "prompt": "Jak nazywa się linia na mapie łącząca punkty o jednakowej temperaturze?",
    "options": null,
    "answer": "izoterma",
    "altAnswers": [
      "izoterma",
      "izotermy"
    ],
    "explanation": "Linie łączące punkty o jednakowej temperaturze to izotermy."
  },
  {
    "id": "R01_KLI_08",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "single_choice",
    "prompt": "W którym zestawie znajdują się regiony o szczególnie niskich rocznych opadach?",
    "options": [
      "Wielkopolska, Kujawy, Mazowsze",
      "Tatry, Sudety, Bieszczady",
      "Nizina Śląska, Tatry, Wyżyna Lubelska",
      "Suwalszczyzna, Tatry, Podhale",
      "Karpaty, Pieniny, Sudety",
      "Pobrzeże Gdańskie, Tatry, Roztocze"
    ],
    "answer": 0,
    "image": "r01_mapa_klimatu_polski.jpg",
    "explanation": "Najniższe opady notuje się w pasie nizin i części pojezierzy, zwłaszcza w Wielkopolsce, na Kujawach i Mazowszu."
  },
  {
    "id": "R01_KLI_09",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy klimatu Polski.",
    "options": [
      "sześć termicznych pór roku",
      "duża zmienność pogody",
      "wzrost kontynentalizmu z zachodu na wschód",
      "napływ mas powietrza z różnych kierunków",
      "częste przechodzenie frontów atmosferycznych",
      "stała pogoda przez cały rok"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Klimat Polski cechują m.in. sześć termicznych pór roku, duża zmienność pogody, wzrost kontynentalizmu ku wschodowi, napływ różnych mas powietrza i częste fronty."
  },
  {
    "id": "R01_KLI_10",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "scenario",
    "prompt": "Rolnik chce wybrać obszar o możliwie najdłuższym okresie wegetacyjnym. Który region powinien wskazać?",
    "options": [
      "Nizina Śląska",
      "Suwalszczyzna",
      "najwyższe partie Tatr",
      "Pojezierze Suwalskie",
      "północne wybrzeże",
      "Bieszczady"
    ],
    "answer": 0,
    "image": "r01_winnice_zachod_polski.jpg",
    "explanation": "Najdłuższy okres wegetacyjny, do około 230 dni, występuje na Nizinie Śląskiej."
  },
  {
    "id": "R01_KLI_11",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "true_false",
    "prompt": "W najwyższych partiach Karpat i Sudetów nie występuje termiczne lato.",
    "options": null,
    "answer": true,
    "explanation": "W lipcu najzimniej jest w górach, a w najwyższych partiach Karpat i Sudetów termiczne lato nie występuje."
  },
  {
    "id": "R01_KLI_12",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "odd_one_out",
    "prompt": "Która nazwa nie należy do sześciu termicznych pór roku w Polsce: przedwiośnie, wiosna, lato, jesień, przedzimie, zima, pora deszczowa.",
    "options": null,
    "answer": "pora deszczowa",
    "explanation": "Sześć termicznych pór roku to przedwiośnie, wiosna, lato, jesień, przedzimie i zima."
  },
  {
    "id": "R01_KLI_13",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "match",
    "prompt": "Połącz region z charakterystyczną informacją klimatyczną.",
    "options": null,
    "left": [
      "Suwalszczyzna",
      "Nizina Śląska",
      "Wielkopolska",
      "góry"
    ],
    "right": [
      "około 180 dni okresu wegetacyjnego",
      "do 230 dni okresu wegetacyjnego",
      "niska suma opadów i cień opadowy",
      "najwyższe opady"
    ],
    "answer": {
      "Suwalszczyzna": "około 180 dni okresu wegetacyjnego",
      "Nizina Śląska": "do 230 dni okresu wegetacyjnego",
      "Wielkopolska": "niska suma opadów i cień opadowy",
      "góry": "najwyższe opady"
    },
    "explanation": "Suwalszczyzna ma najkrótszy okres wegetacyjny, Nizina Śląska najdłuższy, Wielkopolska leży w obszarze niskich opadów i cienia opadowego, a najwyższe opady występują w górach."
  },
  {
    "id": "R01_KLI_14",
    "section": "Klimat Polski i jego zróżnicowanie",
    "type": "fill_in",
    "prompt": "W ciągu ostatnich 70 lat średnia roczna temperatura powietrza w Polsce wzrosła o ponad __________.",
    "options": null,
    "answer": [
      "1,5°C"
    ],
    "altAnswers": [
      [
        "1,5°C",
        "1,5 °C",
        "1.5°C",
        "1.5 °C"
      ]
    ],
    "explanation": "W ciągu ostatnich 70 lat średnia roczna temperatura powietrza w Polsce wzrosła o ponad 1,5°C."
  },
  {
    "id": "R01_POG_01",
    "section": "Pogoda i działalność człowieka",
    "type": "single_choice",
    "prompt": "Jest lato, a w Lublinie panuje słoneczna i upalna pogoda. Która masa powietrza może ją kształtować?",
    "options": [
      "polarne kontynentalne",
      "polarne morskie",
      "arktyczne",
      "wilgotne znad Bałtyku",
      "chłodne znad Atlantyku",
      "lodowcowe"
    ],
    "answer": 0,
    "explanation": "Słoneczna i upalna pogoda może być związana z napływem powietrza polarnego kontynentalnego."
  },
  {
    "id": "R01_POG_02",
    "section": "Pogoda i działalność człowieka",
    "type": "single_choice",
    "prompt": "Która masa powietrza przynosi zimą ocieplenia i odwilże?",
    "options": [
      "polarne morskie",
      "polarne kontynentalne",
      "arktyczne",
      "wyłącznie zwrotnikowe kontynentalne",
      "lodowcowe",
      "górskie"
    ],
    "answer": 0,
    "explanation": "Zimowe ocieplenia i odwilże są skutkiem napływu powietrza polarnego morskiego."
  },
  {
    "id": "R01_POG_03",
    "section": "Pogoda i działalność człowieka",
    "type": "true_false",
    "prompt": "Napływ powietrza arktycznego może przynosić późnowiosenne przymrozki.",
    "options": null,
    "answer": true,
    "explanation": "Późnowiosenne przymrozki mogą być skutkiem napływu chłodnego powietrza arktycznego."
  },
  {
    "id": "R01_POG_04",
    "section": "Pogoda i działalność człowieka",
    "type": "scenario",
    "prompt": "Po kilku słonecznych i gorących dniach nad zachodnią Polskę napływa latem powietrze polarne morskie. Jakiej zmiany pogody należy się spodziewać?",
    "options": [
      "ochłodzenia i możliwego deszczu",
      "dalszego wzrostu temperatury i suszy",
      "silnego mrozu",
      "stałej bezchmurnej pogody przez wiele tygodni",
      "braku zmian temperatury",
      "wyłącznie opadów śniegu"
    ],
    "answer": 0,
    "explanation": "Latem powietrze polarne morskie przynosi ochłodzenie i możliwe opady deszczu."
  },
  {
    "id": "R01_POG_05",
    "section": "Pogoda i działalność człowieka",
    "type": "multi_select",
    "prompt": "Które sfery działalności gospodarczej są szczególnie podatne na zmienność pogody?",
    "options": [
      "rolnictwo",
      "transport",
      "turystyka",
      "mennictwo",
      "wydobycie rud miedzi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wyróżniono trzy szczególnie podatne sfery: rolnictwo, transport i turystykę."
  },
  {
    "id": "R01_POG_06",
    "section": "Pogoda i działalność człowieka",
    "type": "match",
    "prompt": "Połącz zjawisko pogodowe z jego typowym skutkiem dla człowieka lub gospodarki.",
    "options": null,
    "left": [
      "śnieżyca",
      "wiosenny przymrozek",
      "susza",
      "zbyt wysoka temperatura zimą"
    ],
    "right": [
      "opóźnienia pociągów",
      "uszkodzenia kwiatów drzew owocowych",
      "niedobór wody",
      "brak możliwości skutecznego naśnieżania"
    ],
    "answer": {
      "śnieżyca": "opóźnienia pociągów",
      "wiosenny przymrozek": "uszkodzenia kwiatów drzew owocowych",
      "susza": "niedobór wody",
      "zbyt wysoka temperatura zimą": "brak możliwości skutecznego naśnieżania"
    },
    "explanation": "Śnieżyce utrudniają transport, przymrozki niszczą kwiaty drzew owocowych, susza ogranicza zasoby wody i szkodzi rolnictwu, a zbyt wysoka temperatura utrudnia naśnieżanie stoków."
  },
  {
    "id": "R01_POG_07",
    "section": "Pogoda i działalność człowieka",
    "type": "odd_one_out",
    "prompt": "Co nie jest zagrożeniem pogodowym dla rolnictwa: wiosenne przymrozki, gradobicia, susze, sztuczne naśnieżanie.",
    "options": null,
    "answer": "sztuczne naśnieżanie",
    "explanation": "Wiosenne przymrozki, gradobicia i susze mogą powodować straty w rolnictwie; sztuczne naśnieżanie dotyczy ośrodków narciarskich."
  },
  {
    "id": "R01_POG_08",
    "section": "Pogoda i działalność człowieka",
    "type": "fill_in",
    "prompt": "Jedną z metod ochrony kwiatów drzew owocowych przed przymrozkiem jest polewanie ich wodą, ponieważ warstwa __________ chroni kwiaty przed przemarznięciem.",
    "options": null,
    "answer": [
      "lodu"
    ],
    "altAnswers": [
      [
        "lodu",
        "lód"
      ]
    ],
    "explanation": "Warstwa lodu powstająca na polanych wodą kwiatach może chronić je przed przemarznięciem."
  },
  {
    "id": "R01_POG_09",
    "section": "Pogoda i działalność człowieka",
    "type": "true_false",
    "prompt": "Duże opady śniegu mogą opóźniać pociągi, a silne mrozy zwiększają ryzyko uszkodzeń kolejowej sieci trakcyjnej.",
    "options": null,
    "answer": true,
    "image": "r01_pociag_w_sniezycy.jpg",
    "explanation": "Śnieżyce mogą prowadzić do odwołanych połączeń i wielogodzinnych opóźnień, a duży mróz zwiększa ryzyko uszkodzeń sieci trakcyjnej."
  },
  {
    "id": "R01_POG_10",
    "section": "Pogoda i działalność człowieka",
    "type": "scenario",
    "prompt": "Nadmorska miejscowość przeżywa długą suszę, a jednocześnie przyjechało bardzo wielu turystów. Dlaczego władze mogą apelować o oszczędzanie wody?",
    "options": [
      "bo liczba turystów zwiększa zużycie wody przy ograniczonych zasobach",
      "bo Bałtyk staje się słodkowodny",
      "bo deszcz zawsze szkodzi turystyce",
      "bo zimą nie wolno korzystać z wodociągów",
      "bo susza zwiększa zasoby wód podziemnych",
      "bo turyści nie korzystają z wody"
    ],
    "answer": 0,
    "image": "r01_miasto_susza_turystyka.jpg",
    "explanation": "Wzrost liczby turystów zwiększa zużycie wody, a podczas suszy jej zasoby są ograniczone."
  },
  {
    "id": "R01_GOR_01",
    "section": "Góry i zlodowacenia",
    "type": "single_choice",
    "prompt": "Który proces jest procesem wewnętrznym kształtującym powierzchnię Ziemi?",
    "options": [
      "ruchy górotwórcze",
      "erozja rzeczna",
      "akumulacja rzeczna",
      "erozja lodowcowa",
      "wietrzenie",
      "akumulacja lodowcowa"
    ],
    "answer": 0,
    "explanation": "Ruchy górotwórcze pochodzą z wnętrza Ziemi i są procesem wewnętrznym."
  },
  {
    "id": "R01_GOR_02",
    "section": "Góry i zlodowacenia",
    "type": "multi_select",
    "prompt": "Zaznacz procesy zewnętrzne wymieniane jako kształtujące rzeźbę terenu.",
    "options": [
      "erozja rzeczna",
      "akumulacja rzeczna",
      "erozja lodowcowa",
      "akumulacja lodowcowa",
      "ruchy górotwórcze",
      "erupcje wulkaniczne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do procesów zewnętrznych należą m.in. erozja i akumulacja rzeczna oraz erozja i akumulacja lodowcowa."
  },
  {
    "id": "R01_GOR_03",
    "section": "Góry i zlodowacenia",
    "type": "true_false",
    "prompt": "Góry to formy terenu o wysokościach bezwzględnych przekraczających 500 m n.p.m., dużych wysokościach względnych i znacznym nachyleniu stoków.",
    "options": null,
    "answer": true,
    "explanation": "Tak zdefiniowano góry: ponad 500 m n.p.m., znaczne wysokości względne i duże nachylenie stoków."
  },
  {
    "id": "R01_GOR_04",
    "section": "Góry i zlodowacenia",
    "type": "fill_in",
    "prompt": "Ruchy górotwórcze nazywa się __________.",
    "options": null,
    "answer": [
      "orogenezą"
    ],
    "altAnswers": [
      [
        "orogenezą",
        "orogeneza",
        "orogenezy"
      ]
    ],
    "explanation": "Orogeneza oznacza ruchy górotwórcze."
  },
  {
    "id": "R01_GOR_05",
    "section": "Góry i zlodowacenia",
    "type": "match",
    "prompt": "Połącz pasmo lub grupę gór z typem ich powstania.",
    "options": null,
    "left": [
      "Karpaty",
      "Sudety",
      "Góry Świętokrzyskie"
    ],
    "right": [
      "góry fałdowe",
      "góry zrębowe - Sudety",
      "góry zrębowe - Góry Świętokrzyskie"
    ],
    "answer": {
      "Karpaty": "góry fałdowe",
      "Sudety": "góry zrębowe - Sudety",
      "Góry Świętokrzyskie": "góry zrębowe - Góry Świętokrzyskie"
    },
    "image": "r01_sudety_karpaty.jpg",
    "explanation": "Karpaty są górami fałdowymi powstałymi w orogenezie alpejskiej, a Sudety i Góry Świętokrzyskie zostały ponownie wydźwignięte jako góry zrębowe."
  },
  {
    "id": "R01_GOR_06",
    "section": "Góry i zlodowacenia",
    "type": "sequence",
    "prompt": "Ułóż etapy prowadzące do powstania współczesnych Sudetów i Gór Świętokrzyskich.",
    "options": null,
    "items": [
      "popękanie górotworu podczas orogenezy alpejskiej",
      "sfałdowanie i wypiętrzenie w paleozoiku",
      "wydźwignięcie bloków i powstanie gór zrębowych",
      "zniszczenie i zrównanie dawnych gór przez erozję"
    ],
    "answer": [
      "sfałdowanie i wypiętrzenie w paleozoiku",
      "zniszczenie i zrównanie dawnych gór przez erozję",
      "popękanie górotworu podczas orogenezy alpejskiej",
      "wydźwignięcie bloków i powstanie gór zrębowych"
    ],
    "explanation": "Najpierw skały zostały sfałdowane i wypiętrzone w paleozoiku, potem dawne góry zniszczyły wietrzenie i erozja, a podczas orogenezy alpejskiej górotwór popękał i jego fragmenty zostały wydźwignięte."
  },
  {
    "id": "R01_GOR_07",
    "section": "Góry i zlodowacenia",
    "type": "riddle",
    "prompt": "Jak nazywa się warstwa gorących i częściowo roztopionych skał pod płytami tektonicznymi, dzięki której płyty mogą się przemieszczać?",
    "options": null,
    "answer": "astenosfera",
    "altAnswers": [
      "astenosfera",
      "astenosferą"
    ],
    "explanation": "Pod płytami tektonicznymi znajduje się plastyczna astenosfera."
  },
  {
    "id": "R01_GOR_08",
    "section": "Góry i zlodowacenia",
    "type": "true_false",
    "prompt": "Orogeneza alpejska w Europie nadal trwa, a płyta afrykańska naciska od południa na płytę eurazjatycką.",
    "options": null,
    "answer": true,
    "explanation": "Ruch płyt nadal trwa, czego przejawem są m.in. trzęsienia ziemi na południu Europy."
  },
  {
    "id": "R01_GOR_09",
    "section": "Góry i zlodowacenia",
    "type": "single_choice",
    "prompt": "W której epoce ponad 1,5 mln lat temu rozwinął się lądolód obejmujący znaczną część Europy i prawie całe terytorium dzisiejszej Polski?",
    "options": [
      "plejstocenie",
      "karbonie",
      "jurze",
      "kredzie",
      "holocenie",
      "permie"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy plejstocenu, kiedy w Europie występowały zlodowacenia."
  },
  {
    "id": "R01_GOR_10",
    "section": "Góry i zlodowacenia",
    "type": "fill_in",
    "prompt": "Rozległą, grubą pokrywę lodową poruszającą się we wszystkich kierunkach nazywamy __________.",
    "options": null,
    "answer": [
      "lądolodem"
    ],
    "altAnswers": [
      [
        "lądolodem",
        "lądolód"
      ]
    ],
    "explanation": "Taka pokrywa lodowa to lądolód."
  },
  {
    "id": "R01_GOR_11",
    "section": "Góry i zlodowacenia",
    "type": "sort",
    "prompt": "Przyporządkuj formy polodowcowe do czynnika, który je utworzył.",
    "options": null,
    "items": [
      "morena czołowa",
      "morena denna",
      "sandr",
      "pradolina",
      "rynna polodowcowa"
    ],
    "categories": [
      "lądolód",
      "wody roztopowe"
    ],
    "answer": {
      "lądolód": [
        "morena czołowa",
        "morena denna"
      ],
      "wody roztopowe": [
        "sandr",
        "pradolina",
        "rynna polodowcowa"
      ]
    },
    "image": "r01_formy_polodowcowe.jpg",
    "explanation": "Morena czołowa i denna są związane bezpośrednio z działalnością lądolodu, a sandry, pradoliny i rynny powstały dzięki wodom związanym z topnieniem lodu."
  },
  {
    "id": "R01_GOR_12",
    "section": "Góry i zlodowacenia",
    "type": "match",
    "prompt": "Połącz formę polodowcową z przykładem.",
    "options": null,
    "left": [
      "jezioro rynnowe",
      "jezioro morenowe",
      "morena czołowa",
      "pradolina"
    ],
    "right": [
      "Jeziorak",
      "Śniardwy",
      "Wzgórza Szeskie",
      "Pradolina Biebrzy"
    ],
    "answer": {
      "jezioro rynnowe": "Jeziorak",
      "jezioro morenowe": "Śniardwy",
      "morena czołowa": "Wzgórza Szeskie",
      "pradolina": "Pradolina Biebrzy"
    },
    "image": "r01_formy_polodowcowe.jpg",
    "explanation": "Jeziorak jest jeziorem rynnowym, Śniardwy jeziorem morenowym, Wzgórza Szeskie są przykładem moreny czołowej, a Pradolina Biebrzy - pradoliny."
  },
  {
    "id": "R01_GOR_13",
    "section": "Góry i zlodowacenia",
    "type": "odd_one_out",
    "prompt": "Co nie jest cechą krajobrazu młodoglacjalnego: jeziora polodowcowe, wyraźne formy polodowcowe, pojezierza, brak jezior polodowcowych.",
    "options": null,
    "answer": "brak jezior polodowcowych",
    "explanation": "Krajobraz młodoglacjalny na pojezierzach zachował liczne formy polodowcowe, w tym jeziora; brak jezior polodowcowych cechuje krajobraz staroglacjalny."
  },
  {
    "id": "R01_GOR_14",
    "section": "Góry i zlodowacenia",
    "type": "riddle",
    "prompt": "Jak nazywa się duży blok skalny przyniesiony przez lądolód ze Skandynawii?",
    "options": null,
    "answer": "głaz narzutowy",
    "altAnswers": [
      "głaz narzutowy",
      "eratyk",
      "głazy narzutowe",
      "eratyki"
    ],
    "image": "r01_glaz_narzutowy.jpg",
    "explanation": "Duże fragmenty skał przyniesione przez lądolód ze Skandynawii to głazy narzutowe, zwane też eratykami."
  },
  {
    "id": "R01_GOR_15",
    "section": "Góry i zlodowacenia",
    "type": "scenario",
    "prompt": "Wędrujesz po pojezierzu pełnym jezior polodowcowych i dobrze zachowanych pagórków morenowych. Jaki typ rzeźby obserwujesz?",
    "options": [
      "młodoglacjalną",
      "staroglacjalną",
      "zrębową",
      "krasową",
      "wulkaniczną",
      "wyłącznie rzeczną"
    ],
    "answer": 0,
    "image": "r01_formy_polodowcowe.jpg",
    "explanation": "Na pojezierzach, gdzie ostatnie zlodowacenie pozostawiło wyraźne formy i jeziora polodowcowe, występuje rzeźba młodoglacjalna."
  },
  {
    "id": "R01_SUR_01",
    "section": "Surowce mineralne Polski",
    "type": "single_choice",
    "prompt": "Około ilu udokumentowanych złóż różnych kopalin znajduje się w Polsce?",
    "options": [
      "14 tysięcy",
      "140",
      "1,4 tysiąca",
      "140 tysięcy",
      "około 500",
      "około 2 milionów"
    ],
    "answer": 0,
    "explanation": "W Polsce udokumentowano około 14 tysięcy złóż różnych kopalin."
  },
  {
    "id": "R01_SUR_02",
    "section": "Surowce mineralne Polski",
    "type": "sort",
    "prompt": "Przyporządkuj surowce do czterech głównych grup.",
    "options": null,
    "items": [
      "miedź",
      "cynk",
      "węgiel kamienny",
      "gaz ziemny",
      "sól kamienna",
      "granit",
      "piasek",
      "ropa naftowa"
    ],
    "categories": [
      "metaliczne",
      "energetyczne",
      "chemiczne",
      "skalne"
    ],
    "answer": {
      "metaliczne": [
        "miedź",
        "cynk"
      ],
      "energetyczne": [
        "węgiel kamienny",
        "gaz ziemny",
        "ropa naftowa"
      ],
      "chemiczne": [
        "sól kamienna"
      ],
      "skalne": [
        "granit",
        "piasek"
      ]
    },
    "image": "r01_mapa_surowcow_polski.jpg",
    "explanation": "Surowce mineralne dzieli się na metaliczne, energetyczne, chemiczne i skalne."
  },
  {
    "id": "R01_SUR_03",
    "section": "Surowce mineralne Polski",
    "type": "fill_in",
    "prompt": "Nagromadzenie danej kopaliny w jednym miejscu nazywa się __________.",
    "options": null,
    "answer": [
      "złożem"
    ],
    "altAnswers": [
      [
        "złożem",
        "złoże"
      ]
    ],
    "explanation": "Nagromadzenie kopaliny w jednym miejscu to złoże."
  },
  {
    "id": "R01_SUR_04",
    "section": "Surowce mineralne Polski",
    "type": "match",
    "prompt": "Połącz surowiec z charakterystycznym obszarem wydobycia lub występowania.",
    "options": null,
    "left": [
      "rudy miedzi",
      "węgiel kamienny",
      "węgiel brunatny",
      "sól kamienna"
    ],
    "right": [
      "Legnicko-Głogowski Okręg Miedziowy",
      "zagłębie górnośląskie",
      "zagłębie bełchatowskie",
      "Kłodawa"
    ],
    "answer": {
      "rudy miedzi": "Legnicko-Głogowski Okręg Miedziowy",
      "węgiel kamienny": "zagłębie górnośląskie",
      "węgiel brunatny": "zagłębie bełchatowskie",
      "sól kamienna": "Kłodawa"
    },
    "image": "r01_mapa_surowcow_polski.jpg",
    "explanation": "Rudy miedzi występują na Dolnym Śląsku w Legnicko-Głogowskim Okręgu Miedziowym, węgiel kamienny wydobywa się m.in. w zagłębiu górnośląskim, węgiel brunatny m.in. w bełchatowskim, a największa czynna kopalnia soli znajduje się w Kłodawie."
  },
  {
    "id": "R01_SUR_05",
    "section": "Surowce mineralne Polski",
    "type": "multi_select",
    "prompt": "Zaznacz zastosowania miedzi.",
    "options": [
      "kable elektryczne",
      "rury",
      "monety",
      "części samochodowe",
      "pokrycia dachowe",
      "usuwanie lodu z dróg"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Miedź wykorzystuje się m.in. do produkcji kabli elektrycznych, rur, monet, części samochodowych, elektroniki, pokryć dachowych i leków."
  },
  {
    "id": "R01_SUR_06",
    "section": "Surowce mineralne Polski",
    "type": "single_choice",
    "prompt": "Jaką metodą wydobywa się w Polsce węgiel brunatny?",
    "options": [
      "odkrywkową",
      "wyłącznie głębinową",
      "z dna Bałtyku",
      "przez odparowanie wody",
      "z lodowców",
      "przez wiercenia geotermalne"
    ],
    "answer": 0,
    "image": "r01_kopalnia_belchatow.jpg",
    "explanation": "Węgiel brunatny wydobywa się metodą odkrywkową, m.in. w zagłębiu bełchatowskim."
  },
  {
    "id": "R01_SUR_07",
    "section": "Surowce mineralne Polski",
    "type": "true_false",
    "prompt": "Około 25% gazu ziemnego zużywanego w Polsce pochodzi z wydobycia na terenie kraju.",
    "options": null,
    "answer": true,
    "explanation": "Około jedna czwarta zużywanego gazu pochodzi z wydobycia krajowego."
  },
  {
    "id": "R01_SUR_08",
    "section": "Surowce mineralne Polski",
    "type": "odd_one_out",
    "prompt": "Które zastosowanie nie dotyczy soli kamiennej: przyprawianie potraw, konserwowanie żywności, usuwanie lodu z dróg, produkcja kabli elektrycznych.",
    "options": null,
    "answer": "produkcja kabli elektrycznych",
    "explanation": "Sól kamienna służy jako przyprawa i konserwant, jest używana w przemyśle chemicznym oraz do odladzania dróg; kable elektryczne produkuje się m.in. z miedzi."
  },
  {
    "id": "R01_SUR_09",
    "section": "Surowce mineralne Polski",
    "type": "scenario",
    "prompt": "Trzeba zabezpieczyć stalowe elementy przed korozją, pokrywając je cienką warstwą metalu. Który surowiec jest do tego wykorzystywany?",
    "options": [
      "cynk",
      "ołów",
      "węgiel brunatny",
      "sól kamienna",
      "piasek",
      "gaz ziemny"
    ],
    "answer": 0,
    "explanation": "Stal i żeliwo pokrywa się cynkiem, aby chronić je przed korozją."
  },
  {
    "id": "R01_SUR_10",
    "section": "Surowce mineralne Polski",
    "type": "match",
    "prompt": "Połącz surowiec z charakterystycznym zastosowaniem.",
    "options": null,
    "left": [
      "ołów",
      "ropa naftowa",
      "gaz ziemny",
      "skały wapienne"
    ],
    "right": [
      "akumulatory",
      "paliwa i asfalt",
      "gotowanie i nawozy",
      "cement"
    ],
    "answer": {
      "ołów": "akumulatory",
      "ropa naftowa": "paliwa i asfalt",
      "gaz ziemny": "gotowanie i nawozy",
      "skały wapienne": "cement"
    },
    "explanation": "Ołów stosuje się m.in. w akumulatorach, ropa daje paliwa i asfalt, gaz służy do gotowania, ogrzewania i produkcji nawozów, a ze skał wapiennych pozyskuje się cement."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Skrajne szerokości geograficzne Polski to na północy __________ i na południu __________, a skrajne długości to na wschodzie __________ i na zachodzie __________.",
    "options": null,
    "answer": [
      "54°50'N",
      "49°00'N",
      "24°09'E",
      "14°07'E"
    ],
    "altAnswers": [
      [
        "54°50'N",
        "54° 50' N"
      ],
      [
        "49°00'N",
        "49° N",
        "49°00' N"
      ],
      [
        "24°09'E",
        "24° 09' E"
      ],
      [
        "14°07'E",
        "14° 07' E"
      ]
    ],
    "image": "r01_mapa_skrajnych_punktow.jpg",
    "explanation": "Współrzędne skrajnych punktów Polski to 54°50'N, 49°00'N, 24°09'E i 14°07'E."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczniowie w Suwałkach na 23°E ruszają o wschodzie Słońca o 6:15. Uczniowie w Świnoujściu na 14°E chcą wystartować przy tej samej fazie doby słonecznej. Ziemia obraca się o 1° w 4 minuty. O której powinni ruszyć w Świnoujściu?",
    "options": [
      "6:51",
      "5:39",
      "6:19",
      "7:15",
      "5:51",
      "6:36"
    ],
    "answer": 0,
    "explanation": "Różnica długości geograficznej wynosi 9°. To 36 minut różnicy czasu słonecznego, a na zachodzie Słońce wschodzi później, więc start przypada o 6:51."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz korzyści wynikające z położenia geograficznego i warunków przyrodniczych Polski.",
    "options": [
      "położenie na szlakach handlowych",
      "łatwiejsza budowa dróg na nizinach",
      "rozwój transportu morskiego",
      "stałe źródła wody w rzekach",
      "warunki sprzyjające rolnictwu",
      "bogactwo krajobrazów",
      "występowanie nocy polarnej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Do korzyści należą m.in. dogodne szlaki handlowe, łatwiejsza budowa dróg na nizinach, dostęp do Bałtyku, stałe zasoby wody w rzekach, dobre warunki dla rolnictwa i różnorodność krajobrazów."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz czynnik klimatotwórczy z jego charakterystycznym skutkiem.",
    "options": null,
    "left": [
      "szerokość geograficzna",
      "wysokość nad poziomem morza",
      "Atlantyk i Eurazja",
      "Morze Bałtyckie"
    ],
    "right": [
      "średnia ilość energii słonecznej",
      "niższa temperatura i wyższe opady wraz z wysokością",
      "przejściowość między klimatem morskim i kontynentalnym",
      "chłodniejsze lato i łagodniejsza zima przy wybrzeżu"
    ],
    "answer": {
      "szerokość geograficzna": "średnia ilość energii słonecznej",
      "wysokość nad poziomem morza": "niższa temperatura i wyższe opady wraz z wysokością",
      "Atlantyk i Eurazja": "przejściowość między klimatem morskim i kontynentalnym",
      "Morze Bałtyckie": "chłodniejsze lato i łagodniejsza zima przy wybrzeżu"
    },
    "explanation": "Szerokość geograficzna wpływa na ilość energii słonecznej, wysokość na spadek temperatury i wzrost opadów, Atlantyk i Eurazja na przejściowość klimatu, a Bałtyk łagodzi warunki przy wybrzeżu."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W Zakopanem na wysokości 1000 m n.p.m. jest 22°C. Kasprowy Wierch ma 1987 m n.p.m. Przy spadku temperatury o 0,6°C na każde 100 m wzrostu wysokości temperatura na szczycie wyniesie około __________.",
    "options": null,
    "answer": [
      "16,1°C"
    ],
    "altAnswers": [
      [
        "16,1°C",
        "16,1 °C",
        "16.1°C",
        "16.1 °C"
      ]
    ],
    "image": "r01_sniezka_karpacz.jpg",
    "explanation": "Różnica wysokości to 987 m, więc spadek temperatury wynosi około 5,9°C. 22°C - 5,9°C = około 16,1°C."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż sześć termicznych pór roku w kolejności od początku zimy przez cały rok.",
    "options": null,
    "items": [
      "lato",
      "zima",
      "przedzimie",
      "wiosna",
      "jesień",
      "przedwiośnie"
    ],
    "answer": [
      "zima",
      "przedwiośnie",
      "wiosna",
      "lato",
      "jesień",
      "przedzimie"
    ],
    "explanation": "W cyklu rocznym po zimie następują przedwiośnie, wiosna, lato, jesień i przedzimie, po którym znów zaczyna się zima."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz masę powietrza z typowym zjawiskiem pogodowym w Polsce.",
    "options": null,
    "left": [
      "arktyczne",
      "polarne morskie",
      "polarne kontynentalne",
      "zwrotnikowe kontynentalne"
    ],
    "right": [
      "późnowiosenne przymrozki",
      "zimowe odwilże",
      "mroźna i słoneczna pogoda zimą",
      "złota polska jesień"
    ],
    "answer": {
      "arktyczne": "późnowiosenne przymrozki",
      "polarne morskie": "zimowe odwilże",
      "polarne kontynentalne": "mroźna i słoneczna pogoda zimą",
      "zwrotnikowe kontynentalne": "złota polska jesień"
    },
    "explanation": "Powietrze arktyczne może wywołać późnowiosenne przymrozki, polarne morskie zimowe odwilże, polarne kontynentalne mroźną i słoneczną pogodę zimą, a zwrotnikowe kontynentalne może sprzyjać złotej polskiej jesieni."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Sudety i Góry Świętokrzyskie uzyskały współczesną postać gór zrębowych podczas orogenezy alpejskiej przez popękanie i wydźwignięcie fragmentów starszego górotworu.",
    "options": null,
    "answer": true,
    "explanation": "Starsze góry zostały wcześniej zniszczone i zrównane, a w orogenezie alpejskiej ich fragmenty popękały i zostały ponownie wydźwignięte."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Które góry nie należą do systemu alpidów: Alpy, Apeniny, Góry Dynarskie, Karpaty, Sudety.",
    "options": null,
    "answer": "Sudety",
    "explanation": "Do alpidów należą m.in. Alpy, Apeniny, Góry Dynarskie i Karpaty; Sudety mają starszą historię i współczesną postać gór zrębowych."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania złoża węgla kamiennego.",
    "options": null,
    "items": [
      "powstanie węgla brunatnego",
      "bujne lasy karbonu na terenach podmokłych",
      "powstanie pokładów węgla kamiennego",
      "obumieranie roślin i przykrywanie szczątków osadami",
      "powstanie torfu"
    ],
    "answer": [
      "bujne lasy karbonu na terenach podmokłych",
      "obumieranie roślin i przykrywanie szczątków osadami",
      "powstanie torfu",
      "powstanie węgla brunatnego",
      "powstanie pokładów węgla kamiennego"
    ],
    "explanation": "Roślinność obumierała i była przykrywana osadami, tworzył się torf, następnie węgiel brunatny, a dalsze uwęglanie prowadziło do węgla kamiennego."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz surowiec lub metal z dokładną informacją liczbową albo miejscem.",
    "options": null,
    "left": [
      "gaz ziemny",
      "sól kamienna",
      "srebro",
      "złoto"
    ],
    "right": [
      "około 25% zużycia z krajowego wydobycia",
      "Kłodawa",
      "około 1200 ton rocznie",
      "około 3 ton rocznie"
    ],
    "answer": {
      "gaz ziemny": "około 25% zużycia z krajowego wydobycia",
      "sól kamienna": "Kłodawa",
      "srebro": "około 1200 ton rocznie",
      "złoto": "około 3 ton rocznie"
    },
    "image": "r01_mapa_surowcow_polski.jpg",
    "explanation": "Około 25% zużywanego gazu pochodzi z wydobycia krajowego, największa czynna kopalnia soli to Kłodawa, a z rud miedzi odzyskuje się rocznie około 1200 ton srebra i 3 ton złota."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Dlaczego obecnie nie eksploatuje się polskich złóż rud żelaza?",
    "options": [
      "niska zawartość żelaza w części złóż",
      "bardzo głębokie zaleganie złóż w okolicach Suwałk",
      "całkowity brak rud żelaza w Polsce",
      "zakaz używania żelaza w przemyśle",
      "wszystkie złoża leżą pod Morzem Bałtyckim"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Złoża w rejonie Częstochowy i Zagłębia Staropolskiego mają niską zawartość żelaza, a złoża w okolicach Suwałk zalegają bardzo głęboko, więc wydobycie byłoby nieopłacalne."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ten metal odzyskuje się także ze skał zawierających rudy miedzi. Polska produkuje go około 1200 ton rocznie. Co to za metal?",
    "options": null,
    "answer": "srebro",
    "altAnswers": [
      "srebro",
      "srebra"
    ],
    "explanation": "Ze skał zawierających rudy miedzi odzyskuje się srebro; Polska produkuje go około 1200 ton rocznie."
  }
];

const KID_PROMPTS = {
  "R01_POL_04": "Co zmienia się między północą a południem Polski z powodu jej rozciągłości?",
  "R01_KLI_02": "Co wpływa na klimat Polski?",
  "R01_POG_05": "Które dziedziny gospodarki mocno zależą od pogody?",
  "R01_GOR_11": "Podziel formy na utworzone przez lód i przez wodę z topniejącego lodu.",
  "R01_SUR_02": "Podziel surowce na cztery grupy.",
  "R01_HARD_04": "Połącz przyczynę klimatyczną z jej skutkiem."
};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Środowisko przyrodnicze Polski, część 1",
  "icon": "🌍",
  "sectionOrder": [
    "Położenie geograficzne Polski",
    "Klimat Polski i jego zróżnicowanie",
    "Pogoda i działalność człowieka",
    "Góry i zlodowacenia",
    "Surowce mineralne Polski"
  ],
  "sectionIcons": {
    "Położenie geograficzne Polski": "🧭",
    "Klimat Polski i jego zróżnicowanie": "🌦️",
    "Pogoda i działalność człowieka": "⛈️",
    "Góry i zlodowacenia": "🏔️",
    "Surowce mineralne Polski": "⛏️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
