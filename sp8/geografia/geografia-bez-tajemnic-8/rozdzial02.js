// Skróty sekcji (do identyfikatorów ćwiczeń):
//   JAP  = Japonia
//   CHI  = Chiny
//   IND  = Indie
//   BLI  = Kraje Bliskiego Wschodu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_JAP_01",
    "section": "Japonia",
    "type": "single_choice",
    "prompt": "Na ilu dużych wyspach leży Japonia?",
    "options": [
      "Dwóch",
      "Trzech",
      "Czterech",
      "Pięciu",
      "Sześciu",
      "Siedmiu"
    ],
    "answer": 2,
    "explanation": "Japonia leży na czterech dużych wyspach oraz kilku tysiącach mniejszych.",
    "image": "r02_wyspy_japonii.jpg"
  },
  {
    "id": "R02_JAP_02",
    "section": "Japonia",
    "type": "multi_select",
    "prompt": "Zaznacz duże wyspy Japonii.",
    "options": [
      "Honsiu",
      "Hokkaido",
      "Kiusiu",
      "Sikoku",
      "Tajwan",
      "Borneo"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Cztery główne wyspy to Honsiu, Hokkaido, Kiusiu i Sikoku."
  },
  {
    "id": "R02_JAP_03",
    "section": "Japonia",
    "type": "true_false",
    "prompt": "W Japonii występuje cyrkulacja monsunowa.",
    "options": null,
    "answer": true,
    "explanation": "Monsuny kształtują klimat Japonii, lecz kraj nie ma wyraźnej pory suchej."
  },
  {
    "id": "R02_JAP_04",
    "section": "Japonia",
    "type": "fill_in",
    "prompt": "Tylko około __________% powierzchni Japonii stanowią niziny.",
    "options": null,
    "answer": [
      "10"
    ],
    "altAnswers": [
      [
        "10",
        "10%"
      ]
    ],
    "explanation": "Wyżynno-górska rzeźba sprawia, że niziny zajmują około 10% kraju."
  },
  {
    "id": "R02_JAP_05",
    "section": "Japonia",
    "type": "riddle",
    "prompt": "Jak nazywa się japońska sieć szybkich pociągów?",
    "options": null,
    "answer": "Shinkansen",
    "altAnswers": [
      "Shinkansen",
      "shinkansen"
    ],
    "explanation": "Pociągi Shinkansen osiągają około 320 km/h i słyną z punktualności."
  },
  {
    "id": "R02_JAP_06",
    "section": "Japonia",
    "type": "odd_one_out",
    "prompt": "Co nie jest klęską żywiołową typową dla Japonii: trzęsienie ziemi, tsunami, tajfun, susza pustynna.",
    "options": null,
    "answer": "susza pustynna",
    "explanation": "Japonia doświadcza trzęsień ziemi, tsunami, erupcji wulkanów i tajfunów, nie jest zaś krajem pustynnym."
  },
  {
    "id": "R02_JAP_07",
    "section": "Japonia",
    "type": "match",
    "prompt": "Połącz wyzwanie z rozwiązaniem.",
    "options": null,
    "left": [
      "Brak surowców",
      "Wyspiarskie położenie",
      "Trzęsienia ziemi"
    ],
    "right": [
      "Import przez porty",
      "Mosty i tunele",
      "Odporne budynki"
    ],
    "answer": {
      "Brak surowców": "Import przez porty",
      "Wyspiarskie położenie": "Mosty i tunele",
      "Trzęsienia ziemi": "Odporne budynki"
    },
    "explanation": "Japonia przezwycięża bariery naturalne dzięki nowoczesnej infrastrukturze."
  },
  {
    "id": "R02_JAP_08",
    "section": "Japonia",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do importu lub eksportu Japonii.",
    "options": null,
    "items": [
      "ropa naftowa",
      "rudy żelaza",
      "samochody",
      "statki"
    ],
    "categories": [
      "import",
      "eksport"
    ],
    "answer": {
      "import": [
        "ropa naftowa",
        "rudy żelaza"
      ],
      "eksport": [
        "samochody",
        "statki"
      ]
    },
    "explanation": "Japonia sprowadza surowce i eksportuje wysoko przetworzone wyroby."
  },
  {
    "id": "R02_JAP_09",
    "section": "Japonia",
    "type": "sequence",
    "prompt": "Ułóż etapy produkcji w Japonii.",
    "options": null,
    "items": [
      "eksport gotowych wyrobów",
      "przetwarzanie w zakładach",
      "import surowców",
      "produkcja zaawansowanych urządzeń"
    ],
    "answer": [
      "import surowców",
      "przetwarzanie w zakładach",
      "produkcja zaawansowanych urządzeń",
      "eksport gotowych wyrobów"
    ],
    "explanation": "Porty i przemysł przetwórczy łączą import surowców z eksportem gotowych produktów."
  },
  {
    "id": "R02_JAP_10",
    "section": "Japonia",
    "type": "scenario",
    "prompt": "Rolnik ma niewiele ziemi, ale stosuje wydajne odmiany, nawozy i nowoczesne maszyny. Jaki typ rolnictwa prowadzi?",
    "options": [
      "intensywne",
      "ekstensywne",
      "żarowe",
      "koczownicze"
    ],
    "answer": 0,
    "explanation": "Rolnictwo intensywne osiąga wysoką produktywność dzięki dużym nakładom.",
    "image": "r02_tarasy_rolne_japonii.jpg"
  },
  {
    "id": "R02_JAP_11",
    "section": "Japonia",
    "type": "single_choice",
    "prompt": "Która para religii i systemów wartości silnie wpływa na kulturę pracy w Japonii?",
    "options": [
      "sintoizm i konfucjanizm",
      "hinduizm i islam",
      "judaizm i buddyzm",
      "chrześcijaństwo i islam"
    ],
    "answer": 0,
    "explanation": "Sintoizm i konfucjanizm wzmacniają hierarchię, lojalność, dyscyplinę i szacunek dla starszych."
  },
  {
    "id": "R02_JAP_12",
    "section": "Japonia",
    "type": "true_false",
    "prompt": "Japonia zaspokaja całość zapotrzebowania na żywność z własnej produkcji.",
    "options": null,
    "answer": false,
    "explanation": "Ponad połowa żywności musi być importowana mimo wydajnego rolnictwa i rybołówstwa."
  },
  {
    "id": "R02_CHI_01",
    "section": "Chiny",
    "type": "single_choice",
    "prompt": "W której części Chin mieszka większość ludności?",
    "options": [
      "wschodniej",
      "zachodniej",
      "północno-zachodniej",
      "na Wyżynie Tybetańskiej"
    ],
    "answer": 0,
    "explanation": "Niziny, doliny rzeczne i wilgotniejszy klimat skupiają ludność na wschodzie.",
    "image": "r02_gestosc_zaludnienia_chin.jpg"
  },
  {
    "id": "R02_CHI_02",
    "section": "Chiny",
    "type": "true_false",
    "prompt": "Wraz z oddalaniem się od wschodniego wybrzeża gęstość zaludnienia Chin zwykle maleje.",
    "options": null,
    "answer": true,
    "explanation": "Zachód jest wyżej położony i suchszy, dlatego jest znacznie słabiej zaludniony."
  },
  {
    "id": "R02_CHI_03",
    "section": "Chiny",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające dużej gęstości zaludnienia we wschodnich Chinach.",
    "options": [
      "niziny",
      "żyzne gleby",
      "dostęp do wody",
      "wysokie góry",
      "bardzo niskie opady"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wschód oferuje niziny, wodę i dogodne warunki rolnicze."
  },
  {
    "id": "R02_CHI_04",
    "section": "Chiny",
    "type": "fill_in",
    "prompt": "Politykę jednego dziecka wprowadzono, aby ograniczyć szybki przyrost __________.",
    "options": null,
    "answer": [
      "ludności"
    ],
    "altAnswers": [
      [
        "ludności",
        "ludnosci",
        "populacji"
      ]
    ],
    "explanation": "Władze próbowały zahamować wzrost liczby mieszkańców."
  },
  {
    "id": "R02_CHI_05",
    "section": "Chiny",
    "type": "riddle",
    "prompt": "Jak nazywa się wskaźnik określający średnią liczbę dzieci przypadającą na kobietę?",
    "options": null,
    "answer": "współczynnik dzietności",
    "altAnswers": [
      "współczynnik dzietności",
      "wspolczynnik dzietnosci",
      "dzietność"
    ],
    "explanation": "Współczynnik dzietności służy do opisu poziomu urodzeń."
  },
  {
    "id": "R02_CHI_06",
    "section": "Chiny",
    "type": "odd_one_out",
    "prompt": "Co nie sprzyja koncentracji ludności we wschodnich Chinach: niziny, doliny rzek, żyzne gleby, pustynie.",
    "options": null,
    "answer": "pustynie",
    "explanation": "Pustynie i obszary suche są typowe dla słabo zaludnionego zachodu."
  },
  {
    "id": "R02_CHI_07",
    "section": "Chiny",
    "type": "match",
    "prompt": "Połącz etap rozwoju gospodarki Chin z cechą.",
    "options": null,
    "left": [
      "Początek reform",
      "Fabryka świata",
      "Współczesność"
    ],
    "right": [
      "napływ inwestycji",
      "masowa tania produkcja",
      "rozwój innowacji"
    ],
    "answer": {
      "Początek reform": "napływ inwestycji",
      "Fabryka świata": "masowa tania produkcja",
      "Współczesność": "rozwój innowacji"
    },
    "explanation": "Chiny przeszły od przyciągania kapitału i taniej produkcji do rozwijania własnych technologii."
  },
  {
    "id": "R02_CHI_08",
    "section": "Chiny",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do wschodu i zachodu Chin.",
    "options": null,
    "items": [
      "gęsta sieć miast",
      "wysokie góry",
      "duża gęstość zaludnienia",
      "niskie opady"
    ],
    "categories": [
      "wschód",
      "zachód"
    ],
    "answer": {
      "wschód": [
        "gęsta sieć miast",
        "duża gęstość zaludnienia"
      ],
      "zachód": [
        "wysokie góry",
        "niskie opady"
      ]
    },
    "explanation": "Kontrasty środowiska wyjaśniają nierównomierne rozmieszczenie ludności."
  },
  {
    "id": "R02_CHI_09",
    "section": "Chiny",
    "type": "sequence",
    "prompt": "Ułóż przemiany chińskiego przemysłu od najwcześniejszej.",
    "options": null,
    "items": [
      "rozwój własnych innowacji",
      "produkcja tanich towarów",
      "napływ zagranicznych inwestycji",
      "wzrost kosztów pracy"
    ],
    "answer": [
      "napływ zagranicznych inwestycji",
      "produkcja tanich towarów",
      "wzrost kosztów pracy",
      "rozwój własnych innowacji"
    ],
    "explanation": "Rosnące koszty skłoniły gospodarkę do przechodzenia ku bardziej zaawansowanej produkcji."
  },
  {
    "id": "R02_CHI_10",
    "section": "Chiny",
    "type": "scenario",
    "prompt": "Firma chce zbudować zakład nastawiony na eksport i wybiera obszar z portami oraz gęstą siecią transportową. Którą część Chin wybierze?",
    "options": [
      "wschodnią",
      "zachodnią",
      "Wyżynę Tybetańską",
      "pustynię Takla Makan"
    ],
    "answer": 0,
    "explanation": "Największe ośrodki przemysłowe i porty koncentrują się na wschodzie.",
    "image": "r02_port_przemyslowy_chiny.jpg"
  },
  {
    "id": "R02_CHI_11",
    "section": "Chiny",
    "type": "single_choice",
    "prompt": "Jak nazywa się projekt rozbudowy połączeń handlowych Chin z Europą i innymi regionami?",
    "options": [
      "Nowy Jedwabny Szlak",
      "Szlak Bursztynowy",
      "Droga Herbaciana",
      "Kanał Sueski"
    ],
    "answer": 0,
    "explanation": "Nowy Jedwabny Szlak jest przejawem chińskiej ekspansji gospodarczej."
  },
  {
    "id": "R02_CHI_12",
    "section": "Chiny",
    "type": "true_false",
    "prompt": "Chiny są jednym z największych eksporterów produktów przemysłowych na świecie.",
    "options": null,
    "answer": true,
    "explanation": "Ogromna skala produkcji uczyniła Chiny czołowym eksporterem."
  },
  {
    "id": "R02_IND_01",
    "section": "Indie",
    "type": "single_choice",
    "prompt": "Od którego roku Indie są najludniejszym państwem świata?",
    "options": [
      "2010",
      "2015",
      "2020",
      "2023",
      "2025"
    ],
    "answer": 3,
    "explanation": "W 2023 roku Indie wyprzedziły Chiny pod względem liczby ludności.",
    "image": "r02_ludnosc_indii.jpg"
  },
  {
    "id": "R02_IND_02",
    "section": "Indie",
    "type": "true_false",
    "prompt": "Indie są krajem o bardzo małym zróżnicowaniu społecznym i gospodarczym.",
    "options": null,
    "answer": false,
    "explanation": "Indie cechują głębokie kontrasty między bogactwem i biedą oraz nowoczesnością i tradycją."
  },
  {
    "id": "R02_IND_03",
    "section": "Indie",
    "type": "multi_select",
    "prompt": "Zaznacz problemy społeczne występujące w Indiach.",
    "options": [
      "nierówności społeczne",
      "ubóstwo",
      "ograniczony dostęp do edukacji",
      "powszechny wysoki dobrobyt",
      "brak wielkich miast"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rozwój Indii nie usuwa ubóstwa, nierówności ani barier edukacyjnych."
  },
  {
    "id": "R02_IND_04",
    "section": "Indie",
    "type": "fill_in",
    "prompt": "Tradycyjny podział społeczeństwa Indii na zamknięte grupy to system __________.",
    "options": null,
    "answer": [
      "kastowy"
    ],
    "altAnswers": [
      [
        "kastowy",
        "kast"
      ]
    ],
    "explanation": "System kastowy utrwala nierówności i ogranicza mobilność społeczną."
  },
  {
    "id": "R02_IND_05",
    "section": "Indie",
    "type": "riddle",
    "prompt": "Jak nazywa się indyjska metropolia będąca ważnym ośrodkiem finansowym i filmowym?",
    "options": null,
    "answer": "Mumbaj",
    "altAnswers": [
      "Mumbaj",
      "Mumbai"
    ],
    "explanation": "Mumbaj należy do największych i najważniejszych gospodarczo miast Indii."
  },
  {
    "id": "R02_IND_06",
    "section": "Indie",
    "type": "odd_one_out",
    "prompt": "Co nie jest przykładem kontrastu w Indiach: nowoczesne technologie, dzielnice nędzy, wielkie fortuny, powszechny równy dobrobyt.",
    "options": null,
    "answer": "powszechny równy dobrobyt",
    "explanation": "Indie rozwijają nowoczesne sektory, ale nierówności pozostają duże."
  },
  {
    "id": "R02_IND_07",
    "section": "Indie",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "kasta",
      "slumsy",
      "sektor IT"
    ],
    "right": [
      "dziedziczna grupa społeczna",
      "dzielnica ubóstwa",
      "usługi informatyczne"
    ],
    "answer": {
      "kasta": "dziedziczna grupa społeczna",
      "slumsy": "dzielnica ubóstwa",
      "sektor IT": "usługi informatyczne"
    },
    "explanation": "Te pojęcia pokazują współistnienie tradycyjnych podziałów, biedy i nowoczesnej gospodarki."
  },
  {
    "id": "R02_IND_08",
    "section": "Indie",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do szans i barier rozwoju Indii.",
    "options": null,
    "items": [
      "młoda ludność",
      "rozwój IT",
      "analfabetyzm",
      "nierówności społeczne"
    ],
    "categories": [
      "szanse",
      "bariery"
    ],
    "answer": {
      "szanse": [
        "młoda ludność",
        "rozwój IT"
      ],
      "bariery": [
        "analfabetyzm",
        "nierówności społeczne"
      ]
    },
    "explanation": "Duży zasób pracy i technologie wspierają rozwój, ale bariery społeczne go hamują."
  },
  {
    "id": "R02_IND_09",
    "section": "Indie",
    "type": "sequence",
    "prompt": "Ułóż etapy zależności demograficznej.",
    "options": null,
    "items": [
      "wzrost zasobów pracy",
      "spadek umieralności",
      "szybki przyrost ludności",
      "większa liczba mieszkańców"
    ],
    "answer": [
      "spadek umieralności",
      "szybki przyrost ludności",
      "większa liczba mieszkańców",
      "wzrost zasobów pracy"
    ],
    "explanation": "Spadek umieralności przy wysokiej liczbie urodzeń prowadzi do szybkiego wzrostu populacji."
  },
  {
    "id": "R02_IND_10",
    "section": "Indie",
    "type": "scenario",
    "prompt": "Młoda osoba z ubogiej rodziny nie może wybrać zawodu z powodu dziedzicznego statusu społecznego. Jaki mechanizm ją ogranicza?",
    "options": [
      "system kastowy",
      "urbanizacja",
      "monsun",
      "globalizacja"
    ],
    "answer": 0,
    "explanation": "Dziedziczna przynależność kastowa ograniczała wybór zawodu i awans społeczny.",
    "image": "r02_kontrasty_spoleczne_indie.jpg"
  },
  {
    "id": "R02_IND_11",
    "section": "Indie",
    "type": "single_choice",
    "prompt": "Który sektor nowoczesnych usług jest ważnym atutem gospodarki Indii?",
    "options": [
      "informatyczny",
      "wielorybniczy",
      "drzewny",
      "futrzarski"
    ],
    "answer": 0,
    "explanation": "Indie rozwinęły usługi informatyczne i obsługę procesów biznesowych."
  },
  {
    "id": "R02_IND_12",
    "section": "Indie",
    "type": "true_false",
    "prompt": "Mumbaj jest stolicą Indii.",
    "options": null,
    "answer": false,
    "explanation": "Stolicą Indii jest Nowe Delhi, a Mumbaj jest wielką metropolią gospodarczą."
  },
  {
    "id": "R02_BLI_01",
    "section": "Kraje Bliskiego Wschodu",
    "type": "single_choice",
    "prompt": "Która religia dominuje w większości krajów Bliskiego Wschodu?",
    "options": [
      "islam",
      "hinduizm",
      "sintoizm",
      "buddyzm",
      "judaizm"
    ],
    "answer": 0,
    "explanation": "Islam jest najważniejszym wspólnym elementem kulturowym regionu.",
    "image": "r02_meczet_bliski_wschod.jpg"
  },
  {
    "id": "R02_BLI_02",
    "section": "Kraje Bliskiego Wschodu",
    "type": "true_false",
    "prompt": "Wszyscy mieszkańcy Bliskiego Wschodu są muzułmanami.",
    "options": null,
    "answer": false,
    "explanation": "Region jest zróżnicowany religijnie i etnicznie."
  },
  {
    "id": "R02_BLI_03",
    "section": "Kraje Bliskiego Wschodu",
    "type": "multi_select",
    "prompt": "Zaznacz pięć filarów islamu.",
    "options": [
      "wyznanie wiary",
      "modlitwa",
      "jałmużna",
      "post w ramadanie",
      "pielgrzymka do Mekki",
      "chrzest"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Pięć filarów obejmuje wyznanie wiary, modlitwę, jałmużnę, post i pielgrzymkę."
  },
  {
    "id": "R02_BLI_04",
    "section": "Kraje Bliskiego Wschodu",
    "type": "fill_in",
    "prompt": "Świętą księgą islamu jest __________.",
    "options": null,
    "answer": [
      "Koran"
    ],
    "altAnswers": [
      [
        "Koran",
        "koran"
      ]
    ],
    "explanation": "Koran został spisany po arabsku."
  },
  {
    "id": "R02_BLI_05",
    "section": "Kraje Bliskiego Wschodu",
    "type": "riddle",
    "prompt": "Jak nazywa się odłam islamu liczniejszy na świecie?",
    "options": null,
    "answer": "sunnici",
    "altAnswers": [
      "sunnici",
      "sunnizm"
    ],
    "explanation": "Sunnici stanowią większość muzułmanów."
  },
  {
    "id": "R02_BLI_06",
    "section": "Kraje Bliskiego Wschodu",
    "type": "odd_one_out",
    "prompt": "Co nie jest muzułmańskim nakryciem kobiecym: hidżab, czador, nikab, kimono.",
    "options": null,
    "answer": "kimono",
    "explanation": "Kimono jest strojem japońskim; pozostałe nazwy dotyczą ubiorów muzułmańskich."
  },
  {
    "id": "R02_BLI_07",
    "section": "Kraje Bliskiego Wschodu",
    "type": "match",
    "prompt": "Połącz kraj z cechą.",
    "options": null,
    "left": [
      "Arabia Saudyjska",
      "Izrael",
      "Jemen"
    ],
    "right": [
      "duże zasoby ropy",
      "nowoczesna gospodarka",
      "wyniszczający konflikt"
    ],
    "answer": {
      "Arabia Saudyjska": "duże zasoby ropy",
      "Izrael": "nowoczesna gospodarka",
      "Jemen": "wyniszczający konflikt"
    },
    "explanation": "Państwa regionu różnią się zasobami, rozwojem i stabilnością."
  },
  {
    "id": "R02_BLI_08",
    "section": "Kraje Bliskiego Wschodu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do przyczyn i skutków konfliktów.",
    "options": null,
    "items": [
      "spór terytorialny",
      "rywalizacja mocarstw",
      "uchodźstwo",
      "zniszczenie miast"
    ],
    "categories": [
      "przyczyny",
      "skutki"
    ],
    "answer": {
      "przyczyny": [
        "spór terytorialny",
        "rywalizacja mocarstw"
      ],
      "skutki": [
        "uchodźstwo",
        "zniszczenie miast"
      ]
    },
    "explanation": "Konflikty wynikają ze sporów i rywalizacji, a prowadzą do migracji i zniszczeń."
  },
  {
    "id": "R02_BLI_09",
    "section": "Kraje Bliskiego Wschodu",
    "type": "sequence",
    "prompt": "Ułóż elementy zależności gospodarki od ropy.",
    "options": null,
    "items": [
      "spadek dochodów państwa",
      "zmiana ceny ropy",
      "ograniczenie inwestycji",
      "niestabilność finansowa"
    ],
    "answer": [
      "zmiana ceny ropy",
      "spadek dochodów państwa",
      "niestabilność finansowa",
      "ograniczenie inwestycji"
    ],
    "explanation": "Silna zależność od surowca przenosi wahania cen na finanse państwa."
  },
  {
    "id": "R02_BLI_10",
    "section": "Kraje Bliskiego Wschodu",
    "type": "scenario",
    "prompt": "Państwo naftowe inwestuje w technologie, finanse i turystykę. Jaki cel realizuje?",
    "options": [
      "dywersyfikację gospodarki",
      "izolację gospodarczą",
      "likwidację usług",
      "zwiększenie zależności od ropy"
    ],
    "answer": 0,
    "explanation": "Dywersyfikacja zmniejsza ryzyko związane z wahaniami cen i wyczerpywaniem złóż.",
    "image": "r02_nowoczesne_miasto_zatoki.jpg"
  },
  {
    "id": "R02_BLI_11",
    "section": "Kraje Bliskiego Wschodu",
    "type": "single_choice",
    "prompt": "Która grupa stanowi około 15% muzułmanów?",
    "options": [
      "szyici",
      "sunnici",
      "chrześcijanie",
      "hinduiści"
    ],
    "answer": 0,
    "explanation": "Szyici są mniej licznym z dwóch głównych odłamów islamu."
  },
  {
    "id": "R02_BLI_12",
    "section": "Kraje Bliskiego Wschodu",
    "type": "true_false",
    "prompt": "Wojny zwykle powodują masowe migracje i kryzysy humanitarne.",
    "options": null,
    "answer": true,
    "explanation": "Ludzie tracą bliskich, zdrowie i dobytek, a wielu opuszcza swoje domy."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który tunel kolejowy łączy Honsiu i Hokkaido?",
    "options": [
      "Seikan",
      "Kanmon",
      "Gotthard",
      "Eurotunel"
    ],
    "answer": 0,
    "explanation": "Podmorski tunel Seikan łączy dwie największe wyspy Japonii.",
    "image": "r02_tunel_seikan.jpg"
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Surowce mineralne stanowią około __________% japońskiego importu.",
    "options": null,
    "answer": [
      "22"
    ],
    "altAnswers": [
      [
        "22",
        "22%"
      ]
    ],
    "explanation": "Surowce mineralne mają około 22% udziału w imporcie Japonii."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz port Japonii z grupą strategicznych portów.",
    "options": null,
    "left": [
      "Tokio",
      "Jokohama",
      "Kobe"
    ],
    "right": [
      "zatoka Tokijska",
      "sąsiedztwo Tokio",
      "rejon Osaka-Kobe"
    ],
    "answer": {
      "Tokio": "zatoka Tokijska",
      "Jokohama": "sąsiedztwo Tokio",
      "Kobe": "rejon Osaka-Kobe"
    },
    "explanation": "Tokio, Jokohama, Osaka, Kobe i Kawasaki mają strategiczne znaczenie międzynarodowe."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który skutek polityki jednego dziecka jest dziś wyzwaniem dla Chin?",
    "options": [
      "starzenie się ludności",
      "gwałtowny wzrost urodzeń",
      "zanik miast",
      "nadmiar ziemi uprawnej"
    ],
    "answer": 0,
    "explanation": "Długotrwałe ograniczenie urodzeń przyspieszyło starzenie społeczeństwa."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do Japonii i Chin.",
    "options": null,
    "items": [
      "niedobór surowców",
      "sieć Shinkansen",
      "fabryka świata",
      "Nowy Jedwabny Szlak"
    ],
    "categories": [
      "Japonia",
      "Chiny"
    ],
    "answer": {
      "Japonia": [
        "niedobór surowców",
        "sieć Shinkansen"
      ],
      "Chiny": [
        "fabryka świata",
        "Nowy Jedwabny Szlak"
      ]
    },
    "explanation": "Oba kraje są potęgami gospodarczymi, ale mają inne uwarunkowania i strategie."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż państwa według opisanego przejścia demograficznego od niskiej do wysokiej dynamiki ludności.",
    "options": null,
    "items": [
      "Indie",
      "Japonia",
      "Chiny"
    ],
    "answer": [
      "Japonia",
      "Chiny",
      "Indie"
    ],
    "explanation": "Japonia ma społeczeństwo stare i kurczące się, Chiny szybko się starzeją, a Indie mają młodszą ludność."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Analityk porównuje kraj o bardzo wysokim PKB całkowitym, lecz znacznie niższym PKB na osobę niż Japonia. Który kraj opisuje?",
    "options": [
      "Indie",
      "Katar",
      "Bahrajn",
      "Zjednoczone Emiraty Arabskie"
    ],
    "answer": 0,
    "explanation": "Wielka populacja Indii sprawia, że wysoki PKB całkowity nie oznacza równie wysokiego PKB na mieszkańca."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz kraje z dużymi zasobami ropy nad Zatoką Perską.",
    "options": [
      "Arabia Saudyjska",
      "Iran",
      "Irak",
      "Kuwejt",
      "Japonia",
      "Indie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Państwa Zatoki Perskiej skupiają znaczną część światowych zasobów ropy."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 2015 roku szyickie plemię __________ zajęło stolicę Jemenu.",
    "options": null,
    "answer": [
      "Huti"
    ],
    "altAnswers": [
      [
        "Huti",
        "Hutiowie"
      ]
    ],
    "explanation": "Rebelianci Huti obalili urzędującego prezydenta i zajęli Sanę."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się administracja zarządzająca Strefą Gazy i zachodnim Brzegiem Jordanu?",
    "options": null,
    "answer": "Autonomia Palestyńska",
    "altAnswers": [
      "Autonomia Palestyńska",
      "Autonomia Palestynska"
    ],
    "explanation": "Struktura ta powstała jako forma palestyńskiej administracji."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie jest fundamentem demokracji: niezależne sądownictwo, wolne media, swoboda partii politycznych, propaganda państwowa.",
    "options": null,
    "answer": "propaganda państwowa",
    "explanation": "Propaganda ogranicza dostęp do obiektywnych informacji, zamiast chronić demokrację."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wyczerpywanie złóż i wahania cen surowców zagrażają gospodarkom zależnym od eksportu ropy.",
    "options": null,
    "answer": true,
    "explanation": "Dlatego część państw regionu rozwija przemysł, technologie, finanse i turystykę."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Azja, część 2",
  "icon": "🌏",
  "sectionOrder": [
    "Japonia",
    "Chiny",
    "Indie",
    "Kraje Bliskiego Wschodu"
  ],
  "sectionIcons": {
    "Japonia": "🗾",
    "Chiny": "🐉",
    "Indie": "🪷",
    "Kraje Bliskiego Wschodu": "🕌"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
