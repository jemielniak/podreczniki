// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POZ  = Położenie i cyrkulacja atmosferyczna
//   STR  = Strefy klimatyczno-roślinno-glebowe
//   SAH  = Sahel i pustynnienie
//   GOS  = Gospodarowanie w Sahelu
//   WYZ  = Problemy wyżywienia w Afryce
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_POZ_01",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "single_choice",
    prompt: "Jaką powierzchnię zajmuje Afryka?",
    options: ["Około 10 mln km²", "Około 20 mln km²", "Około 30 mln km²", "Około 40 mln km²", "Około 50 mln km²", "Około 60 mln km²"],
    answer: 2,
    explanation: "Afryka zajmuje około 30 mln km² i jest drugim największym kontynentem na Ziemi."
  },
  {
    id: "R03_POZ_02",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "true_false",
    prompt: "Wyżyny stanowią około 70% powierzchni Afryki.",
    options: null,
    answer: true,
    explanation: "Większość powierzchni Afryki zajmują wyżyny, a niziny leżą głównie na wybrzeżach."
  },
  {
    id: "R03_POZ_03",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "fill_in",
    prompt: "Afrykę oblewa Ocean __________ od wschodu i Ocean __________ od zachodu.",
    options: null,
    answer: ["Indyjski", "Atlantycki"],
    altAnswers: [["Indyjski", "Indyjski Ocean"], ["Atlantycki", "Atlantyk", "Ocean Atlantycki"]],
    explanation: "Wschodnie wybrzeża Afryki oblewa Ocean Indyjski, a zachodnie Ocean Atlantycki."
  },
  {
    id: "R03_POZ_04",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "single_choice",
    prompt: "Który szczyt jest najwyższą górą Afryki?",
    options: ["Kilimandżaro", "Atlas", "Kenia", "Ruwenzori", "Tibesti", "Smocze Góry"],
    answer: 0,
    explanation: "Kilimandżaro jest najwyższą górą Afryki i osiąga 5895 m n.p.m."
  },
  {
    id: "R03_POZ_05",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "riddle",
    prompt: "Stałe wiatry wiejące w strefie międzyzwrotnikowej od wyżów zwrotnikowych ku równikowej strefie obniżonego ciśnienia to...",
    options: null,
    answer: "pasaty",
    altAnswers: ["pasaty", "pasat"],
    explanation: "Pasaty wieją regularnie przez cały rok w kierunku równika, a ich tor zakrzywia się wskutek ruchu obrotowego Ziemi."
  },
  {
    id: "R03_POZ_06",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "sequence",
    prompt: "Ułóż etapy cyrkulacji powietrza w strefie międzyzwrotnikowej od procesu zachodzącego nad równikiem.",
    options: null,
    items: ["Powietrze przy powierzchni wraca ku równikowi jako pasaty", "Powietrze na dużej wysokości przemieszcza się ku zwrotnikom", "Wilgotne powietrze nad równikiem unosi się", "Nad zwrotnikami powietrze opada i ogrzewa się", "Para wodna kondensuje i powstają intensywne opady"],
    answer: ["Wilgotne powietrze nad równikiem unosi się", "Para wodna kondensuje i powstają intensywne opady", "Powietrze na dużej wysokości przemieszcza się ku zwrotnikom", "Nad zwrotnikami powietrze opada i ogrzewa się", "Powietrze przy powierzchni wraca ku równikowi jako pasaty"],
    explanation: "Nad równikiem powietrze unosi się i daje opady, następnie przemieszcza się ku zwrotnikom, opada, ogrzewa się i wraca przy powierzchni jako pasaty."
  },
  {
    id: "R03_POZ_07",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "match",
    prompt: "Połącz element położenia Afryki z właściwą informacją.",
    options: null,
    left: ["Równik", "Południk 0°", "Ocean Indyjski", "Ocean Atlantycki"],
    right: ["przecina kontynent ze wschodu na zachód", "przecina kontynent z północy na południe", "oblewa Afrykę od wschodu", "oblewa Afrykę od zachodu"],
    answer: {
      "Równik": "przecina kontynent ze wschodu na zachód",
      "Południk 0°": "przecina kontynent z północy na południe",
      "Ocean Indyjski": "oblewa Afrykę od wschodu",
      "Ocean Atlantycki": "oblewa Afrykę od zachodu"
    },
    explanation: "Afryka leży po obu stronach równika i południka 0°, między Oceanem Indyjskim a Atlantyckim."
  },
  {
    id: "R03_POZ_08",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "multi_select",
    prompt: "Zaznacz informacje prawidłowo opisujące Afrykę.",
    options: ["Leży po obu stronach równika", "Leży wyłącznie na półkuli północnej", "Przecina ją południk 0°", "Większość powierzchni stanowią wyżyny", "Niziny dominują w głębi kontynentu", "Jest drugim największym kontynentem"],
    answer: [0, 2, 3, 5],
    explanation: "Afrykę przecinają równik i południk 0°, około 70% jej powierzchni stanowią wyżyny, a pod względem powierzchni zajmuje drugie miejsce na świecie."
  },
  {
    id: "R03_POZ_09",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "scenario",
    prompt: "Nad silnie nagrzanym obszarem w pobliżu równika wilgotne powietrze zaczyna się unosić. Jakie warunki powstaną przy powierzchni i w wyższych warstwach atmosfery?",
    options: ["Wyż i brak chmur", "Niż i intensywne opady", "Wyż i opady śniegu", "Niż i wieloletnia susza", "Stała temperatura i brak wiatru", "Mróz i opad gradu"],
    answer: 1,
    explanation: "Unoszenie nagrzanego, wilgotnego powietrza tworzy przy powierzchni strefę obniżonego ciśnienia, a ochładzanie i kondensacja prowadzą do intensywnych opadów."
  },
  {
    id: "R03_POZ_10",
    section: "Położenie i cyrkulacja atmosferyczna",
    type: "odd_one_out",
    prompt: "Wskaż akwen niepasujący do pozostałych pod względem położenia względem Afryki: Ocean Atlantycki, Ocean Indyjski, Morze Śródziemne, Ocean Spokojny.",
    options: null,
    answer: "Ocean Spokojny",
    explanation: "Ocean Spokojny nie oblewa Afryki, w przeciwieństwie do Atlantyku, Oceanu Indyjskiego i Morza Śródziemnego."
  },

  {
    id: "R03_STR_01",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "single_choice",
    prompt: "Który klimat cechuje wysoka temperatura przez cały rok i suma opadów przekraczająca 1500 mm?",
    options: ["Równikowy wilgotny", "Podrównikowy", "Zwrotnikowy suchy", "Podzwrotnikowy", "Umiarkowany chłodny", "Okołobiegunowy"],
    answer: 0,
    explanation: "W klimacie równikowym wilgotnym temperatura przez cały rok przekracza 20°C, a suma opadów jest bardzo wysoka."
  },
  {
    id: "R03_STR_02",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "true_false",
    prompt: "W wilgotnym lesie równikowym występuje długa pora sucha.",
    options: null,
    answer: false,
    explanation: "Wilgotny las równikowy otrzymuje opady przez cały rok, dlatego nie występuje tam pora sucha ani zima."
  },
  {
    id: "R03_STR_03",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "match",
    prompt: "Połącz typ klimatu z typową formacją roślinną.",
    options: null,
    left: ["równikowy wilgotny", "podrównikowy", "zwrotnikowy suchy", "podzwrotnikowy"],
    right: ["wilgotny las równikowy", "sawanna", "pustynie i półpustynie", "roślinność śródziemnomorska"],
    answer: {
      "równikowy wilgotny": "wilgotny las równikowy",
      "podrównikowy": "sawanna",
      "zwrotnikowy suchy": "pustynie i półpustynie",
      "podzwrotnikowy": "roślinność śródziemnomorska"
    },
    explanation: "Warunki klimatyczne decydują o układzie formacji roślinnych od lasu równikowego przez sawannę i pustynie po roślinność śródziemnomorską."
  },
  {
    id: "R03_STR_04",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "sort",
    prompt: "Przyporządkuj gleby do właściwych klimatów.",
    options: null,
    items: ["gleby czerwonożółte", "gleby laterytowe", "gleby pustynne", "szaroziemy", "gleby cynamonowe"],
    categories: ["równikowy wilgotny", "podrównikowy", "zwrotnikowy suchy", "podzwrotnikowy"],
    answer: {
      "równikowy wilgotny": ["gleby czerwonożółte"],
      "podrównikowy": ["gleby laterytowe"],
      "zwrotnikowy suchy": ["gleby pustynne", "szaroziemy"],
      "podzwrotnikowy": ["gleby cynamonowe"]
    },
    explanation: "Każda strefa klimatyczna ma charakterystyczne gleby wynikające z ilości wody, temperatury, roślinności i przebiegu procesów glebotwórczych."
  },
  {
    id: "R03_STR_05",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "fill_in",
    prompt: "W wilgotnym lesie równikowym wyróżnia się __________ warstw.",
    options: null,
    answer: ["pięć"],
    altAnswers: [["pięć", "5"]],
    explanation: "Budowa wilgotnego lasu równikowego jest piętrowa i obejmuje pięć warstw."
  },
  {
    id: "R03_STR_06",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "riddle",
    prompt: "Zróżnicowanie wszystkich form życia na Ziemi lub na określonym obszarze to...",
    options: null,
    answer: "bioróżnorodność",
    altAnswers: ["bioróżnorodność", "różnorodność biologiczna"],
    explanation: "Wilgotny las równikowy wyróżnia się bardzo dużą bioróżnorodnością."
  },
  {
    id: "R03_STR_07",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "multi_select",
    prompt: "Zaznacz procesy i cechy typowe dla gleb wilgotnego lasu równikowego.",
    options: ["Szybki rozkład szczątków organicznych", "Silne wypłukiwanie składników odżywczych", "Duża zawartość próchnicy", "Mała żyzność", "Powstawanie tlenków żelaza", "Brak procesów glebotwórczych"],
    answer: [0, 1, 3, 4],
    explanation: "Wysoka temperatura i wilgotność przyspieszają rozkład szczątków i powstawanie tlenków żelaza, ale obfite opady wypłukują składniki odżywcze, więc gleby są mało żyzne."
  },
  {
    id: "R03_STR_08",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "scenario",
    prompt: "Podróżnik oddala się od równika przez obszary klimatu podrównikowego. Jak będą zmieniać się pora sucha i roczna suma opadów?",
    options: ["Pora sucha będzie krótsza, a opadów przybędzie", "Pora sucha będzie dłuższa, a opadów ubędzie", "Pora sucha zaniknie, a opady pozostaną stałe", "Pora sucha będzie dłuższa, a opadów przybędzie", "Obie wartości pozostaną bez zmian", "Temperatura spadnie poniżej zera przez cały rok"],
    answer: 1,
    explanation: "Wraz z oddalaniem się od równika pora sucha się wydłuża, a roczna suma opadów maleje."
  },
  {
    id: "R03_STR_09",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "single_choice",
    prompt: "Jak nazywa się odmiana sawanny występująca bliżej równika, gdzie może rosnąć wiele drzew?",
    options: ["Sawanna parkowa", "Pustynia kamienista", "Makia", "Tundra", "Step", "Tajga"],
    answer: 0,
    explanation: "Bliżej równika opadów jest więcej, dlatego rozwija się sawanna parkowa z liczniejszymi drzewami."
  },
  {
    id: "R03_STR_10",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "true_false",
    prompt: "Baobaby mogą przetrwać okresową suszę dzięki gromadzeniu wody we wnętrzu pnia.",
    options: null,
    answer: true,
    explanation: "Magazynowanie wody w pniu jest jednym z przystosowań baobabów do warunków sawanny."
  },
  {
    id: "R03_STR_11",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "odd_one_out",
    prompt: "Wskaż roślinę niepasującą do pozostałych pod względem typowej strefy występowania: baobab, akacja, kolczasty krzew sawanny, drzewo oliwne.",
    options: null,
    answer: "drzewo oliwne",
    explanation: "Baobaby, akacje i kolczaste krzewy są związane z sawanną, a drzewa oliwne uprawia się w klimacie śródziemnomorskim."
  },
  {
    id: "R03_STR_12",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "single_choice",
    prompt: "Czym jest oaza?",
    options: ["Miejscem, gdzie woda podziemna wypływa lub zalega płytko", "Piaszczystą częścią każdej pustyni", "Suchym korytem rzeki w lesie równikowym", "Strefą opadów nad równikiem", "Twardą skorupą na glebie laterytowej", "Obszarem wiecznej zmarzliny"],
    answer: 0,
    explanation: "W oazie dostępna jest płytko zalegająca lub wypływająca na powierzchnię woda podziemna, dlatego może rozwijać się roślinność."
  },
  {
    id: "R03_STR_13",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "multi_select",
    prompt: "Zaznacz cechy środowiska pustyń Afryki.",
    options: ["Opady mogą nie występować przez kilka lat", "Procesy glebotwórcze są słabe", "Wszystkie pustynie są pokryte wydmami", "W glebie prawie brak poziomu próchnicznego", "Podsiąkająca woda może pozostawiać sól", "Roślinność jest bujna przez cały rok"],
    answer: [0, 1, 3, 4],
    explanation: "Na pustyniach opady są sporadyczne, gleby słabo wykształcone i ubogie w próchnicę, a po odparowaniu podsiąkającej wody może pozostać sól."
  },
  {
    id: "R03_STR_14",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "match",
    prompt: "Połącz cechę strefy śródziemnomorskiej z jej znaczeniem.",
    options: null,
    left: ["grube liście pokryte woskiem", "zimozieloność", "makia", "gleby cynamonowe"],
    right: ["ograniczenie utraty wody", "brak potrzeby zrzucania liści", "wtórne zarośla po wykarczowaniu lasów", "duża zawartość próchnicy i przydatność rolnicza"],
    answer: {
      "grube liście pokryte woskiem": "ograniczenie utraty wody",
      "zimozieloność": "brak potrzeby zrzucania liści",
      "makia": "wtórne zarośla po wykarczowaniu lasów",
      "gleby cynamonowe": "duża zawartość próchnicy i przydatność rolnicza"
    },
    explanation: "Rośliny śródziemnomorskie ograniczają utratę wody, makia jest formacją wtórną, a gleby cynamonowe są stosunkowo próchniczne i dobre pod uprawę."
  },
  {
    id: "R03_STR_15",
    section: "Strefy klimatyczno-roślinno-glebowe",
    type: "sequence",
    prompt: "Ułóż formacje roślinne w kolejności od równika ku zwrotnikowi.",
    options: null,
    items: ["pustynia", "wilgotny las równikowy", "półpustynia", "sawanna"],
    answer: ["wilgotny las równikowy", "sawanna", "półpustynia", "pustynia"],
    explanation: "Wraz z oddalaniem się od równika opadów ubywa, dlatego las równikowy przechodzi w sawannę, półpustynię i pustynię."
  },

  {
    id: "R03_SAH_01",
    section: "Sahel i pustynnienie",
    type: "riddle",
    prompt: "Pas rozciągający się ze wschodu na zachód Afryki, będący strefą graniczną między sawanną a pustynią, to...",
    options: null,
    answer: "Sahel",
    altAnswers: ["Sahel", "sahel"],
    explanation: "Sahel jest strefą przejściową między pustynią na północy a wilgotną sawanną na południu."
  },
  {
    id: "R03_SAH_02",
    section: "Sahel i pustynnienie",
    type: "single_choice",
    prompt: "Co oznacza arabskie słowo sahel?",
    options: ["Brzeg", "Pustynia", "Sawanna", "Studnia", "Deszcz", "Wiatr"],
    answer: 0,
    explanation: "Słowo sahel oznacza brzeg, tutaj rozumiany jako granica pustyni."
  },
  {
    id: "R03_SAH_03",
    section: "Sahel i pustynnienie",
    type: "fill_in",
    prompt: "Północną granicę Sahelu wyznacza izohieta __________ mm, a południową izohieta __________ mm.",
    options: null,
    answer: ["200", "500"],
    altAnswers: [["200", "200 mm"], ["500", "500 mm"]],
    explanation: "Za północną granicę Sahelu przyjmuje się izohietę 200 mm, a za południową izohietę 500 mm."
  },
  {
    id: "R03_SAH_04",
    section: "Sahel i pustynnienie",
    type: "multi_select",
    prompt: "Zaznacz państwa, których obszary leżą w strefie Sahelu.",
    options: ["Mali", "Niger", "Czad", "Nigeria", "Sudan", "Tunezja"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Do państw położonych w strefie Sahelu należą między innymi Mali, Niger, Czad, Nigeria i Sudan."
  },
  {
    id: "R03_SAH_05",
    section: "Sahel i pustynnienie",
    type: "true_false",
    prompt: "Sahel rozciąga się ze wschodu na zachód Afryki na długości około 5400 km.",
    options: null,
    answer: true,
    explanation: "Pas Sahelu ma około 5400 km długości i przecina Afrykę równoleżnikowo."
  },
  {
    id: "R03_SAH_06",
    section: "Sahel i pustynnienie",
    type: "match",
    prompt: "Połącz zmianę klimatu w Sahelu z jej bezpośrednim przejawem.",
    options: null,
    left: ["wzrost temperatury", "długotrwałe susze", "spadek opadów na zachodzie", "bardzo intensywne opady"],
    right: ["więcej dni z ekstremalnym upałem", "wielomiesięczny niedobór wody", "silniejsze wysychanie części regionu", "powodzie"],
    answer: {
      "wzrost temperatury": "więcej dni z ekstremalnym upałem",
      "długotrwałe susze": "wielomiesięczny niedobór wody",
      "spadek opadów na zachodzie": "silniejsze wysychanie części regionu",
      "bardzo intensywne opady": "powodzie"
    },
    explanation: "Zmiany klimatu w Sahelu obejmują zarówno susze i spadek opadów, jak i częstsze gwałtowne opady powodujące powodzie."
  },
  {
    id: "R03_SAH_07",
    section: "Sahel i pustynnienie",
    type: "single_choice",
    prompt: "Na czym polega pustynnienie?",
    options: ["Na zwiększaniu się zasięgu pustyni wskutek zmian klimatu i niewłaściwego gospodarowania", "Na sezonowym zazielenianiu się sawanny", "Na tworzeniu oaz przez wody podziemne", "Na powstawaniu lasów w pobliżu równika", "Na wypłukiwaniu soli z gleb pustynnych", "Na zamianie pustyni w pola uprawne"],
    answer: 0,
    explanation: "Pustynnienie to zwiększanie się zasięgu pustyni związane ze zmianami klimatu oraz niewłaściwym wykorzystaniem wody, gleb i roślinności."
  },
  {
    id: "R03_SAH_08",
    section: "Sahel i pustynnienie",
    type: "sort",
    prompt: "Podziel czynniki pustynnienia na klimatyczne i związane z działalnością człowieka.",
    options: null,
    items: ["opóźniona pora deszczowa", "długotrwała susza", "wzrost temperatury", "wycinanie drzew", "nadmierny wypas", "nadmierna eksploatacja wody"],
    categories: ["czynniki klimatyczne", "działalność człowieka"],
    answer: {
      "czynniki klimatyczne": ["opóźniona pora deszczowa", "długotrwała susza", "wzrost temperatury"],
      "działalność człowieka": ["wycinanie drzew", "nadmierny wypas", "nadmierna eksploatacja wody"]
    },
    explanation: "Kruchą równowagę Sahelu naruszają jednocześnie zmiany klimatu oraz nadmierne wykorzystywanie zasobów przez człowieka."
  },
  {
    id: "R03_SAH_09",
    section: "Sahel i pustynnienie",
    type: "sequence",
    prompt: "Ułóż etapy prowadzące od wzrostu liczby ludności do pustynnienia.",
    options: null,
    items: ["gleba ulega wyjałowieniu i erozji", "rośnie zapotrzebowanie na wodę i żywność", "teren zamienia się w pustynię", "zasoby gleby i wody są nadmiernie eksploatowane", "wzrasta liczba ludności"],
    answer: ["wzrasta liczba ludności", "rośnie zapotrzebowanie na wodę i żywność", "zasoby gleby i wody są nadmiernie eksploatowane", "gleba ulega wyjałowieniu i erozji", "teren zamienia się w pustynię"],
    explanation: "Rosnące potrzeby ludności zwiększają presję na zasoby, prowadząc do degradacji gleby, utraty roślinności i pustynnienia."
  },
  {
    id: "R03_SAH_10",
    section: "Sahel i pustynnienie",
    type: "scenario",
    prompt: "W danym roku strefa opadów przesunęła się słabiej ku północy niż zwykle. Jak wpłynie to na Sahel?",
    options: ["Deszcz będzie padał krócej i może nie objąć części regionu", "Pora deszczowa wydłuży się w całym regionie", "Opady staną się regularne przez cały rok", "Powstanie wilgotny las równikowy", "Temperatura spadnie poniżej zera", "Zaniknie pora sucha"],
    answer: 0,
    explanation: "Jeśli strefa opadów nie przesunie się dostatecznie daleko na północ, opadów w Sahelu będzie niewiele, a miejscami mogą nie wystąpić."
  },
  {
    id: "R03_SAH_11",
    section: "Sahel i pustynnienie",
    type: "odd_one_out",
    prompt: "Wskaż państwo niepasujące do pozostałych pod względem położenia w strefie Sahelu: Mali, Niger, Czad, Etiopia.",
    options: null,
    answer: "Etiopia",
    explanation: "Mali, Niger i Czad leżą w strefie Sahelu, natomiast Etiopia leży w Afryce Wschodniej i nie należy do tej grupy."
  },
  {
    id: "R03_SAH_12",
    section: "Sahel i pustynnienie",
    type: "true_false",
    prompt: "Wycinka drzew w Sahelu może nasilać przesuszanie gleby oraz erozję wodną i wiatrową.",
    options: null,
    answer: true,
    explanation: "Usunięcie drzew zmniejsza ochronę gleby i przyspiesza jej przesuszanie oraz niszczenie przez wodę i wiatr."
  },

  {
    id: "R03_GOS_01",
    section: "Gospodarowanie w Sahelu",
    type: "single_choice",
    prompt: "Między jakimi grupami najczęściej dochodzi do sporów o wodę i ziemię w Sahelu?",
    options: ["Wędrownymi pasterzami i osiadłymi rolnikami", "Rybakami i górnikami", "Mieszkańcami miast i turystami", "Leśnikami i marynarzami", "Kupcami i pracownikami portów", "Plantatorami oliwek i winorośli"],
    answer: 0,
    explanation: "Wędrowni pasterze przemieszczający stada w poszukiwaniu wody i pastwisk wkraczają niekiedy na tereny zajęte przez osiadłych rolników."
  },
  {
    id: "R03_GOS_02",
    section: "Gospodarowanie w Sahelu",
    type: "match",
    prompt: "Połącz grupę mieszkańców Sahelu z właściwym opisem.",
    options: null,
    left: ["Fulanie", "Dogonowie", "koczownicy", "osiadli rolnicy"],
    right: ["lud pasterski nazywany też Fulbe lub Peul", "malijskie plemię zajmujące się uprawą roli", "przemieszczają się ze stadami", "uprawiają stale użytkowane pola"],
    answer: {
      "Fulanie": "lud pasterski nazywany też Fulbe lub Peul",
      "Dogonowie": "malijskie plemię zajmujące się uprawą roli",
      "koczownicy": "przemieszczają się ze stadami",
      "osiadli rolnicy": "uprawiają stale użytkowane pola"
    },
    explanation: "Fulanie są ludem pasterskim prowadzącym koczowniczy tryb życia, a Dogonowie należą do osiadłych rolników."
  },
  {
    id: "R03_GOS_03",
    section: "Gospodarowanie w Sahelu",
    type: "multi_select",
    prompt: "Zaznacz korzyści wynikające z przejścia mieszkańców Sahelu na osiadły tryb życia.",
    options: ["Stały dostęp do czystej wody ze studni", "Łatwiejszy dostęp do edukacji", "Łatwiejszy dostęp do opieki medycznej", "Możliwość łączenia chowu zwierząt z uprawą", "Całkowite usunięcie ryzyka pustynnienia", "Nieograniczona powierzchnia pastwisk"],
    answer: [0, 1, 2, 3],
    explanation: "Osiadły tryb życia ułatwia korzystanie ze studni i usług oraz pozwala łączyć uprawę roli z chowem zwierząt."
  },
  {
    id: "R03_GOS_04",
    section: "Gospodarowanie w Sahelu",
    type: "true_false",
    prompt: "Studnie głębinowe mogą dostarczać mieszkańcom Sahelu czystej wody przez cały rok.",
    options: null,
    answer: true,
    explanation: "W wielu miejscach wywiercono studnie głębinowe zapewniające całoroczny dostęp do czystej wody."
  },
  {
    id: "R03_GOS_05",
    section: "Gospodarowanie w Sahelu",
    type: "scenario",
    prompt: "Pasterze przestali wędrować i przez cały rok wypasają liczne stado wokół jednej studni. Jaki skutek środowiskowy jest najbardziej prawdopodobny?",
    options: ["Zniszczenie roślinności i przyspieszenie pustynnienia", "Powstanie wilgotnego lasu równikowego", "Wzrost żyzności bez nawożenia", "Zanik erozji gleby", "Stały wzrost opadów", "Rozwój naturalnych lasów cedrowych"],
    answer: 0,
    explanation: "Stały i nadmierny wypas w jednym miejscu niszczy szatę roślinną, degraduje glebę i przyspiesza pustynnienie."
  },
  {
    id: "R03_GOS_06",
    section: "Gospodarowanie w Sahelu",
    type: "riddle",
    prompt: "Działalność łącząca uprawę drzew i innych roślin lub chów zwierząt na tym samym terenie to...",
    options: null,
    answer: "agroleśnictwo",
    altAnswers: ["agroleśnictwo", "agrolesnictwo"],
    explanation: "Agroleśnictwo łączy różne sposoby użytkowania ziemi i może wspierać zrównoważone gospodarowanie w Sahelu."
  },
  {
    id: "R03_GOS_07",
    section: "Gospodarowanie w Sahelu",
    type: "sort",
    prompt: "Przyporządkuj działania do tych, które ograniczają lub nasilają degradację środowiska Sahelu.",
    options: null,
    items: ["agroleśnictwo", "sadzenie roślin w dołkach z nawozem", "współpraca z lokalną ludnością", "nadmierny wypas", "wycinanie drzew na opał", "nadmierne nawadnianie"],
    categories: ["ograniczają degradację", "nasilają degradację"],
    answer: {
      "ograniczają degradację": ["agroleśnictwo", "sadzenie roślin w dołkach z nawozem", "współpraca z lokalną ludnością"],
      "nasilają degradację": ["nadmierny wypas", "wycinanie drzew na opał", "nadmierne nawadnianie"]
    },
    explanation: "Proste metody dostosowane do warunków lokalnych pomagają chronić zasoby, natomiast nadmierna eksploatacja roślinności, gleby i wody je degraduje."
  },
  {
    id: "R03_GOS_08",
    section: "Gospodarowanie w Sahelu",
    type: "fill_in",
    prompt: "Przy niedoborze wody rośliny sadzi się w specjalnych __________, w których umieszcza się __________, a następnie je podlewa.",
    options: null,
    answer: ["dołkach", "nawóz"],
    altAnswers: [["dołkach", "dołki"], ["nawóz", "nawoz"]],
    explanation: "Dołki pomagają skoncentrować wodę i nawóz przy roślinie, choć metoda ta jest pracochłonna."
  },
  {
    id: "R03_GOS_09",
    section: "Gospodarowanie w Sahelu",
    type: "sequence",
    prompt: "Ułóż kolejne etapy skutku nadmiernego wypasu wokół wodopoju.",
    options: null,
    items: ["przyspiesza pustynnienie", "zwierzęta stale żerują na tym samym obszarze", "niszczona jest szata roślinna", "gleba ulega degradacji"],
    answer: ["zwierzęta stale żerują na tym samym obszarze", "niszczona jest szata roślinna", "gleba ulega degradacji", "przyspiesza pustynnienie"],
    explanation: "Skupienie stad w jednym miejscu prowadzi od zniszczenia roślinności przez degradację gleby do nasilenia pustynnienia."
  },
  {
    id: "R03_GOS_10",
    section: "Gospodarowanie w Sahelu",
    type: "multi_select",
    prompt: "Jakie cechy powinny mieć rozwiązania wspierające zrównoważone gospodarowanie w Sahelu?",
    options: ["Proste", "Niewymagające kosztownych inwestycji", "Wypracowane z lokalną ludnością", "Dostosowane do niedoboru wody", "Oparte wyłącznie na wielkich zaporach", "Zależne od stałych obfitych opadów"],
    answer: [0, 1, 2, 3],
    explanation: "W Sahelu sprawdzają się proste i niedrogie rozwiązania rozwijane wspólnie z mieszkańcami i dostosowane do niedoboru wody."
  },

  {
    id: "R03_WYZ_01",
    section: "Problemy wyżywienia w Afryce",
    type: "single_choice",
    prompt: "Jakie cztery grupy czynników prowadzą do niedoboru żywności?",
    options: ["Przyrodnicze, społeczne, ekonomiczne i polityczne", "Klimatyczne, językowe, religijne i sportowe", "Geologiczne, astronomiczne, militarne i turystyczne", "Rolnicze, morskie, przemysłowe i kulturowe", "Wyłącznie przyrodnicze i ekonomiczne", "Wyłącznie społeczne i polityczne"],
    answer: 0,
    explanation: "Brak żywności najczęściej wynika ze współdziałania czynników przyrodniczych, społecznych, ekonomicznych i politycznych."
  },
  {
    id: "R03_WYZ_02",
    section: "Problemy wyżywienia w Afryce",
    type: "sort",
    prompt: "Przyporządkuj przyczyny niedoboru żywności do właściwych grup.",
    options: null,
    items: ["susza", "powódź", "szybki wzrost liczby ludności", "niski poziom wykształcenia", "rolnictwo samozaopatrzeniowe", "bezrobocie", "grabienie dostaw", "blokowanie pomocy żywnościowej"],
    categories: ["przyrodnicze", "społeczne", "ekonomiczne", "polityczne"],
    answer: {
      "przyrodnicze": ["susza", "powódź"],
      "społeczne": ["szybki wzrost liczby ludności", "niski poziom wykształcenia"],
      "ekonomiczne": ["rolnictwo samozaopatrzeniowe", "bezrobocie"],
      "polityczne": ["grabienie dostaw", "blokowanie pomocy żywnościowej"]
    },
    explanation: "Niedobór żywności ma wiele źródeł, które można grupować jako przyrodnicze, społeczne, ekonomiczne i polityczne."
  },
  {
    id: "R03_WYZ_03",
    section: "Problemy wyżywienia w Afryce",
    type: "true_false",
    prompt: "Niedobór żywności jest zwykle skutkiem tylko jednego czynnika.",
    options: null,
    answer: false,
    explanation: "Najczęściej działa kilka czynników jednocześnie, a jeden może potęgować skutki drugiego."
  },
  {
    id: "R03_WYZ_04",
    section: "Problemy wyżywienia w Afryce",
    type: "scenario",
    prompt: "Po długiej suszy na mocno wysuszoną i stwardniałą powierzchnię spada gwałtowna ulewa. Co stanie się z wodą i uprawami?",
    options: ["Woda szybko spłynie, wywołując powódź i niszcząc uprawy", "Woda w całości wsiąknie i użyźni glebę", "Powstanie trwały las równikowy", "Ulewa zatrzyma erozję", "Koryta rzek pozostaną suche", "Zasolenie gleby natychmiast zniknie"],
    answer: 0,
    explanation: "Stwardniałe, wysuszone podłoże słabo przyjmuje wodę, dlatego spływ powierzchniowy szybko wypełnia koryta rzek, powoduje powodzie i erozję."
  },
  {
    id: "R03_WYZ_05",
    section: "Problemy wyżywienia w Afryce",
    type: "match",
    prompt: "Połącz zjawisko z jego wpływem na produkcję żywności.",
    options: null,
    left: ["długotrwała susza", "gwałtowna powódź", "plaga szarańczy", "degradacja gleby"],
    right: ["utrata plonów z braku wody", "niszczenie upraw przez wezbrane rzeki", "zjadanie roślin na polach i pastwiskach", "spadek przydatności ziemi dla rolnictwa"],
    answer: {
      "długotrwała susza": "utrata plonów z braku wody",
      "gwałtowna powódź": "niszczenie upraw przez wezbrane rzeki",
      "plaga szarańczy": "zjadanie roślin na polach i pastwiskach",
      "degradacja gleby": "spadek przydatności ziemi dla rolnictwa"
    },
    explanation: "Susze, powodzie, szarańcza i degradacja gleb różnymi drogami ograniczają plony i dostęp do żywności."
  },
  {
    id: "R03_WYZ_06",
    section: "Problemy wyżywienia w Afryce",
    type: "fill_in",
    prompt: "Długotrwały brak wystarczającej ilości energii z pożywienia to głód __________, a niedobór ważnych składników pokarmowych to głód __________.",
    options: null,
    answer: ["jawny", "utajony"],
    altAnswers: [["jawny", "głód jawny"], ["utajony", "głód utajony"]],
    explanation: "Głód jawny oznacza niedostatek energii, a głód utajony niedobór białek, witamin lub mikroelementów mimo dostarczania energii."
  },
  {
    id: "R03_WYZ_07",
    section: "Problemy wyżywienia w Afryce",
    type: "riddle",
    prompt: "Rodzaj rolnictwa, którego produkty służą głównie rolnikowi, jego rodzinie lub lokalnej społeczności, a nie sprzedaży, to...",
    options: null,
    answer: "rolnictwo samozaopatrzeniowe",
    altAnswers: ["rolnictwo samozaopatrzeniowe", "samozaopatrzeniowe"],
    explanation: "Rolnictwo samozaopatrzeniowe dostarcza żywności na własne potrzeby i zwykle nie tworzy dochodu na inwestycje."
  },
  {
    id: "R03_WYZ_08",
    section: "Problemy wyżywienia w Afryce",
    type: "multi_select",
    prompt: "Zaznacz ekonomiczne przyczyny niedoboru żywności.",
    options: ["Rolnictwo samozaopatrzeniowe", "Brak środków na modernizację gospodarstw", "Nieskuteczny system podatkowy", "Korupcja", "Niskie dochody państwa", "Wysoka bioróżnorodność"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Niska wydajność rolnictwa, brak kapitału, słabość instytucji, korupcja i niskie dochody państwa ograniczają inwestycje i produkcję żywności."
  },
  {
    id: "R03_WYZ_09",
    section: "Problemy wyżywienia w Afryce",
    type: "single_choice",
    prompt: "Dlaczego zastępowanie roślin żywieniowych bawełną i kwiatami może pogłębiać niedobór żywności?",
    options: ["Zmniejsza powierzchnię przeznaczoną na produkcję żywności", "Zwiększa ilość opadów", "Powoduje rozwój lasu równikowego", "Obniża liczbę ludności", "Usuwa potrzebę importu", "Zatrzymuje migracje"],
    answer: 0,
    explanation: "Rośliny przemysłowe i eksportowe zajmują grunty, które mogłyby służyć produkcji żywności dla mieszkańców."
  },
  {
    id: "R03_WYZ_10",
    section: "Problemy wyżywienia w Afryce",
    type: "true_false",
    prompt: "Długotrwałe bezpłatne dostawy żywności zawsze wzmacniają lokalną produkcję rolną.",
    options: null,
    answer: false,
    explanation: "Pomoc ratuje życie w sytuacjach kryzysowych, lecz długotrwałe darmowe dostawy mogą uzależniać społeczeństwo i czynić lokalną produkcję nieopłacalną."
  },
  {
    id: "R03_WYZ_11",
    section: "Problemy wyżywienia w Afryce",
    type: "sort",
    prompt: "Przyporządkuj skutki niedoboru żywności do właściwych grup.",
    options: null,
    items: ["anemia", "zanik mięśni", "migracje", "konflikty o żywność", "wydatki na import żywności", "niezdolność do pracy"],
    categories: ["zdrowotne", "społeczne", "ekonomiczne"],
    answer: {
      "zdrowotne": ["anemia", "zanik mięśni"],
      "społeczne": ["migracje", "konflikty o żywność"],
      "ekonomiczne": ["wydatki na import żywności", "niezdolność do pracy"]
    },
    explanation: "Niedożywienie szkodzi zdrowiu, destabilizuje społeczeństwa i zwiększa koszty ponoszone przez gospodarkę."
  },
  {
    id: "R03_WYZ_12",
    section: "Problemy wyżywienia w Afryce",
    type: "odd_one_out",
    prompt: "Wskaż element niebędący przyczyną niedoboru żywności: susza, bezrobocie, korupcja, anemia.",
    options: null,
    answer: "anemia",
    explanation: "Anemia jest zdrowotnym skutkiem niedożywienia, natomiast susza, bezrobocie i korupcja mogą przyczyniać się do niedoboru żywności."
  },
  {
    id: "R03_WYZ_13",
    section: "Problemy wyżywienia w Afryce",
    type: "scenario",
    prompt: "Rodzina ucieka przed wojną, pozostawiając pola, narzędzia i zwierzęta, a następnie trafia do obozu dla uchodźców. Od czego będzie szczególnie zależna?",
    options: ["Od pomocy żywnościowej z zewnątrz", "Od sprzedaży własnych dużych plonów", "Od uprawy oliwek w klimacie śródziemnomorskim", "Od turystyki pustynnej", "Od wydobycia soli", "Od stałych opadów równikowych"],
    answer: 0,
    explanation: "Przymusowi migranci tracą możliwość produkowania żywności i w obozach dla uchodźców są zależni od pomocy zewnętrznej."
  },
  {
    id: "R03_WYZ_14",
    section: "Problemy wyżywienia w Afryce",
    type: "sequence",
    prompt: "Ułóż etapy prowadzące od przeznaczenia gruntów pod rośliny eksportowe do pogorszenia bezpieczeństwa żywnościowego.",
    options: null,
    items: ["maleje dostępność żywności dla mieszkańców", "na gruntach sadzi się rośliny przemysłowe", "zmniejsza się powierzchnia upraw żywieniowych", "spada lokalna produkcja żywności"],
    answer: ["na gruntach sadzi się rośliny przemysłowe", "zmniejsza się powierzchnia upraw żywieniowych", "spada lokalna produkcja żywności", "maleje dostępność żywności dla mieszkańców"],
    explanation: "Przeznaczenie ziemi pod bawełnę, kwiaty lub inne rośliny eksportowe ogranicza produkcję roślin żywieniowych."
  },
  {
    id: "R03_WYZ_15",
    section: "Problemy wyżywienia w Afryce",
    type: "multi_select",
    prompt: "Zaznacz zdrowotne skutki niedożywienia.",
    options: ["Zahamowanie wzrostu", "Osłabienie odporności", "Upośledzony rozwój mózgu", "Anemia", "Zanik mięśni", "Wzrost dochodów państwa"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Niedożywienie może zahamować wzrost i rozwój mózgu, osłabiać odporność, powodować anemię oraz zanik mięśni."
  },

  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ilu ludzi zamieszkiwało Afrykę w 2023 roku?",
    options: ["Około 0,8 mld", "Około 1,0 mld", "Ponad 1,4 mld", "Około 2,0 mld", "Ponad 2,5 mld", "Około 3,0 mld"],
    answer: 2,
    explanation: "W 2023 roku Afrykę zamieszkiwało ponad 1,4 miliarda ludzi."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "single_choice",
    prompt: "O ile osób rocznie rosła populacja Afryki w ostatniej dekadzie?",
    options: ["Około 3 mln", "Około 10 mln", "Około 20 mln", "Około 30 mln", "Około 50 mln", "Około 100 mln"],
    answer: 3,
    explanation: "W ostatniej dekadzie liczba ludności Afryki zwiększała się o około 30 milionów osób rocznie."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Kilimandżaro osiąga __________ m n.p.m., a jego szczyt leży powyżej linii __________ śniegu.",
    options: null,
    answer: ["5895", "wiecznego"],
    altAnswers: [["5895", "5895 m", "5895 m n.p.m."], ["wiecznego", "wieczny"]],
    explanation: "Wysokość Kilimandżaro wynosi 5895 m n.p.m.; powyżej linii wiecznego śniegu w ciągu roku więcej śniegu przybywa, niż topnieje."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz glebę z procesem lub cechą wyjaśniającą jej właściwości.",
    options: null,
    left: ["czerwonożółta", "laterytowa", "pustynna", "cynamonowa"],
    right: ["wypłukiwanie składników przez obfite opady", "intensywne wietrzenie chemiczne i związki żelaza oraz glinu", "bardzo słabe procesy glebotwórcze i mało próchnicy", "powstanie na skałach wapiennych pod dawnymi lasami"],
    answer: {
      "czerwonożółta": "wypłukiwanie składników przez obfite opady",
      "laterytowa": "intensywne wietrzenie chemiczne i związki żelaza oraz glinu",
      "pustynna": "bardzo słabe procesy glebotwórcze i mało próchnicy",
      "cynamonowa": "powstanie na skałach wapiennych pod dawnymi lasami"
    },
    explanation: "Właściwości gleb wynikają z odmiennych warunków wilgotnościowych, procesów wietrzenia i rodzaju roślinności."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż pełny ciąg procesów prowadzących do powstania suchej strefy zwrotnikowej.",
    options: null,
    items: ["przy powierzchni tworzy się wyż", "powietrze przemieszcza się górą ku zwrotnikom", "nad równikiem powietrze unosi się i traci wilgoć", "opadające powietrze ogrzewa się", "nie powstają chmury i opady"],
    answer: ["nad równikiem powietrze unosi się i traci wilgoć", "powietrze przemieszcza się górą ku zwrotnikom", "opadające powietrze ogrzewa się", "przy powierzchni tworzy się wyż", "nie powstają chmury i opady"],
    explanation: "Powietrze osuszone nad równikiem opada w pobliżu zwrotników, ogrzewa się i tworzy wyże ograniczające rozwój chmur oraz opady."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "scenario",
    prompt: "Na zwykle skrajnie suchej pustyni wystąpiły intensywne opady i powstały okresowe jeziora. Dlaczego może to doprowadzić do plagi szarańczy?",
    options: ["Wilgoć umożliwia wylęganie, rozmnażanie i przejście szarańczy do trybu stadnego", "Deszcz natychmiast zabija naturalnych wrogów szarańczy", "Szarańcza rozmnaża się wyłącznie na suchej skale", "Woda zatrzymuje wzrost roślin", "Powódź uniemożliwia składanie jaj", "Chłód pustyni przyspiesza rozwój owadów"],
    answer: 0,
    explanation: "Szarańcza potrzebuje wilgoci do rozwoju; po deszczach roślinność się zazielenia, a owady mogą intensywnie się rozmnażać i tworzyć stada."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz informacje dotyczące kryzysu żywnościowego w Rogu Afryki.",
    options: ["Cztery pory deszczowe nie przyniosły spodziewanych opadów", "Somalia importowała 92% pszenicy z Rosji i Ukrainy", "Wyschły źródła wody", "Wszystkie kraje stały się samowystarczalne", "Nieudane plony i padanie zwierząt pogłębiły kryzys", "Ceny żywności i paliw spadły"],
    answer: [0, 1, 2, 4],
    explanation: "Brak oczekiwanych deszczów, wysychanie źródeł, utrata plonów i zwierząt oraz zakłócenia importu pszenicy pogłębiły niedożywienie."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W którym kraju liczba niedożywionych dzieci przyjętych do leczenia wzrosła o 71%?",
    options: ["Etiopia", "Somalia", "Kenia", "Sudan", "Mali", "Niger"],
    answer: 2,
    explanation: "Wzrost wyniósł 27% w Etiopii, 48% w Somalii i 71% w Kenii."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Od lutego do maja liczba gospodarstw domowych bez bezpiecznego źródła wody wzrosła z __________ mln do __________ mln.",
    options: null,
    answer: ["5,6", "10,5"],
    altAnswers: [["5,6", "5.6", "5,6 mln"], ["10,5", "10.5", "10,5 mln"]],
    explanation: "W analizowanym okresie liczba takich gospodarstw niemal się podwoiła, rosnąc z 5,6 mln do 10,5 mln."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz przykład z właściwą grupą przyczyn niedoboru żywności.",
    options: null,
    left: ["nieprzewidywalne opady", "niski poziom wykształcenia", "brak środków transportu", "grabienie dostaw przez watażków"],
    right: ["przyrodnicza", "społeczna", "ekonomiczna", "polityczna"],
    answer: {
      "nieprzewidywalne opady": "przyrodnicza",
      "niski poziom wykształcenia": "społeczna",
      "brak środków transportu": "ekonomiczna",
      "grabienie dostaw przez watażków": "polityczna"
    },
    explanation: "Kryzys żywnościowy może jednocześnie wynikać z warunków przyrodniczych, sytuacji społecznej, słabej gospodarki i działań politycznych."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "true_false",
    prompt: "Słaba infrastruktura utrzymuje około 90% afrykańskich wiosek i miasteczek w izolacji od rynku.",
    options: null,
    answer: true,
    explanation: "Brak dobrych dróg, pojazdów i łączności odcina wiele miejscowości od rynku i dostępu do pieniądza."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "single_choice",
    prompt: "W którym roku konflikt w Mali przerodził się w krwawą wojnę domową?",
    options: ["1980", "1991", "2001", "2012", "2020", "2023"],
    answer: 3,
    explanation: "Ułatwiony dostęp do broni sprawił, że w Mali plemienne potyczki przerodziły się w wojnę domową w 2012 roku."
  },
  {
    id: "R03_HARD_13",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz prawidłowe informacje o pustyniach i glebach pustynnych Afryki.",
    options: ["Tylko niewielka część pustyń jest pokryta piaszczystymi wydmami", "Większość pustyń ma charakter kamienisty lub żwirowy", "Nasiona niektórych roślin pozostają uśpione do czasu opadu", "Podsiąkająca woda może pozostawić sól po odparowaniu", "Gleby pustynne mają gruby poziom próchniczny", "Opady występują regularnie co miesiąc"],
    answer: [0, 1, 2, 3],
    explanation: "Afrykańskie pustynie są głównie kamieniste i żwirowe, rośliny mogą długo czekać na deszcz, a parowanie sprzyja gromadzeniu soli."
  },
  {
    id: "R03_HARD_14",
    section: "Super trudne",
    type: "scenario",
    prompt: "Susza zmusiła ludność do migracji. W miejscu docelowym wzrosło zapotrzebowanie na wodę, paszę i drewno. Jak działa ten mechanizm?",
    options: ["Skutki suszy zostają dodatkowo spotęgowane przez presję na zasoby", "Migracja automatycznie usuwa skutki suszy", "Większy popyt odtwarza roślinność", "Zmniejsza się ryzyko konfliktów o wodę", "Zasoby stają się niewyczerpalne", "Rolnictwo natychmiast staje się nowoczesne"],
    answer: 0,
    explanation: "Czynniki kryzysu wzajemnie się wzmacniają: susza wywołuje migracje, a większa presja na ograniczone zasoby pogłębia jej skutki."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Afryka, część 1",
  icon: "🌍",
  sectionOrder: [
    "Położenie i cyrkulacja atmosferyczna",
    "Strefy klimatyczno-roślinno-glebowe",
    "Sahel i pustynnienie",
    "Gospodarowanie w Sahelu",
    "Problemy wyżywienia w Afryce"
  ],
  sectionIcons: {
    "Położenie i cyrkulacja atmosferyczna": "🧭",
    "Strefy klimatyczno-roślinno-glebowe": "🌿",
    "Sahel i pustynnienie": "🏜️",
    "Gospodarowanie w Sahelu": "🌱",
    "Problemy wyżywienia w Afryce": "🌾"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
