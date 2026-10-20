// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KONG = Kongres wiedeński i rewolucja przemysłowa
//   LIST = Ziemie polskie i powstanie listopadowe
//   EMIG = Wielka Emigracja i Wiosna Ludów
//   STYC = Powstanie styczniowe i przemiany społeczne
//   SWIA = Zjednoczenie państw i kolonializm
//   ZABO = Polacy pod zaborami i rewolucja 1905 roku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_KONG_01",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "single_choice",
    "prompt": "W których latach obradował kongres wiedeński?",
    "options": [
      "1814-1815",
      "1804-1805",
      "1820-1821",
      "1830-1831",
      "1848-1849",
      "1863-1864"
    ],
    "answer": 0,
    "image": "r04_kongres_wiedenski.jpg",
    "explanation": "Kongres trwał od września 1814 do czerwca 1815 roku i ustalał nowy porządek europejski."
  },
  {
    "id": "R04_KONG_02",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "match",
    "prompt": "Połącz zasady kongresu wiedeńskiego z ich znaczeniem.",
    "options": null,
    "left": [
      "Równowaga europejska",
      "Legitymizm",
      "Restauracja"
    ],
    "right": [
      "Przywrócenie porządku politycznego sprzed 1789 roku",
      "Władza monarchy jest prawowita z nadania boskiego",
      "Żadne mocarstwo nie powinno zdobyć przewagi na kontynencie"
    ],
    "answer": {
      "Równowaga europejska": "Żadne mocarstwo nie powinno zdobyć przewagi na kontynencie",
      "Legitymizm": "Władza monarchy jest prawowita z nadania boskiego",
      "Restauracja": "Przywrócenie porządku politycznego sprzed 1789 roku"
    },
    "explanation": "Równowaga ograniczała dominację jednego państwa, legitymizm uzasadniał prawa dynastii, a restauracja oznaczała powrót dawnego ładu."
  },
  {
    "id": "R04_KONG_03",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "multi_select",
    "prompt": "Wybierz postanowienia kongresu wiedeńskiego.",
    "options": [
      "Utworzenie Związku Niemieckiego",
      "Przywrócenie Burbonów na tron Francji",
      "Likwidacja Księstwa Warszawskiego",
      "Utworzenie II Rzeszy Niemieckiej",
      "Utworzenie Królestwa Polskiego",
      "Rozwiązanie Świętego Przymierza"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Kongres utworzył Związek Niemiecki i Królestwo Polskie, zniósł Księstwo Warszawskie oraz przywrócił dynastię Burbonów we Francji."
  },
  {
    "id": "R04_KONG_04",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "true_false",
    "prompt": "Wielka Brytania była jednym z trzech państw, które podpisały akt Świętego Przymierza 26 września 1815 roku.",
    "options": null,
    "answer": false,
    "explanation": "Święte Przymierze podpisały Austria, Prusy i Rosja. Wielka Brytania do niego nie przystąpiła."
  },
  {
    "id": "R04_KONG_05",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "fill_in",
    "prompt": "Akt Świętego Przymierza zawarto w roku __________.",
    "options": null,
    "answer": [
      "1815"
    ],
    "image": "r04_kongres_wiedenski.jpg",
    "explanation": "Akt podpisano 26 września 1815 roku. Sygnatariusze zobowiązali się do wzajemnej pomocy przeciw wystąpieniom przeciw prawowitej władzy."
  },
  {
    "id": "R04_KONG_06",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "riddle",
    "prompt": "Jak nazywano klasę społeczną robotników utrzymujących się z pracy najemnej?",
    "options": null,
    "answer": "proletariat",
    "altAnswers": [
      "proletariat",
      "proletariatem"
    ],
    "explanation": "Podczas rewolucji przemysłowej robotnicy (proletariat) żyli z pracy najemnej, a kapitaliści byli właścicielami środków produkcji."
  },
  {
    "id": "R04_KONG_07",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie podpisało aktu Świętego Przymierza w 1815 roku: Austria, Rosja, Wielka Brytania, Prusy.",
    "options": null,
    "answer": "Wielka Brytania",
    "explanation": "Akt podpisały Austria, Rosja i Prusy; Wielka Brytania pozostała poza Świętym Przymierzem."
  },
  {
    "id": "R04_KONG_08",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "scenario",
    "prompt": "W pierwszej połowie XIX wieku właściciel zakładu zastępuje ręczną produkcję w manufakturze pracą z użyciem maszyn i zatrudnia robotników najemnych. Jaką przemianę ilustruje ta sytuacja?",
    "options": [
      "Przejście od manufaktury do fabryki",
      "Restaurację monarchii",
      "Powrót do pańszczyzny",
      "Likwidację przemysłu"
    ],
    "answer": 0,
    "image": "r04_maszyna_parowa.jpg",
    "explanation": "Rewolucja przemysłowa oznaczała przejście od produkcji manufakturowej do fabrycznej z użyciem maszyn."
  },
  {
    "id": "R04_KONG_09",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "sort",
    "prompt": "Rozdziel opisy na dwie grupy społeczne rozwijającego się kapitalizmu.",
    "options": null,
    "items": [
      "Właściciele maszyn i budynków fabrycznych",
      "Osoby utrzymujące się z pracy najemnej",
      "Właściciele środków produkcji",
      "Osoby niemające własnych fabryk"
    ],
    "categories": [
      "Kapitaliści",
      "Robotnicy"
    ],
    "answer": {
      "Kapitaliści": [
        "Właściciele maszyn i budynków fabrycznych",
        "Właściciele środków produkcji"
      ],
      "Robotnicy": [
        "Osoby utrzymujące się z pracy najemnej",
        "Osoby niemające własnych fabryk"
      ]
    },
    "explanation": "Kapitaliści dysponowali środkami produkcji, podczas gdy robotnicy sprzedawali swoją pracę za wynagrodzenie."
  },
  {
    "id": "R04_KONG_10",
    "section": "Kongres wiedeński i rewolucja przemysłowa",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z postępem technicznym w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Maszyna parowa Jamesa Watta (1782)",
      "Pierwsza pasażerska linia kolejowa Stephensona (1825)",
      "Mechaniczna przędzarka Jamesa Hargreavesa (1765)",
      "Lokomotywa parowa Richarda Trevithicka (1804)"
    ],
    "answer": [
      "Mechaniczna przędzarka Jamesa Hargreavesa (1765)",
      "Maszyna parowa Jamesa Watta (1782)",
      "Lokomotywa parowa Richarda Trevithicka (1804)",
      "Pierwsza pasażerska linia kolejowa Stephensona (1825)"
    ],
    "image": "r04_maszyna_parowa.jpg",
    "explanation": "Kolejne etapy rozwoju techniki przypadały na lata 1765, 1782, 1804 i 1825."
  },
  {
    "id": "R04_LIST_01",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "single_choice",
    "prompt": "Z którym państwem Królestwo Polskie zostało połączone unią personalną w 1815 roku?",
    "options": [
      "Austrią",
      "Prusami",
      "Rosją",
      "Francją",
      "Szwecją",
      "Wielką Brytanią"
    ],
    "answer": 2,
    "image": "r04_mapa_ziem_polskich_1815.jpg",
    "explanation": "Po kongresie wiedeńskim Królestwo Polskie było połączone unią personalną z Rosją. Car był jednocześnie królem Polski."
  },
  {
    "id": "R04_LIST_02",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "multi_select",
    "prompt": "Wskaż jednostki polityczne powstałe na ziemiach polskich w wyniku postanowień kongresu wiedeńskiego.",
    "options": [
      "Królestwo Polskie",
      "Wielkie Księstwo Poznańskie",
      "Wolne Miasto Kraków",
      "Księstwo Warszawskie",
      "II Rzeczpospolita"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_mapa_ziem_polskich_1815.jpg",
    "explanation": "W 1815 roku powstały Królestwo Polskie, Wielkie Księstwo Poznańskie oraz neutralne Wolne Miasto Kraków. Księstwo Warszawskie zlikwidowano."
  },
  {
    "id": "R04_LIST_03",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "match",
    "prompt": "Połącz instytucje Królestwa Polskiego z ich zadaniami.",
    "options": null,
    "left": [
      "Rada Stanu",
      "Rada Administracyjna",
      "Sejm",
      "Namiestnik"
    ],
    "right": [
      "Zastępowanie króla podczas jego nieobecności",
      "Uchwalanie budżetu i stanowienie prawa cywilnego",
      "Pełnienie funkcji gabinetu ministrów",
      "Przygotowywanie projektów praw i opiniowanie pracy rządu"
    ],
    "answer": {
      "Rada Stanu": "Przygotowywanie projektów praw i opiniowanie pracy rządu",
      "Rada Administracyjna": "Pełnienie funkcji gabinetu ministrów",
      "Sejm": "Uchwalanie budżetu i stanowienie prawa cywilnego",
      "Namiestnik": "Zastępowanie króla podczas jego nieobecności"
    },
    "explanation": "Konstytucja z 1815 roku rozdzielała kompetencje między sejm oraz organy doradcze i wykonawcze podległe królowi."
  },
  {
    "id": "R04_LIST_04",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "true_false",
    "prompt": "Konstytucja Królestwa Polskiego z 1815 roku uznawała język polski za język urzędowy.",
    "options": null,
    "answer": true,
    "explanation": "Dokument przewidywał język polski jako urzędowy; w korespondencji z królem dopuszczano język francuski."
  },
  {
    "id": "R04_LIST_05",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "fill_in",
    "prompt": "Uniwersytet Warszawski utworzono w roku __________.",
    "options": null,
    "answer": [
      "1816"
    ],
    "explanation": "Założenie Uniwersytetu Warszawskiego w 1816 roku było jednym z osiągnięć okresu konstytucyjnego Królestwa Polskiego."
  },
  {
    "id": "R04_LIST_06",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "scenario",
    "prompt": "Jest noc z 29 na 30 listopada 1830 roku. Grupa spiskowców i mieszkańców Warszawy występuje przeciw obecności wojsk rosyjskich, a wielki książę Konstanty opuszcza miasto. Jakie powstanie właśnie się rozpoczyna?",
    "options": [
      "Powstanie styczniowe",
      "Powstanie listopadowe",
      "Powstanie krakowskie",
      "Powstanie kościuszkowskie"
    ],
    "answer": 1,
    "image": "r04_belweder_1830.jpg",
    "explanation": "Noc listopadowa 1830 roku rozpoczęła powstanie listopadowe przeciw rosyjskiej dominacji."
  },
  {
    "id": "R04_LIST_07",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące Królestwa Polskiego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Noc listopadowa (1830)",
      "Klęska pod Ostrołęką (maj 1831)",
      "Nadanie konstytucji Królestwu Polskiemu (1815)",
      "Detronizacja cara Mikołaja I przez sejm (styczeń 1831)",
      "Zdobycie Warszawy przez Rosjan (wrzesień 1831)"
    ],
    "answer": [
      "Nadanie konstytucji Królestwu Polskiemu (1815)",
      "Noc listopadowa (1830)",
      "Detronizacja cara Mikołaja I przez sejm (styczeń 1831)",
      "Klęska pod Ostrołęką (maj 1831)",
      "Zdobycie Warszawy przez Rosjan (wrzesień 1831)"
    ],
    "explanation": "Wydarzenia prowadziły od ustanowienia autonomii Królestwa przez wybuch powstania do jego klęski."
  },
  {
    "id": "R04_LIST_08",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie dowodziła polskimi wojskami w powstaniu listopadowym: Józef Chłopicki, Jan Skrzynecki, Maciej Rybiński, Otto von Bismarck.",
    "options": null,
    "answer": "Otto von Bismarck",
    "explanation": "Bismarck był kanclerzem pruskim i uczestnikiem zjednoczenia Niemiec; pozostali dowodzili wojskami w powstaniu listopadowym."
  },
  {
    "id": "R04_LIST_09",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "riddle",
    "prompt": "Jak nazywał się akt z 1832 roku, który zastąpił konstytucję Królestwa Polskiego?",
    "options": null,
    "answer": "Statut Organiczny",
    "altAnswers": [
      "Statut Organiczny",
      "Statut Organiczny Królestwa Polskiego"
    ],
    "explanation": "Statut Organiczny Królestwa Polskiego z 1832 roku zniósł odrębność państwową Królestwa i złączył je z Rosją."
  },
  {
    "id": "R04_LIST_10",
    "section": "Ziemie polskie i powstanie listopadowe",
    "type": "single_choice",
    "prompt": "W której bitwie 26 maja 1831 roku wojska polskie poniosły klęskę?",
    "options": [
      "Pod Stoczkiem",
      "Pod Iganiami",
      "Pod Ostrołęką",
      "Pod Wawrem",
      "Pod Dębem Wielkim",
      "Pod Magentą"
    ],
    "answer": 2,
    "explanation": "26 maja 1831 roku Polacy przegrali bitwę pod Ostrołęką, co pogorszyło sytuację powstania listopadowego."
  },
  {
    "id": "R04_EMIG_01",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "single_choice",
    "prompt": "W którym kraju osiedliła się największa grupa uczestników Wielkiej Emigracji?",
    "options": [
      "W Hiszpanii",
      "We Francji",
      "W Rosji",
      "W Danii",
      "W Portugalii",
      "W Grecji"
    ],
    "answer": 1,
    "image": "r04_emigranci_polscy.jpg",
    "explanation": "Po klęsce powstania listopadowego emigranci z ziem polskich osiedlali się głównie we Francji, a także w Belgii i Wielkiej Brytanii."
  },
  {
    "id": "R04_EMIG_02",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "match",
    "prompt": "Połącz organizacje polityczne Wielkiej Emigracji z ich działaczami.",
    "options": null,
    "left": [
      "Hotel Lambert",
      "Komitet Narodowy",
      "Towarzystwo Demokratyczne Polskie",
      "Związek Chłopski"
    ],
    "right": [
      "Piotr Ściegienny",
      "Wiktor Heltman",
      "Joachim Lelewel",
      "Adam Czartoryski"
    ],
    "answer": {
      "Hotel Lambert": "Adam Czartoryski",
      "Komitet Narodowy": "Joachim Lelewel",
      "Towarzystwo Demokratyczne Polskie": "Wiktor Heltman",
      "Związek Chłopski": "Piotr Ściegienny"
    },
    "explanation": "Hotel Lambert skupiał się wokół Czartoryskiego, Komitet Narodowy stworzył Lelewel, w TDP działał Heltman, a Związek Chłopski założył Ściegienny."
  },
  {
    "id": "R04_EMIG_03",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "multi_select",
    "prompt": "Wskaż obszary, na których doszło do wystąpień podczas Wiosny Ludów w latach 1848–1849.",
    "options": [
      "Francja",
      "Cesarstwo Austriackie",
      "Państwa niemieckie",
      "Państwa włoskie",
      "Kanada",
      "Japonia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_barykady_1848.jpg",
    "explanation": "Wiosna Ludów przyniosła rewolucje we Francji, Cesarstwie Austriackim, krajach niemieckich i włoskich."
  },
  {
    "id": "R04_EMIG_04",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "true_false",
    "prompt": "Powstanie belgijskie z 1830 roku zakończyło się sukcesem i oderwaniem Belgii od Holandii.",
    "options": null,
    "answer": true,
    "explanation": "Belgia uzyskała niepodległość po wystąpieniu z 1830 roku, podważając decyzje kongresu wiedeńskiego."
  },
  {
    "id": "R04_EMIG_05",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "fill_in",
    "prompt": "Wiosna Ludów w Europie trwała w latach __________-__________.",
    "options": null,
    "answer": [
      "1848",
      "1849"
    ],
    "explanation": "Wiosna Ludów to fala rewolucji i wystąpień społecznych w Europie w latach 1848–1849."
  },
  {
    "id": "R04_EMIG_06",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "riddle",
    "prompt": "Jak nazywał się emigracyjny obóz polityczny skupiony wokół księcia Adama Czartoryskiego?",
    "options": null,
    "answer": "Hotel Lambert",
    "altAnswers": [
      "Hotel Lambert",
      "obóz Hotel Lambert"
    ],
    "explanation": "Obóz Hotel Lambert stawiał na dyplomację Anglii i Francji; po odzyskaniu niepodległości widział Polskę jako monarchię konstytucyjną."
  },
  {
    "id": "R04_EMIG_07",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "scenario",
    "prompt": "W Galicji w 1846 roku chłopi napadają na dwory szlacheckie. Ich przywódcą zostaje Jakub Szela. Jak określa się te wydarzenia?",
    "options": [
      "Rabacja galicyjska",
      "Powstanie styczniowe",
      "Noc listopadowa",
      "Rewolucja lipcowa"
    ],
    "answer": 0,
    "image": "r04_pochod_krakowski_1846.jpg",
    "explanation": "Rabacja galicyjska była krwawym wystąpieniem chłopów przeciw szlachcie; ruchowi przewodził Jakub Szela."
  },
  {
    "id": "R04_EMIG_08",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "sequence",
    "prompt": "Ułóż wystąpienia przeciw porządkowi wiedeńskiemu od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Powstanie w Belgii (1830)",
      "Wybuch Wiosny Ludów (1848)",
      "Powstanie dekabrystów w Rosji (1825)",
      "Powstanie krakowskie (1846)"
    ],
    "answer": [
      "Powstanie dekabrystów w Rosji (1825)",
      "Powstanie w Belgii (1830)",
      "Powstanie krakowskie (1846)",
      "Wybuch Wiosny Ludów (1848)"
    ],
    "explanation": "Chronologicznie były to wystąpienia w 1825, 1830, 1846 i 1848 roku."
  },
  {
    "id": "R04_EMIG_09",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie była działaczem polskiego ruchu spiskowego: Szymon Konarski, Piotr Ściegienny, Walenty Stefański, James Watt.",
    "options": null,
    "answer": "James Watt",
    "explanation": "Watt był wynalazcą maszyny parowej; Konarski, Ściegienny i Stefański organizowali działalność konspiracyjną."
  },
  {
    "id": "R04_EMIG_10",
    "section": "Wielka Emigracja i Wiosna Ludów",
    "type": "single_choice",
    "prompt": "Kto stanął na czele chłopskiej rabacji w Galicji w 1846 roku?",
    "options": [
      "Edward Dembowski",
      "Ludwik Mierosławski",
      "Jakub Szela",
      "Szymon Konarski",
      "Joachim Lelewel",
      "Jan Stapiński"
    ],
    "answer": 2,
    "explanation": "Podczas rabacji galicyjskiej przywództwo nad wystąpieniem chłopskim objął Jakub Szela."
  },
  {
    "id": "R04_STYC_01",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "single_choice",
    "prompt": "Co oznaczała branka poprzedzająca powstanie styczniowe?",
    "options": [
      "Pobór młodych ludzi do armii rosyjskiej",
      "Uwłaszczenie chłopów",
      "Zebranie podatku wojennego",
      "Ogłoszenie konstytucji",
      "Wybór posłów",
      "Zamknięcie szkół"
    ],
    "answer": 0,
    "image": "r04_powstancy_styczniowi.jpg",
    "explanation": "Branka była przymusowym poborem do wojska carskiego, wymierzonym szczególnie w osoby podejrzane o kontakty z czerwonymi."
  },
  {
    "id": "R04_STYC_02",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o stronnictwach przed powstaniem styczniowym są prawdziwe?",
    "options": [
      "Biali szukali pokojowych sposobów zdobycia autonomii",
      "Czerwoni przygotowywali wybuch powstania",
      "Biali wywodzili się m.in. z ziemiaństwa i bogatej burżuazji",
      "Czerwoni dążyli wyłącznie do wzmocnienia caratu",
      "Czerwonych wspierała m.in. młodzież studencka"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Biali preferowali pokojowe starania o autonomię; czerwoni przygotowywali powstanie i przyciągali młodzież, drobnomieszczaństwo oraz ubożejącą szlachtę."
  },
  {
    "id": "R04_STYC_03",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "true_false",
    "prompt": "Walki w powstaniu styczniowym miały przede wszystkim charakter partyzancki.",
    "options": null,
    "answer": true,
    "explanation": "Powstańcy prowadzili działania partyzanckie i stoczyli blisko 1200 potyczek z wojskami rosyjskimi."
  },
  {
    "id": "R04_STYC_04",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "fill_in",
    "prompt": "Tymczasowy Rząd Narodowy wezwał do powstania 22 stycznia __________ roku.",
    "options": null,
    "answer": [
      "1863"
    ],
    "explanation": "22 stycznia 1863 roku ogłoszono wezwanie do zbrojnego powstania przeciw Rosji."
  },
  {
    "id": "R04_STYC_05",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "match",
    "prompt": "Połącz zabory z datami uwłaszczenia chłopów.",
    "options": null,
    "left": [
      "Zabór pruski",
      "Zabór austriacki",
      "Zabór rosyjski"
    ],
    "right": [
      "1864",
      "1848",
      "1811-1823"
    ],
    "answer": {
      "Zabór pruski": "1811-1823",
      "Zabór austriacki": "1848",
      "Zabór rosyjski": "1864"
    },
    "explanation": "Uwłaszczenie chłopów w zaborze pruskim przeprowadzano w latach 1811–1823, w austriackim w 1848 roku, a w rosyjskim w 1864 roku."
  },
  {
    "id": "R04_STYC_06",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "scenario",
    "prompt": "Dowódca powstania styczniowego próbuje zreorganizować oddziały partyzanckie. W kwietniu 1864 roku zostaje aresztowany, a następnie stracony. O kogo chodzi?",
    "options": [
      "Romuald Traugutt",
      "Józef Chłopicki",
      "Jan Skrzynecki",
      "Giuseppe Garibaldi"
    ],
    "answer": 0,
    "image": "r04_powstancy_styczniowi.jpg",
    "explanation": "Romuald Traugutt ogłosił się dyktatorem powstania styczniowego i podjął próbę reorganizacji wojsk."
  },
  {
    "id": "R04_STYC_07",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do kierunków sztuki drugiej połowy XIX wieku.",
    "options": null,
    "items": [
      "Ukazywanie codzienności bez upiększeń",
      "Utrwalanie chwilowych wrażeń",
      "Faliste linie i motywy roślinne",
      "Podejmowanie tematu nędzy i krzywdy ludzkiej",
      "Obraz świata jako zmieniających się impresji",
      "Asymetria i jasna kolorystyka"
    ],
    "categories": [
      "Realizm",
      "Impresjonizm",
      "Secesja"
    ],
    "answer": {
      "Realizm": [
        "Ukazywanie codzienności bez upiększeń",
        "Podejmowanie tematu nędzy i krzywdy ludzkiej"
      ],
      "Impresjonizm": [
        "Utrwalanie chwilowych wrażeń",
        "Obraz świata jako zmieniających się impresji"
      ],
      "Secesja": [
        "Faliste linie i motywy roślinne",
        "Asymetria i jasna kolorystyka"
      ]
    },
    "image": "r04_style_sztuki_xix_wieku.jpg",
    "explanation": "Realizm akcentował codzienne życie, impresjonizm ulotne wrażenia, a secesja ozdobne faliste linie i roślinne ornamenty."
  },
  {
    "id": "R04_STYC_08",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "riddle",
    "prompt": "Jak nazywał się ruch na rzecz zrównania praw kobiet i mężczyzn?",
    "options": null,
    "answer": "feminizm",
    "explanation": "Feminizm dążył do równości praw kobiet i mężczyzn, w tym dostępu do edukacji i praw wyborczych."
  },
  {
    "id": "R04_STYC_09",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "single_choice",
    "prompt": "Z upowszechnieniem jakiego wynalazku związano narodziny kina w 1895 roku?",
    "options": [
      "Telefonu",
      "Kinematografu braci Lumière",
      "Telegrafu",
      "Maszyny parowej",
      "Mechanicznej przędzarki",
      "Hydraulicznej prasy kowalskiej"
    ],
    "answer": 1,
    "explanation": "W 1895 roku bracia Auguste i Louis Lumière upowszechnili kinematograf, co przyczyniło się do narodzin kina."
  },
  {
    "id": "R04_STYC_10",
    "section": "Powstanie styczniowe i przemiany społeczne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Wybuch powstania styczniowego (1863)",
      "Narodziny kina związane z kinematografem (1895)",
      "Uwłaszczenie chłopów w zaborze austriackim (1848)",
      "Dekret uwłaszczeniowy w zaborze rosyjskim (1864)",
      "Pierwsze nowożytne igrzyska olimpijskie (1896)"
    ],
    "answer": [
      "Uwłaszczenie chłopów w zaborze austriackim (1848)",
      "Wybuch powstania styczniowego (1863)",
      "Dekret uwłaszczeniowy w zaborze rosyjskim (1864)",
      "Narodziny kina związane z kinematografem (1895)",
      "Pierwsze nowożytne igrzyska olimpijskie (1896)"
    ],
    "explanation": "Chronologia obejmuje uwłaszczenie austriackie w 1848 roku, powstanie w 1863, uwłaszczenie rosyjskie w 1864, kino w 1895 i igrzyska w 1896 roku."
  },
  {
    "id": "R04_SWIA_01",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "single_choice",
    "prompt": "Który władca Piemontu został w 1861 roku królem zjednoczonych Włoch?",
    "options": [
      "Wilhelm I",
      "Wiktor Emanuel II",
      "Napoleon III",
      "Pius IX",
      "Ludwik Filip I",
      "Franciszek Józef I"
    ],
    "answer": 1,
    "image": "r04_zjednoczenie_wloch.jpg",
    "explanation": "Parlament ogólnowłoski w Turynie ogłosił w 1861 roku powstanie Królestwa Włoskiego pod berłem Wiktora Emanuela II."
  },
  {
    "id": "R04_SWIA_02",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "multi_select",
    "prompt": "Wskaż postacie związane ze zjednoczeniem Włoch.",
    "options": [
      "Giuseppe Garibaldi",
      "Camillo Cavour",
      "Wiktor Emanuel II",
      "Otto von Bismarck",
      "Abraham Lincoln",
      "Giuseppe Mazzini"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Garibaldi prowadził wyprawę tysiąca czerwonych koszul, Cavour był premierem Piemontu, a Wiktor Emanuel II został królem zjednoczonych Włoch."
  },
  {
    "id": "R04_SWIA_03",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "match",
    "prompt": "Połącz wydarzenie z właściwą datą.",
    "options": null,
    "left": [
      "Proklamowanie Królestwa Włoskiego",
      "Wojna prusko-austriacka",
      "Przeniesienie stolicy Włoch do Rzymu",
      "Kapitulacja wojsk Konfederacji w USA"
    ],
    "right": [
      "1865",
      "1871",
      "1866",
      "1861"
    ],
    "answer": {
      "Proklamowanie Królestwa Włoskiego": "1861",
      "Wojna prusko-austriacka": "1866",
      "Przeniesienie stolicy Włoch do Rzymu": "1871",
      "Kapitulacja wojsk Konfederacji w USA": "1865"
    },
    "explanation": "Królestwo Włoskie ogłoszono w 1861 roku, wojnę prusko-austriacką stoczono w 1866, Rzym stał się stolicą Włoch w 1871, a wojna secesyjna zakończyła się w 1865 roku."
  },
  {
    "id": "R04_SWIA_04",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "true_false",
    "prompt": "W 1871 roku Rzym stał się stolicą zjednoczonego Królestwa Włoskiego.",
    "options": null,
    "answer": true,
    "image": "r04_zjednoczenie_wloch.jpg",
    "explanation": "Po zajęciu Rzymu przez wojska włoskie przeniesiono do niego w 1871 roku rząd i parlament."
  },
  {
    "id": "R04_SWIA_05",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "scenario",
    "prompt": "W 1866 roku pruski kanclerz, zwolennik zjednoczenia Niemiec „krwią i żelazem”, prowadzi wojnę z Austrią, by wykluczyć ją z procesu zjednoczenia. Kim jest?",
    "options": [
      "Otto von Bismarck",
      "Camillo Cavour",
      "Robert Lee",
      "Giuseppe Garibaldi"
    ],
    "answer": 0,
    "explanation": "Otto von Bismarck kierował polityką Prus i doprowadził do pokonania Austrii w 1866 roku."
  },
  {
    "id": "R04_SWIA_06",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "fill_in",
    "prompt": "Po zjednoczeniu Niemiec pierwszym cesarzem II Rzeszy został Wilhelm __________.",
    "options": null,
    "answer": [
      "I"
    ],
    "altAnswers": [
      [
        "I",
        "pierwszy",
        "Pierwszy",
        "1"
      ]
    ],
    "explanation": "Pierwszym cesarzem II Rzeszy Niemieckiej został pruski król Wilhelm I."
  },
  {
    "id": "R04_SWIA_07",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "riddle",
    "prompt": "Jak nazywał się ruch dążący do zniesienia niewolnictwa w Stanach Zjednoczonych?",
    "options": null,
    "answer": "abolicjonizm",
    "explanation": "Abolicjonizm potępiał niewolnictwo i domagał się jego likwidacji; był jednym z istotnych kontekstów wojny secesyjnej."
  },
  {
    "id": "R04_SWIA_08",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "odd_one_out",
    "prompt": "Wskaż obszar, który nie należał do brytyjskich posiadłości w Azji: Indie, Birma, Półwysep Malajski, Algieria.",
    "options": null,
    "answer": "Algieria",
    "image": "r04_mapa_kolonii_afryki.jpg",
    "explanation": "Algieria była kolonią francuską w Afryce, a Indie, Birma i Półwysep Malajski stanowiły posiadłości brytyjskie w Azji."
  },
  {
    "id": "R04_SWIA_09",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "sort",
    "prompt": "Przyporządkuj terytoria afrykańskie do państw kolonialnych, które nimi władały.",
    "options": null,
    "items": [
      "Egipt",
      "Algieria",
      "Togo",
      "Angola",
      "Uganda",
      "Tunis",
      "Kamerun",
      "Mozambik"
    ],
    "categories": [
      "Wielka Brytania",
      "Francja",
      "Niemcy",
      "Portugalia"
    ],
    "answer": {
      "Wielka Brytania": [
        "Egipt",
        "Uganda"
      ],
      "Francja": [
        "Algieria",
        "Tunis"
      ],
      "Niemcy": [
        "Togo",
        "Kamerun"
      ],
      "Portugalia": [
        "Angola",
        "Mozambik"
      ]
    },
    "image": "r04_mapa_kolonii_afryki.jpg",
    "explanation": "Egipt i Uganda znajdowały się pod kontrolą brytyjską, Algieria i Tunezja pod francuską, Togo i Kamerun pod niemiecką, a Angola i Mozambik pod portugalską."
  },
  {
    "id": "R04_SWIA_10",
    "section": "Zjednoczenie państw i kolonializm",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wojny secesyjnej w Stanach Zjednoczonych w kolejności.",
    "options": null,
    "items": [
      "Atak Konfederacji na Fort Sumter (1861)",
      "Kapitulacja Konfederacji (1865)",
      "Wybór Abrahama Lincolna na prezydenta (1860)",
      "Zwycięstwo Unii pod Gettysburgiem (1863)"
    ],
    "answer": [
      "Wybór Abrahama Lincolna na prezydenta (1860)",
      "Atak Konfederacji na Fort Sumter (1861)",
      "Zwycięstwo Unii pod Gettysburgiem (1863)",
      "Kapitulacja Konfederacji (1865)"
    ],
    "image": "r04_wojna_secesyjna.jpg",
    "explanation": "Wybór Lincolna poprzedził secesję stanów; atak na Fort Sumter rozpoczął wojnę w 1861 roku, Gettysburg przypada na 1863, a kapitulacja na 1865 rok."
  },
  {
    "id": "R04_ZABO_01",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "single_choice",
    "prompt": "Jak nazywała się polityka rosyjska zmierzająca do wynarodowienia Polaków?",
    "options": [
      "Germanizacja",
      "Rusyfikacja",
      "Polonizacja",
      "Kolonizacja"
    ],
    "answer": 1,
    "explanation": "Rusyfikacja oznaczała narzucanie kultury i języka rosyjskiego, nasilone szczególnie po powstaniu styczniowym."
  },
  {
    "id": "R04_ZABO_02",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "multi_select",
    "prompt": "Wybierz elementy autonomii Galicji w okresie zaborów.",
    "options": [
      "Sejm Krajowy we Lwowie",
      "Samorząd powiatowy i gminny",
      "Możliwość uchwalania ustaw dotyczących kultury i oświaty",
      "Pełna niepodległość od Austrii",
      "Zatwierdzanie ustaw przez cesarza"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Galicja otrzymała autonomię z Sejmem Krajowym i samorządami lokalnymi, lecz ustawy wymagały zatwierdzenia przez cesarza."
  },
  {
    "id": "R04_ZABO_03",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "true_false",
    "prompt": "Dzieci we Wrześni strajkowały, ponieważ odmówiły nauki religii w języku niemieckim.",
    "options": null,
    "answer": true,
    "image": "r04_dzieci_wrzesnia.jpg",
    "explanation": "Strajk dzieci we Wrześni w latach 1901-1902 był protestem przeciw germanizacji nauczania religii."
  },
  {
    "id": "R04_ZABO_04",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "fill_in",
    "prompt": "Polska Partia Socjalistyczna (PPS) powstała w roku __________.",
    "options": null,
    "answer": [
      "1893"
    ],
    "explanation": "Polska Partia Socjalistyczna (PPS) powstała w 1893 roku; do jej głównych działaczy należeli Józef Piłsudski i Stanisław Wojciechowski."
  },
  {
    "id": "R04_ZABO_05",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "match",
    "prompt": "Połącz polskie ugrupowania polityczne z ich działaczami.",
    "options": null,
    "left": [
      "Narodowa Demokracja",
      "Polska Partia Socjalistyczna",
      "Polskie Stronnictwo Ludowe",
      "SDKPiL"
    ],
    "right": [
      "Róża Luksemburg",
      "Wincenty Witos",
      "Józef Piłsudski",
      "Roman Dmowski"
    ],
    "answer": {
      "Narodowa Demokracja": "Roman Dmowski",
      "Polska Partia Socjalistyczna": "Józef Piłsudski",
      "Polskie Stronnictwo Ludowe": "Wincenty Witos",
      "SDKPiL": "Róża Luksemburg"
    },
    "explanation": "Dmowski kierował Narodową Demokracją; Piłsudski działał w PPS, Witos w ruchu ludowym, a Luksemburg współtworzyła nurt SDKPiL."
  },
  {
    "id": "R04_ZABO_06",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "scenario",
    "prompt": "Polski chłop w zaborze pruskim nie otrzymuje pozwolenia na budowę domu, więc razem z rodziną zamieszkuje w wozie cyrkowym. Kim jest ta osoba?",
    "options": [
      "Michał Drzymała",
      "Dezydery Chłapowski",
      "Karol Miarka",
      "Jakub Szela"
    ],
    "answer": 0,
    "image": "r04_woz_drzymaly.jpg",
    "explanation": "Michał Drzymała zamieszkał w wozie cyrkowym, protestując przeciw przepisom wymagającym pozwolenia na budowę domu."
  },
  {
    "id": "R04_ZABO_07",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia i formy oporu do właściwego zaboru.",
    "options": null,
    "items": [
      "Strajk dzieci we Wrześni",
      "Rewolucja w Królestwie Polskim w 1905 roku",
      "Protest Michała Drzymały",
      "Protesty przeciw nauczaniu w języku rosyjskim"
    ],
    "categories": [
      "Zabór pruski",
      "Zabór rosyjski"
    ],
    "answer": {
      "Zabór pruski": [
        "Strajk dzieci we Wrześni",
        "Protest Michała Drzymały"
      ],
      "Zabór rosyjski": [
        "Rewolucja w Królestwie Polskim w 1905 roku",
        "Protesty przeciw nauczaniu w języku rosyjskim"
      ]
    },
    "explanation": "W zaborze pruskim walczono z germanizacją we Wrześni i protestem Drzymały; w rosyjskim doszło do strajków i protestów w latach 1905-1907."
  },
  {
    "id": "R04_ZABO_08",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "riddle",
    "prompt": "Jak nazywało się polskie stowarzyszenie oświatowe działające w Królestwie Polskim w okresie rewolucji 1905 roku?",
    "options": null,
    "answer": "Polska Macierz Szkolna",
    "altAnswers": [
      "Polska Macierz Szkolna",
      "Macierz Szkolna"
    ],
    "explanation": "Podczas rewolucji 1905 roku na ziemiach polskich powstawały polskie stowarzyszenia, m.in. Polska Macierz Szkolna, później likwidowane przez władze carskie."
  },
  {
    "id": "R04_ZABO_09",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "odd_one_out",
    "prompt": "Wskaż organizację, która nie była polską partią polityczną końca XIX wieku: Polska Partia Socjalistyczna, Narodowa Demokracja, Polskie Stronnictwo Ludowe, Święte Przymierze.",
    "options": null,
    "answer": "Święte Przymierze",
    "explanation": "Święte Przymierze było porozumieniem monarchów z 1815 roku, a pozostałe organizacje były nowoczesnymi polskimi ugrupowaniami politycznymi."
  },
  {
    "id": "R04_ZABO_10",
    "section": "Polacy pod zaborami i rewolucja 1905 roku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Powstanie Stronnictwa Ludowego (1895)",
      "Krwawa niedziela w Petersburgu (1905)",
      "Powstanie PPS (1893)",
      "Powstanie Narodowej Demokracji (1897)",
      "Upadek rewolucji 1905-1907 (1907)"
    ],
    "answer": [
      "Powstanie PPS (1893)",
      "Powstanie Stronnictwa Ludowego (1895)",
      "Powstanie Narodowej Demokracji (1897)",
      "Krwawa niedziela w Petersburgu (1905)",
      "Upadek rewolucji 1905-1907 (1907)"
    ],
    "image": "r04_rewolucja_1905.jpg",
    "explanation": "PPS powstała w 1893 r., Stronnictwo Ludowe w 1895 r., Narodowa Demokracja w 1897 r.; krwawa niedziela nastąpiła w 1905 r., a rewolucja zakończyła się w 1907 r."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postanowienie kongresu wiedeńskiego z jego skutkiem terytorialnym.",
    "options": null,
    "left": [
      "Księstwo Warszawskie",
      "Norwegia",
      "Królestwo Zjednoczonych Niderlandów",
      "Związek Szwajcarski"
    ],
    "right": [
      "Państwo złożone z 22 kantonów",
      "Obejmowało Belgię, Holandię i Luksemburg",
      "Połączona unią personalną ze Szwecją",
      "Zlikwidowane; część ziem przekształcono w Królestwo Polskie"
    ],
    "answer": {
      "Księstwo Warszawskie": "Zlikwidowane; część ziem przekształcono w Królestwo Polskie",
      "Norwegia": "Połączona unią personalną ze Szwecją",
      "Królestwo Zjednoczonych Niderlandów": "Obejmowało Belgię, Holandię i Luksemburg",
      "Związek Szwajcarski": "Państwo złożone z 22 kantonów"
    },
    "explanation": "Kongres ustanowił nowe zależności w Europie, w tym Królestwo Polskie, unię Norwegii ze Szwecją, Niderlandy i Związek Szwajcarski."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które obszary pozostały w posiadaniu Wielkiej Brytanii po kongresie wiedeńskim?",
    "options": [
      "Malta",
      "Cejlon",
      "Mauritius",
      "Besarabia",
      "Finlandia",
      "Helgoland"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Wielka Brytania zatrzymała m.in. Maltę, Cejlon, Mauritius i Helgoland; Finlandię i Besarabię przypisano Rosji."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Kongres wiedeński nałożył na Francję kontrybucję __________ mln franków, a liczebność jej armii ograniczył do __________ tys. żołnierzy.",
    "options": null,
    "answer": [
      "700",
      "150"
    ],
    "explanation": "Francję obciążono kontrybucją w wysokości 700 milionów franków, a jej armię ograniczono do 150 tysięcy żołnierzy."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który brytyjski wynalazca skonstruował mechaniczną przędzarkę datowaną na 1765 rok?",
    "options": [
      "Richard Trevithick",
      "George Stephenson",
      "James Hargreaves",
      "James Watt"
    ],
    "answer": 2,
    "explanation": "James Hargreaves był konstruktorem mechanicznej przędzarki, którą wiąże się z rokiem 1765."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pod koniec powstania listopadowego rosyjskie dowództwo żąda bezwarunkowej kapitulacji. Polski generał podejmuje decyzję o przekroczeniu granicy pruskiej lub austriackiej i złożeniu broni. O którego dowódcę chodzi?",
    "options": [
      "Macieja Rybińskiego",
      "Józefa Chłopickiego",
      "Ignacego Prądzyńskiego",
      "Józefa Dwernickiego"
    ],
    "answer": 0,
    "explanation": "Generał Maciej Rybiński podjął decyzję o wyprowadzeniu polskich wojsk za granicę i złożeniu broni."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz następstwa klęski powstania listopadowego w Królestwie Polskim.",
    "options": [
      "Zniesienie konstytucji z 1815 roku",
      "Likwidacja sejmu",
      "Zamknięcie Uniwersytetu Warszawskiego",
      "Wprowadzenie Statutu Organicznego",
      "Utworzenie Sejmu Krajowego we Lwowie",
      "Utrzymanie niezależnej armii polskiej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po klęsce powstania zniesiono konstytucję, rozwiązano sejm i wojsko, zamknięto uniwersytet i wprowadzono Statut Organiczny."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz tajne organizacje z ich działaczami.",
    "options": null,
    "left": [
      "Stowarzyszenie Ludu Polskiego",
      "Związek Plebejuszy",
      "Związek Narodu Polskiego",
      "Związek Chłopski"
    ],
    "right": [
      "Piotr Ściegienny",
      "Edward Dembowski",
      "Walenty Stefański",
      "Szymon Konarski"
    ],
    "answer": {
      "Stowarzyszenie Ludu Polskiego": "Szymon Konarski",
      "Związek Plebejuszy": "Walenty Stefański",
      "Związek Narodu Polskiego": "Edward Dembowski",
      "Związek Chłopski": "Piotr Ściegienny"
    },
    "explanation": "Konarski działał przy Stowarzyszeniu Ludu Polskiego; Stefański założył Związek Plebejuszy, Dembowski współtworzył Związek Narodu Polskiego, a Ściegienny Związek Chłopski."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "27 lutego 1846 roku działacz powstania krakowskiego próbuje pozyskać chłopów dla zrywu i ginie. Która postać pasuje do tego opisu?",
    "options": [
      "Edward Dembowski",
      "Jakub Szela",
      "Roman Dmowski",
      "Wiktor Heltman"
    ],
    "answer": 0,
    "image": "r04_pochod_krakowski_1846.jpg",
    "explanation": "Edward Dembowski zginął 27 lutego 1846 roku podczas próby pozyskania chłopów dla powstania krakowskiego."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż datę, która nie dotyczy powstania krakowskiego z 1846 roku: 20 lutego 1846, 22 lutego 1846, 27 lutego 1846, 22 stycznia 1863.",
    "options": null,
    "answer": "22 stycznia 1863",
    "explanation": "W lutym 1846 roku doszło do wystąpienia krakowskiego i śmierci Edwarda Dembowskiego; 22 stycznia 1863 roku rozpoczęło się powstanie styczniowe."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia powstania styczniowego i jego zakończenia w kolejności.",
    "options": null,
    "items": [
      "Wezwanie do powstania przez Tymczasowy Rząd Narodowy (22 stycznia 1863)",
      "Aresztowanie Romualda Traugutta (kwiecień 1864)",
      "Branka w Królestwie Polskim (styczeń 1863)",
      "Ukaz uwłaszczeniowy w zaborze rosyjskim (marzec 1864)",
      "Koniec głównych działań powstańczych (jesień 1864)"
    ],
    "answer": [
      "Branka w Królestwie Polskim (styczeń 1863)",
      "Wezwanie do powstania przez Tymczasowy Rząd Narodowy (22 stycznia 1863)",
      "Ukaz uwłaszczeniowy w zaborze rosyjskim (marzec 1864)",
      "Aresztowanie Romualda Traugutta (kwiecień 1864)",
      "Koniec głównych działań powstańczych (jesień 1864)"
    ],
    "explanation": "Branka nastąpiła w styczniu 1863 r., powstanie wybuchło 22 stycznia, dekret uwłaszczeniowy ogłoszono w marcu 1864 r., Traugutta aresztowano w kwietniu, a główne walki ustały jesienią 1864 r."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz ustroje i ruchy społeczne z ich definicjami.",
    "options": null,
    "left": [
      "Kapitalizm",
      "Marksizm",
      "Feminizm",
      "Abolicjonizm"
    ],
    "right": [
      "Ruch potępiający niewolnictwo i domagający się jego zniesienia",
      "Dążenie do równouprawnienia kobiet i mężczyzn",
      "Koncepcja Karola Marksa zakładająca rewolucję proletariacką",
      "Środki produkcji należą do właścicieli zatrudniających pracowników najemnych"
    ],
    "answer": {
      "Kapitalizm": "Środki produkcji należą do właścicieli zatrudniających pracowników najemnych",
      "Marksizm": "Koncepcja Karola Marksa zakładająca rewolucję proletariacką",
      "Feminizm": "Dążenie do równouprawnienia kobiet i mężczyzn",
      "Abolicjonizm": "Ruch potępiający niewolnictwo i domagający się jego zniesienia"
    },
    "explanation": "Pojęcia te dotyczą przemian gospodarczych, ruchów społecznych oraz dziejów Stanów Zjednoczonych."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz prawidłowe powiązania twórców z kierunkami artystycznymi.",
    "options": [
      "Auguste Renoir — impresjonizm",
      "Gustave Courbet — realizm",
      "Claude Debussy — impresjonizm w muzyce",
      "Jean-François Millet — secesja",
      "Émile Zola — symbolizm",
      "Stanisław Przybyszewski — symbolizm"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Renoir i Debussy zostali wymienieni przy impresjonizmie, Courbet przy realizmie, a Przybyszewski przy symbolizmie."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Z ilu państw związkowych składało się Zjednoczone Cesarstwo Niemieckie? Wpisz liczbę: __________.",
    "options": null,
    "answer": [
      "25"
    ],
    "explanation": "Po zjednoczeniu Niemiec II Rzesza obejmowała 25 państw związkowych, które zachowały samodzielność w sprawach wewnętrznych."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj osiem terytoriów afrykańskich do państw kolonialnych.",
    "options": null,
    "items": [
      "Sudan",
      "Maroko",
      "Niemiecka Afryka Wschodnia",
      "Angola",
      "Beczuana",
      "Senegal",
      "Niemiecka Afryka Południowo-Zachodnia",
      "Mozambik"
    ],
    "categories": [
      "Wielka Brytania",
      "Francja",
      "Niemcy",
      "Portugalia"
    ],
    "answer": {
      "Wielka Brytania": [
        "Sudan",
        "Beczuana"
      ],
      "Francja": [
        "Maroko",
        "Senegal"
      ],
      "Niemcy": [
        "Niemiecka Afryka Wschodnia",
        "Niemiecka Afryka Południowo-Zachodnia"
      ],
      "Portugalia": [
        "Angola",
        "Mozambik"
      ]
    },
    "image": "r04_mapa_kolonii_afryki.jpg",
    "explanation": "Sudan i Beczuana były posiadłościami brytyjskimi, Maroko i Senegal francuskimi, Niemiecka Afryka Wschodnia oraz Niemiecka Afryka Południowo-Zachodnia niemieckimi, a Angola i Mozambik portugalskimi."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Przed spodziewanym konfliktem między zaborcami działacz Narodowej Demokracji uznaje Niemcy za największego wroga polskiej sprawy i proponuje orientację prorosyjską. Który polityk przedstawiał tę koncepcję?",
    "options": [
      "Roman Dmowski",
      "Józef Piłsudski",
      "Wincenty Witos",
      "Stanisław Wojciechowski"
    ],
    "answer": 0,
    "explanation": "Roman Dmowski opowiadał się za orientacją prorosyjską; Józef Piłsudski reprezentował orientację proaustriacką."
  }
];

const KID_PROMPTS = {
  "R04_KONG_02": "Połącz trzy zasady kongresu wiedeńskiego z tym, co oznaczały.",
  "R04_KONG_08": "W fabryce pojawiają się maszyny i pracownicy. Jaka to przemiana?",
  "R04_LIST_03": "Połącz instytucję Królestwa Polskiego z jej zadaniem.",
  "R04_LIST_07": "Ułóż te wydarzenia historii Polski od najstarszego do najnowszego.",
  "R04_EMIG_02": "Połącz organizacje z ich działaczami.",
  "R04_EMIG_03": "W jakich częściach Europy doszło do Wiosny Ludów?",
  "R04_STYC_02": "Wskaż prawdziwe informacje o białych i czerwonych.",
  "R04_STYC_07": "Połącz cechy obrazów i sztuki z kierunkami.",
  "R04_SWIA_03": "Połącz każde wydarzenie z datą.",
  "R04_SWIA_09": "Które państwo miało daną kolonię?",
  "R04_ZABO_05": "Połącz partie z osobami, które w nich działały.",
  "R04_ZABO_07": "Czy te wydarzenia miały miejsce w zaborze pruskim czy rosyjskim?",
  "R04_HARD_10": "Ułóż wydarzenia powstania styczniowego w kolejności."
};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "XIX wiek",
  "icon": "🏭",
  "sectionOrder": [
    "Kongres wiedeński i rewolucja przemysłowa",
    "Ziemie polskie i powstanie listopadowe",
    "Wielka Emigracja i Wiosna Ludów",
    "Powstanie styczniowe i przemiany społeczne",
    "Zjednoczenie państw i kolonializm",
    "Polacy pod zaborami i rewolucja 1905 roku"
  ],
  "sectionIcons": {
    "Kongres wiedeński i rewolucja przemysłowa": "🏛️",
    "Ziemie polskie i powstanie listopadowe": "🇵🇱",
    "Wielka Emigracja i Wiosna Ludów": "🕊️",
    "Powstanie styczniowe i przemiany społeczne": "⚔️",
    "Zjednoczenie państw i kolonializm": "🌍",
    "Polacy pod zaborami i rewolucja 1905 roku": "📚"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
