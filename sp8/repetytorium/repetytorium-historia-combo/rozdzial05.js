// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NAP  = Epoka napoleońska
//   WIE  = Kongres wiedeński i nowy ład
//   LIS  = Królestwo Polskie i powstanie listopadowe
//   STY  = Powstanie styczniowe i rusyfikacja
//   POL  = Germanizacja, autonomia i obrona polskości
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_NAP_01",
    "section": "Epoka napoleońska",
    "type": "single_choice",
    "prompt": "W którym roku Napoleon Bonaparte przejął władzę we Francji w wyniku zamachu stanu?",
    "image": "r05_napoleon_portret.jpg",
    "options": [
      "1795",
      "1799",
      "1804",
      "1807",
      "1812",
      "1815"
    ],
    "answer": 1,
    "explanation": "Zamach stanu Napoleona obalił dyrektoriat w 1799 roku."
  },
  {
    "id": "R05_NAP_02",
    "section": "Epoka napoleońska",
    "type": "match",
    "prompt": "Połącz wydarzenie z odpowiednią datą.",
    "options": null,
    "left": [
      "Powstanie Księstwa Warszawskiego",
      "Utworzenie Legionów Polskich we Włoszech",
      "Wydanie Kodeksu Napoleona",
      "Zamach stanu Napoleona"
    ],
    "right": [
      "1804",
      "1797",
      "1807",
      "1799"
    ],
    "answer": {
      "Utworzenie Legionów Polskich we Włoszech": "1797",
      "Zamach stanu Napoleona": "1799",
      "Wydanie Kodeksu Napoleona": "1804",
      "Powstanie Księstwa Warszawskiego": "1807"
    },
    "explanation": "Legiony utworzono w 1797 roku, Napoleon przejął władzę w 1799, wydał kodeks w 1804, a Księstwo Warszawskie powstało w 1807."
  },
  {
    "id": "R05_NAP_03",
    "section": "Epoka napoleońska",
    "type": "true_false",
    "prompt": "W 1804 roku Napoleon wydał kodeks cywilny nazywany także Kodeksem Napoleona.",
    "options": null,
    "answer": true,
    "explanation": "Kodeks Cywilny z 1804 roku regulował m.in. równość wobec prawa, ochronę własności prywatnej i równouprawnienie wyznań."
  },
  {
    "id": "R05_NAP_04",
    "section": "Epoka napoleońska",
    "type": "multi_select",
    "prompt": "Zaznacz zasady zapisane w Kodeksie Napoleona.",
    "image": "r05_kodeks_napoleona.jpg",
    "options": [
      "Równość wszystkich wobec prawa",
      "Uprzywilejowanie arystokracji",
      "Nienaruszalność własności prywatnej",
      "Równouprawnienie wyznań",
      "Przywrócenie poddaństwa stanowego"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Kodeks Napoleona gwarantował równość wobec prawa, ochronę własności prywatnej i równouprawnienie wyznań."
  },
  {
    "id": "R05_NAP_05",
    "section": "Epoka napoleońska",
    "type": "fill_in",
    "prompt": "W roku __________ Napoleon obalił dyrektoriat i powołał rząd nazywany __________.",
    "options": null,
    "answer": [
      "1799",
      "konsulatem"
    ],
    "altAnswers": [
      [
        "1799",
        "1799 r."
      ],
      [
        "konsulatem",
        "konsulat",
        "konsulatem trzech osób"
      ]
    ],
    "explanation": "W 1799 roku dyrektoriat zastąpił trzyosobowy konsulat, w którym Napoleon był pierwszym konsulem."
  },
  {
    "id": "R05_NAP_06",
    "section": "Epoka napoleońska",
    "type": "odd_one_out",
    "prompt": "Wskaż element niezgodny z zasadami Kodeksu Napoleona: równość wobec prawa, ochrona własności prywatnej, równouprawnienie wyznań, przywrócenie przywilejów stanowych.",
    "options": null,
    "answer": "przywrócenie przywilejów stanowych",
    "explanation": "Kodeks wprowadzał równość wobec prawa, chronił własność prywatną i uznawał równouprawnienie wyznań; nie przywracał przywilejów stanowych."
  },
  {
    "id": "R05_NAP_07",
    "section": "Epoka napoleońska",
    "type": "scenario",
    "prompt": "Jest rok 1807. Z ziem należących wcześniej do zaboru pruskiego powstaje nowe państwo polskie z własnym sejmem i armią, lecz zależne od Francji. Co to za państwo?",
    "image": "r05_ksiestwo_warszawskie_mapa.jpg",
    "options": [
      "Królestwo Polskie",
      "Rzeczpospolita Krakowska",
      "Księstwo Warszawskie",
      "Wielkie Księstwo Poznańskie"
    ],
    "answer": 2,
    "explanation": "Księstwo Warszawskie powstało z ziem zaboru pruskiego w 1807 roku i pozostawało zależne od Napoleona."
  },
  {
    "id": "R05_NAP_08",
    "section": "Epoka napoleońska",
    "type": "sort",
    "prompt": "Przyporządkuj instytucje i tytuły do państwa, z którym wiązały się w czasach Napoleona.",
    "options": null,
    "items": [
      "Własna armia polska",
      "Pierwszy konsul",
      "Król Saksonii jako władca",
      "Trzyosobowy konsulat",
      "Własny sejm",
      "Cesarz Francuzów"
    ],
    "categories": [
      "Francja Napoleona",
      "Księstwo Warszawskie"
    ],
    "answer": {
      "Francja Napoleona": [
        "Pierwszy konsul",
        "Trzyosobowy konsulat",
        "Cesarz Francuzów"
      ],
      "Księstwo Warszawskie": [
        "Król Saksonii jako władca",
        "Własny sejm",
        "Własna armia polska"
      ]
    },
    "explanation": "Władza Napoleona we Francji opierała się najpierw na konsulacie, potem na cesarstwie; Księstwo Warszawskie miało króla Saksonii, sejm i armię."
  },
  {
    "id": "R05_NAP_09",
    "section": "Epoka napoleońska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia chronologicznie, od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Wydanie Kodeksu Napoleona",
      "Powstanie Księstwa Warszawskiego",
      "Utworzenie Legionów Polskich",
      "Zamach stanu Napoleona"
    ],
    "answer": [
      "Utworzenie Legionów Polskich",
      "Zamach stanu Napoleona",
      "Wydanie Kodeksu Napoleona",
      "Powstanie Księstwa Warszawskiego"
    ],
    "explanation": "Legiony Polskie utworzono w 1797 roku, zamach Napoleona miał miejsce w 1799, kodeks wydano w 1804, a Księstwo Warszawskie powstało w 1807."
  },
  {
    "id": "R05_NAP_10",
    "section": "Epoka napoleońska",
    "type": "riddle",
    "prompt": "Jak nazywał się trzyosobowy rząd, którym Napoleon zastąpił dyrektoriat?",
    "options": null,
    "answer": "konsulat",
    "altAnswers": [
      "konsulat",
      "konsulatem"
    ],
    "explanation": "Konsulat powołano po zamachu stanu w 1799 roku, a Napoleon został w nim pierwszym konsulem."
  },
  {
    "id": "R05_NAP_11",
    "section": "Epoka napoleońska",
    "type": "single_choice",
    "prompt": "Kto został władcą Księstwa Warszawskiego utworzonego przez Napoleona?",
    "image": "r05_ksiestwo_warszawskie_mapa.jpg",
    "options": [
      "Car Rosji",
      "Król Prus",
      "Cesarz Austrii",
      "Król Saksonii",
      "Król Wielkiej Brytanii",
      "Król Hiszpanii"
    ],
    "answer": 3,
    "explanation": "Władcą Księstwa Warszawskiego został król Saksonii; państwo miało też własny sejm, rząd i armię."
  },
  {
    "id": "R05_NAP_12",
    "section": "Epoka napoleońska",
    "type": "true_false",
    "prompt": "Księstwo Warszawskie mogło samodzielnie prowadzić politykę zagraniczną bez oglądania się na Francję.",
    "options": null,
    "answer": false,
    "explanation": "Księstwo Warszawskie nie miało niezależnej polityki zagranicznej i musiało wspierać Francję militarnie."
  },
  {
    "id": "R05_WIE_01",
    "section": "Kongres wiedeński i nowy ład",
    "type": "single_choice",
    "prompt": "Która wyprawa rozpoczęła serię klęsk Napoleona i przyczyniła się do upadku jego władzy?",
    "image": "r05_odwrot_z_rosji.jpg",
    "options": [
      "Wyprawa do Hiszpanii w 1808 roku",
      "Wyprawa do Włoch",
      "Wyprawa na ziemie polskie",
      "Wyprawa do Austrii",
      "Wyprawa na Rosję w 1812 roku"
    ],
    "answer": 4,
    "explanation": "Wyprawa na Rosję w 1812 roku zakończyła się klęską Napoleona i rozpoczęła pasmo jego porażek."
  },
  {
    "id": "R05_WIE_02",
    "section": "Kongres wiedeński i nowy ład",
    "type": "scenario",
    "prompt": "Po upadku Napoleona władcy europejscy spotykają się, aby przywrócić dawnych monarchów i ustalić nowy podział terytoriów. Z jakim wydarzeniem wiąże się taki cel?",
    "image": "r05_kongres_wiedenski.jpg",
    "options": [
      "Zamach stanu Napoleona",
      "Kongres wiedeński",
      "Wybuch powstania listopadowego",
      "Utworzenie Księstwa Warszawskiego"
    ],
    "answer": 1,
    "explanation": "Kongres wiedeński ustalał porządek w Europie po upadku Napoleona, przywracając monarchów i zmieniając granice."
  },
  {
    "id": "R05_WIE_03",
    "section": "Kongres wiedeński i nowy ład",
    "type": "match",
    "prompt": "Połącz państwo polskie utworzone po 1815 roku z tym, kto sprawował nad nim zwierzchnictwo.",
    "image": "r05_ziemie_polskie_1815_mapa.jpg",
    "options": null,
    "left": [
      "Rzeczpospolita Krakowska",
      "Królestwo Polskie",
      "Wielkie Księstwo Poznańskie"
    ],
    "right": [
      "Trzej zaborcy",
      "Prusy",
      "Rosja"
    ],
    "answer": {
      "Królestwo Polskie": "Rosja",
      "Wielkie Księstwo Poznańskie": "Prusy",
      "Rzeczpospolita Krakowska": "Trzej zaborcy"
    },
    "explanation": "Królestwo Polskie podlegało Rosji, Wielkie Księstwo Poznańskie Prusom, a Rzeczpospolita Krakowska była kontrolowana przez trzech zaborców."
  },
  {
    "id": "R05_WIE_04",
    "section": "Kongres wiedeński i nowy ład",
    "type": "multi_select",
    "prompt": "Które działania były następstwami porządku ustanowionego po klęsce Napoleona?",
    "options": [
      "Przywrócenie dawnych monarchów",
      "Utrzymanie Księstwa Warszawskiego",
      "Likwidacja Księstwa Warszawskiego",
      "Nowy podział części terytoriów",
      "Rozszerzenie władzy Napoleona",
      "Dążenie do równowagi sił w Europie"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Kongres przywracał dawnych monarchów, znosił utworzone przez Napoleona państwa i dokonywał zmian granic, aby zachować równowagę sił."
  },
  {
    "id": "R05_WIE_05",
    "section": "Kongres wiedeński i nowy ład",
    "type": "fill_in",
    "prompt": "Nowy porządek europejski po upadku Napoleona ustalono na kongresie __________, którego decyzje wprowadzano od roku __________.",
    "options": null,
    "answer": [
      "wiedeńskim",
      "1815"
    ],
    "altAnswers": [
      [
        "wiedeńskim",
        "wiedeński",
        "w Wiedniu"
      ],
      [
        "1815",
        "1815 r."
      ]
    ],
    "explanation": "Po upadku Napoleona porządek w Europie ustalono na kongresie wiedeńskim; w 1815 roku rozstrzygnięto losy wielu państw i granic."
  },
  {
    "id": "R05_WIE_06",
    "section": "Kongres wiedeński i nowy ład",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie powstało wskutek likwidacji Księstwa Warszawskiego: Królestwo Polskie, Wielkie Księstwo Poznańskie, Rzeczpospolita Krakowska, Księstwo Warszawskie.",
    "options": null,
    "answer": "Księstwo Warszawskie",
    "explanation": "Trzy pozostałe jednostki powstały z ziem zlikwidowanego w 1815 roku Księstwa Warszawskiego."
  },
  {
    "id": "R05_WIE_07",
    "section": "Kongres wiedeński i nowy ład",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do okresu napoleońskiego lub ładu przywróconego po kongresie wiedeńskim.",
    "options": null,
    "items": [
      "Święte Przymierze strzegące nowego porządku",
      "Kodeks gwarantujący równość wobec prawa",
      "Wzmocnienie roli arystokracji i duchowieństwa",
      "Odsuwanie dawnych władców od tronu",
      "Tworzenie nowych państw zależnych od Francji",
      "Przywracanie obalonych monarchów"
    ],
    "categories": [
      "Porządek napoleoński",
      "Ład po kongresie wiedeńskim"
    ],
    "answer": {
      "Porządek napoleoński": [
        "Kodeks gwarantujący równość wobec prawa",
        "Odsuwanie dawnych władców od tronu",
        "Tworzenie nowych państw zależnych od Francji"
      ],
      "Ład po kongresie wiedeńskim": [
        "Przywracanie obalonych monarchów",
        "Wzmocnienie roli arystokracji i duchowieństwa",
        "Święte Przymierze strzegące nowego porządku"
      ]
    },
    "explanation": "Napoleon wprowadzał kodeks i zmieniał władców; kongres wiedeński przywrócił dawną władzę monarchiczną i ustanowił Święte Przymierze."
  },
  {
    "id": "R05_WIE_08",
    "section": "Kongres wiedeński i nowy ład",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Klęska wyprawy Napoleona na Rosję",
      "Likwidacja Księstwa Warszawskiego",
      "Przejęcie władzy przez Napoleona",
      "Powstanie Księstwa Warszawskiego"
    ],
    "answer": [
      "Przejęcie władzy przez Napoleona",
      "Powstanie Księstwa Warszawskiego",
      "Klęska wyprawy Napoleona na Rosję",
      "Likwidacja Księstwa Warszawskiego"
    ],
    "explanation": "W kolejności były to lata 1799, 1807, 1812 i 1815."
  },
  {
    "id": "R05_WIE_09",
    "section": "Kongres wiedeński i nowy ład",
    "type": "riddle",
    "prompt": "Jak nazywał się sojusz państw zobowiązanych strzec ładu politycznego ustanowionego po kongresie wiedeńskim?",
    "options": null,
    "answer": "Święte Przymierze",
    "altAnswers": [
      "Święte Przymierze",
      "Swiete Przymierze"
    ],
    "explanation": "Święte Przymierze miało reagować zbrojnie na próby zmiany porządku ustanowionego w Europie."
  },
  {
    "id": "R05_WIE_10",
    "section": "Kongres wiedeński i nowy ład",
    "type": "true_false",
    "prompt": "Święte Przymierze miało bronić ustalonego porządku nawet za pomocą interwencji zbrojnej.",
    "image": "r05_kongres_wiedenski.jpg",
    "options": null,
    "answer": true,
    "explanation": "Święte Przymierze było sojuszem państw gotowych do zbrojnego przeciwstawiania się próbom zmiany porządku europejskiego."
  },
  {
    "id": "R05_WIE_11",
    "section": "Kongres wiedeński i nowy ład",
    "type": "single_choice",
    "prompt": "Pod nadzorem kogo znalazła się Rzeczpospolita Krakowska po kongresie wiedeńskim?",
    "image": "r05_ziemie_polskie_1815_mapa.jpg",
    "options": [
      "Wyłącznie Rosji",
      "Wyłącznie Prus",
      "Rosji, Prus i Austrii",
      "Wyłącznie Austrii",
      "Francji"
    ],
    "answer": 2,
    "explanation": "Rzeczpospolita Krakowska była kontrolowana przez trzech zaborców: Rosję, Prusy i Austrię."
  },
  {
    "id": "R05_WIE_12",
    "section": "Kongres wiedeński i nowy ład",
    "type": "multi_select",
    "prompt": "Które z poniższych instytucji Królestwo Polskie początkowo posiadało dzięki autonomii po 1815 roku?",
    "options": [
      "Własny sejm",
      "Własny rząd",
      "Całkowicie niezależną politykę zagraniczną",
      "Własną armię",
      "Język polski jako urzędowy",
      "Prawo wyboru monarchy niezależnego od cara"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Królestwo miało własny sejm, rząd i armię oraz polski język urzędowy; politykę zagraniczną ustalano wspólnie z Rosją."
  },
  {
    "id": "R05_LIS_01",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "single_choice",
    "prompt": "Kto był królem Królestwa Polskiego po kongresie wiedeńskim?",
    "image": "r05_konstytucja_krolestwa.jpg",
    "options": [
      "Król Saksonii",
      "Król Prus",
      "Car Rosji",
      "Cesarz Austrii",
      "Król Francji"
    ],
    "answer": 2,
    "explanation": "Konstytucja łączyła koronę Królestwa Polskiego dziedzicznie z carem Rosji i jego następcami."
  },
  {
    "id": "R05_LIS_02",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "multi_select",
    "prompt": "Jakie gwarancje prawne wymieniono w artykułach konstytucji Królestwa Polskiego z 1815 roku?",
    "options": [
      "Wolność druku",
      "Nieograniczone prawo monarchy do karania bez sądu",
      "Zatrzymanie tylko w przypadkach przewidzianych prawem",
      "Niezwłoczna pisemna informacja o powodach zatrzymania",
      "Karanie wyłącznie na podstawie prawa i orzeczenia sądu",
      "Prawo Królestwa do samodzielnego zawierania traktatów"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Artykuły 16, 19, 20 i 23 dotyczą wolności druku, prawnych zasad zatrzymania, informowania o jego przyczynie i kary na podstawie prawa oraz wyroku sądu."
  },
  {
    "id": "R05_LIS_03",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "fill_in",
    "prompt": "Powstanie listopadowe wybuchło w nocy z __________ na __________ listopada 1830 roku.",
    "image": "r05_noc_listopadowa.jpg",
    "options": null,
    "answer": [
      "29",
      "30"
    ],
    "altAnswers": [
      [
        "29",
        "29."
      ],
      [
        "30",
        "30."
      ]
    ],
    "explanation": "Powstanie listopadowe rozpoczęło się w Warszawie w nocy z 29 na 30 listopada 1830 roku."
  },
  {
    "id": "R05_LIS_04",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "scenario",
    "prompt": "W Królestwie Polskim car coraz częściej łamie konstytucję. Powstają tajne organizacje, a na wieść o planach użycia polskiej armii przeciw ruchom europejskim wybucha bunt w Warszawie. O jakie powstanie chodzi?",
    "image": "r05_noc_listopadowa.jpg",
    "options": [
      "Powstanie styczniowe",
      "Insurekcja kościuszkowska",
      "Powstanie wielkopolskie",
      "Powstanie listopadowe"
    ],
    "answer": 3,
    "explanation": "Wymienione przyczyny doprowadziły do wybuchu powstania listopadowego w nocy z 29 na 30 listopada 1830 roku."
  },
  {
    "id": "R05_LIS_05",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "options": null,
    "left": [
      "Detronizacja cara przez powstańców",
      "Konstytucja Królestwa Polskiego",
      "III rozbiór i utrata niepodległości",
      "Wybuch powstania listopadowego"
    ],
    "right": [
      "1815",
      "1831",
      "1830",
      "1795"
    ],
    "answer": {
      "III rozbiór i utrata niepodległości": "1795",
      "Konstytucja Królestwa Polskiego": "1815",
      "Wybuch powstania listopadowego": "1830",
      "Detronizacja cara przez powstańców": "1831"
    },
    "explanation": "Rzeczpospolita upadła w 1795 roku; konstytucję Królestwa uchwalono w 1815, powstanie wybuchło w 1830, a detronizacja nastąpiła w styczniu 1831."
  },
  {
    "id": "R05_LIS_06",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "true_false",
    "prompt": "Car Rosji w pełni przestrzegał postanowień konstytucji Królestwa Polskiego z 1815 roku.",
    "options": null,
    "answer": false,
    "explanation": "Łamanie konstytucji przez cara i jego przedstawicieli było jedną z przyczyn rozwoju ruchu spiskowego."
  },
  {
    "id": "R05_LIS_07",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie była działaczem politycznym Wielkiej Emigracji: Joachim Lelewel, Adam Czartoryski, Wiktor Heltman, Fryderyk Chopin.",
    "options": null,
    "answer": "Fryderyk Chopin",
    "explanation": "Fryderyk Chopin był muzykiem Wielkiej Emigracji; Lelewel, Czartoryski i Heltman działali politycznie."
  },
  {
    "id": "R05_LIS_08",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "sort",
    "prompt": "Podziel przedstawicieli Wielkiej Emigracji na działaczy politycznych oraz twórców kultury.",
    "options": null,
    "items": [
      "Teofil Kwiatkowski",
      "Adam Czartoryski",
      "Fryderyk Chopin",
      "Wiktor Heltman",
      "Juliusz Słowacki",
      "Joachim Lelewel"
    ],
    "categories": [
      "Działacze polityczni",
      "Twórcy kultury"
    ],
    "answer": {
      "Działacze polityczni": [
        "Joachim Lelewel",
        "Adam Czartoryski",
        "Wiktor Heltman"
      ],
      "Twórcy kultury": [
        "Fryderyk Chopin",
        "Juliusz Słowacki",
        "Teofil Kwiatkowski"
      ]
    },
    "explanation": "Lelewel, Czartoryski i Heltman działali politycznie; Chopin tworzył muzykę, Słowacki literaturę, a Kwiatkowski był malarzem."
  },
  {
    "id": "R05_LIS_09",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "sequence",
    "prompt": "Ułóż etapy powstania listopadowego i jego następstwa we właściwej kolejności.",
    "options": null,
    "items": [
      "Wkroczenie dużej armii rosyjskiej",
      "Utrata autonomii po przegranej wojnie",
      "Wybuch powstania w Warszawie",
      "Ogłoszenie detronizacji cara"
    ],
    "answer": [
      "Wybuch powstania w Warszawie",
      "Ogłoszenie detronizacji cara",
      "Wkroczenie dużej armii rosyjskiej",
      "Utrata autonomii po przegranej wojnie"
    ],
    "explanation": "Powstanie zaczęło się w listopadzie 1830, cara zdetronizowano w styczniu 1831, później wkroczyła armia rosyjska, a po klęsce zniesiono autonomię."
  },
  {
    "id": "R05_LIS_10",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "single_choice",
    "prompt": "W którym kraju osiedliła się większość uczestników Wielkiej Emigracji po powstaniu listopadowym?",
    "image": "r05_wielka_emigracja.jpg",
    "options": [
      "W Szwajcarii",
      "We Francji",
      "W Anglii",
      "W Belgii",
      "W Stanach Zjednoczonych"
    ],
    "answer": 1,
    "explanation": "Większość spośród około 8–9 tysięcy uczestników Wielkiej Emigracji znalazła schronienie we Francji."
  },
  {
    "id": "R05_LIS_11",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "riddle",
    "prompt": "Jak nazywała się emigracja kilku tysięcy Polaków po upadku powstania listopadowego, ważna dla polityki i kultury polskiej?",
    "options": null,
    "answer": "Wielka Emigracja",
    "altAnswers": [
      "Wielka Emigracja",
      "Wielką Emigracją"
    ],
    "explanation": "Po przegranej wojnie z Rosją kraj opuściło około 8–9 tysięcy osób; ich działalność polityczna i artystyczna nadała emigracji nazwę Wielkiej."
  },
  {
    "id": "R05_LIS_12",
    "section": "Królestwo Polskie i powstanie listopadowe",
    "type": "multi_select",
    "prompt": "Które z poniższych zjawisk były następstwami klęski powstania listopadowego?",
    "options": [
      "Likwidacja sejmu i rządu",
      "Rozwiązanie własnej armii Królestwa",
      "Przywrócenie pełnej niezależności",
      "Wysoka kontrybucja",
      "Wprowadzenie guberni",
      "Wprowadzenie rosyjskiego kodeksu karnego"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Po przegranej wojnie zniesiono sejm, rząd i armię, nałożono kontrybucję, ustanowiono gubernie oraz wprowadzono rosyjskie przepisy karne."
  },
  {
    "id": "R05_STY_01",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "single_choice",
    "prompt": "Kiedy rozpoczęło się powstanie styczniowe?",
    "image": "r05_powstanie_styczniowe.jpg",
    "options": [
      "29 listopada 1830 roku",
      "Styczeń 1831 roku",
      "22 stycznia 1863 roku",
      "Lato 1864 roku",
      "Rok 1815"
    ],
    "answer": 2,
    "explanation": "Powstanie styczniowe wybuchło w Warszawie 22 stycznia 1863 roku."
  },
  {
    "id": "R05_STY_02",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "scenario",
    "prompt": "Carskie władze ogłaszają przymusowy pobór młodych Polaków do rosyjskiego wojska. Polscy patrioci chcą temu zapobiec i rozpoczynają walkę w 1863 roku. Jak nazywał się ten pobór?",
    "options": [
      "Branka",
      "Kontrybucja",
      "Gubernia",
      "Konsulat",
      "Detronizacja"
    ],
    "answer": 0,
    "explanation": "Bezpośrednią przyczyną wybuchu powstania styczniowego była branka, czyli przymusowy pobór polskiej młodzieży do rosyjskiej armii."
  },
  {
    "id": "R05_STY_03",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "multi_select",
    "prompt": "Na jakich terenach rozprzestrzeniło się powstanie styczniowe?",
    "options": [
      "Królestwo Polskie",
      "Litwa",
      "Saksonia",
      "Białoruś",
      "Ukraina",
      "Francja"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Powstanie objęło Królestwo Polskie oraz inne ziemie zaboru rosyjskiego: Litwę, Białoruś i Ukrainę."
  },
  {
    "id": "R05_STY_04",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "riddle",
    "prompt": "Kto wyróżnił się w organizowaniu konspiracyjnego państwa i armii podczas powstania styczniowego?",
    "image": "r05_powstanie_styczniowe.jpg",
    "options": null,
    "answer": "Romuald Traugutt",
    "altAnswers": [
      "Romuald Traugutt",
      "Traugutt",
      "Romualda Traugutta"
    ],
    "explanation": "Romuald Traugutt był przywódcą powstania styczniowego i organizatorem jego struktur."
  },
  {
    "id": "R05_STY_05",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "true_false",
    "prompt": "Powstańcy styczniowi walczyli przede wszystkim w regularnych bitwach wielkich armii, a nie metodami partyzanckimi.",
    "options": null,
    "answer": false,
    "explanation": "Nieliczni i słabo uzbrojeni powstańcy prowadzili walkę partyzancką, atakując niewielkimi oddziałami z zaskoczenia."
  },
  {
    "id": "R05_STY_06",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie było represją po upadku powstania styczniowego: zsyłki na Syberię, konfiskaty majątków, przymusowe wcielanie do armii rosyjskiej, przyznanie pełnej autonomii.",
    "options": null,
    "answer": "przyznanie pełnej autonomii",
    "explanation": "Po klęsce powstania stosowano zesłania, konfiskaty majątków i wcielanie do armii rosyjskiej; nie przyznano autonomii."
  },
  {
    "id": "R05_STY_07",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "match",
    "prompt": "Połącz dane o powstaniu styczniowym z ich znaczeniem.",
    "options": null,
    "left": [
      "Łączna liczba ochotników w oddziałach",
      "Liczebność powstańców w styczniu 1863",
      "Liczebność regularnej armii rosyjskiej",
      "Liczebność powstańców w sierpniu 1863"
    ],
    "right": [
      "ponad 300 000",
      "około 30 000",
      "około 4500",
      "około 200 000"
    ],
    "answer": {
      "Liczebność powstańców w styczniu 1863": "około 4500",
      "Liczebność powstańców w sierpniu 1863": "około 30 000",
      "Łączna liczba ochotników w oddziałach": "około 200 000",
      "Liczebność regularnej armii rosyjskiej": "ponad 300 000"
    },
    "explanation": "W styczniu siły powstańcze liczyły około 4500 osób, w sierpniu około 30 tysięcy; łącznie przewinęło się przez nie około 200 tysięcy ochotników, a armia rosyjska miała ponad 300 tysięcy żołnierzy."
  },
  {
    "id": "R05_STY_08",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "fill_in",
    "prompt": "Powstańcy styczniowi prowadzili przede wszystkim walkę __________, czyli atakowali małymi oddziałami z zaskoczenia.",
    "options": null,
    "answer": [
      "partyzancką"
    ],
    "altAnswers": [
      [
        "partyzancką",
        "partyzancka",
        "partyzanckiej"
      ]
    ],
    "explanation": "Siły polskie były słabo uzbrojone i znacznie mniejsze od regularnej armii rosyjskiej, dlatego stosowały walkę partyzancką."
  },
  {
    "id": "R05_STY_09",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "sort",
    "prompt": "Przyporządkuj działania do polityki rusyfikacyjnej lub polskiego oporu przeciw niej.",
    "image": "r05_tajne_nauczanie.jpg",
    "options": null,
    "items": [
      "Tajne komplety",
      "Obsadzanie urzędów Rosjanami",
      "Praca u podstaw",
      "Konfiskowanie majątków zakonnych",
      "Tajne biblioteki z polskimi książkami",
      "Wykładanie przedmiotów szkolnych po rosyjsku"
    ],
    "categories": [
      "Rusyfikacja i represje",
      "Polski opór i obrona kultury"
    ],
    "answer": {
      "Rusyfikacja i represje": [
        "Wykładanie przedmiotów szkolnych po rosyjsku",
        "Obsadzanie urzędów Rosjanami",
        "Konfiskowanie majątków zakonnych"
      ],
      "Polski opór i obrona kultury": [
        "Tajne komplety",
        "Tajne biblioteki z polskimi książkami",
        "Praca u podstaw"
      ]
    },
    "explanation": "Rusyfikacja obejmowała szkoły, administrację i Kościół; Polacy bronili kultury poprzez tajne nauczanie, biblioteki i pracę u podstaw."
  },
  {
    "id": "R05_STY_10",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z powstaniem styczniowym w kolejności.",
    "options": null,
    "items": [
      "Wzrost liczebności powstańców do około 30 000",
      "Ogłoszenie branki",
      "Schwytanie i stracenie głównych przywódców",
      "Wybuch powstania styczniowego"
    ],
    "answer": [
      "Ogłoszenie branki",
      "Wybuch powstania styczniowego",
      "Wzrost liczebności powstańców do około 30 000",
      "Schwytanie i stracenie głównych przywódców"
    ],
    "explanation": "Branka poprzedziła wybuch zrywu w styczniu 1863, liczebność powstańców wzrosła do sierpnia 1863, a przywódców stracono latem 1864."
  },
  {
    "id": "R05_STY_11",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "single_choice",
    "prompt": "Jakiego przedmiotu wolno było nauczać w języku innym niż rosyjski w szkołach objętych rusyfikacją?",
    "image": "r05_tajne_nauczanie.jpg",
    "options": [
      "Historii",
      "Geografii",
      "Matematyki",
      "Literatury",
      "Religii"
    ],
    "answer": 4,
    "explanation": "W zaborze rosyjskim po powstaniu styczniowym nauczanie wszystkich przedmiotów z wyjątkiem religii miało odbywać się po rosyjsku."
  },
  {
    "id": "R05_STY_12",
    "section": "Powstanie styczniowe i rusyfikacja",
    "type": "multi_select",
    "prompt": "Jak Polacy bronili swojej kultury przed represjami carskimi?",
    "options": [
      "Tajne nauczanie",
      "Tajne biblioteki",
      "Całkowita rezygnacja z języka polskiego",
      "Praca u podstaw",
      "Zakaz czytania polskich książek",
      "Stowarzyszenia ekonomiczne"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Polacy organizowali tajne komplety, tajne biblioteki, pracę u podstaw oraz stowarzyszenia ekonomiczne."
  },
  {
    "id": "R05_POL_01",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "single_choice",
    "prompt": "Jaką nazwę nadano Wielkiemu Księstwu Poznańskiemu w ramach pruskiej unifikacji?",
    "image": "r05_zabor_pruski_gospodarka.jpg",
    "options": [
      "Królestwo Poznańskie",
      "Prowincja Poznańska",
      "Rzeczpospolita Poznańska",
      "Galicja",
      "Królestwo Polskie"
    ],
    "answer": 1,
    "explanation": "Wielkie Księstwo Poznańskie przemianowano na Prowincję Poznańską, podkreślając jego przynależność do państwa pruskiego."
  },
  {
    "id": "R05_POL_02",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "multi_select",
    "prompt": "Które działania były elementami germanizacji?",
    "image": "r05_szkola_germanizacja.jpg",
    "options": [
      "Niemiecki jako język urzędowy i szkolny",
      "Polski jako jedyny język w urzędach",
      "Próby nauczania religii po niemiecku",
      "Ograniczenie używania polskiego na zebraniach",
      "Zakładanie polskich szkół przez władze jako podstawowej polityki",
      "Pierwszeństwo Niemców w zatrudnieniu w urzędach i szkołach"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "W zaborze pruskim narzucano język niemiecki w urzędach i szkołach, próbowano uczyć religii po niemiecku i ograniczano polski w życiu publicznym."
  },
  {
    "id": "R05_POL_03",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "true_false",
    "prompt": "W autonomicznej Galicji język polski mógł być językiem urzędowym.",
    "image": "r05_sejm_galicyjski.jpg",
    "options": null,
    "answer": true,
    "explanation": "W zaborze austriackim Galicja uzyskała autonomię, a polszczyzna stała się językiem urzędowym."
  },
  {
    "id": "R05_POL_04",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "match",
    "prompt": "Połącz zabór z charakterystyczną polityką wobec Polaków w drugiej połowie XIX wieku.",
    "options": null,
    "left": [
      "Zabór austriacki",
      "Zabór rosyjski",
      "Zabór pruski"
    ],
    "right": [
      "Germanizacja",
      "Autonomia Galicji",
      "Rusyfikacja"
    ],
    "answer": {
      "Zabór rosyjski": "Rusyfikacja",
      "Zabór pruski": "Germanizacja",
      "Zabór austriacki": "Autonomia Galicji"
    },
    "explanation": "Rosja narzucała język i kulturę rosyjską, Prusy niemiecką, natomiast Austria przyznawała Galicji coraz większą autonomię."
  },
  {
    "id": "R05_POL_05",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "scenario",
    "prompt": "Polski nauczyciel chce legalnie uczyć w polskiej szkole, a rodzina planuje wyższe studia prowadzone po polsku. W którym zaborze możliwości te były w drugiej połowie XIX wieku najszersze?",
    "image": "r05_sejm_galicyjski.jpg",
    "options": [
      "Rosyjskim",
      "Pruskim",
      "Austriackim",
      "We wszystkich trzech w takim samym stopniu"
    ],
    "answer": 2,
    "explanation": "Autonomia galicyjska pozwalała na działalność polskich szkół i rozwój polskojęzycznego szkolnictwa wyższego w zaborze austriackim."
  },
  {
    "id": "R05_POL_06",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "fill_in",
    "prompt": "Władze pruskie prowadziły politykę __________, a władze rosyjskie politykę __________.",
    "options": null,
    "answer": [
      "germanizacji",
      "rusyfikacji"
    ],
    "altAnswers": [
      [
        "germanizacji",
        "germanizacja"
      ],
      [
        "rusyfikacji",
        "rusyfikacja"
      ]
    ],
    "explanation": "Germanizacja oznaczała narzucanie niemieckiego języka i wzorów, a rusyfikacja rosyjskiego języka i kultury."
  },
  {
    "id": "R05_POL_07",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie niezgodne z autonomią galicyjską: polskie szkoły, język polski w urzędach, sejm krajowy, obowiązkowe nauczanie większości przedmiotów po rosyjsku.",
    "options": null,
    "answer": "obowiązkowe nauczanie większości przedmiotów po rosyjsku",
    "explanation": "W autonomicznej Galicji funkcjonowały polskie urzędy, szkoły i sejm krajowy; obowiązek nauczania po rosyjsku wiązał się z rusyfikacją w zaborze rosyjskim."
  },
  {
    "id": "R05_POL_08",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "sort",
    "prompt": "Rozdziel działania władz pruskich i działania Polaków w obronie polskości.",
    "image": "r05_zabor_pruski_gospodarka.jpg",
    "options": null,
    "items": [
      "Tworzenie polskich bibliotek i towarzystw kulturalnych",
      "Zakaz używania polskiego na publicznych zebraniach",
      "Zakładanie towarzystw kredytowych",
      "Niemiecki język urzędowy",
      "Rozwój fabryk maszyn i narzędzi",
      "Utrudnianie Polakom zakupu maszyn i uzyskania kredytów"
    ],
    "categories": [
      "Germanizacja prowadzona przez Prusy",
      "Polska obrona gospodarcza i kulturowa"
    ],
    "answer": {
      "Germanizacja prowadzona przez Prusy": [
        "Zakaz używania polskiego na publicznych zebraniach",
        "Niemiecki język urzędowy",
        "Utrudnianie Polakom zakupu maszyn i uzyskania kredytów"
      ],
      "Polska obrona gospodarcza i kulturowa": [
        "Zakładanie towarzystw kredytowych",
        "Rozwój fabryk maszyn i narzędzi",
        "Tworzenie polskich bibliotek i towarzystw kulturalnych"
      ]
    },
    "explanation": "Prusy ograniczały polskość i działalność gospodarczą; Polacy wspierali się przez spółki, fabryki, biblioteki i towarzystwa."
  },
  {
    "id": "R05_POL_09",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "riddle",
    "prompt": "Jak nazywał się organ przedstawicielski, w którym mogli zasiadać Polacy dzięki autonomii Galicji?",
    "image": "r05_sejm_galicyjski.jpg",
    "options": null,
    "answer": "sejm krajowy",
    "altAnswers": [
      "sejm krajowy",
      "Sejm Krajowy",
      "sejm galicyjski"
    ],
    "explanation": "Polskie ziemiaństwo mogło zasiadać w galicyjskim sejmie krajowym i wysyłać przedstawicieli do parlamentu w Wiedniu."
  },
  {
    "id": "R05_POL_10",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "scenario",
    "prompt": "Polski polityk z zaboru austriackiego uczestniczy w życiu parlamentarnym. Może zasiadać w sejmie krajowym, a także wysłać przedstawiciela do parlamentu ogólnopaństwowego. W którym mieście ten parlament obradował?",
    "image": "r05_sejm_galicyjski.jpg",
    "options": [
      "Warszawa",
      "Poznań",
      "Kraków",
      "Wiedeń",
      "Lwów"
    ],
    "answer": 3,
    "explanation": "Przedstawiciele Galicji mogli uczestniczyć w parlamencie ogólnopaństwowym w Wiedniu, stolicy cesarstwa."
  },
  {
    "id": "R05_POL_11",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "single_choice",
    "prompt": "Jakie instytucje Polacy zakładali w zaborze pruskim, by ułatwić sobie zdobywanie środków na gospodarstwa i przedsiębiorstwa?",
    "image": "r05_zabor_pruski_gospodarka.jpg",
    "options": [
      "Konsulaty",
      "Gubernie",
      "Armie powstańcze",
      "Trybunały cesarskie",
      "Towarzystwa kredytowe"
    ],
    "answer": 4,
    "explanation": "Polacy zakładali m.in. towarzystwa kredytowe, wspierające rozwój gospodarstw i przedsiębiorstw w warunkach germanizacji."
  },
  {
    "id": "R05_POL_12",
    "section": "Germanizacja, autonomia i obrona polskości",
    "type": "true_false",
    "prompt": "Praca organiczna polegała m.in. na wspieraniu polskiego rolnictwa, rzemiosła i handlu przez edukację oraz wspólne inicjatywy gospodarcze.",
    "options": null,
    "answer": true,
    "explanation": "Praca organiczna obejmowała nowoczesne gospodarowanie, przedsiębiorczość i tworzenie instytucji wspierających Polaków zamiast walki zbrojnej."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zdania zgodne jednocześnie z opisem Kodeksu Napoleona i decyzji kongresu wiedeńskiego.",
    "options": [
      "Kodeks Napoleona uznawał równość wobec prawa",
      "Kongres wiedeński utrzymał wszystkie nowe państwa Napoleona",
      "Kongres wiedeński przywracał obalonych władców",
      "Kodeks Napoleona odrzucał ochronę własności prywatnej",
      "Kongres wiedeński miał zapobiegać dominacji jednego państwa"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Kodeks podkreślał równość i ochronę własności; kongres anulował reformy w państwach zależnych od Napoleona i przywrócił monarchów."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz stanowisko lub funkcję z osobą albo określeniem władcy.",
    "options": null,
    "left": [
      "Reprezentant króla w Królestwie Polskim",
      "Pierwszy konsul Francji",
      "Król Królestwa Polskiego po 1815",
      "Władca Księstwa Warszawskiego"
    ],
    "right": [
      "Król Saksonii",
      "Polski namiestnik",
      "Napoleon Bonaparte",
      "Car Rosji"
    ],
    "answer": {
      "Pierwszy konsul Francji": "Napoleon Bonaparte",
      "Władca Księstwa Warszawskiego": "Król Saksonii",
      "Król Królestwa Polskiego po 1815": "Car Rosji",
      "Reprezentant króla w Królestwie Polskim": "Polski namiestnik"
    },
    "explanation": "Napoleon był pierwszym konsulem, król Saksonii rządził Księstwem Warszawskim, a car Rosji był królem Królestwa Polskiego reprezentowanym przez namiestnika."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż sześć wydarzeń z całego działu chronologicznie.",
    "options": null,
    "items": [
      "Wybuch powstania listopadowego",
      "Utworzenie Legionów Polskich we Włoszech",
      "Wybuch powstania styczniowego",
      "Kongres wiedeński i likwidacja Księstwa",
      "Zamach stanu Napoleona",
      "Powstanie Księstwa Warszawskiego"
    ],
    "answer": [
      "Utworzenie Legionów Polskich we Włoszech",
      "Zamach stanu Napoleona",
      "Powstanie Księstwa Warszawskiego",
      "Kongres wiedeński i likwidacja Księstwa",
      "Wybuch powstania listopadowego",
      "Wybuch powstania styczniowego"
    ],
    "explanation": "Poprawny porządek wyznaczają lata 1797, 1799, 1807, 1815, 1830 i 1863."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Z art. 8 konstytucji z 1815 roku wynika, że polityka zagraniczna Rosji i Królestwa Polskiego miała być __________.",
    "image": "r05_konstytucja_krolestwa.jpg",
    "options": null,
    "answer": [
      "wspólna"
    ],
    "altAnswers": [
      [
        "wspólna",
        "wspólna dla obu państw",
        "wspólna z Rosją"
      ]
    ],
    "explanation": "Artykuł 8 mówi o wspólnych stosunkach polityki zewnętrznej Cesarstwa Rosyjskiego i Królestwa Polskiego."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Zgodnie z art. 9 konstytucji Królestwa Polskiego z 1815 roku kto decydował o udziale Królestwa w wojnach Rosji?",
    "image": "r05_konstytucja_krolestwa.jpg",
    "options": [
      "Sejm Królestwa",
      "Rząd Królestwa",
      "Dowódca armii Królestwa",
      "Panujący monarcha",
      "Namiestnik wybierany przez sejm"
    ],
    "answer": 3,
    "explanation": "Artykuł 9 przyznawał wyłącznie panującemu prawo rozstrzygania o uczestnictwie Królestwa w wojnach Rosji."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż kraj, który nie był częstym celem wyjazdu uczestników Wielkiej Emigracji: Francja, Belgia, Szwajcaria, Hiszpania.",
    "options": null,
    "answer": "Hiszpania",
    "explanation": "Po 1831 roku emigranci polityczni z Polski udawali się między innymi do Francji, Belgii, Anglii, Szwajcarii i Stanów Zjednoczonych."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W Królestwie Polskim zatrzymano obywatela. Które działanie było wymagane wprost przez art. 20 konstytucji z 1815 roku?",
    "image": "r05_konstytucja_krolestwa.jpg",
    "options": [
      "Odesłanie zatrzymanego na Syberię",
      "Odebranie zatrzymanemu majątku",
      "Niezwłoczne podanie zatrzymanemu na piśmie powodów zatrzymania",
      "Przekazanie sprawy królowi Saksonii"
    ],
    "answer": 2,
    "explanation": "Artykuł 20 zobowiązywał do niezwłocznego pisemnego poinformowania zatrzymanego o przyczynach zatrzymania."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które represje wobec uczestników powstań wymieniono zarówno po powstaniu listopadowym, jak i po styczniowym?",
    "options": [
      "Zapewnienie niezależnej polityki zagranicznej",
      "Konfiskaty majątków",
      "Przyznanie pełnej autonomii",
      "Zesłania na Syberię",
      "Odtworzenie Księstwa Warszawskiego"
    ],
    "answer": [
      1,
      3
    ],
    "explanation": "Po obu klęskach stosowano konfiskaty majątków i wywózki na Syberię; pozostałe odpowiedzi nie stanowią wspólnego rodzaju represji w opisie obu powstań."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz liczbę z represją lub stratą po powstaniu styczniowym.",
    "options": null,
    "left": [
      "Osoby pozbawione majątków",
      "Osoby zesłane na Syberię",
      "Powstańcy polegli w walkach",
      "Osoby stracone w egzekucjach"
    ],
    "right": [
      "38 000",
      "około 30 000",
      "1660",
      "660"
    ],
    "answer": {
      "Powstańcy polegli w walkach": "około 30 000",
      "Osoby stracone w egzekucjach": "660",
      "Osoby zesłane na Syberię": "38 000",
      "Osoby pozbawione majątków": "1660"
    },
    "explanation": "W następstwie powstania styczniowego około 30 tysięcy osób poległo, 660 stracono, 38 tysięcy zesłano, a 1660 pozbawiono majątków."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po przegranej wojnie 1831 roku Królestwo Polskie zachowało swój sejm, rząd i odrębną armię.",
    "options": null,
    "answer": false,
    "explanation": "Po klęsce powstania listopadowego zlikwidowano polski sejm, rząd i armię, odbierając Królestwu autonomię."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozdziel zasady Kodeksu Napoleona i działania przywracające stary porządek po kongresie wiedeńskim.",
    "image": "r05_kodeks_napoleona.jpg",
    "options": null,
    "items": [
      "Przywrócenie obalonych monarchów",
      "Równouprawnienie wszystkich wyznań",
      "Likwidacja państw utworzonych przez Napoleona",
      "Równość wobec prawa",
      "Władza oparta na uprzywilejowanej arystokracji i duchowieństwie",
      "Nienaruszalność własności prywatnej"
    ],
    "categories": [
      "Kodeks Napoleona",
      "Ład kongresu wiedeńskiego"
    ],
    "answer": {
      "Kodeks Napoleona": [
        "Równość wobec prawa",
        "Nienaruszalność własności prywatnej",
        "Równouprawnienie wszystkich wyznań"
      ],
      "Ład kongresu wiedeńskiego": [
        "Przywrócenie obalonych monarchów",
        "Likwidacja państw utworzonych przez Napoleona",
        "Władza oparta na uprzywilejowanej arystokracji i duchowieństwie"
      ]
    },
    "explanation": "Kodeks Napoleona zachowywał część zdobyczy rewolucji, natomiast kongres wiedeński przywracał stary porządek."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Który malarz znalazł się wśród przedstawicieli Wielkiej Emigracji obok muzyków i poetów?",
    "options": null,
    "answer": "Teofil Kwiatkowski",
    "altAnswers": [
      "Teofil Kwiatkowski",
      "Kwiatkowski",
      "Teofila Kwiatkowskiego"
    ],
    "explanation": "Teofil Kwiatkowski był malarzem tworzącym na emigracji po powstaniu listopadowym."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po klęsce powstania listopadowego polski artysta wyjeżdża z kraju. Na emigracji nie prowadzi działalności politycznej, ale rozsławia kulturę polską swoją muzyką. O kogo chodzi?",
    "image": "r05_wielka_emigracja.jpg",
    "options": [
      "Fryderyk Chopin",
      "Adam Mickiewicz",
      "Juliusz Słowacki",
      "Cyprian Kamil Norwid",
      "Teofil Kwiatkowski"
    ],
    "answer": 0,
    "explanation": "Fryderyk Chopin był wybitnym muzykiem i przedstawicielem Wielkiej Emigracji."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Z ziem Księstwa Warszawskiego utworzono m.in. __________ pod zwierzchnictwem Rosji i __________ pod zwierzchnictwem Prus.",
    "image": "r05_ziemie_polskie_1815_mapa.jpg",
    "options": null,
    "answer": [
      "Królestwo Polskie",
      "Wielkie Księstwo Poznańskie"
    ],
    "altAnswers": [
      [
        "Królestwo Polskie",
        "Królestwo Kongresowe"
      ],
      [
        "Wielkie Księstwo Poznańskie",
        "Wielkie Księstwo Poznanskie"
      ]
    ],
    "explanation": "Królestwo Polskie podlegało Rosji, Wielkie Księstwo Poznańskie Prusom, a Rzeczpospolita Krakowska trzem zaborcom."
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W której bitwie powstania listopadowego zwyciężyły wojska rosyjskie?",
    "options": [
      "Wawer",
      "Iganie",
      "Stoczek",
      "Dębe Wielkie",
      "Ostrołęka"
    ],
    "answer": 4,
    "explanation": "Pod Ostrołęką zwyciężyli Rosjanie, natomiast pod Wawrem, Dębem Wielkim, Iganiami i Stoczkiem zwyciężyli Polacy."
  },
  {
    "id": "R05_HARD_16",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Z jakiej powieści Stefana Żeromskiego pochodzi opis rewizji na stancjach polskich uczniów?",
    "options": null,
    "answer": "Syzyfowe prace",
    "altAnswers": [
      "Syzyfowe prace",
      "Syzyfowych prac"
    ],
    "explanation": "Fragment Syzyfowych prac ukazuje kontrolę uczniów i zakaz posiadania książek drukowanych po polsku."
  },
  {
    "id": "R05_HARD_17",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Do obrony czego nawołuje Maria Konopnicka we fragmencie „Roty”?",
    "options": [
      "Ojczystej ziemi",
      "Języka polskiego",
      "Tronu Napoleona",
      "Polskości wobec germanizacji",
      "Władzy cara Rosji"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "„Rota” nawołuje do obrony ojczystej ziemi, języka i polskości przed germanizacją."
  }
];

const KID_PROMPTS = {
  "R05_NAP_05": "Podaj rok przejęcia władzy przez Napoleona i nazwę jego nowego rządu.",
  "R05_NAP_07": "Jak nazywało się polskie państwo utworzone w 1807 roku dzięki Napoleonowi?",
  "R05_WIE_03": "Dopasuj trzy polskie państwa po 1815 roku do zaborców, którzy nimi rządzili.",
  "R05_WIE_07": "Podziel działania na czasy Napoleona i czasy po kongresie wiedeńskim.",
  "R05_LIS_02": "Które prawa obywateli chroniła konstytucja Królestwa Polskiego?",
  "R05_LIS_08": "Kto działał w polityce, a kto zajmował się kulturą na emigracji?",
  "R05_STY_07": "Dopasuj liczby żołnierzy do opisów powstania styczniowego.",
  "R05_STY_09": "Co robili zaborcy, a jak bronili się Polacy?",
  "R05_POL_05": "W którym zaborze można było swobodniej uczyć się po polsku?",
  "R05_POL_08": "Które działania należały do Prus, a które do Polaków?",
  "R05_HARD_07": "Co władze musiały napisać osobie zatrzymanej do aresztu?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Wiek XIX - Europa napoleońska i ziemie polskie pod zaborami",
  "icon": "📜",
  "sectionOrder": [
    "Epoka napoleońska",
    "Kongres wiedeński i nowy ład",
    "Królestwo Polskie i powstanie listopadowe",
    "Powstanie styczniowe i rusyfikacja",
    "Germanizacja, autonomia i obrona polskości"
  ],
  "sectionIcons": {
    "Epoka napoleońska": "🎖️",
    "Kongres wiedeński i nowy ład": "🏛️",
    "Królestwo Polskie i powstanie listopadowe": "🇵🇱",
    "Powstanie styczniowe i rusyfikacja": "🌲",
    "Germanizacja, autonomia i obrona polskości": "📚"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
