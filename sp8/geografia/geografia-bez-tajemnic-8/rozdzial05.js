// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TOR  = Tornada
//   CYK  = Cyklony tropikalne
//   UPR  = Warunki upraw w Kanadzie
//   ROL  = Rolnictwo i gospodarowanie żywnością
//   GOS  = Gospodarka USA i innowacyjność
//   DOL  = Dolina Krzemowa i amerykańskie miasta
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R05_TOR_01",
    section: "Tornada",
    type: "single_choice",
    prompt: "Co bezpośrednio sprzyja powstaniu tornada w środkowej części Stanów Zjednoczonych?",
    options: ["Zderzenie ciepłego i wilgotnego powietrza z zimnym i suchym", "Stały napływ wyłącznie zimnego powietrza", "Ogrzewanie oceanu do temperatury ponad 26°C", "Długotrwały brak chmur burzowych", "Zderzenie dwóch mas powietrza o identycznych cechach", "Spływ lodowca ku równinie"],
    answer: 0,
    explanation: "Tornada tworzą się na styku mas powietrza o odmiennych cechach: ciepłego i wilgotnego oraz zimnego i suchego.",
    image: "r05_superkomorka.jpg"
  },
  {
    id: "R05_TOR_02",
    section: "Tornada",
    type: "true_false",
    prompt: "Prędkość wiatru we wnętrzu najsilniejszego tornada może dochodzić do 500 km/h.",
    options: null,
    answer: true,
    explanation: "W najsilniejszych tornadach prędkość wiatru na krótkich odcinkach może osiągać około 500 km/h."
  },
  {
    id: "R05_TOR_03",
    section: "Tornada",
    type: "match",
    prompt: "Połącz element tornada lub jego otoczenia z właściwym opisem.",
    options: null,
    left: ["Superkomórka", "Wnętrze wiru", "Obrzeża kolumny", "Prąd strumieniowy"],
    right: ["Potężna chmura burzowa", "Spływ zimnego powietrza ku dołowi", "Szybki ruch powietrza ku górze", "Wzmocnienie ruchu wirowego w chmurze"],
    answer: {
      "Superkomórka": "Potężna chmura burzowa",
      "Wnętrze wiru": "Spływ zimnego powietrza ku dołowi",
      "Obrzeża kolumny": "Szybki ruch powietrza ku górze",
      "Prąd strumieniowy": "Wzmocnienie ruchu wirowego w chmurze"
    },
    explanation: "Tornado może rozwinąć się u podstawy superkomórki; jego ruch wzmacnia prąd strumieniowy, a powietrze krąży ku górze na obrzeżach i ku dołowi we wnętrzu.",
    image: "r05_superkomorka.jpg"
  },
  {
    id: "R05_TOR_04",
    section: "Tornada",
    type: "fill_in",
    prompt: "Najwięcej tornad w Stanach Zjednoczonych powstaje od __________ do __________.",
    options: null,
    answer: ["marca", "czerwca"],
    altAnswers: [["marca", "marzec"], ["czerwca", "czerwiec"]],
    explanation: "Największa liczba tornad powstaje wiosną i wczesnym latem, czyli od marca do czerwca."
  },
  {
    id: "R05_TOR_05",
    section: "Tornada",
    type: "multi_select",
    prompt: "Zaznacz główne zagrożenia towarzyszące tornadu.",
    options: ["Bardzo silny wiatr", "Grad", "Przedmioty niesione przez wiatr", "Przypływ sztormowy obejmujący rozległe wybrzeże", "Łamane drzewa", "Spokojne powietrze w oku zjawiska"],
    answer: [0, 1, 2, 4],
    explanation: "Tornado niszczy przede wszystkim bardzo silnym wiatrem; niebezpieczne są też grad, łamane drzewa i porwane przedmioty."
  },
  {
    id: "R05_TOR_06",
    section: "Tornada",
    type: "sort",
    prompt: "Przyporządkuj cechy do odpowiedniej masy powietrza uczestniczącej w powstawaniu tornad.",
    options: null,
    items: ["napływa znad Zatoki Meksykańskiej", "jest ciepłe", "jest wilgotne", "dociera z północy lub północnego zachodu", "jest zimne", "jest suche"],
    categories: ["powietrze południowe", "powietrze północne"],
    answer: {
      "powietrze południowe": ["napływa znad Zatoki Meksykańskiej", "jest ciepłe", "jest wilgotne"],
      "powietrze północne": ["dociera z północy lub północnego zachodu", "jest zimne", "jest suche"]
    },
    explanation: "Od południa napływa ciepłe i wilgotne powietrze, a z północy lub północnego zachodu - zimne i suche."
  },
  {
    id: "R05_TOR_07",
    section: "Tornada",
    type: "riddle",
    prompt: "Jak nazywa się środkowa część Stanów Zjednoczonych, w której tornada występują szczególnie często?",
    options: null,
    answer: "Aleja Tornad",
    altAnswers: ["Aleja Tornad", "aleja tornad"],
    explanation: "Środkową część Stanów Zjednoczonych, gdzie tornada są najczęstsze, nazwano Aleją Tornad.",
    image: "r05_aleja_tornad.jpg"
  },
  {
    id: "R05_TOR_08",
    section: "Tornada",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do pozostałych cech tornada: wirujący lej, superkomórka, skala Fujity, oko cyklonu.",
    options: null,
    answer: "oko cyklonu",
    explanation: "Oko jest częścią cyklonu tropikalnego, natomiast pozostałe elementy wiążą się z tornadem."
  },
  {
    id: "R05_TOR_09",
    section: "Tornada",
    type: "scenario",
    prompt: "Mieszkańcy otrzymują ostrzeżenie zaledwie kilka minut przed nadejściem wirującego leja. Gdzie powinni przeczekać nawałnicę?",
    options: ["W solidnym schronie w budynku", "Na otwartej przestrzeni", "W pobliżu okien", "Na dachu", "Pod lekką wiatą", "W samochodzie na moście"],
    answer: 0,
    explanation: "Przy tornadzie najbezpieczniejszy jest solidny schron umożliwiający przeczekanie nawałnicy z dala od okien."
  },
  {
    id: "R05_TOR_10",
    section: "Tornada",
    type: "sequence",
    prompt: "Ułóż etapy powstawania tornada we właściwej kolejności.",
    options: null,
    items: ["Powstaje wirująca kolumna powietrza", "Ciepłe powietrze jest wypychane ku górze", "Zderzają się masy powietrza o różnych cechach", "Rozbudowuje się superkomórka"],
    answer: ["Zderzają się masy powietrza o różnych cechach", "Ciepłe powietrze jest wypychane ku górze", "Rozbudowuje się superkomórka", "Powstaje wirująca kolumna powietrza"],
    explanation: "Zderzenie mas powietrza wypycha cieplejsze powietrze w górę, prowadzi do rozwoju superkomórki, a u jej podstawy może utworzyć się tornado.",
    image: "r05_tornado_lej.jpg"
  },

  {
    id: "R05_CYK_01",
    section: "Cyklony tropikalne",
    type: "single_choice",
    prompt: "Nad jaką powierzchnią może powstać cyklon tropikalny?",
    options: ["Nad ciepłym oceanem o temperaturze wody ponad 26°C", "Nad zamarzniętym jeziorem", "Nad wysokimi górami", "Nad suchą pustynią", "Nad tundrą", "Nad dowolnym lądem"],
    answer: 0,
    explanation: "Cyklony tropikalne tworzą się wyłącznie nad ciepłymi wodami oceanów, gdy temperatura wody przekracza 26°C.",
    image: "r05_cyklon_z_gory.jpg"
  },
  {
    id: "R05_CYK_02",
    section: "Cyklony tropikalne",
    type: "true_false",
    prompt: "Po wkroczeniu nad ląd cyklon tropikalny zwykle wzmacnia się dzięki dopływowi ciepła z podłoża.",
    options: null,
    answer: false,
    explanation: "Po wkroczeniu nad ląd lub chłodniejsze wody cyklon słabnie, ponieważ traci źródło energii z ciepłego oceanu."
  },
  {
    id: "R05_CYK_03",
    section: "Cyklony tropikalne",
    type: "multi_select",
    prompt: "Zaznacz zagrożenia związane z cyklonem tropikalnym.",
    options: ["Silny wiatr", "Intensywny deszcz", "Przypływ sztormowy", "Powódź", "Długotrwałe przerwy w dostawach wody i prądu", "Wyłącznie niewielkie połamane gałęzie"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Cyklony niosą silny wiatr i ulewne opady, powodują przypływy sztormowe, powodzie oraz rozległe uszkodzenia infrastruktury."
  },
  {
    id: "R05_CYK_04",
    section: "Cyklony tropikalne",
    type: "fill_in",
    prompt: "W Ameryce Północnej cyklon tropikalny nazywa się __________, a w Azji __________.",
    options: null,
    answer: ["huraganem", "tajfunem"],
    altAnswers: [["huraganem", "huragan"], ["tajfunem", "tajfun"]],
    explanation: "To samo zjawisko nosi regionalne nazwy: w Ameryce Północnej huragan, a w Azji tajfun."
  },
  {
    id: "R05_CYK_05",
    section: "Cyklony tropikalne",
    type: "match",
    prompt: "Połącz kategorię cyklonu w skali Saffira-Simpsona z zakresem prędkości stałego wiatru.",
    options: null,
    left: ["Kategoria 1", "Kategoria 2", "Kategoria 3", "Kategoria 5"],
    right: ["119-153 km/h", "154-177 km/h", "178-209 km/h", "powyżej 250 km/h"],
    answer: {
      "Kategoria 1": "119-153 km/h",
      "Kategoria 2": "154-177 km/h",
      "Kategoria 3": "178-209 km/h",
      "Kategoria 5": "powyżej 250 km/h"
    },
    explanation: "Skala Saffira-Simpsona klasyfikuje cyklony według prędkości stałego wiatru i spodziewanych zniszczeń.",
    image: "r05_skala_huraganu.jpg"
  },
  {
    id: "R05_CYK_06",
    section: "Cyklony tropikalne",
    type: "riddle",
    prompt: "Jak nazywa się spokojniejsza centralna część cyklonu tropikalnego?",
    options: null,
    answer: "oko cyklonu",
    altAnswers: ["oko cyklonu", "oko"],
    explanation: "W oku cyklonu jest stosunkowo spokojnie i cicho, a z góry wnika tam zimne powietrze.",
    image: "r05_cyklon_z_gory.jpg"
  },
  {
    id: "R05_CYK_07",
    section: "Cyklony tropikalne",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do przygotowań na nadejście huraganu: zapas wody, baterie do radia, zabezpieczenie okien, oczekiwanie na dachu.",
    options: null,
    answer: "oczekiwanie na dachu",
    explanation: "Zapas wody, baterie i zabezpieczenie okien zwiększają bezpieczeństwo, natomiast przebywanie na dachu podczas huraganu jest skrajnie niebezpieczne."
  },
  {
    id: "R05_CYK_08",
    section: "Cyklony tropikalne",
    type: "scenario",
    prompt: "Służby obserwują potężny wir nad Zatoką Meksykańską i z wyprzedzeniem ostrzegają mieszkańców Florydy. Co umożliwia takie ostrzeżenie?",
    options: ["Przygotowanie się lub ewakuację", "Dokładne zatrzymanie cyklonu", "Natychmiastowe osuszenie oceanu", "Wyłączenie wiatru", "Zmianę kierunku ruchu Ziemi", "Zapobieżenie wszystkim opadom"],
    answer: 0,
    explanation: "Wędrówkę cyklonu można monitorować, dlatego mieszkańcy mogą wcześniej przygotować się albo ewakuować."
  },
  {
    id: "R05_CYK_09",
    section: "Cyklony tropikalne",
    type: "sort",
    prompt: "Przyporządkuj cechy do tornada lub cyklonu tropikalnego.",
    options: null,
    items: ["ma zasięg lokalny", "ostrzeżenie może nadejść w ostatniej chwili", "może rozciągać się na setki kilometrów", "powstaje nad ciepłym oceanem", "opisuje go skala Fujity", "opisuje go skala Saffira-Simpsona"],
    categories: ["tornado", "cyklon tropikalny"],
    answer: {
      "tornado": ["ma zasięg lokalny", "ostrzeżenie może nadejść w ostatniej chwili", "opisuje go skala Fujity"],
      "cyklon tropikalny": ["może rozciągać się na setki kilometrów", "powstaje nad ciepłym oceanem", "opisuje go skala Saffira-Simpsona"]
    },
    explanation: "Tornada są mniejsze i trudniejsze do przewidzenia, a cyklony tropikalne są rozległe, powstają nad oceanem i można śledzić ich wędrówkę."
  },
  {
    id: "R05_CYK_10",
    section: "Cyklony tropikalne",
    type: "sequence",
    prompt: "Ułóż przebieg cyklonu tropikalnego od powstania do zaniku.",
    options: null,
    items: ["Cyklon słabnie nad lądem lub chłodną wodą", "Ciepła woda ogrzewa powietrze", "Chmura burzowa rośnie i wiatr przyspiesza", "Powietrze unosi się nad oceanem"],
    answer: ["Ciepła woda ogrzewa powietrze", "Powietrze unosi się nad oceanem", "Chmura burzowa rośnie i wiatr przyspiesza", "Cyklon słabnie nad lądem lub chłodną wodą"],
    explanation: "Energia pochodzi z ciepłej wody; ogrzane powietrze się unosi, układ burzowy rośnie, a po utracie kontaktu z ciepłym oceanem słabnie."
  },

  {
    id: "R05_UPR_01",
    section: "Warunki upraw w Kanadzie",
    type: "single_choice",
    prompt: "Co najbardziej ogranicza rozwój upraw na północy Kanady?",
    options: ["Niska temperatura i krótki okres wegetacyjny", "Nadmiernie długi okres wegetacyjny", "Stały napływ gorącego powietrza", "Brak jakichkolwiek opadów w całym kraju", "Wyłącznie wysokie ceny ziemi", "Zbyt ciepły Prąd Labradorski"],
    answer: 0,
    explanation: "Na północy Kanady uprawy ograniczają surowe warunki klimatyczne, szczególnie niska temperatura i krótki okres wegetacyjny."
  },
  {
    id: "R05_UPR_02",
    section: "Warunki upraw w Kanadzie",
    type: "true_false",
    prompt: "Najlepsze warunki do upraw w Kanadzie panują na preriach położonych na południu kraju.",
    options: null,
    answer: true,
    explanation: "Południowe prerie mają łagodniejsze warunki i dłuższy okres wegetacyjny niż północ Kanady.",
    image: "r05_prerie_kanadyjskie.jpg"
  },
  {
    id: "R05_UPR_03",
    section: "Warunki upraw w Kanadzie",
    type: "match",
    prompt: "Połącz obszar Kanady z czynnikiem wpływającym na warunki upraw.",
    options: null,
    left: ["Zachodnie wybrzeże", "Kordyliery", "Prerie", "Wschodnie wybrzeże"],
    right: ["Ciepły Prąd Północnopacyficzny", "Duża wysokość nad poziomem morza", "Łagodniejszy klimat i małe opady", "Chłodny Prąd Labradorski"],
    answer: {
      "Zachodnie wybrzeże": "Ciepły Prąd Północnopacyficzny",
      "Kordyliery": "Duża wysokość nad poziomem morza",
      "Prerie": "Łagodniejszy klimat i małe opady",
      "Wschodnie wybrzeże": "Chłodny Prąd Labradorski"
    },
    explanation: "Warunki upraw zmieniają się pod wpływem prądów morskich, wysokości terenu, opadów i cyrkulacji atmosferycznej."
  },
  {
    id: "R05_UPR_04",
    section: "Warunki upraw w Kanadzie",
    type: "fill_in",
    prompt: "Ciepły prąd przy zachodnim wybrzeżu Kanady to Prąd __________, a chłodny prąd przy wschodnim wybrzeżu to Prąd __________.",
    options: null,
    answer: ["Północnopacyficzny", "Labradorski"],
    altAnswers: [["Północnopacyficzny", "Prąd Północnopacyficzny"], ["Labradorski", "Prąd Labradorski"]],
    explanation: "Prąd Północnopacyficzny ociepla zachodnie wybrzeże, a Prąd Labradorski obniża temperaturę na wschodzie."
  },
  {
    id: "R05_UPR_05",
    section: "Warunki upraw w Kanadzie",
    type: "multi_select",
    prompt: "Zaznacz czynniki wpływające na zasięg upraw w Kanadzie.",
    options: ["Wysokość nad poziomem morza", "Cyrkulacja atmosferyczna", "Odległość od oceanów", "Prądy morskie", "Długość okresu wegetacyjnego", "Liczba patentów"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Rozmieszczenie upraw zależy od temperatury i okresu wegetacyjnego kształtowanych przez wysokość, cyrkulację, odległość od oceanów i prądy morskie."
  },
  {
    id: "R05_UPR_06",
    section: "Warunki upraw w Kanadzie",
    type: "riddle",
    prompt: "Jak nazywa się czas w roku, w którym temperatura pozwala roślinom rosnąć i się rozwijać?",
    options: null,
    answer: "okres wegetacyjny",
    altAnswers: ["okres wegetacyjny", "wegetacja"],
    explanation: "Długość okresu wegetacyjnego jest jednym z najważniejszych ograniczeń rolnictwa na północy Kanady."
  },
  {
    id: "R05_UPR_07",
    section: "Warunki upraw w Kanadzie",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do czynników ograniczających uprawy: niska temperatura, krótki okres wegetacyjny, duża wysokość gór, wysoka liczba patentów.",
    options: null,
    answer: "wysoka liczba patentów",
    explanation: "Liczba patentów opisuje innowacyjność gospodarki, a nie warunki przyrodnicze rozwoju upraw."
  },
  {
    id: "R05_UPR_08",
    section: "Warunki upraw w Kanadzie",
    type: "scenario",
    prompt: "Masa wilgotnego powietrza napływa znad Pacyfiku i wznosi się po zachodnich stokach Kordylierów. Co dzieje się z zawartą w niej parą wodną?",
    options: ["Skrapla się i przynosi opady na stokach dowietrznych", "Natychmiast znika bez opadów", "Zmienia się w gorący i suchy wiatr nad oceanem", "Ogrzewa Prąd Labradorski", "Zatrzymuje ruch obrotowy Ziemi", "Tworzy przypływ sztormowy"],
    answer: 0,
    explanation: "Wznoszące się powietrze ochładza się, para wodna się skrapla, a zachodnie stoki Kordylierów otrzymują dużo opadów."
  },
  {
    id: "R05_UPR_09",
    section: "Warunki upraw w Kanadzie",
    type: "sort",
    prompt: "Przyporządkuj warunki do obszarów o korzystnych lub niekorzystnych warunkach upraw.",
    options: null,
    items: ["południowe prerie", "łagodniejsza temperatura", "dłuższy okres wegetacyjny", "północ Kanady", "niska temperatura", "krótki okres wegetacyjny"],
    categories: ["korzystne warunki", "niekorzystne warunki"],
    answer: {
      "korzystne warunki": ["południowe prerie", "łagodniejsza temperatura", "dłuższy okres wegetacyjny"],
      "niekorzystne warunki": ["północ Kanady", "niska temperatura", "krótki okres wegetacyjny"]
    },
    explanation: "Uprawy koncentrują się na cieplejszym południu, natomiast zimna północ ma krótki okres wegetacyjny."
  },
  {
    id: "R05_UPR_10",
    section: "Warunki upraw w Kanadzie",
    type: "sequence",
    prompt: "Ułóż proces powstawania suchego i cieplejszego powietrza po wschodniej stronie Kordylierów.",
    options: null,
    items: ["Suche powietrze spływa po wschodnich stokach", "Powietrze ochładza się podczas wznoszenia", "Wilgotne powietrze napływa z zachodu", "Para wodna skrapla się i daje opad", "Opadające powietrze się ogrzewa"],
    answer: ["Wilgotne powietrze napływa z zachodu", "Powietrze ochładza się podczas wznoszenia", "Para wodna skrapla się i daje opad", "Suche powietrze spływa po wschodnich stokach", "Opadające powietrze się ogrzewa"],
    explanation: "Po utracie wilgoci na stokach dowietrznych suche powietrze opada po wschodniej stronie gór i się ogrzewa."
  },

  {
    id: "R05_ROL_01",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "single_choice",
    prompt: "Dlaczego Kanada i Stany Zjednoczone uzyskują bardzo duże zbiory mimo niezbyt wysokich nakładów na hektar?",
    options: ["Dzięki ogromnej powierzchni gruntów rolnych", "Dzięki zatrudnianiu większości ludności w rolnictwie", "Dzięki uprawie wyłącznie w górach", "Dzięki całkowitemu zakazowi eksportu", "Dzięki bardzo małym gospodarstwom", "Dzięki rezygnacji z maszyn"],
    answer: 0,
    explanation: "Wielkie areały gospodarstw pozwalają uzyskać duże zbiory nawet przy mniejszych nakładach na jednostkę powierzchni."
  },
  {
    id: "R05_ROL_02",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "true_false",
    prompt: "W rolnictwie Kanady i Stanów Zjednoczonych pracuje mniej niż 1,5% ogółu pracujących.",
    options: null,
    answer: true,
    explanation: "Nowoczesna technika i wielkie gospodarstwa sprawiają, że zatrudnienie w rolnictwie jest bardzo małe - poniżej 1,5% pracujących."
  },
  {
    id: "R05_ROL_03",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "match",
    prompt: "Połącz pojęcie z właściwą cechą.",
    options: null,
    left: ["Rolnictwo ekstensywne", "Rolnictwo intensywne", "Rolnictwo wysokotowarowe", "Bank żywności"],
    right: ["Małe nakłady na jednostkę powierzchni", "Duże nakłady na jednostkę powierzchni", "Produkcja przeznaczona głównie na sprzedaż", "Przekazywanie żywności potrzebującym zamiast jej marnowania"],
    answer: {
      "Rolnictwo ekstensywne": "Małe nakłady na jednostkę powierzchni",
      "Rolnictwo intensywne": "Duże nakłady na jednostkę powierzchni",
      "Rolnictwo wysokotowarowe": "Produkcja przeznaczona głównie na sprzedaż",
      "Bank żywności": "Przekazywanie żywności potrzebującym zamiast jej marnowania"
    },
    explanation: "Ekstensywność i intensywność odnoszą się do nakładów na powierzchnię, wysokotowarowość do przeznaczenia produkcji, a banki żywności ograniczają straty."
  },
  {
    id: "R05_ROL_04",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "fill_in",
    prompt: "Wydatki na jedzenie stanowią około __________ wszystkich wydatków przeciętnego Amerykanina, a marnowanie żywności ma się zmniejszyć o __________ do 2030 roku.",
    options: null,
    answer: ["6,7%", "50%"],
    altAnswers: [["6,7%", "6,7 %", "6.7%"], ["50%", "50 %"]],
    explanation: "Żywność jest relatywnie tania: stanowi 6,7% wydatków przeciętnego Amerykanina, a celem jest ograniczenie jej marnowania o połowę do 2030 roku."
  },
  {
    id: "R05_ROL_05",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "multi_select",
    prompt: "Zaznacz cechy rolnictwa Kanady i Stanów Zjednoczonych.",
    options: ["Bardzo duże gospodarstwa", "Nowoczesne maszyny i GPS", "Wykorzystywanie dronów", "Uprawa roślin modyfikowanych genetycznie", "Wysoka towarowość", "Przewaga pracy ręcznej bez maszyn"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Rolnictwo obu państw jest wielkoobszarowe, nowoczesne, coraz wydajniejsze i nastawione na sprzedaż, także eksport.",
    image: "r05_gospodarstwo_gps_dron.jpg"
  },
  {
    id: "R05_ROL_06",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "riddle",
    prompt: "Jak nazywa się typ rolnictwa, w którym nakłady finansowe i pracy na jednostkę powierzchni są małe?",
    options: null,
    answer: "rolnictwo ekstensywne",
    altAnswers: ["rolnictwo ekstensywne", "ekstensywne"],
    explanation: "Rolnictwo ekstensywne opiera się na małych nakładach na hektar, często przy bardzo dużej powierzchni gospodarstw."
  },
  {
    id: "R05_ROL_07",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do przyczyn marnowania żywności: niskie ceny, zbyt duże porcje, wymagania dotyczące wyglądu warzyw, powszechne wykorzystywanie resztek.",
    options: null,
    answer: "powszechne wykorzystywanie resztek",
    explanation: "Wykorzystywanie resztek ogranicza straty, natomiast niskie ceny, duże porcje i odrzucanie niedoskonałych produktów zwiększają marnowanie."
  },
  {
    id: "R05_ROL_08",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "scenario",
    prompt: "Sklep nie przyjmuje zdrowych warzyw tylko dlatego, że mają nieregularny kształt. Na jakim etapie marnowana jest ta żywność?",
    options: ["Produkcji i dystrybucji przed dotarciem do konsumenta", "Wyłącznie podczas jedzenia w domu", "Dopiero po eksporcie do Europy", "Podczas badań patentowych", "W czasie nawadniania pól", "Podczas tworzenia megalopolis"],
    answer: 0,
    explanation: "Część żywności jest odrzucana podczas produkcji i dystrybucji, zanim dotrze do klientów, ze względu na wymagania dotyczące wyglądu.",
    image: "r05_marnowanie_zywnosci.jpg"
  },
  {
    id: "R05_ROL_09",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "sort",
    prompt: "Przyporządkuj działania do zwiększania produkcji lub ograniczania marnowania żywności.",
    options: null,
    items: ["wykorzystanie GPS", "zastosowanie dronów", "uprawa roślin modyfikowanych genetycznie", "promocja banków żywności", "wykorzystanie resztek", "sprzedaż warzyw o nieregularnym kształcie"],
    categories: ["zwiększanie wydajności produkcji", "ograniczanie marnowania"],
    answer: {
      "zwiększanie wydajności produkcji": ["wykorzystanie GPS", "zastosowanie dronów", "uprawa roślin modyfikowanych genetycznie"],
      "ograniczanie marnowania": ["promocja banków żywności", "wykorzystanie resztek", "sprzedaż warzyw o nieregularnym kształcie"]
    },
    explanation: "Technologie zwiększają wydajność rolnictwa, natomiast banki żywności i pełniejsze wykorzystanie produktów zmniejszają straty."
  },
  {
    id: "R05_ROL_10",
    section: "Rolnictwo i gospodarowanie żywnością",
    type: "sequence",
    prompt: "Ułóż drogę produktu, który zostaje zmarnowany przed zakupem.",
    options: null,
    items: ["Produkt nie znajduje nabywcy", "Warzywo zostaje wyprodukowane", "Produkt jest odrzucany z powodu wyglądu", "Żywność zostaje zmarnowana"],
    answer: ["Warzywo zostaje wyprodukowane", "Produkt jest odrzucany z powodu wyglądu", "Produkt nie znajduje nabywcy", "Żywność zostaje zmarnowana"],
    explanation: "Wymagania estetyczne mogą sprawić, że pełnowartościowy produkt zostanie odrzucony i zmarnowany jeszcze przed sprzedażą."
  },

  {
    id: "R05_GOS_01",
    section: "Gospodarka USA i innowacyjność",
    type: "single_choice",
    prompt: "Które miejsce zajmuje gospodarka Stanów Zjednoczonych pod względem wartości wytwarzanych dóbr i usług bez uwzględnienia siły nabywczej pieniądza?",
    options: ["Pierwsze", "Drugie", "Trzecie", "Czwarte", "Piąte", "Dziesiąte"],
    answer: 0,
    explanation: "Bez uwzględnienia siły nabywczej pieniądza wartość PKB Stanów Zjednoczonych jest najwyższa na świecie."
  },
  {
    id: "R05_GOS_02",
    section: "Gospodarka USA i innowacyjność",
    type: "true_false",
    prompt: "Po uwzględnieniu siły nabywczej pieniądza Stany Zjednoczone zajmują drugie miejsce po Chinach.",
    options: null,
    answer: true,
    explanation: "Według PKB uwzględniającego siłę nabywczą pieniądza gospodarka USA znajduje się za gospodarką Chin."
  },
  {
    id: "R05_GOS_03",
    section: "Gospodarka USA i innowacyjność",
    type: "multi_select",
    prompt: "Zaznacz czynniki budujące znaczenie Stanów Zjednoczonych w światowej gospodarce.",
    options: ["Wielkość produkcji", "Wielkość eksportu i importu", "Innowacyjność", "Wpływy polityczne", "Działanie korporacji międzynarodowych", "Brak inwestycji zagranicznych"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Pozycję USA tworzą rozmiar gospodarki i handlu, innowacyjność, inwestycje, wpływy polityczne oraz korporacje międzynarodowe."
  },
  {
    id: "R05_GOS_04",
    section: "Gospodarka USA i innowacyjność",
    type: "fill_in",
    prompt: "Do 2019 roku Stany Zjednoczone zajmowały __________ miejsce na świecie pod względem liczby przyznawanych patentów, a obecnie zajmują miejsce __________.",
    options: null,
    answer: ["pierwsze", "drugie"],
    altAnswers: [["pierwsze", "1", "1."], ["drugie", "2", "2."]],
    explanation: "USA utraciły pierwsze miejsce pod względem liczby patentów na rzecz Chin, ale nadal są oceniane jako gospodarka bardzo innowacyjna."
  },
  {
    id: "R05_GOS_05",
    section: "Gospodarka USA i innowacyjność",
    type: "match",
    prompt: "Połącz wskaźnik z obszarem znaczenia gospodarczego, który opisuje.",
    options: null,
    left: ["Wysoka wartość PKB", "Duża liczba patentów", "Wysoka wartość inwestycji zagranicznych", "Eksport maszyn i aparatury medycznej"],
    right: ["Wielkość gospodarki", "Innowacyjność", "Siła oddziaływania za granicą", "Produkty zaawansowane technologicznie"],
    answer: {
      "Wysoka wartość PKB": "Wielkość gospodarki",
      "Duża liczba patentów": "Innowacyjność",
      "Wysoka wartość inwestycji zagranicznych": "Siła oddziaływania za granicą",
      "Eksport maszyn i aparatury medycznej": "Produkty zaawansowane technologicznie"
    },
    explanation: "Różne wskaźniki pokazują wielkość gospodarki, jej innowacyjność, wpływy międzynarodowe i technologiczne zaawansowanie eksportu."
  },
  {
    id: "R05_GOS_06",
    section: "Gospodarka USA i innowacyjność",
    type: "riddle",
    prompt: "Jak nazywa się prawna ochrona nowatorskiego rozwiązania technologicznego?",
    options: null,
    answer: "patent",
    altAnswers: ["patent", "ochrona patentowa"],
    explanation: "Patent chroni własność intelektualną, aby inni nie mogli bez zgody wykorzystać efektów prac rozwojowych."
  },
  {
    id: "R05_GOS_07",
    section: "Gospodarka USA i innowacyjność",
    type: "odd_one_out",
    prompt: "Wskaż produkt niepasujący do grupy wyrobów wymagających zaawansowanych technologii: komputery, aparatura medyczna, samoloty, kukurydza.",
    options: null,
    answer: "kukurydza",
    explanation: "Kukurydza jest płodem rolnym, natomiast pozostałe produkty wymagają zastosowania zaawansowanych technologii na etapie produkcji."
  },
  {
    id: "R05_GOS_08",
    section: "Gospodarka USA i innowacyjność",
    type: "scenario",
    prompt: "Zespół badaczy opracował nowy mikroprocesor i chce uniemożliwić innym firmom kopiowanie rozwiązania. Co powinien zrobić?",
    options: ["Wystąpić o patent", "Zrezygnować z ochrony własności intelektualnej", "Przekształcić miasto w megalopolis", "Zmniejszyć okres wegetacyjny", "Zbudować schron przeciw tornadu", "Wycofać produkt z badań"],
    answer: 0,
    explanation: "Rejestracja patentu służy ochronie własności intelektualnej powstałej w wyniku badań i prac rozwojowych."
  },
  {
    id: "R05_GOS_09",
    section: "Gospodarka USA i innowacyjność",
    type: "sort",
    prompt: "Przyporządkuj przykłady do handlu zagranicznego lub innowacyjności.",
    options: null,
    items: ["eksport maszyn", "import surowców", "eksport usług", "przyznawanie patentów", "badania naukowe", "tworzenie nowych technologii"],
    categories: ["handel zagraniczny", "innowacyjność"],
    answer: {
      "handel zagraniczny": ["eksport maszyn", "import surowców", "eksport usług"],
      "innowacyjność": ["przyznawanie patentów", "badania naukowe", "tworzenie nowych technologii"]
    },
    explanation: "Eksport i import opisują handel zagraniczny, natomiast badania, patenty i nowe technologie świadczą o innowacyjności."
  },
  {
    id: "R05_GOS_10",
    section: "Gospodarka USA i innowacyjność",
    type: "sequence",
    prompt: "Ułóż etapy prowadzące od badań do ochrony wynalazku.",
    options: null,
    items: ["Zgłoszenie rozwiązania do ochrony patentowej", "Prowadzenie badań naukowych", "Opracowanie nowatorskiego rozwiązania", "Uzyskanie ochrony własności intelektualnej"],
    answer: ["Prowadzenie badań naukowych", "Opracowanie nowatorskiego rozwiązania", "Zgłoszenie rozwiązania do ochrony patentowej", "Uzyskanie ochrony własności intelektualnej"],
    explanation: "Badania mogą doprowadzić do wynalazku, który następnie zgłasza się w celu uzyskania ochrony patentowej."
  },

  {
    id: "R05_DOL_01",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "single_choice",
    prompt: "Od czego pochodzi nazwa Doliny Krzemowej?",
    options: ["Od krzemu używanego w półprzewodnikach i mikroprocesorach", "Od licznych kopalń diamentów", "Od nazwy pobliskiej rzeki Krzemowej", "Od koloru skał w Appalachach", "Od nazwiska założyciela miasta", "Od upraw kukurydzy"],
    answer: 0,
    explanation: "Krzem jest podstawowym materiałem półprzewodników, tranzystorów i mikroprocesorów wytwarzanych przez firmy regionu.",
    image: "r05_dolina_krzemowa.jpg"
  },
  {
    id: "R05_DOL_02",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "true_false",
    prompt: "Technopolia to ośrodek skupiający firmy oparte na nowoczesnych technologiach.",
    options: null,
    answer: true,
    explanation: "Miasta Doliny Krzemowej nazywa się technopoliami, ponieważ ich rozwój jest ściśle związany z nowoczesnymi technologiami."
  },
  {
    id: "R05_DOL_03",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "multi_select",
    prompt: "Zaznacz czynniki rozwoju Doliny Krzemowej.",
    options: ["Renomowane uczelnie", "Wsparcie rządu i zamówienia wojskowe", "Dostępność komunikacyjna", "Kultura pracy wspierająca innowacyjność", "Łagodny klimat", "Brak specjalistów i inwestorów"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Rozwój Doliny wspierały uczelnie, rząd i armia, dobra dostępność, przyjazna innowacjom kultura pracy, klimat oraz napływ specjalistów i kapitału."
  },
  {
    id: "R05_DOL_04",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "fill_in",
    prompt: "Pierwsze megalopolis USA rozciąga się od miasta __________ do miasta __________ wzdłuż Wschodniego Wybrzeża.",
    options: null,
    answer: ["Boston", "Waszyngton"],
    altAnswers: [["Boston", "Bostonu"], ["Waszyngton", "Waszyngtonu"]],
    explanation: "Megalopolis Wschodniego Wybrzeża obejmuje między innymi Boston, Nowy Jork, Filadelfię i Waszyngton.",
    image: "r05_megalopolis_wschodniego_wybrzeza.jpg"
  },
  {
    id: "R05_DOL_05",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "match",
    prompt: "Połącz pojęcie z właściwym opisem.",
    options: null,
    left: ["Technopolia", "Anioł biznesu", "Start-up", "Megalopolis"],
    right: ["Ośrodek firm nowoczesnych technologii", "Inwestor wspierający młodą firmę w zamian za udziały", "Młode innowacyjne przedsiębiorstwo", "Połączony zespół wielkich obszarów miejskich"],
    answer: {
      "Technopolia": "Ośrodek firm nowoczesnych technologii",
      "Anioł biznesu": "Inwestor wspierający młodą firmę w zamian za udziały",
      "Start-up": "Młode innowacyjne przedsiębiorstwo",
      "Megalopolis": "Połączony zespół wielkich obszarów miejskich"
    },
    explanation: "Pojęcia opisują środowisko innowacyjnych firm i wielkie formy osadnicze charakterystyczne dla USA."
  },
  {
    id: "R05_DOL_06",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "riddle",
    prompt: "Jak nazywa się proces przenoszenia się mieszkańców i zabudowy z centrum miasta na przedmieścia?",
    options: null,
    answer: "suburbanizacja",
    altAnswers: ["suburbanizacja", "proces suburbanizacji"],
    explanation: "Suburbanizacja prowadzi do rozbudowy przedmieść i przestrzennego rozlewania się miast."
  },
  {
    id: "R05_DOL_07",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "odd_one_out",
    prompt: "Wskaż miasto niepasujące do megalopolis Wschodniego Wybrzeża: Boston, Nowy Jork, Filadelfia, Los Angeles.",
    options: null,
    answer: "Los Angeles",
    explanation: "Boston, Nowy Jork i Filadelfia leżą w megalopolis Wschodniego Wybrzeża, natomiast Los Angeles leży w Kalifornii."
  },
  {
    id: "R05_DOL_08",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "scenario",
    prompt: "Młoda innowacyjna firma potrzebuje finansowania, kontaktów i pomocy w zarządzaniu. Kto może ją wesprzeć w zamian za udziały?",
    options: ["Anioł biznesu", "Meteorolog", "Rolnik ekstensywny", "Ratownik po tornadzie", "Operator banku żywności", "Urzędnik patentowy bez funkcji inwestora"],
    answer: 0,
    explanation: "Anioł biznesu wnosi kapitał, wiedzę i kontakty, otrzymując w zamian udziały w młodej spółce."
  },
  {
    id: "R05_DOL_09",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "sort",
    prompt: "Przyporządkuj zjawiska do Doliny Krzemowej lub rozwoju amerykańskich miast.",
    options: null,
    items: ["renomowane uczelnie", "start-upy", "aniołowie biznesu", "suburbanizacja", "rozlewanie się miast", "powstawanie megalopolis"],
    categories: ["Dolina Krzemowa", "amerykańskie miasta"],
    answer: {
      "Dolina Krzemowa": ["renomowane uczelnie", "start-upy", "aniołowie biznesu"],
      "amerykańskie miasta": ["suburbanizacja", "rozlewanie się miast", "powstawanie megalopolis"]
    },
    explanation: "Dolina Krzemowa jest środowiskiem innowacji i finansowania młodych firm, a urbanizacja USA tworzy rozległe przedmieścia i megalopolis."
  },
  {
    id: "R05_DOL_10",
    section: "Dolina Krzemowa i amerykańskie miasta",
    type: "sequence",
    prompt: "Ułóż etapy prowadzące do powstania megalopolis.",
    options: null,
    items: ["Strefy podmiejskie sąsiednich miast łączą się", "Powstaje megalopolis", "Postępuje suburbanizacja", "Miasta rozlewają się na coraz większy obszar"],
    answer: ["Postępuje suburbanizacja", "Miasta rozlewają się na coraz większy obszar", "Strefy podmiejskie sąsiednich miast łączą się", "Powstaje megalopolis"],
    explanation: "Suburbanizacja rozszerza miasta, aż ich strefy podmiejskie łączą się w wielki zespół miejski."
  },

  {
    id: "R05_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który zestaw poprawnie łączy zjawisko ze skalą używaną do opisu jego siły?",
    options: ["Tornado - skala Fujity; cyklon tropikalny - skala Saffira-Simpsona", "Tornado - skala Saffira-Simpsona; cyklon tropikalny - skala Fujity", "Oba zjawiska - wyłącznie skala Beauforta", "Tornado - skala patentowa; cyklon - skala urbanizacji", "Oba zjawiska - skala Richtera", "Cyklon - skala Fujity; tornado - brak skali"],
    answer: 0,
    explanation: "Zmodyfikowana skala Fujity opisuje tornada, a skala Saffira-Simpsona klasyfikuje cyklony tropikalne."
  },
  {
    id: "R05_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje dotyczące huraganu Michael.",
    options: ["Wystąpił 7-11 października 2018 roku", "Osiągnął kategorię 5", "Maksymalny wiatr miał 260 km/h", "Najsilniej uderzył we Florydę", "Powstał nad Morzem Karaibskim i Zatoką Meksykańską", "Był tornadem w skali Fujity"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Michael był huraganem kategorii 5 z wiatrem do 260 km/h; powstał nad Morzem Karaibskim i Zatoką Meksykańską, a najsilniej uderzył we Florydę.",
    image: "r05_skala_huraganu.jpg"
  },
  {
    id: "R05_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz stopień tornada w zmodyfikowanej skali Fujity z zakresem prędkości wiatru.",
    options: null,
    left: ["Stopień 0", "Stopień 1", "Stopień 2", "Stopień 4", "Stopień 5"],
    right: ["105-137 km/h", "138-177 km/h", "178-217 km/h", "267-322 km/h", "ponad 322 km/h"],
    answer: {
      "Stopień 0": "105-137 km/h",
      "Stopień 1": "138-177 km/h",
      "Stopień 2": "178-217 km/h",
      "Stopień 4": "267-322 km/h",
      "Stopień 5": "ponad 322 km/h"
    },
    explanation: "Kolejne stopnie skali Fujity odpowiadają coraz większej prędkości wiatru i coraz poważniejszym zniszczeniom."
  },
  {
    id: "R05_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Huragan Michael spowodował w USA straty szacowane na __________ dolarów i wywołał __________ lokalnych tornad.",
    options: null,
    answer: ["25 miliardów", "16"],
    altAnswers: [["25 miliardów", "25 mld", "25 miliardów dolarów"], ["16", "szesnaście"]],
    explanation: "Straty w Stanach Zjednoczonych oszacowano na 25 miliardów dolarów, a huragan wywołał 16 lokalnych tornad."
  },
  {
    id: "R05_HARD_05",
    section: "Super trudne",
    type: "true_false",
    prompt: "Stany Zjednoczone zużywały w 2020 roku mniej nawozów na hektar niż Francja, Polska i Kanada, a mimo to zebrały najwięcej kukurydzy spośród tych państw.",
    options: null,
    answer: true,
    explanation: "USA zużywały 49 kg nawozów na hektar, mniej niż porównywane państwa, lecz dzięki wielkim areałom zebrały 360 251 tys. ton kukurydzy."
  },
  {
    id: "R05_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "Gospodarstwo zwiększa nakłady na hektar, używa GPS i dronów oraz uzyskuje wysokie plony kukurydzy. Jaki charakter ma ta produkcja?",
    options: ["Intensywny", "Ekstensywny", "Wyłącznie samozaopatrzeniowy", "Niezwiązany z rolnictwem", "Tradycyjny bez technologii", "Miejski"],
    answer: 0,
    explanation: "Duże nakłady na jednostkę powierzchni i wysokie plony oznaczają rolnictwo intensywne."
  },
  {
    id: "R05_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do problemów dalszego rozwoju Doliny Krzemowej: wysokie ceny nieruchomości, korki, wysokie oczekiwania płacowe, krótki okres wegetacyjny.",
    options: null,
    answer: "krótki okres wegetacyjny",
    explanation: "Krótki okres wegetacyjny ogranicza rolnictwo na północy Kanady, a pozostałe problemy dotyczą funkcjonowania Doliny Krzemowej."
  },
  {
    id: "R05_HARD_08",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj liczby do właściwego zagadnienia.",
    options: null,
    items: ["ponad 1200 rocznie", "do 500 km/h", "6,7% wydatków", "mniej niż 1,5% pracujących", "niemal 83% ludności", "260 km/h"],
    categories: ["tornada i huragany", "rolnictwo i żywność", "amerykańskie miasta"],
    answer: {
      "tornada i huragany": ["ponad 1200 rocznie", "do 500 km/h", "260 km/h"],
      "rolnictwo i żywność": ["6,7% wydatków", "mniej niż 1,5% pracujących"],
      "amerykańskie miasta": ["niemal 83% ludności"]
    },
    explanation: "USA notują ponad 1200 tornad rocznie, wiatr tornada może osiągać 500 km/h, Michael osiągnął 260 km/h, żywność stanowi 6,7% wydatków, w rolnictwie pracuje poniżej 1,5%, a w miastach mieszka niemal 83% ludności."
  },
  {
    id: "R05_HARD_09",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z rozwojem Doliny Krzemowej od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: ["Nazwa Dolina Krzemowa upowszechnia się od początku lat 70. XX wieku", "Rozwój pracy zdalnej zwiększa możliwość pracy spoza regionu", "Powstają Uniwersytet Kalifornijski i Uniwersytet Stanforda", "Armia wspiera laboratoria i produkcję sprzętu podczas II wojny światowej"],
    answer: ["Powstają Uniwersytet Kalifornijski i Uniwersytet Stanforda", "Armia wspiera laboratoria i produkcję sprzętu podczas II wojny światowej", "Nazwa Dolina Krzemowa upowszechnia się od początku lat 70. XX wieku", "Rozwój pracy zdalnej zwiększa możliwość pracy spoza regionu"],
    explanation: "Uczelnie powstały w XIX wieku, wsparcie wojska nasiliło się podczas II wojny światowej, nazwa rozpowszechniła się w latach 70., a praca zdalna stała się ważna współcześnie.",
    image: "r05_dolina_krzemowa.jpg"
  },
  {
    id: "R05_HARD_10",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazwano sytuację, w której wielkie korporacje Doliny Krzemowej wchłaniają małe firmy lub doprowadzają do ich upadku?",
    options: null,
    answer: "strefa śmierci",
    altAnswers: ["strefa śmierci", "strefę śmierci"],
    explanation: "Określenie \"strefa śmierci\" opisuje niekorzystny wpływ wielkich korporacji na rozwój start-upów."
  },
  {
    id: "R05_HARD_11",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz zależności pokazujące wpływ rzeźby terenu na zjawiska w Ameryce Północnej.",
    options: ["Południkowy układ Kordylierów i Appalachów ułatwia przemieszczanie mas powietrza północ-południe", "Wznoszenie powietrza na Kordylierach zwiększa opady na stokach dowietrznych", "Opadanie powietrza po wschodniej stronie Kordylierów prowadzi do jego ogrzewania i osuszania", "Wysokość Kordylierów nie wpływa na uprawy", "Równinne tereny środkowej części USA sprzyjają zderzaniu się mas powietrza", "Appalachy zatrzymują wszystkie cyklony nad oceanem"],
    answer: [0, 1, 2, 4],
    explanation: "Układ gór i równin kieruje przepływem mas powietrza, a Kordyliery powodują opady po stronie dowietrznej i osuszanie powietrza po stronie wschodniej."
  },
  {
    id: "R05_HARD_12",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz każdą przyczynę z odpowiadającym jej skutkiem.",
    options: null,
    left: ["Tania i łatwo dostępna żywność", "Suburbanizacja", "Ciepła woda oceanu powyżej 26°C", "Działalność renomowanych uczelni", "Chłodny Prąd Labradorski"],
    right: ["Większe ryzyko marnowania jedzenia", "Rozlewanie się miast", "Możliwość rozwoju cyklonu tropikalnego", "Rozwój firm technologicznych", "Obniżenie temperatury na wschodzie Kanady"],
    answer: {
      "Tania i łatwo dostępna żywność": "Większe ryzyko marnowania jedzenia",
      "Suburbanizacja": "Rozlewanie się miast",
      "Ciepła woda oceanu powyżej 26°C": "Możliwość rozwoju cyklonu tropikalnego",
      "Działalność renomowanych uczelni": "Rozwój firm technologicznych",
      "Chłodny Prąd Labradorski": "Obniżenie temperatury na wschodzie Kanady"
    },
    explanation: "Każda para łączy mechanizm przyrodniczy, społeczny lub gospodarczy z jego bezpośrednim następstwem."
  }
];

const KID_PROMPTS = {
  "R05_TOR_01": "Jakie dwa rodzaje powietrza zderzają się, gdy powstaje tornado?",
  "R05_CYK_01": "Gdzie i przy jakiej temperaturze wody tworzy się huragan?",
  "R05_UPR_01": "Dlaczego trudno uprawiać rośliny na północy Kanady?",
  "R05_ROL_01": "Dlaczego Kanada i USA zbierają tak dużo plonów?",
  "R05_GOS_03": "Co sprawia, że gospodarka USA jest ważna na świecie?",
  "R05_DOL_03": "Co pomogło rozwinąć Dolinę Krzemową?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Ameryka Północna",
  icon: "🌎",
  sectionOrder: [
    "Tornada",
    "Cyklony tropikalne",
    "Warunki upraw w Kanadzie",
    "Rolnictwo i gospodarowanie żywnością",
    "Gospodarka USA i innowacyjność",
    "Dolina Krzemowa i amerykańskie miasta"
  ],
  sectionIcons: {
    "Tornada": "🌪️",
    "Cyklony tropikalne": "🌀",
    "Warunki upraw w Kanadzie": "🌾",
    "Rolnictwo i gospodarowanie żywnością": "🚜",
    "Gospodarka USA i innowacyjność": "📈",
    "Dolina Krzemowa i amerykańskie miasta": "💻"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
