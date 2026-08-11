// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WIE  = Krajobraz wielkomiejski
//   WAR  = Warszawa
//   SLA  = Wyżyna Śląska
//   KON  = Konurbacja i Śląsk
//   LUB  = Wyżyna Lubelska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_WIE_01",
    "section": "Krajobraz wielkomiejski",
    "type": "single_choice",
    "prompt": "Co oznaczają korki, trąbienie, tłumy na chodnikach i wysokie budynki?",
    "explanation": "Taki opis wskazuje na wielkie miasto: dużo samochodów, gęsta zabudowa i tłumy ludzi to cechy krajobrazu wielkomiejskiego.",
    "options": [
      "Wielkie miasto",
      "Wieś rolnicza",
      "Park narodowy",
      "Wąwóz lessowy",
      "Kopalnia węgla",
      "Pastwisko"
    ],
    "answer": 0
  },
  {
    "id": "R04_WIE_02",
    "section": "Krajobraz wielkomiejski",
    "type": "true_false",
    "prompt": "Wielkie miasto jest przykładem krajobrazu antropogenicznego.",
    "explanation": "Wielkie miasto opisano jako teren o krajobrazie antropogenicznym, czyli silnie przekształconym przez człowieka.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_WIE_03",
    "section": "Krajobraz wielkomiejski",
    "type": "fill_in",
    "prompt": "Duże miasto dzieli się na __________, a jego centrum nazywamy __________.",
    "explanation": "Duże miasto jest podzielone na dzielnice, a centrum dużego miasta to śródmieście.",
    "options": null,
    "answer": [
      "dzielnice",
      "śródmieściem"
    ],
    "altAnswers": [
      [
        "dzielnice",
        "dzielnicami"
      ],
      [
        "śródmieściem",
        "śródmieście"
      ]
    ]
  },
  {
    "id": "R04_WIE_04",
    "section": "Krajobraz wielkomiejski",
    "type": "multi_select",
    "prompt": "Zaznacz typy dzielnic.",
    "explanation": "Podano dzielnice mieszkaniowe, przemysłowe i handlowe jako przykłady części dużego miasta.",
    "options": [
      "mieszkaniowe",
      "przemysłowe",
      "handlowe",
      "lodowcowe",
      "pustynne",
      "górnicze"
    ],
    "answer": [
      0,
      1,
      2
    ]
  },
  {
    "id": "R04_WIE_05",
    "section": "Krajobraz wielkomiejski",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do cech wielkiego miasta: biurowce, tłumy na chodnikach, pola uprawne, korki.",
    "explanation": "Pola uprawne są charakterystyczne raczej dla krajobrazu rolniczego, a nie dla wielkiego miasta.",
    "options": null,
    "answer": "pola uprawne",
    "image": "r04_wielkie_miasto.jpg"
  },
  {
    "id": "R04_WIE_06",
    "section": "Krajobraz wielkomiejski",
    "type": "single_choice",
    "prompt": "Jak nazywa się centrum dużego miasta?",
    "explanation": "Centrum dużego miasta nazywamy śródmieściem.",
    "options": [
      "śródmieście",
      "przedmieście",
      "wąwóz",
      "konurbacja",
      "hałda",
      "pastwisko"
    ],
    "answer": 0,
    "image": "r04_srodmiescie_warszawy.jpg"
  },
  {
    "id": "R04_WIE_07",
    "section": "Krajobraz wielkomiejski",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "explanation": "Stolica państwa, dzielnica i osiedle to pojęcia wyjaśnione przy opisie wielkiego miasta.",
    "options": null,
    "left": [
      "stolica państwa",
      "dzielnica",
      "osiedle"
    ],
    "right": [
      "miasto z siedzibą władz państwowych",
      "część dużego miasta",
      "obszar o ujednoliconej zabudowie mieszkaniowej"
    ],
    "answer": {
      "stolica państwa": "miasto z siedzibą władz państwowych",
      "dzielnica": "część dużego miasta",
      "osiedle": "obszar o ujednoliconej zabudowie mieszkaniowej"
    }
  },
  {
    "id": "R04_WIE_08",
    "section": "Krajobraz wielkomiejski",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do części miasta.",
    "explanation": "Śródmieście ma zwartą zabudowę i wiele urzędów oraz biurowców, a osiedla mieszkaniowe obejmują bloki, szkoły i place zabaw.",
    "options": null,
    "items": [
      "biurowce",
      "urzędy",
      "centra handlowe",
      "bloki",
      "szkoły",
      "place zabaw"
    ],
    "categories": [
      "śródmieście",
      "osiedle mieszkaniowe"
    ],
    "answer": {
      "śródmieście": [
        "biurowce",
        "urzędy",
        "centra handlowe"
      ],
      "osiedle mieszkaniowe": [
        "bloki",
        "szkoły",
        "place zabaw"
      ]
    },
    "image": "r04_osiedle_mieszkaniowe.jpg"
  },
  {
    "id": "R04_WIE_09",
    "section": "Krajobraz wielkomiejski",
    "type": "single_choice",
    "prompt": "Jakie budynki przeważają bliżej centrum na obszarach z zabudową mieszkaniową?",
    "explanation": "Bliżej centrum w zabudowie mieszkaniowej przeważają budynki wielorodzinne, czyli bloki.",
    "options": [
      "bloki",
      "domy jednorodzinne",
      "kopalnie",
      "pałace na wodzie",
      "stodoły",
      "wąwozy"
    ],
    "answer": 0
  },
  {
    "id": "R04_WIE_10",
    "section": "Krajobraz wielkomiejski",
    "type": "true_false",
    "prompt": "Dalej od centrum dużego miasta dominuje niska zabudowa domów jednorodzinnych.",
    "explanation": "Dalej od centrum dominuje niska zabudowa domów jednorodzinnych.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_WIE_11",
    "section": "Krajobraz wielkomiejski",
    "type": "multi_select",
    "prompt": "Co może znajdować się na terenie osiedla mieszkaniowego?",
    "explanation": "Na osiedlach oprócz budynków mieszkalnych mogą być szkoły, przedszkola, place zabaw, tereny rekreacyjne, przychodnie, sklepy i inne punkty usługowe.",
    "options": [
      "szkoły",
      "przedszkola",
      "place zabaw",
      "przychodnie lekarskie",
      "kopalnie węgla",
      "porty śródlądowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R04_WIE_12",
    "section": "Krajobraz wielkomiejski",
    "type": "scenario",
    "prompt": "Idziesz chodnikiem między wysokimi budynkami. Wokół jest wielu przechodniów, a na ulicy słychać trąbienie samochodów. Jaki krajobraz rozpoznajesz?",
    "explanation": "Opis odpowiada krajobrazowi wielkomiejskiemu, bo pojawiają się tłumy, wysoka zabudowa i duże natężenie ruchu.",
    "options": [
      "krajobraz wielkomiejski",
      "krajobraz rolniczy",
      "krajobraz pierwotny",
      "krajobraz leśny"
    ],
    "answer": 0
  },
  {
    "id": "R04_WAR_01",
    "section": "Warszawa",
    "type": "single_choice",
    "prompt": "Które miasto jest największym miastem Polski i jej stolicą?",
    "explanation": "Wskazuje się Warszawę jako największe miasto Polski i zarazem stolicę państwa.",
    "options": [
      "Warszawa",
      "Kraków",
      "Gdańsk",
      "Poznań",
      "Wrocław",
      "Łódź"
    ],
    "answer": 0
  },
  {
    "id": "R04_WAR_02",
    "section": "Warszawa",
    "type": "riddle",
    "prompt": "Gdańsk razem z Sopotem i Gdynią tworzy...",
    "explanation": "Trójmiasto tworzą Gdańsk, Sopot i Gdynia.",
    "options": null,
    "answer": "Trójmiasto",
    "altAnswers": [
      "Trójmiasto",
      "Trojmiasto",
      "Trójmiasto z Gdańska, Sopotu i Gdyni"
    ]
  },
  {
    "id": "R04_WAR_03",
    "section": "Warszawa",
    "type": "multi_select",
    "prompt": "Zaznacz duże miasta Polski poza Warszawą.",
    "explanation": "Jako inne duże miasta wymienia się Kraków, Wrocław, Łódź, Poznań i Gdańsk.",
    "options": [
      "Kraków",
      "Wrocław",
      "Łódź",
      "Poznań",
      "Gdańsk",
      "Nałęczów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    "id": "R04_WAR_04",
    "section": "Warszawa",
    "type": "true_false",
    "prompt": "W Warszawie mieszka prawie 1,9 mln osób.",
    "explanation": "W Warszawie mieszka prawie 1,9 mln osób.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_WAR_05",
    "section": "Warszawa",
    "type": "fill_in",
    "prompt": "W śródmieściu Warszawy mieszczą się między innymi Pałac Prezydencki, __________, gmachy rządowe i urzędy państwowe.",
    "explanation": "W śródmieściu Warszawy znajdują się między innymi Pałac Prezydencki, Parlament, gmachy rządowe i urzędy państwowe.",
    "options": null,
    "answer": [
      "Parlament"
    ],
    "altAnswers": [
      [
        "Parlament",
        "Sejm i Senat",
        "parlament"
      ]
    ]
  },
  {
    "id": "R04_WAR_06",
    "section": "Warszawa",
    "type": "single_choice",
    "prompt": "Ile metrów wysokości wraz z iglicą ma Varso Tower?",
    "explanation": "Varso Tower ma 310 metrów wysokości wraz z iglicą.",
    "options": [
      "310 metrów",
      "408 metrów",
      "300 metrów",
      "27 metrów",
      "1,9 metra",
      "125 metrów"
    ],
    "answer": 0,
    "image": "r04_srodmiescie_warszawy.jpg"
  },
  {
    "id": "R04_WAR_07",
    "section": "Warszawa",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do obiektów śródmieścia Warszawy: Pałac Prezydencki, Parlament, gmachy rządowe, kopalnia węgla kamiennego.",
    "explanation": "Kopalnia węgla kamiennego jest związana z Wyżyną Śląską, a nie z obiektami śródmieścia Warszawy.",
    "options": null,
    "answer": "kopalnia węgla kamiennego"
  },
  {
    "id": "R04_WAR_08",
    "section": "Warszawa",
    "type": "multi_select",
    "prompt": "Co wchodzi w skład rozwiniętej sieci komunikacyjnej dużego miasta?",
    "explanation": "Sieć komunikacyjna obejmuje ulice i aleje, autobusy miejskie, linie tramwajowe, linie kolejowe oraz metro.",
    "options": [
      "ulice i aleje",
      "autobusy miejskie",
      "linie tramwajowe",
      "linie kolejowe",
      "metro",
      "wąwozy lessowe"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r04_warszawskie_metro.jpg"
  },
  {
    "id": "R04_WAR_09",
    "section": "Warszawa",
    "type": "true_false",
    "prompt": "Warszawa jest jedynym miastem w Polsce, w którym funkcjonuje metro.",
    "explanation": "Warszawa to jedyne miasto w Polsce z metrem.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_WAR_10",
    "section": "Warszawa",
    "type": "single_choice",
    "prompt": "Jak nazywa się największy port lotniczy położony w stolicy?",
    "explanation": "Największym portem lotniczym w stolicy jest Lotnisko Chopina.",
    "options": [
      "Lotnisko Chopina",
      "Lotnisko Górnicze",
      "Port Gdański",
      "Metro Warszawskie",
      "Varso Tower",
      "Park Śląski"
    ],
    "answer": 0
  },
  {
    "id": "R04_WAR_11",
    "section": "Warszawa",
    "type": "match",
    "prompt": "Połącz atrakcję Warszawy z opisem.",
    "explanation": "Wymienia się najważniejsze atrakcje turystyczne Warszawy i krótko opisuje, co można z nimi kojarzyć.",
    "options": null,
    "left": [
      "Stare Miasto",
      "Pałac Kultury i Nauki",
      "pałac w Wilanowie",
      "Stadion Narodowy"
    ],
    "right": [
      "Zamek Królewski i Kolumna Zygmunta III Wazy",
      "muzea, kino, teatry i panorama z 30. piętra",
      "podmiejska rezydencja królewska z końca XVII wieku",
      "miejsce ważnych wydarzeń sportowych i koncertów"
    ],
    "answer": {
      "Stare Miasto": "Zamek Królewski i Kolumna Zygmunta III Wazy",
      "Pałac Kultury i Nauki": "muzea, kino, teatry i panorama z 30. piętra",
      "pałac w Wilanowie": "podmiejska rezydencja królewska z końca XVII wieku",
      "Stadion Narodowy": "miejsce ważnych wydarzeń sportowych i koncertów"
    },
    "image": "r04_atrakcje_warszawy.jpg"
  },
  {
    "id": "R04_WAR_12",
    "section": "Warszawa",
    "type": "riddle",
    "prompt": "Jeden z najbardziej znanych warszawskich parków z pałacem Na Wodzie to...",
    "explanation": "Łazienki Królewskie to jeden z najbardziej znanych warszawskich parków, opisany razem z pałacem Na Wodzie.",
    "options": null,
    "answer": "Łazienki Królewskie",
    "altAnswers": [
      "Łazienki Królewskie",
      "Lazienki Krolewskie",
      "Łazienki"
    ],
    "image": "r04_atrakcje_warszawy.jpg"
  },
  {
    "id": "R04_SLA_01",
    "section": "Wyżyna Śląska",
    "type": "single_choice",
    "prompt": "Który region opisano jako jeden z najbardziej przekształconych przez człowieka w Polsce?",
    "explanation": "Wskazuje się Wyżynę Śląską jako region silnie przekształcony przez człowieka.",
    "options": [
      "Wyżyna Śląska",
      "Wyżyna Lubelska",
      "Pobrzeże Bałtyckie",
      "Pojezierze Mazurskie",
      "Nizina Mazowiecka",
      "Tatry"
    ],
    "answer": 0
  },
  {
    "id": "R04_SLA_02",
    "section": "Wyżyna Śląska",
    "type": "multi_select",
    "prompt": "Zaznacz elementy krajobrazu miejsko-przemysłowego Wyżyny Śląskiej.",
    "explanation": "W krajobrazie Wyżyny Śląskiej dominują między innymi zabudowa mieszkaniowa, kopalnie, fabryki i duże zakłady przetwórcze lub produkcyjne.",
    "options": [
      "zabudowa mieszkaniowa",
      "kopalnie",
      "fabryki",
      "duże zakłady produkcyjne",
      "lodowce górskie",
      "wąwozy lessowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "R04_SLA_03",
    "section": "Wyżyna Śląska",
    "type": "true_false",
    "prompt": "Teren Wyżyny Śląskiej jest lekko pofałdowany.",
    "explanation": "Teren Wyżyny Śląskiej jest lekko pofałdowany.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_SLA_04",
    "section": "Wyżyna Śląska",
    "type": "fill_in",
    "prompt": "Najwyższym wzniesieniem Wyżyny Śląskiej jest __________ o wysokości __________.",
    "explanation": "Najwyższym wzniesieniem regionu jest Góra Świętej Anny, która ma 408 m n.p.m.",
    "options": null,
    "answer": [
      "Góra Świętej Anny",
      "408 m n.p.m."
    ],
    "altAnswers": [
      [
        "Góra Świętej Anny",
        "Gora Swietej Anny"
      ],
      [
        "408 m n.p.m.",
        "408 m",
        "408"
      ]
    ]
  },
  {
    "id": "R04_SLA_05",
    "section": "Wyżyna Śląska",
    "type": "single_choice",
    "prompt": "Czym jest Góra Świętej Anny?",
    "explanation": "Góra Świętej Anny jest pozostałością po wulkanie sprzed około 27 mln lat.",
    "options": [
      "pozostałością po wulkanie",
      "hałdą z popiołu",
      "wąwozem lessowym",
      "lotniskiem",
      "drapaczem chmur",
      "kopalnią"
    ],
    "answer": 0,
    "image": "r04_gora_swietej_anny.jpg"
  },
  {
    "id": "R04_SLA_06",
    "section": "Wyżyna Śląska",
    "type": "riddle",
    "prompt": "Najważniejszy surowiec mineralny Wyżyny Śląskiej to...",
    "explanation": "Największe znaczenie wśród surowców mineralnych Wyżyny Śląskiej ma węgiel kamienny.",
    "options": null,
    "answer": "węgiel kamienny",
    "altAnswers": [
      "węgiel kamienny",
      "wegiel kamienny",
      "węgiel"
    ]
  },
  {
    "id": "R04_SLA_07",
    "section": "Wyżyna Śląska",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania węgla kamiennego w poprawnej kolejności.",
    "explanation": "Węgiel kamienny powstał ze szczątków roślin, które znalazły się pod ziemią, a następnie pod wpływem ciśnienia, ciepła i braku tlenu zamieniły się w skały.",
    "options": null,
    "items": [
      "Szczątki znalazły się pod ziemią",
      "Rośliny obumarły",
      "Ciśnienie, ciepło i brak tlenu działały przez długi czas",
      "Szczątki zamieniły się w skały"
    ],
    "answer": [
      "Rośliny obumarły",
      "Szczątki znalazły się pod ziemią",
      "Ciśnienie, ciepło i brak tlenu działały przez długi czas",
      "Szczątki zamieniły się w skały"
    ],
    "image": "r04_kopalnia_slaska.jpg"
  },
  {
    "id": "R04_SLA_08",
    "section": "Wyżyna Śląska",
    "type": "multi_select",
    "prompt": "Do czego wykorzystuje się węgiel kamienny?",
    "explanation": "Węgiel kamienny wykorzystuje się do wytwarzania energii elektrycznej, ogrzewania domów oraz produkcji tworzyw sztucznych, barwników, leków i kosmetyków.",
    "options": [
      "wytwarzanie energii elektrycznej",
      "ogrzewanie domów",
      "produkcja tworzyw sztucznych",
      "produkcja barwników",
      "produkcja leków i kosmetyków",
      "tworzenie wąwozów lessowych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r04_wegiel_kamienny.jpg"
  },
  {
    "id": "R04_SLA_09",
    "section": "Wyżyna Śląska",
    "type": "true_false",
    "prompt": "Węgiel kamienny jest wykorzystywany wyłącznie do ogrzewania domów.",
    "explanation": "To fałsz, ponieważ wymienia się także energię elektryczną, tworzywa sztuczne, barwniki, leki i kosmetyki.",
    "options": null,
    "answer": false
  },
  {
    "id": "R04_SLA_10",
    "section": "Wyżyna Śląska",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do krajobrazu miejsko-przemysłowego Wyżyny Śląskiej: kopalnie, fabryki, zakłady produkcyjne, stocznie.",
    "explanation": "Kopalnie, fabryki i zakłady produkcyjne tworzą krajobraz miejsko-przemysłowy Wyżyny Śląskiej. Stocznie budują statki i leżą nad morzem - w Gdańsku, Gdyni i Szczecinie.",
    "options": null,
    "answer": "stocznie"
  },
  {
    "id": "R04_SLA_11",
    "section": "Wyżyna Śląska",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem dotyczącym Wyżyny Śląskiej.",
    "explanation": "Złoża, kopalnie i przemysł to kluczowe pojęcia przy opisie krajobrazu miejsko-przemysłowego.",
    "options": null,
    "left": [
      "złoża surowców mineralnych",
      "kopalnie węgla kamiennego",
      "przemysł"
    ],
    "right": [
      "znajdują się pod powierzchnią ziemi",
      "miejsca wydobycia ważnego surowca",
      "wydobywanie i masowe wytwarzanie produktów"
    ],
    "answer": {
      "złoża surowców mineralnych": "znajdują się pod powierzchnią ziemi",
      "kopalnie węgla kamiennego": "miejsca wydobycia ważnego surowca",
      "przemysł": "wydobywanie i masowe wytwarzanie produktów"
    }
  },
  {
    "id": "R04_SLA_12",
    "section": "Wyżyna Śląska",
    "type": "scenario",
    "prompt": "Zwiedzasz podziemny korytarz dawnej kopalni i widzisz ekspozycję węgla kamiennego. Który region najlepiej pasuje do tej sytuacji?",
    "explanation": "Podziemne korytarze kopalń węgla kamiennego są związane z Wyżyną Śląską.",
    "options": [
      "Wyżyna Śląska",
      "Wyżyna Lubelska",
      "Stare Miasto w Warszawie",
      "Łazienki Królewskie"
    ],
    "answer": 0,
    "image": "r04_kopalnia_slaska.jpg"
  },
  {
    "id": "R04_KON_01",
    "section": "Konurbacja i Śląsk",
    "type": "single_choice",
    "prompt": "Jak nazywa się zespół miast?",
    "explanation": "Zespół miast nazywa się aglomeracją.",
    "options": [
      "aglomeracja",
      "hałda",
      "less",
      "czarnoziem",
      "śródmieście",
      "tyta"
    ],
    "answer": 0
  },
  {
    "id": "R04_KON_02",
    "section": "Konurbacja i Śląsk",
    "type": "single_choice",
    "prompt": "Jak nazywa się aglomeracja, która składa się z miast o podobnej wielkości?",
    "explanation": "Taki zespół miast to konurbacja; przykładem jest konurbacja górnośląska.",
    "options": [
      "konurbacja",
      "stolica",
      "dzielnica",
      "osiedle",
      "pastwisko",
      "wąwóz"
    ],
    "answer": 0
  },
  {
    "id": "R04_KON_03",
    "section": "Konurbacja i Śląsk",
    "type": "multi_select",
    "prompt": "Zaznacz miasta należące do największych miast konurbacji górnośląskiej.",
    "explanation": "Do największych miast konurbacji górnośląskiej zalicza się Katowice, Chorzów, Zabrze, Bytom, Gliwice i Dąbrowę Górniczą.",
    "options": [
      "Katowice",
      "Chorzów",
      "Zabrze",
      "Bytom",
      "Gliwice",
      "Lublin"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r04_konurbacja_gornoslaska.jpg"
  },
  {
    "id": "R04_KON_04",
    "section": "Konurbacja i Śląsk",
    "type": "fill_in",
    "prompt": "Konurbacja górnośląska jest złożona z __________ miast, a mieszka w niej około __________ osób.",
    "explanation": "Konurbacja górnośląska składa się z 19 miast i mieszka w niej około 3 mln osób.",
    "options": null,
    "answer": [
      "19",
      "3 mln"
    ],
    "altAnswers": [
      [
        "19",
        "dziewiętnastu"
      ],
      [
        "3 mln",
        "3 milionów",
        "około 3 mln"
      ]
    ]
  },
  {
    "id": "R04_KON_05",
    "section": "Konurbacja i Śląsk",
    "type": "true_false",
    "prompt": "Niektóre miasta konurbacji górnośląskiej leżą tak blisko siebie, że z pozoru tworzą jedno miasto.",
    "explanation": "Część miast konurbacji jest położona bardzo blisko siebie.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_KON_06",
    "section": "Konurbacja i Śląsk",
    "type": "multi_select",
    "prompt": "Zaznacz źródła szkodliwych substancji wymienione w części o zanieczyszczeniu środowiska.",
    "explanation": "Szkodliwe substancje emitują między innymi zakłady przemysłowe, przestarzałe systemy ogrzewania budynków oraz transport.",
    "options": [
      "zakłady przemysłowe",
      "przestarzałe systemy ogrzewania",
      "transport",
      "parki miejskie",
      "sady owocowe",
      "wąwozy lessowe"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_smog_przemyslowy.jpg"
  },
  {
    "id": "R04_KON_07",
    "section": "Konurbacja i Śląsk",
    "type": "riddle",
    "prompt": "Mgła zawierająca szkodliwe substancje to...",
    "explanation": "Smog to mgła zawierająca szkodliwe substancje i jest dużym problemem dla zdrowia człowieka.",
    "options": null,
    "answer": "smog",
    "altAnswers": [
      "smog"
    ],
    "image": "r04_smog_przemyslowy.jpg"
  },
  {
    "id": "R04_KON_08",
    "section": "Konurbacja i Śląsk",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do właściwych grup.",
    "explanation": "Pokazuje się zarówno problemy środowiskowe, zmiany dawnych obiektów przemysłowych, jak i elementy kultury śląskiej.",
    "options": null,
    "items": [
      "smog",
      "globalne ocieplenie",
      "muzea w dawnych kopalniach",
      "centra handlowe w dawnych zakładach",
      "Barbórka",
      "tyta"
    ],
    "categories": [
      "problemy środowiskowe",
      "nowe funkcje obiektów",
      "kultura śląska"
    ],
    "answer": {
      "problemy środowiskowe": [
        "smog",
        "globalne ocieplenie"
      ],
      "nowe funkcje obiektów": [
        "muzea w dawnych kopalniach",
        "centra handlowe w dawnych zakładach"
      ],
      "kultura śląska": [
        "Barbórka",
        "tyta"
      ]
    }
  },
  {
    "id": "R04_KON_09",
    "section": "Konurbacja i Śląsk",
    "type": "single_choice",
    "prompt": "Kiedy obchodzona jest Barbórka?",
    "explanation": "Barbórka, ważne i popularne święto górnicze, jest obchodzona 4 grudnia.",
    "options": [
      "4 grudnia",
      "1 września",
      "27 maja",
      "30 czerwca",
      "17 listopada",
      "1 stycznia"
    ],
    "answer": 0
  },
  {
    "id": "R04_KON_10",
    "section": "Konurbacja i Śląsk",
    "type": "scenario",
    "prompt": "Na rozpoczęcie roku szkolnego pierwszoklasista dostaje dużą torbę w kształcie rożka wypełnioną słodyczami. Jak nazywa się ta tradycja?",
    "explanation": "Na Śląsku taka torba ze słodyczami nazywa się tyta.",
    "options": [
      "tyta",
      "Barbórka",
      "hałda",
      "czarnoziem"
    ],
    "answer": 0,
    "image": "r04_tyta_slaska.jpg"
  },
  {
    "id": "R04_LUB_01",
    "section": "Wyżyna Lubelska",
    "type": "single_choice",
    "prompt": "Między dolinami których rzek leży Wyżyna Lubelska?",
    "explanation": "Wyżyna Lubelska jest położona między Wisłą na zachodzie i Bugiem na wschodzie.",
    "options": [
      "Wisły i Bugu",
      "Odry i Warty",
      "Wisły i Odry",
      "Bugu i Narwi",
      "Wieprza i Odry",
      "Sanu i Noteci"
    ],
    "answer": 0,
    "image": "r04_doliny_wisly_i_bugu.jpg"
  },
  {
    "id": "R04_LUB_02",
    "section": "Wyżyna Lubelska",
    "type": "true_false",
    "prompt": "Teren Wyżyny Lubelskiej jest lekko pagórkowaty, a wysokości bezwzględne nieznacznie przekraczają 300 m n.p.m.",
    "explanation": "Tak opisano ukształtowanie terenu Wyżyny Lubelskiej.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_LUB_03",
    "section": "Wyżyna Lubelska",
    "type": "fill_in",
    "prompt": "Jedną z najważniejszych rzek przepływających przez Wyżynę Lubelską jest __________.",
    "explanation": "Wskazano Wieprz jako jedną z najważniejszych rzek regionu.",
    "options": null,
    "answer": [
      "Wieprz"
    ],
    "altAnswers": [
      [
        "Wieprz",
        "wieprz"
      ]
    ]
  },
  {
    "id": "R04_LUB_04",
    "section": "Wyżyna Lubelska",
    "type": "single_choice",
    "prompt": "Jak nazywają się bardzo żyzne gleby występujące na Wyżynie Lubelskiej?",
    "explanation": "Na Wyżynie Lubelskiej występują czarnoziemy, czyli jedne z najżyźniejszych gleb.",
    "options": [
      "czarnoziemy",
      "hałdy",
      "lessy",
      "pastwiska",
      "kopaliny",
      "wydmy"
    ],
    "answer": 0
  },
  {
    "id": "R04_LUB_05",
    "section": "Wyżyna Lubelska",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny uprawiane na Wyżynie Lubelskiej.",
    "explanation": "W regionie uprawia się wymagające rośliny, między innymi buraki cukrowe, pszenicę, rzepak i chmiel.",
    "options": [
      "buraki cukrowe",
      "pszenica",
      "rzepak",
      "chmiel",
      "węgiel kamienny",
      "żubry"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_czarnoziemy_i_uprawy.jpg"
  },
  {
    "id": "R04_LUB_06",
    "section": "Wyżyna Lubelska",
    "type": "true_false",
    "prompt": "Czarnoziemy Wyżyny Lubelskiej utworzyły się na skałach lessowych.",
    "explanation": "Czarnoziemy powstały na skałach lessowych.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_LUB_07",
    "section": "Wyżyna Lubelska",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do rolnictwa Wyżyny Lubelskiej: pszenica, rzepak, chmiel, bawełna.",
    "explanation": "Pszenica, rzepak i chmiel to rośliny uprawiane na Wyżynie Lubelskiej. Bawełna wymaga gorącego klimatu i w Polsce się jej nie uprawia.",
    "options": null,
    "answer": "bawełna"
  },
  {
    "id": "R04_LUB_08",
    "section": "Wyżyna Lubelska",
    "type": "riddle",
    "prompt": "Podłużne zagłębienia terenu wyrzeźbione przez wodę opadową w skałach lessowych to...",
    "explanation": "Takie formy terenu to wąwozy lessowe.",
    "options": null,
    "answer": "wąwozy lessowe",
    "altAnswers": [
      "wąwozy lessowe",
      "wawózy lessowe",
      "wawozy lessowe",
      "wąwóz lessowy"
    ]
  },
  {
    "id": "R04_LUB_09",
    "section": "Wyżyna Lubelska",
    "type": "multi_select",
    "prompt": "Gdzie można zobaczyć wąwozy lessowe?",
    "explanation": "Wąwozy lessowe można zobaczyć w okolicach Kraśnika, Kazimierza Dolnego i Nałęczowa.",
    "options": [
      "Kraśnik",
      "Kazimierz Dolny",
      "Nałęczów",
      "Katowice",
      "Chorzów",
      "Warszawa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_wawoz_lessowy.jpg"
  },
  {
    "id": "R04_LUB_10",
    "section": "Wyżyna Lubelska",
    "type": "single_choice",
    "prompt": "Jakie jest największe miasto Wyżyny Lubelskiej?",
    "explanation": "Największym miastem regionu jest Lublin.",
    "options": [
      "Lublin",
      "Zamość",
      "Nałęczów",
      "Kraśnik",
      "Kazimierz Dolny",
      "Gliwice"
    ],
    "answer": 0
  },
  {
    "id": "R04_LUB_11",
    "section": "Wyżyna Lubelska",
    "type": "match",
    "prompt": "Połącz miejsce lub pojęcie z informacją.",
    "explanation": "Opisuje się Lublin, Zamość, rolniczy charakter regionu i czarnoziemy.",
    "options": null,
    "left": [
      "Lublin",
      "Zamość",
      "Wyżyna Lubelska",
      "czarnoziemy"
    ],
    "right": [
      "Zamek Królewski, Stare Miasto i Lubelska Trasa Podziemna",
      "Stare Miasto wpisane na listę UNESCO",
      "region o rolniczym charakterze",
      "bardzo żyzne gleby"
    ],
    "answer": {
      "Lublin": "Zamek Królewski, Stare Miasto i Lubelska Trasa Podziemna",
      "Zamość": "Stare Miasto wpisane na listę UNESCO",
      "Wyżyna Lubelska": "region o rolniczym charakterze",
      "czarnoziemy": "bardzo żyzne gleby"
    },
    "image": "r04_lublin_zamosc.jpg"
  },
  {
    "id": "R04_LUB_12",
    "section": "Wyżyna Lubelska",
    "type": "scenario",
    "prompt": "Jesteś w regionie pełnym pól, łąk, pastwisk i sadów. Miast jest tam niewiele, bo dominuje rolniczy charakter obszaru. Jaki region opisuje ta sytuacja?",
    "explanation": "Opis pasuje do Wyżyny Lubelskiej, gdzie dominuje krajobraz rolniczy i jest dużo wsi.",
    "options": [
      "Wyżyna Lubelska",
      "konurbacja górnośląska",
      "śródmieście Warszawy",
      "Lotnisko Chopina"
    ],
    "answer": 0
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką wysokość ma najwyższe wzniesienie Wyżyny Śląskiej?",
    "explanation": "Najwyższe wzniesienie Wyżyny Śląskiej to Góra Świętej Anny o wysokości 408 m n.p.m.",
    "options": [
      "408 m n.p.m.",
      "310 m n.p.m.",
      "300 m n.p.m.",
      "27 m n.p.m.",
      "125 m n.p.m.",
      "19 m n.p.m."
    ],
    "answer": 0,
    "image": "r04_gora_swietej_anny.jpg"
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Góra Świętej Anny jest pozostałością po wulkanie sprzed około 27 mln lat.",
    "explanation": "Góra Świętej Anny jest pozostałością po dawnym wulkanie.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Węgiel kamienny powstał z obumarłych szczątków __________ żyjących tu około __________ lat temu.",
    "explanation": "Węgiel kamienny powstał ze szczątków roślin żyjących około 300 mln lat temu.",
    "options": null,
    "answer": [
      "roślin",
      "300 mln"
    ],
    "altAnswers": [
      [
        "roślin",
        "roslin"
      ],
      [
        "300 mln",
        "300 milionów",
        "300 mln lat"
      ]
    ]
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż informacje o zmianach przemysłu węglowego w logicznej kolejności.",
    "explanation": "Najpierw przemysł węglowy rozwijał region, później ujawniły się szkody środowiskowe, a obecnie przemysł węglowy jest stopniowo likwidowany, zaś dawne obiekty zyskują nowe funkcje.",
    "options": null,
    "items": [
      "Dawne kopalnie i zakłady zmienia się w muzea lub centra rozrywki",
      "Przemysł węglowy rozwijał się na dużą skalę",
      "Zanieczyszczenia i smog stały się dużym problemem",
      "Przemysł węglowy stopniowo się likwiduje"
    ],
    "answer": [
      "Przemysł węglowy rozwijał się na dużą skalę",
      "Zanieczyszczenia i smog stały się dużym problemem",
      "Przemysł węglowy stopniowo się likwiduje",
      "Dawne kopalnie i zakłady zmienia się w muzea lub centra rozrywki"
    ]
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz trudniejsze pojęcia z wyjaśnieniami.",
    "explanation": "Pojęcia te pojawiają się w częściach o Wyżynie Śląskiej i jej kulturze.",
    "options": null,
    "left": [
      "globalne ocieplenie",
      "smog",
      "hałda",
      "Barbórka",
      "tyta"
    ],
    "right": [
      "wzrost średniej temperatury powietrza na Ziemi",
      "mgła zawierająca szkodliwe substancje",
      "usypisko popiołu, żużlu lub skał",
      "święto górnicze obchodzone 4 grudnia",
      "torba w kształcie rożka ze słodyczami"
    ],
    "answer": {
      "globalne ocieplenie": "wzrost średniej temperatury powietrza na Ziemi",
      "smog": "mgła zawierająca szkodliwe substancje",
      "hałda": "usypisko popiołu, żużlu lub skał",
      "Barbórka": "święto górnicze obchodzone 4 grudnia",
      "tyta": "torba w kształcie rożka ze słodyczami"
    }
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który obiekt nazywa się najwyższym budynkiem w Polsce i całej Unii Europejskiej?",
    "explanation": "Tak opisano Varso Tower w śródmieściu Warszawy.",
    "options": [
      "Varso Tower",
      "Pałac Prezydencki",
      "Zamek Królewski",
      "Stadion Narodowy",
      "Lotnisko Chopina",
      "Pałac Na Wodzie"
    ],
    "answer": 0,
    "image": "r04_srodmiescie_warszawy.jpg"
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz atrakcje turystyczne Warszawy wymienione razem w części o atrakcjach stolicy.",
    "explanation": "Wymienia się Stare Miasto, Pałac Kultury i Nauki, pałac w Wilanowie oraz Stadion Narodowy.",
    "options": [
      "Stare Miasto",
      "Pałac Kultury i Nauki",
      "pałac w Wilanowie",
      "Stadion Narodowy",
      "Królowa Luiza",
      "Korzeniowy Dół"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_atrakcje_warszawy.jpg"
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do atrakcji turystycznych Warszawy: Stare Miasto, Pałac Kultury i Nauki, pałac w Wilanowie, Królowa Luiza.",
    "explanation": "Królowa Luiza to dawna kopalnia w Zabrzu, a pozostałe obiekty są atrakcjami Warszawy.",
    "options": null,
    "answer": "Królowa Luiza"
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Stare Miasto w __________ wpisano na listę światowego dziedzictwa UNESCO, a w Polsce było na niej __________ obiektów.",
    "explanation": "Stare Miasto w Zamościu wpisano na listę UNESCO oraz że w Polsce wpisano na nią 17 obiektów.",
    "options": null,
    "answer": [
      "Zamościu",
      "17"
    ],
    "altAnswers": [
      [
        "Zamościu",
        "Zamosciu",
        "Zamość"
      ],
      [
        "17",
        "siedemnaście"
      ]
    ]
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Lista światowego dziedzictwa UNESCO obejmuje obiekty dziedzictwa kulturowego i naturalnego o wyjątkowej wartości dla ludzkości.",
    "explanation": "Tak wyjaśniono listę UNESCO w części o Zamościu.",
    "options": null,
    "answer": true
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do regionów lub miasta.",
    "explanation": "To ćwiczenie łączy cechy trzech krajobrazów: wielkomiejskiego, miejsko-przemysłowego i rolniczego.",
    "options": null,
    "items": [
      "metro",
      "Pałac Prezydencki",
      "węgiel kamienny",
      "konurbacja górnośląska",
      "czarnoziemy",
      "wąwozy lessowe"
    ],
    "categories": [
      "Warszawa",
      "Wyżyna Śląska",
      "Wyżyna Lubelska"
    ],
    "answer": {
      "Warszawa": [
        "metro",
        "Pałac Prezydencki"
      ],
      "Wyżyna Śląska": [
        "węgiel kamienny",
        "konurbacja górnośląska"
      ],
      "Wyżyna Lubelska": [
        "czarnoziemy",
        "wąwozy lessowe"
      ]
    }
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W regionie widzisz górniczą orkiestrę, obchody Barbórki i rodzinną tradycję wręczania tyty pierwszoklasistom. O której grupie mieszkańców mówi się?",
    "explanation": "Opisuje się te elementy jako część kultury Ślązaków.",
    "options": [
      "Ślązacy",
      "Warszawiacy",
      "mieszkańcy Zamościa",
      "turyści z Łazienek"
    ],
    "answer": 0,
    "image": "r04_tyta_slaska.jpg"
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Dawna kopalnia w Zabrzu, w której część trasy turyści pokonują łodziami, to...",
    "explanation": "Podaje się przykład dawnej kopalni Królowa Luiza w Zabrzu.",
    "options": null,
    "answer": "Królowa Luiza",
    "altAnswers": [
      "Królowa Luiza",
      "Krolowa Luiza",
      "kopalnia Królowa Luiza"
    ],
    "image": "r04_kopalnia_slaska.jpg"
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz powody, dla których duże miasta przyciągają ludzi z całego kraju.",
    "explanation": "Duże miasta przyciągają ludzi różnorodnością usług, licznymi miejscami pracy, uczelniami wyższymi oraz miejscami kultury i rozrywki.",
    "options": [
      "różnorodność usług",
      "liczne miejsca pracy",
      "uczelnie wyższe",
      "miejsca kultury i rozrywki",
      "występowanie wąwozów lessowych",
      "wydobycie węgla w każdym mieście"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ]
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Krajobrazy Polski (tematy 6-8)",
  "icon": "🗺️",
  "sectionOrder": [
    "Krajobraz wielkomiejski",
    "Warszawa",
    "Wyżyna Śląska",
    "Konurbacja i Śląsk",
    "Wyżyna Lubelska"
  ],
  "sectionIcons": {
    "Krajobraz wielkomiejski": "🏙️",
    "Warszawa": "🏛️",
    "Wyżyna Śląska": "⛏️",
    "Konurbacja i Śląsk": "🚋",
    "Wyżyna Lubelska": "🌾"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
