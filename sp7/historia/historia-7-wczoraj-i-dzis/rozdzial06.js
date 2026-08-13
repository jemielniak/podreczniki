// Skróty sekcji (do identyfikatorów ćwiczeń):
//   LAD  = Ład wersalski i kryzys gospodarczy
//   FAN  = Faszyzm i nazizm
//   ZSR  = ZSRS - imperium komunistyczne
//   KUL  = Kultura i społeczeństwo
//   DRO  = Droga do II wojny światowej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R06_LAD_01",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "single_choice",
    prompt: "Kiedy podpisano traktat wersalski kończący wojnę z Niemcami?",
    options: ["11 listopada 1918 r.", "28 czerwca 1919 r.", "5 listopada 1920 r.", "24 października 1929 r.", "30 września 1938 r.", "23 sierpnia 1939 r."],
    answer: 1,
    image: "r06_traktat_wersalski.jpg",
    explanation: "Traktat wersalski podpisano 28 czerwca 1919 r. w Wersalu, po obradach konferencji pokojowej w Paryżu."
  },
  {
    id: "R06_LAD_02",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "multi_select",
    prompt: "Zaznacz postanowienia traktatu wersalskiego wobec Niemiec.",
    options: ["Utrata kolonii i części terytorium", "Demilitaryzacja Nadrenii", "Zwiększenie armii do miliona żołnierzy", "Wypłata odszkodowań wojennych", "Zakaz istnienia Ligi Narodów", "Redukcja armii do 100 tys. żołnierzy"],
    answer: [0, 1, 3, 5],
    image: "r06_traktat_wersalski.jpg",
    explanation: "Niemcy utraciły kolonie i część ziem, Nadrenię zdemilitaryzowano, armię ograniczono do 100 tys. żołnierzy i nakazano wypłacić odszkodowania."
  },
  {
    id: "R06_LAD_03",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "true_false",
    prompt: "Gdańsk oraz Kłajpeda z otaczającymi je terytoriami zostały po I wojnie światowej przekształcone w wolne miasta podlegające Lidze Narodów.",
    options: null,
    answer: true,
    explanation: "Takie rozwiązanie przewidziano w ustaleniach powojennych, a oba wolne miasta podlegały Lidze Narodów."
  },
  {
    id: "R06_LAD_04",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "fill_in",
    prompt: "Liga Narodów powstała w roku __________, a jej siedzibą była __________.",
    options: null,
    answer: ["1920", "Genewa"],
    altAnswers: [["1920", "1920 r."], ["Genewa", "Genewie"]],
    image: "r06_liga_narodow.jpg",
    explanation: "Liga Narodów została utworzona w 1920 r. w wyniku postanowień traktatu wersalskiego, a jej siedzibą była Genewa w Szwajcarii."
  },
  {
    id: "R06_LAD_05",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "riddle",
    prompt: "Jak nazywa się ograniczenie lub likwidacja potencjału wojskowego na określonym terytorium?",
    options: null,
    answer: "demilitaryzacja",
    altAnswers: ["demilitaryzacja", "demilitaryzacji"],
    explanation: "Demilitaryzacja oznacza ograniczenie lub likwidację potencjału wojskowego na danym obszarze, na przykład w Nadrenii."
  },
  {
    id: "R06_LAD_06",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "match",
    prompt: "Połącz członka Wielkiej Czwórki z państwem, które reprezentował.",
    options: null,
    left: ["David Lloyd George", "Georges Clemenceau", "Thomas Woodrow Wilson", "Vittorio Orlando"],
    right: ["Wielka Brytania", "Francja", "USA", "Włochy"],
    answer: {
      "David Lloyd George": "Wielka Brytania",
      "Georges Clemenceau": "Francja",
      "Thomas Woodrow Wilson": "USA",
      "Vittorio Orlando": "Włochy"
    },
    explanation: "Ostateczne decyzje konferencji paryskiej podejmowali przywódcy USA, Wielkiej Brytanii, Francji i Włoch, nazywani Wielką Czwórką."
  },
  {
    id: "R06_LAD_07",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Konferencja w Locarno", "Podpisanie traktatu wersalskiego", "Czarny czwartek na giełdzie nowojorskiej", "Powstanie Ligi Narodów"],
    answer: ["Podpisanie traktatu wersalskiego", "Powstanie Ligi Narodów", "Konferencja w Locarno", "Czarny czwartek na giełdzie nowojorskiej"],
    explanation: "Traktat wersalski podpisano w 1919 r., Liga Narodów powstała w 1920 r., konferencja w Locarno odbyła się w 1925 r., a czarny czwartek miał miejsce w 1929 r."
  },
  {
    id: "R06_LAD_08",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie pasuje do pozostałych: Polska, Czechosłowacja, Finlandia, Francja.",
    options: null,
    answer: "Francja",
    explanation: "Polska, Czechosłowacja i Finlandia należały do państw, które powstały lub obroniły niepodległość po I wojnie światowej; Francja była już wcześniej istniejącym mocarstwem."
  },
  {
    id: "R06_LAD_09",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "scenario",
    prompt: "Jest 24 października 1929 r. Na giełdzie nowojorskiej gwałtownie spadają ceny akcji, banki ograniczają kredyty, a fabryki wstrzymują produkcję. Jak nazwano początek tego kryzysu?",
    options: ["Czarny czwartek", "Traktat wersalski", "Pakt reński", "Nowy Ład", "Marsz na Rzym", "Wielka czystka"],
    answer: 0,
    image: "r06_krach_gieldowy.jpg",
    explanation: "Gwałtowny spadek cen akcji 24 października 1929 r. przeszedł do historii jako czarny czwartek i rozpoczął wielki kryzys gospodarczy."
  },
  {
    id: "R06_LAD_10",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "single_choice",
    prompt: "Który prezydent USA wprowadził program reform określany jako New Deal?",
    options: ["Thomas Woodrow Wilson", "Franklin Delano Roosevelt", "Herbert Hoover", "David Lloyd George", "Georges Clemenceau", "Vittorio Orlando"],
    answer: 1,
    image: "r06_krach_gieldowy.jpg",
    explanation: "Od 1933 r. Franklin Delano Roosevelt wprowadzał reformy ekonomiczno-społeczne nazywane New Deal, czyli Nowym Ładem."
  },
  {
    id: "R06_LAD_11",
    section: "Ład wersalski i kryzys gospodarczy",
    type: "sort",
    prompt: "Przyporządkuj elementy do właściwych kategorii.",
    options: null,
    items: ["Demilitaryzacja Nadrenii", "Redukcja armii niemieckiej", "Krach na giełdzie", "Spadek produkcji", "Wzrost bezrobocia", "Utrata kolonii przez Niemcy"],
    categories: ["Ład wersalski", "Wielki kryzys"],
    answer: {
      "Ład wersalski": ["Demilitaryzacja Nadrenii", "Redukcja armii niemieckiej", "Utrata kolonii przez Niemcy"],
      "Wielki kryzys": ["Krach na giełdzie", "Spadek produkcji", "Wzrost bezrobocia"]
    },
    explanation: "Ład wersalski dotyczył powojennych ustaleń wobec Niemiec, natomiast wielki kryzys wiązał się z załamaniem giełdy, produkcji i zatrudnienia."
  },
  {
    id: "R06_FAN_01",
    section: "Faszyzm i nazizm",
    type: "single_choice",
    prompt: "W którym państwie europejskim skrajni nacjonaliści jako pierwsi zdobyli władzę po I wojnie światowej?",
    options: ["W Niemczech", "We Włoszech", "W Polsce", "W Czechosłowacji", "W Finlandii", "W Irlandii"],
    answer: 1,
    explanation: "Pierwszym państwem europejskim, w którym wpływy zdobyli skrajni nacjonaliści, były Włochy."
  },
  {
    id: "R06_FAN_02",
    section: "Faszyzm i nazizm",
    type: "true_false",
    prompt: "Po marszu na Rzym w 1922 r. Benito Mussolini został premierem Włoch.",
    options: null,
    answer: true,
    image: "r06_marsz_na_rzym.jpg",
    explanation: "Marsz czarnych koszul na Rzym skłonił króla do powierzenia Mussoliniemu urzędu premiera."
  },
  {
    id: "R06_FAN_03",
    section: "Faszyzm i nazizm",
    type: "multi_select",
    prompt: "Zaznacz cechy faszyzmu włoskiego.",
    options: ["Rządy jednej partii", "Kult wodza Duce", "Wroga postawa wobec komunizmu", "Odbudowa Imperium Rzymskiego", "Pełna swoboda działania opozycji", "Likwidacja propagandy państwowej"],
    answer: [0, 1, 2, 3],
    explanation: "Faszyzm włoski zakładał rządy partii faszystowskiej, kult Mussoliniego jako Duce, antykomunizm, kult państwa, propagandę i hasła odbudowy dawnej potęgi Rzymu."
  },
  {
    id: "R06_FAN_04",
    section: "Faszyzm i nazizm",
    type: "riddle",
    prompt: "Jak nazywano zbrojne oddziały włoskich faszystów od koloru ich mundurów?",
    options: null,
    answer: "czarne koszule",
    altAnswers: ["czarne koszule", "czarnymi koszulami", "oddziały czarnych koszul"],
    image: "r06_marsz_na_rzym.jpg",
    explanation: "Oddziały faszystów zwane czarnymi koszulami zwalczały terrorem inne organizacje polityczne."
  },
  {
    id: "R06_FAN_05",
    section: "Faszyzm i nazizm",
    type: "fill_in",
    prompt: "W 1929 r. Mussolini zawarł z papieżem __________ traktaty laterańskie, na mocy których powstało państwo __________.",
    options: null,
    answer: ["Piusem XI", "Watykan"],
    altAnswers: [["Piusem XI", "Pius XI", "Piusem Jedenastym"], ["Watykan", "Watykanu"]],
    explanation: "Traktaty laterańskie zawarte z Piusem XI zakończyły spór z papiestwem i doprowadziły do powstania Watykanu."
  },
  {
    id: "R06_FAN_06",
    section: "Faszyzm i nazizm",
    type: "single_choice",
    prompt: "W której książce Adolf Hitler przedstawił program ruchu nazistowskiego?",
    options: ["Mein Kampf", "New Deal", "Wojna światów", "Guernica", "Robotnik i kołchoźnica", "Podróż na Księżyc"],
    answer: 0,
    explanation: "Hitler przedstawił swoją ideologię w książce Mein Kampf, napisanej po nieudanym puczu monachijskim."
  },
  {
    id: "R06_FAN_07",
    section: "Faszyzm i nazizm",
    type: "match",
    prompt: "Połącz pojęcie z właściwym opisem.",
    options: null,
    left: ["Duce", "Führer", "NSDAP", "SA"],
    right: ["tytuł Mussoliniego", "tytuł Hitlera", "partia nazistowska", "oddziały szturmowe nazistów"],
    answer: {
      "Duce": "tytuł Mussoliniego",
      "Führer": "tytuł Hitlera",
      "NSDAP": "partia nazistowska",
      "SA": "oddziały szturmowe nazistów"
    },
    explanation: "Duce oznaczał wodza faszystów włoskich, Führer wodza nazistów, NSDAP była partią Hitlera, a SA jej oddziałami szturmowymi."
  },
  {
    id: "R06_FAN_08",
    section: "Faszyzm i nazizm",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z Hitlerem w porządku chronologicznym.",
    options: null,
    items: ["Noc długich noży", "Nieudany pucz w Monachium", "Hitler zostaje kanclerzem Niemiec", "Powstanie NSDAP na początku lat 20."],
    answer: ["Powstanie NSDAP na początku lat 20.", "Nieudany pucz w Monachium", "Hitler zostaje kanclerzem Niemiec", "Noc długich noży"],
    explanation: "NSDAP działała od początku lat 20., pucz monachijski odbył się w 1923 r., Hitler został kanclerzem w 1933 r., a noc długich noży nastąpiła w 1934 r."
  },
  {
    id: "R06_FAN_09",
    section: "Faszyzm i nazizm",
    type: "scenario",
    prompt: "Po pożarze Reichstagu władze oskarżają komunistę, a następnie eliminują kolejne partie polityczne. Jaki ustrój zaczynają budować Niemcy?",
    options: ["Państwo jednopartyjne", "Monarchię parlamentarną", "Federację niezależnych republik", "Republikę neutralną", "Wolne miasto", "Państwo monoetniczne"],
    answer: 0,
    image: "r06_propaganda_nazistowska.jpg",
    explanation: "Po dojściu Hitlera do władzy zdelegalizowano komunistów, a potem pozostałe ugrupowania, przez co Niemcy stały się państwem jednopartyjnym."
  },
  {
    id: "R06_FAN_10",
    section: "Faszyzm i nazizm",
    type: "multi_select",
    prompt: "Zaznacz założenia nazizmu wymienione w materiale.",
    options: ["Antysemityzm", "Kult Führera", "Uznanie Niemców za rasę panów", "Przekonanie o komunizmie jako największym zagrożeniu", "Obrona demokracji parlamentarnej", "Niechęć do chrześcijaństwa"],
    answer: [0, 1, 2, 3, 5],
    image: "r06_propaganda_nazistowska.jpg",
    explanation: "Nazizm łączył kult Hitlera, rasizm, antysemityzm, antykomunizm, niechęć do chrześcijaństwa i dążenie do ekspansji."
  },
  {
    id: "R06_FAN_11",
    section: "Faszyzm i nazizm",
    type: "single_choice",
    prompt: "Jak nazywano przepisy z 1935 r., które pozbawiły Żydów w III Rzeszy większości praw obywatelskich?",
    options: ["Ustawy norymberskie", "Traktaty laterańskie", "Pakt reński", "Mały traktat wersalski", "Pakt antykominternowski", "New Deal"],
    answer: 0,
    image: "r06_noc_krysztalowa.jpg",
    explanation: "Ustawy norymberskie z 1935 r. wprowadziły rasistowskie przepisy i pozbawiły Żydów większości praw obywatelskich."
  },
  {
    id: "R06_ZSR_01",
    section: "ZSRS - imperium komunistyczne",
    type: "single_choice",
    prompt: "Kiedy utworzono Związek Socjalistycznych Republik Sowieckich?",
    options: ["30 grudnia 1922 r.", "24 stycznia 1924 r.", "23 sierpnia 1939 r.", "15 września 1935 r.", "5 listopada 1920 r.", "30 września 1938 r."],
    answer: 0,
    image: "r06_robotnik_i_kolchoznica.jpg",
    explanation: "ZSRS utworzono 30 grudnia 1922 r. w Moskwie."
  },
  {
    id: "R06_ZSR_02",
    section: "ZSRS - imperium komunistyczne",
    type: "multi_select",
    prompt: "Zaznacz republiki, które początkowo stanowiły podstawę ZSRS.",
    options: ["Rosja", "Ukraina", "Białoruś", "Finlandia", "Polska", "Estonia"],
    answer: [0, 1, 2],
    explanation: "Podstawą ZSRS były początkowo trzy republiki: Rosja, Ukraina i Białoruś."
  },
  {
    id: "R06_ZSR_03",
    section: "ZSRS - imperium komunistyczne",
    type: "true_false",
    prompt: "Model ZSRS jako federacji niezależnych republik był w praktyce propagandową wizją, bo kluczowe decyzje zapadały w Moskwie.",
    options: null,
    answer: true,
    image: "r06_robotnik_i_kolchoznica.jpg",
    explanation: "Związek Sowiecki był silnie scentralizowany, a republiki nie decydowały samodzielnie o najważniejszych sprawach."
  },
  {
    id: "R06_ZSR_04",
    section: "ZSRS - imperium komunistyczne",
    type: "riddle",
    prompt: "Jak nazywała się polityka Lenina z początku lat 20., która pozwoliła chłopom sprzedawać nadwyżki żywności i dopuściła drobny prywatny handel?",
    options: null,
    answer: "Nowa Ekonomiczna Polityka",
    altAnswers: ["Nowa Ekonomiczna Polityka", "NEP", "Nowej Ekonomicznej Polityki"],
    explanation: "NEP miał złagodzić ruinę gospodarczą po komunizmie wojennym i wojnie domowej."
  },
  {
    id: "R06_ZSR_05",
    section: "ZSRS - imperium komunistyczne",
    type: "fill_in",
    prompt: "Po zakończeniu NEP-u Stalin rozpoczął kolektywizację, a produkcja rolna miała odbywać się w __________ i __________.",
    options: null,
    answer: ["sowchozach", "kołchozach"],
    altAnswers: [["sowchozach", "sowchozy"], ["kołchozach", "kołchozy"]],
    explanation: "Kolektywizacja oznaczała przejmowanie ziemi chłopów i organizowanie produkcji w państwowych sowchozach oraz spółdzielczych kołchozach."
  },
  {
    id: "R06_ZSR_06",
    section: "ZSRS - imperium komunistyczne",
    type: "match",
    prompt: "Połącz pojęcie z opisem.",
    options: null,
    left: ["Łagier", "Gułag", "NKWD", "Komsomoł"],
    right: ["ciężki obóz pracy przymusowej", "Główny Zarząd Obozów", "tajna policja polityczna", "organizacja młodzieży komunistycznej"],
    answer: {
      "Łagier": "ciężki obóz pracy przymusowej",
      "Gułag": "Główny Zarząd Obozów",
      "NKWD": "tajna policja polityczna",
      "Komsomoł": "organizacja młodzieży komunistycznej"
    },
    image: "r06_lagier_syberia.jpg",
    explanation: "System represji w ZSRS obejmował łagry zarządzane przez Gułag, tajną policję NKWD oraz indoktrynację młodzieży w organizacjach komunistycznych."
  },
  {
    id: "R06_ZSR_07",
    section: "ZSRS - imperium komunistyczne",
    type: "scenario",
    prompt: "Władze zabierają chłopom całą żywność, nie pozwalają zostawić nawet ziarna na zasiew, a kilka milionów ludzi umiera. Które wydarzenie opisuje ta sytuacja?",
    options: ["Wielki głód na Ukrainie", "Konferencję w Locarno", "Noc kryształową", "Marsz na Rzym", "Pakt reński", "Pierwsze rozdanie Oscarów"],
    answer: 0,
    image: "r06_lagier_syberia.jpg",
    explanation: "Bezwzględna polityka gospodarcza Stalina doprowadziła w latach 1932-1933 do wielkiego głodu na Ukrainie."
  },
  {
    id: "R06_ZSR_08",
    section: "ZSRS - imperium komunistyczne",
    type: "single_choice",
    prompt: "Którego rywala Stalin zmusił w 1929 r. do emigracji?",
    options: ["Lwa Trockiego", "Włodzimierza Lenina", "Benita Mussoliniego", "Heinricha Himmlera", "Francisca Franco", "Neville'a Chamberlaina"],
    answer: 0,
    explanation: "Stalin stopniowo usuwał rywali z partii, a Lwa Trockiego zmusił w 1929 r. do emigracji."
  },
  {
    id: "R06_ZSR_09",
    section: "ZSRS - imperium komunistyczne",
    type: "sequence",
    prompt: "Ułóż wydarzenia gospodarczo-polityczne ZSRS w kolejności chronologicznej.",
    options: null,
    items: ["Ogłoszenie zakończenia NEP-u", "Wprowadzenie Nowej Ekonomicznej Polityki", "Wielka czystka", "Komunizm wojenny"],
    answer: ["Komunizm wojenny", "Wprowadzenie Nowej Ekonomicznej Polityki", "Ogłoszenie zakończenia NEP-u", "Wielka czystka"],
    explanation: "Najpierw był komunizm wojenny, potem NEP z początku lat 20., jego zakończenie w 1928 r. i wielka czystka w latach 1936-1938."
  },
  {
    id: "R06_ZSR_10",
    section: "ZSRS - imperium komunistyczne",
    type: "sort",
    prompt: "Przyporządkuj elementy do obszarów polityki Stalina.",
    options: null,
    items: ["Kult jednostki", "Wielka czystka", "Plany pięcioletnie", "Kolektywizacja", "Rozwój przemysłu ciężkiego", "Indoktrynacja dzieci"],
    categories: ["Kontrola społeczeństwa", "Gospodarka"],
    answer: {
      "Kontrola społeczeństwa": ["Kult jednostki", "Wielka czystka", "Indoktrynacja dzieci"],
      "Gospodarka": ["Plany pięcioletnie", "Kolektywizacja", "Rozwój przemysłu ciężkiego"]
    },
    explanation: "Stalin łączył terror i propagandę z przebudową gospodarki według planów pięcioletnich i kolektywizacją."
  },
  {
    id: "R06_ZSR_11",
    section: "ZSRS - imperium komunistyczne",
    type: "multi_select",
    prompt: "Zaznacz informacje dotyczące współpracy ZSRS i Niemiec po traktacie w Rapallo.",
    options: ["Podpisano go w kwietniu 1922 r.", "Oba państwa krytykowały system wersalski", "ZSRS udostępniał Niemcom poligony", "Niemcy przekazywały rozwiązania technologiczne i uzbrojenie", "Układ powołał Ligę Narodów", "Był sojuszem obronnym Polski i Francji"],
    answer: [0, 1, 2, 3],
    explanation: "Traktat w Rapallo rozpoczął współpracę niemiecko-sowiecką, korzystną dla obu państw niezadowolonych z ładu wersalskiego."
  },
  {
    id: "R06_KUL_01",
    section: "Kultura i społeczeństwo",
    type: "single_choice",
    prompt: "Jaki obowiązek szkolny wprowadzano w powojennej Europie, aby wychować świadomych obywateli?",
    options: ["Naukę dla dzieci od 7. do 14. roku życia", "Naukę wyłącznie dla chłopców od 12. roku życia", "Szkolenie wojskowe dla wszystkich dorosłych", "Studia wyższe dla każdego robotnika", "Naukę tylko w szkołach kościelnych", "Zakaz edukacji dziewcząt"],
    answer: 0,
    explanation: "Wprowadzano obowiązek nauki szkolnej dla wszystkich dzieci od 7. do 14. roku życia, bez względu na płeć."
  },
  {
    id: "R06_KUL_02",
    section: "Kultura i społeczeństwo",
    type: "true_false",
    prompt: "Po upadku wielu monarchii w Europie ograniczono rolę Kościołów i następowało rozdzielenie działalności Kościoła od państwa.",
    options: null,
    answer: true,
    explanation: "Uprzywilejowana pozycja Kościołów była wcześniej wzmacniana przez dynastie panujące, a po wojnie zaczęto ograniczać ich rolę."
  },
  {
    id: "R06_KUL_03",
    section: "Kultura i społeczeństwo",
    type: "multi_select",
    prompt: "W jakich celach najczęściej wykorzystywano media w państwach demokratycznych?",
    options: ["Informacyjnych", "Edukacyjnych", "Rozrywkowych", "Komercyjnych", "Do masowych egzekucji", "Do przymusowej kolektywizacji"],
    answer: [0, 1, 2, 3],
    explanation: "W demokracjach media służyły najczęściej informowaniu, edukacji, rozrywce i celom komercyjnym."
  },
  {
    id: "R06_KUL_04",
    section: "Kultura i społeczeństwo",
    type: "fill_in",
    prompt: "W państwach totalitarnych środki masowego przekazu służyły przede wszystkim __________ i __________ obywatelami.",
    options: null,
    answer: ["indoktrynacji", "manipulacji"],
    altAnswers: [["indoktrynacji", "indoktrynacja"], ["manipulacji", "manipulowania"]],
    explanation: "Reżimy totalitarne wykorzystywały media do propagandy, wpajania ideologii i manipulowania społeczeństwem."
  },
  {
    id: "R06_KUL_05",
    section: "Kultura i społeczeństwo",
    type: "riddle",
    prompt: "Jak nazywało się realistyczne słuchowisko radiowe Orsona Wellesa z 1938 r., które wywołało panikę wśród wielu Amerykanów?",
    options: null,
    answer: "Wojna światów",
    altAnswers: ["Wojna światów", "Wojny światów"],
    image: "r06_kino_miedzywojenne.jpg",
    explanation: "Słuchowisko Wojna światów przedstawiało atak kosmitów tak realistycznie, że część odbiorców uznała je za relację na żywo."
  },
  {
    id: "R06_KUL_06",
    section: "Kultura i społeczeństwo",
    type: "single_choice",
    prompt: "W którym roku po raz pierwszy wręczono Oscary?",
    options: ["1902", "1918", "1928", "1929", "1933", "1938"],
    answer: 3,
    image: "r06_kino_miedzywojenne.jpg",
    explanation: "Oscary, czyli nagrody amerykańskiej Akademii Filmowej, po raz pierwszy wręczono w 1929 r."
  },
  {
    id: "R06_KUL_07",
    section: "Kultura i społeczeństwo",
    type: "match",
    prompt: "Połącz nurt z jego opisem.",
    options: null,
    left: ["Surrealizm", "Dadaizm", "Futuryzm", "Funkcjonalizm"],
    right: ["świat wyobraźni i marzeń sennych", "nieograniczona swoboda twórcza", "zachwyt techniką i szybkością", "prostota i użyteczność budynków"],
    answer: {
      "Surrealizm": "świat wyobraźni i marzeń sennych",
      "Dadaizm": "nieograniczona swoboda twórcza",
      "Futuryzm": "zachwyt techniką i szybkością",
      "Funkcjonalizm": "prostota i użyteczność budynków"
    },
    explanation: "W dwudziestoleciu międzywojennym rozwijały się nowe nurty artystyczne i architektoniczne, od surrealizmu po funkcjonalizm."
  },
  {
    id: "R06_KUL_08",
    section: "Kultura i społeczeństwo",
    type: "scenario",
    prompt: "Pracownicy montują samochody na taśmie, dzięki czemu produkcja jest tańsza, a przeciętnie zarabiający Amerykanie mogą kupić własne auto. O jaki model chodzi?",
    options: ["Ford T", "Junkers Ju-52", "Panzer I", "Grosstraktoren", "Leichttraktoren", "Kleintraktoren"],
    answer: 0,
    image: "r06_ford_t.jpg",
    explanation: "Ford T był pierwszym masowym modelem samochodu montowanym w fabryce Forda, a produkcja taśmowa obniżała jego cenę."
  },
  {
    id: "R06_KUL_09",
    section: "Kultura i społeczeństwo",
    type: "multi_select",
    prompt: "Zaznacz zmiany związane z emancypacją kobiet po I wojnie światowej.",
    options: ["Kobiety częściej pracowały zawodowo", "Kobiety zaczęły uzyskiwać prawa wyborcze", "Moda stała się wygodniejsza i bardziej praktyczna", "Do ubioru damskiego weszły spodnie", "Zakazano kobietom udziału w życiu publicznym", "Przywrócono gorsety jako obowiązkowy strój"],
    answer: [0, 1, 2, 3],
    explanation: "Wojna przyspieszyła emancypację kobiet, widoczną w pracy zawodowej, prawach wyborczych, większej niezależności i zmianach mody."
  },
  {
    id: "R06_KUL_10",
    section: "Kultura i społeczeństwo",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do środków masowego przekazu: radio, prasa, kino, kołchoz.",
    options: null,
    answer: "kołchoz",
    explanation: "Radio, prasa i kino należały do mass mediów, natomiast kołchoz był spółdzielczym gospodarstwem rolnym w ZSRS."
  },
  {
    id: "R06_KUL_11",
    section: "Kultura i społeczeństwo",
    type: "sort",
    prompt: "Przyporządkuj przykłady do obszarów kultury i życia społecznego.",
    options: null,
    items: ["Jazz", "Charlie Chaplin", "Modernizm", "Funkcjonalizm", "Społeczeństwo masowe", "Sufrażystki"],
    categories: ["Kultura masowa", "Architektura i sztuka", "Zmiany społeczne"],
    answer: {
      "Kultura masowa": ["Jazz", "Charlie Chaplin"],
      "Architektura i sztuka": ["Modernizm", "Funkcjonalizm"],
      "Zmiany społeczne": ["Społeczeństwo masowe", "Sufrażystki"]
    },
    explanation: "Jazz i kino należały do kultury masowej, modernizm i funkcjonalizm do architektury, a społeczeństwo masowe oraz postulaty sufrażystek do przemian społecznych."
  },
  {
    id: "R06_DRO_01",
    section: "Droga do II wojny światowej",
    type: "single_choice",
    prompt: "Co Hitler przywrócił w Niemczech w 1935 r., łamiąc postanowienia traktatu wersalskiego?",
    options: ["Powszechną służbę wojskową", "Wolne Miasto Gdańsk", "Ligę Narodów", "Mały traktat wersalski", "NEP", "Traktaty laterańskie"],
    answer: 0,
    image: "r06_wehrmacht.jpg",
    explanation: "W 1935 r. Hitler przywrócił powszechną służbę wojskową i rozpoczął rozbudowę Wehrmachtu."
  },
  {
    id: "R06_DRO_02",
    section: "Droga do II wojny światowej",
    type: "fill_in",
    prompt: "W 1936 r. niemieckie wojska wkroczyły do zdemilitaryzowanej __________, graniczącej z Francją.",
    options: null,
    answer: ["Nadrenii"],
    altAnswers: [["Nadrenii", "Nadrenia"]],
    explanation: "Remilitaryzacja Nadrenii była kolejnym naruszeniem traktatu wersalskiego, na które państwa zachodnie nie zareagowały."
  },
  {
    id: "R06_DRO_03",
    section: "Droga do II wojny światowej",
    type: "multi_select",
    prompt: "Zaznacz państwa tworzące Oś Berlin-Rzym-Tokio.",
    options: ["Niemcy", "Włochy", "Japonia", "Francja", "Wielka Brytania", "Polska"],
    answer: [0, 1, 2],
    explanation: "Pakt antykominternowski z lat 1936-1937 połączył Niemcy, Włochy i Japonię, czyli państwa Osi."
  },
  {
    id: "R06_DRO_04",
    section: "Droga do II wojny światowej",
    type: "scenario",
    prompt: "W Hiszpanii lewicowy Front Ludowy wygrywa wybory, plan reform wywołuje bunt części dowódców armii, a na czele rebelii staje generał. Kto nim był?",
    options: ["Francisco Franco", "Benito Mussolini", "Józef Stalin", "Adolf Hitler", "Neville Chamberlain", "Winston Churchill"],
    answer: 0,
    image: "r06_wojna_domowa_hiszpania.jpg",
    explanation: "Buntem wojskowych w Hiszpanii kierował generał Francisco Franco, wspierany przez Niemcy i Włochy."
  },
  {
    id: "R06_DRO_05",
    section: "Droga do II wojny światowej",
    type: "true_false",
    prompt: "Wojna domowa w Hiszpanii trwała do marca 1939 r. i zakończyła się zwycięstwem wojsk generała Franco.",
    options: null,
    answer: true,
    image: "r06_wojna_domowa_hiszpania.jpg",
    explanation: "Konflikt hiszpański trwał od 1936 r. do marca 1939 r. i zakończył się zwycięstwem rebeliantów Franco."
  },
  {
    id: "R06_DRO_06",
    section: "Droga do II wojny światowej",
    type: "single_choice",
    prompt: "Co oznaczał Anschluss Austrii?",
    options: ["Przyłączenie Austrii do III Rzeszy", "Oderwanie Zaolzia od Czechosłowacji", "Powstanie Mandżukuo", "Remilitaryzację Nadrenii", "Utworzenie Ligi Narodów", "Podpisanie paktu reńskiego"],
    answer: 0,
    explanation: "Anschluss był przyłączeniem Austrii do III Rzeszy w marcu 1938 r."
  },
  {
    id: "R06_DRO_07",
    section: "Droga do II wojny światowej",
    type: "fill_in",
    prompt: "Układ monachijski podpisano 30 września __________ r. i włączono nim do Niemiec obszar __________.",
    options: null,
    answer: ["1938", "Sudetów"],
    altAnswers: [["1938", "1938 r."], ["Sudetów", "Sudety"]],
    image: "r06_konferencja_monachium.jpg",
    explanation: "Na konferencji w Monachium w 1938 r. bez udziału Czechosłowacji zdecydowano o oddaniu Niemcom Sudetów."
  },
  {
    id: "R06_DRO_08",
    section: "Droga do II wojny światowej",
    type: "match",
    prompt: "Połącz wydarzenie z jego skutkiem terytorialnym.",
    options: null,
    left: ["Anschluss", "Układ monachijski", "Marzec 1939 r. w Czechach", "Marzec 1939 r. na Litwie"],
    right: ["przyłączenie Austrii do III Rzeszy", "włączenie Sudetów do Niemiec", "utworzenie Protektoratu Czech i Moraw", "oderwanie Okręgu Kłajpedy"],
    answer: {
      "Anschluss": "przyłączenie Austrii do III Rzeszy",
      "Układ monachijski": "włączenie Sudetów do Niemiec",
      "Marzec 1939 r. w Czechach": "utworzenie Protektoratu Czech i Moraw",
      "Marzec 1939 r. na Litwie": "oderwanie Okręgu Kłajpedy"
    },
    image: "r06_konferencja_monachium.jpg",
    explanation: "W latach 1938-1939 Hitler kolejno włączał Austrię, Sudety, podporządkowywał Czechy i Morawy oraz odebrał Litwie Okręg Kłajpedy."
  },
  {
    id: "R06_DRO_09",
    section: "Droga do II wojny światowej",
    type: "sequence",
    prompt: "Ułóż wydarzenia ekspansji lat 30. XX w. w porządku chronologicznym.",
    options: null,
    items: ["Układ monachijski", "Atak Japonii na Mandżurię", "Anschluss Austrii", "Wybuch wojny domowej w Hiszpanii", "Utworzenie Protektoratu Czech i Moraw"],
    answer: ["Atak Japonii na Mandżurię", "Wybuch wojny domowej w Hiszpanii", "Anschluss Austrii", "Układ monachijski", "Utworzenie Protektoratu Czech i Moraw"],
    explanation: "Japonia zaatakowała Mandżurię w 1931 r., wojna w Hiszpanii wybuchła w 1936 r., Anschluss nastąpił w marcu 1938 r., Monachium we wrześniu 1938 r., a Protektorat utworzono w marcu 1939 r."
  },
  {
    id: "R06_DRO_10",
    section: "Droga do II wojny światowej",
    type: "multi_select",
    prompt: "Zaznacz przyczyny i skutki ekspansji Japonii opisane w materiale.",
    options: ["Zależność od importu żywności i surowców", "Wzrost japońskiego nacjonalizmu", "Opanowanie Mandżurii", "Utworzenie marionetkowego Mandżukuo", "Przystąpienie Japonii do Ligi Narodów w celu rozbrojenia", "Zakończenie wojny domowej w Hiszpanii"],
    answer: [0, 1, 2, 3],
    image: "r06_mandzukuo.jpg",
    explanation: "Japonia dążyła do samowystarczalnego imperium, dlatego zajęła Mandżurię i utworzyła zależne cesarstwo Mandżukuo."
  },
  {
    id: "R06_DRO_11",
    section: "Droga do II wojny światowej",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do niemieckich sił zbrojnych rozwijanych przez Hitlera: Wehrmacht, Luftwaffe, Kriegsmarine, Liga Narodów.",
    options: null,
    answer: "Liga Narodów",
    image: "r06_wehrmacht.jpg",
    explanation: "Wehrmacht, Luftwaffe i Kriegsmarine były elementami rozbudowy niemieckich sił zbrojnych, a Liga Narodów była organizacją międzynarodową."
  },
  {
    id: "R06_HARD_01",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W konferencji pokojowej w Paryżu uczestniczyło __________ państw, lecz ostateczne decyzje podejmowała tzw. __________.",
    options: null,
    answer: ["27", "Wielka Czwórka"],
    altAnswers: [["27", "dwadzieścia siedem"], ["Wielka Czwórka", "Wielką Czwórką"]],
    image: "r06_traktat_wersalski.jpg",
    explanation: "W konferencji brało udział 27 państw, ale najważniejsze decyzje podejmowali przywódcy zwycięskich mocarstw nazywani Wielką Czwórką."
  },
  {
    id: "R06_HARD_02",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Czego dotyczył mały traktat wersalski narzucony m.in. Polsce?",
    options: ["Przestrzegania praw mniejszości narodowych i wyznaniowych", "Zakazu posiadania floty wojennej", "Przyłączenia Zaolzia do Polski", "Zakończenia NEP-u", "Utworzenia Protektoratu Czech i Moraw", "Uznania Osi Berlin-Rzym-Tokio"],
    answer: 0,
    explanation: "Mały traktat wersalski zobowiązywał nowe państwa, w tym Polskę, do przestrzegania praw mniejszości narodowych i wyznaniowych."
  },
  {
    id: "R06_HARD_03",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywa się państwo, którego większość obywateli to przedstawiciele jednego narodu, a mniejszości są nieliczne?",
    options: null,
    answer: "państwo monoetniczne",
    altAnswers: ["państwo monoetniczne", "monoetniczne", "państwa monoetnicznego"],
    explanation: "Idea państwa monoetnicznego zyskała popularność po wojnie i sprzyjała masowym przesiedleniom ludności."
  },
  {
    id: "R06_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz skutki traktatów pokojowych podpisanych z Austrią, Bułgarią, Turcją i Węgrami.",
    options: ["Utrata znacznej części terytoriów", "Oddanie większości uzbrojenia", "Ograniczenie liczebności armii", "Wypłata odszkodowań wojennych", "Automatyczne wejście do Osi Berlin-Rzym-Tokio", "Zakaz planów zjednoczenia Austrii z Niemcami"],
    answer: [0, 1, 2, 3, 5],
    explanation: "Państwa centralne poza Niemcami także traciły ziemie, uzbrojenie, ograniczały armie i płaciły odszkodowania, a Austrii zakazano zjednoczenia z Niemcami."
  },
  {
    id: "R06_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "Jedną z przyczyn słabości Ligi Narodów było to, że nie przystąpiły do niej Stany Zjednoczone.",
    options: null,
    answer: true,
    image: "r06_liga_narodow.jpg",
    explanation: "Liga Narodów miała zapobiegać wojnom, ale osłabiał ją brak USA i bezsilność wobec agresji Japonii, Włoch oraz Niemiec."
  },
  {
    id: "R06_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "W 1934 r. rywale Hitlera z SA zostają wymordowani przez posłuszne mu SS kierowane przez Heinricha Himmlera. Jak nazwano to wydarzenie?",
    options: ["Noc długich noży", "Noc kryształowa", "Marsz na Rzym", "Wielka czystka", "Anschluss", "Czarny czwartek"],
    answer: 0,
    explanation: "Krwawa rozprawa Hitlera z opozycją wewnątrz partii w 1934 r. przeszła do historii jako noc długich noży."
  },
  {
    id: "R06_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz instytucję lub organizację nazistowską z funkcją.",
    options: null,
    left: ["SS", "SA", "Gestapo", "Hitlerjugend"],
    right: ["oddziały wierne Hitlerowi", "oddziały szturmowe", "tajna policja polityczna", "organizacja młodzieżowa"],
    answer: {
      "SS": "oddziały wierne Hitlerowi",
      "SA": "oddziały szturmowe",
      "Gestapo": "tajna policja polityczna",
      "Hitlerjugend": "organizacja młodzieżowa"
    },
    image: "r06_propaganda_nazistowska.jpg",
    explanation: "Nazistowskie państwo wykorzystywało struktury partyjne, policyjne i młodzieżowe do przemocy, kontroli i indoktrynacji."
  },
  {
    id: "R06_HARD_08",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W ZSRS dzieci od 9. roku życia należały do organizacji __________, a młodzież powyżej 14. roku życia do __________.",
    options: null,
    answer: ["pionierzy", "Komsomołu"],
    altAnswers: [["pionierzy", "pionierów"], ["Komsomołu", "Komsomoł"]],
    image: "r06_robotnik_i_kolchoznica.jpg",
    explanation: "Indoktrynacji komunistycznej służyły organizacje pionierów dla dzieci oraz Komsomoł dla starszej młodzieży."
  },
  {
    id: "R06_HARD_09",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Która instytucja przeprowadziła w latach 1936-1938 wielką czystkę wśród dawnych przywódców bolszewickich i dowództwa Armii Czerwonej?",
    options: ["NKWD", "Gestapo", "SA", "Liga Narodów", "NSDAP", "Komsomoł"],
    answer: 0,
    image: "r06_lagier_syberia.jpg",
    explanation: "Wielką czystkę przeprowadził Ludowy Komisariat Spraw Wewnętrznych, czyli NKWD."
  },
  {
    id: "R06_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy relacji ZSRS i Niemiec w okresie międzywojennym w porządku chronologicznym.",
    options: null,
    items: ["Podpisanie paktu Ribbentrop-Mołotow", "Podpisanie traktatu w Rapallo", "Zerwanie współpracy po dojściu Hitlera do władzy", "Rywalizacja podczas wojny domowej w Hiszpanii"],
    answer: ["Podpisanie traktatu w Rapallo", "Zerwanie współpracy po dojściu Hitlera do władzy", "Rywalizacja podczas wojny domowej w Hiszpanii", "Podpisanie paktu Ribbentrop-Mołotow"],
    explanation: "Współpraca zaczęła się po Rapallo w 1922 r., została zerwana po 1933 r., rywalizacja ujawniła się w Hiszpanii, a w sierpniu 1939 r. podpisano pakt Ribbentrop-Mołotow."
  },
  {
    id: "R06_HARD_11",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz prawdziwe informacje o rozwoju filmu w okresie międzywojennym.",
    options: ["Podróż na Księżyc z 1902 r. wykorzystała efekty specjalne", "W latach 20. XX w. nastąpiło udźwiękowienie filmów", "Zaczęto rejestrować filmy w kolorze", "Pierwsze Oscary wręczono w 1929 r.", "Kino całkowicie zanikło po pojawieniu się radia", "Charlie Chaplin był wyłącznie bohaterem komiksów"],
    answer: [0, 1, 2, 3],
    image: "r06_kino_miedzywojenne.jpg",
    explanation: "Kinematografia rozwijała efekty specjalne, dźwięk, kolor i system nagród, a kino stało się ważną częścią kultury masowej."
  },
  {
    id: "R06_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Japonia zajmuje zasobną w surowce Mandżurię i tworzy tam niesamodzielne cesarstwo zależne od Tokio. Jak nazywało się to państwo?",
    options: ["Mandżukuo", "Protektorat Czech i Moraw", "Wolne Miasto Gdańsk", "Zaolzie", "Nadrenia", "Ruś Zakarpacka"],
    answer: 0,
    image: "r06_mandzukuo.jpg",
    explanation: "Po zajęciu Mandżurii Japonia utworzyła marionetkowe cesarstwo Mandżukuo."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Świat w okresie międzywojennym",
  icon: "🌍",
  sectionOrder: [
    "Ład wersalski i kryzys gospodarczy",
    "Faszyzm i nazizm",
    "ZSRS - imperium komunistyczne",
    "Kultura i społeczeństwo",
    "Droga do II wojny światowej"
  ],
  sectionIcons: {
    "Ład wersalski i kryzys gospodarczy": "📜",
    "Faszyzm i nazizm": "⚠️",
    "ZSRS - imperium komunistyczne": "🏭",
    "Kultura i społeczeństwo": "🎬",
    "Droga do II wojny światowej": "🧭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
