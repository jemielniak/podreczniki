// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie i krajobrazy Europy
//   KLI  = Klimaty Europy
//   ISL  = Islandia - wyspa ognia
//   ENE  = Energia w Europie
//   TUR  = Turystyka śródziemnomorska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_POL_01",
    "section": "Położenie i krajobrazy Europy",
    "type": "single_choice",
    "prompt": "Jak określa się wielkość Europy w porównaniu z innymi kontynentami?",
    "options": [
      "Jest największym kontynentem na świecie",
      "Jest drugim po Australii najmniejszym kontynentem",
      "Jest mniejsza tylko od Antarktydy",
      "Ma taką samą powierzchnię jak Azja",
      "Zajmuje połowę wszystkich lądów na Ziemi",
      "Jest najmniejsza ze wszystkich części świata"
    ],
    "answer": 1,
    "explanation": "Europa jest drugim po Australii najmniejszym kontynentem i stanowi około 7% wszystkich lądów na Ziemi."
  },
  {
    "id": "R03_POL_02",
    "section": "Położenie i krajobrazy Europy",
    "type": "true_false",
    "prompt": "Granica między Europą i Azją ma charakter umowny, ponieważ Europa i Azja tworzą jeden zwarty ląd - Eurazję.",
    "options": null,
    "answer": true,
    "image": "r03_granica_europy_azji.jpg",
    "explanation": "Granica przebiega w dużej części na lądzie i została wyznaczona ze względu na różnice kulturowe."
  },
  {
    "id": "R03_POL_03",
    "section": "Położenie i krajobrazy Europy",
    "type": "fill_in",
    "prompt": "Europa leży w całości na półkuli __________, a jej zdecydowana większość znajduje się na półkuli __________.",
    "options": null,
    "answer": [
      "północnej",
      "wschodniej"
    ],
    "altAnswers": [
      [
        "północnej",
        "polnocnej"
      ],
      [
        "wschodniej",
        "wschodniej półkuli"
      ]
    ],
    "image": "r03_mapa_hipsometryczna_europy.jpg",
    "explanation": "Cały kontynent leży na półkuli północnej, a większość jego obszaru znajduje się na wschód od południka zerowego."
  },
  {
    "id": "R03_POL_04",
    "section": "Położenie i krajobrazy Europy",
    "type": "multi_select",
    "prompt": "Zaznacz elementy przebiegu granicy między Europą i Azją.",
    "options": [
      "Wschodnia strona gór Ural",
      "Północne wybrzeża Morza Kaspijskiego",
      "Północne podnóże Kaukazu",
      "Andy",
      "Morze Czarne",
      "Sahara"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wschodni przebieg granicy wiąże się z Uralem, Morzem Kaspijskim, północnym podnóżem Kaukazu i Morzem Czarnym, a nie z Andami ani Saharą."
  },
  {
    "id": "R03_POL_05",
    "section": "Położenie i krajobrazy Europy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do opisu europejskich wybrzeży: fiordy, półwyspy, kręta linia brzegowa, pustynia Sahara.",
    "options": null,
    "answer": "pustynia Sahara",
    "image": "r03_fiord_norweski.jpg",
    "explanation": "Fiordy, półwyspy i kręta linia brzegowa opisują wybrzeża Europy; Sahara nie jest elementem europejskiego wybrzeża."
  },
  {
    "id": "R03_POL_06",
    "section": "Położenie i krajobrazy Europy",
    "type": "match",
    "prompt": "Połącz europejski element geograficzny z właściwym przykładem.",
    "options": null,
    "left": [
      "największa wyspa Europy",
      "największy półwysep Europy",
      "najdłuższa rzeka Europy",
      "najwyższy szczyt Europy"
    ],
    "right": [
      "Wołga",
      "Półwysep Skandynawski",
      "Mont Blanc",
      "Wielka Brytania"
    ],
    "answer": {
      "największa wyspa Europy": "Wielka Brytania",
      "największy półwysep Europy": "Półwysep Skandynawski",
      "najdłuższa rzeka Europy": "Wołga",
      "najwyższy szczyt Europy": "Mont Blanc"
    },
    "explanation": "Wielka Brytania, Półwysep Skandynawski, Wołga i Mont Blanc należą do ważnych europejskich obiektów geograficznych."
  },
  {
    "id": "R03_POL_07",
    "section": "Położenie i krajobrazy Europy",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do form ukształtowania powierzchni.",
    "options": null,
    "items": [
      "Nizina Wschodnioeuropejska",
      "Nizina Polska",
      "Alpy",
      "Karpaty",
      "Wyżyna Podolska",
      "Wyżyna Środkoworosyjska"
    ],
    "categories": [
      "niziny",
      "wyżyny",
      "góry"
    ],
    "answer": {
      "niziny": [
        "Nizina Wschodnioeuropejska",
        "Nizina Polska"
      ],
      "wyżyny": [
        "Wyżyna Podolska",
        "Wyżyna Środkoworosyjska"
      ],
      "góry": [
        "Alpy",
        "Karpaty"
      ]
    },
    "explanation": "Niziny zajmują znaczną część Europy, wyżyny mają mniejszy zasięg, a Alpy i Karpaty należą do ważnych łańcuchów górskich."
  },
  {
    "id": "R03_POL_08",
    "section": "Położenie i krajobrazy Europy",
    "type": "sequence",
    "prompt": "Ułóż obszary pasa nizin Europy Środkowej i Zachodniej od zachodu ku wschodowi.",
    "options": null,
    "items": [
      "Niemcy",
      "kraje bałtyckie",
      "Francja",
      "Polska",
      "Belgia i Holandia"
    ],
    "answer": [
      "Francja",
      "Belgia i Holandia",
      "Niemcy",
      "Polska",
      "kraje bałtyckie"
    ],
    "explanation": "Pas nizin rozciąga się od Francji przez Belgię, Holandię, Niemcy i Polskę po kraje bałtyckie."
  },
  {
    "id": "R03_POL_09",
    "section": "Położenie i krajobrazy Europy",
    "type": "riddle",
    "prompt": "Jak nazywa się kręta linia brzegowa, która nie przypomina linii prostej?",
    "options": null,
    "answer": "rozwinięta linia brzegowa",
    "altAnswers": [
      "rozwinięta linia brzegowa",
      "dobrze rozwinięta linia brzegowa",
      "silnie rozwinięta linia brzegowa"
    ],
    "explanation": "Rozwinięta linia brzegowa jest kręta i składa się z wielu półwyspów, zatok oraz innych załamań wybrzeża."
  },
  {
    "id": "R03_POL_10",
    "section": "Położenie i krajobrazy Europy",
    "type": "scenario",
    "prompt": "Uczeń ogląda zdjęcie długiej i głębokiej zatoki w Norwegii. Nauczyciel wyjaśnia, że taki typ wybrzeża jest typowy dla silnie rozwiniętej linii brzegowej. Jak nazywa się taka zatoka?",
    "options": [
      "fiord",
      "delta",
      "misa jeziorna",
      "półpustynia",
      "wyżyna",
      "przesmyk"
    ],
    "answer": 0,
    "image": "r03_fiord_norweski.jpg",
    "explanation": "Norweskie wybrzeża wyróżniają się fiordami, czyli długimi i głębokimi zatokami."
  },
  {
    "id": "R03_POL_11",
    "section": "Położenie i krajobrazy Europy",
    "type": "single_choice",
    "prompt": "Który łańcuch górski wyznacza wschodnią granicę Europy?",
    "options": [
      "Alpy",
      "Pireneje",
      "Ural",
      "Apeniny",
      "Góry Dynarskie",
      "Karpaty"
    ],
    "answer": 2,
    "image": "r03_granica_europy_azji.jpg",
    "explanation": "Na wschodzie Europa kończy się na łańcuchu górskim Uralu."
  },
  {
    "id": "R03_POL_12",
    "section": "Położenie i krajobrazy Europy",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady zróżnicowania środowiska przyrodniczego Europy.",
    "options": [
      "Tajga i tundra w Europie Północnej",
      "Aktywne wulkany i lodowce na Islandii",
      "Wołga jako najdłuższa rzeka Europy",
      "Suche tereny przypominające półpustynie w Europie Południowej",
      "Wilgotna dżungla równikowa w centrum kontynentu",
      "Całkowity brak rzek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pojawiają się tajga, tundra, islandzkie wulkany i lodowce, Wołga oraz suche tereny podobne do półpustyń."
  },
  {
    "id": "R03_KLI_01",
    "section": "Klimaty Europy",
    "type": "single_choice",
    "prompt": "Czym jest klimat?",
    "options": [
      "Jednorazowym stanem pogody w południe",
      "Zespołem cech pogody obserwowanych przez wiele lat na danym obszarze",
      "Tylko średnią temperaturą lipca",
      "Nazwą jednego prądu morskiego",
      "Wyłącznie sumą opadów z jednego dnia",
      "Rodzajem skały"
    ],
    "answer": 1,
    "explanation": "Klimat to charakterystyczny dla danego obszaru zespół warunków pogodowych określony na podstawie wieloletnich obserwacji."
  },
  {
    "id": "R03_KLI_02",
    "section": "Klimaty Europy",
    "type": "match",
    "prompt": "Połącz czynnik klimatotwórczy ze skutkiem.",
    "options": null,
    "left": [
      "szerokość geograficzna",
      "wysokość nad poziomem morza",
      "rozległy ocean",
      "duże miasto"
    ],
    "right": [
      "morski wpływ łagodzący zimy",
      "mniejszy kąt padania promieni na północy",
      "miejska wyspa ciepła",
      "spadek temperatury wraz z wysokością"
    ],
    "answer": {
      "szerokość geograficzna": "mniejszy kąt padania promieni na północy",
      "wysokość nad poziomem morza": "spadek temperatury wraz z wysokością",
      "rozległy ocean": "morski wpływ łagodzący zimy",
      "duże miasto": "miejska wyspa ciepła"
    },
    "explanation": "Czynniki klimatotwórcze wpływają na temperaturę, opady i lokalne zróżnicowanie klimatu."
  },
  {
    "id": "R03_KLI_03",
    "section": "Klimaty Europy",
    "type": "fill_in",
    "prompt": "Na północy Europy promienie słoneczne padają pod __________ kątem, dlatego ilość energii jest mała, a temperatura powietrza __________.",
    "options": null,
    "answer": [
      "niewielkim",
      "niska"
    ],
    "altAnswers": [
      [
        "niewielkim",
        "małym"
      ],
      [
        "niska",
        "niewysoka"
      ]
    ],
    "explanation": "Im dalej na północ, tym mniejszy kąt padania promieni słonecznych i niższa temperatura powietrza."
  },
  {
    "id": "R03_KLI_04",
    "section": "Klimaty Europy",
    "type": "single_choice",
    "prompt": "Jaki wpływ na Europę Zachodnią ma Prąd Północnoatlantycki?",
    "options": [
      "Obniża temperaturę i zmniejsza opady",
      "Przynosi ciepłą wodę i podwyższa temperaturę powietrza",
      "Zatrzymuje wszystkie wiatry znad Atlantyku",
      "Powoduje brak zimy w całej Europie",
      "Tworzy góry na południu kontynentu",
      "Osusza wybrzeża Norwegii"
    ],
    "answer": 1,
    "image": "r03_prad_polnocnoatlantycki.jpg",
    "explanation": "Ciepły Prąd Północnoatlantycki płynie wzdłuż zachodnich wybrzeży Europy i sprzyja wyższym temperaturom oraz większym opadom."
  },
  {
    "id": "R03_KLI_05",
    "section": "Klimaty Europy",
    "type": "true_false",
    "prompt": "Klimat morski wyróżnia się dużą roczną amplitudą temperatury i bardzo mroźnymi zimami.",
    "options": null,
    "answer": false,
    "explanation": "Klimat morski ma mniejsze różnice temperatur między porami roku; duża amplituda jest cechą klimatu kontynentalnego."
  },
  {
    "id": "R03_KLI_06",
    "section": "Klimaty Europy",
    "type": "sort",
    "prompt": "Rozdziel cechy klimatu morskiego i kontynentalnego.",
    "options": null,
    "items": [
      "mniejsza roczna amplituda temperatury",
      "łagodniejsze zimy",
      "duża roczna amplituda temperatury",
      "bardzo mroźne zimy",
      "chłodniejsze lato niż w głębi lądu",
      "wysokie temperatury latem"
    ],
    "categories": [
      "klimat morski",
      "klimat kontynentalny"
    ],
    "answer": {
      "klimat morski": [
        "mniejsza roczna amplituda temperatury",
        "łagodniejsze zimy",
        "chłodniejsze lato niż w głębi lądu"
      ],
      "klimat kontynentalny": [
        "duża roczna amplituda temperatury",
        "bardzo mroźne zimy",
        "wysokie temperatury latem"
      ]
    },
    "explanation": "Ocean łagodzi różnice temperatur, natomiast wnętrze kontynentu sprzyja większym skrajnościom termicznym."
  },
  {
    "id": "R03_KLI_07",
    "section": "Klimaty Europy",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki klimatotwórcze.",
    "options": [
      "Szerokość geograficzna",
      "Prądy morskie",
      "Wysokość nad poziomem morza i ukształtowanie terenu",
      "Rozkład lądów i mórz",
      "Pokrycie terenu",
      "Kolor flag państw"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do czynników klimatotwórczych należą m.in. szerokość geograficzna, prądy morskie, wysokość, rzeźba terenu, rozkład lądów i mórz oraz pokrycie terenu."
  },
  {
    "id": "R03_KLI_08",
    "section": "Klimaty Europy",
    "type": "riddle",
    "prompt": "Różnica między średnią temperaturą najcieplejszego i najchłodniejszego miesiąca w roku to...",
    "options": null,
    "answer": "amplituda roczna temperatury powietrza",
    "altAnswers": [
      "amplituda roczna temperatury powietrza",
      "roczna amplituda temperatury",
      "amplituda temperatury"
    ],
    "explanation": "Amplituda roczna temperatury powietrza pokazuje, jak bardzo różnią się średnie temperatury skrajnych miesięcy roku."
  },
  {
    "id": "R03_KLI_09",
    "section": "Klimaty Europy",
    "type": "match",
    "prompt": "Połącz strefę klimatyczną z jej opisem w Europie.",
    "options": null,
    "left": [
      "podzwrotnikowa",
      "umiarkowana typu ciepłego",
      "umiarkowana typu chłodnego",
      "okołobiegunowa"
    ],
    "right": [
      "południe Europy z gorącym latem",
      "największy obszar Europy",
      "północ Europy z krótkim latem",
      "najdalej na północ wysunięte fragmenty kontynentu"
    ],
    "answer": {
      "podzwrotnikowa": "południe Europy z gorącym latem",
      "umiarkowana typu ciepłego": "największy obszar Europy",
      "umiarkowana typu chłodnego": "północ Europy z krótkim latem",
      "okołobiegunowa": "najdalej na północ wysunięte fragmenty kontynentu"
    },
    "image": "r03_klimaty_europy.jpg",
    "explanation": "Europa leży w strefie podzwrotnikowej, umiarkowanej oraz okołobiegunowej, a największą część zajmują klimaty umiarkowane."
  },
  {
    "id": "R03_KLI_10",
    "section": "Klimaty Europy",
    "type": "scenario",
    "prompt": "Wędrowiec jest latem wysoko w Tatrach. Mimo lata jest chłodno, a w niektórych miejscach leży śnieg. Który czynnik klimatotwórczy najlepiej wyjaśnia tę sytuację?",
    "options": [
      "wysokość nad poziomem morza",
      "karnawał w Wenecji",
      "powierzchnia pól uprawnych",
      "liczba półwyspów",
      "granica kulturowa Europy",
      "wiek zabytków"
    ],
    "answer": 0,
    "explanation": "Wraz ze wzrostem wysokości maleje temperatura powietrza, dlatego w górach klimat różni się od klimatu nizin."
  },
  {
    "id": "R03_KLI_11",
    "section": "Klimaty Europy",
    "type": "sequence",
    "prompt": "Ułóż etapy wyjaśniające, dlaczego ocean łagodzi zimy w Europie Zachodniej.",
    "options": null,
    "items": [
      "zimą ocean działa jak ogromny grzejnik",
      "ląd ochładza się szybciej niż woda",
      "woda oddaje ciepło wolniej",
      "zachodnie wybrzeża mają łagodniejsze zimy"
    ],
    "answer": [
      "ląd ochładza się szybciej niż woda",
      "woda oddaje ciepło wolniej",
      "zimą ocean działa jak ogromny grzejnik",
      "zachodnie wybrzeża mają łagodniejsze zimy"
    ],
    "explanation": "Ocean wolniej się ochładza, dlatego zimą ogrzewa powietrze nad pobliskimi lądami i łagodzi klimat morski."
  },
  {
    "id": "R03_KLI_12",
    "section": "Klimaty Europy",
    "type": "true_false",
    "prompt": "Miejska wyspa ciepła oznacza, że obszary dużych miast mogą być nawet o 10 stopni Celsjusza cieplejsze od terenów pokrytych lasem.",
    "options": null,
    "answer": true,
    "image": "r03_miejska_wyspa_ciepla.jpg",
    "explanation": "Bezleśna powierzchnia miasta silnie się nagrzewa, dlatego miasta mogą być znacznie cieplejsze od otoczenia."
  },
  {
    "id": "R03_ISL_01",
    "section": "Islandia - wyspa ognia",
    "type": "single_choice",
    "prompt": "Czym jest litosfera?",
    "options": [
      "Warstwą chmur nad Europą",
      "Zewnętrzną powłoką Ziemi zbudowaną ze skał w stanie stałym",
      "Ciepłym prądem morskim",
      "Rodzajem klimatu morskiego",
      "Płynną wodą wypływającą z gejzeru",
      "Siecią autostrad na Islandii"
    ],
    "answer": 1,
    "image": "r03_islandia_granica_plyt.jpg",
    "explanation": "Litosfera to zewnętrzna, skalna powłoka Ziemi zbudowana ze skał znajdujących się w stanie stałym."
  },
  {
    "id": "R03_ISL_02",
    "section": "Islandia - wyspa ognia",
    "type": "fill_in",
    "prompt": "Islandia leży na granicy płyty __________ i płyty __________.",
    "options": null,
    "answer": [
      "północnoamerykańskiej",
      "eurazjatyckiej"
    ],
    "altAnswers": [
      [
        "północnoamerykańskiej",
        "polnocnoamerykanskiej",
        "północnoamerykańska"
      ],
      [
        "eurazjatyckiej",
        "euroazjatyckiej",
        "eurazjatycka"
      ]
    ],
    "explanation": "Mapa pokazuje Islandię na styku płyty północnoamerykańskiej i eurazjatyckiej."
  },
  {
    "id": "R03_ISL_03",
    "section": "Islandia - wyspa ognia",
    "type": "true_false",
    "prompt": "Magma po wydostaniu się na powierzchnię jest nazywana lawą.",
    "options": null,
    "answer": true,
    "explanation": "Magma to płynna materia skalna we wnętrzu Ziemi, a po wypłynięciu na powierzchnię nazywa się ją lawą."
  },
  {
    "id": "R03_ISL_04",
    "section": "Islandia - wyspa ognia",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania wulkanicznej wyspy takiej jak Islandia.",
    "options": null,
    "items": [
      "magma wydostaje się szczeliną na dnie oceanu",
      "pod litosferą znajduje się płynna materia skalna",
      "powtarzające się erupcje gromadzą skały",
      "z wody wynurza się wulkaniczna wyspa"
    ],
    "answer": [
      "pod litosferą znajduje się płynna materia skalna",
      "magma wydostaje się szczeliną na dnie oceanu",
      "powtarzające się erupcje gromadzą skały",
      "z wody wynurza się wulkaniczna wyspa"
    ],
    "explanation": "Islandia powstała dzięki wielokrotnym erupcjom wulkanicznym na granicy płyt litosfery."
  },
  {
    "id": "R03_ISL_05",
    "section": "Islandia - wyspa ognia",
    "type": "riddle",
    "prompt": "Gorące źródło, z którego woda gwałtownie wydostaje się na powierzchnię w regularnych odstępach czasu, to...",
    "options": null,
    "answer": "gejzer",
    "altAnswers": [
      "gejzer",
      "gejzery"
    ],
    "image": "r03_gejzer_islandia.jpg",
    "explanation": "W gejzerze woda przegrzewa się pod wpływem gorącej magmy, a wzrost ciśnienia wypycha wodę i parę na powierzchnię."
  },
  {
    "id": "R03_ISL_06",
    "section": "Islandia - wyspa ognia",
    "type": "multi_select",
    "prompt": "Zaznacz zastosowania wód geotermalnych na Islandii.",
    "options": [
      "Produkcja energii elektrycznej",
      "Ogrzewanie budynków",
      "Wykorzystanie w uzdrowiskach",
      "Zasilanie elektrowni wiatrowych",
      "Budowa wapiennych plaż",
      "Zamiana Morza Norweskiego w jezioro"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wody geotermalne służą do produkcji prądu, ogrzewania budynków i działania uzdrowisk, np. Błękitnej Laguny."
  },
  {
    "id": "R03_ISL_07",
    "section": "Islandia - wyspa ognia",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "magma",
      "lawa",
      "litosfera",
      "płyty tektoniczne"
    ],
    "right": [
      "płynna materia skalna we wnętrzu Ziemi",
      "magma na powierzchni Ziemi",
      "zewnętrzna skalna powłoka Ziemi",
      "sztywne fragmenty litosfery"
    ],
    "answer": {
      "magma": "płynna materia skalna we wnętrzu Ziemi",
      "lawa": "magma na powierzchni Ziemi",
      "litosfera": "zewnętrzna skalna powłoka Ziemi",
      "płyty tektoniczne": "sztywne fragmenty litosfery"
    },
    "explanation": "Te pojęcia opisują procesy zachodzące na granicy płyt litosfery."
  },
  {
    "id": "R03_ISL_08",
    "section": "Islandia - wyspa ognia",
    "type": "scenario",
    "prompt": "W 2010 roku pyły i popioły z islandzkiej erupcji doprowadziły do kilkudniowego paraliżu ruchu lotniczego w Europie. Który wulkan wywołał tę erupcję?",
    "options": [
      "Eyjafjallajökull",
      "Etna",
      "Santoryn",
      "Wezuwiusz",
      "Kilimandżaro",
      "Ural"
    ],
    "answer": 0,
    "image": "r03_erupcja_eyjafjallajokull.jpg",
    "explanation": "Erupcja wulkanu Eyjafjallajökull w 2010 roku spowodowała emisję pyłów, które utrudniły komunikację lotniczą."
  },
  {
    "id": "R03_ISL_09",
    "section": "Islandia - wyspa ognia",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zjawisk związanych z Islandią: magma, lawa, gejzer, monsun.",
    "options": null,
    "answer": "monsun",
    "explanation": "Magma, lawa i gejzery wiążą się z położeniem Islandii na granicy płyt litosfery. Monsun to sezonowy wiatr wiejący nad Azją Południową i Południowo-Wschodnią."
  },
  {
    "id": "R03_ISL_10",
    "section": "Islandia - wyspa ognia",
    "type": "sort",
    "prompt": "Rozdziel skutki położenia Islandii na granicy płyt litosfery na korzyści i zagrożenia.",
    "options": null,
    "items": [
      "energia geotermalna",
      "uzdrowiska z gorącą wodą",
      "potoki lawy niszczące domy",
      "pyły utrudniające loty",
      "powódź po stopieniu lodu",
      "gejzery jako atrakcja turystyczna"
    ],
    "categories": [
      "korzyści",
      "zagrożenia"
    ],
    "answer": {
      "korzyści": [
        "energia geotermalna",
        "uzdrowiska z gorącą wodą",
        "gejzery jako atrakcja turystyczna"
      ],
      "zagrożenia": [
        "potoki lawy niszczące domy",
        "pyły utrudniające loty",
        "powódź po stopieniu lodu"
      ]
    },
    "explanation": "To samo położenie daje Islandii zasoby energii i atrakcje, ale wiąże się także z erupcjami, popiołami i powodziami."
  },
  {
    "id": "R03_ISL_11",
    "section": "Islandia - wyspa ognia",
    "type": "true_false",
    "prompt": "Ruchy magmy wewnątrz Ziemi i przemieszczanie się płyt litosfery mogą wywoływać na Islandii trzęsienia ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Trzęsienia ziemi na Islandii są powiązane z ruchami magmy oraz z przemieszczaniem się płyt litosfery."
  },
  {
    "id": "R03_ISL_12",
    "section": "Islandia - wyspa ognia",
    "type": "scenario",
    "prompt": "Mieszkańcy okolic Grindavik muszą opuścić domy, a część atrakcji turystycznych zostaje zamknięta. Które zjawisko najlepiej wyjaśnia tę sytuację?",
    "options": [
      "seria erupcji wulkanicznych i potoki lawy",
      "spadek liczby hoteli",
      "odpływ Prądu Północnoatlantyckiego",
      "brak piaszczystych plaż",
      "rozrost makii",
      "zmiana granicy Europy"
    ],
    "answer": 0,
    "explanation": "Wydarzenia z lat 2021-2024 w rejonie Grindaviku pokazują zagrożenia związane z aktywnymi wulkanami."
  },
  {
    "id": "R03_ENE_01",
    "section": "Energia w Europie",
    "type": "single_choice",
    "prompt": "Które źródło energii miało pierwsze miejsce w bilansie energetycznym Europy?",
    "options": [
      "ropa naftowa",
      "energia słoneczna",
      "energia geotermalna",
      "biomasa",
      "energia wodna",
      "wiatr"
    ],
    "answer": 0,
    "image": "r03_zrodla_energii_europa.jpg",
    "explanation": "Na pierwszym miejscu w bilansie energetycznym Europy znajduje się energia ze spalania ropy naftowej."
  },
  {
    "id": "R03_ENE_02",
    "section": "Energia w Europie",
    "type": "fill_in",
    "prompt": "Źródła odnawialne odbudowują się dzięki naturalnym procesom, a źródła __________ nie odbudowują się w krótkim czasie.",
    "options": null,
    "answer": [
      "nieodnawialne"
    ],
    "altAnswers": [
      [
        "nieodnawialne",
        "nieodnawialne źródła energii"
      ]
    ],
    "explanation": "Odnawialne źródła energii odtwarzają się na bieżąco, natomiast źródła nieodnawialne potrzebowałyby bardzo długiego czasu."
  },
  {
    "id": "R03_ENE_03",
    "section": "Energia w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz odnawialne źródła energii.",
    "options": [
      "energia wiatru",
      "energia słoneczna",
      "energia geotermalna",
      "energia wód płynących",
      "węgiel brunatny",
      "ropa naftowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do OZE należą m.in. energia wiatru, słońca, wnętrza Ziemi i wód płynących; węgiel brunatny i ropa są nieodnawialne."
  },
  {
    "id": "R03_ENE_04",
    "section": "Energia w Europie",
    "type": "sort",
    "prompt": "Pogrupuj źródła energii na odnawialne i nieodnawialne.",
    "options": null,
    "items": [
      "energia wiatru",
      "ropa naftowa",
      "gaz ziemny",
      "energia słoneczna",
      "biomasa",
      "węgiel kamienny"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne"
    ],
    "answer": {
      "odnawialne": [
        "energia wiatru",
        "energia słoneczna",
        "biomasa"
      ],
      "nieodnawialne": [
        "ropa naftowa",
        "gaz ziemny",
        "węgiel kamienny"
      ]
    },
    "explanation": "Źródła odnawialne odbudowują się dzięki procesom naturalnym, a paliwa kopalne są źródłami nieodnawialnymi."
  },
  {
    "id": "R03_ENE_05",
    "section": "Energia w Europie",
    "type": "match",
    "prompt": "Połącz warunki przyrodnicze z rodzajem elektrowni, któremu sprzyjają.",
    "options": null,
    "left": [
      "rzeki o dużym spadku",
      "silne wiatry przez cały rok",
      "duże nasłonecznienie",
      "gorące wody podziemne"
    ],
    "right": [
      "elektrownie słoneczne",
      "elektrownie geotermalne",
      "elektrownie wodne",
      "elektrownie wiatrowe"
    ],
    "answer": {
      "rzeki o dużym spadku": "elektrownie wodne",
      "silne wiatry przez cały rok": "elektrownie wiatrowe",
      "duże nasłonecznienie": "elektrownie słoneczne",
      "gorące wody podziemne": "elektrownie geotermalne"
    },
    "image": "r03_elektrownie_odnawialne.jpg",
    "explanation": "Warunki naturalne decydują o tym, czy opłaca się rozwijać energetykę wodną, wiatrową, słoneczną albo geotermalną."
  },
  {
    "id": "R03_ENE_06",
    "section": "Energia w Europie",
    "type": "single_choice",
    "prompt": "Który kraj ma największy udział elektrowni jądrowych w ogólnej produkcji energii?",
    "options": [
      "Francja",
      "Islandia",
      "Dania",
      "Hiszpania",
      "Szwecja",
      "Norwegia"
    ],
    "answer": 0,
    "explanation": "Francja ma największy udział elektrowni jądrowych w ogólnej produkcji energii."
  },
  {
    "id": "R03_ENE_07",
    "section": "Energia w Europie",
    "type": "true_false",
    "prompt": "Większość krajów europejskich musi sprowadzać część surowców energetycznych, ponieważ własne zasoby są niewystarczające.",
    "options": null,
    "answer": true,
    "explanation": "Zasoby ropy, gazu i pierwiastków promieniotwórczych w Europie nie wystarczają do zaspokojenia potrzeb."
  },
  {
    "id": "R03_ENE_08",
    "section": "Energia w Europie",
    "type": "riddle",
    "prompt": "Rozwiń skrót OZE używany przy transformacji energetycznej.",
    "options": null,
    "answer": "odnawialne źródła energii",
    "altAnswers": [
      "odnawialne źródła energii",
      "Odnawialne Źródła Energii",
      "oze"
    ],
    "explanation": "OZE to odnawialne źródła energii, np. wiatr, słońce, energia wód płynących i energia geotermalna."
  },
  {
    "id": "R03_ENE_09",
    "section": "Energia w Europie",
    "type": "scenario",
    "prompt": "Kierowca tankuje samochód. Paliwa do silników spalinowych także są nośnikami energii. Z którym źródłem energii najbardziej wiąże się ten przykład?",
    "options": [
      "ropa naftowa",
      "energia geotermalna",
      "energia wód płynących",
      "wiatr",
      "biomasa",
      "promieniowanie słoneczne"
    ],
    "answer": 0,
    "explanation": "Ropa naftowa ma duży udział w bilansie energii Europy, ponieważ transport samochodowy jest ważnym konsumentem paliw."
  },
  {
    "id": "R03_ENE_10",
    "section": "Energia w Europie",
    "type": "multi_select",
    "prompt": "Zaznacz cele lub skutki transformacji energetycznej.",
    "options": [
      "większe wykorzystanie OZE",
      "ograniczanie emisji gazów cieplarnianych",
      "spowolnienie zmian klimatycznych",
      "zwiększenie zależności od sprowadzanych paliw",
      "zastępowanie źródeł nieodnawialnych odnawialnymi",
      "całkowite porzucenie energii elektrycznej"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "image": "r03_turbiny_wiatrowe_dania.jpg",
    "explanation": "Transformacja energetyczna oznacza odchodzenie od źródeł nieodnawialnych na rzecz OZE i służy m.in. ograniczeniu emisji."
  },
  {
    "id": "R03_ENE_11",
    "section": "Energia w Europie",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do nieodnawialnych źródeł energii: ropa naftowa, gaz ziemny, węgiel kamienny, energia słoneczna.",
    "options": null,
    "answer": "energia słoneczna",
    "explanation": "Energia słoneczna jest źródłem odnawialnym, a ropa, gaz i węgiel kamienny są źródłami nieodnawialnymi."
  },
  {
    "id": "R03_ENE_12",
    "section": "Energia w Europie",
    "type": "match",
    "prompt": "Połącz źródło energii z przykładowym zastosowaniem.",
    "options": null,
    "left": [
      "ropa naftowa",
      "gaz ziemny",
      "węgiel",
      "pierwiastki promieniotwórcze"
    ],
    "right": [
      "paliwa w transporcie samochodowym",
      "elektrownie i ciepłownictwo",
      "elektrownie węglowe",
      "elektrownie jądrowe"
    ],
    "answer": {
      "ropa naftowa": "paliwa w transporcie samochodowym",
      "gaz ziemny": "elektrownie i ciepłownictwo",
      "węgiel": "elektrownie węglowe",
      "pierwiastki promieniotwórcze": "elektrownie jądrowe"
    },
    "explanation": "Różne źródła energii pełnią w gospodarce różne funkcje, od transportu po produkcję prądu i ciepła."
  },
  {
    "id": "R03_TUR_01",
    "section": "Turystyka śródziemnomorska",
    "type": "single_choice",
    "prompt": "Dlaczego basen Morza Śródziemnego jest jednym z popularnych regionów turystycznych?",
    "options": [
      "Łączy walory przyrodnicze i kulturowe",
      "Leży wyłącznie w strefie okołobiegunowej",
      "Nie ma tam żadnych zabytków",
      "Latem występują tam największe sumy opadów",
      "Nie posiada infrastruktury turystycznej",
      "Jest całkowicie pozbawiony plaż"
    ],
    "answer": 0,
    "image": "r03_walory_srodziemnomorskie.jpg",
    "explanation": "Region przyciąga turystów ciepłym klimatem, plażami, krajobrazami, zabytkami, kuchnią i wydarzeniami kulturalnymi."
  },
  {
    "id": "R03_TUR_02",
    "section": "Turystyka śródziemnomorska",
    "type": "multi_select",
    "prompt": "Zaznacz walory przyrodnicze regionu Morza Śródziemnego.",
    "options": [
      "słoneczne, upalne lato",
      "tysiące kilometrów piaszczystych plaż",
      "ciepłe i przejrzyste morze",
      "malownicze krajobrazy z białymi skałami wapiennymi",
      "wieczna zmarzlina na całym wybrzeżu",
      "brak roślinności"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Walory przyrodnicze regionu obejmują słońce, plaże, ciepłą wodę i malownicze krajobrazy."
  },
  {
    "id": "R03_TUR_03",
    "section": "Turystyka śródziemnomorska",
    "type": "fill_in",
    "prompt": "W basenie Morza Śródziemnego lato jest zwykle __________ i __________, a zima łagodna i deszczowa.",
    "options": null,
    "answer": [
      "słoneczne",
      "upalne"
    ],
    "altAnswers": [
      [
        "słoneczne",
        "sloneczne"
      ],
      [
        "upalne",
        "gorące"
      ]
    ],
    "explanation": "Słoneczne, upalne lato oraz łagodna, deszczowa zima sprzyjają turystyce i uprawom."
  },
  {
    "id": "R03_TUR_04",
    "section": "Turystyka śródziemnomorska",
    "type": "match",
    "prompt": "Połącz zabytek lub miejsce z miastem albo państwem.",
    "options": null,
    "left": [
      "Akropol",
      "Koloseum",
      "Sagrada Familia",
      "Bazylika św. Piotra"
    ],
    "right": [
      "Barcelona",
      "Ateny",
      "Watykan",
      "Rzym"
    ],
    "answer": {
      "Akropol": "Ateny",
      "Koloseum": "Rzym",
      "Sagrada Familia": "Barcelona",
      "Bazylika św. Piotra": "Watykan"
    },
    "image": "r03_zabytki_morza_srodziemnego.jpg",
    "explanation": "Do ważnych zabytków należą Akropol w Atenach, Koloseum w Rzymie, Sagrada Familia w Barcelonie i Bazylika św. Piotra w Watykanie."
  },
  {
    "id": "R03_TUR_05",
    "section": "Turystyka śródziemnomorska",
    "type": "true_false",
    "prompt": "W miesiącach letnich w basenie Morza Śródziemnego notuje się najwyższe sumy opadów.",
    "options": null,
    "answer": false,
    "explanation": "Latem występują tam niewielkie opady, a zima jest łagodna i deszczowa."
  },
  {
    "id": "R03_TUR_06",
    "section": "Turystyka śródziemnomorska",
    "type": "sort",
    "prompt": "Pogrupuj elementy związane z turystyką śródziemnomorską.",
    "options": null,
    "items": [
      "słoneczne lato",
      "piaszczyste plaże",
      "Koloseum",
      "karnawał w Wenecji",
      "hotele",
      "lotniska"
    ],
    "categories": [
      "walory przyrodnicze",
      "walory kulturowe",
      "infrastruktura turystyczna"
    ],
    "answer": {
      "walory przyrodnicze": [
        "słoneczne lato",
        "piaszczyste plaże"
      ],
      "walory kulturowe": [
        "Koloseum",
        "karnawał w Wenecji"
      ],
      "infrastruktura turystyczna": [
        "hotele",
        "lotniska"
      ]
    },
    "explanation": "Na atrakcyjność regionu składają się przyroda, kultura oraz infrastruktura ułatwiająca podróżowanie i wypoczynek."
  },
  {
    "id": "R03_TUR_07",
    "section": "Turystyka śródziemnomorska",
    "type": "scenario",
    "prompt": "Turystka wybiera miejsce pielgrzymkowe w regionie Morza Śródziemnego i chce zobaczyć Bazylikę św. Piotra. Dokąd powinna pojechać?",
    "options": [
      "do Watykanu",
      "na Islandię",
      "do Grindaviku",
      "nad Morze Kaspijskie",
      "do Trondheim",
      "na Półwysep Skandynawski"
    ],
    "answer": 0,
    "image": "r03_zabytki_morza_srodziemnego.jpg",
    "explanation": "Bazylika św. Piotra znajduje się w Watykanie, ważnym miejscu kultu religijnego."
  },
  {
    "id": "R03_TUR_08",
    "section": "Turystyka śródziemnomorska",
    "type": "riddle",
    "prompt": "Element środowiska przyrodniczego lub kultury, który skłania turystów do przyjazdu w dane miejsce, to...",
    "options": null,
    "answer": "walor turystyczny",
    "altAnswers": [
      "walor turystyczny",
      "walory turystyczne"
    ],
    "explanation": "Walorem turystycznym może być np. plaża, ciepłe morze, zabytek, lokalna kuchnia albo wydarzenie kulturalne."
  },
  {
    "id": "R03_TUR_09",
    "section": "Turystyka śródziemnomorska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia i zjawiska turystyki śródziemnomorskiej od najdawniejszych do najnowszych.",
    "options": null,
    "items": [
      "pandemia COVID-19 powoduje gwałtowny spadek liczby turystów",
      "rozwijają się starożytne kultury Grecji i Rzymu",
      "turystyka odrabia wcześniejsze straty",
      "kryzys gospodarczy w 2008 roku wpływa na turystykę"
    ],
    "answer": [
      "rozwijają się starożytne kultury Grecji i Rzymu",
      "kryzys gospodarczy w 2008 roku wpływa na turystykę",
      "pandemia COVID-19 powoduje gwałtowny spadek liczby turystów",
      "turystyka odrabia wcześniejsze straty"
    ],
    "image": "r03_zabytki_morza_srodziemnego.jpg",
    "explanation": "Region ma dziedzictwo starożytne, a współczesna turystyka reagowała na kryzys 2008 roku i pandemię COVID-19, po czym odrabiała straty."
  },
  {
    "id": "R03_TUR_10",
    "section": "Turystyka śródziemnomorska",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do walorów przyrodniczych regionu Morza Śródziemnego: makia, ciepłe morze, piaszczyste plaże, lód podbiegunowy.",
    "options": null,
    "answer": "lód podbiegunowy",
    "image": "r03_walory_srodziemnomorskie.jpg",
    "explanation": "Makia, ciepłe morze i plaże są walorami regionu śródziemnomorskiego, natomiast lód podbiegunowy nie jest jego cechą."
  },
  {
    "id": "R03_TUR_11",
    "section": "Turystyka śródziemnomorska",
    "type": "multi_select",
    "prompt": "Zaznacz walory kulturowe regionu Morza Śródziemnego.",
    "options": [
      "ślady kultur Grecji i Rzymu",
      "zabytki, np. Koloseum",
      "wydarzenia kulturalne, np. karnawał w Wenecji",
      "miejsca kultu religijnego",
      "lokalne potrawy",
      "występowanie tajgi"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do walorów kulturowych należą starożytne dziedzictwo, zabytki, wydarzenia, miejsca kultu i lokalna kuchnia."
  },
  {
    "id": "R03_TUR_12",
    "section": "Turystyka śródziemnomorska",
    "type": "scenario",
    "prompt": "Na greckiej wyspie Santoryn widać brak środkowej części wyspy, która zapadła się pod wodę po dawnej erupcji. Jak określa się Santoryn?",
    "options": [
      "drzemiący wulkan",
      "największa wyspa Europy",
      "zimny prąd morski",
      "nizina",
      "źródło ropy",
      "miasto portowe w Danii"
    ],
    "answer": 0,
    "image": "r03_santoryn_wulkan.jpg",
    "explanation": "Santoryn jest przykładem drzemiącego wulkanu; wielka erupcja sprzed około 3600 lat rozerwała stożek wulkaniczny."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz skrajny punkt Europy z jego nazwą.",
    "options": null,
    "left": [
      "zachód",
      "północ",
      "wschód",
      "południe"
    ],
    "right": [
      "Przylądek Nordkinn",
      "Przylądek Marroqui",
      "Przylądek Roca",
      "ujście rzeki Bajdaraty"
    ],
    "answer": {
      "zachód": "Przylądek Roca",
      "północ": "Przylądek Nordkinn",
      "wschód": "ujście rzeki Bajdaraty",
      "południe": "Przylądek Marroqui"
    },
    "image": "r03_granica_europy_azji.jpg",
    "explanation": "Mapa skrajnych punktów Europy podaje Przylądek Roca, Nordkinn, ujście Bajdaraty i Przylądek Marroqui."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Europejskie wybrzeża bez wysp mają długość około __________ tys. km, a półwyspy stanowią około __________ powierzchni Europy.",
    "options": null,
    "answer": [
      "38",
      "jedną czwartą"
    ],
    "altAnswers": [
      [
        "38",
        "38 tys.",
        "38 tysięcy"
      ],
      [
        "jedną czwartą",
        "1/4",
        "ćwierć",
        "jedna czwarta"
      ]
    ],
    "image": "r03_mapa_hipsometryczna_europy.jpg",
    "explanation": "Długość wybrzeży Europy bez wysp wynosi około 38 tys. km, a półwyspy zajmują około jedną czwartą kontynentu."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Gdzie znajdują się najniżej położone tereny Europy?",
    "options": [
      "na Nizinie Nadkaspijskiej",
      "w Alpach",
      "na Półwyspie Apenińskim",
      "na Islandii",
      "w Górach Skandynawskich",
      "na Akropolu"
    ],
    "answer": 0,
    "explanation": "Najniżej położone tereny Europy znajdują się na Nizinie Nadkaspijskiej, około 28 m p.p.m."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary kraju i warunków sprzyjających produkcji energii.",
    "options": [
      "Szwecja - rzeki o dużym spadku",
      "Dania - silne wiatry i położenie nadmorskie",
      "Hiszpania - duże nasłonecznienie",
      "Islandia - gorące wody podziemne",
      "Norwegia - uprawa cytrusów jako źródło prądu",
      "Watykan - największe złoża węgla brunatnego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Łączy się hydroenergetykę ze Szwecją i Norwegią, wiatr z Danią, słońce z Hiszpanią i geotermię z Islandią."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy działania gejzeru.",
    "options": null,
    "items": [
      "woda i para są gwałtownie wypychane na powierzchnię",
      "woda pod ziemią ogrzewa się dzięki bliskości magmy",
      "woda zamienia się w parę i rośnie ciśnienie",
      "wyrzuty powtarzają się w regularnych odstępach czasu"
    ],
    "answer": [
      "woda pod ziemią ogrzewa się dzięki bliskości magmy",
      "woda zamienia się w parę i rośnie ciśnienie",
      "woda i para są gwałtownie wypychane na powierzchnię",
      "wyrzuty powtarzają się w regularnych odstępach czasu"
    ],
    "image": "r03_gejzer_islandia.jpg",
    "explanation": "Gejzer działa dzięki nagrzewaniu wody przez magmę, wzrostowi ciśnienia i gwałtownemu wyrzutowi wody oraz pary."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Miejsce w Europie ma gorące lata, umiarkowanie chłodne zimy, a opady występują głównie zimą. Która strefa klimatyczna pasuje do tego opisu?",
    "options": [
      "podzwrotnikowa",
      "okołobiegunowa",
      "umiarkowana chłodna",
      "klimat górski Tatr",
      "kontynentalna wschodnia",
      "miejska wyspa ciepła"
    ],
    "answer": 0,
    "image": "r03_klimaty_europy.jpg",
    "explanation": "Południowe obszary Europy należą do strefy podzwrotnikowej, z gorącym latem i opadami głównie zimą."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do nazw wulkanów lub wysp wulkanicznych: Santoryn, Etna, Eyjafjallajökull, Mount Everest.",
    "options": null,
    "answer": "Mount Everest",
    "image": "r03_santoryn_wulkan.jpg",
    "explanation": "Santoryn, Etna i Eyjafjallajökull wiążą się z wulkanizmem. Mount Everest jest najwyższą górą świata, ale powstał wskutek fałdowania, a nie działalności wulkanu."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Państwo kościelne na terenie Rzymu, będące ważnym miejscem kultu religijnego, to...",
    "options": null,
    "answer": "Watykan",
    "altAnswers": [
      "Watykan",
      "Państwo Watykańskie",
      "Watykanu"
    ],
    "explanation": "Watykan jest przykładem miejsca kultu religijnego w regionie Morza Śródziemnego."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Węgiel kamienny dawniej stanowił główne źródło energii w Europie, ale obecnie jego wydobycie i udział w produkcji energii spadają.",
    "options": null,
    "answer": true,
    "explanation": "Znaczenie węgla spada, choć część krajów nadal posiada kopalnie i elektrownie węglowe."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj skutki do czynników klimatotwórczych.",
    "options": null,
    "items": [
      "chłodniejsza północ Europy",
      "cieplejsze południe Europy",
      "wyższa temperatura w Europie Zachodniej",
      "większe opady przy ciepłym prądzie",
      "niższa temperatura w górach",
      "Alpy utrudniają napływ mas powietrza z południa"
    ],
    "categories": [
      "szerokość geograficzna",
      "prądy morskie",
      "wysokość i rzeźba terenu"
    ],
    "answer": {
      "szerokość geograficzna": [
        "chłodniejsza północ Europy",
        "cieplejsze południe Europy"
      ],
      "prądy morskie": [
        "wyższa temperatura w Europie Zachodniej",
        "większe opady przy ciepłym prądzie"
      ],
      "wysokość i rzeźba terenu": [
        "niższa temperatura w górach",
        "Alpy utrudniają napływ mas powietrza z południa"
      ]
    },
    "explanation": "Różne czynniki klimatotwórcze wpływają na temperaturę, opady i ruch mas powietrza w Europie."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Kraj europejski chce ograniczyć zależność od importowanej ropy, gazu i paliwa do elektrowni jądrowych. Które działanie najlepiej pasuje do transformacji energetycznej?",
    "options": [
      "zwiększanie udziału odnawialnych źródeł energii",
      "rezygnacja z prądu elektrycznego",
      "zastąpienie wszystkich rzek autostradami",
      "budowa plaż na Islandii",
      "wyznaczenie nowej granicy z Azją",
      "ograniczenie transportu rzecznego Wołgi"
    ],
    "answer": 0,
    "image": "r03_zrodla_energii_europa.jpg",
    "explanation": "Transformacja energetyczna polega na odchodzeniu od źródeł nieodnawialnych i zwiększaniu wykorzystania OZE."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zagrożenia związane z erupcjami wulkanicznymi na Islandii.",
    "options": [
      "pyły i popioły zagrażające zdrowiu",
      "utrudnienia w komunikacji lotniczej",
      "potoki lawy niszczące domy",
      "powodzie po stopieniu śniegu i lodu",
      "większe zbiory oliwek",
      "łagodna zima nad Morzem Śródziemnym"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_erupcja_eyjafjallajokull.jpg",
    "explanation": "Erupcje mogą powodować popioły, problemy lotnicze, zniszczenia przez lawę oraz powodzie po stopieniu lodu i śniegu."
  }
];

const KID_PROMPTS = {
  "R03_POL_01": "Jak duża jest Europa w porównaniu z innymi kontynentami?",
  "R03_POL_09": "Jak nazywa się bardzo kręte wybrzeże?",
  "R03_KLI_01": "Co to jest klimat?",
  "R03_KLI_04": "Jak Prąd Północnoatlantycki wpływa na zachód Europy?",
  "R03_ISL_01": "Co to jest litosfera?",
  "R03_ISL_05": "Jak nazywa się gorące źródło wyrzucające wodę?",
  "R03_ENE_03": "Które źródła energii są odnawialne?",
  "R03_ENE_08": "Co oznacza skrót OZE?",
  "R03_TUR_01": "Dlaczego turyści chętnie jadą nad Morze Śródziemne?",
  "R03_TUR_08": "Co to jest walor turystyczny?",
  "R03_HARD_05": "W jakiej kolejności działa gejzer?",
  "R03_HARD_11": "Jak kraje mogą mniej zależeć od sprowadzanych paliw?"
};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Europa - środowisko przyrodnicze i jego zasoby",
  "icon": "🌍",
  "sectionOrder": [
    "Położenie i krajobrazy Europy",
    "Klimaty Europy",
    "Islandia - wyspa ognia",
    "Energia w Europie",
    "Turystyka śródziemnomorska"
  ],
  "sectionIcons": {
    "Położenie i krajobrazy Europy": "🗺️",
    "Klimaty Europy": "🌦️",
    "Islandia - wyspa ognia": "🌋",
    "Energia w Europie": "⚡",
    "Turystyka śródziemnomorska": "🏖️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
