// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WYN  = Wynalazki i przemiany codzienności
//   KUL  = Kultura masowa i obyczaje
//   POL  = Polityka masowa i ruchy polskie
//   SOJ  = Sojusze i orientacje przed wojną
//   WOJ  = I wojna światowa i niepodległość
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_WYN_01",
    section: "Wynalazki i przemiany codzienności",
    type: "single_choice",
    prompt: "Na jaki okres przypadła druga rewolucja przemysłowa?",
    options: ["Pierwsza połowa XVIII w.", "Druga połowa XIX w. i początek XX w.", "Lata 20. XIX w.", "Okres po II wojnie światowej", "Wiek XVII", "Schyłek średniowiecza"],
    answer: 1,
    explanation: "Druga rewolucja przemysłowa przypadła na drugą połowę XIX w. i początek XX w.; wiązała się z rozwojem nauki, elektryczności, chemii i nowych gałęzi przemysłu."
  },
  {
    id: "R03_WYN_02",
    section: "Wynalazki i przemiany codzienności",
    type: "true_false",
    prompt: "Na początku XX w. największy potencjał gospodarczy na świecie miały Stany Zjednoczone, a w Europie Niemcy.",
    options: null,
    answer: true,
    explanation: "Wielka Brytania traciła przewagę, a największy potencjał gospodarczy osiągnęły Stany Zjednoczone i Niemcy."
  },
  {
    id: "R03_WYN_03",
    section: "Wynalazki i przemiany codzienności",
    type: "match",
    prompt: "Połącz wynalazek lub odkrycie z osobą z nim związaną.",
    options: null,
    left: ["Żarówka elektryczna", "Telefon", "Radiotelegraf", "Szczepionka przeciw wściekliźnie"],
    right: ["Alexander Graham Bell", "Ludwik Pasteur", "Guglielmo Marconi", "Thomas Alva Edison"],
    answer: {
      "Żarówka elektryczna": "Thomas Alva Edison",
      "Telefon": "Alexander Graham Bell",
      "Radiotelegraf": "Guglielmo Marconi",
      "Szczepionka przeciw wściekliźnie": "Ludwik Pasteur"
    },
    explanation: "Edison wynalazł żarówkę, Bell skonstruował telefon, Marconi opatentował radiotelegraf, a Pasteur opracował szczepionkę przeciw wściekliźnie."
  },
  {
    id: "R03_WYN_04",
    section: "Wynalazki i przemiany codzienności",
    type: "fill_in",
    prompt: "W 1879 r. Thomas Alva Edison wynalazł __________, a kilka lat później uruchomił pierwszą miejską __________ w Nowym Jorku.",
    options: null,
    answer: ["żarówkę", "elektrownię"],
    altAnswers: [
      ["żarówkę", "zarowke", "żarówka"],
      ["elektrownię", "elektrownie", "elektrownia"]
    ],
    explanation: "Edison odegrał ważną rolę w upowszechnieniu elektryczności: wynalazł żarówkę i uruchomił elektrownię miejską.",
    image: "r03_pracownia_edison.jpg"
  },
  {
    id: "R03_WYN_05",
    section: "Wynalazki i przemiany codzienności",
    type: "multi_select",
    prompt: "Zaznacz skutki upowszechnienia elektryczności.",
    options: ["Rozwój tramwajów elektrycznych", "Możliwość stosowania telefonów", "Natychmiastowe zakończenie pracy w fabrykach", "Wyposażanie domów w nieduże urządzenia elektryczne", "Zanik prasy drukowanej"],
    answer: [0, 1, 3],
    explanation: "Elektryczność usprawniła transport, łączność i życie codzienne, ale nie zakończyła pracy fabrycznej ani nie spowodowała zaniku prasy.",
    image: "r03_tramwaj_elektryczny.jpg"
  },
  {
    id: "R03_WYN_06",
    section: "Wynalazki i przemiany codzienności",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Wynalezienie żarówki Edisona", "Opatentowanie radiotelegrafu Marconiego", "Skonstruowanie telefonu Bella", "Pierwsze praktyczne samochody z silnikiem spalinowym"],
    answer: ["Skonstruowanie telefonu Bella", "Wynalezienie żarówki Edisona", "Pierwsze praktyczne samochody z silnikiem spalinowym", "Opatentowanie radiotelegrafu Marconiego"],
    explanation: "Telefon Bella powstał w 1876 r., żarówka Edisona w 1879 r., samochody Daimlera i Benza w latach 1885-1886, a radiotelegraf Marconiego w 1896 r."
  },
  {
    id: "R03_WYN_07",
    section: "Wynalazki i przemiany codzienności",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: telefon, radiotelegraf, telegraf, szczepionka.",
    options: null,
    answer: "szczepionka",
    explanation: "Telefon, radiotelegraf i telegraf służyły komunikacji, a szczepionka należy do osiągnięć medycyny."
  },
  {
    id: "R03_WYN_08",
    section: "Wynalazki i przemiany codzienności",
    type: "sort",
    prompt: "Przyporządkuj przykłady do dziedzin rozwoju.",
    options: null,
    items: ["tramwaj elektryczny", "lokomotywa elektryczna", "telefon", "radiotelegraf", "szczepionka przeciw wściekliźnie", "promienie X"],
    categories: ["transport", "łączność", "medycyna"],
    answer: {
      "transport": ["tramwaj elektryczny", "lokomotywa elektryczna"],
      "łączność": ["telefon", "radiotelegraf"],
      "medycyna": ["szczepionka przeciw wściekliźnie", "promienie X"]
    },
    explanation: "Elektryczność i silniki zmieniały transport, wynalazki Bella i Marconiego usprawniały łączność, a szczepienia i promienie X rozwijały medycynę."
  },
  {
    id: "R03_WYN_09",
    section: "Wynalazki i przemiany codzienności",
    type: "riddle",
    prompt: "Niemiecki inżynier, który zbudował pierwszą elektryczną sieć trakcyjną, to...",
    options: null,
    answer: "Ernst Werner von Siemens",
    altAnswers: ["Ernst Werner von Siemens", "Siemens", "Werner von Siemens"],
    explanation: "Ernst Werner von Siemens zbudował pierwszą elektryczną sieć trakcyjną; dzięki tej innowacji w 1881 r. ruszyły tramwaje elektryczne w Berlinie.",
    image: "r03_tramwaj_elektryczny.jpg"
  },
  {
    id: "R03_WYN_10",
    section: "Wynalazki i przemiany codzienności",
    type: "scenario",
    prompt: "Lekarz z końca XIX w. chce po raz pierwszy zajrzeć do wnętrza ciała pacjenta bez operacji. Z którego odkrycia może skorzystać?",
    options: ["Promieni X", "Dynamitu", "Kinematografu", "Gramofonu", "Radiotelegrafu", "Karabinu maszynowego"],
    answer: 0,
    explanation: "Promienie X, nazwane promieniami Röntgena, umożliwiły prześwietlanie chorych i są wykorzystywane w diagnostyce medycznej."
  },
  {
    id: "R03_KUL_01",
    section: "Kultura masowa i obyczaje",
    type: "single_choice",
    prompt: "Jak nazywano okres pokoju i rozwoju gospodarczego pod koniec XIX w.?",
    options: ["Wiosną Ludów", "Piękną epoką", "Wielką wojną", "Krwawą niedzielą", "Kociołem bałkańskim", "Epoką napoleońską"],
    answer: 1,
    explanation: "Schyłek XIX w., po wojnie secesyjnej i wojnie francusko-pruskiej, został nazwany piękną epoką, czyli la belle époque."
  },
  {
    id: "R03_KUL_02",
    section: "Kultura masowa i obyczaje",
    type: "multi_select",
    prompt: "Zaznacz zmiany, które poprawiały warunki życia w miastach przełomu XIX i XX w.",
    options: ["Kanalizacja i wodociągi", "Oświetlenie ulic i domów", "Szerokie ulice", "Zakaz korzystania z parków", "Całkowity zanik transportu miejskiego"],
    answer: [0, 1, 2],
    explanation: "W miastach rozwijano kanalizację, wodociągi, oświetlenie i szersze ulice, co poprawiało higienę, bezpieczeństwo i komunikację."
  },
  {
    id: "R03_KUL_03",
    section: "Kultura masowa i obyczaje",
    type: "fill_in",
    prompt: "Bracia Auguste i Louis Lumiere pod koniec 1895 r. przedstawili __________ i zorganizowali pierwszy publiczny pokaz __________.",
    options: null,
    answer: ["kinematograf", "filmowy"],
    altAnswers: [
      ["kinematograf", "kinematografu"],
      ["filmowy", "filmowy pokaz", "pokaz filmowy"]
    ],
    explanation: "Kinematograf braci Lumiere stał się początkiem kina jako popularnej rozrywki.",
    image: "r03_kinematograf_lumiere.jpg"
  },
  {
    id: "R03_KUL_04",
    section: "Kultura masowa i obyczaje",
    type: "true_false",
    prompt: "Kultura masowa była przeznaczona tylko dla niewielkiej grupy najbogatszych odbiorców.",
    options: null,
    answer: false,
    explanation: "Kultura masowa była przeznaczona dla wielkiej liczby odbiorców; rozwijała się dzięki prasie, kinu, radiu i umiejętności czytania."
  },
  {
    id: "R03_KUL_05",
    section: "Kultura masowa i obyczaje",
    type: "match",
    prompt: "Połącz zjawisko z jego znaczeniem w życiu codziennym.",
    options: null,
    left: ["Czas wolny po pracy", "Zegary i zegarki", "Wysokonakładowa prasa", "Towarzystwa krajoznawcze"],
    right: ["Organizowanie szlaków i przewodników", "Uczestnictwo w rozrywkach i odpoczynku", "Szybkie rozpowszechnianie informacji", "Kontrola godzin pracy"],
    answer: {
      "Czas wolny po pracy": "Uczestnictwo w rozrywkach i odpoczynku",
      "Zegary i zegarki": "Kontrola godzin pracy",
      "Wysokonakładowa prasa": "Szybkie rozpowszechnianie informacji",
      "Towarzystwa krajoznawcze": "Organizowanie szlaków i przewodników"
    },
    explanation: "Przemiany obyczajowe dotyczyły rytmu pracy, czasu wolnego, prasy i nowych form podróżowania."
  },
  {
    id: "R03_KUL_06",
    section: "Kultura masowa i obyczaje",
    type: "single_choice",
    prompt: "Który statek stał się symbolem ceny płaconej za szybki rozwój nowoczesnej techniki?",
    options: ["Titanic", "Lusitania", "Dreadnought", "Metropolitan Railway", "Orient Express", "Błyskawica"],
    answer: 0,
    explanation: "Titanic, największy i najnowocześniejszy statek pasażerski początku XX w., zatonął w 1912 r. podczas pierwszego rejsu.",
    image: "r03_titanic_przekroj.jpg"
  },
  {
    id: "R03_KUL_07",
    section: "Kultura masowa i obyczaje",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z podróżami i kulturą w kolejności chronologicznej.",
    options: null,
    items: ["Pierwsze nowożytne igrzyska olimpijskie w Atenach", "Powstanie Polskiego Towarzystwa Tatrzańskiego", "Zatonięcie Titanica", "Pierwszy publiczny pokaz filmowy braci Lumiere"],
    answer: ["Powstanie Polskiego Towarzystwa Tatrzańskiego", "Pierwszy publiczny pokaz filmowy braci Lumiere", "Pierwsze nowożytne igrzyska olimpijskie w Atenach", "Zatonięcie Titanica"],
    explanation: "Polskie Towarzystwo Tatrzańskie powstało w 1873 r., pokaz filmowy odbył się w 1895 r., igrzyska w Atenach w 1896 r., a Titanic zatonął w 1912 r."
  },
  {
    id: "R03_KUL_08",
    section: "Kultura masowa i obyczaje",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: kino, kawiarnia, kabaret, Duma Państwowa.",
    options: null,
    answer: "Duma Państwowa",
    explanation: "Kino, kawiarnia i kabaret były formami masowej rozrywki, a Duma Państwowa była rosyjskim parlamentem."
  },
  {
    id: "R03_KUL_09",
    section: "Kultura masowa i obyczaje",
    type: "sort",
    prompt: "Przyporządkuj przykłady do obszarów przemian obyczajowych.",
    options: null,
    items: ["korzystanie z urlopu", "wyjazdy na letniska", "spotkania w kawiarniach", "chodzenie do kina", "wodociągi", "kanalizacja"],
    categories: ["czas wolny", "rozrywka", "higiena miejska"],
    answer: {
      "czas wolny": ["korzystanie z urlopu", "wyjazdy na letniska"],
      "rozrywka": ["spotkania w kawiarniach", "chodzenie do kina"],
      "higiena miejska": ["wodociągi", "kanalizacja"]
    },
    explanation: "Rozwój miast i techniki zmieniał zarówno warunki sanitarne, jak i sposoby spędzania czasu wolnego."
  },
  {
    id: "R03_KUL_10",
    section: "Kultura masowa i obyczaje",
    type: "riddle",
    prompt: "Polskie stowarzyszenie turystyczne założone w 1873 r. to...",
    options: null,
    answer: "Polskie Towarzystwo Tatrzańskie",
    altAnswers: ["Polskie Towarzystwo Tatrzańskie", "PTT", "Towarzystwo Tatrzańskie"],
    explanation: "Polskie Towarzystwo Tatrzańskie powstało w 1873 r.; jednym z jego założycieli był Tytus Chałubiński."
  },
  {
    id: "R03_POL_01",
    section: "Polityka masowa i ruchy polskie",
    type: "single_choice",
    prompt: "Co było zasadniczym elementem demokratyzacji życia politycznego w XIX w.?",
    options: ["Stopniowe poszerzanie praw wyborczych", "Zniesienie parlamentów", "Powrót do monarchii absolutnych", "Zakaz działania partii politycznych", "Ograniczenie szkół publicznych", "Likwidacja prasy"],
    answer: 0,
    explanation: "Demokratyzacja polegała przede wszystkim na stopniowym rozszerzaniu praw wyborczych i udziale mas społecznych w polityce.",
    image: "r03_wiec_wyborczy.jpg"
  },
  {
    id: "R03_POL_02",
    section: "Polityka masowa i ruchy polskie",
    type: "multi_select",
    prompt: "Zaznacz cztery zasady demokratycznego prawa wyborczego zdefiniowane pod koniec XIX w.",
    options: ["Powszechność", "Tajność", "Bezpośredniość", "Równość", "Dziedziczność", "Cenzus majątkowy"],
    answer: [0, 1, 2, 3],
    explanation: "Wybory demokratyczne miały być powszechne, tajne, bezpośrednie i równe; cenzus majątkowy ograniczał prawa wyborcze."
  },
  {
    id: "R03_POL_03",
    section: "Polityka masowa i ruchy polskie",
    type: "true_false",
    prompt: "Sufrażystki walczyły o przyznanie kobietom praw wyborczych.",
    options: null,
    answer: true,
    explanation: "Ruch sufrażystek działał zwłaszcza w Stanach Zjednoczonych i Wielkiej Brytanii, domagając się praw wyborczych dla kobiet.",
    image: "r03_sufrazystki.jpg"
  },
  {
    id: "R03_POL_04",
    section: "Polityka masowa i ruchy polskie",
    type: "match",
    prompt: "Połącz nurt polityczny na ziemiach polskich z przykładową organizacją lub partią.",
    options: null,
    left: ["Ruch narodowy", "Ruch socjalistyczny", "Ruch ludowy", "Socjaliści przeciwni niepodległościowemu programowi PPS"],
    right: ["SDKPiL", "Polskie Stronnictwo Ludowe", "Narodowa Demokracja", "Polska Partia Socjalistyczna"],
    answer: {
      "Ruch narodowy": "Narodowa Demokracja",
      "Ruch socjalistyczny": "Polska Partia Socjalistyczna",
      "Ruch ludowy": "Polskie Stronnictwo Ludowe",
      "Socjaliści przeciwni niepodległościowemu programowi PPS": "SDKPiL"
    },
    explanation: "Na ziemiach polskich działały trzy główne nurty: narodowy, socjalistyczny i ludowy; część socjalistów utworzyła SDKPiL, odrzucając program niepodległościowy PPS.",
    image: "r03_dzialacze_polityczni.jpg"
  },
  {
    id: "R03_POL_05",
    section: "Polityka masowa i ruchy polskie",
    type: "fill_in",
    prompt: "W 1892 r. na kongresie w Paryżu powołano __________, która łączyła walkę robotniczą z postulatem __________ Polski.",
    options: null,
    answer: ["PPS", "niepodległości"],
    altAnswers: [
      ["PPS", "Polską Partię Socjalistyczną", "Polska Partia Socjalistyczna"],
      ["niepodległości", "niepodleglosci", "niepodległość"]
    ],
    explanation: "Polska Partia Socjalistyczna domagała się praw robotników i wskrzeszenia wolnej Polski jako republiki demokratycznej."
  },
  {
    id: "R03_POL_06",
    section: "Polityka masowa i ruchy polskie",
    type: "single_choice",
    prompt: "Kto przewodził Narodowej Demokracji, zwanej endecją?",
    options: ["Roman Dmowski", "Józef Piłsudski", "Ludwik Waryński", "Wincenty Witos", "Ignacy Daszyński", "Karol Marks"],
    answer: 0,
    explanation: "Ruch narodowy kierowany przez Romana Dmowskiego nazywano Narodową Demokracją lub endecją.",
    image: "r03_dzialacze_polityczni.jpg"
  },
  {
    id: "R03_POL_07",
    section: "Polityka masowa i ruchy polskie",
    type: "scenario",
    prompt: "Jesteś działaczem chłopskim w Galicji w 1895 r. Chcesz wspierać oświatę na wsi, sprawiedliwy podział ziemi i większy udział chłopów w sejmie galicyjskim. Do jakiego ruchu najbliżej ci programowo?",
    options: ["Ruchu ludowego", "Narodowej Demokracji", "SDKPiL", "Bojówek PPS", "Sufrażystek", "Obozu konserwatywnego"],
    answer: 0,
    explanation: "Ruch ludowy w Galicji stawiał sobie za cel poprawę losu chłopów, reformę rolną i demokratyzację ordynacji wyborczej."
  },
  {
    id: "R03_POL_08",
    section: "Polityka masowa i ruchy polskie",
    type: "sort",
    prompt: "Przyporządkuj postaci do nurtów lub działań, z którymi są związane.",
    options: null,
    items: ["Roman Dmowski", "Józef Piłsudski", "Wincenty Witos", "Ludwik Waryński", "Emmeline Pankhurst", "Karol Marks"],
    categories: ["ruch narodowy", "ruch socjalistyczny", "ruch ludowy", "ruch kobiet"],
    answer: {
      "ruch narodowy": ["Roman Dmowski"],
      "ruch socjalistyczny": ["Józef Piłsudski", "Ludwik Waryński", "Karol Marks"],
      "ruch ludowy": ["Wincenty Witos"],
      "ruch kobiet": ["Emmeline Pankhurst"]
    },
    explanation: "Dmowski był przywódcą endecji, Piłsudski i Waryński działali w ruchu socjalistycznym, Witos w ruchu ludowym, a Pankhurst w ruchu sufrażystek."
  },
  {
    id: "R03_POL_09",
    section: "Polityka masowa i ruchy polskie",
    type: "riddle",
    prompt: "Rosyjski parlament ustanowiony przez Mikołaja II pod wpływem rewolucji 1905 r. to...",
    options: null,
    answer: "Duma Państwowa",
    altAnswers: ["Duma Państwowa", "Duma", "Duma Panstwowa"],
    explanation: "Po strajku generalnym Mikołaj II zapowiedział zwołanie Dumy Państwowej, czyli parlamentu rosyjskiego."
  },
  {
    id: "R03_POL_10",
    section: "Polityka masowa i ruchy polskie",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: PPS, SDKPiL, Stronnictwo Ludowe, radiotelegraf.",
    options: null,
    answer: "radiotelegraf",
    explanation: "PPS, SDKPiL i Stronnictwo Ludowe były organizacjami lub partiami politycznymi, a radiotelegraf był wynalazkiem komunikacyjnym."
  },
  {
    id: "R03_SOJ_01",
    section: "Sojusze i orientacje przed wojną",
    type: "single_choice",
    prompt: "Które państwa utworzyły trójprzymierze w 1882 r.?",
    options: ["Niemcy, Austro-Węgry i Włochy", "Francja, Wielka Brytania i Rosja", "Rosja, Serbia i Bułgaria", "Niemcy, Rosja i Francja", "Wielka Brytania, Włochy i Serbia", "Austro-Węgry, Turcja i Bułgaria"],
    answer: 0,
    explanation: "Trójprzymierze powstało w 1882 r. po przystąpieniu Włoch do sojuszu Niemiec i Austro-Węgier."
  },
  {
    id: "R03_SOJ_02",
    section: "Sojusze i orientacje przed wojną",
    type: "match",
    prompt: "Połącz blok polityczno-militarny z państwami, które go tworzyły przed wojną.",
    options: null,
    left: ["Trójprzymierze", "Trójporozumienie"],
    right: ["Wielka Brytania, Francja i Rosja", "Niemcy, Austro-Węgry i Włochy"],
    answer: {
      "Trójprzymierze": "Niemcy, Austro-Węgry i Włochy",
      "Trójporozumienie": "Wielka Brytania, Francja i Rosja"
    },
    explanation: "Trójprzymierze tworzyły Niemcy, Austro-Węgry i Włochy, a trójporozumienie, czyli ententę, Wielka Brytania, Francja i Rosja."
  },
  {
    id: "R03_SOJ_03",
    section: "Sojusze i orientacje przed wojną",
    type: "fill_in",
    prompt: "W 1904 r. Anglia i Francja podpisały serdeczne porozumienie, czyli __________, a w 1907 r. do ententy dołączyła __________.",
    options: null,
    answer: ["entente cordiale", "Rosja"],
    altAnswers: [
      ["entente cordiale", "ententa", "serdeczne porozumienie"],
      ["Rosja", "rosja"]
    ],
    explanation: "Sojusz angielsko-francuski z 1904 r. nazwano entente cordiale, a do ukształtowanej ententy w 1907 r. dołączyła Rosja."
  },
  {
    id: "R03_SOJ_04",
    section: "Sojusze i orientacje przed wojną",
    type: "true_false",
    prompt: "Na początku XX w. Bałkany były obszarem rywalizacji Austro-Węgier i Rosji.",
    options: null,
    answer: true,
    explanation: "Na Bałkanach ścierały się interesy Austro-Węgier i Rosji, popierającej Serbię; region nazywano kotłem bałkańskim."
  },
  {
    id: "R03_SOJ_05",
    section: "Sojusze i orientacje przed wojną",
    type: "scenario",
    prompt: "Jesteś zwolennikiem Romana Dmowskiego w latach 1908-1912. W nadchodzącej wojnie za najgroźniejsze dla polskości uznajesz Niemcy. Którą orientację popierasz?",
    options: ["Prorosyjską i antyniemiecką", "Proaustriacką i antyrosyjską", "Proniemiecką i antyfrancuską", "Neutralną wobec zaborców", "Probolszewicką", "Antybrytyjską"],
    answer: 0,
    explanation: "Dmowski uważał Niemcy za główne zagrożenie dla Polaków i opowiadał się za poparciem Rosji oraz jej zachodnich sojuszników."
  },
  {
    id: "R03_SOJ_06",
    section: "Sojusze i orientacje przed wojną",
    type: "multi_select",
    prompt: "Zaznacz założenia orientacji proaustriackiej Józefa Piłsudskiego.",
    options: ["Poparcie Austro-Węgier przeciw Rosji", "Wystąpienie zbrojne przeciw Rosji", "Przekształcenie monarchii dualistycznej w trialistyczną", "Bezwarunkowe poparcie Rosji", "Odrzucenie organizacji paramilitarnych"],
    answer: [0, 1, 2],
    explanation: "Piłsudski liczył na walkę u boku Austro-Węgier przeciw Rosji i na przekształcenie monarchii w Austro-Węgro-Polskę."
  },
  {
    id: "R03_SOJ_07",
    section: "Sojusze i orientacje przed wojną",
    type: "sort",
    prompt: "Przyporządkuj organizacje paramilitarne do środowisk, z którymi były związane.",
    options: null,
    items: ["Związek Strzelecki", "Towarzystwo Strzelec", "Polowe Drużyny Sokole", "Drużyny Bartoszowe"],
    categories: ["działacze z PPS", "narodowcy", "chłopi"],
    answer: {
      "działacze z PPS": ["Związek Strzelecki", "Towarzystwo Strzelec"],
      "narodowcy": ["Polowe Drużyny Sokole"],
      "chłopi": ["Drużyny Bartoszowe"]
    },
    explanation: "Organizacje strzeleckie utworzono z inicjatywy działaczy wywodzących się z PPS, Polowe Drużyny Sokole wiązały się z narodowcami, a Drużyny Bartoszowe były popularne wśród chłopów."
  },
  {
    id: "R03_SOJ_08",
    section: "Sojusze i orientacje przed wojną",
    type: "riddle",
    prompt: "Tajna organizacja powołana w 1908 r. z inicjatywy Józefa Piłsudskiego, patronująca organizacjom strzeleckim, to...",
    options: null,
    answer: "Związek Walki Czynnej",
    altAnswers: ["Związek Walki Czynnej", "Zwiazek Walki Czynnej", "ZWC"],
    explanation: "Związek Walki Czynnej powstał w 1908 r. i patronował jawnie działającym organizacjom strzeleckim w Galicji."
  },
  {
    id: "R03_SOJ_09",
    section: "Sojusze i orientacje przed wojną",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z blokami i przygotowaniami do wojny w kolejności chronologicznej.",
    options: null,
    items: ["Powstanie Związku Walki Czynnej", "Utworzenie trójprzymierza", "Podpisanie entente cordiale", "Dołączenie Rosji do ententy"],
    answer: ["Utworzenie trójprzymierza", "Podpisanie entente cordiale", "Dołączenie Rosji do ententy", "Powstanie Związku Walki Czynnej"],
    explanation: "Trójprzymierze powstało w 1882 r., entente cordiale w 1904 r., Rosja dołączyła do ententy w 1907 r., a Związek Walki Czynnej utworzono w 1908 r."
  },
  {
    id: "R03_SOJ_10",
    section: "Sojusze i orientacje przed wojną",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Niemcy, Austro-Węgry, Włochy, Wielka Brytania.",
    options: null,
    answer: "Wielka Brytania",
    explanation: "Niemcy, Austro-Węgry i Włochy należały do trójprzymierza, a Wielka Brytania do trójporozumienia."
  },
  {
    id: "R03_WOJ_01",
    section: "I wojna światowa i niepodległość",
    type: "single_choice",
    prompt: "Co było bezpośrednią przyczyną wybuchu I wojny światowej?",
    options: ["Zamach w Sarajewie na arcyksięcia Franciszka Ferdynanda", "Podpisanie traktatu brzeskiego", "Zatonięcie Titanica", "Powstanie Polskiego Towarzystwa Tatrzańskiego", "Utworzenie Dumy Państwowej", "Wybory do Sejmu Ustawodawczego"],
    answer: 0,
    explanation: "28 czerwca 1914 r. w Sarajewie zastrzelono Franciszka Ferdynanda, a Austro-Węgry oskarżyły Serbię o współudział w zamachu."
  },
  {
    id: "R03_WOJ_02",
    section: "I wojna światowa i niepodległość",
    type: "true_false",
    prompt: "Włochy, choć wcześniej należały do trójprzymierza, w 1915 r. opowiedziały się po stronie ententy.",
    options: null,
    answer: true,
    explanation: "Włochy nie przystąpiły do bloku państw centralnych, a w 1915 r. wybrały stronę ententy."
  },
  {
    id: "R03_WOJ_03",
    section: "I wojna światowa i niepodległość",
    type: "match",
    prompt: "Połącz wydarzenie z datą.",
    options: null,
    left: ["Zamach w Sarajewie", "Bitwa nad Marną", "Rewolucja lutowa w Rosji", "Zawieszenie broni na froncie zachodnim"],
    right: ["11 listopada 1918 r.", "wrzesień 1914 r.", "28 czerwca 1914 r.", "luty 1917 r."],
    answer: {
      "Zamach w Sarajewie": "28 czerwca 1914 r.",
      "Bitwa nad Marną": "wrzesień 1914 r.",
      "Rewolucja lutowa w Rosji": "luty 1917 r.",
      "Zawieszenie broni na froncie zachodnim": "11 listopada 1918 r."
    },
    explanation: "Te wydarzenia wyznaczają ważne momenty od początku wojny do jej zakończenia na froncie zachodnim."
  },
  {
    id: "R03_WOJ_04",
    section: "I wojna światowa i niepodległość",
    type: "multi_select",
    prompt: "Zaznacz nowe rodzaje broni użyte na dużą skalę podczas I wojny światowej.",
    options: ["Gazy bojowe", "Czołgi", "Samoloty bojowe", "Okręty podwodne", "Łuki refleksyjne", "Taran oblężniczy"],
    answer: [0, 1, 2, 3],
    explanation: "W czasie I wojny światowej użyto na dużą skalę gazów bojowych, czołgów, samolotów bojowych i okrętów podwodnych.",
    image: "r03_okopy_front_zachodni.jpg"
  },
  {
    id: "R03_WOJ_05",
    section: "I wojna światowa i niepodległość",
    type: "fill_in",
    prompt: "W 1916 r. Niemcy próbowali wykrwawić armię francuską pod twierdzą __________, a nad Sommą Brytyjczycy po raz pierwszy użyli __________.",
    options: null,
    answer: ["Verdun", "czołgów"],
    altAnswers: [
      ["Verdun", "verdun"],
      ["czołgów", "czolgow", "czołgi"]
    ],
    explanation: "Bitwa pod Verdun miała wyczerpać armię francuską, a podczas bitwy nad Sommą Brytyjczycy po raz pierwszy użyli czołgów."
  },
  {
    id: "R03_WOJ_06",
    section: "I wojna światowa i niepodległość",
    type: "sort",
    prompt: "Przyporządkuj wydarzenia do frontu lub obszaru.",
    options: null,
    items: ["bitwa nad Marną", "piekło Verdun", "bitwa nad Sommą", "ofensywa rosyjska w Galicji", "zajęcie Warszawy przez Niemców", "bitwy w Prusach Wschodnich"],
    categories: ["front zachodni", "front wschodni"],
    answer: {
      "front zachodni": ["bitwa nad Marną", "piekło Verdun", "bitwa nad Sommą"],
      "front wschodni": ["ofensywa rosyjska w Galicji", "zajęcie Warszawy przez Niemców", "bitwy w Prusach Wschodnich"]
    },
    explanation: "Marna, Verdun i Somma należały do walk na Zachodzie, a Galicja, Warszawa i Prusy Wschodnie do działań na froncie wschodnim."
  },
  {
    id: "R03_WOJ_07",
    section: "I wojna światowa i niepodległość",
    type: "scenario",
    prompt: "Jest kwiecień 1917 r. Niemieckie okręty podwodne zatopiły bez ostrzeżenia amerykańskie statki handlowe. Jaką decyzję podjęły Stany Zjednoczone?",
    options: ["Wypowiedziały wojnę państwom centralnym", "Przystąpiły do trójprzymierza", "Zawarły pokój z Niemcami", "Wycofały się z polityki międzynarodowej", "Poparły bolszewików", "Ogłosiły rozbiór Polski"],
    answer: 0,
    explanation: "W kwietniu 1917 r. Stany Zjednoczone wypowiedziały wojnę państwom centralnym, wzmacniając ententę."
  },
  {
    id: "R03_WOJ_08",
    section: "I wojna światowa i niepodległość",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Traktat brzeski", "Akt 5 listopada", "Powrót Piłsudskiego z Magdeburga", "Przystąpienie USA do wojny"],
    answer: ["Akt 5 listopada", "Przystąpienie USA do wojny", "Traktat brzeski", "Powrót Piłsudskiego z Magdeburga"],
    explanation: "Akt 5 listopada ogłoszono w 1916 r., USA przystąpiły do wojny w 1917 r., traktat brzeski podpisano w marcu 1918 r., a Piłsudski wrócił 10 listopada 1918 r."
  },
  {
    id: "R03_WOJ_09",
    section: "I wojna światowa i niepodległość",
    type: "riddle",
    prompt: "Manifest dwóch cesarzy z 5 listopada 1916 r. zapowiadający utworzenie państwa polskiego to...",
    options: null,
    answer: "Akt 5 listopada",
    altAnswers: ["Akt 5 listopada", "manifest dwóch cesarzy", "Akt 5 XI"],
    explanation: "Akt 5 listopada był deklaracją cesarzy Niemiec i Austrii, która umiędzynarodowiła sprawę polską."
  },
  {
    id: "R03_WOJ_10",
    section: "I wojna światowa i niepodległość",
    type: "single_choice",
    prompt: "Kto 11 listopada 1918 r. przejął władzę nad wojskiem z rąk Rady Regencyjnej?",
    options: ["Józef Piłsudski", "Roman Dmowski", "Ignacy Jan Paderewski", "Wincenty Witos", "Ignacy Daszyński", "Woodrow Wilson"],
    answer: 0,
    explanation: "11 listopada 1918 r. Józef Piłsudski przejął władzę nad wojskiem; dzień ten uznaje się za datę odzyskania niepodległości przez Polskę.",
    image: "r03_rozbrajanie_niemcow.jpg"
  },
  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile godzin świecił pierwszy egzemplarz żarówki Edisona?",
    options: ["40 godzin", "12 godzin", "24 godziny", "72 godziny", "100 godzin", "6 godzin"],
    answer: 0,
    explanation: "Pierwszy egzemplarz żarówki Edisona świecił czterdzieści godzin."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "riddle",
    prompt: "Pierwsza londyńska linia szybkiej kolei podziemnej otwarta w 1863 r. nosiła nazwę...",
    options: null,
    answer: "Metropolitan Railway",
    altAnswers: ["Metropolitan Railway", "Metropolitan"],
    explanation: "Pierwszą linię szybkiej kolei podziemnej w Londynie nazwano Metropolitan Railway; początkowo wagony ciągnęły lokomotywy parowe."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który budynek w Nowym Jorku jest przykładem wczesnego drapacza chmur?",
    options: ["The Flatiron Building", "Empire State Building", "Chrysler Building", "World Trade Center", "Brooklyn Bridge", "Metropolitan Railway"],
    answer: 0,
    explanation: "The Flatiron Building, wybudowany w 1902 r. w Nowym Jorku, był jednym z rozpoznawalnych symboli miasta."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz rok z wydarzeniem lub wynalazkiem.",
    options: null,
    left: ["1866", "1869", "1884", "1898"],
    right: ["odkrycie polonu i radu", "opracowanie układu okresowego pierwiastków", "wynalezienie dynamitu", "karabin maszynowy Hirama Maxima"],
    answer: {
      "1866": "wynalezienie dynamitu",
      "1869": "opracowanie układu okresowego pierwiastków",
      "1884": "karabin maszynowy Hirama Maxima",
      "1898": "odkrycie polonu i radu"
    },
    explanation: "Tabela odkryć i wynalazków łączy 1866 r. z dynamitem, 1869 r. z układem okresowym, 1884 r. z karabinem maszynowym, a 1898 r. z polonem i radem."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Pierwszy publiczny pokaz filmowy odbył się pod koniec __________ r., a pierwsze nowożytne igrzyska olimpijskie zorganizowano w Atenach w __________ r.",
    options: null,
    answer: ["1895", "1896"],
    altAnswers: [
      ["1895", "1895 r."],
      ["1896", "1896 r."]
    ],
    explanation: "Kino narodziło się po pokazie braci Lumiere w 1895 r., a nowożytne igrzyska olimpijskie rozpoczęły się w Atenach w 1896 r."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu manifestantów zginęło podczas krwawej niedzieli w Petersburgu?",
    options: ["Blisko tysiąc", "Około pięćdziesięciu", "Ponad dziesięć tysięcy", "Dokładnie 128", "Trzystu żołnierzy", "Siedem milionów"],
    answer: 0,
    explanation: "W styczniu 1905 r. wojsko zmasakrowało pokojową demonstrację w Petersburgu; zginęło blisko tysiąc manifestantów."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz żądania robotników w Królestwie Polskim na przełomie stycznia i lutego 1905 r.",
    options: ["Reformy polityczne", "Ośmiogodzinny dzień pracy", "Podwyżki płac", "Przyłączenie Tunezji do Włoch", "Zbudowanie radiotelegrafu"],
    answer: [0, 1, 2],
    explanation: "Strajkujący robotnicy domagali się reform politycznych, ośmiogodzinnego dnia pracy i podwyżki płac."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia z rewolucji w Rosji i wojny domowej w kolejności chronologicznej.",
    options: null,
    items: ["Powstanie Czerwonej Armii", "Abdykacja Mikołaja II", "Przewrót bolszewicki w Piotrogrodzie", "Rozstrzygnięcie wojny domowej przez Armię Czerwoną"],
    answer: ["Abdykacja Mikołaja II", "Przewrót bolszewicki w Piotrogrodzie", "Powstanie Czerwonej Armii", "Rozstrzygnięcie wojny domowej przez Armię Czerwoną"],
    explanation: "Mikołaj II abdykował w marcu 1917 r., bolszewicy przejęli władzę w październiku 1917 r., Czerwoną Armię utworzono w styczniu 1918 r., a wojna domowa zakończyła się zwycięstwem bolszewików do 1922 r."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "true_false",
    prompt: "W październiku 1918 r. na froncie zachodnim pozostało 2,5 mln żołnierzy niemieckich.",
    options: null,
    answer: true,
    explanation: "Pod koniec wojny Niemcy mieli na froncie zachodnim 2,5 mln żołnierzy, ale ustępowali entencie liczebnie i sprzętowo."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj polskie ośrodki władzy z 1918 r. do miejsc działania.",
    options: null,
    items: ["Rada Regencyjna", "Polska Komisja Likwidacyjna", "Naczelna Rada Ludowa", "Tymczasowy Rząd Ludowy Republiki Polskiej"],
    categories: ["Warszawa", "Kraków", "Poznań", "Lublin"],
    answer: {
      "Warszawa": ["Rada Regencyjna"],
      "Kraków": ["Polska Komisja Likwidacyjna"],
      "Poznań": ["Naczelna Rada Ludowa"],
      "Lublin": ["Tymczasowy Rząd Ludowy Republiki Polskiej"]
    },
    explanation: "Rada Regencyjna działała w Warszawie, Polska Komisja Likwidacyjna w Krakowie, Naczelna Rada Ludowa w Poznaniu, a rząd Daszyńskiego w Lublinie."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "riddle",
    prompt: "Paryski Komitet Narodowy Polski był uznawany przez państwa ententy za reprezentanta powstającego państwa polskiego. Przewodniczył mu...",
    options: null,
    answer: "Roman Dmowski",
    altAnswers: ["Roman Dmowski", "Dmowski"],
    explanation: "Komitet Narodowy Polski w Paryżu przewodniczony przez Romana Dmowskiego był ważnym ośrodkiem politycznym polskiej sprawy za granicą."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kiedy odbyły się wybory do Sejmu Ustawodawczego odrodzonej Polski?",
    options: ["26 stycznia 1919 r.", "11 listopada 1918 r.", "5 listopada 1916 r.", "7 października 1918 r.", "15 marca 1917 r.", "28 czerwca 1914 r."],
    answer: 0,
    explanation: "Pod koniec listopada 1918 r. ogłoszono, że wybory do Sejmu Ustawodawczego odbędą się 26 stycznia 1919 r."
  }
];

