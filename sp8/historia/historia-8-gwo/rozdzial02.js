// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POW  = Powojenny świat i początek zimnej wojny
//   NIE  = Podzielone Niemcy i dwa bloki
//   DEK  = Dekolonizacja
//   KON  = Konflikty zimnej wojny
//   BLI  = Konflikt na Bliskim Wschodzie
//   CHI  = Chiny i Japonia
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_POW_01",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "single_choice",
    "prompt": "Które państwo odniosło po II wojnie światowej szczególne korzyści gospodarcze, ponieważ nie zostało zniszczone, a zamówienia wojenne rozwinęły jego przemysł i rolnictwo?",
    "options": [
      "Stany Zjednoczone",
      "Francja",
      "Wielka Brytania",
      "Związek Radziecki",
      "Polska",
      "Niemcy"
    ],
    "answer": 0,
    "explanation": "Stany Zjednoczone nie zostały zniszczone działaniami wojennymi na własnym terytorium, a wielkie zamówienia dla armii pobudziły produkcję przemysłową i rolną."
  },
  {
    "id": "R02_POW_02",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "match",
    "prompt": "Połącz uczestnika lub obszar z ustaleniem konferencji poczdamskiej.",
    "options": null,
    "left": [
      "Polska",
      "Niemcy",
      "ZSRR",
      "Ludność niemiecka z Polski i ZSRR"
    ],
    "right": [
      "tymczasowe obszary po Odrę, Nysę Łużycką i Bałtyk",
      "podział na cztery strefy okupacyjne",
      "reparacje w postaci maszyn i urządzeń",
      "przymusowe przesiedlenie do Niemiec"
    ],
    "answer": {
      "Polska": "tymczasowe obszary po Odrę, Nysę Łużycką i Bałtyk",
      "Niemcy": "podział na cztery strefy okupacyjne",
      "ZSRR": "reparacje w postaci maszyn i urządzeń",
      "Ludność niemiecka z Polski i ZSRR": "przymusowe przesiedlenie do Niemiec"
    },
    "explanation": "W Poczdamie ustalono m.in. tymczasowy przebieg zachodniej granicy Polski, podział Niemiec na cztery strefy, reparacje dla ZSRR oraz przymusowe przesiedlenia Niemców.",
    "image": "r02_poczdam_przywodcy.jpg"
  },
  {
    "id": "R02_POW_03",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "true_false",
    "prompt": "Na konferencji poczdamskiej ustalono denazyfikację i demilitaryzację Niemiec.",
    "options": null,
    "answer": true,
    "explanation": "Denazyfikacja miała oczyścić Niemcy z ideologii nazistowskiej, a demilitaryzacja ograniczyć ich potencjał wojskowy."
  },
  {
    "id": "R02_POW_04",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "single_choice",
    "prompt": "Jakie dwa cele uznano za podstawowe dla Organizacji Narodów Zjednoczonych?",
    "options": [
      "Utrzymanie pokoju i rozwój współpracy między narodami",
      "Likwidacja wszystkich granic i wspólna waluta",
      "Podział świata na strefy okupacyjne",
      "Rozbudowa armii państw członkowskich",
      "Nacjonalizacja przemysłu i rolnictwa",
      "Zastąpienie rządów państw przez jeden rząd światowy"
    ],
    "answer": 0,
    "explanation": "ONZ miała strzec pokoju oraz rozwijać współpracę między narodami. Głównymi organami zostały Zgromadzenie Ogólne i Rada Bezpieczeństwa.",
    "image": "r02_onz_sala_zgromadzenia.jpg"
  },
  {
    "id": "R02_POW_05",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "multi_select",
    "prompt": "Zaznacz działania należące do kompetencji Rady Bezpieczeństwa ONZ.",
    "options": [
      "Wysłanie sił pokojowych ONZ",
      "Nałożenie sankcji na państwo zagrażające pokojowi",
      "Uchwalenie konstytucji każdego państwa członkowskiego",
      "Decydowanie o sprawach istotnych dla utrzymania pokoju",
      "Wyznaczanie cen towarów w państwach członkowskich",
      "Automatyczne znoszenie prawa weta stałych członków"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Rada Bezpieczeństwa zajmuje się sprawami istotnymi dla pokoju, może wysyłać siły pokojowe i nakładać sankcje. Stałych członków chroni prawo weta."
  },
  {
    "id": "R02_POW_06",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "fill_in",
    "prompt": "W roku __________ Zgromadzenie Ogólne ONZ uchwaliło __________.",
    "options": null,
    "answer": [
      "1948",
      "Powszechną deklarację praw człowieka"
    ],
    "altAnswers": [
      [
        "1948",
        "1948 r.",
        "w 1948"
      ],
      [
        "Powszechną deklarację praw człowieka",
        "Powszechna deklaracja praw człowieka",
        "Deklarację praw człowieka"
      ]
    ],
    "explanation": "Powszechna deklaracja praw człowieka została uchwalona w 1948 r. po doświadczeniach wojny i masowych naruszeniach praw człowieka."
  },
  {
    "id": "R02_POW_07",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do cech państw demokracji ludowej: rządy partii komunistycznej, rozbudowany aparat bezpieczeństwa, nacjonalizacja gospodarki, wolne wybory wielopartyjne, cenzura.",
    "options": null,
    "answer": "wolne wybory wielopartyjne",
    "explanation": "Państwa demokracji ludowej miały monopol partii komunistycznej, silny aparat bezpieczeństwa, gospodarkę państwową i kontrolę informacji, a nie wolne wybory wielopartyjne."
  },
  {
    "id": "R02_POW_08",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "riddle",
    "prompt": "Jak nazwano granicę i politykę izolacji, które oddzielały państwa komunistyczne od kontaktów z Zachodem?",
    "options": null,
    "answer": "żelazna kurtyna",
    "altAnswers": [
      "żelazna kurtyna",
      "zelazna kurtyna"
    ],
    "explanation": "Winston Churchill użył w 1946 r. określenia \"żelazna kurtyna\" dla podziału między radziecką strefą wpływów a Zachodem."
  },
  {
    "id": "R02_POW_09",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "scenario",
    "prompt": "Jest rok 1947. Prezydent USA ogłasza, że jego kraj będzie powstrzymywał postępy komunizmu i wspierał wolne narody zagrożone komunistyczną ekspansją. Jak nazwano tę politykę?",
    "options": [
      "Doktryna Trumana",
      "Plan Schumana",
      "Doktryna Breżniewa",
      "Plan Marshalla",
      "Układ Warszawski",
      "RWPG"
    ],
    "answer": 0,
    "explanation": "Doktryna Trumana z 1947 r. zapowiadała powstrzymywanie komunizmu oraz wspieranie państw zagrożonych jego ekspansją."
  },
  {
    "id": "R02_POW_10",
    "section": "Powojenny świat i początek zimnej wojny",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Wybuch wojny w Korei",
      "Ogłoszenie doktryny Trumana",
      "Konferencja poczdamska",
      "Uchwalenie Powszechnej deklaracji praw człowieka"
    ],
    "answer": [
      "Konferencja poczdamska",
      "Ogłoszenie doktryny Trumana",
      "Uchwalenie Powszechnej deklaracji praw człowieka",
      "Wybuch wojny w Korei"
    ],
    "explanation": "Konferencja poczdamska odbyła się w 1945 r., doktrynę Trumana ogłoszono w 1947 r., deklarację praw człowieka uchwalono w 1948 r., a wojna w Korei wybuchła w 1950 r."
  },
  {
    "id": "R02_NIE_01",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "single_choice",
    "prompt": "Jaki ważny skutek prawny przyniosły procesy norymberskie?",
    "options": [
      "Wprowadzenie do prawa międzynarodowego kategorii zbrodni przeciwko ludzkości",
      "Likwidację wszystkich sądów wojskowych",
      "Powstanie NATO",
      "Utworzenie RFN",
      "Zakaz prowadzenia procesów zbrodniarzy wojennych",
      "Zniesienie prawa międzynarodowego"
    ],
    "answer": 0,
    "explanation": "Procesy norymberskie przyczyniły się do wprowadzenia do prawa międzynarodowego kategorii zbrodni przeciwko ludzkości."
  },
  {
    "id": "R02_NIE_02",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "scenario",
    "prompt": "W czerwcu 1948 r. wojska radzieckie odcinają drogi, linie kolejowe i szlaki wodne prowadzące do zachodnich sektorów Berlina. Jak odpowiedzieli Amerykanie i Brytyjczycy?",
    "options": [
      "Uruchomili most powietrzny z żywnością i węglem",
      "Natychmiast opuścili Berlin",
      "Przyłączyli Berlin Zachodni do ZSRR",
      "Zburzyli mur berliński",
      "Rozwiązali NATO",
      "Wprowadzili blokadę morską Kuby"
    ],
    "answer": 0,
    "explanation": "Amerykanie i Brytyjczycy zaopatrywali Berlin Zachodni drogą lotniczą przez prawie rok, co uniemożliwiło Stalinowi osiągnięcie celu blokady."
  },
  {
    "id": "R02_NIE_03",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "true_false",
    "prompt": "ZSRR zniósł blokadę Berlina w maju 1949 r., gdy stało się jasne, że most powietrzny pozwala utrzymać zachodnie sektory miasta.",
    "options": null,
    "answer": true,
    "explanation": "Blokada nie zmusiła zachodnich aliantów do opuszczenia miasta, więc po niespełna roku ZSRR ją zakończył."
  },
  {
    "id": "R02_NIE_04",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "fill_in",
    "prompt": "We wrześniu 1949 r. z trzech zachodnich stref okupacyjnych powstała __________, a w październiku 1949 r. ze strefy radzieckiej powstała __________.",
    "options": null,
    "answer": [
      "Republika Federalna Niemiec",
      "Niemiecka Republika Demokratyczna"
    ],
    "altAnswers": [
      [
        "Republika Federalna Niemiec",
        "RFN"
      ],
      [
        "Niemiecka Republika Demokratyczna",
        "NRD"
      ]
    ],
    "explanation": "RFN powstała z amerykańskiej, brytyjskiej i francuskiej strefy okupacyjnej, a NRD ze strefy radzieckiej."
  },
  {
    "id": "R02_NIE_05",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "multi_select",
    "prompt": "Zaznacz następstwa blokady Berlina.",
    "options": [
      "Wzrost ryzyka wojny między Wschodem a Zachodem",
      "Utworzenie demokratycznego państwa zachodnioniemieckiego",
      "Powstanie NATO",
      "Przekształcenie Niemiec w ważny punkt zapalny Europy",
      "Zjednoczenie Niemiec już w 1949 r.",
      "Rozwiązanie konfliktu między ZSRR a USA"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kryzys berliński zwiększył napięcie, przyspieszył powstanie RFN i NATO oraz uczynił Niemcy jednym z głównych punktów zapalnych zimnej wojny.",
    "image": "r02_most_powietrzny_berlin.jpg"
  },
  {
    "id": "R02_NIE_06",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "match",
    "prompt": "Połącz państwo lub organizację z właściwą cechą.",
    "options": null,
    "left": [
      "RFN",
      "NRD",
      "NATO",
      "Układ Warszawski"
    ],
    "right": [
      "gospodarka wolnorynkowa i cud gospodarczy",
      "państwo komunistyczne ze stolicą w Berlinie Wschodnim",
      "sojusz zachodni utworzony w 1949 r.",
      "blok wojskowy utworzony w 1955 r."
    ],
    "answer": {
      "RFN": "gospodarka wolnorynkowa i cud gospodarczy",
      "NRD": "państwo komunistyczne ze stolicą w Berlinie Wschodnim",
      "NATO": "sojusz zachodni utworzony w 1949 r.",
      "Układ Warszawski": "blok wojskowy utworzony w 1955 r."
    },
    "explanation": "RFN rozwijała gospodarkę rynkową, NRD pozostawała państwem komunistycznym, NATO powstało w 1949 r., a Układ Warszawski w 1955 r."
  },
  {
    "id": "R02_NIE_07",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "single_choice",
    "prompt": "Co proponował plan Schumana z 1950 r.?",
    "options": [
      "Ścisłą współpracę gospodarczą Europy Zachodniej i międzynarodową kontrolę produkcji węgla i stali",
      "Budowę muru między Berlinem Wschodnim a Zachodnim",
      "Powstanie Układu Warszawskiego",
      "Podział Niemiec na cztery strefy okupacyjne",
      "Wycofanie USA z Europy",
      "Utworzenie wspólnej armii ZSRR i RFN"
    ],
    "answer": 0,
    "explanation": "Plan Schumana zakładał współpracę gospodarczą i wspólną kontrolę węgla oraz stali. Doprowadził do powstania Europejskiej Wspólnoty Węgla i Stali."
  },
  {
    "id": "R02_NIE_08",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "scenario",
    "prompt": "W nocy z 12 na 13 sierpnia 1961 r. oddziały NRD stawiają zapory z drutu kolczastego między dwiema częściami miasta, by zatrzymać masowe ucieczki ludności. Co wkrótce powstaje?",
    "options": [
      "Mur berliński",
      "Most powietrzny",
      "Linia Maginota",
      "Układ Warszawski",
      "RWPG",
      "Żelazna kurtyna w Austrii"
    ],
    "answer": 0,
    "explanation": "Władze NRD zamknęły przejścia między Berlinem Wschodnim i Zachodnim, a następnie zbudowały mur, który stał się symbolem podzielonej Europy."
  },
  {
    "id": "R02_NIE_09",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do stalinizmu albo destalinizacji.",
    "options": null,
    "items": [
      "kult jednostki",
      "rozbudowany aparat terroru",
      "praca przymusowa wielu obywateli",
      "wypuszczenie setek tysięcy więźniów i łagierników",
      "ograniczona swoboda wypowiedzi",
      "zakończenie kultu jednostki"
    ],
    "categories": [
      "stalinizm",
      "destalinizacja"
    ],
    "answer": {
      "stalinizm": [
        "kult jednostki",
        "rozbudowany aparat terroru",
        "praca przymusowa wielu obywateli"
      ],
      "destalinizacja": [
        "wypuszczenie setek tysięcy więźniów i łagierników",
        "ograniczona swoboda wypowiedzi",
        "zakończenie kultu jednostki"
      ]
    },
    "explanation": "Stalinizm opierał się na terrorze i kulcie przywódcy. Destalinizacja za Chruszczowa złagodziła system, ograniczając represje i kult jednostki."
  },
  {
    "id": "R02_NIE_10",
    "section": "Podzielone Niemcy i dwa bloki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Praska Wiosna",
      "Budowa muru berlińskiego",
      "Śmierć Stalina",
      "Rewolucja węgierska"
    ],
    "answer": [
      "Śmierć Stalina",
      "Rewolucja węgierska",
      "Budowa muru berlińskiego",
      "Praska Wiosna"
    ],
    "explanation": "Stalin zmarł w 1953 r., rewolucja węgierska wybuchła w 1956 r., mur berliński powstał w 1961 r., a Praska Wiosna miała miejsce w 1968 r.",
    "image": "r02_mur_berlinski.jpg"
  },
  {
    "id": "R02_DEK_01",
    "section": "Dekolonizacja",
    "type": "riddle",
    "prompt": "Jak nazywa się proces, w którym kolonie wyzwalają się spod zależności od mocarstw kolonialnych i tworzą nowe państwa?",
    "options": null,
    "answer": "dekolonizacja",
    "altAnswers": [
      "dekolonizacja"
    ],
    "explanation": "Dekolonizacja po II wojnie światowej doprowadziła do rozpadu mocarstw kolonialnych i powstania wielu nowych państw."
  },
  {
    "id": "R02_DEK_02",
    "section": "Dekolonizacja",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny dekolonizacji po II wojnie światowej.",
    "options": [
      "Udział milionów żołnierzy z kolonii w wojnie",
      "Obietnice większej samodzielności składane koloniom przez państwa europejskie",
      "Osłabienie finansowe europejskich mocarstw",
      "Rozwój nacjonalizmu w Afryce i Azji",
      "Poparcie dekolonizacji przez USA i ZSRR",
      "Odrzucanie kolonializmu jako sprzecznego z prawami człowieka",
      "Wzrost potęgi dawnych imperiów kolonialnych",
      "Zakaz tworzenia nowych państw przez ONZ"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Dekolonizację przyspieszyły doświadczenia wojenne, obietnice samodzielności, osłabienie metropolii, nacjonalizm, poparcie supermocarstw i rosnące znaczenie praw człowieka.",
    "image": "r02_dekolonizacja_indie_gandhi.jpg"
  },
  {
    "id": "R02_DEK_03",
    "section": "Dekolonizacja",
    "type": "scenario",
    "prompt": "Przywódca przez ponad 30 lat walczy o niepodległość Indii, zalecając rodakom opór bez przemocy. Hindusi nazywają go Mahatmą. O kogo chodzi?",
    "options": [
      "Mohandas Gandhi",
      "Nelson Mandela",
      "Mao Zedong",
      "Imre Nagy",
      "Fidel Castro",
      "Konrad Adenauer"
    ],
    "answer": 0,
    "explanation": "Mohandas Gandhi prowadził pokojową walkę o niepodległość Indii i konsekwentnie zalecał opór bez przemocy."
  },
  {
    "id": "R02_DEK_04",
    "section": "Dekolonizacja",
    "type": "true_false",
    "prompt": "W 1947 r. po zakończeniu brytyjskich rządów Indie podzielono na Indie z przewagą hinduistów i Pakistan z przewagą muzułmanów.",
    "options": null,
    "answer": true,
    "explanation": "Podział wynikał z obaw muzułmanów przed podporządkowaniem większości hinduistycznej i doprowadził do masowej wymiany ludności oraz przemocy."
  },
  {
    "id": "R02_DEK_05",
    "section": "Dekolonizacja",
    "type": "match",
    "prompt": "Połącz wydarzenie dekolonizacyjne z datą.",
    "options": null,
    "left": [
      "Niepodległość Indii i Pakistanu",
      "Klęska Francji pod Dien Bien Phu",
      "Rok Afryki",
      "Zniesienie apartheidu w RPA"
    ],
    "right": [
      "1947",
      "1954",
      "1960",
      "1994"
    ],
    "answer": {
      "Niepodległość Indii i Pakistanu": "1947",
      "Klęska Francji pod Dien Bien Phu": "1954",
      "Rok Afryki": "1960",
      "Zniesienie apartheidu w RPA": "1994"
    },
    "explanation": "Indie i Pakistan uzyskały niepodległość w 1947 r., Francja przegrała pod Dien Bien Phu w 1954 r., rok 1960 nazwano rokiem Afryki, a apartheid w RPA zniesiono w 1994 r."
  },
  {
    "id": "R02_DEK_06",
    "section": "Dekolonizacja",
    "type": "single_choice",
    "prompt": "Jaki bezpośredni skutek miała klęska Francji pod Dien Bien Phu w 1954 r.?",
    "options": [
      "Wycofanie Francji z Indochin",
      "Powstanie muru berlińskiego",
      "Przystąpienie RFN do NATO",
      "Utworzenie ONZ",
      "Początek rewolucji kulturalnej w Chinach",
      "Zniesienie apartheidu w RPA"
    ],
    "answer": 0,
    "explanation": "Porażka wojsk francuskich skłoniła Francję do opuszczenia Indochin, a wspólnota międzynarodowa uznała niepodległe państwa regionu."
  },
  {
    "id": "R02_DEK_07",
    "section": "Dekolonizacja",
    "type": "single_choice",
    "prompt": "Dlaczego rok 1960 nazwano \"rokiem Afryki\"?",
    "options": [
      "Powstało wtedy 17 niepodległych państw afrykańskich",
      "Zakończyła się wtedy II wojna światowa",
      "Utworzono wtedy RPA",
      "Wszystkie kraje Afryki przyjęły komunizm",
      "Rozpoczęła się kolonizacja kontynentu",
      "ONZ przeniosła siedzibę do Afryki"
    ],
    "answer": 0,
    "explanation": "W 1960 r. aż 17 afrykańskich kolonii uzyskało niepodległość, dlatego rok ten nazwano rokiem Afryki.",
    "image": "r02_afryka_niepodleglosc.jpg"
  },
  {
    "id": "R02_DEK_08",
    "section": "Dekolonizacja",
    "type": "fill_in",
    "prompt": "System segregacji rasowej w Republice Południowej Afryki nazywał się __________ i został zniesiony w roku __________.",
    "options": null,
    "answer": [
      "apartheid",
      "1994"
    ],
    "altAnswers": [
      [
        "apartheid",
        "aparthejd"
      ],
      [
        "1994",
        "1994 r.",
        "w 1994"
      ]
    ],
    "explanation": "Apartheid oddzielał ludność białą od kolorowej i ograniczał prawa czarnoskórej większości. System zniesiono w 1994 r."
  },
  {
    "id": "R02_DEK_09",
    "section": "Dekolonizacja",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do określeń państw postkolonialnych: Trzeci Świat, globalne Południe, kraje rozwijające się, Europejska Wspólnota Węgla i Stali.",
    "options": null,
    "answer": "Europejska Wspólnota Węgla i Stali",
    "explanation": "Trzeci Świat, globalne Południe i kraje rozwijające się odnoszą się do państw postkolonialnych. EWWiS była organizacją integracji Europy Zachodniej."
  },
  {
    "id": "R02_DEK_10",
    "section": "Dekolonizacja",
    "type": "sort",
    "prompt": "Przyporządkuj skutki dekolonizacji do pozytywnych albo negatywnych.",
    "options": null,
    "items": [
      "niepodległość nowych państw",
      "równe prawa i duma z własnej kultury",
      "powstawanie dyktatur",
      "krwawe konflikty etniczne",
      "trudności gospodarcze",
      "neokolonialne uzależnienie od silniejszych państw"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "niepodległość nowych państw",
        "równe prawa i duma z własnej kultury"
      ],
      "negatywne": [
        "powstawanie dyktatur",
        "krwawe konflikty etniczne",
        "trudności gospodarcze",
        "neokolonialne uzależnienie od silniejszych państw"
      ]
    },
    "explanation": "Dekolonizacja zakończyła zależność kolonialną, ale w wielu nowych państwach pojawiły się dyktatury, konflikty, problemy gospodarcze i nowe formy zależności."
  },
  {
    "id": "R02_KON_01",
    "section": "Konflikty zimnej wojny",
    "type": "single_choice",
    "prompt": "Wzdłuż którego równoleżnika w 1945 r. przebiegała granica między radziecką i amerykańską strefą okupacyjną w Korei?",
    "options": [
      "38. równoleżnika",
      "17. równoleżnika",
      "49. równoleżnika",
      "30. równoleżnika",
      "45. równoleżnika",
      "60. równoleżnika"
    ],
    "answer": 0,
    "explanation": "Po II wojnie światowej Korea została podzielona wzdłuż 38. równoleżnika na strefę radziecką na północy i amerykańską na południu.",
    "image": "r02_korea_zolnierze.jpg"
  },
  {
    "id": "R02_KON_02",
    "section": "Konflikty zimnej wojny",
    "type": "sequence",
    "prompt": "Ułóż główne etapy wojny w Korei w kolejności.",
    "options": null,
    "items": [
      "Chińscy \"ochotnicy\" odrzucają siły ONZ na południe",
      "Korea Północna atakuje Koreę Południową",
      "Rozejm rozdziela oba państwa wzdłuż linii frontu",
      "Siły ONZ wypierają napastników i docierają prawie do granicy Chin"
    ],
    "answer": [
      "Korea Północna atakuje Koreę Południową",
      "Siły ONZ wypierają napastników i docierają prawie do granicy Chin",
      "Chińscy \"ochotnicy\" odrzucają siły ONZ na południe",
      "Rozejm rozdziela oba państwa wzdłuż linii frontu"
    ],
    "explanation": "Po ataku Korei Północnej siły ONZ przeszły do kontrataku, następnie do wojny wkroczyły wojska chińskie, a w 1953 r. podpisano rozejm."
  },
  {
    "id": "R02_KON_03",
    "section": "Konflikty zimnej wojny",
    "type": "match",
    "prompt": "Połącz konflikt z jego wynikiem lub następstwem.",
    "options": null,
    "left": [
      "Wojna w Korei",
      "Kryzys kubański",
      "Wojna w Wietnamie",
      "Wojna w Afganistanie"
    ],
    "right": [
      "rozejm z 1953 r. i utrzymanie podziału półwyspu",
      "demontaż radzieckich wyrzutni i powstanie gorącej linii",
      "zdobycie Sajgonu przez Północ i zjednoczenie państwa",
      "wycofanie Armii Radzieckiej i pozostawienie kraju w wojnie domowej"
    ],
    "answer": {
      "Wojna w Korei": "rozejm z 1953 r. i utrzymanie podziału półwyspu",
      "Kryzys kubański": "demontaż radzieckich wyrzutni i powstanie gorącej linii",
      "Wojna w Wietnamie": "zdobycie Sajgonu przez Północ i zjednoczenie państwa",
      "Wojna w Afganistanie": "wycofanie Armii Radzieckiej i pozostawienie kraju w wojnie domowej"
    },
    "explanation": "Każdy z tych konfliktów zakończył się inaczej: Korea rozejmem, Kuba kompromisem supermocarstw, Wietnam zwycięstwem Północy, a Afganistan wycofaniem wojsk radzieckich."
  },
  {
    "id": "R02_KON_04",
    "section": "Konflikty zimnej wojny",
    "type": "scenario",
    "prompt": "Amerykański samolot szpiegowski wykrywa na wyspie radzieckie wyrzutnie rakiet z głowicami jądrowymi. Prezydent Kennedy zarządza blokadę morską. Jak nazywa się ten kryzys?",
    "options": [
      "Kryzys kubański",
      "Kryzys berliński",
      "Wojna koreańska",
      "Praska Wiosna",
      "Wojna sześciodniowa",
      "Kryzys sueski"
    ],
    "answer": 0,
    "explanation": "W październiku 1962 r. odkrycie radzieckich wyrzutni na Kubie doprowadziło do kryzysu kubańskiego, który groził wojną nuklearną."
  },
  {
    "id": "R02_KON_05",
    "section": "Konflikty zimnej wojny",
    "type": "multi_select",
    "prompt": "Zaznacz skutki kryzysu kubańskiego.",
    "options": [
      "Uniknięcie bezpośredniego konfliktu nuklearnego",
      "Powstanie gorącej linii między ZSRR a USA",
      "Utrata władzy przez Chruszczowa w 1964 r.",
      "Pozostanie Kuby państwem socjalistycznym",
      "Natychmiastowy upadek rządu Fidela Castro",
      "Przyłączenie Kuby do Stanów Zjednoczonych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kryzys zakończył się kompromisem, powstała gorąca linia, Chruszczow został później odsunięty od władzy, a Kuba pozostała państwem socjalistycznym.",
    "image": "r02_kuba_wyrzutnie.jpg"
  },
  {
    "id": "R02_KON_06",
    "section": "Konflikty zimnej wojny",
    "type": "fill_in",
    "prompt": "Stolicą komunistycznego Wietnamu Północnego było __________, a stolicą antykomunistycznego Wietnamu Południowego był __________.",
    "options": null,
    "answer": [
      "Hanoi",
      "Sajgon"
    ],
    "altAnswers": [
      [
        "Hanoi",
        "hanoi"
      ],
      [
        "Sajgon",
        "sajgon"
      ]
    ],
    "explanation": "Po podziale Wietnamu w 1954 r. północ miała stolicę w Hanoi, a południe w Sajgonie."
  },
  {
    "id": "R02_KON_07",
    "section": "Konflikty zimnej wojny",
    "type": "scenario",
    "prompt": "W 1964 r. USA rozpoczynają bombardowania celów w Wietnamie Północnym, a później wysyłają setki tysięcy żołnierzy. Jaki był główny cel tej interwencji?",
    "options": [
      "Niedopuszczenie do przejęcia Wietnamu Południowego przez komunistów",
      "Przyłączenie Wietnamu do Japonii",
      "Odbudowa francuskiego imperium kolonialnego",
      "Utworzenie na południu państwa komunistycznego",
      "Zdobycie terytorium Chin",
      "Wsparcie Wietkongu"
    ],
    "answer": 0,
    "explanation": "USA uznały, że bez pomocy wojskowej Wietnam Południowy zostanie opanowany przez komunistów z Wietkongu i Wietnamu Północnego.",
    "image": "r02_wietnam_helikoptery.jpg"
  },
  {
    "id": "R02_KON_08",
    "section": "Konflikty zimnej wojny",
    "type": "true_false",
    "prompt": "USA wycofały swoje wojska z Wietnamu w 1973 r., Sajgon padł w 1975 r., a rok później powstała zjednoczona Socjalistyczna Republika Wietnamu.",
    "options": null,
    "answer": true,
    "explanation": "Amerykańskie wojska opuściły Wietnam Południowy po porozumieniu z 1973 r., a zwycięstwo Północy doprowadziło do zjednoczenia kraju."
  },
  {
    "id": "R02_KON_09",
    "section": "Konflikty zimnej wojny",
    "type": "riddle",
    "prompt": "Jak nazywano muzułmańskich partyzantów walczących w Afganistanie przeciwko wojskom rządowym i Armii Radzieckiej?",
    "options": null,
    "answer": "mudżahedini",
    "altAnswers": [
      "mudżahedini",
      "mudzahedini",
      "mudżahidzi"
    ],
    "explanation": "Mudżahedini prowadzili wojnę partyzancką, byli wspierani przez Zachód i państwa arabskie oraz kontrolowali znaczną część kraju."
  },
  {
    "id": "R02_KON_10",
    "section": "Konflikty zimnej wojny",
    "type": "multi_select",
    "prompt": "Zaznacz informacje pasujące do wojny w Afganistanie w latach 1979-1989.",
    "options": [
      "Armia Radziecka wkroczyła do kraju na prośbę afgańskich komunistów",
      "Mudżahedini prowadzili wojnę partyzancką",
      "Mudżahedinów wspierały państwa zachodnie i arabskie",
      "Wojska radzieckie opanowały głównie miasta i ważne szlaki komunikacyjne",
      "Wojna zakończyła się pełnym zwycięstwem ZSRR",
      "Po wycofaniu wojsk radzieckich Afganistan natychmiast stał się stabilnym państwem"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Interwencja radziecka nie przyniosła zwycięstwa. Mudżahedini prowadzili skuteczną partyzantkę, a po wycofaniu ZSRR kraj pozostał zniszczony i pogrążony w wojnie domowej."
  },
  {
    "id": "R02_BLI_01",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "single_choice",
    "prompt": "Co przewidywała tajna umowa Sykes-Picot z 1916 r.?",
    "options": [
      "Podział części ziem arabskich między Wielką Brytanię i Francję",
      "Utworzenie państwa Izrael",
      "Powstanie Organizacji Wyzwolenia Palestyny",
      "Wycofanie Francji z Indochin",
      "Utworzenie NATO",
      "Podział Korei wzdłuż 38. równoleżnika"
    ],
    "answer": 0,
    "explanation": "Umowa Sykes-Picot przewidywała powojenny podział ziem arabskich między Wielką Brytanię i Francję, mimo wcześniejszych brytyjskich obietnic składanych Arabom."
  },
  {
    "id": "R02_BLI_02",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "riddle",
    "prompt": "Jak nazywał się żydowski ruch narodowy, który głosił potrzebę utworzenia żydowskiego państwa w Palestynie?",
    "options": null,
    "answer": "syjonizm",
    "altAnswers": [
      "syjonizm"
    ],
    "explanation": "Syjonizm powstał pod koniec XIX w. i traktował własne państwo w Palestynie jako odpowiedź na antysemityzm i brak bezpiecznej ojczyzny."
  },
  {
    "id": "R02_BLI_03",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "multi_select",
    "prompt": "Zaznacz elementy planu podziału Palestyny przyjętego przez Zgromadzenie Ogólne ONZ w 1947 r.",
    "options": [
      "Utworzenie państwa żydowskiego",
      "Utworzenie państwa arabskiego",
      "Objęcie Jerozolimy i Betlejem kontrolą międzynarodową",
      "Przyłączenie całej Palestyny do Egiptu",
      "Likwidacja wszystkich miejsc świętych",
      "Przyłączenie całej Palestyny do Jordanii"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Plan ONZ przewidywał dwa państwa oraz międzynarodowy status Jerozolimy i Betlejem ze względu na ich znaczenie religijne."
  },
  {
    "id": "R02_BLI_04",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "scenario",
    "prompt": "Dzień po ogłoszeniu niepodległości nowo utworzone państwo zostaje zaatakowane przez wojska m.in. Egiptu, Jordanii, Syrii i Iraku. Jaki konflikt się rozpoczyna?",
    "options": [
      "Pierwsza wojna arabsko-żydowska",
      "Wojna sześciodniowa",
      "Wojna koreańska",
      "Wojna w Afganistanie",
      "Kryzys kubański",
      "Praska Wiosna"
    ],
    "answer": 0,
    "explanation": "Po ogłoszeniu niepodległości Izraela w maju 1948 r. rozpoczęła się pierwsza wojna arabsko-żydowska, trwająca do 1949 r.",
    "image": "r02_izrael_1948.jpg"
  },
  {
    "id": "R02_BLI_05",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "true_false",
    "prompt": "Po pierwszej wojnie arabsko-żydowskiej Izrael powiększył swoje terytorium, a ponad 700 tysięcy Palestyńczyków uciekło do sąsiednich krajów arabskich.",
    "options": null,
    "answer": true,
    "explanation": "Izrael zwyciężył i zwiększył obszar o blisko jedną trzecią, a wojna wywołała masowy exodus ludności palestyńskiej."
  },
  {
    "id": "R02_BLI_06",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "fill_in",
    "prompt": "W roku __________ Palestyńczycy założyli __________, której celem było utworzenie świeckiego państwa arabskiego na całym obszarze Palestyny.",
    "options": null,
    "answer": [
      "1964",
      "Organizację Wyzwolenia Palestyny"
    ],
    "altAnswers": [
      [
        "1964",
        "1964 r.",
        "w 1964"
      ],
      [
        "Organizację Wyzwolenia Palestyny",
        "Organizacja Wyzwolenia Palestyny",
        "OWP"
      ]
    ],
    "explanation": "Organizacja Wyzwolenia Palestyny powstała w 1964 r. i przez wiele lat prowadziła walkę z Izraelem, także metodami terrorystycznymi."
  },
  {
    "id": "R02_BLI_07",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "sort",
    "prompt": "Przyporządkuj państwa i organizację do stron zimnowojennego układu na Bliskim Wschodzie.",
    "options": null,
    "items": [
      "Francja",
      "Stany Zjednoczone",
      "Egipt",
      "Syria",
      "Libia",
      "OWP"
    ],
    "categories": [
      "sojusznicy Izraela",
      "wspierani przez ZSRR"
    ],
    "answer": {
      "sojusznicy Izraela": [
        "Francja",
        "Stany Zjednoczone"
      ],
      "wspierani przez ZSRR": [
        "Egipt",
        "Syria",
        "Libia",
        "OWP"
      ]
    },
    "explanation": "Izrael najpierw związał się z Francją, później z USA. Antyzachodnie władze Egiptu, Syrii i Libii oraz OWP otrzymywały wsparcie ze strony bloku sowieckiego."
  },
  {
    "id": "R02_BLI_08",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z konfliktem bliskowschodnim w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie OWP",
      "Wojna sześciodniowa",
      "Umowa Sykes-Picot",
      "Powstanie państwa Izrael",
      "Plan podziału Palestyny przez ONZ"
    ],
    "answer": [
      "Umowa Sykes-Picot",
      "Plan podziału Palestyny przez ONZ",
      "Powstanie państwa Izrael",
      "Powstanie OWP",
      "Wojna sześciodniowa"
    ],
    "explanation": "Umowę Sykes-Picot zawarto w 1916 r., plan ONZ przyjęto w 1947 r., Izrael powstał w 1948 r., OWP w 1964 r., a wojna sześciodniowa wybuchła w 1967 r."
  },
  {
    "id": "R02_BLI_09",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "single_choice",
    "prompt": "Co przesądziło o przewadze Izraela już pierwszego dnia wojny sześciodniowej?",
    "options": [
      "Zniszczenie przez izraelskie lotnictwo niemal wszystkich samolotów bojowych Egiptu",
      "Wycofanie wszystkich wojsk arabskich bez walki",
      "Interwencja wojsk ONZ po stronie Izraela",
      "Zajęcie Kuby przez Izrael",
      "Rozpad NATO",
      "Wystąpienie Egiptu z ONZ"
    ],
    "answer": 0,
    "explanation": "Izrael uprzedził przygotowywany atak i pierwszego dnia zniszczył większość egipskiego lotnictwa bojowego, co dało mu znaczną przewagę.",
    "image": "r02_wojna_szescodniowa.jpg"
  },
  {
    "id": "R02_BLI_10",
    "section": "Konflikt na Bliskim Wschodzie",
    "type": "match",
    "prompt": "Połącz zdobycz Izraela z państwem, któremu została odebrana w 1967 r.",
    "options": null,
    "left": [
      "Wschodnia Jerozolima i Zachodni Brzeg Jordanu",
      "Półwysep Synaj i Strefa Gazy",
      "Wzgórza Golan"
    ],
    "right": [
      "Jordania",
      "Egipt",
      "Syria"
    ],
    "answer": {
      "Wschodnia Jerozolima i Zachodni Brzeg Jordanu": "Jordania",
      "Półwysep Synaj i Strefa Gazy": "Egipt",
      "Wzgórza Golan": "Syria"
    },
    "explanation": "Wojna sześciodniowa przyniosła Izraelowi zdobycze kosztem Jordanii, Egiptu i Syrii."
  },
  {
    "id": "R02_CHI_01",
    "section": "Chiny i Japonia",
    "type": "single_choice",
    "prompt": "Kto wygrał wznowioną po II wojnie światowej chińską wojnę domową?",
    "options": [
      "Komuniści Mao Zedonga",
      "Kuomintang",
      "Wojska japońskie",
      "Armia brytyjska",
      "Wojska francuskie",
      "Siły ONZ"
    ],
    "answer": 0,
    "explanation": "Komuniści uzyskali poparcie milionów chłopów dzięki obietnicy ziemi i w 1949 r. pokonali Kuomintang."
  },
  {
    "id": "R02_CHI_02",
    "section": "Chiny i Japonia",
    "type": "match",
    "prompt": "Połącz element chińskiej wojny domowej z właściwym opisem.",
    "options": null,
    "left": [
      "Mao Zedong",
      "Kuomintang",
      "Chińscy chłopi",
      "Tajwan"
    ],
    "right": [
      "przywódca komunistów",
      "Partia Narodowa",
      "grupa pozyskana obietnicą ziemi",
      "miejsce schronienia pokonanych wojsk narodowych"
    ],
    "answer": {
      "Mao Zedong": "przywódca komunistów",
      "Kuomintang": "Partia Narodowa",
      "Chińscy chłopi": "grupa pozyskana obietnicą ziemi",
      "Tajwan": "miejsce schronienia pokonanych wojsk narodowych"
    },
    "explanation": "Mao przewodził komunistom, Kuomintang był Partią Narodową, chłopi poparli komunistów w zamian za obietnicę ziemi, a pokonane wojska Kuomintangu wycofały się na Tajwan."
  },
  {
    "id": "R02_CHI_03",
    "section": "Chiny i Japonia",
    "type": "fill_in",
    "prompt": "Plan społeczno-gospodarczy Mao Zedonga z lat __________ nazywano __________.",
    "options": null,
    "answer": [
      "1958-1961",
      "wielkim skokiem naprzód"
    ],
    "altAnswers": [
      [
        "1958-1961",
        "1958–1961",
        "1958 do 1961"
      ],
      [
        "wielkim skokiem naprzód",
        "wielki skok naprzód",
        "wielkim skokiem"
      ]
    ],
    "explanation": "Wielki skok naprzód trwał w latach 1958-1961 i miał gwałtownie zwiększyć produkcję przemysłową oraz oprzeć rolnictwo na komunach ludowych."
  },
  {
    "id": "R02_CHI_04",
    "section": "Chiny i Japonia",
    "type": "multi_select",
    "prompt": "Zaznacz elementy polityki \"wielkiego skoku naprzód\".",
    "options": [
      "Tworzenie komun ludowych",
      "Budowa prymitywnych dymarek do wytopu żelaza",
      "Dążenie do gwałtownego wzrostu produkcji przemysłowej",
      "Eksperymenty rolnicze prowadzące m.in. do wybicia wróbli",
      "Przywrócenie prywatnej własności wielkich majątków",
      "Ograniczenie produkcji stali"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wielki skok opierał się na komunach, masowej mobilizacji taniej siły roboczej, dymarkach i eksperymentach rolniczych, które przyczyniły się do katastrofy."
  },
  {
    "id": "R02_CHI_05",
    "section": "Chiny i Japonia",
    "type": "true_false",
    "prompt": "Wielki głód chiński w latach 1959-1961 był skutkiem błędnych decyzji Mao i fatalnego zarządzania komun ludowych, a zmarło około 30 milionów ludzi.",
    "options": null,
    "answer": true,
    "explanation": "Spadek produkcji żywności doprowadził do wielkiej klęski głodu, w której zmarło około 30 milionów osób."
  },
  {
    "id": "R02_CHI_06",
    "section": "Chiny i Japonia",
    "type": "scenario",
    "prompt": "Jest rok 1966. Miliony młodych ludzi tworzą paramilitarną organizację, są bezwzględnie posłuszni Mao i studiują jego \"czerwoną książeczkę\". Jak nazywa się ta organizacja?",
    "options": [
      "Czerwona Gwardia",
      "Kuomintang",
      "Wietkong",
      "OWP",
      "RWPG",
      "Układ Warszawski"
    ],
    "answer": 0,
    "explanation": "Czerwona Gwardia była masową organizacją młodzieżową wykorzystywaną przez Mao podczas rewolucji kulturalnej."
  },
  {
    "id": "R02_CHI_07",
    "section": "Chiny i Japonia",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do działań Czerwonej Gwardii podczas rewolucji kulturalnej: niszczenie zabytków, palenie książek, prześladowanie intelektualistów, publiczne upokarzanie przeciwników Mao, wprowadzenie wolnej prasy.",
    "options": null,
    "answer": "wprowadzenie wolnej prasy",
    "explanation": "Rewolucja kulturalna wiązała się z niszczeniem kultury i prześladowaniami, a nie z wprowadzeniem swobodnej prasy.",
    "image": "r02_mao_czerwona_gwardia.jpg"
  },
  {
    "id": "R02_CHI_08",
    "section": "Chiny i Japonia",
    "type": "riddle",
    "prompt": "Jak nazywała się odmiana komunizmu związana z Mao Zedongiem, która uznawała masy chłopskie za główną siłę rewolucji i zakładała potrzebę nieustającej rewolucji?",
    "options": null,
    "answer": "maoizm",
    "altAnswers": [
      "maoizm"
    ],
    "explanation": "Maoizm był doktryną Mao Zedonga, która przypisywała szczególną rolę chłopom i podkreślała znaczenie ciągłej walki rewolucyjnej."
  },
  {
    "id": "R02_CHI_09",
    "section": "Chiny i Japonia",
    "type": "scenario",
    "prompt": "Po kapitulacji Japonii amerykański generał zachowuje cesarza na tronie, zmusza go do zrzeczenia się boskości i przygotowuje demokratyczną konstytucję. O kogo chodzi?",
    "options": [
      "Douglas MacArthur",
      "Harry Truman",
      "Dwight Eisenhower",
      "John Kennedy",
      "Clement Attlee",
      "George Marshall"
    ],
    "answer": 0,
    "explanation": "Generał Douglas MacArthur kierował amerykańską okupacją i odegrał decydującą rolę w reformowaniu powojennej Japonii."
  },
  {
    "id": "R02_CHI_10",
    "section": "Chiny i Japonia",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które przyczyniły się do japońskiego cudu gospodarczego po II wojnie światowej.",
    "options": [
      "Pomoc gospodarcza USA",
      "Zamówienia amerykańskie podczas wojny koreańskiej",
      "Import zachodnich technologii",
      "Pracowitość i oszczędność Japończyków",
      "Niskie wydatki państwa na obronność",
      "Ogromne wydatki na własną armię",
      "Izolacja od technologii zagranicznych"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Na szybki rozwój Japonii złożyły się amerykańska pomoc i zamówienia, nowoczesne technologie, wysoka oszczędność oraz niewielkie koszty obronności.",
    "image": "r02_japonia_macarthur_hirohito.jpg"
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia zimnej wojny w Europie od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Praska Wiosna",
      "Powstanie RFN i NRD",
      "Blokada Berlina",
      "Budowa muru berlińskiego",
      "Powstanie Układu Warszawskiego",
      "Konferencja poczdamska"
    ],
    "answer": [
      "Konferencja poczdamska",
      "Blokada Berlina",
      "Powstanie RFN i NRD",
      "Powstanie Układu Warszawskiego",
      "Budowa muru berlińskiego",
      "Praska Wiosna"
    ],
    "explanation": "Kolejność wyznaczają lata 1945, 1948-1949, 1949, 1955, 1961 i 1968."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rok z wydarzeniem.",
    "options": null,
    "left": [
      "1947",
      "1950",
      "1956",
      "1962",
      "1968"
    ],
    "right": [
      "doktryna Trumana",
      "wybuch wojny w Korei",
      "rewolucja węgierska",
      "kryzys kubański",
      "Praska Wiosna"
    ],
    "answer": {
      "1947": "doktryna Trumana",
      "1950": "wybuch wojny w Korei",
      "1956": "rewolucja węgierska",
      "1962": "kryzys kubański",
      "1968": "Praska Wiosna"
    },
    "explanation": "Te daty należą do kluczowych momentów zimnej wojny i obejmują zarówno Europę, jak i konflikty pozaeuropejskie."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do państw założycielskich Europejskiej Wspólnoty Węgla i Stali: Francja, RFN, Włochy, Belgia, Czechosłowacja.",
    "options": null,
    "answer": "Czechosłowacja",
    "explanation": "EWWiS utworzyły Francja, RFN, Włochy oraz kraje Beneluksu. Czechosłowacja należała do bloku komunistycznego."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para wydarzeń miała miejsce w 1949 r.?",
    "options": [
      "Powstanie Chińskiej Republiki Ludowej oraz utworzenie RFN i NRD",
      "Kryzys kubański oraz budowa muru berlińskiego",
      "Rewolucja węgierska oraz śmierć Stalina",
      "Wojna sześciodniowa oraz powstanie OWP",
      "Rok Afryki oraz początek wielkiego skoku",
      "Konferencja poczdamska oraz powstanie Układu Warszawskiego"
    ],
    "answer": 0,
    "explanation": "W 1949 r. komuniści utworzyli Chińską Republikę Ludową, a w Niemczech powstały RFN i NRD."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Premier państwa komunistycznego ogłasza w 1956 r. zniesienie systemu jednopartyjnego, wystąpienie z Układu Warszawskiego i prosi ONZ o zagwarantowanie neutralności. O jakie państwo chodzi?",
    "options": [
      "Węgry",
      "NRD",
      "Polska",
      "Bułgaria",
      "Rumunia",
      "Albania"
    ],
    "answer": 0,
    "explanation": "Imre Nagy próbował w 1956 r. uniezależnić Węgry od Moskwy. ZSRR odpowiedział ponowną interwencją wojskową."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rada Wzajemnej Pomocy Gospodarczej powstała w roku __________, a Europejska Wspólnota Węgla i Stali rozpoczęła działalność w roku __________.",
    "options": null,
    "answer": [
      "1949",
      "1952"
    ],
    "altAnswers": [
      [
        "1949",
        "1949 r.",
        "w 1949"
      ],
      [
        "1952",
        "1952 r.",
        "w 1952"
      ]
    ],
    "explanation": "RWPG utworzono w Moskwie w 1949 r., natomiast EWWiS rozpoczęła działalność w 1952 r. jako pierwszy krok integracji Europy Zachodniej."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do regionów, w których się rozgrywały.",
    "options": null,
    "items": [
      "blokada Berlina",
      "rewolucja węgierska",
      "bitwa pod Dien Bien Phu",
      "wojna w Korei",
      "wojna sześciodniowa",
      "powstanie OWP",
      "rok Afryki",
      "apartheid w RPA"
    ],
    "categories": [
      "Europa",
      "Azja Wschodnia i Południowo-Wschodnia",
      "Bliski Wschód",
      "Afryka"
    ],
    "answer": {
      "Europa": [
        "blokada Berlina",
        "rewolucja węgierska"
      ],
      "Azja Wschodnia i Południowo-Wschodnia": [
        "bitwa pod Dien Bien Phu",
        "wojna w Korei"
      ],
      "Bliski Wschód": [
        "wojna sześciodniowa",
        "powstanie OWP"
      ],
      "Afryka": [
        "rok Afryki",
        "apartheid w RPA"
      ]
    },
    "explanation": "Wydarzenia zimnej wojny i dekolonizacji rozgrywały się jednocześnie w wielu regionach świata."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 1949 r. ZSRR posiadał już własną bombę atomową, a w tym samym roku Mao Zedong ogłosił powstanie Chińskiej Republiki Ludowej.",
    "options": null,
    "answer": true,
    "explanation": "Oba wydarzenia z 1949 r. zmieniły układ sił zimnej wojny na niekorzyść Zachodu."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Państwo powstało w 1948 r., początkowo związało się z Francją, później ze Stanami Zjednoczonymi, a w 1967 r. odniosło zwycięstwo w wojnie sześciodniowej. O jakie państwo chodzi?",
    "options": [
      "Izrael",
      "Egipt",
      "Syria",
      "Jordania",
      "Libia",
      "Irak"
    ],
    "answer": 0,
    "explanation": "Izrael ogłosił niepodległość w 1948 r., szukał zachodnich sojuszników i w 1967 r. wygrał wojnę sześciodniową."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej porównuje powojenny podział Niemiec i Korei?",
    "options": [
      "W obu przypadkach podział wiązał się ze strefami wpływów ZSRR i USA, ale tylko w Korei doszło do wojny między dwoma powstałymi państwami",
      "W obu przypadkach natychmiast powstały jednolite państwa komunistyczne",
      "Niemcy podzielono wzdłuż 38. równoleżnika, a Koreę na cztery strefy",
      "Tylko Niemcy znalazły się pod wpływem ZSRR i USA",
      "W obu przypadkach granica zniknęła przed 1950 r.",
      "Korea została podzielona przez plan Schumana"
    ],
    "answer": 0,
    "explanation": "Niemcy i Korea zostały podzielone w warunkach rywalizacji supermocarstw. W Korei w 1950 r. wybuchła wojna między Północą i Południem, natomiast w Niemczech do takiej wojny nie doszło."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywano zasadę głoszącą ograniczoną suwerenność państw Układu Warszawskiego i prawo ZSRR do interwencji, gdy zagrożony był istniejący porządek?",
    "options": null,
    "answer": "doktryna Breżniewa",
    "altAnswers": [
      "doktryna Breżniewa",
      "doktryna Brezniewa"
    ],
    "explanation": "Doktryna Breżniewa została sformułowana w związku z Praską Wiosną i służyła uzasadnieniu radzieckiej ingerencji w państwach bloku."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia, w których wojska radzieckie bezpośrednio wkroczyły do innego państwa.",
    "options": [
      "Rewolucja węgierska 1956 r.",
      "Praska Wiosna 1968 r.",
      "Wojna w Afganistanie od 1979 r.",
      "Wojna w Korei",
      "Wojna w Wietnamie",
      "Kryzys kubański"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wojska radzieckie interweniowały na Węgrzech, uczestniczyły w inwazji na Czechosłowację i wkroczyły do Afganistanu. W Korei, Wietnamie i na Kubie ZSRR wspierał sojuszników w inny sposób."
  }
];

const chapter = {
  id: "r02",
  number: 2,
  title: "Zimna wojna",
  icon: "🌐",
  sectionOrder: [
    "Powojenny świat i początek zimnej wojny",
    "Podzielone Niemcy i dwa bloki",
    "Dekolonizacja",
    "Konflikty zimnej wojny",
    "Konflikt na Bliskim Wschodzie",
    "Chiny i Japonia"
  ],
  sectionIcons: {
    "Powojenny świat i początek zimnej wojny": "🌍",
    "Podzielone Niemcy i dwa bloki": "🏭",
    "Dekolonizacja": "🌱",
    "Konflikty zimnej wojny": "💥",
    "Konflikt na Bliskim Wschodzie": "🌅",
    "Chiny i Japonia": "🐉"
  },
  exercises: ALL_EXERCISES
};

export default chapter;
