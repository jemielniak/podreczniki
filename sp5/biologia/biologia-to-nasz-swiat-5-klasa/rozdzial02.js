// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KLA  = Klasyfikacja organizmów
//   KLU  = Klucze do oznaczania
//   WIR  = Wirusy
//   BAK  = Bakterie
//   PRO  = Protisty
//   GRZ  = Grzyby i porosty
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_KLA_01",
    "section": "Klasyfikacja organizmów",
    "type": "single_choice",
    "prompt": "Czym zajmuje się systematyka?",
    "options": [
      "Klasyfikowaniem organizmów oraz nadawaniem im nazw",
      "Tylko leczeniem chorób ludzi",
      "Wyłącznie obserwacją pogody",
      "Tylko hodowlą roślin ozdobnych",
      "Badaniem składu powietrza",
      "Mierzeniem temperatury gleby"
    ],
    "answer": 0,
    "explanation": "Systematyka to dział biologii, który opisuje organizmy, nadaje im nazwy i przydziela je do określonych grup."
  },
  {
    "id": "R02_KLA_02",
    "section": "Klasyfikacja organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz cechy wykorzystywane we współczesnej klasyfikacji organizmów.",
    "options": [
      "Budowa zewnętrzna i wewnętrzna",
      "Sposób odżywiania",
      "Środowisko życia",
      "Pokrewieństwo potwierdzane badaniami DNA",
      "Przydatność w zabawie",
      "Kolor okładki atlasu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Obecna klasyfikacja opiera się na wielu cechach organizmów oraz na ich pokrewieństwie potwierdzanym badaniami DNA."
  },
  {
    "id": "R02_KLA_03",
    "section": "Klasyfikacja organizmów",
    "type": "true_false",
    "prompt": "Świat organizmów podzielono w podręczniku na trzy domeny i sześć królestw.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano trzy domeny: archeowce, bakterie i eukarionty, a w nich łącznie sześć królestw.",
    "image": "r02_domeny_krolestwa.jpg"
  },
  {
    "id": "R02_KLA_04",
    "section": "Klasyfikacja organizmów",
    "type": "fill_in",
    "prompt": "Świat organizmów podzielono na trzy __________ i sześć __________.",
    "options": null,
    "answer": [
      "domeny",
      "królestw"
    ],
    "altAnswers": [
      [
        "domeny",
        "domeny"
      ],
      [
        "królestw",
        "krolestw"
      ]
    ],
    "explanation": "Trzy domeny to archeowce, bakterie i eukarionty; w ich obrębie wyróżniono sześć królestw.",
    "image": "r02_domeny_krolestwa.jpg"
  },
  {
    "id": "R02_KLA_05",
    "section": "Klasyfikacja organizmów",
    "type": "sequence",
    "prompt": "Ułóż jednostki klasyfikacji od najmniejszej do największej.",
    "options": null,
    "items": [
      "rodzina",
      "gatunek",
      "klasa",
      "rodzaj",
      "królestwo",
      "rząd",
      "gromada"
    ],
    "answer": [
      "gatunek",
      "rodzaj",
      "rodzina",
      "rząd",
      "klasa",
      "gromada",
      "królestwo"
    ],
    "explanation": "Gatunki tworzą rodzaj, rodzaje rodzinę, rodziny rząd, rzędy klasę, klasy gromadę, a gromady królestwo.",
    "image": "r02_systematyka_borowika.jpg"
  },
  {
    "id": "R02_KLA_06",
    "section": "Klasyfikacja organizmów",
    "type": "match",
    "prompt": "Połącz królestwo z charakterystyczną cechą.",
    "options": null,
    "left": [
      "bakterie właściwe",
      "protisty",
      "grzyby",
      "zwierzęta"
    ],
    "right": [
      "jednokomórkowe bez jądra komórkowego",
      "jedno- lub wielokomórkowe z jądrem komórkowym",
      "ściana komórkowa z chityną i cudzożywność",
      "wielokomórkowe bez ściany komórkowej"
    ],
    "answer": {
      "bakterie właściwe": "jednokomórkowe bez jądra komórkowego",
      "protisty": "jedno- lub wielokomórkowe z jądrem komórkowym",
      "grzyby": "ściana komórkowa z chityną i cudzożywność",
      "zwierzęta": "wielokomórkowe bez ściany komórkowej"
    },
    "explanation": "Królestwa różnią się między innymi obecnością jądra komórkowego, ściany komórkowej i sposobem odżywiania.",
    "image": "r02_domeny_krolestwa.jpg"
  },
  {
    "id": "R02_KLA_07",
    "section": "Klasyfikacja organizmów",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do domen organizmów: archeowce, bakterie, eukarionty, grzyby.",
    "options": null,
    "answer": "grzyby",
    "explanation": "Grzyby są królestwem należącym do eukariontów, a nie domeną."
  },
  {
    "id": "R02_KLA_08",
    "section": "Klasyfikacja organizmów",
    "type": "riddle",
    "prompt": "Podstawowa jednostka klasyfikacji organizmów to...",
    "options": null,
    "answer": "gatunek",
    "altAnswers": [
      "gatunek"
    ],
    "explanation": "Gatunek obejmuje organizmy o podobnych cechach budowy, zdolne do wydawania płodnego potomstwa."
  },
  {
    "id": "R02_KLA_09",
    "section": "Klasyfikacja organizmów",
    "type": "scenario",
    "prompt": "Uczeń widzi nazwę „borowik szlachetny”. O czym informuje pierwszy wyraz tej nazwy?",
    "options": [
      "O rodzaju organizmu",
      "O królestwie organizmu",
      "O wieku organizmu",
      "O miejscu znalezienia organizmu",
      "O wielkości organizmu",
      "O sposobie oddychania"
    ],
    "answer": 0,
    "explanation": "W dwuwyrazowej nazwie gatunkowej pierwszy wyraz oznacza rodzaj, a drugi doprecyzowuje gatunek.",
    "image": "r02_systematyka_borowika.jpg"
  },
  {
    "id": "R02_KLU_01",
    "section": "Klucze do oznaczania",
    "type": "single_choice",
    "prompt": "Do czego służy klucz do oznaczania gatunków?",
    "options": [
      "Do ustalania nazw gatunkowych organizmów na podstawie cech",
      "Do mierzenia szybkości wzrostu roślin",
      "Do leczenia chorób roślin i grzybów",
      "Do przechowywania próbek wody",
      "Do liczenia komórek krwi",
      "Do produkcji map pogodowych"
    ],
    "answer": 0,
    "explanation": "Klucz zawiera uporządkowane cechy, które pozwalają rozpoznać organizm i ustalić jego nazwę gatunkową."
  },
  {
    "id": "R02_KLU_02",
    "section": "Klucze do oznaczania",
    "type": "true_false",
    "prompt": "W kluczu dwudzielnym najczęściej wybiera się jedno z dwóch przeciwstawnych stwierdzeń.",
    "options": null,
    "answer": true,
    "explanation": "Najpopularniejsze klucze są dwudzielne, czyli prowadzą użytkownika przez kolejne wybory między dwiema cechami."
  },
  {
    "id": "R02_KLU_03",
    "section": "Klucze do oznaczania",
    "type": "sequence",
    "prompt": "Ułóż działania podczas korzystania z prostego klucza do oznaczania drzewa iglastego.",
    "options": null,
    "items": [
      "ustalenie nazwy gatunkowej",
      "sprawdzenie czy igły są pojedyncze czy w grupach",
      "sprawdzenie kształtu liścia",
      "wybranie pasującej cechy w kolejnym rozgałęzieniu"
    ],
    "answer": [
      "sprawdzenie kształtu liścia",
      "sprawdzenie czy igły są pojedyncze czy w grupach",
      "wybranie pasującej cechy w kolejnym rozgałęzieniu",
      "ustalenie nazwy gatunkowej"
    ],
    "explanation": "Klucz prowadzi od cech ogólnych do coraz bardziej szczegółowych, aż do nazwy gatunkowej.",
    "image": "r02_klucz_iglaste.jpg"
  },
  {
    "id": "R02_KLU_04",
    "section": "Klucze do oznaczania",
    "type": "match",
    "prompt": "Połącz drzewo iglaste z cechą podaną w przykładzie klucza.",
    "options": null,
    "left": [
      "jodła pospolita",
      "świerk pospolity",
      "sosna zwyczajna",
      "modrzew europejski"
    ],
    "right": [
      "igły płaskie z białymi paskami od spodu",
      "igły pojedyncze kanciaste i kłujące",
      "igły wyrastają po dwie",
      "igły zebrane w pęczki"
    ],
    "answer": {
      "jodła pospolita": "igły płaskie z białymi paskami od spodu",
      "świerk pospolity": "igły pojedyncze kanciaste i kłujące",
      "sosna zwyczajna": "igły wyrastają po dwie",
      "modrzew europejski": "igły zebrane w pęczki"
    },
    "explanation": "W przykładzie klucza rozpoznawano gatunki po ułożeniu i kształcie igieł.",
    "image": "r02_klucz_iglaste.jpg"
  },
  {
    "id": "R02_KLU_05",
    "section": "Klucze do oznaczania",
    "type": "multi_select",
    "prompt": "Co warto zrobić po ustaleniu nazwy gatunkowej organizmu?",
    "options": [
      "Sprawdzić rozpoznanie w innych źródłach",
      "Zachować ostrożność przy grzybach i roślinach jadalnych",
      "Bez wahania zjeść nieznany grzyb",
      "Porównać cechy z atlasem lub kluczem",
      "Zignorować możliwość pomyłki aplikacji"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Podręcznik podkreśla zasadę ograniczonego zaufania: rozpoznanie trzeba potwierdzić, zwłaszcza gdy organizm mógłby być trujący."
  },
  {
    "id": "R02_KLU_06",
    "section": "Klucze do oznaczania",
    "type": "odd_one_out",
    "prompt": "Co nie jest narzędziem do ustalania nazwy organizmu: klucz, atlas, aplikacja, termometr.",
    "options": null,
    "answer": "termometr",
    "explanation": "Klucze, atlasy i aplikacje mogą pomóc w rozpoznawaniu organizmów; termometr służy do pomiaru temperatury."
  },
  {
    "id": "R02_KLU_07",
    "section": "Klucze do oznaczania",
    "type": "fill_in",
    "prompt": "Najpopularniejsze klucze są __________ i prowadzą przez wybór między dwiema __________ cechami.",
    "options": null,
    "answer": [
      "dwudzielne",
      "przeciwstawnymi"
    ],
    "altAnswers": [
      [
        "dwudzielne",
        "dwudzielnymi"
      ],
      [
        "przeciwstawnymi",
        "przeciwstawnymi"
      ]
    ],
    "explanation": "Klucz dwudzielny zestawia po dwie przeciwstawne cechy i za każdym razem wybiera się tę pasującą do organizmu."
  },
  {
    "id": "R02_KLU_08",
    "section": "Klucze do oznaczania",
    "type": "scenario",
    "prompt": "Aplikacja rozpoznała owoce dzikiej rośliny jako jadalne. Co jest najbezpieczniejszym zachowaniem zgodnym z rozdziałem?",
    "options": [
      "Sprawdzić rozpoznanie w innych źródłach i nie jeść bez pewności",
      "Natychmiast spróbować owoców",
      "Uznać aplikację za zawsze nieomylną",
      "Zjeść owoce tylko dlatego że są kolorowe",
      "Podać owoce młodszemu dziecku do testu",
      "Zebrać wszystkie owoce bez sprawdzania"
    ],
    "answer": 0,
    "explanation": "Nawet po użyciu aplikacji należy upewnić się w innych źródłach, bo rośliny i grzyby mogą być trujące."
  },
  {
    "id": "R02_KLU_09",
    "section": "Klucze do oznaczania",
    "type": "sort",
    "prompt": "Rozdziel zachowania na bezpieczne i ryzykowne podczas rozpoznawania organizmów.",
    "options": null,
    "items": [
      "sprawdzenie nazwy w atlasie",
      "korzystanie z klucza",
      "zjedzenie nieznanego grzyba",
      "zaufanie jednej aplikacji bez sprawdzenia"
    ],
    "categories": [
      "bezpieczne",
      "ryzykowne"
    ],
    "answer": {
      "bezpieczne": [
        "sprawdzenie nazwy w atlasie",
        "korzystanie z klucza"
      ],
      "ryzykowne": [
        "zjedzenie nieznanego grzyba",
        "zaufanie jednej aplikacji bez sprawdzenia"
      ]
    },
    "explanation": "Bezpieczne rozpoznawanie wymaga porównywania źródeł i ostrożności, szczególnie wobec organizmów trujących."
  },
  {
    "id": "R02_WIR_01",
    "section": "Wirusy",
    "type": "single_choice",
    "prompt": "Z czego składa się cząstka wirusa według rozdziału?",
    "options": [
      "Z kwasu nukleinowego w otoczce białkowej",
      "Z jądra komórkowego i chloroplastów",
      "Z cytoplazmy i ściany z chityny",
      "Z wielu komórek połączonych w tkanki",
      "Z grzybni i owocnika",
      "Z wodniczek i rzęsek"
    ],
    "answer": 0,
    "explanation": "Wirusy nie mają budowy komórkowej; są zbudowane z kwasu nukleinowego otoczonego białkami.",
    "image": "r02_model_wirusa.jpg"
  },
  {
    "id": "R02_WIR_02",
    "section": "Wirusy",
    "type": "true_false",
    "prompt": "Wirusy są organizmami, ponieważ samodzielnie wykonują wszystkie czynności życiowe.",
    "options": null,
    "answer": false,
    "explanation": "Wirusy nie wykonują czynności życiowych i nie mają budowy komórkowej, dlatego w rozdziale nie są uznane za organizmy."
  },
  {
    "id": "R02_WIR_03",
    "section": "Wirusy",
    "type": "multi_select",
    "prompt": "Zaznacz czynności, których wirusy nie wykonują samodzielnie.",
    "options": [
      "Oddychanie",
      "Odżywianie",
      "Wydalanie",
      "Wzrost i rozwój",
      "Tworzenie kopii wewnątrz zaatakowanej komórki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wirusy nie oddychają, nie odżywiają się, nie wydalają, nie rosną i nie rozwijają się; mogą jedynie namnażać się w zakażonych komórkach."
  },
  {
    "id": "R02_WIR_04",
    "section": "Wirusy",
    "type": "fill_in",
    "prompt": "Wirusy nie mają budowy __________, a ich jedyną formą aktywności jest __________ w zakażonych komórkach.",
    "options": null,
    "answer": [
      "komórkowej",
      "namnażanie"
    ],
    "altAnswers": [
      [
        "komórkowej",
        "komorkowej"
      ],
      [
        "namnażanie",
        "namnazanie"
      ]
    ],
    "explanation": "Brak budowy komórkowej i brak czynności życiowych odróżniają wirusy od organizmów.",
    "image": "r02_model_wirusa.jpg"
  },
  {
    "id": "R02_WIR_05",
    "section": "Wirusy",
    "type": "sequence",
    "prompt": "Ułóż etapy jednego ze sposobów namnażania się wirusa.",
    "options": null,
    "items": [
      "powstają kopie cząstek wirusa",
      "cząstka wirusa przytwierdza się do komórki",
      "nowe cząstki opuszczają komórkę",
      "kwas nukleinowy wirusa wnika do komórki"
    ],
    "answer": [
      "cząstka wirusa przytwierdza się do komórki",
      "kwas nukleinowy wirusa wnika do komórki",
      "powstają kopie cząstek wirusa",
      "nowe cząstki opuszczają komórkę"
    ],
    "explanation": "Najpierw wirus przytwierdza się do komórki i wprowadza materiał genetyczny, potem powstają kopie, które opuszczają komórkę.",
    "image": "r02_cykl_wirusa.jpg"
  },
  {
    "id": "R02_WIR_06",
    "section": "Wirusy",
    "type": "match",
    "prompt": "Połącz element cząstki wirusa z opisem.",
    "options": null,
    "left": [
      "kwas nukleinowy",
      "otoczka białkowa",
      "osłonka z wyrostkami"
    ],
    "right": [
      "materiał znajdujący się wewnątrz wirusa",
      "białkowa warstwa otaczająca materiał wirusa",
      "dodatkowa warstwa obecna u niektórych wirusów"
    ],
    "answer": {
      "kwas nukleinowy": "materiał znajdujący się wewnątrz wirusa",
      "otoczka białkowa": "białkowa warstwa otaczająca materiał wirusa",
      "osłonka z wyrostkami": "dodatkowa warstwa obecna u niektórych wirusów"
    },
    "explanation": "Model wirusa HIV w podręczniku pokazuje kwas nukleinowy, otoczkę białkową oraz osłonkę z wyrostkami.",
    "image": "r02_model_wirusa.jpg"
  },
  {
    "id": "R02_WIR_07",
    "section": "Wirusy",
    "type": "odd_one_out",
    "prompt": "Co nie jest chorobą wirusową: grypa, COVID-19, odra, borelioza.",
    "options": null,
    "answer": "borelioza",
    "explanation": "Borelioza jest wymieniona w rozdziale jako choroba bakteryjna, a pozostałe choroby są wirusowe."
  },
  {
    "id": "R02_WIR_08",
    "section": "Wirusy",
    "type": "scenario",
    "prompt": "Kasia ma kaszel i katar, ale idzie do szkoły. Które zachowanie najlepiej ograniczyłoby rozprzestrzenianie wirusów?",
    "options": [
      "Pozostanie w domu do wyzdrowienia",
      "Podanie ręki wszystkim kolegom",
      "Kichanie bez zasłaniania ust",
      "Pożyczenie chusteczki wielorazowej",
      "Siedzenie blisko innych osób",
      "Rezygnacja z mycia rąk"
    ],
    "answer": 0,
    "explanation": "Unikanie kontaktu z osobami chorymi i izolacja podczas objawów zmniejszają ryzyko zakażenia.",
    "image": "r02_zapobieganie_wirusom.jpg"
  },
  {
    "id": "R02_WIR_09",
    "section": "Wirusy",
    "type": "sort",
    "prompt": "Rozdziel przykłady na drogi zakażenia wirusami i sposoby ochrony.",
    "options": null,
    "items": [
      "kaszel chorej osoby",
      "kontakt z krwią chorego",
      "częste mycie rąk",
      "szczepienia ochronne",
      "izolacja osoby z objawami"
    ],
    "categories": [
      "drogi zakażenia",
      "sposoby ochrony"
    ],
    "answer": {
      "drogi zakażenia": [
        "kaszel chorej osoby",
        "kontakt z krwią chorego"
      ],
      "sposoby ochrony": [
        "częste mycie rąk",
        "szczepienia ochronne",
        "izolacja osoby z objawami"
      ]
    },
    "explanation": "Wirusy mogą szerzyć się drogą kropelkową i przez kontakt z krwią lub śliną, a ochronę dają higiena, szczepienia i unikanie kontaktu z chorymi.",
    "image": "r02_zapobieganie_wirusom.jpg"
  },
  {
    "id": "R02_BAK_01",
    "section": "Bakterie",
    "type": "single_choice",
    "prompt": "Gdzie według rozdziału występują bakterie?",
    "options": [
      "Niemal w każdym środowisku na Ziemi",
      "Wyłącznie w gorących źródłach",
      "Tylko w organizmach ludzi",
      "Wyłącznie na pustyniach",
      "Tylko w wodach słonych",
      "Wyłącznie w kosmosie"
    ],
    "answer": 0,
    "explanation": "Bakterie występują w wodzie, glebie, powietrzu, na powierzchni organizmów i w ich wnętrzu."
  },
  {
    "id": "R02_BAK_02",
    "section": "Bakterie",
    "type": "true_false",
    "prompt": "Bakterie są organizmami jednokomórkowymi.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział opisuje bakterie jako organizmy jednokomórkowe, zwykle mikroskopijne."
  },
  {
    "id": "R02_BAK_03",
    "section": "Bakterie",
    "type": "multi_select",
    "prompt": "Zaznacz elementy pokazane w modelu komórki bakteryjnej.",
    "options": [
      "cytozol",
      "błona komórkowa",
      "ściana komórkowa",
      "otoczka śluzowa",
      "substancja jądrowa",
      "chloroplasty"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Model komórki bakteryjnej obejmuje cytozol, błonę, ścianę, otoczkę śluzową i substancję jądrową; bakterie nie mają chloroplastów w tym schemacie.",
    "image": "r02_komorka_bakteryjna.jpg"
  },
  {
    "id": "R02_BAK_04",
    "section": "Bakterie",
    "type": "fill_in",
    "prompt": "Głównym sposobem rozmnażania bakterii jest __________ komórki, a w dobrych warunkach ich liczba może podwoić się nawet co __________ minut.",
    "options": null,
    "answer": [
      "podział",
      "20"
    ],
    "altAnswers": [
      [
        "podział",
        "podzial"
      ],
      [
        "20",
        "dwadzieścia",
        "dwadzieścia minut",
        "20 minut"
      ]
    ],
    "explanation": "Dojrzała komórka bakteryjna zwiększa rozmiary i dzieli się na dwie identyczne komórki."
  },
  {
    "id": "R02_BAK_05",
    "section": "Bakterie",
    "type": "match",
    "prompt": "Połącz kształt komórki bakterii z opisem.",
    "options": null,
    "left": [
      "ziarenkowiec",
      "pałeczka",
      "krętek",
      "dwoinka"
    ],
    "right": [
      "komórka kulista",
      "podłużna walcowata komórka",
      "długa spiralnie skręcona komórka",
      "dwie połączone komórki"
    ],
    "answer": {
      "ziarenkowiec": "komórka kulista",
      "pałeczka": "podłużna walcowata komórka",
      "krętek": "długa spiralnie skręcona komórka",
      "dwoinka": "dwie połączone komórki"
    },
    "explanation": "W rozdziale pokazano różne kształty bakterii: ziarenkowce, pałeczki, krętki oraz komórki połączone w pary."
  },
  {
    "id": "R02_BAK_06",
    "section": "Bakterie",
    "type": "odd_one_out",
    "prompt": "Co nie jest chorobą bakteryjną: gruźlica, salmonelloza, angina, ospa wietrzna.",
    "options": null,
    "answer": "ospa wietrzna",
    "explanation": "Ospa wietrzna jest chorobą wirusową, a gruźlica, salmonelloza i angina są w rozdziale przykładami chorób bakteryjnych."
  },
  {
    "id": "R02_BAK_07",
    "section": "Bakterie",
    "type": "scenario",
    "prompt": "Jacek zjadł posiłek z mięsem drobiowym, a potem zachorował na salmonellozę. Jaką drogą rozprzestrzeniły się bakterie?",
    "options": [
      "Drogą pokarmową",
      "Drogą kropelkową",
      "Przez ukłucie komara",
      "Przez światło słoneczne",
      "Przez dotknięcie porostu",
      "Przez rozmowę telefoniczną"
    ],
    "answer": 0,
    "explanation": "Salmonelloza w opisanej sytuacji wiąże się ze spożyciem pokarmu zawierającego bakterie.",
    "image": "r02_drogi_bakterii.jpg"
  },
  {
    "id": "R02_BAK_08",
    "section": "Bakterie",
    "type": "sort",
    "prompt": "Rozdziel znaczenie bakterii na pozytywne i negatywne.",
    "options": null,
    "items": [
      "produkcja jogurtów",
      "rozkład szczątków organizmów",
      "wywoływanie anginy",
      "psucie się żywności",
      "oczyszczanie ścieków"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "produkcja jogurtów",
        "rozkład szczątków organizmów",
        "oczyszczanie ścieków"
      ],
      "negatywne": [
        "wywoływanie anginy",
        "psucie się żywności"
      ]
    },
    "explanation": "Bakterie pomagają w obiegu materii i produkcji żywności, ale niektóre wywołują choroby oraz psują pokarm."
  },
  {
    "id": "R02_BAK_09",
    "section": "Bakterie",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby zapobiegania chorobom bakteryjnym opisane w rozdziale.",
    "options": [
      "higiena i właściwe przygotowanie pokarmów",
      "szczepienia ochronne",
      "odzież ochronna w terenie i środki odstraszające kleszcze",
      "używanie jednorazowych strzykawek",
      "celowe jedzenie surowych jaj",
      "unikanie leczenia chorych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zapobieganie obejmuje higienę, szczepienia, zabezpieczenia przed kontaktem z krwią oraz ochronę przed kleszczami.",
    "image": "r02_drogi_bakterii.jpg"
  },
  {
    "id": "R02_PRO_01",
    "section": "Protisty",
    "type": "single_choice",
    "prompt": "Jaka cecha jest wspólna dla protistów według rozdziału?",
    "options": [
      "Obecność jądra w komórkach",
      "Brak jądra komórkowego",
      "Ściana komórkowa zawsze z chityny",
      "Wyłącznie wielokomórkowa budowa",
      "Życie tylko na pustyniach",
      "Brak możliwości oddychania"
    ],
    "answer": 0,
    "explanation": "Protisty są bardzo różnorodne, ale ich wspólną cechą jest obecność jądra komórkowego."
  },
  {
    "id": "R02_PRO_02",
    "section": "Protisty",
    "type": "true_false",
    "prompt": "Protisty tworzą bardzo zróżnicowaną grupę, której przedstawicieli często więcej dzieli niż łączy.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podkreślono, że protisty nie są blisko spokrewnione i mogą przypominać rośliny, zwierzęta albo grzyby."
  },
  {
    "id": "R02_PRO_03",
    "section": "Protisty",
    "type": "multi_select",
    "prompt": "Gdzie najczęściej żyją protisty?",
    "options": [
      "w środowisku wodnym",
      "w środowisku wilgotnym",
      "wewnątrz innych organizmów",
      "wyłącznie w suchym piasku pustyni",
      "wyłącznie na gorących skałach wulkanicznych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Protisty występują przede wszystkim w wodzie, wilgotnych miejscach oraz jako pasożyty w innych organizmach."
  },
  {
    "id": "R02_PRO_04",
    "section": "Protisty",
    "type": "fill_in",
    "prompt": "Euglena zielona ma __________, dzięki którym może być samożywna, oraz __________ służącą do ruchu.",
    "options": null,
    "answer": [
      "chloroplasty",
      "wić"
    ],
    "altAnswers": [
      [
        "chloroplasty",
        "chloroplasty"
      ],
      [
        "wić",
        "wic"
      ]
    ],
    "explanation": "Euglena łączy cechy roślin i zwierząt: ma chloroplasty, a porusza się za pomocą wici.",
    "image": "r02_euglena_pantofelek.jpg"
  },
  {
    "id": "R02_PRO_05",
    "section": "Protisty",
    "type": "match",
    "prompt": "Połącz protista z cechą.",
    "options": null,
    "left": [
      "euglena zielona",
      "pantofelek",
      "morszczyn pęcherzykowaty",
      "ameba"
    ],
    "right": [
      "ma chloroplasty i wić",
      "porusza się rzęskami",
      "wielokomórkowy protist morski",
      "porusza się wypustkami komórki"
    ],
    "answer": {
      "euglena zielona": "ma chloroplasty i wić",
      "pantofelek": "porusza się rzęskami",
      "morszczyn pęcherzykowaty": "wielokomórkowy protist morski",
      "ameba": "porusza się wypustkami komórki"
    },
    "explanation": "Rozdział opisuje kilka protistów: euglenę, pantofelka, morszczyn, amebę i okrzemki.",
    "image": "r02_euglena_pantofelek.jpg"
  },
  {
    "id": "R02_PRO_06",
    "section": "Protisty",
    "type": "odd_one_out",
    "prompt": "Co nie należy do protistów: ameba, pantofelek, euglena zielona, drożdże.",
    "options": null,
    "answer": "drożdże",
    "explanation": "Drożdże są grzybami jednokomórkowymi, a pozostałe przykłady należą do protistów."
  },
  {
    "id": "R02_PRO_07",
    "section": "Protisty",
    "type": "scenario",
    "prompt": "Podróżny jedzie do gorącego kraju, gdzie występuje malaria. Które działanie pomaga ograniczyć ryzyko zakażenia opisane w rozdziale?",
    "options": [
      "Stosowanie środków odstraszających komary",
      "Jedzenie surowego mięsa",
      "Dotykanie odchodów chorego kota",
      "Picie wody z kałuży",
      "Unikanie mycia rąk",
      "Przebywanie bez ochrony przy komarach"
    ],
    "answer": 0,
    "explanation": "Malaria jest przenoszona przez samicę komara widliszka, dlatego ważna jest ochrona przed ukąszeniami.",
    "image": "r02_malaria_toksoplazmoza.jpg"
  },
  {
    "id": "R02_PRO_08",
    "section": "Protisty",
    "type": "sort",
    "prompt": "Rozdziel protisty według budowy ciała.",
    "options": null,
    "items": [
      "euglena zielona",
      "pantofelek",
      "ameba",
      "okrzemka",
      "morszczyn pęcherzykowaty"
    ],
    "categories": [
      "jednokomórkowe",
      "wielokomórkowe"
    ],
    "answer": {
      "jednokomórkowe": [
        "euglena zielona",
        "pantofelek",
        "ameba",
        "okrzemka"
      ],
      "wielokomórkowe": [
        "morszczyn pęcherzykowaty"
      ]
    },
    "explanation": "Wśród protistów są organizmy jednokomórkowe i wielokomórkowe; morszczyn jest przykładem protista wielokomórkowego."
  },
  {
    "id": "R02_PRO_09",
    "section": "Protisty",
    "type": "sequence",
    "prompt": "Ułóż etapy przygotowania obserwacji mikroskopowej protistów z hodowli.",
    "options": null,
    "items": [
      "położyć preparat na stoliku mikroskopu",
      "pobrać kroplę wody ze słoika",
      "wykonać rysunek zaobserwowanego protista",
      "położyć szkiełko nakrywkowe na kropli",
      "ustawić ostrość obrazu"
    ],
    "answer": [
      "pobrać kroplę wody ze słoika",
      "położyć szkiełko nakrywkowe na kropli",
      "położyć preparat na stoliku mikroskopu",
      "ustawić ostrość obrazu",
      "wykonać rysunek zaobserwowanego protista"
    ],
    "explanation": "Instrukcja doświadczenia prowadzi od pobrania kropli z hodowli, przez przygotowanie preparatu, do obserwacji i rysunku."
  },
  {
    "id": "R02_GRZ_01",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Która cecha pasuje do komórek grzybów?",
    "options": [
      "Mają ścianę komórkową z chityny i nie mają chloroplastów",
      "Nie mają jądra komórkowego",
      "Zawsze mają ścianę z celulozy i chloroplasty",
      "Są zbudowane wyłącznie z jednej komórki",
      "Nie oddychają i nie pobierają pokarmu",
      "Zawsze żyją tylko w wodzie"
    ],
    "answer": 0,
    "explanation": "Komórki grzybów mają ścianę z chityny, mogą mieć jedno lub więcej jąder i nie zawierają chloroplastów."
  },
  {
    "id": "R02_GRZ_02",
    "section": "Grzyby i porosty",
    "type": "true_false",
    "prompt": "Wszystkie grzyby mają kapelusze i są wielokomórkowe.",
    "options": null,
    "answer": false,
    "explanation": "Nie wszystkie grzyby mają kapelusze; istnieją również grzyby jednokomórkowe, na przykład drożdże."
  },
  {
    "id": "R02_GRZ_03",
    "section": "Grzyby i porosty",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca, w których według rozdziału można spotkać grzyby.",
    "options": [
      "w ściółce leśnej",
      "na drewnie i pniach drzew",
      "na skałach",
      "na wilgotnych ścianach budynków",
      "wewnątrz innych organizmów",
      "wyłącznie w wodzie morskiej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Grzyby żyją głównie na lądzie, często w miejscach wilgotnych i zacienionych, także na lub w innych organizmach."
  },
  {
    "id": "R02_GRZ_04",
    "section": "Grzyby i porosty",
    "type": "fill_in",
    "prompt": "Ciało grzyba wielokomórkowego tworzą nitkowate __________. Luźno ułożone tworzą __________, a ciasno splecione mogą tworzyć __________.",
    "options": null,
    "answer": [
      "strzępki",
      "grzybnię",
      "owocnik"
    ],
    "altAnswers": [
      [
        "strzępki",
        "strzepki"
      ],
      [
        "grzybnię",
        "grzybnie"
      ],
      [
        "owocnik",
        "owocnik"
      ]
    ],
    "explanation": "Strzępki tworzą grzybnię w podłożu, a u niektórych grzybów ciasno splecione strzępki budują owocnik.",
    "image": "r02_budowa_grzyba.jpg"
  },
  {
    "id": "R02_GRZ_05",
    "section": "Grzyby i porosty",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "strzępki",
      "grzybnia",
      "owocnik",
      "chityna"
    ],
    "right": [
      "nitkowate elementy ciała grzyba",
      "luźno ułożona sieć strzępek",
      "ściśle spleciona część nadziemna wielu grzybów",
      "substancja w ścianie komórkowej grzybów"
    ],
    "answer": {
      "strzępki": "nitkowate elementy ciała grzyba",
      "grzybnia": "luźno ułożona sieć strzępek",
      "owocnik": "ściśle spleciona część nadziemna wielu grzybów",
      "chityna": "substancja w ścianie komórkowej grzybów"
    },
    "explanation": "Budowa grzybów wielokomórkowych opiera się na strzępkach tworzących grzybnię i czasem owocnik.",
    "image": "r02_budowa_grzyba.jpg"
  },
  {
    "id": "R02_GRZ_06",
    "section": "Grzyby i porosty",
    "type": "odd_one_out",
    "prompt": "Co nie należy do grzybów: drożdże, borowik, opieńka, pantofelek.",
    "options": null,
    "answer": "pantofelek",
    "explanation": "Pantofelek jest protistem, a drożdże, borowik i opieńka należą do grzybów."
  },
  {
    "id": "R02_GRZ_07",
    "section": "Grzyby i porosty",
    "type": "scenario",
    "prompt": "Drożdże w cieście wykorzystują oddychanie beztlenowe opisane w rozdziale. Jak nazywa się ten proces?",
    "options": [
      "fermentacja alkoholowa",
      "fotosynteza",
      "podział komórki bakterii",
      "zakażenie wirusowe",
      "tworzenie porostu",
      "kiełkowanie nasion"
    ],
    "answer": 0,
    "explanation": "Niektóre grzyby, na przykład drożdże, mogą oddychać beztlenowo i przeprowadzać fermentację alkoholową."
  },
  {
    "id": "R02_GRZ_08",
    "section": "Grzyby i porosty",
    "type": "sort",
    "prompt": "Rozdziel znaczenie grzybów na pozytywne i negatywne.",
    "options": null,
    "items": [
      "rozkład szczątków organizmów",
      "produkcja pieczywa",
      "wywoływanie grzybic",
      "psucie żywności przez pleśnie",
      "porosty jako organizmy pionierskie"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "rozkład szczątków organizmów",
        "produkcja pieczywa",
        "porosty jako organizmy pionierskie"
      ],
      "negatywne": [
        "wywoływanie grzybic",
        "psucie żywności przez pleśnie"
      ]
    },
    "explanation": "Grzyby są ważnymi reducentami i pomagają człowiekowi, ale mogą też wywoływać choroby i niszczyć żywność."
  },
  {
    "id": "R02_GRZ_09",
    "section": "Grzyby i porosty",
    "type": "single_choice",
    "prompt": "Czym są porosty?",
    "options": [
      "Symbiozą grzyba i organizmu samożywnego",
      "Rodzajem wirusa z osłonką",
      "Bakteriami bez ściany komórkowej",
      "Zwierzętami bez tkanek",
      "Wyłącznie owocnikami borowika",
      "Chorobą bakteryjną roślin"
    ],
    "answer": 0,
    "explanation": "Porost jest przykładem symbiozy grzyba i organizmu samożywnego, którego komórki zawierają chlorofil.",
    "image": "r02_porost_przekroj.jpg"
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które królestwa należą w rozdziale do domeny eukariontów?",
    "options": [
      "protisty",
      "grzyby",
      "rośliny",
      "zwierzęta",
      "archeobakterie",
      "bakterie właściwe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Eukarionty obejmują protisty, grzyby, rośliny i zwierzęta; archeobakterie i bakterie właściwe należą do innych domen.",
    "image": "r02_domeny_krolestwa.jpg"
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz domenę z królestwem lub królestwami opisanymi w rozdziale.",
    "options": null,
    "left": [
      "archeowce",
      "bakterie",
      "eukarionty"
    ],
    "right": [
      "archeobakterie",
      "bakterie właściwe",
      "protisty grzyby rośliny i zwierzęta"
    ],
    "answer": {
      "archeowce": "archeobakterie",
      "bakterie": "bakterie właściwe",
      "eukarionty": "protisty grzyby rośliny i zwierzęta"
    },
    "explanation": "Domeny porządkują królestwa: archeowce obejmują archeobakterie, bakterie obejmują bakterie właściwe, a eukarionty obejmują cztery królestwa."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż jednostki klasyfikacji grzyba od gatunku do królestwa.",
    "options": null,
    "items": [
      "klasa",
      "rodzaj",
      "gatunek",
      "królestwo",
      "rodzina",
      "gromada",
      "rząd"
    ],
    "answer": [
      "gatunek",
      "rodzaj",
      "rodzina",
      "rząd",
      "klasa",
      "gromada",
      "królestwo"
    ],
    "explanation": "Kolejność jednostek od najmniejszej do największej jest taka sama niezależnie od przykładowego organizmu.",
    "image": "r02_systematyka_borowika.jpg"
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Archeobakterie są jednokomórkowe, nie mają jądra komórkowego i mogą żyć w ekstremalnych warunkach.",
    "options": null,
    "answer": true,
    "explanation": "W tabeli królestw podano, że archeobakterie nie mają jądra komórkowego, mają ścianę komórkową i żyją m.in. w gorących źródłach."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para cech najlepiej odróżnia grzyby od roślin w rozdziale?",
    "options": [
      "Brak chloroplastów i cudzożywność",
      "Obecność chloroplastów i samożywność",
      "Brak jądra komórkowego i brak ściany",
      "Wyłącznie życie w wodzie i ruch rzęskami",
      "Budowa z kwasu nukleinowego i białek",
      "Zawsze jednokomórkowa budowa"
    ],
    "answer": 0,
    "explanation": "Grzyby nie mają chloroplastów i są cudzożywne, a rośliny są głównie samożywne i mają komórki ze ścianą zawierającą celulozę."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Wielokomórkowy protist żyjący w wodach słonych, także w Morzu Bałtyckim, to...",
    "options": null,
    "answer": "morszczyn pęcherzykowaty",
    "altAnswers": [
      "morszczyn pęcherzykowaty",
      "morszczyn pecherzykowaty",
      "morszczyn"
    ],
    "explanation": "Morszczyn pęcherzykowaty jest opisany jako wielokomórkowy protist osiągający do 100 cm długości i żyjący w wodach słonych."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Malaria może przenosić się przez __________ po ukłuciu samicy komara widliszka, a toksoplazmozą można zarazić się między innymi przez kontakt z odchodami chorego __________.",
    "options": null,
    "answer": [
      "krew",
      "kota"
    ],
    "altAnswers": [
      [
        "krew",
        "krew"
      ],
      [
        "kota",
        "kotem",
        "chorego kota"
      ]
    ],
    "explanation": "Zarodźca malarii przenosi samica komara widliszka, a toksoplazmoza może szerzyć się przez kontakt z odchodami chorego kota.",
    "image": "r02_malaria_toksoplazmoza.jpg"
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie jest przykładem związanym z grzybami pasożytniczymi lub pleśniowymi: gronkowiec szary, buławinka czerwona, czerniak klonowy, sinice.",
    "options": null,
    "answer": "sinice",
    "explanation": "Sinice są samożywnymi bakteriami, a pozostałe przykłady w rozdziale dotyczą grzybów wywołujących choroby lub pleśnie."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po spacerze w terenie ktoś zauważył kleszcza. Jakie działanie najlepiej pasuje do profilaktyki chorób bakteryjnych opisanej w rozdziale?",
    "options": [
      "Noszenie odzieży ochronnej i stosowanie środków odstraszających kleszcze",
      "Celowe chodzenie po wysokiej trawie bez ochrony",
      "Rezygnacja z oglądania skóry po spacerze",
      "Jedzenie surowych jaj po powrocie",
      "Unikanie szczepień i badań kontrolnych",
      "Przykładanie rany do ziemi"
    ],
    "answer": 0,
    "explanation": "Bakterie mogą dostać się do krwi m.in. przez ukąszenie kleszcza, dlatego wskazana jest odzież ochronna i środki odstraszające.",
    "image": "r02_drogi_bakterii.jpg"
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj choroby do czynnika lub grupy organizmów.",
    "options": null,
    "items": [
      "grypa",
      "tężec",
      "malaria",
      "grzybica"
    ],
    "categories": [
      "wirusy",
      "bakterie",
      "protisty pasożytnicze",
      "grzyby"
    ],
    "answer": {
      "wirusy": [
        "grypa"
      ],
      "bakterie": [
        "tężec"
      ],
      "protisty pasożytnicze": [
        "malaria"
      ],
      "grzyby": [
        "grzybica"
      ]
    },
    "explanation": "Rozdział zestawia choroby wywoływane przez różne czynniki: wirusy, bakterie, protisty pasożytnicze i grzyby."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element lub substancję z grupą, dla której jest najbardziej charakterystyczna w rozdziale.",
    "options": null,
    "left": [
      "kwas nukleinowy w otoczce białkowej",
      "substancja jądrowa",
      "chloroplasty eugleny",
      "ściana komórkowa z chityny"
    ],
    "right": [
      "wirusy",
      "bakterie",
      "protisty",
      "grzyby"
    ],
    "answer": {
      "kwas nukleinowy w otoczce białkowej": "wirusy",
      "substancja jądrowa": "bakterie",
      "chloroplasty eugleny": "protisty",
      "ściana komórkowa z chityny": "grzyby"
    },
    "explanation": "Każda z tych cech pomaga odróżniać grupy omawiane w rozdziale: wirusy, bakterie, protisty i grzyby."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego euglena zielona jest przykładem protista łączącego cechy różnych grup?",
    "options": [
      "Ma chloroplasty, ale nie ma ściany komórkowej",
      "Nie ma jądra komórkowego i żyje w glebie",
      "Jest grzybem zbudowanym ze strzępek",
      "Ma owocnik i kapelusz",
      "Jest bakterią o kształcie pałeczki",
      "Nie wykonuje żadnych czynności życiowych"
    ],
    "answer": 0,
    "explanation": "Euglena ma chloroplasty jak organizmy samożywne, ale brak ściany komórkowej upodabnia ją do zwierząt.",
    "image": "r02_euglena_pantofelek.jpg"
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W poroście grzyb dostarcza wodę z solami mineralnymi, a organizm samożywny wytwarza w procesie __________ substancje __________.",
    "options": null,
    "answer": [
      "fotosyntezy",
      "pokarmowe"
    ],
    "altAnswers": [
      [
        "fotosyntezy",
        "fotosynteza"
      ],
      [
        "pokarmowe",
        "odżywcze",
        "pokarmowe"
      ]
    ],
    "explanation": "Porost działa dzięki współpracy: grzyb zapewnia wodę i sole mineralne, a organizm samożywny produkuje substancje pokarmowe.",
    "image": "r02_porost_przekroj.jpg"
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Brak porostów na drzewach może wskazywać na duże zanieczyszczenie powietrza.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podano, że porosty mogą być wskaźnikiem czystości powietrza, a ich brak na drzewach wskazuje na duże zanieczyszczenie.",
    "image": "r02_porost_przekroj.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Wirusy, bakterie, protisty i grzyby",
  icon: "🦠",
  sectionOrder: [
    "Klasyfikacja organizmów",
    "Klucze do oznaczania",
    "Wirusy",
    "Bakterie",
    "Protisty",
    "Grzyby i porosty"
  ],
  sectionIcons: {
    "Klasyfikacja organizmów": "🧬",
    "Klucze do oznaczania": "🔎",
    "Wirusy": "🦠",
    "Bakterie": "🔬",
    "Protisty": "💧",
    "Grzyby i porosty": "🍄"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
