// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NIEM = Niemcy i przemysł
//   CZS  = Czechy i Słowacja
//   LIB  = Litwa i Białoruś
//   UKR  = Ukraina
//   ROS  = Rosja i przyroda
//   REL  = Relacje z sąsiadami
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_NIEM_01",
    "section": "Niemcy i przemysł",
    "type": "single_choice",
    "prompt": "Którym sąsiadem Polski są Niemcy?",
    "options": [
      "zachodnim",
      "południowym",
      "wschodnim",
      "północnym",
      "południowo-wschodnim",
      "północno-wschodnim"
    ],
    "answer": 0,
    "explanation": "Niemcy leżą w centralnej części Europy i są zachodnim sąsiadem Polski."
  },
  {
    "id": "R05_NIEM_02",
    "section": "Niemcy i przemysł",
    "type": "true_false",
    "prompt": "Niemcy składają się z 16 krajów związkowych nazywanych landami.",
    "options": null,
    "answer": true,
    "explanation": "Niemcy są państwem złożonym z 16 landów."
  },
  {
    "id": "R05_NIEM_03",
    "section": "Niemcy i przemysł",
    "type": "fill_in",
    "prompt": "Jeszcze kilkadziesiąt lat temu ważną rolę w gospodarce Niemiec odgrywało __________, a obecnie największą rolę w przemyśle odgrywa __________.",
    "options": null,
    "answer": [
      "górnictwo",
      "przetwórstwo przemysłowe"
    ],
    "altAnswers": [
      [
        "górnictwo",
        "gornictwo"
      ],
      [
        "przetwórstwo przemysłowe",
        "przetworstwo przemyslowe"
      ]
    ],
    "explanation": "Dawniej rozwój opierał się między innymi na wydobyciu surowców, ale dziś główną rolę ma nowoczesne przetwórstwo przemysłowe."
  },
  {
    "id": "R05_NIEM_04",
    "section": "Niemcy i przemysł",
    "type": "multi_select",
    "prompt": "Zaznacz działy lub wyroby, z których znany jest współczesny przemysł Niemiec.",
    "options": [
      "samochody",
      "sprzęt elektroniczny",
      "sprzęt optyczny",
      "lekarstwa",
      "bawełna surowa",
      "ryż"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Współczesny przemysł Niemiec słynie z samochodów, sprzętu elektronicznego, sprzętu optycznego i lekarstw."
  },
  {
    "id": "R05_NIEM_05",
    "section": "Niemcy i przemysł",
    "type": "match",
    "prompt": "Połącz niemiecką firmę z dziedziną produkcji.",
    "options": null,
    "left": [
      "Volkswagen",
      "Siemens",
      "Zeiss",
      "Bayer"
    ],
    "right": [
      "samochody",
      "sprzęt elektroniczny",
      "sprzęt optyczny",
      "lekarstwa"
    ],
    "answer": {
      "Volkswagen": "samochody",
      "Siemens": "sprzęt elektroniczny",
      "Zeiss": "sprzęt optyczny",
      "Bayer": "lekarstwa"
    },
    "explanation": "Do znanych niemieckich producentów należą Volkswagen, Siemens, Zeiss i Bayer."
  },
  {
    "id": "R05_NIEM_06",
    "section": "Niemcy i przemysł",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do dawnych podstaw przemysłu albo do nowych funkcji terenów poprzemysłowych w Nadrenii Północnej-Westfalii.",
    "options": null,
    "items": [
      "kopalnie węgla kamiennego",
      "huty",
      "muzea dziedzictwa przemysłowego",
      "tereny rekreacyjne",
      "centra kulturalno-rozrywkowe",
      "sektor kreatywny"
    ],
    "categories": [
      "dawny przemysł",
      "nowe funkcje"
    ],
    "answer": {
      "dawny przemysł": [
        "kopalnie węgla kamiennego",
        "huty"
      ],
      "nowe funkcje": [
        "muzea dziedzictwa przemysłowego",
        "tereny rekreacyjne",
        "centra kulturalno-rozrywkowe",
        "sektor kreatywny"
      ]
    },
    "explanation": "Po zamykaniu kopalń i hut część terenów zrekultywowano oraz przeznaczono na muzea, rekreację, kulturę i działalność kreatywną."
  },
  {
    "id": "R05_NIEM_07",
    "section": "Niemcy i przemysł",
    "type": "sequence",
    "prompt": "Ułóż zmiany w Nadrenii Północnej-Westfalii w logicznej kolejności.",
    "options": null,
    "items": [
      "rozwój nowoczesnego przetwórstwa i usług",
      "wzrost kosztów wydobycia i produkcji stali",
      "dominacja kopalń i hut",
      "zamykanie kopalń i hut",
      "rekultywacja terenów poprzemysłowych"
    ],
    "answer": [
      "dominacja kopalń i hut",
      "wzrost kosztów wydobycia i produkcji stali",
      "zamykanie kopalń i hut",
      "rozwój nowoczesnego przetwórstwa i usług",
      "rekultywacja terenów poprzemysłowych"
    ],
    "explanation": "Najpierw region opierał się na kopalniach i hutach, później z powodu kosztów je zamykano, rozwijano nowocześniejszą produkcję i zmieniano funkcje dawnych zakładów."
  },
  {
    "id": "R05_NIEM_08",
    "section": "Niemcy i przemysł",
    "type": "scenario",
    "prompt": "Na lekcji oglądasz mapę zachodnich Niemiec. Nauczyciel wskazuje land, w którym zaczęły powstawać niemieckie zakłady przemysłowe, a dziś jest to jeden z najbogatszych landów. O jaki land chodzi?",
    "options": [
      "Nadrenia Północna-Westfalia",
      "Bawaria",
      "Saksonia",
      "Brandenburgia",
      "Szlezwik-Holsztyn",
      "Turyngia"
    ],
    "answer": 0,
    "image": "r05_nadrenia_przemysl.jpg",
    "explanation": "Pierwsze zakłady przemysłowe powstały w Nadrenii Północnej-Westfalii, gdzie utworzyło się Zagłębie Ruhry."
  },
  {
    "id": "R05_NIEM_09",
    "section": "Niemcy i przemysł",
    "type": "riddle",
    "prompt": "Największy obszar dużej koncentracji przemysłu w Niemczech i całej zachodniej Europie to...",
    "options": null,
    "answer": "Zagłębie Ruhry",
    "altAnswers": [
      "Zagłębie Ruhry",
      "Zaglebie Ruhry",
      "Ruhra",
      "Zagłębie Ruhry w Nadrenii Północnej-Westfalii"
    ],
    "explanation": "Zagłębie Ruhry powstało z koncentracji kopalń, hut, elektrociepłowni, rafinerii i zakładów maszyn górniczych."
  },
  {
    "id": "R05_NIEM_10",
    "section": "Niemcy i przemysł",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do sposobów zagospodarowania terenów po kopalniach i hutach: muzea dziedzictwa przemysłowego, tereny rekreacyjne, centra kulturalno-rozrywkowe, nowe szyby wydobywcze.",
    "options": null,
    "answer": "nowe szyby wydobywcze",
    "image": "r05_zollverein_rekultywacja.jpg",
    "explanation": "Tereny po zamkniętych kopalniach i hutach są wykorzystywane jako muzea, tereny rekreacyjne i centra kulturalno-rozrywkowe, a nie do ponownego rozwijania wydobycia."
  },
  {
    "id": "R05_CZS_01",
    "section": "Czechy i Słowacja",
    "type": "single_choice",
    "prompt": "Jak nazywa się stolica Czech?",
    "options": [
      "Praga",
      "Bratysława",
      "Wilno",
      "Mińsk",
      "Berlin",
      "Kijów"
    ],
    "answer": 0,
    "explanation": "Stolicą Czech jest Praga."
  },
  {
    "id": "R05_CZS_02",
    "section": "Czechy i Słowacja",
    "type": "true_false",
    "prompt": "Czechy i Słowacja nie mają dostępu do morza.",
    "options": null,
    "answer": true,
    "explanation": "Czechy i Słowacja nie mają dostępu do morza."
  },
  {
    "id": "R05_CZS_03",
    "section": "Czechy i Słowacja",
    "type": "multi_select",
    "prompt": "Zaznacz atrakcje i formy wypoczynku szczególnie charakterystyczne dla Słowacji.",
    "options": [
      "wędrówki po górach",
      "zwiedzanie jaskiń",
      "narciarstwo i snowboard",
      "parki wodne z wodami termalnymi",
      "plaże oceaniczne",
      "tajga"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_tatry_slowackie.jpg",
    "explanation": "Słowację wyróżniają górskie walory przyrodnicze, jaskinie, sporty zimowe oraz parki wodne wykorzystujące wody termalne."
  },
  {
    "id": "R05_CZS_04",
    "section": "Czechy i Słowacja",
    "type": "fill_in",
    "prompt": "Do 1993 roku Czechy i Słowacja tworzyły __________, a od 2004 roku należą do __________.",
    "options": null,
    "answer": [
      "Czechosłowację",
      "Unii Europejskiej"
    ],
    "altAnswers": [
      [
        "Czechosłowację",
        "Czechoslowacje",
        "Czechosłowacja"
      ],
      [
        "Unii Europejskiej",
        "UE",
        "Unii Europejskiej."
      ]
    ],
    "explanation": "Czechy i Słowacja do 1993 roku tworzyły Czechosłowację, a od 2004 roku są członkami Unii Europejskiej."
  },
  {
    "id": "R05_CZS_05",
    "section": "Czechy i Słowacja",
    "type": "match",
    "prompt": "Połącz państwo z jego stolicą.",
    "options": null,
    "left": [
      "Czechy",
      "Słowacja"
    ],
    "right": [
      "Praga",
      "Bratysława"
    ],
    "answer": {
      "Czechy": "Praga",
      "Słowacja": "Bratysława"
    },
    "explanation": "Stolicą Czech jest Praga, a stolicą Słowacji jest Bratysława."
  },
  {
    "id": "R05_CZS_06",
    "section": "Czechy i Słowacja",
    "type": "scenario",
    "prompt": "Planujesz wycieczkę do kraju, w którym szczególne miejsce w turystyce zajmuje Praga, Hradczany i Złota Uliczka. Który kraj wybierasz?",
    "options": [
      "Czechy",
      "Słowacja",
      "Litwa",
      "Białoruś",
      "Ukraina",
      "Rosja"
    ],
    "answer": 0,
    "image": "r05_praga_hradczany.jpg",
    "explanation": "Praga jest stolicą Czech, a Hradczany i Złota Uliczka należą do jej znanych atrakcji."
  },
  {
    "id": "R05_CZS_07",
    "section": "Czechy i Słowacja",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do słowackich walorów turystycznych: Tatry, Łomnica, Gerlach, Hradczany.",
    "options": null,
    "answer": "Hradczany",
    "explanation": "Hradczany znajdują się w Pradze, czyli w Czechach, a pozostałe elementy dotyczą górskich walorów Słowacji."
  },
  {
    "id": "R05_CZS_08",
    "section": "Czechy i Słowacja",
    "type": "riddle",
    "prompt": "Najwyższy szczyt Słowacji i całych Karpat to...",
    "options": null,
    "answer": "Gerlach",
    "altAnswers": [
      "Gerlach",
      "Gerlachowski Szczyt"
    ],
    "image": "r05_gerlach_karpaty.jpg",
    "explanation": "Gerlach ma 2654 m n.p.m. i leży tuż przy granicy polsko-słowackiej."
  },
  {
    "id": "R05_CZS_09",
    "section": "Czechy i Słowacja",
    "type": "sort",
    "prompt": "Przyporządkuj atrakcje do Czech albo Słowacji.",
    "options": null,
    "items": [
      "Hradczany",
      "pałac w Lednicach",
      "skalne miasto koło Adrspach",
      "Dobszyńska Jaskinia Lodowa",
      "Zamek Spiski",
      "wody termalne"
    ],
    "categories": [
      "Czechy",
      "Słowacja"
    ],
    "answer": {
      "Czechy": [
        "Hradczany",
        "pałac w Lednicach",
        "skalne miasto koło Adrspach"
      ],
      "Słowacja": [
        "Dobszyńska Jaskinia Lodowa",
        "Zamek Spiski",
        "wody termalne"
      ]
    },
    "explanation": "Te atrakcje są przykładami walorów turystycznych południowych sąsiadów Polski."
  },
  {
    "id": "R05_CZS_10",
    "section": "Czechy i Słowacja",
    "type": "fill_in",
    "prompt": "Wody termalne pochodzą z głębi Ziemi, a ich temperatura przekracza __________.",
    "options": null,
    "answer": [
      "20°C"
    ],
    "altAnswers": [
      [
        "20°C",
        "20 stopni Celsjusza",
        "20 stopni",
        "20 st. C"
      ]
    ],
    "explanation": "Na Słowacji wody termalne mają temperaturę powyżej 20°C, dlatego mogły powstać parki wodne z gorącymi basenami."
  },
  {
    "id": "R05_LIB_01",
    "section": "Litwa i Białoruś",
    "type": "single_choice",
    "prompt": "Które zdanie poprawnie porównuje dostęp Litwy i Białorusi do morza?",
    "options": [
      "Litwa ma dostęp do Morza Bałtyckiego, a Białoruś nie ma dostępu do morza.",
      "Białoruś ma dostęp do Morza Bałtyckiego, a Litwa nie ma dostępu do morza.",
      "Oba kraje mają dostęp do Morza Czarnego.",
      "Oba kraje nie mają dostępu do morza."
    ],
    "answer": 0,
    "explanation": "Litwa leży nad Morzem Bałtyckim, natomiast Białoruś jest państwem bez dostępu do morza."
  },
  {
    "id": "R05_LIB_02",
    "section": "Litwa i Białoruś",
    "type": "true_false",
    "prompt": "Litwa i Białoruś wraz z Polską tworzyły przez wieki jedno państwo.",
    "options": null,
    "answer": true,
    "explanation": "Wspólna historia sprawiła, że na Litwie i Białorusi żyje wielu Polaków oraz pozostały liczne polskie ślady kultury."
  },
  {
    "id": "R05_LIB_03",
    "section": "Litwa i Białoruś",
    "type": "multi_select",
    "prompt": "Zaznacz cechy środowiska przyrodniczego Litwy i Białorusi.",
    "options": [
      "przewaga nizin",
      "liczne jeziora polodowcowe",
      "gęsta sieć rzek nizinnych",
      "bagna na znacznych obszarach",
      "wysokie Alpy",
      "pustynie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na Litwie i Białorusi przeważają niziny, występują jeziora polodowcowe, wiele rzek oraz obszary bagienne."
  },
  {
    "id": "R05_LIB_04",
    "section": "Litwa i Białoruś",
    "type": "fill_in",
    "prompt": "Litwa i Białoruś stały się niezależnymi państwami w 1991 roku po rozpadzie __________.",
    "options": null,
    "answer": [
      "Związku Sowieckiego"
    ],
    "altAnswers": [
      [
        "Związku Sowieckiego",
        "Zwiazku Sowieckiego",
        "ZSRR"
      ]
    ],
    "explanation": "Oba państwa powstały po rozpadzie Związku Sowieckiego."
  },
  {
    "id": "R05_LIB_05",
    "section": "Litwa i Białoruś",
    "type": "match",
    "prompt": "Połącz państwo z jego stolicą.",
    "options": null,
    "left": [
      "Litwa",
      "Białoruś"
    ],
    "right": [
      "Wilno",
      "Mińsk"
    ],
    "answer": {
      "Litwa": "Wilno",
      "Białoruś": "Mińsk"
    },
    "explanation": "Stolicą Litwy jest Wilno, a stolicą Białorusi jest Mińsk."
  },
  {
    "id": "R05_LIB_06",
    "section": "Litwa i Białoruś",
    "type": "scenario",
    "prompt": "Kuracjusz z Polski chce odwiedzić znane litewskie uzdrowisko leżące około 100 km od Suwałk. Którą miejscowość wybierze?",
    "options": [
      "Druskieniki",
      "Grodno",
      "Nieśwież",
      "Kowno",
      "Mińsk",
      "Troki"
    ],
    "answer": 0,
    "image": "r05_druskiniki_uzdrowisko.jpg",
    "explanation": "Druskieniki to jedno z najsłynniejszych litewskich uzdrowisk odwiedzanych także przez Polaków."
  },
  {
    "id": "R05_LIB_07",
    "section": "Litwa i Białoruś",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do miejsc i obiektów litewskich: Mierzeja Kurońska, Druskieniki, Kłajpeda, Nieśwież.",
    "options": null,
    "answer": "Nieśwież",
    "explanation": "Nieśwież leży na Białorusi, natomiast Mierzeja Kurońska, Druskieniki i Kłajpeda dotyczą Litwy."
  },
  {
    "id": "R05_LIB_08",
    "section": "Litwa i Białoruś",
    "type": "riddle",
    "prompt": "Największa rzeka Litwy, której źródła znajdują się na Białorusi, to...",
    "options": null,
    "answer": "Niemen",
    "altAnswers": [
      "Niemen"
    ],
    "image": "r05_niemen_rzeka.jpg",
    "explanation": "Niemen jest największą rzeką Litwy, a jego źródła znajdują się na Białorusi."
  },
  {
    "id": "R05_LIB_09",
    "section": "Litwa i Białoruś",
    "type": "sort",
    "prompt": "Przyporządkuj miejsca do Litwy albo Białorusi.",
    "options": null,
    "items": [
      "Stare Miasto w Wilnie",
      "Zamek w Trokach",
      "Druskieniki",
      "Zamek w Mirze",
      "Zamek w Nieświeżu",
      "Grodno"
    ],
    "categories": [
      "Litwa",
      "Białoruś"
    ],
    "answer": {
      "Litwa": [
        "Stare Miasto w Wilnie",
        "Zamek w Trokach",
        "Druskieniki"
      ],
      "Białoruś": [
        "Zamek w Mirze",
        "Zamek w Nieświeżu",
        "Grodno"
      ]
    },
    "image": "r05_wilno_stare_miasto.jpg",
    "explanation": "Wilno, Troki i Druskieniki są przykładami miejsc na Litwie, a Mir, Nieśwież i Grodno - na Białorusi."
  },
  {
    "id": "R05_LIB_10",
    "section": "Litwa i Białoruś",
    "type": "single_choice",
    "prompt": "Która puszcza leży na pograniczu polsko-białoruskim i zajmuje ponad 150 000 ha?",
    "options": [
      "Puszcza Białowieska",
      "Puszcza Kampinoska",
      "Puszcza Notecka",
      "Puszcza Augustowska",
      "Puszcza Niepołomicka",
      "Puszcza Zielona"
    ],
    "answer": 0,
    "explanation": "Puszcza Białowieska jest ważnym elementem dziedzictwa przyrodniczego na pograniczu polsko-białoruskim."
  },
  {
    "id": "R05_UKR_01",
    "section": "Ukraina",
    "type": "single_choice",
    "prompt": "Jaką pozycję zajmuje Ukraina pod względem wielkości terytorium w Europie?",
    "options": [
      "drugą",
      "pierwszą",
      "trzecią",
      "dziesiątą",
      "dwunastą",
      "ostatnią"
    ],
    "answer": 0,
    "explanation": "Ukraina jest drugim pod względem wielkości państwem Europy."
  },
  {
    "id": "R05_UKR_02",
    "section": "Ukraina",
    "type": "true_false",
    "prompt": "W 2022 roku Rosja dokonała inwazji na Ukrainę.",
    "options": null,
    "answer": true,
    "explanation": "Od rosyjskiej inwazji w 2022 roku trwa wojna między Rosją a Ukrainą."
  },
  {
    "id": "R05_UKR_03",
    "section": "Ukraina",
    "type": "multi_select",
    "prompt": "Zaznacz cechy Ukrainy sprzyjające rozwojowi gospodarki.",
    "options": [
      "bardzo żyzne gleby",
      "łagodny klimat",
      "przewaga nizin",
      "nadmorskie położenie",
      "brak surowców mineralnych",
      "klimat podbiegunowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_ukraina_rolnictwo.jpg",
    "explanation": "Rozwój gospodarki Ukrainy wspierały żyzne gleby, łagodny klimat, niziny oraz położenie nad morzem."
  },
  {
    "id": "R05_UKR_04",
    "section": "Ukraina",
    "type": "fill_in",
    "prompt": "W 2014 roku konflikt rosyjsko-ukraiński rozpoczął się na __________ oraz na __________ Ukrainy.",
    "options": null,
    "answer": [
      "Półwyspie Krymskim",
      "wschodzie"
    ],
    "altAnswers": [
      [
        "Półwyspie Krymskim",
        "Pólwyspie Krymskim",
        "Krymie",
        "Półwyspie Krymskim"
      ],
      [
        "wschodzie",
        "wschodzie kraju"
      ]
    ],
    "explanation": "Wydarzenia z 2014 roku zapoczątkowały konflikt na Półwyspie Krymskim oraz na wschodzie Ukrainy."
  },
  {
    "id": "R05_UKR_05",
    "section": "Ukraina",
    "type": "match",
    "prompt": "Połącz skutek wojny z przykładem.",
    "options": null,
    "left": [
      "emigracja",
      "zniszczenia infrastruktury",
      "spadek produkcji",
      "schronienie ludności"
    ],
    "right": [
      "miliony osób opuściły kraj",
      "zniszczono drogi i mosty",
      "wiele fabryk przerwało pracę",
      "stacje metra pełnią funkcję schronów"
    ],
    "answer": {
      "emigracja": "miliony osób opuściły kraj",
      "zniszczenia infrastruktury": "zniszczono drogi i mosty",
      "spadek produkcji": "wiele fabryk przerwało pracę",
      "schronienie ludności": "stacje metra pełnią funkcję schronów"
    },
    "explanation": "Wojna spowodowała emigrację, zniszczenia infrastruktury, przerwanie pracy wielu fabryk oraz konieczność szukania schronienia."
  },
  {
    "id": "R05_UKR_06",
    "section": "Ukraina",
    "type": "scenario",
    "prompt": "Czytasz tekst o kraju nazywanym spichlerzem Europy, ponieważ produkuje i eksportuje dużo zbóż. O którym sąsiedzie Polski mowa?",
    "options": [
      "Ukraina",
      "Czechy",
      "Litwa",
      "Białoruś",
      "Słowacja",
      "Niemcy"
    ],
    "answer": 0,
    "explanation": "Ukraina bywa nazywana spichlerzem Europy, bo produkcja zbóż jest tam bardzo duża."
  },
  {
    "id": "R05_UKR_07",
    "section": "Ukraina",
    "type": "riddle",
    "prompt": "Określenie Ukrainy związane z bardzo dużą produkcją zbóż to...",
    "options": null,
    "answer": "spichlerz Europy",
    "altAnswers": [
      "spichlerz Europy",
      "spichlerzem Europy"
    ],
    "explanation": "Produkcja zbóż w Ukrainie jest tak duża, że kraj ten eksportuje je do wielu państw Europy, Azji i Afryki."
  },
  {
    "id": "R05_UKR_08",
    "section": "Ukraina",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do problemów Ukrainy: wojna, bombardowania, emigracja, nadmierny ruch turystyczny.",
    "options": null,
    "answer": "nadmierny ruch turystyczny",
    "image": "r05_ukraina_wojna_skutki.jpg",
    "explanation": "Do problemów Ukrainy należą wojna, bombardowania i emigracja, a nie nadmierny ruch turystyczny."
  },
  {
    "id": "R05_UKR_09",
    "section": "Ukraina",
    "type": "sort",
    "prompt": "Przyporządkuj czynniki do trzech przyczyn zmniejszania się liczby ludności Ukrainy.",
    "options": null,
    "items": [
      "wysokie koszty utrzymania dzieci",
      "utrudniony dostęp do służby zdrowia i leków",
      "trudne warunki życia",
      "trudności ze znalezieniem pracy",
      "brak perspektyw na poprawę warunków życia"
    ],
    "categories": [
      "mała liczba urodzeń",
      "rosnąca liczba zgonów",
      "emigracja za granicę"
    ],
    "answer": {
      "mała liczba urodzeń": [
        "wysokie koszty utrzymania dzieci"
      ],
      "rosnąca liczba zgonów": [
        "utrudniony dostęp do służby zdrowia i leków",
        "trudne warunki życia"
      ],
      "emigracja za granicę": [
        "trudności ze znalezieniem pracy",
        "brak perspektyw na poprawę warunków życia"
      ]
    },
    "image": "r05_ukraina_ludnosc_emigracja.jpg",
    "explanation": "Spadek liczby ludności wynika z małej liczby urodzeń, rosnącej liczby zgonów i emigracji za granicę."
  },
  {
    "id": "R05_UKR_10",
    "section": "Ukraina",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące Ukrainy w kolejności chronologicznej.",
    "options": null,
    "items": [
      "rosyjska inwazja na Ukrainę",
      "rozpad Związku Sowieckiego i niepodległość Ukrainy",
      "konflikt na Półwyspie Krymskim i wschodzie Ukrainy",
      "spadek liczby ludności do około 37 mln w 2023 roku"
    ],
    "answer": [
      "rozpad Związku Sowieckiego i niepodległość Ukrainy",
      "konflikt na Półwyspie Krymskim i wschodzie Ukrainy",
      "rosyjska inwazja na Ukrainę",
      "spadek liczby ludności do około 37 mln w 2023 roku"
    ],
    "explanation": "Ukraina uzyskała niepodległość w 1991 roku, konflikt z Rosją rozpoczął się w 2014 roku, inwazja nastąpiła w 2022 roku, a w 2023 roku liczba ludności spadła do około 37 mln."
  },
  {
    "id": "R05_ROS_01",
    "section": "Rosja i przyroda",
    "type": "single_choice",
    "prompt": "Które państwo jest największe pod względem powierzchni na świecie?",
    "options": [
      "Rosję",
      "Ukrainę",
      "Niemcy",
      "Białoruś",
      "Czechy",
      "Litwę"
    ],
    "answer": 0,
    "explanation": "Rosja jest największym państwem świata i leży w Europie oraz Azji."
  },
  {
    "id": "R05_ROS_02",
    "section": "Rosja i przyroda",
    "type": "true_false",
    "prompt": "Tylko około 1/4 powierzchni Rosji znajduje się w Europie.",
    "options": null,
    "answer": true,
    "explanation": "Zaledwie jedna czwarta terytorium Rosji leży w Europie, a reszta w Azji."
  },
  {
    "id": "R05_ROS_03",
    "section": "Rosja i przyroda",
    "type": "fill_in",
    "prompt": "Podróż koleją z Moskwy do Władywostoku trwa aż __________ dni i nocy.",
    "options": null,
    "answer": [
      "sześć"
    ],
    "altAnswers": [
      [
        "sześć",
        "6",
        "szesc"
      ]
    ],
    "image": "r05_kolej_transsyberyjska.jpg",
    "explanation": "Ogromną rozległość Rosji pokazuje podróż koleją z Moskwy do Władywostoku trwająca sześć dni i nocy."
  },
  {
    "id": "R05_ROS_04",
    "section": "Rosja i przyroda",
    "type": "multi_select",
    "prompt": "Zaznacz krainy lub formy ukształtowania powierzchni Rosji.",
    "options": [
      "Nizina Wschodnioeuropejska",
      "Ural",
      "Nizina Zachodniosyberyjska",
      "Wyżyna Środkowosyberyjska",
      "Alpy",
      "Sudety"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do ważnych elementów rzeźby Rosji należą Nizina Wschodnioeuropejska, Ural, Nizina Zachodniosyberyjska i Wyżyna Środkowosyberyjska."
  },
  {
    "id": "R05_ROS_05",
    "section": "Rosja i przyroda",
    "type": "match",
    "prompt": "Połącz obiekt geograficzny z informacją.",
    "options": null,
    "left": [
      "Wołga",
      "Bajkał",
      "Elbrus",
      "Kluczewska Sopka"
    ],
    "right": [
      "najdłuższa rzeka Europy",
      "najgłębsze jezioro na Ziemi",
      "najwyższy szczyt Rosji",
      "czynny wulkan na Kamczatce"
    ],
    "answer": {
      "Wołga": "najdłuższa rzeka Europy",
      "Bajkał": "najgłębsze jezioro na Ziemi",
      "Elbrus": "najwyższy szczyt Rosji",
      "Kluczewska Sopka": "czynny wulkan na Kamczatce"
    },
    "image": "r05_bajkal_jezioro.jpg",
    "explanation": "Wołga, Bajkał, Elbrus i Kluczewska Sopka to charakterystyczne obiekty przyrodnicze Rosji."
  },
  {
    "id": "R05_ROS_06",
    "section": "Rosja i przyroda",
    "type": "sort",
    "prompt": "Przyporządkuj typ roślinności lub użytkowania terenu do obszaru Rosji, w którym został opisany.",
    "options": null,
    "items": [
      "lasy liściaste i mieszane",
      "tundra",
      "tajga",
      "pola uprawne"
    ],
    "categories": [
      "europejska część Rosji",
      "północ kraju",
      "azjatycka część Rosji",
      "południowe rejony"
    ],
    "answer": {
      "europejska część Rosji": [
        "lasy liściaste i mieszane"
      ],
      "północ kraju": [
        "tundra"
      ],
      "azjatycka część Rosji": [
        "tajga"
      ],
      "południowe rejony": [
        "pola uprawne"
      ]
    },
    "explanation": "W europejskiej części Rosji występują głównie lasy liściaste i mieszane, na północy tundra, w części azjatyckiej tajga, a na południu dawne stepy przekształcono w pola uprawne."
  },
  {
    "id": "R05_ROS_07",
    "section": "Rosja i przyroda",
    "type": "riddle",
    "prompt": "Najgłębsze jezioro na Ziemi, leżące w południowo-wschodniej Rosji, to...",
    "options": null,
    "answer": "Bajkał",
    "altAnswers": [
      "Bajkał",
      "Bajkal",
      "jezioro Bajkał"
    ],
    "explanation": "Bajkał ma głębokość 1620 m i jest największym jeziorem Rosji."
  },
  {
    "id": "R05_ROS_08",
    "section": "Rosja i przyroda",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do surowców mineralnych Rosji: węgiel kamienny, gaz ziemny, ropa naftowa, wody termalne.",
    "options": null,
    "answer": "wody termalne",
    "explanation": "Węgiel kamienny, gaz ziemny i ropa naftowa to ważne rosyjskie surowce; wody termalne nie pasują do tej grupy."
  },
  {
    "id": "R05_ROS_09",
    "section": "Rosja i przyroda",
    "type": "scenario",
    "prompt": "Uczeń tłumaczy, dlaczego Rosja ma tak duże zróżnicowanie ukształtowania powierzchni, klimatu i roślinności. Która przyczyna jest najtrafniejsza?",
    "options": [
      "ogromna powierzchnia kraju",
      "bardzo mała liczba jezior",
      "brak gór",
      "położenie tylko w Europie",
      "brak rzek",
      "jednakowy klimat na całym obszarze"
    ],
    "answer": 0,
    "explanation": "Ogromna powierzchnia Rosji sprawia, że kraj jest bardzo zróżnicowany przyrodniczo."
  },
  {
    "id": "R05_ROS_10",
    "section": "Rosja i przyroda",
    "type": "true_false",
    "prompt": "Ładoga i Onega leżą w Europie i należą do największych jezior kontynentu.",
    "options": null,
    "answer": true,
    "explanation": "Po Bajkale kolejnymi wielkimi jeziorami Rosji są Ładoga i Onega, położone w europejskiej części kraju."
  },
  {
    "id": "R05_REL_01",
    "section": "Relacje z sąsiadami",
    "type": "single_choice",
    "prompt": "Z iloma państwami graniczy obecnie Polska?",
    "options": [
      "z siedmioma",
      "z trzema",
      "z pięcioma",
      "z sześcioma",
      "z ośmioma",
      "z dziewięcioma"
    ],
    "answer": 0,
    "explanation": "Obecnie Polska graniczy z siedmioma państwami."
  },
  {
    "id": "R05_REL_02",
    "section": "Relacje z sąsiadami",
    "type": "true_false",
    "prompt": "Relacje Polski z Rosją i Białorusią są obecnie opisane jako nieprzyjazne lub złe.",
    "options": null,
    "answer": true,
    "explanation": "Polska ma dobre relacje z większością sąsiadów, ale złe stosunki z Rosją i Białorusią."
  },
  {
    "id": "R05_REL_03",
    "section": "Relacje z sąsiadami",
    "type": "multi_select",
    "prompt": "Zaznacz sąsiadów Polski należących do Unii Europejskiej.",
    "options": [
      "Niemcy",
      "Czechy",
      "Słowacja",
      "Litwa",
      "Ukraina",
      "Białoruś",
      "Rosja"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_sasiedzi_unia_europejska.jpg",
    "explanation": "Wśród sąsiadów Polski do Unii Europejskiej należą Niemcy, Czechy, Słowacja i Litwa."
  },
  {
    "id": "R05_REL_04",
    "section": "Relacje z sąsiadami",
    "type": "fill_in",
    "prompt": "Obywatele państw znajdujących się w strefie __________ mogą przekraczać granice państwowe bez kontroli dokumentów.",
    "options": null,
    "answer": [
      "Schengen"
    ],
    "altAnswers": [
      [
        "Schengen",
        "szengen"
      ]
    ],
    "explanation": "Strefa Schengen pozwala na przekraczanie granic państw członkowskich bez kontroli dokumentów."
  },
  {
    "id": "R05_REL_05",
    "section": "Relacje z sąsiadami",
    "type": "match",
    "prompt": "Połącz organizację z opisem współpracy.",
    "options": null,
    "left": [
      "Unia Europejska",
      "Strefa Schengen",
      "NATO",
      "Grupa Wyszehradzka"
    ],
    "right": [
      "współpraca gospodarcza i swobodny przepływ",
      "granice bez kontroli dokumentów",
      "organizacja wojskowa",
      "współpraca Polski Czech Słowacji i Węgier"
    ],
    "answer": {
      "Unia Europejska": "współpraca gospodarcza i swobodny przepływ",
      "Strefa Schengen": "granice bez kontroli dokumentów",
      "NATO": "organizacja wojskowa",
      "Grupa Wyszehradzka": "współpraca Polski Czech Słowacji i Węgier"
    },
    "explanation": "Polska współpracuje z sąsiadami w ramach różnych organizacji międzynarodowych."
  },
  {
    "id": "R05_REL_06",
    "section": "Relacje z sąsiadami",
    "type": "scenario",
    "prompt": "W opisie relacji czytasz, że Polska była pierwszym państwem, które uznało niepodległość sąsiada powstałego w 1991 roku po rozpadzie Związku Sowieckiego. O który kraj chodzi?",
    "options": [
      "Ukrainę",
      "Niemcy",
      "Czechy",
      "Słowację",
      "Białoruś",
      "Rosję"
    ],
    "answer": 0,
    "explanation": "Polska jako pierwsza uznała niepodległość Ukrainy po jej powstaniu w 1991 roku."
  },
  {
    "id": "R05_REL_07",
    "section": "Relacje z sąsiadami",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do sąsiadów, z którymi Polska utrzymuje dobre relacje: Niemcy, Czechy, Słowacja, Białoruś.",
    "options": null,
    "answer": "Białoruś",
    "explanation": "Relacje Polski z Białorusią nie są obecnie przyjazne, natomiast z Niemcami, Czechami i Słowacją układają się dobrze lub poprawnie."
  },
  {
    "id": "R05_REL_08",
    "section": "Relacje z sąsiadami",
    "type": "riddle",
    "prompt": "Obszary położone po obu stronach granicy, np. powiaty lub gminy z różnych państw, które współpracują lokalnie, to...",
    "options": null,
    "answer": "euroregiony",
    "altAnswers": [
      "euroregiony",
      "euroregion"
    ],
    "image": "r05_euroregion_wspolpraca.jpg",
    "explanation": "Euroregiony to przykłady współpracy lokalnej terenów przygranicznych."
  },
  {
    "id": "R05_REL_09",
    "section": "Relacje z sąsiadami",
    "type": "sort",
    "prompt": "Przyporządkuj sąsiadów do obecnego charakteru relacji z Polską.",
    "options": null,
    "items": [
      "Niemcy",
      "Czechy",
      "Słowacja",
      "Ukraina",
      "Litwa",
      "Rosja",
      "Białoruś"
    ],
    "categories": [
      "relacje dobre",
      "relacje złe lub nieprzyjazne"
    ],
    "answer": {
      "relacje dobre": [
        "Niemcy",
        "Czechy",
        "Słowacja",
        "Ukraina",
        "Litwa"
      ],
      "relacje złe lub nieprzyjazne": [
        "Rosja",
        "Białoruś"
      ]
    },
    "explanation": "Dobre relacje Polska ma z Niemcami, Czechami, Słowacją, Ukrainą i Litwą, a złe lub nieprzyjazne z Rosją i Białorusią."
  },
  {
    "id": "R05_REL_10",
    "section": "Relacje z sąsiadami",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące sąsiadów Polski w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Niemcy powstały jako obecne państwo",
      "Czechy i Słowacja rozdzieliły się",
      "Polska miała trzech sąsiadów",
      "Polska Czechy Słowacja i Litwa weszły do Unii Europejskiej",
      "Rosja dokonała inwazji na Ukrainę"
    ],
    "answer": [
      "Polska miała trzech sąsiadów",
      "Niemcy powstały jako obecne państwo",
      "Czechy i Słowacja rozdzieliły się",
      "Polska Czechy Słowacja i Litwa weszły do Unii Europejskiej",
      "Rosja dokonała inwazji na Ukrainę"
    ],
    "explanation": "W latach 80. Polska miała trzech sąsiadów, Niemcy powstały w 1990 roku, Czechy i Słowacja rozdzieliły się w 1993 roku, członkostwo w UE nastąpiło w 2004 roku, a inwazja Rosji na Ukrainę w 2022 roku."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki udział zatrudnionych w niemieckim przemyśle pracował w górnictwie według wykresu z 2020 roku?",
    "options": [
      "mniej niż 1/100",
      "około 1/4",
      "około połowa",
      "ponad 3/4",
      "dokładnie 1/10",
      "prawie wszyscy"
    ],
    "answer": 0,
    "explanation": "W górnictwie pracowało mniej niż 1/100 osób zatrudnionych w niemieckim przemyśle."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Nazwa Volkswagen oznacza po polsku __________.",
    "options": null,
    "answer": [
      "samochód dla ludu"
    ],
    "altAnswers": [
      [
        "samochód dla ludu",
        "samochod dla ludu"
      ]
    ],
    "explanation": "Samochody Volkswagena miały być niedrogie i dostępne dla przeciętnego człowieka."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz niemiecką atrakcję z informacją.",
    "options": null,
    "left": [
      "zamek Neuschwanstein",
      "Brama Brandenburska",
      "Katedra w Kolonii",
      "Lindau"
    ],
    "right": [
      "inspiracja dla parków Walta Disneya",
      "symbol zjednoczenia Niemiec",
      "budowana ponad 600 lat",
      "miasto nad Jeziorem Bodeńskim"
    ],
    "answer": {
      "zamek Neuschwanstein": "inspiracja dla parków Walta Disneya",
      "Brama Brandenburska": "symbol zjednoczenia Niemiec",
      "Katedra w Kolonii": "budowana ponad 600 lat",
      "Lindau": "miasto nad Jeziorem Bodeńskim"
    },
    "image": "r05_niemcy_atrakcje.jpg",
    "explanation": "Te obiekty są przykładami atrakcji Niemiec i mają charakterystyczne cechy."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W odróżnieniu od wielu krajów środkowej Europy liczba mieszkańców Czech w ostatnich 20 latach wzrosła.",
    "options": null,
    "answer": true,
    "explanation": "W opisie Czech zaznaczono, że w ostatnich 20 latach liczba mieszkańców tego kraju wzrosła."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką długość ma Dobszyńska Jaskinia Lodowa?",
    "options": [
      "1,5 km",
      "15 km",
      "150 m",
      "13 000 km",
      "600 m",
      "2 km"
    ],
    "answer": 0,
    "explanation": "Dobszyńska Jaskinia Lodowa ma długość 1,5 km i jest udostępniona do zwiedzania."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Święto folkloru organizowane co cztery lata w Wilnie, z którego dumni są Litwini, to...",
    "options": null,
    "answer": "Litewski Festiwal Piosenki",
    "altAnswers": [
      "Litewski Festiwal Piosenki",
      "festiwal piosenki",
      "Litewski festiwal piosenki"
    ],
    "explanation": "Litwini co cztery lata organizują w Wilnie Litewski Festiwal Piosenki."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz powody złych relacji Polski z Białorusią.",
    "options": [
      "autorytarne rządy na Białorusi",
      "ścisła współpraca Białorusi z Rosją",
      "poparcie rosyjskiej inwazji na Ukrainę",
      "utrudnianie sytuacji ludności polskojęzycznej",
      "wspólne wejście do Unii Europejskiej",
      "brak dostępu Białorusi do morza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przyczynami złych relacji są autorytarny charakter państwa, współpraca z Rosją, poparcie inwazji i utrudnianie sytuacji Polaków na Białorusi."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Czytasz, że polskie samoloty bardzo często patrolują przestrzeń powietrzną Litwy w ramach współpracy międzynarodowej. Której organizacji dotyczy ten przykład?",
    "options": [
      "NATO",
      "Grupa Wyszehradzka",
      "Strefa Schengen",
      "UNESCO",
      "Euroregion Karpacki",
      "Unia Europejska"
    ],
    "answer": 0,
    "explanation": "NATO jest organizacją wojskową, a Polska szczególnie blisko współpracuje w niej między innymi z Litwą."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rosja leży aż w dziewięciu __________.",
    "options": null,
    "answer": [
      "strefach czasowych"
    ],
    "altAnswers": [
      [
        "strefach czasowych",
        "strefy czasowe"
      ]
    ],
    "explanation": "Ciekawostka wskazuje, że Rosja obejmuje dziewięć stref czasowych."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na którym półwyspie leży Kluczewska Sopka, najaktywniejszy wulkan Europy i Azji?",
    "options": [
      "Kamczatka",
      "Krym",
      "Półwysep Czukocki",
      "Półwysep Kolski",
      "Jukatan",
      "Półwysep Iberyjski"
    ],
    "answer": 0,
    "explanation": "Kluczewska Sopka leży na półwyspie Kamczatka, we wschodniej części Rosji."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż informacje o liczbie ludności Ukrainy i wojnie w kolejności chronologicznej.",
    "options": null,
    "items": [
      "liczba ludności około 37 mln w 2023 roku",
      "ponad 50 mln mieszkańców w latach 90. XX wieku",
      "wybuch wojny w 2022 roku",
      "około 44 mln mieszkańców przed wojną"
    ],
    "answer": [
      "ponad 50 mln mieszkańców w latach 90. XX wieku",
      "około 44 mln mieszkańców przed wojną",
      "wybuch wojny w 2022 roku",
      "liczba ludności około 37 mln w 2023 roku"
    ],
    "explanation": "Ludność Ukrainy spadła z ponad 50 mln w latach 90. do około 44 mln przed wojną, potem wojna wybuchła w 2022 roku, a w 2023 roku liczba mieszkańców wynosiła około 37 mln."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj sąsiadów Polski do państw należących i nienależących do Unii Europejskiej.",
    "options": null,
    "items": [
      "Niemcy",
      "Czechy",
      "Słowacja",
      "Litwa",
      "Ukraina",
      "Białoruś",
      "Rosja"
    ],
    "categories": [
      "należą do Unii Europejskiej",
      "nie należą do Unii Europejskiej"
    ],
    "answer": {
      "należą do Unii Europejskiej": [
        "Niemcy",
        "Czechy",
        "Słowacja",
        "Litwa"
      ],
      "nie należą do Unii Europejskiej": [
        "Ukraina",
        "Białoruś",
        "Rosja"
      ]
    },
    "explanation": "Wśród sąsiadów Polski członkami Unii Europejskiej są Niemcy, Czechy, Słowacja i Litwa."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Sąsiedzi Polski",
  icon: "🧭",
  sectionOrder: [
    "Niemcy i przemysł",
    "Czechy i Słowacja",
    "Litwa i Białoruś",
    "Ukraina",
    "Rosja i przyroda",
    "Relacje z sąsiadami"
  ],
  sectionIcons: {
    "Niemcy i przemysł": "🏭",
    "Czechy i Słowacja": "⛰️",
    "Litwa i Białoruś": "🌲",
    "Ukraina": "🌾",
    "Rosja i przyroda": "❄️",
    "Relacje z sąsiadami": "🤝"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
