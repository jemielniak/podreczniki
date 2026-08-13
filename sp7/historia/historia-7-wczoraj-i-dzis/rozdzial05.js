// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SWI  = Świat przed wojną
//   FRO  = Fronty Wielkiej Wojny
//   NBR  = Nowe rodzaje broni
//   ROS  = Rewolucje w Rosji
//   POL  = Sprawa polska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R05_SWI_01",
    section: "Świat przed wojną",
    type: "single_choice",
    prompt: "Które państwo po zjednoczeniu szybko stało się europejską i światową potęgą gospodarczą?",
    options: ["Niemcy", "Serbia", "Belgia", "Rumunia", "Portugalia", "Czarnogóra"],
    answer: 0,
    explanation: "Po zjednoczeniu Niemcy szybko rozwinęły gospodarkę i zaczęły szukać nowych źródeł surowców oraz rynków zbytu."
  },
  {
    id: "R05_SWI_02",
    section: "Świat przed wojną",
    type: "multi_select",
    prompt: "Zaznacz państwa, które na przełomie XIX i XX w. dołączyły do grona światowych mocarstw.",
    options: ["Niemcy", "Stany Zjednoczone", "Japonia", "Serbia", "Czarnogóra", "Bułgaria"],
    answer: [0, 1, 2],
    explanation: "Rozdział wskazuje Niemcy, Stany Zjednoczone i Japonię jako państwa, które zyskały wtedy duże znaczenie międzynarodowe."
  },
  {
    id: "R05_SWI_03",
    section: "Świat przed wojną",
    type: "true_false",
    prompt: "Konflikt francusko-niemiecki wiązał się między innymi z ziemiami utraconymi przez Francję w 1871 r.",
    options: null,
    answer: true,
    explanation: "Francja dążyła do odzyskania ziem utraconych w 1871 r. oraz do zmazania hańby po szybkiej kapitulacji w wojnie z Prusami."
  },
  {
    id: "R05_SWI_04",
    section: "Świat przed wojną",
    type: "match",
    prompt: "Połącz sojusz z państwami, które go tworzyły.",
    options: null,
    left: ["Trójprzymierze", "Trójporozumienie"],
    right: ["Niemcy, Austro-Węgry i Włochy", "Wielka Brytania, Francja i Rosja"],
    answer: {
      "Trójprzymierze": "Niemcy, Austro-Węgry i Włochy",
      "Trójporozumienie": "Wielka Brytania, Francja i Rosja"
    },
    explanation: "Trójprzymierze powstało w 1882 r., a trójporozumienie, czyli ententa, ukształtowało się do 1907 r."
  },
  {
    id: "R05_SWI_05",
    section: "Świat przed wojną",
    type: "fill_in",
    prompt: "Trójprzymierze zawarto w roku __________, a trójporozumienie ukształtowało się ostatecznie w roku __________.",
    options: null,
    answer: ["1882", "1907"],
    altAnswers: [
      ["1882", "1882 r."],
      ["1907", "1907 r."]
    ],
    explanation: "Trójprzymierze zawarły Niemcy, Austro-Węgry i Włochy w 1882 r.; trójporozumienie powstało po układzie Rosji z Wielką Brytanią w 1907 r."
  },
  {
    id: "R05_SWI_06",
    section: "Świat przed wojną",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Niemcy, Austro-Węgry, Włochy, Rosja.",
    options: null,
    answer: "Rosja",
    explanation: "Niemcy, Austro-Węgry i Włochy tworzyły trójprzymierze; Rosja należała do trójporozumienia."
  },
  {
    id: "R05_SWI_07",
    section: "Świat przed wojną",
    type: "sort",
    prompt: "Przyporządkuj państwa do bloków polityczno-wojskowych sprzed wojny.",
    options: null,
    items: ["Niemcy", "Włochy", "Francja", "Rosja", "Austro-Węgry", "Wielka Brytania"],
    categories: ["trójprzymierze", "trójporozumienie"],
    answer: {
      "trójprzymierze": ["Niemcy", "Włochy", "Austro-Węgry"],
      "trójporozumienie": ["Francja", "Rosja", "Wielka Brytania"]
    },
    explanation: "Dwa bloki podzieliły Europę na państwa centralne i ententę."
  },
  {
    id: "R05_SWI_08",
    section: "Świat przed wojną",
    type: "single_choice",
    prompt: "Który nowy typ okrętu wprowadziła Wielka Brytania w odpowiedzi na rozbudowę floty niemieckiej?",
    options: ["Drednot", "Ułan", "Sterowiec", "Transporter", "Szwadron", "Korpus"],
    answer: 0,
    image: "r05_nowoczesna_flota.jpg",
    explanation: "Brytyjczycy wprowadzili drednot, okręt większy, szybszy i silniej uzbrojony od wcześniejszych jednostek."
  },
  {
    id: "R05_SWI_09",
    section: "Świat przed wojną",
    type: "sequence",
    prompt: "Ułóż wydarzenia w kolejności chronologicznej.",
    options: null,
    items: ["Powstanie trójporozumienia", "Bitwa pod Cuszimą", "Powstanie trójprzymierza", "I wojna bałkańska"],
    answer: ["Powstanie trójprzymierza", "Bitwa pod Cuszimą", "Powstanie trójporozumienia", "I wojna bałkańska"],
    explanation: "Trójprzymierze powstało w 1882 r., bitwa pod Cuszimą rozegrała się w 1905 r., trójporozumienie ukształtowało się w 1907 r., a I wojna bałkańska wybuchła w 1912 r."
  },
  {
    id: "R05_SWI_10",
    section: "Świat przed wojną",
    type: "riddle",
    prompt: "Jak nazywano trójporozumienie od francuskiego określenia entente cordiale?",
    options: null,
    answer: "ententa",
    altAnswers: ["ententa", "Ententa"],
    explanation: "Trójporozumienie nazywano ententą, czyli serdecznym porozumieniem."
  },
  {
    id: "R05_SWI_11",
    section: "Świat przed wojną",
    type: "scenario",
    prompt: "Jesteś dyplomatą obserwującym Bałkany po dwóch wojnach z lat 1912-1913. Widzisz napięcia narodowościowe i religijne oraz rywalizację mocarstw. Jakim określeniem nazwano ten region?",
    options: ["Kocioł bałkański", "Błękitna Armia", "Trójporozumienie", "Wolne Miasto", "Ziemia niczyja", "Konwencja morska"],
    answer: 0,
    image: "r05_kociol_balkanski.jpg",
    explanation: "Bałkany nazwano kotłem bałkańskim, ponieważ były miejscem wielu napięć i zderzania się interesów europejskich mocarstw."
  },
  {
    id: "R05_SWI_12",
    section: "Świat przed wojną",
    type: "multi_select",
    prompt: "Zaznacz przyczyny narastania napięć między mocarstwami przed I wojną światową.",
    options: ["Rywalizacja o kolonie", "Rywalizacja o wpływy na Bałkanach", "Rozbudowa armii i floty", "Wspólna decyzja o pacyfizmie", "Zgoda wszystkich państw na rozbrojenie"],
    answer: [0, 1, 2],
    explanation: "Konflikty kolonialne, spory bałkańskie i wyścig zbrojeń zwiększały ryzyko wojny."
  },
  {
    id: "R05_FRO_01",
    section: "Fronty Wielkiej Wojny",
    type: "single_choice",
    prompt: "Co było bezpośrednią przyczyną wybuchu I wojny światowej?",
    options: ["Zamach w Sarajewie", "Bitwa pod Verdun", "Podpisanie traktatu brzeskiego", "Powstanie ZSRS", "Bitwa pod Cambrai", "Kryzys przysięgowy"],
    answer: 0,
    image: "r05_sarajewo_przejazd.jpg",
    explanation: "Bezpośrednią przyczyną wojny było zabójstwo arcyksięcia Franciszka Ferdynanda Habsburga w Sarajewie 28 czerwca 1914 r."
  },
  {
    id: "R05_FRO_02",
    section: "Fronty Wielkiej Wojny",
    type: "fill_in",
    prompt: "Austro-Węgry wypowiedziały Serbii wojnę __________ 1914 r.",
    options: null,
    answer: ["28 lipca"],
    altAnswers: [
      ["28 lipca", "28 VII", "28 lipca 1914"]
    ],
    explanation: "Po odrzuceniu części warunków ultimatum przez Serbię Austro-Węgry wypowiedziały jej wojnę 28 lipca 1914 r."
  },
  {
    id: "R05_FRO_03",
    section: "Fronty Wielkiej Wojny",
    type: "single_choice",
    prompt: "Jak nazywano niemieckie okręty podwodne atakujące statki ententy?",
    options: ["U-booty", "Drednoty", "Sterowce", "Korpusy", "Szwadrony", "Brygady"],
    answer: 0,
    image: "r05_uboot_atak.jpg",
    explanation: "Niemieckie okręty podwodne nazywano U-bootami. Ich ataki powodowały duże straty cywilnej flocie ententy."
  },
  {
    id: "R05_FRO_04",
    section: "Fronty Wielkiej Wojny",
    type: "true_false",
    prompt: "Po bitwie nad Marną niemiecki plan szybkiego pokonania Francji nie został zrealizowany.",
    options: null,
    answer: true,
    image: "r05_okopy_front_zachodni.jpg",
    explanation: "Natarcie Niemców na Paryż zatrzymano nad Marną we wrześniu 1914 r., a wojna na zachodzie przeszła w działania pozycyjne."
  },
  {
    id: "R05_FRO_05",
    section: "Fronty Wielkiej Wojny",
    type: "sort",
    prompt: "Przyporządkuj cechy do rodzaju działań wojennych.",
    options: null,
    items: ["ciągła linia okopów", "częste przemieszczanie wojsk", "zasieki z drutu kolczastego", "manewry w celu dogodnego ataku"],
    categories: ["wojna pozycyjna", "wojna manewrowa"],
    answer: {
      "wojna pozycyjna": ["ciągła linia okopów", "zasieki z drutu kolczastego"],
      "wojna manewrowa": ["częste przemieszczanie wojsk", "manewry w celu dogodnego ataku"]
    },
    explanation: "Na zachodzie dominowała wojna pozycyjna, a na froncie wschodnim działania nie przyjęły tak stałego charakteru."
  },
  {
    id: "R05_FRO_06",
    section: "Fronty Wielkiej Wojny",
    type: "match",
    prompt: "Połącz bitwę lub wydarzenie z właściwym opisem.",
    options: null,
    left: ["Bitwa nad Marną", "Bitwa pod Tannenbergiem", "Traktat brzeski"],
    right: ["zatrzymanie natarcia Niemców na Paryż", "rozgromienie armii rosyjskiej w Prusach", "pokój Rosji z państwami centralnymi"],
    answer: {
      "Bitwa nad Marną": "zatrzymanie natarcia Niemców na Paryż",
      "Bitwa pod Tannenbergiem": "rozgromienie armii rosyjskiej w Prusach",
      "Traktat brzeski": "pokój Rosji z państwami centralnymi"
    },
    explanation: "Te wydarzenia pokazują różne fronty wojny: zachodni, wschodni i dyplomatyczne zakończenie walk Rosji z państwami centralnymi."
  },
  {
    id: "R05_FRO_07",
    section: "Fronty Wielkiej Wojny",
    type: "sequence",
    prompt: "Ułóż wydarzenia z początku wojny w kolejności chronologicznej.",
    options: null,
    items: ["Bitwa nad Marną", "Zamach w Sarajewie", "Przekroczenie granicy Belgii przez Niemców", "Wypowiedzenie wojny Serbii przez Austro-Węgry"],
    answer: ["Zamach w Sarajewie", "Wypowiedzenie wojny Serbii przez Austro-Węgry", "Przekroczenie granicy Belgii przez Niemców", "Bitwa nad Marną"],
    explanation: "Zamach nastąpił 28 czerwca 1914 r., wojna Austro-Węgier z Serbią zaczęła się 28 lipca, Niemcy uderzyli przez Belgię w nocy z 3 na 4 sierpnia, a bitwa nad Marną rozegrała się we wrześniu."
  },
  {
    id: "R05_FRO_08",
    section: "Fronty Wielkiej Wojny",
    type: "single_choice",
    prompt: "W której bitwie w sierpniu 1914 r. Niemcy okrążyli i rozgromili oddziały rosyjskie w Prusach Wschodnich?",
    options: ["Pod Tannenbergiem", "Pod Verdun", "Pod Gallipoli", "Pod Cambrai", "Pod Amiens", "Pod Rokitną"],
    answer: 0,
    image: "r05_tannenberg_jeniec.jpg",
    explanation: "Bitwa pod Tannenbergiem zakończyła się wielką klęską armii rosyjskiej."
  },
  {
    id: "R05_FRO_09",
    section: "Fronty Wielkiej Wojny",
    type: "riddle",
    prompt: "Jak nazywał się traktat z 3 marca 1918 r., który ustanowił pokój między Rosją i państwami centralnymi?",
    options: null,
    answer: "traktat brzeski",
    altAnswers: ["traktat brzeski", "pokój brzeski", "Traktat brzeski"],
    explanation: "Traktat brzeski podpisano w Brześciu nad Bugiem 3 marca 1918 r."
  },
  {
    id: "R05_FRO_10",
    section: "Fronty Wielkiej Wojny",
    type: "scenario",
    prompt: "Jest listopad 1918 r. Niemieccy żołnierze mają wycofać się na wschodni brzeg Renu po podpisaniu rozejmu pod Paryżem. W jakiej miejscowości podpisano ten rozejm?",
    options: ["Compiegne", "Sarajewo", "Brześć nad Bugiem", "Lozanna", "Kaniow", "Kielce"],
    answer: 0,
    explanation: "Rozejm kończący walki na froncie zachodnim podpisano 11 listopada 1918 r. w Compiegne."
  },
  {
    id: "R05_FRO_11",
    section: "Fronty Wielkiej Wojny",
    type: "multi_select",
    prompt: "Zaznacz czynniki, które osłabiły państwa centralne pod koniec wojny.",
    options: ["Blokada morska", "Przystąpienie USA do wojny", "Protesty społeczne i rewolucje", "Wycofanie Wielkiej Brytanii z wojny", "Rozwiązanie ententy"],
    answer: [0, 1, 2],
    explanation: "Państwa centralne osłabiły blokada, braki surowców, wejście USA do wojny oraz narastające protesty."
  },
  {
    id: "R05_FRO_12",
    section: "Fronty Wielkiej Wojny",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Verdun, Somma, Marna, Kaniow.",
    options: null,
    answer: "Kaniow",
    explanation: "Verdun, Somma i Marna kojarzą się z frontem zachodnim; Kaniow dotyczy walk polskiego II Korpusu z armią niemiecką."
  },
  {
    id: "R05_NBR_01",
    section: "Nowe rodzaje broni",
    type: "single_choice",
    prompt: "Który element wojny pozycyjnej był terenem pomiędzy liniami okopów przeciwników?",
    options: ["Ziemia niczyja", "Kocioł bałkański", "Rada Regencyjna", "Komitet Narodowy", "Korpus Pancerny", "Ententa"],
    answer: 0,
    image: "r05_okopy_front_zachodni.jpg",
    explanation: "Ziemia niczyja oddzielała linie okopów, a atakujący musieli przejść przez nią pod silnym ostrzałem."
  },
  {
    id: "R05_NBR_02",
    section: "Nowe rodzaje broni",
    type: "true_false",
    prompt: "Po bitwie pod Ypres w 1915 r. żołnierzy zaczęto wyposażać w maski przeciwgazowe.",
    options: null,
    answer: true,
    image: "r05_zolnierze_maski.jpg",
    explanation: "Początkowo nie było ochrony przed trującymi gazami, lecz po atakach chemicznych zaczęto stosować maski przeciwgazowe."
  },
  {
    id: "R05_NBR_03",
    section: "Nowe rodzaje broni",
    type: "multi_select",
    prompt: "Zaznacz rozwiązania techniczne wykorzystywane podczas I wojny światowej.",
    options: ["Czołgi", "Samoloty", "Gazy bojowe", "Karabiny maszynowe", "Działa laserowe", "Rakiety kosmiczne"],
    answer: [0, 1, 2, 3],
    explanation: "W rozdziale wymieniono między innymi czołgi, samoloty, gazy bojowe i karabiny maszynowe jako nowoczesne środki walki."
  },
  {
    id: "R05_NBR_04",
    section: "Nowe rodzaje broni",
    type: "match",
    prompt: "Połącz element wojny pozycyjnej z jego funkcją.",
    options: null,
    left: ["Okopy", "Zasieki", "Karabiny maszynowe", "Czołgi"],
    right: ["dawały schronienie żołnierzom", "utrudniały piechocie dojście do pozycji", "wzmacniały obronę okopów", "miały przełamywać linię obrony"],
    answer: {
      "Okopy": "dawały schronienie żołnierzom",
      "Zasieki": "utrudniały piechocie dojście do pozycji",
      "Karabiny maszynowe": "wzmacniały obronę okopów",
      "Czołgi": "miały przełamywać linię obrony"
    },
    explanation: "Rozwój broni wymusił rozbudowę obrony, a następnie szukanie środków do jej przełamania."
  },
  {
    id: "R05_NBR_05",
    section: "Nowe rodzaje broni",
    type: "single_choice",
    prompt: "Jak nazwano pierwszy prototyp brytyjskiego opancerzonego pojazdu gąsienicowego?",
    options: ["Mały Willi", "Aurora", "Hotchkiss", "A7V", "Dreadnought", "Kompania Kadrowa"],
    answer: 0,
    image: "r05_czolg_mark_i.jpg",
    explanation: "Pierwszy prototyp czołgu nazwano Mały Willi. Ważył 18 ton i poruszał się bardzo wolno."
  },
  {
    id: "R05_NBR_06",
    section: "Nowe rodzaje broni",
    type: "fill_in",
    prompt: "Pierwsze czołgi wykorzystali w walce __________ podczas bitwy nad __________ w 1916 r.",
    options: null,
    answer: ["Brytyjczycy", "Sommą"],
    altAnswers: [
      ["Brytyjczycy", "Anglicy"],
      ["Sommą", "rzeką Sommą", "Somma"]
    ],
    explanation: "Brytyjczycy użyli czołgów Mark I podczas bitwy nad Sommą 15 września 1916 r."
  },
  {
    id: "R05_NBR_07",
    section: "Nowe rodzaje broni",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z rozwojem czołgów w kolejności chronologicznej.",
    options: null,
    items: ["Bitwa pod Amiens", "Powołanie Komitetu do spraw Pancerników Lądowych", "Pierwsze użycie Mark I nad Sommą", "Użycie 400 czołgów Mark IV pod Cambrai"],
    answer: ["Powołanie Komitetu do spraw Pancerników Lądowych", "Pierwsze użycie Mark I nad Sommą", "Użycie 400 czołgów Mark IV pod Cambrai", "Bitwa pod Amiens"],
    explanation: "Prace rozpoczęto w 1915 r.; czołgi Mark I użyto w 1916 r., Mark IV pod Cambrai przed przełamaniem pod Amiens w 1918 r."
  },
  {
    id: "R05_NBR_08",
    section: "Nowe rodzaje broni",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: maska przeciwgazowa, stalowy hełm, ręczny granat, Akt 5 listopada.",
    options: null,
    answer: "Akt 5 listopada",
    explanation: "Maska, hełm i granat należą do wyposażenia żołnierzy; Akt 5 listopada był dokumentem politycznym w sprawie polskiej."
  },
  {
    id: "R05_NBR_09",
    section: "Nowe rodzaje broni",
    type: "scenario",
    prompt: "Dowodzisz oddziałem atakującym linię okopów. Potrzebujesz pojazdu, który zmiażdży drut kolczasty, pokona okopy i osłoni piechotę. Który środek walki najlepiej odpowiada temu opisowi?",
    options: ["Czołg", "U-boot", "Drednot", "Gołąb pocztowy", "Telefon", "Sterowiec"],
    answer: 0,
    explanation: "Czołgi projektowano właśnie po to, by przełamywały obronę okopową i osłaniały nacierającą piechotę."
  },
  {
    id: "R05_NBR_10",
    section: "Nowe rodzaje broni",
    type: "riddle",
    prompt: "Jak po angielsku nazwano pierwsze czołgi, aby zmylić niemiecki wywiad?",
    options: null,
    answer: "tank",
    altAnswers: ["tank", "Tank"],
    explanation: "Nową maszynę nazwano tank, czyli zbiornik, ze względu na podobieństwo do zbiorników na wodę i w celu zmylenia wywiadu."
  },
  {
    id: "R05_NBR_11",
    section: "Nowe rodzaje broni",
    type: "sort",
    prompt: "Przyporządkuj elementy do kategorii wyposażenia lub łączności.",
    options: null,
    items: ["stalowy hełm", "maska przeciwgazowa", "telegraf bezprzewodowy", "telefon", "ręczny granat", "radio"],
    categories: ["wyposażenie żołnierza", "łączność"],
    answer: {
      "wyposażenie żołnierza": ["stalowy hełm", "maska przeciwgazowa", "ręczny granat"],
      "łączność": ["telegraf bezprzewodowy", "telefon", "radio"]
    },
    explanation: "W czasie wojny zmieniało się zarówno osobiste wyposażenie żołnierzy, jak i sposoby przekazywania informacji."
  },
  {
    id: "R05_NBR_12",
    section: "Nowe rodzaje broni",
    type: "true_false",
    prompt: "Pierwsze czołgi były szybkie, niezawodne i od razu masowo rozstrzygały bitwy.",
    options: null,
    answer: false,
    explanation: "Pierwsze czołgi były wolne, awaryjne i trudne w obsłudze, choć pokazały możliwości nowego rodzaju broni."
  },
  {
    id: "R05_ROS_01",
    section: "Rewolucje w Rosji",
    type: "single_choice",
    prompt: "Który car został zmuszony do abdykacji podczas rewolucji lutowej?",
    options: ["Mikołaj II", "Aleksander I", "Piotr I", "Wilhelm II", "Karol I", "Franciszek Józef"],
    answer: 0,
    explanation: "Car Mikołaj II abdykował po narastających protestach, strajkach i sprzeciwie części wojska oraz Dumy."
  },
  {
    id: "R05_ROS_02",
    section: "Rewolucje w Rosji",
    type: "true_false",
    prompt: "Rewolucję lutową wywołały między innymi klęski wojenne, kryzys gospodarczy i braki żywności.",
    options: null,
    answer: true,
    image: "r05_rewolucja_piotrograd.jpg",
    explanation: "W Rosji narastały niezadowolenie, głód i kryzys państwa, a porażki na froncie pogłębiały sprzeciw wobec caratu."
  },
  {
    id: "R05_ROS_03",
    section: "Rewolucje w Rosji",
    type: "fill_in",
    prompt: "Rząd Tymczasowy ogłosił obalenie caratu __________ 1917 r.",
    options: null,
    answer: ["15 marca"],
    altAnswers: [
      ["15 marca", "15 III", "15 marca 1917"]
    ],
    explanation: "Rząd Tymczasowy przejął władzę i 15 marca 1917 r. ogłosił obalenie caratu."
  },
  {
    id: "R05_ROS_04",
    section: "Rewolucje w Rosji",
    type: "match",
    prompt: "Połącz rosyjskie ugrupowanie z charakterystyką.",
    options: null,
    left: ["Bolszewicy", "Mienszewicy", "Eserowcy"],
    right: ["dążyli do przejęcia władzy przez zamach zbrojny", "chcieli wprowadzać reformy stopniowo", "Partia Socjalistów-Rewolucjonistów"],
    answer: {
      "Bolszewicy": "dążyli do przejęcia władzy przez zamach zbrojny",
      "Mienszewicy": "chcieli wprowadzać reformy stopniowo",
      "Eserowcy": "Partia Socjalistów-Rewolucjonistów"
    },
    explanation: "Po rewolucji lutowej legalnie działały różne partie socjalistyczne, lecz bolszewicy z czasem zdobywali coraz większe wpływy."
  },
  {
    id: "R05_ROS_05",
    section: "Rewolucje w Rosji",
    type: "single_choice",
    prompt: "Co było sygnałem do rozpoczęcia akcji zbrojnej bolszewików w Piotrogrodzie?",
    options: ["Wystrzał z okrętu Aurora", "Podpisanie Aktu 5 listopada", "Bitwa pod Tannenbergiem", "Rozejm w Compiegne", "Plebiscyt na Warmii", "Przemówienie Wilsona"],
    answer: 0,
    image: "r05_lenin_aurora.jpg",
    explanation: "Sygnałem do walki podczas przewrotu bolszewickiego był wystrzał z okrętu Aurora."
  },
  {
    id: "R05_ROS_06",
    section: "Rewolucje w Rosji",
    type: "multi_select",
    prompt: "Zaznacz postulaty zawarte w tezach kwietniowych Lenina.",
    options: ["Szybkie wycofanie Rosji z wojny", "Przekazanie ziemi chłopom", "Obalenie Rządu Tymczasowego", "Przywrócenie pełni władzy cara", "Sojusz wojskowy z państwami centralnymi"],
    answer: [0, 1, 2],
    explanation: "Lenin obiecywał pokój, ziemię dla chłopów i przejęcie władzy przez bolszewików."
  },
  {
    id: "R05_ROS_07",
    section: "Rewolucje w Rosji",
    type: "sequence",
    prompt: "Ułóż wydarzenia z rewolucji rosyjskich w kolejności chronologicznej.",
    options: null,
    items: ["Utworzenie ZSRS", "Abdykacja Mikołaja II", "Ogłoszenie tez kwietniowych", "Przejęcie Pałacu Zimowego"],
    answer: ["Abdykacja Mikołaja II", "Ogłoszenie tez kwietniowych", "Przejęcie Pałacu Zimowego", "Utworzenie ZSRS"],
    explanation: "Car abdykował w marcu 1917 r., Lenin ogłosił tezy w kwietniu, bolszewicy przejęli władzę w listopadzie, a ZSRS powstał w grudniu 1922 r."
  },
  {
    id: "R05_ROS_08",
    section: "Rewolucje w Rosji",
    type: "riddle",
    prompt: "Jak nazywano policję polityczną bolszewików kierowaną przez Feliksa Dzierżyńskiego?",
    options: null,
    answer: "Czeka",
    altAnswers: ["Czeka", "czeka"],
    explanation: "Czeka, czyli Ogólnorosyjska Nadzwyczajna Komisja do Walki z Kontrrewolucją i Sabotażem, służyła do zwalczania przeciwników nowej władzy."
  },
  {
    id: "R05_ROS_09",
    section: "Rewolucje w Rosji",
    type: "sort",
    prompt: "Przyporządkuj osoby do wydarzeń lub instytucji.",
    options: null,
    items: ["Mikołaj II", "Aleksander Kiereński", "Włodzimierz Lenin", "Lew Trocki", "Feliks Dzierżyński"],
    categories: ["carat i Rząd Tymczasowy", "władza bolszewicka"],
    answer: {
      "carat i Rząd Tymczasowy": ["Mikołaj II", "Aleksander Kiereński"],
      "władza bolszewicka": ["Włodzimierz Lenin", "Lew Trocki", "Feliks Dzierżyński"]
    },
    explanation: "Kiereński kierował Rządem Tymczasowym, natomiast Lenin, Trocki i Dzierżyński należeli do świata władzy bolszewickiej."
  },
  {
    id: "R05_ROS_10",
    section: "Rewolucje w Rosji",
    type: "scenario",
    prompt: "Jesteś posłem Zgromadzenia Konstytucyjnego w styczniu 1918 r. Bolszewicy przegrali wybory i po pierwszym posiedzeniu usuwają posłów. Co robią z parlamentem?",
    options: ["Rozpędzają go", "Oddają mu pełnię władzy", "Przenoszą go do Paryża", "Łączą go z Radą Regencyjną", "Przekształcają go w ententę", "Wysyłają na front zachodni"],
    answer: 0,
    explanation: "Lenin zdecydował o rozpędzeniu Zgromadzenia Konstytucyjnego, aby bolszewicy zachowali pełnię władzy."
  },
  {
    id: "R05_ROS_11",
    section: "Rewolucje w Rosji",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: bolszewicy, mienszewicy, eserowcy, ułani.",
    options: null,
    answer: "ułani",
    explanation: "Bolszewicy, mienszewicy i eserowcy byli rosyjskimi stronnictwami politycznymi; ułani to żołnierze kawalerii."
  },
  {
    id: "R05_ROS_12",
    section: "Rewolucje w Rosji",
    type: "true_false",
    prompt: "Po zwycięstwie w wojnie domowej bolszewicy ogłosili w grudniu 1922 r. powstanie ZSRS.",
    options: null,
    answer: true,
    explanation: "Związek Socjalistycznych Republik Sowieckich powstał po umocnieniu władzy bolszewickiej w Rosji."
  },
  {
    id: "R05_POL_01",
    section: "Sprawa polska",
    type: "single_choice",
    prompt: "Kto zainicjował utworzenie Kompanii Kadrowej w Galicji?",
    options: ["Józef Piłsudski", "Roman Dmowski", "Ignacy Jan Paderewski", "Władysław Grabski", "Thomas Woodrow Wilson", "Aleksander Kiereński"],
    answer: 0,
    image: "r05_legiony_polskie.jpg",
    explanation: "Kompania Kadrowa powstała z inicjatywy Józefa Piłsudskiego po zgodzie rządu austriackiego na mobilizację oddziałów strzeleckich."
  },
  {
    id: "R05_POL_02",
    section: "Sprawa polska",
    type: "fill_in",
    prompt: "Żołnierze Kompanii Kadrowej przekroczyli granicę Królestwa Polskiego __________ 1914 r.",
    options: null,
    answer: ["6 sierpnia"],
    altAnswers: [
      ["6 sierpnia", "6 VIII", "6 sierpnia 1914"]
    ],
    image: "r05_legiony_polskie.jpg",
    explanation: "6 sierpnia 1914 r. Kompania Kadrowa wkroczyła do Królestwa Polskiego, aby wzniecić antyrosyjskie powstanie."
  },
  {
    id: "R05_POL_03",
    section: "Sprawa polska",
    type: "true_false",
    prompt: "Legiony Polskie powstały u boku armii austriackiej i nawiązywały nazwą do Legionów Jana Henryka Dąbrowskiego.",
    options: null,
    answer: true,
    explanation: "Legiony Polskie formowano od końca 1914 r. przy armii austriackiej, a ich nazwa odwoływała się do wcześniejszej tradycji legionowej."
  },
  {
    id: "R05_POL_04",
    section: "Sprawa polska",
    type: "match",
    prompt: "Połącz postać z działaniem lub funkcją.",
    options: null,
    left: ["Józef Piłsudski", "Józef Haller", "Roman Dmowski", "Ignacy Jan Paderewski"],
    right: ["dowódca I Brygady Legionów Polskich", "dowódca Błękitnej Armii", "założyciel Komitetu Narodowego Polskiego", "propagował sprawę polską w USA"],
    answer: {
      "Józef Piłsudski": "dowódca I Brygady Legionów Polskich",
      "Józef Haller": "dowódca Błękitnej Armii",
      "Roman Dmowski": "założyciel Komitetu Narodowego Polskiego",
      "Ignacy Jan Paderewski": "propagował sprawę polską w USA"
    },
    explanation: "Te postacie reprezentowały różne drogi działania na rzecz sprawy polskiej podczas wojny."
  },
  {
    id: "R05_POL_05",
    section: "Sprawa polska",
    type: "single_choice",
    prompt: "Jak nazwano odmowę złożenia nowej przysięgi wierności państwom centralnym przez Piłsudskiego i wielu legionistów?",
    options: ["Kryzys przysięgowy", "Traktat brzeski", "Orędzie Wilsona", "Bitwa pod Amiens", "Kocioł bałkański", "Entente cordiale"],
    answer: 0,
    explanation: "Odmowa przysięgi doprowadziła do rozwiązania I i III Brygady Legionów oraz uwięzienia Piłsudskiego w Magdeburgu."
  },
  {
    id: "R05_POL_06",
    section: "Sprawa polska",
    type: "multi_select",
    prompt: "Zaznacz zapowiedzi zawarte w Akcie 5 listopada.",
    options: ["Powstanie Królestwa Polskiego", "Dziedziczna monarchia konstytucyjna", "Polskie wojsko pod dowództwem niemieckim i austriackim", "Natychmiastowe ustalenie wszystkich granic Polski", "Przekazanie Gdańska Polsce bez warunków"],
    answer: [0, 1, 2],
    explanation: "Manifest dwóch cesarzy obiecywał Królestwo Polskie i wojsko, lecz sprawę granic zostawiał na przyszłość."
  },
  {
    id: "R05_POL_07",
    section: "Sprawa polska",
    type: "sequence",
    prompt: "Ułóż wydarzenia dotyczące sprawy polskiej w kolejności chronologicznej.",
    options: null,
    items: ["Orędzie Wilsona", "Akt 5 listopada", "Kryzys przysięgowy", "Wymarsz Kompanii Kadrowej"],
    answer: ["Wymarsz Kompanii Kadrowej", "Akt 5 listopada", "Kryzys przysięgowy", "Orędzie Wilsona"],
    explanation: "Kompania Kadrowa wyruszyła w 1914 r., Akt 5 listopada ogłoszono w 1916 r., kryzys przysięgowy nastąpił w 1917 r., a Wilson wygłosił orędzie w styczniu 1918 r."
  },
  {
    id: "R05_POL_08",
    section: "Sprawa polska",
    type: "riddle",
    prompt: "Jak nazywano manifest z 5 listopada 1916 r. podpisany przez cesarzy Niemiec i Austro-Węgier?",
    options: null,
    answer: "Akt 5 listopada",
    altAnswers: ["Akt 5 listopada", "manifest dwóch cesarzy", "Manifest dwóch cesarzy"],
    explanation: "Akt 5 listopada, czyli manifest dwóch cesarzy, po raz pierwszy w dokumencie zaborców zapowiadał odrodzenie Polski."
  },
  {
    id: "R05_POL_09",
    section: "Sprawa polska",
    type: "single_choice",
    prompt: "Dlaczego Armię Polską we Francji nazywano Błękitną Armią?",
    options: ["Od koloru francuskich mundurów", "Od nazwy okrętu Aurora", "Od błękitnych chorągwi Austro-Węgier", "Od koloru paszportów USA", "Od nazwy Legionu Puławskiego", "Od miejsca bitwy pod Kaniowem"],
    answer: 0,
    image: "r05_blekitna_armia.jpg",
    explanation: "Oddziały Hallera nosiły francuskie mundury w błękitnym kolorze, stąd nazwa Błękitna Armia."
  },
  {
    id: "R05_POL_10",
    section: "Sprawa polska",
    type: "scenario",
    prompt: "Jesteś amerykańskim prezydentem przedstawiającym 14 punktów programu pokojowego. W punkcie trzynastym mówisz o państwie, które ma mieć wolny dostęp do morza. O jakie państwo chodzi?",
    options: ["Polskę", "Serbię", "Bułgarię", "Japonię", "Turcję", "Belgię"],
    answer: 0,
    explanation: "Punkt trzynasty orędzia Wilsona dotyczył utworzenia niepodległego państwa polskiego z wolnym dostępem do morza."
  },
  {
    id: "R05_POL_11",
    section: "Sprawa polska",
    type: "sort",
    prompt: "Przyporządkuj polskie formacje do strony, u boku której powstawały.",
    options: null,
    items: ["Legiony Polskie", "Kompania Kadrowa", "Legion Puławski", "Korpusy Polskie", "Błękitna Armia"],
    categories: ["u boku państw centralnych", "u boku Rosji lub ententy"],
    answer: {
      "u boku państw centralnych": ["Legiony Polskie", "Kompania Kadrowa"],
      "u boku Rosji lub ententy": ["Legion Puławski", "Korpusy Polskie", "Błękitna Armia"]
    },
    explanation: "Polacy tworzyli oddziały po obu stronach konfliktu, bo państwa zaborcze należały do przeciwnych bloków."
  },
  {
    id: "R05_POL_12",
    section: "Sprawa polska",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Paderewski, Dmowski, Grabski, Princip.",
    options: null,
    answer: "Princip",
    explanation: "Paderewski, Dmowski i Grabski należeli do polskiej delegacji na konferencji pokojowej; Gawriło Princip dokonał zamachu w Sarajewie."
  },
  {
    id: "R05_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który stan USA wskazano jako miejsce, gdzie kobiety najwcześniej na świecie uzyskały prawo wyborcze?",
    options: ["Wyoming", "Kalifornia", "Teksas", "Floryda", "Ohio", "Alaska"],
    answer: 0,
    explanation: "Ciekawostka w temacie o nowych mocarstwach podaje Wyoming i rok 1869."
  },
  {
    id: "R05_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Bitwa pod Cuszimą rozegrała się w dniach __________ maja __________ r.",
    options: null,
    answer: ["27-28", "1905"],
    altAnswers: [
      ["27-28", "27 - 28"],
      ["1905", "1905 r."]
    ],
    explanation: "Rozstrzygające starcie wojny rosyjsko-japońskiej odbyło się 27-28 maja 1905 r."
  },
  {
    id: "R05_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz państwa tworzące koalicję antyturecką w I wojnie bałkańskiej.",
    options: ["Serbia", "Czarnogóra", "Bułgaria", "Grecja", "Rumunia", "Albania"],
    answer: [0, 1, 2, 3],
    explanation: "W I wojnie bałkańskiej przeciw Turcji wystąpiła koalicja Serbii, Czarnogóry, Bułgarii i Grecji."
  },
  {
    id: "R05_HARD_04",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz datę z wydarzeniem.",
    options: null,
    left: ["3 listopada 1918", "3 marca 1918", "8 stycznia 1918", "28 czerwca 1914"],
    right: ["bunt marynarzy w Kilonii", "traktat brzeski", "orędzie Wilsona", "zamach w Sarajewie"],
    answer: {
      "3 listopada 1918": "bunt marynarzy w Kilonii",
      "3 marca 1918": "traktat brzeski",
      "8 stycznia 1918": "orędzie Wilsona",
      "28 czerwca 1914": "zamach w Sarajewie"
    },
    explanation: "Te daty łączą koniec wojny, wycofanie Rosji, program pokojowy USA i początek kryzysu lipcowego."
  },
  {
    id: "R05_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "Traktat brzeski oznaczał, że Rosja zrzekła się między innymi ziem polskich, Litwy, Łotwy, Estonii, Finlandii, Białorusi i Ukrainy.",
    options: null,
    answer: true,
    explanation: "Takie postanowienia poprawiły chwilowo sytuację państw centralnych, bo mogły przerzucić siły na zachód."
  },
  {
    id: "R05_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "Jesteś rosyjskim robotnikiem w 1917 r. Słyszysz program Lenina: pokój, ziemia dla chłopów i obalenie Rządu Tymczasowego. Jak nazywał się ten program?",
    options: ["Tezy kwietniowe", "Akt 5 listopada", "Dekret o kontrybucji", "Konwencja wersalska", "Manifest dwóch cesarzy", "Plebiscyt powiślański"],
    answer: 0,
    explanation: "Lenin ogłosił tezy kwietniowe po powrocie do Rosji w 1917 r."
  },
  {
    id: "R05_HARD_07",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia końcowej fazy wojny w kolejności chronologicznej.",
    options: null,
    items: ["Rozejm w Compiegne", "Przystąpienie USA do wojny", "Bunt marynarzy w Kilonii", "Traktat brzeski"],
    answer: ["Przystąpienie USA do wojny", "Traktat brzeski", "Bunt marynarzy w Kilonii", "Rozejm w Compiegne"],
    explanation: "USA przystąpiły do wojny w kwietniu 1917 r., traktat brzeski podpisano 3 marca 1918 r., bunt w Kilonii wybuchł 3 listopada, a rozejm zawarto 11 listopada 1918 r."
  },
  {
    id: "R05_HARD_08",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się polski komunista stojący na czele Czeka?",
    options: null,
    answer: "Feliks Dzierżyński",
    altAnswers: ["Feliks Dzierżyński", "Dzierżyński", "Feliks Dzierzynski", "Dzierzynski"],
    explanation: "Feliks Dzierżyński kierował bolszewicką policją polityczną Czeka."
  },
  {
    id: "R05_HARD_09",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Opatowiec, Łowczówek, Rokitna, Verdun.",
    options: null,
    answer: "Verdun",
    explanation: "Opatowiec, Łowczówek i Rokitna pojawiają się jako miejsca walk Legionów Polskich; Verdun to wielka bitwa frontu zachodniego."
  },
  {
    id: "R05_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu żołnierzy służyło łącznie w Legionach Polskich według rozdziału?",
    options: ["Około 20 tys.", "Około 70 tys.", "Około 500 tys.", "Około 3 mln", "Około 49", "Około 400"],
    answer: 0,
    explanation: "W Legionach Polskich służyło w sumie około 20 tys. żołnierzy."
  },
  {
    id: "R05_HARD_11",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz osoby, które wchodziły w skład polskiej delegacji na konferencji pokojowej w Paryżu.",
    options: ["Ignacy Jan Paderewski", "Roman Dmowski", "Władysław Grabski", "Józef Piłsudski", "Józef Haller", "Gawriło Princip"],
    answer: [0, 1, 2],
    explanation: "Polskę reprezentowali Paderewski, Dmowski i Grabski."
  },
  {
    id: "R05_HARD_12",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Wiosną 1919 r. Błękitna Armia licząca __________ tys. żołnierzy została przetransportowana do __________.",
    options: null,
    answer: ["70", "Polski"],
    altAnswers: [
      ["70", "70 tys.", "siedemdziesiąt"],
      ["Polski", "Polska"]
    ],
    image: "r05_blekitna_armia.jpg",
    explanation: "Armia Hallera liczyła około 70 tys. żołnierzy i została przetransportowana do Polski wiosną 1919 r."
  },
  {
    id: "R05_HARD_13",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj skutki do wydarzeń.",
    options: null,
    items: ["powstanie ZSRS", "rozpad Austro-Węgier", "wzrost zainteresowania sprawą polską", "przystąpienie USA do wojny"],
    categories: ["rewolucje i koniec wojny", "sprawa polska i wojna morska"],
    answer: {
      "rewolucje i koniec wojny": ["powstanie ZSRS", "rozpad Austro-Węgier"],
      "sprawa polska i wojna morska": ["wzrost zainteresowania sprawą polską", "przystąpienie USA do wojny"]
    },
    explanation: "Powstanie ZSRS wynikało ze zwycięstwa bolszewików, rozpad Austro-Węgier był skutkiem końca wojny, Akt 5 listopada umiędzynarodowił sprawę polską, a nieograniczona wojna podwodna przyczyniła się do wejścia USA do konfliktu."
  }
];

