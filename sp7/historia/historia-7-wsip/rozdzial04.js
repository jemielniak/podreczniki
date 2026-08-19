// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KPT  = Konferencja pokojowa i traktat wersalski
//   SKW  = Skutki wielkiej wojny
//   ZSS  = Związek Sowiecki Stalina
//   FAS  = Faszyzm we Włoszech
//   RZE  = III Rzesza Hitlera
//   PRO  = Świat u progu wojny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R04_KPT_01",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "single_choice",
    prompt: "W którym miesiącu i roku rozpoczęła się konferencja paryska?",
    options: ["w listopadzie 1918 r.", "w styczniu 1919 r.", "w czerwcu 1919 r.", "w marcu 1920 r.", "w październiku 1925 r.", "w grudniu 1922 r."],
    answer: 1,
    image: "r04_konferencja_paryska.jpg",
    explanation: "Konferencja paryska rozpoczęła się w styczniu 1919 r. i miała zadecydować o losach powojennego świata."
  },
  {
    id: "R04_KPT_02",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "multi_select",
    prompt: "Zaznacz przywódców zwycięskich mocarstw podejmujących główne decyzje na konferencji paryskiej.",
    options: ["Thomas Woodrow Wilson", "David Lloyd George", "Georges Clemenceau", "Włodzimierz Lenin", "Adolf Hitler", "Vittorio Orlando"],
    answer: [0, 1, 2, 5],
    image: "r04_konferencja_paryska.jpg",
    explanation: "Wilson, Lloyd George, Clemenceau i Orlando byli przywódcami czterech zwycięskich mocarstw."
  },
  {
    id: "R04_KPT_03",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "true_false",
    prompt: "Delegaci Rosji Sowieckiej uczestniczyli w konferencji paryskiej.",
    options: null,
    answer: false,
    explanation: "Delegaci Rosji Sowieckiej nie wzięli udziału w konferencji, ponieważ alianci nie uznawali rządu bolszewickiego i zarzucali Rosji separatystyczny pokój z państwami centralnymi."
  },
  {
    id: "R04_KPT_04",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "fill_in",
    prompt: "Traktat kończący I wojnę światową podpisano __________ czerwca __________ r. w Wersalu.",
    options: null,
    answer: ["28", "1919"],
    altAnswers: [["28", "28."], ["1919", "1919 r."]],
    image: "r04_traktat_wersalski.jpg",
    explanation: "Traktat wersalski podpisano 28 czerwca 1919 r. w podparyskim Wersalu."
  },
  {
    id: "R04_KPT_05",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych uczestników konferencji paryskiej: Stany Zjednoczone, Wielka Brytania, Francja, Rosja Sowiecka.",
    options: null,
    answer: "Rosja Sowiecka",
    explanation: "Rosja Sowiecka nie uczestniczyła w obradach konferencji paryskiej, w przeciwieństwie do zwycięskich mocarstw wymienionych wśród głównych decydentów."
  },
  {
    id: "R04_KPT_06",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "match",
    prompt: "Połącz część traktatu wersalskiego z jej treścią.",
    options: null,
    left: ["pierwsza część", "druga część", "mały traktat wersalski"],
    right: ["powołanie Ligi Narodów", "warunki zakończenia wojny z Niemcami", "ochrona praw mniejszości narodowych"],
    answer: {
      "pierwsza część": "powołanie Ligi Narodów",
      "druga część": "warunki zakończenia wojny z Niemcami",
      "mały traktat wersalski": "ochrona praw mniejszości narodowych"
    },
    image: "r04_traktat_wersalski.jpg",
    explanation: "Traktat wersalski składał się z części dotyczących Ligi Narodów, warunków dla Niemiec oraz ochrony mniejszości narodowych."
  },
  {
    id: "R04_KPT_07",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "sort",
    prompt: "Przyporządkuj cele do mocarstw na konferencji paryskiej.",
    options: null,
    items: ["oparcie ładu na 14 punktach", "osłabienie Niemiec", "zachowanie równowagi w Europie", "poparcie dla Polski i Czechosłowacji"],
    categories: ["Stany Zjednoczone", "Francja", "Wielka Brytania"],
    answer: {
      "Stany Zjednoczone": ["oparcie ładu na 14 punktach"],
      "Francja": ["osłabienie Niemiec", "poparcie dla Polski i Czechosłowacji"],
      "Wielka Brytania": ["zachowanie równowagi w Europie"]
    },
    explanation: "Wilson odwoływał się do 14 punktów, Francja chciała osłabić Niemcy i zyskać sojuszników, a Wielka Brytania dbała o równowagę sił."
  },
  {
    id: "R04_KPT_08",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "sequence",
    prompt: "Ułóż wydarzenia w kolejności chronologicznej.",
    options: null,
    items: ["podpisanie traktatu wersalskiego", "rozpoczęcie konferencji paryskiej", "przyjęcie traktatu przez Niemcy", "zawieszenie broni z Niemcami"],
    answer: ["zawieszenie broni z Niemcami", "rozpoczęcie konferencji paryskiej", "przyjęcie traktatu przez Niemcy", "podpisanie traktatu wersalskiego"],
    explanation: "Zawieszenie broni nastąpiło 11 listopada 1918 r., konferencja zaczęła się w styczniu 1919 r., Niemcy przyjęli traktat 22 czerwca, a podpisano go 28 czerwca 1919 r."
  },
  {
    id: "R04_KPT_09",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "riddle",
    prompt: "Miasto w neutralnej Szwajcarii, które zostało siedzibą Ligi Narodów, to...",
    options: null,
    answer: "Genewa",
    altAnswers: ["Genewa", "Geneva"],
    image: "r04_liga_narodow.jpg",
    explanation: "Siedzibą Ligi Narodów została Genewa w neutralnej Szwajcarii."
  },
  {
    id: "R04_KPT_10",
    section: "Konferencja pokojowa i traktat wersalski",
    type: "scenario",
    prompt: "Jesteś mieszkańcem terenu przygranicznego po I wojnie światowej. W głosowaniu masz zdecydować, do którego państwa ma należeć twoja okolica. Jak nazywa się takie głosowanie?",
    options: ["plebiscyt", "ratyfikacja", "ultimatum", "mandat", "izolacjonizm", "aneksja"],
    answer: 0,
    explanation: "Plebiscyt to głosowanie, w którym ludność danego terenu decyduje, do którego państwa chce przynależeć."
  },
  {
    id: "R04_SKW_01",
    section: "Skutki wielkiej wojny",
    type: "single_choice",
    prompt: "Ilu żołnierzy, według różnych szacunków, straciło życie na frontach I wojny światowej?",
    options: ["od 1 do 2 mln", "od 8,5 do 10 mln", "około 20 mln", "około 50 mln", "500 mln", "około 7 mln"],
    answer: 1,
    image: "r04_cmentarz_wojenny.jpg",
    explanation: "Na frontach I wojny światowej życie straciło od 8,5 do 10 mln żołnierzy."
  },
  {
    id: "R04_SKW_02",
    section: "Skutki wielkiej wojny",
    type: "true_false",
    prompt: "Hiszpanka była pandemią grypy, która przeszła niemal przez cały świat pod koniec wojny i po jej zakończeniu.",
    options: null,
    answer: true,
    image: "r04_cmentarz_wojenny.jpg",
    explanation: "Pandemia grypy zwanej hiszpanką szerzyła się pod koniec wojny i w pierwszych latach po jej zakończeniu."
  },
  {
    id: "R04_SKW_03",
    section: "Skutki wielkiej wojny",
    type: "multi_select",
    prompt: "Zaznacz obszary, które szczególnie ucierpiały z powodu działań wojennych.",
    options: ["północno-wschodnie regiony Francji", "Królestwo Polskie", "Galicja", "Półwysep Skandynawski", "Hiszpania", "Szwajcaria"],
    answer: [0, 1, 2],
    explanation: "Najbardziej ucierpiały m.in. północno-wschodnie regiony Francji, Królestwo Polskie i Galicja."
  },
  {
    id: "R04_SKW_04",
    section: "Skutki wielkiej wojny",
    type: "fill_in",
    prompt: "Inflacja to spadek wartości __________, a hiperinflacja to bardzo gwałtowny spadek jego wartości.",
    options: null,
    answer: ["pieniądza"],
    altAnswers: [["pieniądza", "pieniadza", "pieniądz"]],
    explanation: "Inflacja oznacza spadek wartości pieniądza; gdy jest bardzo gwałtowna, przeradza się w hiperinflację."
  },
  {
    id: "R04_SKW_05",
    section: "Skutki wielkiej wojny",
    type: "odd_one_out",
    prompt: "Co nie pasuje do gospodarczych skutków wojny: zadłużenie państw, inflacja, bezrobocie, wzrost monarchii absolutnych.",
    options: null,
    answer: "wzrost monarchii absolutnych",
    explanation: "Po wojnie państwa mierzyły się z zadłużeniem, inflacją i bezrobociem; wzrost monarchii absolutnych nie był skutkiem gospodarczym wojny."
  },
  {
    id: "R04_SKW_06",
    section: "Skutki wielkiej wojny",
    type: "single_choice",
    prompt: "Którego dnia doszło do czarnego czwartku na giełdzie nowojorskiej?",
    options: ["11 listopada 1918 r.", "28 czerwca 1919 r.", "24 października 1929 r.", "30 stycznia 1933 r.", "15 września 1935 r.", "29 września 1938 r."],
    answer: 2,
    explanation: "Czarny czwartek, czyli gwałtowny spadek kursów akcji na giełdzie nowojorskiej, nastąpił 24 października 1929 r."
  },
  {
    id: "R04_SKW_07",
    section: "Skutki wielkiej wojny",
    type: "match",
    prompt: "Połącz pojęcie z opisem.",
    options: null,
    left: ["pacyfizm", "kultura masowa", "jazz", "hiperinflacja"],
    right: ["ruch potępiający wojnę", "twórczość dla szerokiego kręgu odbiorców", "gatunek muzyczny popularny w latach 20.", "bardzo gwałtowny spadek wartości pieniądza"],
    answer: {
      "pacyfizm": "ruch potępiający wojnę",
      "kultura masowa": "twórczość dla szerokiego kręgu odbiorców",
      "jazz": "gatunek muzyczny popularny w latach 20.",
      "hiperinflacja": "bardzo gwałtowny spadek wartości pieniądza"
    },
    explanation: "Te pojęcia pojawiają się przy omawianiu społecznych, kulturowych i gospodarczych skutków wojny."
  },
  {
    id: "R04_SKW_08",
    section: "Skutki wielkiej wojny",
    type: "scenario",
    prompt: "Podczas wojny kobiety zastępują mężczyzn walczących na froncie w fabrykach i urzędach. Jaki późniejszy proces społeczny przyspieszyło to doświadczenie?",
    options: ["emancypację kobiet", "izolacjonizm", "kolektywizację", "militaryzację Nadrenii", "faszyzację kraju", "system mandatowy"],
    answer: 0,
    image: "r04_kobiety_w_fabryce.jpg",
    explanation: "Praca kobiet w czasie wojny przyspieszyła emancypację i przyczyniła się do przyznawania im praw politycznych w wielu krajach."
  },
  {
    id: "R04_SKW_09",
    section: "Skutki wielkiej wojny",
    type: "true_false",
    prompt: "Stany Zjednoczone znalazły się po wojnie w zupełnie innej sytuacji niż Francja, ponieważ ich terytorium nie zostało bezpośrednio dotknięte działaniami wojennymi.",
    options: null,
    answer: true,
    explanation: "USA nie doświadczyły bezpośrednich zniszczeń wojennych na swoim terytorium i zarabiały na dostawach wojennych."
  },
  {
    id: "R04_SKW_10",
    section: "Skutki wielkiej wojny",
    type: "riddle",
    prompt: "Kalifornijskie miasteczko, późniejsza dzielnica Los Angeles, nazwane fabryką snów, to...",
    options: null,
    answer: "Hollywood",
    altAnswers: ["Hollywood"],
    explanation: "Hollywood stało się centrum światowej kinematografii i symbolem rozwoju kultury masowej."
  },
  {
    id: "R04_ZSS_01",
    section: "Związek Sowiecki Stalina",
    type: "single_choice",
    prompt: "Co zakładała Nowa Polityka Ekonomiczna Lenina?",
    options: ["całkowitą likwidację rynku", "częściowy powrót do gospodarki rynkowej przy zachowaniu władzy partii", "przywrócenie caratu", "rozwiązanie partii bolszewickiej", "natychmiastową kolektywizację całego rolnictwa", "wystąpienie z Ligi Narodów"],
    answer: 1,
    explanation: "NEP zakładała w okresie przejściowym częściowy powrót do gospodarki rynkowej, ale bez rezygnacji z władzy partii bolszewickiej."
  },
  {
    id: "R04_ZSS_02",
    section: "Związek Sowiecki Stalina",
    type: "fill_in",
    prompt: "Związek Socjalistycznych Republik Sowieckich utworzono w grudniu __________ r.",
    options: null,
    answer: ["1922"],
    altAnswers: [["1922", "1922 r."]],
    explanation: "Nowe państwo związkowe, czyli ZSRS, utworzono w grudniu 1922 r."
  },
  {
    id: "R04_ZSS_03",
    section: "Związek Sowiecki Stalina",
    type: "true_false",
    prompt: "Po śmierci Lenina Stalin przejął władzę bez walki politycznej i bez usuwania rywali.",
    options: null,
    answer: false,
    image: "r04_stalin_propaganda.jpg",
    explanation: "Po śmierci Lenina w 1924 r. Stalin stopniowo usuwał rywali, m.in. Lwa Trockiego, a wielu przeciwników później zgładzono."
  },
  {
    id: "R04_ZSS_04",
    section: "Związek Sowiecki Stalina",
    type: "riddle",
    prompt: "Uwielbienie przywódcy, przedstawianego jako nieomylny i troszczący się o obywateli, to kult...",
    options: null,
    answer: "jednostki",
    altAnswers: ["jednostki", "kult jednostki"],
    image: "r04_stalin_propaganda.jpg",
    explanation: "Stalin budował swój wodzowski wizerunek; ten mechanizm określa się jako kult jednostki."
  },
  {
    id: "R04_ZSS_05",
    section: "Związek Sowiecki Stalina",
    type: "match",
    prompt: "Połącz pojęcie z jego znaczeniem.",
    options: null,
    left: ["industrializacja", "kolektywizacja", "kołchoz", "gułag"],
    right: ["uprzemysłowienie kraju", "likwidacja prywatnej własności na wsi", "rolnicza spółdzielnia produkcyjna", "system obozów pracy przymusowej"],
    answer: {
      "industrializacja": "uprzemysłowienie kraju",
      "kolektywizacja": "likwidacja prywatnej własności na wsi",
      "kołchoz": "rolnicza spółdzielnia produkcyjna",
      "gułag": "system obozów pracy przymusowej"
    },
    explanation: "Te pojęcia opisują najważniejsze elementy polityki gospodarczej i represyjnej ZSRS pod rządami Stalina."
  },
  {
    id: "R04_ZSS_06",
    section: "Związek Sowiecki Stalina",
    type: "scenario",
    prompt: "Jest rok 1928. Stalin odchodzi od NEP-u i wprowadza system, w którym rozwój gospodarki wyznaczają wieloletnie plany. Jak nazywano te plany?",
    options: ["pięciolatki", "traktaty laterańskie", "plebiscyty", "pakty reńskie", "korporacje", "mandaty"],
    answer: 0,
    image: "r04_kolektywizacja_ukraina.jpg",
    explanation: "Sowiecka gospodarka miała odtąd rozwijać się w ramach pięcioletnich planów gospodarczych, nazywanych pięciolatkami."
  },
  {
    id: "R04_ZSS_07",
    section: "Związek Sowiecki Stalina",
    type: "multi_select",
    prompt: "Zaznacz gałęzie przemysłu rozwijane w ramach szybkiej industrializacji ZSRS.",
    options: ["górnictwo węgla kamiennego", "hutnictwo", "przemysł metalowy", "energetyka", "przemysł elektrotechniczny", "produkcja hollywoodzkich filmów"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Industrializacja miała przede wszystkim rozbudować przemysł ciężki: górnictwo, hutnictwo, przemysł metalowy, energetyczny i elektrotechniczny."
  },
  {
    id: "R04_ZSS_08",
    section: "Związek Sowiecki Stalina",
    type: "single_choice",
    prompt: "Gdzie kolektywizacja przybrała szczególnie dramatyczną formę i doprowadziła do wielkiego głodu?",
    options: ["na Ukrainie", "w Szwajcarii", "w Mandżurii", "w Danii", "w Belgii", "w Albanii"],
    answer: 0,
    image: "r04_kolektywizacja_ukraina.jpg",
    explanation: "Na Ukrainie w latach 1932-1933 zapanował wielki głód, który pochłonął prawie 6 mln istnień ludzkich."
  },
  {
    id: "R04_ZSS_09",
    section: "Związek Sowiecki Stalina",
    type: "odd_one_out",
    prompt: "Co nie pasuje do stalinizmu: kult jednostki, tajna policja polityczna, wielka czystka, wolna konkurencja partii.",
    options: null,
    answer: "wolna konkurencja partii",
    explanation: "W stalinizmie nie było wolnej konkurencji partii; opozycja została zlikwidowana, a władza Stalina była niczym nieograniczona."
  },
  {
    id: "R04_ZSS_10",
    section: "Związek Sowiecki Stalina",
    type: "single_choice",
    prompt: "Jak nazywał się urząd będący narzędziem wielkiej czystki?",
    options: ["NKWD", "SA", "SS", "Liga Narodów", "Front Pracy", "Falanga"],
    answer: 0,
    explanation: "Narzędziem wielkiej czystki był Ludowy Komisariat Spraw Wewnętrznych, czyli NKWD."
  },
  {
    id: "R04_FAS_01",
    section: "Faszyzm we Włoszech",
    type: "multi_select",
    prompt: "Zaznacz przyczyny wzrostu popularności dyktatorów po I wojnie światowej.",
    options: ["kryzys gospodarczy", "niezadowolenie z postanowień konferencji paryskiej", "strach przed komunizmem", "powszechne bogactwo społeczeństw", "pełna skuteczność rządów demokratycznych", "brak radykalizacji nastrojów"],
    answer: [0, 1, 2],
    explanation: "Kryzys, niezadowolenie z ładu powojennego i obawa przed komunizmem sprzyjały ruchom radykalnym i dyktaturom."
  },
  {
    id: "R04_FAS_02",
    section: "Faszyzm we Włoszech",
    type: "true_false",
    prompt: "Włochy przystąpiły do I wojny światowej po stronie aliantów w 1915 r.",
    options: null,
    answer: true,
    explanation: "Choć przed wojną Włochy należały do państw centralnych, w 1915 r. przystąpiły do wojny po stronie aliantów."
  },
  {
    id: "R04_FAS_03",
    section: "Faszyzm we Włoszech",
    type: "single_choice",
    prompt: "Kto założył w 1919 r. Związek Kombatantów?",
    options: ["Benito Mussolini", "Wiktor Emanuel III", "Adolf Hitler", "Francisco Franco", "Józef Stalin", "Pius XI"],
    answer: 0,
    image: "r04_mussolini_marsz_rzym.jpg",
    explanation: "Związek Kombatantów założył w 1919 r. Benito Mussolini, dawny działacz socjalistyczny."
  },
  {
    id: "R04_FAS_04",
    section: "Faszyzm we Włoszech",
    type: "sequence",
    prompt: "Ułóż wydarzenia z drogi Mussoliniego do władzy w kolejności chronologicznej.",
    options: null,
    items: ["marsz czarnych koszul na Rzym", "założenie Związku Kombatantów", "utworzenie Narodowej Partii Faszystowskiej", "powierzenie Mussoliniemu misji tworzenia rządu"],
    answer: ["założenie Związku Kombatantów", "utworzenie Narodowej Partii Faszystowskiej", "marsz czarnych koszul na Rzym", "powierzenie Mussoliniemu misji tworzenia rządu"],
    image: "r04_mussolini_marsz_rzym.jpg",
    explanation: "Mussolini założył związek w 1919 r., partię w 1921 r., a w 1922 r. marsz na Rzym doprowadził do powierzenia mu rządu."
  },
  {
    id: "R04_FAS_05",
    section: "Faszyzm we Włoszech",
    type: "riddle",
    prompt: "Bojówki włoskich faszystów, nazwane od noszonych ubiorów, to...",
    options: null,
    answer: "czarne koszule",
    altAnswers: ["czarne koszule", "Czarne koszule"],
    explanation: "Członkowie faszystowskich bojówek byli nazywani czarnymi koszulami."
  },
  {
    id: "R04_FAS_06",
    section: "Faszyzm we Włoszech",
    type: "odd_one_out",
    prompt: "Co nie pasuje do programu wczesnych włoskich kombatantów: konfiskata majątków kościelnych, podatek progresywny, hasła nacjonalistyczne, obrona demokracji parlamentarnej.",
    options: null,
    answer: "obrona demokracji parlamentarnej",
    explanation: "Program kombatantów łączył radykalne postulaty społeczne i nacjonalistyczne, a późniejszy faszyzm odrzucał demokrację."
  },
  {
    id: "R04_FAS_07",
    section: "Faszyzm we Włoszech",
    type: "fill_in",
    prompt: "Mussolini ogłosił się wodzem, czyli po włosku __________.",
    options: null,
    answer: ["duce"],
    altAnswers: [["duce", "Duce"]],
    explanation: "Mussolini używał tytułu duce, oznaczającego wodza."
  },
  {
    id: "R04_FAS_08",
    section: "Faszyzm we Włoszech",
    type: "single_choice",
    prompt: "Co zastąpiło rozwiązane związki zawodowe w państwie faszystowskim?",
    options: ["korporacje", "kołchozy", "sowiety", "gułagi", "plebiscyty", "Front Ludowy"],
    answer: 0,
    explanation: "W latach 1926-1927 stworzono system korporacji, które zastąpiły rozwiązane związki zawodowe."
  },
  {
    id: "R04_FAS_09",
    section: "Faszyzm we Włoszech",
    type: "multi_select",
    prompt: "Zaznacz działania Mussoliniego po przejęciu władzy.",
    options: ["zniesienie wolności prasy", "delegalizacja partii poza faszystowską", "zakaz strajków", "rozbudowa opieki społecznej", "likwidacja wszystkich inwestycji publicznych", "rezygnacja z propagandy"],
    answer: [0, 1, 2, 3],
    explanation: "Mussolini ograniczył wolności polityczne, zlikwidował opozycję, zakazał strajków i wprowadzał reformy socjalne."
  },
  {
    id: "R04_FAS_10",
    section: "Faszyzm we Włoszech",
    type: "scenario",
    prompt: "W 1929 r. Włochy uznają istnienie Watykanu jako niepodległego państwa i kończą spór z papiestwem. Jak nazywały się te umowy?",
    options: ["traktaty laterańskie", "pakt reński", "układ w Rapallo", "pakt antykominternowski", "układ monachijski", "mały traktat wersalski"],
    answer: 0,
    explanation: "Traktaty laterańskie z 1929 r. uregulowały stosunki Włoch z Watykanem i zakończyły spór trwający od 1870 r."
  },
  {
    id: "R04_RZE_01",
    section: "III Rzesza Hitlera",
    type: "fill_in",
    prompt: "Niemcy lat 1919-1933 określa się mianem Republiki __________.",
    options: null,
    answer: ["Weimarskiej"],
    altAnswers: [["Weimarskiej", "weimarskiej", "Republiki Weimarskiej"]],
    explanation: "Nazwa Republika Weimarska pochodzi od Weimaru, gdzie obradował parlament i uchwalono konstytucję."
  },
  {
    id: "R04_RZE_02",
    section: "III Rzesza Hitlera",
    type: "single_choice",
    prompt: "Jak nazywała się partia założona w 1920 r., na której czele stanął Adolf Hitler?",
    options: ["NSDAP", "WKP(b)", "Narodowa Partia Faszystowska", "Falanga", "Front Pracy", "Liga Narodów"],
    answer: 0,
    explanation: "Hitler stanął na czele Narodowosocjalistycznej Niemieckiej Partii Robotników, czyli NSDAP."
  },
  {
    id: "R04_RZE_03",
    section: "III Rzesza Hitlera",
    type: "match",
    prompt: "Połącz skrót lub nazwę z opisem.",
    options: null,
    left: ["SA", "SS", "Mein Kampf", "Führer"],
    right: ["Oddziały Szturmowe", "Sztafety Ochronne", "książka Hitlera napisana w więzieniu", "tytuł wodza"],
    answer: {
      "SA": "Oddziały Szturmowe",
      "SS": "Sztafety Ochronne",
      "Mein Kampf": "książka Hitlera napisana w więzieniu",
      "Führer": "tytuł wodza"
    },
    explanation: "SA i SS były organizacjami nazistowskimi, Mein Kampf zawierało założenia nazizmu, a Führer oznaczał wodza."
  },
  {
    id: "R04_RZE_04",
    section: "III Rzesza Hitlera",
    type: "scenario",
    prompt: "Latem 1932 r. nazistowska partia zdobywa 37% poparcia i staje się najsilniejszą partią. Co szczególnie sprzyjało wzrostowi jej popularności?",
    options: ["wielki kryzys i chaos polityczny", "pełna stabilizacja gospodarcza", "zakończenie propagandy", "przystąpienie Niemiec do Ligi Narodów", "dobrowolna demilitaryzacja Niemiec", "rozwiązanie SA"],
    answer: 0,
    image: "r04_hitler_plakat_1932.jpg",
    explanation: "Wielki kryzys, bezrobocie, chaos i niezdolność demokratycznych rządów do opanowania sytuacji zwiększały poparcie dla nazistów."
  },
  {
    id: "R04_RZE_05",
    section: "III Rzesza Hitlera",
    type: "true_false",
    prompt: "Hitler został kanclerzem 30 stycznia 1933 r.",
    options: null,
    answer: true,
    explanation: "Hitler został mianowany kanclerzem 30 stycznia 1933 r."
  },
  {
    id: "R04_RZE_06",
    section: "III Rzesza Hitlera",
    type: "sort",
    prompt: "Przyporządkuj elementy do sfer państwa nazistowskiego.",
    options: null,
    items: ["Gestapo", "Hitlerjugend", "zjazdy w Norymberdze", "Front Pracy", "Związek Niemieckich Dziewcząt"],
    categories: ["terror i kontrola", "młodzież", "propaganda"],
    answer: {
      "terror i kontrola": ["Gestapo", "Front Pracy"],
      "młodzież": ["Hitlerjugend", "Związek Niemieckich Dziewcząt"],
      "propaganda": ["zjazdy w Norymberdze"]
    },
    image: "r04_norymberga_zjazd.jpg",
    explanation: "Państwo nazistowskie kontrolowało społeczeństwo przez policję, organizacje pracy i młodzieży oraz masową propagandę."
  },
  {
    id: "R04_RZE_07",
    section: "III Rzesza Hitlera",
    type: "odd_one_out",
    prompt: "Co nie pasuje do nazistowskiego państwa totalitarnego: cenzura, terror, kult wodza, wolność prasy.",
    options: null,
    answer: "wolność prasy",
    explanation: "Naziści zlikwidowali swobody obywatelskie i niezależną prasę; państwo opierało się na terrorze, propagandzie i kulcie wodza."
  },
  {
    id: "R04_RZE_08",
    section: "III Rzesza Hitlera",
    type: "single_choice",
    prompt: "Co wprowadziły ustawy norymberskie z 1935 r.?",
    options: ["pozbawienie Żydów praw politycznych i obywatelskich", "przyjęcie Niemiec do Ligi Narodów", "legalizację wszystkich partii", "powszechne prawa wyborcze dla kobiet", "zakaz zbrojeń dla Japonii", "utworzenie Republiki Weimarskiej"],
    answer: 0,
    image: "r04_bojkot_zydow.jpg",
    explanation: "Ustawy norymberskie pozbawiły Żydów praw politycznych i obywatelskich oraz zakazały małżeństw mieszanych."
  },
  {
    id: "R04_RZE_09",
    section: "III Rzesza Hitlera",
    type: "riddle",
    prompt: "Ogólnokrajowy pogrom Żydów z listopada 1938 r. nazwano nocą...",
    options: null,
    answer: "kryształową",
    altAnswers: ["kryształową", "krysztalowa", "noc kryształowa", "Noc kryształowa"],
    image: "r04_bojkot_zydow.jpg",
    explanation: "Pogrom nazwano nocą kryształową od rozbitego szkła leżącego na ulicach po zniszczeniu sklepów, domów i synagog."
  },
  {
    id: "R04_RZE_10",
    section: "III Rzesza Hitlera",
    type: "multi_select",
    prompt: "Zaznacz działania wskazujące na remilitaryzację Niemiec za Hitlera.",
    options: ["intensywne zbrojenia", "rozbudowa sił zbrojnych", "wprowadzenie powszechnego obowiązku służby wojskowej w 1936 r.", "likwidacja produkcji militarnej", "dobrowolna rezygnacja z armii", "pełne przestrzeganie ograniczeń wersalskich"],
    answer: [0, 1, 2],
    explanation: "Hitler przestawił gospodarkę na produkcję militarną, rozbudował armię i w 1936 r. wprowadził powszechny obowiązek służby wojskowej."
  },
  {
    id: "R04_PRO_01",
    section: "Świat u progu wojny",
    type: "single_choice",
    prompt: "Jak nazwano system powstały na podstawie traktatów pokojowych po konferencji paryskiej?",
    options: ["system wersalski", "system mandatowy", "socrealizm", "korporacjonizm", "pacyfizm", "izolacjonizm"],
    answer: 0,
    explanation: "System polityczny oparty na powojennych traktatach pokojowych nazwano systemem wersalskim."
  },
  {
    id: "R04_PRO_02",
    section: "Świat u progu wojny",
    type: "match",
    prompt: "Połącz wydarzenie lub układ z jego skutkiem.",
    options: null,
    left: ["Rapallo", "Locarno", "pakt reński", "pakt antykominternowski"],
    right: ["współpraca Niemiec i Rosji Sowieckiej", "konferencja z 1925 r.", "gwarancja granic Niemiec z Francją i Belgią", "porozumienie przeciw Kominternowi"],
    answer: {
      "Rapallo": "współpraca Niemiec i Rosji Sowieckiej",
      "Locarno": "konferencja z 1925 r.",
      "pakt reński": "gwarancja granic Niemiec z Francją i Belgią",
      "pakt antykominternowski": "porozumienie przeciw Kominternowi"
    },
    explanation: "Układy z Rapallo i Locarno oraz pakt antykominternowski pokazują, jak zmieniał się system bezpieczeństwa w dwudziestoleciu."
  },
  {
    id: "R04_PRO_03",
    section: "Świat u progu wojny",
    type: "true_false",
    prompt: "Pakt reński gwarantował także granice Niemiec z Polską i Czechosłowacją.",
    options: null,
    answer: false,
    explanation: "Pakt reński gwarantował granice niemiecko-francuską i niemiecko-belgijską, ale nie gwarantował granic z Polską i Czechosłowacją."
  },
  {
    id: "R04_PRO_04",
    section: "Świat u progu wojny",
    type: "scenario",
    prompt: "Japonia jest pozbawiona surowców naturalnych i chce uniezależnić się od importu. W 1931 r. zajmuje bogatą w surowce część Chin. Jaki to obszar?",
    options: ["Mandżuria", "Nadrenia", "Kraj Sudecki", "Abisynia", "Albania", "Kłajpeda"],
    answer: 0,
    image: "r04_japonscy_zolnierze_chiny.jpg",
    explanation: "Japonia w 1931 r. zajęła Mandżurię, bogatą w surowce naturalne."
  },
  {
    id: "R04_PRO_05",
    section: "Świat u progu wojny",
    type: "fill_in",
    prompt: "W marcu 1936 r. armia niemiecka wkroczyła do __________.",
    options: null,
    answer: ["Nadrenii"],
    altAnswers: [["Nadrenii", "Nadrenia", "nadrenii"]],
    explanation: "Remilitaryzacja Nadrenii w marcu 1936 r. była jawnym pogwałceniem traktatu wersalskiego."
  },
  {
    id: "R04_PRO_06",
    section: "Świat u progu wojny",
    type: "multi_select",
    prompt: "Zaznacz strony lub siły zaangażowane w wojnę domową w Hiszpanii.",
    options: ["Front Ludowy", "Front Narodowy", "wojska generała Franco", "republikanie", "Królestwo SHS", "Liga Narodów jako armia interwencyjna"],
    answer: [0, 1, 2, 3],
    explanation: "W Hiszpanii rywalizowały obozy Frontu Ludowego i Frontu Narodowego; bunt armii prowadził Franco, a po drugiej stronie walczyli republikanie."
  },
  {
    id: "R04_PRO_07",
    section: "Świat u progu wojny",
    type: "odd_one_out",
    prompt: "Co nie pasuje do państw osi i ich sojuszy: Berlin, Rzym, Tokio, Genewa.",
    options: null,
    answer: "Genewa",
    explanation: "Oś tworzyły Berlin, Rzym i Tokio; Genewa była siedzibą Ligi Narodów."
  },
  {
    id: "R04_PRO_08",
    section: "Świat u progu wojny",
    type: "single_choice",
    prompt: "Jak nazwano przyłączenie Austrii do III Rzeszy w 1938 r.?",
    options: ["Anschluss", "pakt reński", "remilitaryzacja", "kolektywizacja", "socrealizm", "izolacjonizm"],
    answer: 0,
    image: "r04_anschluss_austrii.jpg",
    explanation: "Zajęcie Austrii przez Niemcy w marcu 1938 r. nazwano Anschlussem."
  },
  {
    id: "R04_PRO_09",
    section: "Świat u progu wojny",
    type: "single_choice",
    prompt: "Którego państwa nie zaproszono do rozmów na konferencji monachijskiej, choć dotyczyły rozbioru jego terytorium?",
    options: ["Czechosłowacji", "Wielkiej Brytanii", "Francji", "Włoch", "Niemiec", "Japonii"],
    answer: 0,
    image: "r04_konferencja_monachijska.jpg",
    explanation: "W Monachium decyzje podejmowały Francja, Wielka Brytania, Włochy i Niemcy; Czechosłowacji nie zaproszono do rozmów."
  },
  {
    id: "R04_PRO_10",
    section: "Świat u progu wojny",
    type: "sequence",
    prompt: "Ułóż wydarzenia w kolejności chronologicznej.",
    options: null,
    items: ["układ monachijski", "remilitaryzacja Nadrenii", "Anschluss Austrii", "zajęcie Mandżurii przez Japonię"],
    answer: ["zajęcie Mandżurii przez Japonię", "remilitaryzacja Nadrenii", "Anschluss Austrii", "układ monachijski"],
    explanation: "Japonia zajęła Mandżurię w 1931 r., remilitaryzacja Nadrenii nastąpiła w 1936 r., Anschluss w marcu 1938 r., a układ monachijski we wrześniu 1938 r."
  },
  {
    id: "R04_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które państwa zostały stałymi członkami Rady Ligi Narodów tuż po jej utworzeniu?",
    options: ["Wielka Brytania, Francja, Włochy i Japonia", "Stany Zjednoczone, Polska, Francja i Japonia", "Niemcy, Związek Sowiecki, Włochy i Japonia", "Polska, Czechosłowacja, Rumunia i Grecja", "Francja, Belgia, Polska i Czechosłowacja", "Wielka Brytania, Dania, Austria i Węgry"],
    answer: 0,
    image: "r04_liga_narodow.jpg",
    explanation: "Stałymi członkami Rady Ligi Narodów były początkowo Wielka Brytania, Francja, Włochy i Japonia; Niemcy i ZSRS dołączyły później."
  },
  {
    id: "R04_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz państwa zmuszone do podpisania traktatu mniejszościowego.",
    options: ["Polska", "Czechosłowacja", "Rumunia", "Grecja", "Królestwo Serbów, Chorwatów i Słoweńców", "Niemcy"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Do podpisania traktatu mniejszościowego zmuszono Polskę, Czechosłowację, Rumunię, Grecję i Królestwo Serbów, Chorwatów i Słoweńców; Niemcy nie musiały go ratyfikować."
  },
  {
    id: "R04_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Zagłębie Saary przekazano pod zarząd Ligi Narodów na __________ lat.",
    options: null,
    answer: ["15"],
    altAnswers: [["15", "piętnaście", "pietnascie"]],
    explanation: "Zagłębie Saary zostało przekazane pod zarząd Ligi Narodów na piętnaście lat."
  },
  {
    id: "R04_HARD_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kto wydał rozkaz samozatopienia niemieckiej floty w Scapa Flow?",
    options: ["admirał Reuter", "Wilhelm II", "Georges Clemenceau", "David Lloyd George", "Thomas Woodrow Wilson", "Vittorio Orlando"],
    answer: 0,
    image: "r04_scapa_flow_flota.jpg",
    explanation: "Rozkaz samozatopienia okrętów w Scapa Flow wydał niemiecki dowódca, admirał Reuter."
  },
  {
    id: "R04_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "Francja osiągnęła poziom produkcji przemysłowej sprzed wojny już w 1924 r.",
    options: null,
    answer: true,
    explanation: "Dzięki reparacjom i nadzwyczajnemu wysiłkowi Francja osiągnęła poziom produkcji przemysłowej sprzed wojny w 1924 r."
  },
  {
    id: "R04_HARD_06",
    section: "Super trudne",
    type: "riddle",
    prompt: "Amerykański trębacz, śpiewak i kompozytor nazwany królem jazzu to...",
    options: null,
    answer: "Louis Armstrong",
    altAnswers: ["Louis Armstrong", "Armstrong"],
    explanation: "Louis Armstrong był nazywany królem jazzu."
  },
  {
    id: "R04_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Przy budowie którego kanału w latach 1930-1933 pracowali głównie więźniowie polityczni osadzeni w łagrach?",
    options: ["Kanału Białomorskiego", "Kanału Sueskiego", "Kanału Panamskiego", "Kanału Kilońskiego", "Kanału La Manche", "Kanału Augustowskiego"],
    answer: 0,
    explanation: "Kanał Białomorski budowano w latach 1930-1933, wykorzystując przede wszystkim pracę więźniów politycznych z łagrów."
  },
  {
    id: "R04_HARD_08",
    section: "Super trudne",
    type: "true_false",
    prompt: "Konstytucja ZSRS z grudnia 1936 r. formalnie przyznawała obywatelom liczne prawa, ale zapisy te pozostawały martwą literą.",
    options: null,
    answer: true,
    explanation: "Konstytucja wymieniała prawa obywatelskie, lecz w państwie totalitarnym nie były one realnie przestrzegane."
  },
  {
    id: "R04_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Co nie pasuje do sowieckiego socrealizmu: partyjność, ludowość, monumentalizm, swoboda niezależnej krytyki.",
    options: null,
    answer: "swoboda niezależnej krytyki",
    explanation: "Socrealizm był podporządkowany ideologii i kontroli państwa, a nie swobodzie niezależnej krytyki."
  },
  {
    id: "R04_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jak nazywała się hiszpańska partia faszystowska wspomniana przy wojnie domowej?",
    options: ["Falanga", "Front Ludowy", "Front Narodowy", "NSDAP", "WKP(b)", "Komsomoł"],
    answer: 0,
    explanation: "W Hiszpanii działała partia faszystowska o nazwie Falanga."
  },
  {
    id: "R04_HARD_11",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Po zajęciu Czech przez Niemcy utworzono Protektorat Czech i __________.",
    options: null,
    answer: ["Moraw"],
    altAnswers: [["Moraw", "moraw"]],
    explanation: "Resztki państwa czeskiego zostały przekształcone w Protektorat Czech i Moraw."
  },
  {
    id: "R04_HARD_12",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Co nie pasuje do ostatnich pokojowych aneksji z 1939 r.: Słowacja ogłosiła niepodległość, Protektorat Czech i Moraw, oddanie Kłajpedy Niemcom, remilitaryzacja Nadrenii.",
    options: null,
    answer: "remilitaryzacja Nadrenii",
    explanation: "Remilitaryzacja Nadrenii nastąpiła w 1936 r.; pozostałe wydarzenia dotyczą rozpadu Czechosłowacji i nacisków Niemiec w 1939 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Europa i świat po I wojnie światowej",
  icon: "🌍",
  sectionOrder: [
    "Konferencja pokojowa i traktat wersalski",
    "Skutki wielkiej wojny",
    "Związek Sowiecki Stalina",
    "Faszyzm we Włoszech",
    "III Rzesza Hitlera",
    "Świat u progu wojny"
  ],
  sectionIcons: {
    "Konferencja pokojowa i traktat wersalski": "🕊️",
    "Skutki wielkiej wojny": "🏚️",
    "Związek Sowiecki Stalina": "🏭",
    "Faszyzm we Włoszech": "⚜️",
    "III Rzesza Hitlera": "⚠️",
    "Świat u progu wojny": "🌐"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
