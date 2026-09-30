// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SKW  = Skutki II wojny światowej
//   ZIM  = Początki zimnej wojny
//   PWP  = Powojenna Polska
//   WOP  = Przejmowanie władzy i opór
//   STA  = Stalinizm w Polsce
//   KUR  = Za żelazną kurtyną
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_SKW_01",
    section: "Skutki II wojny światowej",
    type: "single_choice",
    prompt: "Ile osób zginęło podczas II wojny światowej?",
    options: ["Około 6 mln", "Około 20 mln", "Około 35 mln", "Około 60 mln", "Około 100 mln", "Około 150 mln"],
    answer: 3,
    explanation: "Podczas II wojny światowej życie straciło około 60 mln ludzi, a około 35 mln zostało rannych lub okaleczonych."
  },
  {
    id: "R03_SKW_02",
    section: "Skutki II wojny światowej",
    type: "multi_select",
    prompt: "Zaznacz problemy typowe dla codziennego życia w zniszczonej Europie tuż po wojnie.",
    options: ["Brak mieszkań", "Niedobór żywności i leków", "Zniszczona komunikacja", "Nadmiar wolnych mieszkań", "Brak opału i prądu", "Powszechna dostępność samochodów"],
    answer: [0, 1, 2, 4],
    explanation: "Ludzie mieszkali w ruinach i piwnicach, brakowało żywności, leków, ubrań, opału, wody i prądu, a zniszczone drogi, mosty i tory paraliżowały komunikację.",
    image: "r03_powojenna_warszawa.jpg"
  },
  {
    id: "R03_SKW_03",
    section: "Skutki II wojny światowej",
    type: "true_false",
    prompt: "Po II wojnie światowej Stany Zjednoczone, podobnie jak wszystkie państwa europejskie, były zadłużone i zrujnowane gospodarczo.",
    options: null,
    answer: false,
    explanation: "Stany Zjednoczone były wyjątkiem: nie doznały zniszczeń porównywalnych z Europą i nie wyszły z wojny zrujnowane gospodarczo."
  },
  {
    id: "R03_SKW_04",
    section: "Skutki II wojny światowej",
    type: "match",
    prompt: "Połącz państwo lub grupę państw z jego powojenną sytuacją.",
    options: null,
    left: ["Stany Zjednoczone i ZSRS", "Wielka Brytania i Francja", "Niemcy", "Polska"],
    right: ["utrata Kresów Wschodnich na rzecz ZSRS", "wzrost do rangi supermocarstw", "spadek znaczenia wskutek kosztów i zniszczeń", "podział na strefy okupacyjne"],
    answer: {
      "Stany Zjednoczone i ZSRS": "wzrost do rangi supermocarstw",
      "Wielka Brytania i Francja": "spadek znaczenia wskutek kosztów i zniszczeń",
      "Niemcy": "podział na strefy okupacyjne",
      "Polska": "utrata Kresów Wschodnich na rzecz ZSRS"
    },
    explanation: "Wojna zmieniła układ sił: USA i ZSRS stały się supermocarstwami, Wielka Brytania i Francja osłabły, Niemcy okupowano, a granice Polski przesunięto na zachód."
  },
  {
    id: "R03_SKW_05",
    section: "Skutki II wojny światowej",
    type: "fill_in",
    prompt: "Organizację Narodów Zjednoczonych powołano w roku __________ podczas konferencji w __________.",
    options: null,
    answer: ["1945", "San Francisco"],
    altAnswers: [["1945", "1945 r."], ["San Francisco", "San Francisco w USA"]],
    explanation: "ONZ powstała w czerwcu 1945 r. na konferencji w San Francisco, aby strzec pokoju i bezpieczeństwa międzynarodowego."
  },
  {
    id: "R03_SKW_06",
    section: "Skutki II wojny światowej",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie jest technicznym osiągnięciem rozwijanym podczas wojny: samolot odrzutowy, śmigłowiec, radar, rakieta, pług konny.",
    options: null,
    answer: "pług konny",
    explanation: "Potrzeby wojenne przyspieszyły rozwój samolotów odrzutowych, śmigłowców, radarów i rakiet; pług konny nie należał do tych osiągnięć."
  },
  {
    id: "R03_SKW_07",
    section: "Skutki II wojny światowej",
    type: "scenario",
    prompt: "Jest rok 1946. Międzynarodowy trybunał sądzi najwyższych rangą urzędników i dowódców III Rzeszy za zbrodnie wojenne i zbrodnie przeciwko ludzkości. W którym mieście odbywa się proces?",
    options: ["Berlin", "Norymberga", "Tokio", "Wiedeń", "Poczdam", "Monachium"],
    answer: 1,
    explanation: "Proces najwyższych rangą przedstawicieli III Rzeszy odbył się w Norymberdze w latach 1945-1946.",
    image: "r03_proces_norymberski.jpg"
  },
  {
    id: "R03_SKW_08",
    section: "Skutki II wojny światowej",
    type: "riddle",
    prompt: "Po wojnie tym mianem określano najpotężniejsze państwa świata, czyli Stany Zjednoczone i ZSRS. Jak brzmi to pojęcie?",
    options: null,
    answer: "supermocarstwa",
    altAnswers: ["supermocarstwa", "supermocarstwo"],
    explanation: "Stany Zjednoczone i ZSRS urosły po wojnie do rangi supermocarstw, czyli państw o największej potędze i wpływach."
  },
  {
    id: "R03_SKW_09",
    section: "Skutki II wojny światowej",
    type: "sort",
    prompt: "Przyporządkuj przykłady do rodzaju strat wojennych.",
    options: null,
    items: ["śmierć milionów ludzi", "zniszczone fabryki", "zrabowane dzieła sztuki", "choroby psychiczne ocalałych", "zerwane mosty i tory", "spalone biblioteki i archiwa"],
    categories: ["ludzkie i społeczne", "gospodarcze i infrastrukturalne", "kulturowe"],
    answer: {
      "ludzkie i społeczne": ["śmierć milionów ludzi", "choroby psychiczne ocalałych"],
      "gospodarcze i infrastrukturalne": ["zniszczone fabryki", "zerwane mosty i tory"],
      "kulturowe": ["zrabowane dzieła sztuki", "spalone biblioteki i archiwa"]
    },
    explanation: "Wojna przyniosła jednocześnie ogromne straty ludzkie, zniszczenia gospodarcze i infrastrukturalne oraz bezpowrotne szkody w kulturze."
  },
  {
    id: "R03_SKW_10",
    section: "Skutki II wojny światowej",
    type: "single_choice",
    prompt: "Który organ ONZ odpowiada za utrzymanie międzynarodowego pokoju i bezpieczeństwa?",
    options: ["Rada Bezpieczeństwa", "Zgromadzenie Ogólne", "Sekretariat", "Międzynarodowy Trybunał Wojskowy", "Rada Europy", "Liga Narodów"],
    answer: 0,
    explanation: "Za utrzymanie międzynarodowego pokoju i bezpieczeństwa odpowiada Rada Bezpieczeństwa ONZ."
  },

  {
    id: "R03_ZIM_01",
    section: "Początki zimnej wojny",
    type: "single_choice",
    prompt: "Jak nazwano politykę USA ogłoszoną przez Harry'ego Trumana w 1947 r., której celem było hamowanie ekspansji komunizmu?",
    options: ["doktryna powstrzymywania", "polityka appeasementu", "taktyka salami", "prawo bratniej pomocy", "doktryna izolacjonizmu", "polityka kolektywizacji"],
    answer: 0,
    explanation: "Doktryna powstrzymywania zakładała wspieranie państw zagrożonych ekspansją ZSRS i komunizmu."
  },
  {
    id: "R03_ZIM_02",
    section: "Początki zimnej wojny",
    type: "match",
    prompt: "Połącz organizację lub program z jego zadaniem.",
    options: null,
    left: ["plan Marshalla", "NATO", "Układ Warszawski", "RWPG"],
    right: ["współpraca gospodarcza państw bloku wschodniego", "pomoc w odbudowie Europy", "sojusz wojskowy Zachodu", "sojusz wojskowy państw komunistycznych"],
    answer: {
      "plan Marshalla": "pomoc w odbudowie Europy",
      "NATO": "sojusz wojskowy Zachodu",
      "Układ Warszawski": "sojusz wojskowy państw komunistycznych",
      "RWPG": "współpraca gospodarcza państw bloku wschodniego"
    },
    explanation: "Plan Marshalla był programem pomocy, NATO i Układ Warszawski tworzyły przeciwne bloki militarne, a RWPG koordynowała gospodarki państw zależnych od ZSRS."
  },
  {
    id: "R03_ZIM_03",
    section: "Początki zimnej wojny",
    type: "fill_in",
    prompt: "W roku __________ rząd USA ogłosił plan __________, który miał przyspieszyć odbudowę Europy.",
    options: null,
    answer: ["1947", "Marshalla"],
    altAnswers: [["1947", "1947 r."], ["Marshalla", "plan Marshalla", "George'a Marshalla"]],
    explanation: "Plan Marshalla ogłoszono w 1947 r.; obejmował pomoc finansową i materialną, w tym żywność i surowce."
  },
  {
    id: "R03_ZIM_04",
    section: "Początki zimnej wojny",
    type: "true_false",
    prompt: "Państwa Europy Środkowo-Wschodniej swobodnie skorzystały z planu Marshalla.",
    options: null,
    answer: false,
    explanation: "Pod naciskiem Stalina państwa podporządkowane ZSRS musiały odrzucić amerykańską pomoc."
  },
  {
    id: "R03_ZIM_05",
    section: "Początki zimnej wojny",
    type: "scenario",
    prompt: "Sowieci zamknęli drogi, linie kolejowe i kanały prowadzące do zachodnich sektorów miasta. Zachodni alianci przez niemal rok dostarczali zaopatrzenie samolotami. Jak nazwano tę akcję zaopatrzeniową?",
    options: ["most powietrzny", "plan Marshalla", "operacja berlińska", "doktryna powstrzymywania", "korytarz zachodni", "akcja humanitarna ONZ"],
    answer: 0,
    explanation: "Podczas trwającej 11 miesięcy blokady Berlina alianci utrzymywali miasto dzięki mostowi powietrznemu.",
    image: "r03_most_powietrzny_berlin.jpg"
  },
  {
    id: "R03_ZIM_06",
    section: "Początki zimnej wojny",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["powstanie NRD", "wybuch wojny koreańskiej", "rozpoczęcie blokady Berlina", "powstanie RFN"],
    answer: ["rozpoczęcie blokady Berlina", "powstanie RFN", "powstanie NRD", "wybuch wojny koreańskiej"],
    explanation: "Blokada Berlina rozpoczęła się w 1948 r.; RFN powstała w 1949 r., miesiąc później utworzono NRD, a wojna koreańska wybuchła w 1950 r."
  },
  {
    id: "R03_ZIM_07",
    section: "Początki zimnej wojny",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie należało do zachodniego bloku tworzącego NATO w 1949 r.: Stany Zjednoczone, Kanada, Wielka Brytania, Francja, ZSRS.",
    options: null,
    answer: "ZSRS",
    explanation: "ZSRS stał na czele bloku wschodniego; pozostałe wymienione państwa należały do NATO."
  },
  {
    id: "R03_ZIM_08",
    section: "Początki zimnej wojny",
    type: "multi_select",
    prompt: "Zaznacz cechy zimnej wojny.",
    options: ["Rywalizacja USA i ZSRS", "Wyścig zbrojeń", "Bezpośrednia wojna USA z ZSRS w Europie", "Wspieranie przeciwnych stron konfliktów w Azji i Afryce", "Wzajemna wrogość bloków", "Likwidacja wszystkich sojuszy wojskowych"],
    answer: [0, 1, 3, 4],
    explanation: "Zimna wojna oznaczała wrogość, rywalizację i wyścig zbrojeń, ale bez bezpośredniej wojny supermocarstw w Europie; walczyły one pośrednio poprzez sojuszników."
  },
  {
    id: "R03_ZIM_09",
    section: "Początki zimnej wojny",
    type: "riddle",
    prompt: "W pobliżu którego równoleżnika rozdzielono po wojnie strefy zajęte w Korei przez Armię Czerwoną i wojska amerykańskie?",
    options: null,
    answer: "38 równoleżnika",
    altAnswers: ["38 równoleżnika", "38. równoleżnika", "38 równoleżnik", "38. równoleżnik"],
    explanation: "Linia rozgraniczenia wojsk sowieckich i amerykańskich przebiegała w pobliżu 38 równoleżnika."
  },
  {
    id: "R03_ZIM_10",
    section: "Początki zimnej wojny",
    type: "sort",
    prompt: "Przyporządkuj państwa i organizacje do właściwego bloku zimnej wojny.",
    options: null,
    items: ["USA", "ZSRS", "NATO", "Układ Warszawski", "RFN", "NRD"],
    categories: ["blok zachodni", "blok wschodni"],
    answer: {
      "blok zachodni": ["USA", "NATO", "RFN"],
      "blok wschodni": ["ZSRS", "Układ Warszawski", "NRD"]
    },
    explanation: "USA przewodziły blokowi zachodniemu z NATO i RFN, a ZSRS blokowi wschodniemu z Układem Warszawskim i NRD.",
    image: "r03_mapa_podzialu_niemiec.jpg"
  },

  {
    id: "R03_PWP_01",
    section: "Powojenna Polska",
    type: "single_choice",
    prompt: "O ile zmniejszył się obszar Polski w wyniku powojennych zmian granic?",
    options: ["O 5%", "O 10%", "O 20%", "O 30%", "O 40%", "Nie zmniejszył się"],
    answer: 2,
    explanation: "Powojenna Polska była terytorialnie mniejsza o 20% od II Rzeczypospolitej."
  },
  {
    id: "R03_PWP_02",
    section: "Powojenna Polska",
    type: "multi_select",
    prompt: "Zaznacz ziemie i miasta przyłączone do Polski po II wojnie światowej kosztem Niemiec.",
    options: ["Warmia i Mazury", "Pomorze Zachodnie", "Wrocław", "Szczecin", "Wilno", "Lwów"],
    answer: [0, 1, 2, 3],
    explanation: "Polska otrzymała m.in. Warmię i Mazury, Pomorze Zachodnie, Dolny i Górny Śląsk oraz miasta Wrocław i Szczecin; Wilno i Lwów znalazły się w ZSRS."
  },
  {
    id: "R03_PWP_03",
    section: "Powojenna Polska",
    type: "fill_in",
    prompt: "Przesiedlenia z dawnych Kresów na Ziemie Odzyskane rozpoczęły się w roku __________ i objęły około __________ osób.",
    options: null,
    answer: ["1945", "2 mln"],
    altAnswers: [["1945", "1945 r."], ["2 mln", "2 miliony", "około 2 mln", "około 2 milionów"]],
    explanation: "W 1945 r. rozpoczęto przesiedlanie mieszkańców dawnych Kresów na nowe ziemie zachodnie i północne; objęło ono około 2 mln ludzi.",
    image: "r03_migracje_polakow.jpg"
  },
  {
    id: "R03_PWP_04",
    section: "Powojenna Polska",
    type: "true_false",
    prompt: "W II Rzeczypospolitej mniejszości narodowe stanowiły około 30% ludności, a po wojnie Polska stała się krajem niemal jednonarodowym.",
    options: null,
    answer: true,
    explanation: "Holokaust, zmiana granic, migracje i wysiedlenia sprawiły, że powojenna Polska stała się niemal jednonarodowa."
  },
  {
    id: "R03_PWP_05",
    section: "Powojenna Polska",
    type: "match",
    prompt: "Połącz grupę ludności z kierunkiem lub przyczyną jej powojennego przemieszczenia.",
    options: null,
    left: ["Niemcy z ziem przyznanych Polsce", "Polacy z dawnych Kresów", "Ukraińcy i Białorusini", "byli więźniowie i robotnicy przymusowi"],
    right: ["powrót do Polski", "wyjazd do okupowanych Niemiec", "przesiedlenie głównie na Ziemie Odzyskane", "wysiedlenie do ZSRS"],
    answer: {
      "Niemcy z ziem przyznanych Polsce": "wyjazd do okupowanych Niemiec",
      "Polacy z dawnych Kresów": "przesiedlenie głównie na Ziemie Odzyskane",
      "Ukraińcy i Białorusini": "wysiedlenie do ZSRS",
      "byli więźniowie i robotnicy przymusowi": "powrót do Polski"
    },
    explanation: "Powojenne zmiany granic wywołały masowe, często przymusowe przesiedlenia wielu grup ludności."
  },
  {
    id: "R03_PWP_06",
    section: "Powojenna Polska",
    type: "scenario",
    prompt: "W 1947 r. władze zastosowały odpowiedzialność zbiorową i przesiedliły ludność ukraińską i łemkowską z Bieszczad i Beskidów na dawne ziemie niemieckie. Jak nazywała się ta operacja?",
    options: ["akcja Wisła", "akcja Burza", "obława augustowska", "bitwa o handel", "reforma rolna", "repatriacja"],
    answer: 0,
    explanation: "Akcja Wisła polegała na przymusowym przesiedleniu Ukraińców i Łemków oskarżanych zbiorowo o wspieranie UPA."
  },
  {
    id: "R03_PWP_07",
    section: "Powojenna Polska",
    type: "odd_one_out",
    prompt: "Wskaż miasto, które po wojnie nie znalazło się w granicach Polski: Wrocław, Olsztyn, Gdańsk, Szczecin, Lwów.",
    options: null,
    answer: "Lwów",
    explanation: "Lwów znalazł się w granicach ZSRS, natomiast Wrocław, Olsztyn, Gdańsk i Szczecin weszły w skład powojennej Polski."
  },
  {
    id: "R03_PWP_08",
    section: "Powojenna Polska",
    type: "sort",
    prompt: "Przyporządkuj działania władz do dziedziny gospodarki.",
    options: null,
    items: ["podział dużych majątków", "rozdanie ziemi najbiedniejszym chłopom", "upaństwowienie fabryk", "wysokie podatki dla właścicieli sklepów", "utrudnianie prywatnym sklepom zakupu towarów", "przejęcie banków przez państwo"],
    categories: ["reforma rolna", "nacjonalizacja", "bitwa o handel"],
    answer: {
      "reforma rolna": ["podział dużych majątków", "rozdanie ziemi najbiedniejszym chłopom"],
      "nacjonalizacja": ["upaństwowienie fabryk", "przejęcie banków przez państwo"],
      "bitwa o handel": ["wysokie podatki dla właścicieli sklepów", "utrudnianie prywatnym sklepom zakupu towarów"]
    },
    explanation: "Komuniści przejęli kontrolę nad rolnictwem, przemysłem, bankami i handlem poprzez reformę rolną, nacjonalizację i bitwę o handel."
  },
  {
    id: "R03_PWP_09",
    section: "Powojenna Polska",
    type: "riddle",
    prompt: "Jak nazywała się instytucja, której zbiory biblioteczne przeniesiono po wojnie ze Lwowa do Wrocławia?",
    options: null,
    answer: "Zakład Narodowy im. Ossolińskich",
    altAnswers: ["Zakład Narodowy im. Ossolińskich", "Ossolineum", "Zakład Narodowy imienia Ossolińskich"],
    explanation: "Do Wrocławia trafiły m.in. zbiory biblioteczne Zakładu Narodowego im. Ossolińskich ze Lwowa."
  },
  {
    id: "R03_PWP_10",
    section: "Powojenna Polska",
    type: "single_choice",
    prompt: "Jaki skutek dla polskiego rolnictwa przyniosło rozparcelowanie dużych majątków na małe gospodarstwa?",
    options: ["Więcej żywności trafiało do sklepów", "Spadła ilość żywności przeznaczonej na sprzedaż", "Całkowicie zniknęła własność prywatna", "Wzrosła liczba wielkich gospodarstw", "Natychmiast zakończono kartki żywnościowe", "Polska zaczęła eksportować całą produkcję"],
    answer: 1,
    explanation: "Małe gospodarstwa wytwarzały mniej i zużywały plony głównie na potrzeby właścicieli, dlatego do sprzedaży trafiało mniej żywności."
  },

  {
    id: "R03_WOP_01",
    section: "Przejmowanie władzy i opór",
    type: "single_choice",
    prompt: "Jak nazywał się rząd utworzony w czerwcu 1945 r. po włączeniu Stanisława Mikołajczyka do władz w Warszawie?",
    options: ["Tymczasowy Rząd Jedności Narodowej", "Rząd Obrony Narodowej", "Krajowa Rada Narodowa", "Polski Komitet Wyzwolenia Narodowego", "Rząd Rzeczypospolitej na uchodźstwie", "Rada Państwa"],
    answer: 0,
    explanation: "Pod koniec czerwca 1945 r. Rząd Tymczasowy przekształcono w Tymczasowy Rząd Jedności Narodowej, w którym Mikołajczyk został wicepremierem."
  },
  {
    id: "R03_WOP_02",
    section: "Przejmowanie władzy i opór",
    type: "match",
    prompt: "Połącz postać z jej rolą w pierwszych latach powojennych.",
    options: null,
    left: ["Stanisław Mikołajczyk", "Bolesław Bierut", "Władysław Gomułka", "Edward Osóbka-Morawski"],
    right: ["premier TRJN", "przywódca PSL i wicepremier TRJN", "przewodniczący KRN", "przywódca PPR i wicepremier TRJN"],
    answer: {
      "Stanisław Mikołajczyk": "przywódca PSL i wicepremier TRJN",
      "Bolesław Bierut": "przewodniczący KRN",
      "Władysław Gomułka": "przywódca PPR i wicepremier TRJN",
      "Edward Osóbka-Morawski": "premier TRJN"
    },
    explanation: "Mikołajczyk reprezentował opozycyjne PSL, Bierut kierował KRN, Gomułka stał na czele PPR, a Osóbka-Morawski był premierem TRJN."
  },
  {
    id: "R03_WOP_03",
    section: "Przejmowanie władzy i opór",
    type: "true_false",
    prompt: "Szesnastu przywódców Polskiego Państwa Podziemnego zaproszono na rozmowy, a następnie NKWD aresztowało ich i wywiozło do Moskwy.",
    options: null,
    answer: true,
    explanation: "W marcu 1945 r. NKWD podstępnie aresztowało szesnastu przywódców podziemia; w Moskwie urządzono im pokazowy proces."
  },
  {
    id: "R03_WOP_04",
    section: "Przejmowanie władzy i opór",
    type: "fill_in",
    prompt: "Referendum ludowe odbyło się w czerwcu roku __________, a wybory do Sejmu Ustawodawczego w styczniu roku __________.",
    options: null,
    answer: ["1946", "1947"],
    altAnswers: [["1946", "1946 r."], ["1947", "1947 r."]],
    explanation: "Komuniści sfałszowali zarówno referendum z czerwca 1946 r., jak i wybory ze stycznia 1947 r.",
    image: "r03_plakat_referendum.jpg"
  },
  {
    id: "R03_WOP_05",
    section: "Przejmowanie władzy i opór",
    type: "multi_select",
    prompt: "Zaznacz metody używane przez komunistów do zwalczania przeciwników politycznych.",
    options: ["Aresztowania bez wyroków", "Tortury", "Fałszowanie wyborów", "Pełna swoboda kampanii opozycji", "Mordowanie działaczy", "Niezależne sądy"],
    answer: [0, 1, 2, 4],
    explanation: "Aparat represji stosował aresztowania, tortury i mordy, a władze fałszowały referendum i wybory oraz utrudniały działalność opozycji."
  },
  {
    id: "R03_WOP_06",
    section: "Przejmowanie władzy i opór",
    type: "scenario",
    prompt: "Polityk ludowy wstępuje do TRJN, zakłada PSL i próbuje ograniczyć sowiecką ingerencję metodami parlamentarnymi. Po sfałszowanych wyborach, zagrożony aresztowaniem, ucieka z Polski. O kim mowa?",
    options: ["Stanisław Mikołajczyk", "Bolesław Bierut", "Władysław Gomułka", "Stefan Wyszyński", "Leopold Okulicki", "Jan Nowak-Jeziorański"],
    answer: 0,
    explanation: "Stanisław Mikołajczyk próbował prowadzić legalną walkę polityczną, lecz po rozbiciu PSL musiał w 1947 r. opuścić kraj."
  },
  {
    id: "R03_WOP_07",
    section: "Przejmowanie władzy i opór",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["sfałszowane wybory do Sejmu Ustawodawczego", "rozwiązanie Armii Krajowej", "powstanie PZPR", "utworzenie TRJN", "sfałszowane referendum"],
    answer: ["rozwiązanie Armii Krajowej", "utworzenie TRJN", "sfałszowane referendum", "sfałszowane wybory do Sejmu Ustawodawczego", "powstanie PZPR"],
    explanation: "AK rozwiązano w styczniu 1945 r., TRJN powstał w czerwcu 1945 r., referendum odbyło się w 1946 r., wybory w 1947 r., a PZPR utworzono w grudniu 1948 r."
  },
  {
    id: "R03_WOP_08",
    section: "Przejmowanie władzy i opór",
    type: "odd_one_out",
    prompt: "Wskaż organizację, która nie należała do przeciwników komunistycznej dyktatury: Armia Krajowa, Zrzeszenie Wolność i Niezawisłość, Polskie Stronnictwo Ludowe, Polska Partia Robotnicza.",
    options: null,
    answer: "Polska Partia Robotnicza",
    explanation: "PPR była partią komunistyczną przejmującą władzę; AK, WiN i PSL na różne sposoby przeciwstawiały się sowietyzacji."
  },
  {
    id: "R03_WOP_09",
    section: "Przejmowanie władzy i opór",
    type: "riddle",
    prompt: "Jak nazywała się najpopularniejsza polskojęzyczna stacja nadająca z Zachodu nieocenzurowane informacje, której pierwszym dyrektorem był Jan Nowak-Jeziorański?",
    options: null,
    answer: "Radio Wolna Europa",
    altAnswers: ["Radio Wolna Europa", "Rozgłośnia Polska Radia Wolna Europa", "RWE"],
    explanation: "Rozgłośnia Polska Radia Wolna Europa nadawała od 1952 r., a władze komunistyczne próbowały zagłuszać jej sygnał."
  },
  {
    id: "R03_WOP_10",
    section: "Przejmowanie władzy i opór",
    type: "sort",
    prompt: "Przyporządkuj przykłady do form przeciwstawiania się komunizmowi.",
    options: null,
    items: ["działalność PSL", "oddziały WiN", "obrona niezależności Kościoła", "Radio Wolna Europa", "partyzantka antykomunistyczna", "rząd RP w Londynie"],
    categories: ["walka polityczna", "opór zbrojny", "opór instytucjonalny", "działalność emigracyjna"],
    answer: {
      "walka polityczna": ["działalność PSL"],
      "opór zbrojny": ["oddziały WiN", "partyzantka antykomunistyczna"],
      "opór instytucjonalny": ["obrona niezależności Kościoła"],
      "działalność emigracyjna": ["Radio Wolna Europa", "rząd RP w Londynie"]
    },
    explanation: "Polacy przeciwstawiali się komunizmowi poprzez legalną politykę, walkę zbrojną, niezależność Kościoła oraz działalność władz i instytucji emigracyjnych.",
    image: "r03_witold_pilecki.jpg"
  },

  {
    id: "R03_STA_01",
    section: "Stalinizm w Polsce",
    type: "fill_in",
    prompt: "Okres stalinizmu w Polsce trwał w latach __________-__________.",
    options: null,
    answer: ["1948", "1956"],
    altAnswers: [["1948", "1948 r."], ["1956", "1956 r."]],
    explanation: "Lata 1948-1956 to czas pełnego upodabniania Polski do sowieckiego modelu państwa i szczególnego nasilenia terroru."
  },
  {
    id: "R03_STA_02",
    section: "Stalinizm w Polsce",
    type: "single_choice",
    prompt: "Kogo mianowano w 1949 r. ministrem obrony narodowej i marszałkiem Polski?",
    options: ["Konstantego Rokossowskiego", "Bolesława Bieruta", "Józefa Cyrankiewicza", "Władysława Gomułkę", "Michała Rolę-Żymierskiego", "Augusta Emila Fieldorfa"],
    answer: 0,
    explanation: "Konstanty Rokossowski, marszałek ZSRS i posłuszny Stalinowi oficer, miał rozbudować LWP i bezpośrednio nadzorować polski rząd."
  },
  {
    id: "R03_STA_03",
    section: "Stalinizm w Polsce",
    type: "multi_select",
    prompt: "Zaznacz narzędzia utrzymywania władzy stosowane w okresie stalinizmu.",
    options: ["Terror bezpieki", "Indoktrynacja młodzieży", "Propaganda", "Wolna prasa", "Procesy pokazowe", "Swobodne wyjazdy zagraniczne"],
    answer: [0, 1, 2, 4],
    explanation: "Władze stosowały terror, inwigilację, procesy pokazowe, propagandę i indoktrynację; nie zapewniały wolnej prasy ani swobody podróżowania."
  },
  {
    id: "R03_STA_04",
    section: "Stalinizm w Polsce",
    type: "match",
    prompt: "Połącz pojęcie z jego znaczeniem.",
    options: null,
    left: ["gospodarka centralnie sterowana", "kolektywizacja", "plan sześcioletni", "socrealizm"],
    right: ["sztuka służąca propagowaniu komunizmu", "odgórne kierowanie produkcją przez urzędników", "tworzenie wspólnych gospodarstw rolnych", "program rozbudowy przemysłu ciężkiego w latach 1950-1955"],
    answer: {
      "gospodarka centralnie sterowana": "odgórne kierowanie produkcją przez urzędników",
      "kolektywizacja": "tworzenie wspólnych gospodarstw rolnych",
      "plan sześcioletni": "program rozbudowy przemysłu ciężkiego w latach 1950-1955",
      "socrealizm": "sztuka służąca propagowaniu komunizmu"
    },
    explanation: "Stalinowski model obejmował odgórne plany gospodarcze, kolektywizację wsi, rozwój przemysłu ciężkiego i podporządkowanie sztuki propagandzie."
  },
  {
    id: "R03_STA_05",
    section: "Stalinizm w Polsce",
    type: "true_false",
    prompt: "Pałac Kultury i Nauki w Warszawie wzniesiono w latach 1952-1955 jako dar narodów ZSRS dla narodu polskiego.",
    options: null,
    answer: true,
    explanation: "Pałac Kultury i Nauki, wzorowany na moskiewskich budynkach, stał się symbolem polskiego socrealizmu i sowieckiej dominacji.",
    image: "r03_palac_kultury_i_nauki.jpg"
  },
  {
    id: "R03_STA_06",
    section: "Stalinizm w Polsce",
    type: "scenario",
    prompt: "Poeta odmawia tworzenia zgodnie z zasadami socrealizmu, więc musi pracować poza literaturą jako sprzedawca i kierownik administracji. Do pisania wraca w 1955 r. O kim mowa?",
    options: ["Zbigniew Herbert", "Bronisław Linke", "Aleksander Kobzdej", "Alfred Lenica", "Jan Nowak-Jeziorański", "Stefan Wyszyński"],
    answer: 0,
    explanation: "Zbigniew Herbert nie podporządkował się socrealizmowi i przez kilka lat wykonywał prace niezwiązane z twórczością literacką."
  },
  {
    id: "R03_STA_07",
    section: "Stalinizm w Polsce",
    type: "odd_one_out",
    prompt: "Wskaż element, który nie pasuje do praktyki państwa stalinowskiego: tajni donosiciele, procesy pokazowe, kult przywódcy, wolne wybory, cenzura.",
    options: null,
    answer: "wolne wybory",
    explanation: "Państwo stalinowskie opierało się na terrorze, kontroli informacji i kulcie przywódcy; wolne wybory nie funkcjonowały."
  },
  {
    id: "R03_STA_08",
    section: "Stalinizm w Polsce",
    type: "sequence",
    prompt: "Ułóż wydarzenia w porządku chronologicznym.",
    options: null,
    items: ["uchwalenie konstytucji PRL", "nacjonalizacja przemysłu", "rozpoczęcie planu sześcioletniego", "mianowanie Rokossowskiego ministrem obrony", "początek stalinizmu w Polsce"],
    answer: ["nacjonalizacja przemysłu", "początek stalinizmu w Polsce", "mianowanie Rokossowskiego ministrem obrony", "rozpoczęcie planu sześcioletniego", "uchwalenie konstytucji PRL"],
    explanation: "Nacjonalizację przeprowadzono w 1946 r., stalinizm rozpoczął się w 1948 r., Rokossowski objął urząd w 1949 r., plan ruszył w 1950 r., a konstytucję uchwalono w 1952 r."
  },
  {
    id: "R03_STA_09",
    section: "Stalinizm w Polsce",
    type: "riddle",
    prompt: "Jaki skrót nosiła nowa nazwa państwa wprowadzona konstytucją z 1952 r.?",
    options: null,
    answer: "PRL",
    altAnswers: ["PRL", "Polska Rzeczpospolita Ludowa"],
    explanation: "Konstytucja z 1952 r. zmieniła nazwę państwa na Polska Rzeczpospolita Ludowa, czyli PRL."
  },
  {
    id: "R03_STA_10",
    section: "Stalinizm w Polsce",
    type: "sort",
    prompt: "Przyporządkuj działania władz do odpowiedniej dziedziny.",
    options: null,
    items: ["procesy pokazowe", "sieć donosicieli", "socrealizm", "pochody pierwszomajowe", "plan sześcioletni", "spółdzielnie produkcyjne"],
    categories: ["represje", "propaganda i kultura", "gospodarka"],
    answer: {
      "represje": ["procesy pokazowe", "sieć donosicieli"],
      "propaganda i kultura": ["socrealizm", "pochody pierwszomajowe"],
      "gospodarka": ["plan sześcioletni", "spółdzielnie produkcyjne"]
    },
    explanation: "System stalinowski łączył represje polityczne, wszechobecną propagandę oraz ścisłą kontrolę gospodarki."
  },

  {
    id: "R03_KUR_01",
    section: "Za żelazną kurtyną",
    type: "multi_select",
    prompt: "Zaznacz państwa Europy, w których po wojnie komuniści wprowadzali ustrój wzorowany na stalinowskim.",
    options: ["Polska", "Czechosłowacja", "Węgry", "Rumunia", "Wielka Brytania", "Francja"],
    answer: [0, 1, 2, 3],
    explanation: "Polska, Czechosłowacja, Węgry i Rumunia znalazły się w sowieckiej strefie wpływów i podlegały sowietyzacji."
  },
  {
    id: "R03_KUR_02",
    section: "Za żelazną kurtyną",
    type: "true_false",
    prompt: "Inwigilacja oznaczała tajny nadzór nad społeczeństwem, obejmujący podsłuchiwanie rozmów, czytanie korespondencji i zbieranie informacji od znajomych obserwowanej osoby.",
    options: null,
    answer: true,
    explanation: "Rozbudowana policja polityczna kontrolowała obywateli właśnie za pomocą podsłuchów, przechwytywania listów i sieci informatorów."
  },
  {
    id: "R03_KUR_03",
    section: "Za żelazną kurtyną",
    type: "fill_in",
    prompt: "Józef Stalin zmarł w marcu roku __________, a po walce o władzę na czele partii stanął Nikita __________.",
    options: null,
    answer: ["1953", "Chruszczow"],
    altAnswers: [["1953", "1953 r."], ["Chruszczow", "Nikita Chruszczow", "Nikity Chruszczowa"]],
    explanation: "Po śmierci Stalina w marcu 1953 r. przywódcą ZSRS został Nikita Chruszczow, a system uległ częściowemu złagodzeniu."
  },
  {
    id: "R03_KUR_04",
    section: "Za żelazną kurtyną",
    type: "match",
    prompt: "Połącz pojęcie z właściwym opisem.",
    options: null,
    left: ["sowietyzacja", "destalinizacja", "Praska Wiosna", "prawo do bratniej pomocy"],
    right: ["częściowa demokratyzacja Czechosłowacji w 1968 r.", "wprowadzanie modelu ustrojowego ZSRS", "odchodzenie od kultu Stalina i masowego terroru", "uzasadnienie interwencji ZSRS w państwach bloku"],
    answer: {
      "sowietyzacja": "wprowadzanie modelu ustrojowego ZSRS",
      "destalinizacja": "odchodzenie od kultu Stalina i masowego terroru",
      "Praska Wiosna": "częściowa demokratyzacja Czechosłowacji w 1968 r.",
      "prawo do bratniej pomocy": "uzasadnienie interwencji ZSRS w państwach bloku"
    },
    explanation: "Pojęcia te opisują kolejno narzucanie modelu sowieckiego, częściowe odejście od stalinizmu, reformy czechosłowackie i doktrynę uzasadniającą interwencję."
  },
  {
    id: "R03_KUR_05",
    section: "Za żelazną kurtyną",
    type: "scenario",
    prompt: "Premier wprowadza do rządu niekomunistycznych ministrów, żąda wyjścia kraju z Układu Warszawskiego i wycofania Armii Sowieckiej. Po interwencji ZSRS zostaje stracony. O kim mowa?",
    options: ["Imre Nagy", "Aleksander Dubczek", "Nikita Chruszczow", "Leonid Breżniew", "Józef Stalin", "Konrad Adenauer"],
    answer: 0,
    explanation: "Imre Nagy stanął na czele reformatorskiego rządu podczas powstania węgierskiego w 1956 r.; po klęsce został aresztowany i skazany na śmierć.",
    image: "r03_powstanie_wegierskie.jpg"
  },
  {
    id: "R03_KUR_06",
    section: "Za żelazną kurtyną",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Praska Wiosna", "powstanie węgierskie", "śmierć Józefa Stalina", "protesty robotnicze w NRD"],
    answer: ["śmierć Józefa Stalina", "protesty robotnicze w NRD", "powstanie węgierskie", "Praska Wiosna"],
    explanation: "Stalin zmarł w marcu 1953 r., protesty w NRD wybuchły w czerwcu 1953 r., powstanie węgierskie w 1956 r., a Praska Wiosna w 1968 r."
  },
  {
    id: "R03_KUR_07",
    section: "Za żelazną kurtyną",
    type: "odd_one_out",
    prompt: "Wskaż działanie, które nie należało do reform Praskiej Wiosny: zniesienie cenzury, wolność zrzeszania się, bliższe kontakty z Zachodem, przywrócenie masowego terroru.",
    options: null,
    answer: "przywrócenie masowego terroru",
    explanation: "Praska Wiosna miała częściowo demokratyzować system; nie zakładała przywrócenia masowego terroru."
  },
  {
    id: "R03_KUR_08",
    section: "Za żelazną kurtyną",
    type: "single_choice",
    prompt: "Który przywódca ZSRS ogłosił po interwencji w Czechosłowacji prawo do bratniej pomocy?",
    options: ["Leonid Breżniew", "Nikita Chruszczow", "Józef Stalin", "Imre Nagy", "Aleksander Dubczek", "Harry Truman"],
    answer: 0,
    explanation: "Leonid Breżniew ogłosił, że ZSRS może interweniować w państwie bloku wschodniego, jeśli komunizm jest tam zagrożony."
  },
  {
    id: "R03_KUR_09",
    section: "Za żelazną kurtyną",
    type: "riddle",
    prompt: "Jak nazywał się przywódca czechosłowackiej partii komunistycznej stojący na czele reform Praskiej Wiosny?",
    options: null,
    answer: "Aleksander Dubczek",
    altAnswers: ["Aleksander Dubczek", "Dubczek", "Alexander Dubček", "Alexander Dubcek"],
    explanation: "Aleksander Dubczek kierował reformami prowadzonymi pod hasłem socjalizmu z ludzką twarzą."
  },
  {
    id: "R03_KUR_10",
    section: "Za żelazną kurtyną",
    type: "sort",
    prompt: "Przyporządkuj postacie i fakty do wydarzeń.",
    options: null,
    items: ["Imre Nagy", "Aleksander Dubczek", "rok 1956", "rok 1968", "żądanie wyjścia z Układu Warszawskiego", "socjalizm z ludzką twarzą"],
    categories: ["powstanie węgierskie", "Praska Wiosna"],
    answer: {
      "powstanie węgierskie": ["Imre Nagy", "rok 1956", "żądanie wyjścia z Układu Warszawskiego"],
      "Praska Wiosna": ["Aleksander Dubczek", "rok 1968", "socjalizm z ludzką twarzą"]
    },
    explanation: "Imre Nagy kierował przemianami węgierskimi w 1956 r., a Aleksander Dubczek reformami czechosłowackimi w 1968 r.",
    image: "r03_pomnik_stalina_praga.jpg"
  },

  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jak przedstawiał się bilans terytorialny powojennej Polski wobec ZSRS i dawnych ziem niemieckich?",
    options: ["ZSRS zajął 180 tys. km², a Polska otrzymała 103 tys. km²", "ZSRS zajął 103 tys. km², a Polska otrzymała 180 tys. km²", "Obie wartości wynosiły po 180 tys. km²", "Obie wartości wynosiły po 103 tys. km²", "Polska nie utraciła żadnych ziem na rzecz ZSRS", "Polska otrzymała jedynie Wolne Miasto Gdańsk"],
    answer: 0,
    explanation: "ZSRS zagarnął 180 tys. km² ziem II RP, natomiast do Polski przyłączono 103 tys. km² dawnych ziem niemieckich."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Główny proces zbrodniarzy III Rzeszy w Norymberdze trwał od roku __________ do roku __________.",
    options: null,
    answer: ["1945", "1946"],
    altAnswers: [["1945", "1945 r."], ["1946", "1946 r."]],
    explanation: "Międzynarodowy Trybunał Wojskowy sądził najwyższych rangą dygnitarzy III Rzeszy w latach 1945-1946."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz niemieckiego zbrodniarza z opisaną funkcją lub zbrodnią.",
    options: null,
    left: ["Jürgen Stroop", "Rudolf Höss", "Arthur Greiser", "Heinz Reinefarth"],
    right: ["komendant Auschwitz w latach 1940-1943", "namiestnik Kraju Warty", "dowódca tłumienia powstania w getcie warszawskim", "współodpowiedzialny za masakrę mieszkańców Woli"],
    answer: {
      "Jürgen Stroop": "dowódca tłumienia powstania w getcie warszawskim",
      "Rudolf Höss": "komendant Auschwitz w latach 1940-1943",
      "Arthur Greiser": "namiestnik Kraju Warty",
      "Heinz Reinefarth": "współodpowiedzialny za masakrę mieszkańców Woli"
    },
    explanation: "Stroop, Höss i Greiser zostali w Polsce skazani na śmierć; Reinefarth uniknął procesu i został po wojnie burmistrzem w RFN."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz wszystkich pięciu stałych członków Rady Bezpieczeństwa ONZ.",
    options: ["Stany Zjednoczone", "ZSRS", "Wielka Brytania", "Francja", "Chiny", "Niemcy"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Stałymi członkami Rady Bezpieczeństwa zostały USA, ZSRS, Wielka Brytania, Francja i Chiny."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "scenario",
    prompt: "W lipcu 1945 r. w rejonie Suwałk i Augustowa wojska sowieckie, LWP i UB zatrzymały kilka tysięcy osób. Około 600 wywieziono i zamordowano, a ich ciał nie odnaleziono. Jak nazwano tę zbrodnię?",
    options: ["obława augustowska", "proces szesnastu", "akcja Wisła", "bitwa o handel", "amnestia", "operacja berlińska"],
    answer: 0,
    explanation: "Obława augustowska była największą zbrodnią dokonaną na Polakach po zakończeniu wojny; los około 600 ofiar pozostaje nieznany."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż działania gospodarcze komunistów od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["rozpoczęcie planu sześcioletniego", "nacjonalizacja przemysłu", "początek reformy rolnej", "bitwa o handel"],
    answer: ["początek reformy rolnej", "nacjonalizacja przemysłu", "bitwa o handel", "rozpoczęcie planu sześcioletniego"],
    explanation: "Reformę rolną rozpoczęto w 1944 r., nacjonalizację przeprowadzono w 1946 r., bitwa o handel zaczęła się w 1947 r., a plan sześcioletni w 1950 r."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż instytucję, która nie działała na emigracji: Instytut Literacki w Maisons-Laffitte, Instytut Polski i Muzeum im. gen. Sikorskiego, Związek Harcerstwa Polskiego poza granicami Kraju, Ministerstwo Bezpieczeństwa Publicznego.",
    options: null,
    answer: "Ministerstwo Bezpieczeństwa Publicznego",
    explanation: "MBP było komunistycznym aparatem represji w kraju; pozostałe instytucje podtrzymywały polskość na emigracji."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz żołnierza podziemia z właściwą informacją.",
    options: null,
    left: ["Danuta Siedzikówna Inka", "Józef Franczak Laluś", "Zygmunt Szendzielarz Łupaszka", "Hieronim Dekutowski Zapora"],
    right: ["ostatni partyzant zastrzelony w 1963 r.", "sanitariuszka stracona przed 18. urodzinami", "dowódca 5. Brygady Wileńskiej AK", "cichociemny i dowódca na Lubelszczyźnie"],
    answer: {
      "Danuta Siedzikówna Inka": "sanitariuszka stracona przed 18. urodzinami",
      "Józef Franczak Laluś": "ostatni partyzant zastrzelony w 1963 r.",
      "Zygmunt Szendzielarz Łupaszka": "dowódca 5. Brygady Wileńskiej AK",
      "Hieronim Dekutowski Zapora": "cichociemny i dowódca na Lubelszczyźnie"
    },
    explanation: "Losy Inki, Lalusia, Łupaszki i Zapory pokazują różne drogi żołnierzy antykomunistycznego podziemia."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj wydarzenia do właściwego roku.",
    options: null,
    items: ["utworzenie TRJN", "referendum ludowe", "wybory do Sejmu Ustawodawczego", "powstanie PZPR", "obława augustowska", "akcja Wisła"],
    categories: ["1945", "1946", "1947", "1948"],
    answer: {
      "1945": ["utworzenie TRJN", "obława augustowska"],
      "1946": ["referendum ludowe"],
      "1947": ["wybory do Sejmu Ustawodawczego", "akcja Wisła"],
      "1948": ["powstanie PZPR"]
    },
    explanation: "TRJN i obława augustowska przypadają na 1945 r., referendum na 1946 r., wybory i akcja Wisła na 1947 r., a PZPR powstała w 1948 r."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W którym mieście przez niedopatrzenie ogłoszono prawdziwe wyniki referendum z 1946 r.?",
    options: ["Kraków", "Warszawa", "Poznań", "Wrocław", "Gdańsk", "Lublin"],
    answer: 0,
    explanation: "Prawdziwe wyniki referendum ujawniono w Krakowie; pokazały one, jak bardzo oficjalne dane zostały sfałszowane."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się były żołnierz AK, który dokonał samospalenia podczas dożynek w Warszawie w proteście przeciw interwencji w Czechosłowacji?",
    options: null,
    answer: "Ryszard Siwiec",
    altAnswers: ["Ryszard Siwiec", "Siwiec"],
    explanation: "Ryszard Siwiec dokonał aktu samospalenia na Stadionie Dziesięciolecia w geście sprzeciwu wobec interwencji wojsk Układu Warszawskiego w Czechosłowacji."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Dowódca ORP Błyskawica zostaje w 1950 r. aresztowany pod fikcyjnym zarzutem, pozbawiany snu i przesłuchiwany niemal bez przerwy. Która służba wojskowa prowadzi jego śledztwo?",
    options: ["Informacja Wojskowa", "Milicja Obywatelska", "Gestapo", "Radio Wolna Europa", "Rada Państwa", "NATO"],
    answer: 0,
    explanation: "Komandora Zbigniewa Węglarza aresztowała i torturowała Informacja Wojskowa, czyli wojskowy aparat bezpieczeństwa."
  }
];

