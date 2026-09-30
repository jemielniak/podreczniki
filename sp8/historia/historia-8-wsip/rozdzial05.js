// Skróty sekcji (do identyfikatorów ćwiczeń):
//   GOM  = Odwilż i rządy Gomułki
//   KOS  = Państwo i Kościół
//   BUN  = Bunty społeczne 1968–1970
//   GIE  = Gierek i narodziny opozycji
//   SOL  = Rewolucja Solidarności
//   WOJ  = Stan wojenny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_GOM_01",
    "section": "Odwilż i rządy Gomułki",
    "type": "single_choice",
    "prompt": "Jak nazywano odchodzenie od modelu stalinowskiego po śmierci Józefa Stalina?",
    "options": [
      "destalinizacja",
      "kolektywizacja",
      "industrializacja",
      "nacjonalizacja",
      "internowanie",
      "militaryzacja"
    ],
    "answer": 0,
    "explanation": "Odchodzenie od modelu stalinowskiego określano jako destalinizację. W Polsce proces ten początkowo przebiegał powoli."
  },
  {
    "id": "R05_GOM_02",
    "section": "Odwilż i rządy Gomułki",
    "type": "multi_select",
    "prompt": "Zaznacz przejawy destalinizacji w Polsce w połowie lat 50. XX w.",
    "options": [
      "zmniejszenie skali terroru",
      "ograniczenie inwigilacji obywateli",
      "amnestia dla więźniów politycznych",
      "złagodzenie cenzury",
      "utworzenie ZOMO",
      "wprowadzenie stanu wojennego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Destalinizacja oznaczała m.in. ograniczenie terroru i inwigilacji, amnestię dla więźniów politycznych oraz złagodzenie cenzury."
  },
  {
    "id": "R05_GOM_03",
    "section": "Odwilż i rządy Gomułki",
    "type": "true_false",
    "prompt": "Poznański Czerwiec 1956 był pierwszym w PRL masowym buntem społecznym przeciwko władzy komunistycznej.",
    "options": null,
    "answer": true,
    "explanation": "28 czerwca 1956 r. protest poznańskich robotników przerodził się w masowy bunt przeciw władzy komunistycznej.",
    "image": "r05_poznan_1956.jpg"
  },
  {
    "id": "R05_GOM_04",
    "section": "Odwilż i rządy Gomułki",
    "type": "fill_in",
    "prompt": "Robotniczy protest w Poznaniu rozpoczął się __________ czerwca __________ roku.",
    "options": null,
    "answer": [
      "28",
      "1956"
    ],
    "altAnswers": [
      [
        "28",
        "28."
      ],
      [
        "1956",
        "1956 r."
      ]
    ],
    "explanation": "Protest rozpoczął się 28 czerwca 1956 r.; został brutalnie stłumiony przez wojsko i milicję.",
    "image": "r05_poznan_1956.jpg"
  },
  {
    "id": "R05_GOM_05",
    "section": "Odwilż i rządy Gomułki",
    "type": "riddle",
    "prompt": "W październiku 1956 r. objąłem stanowisko I sekretarza KC PZPR i zapowiedziałem reformy. Kim jestem?",
    "options": null,
    "answer": "Władysław Gomułka",
    "altAnswers": [
      "Władysław Gomułka",
      "Gomułka",
      "Wladyslaw Gomulka"
    ],
    "explanation": "W październiku 1956 r. I sekretarzem KC PZPR został Władysław Gomułka.",
    "image": "r05_gomulka_przemowienie.jpg"
  },
  {
    "id": "R05_GOM_06",
    "section": "Odwilż i rządy Gomułki",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do instytucji lub formacji służących kontroli i przymusowi w PRL: UB, SB, ZOMO, RWPG.",
    "options": null,
    "answer": "RWPG",
    "explanation": "UB, SB i ZOMO były związane z aparatem bezpieczeństwa lub tłumieniem protestów; RWPG była organizacją współpracy gospodarczej państw bloku wschodniego."
  },
  {
    "id": "R05_GOM_07",
    "section": "Odwilż i rządy Gomułki",
    "type": "scenario",
    "prompt": "Jest jesień 1956 r. Nowe kierownictwo chce pokazać odejście od części praktyk stalinowskich i uspokoić społeczeństwo. Które działanie najlepiej odpowiada zmianom wprowadzonym po Październiku 1956?",
    "options": [
      "rezygnacja z przymusowej kolektywizacji wsi",
      "ponowne aresztowanie Stefana Wyszyńskiego",
      "zwiększenie liczby sowieckich oficerów w Polsce",
      "wprowadzenie kartek na mięso",
      "likwidacja wszystkich związków zawodowych",
      "zamknięcie wszystkich szkół"
    ],
    "answer": 0,
    "explanation": "Po Październiku 1956 władze zrezygnowały z przymusowej kolektywizacji, rozpoczęły rehabilitacje i uwolniły prymasa Wyszyńskiego."
  },
  {
    "id": "R05_GOM_08",
    "section": "Odwilż i rządy Gomułki",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Śmierć Józefa Stalina",
      "Zamknięcie tygodnika Po Prostu",
      "List 34",
      "Poznański Czerwiec"
    ],
    "right": [
      "1953",
      "1957",
      "1964",
      "1956"
    ],
    "answer": {
      "Śmierć Józefa Stalina": "1953",
      "Zamknięcie tygodnika Po Prostu": "1957",
      "List 34": "1964",
      "Poznański Czerwiec": "1956"
    },
    "explanation": "Stalin zmarł w 1953 r., Poznański Czerwiec miał miejsce w 1956 r., Po Prostu zamknięto w 1957 r., a List 34 powstał w 1964 r."
  },
  {
    "id": "R05_GOM_09",
    "section": "Odwilż i rządy Gomułki",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Władysław Gomułka zostaje I sekretarzem KC PZPR",
      "Śmierć Józefa Stalina",
      "Poznański Czerwiec",
      "Amnestia dla więźniów politycznych"
    ],
    "answer": [
      "Śmierć Józefa Stalina",
      "Amnestia dla więźniów politycznych",
      "Poznański Czerwiec",
      "Władysław Gomułka zostaje I sekretarzem KC PZPR"
    ],
    "explanation": "Stalin zmarł w 1953 r.; amnestię ogłoszono w kwietniu 1956 r.; protest w Poznaniu wybuchł w czerwcu, a Gomułka objął kierownictwo partii w październiku 1956 r."
  },
  {
    "id": "R05_KOS_01",
    "section": "Państwo i Kościół",
    "type": "single_choice",
    "prompt": "Ile lat miał trwać program modlitewnych przygotowań Kościoła do milenium chrztu Polski rozpoczęty w 1956 r.?",
    "options": [
      "dziewięć",
      "trzy",
      "pięć",
      "siedem",
      "dziesięć",
      "dwanaście"
    ],
    "answer": 0,
    "explanation": "Z inicjatywy prymasa Stefana Wyszyńskiego rozpoczęto w 1956 r. dziewięcioletni program przygotowań do obchodów milenium."
  },
  {
    "id": "R05_KOS_02",
    "section": "Państwo i Kościół",
    "type": "true_false",
    "prompt": "Po Październiku 1956 lekcje religii wróciły do szkół, lecz w 1961 r. ponownie je usunięto.",
    "options": null,
    "answer": true,
    "explanation": "W 1956 r. władze złagodziły politykę wobec Kościoła i przywróciły religię w szkołach, ale w 1961 r. ponownie ją usunęły."
  },
  {
    "id": "R05_KOS_03",
    "section": "Państwo i Kościół",
    "type": "multi_select",
    "prompt": "Zaznacz działania władz wymierzone w Kościół pod koniec lat 50. i na początku lat 60.",
    "options": [
      "zdejmowanie krzyży w szkołach",
      "odmowy zgody na budowę kościołów",
      "utrudnianie pielgrzymek",
      "powoływanie kleryków do wojska",
      "zaproszenie papieża Pawła VI do Polski",
      "zwiększanie liczby kościelnych szkół"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Władze usuwały krzyże, ograniczały nauczanie religii, blokowały budowę kościołów i pielgrzymki oraz powoływały kleryków do wojska."
  },
  {
    "id": "R05_KOS_04",
    "section": "Państwo i Kościół",
    "type": "fill_in",
    "prompt": "List biskupów polskich do biskupów niemieckich został wysłany w roku __________, a konkurencyjne obchody milenium i tysiąclecia odbyły się w roku __________.",
    "options": null,
    "answer": [
      "1965",
      "1966"
    ],
    "altAnswers": [
      [
        "1965",
        "1965 r."
      ],
      [
        "1966",
        "1966 r."
      ]
    ],
    "explanation": "List biskupów wysłano w 1965 r., a kulminacja konfliktu podczas obchodów milenium chrztu Polski i tysiąclecia państwa polskiego nastąpiła w 1966 r."
  },
  {
    "id": "R05_KOS_05",
    "section": "Państwo i Kościół",
    "type": "riddle",
    "prompt": "Jak nazywano kościelne obchody tysięcznej rocznicy chrztu Polski?",
    "options": null,
    "answer": "milenium",
    "altAnswers": [
      "milenium",
      "Milenium",
      "milenium chrztu Polski"
    ],
    "explanation": "Kościelne uroczystości określano jako milenium chrztu Polski.",
    "image": "r05_milenium_czestochowa.jpg"
  },
  {
    "id": "R05_KOS_06",
    "section": "Państwo i Kościół",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce niezwiązane z obchodami milenium chrztu Polski: Częstochowa, Rzym, Londyn, Radom.",
    "options": null,
    "answer": "Radom",
    "explanation": "Obchody milenijne odbywały się m.in. w Częstochowie, Rzymie i Londynie; Radom jest związany z protestami robotniczymi 1976 r."
  },
  {
    "id": "R05_KOS_07",
    "section": "Państwo i Kościół",
    "type": "scenario",
    "prompt": "Jest rok 1966. Władze organizują świeckie imprezy w tych samych miejscach i czasie co uroczystości religijne, a media prawie nie informują o obchodach kościelnych. Jak nazywały się państwowe uroczystości konkurencyjne wobec milenium?",
    "options": [
      "tysiąclecie państwa polskiego",
      "mała stabilizacja",
      "polski Październik",
      "Narodowe Święto Odrodzenia",
      "Grudzień 1970",
      "rewolucja Solidarności"
    ],
    "answer": 0,
    "explanation": "Władze zorganizowały obchody tysiąclecia państwa polskiego, które miały odciągnąć uwagę od kościelnego milenium.",
    "image": "r05_tysiaclecie_defilada.jpg"
  },
  {
    "id": "R05_KOS_08",
    "section": "Państwo i Kościół",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "Uwolnienie Stefana Wyszyńskiego",
      "Zamieszki o krzyż w Nowej Hucie",
      "Ponowne usunięcie religii ze szkół",
      "List biskupów polskich do biskupów niemieckich",
      "Obchody milenium chrztu Polski"
    ],
    "right": [
      "1956",
      "1960",
      "1961",
      "1965",
      "1966"
    ],
    "answer": {
      "Uwolnienie Stefana Wyszyńskiego": "1956",
      "Zamieszki o krzyż w Nowej Hucie": "1960",
      "Ponowne usunięcie religii ze szkół": "1961",
      "List biskupów polskich do biskupów niemieckich": "1965",
      "Obchody milenium chrztu Polski": "1966"
    },
    "explanation": "Kolejne etapy konfliktu rozciągały się od odwilży 1956 r. do kulminacji podczas obchodów 1966 r."
  },
  {
    "id": "R05_KOS_09",
    "section": "Państwo i Kościół",
    "type": "sort",
    "prompt": "Przyporządkuj działania z 1966 r. do Kościoła lub władz państwowych.",
    "options": null,
    "items": [
      "organizacja uroczystości milenijnych",
      "udział milionów wiernych",
      "organizacja obchodów tysiąclecia państwa",
      "odmowa zgody na przyjazd Pawła VI",
      "ograniczanie informacji w radiu i telewizji",
      "religijne uroczystości w Częstochowie"
    ],
    "categories": [
      "Kościół",
      "władze państwowe"
    ],
    "answer": {
      "Kościół": [
        "organizacja uroczystości milenijnych",
        "udział milionów wiernych",
        "religijne uroczystości w Częstochowie"
      ],
      "władze państwowe": [
        "organizacja obchodów tysiąclecia państwa",
        "odmowa zgody na przyjazd Pawła VI",
        "ograniczanie informacji w radiu i telewizji"
      ]
    },
    "explanation": "Kościół organizował obchody milenijne, natomiast władze tworzyły konkurencyjne uroczystości i utrudniały przebieg wydarzeń religijnych."
  },
  {
    "id": "R05_BUN_01",
    "section": "Bunty społeczne 1968–1970",
    "type": "single_choice",
    "prompt": "Co stało się bezpośrednim impulsem do protestów studenckich w 1968 r.?",
    "options": [
      "zakaz dalszego wystawiania Dziadów",
      "podwyżka cen mięsa o 70%",
      "aresztowanie Stefana Wyszyńskiego",
      "wprowadzenie kartek na cukier",
      "powstanie KOR",
      "wprowadzenie stanu wojennego"
    ],
    "answer": 0,
    "explanation": "Impulsem był zakaz wystawiania Dziadów Adama Mickiewicza w Teatrze Narodowym.",
    "image": "r05_marzec_1968_studenci.jpg"
  },
  {
    "id": "R05_BUN_02",
    "section": "Bunty społeczne 1968–1970",
    "type": "true_false",
    "prompt": "Wiec studentów Uniwersytetu Warszawskiego 8 marca 1968 r. został rozpędzony przez milicję i ORMO.",
    "options": null,
    "answer": true,
    "explanation": "Pokojowe zgromadzenie na dziedzińcu UW rozpędziły milicja i oddziały ORMO."
  },
  {
    "id": "R05_BUN_03",
    "section": "Bunty społeczne 1968–1970",
    "type": "multi_select",
    "prompt": "Zaznacz żądania studentów podczas protestów Marca 1968.",
    "options": [
      "zaprzestanie represji",
      "przywrócenie Dziadów na scenę",
      "zaprzestanie propagandowych kłamstw",
      "przywrócenie przymusowej kolektywizacji",
      "wprowadzenie kartek na żywność",
      "likwidacja niezależnych wydawnictw"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Studenci domagali się zakończenia represji, przywrócenia Dziadów i zaprzestania propagandowych kłamstw."
  },
  {
    "id": "R05_BUN_04",
    "section": "Bunty społeczne 1968–1970",
    "type": "fill_in",
    "prompt": "Najdramatyczniejsze wydarzenia Grudnia 1970 w Gdyni miały miejsce __________ grudnia; zginęło tam __________ osób.",
    "options": null,
    "answer": [
      "17",
      "18"
    ],
    "altAnswers": [
      [
        "17",
        "17."
      ],
      [
        "18",
        "18 osób"
      ]
    ],
    "explanation": "17 grudnia 1970 r. w Gdyni zginęło 18 osób.",
    "image": "r05_grudzien_1970_gdynia.jpg"
  },
  {
    "id": "R05_BUN_05",
    "section": "Bunty społeczne 1968–1970",
    "type": "riddle",
    "prompt": "Byłem osiemnastoletnią ofiarą wydarzeń w Gdyni 17 grudnia 1970 r.; moje ciało niesiono na drzwiach. Jak się nazywałem?",
    "options": null,
    "answer": "Zbigniew Godlewski",
    "altAnswers": [
      "Zbigniew Godlewski",
      "Godlewski"
    ],
    "explanation": "Zbigniew Godlewski zginął 17 grudnia 1970 r. w Gdyni, a jego ciało niesiono na drzwiach na czele pochodu.",
    "image": "r05_grudzien_1970_gdynia.jpg"
  },
  {
    "id": "R05_BUN_06",
    "section": "Bunty społeczne 1968–1970",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto niepasujące do głównych ośrodków protestów Grudnia 1970: Gdańsk, Gdynia, Szczecin, Radom.",
    "options": null,
    "answer": "Radom",
    "explanation": "Gdańsk, Gdynia i Szczecin były głównymi ośrodkami protestów na Wybrzeżu w grudniu 1970 r.; Radom był miejscem protestów w 1976 r."
  },
  {
    "id": "R05_BUN_07",
    "section": "Bunty społeczne 1968–1970",
    "type": "scenario",
    "prompt": "Krótko przed Bożym Narodzeniem władze ogłaszają dużą podwyżkę cen żywności. Na Wybrzeżu wybuchają strajki i demonstracje, a wojsko otwiera ogień do robotników. Kto po tych wydarzeniach zastąpił Władysława Gomułkę na stanowisku I sekretarza KC PZPR?",
    "options": [
      "Edward Gierek",
      "Edward Ochab",
      "Stanisław Kania",
      "Wojciech Jaruzelski",
      "Bolesław Bierut",
      "Lech Wałęsa"
    ],
    "answer": 0,
    "explanation": "Po krwawym stłumieniu protestów Grudnia 1970 Gomułkę zastąpił Edward Gierek."
  },
  {
    "id": "R05_BUN_08",
    "section": "Bunty społeczne 1968–1970",
    "type": "match",
    "prompt": "Połącz liczbę lub datę z wydarzeniem.",
    "options": null,
    "left": [
      "8 marca 1968",
      "ponad 2,7 tys.",
      "ponad 13 tys.",
      "45 osób"
    ],
    "right": [
      "wiec studentów UW",
      "zatrzymani podczas represji po Marcu",
      "osoby żydowskiego pochodzenia zmuszone do emigracji",
      "ofiary Grudnia 1970"
    ],
    "answer": {
      "8 marca 1968": "wiec studentów UW",
      "ponad 2,7 tys.": "zatrzymani podczas represji po Marcu",
      "ponad 13 tys.": "osoby żydowskiego pochodzenia zmuszone do emigracji",
      "45 osób": "ofiary Grudnia 1970"
    },
    "explanation": "Represje Marca 1968 objęły tysiące osób, a Grudzień 1970 pochłonął 45 ofiar śmiertelnych."
  },
  {
    "id": "R05_BUN_09",
    "section": "Bunty społeczne 1968–1970",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Edward Gierek obejmuje stanowisko I sekretarza",
      "Wiec studentów Uniwersytetu Warszawskiego",
      "Zakaz dalszego wystawiania Dziadów",
      "Podwyżka cen żywności wywołuje protesty na Wybrzeżu",
      "Nagonka antysemicka i emigracja jej ofiar"
    ],
    "answer": [
      "Zakaz dalszego wystawiania Dziadów",
      "Wiec studentów Uniwersytetu Warszawskiego",
      "Nagonka antysemicka i emigracja jej ofiar",
      "Podwyżka cen żywności wywołuje protesty na Wybrzeżu",
      "Edward Gierek obejmuje stanowisko I sekretarza"
    ],
    "explanation": "Zakaz Dziadów poprzedził protesty Marca 1968; po nich trwała kampania antysemicka, a w grudniu 1970 wybuchły protesty, po których władzę objął Gierek."
  },
  {
    "id": "R05_GIE_01",
    "section": "Gierek i narodziny opozycji",
    "type": "single_choice",
    "prompt": "Na czym opierało się ożywienie gospodarcze w pierwszej połowie lat 70. za rządów Edwarda Gierka?",
    "options": [
      "na kredytach zaciąganych w krajach zachodnich",
      "na rezygnacji z inwestycji",
      "na likwidacji przemysłu",
      "na wprowadzeniu prywatnej waluty",
      "na pomocy KOR",
      "na zamknięciu handlu zagranicznego"
    ],
    "answer": 0,
    "explanation": "Rząd zaciągał kredyty na Zachodzie, kupował technologie i licencje oraz finansował duże inwestycje.",
    "image": "r05_fiat_126p.jpg"
  },
  {
    "id": "R05_GIE_02",
    "section": "Gierek i narodziny opozycji",
    "type": "multi_select",
    "prompt": "Zaznacz inwestycje zrealizowane lub rozwijane w pierwszej połowie lat 70.",
    "options": [
      "Huta Katowice",
      "Port Północny",
      "Dworzec Centralny w Warszawie",
      "Trasa Łazienkowska",
      "Kanał Augustowski",
      "Pałac Kultury i Nauki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W okresie Gierka powstały m.in. Huta Katowice, Port Północny, Dworzec Centralny i Trasa Łazienkowska."
  },
  {
    "id": "R05_GIE_03",
    "section": "Gierek i narodziny opozycji",
    "type": "true_false",
    "prompt": "Reforma administracyjna z 1975 r. zlikwidowała powiaty i zwiększyła liczbę województw z 17 do 49.",
    "options": null,
    "answer": true,
    "explanation": "W 1975 r. zlikwidowano powiaty i utworzono 49 województw zamiast dotychczasowych 17."
  },
  {
    "id": "R05_GIE_04",
    "section": "Gierek i narodziny opozycji",
    "type": "fill_in",
    "prompt": "Komitet Obrony Robotników powstał we wrześniu __________ roku, a Wolne Związki Zawodowe na Wybrzeżu powstały w roku __________.",
    "options": null,
    "answer": [
      "1976",
      "1978"
    ],
    "altAnswers": [
      [
        "1976",
        "1976 r."
      ],
      [
        "1978",
        "1978 r."
      ]
    ],
    "explanation": "KOR powołano we wrześniu 1976 r., a nielegalne Wolne Związki Zawodowe powstały na Wybrzeżu w 1978 r.",
    "image": "r05_kor_pomoc.jpg"
  },
  {
    "id": "R05_GIE_05",
    "section": "Gierek i narodziny opozycji",
    "type": "riddle",
    "prompt": "Jak potocznie nazywano nielegalne publikacje wydawane poza kontrolą cenzury?",
    "options": null,
    "answer": "bibuła",
    "altAnswers": [
      "bibuła",
      "bibula",
      "drugi obieg",
      "wydawnictwa drugiego obiegu"
    ],
    "explanation": "Nielegalne publikacje wydawane poza cenzurą nazywano bibułą albo wydawnictwami drugiego obiegu."
  },
  {
    "id": "R05_GIE_06",
    "section": "Gierek i narodziny opozycji",
    "type": "odd_one_out",
    "prompt": "Wskaż organizację niepasującą do opozycji antykomunistycznej lat 70.: KOR, WZZ, KPN, PZPR.",
    "options": null,
    "answer": "PZPR",
    "explanation": "KOR, WZZ i KPN należały do opozycji; PZPR była partią rządzącą PRL."
  },
  {
    "id": "R05_GIE_07",
    "section": "Gierek i narodziny opozycji",
    "type": "scenario",
    "prompt": "Grupa opozycjonistów drukuje książki i czasopisma bez zgody cenzury, a następnie rozprowadza je wśród czytelników. Jaki był podstawowy cel takiej działalności?",
    "options": [
      "przełamanie monopolu informacyjnego władz",
      "wzmocnienie cenzury państwowej",
      "zwiększenie kontroli PZPR nad mediami",
      "ograniczenie dostępu do literatury",
      "likwidacja niezależnych wykładów",
      "poparcie podwyżek cen"
    ],
    "answer": 0,
    "explanation": "Podziemny ruch wydawniczy miał przełamać monopol informacyjny państwa i umożliwić rozpowszechnianie treści blokowanych przez cenzurę."
  },
  {
    "id": "R05_GIE_08",
    "section": "Gierek i narodziny opozycji",
    "type": "match",
    "prompt": "Połącz organizację lub formę działania z jej głównym celem.",
    "options": null,
    "left": [
      "KOR",
      "Wolne Związki Zawodowe",
      "KPN",
      "latające uniwersytety"
    ],
    "right": [
      "pomoc represjonowanym robotnikom",
      "obrona praw pracowników niezależnie od władz",
      "odsunięcie PZPR od władzy",
      "nauczanie tematów pomijanych lub zakłamywanych przez władze"
    ],
    "answer": {
      "KOR": "pomoc represjonowanym robotnikom",
      "Wolne Związki Zawodowe": "obrona praw pracowników niezależnie od władz",
      "KPN": "odsunięcie PZPR od władzy",
      "latające uniwersytety": "nauczanie tematów pomijanych lub zakłamywanych przez władze"
    },
    "explanation": "Organizacje opozycyjne łączyła niezależność od władz, ale różniły je bezpośrednie cele i formy działania."
  },
  {
    "id": "R05_GIE_09",
    "section": "Gierek i narodziny opozycji",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Powstanie Wolnych Związków Zawodowych na Wybrzeżu",
      "Pierwsza pielgrzymka Jana Pawła II do Polski",
      "Protesty robotnicze w Radomiu Ursusie i Płocku",
      "Powstanie KOR",
      "Wybór Karola Wojtyły na papieża"
    ],
    "answer": [
      "Protesty robotnicze w Radomiu Ursusie i Płocku",
      "Powstanie KOR",
      "Powstanie Wolnych Związków Zawodowych na Wybrzeżu",
      "Wybór Karola Wojtyły na papieża",
      "Pierwsza pielgrzymka Jana Pawła II do Polski"
    ],
    "explanation": "Protesty i powstanie KOR przypadają na 1976 r., WZZ i wybór Karola Wojtyły na 1978 r., a pierwsza pielgrzymka papieska na 1979 r."
  },
  {
    "id": "R05_SOL_01",
    "section": "Rewolucja Solidarności",
    "type": "single_choice",
    "prompt": "Co było bezpośrednią przyczyną rozpoczęcia strajku w Stoczni Gdańskiej w połowie sierpnia 1980 r.?",
    "options": [
      "zwolnienie z pracy Anny Walentynowicz",
      "aresztowanie Stefana Wyszyńskiego",
      "zamknięcie tygodnika Po Prostu",
      "wprowadzenie godziny milicyjnej",
      "likwidacja KOR",
      "reforma administracyjna"
    ],
    "answer": 0,
    "explanation": "Bezpośrednią przyczyną strajku w Stoczni Gdańskiej było zwolnienie z pracy działaczki WZZ Anny Walentynowicz.",
    "image": "r05_stocznia_sierpien_1980.jpg"
  },
  {
    "id": "R05_SOL_02",
    "section": "Rewolucja Solidarności",
    "type": "multi_select",
    "prompt": "Zaznacz żądania zawarte w 21 postulatach gdańskiego MKS.",
    "options": [
      "zgoda na niezależne związki zawodowe",
      "prawo do strajku",
      "wolność słowa i druku",
      "zwolnienie więźniów politycznych",
      "przywrócenie przymusowej kolektywizacji",
      "zakaz niezależnych wydawnictw"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Postulaty obejmowały m.in. wolne związki zawodowe, prawo do strajku, wolność słowa i druku oraz uwolnienie więźniów politycznych."
  },
  {
    "id": "R05_SOL_03",
    "section": "Rewolucja Solidarności",
    "type": "true_false",
    "prompt": "Na czele Międzyzakładowego Komitetu Strajkowego w Gdańsku stanął Lech Wałęsa.",
    "options": null,
    "answer": true,
    "explanation": "Lech Wałęsa kierował gdańskim MKS, a później stanął na czele NSZZ Solidarność.",
    "image": "r05_stocznia_sierpien_1980.jpg"
  },
  {
    "id": "R05_SOL_04",
    "section": "Rewolucja Solidarności",
    "type": "fill_in",
    "prompt": "Porozumienia podpisano 30 sierpnia w __________, 31 sierpnia w __________, a 3 września w __________.",
    "options": null,
    "answer": [
      "Szczecinie",
      "Gdańsku",
      "Jastrzębiu"
    ],
    "altAnswers": [
      [
        "Szczecinie",
        "Szczecin"
      ],
      [
        "Gdańsku",
        "Gdańsk",
        "Gdansku",
        "Gdansk"
      ],
      [
        "Jastrzębiu",
        "Jastrzębie",
        "Jastrzebiu",
        "Jastrzebie"
      ]
    ],
    "explanation": "Porozumienia zawarto kolejno w Szczecinie, Gdańsku i Jastrzębiu."
  },
  {
    "id": "R05_SOL_05",
    "section": "Rewolucja Solidarności",
    "type": "riddle",
    "prompt": "Jaki związek zawodowy powstał w wyniku porozumień sierpniowych i zgromadził około 10 mln Polaków?",
    "options": null,
    "answer": "NSZZ Solidarność",
    "altAnswers": [
      "NSZZ Solidarność",
      "Solidarność",
      "NSZZ Solidarnosc",
      "Solidarnosc"
    ],
    "explanation": "W wyniku porozumień sierpniowych powstał NSZZ Solidarność z Lechem Wałęsą na czele."
  },
  {
    "id": "R05_SOL_06",
    "section": "Rewolucja Solidarności",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto niepasujące do miejsc podpisania porozumień ze strajkującymi w 1980 r.: Szczecin, Gdańsk, Jastrzębie, Radom.",
    "options": null,
    "answer": "Radom",
    "explanation": "Porozumienia podpisano w Szczecinie, Gdańsku i Jastrzębiu; Radom był ważnym ośrodkiem protestów 1976 r."
  },
  {
    "id": "R05_SOL_07",
    "section": "Rewolucja Solidarności",
    "type": "scenario",
    "prompt": "Nowy legalny związek zawodowy liczy około 10 mln członków, wydaje Tygodnik Solidarność i staje się masowym ruchem społecznym. Kto stoi na jego czele?",
    "options": [
      "Lech Wałęsa",
      "Stanisław Kania",
      "Wojciech Jaruzelski",
      "Edward Gierek",
      "Tadeusz Mazowiecki",
      "Czesław Kiszczak"
    ],
    "answer": 0,
    "explanation": "Na czele NSZZ Solidarność stanął Lech Wałęsa. Tadeusz Mazowiecki kierował Tygodnikiem Solidarność.",
    "image": "r05_solidarnosc_znak.jpg"
  },
  {
    "id": "R05_SOL_08",
    "section": "Rewolucja Solidarności",
    "type": "match",
    "prompt": "Połącz organizację z grupą, którą reprezentowała.",
    "options": null,
    "left": [
      "NSZZ Solidarność",
      "NSZZ Rolników Indywidualnych Solidarność",
      "Niezależne Zrzeszenie Studentów",
      "Międzyzakładowy Komitet Strajkowy"
    ],
    "right": [
      "pracownicy",
      "rolnicy indywidualni",
      "studenci",
      "strajkujące zakłady pracy"
    ],
    "answer": {
      "NSZZ Solidarność": "pracownicy",
      "NSZZ Rolników Indywidualnych Solidarność": "rolnicy indywidualni",
      "Niezależne Zrzeszenie Studentów": "studenci",
      "Międzyzakładowy Komitet Strajkowy": "strajkujące zakłady pracy"
    },
    "explanation": "W latach 1980-1981 powstawały niezależne struktury reprezentujące pracowników, rolników, studentów i strajkujące zakłady."
  },
  {
    "id": "R05_SOL_09",
    "section": "Rewolucja Solidarności",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Porozumienie w Gdańsku",
      "Stanisław Kania zastępuje Edwarda Gierka",
      "Początek strajku w Stoczni Gdańskiej",
      "Porozumienie w Jastrzębiu",
      "Porozumienie w Szczecinie"
    ],
    "answer": [
      "Początek strajku w Stoczni Gdańskiej",
      "Porozumienie w Szczecinie",
      "Porozumienie w Gdańsku",
      "Porozumienie w Jastrzębiu",
      "Stanisław Kania zastępuje Edwarda Gierka"
    ],
    "explanation": "Strajk w Stoczni Gdańskiej rozpoczął się w połowie sierpnia; porozumienia podpisano 30 i 31 sierpnia oraz 3 września, a trzy dni później Kania zastąpił Gierka."
  },
  {
    "id": "R05_WOJ_01",
    "section": "Stan wojenny",
    "type": "single_choice",
    "prompt": "Kiedy większość Polaków dowiedziała się o wprowadzeniu stanu wojennego?",
    "options": [
      "13 grudnia 1981 r.",
      "31 sierpnia 1980 r.",
      "16 października 1978 r.",
      "22 lipca 1983 r.",
      "16 grudnia 1981 r.",
      "3 maja 1982 r."
    ],
    "answer": 0,
    "explanation": "Stan wojenny wprowadzono nocą z 12 na 13 grudnia 1981 r., a większość społeczeństwa dowiedziała się o nim rankiem 13 grudnia.",
    "image": "r05_stan_wojenny_ulica.jpg"
  },
  {
    "id": "R05_WOJ_02",
    "section": "Stan wojenny",
    "type": "multi_select",
    "prompt": "Zaznacz ograniczenia wprowadzone po ogłoszeniu stanu wojennego.",
    "options": [
      "godzina milicyjna",
      "cenzurowanie korespondencji",
      "zamknięcie szkół i uczelni",
      "ograniczenie wolności zgromadzeń",
      "pełna swoboda działalności związków zawodowych",
      "zniesienie cenzury"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Stan wojenny ograniczył podstawowe prawa obywatelskie; wprowadzono m.in. godzinę milicyjną, cenzurę korespondencji i zamknięto szkoły oraz uczelnie."
  },
  {
    "id": "R05_WOJ_03",
    "section": "Stan wojenny",
    "type": "true_false",
    "prompt": "16 grudnia 1981 r. podczas pacyfikacji kopalni Wujek zginęło dziewięciu górników.",
    "options": null,
    "answer": true,
    "explanation": "Wojsko i milicja zaatakowały strajkujących w kopalni Wujek; od kul milicjantów zginęło dziewięciu górników.",
    "image": "r05_kopalnia_wujek.jpg"
  },
  {
    "id": "R05_WOJ_04",
    "section": "Stan wojenny",
    "type": "fill_in",
    "prompt": "Wojciech Jaruzelski stanął na czele Wojskowej Rady __________ Narodowego, której skrót brzmiał __________.",
    "options": null,
    "answer": [
      "Ocalenia",
      "WRON"
    ],
    "altAnswers": [
      [
        "Ocalenia",
        "ocalenia"
      ],
      [
        "WRON",
        "W.R.O.N."
      ]
    ],
    "explanation": "Po wprowadzeniu stanu wojennego Wojciech Jaruzelski stanął na czele Wojskowej Rady Ocalenia Narodowego, czyli WRON."
  },
  {
    "id": "R05_WOJ_05",
    "section": "Stan wojenny",
    "type": "riddle",
    "prompt": "Byłem kapelanem Solidarności i zostałem porwany oraz zabity przez funkcjonariuszy SB w październiku 1984 r. Jak się nazywałem?",
    "options": null,
    "answer": "Jerzy Popiełuszko",
    "altAnswers": [
      "Jerzy Popiełuszko",
      "ks. Jerzy Popiełuszko",
      "ksiądz Jerzy Popiełuszko",
      "Jerzy Popieluszko"
    ],
    "explanation": "Ksiądz Jerzy Popiełuszko, związany z Solidarnością, został zamordowany przez funkcjonariuszy SB w październiku 1984 r."
  },
  {
    "id": "R05_WOJ_06",
    "section": "Stan wojenny",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie niepasujące do form oporu przeciw władzom po 13 grudnia 1981 r.: podziemna prasa, Radio Solidarność, demonstracje antyrządowe, przymusowa kolektywizacja.",
    "options": null,
    "answer": "przymusowa kolektywizacja",
    "explanation": "Podziemna prasa, Radio Solidarność i demonstracje były formami oporu; przymusowa kolektywizacja należała do polityki wcześniejszego okresu stalinowskiego."
  },
  {
    "id": "R05_WOJ_07",
    "section": "Stan wojenny",
    "type": "scenario",
    "prompt": "W zachodnich miastach odbywają się manifestacje poparcia dla polskiej opozycji, organizowane są zbiórki żywności i leków, a część państw wprowadza sankcje wobec PRL. Który przywódca Solidarności otrzymał w 1983 r. Pokojową Nagrodę Nobla?",
    "options": [
      "Lech Wałęsa",
      "Bogdan Borusewicz",
      "Zbigniew Bujak",
      "Władysław Frasyniuk",
      "Tadeusz Mazowiecki",
      "Jacek Kuroń"
    ],
    "answer": 0,
    "explanation": "W 1983 r. Pokojową Nagrodę Nobla otrzymał Lech Wałęsa, przewodniczący Solidarności."
  },
  {
    "id": "R05_WOJ_08",
    "section": "Stan wojenny",
    "type": "match",
    "prompt": "Połącz wydarzenie z datą.",
    "options": null,
    "left": [
      "Wprowadzenie stanu wojennego",
      "Pacyfikacja kopalni Wujek",
      "Formalne zniesienie stanu wojennego",
      "Zabójstwo księdza Jerzego Popiełuszki"
    ],
    "right": [
      "13 grudnia 1981",
      "16 grudnia 1981",
      "22 lipca 1983",
      "październik 1984"
    ],
    "answer": {
      "Wprowadzenie stanu wojennego": "13 grudnia 1981",
      "Pacyfikacja kopalni Wujek": "16 grudnia 1981",
      "Formalne zniesienie stanu wojennego": "22 lipca 1983",
      "Zabójstwo księdza Jerzego Popiełuszki": "październik 1984"
    },
    "explanation": "Stan wojenny rozpoczął się w grudniu 1981 r., formalnie zakończył w lipcu 1983 r., a represje wobec opozycji trwały także później."
  },
  {
    "id": "R05_WOJ_09",
    "section": "Stan wojenny",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Zabójstwo Jerzego Popiełuszki",
      "Zawieszenie stanu wojennego",
      "Pacyfikacja kopalni Wujek",
      "Formalne zniesienie stanu wojennego",
      "Wprowadzenie stanu wojennego"
    ],
    "answer": [
      "Wprowadzenie stanu wojennego",
      "Pacyfikacja kopalni Wujek",
      "Zawieszenie stanu wojennego",
      "Formalne zniesienie stanu wojennego",
      "Zabójstwo Jerzego Popiełuszki"
    ],
    "explanation": "Stan wojenny wprowadzono 13 grudnia 1981 r.; trzy dni później spacyfikowano kopalnię Wujek; stan zawieszono pod koniec 1982 r., zniesiono w lipcu 1983 r., a ks. Popiełuszko zginął w 1984 r."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które wydarzenie nastąpiło we wrześniu 1953 r., kilka miesięcy po śmierci Józefa Stalina?",
    "options": [
      "aresztowanie kardynała Stefana Wyszyńskiego",
      "objęcie władzy przez Władysława Gomułkę",
      "Poznański Czerwiec",
      "ogłoszenie amnestii dla więźniów politycznych",
      "powstanie ZOMO",
      "List 34"
    ],
    "answer": 0,
    "explanation": "Mimo śmierci Stalina represje w Polsce trwały; we wrześniu 1953 r. aresztowano kardynała Stefana Wyszyńskiego."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz mechanizmy utrzymywania zależności PRL od ZSRS w okresie małej stabilizacji.",
    "options": [
      "Układ Warszawski w sprawach wojskowych",
      "RWPG w sprawach gospodarczych",
      "kontakty przez sowieckiego ambasadora",
      "zgoda ZSRS na zmianę I sekretarza KC PZPR",
      "Niezależne Zrzeszenie Studentów",
      "Wolne Związki Zawodowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zależność obejmowała struktury Układu Warszawskiego i RWPG, kontakty przez ambasadora ZSRS oraz konieczność uzyskania zgody na zmianę I sekretarza."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Określenie mała stabilizacja zaczerpnięto z twórczości poety __________.",
    "options": null,
    "answer": [
      "Tadeusza Różewicza"
    ],
    "altAnswers": [
      [
        "Tadeusza Różewicza",
        "Tadeusz Różewicz",
        "Tadeusza Rozewicza",
        "Tadeusz Rozewicz"
      ]
    ],
    "explanation": "Określenie mała stabilizacja zaczerpnięto z twórczości Tadeusza Różewicza."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać z informacją dotyczącą jej roli w latach 50. i 60.",
    "options": null,
    "left": [
      "Edward Ochab",
      "Konstanty Rokossowski",
      "Tadeusz Różewicz",
      "Józef Cyrankiewicz"
    ],
    "right": [
      "I sekretarz KC PZPR po śmierci Bieruta",
      "sowiecki oficer odesłany do Moskwy po Październiku",
      "twórca kojarzony z określeniem mała stabilizacja",
      "premier przemawiający po wydarzeniach poznańskich"
    ],
    "answer": {
      "Edward Ochab": "I sekretarz KC PZPR po śmierci Bieruta",
      "Konstanty Rokossowski": "sowiecki oficer odesłany do Moskwy po Październiku",
      "Tadeusz Różewicz": "twórca kojarzony z określeniem mała stabilizacja",
      "Józef Cyrankiewicz": "premier przemawiający po wydarzeniach poznańskich"
    },
    "explanation": "Te postacie pojawiają się w różnych kontekstach odwilży, małej stabilizacji i wydarzeń 1956 r."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące konfliktu państwa z Kościołem w kolejności chronologicznej.",
    "options": null,
    "items": [
      "List biskupów polskich do biskupów niemieckich",
      "Usunięcie religii ze szkół",
      "Zamieszki o krzyż w Nowej Hucie",
      "Rozpoczęcie dziewięcioletnich przygotowań do milenium",
      "Obchody milenium chrztu Polski"
    ],
    "answer": [
      "Rozpoczęcie dziewięcioletnich przygotowań do milenium",
      "Zamieszki o krzyż w Nowej Hucie",
      "Usunięcie religii ze szkół",
      "List biskupów polskich do biskupów niemieckich",
      "Obchody milenium chrztu Polski"
    ],
    "explanation": "Przygotowania ruszyły w 1956 r., zamieszki w Nowej Hucie miały miejsce w 1960 r., religię usunięto w 1961 r., list wysłano w 1965 r., a milenium obchodzono w 1966 r."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku grupa 34 twórców wystosowała list otwarty przeciw zaostrzeniu cenzury i ograniczeniom w kulturze?",
    "options": [
      "1964",
      "1957",
      "1961",
      "1965",
      "1968",
      "1970"
    ],
    "answer": 0,
    "explanation": "List 34 powstał w 1964 r. jako protest przeciw ograniczeniom w polityce kulturalnej."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W latach 1968–1969 do emigracji zmuszono ponad __________ osób żydowskiego pochodzenia.",
    "options": null,
    "answer": [
      "13 tys."
    ],
    "altAnswers": [
      [
        "13 tys.",
        "13 tysięcy",
        "13000",
        "ponad 13 tys."
      ]
    ],
    "explanation": "W następstwie kampanii antysemickiej ponad 13 tys. osób żydowskiego pochodzenia zmuszono do emigracji."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sukces sportowy z rokiem.",
    "options": null,
    "left": [
      "Złoty medal olimpijski piłkarzy",
      "Trzecie miejsce piłkarzy na mistrzostwach świata",
      "Mistrzostwo świata polskich siatkarzy",
      "Złoty medal olimpijski i rekord świata Ireny Szewińskiej"
    ],
    "right": [
      "1972",
      "1974 - piłka nożna",
      "1974 - siatkówka",
      "1976"
    ],
    "answer": {
      "Złoty medal olimpijski piłkarzy": "1972",
      "Trzecie miejsce piłkarzy na mistrzostwach świata": "1974 - piłka nożna",
      "Mistrzostwo świata polskich siatkarzy": "1974 - siatkówka",
      "Złoty medal olimpijski i rekord świata Ireny Szewińskiej": "1976"
    },
    "explanation": "Lata 70. przyniosły liczne sukcesy: złoto piłkarzy w 1972 r., dwa wielkie wyniki drużynowe w 1974 r. i sukces Ireny Szewińskiej w 1976 r."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku Edward Gierek został przyjęty przez papieża Pawła VI?",
    "options": [
      "1977",
      "1971",
      "1975",
      "1976",
      "1978",
      "1979"
    ],
    "answer": 0,
    "explanation": "W 1977 r. Edward Gierek został przyjęty przez papieża Pawła VI."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Czym można było płacić w sklepach Pewex?",
    "options": [
      "walutami państw zachodnich",
      "bonami banku PEKAO",
      "zwykłymi kartkami żywnościowymi",
      "talonami na węgiel",
      "wyłącznie złotówkami",
      "kuponami Solidarności"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "W Pewexie płacono walutami zachodnimi albo specjalnymi bonami banku PEKAO o wartości wyrażonej w dolarach.",
    "image": "r05_pewex_bony.jpg"
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "KOR był organizacją nielegalną, ale jego członkowie działali jawnie i podpisywali publikowane dokumenty imieniem i nazwiskiem.",
    "options": null,
    "answer": true,
    "explanation": "Władze odmawiały zgody na działalność KOR-u, lecz organizacja działała jawnie, co utrudniało władzom ukrywanie represji."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz organizację opozycyjną z rokiem jej powstania.",
    "options": null,
    "left": [
      "Komitet Obrony Robotników",
      "Studencki Komitet Solidarności",
      "Wolne Związki Zawodowe",
      "Konfederacja Polski Niepodległej"
    ],
    "right": [
      "1976",
      "1977",
      "1978",
      "1979"
    ],
    "answer": {
      "Komitet Obrony Robotników": "1976",
      "Studencki Komitet Solidarności": "1977",
      "Wolne Związki Zawodowe": "1978",
      "Konfederacja Polski Niepodległej": "1979"
    },
    "explanation": "Kolejne organizacje opozycyjne powstawały niemal rok po roku: KOR w 1976, SKS w 1977, WZZ w 1978 i KPN w 1979 r."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "16 października 1978 r. papieżem został kardynał __________, który przyjął imiona __________.",
    "options": null,
    "answer": [
      "Karol Wojtyła",
      "Jan Paweł II"
    ],
    "altAnswers": [
      [
        "Karol Wojtyła",
        "Karol Wojtyla",
        "Wojtyła",
        "Wojtyla"
      ],
      [
        "Jan Paweł II",
        "Jan Pawel II",
        "Jana Pawła II"
      ]
    ],
    "explanation": "Kardynał Karol Wojtyła został wybrany na papieża 16 października 1978 r. i przyjął imiona Jan Paweł II."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto kierował legalnym Tygodnikiem Solidarność?",
    "options": [
      "Tadeusz Mazowiecki",
      "Lech Wałęsa",
      "Jacek Kuroń",
      "Adam Michnik",
      "Czesław Kiszczak",
      "Stanisław Kania"
    ],
    "answer": 0,
    "explanation": "Tygodnikiem Solidarność kierował Tadeusz Mazowiecki.",
    "image": "r05_solidarnosc_znak.jpg"
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które z tych artykułów sprzedawano na kartki w okresie pogłębiającego się kryzysu na początku lat 80.?",
    "options": [
      "mięso",
      "masło",
      "ryż",
      "mąka",
      "coca-cola",
      "pomarańcze"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "System kartkowy obejmował m.in. mięso, masło, ryż i mąkę, a także wiele innych artykułów spożywczych i przemysłowych."
  },
  {
    "id": "R05_HARD_16",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jesienią 1981 r. Wojciech Jaruzelski łączył funkcje ministra obrony narodowej, premiera i I sekretarza KC PZPR.",
    "options": null,
    "answer": true,
    "explanation": "Jaruzelski był ministrem obrony od 1968 r., premierem od lutego 1981 r., a jesienią 1981 r. został także I sekretarzem KC PZPR."
  },
  {
    "id": "R05_HARD_17",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Który oficer Ludowego Wojska Polskiego przekazywał Amerykanom informacje o groźbie interwencji wojsk Układu Warszawskiego w Polsce?",
    "options": null,
    "answer": "Ryszard Kukliński",
    "altAnswers": [
      "Ryszard Kukliński",
      "Kukliński",
      "Ryszard Kuklinski",
      "Kuklinski"
    ],
    "explanation": "Ryszard Kukliński współpracował z amerykańskim wywiadem i przekazywał informacje dotyczące zagrożeń związanych z sytuacją w Polsce."
  },
  {
    "id": "R05_HARD_18",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po wprowadzeniu stanu wojennego działacz Solidarności ukrywa się przed SB. Goli brodę, nosi okulary i zmienia sposób chodzenia, aby uniknąć rozpoznania. Czyją relację opisuje taka sytuacja?",
    "options": [
      "Bogdana Lisa",
      "Jerzego Popiełuszki",
      "Mirosława Hermaszewskiego",
      "Edwarda Ochaba",
      "Zbigniewa Godlewskiego",
      "Tadeusza Różewicza"
    ],
    "answer": 0,
    "explanation": "Bogdan Lis opisywał, jak po wprowadzeniu stanu wojennego zmieniał wygląd i zachowanie, aby uniknąć zatrzymania przez SB."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Polska Rzeczpospolita Ludowa",
  icon: "🇵🇱",
  sectionOrder: [
  "Odwilż i rządy Gomułki",
  "Państwo i Kościół",
  "Bunty społeczne 1968–1970",
  "Gierek i narodziny opozycji",
  "Rewolucja Solidarności",
  "Stan wojenny"
],
  sectionIcons: {
  "Odwilż i rządy Gomułki": "🌤️",
  "Państwo i Kościół": "⛪",
  "Bunty społeczne 1968–1970": "✊",
  "Gierek i narodziny opozycji": "🏗️",
  "Rewolucja Solidarności": "🤝",
  "Stan wojenny": "🚧"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
