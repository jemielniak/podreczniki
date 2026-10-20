// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DNA  = DNA, RNA i chromosomy
//   POD  = Podziały komórkowe
//   DZI  = Dziedziczenie cech
//   MUT  = Mutacje i choroby genetyczne
//   EWO  = Ewolucja i pochodzenie człowieka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_DNA_01",
    "section": "DNA, RNA i chromosomy",
    "type": "single_choice",
    "prompt": "Który cukier jest składnikiem nukleotydu DNA?",
    "options": [
      "Ryboza",
      "Deoksyryboza",
      "Glukoza",
      "Fruktoza",
      "Sacharoza",
      "Maltoza"
    ],
    "answer": 1,
    "explanation": "Nukleotyd DNA zawiera deoksyrybozę, resztę kwasu fosforowego i zasadę azotową."
  },
  {
    "id": "R07_DNA_02",
    "section": "DNA, RNA i chromosomy",
    "type": "multi_select",
    "prompt": "Zaznacz zasady azotowe występujące w DNA.",
    "options": [
      "Adenina",
      "Uracyl",
      "Tymina",
      "Guanina",
      "Cytozyna",
      "Ryboza"
    ],
    "image": "r07_podwojna_helisa_dna.jpg",
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "W DNA występują adenina, tymina, cytozyna i guanina. Uracyl i ryboza są składnikami RNA."
  },
  {
    "id": "R07_DNA_03",
    "section": "DNA, RNA i chromosomy",
    "type": "true_false",
    "prompt": "Zasada komplementarności mówi, że adenina w DNA łączy się z cytozyną.",
    "options": null,
    "answer": false,
    "explanation": "W DNA adenina łączy się z tyminą, natomiast guanina z cytozyną."
  },
  {
    "id": "R07_DNA_04",
    "section": "DNA, RNA i chromosomy",
    "type": "fill_in",
    "prompt": "W DNA guanina łączy się z __________, a adenina z __________.",
    "options": null,
    "altAnswers": [
      [
        "cytozyną",
        "cytozyna"
      ],
      [
        "tyminą",
        "tymina"
      ]
    ],
    "answer": [
      "cytozyną",
      "tyminą"
    ],
    "explanation": "Pary zasad komplementarnych to G–C oraz A–T."
  },
  {
    "id": "R07_DNA_05",
    "section": "DNA, RNA i chromosomy",
    "type": "riddle",
    "prompt": "Jak nazywa się odcinek DNA o określonej kolejności zasad azotowych, zawierający informację genetyczną?",
    "options": null,
    "altAnswers": [
      "gen"
    ],
    "answer": "gen",
    "explanation": "Gen jest odcinkiem DNA, którego sekwencja niesie informację genetyczną."
  },
  {
    "id": "R07_DNA_06",
    "section": "DNA, RNA i chromosomy",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest zasadą azotową DNA: adenina, guanina, cytozyna, uracyl.",
    "options": null,
    "answer": "uracyl",
    "explanation": "Uracyl występuje w RNA zamiast tyminy; pozostałe wymienione zasady występują w DNA."
  },
  {
    "id": "R07_DNA_07",
    "section": "DNA, RNA i chromosomy",
    "type": "single_choice",
    "prompt": "Jak nazywa się proces wiernego powielania DNA przed podziałem komórki?",
    "options": [
      "Transkrypcja",
      "Translacja",
      "Replikacja",
      "Mutacja",
      "Rekombinacja",
      "Zapłodnienie"
    ],
    "image": "r07_widelki_replikacyjne.jpg",
    "answer": 2,
    "explanation": "Replikacja prowadzi do powielenia materiału genetycznego przed podziałem komórki."
  },
  {
    "id": "R07_DNA_08",
    "section": "DNA, RNA i chromosomy",
    "type": "match",
    "prompt": "Połącz rodzaj RNA z jego funkcją.",
    "options": null,
    "left": [
      "mRNA",
      "tRNA",
      "rRNA"
    ],
    "right": [
      "Współtworzy rybosomy",
      "Dostarcza aminokwasy podczas syntezy białka",
      "Przenosi informację genetyczną do rybosomu"
    ],
    "answer": {
      "mRNA": "Przenosi informację genetyczną do rybosomu",
      "tRNA": "Dostarcza aminokwasy podczas syntezy białka",
      "rRNA": "Współtworzy rybosomy"
    },
    "explanation": "mRNA przekazuje informację, tRNA transportuje aminokwasy, a rRNA współbuduje rybosomy."
  },
  {
    "id": "R07_DNA_09",
    "section": "DNA, RNA i chromosomy",
    "type": "sort",
    "prompt": "Przyporządkuj składniki do DNA lub RNA.",
    "options": null,
    "items": [
      "deoksyryboza",
      "tymina",
      "ryboza",
      "uracyl"
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
    "explanation": "DNA zawiera deoksyrybozę i tyminę, a RNA rybozę i uracyl."
  },
  {
    "id": "R07_DNA_10",
    "section": "DNA, RNA i chromosomy",
    "type": "sequence",
    "prompt": "Ułóż etapy replikacji DNA w prawidłowej kolejności.",
    "options": null,
    "items": [
      "Terminacja",
      "Elongacja",
      "Inicjacja"
    ],
    "answer": [
      "Inicjacja",
      "Elongacja",
      "Terminacja"
    ],
    "explanation": "Podczas inicjacji rozplata się DNA, w elongacji dobudowywane są nukleotydy, a terminacja kończy proces."
  },
  {
    "id": "R07_DNA_11",
    "section": "DNA, RNA i chromosomy",
    "type": "single_choice",
    "prompt": "Jak nazywa się miejsce połączenia dwóch chromatyd chromosomu?",
    "options": [
      "Centromer",
      "Rybosom",
      "Nukleotyd",
      "Jąderko",
      "Genotyp",
      "Kod genetyczny"
    ],
    "image": "r07_chromosom_chromatydy.jpg",
    "answer": 0,
    "explanation": "Dwie chromatydy są połączone w obrębie centromeru."
  },
  {
    "id": "R07_DNA_12",
    "section": "DNA, RNA i chromosomy",
    "type": "multi_select",
    "prompt": "Które cechy charakteryzują kod genetyczny?",
    "options": [
      "Trójkowy",
      "Jednoznaczny",
      "Zdegenerowany",
      "Bezprzecinkowy",
      "Zachodzący",
      "Dwójkowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kod genetyczny jest m.in. trójkowy, jednoznaczny, zdegenerowany, bezprzecinkowy oraz niezachodzący."
  },
  {
    "id": "R07_POD_01",
    "section": "Podziały komórkowe",
    "type": "single_choice",
    "prompt": "Ile komórek potomnych powstaje z jednej komórki macierzystej w typowej mitozie?",
    "options": [
      "Jedna",
      "Dwie",
      "Trzy",
      "Cztery",
      "Sześć",
      "Osiem"
    ],
    "image": "r07_mitoza_fazy.jpg",
    "answer": 1,
    "explanation": "Mitoza prowadzi do powstania dwóch komórek potomnych o takiej samej liczbie chromosomów jak komórka macierzysta."
  },
  {
    "id": "R07_POD_02",
    "section": "Podziały komórkowe",
    "type": "true_false",
    "prompt": "W mejozie z jednej komórki macierzystej powstają zwykle cztery komórki o zredukowanej liczbie chromosomów.",
    "options": null,
    "answer": true,
    "explanation": "Mejoza prowadzi do powstania czterech haploidalnych komórek potomnych."
  },
  {
    "id": "R07_POD_03",
    "section": "Podziały komórkowe",
    "type": "match",
    "prompt": "Połącz fazę mitozy z opisem.",
    "options": null,
    "left": [
      "Profaza",
      "Metafaza",
      "Anafaza",
      "Telofaza"
    ],
    "right": [
      "Odtworzenie błon jądrowych",
      "Rozchodzenie się chromatyd do biegunów",
      "Ustawienie chromosomów w płaszczyźnie równikowej",
      "Kondensacja chromosomów i powstanie wrzeciona podziałowego"
    ],
    "answer": {
      "Profaza": "Kondensacja chromosomów i powstanie wrzeciona podziałowego",
      "Metafaza": "Ustawienie chromosomów w płaszczyźnie równikowej",
      "Anafaza": "Rozchodzenie się chromatyd do biegunów",
      "Telofaza": "Odtworzenie błon jądrowych"
    },
    "explanation": "W profazie przygotowuje się wrzeciono, w metafazie chromosomy ustawiają się w środku, w anafazie rozchodzą się chromatydy, a w telofazie powstają jądra."
  },
  {
    "id": "R07_POD_04",
    "section": "Podziały komórkowe",
    "type": "sequence",
    "prompt": "Ułóż fazy mitozy w kolejności występowania.",
    "options": null,
    "items": [
      "Anafaza",
      "Telofaza",
      "Profaza",
      "Metafaza"
    ],
    "image": "r07_mitoza_fazy.jpg",
    "answer": [
      "Profaza",
      "Metafaza",
      "Anafaza",
      "Telofaza"
    ],
    "explanation": "Mitoza przebiega kolejno przez profazę, metafazę, anafazę i telofazę."
  },
  {
    "id": "R07_POD_05",
    "section": "Podziały komórkowe",
    "type": "fill_in",
    "prompt": "Komórka diploidalna człowieka ma __________ chromosomów, a haploidalna gameta ma ich __________.",
    "options": null,
    "answer": [
      "46",
      "23"
    ],
    "explanation": "W komórkach somatycznych człowieka znajdują się 23 pary chromosomów, a w gametach po jednym z każdej pary."
  },
  {
    "id": "R07_POD_06",
    "section": "Podziały komórkowe",
    "type": "riddle",
    "prompt": "Jak nazywa się wymiana odcinków chromatyd między chromosomami homologicznymi podczas profazy I mejozy?",
    "options": null,
    "altAnswers": [
      "crossing-over",
      "crossing over"
    ],
    "image": "r07_mejoza_crossing_over.jpg",
    "answer": "crossing-over",
    "explanation": "Crossing-over jest jednym z mechanizmów rekombinacji materiału genetycznego w mejozie."
  },
  {
    "id": "R07_POD_07",
    "section": "Podziały komórkowe",
    "type": "scenario",
    "prompt": "Obserwujesz podział, w którym w pierwszej anafazie chromosomy homologiczne rozchodzą się do różnych biegunów, ale chromatydy siostrzane nadal są ze sobą połączone. Jaki to podział?",
    "options": [
      "Mitoza",
      "Mejoza I",
      "Mejoza II",
      "Replikacja DNA"
    ],
    "image": "r07_mejoza_crossing_over.jpg",
    "answer": 1,
    "explanation": "Podczas anafazy I mejozy rozchodzą się chromosomy homologiczne, co zmniejsza ich liczbę w komórkach potomnych."
  },
  {
    "id": "R07_POD_08",
    "section": "Podziały komórkowe",
    "type": "multi_select",
    "prompt": "Zaznacz mechanizmy, dzięki którym mejoza zwiększa różnorodność genetyczną gamet.",
    "options": [
      "Crossing-over",
      "Losowe rozchodzenie się chromosomów homologicznych",
      "Powstanie dwóch identycznych komórek",
      "Przepisywanie DNA na mRNA",
      "Rekombinacja materiału genetycznego"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Podczas mejozy powstają nowe kombinacje genów dzięki crossing-over i losowemu rozdziałowi chromosomów homologicznych."
  },
  {
    "id": "R07_POD_09",
    "section": "Podziały komórkowe",
    "type": "odd_one_out",
    "prompt": "Wskaż etap należący do replikacji DNA, a nie do faz mitozy: profaza, metafaza, anafaza, elongacja.",
    "options": null,
    "answer": "elongacja",
    "explanation": "Elongacja jest etapem dobudowywania nukleotydów w trakcie replikacji DNA."
  },
  {
    "id": "R07_POD_10",
    "section": "Podziały komórkowe",
    "type": "sort",
    "prompt": "Przyporządkuj skutki do mitozy albo mejozy.",
    "options": null,
    "items": [
      "dwie komórki potomne",
      "cztery komórki potomne",
      "zachowanie liczby chromosomów",
      "redukcja liczby chromosomów"
    ],
    "categories": [
      "Mitoza",
      "Mejoza"
    ],
    "answer": {
      "Mitoza": [
        "dwie komórki potomne",
        "zachowanie liczby chromosomów"
      ],
      "Mejoza": [
        "cztery komórki potomne",
        "redukcja liczby chromosomów"
      ]
    },
    "explanation": "Mitoza utrzymuje liczbę chromosomów w komórkach potomnych, a mejoza redukuje ją o połowę."
  },
  {
    "id": "R07_POD_11",
    "section": "Podziały komórkowe",
    "type": "single_choice",
    "prompt": "W której fazie mitozy chromosomy ustawiają się w płaszczyźnie równikowej komórki?",
    "options": [
      "Profaza",
      "Metafaza",
      "Anafaza",
      "Telofaza",
      "Interfaza",
      "Cytokineza"
    ],
    "answer": 1,
    "explanation": "Ustawienie chromosomów w płaszczyźnie równikowej jest cechą metafazy."
  },
  {
    "id": "R07_POD_12",
    "section": "Podziały komórkowe",
    "type": "true_false",
    "prompt": "Pomiędzy pierwszym a drugim podziałem mejotycznym materiał genetyczny jest ponownie replikowany.",
    "options": null,
    "answer": false,
    "explanation": "Przed mejozą zachodzi jedna replikacja DNA, po której następują dwa podziały jądra."
  },
  {
    "id": "R07_DZI_01",
    "section": "Dziedziczenie cech",
    "type": "single_choice",
    "prompt": "Który zapis oznacza heterozygotę dla genu z allelami A i a?",
    "options": [
      "AA",
      "aa",
      "Aa",
      "AAAA",
      "a",
      "AAaa"
    ],
    "answer": 2,
    "explanation": "Heterozygota ma dwa różne allele tego samego genu: jeden dominujący i jeden recesywny."
  },
  {
    "id": "R07_DZI_02",
    "section": "Dziedziczenie cech",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "Genotyp",
      "Fenotyp",
      "Allel dominujący",
      "Allel recesywny"
    ],
    "right": [
      "Ujawnia się przy dwóch allelach recesywnych",
      "Ujawnia się także w heterozygocie",
      "Zespół obserwowalnych cech organizmu",
      "Zestaw wszystkich genów organizmu"
    ],
    "answer": {
      "Genotyp": "Zestaw wszystkich genów organizmu",
      "Fenotyp": "Zespół obserwowalnych cech organizmu",
      "Allel dominujący": "Ujawnia się także w heterozygocie",
      "Allel recesywny": "Ujawnia się przy dwóch allelach recesywnych"
    },
    "explanation": "Genotyp dotyczy zapisu genetycznego, fenotyp obserwowanych cech, a dominacja decyduje o ujawnieniu alleli."
  },
  {
    "id": "R07_DZI_03",
    "section": "Dziedziczenie cech",
    "type": "scenario",
    "prompt": "Skrzyżowano czerwono kwitnący groch AA z biało kwitnącym aa. Przy pełnej dominacji czerwonej barwy jakie kwiaty będą miały rośliny pokolenia F1?",
    "options": [
      "Wszystkie czerwone",
      "Wszystkie białe",
      "Połowa czerwonych i połowa białych",
      "Wszystkie różowe"
    ],
    "image": "r07_krzyzowka_mendla.jpg",
    "answer": 0,
    "explanation": "W krzyżówce Mendla całe pokolenie F1 ma genotyp Aa i czerwone kwiaty."
  },
  {
    "id": "R07_DZI_04",
    "section": "Dziedziczenie cech",
    "type": "fill_in",
    "prompt": "Pierwsze prawo Mendla nazywa się prawem czystości __________, a pokolenie pierwszych potomków oznacza się symbolem __________.",
    "options": null,
    "altAnswers": [
      [
        "gamet"
      ],
      [
        "F1",
        "f1"
      ]
    ],
    "answer": [
      "gamet",
      "F1"
    ],
    "explanation": "I prawo Mendla mówi, że każda gameta zawiera po jednym allelu z pary; potomstwo pierwszego krzyżowania oznacza się F1."
  },
  {
    "id": "R07_DZI_05",
    "section": "Dziedziczenie cech",
    "type": "sort",
    "prompt": "Przyporządkuj genotypy do rodzaju zygotyczności.",
    "options": null,
    "items": [
      "AA",
      "Bb",
      "cc",
      "DD",
      "Aa",
      "bb"
    ],
    "categories": [
      "Homozygota dominująca",
      "Heterozygota",
      "Homozygota recesywna"
    ],
    "answer": {
      "Homozygota dominująca": [
        "AA",
        "DD"
      ],
      "Heterozygota": [
        "Bb",
        "Aa"
      ],
      "Homozygota recesywna": [
        "cc",
        "bb"
      ]
    },
    "explanation": "Homozygota ma dwa identyczne allele, a heterozygota dwa różne allele."
  },
  {
    "id": "R07_DZI_06",
    "section": "Dziedziczenie cech",
    "type": "multi_select",
    "prompt": "Wskaż genotypy, które mogą warunkować grupę krwi A w układzie ABO.",
    "options": [
      "IᴬIᴬ",
      "Iᴬi",
      "IᴬIᴮ",
      "Iᴮi",
      "ii"
    ],
    "image": "r07_krwinki_abo.jpg",
    "answer": [
      0,
      1
    ],
    "explanation": "Grupa A pojawia się przy dwóch allelach Iᴬ albo przy jednym Iᴬ i recesywnym i."
  },
  {
    "id": "R07_DZI_07",
    "section": "Dziedziczenie cech",
    "type": "true_false",
    "prompt": "Osoba z grupą krwi AB ma dwa allele współdominujące.",
    "options": null,
    "answer": true,
    "explanation": "Allele Iᴬ i Iᴮ są równorzędne i oba ujawniają się w fenotypie grupy AB."
  },
  {
    "id": "R07_DZI_08",
    "section": "Dziedziczenie cech",
    "type": "riddle",
    "prompt": "Jak nazywa się zjawisko, w którym heterozygoty mają cechę pośrednią, np. różowe kwiaty dziwaczka?",
    "options": null,
    "altAnswers": [
      "niepełna dominacja",
      "dominacja niepełna"
    ],
    "answer": "niepełna dominacja",
    "explanation": "W niepełnej dominacji żaden z alleli nie maskuje całkowicie drugiego, dlatego heterozygoty mają cechę pośrednią."
  },
  {
    "id": "R07_DZI_09",
    "section": "Dziedziczenie cech",
    "type": "single_choice",
    "prompt": "Który zestaw chromosomów płci występuje zwykle u kobiety?",
    "options": [
      "XY",
      "XX",
      "YY",
      "XO",
      "XXY",
      "XYY"
    ],
    "image": "r07_chromosomy_plci.jpg",
    "answer": 1,
    "explanation": "U człowieka typowy zestaw chromosomów płci to XX u kobiet i XY u mężczyzn."
  },
  {
    "id": "R07_DZI_10",
    "section": "Dziedziczenie cech",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, która nie jest przykładem recesywnej cechy sprzężonej z chromosomem X: hemofilia, daltonizm, fenyloketonuria.",
    "options": null,
    "answer": "fenyloketonuria",
    "explanation": "Hemofilia i daltonizm są chorobami recesywnymi sprzężonymi z chromosomem X, a fenyloketonuria jest chorobą autosomalną recesywną."
  },
  {
    "id": "R07_DZI_11",
    "section": "Dziedziczenie cech",
    "type": "scenario",
    "prompt": "Kobieta ma chromosomy płci XX, a mężczyzna XY. Komórka jajowa zawsze zawiera X. Która komórka rozrodcza bezpośrednio rozstrzyga o chromosomowym zestawie płci dziecka?",
    "options": [
      "Plemnik",
      "Komórka jajowa",
      "Komórka skóry matki",
      "Komórka mięśniowa ojca"
    ],
    "answer": 0,
    "explanation": "Plemnik może przekazać chromosom X lub Y, a komórka jajowa przekazuje X."
  },
  {
    "id": "R07_DZI_12",
    "section": "Dziedziczenie cech",
    "type": "sequence",
    "prompt": "Ułóż przebieg klasycznego doświadczenia Mendla z barwą kwiatów grochu.",
    "options": null,
    "items": [
      "Krzyżowanie osobników F1",
      "Pojawienie się w F2 roślin czerwonych i białych w stosunku 3:1",
      "Krzyżowanie rodziców AA i aa",
      "Powstanie jednolitego pokolenia F1 o czerwonych kwiatach"
    ],
    "image": "r07_krzyzowka_mendla.jpg",
    "answer": [
      "Krzyżowanie rodziców AA i aa",
      "Powstanie jednolitego pokolenia F1 o czerwonych kwiatach",
      "Krzyżowanie osobników F1",
      "Pojawienie się w F2 roślin czerwonych i białych w stosunku 3:1"
    ],
    "explanation": "Najpierw skrzyżowano homozygotyczne rośliny rodzicielskie, a po skrzyżowaniu F1 w pokoleniu F2 uzyskano stosunek 3:1."
  },
  {
    "id": "R07_MUT_01",
    "section": "Mutacje i choroby genetyczne",
    "type": "multi_select",
    "prompt": "Zaznacz rodzaje mutacji wyróżnione ze względu na efekt dla organizmu.",
    "options": [
      "Pozytywne",
      "Negatywne",
      "Neutralne",
      "Generatywne",
      "Genowe",
      "Somatyczne"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ze względu na skutki mutacje mogą być korzystne, szkodliwe albo nie mieć zauważalnego wpływu na fenotyp."
  },
  {
    "id": "R07_MUT_02",
    "section": "Mutacje i choroby genetyczne",
    "type": "single_choice",
    "prompt": "Jak nazywa się mutacja polegająca na zmianie sekwencji nukleotydów w obrębie jednego genu?",
    "options": [
      "Genowa",
      "Chromosomowa",
      "Somatyczna",
      "Generatywna",
      "Neutralna",
      "Indukowana"
    ],
    "answer": 0,
    "explanation": "Mutacja genowa obejmuje zmiany jednego genu, np. zamianę, wstawienie lub utratę nukleotydów."
  },
  {
    "id": "R07_MUT_03",
    "section": "Mutacje i choroby genetyczne",
    "type": "true_false",
    "prompt": "Mutacja w komórce somatycznej jest zazwyczaj przekazywana bezpośrednio potomstwu organizmu.",
    "options": null,
    "answer": false,
    "explanation": "Mutacje w komórkach somatycznych nie są przekazywane potomstwu; dziedziczone mogą być mutacje dotyczące linii komórek rozrodczych."
  },
  {
    "id": "R07_MUT_04",
    "section": "Mutacje i choroby genetyczne",
    "type": "sort",
    "prompt": "Przyporządkuj mutagen do rodzaju czynnika.",
    "options": null,
    "items": [
      "promieniowanie UV",
      "promieniowanie rentgenowskie",
      "składniki dymu papierosowego",
      "metale ciężkie",
      "niektóre wirusy",
      "toksyny grzybów pleśniowych"
    ],
    "categories": [
      "Fizyczny",
      "Chemiczny",
      "Biologiczny"
    ],
    "image": "r07_mutageny_otoczenie.jpg",
    "answer": {
      "Fizyczny": [
        "promieniowanie UV",
        "promieniowanie rentgenowskie"
      ],
      "Chemiczny": [
        "składniki dymu papierosowego",
        "metale ciężkie"
      ],
      "Biologiczny": [
        "niektóre wirusy",
        "toksyny grzybów pleśniowych"
      ]
    },
    "explanation": "Mutageny dzielą się na fizyczne (np. promieniowanie), chemiczne (np. metale ciężkie) i biologiczne (np. wirusy oraz toksyny grzybów)."
  },
  {
    "id": "R07_MUT_05",
    "section": "Mutacje i choroby genetyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż czynnik biologiczny spośród wymienionych mutagenów: promieniowanie UV, promieniowanie rentgenowskie, metale ciężkie, niektóre wirusy.",
    "options": null,
    "answer": "niektóre wirusy",
    "explanation": "Niektóre wirusy zaliczono do mutagenów biologicznych; pozostałe czynniki są fizyczne albo chemiczne."
  },
  {
    "id": "R07_MUT_06",
    "section": "Mutacje i choroby genetyczne",
    "type": "match",
    "prompt": "Połącz rodzaj mutacji chromosomowej z ogólnym opisem zmiany.",
    "options": null,
    "left": [
      "Delecja",
      "Duplikacja",
      "Inwersja",
      "Translokacja"
    ],
    "right": [
      "Przeniesienie fragmentu między chromosomami",
      "Odwrócenie fragmentu chromosomu",
      "Powielenie fragmentu chromosomu",
      "Utrata fragmentu chromosomu"
    ],
    "image": "r07_mutacje_chromosomowe.jpg",
    "answer": {
      "Delecja": "Utrata fragmentu chromosomu",
      "Duplikacja": "Powielenie fragmentu chromosomu",
      "Inwersja": "Odwrócenie fragmentu chromosomu",
      "Translokacja": "Przeniesienie fragmentu między chromosomami"
    },
    "explanation": "Delecja, duplikacja, inwersja i translokacja są przykładami zmian struktury chromosomów."
  },
  {
    "id": "R07_MUT_07",
    "section": "Mutacje i choroby genetyczne",
    "type": "scenario",
    "prompt": "U osoby stwierdzono trzy kopie chromosomu 21 zamiast dwóch. Jak nazywa się taka zmiana liczby chromosomów?",
    "options": [
      "Trisomia",
      "Monosomia",
      "Crossing-over",
      "Heterozygota"
    ],
    "answer": 0,
    "explanation": "Trisomia oznacza trzy kopie chromosomu z danej pary; trisomia 21. chromosomu jest związana z zespołem Downa."
  },
  {
    "id": "R07_MUT_08",
    "section": "Mutacje i choroby genetyczne",
    "type": "fill_in",
    "prompt": "Mutacja obejmująca utratę jednego chromosomu z pary prowadzi do __________, a obecność trzech kopii jednego chromosomu do __________.",
    "options": null,
    "altAnswers": [
      [
        "monosomii",
        "monosomia"
      ],
      [
        "trisomii",
        "trisomia"
      ]
    ],
    "answer": [
      "monosomii",
      "trisomii"
    ],
    "explanation": "Monosomik ma jeden chromosom z pary, a trisomik trzy chromosomy z danej pary."
  },
  {
    "id": "R07_MUT_09",
    "section": "Mutacje i choroby genetyczne",
    "type": "riddle",
    "prompt": "Jaka choroba genetyczna wynika z trisomii 21. chromosomu?",
    "options": null,
    "altAnswers": [
      "zespół Downa",
      "zespol Downa"
    ],
    "answer": "zespół Downa",
    "explanation": "Zespół Downa najczęściej wynika z obecności dodatkowego chromosomu 21."
  },
  {
    "id": "R07_MUT_10",
    "section": "Mutacje i choroby genetyczne",
    "type": "single_choice",
    "prompt": "Która choroba genetyczna jest dziedziczona dominująco?",
    "options": [
      "Mukowiscydoza",
      "Fenyloketonuria",
      "Anemia sierpowata",
      "Pląsawica Huntingtona",
      "Hemofilia",
      "Daltonizm"
    ],
    "answer": 3,
    "explanation": "Pląsawica Huntingtona jest chorobą genetyczną dziedziczoną autosomalnie dominująco."
  },
  {
    "id": "R07_MUT_11",
    "section": "Mutacje i choroby genetyczne",
    "type": "multi_select",
    "prompt": "Które cechy charakteryzują nowotwór złośliwy?",
    "options": [
      "Wnikanie do sąsiednich tkanek",
      "Tworzenie przerzutów",
      "Szybki wzrost komórek",
      "Zawsze powolny wzrost",
      "Brak przemieszczania się komórek"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Guzy złośliwe naciekają tkanki, namnażają się szybko i mogą tworzyć przerzuty."
  },
  {
    "id": "R07_MUT_12",
    "section": "Mutacje i choroby genetyczne",
    "type": "sequence",
    "prompt": "Ułóż ciąg wydarzeń prowadzących do powstania guza.",
    "options": null,
    "items": [
      "Intensywne namnażanie zmienionej komórki",
      "Nagromadzenie kolejnych mutacji i powstanie guza",
      "Zmiana w materiale genetycznym komórki",
      "Brak skutecznej naprawy mutacji"
    ],
    "answer": [
      "Zmiana w materiale genetycznym komórki",
      "Brak skutecznej naprawy mutacji",
      "Intensywne namnażanie zmienionej komórki",
      "Nagromadzenie kolejnych mutacji i powstanie guza"
    ],
    "explanation": "Powstanie nowotworu wiąże się z uszkodzeniem DNA, nieskuteczną kontrolą podziałów komórkowych i gromadzeniem kolejnych mutacji."
  },
  {
    "id": "R07_EWO_01",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "single_choice",
    "prompt": "Która dyscyplina pozwala badać pokrewieństwo gatunków na podstawie podobieństwa rozwoju zarodkowego?",
    "options": [
      "Embriologia",
      "Mineralogia",
      "Meteorologia",
      "Astronomia",
      "Geologia inżynierska",
      "Hydrologia"
    ],
    "answer": 0,
    "explanation": "Podobieństwa zarodków różnych kręgowców są pośrednim dowodem ewolucji."
  },
  {
    "id": "R07_EWO_02",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "match",
    "prompt": "Połącz źródło wiedzy o ewolucji z przykładem.",
    "options": null,
    "left": [
      "Skamieniałości",
      "Narządy homologiczne",
      "Narządy szczątkowe",
      "Endemity"
    ],
    "right": [
      "Gatunki o niewielkim zasięgu występowania",
      "Kość ogonowa człowieka",
      "Kończyny przednie ssaków o wspólnym pochodzeniu",
      "Zachowane szczątki lub odciski dawnych organizmów"
    ],
    "image": "r07_skamienialosc_odcisk.jpg",
    "answer": {
      "Skamieniałości": "Zachowane szczątki lub odciski dawnych organizmów",
      "Narządy homologiczne": "Kończyny przednie ssaków o wspólnym pochodzeniu",
      "Narządy szczątkowe": "Kość ogonowa człowieka",
      "Endemity": "Gatunki o niewielkim zasięgu występowania"
    },
    "explanation": "Skamieniałości są bezpośrednimi śladami przeszłości, a anatomia i biogeografia dostarczają dowodów pośrednich."
  },
  {
    "id": "R07_EWO_03",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż przykład narządu szczątkowego, a nie narządu pełniącego nadal podstawową funkcję: serce, płuco, nerka, kość ogonowa.",
    "options": null,
    "answer": "kość ogonowa",
    "explanation": "Kość ogonowa jest przykładem narządu szczątkowego u człowieka."
  },
  {
    "id": "R07_EWO_04",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "multi_select",
    "prompt": "Które z poniższych informacji świadczą o pokrewieństwie organizmów?",
    "options": [
      "Wspólny kod genetyczny",
      "Podobieństwo budowy zarodków",
      "Wspólne cechy anatomiczne",
      "Identyczny klimat zamieszkania",
      "Podobny skład biochemiczny komórek"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "O pokrewieństwie świadczą zbieżności w budowie, rozwoju, genach i biochemii organizmów."
  },
  {
    "id": "R07_EWO_05",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "fill_in",
    "prompt": "Dobór __________ zachodzi bez świadomego wyboru człowieka, natomiast dobór __________ jest stosowany w hodowli i uprawie.",
    "options": null,
    "altAnswers": [
      [
        "naturalny",
        "naturalnego"
      ],
      [
        "sztuczny",
        "sztucznego"
      ]
    ],
    "answer": [
      "naturalny",
      "sztuczny"
    ],
    "explanation": "Dobór naturalny zależy od warunków środowiska, a sztuczny polega na wybieraniu przez człowieka osobników do rozrodu."
  },
  {
    "id": "R07_EWO_06",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "scenario",
    "prompt": "W lesie lepiej maskujące się owady częściej przeżywają i pozostawiają potomstwo, więc ich cecha staje się częstsza w populacji. Jaki mechanizm opisuje ta sytuacja?",
    "options": [
      "Dobór naturalny",
      "Dobór sztuczny",
      "Replikacja",
      "Transkrypcja"
    ],
    "image": "r07_dobor_naturalny_owady.jpg",
    "answer": 0,
    "explanation": "Selekcja naturalna zwiększa częstość cech sprzyjających przeżyciu i rozmnażaniu w danych warunkach."
  },
  {
    "id": "R07_EWO_07",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj rodzaje dowodów ewolucji.",
    "options": null,
    "items": [
      "skamieniałości",
      "formy przejściowe",
      "żywe skamieniałości",
      "embriologia",
      "anatomia porównawcza",
      "biogeografia"
    ],
    "categories": [
      "Bezpośrednie",
      "Pośrednie"
    ],
    "answer": {
      "Bezpośrednie": [
        "skamieniałości",
        "formy przejściowe",
        "żywe skamieniałości"
      ],
      "Pośrednie": [
        "embriologia",
        "anatomia porównawcza",
        "biogeografia"
      ]
    },
    "explanation": "Skamieniałości, formy przejściowe i żywe skamieniałości zalicza się do dowodów bezpośrednich ewolucji, a dane z anatomii porównawczej, embriologii i biogeografii – do pośrednich."
  },
  {
    "id": "R07_EWO_08",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "true_false",
    "prompt": "Narządy analogiczne mają wspólne pochodzenie ewolucyjne, choć mogą pełnić różne funkcje.",
    "options": null,
    "image": "r07_konczyny_ssakow.jpg",
    "answer": false,
    "explanation": "Wspólne pochodzenie charakteryzuje narządy homologiczne; analogiczne mają zbliżone funkcje, ale różne pochodzenie."
  },
  {
    "id": "R07_EWO_09",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "riddle",
    "prompt": "Jak nazywa się gatunek o bardzo małym zasięgu występowania, np. dzwonek karkonoski?",
    "options": null,
    "altAnswers": [
      "endemit"
    ],
    "answer": "endemit",
    "explanation": "Endemity występują tylko na określonym, zwykle ograniczonym obszarze geograficznym, dlatego ich rozmieszczenie ma znaczenie w biogeografii."
  },
  {
    "id": "R07_EWO_10",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "single_choice",
    "prompt": "Kto sformułował teorię doboru naturalnego?",
    "options": [
      "Karol Darwin",
      "Gregor Mendel",
      "Ludwik Pasteur",
      "Karol Linneusz",
      "Robert Hooke",
      "Antonie van Leeuwenhoek"
    ],
    "answer": 0,
    "explanation": "Karol Darwin sformułował teorię ewolucji przez dobór naturalny."
  },
  {
    "id": "R07_EWO_11",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "sequence",
    "prompt": "Ułóż przykładowy ciąg zdarzeń prowadzący do powstania nowych gatunków według opisu doboru naturalnego.",
    "options": null,
    "items": [
      "Narastanie różnic między populacjami",
      "Brak możliwości krzyżowania po ponownym kontakcie",
      "Rozdzielenie populacji",
      "Działanie doboru w odmiennych warunkach"
    ],
    "answer": [
      "Rozdzielenie populacji",
      "Działanie doboru w odmiennych warunkach",
      "Narastanie różnic między populacjami",
      "Brak możliwości krzyżowania po ponownym kontakcie"
    ],
    "explanation": "Rozdzielone populacje mogą różnicować się pod wpływem doboru naturalnego, aż do powstania izolacji rozrodczej."
  },
  {
    "id": "R07_EWO_12",
    "section": "Ewolucja i pochodzenie człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz podobieństwa człowieka i małp człekokształtnych.",
    "options": [
      "Przeciwstawny kciuk",
      "Brak zewnętrznego ogona",
      "Oczy z przodu głowy",
      "Obecność pazurów zamiast paznokci",
      "Długa opieka nad potomstwem"
    ],
    "image": "r07_czaszki_czlowiek_malpa.jpg",
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do wspólnych cech należą m.in. przeciwstawny kciuk, brak ogona, ustawienie oczu i długa opieka nad młodymi."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Powiąż proces z opisem jego wyniku.",
    "options": null,
    "left": [
      "Replikacja DNA",
      "Transkrypcja",
      "Mejoza",
      "Zapłodnienie"
    ],
    "right": [
      "Połączenie gamet przywraca diploidalność",
      "Powstają komórki o zredukowanej liczbie chromosomów",
      "Informacja DNA zostaje przepisana na RNA",
      "Powstają kopie materiału genetycznego"
    ],
    "answer": {
      "Replikacja DNA": "Powstają kopie materiału genetycznego",
      "Transkrypcja": "Informacja DNA zostaje przepisana na RNA",
      "Mejoza": "Powstają komórki o zredukowanej liczbie chromosomów",
      "Zapłodnienie": "Połączenie gamet przywraca diploidalność"
    },
    "explanation": "Replikacja powiela DNA, transkrypcja wytwarza RNA, mejoza redukuje liczbę chromosomów, a zapłodnienie łączy dwa haploidalne zestawy."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż prawdziwe zdania o kodonach.",
    "options": [
      "Każdy kodon składa się z trzech nukleotydów",
      "Jeden aminokwas może być kodowany przez kilka różnych kodonów",
      "Kodon START AUG koduje metioninę",
      "Wszystkie 64 kodony oznaczają aminokwasy",
      "Istnieją trzy kodony STOP"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Kod genetyczny jest trójkowy i zdegenerowany. Kodon START AUG koduje metioninę, a trzy kodony STOP kończą translację."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uporządkuj procesy od przygotowania komórki do otrzymania haploidalnych gamet.",
    "options": null,
    "items": [
      "Rozdzielenie chromosomów homologicznych",
      "Rozdzielenie chromatyd siostrzanych w mejozie II",
      "Powstanie czterech komórek haploidalnych",
      "Replikacja DNA przed mejozą",
      "Crossing-over w profazie I"
    ],
    "image": "r07_mejoza_crossing_over.jpg",
    "answer": [
      "Replikacja DNA przed mejozą",
      "Crossing-over w profazie I",
      "Rozdzielenie chromosomów homologicznych",
      "Rozdzielenie chromatyd siostrzanych w mejozie II",
      "Powstanie czterech komórek haploidalnych"
    ],
    "explanation": "Mejozę poprzedza replikacja; następnie zachodzą crossing-over, rozdział homologów i chromatyd oraz powstają cztery gamety."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U człowieka podczas mejozy chromosomy homologiczne jednej pary trafiają razem do tej samej komórki. Po zapłodnieniu gametą z dodatkowym chromosomem zygota ma trzy kopie tego chromosomu. Co powstało?",
    "options": [
      "Trisomik",
      "Monosomik",
      "Homozygota recesywna",
      "Heterozygota"
    ],
    "answer": 0,
    "explanation": "Nierozdzielenie chromosomów może prowadzić do gamet z dodatkowym chromosomem, a po zapłodnieniu do trisomii."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie rośliny o genotypie AaBb wytwarzają gamety zgodnie z II prawem Mendla. Ile różnych kombinacji alleli dwóch niesprzężonych genów może mieć gameta każdej rośliny?",
    "options": [
      "Dwie",
      "Trzy",
      "Cztery",
      "Osiem"
    ],
    "answer": 2,
    "explanation": "Dla genotypu AaBb możliwe są gamety AB, Ab, aB i ab przy niezależnym dziedziczeniu alleli."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Skrzyżowano osobniki grochu Aa × Aa przy pełnej dominacji czerwonych kwiatów. Jaki odsetek potomstwa będzie biały?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%"
    ],
    "image": "r07_krzyzowka_mendla.jpg",
    "answer": 1,
    "explanation": "Krzyżówka Aa × Aa daje genotypy AA, Aa, Aa, aa, więc 1/4 potomstwa ma recesywną białą barwę."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz fenotyp grupy krwi ABO z jednym poprawnym genotypem.",
    "options": null,
    "left": [
      "Grupa A",
      "Grupa B",
      "Grupa AB",
      "Grupa 0"
    ],
    "right": [
      "ii",
      "IᴬIᴮ",
      "Iᴮi",
      "Iᴬi"
    ],
    "image": "r07_krwinki_abo.jpg",
    "answer": {
      "Grupa A": "Iᴬi",
      "Grupa B": "Iᴮi",
      "Grupa AB": "IᴬIᴮ",
      "Grupa 0": "ii"
    },
    "explanation": "Allele Iᴬ i Iᴮ współdominują; allel i jest recesywny. Grupa 0 wymaga genotypu ii."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: W uproszczonym modelu dziedziczenia czynnika Rh allel __________ jest dominujący, a allel __________ recesywny.",
    "options": null,
    "altAnswers": [
      [
        "Rh+",
        "rh+"
      ],
      [
        "Rh-",
        "rh-"
      ]
    ],
    "answer": [
      "Rh+",
      "Rh-"
    ],
    "explanation": "W uproszczonym modelu dziedziczenia czynnika Rh allel Rh+ jest dominujący, a Rh− recesywny; heterozygota ma czynnik Rh."
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz choroby z ich przyczynami genetycznymi.",
    "options": null,
    "left": [
      "Mukowiscydoza",
      "Fenyloketonuria",
      "Anemia sierpowata",
      "Zespół Downa"
    ],
    "right": [
      "Trisomia chromosomu 21",
      "Recesywna mutacja genu hemoglobiny na 11. chromosomie",
      "Recesywna mutacja genu enzymu rozkładającego fenyloalaninę",
      "Recesywna mutacja genu na 7. chromosomie"
    ],
    "answer": {
      "Mukowiscydoza": "Recesywna mutacja genu na 7. chromosomie",
      "Fenyloketonuria": "Recesywna mutacja genu enzymu rozkładającego fenyloalaninę",
      "Anemia sierpowata": "Recesywna mutacja genu hemoglobiny na 11. chromosomie",
      "Zespół Downa": "Trisomia chromosomu 21"
    },
    "explanation": "Mukowiscydoza, fenyloketonuria i anemia sierpowata wynikają z mutacji genowych, a zespół Downa najczęściej z obecności dodatkowego chromosomu 21."
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Który przykład jest skutkiem nieprawidłowej liczby chromosomów, a nie mutacji w pojedynczym genie: mukowiscydoza, fenyloketonuria, anemia sierpowata, zespół Downa.",
    "options": null,
    "answer": "zespół Downa",
    "explanation": "Zespół Downa wiąże się z trisomią chromosomu 21, a pozostałe choroby wynikają z mutacji genowych."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia na temat nowotworów są prawdziwe?",
    "options": [
      "Komórki guza złośliwego mogą tworzyć przerzuty",
      "Łagodny guz zwykle nie nacieka sąsiednich tkanek",
      "Promieniowanie UV może być czynnikiem rakotwórczym",
      "Każda mutacja prowadzi do nowotworu",
      "Nowotwór łagodny zawsze tworzy przerzuty"
    ],
    "image": "r07_mutageny_otoczenie.jpg",
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Guzy złośliwe mogą naciekać i dawać przerzuty, łagodne zwykle tego nie robią, a UV zaliczono do czynników rakotwórczych."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozdziel przykłady na dowody bezpośrednie i pośrednie ewolucji.",
    "options": null,
    "items": [
      "odcisk organizmu w skale",
      "żywa skamieniałość",
      "formy przejściowe",
      "porównanie zarodków",
      "wspólne geny różnych gatunków",
      "narządy homologiczne"
    ],
    "categories": [
      "Bezpośrednie",
      "Pośrednie"
    ],
    "image": "r07_skamienialosc_odcisk.jpg",
    "answer": {
      "Bezpośrednie": [
        "odcisk organizmu w skale",
        "żywa skamieniałość",
        "formy przejściowe"
      ],
      "Pośrednie": [
        "porównanie zarodków",
        "wspólne geny różnych gatunków",
        "narządy homologiczne"
      ]
    },
    "explanation": "Odciski, formy przejściowe i żywe skamieniałości zaliczono do dowodów bezpośrednich, a embriologię, genetykę i anatomię do pośrednich."
  },
  {
    "id": "R07_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Hodowca wybiera do rozrodu rośliny wydające szczególnie duże nasiona. Po wielu pokoleniach cecha staje się częsta. Czym mechanizm ten różni się od doboru naturalnego?",
    "options": [
      "Kierunek selekcji wyznacza człowiek",
      "Powstają tylko mutacje chromosomowe",
      "Nie dziedziczą się żadne cechy",
      "Wszystkie rośliny muszą być identyczne"
    ],
    "answer": 0,
    "explanation": "W doborze sztucznym człowiek świadomie wybiera pożądane cechy, podczas gdy dobór naturalny zależy od warunków środowiska."
  },
  {
    "id": "R07_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie ewolucyjne z trafnym przykładem.",
    "options": null,
    "left": [
      "Narząd homologiczny",
      "Narządy analogiczne",
      "Narząd szczątkowy",
      "Atawizm"
    ],
    "right": [
      "Ponowne pojawienie się silnego owłosienia ciała człowieka",
      "Kość ogonowa człowieka",
      "Skrzydło nietoperza i ważki",
      "Kończyna przednia różnych ssaków"
    ],
    "image": "r07_konczyny_ssakow.jpg",
    "answer": {
      "Narząd homologiczny": "Kończyna przednia różnych ssaków",
      "Narządy analogiczne": "Skrzydło nietoperza i ważki",
      "Narząd szczątkowy": "Kość ogonowa człowieka",
      "Atawizm": "Ponowne pojawienie się silnego owłosienia ciała człowieka"
    },
    "explanation": "Homologia wynika ze wspólnego pochodzenia, analogia z podobnej funkcji, narząd szczątkowy traci dawną rolę, a atawizm przywraca dawną cechę."
  }
];

const KID_PROMPTS = {
  "R07_DNA_01": "Jaki cukier znajduje się w DNA?",
  "R07_DNA_05": "Jak nazywa się fragment DNA zapisujący informację o cesze?",
  "R07_POD_01": "Ile komórek powstaje po jednym podziale mitotycznym?",
  "R07_POD_06": "Jak nazywa się wymiana kawałków chromosomów w mejozie?",
  "R07_DZI_01": "Który zapis oznacza dwie różne wersje genu?",
  "R07_DZI_08": "Jak nazywa się dziedziczenie, gdy potomek ma cechę pośrednią?",
  "R07_MUT_09": "Jak nazywa się choroba związana z trzema chromosomami numer 21?",
  "R07_EWO_10": "Kto opisał dobór naturalny?"
};

const chapter = {
  id: "r07",
  number: 7,
  title: "Genetyka i ewolucja",
  icon: "🧬",
  sectionOrder: [
    "DNA, RNA i chromosomy",
    "Podziały komórkowe",
    "Dziedziczenie cech",
    "Mutacje i choroby genetyczne",
    "Ewolucja i pochodzenie człowieka"
  ],
  sectionIcons: {
    "DNA, RNA i chromosomy": "🧬",
    "Podziały komórkowe": "🔬",
    "Dziedziczenie cech": "🌱",
    "Mutacje i choroby genetyczne": "🧪",
    "Ewolucja i pochodzenie człowieka": "🌍"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
