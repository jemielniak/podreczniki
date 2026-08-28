// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DNA  = Podstawy genetyki i DNA
//   POD  = Podziały komórkowe
//   MEN  = Prawa dziedziczenia i cechy człowieka
//   KREW = Płeć i grupy krwi
//   MUT  = Mutacje i choroby genetyczne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_DNA_01",
    "section": "Podstawy genetyki i DNA",
    "type": "single_choice",
    "prompt": "Czym zajmuje się genetyka?",
    "options": [
      "Budową narządów człowieka",
      "Dziedziczeniem cech i zmiennością organizmów",
      "Wyłącznie chorobami zakaźnymi",
      "Tylko klasyfikacją gatunków",
      "Ruchem organizmów",
      "Wyłącznie budową komórki"
    ],
    "answer": 1,
    "image": "r01_cechy_rodzinne.jpg",
    "explanation": "Genetyka to nauka zajmująca się dziedziczeniem cech oraz zmiennością organizmów."
  },
  {
    "id": "R01_DNA_02",
    "section": "Podstawy genetyki i DNA",
    "type": "multi_select",
    "prompt": "Zaznacz cechy niedziedziczne.",
    "options": [
      "blizna",
      "umiejętność czytania",
      "kolor skóry odziedziczony po rodzicach",
      "rysy twarzy",
      "opalenizna"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Cechy niedziedziczne powstają w ciągu życia pod wpływem środowiska i nie są przekazywane potomstwu."
  },
  {
    "id": "R01_DNA_03",
    "section": "Podstawy genetyki i DNA",
    "type": "true_false",
    "prompt": "Zmienność to występowanie różnic między osobnikami tego samego gatunku.",
    "options": null,
    "answer": true,
    "explanation": "Zmienność oznacza różnice między osobnikami jednego gatunku; jej źródłem są między innymi rozmnażanie płciowe i wpływ środowiska."
  },
  {
    "id": "R01_DNA_04",
    "section": "Podstawy genetyki i DNA",
    "type": "fill_in",
    "prompt": "Nośnikiem informacji genetycznej jest kwas __________, w skrócie DNA.",
    "options": null,
    "answer": [
      "deoksyrybonukleinowy"
    ],
    "explanation": "DNA to kwas deoksyrybonukleinowy będący nośnikiem informacji genetycznej."
  },
  {
    "id": "R01_DNA_05",
    "section": "Podstawy genetyki i DNA",
    "type": "riddle",
    "prompt": "Odcinek DNA zawierający informację o budowie białka to...",
    "options": null,
    "answer": "gen",
    "explanation": "Gen jest odcinkiem DNA, w którym zapisana jest informacja o budowie białka."
  },
  {
    "id": "R01_DNA_06",
    "section": "Podstawy genetyki i DNA",
    "type": "match",
    "prompt": "Połącz składnik nukleotydu DNA z właściwym opisem.",
    "options": null,
    "left": [
      "deoksyryboza",
      "reszta kwasu fosforowego",
      "adenina"
    ],
    "right": [
      "cukier",
      "składnik fosforanowy",
      "zasada azotowa"
    ],
    "answer": {
      "deoksyryboza": "cukier",
      "reszta kwasu fosforowego": "składnik fosforanowy",
      "adenina": "zasada azotowa"
    },
    "explanation": "Nukleotyd DNA zawiera deoksyrybozę, resztę kwasu fosforowego i jedną z czterech zasad azotowych."
  },
  {
    "id": "R01_DNA_07",
    "section": "Podstawy genetyki i DNA",
    "type": "single_choice",
    "prompt": "Która para zasad azotowych jest komplementarna w DNA?",
    "options": [
      "adenina i guanina",
      "adenina i tymina",
      "tymina i cytozyna",
      "cytozyna i adenina",
      "guanina i tymina",
      "adenina i adenina"
    ],
    "answer": 1,
    "image": "r01_dna_podwojna_helisa.jpg",
    "explanation": "Zgodnie z zasadą komplementarności adenina łączy się z tyminą, a cytozyna z guaniną."
  },
  {
    "id": "R01_DNA_08",
    "section": "Podstawy genetyki i DNA",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący zasadą azotową DNA: adenina, tymina, cytozyna, guanina, deoksyryboza.",
    "options": null,
    "answer": "deoksyryboza",
    "explanation": "Deoksyryboza jest cukrem w nukleotydzie DNA, a pozostałe elementy to zasady azotowe."
  },
  {
    "id": "R01_DNA_09",
    "section": "Podstawy genetyki i DNA",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do DNA albo RNA.",
    "options": null,
    "items": [
      "deoksyryboza",
      "tymina",
      "ryboza",
      "uracyl",
      "przeważnie jednoniciowe",
      "podwójna helisa"
    ],
    "categories": [
      "DNA",
      "RNA"
    ],
    "answer": {
      "DNA": [
        "deoksyryboza",
        "tymina",
        "podwójna helisa"
      ],
      "RNA": [
        "ryboza",
        "uracyl",
        "przeważnie jednoniciowe"
      ]
    },
    "explanation": "DNA zawiera deoksyrybozę i tyminę oraz jest dwuniciowe, a RNA zawiera rybozę i uracyl oraz jest przeważnie jednoniciowe."
  },
  {
    "id": "R01_DNA_10",
    "section": "Podstawy genetyki i DNA",
    "type": "sequence",
    "prompt": "Ułóż etapy replikacji DNA we właściwej kolejności.",
    "options": null,
    "items": [
      "Powstają dwie identyczne cząsteczki DNA",
      "Do każdej nici są dołączane komplementarne nukleotydy",
      "Podwójna helisa rozplata się i nici się rozdzielają",
      "Każda nowa cząsteczka zawiera jedną nić starą i jedną nową"
    ],
    "answer": [
      "Podwójna helisa rozplata się i nici się rozdzielają",
      "Do każdej nici są dołączane komplementarne nukleotydy",
      "Powstają dwie identyczne cząsteczki DNA",
      "Każda nowa cząsteczka zawiera jedną nić starą i jedną nową"
    ],
    "explanation": "Najpierw helisa się rozplata, potem do każdej nici są dołączane komplementarne nukleotydy, a na końcu powstają dwie identyczne cząsteczki DNA."
  },
  {
    "id": "R01_DNA_11",
    "section": "Podstawy genetyki i DNA",
    "type": "scenario",
    "prompt": "W komórce rozpoczyna się podział. Długie nici DNA muszą zostać silnie upakowane. Jaką najbardziej zwartą postać przyjmuje materiał genetyczny?",
    "options": [
      "rybosom",
      "chromosom",
      "błona komórkowa",
      "nukleotyd",
      "enzym",
      "mRNA"
    ],
    "answer": 1,
    "image": "r01_chromosom_w_komorce.jpg",
    "explanation": "Najbardziej upakowaną postacią chromatyny jest chromosom; DNA przyjmuje tę postać podczas podziału komórki."
  },
  {
    "id": "R01_POD_01",
    "section": "Podziały komórkowe",
    "type": "single_choice",
    "prompt": "Jak nazywają się odpowiadające sobie chromosomy odziedziczone po matce i po ojcu?",
    "options": [
      "chromatydy siostrzane",
      "chromosomy homologiczne",
      "autosomy potomne",
      "nukleotydy homologiczne",
      "chromosomy haploidalne",
      "centromery"
    ],
    "answer": 1,
    "explanation": "Chromosomy homologiczne mają podobną wielkość i kształt oraz zawierają geny warunkujące te same cechy."
  },
  {
    "id": "R01_POD_02",
    "section": "Podziały komórkowe",
    "type": "match",
    "prompt": "Połącz rodzaj komórki z liczbą zestawów chromosomów.",
    "options": null,
    "left": [
      "komórka diploidalna",
      "komórka haploidalna",
      "plemnik"
    ],
    "right": [
      "2n",
      "n",
      "komórka haploidalna"
    ],
    "answer": {
      "komórka diploidalna": "2n",
      "komórka haploidalna": "n",
      "plemnik": "komórka haploidalna"
    },
    "explanation": "Komórki diploidalne mają dwa zestawy chromosomów, a haploidalne jeden zestaw."
  },
  {
    "id": "R01_POD_03",
    "section": "Podziały komórkowe",
    "type": "true_false",
    "prompt": "Plemniki i komórki jajowe człowieka są komórkami haploidalnymi.",
    "options": null,
    "answer": true,
    "explanation": "Gamety mają pojedynczy zestaw chromosomów i oznacza się je symbolem n."
  },
  {
    "id": "R01_POD_04",
    "section": "Podziały komórkowe",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenia mitozy.",
    "options": [
      "wzrost ciała",
      "gojenie ran",
      "wytwarzanie komórek somatycznych",
      "wytwarzanie gamet człowieka",
      "rozmnażanie bezpłciowe organizmów jednokomórkowych"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "image": "r01_mitoza_komorka.jpg",
    "explanation": "Mitoza umożliwia wzrost organizmu, odtwarzanie tkanek i wytwarzanie komórek ciała; u organizmów jednokomórkowych może służyć rozmnażaniu bezpłciowemu."
  },
  {
    "id": "R01_POD_05",
    "section": "Podziały komórkowe",
    "type": "fill_in",
    "prompt": "W wyniku mitozy z jednej komórki macierzystej powstają __________ komórki potomne o takiej samej liczbie chromosomów.",
    "options": null,
    "answer": [
      "dwie"
    ],
    "explanation": "Mitoza prowadzi do powstania dwóch komórek potomnych zachowujących liczbę chromosomów komórki macierzystej."
  },
  {
    "id": "R01_POD_06",
    "section": "Podziały komórkowe",
    "type": "single_choice",
    "prompt": "Ile komórek potomnych powstaje z jednej komórki diploidalnej po zakończeniu mejozy?",
    "options": [
      "jedna",
      "dwie",
      "trzy",
      "cztery",
      "sześć",
      "osiem"
    ],
    "answer": 3,
    "image": "r01_mejoza_gamety.jpg",
    "explanation": "Mejoza obejmuje dwa kolejne podziały i prowadzi do powstania czterech komórek haploidalnych."
  },
  {
    "id": "R01_POD_07",
    "section": "Podziały komórkowe",
    "type": "odd_one_out",
    "prompt": "Wskaż cechę niepasującą do mejozy: dwa podziały, cztery komórki potomne, powstawanie gamet, o połowę mniej chromosomów, dwie identyczne komórki potomne.",
    "options": null,
    "answer": "dwie identyczne komórki potomne",
    "explanation": "Dwie identyczne komórki potomne są wynikiem mitozy, natomiast mejoza daje cztery komórki haploidalne."
  },
  {
    "id": "R01_POD_08",
    "section": "Podziały komórkowe",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do mitozy i mejozy.",
    "options": null,
    "items": [
      "jeden podział",
      "dwa podziały",
      "dwie komórki potomne",
      "cztery komórki potomne",
      "zachowanie liczby chromosomów",
      "redukcja liczby chromosomów o połowę"
    ],
    "categories": [
      "mitoza",
      "mejoza"
    ],
    "answer": {
      "mitoza": [
        "jeden podział",
        "dwie komórki potomne",
        "zachowanie liczby chromosomów"
      ],
      "mejoza": [
        "dwa podziały",
        "cztery komórki potomne",
        "redukcja liczby chromosomów o połowę"
      ]
    },
    "explanation": "Mitoza obejmuje jeden podział i zachowuje liczbę chromosomów, natomiast mejoza obejmuje dwa podziały i zmniejsza liczbę chromosomów o połowę."
  },
  {
    "id": "R01_POD_09",
    "section": "Podziały komórkowe",
    "type": "scenario",
    "prompt": "Skaleczenie skóry goi się, ponieważ komórki w uszkodzonej tkance intensywnie się dzielą. Który rodzaj podziału odpowiada za odtwarzanie komórek ciała?",
    "options": [
      "mejoza",
      "mitoza",
      "zapłodnienie",
      "rekombinacja",
      "transkrypcja",
      "mutacja"
    ],
    "answer": 1,
    "explanation": "Za wzrost i regenerację tkanek odpowiada mitoza zachodząca w komórkach somatycznych."
  },
  {
    "id": "R01_POD_10",
    "section": "Podziały komórkowe",
    "type": "riddle",
    "prompt": "Proces mieszania genów pochodzących od ojca i matki podczas powstawania gamet to...",
    "options": null,
    "answer": "rekombinacja genetyczna",
    "explanation": "Podczas mejozy zachodzi rekombinacja genetyczna, między innymi dzięki wymianie fragmentów DNA między chromosomami homologicznymi i losowemu rozdzielaniu chromosomów."
  },
  {
    "id": "R01_POD_11",
    "section": "Podziały komórkowe",
    "type": "sequence",
    "prompt": "Ułóż uproszczony przebieg pierwszego podziału mejozy.",
    "options": null,
    "items": [
      "Powstają dwie komórki potomne",
      "Chromosomy homologiczne ustawiają się w płaszczyźnie równikowej",
      "Chromosomy homologiczne łączą się w pary",
      "Chromosomy homologiczne rozchodzą się do przeciwnych biegunów"
    ],
    "answer": [
      "Chromosomy homologiczne łączą się w pary",
      "Chromosomy homologiczne ustawiają się w płaszczyźnie równikowej",
      "Chromosomy homologiczne rozchodzą się do przeciwnych biegunów",
      "Powstają dwie komórki potomne"
    ],
    "explanation": "W pierwszym podziale mejozy chromosomy homologiczne łączą się w pary, ustawiają w płaszczyźnie równikowej, rozchodzą do przeciwnych biegunów i powstają dwie komórki."
  },
  {
    "id": "R01_MEN_01",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "single_choice",
    "prompt": "Jak nazywa się jedna z wersji tego samego genu?",
    "options": [
      "allel",
      "chromatyda",
      "kariotyp",
      "fenotyp",
      "nukleotyd",
      "centromer"
    ],
    "answer": 0,
    "explanation": "Różne wersje tego samego genu nazywa się allelami."
  },
  {
    "id": "R01_MEN_02",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "true_false",
    "prompt": "Allel dominujący może ujawnić swoją cechę zarówno u homozygoty dominującej, jak i u heterozygoty.",
    "options": null,
    "answer": true,
    "explanation": "Cecha dominująca ujawnia się przy obecności co najmniej jednego allelu dominującego."
  },
  {
    "id": "R01_MEN_03",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "fill_in",
    "prompt": "Osobnik o genotypie Aa jest __________, a osobnik o genotypie aa jest homozygotą recesywną.",
    "options": null,
    "answer": [
      "heterozygotą"
    ],
    "explanation": "Heterozygota ma dwa różne allele danego genu, na przykład Aa."
  },
  {
    "id": "R01_MEN_04",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "genotyp",
      "fenotyp",
      "homozygota",
      "heterozygota"
    ],
    "right": [
      "zapis alleli lub zespół genów",
      "cechy możliwe do zaobserwowania",
      "dwa identyczne allele",
      "dwa różne allele"
    ],
    "answer": {
      "genotyp": "zapis alleli lub zespół genów",
      "fenotyp": "cechy możliwe do zaobserwowania",
      "homozygota": "dwa identyczne allele",
      "heterozygota": "dwa różne allele"
    },
    "explanation": "Genotyp dotyczy informacji genetycznej lub zapisu alleli, fenotyp obejmuje cechy możliwe do zaobserwowania, a homozygota ma dwa identyczne allele."
  },
  {
    "id": "R01_MEN_05",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "single_choice",
    "prompt": "Co mówi prawo czystości gamet?",
    "options": [
      "Każda gameta ma dwa allele każdego genu",
      "Każda gameta ma tylko jeden allel danego genu",
      "Każda komórka somatyczna ma jeden chromosom",
      "Allele dominujące zanikają w gametach",
      "Gamety powstają wyłącznie przez mitozę",
      "Każdy gen ma tylko jedną wersję"
    ],
    "answer": 1,
    "image": "r01_gregor_mendel_groch.jpg",
    "explanation": "Pierwsze prawo Mendla mówi, że w każdej gamecie organizmu diploidalnego znajduje się tylko jeden allel danego genu."
  },
  {
    "id": "R01_MEN_06",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz cechy dominujące u człowieka.",
    "options": [
      "ciemne włosy",
      "piegi",
      "kręcone włosy",
      "jasne włosy",
      "brak piegów",
      "umiejętność zwijania języka w rurkę"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Do cech dominujących u człowieka należą między innymi ciemne włosy, piegi, kręcone włosy i umiejętność zwijania języka w rurkę."
  },
  {
    "id": "R01_MEN_07",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż genotyp niepasujący do pozostałych: AA, aa, BB, cc, Aa.",
    "options": null,
    "answer": "Aa",
    "explanation": "Aa jest heterozygotą, natomiast AA, aa, BB i cc są homozygotami."
  },
  {
    "id": "R01_MEN_08",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "scenario",
    "prompt": "Oboje rodzice mają piegi i są heterozygotami Aa. Piegi są cechą dominującą. Jakie jest prawdopodobieństwo urodzenia dziecka bez piegów?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "90%",
      "100%"
    ],
    "answer": 1,
    "image": "r01_cechy_rodzinne.jpg",
    "explanation": "Krzyżówka Aa × Aa daje genotypy AA, Aa, Aa i aa. Tylko aa oznacza brak piegów, więc prawdopodobieństwo wynosi 25%."
  },
  {
    "id": "R01_MEN_09",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do cech dominujących i recesywnych.",
    "options": null,
    "items": [
      "odstające uszy",
      "ciemny kolor oczu",
      "piegi",
      "przylegające uszy",
      "jasny kolor oczu",
      "brak piegów"
    ],
    "categories": [
      "cechy dominujące",
      "cechy recesywne"
    ],
    "answer": {
      "cechy dominujące": [
        "odstające uszy",
        "ciemny kolor oczu",
        "piegi"
      ],
      "cechy recesywne": [
        "przylegające uszy",
        "jasny kolor oczu",
        "brak piegów"
      ]
    },
    "explanation": "Wśród przykładów cech dominujących są odstające uszy, ciemne oczy i piegi, a recesywnych przylegające uszy, jasne oczy i brak piegów."
  },
  {
    "id": "R01_MEN_10",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "riddle",
    "prompt": "Możliwe do zaobserwowania cechy organizmu, takie jak kolor włosów i oczu, tworzą jego...",
    "options": null,
    "answer": "fenotyp",
    "explanation": "Fenotyp obejmuje cechy organizmu możliwe do zaobserwowania i zależy od genotypu oraz wpływu środowiska."
  },
  {
    "id": "R01_MEN_11",
    "section": "Prawa dziedziczenia i cechy człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz cechy, na które mogą wpływać zarówno geny, jak i środowisko.",
    "options": [
      "wzrost",
      "masa ciała",
      "blizna po skaleczeniu",
      "umiejętność czytania",
      "skłonność do zapadania na choroby serca"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Wzrost i masa ciała należą do cech zależnych zarówno od działania genów, jak i czynników środowiska."
  },
  {
    "id": "R01_KREW_01",
    "section": "Płeć i grupy krwi",
    "type": "single_choice",
    "prompt": "Jakie chromosomy płci występują typowo u kobiety?",
    "options": [
      "XX",
      "XY",
      "YY",
      "XO",
      "AA",
      "AB"
    ],
    "answer": 0,
    "image": "r01_chromosomy_plci.jpg",
    "explanation": "U kobiet 23. parę stanowią dwa chromosomy X, a u mężczyzn chromosomy X i Y."
  },
  {
    "id": "R01_KREW_02",
    "section": "Płeć i grupy krwi",
    "type": "true_false",
    "prompt": "Komórka jajowa człowieka zawsze zawiera chromosom X, natomiast plemnik może zawierać chromosom X albo Y.",
    "options": null,
    "answer": true,
    "explanation": "Płeć dziecka zależy od tego, czy z komórką jajową połączy się plemnik z chromosomem X czy Y."
  },
  {
    "id": "R01_KREW_03",
    "section": "Płeć i grupy krwi",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o cechach sprzężonych z płcią.",
    "options": [
      "Ich geny mogą być zlokalizowane w chromosomie X",
      "Mężczyzna ma tylko jeden chromosom X",
      "Kobieta heterozygotyczna może być nosicielką",
      "Recesywna cecha sprzężona z płcią zawsze ujawnia się u heterozygotycznej kobiety",
      "Hemofilia i daltonizm są przykładami takich cech"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Geny takich cech znajdują się w chromosomie X; mężczyzna ma tylko jeden chromosom X, a heterozygotyczna kobieta może być nosicielką recesywnego allelu."
  },
  {
    "id": "R01_KREW_04",
    "section": "Płeć i grupy krwi",
    "type": "match",
    "prompt": "Połącz grupę krwi z możliwym genotypem.",
    "options": null,
    "left": [
      "grupa A",
      "grupa B",
      "grupa AB",
      "grupa 0"
    ],
    "right": [
      "IAi",
      "IBi",
      "IAIB",
      "ii"
    ],
    "answer": {
      "grupa A": "IAi",
      "grupa B": "IBi",
      "grupa AB": "IAIB",
      "grupa 0": "ii"
    },
    "image": "r01_krwinki_czerwone.jpg",
    "explanation": "W układzie ABO allele IA i IB są dominujące, a allel i jest recesywny."
  },
  {
    "id": "R01_KREW_05",
    "section": "Płeć i grupy krwi",
    "type": "single_choice",
    "prompt": "Który allel genu grup krwi nie koduje żadnego antygenu A ani B?",
    "options": [
      "IA",
      "IB",
      "i",
      "R",
      "r",
      "X"
    ],
    "answer": 2,
    "explanation": "Allel i jest recesywny i nie koduje antygenu A ani B."
  },
  {
    "id": "R01_KREW_06",
    "section": "Płeć i grupy krwi",
    "type": "fill_in",
    "prompt": "Osoba z genotypem rr ma czynnik Rh __________, ponieważ nie ma antygenu D.",
    "options": null,
    "answer": [
      "ujemny"
    ],
    "explanation": "Allel R warunkuje obecność antygenu D, a homozygota rr ma grupę Rh-."
  },
  {
    "id": "R01_KREW_07",
    "section": "Płeć i grupy krwi",
    "type": "scenario",
    "prompt": "Kobieta ma grupę krwi Rh-, a mężczyzna Rh+. Ich dziecko odziedziczyło po ojcu allel R i ma Rh+. Jakie zjawisko może wystąpić?",
    "options": [
      "konflikt serologiczny",
      "mejoza",
      "rekombinacja",
      "mutacja genowa",
      "replikacja",
      "dziedziczenie mitochondrialne"
    ],
    "answer": 0,
    "explanation": "Przy matce Rh- i płodzie Rh+ może dojść do konfliktu serologicznego, gdy organizm matki wytworzy przeciwciała przeciw antygenowi D."
  },
  {
    "id": "R01_KREW_08",
    "section": "Płeć i grupy krwi",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do układu ABO: IA, IB, i, antygen A, antygen D.",
    "options": null,
    "answer": "antygen D",
    "explanation": "Antygen D dotyczy czynnika Rh, natomiast pozostałe elementy dotyczą głównych grup krwi ABO."
  },
  {
    "id": "R01_KREW_09",
    "section": "Płeć i grupy krwi",
    "type": "riddle",
    "prompt": "Kobieta, która ma jeden prawidłowy i jeden recesywny allel choroby sprzężonej z chromosomem X, ale sama nie choruje, to...",
    "options": null,
    "answer": "nosicielka",
    "explanation": "Heterozygotyczna kobieta może nie mieć objawów recesywnej choroby sprzężonej z płcią, ale może przekazać wadliwy allel potomstwu; jest nosicielką."
  },
  {
    "id": "R01_KREW_10",
    "section": "Płeć i grupy krwi",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do układu ABO albo czynnika Rh.",
    "options": null,
    "items": [
      "antygen A",
      "antygen B",
      "allel i",
      "antygen D",
      "allel R",
      "allel r"
    ],
    "categories": [
      "układ ABO",
      "czynnik Rh"
    ],
    "answer": {
      "układ ABO": [
        "antygen A",
        "antygen B",
        "allel i"
      ],
      "czynnik Rh": [
        "antygen D",
        "allel R",
        "allel r"
      ]
    },
    "explanation": "Układ ABO wiąże się z antygenami A i B oraz allelami IA, IB i i, a czynnik Rh z antygenem D oraz allelami R i r."
  },
  {
    "id": "R01_KREW_11",
    "section": "Płeć i grupy krwi",
    "type": "multi_select",
    "prompt": "Które grupy krwi może mieć dziecko, jeśli matka ma grupę A i jest heterozygotą IAi, a ojciec ma grupę 0 i genotyp ii?",
    "options": [
      "A",
      "B",
      "AB",
      "0"
    ],
    "answer": [
      0,
      3
    ],
    "explanation": "Krzyżówka IAi × ii daje potomstwo IAi lub ii, czyli z grupą krwi A albo 0."
  },
  {
    "id": "R01_MUT_01",
    "section": "Mutacje i choroby genetyczne",
    "type": "single_choice",
    "prompt": "Czym jest mutacja?",
    "options": [
      "czasowa zmiana wyglądu",
      "nagła trwała zmiana materiału genetycznego",
      "każdy podział komórki",
      "wytwarzanie białka",
      "połączenie gamet",
      "wyłącznie zmiana liczby komórek"
    ],
    "answer": 1,
    "explanation": "Mutacja to nagła i trwała zmiana w materiale genetycznym komórki."
  },
  {
    "id": "R01_MUT_02",
    "section": "Mutacje i choroby genetyczne",
    "type": "match",
    "prompt": "Połącz rodzaj mutacji z opisem.",
    "options": null,
    "left": [
      "mutacja genowa",
      "mutacja chromosomowa",
      "mutacja spontaniczna"
    ],
    "right": [
      "zmiana sekwencji nukleotydów",
      "zmiana budowy lub liczby chromosomów",
      "powstaje bez wpływu czynników zewnętrznych"
    ],
    "answer": {
      "mutacja genowa": "zmiana sekwencji nukleotydów",
      "mutacja chromosomowa": "zmiana budowy lub liczby chromosomów",
      "mutacja spontaniczna": "powstaje bez wpływu czynników zewnętrznych"
    },
    "explanation": "Mutacje genowe dotyczą sekwencji nukleotydów, a chromosomowe zmian budowy lub liczby chromosomów."
  },
  {
    "id": "R01_MUT_03",
    "section": "Mutacje i choroby genetyczne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki mutagenne.",
    "options": [
      "promieniowanie UV",
      "promieniowanie X",
      "składniki dymu tytoniowego",
      "toksyny grzybów pleśniowych",
      "niektóre wirusy",
      "woda pitna"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r01_mutageny_codziennosc.jpg",
    "explanation": "Do czynników mutagennych należą między innymi promieniowanie UV i X, składniki dymu tytoniowego, toksyny pleśni oraz niektóre wirusy."
  },
  {
    "id": "R01_MUT_04",
    "section": "Mutacje i choroby genetyczne",
    "type": "true_false",
    "prompt": "Mutacje zachodzące w komórkach somatycznych są przekazywane potomstwu.",
    "options": null,
    "answer": false,
    "explanation": "Dziedziczne mogą być mutacje obecne w gametach lub komórkach, z których gamety powstają; zmiany w komórkach somatycznych nie są przekazywane potomstwu."
  },
  {
    "id": "R01_MUT_05",
    "section": "Mutacje i choroby genetyczne",
    "type": "fill_in",
    "prompt": "Fenyloketonuria i mukowiscydoza są przykładami chorób __________ spowodowanych mutacją w pojedynczym genie.",
    "options": null,
    "answer": [
      "jednogenowych"
    ],
    "explanation": "Fenyloketonuria i mukowiscydoza należą do chorób jednogenowych."
  },
  {
    "id": "R01_MUT_06",
    "section": "Mutacje i choroby genetyczne",
    "type": "single_choice",
    "prompt": "Jaki objaw jest charakterystyczny dla mukowiscydozy?",
    "options": [
      "zbyt gęsty śluz w drogach oddechowych",
      "całkowity brak krwinek czerwonych",
      "wyłącznie zaburzenie rozpoznawania barw",
      "nadmierna produkcja melaniny",
      "brak chromosomu X",
      "wyłącznie złamania kości"
    ],
    "answer": 0,
    "explanation": "W mukowiscydozie gruczoły śluzowe produkują bardzo gęsty śluz, co prowadzi do kaszlu, infekcji dróg oddechowych i problemów z trawieniem."
  },
  {
    "id": "R01_MUT_07",
    "section": "Mutacje i choroby genetyczne",
    "type": "scenario",
    "prompt": "U noworodka wykryto chorobę, w której brak enzymu powoduje gromadzenie się aminokwasu i może uszkadzać układ nerwowy. Wczesne wprowadzenie odpowiedniej diety zapobiega ciężkim skutkom. O jakiej chorobie mowa?",
    "options": [
      "fenyloketonuria",
      "hemofilia",
      "daltonizm",
      "zespół Downa",
      "albinizm",
      "choroba Huntingtona"
    ],
    "answer": 0,
    "explanation": "Fenyloketonuria jest recesywną chorobą jednogenową; wczesne wykrycie i dieta pozwalają ograniczyć uszkodzenia układu nerwowego."
  },
  {
    "id": "R01_MUT_08",
    "section": "Mutacje i choroby genetyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę lub zaburzenie niebędące skutkiem mutacji w materiale genetycznym: mukowiscydoza, fenyloketonuria, zespół Downa, albinizm, przeziębienie.",
    "options": null,
    "answer": "przeziębienie",
    "explanation": "Przeziębienie jest chorobą zakaźną, natomiast pozostałe przykłady są związane ze zmianami materiału genetycznego."
  },
  {
    "id": "R01_MUT_09",
    "section": "Mutacje i choroby genetyczne",
    "type": "single_choice",
    "prompt": "Jaka zmiana jest charakterystyczna dla zespołu Downa?",
    "options": [
      "dodatkowy chromosom 21",
      "brak całego DNA w komórce",
      "dodatkowy chromosom X u każdej osoby",
      "utrata wszystkich autosomów",
      "zastąpienie DNA przez RNA",
      "brak chromosomów płci"
    ],
    "answer": 0,
    "explanation": "Zespół Downa wiąże się z obecnością dodatkowego trzeciego chromosomu 21, co daje łącznie 47 chromosomów."
  },
  {
    "id": "R01_MUT_10",
    "section": "Mutacje i choroby genetyczne",
    "type": "multi_select",
    "prompt": "Zaznacz badania prenatalne służące ocenie zdrowia zarodka lub płodu.",
    "options": [
      "badanie biochemiczne krwi matki",
      "amniopunkcja",
      "USG",
      "pomiar linii papilarnych",
      "badanie wzroku ojca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_badanie_prenatalne.jpg",
    "explanation": "Do badań prenatalnych należą badanie biochemiczne krwi matki, amniopunkcja i USG."
  },
  {
    "id": "R01_MUT_11",
    "section": "Mutacje i choroby genetyczne",
    "type": "riddle",
    "prompt": "Miejsce, w którym przyszli rodzice mogą na podstawie badań DNA ocenić ryzyko choroby genetycznej u dziecka, to poradnia...",
    "options": null,
    "answer": "genetyczna",
    "explanation": "Poradnictwo genetyczne pomaga oszacować ryzyko wystąpienia choroby genetycznej u dziecka i poznać możliwości leczenia oraz rehabilitacji."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Geny stanowią około __________% całego DNA, a pozostałe odcinki w większości nie kodują cech.",
    "options": null,
    "answer": [
      "2"
    ],
    "explanation": "Geny stanowią około 2% całości DNA, a pozostałe 98% obejmuje odcinki niekodujące; część z nich reguluje odczytywanie genów."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką łączną długość mają nici DNA w jednej komórce człowieka?",
    "options": [
      "około 2 milimetrów",
      "około 2 centymetrów",
      "ponad 2 metry",
      "około 20 metrów",
      "mniej niż 1 milimetr",
      "dokładnie 46 metrów"
    ],
    "answer": 2,
    "image": "r01_chromosom_w_komorce.jpg",
    "explanation": "W jednej komórce człowieka znajduje się łącznie ponad dwa metry nici DNA, dlatego materiał musi być silnie upakowany."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Sekwencja jednej nici DNA to TAACTGCAGGT. Podaj komplementarną sekwencję drugiej nici.",
    "options": null,
    "answer": "ATTGACGTCCA",
    "explanation": "Zasada komplementarności mówi: A łączy się z T, a C z G. Dla TAACTGCAGGT sekwencją komplementarną jest ATTGACGTCCA."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W prawidłowej dwuniciowej cząsteczce DNA adenina stanowi 30% zasad. Jaki procent stanowi tymina?",
    "options": [
      "10%",
      "20%",
      "30%",
      "40%",
      "60%",
      "70%"
    ],
    "answer": 2,
    "image": "r01_dna_podwojna_helisa.jpg",
    "explanation": "Reguła komplementarności sprawia, że w dwuniciowym DNA ilość adeniny jest równa ilości tyminy, więc tymina także stanowi 30%."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po replikacji chromosom zawiera dwie cząsteczki DNA, po jednej w każdej chromatydzie.",
    "options": null,
    "answer": true,
    "explanation": "Po replikacji chromosom składa się z dwóch chromatyd, a każda z nich zawiera jedną cząsteczkę DNA."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Komórka somatyczna człowieka ma 46 chromosomów. Ile chromosomów ma prawidłowa gameta człowieka?",
    "options": [
      "12",
      "22",
      "23",
      "44",
      "46",
      "92"
    ],
    "answer": 2,
    "explanation": "Gamety są haploidalne i zawierają pojedynczy zestaw 23 chromosomów."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kolejne zdarzenia prowadzące do powstania zmiennych genetycznie gamet w mejozie.",
    "options": null,
    "items": [
      "Rozdzielenie chromatyd w drugim podziale",
      "Powstanie czterech komórek haploidalnych",
      "Replikacja DNA przed mejozą",
      "Wymiana fragmentów DNA między chromosomami homologicznymi",
      "Rozdzielenie chromosomów homologicznych w pierwszym podziale"
    ],
    "answer": [
      "Replikacja DNA przed mejozą",
      "Wymiana fragmentów DNA między chromosomami homologicznymi",
      "Rozdzielenie chromosomów homologicznych w pierwszym podziale",
      "Rozdzielenie chromatyd w drugim podziale",
      "Powstanie czterech komórek haploidalnych"
    ],
    "explanation": "Przed mejozą zachodzi replikacja, następnie chromosomy homologiczne mogą wymieniać fragmenty DNA, pary rozchodzą się w pierwszym podziale, chromatydy w drugim, a efektem są cztery haploidalne gamety o różnych kombinacjach cech."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Krzyżuje się dwie heterozygoty Aa, a allel A jest dominujący. Jaki odsetek potomstwa ma fenotyp recesywny?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%",
      "12,5%"
    ],
    "answer": 1,
    "image": "r01_gregor_mendel_groch.jpg",
    "explanation": "Krzyżówka Aa × Aa daje genotypy AA, Aa, Aa i aa. Fenotyp recesywny występuje tylko przy aa, czyli u 1/4 potomstwa."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Oboje rodzice są nosicielami mukowiscydozy i mają genotyp Mm. Jakie jest prawdopodobieństwo urodzenia dziecka chorego na tę recesywną chorobę?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%",
      "33%"
    ],
    "answer": 1,
    "explanation": "Krzyżówka Mm × Mm daje MM, Mm, Mm i mm. Chore jest dziecko o genotypie mm, więc ryzyko wynosi 25%."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Mężczyzna z grupą krwi AB może przekazać dziecku allel i potrzebny do powstania grupy krwi 0.",
    "options": null,
    "answer": false,
    "explanation": "Genotyp grupy AB to IAIB i nie zawiera allelu i, więc osoba z grupą AB nie może przekazać dziecku allelu i."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zdrowy ojciec prawidłowo rozpoznaje barwy, a matka także widzi prawidłowo, lecz jest nosicielką allelu daltonizmu. Jakie jest prawdopodobieństwo urodzenia dziecka daltonisty?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%",
      "12,5%"
    ],
    "answer": 1,
    "image": "r01_chromosomy_plci.jpg",
    "explanation": "Dla zdrowego ojca i matki nosicielki prawdopodobieństwo urodzenia dziecka daltonisty wynosi 25%; w tym układzie będzie to chłopiec."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz warunki, które mogą prowadzić do konfliktu serologicznego.",
    "options": [
      "matka ma Rh-",
      "ojciec ma Rh+",
      "dziecko ma Rh+",
      "matka ma genotyp rr",
      "dziecko nie ma antygenu D",
      "ojciec ma wyłącznie genotyp rr"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ryzyko pojawia się, gdy matka ma Rh- i genotyp rr, ojciec ma Rh+ oraz dziecko odziedziczy po ojcu allel R i ma antygen D."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W chromosomie X zidentyfikowano ponad __________ genów, a w chromosomie Y ponad __________ genów.",
    "options": null,
    "answer": [
      "1000",
      "100"
    ],
    "explanation": "W chromosomie X zidentyfikowano ponad 1000 genów, a w chromosomie Y ponad 100 genów."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile chromosomów znajduje się w typowej komórce osoby z zespołem Downa wynikającym z trisomii chromosomu 21?",
    "options": [
      "23",
      "45",
      "46",
      "47",
      "48",
      "92"
    ],
    "answer": 3,
    "explanation": "Dodatkowy trzeci chromosom 21 zwiększa łączną liczbę chromosomów z 46 do 47."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakie jest szacowane ryzyko poronienia związane z amniopunkcją?",
    "options": [
      "0%",
      "0,2-1,0%",
      "2-10%",
      "10-20%",
      "25%",
      "50%"
    ],
    "answer": 1,
    "image": "r01_badanie_prenatalne.jpg",
    "explanation": "Ryzyko najcięższego powikłania amniopunkcji, czyli poronienia, szacuje się na 0,2-1,0%."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Genetyka",
  icon: "🧬",
  sectionOrder: [
    "Podstawy genetyki i DNA",
    "Podziały komórkowe",
    "Prawa dziedziczenia i cechy człowieka",
    "Płeć i grupy krwi",
    "Mutacje i choroby genetyczne"
  ],
  sectionIcons: {
    "Podstawy genetyki i DNA": "🧬",
    "Podziały komórkowe": "🔬",
    "Prawa dziedziczenia i cechy człowieka": "🌱",
    "Płeć i grupy krwi": "🩸",
    "Mutacje i choroby genetyczne": "⚠️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
