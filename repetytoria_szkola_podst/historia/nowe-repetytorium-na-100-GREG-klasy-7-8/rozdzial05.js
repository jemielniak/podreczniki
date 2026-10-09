// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ONZ  = ONZ i początki zimnej wojny
//   ZIM  = Konflikty zimnej wojny i supermocarstwa
//   BLOK = Bloki polityczne i Europa komunistyczna
//   DEKO = Dekolonizacja i Trzeci Świat
//   PRZE = Upadek komunizmu i nowy ład w Europie
//   UEK  = Integracja europejska, społeczeństwo i kultura
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_ONZ_01",
    "section": "ONZ i początki zimnej wojny",
    "type": "single_choice",
    "prompt": "Kiedy została założona Organizacja Narodów Zjednoczonych?",
    "options": [
      "26 czerwca 1945 r.",
      "24 października 1945 r.",
      "5 marca 1946 r.",
      "4 kwietnia 1949 r.",
      "14 maja 1955 r.",
      "1 stycznia 1948 r."
    ],
    "image": "r05_flaga_onz.jpg",
    "answer": 1,
    "explanation": "ONZ powstała 24 października 1945 r. w miejsce przedwojennej Ligi Narodów."
  },
  {
    "id": "R05_ONZ_02",
    "section": "ONZ i początki zimnej wojny",
    "type": "multi_select",
    "prompt": "Zaznacz cele ONZ.",
    "options": [
      "Utrzymanie pokoju i bezpieczeństwa na świecie",
      "Rozwijanie współpracy międzynarodowej",
      "Tworzenie jednego rządu światowego",
      "Ochrona praw i godności człowieka",
      "Popieranie postępu gospodarczego",
      "Likwidacja wszystkich armii narodowych"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do głównych celów ONZ należą utrzymanie pokoju i bezpieczeństwa, rozwijanie współpracy międzynarodowej, ochrona praw i godności człowieka oraz popieranie postępu gospodarczego."
  },
  {
    "id": "R05_ONZ_03",
    "section": "ONZ i początki zimnej wojny",
    "type": "match",
    "prompt": "Połącz organizację wyspecjalizowaną ONZ z właściwą informacją.",
    "options": null,
    "left": [
      "UNESCO",
      "WHO",
      "UNICEF"
    ],
    "right": [
      "pomoc w walce z epidemiami",
      "pomoc dzieciom w zakresie wyżywienia i ochrony zdrowia",
      "rozwój współpracy oświatowej, naukowej i kulturalnej"
    ],
    "answer": {
      "UNESCO": "rozwój współpracy oświatowej, naukowej i kulturalnej",
      "WHO": "pomoc w walce z epidemiami",
      "UNICEF": "pomoc dzieciom w zakresie wyżywienia i ochrony zdrowia"
    },
    "explanation": "UNESCO zajmuje się m.in. oświatą, nauką i kulturą, WHO współpracą medyczną i walką z epidemiami, a UNICEF pomocą dzieciom."
  },
  {
    "id": "R05_ONZ_04",
    "section": "ONZ i początki zimnej wojny",
    "type": "true_false",
    "prompt": "Rada Bezpieczeństwa ONZ ma pięciu członków stałych.",
    "options": null,
    "image": "r05_flaga_onz.jpg",
    "answer": true,
    "explanation": "Pięciu stałych członków Rady Bezpieczeństwa to USA, Rosja (wcześniej ZSRS), Francja, Wielka Brytania i Chiny."
  },
  {
    "id": "R05_ONZ_05",
    "section": "ONZ i początki zimnej wojny",
    "type": "fill_in",
    "prompt": "Główna siedziba ONZ znajduje się w __________, a europejskie siedziby to __________ i __________.",
    "options": null,
    "altAnswers": [
      [
        "Nowym Jorku",
        "Nowy Jork"
      ],
      [
        "Genewa",
        "Genewie"
      ],
      [
        "Wiedeń",
        "Wiedniu"
      ]
    ],
    "answer": [
      "Nowym Jorku",
      "Genewa",
      "Wiedeń"
    ],
    "explanation": "Główna siedziba ONZ znajduje się w Nowym Jorku, a europejskie siedziby w Genewie i Wiedniu."
  },
  {
    "id": "R05_ONZ_06",
    "section": "ONZ i początki zimnej wojny",
    "type": "riddle",
    "prompt": "Tworzy go 15 sędziów, ma siedzibę w Hadze, a jego wyroki są ostateczne. Jaki to organ ONZ?",
    "options": null,
    "altAnswers": [
      "Międzynarodowy Trybunał Sprawiedliwości",
      "MTS"
    ],
    "answer": "Międzynarodowy Trybunał Sprawiedliwości",
    "explanation": "Międzynarodowy Trybunał Sprawiedliwości w Hadze tworzy 15 sędziów, a jego wyroki są ostateczne."
  },
  {
    "id": "R05_ONZ_07",
    "section": "ONZ i początki zimnej wojny",
    "type": "odd_one_out",
    "prompt": "Wskaż organizację, która nie jest organizacją wyspecjalizowaną ONZ: UNESCO, WHO, UNICEF, NATO.",
    "options": null,
    "answer": "NATO",
    "explanation": "UNESCO, WHO i UNICEF są organizacjami wyspecjalizowanymi ONZ. NATO jest sojuszem wojskowym."
  },
  {
    "id": "R05_ONZ_08",
    "section": "ONZ i początki zimnej wojny",
    "type": "scenario",
    "prompt": "Państwo łamie pokój międzynarodowy. Organ ONZ ma rozpatrzyć spór, może wezwać strony do mediacji, zastosować sankcje albo działania militarne. O jaki organ chodzi?",
    "options": [
      "Zgromadzenie Ogólne",
      "Rada Gospodarczo-Społeczna",
      "Rada Bezpieczeństwa",
      "Rada Powiernicza",
      "Sekretariat",
      "Międzynarodowy Trybunał Sprawiedliwości"
    ],
    "answer": 2,
    "explanation": "Takie kompetencje ma Rada Bezpieczeństwa ONZ."
  },
  {
    "id": "R05_ONZ_09",
    "section": "ONZ i początki zimnej wojny",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Powstanie NATO",
      "Sformułowanie doktryny Trumana",
      "Początek procesu norymberskiego",
      "Przemówienie Churchilla w Fulton"
    ],
    "answer": [
      "Początek procesu norymberskiego",
      "Przemówienie Churchilla w Fulton",
      "Sformułowanie doktryny Trumana",
      "Powstanie NATO"
    ],
    "explanation": "Proces norymberski rozpoczął się 20 XI 1945 r., przemówienie w Fulton wygłoszono 5 III 1946 r., doktrynę Trumana sformułowano w 1947 r., a NATO powstało 4 IV 1949 r."
  },
  {
    "id": "R05_ZIM_01",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "single_choice",
    "prompt": "Który równoleżnik był po II wojnie światowej linią podziału Korei na strefę północną i południową?",
    "options": [
      "17. równoleżnik",
      "25. równoleżnik",
      "38. równoleżnik",
      "45. równoleżnik",
      "49. równoleżnik",
      "52. równoleżnik"
    ],
    "image": "r05_mapa_korei.jpg",
    "answer": 2,
    "explanation": "Linią graniczną między północną strefą zajętą przez Armię Czerwoną a południem z wojskami amerykańskimi był 38. równoleżnik."
  },
  {
    "id": "R05_ZIM_02",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "true_false",
    "prompt": "Rozejm podpisany 27 VII 1953 r. w Panmundżonie utrzymał granicę między dwiema Koreami, ale nie zakończył sporu trwałym porozumieniem pokojowym.",
    "options": null,
    "answer": true,
    "explanation": "Rozejm w Panmundżonie utrzymał granicę między dwiema Koreami, ale nie doprowadził do trwałego porozumienia pokojowego."
  },
  {
    "id": "R05_ZIM_03",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące Wietnamu w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Opanowanie i zjednoczenie kraju przez komunistów",
      "I wojna indochińska",
      "Wycofanie się USA z Wietnamu",
      "Powstanie dwóch państw wietnamskich po układzie genewskim"
    ],
    "answer": [
      "I wojna indochińska",
      "Powstanie dwóch państw wietnamskich po układzie genewskim",
      "Wycofanie się USA z Wietnamu",
      "Opanowanie i zjednoczenie kraju przez komunistów"
    ],
    "explanation": "I wojna indochińska trwała w latach 1946-1954, w 1954 r. powstały dwa państwa wietnamskie, USA wycofały się w 1973 r., a komuniści opanowali i zjednoczyli kraj w 1975 r."
  },
  {
    "id": "R05_ZIM_04",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "riddle",
    "prompt": "Komunistyczna partyzantka działająca w Wietnamie Południowym podczas drugiej wojny indochińskiej to...",
    "options": null,
    "altAnswers": [
      "Wietkong",
      "Vietcong"
    ],
    "answer": "Wietkong",
    "explanation": "Wietkong był komunistyczną partyzantką działającą w Wietnamie Południowym."
  },
  {
    "id": "R05_ZIM_05",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "multi_select",
    "prompt": "Które państwa wspierały mudżahedinów walczących z siłami sowieckimi w Afganistanie?",
    "options": [
      "Stany Zjednoczone",
      "Iran",
      "Francja",
      "Arabia Saudyjska",
      "Chiny",
      "Kuba"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Mudżahedinów wspierały Stany Zjednoczone, Iran, Arabia Saudyjska i Chiny."
  },
  {
    "id": "R05_ZIM_06",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "scenario",
    "prompt": "Jest rok 1962. USA żądają usunięcia sowieckich rakiet z wyspy i zarządzają kontrolę statków płynących do tego kraju. O jaki kryzys chodzi?",
    "options": [
      "Kryzys sueski",
      "Kryzys kubański",
      "I kryzys berliński",
      "Wojna koreańska",
      "Praska Wiosna",
      "Wojna Jom Kippur"
    ],
    "image": "r05_kryzys_kubanski.jpg",
    "answer": 1,
    "explanation": "Opis dotyczy kryzysu kubańskiego, gdy oba mocarstwa postawiły siły nuklearne w stan najwyższej gotowości."
  },
  {
    "id": "R05_ZIM_07",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "match",
    "prompt": "Połącz wydarzenie związane z Kubą z rokiem.",
    "options": null,
    "left": [
      "Przejęcie władzy przez Fidela Castro",
      "Inwazja w Zatoce Świń",
      "Przerzut sowieckich wyrzutni rakietowych na Kubę"
    ],
    "right": [
      "1961",
      "1962",
      "1959"
    ],
    "answer": {
      "Przejęcie władzy przez Fidela Castro": "1959",
      "Inwazja w Zatoce Świń": "1961",
      "Przerzut sowieckich wyrzutni rakietowych na Kubę": "1962"
    },
    "explanation": "Fidel Castro przejął władzę w 1959 r., inwazja w Zatoce Świń nastąpiła w 1961 r., a kryzys rakietowy rozwinął się w 1962 r."
  },
  {
    "id": "R05_ZIM_08",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "fill_in",
    "prompt": "W 1949 r. Mao Zedong ogłosił powstanie __________, a Czang Kaj-szek uciekł na __________.",
    "options": null,
    "altAnswers": [
      [
        "Chińskiej Republiki Ludowej",
        "ChRL"
      ],
      [
        "Tajwan",
        "Formozę",
        "Formoza"
      ]
    ],
    "answer": [
      "Chińskiej Republiki Ludowej",
      "Tajwan"
    ],
    "explanation": "Po zwycięstwie komunistów Mao ogłosił Chińską Republikę Ludową, a Czang Kaj-szek schronił się na Tajwanie."
  },
  {
    "id": "R05_ZIM_09",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do polityki Mao Zedonga albo do reform Denga Xiaopinga.",
    "options": null,
    "items": [
      "reformy gospodarcze po 1978 r.",
      "Wielki Skok",
      "stopniowe otwieranie Chin na Zachód",
      "rewolucja kulturalna"
    ],
    "categories": [
      "Mao Zedong",
      "Deng Xiaoping"
    ],
    "answer": {
      "Mao Zedong": [
        "Wielki Skok",
        "rewolucja kulturalna"
      ],
      "Deng Xiaoping": [
        "stopniowe otwieranie Chin na Zachód",
        "reformy gospodarcze po 1978 r."
      ]
    },
    "explanation": "Wielki Skok i rewolucja kulturalna należały do polityki Mao. Deng Xiaoping od 1978 r. otwierał Chiny na Zachód i prowadził reformy gospodarcze."
  },
  {
    "id": "R05_ZIM_10",
    "section": "Konflikty zimnej wojny i supermocarstwa",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie niezwiązane bezpośrednio z Chinami: Wielki Skok, rewolucja kulturalna, manifestacje 1989 r., doktryna Trumana.",
    "options": null,
    "answer": "doktryna Trumana",
    "explanation": "Wielki Skok, rewolucja kulturalna i stłumione manifestacje 1989 r. dotyczą dziejów Chin. Doktryna Trumana była elementem polityki USA."
  },
  {
    "id": "R05_BLOK_01",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "single_choice",
    "prompt": "Kiedy powstał Pakt Północnoatlantycki, czyli NATO?",
    "options": [
      "4 IV 1949 r.",
      "14 V 1955 r.",
      "12 III 1999 r.",
      "5 III 1946 r.",
      "23 X 1956 r.",
      "21 VIII 1968 r."
    ],
    "image": "r05_mapa_nato_uw.jpg",
    "answer": 0,
    "explanation": "NATO powstało 4 IV 1949 r."
  },
  {
    "id": "R05_BLOK_02",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "fill_in",
    "prompt": "Polska przystąpiła do NATO __________.",
    "options": null,
    "altAnswers": [
      [
        "12 III 1999 r.",
        "12 marca 1999 r.",
        "12.03.1999"
      ]
    ],
    "image": "r05_mapa_nato_uw.jpg",
    "answer": [
      "12 III 1999 r."
    ],
    "explanation": "Polska przystąpiła do NATO 12 marca 1999 r."
  },
  {
    "id": "R05_BLOK_03",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "true_false",
    "prompt": "NATO było paktem krajów demokratycznych, a Układ Warszawski paktem krajów komunistycznych.",
    "options": null,
    "answer": true,
    "explanation": "NATO było sojuszem państw demokratycznych, a Układ Warszawski sojuszem państw komunistycznych."
  },
  {
    "id": "R05_BLOK_04",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "single_choice",
    "prompt": "Kiedy zawarto Układ Warszawski?",
    "options": [
      "24 X 1945 r.",
      "4 IV 1949 r.",
      "27 VII 1953 r.",
      "14 V 1955 r.",
      "21 VIII 1968 r.",
      "3 X 1990 r."
    ],
    "answer": 3,
    "explanation": "Układ Warszawski zawarto 14 V 1955 r. z inicjatywy ZSRS."
  },
  {
    "id": "R05_BLOK_05",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, które były republikami demokracji ludowej w Europie Środkowo-Wschodniej.",
    "options": [
      "Bułgaria",
      "Rumunia",
      "Czechosłowacja",
      "Francja",
      "Węgry",
      "Hiszpania"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do republik demokracji ludowej należały m.in. Bułgaria, Rumunia, Czechosłowacja, Węgry, Jugosławia i Polska."
  },
  {
    "id": "R05_BLOK_06",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "multi_select",
    "prompt": "Które założenia charakteryzowały politykę Nikity Chruszczowa?",
    "options": [
      "Potępienie kultu jednostki",
      "Wyrzeczenie się terroru jako formy polityki wewnętrznej",
      "Możliwość własnej drogi do socjalizmu",
      "Przywrócenie pełnego stalinizmu",
      "Współistnienie państw o różnych systemach",
      "Natychmiastowe rozwiązanie KPZR"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do założeń polityki Chruszczowa należały potępienie kultu jednostki, odejście od terroru, możliwość własnej drogi do socjalizmu i konieczność współistnienia państw o różnych systemach."
  },
  {
    "id": "R05_BLOK_07",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "scenario",
    "prompt": "Studenci demonstrują w Budapeszcie 23 X 1956 r., a protest przeradza się w powstanie. Tłum żąda powrotu jednego polityka na stanowisko premiera. Kogo?",
    "options": [
      "Imre Nagya",
      "Janosa Kadara",
      "Aleksandra Dubceka",
      "Gustava Husaka",
      "Josipa Broza-Tity",
      "Nikity Chruszczowa"
    ],
    "answer": 0,
    "explanation": "Podczas rewolucji węgierskiej demonstranci domagali się nominacji Imre Nagya na szefa rządu."
  },
  {
    "id": "R05_BLOK_08",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia rewolucji węgierskiej 1956 r. w kolejności.",
    "options": null,
    "items": [
      "Interwencja sowiecka",
      "Władzę przejmuje rząd Janosa Kadara",
      "Demonstracja studentów w Budapeszcie",
      "Imre Nagy ogłasza neutralność Węgier i wyjście z Układu Warszawskiego"
    ],
    "answer": [
      "Demonstracja studentów w Budapeszcie",
      "Imre Nagy ogłasza neutralność Węgier i wyjście z Układu Warszawskiego",
      "Interwencja sowiecka",
      "Władzę przejmuje rząd Janosa Kadara"
    ],
    "explanation": "23 X rozpoczęła się demonstracja, 1 XI Nagy ogłosił neutralność i wyjście z Układu Warszawskiego, 4 XI nastąpiła interwencja sowiecka, a 7 XI władzę przejął rząd Kadara."
  },
  {
    "id": "R05_BLOK_09",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "riddle",
    "prompt": "Przywódca Czechosłowacji, który w 1968 r. opowiadał się za socjalizmem z ludzką twarzą, to...",
    "options": null,
    "altAnswers": [
      "Aleksander Dubcek",
      "Alexander Dubcek",
      "Dubcek"
    ],
    "answer": "Aleksander Dubcek",
    "explanation": "Aleksander Dubcek jako I sekretarz Komunistycznej Partii Czechosłowacji rozpoczął reformy Praskiej Wiosny."
  },
  {
    "id": "R05_BLOK_10",
    "section": "Bloki polityczne i Europa komunistyczna",
    "type": "true_false",
    "prompt": "Doktryna Breżniewa uzasadniała prawo ZSRS do interwencji we własnej strefie wpływów w celu zabezpieczenia swoich interesów.",
    "options": null,
    "answer": true,
    "explanation": "Doktryna Breżniewa uzasadniała prawo ZSRS do interwencji we własnej strefie wpływów w celu zabezpieczenia swoich interesów."
  },
  {
    "id": "R05_DEKO_01",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "riddle",
    "prompt": "Proces likwidacji kolonializmu i tworzenia niepodległych państw przez ludność dawnych kolonii to...",
    "options": null,
    "altAnswers": [
      "dekolonizacja",
      "Dekolonizacja"
    ],
    "image": "r05_mapa_dekolonizacji_afryki.jpg",
    "answer": "dekolonizacja",
    "explanation": "Dekolonizacja to proces wyzwalania się ludności kolonii i tworzenia przez nią niepodległych państw."
  },
  {
    "id": "R05_DEKO_02",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "multi_select",
    "prompt": "Które zjawiska były przyczynami dekolonizacji?",
    "options": [
      "Dążenie kolonii do uzyskania niepodległości",
      "Trudności mocarstw z utrzymaniem kolonii",
      "Wzrost znaczenia dawnych monarchii kolonialnych",
      "Dążenie komunistów do rozszerzenia wpływów",
      "Powstanie ONZ i idea równości państw",
      "Całkowity zanik konfliktów etnicznych"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Do przyczyn dekolonizacji należały dążenie kolonii do niepodległości, trudności mocarstw z utrzymaniem kolonii, działania komunistów na rzecz poszerzania wpływów oraz znaczenie ONZ i idei równości państw."
  },
  {
    "id": "R05_DEKO_03",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "match",
    "prompt": "Połącz kraj lub zjawisko z właściwą informacją.",
    "options": null,
    "left": [
      "RPA",
      "Rwanda",
      "Somalia"
    ],
    "right": [
      "długotrwała wojna domowa i katastrofa humanitarna",
      "konflikt Hutu i Tutsi",
      "apartheid i działalność Nelsona Mandeli"
    ],
    "image": "r05_nelson_mandela.jpg",
    "answer": {
      "RPA": "apartheid i działalność Nelsona Mandeli",
      "Rwanda": "konflikt Hutu i Tutsi",
      "Somalia": "długotrwała wojna domowa i katastrofa humanitarna"
    },
    "explanation": "RPA wiązała się z apartheidem, Rwanda z konfliktem Hutu i Tutsi, a Somalia z wyniszczającą wojną domową i katastrofą humanitarną."
  },
  {
    "id": "R05_DEKO_04",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "true_false",
    "prompt": "Rok 1960 był rekordowym rokiem dekolonizacji Afryki, ponieważ niepodległość ogłosiło wtedy 17 państw afrykańskich.",
    "options": null,
    "answer": true,
    "explanation": "W 1960 r. niepodległość ogłosiło 17 państw afrykańskich."
  },
  {
    "id": "R05_DEKO_05",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "single_choice",
    "prompt": "W którym roku powstała Organizacja Jedności Afrykańskiej?",
    "options": [
      "1957 r.",
      "1960 r.",
      "1963 r.",
      "1971 r.",
      "1994 r.",
      "2002 r."
    ],
    "answer": 2,
    "explanation": "Organizacja Jedności Afrykańskiej powstała w 1963 r."
  },
  {
    "id": "R05_DEKO_06",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z subkontynentem indyjskim chronologicznie.",
    "options": null,
    "items": [
      "Odłączenie Pakistanu Wschodniego i powstanie Bangladeszu",
      "Wzajemne masakry hinduistów i muzułmanów",
      "Powstanie Indii i Pakistanu"
    ],
    "answer": [
      "Wzajemne masakry hinduistów i muzułmanów",
      "Powstanie Indii i Pakistanu",
      "Odłączenie Pakistanu Wschodniego i powstanie Bangladeszu"
    ],
    "explanation": "W 1946 r. dochodziło do masakr, w 1947 r. powstały Indie i Pakistan, a w 1971 r. Pakistan Wschodni utworzył Bangladesz."
  },
  {
    "id": "R05_DEKO_07",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do państw powstałych lub wyodrębnionych w wyniku dekolonizacji Azji: Indie, Pakistan, Bangladesz, NATO.",
    "options": null,
    "answer": "NATO",
    "explanation": "Indie, Pakistan i Bangladesz są państwami omawianymi przy dekolonizacji Azji. NATO jest sojuszem wojskowym."
  },
  {
    "id": "R05_DEKO_08",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "fill_in",
    "prompt": "Gospodarcze i polityczne uzależnienie niepodległego kraju od dawnej metropolii kolonialnej to __________.",
    "options": null,
    "altAnswers": [
      [
        "neokolonializm",
        "Neokolonializm"
      ]
    ],
    "answer": [
      "neokolonializm"
    ],
    "explanation": "Neokolonializm to utrzymywanie zależności gospodarczej i politycznej dawnych kolonii mimo formalnej niepodległości."
  },
  {
    "id": "R05_DEKO_09",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "scenario",
    "prompt": "Przywódca ruchu niepodległościowego stosuje strajki, demonstracje i bojkot towarów, ale odrzuca walkę zbrojną. Jak nazywa się ta metoda?",
    "options": [
      "Wojna partyzancka",
      "Bierny opór",
      "Pucz wojskowy",
      "Terror państwowy",
      "Blokada morska",
      "Interwencja zbrojna"
    ],
    "answer": 1,
    "explanation": "Bierny opór stosowany przez Mahatmę Gandhiego polegał na walce pokojowymi środkami."
  },
  {
    "id": "R05_DEKO_10",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do Afryki albo Azji.",
    "options": null,
    "items": [
      "wzrost znaczenia części krajów w świecie",
      "załamanie gospodarcze po zerwaniu relacji z metropolią",
      "szybki rozwój gospodarczy części krajów",
      "częste przejmowanie władzy przez dyktatorów"
    ],
    "categories": [
      "Afryka",
      "Azja"
    ],
    "answer": {
      "Afryka": [
        "załamanie gospodarcze po zerwaniu relacji z metropolią",
        "częste przejmowanie władzy przez dyktatorów"
      ],
      "Azja": [
        "szybki rozwój gospodarczy części krajów",
        "wzrost znaczenia części krajów w świecie"
      ]
    },
    "explanation": "W Afryce częste były załamanie gospodarcze i dyktatury, a w części państw Azji szybki rozwój i wzrost znaczenia."
  },
  {
    "id": "R05_DEKO_11",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia konfliktu izraelsko-arabskiego chronologicznie.",
    "options": null,
    "items": [
      "Wojna Jom Kippur",
      "Powstanie państwa Izrael",
      "Wojna sześciodniowa",
      "Decyzja ONZ o podziale Palestyny",
      "Kryzys sueski"
    ],
    "image": "r05_mapa_izraela_palestyny.jpg",
    "answer": [
      "Decyzja ONZ o podziale Palestyny",
      "Powstanie państwa Izrael",
      "Kryzys sueski",
      "Wojna sześciodniowa",
      "Wojna Jom Kippur"
    ],
    "explanation": "ONZ zdecydowała o podziale Palestyny w 1947 r., Izrael powstał w 1948 r., kryzys sueski miał miejsce w 1956 r., wojna sześciodniowa w 1967 r., a wojna Jom Kippur w 1973 r."
  },
  {
    "id": "R05_DEKO_12",
    "section": "Dekolonizacja i Trzeci Świat",
    "type": "single_choice",
    "prompt": "Która organizacja powstała w 1982 r. na terenie Libanu?",
    "options": [
      "Liga Państw Arabskich",
      "Organizacja Wyzwolenia Palestyny",
      "NATO",
      "ONZ",
      "Hezbollah",
      "UNICEF"
    ],
    "answer": 4,
    "explanation": "W 1982 r. powstała w Libanie organizacja terrorystyczna Hezbollah."
  },
  {
    "id": "R05_PRZE_01",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "match",
    "prompt": "Połącz rosyjskie hasło reform Gorbaczowa z jego znaczeniem.",
    "options": null,
    "left": [
      "pierestrojka",
      "głasnost",
      "uskorienie"
    ],
    "right": [
      "jawność",
      "przyspieszenie",
      "przebudowa"
    ],
    "image": "r05_rozpad_zsrs_mapa.jpg",
    "answer": {
      "pierestrojka": "przebudowa",
      "głasnost": "jawność",
      "uskorienie": "przyspieszenie"
    },
    "explanation": "Pierestrojka oznacza przebudowę, głasnost jawność, a uskorienie przyspieszenie."
  },
  {
    "id": "R05_PRZE_02",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "single_choice",
    "prompt": "Kto doszedł do władzy w ZSRS w 1985 r. i rozpoczął politykę reform?",
    "options": [
      "Michaił Gorbaczow",
      "Borys Jelcyn",
      "Leonid Breżniew",
      "Nikita Chruszczow",
      "Władimir Putin",
      "Dmitrij Miedwiediew"
    ],
    "answer": 0,
    "explanation": "W 1985 r. do władzy doszedł Michaił Gorbaczow."
  },
  {
    "id": "R05_PRZE_03",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia rozpadu ZSRS w kolejności.",
    "options": null,
    "items": [
      "Układ Białowieski i koniec istnienia ZSRS",
      "Próba puczu w Moskwie",
      "Litwa ogłasza niepodległość",
      "Borys Jelcyn wygrywa wybory prezydenckie w Rosyjskiej Federacyjnej Republice Radzieckiej"
    ],
    "image": "r05_rozpad_zsrs_mapa.jpg",
    "answer": [
      "Litwa ogłasza niepodległość",
      "Borys Jelcyn wygrywa wybory prezydenckie w Rosyjskiej Federacyjnej Republice Radzieckiej",
      "Próba puczu w Moskwie",
      "Układ Białowieski i koniec istnienia ZSRS"
    ],
    "explanation": "Litwa ogłosiła niepodległość w 1990 r., Jelcyn wygrał wybory w czerwcu 1991 r., pucz rozpoczął się 19 VIII 1991 r., a Układ Białowieski podpisano 7-8 XII 1991 r."
  },
  {
    "id": "R05_PRZE_04",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "multi_select",
    "prompt": "Które zjawiska należały do przyczyn rozpadu ZSRS?",
    "options": [
      "Pierestrojka, głasnost i uskorienie",
      "Problemy gospodarcze",
      "Przegrany wyścig zbrojeń w latach 80.",
      "Zwycięstwo ZSRS w wyścigu zbrojeń",
      "Tendencje odśrodkowe w republikach",
      "Spadek popularności Gorbaczowa"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Do przyczyn rozpadu ZSRS należały reformy Gorbaczowa, problemy gospodarcze, liberalizacja życia, przegrany wyścig zbrojeń, tendencje odśrodkowe, spadek popularności Gorbaczowa i nieudany pucz."
  },
  {
    "id": "R05_PRZE_05",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "single_choice",
    "prompt": "Co powstało po podpisaniu w grudniu 1991 r. porozumienia przez 11 państw byłego ZSRS?",
    "options": [
      "Układ Warszawski",
      "Rada Europy",
      "Wspólnota Niepodległych Państw",
      "Europejska Wspólnota Gospodarcza",
      "Liga Państw Arabskich",
      "Organizacja Jedności Afrykańskiej"
    ],
    "answer": 2,
    "explanation": "Po rozpadzie ZSRS powstała Wspólnota Niepodległych Państw."
  },
  {
    "id": "R05_PRZE_06",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "scenario",
    "prompt": "W grudniu 1989 r. w kraju rządzonym przez Nicolae Ceausescu wybuchają zamieszki, część wojska przechodzi na stronę manifestantów, a dyktator zostaje schwytany i skazany na śmierć. O jaki kraj chodzi?",
    "options": [
      "Bułgaria",
      "Rumunia",
      "Węgry",
      "Czechosłowacja",
      "NRD",
      "Jugosławia"
    ],
    "image": "r05_jesien_ludow_mapa.jpg",
    "answer": 1,
    "explanation": "Opis dotyczy Rumunii, gdzie w 1989 r. upadła dyktatura Nicolae Ceausescu."
  },
  {
    "id": "R05_PRZE_07",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "true_false",
    "prompt": "Przemiany 1989 r. w Czechosłowacji określono jako aksamitną rewolucję, ponieważ przebiegły bez rozlewu krwi.",
    "options": null,
    "answer": true,
    "explanation": "Przemiany w Czechosłowacji miały pokojowy charakter i zostały nazwane aksamitną rewolucją."
  },
  {
    "id": "R05_PRZE_08",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "match",
    "prompt": "Połącz kraj z wydarzeniem lub postacią z czasu Jesieni Ludów.",
    "options": null,
    "left": [
      "Bułgaria",
      "Rumunia",
      "Czechosłowacja",
      "Węgry"
    ],
    "right": [
      "Vaclav Havel",
      "powstanie Republiki Węgierskiej 23 X 1989 r.",
      "Nicolae Ceausescu",
      "Żelu Żelew"
    ],
    "image": "r05_jesien_ludow_mapa.jpg",
    "answer": {
      "Bułgaria": "Żelu Żelew",
      "Rumunia": "Nicolae Ceausescu",
      "Czechosłowacja": "Vaclav Havel",
      "Węgry": "powstanie Republiki Węgierskiej 23 X 1989 r."
    },
    "explanation": "Żelu Żelew był liderem opozycji w Bułgarii, Ceausescu dyktatorem Rumunii, Havel przywódcą opozycji i prezydentem w Czechosłowacji, a 23 X 1989 r. proklamowano Republikę Węgierską."
  },
  {
    "id": "R05_PRZE_09",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "fill_in",
    "prompt": "Zjednoczenie Niemiec stało się faktem __________.",
    "options": null,
    "altAnswers": [
      [
        "3 X 1990 r.",
        "3 października 1990 r.",
        "03.10.1990"
      ]
    ],
    "image": "r05_mur_berlinski.jpg",
    "answer": [
      "3 X 1990 r."
    ],
    "explanation": "3 października 1990 r. nastąpiło zjednoczenie Niemiec."
  },
  {
    "id": "R05_PRZE_10",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "multi_select",
    "prompt": "Które republiki ogłosiły niepodległość od Jugosławii w latach 1991-1992?",
    "options": [
      "Słowenia",
      "Chorwacja",
      "Macedonia",
      "Serbia",
      "Bośnia i Hercegowina",
      "Wojwodina"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Słowenia, Chorwacja i Macedonia ogłosiły niepodległość w 1991 r., a Bośnia i Hercegowina w 1992 r."
  },
  {
    "id": "R05_PRZE_11",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "single_choice",
    "prompt": "W którym miejscu w 1995 r. doszło do masakry ponad 8000 muzułmanów, uznawanej za największe ludobójstwo w Europie od II wojny światowej?",
    "options": [
      "Sarajewo",
      "Belgrad",
      "Prisztina",
      "Srebrenica",
      "Lublana",
      "Zagrzeb"
    ],
    "answer": 3,
    "explanation": "W 1995 r. w Srebrenicy doszło do masakry ludności muzułmańskiej."
  },
  {
    "id": "R05_PRZE_12",
    "section": "Upadek komunizmu i nowy ład w Europie",
    "type": "true_false",
    "prompt": "Kosowo ogłosiło niepodległość w 2008 r., ale nie wszystkie państwa ją uznały.",
    "options": null,
    "answer": true,
    "explanation": "Kosowo ogłosiło niepodległość w 2008 r., lecz nie wszystkie kraje ją uznały."
  },
  {
    "id": "R05_UEK_01",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "single_choice",
    "prompt": "Kto był inicjatorem projektu wspólnego zarządzania francuską i niemiecką produkcją węgla i stali, który doprowadził do utworzenia Europejskiej Wspólnoty Węgla i Stali?",
    "options": [
      "Winston Churchill",
      "Robert Schuman",
      "Helmut Kohl",
      "Charles de Gaulle",
      "Vaclav Havel",
      "Konrad Adenauer"
    ],
    "answer": 1,
    "explanation": "Inicjatorem tego projektu był francuski minister Robert Schuman."
  },
  {
    "id": "R05_UEK_02",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "multi_select",
    "prompt": "Zaznacz państwa założycielskie Europejskiej Wspólnoty Węgla i Stali.",
    "options": [
      "Francja",
      "Belgia",
      "Holandia",
      "Luksemburg",
      "RFN",
      "Włochy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Wspólnotę tworzyły Francja, Belgia, Holandia, Luksemburg, RFN i Włochy."
  },
  {
    "id": "R05_UEK_03",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "match",
    "prompt": "Połącz etap integracji europejskiej z właściwą informacją.",
    "options": null,
    "left": [
      "EWG",
      "Euratom",
      "Układ w Schengen",
      "Parlament Europejski"
    ],
    "right": [
      "pokojowe wykorzystanie energii atomowej",
      "pierwsze bezpośrednie wybory w 1979 r.",
      "likwidacja kontroli na granicach wewnętrznych",
      "rozwój gospodarczy i tworzenie wspólnego rynku"
    ],
    "answer": {
      "EWG": "rozwój gospodarczy i tworzenie wspólnego rynku",
      "Euratom": "pokojowe wykorzystanie energii atomowej",
      "Układ w Schengen": "likwidacja kontroli na granicach wewnętrznych",
      "Parlament Europejski": "pierwsze bezpośrednie wybory w 1979 r."
    },
    "explanation": "EWG skupiała się na gospodarce i wspólnym rynku, Euratom na energii atomowej, Schengen na swobodnym przepływie, a pierwsze bezpośrednie wybory do Parlamentu Europejskiego odbyły się w 1979 r."
  },
  {
    "id": "R05_UEK_04",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "single_choice",
    "prompt": "Kiedy podpisano Układ w Schengen?",
    "options": [
      "7-10 VI 1979 r.",
      "1 I 1981 r.",
      "14 VI 1985 r.",
      "16 IV 2003 r.",
      "1 V 2004 r.",
      "3 X 1990 r."
    ],
    "answer": 2,
    "explanation": "Układ w Schengen podpisano 14 VI 1985 r."
  },
  {
    "id": "R05_UEK_05",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "fill_in",
    "prompt": "W 2004 r. do Unii Europejskiej przystąpiło __________ nowych państw, w tym Polska.",
    "options": null,
    "altAnswers": [
      [
        "10",
        "dziesięć"
      ]
    ],
    "answer": [
      "10"
    ],
    "explanation": "W 2004 r. do UE przystąpiło dziesięć nowych państw, w tym Polska."
  },
  {
    "id": "R05_UEK_06",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "riddle",
    "prompt": "Motto Unii Europejskiej brzmi...",
    "options": null,
    "altAnswers": [
      "Jedność w różnorodności",
      "jedność w różnorodności"
    ],
    "image": "r05_flaga_ue.jpg",
    "answer": "Jedność w różnorodności",
    "explanation": "Motto Unii Europejskiej brzmi: Jedność w różnorodności."
  },
  {
    "id": "R05_UEK_07",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "true_false",
    "prompt": "Dwanaście gwiazd na fladze Unii Europejskiej symbolizuje jedność wszystkich obywateli Unii.",
    "options": null,
    "image": "r05_flaga_ue.jpg",
    "answer": true,
    "explanation": "Dwanaście złotych gwiazd ułożonych w okręgu symbolizuje jedność obywateli Unii."
  },
  {
    "id": "R05_UEK_08",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "sort",
    "prompt": "Przyporządkuj osiągnięcia do medycyny albo podboju przestrzeni powietrznej i kosmicznej.",
    "options": null,
    "items": [
      "pierwszy człowiek w kosmosie w 1961 r.",
      "udany przeszczep serca w 1967 r.",
      "pierwszy Sputnik w 1957 r.",
      "pierwsze zapłodnienie in vitro w 1978 r."
    ],
    "categories": [
      "medycyna",
      "przestrzeń powietrzna i kosmiczna"
    ],
    "image": "r05_eniac_i_kosmos.jpg",
    "answer": {
      "medycyna": [
        "udany przeszczep serca w 1967 r.",
        "pierwsze zapłodnienie in vitro w 1978 r."
      ],
      "przestrzeń powietrzna i kosmiczna": [
        "pierwszy Sputnik w 1957 r.",
        "pierwszy człowiek w kosmosie w 1961 r."
      ]
    },
    "explanation": "Przeszczep serca i in vitro należą do osiągnięć medycznych, a Sputnik i lot Gagarina do osiągnięć podboju przestrzeni kosmicznej."
  },
  {
    "id": "R05_UEK_09",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "sequence",
    "prompt": "Ułóż osiągnięcia naukowo-techniczne w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Pierwszy człowiek w kosmosie",
      "Pierwsze przesłanie poczty elektronicznej",
      "Prototyp komputera ENIAC",
      "Lądowanie Amerykanów na Księżycu",
      "Wystrzelenie pierwszego Sputnika",
      "Przekroczenie bariery dźwięku przez samolot"
    ],
    "image": "r05_eniac_i_kosmos.jpg",
    "answer": [
      "Prototyp komputera ENIAC",
      "Przekroczenie bariery dźwięku przez samolot",
      "Wystrzelenie pierwszego Sputnika",
      "Pierwszy człowiek w kosmosie",
      "Lądowanie Amerykanów na Księżycu",
      "Pierwsze przesłanie poczty elektronicznej"
    ],
    "explanation": "Kolejność osiągnięć była następująca: ENIAC 1945, bariera dźwięku 1947, Sputnik 1957, Gagarin 1961, lądowanie na Księżycu 1969 i poczta elektroniczna 1971."
  },
  {
    "id": "R05_UEK_10",
    "section": "Integracja europejska, społeczeństwo i kultura",
    "type": "match",
    "prompt": "Połącz nurt kultury powojennej z przedstawicielem.",
    "options": null,
    "left": [
      "teatr absurdu",
      "pop-art",
      "op-art",
      "happening"
    ],
    "right": [
      "Victor Vasarely",
      "Tadeusz Kantor",
      "Andy Warhol",
      "Samuel Beckett"
    ],
    "image": "r05_sztuka_powojenna.jpg",
    "answer": {
      "teatr absurdu": "Samuel Beckett",
      "pop-art": "Andy Warhol",
      "op-art": "Victor Vasarely",
      "happening": "Tadeusz Kantor"
    },
    "explanation": "Teatr absurdu jest związany z Beckettem, pop-art z Warholem, op-art z Vasarelym, a happening m.in. z Tadeuszem Kantorem."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz misję ONZ z okresem jej prowadzenia.",
    "options": null,
    "left": [
      "Korea",
      "Kongo",
      "Somalia",
      "Kambodża"
    ],
    "right": [
      "1992-1993",
      "1960-1964",
      "1950-1953",
      "1992-1994"
    ],
    "answer": {
      "Korea": "1950-1953",
      "Kongo": "1960-1964",
      "Somalia": "1992-1994",
      "Kambodża": "1992-1993"
    },
    "explanation": "Misja w Korei trwała w latach 1950-1953, w Kongu 1960-1964, w Somalii 1992-1994, a w Kambodży 1992-1993."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego rola Rady Powierniczej ONZ wygasła w 1994 r.?",
    "options": [
      "Rozwiązano ONZ",
      "Zakończyła się wojna w Korei",
      "Powstało NATO",
      "Zlikwidowano Międzynarodowy Trybunał Sprawiedliwości",
      "Niepodległość uzyskały wyspy Palau",
      "Zakończyła się wojna w Wietnamie"
    ],
    "answer": 4,
    "explanation": "Jej rola wygasła, gdy w 1994 r. niepodległość uzyskały wyspy Palau na Pacyfiku."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W procesie norymberskim oskarżono __________ przywódców hitlerowskich; __________ skazano na śmierć, __________ na dożywocie, a __________ uniewinniono.",
    "options": null,
    "altAnswers": [
      [
        "22",
        "dwudziestu dwóch"
      ],
      [
        "12",
        "dwunastu"
      ],
      [
        "3",
        "trzech"
      ],
      [
        "3",
        "trzech"
      ]
    ],
    "answer": [
      "22",
      "12",
      "3",
      "3"
    ],
    "explanation": "W procesie norymberskim oskarżono 22 osoby; zapadło 12 wyroków śmierci, 3 kary dożywotniego więzienia i 3 uniewinnienia."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia zimnej wojny od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Interwencja ZSRS w Afganistanie",
      "Koniec istnienia ZSRS",
      "Praska Wiosna",
      "Rewolucja na Węgrzech"
    ],
    "answer": [
      "Rewolucja na Węgrzech",
      "Praska Wiosna",
      "Interwencja ZSRS w Afganistanie",
      "Koniec istnienia ZSRS"
    ],
    "explanation": "Rewolucja węgierska miała miejsce w 1956 r., Praska Wiosna w 1968 r., interwencja w Afganistanie rozpoczęła się w 1979 r., a ZSRS przestał istnieć w 1991 r."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dowódca wojsk ONZ w Korei proponuje użycie broni atomowej. Prezydent USA odrzuca ten pomysł, obawiając się wojny z ZSRS. Kim był ten dowódca?",
    "options": [
      "Dwight Eisenhower",
      "Harry Truman",
      "Kim Ir Sen",
      "Douglas MacArthur",
      "Li Syngman",
      "Ho Chi Minh"
    ],
    "image": "r05_mapa_korei.jpg",
    "answer": 3,
    "explanation": "Gen. Douglas MacArthur proponował użycie broni atomowej, ale prezydent Harry Truman nie wyraził zgody."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które reformy lub zapowiedzi wiązały się z Praską Wiosną Aleksandra Dubceka?",
    "options": [
      "Złagodzenie cenzury",
      "Jawna działalność opozycji",
      "Reformy gospodarcze",
      "Zakaz podróży zagranicznych",
      "Zezwolenie na podróże zagraniczne",
      "Zapowiedź wielopartyjności i wolnych wyborów"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "explanation": "Dubcek złagodził cenzurę, dopuścił jawną działalność opozycji, rozpoczął reformy gospodarcze, zezwolił na podróże zagraniczne i zapowiadał wielopartyjność oraz wolne wybory."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie procesu dekolonizacji i konfliktów postkolonialnych z rokiem.",
    "options": null,
    "left": [
      "Powstanie Organizacji Jedności Afrykańskiej",
      "Powstanie Izraela",
      "Powstanie Bangladeszu",
      "Oficjalne zniesienie apartheidu w RPA"
    ],
    "right": [
      "1971",
      "1948",
      "1994",
      "1963"
    ],
    "image": "r05_nelson_mandela.jpg",
    "answer": {
      "Powstanie Organizacji Jedności Afrykańskiej": "1963",
      "Powstanie Izraela": "1948",
      "Powstanie Bangladeszu": "1971",
      "Oficjalne zniesienie apartheidu w RPA": "1994"
    },
    "explanation": "OJA powstała w 1963 r., Izrael w 1948 r., Bangladesz w 1971 r., a apartheid w RPA oficjalnie zlikwidowano w 1994 r."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz republikę byłego ZSRS z datą ogłoszenia niepodległości.",
    "options": null,
    "left": [
      "Gruzja",
      "Białoruś",
      "Ukraina"
    ],
    "right": [
      "24 VIII 1991 r.",
      "9 IV 1991 r.",
      "15 VIII 1991 r."
    ],
    "image": "r05_rozpad_zsrs_mapa.jpg",
    "answer": {
      "Gruzja": "9 IV 1991 r.",
      "Białoruś": "15 VIII 1991 r.",
      "Ukraina": "24 VIII 1991 r."
    },
    "explanation": "Gruzja ogłosiła niepodległość 9 IV 1991 r., Białoruś 15 VIII 1991 r., a Ukraina 24 VIII 1991 r."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zjawiska należały do następstw rozpadu ZSRS?",
    "options": [
      "Powstanie suwerennych niepodległych państw",
      "Likwidacja Układu Warszawskiego",
      "Rozpad supermocarstwa",
      "Wycofanie wojsk rosyjskich z byłych państw satelickich",
      "Odbudowa ZSRS",
      "Umocnienie pozycji USA"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Następstwami rozpadu ZSRS były powstanie suwerennych państw, likwidacja Układu Warszawskiego, rozpad supermocarstwa, wycofanie wojsk rosyjskich z byłych państw satelickich oraz umocnienie pozycji USA."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie europejskiej integracji lub bezpieczeństwa z datą.",
    "options": null,
    "left": [
      "Pierwsze bezpośrednie wybory do Parlamentu Europejskiego",
      "Układ w Schengen",
      "Przystąpienie Polski do NATO",
      "Duże rozszerzenie UE z udziałem Polski"
    ],
    "right": [
      "2004",
      "1985",
      "1979",
      "1999"
    ],
    "answer": {
      "Pierwsze bezpośrednie wybory do Parlamentu Europejskiego": "1979",
      "Układ w Schengen": "1985",
      "Przystąpienie Polski do NATO": "1999",
      "Duże rozszerzenie UE z udziałem Polski": "2004"
    },
    "explanation": "Odpowiednie lata to 1979, 1985, 1999 i 2004."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Społeczeństwa różnych państw mają natychmiastowy dostęp do tych samych informacji i wzorców, przez co rośnie ich współzależność i podobieństwo kulturowe. Jak nazywa się ten proces?",
    "options": [
      "globalizacja",
      "dekolonizacja",
      "apartheid",
      "destalinizacja",
      "neokolonializm",
      "pacyfizm"
    ],
    "answer": 0,
    "explanation": "Postępująca komputeryzacja sprzyja globalizacji, rozumianej jako wzrost współzależności i upodobnień kulturowych państw."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie jest nurtem sztuki lub teatru: pop-art, op-art, taszyzm, apartheid.",
    "options": null,
    "image": "r05_sztuka_powojenna.jpg",
    "answer": "apartheid",
    "explanation": "Pop-art, op-art i taszyzm to nurty sztuki. Apartheid był systemem segregacji rasowej w RPA."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Europa i świat po II wojnie światowej",
  "icon": "🌍",
  "sectionOrder": [
    "ONZ i początki zimnej wojny",
    "Konflikty zimnej wojny i supermocarstwa",
    "Bloki polityczne i Europa komunistyczna",
    "Dekolonizacja i Trzeci Świat",
    "Upadek komunizmu i nowy ład w Europie",
    "Integracja europejska, społeczeństwo i kultura"
  ],
  "sectionIcons": {
    "ONZ i początki zimnej wojny": "🌐",
    "Konflikty zimnej wojny i supermocarstwa": "☢️",
    "Bloki polityczne i Europa komunistyczna": "🧱",
    "Dekolonizacja i Trzeci Świat": "🌍",
    "Upadek komunizmu i nowy ład w Europie": "🕊️",
    "Integracja europejska, społeczeństwo i kultura": "🤝"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
