const ALL_EXERCISES = [
  {
    "id": "R03_KLASYF_01",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "single_choice",
    "prompt": "Co to jest gatunek?",
    "options": [
      "grupa różnych królestw",
      "grupa podobnych osobników, które mogą wydać płodne potomstwo",
      "najwyższa jednostka systematyczna",
      "nazwisko badacza"
    ],
    "answer": 1,
    "explanation": "Gatunek to grupa podobnych osobników, które mogą się ze sobą krzyżować i wydawać płodne potomstwo."
  },
  {
    "id": "R03_KLASYF_02",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "single_choice",
    "prompt": "W jakim języku zapisuje się naukowe nazwy organizmów?",
    "options": [
      "po polsku",
      "po łacinie",
      "po angielsku",
      "po grecku"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_nazwa_gatunkowa.jpg",
    "explanation": "Naukowe nazwy organizmów zapisuje się w języku łacińskim, dzięki czemu są zrozumiałe dla biologów na całym świecie."
  },
  {
    "id": "R03_KLASYF_03",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "true_false",
    "prompt": "Nazwa gatunkowa jest dwuczłonowa.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Naukowa nazwa gatunku składa się z dwóch części: nazwy rodzajowej i epitetu gatunkowego."
  },
  {
    "id": "R03_KLASYF_04",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "riddle",
    "prompt": "Jestem podstawową jednostką w systematyce. Kim jestem?",
    "options": null,
    "answer": "gatunek",
    "altAnswers": [
      "gatunek",
      "gatunkiem",
      "gatunku"
    ],
    "explanation": "Podstawową jednostką w systematyce jest gatunek."
  },
  {
    "id": "R03_KLASYF_05",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "single_choice",
    "prompt": "Jaka jest najwyższa jednostka systematyczna?",
    "options": [
      "rodzina",
      "rodzaj",
      "królestwo",
      "gatunek"
    ],
    "answer": 2,
    "explanation": "Najwyższą jednostką systematyczną jest królestwo."
  },
  {
    "id": "R03_KLASYF_06",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "sequence",
    "prompt": "Ułóż jednostki systematyczne zwierząt od najmniejszej do największej.",
    "options": null,
    "items": [
      "rodzina",
      "królestwo",
      "gatunek",
      "rząd",
      "rodzaj",
      "typ",
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
    "explanation": "W królestwie zwierząt kolejność od najmniejszej jednostki do największej to: gatunek, rodzaj, rodzina, rząd, gromada, typ, królestwo."
  },
  {
    "id": "R03_KLASYF_07",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "scenario",
    "prompt": "Spójrz na ilustrację z liśćmi. Widzisz liść z wyraźnymi wcięciami. Do którego drzewa należy?",
    "options": [
      "do brzozy",
      "do dębu",
      "do jodły",
      "do sosny"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_klucz_lisci_drzewa.jpg",
    "explanation": "Liść z wyraźnymi wcięciami to liść dębu."
  },
  {
    "id": "R03_KLASYF_08",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "sort",
    "prompt": "Przyporządkuj drzewa do właściwej grupy liści.",
    "options": null,
    "items": [
      "świerk",
      "jodła",
      "brzoza",
      "dąb"
    ],
    "categories": [
      "wąskie liście w kształcie igieł",
      "szerokie liście"
    ],
    "answer": {
      "wąskie liście w kształcie igieł": [
        "świerk",
        "jodła"
      ],
      "szerokie liście": [
        "brzoza",
        "dąb"
      ]
    },
    "explanation": "Świerk i jodła mają igły, a brzoza i dąb mają szerokie liście."
  },
  {
    "id": "R03_KLASYF_09",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "fill_in",
    "prompt": "Uzupełnij: Jednostką niższą niż gatunek jest u zwierząt __________, a u roślin __________.",
    "options": null,
    "answer": [
      "rasa",
      "odmiana"
    ],
    "altAnswers": [
      [
        "rasa",
        "rasa zwierząt",
        "rasą"
      ],
      [
        "odmiana",
        "odmianą",
        "odmiany"
      ]
    ],
    "explanation": "Niżej niż gatunek znajduje się rasa u zwierząt i odmiana u roślin."
  },
  {
    "id": "R03_KLASYF_10",
    "section": "Kto jest kim w świecie organizmów?",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie królestwa organizmów opisane w rozdziale.",
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
    "image": "/img/bbt_r03_krolestwa_organizmy.jpg",
    "explanation": "W rozdziale wymieniono pięć królestw organizmów: bakterie, protisty, grzyby, rośliny i zwierzęta. Wirusy nie są zaliczane do świata organizmów."
  },
  {
    "id": "R03_WIRUSY_01",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "single_choice",
    "prompt": "Z czego zbudowany jest wirus?",
    "options": [
      "z komórki z jądrem",
      "z otoczki białkowej i materiału genetycznego",
      "z cytoplazmy i chloroplastów",
      "ze ściany komórkowej i wakuoli"
    ],
    "answer": 1,
    "explanation": "Wirus składa się z otoczki białkowej oraz materiału genetycznego - DNA lub RNA."
  },
  {
    "id": "R03_WIRUSY_02",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "true_false",
    "prompt": "Wirus ma budowę komórkową.",
    "options": null,
    "answer": false,
    "image": "/img/bbt_r03_budowa_wirusa.jpg",
    "explanation": "To fałsz. Wirusy nie mają budowy komórkowej."
  },
  {
    "id": "R03_WIRUSY_03",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "single_choice",
    "prompt": "Dlaczego wirusy nie są zaliczane do organizmów?",
    "options": [
      "bo są zbyt duże",
      "bo nie mają budowy komórkowej i nie wykonują czynności życiowych",
      "bo żyją tylko w wodzie",
      "bo mają chloroplasty"
    ],
    "answer": 1,
    "explanation": "Wirusy nie mają budowy komórkowej i nie wykonują samodzielnie czynności życiowych, dlatego nie są zaliczane do organizmów."
  },
  {
    "id": "R03_WIRUSY_04",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "riddle",
    "prompt": "Składam się z białkowej otoczki i materiału genetycznego, ale nie jestem organizmem. Kim jestem?",
    "options": null,
    "answer": "wirus",
    "altAnswers": [
      "wirus",
      "wirusem",
      "wirusa"
    ],
    "explanation": "Tak opisujemy wirusa."
  },
  {
    "id": "R03_WIRUSY_05",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "scenario",
    "prompt": "Chora osoba kaszle obok ciebie i wyrzuca z ust drobne krople z wirusem. Jak nazywa się ta droga zakażenia?",
    "options": [
      "droga kropelkowa",
      "krew",
      "ciąża i poród",
      "drogi moczowo-płciowe"
    ],
    "answer": 0,
    "image": "/img/bbt_r03_drogi_wirusy.jpg",
    "explanation": "Kaszel i kichanie rozprzestrzeniają wirusy drogą kropelkową."
  },
  {
    "id": "R03_WIRUSY_06",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "multi_select",
    "prompt": "Zaznacz działania, które pomagają zapobiegać chorobom wirusowym.",
    "options": [
      "szczepienia profilaktyczne",
      "częste mycie rąk",
      "dotykanie oczu i nosa brudnymi rękami",
      "wietrzenie pokoju",
      "zachowywanie odstępu od osoby kichającej"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Profilaktyka obejmuje między innymi szczepienia, mycie rąk, wietrzenie pokoju i unikanie bliskiego kontaktu z osobą chorą."
  },
  {
    "id": "R03_WIRUSY_07",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "true_false",
    "prompt": "Pandemia to epidemia o bardzo dużych rozmiarach, obejmująca nawet kontynenty.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Pandemia obejmuje bardzo duży obszar, nawet kilka kontynentów."
  },
  {
    "id": "R03_WIRUSY_08",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "fill_in",
    "prompt": "Uzupełnij: W wirusie znajdują się __________ oraz materiał genetyczny DNA lub RNA.",
    "options": null,
    "answer": [
      "otoczka białkowa"
    ],
    "altAnswers": [
      [
        "otoczka białkowa",
        "otoczki białkowe",
        "otoczka",
        "białkowa otoczka"
      ]
    ],
    "explanation": "Wirus składa się z otoczki białkowej i materiału genetycznego."
  },
  {
    "id": "R03_WIRUSY_09",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "sequence",
    "prompt": "Ułóż etapy namnażania się wirusa w dobrej kolejności.",
    "options": null,
    "items": [
      "wirusy opuszczają komórkę",
      "wirus wnika do komórki",
      "powstaje wiele nowych wirusów"
    ],
    "answer": [
      "wirus wnika do komórki",
      "powstaje wiele nowych wirusów",
      "wirusy opuszczają komórkę"
    ],
    "image": "/img/bbt_r03_cykl_wirusa.jpg",
    "explanation": "Najpierw wirus wnika do komórki, potem się w niej namnaża, a na końcu nowe wirusy ją opuszczają."
  },
  {
    "id": "R03_WIRUSY_10",
    "section": "Dlaczego wirusy nie są zaliczane do świata organizmów?",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: droga kropelkowa, krew, ciąża i poród, fotosynteza.",
    "options": null,
    "answer": "fotosynteza",
    "explanation": "Trzy pierwsze odpowiedzi to drogi rozprzestrzeniania się wirusów. Fotosynteza nie ma z tym związku."
  },
  {
    "id": "R03_BAKT_01",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "single_choice",
    "prompt": "Jak najłatwiej zobaczyć bakterie?",
    "options": [
      "gołym okiem",
      "przez lornetkę",
      "pod mikroskopem",
      "w teleskopie"
    ],
    "answer": 2,
    "explanation": "Bakterie są bardzo małe, dlatego można je dostrzec dopiero pod mikroskopem."
  },
  {
    "id": "R03_BAKT_02",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "match",
    "prompt": "Połącz formę bakterii z przykładem.",
    "options": null,
    "left": [
      "wydłużone",
      "kuliste",
      "skręcone"
    ],
    "right": [
      "np. pałeczki i laseczki",
      "np. dwoinki i gronkowce",
      "np. krętki i śrubowce"
    ],
    "answer": {
      "wydłużone": "np. pałeczki i laseczki",
      "kuliste": "np. dwoinki i gronkowce",
      "skręcone": "np. krętki i śrubowce"
    },
    "image": "/img/bbt_r03_formy_bakterii.jpg",
    "explanation": "Bakterie mogą mieć różne kształty: wydłużony, kulisty lub skręcony."
  },
  {
    "id": "R03_BAKT_03",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "true_false",
    "prompt": "Bakterie mogą mieć formy kuliste, wydłużone albo skręcone.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale pokazano trzy podstawowe formy bakterii."
  },
  {
    "id": "R03_BAKT_04",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "sequence",
    "prompt": "Ułóż etapy podziału komórki bakterii.",
    "options": null,
    "items": [
      "powstają dwie komórki potomne",
      "komórka macierzysta",
      "komórka w trakcie podziału"
    ],
    "answer": [
      "komórka macierzysta",
      "komórka w trakcie podziału",
      "powstają dwie komórki potomne"
    ],
    "image": "/img/bbt_r03_podzial_bakterii.jpg",
    "explanation": "Najpierw jest komórka macierzysta, potem dzieli się, a na końcu powstają dwie komórki potomne."
  },
  {
    "id": "R03_BAKT_05",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "single_choice",
    "prompt": "Co może powstać, gdy komórki potomne po podziale nie rozdzielą się całkowicie?",
    "options": [
      "liść",
      "kolonia bakterii",
      "chloroplast",
      "owocnik"
    ],
    "answer": 1,
    "explanation": "Jeżeli komórki pozostaną połączone, może powstać kolonia bakterii."
  },
  {
    "id": "R03_BAKT_06",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "multi_select",
    "prompt": "Skąd bakterie cudzożywne mogą pobierać pokarm?",
    "options": [
      "z martwych szczątków organizmów",
      "ze współpracy z innymi organizmami",
      "z innych organizmów",
      "tylko ze światła słonecznego"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Bakterie cudzożywne pobierają gotowe związki organiczne - z martwych szczątków, od innych organizmów albo dzięki współpracy z nimi."
  },
  {
    "id": "R03_BAKT_07",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "scenario",
    "prompt": "Na ilustracji widać różne źródła pokarmu bakterii. Które bakterie współpracują z organizmem i wymieniają z nim korzyści?",
    "options": [
      "bakterie jelitowe",
      "bakterie z martwych szczątków",
      "bakterie chorobotwórcze",
      "żadne bakterie"
    ],
    "answer": 0,
    "image": "/img/bbt_r03_zrodla_pokarmu_bakterii.jpg",
    "explanation": "Bakterie jelitowe są przykładem bakterii, które współpracują z innym organizmem."
  },
  {
    "id": "R03_BAKT_08",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "single_choice",
    "prompt": "Jak nazywają się bakterie, które oddychają z udziałem tlenu?",
    "options": [
      "beztlenowe",
      "tlenowe",
      "wielokomórkowe",
      "pasożytnicze"
    ],
    "answer": 1,
    "explanation": "Bakterie wykorzystujące tlen w oddychaniu nazywamy bakteriami tlenowymi."
  },
  {
    "id": "R03_BAKT_09",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "true_false",
    "prompt": "Niektóre bakterie mogą uzyskiwać energię bez udziału tlenu, na przykład w procesie fermentacji.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Tak działają bakterie beztlenowe."
  },
  {
    "id": "R03_BAKT_10",
    "section": "Co dziś wiemy o bakteriach?",
    "type": "fill_in",
    "prompt": "Uzupełnij: Bakterie rozmnażają się przez __________ komórki.",
    "options": null,
    "answer": [
      "podział"
    ],
    "altAnswers": [
      [
        "podział",
        "podzial",
        "dzielenie",
        "podział komórki",
        "dzielenie komórki"
      ]
    ],
    "explanation": "Bakterie rozmnażają się przez podział komórki."
  },
  {
    "id": "R03_PROT_01",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "single_choice",
    "prompt": "Co jest wspólną cechą wszystkich protistów?",
    "options": [
      "brak jądra komórkowego",
      "obecność jądra komórkowego",
      "zawsze brak ściany komórkowej",
      "zawsze wielokomórkowa budowa"
    ],
    "answer": 1,
    "explanation": "Wspólną cechą wszystkich protistów jest obecność jądra komórkowego."
  },
  {
    "id": "R03_PROT_02",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "true_false",
    "prompt": "Wśród protistów są organizmy jednokomórkowe i wielokomórkowe.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W królestwie protistów są zarówno formy jedno-, jak i wielokomórkowe."
  },
  {
    "id": "R03_PROT_03",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odpowiednich grup protistów.",
    "options": null,
    "items": [
      "pantofelek",
      "euglena zielona",
      "wykwit piankowaty"
    ],
    "categories": [
      "protisty zwierzęce",
      "protisty roślinopodobne",
      "protisty grzybopodobne"
    ],
    "answer": {
      "protisty zwierzęce": [
        "pantofelek"
      ],
      "protisty roślinopodobne": [
        "euglena zielona"
      ],
      "protisty grzybopodobne": [
        "wykwit piankowaty"
      ]
    },
    "image": "/img/bbt_r03_grupy_protistow.jpg",
    "explanation": "Pantofelek to protist zwierzęcy, euglena zielona jest protistem roślinopodobnym, a wykwit piankowaty należy do protistów grzybopodobnych."
  },
  {
    "id": "R03_PROT_04",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "single_choice",
    "prompt": "Jak potocznie nazywa się protisty zwierzęce?",
    "options": [
      "porosty",
      "pierwotniaki",
      "strzępki",
      "zarodnie"
    ],
    "answer": 1,
    "explanation": "Protisty zwierzęce potocznie nazywa się pierwotniakami."
  },
  {
    "id": "R03_PROT_05",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "multi_select",
    "prompt": "Zaznacz cechy protistów roślinopodobnych.",
    "options": [
      "mają chloroplasty",
      "mogą być jedno- lub wielokomórkowe",
      "nie mają ściany komórkowej",
      "są potocznie nazywane glonami"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Protisty roślinopodobne mają chloroplasty, mogą być jedno- lub wielokomórkowe i często nazywa się je glonami."
  },
  {
    "id": "R03_PROT_06",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "scenario",
    "prompt": "Pantofelek poluje na drobne organizmy w wodzie. Jak nazywamy taki sposób odżywiania?",
    "options": [
      "cudzożywność",
      "samożywność",
      "fotosynteza",
      "kiełkowanie"
    ],
    "answer": 0,
    "image": "/img/bbt_r03_pantofelek_budowa.jpg",
    "explanation": "Pantofelek jest protistem cudzożywnym - pobiera gotowy pokarm ze środowiska."
  },
  {
    "id": "R03_PROT_07",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "single_choice",
    "prompt": "Która część eugleny pomaga jej poruszać się w wodzie?",
    "options": [
      "plamka czerwona",
      "jądro",
      "wić",
      "ściana komórkowa"
    ],
    "answer": 2,
    "explanation": "Euglena porusza się dzięki wici."
  },
  {
    "id": "R03_PROT_08",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "match",
    "prompt": "Połącz element budowy eugleny z jego funkcją.",
    "options": null,
    "left": [
      "wić",
      "plamka czerwona",
      "chloroplasty"
    ],
    "right": [
      "umożliwia ruch",
      "wykrywa światło",
      "przeprowadzają fotosyntezę"
    ],
    "answer": {
      "wić": "umożliwia ruch",
      "plamka czerwona": "wykrywa światło",
      "chloroplasty": "przeprowadzają fotosyntezę"
    },
    "image": "/img/bbt_r03_euglena_budowa.jpg",
    "explanation": "Wić pomaga się poruszać, plamka czerwona reaguje na światło, a chloroplasty przeprowadzają fotosyntezę."
  },
  {
    "id": "R03_PROT_09",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "single_choice",
    "prompt": "Jak rozmnażają się bezpłciowo protisty jednokomórkowe, na przykład pantofelek?",
    "options": [
      "przez podział komórki",
      "przez pączkowanie",
      "przez tworzenie owocników",
      "przez wytwarzanie nasion"
    ],
    "answer": 0,
    "explanation": "Protisty jednokomórkowe rozmnażają się bezpłciowo przez podział komórki."
  },
  {
    "id": "R03_PROT_10",
    "section": "Jak są zbudowane i jak funkcjonują protisty?",
    "type": "fill_in",
    "prompt": "Uzupełnij: Euglena zielona jest protistem __________, bo przy świetle może fotosyntetyzować, a w ciemności pobiera pokarm ze środowiska.",
    "options": null,
    "answer": [
      "zmiennożywnym"
    ],
    "altAnswers": [
      [
        "zmiennożywnym",
        "zmiennożywna",
        "zmiennożywna",
        "zmiennożywny"
      ]
    ],
    "explanation": "Euglena potrafi odżywiać się na dwa sposoby, dlatego jest protistem zmiennożywnym."
  },
  {
    "id": "R03_GRZY_01",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "single_choice",
    "prompt": "Z czego zbudowana jest ściana komórkowa grzybów?",
    "options": [
      "z celulozy",
      "z chityny",
      "z chlorofilu",
      "z tłuszczu"
    ],
    "answer": 1,
    "explanation": "Ściana komórkowa grzybów jest zbudowana z chityny."
  },
  {
    "id": "R03_GRZY_02",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "multi_select",
    "prompt": "Zaznacz cechy grzybów.",
    "options": [
      "mają jądro komórkowe",
      "mają chloroplasty",
      "są cudzożywne",
      "mogą być jedno- lub wielokomórkowe"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Grzyby mają jądro komórkowe, są cudzożywne i mogą być jedno- lub wielokomórkowe. Nie mają chloroplastów."
  },
  {
    "id": "R03_GRZY_03",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "single_choice",
    "prompt": "Jak nazywa się ciało grzyba, które często ma postać długich nitek?",
    "options": [
      "owocnik",
      "grzybnia",
      "kolonia",
      "wodniczka"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_cechy_grzybow.jpg",
    "explanation": "Ciało grzybów to grzybnia. Często ma postać długich nitek, czyli strzępek."
  },
  {
    "id": "R03_GRZY_04",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "true_false",
    "prompt": "Grzyby mają chloroplasty.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Grzyby nie mają chloroplastów."
  },
  {
    "id": "R03_GRZY_05",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "scenario",
    "prompt": "Na chlebie pojawił się biały nalot, a potem ciemne kropki. Jaki grzyb tam rośnie?",
    "options": [
      "drożdże",
      "pleśniak",
      "porost",
      "borowik"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_drozdze_plesniak.jpg",
    "explanation": "Pleśniak rośnie na produktach spożywczych i powoduje ich pleśnienie."
  },
  {
    "id": "R03_GRZY_06",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "fill_in",
    "prompt": "Uzupełnij: Drożdże rozmnażają się przez __________.",
    "options": null,
    "answer": [
      "pączkowanie"
    ],
    "altAnswers": [
      [
        "pączkowanie",
        "paczkowanie",
        "pączkowanie się"
      ]
    ],
    "explanation": "Drożdże rozmnażają się przez pączkowanie."
  },
  {
    "id": "R03_GRZY_07",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "single_choice",
    "prompt": "Jak nazywają się długie nitki budujące ciało wielu grzybów?",
    "options": [
      "rzęski",
      "strzępki",
      "igły",
      "wici"
    ],
    "answer": 1,
    "explanation": "Długie nitki budujące grzybnię to strzępki."
  },
  {
    "id": "R03_GRZY_08",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "single_choice",
    "prompt": "Co widać na ilustracji pod ziemią pod grzybem kapeluszowym?",
    "options": [
      "nasiona",
      "grzybnię",
      "korzenie zwierzęcia",
      "zarodki wirusa"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_grzyb_kapeluszowy.jpg",
    "explanation": "Pod ziemią znajduje się grzybnia - sieć luźno ułożonych strzępek."
  },
  {
    "id": "R03_GRZY_09",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "match",
    "prompt": "Połącz partnera porostu z jego zadaniem.",
    "options": null,
    "left": [
      "glon",
      "grzyb"
    ],
    "right": [
      "wytwarza cukier",
      "dostarcza wodę i sole mineralne"
    ],
    "answer": {
      "glon": "wytwarza cukier",
      "grzyb": "dostarcza wodę i sole mineralne"
    },
    "explanation": "W poroście glon prowadzi fotosyntezę i daje cukier, a grzyb dostarcza wodę i sole mineralne."
  },
  {
    "id": "R03_GRZY_10",
    "section": "Czym charakteryzuje się królestwo grzybów?",
    "type": "true_false",
    "prompt": "Niektóre grzyby mogą oddychać beztlenowo.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. Przykładem grzybów mogących oddychać beztlenowo są drożdże."
  },
  {
    "id": "R03_SUPER_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W nazwie naukowej Canis familiaris który wyraz oznacza nazwę rodzajową?",
    "options": [
      "Canis",
      "familiaris",
      "oba wyrazy razem oznaczają rodzaj",
      "żaden"
    ],
    "answer": 0,
    "image": "/img/bbt_r03_nazwa_gatunkowa.jpg",
    "explanation": "W nazwie Canis familiaris wyraz Canis jest nazwą rodzajową, a familiaris to epitet gatunkowy."
  },
  {
    "id": "R03_SUPER_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Masz przed sobą liście w kształcie igieł. Wyrastają pojedynczo z gałązki i są tępo zakończone. Jakie to drzewo?",
    "options": [
      "świerk",
      "jodła",
      "sosna",
      "modrzew"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_klucz_lisci_drzewa.jpg",
    "explanation": "Igły wyrastające pojedynczo i tępo zakończone są cechą jodły."
  },
  {
    "id": "R03_SUPER_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która jednostka systematyczna występuje u zwierząt, ale nie w podanym zestawie roślin?",
    "options": [
      "rodzina",
      "rodzaj",
      "typ",
      "gatunek"
    ],
    "answer": 2,
    "explanation": "W zestawie zwierząt pojawia się typ, a u roślin zamiast niego używa się gromady."
  },
  {
    "id": "R03_SUPER_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: U zwierząt niżej niż gatunek znajduje się __________, a u roślin __________.",
    "options": null,
    "answer": [
      "rasa",
      "odmiana"
    ],
    "altAnswers": [
      [
        "rasa",
        "rasa zwierząt",
        "rasą"
      ],
      [
        "odmiana",
        "odmianą",
        "odmiany"
      ]
    ],
    "explanation": "Pod gatunkiem znajduje się rasa u zwierząt i odmiana u roślin."
  },
  {
    "id": "R03_SUPER_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Czym pandemia różni się od epidemii?",
    "options": [
      "dotyczy tylko zwierząt",
      "obejmuje bardzo duży obszar, nawet kontynenty",
      "trwa krócej",
      "powodują ją tylko bakterie"
    ],
    "answer": 1,
    "explanation": "Pandemia to epidemia o bardzo dużym zasięgu - może obejmować nawet kontynenty."
  },
  {
    "id": "R03_SUPER_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie argumenty z rozdziału, które pokazują, że wirusy nie są organizmami.",
    "options": [
      "nie mają budowy komórkowej",
      "nie wykonują samodzielnie czynności życiowych",
      "mają DNA lub RNA",
      "rozmnażają się tylko w komórce gospodarza"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "image": "/img/bbt_r03_budowa_wirusa.jpg",
    "explanation": "To, że wirusy mają DNA lub RNA, upodabnia je do organizmów. Nie zalicza się ich jednak do organizmów, bo nie mają budowy komórkowej, nie wykonują czynności życiowych i namnażają się tylko w komórkach gospodarza."
  },
  {
    "id": "R03_SUPER_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który opis najlepiej pasuje do wirusa?",
    "options": [
      "komórka z jądrem i chloroplastami",
      "otoczka białkowa oraz DNA lub RNA",
      "ściana komórkowa i cytoplazma",
      "strzępki i zarodnie"
    ],
    "answer": 1,
    "explanation": "Wirus składa się z otoczki białkowej i materiału genetycznego - DNA lub RNA."
  },
  {
    "id": "R03_SUPER_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Udzielasz pierwszej pomocy osobie, która krwawi. Jaką zasadę profilaktyki z rozdziału trzeba zastosować?",
    "options": [
      "umyć owoce",
      "założyć jednorazowe rękawiczki",
      "otworzyć okno",
      "zjeść witaminy"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_drogi_wirusy.jpg",
    "explanation": "Przy kontakcie z krwią należy używać jednorazowych rękawiczek."
  },
  {
    "id": "R03_SUPER_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jeśli jedna bakteria dzieli się co 20 minut i wszystkie komórki przeżywają, to ile komórek będzie po 120 minutach?",
    "options": [
      "16",
      "32",
      "64",
      "128"
    ],
    "answer": 2,
    "image": "/img/bbt_r03_podzial_bakterii.jpg",
    "explanation": "Liczba komórek podwaja się co 20 minut: 1, 2, 4, 8, 16, 32, 64. Po 120 minutach będzie 64 komórek."
  },
  {
    "id": "R03_SUPER_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "A ile komórek bakterii będzie po 200 minutach, jeśli podział zachodzi co 20 minut i startujemy od 1 komórki?",
    "options": [
      "256",
      "512",
      "1024",
      "2048"
    ],
    "answer": 2,
    "explanation": "Po 200 minutach mamy 10 podwojeń: 1 → 2 → 4 → 8 → 16 → 32 → 64 → 128 → 256 → 512 → 1024."
  },
  {
    "id": "R03_SUPER_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Większość bakterii jest samożywna.",
    "options": null,
    "answer": false,
    "explanation": "To fałsz. Większość bakterii jest cudzożywna."
  },
  {
    "id": "R03_SUPER_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odpowiedniego typu oddychania bakterii.",
    "options": null,
    "items": [
      "wykorzystują tlen",
      "fermentacja",
      "żyją bez udziału tlenu",
      "oddychanie tlenowe"
    ],
    "categories": [
      "bakterie tlenowe",
      "bakterie beztlenowe"
    ],
    "answer": {
      "bakterie tlenowe": [
        "wykorzystują tlen",
        "oddychanie tlenowe"
      ],
      "bakterie beztlenowe": [
        "fermentacja",
        "żyją bez udziału tlenu"
      ]
    },
    "explanation": "Bakterie tlenowe wykorzystują tlen, a bakterie beztlenowe żyją i uzyskują energię bez udziału tlenu, na przykład dzięki fermentacji."
  },
  {
    "id": "R03_SUPER_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która grupa protistów ma komórki podobne do komórek grzybów - ze ścianą komórkową i bez chloroplastów?",
    "options": [
      "protisty zwierzęce",
      "protisty roślinopodobne",
      "protisty grzybopodobne",
      "żadna"
    ],
    "answer": 2,
    "explanation": "Takie cechy mają protisty grzybopodobne."
  },
  {
    "id": "R03_SUPER_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Euglena znalazła się w ciemnym miejscu, gdzie brakuje światła. Jak będzie zdobywać pokarm?",
    "options": [
      "przez fotosyntezę jak zwykle",
      "stanie się cudzożywna i pobierze pokarm ze środowiska",
      "przestanie oddychać",
      "zamieni się w grzyb"
    ],
    "answer": 1,
    "image": "/img/bbt_r03_euglena_budowa.jpg",
    "explanation": "Euglena jest zmiennożywna. W świetle fotosyntetyzuje, a w ciemności pobiera pokarm ze środowiska."
  },
  {
    "id": "R03_SUPER_15",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pantofelek jest protistem cudzożywnym i drapieżnikiem.",
    "options": null,
    "answer": true,
    "explanation": "To prawda. W rozdziale pantofelek został podany jako protist cudzożywny i drapieżnik."
  },
  {
    "id": "R03_SUPER_16",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz typ protista z bezpłciowym sposobem rozmnażania.",
    "options": null,
    "left": [
      "protist jednokomórkowy",
      "protist wielokomórkowy"
    ],
    "right": [
      "podział komórki",
      "fragmentacja ciała"
    ],
    "answer": {
      "protist jednokomórkowy": "podział komórki",
      "protist wielokomórkowy": "fragmentacja ciała"
    },
    "explanation": "Protisty jednokomórkowe rozmnażają się przez podział komórki, a wielokomórkowe mogą rozmnażać się przez fragmentację ciała."
  },
  {
    "id": "R03_SUPER_17",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego królestwo protistów nazwano w rozdziale sztuczną jednostką systematyczną?",
    "options": [
      "bo żyją tylko w laboratorium",
      "bo zalicza się do niego organizmy, których nie można włączyć do pozostałych królestw",
      "bo wszystkie protisty są identyczne",
      "bo protisty nie mają jądra"
    ],
    "answer": 1,
    "explanation": "Królestwo protistów jest bardzo zróżnicowane i obejmuje organizmy, których nie można zaliczyć do bakterii, grzybów, roślin ani zwierząt."
  },
  {
    "id": "R03_SUPER_18",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj korzyść do właściwego partnera w poroście.",
    "options": null,
    "items": [
      "cukier",
      "woda i sole mineralne",
      "ochrona przed wyschnięciem"
    ],
    "categories": [
      "daje glon",
      "daje grzyb"
    ],
    "answer": {
      "daje glon": [
        "cukier"
      ],
      "daje grzyb": [
        "woda i sole mineralne",
        "ochrona przed wyschnięciem"
      ]
    },
    "image": "/img/bbt_r03_porost_wspolpraca.jpg",
    "explanation": "Glon w poroście wytwarza cukier, a grzyb dostarcza wodę, sole mineralne i chroni przed wyschnięciem."
  },
  {
    "id": "R03_SUPER_19",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która grupa grzybów jest jednokomórkowa i rozmnaża się przez pączkowanie?",
    "options": [
      "porosty",
      "grzyby kapeluszowe",
      "drożdże",
      "pleśniaki"
    ],
    "answer": 2,
    "explanation": "Drożdże są grzybami jednokomórkowymi i rozmnażają się przez pączkowanie."
  },
  {
    "id": "R03_SUPER_20",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak duże mogły być niektóre grzyby zasiedlające ląd w okresie syluru?",
    "options": [
      "około 10 centymetrów",
      "około 1 metra",
      "nawet 10 metrów",
      "ponad 100 metrów"
    ],
    "answer": 2,
    "explanation": "W ciekawostce podano, że niektóre dawne grzyby lądowe osiągały nawet 10 metrów wysokości."
  }
];
const KID_PROMPTS = {
  "R03_KLASYF_07": "Który liść należy do dębu?",
  "R03_WIRUSY_05": "Jak nazywa się zakażenie przez kaszel i kichanie?",
  "R03_BAKT_04": "W jakiej kolejności dzieli się bakteria?",
  "R03_PROT_08": "Co robi wić, a co robi plamka czerwona eugleny?",
  "R03_GRZY_09": "Co daje glon, a co daje grzyb w poroście?"
};
const chapter = {
  id: "r03",
  number: 3,
  title: "Klasyfikacja i systematyka. Wirusy, bakterie, protisty, grzyby",
  icon: "🦠",
  sectionOrder: [
  "Kto jest kim w świecie organizmów?",
  "Dlaczego wirusy nie są zaliczane do świata organizmów?",
  "Co dziś wiemy o bakteriach?",
  "Jak są zbudowane i jak funkcjonują protisty?",
  "Czym charakteryzuje się królestwo grzybów?"
],
  sectionIcons: {
  "Kto jest kim w świecie organizmów?": "🗂️",
  "Dlaczego wirusy nie są zaliczane do świata organizmów?": "🦠",
  "Co dziś wiemy o bakteriach?": "🔬",
  "Jak są zbudowane i jak funkcjonują protisty?": "💧",
  "Czym charakteryzuje się królestwo grzybów?": "🍄"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