const KID_PROMPTS = {
  "R03_SKW_01": "Ile osób zginęło w II wojnie światowej?",
  "R03_SKW_05": "W którym roku i mieście powstała ONZ?",
  "R03_ZIM_01": "Jak nazywała się polityka USA zatrzymująca komunizm?",
  "R03_ZIM_05": "Jak nazwano dostarczanie zaopatrzenia samolotami do Berlina?",
  "R03_PWP_01": "O ile po wojnie zmniejszyła się Polska?",
  "R03_PWP_06": "Jak nazywało się przesiedlenie Ukraińców i Łemków w 1947 r.?",
  "R03_WOP_03": "Co NKWD zrobiło z szesnastoma przywódcami polskiego podziemia?",
  "R03_WOP_09": "Jak nazywało się radio nadające z Zachodu wolne informacje?",
  "R03_STA_01": "W jakich latach trwał stalinizm w Polsce?",
  "R03_STA_09": "Jaki skrót miała nazwa Polska Rzeczpospolita Ludowa?",
  "R03_KUR_05": "Kto kierował zmianami na Węgrzech w 1956 r.?",
  "R03_KUR_09": "Kto kierował Praską Wiosną?"
};

const chapter = {
  id: "r03",
  number: 3,
  title: "Polska i świat po II wojnie światowej",
  icon: "🌍",
  sectionOrder: [
    "Skutki II wojny światowej",
    "Początki zimnej wojny",
    "Powojenna Polska",
    "Przejmowanie władzy i opór",
    "Stalinizm w Polsce",
    "Za żelazną kurtyną"
  ],
  sectionIcons: {
    "Skutki II wojny światowej": "🕊️",
    "Początki zimnej wojny": "🧊",
    "Powojenna Polska": "🇵🇱",
    "Przejmowanie władzy i opór": "✊",
    "Stalinizm w Polsce": "🏭",
    "Za żelazną kurtyną": "🚧"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
