// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WIR  = Wirusy
//   BUD  = Bakterie – budowa i różnorodność
//   CZY  = Bakterie – czynności życiowe i znaczenie
//   PRO  = Protisty
//   GLO  = Glony
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R02_WIR_01",
    section: "Wirusy",
    type: "single_choice",
    prompt: "Która cecha dotyczy wszystkich wirusów?",
    options: [
      "Posiadają jądro komórkowe",
      "Samodzielnie przeprowadzają oddychanie",
      "Nie mają budowy komórkowej",
      "Zawierają jednocześnie DNA i RNA",
      "Wszystkie odżywiają się fotosyntetycznie",
      "Rozmnażają się przez podział komórki"
    ],
    answer: 2,
    explanation: "Wirusy nie mają budowy komórkowej i mogą namnażać się wyłącznie w zakażonych komórkach.",
    image: "r02_wirion_budowa.jpg"
  },
  {
    id: "R02_WIR_02",
    section: "Wirusy",
    type: "multi_select",
    prompt: "Zaznacz elementy, które mogą budować wirion.",
    options: ["DNA", "jądro komórkowe", "RNA", "mitochondrium", "kapsyd", "osłonka białkowo-lipidowa"],
    answer: [0, 2, 4, 5],
    explanation: "Wirion ma materiał genetyczny w postaci DNA lub RNA oraz kapsyd; część wirusów ma dodatkową osłonkę białkowo-lipidową. Nie występują w nim oba kwasy nukleinowe równocześnie."
  },
  {
    id: "R02_WIR_03",
    section: "Wirusy",
    type: "true_false",
    prompt: "Wirusy mogą samodzielnie prowadzić metabolizm poza komórkami gospodarza.",
    options: null,
    answer: false,
    explanation: "Poza zakażoną komórką wirusy nie prowadzą własnego metabolizmu."
  },
  {
    id: "R02_WIR_04",
    section: "Wirusy",
    type: "fill_in",
    prompt: "Pojedynczą cząsteczkę wirusa nazywamy __________, a jej otoczkę białkową __________.",
    options: null,
    answer: ["wirionem", "kapsydem"],
    altAnswers: [
      ["wirionem", "wirion"],
      ["kapsydem", "kapsyd"]
    ],
    explanation: "Wirion składa się z materiału genetycznego otoczonego kapsydem; niektóre wiriony mają ponadto dodatkową osłonkę.",
    image: "r02_wirion_budowa.jpg"
  },
  {
    id: "R02_WIR_05",
    section: "Wirusy",
    type: "riddle",
    prompt: "Jak nazywa się wirus atakujący komórki bakterii?",
    options: null,
    answer: "bakteriofag",
    altAnswers: ["bakteriofag", "fag", "bakteriofagi"],
    explanation: "Bakteriofagi zakażają bakterie; do ich komórek wprowadzają materiał genetyczny, a kapsyd pozostaje na zewnątrz.",
    image: "r02_bakteriofag.jpg"
  },
  {
    id: "R02_WIR_06",
    section: "Wirusy",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie jest przykładem wirusa: HIV, rotawirus, adenowirus, prątek Kocha.",
    options: null,
    answer: "prątek Kocha",
    explanation: "Prątek Kocha jest bakterią wywołującą gruźlicę; pozostałe nazwy to wirusy."
  },
  {
    id: "R02_WIR_07",
    section: "Wirusy",
    type: "scenario",
    prompt: "Osoba chorowała wcześniej na ospę wietrzną. Po osłabieniu odporności uaktywnia się pozostający w organizmie wirus. Jaka choroba może się wtedy ujawnić?",
    options: ["różyczka", "półpasiec", "grypa", "wścieklizna", "mozaika tytoniu", "salmonelloza"],
    answer: 1,
    explanation: "Wirus ospy wietrznej może pozostawać w stanie utajonym w organizmie, a później wywołać półpasiec."
  },
  {
    id: "R02_WIR_08",
    section: "Wirusy",
    type: "match",
    prompt: "Połącz przykład wirusa z rodzajem zakażanego organizmu.",
    options: null,
    left: ["bakteriofag T4", "wirus mozaiki tytoniu", "wirus grypy"],
    right: ["zwierzęta", "bakterie", "rośliny"],
    answer: {
      "bakteriofag T4": "bakterie",
      "wirus mozaiki tytoniu": "rośliny",
      "wirus grypy": "zwierzęta"
    },
    explanation: "Bakteriofagi zakażają bakterie, wirusy roślinne – rośliny, a wirusy zwierzęce – zwierzęta.",
    image: "r02_bakteriofag.jpg"
  },
  {
    id: "R02_WIR_09",
    section: "Wirusy",
    type: "sort",
    prompt: "Przyporządkuj podane wirusy do grup.",
    options: null,
    items: ["wirus różyczki", "wirus mozaiki tytoniu", "HIV", "wirus wścieklizny", "wirus mozaiki pomidora", "wirus grypy"],
    categories: ["wirusy roślinne", "wirusy zwierzęce"],
    answer: {
      "wirusy roślinne": ["wirus mozaiki tytoniu", "wirus mozaiki pomidora"],
      "wirusy zwierzęce": ["HIV", "wirus grypy", "wirus wścieklizny", "wirus różyczki"]
    },
    explanation: "Wirus mozaiki tytoniu i wirus mozaiki pomidora zakażają rośliny, a HIV oraz wirusy grypy, wścieklizny i różyczki – zwierzęta, w tym ludzi."
  },
  {
    id: "R02_WIR_10",
    section: "Wirusy",
    type: "sequence",
    prompt: "Ułóż etapy zakażenia komórki przez wirusa.",
    options: null,
    items: [
      "namnażanie się wirusa",
      "wniknięcie wirusa do komórki",
      "zniszczenie zaatakowanej komórki",
      "przestawienie metabolizmu komórki"
    ],
    answer: [
      "wniknięcie wirusa do komórki",
      "przestawienie metabolizmu komórki",
      "namnażanie się wirusa",
      "zniszczenie zaatakowanej komórki"
    ],
    explanation: "Wirus wnika do komórki, przejmuje jej przemiany na potrzeby namnażania, co może prowadzić do zniszczenia komórki."
  },
  {
    id: "R02_WIR_11",
    section: "Wirusy",
    type: "single_choice",
    prompt: "Co podczas zakażania bakterii przez bakteriofaga pozostaje na zewnątrz komórki?",
    options: [
      "materiał genetyczny faga",
      "cały wirion",
      "kwas nukleinowy",
      "kapsyd",
      "cytoplazma gospodarza",
      "nukleoid bakterii"
    ],
    answer: 3,
    explanation: "Bakteriofag wprowadza do bakterii tylko materiał genetyczny, natomiast kapsyd pozostaje na zewnątrz.",
    image: "r02_bakteriofag.jpg"
  },
  {
    id: "R02_WIR_12",
    section: "Wirusy",
    type: "single_choice",
    prompt: "Czym są priony?",
    options: [
      "cząsteczkami białka",
      "jednokomórkowymi bakteriami",
      "wirusami zawierającymi DNA i RNA",
      "glonami bez chloroplastów",
      "organellami ruchu bakterii",
      "rodzajem wodniczek"
    ],
    answer: 0,
    explanation: "Priony to cząsteczki białek, które mogą zmieniać strukturę prawidłowych białek komórki.",
    image: "r02_prion_bialko.jpg"
  },
  {
    id: "R02_BUD_01",
    section: "Bakterie – budowa i różnorodność",
    type: "single_choice",
    prompt: "Do jakiej grupy organizmów ze względu na budowę komórki należą bakterie?",
    options: ["eukariontów", "prokariontów", "protistów zwierzęcych", "grzybów wielokomórkowych", "zwierząt", "roślin"],
    answer: 1,
    explanation: "Bakterie są prokariontami, ponieważ nie mają jądra komórkowego.",
    image: "r02_bakteria_przekroj.jpg"
  },
  {
    id: "R02_BUD_02",
    section: "Bakterie – budowa i różnorodność",
    type: "multi_select",
    prompt: "Zaznacz struktury budowy komórki bakterii.",
    options: ["rybosomy", "plazmid", "aparat Golgiego", "ściana komórkowa", "jądro komórkowe", "nukleoid"],
    answer: [0, 1, 3, 5],
    explanation: "Komórka bakteryjna może zawierać rybosomy, plazmidy, ścianę komórkową i nukleoid. Nie ma jądra otoczonego błoną ani aparatu Golgiego.",
    image: "r02_bakteria_przekroj.jpg"
  },
  {
    id: "R02_BUD_03",
    section: "Bakterie – budowa i różnorodność",
    type: "true_false",
    prompt: "Materiał genetyczny bakterii znajduje się w jądrze komórkowym otoczonym błoną.",
    options: null,
    answer: false,
    explanation: "DNA bakterii znajduje się w nukleoidzie, który nie jest otoczony błoną komórkową."
  },
  {
    id: "R02_BUD_04",
    section: "Bakterie – budowa i różnorodność",
    type: "fill_in",
    prompt: "Obszar cytoplazmy bakterii, w którym znajduje się jej główny materiał genetyczny, to __________.",
    options: null,
    answer: ["nukleoid"],
    altAnswers: [
      ["nukleoid", "nukleoidem", "nukleoidzie"]
    ],
    explanation: "Nukleoid zawiera DNA bakterii i nie ma otoczki błonowej.",
    image: "r02_bakteria_przekroj.jpg"
  },
  {
    id: "R02_BUD_05",
    section: "Bakterie – budowa i różnorodność",
    type: "riddle",
    prompt: "Jak nazywa się metoda barwienia bakterii, która pozwala podzielić je na Gram-dodatnie i Gram-ujemne?",
    options: null,
    answer: "metoda Grama",
    altAnswers: ["metoda Grama", "barwienie Grama", "barwienie metodą Grama"],
    explanation: "W podziale opracowanym przez Christiana Grama bakterie różnią się zachowaniem podczas barwienia fioletem krystalicznym, płynem Lugola i etanolem.",
    image: "r02_barwienie_grama.jpg"
  },
  {
    id: "R02_BUD_06",
    section: "Bakterie – budowa i różnorodność",
    type: "odd_one_out",
    prompt: "Wskaż bakterię o innym typie kształtu niż pozostałe: ziarniak, dwoinka, gronkowiec, śrubowiec.",
    options: null,
    answer: "śrubowiec",
    explanation: "Śrubowiec ma kształt spiralny; ziarniak, dwoinka i gronkowiec należą do form kulistych.",
    image: "r02_ksztalty_bakterii.jpg"
  },
  {
    id: "R02_BUD_07",
    section: "Bakterie – budowa i różnorodność",
    type: "scenario",
    prompt: "W środowisku jest bardzo sucho i brakuje składników pokarmowych. Niektóre bakterie pozostają przy życiu jako silnie odwodnione komórki otoczone ochronną osłonką. Jak nazywa się taka forma?",
    options: ["gameta", "zarodnik glonu", "komórka przetrwalnikowa", "wodniczka tętniąca", "wirion", "kolonia bakteryjna"],
    answer: 2,
    explanation: "Niektóre bakterie tworzą komórki przetrwalnikowe i pozostają w tym stanie do poprawy warunków środowiskowych."
  },
  {
    id: "R02_BUD_08",
    section: "Bakterie – budowa i różnorodność",
    type: "match",
    prompt: "Połącz podaną formę bakterii z kategorią kształtu.",
    options: null,
    left: ["ziarniak", "pałeczka", "krętek", "prątek"],
    right: ["spiralna", "inna forma", "kulista", "cylindryczna"],
    answer: {
      ziarniak: "kulista",
      "pałeczka": "cylindryczna",
      "krętek": "spiralna",
      "prątek": "inna forma"
    },
    explanation: "Ziarniaki są kuliste, pałeczki cylindryczne, krętki spiralne, a prątki zalicza się do bakterii o kształcie wydłużonym.",
    image: "r02_ksztalty_bakterii.jpg"
  },
  {
    id: "R02_BUD_09",
    section: "Bakterie – budowa i różnorodność",
    type: "sort",
    prompt: "Podziel formy bakterii według kształtu.",
    options: null,
    items: ["laseczka", "krętek", "ziarniak", "przecinkowiec", "pałeczka", "dwoinka", "śrubowiec", "paciorkowiec"],
    categories: ["kuliste", "cylindryczne", "spiralne"],
    answer: {
      kuliste: ["ziarniak", "dwoinka", "paciorkowiec"],
      cylindryczne: ["pałeczka", "laseczka"],
      spiralne: ["krętek", "śrubowiec", "przecinkowiec"]
    },
    explanation: "Wyróżnia się między innymi bakterie kuliste, cylindryczne i spiralne.",
    image: "r02_ksztalty_bakterii.jpg"
  },
  {
    id: "R02_BUD_10",
    section: "Bakterie – budowa i różnorodność",
    type: "sequence",
    prompt: "Ułóż warstwy i obszary komórki bakterii z otoczką od najbardziej zewnętrznego do położonego najgłębiej.",
    options: null,
    items: ["cytoplazma", "otoczka śluzowa", "błona komórkowa", "ściana komórkowa"],
    answer: ["otoczka śluzowa", "ściana komórkowa", "błona komórkowa", "cytoplazma"],
    explanation: "Otoczka leży na zewnątrz ściany komórkowej, pod nią jest błona, która oddziela cytoplazmę od otoczenia.",
    image: "r02_bakteria_przekroj.jpg"
  },
  {
    id: "R02_BUD_11",
    section: "Bakterie – budowa i różnorodność",
    type: "single_choice",
    prompt: "Jak zabarwiają się bakterie Gram-dodatnie w opisanej metodzie barwienia?",
    options: ["na zielono", "na czerwono", "na ciemnofioletowo", "na żółto", "na pomarańczowo", "pozostają przezroczyste"],
    answer: 2,
    explanation: "Bakterie Gram-dodatnie po barwieniu metodą Grama przyjmują ciemnofioletowy kolor."
  },
  {
    id: "R02_BUD_12",
    section: "Bakterie – budowa i różnorodność",
    type: "single_choice",
    prompt: "Która struktura w cytoplazmie bakterii odpowiada za syntezę białek?",
    options: ["otoczka śluzowa", "plazmid", "ściana komórkowa", "wić", "rybosomy", "nukleoid"],
    answer: 4,
    explanation: "Rybosomy bakterii uczestniczą w syntezie białek."
  },
  {
    id: "R02_CZY_01",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "single_choice",
    prompt: "Które bakterie przeprowadzają fotosyntezę?",
    options: ["bakterie gnilne", "bakterie brodawkowe", "sinice", "salmonelle", "prątki Kocha", "laseczki tężca"],
    answer: 2,
    explanation: "Sinice są bakteriami samożywnymi zdolnymi do fotosyntezy."
  },
  {
    id: "R02_CZY_02",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "multi_select",
    prompt: "Zaznacz przykłady korzyści z obecności bakterii.",
    options: [
      "ułatwianie trawienia celulozy przeżuwaczom",
      "oczyszczanie ścieków",
      "powodowanie tężca",
      "kiszenie żywności",
      "gnicie żywności",
      "wzbogacanie gleby w azot"
    ],
    answer: [0, 1, 3, 5],
    explanation: "Bakterie uczestniczą w trawieniu celulozy u przeżuwaczy, oczyszczaniu ścieków, kiszeniu żywności i wzbogacaniu gleby w azot."
  },
  {
    id: "R02_CZY_03",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "true_false",
    prompt: "Koniugacja bakterii prowadzi do zwiększenia liczby komórek bakteryjnych.",
    options: null,
    answer: false,
    explanation: "Koniugacja to wymiana części materiału genetycznego między komórkami; nie zwiększa liczby komórek.",
    image: "r02_koniugacja_bakterii.jpg"
  },
  {
    id: "R02_CZY_04",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "fill_in",
    prompt: "Proces, w którym samożywne bakterie wykorzystują energię reakcji związków nieorganicznych, nazywa się __________.",
    options: null,
    answer: ["chemosyntezą"],
    altAnswers: [
      ["chemosyntezą", "chemosynteza"]
    ],
    explanation: "Bakterie chemosyntetyzujące wykorzystują związki nieorganiczne, na przykład związki siarki lub azotu."
  },
  {
    id: "R02_CZY_05",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "riddle",
    prompt: "Jak nazywają się bakterie cudzożywne, które odżywiają się martwą materią organiczną?",
    options: null,
    answer: "saprobionty",
    altAnswers: ["saprobionty", "saprobiontami", "saprobiont"],
    explanation: "Saprobionty, na przykład bakterie gnilne, wykorzystują martwą materię organiczną."
  },
  {
    id: "R02_CZY_06",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "odd_one_out",
    prompt: "Wskaż proces, który nie jest sposobem oddychania bakterii: oddychanie tlenowe, fermentacja, gnicie, koniugacja.",
    options: null,
    answer: "koniugacja",
    explanation: "Koniugacja polega na przekazywaniu materiału genetycznego pomiędzy bakteriami; nie jest sposobem pozyskiwania energii."
  },
  {
    id: "R02_CZY_07",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "scenario",
    prompt: "Rolnik obserwuje zgrubienia na korzeniach roślin motylkowych. Żyją tam bakterie, dzięki którym gleba może być wzbogacana w azot. O jakie bakterie chodzi?",
    options: [
      "bakterie gnilne",
      "bakterie brodawkowe",
      "bakterie wywołujące tężec",
      "salmonelle",
      "bakterie chorobotwórcze jelit",
      "prątki gruźlicy"
    ],
    answer: 1,
    explanation: "Bakterie brodawkowe żyjące w korzeniach roślin motylkowych tworzą z nimi związek symbiotyczny.",
    image: "r02_korzenie_brodawki.jpg"
  },
  {
    id: "R02_CZY_08",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "match",
    prompt: "Połącz chorobę bakteryjną z drobnoustrojem, który ją wywołuje.",
    options: null,
    left: ["gruźlica", "borelioza", "tężec", "salmonelloza", "czerwonka"],
    right: ["salmonella", "laseczka tężca", "pałeczka czerwonki", "prątek Kocha", "krętek boreliozy"],
    answer: {
      "gruźlica": "prątek Kocha",
      borelioza: "krętek boreliozy",
      "tężec": "laseczka tężca",
      salmonelloza: "salmonella",
      czerwonka: "pałeczka czerwonki"
    },
    explanation: "Każdą z tych chorób wywołuje określony gatunek bakterii."
  },
  {
    id: "R02_CZY_09",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "sort",
    prompt: "Przyporządkuj rodzaje bakterii do sposobu odżywiania.",
    options: null,
    items: [
      "bakterie symbiotyczne",
      "bakterie fotosyntetyzujące",
      "bakterie pasożytnicze",
      "bakterie chemosyntetyzujące",
      "bakterie saprobiontyczne"
    ],
    categories: ["samożywne", "cudzożywne"],
    answer: {
      "samożywne": ["bakterie fotosyntetyzujące", "bakterie chemosyntetyzujące"],
      "cudzożywne": ["bakterie pasożytnicze", "bakterie saprobiontyczne", "bakterie symbiotyczne"]
    },
    explanation: "Bakterie samożywne mogą wykorzystywać fotosyntezę lub chemosyntezę, a cudzożywne żyją jako saprobionty, pasożyty lub symbionty."
  },
  {
    id: "R02_CZY_10",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "sequence",
    prompt: "Ułóż kolejne zdarzenia zachodzące podczas koniugacji bakterii.",
    options: null,
    items: ["rozłączenie komórek", "połączenie się dwóch komórek", "wymiana części materiału genetycznego"],
    answer: ["połączenie się dwóch komórek", "wymiana części materiału genetycznego", "rozłączenie komórek"],
    explanation: "Koniugacja obejmuje połączenie dwóch komórek bakterii, przekazanie fragmentu materiału genetycznego i rozdzielenie się komórek.",
    image: "r02_koniugacja_bakterii.jpg"
  },
  {
    id: "R02_CZY_11",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "single_choice",
    prompt: "Jaki rodzaj substancji może być substratem fermentacji u bakterii?",
    options: ["białko", "chlorofil", "tlen", "cukier", "celuloza", "azot"],
    answer: 3,
    explanation: "Substratem fermentacji bakterii mogą być cukry."
  },
  {
    id: "R02_CZY_12",
    section: "Bakterie – czynności życiowe i znaczenie",
    type: "scenario",
    prompt: "W zakładzie spożywczym przygotowuje się kefir i kiszone produkty. Którą opisaną rolę bakterii wykorzystuje zakład?",
    options: [
      "powodowanie butwienia drewna",
      "wywoływanie boreliozy",
      "zakażanie bakteriofagami",
      "tworzenie porostów",
      "wykorzystanie w przemyśle spożywczym",
      "wytwarzanie chloroplastów"
    ],
    answer: 4,
    explanation: "Bakterie wykorzystuje się między innymi przy kiszeniu żywności i produkcji kefiru.",
    image: "r02_fermentacja_zywnosci.jpg"
  },
  {
    id: "R02_PRO_01",
    section: "Protisty",
    type: "single_choice",
    prompt: "Do jakiej grupy ze względu na typ komórki należą protisty?",
    options: ["prokariontów", "wirusów", "prionów", "eukariontów", "bakteriofagów", "bakterii"],
    answer: 3,
    explanation: "Protisty są eukariontami, czyli organizmami o komórkach z jądrem komórkowym."
  },
  {
    id: "R02_PRO_02",
    section: "Protisty",
    type: "multi_select",
    prompt: "Zaznacz prawdziwe cechy protistów.",
    options: [
      "część prowadzi fotosyntezę",
      "wszystkie mają ścianę komórkową",
      "część nie ma ściany komórkowej",
      "wszystkie są bakteriami",
      "występują formy jednokomórkowe i wielokomórkowe",
      "każdy protist musi mieć wić"
    ],
    answer: [0, 2, 4],
    explanation: "Protisty roślinne mogą mieć chloroplasty i fotosyntetyzować; protisty zwierzęce nie mają ściany komórkowej, a w grupie występują organizmy jedno- i wielokomórkowe."
  },
  {
    id: "R02_PRO_03",
    section: "Protisty",
    type: "true_false",
    prompt: "Ameba porusza się dzięki nibynóżkom tworzonym podczas przelewania się cytoplazmy.",
    options: null,
    answer: true,
    explanation: "Ruch ameby zachodzi przez uwypuklanie błony komórkowej i tworzenie nibynóżek.",
    image: "r02_ameba_nibynozki.jpg"
  },
  {
    id: "R02_PRO_04",
    section: "Protisty",
    type: "fill_in",
    prompt: "Pantofelek porusza się dzięki __________, a do kontrolowania procesów życiowych wykorzystuje duże __________.",
    options: null,
    answer: ["rzęskom", "jądro"],
    altAnswers: [
      ["rzęskom", "rzęski", "rzęskami"],
      ["jądro", "jądrem", "makronukleus", "makronukleusem"]
    ],
    explanation: "Pantofelek ma rzęski, a jego duże jądro kontroluje funkcje życiowe; małe uczestniczy w procesie płciowym.",
    image: "r02_pantofelek_budowa.jpg"
  },
  {
    id: "R02_PRO_05",
    section: "Protisty",
    type: "riddle",
    prompt: "Jak nazywa się jednokomórkowy protist z plamką oczną, chloroplastami i pojedynczą wicią?",
    options: null,
    answer: "euglena zielona",
    altAnswers: ["euglena zielona", "euglena"],
    explanation: "Euglena zielona reaguje na światło dzięki plamce ocznej i porusza się wicią; może odżywiać się samożywnie i cudzożywnie.",
    image: "r02_euglena_budowa.jpg"
  },
  {
    id: "R02_PRO_06",
    section: "Protisty",
    type: "odd_one_out",
    prompt: "Wskaż organizm, który nie należy do protistów: pantofelek, ameba, okrzemka, prątek Kocha.",
    options: null,
    answer: "prątek Kocha",
    explanation: "Prątek Kocha jest bakterią; pantofelek, ameba i okrzemka należą do protistów."
  },
  {
    id: "R02_PRO_07",
    section: "Protisty",
    type: "scenario",
    prompt: "U jednokomórkowego pantofelka gromadzi się nadmiar wody i zbędne substancje. Która struktura usuwa je na zewnątrz?",
    options: ["chloroplasty", "nibynóżki", "wodniczki tętniące", "plazmidy", "otoczki śluzowe", "kapsydy"],
    answer: 2,
    explanation: "Wodniczki tętniące u pantofelka odpowiadają za usuwanie nadmiaru wody i zbędnych substancji.",
    image: "r02_pantofelek_budowa.jpg"
  },
  {
    id: "R02_PRO_08",
    section: "Protisty",
    type: "match",
    prompt: "Połącz protista ze sposobem ruchu.",
    options: null,
    left: ["euglena", "pantofelek", "ameba", "otwornice"],
    right: ["nibynóżki", "bezwładne przemieszczanie w wodzie", "wić", "rzęski"],
    answer: {
      euglena: "wić",
      pantofelek: "rzęski",
      ameba: "nibynóżki",
      otwornice: "bezwładne przemieszczanie w wodzie"
    },
    explanation: "Euglena wykorzystuje wić, pantofelek rzęski, ameba nibynóżki, a otwornice mogą bezwładnie przemieszczać się w wodzie.",
    image: "r02_euglena_budowa.jpg"
  },
  {
    id: "R02_PRO_09",
    section: "Protisty",
    type: "sort",
    prompt: "Przyporządkuj protisty do sposobu odżywiania.",
    options: null,
    items: ["pantofelek", "toczek", "euglena", "morszczyn", "ameba"],
    categories: ["samożywne", "cudzożywne", "miksotroficzne"],
    answer: {
      "samożywne": ["morszczyn", "toczek"],
      "cudzożywne": ["ameba", "pantofelek"],
      miksotroficzne: ["euglena"]
    },
    explanation: "Morszczyn i toczek fotosyntetyzują, ameba i pantofelek pobierają pokarm, zaś euglena zmienia sposób odżywiania zależnie od światła."
  },
  {
    id: "R02_PRO_10",
    section: "Protisty",
    type: "sequence",
    prompt: "Ułóż etapy pobierania i trawienia pokarmu u pantofelka.",
    options: null,
    items: [
      "trawienie pokarmu w wodniczce",
      "usunięcie niestrawionych resztek",
      "pobranie cząstek przez zagłębienie okołogębowe",
      "utworzenie wodniczki pokarmowej"
    ],
    answer: [
      "pobranie cząstek przez zagłębienie okołogębowe",
      "utworzenie wodniczki pokarmowej",
      "trawienie pokarmu w wodniczce",
      "usunięcie niestrawionych resztek"
    ],
    explanation: "Pantofelek pobiera pokarm, tworzy wodniczki pokarmowe, w których zachodzi trawienie, a następnie usuwa niestrawione resztki.",
    image: "r02_pantofelek_budowa.jpg"
  },
  {
    id: "R02_PRO_11",
    section: "Protisty",
    type: "single_choice",
    prompt: "Które zwierzę przenosi zarodźca malarii?",
    options: ["kot", "komar", "pies", "kleszcz", "mucha", "motyl"],
    answer: 1,
    explanation: "Zarodziec malarii jest protistem przenoszonym przez komara."
  },
  {
    id: "R02_PRO_12",
    section: "Protisty",
    type: "single_choice",
    prompt: "Jak rozmnaża się bezpłciowo euglena zielona?",
    options: [
      "przez podział podłużny",
      "przez pączkowanie",
      "przez tworzenie nasion",
      "przez zapłodnienie zewnętrzne",
      "przez koniugację bakterii",
      "przez wytwarzanie zarodników grzybów"
    ],
    answer: 0,
    explanation: "Euglena zielona rozmnaża się bezpłciowo przez podział podłużny."
  },
  {
    id: "R02_GLO_01",
    section: "Glony",
    type: "single_choice",
    prompt: "Do ilu królestw należą glony?",
    options: ["jednego", "dwóch", "trzech", "czterech", "pięciu", "sześciu"],
    answer: 2,
    explanation: "W przyjętym podziale glony należą do trzech królestw: bakterii, protistów i roślin."
  },
  {
    id: "R02_GLO_02",
    section: "Glony",
    type: "multi_select",
    prompt: "Zaznacz znaczenie glonów.",
    options: [
      "są producentami tlenu w wodzie",
      "stanowią pokarm innych organizmów",
      "wywołują tężec",
      "współtworzą porosty z grzybami",
      "są składnikiem fitoplanktonu",
      "mogą wskazywać zanieczyszczenie środowiska"
    ],
    answer: [0, 1, 3, 4, 5],
    explanation: "Glony produkują tlen w wodzie, są pokarmem, tworzą porosty z grzybami, wchodzą w skład fitoplanktonu i służą jako bioindykatory.",
    image: "r02_porost_na_skale.jpg"
  },
  {
    id: "R02_GLO_03",
    section: "Glony",
    type: "true_false",
    prompt: "Ciało glonów tworzy wyspecjalizowane tkanki, podobnie jak ciało roślin lądowych.",
    options: null,
    answer: false,
    explanation: "Choć wiele glonów ma komórki przypominające roślinne, nie tworzą one tkanek; ich ciało nazywa się plechą."
  },
  {
    id: "R02_GLO_04",
    section: "Glony",
    type: "fill_in",
    prompt: "Ciało glonów, które nie jest zbudowane z tkanek, nazywa się __________.",
    options: null,
    answer: ["plechą"],
    altAnswers: [
      ["plechą", "plecha"]
    ],
    explanation: "Ciało glonów nazywa się plechą, ponieważ nie jest zróżnicowane na typowe tkanki i organy.",
    image: "r02_plecha_glonow.jpg"
  },
  {
    id: "R02_GLO_05",
    section: "Glony",
    type: "riddle",
    prompt: "Jak nazywa się jednokomórkowy glon?",
    options: null,
    answer: "chlorella",
    altAnswers: ["chlorella"],
    explanation: "Chlorella jest jednokomórkowym glonem."
  },
  {
    id: "R02_GLO_06",
    section: "Glony",
    type: "odd_one_out",
    prompt: "Wskaż organizm, który nie jest glonem: chlorella, listownica, morszczyn, prątek Kocha.",
    options: null,
    answer: "prątek Kocha",
    explanation: "Prątek Kocha jest bakterią wywołującą gruźlicę, a pozostałe nazwy są przykładami glonów.",
    image: "r02_plecha_glonow.jpg"
  },
  {
    id: "R02_GLO_07",
    section: "Glony",
    type: "scenario",
    prompt: "Badacz pobiera próbkę glonów z najgłębszej części zbiornika wodnego. Która grupa może występować na największej głębokości?",
    options: ["zielenice", "sinice", "okrzemki", "krasnorosty", "toczek", "brunatnice"],
    answer: 3,
    explanation: "Schemat przedstawia zielenice najpłycej, brunatnice głębiej, a krasnorosty najgłębiej.",
    image: "r02_strefy_glonow.jpg"
  },
  {
    id: "R02_GLO_08",
    section: "Glony",
    type: "match",
    prompt: "Połącz grupy glonów z ich typową głębokością występowania w wodzie.",
    options: null,
    left: ["zielenice", "brunatnice", "krasnorosty"],
    right: ["najgłębsza strefa", "najpłytsza strefa", "strefa pośrednia"],
    answer: {
      zielenice: "najpłytsza strefa",
      brunatnice: "strefa pośrednia",
      krasnorosty: "najgłębsza strefa"
    },
    explanation: "Zielenice występują najbliżej powierzchni wody, brunatnice głębiej, a krasnorosty mogą żyć na największych głębokościach."
  },
  {
    id: "R02_GLO_09",
    section: "Glony",
    type: "sort",
    prompt: "Przyporządkuj grupy glonów do odpowiednich królestw.",
    options: null,
    items: ["brunatnice", "zielenice", "sinice", "krasnorosty", "okrzemki"],
    categories: ["bakterie", "protisty", "rośliny"],
    answer: {
      bakterie: ["sinice"],
      protisty: ["okrzemki", "brunatnice"],
      "rośliny": ["zielenice", "krasnorosty"]
    },
    explanation: "Do glonów zalicza się sinice (bakterie), okrzemki i brunatnice (protisty), a także zielenice i krasnorosty (rośliny)."
  },
  {
    id: "R02_GLO_10",
    section: "Glony",
    type: "sequence",
    prompt: "Ułóż grupy glonów od zasiedlających najpłytsze do zasiedlających najgłębsze wody.",
    options: null,
    items: ["krasnorosty", "zielenice", "brunatnice"],
    answer: ["zielenice", "brunatnice", "krasnorosty"],
    explanation: "W wodzie zielenice przeważnie żyją płycej, brunatnice głębiej, a krasnorosty mogą występować najgłębiej.",
    image: "r02_strefy_glonow.jpg"
  },
  {
    id: "R02_GLO_11",
    section: "Glony",
    type: "single_choice",
    prompt: "Na czym polega rozmnażanie płciowe glonów?",
    options: [
      "na wytwarzaniu gamet",
      "na podziale komórki",
      "na fragmentacji plechy",
      "na koniugacji bakterii",
      "na tworzeniu kapsydów",
      "na namnażaniu w komórce gospodarza"
    ],
    answer: 0,
    explanation: "Rozmnażanie płciowe glonów obejmuje wytwarzanie gamet i ich łączenie."
  },
  {
    id: "R02_GLO_12",
    section: "Glony",
    type: "single_choice",
    prompt: "Co oznacza, że glony mogą być bioindykatorami?",
    options: [
      "żywią się wyłącznie bakteriami",
      "tworzą komórki przetrwalnikowe",
      "mają zawsze budowę jednokomórkową",
      "przenoszą malarię",
      "pomagają oceniać zanieczyszczenie środowiska",
      "nie przeprowadzają fotosyntezy"
    ],
    answer: 4,
    explanation: "Bioindykatory to organizmy, których obecność lub kondycja pomaga ocenić stopień zanieczyszczenia środowiska."
  },
  {
    id: "R02_HARD_01",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które cechy odróżniają wirusy od komórek organizmów żywych według tekstu?",
    options: [
      "brak budowy komórkowej",
      "obecność rybosomów",
      "namnażanie jedynie w zakażonej komórce",
      "obecność DNA i RNA naraz",
      "brak własnego metabolizmu",
      "występowanie tylko jednego rodzaju kwasu nukleinowego"
    ],
    answer: [0, 2, 4, 5],
    explanation: "Wirusy nie mają budowy komórkowej i własnego metabolizmu, namnażają się jedynie w zakażonych komórkach oraz zawierają DNA albo RNA, nigdy oba równocześnie."
  },
  {
    id: "R02_HARD_02",
    section: "Super trudne",
    type: "match",
    prompt: "Dopasuj elementy budowy wirusa lub zakażenia do ich charakterystyki.",
    options: null,
    left: ["kapsyd", "DNA albo RNA", "osłonka białkowo-lipidowa", "bakteriofag"],
    right: [
      "dodatkowa otoczka obecna u niektórych wirusów",
      "wirus atakujący bakterie",
      "białkowa osłona materiału genetycznego",
      "materiał genetyczny wirusa"
    ],
    answer: {
      kapsyd: "białkowa osłona materiału genetycznego",
      "DNA albo RNA": "materiał genetyczny wirusa",
      "osłonka białkowo-lipidowa": "dodatkowa otoczka obecna u niektórych wirusów",
      bakteriofag: "wirus atakujący bakterie"
    },
    explanation: "Wirusy zawierają materiał genetyczny i kapsyd, a niektóre także osłonkę; bakteriofagi wyróżnia zdolność zakażania bakterii.",
    image: "r02_wirion_budowa.jpg"
  },
  {
    id: "R02_HARD_03",
    section: "Super trudne",
    type: "scenario",
    prompt: "W laboratorium zastosowano fiolet krystaliczny, płyn Lugola i etanol. Badane bakterie pozostały ciemnofioletowe. Do której grupy należą?",
    options: [
      "Gram-dodatnich",
      "Gram-ujemnych",
      "protistów roślinnych",
      "sinic fotosyntetyzujących",
      "wirusów zwierzęcych",
      "glonów wielokomórkowych"
    ],
    answer: 0,
    explanation: "Bakterie barwiące się metodą Grama na ciemnofioletowo są Gram-dodatnie.",
    image: "r02_barwienie_grama.jpg"
  },
  {
    id: "R02_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Długość komórek bakterii może wynosić od około __________ do około __________ mikrometrów.",
    options: null,
    answer: ["0,2", "10"],
    altAnswers: [
      ["0,2", "0.2", "0,2 µm", "0.2 µm"],
      ["10", "10 µm"]
    ],
    explanation: "Komórki bakterii mogą mieć długość od około 0,2 µm do około 10 µm."
  },
  {
    id: "R02_HARD_05",
    section: "Super trudne",
    type: "sort",
    prompt: "Podziel choroby według typu czynnika chorobotwórczego.",
    options: null,
    items: ["toksoplazmoza", "gruźlica", "grypa", "borelioza", "malaria", "różyczka", "tężec", "wścieklizna"],
    categories: ["choroby wirusowe", "choroby bakteryjne", "choroby wywoływane przez protisty"],
    answer: {
      "choroby wirusowe": ["grypa", "wścieklizna", "różyczka"],
      "choroby bakteryjne": ["gruźlica", "borelioza", "tężec"],
      "choroby wywoływane przez protisty": ["malaria", "toksoplazmoza"]
    },
    explanation: "Grypa, wścieklizna i różyczka są chorobami wirusowymi, gruźlica, borelioza i tężec – bakteryjnymi, a malaria i toksoplazmoza – wywoływanymi przez protisty."
  },
  {
    id: "R02_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż zdarzenia w kolejności opisującej utrzymywanie się i uaktywnianie wirusa ospy wietrznej.",
    options: null,
    items: [
      "obniżenie odporności gospodarza",
      "uaktywnienie wirusa i możliwość wystąpienia półpaśca",
      "wniknięcie wirusa do komórek gospodarza",
      "pozostawanie wirusa w stanie utajonym"
    ],
    answer: [
      "wniknięcie wirusa do komórek gospodarza",
      "pozostawanie wirusa w stanie utajonym",
      "obniżenie odporności gospodarza",
      "uaktywnienie wirusa i możliwość wystąpienia półpaśca"
    ],
    explanation: "Przykład wirusa ospy wietrznej ilustruje zakażenie, stan utajony, a następnie aktywację po spadku odporności."
  },
  {
    id: "R02_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które dwa organizmy lub grupy organizmów mogą przeprowadzać koniugację?",
    options: [
      "wirusy i sinice",
      "glony i priony",
      "bakterie i pantofelek",
      "bakteriofagi i grzyby",
      "krasnorosty i wirusy",
      "priony i euglena"
    ],
    answer: 2,
    explanation: "Koniugacja występuje u bakterii i u pantofelków, choć jej przebieg jest inny w obu grupach."
  },
  {
    id: "R02_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz organizm z parą cech, które występują u niego jednocześnie.",
    options: null,
    left: ["pantofelek", "euglena zielona", "ameba", "morszczyn"],
    right: ["nibynóżki i cudzożywność", "plecha i fotosynteza", "rzęski i dwa jądra", "wić i plamka oczna"],
    answer: {
      pantofelek: "rzęski i dwa jądra",
      "euglena zielona": "wić i plamka oczna",
      ameba: "nibynóżki i cudzożywność",
      morszczyn: "plecha i fotosynteza"
    },
    explanation: "Pantofelek ma rzęski i dwa jądra, euglena wić i plamkę oczną, ameba przemieszcza się nibynóżkami, a morszczyn jest fotosyntetyzującym glonem plechowym."
  },
  {
    id: "R02_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż organizm o innym typie organizacji komórki niż pozostałe: pałeczka, krętek, prątek Kocha, pantofelek.",
    options: null,
    answer: "pantofelek",
    explanation: "Pantofelek jest eukariontem, natomiast trzy pozostałe pozycje oznaczają bakterie, czyli prokarionty."
  },
  {
    id: "R02_HARD_10",
    section: "Super trudne",
    type: "true_false",
    prompt: "Duże jądro pantofelka uczestniczy w procesie płciowym, a małe kontroluje jego procesy życiowe.",
    options: null,
    answer: false,
    explanation: "Jest odwrotnie: duże jądro kontroluje funkcje życiowe, a małe uczestniczy w procesie płciowym.",
    image: "r02_pantofelek_budowa.jpg"
  },
  {
    id: "R02_HARD_11",
    section: "Super trudne",
    type: "scenario",
    prompt: "W ciemności jednokomórkowy organizm nie może korzystać z fotosyntezy, lecz nadal pobiera pokarm w sposób cudzożywny. Ma plamkę oczną i pojedynczą wić. Jaki to organizm?",
    options: ["pantofelek", "ameba", "morszczyn", "otwornica", "euglena zielona", "chlorella"],
    answer: 4,
    explanation: "Euglena zielona jest miksotroficzna: przy dostępie do światła prowadzi fotosyntezę, a bez światła odżywia się cudzożywnie.",
    image: "r02_euglena_budowa.jpg"
  },
  {
    id: "R02_HARD_12",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jakie barwy światła wykorzystują krasnorosty według schematu zasiedlania zbiorników wodnych?",
    options: [
      "czerwone i żółte",
      "niebieskie i zielone",
      "pomarańczowe i czerwone",
      "czerwone i fioletowe",
      "żółte i pomarańczowe",
      "tylko czerwone"
    ],
    answer: 1,
    explanation: "Krasnorosty mogą wykorzystywać światło niebieskie i zielone, co ułatwia im życie na dużych głębokościach.",
    image: "r02_strefy_glonow.jpg"
  },
  {
    id: "R02_HARD_13",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywa się rodzaj oddychania beztlenowego bakterii, w którym substratem jest białko?",
    options: null,
    answer: "gnicie",
    altAnswers: ["gnicie", "proces gnicia"],
    explanation: "Przy gniciu bakterie rozkładają białka, a przy fermentacji mogą rozkładać cukry."
  },
  {
    id: "R02_HARD_14",
    section: "Super trudne",
    type: "scenario",
    prompt: "W środowisku spotkano czynnik złożony z białka, zdolny zmieniać strukturę prawidłowych białek komórkowych. Jak nazywa się taki czynnik?",
    options: ["plazmidy", "wiriony", "rybosomy", "priony", "wodniczki", "gamety"],
    answer: 3,
    explanation: "Priony są cząsteczkami białek, które powodują nieprawidłowe zmiany struktury innych białek.",
    image: "r02_prion_bialko.jpg"
  }
];

