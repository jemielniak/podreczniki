// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MOC  = Rywalizacja mocarstw i zbrojny pokój
//   WYB  = Wybuch wojny i fronty
//   ROS  = Dwie rewolucje w Rosji
//   KLE  = Klęska państw centralnych i skutki wojny
//   POL  = Polacy i sprawa polska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_MOC_01",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "single_choice",
    prompt: "Które wydarzenie z 1871 r. naruszyło zasadę równowagi sił w Europie?",
    options: ["Zjednoczenie Niemiec", "Utworzenie ententy", "Wybuch rewolucji w Rosji", "Koronacja cara Mikołaja II", "Powstanie Jugosławii", "Podpisanie pokoju brzeskiego"],
    answer: 0,
    explanation: "Zjednoczenie Niemiec stworzyło nowe, militarystyczne państwo, które stało się największą potęgą lądową Europy."
  },
  {
    id: "R03_MOC_02",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "true_false",
    prompt: "Niemcy domagały się na przełomie XIX i XX w. kolonii, czyli swojego miejsca pod słońcem.",
    options: null,
    answer: true,
    explanation: "Rzesza Niemiecka chciała kolonii i rywalizowała z mocarstwami o wpływy, surowce oraz rynki zbytu."
  },
  {
    id: "R03_MOC_03",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "multi_select",
    prompt: "Zaznacz spory, które były pośrednimi przyczynami wybuchu I wojny światowej.",
    options: ["Rywalizacja o kolonie i rynki zbytu", "Francuskie dążenie do odzyskania Alzacji i części Lotaryngii", "Rosyjskie plany opanowania cieśnin czarnomorskich", "Spór o koronę cesarską Karola Wielkiego", "Sprzeczne interesy Rosji i Austro-Węgier na Bałkanach"],
    answer: [0, 1, 2, 4],
    explanation: "Do pośrednich przyczyn I wojny światowej należały rywalizacja kolonialna, spór o Alzację i Lotaryngię, rosyjskie ambicje dotyczące cieśnin oraz konflikt interesów na Bałkanach."
  },
  {
    id: "R03_MOC_04",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "riddle",
    prompt: "Obszar Europy określany jako punkt zapalny, gdzie krzyżowały się interesy Rosji i Austro-Węgier, to...",
    options: null,
    answer: "Bałkany",
    altAnswers: ["Bałkany", "Półwysep Bałkański", "Balkany"],
    image: "r03_balkanski_kociol.jpg",
    explanation: "Bałkany były miejscem napięć między Rosją wspierającą Serbię a Austro-Węgrami obawiającymi się ruchów południowosłowiańskich."
  },
  {
    id: "R03_MOC_05",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "match",
    prompt: "Połącz sojusz z państwami, które go utworzyły.",
    options: null,
    left: ["Trójprzymierze", "Trójporozumienie", "Blok państw centralnych"],
    right: ["Niemcy, Austro-Węgry i Włochy", "Francja, Wielka Brytania i Rosja", "Niemcy i Austro-Węgry po odejściu Włoch"],
    answer: {
      "Trójprzymierze": "Niemcy, Austro-Węgry i Włochy",
      "Trójporozumienie": "Francja, Wielka Brytania i Rosja",
      "Blok państw centralnych": "Niemcy i Austro-Węgry po odejściu Włoch"
    },
    image: "r03_mapa_sojuszy_1914.jpg",
    explanation: "Trójprzymierze zawarto w 1882 r., trójporozumienie w 1907 r., a po odstąpieniu Włoch od trójprzymierza mówiono o państwach centralnych."
  },
  {
    id: "R03_MOC_06",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "fill_in",
    prompt: "Sojusz Francji, Wielkiej Brytanii i Rosji nazywano __________.",
    options: null,
    answer: ["ententą"],
    altAnswers: [["ententą", "ententa", "trójporozumieniem", "trojporozumieniem"]],
    explanation: "Trójporozumienie określano też jako ententę, od francuskiego zwrotu oznaczającego serdeczne porozumienie."
  },
  {
    id: "R03_MOC_07",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Niemcy, Austro-Węgry, Włochy, Rosja.",
    options: null,
    answer: "Rosja",
    explanation: "Niemcy, Austro-Węgry i Włochy tworzyły trójprzymierze, natomiast Rosja należała do trójporozumienia."
  },
  {
    id: "R03_MOC_08",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "scenario",
    prompt: "Jesteś brytyjskim politykiem na początku XX w. Obawiasz się, że nowe europejskie mocarstwo zagrozi twojej przewadze na morzach i rynkach świata. Którego państwa najbardziej dotyczy ten niepokój?",
    options: ["Niemiec", "Serbii", "Czarnogóry", "Belgii", "Szwajcarii", "Grecji"],
    answer: 0,
    explanation: "Wielka Brytania sprzeciwiała się niemieckiej konkurencji kolonialnej, gospodarczej i morskiej."
  },
  {
    id: "R03_MOC_09",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "sort",
    prompt: "Przyporządkuj państwa do bloków polityczno-wojskowych sprzed wojny.",
    options: null,
    items: ["Niemcy", "Austro-Węgry", "Francja", "Wielka Brytania", "Rosja", "Włochy"],
    categories: ["trójprzymierze", "trójporozumienie"],
    answer: {
      "trójprzymierze": ["Niemcy", "Austro-Węgry", "Włochy"],
      "trójporozumienie": ["Francja", "Wielka Brytania", "Rosja"]
    },
    explanation: "Trójprzymierze łączyło Niemcy, Austro-Węgry i Włochy, a trójporozumienie Francję, Wielką Brytanię i Rosję."
  },
  {
    id: "R03_MOC_10",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "single_choice",
    prompt: "Co oznaczało określenie państwo militarystyczne użyte wobec Niemiec?",
    options: ["Państwo, w którym wojsko decyduje o polityce", "Państwo bez armii lądowej", "Państwo neutralne w każdym konflikcie", "Państwo rządzone wyłącznie przez parlament", "Państwo odrzucające wyścig zbrojeń", "Państwo zależne od kolonii"],
    answer: 0,
    explanation: "Państwo militarystyczne to państwo, w którym wojsko ma decydujący wpływ na politykę."
  },
  {
    id: "R03_MOC_11",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Zawarcie trójporozumienia", "Zawarcie trójprzymierza", "Zjednoczenie Niemiec", "Zamach w Sarajewie"],
    answer: ["Zjednoczenie Niemiec", "Zawarcie trójprzymierza", "Zawarcie trójporozumienia", "Zamach w Sarajewie"],
    explanation: "Kolejność to: 1871 r. zjednoczenie Niemiec, 1882 r. trójprzymierze, 1907 r. trójporozumienie, 1914 r. zamach w Sarajewie."
  },
  {
    id: "R03_MOC_12",
    section: "Rywalizacja mocarstw i zbrojny pokój",
    type: "single_choice",
    prompt: "Dlaczego sytuację w Europie przed 1914 r. nazwano zbrojnym pokojem?",
    options: ["Mocarstwa nie walczyły jeszcze ze sobą, ale intensywnie przygotowywały się do wojny", "Wszystkie państwa rozwiązały armie i podpisały pokój", "Tylko państwa neutralne prowadziły zbrojenia", "Wojna ograniczała się do kolonii poza Europą", "Mocarstwa zawarły jeden wspólny sojusz", "Spory rozstrzygano wyłącznie w sądach"],
    answer: 0,
    explanation: "Europejskie mocarstwa nie potrafiły rozwiązać sporów pokojowo, więc rozbudowywały armie i floty."
  },
  {
    id: "R03_WYB_01",
    section: "Wybuch wojny i fronty",
    type: "single_choice",
    prompt: "Kto został zastrzelony w Sarajewie 28 czerwca 1914 r.?",
    options: ["Arcyksiążę Franciszek Ferdynand", "Car Mikołaj II", "Cesarz Wilhelm II", "Józef Piłsudski", "Roman Dmowski", "Woodrow Wilson"],
    answer: 0,
    image: "r03_zamach_w_sarajewie.jpg",
    explanation: "Serbski zamachowiec zastrzelił następcę tronu Austro-Węgier, arcyksięcia Franciszka Ferdynanda."
  },
  {
    id: "R03_WYB_02",
    section: "Wybuch wojny i fronty",
    type: "fill_in",
    prompt: "Bezpośrednią przyczyną wybuchu I wojny światowej był zamach w __________.",
    options: null,
    answer: ["Sarajewie"],
    altAnswers: [["Sarajewie", "Sarajewo"]],
    explanation: "Zamach w Sarajewie stał się iskrą, która uruchomiła konflikt między sojuszami."
  },
  {
    id: "R03_WYB_03",
    section: "Wybuch wojny i fronty",
    type: "true_false",
    prompt: "Austro-Węgry wypowiedziały wojnę Serbii 28 lipca 1914 r.",
    options: null,
    answer: true,
    explanation: "Po ultimatum dla Serbii Austro-Węgry wypowiedziały jej wojnę 28 lipca 1914 r."
  },
  {
    id: "R03_WYB_04",
    section: "Wybuch wojny i fronty",
    type: "sequence",
    prompt: "Ułóż wydarzenia z początku wojny w kolejności chronologicznej.",
    options: null,
    items: ["Rozpoczęcie wojny pozycyjnej na Zachodzie", "Austro-Węgry wypowiadają wojnę Serbii", "Zamach w Sarajewie", "Niemcy atakują Francję przez Belgię", "Bitwa nad Marną"],
    answer: ["Zamach w Sarajewie", "Austro-Węgry wypowiadają wojnę Serbii", "Niemcy atakują Francję przez Belgię", "Bitwa nad Marną", "Rozpoczęcie wojny pozycyjnej na Zachodzie"],
    explanation: "Najpierw doszło do zamachu, potem Austro-Węgry wypowiedziały wojnę Serbii, Niemcy uderzyli przez Belgię, po bitwie nad Marną front zachodni ustabilizował się."
  },
  {
    id: "R03_WYB_05",
    section: "Wybuch wojny i fronty",
    type: "scenario",
    prompt: "Niemiecki sztab chce szybko pokonać Francję i uniknąć długiej wojny na dwa fronty. Przez które neutralne państwo prowadzi główne uderzenie?",
    options: ["Belgię", "Szwajcarię", "Hiszpanię", "Szwecję", "Grecję", "Holandię"],
    answer: 0,
    explanation: "Armia niemiecka wtargnęła do neutralnej Belgii, aby z jej terytorium zaatakować Francję."
  },
  {
    id: "R03_WYB_06",
    section: "Wybuch wojny i fronty",
    type: "match",
    prompt: "Połącz grupę państw z jej blokiem podczas wojny.",
    options: null,
    left: ["Niemcy i Austro-Węgry", "Francja, Wielka Brytania i Rosja"],
    right: ["państwa centralne", "ententa"],
    answer: {
      "Niemcy i Austro-Węgry": "państwa centralne",
      "Francja, Wielka Brytania i Rosja": "ententa"
    },
    image: "r03_mapa_sojuszy_1914.jpg",
    explanation: "Niemcy i Austro-Węgry należały do państw centralnych, natomiast Francja, Wielka Brytania i Rosja tworzyły trzon ententy."
  },
  {
    id: "R03_WYB_07",
    section: "Wybuch wojny i fronty",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Belgia, Francja, front zachodni, Piotrogród.",
    options: null,
    answer: "Piotrogród",
    explanation: "Belgia, Francja i front zachodni dotyczą działań Niemców na Zachodzie, a Piotrogród wiąże się z Rosją."
  },
  {
    id: "R03_WYB_08",
    section: "Wybuch wojny i fronty",
    type: "multi_select",
    prompt: "Zaznacz elementy, które wyjaśniają, dlaczego zamach w Sarajewie wywołał tak poważny kryzys.",
    options: ["Zabito następcę tronu Austro-Węgier", "Austro-Węgry podejrzewały udział Serbii", "Serbia była związana z napięciami na Bałkanach", "Belgia sama wypowiedziała wojnę Rosji", "Niemcy poparły Austro-Węgry"],
    answer: [0, 1, 2, 4],
    image: "r03_zamach_w_sarajewie.jpg",
    explanation: "Zamach uderzył w Austro-Węgry, które podejrzewały Serbię i miały poparcie Niemiec, a Bałkany już wcześniej były punktem zapalnym."
  },
  {
    id: "R03_WYB_09",
    section: "Wybuch wojny i fronty",
    type: "single_choice",
    prompt: "Jaki charakter miały walki na froncie zachodnim od jesieni 1914 r.?",
    options: ["Wojny pozycyjnej", "Wojny morskiej bez bitew lądowych", "Walk partyzanckich", "Wojny domowej", "Krótkiej kampanii kolonialnej", "Wojny wyłącznie lotniczej"],
    answer: 0,
    image: "r03_okopy_front_zachodni.jpg",
    explanation: "Po zatrzymaniu Niemców nad Marną ustaliła się linia frontu, a wojna pozycyjna na Zachodzie trwała do 1918 r."
  },
  {
    id: "R03_WYB_10",
    section: "Wybuch wojny i fronty",
    type: "riddle",
    prompt: "Bitwa, po której Niemcy musieli cofnąć się spod okolic Paryża, to bitwa nad...",
    options: null,
    answer: "Marną",
    altAnswers: ["Marną", "Marna", "nad Marną", "Marną"],
    explanation: "Po bitwie nad Marną niemieckie natarcie na Zachodzie zostało zatrzymane."
  },
  {
    id: "R03_WYB_11",
    section: "Wybuch wojny i fronty",
    type: "single_choice",
    prompt: "Dlaczego Wielka Brytania wystąpiła przeciwko Niemcom po ich ataku na Francję?",
    options: ["W obronie Belgii, której neutralność naruszyły Niemcy", "Ponieważ Serbia zaatakowała Londyn", "Aby poprzeć Austro-Węgry", "Ponieważ Rosja wystąpiła z ententy", "Aby odzyskać Alzację", "Aby zakończyć rewolucję w Piotrogrodzie"],
    answer: 0,
    explanation: "Niemcy wtargnęły do neutralnej Belgii, a Wielka Brytania wystąpiła przeciw nim w jej obronie."
  },
  {
    id: "R03_WYB_12",
    section: "Wybuch wojny i fronty",
    type: "true_false",
    prompt: "Już w pierwszych dniach sierpnia 1914 r. kilka europejskich potęg znalazło się w stanie wojny.",
    options: null,
    answer: true,
    explanation: "System sojuszy sprawił, że lokalny konflikt Austro-Węgier z Serbią szybko objął kolejne mocarstwa."
  },
  {
    id: "R03_ROS_01",
    section: "Dwie rewolucje w Rosji",
    type: "single_choice",
    prompt: "Dlaczego Rosję na początku XX w. nazwano kolosem na glinianych nogach?",
    options: ["Miała ambicje mocarstwowe, ale była wewnętrznie słaba i zacofana", "Nie posiadała żadnej armii", "Była najmniejszym państwem Europy", "Nie brała udziału w wojnie z Japonią", "Była całkowicie uprzemysłowiona", "Nie miała mniejszości narodowych"],
    answer: 0,
    explanation: "Rosja miała wielkie ambicje, lecz osłabiały ją samowładztwo, zacofanie gospodarcze, zła administracja i bunty mniejszości."
  },
  {
    id: "R03_ROS_02",
    section: "Dwie rewolucje w Rosji",
    type: "multi_select",
    prompt: "Zaznacz problemy Rosji w początkach XX w.",
    options: ["Samowładne rządy cara", "Zacofanie gospodarcze", "Nieudolna administracja", "Bunty mniejszości narodowych", "Brak ambicji mocarstwowych"],
    answer: [0, 1, 2, 3],
    explanation: "Do problemów Rosji należały samowładztwo, zacofanie, zła administracja i buntujące się mniejszości narodowe."
  },
  {
    id: "R03_ROS_03",
    section: "Dwie rewolucje w Rosji",
    type: "fill_in",
    prompt: "Po rewolucji 1905 roku car Mikołaj II ustanowił __________, czyli parlament o niewielkich uprawnieniach.",
    options: null,
    answer: ["Dumę"],
    altAnswers: [["Dumę", "Duma", "dumę"]],
    explanation: "Duma była najważniejszą z ograniczonych reform po rewolucji 1905 r., ale miała niewielkie uprawnienia."
  },
  {
    id: "R03_ROS_04",
    section: "Dwie rewolucje w Rosji",
    type: "scenario",
    prompt: "Jest sierpień 1914 r. Rosyjskie oddziały ruszają przeciw Niemcom i otwierają front wschodni. W jakim regionie rozpoczynają atak?",
    options: ["W Prusach Wschodnich", "W Belgii", "Nad Sommą", "W Galicji Zachodniej", "W Holandii", "Pod Verdun"],
    answer: 0,
    image: "r03_front_wschodni_mapa.jpg",
    explanation: "Rosjanie zaatakowali Niemców w Prusach Wschodnich, co otworzyło front wschodni."
  },
  {
    id: "R03_ROS_05",
    section: "Dwie rewolucje w Rosji",
    type: "true_false",
    prompt: "Wojna na froncie wschodnim miała charakter manewrowy, bo trudno było tam utworzyć stałą linię frontu.",
    options: null,
    answer: true,
    explanation: "Na ogromnych przestrzeniach Rosji trudno było zbudować linie umocnień i utrzymać stały front."
  },
  {
    id: "R03_ROS_06",
    section: "Dwie rewolucje w Rosji",
    type: "match",
    prompt: "Połącz wydarzenie z datą.",
    options: null,
    left: ["Wojna rosyjsko-japońska", "Zajęcie Warszawy przez Niemców", "Ofensywa Brusiłowa", "Pokój brzeski"],
    right: ["1904-1905", "1915", "1916", "1918"],
    answer: {
      "Wojna rosyjsko-japońska": "1904-1905",
      "Zajęcie Warszawy przez Niemców": "1915",
      "Ofensywa Brusiłowa": "1916",
      "Pokój brzeski": "1918"
    },
    image: "r03_front_wschodni_mapa.jpg",
    explanation: "Te daty porządkują drogę Rosji od klęski z Japonią przez działania wojenne do wyjścia z wojny."
  },
  {
    id: "R03_ROS_07",
    section: "Dwie rewolucje w Rosji",
    type: "single_choice",
    prompt: "Co zapoczątkowało rewolucję lutową w 1917 r.?",
    options: ["Strajk w Piotrogrodzie", "Bitwa nad Sommą", "Akt 5 listopada", "Rozejm w Compiegne", "Zajęcie Pałacu Zimowego w 1918 r.", "Deklaracja wersalska"],
    answer: 0,
    explanation: "3 marca 1917 r. w Piotrogrodzie wybuchł strajk, który zapoczątkował rewolucję lutową."
  },
  {
    id: "R03_ROS_08",
    section: "Dwie rewolucje w Rosji",
    type: "single_choice",
    prompt: "Dlaczego Niemcy umożliwili Leninowi powrót do Rosji?",
    options: ["Liczyli, że obali Rząd Tymczasowy i wyeliminuje Rosję z wojny", "Chcieli wzmocnić armię rosyjską", "Zamierzali poprzeć cara Mikołaja II", "Próbowali ocalić trójporozumienie", "Chcieli utworzyć Dumę", "Planowali zdobycie Verdun"],
    answer: 0,
    image: "r03_lenin_pociag.jpg",
    explanation: "Niemieckie dowództwo sądziło, że Lenin osłabi Rosję od wewnątrz i doprowadzi do jej wyjścia z wojny."
  },
  {
    id: "R03_ROS_09",
    section: "Dwie rewolucje w Rosji",
    type: "sort",
    prompt: "Przyporządkuj hasła i decyzje do stron konfliktu politycznego po rewolucji lutowej.",
    options: null,
    items: ["Kontynuowanie wojny", "Odkładanie reformy rolnej", "Żądanie pokoju", "Rozdanie ziemi chłopom", "Obsadzenie rad bolszewikami"],
    categories: ["Rząd Tymczasowy", "bolszewicy"],
    answer: {
      "Rząd Tymczasowy": ["Kontynuowanie wojny", "Odkładanie reformy rolnej"],
      "bolszewicy": ["Żądanie pokoju", "Rozdanie ziemi chłopom", "Obsadzenie rad bolszewikami"]
    },
    image: "r03_lenin_pociag.jpg",
    explanation: "Rząd Tymczasowy chciał dalej prowadzić wojnę i odłożył reformę rolną, a Lenin zdobywał poparcie hasłami pokoju i ziemi."
  },
  {
    id: "R03_ROS_10",
    section: "Dwie rewolucje w Rosji",
    type: "riddle",
    prompt: "System, w którym część mieszkańców Rosji była posłuszna Rządowi Tymczasowemu, a część radom delegatów, nazwano...",
    options: null,
    answer: "dwuwładzą",
    altAnswers: ["dwuwładzą", "dwuwładza", "dwuwladza"],
    explanation: "Po rewolucji lutowej obok Rządu Tymczasowego duże wpływy zdobyły rady delegatów robotniczych i żołnierskich."
  },
  {
    id: "R03_ROS_11",
    section: "Dwie rewolucje w Rosji",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Lenin, bolszewicy, Rząd Tymczasowy, rewolucja październikowa.",
    options: null,
    answer: "Rząd Tymczasowy",
    explanation: "Lenin i bolszewicy przeprowadzili rewolucję październikową przeciw Rządowi Tymczasowemu."
  },
  {
    id: "R03_ROS_12",
    section: "Dwie rewolucje w Rosji",
    type: "multi_select",
    prompt: "Zaznacz skutki przejęcia władzy przez bolszewików.",
    options: ["Powstanie Rosji Radzieckiej", "Wydanie dekretów o pokoju i o ziemi", "Podpisanie pokoju brzeskiego", "Natychmiastowe wzmocnienie ententy przez Rosję", "Wybuch wojny domowej w Rosji"],
    answer: [0, 1, 2, 4],
    explanation: "Po zwycięstwie bolszewików powstała Rosja Radziecka, wydano dekrety o pokoju i ziemi, zawarto pokój brzeski i rozpoczęła się wojna domowa."
  },
  {
    id: "R03_KLE_01",
    section: "Klęska państw centralnych i skutki wojny",
    type: "multi_select",
    prompt: "Zaznacz przyczyny wojny pozycyjnej na froncie zachodnim.",
    options: ["Wyrównane siły przeciwników", "Przewaga obrony dzięki bunkrom, zasiekom i karabinom maszynowym", "Całkowity brak artylerii", "Łatwość obchodzenia okopów przez kawalerię", "Ustalenie długiej linii frontu przez Belgię i Francję"],
    answer: [0, 1, 4],
    image: "r03_okopy_front_zachodni.jpg",
    explanation: "Na Zachodzie front ustabilizował się, a technika wojskowa dawała przewagę obronie, co sprzyjało wojnie pozycyjnej."
  },
  {
    id: "R03_KLE_02",
    section: "Klęska państw centralnych i skutki wojny",
    type: "single_choice",
    prompt: "Która bitwa została nazwana piekłem Verdun?",
    options: ["Bitwa o francuską twierdzę Verdun w 1916 r.", "Bitwa o Warszawę w 1915 r.", "Walki uliczne w Piotrogrodzie", "Bitwa pod Sadową", "Bitwa morska U-Bootów z konwojami", "Zajęcie Pałacu Zimowego"],
    answer: 0,
    image: "r03_bitwa_verdun.jpg",
    explanation: "Bitwa pod Verdun trwała z przerwami 10 miesięcy i pochłonęła setki tysięcy ofiar."
  },
  {
    id: "R03_KLE_03",
    section: "Klęska państw centralnych i skutki wojny",
    type: "true_false",
    prompt: "Bitwa nad Sommą zakończyła się szybkim i rozstrzygającym zwycięstwem Brytyjczyków.",
    options: null,
    answer: false,
    explanation: "Ofensywa nad Sommą trwała od czerwca do listopada 1916 r., przyniosła ogromne straty i nie dała rozstrzygnięcia."
  },
  {
    id: "R03_KLE_04",
    section: "Klęska państw centralnych i skutki wojny",
    type: "single_choice",
    prompt: "Czym były U-Booty?",
    options: ["Niemieckimi okrętami podwodnymi", "Brytyjskimi czołgami", "Francuskimi działami kolejowymi", "Rosyjskimi oddziałami kawalerii", "Amerykańskimi samolotami", "Austriackimi umocnieniami"],
    answer: 0,
    image: "r03_uboot.jpg",
    explanation: "U-Booty były niemieckimi okrętami podwodnymi używanymi do zwalczania statków handlowych ententy."
  },
  {
    id: "R03_KLE_05",
    section: "Klęska państw centralnych i skutki wojny",
    type: "scenario",
    prompt: "Jest luty 1917 r. Niemcy chcą odciąć Wielką Brytanię od zaopatrzenia z zewnątrz i każą atakować bez ostrzeżenia statki płynące do portów ententy. Jak nazwano tę decyzję?",
    options: ["Nieograniczoną wojną podwodną", "Dziką demobilizacją", "Kryzysem przysięgowym", "Dekretem o pokoju", "Planem Schlieffena", "Deklaracją wersalską"],
    answer: 0,
    explanation: "Nieograniczona wojna podwodna miała przerwać dostawy dla Wielkiej Brytanii, ale przyczyniła się do wejścia USA do wojny."
  },
  {
    id: "R03_KLE_06",
    section: "Klęska państw centralnych i skutki wojny",
    type: "fill_in",
    prompt: "Stany Zjednoczone wypowiedziały wojnę Niemcom w kwietniu __________ roku.",
    options: null,
    answer: ["1917"],
    altAnswers: [["1917", "1917 r."]],
    explanation: "W kwietniu 1917 r. USA przystąpiły do wojny po zatopieniu przez U-Booty kilku amerykańskich statków handlowych."
  },
  {
    id: "R03_KLE_07",
    section: "Klęska państw centralnych i skutki wojny",
    type: "match",
    prompt: "Połącz wydarzenie z jego skutkiem.",
    options: null,
    left: ["Pokój brzeski", "Wejście USA do wojny", "Czarny dzień armii niemieckiej", "Rewolucja w Berlinie"],
    right: ["Przestał istnieć front wschodni", "Ententa otrzymała żołnierzy i dostawy", "Czołgi przełamały linię frontu", "Wilhelm II abdykował"],
    answer: {
      "Pokój brzeski": "Przestał istnieć front wschodni",
      "Wejście USA do wojny": "Ententa otrzymała żołnierzy i dostawy",
      "Czarny dzień armii niemieckiej": "Czołgi przełamały linię frontu",
      "Rewolucja w Berlinie": "Wilhelm II abdykował"
    },
    explanation: "Te wydarzenia pokazują, jak przewaga stopniowo przechodziła na stronę aliantów."
  },
  {
    id: "R03_KLE_08",
    section: "Klęska państw centralnych i skutki wojny",
    type: "single_choice",
    prompt: "Kiedy nowy rząd Niemiec podpisał rozejm z aliantami?",
    options: ["11 listopada 1918 r.", "28 czerwca 1914 r.", "5 listopada 1916 r.", "3 marca 1917 r.", "8 sierpnia 1918 r.", "W czerwcu 1917 r."],
    answer: 0,
    explanation: "Rozejm z aliantami podpisano 11 listopada 1918 r.; tego dnia I wojna światowa dobiegła końca."
  },
  {
    id: "R03_KLE_09",
    section: "Klęska państw centralnych i skutki wojny",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: czołgi, samoloty, U-Booty, akt 5 listopada.",
    options: null,
    answer: "akt 5 listopada",
    explanation: "Czołgi, samoloty i U-Booty to środki techniczne lub rodzaje broni I wojny światowej, a akt 5 listopada dotyczył sprawy polskiej."
  },
  {
    id: "R03_KLE_10",
    section: "Klęska państw centralnych i skutki wojny",
    type: "riddle",
    prompt: "Francuska twierdza, której Niemcy nie zdobyli mimo wielomiesięcznej bitwy w 1916 r., to...",
    options: null,
    answer: "Verdun",
    altAnswers: ["Verdun", "twierdza Verdun"],
    image: "r03_bitwa_verdun.jpg",
    explanation: "Niemcy chcieli wykrwawić przeciwnika pod Verdun, ale nie zdołali zdobyć twierdzy."
  },
  {
    id: "R03_KLE_11",
    section: "Klęska państw centralnych i skutki wojny",
    type: "multi_select",
    prompt: "Zaznacz skutki I wojny światowej.",
    options: ["Prawie 10 milionów poległych żołnierzy", "Około 20 milionów rannych żołnierzy", "Poprawa położenia kobiet w wielu państwach", "Powstanie 11 nowych państw w Europie", "Utrzymanie cesarstwa w Niemczech"],
    answer: [0, 1, 2, 3],
    explanation: "Wojna przyniosła ogromne straty, zmiany społeczne i polityczne, a Niemcy stały się republiką."
  },
  {
    id: "R03_KLE_12",
    section: "Klęska państw centralnych i skutki wojny",
    type: "sort",
    prompt: "Przyporządkuj skutki wojny do kategorii.",
    options: null,
    items: ["Prawie 10 milionów poległych żołnierzy", "Około 20 milionów rannych żołnierzy", "Kobiety zyskały więcej samodzielności", "W wielu państwach kobiety otrzymały prawa wyborcze", "Rozpad Austro-Węgier", "Powstanie Polski"],
    categories: ["straty ludzkie", "zmiany społeczne", "zmiany polityczne"],
    answer: {
      "straty ludzkie": ["Prawie 10 milionów poległych żołnierzy", "Około 20 milionów rannych żołnierzy"],
      "zmiany społeczne": ["Kobiety zyskały więcej samodzielności", "W wielu państwach kobiety otrzymały prawa wyborcze"],
      "zmiany polityczne": ["Rozpad Austro-Węgier", "Powstanie Polski"]
    },
    explanation: "Skutkami wojny były ogromne straty ludzkie, przemiany społeczne oraz zmiany na mapie politycznej Europy."
  },
  {
    id: "R03_POL_01",
    section: "Polacy i sprawa polska",
    type: "single_choice",
    prompt: "Dlaczego po wybuchu wojny mocarstwa rozbiorowe zaczęły zwracać większą uwagę na sprawę polską?",
    options: ["Front wschodni przebiegał przez ziemie polskie, a w armiach zaborczych służyli polscy rekruci", "Polska była już niepodległym sojusznikiem ententy", "Polacy kontrolowali wszystkie porty niemieckie", "Rosja zrezygnowała z armii", "Austro-Węgry przestały istnieć w 1914 r.", "USA natychmiast utworzyły Armię Polską"],
    answer: 0,
    explanation: "Postawa Polaków mogła wpływać na wynik walk, a zaborcy chcieli, by polscy żołnierze wierzyli, że walczą o wolną Polskę."
  },
  {
    id: "R03_POL_02",
    section: "Polacy i sprawa polska",
    type: "match",
    prompt: "Połącz orientację polityczną z jej przywódcą.",
    options: null,
    left: ["Orientacja proaustriacka", "Orientacja prorosyjska"],
    right: ["Józef Piłsudski", "Roman Dmowski"],
    answer: {
      "Orientacja proaustriacka": "Józef Piłsudski",
      "Orientacja prorosyjska": "Roman Dmowski"
    },
    explanation: "Piłsudski wiązał początkowo nadzieje z Austro-Węgrami, a Dmowski z Rosją i później z państwami zachodnimi."
  },
  {
    id: "R03_POL_03",
    section: "Polacy i sprawa polska",
    type: "fill_in",
    prompt: "Pierwsza Kompania Kadrowa wyruszyła z Krakowa 6 sierpnia __________ roku.",
    options: null,
    answer: ["1914"],
    altAnswers: [["1914", "1914 r."]],
    image: "r03_pierwsza_kompania_kadrowa.jpg",
    explanation: "Pierwsza Kompania Kadrowa ruszyła ku Królestwu Kongresowemu 6 sierpnia 1914 r."
  },
  {
    id: "R03_POL_04",
    section: "Polacy i sprawa polska",
    type: "scenario",
    prompt: "Piłsudski liczy na wywołanie powstania w Królestwie Kongresowym, ale ochotnicy się nie zgłaszają, a ludność odnosi się do strzelców niechętnie. Co robi z oddziałami?",
    options: ["Wycofuje je do Galicji i dołącza do Legionów Polskich", "Rozwiązuje je i przechodzi do armii rosyjskiej", "Wysyła je do Armii Polskiej we Francji", "Oddaje je pod rozkazy Rady Regencyjnej", "Przenosi je do USA", "Łączy je z Legionem Puławskim"],
    answer: 0,
    image: "r03_pierwsza_kompania_kadrowa.jpg",
    explanation: "Po nieudanej próbie wzniecenia powstania Piłsudski wycofał strzelców do Galicji i dołączył ich do Legionów Polskich."
  },
  {
    id: "R03_POL_05",
    section: "Polacy i sprawa polska",
    type: "true_false",
    prompt: "Legiony Polskie były zalążkiem polskiego wojska i przypominały Europie o dążeniu Polaków do własnego państwa.",
    options: null,
    answer: true,
    explanation: "Choć Legiony nie odegrały wielkiej roli w walkach milionowych armii, miały duże znaczenie polityczne i symboliczne."
  },
  {
    id: "R03_POL_06",
    section: "Polacy i sprawa polska",
    type: "single_choice",
    prompt: "Co zapowiadał akt 5 listopada z 1916 r.?",
    options: ["Utworzenie samodzielnej Polski na zdobytych ziemiach zaboru rosyjskiego", "Natychmiastową pełną niepodległość Polski w granicach z 1772 r.", "Rozwiązanie Legionów Polskich", "Utworzenie Rosji Radzieckiej", "Zawarcie pokoju brzeskiego", "Wejście USA do wojny"],
    answer: 0,
    explanation: "Akt 5 listopada niejasno zapowiadał samodzielną Polskę z własną armią, ale o ograniczonej samodzielności i nieokreślonych granicach."
  },
  {
    id: "R03_POL_07",
    section: "Polacy i sprawa polska",
    type: "multi_select",
    prompt: "Zaznacz konsekwencje aktu 5 listopada.",
    options: ["Wzrost międzynarodowego zainteresowania sprawą polską", "Zaniepokojenie Francji i Wielkiej Brytanii możliwością armii polskiej u boku Niemiec", "Natychmiastowe odzyskanie niepodległości przez Polskę", "Nacisk aliantów na Rosję, by zaoferowała Polakom lepsze warunki", "Powstanie Rosji Radzieckiej"],
    answer: [0, 1, 3],
    explanation: "Akt nie dał Polsce niepodległości, ale przywrócił sprawę polską do polityki międzynarodowej."
  },
  {
    id: "R03_POL_08",
    section: "Polacy i sprawa polska",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Józef Piłsudski, Roman Dmowski, Józef Haller, Włodzimierz Lenin.",
    options: null,
    answer: "Włodzimierz Lenin",
    explanation: "Piłsudski, Dmowski i Haller byli związani z polskimi działaniami niepodległościowymi, natomiast Lenin z rewolucją rosyjską."
  },
  {
    id: "R03_POL_09",
    section: "Polacy i sprawa polska",
    type: "single_choice",
    prompt: "Jak nazywano Armię Polską we Francji od koloru mundurów?",
    options: ["Błękitną armią", "Czerwoną armią", "Białą gwardią", "Pierwszą Kadrową", "Legionem Puławskim", "Radem Regencyjną"],
    answer: 0,
    image: "r03_armia_polska_we_francji.jpg",
    explanation: "Armię Polską we Francji nazywano błękitną armią od koloru mundurów."
  },
  {
    id: "R03_POL_10",
    section: "Polacy i sprawa polska",
    type: "riddle",
    prompt: "Generał, który jesienią 1918 r. został dowódcą Armii Polskiej we Francji, to Józef...",
    options: null,
    answer: "Haller",
    altAnswers: ["Haller", "Józef Haller", "Jozef Haller"],
    image: "r03_armia_polska_we_francji.jpg",
    explanation: "Jesienią 1918 r. dowódcą Armii Polskiej we Francji mianowano generała Józefa Hallera."
  },
  {
    id: "R03_POL_11",
    section: "Polacy i sprawa polska",
    type: "single_choice",
    prompt: "Na czym polegał kryzys przysięgowy z lipca 1917 r.?",
    options: ["Piłsudski polecił legionistom odmówić przysięgi na braterstwo broni z Niemcami i Austro-Węgrami", "Dmowski odmówił utworzenia Komitetu Narodowego Polskiego", "Haller odmówił dowodzenia błękitną armią", "Rada Regencyjna wypowiedziała wojnę Rosji", "USA odmówiły poparcia Polski", "Legion Puławski zajął Warszawę"],
    answer: 0,
    explanation: "Piłsudski zerwał z państwami centralnymi, wywołując odmowę złożenia przysięgi; został potem uwięziony w Magdeburgu."
  },
  {
    id: "R03_POL_12",
    section: "Polacy i sprawa polska",
    type: "single_choice",
    prompt: "Który punkt orędzia Woodrowa Wilsona dotyczył utworzenia niepodległej Polski z dostępem do morza?",
    options: ["Punkt 13.", "Punkt 1.", "Punkt 5.", "Punkt 8.", "Punkt 11.", "Punkt 14."],
    answer: 0,
    explanation: "W 13. punkcie orędzia Wilson przewidywał utworzenie niepodległej Polski ze swobodnym i bezpiecznym dostępem do morza."
  },
  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "O ile wzrosły wydatki wojskowe głównych państw Europy w pierwszych latach XX w.?",
    options: ["O 50%", "O 10%", "O 25%", "O 75%", "O 100%", "O 5%"],
    answer: 0,
    explanation: "W pierwszych latach XX w. wydatki wojskowe głównych państw Europy wzrosły o 50%."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu Słowian południowych żyło w Austro-Węgrzech?",
    options: ["Około 7 milionów", "Około 700 tysięcy", "Około 17 milionów", "Około 70 milionów", "Około 2,2 miliona", "Około 385 tysięcy"],
    answer: 0,
    image: "r03_balkanski_kociol.jpg",
    explanation: "Dążenia Serbii niepokoiły Austro-Węgry, ponieważ w monarchii żyło aż 7 milionów Słowian południowych."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Do 1914 r. Niemcy zwodowali __________ nowoczesnych okrętów, a Brytyjczycy 32.",
    options: null,
    answer: ["19"],
    altAnswers: [["19", "dziewiętnaście", "dziewietnascie"]],
    explanation: "W brytyjsko-niemieckim wyścigu zbrojeń morskich Niemcy zwodowali 19 nowoczesnych okrętów, a Brytyjczycy 32."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "true_false",
    prompt: "Po mobilizacji niemieckie wojska lądowe liczyły 3,8 miliona żołnierzy i ustępowały liczebnością jedynie armii rosyjskiej.",
    options: null,
    answer: true,
    explanation: "Po mobilizacji niemieckie wojska lądowe liczyły 3,8 miliona żołnierzy; liczniejsza była tylko armia rosyjska."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jakie rozmiary miał teren głównych walk pod Verdun?",
    options: ["Około 30 km długości i 10 km szerokości", "Około 300 km długości i 100 km szerokości", "Około 3 km długości i 1 km szerokości", "Około 600 km długości i 50 km szerokości", "Około 10 km długości i 30 km szerokości", "Około 100 km długości i 30 km szerokości"],
    answer: 0,
    explanation: "Walki pod Verdun toczyły się głównie na obszarze około 30 km długości i 10 km szerokości."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile czołgów przełamało linię frontu 8 sierpnia 1918 r.?",
    options: ["Ponad 600", "Około 60", "Dokładnie 32", "Około 19", "Prawie 5 milionów", "Około 70 tysięcy"],
    answer: 0,
    explanation: "8 sierpnia 1918 r. ponad 600 brytyjskich i francuskich czołgów przełamało linię frontu."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz liczbę z właściwą informacją.",
    options: null,
    left: ["2,2 miliona", "385 tysięcy", "70 tysięcy", "20 tysięcy"],
    right: ["Polscy rekruci w armiach zaborczych w latach 1914-1918", "Polscy rekruci polegli w armiach zaborczych", "Liczebność Armii Polskiej we Francji na początku 1919 r.", "Liczebność Legionów Polskich"],
    answer: {
      "2,2 miliona": "Polscy rekruci w armiach zaborczych w latach 1914-1918",
      "385 tysięcy": "Polscy rekruci polegli w armiach zaborczych",
      "70 tysięcy": "Liczebność Armii Polskiej we Francji na początku 1919 r.",
      "20 tysięcy": "Liczebność Legionów Polskich"
    },
    explanation: "Liczby odnoszą się do polskich żołnierzy w armiach zaborców, Legionach Polskich i Armii Polskiej we Francji."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jesteś niemieckim dyplomatą w 1917 r. Chcesz rozbić ententę przez osłabienie jej najsłabszego ogniwa. Które państwo uznawano za to ogniwo?",
    options: ["Rosja", "Wielka Brytania", "Francja", "Serbia", "Włochy", "Belgia"],
    answer: 0,
    explanation: "Raport sekretarza stanu niemieckiego MSZ wskazywał Rosję jako najsłabsze ogniwo wrogiego przymierza."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: aneksja, kontrybucja, pokój bez aneksji i kontrybucji, dzika demobilizacja.",
    options: null,
    answer: "dzika demobilizacja",
    explanation: "Aneksja, kontrybucja i hasło pokoju bez aneksji i kontrybucji dotyczą dekretu o pokoju, a dzika demobilizacja dotyczy rozpadu Austro-Węgier."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kto był jednym z członków Rady Regencyjnej?",
    options: ["Józef Ostrowski", "Aleksiej Brusiłow", "Franciszek Ferdynand", "Włodzimierz Lenin", "Józef Haller", "Gawriło Princip"],
    answer: 0,
    explanation: "W skład Rady Regencyjnej wchodzili Józef Ostrowski, arcybiskup Aleksander Kakowski i książę Zdzisław Lubomirski."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje zawarte w 13. punkcie orędzia Wilsona.",
    options: ["Państwo polskie miało być niezawisłe", "Miało mieć swobodny i bezpieczny dostęp do morza", "Jego niezawisłość miała być zagwarantowana paktem międzynarodowym", "Miało pozostać pod berłem cara", "Miało obejmować terytoria zamieszkane przez ludność niezaprzeczalnie polską"],
    answer: [0, 1, 2, 4],
    explanation: "Wilson mówił o niezawisłym państwie polskim, ziemiach zamieszkanych przez ludność polską, dostępie do morza i gwarancjach międzynarodowych."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki kolor miała Armia Polska we Francji w nazwie wynikającej z barwy mundurów?",
    options: ["Błękitny", "Czerwony", "Zielony", "Czarny", "Żółty", "Fioletowy"],
    answer: 0,
    explanation: "Armię Polską we Francji nazywano błękitną armią od koloru jej mundurów."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Od \"zbrojnego pokoju\" do I wojny światowej",
  icon: "⚔️",
  sectionOrder: [
    "Rywalizacja mocarstw i zbrojny pokój",
    "Wybuch wojny i fronty",
    "Dwie rewolucje w Rosji",
    "Klęska państw centralnych i skutki wojny",
    "Polacy i sprawa polska"
  ],
  sectionIcons: {
    "Rywalizacja mocarstw i zbrojny pokój": "🌍",
    "Wybuch wojny i fronty": "💥",
    "Dwie rewolucje w Rosji": "🔥",
    "Klęska państw centralnych i skutki wojny": "🕊️",
    "Polacy i sprawa polska": "🇵🇱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
