// Rozdział 3: wirusy, bakterie, protisty, grzyby i porosty
// ──────────────────────────────────────────────────────────
// Aby dodać nowy rozdział, stwórz plik src/chapters/rozdzialXX.js
// o identycznej strukturze (exportujący obiekt z polami:
// id, number, title, icon, exercises, sectionOrder, sectionIcons, kidPrompts).
// Plik zostanie automatycznie wykryty przez aplikację.

const ALL_EXERCISES = [
  {
    "id": "SYS_01",
    "section": "Systematyka",
    "type": "single_choice",
    "prompt": "Czym zajmuje się systematyka?",
    "options": [
      "Tylko leczeniem chorób",
      "Opisywaniem, nazywaniem i klasyfikowaniem organizmów",
      "Wyłącznie badaniem grzybów",
      "Wyłącznie badaniem wirusów"
    ],
    "answer": 1,
    "explanation": "W podręczniku systematyka jest przedstawiona jako dział biologii zajmujący się opisywaniem, nazywaniem i klasyfikowaniem organizmów."
  },
  {
    "id": "SYS_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz cechy jednego gatunku.",
    "options": [
      "Mają podobną budowę ciała",
      "Mają zbliżone wymagania życiowe",
      "Ich potomstwo jest niepłodne",
      "Mogą rozmnażać się płciowo i mieć płodne potomstwo"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Podstawową jednostką klasyfikacji jest gatunek."
  },
  {
    "id": "SYS_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj do grup.",
    "options": null,
    "answer": {
      "bakterie": [
        "pałeczka okrężnicy"
      ],
      "protisty": [
        "pantofelek",
        "euglena"
      ],
      "grzyby": [
        "drożdże",
        "pieczarka"
      ],
      "wirusy": [
        "wirus grypy"
      ]
    },
    "explanation": "Zakres obejmuje wirusy oraz trzy królestwa: bakterie, protisty i grzyby.",
    "items": [
      "pałeczka okrężnicy",
      "pantofelek",
      "euglena",
      "drożdże",
      "pieczarka",
      "wirus grypy"
    ],
    "categories": [
      "bakterie",
      "protisty",
      "grzyby",
      "wirusy"
    ],
    "image": "/img/08_karty_choroby.jpg"
  },
  {
    "id": "WB_01",
    "section": "Wirusy i bakterie",
    "type": "single_choice",
    "prompt": "Dlaczego wirusów nie zaliczamy do organizmów?",
    "options": [
      "Bo są za małe",
      "Bo nie mają budowy komórkowej i nie wykonują czynności życiowych",
      "Bo żyją tylko w wodzie",
      "Bo są zawsze groźne"
    ],
    "answer": 1,
    "explanation": "To najważniejsza cecha odróżniająca wirusy od organizmów.",
    "image": "/img/01_schemat_wirusa.jpg"
  },
  {
    "id": "WB_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: Wirus składa się z kwasu __________ i otoczki z __________.",
    "options": null,
    "answer": [
      "nukleinowego",
      "białek"
    ],
    "explanation": "Podręcznik opisuje wirusa jako cząstkę z kwasem nukleinowym i otoczką białkową.",
    "image": "/img/01_schemat_wirusa.jpg",
    "altAnswers": [["nukleinowego", "nukleinowy", "nukleinowym"], ["białek", "białka", "białko", "białkowej"]]
  },
  {
    "id": "WB_03",
    "section": "Wirusy i bakterie",
    "type": "true_false",
    "prompt": "Bakterie są organizmami jednokomórkowymi i bezjądrowymi.",
    "options": null,
    "answer": true,
    "explanation": "Tak opisano bakterie w podręczniku."
  },
  {
    "id": "WB_04",
    "section": "Wirusy i bakterie",
    "type": "multi_select",
    "prompt": "Wybierz kształty bakterii.",
    "options": [
      "Kuliste",
      "Podłużne",
      "Spiralne",
      "Sześcienne"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Na ilustracjach pokazano bakterie kuliste, podłużne i spiralne.",
    "image": "/img/02_ksztalty_bakterii.jpg"
  },
  {
    "id": "WB_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel choroby na wirusowe i bakteryjne.",
    "options": null,
    "answer": {
      "wirusowe": [
        "grypa",
        "odra",
        "ospa wietrzna",
        "różyczka",
        "świnka",
        "AIDS"
      ],
      "bakteryjne": [
        "gruźlica",
        "borelioza",
        "tężec",
        "salmonelloza"
      ]
    },
    "explanation": "Taki podział pojawia się w podsumowaniu rozdziału.",
    "items": [
      "grypa",
      "odra",
      "ospa wietrzna",
      "różyczka",
      "świnka",
      "AIDS",
      "gruźlica",
      "borelioza",
      "tężec",
      "salmonelloza"
    ],
    "categories": [
      "wirusowe",
      "bakteryjne"
    ],
    "image": "/img/08_karty_choroby.jpg"
  },
  {
    "id": "WB_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz drogę zakażenia z przykładem.",
    "options": null,
    "answer": {
      "droga kropelkowa": "grypa",
      "droga pokarmowa": "salmonelloza",
      "przez krew": "borelioza lub AIDS",
      "droga płciowa": "AIDS"
    },
    "explanation": "W podręczniku opisano cztery główne drogi rozprzestrzeniania się drobnoustrojów.",
    "left": [
      "droga kropelkowa",
      "droga pokarmowa",
      "przez krew",
      "droga płciowa"
    ],
    "right": [
      "grypa",
      "salmonelloza",
      "borelioza lub AIDS",
      "AIDS"
    ],
    "image": "/img/03_drogi_zakazen.jpg"
  },
  {
    "id": "WB_07",
    "section": "Wirusy i bakterie",
    "type": "single_choice",
    "prompt": "Jak rozmnażają się bakterie?",
    "options": [
      "Rozmnażają się przez podział komórki",
      "Rozmnażają się tylko wewnątrz komórek gospodarza",
      "Rozmnażają się przez nasiona",
      "Nie rozmnażają się"
    ],
    "answer": 0,
    "explanation": "Bakterie rozmnażają się bezpłciowo przez podział komórki."
  },
  {
    "id": "WB_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz pożyteczne bakterie lub ich zastosowania.",
    "options": [
      "Produkcja jogurtów i kiszonek",
      "Oczyszczanie ścieków",
      "Produkcja antybiotyków",
      "Powodowanie tężca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podręcznik wymienia te zastosowania jako pożyteczne.",
    "image": "/img/04_bakterie_dobre_i_zle.jpg"
  },
  {
    "id": "WB_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która bakteria żyje w jelicie grubym i pomaga wytwarzać witaminy B i K?",
    "options": [
      "Pałeczka okrężnicy",
      "Gronkowiec",
      "Toksoplazma",
      "Drożdże"
    ],
    "answer": 0,
    "explanation": "W rozdziale podkreślono rolę pałeczek okrężnicy."
  },
  {
    "id": "WB_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Niektóre bakterie mogą oddychać tylko tlenowo, inne tylko bez udziału tlenu, a jeszcze inne na oba sposoby.",
    "options": null,
    "answer": true,
    "explanation": "Tak opisano oddychanie bakterii."
  },
  {
    "id": "WB_11",
    "section": "Wirusy i bakterie",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje? grypa, różyczka, świnka, gruźlica.",
    "options": null,
    "answer": "gruźlica",
    "explanation": "Gruźlica jest chorobą bakteryjną, pozostałe są wirusowe."
  },
  {
    "id": "WB_12",
    "section": "Wirusy i bakterie",
    "type": "scenario",
    "prompt": "Po surowym jajku pojawiły się ból brzucha i wymioty. Co to może być?",
    "options": [
      "Tężec",
      "Salmonelloza",
      "Borelioza",
      "Gruźlica"
    ],
    "answer": 1,
    "explanation": "Podręcznik łączy salmonellozę z zakażeniem przez pokarm, np. z surowymi jajami."
  },
  {
    "id": "PRO_01",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Protisty mogą być:",
    "options": [
      "Tylko jednokomórkowe",
      "Tylko wielokomórkowe",
      "Jednokomórkowe albo wielokomórkowe",
      "Zawsze bezbarwne"
    ],
    "answer": 2,
    "explanation": "W rozdziale omówiono oba typy protistów."
  },
  {
    "id": "PRO_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Gdzie żyją protisty?",
    "options": [
      "W wodzie",
      "W wilgotnych środowiskach lądowych",
      "Tylko na pustyni",
      "Na powierzchni lub we wnętrzu innych organizmów"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Protisty zasiedlają różne środowiska, ale najczęściej wodę i miejsca wilgotne."
  },
  {
    "id": "PRO_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz protista z cechą.",
    "options": null,
    "answer": {
      "pantofelek": "ma rzęski i zjada bakterie",
      "euglena": "ma chloroplasty i witkę",
      "listownica": "jest protistem wielokomórkowym żyjącym w morzu"
    },
    "explanation": "To trzy najważniejsze przykłady z rozdziału.",
    "left": [
      "pantofelek",
      "euglena",
      "listownica"
    ],
    "right": [
      "ma rzęski i zjada bakterie",
      "ma chloroplasty i witkę",
      "jest protistem wielokomórkowym żyjącym w morzu"
    ],
    "image": "/img/05_pantofelek_i_euglena.jpg"
  },
  {
    "id": "PRO_04",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Pantofelek i euglena rozmnażają się przez podział komórki.",
    "options": null,
    "answer": true,
    "explanation": "Oba przykłady protistów jednokomórkowych rozmnażają się bezpłciowo przez podział komórki."
  },
  {
    "id": "PRO_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kiedy euglena staje się cudzożywna?",
    "options": [
      "Gdy jest dużo światła",
      "Gdy nie ma dostępu do światła",
      "Zawsze w nocy",
      "Nigdy"
    ],
    "answer": 1,
    "explanation": "Podręcznik podaje, że przy braku światła euglena staje się cudzożywna."
  },
  {
    "id": "PRO_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Które choroby wywołują protisty?",
    "options": null,
    "answer": {
      "protisty": [
        "malaria",
        "toksoplazmoza"
      ],
      "nie_protisty": [
        "grypa",
        "salmonelloza",
        "tężec"
      ]
    },
    "explanation": "Malaria i toksoplazmoza są chorobami wywoływanymi przez protisty.",
    "items": [
      "malaria",
      "toksoplazmoza",
      "grypa",
      "salmonelloza",
      "tężec"
    ],
    "categories": [
      "protisty",
      "nie_protisty"
    ],
    "image": "/img/08_karty_choroby.jpg"
  },
  {
    "id": "PRO_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Co pomaga chronić się przed malarią?",
    "options": [
      "Jedzenie jogurtu",
      "Unikanie kleszczy",
      "Stosowanie środków odstraszających komary i siatek w oknach",
      "Szczepienie przeciw gruźlicy"
    ],
    "answer": 2,
    "explanation": "Malarię przenosi samica komara widliszka."
  },
  {
    "id": "PRO_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Co zmniejsza ryzyko toksoplazmozy?",
    "options": [
      "Mycie rąk po kaszlu",
      "Unikanie surowego lub niedogotowanego mięsa oraz kontaktu z zakażonym kotem",
      "Noszenie czapki w lesie",
      "Picie ciepłej herbaty"
    ],
    "answer": 1,
    "explanation": "Takie sposoby zapobiegania wymieniono przy toksoplazmozie."
  },
  {
    "id": "PRO_09",
    "section": "Protisty",
    "type": "riddle",
    "prompt": "Zagadka: Żyję w wodzie, mam chloroplasty, a bez światła zmieniam sposób odżywiania. To...",
    "options": null,
    "answer": "euglena",
    "explanation": "To klasyczny opis eugleny.",
    "image": "/img/05_pantofelek_i_euglena.jpg",
    "altAnswers": ["euglena", "eugleny", "euglenę", "euglenie", "euglen", "eugleną"]
  },
  {
    "id": "PRO_10",
    "section": "Protisty",
    "type": "riddle",
    "prompt": "Zagadka: Jestem jednokomórkowy, mam rzęski i zjadam bakterie. To...",
    "options": null,
    "answer": "pantofelek",
    "explanation": "To opis pantofelka.",
    "image": "/img/05_pantofelek_i_euglena.jpg",
    "altAnswers": ["pantofelek", "pantofelka", "pantofelki", "pantofelkiem", "pantofelków", "pantofelku"]
  },
  {
    "id": "GRZ_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy grzybów.",
    "options": [
      "Mają chloroplasty",
      "Są cudzożywne",
      "Ich ściana komórkowa jest zbudowana z chityny",
      "Mogą być jedno- lub wielokomórkowe"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "explanation": "Grzyby nie mają chloroplastów."
  },
  {
    "id": "GRZ_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij: Ciało grzyba to __________, zbudowana ze __________.",
    "options": null,
    "answer": [
      "grzybnią",
      "strzępek"
    ],
    "explanation": "To podstawowe pojęcia z rozdziału o grzybach.",
    "altAnswers": [["grzybnią", "grzybnia", "grzybni", "grzybnię"], ["strzępek", "strzępki", "strzępków", "strzępkami", "strzępkach"]]
  },
  {
    "id": "GRZ_03",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Która część grzyba jest zwykle pod ziemią?",
    "options": [
      "Kapelusz",
      "Owocnik",
      "Grzybnia",
      "Zarodniki"
    ],
    "answer": 2,
    "explanation": "Grzybnia tworzy część podziemną.",
    "image": "/img/06_budowa_grzyba.jpg"
  },
  {
    "id": "GRZ_04",
    "section": "Grzyby i porosty",
    "type": "multi_select",
    "prompt": "Wybierz pożyteczne znaczenie grzybów.",
    "options": [
      "Produkcja pieczywa i ciast",
      "Produkcja alkoholu",
      "Produkcja serów",
      "Powodowanie pleśnienia żywności"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pleśnienie żywności to znaczenie negatywne."
  },
  {
    "id": "GRZ_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Drożdże mogą oddychać tlenowo lub przeprowadzać fermentację.",
    "options": null,
    "answer": true,
    "explanation": "To ważny przykład z podręcznika."
  },
  {
    "id": "GRZ_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywa się rozmnażanie drożdży pokazane na lekcji?",
    "options": [
      "Podział komórki",
      "Pączkowanie",
      "Fragmentacja",
      "Kiełkowanie"
    ],
    "answer": 1,
    "explanation": "Drożdże rozmnażają się bezpłciowo przez pączkowanie."
  },
  {
    "id": "GRZ_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element budowy grzyba z opisem.",
    "options": null,
    "answer": {
      "kapelusz": "część nadziemna",
      "trzon": "podtrzymuje kapelusz",
      "zarodniki": "powstają pod kapeluszem",
      "grzybnia": "sieć strzępek w podłożu"
    },
    "explanation": "Tak opisano budowę grzyba wielokomórkowego.",
    "left": [
      "kapelusz",
      "trzon",
      "zarodniki",
      "grzybnia"
    ],
    "right": [
      "część nadziemna",
      "podtrzymuje kapelusz",
      "powstają pod kapeluszem",
      "sieć strzępek w podłożu"
    ],
    "image": "/img/06_budowa_grzyba.jpg"
  },
  {
    "id": "GRZ_08",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Porost to połączenie:",
    "options": [
      "bakterii i wirusa",
      "grzyba i glonu",
      "grzyba i bakterii",
      "rośliny i grzyba"
    ],
    "answer": 1,
    "explanation": "Ciało porostu składa się ze strzępek grzyba i komórek glonu.",
    "image": "/img/07_porost_budowa.jpg"
  },
  {
    "id": "GRZ_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co daje glon grzybowi w poroście?",
    "options": [
      "Pokarm wytworzony w fotosyntezie",
      "Korzenie",
      "Kapelusz",
      "Zarodniki"
    ],
    "answer": 0,
    "explanation": "Glon w poroście przeprowadza fotosyntezę i przekazuje grzybowi pokarm.",
    "image": "/img/07_porost_budowa.jpg"
  },
  {
    "id": "GRZ_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego porosty to organizmy pionierskie?",
    "options": [
      "Bo rosną tylko w miastach",
      "Bo jako pierwsze zasiedlają trudne miejsca i przygotowują podłoże dla innych organizmów",
      "Bo szybko biegają",
      "Bo powstają z bakterii"
    ],
    "answer": 1,
    "explanation": "Porosty potrafią rosnąć tam, gdzie innym organizmom jest bardzo trudno.",
    "image": "/img/07_porost_budowa.jpg"
  },
  {
    "id": "GRZ_11",
    "section": "Grzyby i porosty",
    "type": "true_false",
    "prompt": "Obfite występowanie porostów może świadczyć o czystym powietrzu.",
    "options": null,
    "answer": true,
    "explanation": "Wiele porostów jest wrażliwych na zanieczyszczenie powietrza."
  },
  {
    "id": "GRZ_12",
    "section": "Grzyby i porosty",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje? drożdże, pleśniak, pieczarka, euglena.",
    "options": null,
    "answer": "euglena",
    "explanation": "Euglena jest protistem, a pozostałe należą do grzybów."
  },
  {
    "id": "MIX_01",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Który zestaw jest poprawny?",
    "options": [
      "wirus - organizm jednokomórkowy",
      "bakteria - bez jądra komórkowego",
      "grzyb - ma chloroplasty",
      "porost - to sam glon"
    ],
    "answer": 1,
    "explanation": "Tylko drugie zdanie jest zgodne z materiałem."
  },
  {
    "id": "MIX_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy robienia jogurtu.",
    "options": null,
    "answer": [
      "podgrzej mleko",
      "dodaj jogurt naturalny",
      "wymieszaj i przelej do słoików",
      "odstaw w ciepłe miejsce"
    ],
    "explanation": "W doświadczeniu pokazano namnażanie się bakterii w ciepłym mleku.",
    "items": [
      "odstaw w ciepłe miejsce",
      "dodaj jogurt naturalny",
      "podgrzej mleko",
      "wymieszaj i przelej do słoików"
    ]
  },
  {
    "id": "MIX_03",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Na wilgotnej ścianie pojawił się ciemny nalot. Co to najpewniej jest?",
    "options": [
      "Wirusy",
      "Bakterie",
      "Protisty",
      "Grzyby pleśniowe"
    ],
    "answer": 3,
    "explanation": "W rozdziale o grzybach pokazano pleśń na wilgotnych ścianach."
  },
  {
    "id": "MIX_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz organizmy, które mogą prowadzić fotosyntezę.",
    "options": [
      "euglena",
      "listownica",
      "pantofelek",
      "niektóre bakterie"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Pantofelek jest cudzożywny."
  },
  {
    "id": "MIX_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wirusy, bakterie, protisty i grzyby to cztery grupy opisane w zakresie materiału, ale tylko trzy z nich są królestwami organizmów.",
    "options": null,
    "answer": true,
    "explanation": "Wirusy nie są zaliczane do organizmów."
  },
  {
    "id": "MIX_06",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Zagadka: Nie jest organizmem, ale namnaża się tylko w komórkach. To...",
    "options": null,
    "answer": "wirus",
    "explanation": "To opis wirusa z początku rozdziału.",
    "altAnswers": ["wirus", "wirusa", "wirusy", "wirusem", "wirusów", "wirusie", "wirusom"]
  },
  {
    "id": "IMG_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na schemacie wirusa - ile elementów oznaczono?",
    "options": [
      "Dwa",
      "Trzy",
      "Cztery",
      "Pięć"
    ],
    "answer": 1,
    "explanation": "Na schemacie oznaczono trzy elementy: kwas nukleinowy, otoczkę białkową i kolce białkowe.",
    "image": "/img/01_schemat_wirusa.jpg"
  },
  {
    "id": "IMG_02",
    "section": "Wirusy i bakterie",
    "type": "single_choice",
    "prompt": "Na rysunku bakterii - którego kształtu tam nie ma?",
    "options": [
      "Kulistego",
      "Podłużnego",
      "Spiralnego",
      "Sześciennego"
    ],
    "answer": 3,
    "explanation": "Na ilustracji pokazano trzy kształty: kuliste, podłużne i spiralne. Sześciennych nie ma.",
    "image": "/img/02_ksztalty_bakterii.jpg"
  },
  {
    "id": "IMG_03",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Na rysunku - kto ma chloroplasty?",
    "options": [
      "Pantofelek",
      "Euglena",
      "Oba",
      "Żaden"
    ],
    "answer": 1,
    "explanation": "Chloroplasty (zielone owalki na rysunku) widać tylko u eugleny. Pantofelek ich nie ma.",
    "image": "/img/05_pantofelek_i_euglena.jpg"
  },
  {
    "id": "IMG_04",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Na schemacie grzyba - co jest pod ziemią?",
    "options": [
      "Kapelusz",
      "Trzon",
      "Zarodniki",
      "Grzybnia"
    ],
    "answer": 3,
    "explanation": "Na rysunku widać, że grzybnia (sieć strzępek) rozchodzi się pod powierzchnią ziemi.",
    "image": "/img/06_budowa_grzyba.jpg"
  },
  {
    "id": "IMG_05",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Na rysunku porostu - z jakich dwóch organizmów się składa?",
    "options": [
      "Z bakterii i wirusa",
      "Z grzyba i glonu",
      "Z dwóch grzybów",
      "Z rośliny i grzyba"
    ],
    "answer": 1,
    "explanation": "Na przekroju widać strzępki grzyba i komórki glonu - to z nich składa się porost.",
    "image": "/img/07_porost_budowa.jpg"
  },
  {
    "id": "IMG_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Na rysunku - które drogi zakażenia pokazano?",
    "options": [
      "Kropelkowa",
      "Pokarmowa",
      "Przez krew",
      "Przez dotyk"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Na ilustracji widać cztery drogi: kropelkową, pokarmową, przez krew i płciową. \"Przez dotyk\" nie jest żadną z nich.",
    "image": "/img/03_drogi_zakazen.jpg"
  },
  {
    "id": "IMG_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na rysunku pantofelek porusza się witką.",
    "options": null,
    "answer": false,
    "explanation": "Na rysunku widać, że pantofelek ma rzęski (krótkie wypustki dookoła ciała), a nie witkę. To euglena ma witkę.",
    "image": "/img/05_pantofelek_i_euglena.jpg"
  },
  {
    "id": "SYS_EASY_01",
    "section": "Systematyka",
    "type": "single_choice",
    "prompt": "Jak nazywa się podstawowa jednostka klasyfikacji organizmów?",
    "options": [
      "Rodzaj",
      "Gatunek",
      "Królestwo",
      "Odmiana"
    ],
    "answer": 1,
    "explanation": "Podstawową jednostką klasyfikacji jest gatunek."
  },
  {
    "id": "SYS_EASY_02",
    "section": "Systematyka",
    "type": "true_false",
    "prompt": "Systematyka pomaga porządkować organizmy w grupy.",
    "options": null,
    "answer": true,
    "explanation": "Systematyka służy do opisywania, nazywania i klasyfikowania organizmów."
  },
  {
    "id": "SYS_EASY_03",
    "section": "Systematyka",
    "type": "single_choice",
    "prompt": "Które zdanie pasuje do jednego gatunku?",
    "options": [
      "Są zawsze takiego samego koloru",
      "Mogą mieć płodne potomstwo",
      "Żyją tylko w wodzie",
      "Nie różnią się niczym"
    ],
    "answer": 1,
    "explanation": "Organizmy jednego gatunku mogą rozmnażać się i mieć płodne potomstwo."
  },
  {
    "id": "SYS_EASY_04",
    "section": "Systematyka",
    "type": "single_choice",
    "prompt": "Która grupa nie jest królestwem organizmów z tego działu?",
    "options": [
      "Bakterie",
      "Protisty",
      "Grzyby",
      "Wirusy"
    ],
    "answer": 3,
    "explanation": "Wirusów nie zalicza się do organizmów."
  },
  {
    "id": "SYS_EASY_05",
    "section": "Systematyka",
    "type": "true_false",
    "prompt": "Bakterie, protisty i grzyby to grupy organizmów omawiane w tym dziale.",
    "options": null,
    "answer": true,
    "explanation": "Te trzy grupy należą do organizmów omawianych w materiale."
  },
  {
    "id": "WB_EASY_01",
    "section": "Wirusy i bakterie",
    "type": "true_false",
    "prompt": "Wirus nie ma budowy komórkowej.",
    "options": null,
    "answer": true,
    "explanation": "To najważniejsza cecha odróżniająca wirusy od organizmów."
  },
  {
    "id": "WB_EASY_02",
    "section": "Wirusy i bakterie",
    "type": "single_choice",
    "prompt": "Bakterie są najczęściej organizmami:",
    "options": [
      "Jednokomórkowymi",
      "Dwukomórkowymi",
      "Wielokomórkowymi",
      "Tkankowymi"
    ],
    "answer": 0,
    "explanation": "Bakterie są organizmami jednokomórkowymi."
  },
  {
    "id": "WB_EASY_03",
    "section": "Wirusy i bakterie",
    "type": "single_choice",
    "prompt": "Która choroba jest wirusowa?",
    "options": [
      "Grypa",
      "Salmonelloza",
      "Tężec",
      "Gruźlica"
    ],
    "answer": 0,
    "explanation": "Grypa jest chorobą wirusową."
  },
  {
    "id": "WB_EASY_04",
    "section": "Wirusy i bakterie",
    "type": "true_false",
    "prompt": "Niektóre bakterie są pożyteczne dla człowieka.",
    "options": null,
    "answer": true,
    "explanation": "Bakterie pomagają m.in. przy produkcji jogurtów i kiszonek."
  },
  {
    "id": "WB_EASY_05",
    "section": "Wirusy i bakterie",
    "type": "single_choice",
    "prompt": "Który produkt powstaje z pomocą bakterii?",
    "options": [
      "Jogurt",
      "Sól",
      "Piasek",
      "Papier"
    ],
    "answer": 0,
    "explanation": "Do produkcji jogurtu wykorzystuje się bakterie."
  },
  {
    "id": "WB_EASY_06",
    "section": "Wirusy i bakterie",
    "type": "single_choice",
    "prompt": "Która grupa może namnażać się tylko w komórkach gospodarza?",
    "options": [
      "Wirusy",
      "Bakterie",
      "Grzyby",
      "Porosty"
    ],
    "answer": 0,
    "explanation": "Wirusy namnażają się tylko we wnętrzu komórek gospodarza."
  },
  {
    "id": "PRO_EASY_01",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Protisty żyją najczęściej w wodzie albo w wilgotnych miejscach.",
    "options": null,
    "answer": true,
    "explanation": "Protisty najczęściej spotyka się w wodzie i środowiskach wilgotnych."
  },
  {
    "id": "PRO_EASY_02",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Który organizm jest protistem?",
    "options": [
      "Euglena",
      "Pieczarka",
      "Wirus grypy",
      "Pałeczka okrężnicy"
    ],
    "answer": 0,
    "explanation": "Euglena należy do protistów."
  },
  {
    "id": "PRO_EASY_03",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Pantofelek jest protistem jednokomórkowym.",
    "options": null,
    "answer": true,
    "explanation": "Pantofelek to przykład protista jednokomórkowego."
  },
  {
    "id": "PRO_EASY_04",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Który protist ma chloroplasty?",
    "options": [
      "Euglena",
      "Pantofelek",
      "Pleśniak",
      "Drożdże"
    ],
    "answer": 0,
    "explanation": "Euglena ma chloroplasty, dlatego może prowadzić fotosyntezę."
  },
  {
    "id": "PRO_EASY_05",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Która choroba jest związana z protistami?",
    "options": [
      "Malaria",
      "Grypa",
      "Odra",
      "Tężec"
    ],
    "answer": 0,
    "explanation": "Malaria jest chorobą wywoływaną przez protisty."
  },
  {
    "id": "PRO_EASY_06",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Listownica to protist żyjący w morzu.",
    "options": null,
    "answer": true,
    "explanation": "Listownica jest przykładem protista wielokomórkowego żyjącego w morzu."
  },
  {
    "id": "GRZ_EASY_01",
    "section": "Grzyby i porosty",
    "type": "true_false",
    "prompt": "Pieczarka należy do grzybów.",
    "options": null,
    "answer": true,
    "explanation": "Pieczarka jest przykładem grzyba wielokomórkowego."
  },
  {
    "id": "GRZ_EASY_02",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Porost to współpraca:",
    "options": [
      "Grzyba i glonu",
      "Bakterii i wirusa",
      "Dwóch grzybów",
      "Rośliny i wirusa"
    ],
    "answer": 0,
    "explanation": "Porost tworzą razem grzyb i glon."
  },
  {
    "id": "GRZ_EASY_03",
    "section": "Grzyby i porosty",
    "type": "true_false",
    "prompt": "Drożdże pomagają w pieczeniu chleba i ciast.",
    "options": null,
    "answer": true,
    "explanation": "Drożdże wykorzystuje się przy produkcji pieczywa."
  },
  {
    "id": "GRZ_EASY_04",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Która grupa nie ma chloroplastów?",
    "options": [
      "Grzyby",
      "Euglena",
      "Listownica",
      "Glony w poroście"
    ],
    "answer": 0,
    "explanation": "Grzyby są cudzożywne i nie mają chloroplastów."
  },
  {
    "id": "GRZ_EASY_05",
    "section": "Grzyby i porosty",
    "type": "true_false",
    "prompt": "Dużo porostów w okolicy może świadczyć o czystym powietrzu.",
    "options": null,
    "answer": true,
    "explanation": "Wiele porostów jest wrażliwych na zanieczyszczenie powietrza."
  },
  {
    "id": "GRZ_EASY_06",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Który organizm jest grzybem?",
    "options": [
      "Pieczarka",
      "Euglena",
      "Wirus grypy",
      "Pałeczka okrężnicy"
    ],
    "answer": 0,
    "explanation": "Pieczarka należy do grzybów."
  }
];

const KID_PROMPTS = {
  SYS_01: "Co robi systematyka?",
  SYS_02: "Wybierz cechy jednego gatunku.",
  SYS_03: "Połącz z dobrą grupą.",
  WB_01: "Czemu wirusy to nie organizmy?",
  WB_02: "Uzupełnij zdanie: Wirus składa się z kwasu __________ i otoczki z __________.",
  WB_03: "Prawda czy fałsz? Bakterie są jednokomórkowe i bezjądrowe.",
  WB_04: "Wybierz kształty bakterii.",
  WB_05: "Podziel choroby: wirusowe czy bakteryjne?",
  WB_06: "Połącz drogę zakażenia z przykładem.",
  WB_07: "Jak mnożą się bakterie?",
  WB_08: "Wybierz pożyteczne bakterie lub ich zadania.",
  WB_09: "Która bakteria żyje w jelicie grubym i pomaga robić witaminy B i K?",
  WB_10: "Prawda czy fałsz? Bakterie mogą oddychać na różne sposoby.",
  WB_11: "Co nie pasuje? grypa, różyczka, świnka, gruźlica.",
  WB_12: "Po surowym jajku boli brzuch i są wymioty. Co to może być?",
  PRO_01: "Protisty mogą być...",
  PRO_02: "Gdzie żyją protisty?",
  PRO_03: "Połącz protista z cechą.",
  PRO_04: "Prawda czy fałsz? Pantofelek i euglena dzielą się na dwie komórki.",
  PRO_05: "Kiedy euglena staje się cudzożywna?",
  PRO_06: "Które choroby wywołują protisty?",
  PRO_07: "Co pomaga chronić przed malarią?",
  PRO_08: "Co zmniejsza ryzyko toksoplazmozy?",
  PRO_09: "Zgadnij: żyję w wodzie, mam chloroplasty, a bez światła zmieniam sposób odżywiania. To...",
  PRO_10: "Zgadnij: jestem jednokomórkowy, mam rzęski i zjadam bakterie. To...",
  GRZ_01: "Wybierz cechy grzybów.",
  GRZ_02: "Uzupełnij zdanie: Ciało grzyba to __________, zbudowana ze __________.",
  GRZ_03: "Która część grzyba jest zwykle pod ziemią?",
  GRZ_04: "Wybierz, do czego przydają się grzyby.",
  GRZ_05: "Prawda czy fałsz? Drożdże mogą oddychać albo robić fermentację.",
  GRZ_06: "Jak nazywa się sposób rozmnażania drożdży pokazany na lekcji?",
  GRZ_07: "Połącz część grzyba z opisem.",
  GRZ_08: "Porost to połączenie:",
  GRZ_09: "Co glon daje grzybowi w poroście?",
  GRZ_10: "Czemu porosty nazywamy organizmami pionierskimi?",
  GRZ_11: "Prawda czy fałsz? Dużo porostów może znaczyć czyste powietrze.",
  GRZ_12: "Co nie pasuje? drożdże, pleśniak, pieczarka, euglena.",
  MIX_01: "Który zestaw jest dobry?",
  MIX_02: "Ułóż po kolei robienie jogurtu.",
  MIX_03: "Na wilgotnej ścianie pojawił się ciemny nalot. Co to najpewniej jest?",
  MIX_04: "Wybierz organizmy, które mogą robić fotosyntezę.",
  MIX_05: "Prawda czy fałsz? W tym dziale są cztery grupy, ale tylko trzy z nich to królestwa organizmów.",
  MIX_06: "Zgadnij: nie jest organizmem, ale mnoży się tylko w komórkach. To...",
  IMG_01: "Na rysunku wirusa - ile pokazano elementów?",
  IMG_02: "Na rysunku bakterii - którego kształtu tam nie ma?",
  IMG_03: "Na rysunku - kto ma chloroplasty?",
  IMG_04: "Na rysunku grzyba - co jest pod ziemią?",
  IMG_05: "Na rysunku porostu - z jakich dwóch organizmów się składa?",
  IMG_06: "Na rysunku - które drogi zakażenia pokazano?",
  IMG_07: "Prawda czy fałsz? Na rysunku pantofelek porusza się witką.",
  SYS_EASY_01: "Jak nazywa się podstawowa jednostka klasyfikacji organizmów?",
  SYS_EASY_02: "Prawda czy fałsz? Systematyka pomaga porządkować organizmy w grupy.",
  SYS_EASY_03: "Które zdanie pasuje do jednego gatunku?",
  SYS_EASY_04: "Która grupa nie jest królestwem organizmów z tego działu?",
  SYS_EASY_05: "Prawda czy fałsz? Bakterie, protisty i grzyby to grupy organizmów z tego działu.",
  WB_EASY_01: "Prawda czy fałsz? Wirus nie ma budowy komórkowej.",
  WB_EASY_02: "Bakterie są najczęściej organizmami:",
  WB_EASY_03: "Która choroba jest wirusowa?",
  WB_EASY_04: "Prawda czy fałsz? Niektóre bakterie są pożyteczne dla człowieka.",
  WB_EASY_05: "Który produkt powstaje z pomocą bakterii?",
  WB_EASY_06: "Która grupa może mnożyć się tylko w komórkach gospodarza?",
  PRO_EASY_01: "Prawda czy fałsz? Protisty żyją najczęściej w wodzie albo w wilgotnych miejscach.",
  PRO_EASY_02: "Który organizm jest protistem?",
  PRO_EASY_03: "Prawda czy fałsz? Pantofelek jest protistem jednokomórkowym.",
  PRO_EASY_04: "Który protist ma chloroplasty?",
  PRO_EASY_05: "Która choroba jest związana z protistami?",
  PRO_EASY_06: "Prawda czy fałsz? Listownica to protist żyjący w morzu.",
  GRZ_EASY_01: "Prawda czy fałsz? Pieczarka należy do grzybów.",
  GRZ_EASY_02: "Porost to współpraca:",
  GRZ_EASY_03: "Prawda czy fałsz? Drożdże pomagają w pieczeniu chleba i ciast.",
  GRZ_EASY_04: "Która grupa nie ma chloroplastów?",
  GRZ_EASY_05: "Prawda czy fałsz? Dużo porostów w okolicy może znaczyć czyste powietrze.",
  GRZ_EASY_06: "Który organizm jest grzybem?",
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Wirusy, bakterie, protisty, grzyby i porosty",
  icon: "\u{1F9A0}",
  sectionOrder: [
    "Systematyka",
    "Wirusy i bakterie",
    "Protisty",
    "Grzyby i porosty",
    "Powtórka mieszana",
  ],
  sectionIcons: {
    Systematyka: "\u{1F9EC}",
    "Wirusy i bakterie": "\u{1F9A0}",
    Protisty: "\u{1F52C}",
    "Grzyby i porosty": "\u{1F344}",
    "Powtórka mieszana": "\u{1F3AF}",
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
