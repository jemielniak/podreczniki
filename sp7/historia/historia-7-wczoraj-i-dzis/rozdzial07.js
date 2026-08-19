// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ODR  = Odrodzenie Rzeczypospolitej
//   GRA  = Kształtowanie granic
//   PAR  = Rządy parlamentarne
//   SAN  = Zamach majowy i sanacja
//   GSK  = Gospodarka, społeczeństwo i kultura
//   SCH  = Schyłek niepodległości
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R07_ODR_01",
    section: "Odrodzenie Rzeczypospolitej",
    type: "single_choice",
    prompt: "Która instytucja była najważniejszym ośrodkiem władzy na ziemiach polskich w chwili zakończenia I wojny światowej?",
    options: ["Rada Regencyjna", "Komitet Narodowy Polski", "Polska Komisja Likwidacyjna", "Naczelna Rada Ludowa", "Tymczasowy Komitet Rządzący", "Rada Narodowa Księstwa Cieszyńskiego"],
    answer: 0,
    image: "r07_rada_regencyjna.jpg",
    explanation: "Rada Regencyjna została powołana przez państwa centralne, ale społeczeństwo nie miało do niej zaufania, dlatego jesienią 1918 r. powstawały konkurencyjne ośrodki władzy."
  },
  {
    id: "R07_ODR_02",
    section: "Odrodzenie Rzeczypospolitej",
    type: "match",
    prompt: "Połącz ośrodek władzy z miejscem jego działania.",
    options: null,
    left: ["Tymczasowy Rząd Ludowy Republiki Polskiej", "Polska Komisja Likwidacyjna Galicji i Śląska Cieszyńskiego", "Rada Narodowa Księstwa Cieszyńskiego"],
    right: ["Cieszyn", "Lublin", "Kraków"],
    answer: {
      "Tymczasowy Rząd Ludowy Republiki Polskiej": "Lublin",
      "Polska Komisja Likwidacyjna Galicji i Śląska Cieszyńskiego": "Kraków",
      "Rada Narodowa Księstwa Cieszyńskiego": "Cieszyn"
    },
    explanation: "Rząd Ignacego Daszyńskiego powstał w Lublinie, komisja kierowana przez Wincentego Witosa działała w Krakowie, a rada narodowa funkcjonowała w Cieszynie."
  },
  {
    id: "R07_ODR_03",
    section: "Odrodzenie Rzeczypospolitej",
    type: "sequence",
    prompt: "Ułóż wydarzenia z listopada 1918 r. w kolejności chronologicznej.",
    options: null,
    items: ["Piłsudski objął urząd Tymczasowego Naczelnika Państwa", "Piłsudski przejął władzę wojskową od Rady Regencyjnej", "Rada Regencyjna przekazała Piłsudskiemu władzę cywilną", "Piłsudski przybył do Warszawy"],
    answer: ["Piłsudski przybył do Warszawy", "Piłsudski przejął władzę wojskową od Rady Regencyjnej", "Rada Regencyjna przekazała Piłsudskiemu władzę cywilną", "Piłsudski objął urząd Tymczasowego Naczelnika Państwa"],
    explanation: "Piłsudski wrócił do Warszawy 10 listopada, 11 listopada przejął władzę wojskową, 14 listopada władzę cywilną, a 22 listopada został Tymczasowym Naczelnikiem Państwa."
  },
  {
    id: "R07_ODR_04",
    section: "Odrodzenie Rzeczypospolitej",
    type: "true_false",
    prompt: "11 listopada 1918 r. Józef Piłsudski przejął od Rady Regencyjnej władzę wojskową.",
    options: null,
    answer: true,
    image: "r07_rozbrajanie_niemcow.jpg",
    explanation: "Ta data jest symbolicznym dniem odzyskania niepodległości, ponieważ Piłsudski przejął wtedy władzę wojskową od Rady Regencyjnej."
  },
  {
    id: "R07_ODR_05",
    section: "Odrodzenie Rzeczypospolitej",
    type: "multi_select",
    prompt: "Zaznacz reformy wprowadzone przez rząd Jędrzeja Moraczewskiego.",
    options: ["8-godzinny czas pracy", "ubezpieczenia społeczne", "prawa wyborcze dla kobiet", "utworzenie Wolnego Miasta Gdańska", "budowa Centralnego Okręgu Przemysłowego", "wprowadzenie konstytucji kwietniowej"],
    answer: [0, 1, 2],
    explanation: "Rząd Moraczewskiego wprowadził m.in. 8-godzinny czas pracy, ubezpieczenia społeczne, płacę minimalną oraz prawa wyborcze dla kobiet."
  },
  {
    id: "R07_ODR_06",
    section: "Odrodzenie Rzeczypospolitej",
    type: "fill_in",
    prompt: "Józef Piłsudski wysłał depeszę o powstaniu państwa polskiego __________ listopada __________ r.",
    options: null,
    answer: ["16", "1918"],
    altAnswers: [
      ["16", "szesnastego"],
      ["1918", "1918 r."]
    ],
    explanation: "16 listopada 1918 r. Piłsudski poinformował rządy światowych mocarstw o istnieniu niepodległego państwa polskiego."
  },
  {
    id: "R07_ODR_07",
    section: "Odrodzenie Rzeczypospolitej",
    type: "riddle",
    prompt: "Który pianista i działacz polityczny został premierem rządu uznanego przez zachodnie mocarstwa?",
    options: null,
    answer: "Ignacy Jan Paderewski",
    altAnswers: ["Ignacy Jan Paderewski", "Paderewski", "Ignacy Paderewski"],
    explanation: "Rząd Ignacego Jana Paderewskiego powstał w styczniu 1919 r. i został uznany na arenie międzynarodowej za legalny organ władz Polski."
  },
  {
    id: "R07_ODR_08",
    section: "Odrodzenie Rzeczypospolitej",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Ignacy Daszyński, Wincenty Witos, Józef Piłsudski, Joachim von Ribbentrop.",
    options: null,
    answer: "Joachim von Ribbentrop",
    explanation: "Daszyński, Witos i Piłsudski byli związani z polskimi ośrodkami władzy w czasie odradzania się państwa, a Ribbentrop był ministrem spraw zagranicznych III Rzeszy."
  },
  {
    id: "R07_ODR_09",
    section: "Odrodzenie Rzeczypospolitej",
    type: "scenario",
    prompt: "Jesteś mieszkańcem Krakowa jesienią 1918 r. Słyszysz o instytucji kierowanej przez Wincentego Witosa, której celem jest bezpieczeństwo zachodniej Galicji i przyłączenie tych ziem do Polski. O jakiej instytucji mowa?",
    options: ["Polska Komisja Likwidacyjna Galicji i Śląska Cieszyńskiego", "Tymczasowy Rząd Ludowy Republiki Polskiej", "Rada Regencyjna", "Naczelna Rada Ludowa", "Komitet Narodowy Polski"],
    answer: 0,
    explanation: "Polska Komisja Likwidacyjna działała w Krakowie, a jej pracami kierował Wincenty Witos."
  },
  {
    id: "R07_ODR_10",
    section: "Odrodzenie Rzeczypospolitej",
    type: "sort",
    prompt: "Przyporządkuj osoby do funkcji lub działań z pierwszych miesięcy niepodległości.",
    options: null,
    items: ["Ignacy Daszyński", "Wincenty Witos", "Jędrzej Moraczewski", "Ignacy Jan Paderewski"],
    categories: ["rządy i ośrodki tymczasowe", "rząd uznany międzynarodowo"],
    answer: {
      "rządy i ośrodki tymczasowe": ["Ignacy Daszyński", "Wincenty Witos", "Jędrzej Moraczewski"],
      "rząd uznany międzynarodowo": ["Ignacy Jan Paderewski"]
    },
    explanation: "Daszyński, Witos i Moraczewski byli związani z tymczasową organizacją władzy, a Paderewski stanął na czele gabinetu uznanego przez zachodnie mocarstwa."
  },
  {
    id: "R07_GRA_01",
    section: "Kształtowanie granic",
    type: "single_choice",
    prompt: "Kto był zwolennikiem koncepcji inkorporacyjnej granic odrodzonej Polski?",
    options: ["Roman Dmowski", "Józef Piłsudski", "Symon Petlura", "Lucjan Żeligowski", "Wojciech Korfanty", "Józef Haller"],
    answer: 0,
    explanation: "Roman Dmowski opowiadał się za państwem możliwie jednolitym narodowo, obejmującym ziemie zamieszkane głównie przez Polaków."
  },
  {
    id: "R07_GRA_02",
    section: "Kształtowanie granic",
    type: "multi_select",
    prompt: "Zaznacz elementy koncepcji federacyjnej Józefa Piłsudskiego.",
    options: ["Utworzenie bloku państw sąsiadujących z ZSRS", "Współpraca Polski z Litwą, Białorusią i Ukrainą", "Przymusowa polonizacja wszystkich mniejszości", "Rezygnacja z konfliktu z Niemcami przy ustalaniu granicy zachodniej", "Włączenie tylko ziem jednolitych narodowo", "Skłonienie Niemców i Żydów do emigracji"],
    answer: [0, 1, 3],
    explanation: "Piłsudski chciał federacji Polski, Łotwy, Litwy, Białorusi i Ukrainy, która chroniłaby region przed dominacją bolszewickiej Rosji; granicę zachodnią zostawiał decyzjom konferencji pokojowej."
  },
  {
    id: "R07_GRA_03",
    section: "Kształtowanie granic",
    type: "scenario",
    prompt: "Jest 26 grudnia 1918 r. Do Poznania przybywa znany pianista i polityk, a entuzjazm Polaków oraz reakcja Niemców prowadzą do wybuchu powstania. Kto przybył do Poznania?",
    options: ["Ignacy Jan Paderewski", "Józef Haller", "Wojciech Korfanty", "Roman Dmowski", "Tadeusz Rozwadowski"],
    answer: 0,
    image: "r07_powstanie_wielkopolskie.jpg",
    explanation: "Przyjazd Ignacego Jana Paderewskiego do Poznania stał się bezpośrednim impulsem do wybuchu powstania wielkopolskiego."
  },
  {
    id: "R07_GRA_04",
    section: "Kształtowanie granic",
    type: "true_false",
    prompt: "Wolne Miasto Gdańsk było formalnie autonomicznym miastem-państwem pod zarządem Ligi Narodów.",
    options: null,
    answer: true,
    explanation: "Gdańsk, Sopot i Żuławy utworzyły Wolne Miasto Gdańsk, którego polityka zagraniczna i system celny były powiązane z Polską."
  },
  {
    id: "R07_GRA_05",
    section: "Kształtowanie granic",
    type: "fill_in",
    prompt: "Zaślubiny Polski z morzem odbyły się __________ lutego __________ r. w Pucku.",
    options: null,
    answer: ["10", "1920"],
    altAnswers: [
      ["10", "dziesiątego"],
      ["1920", "1920 r."]
    ],
    explanation: "10 lutego 1920 r. w Pucku generał Józef Haller dokonał symbolicznych zaślubin Polski z morzem."
  },
  {
    id: "R07_GRA_06",
    section: "Kształtowanie granic",
    type: "match",
    prompt: "Połącz wydarzenie dotyczące granic z jego skutkiem.",
    options: null,
    left: ["Plebiscyt na Warmii, Mazurach i Powiślu", "Trzecie powstanie śląskie", "Bunt Żeligowskiego", "Traktat ryski"],
    right: ["ustalenie wschodniej granicy Polski", "przyznanie Polsce niewielkich fragmentów Powiśla", "włączenie Wileńszczyzny do Polski po referendum", "przyznanie Polsce części obszaru z większością zakładów przemysłowych"],
    answer: {
      "Plebiscyt na Warmii, Mazurach i Powiślu": "przyznanie Polsce niewielkich fragmentów Powiśla",
      "Trzecie powstanie śląskie": "przyznanie Polsce części obszaru z większością zakładów przemysłowych",
      "Bunt Żeligowskiego": "włączenie Wileńszczyzny do Polski po referendum",
      "Traktat ryski": "ustalenie wschodniej granicy Polski"
    },
    explanation: "Granice II RP kształtowały się przez plebiscyty, powstania, działania zbrojne i traktaty pokojowe."
  },
  {
    id: "R07_GRA_07",
    section: "Kształtowanie granic",
    type: "single_choice",
    prompt: "Która bitwa zdecydowała o zachowaniu przez Polskę niepodległości podczas wojny z bolszewikami?",
    options: ["Bitwa Warszawska", "Bitwa pod Komarowem", "Bitwa nad Niemnem", "Bitwa o Górę Świętej Anny", "Bitwa o Lwów", "Bitwa o Dyneburg"],
    answer: 0,
    image: "r07_bitwa_warszawska.jpg",
    explanation: "Bitwa Warszawska z sierpnia 1920 r. zatrzymała ofensywę Armii Czerwonej i przesądziła o ocaleniu niepodległości Polski."
  },
  {
    id: "R07_GRA_08",
    section: "Kształtowanie granic",
    type: "sequence",
    prompt: "Ułóż wydarzenia wojny polsko-bolszewickiej w kolejności chronologicznej.",
    options: null,
    items: ["Podpisanie traktatu pokojowego w Rydze", "Zajęcie Kijowa przez wojska polsko-ukraińskie", "Bitwa Warszawska", "Opanowanie Dyneburga przez generała Rydza-Śmigłego"],
    answer: ["Opanowanie Dyneburga przez generała Rydza-Śmigłego", "Zajęcie Kijowa przez wojska polsko-ukraińskie", "Bitwa Warszawska", "Podpisanie traktatu pokojowego w Rydze"],
    explanation: "Dyneburg opanowano w styczniu 1920 r., Kijów w maju, Bitwa Warszawska trwała w sierpniu, a traktat ryski podpisano 18 marca 1921 r."
  },
  {
    id: "R07_GRA_09",
    section: "Kształtowanie granic",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Warmia, Mazury, Powiśle, Zaolzie.",
    options: null,
    answer: "Zaolzie",
    explanation: "Warmia, Mazury i Powiśle były objęte plebiscytem z lipca 1920 r., a Zaolzie było spornym obszarem na Śląsku Cieszyńskim."
  },
  {
    id: "R07_GRA_10",
    section: "Kształtowanie granic",
    type: "riddle",
    prompt: "Jak nazywano młodzież, która walczyła o Lwów podczas konfliktu polsko-ukraińskiego?",
    options: null,
    answer: "Orlęta Lwowskie",
    altAnswers: ["Orlęta Lwowskie", "Orleta Lwowskie", "Orlęta"],
    explanation: "W regionie brakowało polskich wojsk, dlatego do walki o Lwów stanęła młodzież znana jako Orlęta Lwowskie."
  },
  {
    id: "R07_GRA_11",
    section: "Kształtowanie granic",
    type: "sort",
    prompt: "Przyporządkuj obszary do sposobu rozstrzygnięcia ich przynależności.",
    options: null,
    items: ["Wielkopolska", "Warmia", "Wileńszczyzna", "Górny Śląsk", "Galicja Wschodnia"],
    categories: ["powstanie lub walka", "plebiscyt lub referendum"],
    answer: {
      "powstanie lub walka": ["Wielkopolska", "Górny Śląsk", "Galicja Wschodnia"],
      "plebiscyt lub referendum": ["Warmia", "Wileńszczyzna"]
    },
    image: "r07_mapa_granic_ii_rp.jpg",
    explanation: "Wielkopolska, Górny Śląsk i Galicja Wschodnia wiązały się z walkami, natomiast Warmia była objęta plebiscytem, a Wileńszczyzna została włączona po referendum."
  },
  {
    id: "R07_PAR_01",
    section: "Rządy parlamentarne",
    type: "single_choice",
    prompt: "Kiedy odbyły się pierwsze wybory do sejmu ustawodawczego II Rzeczypospolitej?",
    options: ["26 stycznia 1919 r.", "20 lutego 1919 r.", "17 marca 1921 r.", "9 grudnia 1922 r.", "12 maja 1926 r.", "23 kwietnia 1935 r."],
    answer: 0,
    image: "r07_sejm_ustawodawczy.jpg",
    explanation: "Pierwsze wybory parlamentarne przeprowadzono 26 stycznia 1919 r., choć z powodu walk o granice nie objęły od razu wszystkich ziem."
  },
  {
    id: "R07_PAR_02",
    section: "Rządy parlamentarne",
    type: "true_false",
    prompt: "Mała konstytucja z 1919 r. miała obowiązywać do momentu uchwalenia pełnej ustawy zasadniczej.",
    options: null,
    answer: true,
    explanation: "Sejm przyjął małą konstytucję 20 lutego 1919 r. jako tymczasowe rozwiązanie ustrojowe."
  },
  {
    id: "R07_PAR_03",
    section: "Rządy parlamentarne",
    type: "match",
    prompt: "Połącz partię lub nurt polityczny z informacją.",
    options: null,
    left: ["Polska Partia Socjalistyczna", "PSL-Piast", "Komunistyczna Partia Polski", "Chrześcijańska Demokracja"],
    right: ["liderem był Wincenty Witos", "odwoływała się do społecznej nauki Kościoła", "była traktowana jako agentura ZSRS", "popierała demokrację parlamentarną i radykalne reformy"],
    answer: {
      "Polska Partia Socjalistyczna": "popierała demokrację parlamentarną i radykalne reformy",
      "PSL-Piast": "liderem był Wincenty Witos",
      "Komunistyczna Partia Polski": "była traktowana jako agentura ZSRS",
      "Chrześcijańska Demokracja": "odwoływała się do społecznej nauki Kościoła"
    },
    explanation: "Scena polityczna II RP była rozdrobniona i obejmowała ugrupowania lewicowe, ludowe, komunistyczne, chadeckie oraz narodowe."
  },
  {
    id: "R07_PAR_04",
    section: "Rządy parlamentarne",
    type: "multi_select",
    prompt: "Zaznacz postanowienia konstytucji marcowej z 1921 r.",
    options: ["Parlament składał się z sejmu i senatu", "Prezydenta wybierał parlament", "Władzę sądowniczą sprawowały niezawisłe sądy", "Prezydent odpowiadał jedynie przed Bogiem i historią", "Prezydent mógł mianować następcę podczas wojny", "Senat został wzmocniony kosztem sejmu"],
    answer: [0, 1, 2],
    explanation: "Konstytucja marcowa tworzyła republikę parlamentarną z silnym parlamentem i niezawisłym sądownictwem."
  },
  {
    id: "R07_PAR_05",
    section: "Rządy parlamentarne",
    type: "fill_in",
    prompt: "Konstytucja marcowa została uchwalona __________ marca __________ r.",
    options: null,
    answer: ["17", "1921"],
    altAnswers: [
      ["17", "siedemnastego"],
      ["1921", "1921 r."]
    ],
    explanation: "17 marca 1921 r. sejm ustawodawczy przyjął konstytucję marcową."
  },
  {
    id: "R07_PAR_06",
    section: "Rządy parlamentarne",
    type: "scenario",
    prompt: "Po wyborach z listopada 1922 r. parlament wybiera pierwszego prezydenta. Kandydat wygrywa dzięki głosom mniejszości narodowych, po czym staje się celem ostrej nagonki. Kto nim jest?",
    options: ["Gabriel Narutowicz", "Stanisław Wojciechowski", "Maurycy Zamoyski", "Ignacy Daszyński", "Jan Baudouin de Courtenay"],
    answer: 0,
    explanation: "Gabriel Narutowicz został wybrany 9 grudnia 1922 r., a tydzień później został zamordowany w Zachęcie."
  },
  {
    id: "R07_PAR_07",
    section: "Rządy parlamentarne",
    type: "single_choice",
    prompt: "Kto został prezydentem II Rzeczypospolitej po śmierci Gabriela Narutowicza?",
    options: ["Stanisław Wojciechowski", "Ignacy Mościcki", "Józef Piłsudski", "Wincenty Witos", "Władysław Grabski", "Maurycy Zamoyski"],
    answer: 0,
    explanation: "Po zabójstwie Narutowicza kolejnym prezydentem został Stanisław Wojciechowski związany z PSL-Piast."
  },
  {
    id: "R07_PAR_08",
    section: "Rządy parlamentarne",
    type: "riddle",
    prompt: "Jak nazywała się specjalna formacja wojskowa powołana do ochrony wschodniej granicy Polski?",
    options: null,
    answer: "Korpus Ochrony Pogranicza",
    altAnswers: ["Korpus Ochrony Pogranicza", "KOP"],
    explanation: "Korpus Ochrony Pogranicza powstał w 1924 r., aby chronić granicę wschodnią i zapewniać bezpieczeństwo miejscowej ludności."
  },
  {
    id: "R07_PAR_09",
    section: "Rządy parlamentarne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: konstytucja marcowa, sejm, senat, Centralny Okręg Przemysłowy.",
    options: null,
    answer: "Centralny Okręg Przemysłowy",
    explanation: "Konstytucja marcowa, sejm i senat dotyczą ustroju parlamentarnego, a Centralny Okręg Przemysłowy był inwestycją gospodarczą z lat 30."
  },
  {
    id: "R07_SAN_01",
    section: "Zamach majowy i sanacja",
    type: "single_choice",
    prompt: "Kiedy rozpoczął się zamach majowy?",
    options: ["12 maja 1926 r.", "14 maja 1926 r.", "1 czerwca 1926 r.", "29 maja 1926 r.", "23 kwietnia 1935 r.", "12 maja 1935 r."],
    answer: 0,
    image: "r07_zamach_majowy_most.jpg",
    explanation: "Zamach majowy rozpoczął się 12 maja 1926 r. po nieudanym spotkaniu Piłsudskiego z prezydentem Wojciechowskim."
  },
  {
    id: "R07_SAN_02",
    section: "Zamach majowy i sanacja",
    type: "multi_select",
    prompt: "Zaznacz przyczyny zamachu majowego wskazane w materiale.",
    options: ["konflikty polityczne", "niestabilne rządy", "skandale korupcyjne", "zła sytuacja gospodarcza", "zwycięstwo w plebiscycie na Warmii", "powołanie Polskich Linii Lotniczych LOT"],
    answer: [0, 1, 2, 3],
    explanation: "Zamach majowy wynikał z kryzysu rządów parlamentarnych, konfliktów politycznych, afer oraz trudnej sytuacji gospodarczej."
  },
  {
    id: "R07_SAN_03",
    section: "Zamach majowy i sanacja",
    type: "true_false",
    prompt: "Po zamachu majowym Józef Piłsudski przyjął urząd prezydenta.",
    options: null,
    answer: false,
    explanation: "Piłsudski nie przyjął urzędu prezydenta, ponieważ uważał, że konstytucja marcowa zbyt mocno ogranicza kompetencje głowy państwa."
  },
  {
    id: "R07_SAN_04",
    section: "Zamach majowy i sanacja",
    type: "single_choice",
    prompt: "Kogo wybrano na prezydenta 1 czerwca 1926 r. po zamachu majowym?",
    options: ["Ignacego Mościckiego", "Stanisława Wojciechowskiego", "Walerego Sławka", "Kazimierza Bartla", "Edwarda Rydza-Śmigłego", "Władysława Sikorskiego"],
    answer: 0,
    image: "r07_prezydent_moscicki.jpg",
    explanation: "Zgromadzenie Narodowe wybrało Ignacego Mościckiego, wskazanego przez Józefa Piłsudskiego."
  },
  {
    id: "R07_SAN_05",
    section: "Zamach majowy i sanacja",
    type: "fill_in",
    prompt: "Poprawki do konstytucji marcowej z sierpnia 1926 r. nazywano __________ sierpniową.",
    options: null,
    answer: ["nowelą"],
    altAnswers: [
      ["nowelą", "nowela", "nowelą sierpniową", "nowela sierpniowa"]
    ],
    explanation: "Nowela sierpniowa wzmacniała prezydenta, dając mu m.in. prawo wydawania dekretów z mocą ustawy i rozwiązania parlamentu."
  },
  {
    id: "R07_SAN_06",
    section: "Zamach majowy i sanacja",
    type: "match",
    prompt: "Połącz pojęcie z opisem.",
    options: null,
    left: ["sanacja moralna", "BBWR", "Centrolew", "Bereza Kartuska"],
    right: ["obóz dla więźniów politycznych", "odnowa życia publicznego głoszona przez piłsudczyków", "Bezpartyjny Blok Współpracy z Rządem", "sojusz partii opozycyjnych z 1929 r."],
    answer: {
      "sanacja moralna": "odnowa życia publicznego głoszona przez piłsudczyków",
      "BBWR": "Bezpartyjny Blok Współpracy z Rządem",
      "Centrolew": "sojusz partii opozycyjnych z 1929 r.",
      "Bereza Kartuska": "obóz dla więźniów politycznych"
    },
    explanation: "Po zamachu majowym piłsudczycy umacniali władzę, tworząc własne zaplecze polityczne i stosując represje wobec opozycji."
  },
  {
    id: "R07_SAN_07",
    section: "Zamach majowy i sanacja",
    type: "single_choice",
    prompt: "Która konstytucja wprowadziła w Polsce silne rządy prezydenckie?",
    options: ["konstytucja kwietniowa", "konstytucja marcowa", "mała konstytucja", "nowela sierpniowa", "traktat ryski", "pakt Ribbentrop-Mołotow"],
    answer: 0,
    explanation: "Konstytucja kwietniowa z 1935 r. zwiększyła uprawnienia prezydenta i ograniczyła rolę parlamentu."
  },
  {
    id: "R07_SAN_08",
    section: "Zamach majowy i sanacja",
    type: "sort",
    prompt: "Przyporządkuj elementy polityki zagranicznej sanacji do państwa.",
    options: null,
    items: ["traktat o nieagresji z 1932 r.", "deklaracja o niestosowaniu przemocy z 1934 r.", "wojna celna zakończona poprawą stosunków", "układ przedłużony do 1945 r."],
    categories: ["ZSRS", "Niemcy"],
    answer: {
      "ZSRS": ["traktat o nieagresji z 1932 r.", "układ przedłużony do 1945 r."],
      "Niemcy": ["deklaracja o niestosowaniu przemocy z 1934 r.", "wojna celna zakończona poprawą stosunków"]
    },
    explanation: "Polska prowadziła politykę równowagi: z ZSRS zawarła traktat o nieagresji, a z Niemcami deklarację o niestosowaniu przemocy."
  },
  {
    id: "R07_SAN_09",
    section: "Zamach majowy i sanacja",
    type: "sequence",
    prompt: "Ułóż wydarzenia z okresu sanacji w kolejności chronologicznej.",
    options: null,
    items: ["Uchwalenie konstytucji kwietniowej", "Powstanie Centrolewu", "Zawarcie traktatu o nieagresji z ZSRS", "Utworzenie BBWR"],
    answer: ["Utworzenie BBWR", "Powstanie Centrolewu", "Zawarcie traktatu o nieagresji z ZSRS", "Uchwalenie konstytucji kwietniowej"],
    explanation: "BBWR powstał w 1928 r., Centrolew w 1929 r., traktat z ZSRS w 1932 r., a konstytucję kwietniową uchwalono w 1935 r."
  },
  {
    id: "R07_SAN_10",
    section: "Zamach majowy i sanacja",
    type: "riddle",
    prompt: "Jak nazywała się koncepcja sojuszu państw pod przywództwem Polski rozwijana w polityce sanacji?",
    options: null,
    answer: "Międzymorze",
    altAnswers: ["Międzymorze", "koncepcja Międzymorza"],
    explanation: "Międzymorze miało być blokiem państw pod przywództwem Polski, który osłabiałby rosyjski imperializm."
  },
  {
    id: "R07_GSK_01",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "single_choice",
    prompt: "Co stanowiło podstawę gospodarki II Rzeczypospolitej?",
    options: ["rolnictwo", "przemysł lotniczy", "handel morski", "turystyka", "bankowość", "przemysł filmowy"],
    answer: 0,
    explanation: "Podstawą gospodarki II Rzeczypospolitej było rolnictwo, szczególnie ważne na obszarach dawnych zaborów rosyjskiego i austriackiego."
  },
  {
    id: "R07_GSK_02",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "true_false",
    prompt: "Polska B obejmowała słabiej rozwinięte tereny Galicji i Kresów Wschodnich.",
    options: null,
    answer: true,
    explanation: "Podział na Polskę A i Polskę B pokazywał różnice gospodarcze: Polska B była biedniejsza i słabiej rozwinięta."
  },
  {
    id: "R07_GSK_03",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "single_choice",
    prompt: "Który premier przeprowadził reformę walutową i opanował hiperinflację?",
    options: ["Władysław Grabski", "Eugeniusz Kwiatkowski", "Ignacy Mościcki", "Wincenty Witos", "Jędrzej Moraczewski", "Kazimierz Bartel"],
    answer: 0,
    explanation: "Władysław Grabski wprowadził reformę walutową, w której marka polska została zastąpiona złotym polskim."
  },
  {
    id: "R07_GSK_04",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "scenario",
    prompt: "Mała wieś rybacka blisko Sopotu w latach 20. i 30. szybko zmienia się w wielki port handlowy i wojenny. O jakim mieście mowa?",
    options: ["Gdynia", "Gdańsk", "Puck", "Toruń", "Elbląg", "Bydgoszcz"],
    answer: 0,
    image: "r07_port_gdynia.jpg",
    explanation: "Budowa portu w Gdyni była jedną z największych inwestycji II RP i uniezależniała handel morski od Wolnego Miasta Gdańska."
  },
  {
    id: "R07_GSK_05",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "multi_select",
    prompt: "Zaznacz przyczyny wyboru miejsca pod Centralny Okręg Przemysłowy.",
    options: ["oddalenie od granic ZSRS i III Rzeszy", "chęć zmniejszenia bezrobocia na przeludnionym obszarze", "położenie u zbiegu Wisły i Sanu", "bezpośredni dostęp do Morza Bałtyckiego", "przewaga ludności niemieckiej", "kontrola Ligi Narodów"],
    answer: [0, 1, 2],
    image: "r07_cop_fabryka.jpg",
    explanation: "COP zaplanowano u zbiegu Wisły i Sanu, na obszarze oddalonym od najgroźniejszych granic i dotkniętym wysokim bezrobociem."
  },
  {
    id: "R07_GSK_06",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "fill_in",
    prompt: "W 1921 r. Polska liczyła około __________ mln obywateli, a mniejszości narodowe stanowiły blisko __________% ludności.",
    options: null,
    answer: ["27", "31"],
    altAnswers: [
      ["27", "27 mln"],
      ["31", "31%"]
    ],
    explanation: "II RP miała około 27 mln obywateli, a blisko 31% stanowili przedstawiciele mniejszości narodowych."
  },
  {
    id: "R07_GSK_07",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "single_choice",
    prompt: "Która grupa społeczna była najliczniejsza w II Rzeczypospolitej?",
    options: ["chłopi", "robotnicy", "inteligencja", "ziemianie", "kupcy", "więksi przedsiębiorcy"],
    answer: 0,
    explanation: "Najliczniejszą grupą społeczną II RP byli chłopi, a rolnictwo pozostawało podstawą gospodarki państwa."
  },
  {
    id: "R07_GSK_08",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "match",
    prompt: "Połącz osiągnięcie lub zjawisko z informacją.",
    options: null,
    left: ["reforma szkolnictwa z 1932 r.", "złamanie Enigmy", "skamandryci", "Luxtorpeda"],
    right: ["szybki wagon spalinowy z drugiej połowy lat 30.", "ujednolicenie systemu szkolnego", "poeci skupieni wokół pisma Skamander", "sukces polskich matematyków i kryptologów"],
    answer: {
      "reforma szkolnictwa z 1932 r.": "ujednolicenie systemu szkolnego",
      "złamanie Enigmy": "sukces polskich matematyków i kryptologów",
      "skamandryci": "poeci skupieni wokół pisma Skamander",
      "Luxtorpeda": "szybki wagon spalinowy z drugiej połowy lat 30."
    },
    image: "r07_enigma_kryptolodzy.jpg",
    explanation: "II RP rozwijała edukację, naukę, literaturę i technikę, choć dostęp do nauki nadal zależał od warunków społecznych."
  },
  {
    id: "R07_GSK_09",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Julian Tuwim, Antoni Słonimski, Jan Lechoń, Władysław Grabski.",
    options: null,
    answer: "Władysław Grabski",
    explanation: "Tuwim, Słonimski i Lechoń byli związani ze Skamandrem, a Grabski był premierem i autorem reformy walutowej."
  },
  {
    id: "R07_GSK_10",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "single_choice",
    prompt: "Za jaką powieść Władysław Reymont otrzymał Literacką Nagrodę Nobla?",
    options: ["Chłopi", "Przedwiośnie", "Noce i dnie", "Ferdydurke", "Sklepy cynamonowe", "Popioły"],
    answer: 0,
    explanation: "Władysław Reymont otrzymał Literacką Nagrodę Nobla w 1924 r. za powieść Chłopi."
  },
  {
    id: "R07_GSK_11",
    section: "Gospodarka, społeczeństwo i kultura",
    type: "sort",
    prompt: "Przyporządkuj nazwiska do dziedzin.",
    options: null,
    items: ["Stefan Banach", "Marian Rejewski", "Mieczysława Ćwiklińska", "Tytus Czyżewski", "Eugeniusz Kwiatkowski"],
    categories: ["nauka i technika", "kultura", "gospodarka"],
    answer: {
      "nauka i technika": ["Stefan Banach", "Marian Rejewski"],
      "kultura": ["Mieczysława Ćwiklińska", "Tytus Czyżewski"],
      "gospodarka": ["Eugeniusz Kwiatkowski"]
    },
    explanation: "Banach i Rejewski reprezentują sukcesy nauki, Ćwiklińska i Czyżewski kulturę, a Kwiatkowski inwestycje gospodarcze II RP."
  },
  {
    id: "R07_SCH_01",
    section: "Schyłek niepodległości",
    type: "single_choice",
    prompt: "Kiedy wojska polskie wkroczyły na Zaolzie?",
    options: ["2 października 1938 r.", "31 marca 1939 r.", "23 sierpnia 1939 r.", "25 sierpnia 1939 r.", "5 maja 1939 r.", "26 sierpnia 1939 r."],
    answer: 0,
    explanation: "Polska zajęła Zaolzie 2 października 1938 r., co wywołało entuzjazm w kraju, ale pogorszyło jej opinię międzynarodową."
  },
  {
    id: "R07_SCH_02",
    section: "Schyłek niepodległości",
    type: "multi_select",
    prompt: "Zaznacz żądania III Rzeszy wobec Polski przedstawione jesienią 1938 r.",
    options: ["zgoda na przyłączenie Wolnego Miasta Gdańska do Rzeszy", "zgoda na eksterytorialną autostradę i linię kolejową przez Pomorze", "przystąpienie do paktu antykominternowskiego", "oddanie Zaolzia Czechosłowacji", "likwidacja Centralnego Okręgu Przemysłowego", "przekazanie Wilna Litwie"],
    answer: [0, 1, 2],
    explanation: "Niemcy domagały się Gdańska, połączenia z Prusami Wschodnimi przez Pomorze oraz przystąpienia Polski do paktu antykominternowskiego."
  },
  {
    id: "R07_SCH_03",
    section: "Schyłek niepodległości",
    type: "true_false",
    prompt: "Polskie władze konsekwentnie odmawiały przyjęcia niemieckich żądań.",
    options: null,
    answer: true,
    explanation: "Józef Beck, Edward Rydz-Śmigły i Ignacy Mościcki uznali, że Polska nie może ustąpić III Rzeszy i w razie potrzeby musi stawić opór."
  },
  {
    id: "R07_SCH_04",
    section: "Schyłek niepodległości",
    type: "single_choice",
    prompt: "Kto 31 marca 1939 r. zapewnił Polskę o pomocy w razie agresji niemieckiej?",
    options: ["Neville Chamberlain", "Józef Beck", "Joachim von Ribbentrop", "Wiaczesław Mołotow", "Adolf Hitler", "Ignacy Mościcki"],
    answer: 0,
    explanation: "Brytyjski premier Neville Chamberlain złożył deklarację pomocy Polsce, choć w praktyce była to obietnica bez pokrycia."
  },
  {
    id: "R07_SCH_05",
    section: "Schyłek niepodległości",
    type: "scenario",
    prompt: "W maju 1939 r. minister spraw zagranicznych występuje w sejmie i odrzuca niemieckie oskarżenia oraz naciski dotyczące Gdańska. Kto wygłosił to przemówienie?",
    options: ["Józef Beck", "Ignacy Mościcki", "Edward Rydz-Śmigły", "Roman Dmowski", "Walery Sławek", "Władysław Sikorski"],
    answer: 0,
    explanation: "Józef Beck wygłosił 5 maja 1939 r. przemówienie, w którym stanowczo odrzucił niemieckie żądania."
  },
  {
    id: "R07_SCH_06",
    section: "Schyłek niepodległości",
    type: "fill_in",
    prompt: "Pakt Ribbentrop-Mołotow podpisano __________ sierpnia __________ r. w Moskwie.",
    options: null,
    answer: ["23", "1939"],
    altAnswers: [
      ["23", "dwudziestego trzeciego"],
      ["1939", "1939 r."]
    ],
    explanation: "23 sierpnia 1939 r. III Rzesza i ZSRS zawarły układ o nieagresji z tajnym protokołem dotyczącym podziału Europy Środkowej."
  },
  {
    id: "R07_SCH_07",
    section: "Schyłek niepodległości",
    type: "match",
    prompt: "Połącz postać z funkcją lub państwem.",
    options: null,
    left: ["Joachim von Ribbentrop", "Wiaczesław Mołotow", "Neville Chamberlain", "Józef Beck"],
    right: ["minister spraw zagranicznych II RP", "premier Wielkiej Brytanii", "minister spraw zagranicznych III Rzeszy", "szef dyplomacji ZSRS"],
    answer: {
      "Joachim von Ribbentrop": "minister spraw zagranicznych III Rzeszy",
      "Wiaczesław Mołotow": "szef dyplomacji ZSRS",
      "Neville Chamberlain": "premier Wielkiej Brytanii",
      "Józef Beck": "minister spraw zagranicznych II RP"
    },
    explanation: "Te osoby odegrały kluczowe role w kryzysie międzynarodowym poprzedzającym wybuch II wojny światowej."
  },
  {
    id: "R07_SCH_08",
    section: "Schyłek niepodległości",
    type: "sequence",
    prompt: "Ułóż wydarzenia z lat 1938-1939 w kolejności chronologicznej.",
    options: null,
    items: ["Podpisanie paktu Ribbentrop-Mołotow", "Zajęcie Zaolzia przez Polskę", "Brytyjskie gwarancje dla Polski", "Polsko-brytyjski sojusz polityczno-wojskowy"],
    answer: ["Zajęcie Zaolzia przez Polskę", "Brytyjskie gwarancje dla Polski", "Podpisanie paktu Ribbentrop-Mołotow", "Polsko-brytyjski sojusz polityczno-wojskowy"],
    explanation: "Zaolzie zajęto w październiku 1938 r., gwarancje brytyjskie ogłoszono 31 marca 1939 r., pakt podpisano 23 sierpnia, a sojusz z Wielką Brytanią 25 sierpnia."
  },
  {
    id: "R07_SCH_09",
    section: "Schyłek niepodległości",
    type: "riddle",
    prompt: "Jak nazywał się tajny dodatek do układu niemiecko-sowieckiego, który przewidywał podział ziem polskich?",
    options: null,
    answer: "tajny protokół",
    altAnswers: ["tajny protokół", "protokół tajny", "tajny protokol"],
    explanation: "Do paktu Ribbentrop-Mołotow dołączono tajny protokół, w którym ustalono strefy interesów Niemiec i ZSRS."
  },
  {
    id: "R07_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który organ w zaborze pruskim uznawały powiatowe Rady Ludowe?",
    options: ["Naczelną Radę Ludową w Poznaniu", "Radę Regencyjną w Warszawie", "Polską Komisję Likwidacyjną w Krakowie", "Komitet Narodowy Polski w Paryżu", "Tymczasowy Komitet Rządzący we Lwowie", "Radę Narodową Księstwa Cieszyńskiego"],
    answer: 0,
    explanation: "W zaborze pruskim Rady Ludowe uznawały zwierzchnictwo Naczelnej Rady Ludowej z siedzibą w Poznaniu."
  },
  {
    id: "R07_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W Galicji Wschodniej Ukraińców wyparto za rzekę __________, a mocarstwa uznały ten region za część Polski w marcu __________ r.",
    options: null,
    answer: ["Zbrucz", "1923"],
    altAnswers: [
      ["Zbrucz", "rzekę Zbrucz", "Zbrucza"],
      ["1923", "1923 r."]
    ],
    explanation: "Walki w Galicji Wschodniej trwały do lipca 1919 r., a oficjalne uznanie regionu za część Polski nastąpiło w marcu 1923 r."
  },
  {
    id: "R07_HARD_03",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Która rzeka była miejscem decydującego uderzenia polskiego podczas Bitwy Warszawskiej?",
    options: ["Wieprz", "Niemen", "Zbrucz", "Berezyna", "Wisła", "San"],
    answer: 0,
    explanation: "16 sierpnia 1920 r. ruszył decydujący atak znad Wieprza, którym dowodził Józef Piłsudski."
  },
  {
    id: "R07_HARD_04",
    section: "Super trudne",
    type: "true_false",
    prompt: "Po traktacie ryskim za wschodnią granicą Rzeczypospolitej pozostało około miliona Polaków.",
    options: null,
    answer: true,
    explanation: "Traktat ryski wyznaczył granicę na wschodzie, ale poza państwem polskim pozostawił około miliona Polaków."
  },
  {
    id: "R07_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile rządów funkcjonowało w Rzeczypospolitej od stycznia 1919 r. do maja 1926 r.?",
    options: ["13", "7", "10", "16", "20", "3"],
    answer: 0,
    explanation: "Rozdrobnienie polityczne sprawiło, że w latach 1919-1926 działało aż 13 rządów."
  },
  {
    id: "R07_HARD_06",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Walery Sławek, Wincenty Witos, Wojciech Korfanty, Stanisław Dubois.",
    options: null,
    answer: "Walery Sławek",
    explanation: "Witos, Korfanty i Dubois byli kojarzeni z opozycją represjonowaną przez sanację, a Walery Sławek był bliskim współpracownikiem Piłsudskiego i liderem BBWR."
  },
  {
    id: "R07_HARD_07",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz instytucję lub grupę po śmierci Piłsudskiego z jej liderem albo zakresem.",
    options: null,
    left: ["grupa zamkowa", "GISZ", "Ministerstwo Spraw Zagranicznych", "OZN"],
    right: ["Edward Rydz-Śmigły", "Ignacy Mościcki", "Józef Beck", "Obóz Zjednoczenia Narodowego"],
    answer: {
      "grupa zamkowa": "Ignacy Mościcki",
      "GISZ": "Edward Rydz-Śmigły",
      "Ministerstwo Spraw Zagranicznych": "Józef Beck",
      "OZN": "Obóz Zjednoczenia Narodowego"
    },
    explanation: "Po śmierci Piłsudskiego obóz sanacji podzielił się na kręgi skupione wokół Mościckiego, Rydza-Śmigłego i Becka; w 1937 r. powstał OZN."
  },
  {
    id: "R07_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaki limit majątków ziemskich wskazano przy reformie rolnej z 1925 r. poza Kresami Wschodnimi?",
    options: ["180 hektarów", "300 hektarów", "100 hektarów", "31 hektarów", "120 hektarów", "700 hektarów"],
    answer: 0,
    explanation: "Parcelacji miały podlegać majątki powyżej 180 hektarów, a na Kresach Wschodnich powyżej 300 hektarów."
  },
  {
    id: "R07_HARD_09",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz nazwiska polskich matematyków i kryptologów pracujących nad złamaniem Enigmy.",
    options: ["Marian Rejewski", "Jerzy Różycki", "Henryk Zygalski", "Stefan Banach", "Tadeusz Kotarbiński", "Roman Ingarden"],
    answer: [0, 1, 2],
    explanation: "Kody Enigmy złamali polscy matematycy i kryptolodzy: Marian Rejewski, Jerzy Różycki i Henryk Zygalski."
  },
  {
    id: "R07_HARD_10",
    section: "Super trudne",
    type: "true_false",
    prompt: "Tajny protokół do paktu Ribbentrop-Mołotow wyznaczał strefy interesów w Polsce w przybliżeniu wzdłuż Narwi, Wisły i Sanu.",
    options: null,
    answer: true,
    explanation: "Tajny protokół przewidywał rozgraniczenie interesów Niemiec i ZSRS na ziemiach polskich wzdłuż Narwi, Wisły i Sanu."
  },
  {
    id: "R07_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który polski konstruktor wygrał z Franciszkiem Żwirką zawody Challenge w 1932 r.?",
    options: ["Stanisław Wigura", "Stanisław Skarżyński", "Marian Rejewski", "Adolf Szyszko-Bohusz", "Tytus Czyżewski", "Eugeniusz Bodo"],
    answer: 0,
    explanation: "Franciszek Żwirko i konstruktor Stanisław Wigura zwyciężyli w Międzynarodowych Zawodach Samolotów Turystycznych w 1932 r."
  },
  {
    id: "R07_HARD_12",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż akty i decyzje polityczne II RP w kolejności chronologicznej.",
    options: null,
    items: ["konstytucja kwietniowa", "mała konstytucja", "nowela sierpniowa", "konstytucja marcowa"],
    answer: ["mała konstytucja", "konstytucja marcowa", "nowela sierpniowa", "konstytucja kwietniowa"],
    explanation: "Małą konstytucję przyjęto w lutym 1919 r., konstytucję marcową w 1921 r., nowelę sierpniową w 1926 r., a konstytucję kwietniową w 1935 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Polska w okresie międzywojennym",
  icon: "🇵🇱",
  sectionOrder: [
    "Odrodzenie Rzeczypospolitej",
    "Kształtowanie granic",
    "Rządy parlamentarne",
    "Zamach majowy i sanacja",
    "Gospodarka, społeczeństwo i kultura",
    "Schyłek niepodległości"
  ],
  sectionIcons: {
    "Odrodzenie Rzeczypospolitej": "🕊️",
    "Kształtowanie granic": "🗺️",
    "Rządy parlamentarne": "🏛️",
    "Zamach majowy i sanacja": "⚖️",
    "Gospodarka, społeczeństwo i kultura": "🏗️",
    "Schyłek niepodległości": "⏳"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
