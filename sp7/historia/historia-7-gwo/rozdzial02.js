// Skroty sekcji (do identyfikatorow cwiczen):
//   ZWN  = Zjednoczenie Wloch i Niemiec
//   SEC  = Wojna secesyjna
//   KOL  = Kolonializm i imperializm
//   IDE  = Nowe idee w Europie
//   PAR  = Polskie partie polityczne
//   REW  = Rewolucja 1905 roku i orientacje
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R02_ZWN_01",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "single_choice",
    prompt: "Które państwo miało odegrać główną rolę w zjednoczeniu Włoch?",
    options: ["Piemont", "Państwo Kościelne", "Królestwo Obojga Sycylii", "Austria", "Francja", "Prusy"],
    answer: 0,
    image: "r02_podzielone_wlochy.jpg",
    explanation: "Wielu Włochów liczyło na Piemont, ponieważ był najsilniejszym państwem włoskim i miał ustrój monarchii konstytucyjnej."
  },
  {
    id: "R02_ZWN_02",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "true_false",
    prompt: "Po kongresie wiedeńskim Wenecja i Mediolan znajdowały się pod panowaniem Austrii.",
    options: null,
    answer: true,
    explanation: "Północno-wschodnia część Włoch, w tym Wenecja i Mediolan, należała po kongresie wiedeńskim do Austrii."
  },
  {
    id: "R02_ZWN_03",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "fill_in",
    prompt: "W 1859 r. Piemont zawarł sojusz z __________ przeciwko Austrii.",
    options: null,
    answer: ["Francją"],
    altAnswers: [["Francją", "Francja"]],
    explanation: "Camillo Cavour zawarł sojusz obronny z Francją, a następnie sprowokował Austrię do wojny."
  },
  {
    id: "R02_ZWN_04",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "sequence",
    prompt: "Ułóż etapy zjednoczenia Włoch w kolejności chronologicznej.",
    options: null,
    items: ["Rzym zostaje stolicą Włoch", "Powiększenie Piemontu po wojnie z Austrią", "Wyprawa tysiąca i powstanie Królestwa Włoch", "Przyłączenie regionu Wenecji"],
    answer: ["Powiększenie Piemontu po wojnie z Austrią", "Wyprawa tysiąca i powstanie Królestwa Włoch", "Przyłączenie regionu Wenecji", "Rzym zostaje stolicą Włoch"],
    image: "r02_mapa_zjednoczenia_wloch.jpg",
    explanation: "Najpierw Piemont powiększył się po wojnie 1859 r., potem wyprawa Garibaldiego doprowadziła do ogłoszenia Królestwa Włoch w 1861 r., w 1866 r. przyłączono Wenecję, a w 1871 r. Rzym został stolicą."
  },
  {
    id: "R02_ZWN_05",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "riddle",
    prompt: "Włoski przywódca wyprawy tysiąca i dowódca czerwonych koszul to...",
    options: null,
    answer: "Giuseppe Garibaldi",
    altAnswers: ["Giuseppe Garibaldi", "Garibaldi"],
    explanation: "Giuseppe Garibaldi poprowadził wyprawę tysiąca, która opanowała Sycylię i przyczyniła się do zjednoczenia południowych Włoch z Piemontem."
  },
  {
    id: "R02_ZWN_06",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "multi_select",
    prompt: "Zaznacz wojny wykorzystane przez Bismarcka w procesie zjednoczenia Niemiec.",
    options: ["Wojna o Szlezwik i Holsztyn", "Wojna austriacko-pruska", "Wojna francusko-pruska", "Wojna krymska", "Wojna secesyjna"],
    answer: [0, 1, 2],
    explanation: "Zjednoczenie Niemiec nastąpiło po trzech zwycięskich wojnach Prus: z Danią o Szlezwik i Holsztyn, z Austrią oraz z Francją."
  },
  {
    id: "R02_ZWN_07",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "scenario",
    prompt: "Styczeń 1871 r. W pałacu wersalskim niemieccy książęta i generałowie ogłaszają króla Wilhelma I cesarzem. Jakie państwo powstaje?",
    options: ["Cesarstwo Niemieckie", "Związek Niemiecki", "Austro-Węgry", "Królestwo Włoch", "Konfederacja", "Związek Północnoniemiecki"],
    answer: 0,
    image: "r02_wersal_cesarstwo_niemieckie.jpg",
    explanation: "W Wersalu powołano do życia Cesarstwo Niemieckie, zwane także drugą Rzeszą Niemiecką."
  },
  {
    id: "R02_ZWN_08",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "match",
    prompt: "Połącz wydarzenie z rokiem.",
    options: null,
    left: ["Bitwa pod Solferino", "Powstanie Królestwa Włoch", "Wojna austriacko-pruska", "Rzym stolicą Włoch"],
    right: ["1859", "1861", "1866", "1871"],
    answer: {
      "Bitwa pod Solferino": "1859",
      "Powstanie Królestwa Włoch": "1861",
      "Wojna austriacko-pruska": "1866",
      "Rzym stolicą Włoch": "1871"
    },
    image: "r02_mapa_zjednoczenia_wloch.jpg",
    explanation: "Daty te wyznaczają najważniejsze etapy zjednoczenia Włoch i Niemiec."
  },
  {
    id: "R02_ZWN_09",
    section: "Zjednoczenie Włoch i Niemiec",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych: Austria, Francja, Prusy, Piemont.",
    options: null,
    answer: "Piemont",
    explanation: "Piemont był włoskim państwem dążącym do zjednoczenia, natomiast Austria, Francja i Prusy były mocarstwami wpływającymi na przebieg procesów zjednoczeniowych."
  },
  {
    id: "R02_SEC_01",
    section: "Wojna secesyjna",
    type: "single_choice",
    prompt: "Jaka gałąź gospodarki była podstawą rolniczego Południa USA przed wojną secesyjną?",
    options: ["Uprawa bawełny", "Hutnictwo żelaza", "Produkcja maszyn", "Rybołówstwo oceaniczne", "Wydobycie diamentów", "Handel herbatą"],
    answer: 0,
    image: "r02_plantacja_bawelny.jpg",
    explanation: "Na Południu podstawą gospodarki było wielkoobszarowe rolnictwo, szczególnie uprawa bawełny na plantacjach."
  },
  {
    id: "R02_SEC_02",
    section: "Wojna secesyjna",
    type: "multi_select",
    prompt: "Zaznacz cechy Północy USA w połowie XIX w.",
    options: ["Skupiała około 80% przemysłu", "Przyciągała emigrantów z Europy", "Opierała gospodarkę na plantacjach bawełny", "W większości jej stanów niewolnictwo już nie istniało", "Tworzyła Konfederację"],
    answer: [0, 1, 3],
    image: "r02_plantacja_bawelny.jpg",
    explanation: "Północ była przemysłowa, miejska i przyciągała emigrantów, a niewolnictwo w większości północnych stanów zniesiono już wcześniej."
  },
  {
    id: "R02_SEC_03",
    section: "Wojna secesyjna",
    type: "riddle",
    prompt: "Ruch domagający się zakazu handlu ludźmi i posiadania niewolników to...",
    options: null,
    answer: "abolicjonizm",
    altAnswers: ["abolicjonizm", "ruch abolicjonistyczny"],
    explanation: "Abolicjonizm rozwinął się w Europie i Ameryce jako sprzeciw wobec niewolnictwa."
  },
  {
    id: "R02_SEC_04",
    section: "Wojna secesyjna",
    type: "true_false",
    prompt: "Abraham Lincoln sprzeciwiał się rozszerzaniu niewolnictwa, ale za swój główny cel uznał utrzymanie Unii.",
    options: null,
    answer: true,
    explanation: "Lincoln reprezentował interesy Północy i sprzeciwiał się rozszerzaniu niewolnictwa, lecz najważniejsze było dla niego zachowanie związku wszystkich stanów."
  },
  {
    id: "R02_SEC_05",
    section: "Wojna secesyjna",
    type: "fill_in",
    prompt: "W grudniu 1860 r. secesję jako pierwsza ogłosiła __________.",
    options: null,
    answer: ["Karolina Południowa"],
    altAnswers: [["Karolina Południowa", "Karolina Poludniowa"]],
    explanation: "Karolina Południowa jako pierwsza wystąpiła z Unii, a w ślad za nią poszły kolejne stany Południa."
  },
  {
    id: "R02_SEC_06",
    section: "Wojna secesyjna",
    type: "sequence",
    prompt: "Ułóż wydarzenia wojny secesyjnej w kolejności chronologicznej.",
    options: null,
    items: ["Kapitulacja wojsk Konfederacji", "Proklamacja znosząca niewolnictwo", "Ostrzelanie Fortu Sumter", "Taktyka spalonej ziemi Shermana", "Zwycięstwo Unii pod Gettysburgiem"],
    answer: ["Ostrzelanie Fortu Sumter", "Proklamacja znosząca niewolnictwo", "Zwycięstwo Unii pod Gettysburgiem", "Taktyka spalonej ziemi Shermana", "Kapitulacja wojsk Konfederacji"],
    image: "r02_fort_sumter.jpg",
    explanation: "Wojna zaczęła się od Fortu Sumter w 1861 r., w 1863 r. ogłoszono proklamację i Unia wygrała pod Gettysburgiem, w 1864 r. Sherman zastosował taktykę spalonej ziemi, a w 1865 r. Konfederacja skapitulowała."
  },
  {
    id: "R02_SEC_07",
    section: "Wojna secesyjna",
    type: "sort",
    prompt: "Przyporządkuj elementy do stron wojny secesyjnej.",
    options: null,
    items: ["23 stany Północy", "11 stanów Południa", "walka o utrzymanie państwa", "walka o niepodległe państwo", "Robert Lee"],
    categories: ["Unia", "Konfederacja"],
    answer: {
      "Unia": ["23 stany Północy", "walka o utrzymanie państwa"],
      "Konfederacja": ["11 stanów Południa", "walka o niepodległe państwo", "Robert Lee"]
    },
    explanation: "Unia obejmowała 23 stany Północy i walczyła o utrzymanie USA, a Konfederacja składała się z 11 stanów Południa i walczyła o własne państwo."
  },
  {
    id: "R02_SEC_08",
    section: "Wojna secesyjna",
    type: "match",
    prompt: "Połącz pojęcie z objaśnieniem.",
    options: null,
    left: ["federacja", "secesja", "Konfederacja", "taktyka spalonej ziemi"],
    right: ["państwo z autonomicznych części", "odłączenie od Unii", "państwo utworzone przez Południe", "niszczenie zasobów przydatnych przeciwnikowi"],
    answer: {
      "federacja": "państwo z autonomicznych części",
      "secesja": "odłączenie od Unii",
      "Konfederacja": "państwo utworzone przez Południe",
      "taktyka spalonej ziemi": "niszczenie zasobów przydatnych przeciwnikowi"
    },
    image: "r02_mapa_unii_konfederacji.jpg",
    explanation: "Te pojęcia opisują ustrój USA, odłączenie stanów Południa, ich nowe państwo oraz sposób walki zastosowany przez wojska Unii."
  },
  {
    id: "R02_SEC_09",
    section: "Wojna secesyjna",
    type: "scenario",
    prompt: "Jesteś mieszkańcem Południa po 1865 r. Niewolnictwo zniesiono, ale lokalne przepisy oddzielają czarnych i białych w życiu publicznym. Jak nazywa się taki system?",
    options: ["Segregacja rasowa", "Abolicjonizm", "Federacja", "Powszechne prawo wyborcze", "Pośrednie panowanie", "Socjaldemokracja"],
    answer: 0,
    explanation: "Po wojnie w południowych stanach utrzymał się rasizm i wprowadzono segregację rasową."
  },
  {
    id: "R02_KOL_01",
    section: "Kolonializm i imperializm",
    type: "single_choice",
    prompt: "Jak nazywa się proces tworzenia i utrzymywania kolonii?",
    options: ["Kolonializm", "Abolicjonizm", "Socjalizm", "Nacjonalizm", "Sekularyzacja", "Federalizm"],
    answer: 0,
    image: "r02_kolonialna_mapa_swiata.jpg",
    explanation: "Kolonializm to proces tworzenia i utrzymywania kolonii, trwający od XVI do XX w."
  },
  {
    id: "R02_KOL_02",
    section: "Kolonializm i imperializm",
    type: "multi_select",
    prompt: "Zaznacz przyczyny rozwoju kolonializmu w XIX w.",
    options: ["Zapotrzebowanie na surowce", "Poszukiwanie rynków zbytu", "Ambicje mocarstwowe", "Chęć zmniejszenia liczby kolonii", "Pragnienie nawracania innych ludów na chrześcijaństwo"],
    answer: [0, 1, 2, 4],
    explanation: "Europejczycy szukali surowców, rynków zbytu, prestiżu mocarstwowego i uzasadniali podboje poczuciem misji."
  },
  {
    id: "R02_KOL_03",
    section: "Kolonializm i imperializm",
    type: "riddle",
    prompt: "Dążenie do budowy i utrzymania imperiów w epoce nowożytnej to...",
    options: null,
    answer: "imperializm",
    altAnswers: ["imperializm"],
    explanation: "Imperializm oznaczał dążenie do budowy i utrzymania imperiów, szczególnie w XIX i XX w."
  },
  {
    id: "R02_KOL_04",
    section: "Kolonializm i imperializm",
    type: "sort",
    prompt: "Przyporządkuj przykłady do sposobów budowy imperiów kolonialnych.",
    options: null,
    items: ["podbój Indii", "opanowanie niezajętych obszarów Afryki", "strefy wpływów w Chinach", "pośrednie panowanie"],
    categories: ["bezpośredni podbój", "opanowanie obszarów", "uzależnienie pozornie niepodległego państwa"],
    answer: {
      "bezpośredni podbój": ["podbój Indii"],
      "opanowanie obszarów": ["opanowanie niezajętych obszarów Afryki"],
      "uzależnienie pozornie niepodległego państwa": ["strefy wpływów w Chinach", "pośrednie panowanie"]
    },
    explanation: "Indie podbito wojskowo, wiele obszarów Afryki przejęto przez umowy lub zajęcie, a Chiny formalnie pozostały niepodległe, lecz zostały uzależnione."
  },
  {
    id: "R02_KOL_05",
    section: "Kolonializm i imperializm",
    type: "true_false",
    prompt: "W 1914 r. ponad połowa lądów na kuli ziemskiej znajdowała się w rękach Europejczyków.",
    options: null,
    answer: true,
    image: "r02_kolonialna_mapa_swiata.jpg",
    explanation: "Skutkiem XIX-wiecznego kolonializmu był podział świata między kilka mocarstw; w 1914 r. Europejczycy kontrolowali ponad połowę lądów."
  },
  {
    id: "R02_KOL_06",
    section: "Kolonializm i imperializm",
    type: "single_choice",
    prompt: "Które państwo było w XIX w. najpotężniejszym mocarstwem kolonialnym?",
    options: ["Wielka Brytania", "Belgia", "Włochy", "Portugalia", "Japonia", "USA"],
    answer: 0,
    explanation: "Imperium Brytyjskie obejmowało m.in. Indie, Kanadę, Australię, Nową Zelandię i wielkie obszary Afryki, a Wielka Brytania była najpotężniejszym mocarstwem świata."
  },
  {
    id: "R02_KOL_07",
    section: "Kolonializm i imperializm",
    type: "fill_in",
    prompt: "Jednym z największych osiągnięć technicznych XIX w. był Kanał __________ w Egipcie.",
    options: null,
    answer: ["Sueski"],
    altAnswers: [["Sueski", "Sueskiego"]],
    image: "r02_kanal_sueski.jpg",
    explanation: "Kanał Sueski połączył Morze Śródziemne z Morzem Czerwonym i należał do najważniejszych osiągnięć technicznych XIX w."
  },
  {
    id: "R02_KOL_08",
    section: "Kolonializm i imperializm",
    type: "scenario",
    prompt: "Rok 1898. Brytyjczycy pod Omdurmanem używają karabinów maszynowych przeciw powstańcom Mahdiego. Co najlepiej wyjaśnia ich zwycięstwo?",
    options: ["Przewaga technologiczna i wojskowa", "Poparcie wszystkich mieszkańców Sudanu", "Brak zaopatrzenia armii brytyjskiej", "Rezygnacja z użycia kolei", "Pomoc Konfederacji", "Plebiscyt w Sudanie"],
    answer: 0,
    image: "r02_omdurman.jpg",
    explanation: "Brytyjczycy wykorzystali kolej, sprawne zaopatrzenie i karabiny maszynowe, co dało im ogromną przewagę nad powstańcami."
  },
  {
    id: "R02_KOL_09",
    section: "Kolonializm i imperializm",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych: miedź, cyna, diamenty, powszechne prawo wyborcze.",
    options: null,
    answer: "powszechne prawo wyborcze",
    explanation: "Miedź, cyna i diamenty były surowcami poszukiwanymi przez mocarstwa kolonialne; powszechne prawo wyborcze należy do przemian politycznych w Europie."
  },
  {
    id: "R02_IDE_01",
    section: "Nowe idee w Europie",
    type: "single_choice",
    prompt: "Jak nazywano załamania gospodarki wywoływane przez nadprodukcję?",
    options: ["Kryzysy gospodarcze", "Plebiscyty", "Koalicje", "Secesje", "Federacje", "Protektoraty"],
    answer: 0,
    image: "r02_strajk_robotnikow.jpg",
    explanation: "Nadprodukcja prowadziła do kryzysów gospodarczych, których objawami były bankructwa, zamykanie przedsiębiorstw i wzrost bezrobocia."
  },
  {
    id: "R02_IDE_02",
    section: "Nowe idee w Europie",
    type: "multi_select",
    prompt: "Zaznacz przyczyny rozwoju socjalizmu w XIX w.",
    options: ["Nadprodukcja i kryzysy gospodarcze", "Niesprawiedliwość społeczna", "Powszechna zgoda robotników z fabrykantami", "Bogacenie się właścicieli fabryk przy niskich płacach robotników", "Zniesienie wszystkich partii politycznych"],
    answer: [0, 1, 3],
    image: "r02_strajk_robotnikow.jpg",
    explanation: "Socjalizm wyrastał z kryzysów uderzających w robotników i z poczucia niesprawiedliwości między biednymi a bogatymi."
  },
  {
    id: "R02_IDE_03",
    section: "Nowe idee w Europie",
    type: "riddle",
    prompt: "Skrajna odmiana socjalizmu, nawołująca do likwidacji państw i budowy społeczeństwa bezklasowego, to...",
    options: null,
    answer: "komunizm",
    altAnswers: ["komunizm"],
    explanation: "Komunizm był skrajną odmianą socjalizmu zakładającą społeczeństwo bez klas i bez państw."
  },
  {
    id: "R02_IDE_04",
    section: "Nowe idee w Europie",
    type: "match",
    prompt: "Połącz pojęcie z objaśnieniem.",
    options: null,
    left: ["koncern", "monopol", "proletariat", "burżuazja"],
    right: ["zjednoczenie przedsiębiorstw ze wspólnym właścicielem", "opanowanie produkcji towaru", "klasa robotnicza", "kapitaliści w teorii Marksa"],
    answer: {
      "koncern": "zjednoczenie przedsiębiorstw ze wspólnym właścicielem",
      "monopol": "opanowanie produkcji towaru",
      "proletariat": "klasa robotnicza",
      "burżuazja": "kapitaliści w teorii Marksa"
    },
    explanation: "Te pojęcia opisują przemiany gospodarcze oraz język, którym marksizm wyjaśniał konflikt społeczny."
  },
  {
    id: "R02_IDE_05",
    section: "Nowe idee w Europie",
    type: "true_false",
    prompt: "Marksizm głosił, że o dziejach ludzkości decyduje walka klas.",
    options: null,
    answer: true,
    explanation: "Karol Marks uważał, że historia jest walką klas wyzyskiwanych z wyzyskiwaczami."
  },
  {
    id: "R02_IDE_06",
    section: "Nowe idee w Europie",
    type: "fill_in",
    prompt: "Powszechne prawo wyborcze dla mężczyzn wprowadzano w Europie od Wiosny Ludów do roku __________.",
    options: null,
    answer: ["1918"],
    altAnswers: [["1918", "1918 r."]],
    explanation: "W Europie wprowadzanie powszechnego prawa wyborczego dla mężczyzn trwało od 1848 do 1918 r."
  },
  {
    id: "R02_IDE_07",
    section: "Nowe idee w Europie",
    type: "sort",
    prompt: "Przyporządkuj pojęcia do dziedziny przemian.",
    options: null,
    items: ["związki zawodowe", "partie polityczne", "powszechne prawo wyborcze", "ubezpieczenia społeczne", "strajki głodowe sufrażystek"],
    categories: ["robotnicy", "demokracja", "prawa kobiet"],
    answer: {
      "robotnicy": ["związki zawodowe", "ubezpieczenia społeczne"],
      "demokracja": ["partie polityczne", "powszechne prawo wyborcze"],
      "prawa kobiet": ["strajki głodowe sufrażystek"]
    },
    explanation: "Poprawa sytuacji robotników wiązała się m.in. ze związkami i ubezpieczeniami, demokracja z partiami i wyborami, a sufrażystki walczyły o prawa kobiet."
  },
  {
    id: "R02_IDE_08",
    section: "Nowe idee w Europie",
    type: "scenario",
    prompt: "Początek XX w. Brytyjskie działaczki demonstrują pod parlamentem, wybijają szyby i podejmują strajki głodowe. O jakie prawo walczą?",
    options: ["Prawo wyborcze kobiet", "Zniesienie ceł", "Secesję Południa", "Budowę Kanału Sueskiego", "Autonomię Piemontu", "Pośrednie panowanie"],
    answer: 0,
    image: "r02_sufrazystki.jpg",
    explanation: "Brytyjskie sufrażystki prowadziły kampanię o prawa wyborcze kobiet."
  },
  {
    id: "R02_IDE_09",
    section: "Nowe idee w Europie",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych: wolność słowa, wolność zrzeszania się, powszechne prawo wyborcze, wyprawa tysiąca.",
    options: null,
    answer: "wyprawa tysiąca",
    explanation: "Pierwsze trzy hasła dotyczą demokratyzacji Europy, a wyprawa tysiąca była etapem zjednoczenia Włoch."
  },
  {
    id: "R02_PAR_01",
    section: "Polskie partie polityczne",
    type: "single_choice",
    prompt: "Co oznaczała świadomość narodowa w społeczeństwie polskim pod zaborami?",
    options: ["Poczucie przynależności do narodu polskiego", "Udział w wojnie secesyjnej", "Prawo do posiadania kolonii", "Przyjęcie obywatelstwa brytyjskiego", "Zgoda na rusyfikację", "Członkostwo w Konfederacji"],
    answer: 0,
    explanation: "Świadomość narodowa to poczucie przynależności do narodu polskiego; wielu chłopów długo uważało się po prostu za tutejszych."
  },
  {
    id: "R02_PAR_02",
    section: "Polskie partie polityczne",
    type: "fill_in",
    prompt: "W 1870 r. na ziemiach dawnej Rzeczpospolitej mieszkało 10 milionów Polaków, a w 1914 r. około __________ milionów.",
    options: null,
    answer: ["20"],
    altAnswers: [["20", "dwudziestu", "około 20"]],
    explanation: "Mimo germanizacji i rusyfikacji liczba Polaków wzrosła z 10 milionów w 1870 r. do około 20 milionów w 1914 r."
  },
  {
    id: "R02_PAR_03",
    section: "Polskie partie polityczne",
    type: "riddle",
    prompt: "Uprzedzenie lub wrogość wobec Żydów to...",
    options: null,
    answer: "antysemityzm",
    altAnswers: ["antysemityzm"],
    explanation: "Antysemityzm w XIX w. wynikał m.in. z nacjonalizmu oraz rywalizacji ekonomicznej Polaków i Żydów."
  },
  {
    id: "R02_PAR_04",
    section: "Polskie partie polityczne",
    type: "match",
    prompt: "Połącz partię z działaczem.",
    options: null,
    left: ["Narodowa Demokracja", "Polska Partia Socjalistyczna", "SDKPiL", "Polskie Stronnictwo Ludowe"],
    right: ["Roman Dmowski", "Józef Piłsudski", "Róża Luksemburg", "Wincenty Witos"],
    answer: {
      "Narodowa Demokracja": "Roman Dmowski",
      "Polska Partia Socjalistyczna": "Józef Piłsudski",
      "SDKPiL": "Róża Luksemburg",
      "Polskie Stronnictwo Ludowe": "Wincenty Witos"
    },
    explanation: "Dmowski przewodził endecji, Piłsudski był związany z PPS, Luksemburg z SDKPiL, a Witos z ruchem ludowym."
  },
  {
    id: "R02_PAR_05",
    section: "Polskie partie polityczne",
    type: "multi_select",
    prompt: "Zaznacz cele Narodowej Demokracji.",
    options: ["Autonomia Polaków w zaborach pruskim i rosyjskim", "Kierowanie całym życiem narodowym pod zaborami", "Budowa Polski dla Polaków", "Likwidacja państw narodowych", "Ośmiogodzinny dzień roboczy jako główny postulat robotniczy"],
    answer: [0, 1, 2],
    explanation: "Narodowa Demokracja dążyła do autonomii, kierowania życiem narodowym i budowy jednonarodowej Polski dla Polaków."
  },
  {
    id: "R02_PAR_06",
    section: "Polskie partie polityczne",
    type: "sort",
    prompt: "Przyporządkuj postulaty do partii.",
    options: null,
    items: ["Polska dla Polaków", "równość obywateli", "rewolucja likwidująca kapitalizm", "oświata dla chłopów", "poprawa warunków życia robotników"],
    categories: ["ND", "PPS", "SDKPiL", "PSL"],
    answer: {
      "ND": ["Polska dla Polaków"],
      "PPS": ["równość obywateli", "poprawa warunków życia robotników"],
      "SDKPiL": ["rewolucja likwidująca kapitalizm"],
      "PSL": ["oświata dla chłopów"]
    },
    image: "r02_polskie_partie.jpg",
    explanation: "Programy partii różniły się: endecja była nacjonalistyczna, PPS socjalistyczna i niepodległościowa, SDKPiL rewolucyjna, a PSL ludowe."
  },
  {
    id: "R02_PAR_07",
    section: "Polskie partie polityczne",
    type: "true_false",
    prompt: "SDKPiL uznawała walkę o wolną Polskę za przeszkodę we wspólnej walce robotników różnych narodowości o socjalizm.",
    options: null,
    answer: true,
    explanation: "Róża Luksemburg i Feliks Dzierżyński odrzucali postulat niepodległości, ponieważ ich zdaniem utrudniał on wspólną walkę robotników o socjalizm."
  },
  {
    id: "R02_PAR_08",
    section: "Polskie partie polityczne",
    type: "scenario",
    prompt: "Jesteś chłopem z Galicji w 1903 r. Interesuje cię partia domagająca się poprawy warunków życia wsi, dostępu do oświaty i poszerzenia praw wyborczych. Które ugrupowanie wybierasz?",
    options: ["Polskie Stronnictwo Ludowe", "Narodowa Demokracja", "SDKPiL", "Polska Partia Socjalistyczna", "Ku Klux Klan", "Związek Północnoniemiecki"],
    answer: 0,
    explanation: "PSL było partią ludową, która domagała się poprawy warunków życia chłopów, oświaty, praw wyborczych i demokratyzacji państwa."
  },
  {
    id: "R02_PAR_09",
    section: "Polskie partie polityczne",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych: Roman Dmowski, Józef Piłsudski, Wincenty Witos, Abraham Lincoln.",
    options: null,
    answer: "Abraham Lincoln",
    explanation: "Dmowski, Piłsudski i Witos byli działaczami polskich partii politycznych, a Abraham Lincoln był prezydentem USA w czasie wojny secesyjnej."
  },
  {
    id: "R02_REW_01",
    section: "Rewolucja 1905 roku i orientacje",
    type: "multi_select",
    prompt: "Zaznacz przyczyny rewolucji 1905 r. w Rosji i Królestwie Polskim.",
    options: ["Wysokie podatki, wyzysk i brak wolności", "Klęska Rosji w wojnie z Japonią", "Rusyfikacja i brak autonomii w Królestwie Polskim", "Zwycięstwo Prus pod Sadową", "Otwarcie Kanału Sueskiego"],
    answer: [0, 1, 2],
    explanation: "Rewolucję wywołały powszechne niezadowolenie, słabość Rosji po wojnie z Japonią oraz rusyfikacja i brak autonomii w Królestwie Polskim."
  },
  {
    id: "R02_REW_02",
    section: "Rewolucja 1905 roku i orientacje",
    type: "single_choice",
    prompt: "Jakie wydarzenie było bezpośrednią przyczyną wybuchu rewolucji 1905 r.?",
    options: ["Krwawa niedziela w Petersburgu", "Bitwa pod Gettysburgiem", "Wyprawa tysiąca", "Otwarcie Kanału Sueskiego", "Utworzenie SDKPiL", "Bitwa pod Omdurmanem"],
    answer: 0,
    image: "r02_rewolucja_1905_strajk.jpg",
    explanation: "Bezpośrednią przyczyną wybuchu rewolucji była krwawa niedziela w Petersburgu w styczniu 1905 r."
  },
  {
    id: "R02_REW_03",
    section: "Rewolucja 1905 roku i orientacje",
    type: "sequence",
    prompt: "Ułóż wydarzenia rewolucji 1905 r. w Królestwie Polskim w kolejności chronologicznej.",
    options: null,
    items: ["Porażka rewolucji", "Strajki robotników Królestwa", "Strajk powszechny w Rosji", "Wprowadzenie stanu wojennego", "Strajk szkolny"],
    answer: ["Strajki robotników Królestwa", "Strajk szkolny", "Strajk powszechny w Rosji", "Wprowadzenie stanu wojennego", "Porażka rewolucji"],
    explanation: "Najpierw były strajki robotnicze i szkolne, potem strajk powszechny i ustępstwa cara, następnie stan wojenny, a w czerwcu 1907 r. rewolucja zakończyła się porażką."
  },
  {
    id: "R02_REW_04",
    section: "Rewolucja 1905 roku i orientacje",
    type: "fill_in",
    prompt: "W październiku 1905 r. car powołał Dumę, czyli rosyjski __________.",
    options: null,
    answer: ["parlament"],
    altAnswers: [["parlament"]],
    image: "r02_rewolucja_1905_strajk.jpg",
    explanation: "Po strajku powszechnym car zgodził się na reformy i powołał Dumę, czyli rosyjski parlament."
  },
  {
    id: "R02_REW_05",
    section: "Rewolucja 1905 roku i orientacje",
    type: "true_false",
    prompt: "W listopadzie 1905 r. w Królestwie Polskim wprowadzono stan wojenny.",
    options: null,
    answer: true,
    explanation: "Stan wojenny zawiesił wolność słowa i zgromadzeń, a wystąpienia robotnicze uznano za nielegalne."
  },
  {
    id: "R02_REW_06",
    section: "Rewolucja 1905 roku i orientacje",
    type: "match",
    prompt: "Połącz wydarzenie ze skutkiem.",
    options: null,
    left: ["strajki robotników", "strajk szkolny", "strajk powszechny", "porażka rewolucji"],
    right: ["podwyżki płac i skrócenie czasu pracy", "nauczanie polskiego w szkołach", "wolność słowa, zgromadzeń i związków zawodowych", "cofnięcie wielu swobód"],
    answer: {
      "strajki robotników": "podwyżki płac i skrócenie czasu pracy",
      "strajk szkolny": "nauczanie polskiego w szkołach",
      "strajk powszechny": "wolność słowa, zgromadzeń i związków zawodowych",
      "porażka rewolucji": "cofnięcie wielu swobód"
    },
    explanation: "Strajki przyniosły ustępstwa, ale po porażce rewolucji car część swobód cofnął."
  },
  {
    id: "R02_REW_07",
    section: "Rewolucja 1905 roku i orientacje",
    type: "single_choice",
    prompt: "Kto stał na czele orientacji proaustriackiej przed I wojną światową?",
    options: ["Józef Piłsudski", "Roman Dmowski", "Wincenty Witos", "Karol Marks", "Otto von Bismarck", "Abraham Lincoln"],
    answer: 0,
    explanation: "Orientacji proaustriackiej przewodził Józef Piłsudski, związany z PPS."
  },
  {
    id: "R02_REW_08",
    section: "Rewolucja 1905 roku i orientacje",
    type: "sort",
    prompt: "Przyporządkuj elementy do orientacji niepodległościowych.",
    options: null,
    items: ["Józef Piłsudski", "Roman Dmowski", "poparcie Austro-Węgier", "poparcie Rosji", "drużyny strzeleckie w Galicji", "zjednoczenie ziem polskich pod berłem cara"],
    categories: ["orientacja proaustriacka", "orientacja prorosyjska"],
    answer: {
      "orientacja proaustriacka": ["Józef Piłsudski", "poparcie Austro-Węgier", "drużyny strzeleckie w Galicji"],
      "orientacja prorosyjska": ["Roman Dmowski", "poparcie Rosji", "zjednoczenie ziem polskich pod berłem cara"]
    },
    explanation: "Piłsudski i PPS stawiali na Austro-Węgry, a Dmowski i ND na Rosję oraz jej sprzymierzeńców."
  },
  {
    id: "R02_REW_09",
    section: "Rewolucja 1905 roku i orientacje",
    type: "scenario",
    prompt: "Polityk uważa, że po wybuchu wojny trzeba wkroczyć do zaboru rosyjskiego, wywołać powstanie i stworzyć zalążek niepodległego państwa. Jaką orientację reprezentuje?",
    options: ["Proaustriacką", "Prorosyjską", "Kolonialną", "Abolicjonistyczną", "Endecką ugodę z Rosją", "Konfederacką"],
    answer: 0,
    explanation: "Taki plan wiązał się z orientacją proaustriacką Józefa Piłsudskiego."
  },
  {
    id: "R02_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który region Piemont uzyskał po pokoju zawartym przez Napoleona III z Austrią w 1859 r.?",
    options: ["Lombardię", "Wenecję", "Sycylię", "Rzym", "Holsztyn", "Alzację"],
    answer: 0,
    explanation: "Napoleon III zgodził się tylko na przyłączenie do Piemontu Lombardii, czyli regionu otaczającego Mediolan."
  },
  {
    id: "R02_HARD_02",
    section: "Super trudne",
    type: "scenario",
    prompt: "Władca Austrii po klęsce w wojnie z Prusami przekształca państwo w 1867 r., nadając Węgrom takie same prawa jak Austriakom. Jak nazywało się to państwo po zmianie?",
    options: ["Austro-Węgry", "Związek Niemiecki", "Cesarstwo Niemieckie", "Państwo Kościelne", "Królestwo Sardynii", "Konfederacja"],
    answer: 0,
    explanation: "Po przegranej z Prusami cesarz Austrii przekształcił państwo w Austro-Węgry, choć inne narody, w tym Polacy, pominięto."
  },
  {
    id: "R02_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz liczbę z informacją z wojny secesyjnej.",
    options: null,
    left: ["3,5 miliona", "7%", "23 stany", "11 stanów"],
    right: ["liczba niewolników na Południu w 1860 r.", "odsetek białych mieszkańców Południa posiadających niewolników", "Unia", "Konfederacja"],
    answer: {
      "3,5 miliona": "liczba niewolników na Południu w 1860 r.",
      "7%": "odsetek białych mieszkańców Południa posiadających niewolników",
      "23 stany": "Unia",
      "11 stanów": "Konfederacja"
    },
    explanation: "Te liczby pokazują skalę niewolnictwa i układ sił między Unią a Konfederacją."
  },
  {
    id: "R02_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Plan blokady portów Konfederacji opracowany przez Winfielda Scotta nazywano planem __________.",
    options: null,
    answer: ["Anakonda"],
    altAnswers: [["Anakonda", "anakonda", "plan Anakonda"]],
    explanation: "Plan Anakonda zakładał zduszenie Konfederacji przez blokadę jej portów, co zmniejszyło eksport bawełny."
  },
  {
    id: "R02_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W której bitwie Brytyjczycy w 1898 r. rozgromili powstańców Mahdiego dzięki przewadze technologicznej?",
    options: ["Pod Omdurmanem", "Pod Sedanem", "Pod Sadową", "Pod Solferino", "Pod Gettysburgiem", "Pod Fortem Sumter"],
    answer: 0,
    image: "r02_omdurman.jpg",
    explanation: "W bitwie pod Omdurmanem Brytyjczycy użyli m.in. karabinów maszynowych, zadając powstańcom ogromne straty."
  },
  {
    id: "R02_HARD_06",
    section: "Super trudne",
    type: "true_false",
    prompt: "W 1900 r. prawie jedna czwarta lądów świata była częścią Imperium Brytyjskiego.",
    options: null,
    answer: true,
    explanation: "Imperium Brytyjskie było oznaczane na mapach czerwonym kolorem; w 1900 r. obejmowało niemal czwartą część lądów globu."
  },
  {
    id: "R02_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych: papier, kompas, proch, Kanał Sueski.",
    options: null,
    answer: "Kanał Sueski",
    explanation: "Papier, kompas i proch były znane w Chinach wcześniej niż w Europie; Kanał Sueski był XIX-wiecznym osiągnięciem technicznym w Egipcie."
  },
  {
    id: "R02_HARD_08",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz elementy programu PPS ze szkicu z 1892 r.",
    options: ["Ośmiogodzinny dzień roboczy", "Minimum płacy roboczej", "Równość obywateli bez różnicy płci, rasy, narodowości i wyznania", "Polska dla Polaków", "Likwidacja państw narodowych"],
    answer: [0, 1, 2],
    explanation: "PPS domagała się m.in. ośmiogodzinnego dnia pracy, minimum płacy i równości obywateli; hasła Polski dla Polaków i likwidacji państw narodowych należały do innych programów."
  },
  {
    id: "R02_HARD_09",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu Polaków z Królestwa zasiadło w Dumie po ustępstwach cara w październiku 1905 r.?",
    options: ["34", "12", "100 tysięcy", "300", "18", "250 tysięcy"],
    answer: 0,
    explanation: "Po powołaniu Dumy zasiadło w niej 34 Polaków z Królestwa; później liczbę tę ograniczono do 12."
  },
  {
    id: "R02_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż organizacje i wydarzenia w kolejności chronologicznej.",
    options: null,
    items: ["Roman Dmowski na czele Stronnictwa Narodowo-Demokratycznego", "utworzenie PPS oraz SDKP", "założenie Stronnictwa Ludowego", "utworzenie SDKPiL"],
    answer: ["utworzenie PPS oraz SDKP", "założenie Stronnictwa Ludowego", "Roman Dmowski na czele Stronnictwa Narodowo-Demokratycznego", "utworzenie SDKPiL"],
    explanation: "PPS i SDKP powstały w 1893 r., Stronnictwo Ludowe w 1895 r., Dmowski stanął na czele stronnictwa w 1897 r., a nazwa SDKPiL pojawiła się od 1900 r."
  },
  {
    id: "R02_HARD_11",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj słabe punkty do orientacji niepodległościowych.",
    options: null,
    items: ["konieczność współpracy z sojusznikiem Niemiec", "brak zgody cara na autonomię", "Austro-Węgry jako oparcie", "Rosja jako oparcie"],
    categories: ["proaustriacka", "prorosyjska"],
    answer: {
      "proaustriacka": ["konieczność współpracy z sojusznikiem Niemiec", "Austro-Węgry jako oparcie"],
      "prorosyjska": ["brak zgody cara na autonomię", "Rosja jako oparcie"]
    },
    explanation: "Orientacja proaustriacka oznaczała stanięcie po stronie sojusznika Niemiec, a prorosyjska wymagała zgody władz rosyjskich na autonomię Polski."
  },
  {
    id: "R02_HARD_12",
    section: "Super trudne",
    type: "riddle",
    prompt: "Organizacja oświatowa z okresu rewolucji 1905 r., licząca 100 tysięcy członków i zajmująca się szkolnictwem, to...",
    options: null,
    answer: "Polska Macierz Szkolna",
    altAnswers: ["Polska Macierz Szkolna", "Macierz Szkolna"],
    explanation: "Po ustępstwach cara powstały polskie szkoły prywatne i stowarzyszenia, w tym Polska Macierz Szkolna licząca 100 tysięcy członków."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Świat w drugiej połowie XIX wieku",
  icon: "🌍",
  sectionOrder: [
    "Zjednoczenie Włoch i Niemiec",
    "Wojna secesyjna",
    "Kolonializm i imperializm",
    "Nowe idee w Europie",
    "Polskie partie polityczne",
    "Rewolucja 1905 roku i orientacje"
  ],
  sectionIcons: {
    "Zjednoczenie Włoch i Niemiec": "🇮🇹",
    "Wojna secesyjna": "🇺🇸",
    "Kolonializm i imperializm": "🧭",
    "Nowe idee w Europie": "🏭",
    "Polskie partie polityczne": "🗳️",
    "Rewolucja 1905 roku i orientacje": "✊"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