const KID_PROMPTS = {
  R02_WIR_01: "Które zdanie o wirusach jest prawdziwe?",
  R02_WIR_05: "Jaki wirus atakuje bakterie?",
  R02_BUD_01: "Jak nazywamy organizmy bez jądra komórkowego, takie jak bakterie?",
  R02_BUD_04: "Jak nazywa się miejsce, gdzie bakteria ma swoje DNA?",
  R02_CZY_03: "Czy przy koniugacji przybywa komórek bakterii?",
  R02_CZY_07: "Jak nazywają się bakterie żyjące w brodawkach korzeni roślin?",
  R02_PRO_05: "Który protist ma wić, chloroplasty i plamkę oczną?",
  R02_PRO_07: "Co u pantofelka usuwa nadmiar wody?",
  R02_GLO_03: "Czy glony mają tkanki?",
  R02_GLO_12: "Co pokazują glony, gdy są bioindykatorami?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Wirusy, bakterie, protisty i glony",
  icon: "🦠",
  sectionOrder: ["Wirusy", "Bakterie – budowa i różnorodność", "Bakterie – czynności życiowe i znaczenie", "Protisty", "Glony"],
  sectionIcons: {
    Wirusy: "🦠",
    "Bakterie – budowa i różnorodność": "🔬",
    "Bakterie – czynności życiowe i znaczenie": "🧫",
    Protisty: "🦠",
    Glony: "🌿"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
