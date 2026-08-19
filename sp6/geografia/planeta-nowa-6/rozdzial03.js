// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie i rzeźba Europy
//   ISL  = Islandia, wulkany i litosfera
//   KLI  = Klimat i roślinność Europy
//   PAN  = Państwa i Unia Europejska
//   LUD  = Ludność, migracje i miasta
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_POL_01",
    "section": "Położenie i rzeźba Europy",
    "type": "single_choice",
    "prompt": "Na której półkuli leży Europa w całości?",
    "options": [
      "północnej",
      "południowej",
      "zachodniej",
      "wschodniej tylko",
      "południowo-zachodniej",
      "równikowej"
    ],
    "answer": 0,
    "explanation": "Europa leży w całości na półkuli północnej. Przeważająca część kontynentu znajduje się też na półkuli wschodniej."
  },
  {
    "id": "R03_POL_02",
    "section": "Położenie i rzeźba Europy",
    "type": "multi_select",
    "prompt": "Zaznacz akweny jako oblewające Europę albo oddzielające ją od Afryki.",
    "options": [
      "Ocean Arktyczny",
      "Ocean Atlantycki",
      "Morze Śródziemne",
      "Ocean Indyjski",
      "Morze Czerwone",
      "Ocean Spokojny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_ciesnina_gibraltarska.jpg",
    "explanation": "Od północy Europę oblewa Ocean Arktyczny, od zachodu Ocean Atlantycki, a od Afryki oddziela ją Morze Śródziemne."
  },
  {
    "id": "R03_POL_03",
    "section": "Położenie i rzeźba Europy",
    "type": "fill_in",
    "prompt": "Umowna granica między Europą a Azją przebiega u podnóży __________ i __________.",
    "options": null,
    "answer": [
      "Uralu",
      "Kaukazu"
    ],
    "altAnswers": [
      [
        "Uralu",
        "Ural"
      ],
      [
        "Kaukazu",
        "Kaukaz"
      ]
    ],
    "explanation": "Granica między Europą a Azją biegnie wschodnim podnóżem Uralu, a dalej północnym podnóżem Kaukazu."
  },
  {
    "id": "R03_POL_04",
    "section": "Położenie i rzeźba Europy",
    "type": "true_false",
    "prompt": "Cieśnina Gibraltarska łączy Ocean Atlantycki z Morzem Śródziemnym.",
    "options": null,
    "answer": true,
    "image": "r03_ciesnina_gibraltarska.jpg",
    "explanation": "Cieśnina Gibraltarska łączy Ocean Atlantycki z Morzem Śródziemnym; w tym miejscu Europa znajduje się tylko 14 km od Afryki."
  },
  {
    "id": "R03_POL_05",
    "section": "Położenie i rzeźba Europy",
    "type": "single_choice",
    "prompt": "Który z wymienionych półwyspów należy do największych półwyspów Europy?",
    "options": [
      "Półwysep Skandynawski",
      "Półwysep Arabski",
      "Półwysep Indyjski",
      "Półwysep Labrador",
      "Półwysep Somalijski",
      "Półwysep Jukatan"
    ],
    "answer": 0,
    "image": "r03_fiordy_i_wyspy.jpg",
    "explanation": "Do największych europejskich półwyspów należą Półwysep Skandynawski, Półwysep Iberyjski i Półwysep Bałkański."
  },
  {
    "id": "R03_POL_06",
    "section": "Położenie i rzeźba Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie jest jedną z trzech największych wysp Europy: Wielka Brytania, Islandia, Irlandia, Sardynia.",
    "options": null,
    "answer": "Sardynia",
    "image": "r03_fiordy_i_wyspy.jpg",
    "explanation": "Największe europejskie wyspy to Wielka Brytania, Islandia i Irlandia. Sardynia nie należy do tej trójki."
  },
  {
    "id": "R03_POL_07",
    "section": "Położenie i rzeźba Europy",
    "type": "riddle",
    "prompt": "Na której nizinie leży najniższy punkt Europy, depresja położona 28 m p.p.m.?",
    "options": null,
    "answer": "Nizina Nadkaspijska",
    "altAnswers": [
      "Nizina Nadkaspijska",
      "Nadkaspijska",
      "Nizinie Nadkaspijskiej"
    ],
    "explanation": "Najniższy punkt Europy leży na Nizinie Nadkaspijskiej i znajduje się 28 m poniżej poziomu morza."
  },
  {
    "id": "R03_POL_08",
    "section": "Położenie i rzeźba Europy",
    "type": "match",
    "prompt": "Połącz formę ukształtowania powierzchni z przykładem.",
    "options": null,
    "left": [
      "nizina",
      "góry",
      "wyżyna"
    ],
    "right": [
      "Nizina Wschodnioeuropejska",
      "Alpy",
      "Wyżyna Bawarska"
    ],
    "answer": {
      "nizina": "Nizina Wschodnioeuropejska",
      "góry": "Alpy",
      "wyżyna": "Wyżyna Bawarska"
    },
    "image": "r03_alpy_i_nizina.jpg",
    "explanation": "Nizina Wschodnioeuropejska jest przykładem niziny, Alpy są łańcuchem górskim, a Wyżyna Bawarska przykładem wyżyny."
  },
  {
    "id": "R03_POL_09",
    "section": "Położenie i rzeźba Europy",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do form ukształtowania powierzchni Europy.",
    "options": null,
    "items": [
      "Nizina Francuska",
      "Karpaty",
      "Wyżyna Bawarska",
      "Nizina Środkowoeuropejska",
      "Pireneje",
      "Wyżyna Środkoworosyjska"
    ],
    "categories": [
      "niziny",
      "góry",
      "wyżyny"
    ],
    "answer": {
      "niziny": [
        "Nizina Francuska",
        "Nizina Środkowoeuropejska"
      ],
      "góry": [
        "Karpaty",
        "Pireneje"
      ],
      "wyżyny": [
        "Wyżyna Bawarska",
        "Wyżyna Środkoworosyjska"
      ]
    },
    "image": "r03_alpy_i_nizina.jpg",
    "explanation": "Nizina Francuska i Nizina Środkowoeuropejska to niziny, Karpaty i Pireneje to góry, a Wyżyna Bawarska i Wyżyna Środkoworosyjska to wyżyny."
  },
  {
    "id": "R03_POL_10",
    "section": "Położenie i rzeźba Europy",
    "type": "scenario",
    "prompt": "Na mapie Europy uczeń widzi, że rozległe obszary oznaczone jako tereny poniżej 300 m n.p.m. zajmują szczególnie wschód kontynentu. Jak nazywa się taka forma terenu?",
    "options": [
      "niziny",
      "wyżyny",
      "góry",
      "lodowce",
      "wulkany",
      "fiordy"
    ],
    "answer": 0,
    "explanation": "Obszary położone poniżej 300 m n.p.m. to niziny. W Europie zajmują prawie trzy czwarte powierzchni kontynentu."
  },
  {
    "id": "R03_POL_11",
    "section": "Położenie i rzeźba Europy",
    "type": "true_false",
    "prompt": "Góry Skandynawskie są wskazane jako większy łańcuch górski położony na północy Europy.",
    "options": null,
    "answer": true,
    "image": "r03_alpy_i_nizina.jpg",
    "explanation": "Większość dużych łańcuchów górskich Europy leży na południu kontynentu. Góry Skandynawskie są wyjątkiem, ponieważ leżą na północy."
  },
  {
    "id": "R03_POL_12",
    "section": "Położenie i rzeźba Europy",
    "type": "sequence",
    "prompt": "Ułóż elementy umownej granicy Europy i Azji w kolejności.",
    "options": null,
    "items": [
      "Morze Kaspijskie",
      "Morze Czarne",
      "wschodnie podnóże Uralu",
      "północne podnóże Kaukazu"
    ],
    "answer": [
      "wschodnie podnóże Uralu",
      "Morze Kaspijskie",
      "północne podnóże Kaukazu",
      "Morze Czarne"
    ],
    "explanation": "Umowna granica Europy z Azją biegnie od wschodniego podnóża Uralu do Morza Kaspijskiego, potem północnym podnóżem Kaukazu do Morza Czarnego."
  },
  {
    "id": "R03_ISL_01",
    "section": "Islandia, wulkany i litosfera",
    "type": "riddle",
    "prompt": "Jak nazywa się zewnętrzna, sztywna, zbudowana ze skał powłoka Ziemi?",
    "options": null,
    "answer": "litosfera",
    "altAnswers": [
      "litosfera",
      "litosferą"
    ],
    "explanation": "Litosfera to zewnętrzna, sztywna powłoka Ziemi zbudowana ze skał. Składa się z płyt litosfery."
  },
  {
    "id": "R03_ISL_02",
    "section": "Islandia, wulkany i litosfera",
    "type": "single_choice",
    "prompt": "Między którymi płytami litosfery przebiega granica przez środek Islandii?",
    "options": [
      "północnoamerykańską i eurazjatycką",
      "afrykańską i pacyficzną",
      "antarktyczną i arabską",
      "filipińską i indyjską",
      "południowoamerykańską i afrykańską",
      "australijską i antarktyczną"
    ],
    "answer": 0,
    "image": "r03_kraina_lawy_islandia.jpg",
    "explanation": "Przez środek Islandii przebiega granica między rozsuwającymi się płytami: północnoamerykańską i eurazjatycką."
  },
  {
    "id": "R03_ISL_03",
    "section": "Islandia, wulkany i litosfera",
    "type": "true_false",
    "prompt": "Ruch płyt litosfery odbywa się bardzo wolno, około kilku centymetrów na rok.",
    "options": null,
    "answer": true,
    "explanation": "Płyty litosfery unoszą się na przemieszczającej się magmie i przesuwają bardzo wolno, około kilku centymetrów rocznie."
  },
  {
    "id": "R03_ISL_04",
    "section": "Islandia, wulkany i litosfera",
    "type": "fill_in",
    "prompt": "Magma od momentu wypłynięcia na powierzchnię jest nazywana __________.",
    "options": null,
    "answer": [
      "lawą"
    ],
    "altAnswers": [
      [
        "lawą",
        "lawa"
      ]
    ],
    "explanation": "Pod litosferą znajduje się magma. Kiedy wypływa ona na powierzchnię, nazywamy ją lawą."
  },
  {
    "id": "R03_ISL_05",
    "section": "Islandia, wulkany i litosfera",
    "type": "single_choice",
    "prompt": "Jaka czarna skała, powstająca z szybko krzepnącej lawy, pokrywa większość obszaru Islandii?",
    "options": [
      "bazalt",
      "węgiel kamienny",
      "piaskowiec",
      "wapień",
      "granit",
      "sól kamienna"
    ],
    "answer": 0,
    "image": "r03_kraina_lawy_islandia.jpg",
    "explanation": "Z szybko krzepnącej lawy powstaje bazalt. Ta czarna skała pokrywa większość obszaru Islandii."
  },
  {
    "id": "R03_ISL_06",
    "section": "Islandia, wulkany i litosfera",
    "type": "multi_select",
    "prompt": "Zaznacz czynne wulkany Islandii.",
    "options": [
      "Hekla",
      "Laki",
      "Eyjafjallajökull",
      "Etna",
      "Wezuwiusz",
      "Barðarbunga",
      "Sundhnukur"
    ],
    "answer": [
      0,
      1,
      2,
      5,
      6
    ],
    "image": "r03_gejzer_i_wulkan.jpg",
    "explanation": "Do czynnych wulkanów Islandii należą m.in. Hekla, Laki, Eyjafjallajökull, Barðarbunga i Sundhnukur."
  },
  {
    "id": "R03_ISL_07",
    "section": "Islandia, wulkany i litosfera",
    "type": "scenario",
    "prompt": "Turysta na Islandii obserwuje gejzer, który co kilka minut wyrzuca wrzącą wodę na wysokość około 30 m. Jaka nazwa pojawia się przy tym przykładzie?",
    "options": [
      "Strokkur",
      "Hekla",
      "Laki",
      "Vatnajökull",
      "Landmannalaugar",
      "Seljalandsfoss"
    ],
    "answer": 0,
    "image": "r03_gejzer_i_wulkan.jpg",
    "explanation": "Strokkur to gejzer, który co kilka minut wyrzuca wodę na wysokość około 30 m."
  },
  {
    "id": "R03_ISL_08",
    "section": "Islandia, wulkany i litosfera",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do krajobrazu Islandii: gejzery, gorące źródła, wulkany, pustynia piaszczysta.",
    "options": null,
    "answer": "pustynia piaszczysta",
    "image": "r03_kraina_lawy_islandia.jpg",
    "explanation": "Krajobraz Islandii tworzą m.in. wulkany, gejzery, gorące źródła, wodospady i lodowce. Pustynia piaszczysta nie jest tam podana jako charakterystyczny element."
  },
  {
    "id": "R03_ISL_09",
    "section": "Islandia, wulkany i litosfera",
    "type": "match",
    "prompt": "Połącz islandzki obiekt z opisem.",
    "options": null,
    "left": [
      "Hekla",
      "Strokkur",
      "Eyjafjallajökull",
      "Vatnajökull"
    ],
    "right": [
      "stożek wulkaniczny niemal 1500 m n.p.m.",
      "gejzer wyrzucający wodę około 30 m",
      "wulkan którego wybuch w 2010 r. wstrzymał loty",
      "lodowiec przykrywający kilka wulkanów"
    ],
    "answer": {
      "Hekla": "stożek wulkaniczny niemal 1500 m n.p.m.",
      "Strokkur": "gejzer wyrzucający wodę około 30 m",
      "Eyjafjallajökull": "wulkan którego wybuch w 2010 r. wstrzymał loty",
      "Vatnajökull": "lodowiec przykrywający kilka wulkanów"
    },
    "image": "r03_gejzer_i_wulkan.jpg",
    "explanation": "Do charakterystycznych elementów Islandii należą wulkany, gejzery i lodowce."
  },
  {
    "id": "R03_ISL_10",
    "section": "Islandia, wulkany i litosfera",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do miejsca, w którym występują w opisie wulkanizmu.",
    "options": null,
    "items": [
      "magma",
      "strumienie magmy",
      "lawa",
      "bazalt",
      "stożek wulkaniczny"
    ],
    "categories": [
      "pod litosferą",
      "na powierzchni"
    ],
    "answer": {
      "pod litosferą": [
        "magma",
        "strumienie magmy"
      ],
      "na powierzchni": [
        "lawa",
        "bazalt",
        "stożek wulkaniczny"
      ]
    },
    "image": "r03_kraina_lawy_islandia.jpg",
    "explanation": "Magma znajduje się pod litosferą. Po wydostaniu się na powierzchnię jest lawą, z której może powstać bazalt i stożek wulkaniczny."
  },
  {
    "id": "R03_ISL_11",
    "section": "Islandia, wulkany i litosfera",
    "type": "true_false",
    "prompt": "Trzęsienia ziemi na Islandii mogą wynikać ze skokowego przemieszczania się sztywnych skał litosfery.",
    "options": null,
    "answer": true,
    "explanation": "Płyty litosfery nie przesuwają się płynnie, lecz skokowo. Gwałtownemu przemieszczeniu sztywnych skał towarzyszą drgania terenu, czyli trzęsienia ziemi."
  },
  {
    "id": "R03_ISL_12",
    "section": "Islandia, wulkany i litosfera",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania nowych skał w strefie rozsuwania się płyt litosfery.",
    "options": null,
    "items": [
      "lawa zastyga",
      "płyty litosfery rozsuwają się",
      "magma wydostaje się przez pęknięcie",
      "powstają nowe skały"
    ],
    "answer": [
      "płyty litosfery rozsuwają się",
      "magma wydostaje się przez pęknięcie",
      "lawa zastyga",
      "powstają nowe skały"
    ],
    "explanation": "W strefie rozsuwania płyt powstaje pęknięcie, przez które wydostaje się magma. Na powierzchni staje się lawą, a po zastygnięciu tworzy nowe skały."
  },
  {
    "id": "R03_KLI_01",
    "section": "Klimat i roślinność Europy",
    "type": "single_choice",
    "prompt": "W ilu strefach klimatycznych znajduje się Europa?",
    "options": [
      "w trzech",
      "w jednej",
      "w dwóch",
      "w czterech",
      "w pięciu",
      "w sześciu"
    ],
    "answer": 0,
    "explanation": "Europa znajduje się w trzech strefach klimatycznych: okołobiegunowej, umiarkowanej i podzwrotnikowej."
  },
  {
    "id": "R03_KLI_02",
    "section": "Klimat i roślinność Europy",
    "type": "true_false",
    "prompt": "Północne krańce Europy leżą w strefie klimatów podzwrotnikowych.",
    "options": null,
    "answer": false,
    "explanation": "Północne krańce Europy leżą w strefie klimatów okołobiegunowych. Strefa podzwrotnikowa obejmuje południową część kontynentu."
  },
  {
    "id": "R03_KLI_03",
    "section": "Klimat i roślinność Europy",
    "type": "fill_in",
    "prompt": "Przeważająca część Europy znajduje się w strefie klimatów __________.",
    "options": null,
    "answer": [
      "umiarkowanych"
    ],
    "altAnswers": [
      [
        "umiarkowanych",
        "umiarkowany"
      ]
    ],
    "explanation": "Większość Europy leży w strefie klimatów umiarkowanych, podzielonej na część chłodną i ciepłą."
  },
  {
    "id": "R03_KLI_04",
    "section": "Klimat i roślinność Europy",
    "type": "single_choice",
    "prompt": "Jaka roślinność występuje w południowej Europie, głównie w rejonie Morza Śródziemnego?",
    "options": [
      "makia",
      "tajga",
      "tundra",
      "stepy",
      "las mieszany",
      "lodowiec"
    ],
    "answer": 0,
    "image": "r03_makia_i_tajga.jpg",
    "explanation": "W południowej Europie, w strefie klimatów podzwrotnikowych, występują krzewiaste zarośla nazywane makią."
  },
  {
    "id": "R03_KLI_05",
    "section": "Klimat i roślinność Europy",
    "type": "multi_select",
    "prompt": "Zaznacz cechy klimatu morskiego w zachodniej Europie.",
    "options": [
      "łagodne zimy",
      "niezbyt upalne lata",
      "niska średnia roczna amplituda temperatury",
      "bardzo niskie roczne sumy opadów",
      "mroźne zimy",
      "gorące lata"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Klimat morski na zachodzie Europy cechuje się łagodnymi zimami, niezbyt upalnymi latami i niską średnią roczną amplitudą temperatury."
  },
  {
    "id": "R03_KLI_06",
    "section": "Klimat i roślinność Europy",
    "type": "riddle",
    "prompt": "Jak nazywa się ciepły prąd morski, który przyczynia się do ocieplenia klimatu Europy?",
    "options": null,
    "answer": "Prąd Północnoatlantycki",
    "altAnswers": [
      "Prąd Północnoatlantycki",
      "Północnoatlantycki",
      "prąd północnoatlantycki"
    ],
    "image": "r03_atlantyckie_wybrzeze.jpg",
    "explanation": "Ciepły Prąd Północnoatlantycki niesie wody z okolic zwrotnika Raka i ociepla klimat Europy."
  },
  {
    "id": "R03_KLI_07",
    "section": "Klimat i roślinność Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinność niepasującą do strefy klimatów umiarkowanych: tajga, lasy liściaste, lasy mieszane, makia.",
    "options": null,
    "answer": "makia",
    "image": "r03_makia_i_tajga.jpg",
    "explanation": "Tajga, lasy liściaste i lasy mieszane występują w strefie klimatów umiarkowanych. Makia jest roślinnością południowej Europy w strefie podzwrotnikowej."
  },
  {
    "id": "R03_KLI_08",
    "section": "Klimat i roślinność Europy",
    "type": "match",
    "prompt": "Połącz strefę lub odmianę klimatu z typową roślinnością.",
    "options": null,
    "left": [
      "klimaty okołobiegunowe",
      "klimaty umiarkowane chłodne",
      "klimat umiarkowany ciepły morski",
      "klimaty podzwrotnikowe"
    ],
    "right": [
      "tundra i lodowce",
      "tajga",
      "lasy liściaste",
      "makia"
    ],
    "answer": {
      "klimaty okołobiegunowe": "tundra i lodowce",
      "klimaty umiarkowane chłodne": "tajga",
      "klimat umiarkowany ciepły morski": "lasy liściaste",
      "klimaty podzwrotnikowe": "makia"
    },
    "image": "r03_makia_i_tajga.jpg",
    "explanation": "Łączy się klimat okołobiegunowy z tundrą i lodowcami, umiarkowany chłodny z tajgą, umiarkowany ciepły morski z lasami liściastymi, a podzwrotnikowy z makią."
  },
  {
    "id": "R03_KLI_09",
    "section": "Klimat i roślinność Europy",
    "type": "scenario",
    "prompt": "Miasto w zachodniej Europie ma łagodniejszy klimat niż miejscowość po drugiej stronie Atlantyku na podobnej szerokości geograficznej. Jaki czynnik to wyjaśnia?",
    "options": [
      "Prąd Północnoatlantycki",
      "lądolód skandynawski",
      "Nizina Nadkaspijska",
      "cieśnina Bosfor",
      "strefa tajgi",
      "wulkanizm Islandii"
    ],
    "answer": 0,
    "image": "r03_atlantyckie_wybrzeze.jpg",
    "explanation": "Ciepły Prąd Północnoatlantycki powoduje, że temperatura powietrza w zachodniej Europie jest wyższa niż na wschodnim wybrzeżu Ameryki Północnej opływanym przez prąd zimny."
  },
  {
    "id": "R03_KLI_10",
    "section": "Klimat i roślinność Europy",
    "type": "true_false",
    "prompt": "Wraz ze wzrostem wysokości bezwzględnej średnia roczna temperatura powietrza rośnie, a roczne sumy opadów maleją.",
    "options": null,
    "answer": false,
    "explanation": "Jest odwrotnie: wraz ze wzrostem wysokości bezwzględnej średnia roczna temperatura powietrza maleje, a roczne sumy opadów wzrastają."
  },
  {
    "id": "R03_KLI_11",
    "section": "Klimat i roślinność Europy",
    "type": "sort",
    "prompt": "Rozdziel cechy klimatu morskiego i kontynentalnego w strefie umiarkowanej Europy.",
    "options": null,
    "items": [
      "łagodne zimy",
      "niezbyt upalne lata",
      "niska amplituda temperatury",
      "gorące lata",
      "mroźne zimy",
      "wysoka amplituda temperatury",
      "niskie sumy opadów"
    ],
    "categories": [
      "klimat morski",
      "klimat kontynentalny"
    ],
    "answer": {
      "klimat morski": [
        "łagodne zimy",
        "niezbyt upalne lata",
        "niska amplituda temperatury"
      ],
      "klimat kontynentalny": [
        "gorące lata",
        "mroźne zimy",
        "wysoka amplituda temperatury",
        "niskie sumy opadów"
      ]
    },
    "explanation": "Na zachodzie Europy klimat morski łagodzi temperatury. Na wschodzie klimat kontynentalny ma większą amplitudę i niższe opady."
  },
  {
    "id": "R03_KLI_12",
    "section": "Klimat i roślinność Europy",
    "type": "sequence",
    "prompt": "Ułóż strefy i części stref klimatycznych Europy od północy ku południu.",
    "options": null,
    "items": [
      "klimaty umiarkowane ciepłe",
      "klimaty okołobiegunowe",
      "klimaty podzwrotnikowe",
      "klimaty umiarkowane chłodne"
    ],
    "answer": [
      "klimaty okołobiegunowe",
      "klimaty umiarkowane chłodne",
      "klimaty umiarkowane ciepłe",
      "klimaty podzwrotnikowe"
    ],
    "explanation": "Od północy ku południu w Europie przechodzi się od klimatów okołobiegunowych przez umiarkowane chłodne i umiarkowane ciepłe do podzwrotnikowych."
  },
  {
    "id": "R03_PAN_01",
    "section": "Państwa i Unia Europejska",
    "type": "single_choice",
    "prompt": "Ile państw leży w Europie?",
    "options": [
      "47",
      "27",
      "7",
      "15",
      "50",
      "72"
    ],
    "answer": 0,
    "explanation": "W Europie leży 47 państw. Ta liczba obejmuje także kraje, których większość terytorium jest w Azji, ale część leży w Europie."
  },
  {
    "id": "R03_PAN_02",
    "section": "Państwa i Unia Europejska",
    "type": "true_false",
    "prompt": "Kazachstan, Turcja i Rosja są uwzględnione w liczbie państw Europy, choć większość ich terytorium leży w Azji.",
    "options": null,
    "answer": true,
    "explanation": "Trzy państwa leżą częściowo w Europie: Kazachstan, Turcja i Rosja."
  },
  {
    "id": "R03_PAN_03",
    "section": "Państwa i Unia Europejska",
    "type": "riddle",
    "prompt": "Jak nazywa się najmniejsze państwo świata położone w Europie?",
    "options": null,
    "answer": "Watykan",
    "altAnswers": [
      "Watykan",
      "Państwo Watykańskie"
    ],
    "explanation": "Najmniejszym państwem świata jest Watykan, znajdujący się w Rzymie, stolicy Włoch."
  },
  {
    "id": "R03_PAN_04",
    "section": "Państwa i Unia Europejska",
    "type": "single_choice",
    "prompt": "Które państwo jest największe na kontynencie europejskim i jednocześnie największe na świecie?",
    "options": [
      "Rosja",
      "Ukraina",
      "Francja",
      "Hiszpania",
      "Szwecja",
      "Niemcy"
    ],
    "answer": 0,
    "explanation": "Największym państwem Europy i świata jest Rosja. Jej terytorium zajmuje ponad 17 mln km2."
  },
  {
    "id": "R03_PAN_05",
    "section": "Państwa i Unia Europejska",
    "type": "fill_in",
    "prompt": "W latach 80. XX wieku Polska graniczyła z Niemiecką Republiką Demokratyczną, Czechosłowacją i __________.",
    "options": null,
    "answer": [
      "Związkiem Sowieckim"
    ],
    "altAnswers": [
      [
        "Związkiem Sowieckim",
        "Związkiem Radzieckim",
        "ZSRR"
      ]
    ],
    "explanation": "Przed zmianami politycznymi końca XX wieku Polska miała trzech sąsiadów: NRD, Czechosłowację i Związek Sowiecki, zwany również Związkiem Radzieckim."
  },
  {
    "id": "R03_PAN_06",
    "section": "Państwa i Unia Europejska",
    "type": "multi_select",
    "prompt": "Zaznacz obecnych sąsiadów Polski.",
    "options": [
      "Niemcy",
      "Czechy",
      "Słowacja",
      "Ukraina",
      "Białoruś",
      "Litwa",
      "Rosja",
      "Węgry",
      "Estonia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "explanation": "Od końca XX wieku Polska ma siedmiu sąsiadów: Niemcy, Czechy, Słowację, Ukrainę, Białoruś, Litwę i Rosję."
  },
  {
    "id": "R03_PAN_07",
    "section": "Państwa i Unia Europejska",
    "type": "single_choice",
    "prompt": "Które państwo jest nazwane najmłodszym państwem Europy?",
    "options": [
      "Kosowo",
      "Słowacja",
      "Czarnogóra",
      "Ukraina",
      "Mołdawia",
      "Chorwacja"
    ],
    "answer": 0,
    "explanation": "Kosowo ogłosiło niepodległość w 2008 roku i jest nazwane najmłodszym państwem Europy."
  },
  {
    "id": "R03_PAN_08",
    "section": "Państwa i Unia Europejska",
    "type": "match",
    "prompt": "Połącz wydarzenie związane z integracją Europy z rokiem.",
    "options": null,
    "left": [
      "Europejska Wspólnota Węgla i Stali",
      "powstanie Unii Europejskiej",
      "wprowadzenie euro do obiegu",
      "wystąpienie Wielkiej Brytanii z UE"
    ],
    "right": [
      "1951",
      "1993",
      "2002",
      "2020"
    ],
    "answer": {
      "Europejska Wspólnota Węgla i Stali": "1951",
      "powstanie Unii Europejskiej": "1993",
      "wprowadzenie euro do obiegu": "2002",
      "wystąpienie Wielkiej Brytanii z UE": "2020"
    },
    "image": "r03_parlament_europejski.jpg",
    "explanation": "Europejska Wspólnota Węgla i Stali powstała w 1951 r., Unia Europejska w 1993 r., euro wprowadzono do obiegu w 2002 r., a Wielka Brytania wystąpiła z UE w 2020 r."
  },
  {
    "id": "R03_PAN_09",
    "section": "Państwa i Unia Europejska",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do zmian politycznych Europy albo do cech Unii Europejskiej.",
    "options": null,
    "items": [
      "rozpad Związku Sowieckiego",
      "rozpad Jugosławii",
      "połączenie dwóch państw niemieckich",
      "wspólne prawo",
      "własne instytucje",
      "swoboda przemieszczania się osób"
    ],
    "categories": [
      "zmiany polityczne",
      "cechy Unii Europejskiej"
    ],
    "answer": {
      "zmiany polityczne": [
        "rozpad Związku Sowieckiego",
        "rozpad Jugosławii",
        "połączenie dwóch państw niemieckich"
      ],
      "cechy Unii Europejskiej": [
        "wspólne prawo",
        "własne instytucje",
        "swoboda przemieszczania się osób"
      ]
    },
    "image": "r03_parlament_europejski.jpg",
    "explanation": "Rozpad Związku Sowieckiego, Jugosławii i połączenie państw niemieckich to zmiany polityczne końca XX wieku. Wspólne prawo, instytucje i swobody przemieszczania należą do cech UE."
  },
  {
    "id": "R03_PAN_10",
    "section": "Państwa i Unia Europejska",
    "type": "scenario",
    "prompt": "Uczeń chce studiować lub podjąć pracę w innym kraju członkowskim. Która cecha Unii Europejskiej najbardziej to ułatwia?",
    "options": [
      "swoboda przemieszczania się osób",
      "obecność lodowców",
      "granica na Uralu",
      "wysokie góry",
      "ruch płyt litosfery",
      "niska gęstość zaludnienia"
    ],
    "answer": 0,
    "image": "r03_parlament_europejski.jpg",
    "explanation": "Unia Europejska ułatwia współpracę gospodarczą m.in. dzięki swobodzie handlu i przemieszczania się osób, co pozwala podejmować pracę lub naukę w różnych krajach członkowskich."
  },
  {
    "id": "R03_PAN_11",
    "section": "Państwa i Unia Europejska",
    "type": "true_false",
    "prompt": "Unia Europejska otrzymała Pokojową Nagrodę Nobla w 2012 roku.",
    "options": null,
    "answer": true,
    "image": "r03_parlament_europejski.jpg",
    "explanation": "Unia Europejska może działać na rzecz pokoju na świecie i za tę działalność otrzymała Pokojową Nagrodę Nobla w 2012 roku."
  },
  {
    "id": "R03_PAN_12",
    "section": "Państwa i Unia Europejska",
    "type": "odd_one_out",
    "prompt": "Wskaż kraj, który nie jest obecnym sąsiadem Polski: Niemcy, Słowacja, Litwa, Austria.",
    "options": null,
    "answer": "Austria",
    "explanation": "Obecni sąsiedzi Polski wymienieni to Niemcy, Czechy, Słowacja, Ukraina, Białoruś, Litwa i Rosja. Austria nie jest na tej liście."
  },
  {
    "id": "R03_LUD_01",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "Ile osób żyje w Europie?",
    "options": [
      "około 745 mln",
      "około 4,8 mld",
      "około 1,5 mld",
      "około 8 mld",
      "około 34 mln",
      "około 13 mln"
    ],
    "answer": 0,
    "image": "r03_gesta_zabudowa_monako.jpg",
    "explanation": "W Europie żyje około 745 mln osób."
  },
  {
    "id": "R03_LUD_02",
    "section": "Ludność, migracje i miasta",
    "type": "riddle",
    "prompt": "Jak nazywa się liczba ludności przypadająca na jednostkę powierzchni danego obszaru?",
    "options": null,
    "answer": "gęstość zaludnienia",
    "altAnswers": [
      "gęstość zaludnienia",
      "gestosc zaludnienia"
    ],
    "image": "r03_gesta_zabudowa_monako.jpg",
    "explanation": "Gęstość zaludnienia to liczba ludności przypadająca na jednostkę powierzchni, wyrażana w osobach na kilometr kwadratowy."
  },
  {
    "id": "R03_LUD_03",
    "section": "Ludność, migracje i miasta",
    "type": "true_false",
    "prompt": "Średnia gęstość zaludnienia Europy wynosi 34 os./km2, jeśli liczy się Rosję razem z jej azjatycką częścią.",
    "options": null,
    "answer": true,
    "explanation": "Średnia gęstość zaludnienia Europy wynosi 34 os./km2 przy uwzględnieniu całej Rosji, także jej azjatyckiej części."
  },
  {
    "id": "R03_LUD_04",
    "section": "Ludność, migracje i miasta",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające większej gęstości zaludnienia w Europie.",
    "options": [
      "niziny",
      "łagodny klimat",
      "obszary surowców mineralnych i przemysłu",
      "wysokie góry",
      "surowy klimat północy",
      "pustynie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_gesta_zabudowa_monako.jpg",
    "explanation": "Większą gęstością zaludnienia odznaczają się niziny oraz obszary występowania surowców mineralnych, gdzie rozwinął się przemysł. Łagodny klimat także sprzyja zamieszkaniu."
  },
  {
    "id": "R03_LUD_05",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "W którym zestawie są tylko państwa północnej Europy o gęstości zaludnienia poniżej 20 os./km2?",
    "options": [
      "Islandia, Norwegia i Finlandia",
      "Belgia, Holandia i Malta",
      "Monako, Watykan i Malta",
      "Francja, Niemcy i Polska",
      "Hiszpania, Włochy i Grecja",
      "Ukraina, Litwa i Białoruś"
    ],
    "answer": 0,
    "explanation": "Najmniej osób na kilometr kwadratowy przypada w Islandii, Norwegii i Finlandii."
  },
  {
    "id": "R03_LUD_06",
    "section": "Ludność, migracje i miasta",
    "type": "fill_in",
    "prompt": "Społeczeństwo się starzeje, gdy coraz większą jego część stanowią __________, a coraz mniejszą __________.",
    "options": null,
    "answer": [
      "osoby starsze",
      "osoby młode"
    ],
    "altAnswers": [
      [
        "osoby starsze",
        "ludzie starsi"
      ],
      [
        "osoby młode",
        "ludzie młodzi"
      ]
    ],
    "explanation": "W społeczeństwie starzejącym się rośnie udział osób starszych, a maleje udział osób młodych."
  },
  {
    "id": "R03_LUD_07",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "Jaki kształt ma piramida płci i wieku społeczeństwa starzejącego się?",
    "options": [
      "jest szersza u góry niż u podstawy",
      "jest zawsze jednakowo szeroka",
      "jest szersza u podstawy niż u góry",
      "składa się tylko z jednej grupy wieku",
      "nie pokazuje kobiet",
      "nie pokazuje mężczyzn"
    ],
    "answer": 0,
    "explanation": "Wykres społeczeństwa starzejącego się jest szerszy u góry niż u podstawy, ponieważ więcej jest ludzi starszych."
  },
  {
    "id": "R03_LUD_08",
    "section": "Ludność, migracje i miasta",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie jest skutkiem starzenia się społeczeństwa: niższe dochody z podatków, większe wydatki na emerytury, większe wydatki na służbę zdrowia, spadek liczby emerytów.",
    "options": null,
    "answer": "spadek liczby emerytów",
    "explanation": "Starzenie społeczeństwa oznacza więcej osób pobierających emerytury, większe wydatki państwa i mniejsze dochody z podatków. Spadek liczby emerytów jest niezgodny z tym opisem."
  },
  {
    "id": "R03_LUD_09",
    "section": "Ludność, migracje i miasta",
    "type": "match",
    "prompt": "Połącz pojęcie migracyjne z definicją.",
    "options": null,
    "left": [
      "emigrant",
      "imigrant",
      "kraj emigracyjny",
      "kraj imigracyjny"
    ],
    "right": [
      "osoba opuszczająca kraj",
      "osoba przybywająca do kraju",
      "państwo z większym odpływem ludności",
      "państwo z większym napływem ludności"
    ],
    "answer": {
      "emigrant": "osoba opuszczająca kraj",
      "imigrant": "osoba przybywająca do kraju",
      "kraj emigracyjny": "państwo z większym odpływem ludności",
      "kraj imigracyjny": "państwo z większym napływem ludności"
    },
    "image": "r03_migracje_i_wielokulturowosc.jpg",
    "explanation": "Rozróżnia się emigranta i imigranta oraz kraje emigracyjne i imigracyjne."
  },
  {
    "id": "R03_LUD_10",
    "section": "Ludność, migracje i miasta",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny migracji.",
    "options": [
      "chęć znalezienia lepszej pracy",
      "ucieczka przed wojną",
      "prześladowania religijne lub narodowościowe",
      "możliwość dołączenia do rodziny",
      "chęć nauki języka obcego",
      "wzrost wysokości bezwzględnej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r03_migracje_i_wielokulturowosc.jpg",
    "explanation": "Do przyczyn migracji należą m.in. chęć poprawy poziomu życia i pracy, ucieczka przed wojną i prześladowaniami, dołączenie do rodziny oraz poznawanie innych kultur i języka."
  },
  {
    "id": "R03_LUD_11",
    "section": "Ludność, migracje i miasta",
    "type": "scenario",
    "prompt": "Po 2022 roku do Polski przyjechało wielu mieszkańców Ukrainy uciekających przed wojną. Jakim typem kraju stała się w tej sytuacji Polska?",
    "options": [
      "krajem imigracyjnym",
      "krajem bezludnym",
      "krajem wyłącznie emigracyjnym",
      "krajem podzwrotnikowym",
      "krajem wyspiarskim",
      "krajem polarnym"
    ],
    "answer": 0,
    "image": "r03_migracje_i_wielokulturowosc.jpg",
    "explanation": "Masowa ucieczka Ukraińców do sąsiednich krajów sprawiła, że Polska, Słowacja i Rumunia stały się w ostatnich latach państwami imigracyjnymi."
  },
  {
    "id": "R03_LUD_12",
    "section": "Ludność, migracje i miasta",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera największe miasta Europy?",
    "options": [
      "Moskwa, Paryż i Londyn",
      "Warszawa, Rzym i Madryt",
      "Berlin, Praga i Wiedeń",
      "Oslo, Helsinki i Tallin",
      "Ateny, Sofia i Bukareszt",
      "Dublin, Lizbona i Berno"
    ],
    "answer": 0,
    "image": "r03_metropolie_zachodniej_europy.jpg",
    "explanation": "Największymi miastami Europy są Moskwa, Paryż i Londyn."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile wynosi około długość linii brzegowej Europy?",
    "options": [
      "38 tys. km",
      "14 km",
      "10,5 mln km2",
      "4810 km",
      "6,5 tys. km",
      "900 km"
    ],
    "answer": 0,
    "image": "r03_fiordy_i_wyspy.jpg",
    "explanation": "Linia brzegowa Europy wynosi około 38 tys. km. Jest długa, ponieważ wybrzeża są bardzo urozmaicone i występuje wiele wysp oraz zatok."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wysokość Mont Blanc zmienia się, ponieważ na wierzchołku góry znajduje się __________.",
    "options": null,
    "answer": [
      "lodowiec"
    ],
    "altAnswers": [
      [
        "lodowiec",
        "lodowiec o zmiennej grubości"
      ]
    ],
    "image": "r03_alpy_i_nizina.jpg",
    "explanation": "Pomiary Mont Blanc wykazują wysokości od 4806 do 4811 m n.p.m., bo na wierzchołku znajduje się lodowiec o zmiennej grubości."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz duży europejski półwysep z powierzchnią podaną na mapie.",
    "options": null,
    "left": [
      "Półwysep Skandynawski",
      "Półwysep Iberyjski",
      "Półwysep Bałkański",
      "Półwysep Apeniński",
      "Półwysep Kolski"
    ],
    "right": [
      "800 tys. km2",
      "580 tys. km2",
      "500 tys. km2",
      "150 tys. km2",
      "120 tys. km2"
    ],
    "answer": {
      "Półwysep Skandynawski": "800 tys. km2",
      "Półwysep Iberyjski": "580 tys. km2",
      "Półwysep Bałkański": "500 tys. km2",
      "Półwysep Apeniński": "150 tys. km2",
      "Półwysep Kolski": "120 tys. km2"
    },
    "explanation": "Mapa pięciu największych półwyspów Europy podaje powierzchnie Półwyspu Skandynawskiego, Iberyjskiego, Bałkańskiego, Apenińskiego i Kolskiego."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jakiego pochodzenia są jeziora, których ponad 60 tys. znajduje się na Pojezierzu Fińskim?",
    "options": null,
    "answer": "polodowcowe",
    "altAnswers": [
      "polodowcowe",
      "jeziora polodowcowe"
    ],
    "image": "r03_alpy_i_nizina.jpg",
    "explanation": "Na Pojezierzu Fińskim znajduje się ponad 60 tys. jezior polodowcowych. Na rzeźbę północnej Europy silnie wpłynął dawny lądolód."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który islandzki wulkan wybuchł w 2010 roku, tworząc chmurę pyłów, przez którą wstrzymano loty w większości krajów Europy?",
    "options": [
      "Eyjafjallajökull",
      "Hekla",
      "Laki",
      "Sundhnukur",
      "Barðarbunga",
      "Etna"
    ],
    "answer": 0,
    "image": "r03_gejzer_i_wulkan.jpg",
    "explanation": "Wybuch wulkanu Eyjafjallajökull w 2010 roku spowodował powstanie ogromnej chmury pyłów i wstrzymanie lotów w większości krajów Europy."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Vatnajökull przykrywa kilka wulkanów, a jego grubość dochodzi do 900 m.",
    "options": null,
    "answer": true,
    "image": "r03_gejzer_i_wulkan.jpg",
    "explanation": "Największy lodowiec Islandii, Vatnajökull, przykrywa kilka wulkanów, a jego grubość dochodzi do 900 m."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary klimat lub strefa - roślinność.",
    "options": [
      "klimaty podzwrotnikowe - makia",
      "klimaty okołobiegunowe - tundra i lodowce",
      "klimaty umiarkowane chłodne - tajga",
      "klimat umiarkowany ciepły kontynentalny - stepy",
      "klimaty podzwrotnikowe - tajga",
      "klimaty okołobiegunowe - makia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_makia_i_tajga.jpg",
    "explanation": "Klimat podzwrotnikowy wiąże się z makią, okołobiegunowy z tundrą i lodowcami, umiarkowany chłodny z tajgą, a umiarkowany ciepły kontynentalny ze stepami."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na szczycie Hoher Sonnblick w Austrii temperatura jest znacznie niższa niż w położonym na nizinie Wiedniu, a opady są wyższe. Który czynnik klimatu wyjaśnia tę różnicę?",
    "options": [
      "wysokość bezwzględna",
      "liczba państw w Europie",
      "granica na Bosforze",
      "gęstość zaludnienia",
      "rozpad Jugosławii",
      "swoboda handlu"
    ],
    "answer": 0,
    "image": "r03_atlantyckie_wybrzeze.jpg",
    "explanation": "Wraz ze wzrostem wysokości bezwzględnej temperatura maleje, a opady wzrastają. Dlatego obszary górskie mają klimat górski."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "wystąpienie Wielkiej Brytanii z UE",
      "powstanie Unii Europejskiej",
      "ogłoszenie niepodległości przez Kosowo",
      "Europejska Wspólnota Węgla i Stali",
      "wprowadzenie euro do obiegu"
    ],
    "answer": [
      "Europejska Wspólnota Węgla i Stali",
      "powstanie Unii Europejskiej",
      "wprowadzenie euro do obiegu",
      "ogłoszenie niepodległości przez Kosowo",
      "wystąpienie Wielkiej Brytanii z UE"
    ],
    "image": "r03_parlament_europejski.jpg",
    "explanation": "Kolejność wydarzeń jest następująca: 1951 - Europejska Wspólnota Węgla i Stali, 1993 - powstanie Unii Europejskiej, 2002 - euro w obiegu, 2008 - niepodległość Kosowa, 2020 - wystąpienie Wielkiej Brytanii z UE."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż kraj, który nie został podany jako kraj emigracyjny początku XXI wieku: Białoruś, Rumunia, Polska, Szwecja.",
    "options": null,
    "answer": "Szwecja",
    "image": "r03_migracje_i_wielokulturowosc.jpg",
    "explanation": "Białoruś, Rumunia i Polska zostały wymienione jako kraje emigracyjne. Szwecja została podana jako kraj imigracyjny."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do Londynu albo Paryża.",
    "options": null,
    "items": [
      "Bank Anglii",
      "dzielnica City",
      "Heathrow",
      "Montmartre",
      "Luwr",
      "Wieża Eiffla"
    ],
    "categories": [
      "Londyn",
      "Paryż"
    ],
    "answer": {
      "Londyn": [
        "Bank Anglii",
        "dzielnica City",
        "Heathrow"
      ],
      "Paryż": [
        "Montmartre",
        "Luwr",
        "Wieża Eiffla"
      ]
    },
    "image": "r03_metropolie_zachodniej_europy.jpg",
    "explanation": "Londyn kojarzy się z finansami, City, Bankiem Anglii i Heathrow. Paryż z kulturą, Montmartrem, Luwrem i Wieżą Eiffla."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz atrakcję lub miejsce z opisem.",
    "options": null,
    "left": [
      "Tower Bridge",
      "Wersal",
      "Luwr",
      "City"
    ],
    "right": [
      "most zwodzony w Londynie",
      "zespół pałacowo-ogrodowy pod Paryżem",
      "muzeum z ponad 300 tys. dzieł sztuki",
      "dzielnica biznesowa nad Tamizą"
    ],
    "answer": {
      "Tower Bridge": "most zwodzony w Londynie",
      "Wersal": "zespół pałacowo-ogrodowy pod Paryżem",
      "Luwr": "muzeum z ponad 300 tys. dzieł sztuki",
      "City": "dzielnica biznesowa nad Tamizą"
    },
    "image": "r03_metropolie_zachodniej_europy.jpg",
    "explanation": "Do atrakcji i miejsc kojarzonych z Paryżem oraz Londynem należą m.in. Tower Bridge, Wersal, Luwr i dzielnica City."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Środowisko przyrodnicze i ludność Europy",
  icon: "🌍",
  sectionOrder: [
    "Położenie i rzeźba Europy",
    "Islandia, wulkany i litosfera",
    "Klimat i roślinność Europy",
    "Państwa i Unia Europejska",
    "Ludność, migracje i miasta"
  ],
  sectionIcons: {
    "Położenie i rzeźba Europy": "🗺️",
    "Islandia, wulkany i litosfera": "🌋",
    "Klimat i roślinność Europy": "🌦️",
    "Państwa i Unia Europejska": "🇪🇺",
    "Ludność, migracje i miasta": "🏙️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
