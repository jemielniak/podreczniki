// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BAK  = Bakterie - budowa i życie
//   BCZ  = Bakterie w przyrodzie i u człowieka
//   GRB  = Grzyby - budowa i rozmnażanie
//   GCZ  = Grzyby w przyrodzie i u człowieka
//   PRO  = Protisty
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_BAK_01",
    "section": "Bakterie - budowa i życie",
    "type": "single_choice",
    "prompt": "Która cecha najlepiej opisuje bakterie przedstawione w rozdziale?",
    "options": [
      "mikroskopijne organizmy jednokomórkowe bez jądra komórkowego",
      "wielokomórkowe rośliny z chloroplastami",
      "zwierzęta z przewodem pokarmowym",
      "organizmy zawsze widoczne gołym okiem",
      "grzyby zbudowane ze strzępek",
      "protisty zawsze wielokomórkowe"
    ],
    "answer": 0,
    "explanation": "Bakterie opisano jako mikroskopijne organizmy jednokomórkowe pozbawione jądra komórkowego."
  },
  {
    "id": "R02_BAK_02",
    "section": "Bakterie - budowa i życie",
    "type": "true_false",
    "prompt": "Bakterie mogą żyć tylko w wodzie i glebie.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. W rozdziale podano, że bakterie żyją także na powierzchni ciała i wewnątrz innych organizmów, czyli wszędzie tam, gdzie mają pokarm i odpowiednie warunki."
  },
  {
    "id": "R02_BAK_03",
    "section": "Bakterie - budowa i życie",
    "type": "multi_select",
    "prompt": "Zaznacz podstawowe kształty komórek bakteryjnych wymienione w podsumowaniu tematu.",
    "options": [
      "kulisty",
      "wydłużony",
      "spiralny",
      "owocnikowy",
      "z nibynóżkami"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_ksztalty_bakterii.jpg",
    "explanation": "Komórki bakterii mogą mieć kształt kulisty, wydłużony lub spiralny. Owocnik dotyczy grzybów, a nibynóżki protistów."
  },
  {
    "id": "R02_BAK_04",
    "section": "Bakterie - budowa i życie",
    "type": "fill_in",
    "prompt": "W komórce bakteryjnej nie ma __________ komórkowego ani __________.",
    "options": null,
    "answer": [
      "jądra",
      "chloroplastów"
    ],
    "altAnswers": [
      [
        "jądra",
        "jądro"
      ],
      [
        "chloroplastów",
        "chloroplasty"
      ]
    ],
    "image": "r02_komorka_bakteryjna.jpg",
    "explanation": "Schemat komórki bakteryjnej pokazuje brak jądra komórkowego i chloroplastów. Materiał genetyczny leży w cytoplazmie."
  },
  {
    "id": "R02_BAK_05",
    "section": "Bakterie - budowa i życie",
    "type": "riddle",
    "prompt": "Jak nazywa się organizm cudzożywny odżywiający się martwą materią organiczną?",
    "options": null,
    "answer": "saprofit",
    "altAnswers": [
      "saprofit",
      "saprofity"
    ],
    "explanation": "Saprofit pozyskuje składniki pokarmowe z martwej materii organicznej, na przykład ze szczątków roślin i zwierząt."
  },
  {
    "id": "R02_BAK_06",
    "section": "Bakterie - budowa i życie",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "symbioza",
      "pasożytnictwo",
      "przetrwalnik",
      "fermentacja"
    ],
    "right": [
      "związek korzystny dla obu stron",
      "związek szkodliwy dla organizmu zasiedlanego",
      "odwodniona komórka z grubą osłoną",
      "sposób uzyskiwania energii bez tlenu"
    ],
    "answer": {
      "symbioza": "związek korzystny dla obu stron",
      "pasożytnictwo": "związek szkodliwy dla organizmu zasiedlanego",
      "przetrwalnik": "odwodniona komórka z grubą osłoną",
      "fermentacja": "sposób uzyskiwania energii bez tlenu"
    },
    "explanation": "Symbioza przynosi korzyści obu stronom, pasożytnictwo szkodzi organizmowi zasiedlanemu, a przetrwalnik pozwala przetrwać niekorzystne warunki."
  },
  {
    "id": "R02_BAK_07",
    "section": "Bakterie - budowa i życie",
    "type": "scenario",
    "prompt": "Otwierasz konserwę, ale wieczko jest wybrzuszone. Co według rozdziału należy zrobić z taką puszką?",
    "options": [
      "bezwzględnie ją wyrzucić",
      "podgrzać i zjeść od razu",
      "schłodzić i zostawić na później",
      "przelać zawartość do słoika",
      "otworzyć i spróbować małą porcję",
      "dodać sól i ocet"
    ],
    "answer": 0,
    "explanation": "Wybrzuszenie wieczka, czyli bombaż, może świadczyć o namnażaniu się laseczek jadu kiełbasianego i obecności groźnej substancji. Taką puszkę należy wyrzucić."
  },
  {
    "id": "R02_BAK_08",
    "section": "Bakterie - budowa i życie",
    "type": "sequence",
    "prompt": "Ułóż etapy rozmnażania bakterii przez podział komórki w poprawnej kolejności.",
    "options": null,
    "items": [
      "powstają dwie komórki potomne",
      "komórka bakteryjna zaczyna się przewężać",
      "dochodzi do podwojenia materiału genetycznego",
      "komórka dzieli się na pół"
    ],
    "answer": [
      "dochodzi do podwojenia materiału genetycznego",
      "komórka bakteryjna zaczyna się przewężać",
      "komórka dzieli się na pół",
      "powstają dwie komórki potomne"
    ],
    "image": "r02_podzial_bakterii.jpg",
    "explanation": "Najpierw materiał genetyczny ulega podwojeniu, potem komórka przewęża się i dzieli, a wynikiem są dwie komórki potomne."
  },
  {
    "id": "R02_BAK_09",
    "section": "Bakterie - budowa i życie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ziarniaki, laseczki, krętki, owocniki.",
    "options": null,
    "answer": "owocniki",
    "image": "r02_ksztalty_bakterii.jpg",
    "explanation": "Ziarniaki, laseczki i krętki to kształty komórek bakterii. Owocniki są strukturami grzybów."
  },
  {
    "id": "R02_BAK_10",
    "section": "Bakterie - budowa i życie",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do typu komórki, w którym występują według porównania z rozdziału.",
    "options": null,
    "items": [
      "cytoplazma",
      "błona komórkowa",
      "materiał genetyczny",
      "jądro komórkowe",
      "chloroplast"
    ],
    "categories": [
      "w komórce bakteryjnej",
      "brak w komórce bakteryjnej"
    ],
    "answer": {
      "w komórce bakteryjnej": [
        "cytoplazma",
        "błona komórkowa",
        "materiał genetyczny"
      ],
      "brak w komórce bakteryjnej": [
        "jądro komórkowe",
        "chloroplast"
      ]
    },
    "image": "r02_komorka_bakteryjna.jpg",
    "explanation": "Komórka bakteryjna ma cytoplazmę, błonę komórkową i materiał genetyczny, ale nie ma jądra komórkowego ani chloroplastów."
  },
  {
    "id": "R02_BAK_11",
    "section": "Bakterie - budowa i życie",
    "type": "single_choice",
    "prompt": "Po co niektóre bakterie tworzą przetrwalniki?",
    "options": [
      "aby przetrwać niekorzystne warunki",
      "aby prowadzić fotosyntezę szybciej",
      "aby stać się organizmami wielokomórkowymi",
      "aby wytworzyć owocniki",
      "aby zamienić się w protisty",
      "aby poruszać się rzęskami"
    ],
    "answer": 0,
    "image": "r02_podzial_bakterii.jpg",
    "explanation": "Przetrwalniki są odwodnionymi komórkami z grubą osłoną. Dzięki nim bakterie mogą przetrwać niekorzystne warunki, na przykład suszę."
  },
  {
    "id": "R02_BAK_12",
    "section": "Bakterie - budowa i życie",
    "type": "true_false",
    "prompt": "Niektóre bakterie mogą oddychać tlenowo, a przy niedoborze tlenu przeprowadzać fermentację.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Rozdział podaje, że część bakterii dostosowuje sposób oddychania do warunków otoczenia."
  },
  {
    "id": "R02_BCZ_01",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "single_choice",
    "prompt": "Jaką rolę pełnią bakterie saprofityczne w przyrodzie?",
    "options": [
      "rozkładają martwą materię organiczną",
      "wyłącznie wywołują choroby ludzi",
      "tworzą owocniki nad ziemią",
      "są zawsze drapieżnikami",
      "zapylają rośliny kwiatowe",
      "produkują pancerzyki z chityny"
    ],
    "answer": 0,
    "image": "r02_rola_saprofitow.jpg",
    "explanation": "Bakterie saprofityczne rozkładają martwą materię organiczną, dzięki czemu do środowiska trafiają sole mineralne i związki chemiczne wykorzystywane przez inne organizmy."
  },
  {
    "id": "R02_BCZ_02",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz pożyteczne znaczenie bakterii lub sinic opisane w rozdziale.",
    "options": [
      "rozkład martwej materii organicznej",
      "wytwarzanie tlenu przez sinice",
      "bycie pokarmem dla innych organizmów",
      "tworzenie pancerzyków owadów",
      "budowa owocników grzybów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_rola_saprofitow.jpg",
    "explanation": "Rozdział podaje, że bakterie saprofityczne uczestniczą w rozkładzie martwej materii, a sinice wytwarzają tlen i są pokarmem dla innych organizmów."
  },
  {
    "id": "R02_BCZ_03",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "true_false",
    "prompt": "Bakterie mają wyłącznie niekorzystny wpływ na życie człowieka.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Człowiek wykorzystuje bakterie między innymi w branży spożywczej, farmaceutycznej i w oczyszczaniu ścieków."
  },
  {
    "id": "R02_BCZ_04",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "fill_in",
    "prompt": "Fermentacja prowadzona przez bakterie jest potrzebna między innymi do uzyskania kiszonej __________ oraz __________.",
    "options": null,
    "answer": [
      "kapusty",
      "serów"
    ],
    "altAnswers": [
      [
        "kapusty",
        "kapusta"
      ],
      [
        "serów",
        "sery"
      ]
    ],
    "explanation": "W rozdziale jako przykłady produktów spożywczych uzyskiwanych dzięki bakteriom podano kiszoną kapustę i sery."
  },
  {
    "id": "R02_BCZ_05",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "match",
    "prompt": "Połącz zastosowanie bakterii z przykładem.",
    "options": null,
    "left": [
      "branża spożywcza",
      "farmacja",
      "oczyszczalnia ścieków",
      "skażone tereny"
    ],
    "right": [
      "kiszenie kapusty i produkcja serów",
      "wytwarzanie insuliny",
      "przekształcanie związków ze ścieków",
      "usuwanie pochodnych ropy i metali ciężkich"
    ],
    "answer": {
      "branża spożywcza": "kiszenie kapusty i produkcja serów",
      "farmacja": "wytwarzanie insuliny",
      "oczyszczalnia ścieków": "przekształcanie związków ze ścieków",
      "skażone tereny": "usuwanie pochodnych ropy i metali ciężkich"
    },
    "explanation": "Bakterie pomagają otrzymywać produkty spożywcze, insulinę oraz oczyszczać ścieki biologicznie."
  },
  {
    "id": "R02_BCZ_06",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "scenario",
    "prompt": "Uczeń przyjmuje antybiotyk. Dlaczego rozdział zaleca wtedy dobrej jakości jogurty lub probiotyki?",
    "options": [
      "pomagają przywrócić pożyteczne bakterie",
      "zastępują wszystkie szczepienia",
      "powodują powstawanie przetrwalników",
      "zwiększają liczbę wirusów jelitowych",
      "zawsze leczą tężec bez leków",
      "chronią przed ukąszeniem kleszcza"
    ],
    "answer": 0,
    "explanation": "Antybiotyki niszczą nie tylko bakterie chorobotwórcze, ale także pożyteczne bakterie symbiotyczne w układzie pokarmowym. Jogurty lub probiotyki pomagają odtworzyć ich liczbę."
  },
  {
    "id": "R02_BCZ_07",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: tężec, borelioza, gruźlica, grzybica.",
    "options": null,
    "answer": "grzybica",
    "explanation": "Tężec, borelioza i gruźlica są chorobami bakteryjnymi. Grzybica jest chorobą wywoływaną przez grzyby."
  },
  {
    "id": "R02_BCZ_08",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "match",
    "prompt": "Połącz chorobę bakteryjną z organizmem, który ją wywołuje.",
    "options": null,
    "left": [
      "tężec",
      "borelioza",
      "gruźlica",
      "salmonelloza"
    ],
    "right": [
      "laseczka tężca",
      "krętek boreliozy",
      "prątek gruźlicy",
      "pałeczka salmonelli"
    ],
    "answer": {
      "tężec": "laseczka tężca",
      "borelioza": "krętek boreliozy",
      "gruźlica": "prątek gruźlicy",
      "salmonelloza": "pałeczka salmonelli"
    },
    "image": "r02_drogi_zakazen.jpg",
    "explanation": "W rozdziale wymieniono laseczki tężca, krętki boreliozy, prątki gruźlicy i pałeczki salmonelli jako przyczyny odpowiednich chorób."
  },
  {
    "id": "R02_BCZ_09",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj choroby do typowych dróg zakażenia opisanych w rozdziale.",
    "options": null,
    "items": [
      "salmonelloza",
      "gruźlica",
      "tężec",
      "borelioza"
    ],
    "categories": [
      "droga pokarmowa",
      "droga powietrzno-kropelkowa",
      "zabrudzona rana lub pogryzienie",
      "ukąszenie kleszcza"
    ],
    "answer": {
      "droga pokarmowa": [
        "salmonelloza"
      ],
      "droga powietrzno-kropelkowa": [
        "gruźlica"
      ],
      "zabrudzona rana lub pogryzienie": [
        "tężec"
      ],
      "ukąszenie kleszcza": [
        "borelioza"
      ]
    },
    "image": "r02_drogi_zakazen.jpg",
    "explanation": "Salmonelloza szerzy się drogą pokarmową, gruźlica najczęściej drogą powietrzno-kropelkową, tężec przez zabrudzoną ranę lub pogryzienie, a borelioza przez ukąszenie zakażonego kleszcza."
  },
  {
    "id": "R02_BCZ_10",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "true_false",
    "prompt": "Szczepienia są ważne w zapobieganiu tężcowi.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Rozdział podaje, że w zapobieganiu tężcowi szczepienia są bardzo ważne."
  },
  {
    "id": "R02_BCZ_11",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "riddle",
    "prompt": "Jak nazywa się trująca substancja wytwarzana przez niektóre organizmy?",
    "options": null,
    "answer": "toksyna",
    "altAnswers": [
      "toksyna",
      "toksyny"
    ],
    "explanation": "Toksyna to substancja trująca wytwarzana przez niektóre organizmy, na przykład przez gronkowca złocistego."
  },
  {
    "id": "R02_BCZ_12",
    "section": "Bakterie w przyrodzie i u człowieka",
    "type": "scenario",
    "prompt": "Na terenie rafinerii gleba i woda zostały skażone pochodnymi ropy naftowej. Jak można wykorzystać bakterie?",
    "options": [
      "dobrać bakterie oczyszczające skażony teren",
      "zaszczepić rośliny przeciw grzybicy",
      "posypać teren zarodnikami porostów",
      "dodać do gleby wyłącznie cukier",
      "zastąpić glebę chityną",
      "usunąć wszystkie organizmy pionierskie"
    ],
    "answer": 0,
    "explanation": "Rozdział opisuje wprowadzanie odpowiednio dobranych bakterii, które wykorzystują pochodne ropy jako źródło węgla i energii albo przekształcają metale ciężkie w mniej szkodliwe związki."
  },
  {
    "id": "R02_GRB_01",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "single_choice",
    "prompt": "Z czego zbudowane jest ciało większości grzybów wielokomórkowych?",
    "options": [
      "ze strzępek tworzących grzybnię",
      "z samych chloroplastów",
      "z komórek bez jądra",
      "z pancerzyków krzemionkowych",
      "z rzęsek i wici",
      "z korzeni i liści"
    ],
    "answer": 0,
    "image": "r02_budowa_grzyba.jpg",
    "explanation": "Większość grzybów wielokomórkowych ma ciało zbudowane ze strzępek, które tworzą grzybnię."
  },
  {
    "id": "R02_GRB_02",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "true_false",
    "prompt": "Grzyby zaliczamy do roślin, ponieważ prowadzą fotosyntezę.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Grzyby są cudzożywne, a komórki grzybów mają ścianę komórkową z chityny."
  },
  {
    "id": "R02_GRB_03",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy komórek grzybów opisane w rozdziale.",
    "options": [
      "zawierają jądro komórkowe",
      "mają ścianę komórkową z chityny",
      "należą do organizmów cudzożywnych",
      "nie mają żadnej ściany komórkowej",
      "zawsze prowadzą fotosyntezę"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Komórki grzybów zawierają jądro i są otoczone ścianą komórkową z chityny. Grzyby nie są samożywne jak rośliny."
  },
  {
    "id": "R02_GRB_04",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "fill_in",
    "prompt": "Strzępki tworzą splątaną strukturę nazywaną __________, a nad ziemią może wyrastać __________ grzyba kapeluszowego.",
    "options": null,
    "answer": [
      "grzybnią",
      "owocnik"
    ],
    "altAnswers": [
      [
        "grzybnią",
        "grzybnia"
      ],
      [
        "owocnik",
        "owocniki"
      ]
    ],
    "image": "r02_budowa_grzyba.jpg",
    "explanation": "Strzępki tworzą grzybnię, a widoczną częścią grzyba kapeluszowego jest owocnik."
  },
  {
    "id": "R02_GRB_05",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "match",
    "prompt": "Połącz przykład grzyba z opisem z rozdziału.",
    "options": null,
    "left": [
      "drożdże",
      "pędzlak",
      "borowik",
      "hubiak"
    ],
    "right": [
      "grzyb jednokomórkowy",
      "grzyb obserwowany jako pleśń",
      "grzyb kapeluszowy",
      "może być saprofitem lub pasożytem"
    ],
    "answer": {
      "drożdże": "grzyb jednokomórkowy",
      "pędzlak": "grzyb obserwowany jako pleśń",
      "borowik": "grzyb kapeluszowy",
      "hubiak": "może być saprofitem lub pasożytem"
    },
    "explanation": "Drożdże są jednokomórkowe, pędzlak może tworzyć pleśń, a borowik jest przykładem grzyba kapeluszowego."
  },
  {
    "id": "R02_GRB_06",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "scenario",
    "prompt": "Na wilgotnym kawałku chleba rozwija się pleśń. Jak odżywia się taki grzyb?",
    "options": [
      "jako saprofit czerpiący pokarm z materii organicznej",
      "jako roślina prowadząca fotosyntezę",
      "jako bakteria bez jądra komórkowego",
      "jako zwierzę połykające kęsy pokarmu",
      "jako organizm zawsze samożywny",
      "jako wirus wnikający do komórek"
    ],
    "answer": 0,
    "explanation": "Pleśnie to grzyby saprofityczne porastające między innymi produkty spożywcze. Czerpią pokarm z materii organicznej podłoża."
  },
  {
    "id": "R02_GRB_07",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: drożdże, pędzlak, borowik, euglena.",
    "options": null,
    "answer": "euglena",
    "explanation": "Drożdże, pędzlak i borowik to grzyby. Euglena jest protistem."
  },
  {
    "id": "R02_GRB_08",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "sequence",
    "prompt": "Ułóż etapy pączkowania drożdży w poprawnej kolejności.",
    "options": null,
    "items": [
      "mniejsza komórka oddziela się od większej",
      "na komórce drożdży powstaje uwypuklenie",
      "uwypuklenie powiększa się",
      "powstaje nowa komórka potomna"
    ],
    "answer": [
      "na komórce drożdży powstaje uwypuklenie",
      "uwypuklenie powiększa się",
      "mniejsza komórka oddziela się od większej",
      "powstaje nowa komórka potomna"
    ],
    "image": "r02_rozmnazanie_grzybow.jpg",
    "explanation": "Drożdże rozmnażają się bezpłciowo przez pączkowanie: na komórce powstaje uwypuklenie, rośnie, a potem oddziela się jako nowa komórka."
  },
  {
    "id": "R02_GRB_09",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do grup grzybów.",
    "options": null,
    "items": [
      "drożdże",
      "pędzlak",
      "borowik",
      "grzyb kapeluszowy"
    ],
    "categories": [
      "jednokomórkowe",
      "wielokomórkowe"
    ],
    "answer": {
      "jednokomórkowe": [
        "drożdże"
      ],
      "wielokomórkowe": [
        "pędzlak",
        "borowik",
        "grzyb kapeluszowy"
      ]
    },
    "image": "r02_budowa_grzyba.jpg",
    "explanation": "Drożdże są przykładem grzybów jednokomórkowych. Pędzlak i borowik to grzyby wielokomórkowe."
  },
  {
    "id": "R02_GRB_10",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "riddle",
    "prompt": "Jaka substancja buduje ścianę komórkową grzybów i pancerzyki owadów?",
    "options": null,
    "answer": "chityna",
    "altAnswers": [
      "chityna",
      "chityny"
    ],
    "explanation": "Ściana komórkowa grzybów jest zbudowana z chityny, tej samej substancji, która tworzy pancerzyki owadów."
  },
  {
    "id": "R02_GRB_11",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "match",
    "prompt": "Połącz sposób rozmnażania grzybów z przykładem.",
    "options": null,
    "left": [
      "pączkowanie",
      "bezpłciowe przez zarodniki",
      "płciowe u grzybów kapeluszowych"
    ],
    "right": [
      "podział na większą i mniejszą komórkę",
      "powstanie zarodników rozsiewanych przez wiatr lub wodę",
      "połączenie strzępek dwóch osobników"
    ],
    "answer": {
      "pączkowanie": "podział na większą i mniejszą komórkę",
      "bezpłciowe przez zarodniki": "powstanie zarodników rozsiewanych przez wiatr lub wodę",
      "płciowe u grzybów kapeluszowych": "połączenie strzępek dwóch osobników"
    },
    "image": "r02_rozmnazanie_grzybow.jpg",
    "explanation": "Drożdże pączkują, grzyby wielokomórkowe mogą bezpłciowo wytwarzać zarodniki, a grzyby kapeluszowe mogą rozmnażać się płciowo przez połączenie strzępek."
  },
  {
    "id": "R02_GRB_12",
    "section": "Grzyby - budowa i rozmnażanie",
    "type": "true_false",
    "prompt": "Grzyby pozbawione dostępu do tlenu mogą przeprowadzać fermentację alkoholową.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Rozdział podaje, że grzyby mające dostęp do powietrza oddychają tlenowo, a bez tlenu mogą przeprowadzać fermentację alkoholową."
  },
  {
    "id": "R02_GCZ_01",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "single_choice",
    "prompt": "Czym jest mikoryza?",
    "options": [
      "współpracą grzyba z korzeniami roślin",
      "chorobą wywoływaną przez bakterie",
      "pączkowaniem drożdży",
      "pancerzykiem okrzemki",
      "sposobem przenoszenia malarii",
      "formą przetrwalnika bakterii"
    ],
    "answer": 0,
    "image": "r02_mikoryza_i_porosty.jpg",
    "explanation": "Mikoryza to współpraca grzybów z korzeniami roślin, korzystna dla obu stron."
  },
  {
    "id": "R02_GCZ_02",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz korzyści partnerów w mikoryzie.",
    "options": [
      "roślina łatwiej pobiera wodę",
      "roślina łatwiej pobiera sole mineralne",
      "grzyb otrzymuje cukry od rośliny",
      "grzyb zaczyna prowadzić fotosyntezę",
      "bakteria wytwarza przetrwalnik"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W mikoryzie strzępki grzybów ułatwiają roślinie pobieranie wody i soli mineralnych, a grzyb otrzymuje od rośliny cukry wytworzone w liściach."
  },
  {
    "id": "R02_GCZ_03",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "fill_in",
    "prompt": "Porosty tworzą grzyby współżyjące z jednokomórkowymi organizmami samożywnymi nazywanymi __________.",
    "options": null,
    "answer": [
      "glonami"
    ],
    "altAnswers": [
      [
        "glonami",
        "glony"
      ]
    ],
    "image": "r02_mikoryza_i_porosty.jpg",
    "explanation": "Porosty to grzyby, w których grzybni znajdują się jednokomórkowe glony. Dzięki cukrom z fotosyntezy mogą rosnąć na ubogich podłożach."
  },
  {
    "id": "R02_GCZ_04",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "true_false",
    "prompt": "Porosty proszkowate wskazują na najczystsze powietrze spośród trzech typów porostów opisanych w rozdziale.",
    "options": null,
    "answer": false,
    "image": "r02_typy_porostow.jpg",
    "explanation": "To fałsz. Najczystsze powietrze wskazują porosty krzaczkowate, a proszkowate mogą rosnąć przy silniejszym zanieczyszczeniu."
  },
  {
    "id": "R02_GCZ_05",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "match",
    "prompt": "Połącz typ porostu z opisem wyglądu.",
    "options": null,
    "left": [
      "porosty krzaczkowate",
      "porosty listkowate",
      "porosty proszkowate"
    ],
    "right": [
      "przypominają małe krzaczki",
      "tworzą liście przylegające do podłoża",
      "przypominają proszek"
    ],
    "answer": {
      "porosty krzaczkowate": "przypominają małe krzaczki",
      "porosty listkowate": "tworzą liście przylegające do podłoża",
      "porosty proszkowate": "przypominają proszek"
    },
    "explanation": "Rozdział odróżnia porosty krzaczkowate, listkowate i proszkowate po ich wyglądzie."
  },
  {
    "id": "R02_GCZ_06",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "scenario",
    "prompt": "Na korze drzew w parku widzisz liczne porosty krzaczkowate. Co można wnioskować na podstawie rozdziału?",
    "options": [
      "poziom dwutlenku siarki jest niski",
      "powietrze jest silnie zanieczyszczone siarką",
      "na pewno występuje tam malaria",
      "brakuje tam wszystkich grzybów",
      "gleba jest zakażona salmonellą",
      "powstały tam przetrwalniki bakterii"
    ],
    "answer": 0,
    "image": "r02_typy_porostow.jpg",
    "explanation": "Porosty krzaczkowate rosną tylko tam, gdzie poziom dwutlenku siarki jest niski, więc świadczą o małym zanieczyszczeniu powietrza tym gazem."
  },
  {
    "id": "R02_GCZ_07",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: pieczarki, drożdże, ser brie, malaria.",
    "options": null,
    "answer": "malaria",
    "explanation": "Pieczarki, drożdże i ser brie wiążą się z wykorzystaniem grzybów przez człowieka. Malaria jest chorobą wywoływaną przez protista."
  },
  {
    "id": "R02_GCZ_08",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady wpływu grzybów do kategorii.",
    "options": null,
    "items": [
      "rozkład martwej materii",
      "mikoryza",
      "produkcja chleba",
      "grzybica skóry",
      "choroby roślin uprawnych"
    ],
    "categories": [
      "korzystny wpływ",
      "szkodliwy wpływ"
    ],
    "answer": {
      "korzystny wpływ": [
        "rozkład martwej materii",
        "mikoryza",
        "produkcja chleba"
      ],
      "szkodliwy wpływ": [
        "grzybica skóry",
        "choroby roślin uprawnych"
      ]
    },
    "explanation": "Grzyby pomagają w rozkładzie materii, mikoryzie i produkcji żywności, ale mogą też wywoływać grzybice i choroby roślin uprawnych."
  },
  {
    "id": "R02_GCZ_09",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "single_choice",
    "prompt": "Z jakim odkryciem opisanym w rozdziale wiąże się pędzlak Penicillium?",
    "options": [
      "z penicyliną",
      "z insuliną bakteryjną",
      "z kombu",
      "z malarią",
      "z tężcem",
      "z morszczynem"
    ],
    "answer": 0,
    "image": "r02_szalka_fleminga.jpg",
    "explanation": "Łacińska nazwa pędzlaka to Penicillium. Od niej utworzono nazwę penicylina, czyli pierwszy antybiotyk."
  },
  {
    "id": "R02_GCZ_10",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "true_false",
    "prompt": "Niektóre grzyby pasożytnicze wywołują choroby roślin uprawnych.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale podano, że grzyby pasożytnicze są przyczyną chorób wielu roślin uprawnych i strat w rolnictwie."
  },
  {
    "id": "R02_GCZ_11",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "riddle",
    "prompt": "Jak potocznie nazywa się różne grzyby saprofityczne porastające produkty spożywcze, drewno lub papier?",
    "options": null,
    "answer": "pleśń",
    "altAnswers": [
      "pleśń",
      "plesn"
    ],
    "explanation": "Pleśń to potoczne określenie różnych grzybów saprofitycznych porastających między innymi żywność, drewno i papier."
  },
  {
    "id": "R02_GCZ_12",
    "section": "Grzyby w przyrodzie i u człowieka",
    "type": "scenario",
    "prompt": "Po treningu ktoś długo chodzi w nieprzewiewnych butach, a stopy pozostają spocone. Jakie ryzyko opisuje rozdział?",
    "options": [
      "rozwój grzybicy",
      "zakażenie boreliozą przez kleszcza",
      "powstanie bombażu",
      "zarażenie malarią bez komara",
      "wytworzenie insuliny",
      "powstanie porostów krzaczkowatych"
    ],
    "answer": 0,
    "explanation": "Długo wilgotna skóra i nieprzewiewne buty sprzyjają grzybicy. Rozdział zaleca utrzymywanie skóry w czystości i suchości oraz regularną zmianę skarpet."
  },
  {
    "id": "R02_PRO_01",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Jaka cecha jest wspólna dla wszystkich protistów według rozdziału?",
    "options": [
      "obecność jądra komórkowego",
      "brak jądra komórkowego",
      "ściana z chityny u wszystkich gatunków",
      "wyłącznie cudzożywność",
      "wyłącznie wielokomórkowość",
      "życie tylko w ciele człowieka"
    ],
    "answer": 0,
    "image": "r02_protisty_roznorodnosc.jpg",
    "explanation": "Protisty są bardzo różnorodne, a ich wspólną cechą jest obecność jądra w komórkach."
  },
  {
    "id": "R02_PRO_02",
    "section": "Protisty",
    "type": "multi_select",
    "prompt": "Zaznacz środowiska życia protistów wymienione w podsumowaniu.",
    "options": [
      "woda",
      "wilgotna gleba",
      "inne organizmy",
      "wyłącznie suche skały",
      "wyłącznie konserwy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Protisty żyją w wodzie, wilgotnej glebie oraz w innych organizmach."
  },
  {
    "id": "R02_PRO_03",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Większość protistów żyje w wodzie.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Rozdział rozpoczyna opis protistów od stwierdzenia, że większość z nich żyje w wodzie."
  },
  {
    "id": "R02_PRO_04",
    "section": "Protisty",
    "type": "fill_in",
    "prompt": "Samożywne protisty zaliczane do glonów wzbogacają wodę w __________ dzięki zdolności __________.",
    "options": null,
    "answer": [
      "tlen",
      "fotosyntezy"
    ],
    "altAnswers": [
      [
        "tlen",
        "tlenem"
      ],
      [
        "fotosyntezy",
        "fotosynteza"
      ]
    ],
    "explanation": "Samożywne protisty, podobnie jak rośliny, mają chloroplasty i wzbogacają wodę w tlen dzięki fotosyntezie."
  },
  {
    "id": "R02_PRO_05",
    "section": "Protisty",
    "type": "match",
    "prompt": "Połącz protista z opisem.",
    "options": null,
    "left": [
      "okrzemki",
      "morszcz",
      "śluzowce",
      "świdrowiec gambijski"
    ],
    "right": [
      "jednokomórkowe protisty z pancerzykami",
      "wielokomórkowy morski glon",
      "organizmy pełzające i odżywiające się martwą materią",
      "jednokomórkowy pasożyt wywołujący śpiączkę afrykańską"
    ],
    "answer": {
      "okrzemki": "jednokomórkowe protisty z pancerzykami",
      "morszcz": "wielokomórkowy morski glon",
      "śluzowce": "organizmy pełzające i odżywiające się martwą materią",
      "świdrowiec gambijski": "jednokomórkowy pasożyt wywołujący śpiączkę afrykańską"
    },
    "image": "r02_protisty_roznorodnosc.jpg",
    "explanation": "W rozdziale podano przykłady bardzo różnych protistów, od jednokomórkowych okrzemek po wielokomórkowy morszcz."
  },
  {
    "id": "R02_PRO_06",
    "section": "Protisty",
    "type": "scenario",
    "prompt": "Euglena znajduje się w dobrze oświetlonej wodzie, ale w otoczeniu brakuje pokarmu. Jak może się odżywiać?",
    "options": [
      "samożywnie dzięki chloroplastom",
      "wyłącznie jako pasożyt jelitowy",
      "przez pączkowanie jak drożdże",
      "przez rozkład drewna jak hubiak",
      "przez ukąszenie komara",
      "tworząc przetrwalnik"
    ],
    "answer": 0,
    "image": "r02_euglena_i_pantofelek.jpg",
    "explanation": "Euglena dostosowuje sposób odżywiania do warunków. Dzięki chloroplastom w obecności światła może odżywiać się samożywnie."
  },
  {
    "id": "R02_PRO_07",
    "section": "Protisty",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: euglena, pantofelek, okrzemka, bakteria.",
    "options": null,
    "answer": "bakteria",
    "explanation": "Euglena, pantofelek i okrzemka to protisty. Bakteria należy do innego królestwa i nie ma jądra komórkowego."
  },
  {
    "id": "R02_PRO_08",
    "section": "Protisty",
    "type": "match",
    "prompt": "Połącz organizm lub grupę z charakterystyczną cechą.",
    "options": null,
    "left": [
      "euglena",
      "ameba",
      "okrzemki",
      "pantofelek"
    ],
    "right": [
      "plamka oczna",
      "nibynóżki",
      "pancerzyki",
      "dwa jądra komórkowe"
    ],
    "answer": {
      "euglena": "plamka oczna",
      "ameba": "nibynóżki",
      "okrzemki": "pancerzyki",
      "pantofelek": "dwa jądra komórkowe"
    },
    "image": "r02_protisty_roznorodnosc.jpg",
    "explanation": "Euglena reaguje na światło dzięki plamce ocznej, ameba porusza się nibynóżkami, okrzemki mają pancerzyki, a pantofelek ma dwa jądra komórkowe."
  },
  {
    "id": "R02_PRO_09",
    "section": "Protisty",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do sposobu odżywiania.",
    "options": null,
    "items": [
      "okrzemki",
      "morszcz",
      "śluzowce",
      "wirczyk"
    ],
    "categories": [
      "protisty samożywne",
      "protisty cudzożywne"
    ],
    "answer": {
      "protisty samożywne": [
        "okrzemki",
        "morszcz"
      ],
      "protisty cudzożywne": [
        "śluzowce",
        "wirczyk"
      ]
    },
    "explanation": "Okrzemki i morszcz należą do samożywnych glonów, natomiast śluzowce i wirczyk są przykładami protistów cudzożywnych."
  },
  {
    "id": "R02_PRO_10",
    "section": "Protisty",
    "type": "sequence",
    "prompt": "Ułóż etapy hodowli i obserwacji protistów w poprawnej kolejności.",
    "options": null,
    "items": [
      "obejrzyj preparat pod mikroskopem",
      "do słoika włóż siano i wlej wodę ze stawu",
      "po tygodniu pobierz kroplę płynu",
      "przykryj kroplę szkiełkiem nakrywkowym"
    ],
    "answer": [
      "do słoika włóż siano i wlej wodę ze stawu",
      "po tygodniu pobierz kroplę płynu",
      "przykryj kroplę szkiełkiem nakrywkowym",
      "obejrzyj preparat pod mikroskopem"
    ],
    "explanation": "W doświadczeniu najpierw przygotowuje się wodę z sianem i czeka tydzień, potem pobiera kroplę, przykrywa ją szkiełkiem i obserwuje pod mikroskopem."
  },
  {
    "id": "R02_PRO_11",
    "section": "Protisty",
    "type": "riddle",
    "prompt": "Jak nazywa się komórka męska lub żeńska służąca do rozmnażania płciowego?",
    "options": null,
    "answer": "gameta",
    "altAnswers": [
      "gameta",
      "komórka płciowa",
      "gamety"
    ],
    "explanation": "Gameta to komórka płciowa, męska lub żeńska, służąca do rozmnażania płciowego."
  },
  {
    "id": "R02_PRO_12",
    "section": "Protisty",
    "type": "scenario",
    "prompt": "Pod mikroskopem widać jednokomórkowego cudzożywnego protista z dwoma jądrami komórkowymi. Co to najpewniej za organizm z rozdziału?",
    "options": [
      "pantofelek",
      "morszcz",
      "pędzlak",
      "laseczka tężca",
      "borowik",
      "sinica"
    ],
    "answer": 0,
    "image": "r02_euglena_i_pantofelek.jpg",
    "explanation": "Pantofelek jest jednokomórkowym cudzożywnym protistem, który ma większe i mniejsze jądro komórkowe."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary choroba - sposób profilaktyki podane w podsumowaniu rozdziału.",
    "options": [
      "tężec - szczepionka",
      "salmonelloza - zasady higieny",
      "malaria - leki przeciwmalaryczne",
      "borelioza - oglądanie ciała po powrocie z lasu",
      "grzybica - szczepionka przeciwmalaryczna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podsumowanie wskazuje szczepionkę przy gruźlicy i tężcu, higienę przy salmonellozie, czerwonce pełzakowatej i toksoplazmozie oraz leki przeciwmalaryczne przy malarii."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz chorobę z organizmem chorobotwórczym.",
    "options": null,
    "left": [
      "lamblioza",
      "malaria",
      "toksoplazmoza",
      "czerwonka pełzakowata",
      "gruźlica"
    ],
    "right": [
      "lamblia jelitowa",
      "zarodziec malarii",
      "toksoplazma",
      "pełzak czerwonki",
      "prątek gruźlicy"
    ],
    "answer": {
      "lamblioza": "lamblia jelitowa",
      "malaria": "zarodziec malarii",
      "toksoplazmoza": "toksoplazma",
      "czerwonka pełzakowata": "pełzak czerwonki",
      "gruźlica": "prątek gruźlicy"
    },
    "image": "r02_mapa_malarii.jpg",
    "explanation": "Rozdział opisuje zarówno choroby bakteryjne, jak i protistowe, wraz z ich sprawcami."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który protist wywołuje lambliozę, nazywaną też giardiozą?",
    "options": [
      "lamblia jelitowa",
      "zarodziec malarii",
      "toksoplazma",
      "pełzak czerwonki",
      "świdrowiec gambijski",
      "pantofelek"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że lambliozę, czyli giardiozę, wywołuje lamblia jelitowa."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Według mapy i opisu malaria występuje w krajach Afryki, Ameryki Południowej oraz południowej Azji, gdzie jest gorąco.",
    "options": null,
    "answer": true,
    "image": "r02_mapa_malarii.jpg",
    "explanation": "To prawda. Opis pod mapą wskazuje te obszary jako miejsca występowania malarii."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Fleming zauważył pleśń na szalce 3 września __________ roku, a Florey przeprowadził eksperyment na myszach w __________ roku.",
    "options": null,
    "answer": [
      "1928",
      "1940"
    ],
    "altAnswers": [
      [
        "1928",
        "1928 r."
      ],
      [
        "1940",
        "1940 r."
      ]
    ],
    "image": "r02_szalka_fleminga.jpg",
    "explanation": "Rozdział podaje datę 3 września 1928 roku dla obserwacji Fleminga oraz 1940 rok dla eksperymentu Howarda Floreya."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z penicyliną w kolejności podanej w tekście.",
    "options": null,
    "items": [
      "eksperyment Floreya na myszach",
      "spadek śmiertelności wśród chorych na gruźlicę",
      "zaobserwowanie przez Fleminga pleśni na szalce",
      "wyizolowanie penicyliny z pleśni"
    ],
    "answer": [
      "zaobserwowanie przez Fleminga pleśni na szalce",
      "wyizolowanie penicyliny z pleśni",
      "eksperyment Floreya na myszach",
      "spadek śmiertelności wśród chorych na gruźlicę"
    ],
    "image": "r02_szalka_fleminga.jpg",
    "explanation": "Najpierw Fleming zaobserwował pleśń na szalce, później wyizolowano penicylinę, następnie Florey przeprowadził eksperyment na myszach, a potem antybiotyki przyczyniły się do spadku śmiertelności chorych na gruźlicę."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W tekście o penicylinie podano, że w Londynie w 1942 roku tylko połowa chorych na gruźlicę miała szansę przeżyć, a dwadzieścia lat później umierał jeden pacjent na dziesięciu. Co pokazuje ten przykład?",
    "options": [
      "spadek śmiertelności po upowszechnieniu antybiotyków",
      "całkowite zniknięcie gruźlicy w 1942 roku",
      "brak wpływu leków na choroby bakteryjne",
      "wzrost liczby zmarłych po odkryciu penicyliny",
      "powstanie malarii w Londynie",
      "zastąpienie bakterii przez grzyby"
    ],
    "answer": 0,
    "image": "r02_szalka_fleminga.jpg",
    "explanation": "Tekst pokazuje, że rozpowszechnienie antybiotyków bardzo zmniejszyło śmiertelność z powodu gruźlicy."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do królestw porównanych w podsumowaniu rozdziału.",
    "options": null,
    "items": [
      "brak jądra komórkowego",
      "ściana komórkowa z chityny",
      "bardzo zróżnicowana budowa komórek",
      "pączkowanie drożdży",
      "przetrwalniki"
    ],
    "categories": [
      "bakterie",
      "grzyby",
      "protisty"
    ],
    "answer": {
      "bakterie": [
        "brak jądra komórkowego",
        "przetrwalniki"
      ],
      "grzyby": [
        "ściana komórkowa z chityny",
        "pączkowanie drożdży"
      ],
      "protisty": [
        "bardzo zróżnicowana budowa komórek"
      ]
    },
    "explanation": "Podsumowanie porównuje bakterie, grzyby i protisty: bakterie nie mają jądra komórkowego, grzyby mają ścianę z chityny, a protisty mają komórki z jądrem i bardzo zróżnicowaną budowę."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Penicillium, pędzlak, penicylina, kombu.",
    "options": null,
    "answer": "kombu",
    "explanation": "Penicillium to łacińska nazwa pędzlaka, od której utworzono nazwę penicylina. Kombu to suszone glony z rzędu listownicowców."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz termin z precyzyjnym znaczeniem.",
    "options": null,
    "left": [
      "mikoryza",
      "przetrwalnik",
      "gameta",
      "owocnik",
      "toksyna"
    ],
    "right": [
      "współpraca grzyba z korzeniem rośliny",
      "odwodniona komórka bakterii z grubą osłoną",
      "komórka płciowa",
      "część grzybni wytwarzająca zarodniki",
      "substancja trująca"
    ],
    "answer": {
      "mikoryza": "współpraca grzyba z korzeniem rośliny",
      "przetrwalnik": "odwodniona komórka bakterii z grubą osłoną",
      "gameta": "komórka płciowa",
      "owocnik": "część grzybni wytwarzająca zarodniki",
      "toksyna": "substancja trująca"
    },
    "explanation": "Te pojęcia pojawiają się w rozdziale jako ważne terminy: mikoryza, przetrwalnik, gameta, owocnik i toksyna."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W środowisku jest mało tlenu. Które dwa organizmy z rozdziału mogą w takich warunkach uzyskiwać energię dzięki fermentacji?",
    "options": [
      "bakterie i grzyby",
      "wyłącznie porosty krzaczkowate",
      "wyłącznie okrzemki i morszcz",
      "pełzak czerwonki i komar widliszek",
      "prątek gruźlicy i kleszcz",
      "toksoplazma i kot"
    ],
    "answer": 0,
    "explanation": "Rozdział podaje, że niektóre bakterie przeprowadzają fermentację, a grzyby pozbawione tlenu mogą przeprowadzać fermentację alkoholową."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Porosty są wrażliwe na zanieczyszczenie powietrza __________ siarki; krzaczkowate rosną tam, gdzie jego poziom jest __________.",
    "options": null,
    "answer": [
      "dwutlenkiem",
      "niski"
    ],
    "altAnswers": [
      [
        "dwutlenkiem",
        "dwutlenek"
      ],
      [
        "niski",
        "mały"
      ]
    ],
    "image": "r02_typy_porostow.jpg",
    "explanation": "Porosty są żywymi wskaźnikami zanieczyszczenia dwutlenkiem siarki. Porosty krzaczkowate występują tylko przy niskim poziomie tego gazu."
  }
];

const KID_PROMPTS = {
  "R02_BAK_01": "Czym są bakterie?",
  "R02_BAK_04": "Czego nie ma w komórce bakterii?",
  "R02_BCZ_01": "Co robią bakterie saprofityczne?",
  "R02_BCZ_08": "Jaka bakteria wywołuje tę chorobę?",
  "R02_GRB_01": "Z czego zbudowane są grzyby?",
  "R02_GRB_04": "Uzupełnij nazwy części grzyba.",
  "R02_GCZ_01": "Co to jest mikoryza?",
  "R02_GCZ_06": "Co oznaczają porosty krzaczkowate?",
  "R02_PRO_01": "Co mają wspólnego wszystkie protisty?",
  "R02_PRO_08": "Połącz protista z jego cechą.",
  "R02_HARD_02": "Połącz chorobę z organizmem, który ją wywołuje.",
  "R02_HARD_06": "Ułóż wydarzenia o penicylinie po kolei."
};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Bakterie, grzyby i protisty",
  "icon": "🔬",
  "sectionOrder": [
  "Bakterie - budowa i życie",
  "Bakterie w przyrodzie i u człowieka",
  "Grzyby - budowa i rozmnażanie",
  "Grzyby w przyrodzie i u człowieka",
  "Protisty"
],
  "sectionIcons": {
  "Bakterie - budowa i życie": "🦠",
  "Bakterie w przyrodzie i u człowieka": "🧫",
  "Grzyby - budowa i rozmnażanie": "🍄",
  "Grzyby w przyrodzie i u człowieka": "🌿",
  "Protisty": "💧"
},
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
