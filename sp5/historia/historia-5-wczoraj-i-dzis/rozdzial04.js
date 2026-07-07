// Skróty sekcji:
//   BIZ = Bizancjum
//   ARA = Arabowie i początki islamu
//   FRA = Nowe państwa w Europie (Frankowie)
//   KON = Konflikt papiestwa z cesarstwem
//   WYP = Wyprawy krzyżowe
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_BIZ_01",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Jak inaczej nazywano cesarstwo wschodniorzymskie?",
    "options": [
      "Cesarstwem bizantyjskim",
      "Cesarstwem Franków",
      "Rzeszą Niemiecką",
      "Kalifatem bagdadzkim",
      "Królestwem Jerozolimskim",
      "Państwem Longobardów"
    ],
    "answer": 0,
    "explanation": "Cesarstwo wschodniorzymskie nazywano także cesarstwem bizantyjskim lub Bizancjum, od dawnej kolonii Bizancjum."
  },
  {
    "id": "R04_BIZ_02",
    "section": "Bizancjum",
    "type": "true_false",
    "prompt": "Cesarstwo wschodniorzymskie powstało w 395 roku po podziale Imperium Rzymskiego.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku podano, że Bizancjum powstało w 395 roku wskutek podziału Imperium Rzymskiego na część zachodnią i wschodnią."
  },
  {
    "id": "R04_BIZ_03",
    "section": "Bizancjum",
    "type": "fill_in",
    "prompt": "Stolicą cesarstwa bizantyjskiego był __________, położony nad cieśniną __________.",
    "options": null,
    "answer": [
      "Konstantynopol",
      "Bosfor"
    ],
    "altAnswers": [
      [
        "Konstantynopol",
        "Konstantynopolem"
      ],
      [
        "Bosfor",
        "Bosforem"
      ]
    ],
    "explanation": "Konstantynopol leżał nad Bosforem, na styku Europy i Azji."
  },
  {
    "id": "R04_BIZ_04",
    "section": "Bizancjum",
    "type": "multi_select",
    "prompt": "Zaznacz tereny zdobyte przez Bizancjum za panowania Justyniana I Wielkiego.",
    "options": [
      "Italia",
      "północna Afryka",
      "południowa Hiszpania",
      "Sycylia",
      "cała Skandynawia",
      "Irlandia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Za Justyniana cesarstwo zdobyło m.in. Italię, północną Afrykę, południową Hiszpanię i Sycylię.",
    "image": "/img/r04_justynian_mozaika.jpg"
  },
  {
    "id": "R04_BIZ_05",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Który władca doprowadził Bizancjum do największej świetności w VI wieku?",
    "options": [
      "Justynian I Wielki",
      "Chlodwig",
      "Karol Wielki",
      "Otton I",
      "Urban II",
      "Henryk IV"
    ],
    "answer": 0,
    "explanation": "Największy rozkwit Bizancjum przypadł na panowanie cesarza Justyniana I Wielkiego.",
    "image": "/img/r04_justynian_mozaika.jpg"
  },
  {
    "id": "R04_BIZ_06",
    "section": "Bizancjum",
    "type": "riddle",
    "prompt": "Zbiór zasad prawnych spisany na polecenie Justyniana to...",
    "options": null,
    "answer": "Kodeks Justyniana",
    "altAnswers": [
      "Kodeks Justyniana",
      "kodeks Justyniana",
      "Codex Iustinianus"
    ],
    "explanation": "Kodeks Justyniana zawierał ponad 4600 przepisów prawa rzymskiego."
  },
  {
    "id": "R04_BIZ_07",
    "section": "Bizancjum",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "fresk",
      "mozaika",
      "ikona",
      "arkady"
    ],
    "right": [
      "obraz religijny zwykle na desce",
      "rzędy kolumn połączonych łukami",
      "malowidło na ścianie",
      "obraz z drobnych różnokolorowych kamyków"
    ],
    "answer": {
      "fresk": "malowidło na ścianie",
      "mozaika": "obraz z drobnych różnokolorowych kamyków",
      "ikona": "obraz religijny zwykle na desce",
      "arkady": "rzędy kolumn połączonych łukami"
    },
    "explanation": "Styl bizantyjski wykorzystywał m.in. freski, mozaiki, ikony, kopuły i arkady."
  },
  {
    "id": "R04_BIZ_08",
    "section": "Bizancjum",
    "type": "scenario",
    "prompt": "Uczeń ogląda ilustrację ogromnej świątyni wzniesionej w VI wieku na rozkaz Justyniana. Budowla ma wielką kopułę i była przez prawie tysiąc lat największą świątynią chrześcijańską. Co ogląda uczeń?",
    "options": [
      "Hagia Sofia",
      "Meczet w Medynie",
      "Bazylikę Grobu Pańskiego",
      "Katedrę w Akwizgranie",
      "Krak des Chevaliers",
      "Kaabę"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy bazyliki Hagia Sofia, czyli kościoła Mądrości Bożej w Konstantynopolu.",
    "image": "/img/r04_hagia_sophia_kopula.jpg"
  },
  {
    "id": "R04_BIZ_09",
    "section": "Bizancjum",
    "type": "true_false",
    "prompt": "Wnętrza kościołów i pałaców bizantyjskich zdobiono freskami oraz mozaikami.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje freski i mozaiki jako charakterystyczne dekoracje wnętrz bizantyjskich."
  },
  {
    "id": "R04_BIZ_10",
    "section": "Bizancjum",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: kopuła, arkady, mozaika, dżihad.",
    "options": null,
    "answer": "dżihad",
    "explanation": "Kopuła, arkady i mozaika wiążą się ze stylem bizantyjskim, a dżihad z islamem i podbojami Arabów."
  },
  {
    "id": "R04_BIZ_11",
    "section": "Bizancjum",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów Bizancjum w porządku chronologicznym.",
    "options": null,
    "items": [
      "Panowanie Justyniana I Wielkiego",
      "Zdobycie Konstantynopola przez Turków",
      "Powstanie cesarstwa wschodniorzymskiego"
    ],
    "answer": [
      "Powstanie cesarstwa wschodniorzymskiego",
      "Panowanie Justyniana I Wielkiego",
      "Zdobycie Konstantynopola przez Turków"
    ],
    "explanation": "Najpierw powstało cesarstwo w 395 roku, potem panował Justynian w VI wieku, a w 1453 roku Turcy zdobyli Konstantynopol."
  },
  {
    "id": "R04_BIZ_12",
    "section": "Bizancjum",
    "type": "single_choice",
    "prompt": "Co było bezpośrednim skutkiem zdobycia Konstantynopola przez Turków w 1453 roku?",
    "options": [
      "Upadek cesarstwa bizantyjskiego",
      "Powstanie państwa Franków",
      "Koronacja Karola Wielkiego",
      "Podział chrześcijaństwa na dwa odłamy",
      "Zwołanie synodu w Clermont",
      "Podpisanie układu w Verdun"
    ],
    "answer": 0,
    "explanation": "Zdobycie Konstantynopola oznaczało kres istnienia cesarstwa bizantyjskiego."
  },
  {
    "id": "R04_ARA_01",
    "section": "Arabowie i początki islamu",
    "type": "single_choice",
    "prompt": "Gdzie początkowo zamieszkiwali Arabowie opisani w rozdziale?",
    "options": [
      "Na Półwyspie Arabskim",
      "W Galii",
      "Na Półwyspie Apenińskim",
      "W Skandynawii",
      "W północnych Niemczech",
      "W Palestynie rządzonej przez krzyżowców"
    ],
    "answer": 0,
    "explanation": "Arabowie początkowo zamieszkiwali pustynny obszar zwany dziś Półwyspem Arabskim."
  },
  {
    "id": "R04_ARA_02",
    "section": "Arabowie i początki islamu",
    "type": "true_false",
    "prompt": "Mekka była ważnym miejscem dla Arabów jeszcze przed działalnością Mahometa.",
    "options": null,
    "answer": true,
    "explanation": "W Mekce znajdowała się Kaaba z Czarnym Kamieniem, czczonym już przed powstaniem islamu."
  },
  {
    "id": "R04_ARA_03",
    "section": "Arabowie i początki islamu",
    "type": "fill_in",
    "prompt": "Mahomet uciekł z Mekki do __________ w roku __________.",
    "options": null,
    "answer": [
      "Medyny",
      "622"
    ],
    "altAnswers": [
      [
        "Medyny",
        "Medyna",
        "Medynie"
      ],
      [
        "622",
        "622 roku",
        "622 r."
      ]
    ],
    "explanation": "Ucieczka Mahometa do Medyny w 622 roku została uznana przez muzułmanów za początek nowej ery."
  },
  {
    "id": "R04_ARA_04",
    "section": "Arabowie i początki islamu",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do pięciu filarów islamu według podręcznika.",
    "options": [
      "publiczne wyznanie wiary",
      "modlitwa pięć razy dziennie",
      "jałmużna",
      "pielgrzymka do Mekki",
      "chrzest",
      "koronacja przez papieża"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pięć filarów islamu obejmuje wyznanie wiary, modlitwę, jałmużnę, post oraz pielgrzymkę do Mekki."
  },
  {
    "id": "R04_ARA_05",
    "section": "Arabowie i początki islamu",
    "type": "single_choice",
    "prompt": "Jak nazywa się święta księga islamu?",
    "options": [
      "Koran",
      "Biblia",
      "Kodeks Justyniana",
      "Ewangelia",
      "Kronika świata",
      "Reguła zakonna"
    ],
    "answer": 0,
    "explanation": "Nauki Mahometa po jego śmierci zebrano w Koranie, świętej księdze islamu."
  },
  {
    "id": "R04_ARA_06",
    "section": "Arabowie i początki islamu",
    "type": "riddle",
    "prompt": "Muzułmańska świątynia, w której wierni modlą się i słuchają komentarzy do Koranu, to...",
    "options": null,
    "answer": "meczet",
    "altAnswers": [
      "meczet",
      "Meczet"
    ],
    "explanation": "Meczet jest miejscem modlitwy, zebrań, dyskusji oraz rozdzielania jałmużny w islamie.",
    "image": "/img/r04_meczet_wnetrze.jpg"
  },
  {
    "id": "R04_ARA_07",
    "section": "Arabowie i początki islamu",
    "type": "match",
    "prompt": "Połącz pojęcie związane z islamem z opisem.",
    "options": null,
    "left": [
      "kalif",
      "dżihad",
      "mihrab",
      "minaret"
    ],
    "right": [
      "wieża, z której zwoływano wiernych na modlitwę",
      "następca proroka i przywódca muzułmanów",
      "wnęka wskazująca kierunek Mekki",
      "obowiązek umacniania wiary rozumiany jako walka zbrojna"
    ],
    "answer": {
      "kalif": "następca proroka i przywódca muzułmanów",
      "dżihad": "obowiązek umacniania wiary rozumiany jako walka zbrojna",
      "mihrab": "wnęka wskazująca kierunek Mekki",
      "minaret": "wieża, z której zwoływano wiernych na modlitwę"
    },
    "explanation": "Te pojęcia opisują organizację wspólnoty muzułmańskiej, podboje oraz elementy meczetu.",
    "image": "/img/r04_meczet_wnetrze.jpg"
  },
  {
    "id": "R04_ARA_08",
    "section": "Arabowie i początki islamu",
    "type": "scenario",
    "prompt": "Kupiec z kraju muzułmańskiego przenosi do Europy osiągnięcia Dalekiego Wschodu: papier, porcelanę i wyroby rzemiosła artystycznego. Jaki proces opisuje ta sytuacja?",
    "options": [
      "Wpływ kultury arabskiej na Europę",
      "Podział państwa Franków",
      "Spór o inwestyturę",
      "Upadek Konstantynopola",
      "Zamknięcie kościołów w Konstantynopolu",
      "Koronację Ottona I"
    ],
    "answer": 0,
    "explanation": "Podręcznik podkreśla, że za pośrednictwem Arabów do Europy trafiały różne osiągnięcia cywilizacji Wschodu."
  },
  {
    "id": "R04_ARA_09",
    "section": "Arabowie i początki islamu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do kategorii.",
    "options": null,
    "items": [
      "Koran",
      "meczet",
      "Hagia Sofia",
      "Kodeks Justyniana",
      "Kaaba",
      "Czarny Kamień"
    ],
    "categories": [
      "islam",
      "Bizancjum"
    ],
    "answer": {
      "islam": [
        "Koran",
        "meczet",
        "Kaaba",
        "Czarny Kamień"
      ],
      "Bizancjum": [
        "Hagia Sofia",
        "Kodeks Justyniana"
      ]
    },
    "explanation": "Koran, meczet, Kaaba i Czarny Kamień wiążą się z islamem, a Hagia Sofia i Kodeks Justyniana z Bizancjum."
  },
  {
    "id": "R04_ARA_10",
    "section": "Arabowie i początki islamu",
    "type": "true_false",
    "prompt": "W VIII wieku Arabowie opanowali ziemie od Indii po Morze Śródziemne, północną Afrykę i część dzisiejszej Hiszpanii.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje taki zasięg podbojów arabskich w VIII wieku.",
    "image": "/img/r04_wojownik_arabski.jpg"
  },
  {
    "id": "R04_ARA_11",
    "section": "Arabowie i początki islamu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Koran, Kaaba, minaret, margrabia.",
    "options": null,
    "answer": "margrabia",
    "explanation": "Margrabia to urzędnik związany z marchiami w państwie Karola Wielkiego, a pozostałe pojęcia dotyczą islamu."
  },
  {
    "id": "R04_ARA_12",
    "section": "Arabowie i początki islamu",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z początków islamu i podbojów arabskich w porządku chronologicznym.",
    "options": null,
    "items": [
      "Podboje arabskie obejmują północną Afrykę i część Hiszpanii",
      "Ucieczka Mahometa do Medyny",
      "Mahomet zaczyna głosić objawienia"
    ],
    "answer": [
      "Mahomet zaczyna głosić objawienia",
      "Ucieczka Mahometa do Medyny",
      "Podboje arabskie obejmują północną Afrykę i część Hiszpanii"
    ],
    "explanation": "Około 610 roku Mahomet zaczął głosić objawienia, w 622 roku uciekł do Medyny, a w VIII wieku Arabowie stworzyli rozległe imperium."
  },
  {
    "id": "R04_FRA_01",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Jaki lud germański stworzył własne państwo na terenie Galii?",
    "options": [
      "Frankowie",
      "Arabowie",
      "Turcy",
      "Węgrzy",
      "Słowianie",
      "Bizantyjczycy"
    ],
    "answer": 0,
    "explanation": "Frankowie zasiedlili Galię i po upadku cesarstwa zachodniorzymskiego utworzyli tam własne państwo."
  },
  {
    "id": "R04_FRA_02",
    "section": "Nowe państwa w Europie",
    "type": "fill_in",
    "prompt": "Król Franków __________ przyjął chrześcijaństwo w __________ roku.",
    "options": null,
    "answer": [
      "Chlodwig",
      "496"
    ],
    "altAnswers": [
      [
        "Chlodwig",
        "Chlodwiga"
      ],
      [
        "496",
        "496 roku",
        "496 r."
      ]
    ],
    "explanation": "Chlodwig z dynastii Merowingów przyjął chrześcijaństwo w 496 roku."
  },
  {
    "id": "R04_FRA_03",
    "section": "Nowe państwa w Europie",
    "type": "true_false",
    "prompt": "Pepin Mały w 751 roku pozbawił tronu króla z dynastii Merowingów i zapoczątkował dynastię Karolingów.",
    "options": null,
    "answer": true,
    "explanation": "Pepin Mały przejął władzę królewską i dał początek dynastii Karolingów."
  },
  {
    "id": "R04_FRA_04",
    "section": "Nowe państwa w Europie",
    "type": "single_choice",
    "prompt": "Kto dowodził Frankami w bitwie pod Poitiers w 732 roku?",
    "options": [
      "Karol Młot",
      "Pepin Mały",
      "Karol Łysy",
      "Lotar",
      "Otton I",
      "Urban II"
    ],
    "answer": 0,
    "explanation": "Pod Poitiers Frankami dowodził majordom Karol Młot, ojciec Pepina Małego."
  },
  {
    "id": "R04_FRA_05",
    "section": "Nowe państwa w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz działania lub osiągnięcia Karola Wielkiego opisane w rozdziale.",
    "options": [
      "rozszerzył granice państwa Franków",
      "wspierał rozwój szkół przy kościołach i klasztorach",
      "przyjął tytuł cesarski w 800 roku",
      "kazał spisać Kodeks Justyniana",
      "zwołał synod w Clermont",
      "założył zakon templariuszy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Karol Wielki prowadził podboje, wspierał rozwój nauki i został koronowany na cesarza w 800 roku.",
    "image": "/img/r04_karol_wielki_koronacja.jpg"
  },
  {
    "id": "R04_FRA_06",
    "section": "Nowe państwa w Europie",
    "type": "riddle",
    "prompt": "Obszar przygraniczny w państwie Karola Wielkiego, którego zadaniem była obrona przed najazdami, to...",
    "options": null,
    "answer": "marchia",
    "altAnswers": [
      "marchia",
      "Marchia",
      "marchie"
    ],
    "explanation": "Marchie były obszarami przygranicznymi dowodzonymi przez margrabiów."
  },
  {
    "id": "R04_FRA_07",
    "section": "Nowe państwa w Europie",
    "type": "match",
    "prompt": "Połącz postać z właściwą informacją.",
    "options": null,
    "left": [
      "Chlodwig",
      "Pepin Mały",
      "Karol Wielki",
      "Otton I"
    ],
    "right": [
      "został cesarzem rzymskim w 962 roku",
      "przyjął chrześcijaństwo w 496 roku",
      "został cesarzem w 800 roku",
      "zapoczątkował dynastię Karolingów"
    ],
    "answer": {
      "Chlodwig": "przyjął chrześcijaństwo w 496 roku",
      "Pepin Mały": "zapoczątkował dynastię Karolingów",
      "Karol Wielki": "został cesarzem w 800 roku",
      "Otton I": "został cesarzem rzymskim w 962 roku"
    },
    "explanation": "Każda z tych postaci wiąże się z innym etapem dziejów Franków i Rzeszy Niemieckiej."
  },
  {
    "id": "R04_FRA_08",
    "section": "Nowe państwa w Europie",
    "type": "scenario",
    "prompt": "Władca chce bronić rozległego imperium. Tworzy przy granicach specjalne okręgi, a ich zwierzchnicy mogą szybko podejmować decyzje wojskowe. O jakich okręgach mowa?",
    "options": [
      "marchiach",
      "kalifatach",
      "patriarchatach",
      "krucjatach",
      "synodach",
      "komnatach porfirowych"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy marchii, czyli obszarów przygranicznych w państwie Karola Wielkiego."
  },
  {
    "id": "R04_FRA_09",
    "section": "Nowe państwa w Europie",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów państwa Franków i Rzeszy w porządku chronologicznym.",
    "options": null,
    "items": [
      "Koronacja Ottona I na cesarza",
      "Bitwa pod Poitiers",
      "Układ w Verdun",
      "Koronacja Karola Wielkiego"
    ],
    "answer": [
      "Bitwa pod Poitiers",
      "Koronacja Karola Wielkiego",
      "Układ w Verdun",
      "Koronacja Ottona I na cesarza"
    ],
    "explanation": "Kolejność dat to: Poitiers 732, koronacja Karola 800, Verdun 843, koronacja Ottona I 962."
  },
  {
    "id": "R04_FRA_10",
    "section": "Nowe państwa w Europie",
    "type": "sort",
    "prompt": "Przyporządkuj skutki układu w Verdun do części dawnego państwa Karola Wielkiego.",
    "options": null,
    "items": [
      "Francja",
      "Niemcy",
      "Włochy",
      "sporne ziemie północne części środkowej"
    ],
    "categories": [
      "część zachodnia",
      "część wschodnia",
      "część środkowa"
    ],
    "answer": {
      "część zachodnia": [
        "Francja"
      ],
      "część wschodnia": [
        "Niemcy"
      ],
      "część środkowa": [
        "Włochy",
        "sporne ziemie północne części środkowej"
      ]
    },
    "explanation": "Z części zachodniej wyłoniła się Francja, ze wschodniej Niemcy, a z południowej części środkowej Włochy; północ tej części stała się przedmiotem sporów."
  },
  {
    "id": "R04_FRA_11",
    "section": "Nowe państwa w Europie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Lotar, Ludwik Niemiecki, Karol Łysy, Mahomet.",
    "options": null,
    "answer": "Mahomet",
    "explanation": "Lotar, Ludwik Niemiecki i Karol Łysy byli wnukami Karola Wielkiego dzielącymi jego państwo, a Mahomet był twórcą islamu."
  },
  {
    "id": "R04_FRA_12",
    "section": "Nowe państwa w Europie",
    "type": "true_false",
    "prompt": "Rzesza Niemiecka była związkiem księstw niemieckich posiadających znaczną niezależność.",
    "options": null,
    "answer": true,
    "explanation": "Po osłabieniu władzy królewskiej państwo wschodniofrankijskie przybrało postać związku dość niezależnych księstw."
  },
  {
    "id": "R04_KON_01",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "single_choice",
    "prompt": "Jak nazywa się rozłam chrześcijaństwa z 1054 roku opisany w rozdziale?",
    "options": [
      "wielka schizma wschodnia",
      "układ w Verdun",
      "konkordat wormacki",
      "pierwsza krucjata",
      "dżihad",
      "reforma karolińska"
    ],
    "answer": 0,
    "explanation": "Rozłam z 1054 roku nazwano wielką schizmą wschodnią."
  },
  {
    "id": "R04_KON_02",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny narastania różnic między chrześcijanami Wschodu i Zachodu.",
    "options": [
      "odmienne obrzędy",
      "różnice języka używanego w czasie mszy",
      "spory o dogmaty",
      "rywalizacja papieża i patriarchy Konstantynopola",
      "spór o zdobycie Akki",
      "podział państwa Karola Wielkiego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podział pogłębiały różnice obrzędowe, językowe i dogmatyczne oraz spór o zwierzchnictwo w Kościele."
  },
  {
    "id": "R04_KON_03",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "fill_in",
    "prompt": "Chrześcijan zachodnich uznających władzę papieża nazywamy __________, a wschodnich __________.",
    "options": null,
    "answer": [
      "katolikami",
      "prawosławnymi"
    ],
    "altAnswers": [
      [
        "katolikami",
        "katolicy"
      ],
      [
        "prawosławnymi",
        "prawosławni"
      ]
    ],
    "explanation": "Po wielkiej schizmie zachodni chrześcijanie to katolicy, a wschodni to prawosławni."
  },
  {
    "id": "R04_KON_04",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "true_false",
    "prompt": "Ekskomunika oznaczała największą karę kościelną, czyli wykluczenie ze wspólnoty wiernych.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale ekskomunikę objaśniono jako klątwę i największą karę w Kościele."
  },
  {
    "id": "R04_KON_05",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "riddle",
    "prompt": "Prawo decydowania o wyborze dostojników kościelnych, głównie biskupów, to...",
    "options": null,
    "answer": "inwestytura",
    "altAnswers": [
      "inwestytura",
      "Inwestytura"
    ],
    "explanation": "Spór o inwestyturę dotyczył tego, kto ma decydować o obsadzaniu stanowisk kościelnych."
  },
  {
    "id": "R04_KON_06",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "scenario",
    "prompt": "Cesarz traci posłuszeństwo poddanych, ponieważ papież rzucił na niego klątwę. Władca jedzie do włoskiego zamku i okazuje pokorę, aby klątwę cofnięto. O jakie wydarzenie chodzi?",
    "options": [
      "pokutę Henryka IV w Canossie",
      "synod w Clermont",
      "bitwę pod Poitiers",
      "układ w Verdun",
      "zdobycie Akki",
      "koronację Chlodwiga"
    ],
    "answer": 0,
    "explanation": "W 1077 roku Henryk IV udał się do Canossy, gdzie okazał pokorę wobec Grzegorza VII.",
    "image": "/img/r04_cesarz_w_canossie.jpg"
  },
  {
    "id": "R04_KON_07",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "dogmat",
      "patriarcha",
      "schizma",
      "konkordat"
    ],
    "right": [
      "umowa między papieżem a państwem",
      "najwyższy dostojnik w Kościołach wschodnich",
      "główna prawda wiary",
      "rozłam dotyczący religii"
    ],
    "answer": {
      "dogmat": "główna prawda wiary",
      "patriarcha": "najwyższy dostojnik w Kościołach wschodnich",
      "schizma": "rozłam dotyczący religii",
      "konkordat": "umowa między papieżem a państwem"
    },
    "explanation": "Te pojęcia są kluczowe dla zrozumienia wielkiej schizmy i sporu papiestwa z cesarstwem."
  },
  {
    "id": "R04_KON_08",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "single_choice",
    "prompt": "Który papież rywalizował z cesarzem Henrykiem IV w sporze o inwestyturę?",
    "options": [
      "Grzegorz VII",
      "Urban II",
      "Leon III",
      "Klemens V",
      "Jan Paweł II",
      "Sylwester II"
    ],
    "answer": 0,
    "explanation": "W drugiej połowie XI wieku papież Grzegorz VII dążył do reformy Kościoła i rywalizował z Henrykiem IV."
  },
  {
    "id": "R04_KON_09",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: papież, patriarcha, biskup, kalif.",
    "options": null,
    "answer": "kalif",
    "explanation": "Papież, patriarcha i biskup to godności chrześcijańskie, a kalif był przywódcą muzułmanów."
  },
  {
    "id": "R04_KON_10",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z konfliktem Kościoła i cesarstwa w porządku chronologicznym.",
    "options": null,
    "items": [
      "Konkordat w Wormacji",
      "Wielka schizma wschodnia",
      "Pokora Henryka IV w Canossie"
    ],
    "answer": [
      "Wielka schizma wschodnia",
      "Pokora Henryka IV w Canossie",
      "Konkordat w Wormacji"
    ],
    "explanation": "Najpierw doszło do schizmy w 1054 roku, potem do wydarzeń w Canossie w 1077 roku, a w 1122 roku zawarto konkordat w Wormacji."
  },
  {
    "id": "R04_KON_11",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "single_choice",
    "prompt": "Co ustalono w konkordacie wormackim z 1122 roku?",
    "options": [
      "Cesarz zrzekł się prawa mianowania biskupów, ale zachował prawo nadawania im majątku ziemskiego",
      "Papież podporządkował się cesarzowi we wszystkich sprawach",
      "Patriarcha Konstantynopola uznał zwierzchnictwo papieża",
      "Zakazano pielgrzymek do Ziemi Świętej",
      "Podzielono państwo Franków na trzy części",
      "Utworzono Królestwo Jerozolimskie"
    ],
    "answer": 0,
    "explanation": "Konkordat w Wormacji rozdzielił wybór biskupów od świeckiego nadawania im majątku."
  },
  {
    "id": "R04_KON_12",
    "section": "Konflikt papiestwa z cesarstwem",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do chrześcijaństwa zachodniego lub wschodniego według rozdziału.",
    "options": null,
    "items": [
      "uznanie zwierzchnictwa papieża",
      "patriarcha Konstantynopola jako równy papieżowi",
      "łacina na Zachodzie",
      "greka na Wschodzie"
    ],
    "categories": [
      "Zachód",
      "Wschód"
    ],
    "answer": {
      "Zachód": [
        "uznanie zwierzchnictwa papieża",
        "łacina na Zachodzie"
      ],
      "Wschód": [
        "patriarcha Konstantynopola jako równy papieżowi",
        "greka na Wschodzie"
      ]
    },
    "explanation": "Na Zachodzie ważna była władza papieża i łacina, a na Wschodzie pozycja patriarchy Konstantynopola i język grecki."
  },
  {
    "id": "R04_WYP_01",
    "section": "Wyprawy krzyżowe",
    "type": "single_choice",
    "prompt": "Jak nazywano Palestynę ze względu na miejsca związane z życiem Jezusa Chrystusa?",
    "options": [
      "Ziemią Świętą",
      "Nowym Rzymem",
      "Rzeszą Niemiecką",
      "Cesarstwem Łacińskim",
      "Kalifatem",
      "Marchią"
    ],
    "answer": 0,
    "explanation": "Palestynę nazywano Ziemią Świętą, ponieważ znajdują się tam miejsca ważne dla chrześcijan."
  },
  {
    "id": "R04_WYP_02",
    "section": "Wyprawy krzyżowe",
    "type": "multi_select",
    "prompt": "Zaznacz miasta Ziemi Świętej wymienione jako związane z życiem i działalnością Jezusa.",
    "options": [
      "Jerozolima",
      "Betlejem",
      "Nazaret",
      "Akwizgran",
      "Wormacja",
      "Poitiers"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podręcznik wymienia Jerozolimę, Betlejem i Nazaret jako najważniejsze miejsca związane z życiem Jezusa."
  },
  {
    "id": "R04_WYP_03",
    "section": "Wyprawy krzyżowe",
    "type": "fill_in",
    "prompt": "Papież __________ w 1095 roku wezwał chrześcijan do wyprawy w celu odbicia __________.",
    "options": null,
    "answer": [
      "Urban II",
      "Ziemi Świętej"
    ],
    "altAnswers": [
      [
        "Urban II",
        "Urbana II"
      ],
      [
        "Ziemi Świętej",
        "Ziemia Święta",
        "Palestyny"
      ]
    ],
    "explanation": "Urban II wezwał do wyzwolenia Ziemi Świętej z rąk Turków."
  },
  {
    "id": "R04_WYP_04",
    "section": "Wyprawy krzyżowe",
    "type": "true_false",
    "prompt": "Nazwa krucjata pochodzi od łacińskiego słowa oznaczającego krzyż.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale wyjaśniono, że nazwa krucjata pochodzi od łacińskiego crux, czyli krzyż."
  },
  {
    "id": "R04_WYP_05",
    "section": "Wyprawy krzyżowe",
    "type": "scenario",
    "prompt": "Rycerz z Francji rusza w 1096 roku na wyprawę, która po trzech latach dociera do Jerozolimy. Po 40 dniach oblężenia miasto zostaje zdobyte. W której wyprawie uczestniczy?",
    "options": [
      "pierwszej krucjacie",
      "czwartej krucjacie",
      "synodzie w Clermont",
      "bitwie pod Poitiers",
      "wielkiej schizmie wschodniej",
      "układzie w Verdun"
    ],
    "answer": 0,
    "explanation": "Pierwsza krucjata wyruszyła w 1096 roku i zakończyła się zdobyciem Jerozolimy po trzech latach."
  },
  {
    "id": "R04_WYP_06",
    "section": "Wyprawy krzyżowe",
    "type": "single_choice",
    "prompt": "Która twierdza była ostatnią twierdzą krzyżowców w Palestynie, zdobytą przez muzułmanów w 1291 roku?",
    "options": [
      "Akka",
      "Canossa",
      "Clermont",
      "Verdun",
      "Akwizgran",
      "Mekka"
    ],
    "answer": 0,
    "explanation": "Ostatnią twierdzą krzyżowców była Akka, zdobyta przez muzułmanów w 1291 roku."
  },
  {
    "id": "R04_WYP_07",
    "section": "Wyprawy krzyżowe",
    "type": "match",
    "prompt": "Połącz zakon rycerski z właściwą informacją.",
    "options": null,
    "left": [
      "Krzyżacy",
      "joannici",
      "templariusze"
    ],
    "right": [
      "Zakon Szpitalników świętego Jana z Jerozolimy",
      "Zakon Szpitala Najświętszej Marii Panny Domu Niemieckiego w Jerozolimie",
      "Zakon Ubogich Rycerzy Chrystusa i Świątyni Salomona"
    ],
    "answer": {
      "Krzyżacy": "Zakon Szpitala Najświętszej Marii Panny Domu Niemieckiego w Jerozolimie",
      "joannici": "Zakon Szpitalników świętego Jana z Jerozolimy",
      "templariusze": "Zakon Ubogich Rycerzy Chrystusa i Świątyni Salomona"
    },
    "explanation": "Rozdział wymienia trzy główne zakony rycerskie oraz ich pełne nazwy.",
    "image": "/img/r04_rycerze_zakonni.jpg"
  },
  {
    "id": "R04_WYP_08",
    "section": "Wyprawy krzyżowe",
    "type": "multi_select",
    "prompt": "Zaznacz zadania zakonów rycerskich w Ziemi Świętej.",
    "options": [
      "prowadzenie szpitali",
      "prowadzenie przytułków dla pielgrzymów",
      "ochrona wiernych w Palestynie",
      "walka z wojskami muzułmańskimi",
      "spisywanie prawa rzymskiego",
      "dzielenie państwa Franków"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zakony rycerskie łączyły życie zakonne z opieką nad pielgrzymami i walką w obronie chrześcijan."
  },
  {
    "id": "R04_WYP_09",
    "section": "Wyprawy krzyżowe",
    "type": "riddle",
    "prompt": "Zakon rycerski nazywany także zakonem maltańskim to...",
    "options": null,
    "answer": "joannici",
    "altAnswers": [
      "joannici",
      "Joannici",
      "zakon joannitów",
      "Zakon joannitów",
      "szpitalnicy"
    ],
    "explanation": "Joannici po klęsce krucjat osiedlili się m.in. na Malcie, dlatego bywają nazywani zakonem maltańskim."
  },
  {
    "id": "R04_WYP_10",
    "section": "Wyprawy krzyżowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: joannici, templariusze, Krzyżacy, Karolingowie.",
    "options": null,
    "answer": "Karolingowie",
    "explanation": "Joannici, templariusze i Krzyżacy byli zakonami rycerskimi, a Karolingowie dynastią władców Franków."
  },
  {
    "id": "R04_WYP_11",
    "section": "Wyprawy krzyżowe",
    "type": "sort",
    "prompt": "Podziel skutki wypraw krzyżowych na pozytywne i negatywne dla Europy według rozdziału.",
    "options": null,
    "items": [
      "poznanie kultury Bliskiego Wschodu",
      "rozwój handlu",
      "nasilenie wrogości między chrześcijanami i muzułmanami",
      "osłabienie Bizancjum",
      "zapożyczenie papieru i cyfr"
    ],
    "categories": [
      "pozytywne",
      "negatywne"
    ],
    "answer": {
      "pozytywne": [
        "poznanie kultury Bliskiego Wschodu",
        "rozwój handlu",
        "zapożyczenie papieru i cyfr"
      ],
      "negatywne": [
        "nasilenie wrogości między chrześcijanami i muzułmanami",
        "osłabienie Bizancjum"
      ]
    },
    "explanation": "Krucjaty przyniosły wymianę kulturową i rozwój handlu, ale także wrogość oraz osłabienie Bizancjum."
  },
  {
    "id": "R04_WYP_12",
    "section": "Wyprawy krzyżowe",
    "type": "single_choice",
    "prompt": "Jaki zamek w dzisiejszej Syrii był w czasie krucjat siedzibą joannitów i potężną twierdzą?",
    "options": [
      "Krak des Chevaliers",
      "Hagia Sofia",
      "Kaaba",
      "Akwizgran",
      "Canossa",
      "Akka"
    ],
    "answer": 0,
    "explanation": "Krak des Chevaliers był siedzibą joannitów i jedną z najpotężniejszych twierdz średniowiecznych.",
    "image": "/img/r04_krak_des_chevaliers.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile dni trwało oblężenie Konstantynopola przez Turków w 1453 roku?",
    "options": [
      "53 dni",
      "40 dni",
      "50 lat",
      "200 lat",
      "3 dni",
      "900 lat"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że Turcy zdobyli Konstantynopol po 53 dniach oblężenia."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Kopuła Hagia Sophia została wymurowana z __________ i ma ponad __________ metrów średnicy.",
    "options": null,
    "answer": [
      "cegieł",
      "30"
    ],
    "altAnswers": [
      [
        "cegieł",
        "cegły"
      ],
      [
        "30",
        "trzydzieści",
        "30 metrów"
      ]
    ],
    "explanation": "Infografika o Hagia Sophia podaje, że kopuła jest z cegieł i ma ponad 30 metrów średnicy.",
    "image": "/img/r04_hagia_sophia_kopula.jpg"
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Dziecko cesarskie urodzone w komnacie wyłożonej porfirem mogło nosić tytuł Porfirogenety.",
    "options": null,
    "answer": true,
    "explanation": "Ciekawostka w rozdziale wyjaśnia, że Porfirogeneta znaczył „zrodzony w purpurze” i dawał prawo do tronu."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Cesarz, który w 962 roku został koronowany w Rzymie na cesarza rzymskiego, to...",
    "options": null,
    "answer": "Otton I",
    "altAnswers": [
      "Otton I",
      "Otton pierwszy",
      "Ottona I"
    ],
    "explanation": "Otton I opanował Rzym i w 962 roku papież koronował go na cesarza rzymskiego."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz ustalenia konkordatu w Wormacji według rozdziału.",
    "options": [
      "biskupi mieli być wybierani zgodnie z przepisami kościelnymi",
      "wybór biskupów zatwierdzał papież",
      "cesarz zachował prawo nadawania majątku ziemskiego związanego z urzędem",
      "dostojnicy kościelni składali cesarzowi przysięgę wierności",
      "papież miał odtąd mianować królów Franków",
      "zakony rycerskie podporządkowano patriarsze"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Konkordat ograniczał wpływ cesarza na wybór biskupów, ale pozostawiał mu świeckie nadawanie majątku i przysięgę wierności."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zakony rycerskie według dat powstania podanych w rozdziale, od najwcześniejszego.",
    "options": null,
    "items": [
      "templariusze",
      "Krzyżacy",
      "joannici"
    ],
    "answer": [
      "joannici",
      "templariusze",
      "Krzyżacy"
    ],
    "explanation": "Joannici powstali w 1113 roku, templariusze w 1119 roku, a Krzyżacy w 1190 roku.",
    "image": "/img/r04_rycerze_zakonni.jpg"
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Krzyżowcy wyruszają na początku XIII wieku, ale nie docierają do Ziemi Świętej. Za namową Wenecjan atakują Konstantynopol i tworzą na ziemiach Bizancjum Cesarstwo Łacińskie. Która to krucjata?",
    "options": [
      "czwarta krucjata",
      "pierwsza krucjata",
      "trzecia krucjata",
      "siódma krucjata",
      "wyprawa arabska z 732 roku",
      "podróż Mahometa do Medyny"
    ],
    "answer": 0,
    "explanation": "Opis dotyczy czwartej krucjaty, która zamiast do Palestyny skierowała się przeciw Konstantynopolowi."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz osobę z wydarzeniem lub rolą opisaną w rozdziale.",
    "options": null,
    "left": [
      "al-Mansur",
      "al-Ma'mun",
      "Klemens V",
      "Filip IV Piękny"
    ],
    "right": [
      "król Francji, który przejął majątek templariuszy",
      "papież, który rozwiązał zakon templariuszy",
      "kalif proszący o księgi naukowe w tłumaczeniu",
      "kalif wysyłający poselstwa po dzieła greckie"
    ],
    "answer": {
      "al-Mansur": "kalif proszący o księgi naukowe w tłumaczeniu",
      "al-Ma'mun": "kalif wysyłający poselstwa po dzieła greckie",
      "Klemens V": "papież, który rozwiązał zakon templariuszy",
      "Filip IV Piękny": "król Francji, który przejął majątek templariuszy"
    },
    "explanation": "Teksty źródłowe i opowieść o templariuszach podają te mniej oczywiste postacie i ich role."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Cypr, Rodos, Malta, Verdun.",
    "options": null,
    "answer": "Verdun",
    "explanation": "Cypr, Rodos i Malta wiążą się z późniejszymi siedzibami joannitów, a Verdun z podziałem państwa Franków."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki dokument odnaleziony w 2001 roku miał potwierdzać, że templariusze nie odstąpili od wiary chrześcijańskiej?",
    "options": [
      "Pergamin z Chinon",
      "Kodeks Justyniana",
      "List Karola Wielkiego do Leona III",
      "Apel Urbana II",
      "Traktat w Verdun",
      "Konkordat wormacki"
    ],
    "answer": 0,
    "explanation": "W rozdziale o skarbie templariuszy opisano Pergamin z Chinon odnaleziony w Tajnym Archiwum Watykanu."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Początki średniowiecza",
  icon: "🏰",
  sectionOrder: [
  "Bizancjum",
  "Arabowie i początki islamu",
  "Nowe państwa w Europie",
  "Konflikt papiestwa z cesarstwem",
  "Wyprawy krzyżowe",
  "Super trudne"
],
  sectionIcons: {
  "Bizancjum": "🏛️",
  "Arabowie i początki islamu": "🌙",
  "Nowe państwa w Europie": "👑",
  "Konflikt papiestwa z cesarstwem": "⚔️",
  "Wyprawy krzyżowe": "🛡️",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
