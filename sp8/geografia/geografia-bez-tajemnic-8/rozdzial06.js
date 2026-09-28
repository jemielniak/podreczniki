// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SRO  = Środowisko przyrodnicze Ameryki Południowej
//   AMA  = Wylesianie i zagospodarowanie Amazonii
//   RDZ  = Rdzenna ludność Ameryki Południowej
//   FAW  = Dzielnice biedy w miastach
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R06_SRO_01",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "single_choice",
    prompt: "W której części Ameryki Południowej rozciągają się Andy?",
    options: ["Wzdłuż zachodniego wybrzeża", "Wzdłuż wschodniego wybrzeża", "W centrum Niziny Amazonki", "Na północnym wybrzeżu", "Na Wyżynie Brazylijskiej", "Na Nizinie La Platy"],
    answer: 0,
    explanation: "Andy ciągną się wzdłuż zachodniego wybrzeża Ameryki Południowej.",
    image: "r06_andy_i_plyty.jpg"
  },
  {
    id: "R06_SRO_02",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "true_false",
    prompt: "Płyta Nazca nadal podsuwa się pod płytę południowoamerykańską.",
    options: null,
    answer: true,
    explanation: "Trwające podsuwanie się płyty Nazca pod płytę południowoamerykańską odpowiada za aktywność sejsmiczną i wulkaniczną Andów.",
    image: "r06_andy_i_plyty.jpg"
  },
  {
    id: "R06_SRO_03",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "fill_in",
    prompt: "Andy powstały podczas orogenezy __________.",
    options: null,
    answer: ["alpejskiej"],
    altAnswers: [["alpejskiej", "alpejska"]],
    explanation: "Andy są młodymi górami powstałymi w czasie ostatniej orogenezy, nazywanej orogenezą alpejską."
  },
  {
    id: "R06_SRO_04",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "match",
    prompt: "Połącz wielką formę rzeźby terenu z jej położeniem.",
    options: null,
    left: ["Andy", "Wyżyna Brazylijska", "Nizina Amazonki", "Nizina La Platy"],
    right: ["zachodnie wybrzeże", "w pobliżu wybrzeża Atlantyku", "północna i środkowa część kontynentu", "południowo-wschodnia część kontynentu"],
    answer: {
      "Andy": "zachodnie wybrzeże",
      "Wyżyna Brazylijska": "w pobliżu wybrzeża Atlantyku",
      "Nizina Amazonki": "północna i środkowa część kontynentu",
      "Nizina La Platy": "południowo-wschodnia część kontynentu"
    },
    explanation: "Wielkie formy rzeźby Ameryki Południowej mają układ południkowy: młode góry leżą na zachodzie, rozległe niziny w części środkowej, a stare wyżyny bliżej wschodniego wybrzeża.",
    image: "r06_wielkie_formy_rzezby.jpg"
  },
  {
    id: "R06_SRO_05",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "odd_one_out",
    prompt: "Wskaż obiekt nieleżący w Ameryce Południowej: Andy, Wyżyna Brazylijska, Nizina Amazonki, Himalaje.",
    options: null,
    answer: "Himalaje",
    explanation: "Himalaje leżą w Azji, a pozostałe formy rzeźby znajdują się w Ameryce Południowej."
  },
  {
    id: "R06_SRO_06",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "multi_select",
    prompt: "Zaznacz zjawiska związane z położeniem Andów na styku płyt litosfery.",
    options: ["Silne trzęsienia ziemi", "Wybuchy wulkanów", "Aktywność sejsmiczna", "Brak ruchów skorupy ziemskiej", "Całkowity brak wulkanów", "Stałe obniżanie temperatury Atlantyku"],
    answer: [0, 1, 2],
    explanation: "Andy leżą w aktywnej strefie styku płyt, dlatego często występują tam trzęsienia ziemi i wybuchy wulkanów."
  },
  {
    id: "R06_SRO_07",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "riddle",
    prompt: "Mam około 6400 km długości, ogromne dorzecze i liczne dopływy. Jestem nazywana królową rzek. Jak się nazywam?",
    options: null,
    answer: "Amazonka",
    altAnswers: ["Amazonka", "Amazonką"],
    explanation: "Amazonka ma około 6400 km długości i tworzy największy system rzeczny Ameryki Południowej.",
    image: "r06_amazonka_las_deszczowy.jpg"
  },
  {
    id: "R06_SRO_08",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "sort",
    prompt: "Przyporządkuj obiekty do odpowiednich rodzajów form rzeźby terenu.",
    options: null,
    items: ["Andy", "Wyżyna Gujańska", "Wyżyna Brazylijska", "Nizina Amazonki", "Nizina La Platy"],
    categories: ["góry", "wyżyny", "niziny"],
    answer: {
      "góry": ["Andy"],
      "wyżyny": ["Wyżyna Gujańska", "Wyżyna Brazylijska"],
      "niziny": ["Nizina Amazonki", "Nizina La Platy"]
    },
    explanation: "Andy są górami, Gujańska i Brazylijska są wyżynami, a Amazonki i La Platy - nizinami.",
    image: "r06_wielkie_formy_rzezby.jpg"
  },
  {
    id: "R06_SRO_09",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "scenario",
    prompt: "Geolog prowadzi badania w Chile, w pobliżu zachodniej krawędzi kontynentu. Które zagrożenie powinien szczególnie uwzględnić?",
    options: ["Silne trzęsienia ziemi", "Zamarzanie wieloletniej zmarzliny", "Cyklony śnieżne znad Arktyki", "Brak jakichkolwiek ruchów tektonicznych", "Powstawanie raf koralowych w górach", "Stałe zanikanie rzek przez mróz"],
    answer: 0,
    explanation: "Chile leży przy aktywnej granicy płyt, gdzie podsuwanie się płyty Nazca wywołuje silne trzęsienia ziemi.",
    image: "r06_andy_i_plyty.jpg"
  },
  {
    id: "R06_SRO_10",
    section: "Środowisko przyrodnicze Ameryki Południowej",
    type: "sequence",
    prompt: "Ułóż obiekty w kolejności z zachodu na wschód.",
    options: null,
    items: ["Wyżyna Brazylijska", "Ocean Spokojny", "Nizina Amazonki", "Andy", "Ocean Atlantycki"],
    answer: ["Ocean Spokojny", "Andy", "Nizina Amazonki", "Wyżyna Brazylijska", "Ocean Atlantycki"],
    explanation: "Od zachodu ku wschodowi występują kolejno Ocean Spokojny, Andy, Nizina Amazonki, Wyżyna Brazylijska i Ocean Atlantycki.",
    image: "r06_wielkie_formy_rzezby.jpg"
  },

  {
    id: "R06_AMA_01",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "single_choice",
    prompt: "Jaka jest główna bezpośrednia przyczyna wycinania lasów deszczowych w Brazylii?",
    options: ["Pozyskiwanie nowych terenów rolniczych", "Rozbudowa ośrodków narciarskich", "Tworzenie parków narodowych", "Ochrona siedlisk", "Zalesianie nieużytków", "Budowa obserwatoriów astronomicznych"],
    answer: 0,
    explanation: "Najważniejszą przyczyną wylesiania jest pozyskiwanie terenów rolniczych, zwłaszcza pastwisk dla bydła oraz gruntów pod uprawę soi.",
    image: "r06_wycinka_lasu_amazonskiego.jpg"
  },
  {
    id: "R06_AMA_02",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "multi_select",
    prompt: "Zaznacz bezpośrednie przyczyny wylesiania Amazonii.",
    options: ["Tworzenie pastwisk i pól", "Pozyskiwanie drewna", "Budowa dróg", "Eksploatacja surowców mineralnych", "Rozbudowa osiedli", "Budowa elektrowni wodnych", "Zakładanie rezerwatów przyrody"],
    answer: [0, 1, 2, 3, 4, 5],
    explanation: "Do bezpośrednich przyczyn należą rolnictwo, wyrąb drewna, drogi, górnictwo, osadnictwo i budowa elektrowni wodnych. Rezerwaty służą ochronie lasu."
  },
  {
    id: "R06_AMA_03",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "true_false",
    prompt: "Od 2001 do 2021 roku powierzchnia lasów Ameryki Południowej zmniejszyła się o obszar równy mniej więcej dwukrotności powierzchni Polski.",
    options: null,
    answer: true,
    explanation: "W ciągu tych dwóch dekad ubytek lasów odpowiadał około dwóm powierzchniom Polski.",
    image: "r06_wycinka_lasu_amazonskiego.jpg"
  },
  {
    id: "R06_AMA_04",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "fill_in",
    prompt: "Rozwój produkcji rolnej sprawił, że Brazylia stała się największym na świecie eksporterem __________.",
    options: null,
    answer: ["wołowiny"],
    altAnswers: [["wołowiny", "mięsa wołowego"]],
    explanation: "Rozszerzanie pastwisk i chowu bydła uczyniło Brazylię największym eksporterem wołowiny."
  },
  {
    id: "R06_AMA_05",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "match",
    prompt: "Połącz czynnik z jego następstwem w Amazonii.",
    options: null,
    left: ["Budowa dróg", "Eksploatacja surowców", "Wzrost liczby ludności", "Popyt zagraniczny"],
    right: ["łatwiejszy napływ osadników", "impuls do rozwoju gospodarczego", "większe zapotrzebowanie na żywność i energię", "wzrost opłacalności eksportu"],
    answer: {
      "Budowa dróg": "łatwiejszy napływ osadników",
      "Eksploatacja surowców": "impuls do rozwoju gospodarczego",
      "Wzrost liczby ludności": "większe zapotrzebowanie na żywność i energię",
      "Popyt zagraniczny": "wzrost opłacalności eksportu"
    },
    explanation: "Czynniki gospodarcze wzajemnie się wzmacniają: infrastruktura otwiera teren, inwestycje przyciągają ludzi, a popyt zwiększa opłacalność wykorzystania zasobów."
  },
  {
    id: "R06_AMA_06",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "sort",
    prompt: "Podziel elementy na formy gospodarczego wykorzystania Amazonii i przyrodnicze skutki wylesiania.",
    options: null,
    items: ["chów bydła", "uprawa soi", "wydobycie rud żelaza", "pozyskiwanie drewna", "spadek bioróżnorodności", "erozja gleb", "zaburzenie obiegu wody", "wzrost ryzyka pożarów"],
    categories: ["wykorzystanie gospodarcze", "skutki przyrodnicze"],
    answer: {
      "wykorzystanie gospodarcze": ["chów bydła", "uprawa soi", "wydobycie rud żelaza", "pozyskiwanie drewna"],
      "skutki przyrodnicze": ["spadek bioróżnorodności", "erozja gleb", "zaburzenie obiegu wody", "wzrost ryzyka pożarów"]
    },
    explanation: "Rolnictwo, górnictwo i wyrąb drewna są sposobami wykorzystania gospodarczego, natomiast pozostałe elementy opisują konsekwencje usuwania lasu."
  },
  {
    id: "R06_AMA_07",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "odd_one_out",
    prompt: "Wskaż element niebędący skutkiem wylesiania: degradacja gleb, spadek bioróżnorodności, zaburzenie obiegu wody, zwiększenie liczby siedlisk.",
    options: null,
    answer: "zwiększenie liczby siedlisk",
    explanation: "Wylesianie powoduje utratę siedlisk, a nie zwiększenie ich liczby.",
    image: "r06_wycinka_lasu_amazonskiego.jpg"
  },
  {
    id: "R06_AMA_08",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "scenario",
    prompt: "Przez zwarty las deszczowy poprowadzono nową drogę. Dlaczego może to przyspieszyć wylesianie terenów położonych w jej pobliżu?",
    options: ["Zwiększa dostępność terenu dla osadników i przedsiębiorców", "Natychmiast zamienia las w pustynię lodową", "Uniemożliwia transport drewna", "Całkowicie blokuje migrację ludności", "Automatycznie tworzy rezerwat", "Zmniejsza zainteresowanie surowcami"],
    answer: 0,
    explanation: "Droga ułatwia dotarcie do wcześniej trudno dostępnych obszarów, co sprzyja osadnictwu, rolnictwu, wydobyciu surowców i pozyskiwaniu drewna.",
    image: "r06_droga_przez_amazonie.jpg"
  },
  {
    id: "R06_AMA_09",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "riddle",
    prompt: "Jak nazywa się proces zmniejszania udziału lasów w ogólnej powierzchni obszaru, najczęściej wskutek ich wycinania?",
    options: null,
    answer: "deforestacja",
    altAnswers: ["deforestacja", "wylesianie"],
    explanation: "Deforestacja, czyli wylesianie, oznacza zmniejszanie się powierzchni lasów.",
    image: "r06_wycinka_lasu_amazonskiego.jpg"
  },
  {
    id: "R06_AMA_10",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "sequence",
    prompt: "Ułóż etapy procesu, przez który nowa droga może doprowadzić do ubytku lasu.",
    options: null,
    items: ["powstawanie pól i osiedli", "budowa drogi", "ubytek powierzchni lasu", "napływ osadników", "wzrost dostępności terenu"],
    answer: ["budowa drogi", "wzrost dostępności terenu", "napływ osadników", "powstawanie pól i osiedli", "ubytek powierzchni lasu"],
    explanation: "Droga zwiększa dostępność obszaru, przyciąga ludność i inwestycje, a następnie sprzyja przekształcaniu lasu w pola oraz osiedla.",
    image: "r06_droga_przez_amazonie.jpg"
  },
  {
    id: "R06_AMA_11",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "single_choice",
    prompt: "Na czym polega konflikt interesów dotyczący Amazonii?",
    options: ["Na sprzeczności między rozwojem gospodarczym a ochroną środowiska i praw mieszkańców", "Na sporze o przebieg granicy Europy", "Na wyborze między rybołówstwem morskim a turystyką zimową", "Na rywalizacji o dostęp do lodowców Arktyki", "Na sporze o zakaz używania języka portugalskiego", "Na konflikcie między rolnictwem a żeglugą po Bałtyku"],
    answer: 0,
    explanation: "Różne grupy inaczej oceniają wykorzystanie zasobów Amazonii: jedne oczekują pracy i dochodów, inne chronią las, klimat, bioróżnorodność i prawa rdzennej ludności.",
    image: "r06_konflikt_interesow_amazonia.jpg"
  },
  {
    id: "R06_AMA_12",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "multi_select",
    prompt: "Zaznacz grupy, które mogą czerpać bezpośrednie korzyści gospodarcze z wycinania lasu i eksploatacji zasobów Amazonii.",
    options: ["Rolnicy i przedsiębiorstwa rolne", "Firmy pozyskujące drewno", "Firmy górnicze", "Rdzenni mieszkańcy broniący swoich ziem", "Organizacje ekologiczne", "Naukowcy chroniący bioróżnorodność"],
    answer: [0, 1, 2],
    explanation: "Rolnictwo, wyrąb drewna i górnictwo przynoszą dochody z gospodarczego wykorzystania terenu. Rdzenni mieszkańcy i organizacje ekologiczne zwykle podkreślają koszty środowiskowe oraz społeczne.",
    image: "r06_konflikt_interesow_amazonia.jpg"
  },
  {
    id: "R06_AMA_13",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "true_false",
    prompt: "Kraje wysoko rozwinięte również przyczyniają się do wylesiania Amazonii przez popyt na drewno, żywność i surowce mineralne.",
    options: null,
    answer: true,
    explanation: "Popyt na egzotyczne drewno, wołowinę, soję, awokado i rudy żelaza zwiększa opłacalność gospodarczego wykorzystania Amazonii.",
    image: "r06_konflikt_interesow_amazonia.jpg"
  },
  {
    id: "R06_AMA_14",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "sort",
    prompt: "Przyporządkuj argument do grupy, która najprawdopodobniej go użyje.",
    options: null,
    items: ["nowe miejsca pracy i infrastruktura", "większa produkcja żywności", "ochrona domu i źródła utrzymania", "ograniczenie globalnych zmian klimatu", "dochody ze sprzedaży surowców", "dostęp do nowych pastwisk", "zachowanie tradycyjnej kultury", "ochrona bioróżnorodności"],
    categories: ["rząd Brazylii", "rolnicy", "rdzenni mieszkańcy", "społeczność międzynarodowa"],
    answer: {
      "rząd Brazylii": ["nowe miejsca pracy i infrastruktura", "dochody ze sprzedaży surowców"],
      "rolnicy": ["większa produkcja żywności", "dostęp do nowych pastwisk"],
      "rdzenni mieszkańcy": ["ochrona domu i źródła utrzymania", "zachowanie tradycyjnej kultury"],
      "społeczność międzynarodowa": ["ograniczenie globalnych zmian klimatu", "ochrona bioróżnorodności"]
    },
    explanation: "Każda grupa ocenia Amazonię przez pryzmat innych potrzeb: rozwoju państwa, produkcji rolnej, praw do ziemi albo ochrony dóbr o znaczeniu globalnym.",
    image: "r06_konflikt_interesow_amazonia.jpg"
  },
  {
    id: "R06_AMA_15",
    section: "Wylesianie i zagospodarowanie Amazonii",
    type: "fill_in",
    prompt: "Po wycięciu lasu zmniejsza się __________, co zaburza obieg wody w przyrodzie.",
    options: null,
    answer: ["parowanie"],
    altAnswers: [["parowanie", "ewapotranspiracja"]],
    explanation: "Mniejsza ilość roślin oznacza słabsze parowanie, szybszy odpływ wody i większe ryzyko powodzi."
  },

  {
    id: "R06_RDZ_01",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "single_choice",
    prompt: "Które dwa państwa europejskie odegrały główną rolę w kolonizacji Ameryki Południowej?",
    options: ["Hiszpania i Portugalia", "Norwegia i Szwecja", "Polska i Litwa", "Grecja i Włochy", "Czechy i Słowacja", "Austria i Węgry"],
    answer: 0,
    explanation: "Większość Ameryki Południowej została skolonizowana przez Hiszpanię, a obszar dzisiejszej Brazylii - przez Portugalię."
  },
  {
    id: "R06_RDZ_02",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "multi_select",
    prompt: "Zaznacz przyczyny drastycznego zmniejszenia liczby rdzennej ludności podczas kolonizacji.",
    options: ["Choroby przywiezione przez Europejczyków", "Mordowanie ludności", "Przymusowa ciężka praca", "Pozbawianie ziemi i źródeł utrzymania", "Powszechna poprawa opieki medycznej", "Dobrowolne tworzenie rezerwatów"],
    answer: [0, 1, 2, 3],
    explanation: "Kolonizacja przyniosła epidemie, przemoc, wyzysk i odbieranie ziemi, co doprowadziło do gwałtownego spadku liczby rdzennych mieszkańców."
  },
  {
    id: "R06_RDZ_03",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "true_false",
    prompt: "W Brazylii około 900 tysięcy osób identyfikuje się jako rdzenni mieszkańcy, co stanowi około 0,4% ludności kraju.",
    options: null,
    answer: true,
    explanation: "Rdzenni mieszkańcy są w Brazylii niewielką mniejszością - około 900 tysięcy osób, czyli 0,4% populacji."
  },
  {
    id: "R06_RDZ_04",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "fill_in",
    prompt: "Yanomami zamieszkują las deszczowy na pograniczu Brazylii i __________.",
    options: null,
    answer: ["Wenezueli"],
    altAnswers: [["Wenezueli", "Wenezuela"]],
    explanation: "Terytoria Yanomami leżą po obu stronach granicy Brazylii i Wenezueli.",
    image: "r06_wioska_yanomami.jpg"
  },
  {
    id: "R06_RDZ_05",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "match",
    prompt: "Połącz element życia Yanomami z właściwym opisem.",
    options: null,
    left: ["kobiety", "mężczyźni", "wioska", "domostwa rodzin"],
    right: ["uprawa warzyw i zbieranie owoców", "polowanie na zwierzęta", "kształt zbliżony do okręgu", "brak wyraźnego oddzielenia"],
    answer: {
      "kobiety": "uprawa warzyw i zbieranie owoców",
      "mężczyźni": "polowanie na zwierzęta",
      "wioska": "kształt zbliżony do okręgu",
      "domostwa rodzin": "brak wyraźnego oddzielenia"
    },
    explanation: "Organizacja wioski oraz podział codziennych zajęć odzwierciedlają tradycyjny sposób życia Yanomami.",
    image: "r06_wioska_yanomami.jpg"
  },
  {
    id: "R06_RDZ_06",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "odd_one_out",
    prompt: "Wskaż materiał nietypowy dla tradycyjnych domów Yanomami: drewno, glina, liście, stalowe panele.",
    options: null,
    answer: "stalowe panele",
    explanation: "Tradycyjne budynki Yanomami powstają z drewna, gliny i liści, a nie ze stalowych paneli.",
    image: "r06_wioska_yanomami.jpg"
  },
  {
    id: "R06_RDZ_07",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "scenario",
    prompt: "Turyści odwiedzają wioskę Yanomami i zostawiają ubrania oraz metalowe narzędzia. Jaki skutek takiego kontaktu jest najbardziej prawdopodobny?",
    options: ["Stopniowa zmiana kultury przy możliwości zachowania części tradycji", "Natychmiastowy całkowity zanik wszystkich tradycji", "Automatyczne powstanie wielkiego miasta", "Całkowity zakaz używania narzędzi", "Przekształcenie lasu w tundrę", "Utrata znajomości języka w ciągu jednego dnia"],
    answer: 0,
    explanation: "Przedmioty zachodniej cywilizacji ułatwiają codzienne życie i stopniowo zmieniają kulturę, ale nie muszą od razu pozbawiać społeczności jej tożsamości.",
    image: "r06_wioska_yanomami.jpg"
  },
  {
    id: "R06_RDZ_08",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "sequence",
    prompt: "Ułóż etapy coraz silniejszego kontaktu rdzennej społeczności z kulturą zewnętrzną.",
    options: null,
    items: ["podjęcie pracy w nowych zawodach", "całkowita izolacja", "korzystanie z obcych narzędzi i ubrań", "dopuszczenie kontaktów z turystami", "przyjęcie obcych wzorców i migracja"],
    answer: ["całkowita izolacja", "dopuszczenie kontaktów z turystami", "korzystanie z obcych narzędzi i ubrań", "podjęcie pracy w nowych zawodach", "przyjęcie obcych wzorców i migracja"],
    explanation: "Zmiany mogą przebiegać od izolacji przez ograniczone kontakty i przejmowanie przedmiotów aż po zmianę pracy, trybu życia i miejsca zamieszkania."
  },
  {
    id: "R06_RDZ_09",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "single_choice",
    prompt: "W którym roku ONZ przyjęła deklarację o prawach ludności rdzennej?",
    options: ["2007", "1992", "2001", "2015", "2022", "2023"],
    answer: 0,
    explanation: "Deklaracja ONZ o prawach ludności rdzennej została przyjęta w 2007 roku."
  },
  {
    id: "R06_RDZ_10",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "multi_select",
    prompt: "Zaznacz prawa ludności rdzennej wynikające z deklaracji ONZ.",
    options: ["Prawo do zachowania własnej kultury", "Takie same prawa obywatelskie jak inni mieszkańcy", "Ochrona przed przymusowym przesiedleniem", "Prawo do sprawiedliwej rekompensaty", "Obowiązek porzucenia własnego języka", "Zakaz udziału w życiu politycznym"],
    answer: [0, 1, 2, 3],
    explanation: "Deklaracja chroni kulturę, równe prawa obywatelskie i ziemię ludności rdzennej oraz wymaga zgody i rekompensaty przy przesiedleniu."
  },
  {
    id: "R06_RDZ_11",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "riddle",
    prompt: "Jestem szamanem i przedstawicielem ludu Yanomami. Od lat walczę o prawa rdzennych mieszkańców Brazylii i ochronę lasów deszczowych. Kim jestem?",
    options: null,
    answer: "Davi Kopenawa Yanomami",
    altAnswers: ["Davi Kopenawa Yanomami", "Davi Kopenawa", "Kopenawa Yanomami"],
    explanation: "Davi Kopenawa Yanomami jest znanym obrońcą praw Yanomami i amazońskich lasów deszczowych.",
    image: "r06_davi_kopenawa.jpg"
  },
  {
    id: "R06_RDZ_12",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "sort",
    prompt: "Przyporządkuj zjawiska do czasów kolonizacji lub do współczesności.",
    options: null,
    items: ["epidemie chorób przywiezionych z Europy", "przymusowa ciężka praca", "odbieranie ziemi", "deklaracja ONZ o prawach ludności rdzennej", "tworzenie rezerwatów", "udział przedstawicieli ludności rdzennej w parlamencie"],
    categories: ["czasy kolonizacji", "współczesność"],
    answer: {
      "czasy kolonizacji": ["epidemie chorób przywiezionych z Europy", "przymusowa ciężka praca", "odbieranie ziemi"],
      "współczesność": ["deklaracja ONZ o prawach ludności rdzennej", "tworzenie rezerwatów", "udział przedstawicieli ludności rdzennej w parlamencie"]
    },
    explanation: "Kolonizacja wiązała się z epidemiami, wyzyskiem i utratą ziemi, natomiast współczesne działania obejmują ochronę praw, rezerwaty i reprezentację polityczną."
  },
  {
    id: "R06_RDZ_13",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "scenario",
    prompt: "Nielegalni poszukiwacze złota wkroczyli na ziemie Yanomami. Dorośli zachorowali i nie mogli uprawiać ziemi ani polować. Jaka konsekwencja dotknęła społeczność?",
    options: ["Głód szczególnie dotykający dzieci", "Nagły wzrost plonów", "Rozwój bezpiecznej turystyki", "Całkowite ustąpienie chorób", "Powstanie legalnej infrastruktury", "Wzrost odporności na epidemie"],
    answer: 0,
    explanation: "Choroby osłabiły dorosłych, uniemożliwiając zdobywanie żywności, co doprowadziło do głodu szczególnie groźnego dla dzieci.",
    image: "r06_nielegalne_wydobycie_zlota.jpg"
  },
  {
    id: "R06_RDZ_14",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "true_false",
    prompt: "W maju 2023 roku brazylijska policja zlikwidowała ponad 300 nielegalnych osad górniczych na terenach Yanomami.",
    options: null,
    answer: true,
    explanation: "Działania policji w maju 2023 roku objęły likwidację ponad 300 osad związanych z nielegalnym wydobyciem.",
    image: "r06_nielegalne_wydobycie_zlota.jpg"
  },
  {
    id: "R06_RDZ_15",
    section: "Rdzenna ludność Ameryki Południowej",
    type: "fill_in",
    prompt: "Obszary, na których nie wolno wycinać lasu ani prowadzić inwestycji infrastrukturalnych, tworzone dla ochrony przyrody i ludności rdzennej, to __________.",
    options: null,
    answer: ["rezerwaty"],
    altAnswers: [["rezerwaty", "rezerwaty przyrody"]],
    explanation: "Rezerwaty chronią las i środowisko życia ludności rdzennej, choć izolacja społeczności może również wywoływać wątpliwości."
  },

  {
    id: "R06_FAW_01",
    section: "Dzielnice biedy w miastach",
    type: "riddle",
    prompt: "Jak nazywa się procentowy udział mieszkańców miast w ogólnej liczbie ludności?",
    options: null,
    answer: "współczynnik urbanizacji",
    altAnswers: ["współczynnik urbanizacji", "urbanizacja"],
    explanation: "Współczynnik urbanizacji określa, jaki procent ludności mieszka w miastach."
  },
  {
    id: "R06_FAW_02",
    section: "Dzielnice biedy w miastach",
    type: "single_choice",
    prompt: "Jaki odsetek ludności Brazylii mieszka w miastach?",
    options: ["Około 87%", "Około 17%", "Około 37%", "Około 50%", "Około 65%", "Około 100%"],
    answer: 0,
    explanation: "W brazylijskich miastach mieszka około 87% ludności kraju."
  },
  {
    id: "R06_FAW_03",
    section: "Dzielnice biedy w miastach",
    type: "true_false",
    prompt: "Aglomeracja Sao Paulo liczy ponad 20 milionów mieszkańców.",
    options: null,
    answer: true,
    explanation: "Sao Paulo jest największą metropolią Brazylii i przekracza 20 milionów mieszkańców."
  },
  {
    id: "R06_FAW_04",
    section: "Dzielnice biedy w miastach",
    type: "multi_select",
    prompt: "Zaznacz czynniki wypychające ludność z obszarów wiejskich.",
    options: ["Niskie zarobki lub brak pracy", "Brak własnych gruntów rolnych", "Niedostępność podstawowych usług", "Trudne warunki przyrodnicze", "Różnorodne możliwości pracy w mieście", "Znajomi mieszkający w mieście"],
    answer: [0, 1, 2, 3],
    explanation: "Czynniki wypychające pogarszają warunki życia na wsi i skłaniają ludzi do wyjazdu.",
    image: "r06_migracja_do_miasta.jpg"
  },
  {
    id: "R06_FAW_05",
    section: "Dzielnice biedy w miastach",
    type: "multi_select",
    prompt: "Zaznacz czynniki przyciągające migrantów do miast.",
    options: ["Szansa na pracę i wyższe zarobki", "Różnorodne możliwości zawodowe", "Rodzina i znajomi mieszkający w mieście", "Dostęp do pomocy i wsparcia", "Brak podstawowych usług na wsi", "Niskie dochody z rolnictwa"],
    answer: [0, 1, 2, 3],
    explanation: "Czynniki przyciągające tworzą obraz miasta jako miejsca oferującego pracę, usługi i wsparcie.",
    image: "r06_migracja_do_miasta.jpg"
  },
  {
    id: "R06_FAW_06",
    section: "Dzielnice biedy w miastach",
    type: "sort",
    prompt: "Przyporządkuj elementy do czynników wypychających, przyciągających lub konsekwencji migracji.",
    options: null,
    items: ["brak pracy na wsi", "brak własnej ziemi", "szansa na wyższe zarobki", "rodzina w mieście", "praca w szarej strefie", "budowa prowizorycznego schronienia"],
    categories: ["czynniki wypychające", "czynniki przyciągające", "konsekwencje migracji"],
    answer: {
      "czynniki wypychające": ["brak pracy na wsi", "brak własnej ziemi"],
      "czynniki przyciągające": ["szansa na wyższe zarobki", "rodzina w mieście"],
      "konsekwencje migracji": ["praca w szarej strefie", "budowa prowizorycznego schronienia"]
    },
    explanation: "Warunki na wsi wypychają ludzi, możliwości miasta ich przyciągają, a niedobór legalnej pracy i mieszkań prowadzi do szarej strefy oraz nieformalnej zabudowy.",
    image: "r06_migracja_do_miasta.jpg"
  },
  {
    id: "R06_FAW_07",
    section: "Dzielnice biedy w miastach",
    type: "sequence",
    prompt: "Ułóż etapy prowadzące od problemów na wsi do powstania nielegalnego osiedla.",
    options: null,
    items: ["brak pieniędzy na drogie mieszkanie", "budowa prowizorycznego schronienia", "migracja do miasta", "brak pracy i źródeł utrzymania na wsi", "zamieszkanie na niezagospodarowanym terenie"],
    answer: ["brak pracy i źródeł utrzymania na wsi", "migracja do miasta", "brak pieniędzy na drogie mieszkanie", "zamieszkanie na niezagospodarowanym terenie", "budowa prowizorycznego schronienia"],
    explanation: "Migranci bez wystarczających dochodów nie mogą kupić ani wynająć mieszkania, dlatego zajmują dostępne tereny i budują prowizoryczne domy.",
    image: "r06_migracja_do_miasta.jpg"
  },
  {
    id: "R06_FAW_08",
    section: "Dzielnice biedy w miastach",
    type: "single_choice",
    prompt: "Dlaczego nowo przybyłych migrantów często nie stać na legalne mieszkanie w metropolii?",
    options: ["Ceny kupna i wynajmu są bardzo wysokie", "Wszystkie mieszkania są bezpłatne", "Prawo zakazuje migrantom mieszkania w miastach", "Miasta nie mają żadnych budynków", "Mieszkania można kupić wyłącznie za żywność", "Każdy migrant otrzymuje dom na wsi"],
    answer: 0,
    explanation: "Duży popyt na nieruchomości podnosi ceny, a osoby bez stabilnej pracy i dochodów nie mogą sobie pozwolić na kupno ani wynajem.",
    image: "r06_fawela_na_stoku.jpg"
  },
  {
    id: "R06_FAW_09",
    section: "Dzielnice biedy w miastach",
    type: "multi_select",
    prompt: "Zaznacz miejsca często zajmowane przez nieformalne osiedla.",
    options: ["Niezagospodarowane działki", "Tereny przy uciążliwych szlakach komunikacyjnych", "Sąsiedztwo wysypisk i zakładów przemysłowych", "Strome stoki i tereny zagrożone powodzią", "Najdroższe legalne osiedla willowe", "Chronione wnętrza parków narodowych poza miastem"],
    answer: [0, 1, 2, 3],
    explanation: "Fawele powstają tam, gdzie grunt jest wolny, ale często niebezpieczny, uciążliwy albo formalnie wyłączony z zabudowy.",
    image: "r06_fawela_na_stoku.jpg"
  },
  {
    id: "R06_FAW_10",
    section: "Dzielnice biedy w miastach",
    type: "fill_in",
    prompt: "Nieformalna część gospodarki ukrywana przed administracją państwową to __________.",
    options: null,
    answer: ["szara strefa"],
    altAnswers: [["szara strefa", "gospodarka nieformalna"]],
    explanation: "Pracownicy szarej strefy zwykle nie płacą podatków i składek oraz nie są objęci ubezpieczeniem, choć ich zajęcia nie muszą być przestępstwami."
  },
  {
    id: "R06_FAW_11",
    section: "Dzielnice biedy w miastach",
    type: "match",
    prompt: "Połącz inwestycję w faweli z jej bezpośrednim skutkiem.",
    options: null,
    left: ["sieć wodociągowa", "sieć energetyczna", "szkoła", "przychodnia"],
    right: ["dostęp do bieżącej wody", "stabilniejsze dostawy prądu", "lepszy dostęp do edukacji", "lepszy dostęp do opieki zdrowotnej"],
    answer: {
      "sieć wodociągowa": "dostęp do bieżącej wody",
      "sieć energetyczna": "stabilniejsze dostawy prądu",
      "szkoła": "lepszy dostęp do edukacji",
      "przychodnia": "lepszy dostęp do opieki zdrowotnej"
    },
    explanation: "Modernizacja dużych faweli obejmuje infrastrukturę techniczną i społeczną, dzięki czemu poprawiają się podstawowe warunki życia.",
    image: "r06_zmodernizowana_fawela.jpg"
  },
  {
    id: "R06_FAW_12",
    section: "Dzielnice biedy w miastach",
    type: "odd_one_out",
    prompt: "Wskaż cechę, która nie upodabnia faweli do miasta zrównoważonego: duża gęstość zabudowy, połączenie różnych funkcji, wysoki poziom odzyskiwania surowców wtórnych, działalność gangów.",
    options: null,
    answer: "działalność gangów",
    explanation: "Działalność gangów jest jednoznacznie negatywną cechą, natomiast zwarta zabudowa, mieszanie funkcji i recykling mogą ograniczać zużycie zasobów.",
    image: "r06_zmodernizowana_fawela.jpg"
  },
  {
    id: "R06_FAW_13",
    section: "Dzielnice biedy w miastach",
    type: "multi_select",
    prompt: "Zaznacz problemy typowe dla wielu dzielnic biedy.",
    options: ["Ryzyko osuwisk i powodzi", "Brak lub wadliwe działanie kanalizacji", "Utrudniony dostęp do edukacji i ochrony zdrowia", "Wysoka przestępczość", "Problemy z dostawami wody i prądu", "Zawsze pełna legalność zabudowy"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Wiele faweli łączy zagrożenia przyrodnicze z niedostatkiem infrastruktury, usług i bezpieczeństwa.",
    image: "r06_fawela_na_stoku.jpg"
  },
  {
    id: "R06_FAW_14",
    section: "Dzielnice biedy w miastach",
    type: "scenario",
    prompt: "Władze miasta wyburzyły nielegalne osiedle, lecz nie zwiększyły dostępności mieszkań. Jaki skutek jest najbardziej prawdopodobny?",
    options: ["Mieszkańcy zbudują osiedle w innym miejscu", "Problem mieszkaniowy zniknie trwale", "Ceny mieszkań natychmiast spadną do zera", "Wszyscy mieszkańcy wrócą na wieś", "Ustanie migracja do miasta", "Powstaną wyłącznie legalne wille"],
    answer: 0,
    explanation: "Samo usunięcie zabudowy nie usuwa przyczyny problemu, czyli braku dostępnych mieszkań, dlatego ludzie mogą przenieść się w inne miejsce."
  },
  {
    id: "R06_FAW_15",
    section: "Dzielnice biedy w miastach",
    type: "true_false",
    prompt: "Nie wszystkie fawele mają taki sam status i warunki życia; część dużych osiedli wyposażono w infrastrukturę oraz usługi publiczne.",
    options: null,
    answer: true,
    explanation: "Niektóre wieloletnie fawele w Sao Paulo mają sieci energetyczne, wodociągi, transport, szkoły, przychodnie i obiekty sportowe.",
    image: "r06_zmodernizowana_fawela.jpg"
  },

  {
    id: "R06_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaka część wszystkich gatunków organizmów występujących na Ziemi może występować w Amazonii?",
    options: ["Około 10%", "Około 1%", "Około 25%", "Około 50%", "Około 75%", "Prawie 100%"],
    answer: 0,
    explanation: "Amazonia skupia aż około 10% wszystkich gatunków organizmów występujących na Ziemi.",
    image: "r06_amazonka_las_deszczowy.jpg"
  },
  {
    id: "R06_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Amazonka ma około __________ km długości.",
    options: null,
    answer: ["6400"],
    altAnswers: [["6400", "6 400", "6400 km", "6 400 km"]],
    explanation: "Długość Amazonki wynosi około 6400 km."
  },
  {
    id: "R06_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz wielkość z odpowiadającą jej wartością.",
    options: null,
    left: ["długość Amazonki", "udział mieszkańców miast w Brazylii", "udział rdzennej ludności w Brazylii", "liczba mieszkańców aglomeracji Sao Paulo"],
    right: ["około 6400 km", "około 87%", "około 0,4%", "ponad 20 milionów"],
    answer: {
      "długość Amazonki": "około 6400 km",
      "udział mieszkańców miast w Brazylii": "około 87%",
      "udział rdzennej ludności w Brazylii": "około 0,4%",
      "liczba mieszkańców aglomeracji Sao Paulo": "ponad 20 milionów"
    },
    explanation: "Zestawienie łączy dane dotyczące środowiska, urbanizacji i ludności rdzennej Ameryki Południowej."
  },
  {
    id: "R06_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz towary, na które światowy popyt może zwiększać presję na Amazonię.",
    options: ["Wołowina", "Soja", "Awokado", "Rudy żelaza", "Egzotyczne drewno", "Lód morski"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Eksport żywności, rud żelaza i egzotycznego drewna wiąże gospodarkę Amazonii z popytem konsumentów i przedsiębiorstw z innych części świata."
  },
  {
    id: "R06_HARD_05",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż działanie, które nie jest bezpośrednią przyczyną wylesiania Amazonii: tworzenie pastwisk, uprawa soi, budowa zbiorników dla elektrowni wodnych, tworzenie rezerwatów.",
    options: null,
    answer: "tworzenie rezerwatów",
    explanation: "Rezerwaty ograniczają wyrąb i inwestycje, natomiast pastwiska, uprawy oraz zbiorniki elektrowni wodnych wymagają przekształcenia terenu."
  },
  {
    id: "R06_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "Przedstawiciel pewnej strony konfliktu mówi: Jeśli świat oczekuje zachowania lasów, powinien sprawić, aby ich ochrona była dla naszego kraju opłacalna. Którą stronę reprezentuje?",
    options: ["Rząd Brazylii", "Turystów odwiedzających Andy", "Mieszkańców Europy Północnej", "Rybołówstwo na Atlantyku", "Rolników z Polski", "Przemysł stoczniowy"],
    answer: 0,
    explanation: "To argument władz Brazylii, które podkreślają prawo kraju rozwijającego się do dochodów i poprawy jakości życia mieszkańców."
  },
  {
    id: "R06_HARD_07",
    section: "Super trudne",
    type: "true_false",
    prompt: "Ochrona praw rdzennej ludności Amazonii jest ściśle związana z ochroną lasu będącego jej środowiskiem życia.",
    options: null,
    answer: true,
    explanation: "Utrata lasu oznacza dla wielu społeczności utratę ziemi, źródeł pożywienia i podstaw tradycyjnej kultury."
  },
  {
    id: "R06_HARD_08",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż możliwy ciąg przemian prowadzących do zaniku tradycyjnego sposobu życia rdzennej społeczności.",
    options: null,
    items: ["podjęcie pracy w mieście lub na plantacji", "przekazywanie wiedzy o życiu w lesie", "korzystanie z fabrycznych narzędzi", "utrata możliwości przekazania tradycji dzieciom", "częste kontakty z osobami z zewnątrz"],
    answer: ["przekazywanie wiedzy o życiu w lesie", "częste kontakty z osobami z zewnątrz", "korzystanie z fabrycznych narzędzi", "podjęcie pracy w mieście lub na plantacji", "utrata możliwości przekazania tradycji dzieciom"],
    explanation: "Rosnące kontakty i nowe przedmioty mogą prowadzić do zmiany pracy oraz stylu życia, a w konsekwencji utrudnić przekazywanie tradycyjnej wiedzy kolejnemu pokoleniu."
  },
  {
    id: "R06_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Podziel cechy faweli na potencjalnie korzystne dla zrównoważonego miasta i jednoznacznie negatywne.",
    options: null,
    items: ["duża gęstość zabudowy", "miejsca pracy blisko domów", "wysoki poziom recyklingu", "silne poczucie wspólnoty", "zabudowa stoków osuwiskowych", "brak kanalizacji", "wysoka przestępczość", "zanieczyszczenie wody"],
    categories: ["potencjalnie korzystne", "jednoznacznie negatywne"],
    answer: {
      "potencjalnie korzystne": ["duża gęstość zabudowy", "miejsca pracy blisko domów", "wysoki poziom recyklingu", "silne poczucie wspólnoty"],
      "jednoznacznie negatywne": ["zabudowa stoków osuwiskowych", "brak kanalizacji", "wysoka przestępczość", "zanieczyszczenie wody"]
    },
    explanation: "Zwarta, wielofunkcyjna przestrzeń i recykling mogą ograniczać zużycie zasobów, ale zagrożenia przyrodnicze, sanitarne i społeczne pogarszają bezpieczeństwo życia."
  },
  {
    id: "R06_HARD_10",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz obszar z dominującym językiem urzędowym wynikającym z historii kolonizacji.",
    options: null,
    left: ["Brazylia", "Peru", "Surinam", "Gujana Francuska"],
    right: ["portugalski", "hiszpański", "holenderski", "francuski"],
    answer: {
      "Brazylia": "portugalski",
      "Peru": "hiszpański",
      "Surinam": "holenderski",
      "Gujana Francuska": "francuski"
    },
    explanation: "Języki urzędowe odzwierciedlają wpływy dawnych państw kolonialnych w Ameryce Południowej."
  },
  {
    id: "R06_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który obiekt jest najlepiej zachowanym miastem Inków i jedną z największych atrakcji turystycznych Peru?",
    options: ["Machu Picchu", "Carajás", "Sao Paulo", "Rio Negro", "Huancayo", "Salwador"],
    answer: 0,
    explanation: "Machu Picchu leży w Andach i jest najlepiej zachowanym miastem Imperium Inków.",
    image: "r06_machu_picchu.jpg"
  },
  {
    id: "R06_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz długotrwałe następstwa kolonizacji dla rdzennej ludności Ameryki Południowej.",
    options: ["Eksterminacja ludności", "Wyzysk", "Zanik wielu kultur", "Dyskryminacja także po uzyskaniu niepodległości", "Natychmiastowe zrównanie statusu majątkowego", "Pełna ochrona ziem od początku kolonizacji"],
    answer: [0, 1, 2, 3],
    explanation: "Kolonizacja przyniosła śmierć, wyzysk i niszczenie kultur, a nierówności oraz dyskryminacja utrzymywały się również po powstaniu niepodległych państw."
  },
  {
    id: "R06_HARD_13",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Pustynia Atakama znajduje się na terytorium __________.",
    options: null,
    answer: ["Chile"],
    altAnswers: [["Chile", "Republiki Chile"]],
    explanation: "Atakama leży w północnej części Chile, po zachodniej stronie Andów."
  },
  {
    id: "R06_HARD_14",
    section: "Super trudne",
    type: "scenario",
    prompt: "Miasto chce trwale poprawić warunki życia w dużej, istniejącej od wielu lat faweli. Które działanie najlepiej odpowiada skutecznym rozwiązaniom stosowanym w Sao Paulo?",
    options: ["Budowa wodociągów, sieci energetycznej, transportu, szkół i przychodni", "Samo wyburzenie domów bez zapewnienia mieszkań", "Odcięcie wszystkich dróg do osiedla", "Zakaz świadczenia opieki zdrowotnej", "Usunięcie transportu publicznego", "Pozostawienie osiedla bez kanalizacji"],
    answer: 0,
    explanation: "Podnoszenie standardu istniejących osiedli przez rozwój infrastruktury usuwa część przyczyn złych warunków życia bez przenoszenia problemu w inne miejsce.",
    image: "r06_zmodernizowana_fawela.jpg"
  },
  {
    id: "R06_HARD_15",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz przyczynę z jej skutkiem w procesie migracji do Limy.",
    options: null,
    left: ["niskie dochody z rolnictwa w Andach", "wysokie ceny mieszkań w Limie", "brak wody i kanalizacji w dzielnicach biedy"],
    right: ["wyjazd ze wsi w poszukiwaniu pracy", "budowa prowizorycznych domów na stokach", "konieczność inwestycji w infrastrukturę"],
    answer: {
      "niskie dochody z rolnictwa w Andach": "wyjazd ze wsi w poszukiwaniu pracy",
      "wysokie ceny mieszkań w Limie": "budowa prowizorycznych domów na stokach",
      "brak wody i kanalizacji w dzielnicach biedy": "konieczność inwestycji w infrastrukturę"
    },
    explanation: "Problemy gospodarcze w Andach pobudzają migrację, drogie mieszkania sprzyjają nieformalnej zabudowie, a braki infrastruktury wymagają inwestycji publicznych."
  }
];

const KID_PROMPTS = {
  "R06_SRO_02": "Czy płyta Nazca wsuwa się pod płytę południowoamerykańską?",
  "R06_SRO_10": "Ułóż miejsca od Oceanu Spokojnego do Atlantyku.",
  "R06_AMA_08": "Dlaczego droga przez las może zwiększyć wycinkę drzew?",
  "R06_AMA_11": "Dlaczego różne grupy spierają się o Amazonię?",
  "R06_RDZ_02": "Co zmniejszyło liczbę rdzennych mieszkańców podczas kolonizacji?",
  "R06_RDZ_07": "Co może się zmienić po wizytach turystów w wiosce Yanomami?",
  "R06_FAW_06": "Podziel przyczyny wyjazdu do miasta i jego skutki.",
  "R06_FAW_07": "Ułóż drogę od problemów na wsi do budowy biednego osiedla.",
  "R06_FAW_14": "Co się stanie po wyburzeniu osiedla bez nowych mieszkań?",
  "R06_HARD_14": "Jak miasto może poprawić warunki życia w dużej faweli?"
};

const chapter = {
  id: "r06",
  number: 6,
  title: "Ameryka Południowa",
  icon: "🌎",
  sectionOrder: [
    "Środowisko przyrodnicze Ameryki Południowej",
    "Wylesianie i zagospodarowanie Amazonii",
    "Rdzenna ludność Ameryki Południowej",
    "Dzielnice biedy w miastach"
  ],
  sectionIcons: {
    "Środowisko przyrodnicze Ameryki Południowej": "⛰️",
    "Wylesianie i zagospodarowanie Amazonii": "🌳",
    "Rdzenna ludność Ameryki Południowej": "🛖",
    "Dzielnice biedy w miastach": "🏙️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
