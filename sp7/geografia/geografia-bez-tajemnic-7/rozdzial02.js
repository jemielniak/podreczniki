// Skróty sekcji (do identyfikatorów ćwiczeń):
//   RZE  = Rzeki w Polsce i Europie
//   POW  = Powodzie i ochrona przeciwpowodziowa
//   BAL  = Morze Bałtyckie
//   GLE  = Gleby w Polsce
//   LAS  = Lasy w Polsce
//   OCH  = Dziedzictwo przyrodnicze Polski i jego ochrona
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_RZE_01",
    "section": "Rzeki w Polsce i Europie",
    "type": "single_choice",
    "prompt": "Jaką część powierzchni Polski zajmują łącznie dorzecza Wisły i Odry?",
    "options": [
      "około 25%",
      "około 40%",
      "około 60%",
      "prawie 88%",
      "niemal 100%",
      "około 10%"
    ],
    "answer": 3,
    "explanation": "Dorzecza Wisły i Odry zajmują prawie 88% powierzchni Polski."
  },
  {
    "id": "R02_RZE_02",
    "section": "Rzeki w Polsce i Europie",
    "type": "match",
    "prompt": "Połącz pojęcie dotyczące rzek z jego znaczeniem.",
    "options": null,
    "left": [
      "ujście",
      "dopływ",
      "dorzecze",
      "zlewisko"
    ],
    "right": [
      "miejsce, w którym rzeka wpada do innej rzeki lub zbiornika",
      "rzeka wpadająca do innej rzeki",
      "obszar, z którego wody spływają do jednej rzeki",
      "obszar, z którego wody spływają do tego samego morza lub oceanu"
    ],
    "answer": {
      "ujście": "miejsce, w którym rzeka wpada do innej rzeki lub zbiornika",
      "dopływ": "rzeka wpadająca do innej rzeki",
      "dorzecze": "obszar, z którego wody spływają do jednej rzeki",
      "zlewisko": "obszar, z którego wody spływają do tego samego morza lub oceanu"
    },
    "image": "r02_system_rzeczny.jpg",
    "explanation": "Ujście to miejsce zakończenia rzeki, dopływ wpada do innej rzeki, dorzecze odprowadza wody do jednej rzeki, a zlewisko do tego samego morza lub oceanu."
  },
  {
    "id": "R02_RZE_03",
    "section": "Rzeki w Polsce i Europie",
    "type": "single_choice",
    "prompt": "Gdzie znajduje się źródło Wisły?",
    "options": [
      "na Baraniej Górze",
      "w Górach Odrzańskich",
      "w Tatrach",
      "na Śnieżce",
      "na Wyżynie Krakowsko-Częstochowskiej",
      "na Pojezierzu Mazurskim"
    ],
    "answer": 0,
    "explanation": "Wisła ma źródło na Baraniej Górze w Beskidzie Śląskim."
  },
  {
    "id": "R02_RZE_04",
    "section": "Rzeki w Polsce i Europie",
    "type": "true_false",
    "prompt": "Naturalny charakter środkowego odcinka Wisły wyróżnia tę rzekę na tle dużych rzek europejskich.",
    "options": null,
    "answer": true,
    "image": "r02_wisla_naturalne_koryto.jpg",
    "explanation": "Wisła jest w niewielkim stopniu przekształcona przez człowieka, a jej środkowy odcinek zachował naturalne procesy kształtujące koryto."
  },
  {
    "id": "R02_RZE_05",
    "section": "Rzeki w Polsce i Europie",
    "type": "multi_select",
    "prompt": "Które elementy są charakterystyczne dla naturalnego środkowego odcinka Wisły?",
    "options": [
      "zakola meandrowe",
      "łachy",
      "siedliska wielu ptaków",
      "wyprostowane koryto na całej długości",
      "betonowe nabrzeża",
      "gęsta sieć śluz żeglugowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_wisla_naturalne_koryto.jpg",
    "explanation": "Na środkowej Wiśle powstają zakola meandrowe i łachy, a zróżnicowane koryto daje schronienie ptakom i innym zwierzętom."
  },
  {
    "id": "R02_RZE_06",
    "section": "Rzeki w Polsce i Europie",
    "type": "scenario",
    "prompt": "Zapora we Włocławku zatrzymuje osady i przecina ciągłość rzeki. Który skutek ekologiczny dotyczy tej budowli?",
    "options": [
      "ułatwienie migracji łososi",
      "utrudnienie migracji ryb",
      "zanik wszystkich osadów dennych",
      "zwiększenie naturalnych meandrów",
      "całkowite oczyszczenie wody",
      "powstanie nowych źródeł rzeki"
    ],
    "answer": 1,
    "explanation": "Tama we Włocławku utrudnia migrację ryb, między innymi łososi i węgorzy; problemem są też zanieczyszczone osady na dnie zbiornika."
  },
  {
    "id": "R02_RZE_07",
    "section": "Rzeki w Polsce i Europie",
    "type": "odd_one_out",
    "prompt": "Co nie jest zabiegiem regulacji rzeki: budowa ostróg, umocnienie brzegów, odcięcie zakoli, tworzenie łach.",
    "options": null,
    "answer": "tworzenie łach",
    "image": "r02_regulacja_odry.jpg",
    "explanation": "Łachy są naturalnymi formami w korycie Wisły. Ostrogi, umacnianie brzegów i odcinanie zakoli wiążą się z regulacją rzek."
  },
  {
    "id": "R02_RZE_08",
    "section": "Rzeki w Polsce i Europie",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do Wisły albo Odry.",
    "options": null,
    "items": [
      "naturalny środkowy odcinek",
      "ważny dawniej szlak transportowy",
      "silnie uregulowane koryto",
      "zakola meandrowe i łachy",
      "Park Krajobrazowy Dolnej Odry",
      "nie stała się ważnym szlakiem transportowym"
    ],
    "categories": [
      "Wisła",
      "Odra"
    ],
    "answer": {
      "Wisła": [
        "naturalny środkowy odcinek",
        "zakola meandrowe i łachy",
        "nie stała się ważnym szlakiem transportowym"
      ],
      "Odra": [
        "ważny dawniej szlak transportowy",
        "silnie uregulowane koryto",
        "Park Krajobrazowy Dolnej Odry"
      ]
    },
    "image": "r02_regulacja_odry.jpg",
    "explanation": "Wisła zachowała bardziej naturalny charakter, natomiast Odra została silniej uregulowana na potrzeby transportu. Dolna Odra ma cenne siedliska ptaków."
  },
  {
    "id": "R02_RZE_09",
    "section": "Rzeki w Polsce i Europie",
    "type": "fill_in",
    "prompt": "Kanał Bydgoski łączy dorzecza Wisły i Odry. Od strony Wisły jest połączony z rzeką __________.",
    "options": null,
    "answer": [
      "Brdą"
    ],
    "altAnswers": [
      [
        "Brdą",
        "Brda",
        "brdą",
        "brda"
      ]
    ],
    "explanation": "Kanał Bydgoski łączy Brdę od strony Wisły z Notecią i Wartą od strony Odry."
  },
  {
    "id": "R02_RZE_10",
    "section": "Rzeki w Polsce i Europie",
    "type": "sequence",
    "prompt": "Ułóż etapy przekształcania Odry na potrzeby żeglugi od przyczyny do skutku.",
    "options": null,
    "items": [
      "odcięcie naturalnych zakoli",
      "zabezpieczanie brzegów ostrogami",
      "potrzeba wykorzystania rzeki jako drogi wodnej",
      "skracanie i prostowanie biegu"
    ],
    "answer": [
      "potrzeba wykorzystania rzeki jako drogi wodnej",
      "skracanie i prostowanie biegu",
      "odcięcie naturalnych zakoli",
      "zabezpieczanie brzegów ostrogami"
    ],
    "image": "r02_regulacja_odry.jpg",
    "explanation": "Wykorzystanie Odry jako drogi wodnej wymagało regulacji: bieg skracano i prostowano, odcinano naturalne zakola, a brzegi zabezpieczano ostrogami."
  },
  {
    "id": "R02_POW_01",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "true_false",
    "prompt": "Każde wystąpienie rzeki poza koryto jest już powodzią.",
    "options": null,
    "answer": false,
    "explanation": "Samo podniesienie poziomu wody lub nawet wyjście rzeki z koryta jest wezbraniem. O powodzi mówi się, gdy woda zalewa tereny wykorzystywane przez człowieka i powoduje szkody."
  },
  {
    "id": "R02_POW_02",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "single_choice",
    "prompt": "Jaka jest typowa wiosenna przyczyna wezbrań i powodzi w Polsce?",
    "options": [
      "roztopy",
      "susza",
      "sztorm na oceanie",
      "niskie parowanie",
      "zamarzanie Bałtyku",
      "erozja gleby"
    ],
    "answer": 0,
    "explanation": "Wiosną wezbrania są często skutkiem topnienia śniegu, czyli roztopów."
  },
  {
    "id": "R02_POW_03",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "multi_select",
    "prompt": "Które czynniki zwiększyły zagrożenie powodziowe w Kłodzku w 1997 roku?",
    "options": [
      "długotrwałe i intensywne opady",
      "szybki spływ wody po stokach",
      "łączenie się kilku rzek w okolicy miasta",
      "wycięcie części lasów",
      "bardzo wysoka średnia zasolenia rzek",
      "brak jakichkolwiek cieków w pobliżu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_klodzko_powodz.jpg",
    "explanation": "Kłodzko leży w kotlinie otoczonej górami, woda szybko spływa po stokach, w okolicy łączy się kilka rzek, część lasów wycięto, a bezpośrednią przyczyną katastrofy były długotrwałe i intensywne opady."
  },
  {
    "id": "R02_POW_04",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "scenario",
    "prompt": "Gmina planuje zagospodarowanie terasy zalewowej. Która propozycja najmniej zwiększa potencjalne straty podczas powodzi?",
    "options": [
      "park miejski",
      "osiedle domów",
      "centrum magazynowe",
      "fabryka",
      "szpital",
      "duża szkoła"
    ],
    "answer": 0,
    "explanation": "Na terasie zalewowej powinno się ograniczać zabudowę mieszkaniową i przemysłową. Teren zielony, na przykład park, może być zalewany bez tak dużych strat jak zabudowa."
  },
  {
    "id": "R02_POW_05",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "match",
    "prompt": "Połącz działanie przeciwpowodziowe z jego podstawowym skutkiem.",
    "options": null,
    "left": [
      "ochrona lasów i mokradeł",
      "polder",
      "przepuszczalne nawierzchnie",
      "monitoring pogody"
    ],
    "right": [
      "zatrzymanie wody i opóźnienie spływu",
      "przyjęcie nadmiaru wody z rzeki",
      "ułatwienie wsiąkania wody",
      "wcześniejsze ostrzeganie przed intensywnymi opadami"
    ],
    "answer": {
      "ochrona lasów i mokradeł": "zatrzymanie wody i opóźnienie spływu",
      "polder": "przyjęcie nadmiaru wody z rzeki",
      "przepuszczalne nawierzchnie": "ułatwienie wsiąkania wody",
      "monitoring pogody": "wcześniejsze ostrzeganie przed intensywnymi opadami"
    },
    "explanation": "Ochrona przeciwpowodziowa łączy rozwiązania naturalne, techniczne i organizacyjne: retencję, poldery, przepuszczalne powierzchnie i monitoring."
  },
  {
    "id": "R02_POW_06",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "riddle",
    "prompt": "Suchy zbiornik przeciwpowodziowy, który przyjmuje nadmiar wody i łagodzi falę powodziową, to...",
    "options": null,
    "answer": "polder",
    "altAnswers": [
      "polder",
      "Polder"
    ],
    "image": "r02_polder_raciborz.jpg",
    "explanation": "Polder jest suchym zbiornikiem przeciwpowodziowym wykorzystywanym do przyjęcia nadmiaru wody."
  },
  {
    "id": "R02_POW_07",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "fill_in",
    "prompt": "Zbiornik Racibórz Dolny ukończono w roku __________ i jest on przykładem suchego zbiornika przeciwpowodziowego.",
    "options": null,
    "answer": [
      "2020"
    ],
    "altAnswers": [
      [
        "2020",
        "2020 r."
      ]
    ],
    "image": "r02_polder_raciborz.jpg",
    "explanation": "Budowę zbiornika Racibórz Dolny zakończono w 2020 roku."
  },
  {
    "id": "R02_POW_08",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "sort",
    "prompt": "Podziel działania na zwiększające i zmniejszające ryzyko lub skutki powodzi.",
    "options": null,
    "items": [
      "wycinanie lasów",
      "zabudowa terasy zalewowej",
      "pokrywanie gruntu asfaltem",
      "ochrona terenów podmokłych",
      "zakładanie polderów",
      "budowa wałów przeciwpowodziowych"
    ],
    "categories": [
      "zwiększa zagrożenie",
      "zmniejsza zagrożenie lub skutki"
    ],
    "answer": {
      "zwiększa zagrożenie": [
        "wycinanie lasów",
        "zabudowa terasy zalewowej",
        "pokrywanie gruntu asfaltem"
      ],
      "zmniejsza zagrożenie lub skutki": [
        "ochrona terenów podmokłych",
        "zakładanie polderów",
        "budowa wałów przeciwpowodziowych"
      ]
    },
    "explanation": "Wycinanie lasów, zabudowa terasy zalewowej i uszczelnianie powierzchni zwiększają zagrożenie. Ochrona mokradeł, poldery i wały należą do działań ograniczających ryzyko lub skutki."
  },
  {
    "id": "R02_POW_09",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest sposobem ochrony przeciwpowodziowej: polder, zbiornik retencyjny, kanał ulgi, centrum handlowe.",
    "options": null,
    "answer": "centrum handlowe",
    "explanation": "Poldery, zbiorniki retencyjne i kanały ulgi pomagają ograniczać skutki wezbrań. Centrum handlowe nie pełni takiej funkcji."
  },
  {
    "id": "R02_POW_10",
    "section": "Powodzie i ochrona przeciwpowodziowa",
    "type": "sequence",
    "prompt": "Ułóż przebieg działania polderu podczas wezbrania.",
    "options": null,
    "items": [
      "polder przyjmuje nadmiar wody",
      "fala powodziowa zostaje złagodzona",
      "intensywne opady zwiększają dopływ wody",
      "poziom wody w rzece rośnie"
    ],
    "answer": [
      "intensywne opady zwiększają dopływ wody",
      "poziom wody w rzece rośnie",
      "polder przyjmuje nadmiar wody",
      "fala powodziowa zostaje złagodzona"
    ],
    "image": "r02_polder_raciborz.jpg",
    "explanation": "Gdy po intensywnych opadach wzrasta poziom wody, polder przyjmuje jej nadmiar i dzięki temu obniża oraz łagodzi falę powodziową."
  },
  {
    "id": "R02_BAL_01",
    "section": "Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Jaka jest średnia głębokość Morza Bałtyckiego?",
    "options": [
      "12 m",
      "35 m",
      "52 m",
      "200 m",
      "459 m",
      "1000 m"
    ],
    "answer": 2,
    "image": "r02_baltyk_wybrzeze.jpg",
    "explanation": "Średnia głębokość Bałtyku wynosi 52 m, dlatego jest on morzem stosunkowo płytkim."
  },
  {
    "id": "R02_BAL_02",
    "section": "Morze Bałtyckie",
    "type": "fill_in",
    "prompt": "Najgłębszym miejscem Morza Bałtyckiego jest Głębia Landsort o głębokości __________ m.",
    "options": null,
    "answer": [
      "459"
    ],
    "altAnswers": [
      [
        "459",
        "459 m"
      ]
    ],
    "explanation": "Głębia Landsort ma 459 m i jest najgłębszym miejscem Bałtyku."
  },
  {
    "id": "R02_BAL_03",
    "section": "Morze Bałtyckie",
    "type": "true_false",
    "prompt": "Morze Bałtyckie jest morzem śródkontynentalnym należącym do Oceanu Atlantyckiego.",
    "options": null,
    "answer": true,
    "image": "r02_baltyk_wybrzeze.jpg",
    "explanation": "Bałtyk leży pośród lądów jednego kontynentu i jest częścią Oceanu Atlantyckiego."
  },
  {
    "id": "R02_BAL_04",
    "section": "Morze Bałtyckie",
    "type": "match",
    "prompt": "Połącz przyczynę niskiego zasolenia Bałtyku z jej skutkiem.",
    "options": null,
    "left": [
      "niskie parowanie",
      "liczne rzeki uchodzące do Bałtyku",
      "płytkie i wąskie Cieśniny Duńskie"
    ],
    "right": [
      "mały ubytek wody z powierzchni morza",
      "duży dopływ słodkiej wody",
      "ograniczony napływ silnie zasolonej wody oceanicznej"
    ],
    "answer": {
      "niskie parowanie": "mały ubytek wody z powierzchni morza",
      "liczne rzeki uchodzące do Bałtyku": "duży dopływ słodkiej wody",
      "płytkie i wąskie Cieśniny Duńskie": "ograniczony napływ silnie zasolonej wody oceanicznej"
    },
    "explanation": "Niskie parowanie, duży dopływ wód rzecznych oraz ograniczona wymiana przez płytkie i wąskie Cieśniny Duńskie obniżają zasolenie Bałtyku."
  },
  {
    "id": "R02_BAL_05",
    "section": "Morze Bałtyckie",
    "type": "multi_select",
    "prompt": "Które z poniższych ryb są słonowodnymi gatunkami żyjącymi w Bałtyku?",
    "options": [
      "śledź",
      "dorsz",
      "płastuga",
      "okoń",
      "płoć",
      "szczupak"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do ryb słonowodnych żyjących w Bałtyku należą między innymi śledź, dorsz i płastuga."
  },
  {
    "id": "R02_BAL_06",
    "section": "Morze Bałtyckie",
    "type": "sort",
    "prompt": "Przyporządkuj ryby do grup występujących w Bałtyku.",
    "options": null,
    "items": [
      "śledź",
      "dorsz",
      "płastuga",
      "okoń",
      "płoć",
      "szczupak"
    ],
    "categories": [
      "ryby słonowodne",
      "ryby słodkowodne"
    ],
    "answer": {
      "ryby słonowodne": [
        "śledź",
        "dorsz",
        "płastuga"
      ],
      "ryby słodkowodne": [
        "okoń",
        "płoć",
        "szczupak"
      ]
    },
    "explanation": "W Bałtyku żyją zarówno ryby słonowodne, jak śledź, dorsz i płastuga, jak i słodkowodne, na przykład okoń, płoć i szczupak."
  },
  {
    "id": "R02_BAL_07",
    "section": "Morze Bałtyckie",
    "type": "odd_one_out",
    "prompt": "Wskaż wartość, która nie opisuje zasolenia mórz: 7 PSU, 35 PSU, 38 PSU, 52 m.",
    "options": null,
    "answer": "52 m",
    "explanation": "7 PSU to średnie zasolenie Bałtyku, około 35 PSU ma ocean, a około 38 PSU Morze Śródziemne. 52 m to średnia głębokość Bałtyku."
  },
  {
    "id": "R02_BAL_08",
    "section": "Morze Bałtyckie",
    "type": "scenario",
    "prompt": "Latem przy kąpielisku pojawił się masowy zakwit sinic. Który zestaw warunków najlepiej wyjaśnia to zjawisko?",
    "options": [
      "dużo substancji biogenicznych i ciepła woda",
      "brak składników odżywczych i mróz",
      "wysokie zasolenie jak w oceanie",
      "całkowity brak światła przez cały rok",
      "silny dopływ czystej wody lodowcowej",
      "brak organizmów planktonowych"
    ],
    "answer": 0,
    "image": "r02_baltyk_zakwit_sinic.jpg",
    "explanation": "Zakwit sinic wiąże się z nadmiernym stężeniem substancji biogenicznych oraz wyższą temperaturą wody. Niektóre sinice wytwarzają toksyny, dlatego kąpieliska bywają zamykane."
  },
  {
    "id": "R02_BAL_09",
    "section": "Morze Bałtyckie",
    "type": "sequence",
    "prompt": "Ułóż etapy prowadzące do powstawania przydennych pustyń siarkowodorowych w Bałtyku.",
    "options": null,
    "items": [
      "rozkład szczątków pochłania tlen i wydziela siarkowodór",
      "nadmierny rozwój organizmów",
      "powstają pustynie siarkowodorowe",
      "dopływ nadmiaru substancji biogenicznych",
      "organizmy obumierają"
    ],
    "answer": [
      "dopływ nadmiaru substancji biogenicznych",
      "nadmierny rozwój organizmów",
      "organizmy obumierają",
      "rozkład szczątków pochłania tlen i wydziela siarkowodór",
      "powstają pustynie siarkowodorowe"
    ],
    "image": "r02_baltyk_zakwit_sinic.jpg",
    "explanation": "Nadmiar substancji biogenicznych sprzyja rozwojowi organizmów. Po ich obumarciu rozkład szczątków zużywa tlen i wydziela siarkowodór, co prowadzi do powstawania pustyń siarkowodorowych."
  },
  {
    "id": "R02_BAL_10",
    "section": "Morze Bałtyckie",
    "type": "riddle",
    "prompt": "Podniesienie poziomu wody w ujściowym odcinku rzeki spowodowane wpychaniem wody morskiej przez silny wiatr to...",
    "options": null,
    "answer": "cofka",
    "altAnswers": [
      "cofka",
      "Cofka"
    ],
    "explanation": "Takie zjawisko nazywa się cofka. Może ono zwiększyć zagrożenie powodziowe na ujściowych odcinkach rzek."
  },
  {
    "id": "R02_GLE_01",
    "section": "Gleby w Polsce",
    "type": "multi_select",
    "prompt": "Które składniki wchodzą w skład gleby?",
    "options": [
      "minerały i fragmenty skał",
      "związki organiczne",
      "woda",
      "gazy",
      "żywe organizmy",
      "wyłącznie światło słoneczne",
      "wyłącznie sól morska"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Glebę tworzą minerały i fragmenty skał, związki organiczne, woda, gazy oraz żywe organizmy."
  },
  {
    "id": "R02_GLE_02",
    "section": "Gleby w Polsce",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy powstawania gleby od początku procesu.",
    "options": null,
    "items": [
      "poziom próchniczny staje się coraz grubszy",
      "pojawiają się trawy i większe rośliny",
      "skały są rozkruszane",
      "ze szczątków powstaje próchnica",
      "pojawiają się organizmy o małych wymaganiach"
    ],
    "answer": [
      "skały są rozkruszane",
      "pojawiają się organizmy o małych wymaganiach",
      "ze szczątków powstaje próchnica",
      "pojawiają się trawy i większe rośliny",
      "poziom próchniczny staje się coraz grubszy"
    ],
    "explanation": "Proces zaczyna się od rozkruszania skał. Następnie pojawiają się organizmy pionierskie, z ich szczątków powstaje próchnica, rozwijają się większe rośliny, a poziom próchniczny stopniowo grubieje."
  },
  {
    "id": "R02_GLE_03",
    "section": "Gleby w Polsce",
    "type": "single_choice",
    "prompt": "Co oznacza żyzność gleby?",
    "options": [
      "zdolność zapewniania roślinom składników odżywczych",
      "wyłącznie ciemny kolor gleby",
      "liczbę kamieni na powierzchni",
      "temperaturę powietrza nad polem",
      "głębokość wód morskich",
      "szybkość przepływu rzeki"
    ],
    "answer": 0,
    "explanation": "Żyzność to zdolność gleby do zapewniania roślinom składników odżywczych."
  },
  {
    "id": "R02_GLE_04",
    "section": "Gleby w Polsce",
    "type": "match",
    "prompt": "Połącz typ gleby z warunkami lub skałą, na których powstaje.",
    "options": null,
    "left": [
      "gleby bielicowe",
      "rędziny",
      "czarnoziemy",
      "mady"
    ],
    "right": [
      "piaski",
      "skały wapienne",
      "lessy i warunki stepowe",
      "doliny rzeczne i osady nanoszone przez rzekę"
    ],
    "answer": {
      "gleby bielicowe": "piaski",
      "rędziny": "skały wapienne",
      "czarnoziemy": "lessy i warunki stepowe",
      "mady": "doliny rzeczne i osady nanoszone przez rzekę"
    },
    "image": "r02_profile_glebowe.jpg",
    "explanation": "Gleby bielicowe powstają głównie na piaskach, rędziny na wapieniach, czarnoziemy na lessach w warunkach stepowych, a mady w dolinach rzecznych z nanoszonych osadów."
  },
  {
    "id": "R02_GLE_05",
    "section": "Gleby w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj typy gleb do ogólnej oceny żyzności.",
    "options": null,
    "items": [
      "czarnoziemy",
      "rędziny",
      "mady",
      "gleby brunatne i płowe",
      "gleby bielicowe"
    ],
    "categories": [
      "najbardziej żyzne",
      "średnio żyzne",
      "najmniej żyzne"
    ],
    "answer": {
      "najbardziej żyzne": [
        "czarnoziemy",
        "rędziny",
        "mady"
      ],
      "średnio żyzne": [
        "gleby brunatne i płowe"
      ],
      "najmniej żyzne": [
        "gleby bielicowe"
      ]
    },
    "explanation": "Czarnoziemy, rędziny i mady należą do najbardziej żyznych gleb. Gleby brunatne i płowe są średnio żyzne, a bielicowe należą do najmniej żyznych."
  },
  {
    "id": "R02_GLE_06",
    "section": "Gleby w Polsce",
    "type": "true_false",
    "prompt": "Gleby bielicowe mają zwykle mało próchnicy, kwaśny odczyn i dużą przepuszczalność, dlatego są mało żyzne.",
    "options": null,
    "answer": true,
    "image": "r02_profile_glebowe.jpg",
    "explanation": "Gleby bielicowe rozwijają się głównie na piaskach i charakteryzują się właśnie tym zestawem cech."
  },
  {
    "id": "R02_GLE_07",
    "section": "Gleby w Polsce",
    "type": "fill_in",
    "prompt": "Wierzchni poziom profilu glebowego, zwykle ciemnobrązowy i zawierający rozłożone szczątki organiczne, to poziom __________.",
    "options": null,
    "answer": [
      "próchniczny"
    ],
    "altAnswers": [
      [
        "próchniczny",
        "prochniczny"
      ]
    ],
    "explanation": "Wierzchnią warstwą profilu jest zwykle poziom próchniczny, bogaty w próchnicę."
  },
  {
    "id": "R02_GLE_08",
    "section": "Gleby w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest typem gleby: czarnoziem, rędzina, mada, bór.",
    "options": null,
    "answer": "bór",
    "explanation": "Bór jest typem zbiorowiska leśnego. Czarnoziem, rędzina i mada to typy gleb."
  },
  {
    "id": "R02_GLE_09",
    "section": "Gleby w Polsce",
    "type": "scenario",
    "prompt": "Rolnik gospodaruje na obszarze z podłożem wapiennym. Jaki typ gleby może tam występować?",
    "options": [
      "rędzina",
      "gleba bielicowa",
      "czarnoziem",
      "mada",
      "torfowisko",
      "bór sosnowy"
    ],
    "answer": 0,
    "image": "r02_profile_glebowe.jpg",
    "explanation": "Rędziny powstają na skałach wapiennych. Ich przydatność rolnicza zależy między innymi od grubości warstwy próchnicznej."
  },
  {
    "id": "R02_GLE_10",
    "section": "Gleby w Polsce",
    "type": "riddle",
    "prompt": "Pionowy przekrój gleby pokazujący jej kolejne poziomy to...",
    "options": null,
    "answer": "profil glebowy",
    "altAnswers": [
      "profil glebowy",
      "Profil glebowy",
      "profil"
    ],
    "explanation": "Taki pionowy przekrój nazywa się profilem glebowym."
  },
  {
    "id": "R02_LAS_01",
    "section": "Lasy w Polsce",
    "type": "single_choice",
    "prompt": "Jaką część terytorium Polski zajmują obecnie lasy?",
    "options": [
      "około 5%",
      "około 15%",
      "około 30%",
      "około 50%",
      "około 70%",
      "ponad 90%"
    ],
    "answer": 2,
    "explanation": "Lasy zajmują około 30% powierzchni Polski, a ich udział od okresu powojennego systematycznie wzrasta."
  },
  {
    "id": "R02_LAS_02",
    "section": "Lasy w Polsce",
    "type": "true_false",
    "prompt": "Najmniej lasów występuje zwykle tam, gdzie żyzne gleby sprzyjają rozwojowi rolnictwa.",
    "options": null,
    "answer": true,
    "image": "r02_krajobraz_las_i_pola.jpg",
    "explanation": "Na terenach dobrych dla rolnictwa lasy często wycinano pod pola. Przykładem są Żuławy Wiślane, gdzie lasów jest bardzo mało."
  },
  {
    "id": "R02_LAS_03",
    "section": "Lasy w Polsce",
    "type": "multi_select",
    "prompt": "Które funkcje lasu należą do funkcji przyrodniczych?",
    "options": [
      "magazynowanie wody",
      "ochrona gleb",
      "kształtowanie lokalnego klimatu",
      "poprawa jakości powietrza",
      "tworzenie warunków życia dla wielu gatunków",
      "tworzenie miejsc pracy w przemyśle drzewnym"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do przyrodniczych funkcji lasów należą magazynowanie wody, ochrona gleb, kształtowanie lokalnego klimatu, poprawa jakości powietrza oraz tworzenie siedlisk dla wielu gatunków."
  },
  {
    "id": "R02_LAS_04",
    "section": "Lasy w Polsce",
    "type": "match",
    "prompt": "Połącz typ zbiorowiska leśnego z jego charakterystyczną cechą.",
    "options": null,
    "left": [
      "bór",
      "grąd",
      "łęg",
      "ols"
    ],
    "right": [
      "przewaga drzew iglastych",
      "las mieszany z przewagą grabu i dębu",
      "tereny okresowo zalewane",
      "tereny stale podmokłe"
    ],
    "answer": {
      "bór": "przewaga drzew iglastych",
      "grąd": "las mieszany z przewagą grabu i dębu",
      "łęg": "tereny okresowo zalewane",
      "ols": "tereny stale podmokłe"
    },
    "image": "r02_typy_lasow.jpg",
    "explanation": "Bór jest zdominowany przez drzewa iglaste, grąd przez grab i dąb, łęg rośnie na terenach okresowo zalewanych, a ols na stale podmokłych."
  },
  {
    "id": "R02_LAS_05",
    "section": "Lasy w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj funkcje lasu do trzech grup.",
    "options": null,
    "items": [
      "magazynowanie wody",
      "ochrona gleb",
      "rekreacja",
      "badania i dydaktyka",
      "dostarczanie drewna",
      "dostarczanie grzybów i owoców leśnych"
    ],
    "categories": [
      "przyrodnicze",
      "społeczne",
      "gospodarcze"
    ],
    "answer": {
      "przyrodnicze": [
        "magazynowanie wody",
        "ochrona gleb"
      ],
      "społeczne": [
        "rekreacja",
        "badania i dydaktyka"
      ],
      "gospodarcze": [
        "dostarczanie drewna",
        "dostarczanie grzybów i owoców leśnych"
      ]
    },
    "explanation": "Lasy pełnią jednocześnie funkcje przyrodnicze, społeczne i gospodarcze."
  },
  {
    "id": "R02_LAS_06",
    "section": "Lasy w Polsce",
    "type": "fill_in",
    "prompt": "Największą lesistością odznacza się województwo __________, a najmniejszą województwo __________.",
    "options": null,
    "answer": [
      "lubuskie",
      "łódzkie"
    ],
    "altAnswers": [
      [
        "lubuskie",
        "Lubuskie"
      ],
      [
        "łódzkie",
        "Łódzkie",
        "lodzkie"
      ]
    ],
    "explanation": "Największą lesistość ma województwo lubuskie, a najmniejszą łódzkie."
  },
  {
    "id": "R02_LAS_07",
    "section": "Lasy w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest nazwą drzewa: sosna, świerk, brzoza, ols.",
    "options": null,
    "answer": "ols",
    "image": "r02_typy_lasow.jpg",
    "explanation": "Ols to typ lasu liściastego na terenach stale podmokłych. Sosna, świerk i brzoza są drzewami."
  },
  {
    "id": "R02_LAS_08",
    "section": "Lasy w Polsce",
    "type": "scenario",
    "prompt": "Po długotrwałych opadach las zatrzymuje część wody i spowalnia jej spływ do rzek. Jaką funkcję lasu pokazuje ta sytuacja?",
    "options": [
      "przeciwpowodziową związaną z magazynowaniem wody",
      "wyłącznie transportową",
      "zwiększania erozji",
      "zasalania gleby",
      "pogłębiania rzek",
      "tworzenia pustyń siarkowodorowych"
    ],
    "answer": 0,
    "explanation": "Magazynowanie wody przez las pomaga zapobiegać suszom i ograniczać wezbrania oraz powodzie."
  },
  {
    "id": "R02_LAS_09",
    "section": "Lasy w Polsce",
    "type": "sequence",
    "prompt": "Ułóż główne etapy zmian powierzchni lasów na ziemiach polskich.",
    "options": null,
    "items": [
      "powojenne nasadzenia i sukcesja zwiększają lesistość",
      "po ustąpieniu lądolodu rozprzestrzeniają się lasy",
      "tuż po II wojnie światowej lasy zajmują niewiele ponad 20% kraju",
      "wzrost ludności powoduje wycinanie lasów pod pola osady i drogi",
      "lasy zajmują obecnie niemal 30% powierzchni Polski"
    ],
    "answer": [
      "po ustąpieniu lądolodu rozprzestrzeniają się lasy",
      "wzrost ludności powoduje wycinanie lasów pod pola osady i drogi",
      "tuż po II wojnie światowej lasy zajmują niewiele ponad 20% kraju",
      "powojenne nasadzenia i sukcesja zwiększają lesistość",
      "lasy zajmują obecnie niemal 30% powierzchni Polski"
    ],
    "explanation": "Po ustąpieniu lądolodu lasy się rozprzestrzeniły. Rozwój osadnictwa i rolnictwa prowadził do ich wycinania, po II wojnie światowej lesistość była bardzo niska, a później wzrosła dzięki nasadzeniom i sukcesji."
  },
  {
    "id": "R02_LAS_10",
    "section": "Lasy w Polsce",
    "type": "riddle",
    "prompt": "Naturalny proces prowadzący do zmiany składu gatunkowego organizmów na danym obszarze, dzięki któremu nieużytkowany teren może z czasem porosnąć lasem, to...",
    "options": null,
    "answer": "sukcesja ekologiczna",
    "altAnswers": [
      "sukcesja ekologiczna",
      "Sukcesja ekologiczna",
      "sukcesja"
    ],
    "explanation": "Proces ten nazywa się sukcesją ekologiczną."
  },
  {
    "id": "R02_OCH_01",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "single_choice",
    "prompt": "Ile parków narodowych utworzono w Polsce do 2022 roku?",
    "options": [
      "10",
      "15",
      "18",
      "23",
      "30",
      "50"
    ],
    "answer": 3,
    "explanation": "Do 2022 roku w Polsce utworzono 23 parki narodowe."
  },
  {
    "id": "R02_OCH_02",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "multi_select",
    "prompt": "Które zachowania są zgodne z zasadami ochrony przyrody w parku narodowym?",
    "options": [
      "poruszanie się po wyznaczonych szlakach",
      "zbieranie owoców runa leśnego",
      "dokarmianie dzikich zwierząt",
      "płoszenie zwierząt",
      "udział w działaniach edukacyjnych",
      "prowadzenie niezbędnych prac ochronnych"
    ],
    "answer": [
      0,
      4,
      5
    ],
    "image": "r02_park_narodowy_szlak.jpg",
    "explanation": "W parku narodowym należy poruszać się po wyznaczonych szlakach. Parki pełnią funkcję edukacyjną, a ingerencję ogranicza się do niezbędnych działań poznawczych i ochronnych."
  },
  {
    "id": "R02_OCH_03",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "match",
    "prompt": "Połącz rodzaj ochrony z jego opisem.",
    "options": null,
    "left": [
      "ochrona obszarowa",
      "ochrona gatunkowa",
      "ochrona indywidualna"
    ],
    "right": [
      "ochrona cennych obszarów przyrodniczych",
      "ochrona organizmów należących do danego gatunku",
      "ochrona konkretnego obiektu lub grupy obiektów"
    ],
    "answer": {
      "ochrona obszarowa": "ochrona cennych obszarów przyrodniczych",
      "ochrona gatunkowa": "ochrona organizmów należących do danego gatunku",
      "ochrona indywidualna": "ochrona konkretnego obiektu lub grupy obiektów"
    },
    "explanation": "Ochrona obszarowa obejmuje cenne tereny, gatunkowa dotyczy organizmów danego gatunku, a indywidualna konkretnych obiektów lub ich grup."
  },
  {
    "id": "R02_OCH_04",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "true_false",
    "prompt": "W parkach krajobrazowych i na obszarach Natura 2000 dopuszcza się niektóre rodzaje działalności człowieka, o ile nie zagrażają przyrodzie.",
    "options": null,
    "answer": true,
    "explanation": "Są to mniej restrykcyjne formy ochrony niż parki narodowe; mogą dopuszczać określone działania, ale inwestycje nie mogą negatywnie oddziaływać na przyrodę."
  },
  {
    "id": "R02_OCH_05",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "riddle",
    "prompt": "Obszar chroniony zwykle mniejszy od parku narodowego, w którym ochroną może być objęty jeden lub kilka elementów środowiska, to...",
    "options": null,
    "answer": "rezerwat przyrody",
    "altAnswers": [
      "rezerwat przyrody",
      "rezerwat",
      "Rezerwat przyrody"
    ],
    "explanation": "Taką formą ochrony jest rezerwat przyrody. Do części rezerwatów turyści nie mają wstępu."
  },
  {
    "id": "R02_OCH_06",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "sort",
    "prompt": "Przyporządkuj parki narodowe do grup związanych z ich położeniem i krajobrazem.",
    "options": null,
    "items": [
      "Narwiański Park Narodowy",
      "Biebrzański Park Narodowy",
      "Karkonoski Park Narodowy",
      "Pieniński Park Narodowy"
    ],
    "categories": [
      "parki związane z rzekami",
      "parki górskie"
    ],
    "answer": {
      "parki związane z rzekami": [
        "Narwiański Park Narodowy",
        "Biebrzański Park Narodowy"
      ],
      "parki górskie": [
        "Karkonoski Park Narodowy",
        "Pieniński Park Narodowy"
      ]
    },
    "explanation": "Narwiański i Biebrzański Park Narodowy są związane z rzekami i mokradłami, a Karkonoski i Pieniński należą do parków górskich."
  },
  {
    "id": "R02_OCH_07",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "single_choice",
    "prompt": "Która cecha dotyczy Białowieskiego Parku Narodowego?",
    "options": [
      "nieprzekształcony las pierwotny",
      "ruchome wydmy",
      "klifowe wybrzeże",
      "gołoborza",
      "słone jezioro",
      "pustynia siarkowodorowa"
    ],
    "answer": 0,
    "image": "r02_bialowieski_las.jpg",
    "explanation": "Białowieski Park Narodowy chroni nieprzekształcony przez człowieka las pierwotny i wyróżnia się wyjątkową bioróżnorodnością."
  },
  {
    "id": "R02_OCH_08",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest formą ochrony przyrody: park narodowy, rezerwat przyrody, park krajobrazowy, polder.",
    "options": null,
    "answer": "polder",
    "explanation": "Polder jest urządzeniem lub obszarem służącym ochronie przeciwpowodziowej, a pozostałe pojęcia to formy ochrony przyrody."
  },
  {
    "id": "R02_OCH_09",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "scenario",
    "prompt": "Planowana jest nowa inwestycja na obszarze Natura 2000. Co powinno nastąpić przed jej realizacją?",
    "options": [
      "ocena oddziaływania na środowisko i pozytywna opinia",
      "automatyczna zgoda bez oceny",
      "wycięcie wszystkich drzew",
      "zamknięcie obszaru dla wszystkich mieszkańców",
      "osuszenie mokradeł",
      "przekształcenie terenu w polder"
    ],
    "answer": 0,
    "explanation": "Nowa inwestycja na obszarze Natura 2000 musi uzyskać pozytywną opinię instytucji oceniających jej oddziaływanie na środowisko."
  },
  {
    "id": "R02_OCH_10",
    "section": "Dziedzictwo przyrodnicze Polski i jego ochrona",
    "type": "fill_in",
    "prompt": "Polskę wyróżnia bogactwo obszarów __________, które są miejscami lęgowymi wielu gatunków ptaków.",
    "options": null,
    "answer": [
      "podmokłych"
    ],
    "altAnswers": [
      [
        "podmokłych",
        "podmokle"
      ]
    ],
    "explanation": "Obszary podmokłe mają duże znaczenie dla ptaków, między innymi jako miejsca lęgowe."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rzekę i element jej biegu z właściwą nazwą miejsca.",
    "options": null,
    "left": [
      "Wisła - źródło",
      "Wisła - ujście",
      "Odra - źródło",
      "Odra - ujście"
    ],
    "right": [
      "Barania Góra",
      "Zatoka Gdańska",
      "Góry Odrzańskie",
      "Zalew Szczeciński"
    ],
    "answer": {
      "Wisła - źródło": "Barania Góra",
      "Wisła - ujście": "Zatoka Gdańska",
      "Odra - źródło": "Góry Odrzańskie",
      "Odra - ujście": "Zalew Szczeciński"
    },
    "explanation": "Wisła ma źródło na Baraniej Górze i uchodzi do Zatoki Gdańskiej. Odra ma źródło w Górach Odrzańskich i uchodzi do Zalewu Szczecińskiego."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Bałtyk powstał około __________ tys. lat temu, a jego średnie zasolenie wynosi około __________ PSU.",
    "options": null,
    "answer": [
      "12",
      "7"
    ],
    "altAnswers": [
      [
        "12",
        "12 tys.",
        "12 tysięcy"
      ],
      [
        "7",
        "7 PSU"
      ]
    ],
    "explanation": "Bałtyk powstał około 12 tysięcy lat temu. Jego średnie zasolenie to około 7 PSU."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż ciąg zdarzeń prowadzących do katastrofalnej powodzi w Kłodzku.",
    "options": null,
    "items": [
      "wysoka fala zalewa Kłodzko",
      "woda szybko spływa po górskich stokach",
      "długotrwałe i intensywne opady",
      "fale z kilku rzek docierają w podobnym czasie",
      "powstaje bardzo wysoka fala powodziowa"
    ],
    "answer": [
      "długotrwałe i intensywne opady",
      "woda szybko spływa po górskich stokach",
      "fale z kilku rzek docierają w podobnym czasie",
      "powstaje bardzo wysoka fala powodziowa",
      "wysoka fala zalewa Kłodzko"
    ],
    "image": "r02_klodzko_powodz.jpg",
    "explanation": "Długotrwałe opady w górach wywołały szybki spływ wody. Fale wezbraniowe z kilku rzek dotarły w podobnym czasie, tworząc wysoką falę, która zalała miasto."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne powiązania typu gleby z warunkami jej powstawania.",
    "options": [
      "gleby bielicowe - piaski",
      "rędziny - wapienie",
      "czarnoziemy - lessy",
      "mady - doliny rzeczne",
      "czarnoziemy - skały wapienne",
      "rędziny - osady rzeczne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Bielicowe rozwijają się głównie na piaskach, rędziny na wapieniach, czarnoziemy na lessach w warunkach stepowych, a mady w dolinach rzecznych."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zimą silny wiatr wieje od Bałtyku w stronę lądu i wpycha wodę morską do ujściowego odcinka rzeki. Jak nazywa się podniesienie poziomu wody w rzece wywołane tym mechanizmem?",
    "options": [
      "cofka",
      "sukcesja ekologiczna",
      "meander",
      "polder",
      "wymywanie gleby",
      "reżim śnieżny"
    ],
    "answer": 0,
    "explanation": "Wpychanie wody morskiej do ujścia rzeki powoduje cofkę. Może ona prowadzić do wezbrania i zwiększać zagrożenie powodziowe."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest źródłem ani składnikiem zanieczyszczeń Bałtyku: azot, fosfor, pestycydy, próchnica.",
    "options": null,
    "answer": "próchnica",
    "explanation": "Azot i fosfor są substancjami biogenicznymi trafiającymi do morza, a pestycydy pochodzą między innymi z pól uprawnych. Próchnica jest składnikiem gleby i nie jest zanieczyszczeniem Bałtyku."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zbiorowisko leśne z typowym środowiskiem jego występowania.",
    "options": null,
    "left": [
      "bór",
      "grąd",
      "łęg",
      "ols"
    ],
    "right": [
      "słabe gleby piaszczyste",
      "dobre gleby, na przykład brunatne",
      "terasy zalewowe rzek",
      "bagna i torfowiska"
    ],
    "answer": {
      "bór": "słabe gleby piaszczyste",
      "grąd": "dobre gleby, na przykład brunatne",
      "łęg": "terasy zalewowe rzek",
      "ols": "bagna i torfowiska"
    },
    "image": "r02_typy_lasow.jpg",
    "explanation": "Bory sosnowe występują naturalnie na najsłabszych glebach piaszczystych, grądy na dobrych glebach, łęgi na terenach okresowo zalewanych, a olsy na stale podmokłych."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Mieszkańców których trzech województw ma chronić zbiornik Racibórz Dolny?",
    "options": [
      "śląskiego, opolskiego i dolnośląskiego",
      "pomorskiego, warmińsko-mazurskiego i podlaskiego",
      "mazowieckiego, łódzkiego i świętokrzyskiego",
      "lubuskiego, wielkopolskiego i kujawsko-pomorskiego",
      "małopolskiego, podkarpackiego i lubelskiego",
      "zachodniopomorskiego, pomorskiego i kujawsko-pomorskiego"
    ],
    "answer": 0,
    "image": "r02_polder_raciborz.jpg",
    "explanation": "Zbiornik Racibórz Dolny ma chronić mieszkańców województw śląskiego, opolskiego i dolnośląskiego."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Płytkie i wąskie Cieśniny Duńskie ograniczają wymianę wód z Morzem Północnym, co przyczynia się do niskiego zasolenia Bałtyku.",
    "options": null,
    "answer": true,
    "explanation": "Ograniczony napływ silnie zasolonej wody oceanicznej przez Cieśniny Duńskie jest jedną z przyczyn niskiego zasolenia Bałtyku."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Trzy Korony i przełom Dunajca są walorami __________ Parku Narodowego, a Śnieżka i Równia pod Śnieżką - __________ Parku Narodowego.",
    "options": null,
    "answer": [
      "Pienińskiego",
      "Karkonoskiego"
    ],
    "altAnswers": [
      [
        "Pienińskiego",
        "pienińskiego",
        "Pieninskiego"
      ],
      [
        "Karkonoskiego",
        "karkonoskiego"
      ]
    ],
    "image": "r02_parki_gorskie.jpg",
    "explanation": "Trzy Korony i przełom Dunajca są charakterystyczne dla Pienińskiego Parku Narodowego, a Śnieżka i Równia pod Śnieżką dla Karkonoskiego Parku Narodowego."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które działania jednocześnie ograniczają szybki spływ wody lub pomagają przygotować się do powodzi?",
    "options": [
      "ochrona terenów podmokłych",
      "stosowanie przepuszczalnych nawierzchni",
      "ograniczanie zabudowy terenów zagrożonych",
      "zakładanie polderów",
      "monitorowanie warunków pogodowych",
      "wycinanie lasów",
      "pokrywanie parkingów nieprzepuszczalnym asfaltem"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Ochrona mokradeł, przepuszczalne nawierzchnie, ograniczenie zabudowy terenów zagrożonych, poldery i monitoring należą do zalecanych działań przeciwpowodziowych."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż ciąg zależności wyjaśniający, dlaczego regiony o dobrych warunkach dla rolnictwa bywają słabiej zalesione.",
    "options": null,
    "items": [
      "zmniejsza się powierzchnia lasów",
      "żyzne gleby sprzyjają rolnictwu",
      "powstają rozległe pola uprawne",
      "lasy są wycinane pod uprawy"
    ],
    "answer": [
      "żyzne gleby sprzyjają rolnictwu",
      "lasy są wycinane pod uprawy",
      "powstają rozległe pola uprawne",
      "zmniejsza się powierzchnia lasów"
    ],
    "explanation": "Żyzne gleby sprzyjają rolnictwu. Rozwój upraw prowadził do wycinania lasów pod pola, dlatego obszary o najlepszych warunkach rolniczych należą często do słabiej zalesionych."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Środowisko przyrodnicze Polski, część 2",
  icon: "🌿",
  sectionOrder: [
    "Rzeki w Polsce i Europie",
    "Powodzie i ochrona przeciwpowodziowa",
    "Morze Bałtyckie",
    "Gleby w Polsce",
    "Lasy w Polsce",
    "Dziedzictwo przyrodnicze Polski i jego ochrona"
  ],
  sectionIcons: {
    "Rzeki w Polsce i Europie": "🏞️",
    "Powodzie i ochrona przeciwpowodziowa": "🌧️",
    "Morze Bałtyckie": "🌊",
    "Gleby w Polsce": "🌱",
    "Lasy w Polsce": "🌲",
    "Dziedzictwo przyrodnicze Polski i jego ochrona": "🛡️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
