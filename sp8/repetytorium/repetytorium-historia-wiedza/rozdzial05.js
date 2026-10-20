// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WOJ  = I wojna światowa i rewolucje w Rosji
//   POL  = Sprawa polska podczas I wojny światowej
//   WER  = Ład wersalski i totalitaryzmy
//   ODR  = Odrodzenie państwa i granice Polski
//   DWR  = II Rzeczpospolita: polityka, gospodarka i kultura
//   DRO  = Droga do II wojny światowej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_WOJ_01",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "single_choice",
    "prompt": "Które trzy państwa tworzyły trójprzymierze przed I wojną światową?",
    "options": [
      "Niemcy, Austro-Węgry i Włochy",
      "Francja, Rosja i Wielka Brytania",
      "Niemcy, Francja i Rosja",
      "Włochy, Rosja i Wielka Brytania",
      "Austria, Francja i Wielka Brytania",
      "Niemcy, Serbia i Rosja"
    ],
    "answer": 0,
    "explanation": "Trójprzymierze utworzyły Niemcy i Austro-Węgry, do których dołączyły Włochy."
  },
  {
    "id": "R05_WOJ_02",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "multi_select",
    "prompt": "Zaznacz pośrednie przyczyny wybuchu I wojny światowej.",
    "options": [
      "Wyścig zbrojeń",
      "Rywalizacja o rynki zbytu",
      "Napięcia na Bałkanach",
      "Zamach w Sarajewie",
      "Konflikty o strefy wpływów",
      "Podpisanie zawieszenia broni"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Zamach w Sarajewie był przyczyną bezpośrednią; rywalizacja polityczna, ekonomiczna i wyścig zbrojeń narastały wcześniej."
  },
  {
    "id": "R05_WOJ_03",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "true_false",
    "prompt": "28 czerwca 1914 r. w Sarajewie zamordowano arcyksięcia Franciszka Ferdynanda.",
    "options": null,
    "answer": true,
    "explanation": "Zamach na austro-węgierskiego następcę tronu dokonany przez Gawriła Principa stał się bezpośrednim impulsem do wojny."
  },
  {
    "id": "R05_WOJ_04",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "riddle",
    "prompt": "Podaj nazwę miasta, w którym zamordowano Franciszka Ferdynanda w czerwcu 1914 r.",
    "options": null,
    "answer": "Sarajewo",
    "explanation": "Do zamachu doszło 28 czerwca 1914 r. w Sarajewie na terenie Bośni.",
    "altAnswers": [
      "Sarajewo"
    ]
  },
  {
    "id": "R05_WOJ_05",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "single_choice",
    "prompt": "Która bitwa we wrześniu 1914 r. przekreśliła niemiecki plan szybkiego pokonania Francji?",
    "options": [
      "Bitwa nad Marną",
      "Bitwa pod Verdun",
      "Bitwa nad Sommą",
      "Bitwa pod Tannenbergiem",
      "Bitwa pod Gorlicami",
      "Bitwa pod Amiens"
    ],
    "answer": 0,
    "explanation": "Wojska francuskie zatrzymały niemieckie natarcie nad Marną, a walki na zachodzie przekształciły się w wojnę pozycyjną.",
    "image": "r05_okopy_front_zachodni.jpg"
  },
  {
    "id": "R05_WOJ_06",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "odd_one_out",
    "prompt": "Wskaż bitwę z innego roku niż pozostałe: bitwa pod Tannenbergiem, bitwa nad jeziorami mazurskimi, bitwa nad Marną, bitwa nad Sommą.",
    "options": null,
    "answer": "bitwa nad Sommą",
    "explanation": "Tannenberg, jeziora mazurskie i Marna to bitwy z 1914 r.; nad Sommą walczono w 1916 r."
  },
  {
    "id": "R05_WOJ_07",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "scenario",
    "prompt": "Jesteś żołnierzem na froncie zachodnim. Przez długie tygodnie przebywasz w okopach, a linia walk niemal się nie przesuwa. Jaki rodzaj wojny opisuje ta sytuacja?",
    "options": [
      "Wojna pozycyjna",
      "Wojna manewrowa",
      "Wojna błyskawiczna",
      "Wojna kolonialna",
      "Wojna partyzancka",
      "Wojna podwodna"
    ],
    "answer": 0,
    "explanation": "Po bitwie nad Marną front zachodni ustabilizował się na setkach kilometrów okopów.",
    "image": "r05_okopy_front_zachodni.jpg"
  },
  {
    "id": "R05_WOJ_08",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "match",
    "prompt": "Dopasuj wydarzenia I wojny światowej do lat.",
    "options": null,
    "answer": {
      "Zamach w Sarajewie": "1914",
      "Bitwa nad Sommą": "1916",
      "Przystąpienie USA do wojny": "1917",
      "Zawieszenie broni w Compiègne": "1918"
    },
    "explanation": "Sarajewo było w 1914 r., Somma w 1916 r., USA przystąpiły do wojny w 1917 r., a walki zakończono w listopadzie 1918 r.",
    "left": [
      "Zamach w Sarajewie",
      "Bitwa nad Sommą",
      "Przystąpienie USA do wojny",
      "Zawieszenie broni w Compiègne"
    ],
    "right": [
      "1916",
      "1918",
      "1914",
      "1917"
    ]
  },
  {
    "id": "R05_WOJ_09",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "fill_in",
    "prompt": "28 lipca 1914 r. Austro-Węgry wypowiedziały wojnę __________.",
    "options": null,
    "answer": [
      "Serbii"
    ],
    "explanation": "Austro-Węgry, wspierane przez Niemcy, wypowiedziały wojnę Serbii miesiąc po zamachu w Sarajewie.",
    "altAnswers": [
      [
        "Serbii",
        "Serbia"
      ]
    ]
  },
  {
    "id": "R05_WOJ_10",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "sort",
    "prompt": "Przyporządkuj państwa do bloków sojuszniczych utworzonych przed wojną.",
    "options": null,
    "answer": {
      "trójporozumienie": [
        "Francja",
        "Wielka Brytania",
        "Rosja"
      ],
      "trójprzymierze": [
        "Niemcy",
        "Austro-Węgry",
        "Włochy"
      ]
    },
    "explanation": "Trójporozumienie połączyło Francję, Rosję i Wielką Brytanię, a trójprzymierze – Niemcy, Austro-Węgry i Włochy.",
    "items": [
      "Austro-Węgry",
      "Rosja",
      "Francja",
      "Wielka Brytania",
      "Niemcy",
      "Włochy"
    ],
    "categories": [
      "trójporozumienie",
      "trójprzymierze"
    ],
    "image": "r05_sojusze_europa_1914.jpg"
  },
  {
    "id": "R05_WOJ_11",
    "section": "I wojna światowa i rewolucje w Rosji",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "answer": [
      "Zamach w Sarajewie",
      "Austro-Węgry wypowiadają wojnę Serbii",
      "USA przystępują do wojny",
      "Zawieszenie broni w Compiègne"
    ],
    "explanation": "Kolejno: 28 czerwca 1914, 28 lipca 1914, rok 1917 oraz 11 listopada 1918.",
    "items": [
      "Zawieszenie broni w Compiègne",
      "Austro-Węgry wypowiadają wojnę Serbii",
      "Zamach w Sarajewie",
      "USA przystępują do wojny"
    ]
  },
  {
    "id": "R05_POL_01",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "single_choice",
    "prompt": "Co zapowiadał akt 5 listopada 1916 r. ogłoszony przez cesarzy Niemiec i Austro-Węgier?",
    "options": [
      "Utworzenie samodzielnego Królestwa Polskiego z ziem zaboru rosyjskiego",
      "Natychmiastowe przyłączenie Galicji do Polski",
      "Oddanie Polsce Gdańska",
      "Rozwiązanie Legionów Polskich",
      "Zawarcie pokoju z Rosją przez Polskę",
      "Powołanie Ligi Narodów"
    ],
    "answer": 0,
    "explanation": "Akt dwóch cesarzy przewidywał utworzenie Królestwa Polskiego na ziemiach odebranych Rosji."
  },
  {
    "id": "R05_POL_02",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "true_false",
    "prompt": "Odezwy dowódców armii zaborczych z 1914 r. były oficjalnymi dokumentami zatwierdzonymi przez rządy i monarchów.",
    "options": null,
    "answer": false,
    "explanation": "Były to deklaracje dowódców wojskowych, których nie potwierdziły oficjalnie rządy ani monarchowie."
  },
  {
    "id": "R05_POL_03",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "scenario",
    "prompt": "Jest 6 sierpnia 1914 r. Ochotniczy oddział wyrusza z krakowskich Oleandrów do Królestwa Polskiego. Kto dowodzi Pierwszą Kompanią Kadrową?",
    "options": [
      "Józef Piłsudski",
      "Roman Dmowski",
      "Józef Haller",
      "Józef Dowbor-Muśnicki",
      "Stanisław Szeptycki",
      "Władysław Raczkiewicz"
    ],
    "answer": 0,
    "explanation": "Pierwsza Kompania Kadrowa pod dowództwem Józefa Piłsudskiego wyruszyła z Oleandrów 6 sierpnia 1914 r.",
    "image": "r05_kompania_kadrowa.jpg"
  },
  {
    "id": "R05_POL_04",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "multi_select",
    "prompt": "Które osoby dowodziły jedną z trzech brygad Legionów Polskich?",
    "options": [
      "Józef Piłsudski",
      "Józef Haller",
      "Stanisław Szeptycki",
      "Roman Dmowski",
      "Wincenty Niemojowski",
      "Thomas Woodrow Wilson"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "I Brygadą dowodził Piłsudski, II – Haller, a III – Szeptycki.",
    "image": "r05_kompania_kadrowa.jpg"
  },
  {
    "id": "R05_POL_05",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "match",
    "prompt": "Połącz polską formację wojskową z jej dowódcą.",
    "options": null,
    "answer": {
      "I Brygada Legionów Polskich": "Józef Piłsudski",
      "II Brygada Legionów Polskich": "Józef Haller",
      "III Brygada Legionów Polskich": "Stanisław Szeptycki",
      "I Korpus Polski": "Józef Dowbor-Muśnicki"
    },
    "explanation": "Piłsudski, Haller i Szeptycki kierowali brygadami Legionów, natomiast Dowbor-Muśnicki dowodził I Korpusem Polskim.",
    "left": [
      "I Brygada Legionów Polskich",
      "II Brygada Legionów Polskich",
      "III Brygada Legionów Polskich",
      "I Korpus Polski"
    ],
    "right": [
      "Józef Haller",
      "Józef Dowbor-Muśnicki",
      "Józef Piłsudski",
      "Stanisław Szeptycki"
    ]
  },
  {
    "id": "R05_POL_06",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "fill_in",
    "prompt": "Postulat niepodległej Polski z dostępem do morza pojawił się w 13. punkcie orędzia prezydenta USA __________.",
    "options": null,
    "answer": [
      "Woodrowa Wilsona"
    ],
    "explanation": "Woodrow Wilson w styczniu 1918 r. opowiedział się za niezawisłym państwem polskim z dostępem do morza.",
    "altAnswers": [
      [
        "Woodrowa Wilsona",
        "Woodrow Wilson",
        "Wilsona",
        "Thomasa Woodrowa Wilsona"
      ]
    ],
    "image": "r05_wilson_kongres.jpg"
  },
  {
    "id": "R05_POL_07",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "riddle",
    "prompt": "Jak nazywała się organizacja utworzona w Paryżu w 1917 r. z inicjatywy Romana Dmowskiego?",
    "options": null,
    "answer": "Komitet Narodowy Polski",
    "explanation": "Komitet Narodowy Polski reprezentował polskie interesy wobec mocarstw zachodnich i objął zwierzchnictwo nad Armią Polską we Francji.",
    "altAnswers": [
      "Komitet Narodowy Polski",
      "KNP"
    ]
  },
  {
    "id": "R05_POL_08",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie była dowódcą jednej z trzech brygad Legionów Polskich: Józef Piłsudski, Józef Haller, Stanisław Szeptycki, Roman Dmowski.",
    "options": null,
    "answer": "Roman Dmowski",
    "explanation": "Roman Dmowski działał przede wszystkim na polu dyplomatycznym; wymienione brygady prowadzili Piłsudski, Haller i Szeptycki."
  },
  {
    "id": "R05_POL_09",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane ze sprawą polską podczas wojny w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "Wymarsz Pierwszej Kompanii Kadrowej",
      "Akt 5 listopada",
      "Powstanie Komitetu Narodowego Polskiego w Paryżu",
      "Deklaracja mocarstw z 3 czerwca 1918 r."
    ],
    "explanation": "Wymarsz nastąpił w 1914 r., akt cesarzy w 1916 r., KNP utworzono w 1917 r., a deklarację wydano w czerwcu 1918 r.",
    "items": [
      "Deklaracja mocarstw z 3 czerwca 1918 r.",
      "Akt 5 listopada",
      "Wymarsz Pierwszej Kompanii Kadrowej",
      "Powstanie Komitetu Narodowego Polskiego w Paryżu"
    ]
  },
  {
    "id": "R05_POL_10",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "single_choice",
    "prompt": "Dlaczego w 1917 r. Józef Piłsudski został uwięziony w Magdeburgu?",
    "options": [
      "Nakazał legionistom odmówić przysięgi wierności Niemcom i Austro-Węgrom",
      "Podpisał traktat brzeski",
      "Ogłosił rozpad Rady Regencyjnej",
      "Objął dowództwo I Korpusu Polskiego w Rosji",
      "Zorganizował marsz na Rzym",
      "Zaprotestował przeciwko budowie portu w Gdyni"
    ],
    "answer": 0,
    "explanation": "Tak zwany kryzys przysięgowy doprowadził do uwięzienia Piłsudskiego w Magdeburgu."
  },
  {
    "id": "R05_POL_11",
    "section": "Sprawa polska podczas I wojny światowej",
    "type": "multi_select",
    "prompt": "Które państwa przyjęły 3 czerwca 1918 r. deklarację popierającą utworzenie wolnej Polski z dostępem do morza?",
    "options": [
      "Francja",
      "Wielka Brytania",
      "Włochy",
      "Niemcy",
      "Austro-Węgry",
      "Rosja radziecka"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Deklarację 3 czerwca 1918 r. przyjęły Francja, Wielka Brytania i Włochy."
  },
  {
    "id": "R05_WER_01",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "single_choice",
    "prompt": "Kiedy podpisano traktat wersalski z Niemcami?",
    "options": [
      "28 czerwca 1919 r.",
      "11 listopada 1918 r.",
      "18 marca 1921 r.",
      "5 listopada 1916 r.",
      "30 stycznia 1933 r.",
      "23 sierpnia 1939 r."
    ],
    "answer": 0,
    "explanation": "Traktat wersalski podpisano 28 czerwca 1919 r. po konferencji pokojowej w Paryżu.",
    "image": "r05_wersal_podpisanie.jpg"
  },
  {
    "id": "R05_WER_02",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia traktatu wersalskiego dotyczące Niemiec.",
    "options": [
      "Ograniczenie armii do 100 tys. żołnierzy",
      "Utrata kolonii",
      "Obowiązek spłaty reparacji wojennych",
      "Zwrot Alzacji i Lotaryngii Francji",
      "Zgoda na dowolną rozbudowę lotnictwa wojskowego",
      "Oddanie Niemcom Wielkopolski"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Traktat ograniczył niemieckie siły zbrojne, pozbawił Niemcy kolonii i części terytoriów oraz nakładał reparacje."
  },
  {
    "id": "R05_WER_03",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "true_false",
    "prompt": "Liga Narodów rozpoczęła działalność w 1920 r.",
    "options": null,
    "answer": true,
    "explanation": "Organizację powołano do współpracy i pokojowego rozwiązywania sporów; działalność rozpoczęła w 1920 r."
  },
  {
    "id": "R05_WER_04",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "riddle",
    "prompt": "Podaj nazwę organizacji powołanej po I wojnie światowej, która miała pomagać państwom pokojowo rozwiązywać spory.",
    "options": null,
    "answer": "Liga Narodów",
    "explanation": "Liga Narodów działała od 1920 r., lecz nie miała skutecznych narzędzi powstrzymywania agresorów.",
    "altAnswers": [
      "Liga Narodów",
      "Liga Narodow"
    ]
  },
  {
    "id": "R05_WER_05",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "single_choice",
    "prompt": "Kto w 1922 r. objął kierowanie włoskim rządem po marszu faszystów na Rzym?",
    "options": [
      "Benito Mussolini",
      "Adolf Hitler",
      "Józef Stalin",
      "Włodzimierz Lenin",
      "Paul von Hindenburg",
      "Francisco Franco"
    ],
    "answer": 0,
    "explanation": "Król Wiktor Emanuel III powierzył Mussoliniemu utworzenie rządu po faszystowskim marszu na Rzym."
  },
  {
    "id": "R05_WER_06",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "odd_one_out",
    "prompt": "Wskaż zjawisko niepasujące do metod sprawowania władzy w państwach totalitarnych: terror polityczny, cenzura, obozy koncentracyjne, swoboda działania opozycji.",
    "options": null,
    "answer": "swoboda działania opozycji",
    "explanation": "W systemach faszystowskich i stalinowskim tłumiono opozycję, ograniczano wolności i stosowano represje.",
    "image": "r05_propaganda_totalitarna.jpg"
  },
  {
    "id": "R05_WER_07",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "match",
    "prompt": "Dopasuj przywódcę do państwa, w którym umacniał władzę totalitarną.",
    "options": null,
    "answer": {
      "Benito Mussolini": "Włochy",
      "Adolf Hitler": "Niemcy",
      "Józef Stalin": "ZSRR"
    },
    "explanation": "Mussolini kierował faszystowskimi Włochami, Hitler nazistowskimi Niemcami, a Stalin rządził ZSRR.",
    "left": [
      "Benito Mussolini",
      "Adolf Hitler",
      "Józef Stalin"
    ],
    "right": [
      "Niemcy",
      "ZSRR",
      "Włochy"
    ]
  },
  {
    "id": "R05_WER_08",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "scenario",
    "prompt": "W Niemczech w 1935 r. władze uchwalają przepisy wprowadzające segregację rasową i pozbawiające Żydów praw obywatelskich. Jak nazywały się te akty?",
    "options": [
      "Ustawy norymberskie",
      "Traktat wersalski",
      "Konstytucja marcowa",
      "Pakt Ligi Narodów",
      "Nowela sierpniowa",
      "Układ w Rapallo"
    ],
    "answer": 0,
    "explanation": "Ustawy norymberskie z 1935 r. ustanowiły w III Rzeszy przepisy dyskryminujące ludność żydowską."
  },
  {
    "id": "R05_WER_09",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do włoskiego faszyzmu lub niemieckiego nazizmu.",
    "options": null,
    "answer": {
      "faszyzm włoski": [
        "Marsz na Rzym",
        "Utworzenie Wielkiej Rady Faszystowskiej"
      ],
      "nazizm niemiecki": [
        "Pucz monachijski",
        "Noc kryształowa"
      ]
    },
    "explanation": "Marsz na Rzym i Wielka Rada Faszystowska dotyczą Włoch, pucz monachijski i noc kryształowa – Niemiec.",
    "items": [
      "Pucz monachijski",
      "Marsz na Rzym",
      "Utworzenie Wielkiej Rady Faszystowskiej",
      "Noc kryształowa"
    ],
    "categories": [
      "faszyzm włoski",
      "nazizm niemiecki"
    ]
  },
  {
    "id": "R05_WER_10",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "fill_in",
    "prompt": "Po śmierci Lenina w 1924 r. przywódcą ZSRR został Józef __________.",
    "options": null,
    "answer": [
      "Stalin"
    ],
    "explanation": "Władzę po Leninie przejął Stalin; nazwę stalinizm stosuje się do systemu totalitarnego budowanego w ZSRR.",
    "altAnswers": [
      [
        "Stalin",
        "Stalina"
      ]
    ]
  },
  {
    "id": "R05_WER_11",
    "section": "Ład wersalski i totalitaryzmy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii powojennej Europy od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Początek działalności Ligi Narodów",
      "Marsz faszystów na Rzym",
      "Hitler zostaje kanclerzem Niemiec",
      "Uchwalenie ustaw norymberskich"
    ],
    "explanation": "Liga Narodów rozpoczęła działalność w 1920 r., marsz na Rzym był w 1922 r., Hitler został kanclerzem w 1933 r., a ustawy norymberskie uchwalono w 1935 r.",
    "items": [
      "Uchwalenie ustaw norymberskich",
      "Marsz faszystów na Rzym",
      "Początek działalności Ligi Narodów",
      "Hitler zostaje kanclerzem Niemiec"
    ]
  },
  {
    "id": "R05_ODR_01",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "single_choice",
    "prompt": "Kto kierował Tymczasowym Rządem Ludowym Republiki Polskiej utworzonym w Lublinie w listopadzie 1918 r.?",
    "options": [
      "Ignacy Daszyński",
      "Jędrzej Moraczewski",
      "Ignacy Jan Paderewski",
      "Jan Kucharzewski",
      "Roman Dmowski",
      "Wincenty Niemojowski"
    ],
    "answer": 0,
    "explanation": "Rząd lubelski powstał w nocy z 6 na 7 listopada 1918 r. z Ignacym Daszyńskim jako premierem."
  },
  {
    "id": "R05_ODR_02",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "multi_select",
    "prompt": "Wskaż ośrodki polskiej władzy tworzone jesienią 1918 r. przed pełną centralizacją państwa.",
    "options": [
      "Rada Narodowa Księstwa Cieszyńskiego",
      "Polska Komisja Likwidacyjna w Krakowie",
      "Tymczasowy Rząd Ludowy Republiki Polskiej w Lublinie",
      "Rząd Tymczasowy Rosji",
      "Liga Narodów",
      "Wielka Rada Faszystowska"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Na Śląsku Cieszyńskim, w Krakowie i w Lublinie powstały ośrodki przejmujące władzę w 1918 r."
  },
  {
    "id": "R05_ODR_03",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "true_false",
    "prompt": "Według Małej Konstytucji najwyższą władzę w Polsce sprawował Sejm Ustawodawczy.",
    "options": null,
    "answer": true,
    "explanation": "Mała Konstytucja z lutego 1919 r. uznawała Sejm Ustawodawczy za źródło najwyższej władzy."
  },
  {
    "id": "R05_ODR_04",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "scenario",
    "prompt": "Jest maj 1921 r. Na Górnym Śląsku rozpoczyna się zbrojne wystąpienie przeciw niekorzystnemu projektowi podziału obszaru plebiscytowego. Które to powstanie?",
    "options": [
      "Trzecie powstanie śląskie",
      "Pierwsze powstanie śląskie",
      "Drugie powstanie śląskie",
      "Powstanie wielkopolskie",
      "Powstanie styczniowe",
      "Powstanie listopadowe"
    ],
    "answer": 0,
    "explanation": "Trzecie powstanie śląskie rozpoczęło się 3 maja 1921 r., a jego dyktatorem został Wojciech Korfanty.",
    "image": "r05_powstania_slaskie.jpg"
  },
  {
    "id": "R05_ODR_05",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "match",
    "prompt": "Dopasuj wydarzenie lub koncepcję do związanej z nią osoby.",
    "options": null,
    "answer": {
      "Koncepcja federacyjna granic Polski": "Józef Piłsudski",
      "Koncepcja inkorporacyjna granic Polski": "Roman Dmowski",
      "Trzecie powstanie śląskie": "Wojciech Korfanty",
      "Rząd lubelski z listopada 1918 r.": "Ignacy Daszyński"
    },
    "explanation": "Piłsudski proponował federację, Dmowski inkorporację, Korfanty kierował trzecim powstaniem śląskim, a Daszyński rządem lubelskim.",
    "left": [
      "Koncepcja federacyjna granic Polski",
      "Koncepcja inkorporacyjna granic Polski",
      "Trzecie powstanie śląskie",
      "Rząd lubelski z listopada 1918 r."
    ],
    "right": [
      "Roman Dmowski",
      "Ignacy Daszyński",
      "Józef Piłsudski",
      "Wojciech Korfanty"
    ]
  },
  {
    "id": "R05_ODR_06",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "fill_in",
    "prompt": "Traktat pokojowy kończący wojnę polsko-bolszewicką podpisano 18 marca 1921 r. w __________.",
    "options": null,
    "answer": [
      "Rydze"
    ],
    "explanation": "Pokój ryski ustalił wschodnią granicę Polski po wojnie z bolszewikami.",
    "altAnswers": [
      [
        "Rydze",
        "Ryga"
      ]
    ]
  },
  {
    "id": "R05_ODR_07",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "riddle",
    "prompt": "Jak nazywano młodych ochotników broniących Lwowa w listopadzie 1918 r.?",
    "options": null,
    "answer": "Orlęta Lwowskie",
    "explanation": "Do obrony Lwowa przed wojskami ukraińskimi przyłączyli się młodzi ochotnicy, w tym uczniowie polskich szkół.",
    "altAnswers": [
      "Orlęta Lwowskie",
      "Orleta Lwowskie",
      "Orlęta"
    ]
  },
  {
    "id": "R05_ODR_08",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż terytorium, o którego przynależności do Polski nie decydował plebiscyt po I wojnie światowej: Warmia, Mazury, Górny Śląsk, Wielkopolska.",
    "options": null,
    "answer": "Wielkopolska",
    "explanation": "O przynależności Warmii, Mazur i Górnego Śląska miały rozstrzygnąć plebiscyty; los Wielkopolski wiązał się z udanym powstaniem."
  },
  {
    "id": "R05_ODR_09",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z lat 1918–1921 w kolejności.",
    "options": null,
    "answer": [
      "Utworzenie rządu lubelskiego",
      "Pierwsze powstanie śląskie",
      "Bitwa Warszawska",
      "Podpisanie pokoju ryskiego"
    ],
    "explanation": "Rząd lubelski powstał w 1918 r., pierwsze powstanie śląskie wybuchło w 1919 r., Bitwa Warszawska była w 1920 r., a pokój ryski w 1921 r.",
    "items": [
      "Podpisanie pokoju ryskiego",
      "Pierwsze powstanie śląskie",
      "Utworzenie rządu lubelskiego",
      "Bitwa Warszawska"
    ],
    "image": "r05_obrona_warszawy_1920.jpg"
  },
  {
    "id": "R05_ODR_10",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "single_choice",
    "prompt": "Które wydarzenie wojny polsko-bolszewickiej nazywane jest \"Cudem nad Wisłą\"?",
    "options": [
      "Bitwa Warszawska",
      "Bitwa nad Niemnem",
      "Wyprawa kijowska",
      "Walki o Lwów",
      "Bitwa pod Tannenbergiem",
      "Trzecie powstanie śląskie"
    ],
    "answer": 0,
    "explanation": "W sierpniu 1920 r. siły polskie odniosły pod Warszawą zwycięstwo powstrzymujące ofensywę Armii Czerwonej.",
    "image": "r05_obrona_warszawy_1920.jpg"
  },
  {
    "id": "R05_ODR_11",
    "section": "Odrodzenie państwa i granice Polski",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia pokoju ryskiego z 1921 roku.",
    "options": [
      "Ustalenie granicy polsko-radzieckiej przez obszary Białorusi i Ukrainy",
      "Gwarancje praw mniejszości narodowych",
      "Zwrot dóbr kultury wywiezionych po 1772 r.",
      "Odszkodowanie dla Polski w wysokości 60 mln rubli w złocie",
      "Objęcie Gdańska administracją ZSRR",
      "Całkowita demilitaryzacja Nadrenii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pokój ryski określał granicę, prawa mniejszości, zwrot polskich dóbr kultury i odszkodowanie w wysokości 60 mln rubli w złocie."
  },
  {
    "id": "R05_DWR_01",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "single_choice",
    "prompt": "Jaką formę ustroju państwa określała Konstytucja marcowa z 1921 r.?",
    "options": [
      "Demokratyczna republika parlamentarna",
      "Monarchia konstytucyjna",
      "Dyktatura wojskowa",
      "Państwo jednopartyjne",
      "Monarchia absolutna",
      "Republika radziecka"
    ],
    "answer": 0,
    "explanation": "Konstytucja marcowa ustanowiła zasady zwierzchnictwa narodu, podziału władzy i demokracji parlamentarnej."
  },
  {
    "id": "R05_DWR_02",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "multi_select",
    "prompt": "Które prawa i wolności gwarantowała Konstytucja marcowa?",
    "options": [
      "Równość wobec prawa",
      "Wolność sumienia",
      "Wolność zrzeszania się",
      "Wolność prasy",
      "Prawo prezydenta do rządzenia bez jakiejkolwiek odpowiedzialności",
      "Zniesienie nietykalności osobistej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konstytucja marcowa gwarantowała swobody obywatelskie i poszanowanie własności prywatnej."
  },
  {
    "id": "R05_DWR_03",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "true_false",
    "prompt": "Na mocy Konstytucji kwietniowej z 1935 r. rząd był odpowiedzialny politycznie przed Sejmem, a nie przed prezydentem.",
    "options": null,
    "answer": false,
    "explanation": "Konstytucja kwietniowa podporządkowała rząd prezydentowi i zwolniła go z odpowiedzialności przed parlamentem."
  },
  {
    "id": "R05_DWR_04",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "scenario",
    "prompt": "W maju 1926 r. część wojska rusza z Rembertowa do Warszawy, a po walkach ustępują prezydent i rząd. Kto dowodził zbuntowanymi oddziałami?",
    "options": [
      "Józef Piłsudski",
      "Stanisław Wojciechowski",
      "Ignacy Mościcki",
      "Gabriel Narutowicz",
      "Maciej Rataj",
      "Edward Rydz-Śmigły"
    ],
    "answer": 0,
    "explanation": "Wydarzenia z 12–14 maja 1926 r. to przewrót majowy przeprowadzony przez zwolenników Józefa Piłsudskiego."
  },
  {
    "id": "R05_DWR_05",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "match",
    "prompt": "Połącz postać z osiągnięciem lub funkcją w II Rzeczypospolitej.",
    "options": null,
    "answer": {
      "Władysław Grabski": "Reforma walutowa i złoty polski",
      "Eugeniusz Kwiatkowski": "Budowa COP-u i rozwój portu w Gdyni",
      "Władysław Reymont": "Nobel literacki za Chłopów",
      "Gabriel Narutowicz": "Pierwszy prezydent II RP"
    },
    "explanation": "Grabski przeprowadził reformy finansowe; Kwiatkowski rozwijał Gdynię i COP; Reymont otrzymał Nobla w 1924 r.; Narutowicz był pierwszym prezydentem.",
    "left": [
      "Władysław Grabski",
      "Eugeniusz Kwiatkowski",
      "Władysław Reymont",
      "Gabriel Narutowicz"
    ],
    "right": [
      "Budowa COP-u i rozwój portu w Gdyni",
      "Pierwszy prezydent II RP",
      "Reforma walutowa i złoty polski",
      "Nobel literacki za Chłopów"
    ]
  },
  {
    "id": "R05_DWR_06",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "fill_in",
    "prompt": "Magistrala węglowa połączyła __________ z __________.",
    "options": null,
    "answer": [
      "Katowice",
      "Gdynią"
    ],
    "explanation": "W II RP zbudowano linię kolejową Katowice–Gdynia, która ułatwiała wywóz węgla przez polski port.",
    "altAnswers": [
      [
        "Katowice",
        "Katowic"
      ],
      [
        "Gdynią",
        "Gdynię",
        "Gdynia"
      ]
    ],
    "image": "r05_magistrala_weglowa.jpg"
  },
  {
    "id": "R05_DWR_07",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "riddle",
    "prompt": "Jak nazywał się projekt inwestycyjny zainicjowany w 1937 r. w widłach Wisły i Sanu?",
    "options": null,
    "answer": "Centralny Okręg Przemysłowy",
    "explanation": "Budowę Centralnego Okręgu Przemysłowego rozpoczęto w 1937 r. w ramach planu inwestycji opracowanego przez Eugeniusza Kwiatkowskiego.",
    "altAnswers": [
      "Centralny Okręg Przemysłowy",
      "COP",
      "Centralnego Okręgu Przemysłowego"
    ],
    "image": "r05_cop_fabryka.jpg"
  },
  {
    "id": "R05_DWR_08",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "odd_one_out",
    "prompt": "Które miasto nie było ośrodkiem budowy zakładów przemysłowych Centralnego Okręgu Przemysłowego: Stalowa Wola, Mielec, Dębica, Gdynia?",
    "options": null,
    "answer": "Gdynia",
    "explanation": "Gdynia była przede wszystkim ośrodkiem rozbudowy portu morskiego, natomiast zakłady COP powstawały m.in. w Stalowej Woli, Mielcu i Dębicy."
  },
  {
    "id": "R05_DWR_09",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia polityczne II RP od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Uchwalenie Konstytucji marcowej",
      "Wybór Gabriela Narutowicza na prezydenta",
      "Przewrót majowy",
      "Uchwalenie Konstytucji kwietniowej"
    ],
    "explanation": "Konstytucję marcową uchwalono w 1921 r., Narutowicza wybrano w 1922 r., przewrót majowy był w 1926 r., a konstytucja kwietniowa w 1935 r.",
    "items": [
      "Uchwalenie Konstytucji kwietniowej",
      "Wybór Gabriela Narutowicza na prezydenta",
      "Uchwalenie Konstytucji marcowej",
      "Przewrót majowy"
    ]
  },
  {
    "id": "R05_DWR_10",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "single_choice",
    "prompt": "Z którym państwem Polska podpisała 26 stycznia 1934 r. deklarację o niestosowaniu przemocy?",
    "options": [
      "Niemcy",
      "ZSRR",
      "Francja",
      "Wielka Brytania",
      "Rumunia",
      "Czechosłowacja"
    ],
    "answer": 0,
    "explanation": "W 1934 r. Polska podpisała z Niemcami dziesięcioletnią deklarację o niestosowaniu przemocy."
  },
  {
    "id": "R05_DWR_11",
    "section": "II Rzeczpospolita: polityka, gospodarka i kultura",
    "type": "multi_select",
    "prompt": "Zaznacz inicjatywy gospodarcze zrealizowane w II Rzeczypospolitej.",
    "options": [
      "Wprowadzenie złotego polskiego",
      "Budowa portu w Gdyni",
      "Budowa magistrali węglowej Katowice–Gdynia",
      "Rozpoczęcie budowy Centralnego Okręgu Przemysłowego",
      "Obowiązkowa kolektywizacja całego rolnictwa",
      "Likwidacja Banku Polskiego podczas reformy walutowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do najważniejszych osiągnięć II RP należały reforma waluty, Gdynia, magistrala węglowa i COP.",
    "image": "r05_cop_fabryka.jpg"
  },
  {
    "id": "R05_DRO_01",
    "section": "Droga do II wojny światowej",
    "type": "single_choice",
    "prompt": "Na terytorium którego kraju Japonia utworzyła w 1932 r. podporządkowane sobie Mandżukuo?",
    "options": [
      "Chin",
      "Korei",
      "Indii",
      "Wietnamu",
      "Tajlandii",
      "Filipin"
    ],
    "answer": 0,
    "explanation": "W wyniku japońskiej agresji w chińskiej Mandżurii powstało kontrolowane przez Japonię Mandżukuo."
  },
  {
    "id": "R05_DRO_02",
    "section": "Droga do II wojny światowej",
    "type": "true_false",
    "prompt": "Japonia wystąpiła z Ligi Narodów w 1933 r. po konflikcie wokół okupacji Mandżurii.",
    "options": null,
    "answer": true,
    "explanation": "Liga Narodów badała agresję w Mandżurii, lecz Japonia nie wycofała wojsk i opuściła organizację w 1933 r."
  },
  {
    "id": "R05_DRO_03",
    "section": "Droga do II wojny światowej",
    "type": "multi_select",
    "prompt": "Wskaż działania agresywnej polityki państw osi lub ich przyszłych sojuszników w latach trzydziestych XX wieku.",
    "options": [
      "Japońskie zajęcie Mandżurii",
      "Włoska agresja na Etiopię",
      "Niemieckie wkroczenie do zdemilitaryzowanej Nadrenii",
      "Przyłączenie Austrii do III Rzeszy",
      "Utworzenie Ligi Narodów",
      "Podpisanie pokojowego traktatu ryskiego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W latach trzydziestych Japonia, Włochy i Niemcy stosowały ekspansję terytorialną oraz łamały międzynarodowy porządek."
  },
  {
    "id": "R05_DRO_04",
    "section": "Droga do II wojny światowej",
    "type": "scenario",
    "prompt": "W 1936 r. przeciwko władzom republikańskim Hiszpanii buntują się oddziały w Maroku. Który generał staje na czele wojsk rebelianckich?",
    "options": [
      "Francisco Franco",
      "Ferdynand Foch",
      "Edward Rydz-Śmigły",
      "Józef Haller",
      "Alfred von Schlieffen",
      "Wiktor Emanuel III"
    ],
    "answer": 0,
    "explanation": "W lipcu 1936 r. bunt wojsk dowodzonych przez Francisco Franco zapoczątkował wojnę domową w Hiszpanii."
  },
  {
    "id": "R05_DRO_05",
    "section": "Droga do II wojny światowej",
    "type": "match",
    "prompt": "Dopasuj agresywne działanie do zajętego obszaru.",
    "options": null,
    "answer": {
      "Japońska ekspansja z 1931 r.": "Mandżuria",
      "Włoska agresja z 1935 r.": "Etiopia",
      "Anschluss z 1938 r.": "Austria",
      "Niemiecka okupacja w marcu 1939 r.": "Czechy i Morawy"
    },
    "explanation": "Japonia zajęła Mandżurię, Włochy zaatakowały Etiopię, III Rzesza przyłączyła Austrię, a następnie zajęła Czechy i Morawy.",
    "left": [
      "Japońska ekspansja z 1931 r.",
      "Włoska agresja z 1935 r.",
      "Anschluss z 1938 r.",
      "Niemiecka okupacja w marcu 1939 r."
    ],
    "right": [
      "Etiopia",
      "Czechy i Morawy",
      "Mandżuria",
      "Austria"
    ]
  },
  {
    "id": "R05_DRO_06",
    "section": "Droga do II wojny światowej",
    "type": "fill_in",
    "prompt": "Układ monachijski dotyczący Sudetów zawarto we wrześniu roku __________.",
    "options": null,
    "answer": [
      "1938"
    ],
    "explanation": "Konferencja mocarstw odbyła się w Monachium 29 września 1938 r.; Czechosłowacja utraciła Sudety.",
    "altAnswers": [
      [
        "1938",
        "1938 r."
      ]
    ],
    "image": "r05_konferencja_monachium.jpg"
  },
  {
    "id": "R05_DRO_07",
    "section": "Droga do II wojny światowej",
    "type": "riddle",
    "prompt": "Jak nazywała się hiszpańska wojna, w której w latach 1936–1939 walczyli republikanie i zwolennicy gen. Franco?",
    "options": null,
    "answer": "Wojna domowa w Hiszpanii",
    "explanation": "Hiszpańska wojna domowa rozpoczęła się buntem oddziałów Franco w 1936 r. i zakończyła zwycięstwem jego sił w 1939 r.",
    "altAnswers": [
      "Wojna domowa w Hiszpanii",
      "hiszpańska wojna domowa",
      "wojna domowa"
    ]
  },
  {
    "id": "R05_DRO_08",
    "section": "Droga do II wojny światowej",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo nienależące do osi Berlin–Rzym–Tokio: Niemcy, Włochy, Japonia, Francja.",
    "options": null,
    "answer": "Francja",
    "explanation": "Oś Berlin–Rzym–Tokio powstała w wyniku porozumień Niemiec, Włoch i Japonii."
  },
  {
    "id": "R05_DRO_09",
    "section": "Droga do II wojny światowej",
    "type": "sequence",
    "prompt": "Uporządkuj wydarzenia prowadzące do II wojny światowej.",
    "options": null,
    "answer": [
      "Japońskie zajęcie Mandżurii",
      "Włoska agresja na Etiopię",
      "Układ monachijski",
      "Pakt Ribbentrop–Mołotow"
    ],
    "explanation": "Japonia zajęła Mandżurię w 1931 r., Włochy napadły na Etiopię w 1935 r., Monachium było w 1938 r., a pakt niemiecko-radziecki w 1939 r.",
    "items": [
      "Pakt Ribbentrop–Mołotow",
      "Włoska agresja na Etiopię",
      "Japońskie zajęcie Mandżurii",
      "Układ monachijski"
    ]
  },
  {
    "id": "R05_DRO_10",
    "section": "Droga do II wojny światowej",
    "type": "single_choice",
    "prompt": "Co ustalał tajny protokół paktu Ribbentrop–Mołotow podpisanego w sierpniu 1939 r.?",
    "options": [
      "Podział stref wpływów Niemiec i ZSRR w Europie Środkowej i Południowo-Wschodniej",
      "Przyjęcie obu państw do Ligi Narodów",
      "Natychmiastowe uznanie niepodległości Ukrainy",
      "Wspólny plan reform rolnych w Polsce",
      "Utworzenie wolnego miasta w Berlinie",
      "Rozbrojenie obu armii"
    ],
    "answer": 0,
    "explanation": "Tajny protokół określał strefy wpływów III Rzeszy i ZSRR, m.in. na obszarze Polski i państw bałtyckich.",
    "image": "r05_pakt_1939.jpg"
  },
  {
    "id": "R05_DRO_11",
    "section": "Droga do II wojny światowej",
    "type": "multi_select",
    "prompt": "Które rzeki wymieniono w tajnym protokole paktu Ribbentrop–Mołotow jako przybliżoną linię rozgraniczenia stref wpływów na ziemiach polskich?",
    "options": [
      "Narew",
      "Wisła",
      "San",
      "Niemen",
      "Zbrucz"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W protokole wskazano linię Narwi, Wisły i Sanu jako przybliżoną granicę stref wpływów Niemiec i ZSRR."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku jednocześnie trwała bitwa nad Sommą i ogłoszono akt dwóch cesarzy dotyczący Królestwa Polskiego?",
    "options": [
      "1916",
      "1914",
      "1915",
      "1917",
      "1918",
      "1919"
    ],
    "answer": 0,
    "explanation": "Ofensywa nad Sommą miała miejsce w 1916 r., podobnie jak ogłoszenie aktu 5 listopada w sprawie Królestwa Polskiego."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Traktat wersalski podpisano dokładnie pięć lat po zamachu w Sarajewie – 28 czerwca.",
    "options": null,
    "answer": true,
    "explanation": "Zamach w Sarajewie miał miejsce 28 czerwca 1914 r., a traktat wersalski podpisano 28 czerwca 1919 r."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz mniej znane postacie z właściwymi organami władzy lub wydarzeniami.",
    "options": null,
    "answer": {
      "Wincenty Niemojowski": "Tymczasowa Rada Stanu",
      "Władysław Raczkiewicz": "Naczelny Polski Komitet Wojskowy",
      "Jan Kucharzewski": "Rząd powołany przez Radę Regencyjną",
      "Ignacy Daszyński": "Tymczasowy rząd lubelski",
      "Jędrzej Moraczewski": "Rząd powołany przez Piłsudskiego w listopadzie 1918 r."
    },
    "explanation": "Niemojowski kierował Tymczasową Radą Stanu, Raczkiewicz Naczelnym Polskim Komitetem Wojskowym, Kucharzewski rządem Rady Regencyjnej, Daszyński rządem lubelskim, a Moraczewski rządem Piłsudskiego.",
    "left": [
      "Wincenty Niemojowski",
      "Władysław Raczkiewicz",
      "Jan Kucharzewski",
      "Ignacy Daszyński",
      "Jędrzej Moraczewski"
    ],
    "right": [
      "Naczelny Polski Komitet Wojskowy",
      "Tymczasowy rząd lubelski",
      "Tymczasowa Rada Stanu",
      "Rząd powołany przez Radę Regencyjną",
      "Rząd powołany przez Piłsudskiego w listopadzie 1918 r."
    ]
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pięć wydarzeń polskiej drogi do niepodległości w ścisłej kolejności.",
    "options": null,
    "answer": [
      "Zamach w Sarajewie",
      "Akt 5 listopada",
      "Orędzie Wilsona z postulatem wolnej Polski",
      "Deklaracja Francji, Wielkiej Brytanii i Włoch",
      "Zakończenie I wojny światowej"
    ],
    "explanation": "Daty: 28 VI 1914; 5 XI 1916; 8 I 1918; 3 VI 1918; 11 XI 1918.",
    "items": [
      "Deklaracja Francji, Wielkiej Brytanii i Włoch",
      "Akt 5 listopada",
      "Zamach w Sarajewie",
      "Orędzie Wilsona z postulatem wolnej Polski",
      "Zakończenie I wojny światowej"
    ]
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które wydarzenia z historii Polski miały miejsce w 1921 r.?",
    "options": [
      "Uchwalenie Konstytucji marcowej",
      "Podpisanie pokoju ryskiego",
      "Plebiscyt na Górnym Śląsku",
      "Trzecie powstanie śląskie",
      "Wybór Gabriela Narutowicza na prezydenta",
      "Przewrót majowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konstytucja marcowa, pokój ryski, plebiscyt górnośląski i trzecie powstanie śląskie przypadają na rok 1921; Narutowicza wybrano w 1922 r., a przewrót nastąpił w 1926 r."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Przewodniczącym Tymczasowej Rady Stanu utworzonej po akcie 5 listopada został Wincenty __________.",
    "options": null,
    "answer": [
      "Niemojowski"
    ],
    "explanation": "Po ogłoszeniu aktu 5 listopada powołano Tymczasową Radę Stanu, na której czele stał Wincenty Niemojowski.",
    "altAnswers": [
      [
        "Niemojowski",
        "Niemojowskiego"
      ]
    ]
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Podaj nazwę krążownika, którego wystrzał według propagandowej wersji wydarzeń dał sygnał do szturmu Pałacu Zimowego.",
    "options": null,
    "answer": "Aurora",
    "explanation": "Według oficjalnej wersji rozpowszechnianej przez sowiecką propagandę wystrzał z krążownika „Aurora” miał dać sygnał do szturmu Pałacu Zimowego.",
    "altAnswers": [
      "Aurora",
      "Aurory",
      "krążownik Aurora"
    ]
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie z innego okresu niż pozostałe: traktat ryski, Konstytucja marcowa, trzecie powstanie śląskie, pakt Ribbentrop–Mołotow.",
    "options": null,
    "answer": "pakt Ribbentrop–Mołotow",
    "explanation": "Trzy pierwsze wydarzenia przypadają na 1921 r.; pakt Ribbentrop–Mołotow podpisano 23 sierpnia 1939 r."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś polskim dyplomatą po konferencji w Locarno w 1925 r. Niemieckie granice z Francją i Belgią zostały zagwarantowane, ale jedna z granic Niemiec nie otrzymała podobnej gwarancji. Która?",
    "options": [
      "Granica niemiecko-polska",
      "Granica niemiecko-francuska",
      "Granica niemiecko-belgijska",
      "Granica francusko-belgijska",
      "Granica francusko-włoska",
      "Granica belgijsko-holenderska"
    ],
    "answer": 0,
    "explanation": "W Locarno potwierdzono zachodnie granice Niemiec z Francją i Belgią; granica z Polską nie otrzymała analogicznych gwarancji."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para zdarzeń miała miejsce w roku 1932?",
    "options": [
      "Podpisanie polsko-radzieckiego paktu o nieagresji oraz utworzenie Mandżukuo",
      "Układ monachijski oraz wejście Japonii do wojny z Chinami",
      "Pakt Ribbentrop–Mołotow oraz przyłączenie Austrii do III Rzeszy",
      "Marsz na Rzym oraz wybuch wojny w Hiszpanii",
      "Wybór Narutowicza oraz uchwalenie Konstytucji kwietniowej",
      "Podpisanie pokoju ryskiego oraz noc kryształowa"
    ],
    "answer": 0,
    "explanation": "Polsko-radziecki pakt o nieagresji podpisano 25 lipca 1932 r., a kontrolowane przez Japonię Mandżukuo utworzono w 1932 r."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel instytucje i przedsięwzięcia okresu międzywojennego według ich funkcji.",
    "options": null,
    "answer": {
      "polityka": [
        "Liga Narodów",
        "Bezpartyjny Blok Współpracy z Rządem"
      ],
      "gospodarka": [
        "Bank Polski",
        "Centralny Okręg Przemysłowy"
      ],
      "kultura i nauka": [
        "Polska Akademia Literatury",
        "Instytut Radowy"
      ]
    },
    "explanation": "Liga Narodów i BBWR dotyczyły polityki, Bank Polski i COP gospodarki, a Polska Akademia Literatury i Instytut Radowy kultury oraz nauki.",
    "items": [
      "Polska Akademia Literatury",
      "Bank Polski",
      "Liga Narodów",
      "Bezpartyjny Blok Współpracy z Rządem",
      "Centralny Okręg Przemysłowy",
      "Instytut Radowy"
    ],
    "categories": [
      "polityka",
      "gospodarka",
      "kultura i nauka"
    ]
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W latach 1932 i 1934 Polska zawiera dwa porozumienia: układ o nieagresji z ZSRR oraz deklarację o niestosowaniu przemocy z Niemcami. Jaką zasadę polityki zagranicznej II RP miały wspierać oba dokumenty?",
    "options": [
      "Politykę równowagi między Berlinem a Moskwą",
      "Plan federacji z Niemcami",
      "Sojusz wojskowy wyłącznie z ZSRR",
      "Całkowitą izolację Polski",
      "Politykę podporządkowania Polski Niemcom",
      "Koncepcję inkorporacyjną Romana Dmowskiego"
    ],
    "answer": 0,
    "explanation": "Polityka równowagi zakładała utrzymywanie podobnego dystansu do Niemiec i ZSRR oraz niedopuszczenie do ich porozumienia przeciw Polsce."
  }
];

const KID_PROMPTS = {
  "R05_WOJ_02": "Zaznacz dawne przyczyny I wojny światowej, a nie wydarzenia po jej wybuchu.",
  "R05_WOJ_07": "Żołnierze długo walczą z okopów. Jaki to typ wojny?",
  "R05_POL_01": "Co obiecywał akt 5 listopada 1916 r.?",
  "R05_POL_06": "Który prezydent USA mówił o wolnej Polsce z dostępem do morza?",
  "R05_WER_02": "Które ograniczenia nałożono na Niemcy po I wojnie światowej?",
  "R05_WER_08": "Jak nazywały się prawa, które odebrały Żydom prawa obywatelskie w Niemczech?",
  "R05_ODR_04": "Które powstanie śląskie wybuchło w maju 1921 r.?",
  "R05_ODR_11": "Co zapisano w pokoju ryskim?",
  "R05_DWR_03": "Czy według konstytucji z 1935 r. rząd odpowiadał przed Sejmem?",
  "R05_DWR_06": "Jakie dwa miasta połączyła magistrala węglowa?",
  "R05_DRO_10": "Co Niemcy i ZSRR podzieliły w tajnym dokumencie z sierpnia 1939 r.?",
  "R05_HARD_09": "Jakiej granicy Niemiec nie chroniły postanowienia Locarno?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "I wojna światowa i dwudziestolecie międzywojenne",
  "icon": "📜",
  "sectionOrder": [
    "I wojna światowa i rewolucje w Rosji",
    "Sprawa polska podczas I wojny światowej",
    "Ład wersalski i totalitaryzmy",
    "Odrodzenie państwa i granice Polski",
    "II Rzeczpospolita: polityka, gospodarka i kultura",
    "Droga do II wojny światowej"
  ],
  "sectionIcons": {
    "I wojna światowa i rewolucje w Rosji": "⚔️",
    "Sprawa polska podczas I wojny światowej": "🇵🇱",
    "Ład wersalski i totalitaryzmy": "🌍",
    "Odrodzenie państwa i granice Polski": "🗺️",
    "II Rzeczpospolita: polityka, gospodarka i kultura": "🏛️",
    "Droga do II wojny światowej": "🕊️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
