// Skróty sekcji (do identyfikatorów ćwiczeń):
//   LAW  = Ład wersalski i Liga Narodów
//   RAP  = Rapallo, Locarno i wielki kryzys
//   NAZ  = Republika Weimarska i nazizm
//   RZE  = Trzecia Rzesza i prześladowania
//   ZSR  = Komunizm i stalinizm w ZSRR
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R04_LAW_01",
    section: "Ład wersalski i Liga Narodów",
    type: "single_choice",
    prompt: "Gdzie podpisano najważniejszy traktat pokojowy z Niemcami po I wojnie światowej?",
    options: ["W Wersalu", "W Rapallo", "W Locarno", "W Berlinie", "W Genewie", "W Rydze"],
    answer: 0,
    image: "r04_traktat_wersalski_sala_lustrzana.jpg",
    explanation: "Najważniejszy traktat z Niemcami podpisano w czerwcu 1919 r. w Wersalu, dlatego nazwano go traktatem wersalskim."
  },
  {
    id: "R04_LAW_02",
    section: "Ład wersalski i Liga Narodów",
    type: "multi_select",
    prompt: "Zaznacz postanowienia traktatu wersalskiego wobec Niemiec.",
    options: ["Utrata 13% terytorium", "Demilitaryzacja Nadrenii", "Zwiększenie armii do miliona żołnierzy", "Zapłacenie reparacji", "Przyznanie się do winy za wybuch wojny", "Przystąpienie do Ligi Narodów jako założyciel"],
    answer: [0, 1, 3, 4],
    image: "r04_traktat_wersalski_sala_lustrzana.jpg",
    explanation: "Traktat wersalski ograniczał Niemcy terytorialnie, wojskowo i finansowo; Niemcy musiały też uznać winę za wybuch wojny."
  },
  {
    id: "R04_LAW_03",
    section: "Ład wersalski i Liga Narodów",
    type: "true_false",
    prompt: "Wielka Brytania sprzeciwiała się zbytniemu osłabieniu Niemiec po I wojnie światowej.",
    options: null,
    answer: true,
    explanation: "Brytyjscy politycy obawiali się nadmiernego wzmocnienia Francji i zachwiania równowagi sił w Europie."
  },
  {
    id: "R04_LAW_04",
    section: "Ład wersalski i Liga Narodów",
    type: "fill_in",
    prompt: "Na mocy traktatu wersalskiego Niemcy miały ograniczyć armię do __________ żołnierzy.",
    options: null,
    answer: ["100 tysięcy"],
    altAnswers: [["100 tysięcy", "100 tys.", "stu tysięcy"]],
    explanation: "Jednym z ograniczeń wojskowych było zmniejszenie armii niemieckiej do 100 tysięcy żołnierzy."
  },
  {
    id: "R04_LAW_05",
    section: "Ład wersalski i Liga Narodów",
    type: "riddle",
    prompt: "Jak nazywano obszar pozbawiony wojska?",
    options: null,
    answer: "obszar zdemilitaryzowany",
    altAnswers: ["obszar zdemilitaryzowany", "zdemilitaryzowany", "strefa zdemilitaryzowana"],
    explanation: "Uprzemysłowiona Nadrenia została uznana za obszar zdemilitaryzowany, czyli pozbawiony wojska."
  },
  {
    id: "R04_LAW_06",
    section: "Ład wersalski i Liga Narodów",
    type: "single_choice",
    prompt: "Jaki był główny cel Ligi Narodów?",
    options: ["Utrzymanie pokoju i popieranie współpracy", "Odbudowa kolonii niemieckich", "Wprowadzenie jednej waluty w Europie", "Zastąpienie parlamentów narodowych", "Wzmocnienie armii niemieckiej", "Podział Rosji Radzieckiej"],
    answer: 0,
    image: "r04_liga_narodow_genewa.jpg",
    explanation: "Liga Narodów miała utrzymywać pokój na świecie i wspierać współpracę między państwami."
  },
  {
    id: "R04_LAW_07",
    section: "Ład wersalski i Liga Narodów",
    type: "match",
    prompt: "Połącz państwo z jego powojennym interesem lub postawą.",
    options: null,
    left: ["Francja", "Wielka Brytania", "Stany Zjednoczone"],
    right: ["osłabić Niemcy", "nie osłabiać Niemiec zbyt mocno", "nie angażować się w sprawy Europy"],
    answer: {
      "Francja": "osłabić Niemcy",
      "Wielka Brytania": "nie osłabiać Niemiec zbyt mocno",
      "Stany Zjednoczone": "nie angażować się w sprawy Europy"
    },
    explanation: "Zwycięskie mocarstwa miały sprzeczne interesy: Francja chciała bezpieczeństwa kosztem Niemiec, Wielka Brytania dbała o równowagę sił, a USA skłaniały się ku izolacjonizmowi."
  },
  {
    id: "R04_LAW_08",
    section: "Ład wersalski i Liga Narodów",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do postanowień traktatu wersalskiego wobec Niemiec: reparacje, demilitaryzacja Nadrenii, utrata kolonii, zwiększenie armii.",
    options: null,
    answer: "zwiększenie armii",
    explanation: "Traktat wersalski ograniczał armię niemiecką, a nie ją zwiększał."
  },
  {
    id: "R04_LAW_09",
    section: "Ład wersalski i Liga Narodów",
    type: "multi_select",
    prompt: "Zaznacz słabości Ligi Narodów.",
    options: ["Brak własnych sił zbrojnych", "Nieprzystąpienie Stanów Zjednoczonych", "Opuszczenie jej przez Japonię, Niemcy i Włochy", "Zakaz pośredniczenia w sporach", "Brak celu utrzymania pokoju"],
    answer: [0, 1, 2],
    image: "r04_liga_narodow_genewa.jpg",
    explanation: "Liga miała pokojowe cele, ale była słaba, bo nie dysponowała siłą wojskową, nie miała USA wśród członków i traciła ważne państwa."
  },
  {
    id: "R04_LAW_10",
    section: "Ład wersalski i Liga Narodów",
    type: "sort",
    prompt: "Przyporządkuj skutki i cechy do ładu wersalskiego albo Ligi Narodów.",
    options: null,
    items: ["uznanie niepodległości Polski", "utrzymanie pokoju jako cel", "reparacje dla Niemiec", "pośredniczenie w sporach"],
    categories: ["ład wersalski", "Liga Narodów"],
    answer: {
      "ład wersalski": ["uznanie niepodległości Polski", "reparacje dla Niemiec"],
      "Liga Narodów": ["utrzymanie pokoju jako cel", "pośredniczenie w sporach"]
    },
    explanation: "Traktaty pokojowe tworzyły powojenny porządek, a Liga Narodów miała pilnować pokoju i rozwiązywać spory."
  },
  {
    id: "R04_LAW_11",
    section: "Ład wersalski i Liga Narodów",
    type: "scenario",
    prompt: "Jesteś niemieckim politykiem po 1919 r. Mówisz, że państwo zostało zmuszone do reparacji, ograniczeń wojskowych i uznania winy za wojnę. Jakim określeniem najpewniej nazwiesz traktat wersalski?",
    options: ["dyktat wersalski", "pakt bezpieczeństwa", "układ zbiorowy", "pokój bez zwycięstwa", "plan pięcioletni", "Nowa Polityka Ekonomiczna"],
    answer: 0,
    explanation: "W Niemczech traktat wersalski budził oburzenie i był nazywany dyktatem wersalskim."
  },
  {
    id: "R04_RAP_01",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "single_choice",
    prompt: "Które państwa podpisały układ w Rapallo w 1922 r.?",
    options: ["Niemcy i Rosja Radziecka", "Francja i Belgia", "Polska i Czechosłowacja", "USA i Wielka Brytania", "Włochy i Japonia", "Niemcy i Francja"],
    answer: 0,
    image: "r04_makiety_czolgow_niemcy.jpg",
    explanation: "Układ w Rapallo podpisały Niemcy i Rosja Radziecka, czyli państwa izolowane po wojnie."
  },
  {
    id: "R04_RAP_02",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "multi_select",
    prompt: "Zaznacz skutki układu w Rapallo.",
    options: ["Rezygnacja z wzajemnych odszkodowań", "Tajna współpraca wojskowa", "Pełne gwarancje granic Polski", "Wyjście Niemiec i Rosji z izolacji", "Zakaz testowania broni w ZSRR"],
    answer: [0, 1, 3],
    image: "r04_makiety_czolgow_niemcy.jpg",
    explanation: "Rapallo oznaczało rezygnację z odszkodowań, tajną współpracę wojskową i wzmocnienie międzynarodowej pozycji obu państw."
  },
  {
    id: "R04_RAP_03",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "true_false",
    prompt: "Układ w Rapallo był szczególnie niepokojący dla Polski.",
    options: null,
    answer: true,
    explanation: "Niemcy i Rosja Radziecka pokazały, że mogą wspólnie dążyć do obalenia ładu wersalskiego, co zagrażało przede wszystkim Polsce."
  },
  {
    id: "R04_RAP_04",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "single_choice",
    prompt: "Co zaakceptowały Niemcy w układzie w Locarno?",
    options: ["Powojenną granicę na zachodzie", "Granice Polski i Czechosłowacji", "Zakaz prowadzenia dyplomacji", "Wstąpienie USA do Ligi Narodów", "Zniesienie reparacji", "Rozpad Republiki Weimarskiej"],
    answer: 0,
    image: "r04_delegacja_locarno.jpg",
    explanation: "W Locarno Niemcy zaakceptowały granicę zachodnią, natomiast Polska i Czechosłowacja nie uzyskały gwarancji granic."
  },
  {
    id: "R04_RAP_05",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "fill_in",
    prompt: "W 1923 r. Francuzi zajęli Zagłębie __________, aby wymusić na Niemcach spłatę reparacji.",
    options: null,
    answer: ["Ruhry"],
    altAnswers: [["Ruhry", "Ruhr"]],
    explanation: "Francja zajęła przemysłowe Zagłębie Ruhry, aby wymusić spłatę reparacji wojennych."
  },
  {
    id: "R04_RAP_06",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Układ w Locarno", "Krach na nowojorskiej giełdzie", "Układ w Rapallo", "Rozpoczęcie działalności Ligi Narodów"],
    answer: ["Rozpoczęcie działalności Ligi Narodów", "Układ w Rapallo", "Układ w Locarno", "Krach na nowojorskiej giełdzie"],
    explanation: "Liga Narodów rozpoczęła działalność w 1920 r., Rapallo podpisano w 1922 r., Locarno w 1925 r., a krach nastąpił w 1929 r."
  },
  {
    id: "R04_RAP_07",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "riddle",
    prompt: "Jak nazywa się nagłe załamanie gospodarcze, od którego rozpoczął się wielki kryzys?",
    options: null,
    answer: "krach",
    altAnswers: ["krach", "krach giełdowy", "załamanie ekonomiczne"],
    image: "r04_krach_wall_street.jpg",
    explanation: "Wielki kryzys rozpoczął się od krachu na nowojorskiej giełdzie w październiku 1929 r."
  },
  {
    id: "R04_RAP_08",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "single_choice",
    prompt: "Co było bezpośrednią przyczyną wielkiego kryzysu?",
    options: ["Nadprodukcja towarów przemysłowych", "Brak traktatu wersalskiego", "Rozpad Ligi Narodów w 1920 r.", "Kolektywizacja rolnictwa w Niemczech", "Zakończenie NEP-u w USA", "Powstanie ONZ"],
    answer: 0,
    explanation: "Fabryki produkowały coraz więcej towarów, aż nadprodukcja stała się bezpośrednią przyczyną wielkiego kryzysu."
  },
  {
    id: "R04_RAP_09",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "match",
    prompt: "Połącz zjawisko ze skutkiem wielkiego kryzysu.",
    options: null,
    left: ["handel międzynarodowy", "produkcja przemysłowa", "bezrobocie i ubóstwo"],
    right: ["osłabł", "spadła", "gwałtownie wzrosły"],
    answer: {
      "handel międzynarodowy": "osłabł",
      "produkcja przemysłowa": "spadła",
      "bezrobocie i ubóstwo": "gwałtownie wzrosły"
    },
    image: "r04_krach_wall_street.jpg",
    explanation: "Kryzys uderzył w handel, produkcję i poziom życia, zwłaszcza w Niemczech."
  },
  {
    id: "R04_RAP_10",
    section: "Rapallo, Locarno i wielki kryzys",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do skutków wielkiego kryzysu: spadek produkcji, wzrost bezrobocia, osłabienie handlu, pełne zatrudnienie.",
    options: null,
    answer: "pełne zatrudnienie",
    explanation: "Wielki kryzys przyniósł gwałtowny wzrost bezrobocia, a nie pełne zatrudnienie."
  },
  {
    id: "R04_NAZ_01",
    section: "Republika Weimarska i nazizm",
    type: "single_choice",
    prompt: "Jak nazwano demokratyczne Niemcy istniejące po I wojnie światowej?",
    options: ["Republika Weimarska", "Trzecia Rzesza", "Związek Radziecki", "Liga Narodów", "Republika Rad", "Państwo Rapallo"],
    answer: 0,
    explanation: "Konstytucję demokratycznych Niemiec uchwalono w Weimarze, stąd nazwa Republika Weimarska."
  },
  {
    id: "R04_NAZ_02",
    section: "Republika Weimarska i nazizm",
    type: "fill_in",
    prompt: "W listopadzie 1923 r. bochenek chleba w Niemczech kosztował __________ marek.",
    options: null,
    answer: ["201 miliardów"],
    altAnswers: [["201 miliardów", "201 mld", "201 miliardow"]],
    image: "r04_hiperinflacja_niemcy.jpg",
    explanation: "Hiperinflacja sprawiła, że niemiecka marka traciła wartość w błyskawicznym tempie."
  },
  {
    id: "R04_NAZ_03",
    section: "Republika Weimarska i nazizm",
    type: "true_false",
    prompt: "Hiperinflacja w Niemczech była skutkiem drukowania ogromnych ilości banknotów przez rząd.",
    options: null,
    answer: true,
    image: "r04_hiperinflacja_niemcy.jpg",
    explanation: "Rząd próbował ratować finanse drukiem pieniędzy, co doprowadziło do gwałtownego spadku wartości marki."
  },
  {
    id: "R04_NAZ_04",
    section: "Republika Weimarska i nazizm",
    type: "riddle",
    prompt: "Jak nazwano nieudaną próbę przejęcia władzy przez Hitlera w Monachium w 1923 r.?",
    options: null,
    answer: "pucz monachijski",
    altAnswers: ["pucz monachijski", "pucz w Monachium"],
    explanation: "W listopadzie 1923 r. Hitler próbował siłą przejąć władzę w Monachium, ale pucz zakończył się klęską."
  },
  {
    id: "R04_NAZ_05",
    section: "Republika Weimarska i nazizm",
    type: "multi_select",
    prompt: "Zaznacz elementy ideologii narodowego socjalizmu.",
    options: ["Skrajny nacjonalizm", "Rasizm", "Antysemityzm", "Wrogość do ekspansji", "Kult równości wszystkich narodów", "Treści socjalistyczne atrakcyjne dla mas"],
    answer: [0, 1, 2, 5],
    explanation: "Nazizm łączył skrajny nacjonalizm z hasłami socjalnymi, a ważnymi elementami były rasizm i antysemityzm."
  },
  {
    id: "R04_NAZ_06",
    section: "Republika Weimarska i nazizm",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do haseł Hitlera: przestrzeń życiowa na wschodzie, zniszczenie komunizmu, prawa obywatelskie dla Żydów, praca i chleb.",
    options: null,
    answer: "prawa obywatelskie dla Żydów",
    explanation: "Hitler głosił antysemityzm i zapowiadał pozbawienie Żydów praw obywatelskich."
  },
  {
    id: "R04_NAZ_07",
    section: "Republika Weimarska i nazizm",
    type: "single_choice",
    prompt: "Jaki wynik uzyskała NSDAP w wyborach w 1932 r.?",
    options: ["37% głosów", "2,6% głosów", "Ponad 80% głosów", "13% głosów", "100 tysięcy głosów", "201 miliardów głosów"],
    answer: 0,
    explanation: "W 1932 r. naziści zdobyli 37% głosów i stali się największą partią w Reichstagu."
  },
  {
    id: "R04_NAZ_08",
    section: "Republika Weimarska i nazizm",
    type: "scenario",
    prompt: "Luty 1933 r. Płonie budynek niemieckiego parlamentu, a naziści natychmiast oskarżają komunistów i ogłaszają zarządzenie nadzwyczajne. Jaki budynek spłonął?",
    options: ["Reichstag", "Kreml", "Sala Lustrzana", "Pałac wersalski", "Siedziba Ligi Narodów", "Zamek w Locarno"],
    answer: 0,
    image: "r04_pozar_reichstagu.jpg",
    explanation: "Pożar Reichstagu posłużył Hitlerowi do uderzenia w przeciwników politycznych."
  },
  {
    id: "R04_NAZ_09",
    section: "Republika Weimarska i nazizm",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z dojściem Hitlera do władzy w porządku chronologicznym.",
    options: null,
    items: ["Hitler ogłasza się Führerem", "Pożar Reichstagu", "NSDAP zdobywa 37% głosów", "Hitler zostaje kanclerzem"],
    answer: ["NSDAP zdobywa 37% głosów", "Hitler zostaje kanclerzem", "Pożar Reichstagu", "Hitler ogłasza się Führerem"],
    image: "r04_pozar_reichstagu.jpg",
    explanation: "Najpierw NSDAP odniosła sukces wyborczy w 1932 r., potem Hitler został kanclerzem, wykorzystał pożar Reichstagu i w 1934 r. ogłosił się Führerem."
  },
  {
    id: "R04_NAZ_10",
    section: "Republika Weimarska i nazizm",
    type: "match",
    prompt: "Połącz pojęcie z wyjaśnieniem.",
    options: null,
    left: ["pucz", "ideologia", "Führer"],
    right: ["próba przejęcia władzy siłą", "zbiór poglądów i idei", "wódz"],
    answer: {
      "pucz": "próba przejęcia władzy siłą",
      "ideologia": "zbiór poglądów i idei",
      "Führer": "wódz"
    },
    explanation: "Te pojęcia pomagają opisać drogę Hitlera od puczu do dyktatury wodza."
  },
  {
    id: "R04_NAZ_11",
    section: "Republika Weimarska i nazizm",
    type: "true_false",
    prompt: "Hitler zniszczył niemiecką demokrację, choć ani razu nie złamał konstytucji.",
    options: null,
    answer: true,
    explanation: "Hitler wykorzystywał legalne procedury, aby doprowadzić do ustanowienia dyktatury."
  },
  {
    id: "R04_RZE_01",
    section: "Trzecia Rzesza i prześladowania",
    type: "single_choice",
    prompt: "Jak nazywano państwo niemieckie po przejęciu pełni władzy przez nazistów?",
    options: ["Trzecia Rzesza", "Republika Weimarska", "Republika Rad", "Związek Radziecki", "Liga Narodów", "Rzesza Locarneńska"],
    answer: 0,
    explanation: "Po rozbiciu demokracji państwo niemieckie nazywano Trzecią Rzeszą."
  },
  {
    id: "R04_RZE_02",
    section: "Trzecia Rzesza i prześladowania",
    type: "multi_select",
    prompt: "Zaznacz cechy państwa totalitarnego charakterystyczne dla Trzeciej Rzeszy.",
    options: ["Oficjalna ideologia państwowa", "Władza jednej partii", "Kult nieomylnego wodza", "Pełna swoboda niezależnej prasy", "Terror wobec przeciwników", "Rezygnacja z propagandy"],
    answer: [0, 1, 2, 4],
    explanation: "Państwo totalitarne narzuca ideologię, skupia władzę w jednej partii, buduje kult wodza i używa terroru."
  },
  {
    id: "R04_RZE_03",
    section: "Trzecia Rzesza i prześladowania",
    type: "sort",
    prompt: "Przyporządkuj narzędzia kontroli do propagandy albo terroru.",
    options: null,
    items: ["radio", "prasa", "gestapo", "SA", "SS"],
    categories: ["propaganda", "terror"],
    answer: {
      "propaganda": ["radio", "prasa"],
      "terror": ["gestapo", "SA", "SS"]
    },
    explanation: "Radio i prasa służyły propagandzie, a gestapo oraz oddziały SA i SS były narzędziami terroru."
  },
  {
    id: "R04_RZE_04",
    section: "Trzecia Rzesza i prześladowania",
    type: "riddle",
    prompt: "Jak nazywała się organizacja, do której należeli prawie wszyscy chłopcy w wieku 10-18 lat w Trzeciej Rzeszy?",
    options: null,
    answer: "Hitlerjugend",
    altAnswers: ["Hitlerjugend", "młodzież Hitlera"],
    image: "r04_hitlerjugend_zajecia.jpg",
    explanation: "Hitlerjugend wpajała chłopcom nazistowską ideologię i prowadziła zajęcia wojskowe."
  },
  {
    id: "R04_RZE_05",
    section: "Trzecia Rzesza i prześladowania",
    type: "scenario",
    prompt: "Jesteś niemieckim chłopcem w wieku 14 lat w Trzeciej Rzeszy. Trafiasz do organizacji, gdzie odbywasz zajęcia wojskowe i słyszysz nazistowską propagandę. Jak nazywa się ta organizacja?",
    options: ["Hitlerjugend", "Czeka", "NKWD", "Liga Narodów", "Reichstag", "Kołchoz"],
    answer: 0,
    image: "r04_hitlerjugend_zajecia.jpg",
    explanation: "Hitlerjugend była masową organizacją młodzieżową podporządkowaną nazistowskiemu państwu."
  },
  {
    id: "R04_RZE_06",
    section: "Trzecia Rzesza i prześladowania",
    type: "true_false",
    prompt: "Naziści szybko ograniczyli bezrobocie dzięki inwestycjom publicznym, w tym budowie autostrad i zakładów zbrojeniowych.",
    options: null,
    answer: true,
    explanation: "Poparcie wielu Niemców wynikało m.in. z poprawy sytuacji rodzin i tworzenia miejsc pracy."
  },
  {
    id: "R04_RZE_07",
    section: "Trzecia Rzesza i prześladowania",
    type: "fill_in",
    prompt: "Ustawy __________ z 1935 r. zakazały małżeństw niemiecko-żydowskich i pozbawiły Żydów obywatelstwa.",
    options: null,
    answer: ["norymberskie"],
    altAnswers: [["norymberskie", "norymberskie ustawy"]],
    image: "r04_noc_krysztalowa_sklep.jpg",
    explanation: "Ustawy norymberskie były jednym z najważniejszych kroków w realizacji rasistowskiej polityki nazistów."
  },
  {
    id: "R04_RZE_08",
    section: "Trzecia Rzesza i prześladowania",
    type: "single_choice",
    prompt: "Jak nazwano pogrom Żydów zorganizowany przez nazistów w 1938 r.?",
    options: ["noc kryształowa", "wielka czystka", "czerwony terror", "pucz monachijski", "czarny czwartek", "komunizm wojenny"],
    answer: 0,
    image: "r04_noc_krysztalowa_sklep.jpg",
    explanation: "Pogrom listopadowy nazwano nocą kryształową od tłuczonych szyb w żydowskich mieszkaniach i sklepach."
  },
  {
    id: "R04_RZE_09",
    section: "Trzecia Rzesza i prześladowania",
    type: "match",
    prompt: "Połącz grupę z działaniem nazistów.",
    options: null,
    left: ["Żydzi", "Romowie", "komuniści i socjaldemokraci"],
    right: ["pozbawienie obywatelstwa i prześladowania", "pozbawienie obywatelstwa i obozy", "zamykanie w obozach po pożarze Reichstagu"],
    answer: {
      "Żydzi": "pozbawienie obywatelstwa i prześladowania",
      "Romowie": "pozbawienie obywatelstwa i obozy",
      "komuniści i socjaldemokraci": "zamykanie w obozach po pożarze Reichstagu"
    },
    explanation: "Nazistowski terror uderzał w wiele grup, ale polityka wobec Żydów i Romów wynikała szczególnie z rasizmu."
  },
  {
    id: "R04_RZE_10",
    section: "Trzecia Rzesza i prześladowania",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do polityki Trzeciej Rzeszy: propaganda, cenzura, terror, wolność wszystkich partii.",
    options: null,
    answer: "wolność wszystkich partii",
    explanation: "W Trzeciej Rzeszy rozwiązano wszystkie partie poza NSDAP."
  },
  {
    id: "R04_ZSR_01",
    section: "Komunizm i stalinizm w ZSRR",
    type: "single_choice",
    prompt: "Jak nazywała się armia utworzona przez bolszewików w początkach 1918 r.?",
    options: ["Armia Czerwona", "Czeka", "NKWD", "Biali", "SA", "SS"],
    answer: 0,
    explanation: "Bolszewicy utworzyli Armię Czerwoną, która zdobyła przewagę w wojnie domowej."
  },
  {
    id: "R04_ZSR_02",
    section: "Komunizm i stalinizm w ZSRR",
    type: "multi_select",
    prompt: "Zaznacz przeciwników bolszewików w wojnie domowej w Rosji.",
    options: ["Biali", "Narody walczące o niepodległość", "Zagraniczne oddziały interwencyjne", "Zbuntowani chłopi", "NSDAP", "Liga Narodów"],
    answer: [0, 1, 2, 3],
    image: "r04_lagier_praca_wiezniow.jpg",
    explanation: "Przeciw bolszewikom występowali dawni carscy generałowie, narody podbite przez carat, interwenci zagraniczni oraz część chłopów."
  },
  {
    id: "R04_ZSR_03",
    section: "Komunizm i stalinizm w ZSRR",
    type: "riddle",
    prompt: "Jak potocznie nazywała się bolszewicka policja polityczna stosująca czerwony terror?",
    options: null,
    answer: "Czeka",
    altAnswers: ["Czeka", "czeka"],
    explanation: "Czeka przeprowadzała masowe egzekucje i tworzyła łagry."
  },
  {
    id: "R04_ZSR_04",
    section: "Komunizm i stalinizm w ZSRR",
    type: "true_false",
    prompt: "Na rozkaz Lenina rozstrzelano cara Mikołaja II wraz z rodziną.",
    options: null,
    answer: true,
    explanation: "W lipcu 1918 r. car Mikołaj II, jego żona i dzieci zostali rozstrzelani na rozkaz Lenina."
  },
  {
    id: "R04_ZSR_05",
    section: "Komunizm i stalinizm w ZSRR",
    type: "sort",
    prompt: "Przyporządkuj elementy do komunizmu wojennego albo NEP-u.",
    options: null,
    items: ["zakaz prywatnego handlu", "wolny handel", "nacjonalizacja sklepów", "podatek od chłopów", "niewielkie przedsiębiorstwa prywatne"],
    categories: ["komunizm wojenny", "NEP"],
    answer: {
      "komunizm wojenny": ["zakaz prywatnego handlu", "nacjonalizacja sklepów"],
      "NEP": ["wolny handel", "podatek od chłopów", "niewielkie przedsiębiorstwa prywatne"]
    },
    explanation: "Komunizm wojenny podporządkowywał gospodarkę państwu, a NEP dopuścił ograniczoną prywatną działalność i wolny handel."
  },
  {
    id: "R04_ZSR_06",
    section: "Komunizm i stalinizm w ZSRR",
    type: "fill_in",
    prompt: "Nowa Polityka Ekonomiczna, czyli __________, została wprowadzona przez Lenina w 1921 r.",
    options: null,
    answer: ["NEP"],
    altAnswers: [["NEP", "Nep", "Nowa Polityka Ekonomiczna"]],
    explanation: "NEP uratował radziecką gospodarkę po klęsce komunizmu wojennego."
  },
  {
    id: "R04_ZSR_07",
    section: "Komunizm i stalinizm w ZSRR",
    type: "single_choice",
    prompt: "Na czym polegała kolektywizacja rolnictwa w ZSRR?",
    options: ["Odbierano chłopom ziemię i tworzono kołchozy", "Oddawano całą ziemię prywatnym właścicielom", "Znoszono obowiązkowe dostawy zboża", "Zakazywano przemysłu ciężkiego", "Przenoszono władzę do Weimaru", "Tworzono Ligę Narodów"],
    answer: 0,
    image: "r04_kolektywizacja_kolchoz.jpg",
    explanation: "Kolektywizacja oznaczała odebranie ziemi chłopom i podporządkowanie rolnictwa państwowym gospodarstwom spółdzielczym."
  },
  {
    id: "R04_ZSR_08",
    section: "Komunizm i stalinizm w ZSRR",
    type: "scenario",
    prompt: "Jesteś chłopem w ZSRR w 1929 r. Władze odbierają ci ziemię i włączają ją do państwowego gospodarstwa spółdzielczego. Jak nazywa się takie gospodarstwo?",
    options: ["kołchoz", "Reichstag", "łagier", "Liga Narodów", "SA", "gestapo"],
    answer: 0,
    image: "r04_kolektywizacja_kolchoz.jpg",
    explanation: "Kołchozy powstawały w wyniku przymusowej kolektywizacji rolnictwa."
  },
  {
    id: "R04_ZSR_09",
    section: "Komunizm i stalinizm w ZSRR",
    type: "single_choice",
    prompt: "Co było skutkiem centralnego planowania i nacisku na przemysł ciężki w ZSRR?",
    options: ["Braki artykułów codziennego użytku", "Pełne sklepy z mydłem, butami i masłem", "Rezygnacja z przemysłu zbrojeniowego", "Wzrost prywatnego handlu", "Wstąpienie ZSRR do Locarno", "Zakończenie kultu jednostki"],
    answer: 0,
    explanation: "Władze rozwijały przemysł ciężki i zbrojeniowy, dlatego brakowało podstawowych artykułów codziennego użytku."
  },
  {
    id: "R04_ZSR_10",
    section: "Komunizm i stalinizm w ZSRR",
    type: "match",
    prompt: "Połącz pojęcie z wyjaśnieniem.",
    options: null,
    left: ["łagier", "kult jednostki", "NKWD"],
    right: ["obóz pracy przymusowej", "wyolbrzymione uwielbienie wodza", "tajna policja polityczna"],
    answer: {
      "łagier": "obóz pracy przymusowej",
      "kult jednostki": "wyolbrzymione uwielbienie wodza",
      "NKWD": "tajna policja polityczna"
    },
    image: "r04_lagier_praca_wiezniow.jpg",
    explanation: "Stalinowski totalitaryzm opierał się na kulcie wodza i terrorze prowadzonym przez NKWD oraz system łagrów."
  },
  {
    id: "R04_ZSR_11",
    section: "Komunizm i stalinizm w ZSRR",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do polityki Stalina od 1929 r.: kolektywizacja, uprzemysłowienie, centralne planowanie, wolny handel NEP-u.",
    options: null,
    answer: "wolny handel NEP-u",
    explanation: "W 1929 r. Stalin zakończył NEP i zastąpił go kolektywizacją, uprzemysłowieniem oraz centralnym planowaniem."
  },
  {
    id: "R04_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który polityk brytyjski podpisał traktat wersalski w Sali Lustrzanej pałacu w Wersalu?",
    options: ["David Lloyd George", "Gustav Stresemann", "Woodrow Wilson", "Adolf Hitler", "Józef Stalin", "Włodzimierz Lenin"],
    answer: 0,
    explanation: "Podpis Davida Lloyda George'a pokazano w podpisie ilustracji dotyczącej traktatu wersalskiego."
  },
  {
    id: "R04_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Czechosłowacja była przykładem państwa wielonarodowego: około __________ jej mieszkańców stanowili Niemcy.",
    options: null,
    answer: ["23%"],
    altAnswers: [["23%", "23 procent"]],
    explanation: "Niemcy stanowili około 23% mieszkańców Czechosłowacji."
  },
  {
    id: "R04_HARD_03",
    section: "Super trudne",
    type: "true_false",
    prompt: "Gustav Stresemann otrzymał Pokojową Nagrodę Nobla mimo pragnienia zmiany granicy z Polską.",
    options: null,
    answer: true,
    explanation: "Gustav Stresemann otrzymał Pokojową Nagrodę Nobla w 1926 r., choć nie ukrywał zamiaru zmiany granicy z Polską."
  },
  {
    id: "R04_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz rodzaje broni testowane przez Niemców na rosyjskich poligonach po układzie w Rapallo.",
    options: ["Czołgi", "Samoloty", "Gazy trujące", "Okręty podwodne", "Rakiety balistyczne", "Broń jądrowa"],
    answer: [0, 1, 2],
    explanation: "Niemcy testowali w Rosji czołgi, samoloty oraz gazy trujące, czyli broń zakazaną im przez traktat wersalski."
  },
  {
    id: "R04_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jakie bezrobocie przekroczyły Niemcy w styczniu 1932 r.?",
    options: ["33%", "13%", "23%", "37%", "85%", "2,6%"],
    answer: 0,
    explanation: "W styczniu 1932 r. bezrobocie w Niemczech przekroczyło 33%, co sprzyjało szukaniu silnego przywódcy."
  },
  {
    id: "R04_HARD_06",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jaki tytuł nosiła książka napisana przez Hitlera w więzieniu?",
    options: null,
    answer: "Mein Kampf",
    altAnswers: ["Mein Kampf", "Moja walka"],
    explanation: "Po puczu monachijskim Hitler napisał w więzieniu Mein Kampf, gdzie zawarł główne elementy swojej ideologii."
  },
  {
    id: "R04_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu żydowskich mężczyzn zamknięto w obozach koncentracyjnych po nocy kryształowej?",
    options: ["Ponad 30 tysięcy", "Około 100 tysięcy", "Nieco ponad pół miliona", "Kilkaset", "13 tysięcy", "201 tysięcy"],
    answer: 0,
    explanation: "Po pogromie listopadowym ponad 30 tysięcy żydowskich mężczyzn trafiło do obozów koncentracyjnych."
  },
  {
    id: "R04_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz liczbę z informacją o ZSRR.",
    options: null,
    left: ["24 miliony", "250 tysięcy", "35%"],
    right: ["małe gospodarstwa połączone w kołchozy", "liczba kołchozów po 10 latach", "spadek produkcji żywności po kolektywizacji"],
    answer: {
      "24 miliony": "małe gospodarstwa połączone w kołchozy",
      "250 tysięcy": "liczba kołchozów po 10 latach",
      "35%": "spadek produkcji żywności po kolektywizacji"
    },
    explanation: "W czasie kolektywizacji ponad 24 miliony gospodarstw połączono w 250 tysięcy kołchozów, a produkcja żywności spadła o 35%."
  },
  {
    id: "R04_HARD_09",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Od drugiej połowy lat 30. w łagrach znajdowało się nieprzerwanie około __________ więźniów.",
    options: null,
    answer: ["10 milionów"],
    altAnswers: [["10 milionów", "10 mln", "dziesięciu milionów"]],
    image: "r04_lagier_praca_wiezniow.jpg",
    explanation: "System łagrów dostarczał Stalinowi darmowej siły roboczej do uprzemysłowienia."
  },
  {
    id: "R04_HARD_10",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz skutki wielkiej czystki z lat 1934-1938.",
    options: ["Rozstrzelanie lub zesłanie większości kierownictwa partii", "Uderzenie w prawie połowę oficerów Armii Czerwonej", "Aresztowanie co najmniej 7 milionów ludzi", "Rozwiązanie NKWD", "Zakończenie kultu jednostki"],
    answer: [0, 1, 2],
    explanation: "Wielka czystka objęła partię, armię i miliony mieszkańców ZSRR; NKWD było narzędziem terroru, a nie ofiarą rozwiązania."
  },
  {
    id: "R04_HARD_11",
    section: "Super trudne",
    type: "scenario",
    prompt: "W ZSRR ktoś podpisuje się na gazecie z podobizną Stalina i zostaje skazany za antyradziecką agitację. Jakie zjawisko pozwala zrozumieć tak absurdalną karę?",
    options: ["kult jednostki", "samostanowienie narodów", "izolacjonizm USA", "pokój bez zwycięstwa", "układ w Locarno", "wolny handel NEP-u"],
    answer: 0,
    explanation: "W kulcie jednostki Stalin był przedstawiany jako nieomylny wódz, więc nawet drobiazgi uznawano za znieważenie państwa."
  },
  {
    id: "R04_HARD_12",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do chronologii stalinizmu: NEP w 1921 r, Stalin przywódcą w 1924 r, kolektywizacja od 1929 r, wielka czystka od 1922 r.",
    options: null,
    answer: "wielka czystka od 1922 r",
    explanation: "Wielka czystka trwała w latach 1934-1938, a nie od 1922 r."
  }
];

