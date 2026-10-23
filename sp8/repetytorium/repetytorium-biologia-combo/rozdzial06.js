// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DNA  = Budowa DNA i RNA
//   MIT  = Mitoza i mejoza
//   DZI  = Dziedziczenie cech i grup krwi
//   PLC  = Dziedziczenie płci
//   MUT  = Mutacje
//   EWO  = Ewolucja
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_DNA_01",
    "section": "Budowa DNA i RNA",
    "type": "single_choice",
    "prompt": "Które zasady azotowe są ze sobą komplementarne w DNA?",
    "options": [
      "adenina i guanina",
      "adenina i tymina",
      "adenina i cytozyna",
      "tymina i cytozyna",
      "guanina i tymina",
      "adenina i uracyl"
    ],
    "answer": 1,
    "explanation": "W dwuniciowym DNA adenina łączy się z tyminą, a cytozyna z guaniną.",
    "image": "r06_podwojna_helisa.jpg"
  },
  {
    "id": "R06_DNA_02",
    "section": "Budowa DNA i RNA",
    "type": "multi_select",
    "prompt": "Zaznacz składniki pojedynczego nukleotydu DNA.",
    "options": [
      "deoksyryboza",
      "ryboza",
      "reszta kwasu fosforowego",
      "aminokwas",
      "zasada azotowa",
      "białko histonowe"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Nukleotyd DNA zawiera deoksyrybozę, resztę kwasu fosforowego i jedną zasadę azotową."
  },
  {
    "id": "R06_DNA_03",
    "section": "Budowa DNA i RNA",
    "type": "true_false",
    "prompt": "RNA, w odróżnieniu od DNA, jest zwykle zbudowany z jednej nici.",
    "options": null,
    "answer": true,
    "explanation": "DNA ma postać podwójnej helisy, a RNA zwykle pojedynczego łańcucha nukleotydów."
  },
  {
    "id": "R06_DNA_04",
    "section": "Budowa DNA i RNA",
    "type": "fill_in",
    "prompt": "Cukrem w DNA jest __________, a cukrem w RNA jest __________.",
    "options": null,
    "answer": [
      "deoksyryboza",
      "ryboza"
    ],
    "altAnswers": [
      [
        "deoksyryboza"
      ],
      [
        "ryboza"
      ]
    ],
    "explanation": "Nukleotydy DNA zawierają deoksyrybozę, natomiast nukleotydy RNA — rybozę."
  },
  {
    "id": "R06_DNA_05",
    "section": "Budowa DNA i RNA",
    "type": "riddle",
    "prompt": "Jak nazywa się proces podwojenia DNA przed podziałem komórki?",
    "options": null,
    "answer": "replikacja",
    "altAnswers": [
      "replikacja",
      "replikacja DNA"
    ],
    "explanation": "Przed podziałem komórki DNA ulega replikacji, dzięki czemu komórki potomne mogą otrzymać informację genetyczną.",
    "image": "r06_replikacja_dna.jpg"
  },
  {
    "id": "R06_DNA_06",
    "section": "Budowa DNA i RNA",
    "type": "odd_one_out",
    "prompt": "Wskaż zasadę występującą w RNA zamiast tyminy: adenina, cytozyna, guanina, uracyl.",
    "options": null,
    "answer": "uracyl",
    "explanation": "RNA zawiera uracyl, podczas gdy w DNA odpowiada mu tymina."
  },
  {
    "id": "R06_DNA_07",
    "section": "Budowa DNA i RNA",
    "type": "scenario",
    "prompt": "Badacz zapisał fragment jednej nici DNA jako ATGC. Który zapis przedstawia nić komplementarną do tej sekwencji?",
    "options": [
      "TACG",
      "ATGC",
      "UACG",
      "TAGC",
      "CGTA",
      "TACC"
    ],
    "answer": 0,
    "explanation": "Zasada komplementarności oznacza parowanie A z T oraz G z C, dlatego do ATGC pasuje TACG.",
    "image": "r06_podwojna_helisa.jpg"
  },
  {
    "id": "R06_DNA_08",
    "section": "Budowa DNA i RNA",
    "type": "match",
    "prompt": "Dopasuj rodzaj RNA do jego funkcji.",
    "options": null,
    "left": [
      "mRNA",
      "rRNA",
      "tRNA",
      "hnRNA"
    ],
    "right": [
      "jest prekursorem mRNA",
      "transportuje aminokwasy do rybosomów",
      "przenosi informację genetyczną",
      "wchodzi w skład rybosomów"
    ],
    "answer": {
      "mRNA": "przenosi informację genetyczną",
      "rRNA": "wchodzi w skład rybosomów",
      "tRNA": "transportuje aminokwasy do rybosomów",
      "hnRNA": "jest prekursorem mRNA"
    },
    "explanation": "mRNA, rRNA, tRNA i hnRNA pełnią odmienne role w powstawaniu białek."
  },
  {
    "id": "R06_DNA_09",
    "section": "Budowa DNA i RNA",
    "type": "sort",
    "prompt": "Przyporządkuj składniki charakterystyczne dla DNA albo RNA.",
    "options": null,
    "items": [
      "uracyl",
      "deoksyryboza",
      "ryboza",
      "tymina"
    ],
    "categories": [
      "DNA",
      "RNA"
    ],
    "answer": {
      "DNA": [
        "deoksyryboza",
        "tymina"
      ],
      "RNA": [
        "ryboza",
        "uracyl"
      ]
    },
    "explanation": "Deoksyryboza i tymina są charakterystyczne dla DNA, natomiast ryboza i uracyl — dla RNA."
  },
  {
    "id": "R06_DNA_10",
    "section": "Budowa DNA i RNA",
    "type": "sequence",
    "prompt": "Ułóż etapy replikacji DNA we właściwej kolejności.",
    "options": null,
    "items": [
      "powstanie dwóch identycznych cząsteczek DNA",
      "rozplecenie dwóch nici DNA",
      "rozdzielenie kopii DNA do komórek potomnych",
      "dołączenie komplementarnych wolnych nukleotydów"
    ],
    "answer": [
      "rozplecenie dwóch nici DNA",
      "dołączenie komplementarnych wolnych nukleotydów",
      "powstanie dwóch identycznych cząsteczek DNA",
      "rozdzielenie kopii DNA do komórek potomnych"
    ],
    "explanation": "Podczas replikacji nici rozdzielają się, dołączane są komplementarne nukleotydy, a kopie DNA mogą trafić do komórek potomnych.",
    "image": "r06_replikacja_dna.jpg"
  },
  {
    "id": "R06_MIT_01",
    "section": "Mitoza i mejoza",
    "type": "single_choice",
    "prompt": "Ile komórek potomnych powstaje z jednej komórki macierzystej w wyniku mitozy?",
    "options": [
      "jedna",
      "dwie",
      "trzy",
      "cztery",
      "sześć",
      "osiem"
    ],
    "answer": 1,
    "explanation": "Mitoza prowadzi do powstania dwóch komórek potomnych o tej samej liczbie chromosomów co komórka macierzysta.",
    "image": "r06_fazy_mitozy.jpg"
  },
  {
    "id": "R06_MIT_02",
    "section": "Mitoza i mejoza",
    "type": "multi_select",
    "prompt": "Zaznacz znaczenie mitozy.",
    "options": [
      "wzrost organizmu wielokomórkowego",
      "powstawanie identycznych genetycznie komórek potomnych",
      "zmniejszenie liczby chromosomów o połowę",
      "rozmnażanie niektórych organizmów jednokomórkowych",
      "wymiana fragmentów chromatyd w crossing-over"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Mitoza umożliwia wzrost organizmów wielokomórkowych, powielanie komórek oraz rozmnażanie części organizmów jednokomórkowych."
  },
  {
    "id": "R06_MIT_03",
    "section": "Mitoza i mejoza",
    "type": "true_false",
    "prompt": "W wyniku mejozy powstają cztery komórki potomne z pojedynczym zestawem chromosomów.",
    "options": null,
    "answer": true,
    "explanation": "Mejoza obejmuje dwa podziały i prowadzi do powstania czterech komórek haploidalnych."
  },
  {
    "id": "R06_MIT_04",
    "section": "Mitoza i mejoza",
    "type": "fill_in",
    "prompt": "W typowej komórce somatycznej człowieka znajdują się __________ chromosomy, a w gamecie __________ chromosomy.",
    "options": null,
    "answer": [
      "46",
      "23"
    ],
    "altAnswers": [
      [
        "46"
      ],
      [
        "23"
      ]
    ],
    "explanation": "Komórki somatyczne człowieka są diploidalne (2n = 46), a komórki rozrodcze haploidalne (n = 23)."
  },
  {
    "id": "R06_MIT_05",
    "section": "Mitoza i mejoza",
    "type": "riddle",
    "prompt": "Jak nazywa się wymiana fragmentów chromatyd chromosomów homologicznych podczas mejozy?",
    "options": null,
    "answer": "crossing-over",
    "altAnswers": [
      "crossing-over",
      "crossing over",
      "rekombinacja genetyczna"
    ],
    "explanation": "Crossing-over, nazywany też rekombinacją genetyczną, może zachodzić w profazie pierwszego podziału mejotycznego.",
    "image": "r06_crossing_over.jpg"
  },
  {
    "id": "R06_MIT_06",
    "section": "Mitoza i mejoza",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę fazy odróżniającą drugi podział mejozy od faz mitozy: profaza, metafaza, anafaza, metafaza II.",
    "options": null,
    "answer": "metafaza II",
    "explanation": "Fazy mitozy mają nazwy profaza, metafaza, anafaza i telofaza. Oznaczenie II odnosi się do drugiego podziału mejozy."
  },
  {
    "id": "R06_MIT_07",
    "section": "Mitoza i mejoza",
    "type": "scenario",
    "prompt": "Komórka skóry człowieka zawiera 46 chromosomów i dzieli się przez mitozę. Ile chromosomów będzie miała każda komórka potomna?",
    "options": [
      "23",
      "92",
      "46",
      "12",
      "44",
      "24"
    ],
    "answer": 2,
    "explanation": "Podczas mitozy liczba chromosomów zostaje zachowana, więc każda z dwóch komórek potomnych ma 46 chromosomów."
  },
  {
    "id": "R06_MIT_08",
    "section": "Mitoza i mejoza",
    "type": "match",
    "prompt": "Dopasuj fazę mitozy do opisanego wydarzenia.",
    "options": null,
    "left": [
      "profaza",
      "metafaza",
      "anafaza",
      "telofaza"
    ],
    "right": [
      "chromatydy przemieszczają się ku przeciwnym biegunom",
      "odtwarzają się jądra i kończy się podział komórki",
      "chromosomy stają się widoczne i zanika otoczka jądrowa",
      "chromosomy ustawiają się w płaszczyźnie równikowej"
    ],
    "answer": {
      "profaza": "chromosomy stają się widoczne i zanika otoczka jądrowa",
      "metafaza": "chromosomy ustawiają się w płaszczyźnie równikowej",
      "anafaza": "chromatydy przemieszczają się ku przeciwnym biegunom",
      "telofaza": "odtwarzają się jądra i kończy się podział komórki"
    },
    "explanation": "W mitozie chromosomy kondensują się w profazie, ustawiają w metafazie, rozdzielają w anafazie, a w telofazie odtwarzają się jądra.",
    "image": "r06_fazy_mitozy.jpg"
  },
  {
    "id": "R06_MIT_09",
    "section": "Mitoza i mejoza",
    "type": "sort",
    "prompt": "Przyporządkuj cechy odpowiednim podziałom komórkowym.",
    "options": null,
    "items": [
      "cztery komórki potomne",
      "jeden podział",
      "redukcja liczby chromosomów",
      "dwa kolejne podziały",
      "zachowanie liczby chromosomów",
      "dwie komórki potomne"
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
        "dwa kolejne podziały",
        "cztery komórki potomne",
        "redukcja liczby chromosomów"
      ]
    },
    "explanation": "W mitozie powstają dwie komórki z zachowaną liczbą chromosomów, a w mejozie — cztery komórki z liczbą zredukowaną."
  },
  {
    "id": "R06_MIT_10",
    "section": "Mitoza i mejoza",
    "type": "sequence",
    "prompt": "Ustaw fazy pierwszego podziału mejotycznego w prawidłowej kolejności.",
    "options": null,
    "items": [
      "anafaza I",
      "profaza I",
      "telofaza I",
      "metafaza I"
    ],
    "answer": [
      "profaza I",
      "metafaza I",
      "anafaza I",
      "telofaza I"
    ],
    "explanation": "Pierwszy podział mejozy obejmuje kolejno profazę I, metafazę I, anafazę I oraz telofazę I.",
    "image": "r06_crossing_over.jpg"
  },
  {
    "id": "R06_DZI_01",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "single_choice",
    "prompt": "Który genotyp jest heterozygotą dla badanego genu?",
    "options": [
      "AA",
      "Aa",
      "aa",
      "BB",
      "bb",
      "CC"
    ],
    "answer": 1,
    "explanation": "Heterozygota ma dwa różne allele jednego genu, na przykład Aa."
  },
  {
    "id": "R06_DZI_02",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "multi_select",
    "prompt": "Które genotypy mogą odpowiadać grupie krwi A w układzie ABO?",
    "options": [
      "IᴬIᴬ",
      "Iᴮi⁰",
      "Iᴬi⁰",
      "IᴬIᴮ",
      "i⁰i⁰",
      "IᴮIᴮ"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Grupa A występuje u osób o genotypie IᴬIᴬ lub Iᴬi⁰. Allel i⁰ jest recesywny.",
    "image": "r06_grupy_krwi.jpg"
  },
  {
    "id": "R06_DZI_03",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "true_false",
    "prompt": "Krzyżówka Aa × Aa daje stosunek genotypów potomstwa 1 AA : 2 Aa : 1 aa.",
    "options": null,
    "answer": true,
    "explanation": "Dwa osobniki heterozygotyczne dają po 25% AA i aa oraz 50% Aa."
  },
  {
    "id": "R06_DZI_04",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "fill_in",
    "prompt": "Zgodnie z prawem czystości gamet każda gameta otrzymuje __________ allel danego genu.",
    "options": null,
    "answer": [
      "jeden"
    ],
    "altAnswers": [
      [
        "jeden",
        "1"
      ]
    ],
    "explanation": "Pierwsze prawo Mendla mówi, że do każdej gamety trafia tylko po jednym allelu danego genu."
  },
  {
    "id": "R06_DZI_05",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "riddle",
    "prompt": "Jak nazywa się zespół widocznych cech organizmu, zależny od genotypu i środowiska?",
    "options": null,
    "answer": "fenotyp",
    "altAnswers": [
      "fenotyp"
    ],
    "explanation": "Fenotyp to cechy, które można zaobserwować; genotyp to zestaw alleli danego organizmu."
  },
  {
    "id": "R06_DZI_06",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "odd_one_out",
    "prompt": "Który genotyp nie jest homozygotą: AA, aa, Aa, BB.",
    "options": null,
    "answer": "Aa",
    "explanation": "Homozygota ma jednakowe allele (np. AA lub aa), a Aa to heterozygota."
  },
  {
    "id": "R06_DZI_07",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "scenario",
    "prompt": "Skrzyżowano dwie rośliny o czerwonych kwiatach i genotypach Aa. Allel a oznacza kwiat biały. Jakie jest prawdopodobieństwo uzyskania rośliny o białych kwiatach?",
    "options": [
      "0%",
      "50%",
      "75%",
      "25%",
      "100%",
      "10%"
    ],
    "answer": 3,
    "explanation": "Krzyżówka Aa × Aa daje genotyp aa w jednej z czterech równoprawdopodobnych kombinacji, czyli w 25% przypadków.",
    "image": "r06_krzyzowka_punnetta.jpg"
  },
  {
    "id": "R06_DZI_08",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "match",
    "prompt": "Połącz genotyp układu ABO z odpowiadającą mu grupą krwi.",
    "options": null,
    "left": [
      "Iᴬi⁰",
      "Iᴮi⁰",
      "IᴬIᴮ",
      "i⁰i⁰"
    ],
    "right": [
      "AB",
      "0",
      "A",
      "B"
    ],
    "answer": {
      "Iᴬi⁰": "A",
      "Iᴮi⁰": "B",
      "IᴬIᴮ": "AB",
      "i⁰i⁰": "0"
    },
    "explanation": "Allele Iᴬ i Iᴮ są współdominujące, a allel i⁰ jest recesywny; dlatego genotypy pozwalają określić grupy A, B, AB i 0.",
    "image": "r06_grupy_krwi.jpg"
  },
  {
    "id": "R06_DZI_09",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "sort",
    "prompt": "Przydziel genotypy do homozygot i heterozygot.",
    "options": null,
    "items": [
      "Bb",
      "BB",
      "aa",
      "Cc",
      "AA",
      "Aa"
    ],
    "categories": [
      "homozygoty",
      "heterozygoty"
    ],
    "answer": {
      "homozygoty": [
        "AA",
        "aa",
        "BB"
      ],
      "heterozygoty": [
        "Aa",
        "Bb",
        "Cc"
      ]
    },
    "explanation": "Homozygoty mają dwie takie same wersje allelu, a heterozygoty dwie różne."
  },
  {
    "id": "R06_DZI_10",
    "section": "Dziedziczenie cech i grup krwi",
    "type": "sequence",
    "prompt": "Ułóż kolejne czynności przy tworzeniu krzyżówki genetycznej.",
    "options": null,
    "items": [
      "połączenie alleli gamet w tabeli",
      "odczytanie możliwych genotypów potomstwa",
      "zapisanie genotypów rodziców",
      "wyznaczenie gamet każdego rodzica"
    ],
    "answer": [
      "zapisanie genotypów rodziców",
      "wyznaczenie gamet każdego rodzica",
      "połączenie alleli gamet w tabeli",
      "odczytanie możliwych genotypów potomstwa"
    ],
    "explanation": "Krzyżówka genetyczna zaczyna się od genotypów rodziców i gamet, a następnie przedstawia możliwe kombinacje u potomstwa.",
    "image": "r06_krzyzowka_punnetta.jpg"
  },
  {
    "id": "R06_PLC_01",
    "section": "Dziedziczenie płci",
    "type": "single_choice",
    "prompt": "Który chromosom płci może występować w plemniku, ale nie w prawidłowej komórce jajowej?",
    "options": [
      "wyłącznie chromosom X",
      "dwa chromosomy X",
      "chromosom Y",
      "jednocześnie X i Y",
      "żaden chromosom płci",
      "dwa chromosomy Y"
    ],
    "answer": 2,
    "explanation": "Komórka jajowa zawiera chromosom X, natomiast plemnik może nieść chromosom X albo Y.",
    "image": "r06_chromosomy_plci.jpg"
  },
  {
    "id": "R06_PLC_02",
    "section": "Dziedziczenie płci",
    "type": "multi_select",
    "prompt": "Które choroby lub zaburzenia są związane z cechami sprzężonymi z płcią?",
    "options": [
      "daltonizm",
      "fenyloketonuria",
      "hemofilia",
      "zespół łamliwego chromosomu X",
      "mukowiscydoza",
      "zespół Downa"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Daltonizm, hemofilia i zespół łamliwego chromosomu X są przykładami zaburzeń związanych z chromosomem X."
  },
  {
    "id": "R06_PLC_03",
    "section": "Dziedziczenie płci",
    "type": "true_false",
    "prompt": "Syn o kariotypie XY otrzymuje chromosom X od matki, a chromosom Y od ojca.",
    "options": null,
    "answer": true,
    "explanation": "Komórka jajowa wnosi zawsze X, a plemnik decydujący o genotypie XY wnosi Y."
  },
  {
    "id": "R06_PLC_04",
    "section": "Dziedziczenie płci",
    "type": "fill_in",
    "prompt": "Zapis kariotypu kobiety to 44A + __________, a mężczyzny to 44A + __________.",
    "options": null,
    "answer": [
      "XX",
      "XY"
    ],
    "altAnswers": [
      [
        "XX"
      ],
      [
        "XY"
      ]
    ],
    "explanation": "Obie płcie mają 44 autosomy. Para chromosomów płci to XX u kobiety i XY u mężczyzny.",
    "image": "r06_chromosomy_plci.jpg"
  },
  {
    "id": "R06_PLC_05",
    "section": "Dziedziczenie płci",
    "type": "riddle",
    "prompt": "Jak nazywamy zdrową kobietę, która ma jeden recesywny allel choroby sprzężonej z chromosomem X i może przekazać go potomstwu?",
    "options": null,
    "answer": "nosicielka",
    "altAnswers": [
      "nosicielka"
    ],
    "explanation": "U heterozygoty z dominującym allelem prawidłowym cecha recesywna zwykle się nie ujawnia, ale może zostać przekazana dzieciom."
  },
  {
    "id": "R06_PLC_06",
    "section": "Dziedziczenie płci",
    "type": "odd_one_out",
    "prompt": "Wskaż chromosom będący autosomem: chromosom X, chromosom Y, chromosom 21, chromosom X u kobiety.",
    "options": null,
    "answer": "chromosom 21",
    "explanation": "Chromosom 21 należy do autosomów; X i Y to chromosomy płci, czyli allosomy."
  },
  {
    "id": "R06_PLC_07",
    "section": "Dziedziczenie płci",
    "type": "scenario",
    "prompt": "Matka jest nosicielką daltonizmu (XᴰXᵈ), a ojciec widzi barwy prawidłowo (XᴰY). Jakie jest prawdopodobieństwo urodzenia się dziecka chorego na daltonizm, licząc wszystkie dzieci?",
    "options": [
      "50%",
      "25%",
      "0%",
      "75%",
      "100%",
      "12,5%"
    ],
    "answer": 1,
    "explanation": "W tej krzyżówce co czwarte dziecko może mieć genotyp XᵈY, zatem prawdopodobieństwo wynosi 25%.",
    "image": "r06_dziedziczenie_daltonizmu.jpg"
  },
  {
    "id": "R06_PLC_08",
    "section": "Dziedziczenie płci",
    "type": "match",
    "prompt": "Połącz genotyp związany z daltonizmem z opisem potomka.",
    "options": null,
    "left": [
      "XᴰXᴰ",
      "XᴰXᵈ",
      "XᵈY",
      "XᴰY"
    ],
    "right": [
      "chłopiec bez daltonizmu",
      "dziewczynka zdrowa będąca nosicielką",
      "dziewczynka zdrowa bez allelu daltonizmu",
      "chłopiec z daltonizmem"
    ],
    "answer": {
      "XᴰXᴰ": "dziewczynka zdrowa bez allelu daltonizmu",
      "XᴰXᵈ": "dziewczynka zdrowa będąca nosicielką",
      "XᵈY": "chłopiec z daltonizmem",
      "XᴰY": "chłopiec bez daltonizmu"
    },
    "explanation": "Recesywny allel na X wywołuje daltonizm u chłopca XᵈY, a dziewczynka XᴰXᵈ jest nosicielką."
  },
  {
    "id": "R06_PLC_09",
    "section": "Dziedziczenie płci",
    "type": "sort",
    "prompt": "Zaklasyfikuj rodzaje gamet ze względu na chromosom płci.",
    "options": null,
    "items": [
      "plemnik z Y",
      "komórka jajowa z X",
      "plemnik z X"
    ],
    "categories": [
      "komórka jajowa",
      "plemnik"
    ],
    "answer": {
      "komórka jajowa": [
        "komórka jajowa z X"
      ],
      "plemnik": [
        "plemnik z X",
        "plemnik z Y"
      ]
    },
    "explanation": "Komórki jajowe mają chromosom X, natomiast plemniki mogą mieć X lub Y."
  },
  {
    "id": "R06_PLC_10",
    "section": "Dziedziczenie płci",
    "type": "sequence",
    "prompt": "Ustaw etapy ustalenia płci genetycznej człowieka w prawidłowej kolejności.",
    "options": null,
    "items": [
      "powstaje zygota o układzie XX albo XY",
      "powstają gamety zawierające chromosomy płci",
      "organizm rozwija się zgodnie z zestawem chromosomów płci",
      "komórka jajowa łączy się z plemnikiem"
    ],
    "answer": [
      "powstają gamety zawierające chromosomy płci",
      "komórka jajowa łączy się z plemnikiem",
      "powstaje zygota o układzie XX albo XY",
      "organizm rozwija się zgodnie z zestawem chromosomów płci"
    ],
    "explanation": "Płeć genetyczna ustala się podczas zapłodnienia na podstawie układu XX lub XY w zygocie."
  },
  {
    "id": "R06_MUT_01",
    "section": "Mutacje",
    "type": "single_choice",
    "prompt": "Jak nazywa się mutacja polegająca na obecności dodatkowego chromosomu w komórce?",
    "options": [
      "inwersja",
      "delecja",
      "monosomia",
      "trisomia",
      "translokacja",
      "duplikacja"
    ],
    "answer": 3,
    "explanation": "Trisomia oznacza obecność dodatkowego chromosomu (2n + 1), a monosomia — brak jednego (2n − 1)."
  },
  {
    "id": "R06_MUT_02",
    "section": "Mutacje",
    "type": "multi_select",
    "prompt": "Wskaż czynniki mutagenne.",
    "options": [
      "promieniowanie ultrafioletowe",
      "sole metali ciężkich",
      "enzymy naprawcze DNA",
      "promieniowanie rentgenowskie",
      "dobór naturalny",
      "niektóre wirusy"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do czynników mutagennych zaliczono promieniowanie UV i rentgenowskie, sole metali ciężkich oraz niektóre wirusy."
  },
  {
    "id": "R06_MUT_03",
    "section": "Mutacje",
    "type": "true_false",
    "prompt": "Mutacje zachodzące wyłącznie w komórkach somatycznych człowieka są zazwyczaj dziedziczone przez jego dzieci.",
    "options": null,
    "answer": false,
    "explanation": "Dziedziczne mogą być mutacje występujące w komórkach rozrodczych, a nie somatycznych."
  },
  {
    "id": "R06_MUT_04",
    "section": "Mutacje",
    "type": "fill_in",
    "prompt": "Brak jednego chromosomu w komórce to __________, a obecność dodatkowego chromosomu to __________.",
    "options": null,
    "answer": [
      "monosomia",
      "trisomia"
    ],
    "altAnswers": [
      [
        "monosomia"
      ],
      [
        "trisomia"
      ]
    ],
    "explanation": "Monosomia ma zapis 2n − 1, natomiast trisomia 2n + 1."
  },
  {
    "id": "R06_MUT_05",
    "section": "Mutacje",
    "type": "riddle",
    "prompt": "Jak nazywa się mutacja polegająca na obróceniu fragmentu chromosomu o 180 stopni?",
    "options": null,
    "answer": "inwersja",
    "altAnswers": [
      "inwersja"
    ],
    "explanation": "Inwersja zmienia kolejność ułożenia genów przez odwrócenie odcinka chromosomu.",
    "image": "r06_zmiany_chromosomowe.jpg"
  },
  {
    "id": "R06_MUT_06",
    "section": "Mutacje",
    "type": "odd_one_out",
    "prompt": "Wskaż zmianę, która nie jest strukturalną mutacją chromosomową: delecja, duplikacja, translokacja, trisomia.",
    "options": null,
    "answer": "trisomia",
    "explanation": "Trisomia jest mutacją liczbową, pozostałe pojęcia oznaczają zmiany struktury chromosomów."
  },
  {
    "id": "R06_MUT_07",
    "section": "Mutacje",
    "type": "scenario",
    "prompt": "W badaniu kariotypu wykryto u dziecka trzy kopie chromosomu 21. Jakie schorzenie wiąże się z taką zmianą?",
    "options": [
      "zespół Downa",
      "hemofilia",
      "fenyloketonuria",
      "mukowiscydoza",
      "daltonizm",
      "zespół łamliwego chromosomu X"
    ],
    "answer": 0,
    "explanation": "Trisomia chromosomu 21 jest przyczyną zespołu Downa.",
    "image": "r06_kariotyp_trisomia.jpg"
  },
  {
    "id": "R06_MUT_08",
    "section": "Mutacje",
    "type": "match",
    "prompt": "Dopasuj nazwę mutacji strukturalnej do opisu.",
    "options": null,
    "left": [
      "delecja",
      "duplikacja",
      "inwersja",
      "translokacja"
    ],
    "right": [
      "przeniesienie fragmentu na inny chromosom",
      "odwrócenie fragmentu chromosomu",
      "utrata fragmentu chromosomu",
      "powielenie fragmentu chromosomu"
    ],
    "answer": {
      "delecja": "utrata fragmentu chromosomu",
      "duplikacja": "powielenie fragmentu chromosomu",
      "inwersja": "odwrócenie fragmentu chromosomu",
      "translokacja": "przeniesienie fragmentu na inny chromosom"
    },
    "explanation": "Delecja usuwa, duplikacja powiela, inwersja odwraca, a translokacja przenosi fragment chromosomu.",
    "image": "r06_zmiany_chromosomowe.jpg"
  },
  {
    "id": "R06_MUT_09",
    "section": "Mutacje",
    "type": "sort",
    "prompt": "Przyporządkuj czynniki mutagenne do ich rodzajów.",
    "options": null,
    "items": [
      "konserwanty",
      "wirus HPV",
      "promieniowanie UV",
      "substancje produkowane przez pleśnie",
      "sole metali ciężkich",
      "promieniowanie rentgenowskie"
    ],
    "categories": [
      "fizyczne",
      "chemiczne",
      "biologiczne"
    ],
    "answer": {
      "fizyczne": [
        "promieniowanie UV",
        "promieniowanie rentgenowskie"
      ],
      "chemiczne": [
        "sole metali ciężkich",
        "konserwanty"
      ],
      "biologiczne": [
        "wirus HPV",
        "substancje produkowane przez pleśnie"
      ]
    },
    "explanation": "Mutageny dzielą się na fizyczne, chemiczne i biologiczne."
  },
  {
    "id": "R06_MUT_10",
    "section": "Mutacje",
    "type": "single_choice",
    "prompt": "Która choroba wymaga diety ograniczającej fenyloalaninę?",
    "options": [
      "hemofilia",
      "mukowiscydoza",
      "fenyloketonuria",
      "zespół Downa",
      "daltonizm",
      "zespół łamliwego chromosomu X"
    ],
    "answer": 2,
    "explanation": "Fenyloketonuria wynika z zaburzenia metabolizmu jednego z aminokwasów. Właściwa dieta pomaga ograniczać jej skutki."
  },
  {
    "id": "R06_EWO_01",
    "section": "Ewolucja",
    "type": "single_choice",
    "prompt": "Jak nazywa się dziedzina biologii badająca szczątki organizmów zachowane w skałach?",
    "options": [
      "genetyka",
      "ekologia",
      "paleontologia",
      "cytologia",
      "fizjologia",
      "embriologia"
    ],
    "answer": 2,
    "explanation": "Paleontologia analizuje skamieniałości, aby poznawać budowę dawnych organizmów i ich środowisko.",
    "image": "r06_skamienialosc_archeopteryksa.jpg"
  },
  {
    "id": "R06_EWO_02",
    "section": "Ewolucja",
    "type": "multi_select",
    "prompt": "Zaznacz bezpośrednie dowody ewolucji.",
    "options": [
      "szkielety dinozaurów",
      "narządy szczątkowe",
      "owady zatopione w bursztynie",
      "narządy homologiczne",
      "odciski liści paproci",
      "narządy analogiczne"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do dowodów bezpośrednich należą skamieniałości, zachowane ciała organizmów i odciski."
  },
  {
    "id": "R06_EWO_03",
    "section": "Ewolucja",
    "type": "true_false",
    "prompt": "Narządy homologiczne mają podobny plan budowy, mimo że mogą pełnić różne funkcje.",
    "options": null,
    "answer": true,
    "explanation": "Przykładem są kończyna konia i płetwa delfina, o wspólnym planie budowy, ale odmiennych funkcjach."
  },
  {
    "id": "R06_EWO_04",
    "section": "Ewolucja",
    "type": "fill_in",
    "prompt": "Dobór zależny od warunków środowiska nazywamy __________, a dobór celowo prowadzony przez hodowcę — __________.",
    "options": null,
    "answer": [
      "naturalnym",
      "sztucznym"
    ],
    "altAnswers": [
      [
        "naturalnym",
        "naturalny"
      ],
      [
        "sztucznym",
        "sztuczny"
      ]
    ],
    "explanation": "W doborze naturalnym decyduje środowisko, natomiast dobór sztuczny opiera się na celowym wybieraniu osobników o pożądanych cechach."
  },
  {
    "id": "R06_EWO_05",
    "section": "Ewolucja",
    "type": "riddle",
    "prompt": "Jak nazywa się organizm kopalny łączący cechy gadów i ptaków?",
    "options": null,
    "answer": "archeopteryks",
    "altAnswers": [
      "archeopteryks",
      "archeopteryx"
    ],
    "explanation": "Archeopteryks miał między innymi zęby i długi ogon oraz pióra i cechy szkieletu ptaków.",
    "image": "r06_skamienialosc_archeopteryksa.jpg"
  },
  {
    "id": "R06_EWO_06",
    "section": "Ewolucja",
    "type": "odd_one_out",
    "prompt": "Który przykład należy do dowodów bezpośrednich zamiast pośrednich: narządy homologiczne, narządy analogiczne, narządy szczątkowe, szkielet dinozaura.",
    "options": null,
    "answer": "szkielet dinozaura",
    "explanation": "Szkielet dinozaura jest skamieniałością, czyli dowodem bezpośrednim. Pozostałe należą do porównawczych dowodów pośrednich."
  },
  {
    "id": "R06_EWO_07",
    "section": "Ewolucja",
    "type": "scenario",
    "prompt": "Hodowca przez kolejne pokolenia krzyżuje tylko rośliny wydające największe i najbardziej soczyste owoce. Jaki proces opisuje ta sytuacja?",
    "options": [
      "dobór sztuczny",
      "dobór naturalny",
      "izolacja geograficzna",
      "crossing-over",
      "mutacja spontaniczna",
      "rekombinacja genetyczna"
    ],
    "answer": 0,
    "explanation": "W doborze sztucznym człowiek świadomie wybiera osobniki o pożądanych cechach do dalszego rozmnażania."
  },
  {
    "id": "R06_EWO_08",
    "section": "Ewolucja",
    "type": "match",
    "prompt": "Połącz formę człowieka z jej charakterystycznym zachowaniem lub cechą.",
    "options": null,
    "left": [
      "Sahelantrop",
      "człowiek wyprostowany",
      "neandertalczyk",
      "człowiek rozumny"
    ],
    "right": [
      "opiekował się chorymi i grzebał zmarłych",
      "tworzył sztukę i posługiwał się mową",
      "był dwunożny i w razie zagrożenia wspinał się na drzewa",
      "był jednym z pierwszych przedstawicieli rodzaju Homo poza Afryką"
    ],
    "answer": {
      "Sahelantrop": "był dwunożny i w razie zagrożenia wspinał się na drzewa",
      "człowiek wyprostowany": "był jednym z pierwszych przedstawicieli rodzaju Homo poza Afryką",
      "neandertalczyk": "opiekował się chorymi i grzebał zmarłych",
      "człowiek rozumny": "tworzył sztukę i posługiwał się mową"
    },
    "explanation": "Sahelantrop, Homo erectus, neandertalczyk i Homo sapiens reprezentują różne etapy ewolucji człowieka.",
    "image": "r06_postacie_ewolucji.jpg"
  },
  {
    "id": "R06_EWO_09",
    "section": "Ewolucja",
    "type": "sort",
    "prompt": "Rozdziel przykłady dowodów ewolucji na bezpośrednie i pośrednie.",
    "options": null,
    "items": [
      "narządy szczątkowe",
      "skamieniała kość",
      "podobieństwo budowy komórkowej",
      "owad zachowany w bursztynie",
      "odcisk liścia",
      "narządy homologiczne"
    ],
    "categories": [
      "bezpośrednie",
      "pośrednie"
    ],
    "answer": {
      "bezpośrednie": [
        "skamieniała kość",
        "odcisk liścia",
        "owad zachowany w bursztynie"
      ],
      "pośrednie": [
        "narządy homologiczne",
        "narządy szczątkowe",
        "podobieństwo budowy komórkowej"
      ]
    },
    "explanation": "Skamieniałości i zachowane szczątki to dowody bezpośrednie; podobieństwa budowy i narządy szczątkowe należą do pośrednich."
  },
  {
    "id": "R06_EWO_10",
    "section": "Ewolucja",
    "type": "sequence",
    "prompt": "Ułóż formy człowiekowatych od najwcześniejszej do najpóźniejszej.",
    "options": null,
    "items": [
      "człowiek wyprostowany",
      "Australopitek",
      "Sahelantrop",
      "człowiek zręczny",
      "Ardipitek"
    ],
    "answer": [
      "Sahelantrop",
      "Ardipitek",
      "Australopitek",
      "człowiek zręczny",
      "człowiek wyprostowany"
    ],
    "explanation": "Sahelantrop występował wcześniej niż ardipitek, australopitek, człowiek zręczny i człowiek wyprostowany. Nie oznacza to, że wszystkie były bezpośrednimi przodkami kolejnej formy.",
    "image": "r06_postacie_ewolucji.jpg"
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Fragment dwuniciowego DNA zawiera dwie pary A–T i trzy pary G–C. Ile wiązań wodorowych łączy łącznie te pięć par zasad?",
    "options": [
      "10",
      "12",
      "13",
      "15",
      "8",
      "16"
    ],
    "answer": 2,
    "explanation": "Dwie pary A–T dają 2 × 2 = 4 wiązania, a trzy pary G–C dają 3 × 3 = 9. Łącznie jest ich 13.",
    "image": "r06_podwojna_helisa.jpg"
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Komórka diploidalna człowieka (2n = 46) przechodzi pełną mejozę. Który wynik jest zgodny z opisem tego podziału?",
    "options": [
      "dwie komórki po 46 chromosomów",
      "cztery komórki po 23 chromosomy",
      "cztery komórki po 46 chromosomów",
      "dwie komórki po 23 chromosomy",
      "jedna komórka z 92 chromosomami",
      "osiem komórek po 23 chromosomy"
    ],
    "answer": 1,
    "explanation": "Po dwóch podziałach mejotycznych z jednej komórki diploidalnej powstają cztery komórki haploidalne, każda z 23 chromosomami."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Jakie wnioski można wyciągnąć z krzyżówek genetycznych AA × aa oraz Aa × Aa?",
    "options": [
      "Po AA × aa wszystkie potomne genotypy to Aa.",
      "Po AA × aa połowa potomstwa ma genotyp aa.",
      "Po Aa × Aa stosunek genotypów to 1:2:1.",
      "Po Aa × Aa co czwarte potomstwo może być aa.",
      "Po Aa × Aa wszystkie potomne genotypy to AA."
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Krzyżówka AA × aa daje wyłącznie Aa, natomiast Aa × Aa daje genotypy w stosunku 1:2:1 i 25% aa."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Kariotyp człowieka zawiera __________ pary autosomów oraz __________ parę chromosomów płci.",
    "options": null,
    "answer": [
      "22",
      "jedną"
    ],
    "altAnswers": [
      [
        "22"
      ],
      [
        "jedną",
        "1",
        "jedna"
      ]
    ],
    "explanation": "Człowiek ma 23 pary chromosomów: 22 pary autosomów i jedną parę allosomów."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się proces w profazie mejozy I, który może tworzyć nowe kombinacje alleli przez wymianę odcinków chromatyd?",
    "options": null,
    "answer": "crossing-over",
    "altAnswers": [
      "crossing-over",
      "crossing over",
      "rekombinacja genetyczna"
    ],
    "explanation": "Wymiana odpowiadających sobie fragmentów chromatyd chromosomów homologicznych to crossing-over, czyli rekombinacja genetyczna.",
    "image": "r06_crossing_over.jpg"
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zapis liczby lub zestawu chromosomów z określeniem.",
    "options": null,
    "left": [
      "2n − 1",
      "2n + 1",
      "44A + XX",
      "44A + XY"
    ],
    "right": [
      "kariotyp mężczyzny",
      "monosomia",
      "kariotyp kobiety",
      "trisomia"
    ],
    "answer": {
      "2n − 1": "monosomia",
      "2n + 1": "trisomia",
      "44A + XX": "kariotyp kobiety",
      "44A + XY": "kariotyp mężczyzny"
    },
    "explanation": "Monosomia oznacza brak jednego chromosomu, trisomia nadmiar jednego, a XX i XY określają typowy układ chromosomów płci.",
    "image": "r06_chromosomy_plci.jpg"
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Matka ma grupę krwi AB (IᴬIᴮ), a ojciec grupę 0 (i⁰i⁰). Jakie grupy krwi mogą mieć ich biologiczne dzieci w opisanym modelu dziedziczenia ABO?",
    "options": [
      "A lub B",
      "AB lub 0",
      "A lub 0",
      "B lub AB",
      "wyłącznie AB",
      "wszystkie cztery grupy"
    ],
    "answer": 0,
    "explanation": "Matka przekazuje Iᴬ albo Iᴮ, ojciec zawsze i⁰. Potomstwo może mieć wyłącznie grupę A albo B, po 50%.",
    "image": "r06_grupy_krwi.jpg"
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jeśli matka jest nosicielką daltonizmu (XᴰXᵈ), a ojciec jest zdrowy (XᴰY), połowa synów może odziedziczyć daltonizm.",
    "options": null,
    "answer": true,
    "explanation": "Wśród synów połowa może mieć XᵈY. Oznacza to 25% wszystkich dzieci, jeśli szanse urodzenia syna i córki są równe."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady zmian do mutacji genowych, strukturalnych i liczbowych.",
    "options": null,
    "items": [
      "dodatkowy chromosom",
      "odwrócenie fragmentu chromosomu",
      "podstawienie pojedynczego nukleotydu",
      "brak jednego chromosomu",
      "wstawienie nukleotydu w genie",
      "przeniesienie fragmentu na inny chromosom"
    ],
    "categories": [
      "genowe",
      "strukturalne chromosomowe",
      "liczbowe chromosomowe"
    ],
    "answer": {
      "genowe": [
        "podstawienie pojedynczego nukleotydu",
        "wstawienie nukleotydu w genie"
      ],
      "strukturalne chromosomowe": [
        "odwrócenie fragmentu chromosomu",
        "przeniesienie fragmentu na inny chromosom"
      ],
      "liczbowe chromosomowe": [
        "dodatkowy chromosom",
        "brak jednego chromosomu"
      ]
    },
    "explanation": "Mutacje genowe zmieniają sekwencję nukleotydów, chromosomowe strukturalne przebudowują chromosomy, a liczbowe zmieniają ich liczbę.",
    "image": "r06_zmiany_chromosomowe.jpg"
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia mejozy w kolejności od profazy I do końca drugiego podziału.",
    "options": null,
    "items": [
      "chromatydy siostrzane rozchodzą się w drugim podziale",
      "chromosomy homologiczne tworzą pary",
      "powstają cztery komórki haploidalne",
      "chromosomy homologiczne rozchodzą się do biegunów",
      "może dojść do crossing-over"
    ],
    "answer": [
      "chromosomy homologiczne tworzą pary",
      "może dojść do crossing-over",
      "chromosomy homologiczne rozchodzą się do biegunów",
      "chromatydy siostrzane rozchodzą się w drugim podziale",
      "powstają cztery komórki haploidalne"
    ],
    "explanation": "W pierwszym podziale rozdzielają się chromosomy homologiczne, a w drugim chromatydy; crossing-over może nastąpić w profazie I."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "U matki występuje genotyp Rh−Rh− (rr), a u ojca Rh+Rh+ (RR). Jaki odsetek dzieci będzie miał czynnik Rh?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%",
      "nie da się ustalić"
    ],
    "answer": 4,
    "explanation": "W krzyżówce RR × rr wszystkie dzieci mają genotyp Rr, a dominujący allel R warunkuje Rh dodatni.",
    "image": "r06_krzyzowka_punnetta.jpg"
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które opisy dotyczą pośrednich dowodów ewolucji?",
    "options": [
      "podobny plan budowy kończyn kręgowców",
      "skrzydła owada i ptaka o podobnej funkcji",
      "owad uwięziony w bursztynie",
      "odcisk pradawnego liścia",
      "kość ogonowa człowieka jako pozostałość dawnego narządu"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Do dowodów pośrednich należą między innymi narządy homologiczne, analogiczne i szczątkowe. Ciała w bursztynie i odciski należą do bezpośrednich.",
    "image": "r06_skamienialosc_archeopteryksa.jpg"
  },
  {
    "id": "R06_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zdrowa matka nie ma allelu daltonizmu (XᴰXᴰ), natomiast ojciec ma daltonizm (XᵈY). Jak będzie wyglądało dziedziczenie u ich dzieci?",
    "options": [
      "wszyscy synowie będą mieli daltonizm",
      "połowa córek będzie miała daltonizm",
      "wszystkie córki będą nosicielkami, a synowie zdrowi",
      "wszystkie córki będą chore, a synowie zdrowi",
      "połowa synów będzie chora, a połowa córek zdrowa",
      "wszyscy potomkowie będą mieli daltonizm"
    ],
    "answer": 2,
    "explanation": "Synowie dostaną od ojca Y i od matki Xᴰ, więc będą zdrowi. Wszystkie córki dostaną od ojca Xᵈ i będą zdrowymi nosicielkami (XᴰXᵈ).",
    "image": "r06_dziedziczenie_daltonizmu.jpg"
  },
  {
    "id": "R06_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który przedstawiciel dawnych ludzi umiał rozniecać ogień i grzebał zmarłych?",
    "options": [
      "Sahelantrop",
      "Ardipitek",
      "Australopitek",
      "neandertalczyk",
      "człowiek zręczny",
      "człowiek wyprostowany"
    ],
    "answer": 3,
    "explanation": "Neandertalczyk opiekował się chorymi, grzebał zmarłych i umiał rozniecać ogień.",
    "image": "r06_postacie_ewolucji.jpg"
  }
];

const KID_PROMPTS = {
  "R06_DNA_01": "Które dwie zasady łączą się w DNA?",
  "R06_DNA_05": "Jak nazywa się kopiowanie DNA?",
  "R06_MIT_01": "Ile komórek powstaje po mitozie?",
  "R06_DZI_01": "Który zapis ma dwa różne allele?",
  "R06_DZI_05": "Jak nazywają się widoczne cechy organizmu?",
  "R06_PLC_03": "Czy chłopiec dostaje chromosom X od mamy?",
  "R06_MUT_04": "Uzupełnij nazwy: brak chromosomu i dodatkowy chromosom.",
  "R06_EWO_01": "Kto bada skamieniałości?"
};

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "Genetyka",
  "icon": "🧬",
  "sectionOrder": [
    "Budowa DNA i RNA",
    "Mitoza i mejoza",
    "Dziedziczenie cech i grup krwi",
    "Dziedziczenie płci",
    "Mutacje",
    "Ewolucja"
  ],
  "sectionIcons": {
    "Budowa DNA i RNA": "🧬",
    "Mitoza i mejoza": "🔬",
    "Dziedziczenie cech i grup krwi": "🌱",
    "Dziedziczenie płci": "👶",
    "Mutacje": "⚡",
    "Ewolucja": "🌍"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
