// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PRZY = Środowisko przyrodnicze Ameryki
//   CYKL = Tornada i cyklony tropikalne
//   AMAZ = Amazonia
//   LUDN = Ludność i urbanizacja Ameryki
//   KAN  = Kanada - środowisko i rolnictwo
//   USA  = Stany Zjednoczone - gospodarka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_PRZY_01",
    section: "Środowisko przyrodnicze Ameryki",
    type: "single_choice",
    prompt: "Wzdłuż jakiego przesmyku przebiega umowna granica między Ameryką Północną a Ameryką Południową?",
    options: ["Przesmyku Panamskiego", "Przesmyku Tehuantepec", "Przesmyku Sueskiego", "Cieśniny Beringa", "Półwyspu Jukatan", "Cieśniny Magellana"],
    answer: 0,
    explanation: "Umowna granica między dwoma kontynentami przebiega wzdłuż Przesmyku Panamskiego."
  },
  {
    id: "R03_PRZY_02",
    section: "Środowisko przyrodnicze Ameryki",
    type: "match",
    prompt: "Połącz część Ameryki z charakterystyczną formą rzeźby terenu.",
    image: "r03_rzezba_ameryki.jpg",
    options: null,
    left: ["zachód Ameryki Północnej", "zachód Ameryki Południowej", "wschód Ameryki Północnej", "wschód Ameryki Południowej"],
    right: ["Kordyliery", "Andy", "Appalachy", "Wyżyna Gujańska, Brazylijska i Patagońska"],
    answer: {
          "zachód Ameryki Północnej": "Kordyliery",
          "zachód Ameryki Południowej": "Andy",
          "wschód Ameryki Północnej": "Appalachy",
          "wschód Ameryki Południowej": "Wyżyna Gujańska, Brazylijska i Patagońska"
        },
    explanation: "W zachodnich częściach obu kontynentów leżą młode góry fałdowe, a na wschodzie występują stare góry i wyżyny."
  },
  {
    id: "R03_PRZY_03",
    section: "Środowisko przyrodnicze Ameryki",
    type: "true_false",
    prompt: "Ameryka leży w zasięgu wszystkich stref klimatycznych, między innymi dzięki dużej rozciągłości południkowej.",
    options: null,
    answer: true,
    explanation: "Duża rozciągłość Ameryki z północy na południe sprawia, że obejmuje ona wszystkie strefy klimatyczne."
  },
  {
    id: "R03_PRZY_04",
    section: "Środowisko przyrodnicze Ameryki",
    type: "multi_select",
    prompt: "Zaznacz czynniki sprzyjające dużemu zróżnicowaniu klimatu Ameryki.",
    options: [
          "duża rozciągłość południkowa",
          "zróżnicowanie wysokości terenu",
          "prądy morskie",
          "południkowy układ rzeźby terenu",
          "jednakowa wysokość całego kontynentu",
          "brak wpływu oceanów"
        ],
    answer: [0, 1, 2, 3],
    explanation: "Kontrasty klimatyczne wynikają z dużej rozciągłości południkowej, zróżnicowania wysokości terenu oraz oddziaływania prądów morskich. Znaczenie ma też południkowy układ rzeźby terenu."
  },
  {
    id: "R03_PRZY_05",
    section: "Środowisko przyrodnicze Ameryki",
    type: "fill_in",
    prompt: "Najwyższym szczytem Kordylierów w Ameryce Północnej jest Denali o wysokości __________ m n.p.m., a najwyższym szczytem Andów jest Aconcagua o wysokości __________ m n.p.m.",
    options: null,
    answer: ["6190", "6962"],
    altAnswers: [
          ["6190", "6190 m", "6190 m n.p.m."],
          ["6962", "6962 m", "6962 m n.p.m."]
        ],
    explanation: "Denali ma 6190 m n.p.m., a Aconcagua 6962 m n.p.m."
  },
  {
    id: "R03_PRZY_06",
    section: "Środowisko przyrodnicze Ameryki",
    type: "sort",
    prompt: "Przyporządkuj formacje roślinne do obszarów, z którymi są związane.",
    options: null,
    items: ["preria", "pampa", "tajga", "tundra"],
    categories: ["Ameryka Północna - step", "Ameryka Południowa - step", "chłodna strefa umiarkowana", "klimat okołobiegunowy"],
    answer: {
          "Ameryka Północna - step": ["preria"],
          "Ameryka Południowa - step": ["pampa"],
          "chłodna strefa umiarkowana": ["tajga"],
          "klimat okołobiegunowy": ["tundra"]
        },
    explanation: "Preria występuje w Ameryce Północnej, pampa w Ameryce Południowej, tajga w chłodnej strefie umiarkowanej, a tundra w klimacie okołobiegunowym."
  },
  {
    id: "R03_PRZY_07",
    section: "Środowisko przyrodnicze Ameryki",
    type: "single_choice",
    prompt: "Który system rzeczny jest największym systemem rzecznym Ameryki Północnej?",
    options: ["Missisipi-Missouri", "Amazonka", "Orinoko", "Parana-Paragwaj", "Mackenzie-Fraser", "Kolorado-Rio Grande"],
    answer: 0,
    explanation: "Największym systemem rzecznym Ameryki Północnej jest Missisipi-Missouri, którego dorzecze zajmuje ponad 13% powierzchni kontynentu."
  },
  {
    id: "R03_PRZY_08",
    section: "Środowisko przyrodnicze Ameryki",
    type: "riddle",
    prompt: "Jak nazywa się zespół pięciu wielkich jezior słodkowodnych obejmujący Jezioro Górne, Michigan, Huron, Erie i Ontario?",
    options: null,
    answer: "Wielkie Jeziora",
    altAnswers: ["Wielkie Jeziora", "wielkie jeziora"],
    explanation: "Te pięć zbiorników tworzy Wielkie Jeziora."
  },
  {
    id: "R03_PRZY_09",
    section: "Środowisko przyrodnicze Ameryki",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Jezioro Górne, Michigan, Huron, Titicaca.",
    options: null,
    answer: "Titicaca",
    explanation: "Jezioro Górne, Michigan i Huron należą do Wielkich Jezior. Titicaca leży w Andach w Ameryce Południowej."
  },
  {
    id: "R03_PRZY_10",
    section: "Środowisko przyrodnicze Ameryki",
    type: "scenario",
    prompt: "Statek chce skrócić drogę między wschodnim i zachodnim wybrzeżem Stanów Zjednoczonych, nie opływając Ameryki Południowej. Z jakiej drogi wodnej powinien skorzystać?",
    options: ["Kanał Panamski", "Kanał Sueski", "Droga Wodna Św. Wawrzyńca", "Cieśnina Beringa", "Cieśnina Davisa", "Kanał Kiloński"],
    answer: 0,
    explanation: "Kanał Panamski łączy Ocean Atlantycki z Oceanem Spokojnym i skraca drogę morską między wybrzeżami."
  },
  {
    id: "R03_CYKL_01",
    section: "Tornada i cyklony tropikalne",
    type: "single_choice",
    prompt: "Jakie masy powietrza spotykają się przy powstawaniu tornad w Stanach Zjednoczonych?",
    options: [
          "gorące i wilgotne znad Zatoki Meksykańskiej oraz zimne i suche znad Gór Skalistych",
          "zimne i wilgotne znad Atlantyku oraz gorące i suche znad Arktyki",
          "gorące i suche znad Zatoki Meksykańskiej oraz wilgotne znad Grenlandii",
          "wyłącznie ciepłe powietrze znad Pacyfiku",
          "wyłącznie arktyczne powietrze z północy",
          "zimne masy znad Karaibów oraz gorące znad Kanady"
        ],
    answer: 0,
    explanation: "Tornada powstają, gdy gorące i wilgotne powietrze znad Zatoki Meksykańskiej napotyka zimne i suche powietrze znad Gór Skalistych."
  },
  {
    id: "R03_CYKL_02",
    section: "Tornada i cyklony tropikalne",
    type: "true_false",
    prompt: "Prędkość wiatru w tornadzie może przekraczać 400 km/h.",
    image: "r03_tornado_lej.jpg",
    options: null,
    answer: true,
    explanation: "Duża różnica ciśnienia między centrum a skrajem tornada może wywołać wiatr o prędkości przekraczającej 400 km/h."
  },
  {
    id: "R03_CYKL_03",
    section: "Tornada i cyklony tropikalne",
    type: "fill_in",
    prompt: "Aleja Tornad ciągnie się między stanem __________ a Dakotą Południową i ma szerokość około __________ km.",
    options: null,
    answer: ["Teksas", "650"],
    altAnswers: [
          ["Teksas", "Teksasem"],
          ["650", "około 650"]
        ],
    explanation: "Pas największej częstości tornad w USA ciągnie się między Teksasem a Dakotą Południową i ma około 650 km szerokości."
  },
  {
    id: "R03_CYKL_04",
    section: "Tornada i cyklony tropikalne",
    type: "match",
    prompt: "Połącz kategorię ulepszonej skali Fujity z prędkością wiatru.",
    options: null,
    left: ["EF0", "EF2", "EF4", "EF5"],
    right: ["105-137 km/h", "179-218 km/h", "267-322 km/h", "powyżej 322 km/h"],
    answer: {
          "EF0": "105-137 km/h",
          "EF2": "179-218 km/h",
          "EF4": "267-322 km/h",
          "EF5": "powyżej 322 km/h"
        },
    explanation: "Ulepszona skala Fujity klasyfikuje tornada od EF0 do EF5 według prędkości wiatru i rozmiaru zniszczeń."
  },
  {
    id: "R03_CYKL_05",
    section: "Tornada i cyklony tropikalne",
    type: "single_choice",
    prompt: "Jak nazywa się centralna część cyklonu tropikalnego, w której wiatr jest słaby, opady zwykle nie występują, a niebo bywa prawie bezchmurne?",
    image: "r03_cyklon_satelita.jpg",
    options: ["oko cyklonu", "front chłodny", "rdzeń tornada", "pasat", "strefa konwergencji", "wir polarny"],
    answer: 0,
    explanation: "Centralną częścią cyklonu tropikalnego jest oko cyklonu, zwykle mające 20-30 km średnicy."
  },
  {
    id: "R03_CYKL_06",
    section: "Tornada i cyklony tropikalne",
    type: "multi_select",
    prompt: "Zaznacz warunki sprzyjające powstawaniu cyklonu tropikalnego.",
    options: [
          "silnie nagrzany ocean",
          "obszar międzyzwrotnikowy",
          "temperatura wody powyżej 25°C",
          "woda cieplejsza od powietrza",
          "bezpośrednie sąsiedztwo równika",
          "zamarznięta powierzchnia oceanu"
        ],
    answer: [0, 1, 2, 3],
    explanation: "Cyklony tropikalne tworzą się nad silnie nagrzanymi oceanami w obszarach międzyzwrotnikowych, poza bezpośrednim sąsiedztwem równika. Woda musi mieć ponad 25°C i być cieplejsza od powietrza."
  },
  {
    id: "R03_CYKL_07",
    section: "Tornada i cyklony tropikalne",
    type: "sort",
    prompt: "Przyporządkuj regionalne nazwy cyklonów tropikalnych do obszarów ich występowania.",
    options: null,
    items: ["huragan", "tajfun", "willy-willy"],
    categories: ["zachodni Atlantyk i wschodni Pacyfik", "północno-zachodni Pacyfik", "wybrzeża Australii"],
    answer: {
          "zachodni Atlantyk i wschodni Pacyfik": ["huragan"],
          "północno-zachodni Pacyfik": ["tajfun"],
          "wybrzeża Australii": ["willy-willy"]
        },
    explanation: "Na zachodnim Atlantyku i wschodnim Pacyfiku mówi się o huraganach, na północno-zachodnim Pacyfiku o tajfunach, a u wybrzeży Australii używa się nazwy willy-willy."
  },
  {
    id: "R03_CYKL_08",
    section: "Tornada i cyklony tropikalne",
    type: "scenario",
    prompt: "Nad gęsto zaludnione wybrzeże nadciąga silny cyklon tropikalny. Który zestaw zagrożeń najlepiej opisuje trzy główne przyczyny dużych zniszczeń?",
    options: [
          "silny wiatr, intensywne opady i fala powodziowa",
          "susza, mróz i lawiny",
          "trzęsienia ziemi, grad i pożary",
          "mgła, szron i gołoledź",
          "upał, susza i burze piaskowe",
          "wyłącznie wysoka temperatura wody"
        ],
    answer: 0,
    explanation: "Największe szkody powodują bardzo silny wiatr, intensywne opady prowadzące do powodzi oraz fala powodziowa uderzająca w wybrzeże."
  },
  {
    id: "R03_AMAZ_01",
    section: "Amazonia",
    type: "single_choice",
    prompt: "Jaki obszar zajmuje Amazonia?",
    options: [
          "około 7 mln km² i niemal całe dorzecze Amazonki",
          "około 700 tys. km² i wyłącznie ujście Amazonki",
          "około 17,8 mln km² i całą Amerykę Południową",
          "około 2 mln km² i Andy",
          "około 24,2 mln km² i Amerykę Północną",
          "około 800 tys. km² i wyłącznie Brazylię"
        ],
    answer: 0,
    explanation: "Amazonia ma powierzchnię około 7 mln km² i obejmuje niemal całe dorzecze Amazonki."
  },
  {
    id: "R03_AMAZ_02",
    section: "Amazonia",
    type: "fill_in",
    prompt: "Wilgotne lasy równikowe Amazonii nazywa się __________, a rozwijają się one w klimacie równikowym __________ wilgotnym.",
    options: null,
    answer: ["selwą", "wybitnie"],
    altAnswers: [
          ["selwą", "selwa", "selwą"],
          ["wybitnie", "wybitnie wilgotnym"]
        ],
    explanation: "Lasy równikowe Amazonii są nazywane selwą. Ich rozwój wiąże się z klimatem równikowym wybitnie wilgotnym."
  },
  {
    id: "R03_AMAZ_03",
    section: "Amazonia",
    type: "multi_select",
    prompt: "Zaznacz cechy klimatu Amazonii.",
    options: [
          "średnia roczna temperatura około 25°C",
          "obfite i regularne opady",
          "sumy opadów sięgające około 4000 mm rocznie",
          "brak wyraźnego zróżnicowania pór roku",
          "długa mroźna zima",
          "bardzo małe roczne sumy opadów"
        ],
    answer: [0, 1, 2, 3],
    explanation: "W Amazonii średnia roczna temperatura wynosi około 25°C, opady są obfite i regularne - do około 4000 mm rocznie - a pory roku nie są wyraźnie zróżnicowane."
  },
  {
    id: "R03_AMAZ_04",
    section: "Amazonia",
    type: "match",
    prompt: "Połącz piętro wilgotnego lasu równikowego z typową wysokością roślinności.",
    image: "r03_las_rownikowy_pietra.jpg",
    options: null,
    left: ["piętro wysokich pojedynczych drzew", "piętro drzew średnich", "piętro drzew niskich", "piętro krzewów i runa"],
    right: ["ponad 50 m", "20-40 m", "5-20 m", "do 5 m"],
    answer: {
          "piętro wysokich pojedynczych drzew": "ponad 50 m",
          "piętro drzew średnich": "20-40 m",
          "piętro drzew niskich": "5-20 m",
          "piętro krzewów i runa": "do 5 m"
        },
    explanation: "Wilgotny las równikowy ma wyraźną piętrowość: pojedyncze najwyższe drzewa przekraczają 50 m, niższe piętra mają kolejno 20-40 m, 5-20 m i do 5 m."
  },
  {
    id: "R03_AMAZ_05",
    section: "Amazonia",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: liany, storczyki, kapok, tundra.",
    options: null,
    answer: "tundra",
    explanation: "Liany, storczyki i kapok są związane z wilgotnym lasem równikowym Amazonii. Tundra występuje w klimacie okołobiegunowym."
  },
  {
    id: "R03_AMAZ_06",
    section: "Amazonia",
    type: "sequence",
    prompt: "Ułóż etapy gospodarczej eksploatacji Amazonii od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
          "brazylijski plan rozwoju Amazonii w latach 70. XX wieku",
          "pozyskiwanie naturalnego kauczuku na większą skalę",
          "dalsze przekształcanie lasów w pastwiska i pola uprawne",
          "odkrycie złóż surowców mineralnych w drugiej połowie XX wieku"
        ],
    answer: [
          "pozyskiwanie naturalnego kauczuku na większą skalę",
          "odkrycie złóż surowców mineralnych w drugiej połowie XX wieku",
          "brazylijski plan rozwoju Amazonii w latach 70. XX wieku",
          "dalsze przekształcanie lasów w pastwiska i pola uprawne"
        ],
    explanation: "Na przełomie XIX i XX wieku rozwinęło się pozyskiwanie kauczuku, później odkryto złoża surowców mineralnych, a w latach 70. XX wieku brazylijski plan rozwoju Amazonii przyspieszył przekształcanie lasów."
  },
  {
    id: "R03_AMAZ_07",
    section: "Amazonia",
    type: "multi_select",
    prompt: "Zaznacz działalności gospodarcze, które przyczyniają się do przekształcania i wylesiania Amazonii.",
    options: ["uprawa soi", "chów bydła", "pozyskiwanie drewna", "wydobywanie surowców mineralnych", "ochrona rezerwatowa", "certyfikowana ochrona lasów"],
    answer: [0, 1, 2, 3],
    explanation: "Do najważniejszych należą uprawa soi, chów bydła, pozyskiwanie drewna oraz wydobywanie surowców mineralnych."
  },
  {
    id: "R03_AMAZ_08",
    section: "Amazonia",
    type: "true_false",
    prompt: "W wyniku działalności człowieka pierwotna powierzchnia lasów Amazonii zmniejszyła się o około 20%.",
    options: null,
    answer: true,
    explanation: "Szacuje się, że działalność człowieka zmniejszyła pierwotną powierzchnię lasów Amazonii o około 20%."
  },
  {
    id: "R03_AMAZ_09",
    section: "Amazonia",
    type: "sort",
    prompt: "Przyporządkuj skutki zagospodarowywania Amazonii do dwóch kategorii.",
    options: null,
    items: [
          "poprawa warunków życia lokalnej społeczności",
          "rozwój gospodarczy Brazylii",
          "ograniczenie bioróżnorodności",
          "erozja gleb",
          "zaburzenie obiegu wody w atmosferze"
        ],
    categories: ["korzyści gospodarcze i społeczne", "straty ekologiczne"],
    answer: {
          "korzyści gospodarcze i społeczne": ["poprawa warunków życia lokalnej społeczności", "rozwój gospodarczy Brazylii"],
          "straty ekologiczne": ["ograniczenie bioróżnorodności", "erozja gleb", "zaburzenie obiegu wody w atmosferze"]
        },
    explanation: "Eksploatacja Amazonii może wspierać lokalną gospodarkę, ale jednocześnie powoduje poważne straty ekologiczne, takie jak erozja gleb czy spadek bioróżnorodności."
  },
  {
    id: "R03_AMAZ_10",
    section: "Amazonia",
    type: "scenario",
    prompt: "Firma chce kupować drewno z Amazonii w sposób ograniczający nielegalną wycinkę. Które rozwiązanie najlepiej ogranicza ryzyko wspierania nielegalnej wycinki i sprzyja ochronie Amazonii?",
    image: "r03_wylesianie_amazonii.jpg",
    options: [
          "wybieranie drewna z odpowiednim certyfikatem legalnej i zrównoważonej wycinki",
          "kupowanie wyłącznie drewna bez informacji o pochodzeniu",
          "zwiększanie wypalania lasu pod pastwiska",
          "rezygnacja z kontroli pochodzenia drewna",
          "budowanie nowych kopalń w lasach",
          "wycinanie wyłącznie najcenniejszych gatunków drzew"
        ],
    answer: 0,
    explanation: "Specjalne certyfikaty mają gwarantować, że produkty drzewne pochodzą z legalnej wycinki prowadzonej w sposób zrównoważony."
  },
  {
    id: "R03_LUDN_01",
    section: "Ludność i urbanizacja Ameryki",
    type: "match",
    prompt: "Połącz nazwę grupy ludności mieszanej z jej pochodzeniem.",
    options: null,
    left: ["Metysi", "Mulaci", "Zambo"],
    right: ["Indianie i ludność biała", "ludność biała i czarna", "ludność czarna i Indianie"],
    answer: {
          "Metysi": "Indianie i ludność biała",
          "Mulaci": "ludność biała i czarna",
          "Zambo": "ludność czarna i Indianie"
        },
    explanation: "Metysi są potomkami Indian i ludności białej, Mulaci - ludności białej i czarnej, a Zambo - ludności czarnej i Indian."
  },
  {
    id: "R03_LUDN_02",
    section: "Ludność i urbanizacja Ameryki",
    type: "sequence",
    prompt: "Ułóż główne fale migracji do Ameryki w kolejności od najwcześniejszej.",
    options: null,
    items: [
          "współczesne migracje ze wszystkich kontynentów",
          "napływ ludności pochodzenia azjatyckiego",
          "napływ ludności europejskiej po dotarciu Kolumba",
          "przymusowe sprowadzanie ludności afrykańskiej"
        ],
    answer: [
          "napływ ludności pochodzenia azjatyckiego",
          "napływ ludności europejskiej po dotarciu Kolumba",
          "przymusowe sprowadzanie ludności afrykańskiej",
          "współczesne migracje ze wszystkich kontynentów"
        ],
    explanation: "Najpierw napłynęła ludność pochodzenia azjatyckiego, później Europejczycy po wyprawie Kolumba, następnie przymusowo sprowadzana ludność afrykańska, a współcześnie migranci ze wszystkich kontynentów."
  },
  {
    id: "R03_LUDN_03",
    section: "Ludność i urbanizacja Ameryki",
    type: "true_false",
    prompt: "Indianie, Aleuci i Inuici są zaliczani do rdzennej ludności Ameryki.",
    options: null,
    answer: true,
    explanation: "Te trzy grupy są traktowane jako rdzenna ludność Ameryki."
  },
  {
    id: "R03_LUDN_04",
    section: "Ludność i urbanizacja Ameryki",
    type: "single_choice",
    prompt: "Jak nazywano niewielkie obszary, na których w Ameryce Północnej zamykano rdzenną ludność wypieraną z tradycyjnych terenów?",
    options: ["rezerwaty", "megalopolis", "fawela", "plantacje", "technopolie", "aglomeracje"],
    answer: 0,
    explanation: "Takie obszary określano mianem rezerwatów."
  },
  {
    id: "R03_LUDN_05",
    section: "Ludność i urbanizacja Ameryki",
    type: "multi_select",
    prompt: "Zaznacz przyczyny zanikania kultur pierwotnych Indian.",
    options: [
          "wyniszczanie rdzennej ludności podczas kolonizacji",
          "wypieranie Indian z tradycyjnych terenów",
          "upowszechnianie elementów kultury europejskiej",
          "zastępowanie tradycyjnych przedmiotów wyrobami przemysłowymi",
          "pojawienie się nowych umiejętności takich jak czytanie i pisanie",
          "całkowity brak kontaktu z innymi kulturami"
        ],
    answer: [0, 1, 2, 3, 4],
    explanation: "Do przyczyn należały wyniszczanie ludności podczas kolonizacji, wypieranie z terenów i zamykanie w rezerwatach, upowszechnianie kultury europejskiej, zastępowanie tradycyjnych przedmiotów wyrobami przemysłowymi oraz pojawienie się nowych umiejętności, takich jak czytanie i pisanie."
  },
  {
    id: "R03_LUDN_06",
    section: "Ludność i urbanizacja Ameryki",
    type: "riddle",
    prompt: "Jak nazywa się procentowy udział ludności miejskiej w ogólnej liczbie ludności?",
    options: null,
    answer: "wskaźnik urbanizacji",
    altAnswers: ["wskaźnik urbanizacji", "urbanizacja"],
    explanation: "Ten udział nazywa się wskaźnikiem urbanizacji."
  },
  {
    id: "R03_LUDN_07",
    section: "Ludność i urbanizacja Ameryki",
    type: "multi_select",
    prompt: "Zaznacz główne czynniki wpływające na rozmieszczenie ludności w Ameryce.",
    options: [
          "warunki środowiska przyrodniczego",
          "poziom rozwoju gospodarczego",
          "historia zasiedlania",
          "jednakowa odległość od równika",
          "wyłącznie liczba rzek",
          "wyłącznie wysokość nad poziomem morza"
        ],
    answer: [0, 1, 2],
    explanation: "Rozmieszczenie ludności zależy przede wszystkim od warunków środowiska przyrodniczego, poziomu rozwoju gospodarczego oraz historii zasiedlania."
  },
  {
    id: "R03_LUDN_08",
    section: "Ludność i urbanizacja Ameryki",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: Meksyk, Nowy Jork, Sao Paulo, Ottawa.",
    options: null,
    answer: "Ottawa",
    explanation: "Meksyk, Nowy Jork i Sao Paulo należą do ponad dziesięciomilionowych aglomeracji Ameryki. Ottawa nie jest na tej liście."
  },
  {
    id: "R03_LUDN_09",
    section: "Ludność i urbanizacja Ameryki",
    type: "match",
    prompt: "Połącz megalopolis z miastami, które je tworzą.",
    image: "r03_megalopolis_boswash.jpg",
    options: null,
    left: ["BosWash", "ChiPitts", "megalopolis brazylijskie"],
    right: ["Boston i Waszyngton", "Chicago, Detroit i Pittsburgh", "Sao Paulo i Rio de Janeiro"],
    answer: {
          "BosWash": "Boston i Waszyngton",
          "ChiPitts": "Chicago, Detroit i Pittsburgh",
          "megalopolis brazylijskie": "Sao Paulo i Rio de Janeiro"
        },
    explanation: "BosWash rozciąga się od Bostonu do Waszyngtonu, ChiPitts obejmuje między innymi Chicago, Detroit i Pittsburgh, a megalopolis brazylijskie tworzą między innymi Sao Paulo i Rio de Janeiro."
  },
  {
    id: "R03_LUDN_10",
    section: "Ludność i urbanizacja Ameryki",
    type: "scenario",
    prompt: "Rodzina przenosi się ze wsi do wielkiego miasta w Brazylii, ale nie znajduje stałej pracy i zamieszkuje w prowizorycznej dzielnicy nędzy. Jak nazywa się taka dzielnica w Brazylii?",
    image: "r03_fawele_sao_paulo.jpg",
    options: ["fawela", "barriada", "rezerwat", "technopolia", "preria", "megalopolis"],
    answer: 0,
    explanation: "W Brazylii dzielnice nędzy nazywa się fawelami."
  },
  {
    id: "R03_LUDN_11",
    section: "Ludność i urbanizacja Ameryki",
    type: "multi_select",
    prompt: "Zaznacz problemy typowe dla slamsów.",
    options: ["bezrobocie i bieda", "choroby", "wysoka przestępczość", "narkomania", "utrudniony dostęp do podstawowych usług", "powszechny wysoki standard mieszkań"],
    answer: [0, 1, 2, 3, 4],
    explanation: "W slamsach występują między innymi bezrobocie i bieda, choroby, przestępczość, narkomania oraz utrudniony dostęp do wody, elektryczności, kanalizacji, edukacji i opieki zdrowotnej."
  },
  {
    id: "R03_LUDN_12",
    section: "Ludność i urbanizacja Ameryki",
    type: "true_false",
    prompt: "Zarówno w Ameryce Północnej, jak i w Ameryce Południowej w miastach mieszka ponad 80% ludności.",
    options: null,
    answer: true,
    explanation: "Oba kontynenty są silnie zurbanizowane; w każdym z nich ludność miejska stanowi ponad 80% mieszkańców."
  },
  {
    id: "R03_KAN_01",
    section: "Kanada - środowisko i rolnictwo",
    type: "single_choice",
    prompt: "W której części Kanady występuje klimat umiarkowany ciepły, umożliwiający rozwój rolnictwa na większą skalę?",
    options: [
          "na południu Kanady",
          "na północy Kanady",
          "wyłącznie na wyspach arktycznych",
          "w centrum Grenlandii",
          "wyłącznie w Górach Skalistych",
          "na całym terytorium kraju jednakowo"
        ],
    answer: 0,
    explanation: "Klimat umiarkowany ciepły występuje na południu Kanady i właśnie tam możliwe jest prowadzenie gospodarki rolnej."
  },
  {
    id: "R03_KAN_02",
    section: "Kanada - środowisko i rolnictwo",
    type: "multi_select",
    prompt: "Zaznacz trzy najważniejsze czynniki wpływające na duże zróżnicowanie klimatu Kanady.",
    options: [
          "ukształtowanie powierzchni",
          "prądy morskie",
          "cyrkulacja powietrza",
          "wyłącznie szerokość geograficzna",
          "brak gór na zachodzie",
          "jednakowa odległość od oceanów"
        ],
    answer: [0, 1, 2],
    explanation: "Największy wpływ mają ukształtowanie powierzchni, prądy morskie oraz cyrkulacja powietrza nad terytorium kraju."
  },
  {
    id: "R03_KAN_03",
    section: "Kanada - środowisko i rolnictwo",
    type: "match",
    prompt: "Połącz obszar Kanady z czynnikiem klimatycznym, który silnie na niego oddziałuje.",
    options: null,
    left: ["zachodnie wybrzeże Kanady", "wschodnie wybrzeże Kanady", "centrum Kanady"],
    right: ["ciepłe prądy: Północnopacyficzny i Alaski", "zimny Prąd Labradorski", "swobodny przepływ mas powietrza z północy na południe"],
    answer: {
          "zachodnie wybrzeże Kanady": "ciepłe prądy: Północnopacyficzny i Alaski",
          "wschodnie wybrzeże Kanady": "zimny Prąd Labradorski",
          "centrum Kanady": "swobodny przepływ mas powietrza z północy na południe"
        },
    explanation: "Zachodnie wybrzeże ogrzewają ciepłe Prąd Północnopacyficzny i Prąd Alaski, wschodnie wybrzeże ochładza Prąd Labradorski, a nizinne centrum umożliwia swobodny przepływ mas powietrza."
  },
  {
    id: "R03_KAN_04",
    section: "Kanada - środowisko i rolnictwo",
    type: "fill_in",
    prompt: "Zimą nad Kanadą tworzy się z reguły rozległy __________, a latem rozległy __________.",
    options: null,
    answer: ["wyż", "niż"],
    altAnswers: [
          ["wyż", "wyż baryczny"],
          ["niż", "niż baryczny"]
        ],
    explanation: "Zimą nad Kanadą zwykle utrzymuje się wyż, sprzyjający zaleganiu mroźnego powietrza arktycznego. Latem powstaje rozległy niż."
  },
  {
    id: "R03_KAN_05",
    section: "Kanada - środowisko i rolnictwo",
    type: "true_false",
    prompt: "W Kanadzie strefy klimatyczne układają się nieregularnie, ponieważ duże znaczenie mają rzeźba terenu i cyrkulacja atmosferyczna.",
    options: null,
    answer: true,
    explanation: "Wpływ rzeźby terenu i cyrkulacji atmosferycznej powoduje, że strefy klimatyczne Kanady nie mają prostego równoleżnikowego przebiegu."
  },
  {
    id: "R03_KAN_06",
    section: "Kanada - środowisko i rolnictwo",
    type: "single_choice",
    prompt: "Gdzie znajdują się główne obszary użytkowane rolniczo w Kanadzie?",
    options: [
          "w południowej i południowo-wschodniej części kraju",
          "na wyspach arktycznych",
          "w północnej tundrze",
          "wyłącznie w Górach Skalistych",
          "w centrum Zatoki Hudsona",
          "na Grenlandii"
        ],
    answer: 0,
    explanation: "Użytki rolne leżą głównie w południowej i południowo-wschodniej części Kanady, gdzie występują żyzne gleby i klimat umiarkowany ciepły."
  },
  {
    id: "R03_KAN_07",
    section: "Kanada - środowisko i rolnictwo",
    type: "sort",
    prompt: "Przyporządkuj przykłady do uprawy roślin lub chowu zwierząt w Kanadzie.",
    options: null,
    items: ["pszenica", "jęczmień", "owies", "ziemniaki", "buraki cukrowe", "bydło", "owce", "trzoda chlewna"],
    categories: ["uprawa roślin", "chów zwierząt"],
    answer: {
          "uprawa roślin": ["pszenica", "jęczmień", "owies", "ziemniaki", "buraki cukrowe"],
          "chów zwierząt": ["bydło", "owce", "trzoda chlewna"]
        },
    explanation: "W Kanadzie uprawia się między innymi pszenicę, jęczmień, owies, ziemniaki i buraki cukrowe, a na prerii prowadzi się chów bydła, owiec i trzody chlewnej."
  },
  {
    id: "R03_KAN_08",
    section: "Kanada - środowisko i rolnictwo",
    type: "riddle",
    prompt: "Jak nazywają się charakterystyczne dla Kanady wielkoobszarowe gospodarstwa rolne, których średnia powierzchnia wynosi niemal 200 ha?",
    options: null,
    answer: "farmy",
    altAnswers: ["farmy", "farma"],
    explanation: "Takie gospodarstwa nazywa się farmami. Zwykle są silnie zmechanizowane i specjalizują się w jednym produkcie."
  },
  {
    id: "R03_KAN_09",
    section: "Kanada - środowisko i rolnictwo",
    type: "scenario",
    prompt: "Podróżnik dociera zimą na zachodnie wybrzeże Kanady i zauważa łagodniejszą pogodę oraz wysokie sumy opadów. Co najlepiej wyjaśnia te warunki?",
    image: "r03_kanada_zachodnie_wybrzeze.jpg",
    options: [
          "wpływ ciepłych prądów Północnopacyficznego i Alaski",
          "wpływ zimnego Prądu Labradorskiego",
          "brak wpływu oceanu",
          "stały napływ powietrza z Grenlandii",
          "położenie w centrum kontynentu",
          "całoroczny wyż arktyczny"
        ],
    answer: 0,
    explanation: "Ciepłe Prąd Północnopacyficzny i Prąd Alaski ogrzewają zachodnie wybrzeże i sprzyjają obfitym opadom."
  },
  {
    id: "R03_USA_01",
    section: "Stany Zjednoczone - gospodarka",
    type: "single_choice",
    prompt: "Jaki udział w produkcie światowym brutto miały Stany Zjednoczone w 2019 roku?",
    options: ["około 25%", "około 5%", "około 10%", "około 50%", "około 75%", "poniżej 1%"],
    answer: 0,
    explanation: "W 2019 roku PKB Stanów Zjednoczonych stanowiło około 25% produktu światowego brutto."
  },
  {
    id: "R03_USA_02",
    section: "Stany Zjednoczone - gospodarka",
    type: "true_false",
    prompt: "Stany Zjednoczone są największym światowym importerem towarów i drugim co do wielkości eksporterem.",
    options: null,
    answer: true,
    explanation: "Stany Zjednoczone zajmują bardzo silną pozycję w handlu światowym: są największym importerem i drugim eksporterem towarów."
  },
  {
    id: "R03_USA_03",
    section: "Stany Zjednoczone - gospodarka",
    type: "multi_select",
    prompt: "Zaznacz czynniki, które sprzyjały rozwojowi Doliny Krzemowej.",
    image: "r03_dolina_krzemowa.jpg",
    options: [
          "bliskość uniwersytetów i centrów badawczych",
          "wysoko wykwalifikowana kadra",
          "bogaci inwestorzy gotowi podejmować ryzyko",
          "konieczność dostępu do wielkich złóż węgla",
          "położenie na obszarze tundry",
          "brak zaplecza naukowego"
        ],
    answer: [0, 1, 2],
    explanation: "Dolina Krzemowa rozwinęła się dzięki bliskości uniwersytetów i centrów badawczych, dostępowi do wysoko wykwalifikowanej kadry oraz obecności bogatych inwestorów gotowych podejmować ryzyko."
  },
  {
    id: "R03_USA_04",
    section: "Stany Zjednoczone - gospodarka",
    type: "match",
    prompt: "Połącz część Stanów Zjednoczonych z typową produkcją rolną.",
    options: null,
    left: ["północ kraju", "środkowa część kraju", "południe kraju"],
    right: ["kukurydza i soja", "pszenica", "bawełna i trzcina cukrowa"],
    answer: {
          "północ kraju": "kukurydza i soja",
          "środkowa część kraju": "pszenica",
          "południe kraju": "bawełna i trzcina cukrowa"
        },
    explanation: "Na północy uprawia się kukurydzę i soję, w środkowej części pszenicę, a na południu rozwinęły się plantacje bawełny i trzciny cukrowej."
  },
  {
    id: "R03_USA_05",
    section: "Stany Zjednoczone - gospodarka",
    type: "riddle",
    prompt: "Jak nazywa się pierwsza na świecie technopolia, która powstała w Stanach Zjednoczonych?",
    options: null,
    answer: "Dolina Krzemowa",
    altAnswers: ["Dolina Krzemowa", "dolina krzemowa"],
    explanation: "Pierwszą na świecie technopolią była Dolina Krzemowa."
  },
  {
    id: "R03_USA_06",
    section: "Stany Zjednoczone - gospodarka",
    type: "multi_select",
    prompt: "Zaznacz usługi odgrywające najważniejszą rolę w gospodarce opartej na wiedzy w Stanach Zjednoczonych.",
    options: ["telekomunikacyjne", "edukacyjne", "naukowo-badawcze", "finansowe", "wyłącznie rolnicze", "wyłącznie leśne"],
    answer: [0, 1, 2, 3],
    explanation: "Szczególnie ważne są usługi telekomunikacyjne, edukacyjne, naukowo-badawcze i finansowe."
  },
  {
    id: "R03_USA_07",
    section: "Stany Zjednoczone - gospodarka",
    type: "fill_in",
    prompt: "Średnia wielkość farmy w Stanach Zjednoczonych wynosi około __________ ha.",
    options: null,
    answer: ["180"],
    altAnswers: [
          ["180", "180 ha", "około 180"]
        ],
    explanation: "Średnia wielkość amerykańskiej farmy wynosi około 180 ha."
  },
  {
    id: "R03_USA_08",
    section: "Stany Zjednoczone - gospodarka",
    type: "scenario",
    prompt: "Mieszkaniec Stanów Zjednoczonych chce szybko przebyć bardzo dużą odległość między odległymi częściami kraju. Który rodzaj transportu odgrywa szczególnie ważną rolę w takich przewozach pasażerskich?",
    options: ["transport lotniczy", "wyłącznie transport konny", "transport tratwami", "wyłącznie żegluga oceaniczna", "transport reniferami", "wyłącznie metro"],
    answer: 0,
    explanation: "Ze względu na wielkość kraju i liczbę ludności ważną rolę w przewozach pasażerskich odgrywa transport lotniczy."
  },
  {
    id: "R03_USA_09",
    section: "Stany Zjednoczone - gospodarka",
    type: "single_choice",
    prompt: "Jaka część krajowej produkcji żywności jest marnowana w Stanach Zjednoczonych?",
    image: "r03_marnowanie_zywnosci.jpg",
    options: ["około 1/3", "około 1/100", "około 1/20", "około 2/3", "niemal całość", "mniej niż 1%"],
    answer: 0,
    explanation: "Każdego roku marnuje się około 60 mln ton żywności, czyli około 1/3 krajowej produkcji."
  },
  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Kanał Panamski budowano w latach __________-__________.",
    options: null,
    answer: ["1881", "1914"],
    altAnswers: [
          ["1881", "1881 r."],
          ["1914", "1914 r."]
        ],
    explanation: "Budowę Kanału Panamskiego prowadzono w latach 1881-1914."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz obiekt geograficzny z jego wysokością.",
    image: "r03_rzezba_ameryki.jpg",
    options: null,
    left: ["Denali", "Aconcagua", "Mitchell", "Titicaca"],
    right: ["6190 m n.p.m.", "6962 m n.p.m.", "2037 m n.p.m.", "3812 m n.p.m."],
    answer: {
          "Denali": "6190 m n.p.m.",
          "Aconcagua": "6962 m n.p.m.",
          "Mitchell": "2037 m n.p.m.",
          "Titicaca": "3812 m n.p.m."
        },
    explanation: "Denali ma 6190 m n.p.m., Aconcagua 6962 m n.p.m., Mitchell 2037 m n.p.m., a jezioro Titicaca leży na wysokości 3812 m n.p.m."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Która para poprawnie podaje udział powierzchni kontynentu zajmowany przez dorzecza dwóch największych systemów rzecznych?",
    options: [
          "Missisipi-Missouri ponad 13%; Amazonka ponad 40%",
          "Missisipi-Missouri ponad 40%; Amazonka ponad 13%",
          "Missisipi-Missouri około 3%; Amazonka około 10%",
          "Missisipi-Missouri około 50%; Amazonka około 5%",
          "oba dorzecza po około 20%",
          "oba dorzecza po ponad 60%"
        ],
    answer: 0,
    explanation: "Dorzecze Missisipi-Missouri zajmuje ponad 13% powierzchni Ameryki Północnej, a dorzecze Amazonki ponad 40% powierzchni Ameryki Południowej."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wybrane cyklony tropikalne od najwcześniejszego do najpóźniejszego.",
    image: "r03_cyklon_satelita.jpg",
    options: null,
    items: ["Matthew", "Katrina", "Harvey", "Jeanne", "Ike"],
    answer: ["Jeanne", "Katrina", "Ike", "Matthew", "Harvey"],
    explanation: "Jeanne wystąpiła w 2004 roku, Katrina w 2005, Ike w 2008, Matthew w 2016, a Harvey w 2017."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz kategorię cyklonu w skali Saffira-Simpsona z zakresem prędkości wiatru.",
    options: null,
    left: ["kategoria 1", "kategoria 3", "kategoria 4", "kategoria 5"],
    right: ["119-153 km/h", "178-209 km/h", "210-249 km/h", "powyżej 250 km/h"],
    answer: {
          "kategoria 1": "119-153 km/h",
          "kategoria 3": "178-209 km/h",
          "kategoria 4": "210-249 km/h",
          "kategoria 5": "powyżej 250 km/h"
        },
    explanation: "Skala Saffira-Simpsona ma pięć kategorii; kategoria 1 obejmuje 119-153 km/h, a kategoria 5 prędkości powyżej 250 km/h."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Pierwotna powierzchnia lasów Amazonii zmniejszyła się o około __________%, a przy utrzymaniu tempa niszczenia rzędu __________-__________ tys. km² rocznie do 2050 roku może zniknąć około 40% lasów równikowych regionu.",
    image: "r03_wylesianie_amazonii.jpg",
    options: null,
    answer: ["20", "20", "30"],
    altAnswers: [
          ["20", "20%"],
          ["20", "20 tys.", "20 tysięcy"],
          ["30", "30 tys.", "30 tysięcy"]
        ],
    explanation: "Dotychczasowy spadek powierzchni wynosi około 20%, a tempo niszczenia to 20-30 tys. km² rocznie."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "riddle",
    prompt: "Około ile języków indiańskich wymarło w samej Ameryce Północnej?",
    options: null,
    answer: "około 120",
    altAnswers: ["około 120", "120", "około 120 języków"],
    explanation: "Szacuje się, że w Ameryce Północnej wymarło około 120 języków indiańskich."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który opis najlepiej pasuje do megalopolis BosWash?",
    image: "r03_megalopolis_boswash.jpg",
    options: [
          "od Bostonu do Waszyngtonu, prawie 1000 km, około 50 mln mieszkańców",
          "od Los Angeles do San Francisco, około 50 km, około 5 mln mieszkańców",
          "od Chicago do Detroit, ponad 3000 km, około 2 mln mieszkańców",
          "od Sao Paulo do Rio de Janeiro, około 1000 km, około 50 mln mieszkańców",
          "od Meksyku do Buenos Aires, około 500 km, około 20 mln mieszkańców",
          "od Toronto do Ottawy, prawie 1000 km, około 50 mln mieszkańców"
        ],
    answer: 0,
    explanation: "BosWash leży na wschodnim wybrzeżu Stanów Zjednoczonych, ciągnie się od Bostonu do Waszyngtonu na długości prawie 1000 km i liczy około 50 mln mieszkańców."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne informacje o północnej granicy lasów w Kanadzie.",
    image: "r03_kanada_zachodnie_wybrzeze.jpg",
    options: [
          "we wschodniej Kanadzie granica lasów zazwyczaj nie przekracza 53°N",
          "w zachodniej Kanadzie tajga sięga za koło podbiegunowe północne",
          "na wschodzie tajga sięga znacznie dalej na północ niż na zachodzie",
          "przebieg granicy lasów jest identyczny na całej długości kraju",
          "układ stref roślinnych wiąże się ze specyficznym układem stref klimatycznych"
        ],
    answer: [0, 1, 4],
    explanation: "We wschodniej Kanadzie granica lasów zazwyczaj nie przekracza 53°N, natomiast na zachodzie tajga sięga za koło podbiegunowe północne."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: pszenica, jęczmień, owies, bawełna.",
    options: null,
    answer: "bawełna",
    explanation: "Pszenica, jęczmień i owies są typowymi uprawami Kanady. Bawełna jest związana z rolnictwem plantacyjnym południa Stanów Zjednoczonych."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Stany Zjednoczone składają się z __________ stanów. W zwartym terytorium między Kanadą a Meksykiem leży __________ z nich; Alaska jest stanem numer 49, a Hawaje numer __________.",
    options: null,
    answer: ["50", "48", "50"],
    altAnswers: [
          ["50", "50 stanów"],
          ["48", "48 stanów"],
          ["50", "50."]
        ],
    explanation: "USA mają 50 stanów, z których 48 leży w zwartym terytorium. Alaska jest 49., a Hawaje 50. stanem."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj czynniki do tego, czy przede wszystkim zwiększają możliwości produkcji żywności, czy sprzyjają jej marnowaniu w Stanach Zjednoczonych.",
    image: "r03_marnowanie_zywnosci.jpg",
    options: null,
    items: [
          "mechanizacja i chemizacja rolnictwa",
          "wydajniejsze odmiany roślin",
          "komputeryzacja i automatyzacja przetwórstwa",
          "względnie niskie ceny żywności",
          "duże opakowania promocyjne",
          "wyrzucanie produktów po upływie terminu przydatności"
        ],
    categories: ["zwiększa możliwości produkcji", "sprzyja marnowaniu żywności"],
    answer: {
          "zwiększa możliwości produkcji": ["mechanizacja i chemizacja rolnictwa", "wydajniejsze odmiany roślin", "komputeryzacja i automatyzacja przetwórstwa"],
          "sprzyja marnowaniu żywności": ["względnie niskie ceny żywności", "duże opakowania promocyjne", "wyrzucanie produktów po upływie terminu przydatności"]
        },
    explanation: "Wysoką produkcję wspierają mechanizacja i chemizacja, wydajniejsze odmiany roślin oraz automatyzacja przetwórstwa. Marnowaniu sprzyjają między innymi niskie ceny, duże opakowania promocyjne i wyrzucanie żywności po terminie."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Ameryka Północna i Ameryka Południowa",
  icon: "🌎",
  sectionOrder: [
    "Środowisko przyrodnicze Ameryki",
    "Tornada i cyklony tropikalne",
    "Amazonia",
    "Ludność i urbanizacja Ameryki",
    "Kanada - środowisko i rolnictwo",
    "Stany Zjednoczone - gospodarka"
  ],
  sectionIcons: {
    "Środowisko przyrodnicze Ameryki": "🌎",
    "Tornada i cyklony tropikalne": "🌪️",
    "Amazonia": "🌳",
    "Ludność i urbanizacja Ameryki": "🏙️",
    "Kanada - środowisko i rolnictwo": "🍁",
    "Stany Zjednoczone - gospodarka": "🏭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
