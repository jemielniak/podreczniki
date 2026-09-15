// Skróty sekcji (do identyfikatorów ćwiczeń):
//   FRA  = Monarchia absolutna we Francji
//   ANG  = Monarchia parlamentarna w Anglii
//   OSW  = Oświecenie w Europie
//   POT  = Nowe potęgi europejskie
//   USA  = Stany Zjednoczone Ameryki
//   HARD = Super trudne
const ALL_EXERCISES = [
  {
    "id": "R04_FRA_01",
    "section": "Monarchia absolutna we Francji",
    "type": "single_choice",
    "prompt": "Który władca wydał w 1598 roku Edykt nantejski?",
    "options": [
      "Ludwik XIII",
      "Henryk IV",
      "Ludwik XIV",
      "Karol I Stuart",
      "Fryderyk II Wielki",
      "Wilhelm III Orański"
    ],
    "answer": 1,
    "explanation": "Edykt nantejski wydał Henryk IV z dynastii Burbonów. Dokument zakończył wojny religijne i przyznał hugenotom szerokie swobody."
  },
  {
    "id": "R04_FRA_02",
    "section": "Monarchia absolutna we Francji",
    "type": "true_false",
    "prompt": "Henryk IV wzmacniał swoją władzę między innymi przez zaprzestanie zwoływania Stanów Generalnych.",
    "options": null,
    "answer": true,
    "explanation": "Stany Generalne były zgromadzeniem przedstawicieli społeczeństwa doradzającym królowi. Henryk IV przestał je zwoływać, aby zwiększyć zakres swojej władzy."
  },
  {
    "id": "R04_FRA_03",
    "section": "Monarchia absolutna we Francji",
    "type": "match",
    "prompt": "Połącz postać z działaniem lub funkcją.",
    "options": null,
    "answer": {
      "Henryk IV": "wydał Edykt nantejski",
      "Armand Richelieu": "przekazał królewskim urzędnikom część uprawnień arystokracji i szlachty",
      "Juliusz Mazarin": "sprawował faktyczną władzę podczas małoletności Ludwika XIV",
      "Jean-Baptiste Colbert": "kierował polityką gospodarczą za Ludwika XIV"
    },
    "explanation": "Henryk IV zakończył wojny religijne Edyktem nantejskim, Richelieu wzmacniał władzę królewską, Mazarin kontynuował tę politykę, a Colbert kierował gospodarką.",
    "left": [
      "Henryk IV",
      "Armand Richelieu",
      "Juliusz Mazarin",
      "Jean-Baptiste Colbert"
    ],
    "right": [
      "kierował polityką gospodarczą za Ludwika XIV",
      "wydał Edykt nantejski",
      "sprawował faktyczną władzę podczas małoletności Ludwika XIV",
      "przekazał królewskim urzędnikom część uprawnień arystokracji i szlachty"
    ]
  },
  {
    "id": "R04_FRA_04",
    "section": "Monarchia absolutna we Francji",
    "type": "scenario",
    "prompt": "Jesteś królewskim urzędnikiem w czasach Ludwika XIII. Z polecenia kardynała Richelieu przejmujesz od miejscowej arystokracji uprawnienia związane z sądownictwem i ściąganiem podatków. Jaki był główny cel takiej polityki?",
    "options": [
      "Wzmocnienie władzy królewskiej",
      "Wprowadzenie republiki",
      "Zwiększenie niezależności arystokracji",
      "Likwidacja urzędu króla",
      "Oddanie sądownictwa parlamentowi",
      "Przywrócenie wojen religijnych"
    ],
    "answer": 0,
    "explanation": "Richelieu odbierał część uprawnień arystokracji i szlachcie, przekazując je królewskim urzędnikom. Miało to wzmacniać pozycję monarchy."
  },
  {
    "id": "R04_FRA_05",
    "section": "Monarchia absolutna we Francji",
    "type": "single_choice",
    "prompt": "Ile lat miał Ludwik XIV, gdy po śmierci Mazarina objął samodzielne rządy?",
    "options": [
      "18",
      "21",
      "23",
      "25",
      "30",
      "35"
    ],
    "answer": 2,
    "explanation": "Ludwik XIV rozpoczął samodzielne rządy w wieku 23 lat i nie powołał nowego pierwszego ministra.",
    "image": "r04_ludwik_xiv_portret.jpg"
  },
  {
    "id": "R04_FRA_06",
    "section": "Monarchia absolutna we Francji",
    "type": "true_false",
    "prompt": "W monarchii absolutnej Ludwik XIV mógł ustanawiać prawa, którym sam nie podlegał.",
    "options": null,
    "answer": true,
    "explanation": "Ludwik XIV dysponował pełnią władzy. Ustanawiał i wprowadzał w życie prawa, a sam nie był nimi związany."
  },
  {
    "id": "R04_FRA_07",
    "section": "Monarchia absolutna we Francji",
    "type": "multi_select",
    "prompt": "Zaznacz uprawnienia i role Ludwika XIV jako monarchy absolutnego.",
    "options": [
      "ustanawiał prawa",
      "był najwyższym sędzią",
      "podlegał parlamentowi przy nakładaniu podatków",
      "był naczelnym wodzem wojska",
      "wydawał rozkazy wykonywane przez ludność",
      "był wybierany na czteroletnią kadencję"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Ludwik XIV ustanawiał prawa, był najwyższym sędzią i naczelnym wodzem, a jego rozkazy wykonywała ludność pod nadzorem urzędników."
  },
  {
    "id": "R04_FRA_08",
    "section": "Monarchia absolutna we Francji",
    "type": "fill_in",
    "prompt": "Ludwika XIV nazywano __________, a przypisywane mu powiedzenie brzmiało: Państwo to __________.",
    "options": null,
    "answer": [
      "Królem Słońce",
      "ja"
    ],
    "explanation": "Przydomek Król Słońce podkreślał ogrom władzy Ludwika XIV. Powiedzenie \"Państwo to ja\" wyrażało ideę skupienia pełni władzy w rękach monarchy.",
    "altAnswers": [
      [
        "Królem Słońce",
        "Król Słońce",
        "Krolem Slonce"
      ],
      [
        "ja",
        "Ja"
      ]
    ]
  },
  {
    "id": "R04_FRA_09",
    "section": "Monarchia absolutna we Francji",
    "type": "single_choice",
    "prompt": "Dlaczego Ludwik XIV nakazał najważniejszym arystokratom zamieszkać w Wersalu?",
    "options": [
      "Aby przygotować ich do służby w marynarce",
      "Aby oddać im zarząd nad prowincjami",
      "Aby zlikwidować dwór królewski",
      "Aby zapewnić im niezależne sądy",
      "Aby kontrolować ich i utrudnić spiski",
      "Aby przekazać im pobór podatków"
    ],
    "answer": 4,
    "explanation": "Zgromadzenie arystokracji w Wersalu pozwalało królowi ją kontrolować i utrudniało organizowanie spisków przeciw monarsze.",
    "image": "r04_wersal.jpg"
  },
  {
    "id": "R04_FRA_10",
    "section": "Monarchia absolutna we Francji",
    "type": "sort",
    "prompt": "Przyporządkuj działania Colberta do właściwej dziedziny polityki gospodarczej.",
    "options": null,
    "answer": {
      "handel": [
        "zniesienie ceł wewnętrznych",
        "wysokie cła na towary zagraniczne",
        "zachęcanie do sprzedaży francuskich produktów za granicę"
      ],
      "przemysł i produkcja": [
        "tworzenie hut i stoczni",
        "udzielanie pożyczek na zakładanie manufaktur",
        "sprowadzanie zagranicznych rzemieślników"
      ]
    },
    "explanation": "Colbert pobudzał handel, ograniczał import i wspierał eksport, a jednocześnie rozwijał przemysł przez huty, stocznie, manufaktury i sprowadzanie rzemieślników.",
    "items": [
      "tworzenie hut i stoczni",
      "wysokie cła na towary zagraniczne",
      "sprowadzanie zagranicznych rzemieślników",
      "zniesienie ceł wewnętrznych",
      "udzielanie pożyczek na zakładanie manufaktur",
      "zachęcanie do sprzedaży francuskich produktów za granicę"
    ],
    "categories": [
      "handel",
      "przemysł i produkcja"
    ]
  },
  {
    "id": "R04_FRA_11",
    "section": "Monarchia absolutna we Francji",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Wydanie Edyktu nantejskiego",
      "Objęcie samodzielnych rządów przez Ludwika XIV",
      "Unieważnienie Edyktu nantejskiego",
      "Podpisanie w Wersalu traktatu pokojowego kończącego I wojnę światową"
    ],
    "explanation": "Edykt nantejski wydano w 1598 roku, Ludwik XIV rozpoczął samodzielne rządy w 1661 roku, edykt unieważnił w 1685 roku, a traktat wersalski podpisano w 1919 roku.",
    "items": [
      "Unieważnienie Edyktu nantejskiego",
      "Podpisanie w Wersalu traktatu pokojowego kończącego I wojnę światową",
      "Wydanie Edyktu nantejskiego",
      "Objęcie samodzielnych rządów przez Ludwika XIV"
    ]
  },
  {
    "id": "R04_FRA_12",
    "section": "Monarchia absolutna we Francji",
    "type": "riddle",
    "prompt": "Minister Ludwika XIV, który kierował polityką gospodarczą Francji, znosił cła wewnętrzne i wspierał manufaktury, to...",
    "options": null,
    "answer": "Jean-Baptiste Colbert",
    "explanation": "Jean-Baptiste Colbert prowadził aktywną politykę gospodarczą, rozwijając handel, przemysł, flotę i dochody państwa.",
    "altAnswers": [
      "Jean-Baptiste Colbert",
      "Colbert",
      "Jean Baptiste Colbert"
    ]
  },
  {
    "id": "R04_ANG_01",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "single_choice",
    "prompt": "Jaki ustrój chciał wprowadzić w Anglii Karol I Stuart?",
    "options": [
      "monarchię absolutną",
      "republikę federalną",
      "monarchię parlamentarną",
      "demokrację bezpośrednią",
      "absolutyzm oświecony",
      "ustrój prezydencki"
    ],
    "answer": 0,
    "explanation": "Karol I dążył do wprowadzenia absolutyzmu na wzór francuski, co wywołało sprzeciw parlamentu."
  },
  {
    "id": "R04_ANG_02",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "true_false",
    "prompt": "Konflikt Karola I z parlamentem miał również podłoże religijne: król popierał anglikanizm, a w parlamencie przeważali purytanie.",
    "options": null,
    "answer": true,
    "explanation": "Spór polityczny łączył się z konfliktem religijnym. Karol I popierał anglikanizm, natomiast w parlamencie silni byli purytanie."
  },
  {
    "id": "R04_ANG_03",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "match",
    "prompt": "Połącz grupę lub stronnictwo z właściwym opisem.",
    "options": null,
    "answer": {
      "rojaliści": "zwolennicy monarchy",
      "purytanie": "protestanci prowadzący surowy tryb życia i samodzielnie studiujący Biblię",
      "nowa szlachta": "czerpała dochody także z handlu i przemysłu oraz chciała wpływać na rządy",
      "arystokracja": "stare rody szlacheckie w dużej mierze popierające króla"
    },
    "explanation": "Rojaliści bronili monarchy, purytanie stanowili ważną część opozycji religijnej, nowa szlachta dążyła do reform, a arystokracja częściej wspierała króla.",
    "left": [
      "rojaliści",
      "purytanie",
      "nowa szlachta",
      "arystokracja"
    ],
    "right": [
      "czerpała dochody także z handlu i przemysłu oraz chciała wpływać na rządy",
      "zwolennicy monarchy",
      "stare rody szlacheckie w dużej mierze popierające króla",
      "protestanci prowadzący surowy tryb życia i samodzielnie studiujący Biblię"
    ]
  },
  {
    "id": "R04_ANG_04",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "single_choice",
    "prompt": "W której bitwie w 1645 roku rojaliści zostali ostatecznie pokonani?",
    "options": [
      "pod Saratogą",
      "pod Yorktown",
      "pod Savannah",
      "pod Naseby",
      "pod Lexington",
      "pod Worcester"
    ],
    "answer": 3,
    "explanation": "Decydującym zwycięstwem sił parlamentu była bitwa pod Naseby w 1645 roku."
  },
  {
    "id": "R04_ANG_05",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "scenario",
    "prompt": "Jest rok 1649. W Londynie publicznie wykonano wyrok śmierci na władcy uznanym przez parlamentarzystów za tyrana, zdrajcę i wroga ludu. Kogo stracono?",
    "options": [
      "Jakuba II",
      "Karola I Stuarta",
      "Karola II",
      "Wilhelma III Orańskiego",
      "Olivera Cromwella",
      "Ludwika XIV"
    ],
    "answer": 1,
    "explanation": "W 1649 roku publicznie ścięto Karola I Stuarta. Wkrótce potem zniesiono monarchię i ogłoszono Anglię republiką.",
    "image": "r04_karol_i_egzekucja.jpg"
  },
  {
    "id": "R04_ANG_06",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "fill_in",
    "prompt": "Po egzekucji Karola I Anglię ogłoszono __________, a funkcję rządu pełniła __________.",
    "options": null,
    "answer": [
      "republiką",
      "Rada Stanu"
    ],
    "explanation": "Po zniesieniu monarchii prawa uchwalał parlament, a ich wykonywaniem zajmowała się Rada Stanu.",
    "altAnswers": [
      [
        "republiką",
        "republika"
      ],
      [
        "Rada Stanu",
        "Radą Stanu"
      ]
    ]
  },
  {
    "id": "R04_ANG_07",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "true_false",
    "prompt": "W 1653 roku Oliver Cromwell został lordem protektorem, rozwiązał parlament i zaczął sprawować rządy dyktatorskie.",
    "options": null,
    "answer": true,
    "explanation": "Cromwell objął najwyższą władzę jako lord protektor w 1653 roku, rozwiązał parlament i rządził dyktatorsko.",
    "image": "r04_cromwell.jpg"
  },
  {
    "id": "R04_ANG_08",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "answer": [
      "Wybuch wojny domowej w Anglii",
      "Egzekucja Karola I i ogłoszenie republiki",
      "Przywrócenie monarchii w Anglii",
      "Uchwalenie Deklaracji praw narodu angielskiego"
    ],
    "explanation": "Wojna domowa wybuchła w 1642 roku, Karola I stracono w 1649 roku, monarchię przywrócono w 1660 roku, a Deklarację praw uchwalono w 1689 roku.",
    "items": [
      "Uchwalenie Deklaracji praw narodu angielskiego",
      "Przywrócenie monarchii w Anglii",
      "Wybuch wojny domowej w Anglii",
      "Egzekucja Karola I i ogłoszenie republiki"
    ]
  },
  {
    "id": "R04_ANG_09",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "multi_select",
    "prompt": "Zaznacz cechy monarchii parlamentarnej wprowadzonej w Anglii po 1689 roku.",
    "options": [
      "król nie mógł samodzielnie ustanawiać nowych praw",
      "król mógł bez zgody parlamentu nakładać podatki",
      "władzę ustawodawczą sprawował parlament",
      "władzę wykonawczą sprawował rząd powoływany przez parlament",
      "sądy podlegały bezpośrednio królowi",
      "sądy były niezależne od parlamentu i rządu"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "W monarchii parlamentarnej król miał ograniczone uprawnienia, parlament stanowił prawo, rząd sprawował władzę wykonawczą, a sądy były niezależne."
  },
  {
    "id": "R04_ANG_10",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "riddle",
    "prompt": "Książę Holandii wybrany na króla Anglii po detronizacji Jakuba II, który zaakceptował Deklarację praw narodu angielskiego, to...",
    "options": null,
    "answer": "Wilhelm III Orański",
    "explanation": "Wilhelm III Orański został wybrany przez parlament po detronizacji Jakuba II i zaakceptował ograniczenie władzy monarchy.",
    "altAnswers": [
      "Wilhelm III Orański",
      "Wilhelm III Oranski",
      "Wilhelm Orański",
      "Wilhelm Oranski"
    ]
  },
  {
    "id": "R04_ANG_11",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "sort",
    "prompt": "Przyporządkuj kompetencje do instytucji monarchii parlamentarnej.",
    "options": null,
    "answer": {
      "parlament": [
        "uchwalanie praw",
        "wybór w wyborach"
      ],
      "rząd": [
        "sprawowanie władzy wykonawczej",
        "powołanie przez parlament"
      ],
      "sądy": [
        "niezależność od parlamentu i rządu"
      ],
      "król": [
        "głównie funkcje reprezentacyjne"
      ]
    },
    "explanation": "Po 1689 roku parlament sprawował władzę ustawodawczą, rząd wykonawczą, sądy były niezależne, a rola króla stała się głównie reprezentacyjna.",
    "items": [
      "głównie funkcje reprezentacyjne",
      "uchwalanie praw",
      "niezależność od parlamentu i rządu",
      "sprawowanie władzy wykonawczej",
      "wybór w wyborach",
      "powołanie przez parlament"
    ],
    "categories": [
      "parlament",
      "rząd",
      "sądy",
      "król"
    ]
  },
  {
    "id": "R04_ANG_12",
    "section": "Monarchia parlamentarna w Anglii",
    "type": "scenario",
    "prompt": "W państwie monarcha pozostaje głową państwa, ale realna władza należy do parlamentu i rządu, a sam władca pełni przede wszystkim funkcje reprezentacyjne. Która zasada najlepiej opisuje tę sytuację?",
    "options": [
      "Państwo to ja",
      "Władza pochodzi wyłącznie od Boga",
      "Król panuje, ale nie rządzi",
      "Pierwszy sługa ludu",
      "Nie ma wolności bez monarchii absolutnej",
      "Władza ustawodawcza należy do monarchy"
    ],
    "answer": 2,
    "explanation": "Tak działa monarchia parlamentarna: monarcha zachowuje tron i funkcje reprezentacyjne, lecz nie sprawuje na co dzień realnych rządów."
  },
  {
    "id": "R04_OSW_01",
    "section": "Oświecenie w Europie",
    "type": "single_choice",
    "prompt": "Dlaczego XVIII-wieczną epokę nazwano oświeceniem?",
    "options": [
      "Ponieważ dominowała sztuka barokowa",
      "Ponieważ wiedzę porównywano do światła",
      "Ponieważ zniesiono wszystkie religie",
      "Ponieważ odkryto elektryczność",
      "Ponieważ powstały pierwsze parlamenty",
      "Ponieważ w Europie nie było już monarchii"
    ],
    "answer": 1,
    "explanation": "Uczeni porównywali wiedzę do światła rozjaśniającego świat i wskazującego ludziom właściwą drogę. Epokę nazywano też wiekiem rozumu i wiekiem światła."
  },
  {
    "id": "R04_OSW_02",
    "section": "Oświecenie w Europie",
    "type": "true_false",
    "prompt": "Myśliciele oświecenia uważali, że w poznawaniu świata należy kierować się rozumem i doświadczeniem.",
    "options": null,
    "answer": true,
    "explanation": "Oświecenie podkreślało znaczenie niezależnego myślenia, rozumu oraz eksperymentu jako sposobu sprawdzania prawdziwości twierdzeń."
  },
  {
    "id": "R04_OSW_03",
    "section": "Oświecenie w Europie",
    "type": "match",
    "prompt": "Połącz myśliciela lub uczonego z jego dokonaniem albo poglądem.",
    "options": null,
    "answer": {
      "Monteskiusz": "koncepcja trójpodziału władzy",
      "Jan Jakub Rousseau": "koncepcja umowy społecznej",
      "Denis Diderot": "kierowanie pracami nad Wielką encyklopedią francuską",
      "Izaak Newton": "opisanie przyciągania ziemskiego i zasad ruchu ciał niebieskich"
    },
    "explanation": "Monteskiusz proponował rozdział władz, Rousseau umowę społeczną, Diderot kierował encyklopedystami, a Newton opisał prawa fizyki.",
    "left": [
      "Monteskiusz",
      "Jan Jakub Rousseau",
      "Denis Diderot",
      "Izaak Newton"
    ],
    "right": [
      "opisanie przyciągania ziemskiego i zasad ruchu ciał niebieskich",
      "koncepcja umowy społecznej",
      "kierowanie pracami nad Wielką encyklopedią francuską",
      "koncepcja trójpodziału władzy"
    ]
  },
  {
    "id": "R04_OSW_04",
    "section": "Oświecenie w Europie",
    "type": "fill_in",
    "prompt": "Według Monteskiusza władza powinna dzielić się na __________, __________ i __________.",
    "options": null,
    "answer": [
      "ustawodawczą",
      "wykonawczą",
      "sądowniczą"
    ],
    "explanation": "Trójpodział władzy zakłada oddzielenie stanowienia prawa, jego wykonywania oraz niezależnego sądzenia.",
    "image": "r04_monteskiusz.jpg",
    "altAnswers": [
      [
        "ustawodawczą",
        "prawodawczą",
        "ustawodawcza",
        "prawodawcza"
      ],
      [
        "wykonawczą",
        "wykonawcza"
      ],
      [
        "sądowniczą",
        "sędziowską",
        "sądownicza",
        "sedziowska"
      ]
    ]
  },
  {
    "id": "R04_OSW_05",
    "section": "Oświecenie w Europie",
    "type": "scenario",
    "prompt": "Obywatele uznają, że władcy sprawują rządy w ich imieniu, za ich zgodą i dla ich dobra. Jeżeli lud jest niezadowolony z rządzących, może ich odwołać. Czyjej koncepcji odpowiada ten opis?",
    "options": [
      "Jana Jakuba Rousseau",
      "Ludwika XIV",
      "Armanda Richelieu",
      "Jakuba Bossueta",
      "Jean-Baptiste'a Colberta",
      "Karola I Stuarta"
    ],
    "answer": 0,
    "explanation": "To koncepcja umowy społecznej Jana Jakuba Rousseau. Władza ma wynikać ze zgody ludu i służyć jego dobru."
  },
  {
    "id": "R04_OSW_06",
    "section": "Oświecenie w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia nauki związane z epoką oświecenia.",
    "options": [
      "odkrycie planety Uran",
      "badania nad elektrycznością",
      "odkrycie Ameryki",
      "wyodrębnienie chemii jako osobnej nauki",
      "stworzenie szczepionki przeciw ospie",
      "opisanie tysięcy gatunków przez Karola Linneusza"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "W oświeceniu odkryto Uran, rozwijano badania nad elektrycznością, chemia wyodrębniła się jako nauka, powstała szczepionka przeciw ospie, a Linneusz opisał tysiące gatunków."
  },
  {
    "id": "R04_OSW_07",
    "section": "Oświecenie w Europie",
    "type": "single_choice",
    "prompt": "Kto kierował pracami twórców Wielkiej encyklopedii francuskiej?",
    "options": [
      "Wolter",
      "Izaak Newton",
      "James Watt",
      "Denis Diderot",
      "Gabriel Fahrenheit",
      "Jan Jakub Rousseau"
    ],
    "answer": 3,
    "explanation": "Wielka encyklopedia francuska liczyła 35 tomów, a pracami encyklopedystów kierował Denis Diderot."
  },
  {
    "id": "R04_OSW_08",
    "section": "Oświecenie w Europie",
    "type": "match",
    "prompt": "Połącz wynalazek lub osiągnięcie z osobą z nim związaną.",
    "options": null,
    "answer": {
      "termometr i skala temperatury": "Gabriel Fahrenheit",
      "jedna z pierwszych maszyn parowych": "James Watt",
      "balon": "bracia Montgolfier",
      "systematyczny opis tysięcy gatunków": "Karol Linneusz"
    },
    "explanation": "Fahrenheit stworzył termometr i skalę temperatury, Watt udoskonalił maszynę parową, bracia Montgolfier skonstruowali balon, a Linneusz rozwijał biologię.",
    "left": [
      "termometr i skala temperatury",
      "jedna z pierwszych maszyn parowych",
      "balon",
      "systematyczny opis tysięcy gatunków"
    ],
    "right": [
      "Karol Linneusz",
      "bracia Montgolfier",
      "Gabriel Fahrenheit",
      "James Watt"
    ]
  },
  {
    "id": "R04_OSW_09",
    "section": "Oświecenie w Europie",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do klasycyzmu lub baroku.",
    "options": null,
    "answer": {
      "klasycyzm": [
        "ład i harmonia",
        "oszczędność w zdobieniach",
        "nawiązania do sztuki Greków i Rzymian",
        "kolumny i kopuły"
      ],
      "barok": [
        "przepych",
        "bogate zdobienia"
      ]
    },
    "explanation": "Klasycyzm nawiązywał do antyku, cenił ład, harmonię i oszczędność dekoracji, natomiast barok kojarzono z przepychem i bogatym zdobnictwem.",
    "items": [
      "przepych",
      "kolumny i kopuły",
      "ład i harmonia",
      "bogate zdobienia",
      "nawiązania do sztuki Greków i Rzymian",
      "oszczędność w zdobieniach"
    ],
    "categories": [
      "klasycyzm",
      "barok"
    ]
  },
  {
    "id": "R04_OSW_10",
    "section": "Oświecenie w Europie",
    "type": "multi_select",
    "prompt": "Które elementy paryskiego Panteonu wskazują na klasycystyczne nawiązania do antyku?",
    "options": [
      "kolumny",
      "ostrołukowe witraże",
      "tympanon",
      "baszty obronne",
      "kopuła",
      "blanki"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Panteon wykorzystuje elementy znane ze starożytnej architektury, między innymi kolumny, tympanon i kopułę.",
    "image": "r04_panteon_paryz.jpg"
  },
  {
    "id": "R04_OSW_11",
    "section": "Oświecenie w Europie",
    "type": "true_false",
    "prompt": "Klasycystyczni malarze i rzeźbiarze często podejmowali tematykę mitologiczną i historyczną.",
    "options": null,
    "answer": true,
    "explanation": "Twórcy klasycystyczni wzorowali się na sztuce antycznej, przedstawiali tematy mitologiczne i historyczne oraz cnoty takie jak męstwo, sprawiedliwość i mądrość."
  },
  {
    "id": "R04_OSW_12",
    "section": "Oświecenie w Europie",
    "type": "riddle",
    "prompt": "Autor powieści \"Podróże Guliwera\", który krytykował pychę, nietolerancję i głupotę społeczeństwa, to...",
    "options": null,
    "answer": "Jonathan Swift",
    "explanation": "Jonathan Swift stworzył \"Podróże Guliwera\", wykorzystując przygody bohatera do krytyki wad ówczesnego społeczeństwa angielskiego.",
    "altAnswers": [
      "Jonathan Swift",
      "Jonatan Swift",
      "Swift"
    ]
  },
  {
    "id": "R04_POT_01",
    "section": "Nowe potęgi europejskie",
    "type": "single_choice",
    "prompt": "Na czym polegał absolutyzm oświecony?",
    "options": [
      "Na całkowitym zniesieniu monarchii",
      "Na podporządkowaniu monarchy parlamentowi",
      "Na zachowaniu pełni władzy przy reformach i pewnych swobodach dla poddanych",
      "Na oddaniu władzy wyłącznie sądom",
      "Na wyborze monarchy przez obywateli co cztery lata",
      "Na likwidacji administracji centralnej"
    ],
    "answer": 2,
    "explanation": "Monarcha nadal miał pełnię władzy, ale przyznawał poddanym pewne swobody i przedstawiał swoje rządy jako służbę dla dobra ludu."
  },
  {
    "id": "R04_POT_02",
    "section": "Nowe potęgi europejskie",
    "type": "match",
    "prompt": "Połącz władcę z państwem, którym rządził.",
    "options": null,
    "answer": {
      "Fryderyk II Wielki": "Prusy",
      "Józef II": "monarchia austriacka",
      "Piotr I Wielki": "Rosja"
    },
    "explanation": "Fryderyk II rządził Prusami, Józef II monarchią austriackich Habsburgów, a Piotr I Rosją.",
    "left": [
      "Fryderyk II Wielki",
      "Józef II",
      "Piotr I Wielki"
    ],
    "right": [
      "Rosja",
      "Prusy",
      "monarchia austriacka"
    ]
  },
  {
    "id": "R04_POT_03",
    "section": "Nowe potęgi europejskie",
    "type": "true_false",
    "prompt": "Królestwo Prus powstało w 1701 roku, gdy władca Brandenburgii i Prus Książęcych ogłosił się królem jako Fryderyk I.",
    "options": null,
    "answer": true,
    "explanation": "W 1701 roku władca tych ziem przyjął imię Fryderyk I, dając początek Królestwu Prus."
  },
  {
    "id": "R04_POT_04",
    "section": "Nowe potęgi europejskie",
    "type": "multi_select",
    "prompt": "Zaznacz reformy i działania Fryderyka II Wielkiego.",
    "options": [
      "zniesienie cenzury",
      "zniesienie tortur",
      "tolerancja religijna",
      "likwidacja armii",
      "powszechny obowiązek szkolny dla chłopców",
      "wspieranie manufaktur"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Fryderyk II zniósł cenzurę i tortury, wprowadził tolerancję religijną, obowiązek szkolny dla chłopców, wspierał manufaktury i utrzymał powszechny obowiązek podatkowy obejmujący także szlachtę."
  },
  {
    "id": "R04_POT_05",
    "section": "Nowe potęgi europejskie",
    "type": "scenario",
    "prompt": "Władca stworzył doskonale wyszkoloną i zdyscyplinowaną armię, a następnie odebrał Austrii bogaty w surowce Śląsk. Kto to był?",
    "options": [
      "Józef II",
      "Fryderyk II Wielki",
      "Piotr I Wielki",
      "Wilhelm III Orański",
      "Ludwik XIV",
      "Jerzy Waszyngton"
    ],
    "answer": 1,
    "explanation": "Fryderyk II Wielki wykorzystał rozbudowaną pruską armię do zdobycia Śląska kosztem Austrii.",
    "image": "r04_fryderyk_ii.jpg"
  },
  {
    "id": "R04_POT_06",
    "section": "Nowe potęgi europejskie",
    "type": "fill_in",
    "prompt": "W monarchii Habsburgów reformy przeprowadzali cesarzowa __________ oraz jej syn cesarz __________.",
    "options": null,
    "answer": [
      "Maria Teresa",
      "Józef II"
    ],
    "explanation": "Za panowania Marii Teresy i Józefa II przeprowadzono w monarchii austriackiej szerokie reformy administracyjne, podatkowe, wojskowe, społeczne i religijne.",
    "altAnswers": [
      [
        "Maria Teresa",
        "Marii Teresy"
      ],
      [
        "Józef II",
        "Jozef II",
        "Józefa II"
      ]
    ]
  },
  {
    "id": "R04_POT_07",
    "section": "Nowe potęgi europejskie",
    "type": "multi_select",
    "prompt": "Które działania należały do reform Józefa II?",
    "options": [
      "wolność religijna dla wyznań chrześcijańskich",
      "ograniczenie prześladowań Żydów",
      "zniesienie poddaństwa chłopów",
      "przywrócenie poddaństwa chłopów",
      "ograniczenie wpływów Kościoła",
      "likwidacja części klasztorów"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Józef II rozszerzył wolność religijną, ograniczył prześladowania Żydów, zniósł poddaństwo chłopów, ograniczał wpływy Kościoła i likwidował część klasztorów."
  },
  {
    "id": "R04_POT_08",
    "section": "Nowe potęgi europejskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Piotrem I i Petersburgiem w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "Objęcie rządów w Rosji przez Piotra I",
      "Założenie Petersburga",
      "Przyjęcie przez Piotra I tytułu cesarza",
      "Przywrócenie miastu nazwy Petersburg po upadku ZSRR"
    ],
    "explanation": "Piotr I objął rządy w 1689 roku, Petersburg założono w 1703 roku, tytuł cesarza przyjął w 1721 roku, a nazwę Petersburg przywrócono w 1991 roku.",
    "items": [
      "Przyjęcie przez Piotra I tytułu cesarza",
      "Przywrócenie miastu nazwy Petersburg po upadku ZSRR",
      "Objęcie rządów w Rosji przez Piotra I",
      "Założenie Petersburga"
    ]
  },
  {
    "id": "R04_POT_09",
    "section": "Nowe potęgi europejskie",
    "type": "single_choice",
    "prompt": "Po co Piotr I odbył anonimową podróż po Europie Zachodniej?",
    "options": [
      "Aby szukać nowej dynastii dla Rosji",
      "Aby przygotować likwidację armii",
      "Aby podpisać Deklarację praw",
      "Aby przenieść stolicę do Londynu",
      "Aby poznać rozwiązania potrzebne do modernizacji Rosji",
      "Aby znieść monarchię"
    ],
    "answer": 4,
    "explanation": "Car poznawał gospodarkę, wojskowość, kulturę i sposoby zarządzania rozwiniętych państw, aby następnie unowocześniać Rosję.",
    "image": "r04_piotr_i.jpg"
  },
  {
    "id": "R04_POT_10",
    "section": "Nowe potęgi europejskie",
    "type": "sort",
    "prompt": "Przyporządkuj reformy lub działania do właściwego państwa.",
    "options": null,
    "answer": {
      "Prusy": [
        "obowiązek szkolny dla chłopców",
        "rozbudowa zdyscyplinowanej armii dzięki powszechnym podatkom"
      ],
      "Austria": [
        "sieć urzędów podległych władzom w Wiedniu",
        "zniesienie poddaństwa chłopów przez Józefa II"
      ],
      "Rosja": [
        "podporządkowanie Cerkwi carowi",
        "modernizacja armii na wzór europejski"
      ]
    },
    "explanation": "Wszystkie trzy państwa modernizowały administrację, gospodarkę i wojsko, ale miały też własne charakterystyczne reformy.",
    "items": [
      "podporządkowanie Cerkwi carowi",
      "sieć urzędów podległych władzom w Wiedniu",
      "obowiązek szkolny dla chłopców",
      "modernizacja armii na wzór europejski",
      "zniesienie poddaństwa chłopów przez Józefa II",
      "rozbudowa zdyscyplinowanej armii dzięki powszechnym podatkom"
    ],
    "categories": [
      "Prusy",
      "Austria",
      "Rosja"
    ]
  },
  {
    "id": "R04_POT_11",
    "section": "Nowe potęgi europejskie",
    "type": "true_false",
    "prompt": "Po zdobyciu dostępu do Morza Bałtyckiego Piotr I przeniósł rosyjską stolicę z Moskwy do Petersburga.",
    "options": null,
    "answer": true,
    "explanation": "Po przejęciu Inflant i Estonii Rosja uzyskała dostęp do Bałtyku. Na zdobytym terenie powstał Petersburg, do którego przeniesiono stolicę."
  },
  {
    "id": "R04_POT_12",
    "section": "Nowe potęgi europejskie",
    "type": "riddle",
    "prompt": "Miasto założone przez Piotra I, zbudowane na podmokłym terenie i połączone setkami mostów, nazywane jest Wenecją Północy. To...",
    "options": null,
    "answer": "Petersburg",
    "explanation": "Petersburg przecina sieć kanałów, a jego części łączą setki mostów, dlatego miasto bywa nazywane Wenecją Północy.",
    "altAnswers": [
      "Petersburg",
      "Sankt Petersburg",
      "Sankt-Petersburg"
    ]
  },
  {
    "id": "R04_USA_01",
    "section": "Stany Zjednoczone Ameryki",
    "type": "single_choice",
    "prompt": "Ile angielskich kolonii powstało na wschodnim wybrzeżu Ameryki Północnej przed wojną o niepodległość?",
    "options": [
      "9",
      "11",
      "13",
      "15",
      "17",
      "21"
    ],
    "answer": 2,
    "explanation": "Na wschodnim wybrzeżu Ameryki Północnej powstało 13 angielskich kolonii."
  },
  {
    "id": "R04_USA_02",
    "section": "Stany Zjednoczone Ameryki",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny narastania konfliktu między Wielką Brytanią a koloniami w Ameryce Północnej.",
    "options": [
      "podwyższanie ceł i obciążanie kolonistów opłatami",
      "zakaz produkcji wielu towarów w koloniach",
      "ograniczanie swobody handlu",
      "nadanie koloniom pełnej niezależności",
      "nakładanie podatków przez parlament bez przedstawicieli kolonii",
      "wycofanie wojsk brytyjskich z kolonii"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Kolonistów oburzały ograniczenia handlu, zakazy produkcji, obciążenia celne oraz brak ich przedstawicieli w parlamencie nakładającym podatki."
  },
  {
    "id": "R04_USA_03",
    "section": "Stany Zjednoczone Ameryki",
    "type": "scenario",
    "prompt": "W grudniu 1773 roku grupa członków Synów Wolności, przebrana za Indian, weszła na brytyjskie statki w porcie i wrzuciła do wody setki skrzyń herbaty. Jak nazywa się to wydarzenie?",
    "options": [
      "Bitwa pod Saratogą",
      "Masakra bostońska",
      "Kongres Kontynentalny",
      "Bostońskie picie herbaty",
      "Kapitulacja pod Yorktown",
      "Bitwa pod Lexington"
    ],
    "answer": 3,
    "explanation": "Było to bostońskie picie herbaty, symboliczny protest przeciw polityce brytyjskiej i uprzywilejowaniu Kompanii Wschodnioindyjskiej.",
    "image": "r04_bostonskie_picie_herbaty.jpg"
  },
  {
    "id": "R04_USA_04",
    "section": "Stany Zjednoczone Ameryki",
    "type": "true_false",
    "prompt": "Pierwszy Kongres Kontynentalny zebrał się w Filadelfii w 1774 roku i uznał, że parlament brytyjski nie może sprawować władzy nad koloniami.",
    "options": null,
    "answer": true,
    "explanation": "We wrześniu 1774 roku przedstawiciele kolonii spotkali się w Filadelfii i zakwestionowali prawo brytyjskiego parlamentu do rządzenia koloniami."
  },
  {
    "id": "R04_USA_05",
    "section": "Stany Zjednoczone Ameryki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wojny i drogi do niepodległości Stanów Zjednoczonych w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "Bostońskie picie herbaty",
      "Pierwsze strzały pod Lexington",
      "Uchwalenie Deklaracji niepodległości",
      "Kapitulacja Brytyjczyków pod Yorktown",
      "Pokój uznający niepodległość Stanów Zjednoczonych"
    ],
    "explanation": "Bostońskie picie herbaty miało miejsce w 1773 roku, walki pod Lexington w 1775 roku, Deklarację uchwalono w 1776 roku, Yorktown było w 1781 roku, a pokój podpisano w 1783 roku.",
    "items": [
      "Kapitulacja Brytyjczyków pod Yorktown",
      "Uchwalenie Deklaracji niepodległości",
      "Bostońskie picie herbaty",
      "Pokój uznający niepodległość Stanów Zjednoczonych",
      "Pierwsze strzały pod Lexington"
    ]
  },
  {
    "id": "R04_USA_06",
    "section": "Stany Zjednoczone Ameryki",
    "type": "single_choice",
    "prompt": "Kiedy uchwalono Deklarację niepodległości Stanów Zjednoczonych?",
    "options": [
      "19 kwietnia 1775 roku",
      "4 lipca 1776 roku",
      "16 grudnia 1773 roku",
      "1 stycznia 1781 roku",
      "4 lipca 1783 roku",
      "17 września 1787 roku"
    ],
    "answer": 1,
    "explanation": "Przedstawiciele kolonistów uchwalili Deklarację niepodległości 4 lipca 1776 roku.",
    "image": "r04_waszyngton.jpg"
  },
  {
    "id": "R04_USA_07",
    "section": "Stany Zjednoczone Ameryki",
    "type": "match",
    "prompt": "Połącz miejsce z wydarzeniem.",
    "options": null,
    "answer": {
      "Boston": "bostońskie picie herbaty",
      "Lexington": "pierwsze strzały wojny o niepodległość",
      "Saratoga": "ważne zwycięstwo wojsk amerykańskich",
      "Yorktown": "kapitulacja armii brytyjskiej w 1781 roku"
    },
    "explanation": "Boston kojarzy się z protestem herbacianym, Lexington z początkiem walk, Saratoga z ważnym zwycięstwem Amerykanów, a Yorktown z decydującą kapitulacją Brytyjczyków.",
    "left": [
      "Boston",
      "Lexington",
      "Saratoga",
      "Yorktown"
    ],
    "right": [
      "ważne zwycięstwo wojsk amerykańskich",
      "kapitulacja armii brytyjskiej w 1781 roku",
      "pierwsze strzały wojny o niepodległość",
      "bostońskie picie herbaty"
    ],
    "image": "r04_kapitulacja_yorktown.jpg"
  },
  {
    "id": "R04_USA_08",
    "section": "Stany Zjednoczone Ameryki",
    "type": "fill_in",
    "prompt": "Po stronie Stanów Zjednoczonych do wojny przeciw Wielkiej Brytanii przystąpiły __________, __________ i __________.",
    "options": null,
    "answer": [
      "Francja",
      "Hiszpania",
      "Holandia"
    ],
    "explanation": "Wrogowie Wielkiej Brytanii - Francja, Hiszpania i Holandia - wsparli Stany Zjednoczone w wojnie o niepodległość.",
    "altAnswers": [
      [
        "Francja",
        "Francji"
      ],
      [
        "Hiszpania",
        "Hiszpanii"
      ],
      [
        "Holandia",
        "Holandii"
      ]
    ]
  },
  {
    "id": "R04_USA_09",
    "section": "Stany Zjednoczone Ameryki",
    "type": "multi_select",
    "prompt": "Zaznacz rozwiązania wprowadzone przez Konstytucję Stanów Zjednoczonych z 1787 roku.",
    "options": [
      "ustrój republiki",
      "trójpodział władzy",
      "dziedziczny urząd prezydenta",
      "wolność słowa i wyznania",
      "nietykalność osobista",
      "wybieranie władz"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Konstytucja ustanowiła republikę, wybieralne władze i trójpodział władzy oraz gwarantowała wolność słowa, wyznania i nietykalność osobistą."
  },
  {
    "id": "R04_USA_10",
    "section": "Stany Zjednoczone Ameryki",
    "type": "sort",
    "prompt": "Przyporządkuj elementy ustroju Stanów Zjednoczonych do właściwej władzy.",
    "options": null,
    "answer": {
      "ustawodawcza": [
        "Kongres",
        "Senat",
        "Izba Reprezentantów"
      ],
      "wykonawcza": [
        "prezydent",
        "kierowanie dyplomacją i administracją"
      ],
      "sądownicza": [
        "niezależne sądy"
      ]
    },
    "explanation": "Konstytucja rozdzieliła władzę między Kongres, prezydenta i niezależne sądy zgodnie z zasadą trójpodziału.",
    "items": [
      "prezydent",
      "Kongres",
      "niezależne sądy",
      "Izba Reprezentantów",
      "kierowanie dyplomacją i administracją",
      "Senat"
    ],
    "categories": [
      "ustawodawcza",
      "wykonawcza",
      "sądownicza"
    ]
  },
  {
    "id": "R04_USA_11",
    "section": "Stany Zjednoczone Ameryki",
    "type": "riddle",
    "prompt": "Polski inżynier wojskowy, który budował fortyfikacje między innymi pod Saratogą i w West Point, to...",
    "options": null,
    "answer": "Tadeusz Kościuszko",
    "explanation": "Tadeusz Kościuszko służył po stronie amerykańskiej jako inżynier wojskowy i odpowiadał za budowę umocnień.",
    "image": "r04_kosciuszko_pulaski.jpg",
    "altAnswers": [
      "Tadeusz Kościuszko",
      "Tadeusz Kosciuszko",
      "Kościuszko",
      "Kosciuszko"
    ]
  },
  {
    "id": "R04_USA_12",
    "section": "Stany Zjednoczone Ameryki",
    "type": "scenario",
    "prompt": "Polski dowódca przybywa do Stanów Zjednoczonych, tworzy legion specjalizujący się w zwiadach i wojnie podjazdowej, ratuje Jerzego Waszyngtona, a później ginie pod Savannah. Kto to?",
    "options": [
      "Kazimierz Pułaski",
      "Tadeusz Kościuszko",
      "La Fayette",
      "Samuel Adams",
      "John Trumbull",
      "Edmund Burke"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy Kazimierza Pułaskiego, jednego z najsłynniejszych polskich bohaterów wojny o niepodległość Stanów Zjednoczonych.",
    "image": "r04_kosciuszko_pulaski.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niepasującą do pozostałych: Ludwik XIV, Armand Richelieu, Jean-Baptiste Colbert, Wilhelm III Orański.",
    "options": null,
    "answer": "Wilhelm III Orański",
    "explanation": "Ludwik XIV, Richelieu i Colbert są związani z budową francuskiej monarchii absolutnej. Wilhelm III Orański był władcą Anglii po wprowadzeniu monarchii parlamentarnej."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niepasującą do pozostałych: Karol I Stuart, Oliver Cromwell, Jakub II, Jan Jakub Rousseau.",
    "options": null,
    "answer": "Jan Jakub Rousseau",
    "explanation": "Karol I, Cromwell i Jakub II są bezpośrednio związani z XVII-wiecznymi przemianami ustrojowymi w Anglii. Rousseau był filozofem oświecenia."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niepasującą do pozostałych: Monteskiusz, Jan Jakub Rousseau, Denis Diderot, Juliusz Mazarin.",
    "options": null,
    "answer": "Juliusz Mazarin",
    "explanation": "Monteskiusz, Rousseau i Diderot należeli do świata oświecenia. Mazarin był pierwszym ministrem Francji w okresie małoletności Ludwika XIV."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niepasującą do pozostałych: Fryderyk II Wielki, Józef II, Piotr I Wielki, Jerzy Waszyngton.",
    "options": null,
    "answer": "Jerzy Waszyngton",
    "explanation": "Fryderyk II, Józef II i Piotr I byli monarchami kojarzonymi z reformami wzmacniającymi Prusy, Austrię i Rosję. Waszyngton był dowódcą wojsk amerykańskich i pierwszym prezydentem USA."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dokument z rokiem.",
    "options": null,
    "answer": {
      "Edykt nantejski": "1598",
      "Deklaracja praw narodu angielskiego": "1689",
      "Deklaracja niepodległości Stanów Zjednoczonych": "1776",
      "Konstytucja Stanów Zjednoczonych": "1787"
    },
    "explanation": "Te cztery dokumenty wyznaczają ważne etapy przemian politycznych od końca XVI do końca XVIII wieku.",
    "left": [
      "Edykt nantejski",
      "Deklaracja praw narodu angielskiego",
      "Deklaracja niepodległości Stanów Zjednoczonych",
      "Konstytucja Stanów Zjednoczonych"
    ],
    "right": [
      "1787",
      "1598",
      "1776",
      "1689"
    ]
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Wydanie Edyktu nantejskiego",
      "Egzekucja Karola I Stuarta",
      "Uchwalenie Deklaracji praw narodu angielskiego",
      "Powstanie Królestwa Prus",
      "Uchwalenie Deklaracji niepodległości USA",
      "Uchwalenie Konstytucji USA"
    ],
    "explanation": "Daty tych wydarzeń to kolejno 1598, 1649, 1689, 1701, 1776 i 1787.",
    "items": [
      "Powstanie Królestwa Prus",
      "Uchwalenie Konstytucji USA",
      "Egzekucja Karola I Stuarta",
      "Wydanie Edyktu nantejskiego",
      "Uchwalenie Deklaracji niepodległości USA",
      "Uchwalenie Deklaracji praw narodu angielskiego"
    ]
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Dwór Ludwika XIV liczył około __________ ludzi, jego utrzymanie pochłaniało około __________ procent rocznych dochodów królestwa, a francuska armia liczyła około __________ żołnierzy.",
    "options": null,
    "answer": [
      "10 tysięcy",
      "10",
      "250 tysięcy"
    ],
    "explanation": "Wersalska świta liczyła około 10 tysięcy osób i pochłaniała około 10 procent rocznych dochodów, a armia Francji miała około 250 tysięcy żołnierzy.",
    "image": "r04_wersal.jpg",
    "altAnswers": [
      [
        "10 tysięcy",
        "10 000",
        "10000"
      ],
      [
        "10",
        "10%",
        "10 procent"
      ],
      [
        "250 tysięcy",
        "250 000",
        "250000"
      ]
    ]
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz działania, które wzmacniały kontrolę monarchy nad wpływowymi grupami lub instytucjami.",
    "options": [
      "przekazanie części uprawnień arystokracji królewskim urzędnikom przez Richelieu",
      "nakaz zamieszkania najważniejszych arystokratów w Wersalu",
      "ograniczenie wpływów Kościoła przez Józefa II",
      "podporządkowanie Cerkwi carowi przez Piotra I",
      "oddanie poboru podatków arystokracji przez Ludwika XIV",
      "przekazanie sądom pełnej kontroli nad armią"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Richelieu ograniczał uprawnienia arystokracji, Ludwik XIV kontrolował ją w Wersalu, Józef II ograniczał wpływy Kościoła, a Piotr I podporządkował sobie Cerkiew."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który władca pisał, że panujący jest \"pierwszym sługą\" swoich poddanych i powinien stawiać ich dobrobyt ponad wszystko?",
    "options": [
      "Ludwik XIV",
      "Karol I Stuart",
      "Piotr I Wielki",
      "Fryderyk II Wielki",
      "Wilhelm III Orański",
      "Jerzy Waszyngton"
    ],
    "answer": 3,
    "explanation": "Tak przedstawiał ideał monarchy absolutyzmu oświeconego Fryderyk II Wielki.",
    "image": "r04_fryderyk_ii.jpg"
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym autorem albo ustrojem.",
    "options": null,
    "answer": {
      "trójpodział władzy": "Monteskiusz",
      "umowa społeczna": "Jan Jakub Rousseau",
      "Król panuje, ale nie rządzi": "monarchia parlamentarna",
      "pierwszy sługa poddanych": "absolutyzm oświecony"
    },
    "explanation": "Trójpodział kojarzy się z Monteskiuszem, umowa społeczna z Rousseau, zasada ograniczonej roli monarchy z monarchią parlamentarną, a idea służby poddanym z absolutyzmem oświeconym.",
    "left": [
      "trójpodział władzy",
      "umowa społeczna",
      "Król panuje, ale nie rządzi",
      "pierwszy sługa poddanych"
    ],
    "right": [
      "monarchia parlamentarna",
      "Jan Jakub Rousseau",
      "absolutyzm oświecony",
      "Monteskiusz"
    ]
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące do wojny o niepodległość USA w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "Powstanie stowarzyszenia Synowie Wolności",
      "Strzały brytyjskich żołnierzy do demonstrantów w Bostonie",
      "Bostońskie picie herbaty",
      "Pierwszy Kongres Kontynentalny",
      "Pierwsze strzały pod Lexington",
      "Uchwalenie Deklaracji niepodległości"
    ],
    "explanation": "Synowie Wolności powstali w 1765 roku, strzelanina w Bostonie miała miejsce w 1770 roku, protest herbaciany w 1773 roku, Kongres w 1774 roku, Lexington w 1775 roku, a Deklaracja w 1776 roku.",
    "items": [
      "Uchwalenie Deklaracji niepodległości",
      "Bostońskie picie herbaty",
      "Pierwsze strzały pod Lexington",
      "Powstanie stowarzyszenia Synowie Wolności",
      "Pierwszy Kongres Kontynentalny",
      "Strzały brytyjskich żołnierzy do demonstrantów w Bostonie"
    ]
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Polski dowódca, który zginął w bitwie pod Savannah w 1779 roku, to...",
    "options": null,
    "answer": "Kazimierz Pułaski",
    "explanation": "Kazimierz Pułaski walczył po stronie amerykańskiej, utworzył legion i zginął pod Savannah.",
    "image": "r04_kosciuszko_pulaski.jpg",
    "altAnswers": [
      "Kazimierz Pułaski",
      "Kazimierz Pulaski",
      "Pułaski",
      "Pulaski"
    ]
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Monarcha zachowuje pełnię władzy, znosi tortury, dopuszcza pewną wolność wyznania i twierdzi, że rządzi dla dobra poddanych. Jak nazywa się taki model rządów?",
    "options": [
      "monarchia parlamentarna",
      "absolutyzm oświecony",
      "republika",
      "demokracja bezpośrednia",
      "monarchia stanowa",
      "dyktatura Cromwella"
    ],
    "answer": 1,
    "explanation": "To absolutyzm oświecony: pełnia władzy pozostaje w rękach monarchy, ale reformy są uzasadniane dobrem poddanych i ideami oświecenia."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe zestawienia liczb i faktów.",
    "options": [
      "35 tomów - Wielka encyklopedia francuska",
      "342 skrzynie - herbata zniszczona w Bostonie",
      "50 tomów - Wielka encyklopedia francuska",
      "13 kolonii - początki Stanów Zjednoczonych",
      "4 lata - kadencja prezydenta USA",
      "8 lat - kadencja prezydenta USA"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Wielka encyklopedia liczyła 35 tomów, w Bostonie zniszczono 342 skrzynie herbaty, pierwszych kolonii było 13, a kadencja prezydenta USA trwała cztery lata."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które dwa rodzaje wydatków przyczyniły się pod koniec rządów Ludwika XIV do kryzysu gospodarczego i zubożenia społeczeństwa?",
    "options": [
      "armia i dwór wersalski",
      "szkoły i szpitale",
      "flota handlowa i uniwersytety",
      "sądy i parlament",
      "kolonie amerykańskie i Kongres",
      "kopalnie i kanały"
    ],
    "answer": 0,
    "explanation": "Gospodarkę Francji obciążały ogromne wydatki na armię oraz wystawne życie dworu w Wersalu.",
    "image": "r04_wersal.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Od absolutyzmu do republiki",
  icon: "⚖️",
  sectionOrder: [
    "Monarchia absolutna we Francji",
    "Monarchia parlamentarna w Anglii",
    "Oświecenie w Europie",
    "Nowe potęgi europejskie",
    "Stany Zjednoczone Ameryki"
  ],
  sectionIcons: {
    "Monarchia absolutna we Francji": "👑",
    "Monarchia parlamentarna w Anglii": "🏛️",
    "Oświecenie w Europie": "💡",
    "Nowe potęgi europejskie": "🦅",
    "Stany Zjednoczone Ameryki": "🇺🇸"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
