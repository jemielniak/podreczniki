// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KLA  = Klasyfikacja organizmów
//   WIR  = Wirusy
//   BAK  = Bakterie
//   PRO  = Protisty
//   GRZ  = Grzyby i porosty
//   ZNA  = Znaczenie i profilaktyka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_KLA_01",
    "section": "Klasyfikacja organizmów",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej opisuje gatunek?",
    "options": [
      "To grupa osobników podobnych do siebie, które mogą się krzyżować i wydawać płodne potomstwo",
      "To wszystkie organizmy żyjące w jednym środowisku",
      "To grupa organizmów mających identyczny wygląd",
      "To najwyższa jednostka systematyczna",
      "To grupa organizmów należących do jednego królestwa",
      "To osobniki, które zawsze żyją w kolonii"
    ],
    "answer": 0,
    "explanation": "Gatunek obejmuje podobne osobniki zdolne do krzyżowania się i wydawania płodnego potomstwa."
  },
  {
    "id": "R03_KLA_02",
    "section": "Klasyfikacja organizmów",
    "type": "fill_in",
    "prompt": "Naukowe nazwy organizmów zapisuje się w języku __________ i są one __________.",
    "options": null,
    "answer": [
      "łacińskim",
      "dwuczłonowe"
    ],
    "altAnswers": [
      [
        "łacińskim",
        "łacina",
        "po łacinie"
      ],
      [
        "dwuczłonowe",
        "dwuczęściowe"
      ]
    ],
    "explanation": "Nazwa naukowa jest łacińska i składa się z nazwy rodzaju oraz epitetu gatunkowego."
  },
  {
    "id": "R03_KLA_03",
    "section": "Klasyfikacja organizmów",
    "type": "sequence",
    "prompt": "Ułóż jednostki systematyczne zwierząt od najwyższej do najniższej.",
    "options": null,
    "items": [
      "rodzina",
      "gatunek",
      "królestwo",
      "rząd",
      "rodzaj",
      "typ",
      "gromada"
    ],
    "answer": [
      "królestwo",
      "typ",
      "gromada",
      "rząd",
      "rodzina",
      "rodzaj",
      "gatunek"
    ],
    "explanation": "W klasyfikacji zwierząt kolejność to: królestwo, typ, gromada, rząd, rodzina, rodzaj i gatunek."
  },
  {
    "id": "R03_KLA_04",
    "section": "Klasyfikacja organizmów",
    "type": "match",
    "prompt": "Połącz jednostkę systematyczną z przykładem podanym dla lisa rudego.",
    "options": null,
    "left": [
      "królestwo",
      "typ",
      "gromada",
      "rodzina",
      "gatunek"
    ],
    "right": [
      "zwierzęta",
      "strunowce",
      "ssaki",
      "psowate",
      "lis rudy"
    ],
    "answer": {
      "królestwo": "zwierzęta",
      "typ": "strunowce",
      "gromada": "ssaki",
      "rodzina": "psowate",
      "gatunek": "lis rudy"
    },
    "explanation": "Lis rudy należy do królestwa zwierząt, typu strunowców, gromady ssaków i rodziny psowatych."
  },
  {
    "id": "R03_KLA_05",
    "section": "Klasyfikacja organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie królestwa organizmów wymienione w rozdziale.",
    "options": [
      "bakterie",
      "protisty",
      "grzyby",
      "rośliny",
      "zwierzęta",
      "wirusy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r03_piec_krolestw.jpg",
    "explanation": "Do pięciu królestw zaliczono bakterie, protisty, grzyby, rośliny i zwierzęta. Wirusy nie są organizmami."
  },
  {
    "id": "R03_KLA_06",
    "section": "Klasyfikacja organizmów",
    "type": "true_false",
    "prompt": "Najwyższą jednostką systematyczną jest królestwo.",
    "options": null,
    "answer": true,
    "image": "r03_piec_krolestw.jpg",
    "explanation": "Królestwo jest najwyższą jednostką w przedstawionej hierarchii systematycznej."
  },
  {
    "id": "R03_KLA_07",
    "section": "Klasyfikacja organizmów",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest jednostką systematyczną: królestwo, rodzina, rodzaj, chloroplast, gatunek.",
    "options": null,
    "answer": "chloroplast",
    "explanation": "Chloroplast jest elementem komórki, a pozostałe pojęcia są jednostkami systematycznymi."
  },
  {
    "id": "R03_KLA_08",
    "section": "Klasyfikacja organizmów",
    "type": "scenario",
    "prompt": "Uczeń korzysta z klucza do oznaczania drzew. Liść jest szeroki i złożony, a wszystkie listki wyrastają z tego samego miejsca. Jakie drzewo wskazuje klucz?",
    "options": [
      "kasztanowiec",
      "jesion",
      "brzoza",
      "dąb",
      "sosna",
      "modrzew"
    ],
    "answer": 0,
    "image": "r03_klucz_liscie_drzew.jpg",
    "explanation": "W kluczu liść złożony, którego wszystkie listki wyrastają z jednego miejsca, prowadzi do kasztanowca."
  },
  {
    "id": "R03_KLA_09",
    "section": "Klasyfikacja organizmów",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do królestwa roślin albo zwierząt.",
    "options": null,
    "items": [
      "komórki ze ścianą komórkową",
      "komórki z chloroplastami",
      "organizmy samożywne",
      "komórki bez ściany komórkowej",
      "komórki bez chloroplastów",
      "organizmy cudzożywne"
    ],
    "categories": [
      "rośliny",
      "zwierzęta"
    ],
    "answer": {
      "rośliny": [
        "komórki ze ścianą komórkową",
        "komórki z chloroplastami",
        "organizmy samożywne"
      ],
      "zwierzęta": [
        "komórki bez ściany komórkowej",
        "komórki bez chloroplastów",
        "organizmy cudzożywne"
      ]
    },
    "explanation": "Rośliny mają ścianę komórkową i chloroplasty oraz są samożywne, a zwierzęta nie mają tych struktur i są cudzożywne."
  },
  {
    "id": "R03_KLA_10",
    "section": "Klasyfikacja organizmów",
    "type": "riddle",
    "prompt": "Dział biologii zajmujący się grupowaniem i klasyfikowaniem organizmów to...",
    "options": null,
    "answer": "systematyka",
    "altAnswers": [
      "systematyka"
    ],
    "explanation": "Systematyka porządkuje organizmy i przypisuje je do jednostek systematycznych."
  },
  {
    "id": "R03_WIR_01",
    "section": "Wirusy",
    "type": "single_choice",
    "prompt": "Jak nazywa się epidemia o szczególnie dużych rozmiarach, obejmująca nawet kontynenty?",
    "options": [
      "pandemia",
      "profilaktyka",
      "choroba",
      "zakażenie",
      "kolonia",
      "systematyka"
    ],
    "answer": 0,
    "explanation": "Pandemia to epidemia rozprzestrzeniona na bardzo dużym obszarze, nawet na kilku kontynentach."
  },
  {
    "id": "R03_WIR_02",
    "section": "Wirusy",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wyjaśniające, dlaczego wirusy nie są zaliczane do organizmów.",
    "options": [
      "nie mają budowy komórkowej",
      "nie wykonują samodzielnie czynności życiowych",
      "mają materiał genetyczny",
      "są zbudowane z białek",
      "mogą wnikać do komórek"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "O wykluczeniu wirusów ze świata organizmów decyduje brak budowy komórkowej i brak samodzielnych czynności życiowych."
  },
  {
    "id": "R03_WIR_03",
    "section": "Wirusy",
    "type": "match",
    "prompt": "Połącz składnik lub miejsce z jego rolą w funkcjonowaniu wirusa.",
    "options": null,
    "left": [
      "otoczka białkowa",
      "DNA lub RNA",
      "komórka gospodarza"
    ],
    "right": [
      "zewnętrzna część wirusa",
      "materiał genetyczny",
      "miejsce namnażania wirusa"
    ],
    "answer": {
      "otoczka białkowa": "zewnętrzna część wirusa",
      "DNA lub RNA": "materiał genetyczny",
      "komórka gospodarza": "miejsce namnażania wirusa"
    },
    "image": "r03_budowa_wirusa.jpg",
    "explanation": "Wirus ma otoczkę białkową i materiał genetyczny, a namnaża się dopiero po wniknięciu do komórki gospodarza."
  },
  {
    "id": "R03_WIR_04",
    "section": "Wirusy",
    "type": "true_false",
    "prompt": "Wirus ma błonę komórkową, cytozol i jądro komórkowe.",
    "options": null,
    "answer": false,
    "image": "r03_budowa_wirusa.jpg",
    "explanation": "Wirus nie ma budowy komórkowej. W rozdziale przedstawiono go jako otoczkę białkową z DNA lub RNA."
  },
  {
    "id": "R03_WIR_05",
    "section": "Wirusy",
    "type": "sequence",
    "prompt": "Ułóż etapy namnażania wirusa w komórce gospodarza.",
    "options": null,
    "items": [
      "wirusy opuszczają komórkę",
      "wirus wnika do komórki",
      "zwiększa się liczba wirusów w komórce",
      "wirus przejmuje kontrolę nad procesami komórki"
    ],
    "answer": [
      "wirus wnika do komórki",
      "wirus przejmuje kontrolę nad procesami komórki",
      "zwiększa się liczba wirusów w komórce",
      "wirusy opuszczają komórkę"
    ],
    "explanation": "Najpierw wirus wnika i przejmuje kontrolę, następnie namnaża się, a nowe cząstki opuszczają komórkę."
  },
  {
    "id": "R03_WIR_06",
    "section": "Wirusy",
    "type": "fill_in",
    "prompt": "Wirusy są zbudowane z __________ oraz materiału genetycznego, którym jest __________ lub RNA.",
    "options": null,
    "answer": [
      "otoczki białkowej",
      "DNA"
    ],
    "altAnswers": [
      [
        "otoczki białkowej",
        "białkowej otoczki"
      ],
      [
        "DNA"
      ]
    ],
    "explanation": "Dwa główne elementy wirusa to otoczka białkowa oraz materiał genetyczny w postaci DNA albo RNA."
  },
  {
    "id": "R03_WIR_07",
    "section": "Wirusy",
    "type": "scenario",
    "prompt": "Zakażona osoba kaszle w zatłoczonym pomieszczeniu. Kropelki zawierające wirusy trafiają do dróg oddechowych innych osób. Jaka droga zakażenia została opisana?",
    "options": [
      "droga kropelkowa",
      "kontakt z krwią",
      "droga moczowo-płciowa",
      "ciąża i poród",
      "droga pokarmowa",
      "ugryzienie przez kleszcza"
    ],
    "answer": 0,
    "image": "r03_drogi_zakazenia_wirusami.jpg",
    "explanation": "Kaszel i kichanie wyrzucają kropelki z wirusami, dlatego jest to droga kropelkowa."
  },
  {
    "id": "R03_WIR_08",
    "section": "Wirusy",
    "type": "sort",
    "prompt": "Przyporządkuj sytuacje do dróg rozprzestrzeniania się wirusów.",
    "options": null,
    "items": [
      "kaszel zakażonej osoby",
      "kontakt z zakażoną krwią",
      "kontakt seksualny z osobą zakażoną",
      "przekazanie wirusa z matki na dziecko"
    ],
    "categories": [
      "droga kropelkowa",
      "krew",
      "droga moczowo-płciowa",
      "ciąża i poród"
    ],
    "answer": {
      "droga kropelkowa": [
        "kaszel zakażonej osoby"
      ],
      "krew": [
        "kontakt z zakażoną krwią"
      ],
      "droga moczowo-płciowa": [
        "kontakt seksualny z osobą zakażoną"
      ],
      "ciąża i poród": [
        "przekazanie wirusa z matki na dziecko"
      ]
    },
    "image": "r03_drogi_zakazenia_wirusami.jpg",
    "explanation": "Rozdział przedstawia cztery drogi: kropelkową, przez krew, moczowo-płciową oraz z matki na dziecko podczas ciąży lub porodu."
  },
  {
    "id": "R03_WIR_09",
    "section": "Wirusy",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, która nie jest chorobą wirusową: grypa, odra, świnka, salmonelloza, różyczka.",
    "options": null,
    "answer": "salmonelloza",
    "explanation": "Salmonellozę wywołują bakterie, a grypa, odra, świnka i różyczka są chorobami wirusowymi."
  },
  {
    "id": "R03_WIR_10",
    "section": "Wirusy",
    "type": "riddle",
    "prompt": "Zapobieganie powstaniu i rozwojowi choroby to...",
    "options": null,
    "answer": "profilaktyka",
    "altAnswers": [
      "profilaktyka"
    ],
    "explanation": "Profilaktyka obejmuje działania zmniejszające ryzyko zachorowania, na przykład szczepienia i higienę."
  },
  {
    "id": "R03_BAK_01",
    "section": "Bakterie",
    "type": "single_choice",
    "prompt": "Jaki zakres wielkości bakterii podano w rozdziale?",
    "options": [
      "0,5-10 mikrometrów",
      "80-120 nanometrów",
      "10-100 mikrometrów",
      "1-2 milimetry",
      "7-8 milimetrów",
      "50-100 milimetrów"
    ],
    "answer": 0,
    "explanation": "Bakterie mają zwykle około 0,5-10 mikrometrów, dlatego obserwuje się je za pomocą mikroskopu."
  },
  {
    "id": "R03_BAK_02",
    "section": "Bakterie",
    "type": "match",
    "prompt": "Połącz formę bakterii z przykładową nazwą.",
    "options": null,
    "left": [
      "wydłużone",
      "kuliste",
      "skręcone"
    ],
    "right": [
      "pałeczka",
      "gronkowiec",
      "krętek"
    ],
    "answer": {
      "wydłużone": "pałeczka",
      "kuliste": "gronkowiec",
      "skręcone": "krętek"
    },
    "image": "r03_formy_bakterii.jpg",
    "explanation": "Pałeczki są wydłużone, gronkowce kuliste, a krętki mają formę skręconą."
  },
  {
    "id": "R03_BAK_03",
    "section": "Bakterie",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę, która nie określa formy bakterii: pałeczka, dwoinka, krętek, pantofelek, śrubowiec.",
    "options": null,
    "answer": "pantofelek",
    "image": "r03_formy_bakterii.jpg",
    "explanation": "Pantofelek jest protistem zwierzęcym. Pozostałe nazwy odnoszą się do form bakterii."
  },
  {
    "id": "R03_BAK_04",
    "section": "Bakterie",
    "type": "sequence",
    "prompt": "Ułóż etapy podziału komórki bakterii.",
    "options": null,
    "items": [
      "powstają dwie komórki potomne",
      "komórka macierzysta",
      "komórka jest w trakcie podziału"
    ],
    "answer": [
      "komórka macierzysta",
      "komórka jest w trakcie podziału",
      "powstają dwie komórki potomne"
    ],
    "image": "r03_podzial_bakterii.jpg",
    "explanation": "Z jednej komórki macierzystej podczas podziału powstają dwie komórki potomne."
  },
  {
    "id": "R03_BAK_05",
    "section": "Bakterie",
    "type": "true_false",
    "prompt": "W odpowiednich warunkach podział komórki bakterii może następować co 20-30 minut.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że w sprzyjających warunkach bakterie mogą dzielić się co 20-30 minut."
  },
  {
    "id": "R03_BAK_06",
    "section": "Bakterie",
    "type": "multi_select",
    "prompt": "Zaznacz źródła pokarmu bakterii cudzożywnych opisane w rozdziale.",
    "options": [
      "martwe szczątki organizmów",
      "związki uzyskiwane dzięki współpracy z innymi organizmami",
      "tkanki innych organizmów",
      "światło słoneczne jako jedyne źródło pokarmu",
      "chloroplasty"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Bakterie cudzożywne mogą korzystać z martwych szczątków, współpracy z organizmami lub ich tkanek."
  },
  {
    "id": "R03_BAK_07",
    "section": "Bakterie",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do bakterii tlenowych i beztlenowych.",
    "options": null,
    "items": [
      "wykorzystują tlen w oddychaniu",
      "żyją w środowisku zawierającym tlen",
      "oddychają bez udziału tlenu",
      "mogą uzyskiwać energię w fermentacji"
    ],
    "categories": [
      "bakterie tlenowe",
      "bakterie beztlenowe"
    ],
    "answer": {
      "bakterie tlenowe": [
        "wykorzystują tlen w oddychaniu",
        "żyją w środowisku zawierającym tlen"
      ],
      "bakterie beztlenowe": [
        "oddychają bez udziału tlenu",
        "mogą uzyskiwać energię w fermentacji"
      ]
    },
    "explanation": "Bakterie tlenowe wykorzystują tlen, a beztlenowe uzyskują energię bez niego, na przykład w fermentacji."
  },
  {
    "id": "R03_BAK_08",
    "section": "Bakterie",
    "type": "fill_in",
    "prompt": "Sinice są bakteriami samożywnymi, ponieważ mają __________ i przeprowadzają __________.",
    "options": null,
    "answer": [
      "chlorofil",
      "fotosyntezę"
    ],
    "altAnswers": [
      [
        "chlorofil"
      ],
      [
        "fotosyntezę",
        "fotosynteza"
      ]
    ],
    "explanation": "Chlorofil umożliwia sinicom przeprowadzanie fotosyntezy i wytwarzanie związków organicznych."
  },
  {
    "id": "R03_BAK_09",
    "section": "Bakterie",
    "type": "scenario",
    "prompt": "Po podziale dwie komórki potomne nie rozdzieliły się i pozostały połączone. Co może z czasem powstać z takich połączonych bakterii?",
    "options": [
      "kolonia bakterii",
      "owocnik",
      "porost",
      "wirus",
      "tkanka roślinna",
      "zarodnia"
    ],
    "answer": 0,
    "explanation": "Komórki potomne mogą pozostać połączone, a dalsze podziały prowadzą do powstania kolonii bakterii."
  },
  {
    "id": "R03_BAK_10",
    "section": "Bakterie",
    "type": "riddle",
    "prompt": "Grupy połączonych ze sobą osobników bakterii to...",
    "options": null,
    "answer": "kolonie",
    "altAnswers": [
      "kolonie",
      "kolonie bakterii",
      "kolonia"
    ],
    "explanation": "Niektóre bakterie tworzą kolonie, gdy komórki potomne po podziale pozostają połączone."
  },
  {
    "id": "R03_PRO_01",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Jaka cecha jest wspólna wszystkim protistom?",
    "options": [
      "ich komórki mają jądro komórkowe",
      "wszystkie mają chloroplasty",
      "wszystkie są wielokomórkowe",
      "wszystkie są samożywne",
      "wszystkie mają ścianę komórkową",
      "wszystkie żyją w koloniach"
    ],
    "answer": 0,
    "image": "r03_grupy_protistow.jpg",
    "explanation": "Protisty są bardzo zróżnicowane, ale wszystkie mają komórki z jądrem komórkowym."
  },
  {
    "id": "R03_PRO_02",
    "section": "Protisty",
    "type": "match",
    "prompt": "Połącz grupę protistów z charakterystyczną cechą budowy.",
    "options": null,
    "left": [
      "protisty zwierzęce",
      "protisty roślinopodobne",
      "protisty grzybopodobne"
    ],
    "right": [
      "brak ściany komórkowej i chloroplastów",
      "chloroplasty i zwykle ściana komórkowa",
      "ściana komórkowa bez chloroplastów"
    ],
    "answer": {
      "protisty zwierzęce": "brak ściany komórkowej i chloroplastów",
      "protisty roślinopodobne": "chloroplasty i zwykle ściana komórkowa",
      "protisty grzybopodobne": "ściana komórkowa bez chloroplastów"
    },
    "image": "r03_grupy_protistow.jpg",
    "explanation": "Budowa komórek tych grup przypomina odpowiednio komórki zwierząt, roślin i grzybów."
  },
  {
    "id": "R03_PRO_03",
    "section": "Protisty",
    "type": "multi_select",
    "prompt": "Zaznacz protisty roślinopodobne wymienione w rozdziale.",
    "options": [
      "euglena zielona",
      "morszczyn pęcherzykowaty",
      "okrzemka",
      "pantofelek",
      "zarodziec malarii",
      "kędziorek mylny"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Euglena, morszczyn i okrzemka należą do protistów roślinopodobnych."
  },
  {
    "id": "R03_PRO_04",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Wszystkie protisty są organizmami jednokomórkowymi.",
    "options": null,
    "answer": false,
    "explanation": "Protisty zwierzęce są jednokomórkowe, ale wśród roślinopodobnych i grzybopodobnych występują także formy wielokomórkowe."
  },
  {
    "id": "R03_PRO_05",
    "section": "Protisty",
    "type": "scenario",
    "prompt": "Euglena znajduje się w dobrze oświetlonej wodzie. Ma dostęp do wystarczającej ilości światła. W jaki sposób będzie się odżywiać?",
    "options": [
      "samożywnie przez fotosyntezę",
      "wyłącznie jako pasożyt",
      "przez rozkład martwych szczątków",
      "przez połykanie bakterii",
      "wyłącznie dzięki fermentacji",
      "nie będzie się odżywiać"
    ],
    "answer": 0,
    "image": "r03_pantofelek_euglena.jpg",
    "explanation": "Przy dostępie do światła euglena przeprowadza fotosyntezę i odżywia się samożywnie."
  },
  {
    "id": "R03_PRO_06",
    "section": "Protisty",
    "type": "odd_one_out",
    "prompt": "Wskaż protista, który nie należy do protistów zwierzęcych: pantofelek, pełzak, zarodziec malarii, morszczyn pęcherzykowaty.",
    "options": null,
    "answer": "morszczyn pęcherzykowaty",
    "image": "r03_pantofelek_euglena.jpg",
    "explanation": "Morszczyn jest protistem roślinopodobnym, a pantofelek, pełzak i zarodziec malarii są protistami zwierzęcymi."
  },
  {
    "id": "R03_PRO_07",
    "section": "Protisty",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do sposobu oddychania protistów.",
    "options": null,
    "items": [
      "pantofelek w środowisku zawierającym tlen",
      "zarodziec malarii żyjący w organizmie żywiciela"
    ],
    "categories": [
      "oddychanie tlenowe",
      "oddychanie beztlenowe"
    ],
    "answer": {
      "oddychanie tlenowe": [
        "pantofelek w środowisku zawierającym tlen"
      ],
      "oddychanie beztlenowe": [
        "zarodziec malarii żyjący w organizmie żywiciela"
      ]
    },
    "explanation": "Pantofelek oddycha tlenowo, a pasożytniczy zarodziec malarii może oddychać beztlenowo."
  },
  {
    "id": "R03_PRO_08",
    "section": "Protisty",
    "type": "sequence",
    "prompt": "Ułóż etapy bezpłciowego rozmnażania jednokomórkowego protista przez podział.",
    "options": null,
    "items": [
      "powstają dwie komórki potomne",
      "komórka macierzysta",
      "komórka jest w trakcie podziału"
    ],
    "answer": [
      "komórka macierzysta",
      "komórka jest w trakcie podziału",
      "powstają dwie komórki potomne"
    ],
    "explanation": "Jednokomórkowy protist dzieli się podobnie jak bakteria: z komórki macierzystej powstają dwie potomne."
  },
  {
    "id": "R03_PRO_09",
    "section": "Protisty",
    "type": "fill_in",
    "prompt": "Pantofelek porusza się dzięki __________, a euglena dzięki __________.",
    "options": null,
    "answer": [
      "rzęskom",
      "wici"
    ],
    "altAnswers": [
      [
        "rzęskom",
        "rzęski"
      ],
      [
        "wici",
        "wić"
      ]
    ],
    "explanation": "Liczne rzęski przesuwają pantofelka w wodzie, natomiast euglena porusza się za pomocą wici."
  },
  {
    "id": "R03_PRO_10",
    "section": "Protisty",
    "type": "riddle",
    "prompt": "Bezpłciowe rozmnażanie organizmu wielokomórkowego przez podział ciała na części to...",
    "options": null,
    "answer": "fragmentacja ciała",
    "altAnswers": [
      "fragmentacja ciała",
      "fragmentacja"
    ],
    "explanation": "Oderwany fragment ciała może rozwinąć się w nowego osobnika; tak rozmnaża się między innymi morszczyn."
  },
  {
    "id": "R03_GRZ_01",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Z jakiej substancji jest zbudowana ściana komórkowa grzybów?",
    "options": [
      "z chityny",
      "z chlorofilu",
      "z DNA",
      "z białka wirusowego",
      "z wapnia",
      "z hemoglobiny"
    ],
    "answer": 0,
    "explanation": "Ściana komórkowa grzybów jest zbudowana z chityny."
  },
  {
    "id": "R03_GRZ_02",
    "section": "Grzyby i porosty",
    "type": "multi_select",
    "prompt": "Zaznacz cechy charakterystyczne grzybów.",
    "options": [
      "mogą być jedno- lub wielokomórkowe",
      "są cudzożywne",
      "mają jądro komórkowe",
      "mają ścianę komórkową z chityny",
      "nie mają chloroplastów",
      "zawsze są samożywne"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Grzyby są jądrowe, cudzożywne, mogą być jedno- lub wielokomórkowe, mają chitynową ścianę i nie mają chloroplastów."
  },
  {
    "id": "R03_GRZ_03",
    "section": "Grzyby i porosty",
    "type": "true_false",
    "prompt": "Komórki grzybów mają chloroplasty i dzięki nim przeprowadzają fotosyntezę.",
    "options": null,
    "answer": false,
    "explanation": "Grzyby nie mają chloroplastów i odżywiają się cudzożywnie."
  },
  {
    "id": "R03_GRZ_04",
    "section": "Grzyby i porosty",
    "type": "match",
    "prompt": "Połącz część grzyba z opisem.",
    "options": null,
    "left": [
      "strzępka",
      "grzybnia",
      "owocnik",
      "zarodnia"
    ],
    "right": [
      "długa nitka budująca ciało grzyba",
      "sieć strzępek",
      "część z ciasno ułożonych strzępek",
      "miejsce powstawania zarodników"
    ],
    "answer": {
      "strzępka": "długa nitka budująca ciało grzyba",
      "grzybnia": "sieć strzępek",
      "owocnik": "część z ciasno ułożonych strzępek",
      "zarodnia": "miejsce powstawania zarodników"
    },
    "image": "r03_budowa_grzyba_kapeluszowego.jpg",
    "explanation": "Ciało grzyba tworzą strzępki, ich sieć to grzybnia, a w owocniku strzępki są ciasno ułożone. Zarodniki powstają w zarodniach."
  },
  {
    "id": "R03_GRZ_05",
    "section": "Grzyby i porosty",
    "type": "scenario",
    "prompt": "Na kromce chleba pojawiła się niewielka plama pleśni. Dlaczego należy wyrzucić cały produkt, a nie tylko odkroić widoczną plamę?",
    "options": [
      "strzępki pleśni mogą wrastać w głąb produktu i wytwarzać toksyny",
      "pleśń zamienia chleb w wirusa",
      "chleb traci wszystkie witaminy",
      "zarodniki stają się bakteriami",
      "pleśń usuwa z chleba wodę",
      "grzyb tworzy chloroplasty"
    ],
    "answer": 0,
    "explanation": "Strzępki pleśni przerastają produkt i mogą wytwarzać niebezpieczne toksyny, więc odkrojenie widocznej części nie wystarcza."
  },
  {
    "id": "R03_GRZ_06",
    "section": "Grzyby i porosty",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm, który nie należy do grzybów: pieczarka, borowik, drożdże piekarskie, euglena zielona, pleśniak.",
    "options": null,
    "answer": "euglena zielona",
    "explanation": "Euglena jest protistem roślinopodobnym, a pozostałe organizmy należą do grzybów."
  },
  {
    "id": "R03_GRZ_07",
    "section": "Grzyby i porosty",
    "type": "sort",
    "prompt": "Przyporządkuj korzyści w poroście do glonu albo grzyba.",
    "options": null,
    "items": [
      "przeprowadza fotosyntezę",
      "przekazuje część wytworzonego cukru",
      "dostarcza wodę i sole mineralne",
      "chroni przed wyschnięciem"
    ],
    "categories": [
      "glon",
      "grzyb"
    ],
    "answer": {
      "glon": [
        "przeprowadza fotosyntezę",
        "przekazuje część wytworzonego cukru"
      ],
      "grzyb": [
        "dostarcza wodę i sole mineralne",
        "chroni przed wyschnięciem"
      ]
    },
    "image": "r03_porost_wspolpraca.jpg",
    "explanation": "Glon wytwarza cukier w fotosyntezie, a grzyb dostarcza wodę i sole mineralne oraz chroni glon przed wyschnięciem."
  },
  {
    "id": "R03_GRZ_08",
    "section": "Grzyby i porosty",
    "type": "fill_in",
    "prompt": "Porost powstaje dzięki ścisłej współpracy __________ i __________.",
    "options": null,
    "answer": [
      "grzyba",
      "glonu"
    ],
    "altAnswers": [
      [
        "grzyba",
        "grzyb"
      ],
      [
        "glonu",
        "glon",
        "protista roślinopodobnego"
      ]
    ],
    "image": "r03_porost_wspolpraca.jpg",
    "explanation": "Porost tworzą współpracujące ze sobą komórki grzyba i glonu."
  },
  {
    "id": "R03_GRZ_09",
    "section": "Grzyby i porosty",
    "type": "sequence",
    "prompt": "Ułóż struktury grzyba od najprostszej do najbardziej złożonej.",
    "options": null,
    "items": [
      "owocnik",
      "strzępka",
      "grzybnia",
      "komórka grzyba"
    ],
    "answer": [
      "komórka grzyba",
      "strzępka",
      "grzybnia",
      "owocnik"
    ],
    "image": "r03_budowa_grzyba_kapeluszowego.jpg",
    "explanation": "Komórki tworzą nitkowate strzępki, strzępki budują grzybnię, a ciasno ułożone strzępki tworzą owocnik."
  },
  {
    "id": "R03_GRZ_10",
    "section": "Grzyby i porosty",
    "type": "riddle",
    "prompt": "Część grzyba kapeluszowego wystająca zwykle nad powierzchnię ziemi to...",
    "options": null,
    "answer": "owocnik",
    "altAnswers": [
      "owocnik"
    ],
    "explanation": "Owocnik jest zbudowany z ciasno ułożonych strzępek i zwykle wyrasta nad powierzchnię ziemi."
  },
  {
    "id": "R03_ZNA_01",
    "section": "Znaczenie i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz produkty spożywcze, do których wytwarzania wykorzystuje się bakterie.",
    "options": [
      "jogurt",
      "kefir",
      "kapusta kiszona",
      "ogórki kiszone",
      "wino",
      "surowe mięso"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Bakterie wykorzystuje się do produkcji kiszonek, produktów mlecznych oraz alkoholu, w tym wina."
  },
  {
    "id": "R03_ZNA_02",
    "section": "Znaczenie i profilaktyka",
    "type": "single_choice",
    "prompt": "Jakie witaminy wytwarzają bakterie jelitowe człowieka według rozdziału?",
    "options": [
      "witaminy B i K",
      "witaminy A i D",
      "witaminy C i E",
      "wyłącznie witaminę C",
      "wyłącznie witaminę A",
      "żadnych witamin"
    ],
    "answer": 0,
    "explanation": "Bakterie jelitowe człowieka wytwarzają witaminy z grupy B oraz witaminę K."
  },
  {
    "id": "R03_ZNA_03",
    "section": "Znaczenie i profilaktyka",
    "type": "sort",
    "prompt": "Przyporządkuj zastosowania do bakterii, grzybów lub protistów.",
    "options": null,
    "items": [
      "produkcja kiszonek",
      "produkcja leków i szczepionek",
      "pieczenie chleba i ciast",
      "produkcja antybiotyków",
      "składniki kremów i maseczek",
      "składniki maści na oparzenia"
    ],
    "categories": [
      "bakterie",
      "grzyby",
      "protisty"
    ],
    "answer": {
      "bakterie": [
        "produkcja kiszonek",
        "produkcja leków i szczepionek"
      ],
      "grzyby": [
        "pieczenie chleba i ciast",
        "produkcja antybiotyków"
      ],
      "protisty": [
        "składniki kremów i maseczek",
        "składniki maści na oparzenia"
      ]
    },
    "explanation": "Bakterie służą między innymi do kiszenia i produkcji leków, grzyby do wypieków i antybiotyków, a protisty do kosmetyków i maści."
  },
  {
    "id": "R03_ZNA_04",
    "section": "Znaczenie i profilaktyka",
    "type": "scenario",
    "prompt": "Na korze drzew w badanym miejscu występuje duża obfitość i różnorodność rozrośniętych porostów listkowatych i krzaczkowatych. Co można wnioskować o powietrzu?",
    "options": [
      "jest czyste lub tylko minimalnie zanieczyszczone",
      "jest silnie zanieczyszczone",
      "nie zawiera tlenu",
      "zawiera wyłącznie parę wodną",
      "jest skażone bakteriami",
      "nie da się wyciągnąć żadnego wniosku"
    ],
    "answer": 0,
    "image": "r03_skala_porostowa.jpg",
    "explanation": "Im lepsza jakość powietrza, tym porosty są bardziej rozrośnięte, różnorodne i częstsze."
  },
  {
    "id": "R03_ZNA_05",
    "section": "Znaczenie i profilaktyka",
    "type": "match",
    "prompt": "Połącz chorobę bakteryjną z czynnikiem lub drogą zakażenia.",
    "options": null,
    "left": [
      "gruźlica",
      "salmonelloza",
      "borelioza",
      "tężec"
    ],
    "right": [
      "prątki gruźlicy i droga kropelkowa",
      "pałeczki salmonelli i zakażona żywność",
      "krętki borelii i ukąszenie kleszcza",
      "laseczki tężca i zabrudzona rana"
    ],
    "answer": {
      "gruźlica": "prątki gruźlicy i droga kropelkowa",
      "salmonelloza": "pałeczki salmonelli i zakażona żywność",
      "borelioza": "krętki borelii i ukąszenie kleszcza",
      "tężec": "laseczki tężca i zabrudzona rana"
    },
    "explanation": "Każda z tych chorób ma inny czynnik i typową drogę zakażenia opisane w rozdziale."
  },
  {
    "id": "R03_ZNA_06",
    "section": "Znaczenie i profilaktyka",
    "type": "true_false",
    "prompt": "Toksoplazmozą można zarazić się wyłącznie przez ukąszenie komara widliszka.",
    "options": null,
    "answer": false,
    "explanation": "Komar widliszek przenosi malarię. Toksoplazmoza może być związana z niedogotowanym mięsem, nieumytymi warzywami i owocami lub kontaktem z odchodami zakażonego kota."
  },
  {
    "id": "R03_ZNA_07",
    "section": "Znaczenie i profilaktyka",
    "type": "fill_in",
    "prompt": "Malarię wywołują __________ malarii, a zakażenie może nastąpić po ukąszeniu przez komara __________.",
    "options": null,
    "answer": [
      "zarodźce",
      "widliszka"
    ],
    "altAnswers": [
      [
        "zarodźce",
        "zarodziec"
      ],
      [
        "widliszka",
        "widliszek",
        "komara widliszka"
      ]
    ],
    "explanation": "Malarię wywołują zarodźce, a przenosi je zarażony komar widliszek."
  },
  {
    "id": "R03_ZNA_08",
    "section": "Znaczenie i profilaktyka",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę wywoływaną przez protista: gruźlica, salmonelloza, borelioza, malaria, tężec.",
    "options": null,
    "answer": "malaria",
    "explanation": "Malarię wywołują zarodźce należące do protistów. Pozostałe choroby z listy wywołują bakterie."
  },
  {
    "id": "R03_ZNA_09",
    "section": "Znaczenie i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz grzyby jadalne pokazane w rozdziale.",
    "options": [
      "koźlarz czerwony",
      "podgrzybek brunatny",
      "pieprznik jadalny",
      "borowik szlachetny",
      "muchomor sromotnikowy",
      "goryczak żółciowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_grzyby_jadalne_trujace.jpg",
    "explanation": "Koźlarz czerwony, podgrzybek brunatny, pieprznik jadalny i borowik szlachetny zostały przedstawione jako jadalne."
  },
  {
    "id": "R03_ZNA_10",
    "section": "Znaczenie i profilaktyka",
    "type": "single_choice",
    "prompt": "Który grzyb został przedstawiony w rozdziale jako trujący?",
    "options": [
      "muchomor sromotnikowy",
      "borowik szlachetny",
      "podgrzybek brunatny",
      "pieprznik jadalny",
      "koźlarz czerwony",
      "maślak zwyczajny"
    ],
    "answer": 0,
    "image": "r03_grzyby_jadalne_trujace.jpg",
    "explanation": "Muchomor sromotnikowy znajduje się w grupie grzybów trujących."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W nazwie Canis familiaris L. co oznacza skrót L.?",
    "options": [
      "Karola Linneusza, który opisał i nazwał gatunek",
      "łacińską nazwę królestwa",
      "liczbę osobników w gatunku",
      "nazwę rodziny psowatych",
      "miejsce odkrycia gatunku",
      "epitet gatunkowy"
    ],
    "answer": 0,
    "explanation": "Skrót nazwiska badacza może być podany po nazwie gatunkowej; L. oznacza Karola Linneusza."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż jednostki systematyczne roślin od najwyższej do najniższej.",
    "options": null,
    "items": [
      "rodzaj",
      "gromada",
      "gatunek",
      "klasa",
      "królestwo",
      "rodzina",
      "rząd"
    ],
    "answer": [
      "królestwo",
      "gromada",
      "klasa",
      "rząd",
      "rodzina",
      "rodzaj",
      "gatunek"
    ],
    "explanation": "W klasyfikacji roślin po królestwie występują gromada i klasa, a następnie rząd, rodzina, rodzaj i gatunek."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz królestwo z pełnym zestawem cech przedstawionym w rozdziale.",
    "options": null,
    "left": [
      "bakterie",
      "protisty",
      "grzyby",
      "rośliny",
      "zwierzęta"
    ],
    "right": [
      "bez jądra; jednokomórkowe; samożywne lub cudzożywne",
      "z jądrem; jedno- lub wielokomórkowe; samożywne lub cudzożywne",
      "z jądrem i ścianą; bez chloroplastów; cudzożywne",
      "z jądrem, ścianą i chloroplastami; wielokomórkowe; samożywne",
      "z jądrem; bez ściany i chloroplastów; wielokomórkowe; cudzożywne"
    ],
    "answer": {
      "bakterie": "bez jądra; jednokomórkowe; samożywne lub cudzożywne",
      "protisty": "z jądrem; jedno- lub wielokomórkowe; samożywne lub cudzożywne",
      "grzyby": "z jądrem i ścianą; bez chloroplastów; cudzożywne",
      "rośliny": "z jądrem, ścianą i chloroplastami; wielokomórkowe; samożywne",
      "zwierzęta": "z jądrem; bez ściany i chloroplastów; wielokomórkowe; cudzożywne"
    },
    "image": "r03_piec_krolestw.jpg",
    "explanation": "Zestawienie królestw różnicuje organizmy według budowy komórki, liczby komórek i sposobu odżywiania."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W kluczu do oznaczania drzew uczeń wybrał wąskie liście w kształcie igieł, wyrastające pojedynczo z gałązki, a następnie igły tępo zakończone. Do jakiego drzewa prowadzi klucz?",
    "options": [
      "jodła",
      "świerk",
      "sosna",
      "modrzew",
      "brzoza",
      "jesion"
    ],
    "answer": 0,
    "image": "r03_klucz_liscie_drzew.jpg",
    "explanation": "Przy igłach wyrastających pojedynczo klucz rozróżnia świerk o igłach ostrych i jodłę o igłach tępo zakończonych."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Jeden mikrometr to __________ milimetra, a jeden nanometr to __________ milimetra.",
    "options": null,
    "answer": [
      "0,001",
      "0,000001"
    ],
    "altAnswers": [
      [
        "0,001",
        "0.001"
      ],
      [
        "0,000001",
        "0.000001"
      ]
    ],
    "explanation": "W rozdziale podano: 1 mikrometr = 0,001 mm, a 1 nanometr = 0,000001 mm."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz chorobę z właściwym działaniem profilaktycznym.",
    "options": null,
    "left": [
      "salmonelloza",
      "borelioza",
      "tężec",
      "toksoplazmoza",
      "malaria"
    ],
    "right": [
      "unikać surowych jaj i niedogotowanego mięsa",
      "stosować środki odstraszające kleszcze",
      "dezynfekować rany i przyjmować szczepienia",
      "myć warzywa i zakładać rękawiczki przy kuwecie kota",
      "stosować środki odstraszające komary"
    ],
    "answer": {
      "salmonelloza": "unikać surowych jaj i niedogotowanego mięsa",
      "borelioza": "stosować środki odstraszające kleszcze",
      "tężec": "dezynfekować rany i przyjmować szczepienia",
      "toksoplazmoza": "myć warzywa i zakładać rękawiczki przy kuwecie kota",
      "malaria": "stosować środki odstraszające komary"
    },
    "explanation": "Profilaktyka wynika z drogi zakażenia każdej choroby: żywność, kleszcze, zabrudzona rana, odchody kota lub komary."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz drogi rozprzestrzeniania się wirusów, przy których w rozdziale jako przykład podano AIDS.",
    "options": [
      "ciąża i poród",
      "droga moczowo-płciowa",
      "kontakt z krwią",
      "droga kropelkowa",
      "ugryzienie przez kleszcza",
      "droga pokarmowa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_drogi_zakazenia_wirusami.jpg",
    "explanation": "AIDS podano jako przykład zakażenia z matki na dziecko, drogą moczowo-płciową oraz przez kontakt z krwią."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wirusy mają cechy wspólne z organizmami, ponieważ zawierają materiał genetyczny oraz są zbudowane z białek i kwasów nukleinowych.",
    "options": null,
    "answer": true,
    "explanation": "Choć wirusy nie są organizmami, mają DNA lub RNA i są zbudowane z białek oraz kwasów nukleinowych."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy komórki do trzech grup protistów.",
    "options": null,
    "items": [
      "brak ściany komórkowej",
      "brak chloroplastów u wszystkich przedstawicieli",
      "chloroplasty",
      "zwykle ściana komórkowa",
      "ściana komórkowa",
      "brak chloroplastów"
    ],
    "categories": [
      "protisty zwierzęce",
      "protisty roślinopodobne",
      "protisty grzybopodobne"
    ],
    "answer": {
      "protisty zwierzęce": [
        "brak ściany komórkowej",
        "brak chloroplastów u wszystkich przedstawicieli"
      ],
      "protisty roślinopodobne": [
        "chloroplasty",
        "zwykle ściana komórkowa"
      ],
      "protisty grzybopodobne": [
        "ściana komórkowa",
        "brak chloroplastów"
      ]
    },
    "image": "r03_grupy_protistow.jpg",
    "explanation": "Protisty zwierzęce nie mają ściany ani chloroplastów, roślinopodobne mają chloroplasty i zwykle ścianę, a grzybopodobne mają ścianę bez chloroplastów."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy bezpłciowego rozmnażania wielokomórkowego protista przez fragmentację.",
    "options": null,
    "items": [
      "oderwany fragment staje się nowym osobnikiem",
      "dorosły osobnik",
      "od osobnika odrywa się fragment ciała",
      "fragment rozwija się samodzielnie"
    ],
    "answer": [
      "dorosły osobnik",
      "od osobnika odrywa się fragment ciała",
      "fragment rozwija się samodzielnie",
      "oderwany fragment staje się nowym osobnikiem"
    ],
    "explanation": "W fragmentacji część ciała odrywa się od dorosłego organizmu i rozwija w nowego osobnika."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Euglena przez dłuższy czas znajduje się w ciemności. Nie może przeprowadzać fotosyntezy. Jak zmieni sposób odżywiania?",
    "options": [
      "stanie się cudzożywna i będzie pobierać pokarm ze środowiska",
      "przestanie wykonywać wszystkie czynności życiowe",
      "zmieni się w bakterię",
      "wytworzy owocnik",
      "zacznie oddychać wyłącznie tlenem atmosferycznym",
      "wytworzy ścianę z chityny"
    ],
    "answer": 0,
    "image": "r03_pantofelek_euglena.jpg",
    "explanation": "Euglena jest zmiennożywna: w świetle fotosyntetyzuje, a w ciemności pobiera pokarm ze środowiska."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż grzyb należący w rozdziale do grupy trujących: koźlarz czerwony, borowik szlachetny, goryczak żółciowy, pieprznik jadalny.",
    "options": null,
    "answer": "goryczak żółciowy",
    "image": "r03_grzyby_jadalne_trujace.jpg",
    "explanation": "Goryczak żółciowy został pokazany wśród grzybów trujących, a pozostałe trzy wśród jadalnych."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę organizmów z pozytywną rolą w środowisku.",
    "options": null,
    "left": [
      "bakterie gnilne",
      "grzyby",
      "protisty roślinopodobne",
      "porosty"
    ],
    "right": [
      "rozkład szczątków i udział w powstawaniu gleby",
      "rozkład szczątków oraz współpraca z drzewami",
      "wytwarzanie tlenu i tworzenie podwodnych łąk",
      "wskazywanie jakości powietrza"
    ],
    "answer": {
      "bakterie gnilne": "rozkład szczątków i udział w powstawaniu gleby",
      "grzyby": "rozkład szczątków oraz współpraca z drzewami",
      "protisty roślinopodobne": "wytwarzanie tlenu i tworzenie podwodnych łąk",
      "porosty": "wskazywanie jakości powietrza"
    },
    "image": "r03_skala_porostowa.jpg",
    "explanation": "Każda grupa pełni inną rolę: rozkłada materię, współpracuje z organizmami, wytwarza tlen albo służy jako wskaźnik zanieczyszczenia powietrza."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz królestwa, w których według rozdziału występują zarówno organizmy jednokomórkowe, jak i wielokomórkowe.",
    "options": [
      "protisty",
      "grzyby",
      "bakterie",
      "rośliny",
      "zwierzęta"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Wśród protistów i grzybów występują formy jedno- i wielokomórkowe. Bakterie są jednokomórkowe, a rośliny i zwierzęta wielokomórkowe."
  }
];

const KID_PROMPTS = {
  "R03_KLA_03": "Ułóż grupy zwierząt od największej do najmniejszej.",
  "R03_WIR_02": "Dlaczego wirus nie jest organizmem? Zaznacz dobre odpowiedzi.",
  "R03_WIR_05": "Ułóż po kolei, co wirus robi w komórce.",
  "R03_BAK_07": "Podziel cechy na bakterie oddychające z tlenem i bez tlenu.",
  "R03_PRO_02": "Połącz każdą grupę protistów z opisem jej komórki.",
  "R03_PRO_05": "Euglena ma dużo światła. Jak zdobywa pokarm?",
  "R03_GRZ_04": "Połącz części grzyba z ich opisami.",
  "R03_GRZ_05": "Dlaczego trzeba wyrzucić cały spleśniały chleb?",
  "R03_ZNA_04": "Jest dużo dużych porostów. Jakie jest powietrze?",
  "R03_HARD_11": "Euglena jest w ciemności. Jak będzie się odżywiać?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Klasyfikacja i systematyka. Wirusy. Bakterie. Protisty. Grzyby",
  "icon": "🦠",
  "sectionOrder": [
    "Klasyfikacja organizmów",
    "Wirusy",
    "Bakterie",
    "Protisty",
    "Grzyby i porosty",
    "Znaczenie i profilaktyka"
  ],
  "sectionIcons": {
    "Klasyfikacja organizmów": "🧬",
    "Wirusy": "🦠",
    "Bakterie": "🔬",
    "Protisty": "🧫",
    "Grzyby i porosty": "🍄",
    "Znaczenie i profilaktyka": "🩺"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
