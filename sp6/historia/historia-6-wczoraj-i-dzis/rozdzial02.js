// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DSK  = Demokracja szlachecka
//   FOL  = Folwark i handel zbożem
//   JAG  = Ostatni Jagiellonowie
//   REN  = Renesans w Polsce
//   RON  = Rzeczpospolita Obojga Narodów
//   TWE  = Tolerancja i wolna elekcja
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_DSK_01",
    "section": "Demokracja szlachecka",
    "type": "single_choice",
    "prompt": "Który organ podejmował najważniejsze decyzje państwowe w demokracji szlacheckiej?",
    "options": [
      "sejm walny",
      "sejmik ziemski",
      "senat",
      "izba poselska",
      "pospolite ruszenie",
      "rada monarsza"
    ],
    "answer": 0,
    "image": "r02_sejm_walny.jpg",
    "explanation": "Najważniejsze decyzje, między innymi o prawach, traktatach międzynarodowych i podatkach, podejmowano na sejmie walnym."
  },
  {
    "id": "R02_DSK_02",
    "section": "Demokracja szlachecka",
    "type": "multi_select",
    "prompt": "Zaznacz sprawy, o których decydowano na sejmie walnym.",
    "options": [
      "ustanawianie praw",
      "zawieranie traktatów międzynarodowych",
      "ustalanie wysokości podatków",
      "decydowanie o sprawach lokalnych",
      "wybieranie posłów na sejm walny",
      "ustalanie instrukcji dla posłów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sejm walny ustanawiał prawa, zatwierdzał i zawierał traktaty międzynarodowe oraz ustalał wysokość podatków. Sprawy lokalne i instrukcje dla posłów należały do sejmików ziemskich."
  },
  {
    "id": "R02_DSK_03",
    "section": "Demokracja szlachecka",
    "type": "true_false",
    "prompt": "Konstytucja Nihil novi z 1505 roku pozwalała królowi ustanawiać nowe prawa bez zgody sejmu.",
    "options": null,
    "answer": false,
    "explanation": "Nihil novi oznaczało, że król i jego następcy nie mogli stanowić nowych praw bez wspólnej zgody senatu i izby poselskiej."
  },
  {
    "id": "R02_DSK_04",
    "section": "Demokracja szlachecka",
    "type": "fill_in",
    "prompt": "Wojsko szlacheckie zwoływane w razie zagrożenia nazywano __________, a pierwsze obrady sejmu walnego odbyły się w roku __________.",
    "options": null,
    "answer": [
      "pospolitym ruszeniem",
      "1493"
    ],
    "altAnswers": [
      [
        "pospolitym ruszeniem",
        "pospolite ruszenie"
      ],
      [
        "1493",
        "1493 r."
      ]
    ],
    "explanation": "Wojsko szlacheckie nazywano pospolitym ruszeniem. Pierwsze obrady sejmu walnego odbyły się w 1493 roku."
  },
  {
    "id": "R02_DSK_05",
    "section": "Demokracja szlachecka",
    "type": "riddle",
    "prompt": "Jak nazywało się zgromadzenie szlachty z danego regionu, które decydowało o sprawach lokalnych i wybierało posłów na sejm walny?",
    "options": null,
    "answer": "sejmik ziemski",
    "altAnswers": [
      "sejmik ziemski",
      "sejmik"
    ],
    "explanation": "Takim zgromadzeniem był sejmik ziemski. Ustalał on także instrukcje dla wybranych posłów."
  },
  {
    "id": "R02_DSK_06",
    "section": "Demokracja szlachecka",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest grupą polskiej szlachty: magnateria, średnia szlachta, szlachta zagrodowa, gołota, mieszczaństwo.",
    "options": null,
    "answer": "mieszczaństwo",
    "explanation": "Magnateria, średnia szlachta, szlachta zagrodowa i gołota były grupami stanu szlacheckiego. Mieszczaństwo było odrębnym stanem."
  },
  {
    "id": "R02_DSK_07",
    "section": "Demokracja szlachecka",
    "type": "scenario",
    "prompt": "Zostałeś wybrany przez sejmik ziemski na posła. Przed wyjazdem otrzymujesz wskazówki określające, jak masz głosować na sejmie walnym. Jak nazywano takie wskazówki?",
    "options": [
      "instrukcje",
      "przywileje",
      "królewszczyzny",
      "konstytucje sejmowe",
      "pacta conventa",
      "statuty piotrkowskie"
    ],
    "answer": 0,
    "image": "r02_sejm_walny.jpg",
    "explanation": "Sejmiki ziemskie ustalały dla posłów instrukcje, a reprezentanci regionu mieli głosować zgodnie z otrzymanymi wskazówkami."
  },
  {
    "id": "R02_DSK_08",
    "section": "Demokracja szlachecka",
    "type": "match",
    "prompt": "Połącz grupę szlachty z właściwym opisem.",
    "options": null,
    "left": [
      "magnateria",
      "średnia szlachta",
      "szlachta zagrodowa",
      "gołota"
    ],
    "right": [
      "najbogatsi posiadacze ogromnych majątków",
      "właściciele jednej lub kilku wsi",
      "posiadacze niewielkich gospodarstw pracujący fizycznie",
      "szlachta nieposiadająca majątku"
    ],
    "answer": {
      "magnateria": "najbogatsi posiadacze ogromnych majątków",
      "średnia szlachta": "właściciele jednej lub kilku wsi",
      "szlachta zagrodowa": "posiadacze niewielkich gospodarstw pracujący fizycznie",
      "gołota": "szlachta nieposiadająca majątku"
    },
    "explanation": "Stan szlachecki był zróżnicowany majątkowo: od magnaterii posiadającej ogromne dobra po gołotę bez majątku."
  },
  {
    "id": "R02_DSK_09",
    "section": "Demokracja szlachecka",
    "type": "sort",
    "prompt": "Przyporządkuj działania do sejmu walnego albo sejmiku ziemskiego.",
    "options": null,
    "items": [
      "ustanawianie praw",
      "ustalanie wysokości podatków",
      "wybieranie posłów na sejm walny",
      "decydowanie o sprawach lokalnych",
      "ustalanie instrukcji dla posłów"
    ],
    "categories": [
      "sejm walny",
      "sejmik ziemski"
    ],
    "answer": {
      "sejm walny": [
        "ustanawianie praw",
        "ustalanie wysokości podatków"
      ],
      "sejmik ziemski": [
        "wybieranie posłów na sejm walny",
        "decydowanie o sprawach lokalnych",
        "ustalanie instrukcji dla posłów"
      ]
    },
    "explanation": "Sejm walny zajmował się najważniejszymi sprawami państwa, a sejmiki ziemskie sprawami lokalnymi oraz wyborem i instruowaniem posłów."
  },
  {
    "id": "R02_DSK_10",
    "section": "Demokracja szlachecka",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy działania posła wybranego na sejmiku ziemskim.",
    "options": null,
    "items": [
      "udział posła w obradach sejmu walnego",
      "wybór posła przez sejmik ziemski",
      "głosowanie zgodnie z otrzymanymi wskazówkami",
      "ustalenie instrukcji dla posła"
    ],
    "answer": [
      "wybór posła przez sejmik ziemski",
      "ustalenie instrukcji dla posła",
      "udział posła w obradach sejmu walnego",
      "głosowanie zgodnie z otrzymanymi wskazówkami"
    ],
    "explanation": "Sejmik najpierw wybierał posła i przekazywał mu instrukcje. Następnie poseł brał udział w sejmie walnym i głosował zgodnie z otrzymanymi wskazówkami."
  },
  {
    "id": "R02_FOL_01",
    "section": "Folwark i handel zbożem",
    "type": "single_choice",
    "prompt": "Co było główną przyczyną rozwoju folwarków szlacheckich pod koniec XV wieku?",
    "options": [
      "rosnące zapotrzebowanie na zboże",
      "spadek liczby ludności",
      "zakaz handlu z Gdańskiem",
      "likwidacja pańszczyzny",
      "zamknięcie szlaków rzecznych",
      "spadek znaczenia rolnictwa"
    ],
    "answer": 0,
    "image": "r02_folwark_szlachecki.jpg",
    "explanation": "Wzrost liczby ludności zwiększył w Polsce i Europie Zachodniej zapotrzebowanie na zboże. Szlachta chciała zarabiać na sprzedaży produktów rolnych, więc rozwijała folwarki."
  },
  {
    "id": "R02_FOL_02",
    "section": "Folwark i handel zbożem",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby, dzięki którym szlachta powiększała obszar pól folwarcznych.",
    "options": [
      "karczowanie lasów",
      "osuszanie bagien",
      "przyłączanie nieużytków",
      "zmniejszanie powierzchni pól",
      "oddawanie ziemi miastom",
      "zamiana pól w pastwiska"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nowe pola uzyskiwano przez karczowanie lasów, osuszanie bagien i przyłączanie nieużytków."
  },
  {
    "id": "R02_FOL_03",
    "section": "Folwark i handel zbożem",
    "type": "true_false",
    "prompt": "Pańszczyzna była płatną pracą chłopa na polu właściciela folwarku.",
    "options": null,
    "answer": false,
    "explanation": "Pańszczyzna była darmową pracą chłopa na polu właściciela folwarku w zamian za możliwość użytkowania jego ziemi."
  },
  {
    "id": "R02_FOL_04",
    "section": "Folwark i handel zbożem",
    "type": "fill_in",
    "prompt": "W 1466 roku Polska odzyskała __________ i dostęp do morza, a głównym szlakiem transportowym stała się __________.",
    "options": null,
    "answer": [
      "Pomorze Gdańskie",
      "Wisła"
    ],
    "altAnswers": [
      [
        "Pomorze Gdańskie",
        "Pomorza Gdańskiego"
      ],
      [
        "Wisła"
      ]
    ],
    "explanation": "Po odzyskaniu Pomorza Gdańskiego w 1466 roku Wisła stała się głównym szlakiem transportowym w państwie."
  },
  {
    "id": "R02_FOL_05",
    "section": "Folwark i handel zbożem",
    "type": "riddle",
    "prompt": "Jak nazywano statek rzeczny, którym spławiano zboże Wisłą do Gdańska?",
    "options": null,
    "answer": "szkuta",
    "altAnswers": [
      "szkuta",
      "szkuty"
    ],
    "image": "r02_szkuta_na_wisle.jpg",
    "explanation": "Zboże spławiano na statkach zwanych szkutami. Rejs z południa Polski do Gdańska mógł trwać kilka tygodni."
  },
  {
    "id": "R02_FOL_06",
    "section": "Folwark i handel zbożem",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie był typowym elementem folwarku szlacheckiego: dwór, młyn, spichlerz, stodoła, ratusz.",
    "options": null,
    "answer": "ratusz",
    "explanation": "W folwarku znajdowały się między innymi dwór, zabudowania gospodarcze, młyn, stodoła i spichlerz. Ratusz był budynkiem miejskim."
  },
  {
    "id": "R02_FOL_07",
    "section": "Folwark i handel zbożem",
    "type": "scenario",
    "prompt": "Zboże przywieziono z folwarku do miasta nad Wisłą i ma czekać na wysyłkę do Gdańska. W jakim budynku należy je przechować?",
    "options": [
      "spichlerz",
      "młyn",
      "dwór",
      "karczma",
      "browar",
      "stodoła"
    ],
    "answer": 0,
    "explanation": "Ziarno oczekujące na spław przechowywano w spichlerzach. Spichlerz służył do magazynowania zboża."
  },
  {
    "id": "R02_FOL_08",
    "section": "Folwark i handel zbożem",
    "type": "match",
    "prompt": "Połącz element folwarku z jego funkcją.",
    "options": null,
    "left": [
      "młyn",
      "stodoła",
      "spichlerz",
      "dwór"
    ],
    "right": [
      "mielenie zboża na mąkę",
      "młócenie zboża cepami",
      "magazynowanie ziarna",
      "siedziba właściciela folwarku"
    ],
    "answer": {
      "młyn": "mielenie zboża na mąkę",
      "stodoła": "młócenie zboża cepami",
      "spichlerz": "magazynowanie ziarna",
      "dwór": "siedziba właściciela folwarku"
    },
    "image": "r02_folwark_szlachecki.jpg",
    "explanation": "Młyn służył do mielenia zboża, stodoła do młócenia i przechowywania zapasów, spichlerz do magazynowania ziarna, a dwór był siedzibą właściciela."
  },
  {
    "id": "R02_FOL_09",
    "section": "Folwark i handel zbożem",
    "type": "sort",
    "prompt": "Przyporządkuj ograniczenia ze statutów piotrkowskich do mieszczan albo chłopów.",
    "options": null,
    "items": [
      "zakaz nabywania dóbr ziemskich",
      "zakaz sprawowania wysokich urzędów",
      "obowiązek płacenia cła od towarów",
      "tylko jeden chłop rocznie mógł opuścić wieś",
      "brak odwołania od wyroków sądu szlacheckiego"
    ],
    "categories": [
      "mieszczanie",
      "chłopi"
    ],
    "answer": {
      "mieszczanie": [
        "zakaz nabywania dóbr ziemskich",
        "zakaz sprawowania wysokich urzędów",
        "obowiązek płacenia cła od towarów"
      ],
      "chłopi": [
        "tylko jeden chłop rocznie mógł opuścić wieś",
        "brak odwołania od wyroków sądu szlacheckiego"
      ]
    },
    "explanation": "Statuty piotrkowskie ograniczały prawa obu grup. Mieszczanom utrudniono posiadanie ziemi, urzędy i handel, a chłopom możliwość opuszczania wsi oraz odwołania od sądów szlacheckich."
  },
  {
    "id": "R02_FOL_10",
    "section": "Folwark i handel zbożem",
    "type": "sequence",
    "prompt": "Ułóż drogę zboża od folwarku do portu w Gdańsku.",
    "options": null,
    "items": [
      "załadunek zboża na szkutę",
      "przechowanie ziarna w spichlerzu nad rzeką",
      "spław Wisłą do Gdańska",
      "zebranie zboża w folwarku",
      "zwiezienie zboża do miasta nad rzeką"
    ],
    "answer": [
      "zebranie zboża w folwarku",
      "zwiezienie zboża do miasta nad rzeką",
      "przechowanie ziarna w spichlerzu nad rzeką",
      "załadunek zboża na szkutę",
      "spław Wisłą do Gdańska"
    ],
    "image": "r02_szkuta_na_wisle.jpg",
    "explanation": "Zboże zwożono z folwarku do miasta nad rzeką, przechowywano w spichlerzu, ładowano na szkutę i spławiano Wisłą do Gdańska."
  },
  {
    "id": "R02_JAG_01",
    "section": "Ostatni Jagiellonowie",
    "type": "single_choice",
    "prompt": "Który król Polski przyjął w 1525 roku hołd lenny Albrechta Hohenzollerna?",
    "options": [
      "Zygmunt I Stary",
      "Zygmunt II August",
      "Kazimierz Jagiellończyk",
      "Jan Olbracht",
      "Henryk Walezy",
      "Stanisław August Poniatowski"
    ],
    "answer": 0,
    "image": "r02_hold_pruski.jpg",
    "explanation": "Hołd pruski odbył się w 1525 roku w Krakowie. Albrecht Hohenzollern złożył go Zygmuntowi I Staremu."
  },
  {
    "id": "R02_JAG_02",
    "section": "Ostatni Jagiellonowie",
    "type": "multi_select",
    "prompt": "Zaznacz skutki hołdu pruskiego i wcześniejszych decyzji Albrechta Hohenzollerna.",
    "options": [
      "powstanie Prus Książęcych",
      "uznanie zwierzchnictwa króla Polski przez Albrechta",
      "Królewiec został stolicą Prus Książęcych",
      "odbudowa państwa zakonnego w Prusach",
      "przeniesienie stolicy Prus do Krakowa",
      "przyłączenie Prus Książęcych bezpośrednio do Litwy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Dawne państwo zakonne stało się świeckimi Prusami Książęcymi. Albrecht został księciem pruskim, uznał zwierzchnictwo polskiego króla, a stolicą państwa był Królewiec."
  },
  {
    "id": "R02_JAG_03",
    "section": "Ostatni Jagiellonowie",
    "type": "true_false",
    "prompt": "Po zwycięstwie wojsk polsko-litewskich pod Orszą w 1514 roku Moskwa oddała Litwie Smoleńsk i wszystkie wcześniej zdobyte ziemie.",
    "options": null,
    "answer": false,
    "image": "r02_bitwa_pod_orsza.jpg",
    "explanation": "Bitwa pod Orszą powstrzymała dalsze podboje Moskwy, ale rozejm z 1522 roku pozostawił przy Wielkim Księstwie Moskiewskim wcześniej zdobyte ziemie."
  },
  {
    "id": "R02_JAG_04",
    "section": "Ostatni Jagiellonowie",
    "type": "fill_in",
    "prompt": "W 1514 roku wojska polskie i litewskie pokonały armię moskiewską pod __________, a w 1525 roku Albrecht Hohenzollern złożył królowi Polski __________.",
    "options": null,
    "answer": [
      "Orszą",
      "hołd lenny"
    ],
    "altAnswers": [
      [
        "Orszą",
        "Orsza",
        "pod Orszą"
      ],
      [
        "hołd lenny",
        "hołd pruski"
      ]
    ],
    "image": "r02_bitwa_pod_orsza.jpg",
    "explanation": "Bitwa pod Orszą rozegrała się w 1514 roku. Jedenaście lat później Albrecht Hohenzollern złożył hołd lenny Zygmuntowi I Staremu."
  },
  {
    "id": "R02_JAG_05",
    "section": "Ostatni Jagiellonowie",
    "type": "riddle",
    "prompt": "Jak nazywało się świeckie państwo utworzone w 1525 roku z dawnego państwa zakonu krzyżackiego w Prusach?",
    "options": null,
    "answer": "Prusy Książęce",
    "altAnswers": [
      "Prusy Książęce",
      "Prusy Ksiazece"
    ],
    "explanation": "Po sekularyzacji państwa zakonnego powstały Prusy Książęce ze stolicą w Królewcu."
  },
  {
    "id": "R02_JAG_06",
    "section": "Ostatni Jagiellonowie",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie brało udziału w wojnie o Inflanty rozpoczętej w 1563 roku: Rzeczpospolita, Szwecja, Dania, Rosja, Prusy Książęce.",
    "options": null,
    "answer": "Prusy Książęce",
    "explanation": "W wojnie o Inflanty walczyły Rzeczpospolita, Szwecja, Dania i Rosja. Prusy Książęce nie były stroną tego konfliktu."
  },
  {
    "id": "R02_JAG_07",
    "section": "Ostatni Jagiellonowie",
    "type": "scenario",
    "prompt": "Jest rok 1525. Na rynku w Krakowie dawny wielki mistrz zakonu krzyżackiego klęka przed królem Polski i otrzymuje sztandar z herbem swojego świeckiego księstwa. Jakie wydarzenie obserwujesz?",
    "options": [
      "hołd pruski",
      "unia lubelska",
      "pierwsza wolna elekcja",
      "bitwa pod Orszą",
      "konfederacja warszawska",
      "sejm walny"
    ],
    "answer": 0,
    "image": "r02_hold_pruski.jpg",
    "explanation": "To hołd pruski. Albrecht Hohenzollern uznał zwierzchnictwo Zygmunta I Starego jako świecki książę Prus Książęcych."
  },
  {
    "id": "R02_JAG_08",
    "section": "Ostatni Jagiellonowie",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem z czasów ostatnich Jagiellonów.",
    "options": null,
    "left": [
      "1514",
      "1519",
      "1521",
      "1525",
      "1563"
    ],
    "right": [
      "bitwa pod Orszą",
      "wybuch ostatniej wojny z Krzyżakami",
      "czteroletni rozejm z Krzyżakami",
      "hołd pruski",
      "wybuch wojny o Inflanty"
    ],
    "answer": {
      "1514": "bitwa pod Orszą",
      "1519": "wybuch ostatniej wojny z Krzyżakami",
      "1521": "czteroletni rozejm z Krzyżakami",
      "1525": "hołd pruski",
      "1563": "wybuch wojny o Inflanty"
    },
    "explanation": "Daty 1514, 1519, 1521, 1525 i 1563 wyznaczają ważne etapy wojen z Moskwą, Krzyżakami i rywalizacji o Inflanty."
  },
  {
    "id": "R02_JAG_09",
    "section": "Ostatni Jagiellonowie",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do Zygmunta I Starego albo Zygmunta II Augusta.",
    "options": null,
    "items": [
      "objął władzę w 1506 roku",
      "przyjął hołd pruski",
      "zmarł w 1548 roku",
      "objął władzę w 1548 roku",
      "za jego panowania wybuchła wojna o Inflanty"
    ],
    "categories": [
      "Zygmunt I Stary",
      "Zygmunt II August"
    ],
    "answer": {
      "Zygmunt I Stary": [
        "objął władzę w 1506 roku",
        "przyjął hołd pruski",
        "zmarł w 1548 roku"
      ],
      "Zygmunt II August": [
        "objął władzę w 1548 roku",
        "za jego panowania wybuchła wojna o Inflanty"
      ]
    },
    "explanation": "Zygmunt I Stary panował od 1506 do 1548 roku i przyjął hołd pruski. Jego syn Zygmunt II August objął władzę w 1548 roku i za jego panowania wybuchła wojna o Inflanty."
  },
  {
    "id": "R02_JAG_10",
    "section": "Ostatni Jagiellonowie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "hołd pruski",
      "wybuch wojny o Inflanty",
      "bitwa pod Orszą",
      "czteroletni rozejm z Krzyżakami",
      "wybuch ostatniej wojny z Krzyżakami"
    ],
    "answer": [
      "bitwa pod Orszą",
      "wybuch ostatniej wojny z Krzyżakami",
      "czteroletni rozejm z Krzyżakami",
      "hołd pruski",
      "wybuch wojny o Inflanty"
    ],
    "explanation": "Kolejność wyznaczają daty: Orsza 1514, początek wojny z Krzyżakami 1519, rozejm 1521, hołd pruski 1525 i wojna o Inflanty od 1563 roku."
  },
  {
    "id": "R02_REN_01",
    "section": "Renesans w Polsce",
    "type": "single_choice",
    "prompt": "Dlaczego XVI wiek określa się mianem złotego wieku w dziejach Polski?",
    "options": [
      "z powodu rozwoju gospodarczego i kulturalnego",
      "z powodu zaniku handlu zagranicznego",
      "z powodu likwidacji drukarni",
      "z powodu wygaśnięcia literatury polskiej",
      "z powodu zakazu studiów zagranicznych",
      "z powodu ograniczenia budownictwa"
    ],
    "answer": 0,
    "explanation": "Określenie złoty wiek wiąże się z intensywnym rozwojem gospodarczym i kulturalnym kraju w XVI stuleciu."
  },
  {
    "id": "R02_REN_02",
    "section": "Renesans w Polsce",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające przenikaniu i rozwojowi idei renesansowych w Polsce.",
    "options": [
      "podróże studentów po Europie",
      "podróże dyplomatów",
      "przyjazd włoskich architektów i budowniczych",
      "bogacenie się szlachty na handlu",
      "rozwój stałych drukarni",
      "zamknięcie uczelni zagranicznych dla Polaków"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Idee renesansowe przenosili między innymi studenci i dyplomaci podróżujący po Europie. Rozwój wspierali też włoscy architekci, bogacenie się szlachty oraz stałe drukarnie."
  },
  {
    "id": "R02_REN_03",
    "section": "Renesans w Polsce",
    "type": "true_false",
    "prompt": "Mikołaj Rej był pierwszym pisarzem, który tworzył wyłącznie w języku polskim.",
    "options": null,
    "answer": true,
    "explanation": "Mikołaj Rej tworzył tylko po polsku i podkreślał wartość języka ojczystego."
  },
  {
    "id": "R02_REN_04",
    "section": "Renesans w Polsce",
    "type": "fill_in",
    "prompt": "Pierwszego pełnego tłumaczenia Biblii na język polski dokonał __________, a dzieło O poprawie Rzeczypospolitej napisał __________.",
    "options": null,
    "answer": [
      "Jakub Wujek z Wągrowca",
      "Andrzej Frycz Modrzewski"
    ],
    "altAnswers": [
      [
        "Jakub Wujek z Wągrowca",
        "Jakub Wujek",
        "Wujek"
      ],
      [
        "Andrzej Frycz Modrzewski",
        "Frycz Modrzewski",
        "Modrzewski"
      ]
    ],
    "explanation": "Pełny przekład Biblii przygotował Jakub Wujek z Wągrowca. Autorem politycznego dzieła O poprawie Rzeczypospolitej był Andrzej Frycz Modrzewski."
  },
  {
    "id": "R02_REN_05",
    "section": "Renesans w Polsce",
    "type": "riddle",
    "prompt": "Pochodził z Torunia, studiował między innymi prawo i medycynę, a zasłynął teorią, że Ziemia i inne planety krążą wokół Słońca. Kto to?",
    "options": null,
    "answer": "Mikołaj Kopernik",
    "altAnswers": [
      "Mikołaj Kopernik",
      "Kopernik"
    ],
    "image": "r02_mikolaj_kopernik.jpg",
    "explanation": "Mikołaj Kopernik przedstawił heliocentryczny obraz Układu Słonecznego i opisał odkrycie w dziele O obrotach sfer niebieskich."
  },
  {
    "id": "R02_REN_06",
    "section": "Renesans w Polsce",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie należy do grona polskich twórców i uczonych renesansu: Mikołaj Rej, Jan Kochanowski, Andrzej Frycz Modrzewski, Mikołaj Kopernik, Albrecht Hohenzollern.",
    "options": null,
    "answer": "Albrecht Hohenzollern",
    "explanation": "Rej, Kochanowski, Modrzewski i Kopernik są przedstawicielami polskiego odrodzenia. Albrecht Hohenzollern występuje w związku z hołdem pruskim."
  },
  {
    "id": "R02_REN_07",
    "section": "Renesans w Polsce",
    "type": "scenario",
    "prompt": "Spacerujesz po renesansowym Wawelu i oglądasz krużganki oparte na wąskich kolumnach. Którą budowlę wzniesiono w tym samym stylu przy katedrze wawelskiej?",
    "options": [
      "kaplicę Zygmuntowską",
      "Starą Synagogę",
      "Kościół Pokoju",
      "bazylikę Świętego Krzyża",
      "spichlerz gdański",
      "szopę senatorską"
    ],
    "answer": 0,
    "image": "r02_wawel_renesansowy.jpg",
    "explanation": "Za Zygmunta I Starego w stylu renesansowym przebudowano zamek na Wawelu, a przy katedrze wzniesiono kaplicę Zygmuntowską."
  },
  {
    "id": "R02_REN_08",
    "section": "Renesans w Polsce",
    "type": "match",
    "prompt": "Połącz postać z jej dokonaniem.",
    "options": null,
    "left": [
      "Mikołaj Rej",
      "Jan Kochanowski",
      "Andrzej Frycz Modrzewski",
      "Jakub Wujek z Wągrowca"
    ],
    "right": [
      "tworzył wyłącznie w języku polskim",
      "pisał fraszki o ludzkich wadach i cnotach",
      "napisał O poprawie Rzeczypospolitej",
      "dokonał pełnego przekładu Biblii na język polski"
    ],
    "answer": {
      "Mikołaj Rej": "tworzył wyłącznie w języku polskim",
      "Jan Kochanowski": "pisał fraszki o ludzkich wadach i cnotach",
      "Andrzej Frycz Modrzewski": "napisał O poprawie Rzeczypospolitej",
      "Jakub Wujek z Wągrowca": "dokonał pełnego przekładu Biblii na język polski"
    },
    "explanation": "Rej tworzył wyłącznie po polsku, Kochanowski pisał fraszki, Modrzewski zajmował się pisarstwem politycznym, a Wujek przełożył całą Biblię na język polski."
  },
  {
    "id": "R02_REN_09",
    "section": "Renesans w Polsce",
    "type": "sort",
    "prompt": "Przyporządkuj postacie do dziedziny, z którą są związane.",
    "options": null,
    "items": [
      "Mikołaj Rej",
      "Jan Kochanowski",
      "Andrzej Frycz Modrzewski",
      "Jakub Wujek z Wągrowca",
      "Mikołaj Kopernik",
      "Galileusz",
      "Bartłomiej Berrecci",
      "Bona Sforza"
    ],
    "categories": [
      "literatura i piśmiennictwo",
      "astronomia",
      "Wawel i mecenat"
    ],
    "answer": {
      "literatura i piśmiennictwo": [
        "Mikołaj Rej",
        "Jan Kochanowski",
        "Andrzej Frycz Modrzewski",
        "Jakub Wujek z Wągrowca"
      ],
      "astronomia": [
        "Mikołaj Kopernik",
        "Galileusz"
      ],
      "Wawel i mecenat": [
        "Bartłomiej Berrecci",
        "Bona Sforza"
      ]
    },
    "explanation": "Polski renesans rozwijał literaturę i piśmiennictwo, astronomię oraz sztukę i architekturę dworską."
  },
  {
    "id": "R02_REN_10",
    "section": "Renesans w Polsce",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z polskim renesansem w kolejności chronologicznej.",
    "options": null,
    "items": [
      "publikacja O obrotach sfer niebieskich",
      "przybycie Bony Sforzy do Polski",
      "ukazanie się Biblii Wujka",
      "pierwszy dźwięk dzwonu Zygmunt",
      "rozpoczęcie budowy kaplicy Zygmuntowskiej"
    ],
    "answer": [
      "przybycie Bony Sforzy do Polski",
      "rozpoczęcie budowy kaplicy Zygmuntowskiej",
      "pierwszy dźwięk dzwonu Zygmunt",
      "publikacja O obrotach sfer niebieskich",
      "ukazanie się Biblii Wujka"
    ],
    "image": "r02_wawel_renesansowy.jpg",
    "explanation": "Bona przybyła do Polski w 1518 roku, budowę kaplicy Zygmuntowskiej rozpoczęto w 1519 roku, dzwon Zygmunt zabrzmiał po raz pierwszy w 1521 roku, dzieło Kopernika wydano w 1543 roku, a Biblia Wujka ukazała się w 1599 roku."
  },
  {
    "id": "R02_RON_01",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "single_choice",
    "prompt": "Kiedy i gdzie podpisano unię lubelską?",
    "options": [
      "1 lipca 1569 roku w Lublinie",
      "1385 roku w Krewie",
      "1501 roku w Mielniku",
      "1525 roku w Krakowie",
      "1548 roku w Wilnie",
      "1573 roku w Warszawie"
    ],
    "answer": 0,
    "image": "r02_unia_lubelska.jpg",
    "explanation": "Uroczysty akt unii lubelskiej podpisano 1 lipca 1569 roku w Lublinie."
  },
  {
    "id": "R02_RON_02",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "multi_select",
    "prompt": "Zaznacz elementy wspólne dla Polski i Litwy po unii lubelskiej.",
    "options": [
      "władca",
      "sejm",
      "polityka zagraniczna",
      "moneta",
      "wojsko",
      "skarb"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po 1569 roku wspólne były między innymi władca, sejm, senat, polityka zagraniczna i moneta. Odrębne pozostały między innymi wojsko i skarb."
  },
  {
    "id": "R02_RON_03",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "true_false",
    "prompt": "Po unii lubelskiej Polska i Litwa miały wspólne wojsko, skarb, sądy i urzędy.",
    "options": null,
    "answer": false,
    "explanation": "Wojsko, skarb, sądy i urzędy pozostały odrębne. Wspólne były władca, sejm i senat, polityka zagraniczna oraz moneta."
  },
  {
    "id": "R02_RON_04",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "fill_in",
    "prompt": "Królestwo Polskie w Rzeczypospolitej Obojga Narodów nazywano __________, a drugą prowincją było __________.",
    "options": null,
    "answer": [
      "Koroną",
      "Wielkie Księstwo Litewskie"
    ],
    "altAnswers": [
      [
        "Koroną",
        "Korona"
      ],
      [
        "Wielkie Księstwo Litewskie",
        "Wielkiego Księstwa Litewskiego"
      ]
    ],
    "explanation": "Rzeczpospolita składała się z Królestwa Polskiego zwanego Koroną oraz Wielkiego Księstwa Litewskiego."
  },
  {
    "id": "R02_RON_05",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "riddle",
    "prompt": "Jak nazywa się związek Polski i Litwy ustanowiony w 1569 roku, w którym oba kraje tworzyły jedno państwo, ale zachowały część odrębnych instytucji?",
    "options": null,
    "answer": "unia realna",
    "altAnswers": [
      "unia realna",
      "unią realną"
    ],
    "explanation": "Unię lubelską określa się jako unię realną. Była ściślejsza od wcześniejszej unii personalnej."
  },
  {
    "id": "R02_RON_06",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "odd_one_out",
    "prompt": "Wskaż grupę, która nie należała do głównych grup ludności Rzeczypospolitej Obojga Narodów: Polacy, Litwini, Rusini, Żydzi, Niemcy, Ormianie, Tatarzy, Szwedzi.",
    "options": null,
    "answer": "Szwedzi",
    "explanation": "Do głównych grup ludności Rzeczypospolitej Obojga Narodów należeli Polacy, Litwini, Rusini, Żydzi, Niemcy, Ormianie i Tatarzy. Szwedzi nie byli zaliczani do tych grup."
  },
  {
    "id": "R02_RON_07",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "scenario",
    "prompt": "Podczas sejmu w Lublinie część litewskich magnatów opuszcza obrady, sprzeciwiając się ścisłej unii. Zygmunt II August włącza do Polski Podlasie, Wołyń i Ukrainę. Jaki był bezpośredni skutek tej decyzji dla obrad?",
    "options": [
      "litewscy magnaci wrócili na obrady",
      "sejm został rozwiązany na stałe",
      "Polska zerwała związek z Litwą",
      "król zrzekł się tronu",
      "wojna o Inflanty zakończyła się natychmiast",
      "przeniesiono obrady do Krakowa"
    ],
    "answer": 0,
    "image": "r02_unia_lubelska.jpg",
    "explanation": "Włączenie tych ziem do Polski zmusiło litewskich magnatów do powrotu na obrady sejmu, po czym osiągnięto porozumienie."
  },
  {
    "id": "R02_RON_08",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "match",
    "prompt": "Połącz grupę lub osobę z jej stosunkiem do ściślejszego związku Polski i Litwy.",
    "options": null,
    "left": [
      "litewscy magnaci",
      "średnia szlachta litewska",
      "polscy magnaci",
      "Zygmunt II August"
    ],
    "right": [
      "obawa przed utratą uprzywilejowanej pozycji",
      "nadzieja na uzyskanie przywilejów jak szlachta polska",
      "nadzieja na powiększenie majątków na wschodzie",
      "brak męskiego następcy zwiększał ryzyko rozpadu związku"
    ],
    "answer": {
      "litewscy magnaci": "obawa przed utratą uprzywilejowanej pozycji",
      "średnia szlachta litewska": "nadzieja na uzyskanie przywilejów jak szlachta polska",
      "polscy magnaci": "nadzieja na powiększenie majątków na wschodzie",
      "Zygmunt II August": "brak męskiego następcy zwiększał ryzyko rozpadu związku"
    },
    "explanation": "Przed unią interesy grup były różne: litewscy magnaci obawiali się utraty pozycji, średnia szlachta litewska liczyła na polskie przywileje, polscy magnaci na nowe majątki, a brak męskiego następcy Zygmunta II Augusta wzmacniał potrzebę trwałego związku."
  },
  {
    "id": "R02_RON_09",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "sort",
    "prompt": "Przyporządkuj elementy ustroju po unii lubelskiej do wspólnych albo odrębnych.",
    "options": null,
    "items": [
      "władca",
      "sejm",
      "senat",
      "polityka zagraniczna",
      "moneta",
      "wojsko",
      "skarb",
      "sądy",
      "urzędy"
    ],
    "categories": [
      "wspólne",
      "odrębne"
    ],
    "answer": {
      "wspólne": [
        "władca",
        "sejm",
        "senat",
        "polityka zagraniczna",
        "moneta"
      ],
      "odrębne": [
        "wojsko",
        "skarb",
        "sądy",
        "urzędy"
      ]
    },
    "explanation": "Unia realna łączyła oba państwa wspólnym władcą, parlamentem, polityką zagraniczną i monetą, ale pozostawiała odrębne wojska, skarby, sądy i urzędy."
  },
  {
    "id": "R02_RON_10",
    "section": "Rzeczpospolita Obojga Narodów",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia prowadzące od wcześniejszego związku Polski i Litwy do unii lubelskiej.",
    "options": null,
    "items": [
      "objęcie władzy przez Zygmunta II Augusta",
      "unia lubelska",
      "unia w Krewie",
      "próba unii mielnickiej"
    ],
    "answer": [
      "unia w Krewie",
      "próba unii mielnickiej",
      "objęcie władzy przez Zygmunta II Augusta",
      "unia lubelska"
    ],
    "explanation": "Polskę i Litwę łączyła unia personalna od 1385 roku. W 1501 roku podjęto nieudaną próbę unii mielnickiej, Zygmunt II August objął władzę w 1548 roku, a unię realną zawarto w 1569 roku."
  },
  {
    "id": "R02_TWE_01",
    "section": "Tolerancja i wolna elekcja",
    "type": "single_choice",
    "prompt": "Który dokument uchwalony w 1573 roku zapewniał w Rzeczypospolitej tolerancję religijną i chronił innowierców?",
    "options": [
      "Akt konfederacji warszawskiej",
      "Artykuły henrykowskie",
      "pacta conventa",
      "konstytucja Nihil novi",
      "statuty piotrkowskie",
      "akt unii lubelskiej"
    ],
    "answer": 0,
    "explanation": "Akt konfederacji warszawskiej uchwalono w 1573 roku, aby zapobiec konfliktom religijnym i zapewnić innowiercom swobodę wyznania."
  },
  {
    "id": "R02_TWE_02",
    "section": "Tolerancja i wolna elekcja",
    "type": "multi_select",
    "prompt": "Zaznacz religie i wyznania obecne w Rzeczypospolitej Obojga Narodów.",
    "options": [
      "katolicyzm",
      "prawosławie",
      "judaizm",
      "islam",
      "kalwinizm",
      "unia realna"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r02_wyznania_rzeczypospolitej.jpg",
    "explanation": "Rzeczpospolita była wielowyznaniowa. Obok katolicyzmu występowały prawosławie, judaizm, islam oraz wyznania protestanckie, między innymi kalwinizm."
  },
  {
    "id": "R02_TWE_03",
    "section": "Tolerancja i wolna elekcja",
    "type": "true_false",
    "prompt": "Akt konfederacji warszawskiej zrównywał w prawach religijnych wszystkich mieszkańców Rzeczypospolitej bez względu na stan społeczny.",
    "options": null,
    "answer": false,
    "explanation": "Akt zapewniał wolność wyznania i zrównywał w prawach katolików oraz wywodzących się ze szlachty przedstawicieli innych wyznań. Nie oznaczało to pełnego zrównania wszystkich mieszkańców bez względu na stan."
  },
  {
    "id": "R02_TWE_04",
    "section": "Tolerancja i wolna elekcja",
    "type": "fill_in",
    "prompt": "W okresie bezkrólewia funkcję interrexa pełnił __________, a pierwsza wolna elekcja odbyła się w roku __________.",
    "options": null,
    "answer": [
      "prymas Polski",
      "1573"
    ],
    "altAnswers": [
      [
        "prymas Polski",
        "prymas",
        "arcybiskup gnieźnieński"
      ],
      [
        "1573",
        "1573 r."
      ]
    ],
    "image": "r02_wolna_elekcja.jpg",
    "explanation": "Od 1573 roku interrexem był prymas Polski, czyli arcybiskup gnieźnieński. Pierwsza wolna elekcja odbyła się w 1573 roku."
  },
  {
    "id": "R02_TWE_05",
    "section": "Tolerancja i wolna elekcja",
    "type": "riddle",
    "prompt": "Jak nazywała się umowa zawierająca osobiste zobowiązania przyszłego króla elekcyjnego wobec Rzeczypospolitej i jej mieszkańców?",
    "options": null,
    "answer": "pacta conventa",
    "altAnswers": [
      "pacta conventa",
      "pakta konwenta"
    ],
    "explanation": "Osobiste zobowiązania monarchy zapisywano w pacta conventa. Każdy król elekcyjny musiał je zaprzysiąc."
  },
  {
    "id": "R02_TWE_06",
    "section": "Tolerancja i wolna elekcja",
    "type": "odd_one_out",
    "prompt": "Wskaż wyznanie, które nie należało do protestanckich nurtów obecnych w Rzeczypospolitej: luteranizm, kalwinizm, arianizm, prawosławie.",
    "options": null,
    "answer": "prawosławie",
    "explanation": "Luteranizm, kalwinizm i arianizm zaliczano do nurtów protestanckich. Prawosławie było odrębnym wyznaniem chrześcijańskim."
  },
  {
    "id": "R02_TWE_07",
    "section": "Tolerancja i wolna elekcja",
    "type": "scenario",
    "prompt": "Zygmunt II August umiera w 1572 roku bez potomka. Państwo wchodzi w okres bezkrólewia. Kto zgodnie z ustalonymi zasadami obejmuje wtedy funkcję interrexa?",
    "options": [
      "prymas Polski",
      "wielki mistrz krzyżacki",
      "marszałek sejmu",
      "wojewoda krakowski",
      "król Francji",
      "hetman"
    ],
    "answer": 0,
    "image": "r02_wolna_elekcja.jpg",
    "explanation": "Funkcję interrexa powierzano prymasowi Polski. Sprawował ją w czasie między śmiercią jednego króla a objęciem tronu przez następnego."
  },
  {
    "id": "R02_TWE_08",
    "section": "Tolerancja i wolna elekcja",
    "type": "match",
    "prompt": "Połącz grupę z religią lub wyznaniem szczególnie z nią związanym.",
    "options": null,
    "left": [
      "Żydzi",
      "Tatarzy",
      "niemieckojęzyczni mieszczanie",
      "część szlachty Małopolski i Litwy"
    ],
    "right": [
      "judaizm",
      "islam",
      "luteranizm",
      "kalwinizm"
    ],
    "answer": {
      "Żydzi": "judaizm",
      "Tatarzy": "islam",
      "niemieckojęzyczni mieszczanie": "luteranizm",
      "część szlachty Małopolski i Litwy": "kalwinizm"
    },
    "image": "r02_wyznania_rzeczypospolitej.jpg",
    "explanation": "Wielowyznaniowość Rzeczypospolitej miała także wymiar społeczny i narodowościowy: Żydzi wyznawali judaizm, Tatarzy islam, luteranizm był popularny wśród niemieckojęzycznych mieszczan, a kalwinizm wśród części szlachty Małopolski i Litwy."
  },
  {
    "id": "R02_TWE_09",
    "section": "Tolerancja i wolna elekcja",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do tolerancji religijnej albo wolnej elekcji.",
    "options": null,
    "items": [
      "Akt konfederacji warszawskiej",
      "określenie państwo bez stosów",
      "napływ uchodźców religijnych",
      "interrex",
      "Henryk Walezy",
      "Artykuły henrykowskie",
      "pacta conventa"
    ],
    "categories": [
      "tolerancja religijna",
      "wolna elekcja"
    ],
    "answer": {
      "tolerancja religijna": [
        "Akt konfederacji warszawskiej",
        "określenie państwo bez stosów",
        "napływ uchodźców religijnych"
      ],
      "wolna elekcja": [
        "interrex",
        "Henryk Walezy",
        "Artykuły henrykowskie",
        "pacta conventa"
      ]
    },
    "explanation": "W 1573 roku uregulowano zarówno swobodę wyznania, jak i sposób wyboru monarchy po wygaśnięciu dynastii Jagiellonów."
  },
  {
    "id": "R02_TWE_10",
    "section": "Tolerancja i wolna elekcja",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy zmiany władcy po wprowadzeniu wolnej elekcji.",
    "options": null,
    "items": [
      "zaprzysiężenie Artykułów henrykowskich i pacta conventa",
      "objęcie funkcji interrexa",
      "koronacja nowego króla",
      "śmierć lub detronizacja władcy",
      "wybór nowego władcy",
      "zwołanie sejmu elekcyjnego"
    ],
    "answer": [
      "śmierć lub detronizacja władcy",
      "objęcie funkcji interrexa",
      "zwołanie sejmu elekcyjnego",
      "wybór nowego władcy",
      "zaprzysiężenie Artykułów henrykowskich i pacta conventa",
      "koronacja nowego króla"
    ],
    "image": "r02_wolna_elekcja.jpg",
    "explanation": "Po śmierci lub detronizacji władcy rozpoczynało się bezkrólewie z interrexem. Następnie zwoływano sejm elekcyjny, wybierano króla, zaprzysięgano Artykuły henrykowskie i pacta conventa, a potem następowała koronacja."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ilu posłów liczyła izba poselska sejmu walnego?",
    "options": [
      "od 140 do 170",
      "od 40 do 70",
      "od 80 do 100",
      "od 200 do 230",
      "od 300 do 350",
      "ponad 500"
    ],
    "answer": 0,
    "image": "r02_sejm_walny.jpg",
    "explanation": "Izba poselska, czyli niższa izba sejmu walnego, liczyła od 140 do 170 posłów, głównie przedstawicieli średniej szlachty."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Szlachta stanowiła około __________ społeczeństwa Rzeczypospolitej, a gospodarstwo średnio zamożnego szlachcica obejmowało najczęściej __________ hektarów ziemi uprawnej.",
    "options": null,
    "answer": [
      "6-10 procent",
      "60-80"
    ],
    "altAnswers": [
      [
        "6-10 procent",
        "6-10%"
      ],
      [
        "60-80",
        "60-80 ha"
      ]
    ],
    "image": "r02_folwark_szlachecki.jpg",
    "explanation": "Szlachta stanowiła około 6-10 procent społeczeństwa. Średnio zamożne gospodarstwo szlacheckie miało najczęściej 60-80 hektarów ziemi uprawnej."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element dawnego systemu parlamentarnego z precyzyjnym opisem.",
    "options": null,
    "left": [
      "król",
      "senat",
      "izba poselska",
      "sejmik ziemski"
    ],
    "right": [
      "jednoosobowy odrębny stan sejmujący",
      "wyższa izba wywodząca się z rady monarszej",
      "niższa izba licząca od 140 do 170 posłów",
      "zgromadzenie szlachty z danego regionu"
    ],
    "answer": {
      "król": "jednoosobowy odrębny stan sejmujący",
      "senat": "wyższa izba wywodząca się z rady monarszej",
      "izba poselska": "niższa izba licząca od 140 do 170 posłów",
      "sejmik ziemski": "zgromadzenie szlachty z danego regionu"
    },
    "explanation": "Król był osobnym stanem sejmującym, senat wyłonił się z rady monarszej, izba poselska była niższą izbą sejmu, a sejmik ziemski był zgromadzeniem szlachty regionalnej."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż poniższe wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "unia lubelska",
      "pierwsza wolna elekcja",
      "uchwalenie Nihil novi",
      "bitwa pod Orszą",
      "pierwsze obrady sejmu walnego",
      "hołd pruski"
    ],
    "answer": [
      "pierwsze obrady sejmu walnego",
      "uchwalenie Nihil novi",
      "bitwa pod Orszą",
      "hołd pruski",
      "unia lubelska",
      "pierwsza wolna elekcja"
    ],
    "explanation": "Chronologia jest następująca: sejm walny 1493, Nihil novi 1505, Orsza 1514, hołd pruski 1525, unia lubelska 1569, pierwsza wolna elekcja 1573."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz towary wysyłane z portu gdańskiego do Europy Zachodniej w XVI wieku.",
    "options": [
      "zboże",
      "mięso",
      "skóry zwierzęce",
      "miody",
      "drewno",
      "jedwabie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r02_szkuta_na_wisle.jpg",
    "explanation": "Z Gdańska wysyłano zboże, mięso, skóry zwierzęce, miody i drewno. Do kraju sprowadzano między innymi jedwabie, wina i cenne przyprawy."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się florencki rzeźbiarz i architekt, który w latach 1519-1533 kierował zespołem wznoszącym kaplicę Zygmuntowską na Wawelu?",
    "options": null,
    "answer": "Bartłomiej Berrecci",
    "altAnswers": [
      "Bartłomiej Berrecci",
      "Berrecci"
    ],
    "image": "r02_wawel_renesansowy.jpg",
    "explanation": "Budową kaplicy Zygmuntowskiej kierował Bartłomiej Berrecci, florencki rzeźbiarz i architekt."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Dzwon Zygmunt odlano z mołdawskich armat zdobytych w bitwie pod Obertynem.",
    "options": null,
    "answer": false,
    "explanation": "To popularna opowieść, ale nie może być prawdziwa: dzwon zawieszono i po raz pierwszy uruchomiono w 1521 roku, a bitwa pod Obertynem rozegrała się dopiero w 1531 roku."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która z tych ziem nie została włączona do Polski przez Zygmunta II Augusta podczas kryzysu obrad unijnych w 1569 roku?",
    "options": [
      "Podlasie",
      "Wołyń",
      "Ukraina",
      "Inflanty"
    ],
    "answer": 3,
    "image": "r02_unia_lubelska.jpg",
    "explanation": "Król włączył do Polski Podlasie, Wołyń i Ukrainę. Inflanty nie należały do tej grupy ziem."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś niemieckojęzycznym mieszczaninem w jednym z dużych miast Rzeczypospolitej w XVI wieku. Które wyznanie reformacyjne było szczególnie rozpowszechnione w tej grupie?",
    "options": [
      "luteranizm",
      "kalwinizm",
      "arianizm",
      "prawosławie"
    ],
    "answer": 0,
    "image": "r02_wyznania_rzeczypospolitej.jpg",
    "explanation": "Luteranizm rozpowszechnił się głównie wśród niemieckojęzycznych mieszczan, między innymi w Gdańsku, Toruniu i Elblągu."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Najsłynniejszym ośrodkiem braci polskich był __________, a działająca tam renomowana szkoła średnia nosiła nazwę __________.",
    "options": null,
    "answer": [
      "Raków",
      "Akademia Rakowska"
    ],
    "altAnswers": [
      [
        "Raków",
        "Rakow"
      ],
      [
        "Akademia Rakowska",
        "Akademii Rakowskiej"
      ]
    ],
    "explanation": "Najsłynniejszym ośrodkiem arian był Raków. Działała tam Akademia Rakowska, do której przybywali także uczniowie z zagranicy."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj grupy mieszkańców do wyznania szczególnie z nimi kojarzonego.",
    "options": null,
    "items": [
      "Żydzi",
      "niemieckojęzyczni mieszczanie",
      "część szlachty Małopolski i Litwy",
      "Rusini"
    ],
    "categories": [
      "judaizm",
      "luteranizm",
      "kalwinizm",
      "prawosławie"
    ],
    "answer": {
      "judaizm": [
        "Żydzi"
      ],
      "luteranizm": [
        "niemieckojęzyczni mieszczanie"
      ],
      "kalwinizm": [
        "część szlachty Małopolski i Litwy"
      ],
      "prawosławie": [
        "Rusini"
      ]
    },
    "explanation": "W Rzeczypospolitej Żydzi wyznawali judaizm, niemieckojęzyczni mieszczanie często luteranizm, część szlachty Małopolski i Litwy kalwinizm, a Rusini przede wszystkim prawosławie."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zasady zapisane w Artykułach henrykowskich.",
    "options": [
      "zachowanie dotychczasowych przywilejów szlachty",
      "rezygnacja z dziedziczenia tronu przez następców króla",
      "regularne zwoływanie sejmów",
      "przestrzeganie tolerancji religijnej",
      "zakaz nakładania podatków bez zgody szlachty",
      "osobiste obietnice gospodarcze konkretnego kandydata"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r02_wolna_elekcja.jpg",
    "explanation": "Artykuły henrykowskie gwarantowały przywileje szlachty, wykluczały dziedziczenie tronu, nakazywały regularne zwoływanie sejmów i przestrzeganie tolerancji religijnej oraz ograniczały możliwość nakładania podatków i zwoływania pospolitego ruszenia bez zgody szlachty."
  }
];

const chapter = {
  id: "r02",
  number: 2,
  title: "W Rzeczypospolitej szlacheckiej",
  icon: "🦅",
  sectionOrder: [
    "Demokracja szlachecka",
    "Folwark i handel zbożem",
    "Ostatni Jagiellonowie",
    "Renesans w Polsce",
    "Rzeczpospolita Obojga Narodów",
    "Tolerancja i wolna elekcja"
  ],
  sectionIcons: {
    "Demokracja szlachecka": "⚖️",
    "Folwark i handel zbożem": "🌾",
    "Ostatni Jagiellonowie": "👑",
    "Renesans w Polsce": "🎨",
    "Rzeczpospolita Obojga Narodów": "🤝",
    "Tolerancja i wolna elekcja": "🗳️"
  },
  exercises: ALL_EXERCISES
};

export default chapter;
