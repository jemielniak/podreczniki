// Skróty sekcji (do identyfikatorów ćwiczeń):
//   USA  = Stany Zjednoczone w XIX wieku
//   WLO  = Zjednoczenie Włoch i Niemiec
//   KOL  = Kolonializm w XIX wieku
//   POL  = Przemiany polityczno-społeczne w Europie
//   TEC  = Postęp techniczny i kultura
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_USA_01",
    section: "Stany Zjednoczone w XIX wieku",
    type: "single_choice",
    prompt: "Jakie terytorium było ostatnim nabytkiem Stanów Zjednoczonych w XIX wieku?",
    options: ["Luizjana", "Alaska", "Floryda", "Teksas", "Kalifornia", "Oregon"],
    answer: 1,
    image: "r03_mapa_usa_xix_wieku.jpg",
    explanation: "Ostatnim nabytkiem Stanów Zjednoczonych była Alaska, odkupiona od Rosji w 1867 r."
  },
  {
    id: "R03_USA_02",
    section: "Stany Zjednoczone w XIX wieku",
    type: "single_choice",
    prompt: "Która część Stanów Zjednoczonych w połowie XIX wieku była przede wszystkim przemysłowa?",
    options: ["Południe", "Północ", "Zachód", "Alaska", "Tereny indiańskie", "Luizjana"],
    answer: 1,
    explanation: "Północ była obszarem przemysłowym, gęsto zaludnionym, bogatym w surowce i posiadającym gęstą sieć kolejową."
  },
  {
    id: "R03_USA_03",
    section: "Stany Zjednoczone w XIX wieku",
    type: "multi_select",
    prompt: "Zaznacz cechy Południa Stanów Zjednoczonych w połowie XIX wieku.",
    options: ["Rolnictwo było podstawą gospodarki.", "Rozwinięty był przede wszystkim przemysł wydobywczy.", "Gospodarka opierała się na pracy niewolników.", "Obszar był słabo zaludniony.", "Stany południowe domagały się likwidacji niewolnictwa."],
    answer: [0, 2, 3],
    image: "r03_plantacja_bawelny.jpg",
    explanation: "Południe było rolnicze, słabiej zaludnione i korzystało z pracy niewolników na wielkich plantacjach."
  },
  {
    id: "R03_USA_04",
    section: "Stany Zjednoczone w XIX wieku",
    type: "true_false",
    prompt: "Abolicjonizm był ruchem dążącym do całkowitego zniesienia niewolnictwa.",
    options: null,
    answer: true,
    explanation: "Abolicjoniści opowiadali się za likwidacją niewolnictwa, a ich poglądy zyskiwały na Północy coraz większe poparcie."
  },
  {
    id: "R03_USA_05",
    section: "Stany Zjednoczone w XIX wieku",
    type: "fill_in",
    prompt: "W grudniu 1860 r. jako pierwsza ze Stanów Zjednoczonych wystąpiła __________.",
    options: null,
    answer: ["Karolina Południowa"],
    altAnswers: [["Karolina Południowa", "Karolina Poludniowa"]],
    explanation: "Karolina Południowa rozpoczęła secesję stanów południowych po wyborze Abrahama Lincolna."
  },
  {
    id: "R03_USA_06",
    section: "Stany Zjednoczone w XIX wieku",
    type: "riddle",
    prompt: "Jak nazywano odłączenie się stanów południowych od USA?",
    options: null,
    answer: "secesja",
    altAnswers: ["secesja", "secesją"],
    explanation: "Secesja oznaczała odłączenie się od państwa; w ten sposób stany południowe doprowadziły do utworzenia Konfederacji."
  },
  {
    id: "R03_USA_07",
    section: "Stany Zjednoczone w XIX wieku",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: bawełna, tytoń, kukurydza, telegraf.",
    options: null,
    answer: "telegraf",
    explanation: "Bawełna, tytoń i kukurydza były uprawami Południa, a telegraf był technicznym środkiem używanym w czasie wojny."
  },
  {
    id: "R03_USA_08",
    section: "Stany Zjednoczone w XIX wieku",
    type: "scenario",
    prompt: "Jest lipiec 1863 r. Po ciężkiej bitwie wojska Południa tracą inicjatywę i odtąd muszą skupić się na obronie. O jaką bitwę chodzi?",
    options: ["pod Gettysburgiem", "nad Little Big Horn", "pod Sedanem", "pod Sadową", "pod Magentą", "pod Solferino"],
    answer: 0,
    image: "r03_bitwa_gettysburg.jpg",
    explanation: "Bitwa pod Gettysburgiem w lipcu 1863 r. była przełomowym momentem wojny secesyjnej i zakończyła się klęską konfederatów."
  },
  {
    id: "R03_USA_09",
    section: "Stany Zjednoczone w XIX wieku",
    type: "match",
    prompt: "Połącz pojęcie z właściwym wyjaśnieniem.",
    options: null,
    left: ["Unia", "Konfederacja", "abolicjonizm", "rezerwat"],
    right: ["stany Północy", "Skonfederowane Stany Ameryki", "ruch przeciw niewolnictwu", "wydzielony obszar dla Indian"],
    answer: {
      "Unia": "stany Północy",
      "Konfederacja": "Skonfederowane Stany Ameryki",
      "abolicjonizm": "ruch przeciw niewolnictwu",
      "rezerwat": "wydzielony obszar dla Indian"
    },
    explanation: "Te pojęcia opisują najważniejsze strony konfliktu i skutki podboju ziem Indian."
  },
  {
    id: "R03_USA_10",
    section: "Stany Zjednoczone w XIX wieku",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane ze Stanami Zjednoczonymi w kolejności chronologicznej.",
    options: null,
    items: ["Zakończenie wojny secesyjnej", "Wybór Abrahama Lincolna na prezydenta", "Atak konfederatów na Fort Sumter", "Dekret o zniesieniu niewolnictwa w stanach południowych"],
    answer: ["Wybór Abrahama Lincolna na prezydenta", "Atak konfederatów na Fort Sumter", "Dekret o zniesieniu niewolnictwa w stanach południowych", "Zakończenie wojny secesyjnej"],
    explanation: "Lincoln został wybrany w 1860 r., Fort Sumter zaatakowano w 1861 r., dekret ogłoszono w 1863 r., a wojna zakończyła się w 1865 r."
  },
  {
    id: "R03_WLO_01",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "single_choice",
    prompt: "Które państwo było głównym ośrodkiem zjednoczenia Włoch?",
    options: ["Królestwo Sardynii", "Państwo Kościelne", "Królestwo Obojga Sycylii", "Cesarstwo Austriackie", "Królestwo Pruskie", "Francja"],
    answer: 0,
    image: "r03_zjednoczenie_wloch_mapa.jpg",
    explanation: "Zjednoczenie Włoch nastąpiło z inicjatywy Królestwa Sardynii, zwanego też Piemontem."
  },
  {
    id: "R03_WLO_02",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "single_choice",
    prompt: "Które państwo stało na drodze do zjednoczenia Włoch, ponieważ kontrolowało Lombardię i Wenecję?",
    options: ["Austria", "Dania", "Rosja", "Hiszpania", "Belgia", "Holandia"],
    answer: 0,
    explanation: "Austria kontrolowała Lombardię i Wenecję, dlatego Piemont szukał przeciw niej sojuszu z Francją."
  },
  {
    id: "R03_WLO_03",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "multi_select",
    prompt: "Zaznacz wydarzenia należące do procesu zjednoczenia Włoch.",
    options: ["Wyprawa tysiąca czerwonych koszul", "Przyłączenie Wenecji w 1866 r.", "Ogłoszenie Królestwa Włoch w 1861 r.", "Utworzenie Związku Północnoniemieckiego", "Bitwa pod Gettysburgiem"],
    answer: [0, 1, 2],
    explanation: "Wyprawa Garibaldiego, powstanie Królestwa Włoch i późniejsze przyłączenie Wenecji były etapami jednoczenia ziem włoskich."
  },
  {
    id: "R03_WLO_04",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "true_false",
    prompt: "Rzym został stolicą zjednoczonych Włoch rok po włączeniu go do Królestwa Włoch.",
    options: null,
    answer: true,
    explanation: "Rzym włączono do Królestwa Włoch w 1870 r., a rok później został stolicą państwa."
  },
  {
    id: "R03_WLO_05",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "fill_in",
    prompt: "Otto von Bismarck został kanclerzem Prus w roku __________ i dążył do zjednoczenia Niemiec pod kierunkiem __________.",
    options: null,
    answer: ["1862", "Prus"],
    altAnswers: [["1862", "1862 r."], ["Prus", "Królestwa Pruskiego", "Krolestwa Pruskiego"]],
    image: "r03_bismarck_i_wilhelm.jpg",
    explanation: "Bismarck został kanclerzem Prus w 1862 r., a jego celem było zjednoczenie Niemiec pod pruskim przewodnictwem."
  },
  {
    id: "R03_WLO_06",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "riddle",
    prompt: "Jak brzmiało hasło Bismarcka określające zjednoczenie Niemiec przez działania zbrojne?",
    options: null,
    answer: "krwią i żelazem",
    altAnswers: ["krwią i żelazem", "krwia i zelazem", "krew i żelazo", "krew i zelazo"],
    explanation: "Bismarck uważał, że zjednoczenie Niemiec nastąpi przez siłę, czyli przez działania prowadzone krwią i żelazem."
  },
  {
    id: "R03_WLO_07",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Giuseppe Garibaldi, Wiktor Emanuel II, Królestwo Sardynii, Otto von Bismarck.",
    options: null,
    answer: "Otto von Bismarck",
    image: "r03_garibaldi_czerwone_koszule.jpg",
    explanation: "Garibaldi, Wiktor Emanuel II i Królestwo Sardynii wiążą się bezpośrednio ze zjednoczeniem Włoch, a Bismarck ze zjednoczeniem Niemiec."
  },
  {
    id: "R03_WLO_08",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "scenario",
    prompt: "Po krwawej bitwie kupiec Henri Dunant pomaga rannym żołnierzom, a później jego działania przyczyniają się do powstania organizacji humanitarnej. O jaką bitwę chodzi?",
    options: ["pod Solferino", "pod Sadową", "pod Sedanem", "pod Gettysburgiem", "pod Calatafimi", "nad Little Big Horn"],
    answer: 0,
    explanation: "Bitwa pod Solferino w 1859 r. zainspirowała Henriego Dunanta do działań, które doprowadziły do powstania Czerwonego Krzyża."
  },
  {
    id: "R03_WLO_09",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "match",
    prompt: "Połącz wojnę z jej skutkiem w procesie zjednoczenia Niemiec.",
    options: null,
    left: ["Wojna z Danią", "Wojna z Austrią", "Wojna z Francją"],
    right: ["odebranie Szlezwiku i Holsztynu", "likwidacja Związku Niemieckiego", "ogłoszenie II Rzeszy"],
    answer: {
      "Wojna z Danią": "odebranie Szlezwiku i Holsztynu",
      "Wojna z Austrią": "likwidacja Związku Niemieckiego",
      "Wojna z Francją": "ogłoszenie II Rzeszy"
    },
    explanation: "Kolejne zwycięskie wojny Prus usuwały przeszkody na drodze do zjednoczenia Niemiec."
  },
  {
    id: "R03_WLO_10",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "sequence",
    prompt: "Ułóż etapy jednoczenia Niemiec w kolejności chronologicznej.",
    options: null,
    items: ["Wojna Prus z Francją", "Utworzenie Niemieckiego Związku Celnego", "Wojna Prus i Austrii z Danią", "Utworzenie Związku Północnoniemieckiego", "Ogłoszenie II Rzeszy Niemieckiej"],
    answer: ["Utworzenie Niemieckiego Związku Celnego", "Wojna Prus i Austrii z Danią", "Utworzenie Związku Północnoniemieckiego", "Wojna Prus z Francją", "Ogłoszenie II Rzeszy Niemieckiej"],
    explanation: "Związek Celny powstał w 1834 r., wojna z Danią wybuchła w 1864 r., Związek Północnoniemiecki utworzono w 1867 r., wojna z Francją trwała w latach 1870-1871, a II Rzeszę ogłoszono w 1871 r."
  },
  {
    id: "R03_KOL_01",
    section: "Kolonializm w XIX wieku",
    type: "single_choice",
    prompt: "Czym był kolonializm?",
    options: ["Polityką podporządkowywania sobie słabiej rozwiniętych terytoriów na innych kontynentach", "Ruchem dążącym do zniesienia niewolnictwa", "Systemem monarchii parlamentarnej", "Sojuszem państw niemieckich", "Programem równouprawnienia kobiet", "Stylem w architekturze"],
    answer: 0,
    explanation: "Kolonializm polegał na podporządkowywaniu odległych ziem i wykorzystywaniu ich gospodarczo przez metropolie."
  },
  {
    id: "R03_KOL_02",
    section: "Kolonializm w XIX wieku",
    type: "single_choice",
    prompt: "Które państwo azjatyckie oparło się kolonizacji i po otwarciu na handel przeprowadziło szybką modernizację?",
    options: ["Japonia", "Indie", "Chiny", "Egipt", "Abisynia", "Maroko"],
    answer: 0,
    explanation: "Japonia do XIX w. izolowała się od świata, a po wymuszonym otwarciu przeprowadziła modernizację gospodarki i armii."
  },
  {
    id: "R03_KOL_03",
    section: "Kolonializm w XIX wieku",
    type: "multi_select",
    prompt: "Zaznacz przyczyny ekspansji kolonialnej wymieniane dla XIX wieku.",
    options: ["Chęć zdobycia surowców naturalnych", "Dążenie do zwiększenia zysków", "Próby opanowania ważnych szlaków handlowych", "Konieczność pozyskania taniej siły roboczej", "Zamiar utworzenia II Rzeszy"],
    answer: [0, 1, 2, 3],
    image: "r03_imperium_brytyjskie_mapa.jpg",
    explanation: "Ekspansję kolonialną napędzały interesy gospodarcze, strategiczne oraz przekonanie Europejczyków o własnej wyższości cywilizacyjnej."
  },
  {
    id: "R03_KOL_04",
    section: "Kolonializm w XIX wieku",
    type: "true_false",
    prompt: "Pod koniec XIX wieku większość Afryki zajęły Wielka Brytania i Francja.",
    options: null,
    answer: true,
    explanation: "W latach 80. XIX w. Afrykę podzielono między europejskie mocarstwa, a największe obszary przypadły Wielkiej Brytanii i Francji."
  },
  {
    id: "R03_KOL_05",
    section: "Kolonializm w XIX wieku",
    type: "fill_in",
    prompt: "Indie od XVII w. były stopniowo opanowywane przez Brytyjczyków, a w 1858 r. posiadłości Kompanii Wschodnioindyjskiej przejął rząd __________.",
    options: null,
    answer: ["Wielkiej Brytanii"],
    altAnswers: [["Wielkiej Brytanii", "Brytyjski", "rząd brytyjski", "rzad brytyjski"]],
    explanation: "Po rozwiązaniu Kompanii Wschodnioindyjskiej jej posiadłości w Indiach przejął rząd Wielkiej Brytanii."
  },
  {
    id: "R03_KOL_06",
    section: "Kolonializm w XIX wieku",
    type: "riddle",
    prompt: "Jak nazywano państwo, do którego należała kolonia?",
    options: null,
    answer: "metropolia",
    altAnswers: ["metropolia", "metropolią"],
    explanation: "Metropolia to państwo władające kolonią i czerpiące z niej korzyści."
  },
  {
    id: "R03_KOL_07",
    section: "Kolonializm w XIX wieku",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: powstanie sipajów, ruch Mahdiego, powstanie bokserów, wyprawa czerwonych koszul.",
    options: null,
    answer: "wyprawa czerwonych koszul",
    image: "r03_powstanie_bokserow.jpg",
    explanation: "Powstanie sipajów, ruch Mahdiego i powstanie bokserów były konfliktami kolonialnymi, a wyprawa czerwonych koszul dotyczyła zjednoczenia Włoch."
  },
  {
    id: "R03_KOL_08",
    section: "Kolonializm w XIX wieku",
    type: "scenario",
    prompt: "Miejscowi żołnierze służący w armii brytyjskiej buntują się przeciw kolonizatorom w Indiach. Jak nazywa się to wystąpienie?",
    options: ["powstanie sipajów", "powstanie bokserów", "wojny opiumowe", "powstanie Mahdiego", "wojny burskie", "rewolucja przemysłowa"],
    answer: 0,
    explanation: "Powstanie sipajów wybuchło w Indiach i było buntem miejscowych żołnierzy służących w armii brytyjskiej."
  },
  {
    id: "R03_KOL_09",
    section: "Kolonializm w XIX wieku",
    type: "match",
    prompt: "Połącz obszar lub państwo z informacją o kolonializmie.",
    options: null,
    left: ["Indie", "Chiny", "Australia", "Egipt"],
    right: ["perła Korony brytyjskiej", "strefy wpływów mocarstw", "kolonia karna", "Kanał Sueski"],
    answer: {
      "Indie": "perła Korony brytyjskiej",
      "Chiny": "strefy wpływów mocarstw",
      "Australia": "kolonia karna",
      "Egipt": "Kanał Sueski"
    },
    explanation: "Te przykłady pokazują różne znaczenie posiadłości i stref wpływów dla imperium brytyjskiego oraz innych mocarstw."
  },
  {
    id: "R03_KOL_10",
    section: "Kolonializm w XIX wieku",
    type: "sort",
    prompt: "Przyporządkuj skutki kolonializmu do kategorii.",
    options: null,
    items: ["budowa portów", "rabunkowa eksploatacja surowców", "europejski system szkolny", "eksterminacja ludności", "dostęp do ochrony zdrowia", "zanik kultur lokalnych"],
    categories: ["pozytywne", "negatywne"],
    answer: {
      "pozytywne": ["budowa portów", "europejski system szkolny", "dostęp do ochrony zdrowia"],
      "negatywne": ["rabunkowa eksploatacja surowców", "eksterminacja ludności", "zanik kultur lokalnych"]
    },
    explanation: "Kolonializm przynosił rozwój infrastruktury, ale jednocześnie powodował wyzysk, przemoc i niszczenie lokalnych kultur."
  },
  {
    id: "R03_POL_01",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "single_choice",
    prompt: "Na czym polegała demokratyzacja życia politycznego w drugiej połowie XIX wieku?",
    options: ["Na poszerzaniu praw politycznych i ograniczaniu władzy monarchów", "Na całkowitym zakazie działalności parlamentów", "Na odbieraniu praw wyborczych robotnikom", "Na przywróceniu społeczeństwa stanowego", "Na likwidacji trójpodziału władzy", "Na podporządkowaniu kolonii metropoliom"],
    answer: 0,
    explanation: "Demokratyzacja oznaczała m.in. trójpodział władzy, większe kompetencje parlamentów i coraz szersze prawa polityczne."
  },
  {
    id: "R03_POL_02",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "single_choice",
    prompt: "Które państwo było wzorcowym przykładem monarchii parlamentarnej w XIX wieku?",
    options: ["Wielka Brytania", "Rosja", "Francja", "Prusy", "Japonia", "Włochy"],
    answer: 0,
    explanation: "W Wielkiej Brytanii silną pozycję miały rząd i parlament, a grupa obywateli z prawami wyborczymi systematycznie się powiększała."
  },
  {
    id: "R03_POL_03",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "multi_select",
    prompt: "Zaznacz idee socjaldemokracji opisane w rozdziale.",
    options: ["Rozszerzenie praw wyborczych", "Walka o prawa socjalne w parlamencie", "Krytyka komunizmu", "Likwidacja każdego państwa", "Zbrojna rewolucja robotników"],
    answer: [0, 1, 2],
    explanation: "Socjaldemokraci chcieli działać legalnie w systemie parlamentarnym, walcząc o prawa wyborcze i socjalne."
  },
  {
    id: "R03_POL_04",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "true_false",
    prompt: "Anarchiści uznawali państwo za zagrożenie dla ludzkiej wolności i dążyli do jego likwidacji.",
    options: null,
    answer: true,
    explanation: "Anarchizm odrzucał państwo jako źródło ucisku i postulował dobrowolne wspólnoty wolnych jednostek."
  },
  {
    id: "R03_POL_05",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "fill_in",
    prompt: "Chrześcijańską demokrację zapoczątkowała encyklika __________ ogłoszona w 1891 r. przez papieża __________.",
    options: null,
    answer: ["Rerum novarum", "Leona XIII"],
    altAnswers: [["Rerum novarum"], ["Leona XIII", "Leon XIII", "Leona Trzynastego"]],
    explanation: "Chadecja wyrosła ze społecznej nauki Kościoła, a jej początkiem była encyklika Rerum novarum Leona XIII."
  },
  {
    id: "R03_POL_06",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "riddle",
    prompt: "Jak nazywano zwolenniczki równouprawnienia i uniezależnienia kobiet od mężczyzn?",
    options: null,
    answer: "emancypantki",
    altAnswers: ["emancypantki", "emancypantkami", "emancypantka"],
    explanation: "Emancypantki domagały się m.in. dostępu kobiet do wyższego wykształcenia, zmian w prawie rodzinnym i praw wyborczych."
  },
  {
    id: "R03_POL_07",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: socjaldemokracja, anarchizm, chadecja, pasteryzacja.",
    options: null,
    answer: "pasteryzacja",
    explanation: "Socjaldemokracja, anarchizm i chadecja to nurty polityczne lub społeczne, a pasteryzacja była odkryciem z dziedziny nauki."
  },
  {
    id: "R03_POL_08",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "scenario",
    prompt: "Robotnicy w Chicago domagają się skrócenia dnia pracy do 8 godzin. Później dla upamiętnienia tych wydarzeń ustanowiono święto. Jakie?",
    options: ["Międzynarodowe Święto Pracy", "Dzień Niepodległości", "Święto Konstytucji", "Dzień Republiki", "Święto Robotników Unii", "Dzień Emancypacji"],
    answer: 0,
    image: "r03_swieto_pracy_plakat.jpg",
    explanation: "Wydarzenia w Chicago z 1886 r. upamiętnia obchodzone od 1890 r. Międzynarodowe Święto Pracy."
  },
  {
    id: "R03_POL_09",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "match",
    prompt: "Połącz ideologię z główną cechą.",
    options: null,
    left: ["komunizm Marksa", "socjaldemokracja", "anarchizm", "nacjonalizm"],
    right: ["zbrojna rewolucja robotników", "legalna walka parlamentarna", "likwidacja państwa", "dobro narodu jako wartość nadrzędna"],
    answer: {
      "komunizm Marksa": "zbrojna rewolucja robotników",
      "socjaldemokracja": "legalna walka parlamentarna",
      "anarchizm": "likwidacja państwa",
      "nacjonalizm": "dobro narodu jako wartość nadrzędna"
    },
    explanation: "Ruch robotniczy i nowe ideologie różniły się metodami działania oraz rozumieniem wspólnoty politycznej."
  },
  {
    id: "R03_POL_10",
    section: "Przemiany polityczno-społeczne w Europie",
    type: "sort",
    prompt: "Przyporządkuj postulaty do ruchu społecznego lub politycznego.",
    options: null,
    items: ["dostęp kobiet do wyższego wykształcenia", "prawa wyborcze kobiet", "poprawa warunków pracy robotników", "współpraca klas społecznych", "zmiany w prawie rodzinnym", "poszanowanie godności człowieka"],
    categories: ["emancypacja kobiet", "chrześcijańska demokracja"],
    answer: {
      "emancypacja kobiet": ["dostęp kobiet do wyższego wykształcenia", "prawa wyborcze kobiet", "zmiany w prawie rodzinnym"],
      "chrześcijańska demokracja": ["poprawa warunków pracy robotników", "współpraca klas społecznych", "poszanowanie godności człowieka"]
    },
    image: "r03_sufrazystki_manifestacja.jpg",
    explanation: "Emancypantki koncentrowały się na równouprawnieniu kobiet, a chadecja na społecznej nauce Kościoła i poprawie stosunków między klasami."
  },
  {
    id: "R03_TEC_01",
    section: "Postęp techniczny i kultura",
    type: "single_choice",
    prompt: "Kto ogłosił w 1859 r. teorię ewolucji?",
    options: ["Karol Darwin", "Ludwik Pasteur", "Dymitr Mendelejew", "Wilhelm Roentgen", "Maria Skłodowska-Curie", "Piotr Curie"],
    answer: 0,
    explanation: "Teorię ewolucji ogłosił w 1859 r. angielski uczony Karol Darwin."
  },
  {
    id: "R03_TEC_02",
    section: "Postęp techniczny i kultura",
    type: "single_choice",
    prompt: "Jakie dwa promieniotwórcze pierwiastki odkryli Maria Skłodowska-Curie i Piotr Curie?",
    options: ["polon i rad", "żelazo i szkło", "węgiel i tlen", "złoto i diamenty", "opium i chinina", "sód i potas"],
    answer: 0,
    image: "r03_laboratorium_curie.jpg",
    explanation: "Maria Skłodowska-Curie i Piotr Curie odkryli pod koniec XIX w. polon i rad."
  },
  {
    id: "R03_TEC_03",
    section: "Postęp techniczny i kultura",
    type: "multi_select",
    prompt: "Zaznacz środki transportu lub komunikacji rozwijające się w drugiej połowie XIX wieku.",
    options: ["samochód", "tramwaj elektryczny", "metro", "sterowiec", "średniowieczny zamek", "samolot"],
    answer: [0, 1, 2, 3, 5],
    explanation: "Rozwój techniczny przyniósł samochody, tramwaje elektryczne, metro, sterowce i samoloty."
  },
  {
    id: "R03_TEC_04",
    section: "Postęp techniczny i kultura",
    type: "true_false",
    prompt: "Promienie X odkryte przez Wilhelma Roentgena umożliwiły dokładniejsze badania lekarskie.",
    options: null,
    answer: true,
    explanation: "Promienie rentgenowskie pozwoliły prześwietlać ciało człowieka i wykonywać zdjęcia wnętrza organizmu."
  },
  {
    id: "R03_TEC_05",
    section: "Postęp techniczny i kultura",
    type: "fill_in",
    prompt: "Kanał Sueski połączył Morze Śródziemne z Morzem __________, a Kanał Panamski połączył Ocean Atlantycki z Oceanem __________.",
    options: null,
    answer: ["Czerwonym", "Spokojnym"],
    altAnswers: [["Czerwonym", "Morzem Czerwonym"], ["Spokojnym", "Oceanem Spokojnym", "Pacyfikiem"]],
    image: "r03_kanal_sueski_panamski.jpg",
    explanation: "Kanał Sueski skrócił drogę z Europy do Indii, a Kanał Panamski skrócił trasę między wschodnim i zachodnim wybrzeżem USA."
  },
  {
    id: "R03_TEC_06",
    section: "Postęp techniczny i kultura",
    type: "riddle",
    prompt: "Jak nazywa się metoda Ludwika Pasteura pozwalająca dłużej przechowywać żywność dzięki wysokiej temperaturze?",
    options: null,
    answer: "pasteryzacja",
    altAnswers: ["pasteryzacja", "pasteryzacją"],
    explanation: "Pasteryzacja polega na wykorzystaniu wysokiej temperatury do przedłużenia trwałości żywności."
  },
  {
    id: "R03_TEC_07",
    section: "Postęp techniczny i kultura",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: impresjonizm, symbolizm, kubizm, metro.",
    options: null,
    answer: "metro",
    explanation: "Impresjonizm, symbolizm i kubizm to kierunki w sztuce, a metro jest środkiem komunikacji miejskiej."
  },
  {
    id: "R03_TEC_08",
    section: "Postęp techniczny i kultura",
    type: "scenario",
    prompt: "W 1895 r. w Paryżu publiczność ogląda krótki niemy film Wyjście robotników z fabryki. Kto zorganizował ten pokaz?",
    options: ["bracia Lumiere", "bracia Wright", "Maria i Piotr Curie", "Karol Darwin", "Claude Monet", "Ferdynand Zeppelin"],
    answer: 0,
    image: "r03_pokaz_lumiere.jpg",
    explanation: "Pierwszy publiczny pokaz filmowy zorganizowali w Paryżu w 1895 r. bracia Auguste i Louis Lumiere."
  },
  {
    id: "R03_TEC_09",
    section: "Postęp techniczny i kultura",
    type: "match",
    prompt: "Połącz kierunek artystyczny z charakterystyczną cechą.",
    options: null,
    left: ["impresjonizm", "secesja", "kubizm", "futuryzm"],
    right: ["ulotne wrażenia i gra światła", "faliste linie i motywy roślinne", "zgeometryzowane formy", "fascynacja techniką i ruchem"],
    answer: {
      "impresjonizm": "ulotne wrażenia i gra światła",
      "secesja": "faliste linie i motywy roślinne",
      "kubizm": "zgeometryzowane formy",
      "futuryzm": "fascynacja techniką i ruchem"
    },
    image: "r03_sztuka_przelomu_wiekow.jpg",
    explanation: "Nowe kierunki sztuki przełomu XIX i XX w. odrzucały klasyczne reguły i szukały nowych form wyrazu."
  },
  {
    id: "R03_TEC_10",
    section: "Postęp techniczny i kultura",
    type: "sort",
    prompt: "Przyporządkuj odkrycia i wynalazki do dziedzin.",
    options: null,
    items: ["teoria ewolucji", "pasteryzacja", "samolot", "promienie X", "metro", "sterowiec"],
    categories: ["nauka i medycyna", "transport i komunikacja"],
    answer: {
      "nauka i medycyna": ["teoria ewolucji", "pasteryzacja", "promienie X"],
      "transport i komunikacja": ["samolot", "metro", "sterowiec"]
    },
    explanation: "Darwin, Pasteur i Roentgen należą do rozwoju nauki i medycyny, a metro, sterowiec i samolot do zmian w transporcie."
  },
  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który fort zaatakowali konfederaci w kwietniu 1861 r., rozpoczynając wojnę secesyjną?",
    options: ["Fort Sumter", "Fort Alamo", "Fort Knox", "Fort Union", "Fort Lincoln", "Fort Dakota"],
    answer: 0,
    explanation: "Atak konfederatów na wierny Unii Fort Sumter w kwietniu 1861 r. dał początek wojnie secesyjnej."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz zdobycze techniki wykorzystane podczas wojny secesyjnej.",
    options: ["telegrafy", "aparaty fotograficzne", "balony obserwacyjne", "opancerzone okręty z obrotowymi wieżami artyleryjskimi", "samoloty braci Wright"],
    answer: [0, 1, 2, 3],
    explanation: "W wojnie secesyjnej używano m.in. telegrafów, fotografii, balonów obserwacyjnych i opancerzonych okrętów; samolot braci Wright pojawił się dopiero w 1903 r."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "true_false",
    prompt: "Międzynarodowe Stowarzyszenie Robotników, zwane Międzynarodówką, powstało w Londynie w 1864 r.",
    options: null,
    answer: true,
    explanation: "Marksiści powołali Międzynarodówkę w Londynie w 1864 r., aby łączyć robotników z różnych państw w walce z kapitalizmem."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Niemiecki Związek Celny powstał w roku __________ pod przewodnictwem __________.",
    options: null,
    answer: ["1834", "Prus"],
    altAnswers: [["1834", "1834 r."], ["Prus", "Królestwa Pruskiego", "Krolestwa Pruskiego"]],
    explanation: "Niemiecki Związek Celny powstał w 1834 r. pod przewodnictwem Prus i zacieśnił więź gospodarczą państw niemieckich."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywa się skrajna odmiana nacjonalizmu, która dzieli narody na lepsze i gorsze?",
    options: null,
    answer: "szowinizm",
    altAnswers: ["szowinizm", "szowinizmem"],
    explanation: "Szowinizm był skrajną formą nacjonalizmu, przyznającą silniejszym narodom prawa kosztem słabszych."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Liberia, Maroko, Abisynia, Indie.",
    options: null,
    answer: "Indie",
    explanation: "Liberia, Maroko i Abisynia były w Afryce niepodległe w czasie podziału kontynentu, natomiast Indie były posiadłością brytyjską."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jest 1 stycznia 1863 r. Prezydent USA ogłasza, że osoby trzymane w niewoli w stanach południowych będą wolne i mogą służyć w siłach zbrojnych. Kto wydał ten dekret?",
    options: ["Abraham Lincoln", "Ulysses Grant", "Robert Lee", "Wiktor Emanuel II", "Wilhelm I", "Otto von Bismarck"],
    answer: 0,
    image: "r03_dekret_lincolna.jpg",
    explanation: "Dekret o zniesieniu niewolnictwa w stanach południowych wydał Abraham Lincoln 1 stycznia 1863 r."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz datę z wydarzeniem.",
    options: null,
    left: ["1859", "1867", "1871", "1895", "1903"],
    right: ["teoria ewolucji Darwina", "powstanie Austro-Węgier", "ogłoszenie II Rzeszy", "publiczny pokaz braci Lumiere", "pierwszy lot samolotem"],
    answer: {
      "1859": "teoria ewolucji Darwina",
      "1867": "powstanie Austro-Węgier",
      "1871": "ogłoszenie II Rzeszy",
      "1895": "publiczny pokaz braci Lumiere",
      "1903": "pierwszy lot samolotem"
    },
    explanation: "Daty te porządkują przemiany polityczne, naukowe i kulturowe opisane w rozdziale."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj elementy do procesu zjednoczenia Włoch lub Niemiec.",
    options: null,
    items: ["Sabaudia i Nicea dla Francji", "bitwa pod Sadową", "Związek Północnoniemiecki", "wyprawa tysiąca czerwonych koszul", "Rzym stolicą państwa", "bitwa pod Sedanem"],
    categories: ["zjednoczenie Włoch", "zjednoczenie Niemiec"],
    answer: {
      "zjednoczenie Włoch": ["Sabaudia i Nicea dla Francji", "wyprawa tysiąca czerwonych koszul", "Rzym stolicą państwa"],
      "zjednoczenie Niemiec": ["bitwa pod Sadową", "Związek Północnoniemiecki", "bitwa pod Sedanem"]
    },
    explanation: "Włochy jednoczyły się wokół Piemontu i działań Garibaldiego, a Niemcy pod przewodnictwem Prus po wojnach z Danią, Austrią i Francją."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia z rozdziału w kolejności chronologicznej.",
    options: null,
    items: ["Utworzenie Królestwa Włoch", "Powstanie Niemieckiego Związku Celnego", "Otwarcie Kanału Sueskiego", "Pierwszy publiczny pokaz filmowy", "Ogłoszenie dekretu Lincolna"],
    answer: ["Powstanie Niemieckiego Związku Celnego", "Utworzenie Królestwa Włoch", "Ogłoszenie dekretu Lincolna", "Otwarcie Kanału Sueskiego", "Pierwszy publiczny pokaz filmowy"],
    explanation: "Niemiecki Związek Celny powstał w 1834 r., Królestwo Włoch w 1861 r., dekret Lincolna ogłoszono w 1863 r., Kanał Sueski otwarto w 1869 r., a pokaz braci Lumiere odbył się w 1895 r."
  }
];

