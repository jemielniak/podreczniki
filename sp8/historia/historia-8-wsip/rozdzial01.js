// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WOJ  = Wojna obronna Polski
//   DZI  = Działania wojenne w latach 1939-1941
//   OKU  = Polityka Niemiec w okupowanej Europie
//   KOA  = Wielka koalicja i przełom na frontach
//   KON  = Klęska państw osi i zakończenie II wojny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_WOJ_01",
    "section": "Wojna obronna Polski",
    "type": "single_choice",
    "prompt": "Kiedy Niemcy bez wypowiedzenia wojny zaatakowały Polskę?",
    "options": [
      "1 września 1939 r.",
      "3 września 1939 r.",
      "7 września 1939 r.",
      "17 września 1939 r.",
      "28 września 1939 r.",
      "6 października 1939 r."
    ],
    "answer": 0,
    "image": "r01_westerplatte_obrona.jpg",
    "explanation": "Niemiecki atak rozpoczął się nad ranem 1 września 1939 r.; bombardowano m.in. Wieluń, a pancernik Schleswig-Holstein ostrzelał Westerplatte."
  },
  {
    "id": "R01_WOJ_02",
    "section": "Wojna obronna Polski",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca polskiego oporu podczas wojny obronnej 1939 r.",
    "options": [
      "Westerplatte",
      "Mława",
      "Mokra",
      "Wizna",
      "Grodno",
      "Stalingrad"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Westerplatte, Mława, Mokra, Wizna i Grodno należały do ważnych punktów polskiego oporu we wrześniu 1939 r."
  },
  {
    "id": "R01_WOJ_03",
    "section": "Wojna obronna Polski",
    "type": "true_false",
    "prompt": "Francja i Wielka Brytania wypowiedziały Niemcom wojnę 3 września 1939 r., ale nie podjęły wtedy realnych działań wojennych wspierających Polskę.",
    "options": null,
    "answer": true,
    "explanation": "Oba państwa wypełniły formalny obowiązek wypowiedzenia wojny, lecz nie rozpoczęły ofensywy przeciw III Rzeszy, pozostawiając Polskę osamotnioną w walce."
  },
  {
    "id": "R01_WOJ_04",
    "section": "Wojna obronna Polski",
    "type": "fill_in",
    "prompt": "ZSRS zaatakował Polskę __________ września 1939 r., a polskie władze przekroczyły tego dnia granicę z __________.",
    "options": null,
    "answer": [
      "17",
      "Rumunią"
    ],
    "altAnswers": [
      [
        "17",
        "17.",
        "17 września"
      ],
      [
        "Rumunią",
        "Rumunia"
      ]
    ],
    "explanation": "17 września 1939 r. Armia Czerwona wkroczyła do Polski. Tego samego dnia prezydent, rząd i wódz naczelny przekroczyli granicę z Rumunią."
  },
  {
    "id": "R01_WOJ_05",
    "section": "Wojna obronna Polski",
    "type": "riddle",
    "prompt": "Taktyka polegająca na skoncentrowaniu głównych sił na najważniejszych celach, szybkim przełamywaniu obrony i ścisłej współpracy piechoty, czołgów, artylerii oraz lotnictwa to...",
    "options": null,
    "answer": "blitzkrieg",
    "altAnswers": [
      "blitzkrieg",
      "wojna błyskawiczna",
      "wojna blyskawiczna"
    ],
    "image": "r01_sztukas_blitzkrieg.jpg",
    "explanation": "Niemcy stosowali blitzkrieg, czyli wojnę błyskawiczną, opartą na szybkości, koncentracji sił i współdziałaniu różnych rodzajów wojsk."
  },
  {
    "id": "R01_WOJ_06",
    "section": "Wojna obronna Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce niezwiązane z wojną obronną Polski w 1939 r.: Westerplatte, Mława, Mokra, Stalingrad.",
    "options": null,
    "answer": "Stalingrad",
    "explanation": "Stalingrad był miejscem wielkiej bitwy na froncie wschodnim w latach 1942-1943; pozostałe miejsca wiążą się z walkami w Polsce we wrześniu 1939 r."
  },
  {
    "id": "R01_WOJ_07",
    "section": "Wojna obronna Polski",
    "type": "scenario",
    "prompt": "Polskie armie Poznań i Pomorze uderzają na skrzydło wojsk niemieckich maszerujących ku Warszawie. Dowódca armii Poznań kieruje największą bitwą polskiego września. Kto nim jest?",
    "options": [
      "Tadeusz Kutrzeba",
      "Franciszek Kleeberg",
      "Walerian Czuma",
      "Władysław Raginis",
      "Edward Rydz-Śmigły",
      "Konrad Guderski"
    ],
    "answer": 0,
    "image": "r01_bitwa_nad_bzura.jpg",
    "explanation": "Armią Poznań dowodził generał Tadeusz Kutrzeba. To jego wojska wraz z częścią armii Pomorze rozpoczęły bitwę nad Bzurą."
  },
  {
    "id": "R01_WOJ_08",
    "section": "Wojna obronna Polski",
    "type": "match",
    "prompt": "Połącz miejsce walk z właściwym wydarzeniem.",
    "options": null,
    "left": [
      "Westerplatte",
      "Mokra",
      "Grodno",
      "Kock"
    ],
    "right": [
      "obrona Wojskowej Składnicy Tranzytowej",
      "walka Wołyńskiej Brygady Kawalerii",
      "obrona przed Armią Czerwoną",
      "ostatnia bitwa SGO Polesie"
    ],
    "answer": {
      "Westerplatte": "obrona Wojskowej Składnicy Tranzytowej",
      "Mokra": "walka Wołyńskiej Brygady Kawalerii",
      "Grodno": "obrona przed Armią Czerwoną",
      "Kock": "ostatnia bitwa SGO Polesie"
    },
    "explanation": "Westerplatte broniło Wojskowej Składnicy Tranzytowej, pod Mokrą walczyła Wołyńska Brygada Kawalerii, Grodna bronili m.in. cywile i harcerze przed Armią Czerwoną, a pod Kockiem walczyła SGO Polesie."
  },
  {
    "id": "R01_WOJ_09",
    "section": "Wojna obronna Polski",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do agresora, z którym wiązały się bezpośrednio.",
    "options": null,
    "items": [
      "ostrzał Westerplatte",
      "bombardowanie Warszawy",
      "atak 17 września",
      "walki o Grodno",
      "atak 1 września",
      "wkroczenie Armii Czerwonej"
    ],
    "categories": [
      "Niemcy",
      "ZSRS"
    ],
    "answer": {
      "Niemcy": [
        "ostrzał Westerplatte",
        "bombardowanie Warszawy",
        "atak 1 września"
      ],
      "ZSRS": [
        "atak 17 września",
        "walki o Grodno",
        "wkroczenie Armii Czerwonej"
      ]
    },
    "explanation": "Niemcy rozpoczęli atak 1 września, ostrzelali Westerplatte i bombardowali Warszawę. ZSRS wkroczył 17 września, walczył m.in. o Grodno i internowanie władz polskich nastąpiło po ich przejściu do Rumunii w następstwie sytuacji wywołanej agresją ze wschodu."
  },
  {
    "id": "R01_WOJ_10",
    "section": "Wojna obronna Polski",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wojny obronnej Polski w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Agresja ZSRS na Polskę",
      "Kapitulacja Warszawy",
      "Atak Niemiec na Polskę",
      "Koniec walk pod Kockiem",
      "Francja i Wielka Brytania wypowiadają wojnę Niemcom"
    ],
    "answer": [
      "Atak Niemiec na Polskę",
      "Francja i Wielka Brytania wypowiadają wojnę Niemcom",
      "Agresja ZSRS na Polskę",
      "Kapitulacja Warszawy",
      "Koniec walk pod Kockiem"
    ],
    "explanation": "Kolejność wyznaczają daty: atak Niemiec 1 września, wypowiedzenie wojny Niemcom przez Francję i Wielką Brytanię 3 września, agresja ZSRS 17 września, kapitulacja Warszawy 28 września i zakończenie walk pod Kockiem 6 października."
  },
  {
    "id": "R01_WOJ_11",
    "section": "Wojna obronna Polski",
    "type": "single_choice",
    "prompt": "Którego dnia Warszawa doświadczyła najsilniejszego nalotu podczas oblężenia we wrześniu 1939 r.?",
    "options": [
      "1 września",
      "7 września",
      "17 września",
      "22 września",
      "25 września",
      "28 września"
    ],
    "answer": 4,
    "explanation": "Najsilniejszy nalot na Warszawę nastąpił 25 września 1939 r.; na miasto spadło wówczas około 630 ton bomb."
  },
  {
    "id": "R01_WOJ_12",
    "section": "Wojna obronna Polski",
    "type": "scenario",
    "prompt": "Bronisz umocnień wokół Wizny. Masz 720 żołnierzy piechoty, sześć dział i broń maszynową, a przed bitwą ślubujesz, że żywy nie opuścisz pozycji. Kim jesteś?",
    "options": [
      "Władysław Raginis",
      "Franciszek Kleeberg",
      "Stefan Starzyński",
      "Tadeusz Kutrzeba",
      "Ignacy Mościcki",
      "Władysław Sikorski"
    ],
    "answer": 0,
    "image": "r01_wizna_umocnienia.jpg",
    "explanation": "Dowódcą obrony Wizny był kapitan Władysław Raginis. Po przegranej walce nakazał podkomendnym złożyć broń, a sam popełnił samobójstwo granatem."
  },
  {
    "id": "R01_DZI_01",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "single_choice",
    "prompt": "Jak nazwano okres po wypowiedzeniu Niemcom wojny przez Francję i Wielką Brytanię, gdy na froncie zachodnim prawie nie prowadzono działań?",
    "options": [
      "dziwna wojna",
      "wojna zimowa",
      "bitwa o Atlantyk",
      "wojna błyskawiczna",
      "wojna na Pacyfiku",
      "operacja Barbarossa"
    ],
    "answer": 0,
    "explanation": "Ten okres nazwano dziwną wojną. Francja i Wielka Brytania pozostawały w stanie wojny z III Rzeszą, ale ograniczały się do niewielkich demonstracji i działań propagandowych."
  },
  {
    "id": "R01_DZI_02",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "true_false",
    "prompt": "Finlandia przegrała wojnę zimową i utraciła część terytorium, ale zachowała niepodległość.",
    "options": null,
    "answer": true,
    "explanation": "Po ciężkich walkach Finlandia utraciła około 10% terytorium, lecz obroniła swoją niezależność."
  },
  {
    "id": "R01_DZI_03",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "multi_select",
    "prompt": "Zaznacz terytoria zajęte przez ZSRS wiosną i latem 1940 r.",
    "options": [
      "Litwa",
      "Łotwa",
      "Estonia",
      "Besarabia",
      "Bukowina",
      "Norwegia",
      "Belgia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "ZSRS zajął Litwę, Łotwę i Estonię oraz wymusił na Rumunii oddanie Besarabii i Bukowiny."
  },
  {
    "id": "R01_DZI_04",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "fill_in",
    "prompt": "Pakt trzech z września 1940 r. zawarły Niemcy, __________ i __________.",
    "options": null,
    "answer": [
      "Włochy",
      "Japonia"
    ],
    "altAnswers": [
      [
        "Włochy",
        "Wlochy"
      ],
      [
        "Japonia"
      ]
    ],
    "explanation": "Pakt trzech był sojuszem Niemiec, Włoch i Japonii; jego sygnatariuszy nazywano państwami osi."
  },
  {
    "id": "R01_DZI_05",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "riddle",
    "prompt": "Kryptonim niemieckiego ataku na ZSRS rozpoczętego 22 czerwca 1941 r. to operacja...",
    "options": null,
    "answer": "Barbarossa",
    "altAnswers": [
      "Barbarossa",
      "operacja Barbarossa"
    ],
    "explanation": "Niemiecki plan ataku na ZSRS nosił kryptonim Barbarossa. Atak rozpoczął się 22 czerwca 1941 r."
  },
  {
    "id": "R01_DZI_06",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, którego Niemcy nie opanowali w 1940 r.: Dania, Norwegia, Belgia, Grecja, Francja.",
    "options": null,
    "answer": "Grecja",
    "explanation": "Grecję wojska niemieckie zajęły wiosną 1941 r.; Danię, Norwegię, Belgię i Francję opanowano w 1940 r."
  },
  {
    "id": "R01_DZI_07",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "scenario",
    "prompt": "Wiosną 1940 r. główne siły brytyjskie i francuskie zostają odcięte po niemieckim marszu przez Ardeny. Jedyną drogą ewakuacji dla Brytyjczyków staje się port, z którego uratowano około 340 tys. żołnierzy. Jaki to port?",
    "options": [
      "Dunkierka",
      "Calais",
      "Cherbourg",
      "Brest",
      "Rotterdam",
      "Oslo"
    ],
    "answer": 0,
    "explanation": "Ewakuację przeprowadzono z Dunkierki. Brytyjczycy uratowali około 340 tys. żołnierzy, choć ciężki sprzęt pozostał na francuskich plażach."
  },
  {
    "id": "R01_DZI_08",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "match",
    "prompt": "Połącz postać z rolą pełnioną podczas wojny.",
    "options": null,
    "left": [
      "Charles de Gaulle",
      "Erwin Rommel",
      "Winston Churchill",
      "Philippe Pétain"
    ],
    "right": [
      "twórca Komitetu Wolnej Francji",
      "dowódca Afrika Korps",
      "premier Wielkiej Brytanii",
      "szef rządu Francji w Vichy"
    ],
    "answer": {
      "Charles de Gaulle": "twórca Komitetu Wolnej Francji",
      "Erwin Rommel": "dowódca Afrika Korps",
      "Winston Churchill": "premier Wielkiej Brytanii",
      "Philippe Pétain": "szef rządu Francji w Vichy"
    },
    "explanation": "Charles de Gaulle organizował Wolną Francję, Erwin Rommel dowodził Afrika Korps, Winston Churchill był premierem Wielkiej Brytanii, a Philippe Pétain stanął na czele rządu Francji w Vichy."
  },
  {
    "id": "R01_DZI_09",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z lat 1940-1941 w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Atak na Pearl Harbor",
      "Zawarcie paktu trzech",
      "Atak Niemiec na Danię i Norwegię",
      "Atak Niemiec na ZSRS",
      "Początek bitwy o Anglię"
    ],
    "answer": [
      "Atak Niemiec na Danię i Norwegię",
      "Początek bitwy o Anglię",
      "Zawarcie paktu trzech",
      "Atak Niemiec na ZSRS",
      "Atak na Pearl Harbor"
    ],
    "explanation": "Niemcy zaatakowali Danię i Norwegię w kwietniu 1940 r.; bitwa o Anglię trwała od sierpnia do października 1940 r.; pakt trzech zawarto 27 września 1940 r.; atak na ZSRS nastąpił 22 czerwca 1941 r.; Pearl Harbor zaatakowano 7 grudnia 1941 r."
  },
  {
    "id": "R01_DZI_10",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "single_choice",
    "prompt": "Jak nazywały się brytyjskie siły powietrzne, które odegrały kluczową rolę w bitwie o Anglię?",
    "options": [
      "RAF",
      "SS",
      "Afrika Korps",
      "Wehrmacht",
      "Armia Czerwona",
      "ZOB"
    ],
    "answer": 0,
    "image": "r01_bitwa_o_anglie.jpg",
    "explanation": "Brytyjskie Królewskie Siły Powietrzne nosiły angielski skrót RAF i skutecznie przeciwstawiły się Luftwaffe."
  },
  {
    "id": "R01_DZI_11",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "sort",
    "prompt": "Przyporządkuj państwa do ich miejsca w pakcie trzech.",
    "options": null,
    "items": [
      "Niemcy",
      "Włochy",
      "Japonia",
      "Bułgaria",
      "Rumunia",
      "Słowacja",
      "Węgry"
    ],
    "categories": [
      "sygnatariusze z września 1940 r.",
      "państwa które przystąpiły później"
    ],
    "answer": {
      "sygnatariusze z września 1940 r.": [
        "Niemcy",
        "Włochy",
        "Japonia"
      ],
      "państwa które przystąpiły później": [
        "Bułgaria",
        "Rumunia",
        "Słowacja",
        "Węgry"
      ]
    },
    "explanation": "Niemcy, Włochy i Japonia zawarły pakt trzech we wrześniu 1940 r. Z czasem do paktu przystąpiły m.in. Bułgaria, Rumunia, Słowacja i Węgry."
  },
  {
    "id": "R01_DZI_12",
    "section": "Działania wojenne w latach 1939-1941",
    "type": "scenario",
    "prompt": "7 grudnia 1941 r. japońskie lotnictwo bez wypowiedzenia wojny atakuje główną amerykańską bazę floty na Pacyfiku. Jak nazywa się ta baza?",
    "options": [
      "Pearl Harbor",
      "Midway",
      "Singapur",
      "Okinawa",
      "Iwó-jima",
      "Normandia"
    ],
    "answer": 0,
    "image": "r01_pearl_harbor.jpg",
    "explanation": "Celem ataku było Pearl Harbor na Hawajach. Uderzenie uszkodziło bazę i znaczną część amerykańskich okrętów oraz wciągnęło Stany Zjednoczone do wojny."
  },
  {
    "id": "R01_OKU_01",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "single_choice",
    "prompt": "W której części Europy okupacja niemiecka była szczególnie brutalna i nastawiona na wyniszczenie ludności?",
    "options": [
      "w Europie Wschodniej i Środkowej",
      "w Skandynawii",
      "wyłącznie we Francji",
      "wyłącznie w Danii",
      "na Wyspach Brytyjskich",
      "w neutralnej Szwajcarii"
    ],
    "answer": 0,
    "explanation": "W Europie Wschodniej i Środkowej Niemcy prowadzili znacznie brutalniejszą politykę niż na Zachodzie, łącząc terror, wyzysk i plany wyniszczenia lub wysiedlenia ludności."
  },
  {
    "id": "R01_OKU_02",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "multi_select",
    "prompt": "Zaznacz działania stosowane przez Niemców na okupowanych terenach Europy Wschodniej.",
    "options": [
      "przymusowa praca",
      "obowiązkowe dostawy żywności",
      "zamykanie szkół średnich i wyższych",
      "zamykanie bibliotek i muzeów",
      "terror i pacyfikacje",
      "swobodne wybory władz lokalnych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Na wschodzie stosowano m.in. przymusową pracę, obowiązkowe dostawy żywności, zamykanie szkół średnich i wyższych, bibliotek i muzeów oraz terror wobec ludności."
  },
  {
    "id": "R01_OKU_03",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "true_false",
    "prompt": "Pierwsze niemieckie obozy koncentracyjne powstały jeszcze w 1933 r. na terenie III Rzeszy.",
    "options": null,
    "answer": true,
    "image": "r01_auschwitz_birkenau.jpg",
    "explanation": "Pierwsze obozy koncentracyjne naziści utworzyli w 1933 r. dla przeciwników państwa; po wybuchu wojny system obozów rozbudowano na ogromną skalę."
  },
  {
    "id": "R01_OKU_04",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "fill_in",
    "prompt": "W wyniku Holokaustu zginęło około __________ mln europejskich Żydów, a naziści wymordowali także około __________ tys. Romów.",
    "options": null,
    "answer": [
      "6",
      "600"
    ],
    "altAnswers": [
      [
        "6",
        "6 mln",
        "6 milionów"
      ],
      [
        "600",
        "600 tys.",
        "600 tysięcy"
      ]
    ],
    "explanation": "Holokaust pochłonął około 6 mln europejskich Żydów. Szacuje się też, że naziści zamordowali około 600 tys. Romów."
  },
  {
    "id": "R01_OKU_05",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "riddle",
    "prompt": "Wyznaczona dzielnica miasta, do której Niemcy przymusowo przesiedlali ludność żydowską, to...",
    "options": null,
    "answer": "getto",
    "altAnswers": [
      "getto",
      "getta"
    ],
    "image": "r01_getto_warszawskie.jpg",
    "explanation": "Niemcy zamykali Żydów w gettach, gdzie panowały głód, choroby, przeludnienie i ciężka praca."
  },
  {
    "id": "R01_OKU_06",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie opisuje postawy lub formy działania wobec okupanta: kolaboracja, dywersja, sabotaż, blitzkrieg.",
    "options": null,
    "answer": "blitzkrieg",
    "explanation": "Kolaboracja oznacza współpracę z okupantem, a dywersja i sabotaż były formami walki lub oporu. Blitzkrieg to niemiecka taktyka prowadzenia wojny."
  },
  {
    "id": "R01_OKU_07",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "scenario",
    "prompt": "Jesteś lekarzem i pedagogiem prowadzącym sierociniec w getcie warszawskim. Mimo możliwości ratunku pozostajesz z dziećmi i razem z nimi giniesz w Treblince. Kim jesteś?",
    "options": [
      "Janusz Korczak",
      "Jan Karski",
      "Mordechaj Anielewicz",
      "Irena Sendlerowa",
      "Vidkun Quisling",
      "Reinhard Heydrich"
    ],
    "answer": 0,
    "explanation": "Tak postąpił Janusz Korczak. Nie opuścił swoich podopiecznych i został wraz z nimi zamordowany w obozie zagłady w Treblince."
  },
  {
    "id": "R01_OKU_08",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "options": null,
    "left": [
      "kolaboracja",
      "dywersja",
      "sabotaż",
      "obóz zagłady"
    ],
    "right": [
      "współpraca z władzami okupacyjnymi",
      "zorganizowane działania utrudniające walkę wroga",
      "umyślne działania powodujące szkody okupantowi",
      "miejsce zbudowane do masowego zabijania"
    ],
    "answer": {
      "kolaboracja": "współpraca z władzami okupacyjnymi",
      "dywersja": "zorganizowane działania utrudniające walkę wroga",
      "sabotaż": "umyślne działania powodujące szkody okupantowi",
      "obóz zagłady": "miejsce zbudowane do masowego zabijania"
    },
    "explanation": "Kolaboracja oznacza współpracę z władzami okupacyjnymi, dywersja - zorganizowane działania utrudniające przeciwnikowi walkę, sabotaż - umyślne wywoływanie szkód przez niestosowanie się do zarządzeń, a obóz zagłady służył masowemu mordowaniu więźniów."
  },
  {
    "id": "R01_OKU_09",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z prześladowaniem i zagładą Żydów w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Konferencja w Wannsee",
      "Powstanie w getcie warszawskim",
      "Pierwsze getta",
      "Pierwsi więźniowie w Auschwitz I",
      "Powstanie obozu zagłady w Chełmnie"
    ],
    "answer": [
      "Pierwsze getta",
      "Pierwsi więźniowie w Auschwitz I",
      "Powstanie obozu zagłady w Chełmnie",
      "Konferencja w Wannsee",
      "Powstanie w getcie warszawskim"
    ],
    "image": "r01_auschwitz_birkenau.jpg",
    "explanation": "Pierwsze getta powstawały od października 1939 r.; pierwsi więźniowie trafili do Auschwitz I 14 czerwca 1940 r.; pierwszy obóz zagłady w Chełmnie powstał w 1941 r.; konferencja w Wannsee odbyła się w styczniu 1942 r.; powstanie w getcie warszawskim rozpoczęło się 19 kwietnia 1943 r."
  },
  {
    "id": "R01_OKU_10",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "single_choice",
    "prompt": "Ile żydowskich dzieci uratowała od zagłady Irena Sendlerowa?",
    "options": [
      "niemal 2,5 tys.",
      "około 220",
      "około 720",
      "około 6 tys.",
      "około 90 tys.",
      "około 450 tys."
    ],
    "answer": 0,
    "explanation": "Irena Sendlerowa zorganizowała ratunek dla niemal 2,5 tys. żydowskich dzieci, wyprowadzając je z getta, zdobywając dokumenty i znajdując dla nich schronienie."
  },
  {
    "id": "R01_OKU_11",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "sort",
    "prompt": "Przyporządkuj osoby i grupy do rodzaju ich działalności.",
    "options": null,
    "items": [
      "Irena Sendlerowa",
      "rodzina Ulmów",
      "Mordechaj Anielewicz",
      "Jan Karski",
      "Vidkun Quisling",
      "rząd Vichy"
    ],
    "categories": [
      "pomoc Żydom",
      "opór lub informowanie o zbrodniach",
      "kolaboracja"
    ],
    "answer": {
      "pomoc Żydom": [
        "Irena Sendlerowa",
        "rodzina Ulmów"
      ],
      "opór lub informowanie o zbrodniach": [
        "Mordechaj Anielewicz",
        "Jan Karski"
      ],
      "kolaboracja": [
        "Vidkun Quisling",
        "rząd Vichy"
      ]
    },
    "explanation": "Irena Sendlerowa i rodzina Ulmów ratowali Żydów; Mordechaj Anielewicz kierował walką w getcie, a Jan Karski informował Zachód o zagładzie; Vidkun Quisling i rząd Vichy współpracowali z Niemcami."
  },
  {
    "id": "R01_OKU_12",
    "section": "Polityka Niemiec w okupowanej Europie",
    "type": "scenario",
    "prompt": "19 kwietnia 1943 r. Niemcy rozpoczynają likwidację największego getta w okupowanej Polsce i napotykają zbrojny opór Żydowskiej Organizacji Bojowej. W jakim mieście wybucha powstanie?",
    "options": [
      "Warszawa",
      "Kraków",
      "Łódź",
      "Lublin",
      "Wilno",
      "Grodno"
    ],
    "answer": 0,
    "image": "r01_getto_warszawskie.jpg",
    "explanation": "Powstanie wybuchło w getcie warszawskim. Powstańcy wiedzieli, że nie mają szans zwyciężyć, lecz walczyli o godną śmierć; walki trwały około miesiąca."
  },
  {
    "id": "R01_KOA_01",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "single_choice",
    "prompt": "Jak nazywała się amerykańska ustawa, która umożliwiła dostarczanie broni i zaopatrzenia państwom walczącym z III Rzeszą jeszcze przed formalnym wejściem USA do wojny?",
    "options": [
      "Lend-Lease Act",
      "Karta atlantycka",
      "pakt trzech",
      "pakt Ribbentrop-Mołotow",
      "linia Curzona",
      "plan Barbarossa"
    ],
    "answer": 0,
    "explanation": "Była to ustawa Lend-Lease Act. Dzięki niej Stany Zjednoczone mogły wspierać m.in. Wielką Brytanię sprzętem wojskowym i zaopatrzeniem."
  },
  {
    "id": "R01_KOA_02",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "true_false",
    "prompt": "Karta atlantycka została podpisana w sierpniu 1941 r., zanim Stany Zjednoczone formalnie przystąpiły do II wojny światowej.",
    "options": null,
    "answer": true,
    "explanation": "Franklin Delano Roosevelt i Winston Churchill podpisali Kartę atlantycką w sierpniu 1941 r.; USA weszły do wojny po ataku na Pearl Harbor w grudniu tego roku."
  },
  {
    "id": "R01_KOA_03",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, których przywódcy tworzyli tzw. wielką trójkę koalicji antyhitlerowskiej.",
    "options": [
      "Stany Zjednoczone",
      "Wielka Brytania",
      "ZSRS",
      "Niemcy",
      "Włochy",
      "Japonia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wielką trójkę tworzyli przywódcy Stanów Zjednoczonych, Wielkiej Brytanii i ZSRS."
  },
  {
    "id": "R01_KOA_04",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "fill_in",
    "prompt": "Niemiecka armia okrążona pod Stalingradem skapitulowała __________ lutego __________ r.",
    "options": null,
    "answer": [
      "2",
      "1943"
    ],
    "altAnswers": [
      [
        "2",
        "2."
      ],
      [
        "1943",
        "1943 r."
      ]
    ],
    "image": "r01_stalingrad.jpg",
    "explanation": "Kapitulacja wojsk niemieckich pod Stalingradem nastąpiła 2 lutego 1943 r. Bitwa stała się przełomem na froncie wschodnim."
  },
  {
    "id": "R01_KOA_05",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "riddle",
    "prompt": "Bitwa w Afryce Północnej, w której jesienią 1942 r. wojska brytyjskie pokonały siły Erwina Rommla, to bitwa pod...",
    "options": null,
    "answer": "El-Alamejn",
    "altAnswers": [
      "El-Alamejn",
      "El Alamejn",
      "El-Alamein",
      "El Alamein"
    ],
    "explanation": "Klęska wojsk niemiecko-włoskich pod El-Alamejn rozpoczęła ich odwrót w Afryce Północnej."
  },
  {
    "id": "R01_KOA_06",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie należy do przełomowych starć lat 1942-1943: Midway, El-Alamejn, Stalingrad, Westerplatte.",
    "options": null,
    "answer": "Westerplatte",
    "explanation": "Midway, El-Alamejn i Stalingrad były przełomowymi starciami lat 1942-1943; Westerplatte wiąże się z początkiem wojny w 1939 r."
  },
  {
    "id": "R01_KOA_07",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "scenario",
    "prompt": "Listopad 1943 r. Przywódcy USA, Wielkiej Brytanii i ZSRS spotykają się po raz pierwszy wspólnie. Uzgadniają m.in. otwarcie drugiego frontu we Francji. W jakim mieście odbywa się konferencja?",
    "options": [
      "Teheran",
      "Jałta",
      "Poczdam",
      "Reims",
      "Londyn",
      "Moskwa"
    ],
    "answer": 0,
    "explanation": "Pierwsze wspólne spotkanie wielkiej trójki odbyło się w Teheranie w listopadzie 1943 r."
  },
  {
    "id": "R01_KOA_08",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "match",
    "prompt": "Połącz bitwę z jej najważniejszym skutkiem.",
    "options": null,
    "left": [
      "Midway",
      "El-Alamejn",
      "Stalingrad",
      "Kursk"
    ],
    "right": [
      "przejście USA do ofensywy na Pacyfiku",
      "odwrót sił osi w Afryce",
      "przełom na froncie wschodnim",
      "trwałe przejęcie inicjatywy przez Armię Czerwoną"
    ],
    "answer": {
      "Midway": "przejście USA do ofensywy na Pacyfiku",
      "El-Alamejn": "odwrót sił osi w Afryce",
      "Stalingrad": "przełom na froncie wschodnim",
      "Kursk": "trwałe przejęcie inicjatywy przez Armię Czerwoną"
    },
    "image": "r01_stalingrad.jpg",
    "explanation": "Midway zapoczątkowało amerykańską ofensywę na Pacyfiku, El-Alamejn odwrót państw osi w Afryce, Stalingrad przełom na froncie wschodnim, a Kursk ostateczne przejęcie inicjatywy przez Armię Czerwoną."
  },
  {
    "id": "R01_KOA_09",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia przełomu wojennego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Konferencja w Teheranie",
      "Desant w Normandii",
      "Kapitulacja Niemców pod Stalingradem",
      "Klęska Niemców pod Kurskiem",
      "Kapitulacja sił osi w Afryce"
    ],
    "answer": [
      "Kapitulacja Niemców pod Stalingradem",
      "Kapitulacja sił osi w Afryce",
      "Klęska Niemców pod Kurskiem",
      "Konferencja w Teheranie",
      "Desant w Normandii"
    ],
    "explanation": "Kapitulacja pod Stalingradem nastąpiła 2 lutego 1943 r., siły osi w Afryce skapitulowały w maju 1943 r., bitwa pod Kurskiem rozegrała się latem 1943 r., konferencja w Teheranie w listopadzie 1943 r., a desant w Normandii 6 czerwca 1944 r."
  },
  {
    "id": "R01_KOA_10",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "single_choice",
    "prompt": "Kto był głównym dowódcą Alianckich Ekspedycyjnych Sił Zbrojnych podczas lądowania w Normandii?",
    "options": [
      "Dwight Eisenhower",
      "Bernard Montgomery",
      "Erwin Rommel",
      "Charles de Gaulle",
      "Gieorgij Żukow",
      "Iwan Koniew"
    ],
    "answer": 0,
    "explanation": "Głównym dowódcą alianckiej inwazji był amerykański generał Dwight Eisenhower; siłami lądowymi dowodził Bernard Montgomery."
  },
  {
    "id": "R01_KOA_11",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "sort",
    "prompt": "Przyporządkuj miejsca bitew do teatru działań wojennych.",
    "options": null,
    "items": [
      "Stalingrad",
      "Kursk",
      "El-Alamejn",
      "Monte Cassino",
      "Midway",
      "Morze Koralowe"
    ],
    "categories": [
      "front wschodni",
      "Afryka i Włochy",
      "Pacyfik"
    ],
    "answer": {
      "front wschodni": [
        "Stalingrad",
        "Kursk"
      ],
      "Afryka i Włochy": [
        "El-Alamejn",
        "Monte Cassino"
      ],
      "Pacyfik": [
        "Midway",
        "Morze Koralowe"
      ]
    },
    "explanation": "Stalingrad i Kursk leżały na froncie wschodnim; El-Alamejn i Monte Cassino wiązały się z kampanią śródziemnomorską; Midway i Morze Koralowe były starciami na Pacyfiku."
  },
  {
    "id": "R01_KOA_12",
    "section": "Wielka koalicja i przełom na frontach",
    "type": "scenario",
    "prompt": "6 czerwca 1944 r. zachodni alianci przeprowadzają wielki desant. Niemcy oczekują głównego uderzenia koło Calais, gdzie alianci ustawili atrapy sprzętu, ale prawdziwy atak następuje gdzie indziej. Gdzie?",
    "options": [
      "Normandia",
      "Sycylia",
      "Ardeny",
      "Dunkierka",
      "Bretania",
      "Korsyka"
    ],
    "answer": 0,
    "image": "r01_desant_normandia.jpg",
    "explanation": "Alianci wylądowali na plażach Normandii. Dezinformacja sprawiła, że znaczne siły niemieckie pozostały w rejonie Calais."
  },
  {
    "id": "R01_KON_01",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "single_choice",
    "prompt": "Gdzie Niemcy rozpoczęli swoją ostatnią dużą ofensywę w grudniu 1944 r.?",
    "options": [
      "w Ardenach",
      "w Normandii",
      "pod Kurskiem",
      "pod Stalingradem",
      "na Sycylii",
      "pod El-Alamejn"
    ],
    "answer": 0,
    "explanation": "Ostatnia duża ofensywa Hitlera rozpoczęła się w belgijskich Ardenach. Po jej załamaniu wojska III Rzeszy nie były już zdolne do większych działań ofensywnych."
  },
  {
    "id": "R01_KON_02",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "true_false",
    "prompt": "W 1944 r. Finlandia, Bułgaria i Rumunia zerwały sojusz z Hitlerem i przyłączyły się do koalicji antyfaszystowskiej.",
    "options": null,
    "answer": true,
    "explanation": "Sukcesy Armii Czerwonej skłoniły Finlandię, Bułgarię i Rumunię do odstąpienia od dotychczasowego sojusznika i przejścia na stronę koalicji antyfaszystowskiej."
  },
  {
    "id": "R01_KON_03",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "multi_select",
    "prompt": "Zaznacz decyzje podjęte przez wielką trójkę na konferencji w Jałcie w lutym 1945 r.",
    "options": [
      "podział Niemiec na cztery strefy okupacyjne",
      "linia Curzona jako wschodnia granica Polski",
      "wejście ZSRS do wojny z Japonią po kapitulacji Niemiec",
      "rekompensata terytorialna Polski na zachodzie",
      "likwidacja RAF",
      "oddanie całej Francji Niemcom"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_konferencja_jalta.jpg",
    "explanation": "W Jałcie uzgodniono m.in. podział Niemiec na cztery strefy okupacyjne, reparacje i rozliczenie zbrodniarzy, linię Curzona jako wschodnią granicę Polski, rekompensatę terytorialną Polski na zachodzie oraz wejście ZSRS do wojny z Japonią trzy miesiące po kapitulacji Niemiec."
  },
  {
    "id": "R01_KON_04",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "fill_in",
    "prompt": "Bezwarunkową kapitulację Niemiec podpisano 7 maja 1945 r. w __________, a na żądanie Stalina powtórzono ją w nocy z 8 na 9 maja w __________.",
    "options": null,
    "answer": [
      "Reims",
      "Berlinie"
    ],
    "altAnswers": [
      [
        "Reims"
      ],
      [
        "Berlinie",
        "Berlin"
      ]
    ],
    "explanation": "Pierwszy akt kapitulacji podpisano w Reims, a drugi w berlińskiej kwaterze marszałka Żukowa."
  },
  {
    "id": "R01_KON_05",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "riddle",
    "prompt": "Powojenny podział świata na strefy wpływów mocarstw, ukształtowany przez decyzje konferencji w Jałcie i Poczdamie, nazwano...",
    "options": null,
    "answer": "ład jałtański",
    "altAnswers": [
      "ład jałtański",
      "lad jaltanski",
      "porządek jałtański",
      "porzadek jaltanski"
    ],
    "explanation": "Ustalenia mocarstw stworzyły porządek, nazywany także ładem jałtańskim."
  },
  {
    "id": "R01_KON_06",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce niezwiązane bezpośrednio z końcową fazą wojny na Pacyfiku: Hiroszima, Nagasaki, Okinawa, Ardeny.",
    "options": null,
    "answer": "Ardeny",
    "explanation": "Ardeny były miejscem ostatniej wielkiej ofensywy niemieckiej w Europie; Hiroszima, Nagasaki i Okinawa wiążą się z końcową fazą wojny przeciw Japonii."
  },
  {
    "id": "R01_KON_07",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "scenario",
    "prompt": "Amerykańskie dowództwo chce zbliżać się do Japonii, zdobywając tylko wybrane strategiczne wyspy i omijając część silnie bronionych pozycji. Jak nazwano tę taktykę?",
    "options": [
      "taktyka żabich skoków",
      "blitzkrieg",
      "dziwna wojna",
      "wojna zimowa",
      "nalot dywanowy",
      "wojna podwodna"
    ],
    "answer": 0,
    "explanation": "Strategię stopniowego zdobywania strategicznych wysp nazwano taktyką żabich skoków."
  },
  {
    "id": "R01_KON_08",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "match",
    "prompt": "Połącz wydarzenie z miejscem.",
    "options": null,
    "left": [
      "pierwszy akt kapitulacji Niemiec",
      "konferencja z lipca i sierpnia 1945 r.",
      "pierwszy atak atomowy",
      "zdobycie stolicy III Rzeszy"
    ],
    "right": [
      "Reims",
      "Poczdam",
      "Hiroszima",
      "Berlin"
    ],
    "answer": {
      "pierwszy akt kapitulacji Niemiec": "Reims",
      "konferencja z lipca i sierpnia 1945 r.": "Poczdam",
      "pierwszy atak atomowy": "Hiroszima",
      "zdobycie stolicy III Rzeszy": "Berlin"
    },
    "explanation": "Kapitulację Niemiec podpisano w Reims, konferencję zwycięskich mocarstw z lata 1945 r. zorganizowano w Poczdamie, pierwszą bombę atomową zrzucono na Hiroszimę, a ostateczną kapitulację Japonii podpisano po zakończeniu walk na Pacyfiku."
  },
  {
    "id": "R01_KON_09",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia końcowej fazy wojny w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Zrzucenie bomby na Hiroszimę",
      "Konferencja w Jałcie",
      "Kapitulacja Japonii",
      "Ofensywa w Ardenach",
      "Kapitulacja Niemiec w Reims",
      "Samobójstwo Hitlera"
    ],
    "answer": [
      "Ofensywa w Ardenach",
      "Konferencja w Jałcie",
      "Samobójstwo Hitlera",
      "Kapitulacja Niemiec w Reims",
      "Zrzucenie bomby na Hiroszimę",
      "Kapitulacja Japonii"
    ],
    "explanation": "Ofensywa w Ardenach rozpoczęła się w grudniu 1944 r.; konferencja w Jałcie odbyła się w lutym 1945 r.; Hitler popełnił samobójstwo 30 kwietnia; kapitulację Niemiec podpisano 7 maja; bombę na Hiroszimę zrzucono 6 sierpnia; Japonia skapitulowała 2 września 1945 r."
  },
  {
    "id": "R01_KON_10",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "single_choice",
    "prompt": "Jaka linia stała się podstawą zachodniej granicy Polski z Niemcami po ustaleniach poczdamskich?",
    "options": [
      "Odra i Nysa Łużycka",
      "linia Curzona",
      "linia Maginota",
      "Wisła i Bug",
      "Ren i Men",
      "Łaba i Odra"
    ],
    "answer": 0,
    "explanation": "Polsce przypadły dotychczasowe tereny niemieckie na wschód od Odry i Nysy Łużyckiej jako rekompensata za utracone Kresy Wschodnie."
  },
  {
    "id": "R01_KON_11",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "sort",
    "prompt": "Przyporządkuj miejsca do europejskiego lub pacyficznego finału wojny.",
    "options": null,
    "items": [
      "Berlin",
      "Łaba",
      "Ardeny",
      "Iwó-jima",
      "Okinawa",
      "Hiroszima"
    ],
    "categories": [
      "Europa",
      "Pacyfik"
    ],
    "answer": {
      "Europa": [
        "Berlin",
        "Łaba",
        "Ardeny"
      ],
      "Pacyfik": [
        "Iwó-jima",
        "Okinawa",
        "Hiroszima"
      ]
    },
    "explanation": "Berlin, Łaba i Ardeny wiążą się z końcową fazą walk w Europie, a Iwó-jima, Okinawa i Hiroszima - z końcową fazą wojny na Pacyfiku."
  },
  {
    "id": "R01_KON_12",
    "section": "Klęska państw osi i zakończenie II wojny",
    "type": "scenario",
    "prompt": "Po zrzuceniu dwóch bomb atomowych i rozpoczęciu sowieckiej ofensywy w Mandżurii cesarz Hirohito zgadza się na bezwarunkową kapitulację. Kiedy podpisano kapitulację Japonii?",
    "options": [
      "2 września 1945 r.",
      "8 maja 1945 r.",
      "6 sierpnia 1945 r.",
      "9 sierpnia 1945 r.",
      "30 kwietnia 1945 r.",
      "6 czerwca 1944 r."
    ],
    "answer": 0,
    "image": "r01_bomba_atomowa_hiroshima.jpg",
    "explanation": "Bezwarunkową kapitulację Japonii podpisano 2 września 1945 r., co zakończyło II wojnę światową."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Gdzie w 1941 r. powstał pierwszy niemiecki obóz zagłady?",
    "options": [
      "Chełmno nad Nerem",
      "Treblinka",
      "Sobibór",
      "Bełżec",
      "Auschwitz I",
      "Dachau"
    ],
    "answer": 0,
    "explanation": "Pierwszy obóz zagłady powstał w 1941 r. w Chełmnie nad Nerem, po niemiecku Kulmhof am Nehr."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz państwa opanowane przez Niemcy w 1940 r.",
    "options": [
      "Dania",
      "Norwegia",
      "Belgia",
      "Luksemburg",
      "Holandia",
      "Francja",
      "Grecja",
      "Jugosławia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "W 1940 r. III Rzesza opanowała Danię, Norwegię, Belgię, Luksemburg, Holandię i Francję."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Westerplatte broniło około __________ polskich żołnierzy. Zakładano obronę przez __________ godzin, a placówka wytrzymała siedem dni.",
    "options": null,
    "answer": [
      "220",
      "12"
    ],
    "altAnswers": [
      [
        "220",
        "około 220",
        "ok. 220"
      ],
      [
        "12",
        "12 godzin"
      ]
    ],
    "image": "r01_westerplatte_obrona.jpg",
    "explanation": "Na Westerplatte stacjonowało około 220 żołnierzy. Plan zakładał 12 godzin obrony do nadejścia pomocy, która jednak nie nadeszła; obrońcy walczyli siedem dni."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz polskiego dowódcę lub działacza z miejscem albo formacją, z którą był bezpośrednio związany we wrześniu 1939 r.",
    "options": null,
    "left": [
      "Władysław Raginis",
      "Franciszek Kleeberg",
      "Konrad Guderski",
      "Walerian Czuma"
    ],
    "right": [
      "Wizna",
      "SGO Polesie",
      "Poczta Polska w Gdańsku",
      "Warszawa"
    ],
    "answer": {
      "Władysław Raginis": "Wizna",
      "Franciszek Kleeberg": "SGO Polesie",
      "Konrad Guderski": "Poczta Polska w Gdańsku",
      "Walerian Czuma": "Warszawa"
    },
    "image": "r01_wizna_umocnienia.jpg",
    "explanation": "Władysław Raginis dowodził obroną Wizny, Franciszek Kleeberg SGO Polesie, Konrad Guderski obroną Poczty Polskiej w Gdańsku, a Walerian Czuma obroną Warszawy."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z różnych frontów II wojny światowej w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Konferencja w Wannsee",
      "Atak na Pearl Harbor",
      "Desant w Normandii",
      "Atak Niemiec na Polskę",
      "Początek wojny zimowej",
      "Atak Niemiec na ZSRS"
    ],
    "answer": [
      "Atak Niemiec na Polskę",
      "Początek wojny zimowej",
      "Atak Niemiec na ZSRS",
      "Atak na Pearl Harbor",
      "Konferencja w Wannsee",
      "Desant w Normandii"
    ],
    "explanation": "Chronologia: atak na Polskę - 1 września 1939 r.; początek wojny zimowej - listopad 1939 r.; atak na ZSRS - 22 czerwca 1941 r.; Pearl Harbor - 7 grudnia 1941 r.; Wannsee - styczeń 1942 r.; Normandia - 6 czerwca 1944 r."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Latem 1942 r. niemieckie wojska kierują ofensywę na południe ZSRS. Jednym z ich celów jest nadwołżańskie miasto będące ważnym węzłem komunikacyjnym; jego zdobycie utrudniłoby Sowietom zaopatrywanie się w kaukaską ropę. O jakie miasto chodzi?",
    "options": [
      "Stalingrad",
      "Leningrad",
      "Moskwa",
      "Kijów",
      "Berlin",
      "Warszawa"
    ],
    "answer": 0,
    "image": "r01_stalingrad.jpg",
    "explanation": "Chodziło o Stalingrad. Położenie nad Wołgą czyniło go ważnym węzłem komunikacyjnym i miało znaczenie dla dostaw ropy z Kaukazu."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, której działalność nie była związana z pomocą Żydom lub przekazywaniem informacji o ich zagładzie: Irena Sendlerowa, Jan Karski, Józef i Wiktoria Ulmowie, Vidkun Quisling.",
    "options": null,
    "answer": "Vidkun Quisling",
    "explanation": "Vidkun Quisling stał na czele kolaboracyjnego rządu norweskiego. Sendlerowa i Ulmowie pomagali Żydom, a Karski informował Zachód o ich zagładzie."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka część terytorium Francji z Paryżem znalazła się pod hitlerowską okupacją po kapitulacji w czerwcu 1940 r.?",
    "options": [
      "2/3",
      "1/4",
      "1/3",
      "1/2",
      "3/4",
      "całość"
    ],
    "answer": 0,
    "explanation": "Po kapitulacji Francji około 2/3 jej terytorium, wraz z Paryżem, znalazło się pod okupacją niemiecką; na południu utworzono zależne Państwo Francuskie ze stolicą w Vichy."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Bitwa o Atlantyk trwała do końca wojny, a największe nasilenie działań przypadło na lata 1942-1943.",
    "options": null,
    "answer": true,
    "image": "r01_u_boot_atlantyk.jpg",
    "explanation": "Niemiecka wojna podwodna przeciw brytyjskim szlakom zaopatrzeniowym trwała od 1940 r. do końca wojny, a szczególnie intensywna była w latach 1942-1943."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj decyzje do konferencji wielkiej trójki.",
    "options": null,
    "items": [
      "otwarcie drugiego frontu we Francji",
      "linia Curzona jako podstawa wschodniej granicy Polski",
      "cztery strefy okupacyjne Niemiec",
      "wejście ZSRS do wojny z Japonią trzy miesiące po kapitulacji Niemiec",
      "15% sowieckich reparacji dla Polski",
      "przesiedlenie Niemców z Polski Czechosłowacji i Węgier"
    ],
    "categories": [
      "Teheran",
      "Jałta",
      "Poczdam"
    ],
    "answer": {
      "Teheran": [
        "otwarcie drugiego frontu we Francji",
        "linia Curzona jako podstawa wschodniej granicy Polski"
      ],
      "Jałta": [
        "cztery strefy okupacyjne Niemiec",
        "wejście ZSRS do wojny z Japonią trzy miesiące po kapitulacji Niemiec"
      ],
      "Poczdam": [
        "15% sowieckich reparacji dla Polski",
        "przesiedlenie Niemców z Polski Czechosłowacji i Węgier"
      ]
    },
    "explanation": "W Teheranie uzgodniono otwarcie drugiego frontu we Francji i przyjęto linię Curzona dla wschodniej granicy Polski. W Jałcie doprecyzowano cztery strefy okupacyjne Niemiec i wejście ZSRS do wojny z Japonią po trzech miesiącach. W Poczdamie ustalono m.in. polskie 15% z sowieckiej puli reparacji oraz przesiedlenie ludności niemieckiej z Polski, Czechosłowacji i Węgier."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pierwszą bombę atomową zrzucono na Hiroszimę __________ sierpnia 1945 r., drugą na Nagasaki __________ sierpnia, a kapitulację Japonii podpisano __________ września 1945 r.",
    "options": null,
    "answer": [
      "6",
      "9",
      "2"
    ],
    "altAnswers": [
      [
        "6",
        "6."
      ],
      [
        "9",
        "9."
      ],
      [
        "2",
        "2."
      ]
    ],
    "image": "r01_bomba_atomowa_hiroshima.jpg",
    "explanation": "Daty końca wojny na Pacyfiku to 6 sierpnia - Hiroszima, 9 sierpnia - Nagasaki i 2 września 1945 r. - podpisanie kapitulacji Japonii."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jakie łacińskie słowa dodano do herbu Warszawy 9 listopada 1939 r., aby podkreślić bohaterską obronę miasta?",
    "options": null,
    "answer": "Semper invicta",
    "altAnswers": [
      "Semper invicta",
      "semper invicta"
    ],
    "explanation": "Do herbu Warszawy dodano napis Semper invicta, czyli Zawsze niezwyciężona, oraz Order Virtuti Militari."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile U-bootów miały Niemcy na początku wojny?",
    "options": [
      "57",
      "22",
      "220",
      "751",
      "1160",
      "2800"
    ],
    "answer": 0,
    "image": "r01_u_boot_atlantyk.jpg",
    "explanation": "Na początku wojny Niemcy dysponowali 57 U-bootami. Do końca wojny zwodowano ponad 1160 takich jednostek."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sprzęt wojskowy z właściwą cechą.",
    "options": null,
    "left": [
      "Ju-87 Stuka",
      "Tygrys",
      "T-34",
      "lotniskowiec"
    ],
    "right": [
      "bombowiec nurkujący z syrenami",
      "gruby pancerz i kosztowna produkcja",
      "prosta konstrukcja i masowa produkcja",
      "ruchome lotnisko dla samolotów"
    ],
    "answer": {
      "Ju-87 Stuka": "bombowiec nurkujący z syrenami",
      "Tygrys": "gruby pancerz i kosztowna produkcja",
      "T-34": "prosta konstrukcja i masowa produkcja",
      "lotniskowiec": "ruchome lotnisko dla samolotów"
    },
    "image": "r01_czolgi_i_lotnictwo.jpg",
    "explanation": "Stuka był bombowcem nurkującym z charakterystycznymi syrenami, Tygrys miał gruby pancerz i znakomitą armatę, lecz był kosztowny i paliwożerny, T-34 był prosty i tani w produkcji, a lotniskowiec był ruchomym lotniskiem dla samolotów bojowych."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W Warszawie w 1941 r. dzienna racja żywnościowa dla ludności polskiej wynosiła __________ kcal, a dla ludności żydowskiej __________ kcal.",
    "options": null,
    "answer": [
      "699",
      "184"
    ],
    "altAnswers": [
      [
        "699",
        "699 kcal"
      ],
      [
        "184",
        "184 kcal"
      ]
    ],
    "explanation": "Tabela racji żywnościowych podaje 699 kcal dla ludności polskiej i zaledwie 184 kcal dla ludności żydowskiej, przy normie fizjologicznej 2400 kcal."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "II wojna światowa",
  icon: "🌍",
  sectionOrder: [
    "Wojna obronna Polski",
    "Działania wojenne w latach 1939-1941",
    "Polityka Niemiec w okupowanej Europie",
    "Wielka koalicja i przełom na frontach",
    "Klęska państw osi i zakończenie II wojny"
  ],
  sectionIcons: {
    "Wojna obronna Polski": "🛡️",
    "Działania wojenne w latach 1939-1941": "⚔️",
    "Polityka Niemiec w okupowanej Europie": "🕯️",
    "Wielka koalicja i przełom na frontach": "🤝",
    "Klęska państw osi i zakończenie II wojny": "🏳️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