const KID_PROMPTS = {
  R04_LAW_02: "Co traktat wersalski kazał zrobić Niemcom?",
  R04_LAW_09: "Dlaczego Liga Narodów była słaba?",
  R04_RAP_08: "Co bezpośrednio wywołało wielki kryzys?",
  R04_NAZ_05: "Jakie poglądy głosił nazizm?",
  R04_NAZ_09: "Ułóż kroki dojścia Hitlera do władzy.",
  R04_RZE_02: "Po czym poznasz państwo totalitarne?",
  R04_RZE_08: "Jak nazywał się pogrom Żydów w 1938 r.?",
  R04_ZSR_05: "Co pasuje do komunizmu wojennego, a co do NEP-u?",
  R04_ZSR_07: "Co Stalin zrobił z ziemią chłopów?",
  R04_HARD_10: "Co wydarzyło się podczas wielkiej czystki?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Świat w dwudziestoleciu międzywojennym",
  icon: "🌍",
  sectionOrder: [
    "Ład wersalski i Liga Narodów",
    "Rapallo, Locarno i wielki kryzys",
    "Republika Weimarska i nazizm",
    "Trzecia Rzesza i prześladowania",
    "Komunizm i stalinizm w ZSRR"
  ],
  sectionIcons: {
    "Ład wersalski i Liga Narodów": "🕊️",
    "Rapallo, Locarno i wielki kryzys": "📉",
    "Republika Weimarska i nazizm": "⚠️",
    "Trzecia Rzesza i prześladowania": "🏴",
    "Komunizm i stalinizm w ZSRR": "🚩"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