const KID_PROMPTS = {
  R03_WYN_01: "Kiedy była druga rewolucja przemysłowa?",
  R03_WYN_03: "Połącz wynalazki z wynalazcami.",
  R03_KUL_04: "Czy kultura masowa była tylko dla bogatych?",
  R03_POL_02: "Jakie są cztery zasady dobrych wyborów?",
  R03_SOJ_01: "Jakie państwa były w trójprzymierzu?",
  R03_WOJ_01: "Co bezpośrednio rozpoczęło I wojnę światową?",
  R03_WOJ_10: "Kto przejął władzę nad wojskiem 11 listopada 1918 r.?"
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Przełom XIX i XX wieku. I wojna światowa",
  icon: "🌍",
  sectionOrder: [
    "Wynalazki i przemiany codzienności",
    "Kultura masowa i obyczaje",
    "Polityka masowa i ruchy polskie",
    "Sojusze i orientacje przed wojną",
    "I wojna światowa i niepodległość"
  ],
  sectionIcons: {
    "Wynalazki i przemiany codzienności": "💡",
    "Kultura masowa i obyczaje": "🎬",
    "Polityka masowa i ruchy polskie": "🗳️",
    "Sojusze i orientacje przed wojną": "🤝",
    "I wojna światowa i niepodległość": "🎖️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