const KID_PROMPTS = {
  R03_USA_01: "Jakie nowe terytorium USA kupiły od Rosji w 1867 r.?",
  R03_USA_06: "Jak nazywało się odłączenie Południa od USA?",
  R03_WLO_01: "Które państwo zaczęło jednoczyć Włochy?",
  R03_WLO_06: "Jak Bismarck mówił o jednoczeniu Niemiec siłą?",
  R03_KOL_01: "Co oznacza słowo kolonializm?",
  R03_KOL_06: "Jak nazywało się państwo rządzące kolonią?",
  R03_POL_06: "Jak nazywano kobiety walczące o swoje prawa?",
  R03_TEC_01: "Kto ogłosił teorię ewolucji?",
  R03_TEC_06: "Jak nazywa się metoda utrwalania żywności od nazwiska Pasteura?",
  R03_HARD_05: "Jak nazywa się skrajny nacjonalizm?"
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Europa i świat po Wiośnie Ludów",
  icon: "🌍",
  sectionOrder: [
    "Stany Zjednoczone w XIX wieku",
    "Zjednoczenie Włoch i Niemiec",
    "Kolonializm w XIX wieku",
    "Przemiany polityczno-społeczne w Europie",
    "Postęp techniczny i kultura"
  ],
  sectionIcons: {
    "Stany Zjednoczone w XIX wieku": "🇺🇸",
    "Zjednoczenie Włoch i Niemiec": "🗺️",
    "Kolonializm w XIX wieku": "🌐",
    "Przemiany polityczno-społeczne w Europie": "🗳️",
    "Postęp techniczny i kultura": "🔬"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
