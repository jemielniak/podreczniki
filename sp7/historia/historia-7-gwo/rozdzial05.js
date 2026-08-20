// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NIE  = Odzyskanie niepodległości
//   GRA  = Walka o granice
//   RAD  = Wojna polsko-radziecka
//   RP   = Rzeczpospolita Polska
//   LAT  = Pierwsze lata niepodległej Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R05_NIE_01",
    section: "Odzyskanie niepodległości",
    type: "single_choice",
    prompt: "Które zjawisko jesienią 1918 r. szczególnie sprzyjało sprawie polskiej?",
    options: ["Zwycięstwo państw centralnych", "Klęska państw zaborczych", "Rozkwit monarchii austro-węgierskiej", "Interwencja Rosji w Polsce", "Sojusz Niemiec z Francją", "Powstanie Ligi Narodów"],
    answer: 1,
    explanation: "Jesienią 1918 r. Niemcy i Austro-Węgry przegrywały wojnę, a Rosja była osłabiona rewolucją, co stworzyło Polsce wyjątkowo korzystną sytuację."
  },
  {
    id: "R05_NIE_02",
    section: "Odzyskanie niepodległości",
    type: "multi_select",
    prompt: "Zaznacz ugrupowania, które rywalizowały o władzę w odrodzonej Polsce jesienią 1918 r.",
    options: ["Rada Regencyjna", "Obóz lewicy niepodległościowej Józefa Piłsudskiego", "Obóz narodowy Romana Dmowskiego", "Komitet Rewolucyjny w Białymstoku", "Rada Ambasadorów"],
    answer: [0, 1, 2],
    explanation: "O władzę rywalizowały trzy główne ośrodki: Rada Regencyjna, lewica niepodległościowa Piłsudskiego i obóz narodowy Dmowskiego."
  },
  {
    id: "R05_NIE_03",
    section: "Odzyskanie niepodległości",
    type: "true_false",
    prompt: "Rada Regencyjna została utworzona przez cesarzy Niemiec i Austro-Węgier.",
    options: null,
    answer: true,
    explanation: "Rada Regencyjna powstała we wrześniu 1917 r. z inicjatywy cesarzy państw centralnych, dlatego wielu Polaków uważało ją za zbyt uległą Niemcom."
  },
  {
    id: "R05_NIE_04",
    section: "Odzyskanie niepodległości",
    type: "fill_in",
    prompt: "Tajna Polska Organizacja Wojskowa została założona przez __________ w roku __________.",
    options: null,
    answer: ["Józefa Piłsudskiego", "1914"],
    altAnswers: [
      ["Józefa Piłsudskiego", "Piłsudskiego", "Józef Piłsudski"],
      ["1914", "1914 r."]
    ],
    explanation: "POW była własną siłą zbrojną obozu lewicy niepodległościowej i została założona przez Piłsudskiego w 1914 r."
  },
  {
    id: "R05_NIE_05",
    section: "Odzyskanie niepodległości",
    type: "riddle",
    prompt: "Jak nazywał się premier Tymczasowego Rządu Ludowego Republiki Polskiej w Lublinie?",
    options: null,
    answer: "Ignacy Daszyński",
    altAnswers: ["Ignacy Daszyński", "Daszyński", "Ignacy Daszynski", "Daszynski"],
    explanation: "Tymczasowy Rząd Ludowy Republiki Polskiej powstał w nocy z 6 na 7 listopada 1918 r., a jego premierem został Ignacy Daszyński."
  },
  {
    id: "R05_NIE_06",
    section: "Odzyskanie niepodległości",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do wydarzeń z 11 listopada 1918 r.: podporządkowanie rządu lubelskiego Piłsudskiemu, przekazanie Piłsudskiemu komendy nad wojskiem, rozejm kończący I wojnę światową, uchwalenie Konstytucji marcowej.",
    options: null,
    answer: "uchwalenie Konstytucji marcowej",
    explanation: "Konstytucję marcową uchwalono 17 marca 1921 r.; pozostałe wydarzenia wiązały się z 11 listopada 1918 r."
  },
  {
    id: "R05_NIE_07",
    section: "Odzyskanie niepodległości",
    type: "scenario",
    prompt: "Jest 10 listopada 1918 r. Do Warszawy przybywa zwolniony z niemieckiego więzienia polityk, który ma duży autorytet i poparcie lewicy, a prawica uznaje go za człowieka zdolnego powstrzymać rewolucję. O kim mowa?",
    options: ["Józef Piłsudski", "Roman Dmowski", "Ignacy Paderewski", "Ignacy Daszyński", "Jędrzej Moraczewski", "Gabriel Narutowicz"],
    answer: 0,
    image: "r05_pilsudski_w_warszawie.jpg",
    explanation: "Józef Piłsudski przybył do Warszawy 10 listopada 1918 r. i został uznany za osobę zdolną zakończyć spory oraz stworzyć wspólną władzę i wojsko."
  },
  {
    id: "R05_NIE_08",
    section: "Odzyskanie niepodległości",
    type: "match",
    prompt: "Połącz datę z wydarzeniem z czasu odzyskiwania niepodległości.",
    options: null,
    left: ["7 października 1918", "6/7 listopada 1918", "14 listopada 1918", "20 lutego 1919"],
    right: ["Manifest Rady Regencyjnej", "Powstanie rządu ludowego w Lublinie", "Rozwiązanie Rady Regencyjnej", "Uchwalenie Małej konstytucji"],
    answer: {
      "7 października 1918": "Manifest Rady Regencyjnej",
      "6/7 listopada 1918": "Powstanie rządu ludowego w Lublinie",
      "14 listopada 1918": "Rozwiązanie Rady Regencyjnej",
      "20 lutego 1919": "Uchwalenie Małej konstytucji"
    },
    explanation: "Daty te porządkują przejmowanie władzy od Rady Regencyjnej do Sejmu Ustawodawczego."
  },
  {
    id: "R05_NIE_09",
    section: "Odzyskanie niepodległości",
    type: "sort",
    prompt: "Przyporządkuj osoby do obozów politycznych lub rządów z pierwszych miesięcy niepodległości.",
    options: null,
    items: ["Józef Piłsudski", "Roman Dmowski", "Ignacy Daszyński", "Jędrzej Moraczewski"],
    categories: ["lewica niepodległościowa", "obóz narodowy"],
    answer: {
      "lewica niepodległościowa": ["Józef Piłsudski", "Ignacy Daszyński", "Jędrzej Moraczewski"],
      "obóz narodowy": ["Roman Dmowski"]
    },
    explanation: "Piłsudski, Daszyński i Moraczewski byli związani z obozem lewicy niepodległościowej, a Dmowski przewodził obozowi narodowemu."
  },
  {
    id: "R05_NIE_10",
    section: "Odzyskanie niepodległości",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Uchwalenie Małej konstytucji", "Przybycie Piłsudskiego do Warszawy", "Powołanie rządu Moraczewskiego", "Manifest Rady Regencyjnej"],
    answer: ["Manifest Rady Regencyjnej", "Przybycie Piłsudskiego do Warszawy", "Powołanie rządu Moraczewskiego", "Uchwalenie Małej konstytucji"],
    explanation: "Manifest Rady Regencyjnej ogłoszono 7 października 1918 r., Piłsudski przybył 10 listopada, rząd Moraczewskiego powstał 18 listopada, a Małą konstytucję uchwalono 20 lutego 1919 r."
  },
  {
    id: "R05_NIE_11",
    section: "Odzyskanie niepodległości",
    type: "single_choice",
    prompt: "Która reforma została wprowadzona przez rząd Jędrzeja Moraczewskiego?",
    options: ["Powszechne prawo wyborcze dla kobiet i mężczyzn", "Podział Górnego Śląska", "Reforma walutowa złotego", "Reforma jędrzejewiczowska", "Traktat o ochronie mniejszości", "Pokój ryski"],
    answer: 0,
    explanation: "Rząd Moraczewskiego wprowadził m.in. powszechne prawo wyborcze dla kobiet i mężczyzn, 8-godzinny dzień pracy i ubezpieczenia chorobowe."
  },
  {
    id: "R05_NIE_12",
    section: "Odzyskanie niepodległości",
    type: "true_false",
    prompt: "Mała konstytucja podporządkowała rząd i Naczelnika Państwa Sejmowi Ustawodawczemu.",
    options: null,
    answer: true,
    explanation: "Mała konstytucja z 20 lutego 1919 r. uznała Sejm Ustawodawczy za naczelny organ władzy, a rząd i Naczelnik Państwa byli mu podporządkowani."
  },
  {
    id: "R05_GRA_01",
    section: "Walka o granice",
    type: "single_choice",
    prompt: "Kto był twórcą koncepcji federacyjnej granic odrodzonej Polski?",
    options: ["Józef Piłsudski", "Roman Dmowski", "Ignacy Paderewski", "Wojciech Korfanty", "Lucjan Żeligowski", "Stanisław Wojciechowski"],
    answer: 0,
    image: "r05_mapa_granic.jpg",
    explanation: "Koncepcję federacyjną stworzył Piłsudski; zakładała ona blok państw na wschodzie, od Litwy po Ukrainę, związany federacją z Polską."
  },
  {
    id: "R05_GRA_02",
    section: "Walka o granice",
    type: "single_choice",
    prompt: "Na czym polegała koncepcja inkorporacyjna Romana Dmowskiego?",
    options: ["Na wcieleniu do Polski ziem z przewagą ludności polskiej", "Na utworzeniu monarchii z Habsburgiem", "Na oddaniu Galicji Wschodniej Ukrainie", "Na rezygnacji z Pomorza Gdańskiego", "Na połączeniu Polski z Czechosłowacją", "Na utworzeniu republiki rad"],
    answer: 0,
    explanation: "Dmowski chciał państwa narodowego obejmującego ziemie zamieszkane przez zwarte skupiska Polaków, a mniejszości miały ulec polonizacji."
  },
  {
    id: "R05_GRA_03",
    section: "Walka o granice",
    type: "multi_select",
    prompt: "Zaznacz przyczyny, dla których zasada samostanowienia narodów była trudna do zastosowania na zachodniej Ukrainie.",
    options: ["Ponad połowę ludności stanowili tam Ukraińcy", "We Lwowie i większych miastach przeważali Polacy", "Jedni i drudzy chcieli żyć we własnych państwach", "Region był bezludny", "Nie istniały tam żadne miasta"],
    answer: [0, 1, 2],
    explanation: "Na zachodniej Ukrainie ludność była przemieszana: na obszarze wiejskim przeważali Ukraińcy, a w większych miastach, zwłaszcza we Lwowie, Polacy."
  },
  {
    id: "R05_GRA_04",
    section: "Walka o granice",
    type: "true_false",
    prompt: "Orlęta Lwowskie to uczniowie polskich szkół walczący ochotniczo o Lwów.",
    options: null,
    answer: true,
    image: "r05_orleta_lwowskie.jpg",
    explanation: "W walkach o Lwów wzięli udział ochotnicy, w tym uczniowie polskich szkół nazwani Orlętami Lwowskimi."
  },
  {
    id: "R05_GRA_05",
    section: "Walka o granice",
    type: "fill_in",
    prompt: "Powstanie wielkopolskie wybuchło w __________ po przyjeździe __________.",
    options: null,
    answer: ["Poznaniu", "Ignacego Paderewskiego"],
    altAnswers: [
      ["Poznaniu", "Poznań"],
      ["Ignacego Paderewskiego", "Paderewskiego", "Ignacy Paderewski"]
    ],
    explanation: "Powstanie wielkopolskie rozpoczęło się w grudniu 1918 r. w Poznaniu po przyjeździe Ignacego Paderewskiego."
  },
  {
    id: "R05_GRA_06",
    section: "Walka o granice",
    type: "riddle",
    prompt: "Jak nazywał się traktat z czerwca 1919 r., który wyznaczył granicę polsko-niemiecką?",
    options: null,
    answer: "traktat wersalski",
    altAnswers: ["traktat wersalski", "wersalski", "Traktat wersalski"],
    explanation: "Granicę polsko-niemiecką wyznaczył traktat wersalski podpisany w czerwcu 1919 r."
  },
  {
    id: "R05_GRA_07",
    section: "Walka o granice",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do decyzji traktatu wersalskiego wobec Polski: większość Wielkopolski, Pomorze Gdańskie bez Gdańska, plebiscyty na Górnym Śląsku oraz Warmii i Mazurach, przyłączenie całej Wileńszczyzny.",
    options: null,
    answer: "przyłączenie całej Wileńszczyzny",
    explanation: "Traktat wersalski dotyczył granicy z Niemcami; sprawa Wileńszczyzny wiązała się z wydarzeniami na wschodzie i decyzjami z lat 1920-1923."
  },
  {
    id: "R05_GRA_08",
    section: "Walka o granice",
    type: "scenario",
    prompt: "Jest 20 marca 1921 r. Mieszkańcy spornego regionu głosują, czy ma on należeć do Polski czy do Niemiec. O jaki region chodzi?",
    options: ["Górny Śląsk", "Zaolzie", "Wileńszczyzna", "Galicja Zachodnia", "Pomorze Gdańskie", "Litwa Środkowa"],
    answer: 0,
    image: "r05_plebiscyt_slaski.jpg",
    explanation: "Plebiscyt z 20 marca 1921 r. dotyczył przyszłości Górnego Śląska."
  },
  {
    id: "R05_GRA_09",
    section: "Walka o granice",
    type: "match",
    prompt: "Połącz wydarzenie z miesiącem i rokiem.",
    options: null,
    left: ["Pierwsze powstanie śląskie", "Drugie powstanie śląskie", "Plebiscyt na Górnym Śląsku", "Trzecie powstanie śląskie"],
    right: ["sierpień 1919", "sierpień 1920", "marzec 1921", "maj-czerwiec 1921"],
    answer: {
      "Pierwsze powstanie śląskie": "sierpień 1919",
      "Drugie powstanie śląskie": "sierpień 1920",
      "Plebiscyt na Górnym Śląsku": "marzec 1921",
      "Trzecie powstanie śląskie": "maj-czerwiec 1921"
    },
    explanation: "Trzy wystąpienia śląskie rozgrywały się kolejno w sierpniu 1919 r., sierpniu 1920 r. i od maja do końca czerwca 1921 r.; plebiscyt odbył się w marcu 1921 r."
  },
  {
    id: "R05_GRA_10",
    section: "Walka o granice",
    type: "sort",
    prompt: "Przyporządkuj rozstrzygnięcia graniczne do obszarów.",
    options: null,
    items: ["większość Wielkopolski", "Pomorze Gdańskie bez Gdańska", "skrawki spornych ziem", "Zaolzie dla Czechosłowacji"],
    categories: ["traktat wersalski", "plebiscyt lipcowy 1920", "decyzja Rady Ambasadorów"],
    answer: {
      "traktat wersalski": ["większość Wielkopolski", "Pomorze Gdańskie bez Gdańska"],
      "plebiscyt lipcowy 1920": ["skrawki spornych ziem"],
      "decyzja Rady Ambasadorów": ["Zaolzie dla Czechosłowacji"]
    },
    explanation: "Traktat wersalski przyznał Polsce większość Wielkopolski i Pomorze Gdańskie bez Gdańska, plebiscyt na Warmii i Mazurach przyniósł jedynie skrawki ziem, a Zaolzie otrzymała Czechosłowacja."
  },
  {
    id: "R05_GRA_11",
    section: "Walka o granice",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z granicą zachodnią w porządku chronologicznym.",
    options: null,
    items: ["Plebiscyt na Górnym Śląsku", "Wybuch powstania wielkopolskiego", "Pierwsze powstanie śląskie", "Drugie powstanie śląskie"],
    answer: ["Wybuch powstania wielkopolskiego", "Pierwsze powstanie śląskie", "Drugie powstanie śląskie", "Plebiscyt na Górnym Śląsku"],
    explanation: "Powstanie wielkopolskie rozpoczęło się w grudniu 1918 r., pierwsze śląskie w sierpniu 1919 r., drugie w sierpniu 1920 r., a plebiscyt śląski w marcu 1921 r."
  },
  {
    id: "R05_GRA_12",
    section: "Walka o granice",
    type: "single_choice",
    prompt: "Dlaczego lipcowy plebiscyt na Warmii i Mazurach był dla Polski niekorzystny?",
    options: ["Bo Niemcy przekonywali o rychłym upadku Polski zagrożonej przez Armię Czerwoną", "Bo Francja odmówiła Polsce udziału w głosowaniu", "Bo region został wcześniej przyłączony do Litwy", "Bo Polacy zbojkotowali traktat wersalski", "Bo plebiscyt odbył się po podziale Górnego Śląska", "Bo głosowali tylko żołnierze alianccy"],
    answer: 0,
    explanation: "W lipcu 1920 r. Armia Czerwona zbliżała się do Warszawy, a niemiecka propaganda przedstawiała państwo polskie jako nietrwałe."
  },
  {
    id: "R05_RAD_01",
    section: "Wojna polsko-radziecka",
    type: "single_choice",
    prompt: "Kiedy doszło do pierwszych starć wojsk polskich z Armią Czerwoną?",
    options: ["w lutym 1919 r.", "w maju 1918 r.", "w listopadzie 1922 r.", "w marcu 1921 r.", "w grudniu 1923 r.", "w czerwcu 1917 r."],
    answer: 0,
    explanation: "Pierwsze starcia wojsk polskich z Armią Czerwoną nastąpiły w lutym 1919 r."
  },
  {
    id: "R05_RAD_02",
    section: "Wojna polsko-radziecka",
    type: "multi_select",
    prompt: "Zaznacz przyczyny konfliktu Polski z Rosją Radziecką.",
    options: ["Dążenie bolszewików do rozszerzenia rewolucji na zachód", "Marsz polskich żołnierzy na wschód w celu ustalenia granic", "Spór o Pomorze Gdańskie", "Rywalizacja o kontrolę nad Galicją Wschodnią", "Chęć przyłączenia Polski do Rosji Radzieckiej przez Armię Czerwoną"],
    answer: [0, 1, 3, 4],
    explanation: "Konflikt narastał na tle walk o Galicję Wschodnią, polskiego marszu na wschód i planów bolszewików, którzy chcieli nieść rewolucję przez Polskę do Niemiec."
  },
  {
    id: "R05_RAD_03",
    section: "Wojna polsko-radziecka",
    type: "true_false",
    prompt: "W kwietniu 1920 r. Piłsudski zawarł sojusz z Symonem Petlurą.",
    options: null,
    answer: true,
    image: "r05_pilsudski_petlura.jpg",
    explanation: "Sojusz z Petlurą miał pomóc w realizacji koncepcji federacyjnej; Polska uznała niepodległość Ukrainy, a Ukraina zrzekła się Galicji Wschodniej."
  },
  {
    id: "R05_RAD_04",
    section: "Wojna polsko-radziecka",
    type: "fill_in",
    prompt: "W maju 1920 r. wojska polskie zajęły __________, stolicę __________.",
    options: null,
    answer: ["Kijów", "Ukrainy"],
    altAnswers: [
      ["Kijów", "Kijow"],
      ["Ukrainy", "Ukraina"]
    ],
    explanation: "W początkach maja 1920 r. polscy żołnierze zajęli Kijów, stolicę Ukrainy."
  },
  {
    id: "R05_RAD_05",
    section: "Wojna polsko-radziecka",
    type: "riddle",
    prompt: "Jak nazwano bitwę z 13-16 sierpnia 1920 r., uznawaną też za Cud nad Wisłą?",
    options: null,
    answer: "Bitwa Warszawska",
    altAnswers: ["Bitwa Warszawska", "bitwa warszawska", "Cud nad Wisłą", "Cud nad Wisla"],
    explanation: "Bitwa Warszawska trwała od 13 do 16 sierpnia 1920 r. i zakończyła się odwrotem Armii Czerwonej."
  },
  {
    id: "R05_RAD_06",
    section: "Wojna polsko-radziecka",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do wydarzeń z lipca 1920 r.: utworzenie Rady Obrony Państwa, upadek Wilna, upadek Grodna, pokój ryski.",
    options: null,
    answer: "pokój ryski",
    explanation: "Pokój ryski podpisano w marcu 1921 r.; pozostałe wydarzenia wiązały się z kryzysem lipca 1920 r."
  },
  {
    id: "R05_RAD_07",
    section: "Wojna polsko-radziecka",
    type: "scenario",
    prompt: "Politycy różnych partii odkładają spory i 1 lipca 1920 r. tworzą organ kierowany przez Piłsudskiego, aby skoordynować obronę państwa przed Armią Czerwoną. Jak nazywał się ten organ?",
    options: ["Rada Obrony Państwa", "Rada Regencyjna", "Rada Ambasadorów", "Komitet Narodowy Polski", "Sejm Ustawodawczy", "Bank Polski"],
    answer: 0,
    explanation: "Rada Obrony Państwa powstała 1 lipca 1920 r. w obliczu zagrożenia ze strony Armii Czerwonej."
  },
  {
    id: "R05_RAD_08",
    section: "Wojna polsko-radziecka",
    type: "match",
    prompt: "Połącz wydarzenie wojny polsko-radzieckiej z datą.",
    options: null,
    left: ["Sojusz z Symonem Petlurą", "Zajęcie Kijowa", "Bitwa Warszawska", "Pokój ryski"],
    right: ["kwiecień 1920", "maj 1920", "13-16 sierpnia 1920", "marzec 1921"],
    answer: {
      "Sojusz z Symonem Petlurą": "kwiecień 1920",
      "Zajęcie Kijowa": "maj 1920",
      "Bitwa Warszawska": "13-16 sierpnia 1920",
      "Pokój ryski": "marzec 1921"
    },
    explanation: "Te daty wyznaczają drogę od wyprawy kijowskiej przez obronę Warszawy do zakończenia wojny pokojem ryskim."
  },
  {
    id: "R05_RAD_09",
    section: "Wojna polsko-radziecka",
    type: "sort",
    prompt: "Przyporządkuj postacie do strony lub roli w wydarzeniach 1919-1921.",
    options: null,
    items: ["Józef Piłsudski", "Symon Petlura", "Michaił Tuchaczewski", "Feliks Dzierżyński"],
    categories: ["strona polsko-ukraińska", "strona bolszewicka"],
    answer: {
      "strona polsko-ukraińska": ["Józef Piłsudski", "Symon Petlura"],
      "strona bolszewicka": ["Michaił Tuchaczewski", "Feliks Dzierżyński"]
    },
    explanation: "Piłsudski i Petlura zawarli sojusz, natomiast Tuchaczewski dowodził ofensywą Armii Czerwonej, a Dzierżyński należał do twórców komitetu rewolucyjnego."
  },
  {
    id: "R05_RAD_10",
    section: "Wojna polsko-radziecka",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["Bitwa nad Niemnem", "Sojusz Piłsudskiego z Petlurą", "Zajęcie Kijowa", "Pokój ryski"],
    answer: ["Sojusz Piłsudskiego z Petlurą", "Zajęcie Kijowa", "Bitwa nad Niemnem", "Pokój ryski"],
    explanation: "Sojusz zawarto w kwietniu 1920 r., Kijów zajęto w maju, bitwa nad Niemnem rozegrała się we wrześniu, a pokój ryski podpisano w marcu 1921 r."
  },
  {
    id: "R05_RAD_11",
    section: "Wojna polsko-radziecka",
    type: "single_choice",
    prompt: "Co było jednym z postanowień pokoju ryskiego?",
    options: ["Granica podzieliła Białoruś i Ukrainę na część polską i radziecką", "Polska zrzekła się Pomorza Gdańskiego", "Litwa Środkowa stała się częścią Niemiec", "Gdańsk został stolicą Polski", "Zlikwidowano Bank Polski", "Utworzono Radę Regencyjną"],
    answer: 0,
    explanation: "Pokój ryski ustalił granicę między Polską a Rosją Radziecką, dzieląc Białoruś i Ukrainę na część polską i radziecką."
  },
  {
    id: "R05_RAD_12",
    section: "Wojna polsko-radziecka",
    type: "true_false",
    prompt: "Rzekomy bunt generała Żeligowskiego doprowadził do zajęcia Wilna i utworzenia Litwy Środkowej.",
    options: null,
    answer: true,
    image: "r05_zeligowski_wilno.jpg",
    explanation: "W październiku 1920 r. upozorowany bunt generała Żeligowskiego doprowadził do zajęcia Wilna z okręgiem i ogłoszenia Litwy Środkowej."
  },
  {
    id: "R05_RP_01",
    section: "Rzeczpospolita Polska",
    type: "single_choice",
    prompt: "Co oznaczało określenie Stefana Żeromskiego, że odrodzona Polska składała się z \"trzech nierównych połówek\"?",
    options: ["Ziemie polskie przez lata należały do trzech różnych państw zaborczych", "Polska miała trzy stolice", "Państwo składało się wyłącznie z trzech województw", "Granice ustalono w trzech traktatach", "Polacy mówili trzema językami urzędowymi", "Kraj dzielił się na trzy armie"],
    answer: 0,
    explanation: "Ziemie odrodzonego państwa pochodziły z trzech zaborów, różniących się gospodarką, prawem, walutą, koleją i administracją."
  },
  {
    id: "R05_RP_02",
    section: "Rzeczpospolita Polska",
    type: "multi_select",
    prompt: "Zaznacz przykłady różnic i trudności odziedziczonych po zaborach.",
    options: ["Odmienne prawa i pieniądze", "Różne przepisy celne i podatkowe", "Szersze tory kolejowe w dawnym zaborze rosyjskim", "Jednolity system prawny w całym kraju", "Ruch lewostronny w Galicji"],
    answer: [0, 1, 2, 4],
    explanation: "Po zaborach pozostały różne systemy prawne, waluty, przepisy, a nawet odmienne rozwiązania techniczne i drogowe."
  },
  {
    id: "R05_RP_03",
    section: "Rzeczpospolita Polska",
    type: "true_false",
    prompt: "Walki w latach 1914-1921 objęły 90% obszaru odrodzonej Polski.",
    options: null,
    answer: true,
    image: "r05_zniszczone_miasteczko.jpg",
    explanation: "Skala zniszczeń była ogromna: walki objęły 90% obszaru państwa, zniszczono ponad połowę mostów i dworców oraz 18% budynków mieszkalnych."
  },
  {
    id: "R05_RP_04",
    section: "Rzeczpospolita Polska",
    type: "fill_in",
    prompt: "W 1921 r. Polska liczyła około __________ milionów mieszkańców i zajmowała __________ miejsce w Europie pod względem powierzchni i ludności.",
    options: null,
    answer: ["27", "szóste"],
    altAnswers: [
      ["27", "27 mln", "27 milionów"],
      ["szóste", "6", "szoste"]
    ],
    explanation: "W 1921 r. Polskę zamieszkiwało 27 milionów osób, a państwo zajmowało szóste miejsce w Europie zarówno pod względem powierzchni, jak i liczby ludności."
  },
  {
    id: "R05_RP_05",
    section: "Rzeczpospolita Polska",
    type: "riddle",
    prompt: "Jak nazywano konstytucję uchwaloną 17 marca 1921 r.?",
    options: null,
    answer: "Konstytucja marcowa",
    altAnswers: ["Konstytucja marcowa", "konstytucja marcowa", "marcowa"],
    explanation: "Konstytucję Rzeczypospolitej Polskiej uchwaloną 17 marca 1921 r. nazwano Konstytucją marcową."
  },
  {
    id: "R05_RP_06",
    section: "Rzeczpospolita Polska",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do struktury narodowościowej Polski w 1921 r.: Polacy, Ukraińcy, Żydzi, Francuzi.",
    options: null,
    answer: "Francuzi",
    explanation: "Do najważniejszych grup narodowościowych należeli Polacy, Ukraińcy, Żydzi, Białorusini i Niemcy; Francuzi nie stanowili jednej z głównych grup narodowościowych w Polsce."
  },
  {
    id: "R05_RP_07",
    section: "Rzeczpospolita Polska",
    type: "scenario",
    prompt: "Obywatel chce założyć stowarzyszenie i swobodnie wyrażać poglądy, o ile nie łamie prawa. Który akt prawny z 1921 r. gwarantował takie swobody?",
    options: ["Konstytucja marcowa", "Mała konstytucja", "Traktat wersalski", "Pokój ryski", "Dekret o obowiązku szkolnym", "Nota Korfantego"],
    answer: 0,
    explanation: "Konstytucja marcowa gwarantowała obywatelom m.in. wolność słowa, wolność sumienia oraz prawo zgromadzania się i tworzenia związków."
  },
  {
    id: "R05_RP_08",
    section: "Rzeczpospolita Polska",
    type: "match",
    prompt: "Połącz element ustroju z opisem wynikającym z Konstytucji marcowej.",
    options: null,
    left: ["Władza ustawodawcza", "Władza wykonawcza", "Prezydent", "Władza zwierzchnia"],
    right: ["parlament z sejmem i senatem", "prezydent i Rada Ministrów", "wybierany przez Zgromadzenie Narodowe", "należała do narodu"],
    answer: {
      "Władza ustawodawcza": "parlament z sejmem i senatem",
      "Władza wykonawcza": "prezydent i Rada Ministrów",
      "Prezydent": "wybierany przez Zgromadzenie Narodowe",
      "Władza zwierzchnia": "należała do narodu"
    },
    explanation: "Konstytucja marcowa tworzyła demokratyczną republikę parlamentarną z silną pozycją sejmu."
  },
  {
    id: "R05_RP_09",
    section: "Rzeczpospolita Polska",
    type: "sort",
    prompt: "Przyporządkuj cechy do sfer życia odrodzonego państwa.",
    options: null,
    items: ["29% gospodarstw do 2 ha", "Polacy 69% ludności", "wyznanie rzymskokatolickie 63,8%", "48% gruntów w majątkach powyżej 100 ha"],
    categories: ["rolnictwo", "społeczeństwo"],
    answer: {
      "rolnictwo": ["29% gospodarstw do 2 ha", "48% gruntów w majątkach powyżej 100 ha"],
      "społeczeństwo": ["Polacy 69% ludności", "wyznanie rzymskokatolickie 63,8%"]
    },
    explanation: "Dane o gospodarstwach i gruntach opisują problemy rolnictwa, a dane o narodowości i wyznaniu strukturę społeczeństwa."
  },
  {
    id: "R05_RP_10",
    section: "Rzeczpospolita Polska",
    type: "sequence",
    prompt: "Ułóż wydarzenia polityczne w porządku chronologicznym.",
    options: null,
    items: ["Zabójstwo Gabriela Narutowicza", "Wybory do sejmu i senatu", "Uchwalenie Konstytucji marcowej", "Wybór Gabriela Narutowicza"],
    answer: ["Uchwalenie Konstytucji marcowej", "Wybory do sejmu i senatu", "Wybór Gabriela Narutowicza", "Zabójstwo Gabriela Narutowicza"],
    explanation: "Konstytucję uchwalono w marcu 1921 r., wybory parlamentarne odbyły się w listopadzie 1922 r., Narutowicza wybrano 9 grudnia, a zamordowano 16 grudnia 1922 r."
  },
  {
    id: "R05_RP_11",
    section: "Rzeczpospolita Polska",
    type: "single_choice",
    prompt: "Kto został pierwszym prezydentem Rzeczpospolitej Polskiej?",
    options: ["Gabriel Narutowicz", "Stanisław Wojciechowski", "Józef Piłsudski", "Władysław Grabski", "Roman Dmowski", "Ignacy Daszyński"],
    answer: 0,
    image: "r05_narutowicz_zacheta.jpg",
    explanation: "Pierwszym prezydentem został Gabriel Narutowicz, wybrany przez Zgromadzenie Narodowe 9 grudnia 1922 r."
  },
  {
    id: "R05_RP_12",
    section: "Rzeczpospolita Polska",
    type: "true_false",
    prompt: "Gabriel Narutowicz został zamordowany tydzień po wyborze na prezydenta.",
    options: null,
    answer: true,
    explanation: "Narutowicza wybrano 9 grudnia 1922 r., a 16 grudnia został śmiertelnie postrzelony w Zachęcie przez fanatycznego zwolennika endecji."
  },
  {
    id: "R05_LAT_01",
    section: "Pierwsze lata niepodległej Polski",
    type: "single_choice",
    prompt: "Która formacja była podporządkowana Józefowi Piłsudskiemu i powstała w 1914 r. w Królestwie Kongresowym?",
    options: ["Polska Organizacja Wojskowa", "Armia Polska we Francji", "Polska Siła Zbrojna", "Armia Wielkopolska", "Rada Regencyjna", "Rada Obrony Państwa"],
    answer: 0,
    explanation: "Polska Organizacja Wojskowa, w skrócie POW, powstała w 1914 r. i była podporządkowana Józefowi Piłsudskiemu."
  },
  {
    id: "R05_LAT_02",
    section: "Pierwsze lata niepodległej Polski",
    type: "multi_select",
    prompt: "Zaznacz formacje, które stały się częścią lub zapleczem tworzonego Wojska Polskiego.",
    options: ["Polska Siła Zbrojna", "członkowie POW", "byli legioniści", "Armia Wielkopolska", "błękitna armia", "Rada Ambasadorów"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Wojsko Polskie tworzono z Polskiej Siły Zbrojnej, członków POW, byłych legionistów, Armii Wielkopolskiej i przybyłej z Francji błękitnej armii."
  },
  {
    id: "R05_LAT_03",
    section: "Pierwsze lata niepodległej Polski",
    type: "true_false",
    prompt: "W maju 1920 r. Wojsko Polskie liczyło ponad 950 tysięcy żołnierzy.",
    options: null,
    answer: true,
    image: "r05_wojsko_polskie_1919.jpg",
    explanation: "W maju 1920 r. Wojsko Polskie liczyło ponad 950 tysięcy żołnierzy i dysponowało wszystkimi rodzajami broni."
  },
  {
    id: "R05_LAT_04",
    section: "Pierwsze lata niepodległej Polski",
    type: "fill_in",
    prompt: "W 1919 r. władze ogłosiły obowiązkowy pobór do wojska dla poborowych w wieku __________ lat.",
    options: null,
    answer: ["18-23"],
    altAnswers: [["18-23", "18 do 23", "od 18 do 23"]],
    explanation: "Podstawę sił zbrojnych mieli stanowić poborowi w wieku 18-23 lat, zwłaszcza byli żołnierze armii państw zaborczych."
  },
  {
    id: "R05_LAT_05",
    section: "Pierwsze lata niepodległej Polski",
    type: "riddle",
    prompt: "Jak nazywała się odznaka Legionów Polskich, którą Piłsudski kazał nosić żołnierzom jako symbol jedności?",
    options: null,
    answer: "srebrny wężyk",
    altAnswers: ["srebrny wężyk", "wężyk", "srebrny wezyk", "wezyk"],
    explanation: "Srebrny wężyk na kołnierzu miał zacierać różnice między żołnierzami pochodzącymi z różnych formacji."
  },
  {
    id: "R05_LAT_06",
    section: "Pierwsze lata niepodległej Polski",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do systemów prawnych obowiązujących po odzyskaniu niepodległości: niemiecki, rosyjski, austriacki, portugalski.",
    options: null,
    answer: "portugalski",
    explanation: "Po zaborach w Polsce obowiązywały m.in. systemy niemiecki, rosyjski, austriacki, węgierski i francuski, ale nie portugalski."
  },
  {
    id: "R05_LAT_07",
    section: "Pierwsze lata niepodległej Polski",
    type: "scenario",
    prompt: "Uczeń z dawnego zaboru rosyjskiego ma rozpocząć naukę w jednolitej, bezpłatnej szkole powszechnej. Który dokument z lutego 1919 r. wprowadził taki obowiązek?",
    options: ["Dekret o obowiązku szkolnym", "Konstytucja marcowa", "Pokój ryski", "Traktat wersalski", "Mały traktat wersalski", "Kodeks karny"],
    answer: 0,
    explanation: "Dekret o obowiązku szkolnym wprowadził obowiązkową i bezpłatną 7-letnią szkołę powszechną dla dzieci od 7 do 14 roku życia."
  },
  {
    id: "R05_LAT_08",
    section: "Pierwsze lata niepodległej Polski",
    type: "match",
    prompt: "Połącz reformę lub działanie z właściwym opisem.",
    options: null,
    left: ["Ujednolicenie prawa", "Dekret o obowiązku szkolnym", "Reforma jędrzejewiczowska", "Reformy Grabskiego"],
    right: ["prace komisji sejmowej i kodeks karny z 1932 r.", "7-letnia szkoła powszechna dla dzieci od 7 do 14 lat", "nowy podział oświaty na szkoły powszechne, gimnazja i licea", "uzdrowienie finansów i stabilizacja waluty"],
    answer: {
      "Ujednolicenie prawa": "prace komisji sejmowej i kodeks karny z 1932 r.",
      "Dekret o obowiązku szkolnym": "7-letnia szkoła powszechna dla dzieci od 7 do 14 lat",
      "Reforma jędrzejewiczowska": "nowy podział oświaty na szkoły powszechne, gimnazja i licea",
      "Reformy Grabskiego": "uzdrowienie finansów i stabilizacja waluty"
    },
    explanation: "Pierwsze lata państwa wymagały scalania wojska, prawa, szkoły i finansów."
  },
  {
    id: "R05_LAT_09",
    section: "Pierwsze lata niepodległej Polski",
    type: "sort",
    prompt: "Przyporządkuj problemy do dziedzin życia państwa.",
    options: null,
    items: ["pięć systemów prawnych", "jedna trzecia dorosłych analfabetami", "hiperinflacja od wiosny 1923 r.", "żołnierze z różnych armii"],
    categories: ["prawo", "oświata", "gospodarka", "wojsko"],
    answer: {
      "prawo": ["pięć systemów prawnych"],
      "oświata": ["jedna trzecia dorosłych analfabetami"],
      "gospodarka": ["hiperinflacja od wiosny 1923 r."],
      "wojsko": ["żołnierze z różnych armii"]
    },
    explanation: "Odrodzone państwo musiało równocześnie ujednolicać prawo, rozwijać szkoły, stabilizować finanse i scalać armię."
  },
  {
    id: "R05_LAT_10",
    section: "Pierwsze lata niepodległej Polski",
    type: "sequence",
    prompt: "Ułóż wydarzenia dotyczące pierwszych lat państwa w porządku chronologicznym.",
    options: null,
    items: ["Reforma jędrzejewiczowska", "Powołanie komisji do ujednolicenia prawa", "Reformy Grabskiego", "Dekret o obowiązku szkolnym"],
    answer: ["Dekret o obowiązku szkolnym", "Powołanie komisji do ujednolicenia prawa", "Reformy Grabskiego", "Reforma jędrzejewiczowska"],
    explanation: "Dekret szkolny i komisja prawna pochodzą z 1919 r., reformy Grabskiego z lat 1923-1925, a reforma jędrzejewiczowska z 1932 r."
  },
  {
    id: "R05_LAT_11",
    section: "Pierwsze lata niepodległej Polski",
    type: "single_choice",
    prompt: "Co było skutkiem reformy walutowej Grabskiego?",
    options: ["Zastąpienie marki polskiej złotym", "Wprowadzenie rubla jako waluty", "Likwidacja Banku Polskiego", "Przyłączenie Zaolzia do Polski", "Utworzenie Litwy Środkowej", "Zniesienie szkoły powszechnej"],
    answer: 0,
    image: "r05_grabski_bank_polski.jpg",
    explanation: "Grabski utworzył Bank Polski i przeprowadził reformę walutową, która zastąpiła markę polską złotym."
  },
  {
    id: "R05_LAT_12",
    section: "Pierwsze lata niepodległej Polski",
    type: "true_false",
    prompt: "Reforma rolna rządu Grabskiego do 1939 r. objęła zaledwie 7% ogółu gruntów uprawnych.",
    options: null,
    answer: true,
    image: "r05_rolnictwo_radlo.jpg",
    explanation: "Reforma rolna była mało radykalna i postępowała wolno; do 1939 r. rozparcelowano tylko 7% ogółu gruntów uprawnych."
  },
  {
    id: "R05_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu żołnierzy niemieckich przebywało jeszcze w Warszawie 10 listopada 1918 r.?",
    options: ["30 tysięcy", "9 tysięcy", "70 tysięcy", "110 tysięcy", "385 tysięcy", "950 tysięcy"],
    answer: 0,
    explanation: "W Warszawie wciąż przebywało 30 tysięcy żołnierzy niemieckich, których zaczęto rozbrajać."
  },
  {
    id: "R05_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz elementy programu lub działań rządu Moraczewskiego.",
    options: ["8-godzinny dzień pracy", "ubezpieczenia chorobowe", "legalność związków zawodowych", "prawo do strajku", "powołanie Banku Polskiego", "pokój ryski"],
    answer: [0, 1, 2, 3],
    explanation: "Rząd Moraczewskiego wprowadził reformy społeczne i pracownicze, natomiast Bank Polski i pokój ryski należą do innych wydarzeń."
  },
  {
    id: "R05_HARD_03",
    section: "Super trudne",
    type: "true_false",
    prompt: "W plebiscycie na Górnym Śląsku oddano 707 tysięcy głosów za Niemcami i 479 tysięcy za Polską.",
    options: null,
    answer: true,
    explanation: "Niejednoznaczny wynik plebiscytu doprowadził do dalszego sporu o podział Górnego Śląska."
  },
  {
    id: "R05_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Polska odrodzona liczyła __________ km kwadratowych, czyli nieco ponad połowę obszaru Rzeczpospolitej z __________ r.",
    options: null,
    answer: ["388 600", "1772"],
    altAnswers: [
      ["388 600", "388600", "388,6 tys."],
      ["1772", "1772 r."]
    ],
    explanation: "Odrodzona Polska miała powierzchnię 388 600 km kwadratowych, czyli nieco ponad połowę obszaru Rzeczpospolitej z 1772 r."
  },
  {
    id: "R05_HARD_05",
    section: "Super trudne",
    type: "riddle",
    prompt: "Kim był człowiek, który zastrzelił Gabriela Narutowicza?",
    options: null,
    answer: "fanatyczny zwolennik endecji",
    altAnswers: ["fanatyczny zwolennik endecji", "zwolennik endecji", "fanatyk endecji"],
    explanation: "Zamachowiec był fanatycznym zwolennikiem endecji."
  },
  {
    id: "R05_HARD_06",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, które wyznanie nie pasuje do pozostałych obecnych w Polsce w 1921 r.: rzymskokatolickie, greckokatolickie, prawosławne, anglikańskie.",
    options: null,
    answer: "anglikańskie",
    explanation: "W Polsce w 1921 r. występowały m.in. wyznania rzymskokatolickie, greckokatolickie, prawosławne i protestanckie oraz judaizm."
  },
  {
    id: "R05_HARD_07",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jest jesień 1919 r. Armia Czerwona walczy z armią \"białych\". Piłsudski wstrzymuje polską ofensywę, bo uważa dawną \"białą\" Rosję za groźniejszą dla Polski. Jaki był skutek tej decyzji?",
    options: ["Bolszewicy mogli rozgromić armię \"białych\"", "Polska natychmiast otrzymała Zaolzie", "Rada Regencyjna odzyskała władzę", "Zlikwidowano Wojsko Polskie", "Gdańsk stał się częścią Polski", "Uchwalono reformę jędrzejewiczowską"],
    answer: 0,
    explanation: "Wstrzymanie polskiej ofensywy jesienią 1919 r. pozwoliło bolszewikom skupić siły przeciw armii \"białych\" i ją rozgromić."
  },
  {
    id: "R05_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz liczbę z właściwą informacją.",
    options: null,
    left: ["2,2 miliona", "385 tysięcy", "70 tysięcy", "950 tysięcy"],
    right: ["polscy rekruci w armiach zaborczych", "polegli spośród polskich rekrutów", "żołnierze błękitnej armii na początku 1919 r.", "żołnierze Wojska Polskiego w maju 1920 r."],
    answer: {
      "2,2 miliona": "polscy rekruci w armiach zaborczych",
      "385 tysięcy": "polegli spośród polskich rekrutów",
      "70 tysięcy": "żołnierze błękitnej armii na początku 1919 r.",
      "950 tysięcy": "żołnierze Wojska Polskiego w maju 1920 r."
    },
    explanation: "Liczby pokazują skalę wojskowego doświadczenia Polaków i szybkie tworzenie Wojska Polskiego."
  },
  {
    id: "R05_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj dane procentowe do opisywanych zjawisk.",
    options: null,
    items: ["65% mieszkańców utrzymywało się z rolnictwa", "29% gospodarstw do 2 ha", "48% gruntów w dużych majątkach", "63,8% wyznanie rzymskokatolickie"],
    categories: ["gospodarka rolna", "religia"],
    answer: {
      "gospodarka rolna": ["65% mieszkańców utrzymywało się z rolnictwa", "29% gospodarstw do 2 ha", "48% gruntów w dużych majątkach"],
      "religia": ["63,8% wyznanie rzymskokatolickie"]
    },
    explanation: "Trzy pierwsze dane opisują strukturę rolnictwa, a 63,8% dotyczy największego wyznania religijnego."
  },
  {
    id: "R05_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż decyzje dotyczące Wileńszczyzny i granicy wschodniej w porządku chronologicznym.",
    options: null,
    items: ["Uznanie wschodniej granicy Polski przez Radę Ambasadorów", "Rzekomy bunt generała Żeligowskiego", "Połączenie Litwy Środkowej z Polską", "Pokój ryski"],
    answer: ["Rzekomy bunt generała Żeligowskiego", "Pokój ryski", "Połączenie Litwy Środkowej z Polską", "Uznanie wschodniej granicy Polski przez Radę Ambasadorów"],
    explanation: "Żeligowski zajął Wilno w październiku 1920 r., pokój ryski podpisano w marcu 1921 r., Litwę Środkową połączono z Polską w 1922 r., a Rada Ambasadorów uznała granicę w 1923 r."
  },
  {
    id: "R05_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile gabinetów zmieniło się w Polsce w ciągu pięciu lat po uchwaleniu Konstytucji marcowej?",
    options: ["dziewięć", "trzy", "pięć", "siedem", "dwanaście", "dwa"],
    answer: 0,
    explanation: "Słabość władzy wykonawczej i zmienne koalicje sejmowe sprawiły, że w ciągu pięciu lat zmieniło się aż dziewięć gabinetów."
  },
  {
    id: "R05_HARD_12",
    section: "Super trudne",
    type: "true_false",
    prompt: "Dolar, który u schyłku 1922 r. kosztował 18 tysięcy marek polskich, rok później był wart ponad 6 milionów marek.",
    options: null,
    answer: true,
    explanation: "Przykład kursu dolara pokazuje skalę hiperinflacji w 1923 r., zanim reformy Grabskiego ustabilizowały finanse państwa."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "II Rzeczpospolita - formowanie państwa",
  icon: "🇵🇱",
  sectionOrder: [
    "Odzyskanie niepodległości",
    "Walka o granice",
    "Wojna polsko-radziecka",
    "Rzeczpospolita Polska",
    "Pierwsze lata niepodległej Polski"
  ],
  sectionIcons: {
    "Odzyskanie niepodległości": "🕊️",
    "Walka o granice": "🗺️",
    "Wojna polsko-radziecka": "⚔️",
    "Rzeczpospolita Polska": "🏛️",
    "Pierwsze lata niepodległej Polski": "📚"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
