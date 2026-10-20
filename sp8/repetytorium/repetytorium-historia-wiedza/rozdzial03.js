// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ODK = Wielkie odkrycia geograficzne
//   REN = Renesans i reformacja
//   RZE = Rzeczpospolita XVI i XVII wieku
//   EUR = Europa XVII i XVIII wieku
//   REW = Rewolucje i upadek Rzeczypospolitej
//   NAP = Epoka napoleońska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_ODK_01",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "W którym roku wyprawa Krzysztofa Kolumba dotarła do wysp Bahamów?",
    "options": [
      "1488",
      "1492",
      "1497",
      "1498",
      "1502",
      "1519"
    ],
    "image": "r03_karawela_ocean.jpg",
    "answer": 1,
    "explanation": "12 października 1492 r. Kolumb dotarł do Guanahani, którą nazwał San Salwador."
  },
  {
    "id": "R03_ODK_02",
    "section": "Wielkie odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny wielkich odkryć geograficznych.",
    "options": [
      "Wysokie ceny przypraw sprowadzanych ze Wschodu",
      "Zakaz budowania okrętów w Portugalii",
      "Chęć szerzenia chrześcijaństwa",
      "Odkrycie silników parowych",
      "Rozwój techniki żeglarskiej"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Wyprawy pobudzały wysokie ceny towarów wschodnich, chęć szerzenia chrześcijaństwa oraz postęp w żegludze."
  },
  {
    "id": "R03_ODK_03",
    "section": "Wielkie odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Vasco da Gama dotarł drogą morską do Indii w maju 1498 roku.",
    "image": "r03_szlaki_wypraw_odkrywczych.jpg",
    "options": null,
    "answer": true,
    "explanation": "Portugalski żeglarz wyruszył z Lizbony w 1497 r. i dotarł do Indii w maju następnego roku."
  },
  {
    "id": "R03_ODK_04",
    "section": "Wielkie odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "Wyprawa Ferdynanda Magellana rozpoczęła się w roku __________, a do Hiszpanii powróciła w roku __________.",
    "altAnswers": [
      [
        "1519",
        "1519 r."
      ],
      [
        "1522",
        "1522 r."
      ]
    ],
    "options": null,
    "answer": [
      "1519",
      "1522"
    ],
    "explanation": "Magellan wyruszył z pięcioma karawelami w 1519 r.; po jego śmierci wyprawa zakończyła opłynięcie świata w 1522 r."
  },
  {
    "id": "R03_ODK_05",
    "section": "Wielkie odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Jak nazywał się typ żaglowego okrętu morskiego rozpowszechniony w XV wieku podczas wypraw odkrywczych?",
    "altAnswers": [
      "karawela",
      "karawelą"
    ],
    "image": "r03_karawela_ocean.jpg",
    "options": null,
    "answer": "karawela",
    "explanation": "Karawela miała zazwyczaj trzy maszty, wysokie burty oraz miejsce na zapasy i artylerię."
  },
  {
    "id": "R03_ODK_06",
    "section": "Wielkie odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę niewymienioną wśród przywiezionych z Nowego Świata: kukurydza, kakao, ziemniaki, pszenica.",
    "options": null,
    "answer": "pszenica",
    "explanation": "Kukurydza, kakao i ziemniaki to rośliny poznane przez Europejczyków dzięki odkryciom geograficznym. Pszenica była uprawiana w Europie wcześniej."
  },
  {
    "id": "R03_ODK_07",
    "section": "Wielkie odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Jesteś żeglarzem na portugalskiej wyprawie, która opływa Afrykę i w maju 1498 roku dopływa do Indii. Kto dowodzi tą wyprawą?",
    "options": [
      "Krzysztof Kolumb",
      "Ferdynand Magellan",
      "Vasco da Gama",
      "Amerigo Vespucci",
      "Hernán Cortés",
      "Francisco Pizarro"
    ],
    "image": "r03_szlaki_wypraw_odkrywczych.jpg",
    "answer": 2,
    "explanation": "Wyprawa Vasco da Gamy dotarła do Indii drogą morską po opłynięciu Afryki."
  },
  {
    "id": "R03_ODK_08",
    "section": "Wielkie odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz odkrywcę lub zdobywcę z jego dokonaniem.",
    "left": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Hernán Cortés",
      "Francisco Pizarro"
    ],
    "right": [
      "Podbój państwa Inków",
      "Odkrycie morskiej drogi do Indii",
      "Dotarcie do Bahamów w 1492 r.",
      "Podbój państwa Azteków"
    ],
    "options": null,
    "answer": {
      "Krzysztof Kolumb": "Dotarcie do Bahamów w 1492 r.",
      "Vasco da Gama": "Odkrycie morskiej drogi do Indii",
      "Hernán Cortés": "Podbój państwa Azteków",
      "Francisco Pizarro": "Podbój państwa Inków"
    },
    "explanation": "Kolumb dotarł do Bahamów, da Gama do Indii, Cortés pokonał Azteków, a Pizarro rozpoczął podbój Inków w 1531 r."
  },
  {
    "id": "R03_ODK_09",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sort",
    "prompt": "Przyporządkuj następstwa odkryć do podanych grup.",
    "items": [
      "Rozwój niewolnictwa",
      "Pojawienie się nowych roślin uprawnych",
      "Niszczenie kultur podbitych ludów",
      "Napływ złota i srebra do Europy"
    ],
    "categories": [
      "Zmiany gospodarcze",
      "Skutki społeczne i kulturowe"
    ],
    "image": "r03_kolonie_ameryka_mapa.jpg",
    "options": null,
    "answer": {
      "Zmiany gospodarcze": [
        "Napływ złota i srebra do Europy",
        "Pojawienie się nowych roślin uprawnych"
      ],
      "Skutki społeczne i kulturowe": [
        "Rozwój niewolnictwa",
        "Niszczenie kultur podbitych ludów"
      ]
    },
    "explanation": "Odkrycia zmieniły europejską gospodarkę, a jednocześnie prowadziły do przemocy wobec podbijanych społeczności."
  },
  {
    "id": "R03_ODK_10",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z odkryciami w porządku chronologicznym.",
    "items": [
      "Rozpoczyna się wyprawa Magellana",
      "Ocalały okręt wyprawy Magellana wraca do Hiszpanii",
      "Wyprawa Kolumba dociera do Bahamów",
      "Vasco da Gama dociera do Indii"
    ],
    "options": null,
    "answer": [
      "Wyprawa Kolumba dociera do Bahamów",
      "Vasco da Gama dociera do Indii",
      "Rozpoczyna się wyprawa Magellana",
      "Ocalały okręt wyprawy Magellana wraca do Hiszpanii"
    ],
    "explanation": "Kolejność wynika z dat: 1492, 1498, 1519 i 1522."
  },
  {
    "id": "R03_REN_01",
    "section": "Renesans i reformacja",
    "type": "single_choice",
    "prompt": "Kto około 1450 roku zastosował ruchome czcionki do drukowania książek?",
    "options": [
      "Leonardo da Vinci",
      "Jan Gutenberg",
      "Mikołaj Kopernik",
      "Galileusz",
      "Rafael Santi",
      "Erazm z Rotterdamu"
    ],
    "image": "r03_prasa_gutenberga.jpg",
    "answer": 1,
    "explanation": "Jan Gutenberg upowszechnił druk książek dzięki wykorzystaniu ruchomych czcionek."
  },
  {
    "id": "R03_REN_02",
    "section": "Renesans i reformacja",
    "type": "multi_select",
    "prompt": "Które cechy były charakterystyczne dla renesansu?",
    "options": [
      "Powrót do tradycji antycznej",
      "Odrzucenie zainteresowania człowiekiem",
      "Rozkwit sztuki i nauki",
      "Rozwój filozofii",
      "Zanik literatury"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Odrodzenie nawiązywało do antyku, interesowało się człowiekiem oraz rozwijało naukę, sztukę i literaturę."
  },
  {
    "id": "R03_REN_03",
    "section": "Renesans i reformacja",
    "type": "true_false",
    "prompt": "Marcin Luter pozostawił w swoim Kościele tylko dwa sakramenty: chrzest i komunię świętą.",
    "options": null,
    "answer": true,
    "explanation": "Luter ograniczył liczbę uznawanych sakramentów do chrztu i komunii oraz popierał używanie języków narodowych w liturgii."
  },
  {
    "id": "R03_REN_04",
    "section": "Renesans i reformacja",
    "type": "fill_in",
    "prompt": "W roku __________ Marcin Luter ogłosił 95 tez w Wittenberdze, a sobór trydencki rozpoczął się w roku __________.",
    "altAnswers": [
      [
        "1517",
        "1517 r."
      ],
      [
        "1545",
        "1545 r."
      ]
    ],
    "options": null,
    "answer": [
      "1517",
      "1545"
    ],
    "explanation": "Wystąpienie Lutra miało miejsce 31 października 1517 r.; sobór trydencki obradował w latach 1545–1563."
  },
  {
    "id": "R03_REN_05",
    "section": "Renesans i reformacja",
    "type": "riddle",
    "prompt": "Jak nazywa się teoria Mikołaja Kopernika głosząca, że Ziemia krąży wokół Słońca?",
    "altAnswers": [
      "teoria heliocentryczna",
      "heliocentryzm",
      "heliocentryczna"
    ],
    "image": "r03_model_heliocentryczny.jpg",
    "options": null,
    "answer": "teoria heliocentryczna",
    "explanation": "Kopernik przedstawił ją w dziele \"O obrotach sfer niebieskich\", wydanym w 1543 r."
  },
  {
    "id": "R03_REN_06",
    "section": "Renesans i reformacja",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę niezwiązaną z twórczością artystyczną renesansu: Michał Anioł, Rafael Santi, Leonardo da Vinci, Jan Kalwin.",
    "options": null,
    "answer": "Jan Kalwin",
    "explanation": "Kalwin był reformatorem religijnym; pozostałe osoby to twórcy sztuki renesansu."
  },
  {
    "id": "R03_REN_07",
    "section": "Renesans i reformacja",
    "type": "scenario",
    "prompt": "Król Anglii chce unieważnienia małżeństwa, ale papież nie wyraża zgody. Monarcha zrywa z Rzymem i w 1534 roku zostaje głową Kościoła anglikańskiego. O którego króla chodzi?",
    "options": [
      "Henryka VIII",
      "Henryka IV",
      "Ludwika XIV",
      "Karola I",
      "Jakuba I",
      "Wilhelma III"
    ],
    "answer": 0,
    "explanation": "Henryk VIII zerwał zależność kościelną od papieża, a parlament potwierdził to Aktem supremacji."
  },
  {
    "id": "R03_REN_08",
    "section": "Renesans i reformacja",
    "type": "match",
    "prompt": "Połącz twórcę z dziełem lub osiągnięciem.",
    "left": [
      "Leonardo da Vinci",
      "Michał Anioł",
      "Erazm z Rotterdamu",
      "Mikołaj Kopernik",
      "Jan Kochanowski"
    ],
    "right": [
      "Treny",
      "Pochwała głupoty",
      "O obrotach sfer niebieskich",
      "Rzeźba Dawid",
      "Ostatnia wieczerza"
    ],
    "options": null,
    "answer": {
      "Leonardo da Vinci": "Ostatnia wieczerza",
      "Michał Anioł": "Rzeźba Dawid",
      "Erazm z Rotterdamu": "Pochwała głupoty",
      "Mikołaj Kopernik": "O obrotach sfer niebieskich",
      "Jan Kochanowski": "Treny"
    },
    "explanation": "\"Ostatnia wieczerza\" to fresk Leonarda, Dawid jest rzeźbą Michała Anioła, Erazm napisał \"Pochwałę głupoty\", Kopernik dzieło astronomiczne, a Kochanowski \"Treny\"."
  },
  {
    "id": "R03_REN_09",
    "section": "Renesans i reformacja",
    "type": "sort",
    "prompt": "Przydziel zasady do właściwego nurtu religijnego.",
    "items": [
      "Siedem sakramentów",
      "Pracowite życie bez rozrywek",
      "Zbawienie przez szczerą wiarę",
      "Kształcenie duchownych w seminariach",
      "Dwa sakramenty: chrzest i komunia",
      "Przeznaczenie z góry do zbawienia lub potępienia"
    ],
    "categories": [
      "Luteranizm",
      "Kalwinizm",
      "Katolicka reforma trydencka"
    ],
    "options": null,
    "answer": {
      "Luteranizm": [
        "Zbawienie przez szczerą wiarę",
        "Dwa sakramenty: chrzest i komunia"
      ],
      "Kalwinizm": [
        "Przeznaczenie z góry do zbawienia lub potępienia",
        "Pracowite życie bez rozrywek"
      ],
      "Katolicka reforma trydencka": [
        "Siedem sakramentów",
        "Kształcenie duchownych w seminariach"
      ]
    },
    "explanation": "Luter podkreślał wiarę, Kalwin predestynację i pracowitość, a sobór trydencki zachował siedem sakramentów i reformował kształcenie księży."
  },
  {
    "id": "R03_REN_10",
    "section": "Renesans i reformacja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia renesansu i reformacji od najwcześniejszego.",
    "items": [
      "Początek soboru trydenckiego",
      "Ogłoszenie 95 tez przez Lutra",
      "Zastosowanie ruchomych czcionek przez Gutenberga",
      "Wydanie dzieła Kopernika"
    ],
    "image": "r03_prasa_gutenberga.jpg",
    "options": null,
    "answer": [
      "Zastosowanie ruchomych czcionek przez Gutenberga",
      "Ogłoszenie 95 tez przez Lutra",
      "Wydanie dzieła Kopernika",
      "Początek soboru trydenckiego"
    ],
    "explanation": "Daty to kolejno około 1450, 1517, 1543 i 1545."
  },
  {
    "id": "R03_RZE_01",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "single_choice",
    "prompt": "Jak nazywa się akt, który w 1569 roku połączył Polskę i Litwę w Rzeczpospolitą Obojga Narodów?",
    "options": [
      "Unia brzeska",
      "Artykuły henrykowskie",
      "Unia lubelska",
      "Pokój oliwski",
      "Ugoda perejasławska",
      "Rozejm andruszowski"
    ],
    "image": "r03_rzeczpospolita_obojga_narodow_mapa.jpg",
    "answer": 2,
    "explanation": "Unia lubelska utworzyła Rzeczpospolitą Obojga Narodów, złożoną z Korony i Wielkiego Księstwa Litewskiego."
  },
  {
    "id": "R03_RZE_02",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "multi_select",
    "prompt": "Które postanowienia znalazły się w artykułach henrykowskich?",
    "options": [
      "Utrzymanie wolnej elekcji",
      "Obowiązek zwoływania sejmu co dwa lata",
      "Zniesienie wszystkich przywilejów szlacheckich",
      "Prawo wypowiedzenia posłuszeństwa królowi łamiącemu prawa",
      "Wprowadzenie tronu dziedzicznego"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Artykuły henrykowskie chroniły wolną elekcję, nakazywały królowi zwoływanie sejmów i dawały szlachcie prawo oporu wobec łamania praw."
  },
  {
    "id": "R03_RZE_03",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "true_false",
    "prompt": "Konfederacja warszawska z 1573 roku zagwarantowała szlachcie swobodę wyznania.",
    "options": null,
    "answer": true,
    "explanation": "Akt konfederacji warszawskiej gwarantował szlachcie wolność wyznania i ochronę przed prześladowaniem za przekonania religijne."
  },
  {
    "id": "R03_RZE_04",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "fill_in",
    "prompt": "W roku __________ odbył się hołd pruski, a pierwsza wolna elekcja miała miejsce w roku __________.",
    "altAnswers": [
      [
        "1525",
        "1525 r."
      ],
      [
        "1573",
        "1573 r."
      ]
    ],
    "options": null,
    "answer": [
      "1525",
      "1573"
    ],
    "explanation": "Albrecht Hohenzollern złożył hołd Zygmuntowi Staremu w 1525 r., a po wygaśnięciu Jagiellonów pierwszego elekcyjnego króla wybrano w 1573 r."
  },
  {
    "id": "R03_RZE_05",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "riddle",
    "prompt": "Jak nazywał się styl sztuki od końca XVI do połowy XVIII wieku, wyróżniający się przepychem i bogatą ornamentyką?",
    "altAnswers": [
      "barok",
      "barokowy"
    ],
    "options": null,
    "answer": "barok",
    "explanation": "Barok wyróżniały przepych, dekoracyjność i dynamiczne przedstawianie postaci; w Polsce kojarzył się m.in. z pałacami oraz sztuką sakralną."
  },
  {
    "id": "R03_RZE_06",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie należące do innej wojny niż pozostałe: obrona Jasnej Góry, konfederacja tyszowiecka, pokój w Oliwie, bitwa pod Kłuszynem.",
    "image": "r03_obrona_jasnej_gory.jpg",
    "options": null,
    "answer": "bitwa pod Kłuszynem",
    "explanation": "Obrona Jasnej Góry, konfederacja tyszowiecka i pokój oliwski wiążą się z potopem szwedzkim; bitwa pod Kłuszynem w 1610 r. dotyczyła wojny z Rosją."
  },
  {
    "id": "R03_RZE_07",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "scenario",
    "prompt": "Jest rok 1655. Najeźdźcy szwedzcy opanowali znaczną część Rzeczypospolitej, ale obrońcy przez wiele tygodni odpierają oblężenie ważnego sanktuarium. O jakie miejsce chodzi?",
    "options": [
      "Zamek w Malborku",
      "Jasna Góra w Częstochowie",
      "Wawel w Krakowie",
      "Twierdza Zamość",
      "Zamek Królewski w Warszawie"
    ],
    "image": "r03_obrona_jasnej_gory.jpg",
    "answer": 1,
    "explanation": "Trwająca od listopada do grudnia 1655 r. obrona klasztoru jasnogórskiego stała się przełomowym wydarzeniem potopu."
  },
  {
    "id": "R03_RZE_08",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "match",
    "prompt": "Połącz konflikt z wydarzeniem lub traktatem.",
    "left": [
      "Wojny ze Szwecją",
      "Wojna z Rosją na początku XVII wieku",
      "Powstanie Chmielnickiego",
      "Wojny z Turcją"
    ],
    "right": [
      "Ugoda perejasławska",
      "Odsiecz Wiednia",
      "Pokój w Oliwie",
      "Bitwa pod Kłuszynem"
    ],
    "options": null,
    "answer": {
      "Wojny ze Szwecją": "Pokój w Oliwie",
      "Wojna z Rosją na początku XVII wieku": "Bitwa pod Kłuszynem",
      "Powstanie Chmielnickiego": "Ugoda perejasławska",
      "Wojny z Turcją": "Odsiecz Wiednia"
    },
    "explanation": "Pokój w Oliwie zawarto w 1660 r., bitwę pod Kłuszynem stoczono w 1610 r., ugodę perejasławską podpisano w 1654 r., a odsiecz wiedeńska miała miejsce w 1683 r."
  },
  {
    "id": "R03_RZE_09",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "sort",
    "prompt": "Przyporządkuj cechy życia dawnej Rzeczypospolitej do gospodarki lub kultury szlacheckiej.",
    "items": [
      "Portrety trumienne",
      "Praca pańszczyźniana chłopów",
      "Magnackie rezydencje pałacowe",
      "Folwarki produkujące żywność na sprzedaż",
      "Sarmatyzm",
      "Eksport zboża"
    ],
    "categories": [
      "Gospodarka folwarczno-pańszczyźniana",
      "Kultura i życie szlachty"
    ],
    "options": null,
    "answer": {
      "Gospodarka folwarczno-pańszczyźniana": [
        "Folwarki produkujące żywność na sprzedaż",
        "Praca pańszczyźniana chłopów",
        "Eksport zboża"
      ],
      "Kultura i życie szlachty": [
        "Sarmatyzm",
        "Portrety trumienne",
        "Magnackie rezydencje pałacowe"
      ]
    },
    "explanation": "W gospodarce dominowały folwarki korzystające z pańszczyzny; w kulturze szlacheckiej rozwinęły się sarmatyzm, portret trumienny i wystawne pałace."
  },
  {
    "id": "R03_RZE_10",
    "section": "Rzeczpospolita XVI i XVII wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia historii Rzeczypospolitej w kolejności chronologicznej.",
    "items": [
      "Bitwa pod Kircholmem",
      "Hołd pruski",
      "Potop szwedzki",
      "Pierwsza wolna elekcja",
      "Unia lubelska"
    ],
    "options": null,
    "answer": [
      "Hołd pruski",
      "Unia lubelska",
      "Pierwsza wolna elekcja",
      "Bitwa pod Kircholmem",
      "Potop szwedzki"
    ],
    "explanation": "Kolejne daty: 1525, 1569, 1573, 1605 i 1655–1660."
  },
  {
    "id": "R03_EUR_01",
    "section": "Europa XVII i XVIII wieku",
    "type": "single_choice",
    "prompt": "Który francuski król nosił przydomek \"Król Słońce\" i sprawował rządy absolutne?",
    "options": [
      "Henryk IV",
      "Ludwik XIII",
      "Ludwik XVI",
      "Ludwik XIV",
      "Karol I",
      "Jakub II"
    ],
    "image": "r03_wersal_palac.jpg",
    "answer": 3,
    "explanation": "Ludwik XIV zgromadził arystokrację na dworze w Wersalu i sprawował władzę za pośrednictwem zależnej od niego administracji."
  },
  {
    "id": "R03_EUR_02",
    "section": "Europa XVII i XVIII wieku",
    "type": "multi_select",
    "prompt": "Zaznacz cechy merkantylizmu prowadzonego przez Jeana-Baptiste'a Colberta.",
    "options": [
      "Popieranie krajowego rzemiosła",
      "Zniesienie wszelkich ceł importowych",
      "Dążenie do zysków z handlu zagranicznego",
      "Nakładanie wysokich ceł na towary z importu",
      "Zakaz rozwoju manufaktur"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Polityka merkantylistyczna popierała rodzime rzemiosło i handel, zyski z eksportu oraz wysokie cła na importowane towary."
  },
  {
    "id": "R03_EUR_03",
    "section": "Europa XVII i XVIII wieku",
    "type": "true_false",
    "prompt": "W wyniku przemian w Anglii u schyłku XVII wieku parlament uzyskał nadrzędną pozycję wobec monarchy.",
    "options": null,
    "answer": true,
    "explanation": "Po rewolucjach angielskich ustawa o prawach ograniczyła samowolę króla; bez zgody parlamentu nie mógł m.in. nakładać podatków."
  },
  {
    "id": "R03_EUR_04",
    "section": "Europa XVII i XVIII wieku",
    "type": "fill_in",
    "prompt": "Edykt nantejski, zapewniający hugenotom swobodę wyznania, został wydany w roku __________ przez króla __________.",
    "altAnswers": [
      [
        "1598",
        "1598 r."
      ],
      [
        "Henryka IV",
        "Henryk IV",
        "Henryka Czwartego"
      ]
    ],
    "options": null,
    "answer": [
      "1598",
      "Henryka IV"
    ],
    "explanation": "Henryk IV wydał edykt nantejski w 1598 r.; Ludwik XIV odwołał go w 1685 r."
  },
  {
    "id": "R03_EUR_05",
    "section": "Europa XVII i XVIII wieku",
    "type": "riddle",
    "prompt": "Jak nazywał się kierunek filozoficzny Johna Locke'a uznający doświadczenie za źródło poznania?",
    "altAnswers": [
      "empiryzm"
    ],
    "image": "r03_uczeni_oswiecenie.jpg",
    "options": null,
    "answer": "empiryzm",
    "explanation": "Empiryzm Johna Locke'a uznawał doświadczenie za źródło poznania, natomiast racjonalizm Kartezjusza podkreślał rolę rozumu."
  },
  {
    "id": "R03_EUR_06",
    "section": "Europa XVII i XVIII wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie była wymieniana w grupie władców absolutyzmu oświeconego: Piotr I, Fryderyk II, Józef II, Oliver Cromwell.",
    "options": null,
    "answer": "Oliver Cromwell",
    "explanation": "Piotr I, Fryderyk II i Józef II wiążą się z reformami monarchii; Cromwell objął władzę w Anglii podczas rewolucji."
  },
  {
    "id": "R03_EUR_07",
    "section": "Europa XVII i XVIII wieku",
    "type": "scenario",
    "prompt": "Władca Francji przenosi najważniejszą arystokrację do wystawnego pałacu pod Paryżem, aby lepiej ją kontrolować i ograniczyć jej wpływy na politykę. Jak nazywa się ta rezydencja?",
    "options": [
      "Luwr",
      "Fontainebleau",
      "Wersal",
      "Tuileries",
      "Pałac Buckingham"
    ],
    "image": "r03_wersal_palac.jpg",
    "answer": 2,
    "explanation": "Ludwik XIV uczynił Wersal swoją siedzibą i narzędziem kontroli nad arystokracją."
  },
  {
    "id": "R03_EUR_08",
    "section": "Europa XVII i XVIII wieku",
    "type": "match",
    "prompt": "Połącz myślicieli oświecenia z głoszonymi przez nich ideami.",
    "left": [
      "John Locke",
      "René Descartes (Kartezjusz)",
      "Monteskiusz",
      "Wolter"
    ],
    "right": [
      "Racjonalizm",
      "Krytyka nietolerancji religijnej",
      "Trójpodział władzy",
      "Empiryzm"
    ],
    "image": "r03_uczeni_oswiecenie.jpg",
    "options": null,
    "answer": {
      "John Locke": "Empiryzm",
      "René Descartes (Kartezjusz)": "Racjonalizm",
      "Monteskiusz": "Trójpodział władzy",
      "Wolter": "Krytyka nietolerancji religijnej"
    },
    "explanation": "Locke wiązał poznanie z doświadczeniem, Kartezjusz z rozumem, Monteskiusz wskazywał na podział władz, a Wolter krytykował religijną nietolerancję."
  },
  {
    "id": "R03_EUR_09",
    "section": "Europa XVII i XVIII wieku",
    "type": "sort",
    "prompt": "Przyporządkuj reformę lub cechę rządów do właściwego państwa.",
    "items": [
      "Zniesienie poddaństwa chłopów przez Józefa II",
      "Założenie Sankt Petersburga",
      "Władca nazywał siebie pierwszym sługą państwa",
      "Reformy podatkowe Marii Teresy",
      "Utworzenie Senatu Rządzącego",
      "Wprowadzenie obowiązku szkolnego dla chłopców za Fryderyka II"
    ],
    "categories": [
      "Rosja",
      "Prusy",
      "Austria"
    ],
    "options": null,
    "answer": {
      "Rosja": [
        "Utworzenie Senatu Rządzącego",
        "Założenie Sankt Petersburga"
      ],
      "Prusy": [
        "Wprowadzenie obowiązku szkolnego dla chłopców za Fryderyka II",
        "Władca nazywał siebie pierwszym sługą państwa"
      ],
      "Austria": [
        "Reformy podatkowe Marii Teresy",
        "Zniesienie poddaństwa chłopów przez Józefa II"
      ]
    },
    "explanation": "Reformy te wiążą się odpowiednio z panowaniem Piotra I w Rosji, Fryderyka II w Prusach oraz Marii Teresy i Józefa II w Austrii."
  },
  {
    "id": "R03_EUR_10",
    "section": "Europa XVII i XVIII wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów Francji i Anglii chronologicznie.",
    "items": [
      "Odwołanie edyktu nantejskiego",
      "Restauracja Stuartów w Anglii",
      "Edykt nantejski",
      "Rozpoczęcie urzędowania kardynała Richelieu"
    ],
    "options": null,
    "answer": [
      "Edykt nantejski",
      "Rozpoczęcie urzędowania kardynała Richelieu",
      "Restauracja Stuartów w Anglii",
      "Odwołanie edyktu nantejskiego"
    ],
    "explanation": "Wydarzenia przypadają kolejno na 1598, 1624, 1660 i 1685 r."
  },
  {
    "id": "R03_REW_01",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "single_choice",
    "prompt": "Kto napisał ogłoszoną 4 lipca 1776 roku Deklarację niepodległości amerykańskich kolonii?",
    "options": [
      "Jerzy Waszyngton",
      "Benjamin Franklin",
      "Thomas Jefferson",
      "Tadeusz Kościuszko",
      "Kazimierz Pułaski",
      "John Locke"
    ],
    "answer": 2,
    "explanation": "Deklarację niepodległości przygotował Thomas Jefferson, a przyjęli ją przedstawiciele trzynastu kolonii."
  },
  {
    "id": "R03_REW_02",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "multi_select",
    "prompt": "Które zmiany wprowadzała Konstytucja 3 maja?",
    "options": [
      "Zniesienie liberum veto",
      "Zniesienie wolnej elekcji",
      "Utrwalenie jednomyślności sejmu",
      "Powołanie Straży Praw",
      "Przekazanie władzy wykonawczej sejmikom"
    ],
    "image": "r03_konstytucja_3_maja_sejm.jpg",
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Konstytucja znosiła wolną elekcję i liberum veto, a władzę wykonawczą przekazała Straży Praw."
  },
  {
    "id": "R03_REW_03",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "true_false",
    "prompt": "W bitwie pod Racławicami w 1794 roku powstańcy Tadeusza Kościuszki pokonali wojska rosyjskie.",
    "image": "r03_kosynierzy_raclawice.jpg",
    "options": null,
    "answer": true,
    "explanation": "Zwycięstwo z 4 kwietnia 1794 r. nastąpiło m.in. dzięki atakowi kosynierów, którym dowodził Bartosz Głowacki."
  },
  {
    "id": "R03_REW_04",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "fill_in",
    "prompt": "Pierwszy rozbiór Polski nastąpił w roku __________, a trzeci w roku __________.",
    "altAnswers": [
      [
        "1772",
        "1772 r."
      ],
      [
        "1795",
        "1795 r."
      ]
    ],
    "options": null,
    "answer": [
      "1772",
      "1795"
    ],
    "explanation": "Rozbiory przeprowadzono w 1772, 1793 i 1795 r.; po trzecim Rzeczpospolita zniknęła z mapy Europy."
  },
  {
    "id": "R03_REW_05",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "riddle",
    "prompt": "Jak nazywała się instytucja powołana w 1773 roku do kierowania szkolnictwem w Rzeczypospolitej?",
    "altAnswers": [
      "Komisja Edukacji Narodowej",
      "KEN"
    ],
    "options": null,
    "answer": "Komisja Edukacji Narodowej",
    "explanation": "Komisję Edukacji Narodowej powołano w 1773 r., a jej szkoły wprowadzały nowoczesne programy nauczania."
  },
  {
    "id": "R03_REW_06",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie związane z innym krajem niż pozostałe: bostońskie picie herbaty, bitwa pod Saratogą, kapitulacja pod Yorktown, szturm na Bastylię.",
    "options": null,
    "answer": "szturm na Bastylię",
    "explanation": "Bostońskie picie herbaty, Saratoga i Yorktown należą do dziejów walk o niepodległość USA; szturm na Bastylię rozpoczął rewolucję we Francji."
  },
  {
    "id": "R03_REW_07",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "scenario",
    "prompt": "W 1773 roku kolonistów oburza brytyjski podatek od herbaty. Grupa przebrana za Indian wchodzi na statki i wyrzuca skrzynie z herbatą do morza. W jakim mieście rozgrywa się to wydarzenie?",
    "options": [
      "Boston",
      "Filadelfia",
      "Nowy Jork",
      "Yorktown",
      "Charleston",
      "Savannah"
    ],
    "answer": 0,
    "explanation": "Protest znany jako bostońskie picie herbaty odbył się w porcie Boston."
  },
  {
    "id": "R03_REW_08",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "match",
    "prompt": "Połącz wydarzenie z jego datą.",
    "left": [
      "Deklaracja niepodległości USA",
      "Uchwalenie konstytucji USA",
      "Uchwalenie Konstytucji 3 maja",
      "Powstanie kościuszkowskie"
    ],
    "right": [
      "1794",
      "1787",
      "1776",
      "1791"
    ],
    "image": "r03_konstytucja_3_maja_sejm.jpg",
    "options": null,
    "answer": {
      "Deklaracja niepodległości USA": "1776",
      "Uchwalenie konstytucji USA": "1787",
      "Uchwalenie Konstytucji 3 maja": "1791",
      "Powstanie kościuszkowskie": "1794"
    },
    "explanation": "Wydarzenia miały miejsce odpowiednio w latach 1776, 1787, 1791 i 1794."
  },
  {
    "id": "R03_REW_09",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do obszaru, którego dotyczą.",
    "items": [
      "Rządy jakobinów",
      "Konfederacja targowicka",
      "Bostońskie picie herbaty",
      "Insurekcja kościuszkowska",
      "Bitwa pod Yorktown",
      "Szturm na Bastylię"
    ],
    "categories": [
      "Walka kolonii o niepodległość USA",
      "Rewolucja francuska",
      "Upadek Rzeczypospolitej"
    ],
    "options": null,
    "answer": {
      "Walka kolonii o niepodległość USA": [
        "Bostońskie picie herbaty",
        "Bitwa pod Yorktown"
      ],
      "Rewolucja francuska": [
        "Szturm na Bastylię",
        "Rządy jakobinów"
      ],
      "Upadek Rzeczypospolitej": [
        "Konfederacja targowicka",
        "Insurekcja kościuszkowska"
      ]
    },
    "explanation": "Poszczególne pary odnoszą się do rewolucji amerykańskiej, rewolucji francuskiej lub upadku Rzeczypospolitej."
  },
  {
    "id": "R03_REW_10",
    "section": "Rewolucje i upadek Rzeczypospolitej",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia końca XVIII wieku chronologicznie.",
    "items": [
      "Powstanie kościuszkowskie",
      "Szturm na Bastylię",
      "Bostońskie picie herbaty",
      "Uchwalenie Konstytucji 3 maja",
      "Deklaracja niepodległości USA"
    ],
    "options": null,
    "answer": [
      "Bostońskie picie herbaty",
      "Deklaracja niepodległości USA",
      "Szturm na Bastylię",
      "Uchwalenie Konstytucji 3 maja",
      "Powstanie kościuszkowskie"
    ],
    "explanation": "Kolejność wyznaczają lata: 1773, 1776, 1789, 1791 i 1794."
  },
  {
    "id": "R03_NAP_01",
    "section": "Epoka napoleońska",
    "type": "single_choice",
    "prompt": "W którym roku Napoleon Bonaparte koronował się na cesarza Francuzów?",
    "options": [
      "1797",
      "1799",
      "1801",
      "1804",
      "1807",
      "1812"
    ],
    "answer": 3,
    "explanation": "Koronacja cesarska Napoleona odbyła się w Paryżu 2 grudnia 1804 r."
  },
  {
    "id": "R03_NAP_02",
    "section": "Epoka napoleońska",
    "type": "multi_select",
    "prompt": "Które zasady wprowadzał Kodeks Napoleona z 1804 roku?",
    "options": [
      "Równość wobec prawa i zniesienie przywilejów stanowych",
      "Wolność osobista",
      "Przywrócenie poddaństwa osobistego",
      "Nienaruszalność prawa własności",
      "Zakaz wolności sumienia"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Kodeks Napoleona znosił przywileje stanowe, gwarantował wolność osobistą i ochronę własności."
  },
  {
    "id": "R03_NAP_03",
    "section": "Epoka napoleońska",
    "type": "true_false",
    "prompt": "Księstwo Warszawskie było samodzielnym państwem prowadzącym niezależną politykę zagraniczną.",
    "image": "r03_ksiestwo_warszawskie_mapa.jpg",
    "options": null,
    "answer": false,
    "explanation": "Księstwo Warszawskie było zależne od Francji i nie prowadziło własnej, niezależnej polityki dyplomatycznej."
  },
  {
    "id": "R03_NAP_04",
    "section": "Epoka napoleońska",
    "type": "fill_in",
    "prompt": "Legiony Polskie we Włoszech powstały w roku __________ dzięki generałowi __________.",
    "altAnswers": [
      [
        "1797",
        "1797 r."
      ],
      [
        "Janowi Henrykowi Dąbrowskiemu",
        "Jan Henryk Dąbrowski",
        "Dąbrowskiemu",
        "Jana Henryka Dąbrowskiego"
      ]
    ],
    "image": "r03_legiony_polskie_we_wloszech.jpg",
    "options": null,
    "answer": [
      "1797",
      "Janowi Henrykowi Dąbrowskiemu"
    ],
    "explanation": "Generał Jan Henryk Dąbrowski utworzył Legiony w 1797 r. na podstawie umowy z Republiką Cisalpińską."
  },
  {
    "id": "R03_NAP_05",
    "section": "Epoka napoleońska",
    "type": "riddle",
    "prompt": "Jak nazywało się państwo polskie utworzone w 1807 roku na mocy pokoju w Tylży?",
    "altAnswers": [
      "Księstwo Warszawskie",
      "Ksiestwo Warszawskie"
    ],
    "image": "r03_ksiestwo_warszawskie_mapa.jpg",
    "options": null,
    "answer": "Księstwo Warszawskie",
    "explanation": "Księstwo Warszawskie powstało w 1807 r., a Napoleon nadał mu konstytucję w Dreźnie 22 lipca tego roku."
  },
  {
    "id": "R03_NAP_06",
    "section": "Epoka napoleońska",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie niezwiązane z wojnami napoleońskimi: bitwa pod Austerlitz, bitwa pod Jeną, bitwa pod Waterloo, bitwa pod Kircholmem.",
    "options": null,
    "answer": "bitwa pod Kircholmem",
    "explanation": "Bitwa pod Kircholmem rozegrała się w 1605 r. w czasie walk polsko-szwedzkich, a pozostałe bitwy należą do wojen Napoleona."
  },
  {
    "id": "R03_NAP_07",
    "section": "Epoka napoleońska",
    "type": "scenario",
    "prompt": "W 1812 roku wielka armia francuska dociera do Moskwy. Car nie podejmuje rokowań, a odwrót w warunkach wczesnej zimy prowadzi do katastrofy. Przeciw któremu państwu Napoleon prowadził tę wyprawę?",
    "options": [
      "Austrii",
      "Rosji",
      "Prusom",
      "Hiszpanii",
      "Wielkiej Brytanii"
    ],
    "image": "r03_napoleon_odwrot_z_rosji.jpg",
    "answer": 1,
    "explanation": "Kampania 1812 r. była wyprawą Napoleona przeciw Rosji, która wyłamała się z blokady kontynentalnej."
  },
  {
    "id": "R03_NAP_08",
    "section": "Epoka napoleońska",
    "type": "match",
    "prompt": "Połącz wydarzenia z ich skutkami.",
    "left": [
      "Bitwa pod Trafalgarem",
      "Bitwa pod Austerlitz",
      "Bitwa pod Lipskiem",
      "Bitwa pod Waterloo"
    ],
    "right": [
      "Koniec stu dni Napoleona",
      "Klęska wojsk austriacko-rosyjskich",
      "Rezygnacja z inwazji na Anglię",
      "Wielka porażka Napoleona w 1813 r."
    ],
    "options": null,
    "answer": {
      "Bitwa pod Trafalgarem": "Rezygnacja z inwazji na Anglię",
      "Bitwa pod Austerlitz": "Klęska wojsk austriacko-rosyjskich",
      "Bitwa pod Lipskiem": "Wielka porażka Napoleona w 1813 r.",
      "Bitwa pod Waterloo": "Koniec stu dni Napoleona"
    },
    "explanation": "Trafalgar przekreślił plany inwazji na Anglię, Austerlitz było zwycięstwem Napoleona, Lipsk jego porażką, a Waterloo zakończyło próbę powrotu do władzy."
  },
  {
    "id": "R03_NAP_09",
    "section": "Epoka napoleońska",
    "type": "sort",
    "prompt": "Przyporządkuj zmiany do Francji Napoleona lub Księstwa Warszawskiego.",
    "items": [
      "Wprowadzenie departamentów z prefektami",
      "Ogłoszenie Kodeksu Napoleona w 1804 r.",
      "Nadanie konstytucji w Dreźnie w 1807 r.",
      "Podpisanie konkordatu z papieżem w 1801 r."
    ],
    "categories": [
      "Francja Napoleona",
      "Księstwo Warszawskie"
    ],
    "options": null,
    "answer": {
      "Francja Napoleona": [
        "Podpisanie konkordatu z papieżem w 1801 r.",
        "Ogłoszenie Kodeksu Napoleona w 1804 r."
      ],
      "Księstwo Warszawskie": [
        "Nadanie konstytucji w Dreźnie w 1807 r.",
        "Wprowadzenie departamentów z prefektami"
      ]
    },
    "explanation": "W polityce francuskiej Napoleon podpisał konkordat i ogłosił kodeks; utworzonemu Księstwu nadał konstytucję i wzorowany na Francji podział administracyjny."
  },
  {
    "id": "R03_NAP_10",
    "section": "Epoka napoleońska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia epoki napoleońskiej w porządku chronologicznym.",
    "items": [
      "Bitwa pod Waterloo",
      "Wyprawa Napoleona na Rosję",
      "Zamach stanu Napoleona i konsulat",
      "Utworzenie Księstwa Warszawskiego",
      "Koronacja Napoleona na cesarza"
    ],
    "options": null,
    "answer": [
      "Zamach stanu Napoleona i konsulat",
      "Koronacja Napoleona na cesarza",
      "Utworzenie Księstwa Warszawskiego",
      "Wyprawa Napoleona na Rosję",
      "Bitwa pod Waterloo"
    ],
    "explanation": "Wydarzenia nastąpiły kolejno w latach 1799, 1804, 1807, 1812 i 1815."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywała się wyspa, na którą Kolumb dotarł 12 października 1492 roku, zanim nadał jej nazwę San Salwador?",
    "options": [
      "Kuba",
      "Trinidad",
      "Guanahani",
      "Jamajka",
      "Hispaniola",
      "Martynika"
    ],
    "image": "r03_szlaki_wypraw_odkrywczych.jpg",
    "answer": 2,
    "explanation": "Wyspa w archipelagu Bahamów, do której dotarł Kolumb, nosiła nazwę Guanahani."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o liczebności i przebiegu wyprawy Magellana.",
    "options": [
      "Wyruszyło pięć karawel",
      "Dowódca dotarł do Indii w 1498 roku",
      "Wyruszyło 265 ludzi",
      "Do Hiszpanii wróciło 18 osób na jednym statku",
      "Magellan osobiście powrócił do Hiszpanii"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Wyprawa z 1519 r. liczyła pięć karawel i 265 ludzi; po śmierci Magellana na Filipinach wrócił w 1522 r. tylko jeden statek z 18 osobami."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Trzecia podróż Kolumba, rozpoczęta w 1498 roku, doprowadziła do odkrycia Trynidadu.",
    "options": null,
    "answer": true,
    "explanation": "Trzecia wyprawa Kolumba odkryła Trynidad u wybrzeży Wenezueli, a czwarta dotarła do Hondurasu."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pokój religijny w Augsburgu podpisano w roku __________, a unia brzeska została zawarta w roku __________.",
    "altAnswers": [
      [
        "1555",
        "1555 r."
      ],
      [
        "1596",
        "1596 r."
      ]
    ],
    "options": null,
    "answer": [
      "1555",
      "1596"
    ],
    "explanation": "Pokój augsburski wprowadził zasadę \"czyj kraj, tego religia\"; unia brzeska dała początek Kościołowi unickiemu."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Który architekt pochodzenia włoskiego współtworzył renesansową przebudowę Wawelu i kaplicę Zygmuntowską?",
    "altAnswers": [
      "Bartolomeo Berrecci",
      "Berrecci"
    ],
    "image": "r03_wawel_dziedziniec_renesansowy.jpg",
    "options": null,
    "answer": "Bartolomeo Berrecci",
    "explanation": "Bartolomeo Berrecci obok Franciszka Florentczyka pracował przy przebudowie Wawelu."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż starcie związane z innym konfliktem niż pozostałe: Żółte Wody, Korsuń, Piławce, Kłuszyn.",
    "options": null,
    "answer": "Kłuszyn",
    "explanation": "Żółte Wody, Korsuń i Piławce to klęski wojsk polskich podczas powstania Chmielnickiego w 1648 r.; Kłuszyn to bitwa z 1610 r. z wojny z Rosją."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po wielkim zwycięstwie nad wojskami rosyjsko-szwedzkimi w 1610 roku dowódca polski otwiera drogę do negocjacji o osadzeniu królewicza Władysława na tronie moskiewskim. O którego hetmana chodzi?",
    "options": [
      "Jan Karol Chodkiewicz",
      "Stanisław Żółkiewski",
      "Stefan Czarniecki",
      "Stanisław Koniecpolski",
      "Jan Sobieski"
    ],
    "answer": 1,
    "explanation": "W bitwie pod Kłuszynem zwyciężył hetman Stanisław Żółkiewski; bojarzy rozważali wówczas wybór Władysława na cara."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dokument lub akt z jego konkretnym znaczeniem.",
    "left": [
      "Artykuły henrykowskie",
      "Pacta conventa",
      "Akt supremacji",
      "Ugoda perejasławska"
    ],
    "right": [
      "Osobiste zobowiązania elekta",
      "Uznanie zwierzchnictwa cara przez Kozaków",
      "Stałe ograniczenia władzy króla elekcyjnego",
      "Zwierzchnictwo Henryka VIII nad Kościołem Anglii"
    ],
    "options": null,
    "answer": {
      "Artykuły henrykowskie": "Stałe ograniczenia władzy króla elekcyjnego",
      "Pacta conventa": "Osobiste zobowiązania elekta",
      "Akt supremacji": "Zwierzchnictwo Henryka VIII nad Kościołem Anglii",
      "Ugoda perejasławska": "Uznanie zwierzchnictwa cara przez Kozaków"
    },
    "explanation": "Dokumenty powstawały w różnych kontekstach: elekcji polskich, reformacji angielskiej i powstania kozackiego."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozdziel daty i wydarzenia potopu oraz powstania Chmielnickiego.",
    "items": [
      "Pokój w Oliwie w 1660 r.",
      "Wybuch powstania w 1648 r.",
      "Rozejm w Andruszowie w 1667 r.",
      "Obrona Jasnej Góry w 1655 r.",
      "Ugoda perejasławska w 1654 r."
    ],
    "categories": [
      "Potop szwedzki",
      "Powstanie Chmielnickiego i konflikt o Ukrainę"
    ],
    "options": null,
    "answer": {
      "Potop szwedzki": [
        "Obrona Jasnej Góry w 1655 r.",
        "Pokój w Oliwie w 1660 r."
      ],
      "Powstanie Chmielnickiego i konflikt o Ukrainę": [
        "Wybuch powstania w 1648 r.",
        "Ugoda perejasławska w 1654 r.",
        "Rozejm w Andruszowie w 1667 r."
      ]
    },
    "explanation": "Potop trwał w latach 1655–1660; wydarzenia powstania kozackiego i walk o Ukrainę obejmują lata 1648–1667."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uporządkuj dokładnie wydarzenia polityczne w Polsce XVII wieku.",
    "items": [
      "Odsiecz wiedeńska",
      "Początek potopu szwedzkiego",
      "Bitwa pod Kłuszynem",
      "Rozejm w Andruszowie",
      "Początek powstania Chmielnickiego"
    ],
    "options": null,
    "answer": [
      "Bitwa pod Kłuszynem",
      "Początek powstania Chmielnickiego",
      "Początek potopu szwedzkiego",
      "Rozejm w Andruszowie",
      "Odsiecz wiedeńska"
    ],
    "explanation": "Daty to odpowiednio 1610, 1648, 1655, 1667 i 1683 r."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywało się dzieło Stanisława Konarskiego, w którym postulował zniesienie liberum veto i głosowanie większością głosów?",
    "options": [
      "Pochwała głupoty",
      "Głos wolny wolność ubezpieczający",
      "O poprawie Rzeczypospolitej",
      "Monitor",
      "O skutecznym rad sposobie",
      "O obrotach sfer niebieskich"
    ],
    "answer": 4,
    "explanation": "Stanisław Konarski sformułował propozycje reform sejmu w dziele \"O skutecznym rad sposobie\"."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia dotyczące sejmu niemego z 1717 roku są prawdziwe?",
    "options": [
      "Odbył się w 1717 roku",
      "Obradował przez cztery lata",
      "Miał zapobiec zerwaniu obrad przez milczenie posłów",
      "Uchwalił Konstytucję 3 maja",
      "Potwierdził porozumienie po interwencji Piotra I"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Sejm niemy zatwierdził warunki porozumienia po konfederacji tarnogrodzkiej, dyktowane przy udziale posła rosyjskiego; nie dopuszczono posłów do głosu."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 1783 roku polski ochotnik walczący o niepodległość Stanów Zjednoczonych otrzymuje stopień generała brygady. Wcześniej budował umocnienia West Point i przyczynił się do sukcesu pod Saratogą. O kogo chodzi?",
    "options": [
      "Tadeusza Kościuszkę",
      "Kazimierza Pułaskiego",
      "Jana Henryka Dąbrowskiego",
      "Józefa Wybickiego",
      "Hugona Kołłątaja"
    ],
    "answer": 0,
    "explanation": "Tadeusz Kościuszko zajmował się fortyfikacjami armii amerykańskiej i otrzymał awans 13 października 1783 r."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z miejscem jej działalności lub dokonaniem.",
    "left": [
      "Stanisław Konarski",
      "Tadeusz Kościuszko",
      "Jan Henryk Dąbrowski",
      "Józef Wybicki"
    ],
    "right": [
      "Legiony Polskie we Włoszech",
      "Słowa Mazurka Dąbrowskiego",
      "Uniwersał połaniecki",
      "Postulat zniesienia liberum veto"
    ],
    "image": "r03_legiony_polskie_we_wloszech.jpg",
    "options": null,
    "answer": {
      "Stanisław Konarski": "Postulat zniesienia liberum veto",
      "Tadeusz Kościuszko": "Uniwersał połaniecki",
      "Jan Henryk Dąbrowski": "Legiony Polskie we Włoszech",
      "Józef Wybicki": "Słowa Mazurka Dąbrowskiego"
    },
    "explanation": "Konarski projektował reformę sejmu, Kościuszko wydał uniwersał w 1794 r., Dąbrowski zorganizował Legiony w 1797 r., a Wybicki napisał słowa legionowej pieśni."
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Napoleonem i sprawą polską chronologicznie.",
    "items": [
      "Bitwa pod Lipskiem i śmierć Józefa Poniatowskiego",
      "Powstanie Legionów Polskich we Włoszech",
      "Klęska Napoleona pod Waterloo",
      "Utworzenie Księstwa Warszawskiego",
      "Zamach stanu Napoleona"
    ],
    "image": "r03_napoleon_odwrot_z_rosji.jpg",
    "options": null,
    "answer": [
      "Powstanie Legionów Polskich we Włoszech",
      "Zamach stanu Napoleona",
      "Utworzenie Księstwa Warszawskiego",
      "Bitwa pod Lipskiem i śmierć Józefa Poniatowskiego",
      "Klęska Napoleona pod Waterloo"
    ],
    "explanation": "Chronologia: 1797, 1799, 1807, 1813 i 1815 r."
  }
];

const KID_PROMPTS = {
  "R03_ODK_02": "Zaznacz, dlaczego Europejczycy wyruszali na wielkie wyprawy morskie.",
  "R03_ODK_07": "Wyprawa dopłynęła z Portugalii do Indii w 1498 roku. Kto nią dowodził?",
  "R03_REN_03": "Czy Luter zachował tylko chrzest i komunię?",
  "R03_REN_05": "Jak nazywa się teoria, że Ziemia krąży wokół Słońca?",
  "R03_REN_07": "Który król Anglii w 1534 roku został głową Kościoła anglikańskiego?",
  "R03_RZE_02": "Zaznacz prawa króla i szlachty zapisane w artykułach henrykowskich.",
  "R03_RZE_07": "Jaki klasztor obroniono przed Szwedami w 1655 roku?",
  "R03_EUR_02": "Co popierał Colbert w gospodarce Francji?",
  "R03_EUR_03": "Czy angielski parlament zyskał przewagę nad królem?",
  "R03_REW_02": "Jakie zmiany w Polsce wprowadziła Konstytucja 3 maja?",
  "R03_REW_07": "W którym mieście w 1773 roku wyrzucono herbatę z brytyjskich statków?",
  "R03_NAP_03": "Czy Księstwo Warszawskie samo decydowało o polityce zagranicznej?",
  "R03_NAP_07": "Na który kraj Napoleon wyruszył w 1812 roku?",
  "R03_HARD_13": "Kto budował West Point i dostał awans w armii USA w 1783 roku?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Nowożytność",
  "icon": "🌍",
  "sectionOrder": [
    "Wielkie odkrycia geograficzne",
    "Renesans i reformacja",
    "Rzeczpospolita XVI i XVII wieku",
    "Europa XVII i XVIII wieku",
    "Rewolucje i upadek Rzeczypospolitej",
    "Epoka napoleońska"
  ],
  "sectionIcons": {
    "Wielkie odkrycia geograficzne": "🧭",
    "Renesans i reformacja": "🎨",
    "Rzeczpospolita XVI i XVII wieku": "🏰",
    "Europa XVII i XVIII wieku": "🏛️",
    "Rewolucje i upadek Rzeczypospolitej": "⚖️",
    "Epoka napoleońska": "🎖️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
