// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ZSR  = Kryzys ZSRS i reformy Gorbaczowa
//   PRL  = Upadek PRL i narodziny III RP
//   JES  = Jesień Narodów
//   ROZ  = Rozpad ZSRS, Czechosłowacji i Jugosławii
//   TRP  = III RP i przemiany gospodarczo-społeczne
//   INT  = Polska w NATO i Unii Europejskiej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_ZSR_01",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "single_choice",
    "prompt": "Który problem gospodarki ZSRS szczególnie utrudniał zaspokajanie potrzeb mieszkańców na przełomie lat 70. i 80. XX w.?",
    "options": [
      "Nadmierna produkcja dóbr konsumpcyjnych",
      "Zacofanie technologiczne i przewaga przemysłu ciężkiego",
      "Brak przemysłu ciężkiego",
      "Nadmierny import zachodnich technologii",
      "Zbyt wysoka wydajność rolnictwa",
      "Niedobór surowców energetycznych"
    ],
    "answer": 1,
    "explanation": "Sowiecka gospodarka była zacofana technologicznie, nastawiona na przemysł ciężki i nie zaspokajała podstawowych potrzeb mieszkańców."
  },
  {
    "id": "R06_ZSR_02",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które pogłębiały kryzys gospodarczy ZSRS.",
    "options": [
      "Niewydolność skolektywizowanego rolnictwa",
      "Spadek cen ropy i gazu",
      "Rosnące wydatki na zbrojenia",
      "Wzrost eksportu żywności",
      "Koszty interwencji w Afganistanie"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Kryzys pogłębiały m.in. niewydolne rolnictwo, spadek cen eksportowanych surowców, wysokie wydatki na zbrojenia i kosztowna wojna w Afganistanie."
  },
  {
    "id": "R06_ZSR_03",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "true_false",
    "prompt": "Michaił Gorbaczow objął władzę w ZSRS w 1985 r.",
    "options": null,
    "answer": true,
    "image": "r06_gorbaczow_portret.jpg",
    "explanation": "W 1985 r. Michaił Gorbaczow został przywódcą partii komunistycznej i państwa sowieckiego."
  },
  {
    "id": "R06_ZSR_04",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "fill_in",
    "prompt": "Reformę gospodarczą Gorbaczowa nazywano __________, a politykę jawności i ograniczania cenzury określano jako __________.",
    "options": null,
    "answer": [
      "pieriestrojką",
      "głasnostią"
    ],
    "altAnswers": [
      [
        "pieriestrojką",
        "pieriestrojka"
      ],
      [
        "głasnostią",
        "głasnost",
        "głasnost'",
        "glasnost"
      ]
    ],
    "explanation": "Pieriestrojka oznaczała przebudowę gospodarki, a głasnost - jawność i stopniowe znoszenie cenzury."
  },
  {
    "id": "R06_ZSR_05",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "riddle",
    "prompt": "Jak nazywano afgańskich partyzantów walczących z Armią Sowiecką?",
    "options": null,
    "answer": "mudżahedini",
    "altAnswers": [
      "mudżahedini",
      "mudżahedinowie"
    ],
    "explanation": "Mudżahedini prowadzili walkę partyzancką przeciw wojskom sowieckim wspierającym komunistyczny rząd Afganistanu."
  },
  {
    "id": "R06_ZSR_06",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do pozostałych przyczyn kryzysu ZSRS: wyścig zbrojeń, spadek cen ropy i gazu, wojna w Afganistanie, rozwój wydajnego rolnictwa.",
    "options": null,
    "answer": "rozwój wydajnego rolnictwa",
    "explanation": "Rolnictwo ZSRS było niewydolne; pozostałe elementy rzeczywiście pogłębiały kryzys gospodarczy."
  },
  {
    "id": "R06_ZSR_07",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "scenario",
    "prompt": "Jest druga połowa lat 80. W telewizji politycy muszą na żywo odpowiadać na niewygodne pytania, a ludzie mogą krytykować lokalne władze. Jak nazywała się ta polityka?",
    "options": [
      "głasnost",
      "kolektywizacja",
      "nacjonalizacja",
      "reglamentacja"
    ],
    "answer": 0,
    "explanation": "Głasnost oznaczała jawność, stopniowe znoszenie cenzury i poszerzanie wolności słowa."
  },
  {
    "id": "R06_ZSR_08",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "match",
    "prompt": "Połącz wydarzenie lub pojęcie z właściwym opisem.",
    "options": null,
    "answer": {
      "głasnost": "ograniczanie cenzury i większa wolność słowa",
      "pieriestrojka": "wprowadzanie elementów wolnego rynku",
      "Afganistan": "kosztowna interwencja wojskowa ZSRS",
      "Czarnobyl": "katastrofa elektrowni jądrowej w 1986 r."
    },
    "left": [
      "głasnost",
      "pieriestrojka",
      "Afganistan",
      "Czarnobyl"
    ],
    "right": [
      "katastrofa elektrowni jądrowej w 1986 r.",
      "kosztowna interwencja wojskowa ZSRS",
      "ograniczanie cenzury i większa wolność słowa",
      "wprowadzanie elementów wolnego rynku"
    ],
    "explanation": "Głasnost i pieriestrojka były reformami Gorbaczowa, wojna w Afganistanie obciążała ZSRS, a katastrofa w Czarnobylu nastąpiła w 1986 r."
  },
  {
    "id": "R06_ZSR_09",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do obszaru, którego dotyczyły.",
    "options": null,
    "answer": {
      "gospodarka": [
        "pieriestrojka",
        "spadek cen ropy i gazu",
        "niewydolność kołchozów"
      ],
      "polityka i społeczeństwo": [
        "głasnost",
        "demonstracje",
        "zakładanie organizacji bez zgody władz"
      ]
    },
    "items": [
      "pieriestrojka",
      "głasnost",
      "spadek cen ropy i gazu",
      "demonstracje",
      "niewydolność kołchozów",
      "zakładanie organizacji bez zgody władz"
    ],
    "categories": [
      "gospodarka",
      "polityka i społeczeństwo"
    ],
    "explanation": "Pieriestrojka i problemy surowcowo-rolnicze dotyczyły gospodarki, natomiast głasnost oraz nowe formy aktywności społecznej odnosiły się do życia politycznego i społecznego."
  },
  {
    "id": "R06_ZSR_10",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "answer": [
      "Rozpoczęcie interwencji sowieckiej w Afganistanie",
      "Objęcie władzy przez Michaiła Gorbaczowa",
      "Katastrofa w Czarnobylu",
      "Wycofanie ostatnich wojsk sowieckich z Afganistanu"
    ],
    "items": [
      "Katastrofa w Czarnobylu",
      "Rozpoczęcie interwencji sowieckiej w Afganistanie",
      "Wycofanie ostatnich wojsk sowieckich z Afganistanu",
      "Objęcie władzy przez Michaiła Gorbaczowa"
    ],
    "image": "r06_czarnobyl_elektrownia.jpg",
    "explanation": "Interwencja rozpoczęła się w 1979 r., Gorbaczow objął władzę w 1985 r., katastrofa w Czarnobylu nastąpiła w 1986 r., a ostatnie oddziały opuściły Afganistan w 1989 r."
  },
  {
    "id": "R06_ZSR_11",
    "section": "Kryzys ZSRS i reformy Gorbaczowa",
    "type": "single_choice",
    "prompt": "Jaki był skutek zmiany polityki zagranicznej ZSRS pod koniec lat 80.?",
    "options": [
      "Zaostrzenie konfliktu z Zachodem",
      "Ponowna interwencja w Afganistanie",
      "Poprawa stosunków z Zachodem",
      "Rozszerzenie Układu Warszawskiego",
      "Wzrost wsparcia dla partyzantów komunistycznych",
      "Wstrzymanie rozmów rozbrojeniowych"
    ],
    "answer": 2,
    "explanation": "ZSRS zrezygnował z agresywnej polityki rozszerzania strefy wpływów, co poprawiło stosunki z Zachodem i sprzyjało zakończeniu zimnej wojny."
  },
  {
    "id": "R06_PRL_01",
    "section": "Upadek PRL i narodziny III RP",
    "type": "single_choice",
    "prompt": "Co bezpośrednio skłoniło władze PRL do zaproponowania rozmów z opozycją skupioną wokół Lecha Wałęsy?",
    "options": [
      "Rozwiązanie NATO",
      "Rozpad Czechosłowacji",
      "Wycofanie wojsk rosyjskich z Polski",
      "Strajki i protesty w 1988 r.",
      "Uchwalenie konstytucji w 1997 r.",
      "Wejście Polski do UE"
    ],
    "answer": 3,
    "explanation": "W 1988 r. fala strajków i silny nacisk społeczny przestraszyły władze i skłoniły je do podjęcia rozmów z Solidarnością."
  },
  {
    "id": "R06_PRL_02",
    "section": "Upadek PRL i narodziny III RP",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia związane z porozumieniem okrągłego stołu.",
    "options": [
      "Legalizacja NSZZ Solidarność",
      "Natychmiastowe rozwiązanie PZPR",
      "Wolne wybory do senatu",
      "Utworzenie urzędu prezydenta PRL",
      "Dopuszczenie opozycji do wyborów parlamentarnych",
      "Wstąpienie Polski do NATO"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "explanation": "Porozumienie przewidywało legalizację Solidarności, wybory parlamentarne z udziałem opozycji, wolne wybory do senatu oraz utworzenie urzędu prezydenta PRL."
  },
  {
    "id": "R06_PRL_03",
    "section": "Upadek PRL i narodziny III RP",
    "type": "true_false",
    "prompt": "W wyborach czerwcowych 1989 r. wszystkie mandaty w sejmie były obsadzane w całkowicie wolnym głosowaniu.",
    "options": null,
    "answer": false,
    "explanation": "W sejmie 65% miejsc zarezerwowano dla PZPR i jej sojuszników, a o 35% mogli rywalizować wszyscy kandydaci. Wybory do senatu były wolne."
  },
  {
    "id": "R06_PRL_04",
    "section": "Upadek PRL i narodziny III RP",
    "type": "fill_in",
    "prompt": "Obradom strony solidarnościowej przewodniczył __________, a stronie rządowej __________.",
    "options": null,
    "answer": [
      "Lech Wałęsa",
      "Czesław Kiszczak"
    ],
    "altAnswers": [
      [
        "Lech Wałęsa",
        "Lecha Wałęsa",
        "Wałęsa"
      ],
      [
        "Czesław Kiszczak",
        "Czesława Kiszczaka",
        "Kiszczak"
      ]
    ],
    "explanation": "Lech Wałęsa przewodził delegacji Solidarności, a Czesław Kiszczak - delegacji władz."
  },
  {
    "id": "R06_PRL_05",
    "section": "Upadek PRL i narodziny III RP",
    "type": "riddle",
    "prompt": "Jak nazywano rozmowy władz PRL z opozycją rozpoczęte w lutym 1989 r.?",
    "options": null,
    "answer": "obrady okrągłego stołu",
    "altAnswers": [
      "obrady okrągłego stołu",
      "okrągły stół",
      "rozmowy przy okrągłym stole"
    ],
    "explanation": "Obrady okrągłego stołu rozpoczęły się w lutym 1989 r. i zakończyły kompromisem w kwietniu."
  },
  {
    "id": "R06_PRL_06",
    "section": "Upadek PRL i narodziny III RP",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę, która nie należała do strony solidarnościowej przy okrągłym stole: Lech Wałęsa, Jacek Kuroń, Adam Michnik, Czesław Kiszczak.",
    "options": null,
    "answer": "Czesław Kiszczak",
    "explanation": "Czesław Kiszczak stał na czele strony rządowej; pozostali wymienieni byli związani z opozycją solidarnościową."
  },
  {
    "id": "R06_PRL_07",
    "section": "Upadek PRL i narodziny III RP",
    "type": "scenario",
    "prompt": "Jest czerwiec 1989 r. Kandydaci Komitetu Obywatelskiego Solidarność zdobywają niemal wszystkie dostępne dla nich miejsca w parlamencie. Który skutek polityczny stał się możliwy dzięki temu sukcesowi?",
    "options": [
      "możliwość utworzenia rządu Tadeusza Mazowieckiego",
      "rozwiązanie NATO",
      "powstanie WNP",
      "rozpad Czechosłowacji"
    ],
    "answer": 0,
    "image": "r06_wybory_1989_plakaty.jpg",
    "explanation": "Sukces wyborczy Solidarności umożliwił powstanie rządu z Tadeuszem Mazowieckim jako pierwszym niekomunistycznym premierem w dawnym bloku sowieckim."
  },
  {
    "id": "R06_PRL_08",
    "section": "Upadek PRL i narodziny III RP",
    "type": "match",
    "prompt": "Połącz osobę z rolą pełnioną w przemianach 1989-1990.",
    "options": null,
    "answer": {
      "Tadeusz Mazowiecki": "pierwszy niekomunistyczny premier w dawnym bloku sowieckim",
      "Wojciech Jaruzelski": "prezydent PRL wybrany przez Zgromadzenie Narodowe w 1989 r.",
      "Lech Wałęsa": "zwycięzca pierwszych powszechnych wyborów prezydenckich",
      "Ryszard Kaczorowski": "ostatni prezydent RP na uchodźstwie"
    },
    "left": [
      "Tadeusz Mazowiecki",
      "Wojciech Jaruzelski",
      "Lech Wałęsa",
      "Ryszard Kaczorowski"
    ],
    "right": [
      "ostatni prezydent RP na uchodźstwie",
      "zwycięzca pierwszych powszechnych wyborów prezydenckich",
      "pierwszy niekomunistyczny premier w dawnym bloku sowieckim",
      "prezydent PRL wybrany przez Zgromadzenie Narodowe w 1989 r."
    ],
    "explanation": "Każda z tych postaci odegrała odmienną rolę w przejściu od PRL do III RP."
  },
  {
    "id": "R06_PRL_09",
    "section": "Upadek PRL i narodziny III RP",
    "type": "sort",
    "prompt": "Przyporządkuj zmiany do roku, w którym nastąpiły.",
    "options": null,
    "answer": {
      "1989": [
        "obrady okrągłego stołu",
        "wybory czerwcowe",
        "powstanie rządu Tadeusza Mazowieckiego",
        "przywrócenie nazwy Rzeczpospolita Polska"
      ],
      "1990": [
        "pierwsze powszechne wybory prezydenckie",
        "zwycięstwo Lecha Wałęsy"
      ]
    },
    "items": [
      "obrady okrągłego stołu",
      "wybory czerwcowe",
      "powstanie rządu Tadeusza Mazowieckiego",
      "przywrócenie nazwy Rzeczpospolita Polska",
      "pierwsze powszechne wybory prezydenckie",
      "zwycięstwo Lecha Wałęsy"
    ],
    "categories": [
      "1989",
      "1990"
    ],
    "explanation": "Najważniejsze przełomy ustrojowe rozpoczęły się w 1989 r., a w 1990 r. odbyły się pierwsze powszechne wybory prezydenckie zakończone zwycięstwem Lecha Wałęsy."
  },
  {
    "id": "R06_PRL_10",
    "section": "Upadek PRL i narodziny III RP",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "Strajki pod hasłem Nie ma wolności bez Solidarności",
      "Obrady okrągłego stołu",
      "Wybory czerwcowe",
      "Utworzenie rządu Tadeusza Mazowieckiego",
      "Zwycięstwo Lecha Wałęsy w wyborach prezydenckich"
    ],
    "items": [
      "Wybory czerwcowe",
      "Zwycięstwo Lecha Wałęsy w wyborach prezydenckich",
      "Strajki pod hasłem Nie ma wolności bez Solidarności",
      "Utworzenie rządu Tadeusza Mazowieckiego",
      "Obrady okrągłego stołu"
    ],
    "image": "r06_okragly_stol.jpg",
    "explanation": "Strajki wybuchły w 1988 r., okrągły stół rozpoczął się w lutym 1989 r., wybory odbyły się w czerwcu 1989 r., rząd Mazowieckiego powstał we wrześniu 1989 r., a Wałęsa zwyciężył w 1990 r."
  },
  {
    "id": "R06_PRL_11",
    "section": "Upadek PRL i narodziny III RP",
    "type": "single_choice",
    "prompt": "Co symbolizowało przekazanie Lechowi Wałęsie insygniów prezydenckich przez Ryszarda Kaczorowskiego w 1990 r.?",
    "options": [
      "Początek stanu wojennego",
      "Rozwiązanie PZPR",
      "Powstanie WNP",
      "Wejście Polski do NATO",
      "Zakończenie misji władz RP na uchodźstwie",
      "Rozpad Jugosławii"
    ],
    "answer": 4,
    "explanation": "Przekazanie insygniów symbolicznie zakończyło misję władz RP na uchodźstwie, rozpoczętą w 1939 r."
  },
  {
    "id": "R06_JES_01",
    "section": "Jesień Narodów",
    "type": "single_choice",
    "prompt": "Co było jedną z głównych przyczyn narastającego niezadowolenia w krajach bloku wschodniego w drugiej połowie lat 80.?",
    "options": [
      "Rosnąca różnica poziomu życia między Wschodem a Zachodem",
      "Nadmiar towarów w sklepach",
      "Pełna wolność mediów",
      "Brak kontroli partii komunistycznych",
      "Zniesienie cenzury we wszystkich państwach",
      "Masowa prywatyzacja"
    ],
    "answer": 0,
    "explanation": "Mieszkańcy widzieli rosnącą różnicę poziomu życia między Wschodem a Zachodem oraz niewydolność gospodarki centralnie planowanej."
  },
  {
    "id": "R06_JES_02",
    "section": "Jesień Narodów",
    "type": "multi_select",
    "prompt": "Zaznacz przejawy demokratyzacji państw Europy Środkowo-Wschodniej w 1989 r.",
    "options": [
      "Znoszenie cenzury",
      "Uwalnianie więźniów politycznych",
      "Wzmocnienie monopolu partii komunistycznej",
      "Możliwość tworzenia partii i stowarzyszeń",
      "Przeprowadzanie wolnych wyborów"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Demokratyzacja obejmowała odchodzenie od monopolu partii komunistycznej, znoszenie cenzury, uwalnianie więźniów politycznych i możliwość tworzenia niezależnych organizacji."
  },
  {
    "id": "R06_JES_03",
    "section": "Jesień Narodów",
    "type": "true_false",
    "prompt": "Przemiany określane jako aksamitna rewolucja w Czechosłowacji miały pokojowy charakter.",
    "options": null,
    "answer": true,
    "explanation": "W Czechosłowacji jesienią 1989 r. masowe manifestacje i strajki doprowadziły do pokojowych zmian, dlatego nazwano je aksamitną rewolucją."
  },
  {
    "id": "R06_JES_04",
    "section": "Jesień Narodów",
    "type": "fill_in",
    "prompt": "W listopadzie 1989 r. otwarto przejścia w __________, a w październiku 1990 r. doszło do __________ Niemiec.",
    "options": null,
    "answer": [
      "murze berlińskim",
      "zjednoczenia"
    ],
    "altAnswers": [
      [
        "murze berlińskim",
        "murze w Berlinie"
      ],
      [
        "zjednoczenia",
        "zjednoczenie"
      ]
    ],
    "explanation": "9 listopada 1989 r. otwarto przejścia między wschodnim a zachodnim Berlinem, a w październiku 1990 r. Niemcy się zjednoczyły."
  },
  {
    "id": "R06_JES_05",
    "section": "Jesień Narodów",
    "type": "riddle",
    "prompt": "Jak nazywano pokojowe przemiany polityczne w Czechosłowacji jesienią 1989 r.?",
    "options": null,
    "answer": "aksamitna rewolucja",
    "altAnswers": [
      "aksamitna rewolucja",
      "aksamitną rewolucją"
    ],
    "explanation": "Pokojowy przebieg przemian w Czechosłowacji sprawił, że nazwano je aksamitną rewolucją."
  },
  {
    "id": "R06_JES_06",
    "section": "Jesień Narodów",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, w którym Jesień Narodów miała najbardziej krwawy przebieg: Polska, Węgry, Czechosłowacja, Rumunia.",
    "options": null,
    "answer": "Rumunia",
    "explanation": "W Rumunii doszło do zbrojnego powstania przeciw dyktatorowi Nicolae Ceaușescu i walk, w których zginęły setki osób."
  },
  {
    "id": "R06_JES_07",
    "section": "Jesień Narodów",
    "type": "scenario",
    "prompt": "Jest 9 listopada 1989 r. Tłumy ludzi przechodzą między wschodnim a zachodnim Berlinem i zaczynają kruszyć betonową barierę. Jakie wydarzenie opisuje ta sytuacja?",
    "options": [
      "upadek muru berlińskiego",
      "aksamitny rozwód",
      "rozpad ZSRS",
      "wejście Polski do NATO"
    ],
    "answer": 0,
    "explanation": "Otwarcie przejść granicznych 9 listopada 1989 r. stało się symbolem upadku muru berlińskiego."
  },
  {
    "id": "R06_JES_08",
    "section": "Jesień Narodów",
    "type": "match",
    "prompt": "Połącz państwo z wydarzeniem Jesieni Narodów.",
    "options": null,
    "answer": {
      "Węgry": "rehabilitacja Imrego Nagya i rozpoczęcie przemian już wiosną 1989 r.",
      "Czechosłowacja": "aksamitna rewolucja i wybór Václava Havla",
      "NRD": "otwarcie przejść w murze berlińskim",
      "Rumunia": "zbrojne powstanie i obalenie Nicolae Ceaușescu"
    },
    "left": [
      "Węgry",
      "Czechosłowacja",
      "NRD",
      "Rumunia"
    ],
    "right": [
      "zbrojne powstanie i obalenie Nicolae Ceaușescu",
      "aksamitna rewolucja i wybór Václava Havla",
      "otwarcie przejść w murze berlińskim",
      "rehabilitacja Imrego Nagya i rozpoczęcie przemian już wiosną 1989 r."
    ],
    "explanation": "Wydarzenia Jesieni Narodów miały różny przebieg w poszczególnych krajach, od pokojowych negocjacji po zbrojne starcia w Rumunii."
  },
  {
    "id": "R06_JES_09",
    "section": "Jesień Narodów",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "answer": [
      "Początek przemian politycznych na Węgrzech",
      "Upadek muru berlińskiego",
      "Wybór Václava Havla na prezydenta Czechosłowacji",
      "Zjednoczenie Niemiec",
      "Rozwiązanie Układu Warszawskiego"
    ],
    "items": [
      "Zjednoczenie Niemiec",
      "Wybór Václava Havla na prezydenta Czechosłowacji",
      "Rozwiązanie Układu Warszawskiego",
      "Początek przemian politycznych na Węgrzech",
      "Upadek muru berlińskiego"
    ],
    "image": "r06_mur_berlinski.jpg",
    "explanation": "Przemiany na Węgrzech zaczęły się wiosną 1989 r., mur berliński upadł w listopadzie 1989 r., Havel został prezydentem w grudniu 1989 r., Niemcy zjednoczyły się w 1990 r., a Układ Warszawski rozwiązano w 1991 r."
  },
  {
    "id": "R06_JES_10",
    "section": "Jesień Narodów",
    "type": "single_choice",
    "prompt": "Dlaczego proces obalania komunizmu w 1989 r. nazwano Jesienią Narodów?",
    "options": [
      "Nawiązywała do rewolucji październikowej",
      "Nawiązywała do Wiosny Ludów z 1848 r.",
      "Odnosiła się do rozpadu Jugosławii",
      "Pochodziła od nazwy partii politycznej",
      "Oznaczała wyłącznie zjednoczenie Niemiec",
      "Była nazwą reform Gorbaczowa"
    ],
    "answer": 1,
    "explanation": "Nazwa nawiązywała do Wiosny Ludów z 1848 r., gdy narody europejskie wystąpiły przeciw dotychczasowemu porządkowi i domagały się praw."
  },
  {
    "id": "R06_ROZ_01",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "single_choice",
    "prompt": "Które republiki jako pierwsze opuściły ZSRS w 1991 r.?",
    "options": [
      "Ukraina, Białoruś i Rosja",
      "Gruzja, Armenia i Azerbejdżan",
      "Litwa, Łotwa i Estonia",
      "Kazachstan, Uzbekistan i Kirgistan",
      "Mołdawia, Ukraina i Armenia",
      "Rosja, Litwa i Gruzja"
    ],
    "answer": 2,
    "explanation": "Wiosną 1991 r. niepodległość odzyskały Litwa, Łotwa i Estonia."
  },
  {
    "id": "R06_ROZ_02",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, których przywódcy w grudniu 1991 r. uzgodnili rozwiązanie ZSRS.",
    "options": [
      "Rosja",
      "Ukraina",
      "Białoruś",
      "Litwa",
      "Gruzja"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przywódcy Rosji, Ukrainy i Białorusi ogłosili rozwiązanie ZSRS i powstanie Wspólnoty Niepodległych Państw."
  },
  {
    "id": "R06_ROZ_03",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "true_false",
    "prompt": "Próba puczu w ZSRS latem 1991 r. zakończyła się przejęciem władzy przez jego organizatorów.",
    "options": null,
    "answer": false,
    "image": "r06_jelcyn_moskwa_1991.jpg",
    "explanation": "Mieszkańcy Moskwy, z Borysem Jelcynem jako jednym z liderów oporu, nie dopuścili do powodzenia zamachu stanu."
  },
  {
    "id": "R06_ROZ_04",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "fill_in",
    "prompt": "Pokojowy podział Czechosłowacji na Czechy i Słowację w 1993 r. nazwano __________.",
    "options": null,
    "answer": [
      "aksamitnym rozwodem"
    ],
    "altAnswers": [
      [
        "aksamitnym rozwodem",
        "aksamitny rozwód"
      ]
    ],
    "explanation": "Podział przeprowadzono pokojowo, dlatego określono go mianem aksamitnego rozwodu."
  },
  {
    "id": "R06_ROZ_05",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "riddle",
    "prompt": "Jak nazywała się organizacja powstała w 1991 r., skupiająca część państw utworzonych po rozpadzie ZSRS?",
    "options": null,
    "answer": "Wspólnota Niepodległych Państw",
    "altAnswers": [
      "Wspólnota Niepodległych Państw",
      "WNP"
    ],
    "explanation": "W grudniu 1991 r. ogłoszono powstanie Wspólnoty Niepodległych Państw, skupiającej część byłych republik sowieckich."
  },
  {
    "id": "R06_ROZ_06",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie powstało w wyniku rozpadu Czechosłowacji lub Jugosławii: Czechy, Słowacja, Chorwacja, Białoruś.",
    "options": null,
    "answer": "Białoruś",
    "explanation": "Białoruś była republiką ZSRS; Czechy i Słowacja powstały po podziale Czechosłowacji, a Chorwacja po rozpadzie Jugosławii."
  },
  {
    "id": "R06_ROZ_07",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "scenario",
    "prompt": "W 1993 r. przywódcy dwóch narodów uzgadniają pokojowy podział wspólnego państwa, bez wojny i czystek etnicznych. Jak nazwano ten proces?",
    "options": [
      "aksamitny rozwód",
      "pieriestrojka",
      "Jesień Narodów",
      "operacja w Afganistanie"
    ],
    "answer": 0,
    "explanation": "Pokojowy rozpad Czechosłowacji na Czechy i Słowację nazwano aksamitnym rozwodem."
  },
  {
    "id": "R06_ROZ_08",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "match",
    "prompt": "Połącz miejsce lub państwo z opisem wydarzenia.",
    "options": null,
    "answer": {
      "Litwa": "działalność ruchu Sajudis i dążenie do niepodległości",
      "Czechosłowacja": "pokojowy podział na Czechy i Słowację",
      "Bośnia i Hercegowina": "krwawa wojna domowa w latach 1992-1995",
      "Kosowo": "interwencja lotnictwa NATO w 1999 r."
    },
    "left": [
      "Litwa",
      "Czechosłowacja",
      "Bośnia i Hercegowina",
      "Kosowo"
    ],
    "right": [
      "interwencja lotnictwa NATO w 1999 r.",
      "działalność ruchu Sajudis i dążenie do niepodległości",
      "krwawa wojna domowa w latach 1992-1995",
      "pokojowy podział na Czechy i Słowację"
    ],
    "explanation": "Rozpad dawnych państw komunistycznych przebiegał bardzo różnie: od pokojowego podziału Czechosłowacji po wojny na Bałkanach."
  },
  {
    "id": "R06_ROZ_09",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "answer": [
      "Powstanie Sajudisu na Litwie",
      "Odzyskanie niepodległości przez kraje bałtyckie",
      "Rozwiązanie ZSRS",
      "Rozpad Czechosłowacji",
      "Interwencja NATO w Kosowie"
    ],
    "items": [
      "Rozpad Czechosłowacji",
      "Powstanie Sajudisu na Litwie",
      "Interwencja NATO w Kosowie",
      "Rozwiązanie ZSRS",
      "Odzyskanie niepodległości przez kraje bałtyckie"
    ],
    "image": "r06_sarajewo_blekitne_helmy.jpg",
    "explanation": "Sajudis powstał w 1988 r., państwa bałtyckie odzyskały niepodległość w 1991 r., ZSRS rozwiązano w grudniu 1991 r., Czechosłowacja rozpadła się w 1993 r., a NATO interweniowało w Kosowie w 1999 r."
  },
  {
    "id": "R06_ROZ_10",
    "section": "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "type": "single_choice",
    "prompt": "Który konflikt w byłej Jugosławii wiązał się z oblężeniem Sarajewa i masakrą w Srebrenicy?",
    "options": [
      "Wojna w Słowenii",
      "Konflikt o Górski Karabach",
      "Powstanie w Rumunii",
      "Wojna w Bośni i Hercegowinie",
      "Pucz w Moskwie",
      "Aksamitny rozwód"
    ],
    "answer": 3,
    "explanation": "Wojna w Bośni i Hercegowinie w latach 1992-1995 miała szczególnie brutalny przebieg; w jej trakcie doszło m.in. do oblężenia Sarajewa i zbrodni w Srebrenicy."
  },
  {
    "id": "R06_TRP_01",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "single_choice",
    "prompt": "Która zmiana nastąpiła w Polsce w 1990 r. w ramach likwidacji instytucji kojarzonych z PRL?",
    "options": [
      "Utworzenie RWPG",
      "Przemianowanie Milicji Obywatelskiej na policję",
      "Wstąpienie do NATO",
      "Utworzenie WNP",
      "Przywrócenie 49 województw",
      "Wprowadzenie cenzury"
    ],
    "answer": 1,
    "explanation": "W 1990 r. Milicję Obywatelską przemianowano na policję, rozwiązano ZOMO i zlikwidowano Służbę Bezpieczeństwa."
  },
  {
    "id": "R06_TRP_02",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany, które symbolizowały odchodzenie od PRL pod koniec 1989 r. i w 1990 r.",
    "options": [
      "Przywrócenie nazwy Rzeczpospolita Polska",
      "Powrót korony na głowę orła w godle",
      "Zniesienie cenzury",
      "Przywrócenie ZOMO",
      "Likwidacja Służby Bezpieczeństwa"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Przywrócono nazwę Rzeczpospolita Polska i koronę w godle, zlikwidowano cenzurę oraz komunistyczne służby bezpieczeństwa."
  },
  {
    "id": "R06_TRP_03",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "true_false",
    "prompt": "Pierwsze wolne wybory parlamentarne w III RP odbyły się w 1991 r.",
    "options": null,
    "answer": true,
    "explanation": "Jesienią 1991 r. przeprowadzono pierwsze wolne wybory parlamentarne, w których do parlamentu weszli przedstawiciele 23 ugrupowań."
  },
  {
    "id": "R06_TRP_04",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "fill_in",
    "prompt": "Plan reform gospodarczych opracował zespół pod kierownictwem __________, a jednym z głównych celów była walka z wysoką __________.",
    "options": null,
    "answer": [
      "Leszka Balcerowicza",
      "inflacją"
    ],
    "altAnswers": [
      [
        "Leszka Balcerowicza",
        "Leszek Balcerowicz",
        "Balcerowicza"
      ],
      [
        "inflacją",
        "inflacja"
      ]
    ],
    "explanation": "Leszek Balcerowicz kierował zespołem przygotowującym program szybkiej transformacji, której celem było m.in. ograniczenie wysokiej inflacji."
  },
  {
    "id": "R06_TRP_05",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "riddle",
    "prompt": "Jak nazywa się proces sprzedaży majątku państwowego prywatnym inwestorom?",
    "options": null,
    "answer": "prywatyzacja",
    "altAnswers": [
      "prywatyzacja",
      "prywatyzacją"
    ],
    "explanation": "Prywatyzacja była jednym z elementów przebudowy gospodarki centralnie planowanej w gospodarkę rynkową."
  },
  {
    "id": "R06_TRP_06",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie był celem planu Balcerowicza: ograniczenie inflacji, poprawa zaopatrzenia sklepów, stworzenie wolnego rynku, wzmocnienie centralnego planowania.",
    "options": null,
    "answer": "wzmocnienie centralnego planowania",
    "explanation": "Plan Balcerowicza zakładał przejście do gospodarki rynkowej, ograniczenie inflacji i poprawę zaopatrzenia, a nie wzmacnianie centralnego planowania."
  },
  {
    "id": "R06_TRP_07",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "scenario",
    "prompt": "Jest początek lat 90. Państwo sprzedaje udziały w przedsiębiorstwach prywatnym inwestorom, a na warszawskim rynku zaczyna działać giełda. Jak nazywa się proces sprzedaży udziałów w państwowych przedsiębiorstwach prywatnym inwestorom?",
    "options": [
      "prywatyzacja",
      "kolektywizacja",
      "reglamentacja",
      "nacjonalizacja"
    ],
    "answer": 0,
    "explanation": "Sprzedaż majątku państwowego prywatnym inwestorom to prywatyzacja; warszawska Giełda Papierów Wartościowych rozpoczęła działalność w kwietniu 1991 r."
  },
  {
    "id": "R06_TRP_08",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym znaczeniem lub skutkiem.",
    "options": null,
    "answer": {
      "inflacja": "wzrost cen i spadek wartości pieniądza",
      "restrukturyzacja": "unowocześnianie zakładów i zmiana organizacji pracy",
      "prywatyzacja": "przekazywanie majątku państwowego prywatnym inwestorom",
      "denominacja": "zmniejszenie nominałów złotego w 1995 r."
    },
    "left": [
      "inflacja",
      "restrukturyzacja",
      "prywatyzacja",
      "denominacja"
    ],
    "right": [
      "przekazywanie majątku państwowego prywatnym inwestorom",
      "zmniejszenie nominałów złotego w 1995 r.",
      "wzrost cen i spadek wartości pieniądza",
      "unowocześnianie zakładów i zmiana organizacji pracy"
    ],
    "explanation": "Transformacja gospodarcza obejmowała ograniczanie inflacji, restrukturyzację i prywatyzację, a w 1995 r. przeprowadzono denominację złotego."
  },
  {
    "id": "R06_TRP_09",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "sort",
    "prompt": "Przyporządkuj skutki transformacji gospodarczej do odpowiedniej grupy.",
    "options": null,
    "answer": {
      "korzyści": [
        "spadek inflacji",
        "pełniejsze zaopatrzenie sklepów",
        "wzrost znaczenia sektora prywatnego",
        "rozwój nowych technologii"
      ],
      "koszty społeczne": [
        "bezrobocie",
        "upadek części przedsiębiorstw",
        "pogłębianie różnic regionalnych"
      ]
    },
    "items": [
      "spadek inflacji",
      "pełniejsze zaopatrzenie sklepów",
      "wzrost znaczenia sektora prywatnego",
      "rozwój nowych technologii",
      "bezrobocie",
      "upadek części przedsiębiorstw",
      "pogłębianie różnic regionalnych"
    ],
    "categories": [
      "korzyści",
      "koszty społeczne"
    ],
    "image": "r06_gielda_warszawska.jpg",
    "explanation": "Reformy przyniosły stabilizację i rozwój gospodarki rynkowej, ale równocześnie bezrobocie, upadek wielu zakładów i nierównomierny rozwój regionów."
  },
  {
    "id": "R06_TRP_10",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "answer": [
      "Rozwiązanie PZPR",
      "Pierwsze wolne wybory parlamentarne",
      "Denominacja złotego",
      "Uchwalenie Konstytucji III RP",
      "Reforma administracyjna wprowadzająca 16 województw"
    ],
    "items": [
      "Uchwalenie Konstytucji III RP",
      "Rozwiązanie PZPR",
      "Reforma administracyjna wprowadzająca 16 województw",
      "Denominacja złotego",
      "Pierwsze wolne wybory parlamentarne"
    ],
    "explanation": "PZPR rozwiązała się w 1990 r., wolne wybory parlamentarne odbyły się w 1991 r., denominację przeprowadzono w 1995 r., konstytucję uchwalono w 1997 r., a reformę administracyjną wdrożono w 1999 r."
  },
  {
    "id": "R06_TRP_11",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "single_choice",
    "prompt": "Ile województw utworzono w Polsce w ramach reformy administracyjnej wprowadzonej w 1999 r.?",
    "options": [
      "8",
      "12",
      "14",
      "16",
      "23",
      "49"
    ],
    "answer": 3,
    "explanation": "Reforma administracyjna zastąpiła 49 dotychczasowych województw 16 nowymi i przywróciła powiaty."
  },
  {
    "id": "R06_TRP_12",
    "section": "III RP i przemiany gospodarczo-społeczne",
    "type": "single_choice",
    "prompt": "Który dokument uchwalony w 1997 r. określił Polskę jako demokratyczne państwo prawne?",
    "options": [
      "Konstytucja Rzeczypospolitej Polskiej",
      "Układ Warszawski",
      "Traktat akcesyjny do UE",
      "Układ graniczny z RFN",
      "Deklaracja wyszehradzka",
      "Porozumienie okrągłego stołu"
    ],
    "answer": 0,
    "image": "r06_orzel_korona.jpg",
    "explanation": "Konstytucja Rzeczypospolitej Polskiej uchwalona w 1997 r. określiła ustrój państwa i została zatwierdzona w referendum."
  },
  {
    "id": "R06_INT_01",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "single_choice",
    "prompt": "Który cel stał się głównym kierunkiem polskiej polityki zagranicznej w latach III RP?",
    "options": [
      "Odbudowa Układu Warszawskiego",
      "Integracja z NATO i Unią Europejską",
      "Powrót do RWPG",
      "Izolacja od sąsiadów",
      "Wycofanie się ze współpracy europejskiej",
      "Wstąpienie do WNP"
    ],
    "answer": 1,
    "explanation": "Jednym z najważniejszych kierunków polityki zagranicznej była integracja z NATO i Unią Europejską."
  },
  {
    "id": "R06_INT_02",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "multi_select",
    "prompt": "Zaznacz państwa należące do Grupy Wyszehradzkiej po rozpadzie Czechosłowacji.",
    "options": [
      "Polska",
      "Czechy",
      "Słowacja",
      "Węgry",
      "Niemcy",
      "Francja"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po rozpadzie Czechosłowacji porozumienie działało jako Grupa Wyszehradzka, skupiająca Polskę, Czechy, Słowację i Węgry."
  },
  {
    "id": "R06_INT_03",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "true_false",
    "prompt": "Ostatni żołnierze Armii Rosyjskiej opuścili Polskę w 1993 r.",
    "options": null,
    "answer": true,
    "explanation": "Wycofywanie wojsk rozpoczęło się w 1991 r., a ostatni żołnierze Armii Rosyjskiej opuścili Polskę 17 września 1993 r."
  },
  {
    "id": "R06_INT_04",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "fill_in",
    "prompt": "Polska została członkiem NATO w roku __________, a Unii Europejskiej 1 maja __________.",
    "options": null,
    "answer": [
      "1999",
      "2004"
    ],
    "altAnswers": [
      [
        "1999",
        "1999 r."
      ],
      [
        "2004",
        "2004 r."
      ]
    ],
    "explanation": "Polska przystąpiła do NATO w 1999 r., a do Unii Europejskiej 1 maja 2004 r."
  },
  {
    "id": "R06_INT_05",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "riddle",
    "prompt": "Jak nazywa się porozumienie Niemiec, Polski i Francji utworzone w latach 90. w celu wspierania integracji Europy Środkowej i Zachodniej?",
    "options": null,
    "answer": "Trójkąt Weimarski",
    "altAnswers": [
      "Trójkąt Weimarski",
      "Trójkąta Weimarskiego"
    ],
    "explanation": "Niemcy, Polska i Francja utworzyły Trójkąt Weimarski, nazwany od niemieckiego miasta Weimar."
  },
  {
    "id": "R06_INT_06",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie zostało zaproszone wraz z Polską do NATO w 1997 r.: Czechy, Węgry, Polska, Białoruś.",
    "options": null,
    "answer": "Białoruś",
    "explanation": "W 1997 r. Bill Clinton oficjalnie zaprosił do NATO Polskę, Czechy i Węgry."
  },
  {
    "id": "R06_INT_07",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "scenario",
    "prompt": "Jest 1990 r. Polska podpisuje z RFN układ, który ostatecznie potwierdza przebieg wspólnej granicy. Którą granicę potwierdzał ten układ?",
    "options": [
      "Odra i Nysa Łużycka",
      "Wisła i San",
      "Bug i Narew",
      "Warta i Noteć"
    ],
    "answer": 0,
    "explanation": "Układ graniczny z RFN oznaczał ostateczne uznanie przez Niemcy granicy na Odrze i Nysie Łużyckiej."
  },
  {
    "id": "R06_INT_08",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "answer": {
      "Układ graniczny Polski z RFN": "1990",
      "Układ stowarzyszeniowy ze Wspólnotami Europejskimi": "1991",
      "Wstąpienie Polski do NATO": "1999",
      "Wstąpienie Polski do Unii Europejskiej": "2004"
    },
    "left": [
      "Układ graniczny Polski z RFN",
      "Układ stowarzyszeniowy ze Wspólnotami Europejskimi",
      "Wstąpienie Polski do NATO",
      "Wstąpienie Polski do Unii Europejskiej"
    ],
    "right": [
      "2004",
      "1999",
      "1990",
      "1991"
    ],
    "image": "r06_nato_1999.jpg",
    "explanation": "Te daty pokazują kolejne etapy układania relacji z sąsiadami i integracji Polski ze strukturami Zachodu."
  },
  {
    "id": "R06_INT_09",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "sequence",
    "prompt": "Ułóż etapy integracji Polski z Unią Europejską w porządku chronologicznym.",
    "options": null,
    "answer": [
      "Podpisanie układu stowarzyszeniowego ze Wspólnotami Europejskimi",
      "Decyzja o rozpoczęciu negocjacji z Polską",
      "Podpisanie traktatu akcesyjnego",
      "Referendum akcesyjne",
      "Wejście Polski do Unii Europejskiej"
    ],
    "items": [
      "Referendum akcesyjne",
      "Decyzja o rozpoczęciu negocjacji z Polską",
      "Wejście Polski do Unii Europejskiej",
      "Podpisanie układu stowarzyszeniowego ze Wspólnotami Europejskimi",
      "Podpisanie traktatu akcesyjnego"
    ],
    "image": "r06_ue_2004.jpg",
    "explanation": "Układ stowarzyszeniowy podpisano w 1991 r., decyzję o negocjacjach podjęto w 1997 r., traktat i referendum miały miejsce w 2003 r., a członkostwo rozpoczęło się 1 maja 2004 r."
  },
  {
    "id": "R06_INT_10",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "single_choice",
    "prompt": "Jaki odsetek głosujących w referendum w 2003 r. opowiedział się za przyjęciem traktatu akcesyjnego do Unii Europejskiej?",
    "options": [
      "51%",
      "65%",
      "77%",
      "82%",
      "90%",
      "99%"
    ],
    "answer": 2,
    "explanation": "Za przyjęciem traktatu akcesyjnego opowiedziało się 77% głosujących."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku powstał na Litwie Sajudis - masowy ruch dążący do pełnej niepodległości kraju?",
    "options": [
      "1985",
      "1988",
      "1989",
      "1990",
      "1991",
      "1993"
    ],
    "answer": 1,
    "explanation": "Sajudis powstał na Litwie w 1988 r. i stał się głównym ruchem niepodległościowym."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która data wiąże się z opuszczeniem Polski przez ostatnich żołnierzy Armii Rosyjskiej?",
    "options": [
      "4 czerwca 1989 r.",
      "22 grudnia 1990 r.",
      "12 marca 1999 r.",
      "17 września 1993 r.",
      "1 maja 2004 r.",
      "9 listopada 1989 r."
    ],
    "answer": 3,
    "explanation": "Ostatni żołnierze Armii Rosyjskiej opuścili Polskę 17 września 1993 r., dokładnie 54 lata po agresji sowieckiej na Polskę."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który polityk został pierwszą kobietą sprawującą funkcję premiera w Polsce?",
    "options": [
      "Wisława Szymborska",
      "Madeleine Albright",
      "Hanna Suchocka",
      "Danuta Hübner",
      "Anna Walentynowicz",
      "Barbara Labuda"
    ],
    "answer": 2,
    "explanation": "Po upadku rządu Jana Olszewskiego nową koalicję utworzył gabinet Hanny Suchockiej, pierwszej kobiety na stanowisku premiera Polski."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku Warszawska Giełda Papierów Wartościowych rozpoczęła działalność?",
    "options": [
      "1991",
      "1992",
      "1993",
      "1995",
      "1997",
      "1999"
    ],
    "answer": 0,
    "explanation": "Warszawska Giełda Papierów Wartościowych rozpoczęła działalność w kwietniu 1991 r."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia, które miały miejsce w 1991 r.",
    "options": [
      "Rozwiązanie ZSRS",
      "Rozwiązanie Układu Warszawskiego",
      "Pierwsze wolne wybory parlamentarne w Polsce",
      "Wejście Polski do NATO",
      "Podpisanie układu stowarzyszeniowego ze Wspólnotami Europejskimi",
      "Rozpad Czechosłowacji"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "W 1991 r. rozwiązano ZSRS i Układ Warszawski, odbyły się w Polsce pierwsze wolne wybory parlamentarne oraz podpisano układ stowarzyszeniowy ze Wspólnotami Europejskimi."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz osoby wymienione jako uczestnicy obrad okrągłego stołu po stronie Solidarności.",
    "options": [
      "Jacek Kuroń",
      "Adam Michnik",
      "Leszek Miller",
      "Zbigniew Bujak",
      "Władysław Frasyniuk",
      "Aleksander Kwaśniewski"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Wśród przedstawicieli Solidarności byli m.in. Jacek Kuroń, Adam Michnik, Zbigniew Bujak i Władysław Frasyniuk."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W 1995 r. nowy 1 złoty został ustalony jako równowartość 10 tysięcy starych złotych.",
    "options": null,
    "answer": true,
    "explanation": "Denominacja z 1995 r. zmniejszyła nominały: 1 nowy złoty odpowiadał 10 tysiącom dawnych złotych."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1991 r. do Polski dotarł __________, a w 1992 r. rozpoczęła działalność pierwsza sieć __________.",
    "options": null,
    "answer": [
      "internet",
      "telefonii komórkowej"
    ],
    "altAnswers": [
      [
        "internet",
        "Internet"
      ],
      [
        "telefonii komórkowej",
        "telefonia komórkowa",
        "sieć telefonii komórkowej"
      ]
    ],
    "explanation": "W 1991 r. do Polski dotarł internet, a rok później ruszyła pierwsza sieć telefonii komórkowej."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wojna domowa w Bośni i Hercegowinie trwała w latach __________, a interwencja lotnictwa NATO w Kosowie nastąpiła w roku __________.",
    "options": null,
    "answer": [
      "1992-1995",
      "1999"
    ],
    "altAnswers": [
      [
        "1992-1995",
        "1992–1995"
      ],
      [
        "1999",
        "1999 r."
      ]
    ],
    "explanation": "Wojna w Bośni i Hercegowinie trwała w latach 1992-1995, a w 1999 r. lotnictwo NATO uderzyło na wojska serbskie w związku z konfliktem w Kosowie."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się pierwszy masowy litewski ruch niepodległościowy utworzony w 1988 r.?",
    "options": null,
    "answer": "Sajudis",
    "altAnswers": [
      "Sajudis",
      "Sąjūdis"
    ],
    "explanation": "Sajudis stał się masowym ruchem dążącym do pełnej niepodległości Litwy."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Podaj nazwisko polsko-amerykańskiego politologa i doradcy prezydenta Jimmy'ego Cartera, który wspierał starania o rozszerzenie NATO.",
    "options": null,
    "answer": "Brzeziński",
    "altAnswers": [
      "Brzeziński",
      "Zbigniew Brzeziński"
    ],
    "explanation": "Zbigniew Brzeziński, obok Jana Nowaka-Jeziorańskiego, odegrał ważną rolę w przekonywaniu Stanów Zjednoczonych do rozszerzenia NATO."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jest 1995 r. Państwo wymienia pieniądze tak, że 1 nowy złoty odpowiada 10 tysiącom dawnych złotych. Jak nazywała się ta operacja?",
    "options": [
      "denominacja",
      "prywatyzacja",
      "restrukturyzacja",
      "lustracja"
    ],
    "answer": 0,
    "explanation": "Zmianę nominałów złotego przeprowadzoną w 1995 r. nazywa się denominacją."
  },
  {
    "id": "R06_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem.",
    "options": null,
    "answer": {
      "9 listopada 1989": "otwarcie przejść w murze berlińskim",
      "22 grudnia 1990": "objęcie urzędu prezydenta przez Lecha Wałęsę",
      "17 września 1993": "wyjazd ostatnich żołnierzy Armii Rosyjskiej z Polski",
      "12 marca 1999": "formalna akcesja Polski do NATO",
      "1 maja 2004": "wejście Polski do Unii Europejskiej"
    },
    "left": [
      "9 listopada 1989",
      "22 grudnia 1990",
      "17 września 1993",
      "12 marca 1999",
      "1 maja 2004"
    ],
    "right": [
      "wejście Polski do Unii Europejskiej",
      "formalna akcesja Polski do NATO",
      "objęcie urzędu prezydenta przez Lecha Wałęsę",
      "otwarcie przejść w murze berlińskim",
      "wyjazd ostatnich żołnierzy Armii Rosyjskiej z Polski"
    ],
    "explanation": "Daty te wyznaczają ważne momenty przemian w Europie i w polityce zagranicznej Polski."
  },
  {
    "id": "R06_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "answer": [
      "Utworzenie Trójkąta Wyszehradzkiego",
      "Wycofanie ostatnich wojsk rosyjskich z Polski",
      "Uchwalenie Konstytucji III RP",
      "Wstąpienie Polski do NATO",
      "Podpisanie traktatu akcesyjnego do UE",
      "Wejście Polski do strefy Schengen"
    ],
    "items": [
      "Wstąpienie Polski do NATO",
      "Wejście Polski do strefy Schengen",
      "Utworzenie Trójkąta Wyszehradzkiego",
      "Podpisanie traktatu akcesyjnego do UE",
      "Wycofanie ostatnich wojsk rosyjskich z Polski",
      "Uchwalenie Konstytucji III RP"
    ],
    "explanation": "Trójkąt Wyszehradzki zapoczątkowano w 1991 r., wojska rosyjskie wyszły w 1993 r., konstytucję uchwalono w 1997 r., Polska weszła do NATO w 1999 r., traktat akcesyjny podpisano w 2003 r., a do Schengen Polska przystąpiła w 2007 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Polska i świat na przełomie XX i XXI wieku",
  icon: "🌍",
  sectionOrder: [
    "Kryzys ZSRS i reformy Gorbaczowa",
    "Upadek PRL i narodziny III RP",
    "Jesień Narodów",
    "Rozpad ZSRS, Czechosłowacji i Jugosławii",
    "III RP i przemiany gospodarczo-społeczne",
    "Polska w NATO i Unii Europejskiej"
  ],
  sectionIcons: {
    "Kryzys ZSRS i reformy Gorbaczowa": "🏭",
    "Upadek PRL i narodziny III RP": "✌️",
    "Jesień Narodów": "🕊️",
    "Rozpad ZSRS, Czechosłowacji i Jugosławii": "🧩",
    "III RP i przemiany gospodarczo-społeczne": "🇵🇱",
    "Polska w NATO i Unii Europejskiej": "🌐"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
