// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POW  = Powojenny podział świata
//   ZIM  = Zimna wojna i przemiany globalne
//   STAL = Początki PRL i stalinizm
//   PRL  = Polska w latach 1956–1979
//   SOL  = Solidarność i upadek komunizmu
//   TRP  = III RP i integracja europejska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R07_POW_01",
    section: "Powojenny podział świata",
    type: "match",
    prompt: "Połącz kategorię skutków II wojny światowej z przykładem.",
    options: null,
    left: [
      "Polityczne",
      "Społeczne",
      "Gospodarcze",
      "Kulturowe"
    ],
    right: [
      "Kryzys autorytetów",
      "Sieroctwo i rozpad wielu rodzin",
      "Narzucenie komunizmu państwom zajętym przez Armię Czerwoną",
      "Zrujnowane gospodarki licznych państw"
    ],
    answer: {
      "Polityczne": "Narzucenie komunizmu państwom zajętym przez Armię Czerwoną",
      "Społeczne": "Sieroctwo i rozpad wielu rodzin",
      "Gospodarcze": "Zrujnowane gospodarki licznych państw",
      "Kulturowe": "Kryzys autorytetów"
    },
    explanation: "Do następstw II wojny światowej należały zmiany polityczne, społeczne, gospodarcze i kulturowe."
  },
  {
    id: "R07_POW_02",
    section: "Powojenny podział świata",
    type: "multi_select",
    prompt: "Wskaż cechy państw nazywanych demokracjami ludowymi.",
    options: [
      "Rządy partii komunistycznej",
      "Swobodne działanie partii opozycyjnych",
      "Nacjonalizacja ziemi i zakładów",
      "Gospodarka centralnie sterowana",
      "Zniesienie cenzury",
      "Rozbudowany aparat bezpieczeństwa"
    ],
    answer: [
      0,
      2,
      3,
      5
    ],
    explanation: "Takie państwa cechowały m.in. monopol partii komunistycznej, cenzura, nacjonalizacja i centralne kierowanie gospodarką.",
    image: "r07_mapa_powojennej_europy.jpg"
  },
  {
    id: "R07_POW_03",
    section: "Powojenny podział świata",
    type: "single_choice",
    prompt: "W którym roku weszła w życie Karta Narodów Zjednoczonych?",
    options: [
      "1944",
      "1945",
      "1946",
      "1947",
      "1948",
      "1949"
    ],
    answer: 1,
    explanation: "Karta Narodów Zjednoczonych weszła w życie 24 października 1945 r. i wyznaczyła cele współpracy międzynarodowej.",
    image: "r07_sala_obrad_onz.jpg"
  },
  {
    id: "R07_POW_04",
    section: "Powojenny podział świata",
    type: "riddle",
    prompt: "Jak nazywa się organ ONZ, w którym pięciu stałych członków ma prawo weta?",
    options: null,
    altAnswers: [
      "Rada Bezpieczeństwa",
      "Rada Bezpieczeństwa ONZ"
    ],
    answer: "Rada Bezpieczeństwa",
    explanation: "Rada Bezpieczeństwa składa się z pięciu członków stałych i dziesięciu niestałych. Sprzeciw jednego stałego członka może zablokować decyzję."
  },
  {
    id: "R07_POW_05",
    section: "Powojenny podział świata",
    type: "fill_in",
    prompt: "W roku __________ Zgromadzenie Ogólne ONZ uchwaliło Powszechną deklarację praw człowieka.",
    options: null,
    altAnswers: [
      [
        "1948",
        "1948 r."
      ]
    ],
    answer: [
      "1948"
    ],
    explanation: "Deklaracja przyznawała ludziom m.in. prawo do życia, wolności, bezpieczeństwa i wyrażania opinii."
  },
  {
    id: "R07_POW_06",
    section: "Powojenny podział świata",
    type: "true_false",
    prompt: "Podczas blokady Berlina w latach 1948–1949 dostawy żywności do zachodnich sektorów miasta zapewniał most powietrzny.",
    options: null,
    answer: true,
    explanation: "Amerykanie i Brytyjczycy dostarczali do blokowanego Berlina zaopatrzenie drogą powietrzną. Ostatecznie Stalin odstąpił od blokady."
  },
  {
    id: "R07_POW_07",
    section: "Powojenny podział świata",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Budowa muru berlińskiego",
      "Powstanie Układu Warszawskiego",
      "Powstanie ONZ",
      "Podpisanie Paktu Północnoatlantyckiego"
    ],
    answer: [
      "Powstanie ONZ",
      "Podpisanie Paktu Północnoatlantyckiego",
      "Powstanie Układu Warszawskiego",
      "Budowa muru berlińskiego"
    ],
    explanation: "ONZ powstała w 1945 r., NATO w 1949 r., Układ Warszawski w 1955 r., a mur berliński w 1961 r."
  },
  {
    id: "R07_POW_08",
    section: "Powojenny podział świata",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które po II wojnie światowej nie należało do bloku demokracji ludowych: Polska, Węgry, Czechosłowacja, Francja.",
    options: null,
    answer: "Francja",
    explanation: "Polska, Węgry i Czechosłowacja należały do państw podporządkowanych ZSRR. Francja była zachodnim państwem założycielskim NATO."
  },
  {
    id: "R07_POW_09",
    section: "Powojenny podział świata",
    type: "scenario",
    prompt: "W sierpniu 1961 r. mieszkańcy Berlina obudzili się w mieście przeciętym nową barierą. W którym roku władze NRD wzniosły mur odgradzający Berlin Zachodni?",
    options: [
      "1949",
      "1955",
      "1961",
      "1968",
      "1972",
      "1989"
    ],
    answer: 2,
    explanation: "Mur zaczęto wznosić nocą z 12 na 13 sierpnia 1961 r., oddzielając Berlin Zachodni od terytorium NRD.",
    image: "r07_mur_berlinski.jpg"
  },
  {
    id: "R07_POW_10",
    section: "Powojenny podział świata",
    type: "sort",
    prompt: "Przyporządkuj państwa do sojuszy wojskowych, do których należały.",
    options: null,
    items: [
      "Węgry",
      "Kanada",
      "Bułgaria",
      "Włochy",
      "Polska",
      "Norwegia"
    ],
    categories: [
      "NATO",
      "Układ Warszawski"
    ],
    answer: {
      "NATO": [
        "Kanada",
        "Norwegia",
        "Włochy"
      ],
      "Układ Warszawski": [
        "Polska",
        "Węgry",
        "Bułgaria"
      ]
    },
    explanation: "Kanada, Norwegia i Włochy były wśród założycieli NATO; Polska, Węgry i Bułgaria należały do Układu Warszawskiego."
  },
  {
    id: "R07_ZIM_01",
    section: "Zimna wojna i przemiany globalne",
    type: "single_choice",
    prompt: "Dlaczego rok 1960 nazwano rokiem Afryki?",
    options: [
      "Zakończyła się wtedy II wojna światowa w Afryce",
      "Powstała Organizacja Narodów Zjednoczonych",
      "Zlikwidowano wszystkie kolonie na świecie",
      "Wiele państw Afryki uzyskało niepodległość",
      "Rozpoczęła się wojna w Korei",
      "Powstała Unia Europejska"
    ],
    answer: 3,
    explanation: "W 1960 r. niepodległość uzyskało wiele państw afrykańskich; ONZ przyjęła wtedy deklarację dotyczącą niepodległości krajów i narodów kolonialnych.",
    image: "r07_dekolonizacja_afryki.jpg"
  },
  {
    id: "R07_ZIM_02",
    section: "Zimna wojna i przemiany globalne",
    type: "multi_select",
    prompt: "Wybierz przyczyny dekolonizacji po II wojnie światowej.",
    options: [
      "Osłabienie gospodarcze europejskich metropolii",
      "Wzrost dochodów kolonialnej administracji",
      "Narastanie ruchów narodowych w Azji i Afryce",
      "Wzmocnienie europejskich armii kolonialnych",
      "Obietnice samodzielności składane koloniom",
      "Sprzeczność kolonializmu z prawami człowieka"
    ],
    answer: [
      0,
      2,
      4,
      5
    ],
    explanation: "Procesowi sprzyjały osłabienie gospodarcze metropolii, nacjonalizmy w koloniach, obietnice samodzielności i sprzeczność kolonializmu z prawami człowieka."
  },
  {
    id: "R07_ZIM_03",
    section: "Zimna wojna i przemiany globalne",
    type: "single_choice",
    prompt: "Które państwo zaatakowało Koreę Południową w czerwcu 1950 r.?",
    options: [
      "Chiny",
      "Korea Północna",
      "Japonia",
      "ZSRR",
      "Wietnam Północny",
      "Korea Południowa"
    ],
    answer: 1,
    explanation: "Wojna koreańska rozpoczęła się od ataku Korei Północnej na Koreę Południową, po którym ONZ wysłała siły międzynarodowe.",
    image: "r07_mapa_korei.jpg"
  },
  {
    id: "R07_ZIM_04",
    section: "Zimna wojna i przemiany globalne",
    type: "fill_in",
    prompt: "Wojna koreańska zakończyła się rozejmem w roku __________, a wzdłuż __________ równoleżnika wytyczono strefę zdemilitaryzowaną.",
    options: null,
    altAnswers: [
      [
        "1953",
        "1953 r."
      ],
      [
        "38",
        "38.",
        "trzydziestego ósmego"
      ]
    ],
    answer: [
      "1953",
      "38"
    ],
    explanation: "Rozejm podpisano 27 lipca 1953 r. w Panmundżonie; podział Korei utrzymano w pobliżu 38. równoleżnika."
  },
  {
    id: "R07_ZIM_05",
    section: "Zimna wojna i przemiany globalne",
    type: "match",
    prompt: "Dopasuj wydarzenia historyczne do dat, w których miały miejsce.",
    options: null,
    left: [
      "Atak Korei Północnej na Południową",
      "Opuszczenie Wietnamu przez wojska USA",
      "Zajęcie Sajgonu przez Wietkong",
      "Wkroczenie wojsk ZSRR do Afganistanu"
    ],
    right: [
      "1979",
      "1950",
      "1975",
      "1973"
    ],
    answer: {
      "Atak Korei Północnej na Południową": "1950",
      "Opuszczenie Wietnamu przez wojska USA": "1973",
      "Zajęcie Sajgonu przez Wietkong": "1975",
      "Wkroczenie wojsk ZSRR do Afganistanu": "1979"
    },
    explanation: "Wojna w Korei wybuchła w 1950 r.; Amerykanie wycofali się z Wietnamu w 1973 r.; Sajgon padł w 1975 r.; ZSRR wkroczył do Afganistanu w 1979 r."
  },
  {
    id: "R07_ZIM_06",
    section: "Zimna wojna i przemiany globalne",
    type: "riddle",
    prompt: "Kto w 1959 r. przejął władzę na Kubie i następnie zwrócił się po pomoc do ZSRR?",
    options: null,
    altAnswers: [
      "Fidel Castro",
      "Castro"
    ],
    answer: "Fidel Castro",
    explanation: "Fidel Castro wprowadził na Kubie dyktaturę typu komunistycznego. Konflikt z USA doprowadził go do zbliżenia ze Związkiem Radzieckim."
  },
  {
    id: "R07_ZIM_07",
    section: "Zimna wojna i przemiany globalne",
    type: "scenario",
    prompt: "Na wyspie położonej blisko Stanów Zjednoczonych zaczęto instalować radzieckie wyrzutnie rakiet. Prezydent John F. Kennedy ogłosił blokadę. O jaką wyspę chodziło?",
    options: [
      "Kuba",
      "Haiti",
      "Jamajka",
      "Islandia",
      "Cypr",
      "Malta"
    ],
    answer: 0,
    explanation: "W czasie kryzysu kubańskiego USA zablokowały Kubę, a porozumienie prezydenta USA i przywódcy ZSRR doprowadził do usunięcia rakiet."
  },
  {
    id: "R07_ZIM_08",
    section: "Zimna wojna i przemiany globalne",
    type: "true_false",
    prompt: "Formalne zjednoczenie RFN i NRD nastąpiło 3 października 1990 r.",
    options: null,
    answer: true,
    explanation: "Otwarcie granicy w Berlinie w listopadzie 1989 r. poprzedziło formalne połączenie państw niemieckich 3 października 1990 r."
  },
  {
    id: "R07_ZIM_09",
    section: "Zimna wojna i przemiany globalne",
    type: "sequence",
    prompt: "Ułóż etapy integracji europejskiej chronologicznie.",
    options: null,
    items: [
      "Powstanie Wspólnoty Europejskiej",
      "Podpisanie traktatu z Maastricht",
      "Utworzenie Europejskiej Wspólnoty Węgla i Stali",
      "Podpisanie traktatów rzymskich"
    ],
    answer: [
      "Utworzenie Europejskiej Wspólnoty Węgla i Stali",
      "Podpisanie traktatów rzymskich",
      "Powstanie Wspólnoty Europejskiej",
      "Podpisanie traktatu z Maastricht"
    ],
    explanation: "EWWiS powstała w 1951 r., traktaty rzymskie podpisano w 1957 r., Wspólnotę Europejską utworzono w 1967 r., a traktat z Maastricht podpisano w 1992 r."
  },
  {
    id: "R07_ZIM_10",
    section: "Zimna wojna i przemiany globalne",
    type: "single_choice",
    prompt: "Który przywódca ZSRR w 1985 r. zapoczątkował pierestrojkę?",
    options: [
      "Józef Stalin",
      "Leonid Breżniew",
      "Nikita Chruszczow",
      "Borys Jelcyn",
      "Michaił Gorbaczow",
      "Włodzimierz Lenin"
    ],
    answer: 4,
    explanation: "Michaił Gorbaczow objął stanowisko sekretarza generalnego KPZR w 1985 r. i zaproponował program przebudowy systemu."
  },
  {
    id: "R07_STAL_01",
    section: "Początki PRL i stalinizm",
    type: "single_choice",
    prompt: "W którym mieście w lipcu 1944 r. powstał Polski Komitet Wyzwolenia Narodowego?",
    options: [
      "Lublin",
      "Warszawa",
      "Moskwa",
      "Kraków",
      "Łódź",
      "Poznań"
    ],
    answer: 2,
    explanation: "PKWN utworzono w lipcu 1944 r. w Moskwie, a następnie zawarto porozumienie ze Stalinem."
  },
  {
    id: "R07_STAL_02",
    section: "Początki PRL i stalinizm",
    type: "true_false",
    prompt: "Wyniki referendum ludowego przeprowadzonego w Polsce 30 czerwca 1946 r. zostały sfałszowane.",
    options: null,
    answer: true,
    explanation: "Referendum z trzema pytaniami poprzedziło wybory parlamentarne. Władze komunistyczne sfałszowały jego wyniki."
  },
  {
    id: "R07_STAL_03",
    section: "Początki PRL i stalinizm",
    type: "multi_select",
    prompt: "Jakich spraw dotyczyły trzy pytania referendum ludowego z 1946 r.?",
    options: [
      "Zniesienia Senatu",
      "Przystąpienia Polski do NATO",
      "Utrwalenia reformy rolnej i nacjonalizacji",
      "Wybierania prezydenta w głosowaniu powszechnym",
      "Zachodnich granic na Bałtyku i Odrze",
      "Przystąpienia Polski do Unii Europejskiej"
    ],
    answer: [
      0,
      2,
      4
    ],
    explanation: "Pytania dotyczyły zniesienia Senatu, przemian własnościowych w gospodarce oraz utrwalenia zachodnich granic Polski."
  },
  {
    id: "R07_STAL_04",
    section: "Początki PRL i stalinizm",
    type: "fill_in",
    prompt: "Sfałszowane wybory do Sejmu odbyły się w styczniu __________ roku, a PZPR powstała w grudniu __________ roku.",
    options: null,
    altAnswers: [
      [
        "1947",
        "1947 r."
      ],
      [
        "1948",
        "1948 r."
      ]
    ],
    answer: [
      "1947",
      "1948"
    ],
    explanation: "Wybory przeprowadzono 19 stycznia 1947 r., a PZPR utworzono z połączenia PPR i PPS w grudniu 1948 r."
  },
  {
    id: "R07_STAL_05",
    section: "Początki PRL i stalinizm",
    type: "riddle",
    prompt: "Jak nazywano żołnierzy podziemia niepodległościowego walczących po wojnie przeciwko komunistycznej władzy?",
    options: null,
    altAnswers: [
      "żołnierze wyklęci",
      "żołnierze niezłomni",
      "wyklęci",
      "niezłomni"
    ],
    answer: "żołnierze wyklęci",
    explanation: "Żołnierzy podziemia przeciwkomunistycznego, m.in. dawnych żołnierzy AK, nazywa się wyklętymi albo niezłomnymi."
  },
  {
    id: "R07_STAL_06",
    section: "Początki PRL i stalinizm",
    type: "scenario",
    prompt: "W grudniu 1948 r. władze komunistyczne ogłosiły zjednoczenie PPR i PPS, tworząc partię dominującą w Polsce. Jak brzmiała jej nazwa?",
    options: [
      "Polska Partia Socjalistyczna",
      "Polska Zjednoczona Partia Robotnicza",
      "Polskie Stronnictwo Ludowe",
      "Polska Partia Robotnicza",
      "Stronnictwo Demokratyczne",
      "Zjednoczone Stronnictwo Ludowe"
    ],
    answer: 1,
    explanation: "Połączenie PPR i PPS doprowadziło do powstania Polskiej Zjednoczonej Partii Robotniczej, na której czele stanął Bolesław Bierut."
  },
  {
    id: "R07_STAL_07",
    section: "Początki PRL i stalinizm",
    type: "match",
    prompt: "Połącz wydarzenia z rokiem.",
    options: null,
    left: [
      "Utworzenie PKWN",
      "Referendum ludowe",
      "Wybory do Sejmu Ustawodawczego",
      "Konstytucja PRL"
    ],
    right: [
      "1947",
      "1952",
      "1944",
      "1946"
    ],
    answer: {
      "Utworzenie PKWN": "1944",
      "Referendum ludowe": "1946",
      "Wybory do Sejmu Ustawodawczego": "1947",
      "Konstytucja PRL": "1952"
    },
    explanation: "PKWN utworzono w 1944 r., referendum przeprowadzono w 1946 r., wybory w 1947 r., a Konstytucję PRL uchwalono w 1952 r."
  },
  {
    id: "R07_STAL_08",
    section: "Początki PRL i stalinizm",
    type: "sort",
    prompt: "Przyporządkuj pojęcia do aparatu represji lub gospodarki centralnie planowanej.",
    options: null,
    items: [
      "Plan sześcioletni",
      "Urząd Bezpieczeństwa",
      "Państwowe Gospodarstwo Rolne",
      "Korpus Bezpieczeństwa Wewnętrznego",
      "Milicja Obywatelska",
      "Państwowe domy towarowe"
    ],
    categories: [
      "Aparat represji",
      "Gospodarka planowa"
    ],
    answer: {
      "Aparat represji": [
        "Urząd Bezpieczeństwa",
        "Korpus Bezpieczeństwa Wewnętrznego",
        "Milicja Obywatelska"
      ],
      "Gospodarka planowa": [
        "Państwowe Gospodarstwo Rolne",
        "Plan sześcioletni",
        "Państwowe domy towarowe"
      ]
    },
    explanation: "UB, KBW i MO służyły kontroli i represjom, zaś PGR, plan sześcioletni i państwowe placówki handlowe wiązały się z gospodarką socjalistyczną."
  },
  {
    id: "R07_STAL_09",
    section: "Początki PRL i stalinizm",
    type: "odd_one_out",
    prompt: "Wskaż organizację, która nie była polską partią polityczną działającą w okresie przejmowania władzy przez komunistów: PPR, PPS, PSL, NATO.",
    options: null,
    answer: "NATO",
    explanation: "PPR, PPS i PSL były polskimi partiami politycznymi, natomiast NATO jest międzynarodowym sojuszem wojskowym."
  },
  {
    id: "R07_STAL_10",
    section: "Początki PRL i stalinizm",
    type: "single_choice",
    prompt: "Jaki styl narzucany sztuce okresu stalinizmu kojarzono z monumentalnymi budynkami i przedstawieniami robotników?",
    options: [
      "Socrealizm",
      "Kubizm",
      "Barok",
      "Impresjonizm",
      "Gotyk",
      "Romantyzm"
    ],
    answer: 0,
    explanation: "Socrealizm ukazywał m.in. pracowników fabryk i przywódców partii; w architekturze powstawały monumentalne gmachy, jak Pałac Kultury i Nauki.",
    image: "r07_palac_kultury_warszawa.jpg"
  },
  {
    id: "R07_PRL_01",
    section: "Polska w latach 1956–1979",
    type: "single_choice",
    prompt: "W którym dniu rozpoczął się robotniczy protest znany jako Poznański Czerwiec?",
    options: [
      "1 maja 1956 r.",
      "17 czerwca 1956 r.",
      "24 października 1956 r.",
      "28 czerwca 1956 r.",
      "8 marca 1968 r.",
      "14 grudnia 1970 r."
    ],
    answer: 3,
    explanation: "28 czerwca 1956 r. poznańscy robotnicy wyszli na ulice; władze wysłały wojsko, które krwawo stłumiło wystąpienia.",
    image: "r07_poznan_czerwiec_1956.jpg"
  },
  {
    id: "R07_PRL_02",
    section: "Polska w latach 1956–1979",
    type: "match",
    prompt: "Połącz wydarzenie społeczne z rokiem.",
    options: null,
    left: [
      "Poznański Czerwiec",
      "Protesty studentów w marcu",
      "Protesty robotników na Wybrzeżu",
      "Protesty w Radomiu i Ursusie"
    ],
    right: [
      "1976",
      "1970",
      "1956",
      "1968"
    ],
    answer: {
      "Poznański Czerwiec": "1956",
      "Protesty studentów w marcu": "1968",
      "Protesty robotników na Wybrzeżu": "1970",
      "Protesty w Radomiu i Ursusie": "1976"
    },
    explanation: "Poznańskie protesty przypadły na 1956 r., Marzec na 1968 r., Grudzień na 1970 r., a wydarzenia w Radomiu i Ursusie na 1976 r."
  },
  {
    id: "R07_PRL_03",
    section: "Polska w latach 1956–1979",
    type: "multi_select",
    prompt: "Które zmiany nastąpiły po Polskim Październiku 1956 r.?",
    options: [
      "Zaprzestano kolektywizacji wsi",
      "Zwolniono prymasa Stefana Wyszyńskiego",
      "Rozwiązano PZPR",
      "Złagodzono cenzurę",
      "Wprowadzono wielopartyjne wolne wybory",
      "Uznano uprawnienia kombatanckie żołnierzy AK"
    ],
    answer: [
      0,
      1,
      3,
      5
    ],
    explanation: "Po październiku zwolniono prymasa Wyszyńskiego, zaprzestano kolektywizowania wsi, złagodzono cenzurę i uznano prawa kombatanckie żołnierzy AK."
  },
  {
    id: "R07_PRL_04",
    section: "Polska w latach 1956–1979",
    type: "true_false",
    prompt: "Po Październiku 1956 r. całkowicie zlikwidowano cenzurę i przywrócono wolne wybory do Sejmu.",
    options: null,
    answer: false,
    explanation: "Po zmianach w 1956 r. cenzurę jedynie złagodzono, a głosowanie nadal odbywało się na jedną listę kandydatów."
  },
  {
    id: "R07_PRL_05",
    section: "Polska w latach 1956–1979",
    type: "scenario",
    prompt: "W 1965 r. polscy biskupi wysłali do niemieckich hierarchów orędzie zawierające słowa o przebaczeniu. Który rok wiąże się z tym dokumentem?",
    options: [
      "1956",
      "1961",
      "1965",
      "1968",
      "1972",
      "1976"
    ],
    answer: 2,
    explanation: "Orędzie biskupów polskich do niemieckich ukazało się w listopadzie 1965 r.; wywołało agresywną reakcję władz PRL."
  },
  {
    id: "R07_PRL_06",
    section: "Polska w latach 1956–1979",
    type: "single_choice",
    prompt: "Kto zastąpił Władysława Gomułkę na stanowisku pierwszego sekretarza KC PZPR w grudniu 1970 r.?",
    options: [
      "Edward Gierek",
      "Bolesław Bierut",
      "Wojciech Jaruzelski",
      "Stanisław Mikołajczyk",
      "Lech Wałęsa",
      "Tadeusz Mazowiecki"
    ],
    answer: 0,
    explanation: "Po krwawych protestach na Wybrzeżu władza Gomułki upadła; 20 grudnia 1970 r. pierwszym sekretarzem został Edward Gierek."
  },
  {
    id: "R07_PRL_07",
    section: "Polska w latach 1956–1979",
    type: "fill_in",
    prompt: "Reforma administracyjna przeprowadzona w roku __________ utworzyła w Polsce __________ województw.",
    options: null,
    altAnswers: [
      [
        "1975",
        "1975 r."
      ],
      [
        "49",
        "czterdzieści dziewięć"
      ]
    ],
    answer: [
      "1975",
      "49"
    ],
    explanation: "1 czerwca 1975 r. wprowadzono podział administracyjny na 49 województw."
  },
  {
    id: "R07_PRL_08",
    section: "Polska w latach 1956–1979",
    type: "odd_one_out",
    prompt: "Które miasto nie było głównym ośrodkiem protestów robotniczych w czerwcu 1976 roku: Radom, Ursus, Płock, Gdańsk?",
    options: null,
    answer: "Gdańsk",
    explanation: "W czerwcu 1976 r. najostrzejsze protesty miały miejsce w Ursusie, Radomiu i Płocku. Gdańsk był ośrodkiem protestów z grudnia 1970 r."
  },
  {
    id: "R07_PRL_09",
    section: "Polska w latach 1956–1979",
    type: "riddle",
    prompt: "Jaki komitet utworzono we wrześniu 1976 r., aby pomagać represjonowanym robotnikom z Radomia?",
    options: null,
    altAnswers: [
      "Komitet Obrony Robotników",
      "KOR"
    ],
    answer: "Komitet Obrony Robotników",
    explanation: "Komitet Obrony Robotników (KOR) udzielał pomocy prawnej i finansowej oraz ujawniał naruszenia praw człowieka."
  },
  {
    id: "R07_PRL_10",
    section: "Polska w latach 1956–1979",
    type: "sort",
    prompt: "Przyporządkuj inwestycje do okresów rządów Władysława Gomułki lub Edwarda Gierka.",
    options: null,
    items: [
      "Dworzec Centralny w Warszawie",
      "Kopalnie miedzi w Lubinie i Polkowicach",
      "Trasa Łazienkowska",
      "Huta Katowice",
      "Kombinat petrochemiczny w Płocku"
    ],
    categories: [
      "Rządy Gomułki",
      "Rządy Gierka"
    ],
    answer: {
      "Rządy Gomułki": [
        "Kombinat petrochemiczny w Płocku",
        "Kopalnie miedzi w Lubinie i Polkowicach"
      ],
      "Rządy Gierka": [
        "Huta Katowice",
        "Dworzec Centralny w Warszawie",
        "Trasa Łazienkowska"
      ]
    },
    explanation: "Petrochemię w Płocku i górnictwo miedzi rozwijano za rządów Gomułki; Huta Katowice i duże inwestycje warszawskie powstały w okresie Gierka."
  },
  {
    id: "R07_SOL_01",
    section: "Solidarność i upadek komunizmu",
    type: "single_choice",
    prompt: "W którym roku Karol Wojtyła został papieżem Janem Pawłem II?",
    options: [
      "1976",
      "1978",
      "1979",
      "1981",
      "1983",
      "1984"
    ],
    answer: 1,
    explanation: "Arcybiskup krakowski Karol Wojtyła został papieżem 16 października 1978 r.; jego pielgrzymka w 1979 r. wzmocniła społeczne nadzieje na zmianę."
  },
  {
    id: "R07_SOL_02",
    section: "Solidarność i upadek komunizmu",
    type: "fill_in",
    prompt: "Strajk w Stoczni Gdańskiej rozpoczął się 14 sierpnia __________ r., a przewodniczącym Międzyzakładowego Komitetu Strajkowego został __________.",
    options: null,
    altAnswers: [
      [
        "1980",
        "1980 r."
      ],
      [
        "Lech Wałęsa",
        "Lech Walesa",
        "Wałęsa"
      ]
    ],
    answer: [
      "1980",
      "Lech Wałęsa"
    ],
    explanation: "14 sierpnia 1980 r. rozpoczął się strajk, a 16–17 sierpnia MKS wybrał na przewodniczącego Lecha Wałęsę.",
    image: "r07_strajk_stocznia_gdanska.jpg"
  },
  {
    id: "R07_SOL_03",
    section: "Solidarność i upadek komunizmu",
    type: "multi_select",
    prompt: "Które żądania należały do 21 postulatów Międzyzakładowego Komitetu Strajkowego w sierpniu 1980 r.?",
    options: [
      "Niezależne związki zawodowe",
      "Prawo do strajku",
      "Uwolnienie więźniów politycznych",
      "Wprowadzenie cenzury prewencyjnej",
      "Wolność słowa i prasy",
      "Zakaz działalności wszystkich związków zawodowych"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    explanation: "MKS domagał się wolnych związków zawodowych, prawa do strajku, uwolnienia więźniów politycznych i wolności słowa."
  },
  {
    id: "R07_SOL_04",
    section: "Solidarność i upadek komunizmu",
    type: "match",
    prompt: "Przyporządkuj wydarzeniom ich daty.",
    options: null,
    left: [
      "Porozumienie gdańskie",
      "Wprowadzenie stanu wojennego",
      "Zniesienie stanu wojennego",
      "Początek obrad Okrągłego Stołu"
    ],
    right: [
      "6 II 1989",
      "22 VII 1983",
      "31 VIII 1980",
      "13 XII 1981"
    ],
    answer: {
      "Porozumienie gdańskie": "31 VIII 1980",
      "Wprowadzenie stanu wojennego": "13 XII 1981",
      "Zniesienie stanu wojennego": "22 VII 1983",
      "Początek obrad Okrągłego Stołu": "6 II 1989"
    },
    explanation: "Porozumienia podpisano 31 sierpnia 1980 r.; stan wojenny ogłoszono 13 grudnia 1981 r., zniesiono 22 lipca 1983 r., a Okrągły Stół rozpoczął się 6 lutego 1989 r."
  },
  {
    id: "R07_SOL_05",
    section: "Solidarność i upadek komunizmu",
    type: "scenario",
    prompt: "Władza ogłasza godzinę milicyjną, wyłącza telefony, internuje działaczy opozycji i przekazuje rządy wojskowej radzie. Z jakim wydarzeniem wiąże się ten opis?",
    options: [
      "Wprowadzenie stanu wojennego",
      "Poznański Czerwiec",
      "Marzec 1968",
      "Grudzień 1970",
      "Porozumienia sierpniowe",
      "Wybory czerwcowe"
    ],
    answer: 0,
    explanation: "W nocy z 12 na 13 grudnia 1981 r. wprowadzono stan wojenny, a władzę przejęła Wojskowa Rada Ocalenia Narodowego.",
    image: "r07_stan_wojenny_ulica.jpg"
  },
  {
    id: "R07_SOL_06",
    section: "Solidarność i upadek komunizmu",
    type: "true_false",
    prompt: "Podczas pacyfikacji kopalni Wujek w czasie stanu wojennego zginęło dziewięciu górników.",
    options: null,
    answer: true,
    explanation: "Podczas pacyfikacji kopalni Wujek, jednej z najtragiczniejszych akcji przeciw protestującym w stanie wojennym, zginęło dziewięciu górników."
  },
  {
    id: "R07_SOL_07",
    section: "Solidarność i upadek komunizmu",
    type: "sort",
    prompt: "Przyporządkuj działania do opozycji społecznej lub do władz stanu wojennego.",
    options: null,
    items: [
      "Wprowadzenie godziny milicyjnej",
      "Organizowanie manifestacji",
      "Internowanie działaczy",
      "Bojkot państwowych mediów",
      "Zawieszenie związków zawodowych",
      "Drukowanie wydawnictw podziemnych"
    ],
    categories: [
      "Opozycja",
      "Władze stanu wojennego"
    ],
    answer: {
      "Opozycja": [
        "Drukowanie wydawnictw podziemnych",
        "Organizowanie manifestacji",
        "Bojkot państwowych mediów"
      ],
      "Władze stanu wojennego": [
        "Internowanie działaczy",
        "Wprowadzenie godziny milicyjnej",
        "Zawieszenie związków zawodowych"
      ]
    },
    explanation: "Opozycja działała m.in. przez wydawnictwa i protesty, natomiast władze ograniczały prawa obywateli i internowały działaczy."
  },
  {
    id: "R07_SOL_08",
    section: "Solidarność i upadek komunizmu",
    type: "riddle",
    prompt: "Jak nazywał się niezależny związek zawodowy powołany w październiku 1980 r. pod przewodnictwem Lecha Wałęsy?",
    options: null,
    altAnswers: [
      "NSZZ Solidarność",
      "Solidarność",
      "Niezależny Samorządny Związek Zawodowy Solidarność"
    ],
    answer: "NSZZ Solidarność",
    explanation: "Ruch NSZZ Solidarność wyrósł ze strajków sierpniowych i stał się szerokim ruchem społecznym opozycyjnym wobec władz."
  },
  {
    id: "R07_SOL_09",
    section: "Solidarność i upadek komunizmu",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z Solidarnością i przemianami w Polsce w kolejności chronologicznej.",
    options: null,
    items: [
      "Pokojowa Nagroda Nobla dla Lecha Wałęsy",
      "Strajki sierpniowe",
      "Obrady Okrągłego Stołu",
      "Wprowadzenie stanu wojennego"
    ],
    answer: [
      "Strajki sierpniowe",
      "Wprowadzenie stanu wojennego",
      "Pokojowa Nagroda Nobla dla Lecha Wałęsy",
      "Obrady Okrągłego Stołu"
    ],
    explanation: "Strajki odbyły się w 1980 r., stan wojenny wprowadzono w 1981 r., Wałęsa otrzymał Nobla w 1983 r., a rozmowy Okrągłego Stołu zaczęły się w 1989 r.",
    image: "r07_obrady_okraglego_stolu.jpg"
  },
  {
    id: "R07_SOL_10",
    section: "Solidarność i upadek komunizmu",
    type: "single_choice",
    prompt: "Kto reprezentował stronę rządową jako jej przewodniczący podczas obrad Okrągłego Stołu?",
    options: [
      "Wojciech Jaruzelski",
      "Tadeusz Mazowiecki",
      "Bronisław Geremek",
      "Czesław Kiszczak",
      "Jacek Kuroń",
      "Adam Michnik"
    ],
    answer: 3,
    explanation: "Stroną rządową kierował Czesław Kiszczak, a stroną solidarnościową Lech Wałęsa."
  },
  {
    id: "R07_TRP_01",
    section: "III RP i integracja europejska",
    type: "single_choice",
    prompt: "Kiedy przeprowadzono pierwszą turę częściowo wolnych wyborów parlamentarnych po porozumieniach Okrągłego Stołu?",
    options: [
      "6 lutego 1989 r.",
      "18 maja 1989 r.",
      "4 czerwca 1989 r.",
      "19 lipca 1989 r.",
      "24 sierpnia 1989 r.",
      "1 stycznia 1990 r."
    ],
    answer: 2,
    explanation: "Pierwsza tura wyborów do Sejmu i Senatu odbyła się 4 czerwca 1989 r.; kandydaci Solidarności odnieśli duży sukces.",
    image: "r07_obrady_okraglego_stolu.jpg"
  },
  {
    id: "R07_TRP_02",
    section: "III RP i integracja europejska",
    type: "multi_select",
    prompt: "Wskaż postanowienia zawarte podczas obrad Okrągłego Stołu.",
    options: [
      "Legalizacja Solidarności",
      "Całkowicie wolne wybory do Senatu",
      "Całkowicie wolne wybory do Sejmu",
      "Częściowo wolne wybory do Sejmu",
      "Natychmiastowe przystąpienie Polski do NATO",
      "Przywrócenie urzędu prezydenta"
    ],
    answer: [
      0,
      1,
      3,
      5
    ],
    explanation: "Uzgodniono legalizację Solidarności, wybory 35% posłów w wolnej rywalizacji, całkowicie wolne wybory do Senatu i przywrócenie urzędu prezydenta."
  },
  {
    id: "R07_TRP_03",
    section: "III RP i integracja europejska",
    type: "riddle",
    prompt: "Kto został w sierpniu 1989 r. pierwszym po II wojnie światowej niekomunistycznym premierem Polski?",
    options: null,
    altAnswers: [
      "Tadeusz Mazowiecki",
      "Mazowiecki"
    ],
    answer: "Tadeusz Mazowiecki",
    explanation: "Tadeusz Mazowiecki objął stanowisko premiera 24 sierpnia 1989 r., po wyborach czerwcowych."
  },
  {
    id: "R07_TRP_04",
    section: "III RP i integracja europejska",
    type: "fill_in",
    prompt: "Plan reform finansów państwa opracowany przez Leszka __________ zaczęto wdrażać 1 stycznia __________ r.",
    options: null,
    altAnswers: [
      [
        "Balcerowicza",
        "Balcerowicz",
        "Leszka Balcerowicza"
      ],
      [
        "1990",
        "1990 r."
      ]
    ],
    answer: [
      "Balcerowicza",
      "1990"
    ],
    explanation: "Plan Balcerowicza rozpoczął przechodzenie Polski na gospodarkę wolnorynkową od 1 stycznia 1990 r."
  },
  {
    id: "R07_TRP_05",
    section: "III RP i integracja europejska",
    type: "match",
    prompt: "Połącz wydarzenia z datami z historii III RP.",
    options: null,
    left: [
      "Wybór Lecha Wałęsy na prezydenta",
      "Uchwalenie Konstytucji RP",
      "Przystąpienie Polski do NATO",
      "Przystąpienie Polski do UE"
    ],
    right: [
      "2004",
      "1990",
      "1999",
      "1997"
    ],
    answer: {
      "Wybór Lecha Wałęsy na prezydenta": "1990",
      "Uchwalenie Konstytucji RP": "1997",
      "Przystąpienie Polski do NATO": "1999",
      "Przystąpienie Polski do UE": "2004"
    },
    explanation: "Wałęsa wygrał wybory w 1990 r., konstytucję uchwalono w 1997 r., Polska wstąpiła do NATO w 1999 r., a do UE w 2004 r."
  },
  {
    id: "R07_TRP_06",
    section: "III RP i integracja europejska",
    type: "true_false",
    prompt: "Konstytucja RP z 1997 r. opiera ustrój polityczny Polski na podziale władzy ustawodawczej, wykonawczej i sądowniczej.",
    options: null,
    answer: true,
    explanation: "Konstytucja z 1997 r. potwierdziła podział i równowagę trzech władz: ustawodawczej, wykonawczej i sądowniczej."
  },
  {
    id: "R07_TRP_07",
    section: "III RP i integracja europejska",
    type: "scenario",
    prompt: "Po 1989 r. Polska chciała uzyskać gwarancje wspólnej obrony i zacieśnić współpracę wojskową z państwami Zachodu. Do której organizacji przystąpiła w 1999 r.?",
    options: [
      "Unii Europejskiej",
      "NATO",
      "Organizacji Narodów Zjednoczonych",
      "Układu Warszawskiego",
      "Rady Europy",
      "Europejskiej Wspólnoty Węgla i Stali"
    ],
    answer: 1,
    explanation: "W 1999 r. Polska weszła do NATO, dążąc do gwarancji bezpieczeństwa i modernizacji sił zbrojnych."
  },
  {
    id: "R07_TRP_08",
    section: "III RP i integracja europejska",
    type: "sequence",
    prompt: "Ułóż wydarzenia ważne dla suwerenności i integracji Polski chronologicznie.",
    options: null,
    items: [
      "Przystąpienie Polski do Unii Europejskiej",
      "Wycofanie ostatnich oddziałów wojsk radzieckich z Polski",
      "Przystąpienie Polski do strefy Schengen",
      "Przystąpienie Polski do NATO"
    ],
    answer: [
      "Wycofanie ostatnich oddziałów wojsk radzieckich z Polski",
      "Przystąpienie Polski do NATO",
      "Przystąpienie Polski do Unii Europejskiej",
      "Przystąpienie Polski do strefy Schengen"
    ],
    explanation: "Ostatni oddział radziecki opuścił Polskę w 1993 r., Polska dołączyła do NATO w 1999 r., do UE w 2004 r., a do Schengen w 2007 r.",
    image: "r07_polska_integracja_europejska.jpg"
  },
  {
    id: "R07_TRP_09",
    section: "III RP i integracja europejska",
    type: "odd_one_out",
    prompt: "Wskaż organ międzynarodowy: Sejm, Senat, Rada Ministrów, Rada Bezpieczeństwa ONZ.",
    options: null,
    answer: "Rada Bezpieczeństwa ONZ",
    explanation: "Sejm, Senat i Rada Ministrów to instytucje polskiego państwa. Rada Bezpieczeństwa jest organem Organizacji Narodów Zjednoczonych."
  },
  {
    id: "R07_TRP_10",
    section: "III RP i integracja europejska",
    type: "sort",
    prompt: "Podziel skutki reform wolnorynkowych na korzyści i koszty społeczne.",
    options: null,
    items: [
      "Bankructwa przedsiębiorstw",
      "Spadek inflacji",
      "Bezrobocie",
      "Poprawa finansów państwa",
      "Ubożenie części zatrudnionych",
      "Poprawa zaopatrzenia sklepów"
    ],
    categories: [
      "Korzyści",
      "Koszty"
    ],
    answer: {
      "Korzyści": [
        "Spadek inflacji",
        "Poprawa zaopatrzenia sklepów",
        "Poprawa finansów państwa"
      ],
      "Koszty": [
        "Bezrobocie",
        "Bankructwa przedsiębiorstw",
        "Ubożenie części zatrudnionych"
      ]
    },
    explanation: "Reformy przyczyniły się do zahamowania inflacji i poprawy zaopatrzenia, ale spowodowały także bankructwa, bezrobocie i pogorszenie sytuacji części pracujących."
  },
  {
    id: "R07_HARD_01",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które pięć państw ma stałe miejsca w Radzie Bezpieczeństwa ONZ?",
    options: [
      "Chiny",
      "Francja",
      "Niemcy",
      "Rosja",
      "Stany Zjednoczone",
      "Japonia",
      "Wielka Brytania"
    ],
    answer: [
      0,
      1,
      3,
      4,
      6
    ],
    explanation: "Stałymi członkami Rady Bezpieczeństwa ONZ są Rosja, USA, Wielka Brytania, Francja i Chiny."
  },
  {
    id: "R07_HARD_02",
    section: "Super trudne",
    type: "riddle",
    prompt: "W jakim mieście ma siedzibę Międzynarodowy Trybunał Sprawiedliwości ONZ?",
    options: null,
    altAnswers: [
      "Haga",
      "Hadze",
      "w Hadze"
    ],
    answer: "Haga",
    explanation: "Międzynarodowy Trybunał Sprawiedliwości rozstrzyga spory międzynarodowe; jego siedziba znajduje się w Hadze."
  },
  {
    id: "R07_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Rozejm kończący działania wojenne w Korei zawarto 27 lipca __________ r. w miejscowości __________.",
    options: null,
    altAnswers: [
      [
        "1953",
        "1953 r."
      ],
      [
        "Panmundżon",
        "Panmundzon",
        "Panmundżonie"
      ]
    ],
    answer: [
      "1953",
      "Panmundżon"
    ],
    explanation: "W Panmundżonie zawarto rozejm 27 lipca 1953 r. Podział Półwyspu Koreańskiego pozostał w mocy."
  },
  {
    id: "R07_HARD_04",
    section: "Super trudne",
    type: "match",
    prompt: "Przyporządkuj postacie do procesów politycznych, w których odegrały ważną rolę.",
    options: null,
    left: [
      "Nikita Chruszczow",
      "Imre Nagy",
      "Alexander Dubček",
      "Michaił Gorbaczow"
    ],
    right: [
      "Praska Wiosna",
      "Pierestrojka",
      "Destalinizacja w ZSRR",
      "Powstanie węgierskie w 1956 r."
    ],
    answer: {
      "Nikita Chruszczow": "Destalinizacja w ZSRR",
      "Imre Nagy": "Powstanie węgierskie w 1956 r.",
      "Alexander Dubček": "Praska Wiosna",
      "Michaił Gorbaczow": "Pierestrojka"
    },
    explanation: "Chruszczow krytykował stalinizm, Nagy był premierem Węgier w czasie powstania, Dubček kierował praskimi reformami, a Gorbaczow zapoczątkował pierestrojkę."
  },
  {
    id: "R07_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które państwo Układu Warszawskiego nie uczestniczyło w inwazji na Czechosłowację w sierpniu 1968 r.?",
    options: [
      "Polska",
      "Węgry",
      "Rumunia",
      "Bułgaria",
      "ZSRR"
    ],
    answer: 2,
    explanation: "21 sierpnia 1968 r. do Czechosłowacji wkroczyły wojska Układu Warszawskiego, bez udziału Rumunii."
  },
  {
    id: "R07_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia dekolonizacji w kolejności chronologicznej.",
    options: null,
    items: [
      "Niepodległość Angoli i Mozambiku",
      "Niepodległość Indii i Pakistanu",
      "Niepodległość Namibii",
      "Rok Afryki"
    ],
    answer: [
      "Niepodległość Indii i Pakistanu",
      "Rok Afryki",
      "Niepodległość Angoli i Mozambiku",
      "Niepodległość Namibii"
    ],
    explanation: "Indie i Pakistan uzyskały niepodległość w 1947 r., rok Afryki przypadł na 1960 r., Angola i Mozambik usamodzielniły się w 1975 r., a Namibia w 1990 r.",
    image: "r07_dekolonizacja_afryki.jpg"
  },
  {
    id: "R07_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie uzyskało niepodległości w afrykańskim roku 1960: Nigeria, Senegal, Kongo, Angola.",
    options: null,
    answer: "Angola",
    explanation: "Nigeria, Senegal i Kongo znalazły się wśród krajów niepodległych od 1960 r., a Angola uzyskała niepodległość w 1975 r."
  },
  {
    id: "R07_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "W czerwcu 1967 r. wojska izraelskie zajęły m.in. półwysep Synaj oraz syryjskie wzgórza o znaczeniu strategicznym. Jak nazywały się te wzgórza?",
    options: [
      "Wzgórza Judejskie",
      "Wzgórza Karpackie",
      "Wzgórza Gilead",
      "Wzgórza Moabu",
      "Wzgórza Golan",
      "Wzgórza Syjonu"
    ],
    answer: 4,
    explanation: "W wojnie sześciodniowej Izrael zajął Wzgórza Golan oraz inne terytoria, w tym Synaj i Zachodni Brzeg Jordanu."
  },
  {
    id: "R07_HARD_09",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W nocy z 3 na 4 czerwca __________ r. władze Chin stłumiły protest na placu __________ w Pekinie.",
    options: null,
    altAnswers: [
      [
        "1989",
        "1989 r."
      ],
      [
        "Tiananmen",
        "Tian’anmen"
      ]
    ],
    answer: [
      "1989",
      "Tiananmen"
    ],
    explanation: "W 1989 r. studenci domagający się m.in. demokracji demonstrowali na placu Tiananmen. Władze zdecydowały o brutalnym stłumieniu protestu.",
    image: "r07_plac_tiananmen_protest.jpg"
  },
  {
    id: "R07_HARD_10",
    section: "Super trudne",
    type: "match",
    prompt: "Przyporządkuj konflikty lub kryzysy do przełomowych wydarzeń.",
    options: null,
    left: [
      "Wojna koreańska",
      "Wojna wietnamska",
      "Wojna w Afganistanie",
      "Kryzys kubański"
    ],
    right: [
      "Interwencja wojsk ZSRR",
      "Wycofanie radzieckich rakiet z wyspy",
      "Rozejm w Panmundżonie",
      "Zajęcie Sajgonu"
    ],
    answer: {
      "Wojna koreańska": "Rozejm w Panmundżonie",
      "Wojna wietnamska": "Zajęcie Sajgonu",
      "Wojna w Afganistanie": "Interwencja wojsk ZSRR",
      "Kryzys kubański": "Wycofanie radzieckich rakiet z wyspy"
    },
    explanation: "Rozejm w Korei zawarto w Panmundżonie, Sajgon zdobyto w 1975 r., w Afganistanie walczyły wojska radzieckie, a kryzys kubański zakończył się demontażem wyrzutni."
  },
  {
    id: "R07_HARD_11",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które wydarzenia stanowiły etapy prowadzące do zjednoczenia Niemiec?",
    options: [
      "Układ normalizacyjny RFN i NRD w 1972 r.",
      "Otwarcie granicy Berlina 9 listopada 1989 r.",
      "Zjednoczenie Niemiec w 1961 r.",
      "Rozmowy Helmuta Kohla z Moskwą w 1990 r.",
      "Powstanie muru berlińskiego jako znak zjednoczenia",
      "Formalne zjednoczenie 3 października 1990 r."
    ],
    answer: [
      0,
      1,
      3,
      5
    ],
    explanation: "Proces zjednoczenia Niemiec obejmował normalizację stosunków RFN–NRD w 1972 r., otwarcie granicy 9 listopada 1989 r., zgodę Moskwy dla Kohla w 1990 r. i formalne zjednoczenie 3 października 1990 r.",
    image: "r07_mur_berlinski.jpg"
  },
  {
    id: "R07_HARD_12",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się radziecki marszałek pełniący funkcję ministra obrony narodowej w stalinowskiej Polsce?",
    options: null,
    altAnswers: [
      "Konstanty Rokossowski",
      "Rokossowski"
    ],
    answer: "Konstanty Rokossowski",
    explanation: "Konstanty Rokossowski był jedną z osób pochodzących ze Związku Radzieckiego, które wywierały wpływ na instytucje Polski Ludowej."
  },
  {
    id: "R07_HARD_13",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który protest środowisk twórczych z 1964 r. był skierowany przeciw ograniczaniu papieru dla wydawnictw i zaostrzeniu cenzury?",
    options: [
      "List 59",
      "List 34",
      "List 101",
      "Orędzie biskupów",
      "21 postulatów MKS",
      "Manifest PKWN"
    ],
    answer: 1,
    explanation: "W 1964 r. artyści i intelektualiści wystosowali List 34 jako protest przeciw ograniczaniu wydawania książek i czasopism oraz cenzurze."
  },
  {
    id: "R07_HARD_14",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W roku __________ wprowadzono podział Polski na 49 województw, a w roku __________ ostatni oddział radziecki opuścił kraj.",
    options: null,
    altAnswers: [
      [
        "1975",
        "1975 r."
      ],
      [
        "1993",
        "1993 r."
      ]
    ],
    answer: [
      "1975",
      "1993"
    ],
    explanation: "Podział na 49 województw obowiązywał od 1 czerwca 1975 r. Wycofanie ostatnich wojsk radzieckich nastąpiło w 1993 r."
  },
  {
    id: "R07_HARD_15",
    section: "Super trudne",
    type: "sequence",
    prompt: "Uporządkuj sześć wydarzeń wyznaczających etapy przemian Polski po II wojnie światowej.",
    options: null,
    items: [
      "Polski Październik",
      "Utworzenie PZPR",
      "Wybory czerwcowe",
      "Powstanie PKWN",
      "Wprowadzenie stanu wojennego",
      "Uchwalenie Konstytucji PRL"
    ],
    answer: [
      "Powstanie PKWN",
      "Utworzenie PZPR",
      "Uchwalenie Konstytucji PRL",
      "Polski Październik",
      "Wprowadzenie stanu wojennego",
      "Wybory czerwcowe"
    ],
    explanation: "Kolejne daty to: 1944 (PKWN), 1948 (PZPR), 1952 (Konstytucja PRL), 1956 (Październik), 1981 (stan wojenny), 1989 (wybory)."
  }
];

