// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CECH = Dziedziczenie cech
//   DNA  = Budowa DNA i chromosomów
//   REPL = Replikacja DNA
//   PODZ = Podziały komórkowe
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_CECH_01",
    "section": "Dziedziczenie cech",
    "type": "single_choice",
    "prompt": "Która nauka bada dziedziczenie cech i zmienność organizmów?",
    "options": [
      "Ekologia",
      "Genetyka",
      "Anatomia",
      "Geologia",
      "Fizjologia",
      "Botanika"
    ],
    "answer": 1,
    "explanation": "Genetyka zajmuje się dziedziczeniem cech oraz zmiennością organizmów."
  },
  {
    "id": "R01_CECH_02",
    "section": "Dziedziczenie cech",
    "type": "true_false",
    "prompt": "Zygota powstaje po połączeniu komórki jajowej i plemnika.",
    "options": null,
    "answer": true,
    "explanation": "W zapłodnieniu łączą się komórki rozrodcze rodziców, a nowa komórka to zygota.",
    "image": "r01_rodzina_podobienstwo.jpg"
  },
  {
    "id": "R01_CECH_03",
    "section": "Dziedziczenie cech",
    "type": "multi_select",
    "prompt": "Które przykłady są cechami nabytymi?",
    "options": [
      "Blizna",
      "Naturalny kolor oczu",
      "Tatuaż",
      "Kształt małżowiny usznej",
      "Kolor włosów po farbowaniu"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Blizna, tatuaż i kolor włosów po farbowaniu powstają w trakcie życia.",
    "image": "r01_blizna_i_tatuaz.jpg"
  },
  {
    "id": "R01_CECH_04",
    "section": "Dziedziczenie cech",
    "type": "fill_in",
    "prompt": "Informacja o cechach dziedzicznych jest zapisana w cząsteczce __________.",
    "options": null,
    "answer": [
      "DNA"
    ],
    "altAnswers": [
      [
        "DNA",
        "kwasu deoksyrybonukleinowego"
      ]
    ],
    "explanation": "DNA jest nośnikiem informacji genetycznej; jej pełna nazwa to kwas deoksyrybonukleinowy."
  },
  {
    "id": "R01_CECH_05",
    "section": "Dziedziczenie cech",
    "type": "riddle",
    "prompt": "Jak nazywa się komórka powstała bezpośrednio po zapłodnieniu?",
    "options": null,
    "answer": "zygota",
    "altAnswers": [
      "zygota",
      "zygote"
    ],
    "explanation": "Po połączeniu gamet powstaje zygota z informacją genetyczną od obojga rodziców."
  },
  {
    "id": "R01_CECH_06",
    "section": "Dziedziczenie cech",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład innego rodzaju cechy: blizna, tatuaż, włosy po farbowaniu, naturalny kolor oczu.",
    "options": null,
    "answer": "naturalny kolor oczu",
    "explanation": "Naturalny kolor oczu jest cechą dziedziczną; pozostałe przykłady to cechy nabyte."
  },
  {
    "id": "R01_CECH_07",
    "section": "Dziedziczenie cech",
    "type": "scenario",
    "prompt": "Po skaleczeniu u dziewczynki pozostaje blizna. Czy jej przyszłe dziecko odziedziczy tę bliznę?",
    "options": [
      "Tak, zawsze",
      "Nie, blizna jest cechą nabytą",
      "Tak, jeśli blizna jest duża",
      "Tak, jeśli dziewczynka ma podobną bliznę jak matka"
    ],
    "answer": 1,
    "explanation": "Blizna jest cechą nabytą i nie jest zapisana jako cecha dziedziczna w DNA.",
    "image": "r01_blizna_i_tatuaz.jpg"
  },
  {
    "id": "R01_CECH_08",
    "section": "Dziedziczenie cech",
    "type": "match",
    "prompt": "Połącz pojęcie z jego opisem.",
    "options": null,
    "left": [
      "genetyka",
      "zygota",
      "cecha nabyta"
    ],
    "right": [
      "zmiana pojawiająca się w trakcie życia",
      "nauka o dziedziczeniu i zmienności",
      "komórka powstała po zapłodnieniu"
    ],
    "answer": {
      "genetyka": "nauka o dziedziczeniu i zmienności",
      "zygota": "komórka powstała po zapłodnieniu",
      "cecha nabyta": "zmiana pojawiająca się w trakcie życia"
    },
    "explanation": "Genetyka bada dziedziczenie; po zapłodnieniu powstaje zygota; cecha nabyta powstaje w trakcie życia."
  },
  {
    "id": "R01_CECH_09",
    "section": "Dziedziczenie cech",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do rodzajów cech.",
    "options": null,
    "items": [
      "blizna",
      "naturalny kolor oczu",
      "tatuaż",
      "obecność piegów",
      "włosy po farbowaniu",
      "kształt małżowiny usznej"
    ],
    "categories": [
      "dziedziczne",
      "nabyte"
    ],
    "answer": {
      "dziedziczne": [
        "naturalny kolor oczu",
        "kształt małżowiny usznej",
        "obecność piegów"
      ],
      "nabyte": [
        "blizna",
        "tatuaż",
        "włosy po farbowaniu"
      ]
    },
    "explanation": "Cechy dziedziczne są przekazywane w DNA; blizna, tatuaż i efekt farbowania pojawiają się w trakcie życia."
  },
  {
    "id": "R01_CECH_10",
    "section": "Dziedziczenie cech",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od powstania gamet do nowego organizmu.",
    "options": null,
    "items": [
      "Powstaje zygota",
      "Rozwija się nowy organizm",
      "Powstają komórka jajowa i plemnik",
      "Dochodzi do zapłodnienia"
    ],
    "answer": [
      "Powstają komórka jajowa i plemnik",
      "Dochodzi do zapłodnienia",
      "Powstaje zygota",
      "Rozwija się nowy organizm"
    ],
    "explanation": "Gamety rodziców łączą się podczas zapłodnienia; powstała zygota daje początek organizmowi."
  },
  {
    "id": "R01_CECH_11",
    "section": "Dziedziczenie cech",
    "type": "single_choice",
    "prompt": "Gdzie w komórce człowieka znajduje się większość DNA z informacją o cechach dziedzicznych?",
    "options": [
      "W jądrze komórkowym",
      "W błonie komórkowej",
      "W rybosomach",
      "W cytoplazmie poza organellami",
      "W ścianie komórkowej"
    ],
    "answer": 0,
    "explanation": "Większość DNA komórki człowieka znajduje się w jądrze; DNA występuje również w mitochondriach.",
    "image": "r01_komorka_mikroskop.jpg"
  },
  {
    "id": "R01_CECH_12",
    "section": "Dziedziczenie cech",
    "type": "true_false",
    "prompt": "Bliźnięta jednojajowe mają taki sam układ DNA, lecz środowisko może wpływać na różnice między nimi.",
    "options": null,
    "answer": true,
    "explanation": "Bliźnięta jednojajowe mają taki sam układ DNA, a na ich cechy wpływają także czynniki środowiskowe.",
    "image": "r01_identyczni_blizniacy.jpg"
  },
  {
    "id": "R01_CECH_13",
    "section": "Dziedziczenie cech",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o DNA są poprawne?",
    "options": [
      "Zawiera informację o cechach dziedzicznych",
      "Koduje wszystkie blizny powstałe w życiu",
      "Jest instrukcją produkcji białek",
      "W komórkach człowieka znajduje się głównie w jądrze",
      "Powstaje dopiero po urodzeniu"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "DNA przenosi informację o cechach dziedzicznych i służy jako instrukcja produkcji białek; nie zapisuje blizn jako cech nabytych."
  },
  {
    "id": "R01_DNA_01",
    "section": "Budowa DNA i chromosomów",
    "type": "single_choice",
    "prompt": "Ile chromosomów znajduje się typowo w komórce ciała człowieka?",
    "options": [
      "23",
      "46",
      "22",
      "44",
      "48",
      "92"
    ],
    "answer": 1,
    "explanation": "Komórka ciała człowieka zawiera 46 chromosomów, czyli 23 pary.",
    "image": "r01_chromosomy_mikroskop.jpg"
  },
  {
    "id": "R01_DNA_02",
    "section": "Budowa DNA i chromosomów",
    "type": "fill_in",
    "prompt": "Podwójna helisa DNA składa się z __________ nici.",
    "options": null,
    "answer": [
      "dwóch"
    ],
    "altAnswers": [
      [
        "dwóch",
        "2",
        "dwu"
      ]
    ],
    "explanation": "Dwie nici DNA są spiralnie skręcone i tworzą podwójną helisę."
  },
  {
    "id": "R01_DNA_03",
    "section": "Budowa DNA i chromosomów",
    "type": "riddle",
    "prompt": "Jak nazywa się jednostka budująca nić DNA?",
    "options": null,
    "answer": "nukleotyd",
    "altAnswers": [
      "nukleotyd",
      "nukleotydu"
    ],
    "explanation": "Nukleotyd zawiera cukier, resztę kwasu fosforowego i zasadę azotową.",
    "image": "r01_laboratorium_dna.jpg"
  },
  {
    "id": "R01_DNA_04",
    "section": "Budowa DNA i chromosomów",
    "type": "multi_select",
    "prompt": "Które składniki tworzą nukleotyd DNA?",
    "options": [
      "Deoksyryboza",
      "Glukoza",
      "Reszta kwasu fosforowego",
      "Reszta kwasu chlorowodorowego",
      "Zasada azotowa",
      "Białko"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Nukleotyd zawiera deoksyrybozę, resztę kwasu fosforowego i jedną zasadę azotową."
  },
  {
    "id": "R01_DNA_05",
    "section": "Budowa DNA i chromosomów",
    "type": "true_false",
    "prompt": "Jedna para chromosomów człowieka składa się z dwóch chromosomów homologicznych.",
    "options": null,
    "answer": true,
    "explanation": "Chromosomy homologiczne należą do tej samej pary i zawierają informację o tych samych rodzajach cech."
  },
  {
    "id": "R01_DNA_06",
    "section": "Budowa DNA i chromosomów",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący zasadą azotową DNA: adenina, guanina, cytozyna, deoksyryboza, tymina.",
    "options": null,
    "answer": "deoksyryboza",
    "explanation": "Deoksyryboza jest cukrem w nukleotydzie; pozostałe cztery nazwy to zasady azotowe."
  },
  {
    "id": "R01_DNA_07",
    "section": "Budowa DNA i chromosomów",
    "type": "match",
    "prompt": "Połącz element z funkcją lub budową.",
    "options": null,
    "left": [
      "gen",
      "nukleotyd",
      "centromer",
      "chromosom"
    ],
    "right": [
      "przewężenie chromosomu",
      "silnie upakowany materiał genetyczny",
      "jednostka budująca nić DNA",
      "odcinek DNA niosący informację o cesze"
    ],
    "answer": {
      "gen": "odcinek DNA niosący informację o cesze",
      "nukleotyd": "jednostka budująca nić DNA",
      "centromer": "przewężenie chromosomu",
      "chromosom": "silnie upakowany materiał genetyczny"
    },
    "explanation": "Gen to odcinek DNA; nukleotyd buduje jego nić, a centromer jest przewężeniem chromosomu."
  },
  {
    "id": "R01_DNA_08",
    "section": "Budowa DNA i chromosomów",
    "type": "sort",
    "prompt": "Podziel nazwy na zasady azotowe DNA i pozostałe składniki nukleotydu.",
    "options": null,
    "items": [
      "deoksyryboza",
      "tymina",
      "adenina",
      "reszta kwasu fosforowego",
      "cytozyna",
      "guanina"
    ],
    "categories": [
      "zasady azotowe",
      "pozostałe składniki"
    ],
    "answer": {
      "zasady azotowe": [
        "adenina",
        "guanina",
        "cytozyna",
        "tymina"
      ],
      "pozostałe składniki": [
        "deoksyryboza",
        "reszta kwasu fosforowego"
      ]
    },
    "explanation": "Nukleotyd DNA zawiera jedną zasadę azotową, deoksyrybozę i resztę fosforanową."
  },
  {
    "id": "R01_DNA_09",
    "section": "Budowa DNA i chromosomów",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji materiału genetycznego od najmniejszego do najbardziej upakowanego.",
    "options": null,
    "items": [
      "chromosom",
      "nić DNA",
      "nukleotyd",
      "podwójna helisa DNA"
    ],
    "answer": [
      "nukleotyd",
      "nić DNA",
      "podwójna helisa DNA",
      "chromosom"
    ],
    "explanation": "Nukleotydy tworzą nić DNA, dwie nici podwójną helisę, a DNA może być upakowane w chromosomie."
  },
  {
    "id": "R01_DNA_10",
    "section": "Budowa DNA i chromosomów",
    "type": "scenario",
    "prompt": "Pod mikroskopem obserwujesz chromosom na początku podziału komórki, po skopiowaniu DNA. Ile chromatyd ma ten chromosom?",
    "options": [
      "Jedną",
      "Dwie",
      "Trzy",
      "Cztery"
    ],
    "answer": 1,
    "explanation": "Po replikacji chromosom składa się z dwóch chromatyd połączonych centromerem.",
    "image": "r01_chromosomy_mikroskop.jpg"
  },
  {
    "id": "R01_DNA_11",
    "section": "Budowa DNA i chromosomów",
    "type": "single_choice",
    "prompt": "Jak nazywa się przewężenie łączące chromatydy chromosomu po replikacji?",
    "options": [
      "Centromer",
      "Nukleotyd",
      "Gen",
      "Deoksyryboza",
      "Zasada azotowa"
    ],
    "answer": 0,
    "explanation": "Centromer to przewężenie chromosomu, w którym połączone są chromatydy."
  },
  {
    "id": "R01_DNA_12",
    "section": "Budowa DNA i chromosomów",
    "type": "true_false",
    "prompt": "W chromosomie po replikacji znajdują się dwie cząsteczki DNA.",
    "options": null,
    "answer": true,
    "explanation": "Każda z dwóch chromatyd chromosomu po replikacji zawiera cząsteczkę DNA."
  },
  {
    "id": "R01_DNA_13",
    "section": "Budowa DNA i chromosomów",
    "type": "riddle",
    "prompt": "Jak nazywa się odcinek DNA zawierający informację o określonej cesze?",
    "options": null,
    "answer": "gen",
    "altAnswers": [
      "gen",
      "genu"
    ],
    "explanation": "Gen to odcinek DNA kodujący informację o cesze."
  },
  {
    "id": "R01_REPL_01",
    "section": "Replikacja DNA",
    "type": "single_choice",
    "prompt": "Na czym polega replikacja DNA?",
    "options": [
      "Na kopiowaniu DNA",
      "Na powstawaniu białka z cukru",
      "Na zanikaniu chromatyd",
      "Na połączeniu dwóch gamet",
      "Na wymianie chromosomów między komórkami"
    ],
    "answer": 0,
    "explanation": "W replikacji DNA zostaje skopiowane, co przygotowuje komórkę do podziału.",
    "image": "r01_laboratorium_dna.jpg"
  },
  {
    "id": "R01_REPL_02",
    "section": "Replikacja DNA",
    "type": "true_false",
    "prompt": "Replikacja DNA zachodzi przed mitozą i przed mejozą.",
    "options": null,
    "answer": true,
    "explanation": "Przed oboma rodzajami podziałów komórkowych DNA jest kopiowane."
  },
  {
    "id": "R01_REPL_03",
    "section": "Replikacja DNA",
    "type": "multi_select",
    "prompt": "Które pary zasad DNA są komplementarne?",
    "options": [
      "adenina i tymina",
      "adenina i guanina",
      "guanina i cytozyna",
      "tymina i cytozyna",
      "adenina i cytozyna"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Adenina łączy się z tyminą, a guanina z cytozyną."
  },
  {
    "id": "R01_REPL_04",
    "section": "Replikacja DNA",
    "type": "fill_in",
    "prompt": "Naprzeciw adeniny w drugiej nici DNA znajduje się __________.",
    "options": null,
    "answer": [
      "tymina"
    ],
    "altAnswers": [
      [
        "tymina",
        "tyminę",
        "T"
      ]
    ],
    "explanation": "Reguła komplementarności wiąże adeninę z tyminą."
  },
  {
    "id": "R01_REPL_05",
    "section": "Replikacja DNA",
    "type": "riddle",
    "prompt": "Jak nazywa się zasada DNA, która tworzy parę z guaniną?",
    "options": null,
    "answer": "cytozyna",
    "altAnswers": [
      "cytozyna",
      "cytozyną",
      "C"
    ],
    "explanation": "Guanina tworzy komplementarną parę z cytozyną."
  },
  {
    "id": "R01_REPL_06",
    "section": "Replikacja DNA",
    "type": "odd_one_out",
    "prompt": "Wskaż niepoprawną parę zasad DNA: adenina i tymina, guanina i cytozyna, tymina i adenina, guanina i tymina.",
    "options": null,
    "answer": "guanina i tymina",
    "explanation": "Guanina łączy się z cytozyną, a nie z tyminą."
  },
  {
    "id": "R01_REPL_07",
    "section": "Replikacja DNA",
    "type": "sequence",
    "prompt": "Ułóż główne zdarzenia replikacji we właściwej kolejności.",
    "options": null,
    "items": [
      "Powstanie dwóch cząsteczek DNA",
      "Rozplecenie podwójnej helisy",
      "Dołączanie komplementarnych nukleotydów"
    ],
    "answer": [
      "Rozplecenie podwójnej helisy",
      "Dołączanie komplementarnych nukleotydów",
      "Powstanie dwóch cząsteczek DNA"
    ],
    "explanation": "Po rozdzieleniu nici każda służy jako wzorzec dla nowej nici; powstają dwie cząsteczki DNA."
  },
  {
    "id": "R01_REPL_08",
    "section": "Replikacja DNA",
    "type": "match",
    "prompt": "Połącz zasadę w nici wzorcowej z zasadą w nowej nici.",
    "options": null,
    "left": [
      "adenina",
      "tymina",
      "guanina",
      "cytozyna"
    ],
    "right": [
      "cytozyna",
      "adenina",
      "guanina",
      "tymina"
    ],
    "answer": {
      "adenina": "tymina",
      "tymina": "adenina",
      "guanina": "cytozyna",
      "cytozyna": "guanina"
    },
    "explanation": "Dwie pary komplementarne to A–T i G–C."
  },
  {
    "id": "R01_REPL_09",
    "section": "Replikacja DNA",
    "type": "sort",
    "prompt": "Przyporządkuj zasady do dwóch par komplementarnych.",
    "options": null,
    "items": [
      "cytozyna",
      "adenina",
      "guanina",
      "tymina"
    ],
    "categories": [
      "para A–T",
      "para G–C"
    ],
    "answer": {
      "para A–T": [
        "adenina",
        "tymina"
      ],
      "para G–C": [
        "guanina",
        "cytozyna"
      ]
    },
    "explanation": "Adenina z tyminą i guanina z cytozyną tworzą pary komplementarne."
  },
  {
    "id": "R01_REPL_10",
    "section": "Replikacja DNA",
    "type": "scenario",
    "prompt": "W trakcie replikacji w starej nici znajduje się odcinek ACGT. Który odcinek powstanie naprzeciw niego?",
    "options": [
      "ACGT",
      "TGCA",
      "AGCT",
      "TACG",
      "GCTA"
    ],
    "answer": 1,
    "explanation": "Zgodnie z komplementarnością A łączy się z T, C z G, G z C, a T z A: TGCA."
  },
  {
    "id": "R01_REPL_11",
    "section": "Replikacja DNA",
    "type": "single_choice",
    "prompt": "Z ilu starych i nowych nici składa się każda cząsteczka DNA po replikacji?",
    "options": [
      "Z dwóch starych",
      "Z dwóch nowych",
      "Z jednej starej i jednej nowej",
      "Z jednej starej bez nowej",
      "Z trzech nowych"
    ],
    "answer": 2,
    "explanation": "Każda cząsteczka potomna zawiera jedną nić dawną i jedną dobudowaną."
  },
  {
    "id": "R01_REPL_12",
    "section": "Replikacja DNA",
    "type": "true_false",
    "prompt": "Po replikacji liczba chromosomów w komórce ciała człowieka wzrasta z 46 do 92.",
    "options": null,
    "answer": false,
    "explanation": "Replikacja podwaja ilość DNA i tworzy dwie chromatydy, ale liczba chromosomów przed podziałem pozostaje 46."
  },
  {
    "id": "R01_REPL_13",
    "section": "Replikacja DNA",
    "type": "fill_in",
    "prompt": "Podczas replikacji każda z rozdzielonych nici DNA służy jako __________ dla nowej nici.",
    "options": null,
    "answer": [
      "wzorzec"
    ],
    "altAnswers": [
      [
        "wzorzec",
        "matryca"
      ]
    ],
    "explanation": "Komplementarne nukleotydy są dołączane na podstawie sekwencji starej nici."
  },
  {
    "id": "R01_PODZ_01",
    "section": "Podziały komórkowe",
    "type": "single_choice",
    "prompt": "Ile komórek potomnych powstaje po jednym podziale mitotycznym?",
    "options": [
      "Dwie",
      "Cztery",
      "Jedna",
      "Osiem",
      "Trzy"
    ],
    "answer": 0,
    "explanation": "Mitoza wytwarza dwie komórki potomne z zachowaną ilością materiału genetycznego.",
    "image": "r01_rosnaca_roslina.jpg"
  },
  {
    "id": "R01_PODZ_02",
    "section": "Podziały komórkowe",
    "type": "true_false",
    "prompt": "Mejoza prowadzi do powstania czterech komórek z połową liczby chromosomów komórki macierzystej.",
    "options": null,
    "answer": true,
    "explanation": "Mejoza jest dwuetapowa i daje cztery komórki haploidalne.",
    "image": "r01_gamety_mikroskop.jpg"
  },
  {
    "id": "R01_PODZ_03",
    "section": "Podziały komórkowe",
    "type": "multi_select",
    "prompt": "Które procesy lub skutki wiążą się z mitozą?",
    "options": [
      "Regeneracja tkanek",
      "Powstawanie gamet człowieka",
      "Wzrost organizmu",
      "Zmniejszenie liczby chromosomów o połowę",
      "Rozmnażanie bezpłciowe niektórych organizmów"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Mitoza zwiększa liczbę komórek ciała, umożliwia wzrost i regenerację; gamety powstają w mejozie.",
    "image": "r01_gojaca_sie_rana.jpg"
  },
  {
    "id": "R01_PODZ_04",
    "section": "Podziały komórkowe",
    "type": "fill_in",
    "prompt": "Gamety człowieka mają __________ chromosomy, a komórki ciała mają __________ chromosomów.",
    "options": null,
    "answer": [
      "23",
      "46"
    ],
    "altAnswers": [
      [
        "23",
        "dwadzieścia trzy"
      ],
      [
        "46",
        "czterdzieści sześć"
      ]
    ],
    "explanation": "Gamety są haploidalne (n = 23), a komórki ciała diploidalne (2n = 46)."
  },
  {
    "id": "R01_PODZ_05",
    "section": "Podziały komórkowe",
    "type": "riddle",
    "prompt": "Jak nazywa się podział, w którym powstają plemniki i komórki jajowe?",
    "options": null,
    "answer": "mejoza",
    "altAnswers": [
      "mejoza",
      "mejozy"
    ],
    "explanation": "Mejoza w narządach rozrodczych daje komórki z połową liczby chromosomów.",
    "image": "r01_gamety_mikroskop.jpg"
  },
  {
    "id": "R01_PODZ_06",
    "section": "Podziały komórkowe",
    "type": "odd_one_out",
    "prompt": "Wskaż komórkę o innej liczbie zestawów chromosomów: komórka nerwowa, komórka mięśnia, krwinka biała, plemnik.",
    "options": null,
    "answer": "plemnik",
    "explanation": "Plemnik jest haploidalny, natomiast komórka nerwowa, komórka mięśnia i krwinka biała są diploidalne."
  },
  {
    "id": "R01_PODZ_07",
    "section": "Podziały komórkowe",
    "type": "match",
    "prompt": "Połącz rodzaj podziału lub komórki z jego charakterystyką.",
    "options": null,
    "left": [
      "mitoza",
      "mejoza",
      "plemnik",
      "komórka nerwowa"
    ],
    "right": [
      "komórka haploidalna",
      "komórka diploidalna",
      "cztery komórki potomne n",
      "dwie komórki potomne 2n"
    ],
    "answer": {
      "mitoza": "dwie komórki potomne 2n",
      "mejoza": "cztery komórki potomne n",
      "plemnik": "komórka haploidalna",
      "komórka nerwowa": "komórka diploidalna"
    },
    "explanation": "Mitoza zachowuje liczbę chromosomów, a mejoza redukuje ją w gametach."
  },
  {
    "id": "R01_PODZ_08",
    "section": "Podziały komórkowe",
    "type": "sort",
    "prompt": "Podziel komórki człowieka na haploidalne i diploidalne.",
    "options": null,
    "items": [
      "krwinka biała",
      "plemnik",
      "komórka mięśnia gładkiego",
      "komórka jajowa",
      "komórka nerwowa"
    ],
    "categories": [
      "haploidalne",
      "diploidalne"
    ],
    "answer": {
      "haploidalne": [
        "plemnik",
        "komórka jajowa"
      ],
      "diploidalne": [
        "komórka nerwowa",
        "krwinka biała",
        "komórka mięśnia gładkiego"
      ]
    },
    "explanation": "Gamety mają jeden zestaw chromosomów, a komórki somatyczne człowieka zwykle mają dwa zestawy."
  },
  {
    "id": "R01_PODZ_09",
    "section": "Podziały komórkowe",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia prowadzące do powstania gamet.",
    "options": null,
    "items": [
      "Drugi podział mejotyczny",
      "Powstanie czterech komórek haploidalnych",
      "Replikacja DNA w komórce macierzystej",
      "Pierwszy podział mejotyczny"
    ],
    "answer": [
      "Replikacja DNA w komórce macierzystej",
      "Pierwszy podział mejotyczny",
      "Drugi podział mejotyczny",
      "Powstanie czterech komórek haploidalnych"
    ],
    "explanation": "Po wcześniejszym skopiowaniu DNA następują dwa etapy mejozy, dające cztery komórki n."
  },
  {
    "id": "R01_PODZ_10",
    "section": "Podziały komórkowe",
    "type": "scenario",
    "prompt": "Po złamaniu kości organizm odbudowuje uszkodzoną tkankę. Który podział zwiększa wtedy liczbę komórek ciała?",
    "options": [
      "Mitoza",
      "Mejoza",
      "Zapłodnienie",
      "Rekombinacja genetyczna"
    ],
    "answer": 0,
    "explanation": "Mitoza umożliwia regenerację tkanek, także zrastanie się kości.",
    "image": "r01_gojaca_sie_rana.jpg"
  },
  {
    "id": "R01_PODZ_11",
    "section": "Podziały komórkowe",
    "type": "true_false",
    "prompt": "Rekombinacja genetyczna chromosomów homologicznych zachodzi podczas mejozy.",
    "options": null,
    "answer": true,
    "explanation": "W pierwszym podziale mejotycznym chromosomy homologiczne wymieniają fragmenty, co zwiększa zmienność.",
    "image": "r01_rodzenstwo_roznice.jpg"
  },
  {
    "id": "R01_PODZ_12",
    "section": "Podziały komórkowe",
    "type": "single_choice",
    "prompt": "Ile etapów podziału ma mejoza?",
    "options": [
      "Jeden",
      "Dwa",
      "Trzy",
      "Cztery",
      "Pięć"
    ],
    "answer": 1,
    "explanation": "Mejoza przebiega w dwóch podziałach, a mitoza w jednym."
  },
  {
    "id": "R01_PODZ_13",
    "section": "Podziały komórkowe",
    "type": "multi_select",
    "prompt": "Które sytuacje opisują komórki diploidalne człowieka?",
    "options": [
      "Komórka nerwowa",
      "Plemnik",
      "Komórka mięśnia gładkiego",
      "Komórka jajowa",
      "Zygota"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Komórki ciała oraz zygota mają podwójny zestaw chromosomów; gamety mają pojedynczy."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po trzech kolejnych rundach mitozy każda nowo powstała komórka dzieli się w następnej rundzie. Ile komórek powstanie z jednej komórki wyjściowej?",
    "options": [
      "3",
      "4",
      "6",
      "8",
      "12"
    ],
    "answer": 3,
    "explanation": "W każdym cyklu liczba komórek się podwaja: 1 → 2 → 4 → 8."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ile chromosomów ma plemnik psa, jeśli jego komórki ciała mają 78 chromosomów?",
    "options": null,
    "answer": "39",
    "altAnswers": [
      "39",
      "trzydzieści dziewięć"
    ],
    "explanation": "Gameta ma połowę liczby chromosomów komórki diploidalnej: 78 ÷ 2 = 39."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o psie o 78 chromosomach w komórkach ciała są poprawne?",
    "options": [
      "Komórka ciała ma 39 par chromosomów",
      "Plemnik ma 78 chromosomów",
      "Komórka jajowa ma 39 chromosomów",
      "Zygota ma 78 chromosomów",
      "Gameta ma 19 chromosomów"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Komórki ciała mają 39 par, gamety 39 chromosomów, a zygota po zapłodnieniu 78."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W komórce ciała człowieka DNA zostało skopiowane, lecz komórka jeszcze się nie podzieliła. Ile chromosomów i ile chromatyd mają łącznie jej chromosomy?",
    "options": [
      "92 chromosomy i 92 chromatydy",
      "46 chromosomów i 46 chromatyd",
      "46 chromosomów i 92 chromatydy",
      "23 chromosomy i 46 chromatyd",
      "92 chromosomy i 46 chromatyd"
    ],
    "answer": 2,
    "explanation": "Po replikacji pozostaje 46 chromosomów, każdy z dwóch chromatyd: razem 92 chromatydy."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Dla nici DNA GCGC poprawna nić komplementarna ma sekwencję __________.",
    "options": null,
    "answer": [
      "CGCG"
    ],
    "altAnswers": [
      [
        "CGCG",
        "C G C G"
      ]
    ],
    "explanation": "G łączy się z C, a C z G, więc kolejne zasady to C-G-C-G."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zjawisko z wynikiem dla człowieka.",
    "options": null,
    "left": [
      "mejoza",
      "zapłodnienie",
      "mitoza",
      "replikacja"
    ],
    "right": [
      "dwie chromatydy chromosomu",
      "dwie komórki potomne 2n = 46",
      "gamety n = 23",
      "zygota 2n = 46"
    ],
    "answer": {
      "mejoza": "gamety n = 23",
      "zapłodnienie": "zygota 2n = 46",
      "mitoza": "dwie komórki potomne 2n = 46",
      "replikacja": "dwie chromatydy chromosomu"
    },
    "explanation": "Mejoza redukuje liczbę chromosomów, zapłodnienie przywraca 2n, mitoza zachowuje 2n, a replikacja kopiuje DNA."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Dwa rodzeństwa mogą różnić się cechami, ponieważ w mejozie zachodzi wymiana fragmentów chromosomów homologicznych.",
    "options": null,
    "answer": true,
    "explanation": "Rekombinacja w pierwszym etapie mejozy przyczynia się do zmienności cech potomstwa.",
    "image": "r01_rodzenstwo_roznice.jpg"
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia od komórki macierzystej do powstania zygoty.",
    "options": null,
    "items": [
      "Powstanie diploidalnej zygoty",
      "Powstanie haploidalnych gamet",
      "Replikacja DNA przed mejozą",
      "Połączenie gamet w zapłodnieniu",
      "Dwa etapy mejozy"
    ],
    "answer": [
      "Replikacja DNA przed mejozą",
      "Dwa etapy mejozy",
      "Powstanie haploidalnych gamet",
      "Połączenie gamet w zapłodnieniu",
      "Powstanie diploidalnej zygoty"
    ],
    "explanation": "Mejoza daje gamety n, a ich połączenie przywraca dwa zestawy chromosomów w zygocie."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym etapie mejozy rozdzielają się chromosomy homologiczne?",
    "options": [
      "W pierwszym podziale",
      "W drugim podziale",
      "Podczas zapłodnienia",
      "Dopiero po powstaniu zygoty",
      "Podczas mitozy"
    ],
    "answer": 0,
    "explanation": "W pierwszym podziale mejotycznym do dwóch komórek rozchodzą się chromosomy homologiczne."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki jest skutek wymiany odpowiadających sobie fragmentów chromosomów homologicznych?",
    "options": [
      "Wszystkie gamety stają się identyczne",
      "Powstają nowe kombinacje cech",
      "Komórka traci całe DNA",
      "Z liczby 46 powstaje 92 chromosomów",
      "Zygota przestaje się dzielić"
    ],
    "answer": 1,
    "explanation": "Rekombinacja tworzy nowe kombinacje materiału genetycznego i zwiększa zmienność."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj zdarzenia do mitozy lub mejozy.",
    "options": null,
    "items": [
      "rekombinacja homologów",
      "gojenie ran",
      "wytwarzanie gamet",
      "dwie komórki potomne",
      "wzrost liczby komórek ciała",
      "cztery komórki potomne"
    ],
    "categories": [
      "mitoza",
      "mejoza"
    ],
    "answer": {
      "mitoza": [
        "wzrost liczby komórek ciała",
        "gojenie ran",
        "dwie komórki potomne"
      ],
      "mejoza": [
        "wytwarzanie gamet",
        "rekombinacja homologów",
        "cztery komórki potomne"
      ]
    },
    "explanation": "Mitoza zapewnia wzrost i naprawę tkanek; mejoza daje gamety i obejmuje rekombinację."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Plemnik i komórka jajowa człowieka mają po 23 chromosomy. Co stanie się z liczbą chromosomów po ich połączeniu?",
    "options": [
      "Pozostanie 23",
      "Wzrośnie do 46",
      "Wzrośnie do 92",
      "Spadnie do 12"
    ],
    "answer": 1,
    "explanation": "Zygota otrzymuje po jednym zestawie chromosomów od każdego rodzica: 23 + 23 = 46."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż proces niewystępujący typowo w mejozie: replikacja DNA przed podziałem, rozdział chromosomów homologicznych, rekombinacja genetyczna, powstawanie dwóch diploidalnych komórek potomnych.",
    "options": null,
    "answer": "powstawanie dwóch diploidalnych komórek potomnych",
    "explanation": "Dwie komórki diploidalne są efektem mitozy; mejoza daje cztery komórki haploidalne."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które czynniki mogą wywoływać zaburzenia sprzyjające niekontrolowanym podziałom komórek?",
    "options": [
      "Promieniowanie UV",
      "Palenie papierosów",
      "Prawidłowa regeneracja ran",
      "Zanieczyszczenia środowiska",
      "Niewłaściwa dieta",
      "Zapłodnienie"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do czynników sprzyjających takim zaburzeniom należą m.in. promieniowanie UV, palenie papierosów, zanieczyszczenia środowiska i niewłaściwa dieta lub tryb życia."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r01",
  "number": 1,
  "title": "Podstawy dziedziczenia",
  "icon": "🧬",
  "sectionOrder": [
    "Dziedziczenie cech",
    "Budowa DNA i chromosomów",
    "Replikacja DNA",
    "Podziały komórkowe"
  ],
  "sectionIcons": {
    "Dziedziczenie cech": "👪",
    "Budowa DNA i chromosomów": "🧬",
    "Replikacja DNA": "🔁",
    "Podziały komórkowe": "🔬"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