const KID_PROMPTS = {
  R05_SWI_04: "Połącz sojusz z państwami, które do niego należały.",
  R05_FRO_01: "Co sprawiło, że zaczęła się I wojna światowa?",
  R05_FRO_05: "Rozdziel cechy wojny w okopach i wojny z ruchomymi armiami.",
  R05_NBR_04: "Połącz element okopów lub broni z tym, do czego służył.",
  R05_NBR_09: "Jaka broń pomagała piechocie przejść przez okopy i drut kolczasty?",
  R05_ROS_06: "Co obiecywał Lenin w tezach kwietniowych?",
  R05_ROS_08: "Jak nazywała się policja polityczna bolszewików?",
  R05_POL_04: "Połącz polską postać z jej rolą.",
  R05_POL_08: "Jak nazywał się manifest z 5 listopada 1916 r.?",
  R05_HARD_11: "Kto reprezentował Polskę na konferencji w Paryżu?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "I wojna światowa",
  icon: "🌍",
  sectionOrder: [
    "Świat przed wojną",
    "Fronty Wielkiej Wojny",
    "Nowe rodzaje broni",
    "Rewolucje w Rosji",
    "Sprawa polska"
  ],
  sectionIcons: {
    "Świat przed wojną": "🧭",
    "Fronty Wielkiej Wojny": "⚔️",
    "Nowe rodzaje broni": "🛡️",
    "Rewolucje w Rosji": "🏛️",
    "Sprawa polska": "🇵🇱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