const KID_PROMPTS = {
  "R07_POW_03": "W którym roku zaczęła obowiązywać Karta ONZ?",
  "R07_POW_06": "Czy podczas blokady Berlina żywność dostarczano samolotami?",
  "R07_POW_09": "W którym roku w Berlinie zbudowano mur?",
  "R07_ZIM_01": "Dlaczego 1960 nazwano rokiem Afryki?",
  "R07_ZIM_03": "Kto zaatakował Koreę Południową w 1950 roku?",
  "R07_ZIM_10": "Kto wprowadził pierestrojkę w ZSRR?",
  "R07_STAL_02": "Czy władze sfałszowały referendum z 1946 roku?",
  "R07_STAL_05": "Jak nazywano żołnierzy walczących po wojnie z komunistami?",
  "R07_PRL_01": "Kiedy rozpoczęły się protesty robotników w Poznaniu?",
  "R07_PRL_04": "Czy po 1956 roku zniknęła cenzura i były wolne wybory?",
  "R07_SOL_03": "Czego domagali się robotnicy podczas strajków w 1980 roku?",
  "R07_SOL_06": "Czy w kopalni Wujek zginęło dziewięciu górników?",
  "R07_TRP_03": "Kto został premierem Polski w sierpniu 1989 roku?",
  "R07_TRP_06": "Czy Konstytucja z 1997 roku rozdzieliła władzę na trzy części?",
  "R07_HARD_02": "W jakim mieście obraduje Międzynarodowy Trybunał Sprawiedliwości?"
};

const chapter = {
  id: "r07",
  number: 7,
  title: "Świat po II wojnie światowej, PRL i czasy współczesne",
  icon: "🌐",
  sectionOrder: ["Powojenny podział świata", "Zimna wojna i przemiany globalne", "Początki PRL i stalinizm", "Polska w latach 1956–1979", "Solidarność i upadek komunizmu", "III RP i integracja europejska"],
  sectionIcons: {"Powojenny podział świata": "🌍", "Zimna wojna i przemiany globalne": "🕊️", "Początki PRL i stalinizm": "🏭", "Polska w latach 1956–1979": "🇵🇱", "Solidarność i upadek komunizmu": "✊", "III RP i integracja europejska": "🇪🇺"},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
