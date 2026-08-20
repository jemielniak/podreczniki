// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SAN  = Pod rządami sanacji
//   ZAG  = Polityka zagraniczna
//   GOS  = Gospodarka i wielki kryzys
//   NAR  = Mniejszości narodowe
//   KUL  = Nauka, kultura i sport
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R06_SAN_01",
    section: "Pod rządami sanacji",
    type: "single_choice",
    prompt: "Jaki tytuł przyjął Józef Piłsudski w marcu 1920 r.?",
    image: "r06_pilsudski_sulejowek.jpg",
    options: ["Naczelnik Armii Polskiej", "Pierwszy Marszałek Polski", "Prezydent Rzeczypospolitej", "Hetman Wielki", "Minister Wojny", "Generalny Inspektor Państwa"],
    answer: 1,
    explanation: "W marcu 1920 r. Piłsudski przyjął tytuł Pierwszego Marszałka Polski, nowy i najwyższy stopień wojskowy."
  },
  {
    id: "R06_SAN_02",
    section: "Pod rządami sanacji",
    type: "multi_select",
    prompt: "Zaznacz przyczyny niezadowolenia zwolenników Piłsudskiego z sytuacji w państwie przed zamachem majowym.",
    options: ["Rozdrobnienie sejmu", "Kryzys gospodarczy", "Rozczarowanie biedą i zacofaniem kraju", "Zwycięstwo Polski w wojnie celnej", "Powszechna zgoda między partiami"],
    answer: [0, 1, 2],
    explanation: "Przyczynami niezadowolenia były rozdrobnienie sejmu, kryzys gospodarczy oraz rozczarowanie biedą i zacofaniem państwa."
  },
  {
    id: "R06_SAN_03",
    section: "Pod rządami sanacji",
    type: "true_false",
    prompt: "Do początku maja 1926 r. upadło 14 rządów.",
    options: null,
    answer: true,
    explanation: "Częste upadki gabinetów wynikały z rozdrobnienia sejmu i nietrwałych sojuszy partyjnych."
  },
  {
    id: "R06_SAN_04",
    section: "Pod rządami sanacji",
    type: "fill_in",
    prompt: "Bezpośrednią przyczyną zamachu majowego było powołanie rządu __________.",
    options: null,
    answer: ["Wincentego Witosa"],
    altAnswers: [["Wincentego Witosa", "Witosa", "rządu Witosa"]],
    explanation: "Prezydent Wojciechowski 10 maja 1926 r. powołał na premiera Wincentego Witosa, co Piłsudski wykorzystał jako okazję do wystąpienia."
  },
  {
    id: "R06_SAN_05",
    section: "Pod rządami sanacji",
    type: "scenario",
    prompt: "Jest popołudnie 12 maja 1926 r. Piłsudski spotyka prezydenta Wojciechowskiego na warszawskim moście i oczekuje zgody na dymisję rządu. Gdzie doszło do tego spotkania?",
    image: "r06_most_poniatowskiego.jpg",
    options: ["Na Moście Poniatowskiego", "Na moście Kierbedzia", "Przed Belwederem", "Na Zamku Królewskim", "W Rembertowie", "W Sulejówku"],
    answer: 0,
    explanation: "Piłsudski i prezydent Wojciechowski spotkali się na Moście Poniatowskiego 12 maja 1926 r."
  },
  {
    id: "R06_SAN_06",
    section: "Pod rządami sanacji",
    type: "sequence",
    prompt: "Ułóż wydarzenia zamachu majowego w kolejności chronologicznej.",
    options: null,
    items: ["Dymisja prezydenta i premiera", "Marsz oddziałów na Warszawę", "Walki w Warszawie", "Spotkanie na Moście Poniatowskiego"],
    answer: ["Marsz oddziałów na Warszawę", "Spotkanie na Moście Poniatowskiego", "Walki w Warszawie", "Dymisja prezydenta i premiera"],
    explanation: "Najpierw 12 maja ruszyły oddziały Piłsudskiego, potem doszło do spotkania z prezydentem, następnie walk, a 14 maja do dymisji władz."
  },
  {
    id: "R06_SAN_07",
    section: "Pod rządami sanacji",
    type: "riddle",
    prompt: "Jak nazywał się obóz piłsudczyków rządzący Polską w latach 1926-1939?",
    options: null,
    answer: "sanacja",
    altAnswers: ["sanacja", "obóz sanacyjny"],
    explanation: "Nazwa sanacja pochodziła od hasła uzdrowienia państwa po zamachu majowym."
  },
  {
    id: "R06_SAN_08",
    section: "Pod rządami sanacji",
    type: "match",
    prompt: "Połącz pojęcie lub nazwę z objaśnieniem.",
    options: null,
    left: ["sanacja", "BBWR", "proces brzeski", "nowela sierpniowa"],
    right: ["obóz piłsudczyków", "ugrupowanie utworzone w 1928 r.", "proces polityków opozycji", "ustawa wzmacniająca władzę prezydenta"],
    answer: {
      "sanacja": "obóz piłsudczyków",
      "BBWR": "ugrupowanie utworzone w 1928 r.",
      "proces brzeski": "proces polityków opozycji",
      "nowela sierpniowa": "ustawa wzmacniająca władzę prezydenta"
    },
    explanation: "Po zamachu sanacja budowała zaplecze polityczne, wzmacniała prezydenta i prowadziła walkę z opozycją."
  },
  {
    id: "R06_SAN_09",
    section: "Pod rządami sanacji",
    type: "single_choice",
    prompt: "Kto został prezydentem Polski w 1926 r. z propozycji Piłsudskiego?",
    options: ["Ignacy Mościcki", "Wincenty Witos", "Gabriel Narutowicz", "Edward Rydz-Śmigły", "Józef Beck", "Ferdynand Foch"],
    answer: 0,
    explanation: "Piłsudski nie przyjął wyboru na prezydenta, a urząd objął zaproponowany przez niego Ignacy Mościcki."
  },
  {
    id: "R06_SAN_10",
    section: "Pod rządami sanacji",
    type: "multi_select",
    prompt: "Zaznacz uprawnienia prezydenta zapisane w Konstytucji kwietniowej.",
    options: ["Był zwierzchnikiem sił zbrojnych", "Mógł mianować premiera", "Mógł rozwiązać parlament", "Odpowiadał przed sejmem za każdą decyzję", "Decydował o wojnie i pokoju"],
    answer: [0, 1, 2, 4],
    explanation: "Konstytucja kwietniowa wprowadzała silną władzę prezydencką; prezydent odpowiadał tylko przed Bogiem i historią."
  },
  {
    id: "R06_SAN_11",
    section: "Pod rządami sanacji",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Ignacy Mościcki, Edward Rydz-Śmigły, Józef Beck, Ferdynand Foch.",
    options: null,
    answer: "Ferdynand Foch",
    explanation: "Mościcki, Rydz-Śmigły i Beck należeli do układu władzy sanacyjnej po śmierci Piłsudskiego; Foch był francuskim marszałkiem i sojusznikiem Polski."
  },
  {
    id: "R06_SAN_12",
    section: "Pod rządami sanacji",
    type: "sort",
    prompt: "Przyporządkuj osoby do ich roli w obozie sanacyjnym po śmierci Piłsudskiego.",
    options: null,
    items: ["Ignacy Mościcki", "Edward Rydz-Śmigły", "Józef Beck"],
    categories: ["grupa zamkowa", "polityka wewnętrzna", "polityka zagraniczna"],
    answer: {
      "grupa zamkowa": ["Ignacy Mościcki"],
      "polityka wewnętrzna": ["Edward Rydz-Śmigły"],
      "polityka zagraniczna": ["Józef Beck"]
    },
    explanation: "Po 1936 r. zwolennicy Rydza-Śmigłego prowadzili politykę wewnętrzną, grupa zamkowa gospodarczą, a Beck pozostał przy polityce zagranicznej."
  },
  {
    id: "R06_ZAG_01",
    section: "Polityka zagraniczna",
    type: "multi_select",
    prompt: "Zaznacz państwa, z którymi II Rzeczpospolita miała przyjazne stosunki sąsiedzkie.",
    options: ["Łotwa", "Rumunia", "Litwa", "Czechosłowacja", "Niemcy", "Związek Radziecki"],
    answer: [0, 1],
    explanation: "Polska zdołała nawiązać przyjazne stosunki sąsiedzkie z Łotwą i Rumunią."
  },
  {
    id: "R06_ZAG_02",
    section: "Polityka zagraniczna",
    type: "single_choice",
    prompt: "Które dwa państwa stanowiły największe zagrożenie dla II Rzeczpospolitej?",
    options: ["Niemcy i Związek Radziecki", "Litwa i Łotwa", "Rumunia i Francja", "Włochy i Wielka Brytania", "Belgia i Francja", "Austria i Rumunia"],
    answer: 0,
    explanation: "Największe zagrożenie stanowiły Niemcy i Związek Radziecki, które dążyły do zmian granic lub oderwania ziem od Polski."
  },
  {
    id: "R06_ZAG_03",
    section: "Polityka zagraniczna",
    type: "true_false",
    prompt: "Niemcy nazywali Pomorze polskim korytarzem, ponieważ oddzielało Prusy Wschodnie od reszty Niemiec.",
    options: null,
    answer: true,
    explanation: "Pomorze łączyło Polskę z Bałtykiem, ale dla Niemiec oddzielało Prusy Wschodnie od pozostałej części państwa."
  },
  {
    id: "R06_ZAG_04",
    section: "Polityka zagraniczna",
    type: "match",
    prompt: "Połącz układ z jego znaczeniem dla Polski.",
    options: null,
    left: ["sojusz z Francją", "sojusz z Rumunią", "układ w Rapallo", "układ w Locarno"],
    right: ["pomoc w razie napaści Niemiec", "zawarty na wypadek agresji ZSRR", "groźba współpracy Niemiec i ZSRR", "gwarancje dla granicy zachodniej Niemiec"],
    answer: {
      "sojusz z Francją": "pomoc w razie napaści Niemiec",
      "sojusz z Rumunią": "zawarty na wypadek agresji ZSRR",
      "układ w Rapallo": "groźba współpracy Niemiec i ZSRR",
      "układ w Locarno": "gwarancje dla granicy zachodniej Niemiec"
    },
    explanation: "Polska szukała sojuszników, ale Rapallo i Locarno pogarszały jej położenie międzynarodowe."
  },
  {
    id: "R06_ZAG_05",
    section: "Polityka zagraniczna",
    type: "riddle",
    prompt: "Jak nazywano obawę przed porozumieniem niemiecko-radzieckim po 1922 r.?",
    options: null,
    answer: "zmora Rapallo",
    altAnswers: ["zmora Rapallo", "Zmora Rapallo"],
    explanation: "Układ w Rapallo oznaczał dla Polski możliwość sojuszu dwóch wrogich mocarstw."
  },
  {
    id: "R06_ZAG_06",
    section: "Polityka zagraniczna",
    type: "single_choice",
    prompt: "Co rozpoczęło wojnę celną z Niemcami w 1925 r.?",
    options: ["Wstrzymanie przez Niemcy importu węgla ze Śląska", "Polskie zajęcie Zaolzia", "Podpisanie paktu o nieagresji z ZSRR", "Utworzenie Polskiego Radia", "Budowa COP-u", "Wybór Ignacego Mościckiego"],
    answer: 0,
    explanation: "Niemcy wstrzymały import polskiego węgla ze Śląska, licząc na kryzys gospodarczy i ustępstwa terytorialne Polski."
  },
  {
    id: "R06_ZAG_07",
    section: "Polityka zagraniczna",
    type: "multi_select",
    prompt: "Zaznacz korzystne skutki wojny celnej dla Polski.",
    options: ["Uruchamianie własnej produkcji", "Znalezienie nowych rynków dla węgla", "Przyspieszenie budowy portu w Gdyni", "Spadek produkcji przemysłowej o 20%", "Natychmiastowe ustępstwa Niemiec"],
    answer: [0, 1, 2],
    explanation: "Choć wojna celna uderzyła w gospodarkę, zmusiła Polskę do produkcji zastępującej import, szukania rynków i rozbudowy drogi morskiej."
  },
  {
    id: "R06_ZAG_08",
    section: "Polityka zagraniczna",
    type: "fill_in",
    prompt: "W 1932 r. Polska podpisała pakt o nieagresji z __________, a w 1934 r. deklarację o nieagresji z __________.",
    options: null,
    answer: ["ZSRR", "Niemcami"],
    altAnswers: [["ZSRR", "Związkiem Radzieckim"], ["Niemcami", "III Rzeszą", "Rzeszą"]],
    explanation: "Polityka równowagi doprowadziła do dwustronnych porozumień z dwoma najgroźniejszymi sąsiadami."
  },
  {
    id: "R06_ZAG_09",
    section: "Polityka zagraniczna",
    type: "scenario",
    prompt: "Polski dyplomata wyjaśnia, że trzeba utrzymywać poprawne stosunki zarówno z Niemcami, jak i z ZSRR, ale bez zbliżania się do którejkolwiek strony. Jak nazywała się taka linia polityczna?",
    image: "r06_beck_hitler_berlin.jpg",
    options: ["polityka równowagi", "polityka izolacji", "polityka federacyjna", "polityka celna", "polityka pacyfikacji", "polityka zamkowa"],
    answer: 0,
    explanation: "Polityka równowagi polegała na utrzymywaniu poprawnych stosunków z Niemcami i ZSRR bez wybierania jednego z tych państw."
  },
  {
    id: "R06_ZAG_10",
    section: "Polityka zagraniczna",
    type: "true_false",
    prompt: "W 1934 r. deklaracja o nieagresji z Niemcami została podpisana na 10 lat.",
    options: null,
    answer: true,
    explanation: "Deklaracja polsko-niemiecka z 1934 r. miała obowiązywać przez 10 lat i zakończyła wojnę celną."
  },
  {
    id: "R06_ZAG_11",
    section: "Polityka zagraniczna",
    type: "sequence",
    prompt: "Ułóż wydarzenia polityki zagranicznej w kolejności chronologicznej.",
    options: null,
    items: ["Deklaracja o nieagresji z Niemcami", "Układ w Rapallo", "Pakt o nieagresji z ZSRR", "Przyłączenie Zaolzia"],
    answer: ["Układ w Rapallo", "Pakt o nieagresji z ZSRR", "Deklaracja o nieagresji z Niemcami", "Przyłączenie Zaolzia"],
    explanation: "Rapallo podpisano w 1922 r., pakt z ZSRR w 1932 r., deklarację z Niemcami w 1934 r., a Zaolzie przyłączono w 1938 r."
  },
  {
    id: "R06_ZAG_12",
    section: "Polityka zagraniczna",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: pakt o nieagresji z ZSRR, deklaracja o nieagresji z Niemcami, polityka równowagi, pacyfikacja wsi ukraińskich.",
    options: null,
    answer: "pacyfikacja wsi ukraińskich",
    explanation: "Pacyfikacja wsi ukraińskich dotyczyła polityki wewnętrznej wobec mniejszości, a pozostałe elementy wiążą się z polityką zagraniczną lat 30."
  },
  {
    id: "R06_GOS_01",
    section: "Gospodarka i wielki kryzys",
    type: "single_choice",
    prompt: "Dlaczego Polska zdecydowała się budować własny port w Gdyni?",
    image: "r06_budowa_gdyni.jpg",
    options: ["Władze Gdańska utrudniały Polsce korzystanie z gdańskiego portu", "Gdańsk był zbyt daleko od morza", "Polska nie miała kopalń węgla", "Rumunia zerwała sojusz z Polską", "Francja sfinansowała port pod warunkiem budowy miasta", "Litwa oddała Polsce Kowno"],
    answer: 0,
    explanation: "Wolnym Miastem Gdańskiem rządzili Niemcy, którzy robili Polakom trudności, dlatego Polska potrzebowała własnego portu."
  },
  {
    id: "R06_GOS_02",
    section: "Gospodarka i wielki kryzys",
    type: "fill_in",
    prompt: "Sejm podjął decyzję o budowie Gdyni w roku __________, a prace przyspieszyły w roku __________.",
    options: null,
    answer: ["1922", "1926"],
    altAnswers: [["1922", "1922 r."], ["1926", "1926 r."]],
    explanation: "Decyzja o budowie zapadła w 1922 r., a tempo prac wzrosło po 1926 r. dzięki wojnie celnej i działaniom Kwiatkowskiego."
  },
  {
    id: "R06_GOS_03",
    section: "Gospodarka i wielki kryzys",
    type: "riddle",
    prompt: "Jak nazywała się linia kolejowa łącząca Górny Śląsk z Gdynią?",
    image: "r06_wiadukt_tczew_magistrala.jpg",
    options: null,
    answer: "magistrala węglowa",
    altAnswers: ["magistrala węglowa", "Magistrala węglowa"],
    explanation: "Magistrala węglowa łączyła kopalnie Górnego Śląska z Gdynią i miała znaczenie gospodarcze oraz strategiczne."
  },
  {
    id: "R06_GOS_04",
    section: "Gospodarka i wielki kryzys",
    type: "true_false",
    prompt: "W 1938 r. Gdynia liczyła 114 tysięcy mieszkańców.",
    options: null,
    answer: true,
    explanation: "W 1938 r. w Gdyni mieszkało 114 tysięcy ludzi."
  },
  {
    id: "R06_GOS_05",
    section: "Gospodarka i wielki kryzys",
    type: "multi_select",
    prompt: "Zaznacz elementy zbudowane w Gdyni obok portu handlowego.",
    options: ["port rybacki", "przystań pasażerska", "baza okrętów wojennych", "stocznia", "Instytut Radowy", "fabryka broni w Radomiu"],
    answer: [0, 1, 2, 3],
    explanation: "W Gdyni powstały port rybacki, przystań pasażerska, baza okrętów wojennych, stocznia i miasto."
  },
  {
    id: "R06_GOS_06",
    section: "Gospodarka i wielki kryzys",
    type: "single_choice",
    prompt: "O ile wzrosła produkcja przemysłowa Polski w okresie ożywienia gospodarczego 1926-1929?",
    options: ["o 41%", "o 20%", "o jedną trzecią", "o 70%", "o 10%", "o 114%"],
    answer: 0,
    explanation: "W latach 1926-1929 produkcja przemysłowa kraju wzrosła o 41%."
  },
  {
    id: "R06_GOS_07",
    section: "Gospodarka i wielki kryzys",
    type: "single_choice",
    prompt: "Od czego zaczął się wielki kryzys w Polsce?",
    options: ["Od spadku cen artykułów rolnych", "Od zamknięcia portu w Gdyni", "Od likwidacji magistrali węglowej", "Od wzrostu cen żywności o 200%", "Od strajku wszystkich kopalń", "Od zerwania sojuszu z Francją"],
    answer: 0,
    explanation: "W Polsce kryzys zaczął się od spadku cen artykułów rolnych o 50-70%."
  },
  {
    id: "R06_GOS_08",
    section: "Gospodarka i wielki kryzys",
    type: "true_false",
    prompt: "W 1933 r. bez pracy pozostawało 940 tysięcy osób.",
    options: null,
    answer: true,
    explanation: "Kryzys doprowadził do ograniczania produkcji i wzrostu bezrobocia; w 1933 r. bez pracy było 940 tysięcy osób."
  },
  {
    id: "R06_GOS_09",
    section: "Gospodarka i wielki kryzys",
    type: "scenario",
    prompt: "Rolnik widzi, że ceny żywności spadły, więc obsiewa także nieużytki, aby sprzedać więcej zboża. Jaki skutek opisuje ta sytuacja?",
    options: ["nadprodukcję artykułów rolnych", "budowę portu rybackiego", "powstanie BBWR", "pakt paryski", "numerus clausus", "powstanie Polskiego Radia"],
    answer: 0,
    explanation: "Chłopi próbowali sprzedawać więcej żywności, co wywołało nadprodukcję i dalszy spadek cen."
  },
  {
    id: "R06_GOS_10",
    section: "Gospodarka i wielki kryzys",
    type: "match",
    prompt: "Połącz inwestycję lub działanie z opisem.",
    options: null,
    left: ["Gdynia", "magistrala węglowa", "interwencyjny skup zbóż", "COP"],
    right: ["polskie okno na świat", "połączenie Górnego Śląska z portem", "próba podniesienia cen zboża", "największa inwestycja gospodarcza II Rzeczpospolitej"],
    answer: {
      "Gdynia": "polskie okno na świat",
      "magistrala węglowa": "połączenie Górnego Śląska z portem",
      "interwencyjny skup zbóż": "próba podniesienia cen zboża",
      "COP": "największa inwestycja gospodarcza II Rzeczpospolitej"
    },
    explanation: "Te działania pokazują zarówno osiągnięcia gospodarcze, jak i nieskuteczne próby walki z kryzysem."
  },
  {
    id: "R06_GOS_11",
    section: "Gospodarka i wielki kryzys",
    type: "multi_select",
    prompt: "Zaznacz przykłady zakładów i inwestycji budowanych w COP-ie.",
    image: "r06_zapora_roznow.jpg",
    options: ["zapora i elektrownia wodna w Rożnowie", "fabryki broni w Radomiu i Starachowicach", "wytwórnia amunicji w Kraśniku", "ośrodek przemysłowy Stalowa Wola", "Instytut Radowy w Warszawie"],
    answer: [0, 1, 2, 3],
    explanation: "W COP-ie powstały m.in. Rożnów, fabryki broni w Radomiu i Starachowicach, wytwórnia amunicji w Kraśniku oraz Stalowa Wola."
  },
  {
    id: "R06_GOS_12",
    section: "Gospodarka i wielki kryzys",
    type: "sort",
    prompt: "Przyporządkuj fakty do okresów gospodarczych.",
    options: null,
    items: ["wzrost produkcji przemysłowej o 41%", "spadek cen artykułów rolnych", "940 tysięcy bezrobotnych", "liczba bezrobotnych spadła do 90 tysięcy"],
    categories: ["ożywienie 1926-1929", "wielki kryzys"],
    answer: {
      "ożywienie 1926-1929": ["wzrost produkcji przemysłowej o 41%", "liczba bezrobotnych spadła do 90 tysięcy"],
      "wielki kryzys": ["spadek cen artykułów rolnych", "940 tysięcy bezrobotnych"]
    },
    explanation: "Ożywienie przyniosło wzrost produkcji i spadek bezrobocia, a kryzys - zubożenie wsi i gwałtowny wzrost liczby bezrobotnych."
  },
  {
    id: "R06_NAR_01",
    section: "Mniejszości narodowe",
    type: "single_choice",
    prompt: "Ilu Ukraińców żyło w II Rzeczpospolitej w latach 30.?",
    image: "r06_ukraincy_stroje_ludowe.jpg",
    options: ["ponad 5 milionów", "około 3 milionów", "114 tysięcy", "940 tysięcy", "około 16 tysięcy", "ponad milion"],
    answer: 0,
    explanation: "W latach 30. w Polsce żyło ponad 5 milionów Ukraińców, czyli około 14% ludności państwa."
  },
  {
    id: "R06_NAR_02",
    section: "Mniejszości narodowe",
    type: "fill_in",
    prompt: "Ukraińcy stanowili około __________ ludności państwa, a Żydzi około __________.",
    options: null,
    answer: ["14%", "8,5%"],
    altAnswers: [["14%", "14 procent"], ["8,5%", "8,5 procent", "8.5%"]],
    explanation: "Ukraińcy stanowili około 14%, a Żydzi około 8,5% ludności II Rzeczpospolitej."
  },
  {
    id: "R06_NAR_03",
    section: "Mniejszości narodowe",
    type: "riddle",
    prompt: "Jaki skrót nosiła Organizacja Ukraińskich Nacjonalistów?",
    options: null,
    answer: "OUN",
    altAnswers: ["OUN", "oun"],
    explanation: "Organizacja Ukraińskich Nacjonalistów działała pod skrótem OUN i prowadziła zamachy terrorystyczne na Polaków."
  },
  {
    id: "R06_NAR_04",
    section: "Mniejszości narodowe",
    type: "multi_select",
    prompt: "Zaznacz reakcje polskich władz na działania OUN.",
    options: ["powrót do przymusowej polonizacji", "pacyfikacje wsi ukraińskich", "otwarcie Uniwersytetu Ukraińskiego we Lwowie", "zgoda na niepodległą Ukrainę", "przyjęcie wszystkich żądań OUN"],
    answer: [0, 1],
    explanation: "W odpowiedzi na działania OUN władze wróciły do przymusowej polonizacji i przeprowadzały pacyfikacje wsi ukraińskich."
  },
  {
    id: "R06_NAR_05",
    section: "Mniejszości narodowe",
    type: "true_false",
    prompt: "Pacyfikacje wsi ukraińskich osłabiły terror OUN.",
    options: null,
    answer: false,
    explanation: "Akcje pacyfikacyjne nie osłabiły terroru OUN, lecz zwiększyły wrogość wielu Ukraińców wobec państwa polskiego."
  },
  {
    id: "R06_NAR_06",
    section: "Mniejszości narodowe",
    type: "single_choice",
    prompt: "Gdzie w II Rzeczpospolitej mieszkali głównie Żydzi?",
    options: ["w miastach i miasteczkach dawnych zaborów rosyjskiego i austriackiego", "wyłącznie na Pomorzu", "głównie w Gdyni i na magistrali węglowej", "tylko w województwie wołyńskim", "w kopalniach Górnego Śląska", "w osadach COP-u"],
    answer: 0,
    explanation: "Żydzi mieszkali przede wszystkim w miastach i miasteczkach dawnych zaborów rosyjskiego i austriackiego."
  },
  {
    id: "R06_NAR_07",
    section: "Mniejszości narodowe",
    type: "scenario",
    prompt: "Na uczelni wprowadzono zasadę ograniczającą liczbę przyjmowanych studentów żydowskich do 10% ogółu studentów. Jak nazywało się takie ograniczenie?",
    image: "r06_studenci_transparenty_antyzydowskie.jpg",
    options: ["numerus clausus", "nowela sierpniowa", "pakt paryski", "sanacja", "pacyfikacja", "polityka równowagi"],
    answer: 0,
    explanation: "Numerus clausus oznaczał zamkniętą liczbę i ograniczał udział studentów żydowskich do 10%."
  },
  {
    id: "R06_NAR_08",
    section: "Mniejszości narodowe",
    type: "match",
    prompt: "Połącz grupę z informacją.",
    options: null,
    left: ["Ukraińcy", "Żydzi", "OUN", "Narodowa Demokracja"],
    right: ["ponad 5 milionów mieszkańców", "około 3 miliony mieszkańców", "organizacja prowadząca zamachy terrorystyczne", "ruch związany z antysemityzmem nacjonalistycznym"],
    answer: {
      "Ukraińcy": "ponad 5 milionów mieszkańców",
      "Żydzi": "około 3 miliony mieszkańców",
      "OUN": "organizacja prowadząca zamachy terrorystyczne",
      "Narodowa Demokracja": "ruch związany z antysemityzmem nacjonalistycznym"
    },
    explanation: "Do istotnych problemów narodowościowych należały konflikt polsko-ukraiński oraz antysemityzm narodowców wobec Żydów."
  },
  {
    id: "R06_KUL_01",
    section: "Nauka, kultura i sport",
    type: "multi_select",
    prompt: "Zaznacz dziedziny skupiane przez szkołę lwowsko-warszawską.",
    options: ["filozofia", "etyka", "logika", "psychologia", "historia sztuki i literatury", "budowa portów wojennych"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Szkoła lwowsko-warszawska skupiała m.in. filozofów, etyków, logików, psychologów oraz historyków sztuki i literatury."
  },
  {
    id: "R06_KUL_02",
    section: "Nauka, kultura i sport",
    type: "single_choice",
    prompt: "Co Maria Skłodowska-Curie otworzyła w Warszawie w 1932 r.?",
    options: ["Instytut Radowy", "Polskie Radio", "teatr eksperymentalny", "Centralny Okręg Przemysłowy", "port rybacki", "szkołę lwowsko-warszawską"],
    answer: 0,
    explanation: "W 1932 r. Maria Skłodowska-Curie otworzyła Instytut Radowy, nowoczesny ośrodek walki z nowotworami."
  },
  {
    id: "R06_KUL_03",
    section: "Nauka, kultura i sport",
    type: "match",
    prompt: "Połącz uczonego lub twórcę z osiągnięciem.",
    options: null,
    left: ["Józef Kostrzewski", "Eugeniusz Romer", "Maria Dąbrowska", "Władysław Reymont"],
    right: ["badania osady w Biskupinie", "nowoczesna polska kartografia", "Noce i dnie", "Nagroda Nobla za Chłopów"],
    answer: {
      "Józef Kostrzewski": "badania osady w Biskupinie",
      "Eugeniusz Romer": "nowoczesna polska kartografia",
      "Maria Dąbrowska": "Noce i dnie",
      "Władysław Reymont": "Nagroda Nobla za Chłopów"
    },
    explanation: "W dwudziestoleciu międzywojennym Polska rozwijała naukę i literaturę, czego przykładem były osiągnięcia wymienionych twórców i uczonych."
  },
  {
    id: "R06_KUL_04",
    section: "Nauka, kultura i sport",
    type: "single_choice",
    prompt: "Którą powieść uznano za najwybitniejszą powieść międzywojennej Polski?",
    options: ["Noce i dnie", "Chłopi", "Przedwiośnie", "Szatan z siódmej klasy", "Popioły", "Lokomotywa"],
    answer: 0,
    explanation: "Za najwybitniejszą powieść międzywojennej Polski uznano czterotomowe Noce i dnie Marii Dąbrowskiej."
  },
  {
    id: "R06_KUL_05",
    section: "Nauka, kultura i sport",
    type: "true_false",
    prompt: "Władysław Reymont otrzymał literacką Nagrodę Nobla w 1924 r. za powieść Chłopi.",
    options: null,
    answer: true,
    explanation: "Reymont dostał literacką Nagrodę Nobla w 1924 r. za Chłopów, choć powieść powstała jeszcze przed I wojną światową."
  },
  {
    id: "R06_KUL_06",
    section: "Nauka, kultura i sport",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Julian Tuwim, Kornel Makuszyński, Karol Szymanowski, Józef Beck.",
    options: null,
    answer: "Józef Beck",
    explanation: "Tuwim, Makuszyński i Szymanowski byli związani z kulturą, a Beck był ministrem spraw zagranicznych."
  },
  {
    id: "R06_KUL_07",
    section: "Nauka, kultura i sport",
    type: "single_choice",
    prompt: "Kiedy powstało Polskie Radio?",
    image: "r06_polskie_radio_studio.jpg",
    options: ["w 1926 r.", "w 1921 r.", "w 1924 r.", "w 1928 r.", "w 1932 r.", "w 1939 r."],
    answer: 0,
    explanation: "Polskie Radio powstało w 1926 r. i szybko zmieniło dostęp do informacji oraz kultury."
  },
  {
    id: "R06_KUL_08",
    section: "Nauka, kultura i sport",
    type: "true_false",
    prompt: "W 1939 r. w Polsce było zarejestrowanych ponad milion odbiorników radiowych.",
    options: null,
    answer: true,
    explanation: "Choć Polskie Radio nadawało jeden program, w 1939 r. miało ponad milion zarejestrowanych odbiorników."
  },
  {
    id: "R06_KUL_09",
    section: "Nauka, kultura i sport",
    type: "single_choice",
    prompt: "Ile kin istniało w Polsce w 1921 r.?",
    image: "r06_kino_rialto.jpg",
    options: ["ponad 400", "prawie 70", "200 tysięcy", "1650", "360", "ponad milion"],
    answer: 0,
    explanation: "Kino szybko się upowszechniło; w 1921 r. w Polsce działało ponad 400 kin."
  },
  {
    id: "R06_KUL_10",
    section: "Nauka, kultura i sport",
    type: "match",
    prompt: "Połącz sportowca z osiągnięciem.",
    options: null,
    left: ["Halina Konopacka", "Janusz Kusociński", "Stanisław Marusarz", "Cracovia"],
    right: ["złoty medal w rzucie dyskiem", "złoty medal w biegu na 10 km", "wicemistrz świata w skokach narciarskich", "mistrz Polski w piłce nożnej w 1921 r."],
    answer: {
      "Halina Konopacka": "złoty medal w rzucie dyskiem",
      "Janusz Kusociński": "złoty medal w biegu na 10 km",
      "Stanisław Marusarz": "wicemistrz świata w skokach narciarskich",
      "Cracovia": "mistrz Polski w piłce nożnej w 1921 r."
    },
    explanation: "Sport międzywojenny przyniósł sukcesy lekkoatletów, narciarzy i rozwój piłki nożnej."
  },
  {
    id: "R06_KUL_11",
    section: "Nauka, kultura i sport",
    type: "scenario",
    prompt: "Na igrzyskach w Amsterdamie polska lekkoatletka zdobywa pierwsze olimpijskie złoto dla Polski i ustanawia rekord świata w rzucie dyskiem. O kim mowa?",
    image: "r06_halina_konopacka_dysk.jpg",
    options: ["Halina Konopacka", "Maria Dąbrowska", "Jadwiga Smosarska", "Maria Skłodowska-Curie", "Janusz Kusociński", "Stanisław Marusarz"],
    answer: 0,
    explanation: "Halina Konopacka zdobyła złoty medal w Amsterdamie w 1928 r. i ustanowiła rekord świata w rzucie dyskiem."
  },
  {
    id: "R06_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile osób cywilnych zginęło w trzydniowych starciach zamachu majowego?",
    options: ["164", "379", "900", "14", "19", "10"],
    answer: 0,
    explanation: "W zamachu majowym zginęło 379 osób, w tym 164 osoby cywilne."
  },
  {
    id: "R06_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Po zamachu majowym Piłsudski został wybrany na prezydenta __________ maja 1926 r., ale wyboru nie przyjął.",
    options: null,
    answer: ["31"],
    altAnswers: [["31", "31 maja"]],
    explanation: "31 maja Zgromadzenie Narodowe wybrało Piłsudskiego na prezydenta, ale odmówił z powodu zbyt małych uprawnień głowy państwa."
  },
  {
    id: "R06_HARD_03",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu byłych posłów opozycji aresztowano w 1930 r. na polecenie obozu sanacyjnego?",
    image: "r06_aresztowani_brzescy.jpg",
    options: ["19", "10", "14", "6", "1200", "379"],
    answer: 0,
    explanation: "W 1930 r. aresztowano 19 byłych posłów opozycji i osadzono ich w twierdzy w Brześciu nad Bugiem."
  },
  {
    id: "R06_HARD_04",
    section: "Super trudne",
    type: "true_false",
    prompt: "Proces brzeski odbył się w Brześciu nad Bugiem.",
    options: null,
    answer: false,
    explanation: "Polityków osadzono w twierdzy w Brześciu, ale proces brzeski odbył się w Warszawie."
  },
  {
    id: "R06_HARD_05",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się francuski marszałek, przyjaciel Polski, który w maju 1923 r. odwiedził Warszawę?",
    image: "r06_ferdynand_foch_warszawa.jpg",
    options: null,
    answer: "Ferdynand Foch",
    altAnswers: ["Ferdynand Foch", "Foch", "marszałek Foch"],
    explanation: "Ferdynand Foch był francuskim generałem, wrogiem Niemiec i przyjacielem Polski; w Polsce otrzymał tytuł marszałka Polski."
  },
  {
    id: "R06_HARD_06",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz liczbę z faktem.",
    options: null,
    left: ["100 tysięcy", "114 tysięcy", "940 tysięcy", "ponad milion"],
    right: ["limit armii niemieckiej po I wojnie", "mieszkańcy Gdyni w 1938 r.", "bezrobotni w Polsce w 1933 r.", "odbiorniki radiowe w Polsce w 1939 r."],
    answer: {
      "100 tysięcy": "limit armii niemieckiej po I wojnie",
      "114 tysięcy": "mieszkańcy Gdyni w 1938 r.",
      "940 tysięcy": "bezrobotni w Polsce w 1933 r.",
      "ponad milion": "odbiorniki radiowe w Polsce w 1939 r."
    },
    explanation: "Liczby odnoszą się do limitu armii niemieckiej, liczby mieszkańców Gdyni, bezrobocia w Polsce i liczby odbiorników radiowych."
  },
  {
    id: "R06_HARD_07",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia w kolejności chronologicznej.",
    options: null,
    items: ["numerus clausus na niektórych uczelniach", "Polskie Radio podaje wyniki wyborów prezydenckich", "pakt paryski", "pacyfikacje wsi ukraińskich po fali podpaleń"],
    answer: ["Polskie Radio podaje wyniki wyborów prezydenckich", "pakt paryski", "pacyfikacje wsi ukraińskich po fali podpaleń", "numerus clausus na niektórych uczelniach"],
    explanation: "Polskie Radio podało wyniki wyborów w 1926 r., pakt paryski podpisano w 1928 r., pacyfikacje miały miejsce w 1930 r., a numerus clausus wprowadzano na niektórych uczelniach w 1937 r."
  },
  {
    id: "R06_HARD_08",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj działania do typu polityki państwa.",
    options: null,
    items: ["pakt o nieagresji z ZSRR", "deklaracja o nieagresji z Niemcami", "przymusowa polonizacja Ukraińców", "pacyfikacje wsi ukraińskich"],
    categories: ["polityka zagraniczna", "polityka wobec mniejszości"],
    answer: {
      "polityka zagraniczna": ["pakt o nieagresji z ZSRR", "deklaracja o nieagresji z Niemcami"],
      "polityka wobec mniejszości": ["przymusowa polonizacja Ukraińców", "pacyfikacje wsi ukraińskich"]
    },
    explanation: "Pakty były elementem polityki równowagi, a polonizacja i pacyfikacje dotyczyły konfliktu z Ukraińcami."
  },
  {
    id: "R06_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Radom, Starachowice, Kraśnik, Biskupin.",
    options: null,
    answer: "Biskupin",
    explanation: "Radom, Starachowice i Kraśnik pojawiają się jako ośrodki inwestycji COP-u, a Biskupin był miejscem badań archeologicznych."
  },
  {
    id: "R06_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile zakładów przemysłowych ukończono przed wybuchem II wojny światowej w ramach COP-u?",
    options: ["100", "300", "40", "114", "360", "1650"],
    answer: 0,
    explanation: "Przed wybuchem wojny ukończono budowę 100 zakładów przemysłowych i rozpoczęto prace przy 300 następnych."
  },
  {
    id: "R06_HARD_11",
    section: "Super trudne",
    type: "scenario",
    prompt: "Historyk porównuje gospodarkę Polski z 1938 r. i 1913 r. Wskazuje, że produkcja przemysłowa nadal nie osiągnęła dawnego poziomu, ale państwo musiało przezwyciężać skutki wojen i rozbicia. Co uznano za największe osiągnięcie gospodarcze odrodzonej Polski?",
    options: ["scalenie trzech dawnych zaborów w jeden organizm państwowy", "natychmiastową likwidację bezrobocia przez COP", "pełne zwycięstwo w wojnie celnej", "zastąpienie Gdyni portem w Gdańsku", "zamknięcie wszystkich kopalń", "zbudowanie ponad 40 okręgów przemysłowych"],
    answer: 0,
    explanation: "Największym osiągnięciem było scalenie trzech dawnych zaborów w jeden organizm państwowy."
  },
  {
    id: "R06_HARD_12",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz twórcę kultury z właściwym dziełem lub dziedziną.",
    options: null,
    left: ["Jan Lechoń", "Kornel Makuszyński", "Karol Szymanowski", "Witkacy"],
    right: ["poeta młodszego pokolenia", "Przygody Koziołka Matołka", "muzyka", "pisarz i malarz"],
    answer: {
      "Jan Lechoń": "poeta młodszego pokolenia",
      "Kornel Makuszyński": "Przygody Koziołka Matołka",
      "Karol Szymanowski": "muzyka",
      "Witkacy": "pisarz i malarz"
    },
    explanation: "Kultura międzywojenna obejmowała m.in. poezję, literaturę dziecięcą, muzykę i twórczość Witkacego."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "II Rzeczpospolita - sukcesy i niepowodzenia",
  icon: "🇵🇱",
  sectionOrder: [
    "Pod rządami sanacji",
    "Polityka zagraniczna",
    "Gospodarka i wielki kryzys",
    "Mniejszości narodowe",
    "Nauka, kultura i sport"
  ],
  sectionIcons: {
    "Pod rządami sanacji": "🏛️",
    "Polityka zagraniczna": "🤝",
    "Gospodarka i wielki kryzys": "🏭",
    "Mniejszości narodowe": "👥",
    "Nauka, kultura i sport": "🎭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
