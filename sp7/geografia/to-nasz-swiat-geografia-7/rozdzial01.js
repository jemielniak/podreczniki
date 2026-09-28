// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie i terytorium
//   GRN  = Sąsiedzi i granice
//   SKR  = Skrajne punkty i rozciągłość
//   KON  = Konsekwencje położenia
//   ADM  = Podział administracyjny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R01_POL_01",
    section: "Położenie i terytorium",
    type: "single_choice",
    prompt: "W której części Europy leży Polska?",
    options: ["w środkowej", "w północnej", "w południowej", "w zachodniej", "we wschodniej", "w południowo-zachodniej"],
    answer: 0,
    explanation: "Polska jest państwem położonym w środkowej Europie.",
    image: "r01_terytorium_polski.jpg"
  },
  {
    id: "R01_POL_02",
    section: "Położenie i terytorium",
    type: "single_choice",
    prompt: "Na których półkulach leży cała Polska?",
    options: ["północnej i wschodniej", "północnej i zachodniej", "południowej i wschodniej", "południowej i zachodniej", "północnej i południowej", "wschodniej i zachodniej"],
    answer: 0,
    explanation: "Całe terytorium Polski znajduje się na półkuli północnej i na półkuli wschodniej."
  },
  {
    id: "R01_POL_03",
    section: "Położenie i terytorium",
    type: "single_choice",
    prompt: "Ile wynosi powierzchnia lądowa Polski?",
    options: ["prawie 312 tys. km²", "około 11 tys. km²", "prawie 323 tys. km²", "około 440 tys. km²", "prawie 2479 tys. km²", "około 770 tys. km²"],
    answer: 0,
    explanation: "Powierzchnia lądowa Polski wynosi prawie 312 tys. km²."
  },
  {
    id: "R01_POL_04",
    section: "Położenie i terytorium",
    type: "multi_select",
    prompt: "Zaznacz akweny lub części wód należące do terytorium Polski.",
    options: ["pas otwartego morza wzdłuż wybrzeża", "Zatoka Gdańska", "część Zalewu Szczecińskiego", "część Zalewu Wiślanego", "całe Morze Bałtyckie", "Morze Północne"],
    answer: [0, 1, 2, 3],
    explanation: "Do Polski należy pas otwartego morza o szerokości 12 mil morskich, Zatoka Gdańska oraz części Zalewu Szczecińskiego i Zalewu Wiślanego.",
    image: "r01_terytorium_polski.jpg"
  },
  {
    id: "R01_POL_05",
    section: "Położenie i terytorium",
    type: "true_false",
    prompt: "Całkowita powierzchnia Polski obejmuje zarówno ląd, jak i należącą do kraju część wód Morza Bałtyckiego.",
    options: null,
    answer: true,
    explanation: "Po dodaniu wód o powierzchni około 11 tys. km² do obszaru lądowego całkowita powierzchnia Polski wynosi prawie 323 tys. km²."
  },
  {
    id: "R01_POL_06",
    section: "Położenie i terytorium",
    type: "fill_in",
    prompt: "Jedna mila morska ma __________ metry, a polski pas otwartego morza ma szerokość __________ mil morskich.",
    options: null,
    answer: ["1852", "12"],
    altAnswers: [["1852", "1852 m"], ["12", "12 mil", "12 mil morskich"]],
    explanation: "Jedna mila morska to 1852 m, a pas otwartego morza należący do Polski ma szerokość 12 mil morskich."
  },
  {
    id: "R01_POL_07",
    section: "Położenie i terytorium",
    type: "riddle",
    prompt: "Akwen, nad którym leży Polska i którego część należy do jej terytorium, to...",
    options: null,
    answer: "Morze Bałtyckie",
    altAnswers: ["Morze Bałtyckie", "Bałtyk"],
    explanation: "Polska leży nad Morzem Bałtyckim, a część jego wód wchodzi w skład terytorium państwa."
  },
  {
    id: "R01_POL_08",
    section: "Położenie i terytorium",
    type: "odd_one_out",
    prompt: "Co nie należy do polskiej części wód Bałtyku: Zatoka Gdańska, część Zalewu Wiślanego, część Zalewu Szczecińskiego, Morze Północne.",
    options: null,
    answer: "Morze Północne",
    explanation: "Morze Północne nie należy do terytorium Polski; pozostałe wymienione akweny w całości lub części wchodzą w skład polskiego terytorium."
  },
  {
    id: "R01_POL_09",
    section: "Położenie i terytorium",
    type: "scenario",
    prompt: "Do powierzchni lądowej Polski wynoszącej prawie 312 tys. km² doliczono około 11 tys. km² należących do niej wód. Jaki wynik należy podać jako całkowitą powierzchnię kraju?",
    options: ["prawie 323 tys. km²", "prawie 301 tys. km²", "około 312 tys. km²", "około 440 tys. km²", "około 770 tys. km²", "prawie 11 tys. km²"],
    answer: 0,
    explanation: "Suma powierzchni lądowej i morskiej Polski wynosi prawie 323 tys. km²."
  },
  {
    id: "R01_POL_10",
    section: "Położenie i terytorium",
    type: "match",
    prompt: "Połącz rodzaj powierzchni Polski z jej przybliżoną wielkością.",
    options: null,
    left: ["powierzchnia lądowa", "powierzchnia morska", "powierzchnia całkowita"],
    right: ["prawie 312 tys. km²", "około 11 tys. km²", "prawie 323 tys. km²"],
    answer: {
      "powierzchnia lądowa": "prawie 312 tys. km²",
      "powierzchnia morska": "około 11 tys. km²",
      "powierzchnia całkowita": "prawie 323 tys. km²"
    },
    explanation: "Powierzchnia całkowita jest sumą prawie 312 tys. km² lądu i około 11 tys. km² wód."
  },
  {
    id: "R01_POL_11",
    section: "Położenie i terytorium",
    type: "sort",
    prompt: "Przyporządkuj elementy terytorium Polski do lądu lub wód.",
    options: null,
    items: ["obszar lądowy", "Zatoka Gdańska", "część Zalewu Wiślanego", "pas otwartego morza", "część Zalewu Szczecińskiego"],
    categories: ["ląd", "wody"],
    answer: {
      "ląd": ["obszar lądowy"],
      "wody": ["Zatoka Gdańska", "część Zalewu Wiślanego", "pas otwartego morza", "część Zalewu Szczecińskiego"]
    },
    explanation: "Terytorium Polski tworzą obszar lądowy oraz należące do kraju części wód Morza Bałtyckiego."
  },

  {
    id: "R01_GRN_01",
    section: "Sąsiedzi i granice",
    type: "single_choice",
    prompt: "Z iloma państwami graniczy Polska?",
    options: ["siedmioma", "pięcioma", "sześcioma", "ośmioma", "dziewięcioma", "dziesięcioma"],
    answer: 0,
    explanation: "Polska ma siedmiu sąsiadów lądowych: Niemcy, Czechy, Słowację, Ukrainę, Białoruś, Litwę i Rosję.",
    image: "r01_granice_polski.jpg"
  },
  {
    id: "R01_GRN_02",
    section: "Sąsiedzi i granice",
    type: "single_choice",
    prompt: "Z którym państwem Polska ma najdłuższą granicę?",
    options: ["Czechami", "Słowacją", "Ukrainą", "Niemcami", "Białorusią", "Rosją"],
    answer: 0,
    explanation: "Granica polsko-czeska ma 796 km i jest najdłuższą granicą Polski."
  },
  {
    id: "R01_GRN_03",
    section: "Sąsiedzi i granice",
    type: "single_choice",
    prompt: "Z którym państwem Polska ma najkrótszą granicę?",
    options: ["Litwą", "Rosją", "Białorusią", "Niemcami", "Ukrainą", "Słowacją"],
    answer: 0,
    explanation: "Granica Polski z Litwą ma 104 km i jest najkrótsza."
  },
  {
    id: "R01_GRN_04",
    section: "Sąsiedzi i granice",
    type: "multi_select",
    prompt: "Zaznacz rzeki, którymi przebiegają fragmenty granic Polski.",
    options: ["Odra", "Nysa Łużycka", "Bug", "San", "Wisła", "Warta"],
    answer: [0, 1, 2, 3],
    explanation: "Fragmenty granic Polski biegną Odrą, Nysą Łużycką, Bugiem i Sanem."
  },
  {
    id: "R01_GRN_05",
    section: "Sąsiedzi i granice",
    type: "true_false",
    prompt: "Polska graniczy od północy z główną częścią terytorium Rosji.",
    options: null,
    answer: false,
    explanation: "Polska graniczy z rosyjską eksklawą, czyli obwodem królewieckim oddzielonym od głównej części Rosji."
  },
  {
    id: "R01_GRN_06",
    section: "Sąsiedzi i granice",
    type: "fill_in",
    prompt: "Od zachodu Polska graniczy z __________, a od północnego wschodu z __________.",
    options: null,
    answer: ["Niemcami", "Litwą"],
    altAnswers: [["Niemcami", "Niemcy"], ["Litwą", "Litwa"]],
    explanation: "Zachodnim sąsiadem Polski są Niemcy, a Litwa leży na północny wschód od Polski."
  },
  {
    id: "R01_GRN_07",
    section: "Sąsiedzi i granice",
    type: "riddle",
    prompt: "Fragment kraju oddzielony od głównej części jego terytorium to...",
    options: null,
    answer: "eksklawa",
    altAnswers: ["eksklawa", "eksklawa państwa"],
    explanation: "Obwód królewiecki jest eksklawą Rosji i właśnie z nim graniczy Polska."
  },
  {
    id: "R01_GRN_08",
    section: "Sąsiedzi i granice",
    type: "odd_one_out",
    prompt: "Które państwo nie graniczy z Polską: Czechy, Słowacja, Węgry, Ukraina.",
    options: null,
    answer: "Węgry",
    explanation: "Węgry nie mają wspólnej granicy z Polską; Czechy, Słowacja i Ukraina są jej sąsiadami."
  },
  {
    id: "R01_GRN_09",
    section: "Sąsiedzi i granice",
    type: "scenario",
    prompt: "Turysta idzie granią Sudetów i przekracza południowo-zachodnią granicę Polski. Do którego państwa wchodzi?",
    options: ["Czech", "Słowacji", "Niemiec", "Ukrainy", "Litwy", "Białorusi"],
    answer: 0,
    explanation: "Sudety wyznaczają znaczną część granicy Polski z Czechami."
  },
  {
    id: "R01_GRN_10",
    section: "Sąsiedzi i granice",
    type: "match",
    prompt: "Połącz sąsiada Polski z położeniem względem naszego kraju.",
    options: null,
    left: ["Niemcy", "Czechy i Słowacja", "Ukraina i Białoruś", "Litwa i Rosja"],
    right: ["zachód", "południe", "wschód", "północny wschód"],
    answer: {
      "Niemcy": "zachód",
      "Czechy i Słowacja": "południe",
      "Ukraina i Białoruś": "wschód",
      "Litwa i Rosja": "północny wschód"
    },
    explanation: "Sąsiedzi Polski otaczają ją od zachodu, południa, wschodu i północnego wschodu."
  },
  {
    id: "R01_GRN_11",
    section: "Sąsiedzi i granice",
    type: "sequence",
    prompt: "Ułóż państwa od najdłuższej do najkrótszej granicy z Polską.",
    options: null,
    items: ["Litwa", "Ukraina", "Czechy", "Niemcy"],
    answer: ["Czechy", "Ukraina", "Niemcy", "Litwa"],
    explanation: "Długości tych granic to kolejno 796 km, 535 km, 467 km i 104 km.",
    image: "r01_granice_polski.jpg"
  },

  {
    id: "R01_SKR_01",
    section: "Skrajne punkty i rozciągłość",
    type: "single_choice",
    prompt: "Który punkt jest najdalej wysunięty na północ w Polsce?",
    options: ["Gwiazda Północy w Jastrzębiej Górze", "szczyt Opołonek", "zakole Odry koło Cedyni", "zakole Bugu koło Hrubieszowa", "przylądek Nordkinn", "przylądek Roca"],
    answer: 0,
    explanation: "Północnym skrajnym punktem Polski jest Gwiazda Północy w Jastrzębiej Górze.",
    image: "r01_skrajne_punkty_polski.jpg"
  },
  {
    id: "R01_SKR_02",
    section: "Skrajne punkty i rozciągłość",
    type: "single_choice",
    prompt: "Który punkt jest najdalej wysunięty na południe w Polsce?",
    options: ["szczyt Opołonek", "Gwiazda Północy", "zakole Odry koło Cedyni", "zakole Bugu koło Hrubieszowa", "Śnieżka", "Rysy"],
    answer: 0,
    explanation: "Południowym skrajnym punktem Polski jest szczyt Opołonek w Bieszczadach."
  },
  {
    id: "R01_SKR_03",
    section: "Skrajne punkty i rozciągłość",
    type: "single_choice",
    prompt: "Która para współrzędnych opisuje skrajny wschodni punkt Polski?",
    options: ["51°N 24°E", "53°N 14°E", "55°N 18°E", "49°N 23°E", "71°N 28°E", "36°N 6°W"],
    answer: 0,
    explanation: "Zakole Bugu koło Hrubieszowa leży na 51°N i 24°E."
  },
  {
    id: "R01_SKR_04",
    section: "Skrajne punkty i rozciągłość",
    type: "multi_select",
    prompt: "Zaznacz poprawne pary skrajnych punktów Polski i ich współrzędnych.",
    options: ["Gwiazda Północy - 55°N 18°E", "Opołonek - 49°N 23°E", "zakole Odry koło Cedyni - 53°N 14°E", "zakole Bugu koło Hrubieszowa - 51°N 24°E", "Opołonek - 55°N 18°E", "zakole Odry koło Cedyni - 51°N 24°E"],
    answer: [0, 1, 2, 3],
    explanation: "Cztery skrajne punkty wyznaczają zakres Polski od 49°N do 55°N oraz od 14°E do 24°E.",
    image: "r01_skrajne_punkty_polski.jpg"
  },
  {
    id: "R01_SKR_05",
    section: "Skrajne punkty i rozciągłość",
    type: "true_false",
    prompt: "Rozciągłość południkową oblicza się z różnicy długości geograficznych skrajnego punktu wschodniego i zachodniego.",
    options: null,
    answer: false,
    explanation: "Rozciągłość południkowa wynika z różnicy szerokości geograficznych punktu północnego i południowego."
  },
  {
    id: "R01_SKR_06",
    section: "Skrajne punkty i rozciągłość",
    type: "fill_in",
    prompt: "Rozciągłość południkowa Polski wynosi __________, a równoleżnikowa __________.",
    options: null,
    answer: ["6°", "10°"],
    altAnswers: [["6°", "6", "6 stopni"], ["10°", "10", "10 stopni"]],
    explanation: "Polska rozciąga się od 49°N do 55°N, czyli o 6°, oraz od 14°E do 24°E, czyli o 10°.",
    image: "r01_rozciaglosc_polski.jpg"
  },
  {
    id: "R01_SKR_07",
    section: "Skrajne punkty i rozciągłość",
    type: "riddle",
    prompt: "Różnica szerokości geograficznej skrajnego punktu północnego i południowego obszaru to...",
    options: null,
    answer: "rozciągłość południkowa",
    altAnswers: ["rozciągłość południkowa", "rozciaglosc poludnikowa"],
    explanation: "Rozciągłość południkowa określa zasięg obszaru z północy na południe."
  },
  {
    id: "R01_SKR_08",
    section: "Skrajne punkty i rozciągłość",
    type: "odd_one_out",
    prompt: "Który obiekt nie jest skrajnym punktem Polski: Gwiazda Północy, Opołonek, zakole Odry koło Cedyni, Śnieżka.",
    options: null,
    answer: "Śnieżka",
    explanation: "Śnieżka leży na granicy polsko-czeskiej, ale nie jest skrajnym punktem Polski."
  },
  {
    id: "R01_SKR_09",
    section: "Skrajne punkty i rozciągłość",
    type: "scenario",
    prompt: "Uczeń odjął 14°E od 24°E. Jaki rodzaj rozciągłości Polski obliczył i jaki otrzymał wynik?",
    options: ["równoleżnikową - 10°", "południkową - 10°", "równoleżnikową - 6°", "południkową - 6°", "równoleżnikową - 38°", "południkową - 38°"],
    answer: 0,
    explanation: "Różnica długości geograficznych 24°E i 14°E daje rozciągłość równoleżnikową równą 10°."
  },
  {
    id: "R01_SKR_10",
    section: "Skrajne punkty i rozciągłość",
    type: "match",
    prompt: "Połącz kierunek skrajnego punktu Polski z jego nazwą.",
    options: null,
    left: ["północ", "południe", "wschód", "zachód"],
    right: ["Gwiazda Północy w Jastrzębiej Górze", "szczyt Opołonek", "zakole Bugu koło Hrubieszowa", "zakole Odry koło Cedyni"],
    answer: {
      "północ": "Gwiazda Północy w Jastrzębiej Górze",
      "południe": "szczyt Opołonek",
      "wschód": "zakole Bugu koło Hrubieszowa",
      "zachód": "zakole Odry koło Cedyni"
    },
    explanation: "Te cztery miejsca są najdalej wysuniętymi punktami Polski w głównych kierunkach świata."
  },
  {
    id: "R01_SKR_11",
    section: "Skrajne punkty i rozciągłość",
    type: "sequence",
    prompt: "Ułóż punkty od najbardziej położonego na zachód do najbardziej położonego na wschód.",
    options: null,
    items: ["zakole Bugu koło Hrubieszowa", "Gwiazda Północy", "zakole Odry koło Cedyni", "Opołonek"],
    answer: ["zakole Odry koło Cedyni", "Gwiazda Północy", "Opołonek", "zakole Bugu koło Hrubieszowa"],
    explanation: "Długości geograficzne tych punktów wynoszą kolejno 14°E, 18°E, 23°E i 24°E."
  },

  {
    id: "R01_KON_01",
    section: "Konsekwencje położenia",
    type: "single_choice",
    prompt: "Jaki charakter ma klimat Polski?",
    options: ["umiarkowany ciepły przejściowy", "równikowy wilgotny", "zwrotnikowy suchy", "polarny", "podzwrotnikowy morski", "umiarkowany chłodny kontynentalny"],
    answer: 0,
    explanation: "Polska leży w strefie klimatów umiarkowanych, a klimat morski stopniowo przechodzi tu w kontynentalny."
  },
  {
    id: "R01_KON_02",
    section: "Konsekwencje położenia",
    type: "single_choice",
    prompt: "Dlaczego w Polsce nie występują czynne wulkany ani silne trzęsienia ziemi?",
    options: ["Polska leży z dala od granic płyt litosfery", "Polska leży nad Morzem Bałtyckim", "Polska ma małą rozciągłość równoleżnikową", "Polska leży w jednej strefie czasowej", "Polska jest krajem nizinnym", "Polska leży na półkuli północnej"],
    answer: 0,
    explanation: "Polska jest położona z dala od granic płyt litosfery, gdzie koncentrują się silne zjawiska tektoniczne."
  },
  {
    id: "R01_KON_03",
    section: "Konsekwencje położenia",
    type: "single_choice",
    prompt: "Jaki jest największy port w Polsce?",
    options: ["Gdańsk", "Szczecin", "Gdynia", "Świnoujście", "Kołobrzeg", "Elbląg"],
    answer: 0,
    explanation: "Port w Gdańsku jest największym portem w Polsce i jednym z największych nad Bałtykiem.",
    image: "r01_baltyk_gospodarka.jpg"
  },
  {
    id: "R01_KON_04",
    section: "Konsekwencje położenia",
    type: "multi_select",
    prompt: "Zaznacz korzyści wynikające z położenia Polski nad Morzem Bałtyckim.",
    options: ["transport morski", "rybołówstwo", "turystyka nadmorska", "energetyka wiatrowa", "występowanie czynnych wulkanów", "łatwa budowa elektrowni wodnych na wszystkich rzekach"],
    answer: [0, 1, 2, 3],
    explanation: "Dostęp do Bałtyku umożliwia transport morski, rybołówstwo, turystykę oraz rozwój energetyki wiatrowej."
  },
  {
    id: "R01_KON_05",
    section: "Konsekwencje położenia",
    type: "true_false",
    prompt: "Nizinna rzeźba terenu sprzyja rozwojowi energetyki wodnej na polskich rzekach.",
    options: null,
    answer: false,
    explanation: "Małe spadki terenu na nizinach są niekorzystne dla energetyki wodnej, choć ułatwiają budowę i rozwój rolnictwa."
  },
  {
    id: "R01_KON_06",
    section: "Konsekwencje położenia",
    type: "fill_in",
    prompt: "Na wschodnim krańcu Polski Słońce wschodzi około __________ minut wcześniej niż na zachodnim, ponieważ rozciągłość równoleżnikowa kraju wynosi __________.",
    options: null,
    answer: ["40", "10°"],
    altAnswers: [["40", "40 minut", "40 min"], ["10°", "10", "10 stopni"]],
    explanation: "Każdy stopień długości geograficznej daje 4 minuty różnicy, więc 10° odpowiada 40 minutom.",
    image: "r01_rozciaglosc_rownoleznikowa.jpg"
  },
  {
    id: "R01_KON_07",
    section: "Konsekwencje położenia",
    type: "riddle",
    prompt: "Organizacje, których wschodnią granicę współtworzą granice Polski z Rosją, Białorusią i Ukrainą, to...",
    options: null,
    answer: "Unia Europejska i NATO",
    altAnswers: ["Unia Europejska i NATO", "UE i NATO", "NATO i UE"],
    explanation: "Polska należy do UE i NATO, a jej wschodnie granice są częścią zewnętrznych granic tych organizacji.",
    image: "r01_wschodnia_granica_ue_nato.jpg"
  },
  {
    id: "R01_KON_08",
    section: "Konsekwencje położenia",
    type: "odd_one_out",
    prompt: "Co nie jest skutkiem położenia Polski w dużej części na nizinach: łatwiejsza budowa dróg, rozwój rolnictwa, rozwój miast, częste czynne wulkany.",
    options: null,
    answer: "częste czynne wulkany",
    explanation: "Nizinna rzeźba ułatwia rozwój miast, dróg i rolnictwa, ale nie powoduje aktywności wulkanicznej."
  },
  {
    id: "R01_KON_09",
    section: "Konsekwencje położenia",
    type: "scenario",
    prompt: "Na początku września Słońce wschodzi na wschodnim krańcu Polski o 5.40. O której godzinie wschodzi na krańcu zachodnim?",
    options: ["6.20", "5.00", "5.44", "6.00", "6.40", "7.20"],
    answer: 0,
    explanation: "Na zachodnim krańcu Słońce wschodzi 40 minut później, czyli o 6.20."
  },
  {
    id: "R01_KON_10",
    section: "Konsekwencje położenia",
    type: "match",
    prompt: "Połącz cechę położenia Polski z jej konsekwencją.",
    options: null,
    left: ["położenie nad Bałtykiem", "nizinna rzeźba terenu", "położenie w środku Europy", "wschodnia granica UE i NATO"],
    right: ["rozwój transportu morskiego", "łatwiejsza budowa dróg", "przebieg ważnych szlaków transportowych", "wzmożona ochrona i monitoring"],
    answer: {
      "położenie nad Bałtykiem": "rozwój transportu morskiego",
      "nizinna rzeźba terenu": "łatwiejsza budowa dróg",
      "położenie w środku Europy": "przebieg ważnych szlaków transportowych",
      "wschodnia granica UE i NATO": "wzmożona ochrona i monitoring"
    },
    explanation: "Każda z tych cech położenia wywołuje określone skutki gospodarcze lub polityczne.",
    image: "r01_konsekwencje_polozenia.jpg"
  },
  {
    id: "R01_KON_11",
    section: "Konsekwencje położenia",
    type: "sort",
    prompt: "Przyporządkuj skutki do rozciągłości południkowej lub równoleżnikowej.",
    options: null,
    items: ["różnice długości dnia i nocy", "różnice wysokości górowania Słońca", "różne godziny wschodu Słońca", "występowanie stref czasowych"],
    categories: ["rozciągłość południkowa", "rozciągłość równoleżnikowa"],
    answer: {
      "rozciągłość południkowa": ["różnice długości dnia i nocy", "różnice wysokości górowania Słońca"],
      "rozciągłość równoleżnikowa": ["różne godziny wschodu Słońca", "występowanie stref czasowych"]
    },
    explanation: "Zasięg północ-południe wpływa na wysokość Słońca i długość dnia, a zasięg wschód-zachód na moment wschodu i czas."
  },

  {
    id: "R01_ADM_01",
    section: "Podział administracyjny",
    type: "single_choice",
    prompt: "Ile województw ma Polska?",
    options: ["16", "14", "18", "49", "66", "314"],
    answer: 0,
    explanation: "Od 1999 roku Polska dzieli się na 16 województw.",
    image: "r01_wojewodztwa_polski.jpg"
  },
  {
    id: "R01_ADM_02",
    section: "Podział administracyjny",
    type: "single_choice",
    prompt: "Które województwo jest największe pod względem powierzchni i liczby ludności?",
    options: ["mazowieckie", "opolskie", "pomorskie", "śląskie", "lubelskie", "wielkopolskie"],
    answer: 0,
    explanation: "Największym województwem pod względem zarówno powierzchni, jak i liczby ludności jest mazowieckie."
  },
  {
    id: "R01_ADM_03",
    section: "Podział administracyjny",
    type: "single_choice",
    prompt: "Który rodzaj gmin jest w Polsce najliczniejszy?",
    options: ["gminy wiejskie", "gminy miejskie", "gminy miejsko-wiejskie", "miasta na prawach powiatu", "powiaty ziemskie", "województwa"],
    answer: 0,
    explanation: "Gmin wiejskich jest 1459, więcej niż miejsko-wiejskich i miejskich."
  },
  {
    id: "R01_ADM_04",
    section: "Podział administracyjny",
    type: "multi_select",
    prompt: "Zaznacz województwa mające po dwie stolice.",
    options: ["lubuskie", "kujawsko-pomorskie", "mazowieckie", "pomorskie", "opolskie", "podkarpackie"],
    answer: [0, 1],
    explanation: "Dwie stolice mają województwa lubuskie oraz kujawsko-pomorskie."
  },
  {
    id: "R01_ADM_05",
    section: "Podział administracyjny",
    type: "true_false",
    prompt: "Miasto na prawach powiatu jest gminą miejską wykonującą również zadania powiatu.",
    options: null,
    answer: true,
    explanation: "Większe miasta mogą łączyć funkcje gminy miejskiej i powiatu; w Polsce jest 66 takich miast."
  },
  {
    id: "R01_ADM_06",
    section: "Podział administracyjny",
    type: "fill_in",
    prompt: "Polska dzieli się na __________ województw, __________ powiatów i __________ gmin.",
    options: null,
    answer: ["16", "314", "2479"],
    altAnswers: [["16", "16 województw"], ["314", "314 powiatów"], ["2479", "2479 gmin"]],
    explanation: "Według danych z 2025 roku trójstopniowy podział obejmuje 16 województw, 314 powiatów i 2479 gmin.",
    image: "r01_podzial_administracyjny.jpg"
  },
  {
    id: "R01_ADM_07",
    section: "Podział administracyjny",
    type: "riddle",
    prompt: "Największa jednostka podziału administracyjnego Polski to...",
    options: null,
    answer: "województwo",
    altAnswers: ["województwo", "wojewodztwo"],
    explanation: "Województwo jest najwyższym z trzech szczebli podziału administracyjnego."
  },
  {
    id: "R01_ADM_08",
    section: "Podział administracyjny",
    type: "odd_one_out",
    prompt: "Który element nie jest rodzajem gminy: gmina wiejska, gmina miejska, gmina miejsko-wiejska, województwo.",
    options: null,
    answer: "województwo",
    explanation: "Województwo jest szczeblem podziału administracyjnego, a nie rodzajem gminy."
  },
  {
    id: "R01_ADM_09",
    section: "Podział administracyjny",
    type: "scenario",
    prompt: "Jednostka administracyjna obejmuje jedno miasto i wykonuje także zadania powiatu. Jak należy ją określić?",
    options: ["miasto na prawach powiatu", "gmina wiejska", "gmina miejsko-wiejska", "województwo", "powiat złożony wyłącznie ze wsi", "urząd marszałkowski"],
    answer: 0,
    explanation: "Miasto na prawach powiatu jest gminą miejską, która realizuje także zadania powiatu."
  },
  {
    id: "R01_ADM_10",
    section: "Podział administracyjny",
    type: "match",
    prompt: "Połącz województwo z jego stolicą lub stolicami.",
    options: null,
    left: ["mazowieckie", "pomorskie", "lubuskie", "kujawsko-pomorskie"],
    right: ["Warszawa", "Gdańsk", "Gorzów Wielkopolski i Zielona Góra", "Bydgoszcz i Toruń"],
    answer: {
      "mazowieckie": "Warszawa",
      "pomorskie": "Gdańsk",
      "lubuskie": "Gorzów Wielkopolski i Zielona Góra",
      "kujawsko-pomorskie": "Bydgoszcz i Toruń"
    },
    explanation: "Lubuskie i kujawsko-pomorskie mają po dwie stolice, a mazowieckie i pomorskie po jednej.",
    image: "r01_wojewodztwa_polski.jpg"
  },
  {
    id: "R01_ADM_11",
    section: "Podział administracyjny",
    type: "sequence",
    prompt: "Ułóż szczeble podziału administracyjnego od najwyższego do najniższego.",
    options: null,
    items: ["gmina", "województwo", "powiat"],
    answer: ["województwo", "powiat", "gmina"],
    explanation: "Województwa dzielą się na powiaty, a powiaty na gminy."
  },

  {
    id: "R01_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaka jest różnica długości między najdłuższą a najkrótszą granicą Polski?",
    options: ["692 km", "629 km", "586 km", "329 km", "896 km", "210 km"],
    answer: 0,
    explanation: "Najdłuższa granica z Czechami ma 796 km, a najkrótsza z Litwą 104 km; różnica wynosi 692 km.",
    image: "r01_granice_polski.jpg"
  },
  {
    id: "R01_HARD_02",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile minut różnicy w momencie wschodu Słońca odpowiada jednemu stopniowi długości geograficznej?",
    options: ["4 minuty", "2 minuty", "6 minut", "10 minut", "15 minut", "60 minut"],
    answer: 0,
    explanation: "Przesunięciu o 1° długości geograficznej odpowiada różnica 4 minut."
  },
  {
    id: "R01_HARD_03",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Która para poprawnie zestawia liczbę jednostek administracyjnych z ich rodzajem w 2025 roku?",
    options: ["718 gmin miejsko-wiejskich", "718 gmin miejskich", "302 gmin wiejskich", "1459 gmin miejskich", "314 województw", "2479 powiatów"],
    answer: 0,
    explanation: "W Polsce było 718 gmin miejsko-wiejskich, 302 miejskie i 1459 wiejskich."
  },
  {
    id: "R01_HARD_04",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz wszystkie poprawne stwierdzenia o granicach Polski.",
    options: ["granica z Czechami ma 796 km", "granica z Rosją ma 210 km", "granica z Litwą ma 104 km", "granica z Niemcami ma 467 km", "granica z Ukrainą ma 418 km", "granica z Białorusią ma 535 km"],
    answer: [0, 1, 2, 3],
    explanation: "Granica z Ukrainą ma 535 km, a z Białorusią 418 km; pozostałe cztery długości są poprawne."
  },
  {
    id: "R01_HARD_05",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz działania prowadzone na szczególnie chronionej wschodniej granicy UE i NATO.",
    options: ["kontrola dokumentów", "kontrola przewożonych towarów", "zwalczanie przemytu", "zwalczanie nielegalnej migracji", "likwidacja wszystkich przejść granicznych", "zakaz legalnego handlu"],
    answer: [0, 1, 2, 3],
    explanation: "Wschodnia granica jest monitorowana, prowadzi się na niej kontrole oraz zwalcza przemyt i nielegalną migrację.",
    image: "r01_wschodnia_granica_ue_nato.jpg"
  },
  {
    id: "R01_HARD_06",
    section: "Super trudne",
    type: "true_false",
    prompt: "Różnica średniej rocznej temperatury powietrza między północną a południową częścią Polski wynosi około 10°C.",
    options: null,
    answer: false,
    explanation: "Różnica ta wynosi około 1°C; około 10°C byłoby wartością dziesięciokrotnie większą.",
    image: "r01_rozciaglosc_poludnikowa.jpg"
  },
  {
    id: "R01_HARD_07",
    section: "Super trudne",
    type: "true_false",
    prompt: "Część południka od równika do bieguna ma 90°, dlatego rozciągłość 6° stanowi jedną piętnastą tego odcinka.",
    options: null,
    answer: true,
    explanation: "90° podzielone przez 6° daje 15, więc rozciągłość południkowa Polski stanowi jedną piętnastą ćwiartki południka."
  },
  {
    id: "R01_HARD_08",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Polska graniczy z Rosją na odcinku __________ km, a z Litwą na odcinku __________ km.",
    options: null,
    answer: ["210", "104"],
    altAnswers: [["210", "210 km"], ["104", "104 km"]],
    explanation: "Granica z obwodem królewieckim ma 210 km, natomiast granica z Litwą 104 km."
  },
  {
    id: "R01_HARD_09",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W Polsce są __________ gminy miejskie, __________ gmin miejsko-wiejskich i __________ gmin wiejskich.",
    options: null,
    answer: ["302", "718", "1459"],
    altAnswers: [["302", "302 gminy"], ["718", "718 gmin"], ["1459", "1459 gmin"]],
    explanation: "Najmniej jest gmin miejskich, więcej miejsko-wiejskich, a najwięcej wiejskich."
  },
  {
    id: "R01_HARD_10",
    section: "Super trudne",
    type: "riddle",
    prompt: "Organ administrujący częścią Bałtyku należącą do Polski, mający siedzibę w Gdyni lub Szczecinie, to...",
    options: null,
    answer: "Urząd Morski",
    altAnswers: ["Urząd Morski", "urzad morski"],
    explanation: "Polską częścią Bałtyku administrują Urząd Morski w Gdyni i Urząd Morski w Szczecinie."
  },
  {
    id: "R01_HARD_11",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Która para nie pasuje do pozostałych: Odra i Niemcy, Bug i Białoruś, San i Ukraina, Nysa Łużycka i Litwa.",
    options: null,
    answer: "Nysa Łużycka i Litwa",
    explanation: "Nysa Łużycka stanowi część granicy z Niemcami, a nie z Litwą."
  },
  {
    id: "R01_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Podróżnik jedzie latem z południa Polski na północ. Jak zmienią się przeciętnie wysokość górowania Słońca i długość dnia?",
    options: ["Słońce będzie górować niżej, a dzień będzie dłuższy", "Słońce będzie górować wyżej, a dzień będzie dłuższy", "Słońce będzie górować niżej, a dzień będzie krótszy", "Słońce będzie górować wyżej, a dzień będzie krótszy", "Obie wielkości pozostaną zawsze identyczne", "Słońce nie będzie górować"],
    answer: 0,
    explanation: "Im dalej na północ, tym Słońce góruje niżej, lecz latem dzień staje się dłuższy.",
    image: "r01_rozciaglosc_poludnikowa.jpg"
  },
  {
    id: "R01_HARD_13",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz szczebel samorządu z organem wykonawczym lub jego przewodniczącym.",
    options: null,
    left: ["województwo", "powiat", "gmina wiejska", "miasto powyżej 100 tys. mieszkańców"],
    right: ["marszałek województwa", "starosta", "wójt", "prezydent miasta"],
    answer: {
      "województwo": "marszałek województwa",
      "powiat": "starosta",
      "gmina wiejska": "wójt",
      "miasto powyżej 100 tys. mieszkańców": "prezydent miasta"
    },
    explanation: "Województwem kieruje marszałek, powiatem starosta, gminą wiejską wójt, a dużym miastem prezydent.",
    image: "r01_wladze_samorzadowe.jpg"
  },
  {
    id: "R01_HARD_14",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj osoby do władz samorządowych albo państwowych.",
    options: null,
    items: ["marszałek województwa", "starosta", "wójt", "wojewoda"],
    categories: ["władze samorządowe", "władze państwowe"],
    answer: {
      "władze samorządowe": ["marszałek województwa", "starosta", "wójt"],
      "władze państwowe": ["wojewoda"]
    },
    explanation: "Wojewoda reprezentuje władze państwowe, natomiast marszałek, starosta i wójt należą do samorządu."
  },
  {
    id: "R01_HARD_15",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż momenty wschodu Słońca od najwcześniejszego do najpóźniejszego, przesuwając się przez Polskę.",
    options: null,
    items: ["zachodni kraniec", "okolice środka kraju", "wschodni kraniec"],
    answer: ["wschodni kraniec", "okolice środka kraju", "zachodni kraniec"],
    explanation: "Im dalej na zachód, tym później Słońce wschodzi; między krańcami Polski różnica wynosi około 40 minut.",
    image: "r01_rozciaglosc_rownoleznikowa.jpg"
  }
];

