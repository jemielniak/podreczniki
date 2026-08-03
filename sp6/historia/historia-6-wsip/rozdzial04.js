// Skróty sekcji (do identyfikatorów ćwiczeń):
//   OSW  = Kultura oświecenia
//   ABO  = Absolutyzm oświecony
//   USA  = Powstanie Stanów Zjednoczonych
//   REW  = Wielka Rewolucja Francuska
//   REP  = Francja republiką
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_OSW_01",
    "section": "Kultura oświecenia",
    "type": "single_choice",
    "prompt": "Jak nazywano kulturę XVIII stulecia w Europie?",
    "options": [
      "epoką oświecenia",
      "średniowieczem",
      "renesansem",
      "romantyzmem",
      "czasem kontrreformacji",
      "okresem wielkich odkryć geograficznych"
    ],
    "answer": 0,
    "explanation": "XVIII wiek nazywano epoką oświecenia lub stuleciem świateł, ponieważ wiązano go z rozwojem rozumu, nauki, oświaty i techniki."
  },
  {
    "id": "R04_OSW_02",
    "section": "Kultura oświecenia",
    "type": "multi_select",
    "prompt": "Zaznacz hasła i wartości kojarzone w rozdziale z oświeceniem.",
    "options": [
      "wiara w potęgę rozumu",
      "postęp",
      "równość ludzi",
      "tolerancja religijna",
      "utrwalenie przywilejów stanowych",
      "władza pochodząca wyłącznie od Boga"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Oświecenie łączono z wiarą w rozum, postęp, równość ludzi i tolerancję religijną. Przywileje stanowe oraz pogląd, że władza pochodzi wyłącznie od Boga, były krytykowane lub ograniczane."
  },
  {
    "id": "R04_OSW_03",
    "section": "Kultura oświecenia",
    "type": "true_false",
    "prompt": "Wielka encyklopedia francuska była wydawana prawie 30 lat i liczyła 35 tomów.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że Wielka encyklopedia francuska powstawała przez prawie 30 lat, była dziełem wielu autorów i liczyła 35 tomów."
  },
  {
    "id": "R04_OSW_04",
    "section": "Kultura oświecenia",
    "type": "fill_in",
    "prompt": "Wielka encyklopedia francuska była przeniknięta wiarą w potęgę ludzkiego __________ i duchem __________.",
    "options": null,
    "answer": [
      "rozumu",
      "racjonalizmu"
    ],
    "altAnswers": [
      [
        "rozumu",
        "rozum"
      ],
      [
        "racjonalizmu",
        "racjonalizm"
      ]
    ],
    "explanation": "Encyklopedyści ufali rozumowi i racjonalizmowi, czyli postawie odwołującej się do rozumowego wyjaśniania świata."
  },
  {
    "id": "R04_OSW_05",
    "section": "Kultura oświecenia",
    "type": "riddle",
    "prompt": "Francuski filozof, współautor Wielkiej encyklopedii francuskiej, który przeciwstawiał średniowieczu postęp XVIII stulecia, to...",
    "options": null,
    "answer": "Wolter",
    "altAnswers": [
      "Wolter",
      "Voltaire"
    ],
    "image": "r04_wolter_przy_pracy.jpg",
    "explanation": "Wolter należał do najpopularniejszych filozofów oświecenia i był jednym ze współautorów Wielkiej encyklopedii francuskiej."
  },
  {
    "id": "R04_OSW_06",
    "section": "Kultura oświecenia",
    "type": "match",
    "prompt": "Połącz filozofa z poglądem lub koncepcją.",
    "options": null,
    "left": [
      "Wolter",
      "Karol Ludwik Monteskiusz",
      "Jean-Jacques Rousseau"
    ],
    "right": [
      "wiara w postęp XVIII wieku",
      "trójpodział władz",
      "prawo ludu do wyboru ustroju"
    ],
    "answer": {
      "Wolter": "wiara w postęp XVIII wieku",
      "Karol Ludwik Monteskiusz": "trójpodział władz",
      "Jean-Jacques Rousseau": "prawo ludu do wyboru ustroju"
    },
    "explanation": "Wolter kojarzony jest w rozdziale z wiarą w postęp, Monteskiusz z trójpodziałem władz, a Rousseau z prawem ludu do wyboru ustroju i sympatią do republiki."
  },
  {
    "id": "R04_OSW_07",
    "section": "Kultura oświecenia",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do władz w koncepcji Monteskiusza.",
    "options": null,
    "items": [
      "parlament",
      "król i ministrowie",
      "niezależne sądy"
    ],
    "categories": [
      "ustawodawcza",
      "wykonawcza",
      "sądownicza"
    ],
    "answer": {
      "ustawodawcza": [
        "parlament"
      ],
      "wykonawcza": [
        "król i ministrowie"
      ],
      "sądownicza": [
        "niezależne sądy"
      ]
    },
    "image": "r04_trojpodzial_wladz.jpg",
    "explanation": "Monteskiusz wyróżnił władzę ustawodawczą, wykonawczą i sądowniczą. W modelu brytyjskim odpowiadały im parlament, król z ministrami oraz niezależne sądy."
  },
  {
    "id": "R04_OSW_08",
    "section": "Kultura oświecenia",
    "type": "scenario",
    "prompt": "Pruski regulamin szkolny z 1763 roku nakazuje regularne uczęszczanie do szkoły dzieciom najpóźniej od piątego roku życia do trzynastego lub czternastego. Jaką zmianę w epoce oświecenia pokazuje ta sytuacja?",
    "options": [
      "rozwój szkolnictwa i obowiązku nauki",
      "likwidację szkół podstawowych",
      "zakaz nauki dziewcząt w domu",
      "powrót do wyłącznie rycerskiego wychowania",
      "rezygnację z nauki czytania i pisania"
    ],
    "answer": 0,
    "explanation": "W oświeceniu rozwijało się szkolnictwo. W Prusach najdalej posunięto obowiązek posyłania do szkoły chłopców i dziewcząt."
  },
  {
    "id": "R04_OSW_09",
    "section": "Kultura oświecenia",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do oświeceniowych pojęć: rozum, postęp, tolerancja, przywilej stanowy.",
    "options": null,
    "answer": "przywilej stanowy",
    "explanation": "Przywilej stanowy nie pasuje do haseł oświecenia, ponieważ encyklopedyści podkreślali równość ludzi i prawa obywateli."
  },
  {
    "id": "R04_OSW_10",
    "section": "Kultura oświecenia",
    "type": "single_choice",
    "prompt": "Od nazwiska którego konstruktora pochodzi nazwa jednostki mocy - wat?",
    "options": [
      "James Watt",
      "Benjamin Franklin",
      "Gabriel Fahrenheit",
      "Thomas Newcomen",
      "Alessandro Volta",
      "bracia Montgolfier"
    ],
    "answer": 0,
    "image": "r04_maszyna_parowa_watta.jpg",
    "explanation": "James Watt był jednym z konstruktorów maszyny parowej. Od jego nazwiska pochodzi nazwa jednostki mocy - wat."
  },
  {
    "id": "R04_OSW_11",
    "section": "Kultura oświecenia",
    "type": "sequence",
    "prompt": "Ułóż wynalazki i wydarzenia techniczne XVIII wieku w kolejności chronologicznej.",
    "options": null,
    "items": [
      "pierwszy lot balonem braci Montgolfier",
      "siewnik",
      "pierwsza bateria",
      "piorunochron",
      "udoskonalony silnik parowy"
    ],
    "answer": [
      "siewnik",
      "piorunochron",
      "udoskonalony silnik parowy",
      "pierwszy lot balonem braci Montgolfier",
      "pierwsza bateria"
    ],
    "explanation": "Tabela w rozdziale podaje kolejno: siewnik w 1701 roku, piorunochron w 1752 roku, udoskonalony silnik parowy w 1769 roku, pierwszy lot balonem braci Montgolfier w 1783 roku i pierwszą baterię w 1799 roku."
  },
  {
    "id": "R04_OSW_12",
    "section": "Kultura oświecenia",
    "type": "true_false",
    "prompt": "Rokoko rozwinęło się w pierwszej połowie XVIII wieku, a klasycyzm w drugiej połowie tego stulecia.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wskazuje, że rokoko było stylem pierwszej połowy XVIII wieku, natomiast klasycyzm pojawił się w architekturze, sztuce i muzyce w drugiej połowie wieku."
  },
  {
    "id": "R04_ABO_01",
    "section": "Absolutyzm oświecony",
    "type": "single_choice",
    "prompt": "Jakie miasto stało się stolicą Królestwa Prus utworzonego w 1701 roku?",
    "options": [
      "Berlin",
      "Wiedeń",
      "Petersburg",
      "Moskwa",
      "Paryż",
      "Londyn"
    ],
    "answer": 0,
    "explanation": "W 1701 roku władca Hohenzollernów koronował się na króla Prus, a stolicą nowego państwa został Berlin."
  },
  {
    "id": "R04_ABO_02",
    "section": "Absolutyzm oświecony",
    "type": "true_false",
    "prompt": "Zagraniczni obserwatorzy żartowali, że w Prusach to nie państwo posiada armię, lecz armia ma własne państwo.",
    "options": null,
    "answer": true,
    "explanation": "To powiedzenie podkreślało, jak wielkie znaczenie miała armia dla Prus w XVIII wieku."
  },
  {
    "id": "R04_ABO_03",
    "section": "Absolutyzm oświecony",
    "type": "fill_in",
    "prompt": "Fryderyk II zreformował sądownictwo i prawo oraz wspierał gospodarkę przez zakładanie __________ i kolonizację chłopską.",
    "options": null,
    "answer": [
      "manufaktur"
    ],
    "altAnswers": [
      [
        "manufaktur",
        "manufaktury"
      ]
    ],
    "explanation": "Reformy Fryderyka II obejmowały prawo i sądownictwo, wspieranie manufaktur oraz zakładanie nowych wsi i gospodarstw."
  },
  {
    "id": "R04_ABO_04",
    "section": "Absolutyzm oświecony",
    "type": "multi_select",
    "prompt": "Zaznacz filary państwa pruskiego opisane w rozdziale.",
    "options": [
      "liczna i dobrze wyćwiczona armia",
      "kompetentna administracja",
      "dobrze zorganizowane szkolnictwo",
      "wolna elekcja",
      "słaba władza centralna",
      "brak szkół podstawowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_fryderyk_ii_i_armia.jpg",
    "explanation": "Rozdział nazywa filarami państwa pruskiego liczną i wyćwiczoną armię, kompetentną administrację oraz dobrze zorganizowane szkolnictwo."
  },
  {
    "id": "R04_ABO_05",
    "section": "Absolutyzm oświecony",
    "type": "scenario",
    "prompt": "Władca pisze, że katolicy, luteranie, ewangelicy i żydzi powinni żyć pokojowo obok siebie, bo prześladowania wygnałyby pracowitych poddanych do sąsiadów. Jaką politykę zaleca?",
    "options": [
      "tolerancję religijną",
      "prześladowanie mniejszości",
      "zakaz osiedlania się uchodźców",
      "zniesienie szkolnictwa",
      "oddanie władzy parlamentowi"
    ],
    "answer": 0,
    "explanation": "Fragment testamentu Fryderyka II uzasadnia politykę tolerancji religijnej także interesem państwa."
  },
  {
    "id": "R04_ABO_06",
    "section": "Absolutyzm oświecony",
    "type": "match",
    "prompt": "Połącz państwo z dynastią lub władcą wskazanym w rozdziale.",
    "options": null,
    "left": [
      "Prusy",
      "Austria",
      "Rosja"
    ],
    "right": [
      "Hohenzollernowie i Fryderyk II",
      "Habsburgowie i Józef II",
      "Romanowowie i Piotr I"
    ],
    "answer": {
      "Prusy": "Hohenzollernowie i Fryderyk II",
      "Austria": "Habsburgowie i Józef II",
      "Rosja": "Romanowowie i Piotr I"
    },
    "explanation": "Prusami rządzili Hohenzollernowie z Fryderykiem II, Austrią Habsburgowie z Józefem II, a Rosją Romanowowie z Piotrem I."
  },
  {
    "id": "R04_ABO_07",
    "section": "Absolutyzm oświecony",
    "type": "single_choice",
    "prompt": "Na czym polegała jedna z reform finansowych Józefa II w Austrii?",
    "options": [
      "nałożono podatki na szlachtę i duchowieństwo",
      "zniesiono wszystkie podatki chłopów i mieszczan",
      "wprowadzono dolara jako wspólną walutę",
      "zamknięto urzędy państwowe",
      "oddano finanse parlamentowi brytyjskiemu"
    ],
    "answer": 0,
    "explanation": "Józef II uzdrawiał finanse państwa m.in. przez nałożenie podatków na szlachtę i duchowieństwo, które wcześniej były z nich zwolnione."
  },
  {
    "id": "R04_ABO_08",
    "section": "Absolutyzm oświecony",
    "type": "multi_select",
    "prompt": "Zaznacz reformy Austrii za panowania Józefa II.",
    "options": [
      "zatrudnianie wykształconych urzędników",
      "zniesienie tortur",
      "rozwiązanie większości klasztorów",
      "polityka tolerancji religijnej",
      "przeniesienie stolicy do Petersburga",
      "zburzenie Bastylii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Reformy Józefa II obejmowały zatrudnianie wykształconych urzędników, reformę prawa, ograniczenie pozycji Kościoła, rozwój szkolnictwa i tolerancję religijną."
  },
  {
    "id": "R04_ABO_09",
    "section": "Absolutyzm oświecony",
    "type": "riddle",
    "prompt": "Car z dynastii Romanowów, który rozpoczął reformy upodabniające Rosję do państw zachodnich, to...",
    "options": null,
    "answer": "Piotr I",
    "altAnswers": [
      "Piotr I",
      "Piotr Wielki",
      "Piotr I Wielki",
      "Piotr Romanow"
    ],
    "image": "r04_piotr_i_brody.jpg",
    "explanation": "Piotr I Wielki podróżował po Europie Zachodniej, a następnie rozpoczął reformy obyczajów, gospodarki, administracji i armii."
  },
  {
    "id": "R04_ABO_10",
    "section": "Absolutyzm oświecony",
    "type": "sort",
    "prompt": "Przyporządkuj reformy lub skutki do państw.",
    "options": null,
    "items": [
      "obowiązkowe szkoły podstawowe",
      "zdobycie Śląska",
      "podatki dla szlachty i duchowieństwa",
      "zniesienie tortur",
      "nakaz golenia bród",
      "stolica w Petersburgu"
    ],
    "categories": [
      "Prusy",
      "Austria",
      "Rosja"
    ],
    "answer": {
      "Prusy": [
        "obowiązkowe szkoły podstawowe",
        "zdobycie Śląska"
      ],
      "Austria": [
        "podatki dla szlachty i duchowieństwa",
        "zniesienie tortur"
      ],
      "Rosja": [
        "nakaz golenia bród",
        "stolica w Petersburgu"
      ]
    },
    "explanation": "Prusy modernizowano przez armię, szkoły i administrację, Austria reformowała prawo i podatki, a Rosja Piotra I zmieniała obyczaje i stolicę."
  },
  {
    "id": "R04_ABO_11",
    "section": "Absolutyzm oświecony",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Petersburgiem w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Piotr I został pochowany w soborze po śmierci",
      "Petersburg został stolicą Rosji",
      "rozpoczęto budowę Admiralicji",
      "rozpoczęto budowę Twierdzy Pietropawłowskiej",
      "budowano Pałac Zimowy"
    ],
    "answer": [
      "rozpoczęto budowę Twierdzy Pietropawłowskiej",
      "rozpoczęto budowę Admiralicji",
      "Petersburg został stolicą Rosji",
      "Piotr I został pochowany w soborze po śmierci",
      "budowano Pałac Zimowy"
    ],
    "image": "r04_petersburg_piotra.jpg",
    "explanation": "Opis Petersburga podaje, że Twierdzę Pietropawłowską zaczęto wznosić w 1703 roku, Admiralicję w 1704 roku, stolicą miasto zostało w 1712 roku, Piotr I zmarł w 1725 roku, a Pałac Zimowy budowano w latach 1755-1762."
  },
  {
    "id": "R04_ABO_12",
    "section": "Absolutyzm oświecony",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do reform lub sukcesów Piotra I: golenie bród, przeniesienie stolicy do Petersburga, obowiązkowy pobór do wojska, Deklaracja niepodległości.",
    "options": null,
    "answer": "Deklaracja niepodległości",
    "explanation": "Deklaracja niepodległości dotyczy Stanów Zjednoczonych, a pozostałe elementy wiążą się z reformami lub polityką Piotra I w Rosji."
  },
  {
    "id": "R04_USA_01",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "single_choice",
    "prompt": "Ile kolonii brytyjskich powstało na wschodnim wybrzeżu Ameryki Północnej?",
    "options": [
      "13",
      "3",
      "7",
      "10",
      "18",
      "35"
    ],
    "answer": 0,
    "explanation": "W rozdziale podano, że w ciągu XVII wieku i w pierwszej połowie XVIII wieku powstało 13 kolonii brytyjskich."
  },
  {
    "id": "R04_USA_02",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "fill_in",
    "prompt": "W 1620 roku do brzegów Ameryki Północnej przybił statek __________ z grupą angielskich pielgrzymów.",
    "options": null,
    "answer": [
      "Mayflower"
    ],
    "altAnswers": [
      [
        "Mayflower",
        "mejflauer"
      ]
    ],
    "image": "r04_mayflower_pielgrzymi.jpg",
    "explanation": "Mayflower przywiózł około 100 kolonistów angielskich szukających wolności religijnej."
  },
  {
    "id": "R04_USA_03",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "true_false",
    "prompt": "Na południu kolonii brytyjskich dominowały plantacje bawełny i tytoniu wykorzystujące pracę czarnych niewolników sprowadzanych z Afryki.",
    "options": null,
    "answer": true,
    "explanation": "Południe kolonii opierało się na dużych plantacjach, natomiast na północy przeważały mniejsze farmy prowadzone przez białych osadników."
  },
  {
    "id": "R04_USA_04",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny konfliktu trzynastu kolonii z Wielką Brytanią opisane w rozdziale.",
    "options": [
      "brak przedstawicieli kolonii w brytyjskim Parlamencie",
      "wysokie cła na towary sprowadzane do kolonii",
      "zamknięcie portu w Bostonie po herbatce bostońskiej",
      "zakaz obchodzenia Święta Dziękczynienia",
      "spór z Austrią o Śląsk",
      "zwołanie Stanów Generalnych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Koloniści byli niezadowoleni, bo decyzje podejmował Parlament w Londynie bez ich przedstawicieli, a wysokie cła podnosiły ceny towarów. Po herbatce bostońskiej zamknięto port w Bostonie."
  },
  {
    "id": "R04_USA_05",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "single_choice",
    "prompt": "W którym roku doszło do tzw. herbatki bostońskiej?",
    "options": [
      "1773",
      "1620",
      "1776",
      "1783",
      "1787",
      "1792"
    ],
    "answer": 0,
    "explanation": "Herbatka bostońska wydarzyła się w 1773 roku w porcie w Bostonie."
  },
  {
    "id": "R04_USA_06",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "scenario",
    "prompt": "Sześćdziesięciu białych kolonistów przebranych za Indian wtargnęło na statki w Bostonie i wyrzuciło do morza ładunek herbaty obłożonej wysokim cłem. Jak nazywa się to wydarzenie?",
    "options": [
      "herbatka bostońska",
      "przysięga w sali do gry w piłkę",
      "zdobycie Bastylii",
      "bitwa o Śląsk",
      "wyprawa Mayflower"
    ],
    "answer": 0,
    "image": "r04_herbatka_bostonska.jpg",
    "explanation": "Wydarzenie z 1773 roku przeszło do historii jako tzw. herbatka bostońska i zaostrzyło konflikt z Wielką Brytanią."
  },
  {
    "id": "R04_USA_07",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "riddle",
    "prompt": "Dokument uchwalony przez Kongres Kontynentalny w lipcu 1776 roku ogłaszający pełną niezależność trzynastu kolonii to...",
    "options": null,
    "answer": "Deklaracja niepodległości",
    "altAnswers": [
      "Deklaracja niepodległości",
      "Deklaracja niepodległości Stanów Zjednoczonych"
    ],
    "image": "r04_deklaracja_niepodleglosci.jpg",
    "explanation": "Deklaracja niepodległości Stanów Zjednoczonych ogłaszała pełną niezależność kolonii, nazywanych odtąd stanami."
  },
  {
    "id": "R04_USA_08",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "match",
    "prompt": "Połącz postać z rolą opisaną w rozdziale.",
    "options": null,
    "left": [
      "Benjamin Franklin",
      "Jerzy Waszyngton",
      "Tadeusz Kościuszko",
      "Kazimierz Pułaski"
    ],
    "right": [
      "współautor Deklaracji i wynalazca",
      "głównodowodzący i pierwszy prezydent",
      "inżynier umocnień wojskowych",
      "polski ochotnik upamiętniany Dniem Pamięci"
    ],
    "answer": {
      "Benjamin Franklin": "współautor Deklaracji i wynalazca",
      "Jerzy Waszyngton": "głównodowodzący i pierwszy prezydent",
      "Tadeusz Kościuszko": "inżynier umocnień wojskowych",
      "Kazimierz Pułaski": "polski ochotnik upamiętniany Dniem Pamięci"
    },
    "image": "r04_kosciuszko_pulaski.jpg",
    "explanation": "Franklin był współautorem Deklaracji i wynalazcą, Waszyngton dowodził armią i został pierwszym prezydentem, Kościuszko wsławił się jako inżynier umocnień, a Pułaski jako ochotnik i generał upamiętniany w USA."
  },
  {
    "id": "R04_USA_09",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z dziejów powstania USA w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Konstytucja Stanów Zjednoczonych",
      "przybycie Mayflower",
      "herbatka bostońska",
      "uznanie niepodległości USA",
      "Deklaracja niepodległości"
    ],
    "answer": [
      "przybycie Mayflower",
      "herbatka bostońska",
      "Deklaracja niepodległości",
      "uznanie niepodległości USA",
      "Konstytucja Stanów Zjednoczonych"
    ],
    "explanation": "Kolejność wydarzeń to: Mayflower w 1620 roku, herbatka bostońska w 1773 roku, Deklaracja niepodległości w 1776 roku, uznanie niepodległości przez Wielką Brytanię w 1783 roku i Konstytucja USA w 1787 roku."
  },
  {
    "id": "R04_USA_10",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "sort",
    "prompt": "Przyporządkuj sprawy do poziomu władzy w federacji amerykańskiej.",
    "options": null,
    "items": [
      "polityka zagraniczna",
      "armia",
      "wspólny pieniądz",
      "interpretacja prawa",
      "policja",
      "szkolnictwo"
    ],
    "categories": [
      "rząd federalny",
      "stany"
    ],
    "answer": {
      "rząd federalny": [
        "polityka zagraniczna",
        "armia",
        "wspólny pieniądz",
        "interpretacja prawa"
      ],
      "stany": [
        "policja",
        "szkolnictwo"
      ]
    },
    "explanation": "Konstytucja powierzała rządowi federalnemu politykę zagraniczną, armię, wspólny pieniądz i interpretację prawa. Policję oraz szkolnictwo pozostawiono stanom."
  },
  {
    "id": "R04_USA_11",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "true_false",
    "prompt": "Konstytucja Stanów Zjednoczonych od razu przyznała prawa obywatelskie białym mężczyznom, kobietom, Indianom i czarnoskórym niewolnikom.",
    "options": null,
    "answer": false,
    "explanation": "W rzeczywistości prawa obywatelskie przysługiwały tylko białym mężczyznom, a konstytucja nie zniosła niewolnictwa i nie przyznała praw Indianom."
  },
  {
    "id": "R04_USA_12",
    "section": "Powstanie Stanów Zjednoczonych",
    "type": "single_choice",
    "prompt": "Która instytucja w trójpodziale władz Stanów Zjednoczonych interpretowała prawo?",
    "options": [
      "Sąd Najwyższy",
      "Kongres",
      "Prezydent",
      "Kongres Kontynentalny",
      "Parlament brytyjski",
      "Legislatywa francuska"
    ],
    "answer": 0,
    "explanation": "Władza sądownicza w USA należała do Sądu Najwyższego, który miał interpretować prawo i przywracać równowagę między władzami."
  },
  {
    "id": "R04_REW_01",
    "section": "Wielka Rewolucja Francuska",
    "type": "single_choice",
    "prompt": "Za panowania którego króla pogorszyła się sytuacja Francji w drugiej połowie XVIII wieku?",
    "options": [
      "Ludwika XVI",
      "Fryderyka II",
      "Józefa II",
      "Piotra I",
      "Jerzego Waszyngtona",
      "Benjamina Franklina"
    ],
    "answer": 0,
    "explanation": "Rozdział wskazuje na rządy Ludwika XVI z dynastii Burbonów w latach 1774-1792."
  },
  {
    "id": "R04_REW_02",
    "section": "Wielka Rewolucja Francuska",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny wybuchu Wielkiej Rewolucji Francuskiej wymienione w rozdziale.",
    "options": [
      "kosztowne wojny i zadłużenie państwa",
      "próby nakładania nowych podatków",
      "uprzywilejowanie duchowieństwa i szlachty",
      "klęska głodu i wysokie ceny żywności",
      "idee równości i przykład rewolucji amerykańskiej",
      "zdobycie Śląska przez Prusy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do przyczyn należały: kryzys gospodarczy, zadłużenie państwa, nowe podatki, nierówność stanowa, głód i wpływ idei oświecenia oraz rewolucji amerykańskiej."
  },
  {
    "id": "R04_REW_03",
    "section": "Wielka Rewolucja Francuska",
    "type": "riddle",
    "prompt": "Dwa uprzywilejowane stany zwolnione tradycyjnie z podatków we Francji to...",
    "options": null,
    "answer": "duchowieństwo i szlachta",
    "altAnswers": [
      "duchowieństwo i szlachta",
      "szlachta i duchowieństwo"
    ],
    "explanation": "Duchowieństwo i szlachta stanowiły niespełna 2% społeczeństwa, ale były zwolnione z podatków."
  },
  {
    "id": "R04_REW_04",
    "section": "Wielka Rewolucja Francuska",
    "type": "true_false",
    "prompt": "Stan trzeci obejmował m.in. chłopów i mieszczan, w tym rzemieślników, robotników manufaktur, urzędników, lekarzy, prawników i dziennikarzy.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział definiuje stan trzeci jako najliczniejsze warstwy społeczeństwa: chłopów i różne grupy mieszczaństwa."
  },
  {
    "id": "R04_REW_05",
    "section": "Wielka Rewolucja Francuska",
    "type": "scenario",
    "prompt": "Przedstawiciele stanu trzeciego uznali się za jedyne przedstawicielstwo narodu, przenieśli obrady do Paryża i rozpoczęli prace nad konstytucją. Jak nazwali swoje zgromadzenie?",
    "options": [
      "Zgromadzenie Narodowe",
      "Kongres Kontynentalny",
      "Trybunał Rewolucyjny",
      "Legislatywa",
      "Rada Bojarów"
    ],
    "answer": 0,
    "explanation": "Przedstawiciele stanu trzeciego nazwali się Zgromadzeniem Narodowym."
  },
  {
    "id": "R04_REW_06",
    "section": "Wielka Rewolucja Francuska",
    "type": "fill_in",
    "prompt": "Dnia 14 lipca 1789 roku tłum zaatakował __________, dawną twierdzę zamienioną na więzienie.",
    "options": null,
    "answer": [
      "Bastylię"
    ],
    "altAnswers": [
      [
        "Bastylię",
        "Bastylia",
        "Bastylii"
      ]
    ],
    "image": "r04_bastylia_szturm.jpg",
    "explanation": "Zdobycie Bastylii stało się symbolicznym początkiem Wielkiej Rewolucji Francuskiej."
  },
  {
    "id": "R04_REW_07",
    "section": "Wielka Rewolucja Francuska",
    "type": "single_choice",
    "prompt": "Jaki dokument uchwaliło Zgromadzenie Narodowe w sierpniu 1789 roku jako wstęp do przyszłej konstytucji?",
    "options": [
      "Deklarację praw człowieka i obywatela",
      "Deklarację niepodległości Stanów Zjednoczonych",
      "pruską ustawę szkolną",
      "testament Fryderyka II",
      "konstytucję Stanów Zjednoczonych"
    ],
    "answer": 0,
    "image": "r04_deklaracja_praw_czlowieka.jpg",
    "explanation": "Zgromadzenie Narodowe uchwaliło Deklarację praw człowieka i obywatela, która zrywała z podziałem stanowym i absolutyzmem królewskim."
  },
  {
    "id": "R04_REW_08",
    "section": "Wielka Rewolucja Francuska",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do wartości Deklaracji praw człowieka i obywatela: wolność, własność, bezpieczeństwo, przywilej urodzenia.",
    "options": null,
    "answer": "przywilej urodzenia",
    "explanation": "Deklaracja głosiła równość wobec prawa i prawa człowieka, a nie utrzymywanie przywilejów wynikających z urodzenia."
  },
  {
    "id": "R04_REW_09",
    "section": "Wielka Rewolucja Francuska",
    "type": "match",
    "prompt": "Połącz władzę w konstytucji francuskiej z 1791 roku z jej przedstawicielem.",
    "options": null,
    "left": [
      "władza wykonawcza",
      "władza ustawodawcza",
      "władza sądownicza"
    ],
    "right": [
      "król i ministrowie",
      "Legislatywa",
      "niezależne sądy"
    ],
    "answer": {
      "władza wykonawcza": "król i ministrowie",
      "władza ustawodawcza": "Legislatywa",
      "władza sądownicza": "niezależne sądy"
    },
    "explanation": "Konstytucja francuska opierała się na trójpodziale władz: król z ministrami sprawował władzę wykonawczą, Legislatywa ustawodawczą, a sądy były niezależne."
  },
  {
    "id": "R04_REW_10",
    "section": "Wielka Rewolucja Francuska",
    "type": "true_false",
    "prompt": "Konstytucja z września 1791 roku wprowadziła we Francji monarchię konstytucyjną.",
    "options": null,
    "answer": true,
    "explanation": "Po uchwaleniu konstytucji król musiał składać przysięgę wierności narodowi i prawom, a Francja stała się monarchią konstytucyjną."
  },
  {
    "id": "R04_REW_11",
    "section": "Wielka Rewolucja Francuska",
    "type": "multi_select",
    "prompt": "Zaznacz grupy, które według rozdziału nie otrzymały prawa wyboru posłów w konstytucyjnej Francji.",
    "options": [
      "kobiety",
      "ludzie nieposiadający własności",
      "mężczyźni z własnością po ukończeniu 25 lat",
      "król i ministrowie",
      "Legislatywa"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Prawo wyboru posłów przysługiwało tylko mężczyznom, którzy ukończyli 25 lat i posiadali własność. Nie miały go kobiety ani ludzie bez własności."
  },
  {
    "id": "R04_REW_12",
    "section": "Wielka Rewolucja Francuska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia Wielkiej Rewolucji Francuskiej w kolejności chronologicznej.",
    "options": null,
    "items": [
      "uchwalenie konstytucji",
      "zdobycie Bastylii",
      "ogłoszenie republiki",
      "zwołanie Stanów Generalnych",
      "Deklaracja praw człowieka i obywatela"
    ],
    "answer": [
      "zwołanie Stanów Generalnych",
      "zdobycie Bastylii",
      "Deklaracja praw człowieka i obywatela",
      "uchwalenie konstytucji",
      "ogłoszenie republiki"
    ],
    "explanation": "Najpierw zwołano Stany Generalne i powstało Zgromadzenie Narodowe, potem 14 lipca 1789 roku zdobyto Bastylię, w sierpniu 1789 roku uchwalono Deklarację praw człowieka i obywatela, we wrześniu 1791 roku konstytucję, a we wrześniu 1792 roku ogłoszono republikę."
  },
  {
    "id": "R04_REP_01",
    "section": "Francja republiką",
    "type": "single_choice",
    "prompt": "Kiedy Francję ogłoszono republiką?",
    "options": [
      "we wrześniu 1792 roku",
      "w lipcu 1789 roku",
      "w sierpniu 1789 roku",
      "we wrześniu 1791 roku",
      "w czerwcu 1794 roku",
      "w 1783 roku"
    ],
    "answer": 0,
    "explanation": "Po uwięzieniu Ludwika XVI i jego rodziny Francję ogłoszono republiką we wrześniu 1792 roku."
  },
  {
    "id": "R04_REP_02",
    "section": "Francja republiką",
    "type": "scenario",
    "prompt": "W komnatach monarchy znaleziono listy świadczące o porozumiewaniu się z wrogami Francji. Króla uwięziono, a kilka miesięcy później skazano na ścięcie. O kim mowa?",
    "options": [
      "Ludwik XVI",
      "Fryderyk II",
      "Józef II",
      "Piotr I",
      "Jerzy Waszyngton"
    ],
    "answer": 0,
    "explanation": "Los Ludwika XVI przypieczętowało odkrycie listów, z których wynikało, że król porozumiewał się z wrogami Francji."
  },
  {
    "id": "R04_REP_03",
    "section": "Francja republiką",
    "type": "multi_select",
    "prompt": "Zaznacz państwa lub siły, które przystąpiły do wojny przeciw rewolucyjnej Francji po egzekucji Ludwika XVI.",
    "options": [
      "Austria",
      "Prusy",
      "Wielka Brytania",
      "Hiszpania",
      "Stany Zjednoczone",
      "trzynaście kolonii"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Po egzekucji króla przeciw Francji wystąpiły m.in. Austria, Prusy, księstwa niemieckie, papiestwo, księstwa włoskie, Portugalia, Hiszpania, Wielka Brytania i Holandia."
  },
  {
    "id": "R04_REP_04",
    "section": "Francja republiką",
    "type": "riddle",
    "prompt": "Radykalni rewolucjoniści, których nazwa pochodziła od byłego klasztoru św. Jakuba, to...",
    "options": null,
    "answer": "jakobini",
    "altAnswers": [
      "jakobini",
      "Jakobini"
    ],
    "explanation": "Jakobini przejęli rządy w 1793 roku i zwalczali terrorem ludzi uznanych za wrogów rewolucji."
  },
  {
    "id": "R04_REP_05",
    "section": "Francja republiką",
    "type": "true_false",
    "prompt": "Jakobini używali terroru wobec tych, których uważali za wrogów rewolucji.",
    "options": null,
    "answer": true,
    "explanation": "W rozdziale podkreślono, że jakobini prowadzili aresztowania i egzekucje, zwłaszcza w czasie Wielkiego Terroru."
  },
  {
    "id": "R04_REP_06",
    "section": "Francja republiką",
    "type": "fill_in",
    "prompt": "Wielki Terror trwał od __________ do __________ 1794 roku.",
    "options": null,
    "answer": [
      "czerwca",
      "lipca"
    ],
    "altAnswers": [
      [
        "czerwca",
        "czerwiec"
      ],
      [
        "lipca",
        "lipiec"
      ]
    ],
    "explanation": "Rozdział podaje, że Wielki Terror trwał dwa miesiące: od czerwca do lipca 1794 roku."
  },
  {
    "id": "R04_REP_07",
    "section": "Francja republiką",
    "type": "single_choice",
    "prompt": "Jak nazywał się specjalny sąd powołany przez jakobinów, który mógł wydawać wyroki śmierci także na całe grupy osób?",
    "options": [
      "Trybunał Rewolucyjny",
      "Kongres Kontynentalny",
      "Zgromadzenie Narodowe",
      "Legislatywa",
      "Sąd Najwyższy"
    ],
    "answer": 0,
    "image": "r04_gilotyna_terror.jpg",
    "explanation": "Specjalny sąd jakobinów nosił nazwę Trybunału Rewolucyjnego."
  },
  {
    "id": "R04_REP_08",
    "section": "Francja republiką",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do działań jakobinów: aresztowania, egzekucje, rewolucyjny kalendarz, obrona przywilejów stanowych.",
    "options": null,
    "answer": "obrona przywilejów stanowych",
    "explanation": "Jakobini walczyli z przeciwnikami rewolucji, zrywali z dawną tradycją i nie bronili przywilejów stanowych."
  },
  {
    "id": "R04_REP_09",
    "section": "Francja republiką",
    "type": "scenario",
    "prompt": "Na karykaturze kat z gilotyną podpisany jako Robespierre stoi wśród wielu gilotyn. Co najlepiej oddaje sens takiej krytyki rewolucji?",
    "options": [
      "terror może zniszczyć społeczeństwo",
      "rewolucja całkowicie zniosła podatki",
      "jakobini przywrócili absolutyzm Burbonów",
      "gilotyna była narzędziem reformy szkolnej",
      "Francja stała się kolonią brytyjską"
    ],
    "answer": 0,
    "explanation": "Karykatury Robespierre'a krytykowały terror jako metodę, która może zwrócić się przeciw całemu społeczeństwu."
  },
  {
    "id": "R04_REP_10",
    "section": "Francja republiką",
    "type": "match",
    "prompt": "Połącz symbol lub instytucję z informacją z rozdziału.",
    "options": null,
    "left": [
      "trójkolorowa flaga",
      "Marsylianka",
      "Luwr jako muzeum",
      "wolność równość braterstwo"
    ],
    "right": [
      "pochodzi z 1789 roku",
      "pieśń armii rewolucyjnej",
      "otwarty w 1793 roku",
      "hasło rewolucji"
    ],
    "answer": {
      "trójkolorowa flaga": "pochodzi z 1789 roku",
      "Marsylianka": "pieśń armii rewolucyjnej",
      "Luwr jako muzeum": "otwarty w 1793 roku",
      "wolność równość braterstwo": "hasło rewolucji"
    },
    "image": "r04_symbole_rewolucji.jpg",
    "explanation": "Trójkolorowa flaga pochodzi z 1789 roku, Marsylianka powstała jako pieśń armii rewolucyjnej, Luwr otwarto w 1793 roku, a hasło wolność-równość-braterstwo pozostało ważnym dziedzictwem rewolucji."
  },
  {
    "id": "R04_REP_11",
    "section": "Francja republiką",
    "type": "true_false",
    "prompt": "W 1794 roku umiarkowane kręgi polityczne obaliły jakobinów, ale Francja pozostała republiką.",
    "options": null,
    "answer": true,
    "explanation": "Po obaleniu jakobinów rządy przejęli przedstawiciele bogatej burżuazji i generałowie rewolucyjnej armii, a Francja nadal była republiką."
  },
  {
    "id": "R04_REP_12",
    "section": "Francja republiką",
    "type": "sort",
    "prompt": "Przyporządkuj argumenty do ocen dziedzictwa Wielkiej Rewolucji Francuskiej.",
    "options": null,
    "items": [
      "terror",
      "represje wobec Kościoła katolickiego",
      "obalenie przywilejów stanowych",
      "przemiana poddanych w obywateli"
    ],
    "categories": [
      "krytycy rewolucji",
      "zwolennicy rewolucji"
    ],
    "answer": {
      "krytycy rewolucji": [
        "terror",
        "represje wobec Kościoła katolickiego"
      ],
      "zwolennicy rewolucji": [
        "obalenie przywilejów stanowych",
        "przemiana poddanych w obywateli"
      ]
    },
    "explanation": "Krytycy wskazywali terror i represje wobec Kościoła, a zwolennicy podkreślali obalenie przywilejów stanowych i przemianę poddanych w obywateli."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile tomów liczyła Wielka encyklopedia francuska?",
    "options": [
      "35",
      "13",
      "18",
      "25",
      "47",
      "100"
    ],
    "answer": 0,
    "explanation": "Wielka encyklopedia francuska, wydawana prawie 30 lat, liczyła 35 tomów."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Miasto, w którym działała pierwsza w Europie fabryka porcelany wspomniana przy talerzu z motywem rocaille, to...",
    "options": null,
    "answer": "Miśnia",
    "altAnswers": [
      "Miśnia",
      "Misnia",
      "Miśni"
    ],
    "image": "r04_misnia_porcelana.jpg",
    "explanation": "Opis talerza z motywem rocaille wskazuje Królewsko-Polską i Elektorsko-Saską Manufakturę Porcelany w Miśni."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W konstytucyjnej Francji władza ustawodawcza była nazywana __________.",
    "options": null,
    "answer": [
      "Legislatywą"
    ],
    "altAnswers": [
      [
        "Legislatywą",
        "Legislatywa"
      ]
    ],
    "explanation": "Konstytucja z 1791 roku powierzała władzę ustawodawczą Legislatywie."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawa człowieka wymienione w artykule 2 Deklaracji praw człowieka i obywatela.",
    "options": [
      "wolność",
      "własność",
      "bezpieczeństwo",
      "opór przeciwko uciskowi",
      "dziedziczny przywilej",
      "władza z łaski monarchy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Artykuł 2 Deklaracji wymieniał wolność, własność, bezpieczeństwo i opór przeciwko uciskowi."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wynalazek z rokiem podanym w tabeli.",
    "options": null,
    "left": [
      "piorunochron",
      "woda gazowana",
      "udoskonalony silnik parowy",
      "pierwsza bateria"
    ],
    "right": [
      "1752",
      "1767",
      "1769",
      "1799"
    ],
    "answer": {
      "piorunochron": "1752",
      "woda gazowana": "1767",
      "udoskonalony silnik parowy": "1769",
      "pierwsza bateria": "1799"
    },
    "explanation": "Tabela wynalazków podaje: piorunochron w 1752 roku, wodę gazowaną w 1767 roku, udoskonalony silnik parowy w 1769 roku i pierwszą baterię w 1799 roku."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z lat 1791-1794 w kolejności chronologicznej.",
    "options": null,
    "items": [
      "terror jakobinów",
      "ogłoszenie republiki",
      "obalenie jakobinów",
      "uchwalenie konstytucji"
    ],
    "answer": [
      "uchwalenie konstytucji",
      "ogłoszenie republiki",
      "terror jakobinów",
      "obalenie jakobinów"
    ],
    "explanation": "W 1791 roku uchwalono konstytucję, w 1792 roku Francja stała się republiką, w latach 1793-1794 trwał terror jakobinów, a w 1794 roku obalono rządy jakobinów."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Rewolucyjny kalendarz francuski zrywał z liczeniem lat od narodzenia Chrystusa i za rok pierwszy przyjmował ustanowienie republiki.",
    "options": null,
    "answer": true,
    "explanation": "Nowy kalendarz miał zerwać z dawną tradycją i podporządkować życie publiczne ideałom rewolucji."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Od którego roku Petersburg był stolicą Cesarstwa Rosyjskiego?",
    "options": [
      "1712",
      "1701",
      "1703",
      "1725",
      "1755",
      "1792"
    ],
    "answer": 0,
    "explanation": "Opis Petersburga podaje, że był stolicą Cesarstwa Rosyjskiego od 1712 roku aż do upadku cesarstwa w 1917 roku."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż postać niepasującą do wojny o niepodległość USA: Benjamin Franklin, Jerzy Waszyngton, Tadeusz Kościuszko, Józef II.",
    "options": null,
    "answer": "Józef II",
    "explanation": "Józef II był cesarzem z dynastii Habsburgów i reformatorem Austrii, a pozostałe osoby rozdział wiąże z amerykańską niepodległością."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj grupy do sytuacji prawnej w początkowych Stanach Zjednoczonych według rozdziału.",
    "options": null,
    "items": [
      "biali mężczyźni",
      "czarnoskórzy niewolnicy",
      "Indianie",
      "kobiety"
    ],
    "categories": [
      "miały prawa obywatelskie",
      "nie miały praw obywatelskich"
    ],
    "answer": {
      "miały prawa obywatelskie": [
        "biali mężczyźni"
      ],
      "nie miały praw obywatelskich": [
        "czarnoskórzy niewolnicy",
        "Indianie",
        "kobiety"
      ]
    },
    "explanation": "Konstytucja amerykańska przyznawała prawa obywatelskie tylko białym mężczyznom; nie zniosła niewolnictwa i nie dawała praw Indianom."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Francuski arystokrata i prawnik podczas pobytu w Wielkiej Brytanii obserwował monarchię parlamentarną, a w dziele O duchu praw opisał trójpodział władz. Kto to był?",
    "options": [
      "Karol Ludwik Monteskiusz",
      "Jean-Jacques Rousseau",
      "Wolter",
      "Fryderyk II",
      "Ludwik XVI"
    ],
    "answer": 0,
    "explanation": "Karol Ludwik Monteskiusz opisał trójpodział władz i krytykował skupienie władzy w jednym ręku."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po wojnie ze Szwecją Rosja zdobyła większość __________ i uzyskała dostęp do Bałtyku nazywany __________.",
    "options": null,
    "answer": [
      "Inflant",
      "oknem na Zachód"
    ],
    "altAnswers": [
      [
        "Inflant",
        "Inflanty"
      ],
      [
        "oknem na Zachód",
        "okno na Zachód"
      ]
    ],
    "explanation": "Zwycięstwo nad Szwecją dało Rosji większość Inflant oraz dostęp do niezamarzających portów Bałtyku, czyli okno na Zachód."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Europa i świat w XVIII wieku",
  icon: "🌍",
  sectionOrder: [
  "Kultura oświecenia",
  "Absolutyzm oświecony",
  "Powstanie Stanów Zjednoczonych",
  "Wielka Rewolucja Francuska",
  "Francja republiką"
],
  sectionIcons: {
  "Kultura oświecenia": "💡",
  "Absolutyzm oświecony": "👑",
  "Powstanie Stanów Zjednoczonych": "🗽",
  "Wielka Rewolucja Francuska": "⚖️",
  "Francja republiką": "🏛️"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
