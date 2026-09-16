// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ZIM  = Początek zimnej wojny
//   BLO  = Za żelazną kurtyną
//   DEK  = Dekolonizacja i Daleki Wschód
//   BLW  = Konflikt na Bliskim Wschodzie
//   WYS  = Zimna wojna i wyścig zbrojeń
//   EUR  = Europa i przemiany społeczne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_ZIM_01",
    "section": "Początek zimnej wojny",
    "type": "single_choice",
    "prompt": "Które wydarzenie uznaje się za symboliczny początek zimnej wojny?",
    "options": [
      "Przemówienie Winstona Churchilla w Fulton w 1946 r.",
      "Podpisanie Karty Narodów Zjednoczonych w 1945 r.",
      "Ogłoszenie planu Marshalla w 1947 r.",
      "Powstanie RFN w 1949 r.",
      "Utworzenie Układu Warszawskiego w 1955 r.",
      "Budowę muru berlińskiego w 1961 r."
    ],
    "answer": 0,
    "explanation": "Za symboliczny początek zimnej wojny przyjmuje się przemówienie Winstona Churchilla wygłoszone w Fulton 5 marca 1946 r."
  },
  {
    "id": "R03_ZIM_02",
    "section": "Początek zimnej wojny",
    "type": "multi_select",
    "prompt": "Zaznacz decyzje podjęte na konferencji w Poczdamie.",
    "options": [
      "Podział Niemiec i Austrii na cztery strefy okupacyjne",
      "Zobowiązanie Niemiec do wypłaty reparacji wojennych",
      "Wprowadzenie w Niemczech zasady czterech D",
      "Powołanie NATO",
      "Utworzenie Europejskiej Wspólnoty Węgla i Stali",
      "Przyznanie ZSRS rejonu Królewca"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "W Poczdamie ustalono m.in. podział Niemiec i Austrii, reparacje, zasadę czterech D oraz przekazanie ZSRS rejonu Królewca.",
    "image": "r03_poczdam_konferencja.jpg"
  },
  {
    "id": "R03_ZIM_03",
    "section": "Początek zimnej wojny",
    "type": "match",
    "prompt": "Połącz element zasady czterech D z jego znaczeniem.",
    "options": null,
    "left": [
      "denazyfikacja",
      "demilitaryzacja",
      "dekartelizacja",
      "demokratyzacja"
    ],
    "right": [
      "usunięcie nazistów z życia publicznego",
      "pozbawienie kraju uzbrojenia i infrastruktury obronnej",
      "podział karteli przemysłowych na mniejsze jednostki",
      "wprowadzenie systemu demokratycznego"
    ],
    "answer": {
      "denazyfikacja": "usunięcie nazistów z życia publicznego",
      "demilitaryzacja": "pozbawienie kraju uzbrojenia i infrastruktury obronnej",
      "dekartelizacja": "podział karteli przemysłowych na mniejsze jednostki",
      "demokratyzacja": "wprowadzenie systemu demokratycznego"
    },
    "explanation": "Cztery D określały najważniejsze kierunki powojennej polityki aliantów wobec Niemiec."
  },
  {
    "id": "R03_ZIM_04",
    "section": "Początek zimnej wojny",
    "type": "true_false",
    "prompt": "Pięciu stałych członków Rady Bezpieczeństwa ONZ otrzymało prawo weta.",
    "options": null,
    "answer": true,
    "explanation": "Stałymi członkami Rady Bezpieczeństwa były USA, ZSRS, Francja, Wielka Brytania i Chiny, a każdy z nich dysponował prawem weta."
  },
  {
    "id": "R03_ZIM_05",
    "section": "Początek zimnej wojny",
    "type": "fill_in",
    "prompt": "Konferencja założycielska ONZ rozpoczęła się w mieście __________, a Kartę Narodów Zjednoczonych podpisano __________.",
    "options": null,
    "answer": [
      "San Francisco",
      "26 czerwca 1945 r."
    ],
    "altAnswers": [
      [
        "San Francisco"
      ],
      [
        "26 czerwca 1945 r.",
        "26 VI 1945 r.",
        "26 czerwca 1945"
      ]
    ],
    "explanation": "Delegacje 50 państw obradowały w San Francisco, a konferencję zakończyło podpisanie Karty Narodów Zjednoczonych 26 czerwca 1945 r."
  },
  {
    "id": "R03_ZIM_06",
    "section": "Początek zimnej wojny",
    "type": "scenario",
    "prompt": "Czerwiec 1948 r. Dostawy do zachodnich sektorów Berlina zostają zablokowane. Jak USA i Wielka Brytania podtrzymują zaopatrzenie miasta?",
    "options": [
      "Dostarczają żywność, ubrania i węgiel drogą lotniczą",
      "Wycofują się z Berlina Zachodniego",
      "Przekazują Berlin pod administrację ONZ",
      "Wysyłają transporty przez terytorium Polski",
      "Rozpoczynają ofensywę lądową przeciw ZSRS",
      "Przenoszą mieszkańców Berlina Zachodniego do RFN"
    ],
    "answer": 0,
    "explanation": "Przez 11 miesięcy Amerykanie i Brytyjczycy zaopatrywali Berlin Zachodni drogą lotniczą, aż Stalin zniósł blokadę 12 maja 1949 r."
  },
  {
    "id": "R03_ZIM_07",
    "section": "Początek zimnej wojny",
    "type": "riddle",
    "prompt": "Strategia USA zakładająca pomoc narodom zagrożonym komunizmem to...",
    "options": null,
    "answer": "doktryna Trumana",
    "altAnswers": [
      "doktryna Trumana",
      "Doktryna Trumana"
    ],
    "explanation": "Harry Truman przedstawił tę strategię 12 marca 1947 r., zapowiadając przeciwstawianie się rozszerzaniu komunizmu."
  },
  {
    "id": "R03_ZIM_08",
    "section": "Początek zimnej wojny",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Powstanie NATO",
      "Przemówienie Churchilla w Fulton",
      "Początek blokady Berlina Zachodniego",
      "Konferencja w Poczdamie",
      "Ogłoszenie doktryny Trumana"
    ],
    "answer": [
      "Konferencja w Poczdamie",
      "Przemówienie Churchilla w Fulton",
      "Ogłoszenie doktryny Trumana",
      "Początek blokady Berlina Zachodniego",
      "Powstanie NATO"
    ],
    "explanation": "Poczdam odbył się w 1945 r., Fulton w 1946 r., doktryna Trumana została ogłoszona w 1947 r., blokada Berlina zaczęła się w 1948 r., a NATO powstało w 1949 r."
  },
  {
    "id": "R03_ZIM_09",
    "section": "Początek zimnej wojny",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do założycieli NATO w 1949 r.: Belgia, Dania, Portugalia, Hiszpania, Norwegia.",
    "options": null,
    "answer": "Hiszpania",
    "explanation": "Belgia, Dania, Portugalia i Norwegia należały do państw założycielskich NATO, a Hiszpania do nich nie należała."
  },
  {
    "id": "R03_ZIM_10",
    "section": "Początek zimnej wojny",
    "type": "single_choice",
    "prompt": "Które zestawienie państwa niemieckiego i jego stolicy jest poprawne?",
    "options": [
      "RFN - Bonn",
      "RFN - Berlin Wschodni",
      "RFN - Moskwa",
      "NRD - Bonn",
      "NRD - Paryż",
      "NRD - Londyn"
    ],
    "answer": 0,
    "explanation": "Republikę Federalną Niemiec proklamowano we wrześniu 1949 r., a jej stolicą zostało Bonn. NRD utworzono miesiąc później w sowieckiej strefie okupacyjnej."
  },
  {
    "id": "R03_BLO_01",
    "section": "Za żelazną kurtyną",
    "type": "multi_select",
    "prompt": "Zaznacz cechy państw demokracji ludowej.",
    "options": [
      "Skupienie władzy w rękach partii komunistycznej",
      "Centralne planowanie gospodarki",
      "Kolektywizacja rolnictwa",
      "Polityka ateizacji społeczeństwa",
      "Pełna swoboda działalności partii opozycyjnych",
      "Izolacja od państw Europy Zachodniej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Państwa demokracji ludowej wzorowano na ZSRS: dominowała partia komunistyczna, centralne planowanie, kolektywizacja, ateizacja i izolacja od Zachodu."
  },
  {
    "id": "R03_BLO_02",
    "section": "Za żelazną kurtyną",
    "type": "single_choice",
    "prompt": "Po co w 1949 r. powołano Radę Wzajemnej Pomocy Gospodarczej?",
    "options": [
      "Aby silniej powiązać gospodarczo państwa komunistyczne z ZSRS",
      "Aby przygotować kraje Zachodu do przyjęcia planu Marshalla",
      "Aby utworzyć wspólną armię państw NATO",
      "Aby znieść granice między państwami Europy Zachodniej",
      "Aby zakończyć wojnę koreańską",
      "Aby nadzorować procesy norymberskie"
    ],
    "answer": 0,
    "explanation": "RWPG miała oficjalnie wspierać gospodarki państw członkowskich, lecz w praktyce służyła głównie interesom ekonomicznym Związku Sowieckiego."
  },
  {
    "id": "R03_BLO_03",
    "section": "Za żelazną kurtyną",
    "type": "true_false",
    "prompt": "Komunistyczna Jugosławia zachowała niezależność od ZSRS i współpracowała z Zachodem.",
    "options": null,
    "answer": true,
    "explanation": "Josip Broz-Tito nie chciał przyjąć sowieckiej wersji komunizmu. Po konflikcie ze Stalinem Jugosławia prowadziła antysowiecką politykę i korzystała z pomocy USA."
  },
  {
    "id": "R03_BLO_04",
    "section": "Za żelazną kurtyną",
    "type": "fill_in",
    "prompt": "Józef Stalin zmarł __________, a politykę odchodzenia od terroru stalinowskiego określano jako __________.",
    "options": null,
    "answer": [
      "5 marca 1953 r.",
      "destalinizację"
    ],
    "altAnswers": [
      [
        "5 marca 1953 r.",
        "5 III 1953 r.",
        "5 marca 1953"
      ],
      [
        "destalinizację",
        "destalinizacja"
      ]
    ],
    "explanation": "Po śmierci Stalina rozpoczęła się walka o władzę, a rządy Nikity Chruszczowa przyniosły destalinizację i odwilż polityczną."
  },
  {
    "id": "R03_BLO_05",
    "section": "Za żelazną kurtyną",
    "type": "riddle",
    "prompt": "Złagodzenie polityki władz w państwach komunistycznych po tajnym referacie Chruszczowa nazywano...",
    "options": null,
    "answer": "odwilżą",
    "altAnswers": [
      "odwilżą",
      "odwilż",
      "odwilżą polityczną",
      "odwilż polityczna"
    ],
    "explanation": "Tajny referat Chruszczowa z 1956 r. dał początek odwilży, czyli złagodzeniu represyjnego kursu w państwach komunistycznych."
  },
  {
    "id": "R03_BLO_06",
    "section": "Za żelazną kurtyną",
    "type": "match",
    "prompt": "Połącz postać z właściwym opisem.",
    "options": null,
    "left": [
      "Josip Broz-Tito",
      "Nikita Chruszczow",
      "Imre Nagy",
      "Józef Stalin"
    ],
    "right": [
      "przywódca niezależnej od Moskwy komunistycznej Jugosławii",
      "przywódca ZSRS prowadzący destalinizację",
      "premier Węgier podczas powstania w 1956 r.",
      "sowiecki dyktator zmarły w 1953 r."
    ],
    "answer": {
      "Josip Broz-Tito": "przywódca niezależnej od Moskwy komunistycznej Jugosławii",
      "Nikita Chruszczow": "przywódca ZSRS prowadzący destalinizację",
      "Imre Nagy": "premier Węgier podczas powstania w 1956 r.",
      "Józef Stalin": "sowiecki dyktator zmarły w 1953 r."
    },
    "explanation": "Tito uniezależniał Jugosławię od Moskwy, Chruszczow rozpoczął destalinizację, Nagy stanął na czele reformatorskiego rządu węgierskiego, a Stalin zmarł w 1953 r.",
    "image": "r03_powstanie_wegierskie.jpg"
  },
  {
    "id": "R03_BLO_07",
    "section": "Za żelazną kurtyną",
    "type": "scenario",
    "prompt": "Jesień 1956 r. Rząd zapowiada demokratyzację, ogranicza represje i ogłasza wystąpienie z Układu Warszawskiego. O które państwo chodzi?",
    "options": [
      "Węgry",
      "Bułgarię",
      "NRD",
      "Rumunię",
      "Albanię",
      "Polskę"
    ],
    "answer": 0,
    "explanation": "Takie decyzje podjął rząd Imre Nagya podczas powstania węgierskiego. 4 listopada 1956 r. wojska sowieckie rozpoczęły interwencję."
  },
  {
    "id": "R03_BLO_08",
    "section": "Za żelazną kurtyną",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Zestrzelenie samolotu U2 nad ZSRS",
      "Powstanie Układu Warszawskiego",
      "Śmierć Józefa Stalina",
      "Wybuch powstania węgierskiego",
      "Tajny referat Nikity Chruszczowa"
    ],
    "answer": [
      "Śmierć Józefa Stalina",
      "Powstanie Układu Warszawskiego",
      "Tajny referat Nikity Chruszczowa",
      "Wybuch powstania węgierskiego",
      "Zestrzelenie samolotu U2 nad ZSRS"
    ],
    "explanation": "Stalin zmarł w 1953 r., Układ Warszawski powstał w 1955 r., referat Chruszczowa i powstanie węgierskie przypadły na 1956 r., a U2 zestrzelono w 1960 r."
  },
  {
    "id": "R03_BLO_09",
    "section": "Za żelazną kurtyną",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie było sygnatariuszem Układu Warszawskiego w 1955 r.: Albania, Bułgaria, Polska, Jugosławia, Węgry.",
    "options": null,
    "answer": "Jugosławia",
    "explanation": "Układ Warszawski podpisały m.in. Albania, Bułgaria, Polska i Węgry. Jugosławia Tity pozostawała poza tym sojuszem."
  },
  {
    "id": "R03_BLO_10",
    "section": "Za żelazną kurtyną",
    "type": "single_choice",
    "prompt": "Jaki był główny cel budowy muru berlińskiego w 1961 r.?",
    "options": [
      "Powstrzymanie odpływu ludności z NRD na Zachód",
      "Obrona NRD przed inwazją Francji",
      "Oddzielenie RFN od Polski",
      "Zabezpieczenie lotnisk Berlina Zachodniego",
      "Utworzenie nowej granicy między Francją a Niemcami",
      "Zatrzymanie dostaw planu Marshalla"
    ],
    "answer": 0,
    "explanation": "Mur miał zatrzymać masową ucieczkę mieszkańców NRD przez Berlin Zachodni. W latach 1947-1961 z NRD uciekło około 2,7 mln osób.",
    "image": "r03_mur_berlinski.jpg"
  },
  {
    "id": "R03_DEK_01",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "single_choice",
    "prompt": "Kto stanął na czele Chińskiej Republiki Ludowej proklamowanej w 1949 r.?",
    "options": [
      "Mao Zedong",
      "Czang Kaj-szek",
      "Kim Ir Sen",
      "Ho Szi Min",
      "Mahatma Gandhi",
      "Pol Pot"
    ],
    "answer": 0,
    "explanation": "Komuniści Mao Zedonga wygrali wojnę domową z Kuomintangiem, a w 1949 r. powstała Chińska Republika Ludowa.",
    "image": "r03_mao_plac_tiananmen.jpg"
  },
  {
    "id": "R03_DEK_02",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "multi_select",
    "prompt": "Zaznacz elementy związane z Wielkim Skokiem w Chinach.",
    "options": [
      "Tworzenie komun ludowych",
      "Wytop stali w prymitywnych przydomowych piecach",
      "Odciąganie chłopów od prac rolnych",
      "Katastrofa gospodarcza i głód",
      "Wprowadzenie wielopartyjnej demokracji",
      "Prywatyzacja wielkich zakładów przemysłowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wielki Skok miał błyskawicznie uprzemysłowić Chiny, ale przymusowe komuny i odciągnięcie ludzi od rolnictwa doprowadziły do katastrofy i masowego głodu."
  },
  {
    "id": "R03_DEK_03",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "true_false",
    "prompt": "Rewolucja kulturalna w Chinach rozpoczęła się w 1966 r. i doprowadziła m.in. do niszczenia zabytków, dzieł sztuki i książek.",
    "options": null,
    "answer": true,
    "explanation": "Mao Zedong rozpoczął rewolucję kulturalną w 1966 r.; w czasie czystek zginęło około miliona ludzi, a dorobek kulturalny Chin był masowo niszczony."
  },
  {
    "id": "R03_DEK_04",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "match",
    "prompt": "Połącz państwo lub obszar z właściwą informacją.",
    "options": null,
    "left": [
      "Korea Północna",
      "Korea Południowa",
      "Tajwan",
      "Indie"
    ],
    "right": [
      "państwo komunistyczne kierowane przez Kim Ir Sena",
      "państwo proamerykańskie wspierane przez USA",
      "siedziba Republiki Chińskiej po zwycięstwie Mao",
      "państwo z przewagą hinduizmu powstałe w 1947 r."
    ],
    "answer": {
      "Korea Północna": "państwo komunistyczne kierowane przez Kim Ir Sena",
      "Korea Południowa": "państwo proamerykańskie wspierane przez USA",
      "Tajwan": "siedziba Republiki Chińskiej po zwycięstwie Mao",
      "Indie": "państwo z przewagą hinduizmu powstałe w 1947 r."
    },
    "explanation": "Po II wojnie światowej Korea została podzielona, Czang Kaj-szek wycofał się na Tajwan, a Indie uzyskały niepodległość w 1947 r."
  },
  {
    "id": "R03_DEK_05",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Rok Afryki",
      "Powstanie Chińskiej Republiki Ludowej",
      "Niepodległość Indii i Pakistanu",
      "Bitwa pod Dien Bien Phu",
      "Wybuch wojny koreańskiej"
    ],
    "answer": [
      "Niepodległość Indii i Pakistanu",
      "Powstanie Chińskiej Republiki Ludowej",
      "Wybuch wojny koreańskiej",
      "Bitwa pod Dien Bien Phu",
      "Rok Afryki"
    ],
    "explanation": "Indie i Pakistan powstały w 1947 r., ChRL w 1949 r., wojna koreańska wybuchła w 1950 r., Dien Bien Phu przypadło na 1954 r., a Rok Afryki na 1960 r."
  },
  {
    "id": "R03_DEK_06",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "riddle",
    "prompt": "Proces wyzwalania się ludów Afryki i Azji spod zależności kolonialnej i tworzenia niepodległych państw to...",
    "options": null,
    "answer": "dekolonizacja",
    "altAnswers": [
      "dekolonizacja",
      "dekolonizacji"
    ],
    "explanation": "Dekolonizacja oznaczała rozpad imperiów kolonialnych i powstawanie niepodległych państw w Afryce i Azji."
  },
  {
    "id": "R03_DEK_07",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie było europejskim mocarstwem kolonialnym osłabionym po II wojnie światowej: Wielka Brytania, Francja, Belgia, Holandia, ZSRS.",
    "options": null,
    "answer": "ZSRS",
    "explanation": "Wielka Brytania, Francja, Belgia i Holandia były osłabionymi europejskimi mocarstwami kolonialnymi. ZSRS nie posiadał kolonii i wykorzystywał propagandowo hasła antykolonialne."
  },
  {
    "id": "R03_DEK_08",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "scenario",
    "prompt": "Działacz niepodległościowy organizuje demonstracje, strajki i bojkot brytyjskich towarów, unikając walki zbrojnej. Jak nazywano taką metodę działania?",
    "options": [
      "Bierny opór",
      "Kolektywizacja",
      "Dekartelizacja",
      "Intifada",
      "Destalinizacja",
      "Nacjonalizacja"
    ],
    "answer": 0,
    "explanation": "Mahatma Gandhi propagował bierny opór, czyli pokojową walkę m.in. przez demonstracje, strajki i bojkot angielskich towarów."
  },
  {
    "id": "R03_DEK_09",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do przyczyn albo skutków rozpadu systemu kolonialnego.",
    "options": null,
    "items": [
      "osłabienie europejskich imperiów",
      "wysokie koszty utrzymania kolonii",
      "wzrost nastrojów niepodległościowych",
      "powstanie nowych państw",
      "utworzenie ruchu państw niezaangażowanych",
      "konflikty w nowych państwach"
    ],
    "categories": [
      "przyczyny",
      "skutki"
    ],
    "answer": {
      "przyczyny": [
        "osłabienie europejskich imperiów",
        "wysokie koszty utrzymania kolonii",
        "wzrost nastrojów niepodległościowych"
      ],
      "skutki": [
        "powstanie nowych państw",
        "utworzenie ruchu państw niezaangażowanych",
        "konflikty w nowych państwach"
      ]
    },
    "explanation": "Dekolonizację przyspieszało osłabienie metropolii i wzrost ruchów niepodległościowych; jej skutkiem było powstanie wielu nowych państw i nowych konfliktów.",
    "image": "r03_dekolonizacja_afryki.jpg"
  },
  {
    "id": "R03_DEK_10",
    "section": "Dekolonizacja i Daleki Wschód",
    "type": "single_choice",
    "prompt": "Jak określano podczas zimnej wojny państwa, które nie chciały opowiedzieć się ani po stronie Pierwszego Świata, ani Drugiego Świata?",
    "options": [
      "Trzeci Świat",
      "Beneluks",
      "Układ Warszawski",
      "Wspólnota Atlantycka",
      "Euratom",
      "Rada Europy"
    ],
    "answer": 0,
    "explanation": "Nazwą Trzeci Świat określano państwa, w tym wiele byłych kolonii, które nie chciały wiązać się ani z blokiem kapitalistycznym, ani komunistycznym."
  },
  {
    "id": "R03_BLW_01",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "single_choice",
    "prompt": "Kto został pierwszym premierem państwa Izrael ogłoszonego w 1948 r.?",
    "options": [
      "Dawid Ben Gurion",
      "Gamal Abdel Naser",
      "Jasir Arafat",
      "Ruhollah Chomejni",
      "Saddam Husajn",
      "Mohammad Reza Pahlawi"
    ],
    "answer": 0,
    "explanation": "Dawid Ben Gurion ogłosił niepodległość Izraela w 1948 r. i został pierwszym premierem tego państwa.",
    "image": "r03_ben_gurion_izrael.jpg"
  },
  {
    "id": "R03_BLW_02",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "multi_select",
    "prompt": "Zaznacz skutki wojny o niepodległość Izraela z lat 1948-1949.",
    "options": [
      "Izrael obronił swoje terytorium i je powiększył",
      "Wojna zakończyła się rozejmem",
      "Blisko milion Palestyńczyków zostało zmuszonych do opuszczenia domów",
      "Wszystkie państwa arabskie formalnie uznały Izrael",
      "Jerozolima została stolicą ZSRS",
      "Konflikt zapoczątkował serię wojen arabsko-izraelskich"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Izrael wygrał wojnę, powiększył terytorium, a konflikt zakończył się tylko rozejmem. Problem palestyńskich uchodźców pogłębił długotrwały konflikt."
  },
  {
    "id": "R03_BLW_03",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "fill_in",
    "prompt": "Kryzys sueski wybuchł w roku __________ po ogłoszeniu przez Gamala Abdela Nasera nacjonalizacji __________.",
    "options": null,
    "answer": [
      "1956",
      "Kanału Sueskiego"
    ],
    "altAnswers": [
      [
        "1956",
        "1956 r."
      ],
      [
        "Kanału Sueskiego",
        "Kanał Sueski",
        "kanału sueskiego"
      ]
    ],
    "explanation": "Nacjonalizacja Kanału Sueskiego w 1956 r. skłoniła Wielką Brytanię, Francję i Izrael do ataku na Egipt.",
    "image": "r03_kryzys_sueski.jpg"
  },
  {
    "id": "R03_BLW_04",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii Bliskiego Wschodu chronologicznie.",
    "options": null,
    "items": [
      "Wojna Jom Kippur",
      "Układ w Camp David",
      "Kryzys sueski",
      "Wojna o niepodległość Izraela",
      "Wojna sześciodniowa"
    ],
    "answer": [
      "Wojna o niepodległość Izraela",
      "Kryzys sueski",
      "Wojna sześciodniowa",
      "Wojna Jom Kippur",
      "Układ w Camp David"
    ],
    "explanation": "Kolejność to: 1948-1949, 1956, 1967, 1973 i 1978."
  },
  {
    "id": "R03_BLW_05",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "powstanie Izraela",
      "kryzys sueski",
      "wojna sześciodniowa",
      "wojna Jom Kippur"
    ],
    "right": [
      "1948",
      "1956",
      "1967",
      "1973"
    ],
    "answer": {
      "powstanie Izraela": "1948",
      "kryzys sueski": "1956",
      "wojna sześciodniowa": "1967",
      "wojna Jom Kippur": "1973"
    },
    "explanation": "Daty 1948, 1956, 1967 i 1973 wyznaczają kolejne etapy konfliktu arabsko-izraelskiego."
  },
  {
    "id": "R03_BLW_06",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "true_false",
    "prompt": "Po wojnie sześciodniowej Izrael zajął wzgórza Golan, Zachodni Brzeg wraz z Jerozolimą oraz półwysep Synaj.",
    "options": null,
    "answer": true,
    "explanation": "W wyniku zwycięstwa w 1967 r. Izrael zajął te trzy obszary należące wcześniej do Syrii, Jordanii i Egiptu."
  },
  {
    "id": "R03_BLW_07",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "riddle",
    "prompt": "Strajki, demonstracje i uliczne starcia Palestyńczyków z wojskiem izraelskim określano jako...",
    "options": null,
    "answer": "intifadę",
    "altAnswers": [
      "intifadę",
      "intifada",
      "intifadą"
    ],
    "explanation": "Po zmianie taktyki OWP i Palestyńczyków masowe protesty oraz walki uliczne określano mianem intifady."
  },
  {
    "id": "R03_BLW_08",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "scenario",
    "prompt": "Rok 1979. Szach ucieka z kraju, a władzę przejmują muzułmańscy fundamentaliści. Kto staje się religijnym przywódcą państwa?",
    "options": [
      "Ruhollah Chomejni",
      "Dawid Ben Gurion",
      "Gamal Abdel Naser",
      "Jasir Arafat",
      "Fidel Castro",
      "Leonid Breżniew"
    ],
    "answer": 0,
    "explanation": "Po rewolucji islamskiej w Iranie przywódcą kraju został ajatollah Ruhollah Chomejni."
  },
  {
    "id": "R03_BLW_09",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do koalicji atakującej Egipt podczas kryzysu sueskiego: Izrael, Francja, Wielka Brytania, USA.",
    "options": null,
    "answer": "USA",
    "explanation": "Egipt zaatakowały Izrael, Francja i Wielka Brytania. USA wraz z ZSRS potępiły atak i naciskały na wycofanie wojsk."
  },
  {
    "id": "R03_BLW_10",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "single_choice",
    "prompt": "Które wydarzenie bezpośrednio doprowadziło do I wojny w Zatoce Perskiej?",
    "options": [
      "Zajęcie Kuwejtu przez Irak w 1990 r.",
      "Nacjonalizacja Kanału Sueskiego",
      "Powstanie Izraela",
      "Atak na sportowców w Monachium",
      "Podpisanie układu w Oslo",
      "Wybuch wojny sześciodniowej"
    ],
    "answer": 0,
    "explanation": "2 sierpnia 1990 r. wojska irackie zajęły Kuwejt. Po nieskutecznym wezwaniu ONZ koalicja rozpoczęła operację \"Pustynna burza\".",
    "image": "r03_wojna_zatoka_perska.jpg"
  },
  {
    "id": "R03_WYS_01",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "single_choice",
    "prompt": "Jak Stany Zjednoczone zareagowały w październiku 1962 r. na odkrycie sowieckich rakiet na Kubie?",
    "options": [
      "Ogłosiły blokadę morską Kuby",
      "Zajęły Berlin Wschodni",
      "Wystąpiły z NATO",
      "Założyły Układ Warszawski",
      "Zaakceptowały rozmieszczenie rakiet",
      "Wycofały wojska z Europy"
    ],
    "answer": 0,
    "explanation": "USA ogłosiły blokadę morską Kuby i nakazały zatrzymywać sowieckie statki przewożące broń.",
    "image": "r03_kryzys_kubanski.jpg"
  },
  {
    "id": "R03_WYS_02",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "true_false",
    "prompt": "Kryzys kubański zakończył się usunięciem sowieckich rakiet z Kuby, a USA udzieliły Kubie gwarancji bezpieczeństwa.",
    "options": null,
    "answer": true,
    "explanation": "Chruszczow wycofał rakiety i zawrócił statki, a Kennedy udzielił gwarancji bezpieczeństwa dla Kuby."
  },
  {
    "id": "R03_WYS_03",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które utrudniały Stanom Zjednoczonym prowadzenie wojny w Wietnamie.",
    "options": [
      "Trudny teren sprzyjający siłom komunistycznym",
      "Relacje telewizyjne pokazujące okrucieństwa wojny",
      "Rosnące protesty społeczne w USA",
      "Całkowity brak przewagi militarnej USA",
      "Wystąpienie USA z ONZ",
      "Poparcie studentów dla obowiązkowej służby wojskowej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mimo przewagi militarnej Amerykanie nie potrafili pokonać komunistów w trudnym terenie, a medialne relacje i protesty osłabiały poparcie społeczne dla wojny."
  },
  {
    "id": "R03_WYS_04",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "sequence",
    "prompt": "Ułóż osiągnięcia wyścigu kosmicznego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Pierwszy spacer człowieka w kosmosie",
      "Pierwszy sztuczny satelita",
      "Pierwsze lądowanie ludzi na Księżycu",
      "Pierwszy lot człowieka w kosmos",
      "Sonda Ranger 4 dociera do niewidocznej strony Księżyca"
    ],
    "answer": [
      "Pierwszy sztuczny satelita",
      "Pierwszy lot człowieka w kosmos",
      "Sonda Ranger 4 dociera do niewidocznej strony Księżyca",
      "Pierwszy spacer człowieka w kosmosie",
      "Pierwsze lądowanie ludzi na Księżycu"
    ],
    "explanation": "Kolejne daty to 1957, 1961, 1962, 1965 i 1969.",
    "image": "r03_wyscig_kosmiczny.jpg"
  },
  {
    "id": "R03_WYS_05",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "match",
    "prompt": "Połącz postać z jej rolą lub osiągnięciem.",
    "options": null,
    "left": [
      "Jurij Gagarin",
      "Aleksiej Leonow",
      "Neil Armstrong",
      "Fidel Castro"
    ],
    "right": [
      "pierwszy człowiek w kosmosie",
      "pierwszy człowiek spacerujący w przestrzeni kosmicznej",
      "dowódca pierwszego lądowania ludzi na Księżycu",
      "przywódca komunistycznej Kuby"
    ],
    "answer": {
      "Jurij Gagarin": "pierwszy człowiek w kosmosie",
      "Aleksiej Leonow": "pierwszy człowiek spacerujący w przestrzeni kosmicznej",
      "Neil Armstrong": "dowódca pierwszego lądowania ludzi na Księżycu",
      "Fidel Castro": "przywódca komunistycznej Kuby"
    },
    "explanation": "Gagarin, Leonow i Armstrong zapisali się w historii podboju kosmosu, a Castro związał Kubę z ZSRS."
  },
  {
    "id": "R03_WYS_06",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "riddle",
    "prompt": "Amerykańska Narodowa Agencja Aeronautyki i Przestrzeni Kosmicznej powołana po sukcesie Sputnika to...",
    "options": null,
    "answer": "NASA",
    "altAnswers": [
      "NASA",
      "Nasa"
    ],
    "explanation": "Po wystrzeleniu Sputnika prezydent Eisenhower powołał NASA i polecił opracować amerykański program podboju kosmosu."
  },
  {
    "id": "R03_WYS_07",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "scenario",
    "prompt": "Rok 1968. W Czechosłowacji znosi się cenzurę, wolna prasa krytykuje komunizm, a przywódca mówi o \"socjalizmie z ludzką twarzą\". Jak nazywano te wydarzenia?",
    "options": [
      "Praska Wiosna",
      "Rewolucja goździków",
      "Wielki Skok",
      "Odwilż berlińska",
      "Rewolucja kulturalna",
      "Intifada"
    ],
    "answer": 0,
    "explanation": "Reformy Alexandra Dubčeka nazwano Praską Wiosną. Zakończyła je interwencja wojsk ZSRS, Bułgarii, Polski i Węgier w sierpniu 1968 r."
  },
  {
    "id": "R03_WYS_08",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do okresów zaostrzenia albo odprężenia zimnej wojny.",
    "options": null,
    "items": [
      "zestrzelenie samolotu U2",
      "kryzys kubański",
      "porozumienia rozbrojeniowe",
      "współpraca USA i ZSRS w badaniach kosmosu",
      "akt końcowy KBWE"
    ],
    "categories": [
      "zaostrzenie",
      "odprężenie"
    ],
    "answer": {
      "zaostrzenie": [
        "zestrzelenie samolotu U2",
        "kryzys kubański"
      ],
      "odprężenie": [
        "porozumienia rozbrojeniowe",
        "współpraca USA i ZSRS w badaniach kosmosu",
        "akt końcowy KBWE"
      ]
    },
    "explanation": "U2 i kryzys kubański zwiększały napięcie, natomiast w latach 70. rozwijały się porozumienia rozbrojeniowe, współpraca kosmiczna i proces KBWE."
  },
  {
    "id": "R03_WYS_09",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należało do wojsk interweniujących w Czechosłowacji w sierpniu 1968 r.: ZSRS, Bułgaria, Polska, Węgry, Czechosłowacja.",
    "options": null,
    "answer": "Czechosłowacja",
    "explanation": "Na Czechosłowację wkroczyły wojska ZSRS, Bułgarii, Polski i Węgier; Czechosłowacja była państwem zaatakowanym."
  },
  {
    "id": "R03_WYS_10",
    "section": "Zimna wojna i wyścig zbrojeń",
    "type": "single_choice",
    "prompt": "Do czego zobowiązały się państwa komunistyczne w akcie końcowym KBWE podpisanym w 1975 r.?",
    "options": [
      "Do pokojowego rozstrzygania sporów i przestrzegania praw człowieka",
      "Do rozwiązania Układu Warszawskiego",
      "Do przyjęcia planu Marshalla",
      "Do wprowadzenia euro",
      "Do wycofania się z ONZ",
      "Do likwidacji wszystkich armii narodowych"
    ],
    "answer": 0,
    "explanation": "W zamian za wsparcie ekonomiczne Zachodu państwa komunistyczne zobowiązały się m.in. do pokojowego rozstrzygania sporów i przestrzegania praw człowieka."
  },
  {
    "id": "R03_EUR_01",
    "section": "Europa i przemiany społeczne",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady demokratyzacji Europy Zachodniej po II wojnie światowej.",
    "options": [
      "Wprowadzenie demokracji w RFN",
      "Przekształcenie Włoch w republikę po referendum w 1946 r.",
      "Reformy ustrojowe we Francji w 1958 r.",
      "Rewolucja goździków w Portugalii w 1974 r.",
      "Objęcie władzy w Hiszpanii przez Mao Zedonga",
      "Utworzenie NRD jako państwa komunistycznego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Demokratyzacja objęła m.in. RFN, Włochy, Francję i Portugalię; w Hiszpanii reformy demokratyczne rozpoczęły się po śmierci Franco."
  },
  {
    "id": "R03_EUR_02",
    "section": "Europa i przemiany społeczne",
    "type": "fill_in",
    "prompt": "Plan Schumana ogłoszono w roku __________, a Europejską Wspólnotę Węgla i Stali utworzono w roku __________.",
    "options": null,
    "answer": [
      "1950",
      "1951"
    ],
    "altAnswers": [
      [
        "1950",
        "1950 r."
      ],
      [
        "1951",
        "1951 r."
      ]
    ],
    "explanation": "Robert Schuman ogłosił plan integracji przemysłu ciężkiego w 1950 r., a sześć państw powołało EWWiS traktatem paryskim w 1951 r.",
    "image": "r03_integracja_europejska.jpg"
  },
  {
    "id": "R03_EUR_03",
    "section": "Europa i przemiany społeczne",
    "type": "match",
    "prompt": "Połącz inicjatywę integracyjną z rokiem.",
    "options": null,
    "left": [
      "EWWiS",
      "EWG i Euratom",
      "układ z Schengen",
      "traktat z Maastricht"
    ],
    "right": [
      "1951",
      "1957",
      "1985",
      "1992"
    ],
    "answer": {
      "EWWiS": "1951",
      "EWG i Euratom": "1957",
      "układ z Schengen": "1985",
      "traktat z Maastricht": "1992"
    },
    "explanation": "EWWiS powstała w 1951 r., EWG i Euratom w 1957 r., układ z Schengen zawarto w 1985 r., a traktat z Maastricht podpisano w 1992 r."
  },
  {
    "id": "R03_EUR_04",
    "section": "Europa i przemiany społeczne",
    "type": "single_choice",
    "prompt": "Który zestaw obejmuje wyłącznie sześć państw założycielskich EWWiS, EWG i Euratomu?",
    "options": [
      "Francja, RFN, Belgia, Holandia, Luksemburg, Włochy",
      "Francja, Wielka Brytania, Dania, Irlandia, Hiszpania, Portugalia",
      "RFN, Polska, Czechosłowacja, Węgry, Rumunia, Bułgaria",
      "Francja, USA, Kanada, Belgia, Holandia, Włochy",
      "Włochy, Grecja, Hiszpania, Portugalia, Dania, Irlandia",
      "Belgia, Holandia, Luksemburg, Austria, Szwecja, Finlandia"
    ],
    "answer": 0,
    "explanation": "Pierwszą szóstkę tworzyły Francja, RFN, Belgia, Holandia, Luksemburg i Włochy."
  },
  {
    "id": "R03_EUR_05",
    "section": "Europa i przemiany społeczne",
    "type": "true_false",
    "prompt": "Pierwsze bezpośrednie i powszechne wybory do Parlamentu Europejskiego odbyły się w 1979 r.",
    "options": null,
    "answer": true,
    "explanation": "W 1979 r. po raz pierwszy przeprowadzono bezpośrednie i powszechne wybory do Parlamentu Europejskiego z siedzibą w Strasburgu."
  },
  {
    "id": "R03_EUR_06",
    "section": "Europa i przemiany społeczne",
    "type": "sequence",
    "prompt": "Ułóż etapy integracji europejskiej od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Traktat z Maastricht",
      "Powstanie EWWiS",
      "Plan Marshalla",
      "Powstanie Beneluksu",
      "Traktaty rzymskie",
      "Plan Schumana"
    ],
    "answer": [
      "Plan Marshalla",
      "Powstanie Beneluksu",
      "Plan Schumana",
      "Powstanie EWWiS",
      "Traktaty rzymskie",
      "Traktat z Maastricht"
    ],
    "explanation": "Kolejność wyznaczają lata 1947, 1948, 1950, 1951, 1957 i 1992."
  },
  {
    "id": "R03_EUR_07",
    "section": "Europa i przemiany społeczne",
    "type": "scenario",
    "prompt": "Państwa chcą stopniowo znieść kontrole na wspólnych granicach. W 1985 r. pięć z nich zawiera w tej sprawie porozumienie w Luksemburgu. Jak się ono nazywa?",
    "options": [
      "Układ z Schengen",
      "Traktat paryski",
      "Układ Warszawski",
      "Doktryna Trumana",
      "Karta Narodów Zjednoczonych",
      "Plan Marshalla"
    ],
    "answer": 0,
    "explanation": "Układ z Schengen zawarto w 1985 r.; początkowo podpisały go Francja, RFN i trzy kraje Beneluksu."
  },
  {
    "id": "R03_EUR_08",
    "section": "Europa i przemiany społeczne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy ruchu hipisowskiego.",
    "options": [
      "Pacyfizm",
      "Odrzucenie konsumpcyjnego stylu życia",
      "Życie w niewielkich komunach",
      "Sprzeciw wobec własności prywatnej",
      "Poparcie dla wojny w Wietnamie",
      "Dążenie do wzmocnienia tradycyjnych norm obyczajowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Hipisi odrzucali konsumpcjonizm, głosili pacyfizm, często żyli w komunach i sprzeciwiali się własności prywatnej.",
    "image": "r03_hipisi_woodstock.jpg"
  },
  {
    "id": "R03_EUR_09",
    "section": "Europa i przemiany społeczne",
    "type": "single_choice",
    "prompt": "Kto stał na czele pokojowego ruchu walczącego o zniesienie segregacji rasowej w USA?",
    "options": [
      "Martin Luther King",
      "Neil Armstrong",
      "Robert Schuman",
      "Alexander Dubček",
      "Konrad Adenauer",
      "Ruhollah Chomejni"
    ],
    "answer": 0,
    "explanation": "Martin Luther King organizował pokojowe protesty i marsze. W 1964 r. segregacja rasowa została zniesiona na terenie całych Stanów Zjednoczonych.",
    "image": "r03_martin_luther_king.jpg"
  },
  {
    "id": "R03_EUR_10",
    "section": "Europa i przemiany społeczne",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do właściwych ruchów i przemian społecznych.",
    "options": null,
    "items": [
      "pacyfizm i komuny",
      "walka o równe prawa kobiet",
      "protesty przeciw wojnie w Wietnamie",
      "bojkot segregowanych autobusów",
      "marsz na Waszyngton",
      "żądanie wpływu studentów na zarządzanie uczelniami"
    ],
    "categories": [
      "hipisi",
      "feminizm",
      "bunty studenckie",
      "ruch praw obywatelskich w USA"
    ],
    "answer": {
      "hipisi": [
        "pacyfizm i komuny"
      ],
      "feminizm": [
        "walka o równe prawa kobiet"
      ],
      "bunty studenckie": [
        "protesty przeciw wojnie w Wietnamie",
        "żądanie wpływu studentów na zarządzanie uczelniami"
      ],
      "ruch praw obywatelskich w USA": [
        "bojkot segregowanych autobusów",
        "marsz na Waszyngton"
      ]
    },
    "explanation": "Hipisi kojarzyli się z pacyfizmem, feminizm z równouprawnieniem kobiet, bunty studenckie z protestami młodzieży, a ruch praw obywatelskich z pokojową walką przeciw segregacji."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto zastąpił Winstona Churchilla w brytyjskiej delegacji podczas konferencji poczdamskiej?",
    "options": [
      "Clement Attlee",
      "Anthony Eden",
      "Charles de Gaulle",
      "Konrad Adenauer",
      "Robert Schuman",
      "Dwight Eisenhower"
    ],
    "answer": 0,
    "explanation": "W pierwszej części konferencji Wielką Brytanię reprezentował Winston Churchill, a później jego następca Clement Attlee.",
    "image": "r03_poczdam_konferencja.jpg"
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W pierwszym procesie norymberskim sądzono __________ głównych oskarżonych, a na karę śmierci skazano __________ z nich.",
    "options": null,
    "answer": [
      "22",
      "12"
    ],
    "altAnswers": [
      [
        "22",
        "22 oskarżonych"
      ],
      [
        "12",
        "12 oskarżonych"
      ]
    ],
    "explanation": "Międzynarodowy Trybunał Wojskowy sądził 22 głównych oskarżonych, z których 12 skazano na śmierć."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "27 października 1961 r. przy przejściu Checkpoint Charlie stoją naprzeciw siebie czołgi USA i ZSRS. Co bezpośrednio wywołało to napięcie?",
    "options": [
      "Zatrzymanie amerykańskiego dyplomaty na przejściu",
      "Ogłoszenie planu Marshalla",
      "Wybuch powstania węgierskiego",
      "Zestrzelenie Sputnika",
      "Atak Iraku na Kuwejt",
      "Podpisanie traktatu z Maastricht"
    ],
    "answer": 0,
    "explanation": "Do groźnej konfrontacji doszło po zatrzymaniu amerykańskiego dyplomaty na Checkpoint Charlie. Czołgi obu państw pozostawały na pozycjach przez dwa dni.",
    "image": "r03_mur_berlinski.jpg"
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie z dokładną datą lub terminem.",
    "options": null,
    "left": [
      "powstanie Układu Warszawskiego",
      "wybuch powstania węgierskiego",
      "zestrzelenie U2",
      "zamknięcie granicy NRD z Berlinem Zachodnim"
    ],
    "right": [
      "14 maja 1955 r.",
      "23 października 1956 r.",
      "1 maja 1960 r.",
      "noc z 12 na 13 sierpnia 1961 r."
    ],
    "answer": {
      "powstanie Układu Warszawskiego": "14 maja 1955 r.",
      "wybuch powstania węgierskiego": "23 października 1956 r.",
      "zestrzelenie U2": "1 maja 1960 r.",
      "zamknięcie granicy NRD z Berlinem Zachodnim": "noc z 12 na 13 sierpnia 1961 r."
    },
    "explanation": "Te daty wyznaczają kolejne kryzysy i etapy organizowania bloku wschodniego w latach 1955-1961."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz terytoria przyłączone po II wojnie światowej do ZSRS.",
    "options": [
      "Litwa",
      "Łotwa",
      "Estonia",
      "Ruś Zakarpacka",
      "Besarabia",
      "Tajwan"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Pozycję ZSRS wzmacniało powiększenie jego terytorium m.in. o Litwę, Łotwę, Estonię, Ruś Zakarpacką i Besarabię."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce niezwiązane z dekolonizacją lub konfliktami powstałymi na terenach dawnych kolonii: Kaszmir, Dien Bien Phu, Algieria, Bonn.",
    "options": null,
    "answer": "Bonn",
    "explanation": "Kaszmir wiązał się ze sporem Indii i Pakistanu, Dien Bien Phu z klęską Francji w Indochinach, a Algieria z wojną dekolonizacyjną. Bonn było stolicą RFN."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z konfliktem palestyńsko-izraelskim chronologicznie.",
    "options": null,
    "items": [
      "Porozumienie w Oslo",
      "Atak na izraelskich sportowców w Monachium",
      "Powstanie OWP",
      "Wojna Jom Kippur",
      "Wojna sześciodniowa"
    ],
    "answer": [
      "Powstanie OWP",
      "Wojna sześciodniowa",
      "Atak na izraelskich sportowców w Monachium",
      "Wojna Jom Kippur",
      "Porozumienie w Oslo"
    ],
    "explanation": "OWP powstała w 1964 r., wojna sześciodniowa była w 1967 r., atak w Monachium w 1972 r., wojna Jom Kippur w 1973 r., a porozumienie w Oslo w 1993 r."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Wojna iracko-irańska z lat 1980-1988 zakończyła się wyraźnym zwycięstwem Iraku.",
    "options": null,
    "answer": false,
    "explanation": "Po długich i wyczerpujących walkach żadna ze stron wojny iracko-irańskiej nie odniosła zwycięstwa."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Uzupełnij daty osiągnięć kosmicznych: Sputnik - __________, Jurij Gagarin - __________, Aleksiej Leonow - __________, lądowanie Apollo 11 na Księżycu - __________.",
    "options": null,
    "answer": [
      "1957",
      "1961",
      "1965",
      "1969"
    ],
    "altAnswers": [
      [
        "1957",
        "1957 r."
      ],
      [
        "1961",
        "1961 r."
      ],
      [
        "1965",
        "1965 r."
      ],
      [
        "1969",
        "1969 r."
      ]
    ],
    "explanation": "Pierwszy satelita pojawił się na orbicie w 1957 r., Gagarin poleciał w kosmos w 1961 r., Leonow wykonał pierwszy spacer w 1965 r., a Apollo 11 wylądował na Księżycu w 1969 r.",
    "image": "r03_wyscig_kosmiczny.jpg"
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące instytucji europejskich utworzonych lub ukształtowanych przed powstaniem Unii Europejskiej.",
    "options": [
      "Komisja Wspólnot Europejskich zaczęła funkcjonować w 1967 r.",
      "Spotkania przywódców nazwano w latach 70. Radą Europejską",
      "Pierwsze bezpośrednie wybory do Parlamentu Europejskiego odbyły się w 1979 r.",
      "Unia Europejska zaczęła funkcjonować w 1949 r.",
      "Parlament Europejski miał siedzibę w Moskwie",
      "Komisja Europejska była organem Układu Warszawskiego"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wspólne instytucje rozwijały się stopniowo: Komisja Wspólnot Europejskich od 1967 r., Rada Europejska od połowy lat 70., a bezpośrednie wybory do Parlamentu Europejskiego od 1979 r."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj działania do trzech ruchów społecznych.",
    "options": null,
    "items": [
      "bojkot autobusów w Montgomery",
      "marsz 200 tys. osób na Waszyngton",
      "życie w komunach",
      "festiwal w Woodstock",
      "żądanie wpływu na zarządzanie uczelniami",
      "barykady na ulicach Paryża"
    ],
    "categories": [
      "ruch praw obywatelskich w USA",
      "hipisi",
      "bunty studenckie"
    ],
    "answer": {
      "ruch praw obywatelskich w USA": [
        "bojkot autobusów w Montgomery",
        "marsz 200 tys. osób na Waszyngton"
      ],
      "hipisi": [
        "życie w komunach",
        "festiwal w Woodstock"
      ],
      "bunty studenckie": [
        "żądanie wpływu na zarządzanie uczelniami",
        "barykady na ulicach Paryża"
      ]
    },
    "explanation": "King prowadził pokojowe protesty przeciw segregacji, hipisi tworzyli komuny i kulturę Woodstock, a studenci w 1968 r. protestowali m.in. na paryskich uczelniach."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie poprawnie opisuje sobór watykański II?",
    "options": [
      "Zwołał go Jan XXIII w 1962 r., a obrady zakończyły się w 1965 r. za Pawła VI",
      "Zwołał go Paweł VI w 1945 r. i zakończył Jan XXIII w 1950 r.",
      "Jego głównym celem było utworzenie NATO",
      "Wprowadził obowiązek łaciny zamiast języków narodowych w liturgii",
      "Zakazał dialogu z innymi Kościołami i religiami",
      "Odbył się wyłącznie w 1979 r."
    ],
    "answer": 0,
    "explanation": "Sobór watykański II zwołał Jan XXIII w 1962 r.; zakończył się w 1965 r. za Pawła VI. Wprowadzono m.in. języki narodowe do liturgii i rozwinięto dialog z innymi wyznaniami."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Świat po II wojnie światowej",
  "icon": "🌍",
  "sectionOrder": [
    "Początek zimnej wojny",
    "Za żelazną kurtyną",
    "Dekolonizacja i Daleki Wschód",
    "Konflikt na Bliskim Wschodzie",
    "Zimna wojna i wyścig zbrojeń",
    "Europa i przemiany społeczne"
  ],
  "sectionIcons": {
    "Początek zimnej wojny": "🧊",
    "Za żelazną kurtyną": "🚧",
    "Dekolonizacja i Daleki Wschód": "🌏",
    "Konflikt na Bliskim Wschodzie": "🕊️",
    "Zimna wojna i wyścig zbrojeń": "🚀",
    "Europa i przemiany społeczne": "🇪🇺"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
