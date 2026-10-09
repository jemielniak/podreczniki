// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BIZ = Bizancjum i świat islamu
//   SPO = Społeczeństwo i kultura średniowiecza
//   EUR = Państwa i ludy średniowiecznej Europy
//   PIA = Polska pierwszych Piastów
//   ROZ = Rozbicie dzielnicowe i zjednoczenie Polski
//   JAG = Polska w XIV i XV wieku
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_BIZ_01",
    "section": "Bizancjum i świat islamu",
    "type": "single_choice",
    "prompt": "Które miasto było stolicą Cesarstwa Bizantyjskiego?",
    "explanation": "Konstantynopol, nazywany Nowym Rzymem, był stolicą greckojęzycznego cesarstwa wschodniorzymskiego.",
    "options": [
      "Rzym",
      "Konstantynopol",
      "Ateny",
      "Aleksandria",
      "Damaszek",
      "Jerozolima"
    ],
    "answer": 1
  },
  {
    "id": "R02_BIZ_02",
    "section": "Bizancjum i świat islamu",
    "type": "single_choice",
    "prompt": "Który cesarz polecił skodyfikować prawo rzymskie?",
    "explanation": "Justynian Wielki zlecił uporządkowanie przepisów, czego rezultatem był Kodeks Justyniana.",
    "options": [
      "Konstantyn Wielki",
      "Teodozjusz I",
      "Justynian Wielki",
      "Otton III",
      "Karol Wielki",
      "Henryk IV"
    ],
    "answer": 2,
    "image": "r02_hagia_sophia.jpg"
  },
  {
    "id": "R02_BIZ_03",
    "section": "Bizancjum i świat islamu",
    "type": "true_false",
    "prompt": "Hagia Sophia została zbudowana w Konstantynopolu na polecenie Justyniana Wielkiego.",
    "explanation": "Hagia Sophia, czyli Kościół Mądrości Bożej, należała do najbardziej znanych budowli wzniesionych za Justyniana.",
    "options": null,
    "answer": true,
    "image": "r02_hagia_sophia.jpg"
  },
  {
    "id": "R02_BIZ_04",
    "section": "Bizancjum i świat islamu",
    "type": "fill_in",
    "prompt": "W roku __________ doszło do wielkiej schizmy wschodniej.",
    "explanation": "W 1054 roku nastąpił podział Kościoła na zachodni, rzymskokatolicki, i wschodni, prawosławny.",
    "options": null,
    "answer": [
      "1054"
    ],
    "altAnswers": [
      [
        "1054",
        "1054 r."
      ]
    ]
  },
  {
    "id": "R02_BIZ_05",
    "section": "Bizancjum i świat islamu",
    "type": "match",
    "prompt": "Połącz pojęcie bizantyjskie z jego znaczeniem.",
    "explanation": "Bizancjum pozostawiło osiągnięcia architektoniczne, prawne, plastyczne i militarne.",
    "options": null,
    "left": [
      "Hagia Sophia",
      "Kodeks Justyniana",
      "Ikona",
      "Ogień grecki"
    ],
    "right": [
      "Obraz religijny na drewnie",
      "Substancja zapalająca trudna do ugaszenia wodą",
      "Kościół Mądrości Bożej",
      "Zbiór prawa rzymskiego"
    ],
    "answer": {
      "Hagia Sophia": "Kościół Mądrości Bożej",
      "Kodeks Justyniana": "Zbiór prawa rzymskiego",
      "Ikona": "Obraz religijny na drewnie",
      "Ogień grecki": "Substancja zapalająca trudna do ugaszenia wodą"
    },
    "image": "r02_mozaika_bizantyjska.jpg"
  },
  {
    "id": "R02_BIZ_06",
    "section": "Bizancjum i świat islamu",
    "type": "single_choice",
    "prompt": "Który prorok zapoczątkował islam?",
    "explanation": "Islam jest religią monoteistyczną, a za jej twórcę uznaje się Mahometa pochodzącego z Mekki.",
    "options": [
      "Mahomet",
      "Mojżesz",
      "Jezus",
      "św. Dominik",
      "św. Benedykt",
      "św. Wojciech"
    ],
    "answer": 0
  },
  {
    "id": "R02_BIZ_07",
    "section": "Bizancjum i świat islamu",
    "type": "multi_select",
    "prompt": "Zaznacz praktyki zaliczane do pięciu filarów islamu.",
    "explanation": "Pięć filarów islamu obejmuje wyznanie wiary, modlitwę, jałmużnę, post w ramadanie i pielgrzymkę do Mekki.",
    "options": [
      "Pielgrzymka do Mekki",
      "Chrzest",
      "Modlitwa pięć razy dziennie",
      "Jałmużna",
      "Spowiedź",
      "Post w ramadanie"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "image": "r02_meczet_z_minaretem.jpg"
  },
  {
    "id": "R02_BIZ_08",
    "section": "Bizancjum i świat islamu",
    "type": "riddle",
    "prompt": "Jak nazywa się wieża przy meczecie, z której wzywa się wiernych na modlitwę?",
    "explanation": "Minaret to wieża przy meczecie pełniąca funkcję miejsca wezwania wiernych na modlitwę.",
    "options": null,
    "answer": "minaret",
    "image": "r02_meczet_z_minaretem.jpg",
    "altAnswers": [
      "minaret",
      "minaretu"
    ]
  },
  {
    "id": "R02_BIZ_09",
    "section": "Bizancjum i świat islamu",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie należy do tradycji islamu: meczet, minaret, Koran, katedra.",
    "explanation": "Meczet, minaret i Koran łączą się z islamem; katedra jest świątynią chrześcijańską.",
    "options": null,
    "answer": "katedra"
  },
  {
    "id": "R02_BIZ_10",
    "section": "Bizancjum i świat islamu",
    "type": "sort",
    "prompt": "Przyporządkuj osiągnięcia do kręgu kulturowego.",
    "explanation": "W Bizancjum rozwijano prawo rzymskie i sztukę mozaiki; świat islamu rozwinął między innymi matematykę, arabeski i kaligrafię.",
    "options": null,
    "items": [
      "Kaligrafia arabska",
      "Kodeks Justyniana",
      "Arabeski",
      "Ogień grecki",
      "Mozaiki religijne",
      "Cyfry arabskie"
    ],
    "categories": [
      "Bizancjum",
      "Świat islamu"
    ],
    "answer": {
      "Bizancjum": [
        "Kodeks Justyniana",
        "Mozaiki religijne",
        "Ogień grecki"
      ],
      "Świat islamu": [
        "Cyfry arabskie",
        "Arabeski",
        "Kaligrafia arabska"
      ]
    },
    "image": "r02_arabeska.jpg"
  },
  {
    "id": "R02_BIZ_11",
    "section": "Bizancjum i świat islamu",
    "type": "sequence",
    "prompt": "Uszereguj wydarzenia od najwcześniejszego do najpóźniejszego.",
    "explanation": "Justynian panował w latach 527–565, hidżra nastąpiła w 622 roku, schizma w 1054 roku, a upadek Konstantynopola w 1453 roku.",
    "options": null,
    "items": [
      "Wielka schizma wschodnia",
      "Zdobycie Konstantynopola przez Turków",
      "Panowanie Justyniana Wielkiego",
      "Hidżra Mahometa"
    ],
    "answer": [
      "Panowanie Justyniana Wielkiego",
      "Hidżra Mahometa",
      "Wielka schizma wschodnia",
      "Zdobycie Konstantynopola przez Turków"
    ]
  },
  {
    "id": "R02_SPO_01",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Jak nazywał się najwyższy senior w średniowiecznej monarchii?",
    "explanation": "Suzeren był najwyższym seniorem w hierarchii feudalnej; w monarchiach rolę tę pełnił król.",
    "options": [
      "Wasal",
      "Suzeren",
      "Czeladnik",
      "Patrycjusz",
      "Sołtys",
      "Burmistrz"
    ],
    "answer": 1,
    "image": "r02_drabina_feudalna.jpg"
  },
  {
    "id": "R02_SPO_02",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "match",
    "prompt": "Połącz pojęcia systemu lennego z objaśnieniami.",
    "explanation": "W systemie lennym senior przekazywał lenno, a wasal składał hołd oraz zobowiązywał się do pomocy i rady.",
    "options": null,
    "left": [
      "Senior",
      "Wasal",
      "Lenno",
      "Hołd lenny"
    ],
    "right": [
      "Ceremonia przyrzeczenia wierności",
      "Ziemia przekazana w użytkowanie",
      "Oddawał ziemię w użytkowanie wasalowi",
      "Składał seniorowi przysięgę wierności"
    ],
    "answer": {
      "Senior": "Oddawał ziemię w użytkowanie wasalowi",
      "Wasal": "Składał seniorowi przysięgę wierności",
      "Lenno": "Ziemia przekazana w użytkowanie",
      "Hołd lenny": "Ceremonia przyrzeczenia wierności"
    },
    "image": "r02_drabina_feudalna.jpg"
  },
  {
    "id": "R02_SPO_03",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Która grupa należała do najbogatszej warstwy mieszczaństwa?",
    "explanation": "Patrycjat tworzyli przede wszystkim bogaci kupcy, bankierzy i urzędnicy miejscy.",
    "options": [
      "Plebs",
      "Pospólstwo",
      "Patrycjat",
      "Czeladź",
      "Zagrodnicy",
      "Kmiecie"
    ],
    "answer": 2
  },
  {
    "id": "R02_SPO_04",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "sort",
    "prompt": "Przydziel osoby do średniowiecznych stanów.",
    "explanation": "Duchowni, szlachta, mieszczanie i chłopi tworzyli stany o odrębnych prawach i obowiązkach.",
    "options": null,
    "items": [
      "Rzemieślnik",
      "Biskup",
      "Zagrodnik",
      "Rycerz",
      "Mnich",
      "Możnowładca świecki",
      "Patrycjusz",
      "Kmieć"
    ],
    "categories": [
      "Duchowieństwo",
      "Szlachta",
      "Mieszczaństwo",
      "Chłopstwo"
    ],
    "answer": {
      "Duchowieństwo": [
        "Biskup",
        "Mnich"
      ],
      "Szlachta": [
        "Rycerz",
        "Możnowładca świecki"
      ],
      "Mieszczaństwo": [
        "Patrycjusz",
        "Rzemieślnik"
      ],
      "Chłopstwo": [
        "Kmieć",
        "Zagrodnik"
      ]
    }
  },
  {
    "id": "R02_SPO_05",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "true_false",
    "prompt": "Cech skupiał rzemieślników wykonujących ten sam zawód.",
    "explanation": "Cechy regulowały działalność rzemieślników, dbały o jakość produktów i zasady wykonywania zawodu.",
    "options": null,
    "answer": true
  },
  {
    "id": "R02_SPO_06",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "riddle",
    "prompt": "Jak nazywano okres czasowego zwolnienia osadników z płacenia czynszów podczas lokacji?",
    "explanation": "Wolnizna ułatwiała osadnikom zagospodarowanie się w nowo zakładanym mieście lub wsi.",
    "options": null,
    "answer": "wolnizna",
    "image": "r02_lokacja_miasta.jpg",
    "altAnswers": [
      "wolnizna",
      "wolniznę"
    ]
  },
  {
    "id": "R02_SPO_07",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "scenario",
    "prompt": "Osadnik organizuje lokację miasta i początkowo staje na czele jego władz. Jakiego urzędu najczęściej zostaje posiadaczem?",
    "explanation": "Zasadźca, który organizował lokację miasta, zwykle stawał się wójtem.",
    "options": [
      "Sołtysa",
      "Biskupa",
      "Kasztelana",
      "Wójta",
      "Opata",
      "Starosty"
    ],
    "answer": 3,
    "image": "r02_lokacja_miasta.jpg"
  },
  {
    "id": "R02_SPO_08",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "fill_in",
    "prompt": "System podziału gruntów na uprawy jare, ozime i ugór nazywano __________.",
    "explanation": "Trójpolówka zakładała coroczną zmianę miejsca upraw jarych, ozimych i ugoru.",
    "options": null,
    "answer": [
      "trójpolówką"
    ],
    "altAnswers": [
      [
        "trójpolówką",
        "trójpolówka",
        "trojpolowka"
      ]
    ]
  },
  {
    "id": "R02_SPO_09",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "odd_one_out",
    "prompt": "Wskaż element nienależący do etapów szkolenia rycerskiego: paź, giermek, rycerz, czeladnik.",
    "explanation": "Droga do rycerstwa prowadziła od pazia przez giermka do rycerza; czeladnik to etap nauki rzemiosła.",
    "options": null,
    "answer": "czeladnik"
  },
  {
    "id": "R02_SPO_10",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Która cecha jest charakterystyczna dla architektury romańskiej?",
    "explanation": "W stylu romańskim dominowały grube mury, małe okna i masywne, często obronne budowle.",
    "options": [
      "Grube mury i małe okna",
      "Strzeliste okna wypełnione witrażami",
      "Łuki przyporowe",
      "Rozety nad portalami",
      "Sklepienia krzyżowo-żebrowe",
      "Wysokie ażurowe wieże"
    ],
    "answer": 0,
    "image": "r02_styl_romanski.jpg"
  },
  {
    "id": "R02_SPO_11",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "multi_select",
    "prompt": "Wskaż cechy architektury gotyckiej.",
    "explanation": "Gotyk wyróżniały między innymi strzeliste budowle, duże okna z witrażami i sklepienia krzyżowo-żebrowe.",
    "options": [
      "Duże okna z witrażami",
      "Niskie i ciężkie wnętrza",
      "Sklepienia krzyżowo-żebrowe",
      "Małe okna strzelnicze",
      "Wysokie wieże",
      "Przysadziste kamienne bryły"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "image": "r02_styl_gotycki.jpg"
  },
  {
    "id": "R02_EUR_01",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "single_choice",
    "prompt": "Kto dowodził Frankami w bitwie pod Poitiers w 732 roku?",
    "explanation": "Karol Młot powstrzymał pochód Arabów w bitwie pod Poitiers w 732 roku.",
    "options": [
      "Chlodwig",
      "Pepin Mały",
      "Karol Wielki",
      "Karol Młot",
      "Otton I",
      "Otton III"
    ],
    "answer": 3
  },
  {
    "id": "R02_EUR_02",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "true_false",
    "prompt": "W 843 roku traktat w Verdun podzielił państwo Karola Wielkiego.",
    "explanation": "Podział w Verdun stał się podstawą późniejszego kształtowania się Francji, Niemiec i Włoch.",
    "options": null,
    "answer": true,
    "image": "r02_mapa_panstwa_frankow.jpg"
  },
  {
    "id": "R02_EUR_03",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "riddle",
    "prompt": "Jak nazywało się nowe pismo upowszechnione w czasach renesansu karolińskiego?",
    "explanation": "Minuskuła karolińska należała do osiągnięć odrodzenia kultury i szkolnictwa za Karolingów.",
    "options": null,
    "answer": "minuskuła karolińska",
    "altAnswers": [
      "minuskuła karolińska",
      "minuskula karolinska"
    ]
  },
  {
    "id": "R02_EUR_04",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "single_choice",
    "prompt": "Jaką ideę polityczną realizował cesarz Otton III?",
    "explanation": "Otton III chciał stworzyć chrześcijańskie imperium uniwersalne obejmujące między innymi Italię, Galię, Germanię i Słowiańszczyznę.",
    "options": [
      "Uniwersalizm chrześcijański",
      "Rozbicie dzielnicowe",
      "Izolację Niemiec od reszty Europy",
      "Likwidację papiestwa",
      "Przywrócenie pogaństwa",
      "Podporządkowanie Rzymu Arabom"
    ],
    "answer": 0
  },
  {
    "id": "R02_EUR_05",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów Franków w kolejności chronologicznej.",
    "explanation": "Chlodwig przyjął chrzest w 496 roku, bitwa pod Poitiers miała miejsce w 732 roku, Pepin Mały objął tron w 751 roku, a traktat w Verdun zawarto w 843 roku.",
    "options": null,
    "items": [
      "Traktat w Verdun",
      "Objęcie władzy przez Pepina Małego",
      "Chrzest Chlodwiga",
      "Bitwa pod Poitiers"
    ],
    "answer": [
      "Chrzest Chlodwiga",
      "Bitwa pod Poitiers",
      "Objęcie władzy przez Pepina Małego",
      "Traktat w Verdun"
    ]
  },
  {
    "id": "R02_EUR_06",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "multi_select",
    "prompt": "Jakie są trzy główne grupy Słowian?",
    "explanation": "Słowian dzielono na zachodnich, wschodnich i południowych.",
    "options": [
      "Zachodni",
      "Północni",
      "Wschodni",
      "Nadbałtyccy",
      "Celtyccy",
      "Południowi"
    ],
    "answer": [
      0,
      2,
      5
    ]
  },
  {
    "id": "R02_EUR_07",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "match",
    "prompt": "Połącz osoby lub dynastię z dziejami Słowian.",
    "explanation": "Cyryl i Metody działali na Morawach, Ruryk wiąże się z początkami Rusi, Włodzimierz przyjął tam chrzest, a Przemyślidzi panowali w Czechach.",
    "options": null,
    "left": [
      "Cyryl i Metody",
      "Ruryk",
      "Włodzimierz Wielki",
      "Przemyślidzi"
    ],
    "right": [
      "Chrzest Rusi w 988 roku",
      "Dynastia rządząca Czechami",
      "Misja chrystianizacyjna na Morawach",
      "Początki dynastii Rurykowiczów"
    ],
    "answer": {
      "Cyryl i Metody": "Misja chrystianizacyjna na Morawach",
      "Ruryk": "Początki dynastii Rurykowiczów",
      "Włodzimierz Wielki": "Chrzest Rusi w 988 roku",
      "Przemyślidzi": "Dynastia rządząca Czechami"
    }
  },
  {
    "id": "R02_EUR_08",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "single_choice",
    "prompt": "Jak nazywał się słowiański bóg piorunów?",
    "explanation": "W dawnych wierzeniach Słowian Perun był władcą piorunów.",
    "options": [
      "Chors",
      "Swaróg",
      "Świętowit",
      "Weles",
      "Perun",
      "Allah"
    ],
    "answer": 4,
    "image": "r02_osada_slowianska.jpg"
  },
  {
    "id": "R02_EUR_09",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż postać spoza wierzeń dawnych Słowian: Perun, Świętowit, Swaróg, Mahomet.",
    "explanation": "Perun, Świętowit i Swaróg to bóstwa słowiańskie. Mahomet był prorokiem islamu.",
    "options": null,
    "answer": "Mahomet",
    "image": "r02_osada_slowianska.jpg"
  },
  {
    "id": "R02_EUR_10",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "fill_in",
    "prompt": "W 1077 roku cesarz Henryk IV przybył do __________, aby ukorzyć się przed papieżem.",
    "explanation": "Henryk IV odbył pokutę w Canossie, prosząc papieża Grzegorza VII o zdjęcie ekskomuniki.",
    "options": null,
    "answer": [
      "Canossy"
    ],
    "altAnswers": [
      [
        "Canossy",
        "Canossa",
        "Canossie"
      ]
    ]
  },
  {
    "id": "R02_EUR_11",
    "section": "Państwa i ludy średniowiecznej Europy",
    "type": "scenario",
    "prompt": "Duchowni wybierają biskupów, a świecki władca nie może ich sam mianować. Do którego porozumienia z 1122 roku prowadzi to rozwiązanie?",
    "explanation": "Konkordat w Wormacji zakończył spór o inwestyturę i uregulował wybór biskupów.",
    "options": [
      "Traktatu w Verdun",
      "Konkordatu w Wormacji",
      "Zjazdu gnieźnieńskiego",
      "Pokoju w Budziszynie",
      "Unii w Krewie",
      "Pokoju w Kaliszu"
    ],
    "answer": 1
  },
  {
    "id": "R02_PIA_01",
    "section": "Polska pierwszych Piastów",
    "type": "single_choice",
    "prompt": "Kto był pierwszym historycznie potwierdzonym władcą Polski?",
    "explanation": "Mieszko I jest pierwszym władcą państwa Polan potwierdzonym w źródłach historycznych.",
    "options": [
      "Siemomysł",
      "Mieszko I",
      "Piast Kołodziej",
      "Siemowit",
      "Bolesław Chrobry",
      "Kazimierz Odnowiciel"
    ],
    "answer": 1
  },
  {
    "id": "R02_PIA_02",
    "section": "Polska pierwszych Piastów",
    "type": "fill_in",
    "prompt": "Chrzest Mieszka I odbył się w roku __________.",
    "explanation": "Przyjęcie chrztu w 966 roku włączyło państwo Mieszka I do kręgu chrześcijaństwa zachodniego.",
    "options": null,
    "answer": [
      "966"
    ],
    "image": "r02_chrzest_mieszka.jpg",
    "altAnswers": [
      [
        "966",
        "966 r."
      ]
    ]
  },
  {
    "id": "R02_PIA_03",
    "section": "Polska pierwszych Piastów",
    "type": "multi_select",
    "prompt": "Zaznacz skutki przyjęcia chrztu przez Mieszka I.",
    "explanation": "Chrzest umocnił pozycję międzynarodową Polski, sprzyjał jej integracji i zapoczątkował rozwój organizacji kościelnej.",
    "options": [
      "Utworzenie biskupstwa w Poznaniu",
      "Rozpoczęcie rozbicia dzielnicowego",
      "Wzmocnienie pozycji Polski w Europie",
      "Wprowadzenie unii polsko-litewskiej",
      "Rozwój chrześcijańskiej kultury i piśmiennictwa",
      "Powstanie państwa Krzyżaków"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "image": "r02_chrzest_mieszka.jpg"
  },
  {
    "id": "R02_PIA_04",
    "section": "Polska pierwszych Piastów",
    "type": "single_choice",
    "prompt": "W której bitwie w 972 roku Mieszko I pokonał wojska margrabiego Hodona?",
    "explanation": "Bitwa pod Cedynią z 972 roku była zwycięstwem Mieszka I nad siłami margrabiego Hodona.",
    "options": [
      "Pod Grunwaldem",
      "Pod Płowcami",
      "Pod Legnicą",
      "Pod Cedynią",
      "Pod Poitiers",
      "Pod Warną"
    ],
    "answer": 3
  },
  {
    "id": "R02_PIA_05",
    "section": "Polska pierwszych Piastów",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z początków państwa polskiego w porządku chronologicznym.",
    "explanation": "Kolejne daty to: 966, 972, 1000 i 1025 rok.",
    "options": null,
    "items": [
      "Koronacja Bolesława Chrobrego",
      "Zjazd gnieźnieński",
      "Chrzest Mieszka I",
      "Bitwa pod Cedynią"
    ],
    "answer": [
      "Chrzest Mieszka I",
      "Bitwa pod Cedynią",
      "Zjazd gnieźnieński",
      "Koronacja Bolesława Chrobrego"
    ]
  },
  {
    "id": "R02_PIA_06",
    "section": "Polska pierwszych Piastów",
    "type": "riddle",
    "prompt": "Jak nazywał się pierwszy arcybiskup gnieźnieński, przyrodni brat św. Wojciecha?",
    "explanation": "Pierwszym arcybiskupem metropolii gnieźnieńskiej utworzonej w 1000 roku był Radzim Gaudenty.",
    "options": null,
    "answer": "Radzim Gaudenty",
    "image": "r02_zjazd_gnieznienski.jpg",
    "altAnswers": [
      "Radzim Gaudenty",
      "Radzim",
      "Gaudenty"
    ]
  },
  {
    "id": "R02_PIA_07",
    "section": "Polska pierwszych Piastów",
    "type": "match",
    "prompt": "Połącz polskiego władcę z wydarzeniem jego rządów.",
    "explanation": "Mieszko I przyjął chrzest, Chrobry został pierwszym królem, Odnowiciel odbudował państwo, a Śmiały koronował się w 1076 roku.",
    "options": null,
    "left": [
      "Mieszko I",
      "Bolesław Chrobry",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały"
    ],
    "right": [
      "Koronacja w 1076 roku",
      "Przeniesienie stolicy do Krakowa",
      "Chrzest w 966 roku",
      "Pierwsza koronacja królewska w 1025 roku"
    ],
    "answer": {
      "Mieszko I": "Chrzest w 966 roku",
      "Bolesław Chrobry": "Pierwsza koronacja królewska w 1025 roku",
      "Kazimierz Odnowiciel": "Przeniesienie stolicy do Krakowa",
      "Bolesław Śmiały": "Koronacja w 1076 roku"
    }
  },
  {
    "id": "R02_PIA_08",
    "section": "Polska pierwszych Piastów",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto spoza najważniejszych ośrodków państwa pierwszych Piastów: Gniezno, Poznań, Kraków, Akwizgran.",
    "explanation": "Akwizgran był ośrodkiem państwa Karola Wielkiego; pozostałe miasta odgrywały ważną rolę w Polsce pierwszych Piastów.",
    "options": null,
    "answer": "Akwizgran"
  },
  {
    "id": "R02_PIA_09",
    "section": "Polska pierwszych Piastów",
    "type": "scenario",
    "prompt": "Po kryzysie państwa po śmierci Mieszka II książę odbudowuje kraj i przenosi ośrodek władzy do Krakowa. O którego władcę chodzi?",
    "explanation": "Kazimierz Odnowiciel odbudował państwo polskie i przeniósł jego stolicę do Krakowa.",
    "options": [
      "Kazimierz Odnowiciel",
      "Mieszko I",
      "Bolesław Chrobry",
      "Władysław Łokietek",
      "Bolesław Krzywousty",
      "Przemysł II"
    ],
    "answer": 0
  },
  {
    "id": "R02_PIA_10",
    "section": "Polska pierwszych Piastów",
    "type": "true_false",
    "prompt": "W czasie zjazdu gnieźnieńskiego w 1000 roku powstało arcybiskupstwo w Gnieźnie.",
    "explanation": "Zjazd Ottona III i Bolesława Chrobrego zaowocował utworzeniem niezależnej metropolii gnieźnieńskiej.",
    "options": null,
    "answer": true
  },
  {
    "id": "R02_PIA_11",
    "section": "Polska pierwszych Piastów",
    "type": "sort",
    "prompt": "Przyporządkuj działania Mieszka I do przyczyn lub następstw chrztu.",
    "explanation": "Władca szukał wzmocnienia i sojuszy; po chrzcie rozwinęły się instytucje kościelne oraz piśmiennictwo.",
    "options": null,
    "items": [
      "Sprowadzenie duchownych potrafiących pisać",
      "Dążenie do sojuszu z Czechami",
      "Utworzenie biskupstwa w Poznaniu",
      "Wzmocnienie jedności państwa"
    ],
    "categories": [
      "Przyczyny przyjęcia chrztu",
      "Skutki przyjęcia chrztu"
    ],
    "answer": {
      "Przyczyny przyjęcia chrztu": [
        "Dążenie do sojuszu z Czechami",
        "Wzmocnienie jedności państwa"
      ],
      "Skutki przyjęcia chrztu": [
        "Utworzenie biskupstwa w Poznaniu",
        "Sprowadzenie duchownych potrafiących pisać"
      ]
    }
  },
  {
    "id": "R02_ROZ_01",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "single_choice",
    "prompt": "W którym roku statut Bolesława Krzywoustego zapoczątkował rozbicie dzielnicowe?",
    "explanation": "Testament Bolesława Krzywoustego wprowadził podział Polski w 1138 roku.",
    "options": [
      "1000",
      "1025",
      "1076",
      "1109",
      "1138",
      "1241"
    ],
    "answer": 4
  },
  {
    "id": "R02_ROZ_02",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "fill_in",
    "prompt": "Według zasady senioratu władzę zwierzchnią miał obejmować __________ spośród książąt piastowskich.",
    "explanation": "Seniorat przewidywał zwierzchnictwo najstarszego Piasta nad pozostałymi książętami.",
    "options": null,
    "answer": [
      "najstarszy"
    ],
    "altAnswers": [
      [
        "najstarszy",
        "najstarszy wiekiem"
      ]
    ]
  },
  {
    "id": "R02_ROZ_03",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "match",
    "prompt": "Połącz pojęcie związane z rozbiciem dzielnicowym z objaśnieniem.",
    "explanation": "Statut Krzywoustego określił zasady następstwa władzy; w okresie rozbicia Polskę atakowali Krzyżacy i Mongołowie.",
    "options": null,
    "left": [
      "Seniorat",
      "Dzielnica senioralna",
      "Krzyżacy",
      "Mongołowie"
    ],
    "right": [
      "Najeźdźcy zwycięscy pod Legnicą w 1241 roku",
      "Terytorium związane z władzą zwierzchnią",
      "Zakon sprowadzony do obrony Mazowsza przed Prusami",
      "Pierwszeństwo najstarszego Piasta do władzy"
    ],
    "answer": {
      "Seniorat": "Pierwszeństwo najstarszego Piasta do władzy",
      "Dzielnica senioralna": "Terytorium związane z władzą zwierzchnią",
      "Krzyżacy": "Zakon sprowadzony do obrony Mazowsza przed Prusami",
      "Mongołowie": "Najeźdźcy zwycięscy pod Legnicą w 1241 roku"
    }
  },
  {
    "id": "R02_ROZ_04",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "scenario",
    "prompt": "Książę mazowiecki chce bronić granic przed Prusami i nadaje zakonowi ziemię chełmińską. Kim jest ten książę?",
    "explanation": "Konrad Mazowiecki sprowadził Krzyżaków, licząc na obronę Mazowsza i chrystianizację Prusów.",
    "options": [
      "Henryk I Brodaty",
      "Władysław Łokietek",
      "Konrad Mazowiecki",
      "Przemysł II",
      "Bolesław Chrobry",
      "Kazimierz Wielki"
    ],
    "answer": 2,
    "image": "r02_zamek_krzyzacki.jpg"
  },
  {
    "id": "R02_ROZ_05",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "multi_select",
    "prompt": "Jakie wydarzenia wiążą się z najazdem Mongołów na Polskę w 1241 roku?",
    "explanation": "W 1241 roku Mongołowie spustoszyli polskie miasta i zwyciężyli pod Legnicą, gdzie zginął Henryk Pobożny.",
    "options": [
      "Spalenie Krakowa",
      "Koronacja Przemysła II",
      "Bitwa pod Legnicą",
      "Pokój w Kaliszu",
      "Śmierć Henryka Pobożnego",
      "Unia w Krewie"
    ],
    "answer": [
      0,
      2,
      4
    ]
  },
  {
    "id": "R02_ROZ_06",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "riddle",
    "prompt": "Jak nazywał się arcybiskup gnieźnieński, który popierał zjednoczenie Polski na przełomie XIII i XIV wieku?",
    "explanation": "Arcybiskup Jakub Świnka wspierał ideę zjednoczenia polskich dzielnic i starania o koronę.",
    "options": null,
    "answer": "Jakub Świnka",
    "altAnswers": [
      "Jakub Świnka",
      "Jakuba Świnki"
    ]
  },
  {
    "id": "R02_ROZ_07",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "sequence",
    "prompt": "Uporządkuj wydarzenia z okresu rozbicia i zjednoczenia Polski.",
    "explanation": "Daty tych wydarzeń to kolejno 1138, 1241, 1300 i 1320 rok.",
    "options": null,
    "items": [
      "Koronacja Wacława II",
      "Statut Bolesława Krzywoustego",
      "Koronacja Władysława Łokietka",
      "Najazd Mongołów i bitwa pod Legnicą"
    ],
    "answer": [
      "Statut Bolesława Krzywoustego",
      "Najazd Mongołów i bitwa pod Legnicą",
      "Koronacja Wacława II",
      "Koronacja Władysława Łokietka"
    ]
  },
  {
    "id": "R02_ROZ_08",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "single_choice",
    "prompt": "Gdzie koronował się Władysław Łokietek w 1320 roku?",
    "explanation": "Koronacja Łokietka w Krakowie w 1320 roku oznaczała odnowienie Królestwa Polskiego.",
    "options": [
      "W Krakowie",
      "W Gnieźnie",
      "W Poznaniu",
      "W Płocku",
      "We Wrocławiu",
      "W Malborku"
    ],
    "answer": 0
  },
  {
    "id": "R02_ROZ_09",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "true_false",
    "prompt": "Stolicą państwa zakonu krzyżackiego był Malbork.",
    "explanation": "Krzyżacy utworzyli nad Bałtykiem własne państwo zakonne, którego stolicą był Malbork.",
    "options": null,
    "answer": true,
    "image": "r02_zamek_krzyzacki.jpg"
  },
  {
    "id": "R02_ROZ_10",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż władcę niezwiązanego ze staraniami o zjednoczenie dzielnic Polski: Henryk I Brodaty, Przemysł II, Władysław Łokietek, Karol Wielki.",
    "explanation": "Henryk Brodaty, Przemysł II i Łokietek są związani z próbami jednoczenia ziem polskich; Karol Wielki rządził Frankami.",
    "options": null,
    "answer": "Karol Wielki"
  },
  {
    "id": "R02_ROZ_11",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "sort",
    "prompt": "Podziel osoby i grupy na dążące do zjednoczenia ziem polskich oraz zagrażające im w czasie rozbicia.",
    "explanation": "Niektórzy książęta dążyli do połączenia dzielnic; jednocześnie zagrożeniem były między innymi najazdy Mongołów i działania zakonu krzyżackiego.",
    "options": null,
    "items": [
      "Krzyżacy",
      "Przemysł II",
      "Mongołowie",
      "Władysław Łokietek",
      "Henryk I Brodaty"
    ],
    "categories": [
      "Starania o zjednoczenie",
      "Zagrożenia zewnętrzne"
    ],
    "answer": {
      "Starania o zjednoczenie": [
        "Henryk I Brodaty",
        "Przemysł II",
        "Władysław Łokietek"
      ],
      "Zagrożenia zewnętrzne": [
        "Mongołowie",
        "Krzyżacy"
      ]
    }
  },
  {
    "id": "R02_JAG_01",
    "section": "Polska w XIV i XV wieku",
    "type": "single_choice",
    "prompt": "W jakich latach rządził w Polsce Kazimierz III Wielki?",
    "explanation": "Kazimierz Wielki był królem Polski w latach 1333–1370 i ostatnim władcą z dynastii Piastów.",
    "options": [
      "1306–1333",
      "1320–1350",
      "1333–1370",
      "1384–1399",
      "1386–1434",
      "1447–1492"
    ],
    "answer": 2
  },
  {
    "id": "R02_JAG_02",
    "section": "Polska w XIV i XV wieku",
    "type": "match",
    "prompt": "Połącz władcę z wydarzeniem jego panowania.",
    "explanation": "Kazimierz Wielki reformował państwo, Jagiełło walczył z Krzyżakami pod Grunwaldem, Kazimierz IV prowadził wojnę trzynastoletnią, a Warneńczyk zginął pod Warną.",
    "options": null,
    "left": [
      "Kazimierz Wielki",
      "Władysław Jagiełło",
      "Kazimierz Jagiellończyk",
      "Władysław Warneńczyk"
    ],
    "right": [
      "Śmierć w bitwie pod Warną",
      "Wojna trzynastoletnia",
      "Ujednolicanie prawa w statutach wiślickim i piotrkowskim",
      "Bitwa pod Grunwaldem"
    ],
    "answer": {
      "Kazimierz Wielki": "Ujednolicanie prawa w statutach wiślickim i piotrkowskim",
      "Władysław Jagiełło": "Bitwa pod Grunwaldem",
      "Kazimierz Jagiellończyk": "Wojna trzynastoletnia",
      "Władysław Warneńczyk": "Śmierć w bitwie pod Warną"
    }
  },
  {
    "id": "R02_JAG_03",
    "section": "Polska w XIV i XV wieku",
    "type": "multi_select",
    "prompt": "Jakie przedsięwzięcia należą do reform i działań Kazimierza Wielkiego?",
    "explanation": "Kazimierz Wielki rozwijał gospodarkę, ujednolicał prawo, wznosił zamki i założył uniwersytet w Krakowie.",
    "options": [
      "Budowa nowych zamków",
      "Sprowadzenie Krzyżaków na Mazowsze",
      "Reforma monetarna",
      "Ujednolicanie prawa",
      "Ogłoszenie statutu rozbicia dzielnicowego",
      "Założenie uniwersytetu w Krakowie"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "image": "r02_uniwersytet_krakowski.jpg"
  },
  {
    "id": "R02_JAG_04",
    "section": "Polska w XIV i XV wieku",
    "type": "fill_in",
    "prompt": "Unię Polski z Litwą w Krewie zawarto w roku __________.",
    "explanation": "Akt unii w Krewie z 1385 roku przygotował małżeństwo Jadwigi z Jagiełłą i unię personalną.",
    "options": null,
    "answer": [
      "1385"
    ],
    "altAnswers": [
      [
        "1385",
        "1385 r."
      ]
    ]
  },
  {
    "id": "R02_JAG_05",
    "section": "Polska w XIV i XV wieku",
    "type": "scenario",
    "prompt": "Książę litewski przyjmuje chrzest, żeni się z Jadwigą i w 1386 roku zostaje królem Polski. Kto nim był?",
    "explanation": "Jagiełło przyjął na chrzcie imię Władysław, poślubił Jadwigę i został królem Polski.",
    "options": [
      "Witold",
      "Władysław Łokietek",
      "Kazimierz IV",
      "Ludwik Węgierski",
      "Władysław Jagiełło",
      "Wacław II"
    ],
    "answer": 4
  },
  {
    "id": "R02_JAG_06",
    "section": "Polska w XIV i XV wieku",
    "type": "true_false",
    "prompt": "Pierwszy pokój toruński w 1411 roku przekazał Polsce Pomorze Gdańskie.",
    "explanation": "Pierwszy pokój toruński przywracał Polsce ziemię dobrzyńską, a Żmudź Litwie; Pomorza Gdańskiego nie odzyskano wtedy.",
    "options": null,
    "answer": false
  },
  {
    "id": "R02_JAG_07",
    "section": "Polska w XIV i XV wieku",
    "type": "single_choice",
    "prompt": "Kiedy rozegrała się bitwa pod Grunwaldem?",
    "explanation": "Wojska polsko-litewskie pokonały zakon krzyżacki pod Grunwaldem 15 lipca 1410 roku.",
    "options": [
      "15 lipca 1241 roku",
      "15 lipca 1331 roku",
      "15 lipca 1385 roku",
      "15 lipca 1410 roku",
      "15 lipca 1454 roku",
      "15 lipca 1466 roku"
    ],
    "answer": 3,
    "image": "r02_bitwa_pod_grunwaldem.jpg"
  },
  {
    "id": "R02_JAG_08",
    "section": "Polska w XIV i XV wieku",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Polską i Litwą w kolejności chronologicznej.",
    "explanation": "Kolejne daty to 1385, 1410, 1454 i 1466 rok.",
    "options": null,
    "items": [
      "Drugi pokój toruński",
      "Bitwa pod Grunwaldem",
      "Unia w Krewie",
      "Wybuch wojny trzynastoletniej"
    ],
    "answer": [
      "Unia w Krewie",
      "Bitwa pod Grunwaldem",
      "Wybuch wojny trzynastoletniej",
      "Drugi pokój toruński"
    ]
  },
  {
    "id": "R02_JAG_09",
    "section": "Polska w XIV i XV wieku",
    "type": "riddle",
    "prompt": "Jak nazywano ziemie przyłączone bezpośrednio do Polski po drugim pokoju toruńskim w 1466 roku?",
    "explanation": "Prusy Królewskie znalazły się w granicach Korony po zakończeniu wojny trzynastoletniej.",
    "options": null,
    "answer": "Prusy Królewskie",
    "altAnswers": [
      "Prusy Królewskie",
      "Prusami Królewskimi"
    ]
  },
  {
    "id": "R02_JAG_10",
    "section": "Polska w XIV i XV wieku",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do odpowiedniej wojny z Krzyżakami.",
    "explanation": "Wielką wojnę zakończył pierwszy pokój toruński, a wojnę trzynastoletnią drugi pokój toruński.",
    "options": null,
    "items": [
      "Drugi pokój toruński",
      "Bitwa pod Grunwaldem",
      "Bitwa pod Chojnicami",
      "Pierwszy pokój toruński"
    ],
    "categories": [
      "Wielka wojna 1409–1411",
      "Wojna trzynastoletnia 1454–1466"
    ],
    "answer": {
      "Wielka wojna 1409–1411": [
        "Bitwa pod Grunwaldem",
        "Pierwszy pokój toruński"
      ],
      "Wojna trzynastoletnia 1454–1466": [
        "Bitwa pod Chojnicami",
        "Drugi pokój toruński"
      ]
    }
  },
  {
    "id": "R02_JAG_11",
    "section": "Polska w XIV i XV wieku",
    "type": "single_choice",
    "prompt": "W której bitwie w 1444 roku zginął Władysław III Warneńczyk?",
    "explanation": "Władysław III zginął w bitwie pod Warną podczas wyprawy przeciw Turkom.",
    "options": [
      "Pod Grunwaldem",
      "Pod Warną",
      "Pod Płowcami",
      "Pod Cedynią",
      "Pod Poitiers",
      "Pod Legnicą"
    ],
    "answer": 1
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenia historyczne z ich datami.",
    "explanation": "Schizma nastąpiła w 1054 roku, konkordat w Wormacji w 1122, podział Polski w 1138, koronacja Łokietka w 1320, a upadek Konstantynopola w 1453 roku.",
    "options": null,
    "left": [
      "Wielka schizma wschodnia",
      "Konkordat w Wormacji",
      "Statut Krzywoustego",
      "Koronacja Łokietka",
      "Upadek Konstantynopola"
    ],
    "right": [
      "1320",
      "1453",
      "1054",
      "1138",
      "1122"
    ],
    "answer": {
      "Wielka schizma wschodnia": "1054",
      "Konkordat w Wormacji": "1122",
      "Statut Krzywoustego": "1138",
      "Koronacja Łokietka": "1320",
      "Upadek Konstantynopola": "1453"
    }
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element nienależący do dorobku kultury islamu: arabeska, kaligrafia arabska, cyfry arabskie, minuskuła karolińska.",
    "explanation": "Minuskuła karolińska to pismo rozwijane za Karolingów, a pozostałe pojęcia wiążą się z kulturą arabską.",
    "options": null,
    "answer": "minuskuła karolińska"
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W roku 1077 cesarz __________ ukorzył się w Canossie przed papieżem __________.",
    "explanation": "Henryk IV odbył pokutę w Canossie przed Grzegorzem VII podczas sporu o inwestyturę.",
    "options": null,
    "answer": [
      "Henryk IV",
      "Grzegorzem VII"
    ],
    "altAnswers": [
      [
        "Henryk IV",
        "Henryk czwarty",
        "Henryk 4"
      ],
      [
        "Grzegorzem VII",
        "Grzegorzem siódmym",
        "Grzegorzem 7"
      ]
    ]
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wczesnego średniowiecza według dat.",
    "explanation": "Chlodwig przyjął chrzest w 496 roku, hidżra to 622 rok, Poitiers to 732, koronacja Karola Wielkiego to 800, a Verdun to 843 rok.",
    "options": null,
    "items": [
      "Bitwa pod Poitiers",
      "Traktat w Verdun",
      "Hidżra Mahometa",
      "Chrzest Chlodwiga",
      "Koronacja Karola Wielkiego"
    ],
    "answer": [
      "Chrzest Chlodwiga",
      "Hidżra Mahometa",
      "Bitwa pod Poitiers",
      "Koronacja Karola Wielkiego",
      "Traktat w Verdun"
    ]
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz przywileje i akty prawne nadane lub uchwalone za panowania władców z dynastii Jagiellonów.",
    "explanation": "Za Jagiellonów wydano m.in. przywilej czerwiński, jedlneńsko-krakowskie, cerekwicko-nieszawskie i konstytucję Nihil novi.",
    "options": [
      "Przywilej czerwiński z 1422 roku",
      "Statuty Kazimierza Wielkiego",
      "Przywileje jedlneńsko-krakowskie",
      "Przywileje cerekwicko-nieszawskie",
      "Statut Krzywoustego",
      "Konstytucja Nihil novi"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ]
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym mieście w 1339 roku sąd papieski nakazał Krzyżakom zwrot ziem zagarniętych Polsce?",
    "explanation": "Sąd papieski obradował w 1339 roku w Warszawie i nakazał Zakonowi zwrot ziem oraz wypłatę odszkodowania.",
    "options": [
      "W Warszawie",
      "W Kaliszu",
      "W Budziszynie",
      "W Toruniu",
      "W Gnieźnie",
      "W Malborku"
    ],
    "answer": 0
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rok 1300. Władca z dynastii Przemyślidów koronuje się na króla Polski w Gnieźnie, wspierany przez arcybiskupa Jakuba Świnkę. Kto to?",
    "explanation": "Wacław II, król Czech z dynastii Przemyślidów, został koronowany na króla Polski w 1300 roku.",
    "options": [
      "Przemysł II",
      "Władysław Łokietek",
      "Wacław II",
      "Henryk Probus",
      "Kazimierz Wielki",
      "Jan Luksemburski"
    ],
    "answer": 2
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz traktat pokojowy z rokiem zawarcia.",
    "explanation": "Pokój budziszyński zakończył wojny Chrobrego z Niemcami, kaliski uregulował konflikt Kazimierza Wielkiego z zakonem, a pokoje toruńskie zakończyły wojny w XV wieku.",
    "options": null,
    "left": [
      "Pokój w Budziszynie",
      "Pokój w Kaliszu",
      "Pierwszy pokój toruński",
      "Drugi pokój toruński"
    ],
    "right": [
      "1466",
      "1411",
      "1018",
      "1343"
    ],
    "answer": {
      "Pokój w Budziszynie": "1018",
      "Pokój w Kaliszu": "1343",
      "Pierwszy pokój toruński": "1411",
      "Drugi pokój toruński": "1466"
    }
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywano klasztorne pomieszczenie, w którym mnisi przepisywali księgi?",
    "explanation": "Skryptorium było miejscem pracy kopistów, którzy ręcznie przepisywali księgi.",
    "options": null,
    "answer": "skryptorium",
    "altAnswers": [
      "skryptorium",
      "skryptoria"
    ]
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W wyniku pokoju kaliskiego z 1343 roku Kazimierz Wielki odzyskał Pomorze Gdańskie.",
    "explanation": "Krzyżacy zwrócili Polsce Kujawy i ziemię dobrzyńską, ale zatrzymali Pomorze Gdańskie.",
    "options": null,
    "answer": false,
    "image": "r02_zamek_krzyzacki.jpg"
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj zabytki do stylów architektonicznych.",
    "explanation": "Kolegiata w Tumie i rotunda w Strzelnie reprezentują styl romański; katedra Notre Dame i Kościół Mariacki w Krakowie reprezentują styl gotycki.",
    "options": null,
    "items": [
      "Kościół Mariacki w Krakowie",
      "Kolegiata w Tumie",
      "Katedra Notre Dame w Paryżu",
      "Rotunda św. Prokopa w Strzelnie"
    ],
    "categories": [
      "Romański",
      "Gotycki"
    ],
    "answer": {
      "Romański": [
        "Kolegiata w Tumie",
        "Rotunda św. Prokopa w Strzelnie"
      ],
      "Gotycki": [
        "Katedra Notre Dame w Paryżu",
        "Kościół Mariacki w Krakowie"
      ]
    },
    "image": "r02_styl_gotycki.jpg"
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Franciszkanie powstali w roku __________, a dominikanie w roku __________.",
    "explanation": "Św. Franciszek z Asyżu założył zakon franciszkanów w 1209 roku, a św. Dominik zakon dominikanów w 1216 roku.",
    "options": null,
    "answer": [
      "1209",
      "1216"
    ],
    "altAnswers": [
      [
        "1209",
        "1209 r."
      ],
      [
        "1216",
        "1216 r."
      ]
    ]
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakiego działania król nie mógł podejmować bez zgody szlachty na mocy przywilejów cerekwicko-nieszawskich z 1454 roku?",
    "explanation": "Przywileje cerekwicko-nieszawskie ograniczały możliwość nakładania podatków, stanowienia praw i zwoływania pospolitego ruszenia bez zgody szlachty.",
    "options": [
      "Powołania biskupa w Gnieźnie",
      "Nałożenia nowego podatku",
      "Zawarcia małżeństwa królewskiego",
      "Wybudowania kościoła",
      "Zorganizowania jarmarku",
      "Przyjęcia pielgrzymów"
    ],
    "answer": 1
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Władca chce zapewnić tron swoim synom, więc w latach 1430–1433 nadaje szlachcie gwarancję nietykalności osobistej bez wyroku sądu. O które przywileje chodzi?",
    "explanation": "Przywileje jedlneńsko-krakowskie Władysława Jagiełły miały zapewnić sukcesję jego synom i ochronę osobistą szlachty.",
    "options": [
      "Przywilej budziński",
      "Przywilej czerwiński",
      "Przywilej piotrkowski z 1496 roku",
      "Przywileje jedlneńsko-krakowskie",
      "Przywileje cerekwicko-nieszawskie",
      "Konstytucja Nihil novi"
    ],
    "answer": 3
  }
];

const KID_PROMPTS = {
  "R02_BIZ_04": "W którym roku Kościół podzielił się na zachodni i wschodni?",
  "R02_SPO_06": "Jak nazywał się okres bez płacenia czynszu w nowej wsi lub mieście?",
  "R02_EUR_04": "Co chciał zbudować w Europie Otton III?",
  "R02_PIA_09": "Który książę odbudował Polskę i przeniósł stolicę do Krakowa?",
  "R02_ROZ_02": "Kto miał rządzić według zasady senioratu?",
  "R02_JAG_05": "Który książę litewski został królem Polski po ślubie z Jadwigą?",
  "R02_HARD_13": "Na co król musiał mieć zgodę szlachty od 1454 roku?"
};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Średniowiecze",
  "icon": "🏰",
  "sectionOrder": [
    "Bizancjum i świat islamu",
    "Społeczeństwo i kultura średniowiecza",
    "Państwa i ludy średniowiecznej Europy",
    "Polska pierwszych Piastów",
    "Rozbicie dzielnicowe i zjednoczenie Polski",
    "Polska w XIV i XV wieku"
  ],
  "sectionIcons": {
    "Bizancjum i świat islamu": "🏛️",
    "Społeczeństwo i kultura średniowiecza": "🏰",
    "Państwa i ludy średniowiecznej Europy": "🌍",
    "Polska pierwszych Piastów": "👑",
    "Rozbicie dzielnicowe i zjednoczenie Polski": "🛡️",
    "Polska w XIV i XV wieku": "⚔️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