const KID_PROMPTS = {
  "R01_POL_04": "Które wody należą do Polski?",
  "R01_GRN_04": "Które rzeki biegną wzdłuż granic Polski?",
  "R01_GRN_09": "Idziesz przez Sudety za granicę. Do jakiego kraju wchodzisz?",
  "R01_SKR_04": "Które skrajne punkty i współrzędne są dobrze połączone?",
  "R01_SKR_09": "Od 24°E odejmij 14°E. Jaką rozciągłość liczysz?",
  "R01_KON_02": "Dlaczego w Polsce nie ma czynnych wulkanów i silnych trzęsień ziemi?",
  "R01_KON_09": "Na wschodzie Słońce wschodzi o 5.40. Kiedy wzejdzie na zachodzie?",
  "R01_ADM_09": "Jak nazywa się miasto, które wykonuje też zadania powiatu?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Położenie i terytorium Polski",
  icon: "🗺️",
  sectionOrder: [
    "Położenie i terytorium",
    "Sąsiedzi i granice",
    "Skrajne punkty i rozciągłość",
    "Konsekwencje położenia",
    "Podział administracyjny"
  ],
  sectionIcons: {
    "Położenie i terytorium": "🌍",
    "Sąsiedzi i granice": "🧭",
    "Skrajne punkty i rozciągłość": "📐",
    "Konsekwencje położenia": "☀️",
    "Podział administracyjny": "🏛️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
