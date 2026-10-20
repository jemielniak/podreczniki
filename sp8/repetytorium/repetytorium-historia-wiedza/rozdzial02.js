// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ISL = Islam i cesarstwo bizantyjskie
//   EUR = Średniowieczne państwa Europy
//   KUL = Społeczeństwo i kultura średniowiecza
//   PIA = Polska pierwszych Piastów
//   DZI = Rozbicie dzielnicowe i zjednoczenie Polski
//   POL = Polska późnego średniowiecza
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_ISL_01",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "single_choice",
    "prompt": "Jak nazywa się święta księga islamu?",
    "options": [
      "Tora",
      "Koran",
      "Ewangelia",
      "Talmud",
      "Kodeks Justyniana",
      "Reguła św. Benedykta"
    ],
    "answer": 1,
    "explanation": "Zasady wiary przekazane Mahometowi zostały spisane w Koranie.",
    "image": "r02_mekka_kaaba.jpg"
  },
  {
    "id": "R02_ISL_02",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "single_choice",
    "prompt": "Jak nazywała się stolica cesarstwa bizantyjskiego?",
    "options": [
      "Rzym",
      "Damaszek",
      "Konstantynopol",
      "Akwizgran",
      "Jerozolima",
      "Aleksandria"
    ],
    "answer": 2,
    "explanation": "Cesarstwo wschodniorzymskie miało stolicę w Konstantynopolu, który w 1453 r. zdobyli Turcy.",
    "image": "r02_hagia_sophia.jpg"
  },
  {
    "id": "R02_ISL_03",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "multi_select",
    "prompt": "Wybierz elementy należące do pięciu filarów islamu.",
    "options": [
      "Jałmużna",
      "Chrzest",
      "Pielgrzymka do Mekki",
      "Post w ramadanie",
      "Spowiedź",
      "Modlitwa pięć razy dziennie"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Do filarów islamu należą wyznanie wiary, pięciokrotna codzienna modlitwa, jałmużna, post w ramadanie i pielgrzymka do Mekki."
  },
  {
    "id": "R02_ISL_04",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "true_false",
    "prompt": "Hidżra to ucieczka Mahometa z Mekki do Medyny w 622 roku.",
    "options": null,
    "answer": true,
    "explanation": "Ucieczkę Mahometa do Medyny nazwano hidżrą, a rok 622 uznano za początek ery muzułmańskiej."
  },
  {
    "id": "R02_ISL_05",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "fill_in",
    "prompt": "Wyznawcy islamu uznają jednego Boga nazywanego __________.",
    "options": null,
    "answer": [
      "Allahem"
    ],
    "altAnswers": [
      [
        "Allahem",
        "Allah",
        "Allaha"
      ]
    ],
    "explanation": "Islam jest religią monoteistyczną. Arabskie określenie Boga to Allah."
  },
  {
    "id": "R02_ISL_06",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "riddle",
    "prompt": "Jak nazywał się cesarz, który polecił sporządzić kodeks prawa rzymskiego i wznieść Hagię Sophię?",
    "options": null,
    "answer": "Justynian Wielki",
    "altAnswers": [
      "Justynian Wielki",
      "Justynian",
      "Justynian I"
    ],
    "explanation": "Justynian Wielki dążył do odbudowy cesarstwa rzymskiego, a w Konstantynopolu wzniósł kościół Mądrości Bożej.",
    "image": "r02_mozaika_bizantyjska.jpg"
  },
  {
    "id": "R02_ISL_07",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "match",
    "prompt": "Połącz pojęcie z jego znaczeniem.",
    "options": null,
    "left": [
      "hidżra",
      "kalif",
      "ikona",
      "Koran"
    ],
    "right": [
      "religijny obraz świętej postaci",
      "święta księga islamu",
      "ucieczka Mahometa do Medyny",
      "następca Mahometa sprawujący władzę"
    ],
    "answer": {
      "hidżra": "ucieczka Mahometa do Medyny",
      "kalif": "następca Mahometa sprawujący władzę",
      "ikona": "religijny obraz świętej postaci",
      "Koran": "święta księga islamu"
    },
    "explanation": "Hidżra oznacza wędrówkę Mahometa do Medyny, kalif był jego następcą jako przywódca wspólnoty, ikona to religijny obraz świętej postaci, a Koran jest świętą księgą islamu."
  },
  {
    "id": "R02_ISL_08",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "sort",
    "prompt": "Podziel cechy i osiągnięcia między kulturę arabską i bizantyjską.",
    "options": null,
    "items": [
      "grecki ogień",
      "tłumaczenie dzieł Arystotelesa i Platona",
      "mozaiki i ikony",
      "rozwój astronomii i medycyny",
      "budownictwo na planie krzyża greckiego",
      "rozpowszechnianie cyfr przejętych z Indii"
    ],
    "categories": [
      "Cywilizacja arabska",
      "Kultura bizantyjska"
    ],
    "answer": {
      "Cywilizacja arabska": [
        "rozpowszechnianie cyfr przejętych z Indii",
        "tłumaczenie dzieł Arystotelesa i Platona",
        "rozwój astronomii i medycyny"
      ],
      "Kultura bizantyjska": [
        "mozaiki i ikony",
        "grecki ogień",
        "budownictwo na planie krzyża greckiego"
      ]
    },
    "explanation": "Arabowie rozwijali nauki i rozpowszechniali system cyfr, a Bizantyjczycy zasłynęli m.in. z mozaik, ikon i greckiego ognia.",
    "image": "r02_mozaika_bizantyjska.jpg"
  },
  {
    "id": "R02_ISL_09",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "sequence",
    "prompt": "Uszereguj wydarzenia związane z początkami islamu i dziejami Bizancjum od najwcześniejszego.",
    "options": null,
    "items": [
      "Wielka schizma wschodnia",
      "Zdobycie Mekki przez Mahometa",
      "Zdobycie Konstantynopola przez Turków",
      "Hidżra Mahometa",
      "Podbój Persji przez Arabów"
    ],
    "answer": [
      "Hidżra Mahometa",
      "Zdobycie Mekki przez Mahometa",
      "Podbój Persji przez Arabów",
      "Wielka schizma wschodnia",
      "Zdobycie Konstantynopola przez Turków"
    ],
    "explanation": "Kolejne daty to 622, 630, 652, 1054 i 1453."
  },
  {
    "id": "R02_ISL_10",
    "section": "Islam i cesarstwo bizantyjskie",
    "type": "scenario",
    "prompt": "Wyobraź sobie, że w XI wieku w chrześcijaństwie dochodzi do sporu między patriarchą Konstantynopola a papieżem. Jak nazywa się rozłam z 1054 roku?",
    "options": [
      "Wielka schizma wschodnia",
      "Hidżra",
      "Konkordat wormacki",
      "Rekonkwista",
      "Renesans karoliński",
      "Unia w Krewie"
    ],
    "answer": 0,
    "explanation": "Rozłam na Kościół zachodni i wschodni w 1054 roku nosi nazwę wielkiej schizmy wschodniej.",
    "image": "r02_hagia_sophia.jpg"
  },
  {
    "id": "R02_EUR_01",
    "section": "Średniowieczne państwa Europy",
    "type": "single_choice",
    "prompt": "Kto został koronowany na cesarza przez papieża Leona III w Boże Narodzenie 800 roku?",
    "options": [
      "Pepin Mały",
      "Otton I",
      "Ludwik Pobożny",
      "Karol Wielki",
      "Chlodwig",
      "Henryk IV"
    ],
    "answer": 3,
    "explanation": "Papież Leon III koronował Karola Wielkiego w 800 roku, odnawiając godność cesarską na Zachodzie.",
    "image": "r02_koronacja_cesarza.jpg"
  },
  {
    "id": "R02_EUR_02",
    "section": "Średniowieczne państwa Europy",
    "type": "single_choice",
    "prompt": "Która grupa Normanów wyprawiała się na Ruś, Morze Czarne i do Bizancjum?",
    "options": [
      "Duńczycy",
      "Szwedzi (Waregowie)",
      "Norwegowie",
      "Frankowie",
      "Sasowie",
      "Wizygoci"
    ],
    "answer": 1,
    "explanation": "Szwedów nazywano także Waregami. Wyprawiali się szlakami rzecznymi Europy Wschodniej.",
    "image": "r02_lodz_wikingow.jpg"
  },
  {
    "id": "R02_EUR_03",
    "section": "Średniowieczne państwa Europy",
    "type": "multi_select",
    "prompt": "Które zdania o Frankach i ich państwie są prawdziwe?",
    "options": [
      "Chlodwig przyjął chrzest w 496 roku.",
      "Pepin Mały zapoczątkował rządy Karolingów.",
      "Karol Wielki zmarł przed koronacją cesarską.",
      "Układ w Verdun zawarto w 962 roku.",
      "Układ w Verdun podzielił imperium na trzy części.",
      "Otton I był synem Chlodwiga."
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Chlodwig przyjął chrzest w 496 r.; Pepin Mały objął tron w 751 r.; układ w Verdun podzielił imperium w 843 r."
  },
  {
    "id": "R02_EUR_04",
    "section": "Średniowieczne państwa Europy",
    "type": "true_false",
    "prompt": "Podczas czwartej krucjaty krzyżowcy zdobyli Konstantynopol.",
    "options": null,
    "answer": true,
    "explanation": "Czwarta wyprawa krzyżowa została skierowana na Bizancjum i zakończyła się zdobyciem Konstantynopola w 1204 roku.",
    "image": "r02_krucjata_rycerze.jpg"
  },
  {
    "id": "R02_EUR_05",
    "section": "Średniowieczne państwa Europy",
    "type": "fill_in",
    "prompt": "Układ dzielący imperium Karola Wielkiego między wnuków zawarto w 843 roku w __________.",
    "options": null,
    "answer": [
      "Verdun"
    ],
    "altAnswers": [
      [
        "Verdun"
      ]
    ],
    "explanation": "W Verdun Lotar, Ludwik Niemiecki i Karol Łysy podzielili między siebie państwo Karolingów."
  },
  {
    "id": "R02_EUR_06",
    "section": "Średniowieczne państwa Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż postać, która nie była władcą państwa Franków lub cesarzem karolińskim: Chlodwig, Pepin Mały, Karol Wielki, Saladyn.",
    "options": null,
    "answer": "Saladyn",
    "explanation": "Saladyn był muzułmańskim sułtanem związanym z dziejami krucjat, a pozostali należą do historii państwa Franków."
  },
  {
    "id": "R02_EUR_07",
    "section": "Średniowieczne państwa Europy",
    "type": "scenario",
    "prompt": "Jest rok 1077. Cesarz, zagrożony utratą tronu, w pokutnym stroju prosi papieża o zdjęcie ekskomuniki pod zamkiem Canossa. Kim jest ten cesarz?",
    "options": [
      "Otton I",
      "Henryk V",
      "Henryk IV",
      "Karol Wielki",
      "Fryderyk II",
      "Konrad III"
    ],
    "answer": 2,
    "explanation": "Henryk IV odbył pokutę w Canossie, chcąc skłonić Grzegorza VII do zdjęcia klątwy."
  },
  {
    "id": "R02_EUR_08",
    "section": "Średniowieczne państwa Europy",
    "type": "match",
    "prompt": "Połącz wydarzenie z jego datą.",
    "options": null,
    "left": [
      "Chrzest Chlodwiga",
      "Koronacja Karola Wielkiego",
      "Koronacja cesarska Ottona I",
      "Konkordat wormacki"
    ],
    "right": [
      "962",
      "1122",
      "496",
      "800"
    ],
    "answer": {
      "Chrzest Chlodwiga": "496",
      "Koronacja Karola Wielkiego": "800",
      "Koronacja cesarska Ottona I": "962",
      "Konkordat wormacki": "1122"
    },
    "explanation": "Chlodwig przyjął chrzest w 496 r., Karol Wielki koronę cesarską w 800 r., Otton I w 962 r., a konkordat wormacki zawarto w 1122 r."
  },
  {
    "id": "R02_EUR_09",
    "section": "Średniowieczne państwa Europy",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do polityki Karola Wielkiego albo dziejów krucjat.",
    "options": null,
    "items": [
      "zdobycie Konstantynopola w 1204 roku",
      "upowszechnianie klasycznej łaciny",
      "powstanie Królestwa Jerozolimskiego",
      "walki z Sasami",
      "zdobycie Jerozolimy w 1099 roku",
      "powstanie szkoły pałacowej w Akwizgranie"
    ],
    "categories": [
      "Panowanie Karola Wielkiego",
      "Wyprawy krzyżowe"
    ],
    "answer": {
      "Panowanie Karola Wielkiego": [
        "powstanie szkoły pałacowej w Akwizgranie",
        "upowszechnianie klasycznej łaciny",
        "walki z Sasami"
      ],
      "Wyprawy krzyżowe": [
        "zdobycie Jerozolimy w 1099 roku",
        "powstanie Królestwa Jerozolimskiego",
        "zdobycie Konstantynopola w 1204 roku"
      ]
    },
    "explanation": "Renesans karoliński łączy się z działalnością edukacyjną Karola, a wydarzenia z Jerozolimy i Konstantynopola dotyczą krucjat."
  },
  {
    "id": "R02_EUR_10",
    "section": "Średniowieczne państwa Europy",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia towarzyszące wyprawom krzyżowym w porządku chronologicznym.",
    "options": null,
    "items": [
      "Zdobycie Konstantynopola przez czwartą krucjatę",
      "Utrata hrabstwa Edessy",
      "Upadek Cesarstwa Łacińskiego",
      "Synod w Clermont",
      "Zdobycie Jerozolimy przez krzyżowców"
    ],
    "answer": [
      "Synod w Clermont",
      "Zdobycie Jerozolimy przez krzyżowców",
      "Utrata hrabstwa Edessy",
      "Zdobycie Konstantynopola przez czwartą krucjatę",
      "Upadek Cesarstwa Łacińskiego"
    ],
    "explanation": "Wydarzenia te nastąpiły kolejno w 1095, 1099, 1144, 1204 i 1261 roku.",
    "image": "r02_krucjata_rycerze.jpg"
  },
  {
    "id": "R02_KUL_01",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Jak nazywano ziemię oddawaną rycerzowi przez seniora w zamian za służbę?",
    "options": [
      "Danina",
      "Pańszczyzna",
      "Czynsz",
      "Lenno",
      "Wolnizna",
      "Dziesięcina"
    ],
    "answer": 3,
    "explanation": "Lenno było podstawą więzi między seniorem i wasalem w systemie feudalnym.",
    "image": "r02_hold_lenny.jpg"
  },
  {
    "id": "R02_KUL_02",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "single_choice",
    "prompt": "Jak nazywał się przewodniczący rady miejskiej w średniowiecznym mieście?",
    "options": [
      "Kasztelan",
      "Burmistrz",
      "Sołtys",
      "Majordomus",
      "Marszałek",
      "Suzeren"
    ],
    "answer": 1,
    "explanation": "Rada miejska zarządzała sprawami miasta, a na jej czele stał burmistrz."
  },
  {
    "id": "R02_KUL_03",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "multi_select",
    "prompt": "Zaznacz charakterystyczne cechy średniowiecznej architektury gotyckiej.",
    "options": [
      "Strzeliste formy budowli",
      "Małe okna i bardzo grube mury",
      "Dominacja łuków półkolistych",
      "Wielkie okna z witrażami",
      "Zrezygnowanie ze sklepień",
      "Łuki ostre i przypory"
    ],
    "answer": [
      0,
      3,
      5
    ],
    "explanation": "Gotyk wyróżniały strzelistość, łuki ostre, przypory i wielkie okna z witrażami. Masywne mury z małymi oknami kojarzą się ze stylem romańskim.",
    "image": "r02_katedra_gotycka.jpg"
  },
  {
    "id": "R02_KUL_04",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "true_false",
    "prompt": "Chłop poddany był wasalem swojego pana w systemie lennym.",
    "options": null,
    "answer": false,
    "explanation": "Chłop poddany i rycerz-wasal mieli odmienny status: chłop nie uczestniczył w stosunkach lennych między seniorem a wasalem."
  },
  {
    "id": "R02_KUL_05",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "fill_in",
    "prompt": "System uprawy polegający na obsiewaniu dwóch części pól i pozostawianiu trzeciej odłogiem nazywano __________.",
    "options": null,
    "answer": [
      "trójpolówką"
    ],
    "altAnswers": [
      [
        "trójpolówką",
        "trójpolówka"
      ]
    ],
    "explanation": "Trójpolówka pozwalała gospodarować polami w cyklu zboża jarego, ozimego i odłogu.",
    "image": "r02_trojpolowka.jpg"
  },
  {
    "id": "R02_KUL_06",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "riddle",
    "prompt": "Jak nazywało się zrzeszenie średniowiecznych rzemieślników tej samej lub pokrewnej specjalności?",
    "options": null,
    "answer": "cech",
    "altAnswers": [
      "cech",
      "cechy"
    ],
    "explanation": "Rzemieślnicy organizowali się w cechy, a kupcy tworzyli gildie."
  },
  {
    "id": "R02_KUL_07",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę grupy, która nie należy do podziału ludności miejskiej na warstwy: patrycjat, pospólstwo, plebs, rycerstwo.",
    "options": null,
    "answer": "rycerstwo",
    "explanation": "Patrycjat, pospólstwo i plebs to warstwy mieszkańców miast; rycerstwo było odrębnym stanem społecznym."
  },
  {
    "id": "R02_KUL_08",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "scenario",
    "prompt": "Rycerz klęka przed seniorem i przysięga mu wierność. W zamian uzyska prawo korzystania z ziemi. Jak nazywa się składana przez niego uroczysta przysięga?",
    "options": [
      "Hołd lenny",
      "Przywilej lokacyjny",
      "Kontrakt cechowy",
      "Konkordat",
      "Pasowanie",
      "Przymus drogowy"
    ],
    "answer": 0,
    "explanation": "Hołd lenny był uroczystą przysięgą wierności i posłuszeństwa wasala wobec seniora.",
    "image": "r02_hold_lenny.jpg"
  },
  {
    "id": "R02_KUL_09",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "match",
    "prompt": "Połącz pojęcia średniowiecznej gospodarki z opisami.",
    "options": null,
    "left": [
      "danina",
      "czynsz",
      "pańszczyzna",
      "prawo składu"
    ],
    "right": [
      "praca na ziemi pana",
      "obowiązek wystawienia towaru na sprzedaż w mieście",
      "opłata pieniężna za użytkowanie ziemi",
      "oddawanie panu części plonów"
    ],
    "answer": {
      "danina": "oddawanie panu części plonów",
      "czynsz": "opłata pieniężna za użytkowanie ziemi",
      "pańszczyzna": "praca na ziemi pana",
      "prawo składu": "obowiązek wystawienia towaru na sprzedaż w mieście"
    },
    "explanation": "Danina, czynsz i pańszczyzna były formami świadczeń chłopów, a prawo składu wpływało na handel miejski."
  },
  {
    "id": "R02_KUL_10",
    "section": "Społeczeństwo i kultura średniowiecza",
    "type": "sort",
    "prompt": "Przyporządkuj rozwiązania do stylu romańskiego albo gotyckiego.",
    "options": null,
    "items": [
      "okna z witrażami",
      "niewielkie okna",
      "konstrukcja z łukami przyporowymi",
      "grube mury",
      "łuki ostre",
      "budowanie głównie z ciosanego kamienia"
    ],
    "categories": [
      "Styl romański",
      "Styl gotycki"
    ],
    "answer": {
      "Styl romański": [
        "grube mury",
        "niewielkie okna",
        "budowanie głównie z ciosanego kamienia"
      ],
      "Styl gotycki": [
        "łuki ostre",
        "okna z witrażami",
        "konstrukcja z łukami przyporowymi"
      ]
    },
    "explanation": "Architektura romańska była masywna i kamienna, natomiast gotycka stosowała system przypór, łuki ostre i wielkie przeszklenia.",
    "image": "r02_katedra_gotycka.jpg"
  },
  {
    "id": "R02_PIA_01",
    "section": "Polska pierwszych Piastów",
    "type": "single_choice",
    "prompt": "Kto był pierwszym poświadczonym historycznie władcą państwa Polan?",
    "options": [
      "Piast",
      "Siemowit",
      "Siemomysł",
      "Mieszko I",
      "Bolesław Chrobry",
      "Ziemowit"
    ],
    "answer": 3,
    "explanation": "Zgodnie z przekazem Galla Anonima poprzednikami Mieszka byli legendarni władcy Siemowit, Leszek i Siemomysł.",
    "image": "r02_chrzest_dworu.jpg"
  },
  {
    "id": "R02_PIA_02",
    "section": "Polska pierwszych Piastów",
    "type": "single_choice",
    "prompt": "Kto był pierwszym koronowanym królem Polski?",
    "options": [
      "Mieszko I",
      "Mieszko II",
      "Bolesław Chrobry",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały",
      "Władysław Herman"
    ],
    "answer": 2,
    "explanation": "Bolesław Chrobry koronował się w 1025 roku, kilka miesięcy przed śmiercią."
  },
  {
    "id": "R02_PIA_03",
    "section": "Polska pierwszych Piastów",
    "type": "multi_select",
    "prompt": "Zaznacz skutki przyjęcia chrztu przez Mieszka I.",
    "options": [
      "Umocnienie pozycji władcy",
      "Natychmiastowe powstanie Akademii Krakowskiej",
      "Integracja różnych plemion w państwie",
      "Likwidacja monarchii",
      "Rozwój organizacji kościelnej i kontaktów z kulturą Zachodu",
      "Podział kraju na dzielnice"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Chrzest umocnił pozycję Mieszka, sprzyjał jedności państwa i włączył Polskę w krąg kultury zachodniochrześcijańskiej."
  },
  {
    "id": "R02_PIA_04",
    "section": "Polska pierwszych Piastów",
    "type": "true_false",
    "prompt": "Podczas zjazdu gnieźnieńskiego w 1000 roku cesarz Otton III odwiedził grób św. Wojciecha.",
    "options": null,
    "answer": true,
    "explanation": "Cesarz Otton III przybył do Gniezna z pielgrzymką do grobu św. Wojciecha, a zjazd umocnił pozycję Bolesława Chrobrego.",
    "image": "r02_zjazd_gnieznienski.jpg"
  },
  {
    "id": "R02_PIA_05",
    "section": "Polska pierwszych Piastów",
    "type": "fill_in",
    "prompt": "Mieszko I przyjął chrzest w roku __________.",
    "options": null,
    "answer": [
      "966"
    ],
    "altAnswers": [
      [
        "966",
        "966 r."
      ]
    ],
    "explanation": "Mieszko I przyjął chrzest w 966 roku.",
    "image": "r02_chrzest_dworu.jpg"
  },
  {
    "id": "R02_PIA_06",
    "section": "Polska pierwszych Piastów",
    "type": "riddle",
    "prompt": "Jak nazywał się władca, który odbudował państwo po kryzysie lat trzydziestych XI wieku i przeniósł stolicę do Krakowa?",
    "options": null,
    "answer": "Kazimierz Odnowiciel",
    "altAnswers": [
      "Kazimierz Odnowiciel",
      "Kazimierz I Odnowiciel"
    ],
    "explanation": "Kazimierz Odnowiciel powrócił do kraju w 1039 roku i odbudował monarchię ze stolicą w Krakowie."
  },
  {
    "id": "R02_PIA_07",
    "section": "Polska pierwszych Piastów",
    "type": "scenario",
    "prompt": "W 1109 roku wrogie wojska oblegają gród, którego mieszkańcy nie poddają się mimo okrutnego użycia zakładników. Jaki to gród?",
    "options": [
      "Cedynia",
      "Kruszwica",
      "Gniezno",
      "Głogów",
      "Poznań",
      "Kołobrzeg"
    ],
    "answer": 3,
    "explanation": "Podczas wojny z cesarzem Henrykiem V w 1109 roku obrona Głogowa stała się jednym z przełomowych wydarzeń."
  },
  {
    "id": "R02_PIA_08",
    "section": "Polska pierwszych Piastów",
    "type": "match",
    "prompt": "Połącz władcę z wydarzeniem z jego panowania.",
    "options": null,
    "left": [
      "Mieszko I",
      "Bolesław Chrobry",
      "Kazimierz Odnowiciel",
      "Bolesław Śmiały"
    ],
    "right": [
      "koronacja w 1076 roku",
      "odbudowa kraju po kryzysie",
      "chrzest Polski",
      "zjazd gnieźnieński"
    ],
    "answer": {
      "Mieszko I": "chrzest Polski",
      "Bolesław Chrobry": "zjazd gnieźnieński",
      "Kazimierz Odnowiciel": "odbudowa kraju po kryzysie",
      "Bolesław Śmiały": "koronacja w 1076 roku"
    },
    "explanation": "Wydarzenia te wyznaczają kolejne etapy dziejów Polski wczesnopiastowskiej.",
    "image": "r02_zjazd_gnieznienski.jpg"
  },
  {
    "id": "R02_PIA_09",
    "section": "Polska pierwszych Piastów",
    "type": "sequence",
    "prompt": "Uporządkuj wydarzenia polskiego wczesnego średniowiecza chronologicznie.",
    "options": null,
    "items": [
      "Obrona Głogowa",
      "Koronacja Bolesława Chrobrego",
      "Chrzest Mieszka I",
      "Powrót Kazimierza Odnowiciela",
      "Zjazd gnieźnieński"
    ],
    "answer": [
      "Chrzest Mieszka I",
      "Zjazd gnieźnieński",
      "Koronacja Bolesława Chrobrego",
      "Powrót Kazimierza Odnowiciela",
      "Obrona Głogowa"
    ],
    "explanation": "Wydarzenia te przypadały kolejno na lata 966, 1000, 1025, 1039 i 1109."
  },
  {
    "id": "R02_PIA_10",
    "section": "Polska pierwszych Piastów",
    "type": "sort",
    "prompt": "Przydziel powinności do urzędników dworu piastowskiego.",
    "options": null,
    "items": [
      "nadzór nad zbrojownią",
      "pobór danin i zaopatrzenie dworu",
      "zastępowanie władcy podczas wypraw wojennych",
      "kierowanie kancelarią"
    ],
    "categories": [
      "wojewoda",
      "kanclerz",
      "miecznik",
      "stolnik i cześnik"
    ],
    "answer": {
      "wojewoda": [
        "zastępowanie władcy podczas wypraw wojennych"
      ],
      "kanclerz": [
        "kierowanie kancelarią"
      ],
      "miecznik": [
        "nadzór nad zbrojownią"
      ],
      "stolnik i cześnik": [
        "pobór danin i zaopatrzenie dworu"
      ]
    },
    "explanation": "Wojewoda, kanclerz, miecznik oraz stolnik i cześnik pełnili na dworze odrębne funkcje."
  },
  {
    "id": "R02_DZI_01",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "single_choice",
    "prompt": "Który książę sprowadził Krzyżaków na pogranicze Mazowsza w 1226 roku?",
    "options": [
      "Henryk Brodaty",
      "Władysław Łokietek",
      "Konrad Mazowiecki",
      "Bolesław Kędzierzawy",
      "Mieszko Stary",
      "Przemysł II"
    ],
    "answer": 2,
    "explanation": "Konrad Mazowiecki sprowadził Krzyżaków, aby bronili jego ziem przed Prusami i prowadzili chrystianizację.",
    "image": "r02_zamek_krzyzacki.jpg"
  },
  {
    "id": "R02_DZI_02",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "single_choice",
    "prompt": "Który władca został koronowany na króla Polski w 1320 roku?",
    "options": [
      "Wacław III",
      "Przemysł II",
      "Kazimierz Wielki",
      "Władysław Łokietek",
      "Wacław II",
      "Mieszko Stary"
    ],
    "answer": 3,
    "explanation": "Władysław Łokietek koronował się w katedrze wawelskiej w 1320 roku, odnawiając Królestwo Polskie."
  },
  {
    "id": "R02_DZI_03",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "multi_select",
    "prompt": "Wybierz zjawiska występujące podczas osadnictwa na prawie niemieckim.",
    "options": [
      "Czasowe zwolnienie ze świadczeń zwane wolnizną",
      "Obowiązek nieustannej służby wojskowej wszystkich chłopów",
      "Powoływanie sołtysa",
      "Zawieranie umów określających powinności wobec pana",
      "Zakaz przekazywania ziemi potomkom",
      "Dziedziczenie prawa do uprawianej ziemi"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Osadnicy otrzymywali dziedziczne prawo użytkowania ziemi, korzystali z wolnizny, a wsią zarządzał sołtys. Umowy określały ich świadczenia."
  },
  {
    "id": "R02_DZI_04",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "true_false",
    "prompt": "Przemysł II został koronowany na króla Polski w 1295 roku.",
    "options": null,
    "answer": true,
    "explanation": "Przemysł II koronował się w 1295 roku; już w kolejnym roku został zamordowany."
  },
  {
    "id": "R02_DZI_05",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "fill_in",
    "prompt": "Bitwa, w której Mongołowie pokonali wojska Henryka Pobożnego w 1241 roku, rozegrała się pod __________.",
    "options": null,
    "answer": [
      "Legnicą"
    ],
    "altAnswers": [
      [
        "Legnicą",
        "Legnica",
        "Legnicy"
      ]
    ],
    "explanation": "W 1241 r. oddziały mongolskie rozbiły wojska Henryka Pobożnego pod Legnicą."
  },
  {
    "id": "R02_DZI_06",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "riddle",
    "prompt": "Jak nazywał się najstarszy syn Bolesława Krzywoustego, pierwszy senior, wypędzony z kraju w 1146 roku?",
    "options": null,
    "answer": "Władysław Wygnaniec",
    "altAnswers": [
      "Władysław Wygnaniec",
      "Władysław II Wygnaniec"
    ],
    "explanation": "Władysław otrzymał Śląsk i dzielnicę senioralną, lecz próba samodzielnego opanowania państwa zakończyła się wygnaniem."
  },
  {
    "id": "R02_DZI_07",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie, które nie dotyczy lokacji i organizacji średniowiecznych miast: prawo magdeburskie, prawo chełmińskie, prawo średzkie, hidżra.",
    "options": null,
    "answer": "hidżra",
    "explanation": "Pierwsze trzy nazwy dotyczą miejskich wzorów prawa niemieckiego, a hidżra to wydarzenie z początków islamu.",
    "image": "r02_lokacja_miasta.jpg"
  },
  {
    "id": "R02_DZI_08",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "scenario",
    "prompt": "Jesteś w Polsce po 1138 roku. Każdy kolejny książę otrzymuje osobną część państwa, a najstarszy z dynastii ma sprawować zwierzchnictwo nad pozostałymi. Jak nazywa się zasada dotycząca władzy najstarszego?",
    "options": [
      "Dziedziczenie primogeniturowe",
      "Wolnizna",
      "Seniorat",
      "Hołd pruski",
      "Unia personalna",
      "Prawo składu"
    ],
    "answer": 2,
    "explanation": "Ustawa sukcesyjna Bolesława Krzywoustego ustanawiała zasadę senioratu, według której seniorem miał być najstarszy Piast."
  },
  {
    "id": "R02_DZI_09",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "match",
    "prompt": "Połącz wydarzenia z okresu rozbicia i zjednoczenia z datami.",
    "options": null,
    "left": [
      "Rozpoczęcie rozbicia dzielnicowego",
      "Sprowadzenie Krzyżaków",
      "Koronacja Przemysła II",
      "Koronacja Władysława Łokietka"
    ],
    "right": [
      "1295",
      "1320",
      "1138",
      "1226"
    ],
    "answer": {
      "Rozpoczęcie rozbicia dzielnicowego": "1138",
      "Sprowadzenie Krzyżaków": "1226",
      "Koronacja Przemysła II": "1295",
      "Koronacja Władysława Łokietka": "1320"
    },
    "explanation": "Po śmierci Krzywoustego w 1138 roku państwo się rozpadło; Krzyżacy przybyli w 1226 roku, a korony królewskie otrzymali w 1295 roku Przemysł II i w 1320 roku Łokietek."
  },
  {
    "id": "R02_DZI_10",
    "section": "Rozbicie dzielnicowe i zjednoczenie Polski",
    "type": "sequence",
    "prompt": "Ustaw w kolejności chronologicznej wydarzenia związane z zakonem krzyżackim i zjednoczeniem Polski.",
    "options": null,
    "items": [
      "Koronacja Władysława Łokietka",
      "Zajęcie Pomorza Gdańskiego przez Krzyżaków",
      "Bitwa pod Płowcami",
      "Sprowadzenie Krzyżaków przez Konrada Mazowieckiego",
      "Koronacja Przemysła II"
    ],
    "answer": [
      "Sprowadzenie Krzyżaków przez Konrada Mazowieckiego",
      "Koronacja Przemysła II",
      "Zajęcie Pomorza Gdańskiego przez Krzyżaków",
      "Koronacja Władysława Łokietka",
      "Bitwa pod Płowcami"
    ],
    "explanation": "Daty to kolejno 1226, 1295, 1309, 1320 i 1331.",
    "image": "r02_zamek_krzyzacki.jpg"
  },
  {
    "id": "R02_POL_01",
    "section": "Polska późnego średniowiecza",
    "type": "single_choice",
    "prompt": "Jaki pokój Kazimierz Wielki zawarł z Krzyżakami w 1343 roku?",
    "options": [
      "Pierwszy pokój toruński",
      "Drugi pokój toruński",
      "Pokój w Kaliszu",
      "Pokój w Budziszynie",
      "Konkordat wormacki",
      "Pokój w Wyszehradzie"
    ],
    "answer": 2,
    "explanation": "Pokój wieczysty w Kaliszu z 1343 roku przywrócił Polsce Kujawy i ziemię dobrzyńską, ale pozostawił Pomorze Gdańskie przy zakonie."
  },
  {
    "id": "R02_POL_02",
    "section": "Polska późnego średniowiecza",
    "type": "single_choice",
    "prompt": "Który król założył Akademię Krakowską w 1364 roku?",
    "options": [
      "Kazimierz Wielki",
      "Ludwik Węgierski",
      "Władysław Jagiełło",
      "Kazimierz Jagiellończyk",
      "Jan Olbracht",
      "Władysław Łokietek"
    ],
    "answer": 0,
    "explanation": "Kazimierz Wielki utworzył Akademię Krakowską w 1364 roku, aby rozwijać szkolnictwo wyższe i kształcić urzędników."
  },
  {
    "id": "R02_POL_03",
    "section": "Polska późnego średniowiecza",
    "type": "multi_select",
    "prompt": "Wskaż postanowienia unii w Krewie z 1385 roku.",
    "options": [
      "Małżeństwo Jagiełły z Jadwigą",
      "Powołanie Prus Królewskich",
      "Chrystianizacja Litwy",
      "Utworzenie Akademii Krakowskiej",
      "Objęcie tronu polskiego przez Jagiełłę",
      "Zniesienie wszystkich praw szlacheckich"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Porozumienie z 1385 roku przewidywało małżeństwo Jagiełły z Jadwigą, jego objęcie polskiego tronu i chrystianizację Litwy."
  },
  {
    "id": "R02_POL_04",
    "section": "Polska późnego średniowiecza",
    "type": "true_false",
    "prompt": "Wielki mistrz Ulrich von Jungingen poległ w bitwie pod Grunwaldem w 1410 roku.",
    "options": null,
    "answer": true,
    "explanation": "Bitwa pod Grunwaldem w 1410 roku zakończyła się zwycięstwem polsko-litewskim, a wielki mistrz poległ.",
    "image": "r02_bitwa_grunwald.jpg"
  },
  {
    "id": "R02_POL_05",
    "section": "Polska późnego średniowiecza",
    "type": "fill_in",
    "prompt": "Wielka wojna Polski i Litwy z zakonem krzyżackim trwała w latach __________–__________.",
    "options": null,
    "answer": [
      "1409",
      "1411"
    ],
    "altAnswers": [
      [
        "1409",
        "1409 r."
      ],
      [
        "1411",
        "1411 r."
      ]
    ],
    "explanation": "Wielka wojna z zakonem krzyżackim trwała od 1409 do 1411 roku, z bitwą pod Grunwaldem w 1410 roku.",
    "image": "r02_bitwa_grunwald.jpg"
  },
  {
    "id": "R02_POL_06",
    "section": "Polska późnego średniowiecza",
    "type": "riddle",
    "prompt": "Jak nazywał się król, który poległ w 1444 roku w bitwie z Turkami?",
    "options": null,
    "answer": "Władysław Warneńczyk",
    "altAnswers": [
      "Władysław Warneńczyk",
      "Władysław III Warneńczyk"
    ],
    "explanation": "Władysław, syn Jagiełły, poległ pod Warną i od miejsca tej bitwy otrzymał przydomek Warneńczyk."
  },
  {
    "id": "R02_POL_07",
    "section": "Polska późnego średniowiecza",
    "type": "scenario",
    "prompt": "Jest rok 1466. Po długiej wojnie Polska odzyskuje Pomorze Gdańskie, a pozostała część państwa zakonnego ma być lennem króla. Jaki dokument kończy tę wojnę?",
    "options": [
      "Drugi pokój toruński",
      "Pierwszy pokój toruński",
      "Pokój kaliski",
      "Unia w Horodle",
      "Przywilej koszycki",
      "Traktat w Verdun"
    ],
    "answer": 0,
    "explanation": "Drugi pokój toruński kończył wojnę trzynastoletnią i przywracał Polsce m.in. Pomorze Gdańskie."
  },
  {
    "id": "R02_POL_08",
    "section": "Polska późnego średniowiecza",
    "type": "match",
    "prompt": "Połącz władcę z jego osiągnięciem lub wydarzeniem z jego panowania.",
    "options": null,
    "left": [
      "Kazimierz Wielki",
      "Ludwik Węgierski",
      "Władysław Jagiełło",
      "Kazimierz Jagiellończyk"
    ],
    "right": [
      "drugi pokój toruński",
      "zwycięstwo pod Grunwaldem",
      "przywilej koszycki",
      "założenie Akademii Krakowskiej"
    ],
    "answer": {
      "Kazimierz Wielki": "założenie Akademii Krakowskiej",
      "Ludwik Węgierski": "przywilej koszycki",
      "Władysław Jagiełło": "zwycięstwo pod Grunwaldem",
      "Kazimierz Jagiellończyk": "drugi pokój toruński"
    },
    "explanation": "Kazimierz Wielki założył uczelnię, Ludwik nadał przywilej szlachcie, Jagiełło odniósł zwycięstwo pod Grunwaldem, a Kazimierz Jagiellończyk zakończył wojnę trzynastoletnią."
  },
  {
    "id": "R02_POL_09",
    "section": "Polska późnego średniowiecza",
    "type": "sort",
    "prompt": "Rozdziel wydarzenia na politykę Kazimierza Wielkiego i panowanie Jagiellonów.",
    "options": null,
    "items": [
      "wojna trzynastoletnia",
      "pokój w Kaliszu",
      "drugi pokój toruński",
      "statuty wiślicko-piotrkowskie",
      "bitwa pod Grunwaldem",
      "lokacje około 100 miast"
    ],
    "categories": [
      "Kazimierz Wielki",
      "Jagiellonowie"
    ],
    "answer": {
      "Kazimierz Wielki": [
        "statuty wiślicko-piotrkowskie",
        "lokacje około 100 miast",
        "pokój w Kaliszu"
      ],
      "Jagiellonowie": [
        "bitwa pod Grunwaldem",
        "wojna trzynastoletnia",
        "drugi pokój toruński"
      ]
    },
    "explanation": "Kazimierz Wielki prowadził reformy wewnętrzne i zawarł pokój z zakonem w Kaliszu, a za Jagiellonów Polska prowadziła wielkie wojny z Krzyżakami."
  },
  {
    "id": "R02_POL_10",
    "section": "Polska późnego średniowiecza",
    "type": "sequence",
    "prompt": "Ułóż w kolejności wydarzenia z końca panowania Piastów i początków Jagiellonów.",
    "options": null,
    "items": [
      "Unia w Krewie",
      "Drugi pokój toruński",
      "Przywilej koszycki",
      "Bitwa pod Grunwaldem",
      "Założenie Akademii Krakowskiej"
    ],
    "answer": [
      "Założenie Akademii Krakowskiej",
      "Przywilej koszycki",
      "Unia w Krewie",
      "Bitwa pod Grunwaldem",
      "Drugi pokój toruński"
    ],
    "explanation": "Kolejne daty to 1364, 1374, 1385, 1410 i 1466."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku wojska arabskie zaatakowały bizantyjską Syrię?",
    "options": [
      "622",
      "630",
      "639",
      "635",
      "652",
      "711"
    ],
    "answer": 3,
    "explanation": "Arabowie zaatakowali Syrię w 635 roku, a podbój Egiptu rozpoczęli w 639 roku."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który władca niemiecki pokonał Węgrów na Lechowym Polu w 955 roku?",
    "options": [
      "Henryk IV",
      "Otton I",
      "Karol III Gruby",
      "Ludwik Niemiecki",
      "Fryderyk Barbarossa",
      "Konrad III"
    ],
    "answer": 1,
    "explanation": "Zwycięstwo Ottona I nad Węgrami w 955 roku przyniosło mu przydomek Wielki."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto w 1059 roku zmienił zasady wyboru papieża, powierzając tę decyzję kardynałom?",
    "options": [
      "Grzegorz VII",
      "Kalikst II",
      "Leon III",
      "Urban II",
      "Mikołaj II",
      "Jan XII"
    ],
    "answer": 4,
    "explanation": "Papież Mikołaj II wprowadził wybór głowy Kościoła przez grono kardynałów, ograniczając ingerencję świeckich."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż cztery krainy, które miały tworzyć odnowione cesarstwo w wizji Ottona III.",
    "options": [
      "Galia",
      "Germania",
      "Skandynawia",
      "Romania",
      "Syria",
      "Słowiańszczyzna"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "W wizji cesarstwa Ottona III wyróżniano Galię, Romanię, Germanię i Słowiańszczyznę."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Konkordat wormacki z 1122 roku przewidywał, że cesarz może nadać biskupowi dobra ziemskie dopiero po dokonanym wyborze kościelnym.",
    "options": null,
    "answer": true,
    "explanation": "Porozumienie zawarte przez Henryka V i Kaliksta II rozdzielało wybór dostojnika kościelnego od nadania mu przez cesarza lenna."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Państwo utworzone w miejsce Cesarstwa Bizantyjskiego przez uczestników czwartej krucjaty nosiło nazwę Cesarstwa __________.",
    "options": null,
    "answer": [
      "Łacińskiego"
    ],
    "altAnswers": [
      [
        "Łacińskiego",
        "Łacińskie"
      ]
    ],
    "explanation": "Po zdobyciu Konstantynopola w 1204 r. krzyżowcy utworzyli Cesarstwo Łacińskie, które upadło w 1261 roku.",
    "image": "r02_krucjata_rycerze.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż osobę niepasującą do dworskiego kręgu uczonych renesansu karolińskiego: Alkuin, Paweł Diakon, Einhard, Bernard z Clairvaux.",
    "options": null,
    "answer": "Bernard z Clairvaux",
    "explanation": "Alkuin, Paweł Diakon i Einhard są wymienieni jako uczeni sprowadzeni na dwór Karola Wielkiego; Bernard z Clairvaux organizował drugą krucjatę."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jesteś dyplomatą w 1054 roku na zjeździe w Kwedlinburgu. Władca Niemiec rozstrzyga spór o Śląsk między Polską a Czechami. Jakie rozwiązanie zostało przyjęte?",
    "options": [
      "Przekazanie Śląska na zawsze Czechom",
      "Pozostawienie Śląska Polsce za trybut płacony Czechom",
      "Podział Śląska między Krzyżaków a Polskę",
      "Utworzenie niezależnego królestwa śląskiego",
      "Przyznanie Śląska Węgrom",
      "Oddanie Śląska cesarzowi bezpośrednio"
    ],
    "answer": 1,
    "explanation": "Henryk III przyznał Śląsk Polsce pod warunkiem płacenia trybutu Czechom."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj mniej oczywiste wydarzenia do lat.",
    "options": null,
    "left": [
      "Założenie uniwersytetu w Bolonii",
      "Utrata Edessy przed drugą krucjatą",
      "Upadek Cesarstwa Łacińskiego",
      "Wykupienie Malborka z rąk najemników"
    ],
    "right": [
      "1261",
      "1457",
      "1088",
      "1144"
    ],
    "answer": {
      "Założenie uniwersytetu w Bolonii": "1088",
      "Utrata Edessy przed drugą krucjatą": "1144",
      "Upadek Cesarstwa Łacińskiego": "1261",
      "Wykupienie Malborka z rąk najemników": "1457"
    },
    "explanation": "Uniwersytet w Bolonii powstał w 1088 r., Edessę utracono w 1144 r., Cesarstwo Łacińskie upadło w 1261 r., a Malbork wykupiono w 1457 r."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj akty prawne władcom lub organowi, który je wydał.",
    "options": null,
    "items": [
      "konstytucja Nihil novi",
      "statut piotrkowski",
      "przywilej koszycki",
      "przywilej cerekwicko-nieszawski"
    ],
    "categories": [
      "Ludwik Węgierski",
      "Kazimierz Jagiellończyk",
      "Jan Olbracht",
      "Sejm w Radomiu"
    ],
    "answer": {
      "Ludwik Węgierski": [
        "przywilej koszycki"
      ],
      "Kazimierz Jagiellończyk": [
        "przywilej cerekwicko-nieszawski"
      ],
      "Jan Olbracht": [
        "statut piotrkowski"
      ],
      "Sejm w Radomiu": [
        "konstytucja Nihil novi"
      ]
    },
    "explanation": "Przywilej koszycki wydano w 1374 r., cerekwicko-nieszawski w 1454 r., statut piotrkowski w 1496 r., a Nihil novi uchwalono w Radomiu w 1505 r.",
    "image": "r02_sejm_walny.jpg"
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uporządkuj porozumienia polsko-litewskie od najwcześniejszego.",
    "options": null,
    "items": [
      "Unia w Horodle",
      "Unia lubelska",
      "Unia w Krewie",
      "Unia wileńska",
      "Unia wileńsko-radomska"
    ],
    "answer": [
      "Unia w Krewie",
      "Unia wileńsko-radomska",
      "Unia w Horodle",
      "Unia wileńska",
      "Unia lubelska"
    ],
    "explanation": "Porozumienia zawierano kolejno w latach 1385, 1401, 1413, 1499 i 1569."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywał się zakonnik, który zorganizował drugą wyprawę krzyżową w latach 1147–1149?",
    "options": null,
    "answer": "Bernard z Clairvaux",
    "altAnswers": [
      "Bernard z Clairvaux",
      "św. Bernard z Clairvaux",
      "Bernard"
    ],
    "explanation": "Druga krucjata została zorganizowana przez cystersa Bernarda z Clairvaux po utracie Edessy."
  }
];

const KID_PROMPTS = {
  "R02_ISL_01": "Jak nazywa się najważniejsza święta księga muzułmanów?",
  "R02_ISL_04": "Czy Mahomet uciekł z Mekki do Medyny w 622 roku?",
  "R02_EUR_01": "Kogo papież koronował na cesarza w roku 800?",
  "R02_EUR_02": "Którzy wikingowie docierali do Rusi i Bizancjum?",
  "R02_KUL_01": "Jak nazywała się ziemia dawana rycerzowi za służbę?",
  "R02_KUL_06": "Jak nazywała się grupa rzemieślników tego samego zawodu?",
  "R02_PIA_01": "Kto był pierwszym historycznie znanym władcą Polan?",
  "R02_PIA_05": "W którym roku ochrzcił się Mieszko I?",
  "R02_DZI_01": "Kto sprowadził Krzyżaków do Polski w 1226 roku?",
  "R02_DZI_04": "Czy Przemysł II został królem w 1295 roku?",
  "R02_POL_02": "Kto założył Akademię Krakowską w 1364 roku?",
  "R02_POL_04": "Czy wielki mistrz Krzyżaków zginął pod Grunwaldem?"
};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Średniowiecze – Europa i Polska",
  "icon": "🏰",
  "sectionOrder": [
    "Islam i cesarstwo bizantyjskie",
    "Średniowieczne państwa Europy",
    "Społeczeństwo i kultura średniowiecza",
    "Polska pierwszych Piastów",
    "Rozbicie dzielnicowe i zjednoczenie Polski",
    "Polska późnego średniowiecza"
  ],
  "sectionIcons": {
    "Islam i cesarstwo bizantyjskie": "🕌",
    "Średniowieczne państwa Europy": "👑",
    "Społeczeństwo i kultura średniowiecza": "🏰",
    "Polska pierwszych Piastów": "🦅",
    "Rozbicie dzielnicowe i zjednoczenie Polski": "🛡️",
    "Polska późnego średniowiecza": "⚔️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
