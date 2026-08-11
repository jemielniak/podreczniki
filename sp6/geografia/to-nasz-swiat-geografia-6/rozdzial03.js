// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie i państwa Europy
//   UKS  = Ukształtowanie i wody Europy
//   KLI  = Klimat i zmiana klimatu
//   LUD  = Ludność i migracje
//   GOS  = Gospodarka i energetyka
//   UNI  = Unia Europejska i NATO
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_POL_01",
    "section": "Położenie i państwa Europy",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej opisuje Europę jako kontynent?",
    "options": [
      "Jest największym kontynentem świata",
      "Jest drugim najmniejszym kontynentem świata",
      "Leży wyłącznie na półkuli zachodniej",
      "Ma powierzchnię mniejszą niż Australia",
      "Leży głównie na półkuli południowej",
      "Nie graniczy z żadnym innym kontynentem"
    ],
    "answer": 1,
    "image": "r03_mapa_europy_bez_podpisow.jpg",
    "explanation": "Europa jest jednym z siedmiu kontynentów i drugim najmniejszym kontynentem świata; mniejsza od niej jest tylko Australia."
  },
  {
    "id": "R03_POL_02",
    "section": "Położenie i państwa Europy",
    "type": "multi_select",
    "prompt": "Zaznacz półkule, na których leży Europa.",
    "options": [
      "półkula północna",
      "półkula wschodnia",
      "półkula zachodnia w niewielkiej części",
      "półkula południowa",
      "półkula oceaniczna",
      "półkula australijska"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_mapa_europy_bez_podpisow.jpg",
    "explanation": "Europa leży głównie na półkulach północnej i wschodniej, a w mniejszym stopniu także na półkuli zachodniej."
  },
  {
    "id": "R03_POL_03",
    "section": "Położenie i państwa Europy",
    "type": "fill_in",
    "prompt": "Europę od północy oblewa Ocean __________, od zachodu Ocean __________, a od południa Morze __________.",
    "options": null,
    "answer": [
      "Arktyczny",
      "Atlantycki",
      "Śródziemne"
    ],
    "altAnswers": [
      [
        "Arktyczny",
        "Ocean Arktyczny"
      ],
      [
        "Atlantycki",
        "Ocean Atlantycki"
      ],
      [
        "Śródziemne",
        "Morze Śródziemne"
      ]
    ],
    "explanation": "Wody otaczające Europę to Ocean Arktyczny od północy, Ocean Atlantycki od zachodu oraz Morze Śródziemne od południa."
  },
  {
    "id": "R03_POL_04",
    "section": "Położenie i państwa Europy",
    "type": "sequence",
    "prompt": "Ułóż fragmenty granicy między Europą a Azją od północy ku południu.",
    "options": null,
    "items": [
      "Morze Czarne",
      "góry Ural",
      "cieśniny Bosfor i Dardanele oraz Morze Marmara",
      "Morze Kaspijskie",
      "obszar na północ od Kaukazu"
    ],
    "answer": [
      "góry Ural",
      "Morze Kaspijskie",
      "obszar na północ od Kaukazu",
      "Morze Czarne",
      "cieśniny Bosfor i Dardanele oraz Morze Marmara"
    ],
    "image": "r03_granica_europy_azji.jpg",
    "explanation": "Granica Europy z Azją biegnie wzdłuż Uralu, po Morzu Kaspijskim, na północ od Kaukazu, po Morzu Czarnym oraz przez cieśniny Bosfor i Dardanele oraz Morze Marmara."
  },
  {
    "id": "R03_POL_05",
    "section": "Położenie i państwa Europy",
    "type": "true_false",
    "prompt": "W Europie znajduje się 47 państw, a niepodległość Kosowa nie jest uznawana przez wszystkie kraje.",
    "options": null,
    "answer": true,
    "image": "r03_mapa_polityczna_europy.jpg",
    "explanation": "Podaje się liczbę 47 państw w Europie i zaznacza, że Kosowo nie przez wszystkie kraje jest uznawane."
  },
  {
    "id": "R03_POL_06",
    "section": "Położenie i państwa Europy",
    "type": "riddle",
    "prompt": "Jak nazywa się największe pod względem powierzchni państwo położone w całości w Europie?",
    "options": null,
    "answer": "Ukraina",
    "altAnswers": [
      "Ukraina",
      "Ukrainą"
    ],
    "explanation": "Największym krajem położonym w całości w Europie jest Ukraina; większą powierzchnię na kontynencie zajmuje tylko europejska część Rosji."
  },
  {
    "id": "R03_POL_07",
    "section": "Położenie i państwa Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do wód otaczających Europę: Ocean Arktyczny, Ocean Atlantycki, Morze Śródziemne, Ocean Indyjski.",
    "options": null,
    "answer": "Ocean Indyjski",
    "explanation": "Ocean Indyjski nie jest jako woda otaczająca Europę; Europę oblewają m.in. Ocean Arktyczny, Ocean Atlantycki i Morze Śródziemne."
  },
  {
    "id": "R03_POL_08",
    "section": "Położenie i państwa Europy",
    "type": "match",
    "prompt": "Połącz pojęcie z definicją.",
    "options": null,
    "left": [
      "podział polityczny",
      "państwo",
      "eksklawa",
      "enklawa"
    ],
    "right": [
      "podział obszaru na państwa",
      "niepodległe zamieszkane terytorium z niezależną władzą",
      "część kraju oddzielona od jego głównej części",
      "kraj otoczony ze wszystkich stron przez terytorium innego państwa"
    ],
    "answer": {
      "podział polityczny": "podział obszaru na państwa",
      "państwo": "niepodległe zamieszkane terytorium z niezależną władzą",
      "eksklawa": "część kraju oddzielona od jego głównej części",
      "enklawa": "kraj otoczony ze wszystkich stron przez terytorium innego państwa"
    },
    "explanation": "Podział polityczny dotyczy państw. Eksklawa to oddzielony fragment kraju, a enklawa to państwo otoczone przez inne państwo."
  },
  {
    "id": "R03_POL_09",
    "section": "Położenie i państwa Europy",
    "type": "scenario",
    "prompt": "Uczeń szuka państw położonych częściowo w Europie i częściowo w Azji. Oprócz Rosji powinien wskazać dwa kraje. Który zestaw jest poprawny?",
    "options": [
      "Kazachstan i Turcja",
      "Ukraina i Niemcy",
      "San Marino i Watykan",
      "Francja i Wielka Brytania",
      "Islandia i Irlandia",
      "Belgia i Holandia"
    ],
    "answer": 0,
    "explanation": "Wymienia się Rosję, Kazachstan i Turcję jako państwa położone częściowo w Europie i Azji."
  },
  {
    "id": "R03_POL_10",
    "section": "Położenie i państwa Europy",
    "type": "sort",
    "prompt": "Przyporządkuj państwa do opisów.",
    "options": null,
    "items": [
      "Ukraina",
      "Niemcy",
      "San Marino",
      "Watykan",
      "Rosja",
      "Kazachstan",
      "Turcja"
    ],
    "categories": [
      "państwa w całości w Europie",
      "państwa częściowo w Europie i Azji",
      "europejskie enklawy"
    ],
    "answer": {
      "państwa w całości w Europie": [
        "Ukraina",
        "Niemcy"
      ],
      "państwa częściowo w Europie i Azji": [
        "Rosja",
        "Kazachstan",
        "Turcja"
      ],
      "europejskie enklawy": [
        "San Marino",
        "Watykan"
      ]
    },
    "image": "r03_mapa_polityczna_europy.jpg",
    "explanation": "Ukraina i Niemcy leżą w całości w Europie. Rosja, Kazachstan i Turcja mają części w Europie i Azji, a San Marino i Watykan to europejskie enklawy."
  },
  {
    "id": "R03_UKS_01",
    "section": "Ukształtowanie i wody Europy",
    "type": "fill_in",
    "prompt": "W Europie przeważają tereny __________, a największy taki obszar to Nizina __________.",
    "options": null,
    "answer": [
      "nizinne",
      "Wschodnioeuropejska"
    ],
    "altAnswers": [
      [
        "nizinne",
        "niziny"
      ],
      [
        "Wschodnioeuropejska",
        "Nizina Wschodnioeuropejska"
      ]
    ],
    "explanation": "W Europie dominują niziny, a największy obszar nizinny zajmuje Nizina Wschodnioeuropejska."
  },
  {
    "id": "R03_UKS_02",
    "section": "Ukształtowanie i wody Europy",
    "type": "true_false",
    "prompt": "Wszystkie niziny w Europie są idealnie płaskimi równinami bez pagórków.",
    "options": null,
    "answer": false,
    "explanation": "Niziny nie wszędzie są równinami; część takich obszarów ma niewysokie pagórki."
  },
  {
    "id": "R03_UKS_03",
    "section": "Ukształtowanie i wody Europy",
    "type": "multi_select",
    "prompt": "Zaznacz morza wymienione jako części Morza Śródziemnego.",
    "options": [
      "Morze Adriatyckie",
      "Morze Tyrreńskie",
      "Morze Jońskie",
      "Morze Egejskie",
      "Morze Kaspijskie",
      "Morze Barentsa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_linia_brzegowa_fiordy.jpg",
    "explanation": "Morze Śródziemne dzieli się na wiele mniejszych mórz, m.in. Adriatyckie, Tyrreńskie, Jońskie i Egejskie."
  },
  {
    "id": "R03_UKS_04",
    "section": "Ukształtowanie i wody Europy",
    "type": "riddle",
    "prompt": "Jaka jest najdłuższa rzeka Europy?",
    "options": null,
    "answer": "Wołga",
    "altAnswers": [
      "Wołga",
      "Wolga"
    ],
    "explanation": "Najdłuższą rzeką Europy jest Wołga, płynąca przez Rosję."
  },
  {
    "id": "R03_UKS_05",
    "section": "Ukształtowanie i wody Europy",
    "type": "match",
    "prompt": "Połącz obiekt geograficzny z przykładem.",
    "options": null,
    "left": [
      "największe jezioro Europy",
      "najdłuższa rzeka Europy",
      "największy europejski półwysep",
      "największa europejska wyspa"
    ],
    "right": [
      "Ładoga",
      "Wołga",
      "Półwysep Skandynawski",
      "Wielka Brytania"
    ],
    "answer": {
      "największe jezioro Europy": "Ładoga",
      "najdłuższa rzeka Europy": "Wołga",
      "największy europejski półwysep": "Półwysep Skandynawski",
      "największa europejska wyspa": "Wielka Brytania"
    },
    "explanation": "Wskazuje się Ładogę, Wołgę, Półwysep Skandynawski i Wielką Brytanię jako największe lub najdłuższe obiekty w swoich kategoriach."
  },
  {
    "id": "R03_UKS_06",
    "section": "Ukształtowanie i wody Europy",
    "type": "single_choice",
    "prompt": "Który łańcuch górski jest najwyższy w Europie?",
    "options": [
      "Alpy",
      "Góry Skandynawskie",
      "Karpaty",
      "Pireneje",
      "Góry Dynarskie",
      "Góry Betyckie"
    ],
    "answer": 0,
    "image": "r03_alpy_mont_blanc.jpg",
    "explanation": "Najwyższym łańcuchem górskim Europy są Alpy, a ich najwyższym szczytem jest Mont Blanc."
  },
  {
    "id": "R03_UKS_07",
    "section": "Ukształtowanie i wody Europy",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do europejskich rzek: Wołga, Dunaj, Rodan, Ładoga.",
    "options": null,
    "answer": "Ładoga",
    "explanation": "Ładoga to jezioro, a Wołga, Dunaj i Rodan są rzekami."
  },
  {
    "id": "R03_UKS_08",
    "section": "Ukształtowanie i wody Europy",
    "type": "sort",
    "prompt": "Podziel przykłady na wyspy i archipelagi.",
    "options": null,
    "items": [
      "Wielka Brytania",
      "Sycylia",
      "Kreta",
      "Islandia",
      "Baleary",
      "Cyklady",
      "Lofoty",
      "Svalbard"
    ],
    "categories": [
      "wyspy",
      "archipelagi"
    ],
    "answer": {
      "wyspy": [
        "Wielka Brytania",
        "Sycylia",
        "Kreta",
        "Islandia"
      ],
      "archipelagi": [
        "Baleary",
        "Cyklady",
        "Lofoty",
        "Svalbard"
      ]
    },
    "explanation": "Wyspa jest pojedynczym lądem otoczonym wodą, a archipelag to grupa sąsiadujących ze sobą wysp."
  },
  {
    "id": "R03_UKS_09",
    "section": "Ukształtowanie i wody Europy",
    "type": "scenario",
    "prompt": "Geograf opisuje fragment niziny leżący poniżej poziomu morza, taki jak obszary w Holandii albo na Żuławach Wiślanych. Jak nazywa się taki teren?",
    "options": [
      "depresja",
      "archipelag",
      "półwysep",
      "przylądek",
      "wyżyna",
      "zatoka"
    ],
    "answer": 0,
    "explanation": "Część nizin leżących poniżej poziomu morza to depresje. Podano przykłady z Holandii i Żuław Wiślanych."
  },
  {
    "id": "R03_UKS_10",
    "section": "Ukształtowanie i wody Europy",
    "type": "true_false",
    "prompt": "Czynne wulkany występują w Europie m.in. we Włoszech, w Grecji, na Islandii i na wyspie Jan Mayen.",
    "options": null,
    "answer": true,
    "image": "r03_wulkan_etna.jpg",
    "explanation": "Wymienia się Włochy, Grecję, Islandię i norweską wyspę Jan Mayen jako miejsca występowania czynnych wulkanów w Europie."
  },
  {
    "id": "R03_KLI_01",
    "section": "Klimat i zmiana klimatu",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki kształtujące klimat Europy.",
    "options": [
      "szerokość geograficzna",
      "ukształtowanie terenu i wysokość nad poziomem morza",
      "odległość od Oceanu Atlantyckiego",
      "ciepłe prądy morskie w Oceanie Atlantyckim",
      "liczba języków urzędowych",
      "podział polityczny państw"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na klimat Europy wpływają przede wszystkim szerokość geograficzna, rzeźba i wysokość terenu, odległość od Atlantyku oraz ciepłe prądy morskie."
  },
  {
    "id": "R03_KLI_02",
    "section": "Klimat i zmiana klimatu",
    "type": "true_false",
    "prompt": "Wraz ze wzrostem wysokości nad poziomem morza temperatura powietrza spada mniej więcej o 6°C na każde 1000 metrów.",
    "options": null,
    "answer": true,
    "explanation": "Co każde 1000 m wysokości temperatura powietrza maleje mniej więcej o 6°C."
  },
  {
    "id": "R03_KLI_03",
    "section": "Klimat i zmiana klimatu",
    "type": "single_choice",
    "prompt": "Gdzie w Europie jest najcieplej według zależności od szerokości geograficznej?",
    "options": [
      "na południu kontynentu",
      "na północy kontynentu",
      "w pobliżu koła podbiegunowego",
      "w górach wysokich",
      "na północnym Uralu",
      "na Svalbardzie"
    ],
    "answer": 0,
    "explanation": "Najcieplej jest na południu Europy, a im dalej na północ, tym średnie roczne temperatury powietrza są niższe."
  },
  {
    "id": "R03_KLI_04",
    "section": "Klimat i zmiana klimatu",
    "type": "fill_in",
    "prompt": "Ciepłe prądy morskie ogrzewające znaczną część Europy to Prąd __________ i Prąd __________.",
    "options": null,
    "answer": [
      "Północnoatlantycki",
      "Norweski"
    ],
    "altAnswers": [
      [
        "Północnoatlantycki",
        "Prąd Północnoatlantycki"
      ],
      [
        "Norweski",
        "Prąd Norweski"
      ]
    ],
    "image": "r03_prady_atlantyckie.jpg",
    "explanation": "Prąd Północnoatlantycki i Prąd Norweski niosą ciepłą wodę i ogrzewają dużą część Europy."
  },
  {
    "id": "R03_KLI_05",
    "section": "Klimat i zmiana klimatu",
    "type": "match",
    "prompt": "Połącz strefę klimatyczną z przykładem typu klimatu.",
    "options": null,
    "left": [
      "strefa klimatów okołobiegunowych",
      "strefa klimatów umiarkowanych",
      "strefa klimatów podzwrotnikowych"
    ],
    "right": [
      "klimat biegunowy",
      "klimat umiarkowany ciepły morski",
      "klimat podzwrotnikowy morski"
    ],
    "answer": {
      "strefa klimatów okołobiegunowych": "klimat biegunowy",
      "strefa klimatów umiarkowanych": "klimat umiarkowany ciepły morski",
      "strefa klimatów podzwrotnikowych": "klimat podzwrotnikowy morski"
    },
    "explanation": "Europa leży w trzech strefach klimatycznych: okołobiegunowej, umiarkowanej i podzwrotnikowej, a w każdej występują różne typy klimatu."
  },
  {
    "id": "R03_KLI_06",
    "section": "Klimat i zmiana klimatu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie jest czynnikiem kształtującym klimat Europy: szerokość geograficzna, wysokość nad poziomem morza, ciepłe prądy morskie, rodzaj gleby.",
    "options": null,
    "answer": "rodzaj gleby",
    "explanation": "Klimat Europy kształtują szerokość geograficzna, wysokość nad poziomem morza i ciepłe prądy morskie. Rodzaj gleby klimatu nie tworzy - jest odwrotnie, to klimat decyduje o tym, jaka gleba powstaje."
  },
  {
    "id": "R03_KLI_07",
    "section": "Klimat i zmiana klimatu",
    "type": "scenario",
    "prompt": "Miasto leży blisko Oceanu Atlantyckiego. Zimy są tam łagodniejsze, lata chłodniejsze, a opadów jest więcej niż daleko w głębi lądu. Który czynnik to wyjaśnia?",
    "options": [
      "łagodzący wpływ oceanu",
      "brak prądów morskich",
      "większa liczba państw",
      "przewaga elektrowni cieplnych",
      "wysoka gęstość zaludnienia",
      "granica z Azją"
    ],
    "answer": 0,
    "explanation": "Oceany i morza łagodzą klimat obszarów, z którymi graniczą: blisko oceanu zima jest łagodniejsza, lato chłodniejsze, a opady większe."
  },
  {
    "id": "R03_KLI_08",
    "section": "Klimat i zmiana klimatu",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do typu klimatu umiarkowanego.",
    "options": null,
    "items": [
      "więcej opadów",
      "cieplejsza zima",
      "chłodniejsze lato",
      "mroźniejsza zima",
      "cieplejsze lato",
      "większa roczna amplituda temperatur"
    ],
    "categories": [
      "typ morski",
      "typ kontynentalny"
    ],
    "answer": {
      "typ morski": [
        "więcej opadów",
        "cieplejsza zima",
        "chłodniejsze lato"
      ],
      "typ kontynentalny": [
        "mroźniejsza zima",
        "cieplejsze lato",
        "większa roczna amplituda temperatur"
      ]
    },
    "explanation": "W typie morskim jest więcej opadów, cieplejsza zima i chłodniejsze lato, a typ kontynentalny ma większą amplitudę i ostrzejsze pory roku."
  },
  {
    "id": "R03_KLI_09",
    "section": "Klimat i zmiana klimatu",
    "type": "fill_in",
    "prompt": "W Polsce występuje klimat umiarkowany __________ __________, który łączy cechy klimatu morskiego i kontynentalnego.",
    "options": null,
    "answer": [
      "ciepły",
      "przejściowy"
    ],
    "altAnswers": [
      [
        "ciepły"
      ],
      [
        "przejściowy"
      ]
    ],
    "explanation": "Polska leży w zasięgu klimatu umiarkowanego ciepłego przejściowego."
  },
  {
    "id": "R03_KLI_10",
    "section": "Klimat i zmiana klimatu",
    "type": "single_choice",
    "prompt": "Który opis pasuje do klimatu podzwrotnikowego morskiego zwanego śródziemnomorskim?",
    "options": [
      "lato gorące i suche oraz zima łagodna i deszczowa",
      "przez większość roku ujemna temperatura",
      "lato chłodne i krótka mroźna zima",
      "zima zawsze bez opadów",
      "lato chłodne i bardzo wilgotne",
      "brak różnic między latem i zimą"
    ],
    "answer": 0,
    "image": "r03_krajobraz_srodziemnomorski.jpg",
    "explanation": "Klimat podzwrotnikowy morski, czyli śródziemnomorski, charakteryzuje się gorącym i suchym latem oraz łagodną, deszczową zimą."
  },
  {
    "id": "R03_LUD_01",
    "section": "Ludność i migracje",
    "type": "single_choice",
    "prompt": "Co oznacza gęstość zaludnienia?",
    "options": [
      "średnią liczbę mieszkańców przypadającą na kilometr kwadratowy",
      "liczbę państw na jednym kontynencie",
      "różnicę między urodzeniami i zgonami",
      "liczbę języków używanych w państwie",
      "łączną długość granic państwa",
      "liczbę emigrantów w całej Europie"
    ],
    "answer": 0,
    "explanation": "Gęstość zaludnienia wyraża się w liczbie mieszkańców przypadających na jeden kilometr kwadratowy."
  },
  {
    "id": "R03_LUD_02",
    "section": "Ludność i migracje",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające osiedlaniu się ludności.",
    "options": [
      "nizinna rzeźba terenu",
      "ciepły klimat z umiarkowaną ilością opadów",
      "wysoki poziom rozwoju gospodarczego",
      "dostęp do rzeki lub morza",
      "obszary objęte wojną",
      "brak szlaków transportowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ludziom sprzyjają m.in. niziny, korzystny klimat, rozwinięta gospodarka oraz dostęp do wody; wojna i brak transportu zniechęcają do osiedlania się."
  },
  {
    "id": "R03_LUD_03",
    "section": "Ludność i migracje",
    "type": "fill_in",
    "prompt": "W Europie mieszka ponad __________ mln ludzi, a najgęściej zaludniony obszar kontynentu nazywa się europejskim __________.",
    "options": null,
    "answer": [
      "744",
      "bananem"
    ],
    "altAnswers": [
      [
        "744",
        "ponad 744"
      ],
      [
        "bananem",
        "banan"
      ]
    ],
    "image": "r03_europejski_banan_mapa.jpg",
    "explanation": "W Europie mieszka ponad 744 mln ludzi, a bardzo zaludniony obszar przypominający kształtem banan nazywa się europejskim bananem."
  },
  {
    "id": "R03_LUD_04",
    "section": "Ludność i migracje",
    "type": "true_false",
    "prompt": "Europejski banan obejmuje m.in. północne Włochy, zachodnie Niemcy, Belgię, Holandię i część Wielkiej Brytanii.",
    "options": null,
    "answer": true,
    "image": "r03_europejski_banan_mapa.jpg",
    "explanation": "Mapa i podsumowanie wskazują, że europejski banan obejmuje m.in. północne Włochy, zachodnie Niemcy, Belgię, Holandię oraz południową i środkową Wielką Brytanię."
  },
  {
    "id": "R03_LUD_05",
    "section": "Ludność i migracje",
    "type": "riddle",
    "prompt": "Jak nazywa się przemieszczanie ludności w celu zmiany miejsca zamieszkania?",
    "options": null,
    "answer": "migracja",
    "altAnswers": [
      "migracja",
      "migracje"
    ],
    "explanation": "Przemieszczanie się ludności w celu zmiany miejsca zamieszkania to migracja."
  },
  {
    "id": "R03_LUD_06",
    "section": "Ludność i migracje",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "emigrant",
      "imigrant",
      "kraj imigracyjny",
      "kraj emigracyjny"
    ],
    "right": [
      "osoba wyjeżdżająca ze swojego kraju",
      "osoba przyjeżdżająca z innego kraju",
      "kraj z przewagą przyjazdów nad wyjazdami",
      "kraj z przewagą wyjazdów nad przyjazdami"
    ],
    "answer": {
      "emigrant": "osoba wyjeżdżająca ze swojego kraju",
      "imigrant": "osoba przyjeżdżająca z innego kraju",
      "kraj imigracyjny": "kraj z przewagą przyjazdów nad wyjazdami",
      "kraj emigracyjny": "kraj z przewagą wyjazdów nad przyjazdami"
    },
    "explanation": "Emigranci wyjeżdżają, imigranci przyjeżdżają. Kraj imigracyjny przyjmuje więcej ludzi, a z kraju emigracyjnego więcej osób wyjeżdża."
  },
  {
    "id": "R03_LUD_07",
    "section": "Ludność i migracje",
    "type": "scenario",
    "prompt": "Rodzina opuszcza ojczyznę z powodu wojny i zagrożenia życia. Jak nazywa się takie osoby?",
    "options": [
      "uchodźcy",
      "turyści",
      "rolnicy",
      "górnicy",
      "studenci Erasmus",
      "pracownicy sezonowi"
    ],
    "answer": 0,
    "image": "r03_migranci_na_dworcach.jpg",
    "explanation": "Osoby zmuszone do wyjazdu z powodu wojny, zagrożenia życia lub prześladowań nazywa się uchodźcami."
  },
  {
    "id": "R03_LUD_08",
    "section": "Ludność i migracje",
    "type": "sort",
    "prompt": "Rozdziel przyczyny i skutki starzenia się społeczeństw.",
    "options": null,
    "items": [
      "spadek liczby urodzeń",
      "wzrost długości życia",
      "model rodziny z jednym dzieckiem",
      "mniej osób aktywnych zawodowo",
      "więcej osób pobierających emerytury",
      "większe koszty służby zdrowia"
    ],
    "categories": [
      "przyczyny",
      "skutki"
    ],
    "answer": {
      "przyczyny": [
        "spadek liczby urodzeń",
        "wzrost długości życia",
        "model rodziny z jednym dzieckiem"
      ],
      "skutki": [
        "mniej osób aktywnych zawodowo",
        "więcej osób pobierających emerytury",
        "większe koszty służby zdrowia"
      ]
    },
    "explanation": "Starzenie się społeczeństw wynika ze spadku urodzeń i wzrostu długości życia, a powoduje m.in. brak pracowników oraz większe wydatki na emerytury i służbę zdrowia."
  },
  {
    "id": "R03_LUD_09",
    "section": "Ludność i migracje",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do odłamów chrześcijaństwa: katolicyzm, protestantyzm, prawosławie, islam.",
    "options": null,
    "answer": "islam",
    "explanation": "Katolicyzm, protestantyzm i prawosławie to odłamy chrześcijaństwa. Islam jest odrębną religią, a nie odłamem chrześcijaństwa."
  },
  {
    "id": "R03_LUD_10",
    "section": "Ludność i migracje",
    "type": "multi_select",
    "prompt": "Zaznacz powody migracji.",
    "options": [
      "nauka",
      "chęć zmiany",
      "poszukiwanie pracy lub lepszych zarobków",
      "ucieczka przed wojną lub prześladowaniami",
      "wzrost wysokości gór",
      "powstawanie półwyspów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wymienia się m.in. naukę, chęć zmiany, migracje zarobkowe oraz konieczność ucieczki przed wojną lub prześladowaniami."
  },
  {
    "id": "R03_GOS_01",
    "section": "Gospodarka i energetyka",
    "type": "riddle",
    "prompt": "Jak nazywa się dział przemysłu zajmujący się produkcją, przetwarzaniem, gromadzeniem i oddawaniem energii do użytku?",
    "options": null,
    "answer": "energetyka",
    "altAnswers": [
      "energetyka",
      "energetyką"
    ],
    "explanation": "Produkcją i przetwarzaniem energii zajmuje się dział przemysłu zwany energetyką."
  },
  {
    "id": "R03_GOS_02",
    "section": "Gospodarka i energetyka",
    "type": "sort",
    "prompt": "Podziel źródła energii na odnawialne i nieodnawialne.",
    "options": null,
    "items": [
      "wiatr",
      "woda",
      "słońce",
      "ciepło wnętrza Ziemi",
      "biomasa",
      "węgiel kamienny",
      "ropa naftowa",
      "gaz ziemny",
      "uran"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne"
    ],
    "answer": {
      "odnawialne": [
        "wiatr",
        "woda",
        "słońce",
        "ciepło wnętrza Ziemi",
        "biomasa"
      ],
      "nieodnawialne": [
        "węgiel kamienny",
        "ropa naftowa",
        "gaz ziemny",
        "uran"
      ]
    },
    "explanation": "OZE obejmują wiatr, wodę, słońce, ciepło wnętrza Ziemi i biomasę. Węgiel, ropa, gaz i uran są źródłami nieodnawialnymi."
  },
  {
    "id": "R03_GOS_03",
    "section": "Gospodarka i energetyka",
    "type": "true_false",
    "prompt": "Wykorzystanie węgla, ropy naftowej i gazu ziemnego powoduje zanieczyszczenie środowiska, głównie powietrza.",
    "options": null,
    "answer": true,
    "explanation": "Wykorzystanie tych paliw kopalnych skutkuje zanieczyszczeniem środowiska, głównie powietrza."
  },
  {
    "id": "R03_GOS_04",
    "section": "Gospodarka i energetyka",
    "type": "match",
    "prompt": "Połącz typ elektrowni z wykorzystywanym źródłem energii.",
    "options": null,
    "left": [
      "elektrownia wodna",
      "elektrownia wiatrowa",
      "elektrownia słoneczna",
      "elektrownia geotermalna",
      "elektrownia jądrowa"
    ],
    "right": [
      "płynąca woda",
      "wiatr",
      "promienie słoneczne",
      "gorące skały we wnętrzu Ziemi",
      "uran"
    ],
    "answer": {
      "elektrownia wodna": "płynąca woda",
      "elektrownia wiatrowa": "wiatr",
      "elektrownia słoneczna": "promienie słoneczne",
      "elektrownia geotermalna": "gorące skały we wnętrzu Ziemi",
      "elektrownia jądrowa": "uran"
    },
    "explanation": "Typ elektrowni zależy od źródła energii: woda, wiatr, słońce, ciepło wnętrza Ziemi lub uran."
  },
  {
    "id": "R03_GOS_05",
    "section": "Gospodarka i energetyka",
    "type": "scenario",
    "prompt": "Państwo jest górzyste, a rzeki spływają po nachylonym terenie szybko i z dużą siłą. Dlatego zdecydowana większość energii pochodzi tam z elektrowni wodnych. O jaki kraj chodzi?",
    "options": [
      "Norwegia",
      "Dania",
      "Francja",
      "Polska",
      "Watykan",
      "Holandia"
    ],
    "answer": 0,
    "image": "r03_elektrownia_wodna_norwegia.jpg",
    "explanation": "Opisuje się Norwegię jako górzysty kraj, w którym szybkie rzeki sprzyjają energetyce wodnej."
  },
  {
    "id": "R03_GOS_06",
    "section": "Gospodarka i energetyka",
    "type": "single_choice",
    "prompt": "Które źródło energii ma bardzo duże znaczenie w Danii?",
    "options": [
      "wiatr",
      "uran",
      "węgiel brunatny",
      "ciepło wnętrza Ziemi",
      "ropa naftowa",
      "lądolody"
    ],
    "answer": 0,
    "image": "r03_farma_wiatrowa_dania.jpg",
    "explanation": "Dania jest otoczona z trzech stron morzem i jest krajem nizinnym, dlatego ma dobre warunki do rozwoju energetyki wiatrowej."
  },
  {
    "id": "R03_GOS_07",
    "section": "Gospodarka i energetyka",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady działalności zaliczanych do rolnictwa.",
    "options": [
      "uprawa roślin",
      "chów zwierząt",
      "rybołówstwo",
      "pozyskiwanie drewna",
      "bankowość",
      "produkcja komputerów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do rolnictwa zaliczono uprawę roślin, chów zwierząt, rybołówstwo i pozyskiwanie drewna. Bankowość to usługi, a produkcja komputerów to przemysł."
  },
  {
    "id": "R03_GOS_08",
    "section": "Gospodarka i energetyka",
    "type": "fill_in",
    "prompt": "W gospodarce wyróżnia się trzy sektory: __________, __________ i __________.",
    "options": null,
    "answer": [
      "rolnictwo",
      "przemysł",
      "usługi"
    ],
    "altAnswers": [
      [
        "rolnictwo",
        "rolnictwa"
      ],
      [
        "przemysł",
        "przemysl"
      ],
      [
        "usługi",
        "uslugi"
      ]
    ],
    "explanation": "Trzy sektory gospodarki to rolnictwo, przemysł i usługi."
  },
  {
    "id": "R03_GOS_09",
    "section": "Gospodarka i energetyka",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do zawodów z sektora rolnictwa: rolnik, rybak, leśnik, prawnik.",
    "options": null,
    "answer": "prawnik",
    "explanation": "Rolnik, rybak i leśnik należą do przykładów zawodów związanych z rolnictwem, a prawnik jest przykładem zawodu w usługach."
  },
  {
    "id": "R03_GOS_10",
    "section": "Gospodarka i energetyka",
    "type": "match",
    "prompt": "Połącz sektor gospodarki z przykładem z procesu produkcji i sprzedaży serów.",
    "options": null,
    "left": [
      "rolnictwo",
      "przemysł",
      "usługi"
    ],
    "right": [
      "chów krów",
      "produkcja serów",
      "przewóz i sprzedaż produktów"
    ],
    "answer": {
      "rolnictwo": "chów krów",
      "przemysł": "produkcja serów",
      "usługi": "przewóz i sprzedaż produktów"
    },
    "explanation": "W przykładzie rolnictwo obejmuje chów krów, przemysł produkcję serów, a usługi ich przewóz i sprzedaż."
  },
  {
    "id": "R03_UNI_01",
    "section": "Unia Europejska i NATO",
    "type": "single_choice",
    "prompt": "Jaki jest główny cel Unii Europejskiej?",
    "options": [
      "współpraca gospodarcza, polityczna i społeczna",
      "podział Europy na nowe kontynenty",
      "zastąpienie wszystkich języków jednym",
      "kontrola wszystkich granic na świecie",
      "budowa wyłącznie elektrowni wiatrowych",
      "likwidacja państw członkowskich"
    ],
    "answer": 0,
    "explanation": "Unia Europejska jest organizacją międzynarodową mającą na celu współpracę gospodarczą, polityczną i społeczną."
  },
  {
    "id": "R03_UNI_02",
    "section": "Unia Europejska i NATO",
    "type": "fill_in",
    "prompt": "Unia Europejska powstała w __________ r., a za jej stolicę uznaje się __________.",
    "options": null,
    "answer": [
      "1993",
      "Brukselę"
    ],
    "altAnswers": [
      [
        "1993",
        "1993 r."
      ],
      [
        "Brukselę",
        "Bruksela"
      ]
    ],
    "explanation": "Unia Europejska powstała w 1993 r., a za jej stolicę uznaje się Brukselę."
  },
  {
    "id": "R03_UNI_03",
    "section": "Unia Europejska i NATO",
    "type": "true_false",
    "prompt": "W 2024 r. Unia Europejska zrzeszała 27 państw, a Wielka Brytania już do niej nie należała.",
    "options": null,
    "answer": true,
    "explanation": "UE zrzesza 27 państw, a Wielka Brytania wystąpiła z organizacji do 2020 r."
  },
  {
    "id": "R03_UNI_04",
    "section": "Unia Europejska i NATO",
    "type": "match",
    "prompt": "Połącz symbol lub hasło Unii Europejskiej z opisem.",
    "options": null,
    "left": [
      "flaga Unii Europejskiej",
      "hymn Unii Europejskiej",
      "jedność w różnorodności"
    ],
    "right": [
      "gwiazdy symbolizujące jedność i solidarność",
      "Oda do radości z IX symfonii Beethovena",
      "wspólne cele mimo różnic między państwami"
    ],
    "answer": {
      "flaga Unii Europejskiej": "gwiazdy symbolizujące jedność i solidarność",
      "hymn Unii Europejskiej": "Oda do radości z IX symfonii Beethovena",
      "jedność w różnorodności": "wspólne cele mimo różnic między państwami"
    },
    "image": "r03_flaga_unii_europejskiej.jpg",
    "explanation": "Symbole UE reprezentują wartości takie jak jedność, solidarność, braterstwo i poszanowanie różnorodności."
  },
  {
    "id": "R03_UNI_05",
    "section": "Unia Europejska i NATO",
    "type": "multi_select",
    "prompt": "Zaznacz działania Unii Europejskiej.",
    "options": [
      "wspieranie rozwoju państw członkowskich",
      "ujednolicanie niektórych przepisów",
      "działania na rzecz pokoju",
      "ochrona środowiska i walka ze zmianą klimatu",
      "znoszenie wszystkich państw",
      "likwidowanie języków narodowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "UE wspiera rozwój państw, ujednolica część przepisów, działa na rzecz pokoju oraz angażuje się w ochronę środowiska i walkę ze zmianą klimatu."
  },
  {
    "id": "R03_UNI_06",
    "section": "Unia Europejska i NATO",
    "type": "riddle",
    "prompt": "Jak nazywa się waluta Unii Europejskiej?",
    "options": null,
    "answer": "euro",
    "altAnswers": [
      "euro"
    ],
    "explanation": "Walutą Unii Europejskiej jest euro, choć nie obowiązuje we wszystkich państwach członkowskich."
  },
  {
    "id": "R03_UNI_07",
    "section": "Unia Europejska i NATO",
    "type": "true_false",
    "prompt": "W 2024 r. strefę euro tworzyło 20 z 27 państw Unii Europejskiej.",
    "options": null,
    "answer": true,
    "explanation": "Do strefy euro należało 20 z 27 państw UE."
  },
  {
    "id": "R03_UNI_08",
    "section": "Unia Europejska i NATO",
    "type": "scenario",
    "prompt": "Podróżny chce przekraczać granice wielu europejskich państw bez kontroli, zwykle z samym dowodem osobistym. O jakim obszarze mówi się?",
    "options": [
      "strefa Schengen",
      "strefa biegunowa",
      "europejski banan",
      "Nizina Nadkaspijska",
      "strefa klimatu kontynentalnego",
      "podział polityczny"
    ],
    "answer": 0,
    "explanation": "Strefa Schengen to obszar państw, w którym na ogół można przekraczać granice bez kontroli."
  },
  {
    "id": "R03_UNI_09",
    "section": "Unia Europejska i NATO",
    "type": "fill_in",
    "prompt": "Polska przystąpiła do Unii Europejskiej __________ maja 2004 r., a do strefy Schengen należy od 21 grudnia __________ r.",
    "options": null,
    "answer": [
      "1",
      "2007"
    ],
    "altAnswers": [
      [
        "1",
        "1 maja"
      ],
      [
        "2007",
        "2007 r."
      ]
    ],
    "explanation": "Polska należy do UE od 1 maja 2004 r., a do strefy Schengen od 21 grudnia 2007 r."
  },
  {
    "id": "R03_UNI_10",
    "section": "Unia Europejska i NATO",
    "type": "match",
    "prompt": "Połącz informację o NATO z wyjaśnieniem.",
    "options": null,
    "left": [
      "NATO",
      "charakter NATO",
      "Polska w NATO",
      "siedziba NATO"
    ],
    "right": [
      "Organizacja Traktatu Północnoatlantyckiego",
      "obronny",
      "od 1999 r.",
      "Bruksela"
    ],
    "answer": {
      "NATO": "Organizacja Traktatu Północnoatlantyckiego",
      "charakter NATO": "obronny",
      "Polska w NATO": "od 1999 r.",
      "siedziba NATO": "Bruksela"
    },
    "image": "r03_siedziba_nato_bruksela.jpg",
    "explanation": "NATO to Organizacja Traktatu Północnoatlantyckiego, sojusz o charakterze obronnym. Polska należy do niego od 1999 r., a siedziba NATO znajduje się w Brukseli."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż elementy granicy Europy z Azją w kolejności zgodnej.",
    "options": null,
    "items": [
      "Morze Czarne",
      "Morze Kaspijskie",
      "Ural",
      "Bosfor i Dardanele oraz Morze Marmara",
      "północ od Kaukazu"
    ],
    "answer": [
      "Ural",
      "Morze Kaspijskie",
      "północ od Kaukazu",
      "Morze Czarne",
      "Bosfor i Dardanele oraz Morze Marmara"
    ],
    "image": "r03_granica_europy_azji.jpg",
    "explanation": "To trudniejsze pytanie wymaga połączenia kilku fragmentów opisu granicy: Ural, Morze Kaspijskie, obszar na północ od Kaukazu, Morze Czarne, Bosfor i Dardanele oraz Morze Marmara."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Mont Blanc ma około __________ m n.p.m., a najniższy punkt Niziny Nadkaspijskiej leży __________ m p.p.m.",
    "options": null,
    "answer": [
      "4806",
      "28"
    ],
    "altAnswers": [
      [
        "4806",
        "ok. 4806",
        "4806 m"
      ],
      [
        "28",
        "28 m"
      ]
    ],
    "image": "r03_alpy_mont_blanc.jpg",
    "explanation": "Mont Blanc ma około 4806 m n.p.m., a najniższy punkt Niziny Nadkaspijskiej znajduje się 28 m poniżej poziomu morza."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz miejsce z typem klimatu pokazanym lub.",
    "options": null,
    "left": [
      "Dublin",
      "Uralsk",
      "Kirkenes",
      "Palermo",
      "Bodo"
    ],
    "right": [
      "umiarkowany ciepły morski",
      "umiarkowany ciepły kontynentalny",
      "podbiegunowy",
      "podzwrotnikowy morski",
      "umiarkowany chłodny morski"
    ],
    "answer": {
      "Dublin": "umiarkowany ciepły morski",
      "Uralsk": "umiarkowany ciepły kontynentalny",
      "Kirkenes": "podbiegunowy",
      "Palermo": "podzwrotnikowy morski",
      "Bodo": "umiarkowany chłodny morski"
    },
    "explanation": "Klimatogramy pokazują przykłady typów klimatu dla Dublina, Uralska, Kirkenes, Palermo i Bodo."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego na zachodnim wybrzeżu Europy klimat jest cieplejszy niż na wschodnim wybrzeżu Kanady leżącym po drugiej stronie Atlantyku?",
    "options": [
      "Europa jest ogrzewana przez ciepłe prądy morskie Atlantyku",
      "Kanada leży w strefie podzwrotnikowej",
      "Europa nie ma mórz ani oceanów",
      "Zachodnie wybrzeże Europy leży dalej od oceanu",
      "Kanada nie ma zimnego prądu morskiego",
      "Wpływa na to wyłącznie liczba ludności"
    ],
    "answer": 0,
    "image": "r03_prady_atlantyckie.jpg",
    "explanation": "Ciepłe prądy morskie Atlantyku przynoszą do Europy ciepłe masy powietrza, podczas gdy wschodnie wybrzeże Kanady znajduje się pod wpływem zimnego prądu."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki obecnego ocieplania klimatu.",
    "options": [
      "podnoszenie poziomu mórz i oceanów",
      "zalewanie nisko położonych wybrzeży",
      "częstsze gwałtowne zjawiska pogodowe",
      "więcej susz i pożarów lasów",
      "mniejsze migracje z najgorętszych obszarów",
      "całkowity brak chorób w ciepłych regionach"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_susza_poludnie_europy.jpg",
    "explanation": "Wymienia się m.in. topnienie lądolodów, wzrost poziomu mórz, zalewanie wybrzeży, gwałtowne zjawiska pogodowe, susze i pożary."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W pewnym kraju lodowce dają początek licznym rzekom, a liczne wulkany sprawiają, że pod ziemią jest wysoka temperatura. Dlatego dobrze rozwijają się tam energetyka wodna i geotermalna. Który kraj opisano?",
    "options": [
      "Islandia",
      "Dania",
      "Francja",
      "Polska",
      "Niemcy",
      "Watykan"
    ],
    "answer": 0,
    "image": "r03_elektrownia_wodna_norwegia.jpg",
    "explanation": "Opisuje się Islandię jako kraj z lodowcami i wulkanami, co sprzyja energetyce wodnej oraz geotermalnej."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do właściwych organizacji lub stref.",
    "options": null,
    "items": [
      "27 państw członkowskich",
      "powstała w 1993 r.",
      "20 państw UE z euro",
      "Europejski Bank Centralny",
      "23 państwa z UE i 4 spoza UE",
      "brak kontroli na wielu granicach",
      "32 kraje",
      "sojusz wojskowy o charakterze obronnym"
    ],
    "categories": [
      "Unia Europejska",
      "strefa euro",
      "strefa Schengen",
      "NATO"
    ],
    "answer": {
      "Unia Europejska": [
        "27 państw członkowskich",
        "powstała w 1993 r."
      ],
      "strefa euro": [
        "20 państw UE z euro",
        "Europejski Bank Centralny"
      ],
      "strefa Schengen": [
        "23 państwa z UE i 4 spoza UE",
        "brak kontroli na wielu granicach"
      ],
      "NATO": [
        "32 kraje",
        "sojusz wojskowy o charakterze obronnym"
      ]
    },
    "explanation": "Pytanie łączy informacje o UE, strefie euro, strefie Schengen i NATO: każda z tych struktur ma inny cel i skład."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się wartość wszystkich towarów i usług wytworzonych w państwie w ciągu roku?",
    "options": null,
    "answer": "produkt krajowy brutto",
    "altAnswers": [
      "produkt krajowy brutto",
      "PKB",
      "pkb"
    ],
    "explanation": "Wartość wszystkich towarów i usług wytworzonych w państwie w ciągu roku to produkt krajowy brutto, czyli PKB."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do krajów spoza UE używających euro jako głównej waluty: Andora, Czarnogóra, Kosowo, Monako, Niemcy.",
    "options": null,
    "answer": "Niemcy",
    "explanation": "Andora, Czarnogóra, Kosowo i Monako są wymienione jako kraje nienależące do UE, w których euro jest główną walutą. Niemcy są państwem członkowskim UE i strefy euro."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Uran jest odnawialnym źródłem energii, ponieważ jego wykorzystanie w elektrowniach jądrowych nie powoduje emisji substancji szkodliwych dla środowiska i klimatu.",
    "options": null,
    "answer": false,
    "explanation": "Zalicza się uran do źródeł nieodnawialnych. To, że jego wykorzystanie nie powoduje takich emisji, nie czyni go źródłem odnawialnym."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz religię lub określenie z informacją.",
    "options": null,
    "left": [
      "chrześcijaństwo",
      "islam",
      "świątynie islamu",
      "świątynie prawosławne"
    ],
    "right": [
      "chrześcijanie",
      "muzułmanie",
      "meczety",
      "cerkwie"
    ],
    "answer": {
      "chrześcijaństwo": "chrześcijanie",
      "islam": "muzułmanie",
      "świątynie islamu": "meczety",
      "świątynie prawosławne": "cerkwie"
    },
    "explanation": "Wyznawcy chrześcijaństwa to chrześcijanie, wyznawcy islamu to muzułmanie, świątynie islamu to meczety, a świątynie prawosławne to cerkwie."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W państwie więcej ludzi osiedla się z zagranicy, niż wyprowadza się do innych krajów. Jak nazywa się takie państwo?",
    "options": [
      "kraj imigracyjny",
      "kraj emigracyjny",
      "enklawa",
      "eksklawa",
      "państwo kandydujące",
      "strefa euro"
    ],
    "answer": 0,
    "image": "r03_migranci_na_dworcach.jpg",
    "explanation": "Kraj imigracyjny to kraj, do którego więcej ludzi się przeprowadza, niż z niego wyprowadza."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Środowisko geograficzne Europy",
  icon: "🌍",
  sectionOrder: [
    "Położenie i państwa Europy",
    "Ukształtowanie i wody Europy",
    "Klimat i zmiana klimatu",
    "Ludność i migracje",
    "Gospodarka i energetyka",
    "Unia Europejska i NATO"
  ],
  sectionIcons: {
    "Położenie i państwa Europy": "🗺️",
    "Ukształtowanie i wody Europy": "🏔️",
    "Klimat i zmiana klimatu": "🌦️",
    "Ludność i migracje": "👥",
    "Gospodarka i energetyka": "⚡",
    "Unia Europejska i NATO": "🤝"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
