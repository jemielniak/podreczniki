// Skróty sekcji:
//   PLZ = Płazińce
//   NIC = Nicienie
//   PIE = Pierścienice
//   CHO = Choroby pasożytnicze
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_PLZ_01",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Która cecha najlepiej wyjaśnia nazwę „płazińce”?",
    "options": [
      "ciało grzbieto-brzusznie spłaszczone",
      "ciało zbudowane z pierścieni",
      "ciało obłe i nitkowate",
      "ciało okryte muszlą",
      "ciało z odnóżami",
      "ciało promieniście symetryczne"
    ],
    "answer": 0,
    "explanation": "Nazwa płazińców nawiązuje do ich płaskiego, wydłużonego ciała, które przypomina taśmę lub liść."
  },
  {
    "id": "R02_PLZ_02",
    "section": "Płazińce",
    "type": "true_false",
    "prompt": "Wszystkie płazińce są pasożytami.",
    "options": null,
    "answer": false,
    "explanation": "Do płazińców należą zarówno gatunki wolno żyjące, jak wypławek biały, jak i gatunki pasożytnicze, np. tasiemce."
  },
  {
    "id": "R02_PLZ_03",
    "section": "Płazińce",
    "type": "multi_select",
    "prompt": "Zaznacz środowiska, w których według rozdziału mogą występować płazińce.",
    "options": [
      "wody słodkie i słone",
      "wilgotne środowisko lądowe",
      "ciała innych organizmów",
      "wyłącznie suche pustynie",
      "wyłącznie gorące źródła"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Płazińce mogą żyć w wodach słodkich i słonych, w wilgotnym środowisku lądowym oraz jako pasożyty wewnętrzne w ciałach żywicieli."
  },
  {
    "id": "R02_PLZ_04",
    "section": "Płazińce",
    "type": "riddle",
    "prompt": "Wolno żyjący płaziniec o mlecznobiałym ciele, spotykany głównie w stojących lub wolno płynących wodach słodkich, to...",
    "options": null,
    "answer": "wypławek biały",
    "altAnswers": [
      "wypławek biały",
      "wyplawek bialy",
      "wypławek",
      "wyplawek"
    ],
    "explanation": "Wypławek biały żyje w środowisku wodnym, zwykle przy podłożu, pod kamieniami lub na roślinach wodnych."
  },
  {
    "id": "R02_PLZ_05",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Który element budowy wypławka białego ułatwia mu poruszanie się po podłożu?",
    "options": [
      "nabłonek orzęsiony",
      "haczyki na główce",
      "gruby pancerz",
      "przyssawka tylna",
      "muszla zewnętrzna",
      "siodełko"
    ],
    "answer": 0,
    "explanation": "Ciało wypławka pokrywa nabłonek orzęsiony, który ułatwia poruszanie się.",
    "image": "/img/r02_wyplawek_bialy.jpg"
  },
  {
    "id": "R02_PLZ_06",
    "section": "Płazińce",
    "type": "fill_in",
    "prompt": "Płazińce mają symetrię __________ oraz ciało __________.",
    "options": null,
    "answer": [
      "dwuboczną",
      "grzbieto-brzusznie spłaszczone"
    ],
    "altAnswers": [
      [
        "dwuboczną",
        "dwuboczna"
      ],
      [
        "grzbieto-brzusznie spłaszczone",
        "grzbietowo-brzusznie spłaszczone",
        "spłaszczone grzbieto-brzusznie"
      ]
    ],
    "explanation": "Wspólne cechy płazińców to symetria dwuboczna oraz ciało wydłużone i grzbieto-brzusznie spłaszczone."
  },
  {
    "id": "R02_PLZ_07",
    "section": "Płazińce",
    "type": "scenario",
    "prompt": "W jelicie cienkim żywiciela żyje długie, płaskie zwierzę zbudowane z członów. Nie ma przewodu pokarmowego i wchłania pokarm całą powierzchnią ciała. Jak nazywa się ten pasożyt?",
    "options": [
      "tasiemiec",
      "wypławek biały",
      "dżdżownica ziemna",
      "rurecznik mułowy",
      "węgorek octowy",
      "guzak północny"
    ],
    "answer": 0,
    "explanation": "Tasiemce są płazińcami pasożytniczymi; żyją w jelicie cienkim i wchłaniają pokarm całą powierzchnią ciała."
  },
  {
    "id": "R02_PLZ_08",
    "section": "Płazińce",
    "type": "multi_select",
    "prompt": "Zaznacz przystosowania tasiemców do pasożytniczego trybu życia.",
    "options": [
      "aparat czepny na główce",
      "oskórek odporny na enzymy trawienne",
      "brak przewodu pokarmowego i wchłanianie pokarmu całą powierzchnią ciała",
      "oddychanie beztlenowe",
      "obojnactwo",
      "nabłonek orzęsiony do pływania w wodzie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Tasiemce mają aparat czepny, odporny oskórek, nie mają przewodu pokarmowego, oddychają beztlenowo i są obojnakami.",
    "image": "/img/r02_tasiemiec_budowa.jpg"
  },
  {
    "id": "R02_PLZ_09",
    "section": "Płazińce",
    "type": "single_choice",
    "prompt": "Z czego składa się aparat czepny tasiemca uzbrojonego?",
    "options": [
      "z przyssawek i haczyków",
      "tylko z przyssawek",
      "z licznych szczecinek",
      "z siodełka i śluzu",
      "z muszli i wieczka",
      "z odnóży krocznych"
    ],
    "answer": 0,
    "explanation": "Tasiemiec uzbrojony ma aparat czepny złożony z przyssawek i haczyków, co odróżnia go od tasiemca nieuzbrojonego.",
    "image": "/img/r02_glowki_tasiemcow.jpg"
  },
  {
    "id": "R02_PLZ_10",
    "section": "Płazińce",
    "type": "true_false",
    "prompt": "Tasiemiec nieuzbrojony ma aparat czepny złożony tylko z przyssawek.",
    "options": null,
    "answer": true,
    "explanation": "Tasiemiec nieuzbrojony nie ma haczyków, dlatego jego aparat czepny tworzą przyssawki."
  },
  {
    "id": "R02_PLZ_11",
    "section": "Płazińce",
    "type": "match",
    "prompt": "Połącz element budowy tasiemca z jego funkcją.",
    "options": null,
    "left": [
      "szyjka",
      "aparat czepny",
      "oskórek",
      "dojrzałe człony"
    ],
    "right": [
      "wytwarza nowe człony",
      "przytwierdza pasożyta do ściany jelita",
      "chroni przed enzymami trawiennymi",
      "zawierają jaja i odrywają się od ciała"
    ],
    "answer": {
      "szyjka": "wytwarza nowe człony",
      "aparat czepny": "przytwierdza pasożyta do ściany jelita",
      "oskórek": "chroni przed enzymami trawiennymi",
      "dojrzałe człony": "zawierają jaja i odrywają się od ciała"
    },
    "explanation": "Budowa tasiemca jest ściśle związana z życiem w jelicie żywiciela i rozprzestrzenianiem jaj."
  },
  {
    "id": "R02_PLZ_12",
    "section": "Płazińce",
    "type": "fill_in",
    "prompt": "Larwa tasiemca znajdująca się w mięśniach żywiciela pośredniego to __________.",
    "options": null,
    "answer": [
      "wągier"
    ],
    "altAnswers": [
      [
        "wągier",
        "wagier",
        "wągry",
        "wagry"
      ]
    ],
    "explanation": "Wągier to larwalna postać tasiemca obecna w mięśniach żywiciela pośredniego, np. świni lub bydła."
  },
  {
    "id": "R02_PLZ_13",
    "section": "Płazińce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wypławek biały, tasiemiec uzbrojony, tasiemiec nieuzbrojony, tasiemiec bąblowcowy.",
    "options": null,
    "answer": "wypławek biały",
    "explanation": "Wypławek biały jest wolno żyjącym płazińcem, a wymienione tasiemce są pasożytami."
  },
  {
    "id": "R02_PLZ_14",
    "section": "Płazińce",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju tasiemca w poprawnej kolejności.",
    "options": null,
    "items": [
      "wągier znajduje się w mięsie żywiciela pośredniego",
      "jajo trafia do organizmu żywiciela pośredniego",
      "postać dorosła żyje w jelicie człowieka",
      "larwa rozwija się w ciele żywiciela pośredniego"
    ],
    "answer": [
      "jajo trafia do organizmu żywiciela pośredniego",
      "larwa rozwija się w ciele żywiciela pośredniego",
      "wągier znajduje się w mięsie żywiciela pośredniego",
      "postać dorosła żyje w jelicie człowieka"
    ],
    "explanation": "Tasiemce przechodzą rozwój złożony ze zmianą żywiciela: jajo, larwa u żywiciela pośredniego, wągier w mięsie i postać dorosła u człowieka."
  },
  {
    "id": "R02_NIC_01",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Jaki kształt ciała jest typowy dla nicieni?",
    "options": [
      "obły i nitkowaty",
      "płaski jak liść",
      "podzielony na pierścienie",
      "promieniście rozgałęziony",
      "okryty wapienną muszlą",
      "zbudowany z członów tasiemca"
    ],
    "answer": 0,
    "explanation": "Nicienie mają ciało obłe, cienkie, długie i zwykle zwężające się na końcach."
  },
  {
    "id": "R02_NIC_02",
    "section": "Nicienie",
    "type": "true_false",
    "prompt": "Nicienie mają wyraźnie wyodrębnioną głowę.",
    "options": null,
    "answer": false,
    "explanation": "W podręczniku podano, że nicienie nie mają wyodrębnionej głowy."
  },
  {
    "id": "R02_NIC_03",
    "section": "Nicienie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy budowy nicieni opisane w rozdziale.",
    "options": [
      "ciało wypełnione płynem nadającym sprężystość",
      "przewód pokarmowy",
      "symetria dwuboczna",
      "brak układu oddechowego i krwionośnego",
      "ciało zawsze podzielone na segmenty",
      "brak wyodrębnionej głowy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Nicienie mają obłe ciało wypełnione płynem, przewód pokarmowy i symetrię dwuboczną, ale nie mają układu oddechowego, krwionośnego ani wyodrębnionej głowy."
  },
  {
    "id": "R02_NIC_04",
    "section": "Nicienie",
    "type": "riddle",
    "prompt": "Mały, wolno żyjący nicień glebowy używany jako organizm modelowy w badaniach biologicznych i medycznych to...",
    "options": null,
    "answer": "Caenorhabditis elegans",
    "altAnswers": [
      "Caenorhabditis elegans",
      "C. elegans",
      "caenorhabditis elegans"
    ],
    "explanation": "Caenorhabditis elegans ma przezroczyste ciało i jest często wykorzystywany w badaniach laboratoryjnych."
  },
  {
    "id": "R02_NIC_05",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej opisuje środowiska i tryb życia nicieni?",
    "options": [
      "Wiele nicieni pasożytuje u roślin i zwierząt, ale są też gatunki wolno żyjące w wodzie i glebie.",
      "Wszystkie nicienie żyją tylko w jelicie człowieka.",
      "Nicienie występują wyłącznie w wodach słonych.",
      "Nicienie są wyłącznie pasożytami zewnętrznymi ryb.",
      "Wszystkie nicienie żyją tylko w suchej glebie.",
      "Nicienie nigdy nie są pasożytami roślin."
    ],
    "answer": 0,
    "explanation": "Rozdział podaje przykłady nicieni wolno żyjących oraz pasożytów roślin i zwierząt."
  },
  {
    "id": "R02_NIC_06",
    "section": "Nicienie",
    "type": "fill_in",
    "prompt": "Nazwa nicieni nawiązuje do ich ciała: __________ i __________.",
    "options": null,
    "answer": [
      "obłego",
      "nitkowatego"
    ],
    "altAnswers": [
      [
        "obłego",
        "obłe",
        "oble"
      ],
      [
        "nitkowatego",
        "nitkowate"
      ]
    ],
    "explanation": "Ciało nicieni jest obłe, czyli zaokrąglone w przekroju, oraz nitkowate, czyli cienkie i długie."
  },
  {
    "id": "R02_NIC_07",
    "section": "Nicienie",
    "type": "scenario",
    "prompt": "Dziecko nocą odczuwa świąd w okolicy odbytu. Samice pasożyta składają tam jaja, które mogą trafić na ręce i zostać połknięte. Jaki pasożyt najpewniej wywołuje chorobę?",
    "options": [
      "owsik ludzki",
      "tasiemiec nieuzbrojony",
      "włosień kręty",
      "rurecznik mułowy",
      "nereida różnokolorowa",
      "pijawka lekarska"
    ],
    "answer": 0,
    "explanation": "Owsik ludzki składa jaja w okolicach odbytu, co powoduje uporczywy świąd i sprzyja samozarażeniu.",
    "image": "/img/r02_owsik_cykl.jpg"
  },
  {
    "id": "R02_NIC_08",
    "section": "Nicienie",
    "type": "multi_select",
    "prompt": "Zaznacz cechy nicieni pasożytniczych wymienione w podręczniku.",
    "options": [
      "u niektórych prosty aparat czepny w formie warg",
      "oddychanie beztlenowe",
      "produkcja bardzo wielu jaj",
      "najczęściej rozwój w organizmie jednego żywiciela",
      "u większości rozdzielnopłciowość",
      "brak przewodu pokarmowego u wszystkich gatunków"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Pasożytnicze nicienie mogą mieć wargi przy otworze gębowym, oddychają beztlenowo, produkują liczne jaja, często rozwijają się w jednym żywicielu i zwykle są rozdzielnopłciowe."
  },
  {
    "id": "R02_NIC_09",
    "section": "Nicienie",
    "type": "true_false",
    "prompt": "Większość nicieni pasożytniczych to obojnaki.",
    "options": null,
    "answer": false,
    "explanation": "W podręczniku zapisano, że większość nicieni pasożytniczych jest rozdzielnopłciowa."
  },
  {
    "id": "R02_NIC_10",
    "section": "Nicienie",
    "type": "match",
    "prompt": "Połącz nicienia z właściwym opisem.",
    "options": null,
    "left": [
      "glista ludzka",
      "włosień kręty",
      "guzak północny",
      "mątwik ziemniaczany"
    ],
    "right": [
      "bytuje w jelicie cienkim człowieka",
      "jego larwy w cystach mogą znajdować się w tkance mięśniowej",
      "atakuje system korzeniowy warzyw i tworzy guzki",
      "tworzy cysty na korzeniach ziemniaka i innych roślin"
    ],
    "answer": {
      "glista ludzka": "bytuje w jelicie cienkim człowieka",
      "włosień kręty": "jego larwy w cystach mogą znajdować się w tkance mięśniowej",
      "guzak północny": "atakuje system korzeniowy warzyw i tworzy guzki",
      "mątwik ziemniaczany": "tworzy cysty na korzeniach ziemniaka i innych roślin"
    },
    "explanation": "Przedstawione gatunki pokazują, że nicienie mogą pasożytować zarówno u człowieka i innych ssaków, jak i u roślin."
  },
  {
    "id": "R02_NIC_11",
    "section": "Nicienie",
    "type": "single_choice",
    "prompt": "Jak najczęściej dochodzi do zarażenia owsikiem ludzkim?",
    "options": [
      "drogą pokarmową przez połknięcie jaj",
      "przez zjedzenie wołowiny z wągrami",
      "przez ukąszenie komara",
      "przez wdychanie larw z wody morskiej",
      "przez dotknięcie śluzu dżdżownicy",
      "przez kąpiel w Bałtyku"
    ],
    "answer": 0,
    "explanation": "Jaja owsika mogą zostać przeniesione do ust na rękach, pokarmie lub przedmiotach, dlatego zarażenie następuje drogą pokarmową."
  },
  {
    "id": "R02_NIC_12",
    "section": "Nicienie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: owsik ludzki, glista ludzka, włosień kręty, wypławek biały.",
    "options": null,
    "answer": "wypławek biały",
    "explanation": "Owsik, glista i włosień są nicieniami pasożytniczymi, a wypławek biały jest wolno żyjącym płazińcem."
  },
  {
    "id": "R02_NIC_13",
    "section": "Nicienie",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady nicieni do trybu życia.",
    "options": null,
    "items": [
      "węgorek octowy",
      "Caenorhabditis elegans",
      "owsik ludzki",
      "glista ludzka",
      "mątwik ziemniaczany",
      "guzak północny"
    ],
    "categories": [
      "wolno żyjące",
      "pasożytnicze"
    ],
    "answer": {
      "wolno żyjące": [
        "węgorek octowy",
        "Caenorhabditis elegans"
      ],
      "pasożytnicze": [
        "owsik ludzki",
        "glista ludzka",
        "mątwik ziemniaczany",
        "guzak północny"
      ]
    },
    "explanation": "Węgorek octowy i Caenorhabditis elegans są przykładami wolno żyjących nicieni, a pozostałe wymienione gatunki są pasożytami."
  },
  {
    "id": "R02_NIC_14",
    "section": "Nicienie",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju owsika ludzkiego w poprawnej kolejności.",
    "options": null,
    "items": [
      "samice składają jaja w okolicach odbytu",
      "larwy wylęgają się w jelicie cienkim",
      "jaja zostają połknięte przez człowieka",
      "dojrzałe owsiki żyją w jelicie grubym",
      "jaja są roznoszone przez człowieka"
    ],
    "answer": [
      "jaja zostają połknięte przez człowieka",
      "larwy wylęgają się w jelicie cienkim",
      "dojrzałe owsiki żyją w jelicie grubym",
      "samice składają jaja w okolicach odbytu",
      "jaja są roznoszone przez człowieka"
    ],
    "explanation": "Cykl owsika zaczyna się od połknięcia jaj, następnie larwy rozwijają się w jelicie, dorosłe osobniki żyją w jelicie grubym, a samice składają jaja w okolicy odbytu."
  },
  {
    "id": "R02_PIE_01",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Od czego pochodzi nazwa „pierścienice”?",
    "options": [
      "od powtarzających się odcinków ciała, czyli segmentów",
      "od haczyków na główce",
      "od nitkowatego kształtu ciała",
      "od muszli ochronnej",
      "od mlecznobiałej barwy",
      "od życia wyłącznie w pierścieniach drzew"
    ],
    "answer": 0,
    "explanation": "Ciało pierścienic jest zbudowane z segmentów, nazywanych też pierścieniami."
  },
  {
    "id": "R02_PIE_02",
    "section": "Pierścienice",
    "type": "true_false",
    "prompt": "Segmentacja oznacza, że odcinki ciała pierścienicy mają niemal identyczną budowę zewnętrzną i wewnętrzną.",
    "options": null,
    "answer": true,
    "explanation": "W segmentach pierścienic powtarzają się podobne elementy budowy."
  },
  {
    "id": "R02_PIE_03",
    "section": "Pierścienice",
    "type": "multi_select",
    "prompt": "Zaznacz informacje zgodne z opisem środowisk i trybu życia pierścienic.",
    "options": [
      "zasiedlają środowisko lądowe",
      "zasiedlają środowisko wodne",
      "niektóre drążą korytarze w glebie",
      "niektóre prowadzą osiadły tryb życia",
      "wszystkie są pasożytami wewnętrznymi",
      "wszystkie żyją wyłącznie w jelicie człowieka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pierścienice mogą żyć na lądzie i w wodzie; wiele porusza się aktywnie, niektóre drążą glebę, a część gatunków wodnych prowadzi osiadły tryb życia."
  },
  {
    "id": "R02_PIE_04",
    "section": "Pierścienice",
    "type": "riddle",
    "prompt": "Glebożerna pierścienica często spotykana na chodnikach po deszczu to...",
    "options": null,
    "answer": "dżdżownica ziemna",
    "altAnswers": [
      "dżdżownica ziemna",
      "dzdzownica ziemna",
      "dżdżownica",
      "dzdzownica"
    ],
    "explanation": "Dżdżownica ziemna żyje w glebie, drąży w niej korytarze i odżywia się szczątkami organicznymi."
  },
  {
    "id": "R02_PIE_05",
    "section": "Pierścienice",
    "type": "fill_in",
    "prompt": "Pierścienice mają ciało __________, czyli podzielone na __________.",
    "options": null,
    "answer": [
      "segmentowane",
      "segmenty"
    ],
    "altAnswers": [
      [
        "segmentowane",
        "podzielone na segmenty"
      ],
      [
        "segmenty",
        "pierścienie",
        "pierscienie"
      ]
    ],
    "explanation": "Segmenty, zwane też pierścieniami, są powtarzającymi się odcinkami ciała pierścienic."
  },
  {
    "id": "R02_PIE_06",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Co pomaga dżdżownicy przemieszczać się w glebie?",
    "options": [
      "skurcze mięśni, śluz i szczecinki",
      "haczyki na główce",
      "pływne ruchy rzęsek na nabłonku",
      "dwie duże przyssawki do ssania krwi",
      "muszla i skrzela",
      "skrzydła"
    ],
    "answer": 0,
    "explanation": "Dżdżownica porusza się dzięki pracy mięśni, a szczecinki i śluz ułatwiają jej przesuwanie się w glebie.",
    "image": "/img/r02_dzdzownica_budowa.jpg"
  },
  {
    "id": "R02_PIE_07",
    "section": "Pierścienice",
    "type": "match",
    "prompt": "Połącz element budowy dżdżownicy z jego funkcją.",
    "options": null,
    "left": [
      "siodełko",
      "szczecinki",
      "oskórek pokryty śluzem",
      "receptory reagujące na światło"
    ],
    "right": [
      "uczestniczy w rozmnażaniu",
      "ułatwiają zaczepianie się o grudki ziemi",
      "chroni ciało przed wyschnięciem i ułatwia wymianę gazową",
      "pozwalają rozróżniać światło i ciemność"
    ],
    "answer": {
      "siodełko": "uczestniczy w rozmnażaniu",
      "szczecinki": "ułatwiają zaczepianie się o grudki ziemi",
      "oskórek pokryty śluzem": "chroni ciało przed wyschnięciem i ułatwia wymianę gazową",
      "receptory reagujące na światło": "pozwalają rozróżniać światło i ciemność"
    },
    "explanation": "Elementy budowy dżdżownicy ułatwiają życie w glebie, poruszanie się i rozmnażanie."
  },
  {
    "id": "R02_PIE_08",
    "section": "Pierścienice",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje dżdżownic w przyrodzie i dla człowieka opisane w rozdziale.",
    "options": [
      "spulchniają glebę",
      "mieszają warstwy gleby",
      "zwiększają żyzność gleby",
      "ich odchody mogą być naturalnym nawozem",
      "są używane jako przynęta przez wędkarzy",
      "wywołują owsicę"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Dżdżownice poprawiają właściwości gleby, a ich odchody tworzą naturalny nawóz; bywają też używane jako przynęta."
  },
  {
    "id": "R02_PIE_09",
    "section": "Pierścienice",
    "type": "scenario",
    "prompt": "W mulistym dnie zbiornika słodkowodnego tkwi w rurce z mułu i śluzu organizm, który wystawia tylną część ciała i wykonuje ruchy wahadłowe, doprowadzając tlen w pobliże dna. Co to za pierścienica?",
    "options": [
      "rurecznik mułowy",
      "pijawka lekarska",
      "dżdżownica ziemna",
      "wypławek biały",
      "mątwik ziemniaczany",
      "tasiemiec bąblowcowy"
    ],
    "answer": 0,
    "explanation": "Rurecznik mułowy żyje w rurce z mułu i śluzu oraz pełni w mulistym dnie podobną rolę jak dżdżownica w glebie."
  },
  {
    "id": "R02_PIE_10",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Jak nazywa się substancja ze śliny pijawek, która zapobiega krzepnięciu krwi?",
    "options": [
      "hirudyna",
      "wągier",
      "chityna",
      "biohumus",
      "cysta",
      "enzym trawienny"
    ],
    "answer": 0,
    "explanation": "Hirudyna zapobiega krzepnięciu krwi i jest jedną z substancji, które pijawki wprowadzają do ciała żywiciela.",
    "image": "/img/r02_pijawka_budowa.jpg"
  },
  {
    "id": "R02_PIE_11",
    "section": "Pierścienice",
    "type": "true_false",
    "prompt": "Pijawki mają szczecinki podobne do dżdżownic.",
    "options": null,
    "answer": false,
    "explanation": "Pijawki, w tym pijawka lekarska, nie mają szczecinek; do przytwierdzania używają przyssawek."
  },
  {
    "id": "R02_PIE_12",
    "section": "Pierścienice",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: przyssawka gębowa, przyssawka tylna, silnie umięśniona gardziel, siodełko.",
    "options": null,
    "answer": "siodełko",
    "explanation": "Przyssawki i silnie umięśniona gardziel są związane z budową pijawki, a siodełko jest elementem budowy dżdżownicy."
  },
  {
    "id": "R02_PIE_13",
    "section": "Pierścienice",
    "type": "single_choice",
    "prompt": "Który opis dotyczy nereidy różnokolorowej?",
    "options": [
      "jest drapieżnikiem żyjącym na dnie Bałtyku",
      "bytuje w jelicie cienkim człowieka",
      "atakuje korzenie ziemniaka i tworzy cysty",
      "składa jaja w okolicach odbytu człowieka",
      "żyje w mięśniach świni jako larwa tasiemca",
      "jest wolno żyjącym nicieniem glebowym"
    ],
    "answer": 0,
    "explanation": "Nereida różnokolorowa to drapieżna pierścienica żyjąca na dnie Bałtyku i aktywnie poszukująca pożywienia."
  },
  {
    "id": "R02_PIE_14",
    "section": "Pierścienice",
    "type": "sort",
    "prompt": "Przyporządkuj pierścienice do trybu życia.",
    "options": null,
    "items": [
      "dżdżownica ziemna",
      "pijawka lekarska",
      "nereida różnokolorowa",
      "rurecznik mułowy",
      "Sabella pavonina"
    ],
    "categories": [
      "poruszające się aktywnie",
      "prowadzące osiadły tryb życia"
    ],
    "answer": {
      "poruszające się aktywnie": [
        "dżdżownica ziemna",
        "pijawka lekarska",
        "nereida różnokolorowa"
      ],
      "prowadzące osiadły tryb życia": [
        "rurecznik mułowy",
        "Sabella pavonina"
      ]
    },
    "explanation": "Większość wymienionych pierścienic porusza się aktywnie, natomiast rurecznik i Sabella są przykładami gatunków prowadzących osiadły tryb życia."
  },
  {
    "id": "R02_CHO_01",
    "section": "Choroby pasożytnicze",
    "type": "single_choice",
    "prompt": "Jak nazywa się choroba układu pokarmowego wywoływana przez tasiemca uzbrojonego lub nieuzbrojonego?",
    "options": [
      "tasiemczyca",
      "owsica",
      "glistnica",
      "włośnica",
      "bąblowica",
      "anemia"
    ],
    "answer": 0,
    "explanation": "Zakażenie układu pokarmowego tasiemcem uzbrojonym lub nieuzbrojonym prowadzi do tasiemczycy."
  },
  {
    "id": "R02_CHO_02",
    "section": "Choroby pasożytnicze",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby zapobiegania tasiemczycy opisane w podręczniku.",
    "options": [
      "unikanie surowego lub niedogotowanego mięsa",
      "niespożywanie mięsa nieprzebadanego i z nieznanego źródła",
      "właściwe gotowanie, smażenie lub pieczenie mięsa",
      "jedzenie wyłącznie niemytych owoców leśnych",
      "obgryzanie paznokci po posiłku"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ryzyko tasiemczycy zmniejsza jedzenie mięsa przebadanego i odpowiednio przygotowanego termicznie."
  },
  {
    "id": "R02_CHO_03",
    "section": "Choroby pasożytnicze",
    "type": "scenario",
    "prompt": "Ktoś zjadł surową wołowinę z larwami tasiemca. Którym tasiemcem może się zarazić według rozdziału?",
    "options": [
      "tasiemcem nieuzbrojonym",
      "tasiemcem uzbrojonym",
      "owsikiem ludzkim",
      "włosieniem krętym",
      "pijawką rybią",
      "guzakiem północnym"
    ],
    "answer": 0,
    "explanation": "Tasiemiec nieuzbrojony przenosi się przez surową lub niedogotowaną wołowinę zawierającą wągry."
  },
  {
    "id": "R02_CHO_04",
    "section": "Choroby pasożytnicze",
    "type": "scenario",
    "prompt": "Ktoś zjadł niedogotowane mięso wieprzowe, w którym znajdowały się wągry. Którym pasożytem może się zarazić?",
    "options": [
      "tasiemcem uzbrojonym",
      "tasiemcem nieuzbrojonym",
      "wypławkiem białym",
      "mątwikiem ziemniaczanym",
      "rurecznikiem mułowym",
      "nereidą różnokolorową"
    ],
    "answer": 0,
    "explanation": "Tasiemiec uzbrojony ma jako żywiciela pośredniego świnię lub dzika, a człowiek zaraża się przez mięso z wągrami."
  },
  {
    "id": "R02_CHO_05",
    "section": "Choroby pasożytnicze",
    "type": "true_false",
    "prompt": "Człowiek może być żywicielem pośrednim dla tasiemca bąblowcowego.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że człowiek może być żywicielem pośrednim tasiemca bąblowcowego."
  },
  {
    "id": "R02_CHO_06",
    "section": "Choroby pasożytnicze",
    "type": "single_choice",
    "prompt": "W którym narządzie człowieka larwy bąblowca najczęściej tworzą zmiany opisane w podręczniku?",
    "options": [
      "w wątrobie",
      "w jelicie grubym",
      "w skórze dłoni",
      "w płucach ryby",
      "w korzeniach roślin",
      "w muszli"
    ],
    "answer": 0,
    "explanation": "Larwy bąblowca wędrują do różnych narządów, ale najczęściej tworzą zmiany w wątrobie."
  },
  {
    "id": "R02_CHO_07",
    "section": "Choroby pasożytnicze",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby zapobiegania bąblowicy.",
    "options": [
      "mycie owoców leśnych przed zjedzeniem",
      "dokładne mycie rąk po zabawie z psem",
      "regularne odrobaczanie zwierząt domowych",
      "dbanie o higienę psa i jego legowiska",
      "jedzenie surowego mięsa z nieznanego źródła"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Bąblowicy zapobiega mycie owoców i rąk oraz dbanie o higienę i odrobaczanie zwierząt domowych."
  },
  {
    "id": "R02_CHO_08",
    "section": "Choroby pasożytnicze",
    "type": "single_choice",
    "prompt": "U kogo według rozdziału owsica występuje zwykle najczęściej?",
    "options": [
      "u dzieci w wieku przedszkolnym i wczesnoszkolnym",
      "u wyłącznie dorosłych hodowców ryb",
      "tylko u psów pasterskich",
      "wyłącznie u bydła domowego",
      "wyłącznie u roślin ziemniaka",
      "u ryb karpiowatych"
    ],
    "answer": 0,
    "explanation": "Owsica jest opisana jako częsta choroba pasożytnicza, zwykle występująca u dzieci w wieku przedszkolnym i wczesnoszkolnym."
  },
  {
    "id": "R02_CHO_09",
    "section": "Choroby pasożytnicze",
    "type": "multi_select",
    "prompt": "Zaznacz objawy owsicy wymienione w podręczniku.",
    "options": [
      "świąd okolic odbytu, głównie w nocy",
      "problemy ze snem i niepokój",
      "trudności w koncentracji",
      "bóle brzucha i brak apetytu",
      "cysty na korzeniach ziemniaka",
      "krwawienie po przyssaniu pijawki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Owsica może powodować nocny świąd odbytu, problemy ze snem, niepokój, trudności w koncentracji, bóle brzucha i brak apetytu."
  },
  {
    "id": "R02_CHO_10",
    "section": "Choroby pasożytnicze",
    "type": "fill_in",
    "prompt": "Owsica jest wywoływana przez __________, a zakażenie następuje drogą __________.",
    "options": null,
    "answer": [
      "owsika ludzkiego",
      "pokarmową"
    ],
    "altAnswers": [
      [
        "owsika ludzkiego",
        "owsik ludzki"
      ],
      [
        "pokarmową",
        "pokarmowa"
      ]
    ],
    "explanation": "Owsicę wywołuje owsik ludzki, a jaja pasożyta trafiają do organizmu przez usta."
  },
  {
    "id": "R02_CHO_11",
    "section": "Choroby pasożytnicze",
    "type": "single_choice",
    "prompt": "Jaki charakterystyczny objaw glistnicy jest opisany w rozdziale?",
    "options": [
      "kaszel wywoływany przez larwy wędrujące w organizmie",
      "świąd odbytu głównie w nocy",
      "torbiel bąblowcowa w wątrobie",
      "przyssanie do skóry i ssanie krwi",
      "cysty na korzeniach roślin",
      "kołysanie tylnej części ciała"
    ],
    "answer": 0,
    "explanation": "W opisie glisty ludzkiej podano, że charakterystycznym objawem glistnicy jest kaszel wywoływany przez wędrujące larwy."
  },
  {
    "id": "R02_CHO_12",
    "section": "Choroby pasożytnicze",
    "type": "single_choice",
    "prompt": "Co prowadzi do rozwoju włośnicy?",
    "options": [
      "spożycie niedogotowanego mięsa zawierającego larwy włośnia",
      "połknięcie jaj owsika z brudnych rąk",
      "zjedzenie surowej wołowiny z wągrami tasiemca nieuzbrojonego",
      "kontakt z rurecznikiem mułowym",
      "dotknięcie biohumusu",
      "ukąszenie pijawki rybiej"
    ],
    "answer": 0,
    "explanation": "Włośnica rozwija się po spożyciu niedogotowanego mięsa zawierającego larwy włośnia krętego."
  },
  {
    "id": "R02_MIE_01",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj przedstawicieli do grup bezkręgowców.",
    "options": null,
    "items": [
      "wypławek biały",
      "tasiemiec uzbrojony",
      "owsik ludzki",
      "glista ludzka",
      "dżdżownica ziemna",
      "pijawka lekarska"
    ],
    "categories": [
      "płazińce",
      "nicienie",
      "pierścienice"
    ],
    "answer": {
      "płazińce": [
        "wypławek biały",
        "tasiemiec uzbrojony"
      ],
      "nicienie": [
        "owsik ludzki",
        "glista ludzka"
      ],
      "pierścienice": [
        "dżdżownica ziemna",
        "pijawka lekarska"
      ]
    },
    "explanation": "Wypławek i tasiemiec to płazińce, owsik i glista to nicienie, a dżdżownica i pijawka to pierścienice.",
    "image": "/img/r02_porownanie_trzech_grup.jpg"
  },
  {
    "id": "R02_MIE_02",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz grupę bezkręgowców z cechą budowy ciała.",
    "options": null,
    "left": [
      "płazińce",
      "nicienie",
      "pierścienice"
    ],
    "right": [
      "ciało płaskie",
      "ciało obłe i nitkowate",
      "ciało podzielone na segmenty"
    ],
    "answer": {
      "płazińce": "ciało płaskie",
      "nicienie": "ciało obłe i nitkowate",
      "pierścienice": "ciało podzielone na segmenty"
    },
    "explanation": "Nazwy grup odnoszą się do kształtu ciała: płaskiego u płazińców, nitkowatego u nicieni i segmentowanego u pierścienic."
  },
  {
    "id": "R02_MIE_03",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Które z wymienionych grup mają przewód pokarmowy według podsumowania rozdziału?",
    "options": [
      "nicienie",
      "pierścienice",
      "tasiemce",
      "przyssawki",
      "oskórek"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Podsumowanie wskazuje przewód pokarmowy u nicieni i pierścienic; tasiemce są przykładem płazińców pozbawionych przewodu pokarmowego."
  },
  {
    "id": "R02_MIE_04",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: płazińce, nicienie, pierścienice, kręgowce.",
    "options": null,
    "answer": "kręgowce",
    "explanation": "Płazińce, nicienie i pierścienice są bezkręgowcami, a kręgowce mają kręgosłup."
  },
  {
    "id": "R02_MIE_05",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Płazińce, nicienie i pierścienice należą do bezkręgowców.",
    "options": null,
    "answer": true,
    "explanation": "Wszystkie trzy grupy opisane w tym rozdziale to bezkręgowce, czyli zwierzęta bez kręgosłupa."
  },
  {
    "id": "R02_MIE_06",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Bezkręgowce to zwierzęta wielokomórkowe, które nie mają __________.",
    "options": null,
    "answer": [
      "kręgosłupa"
    ],
    "altAnswers": [
      [
        "kręgosłupa",
        "kregoslupa"
      ]
    ],
    "explanation": "Bezkręgowce są definiowane jako zwierzęta wielokomórkowe pozbawione kręgosłupa."
  },
  {
    "id": "R02_MIE_07",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "żywiciel",
      "żywiciel pośredni",
      "żywiciel ostateczny",
      "pasożyt zewnętrzny"
    ],
    "right": [
      "organizm zarażony pasożytem",
      "organizm, w którym rozwijają się formy larwalne pasożyta",
      "organizm, w którym rozwijają się formy dojrzałe pasożyta",
      "pasożyt żyjący na powierzchni ciała żywiciela"
    ],
    "answer": {
      "żywiciel": "organizm zarażony pasożytem",
      "żywiciel pośredni": "organizm, w którym rozwijają się formy larwalne pasożyta",
      "żywiciel ostateczny": "organizm, w którym rozwijają się formy dojrzałe pasożyta",
      "pasożyt zewnętrzny": "pasożyt żyjący na powierzchni ciała żywiciela"
    },
    "explanation": "Definicje żywiciela, żywiciela pośredniego, ostatecznego i pasożyta zewnętrznego porządkują opisy cykli pasożytów."
  },
  {
    "id": "R02_MIE_08",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy do typu pasożytnictwa.",
    "options": null,
    "items": [
      "tasiemiec uzbrojony",
      "owsik ludzki",
      "glista ludzka",
      "pijawka lekarska",
      "pijawka rybia"
    ],
    "categories": [
      "pasożyty wewnętrzne",
      "pasożyty zewnętrzne"
    ],
    "answer": {
      "pasożyty wewnętrzne": [
        "tasiemiec uzbrojony",
        "owsik ludzki",
        "glista ludzka"
      ],
      "pasożyty zewnętrzne": [
        "pijawka lekarska",
        "pijawka rybia"
      ]
    },
    "explanation": "Tasiemce i wymienione nicienie żyją wewnątrz ciała żywiciela, a pijawki przyczepiają się do zewnętrznej powierzchni ciała."
  },
  {
    "id": "R02_MIE_09",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Krótki, drobny wyrostek ułatwiający poruszanie się niektórym pierścienicom, np. dżdżownicy, to...",
    "options": null,
    "answer": "szczecinka",
    "altAnswers": [
      "szczecinka",
      "szczecinki"
    ],
    "explanation": "Szczecinki pomagają dżdżownicy zaczepiać się o grudki ziemi podczas pełzania."
  },
  {
    "id": "R02_MIE_10",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Larwa tasiemca znajdująca się w mięśniach żywiciela pośredniego to...",
    "options": null,
    "answer": "wągier",
    "altAnswers": [
      "wągier",
      "wagier"
    ],
    "explanation": "Wągier jest postacią larwalną tasiemca, która może znajdować się w mięsie świni, dzika lub bydła."
  },
  {
    "id": "R02_MIE_11",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Pod mikroskopem widać bezkręgowca o wydłużonym ciele złożonym z powtarzających się odcinków. Do której grupy najprawdopodobniej należy?",
    "options": [
      "pierścienice",
      "płazińce",
      "nicienie",
      "ryby",
      "ssaki",
      "grzyby"
    ],
    "answer": 0,
    "explanation": "Powtarzające się odcinki ciała, czyli segmenty, są cechą pierścienic.",
    "image": "/img/r02_segmentacja_pierscienicy.jpg"
  },
  {
    "id": "R02_MIE_12",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Do której grupy należą pijawki?",
    "options": [
      "pierścienice",
      "płazińce",
      "nicienie",
      "mięczaki",
      "stawonogi",
      "kręgowce"
    ],
    "answer": 0,
    "explanation": "Pijawki, w tym pijawka lekarska i pijawka rybia, są przedstawicielami pierścienic."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które warunki panujące w jelicie cienkim żywiciela opisano jako ważne dla życia tasiemca?",
    "options": [
      "rytmiczne skurcze mięśni przesuwające treść pokarmową",
      "obecność enzymów trawiennych",
      "łatwy dostęp do strawionego pokarmu",
      "warunki beztlenowe",
      "duża ilość światła słonecznego",
      "wysoka zawartość soli morskiej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W jelicie cienkim zachodzą skurcze mięśni, działają enzymy trawienne, dostępny jest strawiony pokarm i panują warunki beztlenowe.",
    "image": "/img/r02_jelito_cienkie_tasiemiec.jpg"
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka średnia długość jelita cienkiego dorosłego człowieka została podana w opisie tasiemców?",
    "options": [
      "około 6 m",
      "około 1 cm",
      "około 2 cm",
      "około 1 mm",
      "około 40 cm",
      "około 2 km"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że średnia długość jelita cienkiego u dorosłego człowieka wynosi około 6 metrów."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką długość może osiągać ciało tasiemca według schematu budowy?",
    "options": [
      "2–10 m",
      "1 mm",
      "około 1 cm",
      "do 40 cm",
      "2 cm",
      "100 m"
    ],
    "answer": 0,
    "explanation": "Na schemacie budowy tasiemca podano, że jego płaskie i długie ciało może mieć 2–10 m."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Caenorhabditis elegans ma według tekstu zawsze dokładnie 959 komórek, a około jedną trzecią z nich stanowią komórki nerwowe.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że ten modelowy nicień jest zbudowany z 959 komórek, z czego około jedną trzecią stanowią komórki nerwowe."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Obrączkowaty odcinek ciała niektórych pierścienic, który wydziela śluz i uczestniczy w rozmnażaniu, to...",
    "options": null,
    "answer": "siodełko",
    "altAnswers": [
      "siodełko",
      "siodelko"
    ],
    "explanation": "Siodełko jest pogrubionym odcinkiem ciała dżdżownicy, ważnym w rozmnażaniu."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która pierścienica została wspomniana jako przysmak kulinarny w niektórych krajach?",
    "options": [
      "robak palolo",
      "pijawka rybia",
      "owsik ludzki",
      "glista ludzka",
      "mątwik ziemniaczany",
      "tasiemiec uzbrojony"
    ],
    "answer": 0,
    "explanation": "W części o znaczeniu pierścienic podano, że w niektórych krajach przysmakiem kulinarnym jest robak palolo."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na pastwisku pies pasterski rozsiewa z kałem człony tasiemca wypełnione jajami. U owiec larwy osiedlają się zwykle w mózgu i mogą powodować kręcenie się w miejscu. Który tasiemiec opisano w tej ciekawostce?",
    "options": [
      "tasiemiec kręćkowy",
      "tasiemiec nieuzbrojony",
      "tasiemiec uzbrojony",
      "bruzdogłowiec szeroki",
      "owsik ludzki",
      "węgorek octowy"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy tasiemca kręćkowego, którego żywicielem ostatecznym są najczęściej psy pasterskie, a pośrednim owce."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie ze znaczeniem.",
    "options": null,
    "left": [
      "rozwój prosty",
      "rozwój złożony",
      "samozapłodnienie",
      "zapłodnienie krzyżowe"
    ],
    "right": [
      "z jaja rozwija się osobnik młodociany podobny do dorosłego",
      "występuje larwa niepodobna do osobnika dorosłego",
      "połączenie gamet wytwarzanych przez ten sam organizm",
      "połączenie gamet między dwoma obojnakami"
    ],
    "answer": {
      "rozwój prosty": "z jaja rozwija się osobnik młodociany podobny do dorosłego",
      "rozwój złożony": "występuje larwa niepodobna do osobnika dorosłego",
      "samozapłodnienie": "połączenie gamet wytwarzanych przez ten sam organizm",
      "zapłodnienie krzyżowe": "połączenie gamet między dwoma obojnakami"
    },
    "explanation": "Słowniczek rozdziału rozróżnia typy rozwoju oraz dwa sposoby zapłodnienia u obojnaków."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Bezkręgowce, część 1",
  icon: "🪱",
  sectionOrder: [
  "Płazińce",
  "Nicienie",
  "Pierścienice",
  "Choroby pasożytnicze",
  "Powtórka mieszana",
  "Super trudne"
],
  sectionIcons: {
  "Płazińce": "🪱",
  "Nicienie": "🧵",
  "Pierścienice": "🪱",
  "Choroby pasożytnicze": "🧼",
  "Powtórka mieszana": "🔁",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
