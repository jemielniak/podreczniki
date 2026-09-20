// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ZSR  = Rozpad ZSRR i Jesień Narodów
//   CHI  = Chiny mocarstwem
//   BLI  = Bliski Wschód na przełomie XX i XXI w.
//   EUR  = Integracja europejska
//   GLO  = Dzisiejszy świat i globalizacja
//   POL  = Polska w NATO i Unii Europejskiej
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_ZSR_01",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "single_choice",
    "prompt": "Jak nazywała się przebudowa systemu radzieckiego ogłoszona przez Michaiła Gorbaczowa w 1985 r.?",
    "options": [
      "Głasnost",
      "Pierestrojka",
      "Doktryna Breżniewa",
      "Jesień Narodów",
      "Plan Balcerowicza",
      "Aksamitna rewolucja"
    ],
    "answer": 1,
    "explanation": "Pierestrojka oznaczała przebudowę systemu ZSRR. Miała umożliwić reformy gospodarcze, ale uruchomiła zmiany, które przyczyniły się do rozpadu ustroju.",
    "image": "r04_gorbaczow_przemowienie.jpg"
  },
  {
    "id": "R04_ZSR_02",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "single_choice",
    "prompt": "Które wydarzenie zakończyło okres odprężenia w stosunkach Wschód-Zachód?",
    "options": [
      "Wkroczenie Armii Radzieckiej do Afganistanu w 1979 r.",
      "Rozpad ZSRR w 1991 r.",
      "Zjednoczenie Niemiec w 1990 r.",
      "Powstanie NATO",
      "Rewolucja w Rumunii w 1989 r.",
      "Podpisanie traktatu z Maastricht"
    ],
    "answer": 0,
    "explanation": "Okres odprężenia trwał w latach 1969-1979. Zakończył się po wkroczeniu Armii Radzieckiej do Afganistanu w 1979 r."
  },
  {
    "id": "R04_ZSR_03",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "multi_select",
    "prompt": "Zaznacz zjawiska, które osłabiały ZSRR w latach 80. XX w.",
    "options": [
      "Nieefektywne scentralizowane zarządzanie",
      "Pragnienie niepodległości wielu narodów",
      "Powszechny dobrobyt konsumpcyjny",
      "Zacofanie ekonomiczne i technologiczne",
      "Gigantyczne wydatki na zbrojenia",
      "Pełna swoboda krytyki władz"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do słabości ZSRR należały m.in. nieefektywne zarządzanie, wielonarodowość i dążenia niepodległościowe, zacofanie gospodarcze oraz ogromne koszty zbrojeń.",
    "image": "r04_lancuch_baltycki.jpg"
  },
  {
    "id": "R04_ZSR_04",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "true_false",
    "prompt": "Głasnost oznaczała większą jawność życia publicznego i złagodzenie cenzury w ZSRR.",
    "options": null,
    "answer": true,
    "explanation": "Głasnost oznaczała jawność. Media zaczęły informować o problemach wcześniej przemilczanych, a władze dopuściły ograniczoną wolność słowa.",
    "image": "r04_czarnobyl_reaktor.jpg"
  },
  {
    "id": "R04_ZSR_05",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "fill_in",
    "prompt": "W 1990 r. __________ ogłosiła niepodległość, a w grudniu 1991 r. przywódcy Białorusi, Ukrainy i Rosji zawarli porozumienie __________.",
    "options": null,
    "answer": [
      "Litwa",
      "białowieskie"
    ],
    "altAnswers": [
      [
        "Litwa",
        "Litwa w 1990 r."
      ],
      [
        "białowieskie",
        "porozumienie białowieskie"
      ]
    ],
    "explanation": "Litwa jako pierwsza republika radziecka ogłosiła niepodległość w 1990 r. Porozumienie białowieskie z grudnia 1991 r. stwierdzało, że ZSRR przestaje istnieć."
  },
  {
    "id": "R04_ZSR_06",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "riddle",
    "prompt": "Jak nazywała się organizacja powołana w miejsce ZSRR na mocy porozumienia białowieskiego?",
    "options": null,
    "answer": "Wspólnota Niepodległych Państw",
    "altAnswers": [
      "Wspólnota Niepodległych Państw",
      "WNP"
    ],
    "explanation": "Przywódcy Białorusi, Ukrainy i Rosji uzgodnili, że w miejsce ZSRR powstanie Wspólnota Niepodległych Państw."
  },
  {
    "id": "R04_ZSR_07",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do przemian Jesieni Narodów: aksamitna rewolucja, trójkątny stół, obalenie Nicolae Ceaușescu, Wielki Skok Naprzód.",
    "options": null,
    "answer": "Wielki Skok Naprzód",
    "explanation": "Wielki Skok Naprzód dotyczył komunistycznych Chin. Pozostałe elementy wiążą się z przemianami w państwach bloku sowieckiego w latach 1989-1990."
  },
  {
    "id": "R04_ZSR_08",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "scenario",
    "prompt": "Jest wieczór 9 listopada 1989 r. Rzecznik władz NRD informuje o otwarciu granicy z RFN. Tysiące ludzi ruszają do przejść granicznych. Co zaczynają kruszyć mieszkańcy Berlina?",
    "options": [
      "Mur berliński",
      "Bramę Brandenburską",
      "Reichstag",
      "Pałac Republiki"
    ],
    "answer": 0,
    "explanation": "Po otwarciu granicy mieszkańcy Berlina zaczęli kruszyć mur berliński. W 1990 r. mur został rozebrany."
  },
  {
    "id": "R04_ZSR_09",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "match",
    "prompt": "Połącz państwo lub obszar z charakterystycznym wydarzeniem przemian 1989-1990.",
    "options": null,
    "left": [
      "Węgry",
      "Czechosłowacja",
      "Rumunia",
      "NRD"
    ],
    "right": [
      "trójkątny stół",
      "aksamitna rewolucja",
      "krwawe walki i obalenie dyktatora",
      "otwarcie granicy z RFN"
    ],
    "answer": {
      "Węgry": "trójkątny stół",
      "Czechosłowacja": "aksamitna rewolucja",
      "Rumunia": "krwawe walki i obalenie dyktatora",
      "NRD": "otwarcie granicy z RFN"
    },
    "explanation": "Przemiany miały różny przebieg: na Węgrzech negocjowano przy trójkątnym stole, w Czechosłowacji doszło do pokojowej aksamitnej rewolucji, w Rumunii do walk, a w NRD otwarto granicę z RFN.",
    "image": "r04_mur_berlinski.jpg"
  },
  {
    "id": "R04_ZSR_10",
    "section": "Rozpad ZSRR i Jesień Narodów",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Zjednoczenie Niemiec",
      "Porozumienie białowieskie",
      "Rozmowy Okrągłego Stołu w Polsce",
      "Niepodległość Litwy",
      "Otwarcie granicy NRD z RFN"
    ],
    "answer": [
      "Rozmowy Okrągłego Stołu w Polsce",
      "Otwarcie granicy NRD z RFN",
      "Niepodległość Litwy",
      "Zjednoczenie Niemiec",
      "Porozumienie białowieskie"
    ],
    "explanation": "Okrągły Stół odbył się w 1989 r., granicę NRD otwarto 9 listopada 1989 r., Litwa ogłosiła niepodległość w 1990 r., Niemcy zjednoczyły się w październiku 1990 r., a porozumienie białowieskie zawarto w grudniu 1991 r."
  },
  {
    "id": "R04_CHI_01",
    "section": "Chiny mocarstwem",
    "type": "single_choice",
    "prompt": "Który przywódca rozpoczął reformy, które po 1978 r. przekształcały gospodarkę Chin?",
    "options": [
      "Deng Xiaoping",
      "Mao Zedong",
      "Michaił Gorbaczow",
      "Nicolae Ceaușescu",
      "Saddam Husajn",
      "Vaclav Havel"
    ],
    "answer": 0,
    "explanation": "Po śmierci Mao Zedonga najważniejszym przywódcą reform stał się Deng Xiaoping. Jego reformy stopniowo otwierały gospodarkę na mechanizmy rynkowe i kapitał zagraniczny.",
    "image": "r04_szanghaj_panorama.jpg"
  },
  {
    "id": "R04_CHI_02",
    "section": "Chiny mocarstwem",
    "type": "single_choice",
    "prompt": "Jak określano model gospodarczy rozwijany w Chinach po wznowieniu reform w 1992 r.?",
    "options": [
      "Socjalistyczna gospodarka rynkowa",
      "Gospodarka nakazowa bez prywatnej własności",
      "Feudalizm państwowy",
      "Liberalizm bez partii komunistycznej",
      "Gospodarka wojenna",
      "Autarkia"
    ],
    "answer": 0,
    "explanation": "Od 1992 r. reformy miały prowadzić do socjalistycznej gospodarki rynkowej, łączącej polityczną dominację partii komunistycznej z szerokim wykorzystaniem rynku."
  },
  {
    "id": "R04_CHI_03",
    "section": "Chiny mocarstwem",
    "type": "multi_select",
    "prompt": "Zaznacz działania należące do reform Deng Xiaopinga.",
    "options": [
      "Rozwiązanie komun ludowych",
      "Przywrócenie rodzinnych gospodarstw",
      "Zezwolenie na prywatne sklepy i warsztaty",
      "Stworzenie korzystnych warunków dla zagranicznych inwestorów",
      "Całkowite zamknięcie Chin na świat",
      "Zakaz sprzedaży nadwyżek żywności"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Reformy obejmowały rozwiązanie komun ludowych, odbudowę rodzinnych gospodarstw, dopuszczenie prywatnej działalności oraz zachęcanie zagranicznych inwestorów."
  },
  {
    "id": "R04_CHI_04",
    "section": "Chiny mocarstwem",
    "type": "true_false",
    "prompt": "Reformy gospodarcze w Chinach doprowadziły do wprowadzenia systemu wielopartyjnego i zakończenia rządów partii komunistycznej.",
    "options": null,
    "answer": false,
    "explanation": "Chiny połączyły szeroką wolność gospodarczą z politycznym monopolem partii komunistycznej. Inne organizacje polityczne pozostały nielegalne."
  },
  {
    "id": "R04_CHI_05",
    "section": "Chiny mocarstwem",
    "type": "fill_in",
    "prompt": "W kwietniu 1989 r. studenci zajęli Plac __________ w __________.",
    "options": null,
    "answer": [
      "Tiananmen",
      "Pekinie"
    ],
    "altAnswers": [
      [
        "Tiananmen",
        "Plac Tiananmen"
      ],
      [
        "Pekinie",
        "Pekin"
      ]
    ],
    "explanation": "Studenci rozpoczęli protest na Placu Tiananmen w Pekinie. W kolejnych tygodniach do manifestacji dołączali mieszkańcy miasta."
  },
  {
    "id": "R04_CHI_06",
    "section": "Chiny mocarstwem",
    "type": "riddle",
    "prompt": "Nazwisko chińskiego przywódcy, który kierował reformami w latach 1978-1989, to...",
    "options": null,
    "answer": "Deng Xiaoping",
    "altAnswers": [
      "Deng Xiaoping",
      "Deng"
    ],
    "explanation": "Deng Xiaoping przeprowadził reformy społeczno-gospodarcze i otworzył Chiny na świat."
  },
  {
    "id": "R04_CHI_07",
    "section": "Chiny mocarstwem",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do problemów współczesnych Chin: rozwarstwienie ekonomiczne, brak swobód obywatelskich, katastrofa ekologiczna, pełna integracja mniejszości narodowych.",
    "options": null,
    "answer": "pełna integracja mniejszości narodowych",
    "explanation": "Trudności z integracją mniejszości narodowych są jednym z problemów Chin. Pełna integracja jest przeciwieństwem tego problemu."
  },
  {
    "id": "R04_CHI_08",
    "section": "Chiny mocarstwem",
    "type": "scenario",
    "prompt": "W maju 1989 r. reporter obserwuje w Pekinie pokojowe manifestacje studentów domagających się swobód demokratycznych. Co stało się z protestem w nocy z 3 na 4 czerwca?",
    "options": [
      "Został krwawo stłumiony przez wojsko",
      "Zakończył się natychmiastowym wprowadzeniem wolnych wyborów",
      "Doprowadził do obalenia partii komunistycznej",
      "Przeniósł się do Hongkongu i tam trwał bez przerwy"
    ],
    "answer": 0,
    "explanation": "W nocy z 3 na 4 czerwca 1989 r. wojsko stłumiło protest na Placu Tiananmen. Po wydarzeniach nastąpiły aresztowania i sankcje zagraniczne.",
    "image": "r04_tiananmen_protest.jpg"
  },
  {
    "id": "R04_CHI_09",
    "section": "Chiny mocarstwem",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do kategorii: reformy Deng Xiaopinga albo problemy Chin.",
    "options": null,
    "items": [
      "rodzinne gospodarstwa rolne",
      "prywatne sklepy i warsztaty",
      "zagraniczne inwestycje",
      "rozwarstwienie ekonomiczne",
      "brak swobód obywatelskich",
      "katastrofa ekologiczna"
    ],
    "categories": [
      "reformy",
      "problemy"
    ],
    "answer": {
      "reformy": [
        "rodzinne gospodarstwa rolne",
        "prywatne sklepy i warsztaty",
        "zagraniczne inwestycje"
      ],
      "problemy": [
        "rozwarstwienie ekonomiczne",
        "brak swobód obywatelskich",
        "katastrofa ekologiczna"
      ]
    },
    "explanation": "Reformy zwiększały rolę rynku i prywatnej inicjatywy. Jednocześnie Chiny zmagały się m.in. z nierównościami, brakiem swobód obywatelskich i problemami środowiskowymi."
  },
  {
    "id": "R04_CHI_10",
    "section": "Chiny mocarstwem",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące Chin w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Masakra na Placu Tiananmen",
      "Śmierć Mao Zedonga",
      "Wznowienie reform w kierunku socjalistycznej gospodarki rynkowej",
      "Początek reform Deng Xiaopinga",
      "Chiny drugą gospodarką świata"
    ],
    "answer": [
      "Śmierć Mao Zedonga",
      "Początek reform Deng Xiaopinga",
      "Masakra na Placu Tiananmen",
      "Wznowienie reform w kierunku socjalistycznej gospodarki rynkowej",
      "Chiny drugą gospodarką świata"
    ],
    "explanation": "Mao zmarł w 1976 r., reformy Deng Xiaopinga rozpoczęły się po 1978 r., protest na Tiananmen stłumiono w 1989 r., dalsze reformy ruszyły w 1992 r., a od 2010 r. gospodarka Chin była drugą na świecie."
  },
  {
    "id": "R04_BLI_01",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "single_choice",
    "prompt": "Która organizacja przygotowała zamachy z 11 września 2001 r. na terytorium USA?",
    "options": [
      "Al-Kaida",
      "NATO",
      "OWP",
      "Unia Europejska",
      "RWPG",
      "Euratom"
    ],
    "answer": 0,
    "explanation": "Al-Kaida kierowana przez Osamę bin Ladena przygotowała samobójcze zamachy na wieże WTC w Nowym Jorku i Pentagon pod Waszyngtonem.",
    "image": "r04_wtc_now_jork.jpg"
  },
  {
    "id": "R04_BLI_02",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "single_choice",
    "prompt": "Co bezpośrednio wywołało pierwszą wojnę w Zatoce Perskiej w latach 1990-1991?",
    "options": [
      "Zajęcie Kuwejtu przez Irak",
      "Atak na WTC",
      "Powstanie Autonomii Palestyńskiej",
      "Wycofanie wojsk z Afganistanu",
      "Rozpad Jugosławii",
      "Podpisanie traktatu z Maastricht"
    ],
    "answer": 0,
    "explanation": "Saddam Husajn w 1990 r. zajął Kuwejt. Koalicja z udziałem USA, państw zachodnich i części państw arabskich rozbiła armię iracką i wyzwoliła Kuwejt."
  },
  {
    "id": "R04_BLI_03",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "multi_select",
    "prompt": "Zaznacz poglądy wiązane z islamizmem lub fundamentalizmem islamskim.",
    "options": [
      "Islam jest zarazem religią i systemem politycznym",
      "Należy odbudować kalifat",
      "Należy żyć ściśle według wskazań Koranu",
      "Dżihad może być elementem programu",
      "Religia powinna być całkowicie oddzielona od polityki",
      "Państwo powinno odrzucić islam"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Islamizm łączy religię i politykę oraz może obejmować postulaty odbudowy kalifatu, życia według Koranu i prowadzenia dżihadu."
  },
  {
    "id": "R04_BLI_04",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "true_false",
    "prompt": "Wojna w Afganistanie rozpoczęta w 2001 r. zakończyła się wycofaniem wojsk sojuszniczych i ponownym przejęciem władzy przez talibów.",
    "options": null,
    "answer": true,
    "explanation": "Po szybkim opanowaniu Afganistanu talibowie rozpoczęli długą wojnę partyzancką. Konflikt zakończył się wycofaniem wojsk sojuszniczych i powrotem talibów do władzy."
  },
  {
    "id": "R04_BLI_05",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "fill_in",
    "prompt": "Pierwsza intifada trwała w latach __________-__________.",
    "options": null,
    "answer": [
      "1987",
      "1991"
    ],
    "altAnswers": [
      [
        "1987",
        "1987 r."
      ],
      [
        "1991",
        "1991 r."
      ]
    ],
    "explanation": "Pierwsza intifada była antyizraelskim powstaniem Palestyńczyków trwającym od 1987 do 1991 r."
  },
  {
    "id": "R04_BLI_06",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "riddle",
    "prompt": "Jak nazywała się jednostka polityczna utworzona w 1994 r. jako zalążek palestyńskiego państwa?",
    "options": null,
    "answer": "Autonomia Palestyńska",
    "altAnswers": [
      "Autonomia Palestyńska",
      "Autonomia Palestynska"
    ],
    "explanation": "Autonomia Palestyńska powstała w 1994 r. na podstawie porozumienia OWP z Izraelem z 1993 r."
  },
  {
    "id": "R04_BLI_07",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do tematyki konfliktów Bliskiego Wschodu: Al-Kaida, talibowie, OWP, Euratom.",
    "options": null,
    "answer": "Euratom",
    "explanation": "Euratom jest wspólnotą europejską związaną z energią atomową. Al-Kaida, talibowie i OWP występują w kontekście konfliktów Bliskiego Wschodu."
  },
  {
    "id": "R04_BLI_08",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "scenario",
    "prompt": "W 1990 r. armia Saddama Husajna zajmuje Kuwejt. W odpowiedzi powstaje koalicja z udziałem USA, państw zachodnich i części państw arabskich. Jak nazywa się konflikt, który następuje?",
    "options": [
      "Pierwsza wojna w Zatoce Perskiej",
      "Druga intifada",
      "Wojna w byłej Jugosławii",
      "Aksamitna rewolucja"
    ],
    "answer": 0,
    "explanation": "Zajęcie Kuwejtu przez Irak doprowadziło do pierwszej wojny w Zatoce Perskiej w latach 1990-1991."
  },
  {
    "id": "R04_BLI_09",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą lub okresem.",
    "options": null,
    "left": [
      "Zamachy na WTC i Pentagon",
      "Powstanie Autonomii Palestyńskiej",
      "Początek wojny w Iraku",
      "Druga intifada"
    ],
    "right": [
      "11 września 2001 r.",
      "1994 r.",
      "2003 r.",
      "2000-2005"
    ],
    "answer": {
      "Zamachy na WTC i Pentagon": "11 września 2001 r.",
      "Powstanie Autonomii Palestyńskiej": "1994 r.",
      "Początek wojny w Iraku": "2003 r.",
      "Druga intifada": "2000-2005"
    },
    "explanation": "Zamachy nastąpiły 11 września 2001 r., Autonomia Palestyńska powstała w 1994 r., wojna w Iraku zaczęła się w 2003 r., a druga intifada trwała w latach 2000-2005."
  },
  {
    "id": "R04_BLI_10",
    "section": "Bliski Wschód na przełomie XX i XXI w.",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do kategorii: konflikty zbrojne i powstania albo porozumienia i instytucje.",
    "options": null,
    "items": [
      "pierwsza intifada",
      "wojna w Afganistanie",
      "wojna w Iraku",
      "porozumienie OWP z Izraelem z 1993 r.",
      "Autonomia Palestyńska"
    ],
    "categories": [
      "konflikty",
      "porozumienia i instytucje"
    ],
    "answer": {
      "konflikty": [
        "pierwsza intifada",
        "wojna w Afganistanie",
        "wojna w Iraku"
      ],
      "porozumienia i instytucje": [
        "porozumienie OWP z Izraelem z 1993 r.",
        "Autonomia Palestyńska"
      ]
    },
    "explanation": "Intifada oraz wojny w Afganistanie i Iraku były konfliktami zbrojnymi. Porozumienie OWP z Izraelem doprowadziło do powstania Autonomii Palestyńskiej."
  },
  {
    "id": "R04_EUR_01",
    "section": "Integracja europejska",
    "type": "single_choice",
    "prompt": "Która wspólnota rozpoczęła działalność w 1952 r. jako pierwszy etap integracji europejskiej?",
    "options": [
      "Europejska Wspólnota Węgla i Stali",
      "Unia Europejska",
      "Euratom",
      "Wspólnota Niepodległych Państw",
      "RWPG",
      "NATO"
    ],
    "answer": 0,
    "explanation": "W 1952 r. rozpoczęła działalność Europejska Wspólnota Węgla i Stali, czyli EWWiS."
  },
  {
    "id": "R04_EUR_02",
    "section": "Integracja europejska",
    "type": "single_choice",
    "prompt": "Który traktat przewidywał utworzenie Unii Europejskiej i wprowadzenie obywatelstwa Unii?",
    "options": [
      "Traktat z Maastricht",
      "Traktat wersalski",
      "Układ Warszawski",
      "Porozumienie białowieskie",
      "Układy rzymskie z 1957 r. wyłącznie o EWWiS",
      "Karta 77"
    ],
    "answer": 0,
    "explanation": "Traktat o Unii Europejskiej, podpisany w Maastricht w 1992 r., przewidywał m.in. utworzenie UE i obywatelstwa Unii."
  },
  {
    "id": "R04_EUR_03",
    "section": "Integracja europejska",
    "type": "multi_select",
    "prompt": "Zaznacz motywy integracji europejskiej po II wojnie światowej.",
    "options": [
      "Przekonanie, że podział na państwa narodowe prowadzi do konfliktów",
      "Obawa, że podzielona Europa Zachodnia ulegnie ZSRR",
      "Nadzieja, że integracja gospodarcza ograniczy ryzyko wojny",
      "Przekonanie o istnieniu wspólnych europejskich wartości",
      "Dążenie do odbudowy kolonialnych imperiów",
      "Chęć likwidacji handlu między państwami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Integrację uzasadniano potrzebą pokoju, bezpieczeństwa wobec ZSRR, rozwoju gospodarczego oraz wspólnotą europejskich wartości."
  },
  {
    "id": "R04_EUR_04",
    "section": "Integracja europejska",
    "type": "true_false",
    "prompt": "Traktat z Maastricht wszedł w życie 1 listopada 1993 r. i od tej daty istnieje Unia Europejska.",
    "options": null,
    "answer": true,
    "explanation": "Traktat z Maastricht wszedł w życie 1 listopada 1993 r.; od tego dnia funkcjonuje Unia Europejska."
  },
  {
    "id": "R04_EUR_05",
    "section": "Integracja europejska",
    "type": "fill_in",
    "prompt": "Traktaty rzymskie z 1957 r. powołały Europejską Wspólnotę Gospodarczą oraz __________.",
    "options": null,
    "answer": [
      "Euratom"
    ],
    "altAnswers": [
      [
        "Euratom",
        "Europejską Wspólnotę Energii Atomowej",
        "Europejska Wspólnota Energii Atomowej"
      ]
    ],
    "explanation": "Traktaty rzymskie utworzyły EWG oraz Europejską Wspólnotę Energii Atomowej, czyli Euratom."
  },
  {
    "id": "R04_EUR_06",
    "section": "Integracja europejska",
    "type": "riddle",
    "prompt": "Jak nazywa się miasto, od którego pochodzi potoczna nazwa traktatu o Unii Europejskiej podpisanego w 1992 r.?",
    "options": null,
    "answer": "Maastricht",
    "altAnswers": [
      "Maastricht"
    ],
    "explanation": "Traktat o Unii Europejskiej podpisano w Maastricht w Holandii, stąd nazwa traktat z Maastricht."
  },
  {
    "id": "R04_EUR_07",
    "section": "Integracja europejska",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do etapów integracji zachodnioeuropejskiej: EWWiS, EWG, Euratom, RWPG.",
    "options": null,
    "answer": "RWPG",
    "explanation": "RWPG była organizacją państw bloku sowieckiego. EWWiS, EWG i Euratom należały do procesu integracji Europy Zachodniej."
  },
  {
    "id": "R04_EUR_08",
    "section": "Integracja europejska",
    "type": "scenario",
    "prompt": "Państwo postkomunistyczne stara się po 1989 r. o członkostwo w Unii Europejskiej. Który zestaw wymagań odpowiada warunkom stawianym kandydatom?",
    "options": [
      "Demokratyczne państwo prawa, prawa człowieka, gospodarka rynkowa i respektowanie prawa unijnego",
      "Jednopartyjny system, cenzura i gospodarka nakazowa",
      "Rezygnacja z wyborów i pełna autarkia gospodarcza",
      "Obowiązek przywrócenia monarchii"
    ],
    "answer": 0,
    "explanation": "Nowe państwa miały stać się demokratycznymi państwami prawa, przestrzegać praw człowieka, wprowadzić gospodarkę rynkową i respektować prawa oraz postanowienia unijne.",
    "image": "r04_parlament_europejski.jpg"
  },
  {
    "id": "R04_EUR_09",
    "section": "Integracja europejska",
    "type": "match",
    "prompt": "Połącz rok rozszerzenia integracji europejskiej z grupą państw.",
    "options": null,
    "left": [
      "1973",
      "1981",
      "1986",
      "2004"
    ],
    "right": [
      "Wielka Brytania, Dania i Irlandia",
      "Grecja",
      "Hiszpania i Portugalia",
      "Polska, Czechy, Słowacja i inne państwa Europy Środkowej oraz Malta i Cypr"
    ],
    "answer": {
      "1973": "Wielka Brytania, Dania i Irlandia",
      "1981": "Grecja",
      "1986": "Hiszpania i Portugalia",
      "2004": "Polska, Czechy, Słowacja i inne państwa Europy Środkowej oraz Malta i Cypr"
    },
    "explanation": "Kolejne rozszerzenia obejmowały Wielką Brytanię, Danię i Irlandię w 1973 r., Grecję w 1981 r., Hiszpanię i Portugalię w 1986 r. oraz dziesięć nowych państw w 2004 r."
  },
  {
    "id": "R04_EUR_10",
    "section": "Integracja europejska",
    "type": "sequence",
    "prompt": "Ułóż etapy integracji europejskiej od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Traktat z Maastricht",
      "Powstanie EWWiS",
      "Rozszerzenie UE na Wschód",
      "Powstanie EWG i Euratomu",
      "Połączenie wspólnot we Wspólnotę Europejską"
    ],
    "answer": [
      "Powstanie EWWiS",
      "Powstanie EWG i Euratomu",
      "Połączenie wspólnot we Wspólnotę Europejską",
      "Traktat z Maastricht",
      "Rozszerzenie UE na Wschód"
    ],
    "explanation": "EWWiS rozpoczęła działalność w 1952 r., traktaty rzymskie powołały EWG i Euratom w 1957 r., wspólnoty połączono w 1967 r., traktat z Maastricht podpisano w 1992 r., a wielkie rozszerzenie na Wschód nastąpiło w 2004 r."
  },
  {
    "id": "R04_GLO_01",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "single_choice",
    "prompt": "Jak inaczej nazywa się rewolucję naukowo-technologiczną rozpoczętą po 1945 r.?",
    "options": [
      "Trzecia rewolucja przemysłowa",
      "Jesień Narodów",
      "Pierestrojka",
      "Rewolucja neolityczna",
      "Aksamitna rewolucja",
      "Wielki Skok Naprzód"
    ],
    "answer": 0,
    "explanation": "Rewolucja naukowo-technologiczna po 1945 r. jest nazywana trzecią rewolucją przemysłową.",
    "image": "r04_laboratorium_komputery.jpg"
  },
  {
    "id": "R04_GLO_02",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "single_choice",
    "prompt": "Która definicja najlepiej opisuje globalizację?",
    "options": [
      "Rosnąca współzależność państw, społeczeństw, gospodarek i kultur świata",
      "Całkowite odizolowanie gospodarek narodowych",
      "Wyłącznie rozwój przemysłu ciężkiego",
      "Zanik transportu międzynarodowego",
      "Powrót do gospodarki naturalnej",
      "Likwidacja organizacji ponadnarodowych"
    ],
    "answer": 0,
    "explanation": "Globalizacja to rosnąca współzależność państw, społeczeństw, systemów gospodarczych i kultur całego świata."
  },
  {
    "id": "R04_GLO_03",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany charakterystyczne dla rewolucji naukowo-technologicznej.",
    "options": [
      "Powszechna komputeryzacja",
      "Automatyzacja produkcji",
      "Internet i telefony komórkowe",
      "Nowe źródła energii",
      "Nowe materiały i technologie żywności",
      "Całkowite zniknięcie usług"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rewolucja naukowo-technologiczna przyniosła komputeryzację, automatyzację, nowe środki łączności, źródła energii, materiały i technologie produkcji żywności."
  },
  {
    "id": "R04_GLO_04",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "true_false",
    "prompt": "Globalizacja polityczna wiąże się ze spadkiem znaczenia państw narodowych i przejmowaniem części ich funkcji przez organizacje ponadnarodowe.",
    "options": null,
    "answer": true,
    "explanation": "W globalizacji politycznej część funkcji państw narodowych przejmują organizacje ponadnarodowe, takie jak ONZ czy Unia Europejska."
  },
  {
    "id": "R04_GLO_05",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "fill_in",
    "prompt": "Globalizacja kulturowa może prowadzić do __________ kultury oraz do __________.",
    "options": null,
    "answer": [
      "homogenizacji",
      "wielokulturowości"
    ],
    "altAnswers": [
      [
        "homogenizacji",
        "ujednolicenia",
        "ujednolicenia kultury"
      ],
      [
        "wielokulturowości",
        "wielokulturowosci"
      ]
    ],
    "explanation": "Globalizacja kulturowa może ujednolicać kulturę, ale jednocześnie sprzyja współistnieniu i przenikaniu się różnych kultur."
  },
  {
    "id": "R04_GLO_06",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "riddle",
    "prompt": "Jak nazywa się społeczeństwo, które w pracy i życiu codziennym stale posługuje się technologiami informacji i łączności?",
    "options": null,
    "answer": "społeczeństwo informacyjne",
    "altAnswers": [
      "społeczeństwo informacyjne",
      "spoleczenstwo informacyjne"
    ],
    "explanation": "Jednym ze skutków rewolucji naukowo-technologicznej było powstanie społeczeństwa informacyjnego."
  },
  {
    "id": "R04_GLO_07",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do skutków rewolucji naukowo-technologicznej: stres, choroby cywilizacyjne, kryzys autorytetów, skrócenie średniej długości życia.",
    "options": null,
    "answer": "skrócenie średniej długości życia",
    "explanation": "Do skutków rewolucji naukowo-technologicznej należały wydłużenie ludzkiego życia i wzrost jego standardu, a nie skrócenie średniej długości życia."
  },
  {
    "id": "R04_GLO_08",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "scenario",
    "prompt": "Komputer zostaje zaprojektowany w USA, zmontowany w Chinach i sprzedany w Europie. Który wymiar globalizacji najlepiej opisuje ten przykład?",
    "options": [
      "Globalizacja ekonomiczna",
      "Globalizacja wyłącznie religijna",
      "Izolacjonizm gospodarczy",
      "Dekolonizacja"
    ],
    "answer": 0,
    "explanation": "Międzynarodowy przepływ dóbr, usług, technologii i kapitału jest podstawą globalizacji ekonomicznej."
  },
  {
    "id": "R04_GLO_09",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do trzech wymiarów globalizacji.",
    "options": null,
    "items": [
      "międzynarodowy przepływ kapitału",
      "globalny rynek",
      "rosnąca rola ONZ i UE",
      "organizacje ponadnarodowe",
      "te same treści kultury masowej w wielu krajach",
      "wielokulturowe społeczeństwa"
    ],
    "categories": [
      "ekonomiczna",
      "polityczna",
      "kulturowa"
    ],
    "answer": {
      "ekonomiczna": [
        "międzynarodowy przepływ kapitału",
        "globalny rynek"
      ],
      "polityczna": [
        "rosnąca rola ONZ i UE",
        "organizacje ponadnarodowe"
      ],
      "kulturowa": [
        "te same treści kultury masowej w wielu krajach",
        "wielokulturowe społeczeństwa"
      ]
    },
    "explanation": "Globalizacja ekonomiczna dotyczy gospodarki i kapitału, polityczna - roli organizacji ponadnarodowych, a kulturowa - zacierania różnic i wielokulturowości."
  },
  {
    "id": "R04_GLO_10",
    "section": "Dzisiejszy świat i globalizacja",
    "type": "sequence",
    "prompt": "Ułóż przemiany świata od najwcześniejszej do najpóźniejszej.",
    "options": null,
    "items": [
      "Chiny stają się drugą gospodarką świata",
      "Rozpad ZSRR i początek świata jednobiegunowego",
      "Początek rewolucji naukowo-technologicznej",
      "Narastanie świata wielobiegunowego w początkach XXI w."
    ],
    "answer": [
      "Początek rewolucji naukowo-technologicznej",
      "Rozpad ZSRR i początek świata jednobiegunowego",
      "Narastanie świata wielobiegunowego w początkach XXI w.",
      "Chiny stają się drugą gospodarką świata"
    ],
    "explanation": "Rewolucja naukowo-technologiczna zaczęła się po 1945 r., rozpad ZSRR nastąpił w 1991 r., wielobiegunowość narastała od początków XXI w., a od 2010 r. Chiny były drugą gospodarką świata."
  },
  {
    "id": "R04_POL_01",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "single_choice",
    "prompt": "W którym roku Polska przystąpiła do NATO?",
    "options": [
      "1999",
      "1991",
      "1993",
      "1997",
      "2001",
      "2004"
    ],
    "answer": 0,
    "explanation": "Polska wraz z Czechami i Węgrami przystąpiła do NATO w 1999 r.",
    "image": "r04_flagi_nato_polska.jpg"
  },
  {
    "id": "R04_POL_02",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "single_choice",
    "prompt": "W którym roku Polska wstąpiła do Unii Europejskiej?",
    "options": [
      "2004",
      "1994",
      "1997",
      "1999",
      "2007",
      "2010"
    ],
    "answer": 0,
    "explanation": "Polska przystąpiła do Unii Europejskiej w 2004 r. wraz z dziewięcioma innymi państwami."
  },
  {
    "id": "R04_POL_03",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "multi_select",
    "prompt": "Zaznacz elementy planu Balcerowicza.",
    "options": [
      "Uwolnienie cen",
      "Zamrożenie płac w przedsiębiorstwach państwowych",
      "Zmniejszenie wydatków państwa",
      "Zgoda na zakładanie prywatnych firm",
      "Wymienialność złotówki na dolara",
      "Zakaz prywatnej działalności gospodarczej"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Plan obejmował uwolnienie cen, ograniczenie płac i wydatków państwa, rozwój prywatnej przedsiębiorczości oraz wymienialność złotówki na dolara."
  },
  {
    "id": "R04_POL_04",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "true_false",
    "prompt": "Konstytucja Rzeczypospolitej Polskiej z 1997 r. wprowadziła trójpodział władzy.",
    "options": null,
    "answer": true,
    "explanation": "Konstytucja z 1997 r. rozdzieliła władzę ustawodawczą, wykonawczą i sądowniczą."
  },
  {
    "id": "R04_POL_05",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "fill_in",
    "prompt": "Ostatni oddział Armii Radzieckiej wyjechał z Polski w __________ r., a Polska złożyła wniosek o członkostwo w UE w __________ r.",
    "options": null,
    "answer": [
      "1993",
      "1994"
    ],
    "altAnswers": [
      [
        "1993",
        "1993 r."
      ],
      [
        "1994",
        "1994 r."
      ]
    ],
    "explanation": "Ostatni oddział Armii Radzieckiej opuścił Polskę w 1993 r. Rok później Polska złożyła wniosek o członkostwo w Unii Europejskiej."
  },
  {
    "id": "R04_POL_06",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "riddle",
    "prompt": "Jak nazywał się program reform gospodarczych, który wszedł w życie 1 stycznia 1990 r.?",
    "options": null,
    "answer": "plan Balcerowicza",
    "altAnswers": [
      "plan Balcerowicza",
      "Plan Balcerowicza",
      "Balcerowicz"
    ],
    "explanation": "Program przygotowany przez Leszka Balcerowicza miał zahamować hiperinflację, zrównoważyć budżet i poprawić zaopatrzenie."
  },
  {
    "id": "R04_POL_07",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do pozytywnych skutków planu Balcerowicza: spadek inflacji, poprawa zaopatrzenia, polepszenie sytuacji finansowej państwa, wzrost bezrobocia.",
    "options": null,
    "answer": "wzrost bezrobocia",
    "explanation": "Bezrobocie należało do społecznych kosztów reform. Do pozytywnych skutków zaliczono spadek inflacji, lepsze zaopatrzenie i poprawę finansów państwa."
  },
  {
    "id": "R04_POL_08",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "scenario",
    "prompt": "Po wyborach z 1991 r. w sejmie znaleźli się posłowie z 29 ugrupowań, co utrudniało tworzenie stabilnych większości. Jakie rozwiązanie wprowadzono przed wyborami w 1993 r.?",
    "options": [
      "Progi wyborcze",
      "Likwidację sejmu",
      "Zakaz tworzenia partii",
      "Jednomandatowe wybory prezydenckie do sejmu"
    ],
    "answer": 0,
    "explanation": "Przed wyborami w 1993 r. wprowadzono progi wyborcze, aby ograniczyć rozdrobnienie parlamentu."
  },
  {
    "id": "R04_POL_09",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "match",
    "prompt": "Połącz rodzaj władzy z odpowiednimi organami państwa.",
    "options": null,
    "left": [
      "władza ustawodawcza",
      "władza wykonawcza",
      "władza sądownicza"
    ],
    "right": [
      "sejm i senat",
      "prezydent i rząd",
      "sądy i trybunały"
    ],
    "answer": {
      "władza ustawodawcza": "sejm i senat",
      "władza wykonawcza": "prezydent i rząd",
      "władza sądownicza": "sądy i trybunały"
    },
    "explanation": "Konstytucja z 1997 r. przypisała władzę ustawodawczą sejmowi i senatowi, wykonawczą prezydentowi i rządowi, a sądowniczą sądom i trybunałom."
  },
  {
    "id": "R04_POL_10",
    "section": "Polska w NATO i Unii Europejskiej",
    "type": "sort",
    "prompt": "Przyporządkuj skutki planu Balcerowicza do kategorii pozytywne albo negatywne.",
    "options": null,
    "items": [
      "spadek inflacji",
      "poprawa zaopatrzenia",
      "poprawa sytuacji finansowej państwa",
      "bezrobocie",
      "spadek realnych dochodów",
      "napięcia społeczne"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "spadek inflacji",
        "poprawa zaopatrzenia",
        "poprawa sytuacji finansowej państwa"
      ],
      "negatywne": [
        "bezrobocie",
        "spadek realnych dochodów",
        "napięcia społeczne"
      ]
    },
    "explanation": "Reformy ograniczyły inflację i poprawiły zaopatrzenie oraz finanse państwa, ale przyniosły też bezrobocie, spadek realnych dochodów i napięcia społeczne."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co wydarzyło się 25 grudnia 1991 r.?",
    "options": [
      "Michaił Gorbaczow ustąpił ze stanowiska prezydenta ZSRR",
      "Litwa po raz pierwszy ogłosiła niepodległość",
      "Niemcy zostały zjednoczone",
      "Polska przystąpiła do NATO",
      "Rozpoczęła się pierwsza intifada",
      "Podpisano traktaty rzymskie"
    ],
    "answer": 0,
    "explanation": "25 grudnia 1991 r. Michaił Gorbaczow ustąpił ze stanowiska prezydenta ZSRR, a na Kremlu opuszczono czerwoną flagę z sierpem i młotem."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek głosów uzyskali komuniści w pierwszych całkowicie wolnych wyborach na Węgrzech w 1990 r.?",
    "options": [
      "8,5%",
      "16%",
      "23%",
      "43%",
      "53%",
      "76%"
    ],
    "answer": 0,
    "explanation": "W pierwszych całkowicie wolnych wyborach na Węgrzech opozycja zdecydowanie zwyciężyła, a komuniści uzyskali tylko 8,5% głosów."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około ilu ludzi uczestniczyło w manifestacji Forum Obywatelskiego w Pradze 25 listopada 1989 r.?",
    "options": [
      "800 tysięcy",
      "80 tysięcy",
      "8 tysięcy",
      "2 miliony",
      "20 tysięcy",
      "1100"
    ],
    "answer": 0,
    "explanation": "W manifestacji zorganizowanej 25 listopada 1989 r. w Pradze przez Forum Obywatelskie uczestniczyło około 800 tysięcy ludzi."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek obywateli NRD miała rzekomo popierać partia komunistyczna według propagandy państwowej?",
    "options": [
      "99%",
      "75%",
      "53%",
      "43%",
      "16%",
      "8,5%"
    ],
    "answer": 0,
    "explanation": "Propaganda NRD twierdziła, że partię komunistyczną popiera 99% obywateli, choć rzeczywistość przeczyła temu obrazowi."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz cztery mocarstwa uczestniczące obok RFN i NRD w konferencji dwa plus cztery w 1990 r.",
    "options": [
      "ZSRR",
      "USA",
      "Wielka Brytania",
      "Francja",
      "Polska",
      "Włochy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W konferencji dwa plus cztery uczestniczyły RFN i NRD oraz cztery mocarstwa: ZSRR, USA, Wielka Brytania i Francja."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, które przystąpiły do Unii Europejskiej w 2004 r.",
    "options": [
      "Polska",
      "Słowenia",
      "Malta",
      "Rumunia",
      "Bułgaria",
      "Chorwacja"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W 2004 r. do UE przystąpiły m.in. Polska, Słowenia i Malta. Rumunia i Bułgaria dołączyły w 2007 r."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W pierwszej wojnie w Zatoce Perskiej przeciwko Irakowi walczyły wojska USA, państw zachodnich i niektórych państw arabskich.",
    "options": null,
    "answer": true,
    "explanation": "Koalicja przeciwko armii Saddama Husajna obejmowała USA, państwa zachodnie oraz część państw arabskich."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po pierwszych w pełni wolnych wyborach parlamentarnych w Polsce w 1991 r. w sejmie znaleźli się posłowie z 29 ugrupowań.",
    "options": null,
    "answer": true,
    "explanation": "W wyborach startowało bardzo wiele komitetów, a w sejmie znaleźli się posłowie z 29 ugrupowań, co spowodowało rozdrobnienie parlamentu."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Traktat z Maastricht wszedł w życie __________, a plan Balcerowicza wszedł w życie __________.",
    "options": null,
    "answer": [
      "1 listopada 1993 r.",
      "1 stycznia 1990 r."
    ],
    "altAnswers": [
      [
        "1 listopada 1993 r.",
        "1 listopada 1993",
        "01.11.1993"
      ],
      [
        "1 stycznia 1990 r.",
        "1 stycznia 1990",
        "01.01.1990"
      ]
    ],
    "explanation": "Unia Europejska istnieje od wejścia w życie traktatu z Maastricht 1 listopada 1993 r. Plan Balcerowicza zaczął obowiązywać 1 stycznia 1990 r."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z wydarzeniem lub procesem, z którym była bezpośrednio związana.",
    "options": null,
    "left": [
      "Vaclav Havel",
      "Helmut Kohl",
      "Leszek Balcerowicz",
      "Osama bin Laden",
      "Deng Xiaoping"
    ],
    "right": [
      "aksamitna rewolucja i prezydentura Czechosłowacji",
      "plan zjednoczenia Niemiec",
      "reformy gospodarcze Polski od 1990 r.",
      "przywódca Al-Kaidy",
      "reformy gospodarcze Chin"
    ],
    "answer": {
      "Vaclav Havel": "aksamitna rewolucja i prezydentura Czechosłowacji",
      "Helmut Kohl": "plan zjednoczenia Niemiec",
      "Leszek Balcerowicz": "reformy gospodarcze Polski od 1990 r.",
      "Osama bin Laden": "przywódca Al-Kaidy",
      "Deng Xiaoping": "reformy gospodarcze Chin"
    },
    "explanation": "Każda z tych postaci była związana z innym procesem: Havel z przemianami w Czechosłowacji, Kohl ze zjednoczeniem Niemiec, Balcerowicz z reformami Polski, bin Laden z Al-Kaidą, a Deng z reformami Chin."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel wydarzenia na te sprzed 2000 r. i te od 2000 r.",
    "options": null,
    "items": [
      "porozumienie białowieskie",
      "traktat z Maastricht wchodzi w życie",
      "Polska wstępuje do NATO",
      "zamachy z 11 września",
      "początek wojny w Iraku",
      "Polska wstępuje do UE"
    ],
    "categories": [
      "przed 2000 r.",
      "od 2000 r."
    ],
    "answer": {
      "przed 2000 r.": [
        "porozumienie białowieskie",
        "traktat z Maastricht wchodzi w życie",
        "Polska wstępuje do NATO"
      ],
      "od 2000 r.": [
        "zamachy z 11 września",
        "początek wojny w Iraku",
        "Polska wstępuje do UE"
      ]
    },
    "explanation": "Porozumienie białowieskie zawarto w 1991 r., traktat z Maastricht wszedł w życie w 1993 r., a Polska weszła do NATO w 1999 r. Pozostałe wydarzenia nastąpiły po 2000 r."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w bardzo dokładnej kolejności chronologicznej.",
    "options": null,
    "items": [
      "Wolne wybory w NRD",
      "Otwarcie granicy NRD z RFN",
      "Plan Balcerowicza wchodzi w życie",
      "Rozmowy Okrągłego Stołu w Polsce",
      "Stłumienie protestu na Placu Tiananmen",
      "Zjednoczenie Niemiec"
    ],
    "answer": [
      "Rozmowy Okrągłego Stołu w Polsce",
      "Stłumienie protestu na Placu Tiananmen",
      "Otwarcie granicy NRD z RFN",
      "Plan Balcerowicza wchodzi w życie",
      "Wolne wybory w NRD",
      "Zjednoczenie Niemiec"
    ],
    "explanation": "Okrągły Stół trwał od lutego do kwietnia 1989 r., Tiananmen stłumiono w nocy z 3 na 4 czerwca 1989 r., granicę NRD otwarto 9 listopada 1989 r., plan Balcerowicza wszedł w życie 1 stycznia 1990 r., wybory w NRD odbyły się w marcu 1990 r., a Niemcy zjednoczyły się 3 października 1990 r."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Świat po 1989 roku",
  icon: "🌍",
  sectionOrder: [
    "Rozpad ZSRR i Jesień Narodów",
    "Chiny mocarstwem",
    "Bliski Wschód na przełomie XX i XXI w.",
    "Integracja europejska",
    "Dzisiejszy świat i globalizacja",
    "Polska w NATO i Unii Europejskiej"
  ],
  sectionIcons: {
    "Rozpad ZSRR i Jesień Narodów": "🕊️",
    "Chiny mocarstwem": "🐉",
    "Bliski Wschód na przełomie XX i XXI w.": "🕌",
    "Integracja europejska": "🇪🇺",
    "Dzisiejszy świat i globalizacja": "🌐",
    "Polska w NATO i Unii Europejskiej": "🇵🇱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
