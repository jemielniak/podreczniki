// Skróty sekcji (do identyfikatorów ćwiczeń):
//   EUR  = Europa i administracja Polski
//   DEM  = Zmiany i struktura ludności
//   MIG  = Rozmieszczenie i migracje
//   SPO  = Różnorodność i zatrudnienie
//   MIA  = Miasta i urbanizacja
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R02_EUR_01",
    section: "Europa i administracja Polski",
    type: "single_choice",
    prompt: "Ile państw znajduje się w Europie, jeśli uwzględnimy także kraje leżące na tym kontynencie tylko częściowo?",
    options: ["37", "42", "47", "50", "54", "60"],
    answer: 2,
    explanation: "W Europie znajduje się 47 państw, przy czym Rosja, Kazachstan i Turcja leżą na tym kontynencie tylko częściowo.",
    image: "r02_mapa_polityczna_europy.jpg"
  },
  {
    id: "R02_EUR_02",
    section: "Europa i administracja Polski",
    type: "match",
    prompt: "Połącz przemianę polityczną z jej skutkiem.",
    options: null,
    left: ["Rozpad ZŚRS", "Rozpad Czechosłowacji", "Rozpad Jugosławii", "Zjednoczenie Niemiec"],
    right: ["Powstanie ośmiu nowych państw europejskich", "Powstanie Czech i Słowacji", "Powstanie między innymi Chorwacji i Serbii", "Połączenie RFN i NRD"],
    answer: {
      "Rozpad ZŚRS": "Powstanie ośmiu nowych państw europejskich",
      "Rozpad Czechosłowacji": "Powstanie Czech i Słowacji",
      "Rozpad Jugosławii": "Powstanie między innymi Chorwacji i Serbii",
      "Zjednoczenie Niemiec": "Połączenie RFN i NRD"
    },
    explanation: "Pod koniec XX wieku rozpad ZŚRS, Czechosłowacji i Jugosławii oraz zjednoczenie Niemiec istotnie zmieniły mapę polityczną Europy."
  },
  {
    id: "R02_EUR_03",
    section: "Europa i administracja Polski",
    type: "fill_in",
    prompt: "Najmłodsze państwo Europy, __________, ogłosiło niepodległość w roku __________.",
    options: null,
    answer: ["Kosowo", "2008"],
    altAnswers: [["Kosowo", "kosowo"], ["2008", "2008 r."]],
    explanation: "Kosowo powstało w 2008 roku, choć jego niepodległość uznaje tylko część państw."
  },
  {
    id: "R02_EUR_04",
    section: "Europa i administracja Polski",
    type: "sequence",
    prompt: "Ułóż jednostki podziału administracyjnego Polski od największej do najmniejszej.",
    options: null,
    items: ["gmina", "województwo", "powiat"],
    answer: ["województwo", "powiat", "gmina"],
    explanation: "Od 1 stycznia 1999 roku w Polsce obowiązuje trójstopniowy podział na województwa, powiaty i gminy.",
    image: "r02_podzial_administracyjny_polski.jpg"
  },
  {
    id: "R02_EUR_05",
    section: "Europa i administracja Polski",
    type: "single_choice",
    prompt: "Ile województw istnieje w Polsce?",
    options: ["12", "14", "15", "16", "17", "18"],
    answer: 3,
    explanation: "Polska jest podzielona na 16 województw.",
    image: "r02_podzial_administracyjny_polski.jpg"
  },
  {
    id: "R02_EUR_06",
    section: "Europa i administracja Polski",
    type: "true_false",
    prompt: "Miasto na prawach powiatu jest gminą, która wykonuje również zadania powiatu.",
    options: null,
    answer: true,
    explanation: "Miasta na prawach powiatu, takie jak Warszawa, Gdynia i Tarnów, łączą zadania gminy i powiatu."
  },
  {
    id: "R02_EUR_07",
    section: "Europa i administracja Polski",
    type: "sort",
    prompt: "Przyporządkuj elementy do właściwej kategorii.",
    options: null,
    items: ["Gibraltar", "Wyspy Owcze", "Warszawa", "Gdynia"],
    categories: ["terytorium zależne", "miasto na prawach powiatu"],
    answer: {
      "terytorium zależne": ["Gibraltar", "Wyspy Owcze"],
      "miasto na prawach powiatu": ["Warszawa", "Gdynia"]
    },
    explanation: "Gibraltar i Wyspy Owcze są terytoriami zależnymi, a Warszawa i Gdynia należą do miast na prawach powiatu."
  },
  {
    id: "R02_EUR_08",
    section: "Europa i administracja Polski",
    type: "odd_one_out",
    prompt: "Wskaż jednostkę niepasującą do trójstopniowego podziału administracyjnego Polski: województwo, powiat, gmina, region geograficzny.",
    options: null,
    answer: "region geograficzny",
    explanation: "Trójstopniowy podział administracyjny tworzą województwa, powiaty i gminy; region geograficzny nie jest jednostką administracyjną."
  },
  {
    id: "R02_EUR_09",
    section: "Europa i administracja Polski",
    type: "scenario",
    prompt: "Samorządowiec pracuje w jednostce pośredniej między województwem a gminą. Jaka to jednostka?",
    options: ["powiat", "sołectwo", "dzielnica", "region", "okręg", "metropolia"],
    answer: 0,
    explanation: "Powiat jest pośrednim szczeblem podziału administracyjnego między województwem a gminą.",
    image: "r02_podzial_administracyjny_polski.jpg"
  },
  {
    id: "R02_EUR_10",
    section: "Europa i administracja Polski",
    type: "multi_select",
    prompt: "Zaznacz wydarzenia, które zmieniły mapę polityczną Europy pod koniec XX wieku.",
    options: ["Rozpad ZŚRS", "Rozpad Jugosławii", "Rozpad Czechosłowacji", "Zjednoczenie Niemiec", "Powstanie Unii Europejskiej w średniowieczu"],
    answer: [0, 1, 2, 3],
    explanation: "Do najważniejszych przemian należały rozpady ZŚRS, Jugosławii i Czechosłowacji oraz zjednoczenie Niemiec."
  },

  {
    id: "R02_DEM_01",
    section: "Zmiany i struktura ludności",
    type: "sequence",
    prompt: "Ułóż okresy zmian liczby ludności Polski od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Ponowny spadek od 2012 roku", "Wzrost od zakończenia II wojny światowej do połowy lat 90.", "Niewielki wzrost w latach 2008-2011", "Spadek w latach 1999-2007"],
    answer: ["Wzrost od zakończenia II wojny światowej do połowy lat 90.", "Spadek w latach 1999-2007", "Niewielki wzrost w latach 2008-2011", "Ponowny spadek od 2012 roku"],
    explanation: "Po długim okresie powojennego wzrostu nastąpił spadek w latach 1999-2007, krótki wzrost w latach 2008-2011 i ponowny spadek od 2012 roku.",
    image: "r02_przemiany_demograficzne.jpg"
  },
  {
    id: "R02_DEM_02",
    section: "Zmiany i struktura ludności",
    type: "fill_in",
    prompt: "Przyrost naturalny to różnica między liczbą __________ a liczbą __________.",
    options: null,
    answer: ["urodzeń", "zgonów"],
    altAnswers: [["urodzeń", "urodzenia"], ["zgonów", "zgony"]],
    explanation: "Przyrost naturalny oblicza się, odejmując liczbę zgonów od liczby urodzeń."
  },
  {
    id: "R02_DEM_03",
    section: "Zmiany i struktura ludności",
    type: "scenario",
    prompt: "W pewnym roku w kraju odnotowano 300 tysięcy urodzeń i 420 tysięcy zgonów. Jaki był przyrost naturalny?",
    options: ["dodatni i równy 120 tys.", "ujemny i równy -120 tys.", "zerowy", "dodatni i równy 720 tys.", "ujemny i równy -720 tys.", "nie można go obliczyć"],
    answer: 1,
    explanation: "Od liczby urodzeń odejmujemy liczbę zgonów: 300 tys. - 420 tys. = -120 tys., więc przyrost był ujemny."
  },
  {
    id: "R02_DEM_04",
    section: "Zmiany i struktura ludności",
    type: "match",
    prompt: "Połącz ekonomiczną grupę wieku z jej zakresem.",
    options: null,
    left: ["wiek przedprodukcyjny", "wiek produkcyjny kobiet", "wiek produkcyjny mężczyzn", "wiek poprodukcyjny kobiet"],
    right: ["0-17 lat", "18-59 lat", "18-64 lata", "od 60 lat"],
    answer: {
      "wiek przedprodukcyjny": "0-17 lat",
      "wiek produkcyjny kobiet": "18-59 lat",
      "wiek produkcyjny mężczyzn": "18-64 lata",
      "wiek poprodukcyjny kobiet": "od 60 lat"
    },
    explanation: "Ekonomiczne grupy wieku odzwierciedlają zdolność ludności do pracy, a granice wieku produkcyjnego i poprodukcyjnego różnią się dla kobiet i mężczyzn.",
    image: "r02_grupy_wieku_ludnosci.jpg"
  },
  {
    id: "R02_DEM_05",
    section: "Zmiany i struktura ludności",
    type: "single_choice",
    prompt: "Ile kobiet przypadało średnio na 100 mężczyzn w Polsce w 2023 roku?",
    options: ["93", "97", "100", "103", "107", "112"],
    answer: 4,
    explanation: "W 2023 roku na 100 mężczyzn przypadało średnio 107 kobiet."
  },
  {
    id: "R02_DEM_06",
    section: "Zmiany i struktura ludności",
    type: "multi_select",
    prompt: "Zaznacz przyczyny przewagi liczebnej kobiet w starszych grupach wieku.",
    options: ["Kobiety żyją średnio dłużej", "Mężczyźni częściej giną w wypadkach", "Mężczyźni częściej umierają na choroby cywilizacyjne", "Zawsze rodzi się więcej dziewcząt niż chłopców", "Wpływ wyższej śmiertelności mężczyzn podczas II wojny światowej"],
    answer: [0, 1, 2, 4],
    explanation: "Przewaga kobiet w starszych rocznikach wynika głównie z dłuższego życia kobiet, wyższej śmiertelności mężczyzn oraz skutków II wojny światowej.",
    image: "r02_grupy_wieku_ludnosci.jpg"
  },
  {
    id: "R02_DEM_07",
    section: "Zmiany i struktura ludności",
    type: "true_false",
    prompt: "W 2023 roku średnia długość trwania życia kobiet w Polsce była wyższa niż mężczyzn.",
    options: null,
    answer: true,
    explanation: "W 2023 roku kobiety żyły średnio 82 lata, a mężczyźni 74,7 roku."
  },
  {
    id: "R02_DEM_08",
    section: "Zmiany i struktura ludności",
    type: "single_choice",
    prompt: "Jaki kształt ma piramida płci i wieku społeczeństwa młodego?",
    options: ["Trójkąt o szerokiej podstawie", "Prostokąt o wąskiej podstawie", "Odwrócony trójkąt", "Koło", "Wąski słup bez podstawy", "Linia pozioma"],
    answer: 0,
    explanation: "Duży udział dzieci i młodzieży sprawia, że piramida społeczeństwa młodego przypomina trójkąt o szerokiej podstawie."
  },
  {
    id: "R02_DEM_09",
    section: "Zmiany i struktura ludności",
    type: "single_choice",
    prompt: "Co było główną przyczyną wyżu demograficznego w Polsce na przełomie lat 70. i 80. XX wieku?",
    options: ["Wejście w dorosłość licznego pokolenia powojennego wyżu", "Nagły wzrost imigracji z Azji", "Spadek długości życia", "Zmniejszenie liczby małżeństw", "Wyludnienie miast", "Zmiana granic państwa"],
    answer: 0,
    explanation: "Liczne pokolenie powojennego wyżu weszło w dorosłość i miało dzieci, tworząc echo wyżu demograficznego.",
    image: "r02_przemiany_demograficzne.jpg"
  },
  {
    id: "R02_DEM_10",
    section: "Zmiany i struktura ludności",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do przyczyn starzenia się społeczeństwa: spadek liczby urodzeń, wydłużanie życia, wzrost udziału osób starszych, gwałtowny wzrost liczby urodzeń.",
    options: null,
    answer: "gwałtowny wzrost liczby urodzeń",
    explanation: "Starzenie się społeczeństwa wiąże się ze spadkiem liczby urodzeń i wydłużaniem życia, a nie z gwałtownym wzrostem urodzeń."
  },
  {
    id: "R02_DEM_11",
    section: "Zmiany i struktura ludności",
    type: "riddle",
    prompt: "Przeliczona na 1000 mieszkańców różnica między liczbą urodzeń a liczbą zgonów to...",
    options: null,
    answer: "współczynnik przyrostu naturalnego",
    altAnswers: ["współczynnik przyrostu naturalnego", "wspolczynnik przyrostu naturalnego"],
    explanation: "Współczynnik przyrostu naturalnego wyraża się w promilach i pozwala porównywać obszary o różnej liczbie ludności."
  },
  {
    id: "R02_DEM_12",
    section: "Zmiany i struktura ludności",
    type: "sort",
    prompt: "Przyporządkuj osoby do ekonomicznych grup wieku.",
    options: null,
    items: ["dziewczynka w wieku 12 lat", "kobieta w wieku 35 lat", "mężczyzna w wieku 62 lat", "kobieta w wieku 67 lat", "mężczyzna w wieku 70 lat"],
    categories: ["wiek przedprodukcyjny", "wiek produkcyjny", "wiek poprodukcyjny"],
    answer: {
      "wiek przedprodukcyjny": ["dziewczynka w wieku 12 lat"],
      "wiek produkcyjny": ["kobieta w wieku 35 lat", "mężczyzna w wieku 62 lat"],
      "wiek poprodukcyjny": ["kobieta w wieku 67 lat", "mężczyzna w wieku 70 lat"]
    },
    explanation: "Wiek przedprodukcyjny obejmuje osoby do 17 lat, produkcyjny kobiety 18-59 lat i mężczyzn 18-64 lata, a starsze osoby należą do wieku poprodukcyjnego.",
    image: "r02_grupy_wieku_ludnosci.jpg"
  },
  {
    id: "R02_DEM_13",
    section: "Zmiany i struktura ludności",
    type: "multi_select",
    prompt: "Zaznacz cechy polskiego społeczeństwa w 2023 roku.",
    options: ["Kobiety stanowiły 51,7% ludności", "Mężczyźni stanowili 48,3% ludności", "Osoby w wieku produkcyjnym stanowiły 58,4% ludności", "Osoby w wieku przedprodukcyjnym stanowiły większość", "Społeczeństwo się starzało"],
    answer: [0, 1, 2, 4],
    explanation: "W 2023 roku kobiety stanowiły 51,7%, mężczyźni 48,3%, a osoby w wieku produkcyjnym 58,4% ludności; społeczeństwo Polski się starzało."
  },

  {
    id: "R02_MIG_01",
    section: "Rozmieszczenie i migracje",
    type: "riddle",
    prompt: "Liczba mieszkańców przypadająca na 1 km² to...",
    options: null,
    answer: "gęstość zaludnienia",
    altAnswers: ["gęstość zaludnienia", "gestosc zaludnienia"],
    explanation: "Gęstość zaludnienia pozwala opisać rozmieszczenie ludności na danym obszarze.",
    image: "r02_gestosc_zaludnienia_polski.jpg"
  },
  {
    id: "R02_MIG_02",
    section: "Rozmieszczenie i migracje",
    type: "single_choice",
    prompt: "Które województwo miało w 2024 roku największą gęstość zaludnienia?",
    options: ["śląskie", "podlaskie", "warmińsko-mazurskie", "lubuskie", "zachodniopomorskie", "opolskie"],
    answer: 0,
    explanation: "Województwo śląskie miało największą gęstość zaludnienia, wynoszącą około 350 osób na 1 km².",
    image: "r02_gestosc_zaludnienia_polski.jpg"
  },
  {
    id: "R02_MIG_03",
    section: "Rozmieszczenie i migracje",
    type: "sort",
    prompt: "Przyporządkuj czynniki rozmieszczenia ludności do odpowiednich grup.",
    options: null,
    items: ["ukształtowanie powierzchni", "warunki glebowe", "możliwość znalezienia pracy", "dostępność usług", "zmiany granic państwowych", "przymusowe przesiedlenia"],
    categories: ["przyrodnicze", "społeczno-ekonomiczne", "historyczne"],
    answer: {
      "przyrodnicze": ["ukształtowanie powierzchni", "warunki glebowe"],
      "społeczno-ekonomiczne": ["możliwość znalezienia pracy", "dostępność usług"],
      "historyczne": ["zmiany granic państwowych", "przymusowe przesiedlenia"]
    },
    explanation: "Rozmieszczenie ludności zależy od czynników przyrodniczych, społeczno-ekonomicznych oraz historycznych."
  },
  {
    id: "R02_MIG_04",
    section: "Rozmieszczenie i migracje",
    type: "multi_select",
    prompt: "Zaznacz warunki przyrodnicze sprzyjające większej gęstości zaludnienia.",
    options: ["Żyzne gleby", "Dostęp do surowców mineralnych", "Rozległe bagna", "Silnie urozmaicona rzeźba wysokich gór", "Dogodne warunki wodne"],
    answer: [0, 1, 4],
    explanation: "Żyzne gleby, dogodne warunki wodne i surowce będące podstawą rozwoju przemysłu sprzyjają koncentracji ludności; bagna i wysokie góry ją utrudniają."
  },
  {
    id: "R02_MIG_05",
    section: "Rozmieszczenie i migracje",
    type: "match",
    prompt: "Połącz termin migracyjny z jego znaczeniem.",
    options: null,
    left: ["imigracja", "emigracja", "migracja wewnętrzna", "migracja zagraniczna"],
    right: ["napływ ludności", "odpływ ludności", "zmiana miejsca zamieszkania w obrębie państwa", "przeniesienie się do innego państwa"],
    answer: {
      "imigracja": "napływ ludności",
      "emigracja": "odpływ ludności",
      "migracja wewnętrzna": "zmiana miejsca zamieszkania w obrębie państwa",
      "migracja zagraniczna": "przeniesienie się do innego państwa"
    },
    explanation: "Imigracja oznacza napływ, emigracja odpływ, a migracje dzielimy na wewnętrzne i zagraniczne.",
    image: "r02_kierunki_migracji.jpg"
  },
  {
    id: "R02_MIG_06",
    section: "Rozmieszczenie i migracje",
    type: "true_false",
    prompt: "Od początku XXI wieku w Polsce obserwuje się odpływ ludności z dużych miast na tereny podmiejskie.",
    options: null,
    answer: true,
    explanation: "Wielu mieszkańców dużych miast przenosi się na obrzeża i do dobrze skomunikowanych wsi podmiejskich."
  },
  {
    id: "R02_MIG_07",
    section: "Rozmieszczenie i migracje",
    type: "single_choice",
    prompt: "Jaka jest obecnie główna przyczyna emigracji Polaków?",
    options: ["względy finansowe", "zmiana klimatu", "brak szkół podstawowych", "przymusowe przesiedlenia", "poszukiwanie żyznych gleb", "brak miast"],
    answer: 0,
    explanation: "Współczesna emigracja z Polski ma przede wszystkim charakter zarobkowy i jest kierowana głównie do zamożniejszych państw."
  },
  {
    id: "R02_MIG_08",
    section: "Rozmieszczenie i migracje",
    type: "scenario",
    prompt: "Młoda osoba wyjeżdża z małego miasta do dużego ośrodka, aby studiować, a po ukończeniu nauki zostaje tam do pracy. Jaki to rodzaj przemieszczenia?",
    options: ["migrację wewnętrzną", "imigrację zagraniczną", "emigrację zagraniczną", "przyrost naturalny", "przesiedlenie powojenne", "urbanizację statystyczną"],
    answer: 0,
    explanation: "Zmiana miejsca zamieszkania w granicach jednego państwa jest migracją wewnętrzną.",
    image: "r02_kierunki_migracji.jpg"
  },
  {
    id: "R02_MIG_09",
    section: "Rozmieszczenie i migracje",
    type: "multi_select",
    prompt: "Zaznacz pozytywne skutki migracji zagranicznych dla Polski.",
    options: ["Wypełnianie luk na rynku pracy przez imigrantów", "Poprawa sytuacji materialnej emigrantów i ich rodzin", "Rozwój usług transportowych dla migrantów", "Niedobór wykwalifikowanych pracowników", "Rozłąka z rodziną"],
    answer: [0, 1, 2],
    explanation: "Do korzyści należą uzupełnianie niedoborów pracowników, poprawa sytuacji części rodzin i rozwój usług dla migrantów; niedobór kadr i rozłąka są skutkami negatywnymi."
  },
  {
    id: "R02_MIG_10",
    section: "Rozmieszczenie i migracje",
    type: "fill_in",
    prompt: "Przyrost rzeczywisty jest sumą przyrostu __________ i salda __________.",
    options: null,
    answer: ["naturalnego", "migracji"],
    altAnswers: [["naturalnego", "naturalny"], ["migracji", "migracyjnego", "migracyjne"]],
    explanation: "Rzeczywista zmiana liczby ludności wynika łącznie z bilansu urodzeń i zgonów oraz bilansu napływu i odpływu ludności."
  },
  {
    id: "R02_MIG_11",
    section: "Rozmieszczenie i migracje",
    type: "scenario",
    prompt: "W kraju urodziło się 500 tys. osób, zmarło 450 tys., a saldo migracji wyniosło -20 tys. Ile wyniósł przyrost rzeczywisty?",
    options: ["30 tys.", "50 tys.", "-30 tys.", "-70 tys.", "70 tys.", "970 tys."],
    answer: 0,
    explanation: "Przyrost naturalny wynosi 50 tys., a po dodaniu salda migracji -20 tys. przyrost rzeczywisty wynosi 30 tys."
  },
  {
    id: "R02_MIG_12",
    section: "Rozmieszczenie i migracje",
    type: "odd_one_out",
    prompt: "Wskaż państwo niepasujące do najważniejszych skupisk Polonii: Stany Zjednoczone, Brazylia, Niemcy, Japonia.",
    options: null,
    answer: "Japonia",
    explanation: "Najliczniejsze skupiska Polonii znajdują się w Stanach Zjednoczonych, Brazylii i Niemczech."
  },
  {
    id: "R02_MIG_13",
    section: "Rozmieszczenie i migracje",
    type: "single_choice",
    prompt: "Dlaczego na wsiach oddalonych od dużych miast rośnie udział ludności w wieku poprodukcyjnym?",
    options: ["Wyjeżdżają głównie ludzie młodzi", "Rodzą się tam wyłącznie chłopcy", "Napływają głównie emeryci z zagranicy", "Powstaje więcej szkół", "Zwiększa się zatrudnienie w przemyśle", "Maleje długość życia"],
    answer: 0,
    explanation: "Odpływ młodych mieszkańców przyspiesza starzenie się społeczeństw wsi oddalonych od dużych ośrodków.",
    image: "r02_wies_podmiejska_i_peryferyjna.jpg"
  },
  {
    id: "R02_MIG_14",
    section: "Rozmieszczenie i migracje",
    type: "multi_select",
    prompt: "Zaznacz cechy obszarów wiejskich położonych blisko dużych miast.",
    options: ["Często mają dodatnie saldo migracji", "Przyciągają lepiej sytuowane młode osoby", "Mieszkańcy często dojeżdżają do miasta", "Zawsze mają ponad 30% ludności poprodukcyjnej", "Są atrakcyjne dzięki dobrej komunikacji z miastem"],
    answer: [0, 1, 2, 4],
    explanation: "Wsie podmiejskie przyciągają młodych mieszkańców miast, zwłaszcza gdy są dobrze skomunikowane z ośrodkiem pracy i usług.",
    image: "r02_wies_podmiejska_i_peryferyjna.jpg"
  },

  {
    id: "R02_SPO_01",
    section: "Różnorodność i zatrudnienie",
    type: "single_choice",
    prompt: "Jaki odsetek mieszkańców Polski określił w spisie z 2021 roku swoją narodowość jako wyłącznie polską?",
    options: ["64,0%", "75,8%", "89,8%", "93,7%", "96,3%", "99,9%"],
    answer: 4,
    explanation: "Narodowość wyłącznie polską zadeklarowało 96,3% mieszkańców, dlatego Polska jest mało zróżnicowana narodowościowo.",
    image: "r02_roznorodnosc_kulturowa_polski.jpg"
  },
  {
    id: "R02_SPO_02",
    section: "Różnorodność i zatrudnienie",
    type: "multi_select",
    prompt: "Zaznacz trzy najliczniejsze mniejszości narodowe w Polsce.",
    options: ["Ukraińcy", "Niemcy", "Białorusini", "Karaimi", "Tatarzy", "Łemkowie"],
    answer: [0, 1, 2],
    explanation: "Do najliczniejszych mniejszości narodowych w Polsce należą Ukraińcy, Niemcy i Białorusini.",
    image: "r02_roznorodnosc_kulturowa_polski.jpg"
  },
  {
    id: "R02_SPO_03",
    section: "Różnorodność i zatrudnienie",
    type: "sort",
    prompt: "Przyporządkuj grupy do mniejszości narodowych albo etnicznych.",
    options: null,
    items: ["Ukraińcy", "Niemcy", "Białorusini", "Łemkowie", "Romowie", "Tatarzy"],
    categories: ["mniejszości narodowe", "mniejszości etniczne"],
    answer: {
      "mniejszości narodowe": ["Ukraińcy", "Niemcy", "Białorusini"],
      "mniejszości etniczne": ["Łemkowie", "Romowie", "Tatarzy"]
    },
    explanation: "Mniejszości narodowe utożsamiają się z narodem posiadającym własne państwo, a mniejszości etniczne zachowują odrębność bez takiego odniesienia.",
    image: "r02_roznorodnosc_kulturowa_polski.jpg"
  },
  {
    id: "R02_SPO_04",
    section: "Różnorodność i zatrudnienie",
    type: "true_false",
    prompt: "Imigranci, którzy przybyli do Polski w ostatnich dziesięcioleciach, są automatycznie zaliczani do mniejszości narodowych.",
    options: null,
    answer: false,
    explanation: "Warunkiem uznania za mniejszość narodową jest między innymi zamieszkiwanie Polski przez przodków danej grupy od co najmniej 100 lat."
  },
  {
    id: "R02_SPO_05",
    section: "Różnorodność i zatrudnienie",
    type: "riddle",
    prompt: "Oryginalne stroje, muzyka, taniec i rzemiosło społeczności etnicznej tworzą jej...",
    options: null,
    answer: "folklor",
    altAnswers: ["folklor"],
    explanation: "Folklor obejmuje tradycje danej społeczności, w tym stroje, muzykę, taniec i rzemiosło artystyczne."
  },
  {
    id: "R02_SPO_06",
    section: "Różnorodność i zatrudnienie",
    type: "odd_one_out",
    prompt: "Wskaż grupę niepasującą do społeczności etnicznych: Ślązacy, Kaszubi, Podhalanie, Białorusini.",
    options: null,
    answer: "Białorusini",
    explanation: "Ślązacy, Kaszubi i Podhalanie są społecznościami etnicznymi, natomiast Białorusini należą do mniejszości narodowych."
  },
  {
    id: "R02_SPO_07",
    section: "Różnorodność i zatrudnienie",
    type: "match",
    prompt: "Połącz sektor gospodarki z odpowiadającą mu działalnością.",
    options: null,
    left: ["rolnictwo", "przemysł", "usługi"],
    right: ["uprawa zbóż", "produkcja maszyn", "opieka zdrowotna"],
    answer: {
      "rolnictwo": "uprawa zbóż",
      "przemysł": "produkcja maszyn",
      "usługi": "opieka zdrowotna"
    },
    explanation: "Gospodarkę dzieli się na rolnictwo, przemysł wraz z budownictwem oraz usługi.",
    image: "r02_sektory_gospodarki.jpg"
  },
  {
    id: "R02_SPO_08",
    section: "Różnorodność i zatrudnienie",
    type: "single_choice",
    prompt: "Który sektor zatrudniał w Polsce w 2023 roku ponad 60% pracujących?",
    options: ["usługi", "rolnictwo", "przemysł wydobywczy", "budownictwo", "leśnictwo", "rybactwo"],
    answer: 0,
    explanation: "W 2023 roku w usługach pracowało około 63% zatrudnionych w Polsce.",
    image: "r02_sektory_gospodarki.jpg"
  },
  {
    id: "R02_SPO_09",
    section: "Różnorodność i zatrudnienie",
    type: "sequence",
    prompt: "Ułóż dominujące kierunki zmian struktury zatrudnienia w Polsce od okresu powojennego do współczesności.",
    options: null,
    items: ["Wzrost znaczenia usług po 1989 roku", "Dominacja zatrudnienia w rolnictwie tuż po wojnie", "Wzrost zatrudnienia w przemyśle w późniejszych dekadach"],
    answer: ["Dominacja zatrudnienia w rolnictwie tuż po wojnie", "Wzrost zatrudnienia w przemyśle w późniejszych dekadach", "Wzrost znaczenia usług po 1989 roku"],
    explanation: "Po wojnie dominowało rolnictwo, później wzrósł przemysł, a po 1989 roku szybko rozwinęły się usługi."
  },
  {
    id: "R02_SPO_10",
    section: "Różnorodność i zatrudnienie",
    type: "multi_select",
    prompt: "Zaznacz cechy struktury zatrudnienia państw wysoko rozwiniętych.",
    options: ["Największy udział usług", "Najmniejszy udział rolnictwa", "Wysoka automatyzacja produkcji", "Dominacja zatrudnienia w rolnictwie", "Duże zapotrzebowanie na różnorodne usługi"],
    answer: [0, 1, 2, 4],
    explanation: "W krajach wysoko rozwiniętych dominuje zatrudnienie w usługach, a wydajne i zautomatyzowane rolnictwo oraz przemysł wymagają mniejszej liczby pracowników.",
    image: "r02_sektory_gospodarki.jpg"
  },
  {
    id: "R02_SPO_11",
    section: "Różnorodność i zatrudnienie",
    type: "fill_in",
    prompt: "Największy udział zatrudnionych w rolnictwie występuje między innymi w województwach __________, podlaskim i świętokrzyskim.",
    options: null,
    answer: ["lubelskim"],
    altAnswers: [["lubelskim", "lubelskie"]],
    explanation: "Województwa lubelskie, podlaskie i świętokrzyskie wyróżniają się wysokim udziałem zatrudnionych w rolnictwie."
  },
  {
    id: "R02_SPO_12",
    section: "Różnorodność i zatrudnienie",
    type: "scenario",
    prompt: "W województwie działa wiele dużych miast, banków, uczelni i urzędów. Który sektor powinien mieć tam szczególnie duży udział w zatrudnieniu?",
    options: ["usługi", "rolnictwo", "rybactwo", "leśnictwo", "łowiectwo", "górnictwo"],
    answer: 0,
    explanation: "Duże miasta skupiają działalność usługową, dlatego usługi mają szczególnie duży udział między innymi w województwie mazowieckim."
  },

  {
    id: "R02_MIA_01",
    section: "Miasta i urbanizacja",
    type: "multi_select",
    prompt: "Zaznacz cechy jednostki osadniczej uznawanej w Polsce za miasto.",
    options: ["Zwarta zabudowa", "Przewaga funkcji nierolniczych", "Posiadanie praw miejskich", "Obowiązkowo ponad milion mieszkańców", "Najczęściej wielopiętrowa zabudowa"],
    answer: [0, 1, 2, 4],
    explanation: "Miasto ma zwartą, zwykle wielopiętrową zabudowę, pełni funkcje nierolnicze i posiada prawa miejskie.",
    image: "r02_funkcje_miasta.jpg"
  },
  {
    id: "R02_MIA_02",
    section: "Miasta i urbanizacja",
    type: "match",
    prompt: "Połącz funkcję miasta z jej przejawem.",
    options: null,
    left: ["administracyjna", "transportowa", "edukacyjno-naukowa", "religijna"],
    right: ["siedziba władz i sądów", "ważny węzeł komunikacyjny", "uczelnie i instytuty badawcze", "ośrodek pielgrzymkowy"],
    answer: {
      "administracyjna": "siedziba władz i sądów",
      "transportowa": "ważny węzeł komunikacyjny",
      "edukacyjno-naukowa": "uczelnie i instytuty badawcze",
      "religijna": "ośrodek pielgrzymkowy"
    },
    explanation: "Funkcje miasta wynikają z działalności i instytucji skupionych w danym ośrodku.",
    image: "r02_funkcje_miasta.jpg"
  },
  {
    id: "R02_MIA_03",
    section: "Miasta i urbanizacja",
    type: "scenario",
    prompt: "Miasto rozwinęło się dzięki położeniu nad morzem, portowi i ważnym szlakom przewozu towarów. Które funkcje odegrały najważniejszą rolę?",
    options: ["handlowa i transportowa", "rolnicza i leśna", "religijna i obronna", "wyłącznie mieszkaniowa", "łowiecka i rybacka", "wyłącznie administracyjna"],
    answer: 0,
    explanation: "Położenie portowe sprzyja wymianie handlowej i transportowi, jak w przypadku Gdańska, Szczecina czy Gdyni.",
    image: "r02_funkcje_miasta.jpg"
  },
  {
    id: "R02_MIA_04",
    section: "Miasta i urbanizacja",
    type: "riddle",
    prompt: "Proces rozwoju istniejących miast i powstawania nowych to...",
    options: null,
    answer: "urbanizacja",
    altAnswers: ["urbanizacja"],
    explanation: "Urbanizacja obejmuje rozwój miast, wzrost liczby ich mieszkańców, zwiększanie powierzchni miejskiej i upowszechnianie miejskiego stylu życia."
  },
  {
    id: "R02_MIA_05",
    section: "Miasta i urbanizacja",
    type: "fill_in",
    prompt: "Wskaźnik urbanizacji to procentowy udział mieszkańców __________ w ogólnej liczbie __________.",
    options: null,
    answer: ["miast", "ludności"],
    altAnswers: [["miast", "miasta"], ["ludności", "ludnosci", "mieszkańców"]],
    explanation: "Wskaźnik urbanizacji pokazuje, jaka część ludności kraju lub regionu mieszka w miastach."
  },
  {
    id: "R02_MIA_06",
    section: "Miasta i urbanizacja",
    type: "single_choice",
    prompt: "Ile wynosił w przybliżeniu wskaźnik urbanizacji Polski w 2023 roku?",
    options: ["21%", "41%", "50%", "59%", "76%", "92%"],
    answer: 3,
    explanation: "W 2023 roku w miastach mieszkało około 59% ludności Polski."
  },
  {
    id: "R02_MIA_07",
    section: "Miasta i urbanizacja",
    type: "true_false",
    prompt: "Najwyższym poziomem urbanizacji w Polsce odznaczają się zachodnia część kraju i Górny Śląsk.",
    options: null,
    answer: true,
    explanation: "Wskaźnik urbanizacji jest najwyższy na zachodzie i na Górnym Śląsku, a najniższy w południowo-wschodniej Polsce."
  },
  {
    id: "R02_MIA_08",
    section: "Miasta i urbanizacja",
    type: "single_choice",
    prompt: "Które miasto było największym miastem Polski w 2023 roku?",
    options: ["Warszawa", "Kraków", "Wrocław", "Łódź", "Poznań", "Gdańsk"],
    answer: 0,
    explanation: "Warszawa liczyła prawie 1,9 mln mieszkańców i była największym miastem Polski."
  },
  {
    id: "R02_MIA_09",
    section: "Miasta i urbanizacja",
    type: "odd_one_out",
    prompt: "Wskaż miasto, które nie tworzy aglomeracji monocentrycznej: Warszawa, Łódź, Kraków, Katowice.",
    options: null,
    answer: "Katowice",
    explanation: "Warszawa, Łódź i Kraków tworzą aglomeracje monocentryczne, a Katowice są częścią policentrycznej konurbacji katowickiej."
  },
  {
    id: "R02_MIA_10",
    section: "Miasta i urbanizacja",
    type: "single_choice",
    prompt: "Jak nazywa się aglomeracja policentryczna?",
    options: ["konurbacja", "suburbium", "województwo", "powiat", "megawieś", "dzielnica"],
    answer: 0,
    explanation: "Aglomeracja policentryczna, złożona z wielu równorzędnych miast bez jednego dominującego ośrodka, to konurbacja."
  },
  {
    id: "R02_MIA_11",
    section: "Miasta i urbanizacja",
    type: "scenario",
    prompt: "Zespół miejski składa się z jednego dużego ośrodka oraz wielu mniejszych miast powiązanych z nim komunikacyjnie. Jaki to typ aglomeracji?",
    options: ["monocentryczna", "policentryczna", "wiejska", "przemysłowa bez centrum", "administracyjna", "transgraniczna"],
    answer: 0,
    explanation: "Aglomeracja monocentryczna ma jeden duży ośrodek dominujący i otaczające go mniejsze miasta.",
    image: "r02_typy_aglomeracji.jpg"
  },
  {
    id: "R02_MIA_12",
    section: "Miasta i urbanizacja",
    type: "true_false",
    prompt: "W konurbacji katowickiej nie ma jednego miasta wyraźnie dominującego nad pozostałymi.",
    options: null,
    answer: true,
    explanation: "Konurbację katowicką tworzy wiele blisko położonych miast o podobnym znaczeniu.",
    image: "r02_typy_aglomeracji.jpg"
  },
  {
    id: "R02_MIA_13",
    section: "Miasta i urbanizacja",
    type: "multi_select",
    prompt: "Zaznacz zmiany typowe dla rozwijających się stref podmiejskich dużych miast.",
    options: ["Wzrost zaludnienia", "Powstawanie osiedli na dawnych gruntach rolnych", "Rozwój zabudowy przemysłowo-usługowej", "Wzrost udziału młodych mieszkańców", "Całkowity zanik dojazdów do miasta"],
    answer: [0, 1, 2, 3],
    explanation: "Rozwój stref podmiejskich zwiększa zaludnienie, zmienia strukturę wieku i przekształca dawne tereny rolnicze w zabudowę mieszkaniową oraz usługowo-przemysłową.",
    image: "r02_przemiany_strefy_podmiejskiej.jpg"
  },

  {
    id: "R02_HARD_01",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Zmiana nazwy Macedonii na Macedonię Północną", "Rozpad Czechosłowacji", "Powstanie Kosowa", "Rozpad ZŚRS"],
    answer: ["Rozpad ZŚRS", "Rozpad Czechosłowacji", "Powstanie Kosowa", "Zmiana nazwy Macedonii na Macedonię Północną"],
    explanation: "ZŚRS rozpadł się w 1991 roku, Czechosłowacja w 1993 roku, Kosowo powstało w 2008 roku, a Macedonia przyjęła nazwę Macedonia Północna w 2019 roku.",
    image: "r02_mapa_polityczna_europy.jpg"
  },
  {
    id: "R02_HARD_02",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które województwa miały w 2024 roku najniższą średnią gęstość zaludnienia, po 56 osób na 1 km²?",
    options: ["podlaskie i warmińsko-mazurskie", "śląskie i małopolskie", "mazowieckie i łódzkie", "lubelskie i podkarpackie", "opolskie i dolnośląskie", "pomorskie i wielkopolskie"],
    answer: 0,
    explanation: "Najrzadziej zaludnione były województwa podlaskie i warmińsko-mazurskie, ze średnią po 56 osób na 1 km²."
  },
  {
    id: "R02_HARD_03",
    section: "Super trudne",
    type: "scenario",
    prompt: "W 2023 roku urodziło się 272 451 osób, zmarło 409 036 osób, a ludność Polski liczyła 37 636 510 osób. Jaki był w przybliżeniu współczynnik przyrostu naturalnego?",
    options: ["-3,62‰", "-0,36‰", "0‰", "3,62‰", "-13,66‰", "36,2‰"],
    answer: 0,
    explanation: "Przyrost naturalny wyniósł -136 585 osób, co po przeliczeniu na 1000 mieszkańców daje około -3,62‰."
  },
  {
    id: "R02_HARD_04",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz element piramidy wieku Polski z jego przyczyną.",
    options: null,
    left: ["wcięcie wieku 78-82 lata", "wybrzuszenie wieku 63-73 lata", "wcięcie wieku 53-58 lat", "wybrzuszenie wieku 37-47 lat"],
    right: ["mała liczba urodzeń i duża liczba zgonów podczas II wojny światowej", "powojenny wyż demograficzny", "niż urodzeń dzieci roczników okupacyjnych", "echo powojennego wyżu"],
    answer: {
      "wcięcie wieku 78-82 lata": "mała liczba urodzeń i duża liczba zgonów podczas II wojny światowej",
      "wybrzuszenie wieku 63-73 lata": "powojenny wyż demograficzny",
      "wcięcie wieku 53-58 lat": "niż urodzeń dzieci roczników okupacyjnych",
      "wybrzuszenie wieku 37-47 lat": "echo powojennego wyżu"
    },
    explanation: "Nieregularności piramidy wieku odzwierciedlają wojenne straty, powojenny wyż, następujący po nim niż i późniejsze echo wyżu."
  },
  {
    id: "R02_HARD_05",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne pary obszaru i czynnika sprzyjającego jego większemu zaludnieniu.",
    options: ["Wyżyna Śląska - surowce mineralne i przemysł", "Nizina Śląska - żyzne gleby", "Pojezierze Wielkopolskie - żyzne gleby", "wyższe partie gór - łagodna rzeźba", "obszary bagienne - łatwe warunki osadnicze"],
    answer: [0, 1, 2],
    explanation: "Wyżyna Śląska przyciągała ludność dzięki przemysłowi opartemu na surowcach, a Nizina Śląska i Pojezierze Wielkopolskie dzięki żyznym glebom.",
    image: "r02_gestosc_zaludnienia_polski.jpg"
  },
  {
    id: "R02_HARD_06",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu Polaków i osób polskiego pochodzenia mieszka według szacunków poza granicami kraju?",
    options: ["około 2 mln", "około 5 mln", "około 10 mln", "około 15 mln", "około 22 mln", "około 37,5 mln"],
    answer: 4,
    explanation: "Poza Polską mieszka około 22 mln Polaków i osób polskiego pochodzenia.",
    image: "r02_kierunki_migracji.jpg"
  },
  {
    id: "R02_HARD_07",
    section: "Super trudne",
    type: "scenario",
    prompt: "Przyrost naturalny wyniósł -136 585 osób, a saldo migracji 6766 osób. Ile wyniósł przyrost rzeczywisty?",
    options: ["-129 819", "-143 351", "129 819", "143 351", "-6 766", "136 585"],
    answer: 0,
    explanation: "Przyrost rzeczywisty to suma przyrostu naturalnego i salda migracji: -136 585 + 6766 = -129 819."
  },
  {
    id: "R02_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W którym mieście znajduje się największy ośrodek Polonii na świecie?",
    options: ["Chicago", "Berlin", "Londyn", "Paryż", "Toronto", "Sydney"],
    answer: 0,
    explanation: "Największym ośrodkiem Polonii jest Chicago, gdzie w mieście i na przedmieściach żyje około miliona osób polskiego pochodzenia."
  },
  {
    id: "R02_HARD_09",
    section: "Super trudne",
    type: "true_false",
    prompt: "Dodatnie saldo migracji na obszarach wiejskich województw zachodniopomorskiego i podlaskiego występuje przede wszystkim w pobliżu dużych miast.",
    options: null,
    answer: true,
    explanation: "Wsie położone blisko Szczecina i Białegostoku przyciągają mieszkańców miast, podczas gdy wiele odległych wsi się wyludnia.",
    image: "r02_wies_podmiejska_i_peryferyjna.jpg"
  },
  {
    id: "R02_HARD_10",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Język kaszubski uznano za język __________ w roku __________.",
    options: null,
    answer: ["regionalny", "2005"],
    altAnswers: [["regionalny", "regionalny język"], ["2005", "2005 r."]],
    explanation: "Od 2005 roku język kaszubski ma status języka regionalnego i może być używany w szkołach i urzędach."
  },
  {
    id: "R02_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Która mniejszość etniczna jest najliczniejsza w Polsce?",
    options: ["Łemkowie", "Romowie", "Tatarzy", "Karaimi", "Czesi", "Słowacy"],
    answer: 0,
    explanation: "Najliczniejszą mniejszością etniczną w Polsce są Łemkowie, a kolejną pod względem liczebności Romowie."
  },
  {
    id: "R02_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne informacje o strukturze wyznaniowej Polski w 2021 roku.",
    options: ["Katolicy stanowili około 90% ludności", "Prawosławni stanowili około 0,6%", "Protestanci stanowili około 0,4%", "Świadków Jehowy było około 116 tys.", "Prawosławni stanowili większość ludności"],
    answer: [0, 1, 2, 3],
    explanation: "W Polsce dominowali katolicy, a znacznie mniejsze udziały mieli prawosławni i protestanci; świadków Jehowy było około 116 tys."
  },
  {
    id: "R02_HARD_13",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który zestaw prawidłowo podaje udział sektorów w zatrudnieniu w Polsce w 2023 roku?",
    options: ["usługi około 63%, przemysł prawie 30%, rolnictwo niecałe 8%", "rolnictwo około 63%, usługi prawie 30%, przemysł niecałe 8%", "przemysł około 63%, rolnictwo prawie 30%, usługi niecałe 8%", "po około 33% w każdym sektorze", "usługi około 90%, przemysł około 8%, rolnictwo około 2%", "rolnictwo około 50%, przemysł około 40%, usługi około 10%"],
    answer: 0,
    explanation: "W 2023 roku usługi skupiały około 63% pracujących, przemysł prawie 30%, a rolnictwo niecałe 8%."
  },
  {
    id: "R02_HARD_14",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz skutki przenoszenia ludności i firm z dużych miast do stref podmiejskich.",
    options: ["Wzrost udziału osób z wyższym wykształceniem", "Wzrost udziału dzieci i młodzieży", "Zanik części zagród i pól uprawnych", "Rozwój zabudowy przemysłowo-usługowej", "Całkowite ustanie dojazdów do centrum"],
    answer: [0, 1, 2, 3],
    explanation: "Napływ młodych i lepiej wykształconych mieszkańców oraz firm zmienia strukturę ludności i sposób zagospodarowania stref podmiejskich.",
    image: "r02_przemiany_strefy_podmiejskiej.jpg"
  }
];

const KID_PROMPTS = {
  R02_DEM_03: "Urodziło się 300 tysięcy osób, a zmarło 420 tysięcy. Czy przyrost naturalny był dodatni czy ujemny i ile wyniósł?",
  R02_MIG_11: "Urodzenia dały 50 tys. osób przyrostu, ale saldo migracji wyniosło -20 tys. Jaki był przyrost rzeczywisty?",
  R02_MIA_11: "Jedno duże miasto otacza wiele mniejszych. Jaki to typ aglomeracji?",
  R02_HARD_07: "Dodaj saldo migracji 6766 do przyrostu naturalnego -136 585. Jaki jest wynik?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Ludność i urbanizacja w Polsce",
  icon: "👥",
  sectionOrder: [
    "Europa i administracja Polski",
    "Zmiany i struktura ludności",
    "Rozmieszczenie i migracje",
    "Różnorodność i zatrudnienie",
    "Miasta i urbanizacja"
  ],
  sectionIcons: {
    "Europa i administracja Polski": "🗺️",
    "Zmiany i struktura ludności": "📊",
    "Rozmieszczenie i migracje": "🧭",
    "Różnorodność i zatrudnienie": "🤝",
    "Miasta i urbanizacja": "🏙️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
