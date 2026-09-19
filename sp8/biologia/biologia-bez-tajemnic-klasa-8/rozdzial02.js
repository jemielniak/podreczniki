// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POD  = Podstawy dziedziczenia cech
//   KRE  = Dziedziczenie grup krwi
//   PLC  = Dziedziczenie płci
//   MUT  = Mutacje genetyczne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_POD_01",
    "section": "Podstawy dziedziczenia cech",
    "type": "single_choice",
    "prompt": "Jak nazywa się zespół wszystkich genów organizmu?",
    "options": [
      "Fenotyp",
      "Kariotyp",
      "Genotyp",
      "Allel",
      "Gameta",
      "Zygota"
    ],
    "answer": 2,
    "explanation": "Genotyp to zespół wszystkich genów organizmu.",
    "image": "r02_groch_kwiaty.jpg"
  },
  {
    "id": "R02_POD_02",
    "section": "Podstawy dziedziczenia cech",
    "type": "single_choice",
    "prompt": "Jak nazywa się zespół cech organizmu zależnych od genotypu i środowiska?",
    "options": [
      "Genotyp",
      "Fenotyp",
      "Allel",
      "Chromosom",
      "Gameta",
      "Gen"
    ],
    "answer": 1,
    "explanation": "Fenotyp obejmuje cechy organizmu kształtowane przez geny i czynniki środowiskowe.",
    "image": "r02_rodzina_cechy.jpg"
  },
  {
    "id": "R02_POD_03",
    "section": "Podstawy dziedziczenia cech",
    "type": "true_false",
    "prompt": "Masa ciała może zależeć zarówno od genów, jak i od diety.",
    "options": null,
    "answer": true,
    "explanation": "Masa ciała jest przykładem cechy, na którą wpływają geny oraz środowisko, w tym dieta."
  },
  {
    "id": "R02_POD_04",
    "section": "Podstawy dziedziczenia cech",
    "type": "riddle",
    "prompt": "Jak nazywa się jedna z różnych wersji tego samego genu?",
    "options": null,
    "answer": "allel",
    "explanation": "Allele są różnymi wersjami jednego genu.",
    "altAnswers": [
      "allel"
    ]
  },
  {
    "id": "R02_POD_05",
    "section": "Podstawy dziedziczenia cech",
    "type": "fill_in",
    "prompt": "W symbolicznym zapisie genotypu heterozygoty używamy dwóch __________ alleli.",
    "options": null,
    "answer": [
      "różnych"
    ],
    "explanation": "Heterozygota ma dwa różne allele tego samego genu, np. Aa.",
    "altAnswers": [
      [
        "różnych",
        "odmiennych"
      ]
    ]
  },
  {
    "id": "R02_POD_06",
    "section": "Podstawy dziedziczenia cech",
    "type": "multi_select",
    "prompt": "Wybierz genotypy homozygot.",
    "options": [
      "AA",
      "Aa",
      "aa",
      "Bb",
      "BB",
      "Dd"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Homozygota ma dwa jednakowe allele: AA, aa lub BB."
  },
  {
    "id": "R02_POD_07",
    "section": "Podstawy dziedziczenia cech",
    "type": "odd_one_out",
    "prompt": "Wskaż genotyp różniący się od homozygot: AA, bb, Aa, DD.",
    "options": null,
    "answer": "Aa",
    "explanation": "Aa zawiera dwa różne allele, a pozostałe genotypy oznaczają homozygoty."
  },
  {
    "id": "R02_POD_08",
    "section": "Podstawy dziedziczenia cech",
    "type": "match",
    "prompt": "Połącz genotyp grochu z kolorem kwiatów lub rodzajem alleli.",
    "options": null,
    "answer": {
      "AA": "czerwone kwiaty i dwa allele dominujące",
      "Aa": "czerwone kwiaty i dwa różne allele",
      "aa": "białe kwiaty i dwa allele recesywne"
    },
    "explanation": "Allel czerwonych kwiatów A dominuje nad allelem białych kwiatów a.",
    "left": [
      "AA",
      "Aa",
      "aa"
    ],
    "right": [
      "białe kwiaty i dwa allele recesywne",
      "czerwone kwiaty i dwa różne allele",
      "czerwone kwiaty i dwa allele dominujące"
    ],
    "image": "r02_groch_kwiaty.jpg"
  },
  {
    "id": "R02_POD_09",
    "section": "Podstawy dziedziczenia cech",
    "type": "sort",
    "prompt": "Podziel genotypy według budowy pary alleli.",
    "options": null,
    "answer": {
      "homozygota dominująca": [
        "AA",
        "BB"
      ],
      "heterozygota": [
        "Aa",
        "Bb"
      ],
      "homozygota recesywna": [
        "aa",
        "bb"
      ]
    },
    "explanation": "Duże litery oznaczają allele dominujące, małe recesywne; heterozygota ma dwa różne allele.",
    "items": [
      "Aa",
      "BB",
      "aa",
      "Bb",
      "AA",
      "bb"
    ],
    "categories": [
      "homozygota dominująca",
      "heterozygota",
      "homozygota recesywna"
    ]
  },
  {
    "id": "R02_POD_10",
    "section": "Podstawy dziedziczenia cech",
    "type": "sequence",
    "prompt": "Ułóż kroki rozwiązania krzyżówki genetycznej.",
    "options": null,
    "answer": [
      "Oznacz allele i genotypy rodziców",
      "Wyznacz gamety rodziców",
      "Połącz gamety w krzyżówce",
      "Odczytaj genotypy i fenotypy potomstwa"
    ],
    "explanation": "Najpierw ustala się allele i rodziców, potem gamety, kombinacje potomstwa i wreszcie wynik.",
    "items": [
      "Połącz gamety w krzyżówce",
      "Oznacz allele i genotypy rodziców",
      "Odczytaj genotypy i fenotypy potomstwa",
      "Wyznacz gamety rodziców"
    ]
  },
  {
    "id": "R02_POD_11",
    "section": "Podstawy dziedziczenia cech",
    "type": "scenario",
    "prompt": "U grochu czerwony kolor kwiatów A jest dominujący nad białym a. Roślina ma genotyp Aa. Jakie ma kwiaty?",
    "options": [
      "Czerwone",
      "Białe",
      "Czerwone i białe jednocześnie",
      "Bezbarwne"
    ],
    "answer": 0,
    "explanation": "Allel A ujawnia się również u heterozygoty Aa, więc kwiaty są czerwone.",
    "image": "r02_groch_kwiaty.jpg"
  },
  {
    "id": "R02_POD_12",
    "section": "Podstawy dziedziczenia cech",
    "type": "single_choice",
    "prompt": "Jakie genotypy mają wszystkie rośliny potomne przy krzyżowaniu BB × bb?",
    "options": [
      "BB",
      "bb",
      "BB lub bb",
      "Bb",
      "BB lub Bb",
      "Bb lub bb"
    ],
    "answer": 3,
    "explanation": "Gamety B i b dają wyłącznie potomstwo Bb.",
    "image": "r02_nasiona_grochu.jpg"
  },
  {
    "id": "R02_POD_13",
    "section": "Podstawy dziedziczenia cech",
    "type": "single_choice",
    "prompt": "Jaka część potomstwa z krzyżówki Aa × Aa ma genotyp aa?",
    "options": [
      "0%",
      "12,5%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Jedna z czterech równoprawdopodobnych kombinacji to aa, czyli 25%."
  },
  {
    "id": "R02_POD_14",
    "section": "Podstawy dziedziczenia cech",
    "type": "scenario",
    "prompt": "Skrzyżowano roślinę o zielonych strąkach Ee z rośliną o żółtych strąkach ee. Żółty kolor jest recesywny. Jaka część potomstwa będzie miała żółte strąki?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Połączenia gamet E i e z gametą e dają po połowie Ee i ee; żółte strąki ma ee.",
    "image": "r02_straki_grochu.jpg"
  },
  {
    "id": "R02_KRE_01",
    "section": "Dziedziczenie grup krwi",
    "type": "single_choice",
    "prompt": "Który genotyp oznacza osobę Rh−?",
    "options": [
      "DD",
      "Dd",
      "dd",
      "D",
      "dD",
      "DDD"
    ],
    "answer": 2,
    "explanation": "Brak czynnika Rh występuje u homozygoty recesywnej dd.",
    "image": "r02_probka_krwi.jpg"
  },
  {
    "id": "R02_KRE_02",
    "section": "Dziedziczenie grup krwi",
    "type": "multi_select",
    "prompt": "Wskaż genotypy osoby Rh+.",
    "options": [
      "DD",
      "dd",
      "Dd",
      "ii",
      "IAi"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Obecność dominującego allelu D oznacza Rh+: możliwe są DD i Dd."
  },
  {
    "id": "R02_KRE_03",
    "section": "Dziedziczenie grup krwi",
    "type": "true_false",
    "prompt": "Allel D, odpowiadający za obecność czynnika Rh, jest dominujący.",
    "options": null,
    "answer": true,
    "explanation": "Rh+ występuje przy genotypach DD i Dd; allel d jest recesywny."
  },
  {
    "id": "R02_KRE_04",
    "section": "Dziedziczenie grup krwi",
    "type": "scenario",
    "prompt": "Matka ma Rh− i genotyp dd, a ojciec ma Rh+ i genotyp Dd. Jakie jest prawdopodobieństwo, że dziecko będzie Rh−?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Połowa możliwych genotypów potomstwa to dd, a połowa Dd.",
    "image": "r02_probka_krwi.jpg"
  },
  {
    "id": "R02_KRE_05",
    "section": "Dziedziczenie grup krwi",
    "type": "single_choice",
    "prompt": "Która grupa krwi ma antygeny A i B na powierzchni krwinek czerwonych?",
    "options": [
      "A",
      "B",
      "O",
      "AB",
      "A Rh−",
      "B Rh+"
    ],
    "answer": 3,
    "explanation": "U osoby z grupą AB występują obydwa antygeny.",
    "image": "r02_woreczki_krwi.jpg"
  },
  {
    "id": "R02_KRE_06",
    "section": "Dziedziczenie grup krwi",
    "type": "single_choice",
    "prompt": "Jaki genotyp odpowiada grupie krwi O?",
    "options": [
      "IAIA",
      "IBi",
      "ii",
      "IAIB",
      "IAi",
      "IBIB"
    ],
    "answer": 2,
    "explanation": "Grupa O występuje przy dwóch recesywnych allelach i, czyli ii."
  },
  {
    "id": "R02_KRE_07",
    "section": "Dziedziczenie grup krwi",
    "type": "match",
    "prompt": "Połącz grupę krwi z jednym właściwym genotypem.",
    "options": null,
    "answer": {
      "A": "IAi",
      "B": "IBi",
      "AB": "IAIB",
      "O": "ii"
    },
    "explanation": "A i B mogą wystąpić u heterozygot, AB wynika z kodominacji, a O wymaga ii.",
    "left": [
      "A",
      "B",
      "AB",
      "O"
    ],
    "right": [
      "ii",
      "IAIB",
      "IBi",
      "IAi"
    ],
    "image": "r02_woreczki_krwi.jpg"
  },
  {
    "id": "R02_KRE_08",
    "section": "Dziedziczenie grup krwi",
    "type": "riddle",
    "prompt": "Jak nazywa się równoczesne ujawnienie dwóch alleli dominujących, tak jak IA i IB w grupie AB?",
    "options": null,
    "answer": "kodominacja",
    "explanation": "Kodominacja oznacza równoczesną dominację dwóch alleli.",
    "altAnswers": [
      "kodominacja",
      "kodominacją"
    ]
  },
  {
    "id": "R02_KRE_09",
    "section": "Dziedziczenie grup krwi",
    "type": "fill_in",
    "prompt": "Grupa krwi AB ma genotyp __________, a grupa krwi O ma genotyp __________.",
    "options": null,
    "answer": [
      "IAIB",
      "ii"
    ],
    "explanation": "AB to IAIB; grupa O wymaga dwóch alleli recesywnych i.",
    "altAnswers": [
      [
        "IAIB",
        "IᴬIᴮ",
        "I^AI^B"
      ],
      [
        "ii"
      ]
    ]
  },
  {
    "id": "R02_KRE_10",
    "section": "Dziedziczenie grup krwi",
    "type": "odd_one_out",
    "prompt": "Wskaż genotyp niepasujący do grupy krwi A: IAIA, IAi, IAIB, iIA.",
    "options": null,
    "answer": "IAIB",
    "explanation": "IAIB warunkuje grupę AB, a pozostałe zapisy opisują grupę A."
  },
  {
    "id": "R02_KRE_11",
    "section": "Dziedziczenie grup krwi",
    "type": "sort",
    "prompt": "Przyporządkuj genotypy do grup krwi.",
    "options": null,
    "answer": {
      "A": [
        "IAIA",
        "IAi"
      ],
      "B": [
        "IBIB",
        "IBi"
      ],
      "AB": [
        "IAIB"
      ],
      "O": [
        "ii"
      ]
    },
    "explanation": "Allele IA i IB są kodominujące, a i recesywne.",
    "items": [
      "IBi",
      "IAIB",
      "IAi",
      "ii",
      "IBIB",
      "IAIA"
    ],
    "categories": [
      "A",
      "B",
      "AB",
      "O"
    ]
  },
  {
    "id": "R02_KRE_12",
    "section": "Dziedziczenie grup krwi",
    "type": "scenario",
    "prompt": "Matka ma grupę O (ii), a ojciec grupę AB (IAIB). Jakie grupy krwi mogą mieć ich dzieci?",
    "options": [
      "Tylko O",
      "A lub B",
      "A lub AB",
      "B lub O",
      "AB lub O",
      "Wszystkie cztery grupy"
    ],
    "answer": 1,
    "explanation": "Gameta i matki łączy się z IA albo IB ojca, co daje grupę A albo B.",
    "image": "r02_woreczki_krwi.jpg"
  },
  {
    "id": "R02_KRE_13",
    "section": "Dziedziczenie grup krwi",
    "type": "multi_select",
    "prompt": "Wskaż możliwe grupy krwi potomstwa rodziców IAi × IBi.",
    "options": [
      "A",
      "B",
      "AB",
      "O",
      "Wyłącznie Rh+"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Krzyżówka daje IAIB, IAi, IBi oraz ii, więc wszystkie cztery grupy."
  },
  {
    "id": "R02_KRE_14",
    "section": "Dziedziczenie grup krwi",
    "type": "true_false",
    "prompt": "Dwoje rodziców z genotypem ii może mieć dziecko z grupą AB.",
    "options": null,
    "answer": false,
    "explanation": "Każdy z rodziców przekazuje jedynie allel i; potomstwo ma grupę O."
  },
  {
    "id": "R02_PLC_01",
    "section": "Dziedziczenie płci",
    "type": "single_choice",
    "prompt": "Która para chromosomów człowieka jest parą chromosomów płci?",
    "options": [
      "1.",
      "21.",
      "23.",
      "22.",
      "12.",
      "2."
    ],
    "answer": 2,
    "explanation": "Chromosomy płci stanowią 23. parę kariotypu.",
    "image": "r02_rodzina_cechy.jpg"
  },
  {
    "id": "R02_PLC_02",
    "section": "Dziedziczenie płci",
    "type": "single_choice",
    "prompt": "Ile par autosomów znajduje się w typowym kariotypie człowieka?",
    "options": [
      "20",
      "21",
      "22",
      "23",
      "24",
      "46"
    ],
    "answer": 2,
    "explanation": "Człowiek ma 22 pary autosomów i jedną parę chromosomów płci."
  },
  {
    "id": "R02_PLC_03",
    "section": "Dziedziczenie płci",
    "type": "match",
    "prompt": "Połącz gametę lub zestaw chromosomów z opisem.",
    "options": null,
    "answer": {
      "komórka jajowa": "zawiera chromosom X",
      "plemnik": "może zawierać chromosom X lub Y",
      "XX": "typowy zestaw chromosomów płci żeńskiej",
      "XY": "typowy zestaw chromosomów płci męskiej"
    },
    "explanation": "Jajo wnosi X, a plemnik X albo Y; z połączenia powstaje XX lub XY.",
    "left": [
      "komórka jajowa",
      "plemnik",
      "XX",
      "XY"
    ],
    "right": [
      "typowy zestaw chromosomów płci męskiej",
      "zawiera chromosom X",
      "typowy zestaw chromosomów płci żeńskiej",
      "może zawierać chromosom X lub Y"
    ]
  },
  {
    "id": "R02_PLC_04",
    "section": "Dziedziczenie płci",
    "type": "true_false",
    "prompt": "Urodzenie dwóch córek zmienia prawdopodobieństwo urodzenia syna w kolejnej ciąży.",
    "options": null,
    "answer": false,
    "explanation": "Każde zapłodnienie jest odrębnym zdarzeniem; prawdopodobieństwo syna pozostaje 50%."
  },
  {
    "id": "R02_PLC_05",
    "section": "Dziedziczenie płci",
    "type": "scenario",
    "prompt": "Rodzice mają trzy córki. Jakie jest prawdopodobieństwo, że następne dziecko będzie synem?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Każda ciąża ma niezależnie około 50% szans na potomstwo XY.",
    "image": "r02_rodzina_cechy.jpg"
  },
  {
    "id": "R02_PLC_06",
    "section": "Dziedziczenie płci",
    "type": "multi_select",
    "prompt": "Wybierz recesywne choroby sprzężone z chromosomem X.",
    "options": [
      "Hemofilia",
      "Mukowiscydoza",
      "Daltonizm",
      "Fenyloketonuria",
      "Zespół Downa"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Hemofilia i daltonizm są chorobami recesywnymi sprzężonymi z X.",
    "image": "r02_badanie_barw.jpg"
  },
  {
    "id": "R02_PLC_07",
    "section": "Dziedziczenie płci",
    "type": "single_choice",
    "prompt": "Z którym chromosomem płci związane są geny odpowiedzialne za recesywne postacie hemofilii i daltonizmu?",
    "options": [
      "X",
      "Y",
      "X i Y jednocześnie",
      "Żadnym",
      "21. autosomie",
      "22. autosomie"
    ],
    "answer": 0,
    "explanation": "Recesywne allele odpowiedzialne za te choroby znajdują się na chromosomie X."
  },
  {
    "id": "R02_PLC_08",
    "section": "Dziedziczenie płci",
    "type": "fill_in",
    "prompt": "Syn otrzymuje chromosom X od __________, a chromosom Y od __________.",
    "options": null,
    "answer": [
      "matki",
      "ojca"
    ],
    "explanation": "Komórka jajowa wnosi X, a plemnik z Y warunkuje potomstwo XY.",
    "altAnswers": [
      [
        "matki",
        "mamy"
      ],
      [
        "ojca",
        "taty"
      ]
    ]
  },
  {
    "id": "R02_PLC_09",
    "section": "Dziedziczenie płci",
    "type": "single_choice",
    "prompt": "Jaki zapis opisuje mężczyznę chorego na hemofilię, jeśli Xh zawiera allel choroby?",
    "options": [
      "XHXH",
      "XHXh",
      "XhY",
      "XHY",
      "XhXh",
      "YY"
    ],
    "answer": 2,
    "explanation": "Mężczyzna XY choruje, gdy jego jedyny chromosom X niesie recesywny allel h."
  },
  {
    "id": "R02_PLC_10",
    "section": "Dziedziczenie płci",
    "type": "sort",
    "prompt": "Przyporządkuj uproszczone genotypy hemofilii do fenotypów.",
    "options": null,
    "answer": {
      "kobieta zdrowa bez allelu h": [
        "XHXH"
      ],
      "kobieta zdrowa nosicielka": [
        "XHXh"
      ],
      "mężczyzna zdrowy": [
        "XHY"
      ],
      "mężczyzna chory": [
        "XhY"
      ]
    },
    "explanation": "Allele h u kobiety w heterozygocie nie wywołuje choroby; u mężczyzny XhY już tak.",
    "items": [
      "XHY",
      "XHXh",
      "XhY",
      "XHXH"
    ],
    "categories": [
      "kobieta zdrowa bez allelu h",
      "kobieta zdrowa nosicielka",
      "mężczyzna zdrowy",
      "mężczyzna chory"
    ]
  },
  {
    "id": "R02_PLC_11",
    "section": "Dziedziczenie płci",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę o innym sposobie dziedziczenia: hemofilia, daltonizm, mukowiscydoza.",
    "options": null,
    "answer": "mukowiscydoza",
    "explanation": "Mukowiscydoza jest chorobą recesywną autosomalną, a hemofilia i daltonizm są sprzężone z chromosomem X."
  },
  {
    "id": "R02_PLC_12",
    "section": "Dziedziczenie płci",
    "type": "scenario",
    "prompt": "Nosicielka hemofilii XHXh i zdrowy mężczyzna XHY oczekują dziecka. Jakie jest prawdopodobieństwo urodzenia chorego dziecka?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 1,
    "explanation": "Jedna z czterech kombinacji potomstwa to chory syn XhY, czyli 25%.",
    "image": "r02_matka_noworodek.jpg"
  },
  {
    "id": "R02_PLC_13",
    "section": "Dziedziczenie płci",
    "type": "riddle",
    "prompt": "Jak nazywa się kobieta, która ma allel recesywny choroby na jednym chromosomie X, nie choruje, ale może przekazać allel dzieciom?",
    "options": null,
    "answer": "nosicielka",
    "explanation": "Heterozygotyczna kobieta z jednym prawidłowym i jednym chorobowym allelem jest nosicielką.",
    "altAnswers": [
      "nosicielka",
      "nosicielką"
    ]
  },
  {
    "id": "R02_PLC_14",
    "section": "Dziedziczenie płci",
    "type": "sequence",
    "prompt": "Ułóż możliwe etapy przekazania recesywnego allelu Xh od kobiety do chorego syna.",
    "options": null,
    "answer": [
      "Matka ma allel h na jednym chromosomie X",
      "Komórka jajowa otrzymuje chromosom Xh",
      "Plemnik wnosi chromosom Y",
      "Syn ma genotyp XhY"
    ],
    "explanation": "Allel h trafia do jaja, plemnik wnosi Y, a syn ma jedyny X z allelem choroby.",
    "items": [
      "Plemnik wnosi chromosom Y",
      "Syn ma genotyp XhY",
      "Matka ma allel h na jednym chromosomie X",
      "Komórka jajowa otrzymuje chromosom Xh"
    ]
  },
  {
    "id": "R02_MUT_01",
    "section": "Mutacje genetyczne",
    "type": "single_choice",
    "prompt": "Czym jest mutacja?",
    "options": [
      "Zwykły podział komórki",
      "Nagła zmiana materiału genetycznego",
      "Przekazanie gamet",
      "Każda zmiana diety",
      "Powstanie białka",
      "Łączenie antygenów"
    ],
    "answer": 1,
    "explanation": "Mutacja to nagła zmiana materiału genetycznego.",
    "image": "r02_laboratorium_dna.jpg"
  },
  {
    "id": "R02_MUT_02",
    "section": "Mutacje genetyczne",
    "type": "match",
    "prompt": "Połącz rodzaj mutacji z poziomem zmiany.",
    "options": null,
    "answer": {
      "mutacja genowa": "zmiana jednego lub kilku nukleotydów",
      "mutacja chromosomowa": "zmiana fragmentu lub liczby chromosomów",
      "spontaniczna mutacja": "zmiana bez zewnętrznego czynnika mutagennego"
    },
    "explanation": "Mutacje genowe dotyczą krótkich odcinków DNA, chromosomowe większych struktur; spontaniczne powstają bez czynnika zewnętrznego.",
    "left": [
      "mutacja genowa",
      "mutacja chromosomowa",
      "spontaniczna mutacja"
    ],
    "right": [
      "zmiana bez zewnętrznego czynnika mutagennego",
      "zmiana fragmentu lub liczby chromosomów",
      "zmiana jednego lub kilku nukleotydów"
    ]
  },
  {
    "id": "R02_MUT_03",
    "section": "Mutacje genetyczne",
    "type": "true_false",
    "prompt": "Nienaprawiony błąd podczas kopiowania DNA może być źródłem spontanicznej mutacji.",
    "options": null,
    "answer": true,
    "explanation": "Błąd replikacji może utrwalić zmianę mimo braku zewnętrznego czynnika."
  },
  {
    "id": "R02_MUT_04",
    "section": "Mutacje genetyczne",
    "type": "multi_select",
    "prompt": "Wskaż czynniki mutagenne.",
    "options": [
      "Promieniowanie UV",
      "Woda",
      "Promieniowanie X",
      "Składniki dymu tytoniowego",
      "Tlen",
      "Wirus HPV"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Promieniowanie UV i X, składniki dymu tytoniowego oraz wirus HPV mogą działać mutagennie.",
    "image": "r02_profilaktyka_uv.jpg"
  },
  {
    "id": "R02_MUT_05",
    "section": "Mutacje genetyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest czynnikiem mutagennym: promieniowanie UV, dym tytoniowy, czysta woda, promieniowanie X.",
    "options": null,
    "answer": "czysta woda",
    "explanation": "Promieniowanie UV i X oraz składniki dymu są mutagenne; czysta woda nie należy do tej grupy."
  },
  {
    "id": "R02_MUT_06",
    "section": "Mutacje genetyczne",
    "type": "single_choice",
    "prompt": "Jaka zmiana chromosomowa jest przyczyną zespołu Downa?",
    "options": [
      "Brak chromosomu X",
      "Dodatkowy chromosom Y",
      "Dodatkowy chromosom 21",
      "Brak chromosomu 21",
      "Dwa chromosomy 21",
      "Dodatkowy chromosom 22"
    ],
    "answer": 2,
    "explanation": "Zespół Downa wiąże się z trzema kopiami chromosomu 21.",
    "image": "r02_badanie_noworodka.jpg"
  },
  {
    "id": "R02_MUT_07",
    "section": "Mutacje genetyczne",
    "type": "fill_in",
    "prompt": "Typowy zestaw chromosomów płci mężczyzny z zespołem Klinefeltera to __________.",
    "options": null,
    "answer": [
      "XXY"
    ],
    "explanation": "Zespół Klinefeltera wiąże się z dodatkowym chromosomem X u mężczyzny.",
    "altAnswers": [
      [
        "XXY",
        "X X Y"
      ]
    ]
  },
  {
    "id": "R02_MUT_08",
    "section": "Mutacje genetyczne",
    "type": "single_choice",
    "prompt": "Która choroba jest recesywna autosomalna i może prowadzić do nadmiernego wydzielania lepkiego śluzu?",
    "options": [
      "Mukowiscydoza",
      "Hemofilia",
      "Daltonizm",
      "Zespół Downa",
      "Zespół Klinefeltera",
      "Albinizm"
    ],
    "answer": 0,
    "explanation": "Mukowiscydoza jest chorobą recesywną autosomalną związaną z lepkim śluzem.",
    "image": "r02_badanie_noworodka.jpg"
  },
  {
    "id": "R02_MUT_09",
    "section": "Mutacje genetyczne",
    "type": "multi_select",
    "prompt": "Wskaż choroby recesywne autosomalne będące skutkami mutacji genowych.",
    "options": [
      "Hemofilia",
      "Mukowiscydoza",
      "Daltonizm",
      "Fenyloketonuria",
      "Zespół Downa"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "Mukowiscydoza i fenyloketonuria są chorobami recesywnymi autosomalnymi."
  },
  {
    "id": "R02_MUT_10",
    "section": "Mutacje genetyczne",
    "type": "scenario",
    "prompt": "Dwoje zdrowych rodziców jest nosicielami allelu mukowiscydozy (Mm × Mm). Jaka jest szansa na potomstwo chore o genotypie mm?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 1,
    "explanation": "Krzyżówka Mm × Mm daje jedną kombinację mm na cztery, czyli 25%.",
    "image": "r02_matka_noworodek.jpg"
  },
  {
    "id": "R02_MUT_11",
    "section": "Mutacje genetyczne",
    "type": "sort",
    "prompt": "Podziel przykłady chorób według rodzaju wywołującej je zmiany genetycznej.",
    "options": null,
    "answer": {
      "mutacje genowe": [
        "mukowiscydoza",
        "fenyloketonuria",
        "hemofilia",
        "daltonizm"
      ],
      "mutacje chromosomowe": [
        "zespół Downa",
        "zespół Klinefeltera"
      ]
    },
    "explanation": "Pierwsza grupa wynika z mutacji genów, a druga ze zmian liczby chromosomów.",
    "items": [
      "zespół Downa",
      "daltonizm",
      "mukowiscydoza",
      "zespół Klinefeltera",
      "hemofilia",
      "fenyloketonuria"
    ],
    "categories": [
      "mutacje genowe",
      "mutacje chromosomowe"
    ]
  },
  {
    "id": "R02_MUT_12",
    "section": "Mutacje genetyczne",
    "type": "true_false",
    "prompt": "Badania przesiewowe noworodków pozwalają szybciej rozpoznać między innymi fenyloketonurię.",
    "options": null,
    "answer": true,
    "explanation": "Wczesne badania umożliwiają wykrycie choroby i wdrożenie odpowiedniego leczenia.",
    "image": "r02_badanie_noworodka.jpg"
  },
  {
    "id": "R02_MUT_13",
    "section": "Mutacje genetyczne",
    "type": "scenario",
    "prompt": "Osoba chce ograniczyć kontakt z czynnikami mutagennymi. Które działanie pomoże zmniejszyć narażenie?",
    "options": [
      "Unikanie intensywnego UV i dymu tytoniowego",
      "Spalanie plastiku w ognisku",
      "Opalanie się bez ochrony przez wiele godzin",
      "Przebywanie w zadymionym pomieszczeniu"
    ],
    "answer": 0,
    "explanation": "Ograniczenie ekspozycji na UV i unikanie dymu tytoniowego zmniejszają kontakt z czynnikami mutagennymi.",
    "image": "r02_profilaktyka_uv.jpg"
  },
  {
    "id": "R02_MUT_14",
    "section": "Mutacje genetyczne",
    "type": "riddle",
    "prompt": "Jak nazywa się dodatkowy, trzeci chromosom tej samej pary obecny w zespole Downa? Podaj numer pary.",
    "options": null,
    "answer": "21",
    "explanation": "Zespół Downa wiąże się z trzema kopiami chromosomu 21.",
    "altAnswers": [
      "21",
      "21.",
      "dwudziesta pierwsza"
    ]
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rodzice z czerwonymi kwiatami mają genotypy Aa × Aa. Wśród 20 roślin potomnych pięć ma białe kwiaty. Jaki odsetek to stanowi?",
    "options": [
      "5%",
      "20%",
      "25%",
      "50%",
      "75%"
    ],
    "answer": 2,
    "explanation": "5 z 20 to jedna czwarta, czyli 25%; odpowiada to kombinacji aa."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Matka IAi i ojciec IBi mają dziecko z grupą O. Jakie allele dziecko dostało od rodziców?",
    "options": [
      "IA oraz IB",
      "IA oraz i",
      "IB oraz i",
      "i oraz i",
      "IA oraz IA",
      "IB oraz IB"
    ],
    "answer": 3,
    "explanation": "Genotyp grupy O to ii, dlatego każde z rodziców przekazało allel i."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Matka ma grupę AB, a ojciec grupę B i genotyp IBi. Jaka jest szansa na grupę B u potomstwa?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 2,
    "explanation": "Krzyżówka IAIB × IBi daje IAIB, IAi, IBIB, IBi; dwie kombinacje oznaczają B.",
    "image": "r02_woreczki_krwi.jpg"
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Rodzice IAIB × IBi mogą mieć dziecko z którymi grupami krwi?",
    "options": [
      "A",
      "B",
      "AB",
      "O"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Możliwe genotypy to IAIB (AB), IAi (A), IBIB i IBi (B); O nie występuje."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Matka Rh− ma dd, ojciec Rh+ ma DD. Jaki genotyp czynnika Rh będą miały wszystkie dzieci?",
    "options": [
      "DD",
      "Dd",
      "dd",
      "DD albo dd",
      "Dd albo dd"
    ],
    "answer": 1,
    "explanation": "Matka przekazuje d, ojciec D; każde dziecko ma Dd."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zdrowa matka będąca nosicielką daltonizmu XDXd ma dziecko ze zdrowym ojcem XDY. Jaka jest szansa na syna daltonistę wśród wszystkich dzieci?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 1,
    "explanation": "XDY × XDXd daje jednego syna XdY wśród czterech równoprawdopodobnych kombinacji.",
    "image": "r02_badanie_barw.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ojciec z daltonizmem XdY i matka bez allelu daltonizmu XDXD mają córkę. Jakie genotypy mogą mieć ich córki?",
    "options": [
      "XDXD",
      "XdXd",
      "XDXd",
      "XdY",
      "XDY",
      "XXY"
    ],
    "answer": 2,
    "explanation": "Ojciec przekazuje córkom Xd, a matka zawsze XD; wszystkie córki są nosicielkami XDXd."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Matka XHXh jest nosicielką hemofilii, ojciec XhY jest chory. Jakie jest prawdopodobieństwo urodzenia chorej córki wśród wszystkich dzieci?",
    "options": [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 1,
    "explanation": "Połączenie Xh matki z Xh ojca daje chorą córkę XhXh w jednej z czterech kombinacji."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj krzyżówkę rodziców do prawdopodobieństwa cechy recesywnej u potomstwa.",
    "options": null,
    "answer": {
      "Aa × Aa": "25% potomstwa aa",
      "Aa × aa": "50% potomstwa aa",
      "AA × aa": "0% potomstwa aa"
    },
    "explanation": "Przy pełnej dominacji kombinacje aa występują odpowiednio w 1/4, 1/2 lub 0 przypadków.",
    "left": [
      "Aa × Aa",
      "Aa × aa",
      "AA × aa"
    ],
    "right": [
      "0% potomstwa aa",
      "25% potomstwa aa",
      "50% potomstwa aa"
    ]
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przypadki do minimalnej liczby recesywnych alleli potrzebnych do ujawnienia choroby.",
    "options": null,
    "answer": {
      "jeden allel na jedynym X u mężczyzny": [
        "mężczyzna XhY z hemofilią",
        "mężczyzna XdY z daltonizmem"
      ],
      "dwa allele recesywne": [
        "kobieta XhXh z hemofilią",
        "osoba mm z mukowiscydozą"
      ]
    },
    "explanation": "Mężczyzna ma jeden X, a kobieta dla recesywnej choroby sprzężonej z X potrzebuje dwóch alleli; choroba autosomalna mm również dwóch.",
    "items": [
      "osoba mm z mukowiscydozą",
      "mężczyzna XdY z daltonizmem",
      "kobieta XhXh z hemofilią",
      "mężczyzna XhY z hemofilią"
    ],
    "categories": [
      "jeden allel na jedynym X u mężczyzny",
      "dwa allele recesywne"
    ]
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstania chorego dziecka u dwojga nosicieli mukowiscydozy.",
    "options": null,
    "answer": [
      "Oboje rodzice mają genotyp Mm",
      "Oboje przekazują gametę z allelem m",
      "Powstaje zygota o genotypie mm",
      "U dziecka ujawnia się choroba recesywna"
    ],
    "explanation": "Allel m od każdego nosiciela tworzy mm, co ujawnia chorobę.",
    "items": [
      "Powstaje zygota o genotypie mm",
      "Oboje rodzice mają genotyp Mm",
      "U dziecka ujawnia się choroba recesywna",
      "Oboje przekazują gametę z allelem m"
    ]
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Matka z grupą O (ii) i ojciec z grupą AB (IAIB) mogą mieć dziecko z grupą O.",
    "options": null,
    "answer": false,
    "explanation": "Ojciec nie ma allelu i, zatem jego potomstwo z matką ii ma IAi lub IBi."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Dziedziczenie cech",
  "icon": "🧬",
  "sectionOrder": [
    "Podstawy dziedziczenia cech",
    "Dziedziczenie grup krwi",
    "Dziedziczenie płci",
    "Mutacje genetyczne"
  ],
  "sectionIcons": {
    "Podstawy dziedziczenia cech": "🧬",
    "Dziedziczenie grup krwi": "🩸",
    "Dziedziczenie płci": "👶",
    "Mutacje genetyczne": "🔬"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
