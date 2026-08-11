// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ODK  = Wielkie odkrycia geograficzne
//   KOL  = Skutki odkryć i cywilizacje Ameryki
//   HUM  = Renesans i humanizm
//   KUL  = Nauka i sztuka renesansu
//   REF  = Reformacja i reforma Kościoła
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_ODK_01",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Jaki był główny powód dalekich wypraw oceanicznych Europejczyków w XV wieku?",
    "options": [
      "Znalezienie morskiej drogi do Indii",
      "Odnalezienie drogi do Australii",
      "Zdobycie Konstantynopola",
      "Założenie kolonii w Afryce Północnej",
      "Odkrycie źródeł Nilu",
      "Utworzenie nowych uniwersytetów"
    ],
    "answer": 0,
    "explanation": "Głównym powodem była potrzeba znalezienia morskiej drogi do Indii, aby ominąć pośredników i obniżyć koszty handlu z Dalekim Wschodem."
  },
  {
    "id": "R01_ODK_02",
    "section": "Wielkie odkrycia geograficzne",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny, które sprzyjały wielkim wyprawom oceanicznym Europejczyków.",
    "options": [
      "Chęć wzbogacenia się",
      "Zamiar nawracania innych ludów na chrześcijaństwo",
      "Rozwój nauki i techniki",
      "Ciekawość świata",
      "Zakaz używania map",
      "Upadek drukarstwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przyczyn należały chęć wzbogacenia się, zamiar nawracania innych ludów, rozwój nauki i techniki oraz ciekawość świata."
  },
  {
    "id": "R01_ODK_03",
    "section": "Wielkie odkrycia geograficzne",
    "type": "true_false",
    "prompt": "Karaka była większym żaglowcem niż karawela.",
    "options": null,
    "answer": true,
    "image": "r01_santa_maria_na_atlantyku.jpg",
    "explanation": "W materiale karawelę i większą od niej karakę wskazano jako statki nadające się do dalekich wypraw oceanicznych."
  },
  {
    "id": "R01_ODK_04",
    "section": "Wielkie odkrycia geograficzne",
    "type": "fill_in",
    "prompt": "Krzysztof Kolumb dotarł do ziem Ameryki w roku __________ i był przekonany, że dopłynął do wschodniej części __________.",
    "options": null,
    "answer": [
      "1492",
      "Indii"
    ],
    "altAnswers": [
      [
        "1492",
        "1492 r."
      ],
      [
        "Indii",
        "Indie"
      ]
    ],
    "explanation": "W 1492 roku wyprawa Kolumba dotarła do wyspy w zachodniej części Atlantyku, a Kolumb sądził, że znalazł się we wschodniej części Indii."
  },
  {
    "id": "R01_ODK_05",
    "section": "Wielkie odkrycia geograficzne",
    "type": "riddle",
    "prompt": "Portugalski szlachcic, który w latach 1497-1499 opłynął Afrykę i dotarł drogą morską do Indii, to...",
    "options": null,
    "answer": "Vasco da Gama",
    "altAnswers": [
      "Vasco da Gama",
      "Vasco da Gamy",
      "da Gama"
    ],
    "explanation": "Vasco da Gama w 1498 roku dotarł do portu Kalikat w Indiach, a do Portugalii wrócił w 1499 roku."
  },
  {
    "id": "R01_ODK_06",
    "section": "Wielkie odkrycia geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do pozostałych jako pomoc w dalekiej żegludze: karawela, karaka, dokładniejsze mapy, silnik parowy.",
    "options": null,
    "answer": "silnik parowy",
    "explanation": "Karawele, karaki i dokładniejsze mapy pomagały w wyprawach oceanicznych XV wieku. Silnik parowy wynaleziono ponad trzysta lat później - statki Kolumba pływały wyłącznie pod żaglami."
  },
  {
    "id": "R01_ODK_07",
    "section": "Wielkie odkrycia geograficzne",
    "type": "scenario",
    "prompt": "Żeglarz zakłada, że Ziemia ma kształt kuli i chce dotrzeć do Indii, płynąc z Europy na zachód przez Atlantyk. Który odkrywca rozumował w ten sposób?",
    "options": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan",
      "Amerigo Vespucci",
      "Marco Polo",
      "Jan Gutenberg"
    ],
    "answer": 0,
    "image": "r01_santa_maria_na_atlantyku.jpg",
    "explanation": "Tak rozumował Krzysztof Kolumb. Mylił się jednak co do wielkości Ziemi i w 1492 roku dotarł do Ameryki, nie do Indii."
  },
  {
    "id": "R01_ODK_08",
    "section": "Wielkie odkrycia geograficzne",
    "type": "match",
    "prompt": "Połącz odkrywcę lub wyprawę z dokonaniem.",
    "options": null,
    "left": [
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Wyprawa Ferdynanda Magellana"
    ],
    "right": [
      "Dotarcie drogą morską do Indii",
      "Odkrycie Ameryki przez Europejczyków",
      "Pierwsze opłynięcie Ziemi"
    ],
    "answer": {
      "Krzysztof Kolumb": "Odkrycie Ameryki przez Europejczyków",
      "Vasco da Gama": "Dotarcie drogą morską do Indii",
      "Wyprawa Ferdynanda Magellana": "Pierwsze opłynięcie Ziemi"
    },
    "explanation": "Kolumb dotarł do Ameryki w 1492 roku, da Gama do Indii drogą morską w 1498 roku, a wyprawa Magellana jako pierwsza opłynęła Ziemię."
  },
  {
    "id": "R01_ODK_09",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sort",
    "prompt": "Przyporządkuj przyczyny wypraw do odpowiednich kategorii.",
    "options": null,
    "items": [
      "chęć zdobycia złota i srebra",
      "ominięcie pośredników w handlu",
      "nawracanie innych ludów",
      "karawela i karaka",
      "dokładniejsze mapy",
      "ciekawość świata"
    ],
    "categories": [
      "ekonomiczne",
      "religijne",
      "techniczne i poznawcze"
    ],
    "answer": {
      "ekonomiczne": [
        "chęć zdobycia złota i srebra",
        "ominięcie pośredników w handlu"
      ],
      "religijne": [
        "nawracanie innych ludów"
      ],
      "techniczne i poznawcze": [
        "karawela i karaka",
        "dokładniejsze mapy",
        "ciekawość świata"
      ]
    },
    "explanation": "Wyprawy miały przyczyny ekonomiczne, religijne oraz związane z rozwojem techniki i poznawaniem świata."
  },
  {
    "id": "R01_ODK_10",
    "section": "Wielkie odkrycia geograficzne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Początek wyprawy Magellana",
      "Dotarcie Vasco da Gamy do Indii",
      "Odkrycie Przylądka Dobrej Nadziei",
      "Odkrycie Ameryki przez Kolumba"
    ],
    "answer": [
      "Odkrycie Przylądka Dobrej Nadziei",
      "Odkrycie Ameryki przez Kolumba",
      "Dotarcie Vasco da Gamy do Indii",
      "Początek wyprawy Magellana"
    ],
    "explanation": "Przylądek Dobrej Nadziei odkryto w 1488 roku, Kolumb dotarł do Ameryki w 1492, da Gama do Indii w 1498, a wyprawa Magellana rozpoczęła się w 1519 roku."
  },
  {
    "id": "R01_ODK_11",
    "section": "Wielkie odkrycia geograficzne",
    "type": "single_choice",
    "prompt": "Ilu ludzi znajdowało się na pokładzie Victorii, gdy w 1522 roku wróciła do Hiszpanii po pierwszym opłynięciu Ziemi?",
    "options": [
      "18",
      "28",
      "48",
      "80",
      "118",
      "180"
    ],
    "answer": 0,
    "image": "r01_victoria_po_rejsie.jpg",
    "explanation": "Do Hiszpanii wrócił jedyny ocalały statek wyprawy Magellana, Victoria, z zaledwie 18 ludźmi na pokładzie."
  },
  {
    "id": "R01_KOL_01",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "single_choice",
    "prompt": "Na jakim jeziorze leżał Tenochtitlan, stolica państwa Azteków?",
    "options": [
      "Texcoco",
      "Titicaca",
      "Wiktorii",
      "Genewskim",
      "Bodeńskim",
      "Garda"
    ],
    "answer": 0,
    "image": "r01_tenochtitlan_miasto.jpg",
    "explanation": "Tenochtitlan był położony na wyspach Jeziora Texcoco, na terenie dzisiejszego Meksyku."
  },
  {
    "id": "R01_KOL_02",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "multi_select",
    "prompt": "Zaznacz elementy opisujące Tenochtitlan przed hiszpańskim podbojem.",
    "options": [
      "Kanały i liczne łodzie",
      "Pływające pola uprawne",
      "Drogi na groblach",
      "Główna świątynia w kształcie ściętej piramidy",
      "Sieć kolei żelaznej",
      "Port oceaniczny na Atlantyku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_tenochtitlan_miasto.jpg",
    "explanation": "Aztecka stolica miała świątynie, kanały, ponad 50 tysięcy łodzi, pływające pola oraz drogi na groblach łączące miasto z brzegiem jeziora."
  },
  {
    "id": "R01_KOL_03",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "true_false",
    "prompt": "Tenochtitlan liczył około 200 tysięcy mieszkańców.",
    "options": null,
    "answer": true,
    "image": "r01_tenochtitlan_miasto.jpg",
    "explanation": "Materiał opisuje Tenochtitlan jako około 200-tysięczne miasto, które Hiszpanie zburzyli podczas podboju państwa Azteków."
  },
  {
    "id": "R01_KOL_04",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "fill_in",
    "prompt": "Z Ameryki do Europy przywieziono między innymi __________ i ziemniaki, a z Europy do Ameryki sprowadzono między innymi __________.",
    "options": null,
    "answer": [
      "kukurydzę",
      "konie"
    ],
    "altAnswers": [
      [
        "kukurydzę",
        "kukurydza"
      ],
      [
        "konie",
        "koń"
      ]
    ],
    "explanation": "Wśród roślin sprowadzonych z Ameryki wymieniono kukurydzę i ziemniaki, a wśród zwierząt sprowadzonych z Europy do Ameryki konie, bydło i owce."
  },
  {
    "id": "R01_KOL_05",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "riddle",
    "prompt": "Obszar znajdujący się pod panowaniem zamorskiego państwa to...",
    "options": null,
    "answer": "kolonia",
    "altAnswers": [
      "kolonia",
      "kolonię"
    ],
    "explanation": "Tak zdefiniowano kolonię. Po wielkich odkryciach geograficznych Hiszpanie, Portugalczycy i inne państwa europejskie tworzyły kolonie."
  },
  {
    "id": "R01_KOL_06",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do produktów i zwierząt przywiezionych z Ameryki do Europy: pomidory, kakao, kukurydza, konie.",
    "options": null,
    "answer": "konie",
    "explanation": "Pomidory, kakao i kukurydza trafiły z Ameryki do Europy. Konie sprowadzono w przeciwnym kierunku, z Europy do Ameryki."
  },
  {
    "id": "R01_KOL_07",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "scenario",
    "prompt": "Na plantacji brakuje miejscowej siły roboczej, ponieważ wielu Indian zmarło wskutek pracy ponad siły, chorób i przemocy. Jakie rozwiązanie stosowali europejscy kolonizatorzy?",
    "options": [
      "Sprowadzali niewolników z Afryki",
      "Zamykali wszystkie plantacje",
      "Przenosili plantacje do Europy",
      "Zastępowali uprawy hodowlą owiec",
      "Oddawali kolonie państwom azjatyckim",
      "Zakazywali handlu oceanicznego"
    ],
    "answer": 0,
    "image": "r01_sprzedaz_niewolnikow.jpg",
    "explanation": "Do pracy na plantacjach sprowadzano do Ameryki czarnoskórych ludzi schwytanych w Afryce i sprzedawano ich jako niewolników."
  },
  {
    "id": "R01_KOL_08",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "match",
    "prompt": "Połącz zjawisko ze skutkiem wielkich odkryć geograficznych.",
    "options": null,
    "left": [
      "Napływ srebra i złota do Europy",
      "Tworzenie kolonii",
      "Mieszanie się ras i kultur",
      "Nowe rośliny z Ameryki"
    ],
    "right": [
      "Wzrost cen w XVI wieku",
      "Powstanie społeczeństw wielorasowych",
      "Ograniczanie klęsk głodu",
      "Panowanie państw europejskich nad zamorskimi obszarami"
    ],
    "answer": {
      "Napływ srebra i złota do Europy": "Wzrost cen w XVI wieku",
      "Tworzenie kolonii": "Panowanie państw europejskich nad zamorskimi obszarami",
      "Mieszanie się ras i kultur": "Powstanie społeczeństw wielorasowych",
      "Nowe rośliny z Ameryki": "Ograniczanie klęsk głodu"
    },
    "explanation": "Napływ kruszców sprzyjał wzrostowi cen, kolonie zwiększały europejską kontrolę nad zamorskimi terenami, a mieszanie się ras i kultur ukształtowało wielokulturowe społeczeństwa obu Ameryk."
  },
  {
    "id": "R01_KOL_09",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "sort",
    "prompt": "Rozdziel elementy według kierunku ich przeniesienia między kontynentami.",
    "options": null,
    "items": [
      "pomidory",
      "kakao",
      "kukurydza",
      "ziemniaki",
      "konie",
      "bydło",
      "owce"
    ],
    "categories": [
      "z Ameryki do Europy",
      "z Europy do Ameryki"
    ],
    "answer": {
      "z Ameryki do Europy": [
        "pomidory",
        "kakao",
        "kukurydza",
        "ziemniaki"
      ],
      "z Europy do Ameryki": [
        "konie",
        "bydło",
        "owce"
      ]
    },
    "explanation": "Odkrywcy przywieźli do Europy między innymi pomidory, kakao, kukurydzę i ziemniaki. Do Ameryki Europejczycy sprowadzili konie, bydło i owce."
  },
  {
    "id": "R01_KOL_10",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "single_choice",
    "prompt": "Które państwo bardzo się wzbogaciło dzięki kopalniom srebra i złota w Ameryce i stało się największą potęgą świata do pierwszej połowy XVII wieku?",
    "options": [
      "Hiszpania",
      "Portugalia",
      "Francja",
      "Anglia",
      "Holandia",
      "Szwecja"
    ],
    "answer": 0,
    "explanation": "Hiszpania wzbogaciła się dzięki amerykańskim kopalniom srebra i złota i stała się największą potęgą świata do pierwszej połowy XVII wieku."
  },
  {
    "id": "R01_KOL_11",
    "section": "Skutki odkryć i cywilizacje Ameryki",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny masowej śmierci Indian po przybyciu Europejczyków.",
    "options": [
      "Praca ponad siły",
      "Choroby przywiezione z Europy",
      "Okrucieństwa Europejczyków",
      "Brak żelaza w Europie",
      "Wynalezienie druku",
      "Odkrycie teorii heliocentrycznej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wymieniono pracę ponad siły w kopalniach i na plantacjach, choroby przywiezione z Europy, takie jak ospa, oraz okrucieństwa popełniane przez Europejczyków."
  },
  {
    "id": "R01_HUM_01",
    "section": "Renesans i humanizm",
    "type": "single_choice",
    "prompt": "Kogo nazywano humanistami w XIV-XVI wieku?",
    "options": [
      "Uczonych studiujących antyczne księgi",
      "Wyłącznie średniowiecznych kronikarzy",
      "Kupców handlujących przyprawami",
      "Żeglarzy wypływających na Atlantyk",
      "Sędziów inkwizycji",
      "Dowódców wojskowych"
    ],
    "answer": 0,
    "image": "r01_florencja_xvi_wiek.jpg",
    "explanation": "Humanistami nazywano uczonych studiujących antyczne księgi i zainteresowanych kulturą starożytnej Grecji i Rzymu."
  },
  {
    "id": "R01_HUM_02",
    "section": "Renesans i humanizm",
    "type": "multi_select",
    "prompt": "Zaznacz poglądy i zainteresowania charakterystyczne dla humanistów.",
    "options": [
      "Nauka greki i antycznej łaciny",
      "Naśladowanie dorobku starożytnych",
      "Podkreślanie godności człowieka",
      "Zainteresowanie naukami przyrodniczymi",
      "Odrzucenie wszelkiej religii",
      "Zakaz rozwoju fizycznego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Humaniści uczyli się greki i antycznej łaciny, naśladowali kulturę starożytną, podkreślali godność człowieka, doceniali piękno ciała i zajmowali się naukami przyrodniczymi."
  },
  {
    "id": "R01_HUM_03",
    "section": "Renesans i humanizm",
    "type": "true_false",
    "prompt": "Renesans rozpoczął się we Włoszech, a następnie ogarnął inne kraje Europy.",
    "options": null,
    "answer": true,
    "image": "r01_florencja_xvi_wiek.jpg",
    "explanation": "Odrodzenie rozpoczęło się we Włoszech i rozszerzyło na inne kraje Europy; trwało od XV do drugiej połowy XVI wieku."
  },
  {
    "id": "R01_HUM_04",
    "section": "Renesans i humanizm",
    "type": "fill_in",
    "prompt": "Odrodzenie rozpoczęło się we __________ i trwało od XV wieku do drugiej połowy __________ wieku.",
    "options": null,
    "answer": [
      "Włoszech",
      "XVI"
    ],
    "altAnswers": [
      [
        "Włoszech",
        "Włochy"
      ],
      [
        "XVI",
        "16",
        "XVI w."
      ]
    ],
    "explanation": "Renesans rozpoczął się we Włoszech i trwał od XV do drugiej połowy XVI wieku."
  },
  {
    "id": "R01_HUM_05",
    "section": "Renesans i humanizm",
    "type": "riddle",
    "prompt": "Łacińskie słowo oznaczające człowieczeństwo, kulturę i zasady szlachetnego postępowania, od którego pochodzi nazwa humanistów, to...",
    "options": null,
    "answer": "humanitas",
    "altAnswers": [
      "humanitas"
    ],
    "explanation": "Nazwa humanistów wywodzi się od łacińskiego słowa humanitas."
  },
  {
    "id": "R01_HUM_06",
    "section": "Renesans i humanizm",
    "type": "odd_one_out",
    "prompt": "Wskaż miasto niepasujące do włoskich miast związanych z rozwojem renesansu: Wenecja, Genua, Mediolan, Wittenberga.",
    "options": null,
    "answer": "Wittenberga",
    "explanation": "Wenecja, Genua i Mediolan były ważnymi miastami włoskimi. Wittenberga leżała w Niemczech i wiąże się z wystąpieniem Marcina Lutra."
  },
  {
    "id": "R01_HUM_07",
    "section": "Renesans i humanizm",
    "type": "scenario",
    "prompt": "Myśliciel twierdzi, że człowiek jest godny podziwu, powinien rozwijać się umysłowo i fizycznie, a dzieła starożytnych są wzorem do naśladowania. Z jakim nurtem jest związany?",
    "options": [
      "humanizmem",
      "średniowiecznym uniwersalizmem",
      "kolonializmem",
      "luteranizmem",
      "anglikanizmem",
      "inkwizycją"
    ],
    "answer": 0,
    "explanation": "Takie poglądy były charakterystyczne dla humanistów odrodzenia."
  },
  {
    "id": "R01_HUM_08",
    "section": "Renesans i humanizm",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "humanizm",
      "renesans",
      "średniowieczny uniwersalizm"
    ],
    "right": [
      "odrodzenie kultury antycznej i nowa epoka w kulturze",
      "studia nad antykiem i zainteresowanie człowiekiem",
      "poczucie wspólnoty jednego chrześcijańskiego społeczeństwa"
    ],
    "answer": {
      "humanizm": "studia nad antykiem i zainteresowanie człowiekiem",
      "renesans": "odrodzenie kultury antycznej i nowa epoka w kulturze",
      "średniowieczny uniwersalizm": "poczucie wspólnoty jednego chrześcijańskiego społeczeństwa"
    },
    "explanation": "Humanizm wiązał się ze studiowaniem antyku i zainteresowaniem człowiekiem, renesans był okresem odrodzenia kultury antycznej, a średniowieczny uniwersalizm oznaczał poczucie przynależności do jednego chrześcijańskiego społeczeństwa."
  },
  {
    "id": "R01_HUM_09",
    "section": "Renesans i humanizm",
    "type": "sort",
    "prompt": "Przyporządkuj poglądy do myślicieli średniowiecza lub humanistów odrodzenia.",
    "options": null,
    "items": [
      "człowiek jest nędzny i grzeszny",
      "świat jest miejscem kary po wygnaniu z raju",
      "człowiek jest godny podziwu",
      "każdy człowiek ma własne potrzeby",
      "warto rozwijać ciało i umysł",
      "zainteresowanie naukami przyrodniczymi"
    ],
    "categories": [
      "myśliciele średniowiecza",
      "humaniści odrodzenia"
    ],
    "answer": {
      "myśliciele średniowiecza": [
        "człowiek jest nędzny i grzeszny",
        "świat jest miejscem kary po wygnaniu z raju"
      ],
      "humaniści odrodzenia": [
        "człowiek jest godny podziwu",
        "każdy człowiek ma własne potrzeby",
        "warto rozwijać ciało i umysł",
        "zainteresowanie naukami przyrodniczymi"
      ]
    },
    "explanation": "W materiale zestawiono średniowieczne skupienie na grzeszności i zbawieniu z renesansowym podkreślaniem godności, indywidualnych potrzeb oraz rozwoju człowieka."
  },
  {
    "id": "R01_HUM_10",
    "section": "Renesans i humanizm",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z osi czasu renesansu w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Śmierć Mikołaja Kopernika",
      "Odkrycie Ameryki przez Kolumba",
      "Odnowienie Akademii Krakowskiej",
      "Wynalezienie druku przez Gutenberga"
    ],
    "answer": [
      "Odnowienie Akademii Krakowskiej",
      "Wynalezienie druku przez Gutenberga",
      "Odkrycie Ameryki przez Kolumba",
      "Śmierć Mikołaja Kopernika"
    ],
    "explanation": "Odnowienie Akademii Krakowskiej nastąpiło w 1400 roku, druk Gutenberga około 1450, odkrycie Ameryki w 1492, a śmierć Kopernika w 1543 roku."
  },
  {
    "id": "R01_HUM_11",
    "section": "Renesans i humanizm",
    "type": "single_choice",
    "prompt": "Co sprzyjało końcowi średniowiecznego uniwersalizmu w czasach renesansu?",
    "options": [
      "Wzrost zainteresowania kulturami narodowymi",
      "Powrót wyłącznie do łaciny",
      "Zakaz druku",
      "Zanik uniwersytetów",
      "Rezygnacja z języków narodowych",
      "Odkrycie Przylądka Dobrej Nadziei"
    ],
    "answer": 0,
    "explanation": "Humaniści interesowali się kulturą, językiem i obyczajami własnych krajów. Z czasem Europejczycy czuli się bardziej Francuzami, Niemcami czy Polakami niż członkami jednego chrześcijańskiego społeczeństwa."
  },
  {
    "id": "R01_KUL_01",
    "section": "Nauka i sztuka renesansu",
    "type": "single_choice",
    "prompt": "Który artysta renesansu namalował Mona Lisę i fresk Ostatnia wieczerza?",
    "options": [
      "Leonardo da Vinci",
      "Michał Anioł",
      "Rafael Santi",
      "Erazm z Rotterdamu",
      "Jan Gutenberg",
      "Mikołaj Kopernik"
    ],
    "answer": 0,
    "image": "r01_ostatnia_wieczerza.jpg",
    "explanation": "Autorem Mona Lisy i Ostatniej wieczerzy był Leonardo da Vinci, uznawany za wzór człowieka renesansu."
  },
  {
    "id": "R01_KUL_02",
    "section": "Nauka i sztuka renesansu",
    "type": "multi_select",
    "prompt": "Zaznacz dzieła lub projekty związane z Michałem Aniołem.",
    "options": [
      "Sąd ostateczny",
      "Freski na sklepieniu Kaplicy Sykstyńskiej",
      "Projekt kopuły Bazyliki św. Piotra",
      "Mona Lisa",
      "Pochwała głupoty",
      "O obrotach sfer niebieskich"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_sad_ostateczny.jpg",
    "explanation": "Michał Anioł wykonał freski w Kaplicy Sykstyńskiej, w tym Sąd ostateczny, i zaprojektował kopułę Bazyliki św. Piotra."
  },
  {
    "id": "R01_KUL_03",
    "section": "Nauka i sztuka renesansu",
    "type": "true_false",
    "prompt": "Fresk Szkoła ateńska Rafaela ukazuje najwybitniejszych filozofów starożytnej Grecji.",
    "options": null,
    "answer": true,
    "image": "r01_madonna_sykstynska.jpg",
    "explanation": "Rafael wykonał freski w Pałacu Watykańskim; Szkoła ateńska przedstawia filozofów starożytnej Grecji."
  },
  {
    "id": "R01_KUL_04",
    "section": "Nauka i sztuka renesansu",
    "type": "fill_in",
    "prompt": "Około roku __________ Jan Gutenberg wynalazł druk, a następnie wydrukował na papierze prawie __________ egzemplarzy Biblii.",
    "options": null,
    "answer": [
      "1450",
      "200"
    ],
    "altAnswers": [
      [
        "1450",
        "ok. 1450",
        "około 1450"
      ],
      [
        "200",
        "prawie 200"
      ]
    ],
    "image": "r01_prasa_gutenberga.jpg",
    "explanation": "Około 1450 roku Gutenberg wynalazł druk i wydrukował prawie 200 egzemplarzy Biblii."
  },
  {
    "id": "R01_KUL_05",
    "section": "Nauka i sztuka renesansu",
    "type": "riddle",
    "prompt": "Teoria głosząca, że Ziemia wraz z innymi planetami krąży wokół Słońca, to teoria...",
    "options": null,
    "answer": "heliocentryczna",
    "altAnswers": [
      "heliocentryczna",
      "teoria heliocentryczna",
      "heliocentryzm"
    ],
    "image": "r01_kopernik_obserwuje_niebo.jpg",
    "explanation": "Mikołaj Kopernik obalił teorię geocentryczną i sformułował teorię heliocentryczną."
  },
  {
    "id": "R01_KUL_06",
    "section": "Nauka i sztuka renesansu",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do dzieł lub projektów Leonarda da Vinci: Mona Lisa, Ostatnia wieczerza, łódź podwodna, Madonna Sykstyńska.",
    "options": null,
    "answer": "Madonna Sykstyńska",
    "explanation": "Mona Lisa i Ostatnia wieczerza to dzieła Leonarda, a łódź podwodna była jednym z jego projektów. Madonna Sykstyńska jest dziełem Rafaela."
  },
  {
    "id": "R01_KUL_07",
    "section": "Nauka i sztuka renesansu",
    "type": "scenario",
    "prompt": "Rzemieślnik układa czcionki, pokrywa je farbą, kładzie papier i dociska go prasą, uzyskując wiele identycznych stron. Z jakim wynalazkiem pracuje?",
    "options": [
      "drukiem",
      "teleskopem",
      "kompasem",
      "karawelą",
      "prasą do oliwy używaną wyłącznie w rolnictwie",
      "astrolabium"
    ],
    "answer": 0,
    "image": "r01_prasa_gutenberga.jpg",
    "explanation": "Opis odpowiada prasie drukarskiej używanej po wynalezieniu druku przez Jana Gutenberga około 1450 roku."
  },
  {
    "id": "R01_KUL_08",
    "section": "Nauka i sztuka renesansu",
    "type": "match",
    "prompt": "Połącz twórcę z dziełem lub osiągnięciem.",
    "options": null,
    "left": [
      "Michał Anioł",
      "Leonardo da Vinci",
      "Rafael Santi",
      "Mikołaj Kopernik"
    ],
    "right": [
      "Madonna Sykstyńska",
      "teoria heliocentryczna",
      "Mona Lisa",
      "Sąd ostateczny"
    ],
    "answer": {
      "Michał Anioł": "Sąd ostateczny",
      "Leonardo da Vinci": "Mona Lisa",
      "Rafael Santi": "Madonna Sykstyńska",
      "Mikołaj Kopernik": "teoria heliocentryczna"
    },
    "explanation": "Michał Anioł stworzył Sąd ostateczny, Leonardo Mona Lisę, Rafael Madonnę Sykstyńską, a Kopernik sformułował teorię heliocentryczną."
  },
  {
    "id": "R01_KUL_09",
    "section": "Nauka i sztuka renesansu",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do sztuki, druku lub nauki renesansu.",
    "options": null,
    "items": [
      "Mona Lisa",
      "Szkoła ateńska",
      "prawie 200 drukowanych Biblii Gutenberga",
      "druki ulotne",
      "teoria heliocentryczna",
      "szkice anatomiczne"
    ],
    "categories": [
      "sztuka",
      "druk",
      "nauka"
    ],
    "answer": {
      "sztuka": [
        "Mona Lisa",
        "Szkoła ateńska"
      ],
      "druk": [
        "prawie 200 drukowanych Biblii Gutenberga",
        "druki ulotne"
      ],
      "nauka": [
        "teoria heliocentryczna",
        "szkice anatomiczne"
      ]
    },
    "explanation": "Renesans rozwijał sztukę, upowszechnił druk oraz przyniósł nowe zainteresowania naukowe, w tym anatomię i astronomię."
  },
  {
    "id": "R01_KUL_10",
    "section": "Nauka i sztuka renesansu",
    "type": "sequence",
    "prompt": "Ułóż postacie według roku urodzenia, od urodzonej najwcześniej.",
    "options": null,
    "items": [
      "Rafael Santi",
      "Michał Anioł",
      "Leonardo da Vinci",
      "Mikołaj Kopernik"
    ],
    "answer": [
      "Leonardo da Vinci",
      "Mikołaj Kopernik",
      "Michał Anioł",
      "Rafael Santi"
    ],
    "explanation": "Leonardo da Vinci urodził się w 1452 roku, Kopernik w 1473, Michał Anioł w 1475, a Rafael w 1483."
  },
  {
    "id": "R01_KUL_11",
    "section": "Nauka i sztuka renesansu",
    "type": "single_choice",
    "prompt": "Jaką rolę odegrał Galileusz w dziejach teorii heliocentrycznej?",
    "options": [
      "Upowszechnił i potwierdzał teorię Kopernika",
      "Odkrył Amerykę",
      "Wynalazł druk",
      "Założył Kościół Kalwiński",
      "Namalował Szkołę ateńską",
      "Zwołał sobór trydencki"
    ],
    "answer": 0,
    "image": "r01_kopernik_obserwuje_niebo.jpg",
    "explanation": "Galileusz upowszechnił teorię heliocentryczną w XVII wieku i przeprowadził obliczenia potwierdzające odkrycie Kopernika."
  },
  {
    "id": "R01_REF_01",
    "section": "Reformacja i reforma Kościoła",
    "type": "single_choice",
    "prompt": "Co zrobił Marcin Luter w 1517 roku?",
    "options": [
      "Ogłosił 95 tez przeciwko odpustom",
      "Zwołał sobór trydencki",
      "Założył Towarzystwo Jezusowe",
      "Został królem Anglii",
      "Wydał Indeks ksiąg zakazanych",
      "Odkrył Amerykę"
    ],
    "answer": 0,
    "image": "r01_luter_w_wittenberdze.jpg",
    "explanation": "Luter ogłosił 95 tez przeciwko odpustom, co zapoczątkowało reformację."
  },
  {
    "id": "R01_REF_02",
    "section": "Reformacja i reforma Kościoła",
    "type": "multi_select",
    "prompt": "Zaznacz zjawiska, które należały do przyczyn reformacji.",
    "options": [
      "Gorszące obyczaje części duchowieństwa",
      "Nadużycia finansowe Kościoła",
      "Nepotyzm",
      "Sprzedaż odpustów",
      "Wynalezienie teleskopu",
      "Odkrycie ziemniaka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Reformację poprzedzały gorszące obyczaje części duchowieństwa, nadużycia finansowe, nepotyzm oraz sprzedaż odpustów."
  },
  {
    "id": "R01_REF_03",
    "section": "Reformacja i reforma Kościoła",
    "type": "true_false",
    "prompt": "W luteranizmie duchownym wolno było się żenić.",
    "options": null,
    "answer": true,
    "explanation": "W zestawieniu różnic między katolicyzmem a luteranizmem wskazano, że luterańscy duchowni mogą się żenić, a zakony zostają zniesione."
  },
  {
    "id": "R01_REF_04",
    "section": "Reformacja i reforma Kościoła",
    "type": "fill_in",
    "prompt": "Według Lutra o zbawieniu decydują trzy tylko: tylko __________, tylko __________ i tylko __________.",
    "options": null,
    "answer": [
      "łaska",
      "wiara",
      "Pismo Święte"
    ],
    "altAnswers": [
      [
        "łaska",
        "łaska Boga",
        "łaska Boża"
      ],
      [
        "wiara",
        "wiara w Boga"
      ],
      [
        "Pismo Święte",
        "Biblia",
        "Pismo"
      ]
    ],
    "explanation": "Luter głosił zasadę trzech tylko: tylko łaska Boga, tylko wiara i tylko Pismo Święte."
  },
  {
    "id": "R01_REF_05",
    "section": "Reformacja i reforma Kościoła",
    "type": "riddle",
    "prompt": "Reformator, który w 1536 roku przybył do Genewy i zorganizował tam Kościół Kalwiński, to...",
    "options": null,
    "answer": "Jan Kalwin",
    "altAnswers": [
      "Jan Kalwin",
      "Kalwin"
    ],
    "image": "r01_wnetrze_zboru_kalwinskiego.jpg",
    "explanation": "Jan Kalwin założył w Genewie Kościół Kalwiński i głosił między innymi naukę o przeznaczeniu człowieka do zbawienia lub potępienia."
  },
  {
    "id": "R01_REF_06",
    "section": "Reformacja i reforma Kościoła",
    "type": "odd_one_out",
    "prompt": "Wskaż kraj niepasujący do obszarów rozprzestrzenienia luteranizmu: Dania, Norwegia, Szwecja, Hiszpania.",
    "options": null,
    "answer": "Hiszpania",
    "explanation": "Luteranizm rozprzestrzenił się w części Niemiec, Prusach Książęcych, Danii, Norwegii i Szwecji. Hiszpania pozostała krajem katolickim."
  },
  {
    "id": "R01_REF_07",
    "section": "Reformacja i reforma Kościoła",
    "type": "scenario",
    "prompt": "Król chce uniezależnić swój kraj od papieża, przejąć majątek Kościoła i uzyskać możliwość nowego małżeństwa. W 1534 roku parlament ogłasza go głową narodowego Kościoła. Kim jest ten król?",
    "options": [
      "Henryk VIII",
      "Karol V",
      "Leon X",
      "Aleksander VI",
      "Jan Kalwin",
      "Ignacy Loyola"
    ],
    "answer": 0,
    "image": "r01_henryk_viii.jpg",
    "explanation": "Chodzi o Henryka VIII. W 1534 roku został głową Kościoła Anglikańskiego."
  },
  {
    "id": "R01_REF_08",
    "section": "Reformacja i reforma Kościoła",
    "type": "match",
    "prompt": "Połącz wyznanie lub nurt z cechą.",
    "options": null,
    "left": [
      "luteranizm",
      "kalwinizm",
      "anglikanizm",
      "kontrreformacja"
    ],
    "right": [
      "król Anglii jako głowa Kościoła",
      "trzy tylko",
      "odnowa Kościoła Katolickiego i przeciwdziałanie reformacji",
      "rozdział Kościoła od państwa i nauka o przeznaczeniu"
    ],
    "answer": {
      "luteranizm": "trzy tylko",
      "kalwinizm": "rozdział Kościoła od państwa i nauka o przeznaczeniu",
      "anglikanizm": "król Anglii jako głowa Kościoła",
      "kontrreformacja": "odnowa Kościoła Katolickiego i przeciwdziałanie reformacji"
    },
    "explanation": "Luteranizm podkreślał trzy tylko, kalwinizm rozdział Kościoła od państwa i przeznaczenie, anglikanizm uznawał króla za głowę Kościoła, a kontrreformacja była katolicką odpowiedzią na reformację."
  },
  {
    "id": "R01_REF_09",
    "section": "Reformacja i reforma Kościoła",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do katolicyzmu lub luteranizmu.",
    "options": null,
    "items": [
      "dobre uczynki są potrzebne do zbawienia",
      "władze Kościoła objaśniają Pismo Święte",
      "kult Matki Boskiej i świętych",
      "celibat duchownych",
      "tylko wiara i łaska są potrzebne do zbawienia",
      "każdy chrześcijanin sam czyta Pismo Święte",
      "brak kultu świętych",
      "duchownym wolno się żenić"
    ],
    "categories": [
      "katolicyzm",
      "luteranizm"
    ],
    "answer": {
      "katolicyzm": [
        "dobre uczynki są potrzebne do zbawienia",
        "władze Kościoła objaśniają Pismo Święte",
        "kult Matki Boskiej i świętych",
        "celibat duchownych"
      ],
      "luteranizm": [
        "tylko wiara i łaska są potrzebne do zbawienia",
        "każdy chrześcijanin sam czyta Pismo Święte",
        "brak kultu świętych",
        "duchownym wolno się żenić"
      ]
    },
    "explanation": "Materiał porównuje oba wyznania pod względem zbawienia, autorytetu Kościoła, kultu świętych, celibatu i języka nabożeństw."
  },
  {
    "id": "R01_REF_10",
    "section": "Reformacja i reforma Kościoła",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia reformacji w porządku chronologicznym.",
    "options": null,
    "items": [
      "Pokój w Augsburgu",
      "Przybycie Kalwina do Genewy",
      "Ogłoszenie odpustu przez Leona X",
      "Ogłoszenie 95 tez Lutra",
      "Henryk VIII głową Kościoła Anglikańskiego"
    ],
    "answer": [
      "Ogłoszenie odpustu przez Leona X",
      "Ogłoszenie 95 tez Lutra",
      "Henryk VIII głową Kościoła Anglikańskiego",
      "Przybycie Kalwina do Genewy",
      "Pokój w Augsburgu"
    ],
    "explanation": "Odpust Leona X ogłoszono w 1515 roku, Luter wystąpił w 1517, Henryk VIII został głową Kościoła Anglikańskiego w 1534, Kalwin przybył do Genewy w 1536, a pokój w Augsburgu zawarto w 1555."
  },
  {
    "id": "R01_REF_11",
    "section": "Reformacja i reforma Kościoła",
    "type": "multi_select",
    "prompt": "Zaznacz główne elementy katolickiej kontrreformacji lub reformy Kościoła.",
    "options": [
      "Sobór trydencki",
      "Święte Oficjum i inkwizycja",
      "Towarzystwo Jezusowe",
      "Kościół Anglikański",
      "95 tez Lutra",
      "Pokój w Augsburgu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r01_sobor_trydencki.jpg",
    "explanation": "Do najważniejszych elementów należały sobór trydencki, inkwizycja ze Świętym Oficjum oraz Towarzystwo Jezusowe."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile kosztowało 100 kg goździków w Londynie w przykładzie pokazującym wzrost ceny przypraw na drodze z Azji do Europy?",
    "options": [
      "213 dukatów",
      "2 dukaty",
      "20 dukatów",
      "50 dukatów",
      "100 dukatów",
      "150 dukatów"
    ],
    "answer": 0,
    "explanation": "W przykładzie 100 kg goździków kosztowało 2 dukaty na wyspach dzisiejszej Indonezji, 50 dukatów w Kalikacie i 213 dukatów w Londynie."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Vasco da Gama wyruszył z około __________ marynarzami, a w drodze powrotnej zmarło ponad __________ z nich.",
    "options": null,
    "answer": [
      "170",
      "100"
    ],
    "altAnswers": [
      [
        "170",
        "około 170",
        "ok. 170"
      ],
      [
        "100",
        "ponad 100"
      ]
    ],
    "explanation": "W wyprawie da Gamy uczestniczyło około 170 marynarzy, a podczas trudnej drogi powrotnej zmarło ponad 100."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz szczegóły dotyczące wyprawy Ferdynanda Magellana.",
    "options": [
      "W 1519 roku wypłynęło pięć okrętów",
      "Magellan nazwał nowy ocean Pacyfikiem",
      "Magellan zginął na Filipinach",
      "Do Hiszpanii wróciła Victoria z 18 ludźmi",
      "Wyprawa wróciła wszystkimi pięcioma okrętami",
      "Magellan osobiście dopłynął z powrotem do Hiszpanii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_victoria_po_rejsie.jpg",
    "explanation": "W 1519 roku wypłynęło pięć okrętów. Magellan przepłynął cieśninę nazwaną jego imieniem, nazwał nowy ocean Pacyfikiem, zginął na Filipinach, a do Hiszpanii wróciła Victoria z 18 ludźmi."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas pierwszego lądowania na amerykańskiej wyspie odkrywca chce zdobyć przychylność mieszkańców. Co, zgodnie z jego dziennikiem, rozdaje niektórym z nich?",
    "options": [
      "Kolorowe czapeczki i szklane naszyjniki",
      "Srebrne monety i broń",
      "Konie i bydło",
      "Drukowane Biblie",
      "Przyprawy korzenne",
      "Złote korony"
    ],
    "answer": 0,
    "explanation": "Kolumb pisał, że dla pozyskania przyjaźni tubylców rozdawał kolorowe czapeczki oraz szklane naszyjniki."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Mieszkańcy Tenochtitlanu mieli ponad tyle łodzi służących do transportu ludzi i towarów. Podaj liczbę.",
    "options": null,
    "answer": "50 tysięcy",
    "altAnswers": [
      "50 tysięcy",
      "50000",
      "50 000",
      "ponad 50 tysięcy"
    ],
    "image": "r01_tenochtitlan_miasto.jpg",
    "explanation": "Opis azteckiej stolicy podaje, że mieszkańcy mieli ponad 50 tysięcy łodzi."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz postać renesansu z latami życia.",
    "options": null,
    "left": [
      "Leonardo da Vinci",
      "Mikołaj Kopernik",
      "Michał Anioł",
      "Rafael Santi"
    ],
    "right": [
      "1483-1520",
      "1475-1564",
      "1452-1519",
      "1473-1543"
    ],
    "answer": {
      "Leonardo da Vinci": "1452-1519",
      "Mikołaj Kopernik": "1473-1543",
      "Michał Anioł": "1475-1564",
      "Rafael Santi": "1483-1520"
    },
    "explanation": "W materiale podano daty życia Leonarda da Vinci, Kopernika, Michała Anioła i Rafaela."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z reformacją i kontrreformacją w porządku chronologicznym.",
    "options": null,
    "items": [
      "Wydanie Indeksu ksiąg zakazanych",
      "Utworzenie Świętego Oficjum",
      "Ogłoszenie odpustu przez Leona X",
      "Rozpoczęcie soboru trydenckiego",
      "Ogłoszenie 95 tez Lutra"
    ],
    "answer": [
      "Ogłoszenie odpustu przez Leona X",
      "Ogłoszenie 95 tez Lutra",
      "Utworzenie Świętego Oficjum",
      "Rozpoczęcie soboru trydenckiego",
      "Wydanie Indeksu ksiąg zakazanych"
    ],
    "explanation": "Odpust Leona X ogłoszono w 1515 roku, tezy Lutra w 1517, Święte Oficjum powstało w 1542, sobór trydencki rozpoczął się w 1545, a Indeks ksiąg zakazanych wydano w 1559."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile dzieci miał papież Aleksander VI, którego przykład podano jako ilustrację kryzysu obyczajów w Kościele na przełomie XV i XVI wieku?",
    "options": [
      "9",
      "3",
      "6",
      "12",
      "15",
      "18"
    ],
    "answer": 0,
    "explanation": "W materiale podano, że Aleksander VI miał dziewięcioro dzieci, którym powierzał całe księstwa."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zachowania zakazane w Genewie przez Jana Kalwina.",
    "options": [
      "Tańce",
      "Kolorowe stroje",
      "Wizyty w gospodach",
      "Wizyty w teatrach",
      "Czytanie Biblii",
      "Pracowitość"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_wnetrze_zboru_kalwinskiego.jpg",
    "explanation": "Kalwin zakazał tańców, kolorowych strojów, wizyt w gospodach i teatrach, chcąc narzucić członkom Kościoła surowe obyczaje."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pokój w Augsburgu wprowadził zasadę, według której niemiecki władca narzucał poddanym swoje wyznanie.",
    "options": null,
    "answer": true,
    "explanation": "Pokój w Augsburgu z 1555 roku wprowadził zasadę czyja władza, tego religia, co oznaczało, że władca decydował o wyznaniu swoich poddanych."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Sobór trydencki rozpoczął się w roku __________, zakończył w roku __________ i trwał z przerwami __________ lat.",
    "options": null,
    "answer": [
      "1545",
      "1563",
      "18"
    ],
    "altAnswers": [
      [
        "1545",
        "1545 r."
      ],
      [
        "1563",
        "1563 r."
      ],
      [
        "18",
        "18 lat"
      ]
    ],
    "image": "r01_sobor_trydencki.jpg",
    "explanation": "Sobór trydencki trwał z przerwami 18 lat, od 1545 do 1563 roku."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek wyroków inkwizycji stanowiły kary śmierci według podanych w materiale współczesnych ustaleń?",
    "options": [
      "około 1%",
      "około 10%",
      "około 25%",
      "około 50%",
      "około 75%",
      "niemal 100%"
    ],
    "answer": 0,
    "explanation": "W materiale wskazano, że kary śmierci stanowiły około 1% wyroków inkwizycji, a znacznie częstsze były kary pokutne."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W 1633 roku siedemdziesięcioletni uczony odwołuje przed rzymską inkwizycją poparcie dla teorii Kopernika, aby uniknąć więzienia. Jaką karę otrzymuje?",
    "options": [
      "Dożywotni areszt domowy i psalmy pokutne",
      "Natychmiastową karę śmierci",
      "Wygnanie do Ameryki",
      "Służbę w armii",
      "Utratę obywatelstwa Genewy",
      "Pracę w kopalni srebra"
    ],
    "answer": 0,
    "explanation": "Galileusz został skazany na dożywotni areszt domowy oraz odmawianie siedmiu psalmów pokutnych raz w tygodniu przez trzy lata."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do luteranizmu, kalwinizmu, anglikanizmu lub katolickiej kontrreformacji.",
    "options": null,
    "items": [
      "trzy tylko",
      "Kościół zależny od władzy świeckiej",
      "nauka o przeznaczeniu",
      "rozdział Kościoła od państwa",
      "król Anglii głową Kościoła",
      "likwidacja klasztorów przez Henryka VIII",
      "sobór trydencki",
      "Towarzystwo Jezusowe"
    ],
    "categories": [
      "luteranizm",
      "kalwinizm",
      "anglikanizm",
      "kontrreformacja"
    ],
    "answer": {
      "luteranizm": [
        "trzy tylko",
        "Kościół zależny od władzy świeckiej"
      ],
      "kalwinizm": [
        "nauka o przeznaczeniu",
        "rozdział Kościoła od państwa"
      ],
      "anglikanizm": [
        "król Anglii głową Kościoła",
        "likwidacja klasztorów przez Henryka VIII"
      ],
      "kontrreformacja": [
        "sobór trydencki",
        "Towarzystwo Jezusowe"
      ]
    },
    "explanation": "Cztery nurty różniły się organizacją Kościoła i nauczaniem. Luteranizm wiązał się z trzema tylko, kalwinizm z przeznaczeniem i rozdziałem Kościoła od państwa, anglikanizm z królem jako głową Kościoła, a kontrreformacja z soborem, inkwizycją i jezuitami."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do celów jezuitów: nawracanie pogan, zachęcanie protestantów do powrotu, prowadzenie szkół, zniesienie celibatu.",
    "options": null,
    "answer": "zniesienie celibatu",
    "image": "r01_kolegium_jezuickie.jpg",
    "explanation": "Jezuici mieli nawracać pogan, zachęcać protestantów do powrotu do Kościoła Katolickiego i prowadzić szkoły. Zniesienie celibatu nie było ich celem."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Początki epoki nowożytnej",
  icon: "🌍",
  sectionOrder: [
    "Wielkie odkrycia geograficzne",
    "Skutki odkryć i cywilizacje Ameryki",
    "Renesans i humanizm",
    "Nauka i sztuka renesansu",
    "Reformacja i reforma Kościoła"
  ],
  sectionIcons: {
    "Wielkie odkrycia geograficzne": "🧭",
    "Skutki odkryć i cywilizacje Ameryki": "🌎",
    "Renesans i humanizm": "📜",
    "Nauka i sztuka renesansu": "🎨",
    "Reformacja i reforma Kościoła": "⛪"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
