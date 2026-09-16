// Skróty sekcji (do identyfikatorów ćwiczeń):
//   EUR  = Europa po rozpadzie ZSRS
//   KSW  = Konflikty na świecie po 1989 r.
//   POL  = Polska w latach 90. XX w.
//   NUE  = Polska w NATO i UE
//   WYZ  = Wyzwania współczesnego świata
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
      id: "R06_EUR_01",
      section: "Europa po rozpadzie ZSRS",
      type: "single_choice",
      prompt: "Które trzy państwa dawnego Układu Warszawskiego przyjęto do NATO w 1999 r.?",
      options: [
        "Polska, Czechy i Węgry",
        "Polska, Litwa i Łotwa",
        "Czechy, Słowacja i Rumunia",
        "Węgry, Bułgaria i Rumunia",
        "Polska, Ukraina i Białoruś",
        "Litwa, Łotwa i Estonia"
      ],
      answer: 0,
      explanation: "W 1999 r. do NATO przyjęto Polskę, Czechy i Węgry. Było to pierwsze rozszerzenie Sojuszu o państwa byłego Układu Warszawskiego po zakończeniu zimnej wojny.",
      image: "r06_nato_1999.jpg"
    },
  {
      id: "R06_EUR_02",
      section: "Europa po rozpadzie ZSRS",
      type: "multi_select",
      prompt: "Zaznacz kraje bałtyckie, które najszybciej przeprowadziły demokratyczne zmiany i rozpoczęły integrację ze strukturami europejskimi.",
      options: [
        "Litwa",
        "Łotwa",
        "Estonia",
        "Białoruś",
        "Ukraina",
        "Gruzja"
      ],
      answer: [
        0,
        1,
        2
      ],
      explanation: "Litwa, Łotwa i Estonia najszybciej spośród państw postsowieckich przestawiły się na gospodarkę rynkową i rozpoczęły integrację ze strukturami europejskimi."
    },
  {
      id: "R06_EUR_03",
      section: "Europa po rozpadzie ZSRS",
      type: "true_false",
      prompt: "Wspólnota Niepodległych Państw powstała w grudniu 1991 r. i zrzeszała Rosję oraz większość krajów postsowieckich.",
      options: null,
      answer: true,
      explanation: "WNP utworzono w grudniu 1991 r. Oficjalnie miała służyć współpracy byłych republik sowieckich, a zarazem umożliwiała Rosji utrzymywanie wpływów na ich obszarze."
    },
  {
      id: "R06_EUR_04",
      section: "Europa po rozpadzie ZSRS",
      type: "fill_in",
      prompt: "Władimir Putin objął urząd prezydenta Rosji w roku __________, a członkostwo Rosji w grupie G8 zawieszono po aneksji Krymu w roku __________.",
      options: null,
      answer: [
        "2000",
        "2014"
      ],
      altAnswers: [
        [
          "2000",
          "2000 r."
        ],
        [
          "2014",
          "2014 r."
        ]
      ],
      explanation: "Putin objął urząd prezydenta w 2000 r. Po aneksji Krymu w 2014 r. członkostwo Rosji w grupie G8 zostało zawieszone."
    },
  {
      id: "R06_EUR_05",
      section: "Europa po rozpadzie ZSRS",
      type: "riddle",
      prompt: "Jak nazywały się protesty z lat 2013-2014 na Ukrainie przeciwko polityce prezydenta Wiktora Janukowycza wobec integracji z UE?",
      options: null,
      answer: "Euromajdan",
      altAnswers: [
        "Euromajdan",
        "euromajdan"
      ],
      explanation: "Euromajdan był ruchem protestu w Kijowie w latach 2013-2014. Po krwawych starciach Wiktor Janukowycz uciekł do Rosji.",
      image: "r06_euromajdan_kijow.jpg"
    },
  {
      id: "R06_EUR_06",
      section: "Europa po rozpadzie ZSRS",
      type: "odd_one_out",
      prompt: "Wskaż państwo, które nie należy do grupy krajów bałtyckich: Litwa, Łotwa, Estonia, Białoruś.",
      options: null,
      answer: "Białoruś",
      explanation: "Do krajów bałtyckich zaliczono Litwę, Łotwę i Estonię. Białoruś była natomiast państwem postsowieckim ściśle współpracującym z Rosją."
    },
  {
      id: "R06_EUR_07",
      section: "Europa po rozpadzie ZSRS",
      type: "scenario",
      prompt: "Jest rok 2003. W Gruzji masowe protesty przeciw fałszerstwom wyborczym prowadzą do ustąpienia Eduarda Szewardnadzego, a władzę przejmuje Micheil Saakaszwili. Jak nazwano te wydarzenia?",
      options: [
        "rewolucja róż",
        "pomarańczowa rewolucja",
        "Euromajdan",
        "arabska wiosna"
      ],
      answer: 0,
      explanation: "Masowe protesty w Gruzji w 2003 r. nazwano rewolucją róż. Po ustąpieniu Eduarda Szewardnadzego władzę przejął Micheil Saakaszwili.",
      image: "r06_rewolucja_roz_gruzja.jpg"
    },
  {
      id: "R06_EUR_08",
      section: "Europa po rozpadzie ZSRS",
      type: "match",
      prompt: "Połącz wydarzenie z właściwym rokiem.",
      options: null,
      left: [
        "Powstanie WNP",
        "Powstanie Związku Białorusi i Rosji",
        "Przyjęcie Polski, Czech i Węgier do NATO",
        "Objęcie prezydentury Rosji przez Władimira Putina"
      ],
      right: [
        "1991",
        "1997",
        "1999",
        "2000"
      ],
      answer: {
        "Powstanie WNP": "1991",
        "Powstanie Związku Białorusi i Rosji": "1997",
        "Przyjęcie Polski, Czech i Węgier do NATO": "1999",
        "Objęcie prezydentury Rosji przez Władimira Putina": "2000"
      },
      explanation: "WNP powstała w 1991 r., Związek Białorusi i Rosji w 1997 r., Polska, Czechy i Węgry weszły do NATO w 1999 r., a Putin objął prezydenturę w 2000 r."
    },
  {
      id: "R06_EUR_09",
      section: "Europa po rozpadzie ZSRS",
      type: "sort",
      prompt: "Przyporządkuj wydarzenia do państwa lub obszaru, którego dotyczą.",
      options: null,
      items: [
        "rewolucja róż",
        "Euromajdan",
        "I wojna czeczeńska",
        "masakra w Srebrenicy",
        "wojna o Osetię Południową",
        "pomarańczowa rewolucja",
        "II wojna czeczeńska",
        "porozumienie w Dayton"
      ],
      categories: [
        "Gruzja",
        "Ukraina",
        "Czeczenia",
        "była Jugosławia"
      ],
      answer: {
        "Gruzja": [
          "rewolucja róż",
          "wojna o Osetię Południową"
        ],
        "Ukraina": [
          "Euromajdan",
          "pomarańczowa rewolucja"
        ],
        "Czeczenia": [
          "I wojna czeczeńska",
          "II wojna czeczeńska"
        ],
        "była Jugosławia": [
          "masakra w Srebrenicy",
          "porozumienie w Dayton"
        ]
      },
      explanation: "Rewolucja róż i wojna o Osetię Południową dotyczą Gruzji; Euromajdan i pomarańczowa rewolucja - Ukrainy; dwie wojny czeczeńskie - Czeczenii; Srebrenica i Dayton - wojny w byłej Jugosławii.",
      image: "r06_srebrenica_1995.jpg"
    },
  {
      id: "R06_EUR_10",
      section: "Europa po rozpadzie ZSRS",
      type: "sequence",
      prompt: "Ułóż wydarzenia w porządku chronologicznym.",
      options: null,
      items: [
        "Władimir Putin zostaje prezydentem Rosji",
        "Powstaje Związek Białorusi i Rosji",
        "Powstaje Wspólnota Niepodległych Państw",
        "Polska, Czechy i Węgry wchodzą do NATO",
        "Rozpoczyna się Euromajdan"
      ],
      answer: [
        "Powstaje Wspólnota Niepodległych Państw",
        "Powstaje Związek Białorusi i Rosji",
        "Polska, Czechy i Węgry wchodzą do NATO",
        "Władimir Putin zostaje prezydentem Rosji",
        "Rozpoczyna się Euromajdan"
      ],
      explanation: "Kolejność wyznaczają lata: 1991, 1997, 1999, 2000 oraz 2013."
    },
  {
      id: "R06_KSW_01",
      section: "Konflikty na świecie po 1989 r.",
      type: "single_choice",
      prompt: "Co szczególnie przyczyniło się do szybkiego rozwoju gospodarczego Chin od lat 80. XX w.?",
      options: [
        "amerykańskie wsparcie finansowe i napływ zagranicznych inwestorów",
        "całkowite zamknięcie gospodarki na handel zagraniczny",
        "rezygnacja z modernizacji przemysłu",
        "likwidacja wszystkich przedsiębiorstw prywatnych",
        "wyłącznie rozwój rolnictwa tradycyjnego",
        "wycofanie się Chin z handlu światowego"
      ],
      answer: 0,
      explanation: "Rozwój Chin był wspierany przez uprzywilejowanie ekonomiczne ze strony USA, amerykańskie wsparcie finansowe oraz napływ inwestorów zagranicznych."
    },
  {
      id: "R06_KSW_02",
      section: "Konflikty na świecie po 1989 r.",
      type: "true_false",
      prompt: "4 czerwca 1989 r. chińska armia użyła siły przeciw pokojowo nastawionym demonstrantom na placu Tiananmen w Pekinie.",
      options: null,
      answer: true,
      explanation: "Po sporze we władzach komunistycznych zwyciężyli zwolennicy rozwiązania siłowego. 4 czerwca 1989 r. armia wkroczyła na plac Tiananmen i dokonała masakry demonstrantów.",
      image: "r06_tiananmen_1989.jpg"
    },
  {
      id: "R06_KSW_03",
      section: "Konflikty na świecie po 1989 r.",
      type: "multi_select",
      prompt: "Zaznacz problemy państw afrykańskich w latach 90. XX w.",
      options: [
        "klęski głodu",
        "epidemie chorób zakaźnych",
        "brak dostępu do wody pitnej",
        "wojny domowe i konflikty etniczne",
        "powszechny nadmiar żywności",
        "pełna stabilność polityczna"
      ],
      answer: [
        0,
        1,
        2,
        3
      ],
      explanation: "Do głównych problemów należały m.in. głód, epidemie, brak wody pitnej, kryzysy gospodarcze, niestabilność władzy, dewastacja środowiska oraz wojny domowe i konflikty etniczne."
    },
  {
      id: "R06_KSW_04",
      section: "Konflikty na świecie po 1989 r.",
      type: "fill_in",
      prompt: "Ludobójstwo w Rwandzie rozegrało się w roku __________. Członkowie plemienia __________ wymordowali około miliona osób, głównie z plemienia __________.",
      options: null,
      answer: [
        "1994",
        "Hutu",
        "Tutsi"
      ],
      altAnswers: [
        [
          "1994",
          "1994 r."
        ],
        [
          "Hutu",
          "hutu"
        ],
        [
          "Tutsi",
          "tutsi"
        ]
      ],
      explanation: "W 1994 r. w Rwandzie członkowie Hutu dokonali masowych mordów na Tutsi. W ciągu około 100 dni zginęło około miliona osób."
    },
  {
      id: "R06_KSW_05",
      section: "Konflikty na świecie po 1989 r.",
      type: "riddle",
      prompt: "Jak nazywał się system segregacji rasowej obowiązujący w Republice Południowej Afryki do 1994 r.?",
      options: null,
      answer: "apartheid",
      altAnswers: [
        "apartheid",
        "Apartheid"
      ],
      explanation: "Apartheid rozdzielał ludność według koloru skóry i dyskryminował czarnoskórą większość. Po jego obaleniu prezydentem RPA został Nelson Mandela.",
      image: "r06_apartheid_rpa.jpg"
    },
  {
      id: "R06_KSW_06",
      section: "Konflikty na świecie po 1989 r.",
      type: "match",
      prompt: "Połącz obszar konfliktu z opisem.",
      options: null,
      left: [
        "wschodnia Ukraina",
        "Syria",
        "Afganistan",
        "Półwysep Koreański"
      ],
      right: [
        "walki armii ukraińskiej z separatystami wspieranymi przez Rosję",
        "wojna domowa sił Baszara al-Asada z opozycją",
        "interwencja przeciw talibom wspierającym Al-Kaidę",
        "napięcie między Koreą Północną a Koreą Południową"
      ],
      answer: {
        "wschodnia Ukraina": "walki armii ukraińskiej z separatystami wspieranymi przez Rosję",
        "Syria": "wojna domowa sił Baszara al-Asada z opozycją",
        "Afganistan": "interwencja przeciw talibom wspierającym Al-Kaidę",
        "Półwysep Koreański": "napięcie między Koreą Północną a Koreą Południową"
      },
      explanation: "Infografika wskazuje walki na wschodzie Ukrainy, wojnę domową w Syrii, konflikt w Afganistanie po 2001 r. oraz trwałe napięcie na Półwyspie Koreańskim."
    },
  {
      id: "R06_KSW_07",
      section: "Konflikty na świecie po 1989 r.",
      type: "scenario",
      prompt: "Po zamachach z 11 września 2001 r. prezydent USA uznał atak za wypowiedzenie wojny. Do którego państwa skierowano wojska, ponieważ działały tam bazy Al-Kaidy i ukrywał się Osama bin Laden?",
      options: [
        "Afganistanu",
        "Iraku",
        "Syrii",
        "Libii",
        "RPA",
        "Rwanda"
      ],
      answer: 0,
      explanation: "Wojska amerykańskie skierowano do Afganistanu, gdzie znajdowały się bazy szkoleniowe Al-Kaidy i gdzie Osama bin Laden korzystał z gościny talibów.",
      image: "r06_world_trade_center.jpg"
    },
  {
      id: "R06_KSW_08",
      section: "Konflikty na świecie po 1989 r.",
      type: "odd_one_out",
      prompt: "Wskaż miasto, które nie pasuje do pozostałych miejsc zamachów terrorystycznych: Nowy Jork, Madryt, Londyn, Pekin.",
      options: null,
      answer: "Pekin",
      explanation: "Atak na World Trade Center miał miejsce w Nowym Jorku w 2001 r., zamachy na pociągi w Madrycie w 2004 r., a zamachy w Londynie w 2005 r. Pekin wiąże się natomiast z masakrą na placu Tiananmen."
    },
  {
      id: "R06_KSW_09",
      section: "Konflikty na świecie po 1989 r.",
      type: "sequence",
      prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
      options: null,
      items: [
        "zamachy w Londynie",
        "porozumienie izraelsko-palestyńskie",
        "masakra na placu Tiananmen",
        "ludobójstwo w Rwandzie",
        "atak na World Trade Center"
      ],
      answer: [
        "masakra na placu Tiananmen",
        "porozumienie izraelsko-palestyńskie",
        "ludobójstwo w Rwandzie",
        "atak na World Trade Center",
        "zamachy w Londynie"
      ],
      explanation: "Wydarzenia miały miejsce kolejno w latach 1989, 1993, 1994, 2001 i 2005."
    },
  {
      id: "R06_KSW_10",
      section: "Konflikty na świecie po 1989 r.",
      type: "single_choice",
      prompt: "Co powstało po zawarciu porozumienia izraelsko-palestyńskiego w 1993 r.?",
      options: [
        "Autonomia Palestyńska",
        "Państwo Islamskie",
        "Grupa Wyszehradzka",
        "Wspólnota Niepodległych Państw",
        "CEFTA",
        "Związek Białorusi i Rosji"
      ],
      answer: 0,
      explanation: "Po porozumieniu izraelsko-palestyńskim z 1993 r. powstała Autonomia Palestyńska. Jej prezydentem w 1996 r. został Jasir Arafat."
    },
  {
      id: "R06_POL_01",
      section: "Polska w latach 90. XX w.",
      type: "single_choice",
      prompt: "Jaki był podstawowy kierunek planu Balcerowicza realizowanego od 1990 r.?",
      options: [
        "przekształcenie gospodarki centralnie planowanej w rynkową",
        "powrót do systemu kartkowego",
        "zwiększenie centralnego sterowania cenami",
        "likwidacja prywatnych przedsiębiorstw",
        "zamknięcie handlu zagranicznego",
        "odtworzenie Państwowych Gospodarstw Rolnych"
      ],
      answer: 0,
      explanation: "Plan Balcerowicza miał przestawić polską gospodarkę z systemu centralnie planowanego na gospodarkę rynkową.",
      image: "r06_plan_balcerowicza_protest.jpg"
    },
  {
      id: "R06_POL_02",
      section: "Polska w latach 90. XX w.",
      type: "multi_select",
      prompt: "Zaznacz założenia planu Balcerowicza.",
      options: [
        "ograniczenie deficytu budżetowego",
        "zmniejszenie inflacji",
        "prywatyzacja przedsiębiorstw państwowych",
        "przestawienie gospodarki na rynkową",
        "zwiększenie systemu reglamentacji",
        "zakaz tworzenia przedsiębiorstw prywatnych"
      ],
      answer: [
        0,
        1,
        2,
        3
      ],
      explanation: "Do założeń planu należały transformacja rynkowa, ograniczenie deficytu budżetowego, zmniejszenie inflacji i prywatyzacja przedsiębiorstw państwowych."
    },
  {
      id: "R06_POL_03",
      section: "Polska w latach 90. XX w.",
      type: "true_false",
      prompt: "Hiperinflacja w Polsce spadła z 586% w 1990 r. do 70% w 1991 r.",
      options: null,
      answer: true,
      explanation: "W celu ograniczenia hiperinflacji zastosowano m.in. podatek od wzrostu wynagrodzeń zwany popiwkiem. Spadek inflacji nastąpił między 1990 a 1991 r."
    },
  {
      id: "R06_POL_04",
      section: "Polska w latach 90. XX w.",
      type: "fill_in",
      prompt: "Lech Wałęsa wygrał powszechne wybory prezydenckie w roku __________ i objął urząd 22 grudnia tego samego roku. Pierwsze w pełni demokratyczne wybory parlamentarne odbyły się w roku __________.",
      options: null,
      answer: [
        "1990",
        "1991"
      ],
      altAnswers: [
        [
          "1990",
          "1990 r."
        ],
        [
          "1991",
          "1991 r."
        ]
      ],
      explanation: "Lech Wałęsa wygrał wybory prezydenckie w 1990 r., a pierwsze w pełni demokratyczne wybory parlamentarne odbyły się 27 października 1991 r."
    },
  {
      id: "R06_POL_05",
      section: "Polska w latach 90. XX w.",
      type: "riddle",
      prompt: "Jak nazywano ujawnianie nazwisk polityków współpracujących w PRL z komunistyczną Służbą Bezpieczeństwa?",
      options: null,
      answer: "lustracja",
      altAnswers: [
        "lustracja",
        "Lustracja"
      ],
      explanation: "Lustracja dotyczyła ujawniania historii współpracy polityków z komunistyczną Służbą Bezpieczeństwa PRL."
    },
  {
      id: "R06_POL_06",
      section: "Polska w latach 90. XX w.",
      type: "odd_one_out",
      prompt: "Wskaż reformę, która nie należała do czterech reform przeprowadzonych w 1999 r.: reforma administracji, reforma szkolnictwa, reforma emerytalna, reforma walutowa, reforma służby zdrowia.",
      options: null,
      answer: "reforma walutowa",
      explanation: "W 1999 r. przeprowadzono reformy administracji, szkolnictwa, emerytalną i służby zdrowia. Reforma walutowa nie znajduje się w tym zestawie."
    },
  {
      id: "R06_POL_07",
      section: "Polska w latach 90. XX w.",
      type: "match",
      prompt: "Połącz rok z wydarzeniem politycznym.",
      options: null,
      left: [
        "1993",
        "1995",
        "1997",
        "2005"
      ],
      right: [
        "wygrana SLD w przedterminowych wyborach parlamentarnych",
        "wybór Aleksandra Kwaśniewskiego na prezydenta",
        "wygrana koalicji AWS i UW w wyborach parlamentarnych",
        "wygrana PiS w wyborach parlamentarnych i wybór Lecha Kaczyńskiego na prezydenta"
      ],
      answer: {
        "1993": "wygrana SLD w przedterminowych wyborach parlamentarnych",
        "1995": "wybór Aleksandra Kwaśniewskiego na prezydenta",
        "1997": "wygrana koalicji AWS i UW w wyborach parlamentarnych",
        "2005": "wygrana PiS w wyborach parlamentarnych i wybór Lecha Kaczyńskiego na prezydenta"
      },
      explanation: "W 1993 r. wygrał SLD, w 1995 r. prezydentem został Aleksander Kwaśniewski, w 1997 r. zwyciężyła koalicja AWS i UW, a w 2005 r. wybory parlamentarne wygrał PiS i prezydentem został Lech Kaczyński."
    },
  {
      id: "R06_POL_08",
      section: "Polska w latach 90. XX w.",
      type: "sort",
      prompt: "Przyporządkuj skutki przemian gospodarczych do dwóch kategorii.",
      options: null,
      items: [
        "spadek hiperinflacji",
        "poprawa jakości towarów i usług",
        "rozwój przedsiębiorstw prywatnych",
        "wzrost bezrobocia",
        "upadek części nierentownych zakładów",
        "obniżenie poziomu życia wielu rodzin"
      ],
      categories: [
        "korzyści",
        "koszty społeczne"
      ],
      answer: {
        "korzyści": [
          "spadek hiperinflacji",
          "poprawa jakości towarów i usług",
          "rozwój przedsiębiorstw prywatnych"
        ],
        "koszty społeczne": [
          "wzrost bezrobocia",
          "upadek części nierentownych zakładów",
          "obniżenie poziomu życia wielu rodzin"
        ]
      },
      explanation: "Transformacja ograniczyła hiperinflację i rozwinęła sektor prywatny, ale jej kosztem były m.in. likwidacja zakładów, bezrobocie i spadek poziomu życia części społeczeństwa.",
      image: "r06_plan_balcerowicza_protest.jpg"
    },
  {
      id: "R06_POL_09",
      section: "Polska w latach 90. XX w.",
      type: "sequence",
      prompt: "Ułóż wydarzenia w porządku chronologicznym.",
      options: null,
      items: [
        "uchwalenie małej konstytucji",
        "pierwsze w pełni demokratyczne wybory parlamentarne",
        "uchwalenie nowej Konstytucji RP",
        "przyjęcie noweli grudniowej",
        "powszechne wybory prezydenckie wygrane przez Lecha Wałęsę"
      ],
      answer: [
        "przyjęcie noweli grudniowej",
        "powszechne wybory prezydenckie wygrane przez Lecha Wałęsę",
        "pierwsze w pełni demokratyczne wybory parlamentarne",
        "uchwalenie małej konstytucji",
        "uchwalenie nowej Konstytucji RP"
      ],
      explanation: "Nowelę grudniową przyjęto 29 grudnia 1989 r., wybory prezydenckie odbyły się w 1990 r., pierwsze w pełni demokratyczne wybory parlamentarne w 1991 r., małą konstytucję uchwalono w 1992 r., a nową Konstytucję RP w 1997 r."
    },
  {
      id: "R06_POL_10",
      section: "Polska w latach 90. XX w.",
      type: "scenario",
      prompt: "Zgromadzenie Narodowe uchwala nową ustawę zasadniczą, którą następnie popiera większość obywateli w referendum. O którym dokumencie mowa?",
      options: [
        "Konstytucja Rzeczypospolitej Polskiej uchwalona 2 kwietnia 1997 r.",
        "mała konstytucja z 17 października 1992 r.",
        "nowela grudniowa z 29 grudnia 1989 r.",
        "Konstytucja PRL z 1952 r.",
        "traktat waszyngtoński",
        "traktat nicejski"
      ],
      answer: 0,
      explanation: "Nową Konstytucję RP uchwaliło Zgromadzenie Narodowe 2 kwietnia 1997 r. Została zaakceptowana w referendum i weszła w życie 17 października 1997 r.",
      image: "r06_konstytucja_1997.jpg"
    },
  {
      id: "R06_NUE_01",
      section: "Polska w NATO i UE",
      type: "single_choice",
      prompt: "Kiedy ostatnie oddziały rosyjskich wojsk opuściły Polskę?",
      options: [
        "17 września 1993 r.",
        "12 marca 1999 r.",
        "1 maja 2004 r.",
        "7 czerwca 2003 r.",
        "2 kwietnia 1997 r.",
        "27 października 1991 r."
      ],
      answer: 0,
      explanation: "Ostatnie oddziały rosyjskich wojsk stacjonujące w Legnicy opuściły Polskę 17 września 1993 r., co uznano za ważne potwierdzenie odzyskanej suwerenności."
    },
  {
      id: "R06_NUE_02",
      section: "Polska w NATO i UE",
      type: "multi_select",
      prompt: "Zaznacz państwa tworzące Trójkąt Weimarski.",
      options: [
        "Polska",
        "Francja",
        "Niemcy",
        "Węgry",
        "Czechy",
        "Słowacja"
      ],
      answer: [
        0,
        1,
        2
      ],
      explanation: "Trójkąt Weimarski utworzono w 1991 r. jako forum współpracy Polski, Francji i Niemiec."
    },
  {
      id: "R06_NUE_03",
      section: "Polska w NATO i UE",
      type: "true_false",
      prompt: "W 1991 r. Grupę Wyszehradzką tworzyły Polska, Węgry i Czechosłowacja.",
      options: null,
      answer: true,
      explanation: "Grupa Wyszehradzka powstała w 1991 r. W jej skład weszły Polska, Węgry i Czechosłowacja, a od 1993 r. Czechy i Słowacja jako dwa odrębne państwa."
    },
  {
      id: "R06_NUE_04",
      section: "Polska w NATO i UE",
      type: "fill_in",
      prompt: "Polska przystąpiła do NATO dnia __________. Dokumenty akcesyjne podpisał minister spraw zagranicznych __________.",
      options: null,
      answer: [
        "12 marca 1999 r.",
        "Bronisław Geremek"
      ],
      altAnswers: [
        [
          "12 marca 1999 r.",
          "12 marca 1999",
          "12.03.1999"
        ],
        [
          "Bronisław Geremek",
          "Bronislaw Geremek",
          "Geremek"
        ]
      ],
      explanation: "12 marca 1999 r. minister spraw zagranicznych Bronisław Geremek podpisał dokumenty potwierdzające przystąpienie Polski do NATO.",
      image: "r06_nato_1999.jpg"
    },
  {
      id: "R06_NUE_05",
      section: "Polska w NATO i UE",
      type: "riddle",
      prompt: "Który artykuł traktatu waszyngtońskiego zobowiązuje sojuszników NATO do wzajemnej pomocy po zbrojnej napaści na jednego z członków?",
      options: null,
      answer: "artykuł 5",
      altAnswers: [
        "artykuł 5",
        "art. 5",
        "5",
        "Artykuł 5"
      ],
      explanation: "Artykuł 5 traktatu waszyngtońskiego ustanawia zasadę wspólnej obrony i wzajemnej pomocy po zbrojnej napaści na państwo członkowskie."
    },
  {
      id: "R06_NUE_06",
      section: "Polska w NATO i UE",
      type: "match",
      prompt: "Połącz etap polskiej drogi do NATO z rokiem.",
      options: null,
      left: [
        "nawiązanie stosunków dyplomatycznych z NATO",
        "uruchomienie programu Partnerstwo dla Pokoju",
        "oficjalne zaproszenie Polski do NATO przez Billa Clintona",
        "przystąpienie Polski do NATO"
      ],
      right: [
        "1990",
        "1994",
        "1997",
        "1999"
      ],
      answer: {
        "nawiązanie stosunków dyplomatycznych z NATO": "1990",
        "uruchomienie programu Partnerstwo dla Pokoju": "1994",
        "oficjalne zaproszenie Polski do NATO przez Billa Clintona": "1997",
        "przystąpienie Polski do NATO": "1999"
      },
      explanation: "Stosunki dyplomatyczne nawiązano w 1990 r., Partnerstwo dla Pokoju ruszyło w 1994 r., zaproszenie nastąpiło w 1997 r., a członkostwo w 1999 r."
    },
  {
      id: "R06_NUE_07",
      section: "Polska w NATO i UE",
      type: "sequence",
      prompt: "Ułóż etapy integracji Polski z Unią Europejską w porządku chronologicznym.",
      options: null,
      items: [
        "referendum akcesyjne",
        "złożenie wniosku o przyjęcie do UE",
        "przystąpienie Polski do UE",
        "podpisanie umowy stowarzyszeniowej z EWG",
        "zakończenie negocjacji i dostosowywania prawa"
      ],
      answer: [
        "podpisanie umowy stowarzyszeniowej z EWG",
        "złożenie wniosku o przyjęcie do UE",
        "zakończenie negocjacji i dostosowywania prawa",
        "referendum akcesyjne",
        "przystąpienie Polski do UE"
      ],
      explanation: "Umowę stowarzyszeniową podpisano w 1991 r., wniosek złożono w 1994 r., negocjacje zakończono w 2002 r., referendum odbyło się w 2003 r., a członkostwo rozpoczęło się 1 maja 2004 r."
    },
  {
      id: "R06_NUE_08",
      section: "Polska w NATO i UE",
      type: "odd_one_out",
      prompt: "Wskaż państwo, które nie należało do Trójkąta Weimarskiego: Polska, Francja, Niemcy, Węgry.",
      options: null,
      answer: "Węgry",
      explanation: "Trójkąt Weimarski tworzą Polska, Francja i Niemcy. Węgry były natomiast członkiem Grupy Wyszehradzkiej."
    },
  {
      id: "R06_NUE_09",
      section: "Polska w NATO i UE",
      type: "scenario",
      prompt: "W dniach 7-8 czerwca 2003 r. Polacy odpowiadali w głosowaniu na pytanie o przystąpienie kraju do wspólnoty europejskiej. O jakie wydarzenie chodzi?",
      options: [
        "referendum akcesyjne do Unii Europejskiej",
        "powszechne wybory prezydenckie z 1990 r.",
        "referendum konstytucyjne",
        "wstąpienie Polski do NATO",
        "pierwsze w pełni demokratyczne wybory parlamentarne",
        "przystąpienie Polski do Unii Europejskiej"
      ],
      answer: 0,
      explanation: "7-8 czerwca 2003 r. odbyło się referendum akcesyjne. Zdecydowana większość głosujących opowiedziała się za przystąpieniem Polski do Unii Europejskiej.",
      image: "r06_referendum_ue_2003.jpg"
    },
  {
      id: "R06_NUE_10",
      section: "Polska w NATO i UE",
      type: "sort",
      prompt: "Przyporządkuj argumenty do euroentuzjastów i eurosceptyków.",
      options: null,
      items: [
        "szansa na szybszy rozwój gospodarczy",
        "ułatwienia w podróżowaniu",
        "możliwość legalnej pracy w krajach UE",
        "obawa przed utratą niezależności",
        "strach przed wykupem ziemi i przedsiębiorstw",
        "obawa o utratę polskich tradycji"
      ],
      categories: [
        "euroentuzjaści",
        "eurosceptycy"
      ],
      answer: {
        "euroentuzjaści": [
          "szansa na szybszy rozwój gospodarczy",
          "ułatwienia w podróżowaniu",
          "możliwość legalnej pracy w krajach UE"
        ],
        "eurosceptycy": [
          "obawa przed utratą niezależności",
          "strach przed wykupem ziemi i przedsiębiorstw",
          "obawa o utratę polskich tradycji"
        ]
      },
      explanation: "Zwolennicy akcesji wskazywali na rozwój, podróże i pracę, a przeciwnicy obawiali się utraty niezależności, wykupu majątku oraz zmian kulturowych.",
      image: "r06_referendum_ue_2003.jpg"
    },
  {
      id: "R06_WYZ_01",
      section: "Wyzwania współczesnego świata",
      type: "riddle",
      prompt: "Jak nazywa się proces zacieśniania współpracy i współzależności gospodarczej, handlowej, politycznej, społecznej i kulturowej państw na całym świecie?",
      options: null,
      answer: "globalizacja",
      altAnswers: [
        "globalizacja",
        "Globalizacja"
      ],
      explanation: "Globalizacja to proces rosnącej współpracy i współzależności państw, przyspieszany przez rozwój technologiczny, transport, telewizję i internet.",
      image: "r06_globalizacja_miasto.jpg"
    },
  {
      id: "R06_WYZ_02",
      section: "Wyzwania współczesnego świata",
      type: "true_false",
      prompt: "Rewolucja informacyjna przyspieszyła przepływ informacji dzięki rozwojowi m.in. internetu i smartfonów.",
      options: null,
      answer: true,
      explanation: "Rozwój technologii pod koniec XX w. zmienił sposób komunikowania się ludzi. Internet i smartfony umożliwiły bardzo szybki dostęp do informacji."
    },
  {
      id: "R06_WYZ_03",
      section: "Wyzwania współczesnego świata",
      type: "multi_select",
      prompt: "Zaznacz szanse związane z globalizacją.",
      options: [
        "rozwój transportu międzynarodowego i turystyki",
        "łatwiejszy przepływ kapitału",
        "tworzenie miejsc pracy przez korporacje w krajach rozwijających się",
        "działanie organizacji międzynarodowych dla wspólnego dobra",
        "automatyczny zanik wszystkich kryzysów",
        "całkowite usunięcie nierówności między państwami"
      ],
      answer: [
        0,
        1,
        2,
        3
      ],
      explanation: "Do szans globalizacji zaliczono rozwój transportu i turystyki, łatwiejszy przepływ kapitału, tworzenie miejsc pracy oraz działalność organizacji międzynarodowych."
    },
  {
      id: "R06_WYZ_04",
      section: "Wyzwania współczesnego świata",
      type: "odd_one_out",
      prompt: "Wskaż pojęcie, które nie pasuje do pozostałych: słońce, wiatr, woda, apartheid.",
      options: null,
      answer: "apartheid",
      explanation: "Słońce, wiatr i woda są odnawialnymi źródłami energii. Apartheid był systemem segregacji rasowej w Republice Południowej Afryki.",
      image: "r06_energia_odnawialna.jpg"
    },
  {
      id: "R06_WYZ_05",
      section: "Wyzwania współczesnego świata",
      type: "fill_in",
      prompt: "Dolina Krzemowa leży w amerykańskim stanie __________, a jej nazwa pochodzi od __________ - podstawowego składnika współczesnej elektroniki.",
      options: null,
      answer: [
        "Kalifornia",
        "krzemu"
      ],
      altAnswers: [
        [
          "Kalifornia",
          "Kalifornii",
          "kalifornia"
        ],
        [
          "krzemu",
          "krzem",
          "Krzemu"
        ]
      ],
      explanation: "Dolina Krzemowa znajduje się w Kalifornii. Jej nazwa pochodzi od krzemu, materiału ważnego dla współczesnej elektroniki."
    },
  {
      id: "R06_WYZ_06",
      section: "Wyzwania współczesnego świata",
      type: "single_choice",
      prompt: "Który problem demograficzny jest charakterystyczny dla krajów wysoko rozwiniętych?",
      options: [
        "starzenie się społeczeństw",
        "przeludnienie wynikające z bardzo wysokiej dzietności",
        "całkowity brak dostępu do szkolnictwa",
        "powszechny głód",
        "brak opieki medycznej we wszystkich regionach",
        "zupełny brak migracji"
      ],
      answer: 0,
      explanation: "W krajach wysoko rozwiniętych problemem jest starzenie się społeczeństw, związane z małą liczbą urodzeń oraz wydłużaniem życia."
    },
  {
      id: "R06_WYZ_07",
      section: "Wyzwania współczesnego świata",
      type: "match",
      prompt: "Połącz pojęcie z właściwym opisem.",
      options: null,
      left: [
        "przeludnienie",
        "starzenie się społeczeństw",
        "migracja ekonomiczna",
        "amerykanizacja"
      ],
      right: [
        "problem typowy dla wielu ubogich krajów rozwijających się",
        "proces charakterystyczny dla krajów wysoko rozwiniętych",
        "przenoszenie się w poszukiwaniu lepszych warunków życia i pracy",
        "naśladowanie amerykańskiego modelu życia i kultury"
      ],
      answer: {
        "przeludnienie": "problem typowy dla wielu ubogich krajów rozwijających się",
        "starzenie się społeczeństw": "proces charakterystyczny dla krajów wysoko rozwiniętych",
        "migracja ekonomiczna": "przenoszenie się w poszukiwaniu lepszych warunków życia i pracy",
        "amerykanizacja": "naśladowanie amerykańskiego modelu życia i kultury"
      },
      explanation: "Te pojęcia opisują cztery różne zjawiska społeczne współczesnego świata: przeludnienie, starzenie się, migrację ekonomiczną i amerykanizację."
    },
  {
      id: "R06_WYZ_08",
      section: "Wyzwania współczesnego świata",
      type: "sort",
      prompt: "Przyporządkuj zjawiska do zagrożeń ekologicznych i zagrożeń globalizacyjnych.",
      options: null,
      items: [
        "topnienie lodowców",
        "podnoszenie poziomu mórz",
        "wycieki ropy do mórz",
        "kryzys w jednym kraju przenoszący się na inne",
        "pogłębianie nierówności między państwami",
        "osłabianie lokalnych tradycji przez globalną kulturę"
      ],
      categories: [
        "zagrożenia ekologiczne",
        "zagrożenia globalizacyjne"
      ],
      answer: {
        "zagrożenia ekologiczne": [
          "topnienie lodowców",
          "podnoszenie poziomu mórz",
          "wycieki ropy do mórz"
        ],
        "zagrożenia globalizacyjne": [
          "kryzys w jednym kraju przenoszący się na inne",
          "pogłębianie nierówności między państwami",
          "osłabianie lokalnych tradycji przez globalną kulturę"
        ]
      },
      explanation: "Ekologiczne skutki dotyczą środowiska naturalnego, natomiast zagrożenia globalizacyjne wynikają z silnych powiązań gospodarczych i kulturowych między państwami.",
      image: "r06_energia_odnawialna.jpg"
    },
  {
      id: "R06_WYZ_09",
      section: "Wyzwania współczesnego świata",
      type: "scenario",
      prompt: "Mieszkaniec ubogiego kraju opuszcza ojczyznę i próbuje dostać się do bogatego państwa, aby znaleźć lepszą pracę i warunki życia. Jak najlepiej określić to zjawisko?",
      options: [
        "migracja ekonomiczna",
        "amerykanizacja",
        "rewolucja informacyjna",
        "przeludnienie",
        "apartheid",
        "lustracja"
      ],
      answer: 0,
      explanation: "Migracja ekonomiczna polega na przemieszczaniu się w poszukiwaniu lepszych warunków życia i pracy. Jej częstym kierunkiem są państwa bogatej Północy.",
      image: "r06_migracja_morze.jpg"
    },
  {
      id: "R06_WYZ_10",
      section: "Wyzwania współczesnego świata",
      type: "sequence",
      prompt: "Ułóż wydarzenia w porządku chronologicznym.",
      options: null,
      items: [
        "proklamowanie Państwa Islamskiego",
        "początek pandemii COVID-19 w Wuhan",
        "wdrożenie protokołu z Kioto",
        "upublicznienie pierwszej strony internetowej",
        "globalny kryzys finansowy"
      ],
      answer: [
        "upublicznienie pierwszej strony internetowej",
        "wdrożenie protokołu z Kioto",
        "globalny kryzys finansowy",
        "proklamowanie Państwa Islamskiego",
        "początek pandemii COVID-19 w Wuhan"
      ],
      explanation: "Kolejne daty to 1991, 2005, 2008, 2014 i koniec 2019 r."
    },
  {
      id: "R06_HARD_01",
      section: "Super trudne",
      type: "single_choice",
      prompt: "W którym roku powołano Związek Białorusi i Rosji?",
      options: [
        "1997",
        "1991",
        "1993",
        "1999",
        "2000",
        "2004"
      ],
      answer: 0,
      explanation: "Próby ścisłej integracji Białorusi z Rosją doprowadziły do powołania Związku Białorusi i Rosji w 1997 r."
    },
  {
      id: "R06_HARD_02",
      section: "Super trudne",
      type: "match",
      prompt: "Połącz miejsce ataku z rokiem wydarzenia związanego z terroryzmem czeczeńskim.",
      options: null,
      left: [
        "Budionnowsk",
        "Bujnaksk, Moskwa i Wołgodońsk",
        "teatr na Dubrowce",
        "szkoła w Biesłanie"
      ],
      right: [
        "1995",
        "1999",
        "2002",
        "2004"
      ],
      answer: {
        "Budionnowsk": "1995",
        "Bujnaksk, Moskwa i Wołgodońsk": "1999",
        "teatr na Dubrowce": "2002",
        "szkoła w Biesłanie": "2004"
      },
      explanation: "Atak na szpital w Budionnowsku miał miejsce w 1995 r., zamachy na budynki mieszkalne w 1999 r., zajęcie teatru na Dubrowce w 2002 r., a atak na szkołę w Biesłanie w 2004 r.",
      image: "r06_dubrowka_2002.jpg"
    },
  {
      id: "R06_HARD_03",
      section: "Super trudne",
      type: "sequence",
      prompt: "Ułóż wydarzenia związane z Czeczenią od najwcześniejszego do najpóźniejszego.",
      options: null,
      items: [
        "atak na szkołę w Biesłanie",
        "początek II wojny czeczeńskiej",
        "ogłoszenie niepodległości Czeczenii",
        "atak na szpital w Budionnowsku",
        "zajęcie teatru na Dubrowce"
      ],
      answer: [
        "ogłoszenie niepodległości Czeczenii",
        "atak na szpital w Budionnowsku",
        "początek II wojny czeczeńskiej",
        "zajęcie teatru na Dubrowce",
        "atak na szkołę w Biesłanie"
      ],
      explanation: "Niepodległość ogłoszono w 1991 r., atak w Budionnowsku nastąpił w 1995 r., II wojna rozpoczęła się w 1999 r., Dubrowka miała miejsce w 2002 r., a Biesłan w 2004 r."
    },
  {
      id: "R06_HARD_04",
      section: "Super trudne",
      type: "fill_in",
      prompt: "W Srebrenicy w lipcu __________ Serbowie dokonali masowych egzekucji na ponad __________ muzułmańskich mężczyzn i chłopców. Porozumienie kończące wojnę w Bośni podpisano 21 listopada tego samego roku w __________.",
      options: null,
      answer: [
        "1995 r.",
        "7 tysiącach",
        "Dayton"
      ],
      altAnswers: [
        [
          "1995 r.",
          "1995"
        ],
        [
          "7 tysiącach",
          "7 tys.",
          "7000",
          "ponad 7 tysiącach"
        ],
        [
          "Dayton",
          "dayton"
        ]
      ],
      explanation: "Masakra w Srebrenicy miała miejsce w lipcu 1995 r. W listopadzie 1995 r. podpisano w Dayton porozumienie kończące wojnę w Bośni i Hercegowinie.",
      image: "r06_srebrenica_1995.jpg"
    },
  {
      id: "R06_HARD_05",
      section: "Super trudne",
      type: "odd_one_out",
      prompt: "Wskaż postać, która nie była związana z porozumieniem izraelsko-palestyńskim i Pokojową Nagrodą Nobla za ten proces: Jasir Arafat, Icchak Rabin, Szimon Peres, Nelson Mandela.",
      options: null,
      answer: "Nelson Mandela",
      explanation: "Jasir Arafat, Icchak Rabin i Szimon Peres byli związani z porozumieniem izraelsko-palestyńskim i otrzymali Pokojową Nagrodę Nobla. Nelson Mandela był przywódcą walki z apartheidem w RPA."
    },
  {
      id: "R06_HARD_06",
      section: "Super trudne",
      type: "scenario",
      prompt: "W kraju w latach 1975-1990 PKB wzrósł o 193%, a rozwój wspierały zagraniczne inwestycje i uprzywilejowanie ekonomiczne ze strony USA. O jakim państwie mowa?",
      options: [
        "Chiny",
        "Japonia",
        "RPA",
        "Rosja",
        "Irak",
        "Afganistan"
      ],
      answer: 0,
      explanation: "Wzrost PKB oraz napływ inwestycji dotyczą Chin, których intensywny rozwój gospodarczy rozpoczął się w latach 80. XX w."
    },
  {
      id: "R06_HARD_07",
      section: "Super trudne",
      type: "match",
      prompt: "Połącz wydarzenie z biografii Nelsona Mandeli z rokiem.",
      options: null,
      left: [
        "uwolnienie z więzienia",
        "referendum w RPA za likwidacją apartheidu",
        "otrzymanie Pokojowej Nagrody Nobla",
        "objęcie urzędu prezydenta RPA"
      ],
      right: [
        "1990",
        "1992",
        "1993",
        "1994"
      ],
      answer: {
        "uwolnienie z więzienia": "1990",
        "referendum w RPA za likwidacją apartheidu": "1992",
        "otrzymanie Pokojowej Nagrody Nobla": "1993",
        "objęcie urzędu prezydenta RPA": "1994"
      },
      explanation: "Mandela został uwolniony w 1990 r., referendum odbyło się w 1992 r., Pokojową Nagrodę Nobla otrzymał w 1993 r., a prezydentem RPA został w 1994 r.",
      image: "r06_apartheid_rpa.jpg"
    },
  {
      id: "R06_HARD_08",
      section: "Super trudne",
      type: "multi_select",
      prompt: "Zaznacz wszystkie cztery reformy przeprowadzone przez koalicję AWS i UW w 1999 r.",
      options: [
        "reforma administracji",
        "reforma szkolnictwa",
        "reforma emerytalna",
        "reforma służby zdrowia",
        "reforma walutowa",
        "reforma sądownictwa"
      ],
      answer: [
        0,
        1,
        2,
        3
      ],
      explanation: "W 1999 r. przeprowadzono reformy administracji, szkolnictwa, emerytalną i służby zdrowia."
    },
  {
      id: "R06_HARD_09",
      section: "Super trudne",
      type: "sequence",
      prompt: "Ułóż prezydentów Polski w kolejności obejmowania urzędu po 1989 r.",
      options: null,
      items: [
        "Lech Kaczyński",
        "Lech Wałęsa",
        "Wojciech Jaruzelski",
        "Aleksander Kwaśniewski"
      ],
      answer: [
        "Wojciech Jaruzelski",
        "Lech Wałęsa",
        "Aleksander Kwaśniewski",
        "Lech Kaczyński"
      ],
      explanation: "Kolejność to Wojciech Jaruzelski, Lech Wałęsa od 1990 r., Aleksander Kwaśniewski od 1995 r. i Lech Kaczyński od 2005 r."
    },
  {
      id: "R06_HARD_10",
      section: "Super trudne",
      type: "fill_in",
      prompt: "Nowelę grudniową przyjęto 29 grudnia __________, małą konstytucję 17 października __________, a nową Konstytucję RP uchwalono 2 kwietnia __________ i wprowadzono w życie 17 października __________.",
      options: null,
      answer: [
        "1989 r.",
        "1992 r.",
        "1997 r.",
        "1997 r."
      ],
      altAnswers: [
        [
          "1989 r.",
          "1989"
        ],
        [
          "1992 r.",
          "1992"
        ],
        [
          "1997 r.",
          "1997"
        ],
        [
          "1997 r.",
          "1997"
        ]
      ],
      explanation: "Nowela grudniowa pochodzi z 1989 r., mała konstytucja z 1992 r., a nową Konstytucję RP uchwalono i wprowadzono w życie w 1997 r.",
      image: "r06_konstytucja_1997.jpg"
    },
  {
      id: "R06_HARD_11",
      section: "Super trudne",
      type: "multi_select",
      prompt: "Zaznacz wydarzenia należące do polskiej drogi do NATO.",
      options: [
        "nawiązanie stosunków dyplomatycznych z NATO w 1990 r.",
        "uruchomienie Partnerstwa dla Pokoju w 1994 r.",
        "zaproszenie Polski do NATO w 1997 r.",
        "podpisanie dokumentów akcesyjnych 12 marca 1999 r.",
        "referendum akcesyjne do UE w 2003 r.",
        "podpisanie umowy stowarzyszeniowej z EWG w 1991 r."
      ],
      answer: [
        0,
        1,
        2,
        3
      ],
      explanation: "Droga do NATO obejmowała nawiązanie stosunków, Partnerstwo dla Pokoju, zaproszenie do Sojuszu oraz podpisanie dokumentów akcesyjnych. Pozostałe dwa wydarzenia dotyczą integracji europejskiej."
    },
  {
      id: "R06_HARD_12",
      section: "Super trudne",
      type: "match",
      prompt: "Połącz inicjatywę lub organizację z opisem.",
      options: null,
      left: [
        "Trójkąt Weimarski",
        "Grupa Wyszehradzka",
        "CEFTA",
        "Partnerstwo dla Pokoju"
      ],
      right: [
        "współpraca Polski, Francji i Niemiec",
        "współpraca Polski, Węgier i Czechosłowacji",
        "porozumienie służące znoszeniu ceł i usprawnieniu handlu",
        "program współpracy NATO z państwami starającymi się o członkostwo"
      ],
      answer: {
        "Trójkąt Weimarski": "współpraca Polski, Francji i Niemiec",
        "Grupa Wyszehradzka": "współpraca Polski, Węgier i Czechosłowacji",
        "CEFTA": "porozumienie służące znoszeniu ceł i usprawnieniu handlu",
        "Partnerstwo dla Pokoju": "program współpracy NATO z państwami starającymi się o członkostwo"
      },
      explanation: "Trójkąt Weimarski łączy Polskę, Francję i Niemcy; Grupa Wyszehradzka powstała z udziałem Polski, Węgier i Czechosłowacji; CEFTA dotyczyła handlu; Partnerstwo dla Pokoju wspierało współpracę z NATO."
    },
  {
      id: "R06_HARD_13",
      section: "Super trudne",
      type: "single_choice",
      prompt: "Ilu żołnierzy liczył w szczytowym momencie polski kontyngent w Iraku podczas misji stabilizacyjnej w latach 2003-2008?",
      options: [
        "około 2500",
        "około 500",
        "około 1000",
        "około 5000",
        "około 10 000",
        "około 20 000"
      ],
      answer: 0,
      explanation: "Polskie oddziały uczestniczyły w misji stabilizacyjnej w Iraku w latach 2003-2008, a w szczytowym momencie kontyngent liczył około 2500 żołnierzy."
    },
  {
      id: "R06_HARD_14",
      section: "Super trudne",
      type: "sort",
      prompt: "Przyporządkuj zjawiska do właściwego rodzaju problemu współczesnego świata.",
      options: null,
      items: [
        "starzenie się społeczeństw",
        "przeludnienie",
        "masowe migracje ekonomiczne",
        "pogłębianie nierówności między państwami",
        "topnienie lodowców",
        "wycieki ropy do mórz",
        "handel narkotykami i ludźmi",
        "zamachy skrajnych ugrupowań"
      ],
      categories: [
        "demografia i migracje",
        "globalizacja i nierówności",
        "środowisko",
        "przestępczość i terroryzm"
      ],
      answer: {
        "demografia i migracje": [
          "starzenie się społeczeństw",
          "przeludnienie",
          "masowe migracje ekonomiczne"
        ],
        "globalizacja i nierówności": [
          "pogłębianie nierówności między państwami"
        ],
        "środowisko": [
          "topnienie lodowców",
          "wycieki ropy do mórz"
        ],
        "przestępczość i terroryzm": [
          "handel narkotykami i ludźmi",
          "zamachy skrajnych ugrupowań"
        ]
      },
      explanation: "Problemy współczesnego świata można pogrupować na demograficzne i migracyjne, wynikające z globalnych nierówności, ekologiczne oraz związane z przestępczością i terroryzmem."
    },
  {
      id: "R06_HARD_15",
      section: "Super trudne",
      type: "sequence",
      prompt: "Ułóż wydarzenia w porządku chronologicznym.",
      options: null,
      items: [
        "atak na World Trade Center",
        "Polska wchodzi do Unii Europejskiej",
        "masakra na placu Tiananmen",
        "Polska wchodzi do NATO",
        "rozpoczyna się realizacja planu Balcerowicza",
        "wdrożenie protokołu z Kioto"
      ],
      answer: [
        "masakra na placu Tiananmen",
        "rozpoczyna się realizacja planu Balcerowicza",
        "Polska wchodzi do NATO",
        "atak na World Trade Center",
        "Polska wchodzi do Unii Europejskiej",
        "wdrożenie protokołu z Kioto"
      ],
      explanation: "Daty to odpowiednio 1989, 1990, 1999, 2001, 2004 i 2005."
    }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Polska i świat w nowej epoce",
  icon: "🌍",
  sectionOrder: [
    "Europa po rozpadzie ZSRS",
    "Konflikty na świecie po 1989 r.",
    "Polska w latach 90. XX w.",
    "Polska w NATO i UE",
    "Wyzwania współczesnego świata"
  ],
  sectionIcons: {
    "Europa po rozpadzie ZSRS": "🌍",
    "Konflikty na świecie po 1989 r.": "⚔️",
    "Polska w latach 90. XX w.": "🇵🇱",
    "Polska w NATO i UE": "🤝",
    "Wyzwania współczesnego świata": "🌐"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
