// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SYS  = Systematyka organizmów
//   WIR  = Wirusy
//   BAK  = Bakterie
//   PRO  = Protisty
//   GRZ  = Grzyby
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_SYS_01",
    "section": "Systematyka organizmów",
    "type": "single_choice",
    "prompt": "Czym zajmuje się systematyka organizmów?",
    "options": [
      "Wyłącznie leczeniem chorób roślin",
      "Tylko budową komórek bakterii",
      "Klasyfikowaniem i opisywaniem organizmów",
      "Wyłącznie ochroną zwierząt",
      "Pomiarami temperatury powietrza",
      "Wytwarzaniem szczepionek"
    ],
    "answer": 2,
    "explanation": "Systematyka klasyfikuje i opisuje organizmy, badając ich pochodzenie, pokrewieństwo i różnorodność."
  },
  {
    "id": "R02_SYS_02",
    "section": "Systematyka organizmów",
    "type": "true_false",
    "prompt": "Współczesna systematyka uwzględnia pokrewieństwo genetyczne organizmów.",
    "options": null,
    "answer": true,
    "explanation": "Dawniej dominowały podobieństwa wyglądu, a współcześnie bada się także pokrewieństwo genetyczne."
  },
  {
    "id": "R02_SYS_03",
    "section": "Systematyka organizmów",
    "type": "match",
    "prompt": "Połącz przykłady z odpowiednimi kategoriami systematycznymi.",
    "options": null,
    "left": [
      "zwierzęta",
      "drapieżne",
      "psowate",
      "pies domowy"
    ],
    "right": [
      "gatunek",
      "rodzina",
      "królestwo",
      "rząd"
    ],
    "image": "r02_klasyfikacja_organizmow.jpg",
    "answer": {
      "zwierzęta": "królestwo",
      "drapieżne": "rząd",
      "psowate": "rodzina",
      "pies domowy": "gatunek"
    },
    "explanation": "Pies domowy należy do królestwa zwierząt, rzędu drapieżnych i rodziny psowatych."
  },
  {
    "id": "R02_SYS_04",
    "section": "Systematyka organizmów",
    "type": "sequence",
    "prompt": "Ułóż kategorie systematyczne od najszerszej do najwęższej.",
    "options": null,
    "items": [
      "gatunek",
      "gromada",
      "królestwo",
      "rodzaj",
      "rząd",
      "typ",
      "rodzina"
    ],
    "image": "r02_klasyfikacja_organizmow.jpg",
    "answer": [
      "królestwo",
      "typ",
      "gromada",
      "rząd",
      "rodzina",
      "rodzaj",
      "gatunek"
    ],
    "explanation": "Kolejność kategorii systematycznych to: królestwo, typ, gromada, rząd, rodzina, rodzaj i gatunek."
  },
  {
    "id": "R02_SYS_05",
    "section": "Systematyka organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz królestwa, których organizmy mają jądro komórkowe.",
    "options": [
      "protisty",
      "grzyby",
      "rośliny",
      "zwierzęta",
      "bakterie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Protisty, grzyby, rośliny i zwierzęta są organizmami jądrowymi; bakterie są bezjądrowe."
  },
  {
    "id": "R02_SYS_06",
    "section": "Systematyka organizmów",
    "type": "fill_in",
    "prompt": "Najwęższą podstawową kategorią systematyczną jest __________.",
    "options": null,
    "altAnswers": [
      [
        "gatunek"
      ]
    ],
    "answer": [
      "gatunek"
    ],
    "explanation": "Gatunek jest najwęższą z podstawowych kategorii systematycznych."
  },
  {
    "id": "R02_SYS_07",
    "section": "Systematyka organizmów",
    "type": "odd_one_out",
    "prompt": "Wskaż element, którego nie zaliczono do królestw istot żywych: bakterie, protisty, grzyby, wirusy.",
    "options": null,
    "answer": "wirusy",
    "explanation": "Wirusy nie mają budowy komórkowej, więc nie zaliczono ich do żadnego królestwa istot żywych."
  },
  {
    "id": "R02_SYS_08",
    "section": "Systematyka organizmów",
    "type": "single_choice",
    "prompt": "Jaka kategoria systematyczna występuje bezpośrednio pomiędzy rodziną a gatunkiem?",
    "options": [
      "królestwo",
      "gromada",
      "rząd",
      "rodzaj",
      "typ",
      "klasa"
    ],
    "answer": 3,
    "explanation": "Po rodzinie następuje rodzaj, a następnie gatunek."
  },
  {
    "id": "R02_SYS_09",
    "section": "Systematyka organizmów",
    "type": "sort",
    "prompt": "Przyporządkuj opis do królestwa.",
    "options": null,
    "items": [
      "samożywne organizmy jądrowe",
      "organizmy bez wyodrębnionego jądra komórkowego",
      "organizmy jądrowe nietworzące typowych tkanek"
    ],
    "categories": [
      "bakterie",
      "protisty",
      "rośliny"
    ],
    "answer": {
      "bakterie": [
        "organizmy bez wyodrębnionego jądra komórkowego"
      ],
      "protisty": [
        "organizmy jądrowe nietworzące typowych tkanek"
      ],
      "rośliny": [
        "samożywne organizmy jądrowe"
      ]
    },
    "explanation": "Bakterie są bezjądrowe, protisty są jądrowe i nie tworzą typowych tkanek, a rośliny to samożywne organizmy jądrowe."
  },
  {
    "id": "R02_SYS_10",
    "section": "Systematyka organizmów",
    "type": "riddle",
    "prompt": "Jak nazywa się kategoria systematyczna, do której przyporządkowuje się organizmy? Odpowiedz jednym słowem.",
    "options": null,
    "altAnswers": [
      "takson",
      "taksony"
    ],
    "answer": "takson",
    "explanation": "Systematyka grupuje organizmy w taksony, czyli kategorie systematyczne."
  },
  {
    "id": "R02_SYS_11",
    "section": "Systematyka organizmów",
    "type": "scenario",
    "prompt": "Biolog porównuje pochodzenie, różnorodność i pokrewieństwo organizmów, aby przydzielić je do odpowiednich grup. Jaką dziedziną biologii się zajmuje?",
    "options": [
      "wirusologią",
      "systematyką",
      "bakteriologią",
      "protozoologią",
      "fermentacją",
      "farmaceutyką"
    ],
    "answer": 1,
    "explanation": "Badania takie należą do systematyki organizmów."
  },
  {
    "id": "R02_WIR_01",
    "section": "Wirusy",
    "type": "single_choice",
    "prompt": "Dlaczego wirusów nie zalicza się do żadnego królestwa istot żywych?",
    "options": [
      "Nie mają budowy komórkowej",
      "Są zawsze zbudowane z wielu komórek",
      "Posiadają wyodrębnione jądro komórkowe",
      "Tworzą typowe tkanki",
      "Są wyłącznie samożywne",
      "Są zbudowane ze strzępek"
    ],
    "image": "r02_budowa_wirusa.jpg",
    "answer": 0,
    "explanation": "Wirusy nie mają budowy komórkowej; namnażają się tylko wewnątrz organizmu gospodarza."
  },
  {
    "id": "R02_WIR_02",
    "section": "Wirusy",
    "type": "true_false",
    "prompt": "Wirusy mogą namnażać się tylko w organizmie gospodarza.",
    "options": null,
    "answer": true,
    "explanation": "Namnażanie wirusów jest możliwe wyłącznie w komórkach gospodarza."
  },
  {
    "id": "R02_WIR_03",
    "section": "Wirusy",
    "type": "fill_in",
    "prompt": "Nauka zajmująca się badaniem wirusów to __________.",
    "options": null,
    "altAnswers": [
      [
        "wirusologia"
      ]
    ],
    "answer": [
      "wirusologia"
    ],
    "explanation": "Dział biologii poświęcony wirusom nazywa się wirusologią."
  },
  {
    "id": "R02_WIR_04",
    "section": "Wirusy",
    "type": "multi_select",
    "prompt": "Które z podanych chorób człowieka są chorobami wirusowymi?",
    "options": [
      "odra",
      "grypa",
      "różyczka",
      "cholera",
      "tężec",
      "gruźlica"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Odra, grypa i różyczka to choroby wirusowe; cholera, tężec i gruźlica są chorobami bakteryjnymi."
  },
  {
    "id": "R02_WIR_05",
    "section": "Wirusy",
    "type": "match",
    "prompt": "Połącz chorobę wirusową z grupą jej gospodarzy.",
    "options": null,
    "left": [
      "opryszczka",
      "wścieklizna",
      "mozaika tytoniowa"
    ],
    "right": [
      "rośliny",
      "ludzie",
      "zwierzęta"
    ],
    "image": "r02_mozaika_lisci.jpg",
    "answer": {
      "opryszczka": "ludzie",
      "wścieklizna": "zwierzęta",
      "mozaika tytoniowa": "rośliny"
    },
    "explanation": "Opryszczka jest chorobą wirusową człowieka, wścieklizna dotyka zwierzęta, a mozaika tytoniowa rośliny."
  },
  {
    "id": "R02_WIR_06",
    "section": "Wirusy",
    "type": "odd_one_out",
    "prompt": "Która choroba nie pasuje do pozostałych pod względem gospodarza: mozaika jabłoni, mozaika pomidora, szarka śliwy, nosówka.",
    "options": null,
    "image": "r02_mozaika_lisci.jpg",
    "answer": "nosówka",
    "explanation": "Nosówka jest chorobą wirusową zwierząt; pozostałe wymienione choroby dotyczą roślin."
  },
  {
    "id": "R02_WIR_07",
    "section": "Wirusy",
    "type": "single_choice",
    "prompt": "W jakim przedziale wielkości mieszczą się wirusy?",
    "options": [
      "15–300 milimetrów",
      "15–300 nanometrów",
      "15–300 centymetrów",
      "15–300 metrów",
      "15–300 mikrometrów",
      "150–300 kilometrów"
    ],
    "answer": 1,
    "explanation": "Wirusy osiągają rozmiary od 15 do 300 nanometrów."
  },
  {
    "id": "R02_WIR_08",
    "section": "Wirusy",
    "type": "scenario",
    "prompt": "W szkole omawia się sposoby ograniczania chorób wirusowych. Który zestaw działań jest najbardziej skuteczny?",
    "options": [
      "Wyłącznie fermentacja",
      "Tylko stosowanie antybiotyków",
      "Szczepienia ochronne i higiena",
      "Jedynie wytwarzanie przetrwalników",
      "Spożywanie produktów z pleśnią",
      "Zaprzestanie mycia rąk"
    ],
    "answer": 2,
    "explanation": "Szczepienia ochronne oraz przestrzeganie zasad higieny pomagają ograniczać choroby wirusowe."
  },
  {
    "id": "R02_WIR_09",
    "section": "Wirusy",
    "type": "riddle",
    "prompt": "Jak nazywa się organizm, w którym wirus może się namnażać? Podaj jedno słowo.",
    "options": null,
    "altAnswers": [
      "gospodarz",
      "gospodarza"
    ],
    "answer": "gospodarz",
    "explanation": "Wirusy namnażają się jedynie w organizmie gospodarza."
  },
  {
    "id": "R02_WIR_10",
    "section": "Wirusy",
    "type": "sort",
    "prompt": "Przyporządkuj choroby wirusowe do grup gospodarzy.",
    "options": null,
    "items": [
      "pryszczyca",
      "odra",
      "szarka śliwy",
      "nosówka",
      "mozaika jabłoni",
      "ospa wietrzna"
    ],
    "categories": [
      "ludzie",
      "zwierzęta",
      "rośliny"
    ],
    "answer": {
      "ludzie": [
        "odra",
        "ospa wietrzna"
      ],
      "zwierzęta": [
        "nosówka",
        "pryszczyca"
      ],
      "rośliny": [
        "mozaika jabłoni",
        "szarka śliwy"
      ]
    },
    "explanation": "Choroby wirusowe mogą występować u ludzi, zwierząt i roślin."
  },
  {
    "id": "R02_WIR_11",
    "section": "Wirusy",
    "type": "true_false",
    "prompt": "Wirusy mają budowę komórkową, podobnie jak bakterie.",
    "options": null,
    "answer": false,
    "explanation": "Wirusy nie mają budowy komórkowej, natomiast bakterie są organizmami jednokomórkowymi."
  },
  {
    "id": "R02_WIR_12",
    "section": "Wirusy",
    "type": "single_choice",
    "prompt": "Który z poniższych kształtów może mieć wirus?",
    "options": [
      "kolonijny drzewiasty",
      "liściasty",
      "kapeluszowy",
      "strzępkowy",
      "bryłowo-spiralny",
      "owocnikowy"
    ],
    "image": "r02_ksztalty_wirusow.jpg",
    "answer": 4,
    "explanation": "Wirusy mogą mieć kształt pałeczkowaty, bryłowy lub bryłowo-spiralny."
  },
  {
    "id": "R02_BAK_01",
    "section": "Bakterie",
    "type": "single_choice",
    "prompt": "Co wyróżnia komórki bakterii spośród organizmów jądrowych?",
    "options": [
      "Brak wyodrębnionego jądra komórkowego",
      "Obecność wielu jąder w komórce",
      "Obecność owocnika",
      "Budowa wyłącznie z rzęsek",
      "Obecność tkanki mięśniowej",
      "Zawsze obecne chloroplasty"
    ],
    "image": "r02_komorka_bakteryjna.jpg",
    "answer": 0,
    "explanation": "Bakterie są prokariotami: nie mają wyodrębnionego jądra komórkowego."
  },
  {
    "id": "R02_BAK_02",
    "section": "Bakterie",
    "type": "fill_in",
    "prompt": "Nauka zajmująca się badaniem bakterii to __________.",
    "options": null,
    "altAnswers": [
      [
        "bakteriologia"
      ]
    ],
    "answer": [
      "bakteriologia"
    ],
    "explanation": "Bakteriologia jest nauką zajmującą się bakteriami."
  },
  {
    "id": "R02_BAK_03",
    "section": "Bakterie",
    "type": "multi_select",
    "prompt": "Które sposoby funkcjonowania są charakterystyczne dla bakterii?",
    "options": [
      "odżywianie samożywne lub cudzożywne",
      "oddychanie tlenowe lub beztlenowe",
      "rozmnażanie przez podział komórki",
      "wytwarzanie przetrwalników przez niektóre gatunki",
      "obowiązkowe wytwarzanie owocników"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Bakterie odżywiają się, oddychają tlenowo lub beztlenowo, rozmnażają przez podział, a niektóre tworzą przetrwalniki."
  },
  {
    "id": "R02_BAK_04",
    "section": "Bakterie",
    "type": "true_false",
    "prompt": "Wszystkie bakterie są cudzożywne.",
    "options": null,
    "answer": false,
    "explanation": "Większość bakterii jest cudzożywna, ale niektóre, np. sinice, są samożywne."
  },
  {
    "id": "R02_BAK_05",
    "section": "Bakterie",
    "type": "match",
    "prompt": "Dopasuj chorobę bakteryjną do drobnoustroju, który ją wywołuje.",
    "options": null,
    "left": [
      "gruźlica",
      "cholera",
      "tężec",
      "kiła"
    ],
    "right": [
      "krętek blady",
      "przecinkowiec cholery",
      "laseczka tężca",
      "prątek Kocha"
    ],
    "answer": {
      "gruźlica": "prątek Kocha",
      "cholera": "przecinkowiec cholery",
      "tężec": "laseczka tężca",
      "kiła": "krętek blady"
    },
    "explanation": "Każdej z wymienionych chorób bakteryjnych odpowiada właściwy czynnik chorobotwórczy."
  },
  {
    "id": "R02_BAK_06",
    "section": "Bakterie",
    "type": "single_choice",
    "prompt": "W jaki sposób bakterie rozmnażają się bezpłciowo?",
    "options": [
      "Przez wytwarzanie owocników",
      "Przez zapylenie",
      "Przez wytwarzanie nasion",
      "Przez podział komórki",
      "Przez tworzenie trzonu",
      "Wyłącznie przez wytwarzanie gamet"
    ],
    "answer": 3,
    "explanation": "Bakterie rozmnażają się bezpłciowo przez podział komórki."
  },
  {
    "id": "R02_BAK_07",
    "section": "Bakterie",
    "type": "riddle",
    "prompt": "Jak nazywa się silnie odwodniona forma wytwarzana przez niektóre bakterie do przetrwania niekorzystnych warunków?",
    "options": null,
    "altAnswers": [
      "przetrwalnik",
      "przetrwalniki"
    ],
    "answer": "przetrwalnik",
    "explanation": "Przetrwalniki są silnie odwodnionymi komórkami otoczonymi wielowarstwowymi osłonami."
  },
  {
    "id": "R02_BAK_08",
    "section": "Bakterie",
    "type": "sort",
    "prompt": "Połącz przykłady bakterii z opisem ich kształtu.",
    "options": null,
    "items": [
      "krętek blady",
      "gronkowiec złocisty",
      "pałeczka okrężnicy"
    ],
    "categories": [
      "kuliste",
      "cylindryczne",
      "spiralne"
    ],
    "image": "r02_ksztalty_bakterii.jpg",
    "answer": {
      "kuliste": [
        "gronkowiec złocisty"
      ],
      "cylindryczne": [
        "pałeczka okrężnicy"
      ],
      "spiralne": [
        "krętek blady"
      ]
    },
    "explanation": "Gronkowiec ma kształt kulisty, pałeczka cylindryczny, a krętek spiralny."
  },
  {
    "id": "R02_BAK_09",
    "section": "Bakterie",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, której nie zaliczono do bakteryjnych: gruźlica, cholera, odra, dżuma.",
    "options": null,
    "answer": "odra",
    "explanation": "Odra jest chorobą wirusową, a gruźlica, cholera i dżuma są chorobami bakteryjnymi."
  },
  {
    "id": "R02_BAK_10",
    "section": "Bakterie",
    "type": "scenario",
    "prompt": "Uczeń opisuje przydatną rolę bakterii podczas konserwowania żywności. Który przykład ilustruje takie zastosowanie?",
    "options": [
      "Wytwarzanie owocników grzybów",
      "Przygotowywanie kiszonek",
      "Zakażanie roślin mozaiką tytoniową",
      "Powstawanie zarodników pleśni",
      "Rozmnażanie pantofelka",
      "Wytwarzanie grzybni"
    ],
    "answer": 1,
    "explanation": "Bakterie są wykorzystywane do konserwowania żywności, m.in. podczas kiszenia."
  },
  {
    "id": "R02_BAK_11",
    "section": "Bakterie",
    "type": "single_choice",
    "prompt": "Jakie substancje stosuje się w leczeniu chorób bakteryjnych?",
    "options": [
      "chloroplasty",
      "zarodniki",
      "strzępki",
      "gamety",
      "antybiotyki",
      "wodniczki"
    ],
    "answer": 4,
    "explanation": "Antybiotyki to substancje stosowane w leczeniu zakażeń bakteryjnych."
  },
  {
    "id": "R02_BAK_12",
    "section": "Bakterie",
    "type": "multi_select",
    "prompt": "Wskaż korzystne role bakterii.",
    "options": [
      "rozkład szczątków organizmów",
      "udział w krążeniu materii",
      "prawidłowe funkcjonowanie układu pokarmowego",
      "powodowanie zatruć pokarmowych",
      "konserwowanie żywności"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Bakterie rozkładają szczątki organizmów, uczestniczą w krążeniu materii, wspomagają trawienie oraz konserwują część żywności."
  },
  {
    "id": "R02_BAK_13",
    "section": "Bakterie",
    "type": "true_false",
    "prompt": "Bakterie mogą oddychać zarówno tlenowo, jak i beztlenowo.",
    "options": null,
    "answer": true,
    "explanation": "Bakterie mogą oddychać tlenowo albo beztlenowo, m.in. przeprowadzając fermentację."
  },
  {
    "id": "R02_PRO_01",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej opisuje protisty?",
    "options": [
      "Są wyłącznie bezjądrowe",
      "Mogą być jedno- lub wielokomórkowe i mają jądro komórkowe",
      "Są wyłącznie wirusami",
      "Zawsze tworzą typowe tkanki",
      "Są zawsze zbudowane z chitynowych strzępek",
      "Występują wyłącznie na lądzie"
    ],
    "image": "r02_listownica.jpg",
    "answer": 1,
    "explanation": "Protisty to organizmy jądrowe o prostej budowie, jednokomórkowe lub wielokomórkowe."
  },
  {
    "id": "R02_PRO_02",
    "section": "Protisty",
    "type": "fill_in",
    "prompt": "Dział nauki zajmujący się badaniem pierwotniaków nazywa się __________.",
    "options": null,
    "altAnswers": [
      [
        "protozoologia"
      ]
    ],
    "answer": [
      "protozoologia"
    ],
    "explanation": "Protozoologia zajmuje się badaniem pierwotniaków."
  },
  {
    "id": "R02_PRO_03",
    "section": "Protisty",
    "type": "multi_select",
    "prompt": "Które z poniższych organizmów należą do protistów?",
    "options": [
      "pantofelek",
      "euglena zielona",
      "listownica",
      "drożdże piekarnicze",
      "gronkowiec złocisty"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pantofelek, euglena zielona i listownica to protisty. Drożdże należą do grzybów, a gronkowiec do bakterii."
  },
  {
    "id": "R02_PRO_04",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "W królestwie protistów występują organizmy jednokomórkowe i wielokomórkowe.",
    "options": null,
    "answer": true,
    "explanation": "Przykładem jednokomórkowego protista jest pantofelek, a wielokomórkowego – listownica."
  },
  {
    "id": "R02_PRO_05",
    "section": "Protisty",
    "type": "match",
    "prompt": "Połącz grupę protistów z jej charakterystyczną cechą.",
    "options": null,
    "left": [
      "zwierzęcopodobne",
      "roślinopodobne",
      "grzybopodobne"
    ],
    "right": [
      "chloroplasty i fotosynteza",
      "saprofityczny sposób odżywiania śluzorośli",
      "wodniczki pokarmowe i tętniące"
    ],
    "answer": {
      "zwierzęcopodobne": "wodniczki pokarmowe i tętniące",
      "roślinopodobne": "chloroplasty i fotosynteza",
      "grzybopodobne": "saprofityczny sposób odżywiania śluzorośli"
    },
    "explanation": "Podział protistów wyróżnia grupy podobne do zwierząt, roślin i grzybów, charakteryzowane tymi cechami."
  },
  {
    "id": "R02_PRO_06",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Za pomocą czego porusza się pantofelek?",
    "options": [
      "strzępek",
      "trzonu",
      "rzęsek",
      "zarodników",
      "kapelusza",
      "przetrwalników"
    ],
    "image": "r02_pantofelek.jpg",
    "answer": 2,
    "explanation": "Pantofelek porusza się dzięki licznym rzęskom na powierzchni komórki."
  },
  {
    "id": "R02_PRO_07",
    "section": "Protisty",
    "type": "riddle",
    "prompt": "Jak nazywa się wodniczka usuwająca z komórki protista nadmiar wody?",
    "options": null,
    "altAnswers": [
      "wodniczka tętniąca",
      "wodniczka tetniaca"
    ],
    "answer": "wodniczka tętniąca",
    "explanation": "Wodniczka tętniąca gromadzi nadmiar wody i usuwa go na zewnątrz."
  },
  {
    "id": "R02_PRO_08",
    "section": "Protisty",
    "type": "scenario",
    "prompt": "Pod mikroskopem uczeń widzi zielony jednokomórkowy organizm z chloroplastami, plamką światłoczułą i wicią. Którego protista przedstawia opis?",
    "options": [
      "euglena zielona",
      "pantofelek",
      "listownica",
      "śluzowiec",
      "fitoftora",
      "morszczyn"
    ],
    "image": "r02_euglena_zielona.jpg",
    "answer": 0,
    "explanation": "Euglena zielona ma chloroplasty, plamkę światłoczułą i wić; może odżywiać się samożywnie lub cudzożywnie."
  },
  {
    "id": "R02_PRO_09",
    "section": "Protisty",
    "type": "sort",
    "prompt": "Przyporządkuj choroby do grup organizmów, które je wywołują.",
    "options": null,
    "items": [
      "odra",
      "malaria",
      "grypa",
      "czerwonka pełzakowata"
    ],
    "categories": [
      "protisty",
      "wirusy"
    ],
    "answer": {
      "protisty": [
        "malaria",
        "czerwonka pełzakowata"
      ],
      "wirusy": [
        "odra",
        "grypa"
      ]
    },
    "explanation": "Malaria i czerwonka pełzakowata są podanymi chorobami wywoływanymi przez protisty; odra i grypa przez wirusy."
  },
  {
    "id": "R02_PRO_10",
    "section": "Protisty",
    "type": "fill_in",
    "prompt": "Wodniczki __________ trawią pożywienie, a wodniczki __________ usuwają nadmiar wody.",
    "options": null,
    "altAnswers": [
      [
        "pokarmowe"
      ],
      [
        "tętniące",
        "tetniace"
      ]
    ],
    "image": "r02_pantofelek.jpg",
    "answer": [
      "pokarmowe",
      "tętniące"
    ],
    "explanation": "Wodniczki pokarmowe uczestniczą w trawieniu, a wodniczki tętniące w usuwaniu nadmiaru wody."
  },
  {
    "id": "R02_PRO_11",
    "section": "Protisty",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm, który nie należy do protistów: pantofelek, ameba, listownica, laseczka tężca.",
    "options": null,
    "answer": "laseczka tężca",
    "explanation": "Laseczka tężca jest bakterią; pantofelek, ameba i listownica to przykłady protistów."
  },
  {
    "id": "R02_PRO_12",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Euglena zielona może odżywiać się samożywnie lub cudzożywnie.",
    "options": null,
    "answer": true,
    "explanation": "Zależnie od dostępności pożywienia euglena potrafi zmieniać sposób odżywiania."
  },
  {
    "id": "R02_PRO_13",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Co umożliwia fotosyntezę protistom roślinopodobnym?",
    "options": [
      "rzęski",
      "przetrwalniki",
      "wodniczki tętniące",
      "strzępki",
      "chloroplasty",
      "owocniki"
    ],
    "answer": 4,
    "explanation": "Protisty roślinopodobne mają chloroplasty i mogą przeprowadzać fotosyntezę."
  },
  {
    "id": "R02_GRZ_01",
    "section": "Grzyby",
    "type": "single_choice",
    "prompt": "Z jakiej substancji zbudowana jest ściana komórkowa większości grzybów?",
    "options": [
      "alkoholu",
      "chlorofilu",
      "chityny",
      "dwutlenku węgla",
      "celulozy",
      "białek otoczki wirusa"
    ],
    "answer": 2,
    "explanation": "Większość grzybów ma ścianę komórkową z chityny."
  },
  {
    "id": "R02_GRZ_02",
    "section": "Grzyby",
    "type": "fill_in",
    "prompt": "Sieć zbudowana ze strzępek grzyba nazywa się __________.",
    "options": null,
    "altAnswers": [
      [
        "grzybnią",
        "grzybnia"
      ]
    ],
    "image": "r02_strzepki_grzyba.jpg",
    "answer": [
      "grzybnią"
    ],
    "explanation": "Strzępki grzyba tworzą grzybnię, która może rozrastać się na wiele metrów."
  },
  {
    "id": "R02_GRZ_03",
    "section": "Grzyby",
    "type": "true_false",
    "prompt": "Grzyby są organizmami samożywnymi.",
    "options": null,
    "answer": false,
    "explanation": "Grzyby są heterotroficzne, czyli cudzożywne; odżywiają się m.in. saprofitycznie, pasożytniczo lub symbiotycznie."
  },
  {
    "id": "R02_GRZ_04",
    "section": "Grzyby",
    "type": "match",
    "prompt": "Połącz rodzaj grzybów z jego zastosowaniem lub funkcją.",
    "options": null,
    "left": [
      "drożdże piekarnicze",
      "drożdże winne",
      "grzyby pleśniowe",
      "grzyby owocnikowe"
    ],
    "right": [
      "produkcja niektórych serów",
      "tworzenie owocnika wytwarzającego zarodniki",
      "spulchnianie ciasta",
      "produkcja alkoholu w fermentacji"
    ],
    "answer": {
      "drożdże piekarnicze": "spulchnianie ciasta",
      "drożdże winne": "produkcja alkoholu w fermentacji",
      "grzyby pleśniowe": "produkcja niektórych serów",
      "grzyby owocnikowe": "tworzenie owocnika wytwarzającego zarodniki"
    },
    "explanation": "Drożdże piekarnicze wytwarzają CO₂, drożdże winne wytwarzają alkohol, pleśń bywa używana do serów, a owocnik wytwarza zarodniki."
  },
  {
    "id": "R02_GRZ_05",
    "section": "Grzyby",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne znaczenie grzybów.",
    "options": [
      "wykorzystanie drożdży w piekarnictwie",
      "rozkład martwych organizmów",
      "produkcja leków takich jak penicylina",
      "powodowanie grzybic",
      "psucie jedzenia przez pleśnie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Grzyby są używane w przemyśle spożywczym, rozkładają martwą materię i dostarczają substancji do produkcji leków, np. penicyliny."
  },
  {
    "id": "R02_GRZ_06",
    "section": "Grzyby",
    "type": "riddle",
    "prompt": "Jak nazywa się część grzyba kapeluszowego, która służy do wytwarzania i rozprzestrzeniania zarodników?",
    "options": null,
    "altAnswers": [
      "owocnik"
    ],
    "image": "r02_grzyb_kapeluszowy.jpg",
    "answer": "owocnik",
    "explanation": "Owocnik, zwykle złożony z trzonu i kapelusza, odpowiada za wytworzenie i rozprzestrzenienie zarodników."
  },
  {
    "id": "R02_GRZ_07",
    "section": "Grzyby",
    "type": "odd_one_out",
    "prompt": "Który element nie pasuje do budowy grzyba kapeluszowego: kapelusz, trzon, grzybnia, chloroplast.",
    "options": null,
    "answer": "chloroplast",
    "explanation": "Grzyb kapeluszowy ma kapelusz, trzon i grzybnię. Chloroplasty występują u protistów roślinopodobnych, a nie u grzybów."
  },
  {
    "id": "R02_GRZ_08",
    "section": "Grzyby",
    "type": "single_choice",
    "prompt": "Jaki gaz wydzielany przez drożdże piekarnicze sprawia, że ciasto jest pulchne?",
    "options": [
      "tlen",
      "dwutlenek węgla",
      "azot",
      "wodór",
      "hel",
      "ozon"
    ],
    "image": "r02_drozdze.jpg",
    "answer": 1,
    "explanation": "Podczas fermentacji drożdże wytwarzają dwutlenek węgla, który tworzy puste przestrzenie w cieście."
  },
  {
    "id": "R02_GRZ_09",
    "section": "Grzyby",
    "type": "sequence",
    "prompt": "Ułóż od początku do końca opis powstawania i roli owocnika grzyba.",
    "options": null,
    "items": [
      "wytworzenie owocnika",
      "pojedyncze strzępki",
      "wytworzenie i rozsianie zarodników",
      "powstanie grzybni"
    ],
    "image": "r02_grzyb_kapeluszowy.jpg",
    "answer": [
      "pojedyncze strzępki",
      "powstanie grzybni",
      "wytworzenie owocnika",
      "wytworzenie i rozsianie zarodników"
    ],
    "explanation": "Strzępki budują grzybnię; grzybnia wytwarza owocnik, który produkuje i rozsiewa zarodniki."
  },
  {
    "id": "R02_GRZ_10",
    "section": "Grzyby",
    "type": "sort",
    "prompt": "Uporządkuj opisy do wskazanych grup grzybów.",
    "options": null,
    "items": [
      "pleśń porastająca drewno",
      "drożdże winne",
      "grzybnia wytwarzająca owocnik",
      "drożdże piekarnicze",
      "pleśń pokrywająca żywność",
      "grzyb z kapeluszem i trzonem"
    ],
    "categories": [
      "grzyby jednokomórkowe",
      "grzyby owocnikowe",
      "grzyby pleśniowe"
    ],
    "image": "r02_plesn.jpg",
    "answer": {
      "grzyby jednokomórkowe": [
        "drożdże piekarnicze",
        "drożdże winne"
      ],
      "grzyby owocnikowe": [
        "grzyb z kapeluszem i trzonem",
        "grzybnia wytwarzająca owocnik"
      ],
      "grzyby pleśniowe": [
        "pleśń pokrywająca żywność",
        "pleśń porastająca drewno"
      ]
    },
    "explanation": "Drożdże są jednokomórkowe, grzyby owocnikowe wytwarzają owocnik, a grzyby pleśniowe rozrastają się strzępkami po podłożu."
  },
  {
    "id": "R02_GRZ_11",
    "section": "Grzyby",
    "type": "scenario",
    "prompt": "Piekarz dodaje do ciasta drożdże i pozostawia je na pewien czas. Dlaczego ciasto zwiększa swoją objętość?",
    "options": [
      "Powstają chloroplasty",
      "Komórki grzyba tworzą korzenie",
      "Wirusy namnażają się w cieście",
      "Dwutlenek węgla tworzy puste przestrzenie",
      "Bakterie wytwarzają przetrwalniki",
      "Pantofelki poruszają się rzęskami"
    ],
    "image": "r02_drozdze.jpg",
    "answer": 3,
    "explanation": "Drożdże przeprowadzają fermentację, wytwarzając dwutlenek węgla, który tworzy w cieście puste przestrzenie."
  },
  {
    "id": "R02_GRZ_12",
    "section": "Grzyby",
    "type": "single_choice",
    "prompt": "Gdzie wytwarzane są zarodniki grzybów pleśniowych?",
    "options": [
      "Na powierzchni grzybni",
      "Wyłącznie w jądrze pantofelka",
      "W przetrwalniku bakterii",
      "W chloroplastach",
      "W osłonce wirusa",
      "W plamce światłoczułej"
    ],
    "image": "r02_plesn.jpg",
    "answer": 0,
    "explanation": "W grzybach pleśniowych zarodniki powstają na powierzchni grzybni."
  },
  {
    "id": "R02_GRZ_13",
    "section": "Grzyby",
    "type": "true_false",
    "prompt": "Drożdże winne i piwowarskie podczas fermentacji przekształcają cukier w alkohol.",
    "options": null,
    "answer": true,
    "explanation": "Drożdże winne i piwowarskie podczas fermentacji wytwarzają alkohol."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dziedzinę biologii z grupą, którą się zajmuje.",
    "options": null,
    "left": [
      "wirusologia",
      "bakteriologia",
      "protozoologia"
    ],
    "right": [
      "pierwotniaki",
      "wirusy",
      "bakterie"
    ],
    "answer": {
      "wirusologia": "wirusy",
      "bakteriologia": "bakterie",
      "protozoologia": "pierwotniaki"
    },
    "explanation": "Wirusologia bada wirusy, bakteriologia bakterie, a protozoologia pierwotniaki."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj choroby do grup organizmów, które je wywołują.",
    "options": null,
    "items": [
      "tężec",
      "grzybice",
      "odra",
      "malaria",
      "różyczka",
      "cholera",
      "śpiączka afrykańska"
    ],
    "categories": [
      "wirusy",
      "bakterie",
      "protisty",
      "grzyby"
    ],
    "answer": {
      "wirusy": [
        "odra",
        "różyczka"
      ],
      "bakterie": [
        "cholera",
        "tężec"
      ],
      "protisty": [
        "malaria",
        "śpiączka afrykańska"
      ],
      "grzyby": [
        "grzybice"
      ]
    },
    "explanation": "Wirusy wywołują m.in. odrę i różyczkę, bakterie cholerę i tężec, protisty malarię i śpiączkę afrykańską, a grzyby grzybice."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Jakie cechy są wspólne protistom i grzybom?",
    "options": [
      "posiadanie jądra komórkowego",
      "występowanie rozmnażania bezpłciowego",
      "występowanie rozmnażania płciowego",
      "wyłącznie samożywne odżywianie",
      "wyłącznie jednokomórkowa budowa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Protisty i grzyby mają jądra komórkowe. W obu grupach występuje rozmnażanie płciowe i bezpłciowe, ale nie wszystkie są samożywne ani jednokomórkowe."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które porównanie wirusów i bakterii jest poprawne?",
    "options": [
      "Wirusy nie mają budowy komórkowej, bakterie nie mają wyodrębnionego jądra",
      "Wirusy mają jądro, bakterie mają owocniki",
      "Wirusy tworzą grzybnię, bakterie tworzą tkanki",
      "Wirusy i bakterie są wyłącznie wielokomórkowe",
      "Bakterie nie mają komórek, a wirusy mają jądro",
      "Wirusy rozmnażają się przez podział komórki, a bakterie tylko w gospodarzu"
    ],
    "image": "r02_komorka_bakteryjna.jpg",
    "answer": 0,
    "explanation": "Wirusy nie mają budowy komórkowej, a bakterie są organizmami prokariotycznymi, czyli bez wyodrębnionego jądra."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż podane kategorie systematyczne od najwęższej do najszerszej.",
    "options": null,
    "items": [
      "rodzina",
      "gatunek",
      "typ",
      "rząd",
      "królestwo",
      "rodzaj",
      "gromada"
    ],
    "answer": [
      "gatunek",
      "rodzaj",
      "rodzina",
      "rząd",
      "gromada",
      "typ",
      "królestwo"
    ],
    "explanation": "Kolejność od najwęższej do najszerszej stanowi odwrócenie szeregu od królestwa do gatunku."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż termin, który nie jest nazwą dziedziny badającej grupę organizmów: wirusologia, bakteriologia, protozoologia, fermentacja.",
    "options": null,
    "answer": "fermentacja",
    "explanation": "Fermentacja jest procesem metabolicznym, a pozostałe trzy określenia to nazwy dziedzin nauki."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz ogląda pod mikroskopem nitkowate strzępki tworzące grzybnię. Komórki obserwowanego organizmu mają ściany z chityny. Do jakiego królestwa należy organizm?",
    "options": [
      "bakterie",
      "grzyby",
      "protisty roślinopodobne",
      "wirusy",
      "zwierzęta",
      "rośliny"
    ],
    "image": "r02_strzepki_grzyba.jpg",
    "answer": 1,
    "explanation": "Strzępki, grzybnia i ściana komórkowa z chityny są cechami opisanymi przy grzybach."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wirusy nie mają __________ komórkowej, a bakterie nie mają wyodrębnionego __________.",
    "options": null,
    "altAnswers": [
      [
        "budowy"
      ],
      [
        "jądra komórkowego",
        "jądra"
      ]
    ],
    "answer": [
      "budowy",
      "jądra komórkowego"
    ],
    "explanation": "Wirusy nie są komórkami, a komórki bakterii są prokariotyczne, więc nie mają wyodrębnionego jądra."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę organizmów lub wirusów z charakterystycznym sposobem rozmnażania lub namnażania.",
    "options": null,
    "left": [
      "bakterie",
      "protisty",
      "grzyby",
      "wirusy"
    ],
    "right": [
      "bezpłciowo przez zarodniki lub płciowo",
      "namnażanie wyłącznie w organizmie gospodarza",
      "bezpłciowo przez podział komórki",
      "bezpłciowo przez podział oraz płciowo przez gamety"
    ],
    "answer": {
      "bakterie": "bezpłciowo przez podział komórki",
      "protisty": "bezpłciowo przez podział oraz płciowo przez gamety",
      "grzyby": "bezpłciowo przez zarodniki lub płciowo",
      "wirusy": "namnażanie wyłącznie w organizmie gospodarza"
    },
    "explanation": "Bakterie rozmnażają się przez podział, protisty m.in. przez podział lub z udziałem gamet, grzyby przez zarodniki lub płciowo, a wirusy namnażają się tylko w komórkach gospodarza."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Antybiotyki stosuje się w leczeniu zakażeń bakteryjnych, a szczepienia i higiena pomagają zapobiegać chorobom wirusowym.",
    "options": null,
    "answer": true,
    "explanation": "Antybiotyki są wykorzystywane w leczeniu chorób bakteryjnych, a szczepienia ochronne i higiena pomagają zapobiegać zakażeniom wirusowym."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz substancje wytwarzane lub przekształcane podczas fermentacji przeprowadzanej przez drożdże.",
    "options": [
      "dwutlenek węgla",
      "alkohol",
      "chloroplasty",
      "przetrwalniki",
      "wodniczki tętniące"
    ],
    "image": "r02_drozdze.jpg",
    "answer": [
      0,
      1
    ],
    "explanation": "Drożdże piekarnicze podczas fermentacji wytwarzają dwutlenek węgla, a drożdże winne i piwowarskie przekształcają cukier w alkohol."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wskazany przykład z cechą odróżniającą go od pozostałych.",
    "options": null,
    "left": [
      "bakteria",
      "euglena zielona",
      "drożdże",
      "wirus"
    ],
    "right": [
      "brak budowy komórkowej",
      "jednokomórkowe grzyby prowadzące fermentację",
      "brak wyodrębnionego jądra komórkowego",
      "chloroplasty i zmienny sposób odżywiania"
    ],
    "image": "r02_euglena_zielona.jpg",
    "answer": {
      "bakteria": "brak wyodrębnionego jądra komórkowego",
      "euglena zielona": "chloroplasty i zmienny sposób odżywiania",
      "drożdże": "jednokomórkowe grzyby prowadzące fermentację",
      "wirus": "brak budowy komórkowej"
    },
    "explanation": "Każdy opis dotyczy cechy charakterystycznej danej grupy organizmów lub wirusów."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wszystkie organizmy zdolne do fotosyntezy należą do królestwa roślin.",
    "options": null,
    "answer": false,
    "explanation": "Fotosyntezę mogą prowadzić także samożywne bakterie, np. sinice, oraz protisty roślinopodobne."
  }
];

const KID_PROMPTS = {
  "R02_SYS_01": "Co robi systematyka w biologii?",
  "R02_SYS_04": "Ustaw grupy organizmów od największej do najmniejszej.",
  "R02_SYS_05": "Które grupy organizmów mają jądro w komórkach?",
  "R02_WIR_01": "Dlaczego wirusy nie należą do królestw organizmów?",
  "R02_WIR_08": "Co pomaga zapobiegać chorobom wirusowym?",
  "R02_BAK_01": "Czego nie ma w środku komórki bakterii?",
  "R02_BAK_08": "Połącz bakterie z ich kształtami.",
  "R02_PRO_01": "Jakie są protisty?",
  "R02_PRO_05": "Połącz rodzaje protistów z ich cechami.",
  "R02_PRO_08": "Jaki protist ma chloroplasty, plamkę i wić?",
  "R02_GRZ_01": "Z czego jest zbudowana ściana komórki grzyba?",
  "R02_GRZ_09": "W jakiej kolejności powstają strzępki, grzybnia, owocnik i zarodniki?",
  "R02_GRZ_11": "Co powoduje, że ciasto z drożdżami rośnie?",
  "R02_HARD_03": "Co łączy protisty i grzyby?",
  "R02_HARD_08": "Uzupełnij: czego brakuje wirusom i bakteriom?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Wirusy, bakterie, grzyby i protisty",
  icon: "🦠",
  sectionOrder: [
    "Systematyka organizmów",
    "Wirusy",
    "Bakterie",
    "Protisty",
    "Grzyby"
  ],
  sectionIcons: {
    "Systematyka organizmów": "🧬",
    "Wirusy": "🦠",
    "Bakterie": "🔬",
    "Protisty": "🧫",
    "Grzyby": "🍄"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
