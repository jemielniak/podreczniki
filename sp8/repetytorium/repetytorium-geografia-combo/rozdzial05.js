// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SAS  = Sąsiedzi Polski
//   MIA  = Strefy podmiejskie i powodzie
//   AZJ  = Azja i granice płyt litosfery
//   AFR  = Afryka – środowisko i rozwój
//   AME  = Ameryki – przyroda i gospodarka
//   AUS  = Australia i obszary polarne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_SAS_01",
    "section": "Sąsiedzi Polski",
    "type": "single_choice",
    "prompt": "Z iloma państwami graniczy Polska?",
    "options": [
      "Sześcioma",
      "Siedmioma",
      "Ośmioma",
      "Pięcioma",
      "Dziewięcioma",
      "Dziesięcioma"
    ],
    "image": "r05_sasiedzi_mapa.jpg",
    "answer": 1,
    "explanation": "Polska ma siedmiu sąsiadów lądowych: Niemcy, Czechy, Słowację, Ukrainę, Białoruś, Litwę i Rosję."
  },
  {
    "id": "R05_SAS_02",
    "section": "Sąsiedzi Polski",
    "type": "multi_select",
    "prompt": "Wskaż państwa sąsiadujące z Polską.",
    "options": [
      "Czechy",
      "Węgry",
      "Litwa",
      "Rumunia",
      "Białoruś",
      "Niemcy"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Polska graniczy z Czechami, Litwą, Białorusią i Niemcami, ale nie z Węgrami ani Rumunią."
  },
  {
    "id": "R05_SAS_03",
    "section": "Sąsiedzi Polski",
    "type": "true_false",
    "prompt": "Niemcy były w 2019 roku największym partnerem Polski zarówno w eksporcie, jak i imporcie.",
    "options": null,
    "answer": true,
    "explanation": "W 2019 r. Niemcy były największym partnerem Polski zarówno w eksporcie, jak i imporcie."
  },
  {
    "id": "R05_SAS_04",
    "section": "Sąsiedzi Polski",
    "type": "fill_in",
    "prompt": "Sprzedaż towarów i usług za granicę to __________, a ich zakup z zagranicy to __________.",
    "options": null,
    "answer": [
      "eksport",
      "import"
    ],
    "explanation": "Eksport to sprzedaż towarów i usług za granicę, a import oznacza ich zakup z zagranicy."
  },
  {
    "id": "R05_SAS_05",
    "section": "Sąsiedzi Polski",
    "type": "match",
    "prompt": "Połącz atrakcję turystyczną z państwem.",
    "options": null,
    "left": [
      "Most Karola",
      "Zamek Spiski",
      "Ostra Brama w Wilnie",
      "Zamek w Mirze"
    ],
    "right": [
      "Białoruś",
      "Litwa",
      "Słowacja",
      "Czechy"
    ],
    "answer": {
      "Most Karola": "Czechy",
      "Zamek Spiski": "Słowacja",
      "Ostra Brama w Wilnie": "Litwa",
      "Zamek w Mirze": "Białoruś"
    },
    "explanation": "Most Karola znajduje się w Pradze, Zamek Spiski na Słowacji, Ostra Brama w Wilnie, a Zamek w Mirze na Białorusi."
  },
  {
    "id": "R05_SAS_06",
    "section": "Sąsiedzi Polski",
    "type": "single_choice",
    "prompt": "Jakie pasmo górskie Polska dzieli ze Słowacją?",
    "options": [
      "Sudety",
      "Karpaty",
      "Alpy",
      "Pireneje",
      "Ural",
      "Góry Skandynawskie"
    ],
    "answer": 1,
    "explanation": "Granica polsko-słowacka przebiega przez Karpaty, a granica polsko-czeska m.in. przez Sudety."
  },
  {
    "id": "R05_SAS_07",
    "section": "Sąsiedzi Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo, które nie jest sąsiadem Polski: Litwa, Ukraina, Austria, Rosja.",
    "options": null,
    "answer": "Austria",
    "explanation": "Austria nie graniczy z Polską; Litwa, Ukraina i Rosja należą do siedmiu sąsiadów."
  },
  {
    "id": "R05_SAS_08",
    "section": "Sąsiedzi Polski",
    "type": "riddle",
    "prompt": "W jakim mieście znajduje się Ostra Brama?",
    "options": null,
    "altAnswers": [
      "Wilno",
      "Wilnie"
    ],
    "answer": "Wilno",
    "explanation": "Ostra Brama to słynny zabytek Wilna, związany ze Starym Miastem wpisanym na listę UNESCO."
  },
  {
    "id": "R05_SAS_09",
    "section": "Sąsiedzi Polski",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do państw.",
    "options": null,
    "items": [
      "Zamek w Trokach",
      "Zamek w Nieświeżu",
      "Czeski Krumlov",
      "Mierzeja Kurońska",
      "Zamek w Mirze",
      "Plac Wacława w Pradze"
    ],
    "categories": [
      "Litwa",
      "Białoruś",
      "Czechy"
    ],
    "answer": {
      "Litwa": [
        "Zamek w Trokach",
        "Mierzeja Kurońska"
      ],
      "Białoruś": [
        "Zamek w Nieświeżu",
        "Zamek w Mirze"
      ],
      "Czechy": [
        "Czeski Krumlov",
        "Plac Wacława w Pradze"
      ]
    },
    "explanation": "Troki i Mierzeja Kurońska są na Litwie; Nieśwież i Mir leżą na Białorusi; Czeski Krumlov i Plac Wacława w Czechach."
  },
  {
    "id": "R05_SAS_10",
    "section": "Sąsiedzi Polski",
    "type": "multi_select",
    "prompt": "Które surowce są ważnymi bogactwami mineralnymi Rosji?",
    "options": [
      "Ropa naftowa",
      "Gaz ziemny",
      "Węgiel kamienny",
      "Kawa",
      "Bawełna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ważne bogactwa mineralne Rosji obejmują m.in. ropę naftową, gaz ziemny i węgiel kamienny; gospodarka Rosji opiera się w znacznym stopniu na wydobyciu i eksporcie surowców."
  },
  {
    "id": "R05_MIA_01",
    "section": "Strefy podmiejskie i powodzie",
    "type": "single_choice",
    "prompt": "Jak nazywa się obszar położony bezpośrednio przy dużym mieście, na który napływają nowi mieszkańcy?",
    "options": [
      "Śródmieście",
      "Strefa podmiejska",
      "Centrum historyczne",
      "Dolina rzeczna",
      "Obszar górniczy",
      "Pas nadmorski"
    ],
    "image": "r05_strefa_podmiejska.jpg",
    "answer": 1,
    "explanation": "Strefy podmiejskie obejmują wsie i mniejsze miasta w sąsiedztwie dużych miast; szybko rośnie w nich liczba ludności."
  },
  {
    "id": "R05_MIA_02",
    "section": "Strefy podmiejskie i powodzie",
    "type": "true_false",
    "prompt": "Strefy podmiejskie dużych miast w Polsce należą do obszarów, na których szybko przybywa ludności.",
    "options": null,
    "answer": true,
    "explanation": "W pobliżu dużych miast występuje intensywny napływ nowych mieszkańców."
  },
  {
    "id": "R05_MIA_03",
    "section": "Strefy podmiejskie i powodzie",
    "type": "multi_select",
    "prompt": "Jakie zmiany zachodzą w strefach podmiejskich?",
    "options": [
      "Zabudowa użytków rolnych",
      "Napływ ludności",
      "Rozwój osiedli domów jednorodzinnych",
      "Całkowity zanik dróg dojazdowych",
      "Budowa centrów logistycznych"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "W strefach podmiejskich grunty rolne ustępują zabudowie mieszkaniowej oraz obiektom usługowym i logistycznym, a liczba mieszkańców rośnie."
  },
  {
    "id": "R05_MIA_04",
    "section": "Strefy podmiejskie i powodzie",
    "type": "fill_in",
    "prompt": "Odsetek ludności mieszkającej w miastach określa wskaźnik __________.",
    "options": null,
    "answer": [
      "urbanizacji"
    ],
    "explanation": "Wskaźnik urbanizacji określa udział ludności miejskiej w ogólnej liczbie mieszkańców."
  },
  {
    "id": "R05_MIA_05",
    "section": "Strefy podmiejskie i powodzie",
    "type": "scenario",
    "prompt": "Młode małżeństwo przeprowadza się z dużego miasta do pobliskiej wsi z dogodnym dojazdem. Jaką zmianę ilustruje ta sytuacja?",
    "options": [
      "Rozwój strefy podmiejskiej",
      "Wyludnienie przedmieść",
      "Emigrację zagraniczną",
      "Powstanie pustyni",
      "Zmniejszenie powierzchni zabudowy"
    ],
    "image": "r05_strefa_podmiejska.jpg",
    "answer": 0,
    "explanation": "Napływ mieszkańców z miasta do blisko położonych miejscowości jest charakterystyczny dla rozwoju stref podmiejskich."
  },
  {
    "id": "R05_MIA_06",
    "section": "Strefy podmiejskie i powodzie",
    "type": "single_choice",
    "prompt": "Kiedy wezbranie rzeki nazywamy powodzią?",
    "options": [
      "Gdy woda jest przejrzysta",
      "Gdy wezbranie powoduje straty",
      "Gdy rzeka ma ujście do morza",
      "Gdy następuje odpływ",
      "Gdy pada lekki deszcz",
      "Gdy rzeka meandruje"
    ],
    "answer": 1,
    "explanation": "Powódź to wezbranie powodujące straty, a nie sam wzrost stanu wody."
  },
  {
    "id": "R05_MIA_07",
    "section": "Strefy podmiejskie i powodzie",
    "type": "true_false",
    "prompt": "Każde wezbranie wody w rzece jest automatycznie powodzią.",
    "options": null,
    "answer": false,
    "explanation": "Wezbranie może być zjawiskiem naturalnym; o powodzi mówimy, kiedy powoduje straty."
  },
  {
    "id": "R05_MIA_08",
    "section": "Strefy podmiejskie i powodzie",
    "type": "sort",
    "prompt": "Podziel działania na zwiększające ryzyko powodzi i pomagające je ograniczyć.",
    "options": null,
    "items": [
      "Wycinka lasów",
      "Betonowanie dużych powierzchni",
      "Tworzenie polderów",
      "Ochrona terenów zalewowych",
      "Osuszanie mokradeł",
      "Zabudowa terenów zalewowych",
      "Budowa zbiorników retencyjnych"
    ],
    "categories": [
      "Zwiększają ryzyko",
      "Ograniczają ryzyko"
    ],
    "image": "r05_polder_nadrzeczny.jpg",
    "answer": {
      "Zwiększają ryzyko": [
        "Wycinka lasów",
        "Osuszanie mokradeł",
        "Betonowanie dużych powierzchni",
        "Zabudowa terenów zalewowych"
      ],
      "Ograniczają ryzyko": [
        "Tworzenie polderów",
        "Budowa zbiorników retencyjnych",
        "Ochrona terenów zalewowych"
      ]
    },
    "explanation": "Lasy i mokradła magazynują wodę, natomiast beton utrudnia wsiąkanie. Poldery i zbiorniki pomagają w retencji wody."
  },
  {
    "id": "R05_MIA_09",
    "section": "Strefy podmiejskie i powodzie",
    "type": "riddle",
    "prompt": "Jak nazywa się niezabudowany teren doliny rzeki, na który można kontrolowanie skierować wodę podczas wezbrania?",
    "options": null,
    "altAnswers": [
      "polder przeciwpowodziowy",
      "polder"
    ],
    "answer": "polder przeciwpowodziowy",
    "explanation": "Polder przeciwpowodziowy pełni rolę obszaru zalewowego umożliwiającego retencję wód."
  },
  {
    "id": "R05_MIA_10",
    "section": "Strefy podmiejskie i powodzie",
    "type": "match",
    "prompt": "Połącz termin z jego znaczeniem.",
    "options": null,
    "left": [
      "Wezbranie",
      "Powódź",
      "Retencja",
      "Cofka"
    ],
    "right": [
      "Wypychanie wody rzeki w górę biegu",
      "Gromadzenie wody na dłuższy czas",
      "Wezbranie powodujące straty",
      "Wzrost stanu wody w rzece"
    ],
    "answer": {
      "Wezbranie": "Wzrost stanu wody w rzece",
      "Powódź": "Wezbranie powodujące straty",
      "Retencja": "Gromadzenie wody na dłuższy czas",
      "Cofka": "Wypychanie wody rzeki w górę biegu"
    },
    "explanation": "Wezbranie to wzrost poziomu wody; powódź oznacza straty, retencja przechowuje wodę, a cofkę mogą wywołać silne wiatry u ujścia rzeki."
  },
  {
    "id": "R05_AZJ_01",
    "section": "Azja i granice płyt litosfery",
    "type": "single_choice",
    "prompt": "Który łańcuch górski jest najwyższy na Ziemi?",
    "options": [
      "Andy",
      "Alpy",
      "Himalaje",
      "Góry Skaliste",
      "Ural",
      "Atlas"
    ],
    "image": "r05_azja_rzezba_terenu.jpg",
    "answer": 2,
    "explanation": "Himalaje obejmują Mount Everest i powstały wskutek zderzenia płyty indyjskiej z euroazjatycką."
  },
  {
    "id": "R05_AZJ_02",
    "section": "Azja i granice płyt litosfery",
    "type": "fill_in",
    "prompt": "Najgłębsze jezioro świata to __________, a największe powierzchniowo jezioro to __________.",
    "options": null,
    "answer": [
      "Bajkał",
      "Morze Kaspijskie"
    ],
    "explanation": "Bajkał ma maksymalnie około 1620 m głębokości, zaś Morze Kaspijskie jest największym jeziorem pod względem powierzchni."
  },
  {
    "id": "R05_AZJ_03",
    "section": "Azja i granice płyt litosfery",
    "type": "multi_select",
    "prompt": "Wybierz prawdziwe informacje o Azji.",
    "options": [
      "Zajmuje ponad 44 mln km²",
      "Znajdują się w niej Himalaje",
      "Półwysep Arabski jest największym półwyspem świata",
      "Jest najmniejszym kontynentem",
      "Morze Martwe leży w depresji"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Azja ma powierzchnię ponad 44 mln km²; znajdują się tam m.in. Himalaje, Półwysep Arabski i depresja Morza Martwego."
  },
  {
    "id": "R05_AZJ_04",
    "section": "Azja i granice płyt litosfery",
    "type": "riddle",
    "prompt": "Jak nazywa się najwyższa wyżyna świata leżąca w Azji?",
    "options": null,
    "altAnswers": [
      "Wyżyna Tybetańska",
      "Tybetańska"
    ],
    "answer": "Wyżyna Tybetańska",
    "explanation": "Wyżyna Tybetańska leży na wysokości około 4–5 tys. m n.p.m."
  },
  {
    "id": "R05_AZJ_05",
    "section": "Azja i granice płyt litosfery",
    "type": "scenario",
    "prompt": "Wilgotny monsun znad Oceanu Indyjskiego napływa na południowe stoki Himalajów. Gdzie notuje się wyjątkowo obfite opady?",
    "options": [
      "W Czerapuńdżi",
      "W Ojmiakonie",
      "Na Półwyspie Arabskim",
      "W Dolinie Jordanu",
      "Na Wyżynie Tybetańskiej"
    ],
    "image": "r05_monsun_deszcz.jpg",
    "answer": 0,
    "explanation": "Czerapuńdżi w Indiach ma bardzo wysokie opady dzięki wilgotnemu monsunowi i barierze górskiej Himalajów."
  },
  {
    "id": "R05_AZJ_06",
    "section": "Azja i granice płyt litosfery",
    "type": "single_choice",
    "prompt": "Jaki kierunek rozwoju jest charakterystyczny dla współczesnego przemysłu Chin?",
    "options": [
      "Rezygnację z robotyki",
      "Wzrost innowacyjności i zaawansowanych technologii",
      "Zanik internetu",
      "Ograniczenie badań nad AI",
      "Wyłącznie wydobycie węgla",
      "Zamknięcie handlu zagranicznego"
    ],
    "answer": 1,
    "explanation": "W Chinach rozwijają się m.in. robotyka, sztuczna inteligencja, przemysł kosmiczny i energooszczędne technologie produkcji."
  },
  {
    "id": "R05_AZJ_07",
    "section": "Azja i granice płyt litosfery",
    "type": "true_false",
    "prompt": "Wyspiarskie położenie Japonii sprzyja rozwojowi portów i floty morskiej.",
    "options": null,
    "answer": true,
    "explanation": "Wyspiarskie położenie Japonii sprzyja rozwojowi portów, żeglugi i handlu międzynarodowego."
  },
  {
    "id": "R05_AZJ_08",
    "section": "Azja i granice płyt litosfery",
    "type": "match",
    "prompt": "Połącz państwo lub region z charakterystyczną cechą.",
    "options": null,
    "left": [
      "Chiny",
      "Japonia",
      "Bliski Wschód",
      "Półwysep Arabski"
    ],
    "right": [
      "Krajobrazy gorących pustyń",
      "Znaczne zasoby ropy naftowej",
      "Budownictwo dostosowane do trzęsień ziemi",
      "Rozwój robotyki i sztucznej inteligencji"
    ],
    "answer": {
      "Chiny": "Rozwój robotyki i sztucznej inteligencji",
      "Japonia": "Budownictwo dostosowane do trzęsień ziemi",
      "Bliski Wschód": "Znaczne zasoby ropy naftowej",
      "Półwysep Arabski": "Krajobrazy gorących pustyń"
    },
    "explanation": "Chiny rozwijają innowacje, Japonia budownictwo odporne na trzęsienia ziemi, a Bliski Wschód i Półwysep Arabski są związane z wydobyciem ropy naftowej oraz krajobrazem pustynnym."
  },
  {
    "id": "R05_AZJ_09",
    "section": "Azja i granice płyt litosfery",
    "type": "fill_in",
    "prompt": "Dominującą religią w państwach Bliskiego Wschodu jest __________.",
    "options": null,
    "answer": [
      "islam"
    ],
    "explanation": "Islam jest dominującą religią, a język arabski jest szeroko używany na Bliskim Wschodzie."
  },
  {
    "id": "R05_AZJ_10",
    "section": "Azja i granice płyt litosfery",
    "type": "single_choice",
    "prompt": "Jak nazywa się proces wsuwania płyty oceanicznej pod płytę kontynentalną?",
    "options": [
      "Ryft",
      "Kolizja",
      "Subdukcja",
      "Erozja",
      "Denudacja",
      "Akumulacja"
    ],
    "image": "r05_granice_plyt.jpg",
    "answer": 2,
    "explanation": "Subdukcja to wsuwanie jednej płyty pod drugą; jest związana m.in. z rowami oceanicznymi i trzęsieniami ziemi."
  },
  {
    "id": "R05_AZJ_11",
    "section": "Azja i granice płyt litosfery",
    "type": "odd_one_out",
    "prompt": "Wskaż zjawisko niezwiązane bezpośrednio z granicami płyt litosfery: kolizja płyt, subdukcja, ryft, urbanizacja.",
    "options": null,
    "answer": "urbanizacja",
    "explanation": "Kolizja, subdukcja i ryft są zjawiskami tektonicznymi, a urbanizacja dotyczy wzrostu znaczenia miast."
  },
  {
    "id": "R05_AZJ_12",
    "section": "Azja i granice płyt litosfery",
    "type": "true_false",
    "prompt": "Islandia leży w strefie rozsuwania się płyt litosfery.",
    "options": null,
    "image": "r05_islandia_gejzer.jpg",
    "answer": true,
    "explanation": "Islandia leży na granicy płyty północnoamerykańskiej i euroazjatyckiej, w strefie ryftowej."
  },
  {
    "id": "R05_AZJ_13",
    "section": "Azja i granice płyt litosfery",
    "type": "sort",
    "prompt": "Przyporządkuj opis do rodzaju granicy płyt.",
    "options": null,
    "items": [
      "Płyty odsuwają się od siebie",
      "Zderzają się dwie płyty kontynentalne",
      "Jedna płyta wsuwa się pod drugą",
      "Wielkie Rowy Afrykańskie",
      "Powstawanie Himalajów",
      "Powstawanie rowów oceanicznych"
    ],
    "categories": [
      "Ryft",
      "Kolizja",
      "Subdukcja"
    ],
    "answer": {
      "Ryft": [
        "Płyty odsuwają się od siebie",
        "Wielkie Rowy Afrykańskie"
      ],
      "Kolizja": [
        "Zderzają się dwie płyty kontynentalne",
        "Powstawanie Himalajów"
      ],
      "Subdukcja": [
        "Jedna płyta wsuwa się pod drugą",
        "Powstawanie rowów oceanicznych"
      ]
    },
    "explanation": "Ryft jest granicą rozbieżną, kolizja oznacza zderzanie się płyt kontynentalnych, a subdukcja – podsuwanie się płyty pod inną."
  },
  {
    "id": "R05_AZJ_14",
    "section": "Azja i granice płyt litosfery",
    "type": "scenario",
    "prompt": "Uczeń przygotowuje zestaw rzeczy potrzebnych podczas trzęsienia ziemi w Japonii. Który zestaw zawiera przydatne wyposażenie awaryjne?",
    "options": [
      "Woda, suchary, radio i baterie",
      "Wyłącznie parasol",
      "Narty, kijki i gogle",
      "Sprzęt nurkowy i płetwy",
      "Wyłącznie laptop"
    ],
    "answer": 0,
    "explanation": "Japoński „quake kit” zawiera m.in. wodę, suchary, baterie, radio lub telefon oraz podstawowe przedmioty codziennego użytku."
  },
  {
    "id": "R05_AFR_01",
    "section": "Afryka – środowisko i rozwój",
    "type": "single_choice",
    "prompt": "Które dwie linie geograficzne przecinają Afrykę i dzielą ją między cztery półkule?",
    "options": [
      "Równik i południk zero",
      "Zwrotnik Raka i 180°",
      "Koło podbiegunowe północne i 90°E",
      "Zwrotnik Koziorożca i 180°",
      "Koło podbiegunowe południowe i 0°",
      "Równik i 180°"
    ],
    "image": "r05_afryka_strefy.jpg",
    "answer": 0,
    "explanation": "Afrykę przecinają równik oraz południk zerowy."
  },
  {
    "id": "R05_AFR_02",
    "section": "Afryka – środowisko i rozwój",
    "type": "true_false",
    "prompt": "Pasaty wieją od wyżów zwrotnikowych ku niżowi równikowemu.",
    "options": null,
    "answer": true,
    "explanation": "Pasaty są stałymi wiatrami, które kierują się od wyżów zwrotnikowych ku równikowemu niżowi."
  },
  {
    "id": "R05_AFR_03",
    "section": "Afryka – środowisko i rozwój",
    "type": "multi_select",
    "prompt": "Jakie zjawiska nasilają pustynnienie Sahelu?",
    "options": [
      "Nadmierny wypas",
      "Wycinka drzew na opał",
      "Nadmierny pobór wody",
      "Długotrwałe susze",
      "Zwiększanie powierzchni lasów"
    ],
    "image": "r05_sahel_krajobraz.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W Sahelu pustynnienie nasila m.in. wypas zwierząt, pozyskiwanie drewna, pobór wody i susze."
  },
  {
    "id": "R05_AFR_04",
    "section": "Afryka – środowisko i rozwój",
    "type": "fill_in",
    "prompt": "Strefę przejściową między Saharą a sawanną nazywa się __________.",
    "options": null,
    "altAnswers": [
      [
        "Sahelem",
        "Sahel"
      ]
    ],
    "answer": [
      "Sahelem"
    ],
    "explanation": "Sahel leży pomiędzy pustynią na północy a sawanną na południu."
  },
  {
    "id": "R05_AFR_05",
    "section": "Afryka – środowisko i rozwój",
    "type": "riddle",
    "prompt": "Jak nazywa się stały wiatr wiejący w strefie międzyzwrotnikowej od wyżu zwrotnikowego w stronę równika?",
    "options": null,
    "altAnswers": [
      "pasat",
      "pasaty"
    ],
    "answer": "pasat",
    "explanation": "Pasaty są częścią cyrkulacji międzyzwrotnikowej."
  },
  {
    "id": "R05_AFR_06",
    "section": "Afryka – środowisko i rozwój",
    "type": "match",
    "prompt": "Połącz miejsce w Afryce z charakterystyczną dla niego informacją.",
    "options": null,
    "left": [
      "Sahel",
      "Etiopia",
      "Kenia",
      "Kanał Mozambicki"
    ],
    "right": [
      "Wpływ ciepłego prądu morskiego na opady",
      "Rozwój turystyki safari",
      "Przykład problemów niedożywienia",
      "Obszar zagrożony pustynnieniem"
    ],
    "answer": {
      "Sahel": "Obszar zagrożony pustynnieniem",
      "Etiopia": "Przykład problemów niedożywienia",
      "Kenia": "Rozwój turystyki safari",
      "Kanał Mozambicki": "Wpływ ciepłego prądu morskiego na opady"
    },
    "explanation": "Sahel zmaga się z pustynnieniem, Etiopia z problemem niedożywienia, Kenia ma liczne walory turystyczne, a w pobliżu Kanału Mozambickiego płynie ciepły prąd morski."
  },
  {
    "id": "R05_AFR_07",
    "section": "Afryka – środowisko i rozwój",
    "type": "sort",
    "prompt": "Podziel atrakcje turystyczne Kenii na walory przyrodnicze i kulturowe.",
    "options": null,
    "items": [
      "Safari na sawannie",
      "Lasy namorzynowe",
      "Wioski Masajów",
      "Stare miasto na wyspie Lamu",
      "Rafa koralowa",
      "Parki narodowe",
      "Fort Jesus w Mombasie"
    ],
    "categories": [
      "Przyrodnicze",
      "Kulturowe"
    ],
    "answer": {
      "Przyrodnicze": [
        "Safari na sawannie",
        "Rafa koralowa",
        "Lasy namorzynowe",
        "Parki narodowe"
      ],
      "Kulturowe": [
        "Wioski Masajów",
        "Fort Jesus w Mombasie",
        "Stare miasto na wyspie Lamu"
      ]
    },
    "explanation": "Safari, parki i przyroda wybrzeża to walory naturalne; wioski Masajów oraz historyczne budowle są walorami kulturowymi."
  },
  {
    "id": "R05_AFR_08",
    "section": "Afryka – środowisko i rozwój",
    "type": "scenario",
    "prompt": "Organizacja pomaga rolnikom w Etiopii po suszy i pladze szarańczy. Jaki problem społeczny stara się ograniczyć?",
    "options": [
      "Niedożywienie",
      "Nadmierną urbanizację",
      "Zanieczyszczenie Arktyki",
      "Cofkę morską",
      "Subdukcję"
    ],
    "answer": 0,
    "explanation": "Susze i plagi szarańczy należą do przyczyn niedożywienia w Etiopii."
  },
  {
    "id": "R05_AFR_09",
    "section": "Afryka – środowisko i rozwój",
    "type": "odd_one_out",
    "prompt": "Wskaż zjawisko, które nie jest przyczyną niedożywienia w Etiopii: susze, plagi szarańczy, pustynnienie, rozwój turystyki safari.",
    "options": null,
    "answer": "rozwój turystyki safari",
    "explanation": "Susze, szarańcza i pustynnienie utrudniają produkcję żywności, natomiast safari jest atrakcją turystyczną Kenii."
  },
  {
    "id": "R05_AFR_10",
    "section": "Afryka – środowisko i rozwój",
    "type": "true_false",
    "prompt": "Afryka jest kontynentem całkowicie pozbawionym nowoczesnych technologii przemysłowych.",
    "options": null,
    "answer": false,
    "explanation": "W wielu państwach Afryki rozwijają się parki technologiczne i odnawialne źródła energii, dlatego taki obraz kontynentu jest nieprawdziwy."
  },
  {
    "id": "R05_AME_01",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "single_choice",
    "prompt": "Jakie góry rozciągają się wzdłuż zachodniego wybrzeża Ameryki Południowej?",
    "options": [
      "Appalachy",
      "Andy",
      "Kordyliery",
      "Alpy",
      "Himalaje",
      "Atlas"
    ],
    "image": "r05_ameryki_rzezba.jpg",
    "answer": 1,
    "explanation": "Wzdłuż zachodniego wybrzeża Ameryki Południowej biegną młode góry fałdowe – Andy."
  },
  {
    "id": "R05_AME_02",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "multi_select",
    "prompt": "Wybierz niziny znajdujące się w Ameryce Południowej.",
    "options": [
      "Nizina Amazonki",
      "Nizina Orinoko",
      "Nizina La Platy",
      "Nizina Zachodniosyberyjska",
      "Nizina Gangesu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wnętrze Ameryki Południowej zajmują m.in. niziny Orinoko, Amazonki i La Platy."
  },
  {
    "id": "R05_AME_03",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "fill_in",
    "prompt": "Duże zespoły połączonych aglomeracji miejskich Ameryki Północnej nazywa się __________.",
    "options": null,
    "altAnswers": [
      [
        "megalopolis"
      ]
    ],
    "answer": [
      "megalopolis"
    ],
    "explanation": "Megalopolis to zespoły sąsiadujących ze sobą aglomeracji tworzące bardzo rozległe obszary zurbanizowane."
  },
  {
    "id": "R05_AME_04",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "match",
    "prompt": "Połącz krainę lub obszar z jego położeniem.",
    "options": null,
    "left": [
      "Andy",
      "Appalachy",
      "Kordyliery",
      "Nizina Amazonki"
    ],
    "right": [
      "Środek Ameryki Południowej",
      "Zachód Ameryki Północnej",
      "Wschód Ameryki Północnej",
      "Zachód Ameryki Południowej"
    ],
    "answer": {
      "Andy": "Zachód Ameryki Południowej",
      "Appalachy": "Wschód Ameryki Północnej",
      "Kordyliery": "Zachód Ameryki Północnej",
      "Nizina Amazonki": "Środek Ameryki Południowej"
    },
    "explanation": "Andy leżą w zachodniej części Ameryki Południowej, Kordyliery i Appalachy w Ameryce Północnej, a Nizina Amazonki w centrum Ameryki Południowej."
  },
  {
    "id": "R05_AME_05",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "true_false",
    "prompt": "Zimne prądy morskie mogą zmniejszać opady i utrudniać osadnictwo na wybrzeżach Ameryk.",
    "options": null,
    "answer": true,
    "explanation": "Zimne prądy morskie sprzyjają osuszaniu wybrzeży, a ciepłe prądy podwyższają temperaturę i mogą zwiększać opady."
  },
  {
    "id": "R05_AME_06",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "single_choice",
    "prompt": "Co na wschodzie Kanady przesuwa północną granicę upraw ku południu?",
    "options": [
      "Ciepły Prąd Alaski",
      "Zimny Prąd Labradorski",
      "Prąd Mozambicki",
      "Pasaty znad Sahary",
      "Wyłącznie erupcje wulkanów",
      "Stały napływ monsunu"
    ],
    "answer": 1,
    "explanation": "Zimny Prąd Labradorski obniża temperaturę powietrza na wschodzie Kanady, ograniczając możliwość upraw."
  },
  {
    "id": "R05_AME_07",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "scenario",
    "prompt": "Nad ciepłym oceanem w szerokościach zwrotnikowych rozwija się bardzo rozległy wir atmosferyczny o średnicy setek kilometrów. Jakie zjawisko opisano?",
    "options": [
      "Huragan (cyklon)",
      "Ryft",
      "Megalopolis",
      "Polder",
      "Gejzer"
    ],
    "image": "r05_huragan_z_lotu.jpg",
    "answer": 0,
    "explanation": "Huragany powstają nad ciepłymi oceanami i mają znacznie większy zasięg niż tornada."
  },
  {
    "id": "R05_AME_08",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "riddle",
    "prompt": "Jak nazywa się amerykański region uznawany za najstarszą technopolię świata?",
    "options": null,
    "altAnswers": [
      "Dolina Krzemowa",
      "Silicon Valley"
    ],
    "answer": "Dolina Krzemowa",
    "explanation": "Dolina Krzemowa to technopolia związana m.in. z Uniwersytetem Stanforda i przemysłem high-tech."
  },
  {
    "id": "R05_AME_09",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "multi_select",
    "prompt": "Jakie są skutki wylesiania Amazonii?",
    "options": [
      "Utrata bioróżnorodności",
      "Wyjaławianie gleb",
      "Zmiany klimatyczne",
      "Obniżanie poziomu wód gruntowych",
      "Zwiększenie powierzchni lasów równikowych"
    ],
    "image": "r05_amazonia_wylesianie.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wylesianie Amazonii zaburza klimat i obieg wody oraz szkodzi glebie i różnorodności biologicznej."
  },
  {
    "id": "R05_AME_10",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "sort",
    "prompt": "Przyporządkuj terminy do Ameryk.",
    "options": null,
    "items": [
      "Kordyliery",
      "Dolina Krzemowa",
      "Nizina Amazonki",
      "Appalachy",
      "Andy",
      "Nizina La Platy"
    ],
    "categories": [
      "Ameryka Północna",
      "Ameryka Południowa"
    ],
    "answer": {
      "Ameryka Północna": [
        "Kordyliery",
        "Appalachy",
        "Dolina Krzemowa"
      ],
      "Ameryka Południowa": [
        "Andy",
        "Nizina Amazonki",
        "Nizina La Platy"
      ]
    },
    "explanation": "Kordyliery i Appalachy znajdują się w Ameryce Północnej, natomiast Andy i niziny Amazonki oraz La Platy leżą w Ameryce Południowej."
  },
  {
    "id": "R05_AME_11",
    "section": "Ameryki – przyroda i gospodarka",
    "type": "true_false",
    "prompt": "Jedną z głównych przyczyn wycinania lasów Amazonii jest pozyskiwanie nowych terenów pod hodowlę i uprawy, zwłaszcza soi.",
    "options": null,
    "answer": true,
    "explanation": "W Amazonii lasy równikowe są wycinane m.in. w celu poszerzania terenów hodowlanych i upraw soi."
  },
  {
    "id": "R05_AUS_01",
    "section": "Australia i obszary polarne",
    "type": "single_choice",
    "prompt": "Który kontynent jest najmniejszy na Ziemi?",
    "options": [
      "Afryka",
      "Antarktyda",
      "Australia",
      "Europa",
      "Azja",
      "Ameryka Południowa"
    ],
    "image": "r05_australia_krajobraz.jpg",
    "answer": 2,
    "explanation": "Australia jest najmniejszym kontynentem, o powierzchni około 7,7 mln km²."
  },
  {
    "id": "R05_AUS_02",
    "section": "Australia i obszary polarne",
    "type": "fill_in",
    "prompt": "Rdzennych mieszkańców Australii nazywa się __________.",
    "options": null,
    "altAnswers": [
      [
        "Aborygenami",
        "Aborygeni",
        "Aborygenów"
      ]
    ],
    "answer": [
      "Aborygenami"
    ],
    "explanation": "Aborygeni to rdzenna ludność Australii; kolonizacja wywarła silny wpływ na ich społeczności."
  },
  {
    "id": "R05_AUS_03",
    "section": "Australia i obszary polarne",
    "type": "match",
    "prompt": "Połącz obszar Australii z opisem warunków przyrodniczych.",
    "options": null,
    "left": [
      "Północ",
      "Wnętrze kontynentu",
      "Wschodnie wybrzeże",
      "Południowe krańce"
    ],
    "right": [
      "Klimat podzwrotnikowy",
      "Wpływ ciepłego Prądu Wschodnioaustralijskiego",
      "Klimat zwrotnikowy suchy",
      "Klimat podrównikowy"
    ],
    "answer": {
      "Północ": "Klimat podrównikowy",
      "Wnętrze kontynentu": "Klimat zwrotnikowy suchy",
      "Wschodnie wybrzeże": "Wpływ ciepłego Prądu Wschodnioaustralijskiego",
      "Południowe krańce": "Klimat podzwrotnikowy"
    },
    "explanation": "W Australii klimat i warunki osadnictwa różnią się między tropikalną północą, suchym wnętrzem, wilgotniejszym wschodem i łagodniejszym południem."
  },
  {
    "id": "R05_AUS_04",
    "section": "Australia i obszary polarne",
    "type": "riddle",
    "prompt": "Jak nazywa się charakterystyczna australijska formacja półpustynna z twardolistnymi zaroślami?",
    "options": null,
    "altAnswers": [
      "scrub",
      "skrub"
    ],
    "answer": "scrub",
    "explanation": "Scrub to zbiorowisko twardolistnych zarośli charakterystyczne dla suchych obszarów Australii."
  },
  {
    "id": "R05_AUS_05",
    "section": "Australia i obszary polarne",
    "type": "true_false",
    "prompt": "Wnętrze Australii jest gęściej zaludnione niż jej południowo-wschodnie wybrzeże.",
    "options": null,
    "answer": false,
    "explanation": "Suche wnętrze kontynentu jest słabo zaludnione; ludność skupia się przede wszystkim w południowo-wschodniej Australii."
  },
  {
    "id": "R05_AUS_06",
    "section": "Australia i obszary polarne",
    "type": "scenario",
    "prompt": "Rolnik na suchym obszarze Australii chce korzystać z wody zamkniętej między nieprzepuszczalnymi warstwami skalnymi. Jakie zasoby powinien wykorzystać?",
    "options": [
      "Wody artezyjskie",
      "Lodowce szelfowe",
      "Wodę ze strefy subdukcji",
      "Wyłącznie wodę deszczową",
      "Wody gejzerów"
    ],
    "answer": 0,
    "explanation": "Wody artezyjskie występują między warstwami nieprzepuszczalnymi i umożliwiają zaopatrzenie w wodę suchych obszarów Australii."
  },
  {
    "id": "R05_AUS_07",
    "section": "Australia i obszary polarne",
    "type": "multi_select",
    "prompt": "Wybierz stwierdzenia zgodne z opisem gospodarki Australii.",
    "options": [
      "Rozwinięta hodowla owiec",
      "Eksport surowców mineralnych",
      "Produkcja opali",
      "Powszechne wielkie rzeki stałe we wnętrzu",
      "Uprawa trzciny cukrowej na wilgotniejszych obszarach"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Australijska gospodarka wykorzystuje hodowlę owiec, surowce mineralne, opale oraz uprawy na lepiej nawodnionych terenach."
  },
  {
    "id": "R05_AUS_08",
    "section": "Australia i obszary polarne",
    "type": "single_choice",
    "prompt": "Jaka cecha wyróżnia centralną część Arktyki?",
    "options": [
      "Rozległy ocean pokryty lodem morskim",
      "Wysokie góry fałdowe bez morza",
      "Lądolód o grubości kilku kilometrów pokrywający kontynent",
      "Gorąca pustynia",
      "Równikowe lasy deszczowe"
    ],
    "image": "r05_arktyka_lod.jpg",
    "answer": 0,
    "explanation": "Centralna część Arktyki to Ocean Arktyczny, którego znaczna powierzchnia jest pokryta lodem morskim."
  },
  {
    "id": "R05_AUS_09",
    "section": "Australia i obszary polarne",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy i morza do właściwego obszaru polarnego.",
    "options": null,
    "items": [
      "Niedźwiedź polarny",
      "Renifer",
      "Morze Weddella",
      "Morze Karskie",
      "Pingwin",
      "Morze Rossa"
    ],
    "categories": [
      "Arktyka",
      "Antarktyka"
    ],
    "image": "r05_antarktyda_ladolod.jpg",
    "answer": {
      "Arktyka": [
        "Niedźwiedź polarny",
        "Morze Karskie",
        "Renifer"
      ],
      "Antarktyka": [
        "Pingwin",
        "Morze Weddella",
        "Morze Rossa"
      ]
    },
    "explanation": "Niedźwiedzie polarne i renifery występują w Arktyce, a pingwiny na Antarktydzie; Morze Karskie leży w Arktyce, natomiast Morze Weddella i Morze Rossa otaczają Antarktydę."
  },
  {
    "id": "R05_AUS_10",
    "section": "Australia i obszary polarne",
    "type": "true_false",
    "prompt": "Zmniejszenie ilości ozonu w stratosferze zwiększa zagrożenie promieniowaniem ultrafioletowym.",
    "options": null,
    "answer": true,
    "explanation": "Warstwa ozonowa pochłania szkodliwe promieniowanie ultrafioletowe; jej ubytek nazywany dziurą ozonową zwiększa ryzyko uszkodzeń komórek i zmian nowotworowych."
  },
  {
    "id": "R05_AUS_11",
    "section": "Australia i obszary polarne",
    "type": "multi_select",
    "prompt": "Które czynniki kształtują surowy klimat Antarktydy?",
    "options": [
      "Wysokie szerokości geograficzne",
      "Wysoka średnia wysokość kontynentu",
      "Zimne prądy wokół kontynentu",
      "Kontynentalność wnętrza",
      "Wpływ ciepłego Prądu Mozambickiego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Bardzo chłodny klimat Antarktydy wynika m.in. z jej położenia geograficznego, wysokości, zimnych prądów morskich i kontynentalnego charakteru wnętrza."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj państwa do ich udziałów w polskim eksporcie w 2019 r.",
    "options": null,
    "left": [
      "Niemcy",
      "Czechy",
      "Wielka Brytania",
      "Włochy"
    ],
    "right": [
      "4,6%",
      "6,0%",
      "6,1%",
      "27,6%"
    ],
    "answer": {
      "Niemcy": "27,6%",
      "Czechy": "6,1%",
      "Wielka Brytania": "6,0%",
      "Włochy": "4,6%"
    },
    "explanation": "W 2019 r. udziały w polskim eksporcie wynosiły: Niemcy 27,6%, Czechy 6,1%, Wielka Brytania 6,0%, Włochy 4,6%."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki udział w polskim imporcie miały Niemcy w 2019 r.?",
    "options": [
      "12,4%",
      "21,8%",
      "27,6%",
      "6,1%",
      "3,2%",
      "5,0%"
    ],
    "answer": 1,
    "explanation": "W 2019 roku udział Niemiec w polskim imporcie wynosił około 21,8%."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z historii Ukrainy od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Aneksja Krymu przez Rosję",
      "Pełnoskalowa inwazja Rosji na Ukrainę",
      "Pomarańczowa rewolucja",
      "Euromajdan"
    ],
    "answer": [
      "Pomarańczowa rewolucja",
      "Euromajdan",
      "Aneksja Krymu przez Rosję",
      "Pełnoskalowa inwazja Rosji na Ukrainę"
    ],
    "explanation": "Ważne wydarzenia w Ukrainie to pomarańczowa rewolucja (2004–2005), Euromajdan (2013–2014), aneksja Krymu przez Rosję (2014) oraz pełnoskalowa rosyjska inwazja rozpoczęta 24 lutego 2022 r."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rzekę z odpowiadającymi jej wielkościami.",
    "options": null,
    "left": [
      "Wisła – długość",
      "Odra – długość",
      "Wisła – żeglowny odcinek",
      "Odra – żeglowny odcinek"
    ],
    "right": [
      "646 km",
      "180 km",
      "854 km",
      "1047 km"
    ],
    "answer": {
      "Wisła – długość": "1047 km",
      "Odra – długość": "854 km",
      "Wisła – żeglowny odcinek": "180 km",
      "Odra – żeglowny odcinek": "646 km"
    },
    "explanation": "Długość Wisły wynosi 1047 km, a Odry 854 km; żeglowne odcinki tych rzek wynoszą odpowiednio 180 km i 646 km."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku wystąpiła wielka powódź na Odrze, nazywana „powodzią tysiąclecia”?",
    "options": [
      "1991",
      "1997",
      "2004",
      "2010",
      "2014",
      "2022"
    ],
    "answer": 1,
    "explanation": "Katastrofalna powódź na Odrze w 1997 roku jest nazywana „powodzią tysiąclecia”."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rekord Azji z obiektem geograficznym.",
    "options": null,
    "left": [
      "Najwyższy szczyt",
      "Najgłębsze jezioro",
      "Największe powierzchniowo jezioro",
      "Najwyżej położona wyżyna"
    ],
    "right": [
      "Wyżyna Tybetańska",
      "Morze Kaspijskie",
      "Bajkał",
      "Mount Everest"
    ],
    "image": "r05_azja_rzezba_terenu.jpg",
    "answer": {
      "Najwyższy szczyt": "Mount Everest",
      "Najgłębsze jezioro": "Bajkał",
      "Największe powierzchniowo jezioro": "Morze Kaspijskie",
      "Najwyżej położona wyżyna": "Wyżyna Tybetańska"
    },
    "explanation": "Do geograficznych rekordów Azji należą m.in. Mount Everest, Bajkał, Morze Kaspijskie i Wyżyna Tybetańska."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Archipelag Malajski obejmuje około __________ tysięcy wysp, a Półwysep Arabski zajmuje około __________ mln km².",
    "options": null,
    "answer": [
      "20",
      "2,7"
    ],
    "explanation": "Archipelag Malajski obejmuje około 20 tys. wysp, a Półwysep Arabski zajmuje około 2,7 mln km²."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które jezioro azjatyckie jest reliktowym zbiornikiem dawniej połączonym z Morzem Czarnym?",
    "options": [
      "Bajkał",
      "Morze Kaspijskie",
      "Jezioro Galwe",
      "Jezioro Wiktorii",
      "Morze Martwe",
      "Jezioro Erie"
    ],
    "answer": 1,
    "explanation": "Morze Kaspijskie jest jeziorem reliktowym, oddzielonym od dawnego połączenia z Morzem Czarnym przy wypiętrzaniu Kaukazu."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy procesu geologicznego prowadzącego do powstania Himalajów.",
    "options": null,
    "items": [
      "Fałdowanie i wypiętrzanie mas skalnych",
      "Powstanie wysokiego łańcucha górskiego",
      "Zbliżanie się płyty indyjskiej do euroazjatyckiej",
      "Kolizja płyt kontynentalnych"
    ],
    "answer": [
      "Zbliżanie się płyty indyjskiej do euroazjatyckiej",
      "Kolizja płyt kontynentalnych",
      "Fałdowanie i wypiętrzanie mas skalnych",
      "Powstanie wysokiego łańcucha górskiego"
    ],
    "explanation": "Himalaje powstały w wyniku zderzenia płyt litosfery, fałdowania skał i wypiętrzania terenu."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż działania ograniczające skutki trzęsień ziemi w Japonii.",
    "options": [
      "Budowa domów wstrząsoodpornych",
      "Mocowanie mebli do ścian",
      "Wyposażenie domów w quake kit",
      "Treningi w symulatorach",
      "Ignorowanie ostrzeżeń i ewakuacji"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skutki trzęsień ziemi można ograniczać przez konstrukcje odporne na wstrząsy, zabezpieczanie wyposażenia, zestawy awaryjne i ćwiczenia."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się projekt zalesiania Sahelu mający ograniczać pustynnienie?",
    "options": null,
    "altAnswers": [
      "Wielki Zielony Mur",
      "Wielkiego Zielonego Muru"
    ],
    "answer": "Wielki Zielony Mur",
    "explanation": "Mapa Sahelu wskazuje obszar projektu Wielkiego Zielonego Muru."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki ciepły prąd morski sprzyja wydłużeniu okresu wegetacyjnego na zachodzie Kanady?",
    "options": [
      "Labradorski",
      "Kanaryjski",
      "Alaski",
      "Benguelski",
      "Wschodniogrenlandzki",
      "Peruwiański"
    ],
    "answer": 2,
    "explanation": "Prąd Alaski jest ciepłym prądem morskim, który łagodzi klimat zachodniego wybrzeża Kanady."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W latach 1988–2018 wycięto w Amazonii około __________ km² lasu.",
    "options": null,
    "altAnswers": [
      [
        "444 131",
        "444131",
        "444 131 km²",
        "444131 km2"
      ]
    ],
    "answer": [
      "444 131"
    ],
    "explanation": "W latach 1988–2018 łączna powierzchnia wylesień Amazonii wyniosła około 444 131 km²."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest średnia grubość lądolodu Antarktydy?",
    "options": [
      "190 m",
      "500 m",
      "900 m",
      "1900 m",
      "4000 m",
      "9000 m"
    ],
    "image": "r05_antarktyda_ladolod.jpg",
    "answer": 3,
    "explanation": "Średnia grubość lądolodu Antarktydy wynosi około 1900 m; pokrywa on niemal 98% powierzchni kontynentu."
  }
];

const KID_PROMPTS = {
  "R05_SAS_01": "Ile krajów sąsiaduje z Polską?",
  "R05_SAS_04": "Jak nazywa się sprzedaż za granicę, a jak zakup z zagranicy? Uzupełnij luki.",
  "R05_MIA_01": "Jak nazywamy tereny tuż obok dużego miasta?",
  "R05_MIA_06": "Kiedy podniesiona woda w rzece staje się powodzią?",
  "R05_AZJ_01": "Jakie góry są najwyższe na świecie?",
  "R05_AZJ_10": "Jak nazywa się wsuwanie jednej płyty Ziemi pod drugą?",
  "R05_AFR_04": "Jak nazywa się obszar pomiędzy Saharą a sawanną?",
  "R05_AME_01": "Jak nazywają się góry na zachodzie Ameryki Południowej?",
  "R05_AUS_01": "Jaki kontynent jest najmniejszy?",
  "R05_AUS_08": "Co znajduje się w środku Arktyki?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Polska i świat – wybrane zagadnienia geograficzne",
  icon: "🌐",
  sectionOrder: [
    "Sąsiedzi Polski",
    "Strefy podmiejskie i powodzie",
    "Azja i granice płyt litosfery",
    "Afryka – środowisko i rozwój",
    "Ameryki – przyroda i gospodarka",
    "Australia i obszary polarne"
  ],
  sectionIcons: {
    "Sąsiedzi Polski": "🧭",
    "Strefy podmiejskie i powodzie": "🏘️",
    "Azja i granice płyt litosfery": "🌏",
    "Afryka – środowisko i rozwój": "🌍",
    "Ameryki – przyroda i gospodarka": "🌎",
    "Australia i obszary polarne": "🧊"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
