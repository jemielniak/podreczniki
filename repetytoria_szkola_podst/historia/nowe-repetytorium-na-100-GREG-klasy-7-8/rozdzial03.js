// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POW  = Europa i świat po I wojnie światowej
//   TOT  = Totalitaryzmy w Europie
//   GRA  = Odrodzenie Polski i walka o granice
//   IIR  = Polityka II Rzeczpospolitej
//   GKS  = Społeczeństwo, gospodarka i kultura II RP
//   WOJ  = Droga do II wojny światowej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_POW_01",
    section: "Europa i świat po I wojnie światowej",
    type: "single_choice",
    prompt: "Gdzie obradowała konferencja pokojowa, na której ustalono ład powojenny po I wojnie światowej?",
    options: [
      "Wersal",
      "Genewa",
      "Locarno",
      "Berlin",
      "Rzym",
      "Bruksela"
    ],
    answer: 0,
    explanation: "Przedstawiciele 27 państw obradowali w Wersalu, a 28 VI 1919 r. podpisano traktat wersalski."
  },
  {
    id: "R03_POW_02",
    section: "Europa i świat po I wojnie światowej",
    type: "multi_select",
    prompt: "Zaznacz postanowienia traktatu wersalskiego dotyczące Niemiec.",
    options: [
      "Pozostawienie armii liczącej 100 tys. żołnierzy",
      "Zniesienie obowiązkowej służby wojskowej",
      "Demilitaryzacja prawego brzegu Renu",
      "Pozbawienie Niemiec kolonii",
      "Zgoda na połączenie Niemiec z Austrią",
      "Przekazanie Niemcom Alzacji i Lotaryngii"
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    image: "r03_mapa_europy_po_i_wojnie.jpg",
    explanation: "Traktat ograniczał Niemcy terytorialnie, wojskowo i gospodarczo: m.in. zmniejszał armię, znosił obowiązkową służbę wojskową, demilitaryzował część Nadrenii i odbierał kolonie."
  },
  {
    id: "R03_POW_03",
    section: "Europa i świat po I wojnie światowej",
    type: "true_false",
    prompt: "Stany Zjednoczone nie znalazły się wśród państw, które podpisały pakt Ligi Narodów.",
    options: null,
    answer: true,
    explanation: "Liga Narodów powstała z inicjatywy prezydenta USA Woodrowa Wilsona, ale USA nie było wśród 44 państw podpisujących jej pakt."
  },
  {
    id: "R03_POW_04",
    section: "Europa i świat po I wojnie światowej",
    type: "fill_in",
    prompt: "Siedzibą Ligi Narodów była __________, a organizację formalnie rozwiązano w roku __________.",
    options: null,
    answer: [
      "Genewa",
      "1946"
    ],
    altAnswers: [
      [
        "Genewa",
        "Genewie"
      ],
      [
        "1946",
        "1946 r."
      ]
    ],
    explanation: "Liga Narodów miała siedzibę w Genewie i została formalnie rozwiązana 18 IV 1946 r."
  },
  {
    id: "R03_POW_05",
    section: "Europa i świat po I wojnie światowej",
    type: "riddle",
    prompt: "Organizacja utworzona w 1920 r. w celu utrzymania pokoju i współpracy na świecie to...",
    options: null,
    answer: "Liga Narodów",
    altAnswers: [
      "Liga Narodów",
      "Liga Narodow"
    ],
    explanation: "Była to Liga Narodów, której statut przyjęto podczas konferencji pokojowej w Wersalu."
  },
  {
    id: "R03_POW_06",
    section: "Europa i świat po I wojnie światowej",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie należało do Wielkiej Czwórki: Francja, Wielka Brytania, Włochy, Polska.",
    options: null,
    answer: "Polska",
    explanation: "Wielką Czwórkę tworzyły Francja, Wielka Brytania, Włochy i USA. Polska do niej nie należała."
  },
  {
    id: "R03_POW_07",
    section: "Europa i świat po I wojnie światowej",
    type: "scenario",
    prompt: "Jest 24 X 1929 r. Na nowojorskiej giełdzie gwałtownie spadają ceny akcji. Banki ograniczają kredyty, zamykane są zakłady pracy, a kryzys szybko obejmuje inne kraje. Jak nazywa się to zjawisko?",
    options: [
      "Wielki Kryzys Ekonomiczny",
      "New Deal",
      "Komunizm wojenny",
      "Wojna celna",
      "Plan Marshalla",
      "Reforma walutowa"
    ],
    answer: 0,
    image: "r03_krach_gieldowy_1929.jpg",
    explanation: "Krach giełdowy z 24 X 1929 r., nazywany czarnym czwartkiem, zapoczątkował Wielki Kryzys Ekonomiczny."
  },
  {
    id: "R03_POW_08",
    section: "Europa i świat po I wojnie światowej",
    type: "match",
    prompt: "Połącz obszar z jego losem po traktacie wersalskim.",
    options: null,
    left: [
      "Alzacja i Lotaryngia",
      "Wielkopolska i Pomorze",
      "Gdańsk",
      "Zagłębie Saary"
    ],
    right: [
      "Francja",
      "Polska",
      "Wolne Miasto pod zarządem Ligi Narodów",
      "Kontrola Ligi Narodów przez 15 lat"
    ],
    answer: {
      "Alzacja i Lotaryngia": "Francja",
      "Wielkopolska i Pomorze": "Polska",
      "Gdańsk": "Wolne Miasto pod zarządem Ligi Narodów",
      "Zagłębie Saary": "Kontrola Ligi Narodów przez 15 lat"
    },
    image: "r03_mapa_europy_po_i_wojnie.jpg",
    explanation: "Traktat wersalski zmienił granice i status wielu obszarów: m.in. Francja odzyskała Alzację i Lotaryngię, Polska otrzymała Wielkopolskę i Pomorze, a Gdańsk stał się Wolnym Miastem."
  },
  {
    id: "R03_POW_09",
    section: "Europa i świat po I wojnie światowej",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Wprowadzenie New Deal w USA",
      "Powstanie Ligi Narodów",
      "Krach na giełdzie nowojorskiej",
      "Podpisanie traktatu wersalskiego"
    ],
    answer: [
      "Podpisanie traktatu wersalskiego",
      "Powstanie Ligi Narodów",
      "Krach na giełdzie nowojorskiej",
      "Wprowadzenie New Deal w USA"
    ],
    explanation: "Najpierw podpisano traktat wersalski w 1919 r., potem utworzono Ligę Narodów w 1920 r., w 1929 r. nastąpił krach giełdowy, a w 1933 r. w USA wprowadzono New Deal."
  },
  {
    id: "R03_TOT_01",
    section: "Totalitaryzmy w Europie",
    type: "single_choice",
    prompt: "Jak nazywała się partia, w którą w 1920 r. przekształciła się Niemiecka Partia Robotnicza?",
    options: [
      "NSDAP",
      "SPD",
      "WKP(b)",
      "PPS",
      "BBWR",
      "Ozon"
    ],
    answer: 0,
    explanation: "W 1920 r. Niemiecka Partia Robotnicza przekształciła się w Narodowosocjalistyczną Partię Robotniczą Niemiec, czyli NSDAP."
  },
  {
    id: "R03_TOT_02",
    section: "Totalitaryzmy w Europie",
    type: "true_false",
    prompt: "W systemie totalitarnym jedna partia za pomocą aparatu represji i terroru kontroluje życie społeczne, polityczne, ekonomiczne i prywatne obywateli.",
    options: null,
    answer: true,
    image: "r03_propaganda_totalitarna.jpg",
    explanation: "Totalitaryzm to system jednej partii, która kontroluje różne sfery życia i zwalcza przeciwników przemocą i terrorem."
  },
  {
    id: "R03_TOT_03",
    section: "Totalitaryzmy w Europie",
    type: "multi_select",
    prompt: "Zaznacz elementy ideologii i praktyki nazizmu.",
    options: [
      "Nacjonalizm",
      "Rasizm",
      "Antysemityzm",
      "System monopartyjny",
      "Pełna wolność prasy",
      "Pluralizm partyjny"
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Nazizm opierał się m.in. na nacjonalizmie, rasizmie i antysemityzmie, systemie monopartyjnym, terrorze oraz kulcie wodza."
  },
  {
    id: "R03_TOT_04",
    section: "Totalitaryzmy w Europie",
    type: "fill_in",
    prompt: "Nieudany pucz Adolfa Hitlera w 1923 r. miał miejsce w __________, a w więzieniu napisał on książkę __________.",
    options: null,
    answer: [
      "Monachium",
      "Mein Kampf"
    ],
    altAnswers: [
      [
        "Monachium",
        "Monachium w Bawarii"
      ],
      [
        "Mein Kampf",
        "Mein Kampf (Moja walka)",
        "Moja walka"
      ]
    ],
    image: "r03_hitler_monachium_1923.jpg",
    explanation: "Po nieudanym puczu w Monachium Hitler został skazany na więzienie, gdzie napisał Mein Kampf."
  },
  {
    id: "R03_TOT_05",
    section: "Totalitaryzmy w Europie",
    type: "match",
    prompt: "Połącz państwo z odmianą totalitaryzmu.",
    options: null,
    left: [
      "Włochy",
      "Niemcy",
      "ZSRS"
    ],
    right: [
      "faszyzm",
      "nazizm",
      "komunizm"
    ],
    answer: {
      "Włochy": "faszyzm",
      Niemcy: "nazizm",
      ZSRS: "komunizm"
    },
    explanation: "Do odmian systemu totalitarnego należały faszyzm we Włoszech, nazizm w Niemczech i komunizm w ZSRS."
  },
  {
    id: "R03_TOT_06",
    section: "Totalitaryzmy w Europie",
    type: "riddle",
    prompt: "Obóz pracy przymusowej w Rosji Sowieckiej i ZSRS, w którym więźniowie pracowali w skrajnie trudnych warunkach, to...",
    options: null,
    answer: "łagier",
    altAnswers: [
      "łagier",
      "lagier",
      "łagry",
      "lagry"
    ],
    image: "r03_lagier_syberia.jpg",
    explanation: "Takim obozem był łagier. Łagry mieściły się m.in. na północy i Syberii, a śmiertelność więźniów była bardzo wysoka."
  },
  {
    id: "R03_TOT_07",
    section: "Totalitaryzmy w Europie",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do aparatu i bojówek nazistowskich: Gestapo, SS, SA, Liga Narodów.",
    options: null,
    answer: "Liga Narodów",
    explanation: "Gestapo, SS i SA były związane z nazistowskim aparatem przemocy. Liga Narodów była organizacją międzynarodową."
  },
  {
    id: "R03_TOT_08",
    section: "Totalitaryzmy w Europie",
    type: "scenario",
    prompt: "Władze upaństwawiają gospodarkę, likwidują handel prywatny, wprowadzają obowiązek pracy i przymusowe dostawy żywności ze wsi. Dzieje się to w Rosji radzieckiej w latach 1918-1921. Jak nazywa się ten system?",
    options: [
      "Komunizm wojenny",
      "New Deal",
      "Sanacja",
      "NEP",
      "Faszyzm",
      "Polityka równowagi"
    ],
    answer: 0,
    explanation: "W latach 1918-1921 bolszewicy stosowali komunizm wojenny, który doprowadził m.in. do spadku produkcji, głodu i represji."
  },
  {
    id: "R03_TOT_09",
    section: "Totalitaryzmy w Europie",
    type: "sort",
    prompt: "Przyporządkuj pojęcia do nazizmu w Niemczech albo komunizmu i stalinizmu w ZSRS.",
    options: null,
    items: [
      "Hitlerjugend",
      "ustawy norymberskie",
      "Mein Kampf",
      "kołchozy",
      "łagry",
      "kolektywizacja rolnictwa"
    ],
    categories: [
      "Nazizm w Niemczech",
      "Komunizm i stalinizm w ZSRS"
    ],
    answer: {
      "Nazizm w Niemczech": [
        "Hitlerjugend",
        "ustawy norymberskie",
        "Mein Kampf"
      ],
      "Komunizm i stalinizm w ZSRS": [
        "kołchozy",
        "łagry",
        "kolektywizacja rolnictwa"
      ]
    },
    explanation: "Hitlerjugend, ustawy norymberskie i Mein Kampf są związane z nazizmem, natomiast kołchozy, łagry i kolektywizacja z systemem sowieckim."
  },
  {
    id: "R03_GRA_01",
    section: "Odrodzenie Polski i walka o granice",
    type: "single_choice",
    prompt: "Kto w listopadzie 1918 r. objął władzę wojskową, a następnie cywilną i został Tymczasowym Naczelnikiem Państwa?",
    options: [
      "Józef Piłsudski",
      "Roman Dmowski",
      "Ignacy Jan Paderewski",
      "Ignacy Daszyński",
      "Jędrzej Moraczewski",
      "Wincenty Witos"
    ],
    answer: 0,
    image: "r03_pilsudski_1918.jpg",
    explanation: "Józef Piłsudski po powrocie z więzienia w Magdeburgu objął 11 XI władzę wojskową, a 14 XI także cywilną, zostając Tymczasowym Naczelnikiem Państwa."
  },
  {
    id: "R03_GRA_02",
    section: "Odrodzenie Polski i walka o granice",
    type: "multi_select",
    prompt: "Zaznacz reformy wprowadzane przez rząd Jędrzeja Moraczewskiego po odzyskaniu niepodległości.",
    options: [
      "Ośmiogodzinny dzień pracy",
      "Ubezpieczenia społeczne",
      "Prawo wyborcze także dla kobiet",
      "Przygotowanie projektu reformy rolnej",
      "Zakaz udziału kobiet w wyborach",
      "Likwidacja wszystkich ubezpieczeń społecznych"
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Rząd Moraczewskiego wprowadzał m.in. ośmiogodzinny dzień pracy, ubezpieczenia społeczne i demokratyczne prawo wyborcze także dla kobiet oraz przygotowywał projekty dalszych reform."
  },
  {
    id: "R03_GRA_03",
    section: "Odrodzenie Polski i walka o granice",
    type: "true_false",
    prompt: "Komitet Narodowy Polski w Paryżu był uznawany przez państwa Ententy za jedyne przedstawicielstwo Polaków.",
    options: null,
    answer: true,
    explanation: "Komitet Narodowy Polski, kierowany przez Romana Dmowskiego i Ignacego Jana Paderewskiego, był uznawany przez państwa Ententy za przedstawicielstwo Polaków."
  },
  {
    id: "R03_GRA_04",
    section: "Odrodzenie Polski i walka o granice",
    type: "fill_in",
    prompt: "Powstanie wielkopolskie rozpoczęło się __________, a rozejm w Trewirze zawarto __________.",
    options: null,
    answer: [
      "27 XII 1918",
      "16 II 1919"
    ],
    altAnswers: [
      [
        "27 XII 1918",
        "27 XII 1918 r.",
        "27 grudnia 1918"
      ],
      [
        "16 II 1919",
        "16 II 1919 r.",
        "16 lutego 1919"
      ]
    ],
    image: "r03_powstanie_wielkopolskie.jpg",
    explanation: "Powstanie wielkopolskie rozpoczęło się 27 XII 1918 r., a 16 II 1919 r. rozejm w Trewirze wprowadził linię demarkacyjną i zakaz niemieckich akcji zaczepnych."
  },
  {
    id: "R03_GRA_05",
    section: "Odrodzenie Polski i walka o granice",
    type: "riddle",
    prompt: "Głosowanie, w którym mieszkańcy danego obszaru decydują o jego przynależności państwowej, to...",
    options: null,
    answer: "plebiscyt",
    altAnswers: [
      "plebiscyt"
    ],
    explanation: "Plebiscyt to głosowanie ludności dotyczące przynależności danego obszaru; stosowano go m.in. na Górnym Śląsku, Warmii i Mazurach."
  },
  {
    id: "R03_GRA_06",
    section: "Odrodzenie Polski i walka o granice",
    type: "odd_one_out",
    prompt: "Wskaż obszar, którego przynależności nie planowano rozstrzygać plebiscytem po traktacie wersalskim: Górny Śląsk, Warmia, Mazury, Wielkopolska.",
    options: null,
    answer: "Wielkopolska",
    explanation: "Plebiscyty miały odbyć się m.in. na Górnym Śląsku, Warmii i Mazurach. Wielkopolska została przyznana Polsce po powstaniu i postanowieniach traktatu."
  },
  {
    id: "R03_GRA_07",
    section: "Odrodzenie Polski i walka o granice",
    type: "scenario",
    prompt: "9 X 1920 r. generał Lucjan Żeligowski, działając z polecenia Józefa Piłsudskiego, zajmuje Litwę Środkową wraz z Wilnem. Jak nazwano to wydarzenie?",
    options: [
      "bunt Żeligowskiego",
      "powstanie wielkopolskie",
      "I powstanie śląskie",
      "bitwa warszawska",
      "przewrót majowy",
      "konferencja w Locarno"
    ],
    answer: 0,
    explanation: "Zajęcie Litwy Środkowej i Wilna przez oddziały Żeligowskiego nazwano buntem Żeligowskiego."
  },
  {
    id: "R03_GRA_08",
    section: "Odrodzenie Polski i walka o granice",
    type: "match",
    prompt: "Połącz obszar z wydarzeniem związanym z walką o granice II Rzeczpospolitej.",
    options: null,
    left: [
      "Wielkopolska",
      "Górny Śląsk",
      "Galicja Wschodnia",
      "Wilno"
    ],
    right: [
      "powstanie wielkopolskie",
      "powstania śląskie",
      "obrona Lwowa przez Orlęta Lwowskie",
      "bunt Żeligowskiego"
    ],
    answer: {
      Wielkopolska: "powstanie wielkopolskie",
      "Górny Śląsk": "powstania śląskie",
      "Galicja Wschodnia": "obrona Lwowa przez Orlęta Lwowskie",
      Wilno: "bunt Żeligowskiego"
    },
    image: "r03_mapa_granic_ii_rp.jpg",
    explanation: "Granice Polski kształtowały się w wyniku powstań, plebiscytów i walk: Wielkopolska - powstanie wielkopolskie, Górny Śląsk - powstania śląskie, Galicja Wschodnia - obrona Lwowa, Wilno - bunt Żeligowskiego."
  },
  {
    id: "R03_GRA_09",
    section: "Odrodzenie Polski i walka o granice",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z walką o granice Polski w kolejności chronologicznej.",
    options: null,
    items: [
      "Porozumienie genewskie w sprawie Górnego Śląska",
      "Plebiscyt na Górnym Śląsku",
      "Wyparcie bolszewików z Wilna przez Polaków",
      "Wybuch powstania wielkopolskiego"
    ],
    answer: [
      "Wybuch powstania wielkopolskiego",
      "Wyparcie bolszewików z Wilna przez Polaków",
      "Plebiscyt na Górnym Śląsku",
      "Porozumienie genewskie w sprawie Górnego Śląska"
    ],
    image: "r03_mapa_granic_ii_rp.jpg",
    explanation: "Powstanie wielkopolskie rozpoczęło się w grudniu 1918 r., Polacy zajęli Wilno w kwietniu 1919 r., plebiscyt na Górnym Śląsku odbył się 20 III 1921 r., a porozumienie genewskie podpisano 15 V 1922 r."
  },
  {
    id: "R03_IIR_01",
    section: "Polityka II Rzeczpospolitej",
    type: "single_choice",
    prompt: "Kiedy uchwalono konstytucję marcową II Rzeczpospolitej?",
    options: [
      "17 III 1921",
      "23 IV 1935",
      "2 VIII 1926",
      "9 XII 1922",
      "4 VI 1926",
      "30 IX 1939"
    ],
    answer: 0,
    explanation: "Konstytucję marcową uchwalono 17 III 1921 r.; od miesiąca uchwalenia pochodzi jej nazwa."
  },
  {
    id: "R03_IIR_02",
    section: "Polityka II Rzeczpospolitej",
    type: "true_false",
    prompt: "Konstytucja marcowa dawała prezydentowi bardzo szerokie uprawnienia i podporządkowywała mu parlament.",
    options: null,
    answer: false,
    explanation: "To fałsz. Konstytucja marcowa opierała państwo na trójpodziale władz, ale z wyraźną przewagą władzy ustawodawczej, a prezydent miał niewielkie uprawnienia."
  },
  {
    id: "R03_IIR_03",
    section: "Polityka II Rzeczpospolitej",
    type: "match",
    prompt: "Połącz prezydenta II Rzeczpospolitej z datą objęcia urzędu.",
    options: null,
    left: [
      "Gabriel Narutowicz",
      "Stanisław Wojciechowski",
      "Ignacy Mościcki"
    ],
    right: [
      "9 XII 1922",
      "22 XII 1922",
      "4 VI 1926"
    ],
    answer: {
      "Gabriel Narutowicz": "9 XII 1922",
      "Stanisław Wojciechowski": "22 XII 1922",
      "Ignacy Mościcki": "4 VI 1926"
    },
    image: "r03_prezydenci_ii_rp.jpg",
    explanation: "Gabriel Narutowicz został wybrany 9 XII 1922 r., Stanisław Wojciechowski 22 XII 1922 r., a Ignacy Mościcki objął urząd po przewrocie majowym 4 VI 1926 r."
  },
  {
    id: "R03_IIR_04",
    section: "Polityka II Rzeczpospolitej",
    type: "scenario",
    prompt: "Po przewrocie majowym formalnie zachowano parlament, lecz ograniczano jego znaczenie, wzmacniano władzę wykonawczą, wprowadzono cenzurę, a najważniejsze stanowiska obejmowali ludzie wierni Piłsudskiemu. Jak nazywano ten obóz rządzący?",
    options: [
      "sanacja",
      "endecja",
      "Centrolew",
      "Komitet Narodowy Polski",
      "Rada Regencyjna",
      "Liga Narodów"
    ],
    answer: 0,
    explanation: "Obóz piłsudczykowski rządzący Polską od 1926 r. nazywano sanacją, czyli uzdrowieniem."
  },
  {
    id: "R03_IIR_05",
    section: "Polityka II Rzeczpospolitej",
    type: "multi_select",
    prompt: "Zaznacz skutki noweli sierpniowej z 2 VIII 1926 r.",
    options: [
      "Prezydent mógł rozwiązać parlament przed końcem kadencji",
      "Ograniczono uprawnienia Sejmu",
      "Wzmocniono pozycję rządu w sprawach budżetowych",
      "Sejm otrzymał prawo samorozwiązania",
      "Prezydent utracił wpływ na władzę wykonawczą",
      "Przywrócono pełną dominację parlamentu"
    ],
    answer: [
      0,
      1,
      2
    ],
    explanation: "Nowela sierpniowa pozwalała prezydentowi rozwiązać parlament przed końcem kadencji, ograniczała uprawnienia Sejmu i wzmacniała pozycję rządu w sprawach budżetowych."
  },
  {
    id: "R03_IIR_06",
    section: "Polityka II Rzeczpospolitej",
    type: "fill_in",
    prompt: "Konstytucję kwietniową uchwalono __________. Według niej prezydent był odpowiedzialny jedynie przed __________.",
    options: null,
    answer: [
      "23 IV 1935",
      "Bogiem i historią"
    ],
    altAnswers: [
      [
        "23 IV 1935",
        "23 IV 1935 r.",
        "23 kwietnia 1935"
      ],
      [
        "Bogiem i historią",
        "Bogiem i historia"
      ]
    ],
    explanation: "Konstytucja kwietniowa z 23 IV 1935 r. wzmacniała pozycję prezydenta, który według jej zapisów odpowiadał jedynie przed Bogiem i historią."
  },
  {
    id: "R03_IIR_07",
    section: "Polityka II Rzeczpospolitej",
    type: "odd_one_out",
    prompt: "Wskaż ugrupowanie, które nie wchodziło w skład Centrolewu: PPS, PSL Wyzwolenie, PSL Piast, BBWR.",
    options: null,
    answer: "BBWR",
    explanation: "Centrolew tworzyły partie centrum i lewicy, m.in. PPS, PSL Wyzwolenie i PSL Piast. BBWR był zapleczem obozu sanacyjnego."
  },
  {
    id: "R03_IIR_08",
    section: "Polityka II Rzeczpospolitej",
    type: "riddle",
    prompt: "Miejsce odosobnienia utworzone w 1934 r., do którego kierowano m.in. podejrzanych o działalność terrorystyczną i przeciwników władzy, to...",
    options: null,
    answer: "Bereza Kartuska",
    altAnswers: [
      "Bereza Kartuska",
      "Bereza Kartuska obóz odosobnienia"
    ],
    explanation: "Był to obóz odosobnienia w Berezie Kartuskiej, utworzony po zabójstwie ministra Bronisława Pierackiego."
  },
  {
    id: "R03_IIR_09",
    section: "Polityka II Rzeczpospolitej",
    type: "sort",
    prompt: "Przyporządkuj wydarzenia i akty prawne do okresu demokracji parlamentarnej albo rządów autorytarnych.",
    options: null,
    items: [
      "konstytucja marcowa",
      "wybór Gabriela Narutowicza",
      "nowela sierpniowa",
      "Bereza Kartuska",
      "konstytucja kwietniowa"
    ],
    categories: [
      "Demokracja parlamentarna",
      "Rządy autorytarne"
    ],
    answer: {
      "Demokracja parlamentarna": [
        "konstytucja marcowa",
        "wybór Gabriela Narutowicza"
      ],
      "Rządy autorytarne": [
        "nowela sierpniowa",
        "Bereza Kartuska",
        "konstytucja kwietniowa"
      ]
    },
    explanation: "Konstytucja marcowa i wybór pierwszych prezydentów należą do okresu demokracji parlamentarnej, natomiast nowela sierpniowa, Bereza Kartuska i konstytucja kwietniowa do okresu rządów sanacyjnych."
  },
  {
    id: "R03_GKS_01",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "single_choice",
    prompt: "Jaki odsetek ludności II Rzeczpospolitej stanowili Polacy?",
    options: [
      "69%",
      "75%",
      "50%",
      "31%",
      "89%",
      "14%"
    ],
    answer: 0,
    explanation: "Polacy stanowili 69% ludności, a pozostałe 31% należało do mniejszości narodowych."
  },
  {
    id: "R03_GKS_02",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "true_false",
    prompt: "Około 75% ludności II Rzeczpospolitej mieszkało na wsi, a w 1939 r. odsetek ten wynosił około 70%.",
    options: null,
    answer: true,
    explanation: "Około 75% ludności II Rzeczpospolitej mieszkało na wsi, a w 1939 r. odsetek ten wynosił około 70%."
  },
  {
    id: "R03_GKS_03",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "multi_select",
    prompt: "Zaznacz mniejszości narodowe, których udział w ludności II Rzeczpospolitej wynosił co najmniej 4%.",
    options: [
      "Ukraińcy",
      "Żydzi",
      "Niemcy",
      "Białorusini",
      "Litwini",
      "Ormianie"
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Najliczniejszą mniejszością byli Ukraińcy 14%, następnie Żydzi 8%, a Niemcy i Białorusini po 4%."
  },
  {
    id: "R03_GKS_04",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "fill_in",
    prompt: "Polska A obejmowała tereny na __________, bardziej uprzemysłowione, a Polska B tereny na __________, bardziej rolnicze i zacofane gospodarczo.",
    options: null,
    answer: [
      "zachód od Wisły",
      "wschód od Wisły"
    ],
    altAnswers: [
      [
        "zachód od Wisły",
        "zachod od Wisly",
        "zachodzie od Wisły"
      ],
      [
        "wschód od Wisły",
        "wschod od Wisly",
        "wschodzie od Wisły"
      ]
    ],
    explanation: "Polska A obejmowała tereny na zachód od Wisły, a Polska B tereny na wschód od Wisły."
  },
  {
    id: "R03_GKS_05",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "match",
    prompt: "Połącz przedsięwzięcie lub instytucję z właściwym rokiem.",
    options: null,
    left: [
      "Wprowadzenie złotego i powołanie Banku Polskiego",
      "Powstanie nowoczesnych Polskich Kolei Państwowych",
      "Uruchomienie Polskich Linii Lotniczych LOT",
      "Powstanie Funduszu Pracy"
    ],
    right: [
      "1924",
      "1926",
      "1929",
      "1933"
    ],
    answer: {
      "Wprowadzenie złotego i powołanie Banku Polskiego": "1924",
      "Powstanie nowoczesnych Polskich Kolei Państwowych": "1926",
      "Uruchomienie Polskich Linii Lotniczych LOT": "1929",
      "Powstanie Funduszu Pracy": "1933"
    },
    explanation: "W 1924 r. wprowadzono złotego i powołano Bank Polski, w 1926 r. powstały nowoczesne PKP, w 1929 r. uruchomiono LOT, a w 1933 r. Fundusz Pracy."
  },
  {
    id: "R03_GKS_06",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "riddle",
    prompt: "Inżynier i polityk, który był inicjatorem budowy portu w Gdyni i później opracował plan rozwoju gospodarczego Polski, to...",
    options: null,
    answer: "Eugeniusz Kwiatkowski",
    altAnswers: [
      "Eugeniusz Kwiatkowski",
      "Kwiatkowski"
    ],
    image: "r03_port_gdynia.jpg",
    explanation: "Był to Eugeniusz Kwiatkowski, związany z rozbudową Gdyni i późniejszym programem inwestycyjnym obejmującym m.in. COP."
  },
  {
    id: "R03_GKS_07",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "odd_one_out",
    prompt: "Wskaż miejscowość niezwiązaną z zakładami Centralnego Okręgu Przemysłowego: Radom, Mielec, Stalowa Wola, Wilno.",
    options: null,
    answer: "Wilno",
    image: "r03_cop_przemysl.jpg",
    explanation: "Radom, Mielec i Stalowa Wola były ośrodkami związanymi z inwestycjami COP. Wilno nie należało do ośrodków przemysłowych COP."
  },
  {
    id: "R03_GKS_08",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "scenario",
    prompt: "Państwo zatrzymuje emisję marek, porządkuje budżet, a w 1924 r. wprowadza złotego i powołuje Bank Polski. Z czyim programem reform wiąże się ten opis?",
    options: [
      "Władysław Grabski",
      "Eugeniusz Kwiatkowski",
      "Jędrzej Moraczewski",
      "Ignacy Daszyński",
      "Józef Beck",
      "Walery Sławek"
    ],
    answer: 0,
    explanation: "To reformy Władysława Grabskiego, które zahamowały inflację, uporządkowały skarbowość i wprowadziły nową walutę."
  },
  {
    id: "R03_GKS_09",
    section: "Społeczeństwo, gospodarka i kultura II RP",
    type: "sort",
    prompt: "Przyporządkuj osoby i przedsięwzięcia do nauki i kultury albo gospodarki i komunikacji.",
    options: null,
    items: [
      "Stefan Banach",
      "Władysław Reymont",
      "Rudolf Weigl",
      "Eugeniusz Kwiatkowski",
      "Polskie Linie Lotnicze LOT",
      "port w Gdyni"
    ],
    categories: [
      "Nauka i kultura",
      "Gospodarka i komunikacja"
    ],
    answer: {
      "Nauka i kultura": [
        "Stefan Banach",
        "Władysław Reymont",
        "Rudolf Weigl"
      ],
      "Gospodarka i komunikacja": [
        "Eugeniusz Kwiatkowski",
        "Polskie Linie Lotnicze LOT",
        "port w Gdyni"
      ]
    },
    explanation: "Stefan Banach, Władysław Reymont i Rudolf Weigl reprezentują naukę i kulturę, a Eugeniusz Kwiatkowski, LOT i port w Gdyni wiążą się z gospodarką i komunikacją."
  },
  {
    id: "R03_WOJ_01",
    section: "Droga do II wojny światowej",
    type: "single_choice",
    prompt: "Kiedy Adolf Hitler został kanclerzem Niemiec?",
    options: [
      "30 I 1933",
      "8 XI 1923",
      "29 IX 1938",
      "23 VIII 1939",
      "1 IX 1939",
      "17 III 1921"
    ],
    answer: 0,
    explanation: "Adolf Hitler został kanclerzem Niemiec 30 I 1933 r. jako szef NSDAP."
  },
  {
    id: "R03_WOJ_02",
    section: "Droga do II wojny światowej",
    type: "multi_select",
    prompt: "Zaznacz działania, które umacniały dyktaturę Hitlera po 1933 r.",
    options: [
      "Rozwiązanie innych partii poza NSDAP",
      "Rozbudowa SS i Gestapo",
      "Połączenie urzędu prezydenta i kanclerza po śmierci Hindenburga",
      "Ograniczanie swobód obywatelskich",
      "Wprowadzenie pluralizmu partyjnego",
      "Oddanie pełnej władzy Reichstagowi"
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Hitler rozwiązał inne partie, rozbudował aparat represji, połączył urząd prezydenta i kanclerza oraz ograniczał swobody obywatelskie."
  },
  {
    id: "R03_WOJ_03",
    section: "Droga do II wojny światowej",
    type: "true_false",
    prompt: "Ustawy norymberskie z 1935 r. zapoczątkowały pozbawianie ludności żydowskiej praw politycznych, obywatelskich i praw człowieka.",
    options: null,
    answer: true,
    explanation: "Tak. Ustawy norymberskie były jednym z kluczowych etapów prawnego prześladowania Żydów w III Rzeszy."
  },
  {
    id: "R03_WOJ_04",
    section: "Droga do II wojny światowej",
    type: "fill_in",
    prompt: "W roku __________ Hitler dokonał remilitaryzacji __________, która zgodnie z ładem wersalskim miała być strefą zdemilitaryzowaną.",
    options: null,
    answer: [
      "1936",
      "Nadrenii"
    ],
    altAnswers: [
      [
        "1936",
        "1936 r."
      ],
      [
        "Nadrenii",
        "Nadrenia"
      ]
    ],
    explanation: "W 1936 r. wojska niemieckie zajęły Nadrenię, łamiąc ograniczenia dotyczące tej strefy."
  },
  {
    id: "R03_WOJ_05",
    section: "Droga do II wojny światowej",
    type: "scenario",
    prompt: "Wielka Brytania i Francja, chcąc uniknąć wojny, zgadzają się na kolejne ustępstwa wobec Hitlera. W 1938 r. naciskają na Czechosłowację, by oddała Niemcom Sudety. Jak nazywała się ta polityka?",
    options: [
      "appeasement",
      "sanacja",
      "kolektywizacja",
      "New Deal",
      "polityka deflacji",
      "komunizm wojenny"
    ],
    answer: 0,
    image: "r03_monachium_1938.jpg",
    explanation: "Była to polityka appeasementu, czyli zaspokajania żądań i ustępstw wobec Hitlera w nadziei na zachowanie pokoju."
  },
  {
    id: "R03_WOJ_06",
    section: "Droga do II wojny światowej",
    type: "match",
    prompt: "Połącz datę z wydarzeniem prowadzącym do II wojny światowej.",
    options: null,
    left: [
      "13 III 1938",
      "29 IX 1938",
      "23 VIII 1939",
      "1 IX 1939"
    ],
    right: [
      "Anschluss Austrii",
      "konferencja w Monachium",
      "pakt Ribbentrop-Mołotow",
      "atak Niemiec na Polskę"
    ],
    answer: {
      "13 III 1938": "Anschluss Austrii",
      "29 IX 1938": "konferencja w Monachium",
      "23 VIII 1939": "pakt Ribbentrop-Mołotow",
      "1 IX 1939": "atak Niemiec na Polskę"
    },
    explanation: "W marcu 1938 r. nastąpił Anschluss Austrii, we wrześniu konferencja monachijska, 23 VIII 1939 r. podpisano pakt Ribbentrop-Mołotow, a 1 IX 1939 r. Niemcy zaatakowały Polskę."
  },
  {
    id: "R03_WOJ_07",
    section: "Droga do II wojny światowej",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie należało do krajów Osi: Niemcy, Włochy, Japonia, Francja.",
    options: null,
    answer: "Francja",
    explanation: "Do krajów Osi należały Niemcy, Włochy i Japonia. Francja należała do aliantów."
  },
  {
    id: "R03_WOJ_08",
    section: "Droga do II wojny światowej",
    type: "riddle",
    prompt: "Układ z 23 VIII 1939 r., którego tajny protokół przewidywał podział Europy środkowo-wschodniej na niemiecką i sowiecką strefę wpływów, to...",
    options: null,
    answer: "pakt Ribbentrop-Mołotow",
    altAnswers: [
      "pakt Ribbentrop-Mołotow",
      "Ribbentrop-Mołotow",
      "pakt Ribbentropa-Mołotowa"
    ],
    image: "r03_pakt_ribbentrop_molotow.jpg",
    explanation: "Był to pakt Ribbentrop-Mołotow, nazwany od nazwisk ministrów spraw zagranicznych obu państw."
  },
  {
    id: "R03_WOJ_09",
    section: "Droga do II wojny światowej",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Podpisanie paktu Ribbentrop-Mołotow",
      "Konferencja w Monachium",
      "Atak Niemiec na Polskę",
      "Anschluss Austrii",
      "Oderwanie się Słowacji od Czech"
    ],
    answer: [
      "Anschluss Austrii",
      "Konferencja w Monachium",
      "Oderwanie się Słowacji od Czech",
      "Podpisanie paktu Ribbentrop-Mołotow",
      "Atak Niemiec na Polskę"
    ],
    explanation: "Anschluss Austrii poprzedził konferencję monachijską, potem powstało państwo słowackie, następnie podpisano pakt Ribbentrop-Mołotow i rozpoczęła się II wojna światowa."
  },
  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kiedy formalnie rozwiązano Ligę Narodów?",
    options: [
      "18 IV 1946",
      "28 VI 1919",
      "16 X 1925",
      "24 X 1929",
      "23 IV 1935",
      "1 IX 1939"
    ],
    answer: 0,
    explanation: "Ligę Narodów formalnie rozwiązano 18 IV 1946 r. w związku z powstaniem ONZ, która przejęła jej majątek."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Konferencja w Locarno odbyła się __________ w roku __________.",
    options: null,
    answer: [
      "16 X",
      "1925"
    ],
    altAnswers: [
      [
        "16 X",
        "16 października"
      ],
      [
        "1925",
        "1925 r."
      ]
    ],
    explanation: "Międzynarodowa konferencja w Locarno odbyła się 16 X 1925 r. z udziałem m.in. Niemiec, Wielkiej Brytanii, Francji, Włoch i Belgii."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz ograniczenie nałożone na Niemcy z jego treścią.",
    options: null,
    left: [
      "Armia niemiecka",
      "Nadrenia",
      "Zagłębie Saary",
      "Austria i Niemcy"
    ],
    right: [
      "100 tys. żołnierzy",
      "demilitaryzacja",
      "kontrola Ligi Narodów przez 15 lat",
      "zakaz połączenia"
    ],
    answer: {
      "Armia niemiecka": "100 tys. żołnierzy",
      Nadrenia: "demilitaryzacja",
      "Zagłębie Saary": "kontrola Ligi Narodów przez 15 lat",
      "Austria i Niemcy": "zakaz połączenia"
    },
    explanation: "Traktat wersalski ograniczał liczebność armii, demilitaryzował Nadrenię, oddawał Saarę pod kontrolę Ligi Narodów i zakazywał połączenia Austrii z Niemcami."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne informacje o Lidze Narodów.",
    options: [
      "Powstała w 1920 r.",
      "Miała siedzibę w Genewie",
      "Jej pakt podpisały 44 państwa",
      "USA nie było wśród sygnatariuszy paktu",
      "Miała własną armię zdolną wymuszać pokój",
      "Została rozwiązana w 1939 r."
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Liga Narodów powstała w 1920 r., miała siedzibę w Genewie, jej pakt podpisały 44 państwa bez USA, a organizacja została rozwiązana w 1946 r."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "riddle",
    prompt: "Pierwszy prezydent Republiki Weimarskiej to...",
    options: null,
    answer: "Friedrich Ebert",
    altAnswers: [
      "Friedrich Ebert",
      "Ebert"
    ],
    explanation: "Po uchwaleniu konstytucji w Weimarze pierwszym prezydentem republiki został Friedrich Ebert, a po nim Paul von Hindenburg."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "W 1934 r. Hitler rozprawia się z opozycją w szeregach SA. Ginie około 400 osób, w tym przywódca SA Ernst Röhm. Jak nazywa się ta akcja?",
    options: [
      "noc długich noży",
      "noc kryształowa",
      "pucz monachijski",
      "remilitaryzacja Nadrenii",
      "Anschluss",
      "konferencja monachijska"
    ],
    answer: 0,
    explanation: "Była to noc długich noży, podczas której Hitler usunął część przeciwników i rywali wewnątrz ruchu nazistowskiego."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Ustawy norymberskie wydano w roku __________, a noc kryształowa miała miejsce w roku __________.",
    options: null,
    answer: [
      "1935",
      "1938"
    ],
    altAnswers: [
      [
        "1935",
        "1935 r."
      ],
      [
        "1938",
        "1938 r."
      ]
    ],
    explanation: "Ustawy norymberskie wprowadzono w 1935 r., a noc kryształowa, czyli masowe ataki na synagogi, domy i sklepy żydowskie, miała miejsce w 1938 r."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Kto stał na czele bolszewickiej formacji policyjnej Cze-Ka?",
    options: [
      "Feliks Dzierżyński",
      "Włodzimierz Lenin",
      "Józef Stalin",
      "Michaił Tuchaczewski",
      "Siemion Budionny",
      "Wiaczesław Mołotow"
    ],
    answer: 0,
    explanation: "Na czele Cze-Ka stał Feliks Dzierżyński."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia z historii Rosji Sowieckiej i ZSRS w kolejności chronologicznej.",
    options: null,
    items: [
      "Powstanie ZSRS",
      "Nowa fala represji wobec kułaków",
      "Przejęcie władzy przez bolszewików",
      "Wprowadzenie komunizmu wojennego"
    ],
    answer: [
      "Przejęcie władzy przez bolszewików",
      "Wprowadzenie komunizmu wojennego",
      "Powstanie ZSRS",
      "Nowa fala represji wobec kułaków"
    ],
    explanation: "Bolszewicy przejęli władzę w 1917 r., komunizm wojenny trwał od 1918 do 1921 r., w 1922 r. powstał ZSRS, a w 1925 r. rozgorzała nowa fala represji."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który francuski marszałek zażądał, aby rozejm w Trewirze uwzględniał rozstrzygnięcia dotyczące powstania wielkopolskiego?",
    options: [
      "Ferdynand Foch",
      "Georges Clemenceau",
      "David Lloyd George",
      "Woodrow Wilson",
      "Joseph Goebbels",
      "Paul von Hindenburg"
    ],
    answer: 0,
    image: "r03_powstanie_wielkopolskie.jpg",
    explanation: "Był to marszałek Ferdynand Foch, sojusznik Polski."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Plebiscyt na Górnym Śląsku odbył się __________, a polsko-niemieckie porozumienie w Genewie regulujące podział regionu podpisano __________.",
    options: null,
    answer: [
      "20 III 1921",
      "15 V 1922"
    ],
    altAnswers: [
      [
        "20 III 1921",
        "20 III 1921 r.",
        "20 marca 1921"
      ],
      [
        "15 V 1922",
        "15 V 1922 r.",
        "15 maja 1922"
      ]
    ],
    explanation: "Plebiscyt na Górnym Śląsku odbył się 20 III 1921 r., a porozumienie genewskie podpisano 15 V 1922 r."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "30 VII 1920 r. Feliks Dzierżyński i Julian Marchlewski tworzą Tymczasowy Komitet Rewolucyjny Polski, zapowiadający polską republikę radziecką. W jakim mieście powstał ten komitet?",
    options: [
      "Białystok",
      "Warszawa",
      "Wilno",
      "Lwów",
      "Poznań",
      "Kraków"
    ],
    answer: 0,
    explanation: "Tymczasowy Komitet Rewolucyjny Polski utworzono w Białymstoku."
  },
  {
    id: "R03_HARD_13",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaką część senatorów mógł mianować prezydent według konstytucji kwietniowej?",
    options: [
      "1/3",
      "1/2",
      "1/4",
      "2/3",
      "3/4",
      "wszystkich"
    ],
    answer: 0,
    explanation: "Konstytucja kwietniowa wzmacniała prezydenta, który mógł m.in. mianować jedną trzecią senatorów."
  },
  {
    id: "R03_HARD_14",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje zgodne z opisem obozu odosobnienia w Berezie Kartuskiej.",
    options: [
      "Powstał w 1934 r.",
      "Utworzono go po zabójstwie Bronisława Pierackiego",
      "Można było tam trafić bez wyroku sądowego",
      "Przebywali tam m.in. przeciwnicy władzy",
      "Był zakładem szkolnym dla urzędników",
      "Powstał w okresie demokracji parlamentarnej przed 1926 r."
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Obóz utworzono w 1934 r. po zabójstwie Bronisława Pierackiego. Kierowano tam ludzi na mocy decyzji sędziego śledczego, m.in. podejrzanych o terroryzm i przeciwników władzy."
  },
  {
    id: "R03_HARD_15",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz uczonego z osiągnięciem lub dziedziną.",
    options: null,
    left: [
      "Józef Kostrzewski",
      "Rudolf Weigl",
      "Ludwik Hirszfeld",
      "Kazimierz Funk"
    ],
    right: [
      "wykopaliska w Biskupinie",
      "szczepionka przeciw durowi plamistemu",
      "seroantropologia",
      "nauka o witaminach"
    ],
    answer: {
      "Józef Kostrzewski": "wykopaliska w Biskupinie",
      "Rudolf Weigl": "szczepionka przeciw durowi plamistemu",
      "Ludwik Hirszfeld": "seroantropologia",
      "Kazimierz Funk": "nauka o witaminach"
    },
    explanation: "Józef Kostrzewski prowadził wykopaliska w Biskupinie, Rudolf Weigl wynalazł szczepionkę przeciw durowi plamistemu, Ludwik Hirszfeld stworzył seroantropologię, a Kazimierz Funk naukę o witaminach."
  },
  {
    id: "R03_HARD_16",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż działania polskiej polityki zagranicznej i wydarzenia prowadzące do wojny od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Pakt Ribbentrop-Mołotow",
      "Traktat o nieagresji Polski z Niemcami",
      "Gwarancje Wielkiej Brytanii dla Polski",
      "Atak Niemiec na Polskę",
      "Traktat o nieagresji Polski z ZSRS"
    ],
    answer: [
      "Traktat o nieagresji Polski z ZSRS",
      "Traktat o nieagresji Polski z Niemcami",
      "Gwarancje Wielkiej Brytanii dla Polski",
      "Pakt Ribbentrop-Mołotow",
      "Atak Niemiec na Polskę"
    ],
    image: "r03_pakt_ribbentrop_molotow.jpg",
    explanation: "Polska podpisała układ o nieagresji z ZSRS w 1932 r., z Niemcami w 1934 r., w marcu 1939 r. otrzymała gwarancje brytyjskie, 23 VIII podpisano pakt Ribbentrop-Mołotow, a 1 IX Niemcy zaatakowały Polskę."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Dwudziestolecie międzywojenne",
  icon: "🕰️",
  sectionOrder: [
    "Europa i świat po I wojnie światowej",
    "Totalitaryzmy w Europie",
    "Odrodzenie Polski i walka o granice",
    "Polityka II Rzeczpospolitej",
    "Społeczeństwo, gospodarka i kultura II RP",
    "Droga do II wojny światowej"
  ],
  sectionIcons: {
    "Europa i świat po I wojnie światowej": "🌍",
    "Totalitaryzmy w Europie": "⚠️",
    "Odrodzenie Polski i walka o granice": "🦅",
    "Polityka II Rzeczpospolitej": "🏛️",
    "Społeczeństwo, gospodarka i kultura II RP": "🏗️",
    "Droga do II wojny światowej": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
