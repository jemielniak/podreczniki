// Skróty sekcji (do identyfikatorów ćwiczeń):
//   REG  = Region i jego cechy
//   ZRO  = Źródła informacji o regionie
//   PAL  = Podróż po Pałukach
//   OJC  = Moja mała ojczyzna
//   DZL  = Działania dla lokalnej społeczności
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R05_REG_01",
    section: "Region i jego cechy",
    type: "single_choice",
    prompt: "Czym jest region?",
    options: ["Obszarem różniącym się od innych części kraju określonymi cechami", "Wyłącznie obszarem jednego miasta", "Każdym terenem zamkniętym granicą państwa", "Tylko jednostką podziału administracyjnego", "Obszarem obejmującym zawsze jedno województwo", "Wyłącznie krainą o jednakowym klimacie"],
    answer: 0,
    explanation: "Region to obszar większy niż powiat, miasto czy wieś, wyróżniający się określonymi warunkami przyrodniczymi, kulturą lub gospodarką."
  },
  {
    id: "R05_REG_02",
    section: "Region i jego cechy",
    type: "true_false",
    prompt: "Granice regionów historycznych w większości przypadków pokrywają się z granicami województw.",
    options: null,
    answer: false,
    explanation: "Granice administracyjne i granice regionów historycznych najczęściej się nie pokrywają.",
    image: "r05_regiony_historyczne_polski.jpg"
  },
  {
    id: "R05_REG_03",
    section: "Region i jego cechy",
    type: "multi_select",
    prompt: "Zaznacz trzy główne grupy cech uwzględnianych w charakterystyce regionu.",
    options: ["Cechy przyrodnicze", "Cechy społeczno-kulturowe", "Cechy gospodarcze", "Wyłącznie cechy językowe", "Wyłącznie granice administracyjne"],
    answer: [0, 1, 2],
    explanation: "Pełna charakterystyka regionu obejmuje cechy przyrodnicze, społeczno-kulturowe oraz gospodarcze."
  },
  {
    id: "R05_REG_04",
    section: "Region i jego cechy",
    type: "fill_in",
    prompt: "Geografowie wydzielają regiony __________ na podstawie kryteriów przyrodniczych.",
    options: null,
    answer: ["fizycznogeograficzne"],
    altAnswers: [["fizycznogeograficzne", "fizyczno-geograficzne"]],
    explanation: "Regiony fizycznogeograficzne wyróżnia się na podstawie cech środowiska przyrodniczego."
  },
  {
    id: "R05_REG_05",
    section: "Region i jego cechy",
    type: "sort",
    prompt: "Przyporządkuj elementy opisu do właściwych grup cech regionu.",
    options: null,
    items: ["klimat", "struktura demograficzna", "główne zakłady przemysłowe", "wody", "dziedzictwo kulturowe", "szlaki transportowe"],
    categories: ["cechy przyrodnicze", "cechy społeczno-kulturowe", "cechy gospodarcze"],
    answer: {
      "cechy przyrodnicze": ["klimat", "wody"],
      "cechy społeczno-kulturowe": ["struktura demograficzna", "dziedzictwo kulturowe"],
      "cechy gospodarcze": ["główne zakłady przemysłowe", "szlaki transportowe"]
    },
    explanation: "Klimat i wody opisują przyrodę, demografia i dziedzictwo dotyczą mieszkańców oraz kultury, a przemysł i transport należą do gospodarki.",
    image: "r05_krajobraz_regionu.jpg"
  },
  {
    id: "R05_REG_06",
    section: "Region i jego cechy",
    type: "odd_one_out",
    prompt: "Co nie jest cechą przyrodniczą regionu: gleby, klimat, skały, struktura zatrudnienia.",
    options: null,
    answer: "struktura zatrudnienia",
    explanation: "Struktura zatrudnienia jest cechą gospodarczą, natomiast gleby, klimat i skały należą do cech przyrodniczych."
  },
  {
    id: "R05_REG_07",
    section: "Region i jego cechy",
    type: "scenario",
    prompt: "Uczeń opisuje układ i wielkość miast, osadnictwo wiejskie oraz procesy urbanizacji. Którą grupę cech regionu charakteryzuje?",
    options: ["Społeczno-kulturowe", "Przyrodnicze", "Klimatyczne", "Geologiczne", "Hydrologiczne", "Glebowe"],
    answer: 0,
    explanation: "Sieć osadnicza i procesy urbanizacji należą do społeczno-kulturowych cech regionu."
  },
  {
    id: "R05_REG_08",
    section: "Region i jego cechy",
    type: "match",
    prompt: "Połącz element charakterystyki z odpowiadającą mu informacją.",
    options: null,
    left: ["dziedzictwo przyrodnicze", "dziedzictwo kulturowe", "rolnictwo", "transport"],
    right: ["parki narodowe i rezerwaty", "zabytki i tradycje", "kierunki upraw i chowu", "drogi i linie kolejowe"],
    answer: {
      "dziedzictwo przyrodnicze": "parki narodowe i rezerwaty",
      "dziedzictwo kulturowe": "zabytki i tradycje",
      "rolnictwo": "kierunki upraw i chowu",
      "transport": "drogi i linie kolejowe"
    },
    explanation: "Każda informacja odpowiada innej części charakterystyki regionu."
  },
  {
    id: "R05_REG_09",
    section: "Region i jego cechy",
    type: "riddle",
    prompt: "Jestem jednym z dwóch największych regionów historycznych Polski, a moja nazwa zawiera słowo oznaczające wielkość. Kim jestem?",
    options: null,
    answer: "Wielkopolska",
    altAnswers: ["Wielkopolska", "wielkopolska"],
    explanation: "Do największych regionów historycznych Polski należą Wielkopolska i Małopolska.",
    image: "r05_regiony_historyczne_polski.jpg"
  },
  {
    id: "R05_REG_10",
    section: "Region i jego cechy",
    type: "true_false",
    prompt: "Do gospodarczych cech regionu zalicza się między innymi strukturę zatrudnienia, przemysł, usługi i transport.",
    options: null,
    answer: true,
    explanation: "Te elementy pokazują rodzaje działalności gospodarczej i sposób funkcjonowania regionu.",
    image: "r05_krajobraz_regionu.jpg"
  },
  {
    id: "R05_REG_11",
    section: "Region i jego cechy",
    type: "sequence",
    prompt: "Ułóż zakresy charakterystyki regionu w logicznej kolejności od cech środowiska do działalności człowieka.",
    options: null,
    items: ["cechy gospodarcze", "cechy przyrodnicze", "cechy społeczno-kulturowe"],
    answer: ["cechy przyrodnicze", "cechy społeczno-kulturowe", "cechy gospodarcze"],
    explanation: "Charakterystyka regionu została uporządkowana od cech przyrodniczych, przez społeczno-kulturowe, po gospodarcze."
  },

  {
    id: "R05_ZRO_01",
    section: "Źródła informacji o regionie",
    type: "multi_select",
    prompt: "Zaznacz źródła, z których można korzystać podczas opisywania regionu.",
    options: ["Obserwacje terenowe", "Wywiady ze starszymi osobami", "Atlas geograficzny", "Roczniki statystyczne", "Losowe niesprawdzone komentarze", "Wyłącznie własne przypuszczenia"],
    answer: [0, 1, 2, 3],
    explanation: "Rzetelny opis regionu powinien opierać się na różnych źródłach, w tym obserwacjach, rozmowach, mapach i danych statystycznych."
  },
  {
    id: "R05_ZRO_02",
    section: "Źródła informacji o regionie",
    type: "scenario",
    prompt: "Uczeń chce sprawdzić przebieg granic swojego województwa. Z jakiej mapy powinien skorzystać?",
    options: ["Administracyjnej", "Klimatycznej", "Geologicznej", "Glebowej", "Roślinności", "Opadów atmosferycznych"],
    answer: 0,
    explanation: "Przebieg granic województw przedstawiają mapy administracyjne."
  },
  {
    id: "R05_ZRO_03",
    section: "Źródła informacji o regionie",
    type: "match",
    prompt: "Połącz rodzaj mapy z informacją, którą można z niej odczytać.",
    options: null,
    left: ["mapa administracyjna", "mapa fizycznogeograficzna", "mapa transportowa", "mapa turystyczna"],
    right: ["granice województw", "ukształtowanie powierzchni", "sieć dróg i linii kolejowych", "atrakcje i szlaki"],
    answer: {
      "mapa administracyjna": "granice województw",
      "mapa fizycznogeograficzna": "ukształtowanie powierzchni",
      "mapa transportowa": "sieć dróg i linii kolejowych",
      "mapa turystyczna": "atrakcje i szlaki"
    },
    explanation: "Różne mapy tematyczne dostarczają innych informacji o regionie."
  },
  {
    id: "R05_ZRO_04",
    section: "Źródła informacji o regionie",
    type: "true_false",
    prompt: "Obserwacje terenowe pozwalają rozpoznawać elementy krajobrazu i ukształtowanie powierzchni regionu.",
    options: null,
    answer: true,
    explanation: "W terenie można bezpośrednio obserwować rzeźbę oraz inne składniki krajobrazu.",
    image: "r05_obserwacje_terenowe.jpg"
  },
  {
    id: "R05_ZRO_05",
    section: "Źródła informacji o regionie",
    type: "fill_in",
    prompt: "Z drukowanych i internetowych __________ można poznać liczbę ludności oraz jej zmiany.",
    options: null,
    answer: ["roczników statystycznych"],
    altAnswers: [["roczników statystycznych", "roczniki statystyczne"]],
    explanation: "Roczniki statystyczne zawierają między innymi dane demograficzne i gospodarcze."
  },
  {
    id: "R05_ZRO_06",
    section: "Źródła informacji o regionie",
    type: "odd_one_out",
    prompt: "Co nie jest miejscem pozyskiwania szczegółowych map regionu: księgarnia, biblioteka, biuro informacji turystycznej, piec domowy.",
    options: null,
    answer: "piec domowy",
    explanation: "Map można szukać w księgarniach, bibliotekach i biurach informacji turystycznej."
  },
  {
    id: "R05_ZRO_07",
    section: "Źródła informacji o regionie",
    type: "single_choice",
    prompt: "Co należy zrobić jako pierwsze podczas przygotowywania prezentacji o regionie?",
    options: ["Wybrać temat i przygotować konspekt", "Dodać przypadkowe fotografie", "Pominąć źródła", "Rozpocząć od kosztorysu wycieczki", "Ograniczyć się do jednego zdania", "Usunąć informacje o regionie"],
    answer: 0,
    explanation: "Pierwszym etapem jest wybór tematu i przygotowanie konspektu, czyli uporządkowanego spisu zagadnień."
  },
  {
    id: "R05_ZRO_08",
    section: "Źródła informacji o regionie",
    type: "multi_select",
    prompt: "Które elementy mogą być walorami turystycznymi regionu?",
    options: ["Parki narodowe", "Muzea", "Skanseny", "Zabytki techniki", "Imprezy kulturalne", "Saldo migracji jako atrakcja"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Walory turystyczne mogą mieć charakter przyrodniczy albo kulturowy."
  },
  {
    id: "R05_ZRO_09",
    section: "Źródła informacji o regionie",
    type: "riddle",
    prompt: "Jestem uporządkowanym spisem zagadnień, które zostaną kolejno omówione w prezentacji. Co to jest?",
    options: null,
    answer: "konspekt",
    altAnswers: ["konspekt", "plan prezentacji"],
    explanation: "Konspekt porządkuje treść prezentacji i pomaga zachować logiczną kolejność."
  },
  {
    id: "R05_ZRO_10",
    section: "Źródła informacji o regionie",
    type: "sort",
    prompt: "Przyporządkuj informację do źródła, które szczególnie dobrze ją dostarcza.",
    options: null,
    items: ["wspomnienia o dawnych mieszkańcach", "liczba ludności", "przebieg dróg", "forma terenu widoczna w terenie"],
    categories: ["wywiad", "rocznik statystyczny", "mapa transportowa", "obserwacja terenowa"],
    answer: {
      "wywiad": ["wspomnienia o dawnych mieszkańcach"],
      "rocznik statystyczny": ["liczba ludności"],
      "mapa transportowa": ["przebieg dróg"],
      "obserwacja terenowa": ["forma terenu widoczna w terenie"]
    },
    explanation: "Dobór źródła zależy od rodzaju poszukiwanej informacji.",
    image: "r05_zrodla_informacji.jpg"
  },
  {
    id: "R05_ZRO_11",
    section: "Źródła informacji o regionie",
    type: "sequence",
    prompt: "Ułóż działania przy tworzeniu prezentacji od pierwszego do ostatniego.",
    options: null,
    items: ["wymienić wykorzystane źródła", "zebrać informacje i fotografie", "wybrać temat", "przygotować konspekt"],
    answer: ["wybrać temat", "przygotować konspekt", "zebrać informacje i fotografie", "wymienić wykorzystane źródła"],
    explanation: "Najpierw określa się temat i plan, później gromadzi materiały, a na końcu podaje wykorzystane źródła."
  },

  {
    id: "R05_PAL_01",
    section: "Podróż po Pałukach",
    type: "single_choice",
    prompt: "Czym są Pałuki?",
    options: ["Regionem historyczno-kulturowym", "Jednym miastem", "Parkiem narodowym", "Pasmem górskim", "Wyspą na Bałtyku", "Województwem"],
    answer: 0,
    explanation: "Pałuki to region historyczno-kulturowy położony na terenie dwóch województw."
  },
  {
    id: "R05_PAL_02",
    section: "Podróż po Pałukach",
    type: "multi_select",
    prompt: "W których województwach leżą Pałuki?",
    options: ["Kujawsko-pomorskim", "Wielkopolskim", "Pomorskim", "Lubelskim", "Podkarpackim"],
    answer: [0, 1],
    explanation: "Pałuki znajdują się na terenie województw kujawsko-pomorskiego i wielkopolskiego.",
    image: "r05_paluki_krajobraz.jpg"
  },
  {
    id: "R05_PAL_03",
    section: "Podróż po Pałukach",
    type: "sequence",
    prompt: "Ułóż miejscowości w kolejności na trasie wyjazdu z Bydgoszczy przed powrotem do Żnina.",
    options: null,
    items: ["Biskupin", "Żnin", "Gąsawa", "Wenecja", "Bydgoszcz"],
    answer: ["Bydgoszcz", "Żnin", "Wenecja", "Biskupin", "Gąsawa"],
    explanation: "Planowana trasa prowadzi z Bydgoszczy przez Żnin, Wenecję i Biskupin do Gąsawy, a następnie wraca przez Żnin."
  },
  {
    id: "R05_PAL_04",
    section: "Podróż po Pałukach",
    type: "fill_in",
    prompt: "Pałuki są nazywane krainą __________ jezior.",
    options: null,
    answer: ["130"],
    altAnswers: [["130", "stu trzydziestu"]],
    explanation: "Pałuki określa się jako krainę 130 jezior związanych z polodowcową rynną żnińską."
  },
  {
    id: "R05_PAL_05",
    section: "Podróż po Pałukach",
    type: "match",
    prompt: "Połącz miejscowość z charakterystyczną atrakcją.",
    options: null,
    left: ["Żnin", "Wenecja", "Biskupin", "Gąsawa"],
    right: ["gotycka wieża ratuszowa", "Muzeum Kolei Wąskotorowej", "zrekonstruowana osada kultury łużyckiej", "drewniany kościół z barokowym wystrojem"],
    answer: {
      "Żnin": "gotycka wieża ratuszowa",
      "Wenecja": "Muzeum Kolei Wąskotorowej",
      "Biskupin": "zrekonstruowana osada kultury łużyckiej",
      "Gąsawa": "drewniany kościół z barokowym wystrojem"
    },
    explanation: "Każda z miejscowości na trasie ma inną charakterystyczną atrakcję."
  },
  {
    id: "R05_PAL_06",
    section: "Podróż po Pałukach",
    type: "true_false",
    prompt: "Kolej wąskotorowa na Pałukach kursuje przez cały rok bez przerwy.",
    options: null,
    answer: false,
    explanation: "Kolej wąskotorowa jeździ tylko w sezonie letnim, z reguły od maja do września.",
    image: "r05_kolej_waskotorowa.jpg"
  },
  {
    id: "R05_PAL_07",
    section: "Podróż po Pałukach",
    type: "scenario",
    prompt: "Turysta chce zobaczyć zabytkowe parowozy oraz ruiny zamku z wystawą średniowiecznych maszyn oblężniczych. Do której miejscowości powinien pojechać?",
    options: ["Wenecji", "Żnina", "Gąsawy", "Bydgoszczy", "Wisły", "Kórnika"],
    answer: 0,
    explanation: "W Wenecji znajdują się Muzeum Kolei Wąskotorowej oraz ruiny zamku Mikołaja Nałęcza.",
    image: "r05_wenecja_muzeum_kolei.jpg"
  },
  {
    id: "R05_PAL_08",
    section: "Podróż po Pałukach",
    type: "riddle",
    prompt: "W tej miejscowości można zwiedzić zrekonstruowaną osadę kultury łużyckiej sprzed około 2700 lat. Jaka to miejscowość?",
    options: null,
    answer: "Biskupin",
    altAnswers: ["Biskupin", "biskupin"],
    explanation: "Biskupin słynie z muzeum archeologicznego i rekonstrukcji osady kultury łużyckiej.",
    image: "r05_biskupin_osada.jpg"
  },
  {
    id: "R05_PAL_09",
    section: "Podróż po Pałukach",
    type: "odd_one_out",
    prompt: "Co nie jest sportem uprawianym na jeziorach Pałuk: żeglarstwo, windsurfing, kajakarstwo, wspinaczka wysokogórska.",
    options: null,
    answer: "wspinaczka wysokogórska",
    explanation: "Jeziora sprzyjają żeglarstwu, windsurfingowi i kajakarstwu, ale nie wspinaczce wysokogórskiej."
  },
  {
    id: "R05_PAL_10",
    section: "Podróż po Pałukach",
    type: "single_choice",
    prompt: "Co należy uwzględnić w kosztorysie podróży po Pałukach?",
    options: ["Przejazdy, bilety wstępu i posiłki", "Wyłącznie zakup pamiątek", "Tylko cenę mapy", "Jedynie koszt noclegu", "Wyłącznie opłatę za parking", "Tylko cenę paliwa"],
    answer: 0,
    explanation: "Kosztorys obejmuje transport, wstęp do atrakcji, przejazd koleją wąskotorową i posiłki."
  },
  {
    id: "R05_PAL_11",
    section: "Podróż po Pałukach",
    type: "multi_select",
    prompt: "Co można zobaczyć w drewnianym kościele w Gąsawie?",
    options: ["Barokowe malowidła", "Barokowe rzeźby", "Zabytkowe parowozy", "Rekonstrukcję osady", "Planetarium"],
    answer: [0, 1],
    explanation: "W drewnianym kościele z początku XVII wieku znajdują się barokowe malowidła i rzeźby.",
    image: "r05_gasawa_kosciol.jpg"
  },

  {
    id: "R05_OJC_01",
    section: "Moja mała ojczyzna",
    type: "single_choice",
    prompt: "Czym jest mała ojczyzna?",
    options: ["Miejscem życia połączonym z człowiekiem emocjonalną więzią", "Wyłącznie państwem urodzenia", "Zawsze całym województwem", "Tylko domem rodzinnym", "Jedynie obszarem parafii", "Każdym miejscem odwiedzonym podczas podróży"],
    answer: 0,
    explanation: "Mała ojczyzna to dobrze znane miejsce, w którym człowiek czuje się u siebie i z którym łączy go więź emocjonalna."
  },
  {
    id: "R05_OJC_02",
    section: "Moja mała ojczyzna",
    type: "multi_select",
    prompt: "Co może być małą ojczyzną?",
    options: ["Gmina", "Wieś", "Miasto", "Dzielnica", "Osiedle", "Wyłącznie cały kraj"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Mała ojczyzna może mieć różną skalę, od osiedla lub dzielnicy po wieś, miasto albo gminę."
  },
  {
    id: "R05_OJC_03",
    section: "Moja mała ojczyzna",
    type: "true_false",
    prompt: "Granice małej ojczyzny muszą być identyczne z granicami administracyjnymi.",
    options: null,
    answer: false,
    explanation: "Granice małej ojczyzny często funkcjonują przede wszystkim w świadomości ludzi i nie muszą pokrywać się z granicami administracyjnymi."
  },
  {
    id: "R05_OJC_04",
    section: "Moja mała ojczyzna",
    type: "fill_in",
    prompt: "W znaczeniu symbolicznym mała ojczyzna może być miejscem, za którym __________.",
    options: null,
    answer: ["tęsknimy"],
    altAnswers: [["tęsknimy", "sie tęskni", "się tęskni"]],
    explanation: "Symboliczna mała ojczyzna to miejsce budzące pozytywne skojarzenia i tęsknotę."
  },
  {
    id: "R05_OJC_05",
    section: "Moja mała ojczyzna",
    type: "sort",
    prompt: "Przyporządkuj element opisu małej ojczyzny do właściwego zagadnienia.",
    options: null,
    items: ["województwo i powiat", "data uzyskania praw miejskich", "zwyczaje mieszkańców", "zakłady produkcyjne", "klimat i gleby", "połączenia kolejowe"],
    categories: ["położenie i historia", "atrakcyjność osadnicza", "atrakcyjność gospodarcza"],
    answer: {
      "położenie i historia": ["województwo i powiat", "data uzyskania praw miejskich"],
      "atrakcyjność osadnicza": ["zwyczaje mieszkańców", "klimat i gleby"],
      "atrakcyjność gospodarcza": ["zakłady produkcyjne", "połączenia kolejowe"]
    },
    explanation: "Opis małej ojczyzny łączy informacje o położeniu i przeszłości z warunkami życia oraz prowadzenia działalności."
  },
  {
    id: "R05_OJC_06",
    section: "Moja mała ojczyzna",
    type: "match",
    prompt: "Połącz osobę z miejscem pochodzenia lub silnego związku.",
    options: null,
    left: ["Aleksander Wolszczan", "Adam Małysz", "Andrzej Wajda", "Wisława Szymborska"],
    right: ["Szczecinek", "Wisła", "Suwałki", "Kórnik"],
    answer: {
      "Aleksander Wolszczan": "Szczecinek",
      "Adam Małysz": "Wisła",
      "Andrzej Wajda": "Suwałki",
      "Wisława Szymborska": "Kórnik"
    },
    explanation: "Sukcesy tych osób są powiązane z różnymi małymi ojczyznami w Polsce."
  },
  {
    id: "R05_OJC_07",
    section: "Moja mała ojczyzna",
    type: "odd_one_out",
    prompt: "Co nie jest źródłem informacji o małej ojczyźnie: archiwum parafialne, lokalne muzeum, rozmowa z mieszkańcem, przypadkowa plotka bez źródła.",
    options: null,
    answer: "przypadkowa plotka bez źródła",
    explanation: "Opis powinien opierać się na możliwych do sprawdzenia źródłach, takich jak archiwa, muzea i relacje mieszkańców.",
    image: "r05_zrodla_malej_ojczyzny.jpg"
  },
  {
    id: "R05_OJC_08",
    section: "Moja mała ojczyzna",
    type: "scenario",
    prompt: "Uczeń chce zdobyć dane o ludności i gospodarce swojej miejscowości. Które źródło będzie szczególnie przydatne?",
    options: ["Bank Danych Lokalnych GUS", "Wyłącznie mapa hipsometryczna", "Album bez opisów", "Prognoza pogody na jeden dzień", "Rozkład jazdy kolei", "Atlas świata bez danych lokalnych"],
    answer: 0,
    explanation: "Bank Danych Lokalnych GUS udostępnia dane statystyczne dotyczące miejscowości i samorządów."
  },
  {
    id: "R05_OJC_09",
    section: "Moja mała ojczyzna",
    type: "riddle",
    prompt: "Urodziłam się w Kórniku, byłam poetką i otrzymałam Literacką Nagrodę Nobla w 1996 roku. Kim jestem?",
    options: null,
    answer: "Wisława Szymborska",
    altAnswers: ["Wisława Szymborska", "Szymborska", "wisława szymborska"],
    explanation: "Wisława Szymborska, urodzona w Kórniku, otrzymała Literacką Nagrodę Nobla w 1996 roku."
  },
  {
    id: "R05_OJC_10",
    section: "Moja mała ojczyzna",
    type: "single_choice",
    prompt: "Co należy uwzględnić przy opisie dziedzictwa kulturowego małej ojczyzny?",
    options: ["Zwyczaje, obrzędy, tradycje i dorobek mieszkańców", "Wyłącznie temperaturę powietrza", "Tylko typy gleb", "Jedynie długość dróg", "Wyłącznie liczbę sklepów", "Tylko wysokość nad poziomem morza"],
    answer: 0,
    explanation: "Dziedzictwo kulturowe obejmuje tradycje, język, obrzędy, zabytki i działalność ludzi związanych z miejscem.",
    image: "r05_tradycje_lokalne.jpg"
  },
  {
    id: "R05_OJC_11",
    section: "Moja mała ojczyzna",
    type: "true_false",
    prompt: "W opisie małej ojczyzny warto uwzględnić osoby, których działalność jest znana poza najbliższą okolicą.",
    options: null,
    answer: true,
    explanation: "Dorobek znanych mieszkańców współtworzy dziedzictwo i pozytywny wizerunek małej ojczyzny."
  },

  {
    id: "R05_DZL_01",
    section: "Działania dla lokalnej społeczności",
    type: "single_choice",
    prompt: "Od czego należy rozpocząć plan działań na rzecz ochrony lokalnych walorów?",
    options: ["Od wymienienia cennych miejsc i obiektów", "Od przygotowania kampanii bez rozpoznania problemu", "Od zakupu biletów", "Od wyznaczenia regionów historycznych", "Od obliczenia liczby województw", "Od rezygnacji z obserwacji"],
    answer: 0,
    explanation: "Najpierw trzeba rozpoznać walory środowiska przyrodniczego i kulturowego, które mają być chronione."
  },
  {
    id: "R05_DZL_02",
    section: "Działania dla lokalnej społeczności",
    type: "sequence",
    prompt: "Ułóż pierwsze trzy etapy planowania ochrony lokalnych walorów.",
    options: null,
    items: ["zaproponować działania ochronne", "ocenić stan obiektów", "wymienić walory"],
    answer: ["wymienić walory", "ocenić stan obiektów", "zaproponować działania ochronne"],
    explanation: "Najpierw rozpoznaje się walory, potem diagnozuje ich stan i zagrożenia, a następnie planuje ochronę."
  },
  {
    id: "R05_DZL_03",
    section: "Działania dla lokalnej społeczności",
    type: "multi_select",
    prompt: "Co może być lokalnym walorem środowiska geograficznego?",
    options: ["Rzeka", "Park", "Głaz narzutowy", "Zabytkowy kościół", "Pałac", "Przypadkowo wyrzucone śmieci"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Walory mogą być przyrodnicze, takie jak rzeka czy głaz, albo kulturowe, takie jak pałac i kościół."
  },
  {
    id: "R05_DZL_04",
    section: "Działania dla lokalnej społeczności",
    type: "scenario",
    prompt: "Potok jest zaśmiecony, a wzdłuż jego brzegów brakuje tras mimo częstych spacerów mieszkańców. Które działanie najlepiej poprawiłoby tę sytuację?",
    options: ["Oczyszczenie brzegów i wytyczenie ścieżek", "Zasypanie potoku", "Zakaz wszystkich spacerów", "Usunięcie terenów zielonych", "Budowa kopalni", "Likwidacja koszy na śmieci"],
    answer: 0,
    explanation: "Oczyszczenie brzegów, ustawienie koszy oraz wytyczenie ścieżek spacerowych i rowerowych poprawia porządek i dostępność tego terenu.",
    image: "r05_ochrona_potoku.jpg"
  },
  {
    id: "R05_DZL_05",
    section: "Działania dla lokalnej społeczności",
    type: "match",
    prompt: "Połącz działanie z podmiotem odpowiedzialnym za jego realizację.",
    options: null,
    left: ["wytyczenie utwardzonych ścieżek", "sprzątanie potoku w Dniu Ziemi", "instalowanie koszy", "szkolna kampania informacyjna"],
    right: ["urząd gminy", "uczniowie szkół", "urząd gminy przy trasach", "uczniowie przy wsparciu urzędu"],
    answer: {
      "wytyczenie utwardzonych ścieżek": "urząd gminy",
      "sprzątanie potoku w Dniu Ziemi": "uczniowie szkół",
      "instalowanie koszy": "urząd gminy przy trasach",
      "szkolna kampania informacyjna": "uczniowie przy wsparciu urzędu"
    },
    explanation: "Skuteczny plan wskazuje zarówno konkretne działania, jak i osoby lub instytucje odpowiedzialne za ich realizację."
  },
  {
    id: "R05_DZL_06",
    section: "Działania dla lokalnej społeczności",
    type: "true_false",
    prompt: "Plan poprawy warunków życia powinien wskazywać konkretne działania i podmioty odpowiedzialne za ich wykonanie.",
    options: null,
    answer: true,
    explanation: "Konkretne zadania i odpowiedzialność zwiększają szansę realizacji planu."
  },
  {
    id: "R05_DZL_07",
    section: "Działania dla lokalnej społeczności",
    type: "fill_in",
    prompt: "Mieszkańcy mogą decydować o części lokalnych wydatków w ramach budżetu __________.",
    options: null,
    answer: ["obywatelskiego"],
    altAnswers: [["obywatelskiego", "obywatelski"]],
    explanation: "Budżet obywatelski pozwala mieszkańcom wybierać projekty poprawiające życie lokalnej społeczności."
  },
  {
    id: "R05_DZL_08",
    section: "Działania dla lokalnej społeczności",
    type: "odd_one_out",
    prompt: "Co nie jest proponowanym sposobem ograniczania smogu: wymiana starych pieców, lepsza komunikacja miejska, kampania informacyjna, spalanie odpadów w kominkach.",
    options: null,
    answer: "spalanie odpadów w kominkach",
    explanation: "Spalanie odpadów nasila zanieczyszczenie powietrza, natomiast pozostałe działania mogą je ograniczyć.",
    image: "r05_smog_w_miescie.jpg"
  },
  {
    id: "R05_DZL_09",
    section: "Działania dla lokalnej społeczności",
    type: "sort",
    prompt: "Przyporządkuj działanie do celu.",
    options: null,
    items: ["oczyszczenie brzegu rzeki", "renowacja zabytku", "zwiększenie częstotliwości autobusów", "budowa placu zabaw"],
    categories: ["ochrona przyrody", "ochrona dziedzictwa", "transport", "rekreacja"],
    answer: {
      "ochrona przyrody": ["oczyszczenie brzegu rzeki"],
      "ochrona dziedzictwa": ["renowacja zabytku"],
      "transport": ["zwiększenie częstotliwości autobusów"],
      "rekreacja": ["budowa placu zabaw"]
    },
    explanation: "Działania lokalne mogą jednocześnie dotyczyć środowiska, kultury, komunikacji i wypoczynku."
  },
  {
    id: "R05_DZL_10",
    section: "Działania dla lokalnej społeczności",
    type: "riddle",
    prompt: "Jestem głosowaniem mieszkańców nad częścią lokalnych wydatków. Dzięki mnie mieszkańcy mogą współdecydować o finansowaniu placów zabaw i innych lokalnych projektów. Co to jest?",
    options: null,
    answer: "budżet obywatelski",
    altAnswers: ["budżet obywatelski", "budzet obywatelski"],
    explanation: "Budżet obywatelski daje mieszkańcom bezpośredni wpływ na wybór części lokalnych inwestycji."
  },
  {
    id: "R05_DZL_11",
    section: "Działania dla lokalnej społeczności",
    type: "multi_select",
    prompt: "Zaznacz możliwe sposoby ograniczenia smogu.",
    options: ["Dofinansowanie wymiany starych pieców", "Udogodnienia w komunikacji miejskiej", "Ograniczenia korzystania z kominków podczas smogu", "Kampania informacyjna", "Zachęcanie do spalania odpadów"],
    answer: [0, 1, 2, 3],
    explanation: "Ograniczanie emisji z ogrzewania i ruchu samochodowego oraz edukacja mieszkańców mogą poprawić jakość powietrza.",
    image: "r05_smog_w_miescie.jpg"
  },

  {
    id: "R05_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Nazwy większości polskich województw nawiązują do nazw czego?",
    options: ["Regionów historycznych", "Najwyższych szczytów", "Głównych rzek", "Parków narodowych", "Typów gleb", "Mórz i zatok"],
    answer: 0,
    explanation: "Większość nazw województw nawiązuje do nazw regionów historycznych."
  },
  {
    id: "R05_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Jezioro rozpoznane podczas obserwacji jako długie i wąskie może być jeziorem __________.",
    options: null,
    answer: ["rynnowym"],
    altAnswers: [["rynnowym", "rynnowe"]],
    explanation: "Obserwacje terenowe pomagają rozpoznawać genezę form krajobrazu, w tym jezior rynnowych."
  },
  {
    id: "R05_HARD_03",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jakie odkrycie ogłosił Aleksander Wolszczan w 1992 roku?",
    options: ["Istnienie planet poza Układem Słonecznym", "Odkrycie nowej wyspy na Bałtyku", "Powstanie pierwszej polskiej kolei", "Istnienie osady w Biskupinie", "Odkrycie nowych złóż soli", "Powstanie rynny żnińskiej"],
    answer: 0,
    explanation: "Aleksander Wolszczan ogłosił odkrycie planet istniejących poza Układem Słonecznym."
  },
  {
    id: "R05_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz osiągnięcia Adama Małysza.",
    options: ["Cztery tytuły mistrza świata", "Cztery Kryształowe Kule", "Cztery medale olimpijskie", "Oscar za całokształt", "Literacka Nagroda Nobla"],
    answer: [0, 1, 2],
    explanation: "Adam Małysz zdobył cztery tytuły mistrza świata, cztery Kryształowe Kule i cztery medale olimpijskie."
  },
  {
    id: "R05_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "Andrzej Wajda otrzymał Oscara za całokształt twórczości w 2000 roku.",
    options: null,
    answer: true,
    explanation: "Urodzony w Suwałkach reżyser otrzymał tę nagrodę w 2000 roku."
  },
  {
    id: "R05_HARD_06",
    section: "Super trudne",
    type: "riddle",
    prompt: "Miejscowość na Pałukach położona między trzema jeziorami, z muzeum kolei i ruinami zamku, to...",
    options: null,
    answer: "Wenecja",
    altAnswers: ["Wenecja", "wenecja"],
    explanation: "Wenecja leży między trzema jeziorami; znajdują się tam muzeum kolei i ruiny zamku.",
    image: "r05_wenecja_muzeum_kolei.jpg"
  },
  {
    id: "R05_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jak nazywano Mikołaja Nałęcza, którego siedzibą był zamek w Wenecji?",
    options: ["Krwawym Diabłem Weneckim", "Żelaznym Rycerzem Pałuk", "Białym Księciem Żnina", "Strażnikiem Biskupina", "Czarnym Panem Gąsawy", "Diabłem Biskupińskim"],
    answer: 0,
    explanation: "Mikołaj Nałęcz był nazywany Krwawym Diabłem Weneckim."
  },
  {
    id: "R05_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz miejsce z dodatkową informacją.",
    options: null,
    left: ["Żnin", "Wenecja", "Biskupin", "Gąsawa"],
    right: ["muzeum z wystawą o sportach motorowodnych", "17 zabytkowych parowozów", "warsztaty obróbki krzemienia", "kościół z początku XVII wieku"],
    answer: {
      "Żnin": "muzeum z wystawą o sportach motorowodnych",
      "Wenecja": "17 zabytkowych parowozów",
      "Biskupin": "warsztaty obróbki krzemienia",
      "Gąsawa": "kościół z początku XVII wieku"
    },
    explanation: "Szczegóły te rozróżniają cztery główne miejscowości na trasie."
  },
  {
    id: "R05_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Kto z podanych osób nie jest związany z sukcesami Polski na arenie międzynarodowej: Aleksander Wolszczan, Adam Małysz, Andrzej Wajda, Mikołaj Nałęcz.",
    options: null,
    answer: "Mikołaj Nałęcz",
    explanation: "Aleksander Wolszczan, Adam Małysz i Andrzej Wajda odnieśli sukcesy o międzynarodowym znaczeniu, natomiast Mikołaj Nałęcz był postacią historycznie związaną z Wenecją."
  },
  {
    id: "R05_HARD_10",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Wisława Szymborska nazwała nagły wzrost swojej popularności tragedią __________.",
    options: null,
    answer: ["sztokholmską"],
    altAnswers: [["sztokholmską", "sztokholmska"]],
    explanation: "Po otrzymaniu Nagrody Nobla poetka ironicznie określiła rozgłos jako tragedię sztokholmską."
  },
  {
    id: "R05_HARD_11",
    section: "Super trudne",
    type: "scenario",
    prompt: "Badacz chce ustalić, czy dana społeczność lokalna się starzeje. Jakie dane powinien porównać?",
    options: ["Strukturę wieku mieszkańców", "Wyłącznie liczbę jezior", "Rodzaje skał", "Długość linii kolejowych", "Liczbę zabytków", "Wysokość wzniesień"],
    answer: 0,
    explanation: "Struktura wieku pokazuje udział poszczególnych grup wiekowych i pozwala ocenić starzenie się ludności."
  },
  {
    id: "R05_HARD_12",
    section: "Super trudne",
    type: "true_false",
    prompt: "W opisie atrakcyjności gospodarczej warto uwzględnić stan sieci wodociągowej, energetycznej i telekomunikacyjnej.",
    options: null,
    answer: true,
    explanation: "Stan infrastruktury technicznej jest ważny dla mieszkańców i potencjalnych inwestorów."
  },
  {
    id: "R05_HARD_13",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj skutek lub informację do właściwego zagadnienia.",
    options: null,
    items: ["ocena starzenia się społeczeństwa", "opis głównych upraw", "ustalenie granic województwa", "poznanie dawnych mieszkańców"],
    categories: ["struktura wieku", "rolnictwo", "mapa administracyjna", "wywiad ze starszą osobą"],
    answer: {
      "struktura wieku": ["ocena starzenia się społeczeństwa"],
      "rolnictwo": ["opis głównych upraw"],
      "mapa administracyjna": ["ustalenie granic województwa"],
      "wywiad ze starszą osobą": ["poznanie dawnych mieszkańców"]
    },
    explanation: "Każdy rodzaj informacji wymaga właściwego wskaźnika lub źródła."
  },
  {
    id: "R05_HARD_14",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jestem pojazdem na płozach napędzanym żaglem i pojawiam się zimą na zamarzniętych jeziorach. Co to jest?",
    options: null,
    answer: "bojer",
    altAnswers: ["bojer", "bojery"],
    explanation: "Bojery umożliwiają żeglowanie po zamarzniętych zbiornikach."
  },
  {
    id: "R05_HARD_15",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który element nie był wymagany w tabeli planu ochrony walorów lokalnych?",
    options: ["Cena biletu kolejowego", "Nazwa obiektu", "Położenie", "Stan zachowania i problemy", "Proponowane działania", "Odpowiedzialne osoby lub instytucje"],
    answer: 0,
    explanation: "Tabela ochrony obejmuje nazwę, położenie, stan i problemy oraz działania i odpowiedzialne podmioty, ale nie cenę biletu."
  }
];

const KID_PROMPTS = {
  "R05_REG_03": "Wybierz trzy rodzaje cech używanych do opisu regionu.",
  "R05_ZRO_03": "Połącz mapę z informacją, którą pokazuje.",
  "R05_PAL_03": "Ułóż miejsca po kolei na trasie wycieczki.",
  "R05_OJC_01": "Co nazywamy małą ojczyzną?",
  "R05_DZL_02": "Ułóż kroki ochrony cennych miejsc.",
  "R05_HARD_11": "Jakie dane pokazują, czy mieszkańcy są coraz starsi?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Mój region i moja mała ojczyzna",
  icon: "🏡",
  sectionOrder: [
    "Region i jego cechy",
    "Źródła informacji o regionie",
    "Podróż po Pałukach",
    "Moja mała ojczyzna",
    "Działania dla lokalnej społeczności"
  ],
  sectionIcons: {
    "Region i jego cechy": "🗺️",
    "Źródła informacji o regionie": "🔎",
    "Podróż po Pałukach": "🚂",
    "Moja mała ojczyzna": "❤️",
    "Działania dla lokalnej społeczności": "🌱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
