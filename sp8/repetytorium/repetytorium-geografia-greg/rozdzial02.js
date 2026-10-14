// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KOS  = Ziemia we Wszechświecie
//   POW  = Kształt i powierzchnia Ziemi
//   GLO  = Wnętrze Ziemi i odkrycia
//   KLI  = Klimat i krajobrazy
//   RUC  = Ruchy Ziemi i czas
//   WSP  = Współrzędne geograficzne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_KOS_01",
    "section": "Ziemia we Wszechświecie",
    "type": "single_choice",
    "prompt": "Który uczony przedstawił teorię heliocentryczną?",
    "options": [
      "Klaudiusz Ptolemeusz",
      "Mikołaj Kopernik",
      "Arystoteles",
      "Ferdynand Magellan",
      "Marco Polo",
      "James Cook"
    ],
    "image": "r02_uklad_sloneczny.jpg",
    "answer": 1,
    "explanation": "W XVI wieku Mikołaj Kopernik przedstawił teorię, według której planety, w tym Ziemia, krążą wokół Słońca."
  },
  {
    "id": "R02_KOS_02",
    "section": "Ziemia we Wszechświecie",
    "type": "true_false",
    "prompt": "Teoria geocentryczna zakładała, że Ziemia znajduje się w centrum układu ciał niebieskich.",
    "options": null,
    "answer": true,
    "explanation": "W teorii geocentrycznej centralne miejsce zajmowała Ziemia. Jej sformułowanie przypisuje się Klaudiuszowi Ptolemeuszowi."
  },
  {
    "id": "R02_KOS_03",
    "section": "Ziemia we Wszechświecie",
    "type": "multi_select",
    "prompt": "Wybierz planety ziemskie (wewnętrzne).",
    "options": [
      "Merkury",
      "Wenus",
      "Jowisz",
      "Ziemia",
      "Saturn",
      "Mars"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Do planet ziemskich należą Merkury, Wenus, Ziemia i Mars. Jowisz, Saturn, Uran i Neptun należą do planet olbrzymów."
  },
  {
    "id": "R02_KOS_04",
    "section": "Ziemia we Wszechświecie",
    "type": "fill_in",
    "prompt": "Naturalnym satelitą Ziemi jest __________.",
    "options": null,
    "answer": [
      "Księżyc"
    ],
    "altAnswers": [
      [
        "Księżyc"
      ]
    ],
    "explanation": "Księżyc to naturalny satelita Ziemi; obiega naszą planetę i zwraca ku niej stale tę samą stronę."
  },
  {
    "id": "R02_KOS_05",
    "section": "Ziemia we Wszechświecie",
    "type": "match",
    "prompt": "Połącz pojęcie astronomiczne z definicją.",
    "options": null,
    "left": [
      "galaktyka",
      "jednostka astronomiczna",
      "rok świetlny",
      "gwiazda"
    ],
    "right": [
      "droga przebyta przez światło w próżni w ciągu roku",
      "ciało świecące dzięki reakcjom zachodzącym w jego wnętrzu",
      "wielkie skupisko gwiazd i innych ciał niebieskich",
      "około 150 milionów kilometrów"
    ],
    "answer": {
      "galaktyka": "wielkie skupisko gwiazd i innych ciał niebieskich",
      "jednostka astronomiczna": "około 150 milionów kilometrów",
      "rok świetlny": "droga przebyta przez światło w próżni w ciągu roku",
      "gwiazda": "ciało świecące dzięki reakcjom zachodzącym w jego wnętrzu"
    },
    "explanation": "Galaktyki skupiają gwiazdy i inne ciała; 1 jednostka astronomiczna to około 150 mln km, a rok świetlny jest miarą odległości."
  },
  {
    "id": "R02_KOS_06",
    "section": "Ziemia we Wszechświecie",
    "type": "single_choice",
    "prompt": "Która gwiazda znajduje się najbliżej Ziemi?",
    "options": [
      "Syriusz",
      "Gwiazda Polarna",
      "Słońce",
      "Wega",
      "Altair",
      "Betelgeza"
    ],
    "answer": 2,
    "explanation": "Najbliższą Ziemi gwiazdą jest Słońce. Inne gwiazdy są znacznie dalej i dlatego wydają się małe."
  },
  {
    "id": "R02_KOS_07",
    "section": "Ziemia we Wszechświecie",
    "type": "odd_one_out",
    "prompt": "Wskaż planetę innego rodzaju niż pozostałe: Merkury, Wenus, Mars, Jowisz.",
    "options": null,
    "answer": "Jowisz",
    "explanation": "Merkury, Wenus i Mars to planety ziemskie. Jowisz należy do planet gazowych, zwanych także jowiszowymi."
  },
  {
    "id": "R02_KOS_08",
    "section": "Ziemia we Wszechświecie",
    "type": "sequence",
    "prompt": "Ułóż cztery planety wewnętrzne od najbliższej do najdalszej od Słońca.",
    "options": null,
    "image": "r02_uklad_sloneczny.jpg",
    "items": [
      "Ziemia",
      "Mars",
      "Merkury",
      "Wenus"
    ],
    "answer": [
      "Merkury",
      "Wenus",
      "Ziemia",
      "Mars"
    ],
    "explanation": "Cztery planety najbliższe Słońcu występują kolejno jako Merkury, Wenus, Ziemia i Mars."
  },
  {
    "id": "R02_KOS_09",
    "section": "Ziemia we Wszechświecie",
    "type": "riddle",
    "prompt": "Jak nazywa się galaktyka, w której znajduje się Układ Słoneczny?",
    "options": null,
    "answer": "Droga Mleczna",
    "altAnswers": [
      "Droga Mleczna"
    ],
    "explanation": "Układ Słoneczny znajduje się w galaktyce nazywanej Drogą Mleczną."
  },
  {
    "id": "R02_KOS_10",
    "section": "Ziemia we Wszechświecie",
    "type": "scenario",
    "prompt": "Obserwator widzi nieduże ciało zbudowane ze skał i lodu. Gdy zbliża się ono do Słońca, pojawia się charakterystyczny warkocz. Co obserwuje?",
    "options": [
      "planetę",
      "meteoryt",
      "galaktykę",
      "kometę",
      "księżyc",
      "gwiazdę"
    ],
    "image": "r02_kometa_ogon.jpg",
    "answer": 3,
    "explanation": "Charakterystyczny ogon pojawiający się podczas zbliżania do Słońca jest cechą komety."
  },
  {
    "id": "R02_POW_01",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "single_choice",
    "prompt": "Jak nazywa się model kształtu Ziemi uwzględniający nieregularność jej powierzchni?",
    "options": [
      "sfera",
      "geoida",
      "stożek",
      "cylinder",
      "hiperboloida",
      "ostrosłup"
    ],
    "image": "r02_ksztalt_ziemi.jpg",
    "answer": 1,
    "explanation": "Ziemia nie jest idealną kulą. Jej nieregularny kształt najlepiej opisuje geoida."
  },
  {
    "id": "R02_POW_02",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "fill_in",
    "prompt": "Średni promień Ziemi ma około __________ km.",
    "options": null,
    "answer": [
      "6371"
    ],
    "altAnswers": [
      [
        "6371",
        "6 371"
      ]
    ],
    "explanation": "Średni promień Ziemi wynosi około 6371 km."
  },
  {
    "id": "R02_POW_03",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "true_false",
    "prompt": "Promień biegunowy Ziemi jest o około 21 km krótszy od równikowego.",
    "options": null,
    "image": "r02_ksztalt_ziemi.jpg",
    "answer": true,
    "explanation": "Spłaszczenie Ziemi przy biegunach powoduje, że jej promień biegunowy jest krótszy od równikowego o około 21 km."
  },
  {
    "id": "R02_POW_04",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "single_choice",
    "prompt": "Który kontynent ma największą powierzchnię?",
    "options": [
      "Azja",
      "Afryka",
      "Europa",
      "Ameryka Południowa",
      "Antarktyda",
      "Australia"
    ],
    "image": "r02_mapa_kontynentow.jpg",
    "answer": 0,
    "explanation": "Największym kontynentem jest Azja o powierzchni około 44,9 mln km² wraz z wyspami."
  },
  {
    "id": "R02_POW_05",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "match",
    "prompt": "Połącz oceany z ich przybliżonymi powierzchniami.",
    "options": null,
    "left": [
      "Ocean Spokojny",
      "Ocean Atlantycki",
      "Ocean Indyjski",
      "Ocean Arktyczny"
    ],
    "right": [
      "14,1 mln km²",
      "74,9 mln km²",
      "179,7 mln km²",
      "92,0 mln km²"
    ],
    "answer": {
      "Ocean Spokojny": "179,7 mln km²",
      "Ocean Atlantycki": "92,0 mln km²",
      "Ocean Indyjski": "74,9 mln km²",
      "Ocean Arktyczny": "14,1 mln km²"
    },
    "explanation": "Największy jest Ocean Spokojny (około 179,7 mln km²), a najmniejszy Ocean Arktyczny (około 14,1 mln km²)."
  },
  {
    "id": "R02_POW_06",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "multi_select",
    "prompt": "Które z wymienionych form terenu są nizinami?",
    "options": [
      "Nizina Amazonki",
      "Wyżyna Brazylijska",
      "Nizina Wschodnioeuropejska",
      "Andy",
      "Nizina La Platy"
    ],
    "image": "r02_mapa_kontynentow.jpg",
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Nizina Amazonki, Nizina Wschodnioeuropejska i Nizina La Platy to niziny. Wyżyna Brazylijska i Andy należą do innych form rzeźby."
  },
  {
    "id": "R02_POW_07",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "riddle",
    "prompt": "Jak nazywa się najgłębszy rów oceaniczny na Ziemi?",
    "options": null,
    "image": "r02_rzezba_dna_oceanu.jpg",
    "answer": "Rów Mariański",
    "altAnswers": [
      "Rów Mariański",
      "Row Marianski"
    ],
    "explanation": "Rów Mariański jest najgłębszym rowem oceanicznym; jego głębokość szacowano na około 11 022 m."
  },
  {
    "id": "R02_POW_08",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "odd_one_out",
    "prompt": "Wskaż formę niebędącą szczytem górskim: Mont Blanc, Denali, Aconcagua, Nizina Amazonki.",
    "options": null,
    "answer": "Nizina Amazonki",
    "explanation": "Mont Blanc, Denali i Aconcagua są szczytami. Nizina Amazonki jest rozległą niziną."
  },
  {
    "id": "R02_POW_09",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "sort",
    "prompt": "Przyporządkuj formy powierzchni lądów do ich grup.",
    "options": null,
    "items": [
      "Andy",
      "Nizina Polska",
      "Wyżyna Tybetańska",
      "Nizina Amazonki",
      "Himalaje",
      "Wyżyna Brazylijska"
    ],
    "categories": [
      "niziny",
      "wyżyny",
      "góry"
    ],
    "answer": {
      "niziny": [
        "Nizina Amazonki",
        "Nizina Polska"
      ],
      "wyżyny": [
        "Wyżyna Tybetańska",
        "Wyżyna Brazylijska"
      ],
      "góry": [
        "Himalaje",
        "Andy"
      ]
    },
    "explanation": "Niziny to nisko położone formy terenu; wyżyny mają przeważnie łagodniejszą rzeźbę powyżej 300 m n.p.m.; góry mają duże wysokości względne."
  },
  {
    "id": "R02_POW_10",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "scenario",
    "prompt": "Statek bada przybrzeżny fragment dna oceanu. Dno leży płytko, do około 200 m głębokości, zanim przechodzi w stok kontynentalny. Jak nazywa się ten obszar?",
    "options": [
      "rów oceaniczny",
      "szelf",
      "basen oceaniczny",
      "grzbiet oceaniczny",
      "głębia oceaniczna"
    ],
    "image": "r02_rzezba_dna_oceanu.jpg",
    "answer": 1,
    "explanation": "Szelf to najpłytsza, przybrzeżna część dna oceanicznego, sięgająca zazwyczaj do około 200 m głębokości."
  },
  {
    "id": "R02_POW_11",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "sequence",
    "prompt": "Ułóż oceany od największej do najmniejszej powierzchni.",
    "options": null,
    "items": [
      "Ocean Indyjski",
      "Ocean Arktyczny",
      "Ocean Spokojny",
      "Ocean Atlantycki"
    ],
    "answer": [
      "Ocean Spokojny",
      "Ocean Atlantycki",
      "Ocean Indyjski",
      "Ocean Arktyczny"
    ],
    "explanation": "Powierzchnie oceanów to kolejno około 179,7; 92,0; 74,9 i 14,1 mln km²."
  },
  {
    "id": "R02_POW_12",
    "section": "Kształt i powierzchnia Ziemi",
    "type": "single_choice",
    "prompt": "W jakim łańcuchu górskim znajduje się Mount Everest?",
    "options": [
      "Alpy",
      "Andy",
      "Kordyliery",
      "Karpaty",
      "Himalaje",
      "Appalachy"
    ],
    "answer": 4,
    "explanation": "Najwyższy szczyt świata, Mount Everest, leży w Himalajach, na granicy Nepalu i Tybetu."
  },
  {
    "id": "R02_GLO_01",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "match",
    "prompt": "Połącz warstwę wnętrza Ziemi z jej położeniem.",
    "options": null,
    "image": "r02_warstwowa_budowa_ziemi.jpg",
    "left": [
      "skorupa ziemska",
      "płaszcz Ziemi",
      "jądro zewnętrzne",
      "jądro wewnętrzne"
    ],
    "right": [
      "zewnętrzna część jądra Ziemi",
      "najbardziej wewnętrzna część Ziemi",
      "najbardziej zewnętrzna warstwa skalna",
      "warstwa między skorupą a jądrem"
    ],
    "answer": {
      "skorupa ziemska": "najbardziej zewnętrzna warstwa skalna",
      "płaszcz Ziemi": "warstwa między skorupą a jądrem",
      "jądro zewnętrzne": "zewnętrzna część jądra Ziemi",
      "jądro wewnętrzne": "najbardziej wewnętrzna część Ziemi"
    },
    "explanation": "W budowie wewnętrznej Ziemi wyróżnia się skorupę ziemską, płaszcz oraz jądro zewnętrzne i wewnętrzne."
  },
  {
    "id": "R02_GLO_02",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "single_choice",
    "prompt": "Co tworzy litosferę?",
    "options": [
      "tylko jądro Ziemi",
      "jądro i płaszcz Ziemi",
      "skorupa i najwyższa warstwa płaszcza zewnętrznego",
      "wyłącznie skorupa ziemska",
      "atmosfera i skorupa ziemska"
    ],
    "image": "r02_warstwowa_budowa_ziemi.jpg",
    "answer": 2,
    "explanation": "Litosfera obejmuje skorupę ziemską wraz z najwyższą warstwą płaszcza zewnętrznego."
  },
  {
    "id": "R02_GLO_03",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "true_false",
    "prompt": "Litosfera i skorupa ziemska to dokładnie ta sama warstwa Ziemi.",
    "options": null,
    "answer": false,
    "explanation": "Litosfera jest szerszym pojęciem: obejmuje skorupę i najwyższą część płaszcza Ziemi."
  },
  {
    "id": "R02_GLO_04",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "fill_in",
    "prompt": "Przeciętnie temperatura we wnętrzu Ziemi wzrasta o 1°C na każde __________ m głębokości.",
    "options": null,
    "answer": [
      "33"
    ],
    "altAnswers": [
      [
        "33"
      ]
    ],
    "explanation": "Przeciętnie temperatura wzrasta o 1°C na każde 33 m głębokości, ale wartość ta różni się między regionami."
  },
  {
    "id": "R02_GLO_05",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "scenario",
    "prompt": "Geofizyk chce zbadać wnętrze Ziemi, do którego nie może dotrzeć wierceniem. Analizuje fale powstające przy wstrząsach. Jakie fale wykorzystuje?",
    "options": [
      "fale sejsmiczne",
      "fale radiowe GPS",
      "fale świetlne",
      "fale morskie",
      "fale dźwiękowe w atmosferze"
    ],
    "answer": 0,
    "explanation": "Badania przebiegu fal sejsmicznych pozwalają poznawać wnętrze Ziemi bez bezpośredniego dotarcia do jego głębokich warstw."
  },
  {
    "id": "R02_GLO_06",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "multi_select",
    "prompt": "Wskaż nazwy płyt litosfery.",
    "options": [
      "pacyficzna",
      "Nazca",
      "alpejska",
      "karpacka",
      "indioaustralijska",
      "euroazjatycka"
    ],
    "image": "r02_plyty_litosfery.jpg",
    "answer": [
      0,
      1,
      4,
      5
    ],
    "explanation": "Mapa przedstawia między innymi płyty: pacyficzną, Nazca, indioaustralijską i euroazjatycką."
  },
  {
    "id": "R02_GLO_07",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "riddle",
    "prompt": "Jak nazywa się najmłodsza z trzech głównych orogenez, trwająca do dziś?",
    "options": null,
    "answer": "fałdowanie alpejskie",
    "altAnswers": [
      "fałdowanie alpejskie",
      "alpejskie"
    ],
    "explanation": "Wśród orogenez wyróżnia się kaledońską, hercyńską i najmłodszą alpejską."
  },
  {
    "id": "R02_GLO_08",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "match",
    "prompt": "Połącz podróżników z ich odkryciami lub wyprawami.",
    "options": null,
    "image": "r02_szlaki_podroznikow.jpg",
    "left": [
      "Marco Polo",
      "Krzysztof Kolumb",
      "Vasco da Gama",
      "Ferdynand Magellan"
    ],
    "right": [
      "morska droga z Europy do Indii wokół Afryki",
      "wyprawa dookoła Ziemi i przepłynięcie cieśniny Magellana",
      "podróż przez Azję i dotarcie do Chin",
      "poznawanie wysp Morza Karaibskiego i lądów Ameryk"
    ],
    "answer": {
      "Marco Polo": "podróż przez Azję i dotarcie do Chin",
      "Krzysztof Kolumb": "poznawanie wysp Morza Karaibskiego i lądów Ameryk",
      "Vasco da Gama": "morska droga z Europy do Indii wokół Afryki",
      "Ferdynand Magellan": "wyprawa dookoła Ziemi i przepłynięcie cieśniny Magellana"
    },
    "explanation": "Każdy z podróżników zasłynął z określonej wyprawy i kierunku odkryć geograficznych."
  },
  {
    "id": "R02_GLO_09",
    "section": "Wnętrze Ziemi i odkrycia",
    "type": "single_choice",
    "prompt": "Co może powstać podczas zderzenia i fałdowania skał na krawędziach płyt litosfery?",
    "options": [
      "strefy czasowe",
      "łańcuchy górskie",
      "prądy morskie",
      "pasaty",
      "galaktyki"
    ],
    "image": "r02_plyty_litosfery.jpg",
    "answer": 1,
    "explanation": "Zderzające się płyty litosfery fałdują skały, tworząc wielkie łańcuchy górskie. Towarzyszyć temu mogą trzęsienia ziemi i wulkanizm."
  },
  {
    "id": "R02_KLI_01",
    "section": "Klimat i krajobrazy",
    "type": "single_choice",
    "prompt": "Jak nazywa się strefa klimatyczna występująca w pobliżu biegunów?",
    "options": [
      "okołobiegunowa",
      "równikowa",
      "zwrotnikowa",
      "podzwrotnikowa",
      "umiarkowana"
    ],
    "image": "r02_strefy_klimatyczne.jpg",
    "answer": 0,
    "explanation": "Do głównych stref klimatycznych należy również strefa okołobiegunowa."
  },
  {
    "id": "R02_KLI_02",
    "section": "Klimat i krajobrazy",
    "type": "true_false",
    "prompt": "W górach wraz ze wzrostem wysokości mogą zmieniać się strefy klimatu i roślinności.",
    "options": null,
    "image": "r02_strefy_klimatyczne.jpg",
    "answer": true,
    "explanation": "W górach występuje piętrowość klimatyczna i roślinna: wraz z wysokością zmieniają się temperatura i warunki życia roślin."
  },
  {
    "id": "R02_KLI_03",
    "section": "Klimat i krajobrazy",
    "type": "multi_select",
    "prompt": "Które czynniki wpływają na rozmieszczenie roślinności?",
    "options": [
      "ilość i rozkład opadów",
      "fazy Księżyca",
      "gleby",
      "wysokość nad poziomem morza",
      "długość miesiąca kalendarzowego",
      "odległość od mórz i oceanów"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Na rozmieszczenie roślinności wpływają klimat, gleby, wysokość nad poziomem morza, odległość od mórz i oceanów oraz ukształtowanie terenu."
  },
  {
    "id": "R02_KLI_04",
    "section": "Klimat i krajobrazy",
    "type": "match",
    "prompt": "Połącz formację roślinną z charakterystycznym klimatem.",
    "options": null,
    "left": [
      "wilgotny las równikowy",
      "sawanna",
      "step",
      "tundra"
    ],
    "right": [
      "okołobiegunowy z krótkim chłodnym latem",
      "umiarkowany ciepły z niedoborem opadów",
      "równikowy wybitnie wilgotny",
      "podrównikowy z porą deszczową i suchą"
    ],
    "answer": {
      "wilgotny las równikowy": "równikowy wybitnie wilgotny",
      "sawanna": "podrównikowy z porą deszczową i suchą",
      "step": "umiarkowany ciepły z niedoborem opadów",
      "tundra": "okołobiegunowy z krótkim chłodnym latem"
    },
    "explanation": "Formacje roślinne są silnie uzależnione od warunków klimatycznych, zwłaszcza temperatury i opadów."
  },
  {
    "id": "R02_KLI_05",
    "section": "Klimat i krajobrazy",
    "type": "scenario",
    "prompt": "Podróżnik przemierza gorący i bardzo wilgotny region. Widzi wysoki wielowarstwowy las z lianami oraz licznymi gatunkami ptaków i małp. Jaka to formacja roślinna?",
    "options": [
      "tajga",
      "tundra",
      "wilgotny las równikowy",
      "step",
      "makia",
      "pustynia lodowa"
    ],
    "image": "r02_las_rownikowy.jpg",
    "answer": 2,
    "explanation": "Wilgotny las równikowy występuje w klimacie równikowym wybitnie wilgotnym, gdzie rosną liany i liczne gatunki drzew."
  },
  {
    "id": "R02_KLI_06",
    "section": "Klimat i krajobrazy",
    "type": "sort",
    "prompt": "Przyporządkuj charakterystyczne organizmy do krajobrazów.",
    "options": null,
    "image": "r02_formacje_roslinne.jpg",
    "items": [
      "renifer",
      "kaktus",
      "żyrafa",
      "baobab",
      "skorpion",
      "leming",
      "akacja",
      "mech",
      "wielbłąd"
    ],
    "categories": [
      "sawanna",
      "pustynia gorąca",
      "tundra"
    ],
    "answer": {
      "sawanna": [
        "baobab",
        "akacja",
        "żyrafa"
      ],
      "pustynia gorąca": [
        "kaktus",
        "wielbłąd",
        "skorpion"
      ],
      "tundra": [
        "mech",
        "renifer",
        "leming"
      ]
    },
    "explanation": "Baobaby i żyrafy występują na sawannach; sukulenty, wielbłądy i skorpiony są typowe dla pustyń gorących, a mchy, renifery i lemingi dla tundry."
  },
  {
    "id": "R02_KLI_07",
    "section": "Klimat i krajobrazy",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę typową dla innej formacji niż pozostałe: sosna, świerk, modrzew, kaktus.",
    "options": null,
    "answer": "kaktus",
    "explanation": "Sosna, świerk i modrzew to drzewa iglaste występujące w tajdze. Kaktusy są charakterystyczne dla roślinności pustynnej."
  },
  {
    "id": "R02_KLI_08",
    "section": "Klimat i krajobrazy",
    "type": "fill_in",
    "prompt": "Step w Ameryce Północnej nazywa się __________, a w Ameryce Południowej __________.",
    "options": null,
    "answer": [
      "prerią",
      "pampą"
    ],
    "altAnswers": [
      [
        "prerią",
        "preria",
        "prerię"
      ],
      [
        "pampą",
        "pampa",
        "pampę"
      ]
    ],
    "explanation": "Stepy występują pod regionalnymi nazwami: preria w Ameryce Północnej i pampa w Ameryce Południowej."
  },
  {
    "id": "R02_KLI_09",
    "section": "Klimat i krajobrazy",
    "type": "riddle",
    "prompt": "Jak nazywają się rośliny rosnące na pniach i konarach drzew, ale niebędące pasożytami?",
    "options": null,
    "answer": "epifity",
    "altAnswers": [
      "epifity",
      "epifit"
    ],
    "explanation": "Epifity, na przykład storczyki, rosną na innych roślinach, nie pobierając z nich pożywienia jak pasożyty."
  },
  {
    "id": "R02_KLI_10",
    "section": "Klimat i krajobrazy",
    "type": "single_choice",
    "prompt": "Który zestaw roślin jest charakterystyczny dla tundry?",
    "options": [
      "liany i palmy",
      "dęby korkowe i cyprysy",
      "mchy i porosty",
      "baobaby i akacje",
      "sosny i jodły",
      "kaktusy i agawy"
    ],
    "image": "r02_formacje_roslinne.jpg",
    "answer": 2,
    "explanation": "Tundra jest bezdrzewna lub porośnięta karłowatymi krzewami; typowe są mchy, porosty i karłowate brzozy."
  },
  {
    "id": "R02_KLI_11",
    "section": "Klimat i krajobrazy",
    "type": "match",
    "prompt": "Połącz grupy ludności z charakterystycznymi dla nich krajobrazami.",
    "options": null,
    "left": [
      "Beduini",
      "Masajowie",
      "Inuici",
      "Szerpowie"
    ],
    "right": [
      "tundra",
      "krajobraz wysokogórski Himalajów",
      "pustynie gorące",
      "sawanna"
    ],
    "answer": {
      "Beduini": "pustynie gorące",
      "Masajowie": "sawanna",
      "Inuici": "tundra",
      "Szerpowie": "krajobraz wysokogórski Himalajów"
    },
    "explanation": "Beduini zamieszkują pustynie, Masajowie sawannę, Inuici tundrę, a Szerpowie Himalaje."
  },
  {
    "id": "R02_KLI_12",
    "section": "Klimat i krajobrazy",
    "type": "single_choice",
    "prompt": "Jaki rodzaj wykresu na diagramie klimatycznym pokazuje średnie temperatury miesięczne?",
    "options": [
      "kołowy",
      "punktowy",
      "obszarowy",
      "liniowy",
      "radarowy",
      "histogram"
    ],
    "answer": 3,
    "explanation": "Temperaturę miesięczną pokazuje wykres liniowy, natomiast miesięczne sumy opadów przedstawiane są słupkami."
  },
  {
    "id": "R02_RUC_01",
    "section": "Ruchy Ziemi i czas",
    "type": "single_choice",
    "prompt": "Jak długo trwa pełny obrót Ziemi wokół własnej osi?",
    "options": [
      "12 godzin",
      "24 godziny",
      "7 dni",
      "30 dni",
      "365 dni",
      "48 godzin"
    ],
    "image": "r02_ruch_obrotowy.jpg",
    "answer": 1,
    "explanation": "Pełny obrót Ziemi o 360° trwa dobę, czyli 24 godziny."
  },
  {
    "id": "R02_RUC_02",
    "section": "Ruchy Ziemi i czas",
    "type": "true_false",
    "prompt": "Ziemia obiega Słońce w kierunku przeciwnym do ruchu wskazówek zegara, gdy patrzymy znad północnego bieguna ekliptyki.",
    "options": null,
    "answer": true,
    "explanation": "Patrząc znad północnego bieguna ekliptyki, ruch obiegowy Ziemi wokół Słońca odbywa się przeciwnie do ruchu wskazówek zegara."
  },
  {
    "id": "R02_RUC_03",
    "section": "Ruchy Ziemi i czas",
    "type": "multi_select",
    "prompt": "Wskaż następstwa ruchu obrotowego Ziemi.",
    "options": [
      "następowanie dnia i nocy",
      "następowanie pór roku",
      "pozorna wędrówka Słońca po niebie",
      "różnice czasu słonecznego",
      "występowanie przesilenia letniego"
    ],
    "image": "r02_ruch_obrotowy.jpg",
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Ruch obrotowy powoduje następowanie dnia i nocy, pozorną wędrówkę Słońca oraz różnice czasu słonecznego między południkami. Zmiany pór roku wiążą się z ruchem obiegowym."
  },
  {
    "id": "R02_RUC_04",
    "section": "Ruchy Ziemi i czas",
    "type": "fill_in",
    "prompt": "Pełny obrót Ziemi wynosi __________ stopni i zajmuje __________ godziny.",
    "options": null,
    "answer": [
      "360",
      "24"
    ],
    "altAnswers": [
      [
        "360"
      ],
      [
        "24"
      ]
    ],
    "explanation": "Ziemia obraca się o 360° w ciągu 24 godzin, co pozwala obliczać różnice czasu słonecznego."
  },
  {
    "id": "R02_RUC_05",
    "section": "Ruchy Ziemi i czas",
    "type": "match",
    "prompt": "Połącz datę z wydarzeniem astronomicznym na półkuli północnej.",
    "options": null,
    "image": "r02_oswietlenie_ziemi.jpg",
    "left": [
      "21 marca",
      "22 czerwca",
      "23 września",
      "22 grudnia"
    ],
    "right": [
      "przesilenie zimowe",
      "równonoc jesienna",
      "przesilenie letnie",
      "równonoc wiosenna"
    ],
    "answer": {
      "21 marca": "równonoc wiosenna",
      "22 czerwca": "przesilenie letnie",
      "23 września": "równonoc jesienna",
      "22 grudnia": "przesilenie zimowe"
    },
    "explanation": "Umowne daty astronomicznych pór roku to: 21 III — równonoc wiosenna, 22 VI — przesilenie letnie, 23 IX — równonoc jesienna, 22 XII — przesilenie zimowe."
  },
  {
    "id": "R02_RUC_06",
    "section": "Ruchy Ziemi i czas",
    "type": "single_choice",
    "prompt": "O ile minut różni się miejscowy czas słoneczny na dwóch południkach oddalonych o 1° długości geograficznej?",
    "options": [
      "1 minutę",
      "2 minuty",
      "4 minuty",
      "15 minut",
      "30 minut",
      "60 minut"
    ],
    "answer": 2,
    "explanation": "Ziemia obraca się o 15° w godzinę, więc różnica 1° długości geograficznej odpowiada 4 minutom."
  },
  {
    "id": "R02_RUC_07",
    "section": "Ruchy Ziemi i czas",
    "type": "scenario",
    "prompt": "W pewnym miejscu jest południe słoneczne. Drugie miejsce leży dokładnie 15° długości geograficznej dalej na wschód. Jaki jest tam czas słoneczny?",
    "options": [
      "11:00",
      "12:00",
      "12:04",
      "13:00",
      "14:00"
    ],
    "answer": 3,
    "explanation": "Miejsca oddalone o 15° długości geograficznej różnią się czasem słonecznym o godzinę; na wschodzie czas jest późniejszy."
  },
  {
    "id": "R02_RUC_08",
    "section": "Ruchy Ziemi i czas",
    "type": "odd_one_out",
    "prompt": "Wskaż następstwo innego ruchu Ziemi niż pozostałe: występowanie dnia i nocy, różnice czasu słonecznego, spłaszczenie Ziemi przy biegunach, zmiany astronomicznych pór roku.",
    "options": null,
    "answer": "zmiany astronomicznych pór roku",
    "explanation": "Astronomiczne pory roku są następstwem ruchu obiegowego Ziemi; pozostałe wymienione zjawiska wiążą się z jej ruchem obrotowym."
  },
  {
    "id": "R02_RUC_09",
    "section": "Ruchy Ziemi i czas",
    "type": "match",
    "prompt": "Połącz strefę oświetlenia Ziemi z jej cechą.",
    "options": null,
    "image": "r02_oswietlenie_ziemi.jpg",
    "left": [
      "międzyzwrotnikowa",
      "umiarkowana",
      "podbiegunowa"
    ],
    "right": [
      "występują dzień polarny i noc polarna",
      "Słońce może górować w zenicie",
      "wyraźna sezonowa zmienność długości dnia i nocy"
    ],
    "answer": {
      "międzyzwrotnikowa": "Słońce może górować w zenicie",
      "umiarkowana": "wyraźna sezonowa zmienność długości dnia i nocy",
      "podbiegunowa": "występują dzień polarny i noc polarna"
    },
    "explanation": "W strefie międzyzwrotnikowej promienie mogą padać pionowo, a za kołami podbiegunowymi występuje dzień i noc polarna."
  },
  {
    "id": "R02_RUC_10",
    "section": "Ruchy Ziemi i czas",
    "type": "single_choice",
    "prompt": "Ile głównych stref czasowych wyróżnia się na Ziemi?",
    "options": [
      "24",
      "12",
      "18",
      "20",
      "30",
      "36"
    ],
    "answer": 0,
    "explanation": "Ziemię dzieli się na 24 umowne strefy czasowe, a czas sąsiadujących stref różni się zwykle o jedną godzinę."
  },
  {
    "id": "R02_RUC_11",
    "section": "Ruchy Ziemi i czas",
    "type": "riddle",
    "prompt": "Który południk wyznacza umowną linię zmiany daty?",
    "options": null,
    "answer": "180°",
    "altAnswers": [
      "180°",
      "180",
      "południk 180°",
      "południk 180"
    ],
    "explanation": "Umowna linia zmiany daty przebiega w przybliżeniu wzdłuż południka 180°."
  },
  {
    "id": "R02_WSP_01",
    "section": "Współrzędne geograficzne",
    "type": "single_choice",
    "prompt": "Co informuje o odległości kątowej punktu od równika?",
    "options": [
      "wysokość bezwzględna",
      "długość geograficzna",
      "szerokość geograficzna",
      "czas słoneczny",
      "wysokość względna"
    ],
    "image": "r02_siatka_geograficzna.jpg",
    "answer": 2,
    "explanation": "Szerokość geograficzna wskazuje odległość kątową od równika oraz położenie na północ lub południe od niego."
  },
  {
    "id": "R02_WSP_02",
    "section": "Współrzędne geograficzne",
    "type": "true_false",
    "prompt": "Wszystkie równoleżniki mają taką samą długość.",
    "options": null,
    "answer": false,
    "explanation": "Najdłuższy jest równik; długość pozostałych równoleżników maleje w kierunku biegunów."
  },
  {
    "id": "R02_WSP_03",
    "section": "Współrzędne geograficzne",
    "type": "fill_in",
    "prompt": "Południk 0° przechodzi przez londyńską dzielnicę __________.",
    "options": null,
    "answer": [
      "Greenwich"
    ],
    "altAnswers": [
      [
        "Greenwich",
        "greenwich"
      ]
    ],
    "explanation": "Południk początkowy, oznaczony 0°, przechodzi przez Greenwich w Londynie."
  },
  {
    "id": "R02_WSP_04",
    "section": "Współrzędne geograficzne",
    "type": "match",
    "prompt": "Połącz symbol z kierunkiem położenia geograficznego.",
    "options": null,
    "left": [
      "N",
      "S",
      "E",
      "W"
    ],
    "right": [
      "na wschód od południka 0°",
      "na zachód od południka 0°",
      "na północ od równika",
      "na południe od równika"
    ],
    "answer": {
      "N": "na północ od równika",
      "S": "na południe od równika",
      "E": "na wschód od południka 0°",
      "W": "na zachód od południka 0°"
    },
    "explanation": "N i S oznaczają szerokość północną i południową; E i W oznaczają długość wschodnią i zachodnią."
  },
  {
    "id": "R02_WSP_05",
    "section": "Współrzędne geograficzne",
    "type": "odd_one_out",
    "prompt": "Wskaż linię innego rodzaju niż pozostałe: równik, zwrotnik Raka, koło podbiegunowe północne, południk Greenwich.",
    "options": null,
    "image": "r02_siatka_geograficzna.jpg",
    "answer": "południk Greenwich",
    "explanation": "Równik, zwrotniki i koła podbiegunowe są równoleżnikami, natomiast linia przechodząca przez Greenwich jest południkiem."
  },
  {
    "id": "R02_WSP_06",
    "section": "Współrzędne geograficzne",
    "type": "scenario",
    "prompt": "Uczeń odczytał, że Kraków leży na 50°N szerokości geograficznej. Po której stronie równika znajduje się Kraków?",
    "options": [
      "na północ od równika",
      "na południe od równika",
      "dokładnie na równiku",
      "na południku 180°"
    ],
    "answer": 0,
    "explanation": "Litera N oznacza północną szerokość geograficzną, dlatego Kraków leży na północ od równika."
  },
  {
    "id": "R02_WSP_07",
    "section": "Współrzędne geograficzne",
    "type": "sort",
    "prompt": "Podziel podane współrzędne według rodzaju.",
    "options": null,
    "items": [
      "20°E",
      "30°S",
      "23°32′W",
      "50°N"
    ],
    "categories": [
      "szerokość geograficzna",
      "długość geograficzna"
    ],
    "answer": {
      "szerokość geograficzna": [
        "50°N",
        "30°S"
      ],
      "długość geograficzna": [
        "20°E",
        "23°32′W"
      ]
    },
    "explanation": "Szerokość geograficzną oznacza się kierunkami N/S, a długość geograficzną kierunkami E/W."
  },
  {
    "id": "R02_WSP_08",
    "section": "Współrzędne geograficzne",
    "type": "multi_select",
    "prompt": "Do czego wykorzystuje się system GPS?",
    "options": [
      "nawigacja lotnicza",
      "ratownictwo",
      "zmiana kierunku ruchu Ziemi",
      "geodezja",
      "pomiary w budownictwie",
      "wytwarzanie światła słonecznego"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "GPS służy między innymi do nawigacji, ratownictwa, geodezji i pomiarów w budownictwie."
  },
  {
    "id": "R02_WSP_09",
    "section": "Współrzędne geograficzne",
    "type": "sequence",
    "prompt": "Ułóż podane linie szerokości geograficznej od północy ku południu.",
    "options": null,
    "image": "r02_siatka_geograficzna.jpg",
    "items": [
      "równik",
      "koło podbiegunowe południowe",
      "zwrotnik Raka",
      "koło podbiegunowe północne",
      "zwrotnik Koziorożca"
    ],
    "answer": [
      "koło podbiegunowe północne",
      "zwrotnik Raka",
      "równik",
      "zwrotnik Koziorożca",
      "koło podbiegunowe południowe"
    ],
    "explanation": "Od północy ku południu następują kolejno: koło podbiegunowe północne, zwrotnik Raka, równik, zwrotnik Koziorożca, koło podbiegunowe południowe."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywamy fragment materii pozaziemskiej, który spadł na powierzchnię Ziemi?",
    "options": null,
    "answer": "meteoryt",
    "altAnswers": [
      "meteoryt"
    ],
    "explanation": "Meteoryty to fragmenty materii skalnej lub lodowo-skalnej, które krążyły w kosmosie, a następnie spadły na Ziemię."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile ważył po oczyszczeniu meteoryt odnaleziony w 2006 roku na Morasku?",
    "options": [
      "126 kg",
      "216 kg",
      "261 kg",
      "612 kg",
      "621 kg",
      "162 kg"
    ],
    "answer": 2,
    "explanation": "Meteoryt znaleziony we wrześniu 2006 roku w rejonie Moraska koło Poznania miał masę około 261 kg."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Jedna jednostka astronomiczna to około __________ milionów kilometrów.",
    "options": null,
    "answer": [
      "150"
    ],
    "altAnswers": [
      [
        "150"
      ]
    ],
    "explanation": "Odległość Ziemi od Słońca to około 150 mln km, czyli 1 jednostka astronomiczna."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki procent łącznej powierzchni oceanów zajmuje Pacyfik?",
    "options": [
      "25%",
      "50%",
      "21%",
      "4%",
      "71%",
      "30%"
    ],
    "answer": 1,
    "explanation": "Ocean Spokojny (Pacyfik) ma powierzchnię około 179,7 mln km², czyli zajmuje około 50% powierzchni oceanów."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz porównuje stopień geotermiczny: w Karpatach około 42 m, w Olsztynie 57,9 m, na Bahamach 180,2 m. Gdzie występuje wyjątkowo niska wartość 1,5 m?",
    "options": [
      "Bahamy",
      "Santoryn",
      "Karpaty",
      "Olsztyn",
      "Nizina Amazonki"
    ],
    "answer": 1,
    "explanation": "Na greckiej wyspie Santoryn stopień geotermiczny osiąga około 1,5 m."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz najwyższe szczyty z odpowiednimi kontynentami.",
    "options": null,
    "left": [
      "Mont Blanc",
      "Denali",
      "Aconcagua",
      "Kibo"
    ],
    "right": [
      "Ameryka Południowa",
      "Europa",
      "Afryka",
      "Ameryka Północna"
    ],
    "answer": {
      "Mont Blanc": "Europa",
      "Denali": "Ameryka Północna",
      "Aconcagua": "Ameryka Południowa",
      "Kibo": "Afryka"
    },
    "explanation": "W zestawieniu szczytów Korony Ziemi Mont Blanc reprezentuje Europę, Denali Amerykę Północną, Aconcagua Amerykę Południową, a Kibo Afrykę."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż okresy fałdowań górskich od najstarszego do najmłodszego.",
    "options": null,
    "items": [
      "fałdowanie alpejskie",
      "fałdowanie kaledońskie",
      "fałdowanie hercyńskie"
    ],
    "answer": [
      "fałdowanie kaledońskie",
      "fałdowanie hercyńskie",
      "fałdowanie alpejskie"
    ],
    "explanation": "Orogeneza kaledońska jest najstarsza, hercyńska młodsza, a alpejska najmłodsza i trwająca do dziś."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o oceanach.",
    "options": [
      "Ocean Atlantycki: 25% powierzchni oceanów",
      "Ocean Arktyczny: 4% powierzchni oceanów",
      "Ocean Indyjski: 50% powierzchni oceanów",
      "Ocean Spokojny: 50% powierzchni oceanów",
      "Ocean Atlantycki: 4% powierzchni oceanów"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Ocean Atlantycki zajmuje 25% powierzchni oceanów, Indyjski 21%, Arktyczny 4%, a Spokojny 50%."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Równik przecina Amerykę Południową, Afrykę i Azję.",
    "options": null,
    "answer": true,
    "explanation": "Opis siatki geograficznej wskazuje, że równik przecina Amerykę Południową, Afrykę i Azję."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Przy obrocie Ziemi o 1° miejscowy czas słoneczny zmienia się o __________ minuty, a przy 15° o __________ minut.",
    "options": null,
    "answer": [
      "4",
      "60"
    ],
    "altAnswers": [
      [
        "4"
      ],
      [
        "60"
      ]
    ],
    "explanation": "Pełne 360° to 24 godziny: 1° odpowiada 4 minutom, a 15° jednej godzinie, czyli 60 minutom."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie miejscowości dzieli 7,5° długości geograficznej. O ile różnią się ich miejscowe czasy słoneczne?",
    "options": [
      "15 minut",
      "30 minut",
      "45 minut",
      "1 godzina",
      "2 godziny"
    ],
    "answer": 1,
    "explanation": "Każdy stopień długości geograficznej oznacza 4 minuty różnicy czasu słonecznego, więc 7,5° to 30 minut."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj regionalne nazwy stepów do miejsc występowania.",
    "options": null,
    "items": [
      "pampa",
      "puszta",
      "preria"
    ],
    "categories": [
      "Ameryka Północna",
      "Ameryka Południowa",
      "Europa"
    ],
    "answer": {
      "Ameryka Północna": [
        "preria"
      ],
      "Ameryka Południowa": [
        "pampa"
      ],
      "Europa": [
        "puszta"
      ]
    },
    "explanation": "Preria występuje w Ameryce Północnej, pampa w Ameryce Południowej, a puszta na Węgrzech w Europie."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż pasmo górskie leżące poza Azją: Pamir, Himalaje, Karakorum, Appalachy.",
    "options": null,
    "answer": "Appalachy",
    "explanation": "Pamir, Himalaje i Karakorum są azjatyckimi pasmami górskimi; Appalachy leżą w Ameryce Północnej."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz obszary z ich stopniami geotermicznymi.",
    "options": null,
    "left": [
      "Santoryn",
      "Karpaty",
      "Olsztyn",
      "Bahamy"
    ],
    "right": [
      "180,2 m",
      "57,9 m",
      "1,5 m",
      "42,0 m"
    ],
    "answer": {
      "Santoryn": "1,5 m",
      "Karpaty": "42,0 m",
      "Olsztyn": "57,9 m",
      "Bahamy": "180,2 m"
    },
    "explanation": "Stopień geotermiczny oznacza głębokość, na której temperatura wzrasta o 1°C. Wartość ta zależy od regionu."
  }
];

const KID_PROMPTS = {
  "R02_KOS_01": "Kto odkrył, że Ziemia i inne planety krążą wokół Słońca?",
  "R02_KOS_03": "Które z tych planet to planety ziemskie?",
  "R02_KOS_08": "Ułóż cztery najbliższe Słońcu planety po kolei.",
  "R02_POW_04": "Który kontynent jest największy?",
  "R02_POW_10": "Jak nazywa się płytka część dna oceanu przy lądzie?",
  "R02_GLO_02": "Jakie warstwy tworzą litosferę?",
  "R02_KLI_01": "Jaka strefa klimatyczna jest blisko biegunów?",
  "R02_KLI_07": "Która roślina nie pasuje: sosna, świerk, modrzew, kaktus.",
  "R02_RUC_01": "Ile godzin zajmuje Ziemi jeden obrót?",
  "R02_RUC_10": "Ile jest stref czasowych na Ziemi?",
  "R02_WSP_01": "Która współrzędna mówi, jak daleko jest miejsce od równika?",
  "R02_WSP_06": "Kraków leży na 50°N. Czy jest na północ, czy na południe od równika?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Ziemia",
  icon: "🌍",
  sectionOrder: [
    "Ziemia we Wszechświecie",
    "Kształt i powierzchnia Ziemi",
    "Wnętrze Ziemi i odkrycia",
    "Klimat i krajobrazy",
    "Ruchy Ziemi i czas",
    "Współrzędne geograficzne"
  ],
  sectionIcons: {
    "Ziemia we Wszechświecie": "🪐",
    "Kształt i powierzchnia Ziemi": "🌍",
    "Wnętrze Ziemi i odkrycia": "🌋",
    "Klimat i krajobrazy": "🌿",
    "Ruchy Ziemi i czas": "☀️",
    "Współrzędne geograficzne": "🧭"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
