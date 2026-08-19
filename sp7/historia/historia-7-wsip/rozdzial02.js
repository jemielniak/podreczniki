// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PAN  = Zjednoczenie państw narodowych
//   WSK  = Wojna secesyjna i kolonializm
//   KPP  = Królestwo Polskie przed powstaniem
//   PSR  = Powstanie styczniowe i represje
//   WPZ  = Walka o polskość w zaborach
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R02_PAN_01",
    section: "Zjednoczenie państw narodowych",
    type: "single_choice",
    prompt: "Jaki konflikt zachwiał solidarnością mocarstw Świętego Przymierza?",
    options: ["wojna krymska", "wojna secesyjna", "wojna francusko-pruska", "powstanie styczniowe", "wojna rosyjsko-japońska", "wojna z Austrią o Szlezwik"],
    answer: 0,
    explanation: "Wojna krymska z lat 1853-1856 poróżniła mocarstwa, które wcześniej wspólnie pilnowały porządku wiedeńskiego.",
    image: "r02_wojna_krymska_sewastopol.jpg"
  },
  {
    id: "R02_PAN_02",
    section: "Zjednoczenie państw narodowych",
    type: "true_false",
    prompt: "Austria zachowała neutralność podczas wojny krymskiej.",
    options: null,
    answer: true,
    explanation: "Neutralność Austrii złamała solidarność państw Świętego Przymierza, mimo że Rosja wcześniej pomogła Austrii stłumić powstanie węgierskie."
  },
  {
    id: "R02_PAN_03",
    section: "Zjednoczenie państw narodowych",
    type: "fill_in",
    prompt: "W 1859 r. wojska francusko-sardyńskie pokonały Austriaków pod Magentą i __________.",
    options: null,
    answer: ["Solferino"],
    altAnswers: [["Solferino", "pod Solferino"]],
    explanation: "Zwycięstwa pod Magentą i Solferino otworzyły drogę do przyłączenia Lombardii do Królestwa Sardynii."
  },
  {
    id: "R02_PAN_04",
    section: "Zjednoczenie państw narodowych",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane ze zjednoczeniem Włoch w porządku chronologicznym.",
    options: null,
    items: ["zajęcie Rzymu przez wojska włoskie", "wyprawa tysiąca Garibaldiego", "wojna z Austrią i przyłączenie Lombardii", "proklamowanie Królestwa Włoch"],
    answer: ["wojna z Austrią i przyłączenie Lombardii", "wyprawa tysiąca Garibaldiego", "proklamowanie Królestwa Włoch", "zajęcie Rzymu przez wojska włoskie"],
    explanation: "Najpierw w 1859 r. przyłączono Lombardię, potem w 1860 r. odbyła się wyprawa tysiąca, w 1861 r. ogłoszono Królestwo Włoch, a w 1870 r. zajęto Rzym.",
    image: "r02_garibaldi_czerwone_koszule.jpg"
  },
  {
    id: "R02_PAN_05",
    section: "Zjednoczenie państw narodowych",
    type: "single_choice",
    prompt: "Które państwo włoskie podjęło misję zjednoczenia Włoch?",
    options: ["Królestwo Sardynii", "Państwo Kościelne", "Królestwo Obojga Sycylii", "Wielkie Księstwo Toskanii", "Cesarstwo Austrii", "Republika Wenecka"],
    answer: 0,
    explanation: "Zjednoczenie dokonało się wokół Królestwa Sardynii, nazywanego też Piemontem."
  },
  {
    id: "R02_PAN_06",
    section: "Zjednoczenie państw narodowych",
    type: "scenario",
    prompt: "Premier Piemontu szuka poparcia wielkiego mocarstwa, aby pokonać Austrię i przyłączyć północne Włochy. Z kim zawiera kluczowy sojusz?",
    options: ["z Napoleonem III", "z Abrahamem Lincolnem", "z Franciszkiem Józefem I", "z papieżem Piusem IX", "z Wilhelmem I", "z Aleksandrem II"],
    answer: 0,
    explanation: "Camillo Cavour porozumiał się z cesarzem Francji Napoleonem III, a w zamian Piemont odstąpił Francji Niceę i Sabaudię."
  },
  {
    id: "R02_PAN_07",
    section: "Zjednoczenie państw narodowych",
    type: "match",
    prompt: "Połącz postać z jej rolą w procesach zjednoczeniowych.",
    options: null,
    left: ["Camillo Cavour", "Giuseppe Garibaldi", "Otto von Bismarck", "Wilhelm I"],
    right: ["premier Piemontu", "dowódca wyprawy tysiąca", "pruski kanclerz", "cesarz niemiecki"],
    answer: {
      "Camillo Cavour": "premier Piemontu",
      "Giuseppe Garibaldi": "dowódca wyprawy tysiąca",
      "Otto von Bismarck": "pruski kanclerz",
      "Wilhelm I": "cesarz niemiecki"
    },
    explanation: "Cavour i Garibaldi odegrali kluczowe role we Włoszech, a Bismarck i Wilhelm I w zjednoczeniu Niemiec."
  },
  {
    id: "R02_PAN_08",
    section: "Zjednoczenie państw narodowych",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do zjednoczenia Włoch: Lombardia, Wenecja, Rzym, Alzacja.",
    options: null,
    answer: "Alzacja",
    explanation: "Alzacja została odebrana Francji po wojnie francusko-pruskiej i związana była ze zjednoczeniem Niemiec, nie Włoch."
  },
  {
    id: "R02_PAN_09",
    section: "Zjednoczenie państw narodowych",
    type: "riddle",
    prompt: "Przydomek Ottona von Bismarcka brzmiał...",
    options: null,
    answer: "Żelazny Kanclerz",
    altAnswers: ["Żelazny Kanclerz", "zelazny kanclerz", "kanclerz żelazny"],
    explanation: "Bismarck zasłynął twardą polityką, którą sam kojarzył z rozstrzyganiem spraw krwią i żelazem."
  },
  {
    id: "R02_PAN_10",
    section: "Zjednoczenie państw narodowych",
    type: "multi_select",
    prompt: "Zaznacz skutki wojny francusko-pruskiej.",
    options: ["Francja oddała Alzację i Lotaryngię", "Francja zapłaciła ogromną kontrybucję", "Niemcy ogłoszono cesarstwem", "Austria odzyskała wpływy w Niemczech", "Paryż nigdy nie skapitulował", "Włochy utraciły Wenecję"],
    answer: [0, 1, 2],
    explanation: "Pokój we Frankfurcie narzucił Francji utratę Alzacji i Lotaryngii oraz kontrybucję, a zwycięstwo Prus umożliwiło ogłoszenie cesarstwa niemieckiego.",
    image: "r02_proklamacja_cesarstwa_w_wersalu.jpg"
  },
  {
    id: "R02_WSK_01",
    section: "Wojna secesyjna i kolonializm",
    type: "single_choice",
    prompt: "Jak nazywa się wystąpienie części stanów z Unii przed wojną secesyjną?",
    options: ["secesja", "autonomia", "branka", "Kulturkampf", "trójlojalizm", "uwłaszczenie"],
    answer: 0,
    explanation: "Jedenaście stanów południowych ogłosiło secesję, czyli wystąpienie z Unii, i utworzyło Konfederację."
  },
  {
    id: "R02_WSK_02",
    section: "Wojna secesyjna i kolonializm",
    type: "multi_select",
    prompt: "Zaznacz cechy Południa Stanów Zjednoczonych przed wojną secesyjną.",
    options: ["dominacja rolnictwa plantacyjnego", "duże znaczenie bawełny", "oparcie pracy na niewolnictwie", "przewaga produkcji zbrojeniowej nad Północą", "zakaz niewolnictwa", "większa produkcja węgla niż na Północy"],
    answer: [0, 1, 2],
    explanation: "Południe było rolnicze, plantacyjne i silnie związane z niewolnictwem, natomiast przewaga przemysłowa należała do Północy."
  },
  {
    id: "R02_WSK_03",
    section: "Wojna secesyjna i kolonializm",
    type: "true_false",
    prompt: "Wojna secesyjna zakończyła się zwycięstwem Konfederacji.",
    options: null,
    answer: false,
    explanation: "Zwycięstwo odniosła Unia, czyli Północ, a pokonane Południe zostało spustoszone."
  },
  {
    id: "R02_WSK_04",
    section: "Wojna secesyjna i kolonializm",
    type: "sequence",
    prompt: "Ułóż wydarzenia z historii USA w porządku chronologicznym.",
    options: null,
    items: ["ogłoszenie zniesienia niewolnictwa przez Lincolna", "wybór Abrahama Lincolna na prezydenta", "koniec wojny secesyjnej", "secesja stanów południowych"],
    answer: ["wybór Abrahama Lincolna na prezydenta", "secesja stanów południowych", "ogłoszenie zniesienia niewolnictwa przez Lincolna", "koniec wojny secesyjnej"],
    explanation: "Lincoln został wybrany w 1860 r., secesja rozpoczęła wojnę w 1861 r., zniesienie niewolnictwa ogłoszono w 1863 r., a wojna skończyła się w 1865 r.",
    image: "r02_wojna_secesyjna_gettysburg.jpg"
  },
  {
    id: "R02_WSK_05",
    section: "Wojna secesyjna i kolonializm",
    type: "match",
    prompt: "Połącz pojęcie z wyjaśnieniem.",
    options: null,
    left: ["Unia", "Konfederacja", "segregacja rasowa", "polityka kolonialna"],
    right: ["Północ w wojnie secesyjnej", "Południe w wojnie secesyjnej", "wymuszanie oddzielnych instytucji dla mniejszości rasowej", "opanowywanie i uzależnianie słabiej rozwiniętych obszarów"],
    answer: {
      "Unia": "Północ w wojnie secesyjnej",
      "Konfederacja": "Południe w wojnie secesyjnej",
      "segregacja rasowa": "wymuszanie oddzielnych instytucji dla mniejszości rasowej",
      "polityka kolonialna": "opanowywanie i uzależnianie słabiej rozwiniętych obszarów"
    },
    explanation: "Te pojęcia porządkują zarówno spór wewnętrzny w USA, jak i ekspansję kolonialną mocarstw."
  },
  {
    id: "R02_WSK_06",
    section: "Wojna secesyjna i kolonializm",
    type: "fill_in",
    prompt: "Najcenniejszą brytyjską kolonią w XIX w. były __________.",
    options: null,
    answer: ["Indie"],
    altAnswers: [["Indie", "Indie Brytyjskie"]],
    explanation: "Indie nazywano perłą w brytyjskiej koronie, ponieważ były najbogatszą i najważniejszą posiadłością Wielkiej Brytanii.",
    image: "r02_plantacja_herbaty_w_indiach.jpg"
  },
  {
    id: "R02_WSK_07",
    section: "Wojna secesyjna i kolonializm",
    type: "scenario",
    prompt: "Europejskie mocarstwo wytycza granice kolonii w Afryce bez uwzględnienia podziałów etnicznych i podporządkowuje gospodarkę plantacjom. Jaką politykę prowadzi?",
    options: ["kolonialną", "trójlojalistyczną", "rusyfikacyjną", "germanizacyjną", "secesyjną", "ugodową"],
    answer: 0,
    explanation: "Polityka kolonialna polegała na podporządkowywaniu słabiej rozwiniętych obszarów w celu uzyskania korzyści gospodarczych."
  },
  {
    id: "R02_WSK_08",
    section: "Wojna secesyjna i kolonializm",
    type: "single_choice",
    prompt: "Który brytyjski pisarz wyraził przekonanie o europejskiej misji kolonizacyjnej hasłem brzemienia białego człowieka?",
    options: ["Rudyard Kipling", "Henryk Sienkiewicz", "Stefan Żeromski", "Karol Dickens", "Lew Tołstoj", "Karen Blixen"],
    answer: 0,
    explanation: "Rudyard Kipling najdobitniej wyrażał przekonanie o rzekomej misji cywilizacyjnej Europejczyków."
  },
  {
    id: "R02_WSK_09",
    section: "Wojna secesyjna i kolonializm",
    type: "sort",
    prompt: "Przyporządkuj elementy do obszaru rywalizacji mocarstw.",
    options: null,
    items: ["Indie", "Kongo", "Mandżuria", "polityka otwartych drzwi", "Kanał Sueski", "plantacje kauczuku w Kongo"],
    categories: ["imperium brytyjskie", "Afryka", "Daleki Wschód"],
    answer: {
      "imperium brytyjskie": ["Indie", "Kanał Sueski"],
      "Afryka": ["Kongo", "plantacje kauczuku w Kongo"],
      "Daleki Wschód": ["Mandżuria", "polityka otwartych drzwi"]
    },
    explanation: "Indie i szlak sueski były kluczowe dla Wielkiej Brytanii, Kongo i plantacje wiążą się z Afryką, a Mandżuria i Chiny z rywalizacją na Dalekim Wschodzie.",
    image: "r02_rozdrapywanie_chin_karykatura.jpg"
  },
  {
    id: "R02_WSK_10",
    section: "Wojna secesyjna i kolonializm",
    type: "riddle",
    prompt: "Nazwa amerykańskiej koncepcji równej ekspansji ekonomicznej w Chinach bez nabytków terytorialnych to polityka...",
    options: null,
    answer: "otwartych drzwi",
    altAnswers: ["otwartych drzwi", "polityka otwartych drzwi"],
    explanation: "Stany Zjednoczone forsowały politykę otwartych drzwi, aby mocarstwa mogły działać gospodarczo w Chinach na równych prawach."
  },
  {
    id: "R02_KPP_01",
    section: "Królestwo Polskie przed powstaniem",
    type: "single_choice",
    prompt: "Co ułatwiło polskim producentom eksport na rynek rosyjski w 1851 r.?",
    options: ["zniesienie granicy celnej między Królestwem Polskim a Rosją", "utworzenie Związku Północnoniemieckiego", "zajęcie Rzymu przez Włochów", "otwarcie Kanału Sueskiego", "powstanie Komisji Kolonizacyjnej", "branka do armii carskiej"],
    answer: 0,
    explanation: "Zniesienie granicy celnej otworzyło polskim producentom dostęp do dużego rynku imperium rosyjskiego."
  },
  {
    id: "R02_KPP_02",
    section: "Królestwo Polskie przed powstaniem",
    type: "fill_in",
    prompt: "Pierwszą w pełni legalną polską organizacją w Królestwie Polskim po powstaniu listopadowym było Towarzystwo __________.",
    options: null,
    answer: ["Rolnicze"],
    altAnswers: [["Rolnicze", "Towarzystwo Rolnicze"]],
    explanation: "Towarzystwo Rolnicze skupiało postępowych ziemian, a jego prezesem był Andrzej Zamoyski."
  },
  {
    id: "R02_KPP_03",
    section: "Królestwo Polskie przed powstaniem",
    type: "true_false",
    prompt: "Aleksander Wielopolski był zwolennikiem ugody z caratem i stopniowych reform.",
    options: null,
    answer: true,
    explanation: "Wielopolski liczył, że lojalność wobec Rosji pozwoli Polakom poprawić warunki życia narodowego."
  },
  {
    id: "R02_KPP_04",
    section: "Królestwo Polskie przed powstaniem",
    type: "multi_select",
    prompt: "Zaznacz reformy lub działania przypisywane Aleksandrowi Wielopolskiemu.",
    options: ["przywracanie języka polskiego w administracji", "zwiększenie liczby szkół z polskim językiem wykładowym", "reaktywowanie uczelni jako Szkoły Głównej", "ogłoszenie polityki otwartych drzwi", "utworzenie Komisji Kolonizacyjnej", "proklamowanie cesarstwa niemieckiego"],
    answer: [0, 1, 2],
    explanation: "Wielopolski obsadzał administrację Polakami, rozbudowywał szkolnictwo i reaktywował warszawską uczelnię jako Szkołę Główną."
  },
  {
    id: "R02_KPP_05",
    section: "Królestwo Polskie przed powstaniem",
    type: "match",
    prompt: "Połącz obóz polityczny z jego programem.",
    options: null,
    left: ["Biali", "Czerwoni", "Delegacja Miejska", "Towarzystwo Rolnicze"],
    right: ["stopniowe reformy i dyplomacja", "szybkie powstanie i pełna niepodległość", "pokojowe manifestacje dla reform", "modernizacja rolnictwa i oczynszowanie"],
    answer: {
      "Biali": "stopniowe reformy i dyplomacja",
      "Czerwoni": "szybkie powstanie i pełna niepodległość",
      "Delegacja Miejska": "pokojowe manifestacje dla reform",
      "Towarzystwo Rolnicze": "modernizacja rolnictwa i oczynszowanie"
    },
    explanation: "Obozy różniły się metodami walki politycznej, od ugodowych reform po przygotowanie powstania."
  },
  {
    id: "R02_KPP_06",
    section: "Królestwo Polskie przed powstaniem",
    type: "scenario",
    prompt: "W Warszawie odbywa się pogrzeb pięciu demonstrantów zabitych na Krakowskim Przedmieściu. Uczestniczą w nim przedstawiciele różnych wyznań i zaborów. Jaki charakter miało to wydarzenie?",
    options: ["wielka manifestacja patriotyczna", "uroczystość koronacyjna", "zjazd kolonialny", "konferencja pokojowa", "posiedzenie Sejmu Krajowego", "strajk szkolny"],
    answer: 0,
    explanation: "Pogrzeb pięciu poległych przerodził się w masową manifestację patriotyczną i symbol solidarności społecznej.",
    image: "r02_pogrzeb_pieciu_poleglych.jpg"
  },
  {
    id: "R02_KPP_07",
    section: "Królestwo Polskie przed powstaniem",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do programu Czerwonych: powstanie zbrojne, granice z 1772 roku, współpraca z rewolucjonistami, odrzucenie walki zbrojnej.",
    options: null,
    answer: "odrzucenie walki zbrojnej",
    explanation: "Odrzucenie walki zbrojnej było bliższe programowi Białych, natomiast Czerwoni dążyli do szybkiego powstania."
  },
  {
    id: "R02_KPP_08",
    section: "Królestwo Polskie przed powstaniem",
    type: "sort",
    prompt: "Przyporządkuj osoby i działania do właściwych nurtów.",
    options: null,
    items: ["Andrzej Zamoyski", "Jarosław Dąbrowski", "tajne kółka spiskowe", "Delegacja Miejska", "stopniowe reformy", "Komitet Centralny Narodowy"],
    categories: ["Biali i umiarkowani", "Czerwoni"],
    answer: {
      "Biali i umiarkowani": ["Andrzej Zamoyski", "Delegacja Miejska", "stopniowe reformy"],
      "Czerwoni": ["Jarosław Dąbrowski", "tajne kółka spiskowe", "Komitet Centralny Narodowy"]
    },
    explanation: "Biali i środowiska umiarkowane stawiały na reformy, a Czerwoni rozwijali spisek i przygotowywali powstanie."
  },
  {
    id: "R02_KPP_09",
    section: "Królestwo Polskie przed powstaniem",
    type: "riddle",
    prompt: "Potoczna nazwa poboru do armii carskiej, który przyspieszył wybuch powstania styczniowego, to...",
    options: null,
    answer: "branka",
    altAnswers: ["branka", "branka do armii carskiej"],
    explanation: "Branka miała przerzedzić szeregi spiskowców, ale skłoniła Czerwonych do przyspieszenia powstania."
  },
  {
    id: "R02_KPP_10",
    section: "Królestwo Polskie przed powstaniem",
    type: "sequence",
    prompt: "Ułóż wydarzenia poprzedzające powstanie styczniowe w porządku chronologicznym.",
    options: null,
    items: ["mianowanie Konstantego Mikołajewicza namiestnikiem", "brutalne tłumienie manifestacji w 1861 r.", "zarządzenie branki", "reformy Wielopolskiego"],
    answer: ["brutalne tłumienie manifestacji w 1861 r.", "mianowanie Konstantego Mikołajewicza namiestnikiem", "reformy Wielopolskiego", "zarządzenie branki"],
    explanation: "Najpierw doszło do manifestacji i represji w 1861 r., potem w 1862 r. nastąpiły próby reform, a branka bezpośrednio poprzedziła wybuch powstania."
  },
  {
    id: "R02_PSR_01",
    section: "Powstanie styczniowe i represje",
    type: "single_choice",
    prompt: "Kiedy Tymczasowy Rząd Narodowy ogłosił manifest rozpoczynający powstanie styczniowe?",
    options: ["22 stycznia 1863 r.", "14 października 1861 r.", "18 stycznia 1871 r.", "10 maja 1871 r.", "8 maja 1863 r.", "w marcu 1864 r."],
    answer: 0,
    explanation: "Manifest ogłoszono w nocy 22 stycznia 1863 r., po decyzji o przyspieszonym wybuchu powstania."
  },
  {
    id: "R02_PSR_02",
    section: "Powstanie styczniowe i represje",
    type: "fill_in",
    prompt: "Powstanie styczniowe miało głównie charakter wojny __________.",
    options: null,
    answer: ["partyzanckiej"],
    altAnswers: [["partyzanckiej", "wojny partyzanckiej"]],
    explanation: "Powstańcy tworzyli leśne oddziały i unikali dużych starć z regularną armią rosyjską.",
    image: "r02_powstaniec_styczniowy_ekwipunek.jpg"
  },
  {
    id: "R02_PSR_03",
    section: "Powstanie styczniowe i represje",
    type: "multi_select",
    prompt: "Zaznacz obietnice lub hasła manifestu powstańczego.",
    options: ["wolność i równość obywateli bez różnicy wiary i stanu", "uwłaszczenie chłopów bez odszkodowań dla właścicieli", "odwołanie do Polski Litwy i Rusi", "utrzymanie pańszczyzny", "lojalność wobec władz pruskich", "rezygnacja z walki zbrojnej"],
    answer: [0, 1, 2],
    explanation: "Manifest odwoływał się do wspólnoty Polski, Litwy i Rusi oraz obiecywał równość obywatelską i uwłaszczenie chłopów."
  },
  {
    id: "R02_PSR_04",
    section: "Powstanie styczniowe i represje",
    type: "scenario",
    prompt: "Oddział liczy kilkuset ochotników, ma myśliwską broń, kosy i działa w lasach przeciw regularnej armii rosyjskiej. Jak najtrafniej nazwać taki sposób walki?",
    options: ["wojna partyzancka", "wojna pozycyjna", "blokada morska", "secesja", "konferencja pokojowa", "kolonizacja"],
    answer: 0,
    explanation: "Nieregularna walka małych oddziałów na tyłach lub przeciw silniejszemu przeciwnikowi to wojna partyzancka."
  },
  {
    id: "R02_PSR_05",
    section: "Powstanie styczniowe i represje",
    type: "true_false",
    prompt: "Romuald Traugutt został dyktatorem powstania w październiku 1863 r.",
    options: null,
    answer: true,
    explanation: "Traugutt podjął ostatnią próbę uporządkowania powstańczych sił i liczył na szerszy udział chłopów."
  },
  {
    id: "R02_PSR_06",
    section: "Powstanie styczniowe i represje",
    type: "match",
    prompt: "Połącz postać z informacją o powstaniu styczniowym.",
    options: null,
    left: ["Marian Langiewicz", "Romuald Traugutt", "Stanisław Brzóska", "Anna Henryka Pustowójtówna"],
    right: ["ogłosił się dyktatorem wiosną 1863 r.", "podjął ostatni wysiłek organizacyjny", "dowodził najdłużej trwającym oddziałem", "walczyła jako adiutantka w oddziałach powstańczych"],
    answer: {
      "Marian Langiewicz": "ogłosił się dyktatorem wiosną 1863 r.",
      "Romuald Traugutt": "podjął ostatni wysiłek organizacyjny",
      "Stanisław Brzóska": "dowodził najdłużej trwającym oddziałem",
      "Anna Henryka Pustowójtówna": "walczyła jako adiutantka w oddziałach powstańczych"
    },
    explanation: "Te postacie pokazują różne role w powstaniu: dowodzenie, organizację i udział ochotników."
  },
  {
    id: "R02_PSR_07",
    section: "Powstanie styczniowe i represje",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do represji po powstaniu styczniowym: zsyłki na Sybir, konfiskaty majątków, katorga, szeroka autonomia Królestwa.",
    options: null,
    answer: "szeroka autonomia Królestwa",
    explanation: "Po powstaniu carat zlikwidował resztki autonomii Królestwa Polskiego i nasilił represje."
  },
  {
    id: "R02_PSR_08",
    section: "Powstanie styczniowe i represje",
    type: "sequence",
    prompt: "Ułóż wydarzenia powstania styczniowego i jego upadku w porządku chronologicznym.",
    options: null,
    items: ["uwłaszczenie chłopów przez władze carskie", "manifest Tymczasowego Rządu Narodowego", "aresztowanie Romualda Traugutta", "objęcie dyktatury przez Traugutta"],
    answer: ["manifest Tymczasowego Rządu Narodowego", "objęcie dyktatury przez Traugutta", "uwłaszczenie chłopów przez władze carskie", "aresztowanie Romualda Traugutta"],
    explanation: "Powstanie rozpoczęło się w styczniu 1863 r., Traugutt objął dyktaturę jesienią, carat ogłosił uwłaszczenie w marcu 1864 r., a Traugutta aresztowano w kwietniu 1864 r.",
    image: "r02_traugutt_cytadela.jpg"
  },
  {
    id: "R02_PSR_09",
    section: "Powstanie styczniowe i represje",
    type: "riddle",
    prompt: "Nowa urzędowa nazwa Królestwa Polskiego używana po likwidacji resztek autonomii to...",
    options: null,
    answer: "Kraj Przywiślański",
    altAnswers: ["Kraj Przywiślański", "kraj przywislanski", "Kraj Przywislanski"],
    explanation: "Nazwa Kraj Przywiślański symbolizowała podporządkowanie Królestwa Polskiego władzom w Petersburgu."
  },
  {
    id: "R02_PSR_10",
    section: "Powstanie styczniowe i represje",
    type: "sort",
    prompt: "Przyporządkuj elementy do czasu powstania albo do okresu represji po jego upadku.",
    options: null,
    items: ["Tymczasowy Rząd Narodowy", "powstańcze partie", "zsyłki na Sybir", "Kraj Przywiślański", "uwłaszczenie obiecane chłopom", "konfiskaty majątków"],
    categories: ["czas powstania", "represje po powstaniu"],
    answer: {
      "czas powstania": ["Tymczasowy Rząd Narodowy", "powstańcze partie", "uwłaszczenie obiecane chłopom"],
      "represje po powstaniu": ["zsyłki na Sybir", "Kraj Przywiślański", "konfiskaty majątków"]
    },
    explanation: "W czasie powstania działały władze podziemne i partie leśne, a po klęsce nastąpiły zsyłki, konfiskaty i likwidacja autonomii."
  },
  {
    id: "R02_WPZ_01",
    section: "Walka o polskość w zaborach",
    type: "single_choice",
    prompt: "Jak nazywała się polityka władz rosyjskich zmierzająca do wynarodowienia Polaków?",
    options: ["rusyfikacja", "germanizacja", "autonomia", "secesja", "Kulturkampf", "kolonializm"],
    answer: 0,
    explanation: "Rusyfikacja obejmowała między innymi usuwanie języka polskiego z urzędów i szkół oraz narzucanie języka rosyjskiego."
  },
  {
    id: "R02_WPZ_02",
    section: "Walka o polskość w zaborach",
    type: "true_false",
    prompt: "Noc apuchtinowska dotyczyła szczególnie rusyfikacji szkolnictwa w Królestwie Polskim.",
    options: null,
    answer: true,
    explanation: "Określenie to wiąże się z rządami Aleksandra Apuchtina w Warszawskim Okręgu Szkolnym i represjami wobec polskich uczniów."
  },
  {
    id: "R02_WPZ_03",
    section: "Walka o polskość w zaborach",
    type: "fill_in",
    prompt: "Tajną instytucją edukacyjną w Warszawie przeznaczoną między innymi dla kobiet był Uniwersytet __________.",
    options: null,
    answer: ["Latający"],
    altAnswers: [["Latający", "Uniwersytet Latający"]],
    explanation: "Uniwersytet Latający działał nielegalnie, a wykłady odbywały się w prywatnych domach."
  },
  {
    id: "R02_WPZ_04",
    section: "Walka o polskość w zaborach",
    type: "match",
    prompt: "Połącz pojęcie z zaborami lub zjawiskami, których dotyczyło.",
    options: null,
    left: ["rusyfikacja", "germanizacja", "autonomia galicyjska", "praca organiczna"],
    right: ["zabór rosyjski", "zabór pruski", "zabór austriacki", "rozwijanie społeczeństwa przez naukę i gospodarkę"],
    answer: {
      "rusyfikacja": "zabór rosyjski",
      "germanizacja": "zabór pruski",
      "autonomia galicyjska": "zabór austriacki",
      "praca organiczna": "rozwijanie społeczeństwa przez naukę i gospodarkę"
    },
    explanation: "Każdy zabór miał inną sytuację polityczną, ale we wszystkich ważna była obrona języka i kultury."
  },
  {
    id: "R02_WPZ_05",
    section: "Walka o polskość w zaborach",
    type: "multi_select",
    prompt: "Zaznacz sposoby polskiego oporu wobec rusyfikacji.",
    options: ["tajne nauczanie", "kółka samokształceniowe", "czytanie zakazanych polskich książek", "Komisja Kolonizacyjna", "rugi pruskie", "polityka otwartych drzwi"],
    answer: [0, 1, 2],
    explanation: "W zaborze rosyjskim Polacy bronili tożsamości przez samokształcenie, tajne nauczanie i kontakt z polską literaturą.",
    image: "r02_elementarz_promyka.jpg"
  },
  {
    id: "R02_WPZ_06",
    section: "Walka o polskość w zaborach",
    type: "scenario",
    prompt: "Polski chłop nie dostaje zgody na budowę domu na kupionej ziemi, więc mieszka w wozie cyrkowym i przesuwa go, aby obejść pruskie przepisy. Kogo dotyczy ta historia?",
    options: ["Michała Drzymały", "Augusta Szamarzewskiego", "Piotra Wawrzyniaka", "Karola Miarki", "Agenora Gołuchowskiego", "Ignacego Łukasiewicza"],
    answer: 0,
    explanation: "Michał Drzymała stał się symbolem oporu wobec germanizacji i pruskiej administracji.",
    image: "r02_woz_drzymaly.jpg"
  },
  {
    id: "R02_WPZ_07",
    section: "Walka o polskość w zaborach",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do walki z germanizacją: Towarzystwo Czytelni Ludowych, spółki zarobkowe, strajki szkolne we Wrześni, Uniwersytet Latający.",
    options: null,
    answer: "Uniwersytet Latający",
    explanation: "Uniwersytet Latający działał w zaborze rosyjskim, a pozostałe przykłady dotyczą głównie zaboru pruskiego."
  },
  {
    id: "R02_WPZ_08",
    section: "Walka o polskość w zaborach",
    type: "single_choice",
    prompt: "Który zabór otrzymał w latach 60. i 70. XIX w. szeroką autonomię?",
    options: ["Galicja w zaborze austriackim", "Królestwo Polskie w zaborze rosyjskim", "Wielkopolska w zaborze pruskim", "Śląsk w cesarstwie niemieckim", "Litwa w imperium rosyjskim", "Kongo belgijskie"],
    answer: 0,
    explanation: "Po reorganizacji monarchii habsburskiej Galicja uzyskała szeroką autonomię, z polskim językiem w administracji, sądownictwie i oświacie.",
    image: "r02_sejm_krajowy_lwow.jpg"
  },
  {
    id: "R02_WPZ_09",
    section: "Walka o polskość w zaborach",
    type: "sort",
    prompt: "Przyporządkuj przykłady do zaboru.",
    options: null,
    items: ["noc apuchtinowska", "rugi pruskie", "Sejm Krajowy we Lwowie", "strajk dzieci we Wrześni", "Uniwersytet Jagielloński w autonomii", "carski uniwersytet w Warszawie"],
    categories: ["zabór rosyjski", "zabór pruski", "zabór austriacki"],
    answer: {
      "zabór rosyjski": ["noc apuchtinowska", "carski uniwersytet w Warszawie"],
      "zabór pruski": ["rugi pruskie", "strajk dzieci we Wrześni"],
      "zabór austriacki": ["Sejm Krajowy we Lwowie", "Uniwersytet Jagielloński w autonomii"]
    },
    explanation: "Rusyfikacja dotyczyła zaboru rosyjskiego, germanizacja pruskiego, a autonomia z polskimi instytucjami była cechą Galicji."
  },
  {
    id: "R02_WPZ_10",
    section: "Walka o polskość w zaborach",
    type: "sequence",
    prompt: "Ułóż wydarzenia i procesy w porządku chronologicznym.",
    options: null,
    items: ["strajk dzieci we Wrześni", "powstanie monarchii austro-węgierskiej", "rugi pruskie", "uzyskanie autonomii przez Galicję"],
    answer: ["powstanie monarchii austro-węgierskiej", "uzyskanie autonomii przez Galicję", "rugi pruskie", "strajk dzieci we Wrześni"],
    explanation: "Austro-Węgry powstały w 1867 r., autonomia Galicji rozwijała się w latach 60. i 70., rugi pruskie rozpoczęto w 1885 r., a strajk we Wrześni wybuchł w 1901 r."
  },
  {
    id: "R02_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Dlaczego Wielka Brytania prowadziła wojny w Afganistanie w XIX w.?",
    options: ["aby chronić Indie przed ekspansją rosyjską", "aby poprzeć wyprawę Garibaldiego", "aby obronić Państwo Kościelne", "aby pomóc Konfederacji", "aby zlikwidować Związek Niemiecki", "aby utworzyć Szkołę Główną"],
    answer: 0,
    explanation: "Brytyjczycy uznawali Indie za najważniejszą kolonię, dlatego zabezpieczali szlaki i pogranicze przed wpływami Rosji."
  },
  {
    id: "R02_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Królestwo Sardynii odstąpiło Francji Niceę i __________.",
    options: null,
    answer: ["Sabaudię"],
    altAnswers: [["Sabaudię", "Sabaudia"]],
    explanation: "Nicea i Sabaudia były ceną za francuskie poparcie dla sprawy włoskiej."
  },
  {
    id: "R02_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz elementy związane z wojną rosyjsko-japońską.",
    options: ["toczyła się w latach 1904-1905", "dotyczyła rywalizacji o Mandżurię", "zakończyła się przekazaniem Mandżurii Japonii", "doprowadziła do zjednoczenia Włoch", "była skutkiem branki w Królestwie Polskim", "zakończyła się pokojem w Paryżu w 1856 r."],
    answer: [0, 1, 2],
    explanation: "Rywalizacja Rosji i Japonii o Mandżurię doprowadziła do wojny 1904-1905, wygranej przez Japonię."
  },
  {
    id: "R02_HARD_04",
    section: "Super trudne",
    type: "true_false",
    prompt: "Po bitwie pod Sadową Bismarck dążył przede wszystkim do całkowitego rozbicia Austrii.",
    options: null,
    answer: false,
    explanation: "Bismarck wstrzymał ofensywę, bo chciał wymusić zgodę Austrii na likwidację Związku Niemieckiego, a nie całkowicie ją rozbić."
  },
  {
    id: "R02_HARD_05",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz nazwę z właściwym szczegółem.",
    options: null,
    left: ["Kozacy sułtańscy", "Szkoła Główna", "Hakata", "Teka Stańczyka"],
    right: ["oddziały formowane na Bałkanach przy wsparciu brytyjskim", "reaktywowana uczelnia w Warszawie", "niemieckie stowarzyszenie nacjonalistyczne", "cykl artykułów konserwatystów galicyjskich"],
    answer: {
      "Kozacy sułtańscy": "oddziały formowane na Bałkanach przy wsparciu brytyjskim",
      "Szkoła Główna": "reaktywowana uczelnia w Warszawie",
      "Hakata": "niemieckie stowarzyszenie nacjonalistyczne",
      "Teka Stańczyka": "cykl artykułów konserwatystów galicyjskich"
    },
    explanation: "To mniej oczywiste nazwy z różnych części działu: emigracyjnych planów wojny krymskiej, reform Wielopolskiego, germanizacji i Galicji."
  },
  {
    id: "R02_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia z drugiej połowy XIX wieku w porządku chronologicznym.",
    options: null,
    items: ["wojna rosyjsko-japońska", "wojna krymska", "powstanie styczniowe", "proklamowanie cesarstwa niemieckiego", "wyprawa tysiąca Garibaldiego"],
    answer: ["wojna krymska", "wyprawa tysiąca Garibaldiego", "powstanie styczniowe", "proklamowanie cesarstwa niemieckiego", "wojna rosyjsko-japońska"],
    explanation: "Wojna krymska trwała w latach 1853-1856, wyprawa tysiąca odbyła się w 1860 r., powstanie styczniowe zaczęło się w 1863 r., cesarstwo niemieckie ogłoszono w 1871 r., a wojna rosyjsko-japońska trwała w latach 1904-1905."
  },
  {
    id: "R02_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do reform Aleksandra II po klęsce Rosji w wojnie krymskiej: zniesienie poddaństwa chłopów, ograniczenie cenzury, zakaz kar cielesnych, rugi pruskie.",
    options: null,
    answer: "rugi pruskie",
    explanation: "Rugi pruskie były działaniem władz niemieckich w zaborze pruskim, a nie reformą Aleksandra II w Rosji."
  },
  {
    id: "R02_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "W marcu 1864 r. władze rosyjskie ogłaszają uwłaszczenie chłopów w Królestwie Polskim na zasadach podobnych do powstańczych. Jaki skutek miała ta decyzja dla Rządu Narodowego?",
    options: ["odebrała mu ważny atut w walce o poparcie chłopów", "natychmiast stworzyła regularną armię", "zmusiła Austrię do wyjścia z wojny", "doprowadziła do powstania Galicji", "wzmocniła Komisję Kolonizacyjną", "zakończyła wojnę secesyjną"],
    answer: 0,
    explanation: "Powstańcy chcieli przyciągnąć chłopów obietnicą uwłaszczenia, więc podobna decyzja caratu osłabiła ich wpływ."
  },
  {
    id: "R02_HARD_09",
    section: "Super trudne",
    type: "riddle",
    prompt: "Nazwa poglądu zalecającego Polakom lojalność wobec władz zaborczych i pracę u podstaw to...",
    options: null,
    answer: "trójlojalizm",
    altAnswers: ["trójlojalizm", "trojlojalizm"],
    explanation: "Trójlojalizm był programem formułowanym przez galicyjskich konserwatystów po klęsce powstania styczniowego."
  },
  {
    id: "R02_HARD_10",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który galicyjski wynalazca przeprowadził destylację ropy naftowej i zbudował lampę naftową?",
    options: ["Ignacy Łukasiewicz", "Jan Matejko", "Agenor Gołuchowski", "Franciszek Stefczyk", "Konrad Prószyński", "Karol Miarka"],
    answer: 0,
    explanation: "Ignacy Łukasiewicz w 1853 r. przeprowadził destylację ropy, zbudował lampę naftową, a później uruchomił kopalnię ropy w Bóbrce."
  },
  {
    id: "R02_HARD_11",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Największa cerkiew w Warszawie na przełomie XIX i XX w. została zbudowana na placu __________.",
    options: null,
    answer: ["Saskim"],
    altAnswers: [["Saskim", "placu Saskim", "Plac Saski"]],
    explanation: "Budowa licznych cerkwi była jednym z widocznych przejawów rusyfikacji po powstaniu styczniowym."
  },
  {
    id: "R02_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje dotyczące autonomii galicyjskiej.",
    options: ["siedzibą władz autonomicznych był Lwów", "w administracji i oświacie obowiązywał język polski", "Sejm Krajowy powoływał Wydział Krajowy", "Galicja stała się najbogatszym regionem ziem polskich", "zakazano działania polskich uczelni", "zlikwidowano polskie gimnazja"],
    answer: [0, 1, 2],
    explanation: "Autonomia dawała Galicji polskie instytucje i język w życiu publicznym, ale region pozostał gospodarczo zacofany."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Druga połowa XIX wieku",
  icon: "🌍",
  sectionOrder: [
    "Zjednoczenie państw narodowych",
    "Wojna secesyjna i kolonializm",
    "Królestwo Polskie przed powstaniem",
    "Powstanie styczniowe i represje",
    "Walka o polskość w zaborach"
  ],
  sectionIcons: {
    "Zjednoczenie państw narodowych": "🗺️",
    "Wojna secesyjna i kolonializm": "⚓",
    "Królestwo Polskie przed powstaniem": "🏛️",
    "Powstanie styczniowe i represje": "⚔️",
    "Walka o polskość w zaborach": "📚"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
