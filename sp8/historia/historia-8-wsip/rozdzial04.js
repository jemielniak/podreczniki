// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DEK  = Nowa mapa świata - dekolonizacja
//   BLI  = Bliski Wschód - konflikty arabsko-izraelskie
//   ZIM  = Rywalizacja Stanów Zjednoczonych i ZSRS
//   DAL  = Daleki Wschód - Chiny i Japonia
//   INT  = Proces integracji europejskiej
//   KUL  = Przemiany społeczne i kulturowe w drugiej połowie XX wieku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_DEK_01",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie dekolonizacja?",
    "options": [
      "Tworzenie nowych kolonii przez państwa europejskie",
      "Wyzwalanie kolonii i powstawanie niepodległych państw",
      "Łączenie kolonii w jedno imperium",
      "Wprowadzanie apartheidu w Afryce",
      "Podział Europy na dwa bloki",
      "Rozpad organizacji międzynarodowych"
    ],
    "answer": 1,
    "explanation": "Dekolonizacja to wyzwalanie się obszarów zależnych spod władzy mocarstw kolonialnych i tworzenie na tych terytoriach niepodległych państw."
  },
  {
    "id": "R04_DEK_02",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które sprzyjały dekolonizacji po 1945 r.",
    "options": [
      "Osłabienie Wielkiej Brytanii i Francji po II wojnie światowej",
      "Dążenia narodów Afryki i Azji do własnych państw",
      "Krytyka kolonializmu przez Stany Zjednoczone i ZSRS",
      "Poparcie ONZ dla dekolonizacji",
      "Wzmocnienie europejskich imperiów kolonialnych",
      "Zakaz tworzenia nowych państw w Afryce"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dekolonizacji sprzyjały osłabienie mocarstw kolonialnych, nacisk ruchów narodowowyzwoleńczych, krytyka kolonializmu przez USA i ZSRS oraz poparcie ONZ dla tego procesu."
  },
  {
    "id": "R04_DEK_03",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "single_choice",
    "prompt": "W którym roku Wielka Brytania uznała prawo Indii do niepodległości?",
    "options": [
      "1945",
      "1947",
      "1954",
      "1960",
      "1962",
      "1963"
    ],
    "answer": 1,
    "explanation": "Po długich negocjacjach Wielka Brytania uznała prawo Indii do niepodległości w 1947 r."
  },
  {
    "id": "R04_DEK_04",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "riddle",
    "prompt": "Jak nazywał się przywódca indyjskiego ruchu niepodległościowego, który propagował walkę bez przemocy?",
    "options": null,
    "answer": "Mahatma Gandhi",
    "altAnswers": [
      "Mahatma Gandhi",
      "Mohandas Karamchand Gandhi",
      "Gandhi"
    ],
    "explanation": "Mahatma Gandhi stał na czele Indyjskiego Kongresu Narodowego i zachęcał do pokojowych metod walki, takich jak petycje, głodówki, manifestacje i strajki."
  },
  {
    "id": "R04_DEK_05",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Powstanie Organizacji Jedności Afrykańskiej",
      "Niepodległość Indii",
      "Wybór Nelsona Mandeli na prezydenta RPA",
      "Początek wojny algierskiej",
      "Rok Afryki"
    ],
    "answer": [
      "Niepodległość Indii",
      "Początek wojny algierskiej",
      "Rok Afryki",
      "Powstanie Organizacji Jedności Afrykańskiej",
      "Wybór Nelsona Mandeli na prezydenta RPA"
    ],
    "explanation": "Indie uzyskały niepodległość w 1947 r., wojna algierska rozpoczęła się w 1954 r., Rok Afryki przypadł na 1960 r., Organizację Jedności Afrykańskiej założono w 1963 r., a Nelson Mandela został prezydentem RPA w 1994 r."
  },
  {
    "id": "R04_DEK_06",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "true_false",
    "prompt": "W 1960 r., nazywanym Rokiem Afryki, niepodległość ogłosiło 17 państw afrykańskich.",
    "options": null,
    "answer": true,
    "explanation": "Rok 1960 nazwano Rokiem Afryki, ponieważ właśnie wtedy niepodległość ogłosiło aż 17 krajów tego kontynentu."
  },
  {
    "id": "R04_DEK_07",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "fill_in",
    "prompt": "System apartheidu w RPA obowiązywał w latach __________-__________.",
    "options": null,
    "answer": [
      "1948",
      "1994"
    ],
    "altAnswers": [
      [
        "1948",
        "1948 r."
      ],
      [
        "1994",
        "1994 r."
      ]
    ],
    "image": "r04_apartheid_rpa.jpg",
    "explanation": "Apartheid był systemem segregacji rasowej obowiązującym w Republice Południowej Afryki w latach 1948-1994."
  },
  {
    "id": "R04_DEK_08",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "match",
    "prompt": "Połącz miejsce z charakterystycznym sposobem lub zjawiskiem związanym z dekolonizacją.",
    "options": null,
    "left": [
      "Indie",
      "Algieria",
      "RPA"
    ],
    "right": [
      "pokojowe negocjacje z Wielką Brytanią",
      "wojna z Francją w latach 1954-1962",
      "system apartheidu"
    ],
    "answer": {
      "Indie": "pokojowe negocjacje z Wielką Brytanią",
      "Algieria": "wojna z Francją w latach 1954-1962",
      "RPA": "system apartheidu"
    },
    "explanation": "Indie są przykładem pokojowych negocjacji, Algieria długiej walki zbrojnej, a RPA państwa, w którym funkcjonował apartheid."
  },
  {
    "id": "R04_DEK_09",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "sort",
    "prompt": "Przyporządkuj skutki dekolonizacji do dwóch grup.",
    "options": null,
    "items": [
      "prawo narodów do samostanowienia",
      "powstanie niepodległych państw",
      "uzależnienie od eksportu surowców",
      "brak pieniędzy na inwestycje",
      "wojny domowe na tle etnicznym",
      "korupcja i dyktatury"
    ],
    "categories": [
      "skutki polityczne wyzwolenia",
      "problemy nowych państw"
    ],
    "answer": {
      "skutki polityczne wyzwolenia": [
        "prawo narodów do samostanowienia",
        "powstanie niepodległych państw"
      ],
      "problemy nowych państw": [
        "uzależnienie od eksportu surowców",
        "brak pieniędzy na inwestycje",
        "wojny domowe na tle etnicznym",
        "korupcja i dyktatury"
      ]
    },
    "image": "r04_oboz_uchodzcow_afryka.jpg",
    "explanation": "Dekolonizacja przywracała narodom prawo do samostanowienia, ale wiele nowych państw zmagało się z kryzysem gospodarczym, brakiem inwestycji i konfliktami wewnętrznymi."
  },
  {
    "id": "R04_DEK_10",
    "section": "Nowa mapa świata - dekolonizacja",
    "type": "odd_one_out",
    "prompt": "Wskaż metodę, która nie pasuje do pokojowych metod walki propagowanych przez Gandhiego: petycje, głodówki, manifestacje, zamach bombowy.",
    "options": null,
    "answer": "zamach bombowy",
    "image": "r04_gandhi_protest.jpg",
    "explanation": "Gandhi zachęcał do pokojowych form nacisku, m.in. petycji, głodówek, manifestacji i strajków, a odrzucał przemoc."
  },
  {
    "id": "R04_BLI_01",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "single_choice",
    "prompt": "Czym był syjonizm?",
    "options": [
      "Ruchem na rzecz utworzenia państwa żydowskiego w Palestynie",
      "Organizacją wojskową państw arabskich",
      "Systemem segregacji rasowej",
      "Programem integracji europejskiej",
      "Polityką gospodarczą Chin",
      "Ruchem przeciwko używaniu energii atomowej"
    ],
    "answer": 0,
    "explanation": "Syjonizm był ideologią i ruchem politycznym dążącym do utworzenia państwa żydowskiego w Palestynie i utrzymania jedności narodu żydowskiego żyjącego w diasporze."
  },
  {
    "id": "R04_BLI_02",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia konfliktu izraelsko-palestyńskiego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie Organizacji Wyzwolenia Palestyny",
      "Podział Palestyny przez ONZ",
      "Umowa Izraela z Palestyńczykami o autonomii",
      "Proklamowanie państwa Izrael",
      "Pierwsza wojna arabsko-izraelska"
    ],
    "answer": [
      "Podział Palestyny przez ONZ",
      "Proklamowanie państwa Izrael",
      "Pierwsza wojna arabsko-izraelska",
      "Powstanie Organizacji Wyzwolenia Palestyny",
      "Umowa Izraela z Palestyńczykami o autonomii"
    ],
    "explanation": "ONZ podzieliła Palestynę w 1947 r., Izrael ogłoszono w 1948 r., pierwsza wojna trwała w latach 1948-1949, OWP powstała w latach 60., a umowę o autonomii podpisano w 1993 r."
  },
  {
    "id": "R04_BLI_03",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "true_false",
    "prompt": "Plan ONZ z 1947 r. zakładał, że Jerozolima pozostanie pod międzynarodowym zarządem.",
    "options": null,
    "answer": true,
    "explanation": "Jerozolima, jako miasto święte dla judaizmu, chrześcijaństwa i islamu, miała zgodnie z decyzją ONZ pozostać pod zarządem międzynarodowym."
  },
  {
    "id": "R04_BLI_04",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "multi_select",
    "prompt": "Zaznacz terytoria opanowane przez wojska izraelskie w wojnach z państwami arabskimi w latach 1956, 1967 i 1973.",
    "options": [
      "wschodnia Jerozolima",
      "Zachodni Brzeg Jordanu",
      "Wzgórza Golan",
      "półwysep Synaj",
      "Cypr",
      "Kreta"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_bliski_wschod_mapa.jpg",
    "explanation": "W czasie tych wojen Izrael opanował m.in. wschodnią część Jerozolimy, Zachodni Brzeg Jordanu, Wzgórza Golan i półwysep Synaj."
  },
  {
    "id": "R04_BLI_05",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "riddle",
    "prompt": "Jak nazywał się przywódca Organizacji Wyzwolenia Palestyny?",
    "options": null,
    "answer": "Jaser Arafat",
    "altAnswers": [
      "Jaser Arafat",
      "Arafat"
    ],
    "explanation": "Na czele Organizacji Wyzwolenia Palestyny stał Jaser Arafat."
  },
  {
    "id": "R04_BLI_06",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "single_choice",
    "prompt": "Które państwo arabskie jako pierwsze zdecydowało się zawrzeć pokój z Izraelem i uznać jego prawo do istnienia?",
    "options": [
      "Egipt",
      "Syria",
      "Jordania",
      "Irak",
      "Liban",
      "Arabia Saudyjska"
    ],
    "answer": 0,
    "explanation": "Pierwszym takim państwem był Egipt. W zamian Izrael wycofał się z półwyspu Synaj i zlikwidował tamtejsze osady żydowskie."
  },
  {
    "id": "R04_BLI_07",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "match",
    "prompt": "Połącz terytorium z państwem lub obszarem, z którym było związane po pierwszej wojnie arabsko-izraelskiej albo w późniejszych wojnach.",
    "options": null,
    "left": [
      "Strefa Gazy",
      "Zachodni Brzeg Jordanu",
      "Wzgórza Golan",
      "półwysep Synaj"
    ],
    "right": [
      "Egipt po wojnie 1948-1949",
      "Jordania po wojnie 1948-1949",
      "Syria",
      "terytorium Egiptu okupowane później przez Izrael"
    ],
    "answer": {
      "Strefa Gazy": "Egipt po wojnie 1948-1949",
      "Zachodni Brzeg Jordanu": "Jordania po wojnie 1948-1949",
      "Wzgórza Golan": "Syria",
      "półwysep Synaj": "terytorium Egiptu okupowane później przez Izrael"
    },
    "explanation": "Strefa Gazy została włączona do Egiptu, Zachodni Brzeg Jordanu do Jordanii, Wzgórza Golan należały do Syrii, a Synaj jest półwyspem egipskim."
  },
  {
    "id": "R04_BLI_08",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie należy do trzech sąsiadów wymienionych jako przeciwnicy Izraela w wojnach z lat 1956, 1967 i 1973: Egipt, Syria, Jordania, Arabia Saudyjska.",
    "options": null,
    "answer": "Arabia Saudyjska",
    "image": "r04_bliski_wschod_mapa.jpg",
    "explanation": "W tych wojnach Izrael walczył z Egiptem, Syrią i Jordanią; Arabia Saudyjska nie należy do tej trójki wymienionej w tym kontekście."
  },
  {
    "id": "R04_BLI_09",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "fill_in",
    "prompt": "W 1993 r. Izrael i Palestyńczycy podpisali umowę o __________, czyli szerokim samorządzie obszarów palestyńskich.",
    "options": null,
    "answer": [
      "autonomii"
    ],
    "altAnswers": [
      [
        "autonomii",
        "autonomia"
      ]
    ],
    "explanation": "Porozumienie z 1993 r. dotyczyło autonomii i miało być wstępem do tworzenia niepodległego państwa palestyńskiego."
  },
  {
    "id": "R04_BLI_10",
    "section": "Bliski Wschód - konflikty arabsko-izraelskie",
    "type": "single_choice",
    "prompt": "Dlaczego w 2002 r. Izrael zaczął wznosić mur bezpieczeństwa na granicy z Zachodnim Brzegiem Jordanu?",
    "options": [
      "Aby ograniczyć możliwość ataków terrorystycznych",
      "Aby połączyć Izrael z Egiptem",
      "Aby wyznaczyć granice Unii Europejskiej",
      "Aby odgrodzić Izrael od Morza Śródziemnego",
      "Aby utworzyć nową stolicę Palestyny",
      "Aby zlikwidować ruch turystyczny"
    ],
    "answer": 0,
    "image": "r04_mur_bezpieczenstwa.jpg",
    "explanation": "Władze Izraela uzasadniały budowę muru chęcią ograniczenia prawdopodobieństwa ataków terrorystycznych na swoich obywateli."
  },
  {
    "id": "R04_ZIM_01",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "single_choice",
    "prompt": "Kto doszedł do władzy na Kubie w wyniku rewolucji w 1959 r.?",
    "options": [
      "Fidel Castro",
      "Nikita Chruszczow",
      "Jurij Gagarin",
      "Mao Zedong",
      "Jaser Arafat",
      "Nelson Mandela"
    ],
    "answer": 0,
    "explanation": "W 1959 r. władzę na Kubie przejął Fidel Castro, który stopniowo zbliżył państwo do ZSRS i ogłosił się komunistą."
  },
  {
    "id": "R04_ZIM_02",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia zimnej wojny od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Kryzys kubański",
      "Porozumienie w Helsinkach",
      "Budowa muru berlińskiego",
      "Lądowanie Amerykanów na Księżycu",
      "Przejęcie władzy na Kubie przez Fidela Castro"
    ],
    "answer": [
      "Przejęcie władzy na Kubie przez Fidela Castro",
      "Budowa muru berlińskiego",
      "Kryzys kubański",
      "Lądowanie Amerykanów na Księżycu",
      "Porozumienie w Helsinkach"
    ],
    "explanation": "Castro przejął władzę w 1959 r., mur berliński powstał w 1961 r., kryzys kubański wybuchł w 1962 r., Amerykanie wylądowali na Księżycu w 1969 r., a porozumienie helsińskie podpisano w 1975 r."
  },
  {
    "id": "R04_ZIM_03",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "true_false",
    "prompt": "Kuba leży około 200 km od wybrzeży Stanów Zjednoczonych, co zwiększało znaczenie rozmieszczenia tam sowieckich rakiet.",
    "options": null,
    "answer": true,
    "explanation": "Bliskość Kuby wobec wybrzeży USA sprawiła, że instalacja sowieckich rakiet z bronią jądrową została uznana przez Stany Zjednoczone za bezpośrednie zagrożenie."
  },
  {
    "id": "R04_ZIM_04",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "fill_in",
    "prompt": "W sierpniu __________ r. władze NRD wzniosły mur wokół Berlina Zachodniego, aby zahamować ucieczki obywateli do __________.",
    "options": null,
    "answer": [
      "1961",
      "RFN"
    ],
    "altAnswers": [
      [
        "1961",
        "1961 r."
      ],
      [
        "RFN",
        "Republiki Federalnej Niemiec"
      ]
    ],
    "image": "r04_mur_berlinski.jpg",
    "explanation": "Mur berliński powstał w sierpniu 1961 r. i miał zamknąć drogę ucieczki mieszkańców NRD do RFN przez Berlin Zachodni."
  },
  {
    "id": "R04_ZIM_05",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "single_choice",
    "prompt": "Jak zakończył się kryzys kubański w 1962 r.?",
    "options": [
      "ZSRS wycofał rakiety, a USA zobowiązały się nie obalać siłą władz Kuby",
      "USA zajęły Kubę i obaliły Fidela Castro",
      "Kuba została włączona do ZSRS",
      "Oba mocarstwa użyły broni jądrowej",
      "Kuba przystąpiła do NATO",
      "ZSRS zajął Florydę"
    ],
    "answer": 0,
    "image": "r04_kryzys_kubanski.jpg",
    "explanation": "ZSRS wycofał rakiety z Kuby, a Stany Zjednoczone zobowiązały się, że nie będą siłowo próbowały obalić komunistycznego ustroju na wyspie."
  },
  {
    "id": "R04_ZIM_06",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "match",
    "prompt": "Połącz miejsce rywalizacji zimnowojennej z właściwym wydarzeniem.",
    "options": null,
    "left": [
      "Kuba",
      "Berlin",
      "Wietnam"
    ],
    "right": [
      "kryzys rakietowy z 1962 r.",
      "mur z 1961 r.",
      "wojna zakończona zjednoczeniem kraju przez komunistów"
    ],
    "answer": {
      "Kuba": "kryzys rakietowy z 1962 r.",
      "Berlin": "mur z 1961 r.",
      "Wietnam": "wojna zakończona zjednoczeniem kraju przez komunistów"
    },
    "explanation": "Kuba była miejscem kryzysu rakietowego, Berlin symbolem podziału Europy, a Wietnam obszarem długoletniej rywalizacji militarnej."
  },
  {
    "id": "R04_ZIM_07",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące Wietnamu po wycofaniu się Francuzów w 1954 r.",
    "options": [
      "Wietnam Północny był komunistyczny",
      "Stolicą Wietnamu Północnego było Hanoi",
      "Wietnam Południowy był związany ze Stanami Zjednoczonymi",
      "Stolicą Wietnamu Południowego był Sajgon",
      "Cały Wietnam od 1954 r. był sojusznikiem USA",
      "Wietnam został w 1954 r. przyłączony do Chin"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_wietnam_zolnierze.jpg",
    "explanation": "Po 1954 r. Wietnam został podzielony na komunistyczny Wietnam Północny ze stolicą w Hanoi i Wietnam Południowy ze stolicą w Sajgonie, związany ze Stanami Zjednoczonymi."
  },
  {
    "id": "R04_ZIM_08",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "riddle",
    "prompt": "Jak nazywał się pierwszy człowiek wysłany w kosmos przez ZSRS w 1961 r.?",
    "options": null,
    "answer": "Jurij Gagarin",
    "altAnswers": [
      "Jurij Gagarin",
      "Gagarin"
    ],
    "explanation": "W 1961 r. ZSRS wysłał w kosmos Jurija Gagarina. Osiem lat później amerykańska załoga wylądowała na Księżycu."
  },
  {
    "id": "R04_ZIM_09",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "odd_one_out",
    "prompt": "Wskaż zjawisko, które nie było polem bezpośredniej rywalizacji USA i ZSRS: wyścig zbrojeń, podbój kosmosu, sport, dekolonizacja Indii.",
    "options": null,
    "answer": "dekolonizacja Indii",
    "explanation": "Supermocarstwa rywalizowały m.in. w zbrojeniach, kosmosie i sporcie. Dekolonizacja Indii była odrębnym procesem, który zakończył się uzyskaniem niepodległości w 1947 r."
  },
  {
    "id": "R04_ZIM_10",
    "section": "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "type": "true_false",
    "prompt": "Porozumienie podpisane w Helsinkach w 1975 r. potwierdzało istniejące granice w Europie i ustanawiało mechanizmy współpracy mające zmniejszać napięcia.",
    "options": null,
    "answer": true,
    "explanation": "Spotkanie w Helsinkach było przejawem odprężenia między Wschodem i Zachodem oraz służyło ograniczeniu ryzyka nowej wojny."
  },
  {
    "id": "R04_DAL_01",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "single_choice",
    "prompt": "W którym roku Mao Zedong ogłosił powstanie Chińskiej Republiki Ludowej?",
    "options": [
      "1945",
      "1947",
      "1949",
      "1954",
      "1959",
      "1966"
    ],
    "answer": 2,
    "explanation": "W 1949 r. komuniści zdobyli władzę w Chinach kontynentalnych, a Mao Zedong ogłosił powstanie Chińskiej Republiki Ludowej."
  },
  {
    "id": "R04_DAL_02",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "match",
    "prompt": "Połącz nazwę lub postać z właściwym opisem.",
    "options": null,
    "left": [
      "Kuomintang",
      "Mao Zedong",
      "Tajwan"
    ],
    "right": [
      "Partia Narodowa",
      "przywódca Komunistycznej Partii Chin",
      "Republika Chińska"
    ],
    "answer": {
      "Kuomintang": "Partia Narodowa",
      "Mao Zedong": "przywódca Komunistycznej Partii Chin",
      "Tajwan": "Republika Chińska"
    },
    "explanation": "Kuomintang był Partią Narodową, Mao Zedong przewodził Komunistycznej Partii Chin, a Tajwan używa oficjalnej nazwy Republika Chińska."
  },
  {
    "id": "R04_DAL_03",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "true_false",
    "prompt": "W 1949 r. komuniści opanowali również Tajwan i włączyli wyspę do ChRL.",
    "options": null,
    "answer": false,
    "explanation": "Komuniści nie opanowali Tajwanu. Schronili się tam przedstawiciele wcześniejszego rządu, tworząc odrębne państwo wspierane przez Stany Zjednoczone."
  },
  {
    "id": "R04_DAL_04",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "multi_select",
    "prompt": "Zaznacz cechy systemu wprowadzanego w Chinach za rządów Mao Zedonga.",
    "options": [
      "rządy jednej partii",
      "kult wodza",
      "cenzura",
      "kolektywizacja wsi",
      "wolne wybory wielopartyjne",
      "pełna swoboda religijna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_mao_czerwona_ksiazeczka.jpg",
    "explanation": "Maoizm oznaczał m.in. rządy jednej partii, kult wodza, cenzurę, kolektywizację wsi, nacjonalizację przemysłu i handlu oraz zwalczanie religii."
  },
  {
    "id": "R04_DAL_05",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "fill_in",
    "prompt": "Mao Zedong ogłosił wielki skok w __________ r., a początek rewolucji kulturalnej w __________ r.",
    "options": null,
    "answer": [
      "1959",
      "1966"
    ],
    "altAnswers": [
      [
        "1959",
        "1959 r."
      ],
      [
        "1966",
        "1966 r."
      ]
    ],
    "image": "r04_mao_czerwona_ksiazeczka.jpg",
    "explanation": "Wielki skok rozpoczęto w 1959 r., a rewolucję kulturalną w 1966 r. Oba przedsięwzięcia miały poważne skutki społeczne i gospodarcze."
  },
  {
    "id": "R04_DAL_06",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "single_choice",
    "prompt": "Na czym polegała ważna zmiana gospodarcza w Chinach wprowadzana od początku lat 80. przez Denga Xiaopinga?",
    "options": [
      "Otwarcie na inwestycje zagraniczne i elementy gospodarki rynkowej",
      "Likwidacja przemysłu i powrót do gospodarki wyłącznie rolnej",
      "Wprowadzenie pełnego systemu wielopartyjnego",
      "Zakaz handlu zagranicznego",
      "Rozwiązanie partii komunistycznej",
      "Przyłączenie Tajwanu siłą"
    ],
    "answer": 0,
    "explanation": "Deng Xiaoping otworzył Chiny na zagraniczne inwestycje i wprowadził elementy gospodarki kapitalistycznej, nie rezygnując z rządów partii komunistycznej."
  },
  {
    "id": "R04_DAL_07",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "riddle",
    "prompt": "W którym roku wojsko krwawo stłumiło protesty na placu Tiananmen w Pekinie?",
    "options": null,
    "answer": "1989",
    "altAnswers": [
      "1989",
      "1989 r."
    ],
    "image": "r04_tiananmen_1989.jpg",
    "explanation": "Protesty, głównie studenckie, na placu Tiananmen zostały stłumione w czerwcu 1989 r."
  },
  {
    "id": "R04_DAL_08",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące Chin od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Stłumienie protestów na placu Tiananmen",
      "Powstanie ChRL",
      "Przekazanie Hongkongu Chinom",
      "Początek rewolucji kulturalnej",
      "Ogłoszenie wielkiego skoku"
    ],
    "answer": [
      "Powstanie ChRL",
      "Ogłoszenie wielkiego skoku",
      "Początek rewolucji kulturalnej",
      "Stłumienie protestów na placu Tiananmen",
      "Przekazanie Hongkongu Chinom"
    ],
    "explanation": "ChRL powstała w 1949 r., wielki skok rozpoczęto w 1959 r., rewolucję kulturalną w 1966 r., protesty na Tiananmen stłumiono w 1989 r., a Hongkong wrócił pod władzę Chin w 1997 r."
  },
  {
    "id": "R04_DAL_09",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "true_false",
    "prompt": "Po II wojnie światowej Stany Zjednoczone wymusiły w Japonii demokratyzację ustroju i rezygnację z posiadania armii.",
    "options": null,
    "answer": true,
    "image": "r04_japonska_fabryka.jpg",
    "explanation": "W czasie amerykańskiej okupacji Japonia została zdemokratyzowana, a cesarz przestał odgrywać rolę polityczną i stał się symbolem państwa."
  },
  {
    "id": "R04_DAL_10",
    "section": "Daleki Wschód - Chiny i Japonia",
    "type": "sort",
    "prompt": "Przyporządkuj cechy powojennego rozwoju do Chin lub Japonii.",
    "options": null,
    "items": [
      "rządy jednej partii komunistycznej",
      "otwarcie na zagraniczne inwestycje od początku lat 80.",
      "demokratyzacja po okupacji amerykańskiej",
      "rezygnacja z posiadania armii",
      "sojusz ze Stanami Zjednoczonymi",
      "szybki rozwój nowoczesnych technologii"
    ],
    "categories": [
      "Chiny",
      "Japonia"
    ],
    "answer": {
      "Chiny": [
        "rządy jednej partii komunistycznej",
        "otwarcie na zagraniczne inwestycje od początku lat 80."
      ],
      "Japonia": [
        "demokratyzacja po okupacji amerykańskiej",
        "rezygnacja z posiadania armii",
        "sojusz ze Stanami Zjednoczonymi",
        "szybki rozwój nowoczesnych technologii"
      ]
    },
    "image": "r04_japonska_fabryka.jpg",
    "explanation": "ChRL zachowała rządy partii komunistycznej i od lat 80. otwierała gospodarkę na inwestycje zagraniczne. Japonia po okupacji amerykańskiej stała się państwem demokratycznym, sprzymierzonym z USA i skoncentrowanym na rozwoju nowoczesnej gospodarki."
  },
  {
    "id": "R04_INT_01",
    "section": "Proces integracji europejskiej",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny, które sprzyjały integracji Europy Zachodniej po II wojnie światowej.",
    "options": [
      "odbudowa gospodarki po zniszczeniach wojennych",
      "zapobieganie kolejnym konfliktom w Europie",
      "wzmocnienie Europy Zachodniej wobec zagrożenia sowieckiego",
      "ułatwienie handlu ze Stanami Zjednoczonymi",
      "odtworzenie imperiów kolonialnych",
      "likwidacja wszystkich państw europejskich"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Integracja miała przyspieszyć odbudowę gospodarczą, podnieść poziom życia, ograniczyć ryzyko kolejnych wojen i wzmocnić Europę Zachodnią wobec zagrożenia sowieckiego."
  },
  {
    "id": "R04_INT_02",
    "section": "Proces integracji europejskiej",
    "type": "riddle",
    "prompt": "Jak nazywał się francuski minister spraw zagranicznych, który 9 maja 1950 r. przedstawił plan rozpoczęcia integracji gospodarczej?",
    "options": null,
    "answer": "Robert Schuman",
    "altAnswers": [
      "Robert Schuman",
      "Schuman"
    ],
    "explanation": "Robert Schuman, inspirowany poglądami Jeana Monneta, zaproponował stworzenie organizacji koordynującej rozwój przemysłu stalowego i węglowego."
  },
  {
    "id": "R04_INT_03",
    "section": "Proces integracji europejskiej",
    "type": "fill_in",
    "prompt": "Plan Schumana został przedstawiony __________ 1950 r.; na pamiątkę tego wystąpienia 9 maja obchodzony jest Dzień Europy.",
    "options": null,
    "answer": [
      "9 maja"
    ],
    "altAnswers": [
      [
        "9 maja",
        "9 V"
      ]
    ],
    "explanation": "Robert Schuman wystąpił 9 maja 1950 r., w piątą rocznicę zakończenia II wojny światowej w Europie."
  },
  {
    "id": "R04_INT_04",
    "section": "Proces integracji europejskiej",
    "type": "sequence",
    "prompt": "Ułóż etapy integracji europejskiej od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Powstanie Unii Europejskiej",
      "Powstanie EWG",
      "Podpisanie traktatu powołującego EWWiS",
      "Rozszerzenie UE o dziesięć państw",
      "Rozpoczęcie działalności EWWiS",
      "Podpisanie układu z Schengen"
    ],
    "answer": [
      "Podpisanie traktatu powołującego EWWiS",
      "Rozpoczęcie działalności EWWiS",
      "Powstanie EWG",
      "Podpisanie układu z Schengen",
      "Powstanie Unii Europejskiej",
      "Rozszerzenie UE o dziesięć państw"
    ],
    "explanation": "Traktat EWWiS podpisano w 1951 r., wspólnota zaczęła działać w 1952 r., EWG powstała w 1957 r., układ z Schengen podpisano w 1985 r., UE powstała w 1993 r., a wielkie rozszerzenie nastąpiło w 2004 r."
  },
  {
    "id": "R04_INT_05",
    "section": "Proces integracji europejskiej",
    "type": "single_choice",
    "prompt": "Które państwo nie należało do szóstki założycieli Europejskiej Wspólnoty Węgla i Stali?",
    "options": [
      "Hiszpania",
      "Francja",
      "RFN",
      "Włochy",
      "Belgia",
      "Holandia"
    ],
    "answer": 0,
    "explanation": "EWWiS utworzyły Francja, RFN, Włochy, Belgia, Holandia i Luksemburg. Hiszpania dołączyła do procesu integracji później."
  },
  {
    "id": "R04_INT_06",
    "section": "Proces integracji europejskiej",
    "type": "match",
    "prompt": "Połącz organ Unii Europejskiej z jego główną funkcją.",
    "options": null,
    "left": [
      "Rada Europejska",
      "Rada Unii Europejskiej",
      "Komisja Europejska",
      "Parlament Europejski"
    ],
    "right": [
      "wyznacza główne kierunki rozwoju Unii",
      "pełni funkcję prawodawczą jako forum ministrów",
      "zarządza Unią na co dzień",
      "współuczestniczy w tworzeniu prawa i pełni funkcje kontrolne"
    ],
    "answer": {
      "Rada Europejska": "wyznacza główne kierunki rozwoju Unii",
      "Rada Unii Europejskiej": "pełni funkcję prawodawczą jako forum ministrów",
      "Komisja Europejska": "zarządza Unią na co dzień",
      "Parlament Europejski": "współuczestniczy w tworzeniu prawa i pełni funkcje kontrolne"
    },
    "image": "r04_parlament_europejski.jpg",
    "explanation": "Rada Europejska wyznacza główne kierunki rozwoju UE, Rada UE pełni funkcję prawodawczą, Komisja zarządza wspólnotą na co dzień, a Parlament współtworzy prawo i kontroluje inne organy."
  },
  {
    "id": "R04_INT_07",
    "section": "Proces integracji europejskiej",
    "type": "true_false",
    "prompt": "Od 1979 r. posłowie do Parlamentu Europejskiego są wybierani w wyborach powszechnych i bezpośrednich.",
    "options": null,
    "answer": true,
    "image": "r04_parlament_europejski.jpg",
    "explanation": "Początkowo Parlament Europejski tworzyły delegacje parlamentów krajowych, natomiast od 1979 r. eurodeputowani są wybierani bezpośrednio przez obywateli."
  },
  {
    "id": "R04_INT_08",
    "section": "Proces integracji europejskiej",
    "type": "single_choice",
    "prompt": "O ile państw powiększyła się Unia Europejska w rozszerzeniu z 2004 r.?",
    "options": [
      "6",
      "8",
      "10",
      "12",
      "15",
      "27"
    ],
    "answer": 2,
    "explanation": "W 2004 r. do Unii Europejskiej przystąpiło dziesięć państw, w tym Polska i siedem innych państw mających za sobą okres komunistycznej dyktatury."
  },
  {
    "id": "R04_INT_09",
    "section": "Proces integracji europejskiej",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do wczesnego etapu integracji albo do późniejszego zacieśniania współpracy.",
    "options": null,
    "items": [
      "Europejska Wspólnota Węgla i Stali",
      "Europejska Wspólnota Gospodarcza",
      "Europejska Wspólnota Energii Atomowej",
      "układ z Schengen",
      "powstanie Unii Europejskiej",
      "rozszerzenie z 2004 r."
    ],
    "categories": [
      "lata 50. XX w.",
      "późniejsze etapy integracji"
    ],
    "answer": {
      "lata 50. XX w.": [
        "Europejska Wspólnota Węgla i Stali",
        "Europejska Wspólnota Gospodarcza",
        "Europejska Wspólnota Energii Atomowej"
      ],
      "późniejsze etapy integracji": [
        "układ z Schengen",
        "powstanie Unii Europejskiej",
        "rozszerzenie z 2004 r."
      ]
    },
    "image": "r04_schengen_granica.jpg",
    "explanation": "W latach 50. powstały EWWiS, EWG i Euratom. Później ważnymi etapami były układ z Schengen, utworzenie UE i rozszerzenie z 2004 r."
  },
  {
    "id": "R04_INT_10",
    "section": "Proces integracji europejskiej",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie należy do grona osób kojarzonych z początkami integracji europejskiej: Robert Schuman, Jean Monnet, Konrad Adenauer, Charles de Gaulle, Fidel Castro.",
    "options": null,
    "answer": "Fidel Castro",
    "explanation": "Schuman, Monnet, Adenauer i de Gaulle są wymienieni wśród osób zasłużonych dla pierwszego okresu integracji europejskiej. Fidel Castro był przywódcą Kuby."
  },
  {
    "id": "R04_KUL_01",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "single_choice",
    "prompt": "Która cecha była typowa dla powojennego państwa opiekuńczego na Zachodzie?",
    "options": [
      "Rozbudowane prawa socjalne i płatne urlopy",
      "Zakaz wypoczynku poza miejscem zamieszkania",
      "Likwidacja emerytur",
      "Stały wzrost czasu pracy",
      "Zakaz posiadania samochodów",
      "Ograniczenie dostępu do szkół średnich"
    ],
    "answer": 0,
    "explanation": "Państwo opiekuńcze zapewniało obywatelom rozbudowane prawa socjalne, m.in. płatne urlopy, zasiłki dla bezrobotnych, emerytury i dopłaty do mieszkań."
  },
  {
    "id": "R04_KUL_02",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "multi_select",
    "prompt": "Zaznacz zjawiska charakterystyczne dla społeczeństwa konsumpcyjnego na Zachodzie w latach 50. i 60. XX w.",
    "options": [
      "wzrost sprzedaży sprzętu gospodarstwa domowego",
      "upowszechnienie samochodów",
      "rozwój reklamy",
      "większe wydatki na towary poprawiające jakość życia",
      "powszechne racjonowanie podstawowych towarów",
      "stały spadek płac"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rosnące dochody i spadek cen sprzyjały zakupom ubrań, mebli, urządzeń gospodarstwa domowego, telewizorów i samochodów, a reklama miała pobudzać potrzeby konsumentów."
  },
  {
    "id": "R04_KUL_03",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "true_false",
    "prompt": "Rozwój nowoczesnych technologii zwiększał zapotrzebowanie na lepiej wykształconych pracowników o wysokich kwalifikacjach.",
    "options": null,
    "answer": true,
    "explanation": "Wraz z rozwojem gospodarki opartej na nowych technologiach coraz więcej osób kończyło szkoły średnie i studia, a zmniejszał się udział pracowników fizycznych."
  },
  {
    "id": "R04_KUL_04",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "single_choice",
    "prompt": "W którym roku doszło do szerokiej rewolucji studenckiej w krajach Europy Zachodniej?",
    "options": [
      "1956",
      "1962",
      "1968",
      "1971",
      "1975",
      "1983"
    ],
    "answer": 2,
    "explanation": "W 1968 r. młodzież okupowała uczelnie, strajkowała i demonstrowała, domagając się reform społecznych."
  },
  {
    "id": "R04_KUL_05",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "riddle",
    "prompt": "Jak nazywano uczestników ruchu hipisowskiego ze względu na zwyczaj wręczania kwiatów policjantom i żołnierzom podczas manifestacji?",
    "options": null,
    "answer": "dzieci kwiaty",
    "altAnswers": [
      "dzieci kwiaty",
      "dzieci kwiatów"
    ],
    "image": "r04_hipisi_manifestacja.jpg",
    "explanation": "Hipisów określano mianem dzieci kwiatów. Kwiaty miały symbolizować ich pacyfistyczny sprzeciw wobec przemocy i wojny."
  },
  {
    "id": "R04_KUL_06",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż cechę, która nie pasuje do ruchu hipisowskiego: pacyfizm, kolorowe ubrania, długie włosy, poparcie wojny w Wietnamie.",
    "options": null,
    "answer": "poparcie wojny w Wietnamie",
    "image": "r04_hipisi_manifestacja.jpg",
    "explanation": "Hipisi sprzeciwiali się wojnie w Wietnamie, głosili pacyfizm i manifestowali odrębność strojem oraz wyglądem."
  },
  {
    "id": "R04_KUL_07",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "fill_in",
    "prompt": "Sobór Watykański II obradował w latach __________-__________.",
    "options": null,
    "answer": [
      "1962",
      "1965"
    ],
    "altAnswers": [
      [
        "1962",
        "1962 r."
      ],
      [
        "1965",
        "1965 r."
      ]
    ],
    "image": "r04_sobor_watykanski_ii.jpg",
    "explanation": "Sobór Watykański II odbył się w latach 1962-1965 i wprowadził reformy, m.in. dopuścił języki narodowe w liturgii oraz dialog z innymi wyznaniami i religiami."
  },
  {
    "id": "R04_KUL_08",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "options": null,
    "left": [
      "feminizm",
      "laicyzacja",
      "amerykanizacja kultury",
      "internet"
    ],
    "right": [
      "dążenie do prawnego i społecznego równouprawnienia kobiet i mężczyzn",
      "spadek religijności",
      "rozpowszechnianie wzorców kultury amerykańskiej",
      "ogólnoświatowa sieć komputerowa służąca komunikacji i publikowaniu informacji"
    ],
    "answer": {
      "feminizm": "dążenie do prawnego i społecznego równouprawnienia kobiet i mężczyzn",
      "laicyzacja": "spadek religijności",
      "amerykanizacja kultury": "rozpowszechnianie wzorców kultury amerykańskiej",
      "internet": "ogólnoświatowa sieć komputerowa służąca komunikacji i publikowaniu informacji"
    },
    "explanation": "Feminizm dąży do równouprawnienia kobiet i mężczyzn, laicyzacja oznacza spadek religijności, amerykanizacja kultury to wzrost wpływów kultury amerykańskiej, a internet jest światową siecią komunikacji i publikowania informacji."
  },
  {
    "id": "R04_KUL_09",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z przemianami społecznymi i technologicznymi od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Pierwsza sieć telefonii komórkowej w USA",
      "Początek Soboru Watykańskiego II",
      "Rozbudowa internetu w Polsce",
      "Rewolucja studencka w Europie Zachodniej",
      "Wynalezienie mikroprocesora"
    ],
    "answer": [
      "Początek Soboru Watykańskiego II",
      "Rewolucja studencka w Europie Zachodniej",
      "Wynalezienie mikroprocesora",
      "Pierwsza sieć telefonii komórkowej w USA",
      "Rozbudowa internetu w Polsce"
    ],
    "explanation": "Sobór Watykański II rozpoczął się w 1962 r., rewolucja studencka wybuchła w 1968 r., mikroprocesor wynaleziono w 1971 r., pierwsza sieć telefonii komórkowej w USA pojawiła się w 1983 r., a internet w Polsce zaczęto rozbudowywać na początku lat 90."
  },
  {
    "id": "R04_KUL_10",
    "section": "Przemiany społeczne i kulturowe w drugiej połowie XX wieku",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do społeczeństwa konsumpcyjnego lub informacyjnego.",
    "options": null,
    "items": [
      "masowa reklama produktów",
      "wzrost zakupów sprzętu domowego",
      "poczta elektroniczna",
      "media społecznościowe",
      "natychmiastowy obieg informacji na świecie",
      "rosnąca sprzedaż samochodów"
    ],
    "categories": [
      "społeczeństwo konsumpcyjne",
      "społeczeństwo informacyjne"
    ],
    "answer": {
      "społeczeństwo konsumpcyjne": [
        "masowa reklama produktów",
        "wzrost zakupów sprzętu domowego",
        "rosnąca sprzedaż samochodów"
      ],
      "społeczeństwo informacyjne": [
        "poczta elektroniczna",
        "media społecznościowe",
        "natychmiastowy obieg informacji na świecie"
      ]
    },
    "explanation": "Społeczeństwo konsumpcyjne wiąże się ze wzrostem zakupów i rolą reklamy, a społeczeństwo informacyjne z szybkim obiegiem informacji dzięki komputerom i internetowi."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z różnych części działu w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie ChRL",
      "Powstanie Unii Europejskiej",
      "Niepodległość Indii",
      "Budowa muru berlińskiego",
      "Powstanie państwa Izrael",
      "Lądowanie człowieka na Księżycu"
    ],
    "answer": [
      "Niepodległość Indii",
      "Powstanie państwa Izrael",
      "Powstanie ChRL",
      "Budowa muru berlińskiego",
      "Lądowanie człowieka na Księżycu",
      "Powstanie Unii Europejskiej"
    ],
    "explanation": "Niepodległość Indii nastąpiła w 1947 r., Izrael powstał w 1948 r., ChRL w 1949 r., mur berliński w 1961 r., lądowanie na Księżycu w 1969 r., a Unia Europejska powstała w 1993 r."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z ruchem, organizacją lub procesem, z którym była związana.",
    "options": null,
    "left": [
      "Mahatma Gandhi",
      "Nelson Mandela",
      "Jaser Arafat",
      "Robert Schuman",
      "Mao Zedong"
    ],
    "right": [
      "pokojowa walka o niepodległość Indii",
      "Afrykański Kongres Narodowy",
      "Organizacja Wyzwolenia Palestyny",
      "początki integracji europejskiej",
      "Chińska Republika Ludowa i maoizm"
    ],
    "answer": {
      "Mahatma Gandhi": "pokojowa walka o niepodległość Indii",
      "Nelson Mandela": "Afrykański Kongres Narodowy",
      "Jaser Arafat": "Organizacja Wyzwolenia Palestyny",
      "Robert Schuman": "początki integracji europejskiej",
      "Mao Zedong": "Chińska Republika Ludowa i maoizm"
    },
    "explanation": "Gandhi kierował indyjskim ruchem niepodległościowym, Mandela był liderem ANC, Arafat stał na czele OWP, Schuman zapoczątkował integrację europejską, a Mao Zedong stworzył maoistowską ChRL."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia, które miały miejsce w 1961 r.",
    "options": [
      "Budowa muru berlińskiego",
      "Lot Jurija Gagarina w kosmos",
      "Kryzys kubański",
      "Ogłoszenie wielkiego skoku",
      "Powstanie EWG",
      "Rewolucja studencka w Europie Zachodniej"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "W 1961 r. zbudowano mur berliński i Jurij Gagarin odbył pierwszy załogowy lot kosmiczny. Kryzys kubański miał miejsce w 1962 r."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wojna algierska trwała od __________ do __________ r., a Rok Afryki przypadł na __________ r.",
    "options": null,
    "answer": [
      "1954",
      "1962",
      "1960"
    ],
    "altAnswers": [
      [
        "1954",
        "1954 r."
      ],
      [
        "1962",
        "1962 r."
      ],
      [
        "1960",
        "1960 r."
      ]
    ],
    "explanation": "Wojna algierska toczyła się w latach 1954-1962, natomiast w 1960 r. niepodległość ogłosiło 17 państw afrykańskich."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które wydarzenie bezpośrednio poprzedzało kryzys kubański w zestawieniu najważniejszych dat działu?",
    "options": [
      "Budowa muru berlińskiego",
      "Powstanie EWG",
      "Niepodległość Indii",
      "Powstanie ChRL",
      "Rewolucja kulturalna w Chinach",
      "Powstanie Unii Europejskiej"
    ],
    "answer": 0,
    "image": "r04_kryzys_kubanski.jpg",
    "explanation": "W zestawieniu dat budowa muru berlińskiego przypada na 1961 r., a kryzys kubański na 1962 r."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do właściwego procesu historycznego.",
    "options": null,
    "items": [
      "Rok Afryki",
      "wojna algierska",
      "kryzys kubański",
      "mur berliński",
      "powstanie EWWiS",
      "układ z Schengen",
      "ruch hipisowski",
      "Sobór Watykański II"
    ],
    "categories": [
      "dekolonizacja",
      "zimna wojna",
      "integracja europejska",
      "przemiany społeczne i kulturowe"
    ],
    "answer": {
      "dekolonizacja": [
        "Rok Afryki",
        "wojna algierska"
      ],
      "zimna wojna": [
        "kryzys kubański",
        "mur berliński"
      ],
      "integracja europejska": [
        "powstanie EWWiS",
        "układ z Schengen"
      ],
      "przemiany społeczne i kulturowe": [
        "ruch hipisowski",
        "Sobór Watykański II"
      ]
    },
    "explanation": "Wydarzenia z działu układają się w cztery główne procesy: dekolonizację, zimną wojnę, integrację europejską oraz przemiany społeczne i kulturowe Zachodu."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż rok, który nie jest związany z wydarzeniem dotyczącym Chin: 1949, 1959, 1966, 1989, 1993.",
    "options": null,
    "answer": "1993",
    "explanation": "Lata 1949, 1959, 1966 i 1989 wiążą się z wydarzeniami w Chinach. Rok 1993 dotyczy m.in. powstania Unii Europejskiej oraz porozumienia izraelsko-palestyńskiego."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Większość państw Czarnej Afryki uzyskała niepodległość w latach 60. XX w., podczas gdy część krajów Dalekiego Wschodu wykorzystała niepodległość do szybkiego rozwoju gospodarczego.",
    "options": null,
    "answer": true,
    "explanation": "Większość państw Czarnej Afryki wyzwoliła się w latach 60., natomiast m.in. Korea Południowa, Singapur, Malezja i Indonezja rozwinęły gospodarki i poprawiły warunki życia obywateli."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywała się organizacja utworzona w 1963 r. przez większość państw afrykańskich, aby ograniczać ryzyko wojen i rozwijać współpracę?",
    "options": null,
    "answer": "Organizacja Jedności Afrykańskiej",
    "altAnswers": [
      "Organizacja Jedności Afrykańskiej",
      "OJA"
    ],
    "explanation": "W 1963 r. większość krajów afrykańskich założyła Organizację Jedności Afrykańskiej."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która para wydarzeń poprawnie łączy dwa procesy historyczne z rokiem 1975?",
    "options": [
      "Porozumienie w Helsinkach i zjednoczenie Wietnamu pod rządami komunistów",
      "Powstanie ChRL i podział Palestyny przez ONZ",
      "Budowa muru berlińskiego i wielki skok",
      "Powstanie EWWiS i kryzys kubański",
      "Rewolucja studencka i powstanie UE",
      "Protesty na Tiananmen i koniec apartheidu"
    ],
    "answer": 0,
    "image": "r04_wietnam_zolnierze.jpg",
    "explanation": "W 1975 r. podpisano porozumienie w Helsinkach, będące przejawem odprężenia, a Wietnam został zjednoczony pod rządami komunistów."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia związane z rokiem 1993.",
    "options": [
      "Powstanie Unii Europejskiej",
      "Umowa Izraela i Palestyńczyków o autonomii",
      "Pokojowa Nagroda Nobla dla Mandeli i de Klerka",
      "Pierwsze wielorasowe wybory w RPA",
      "Przekazanie Hongkongu Chinom",
      "Protesty na placu Tiananmen"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W 1993 r. powstała Unia Europejska, Izrael i Palestyńczycy podpisali umowę o autonomii, a Nelson Mandela i Frederik Willem de Klerk odebrali Pokojową Nagrodę Nobla."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Rok Afryki",
      "Budowa muru berlińskiego",
      "Kryzys kubański",
      "Rewolucja studencka w Europie Zachodniej",
      "Protesty na placu Tiananmen"
    ],
    "right": [
      "1960",
      "1961",
      "1962",
      "1968",
      "1989"
    ],
    "answer": {
      "Rok Afryki": "1960",
      "Budowa muru berlińskiego": "1961",
      "Kryzys kubański": "1962",
      "Rewolucja studencka w Europie Zachodniej": "1968",
      "Protesty na placu Tiananmen": "1989"
    },
    "explanation": "Rok Afryki to 1960, mur berliński powstał w 1961 r., kryzys kubański miał miejsce w 1962 r., rewolucja studencka w 1968 r., a protesty na Tiananmen w 1989 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Świat w drugiej połowie XX wieku",
  "icon": "🌐",
  "sectionOrder": [
    "Nowa mapa świata - dekolonizacja",
    "Bliski Wschód - konflikty arabsko-izraelskie",
    "Rywalizacja Stanów Zjednoczonych i ZSRS",
    "Daleki Wschód - Chiny i Japonia",
    "Proces integracji europejskiej",
    "Przemiany społeczne i kulturowe w drugiej połowie XX wieku"
  ],
  "sectionIcons": {
    "Nowa mapa świata - dekolonizacja": "🌍",
    "Bliski Wschód - konflikty arabsko-izraelskie": "🕊️",
    "Rywalizacja Stanów Zjednoczonych i ZSRS": "☢️",
    "Daleki Wschód - Chiny i Japonia": "🌏",
    "Proces integracji europejskiej": "🇪🇺",
    "Przemiany społeczne i kulturowe w drugiej połowie XX wieku": "📺"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
