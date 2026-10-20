// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POK  = Położenie i krajobrazy Polski
//   GEO  = Budowa geologiczna i surowce
//   KLG  = Klimat i gleby Polski
//   BAL  = Ochrona przyrody i Morze Bałtyckie
//   LUD  = Ludność Polski
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_POK_01",
    "section": "Położenie i krajobrazy Polski",
    "type": "single_choice",
    "prompt": "Który punkt jest najdalej wysuniętym na północ miejscem Polski?",
    "options": [
      "kolano Odry",
      "Jastrzębia Góra",
      "szczyt Opołonek",
      "kolano Bugu",
      "Hel",
      "Świnoujście"
    ],
    "answer": 1,
    "explanation": "Północny punkt skrajny Polski leży w Jastrzębiej Górze.",
    "image": "r03_punkty_skrajne_polski.jpg"
  },
  {
    "id": "R03_POK_02",
    "section": "Położenie i krajobrazy Polski",
    "type": "single_choice",
    "prompt": "Z którym państwem Polska ma najdłuższą granicę lądową?",
    "options": [
      "Niemcami",
      "Ukrainą",
      "Słowacją",
      "Białorusią",
      "Czechami",
      "Rosją"
    ],
    "answer": 4,
    "explanation": "Granica polsko-czeska ma około 796 km i jest najdłuższą granicą lądową Polski."
  },
  {
    "id": "R03_POK_03",
    "section": "Położenie i krajobrazy Polski",
    "type": "single_choice",
    "prompt": "Jak nazywa się największe jezioro Polski pod względem powierzchni?",
    "options": [
      "Hańcza",
      "Śniardwy",
      "Gardno",
      "Łebsko",
      "Wigry",
      "Drawsko"
    ],
    "answer": 1,
    "explanation": "Śniardwy są największym jeziorem Polski; Hańcza jest najgłębszym."
  },
  {
    "id": "R03_POK_04",
    "section": "Położenie i krajobrazy Polski",
    "type": "multi_select",
    "prompt": "Zaznacz naturalne składniki krajobrazu.",
    "options": [
      "rzeka",
      "parking",
      "skały",
      "jezioro",
      "centrum handlowe",
      "las"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Do naturalnych elementów krajobrazu należą wody, skały i roślinność; parkingi i centra handlowe są antropogeniczne."
  },
  {
    "id": "R03_POK_05",
    "section": "Położenie i krajobrazy Polski",
    "type": "true_false",
    "prompt": "Na wschodnim krańcu Polski Słońce wschodzi około 40 minut wcześniej niż na zachodnim.",
    "options": null,
    "answer": true,
    "explanation": "Rozciągłość równoleżnikowa Polski powoduje około 40 minut różnicy czasu słonecznego."
  },
  {
    "id": "R03_POK_06",
    "section": "Położenie i krajobrazy Polski",
    "type": "fill_in",
    "prompt": "Polskie morze terytorialne ma szerokość __________ mil morskich.",
    "options": null,
    "answer": [
      "12"
    ],
    "explanation": "Morze terytorialne Polski ma szerokość 12 mil morskich.",
    "altAnswers": [
      [
        "12",
        "dwanaście"
      ]
    ]
  },
  {
    "id": "R03_POK_07",
    "section": "Położenie i krajobrazy Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się wygląd danego obszaru, tworzony przez elementy naturalne i antropogeniczne?",
    "options": null,
    "answer": "krajobraz",
    "explanation": "Krajobraz to ogólny wygląd obszaru, kształtowany przez przyrodę i działalność człowieka.",
    "altAnswers": [
      "krajobraz"
    ]
  },
  {
    "id": "R03_POK_08",
    "section": "Położenie i krajobrazy Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest punktem skrajnym Polski: Jastrzębia Góra, kolano Odry, Opołonek, Tatry.",
    "options": null,
    "answer": "Tatry",
    "explanation": "Tatry są pasmem górskim, natomiast pozostałe nazwy odnoszą się do punktów skrajnych Polski."
  },
  {
    "id": "R03_POK_09",
    "section": "Położenie i krajobrazy Polski",
    "type": "scenario",
    "prompt": "Na pocztówce widać stromy brzeg, u którego podstawy fale Bałtyku podcinają skały. Jaką formę brzegu przedstawia fotografia?",
    "options": [
      "wydmę",
      "mierzeję",
      "deltę",
      "starorzecze",
      "sandr",
      "klif"
    ],
    "answer": 5,
    "explanation": "Klif to wysoki brzeg morski niszczony przez fale; jest charakterystycznym elementem krajobrazu nadmorskiego.",
    "image": "r03_brzeg_klifowy.jpg"
  },
  {
    "id": "R03_POK_10",
    "section": "Położenie i krajobrazy Polski",
    "type": "match",
    "prompt": "Połącz punkty skrajne Polski z kierunkami świata.",
    "options": null,
    "answer": {
      "Jastrzębia Góra": "północ",
      "kolano Bugu": "wschód",
      "szczyt Opołonek": "południe",
      "kolano Odry": "zachód"
    },
    "explanation": "Mapa punktów skrajnych wskazuje: Jastrzębia Góra – północ, Bug – wschód, Opołonek – południe, Odra – zachód.",
    "left": [
      "Jastrzębia Góra",
      "kolano Bugu",
      "szczyt Opołonek",
      "kolano Odry"
    ],
    "right": [
      "zachód",
      "południe",
      "wschód",
      "północ"
    ],
    "image": "r03_punkty_skrajne_polski.jpg"
  },
  {
    "id": "R03_POK_11",
    "section": "Położenie i krajobrazy Polski",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty krajobrazu do składników naturalnych i antropogenicznych.",
    "options": null,
    "answer": {
      "naturalne": [
        "jezioro",
        "skała",
        "rzeka"
      ],
      "antropogeniczne": [
        "droga",
        "blok mieszkalny",
        "sztuczny zbiornik"
      ]
    },
    "explanation": "Rzeki, jeziora i skały są naturalne, a drogi, zabudowa i sztuczne zbiorniki są dziełem człowieka.",
    "items": [
      "jezioro",
      "rzeka",
      "blok mieszkalny",
      "skała",
      "droga",
      "sztuczny zbiornik"
    ],
    "categories": [
      "naturalne",
      "antropogeniczne"
    ]
  },
  {
    "id": "R03_POK_12",
    "section": "Położenie i krajobrazy Polski",
    "type": "sequence",
    "prompt": "Ułóż pasy krajobrazowe Polski od północy ku południu.",
    "options": null,
    "answer": [
      "pobrzeża",
      "pojezierza",
      "niziny środkowopolskie",
      "wyżyny polskie",
      "kotliny podkarpackie",
      "góry"
    ],
    "explanation": "Pasy krajobrazowe Polski mają układ równoleżnikowy i występują kolejno od pobrzeży po góry.",
    "items": [
      "niziny środkowopolskie",
      "wyżyny polskie",
      "kotliny podkarpackie",
      "góry",
      "pobrzeża",
      "pojezierza"
    ],
    "image": "r03_pasy_krajobrazowe.jpg"
  },
  {
    "id": "R03_GEO_01",
    "section": "Budowa geologiczna i surowce",
    "type": "single_choice",
    "prompt": "Na granicy ilu głównych jednostek geologicznych Europy położona jest Polska?",
    "options": [
      "dwóch",
      "trzech",
      "czterech",
      "pięciu",
      "sześciu",
      "jednej"
    ],
    "answer": 1,
    "explanation": "Są to platforma wschodnioeuropejska, obszar fałdowań paleozoicznych i obszar fałdowań alpejskich.",
    "image": "r03_jednostki_tektoniczne.jpg"
  },
  {
    "id": "R03_GEO_02",
    "section": "Budowa geologiczna i surowce",
    "type": "single_choice",
    "prompt": "W której orogenezie zostały ukształtowane Karpaty?",
    "options": [
      "kaledońskiej",
      "hercyńskiej",
      "uralskiej",
      "bajkalskiej",
      "alpejskiej",
      "kadomskiej"
    ],
    "answer": 4,
    "explanation": "Karpaty zostały ukształtowane podczas najmłodszych ruchów górotwórczych – orogenezy alpejskiej."
  },
  {
    "id": "R03_GEO_03",
    "section": "Budowa geologiczna i surowce",
    "type": "single_choice",
    "prompt": "W którym zagłębiu koncentruje się największa część krajowego wydobycia węgla kamiennego?",
    "options": [
      "Zagłębiu Turoszowskim",
      "Górnośląskim Zagłębiu Węglowym",
      "Zagłębiu Konińskim",
      "Zagłębiu Bełchatowskim",
      "Legnicko-Głogowskim Okręgu Miedziowym",
      "Zagłębiu Dolnośląskim"
    ],
    "answer": 1,
    "explanation": "Najważniejszym krajowym regionem wydobycia węgla kamiennego jest Górnośląskie Zagłębie Węglowe."
  },
  {
    "id": "R03_GEO_04",
    "section": "Budowa geologiczna i surowce",
    "type": "multi_select",
    "prompt": "Wskaż formy terenu i osady pozostawione przez działalność lądolodu.",
    "options": [
      "moreny",
      "ozy",
      "kemy",
      "sandry",
      "rafy koralowe",
      "głazy narzutowe"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Moreny, ozy, kemy, sandry i głazy narzutowe to formy oraz osady powstałe w wyniku działalności lądolodu.",
    "image": "r03_formy_polodowcowe.jpg"
  },
  {
    "id": "R03_GEO_05",
    "section": "Budowa geologiczna i surowce",
    "type": "true_false",
    "prompt": "Węgiel brunatny wydobywa się w Polsce głównie metodą odkrywkową.",
    "options": null,
    "answer": true,
    "explanation": "Odkrywki wymagają zdjęcia nadkładu, a ich działanie może obniżać poziom wód podziemnych.",
    "image": "r03_kopalnia_odkrywkowa.jpg"
  },
  {
    "id": "R03_GEO_06",
    "section": "Budowa geologiczna i surowce",
    "type": "fill_in",
    "prompt": "Najstarszy krystaliczny fundament platformy wschodnioeuropejskiej liczy około __________ miliardów lat.",
    "options": null,
    "answer": [
      "3–4"
    ],
    "explanation": "Skały fundamentu platformy wschodnioeuropejskiej mają miejscami około 3–4 mld lat.",
    "altAnswers": [
      [
        "3–4",
        "3-4",
        "od 3 do 4"
      ]
    ]
  },
  {
    "id": "R03_GEO_07",
    "section": "Budowa geologiczna i surowce",
    "type": "riddle",
    "prompt": "Jak nazywa się głaz przywleczony z daleka przez lądolód?",
    "options": null,
    "answer": "eratyk",
    "explanation": "Eratyki, nazywane głazami narzutowymi, zostały przeniesione na teren Polski przez lądolód.",
    "altAnswers": [
      "eratyk",
      "głaz narzutowy",
      "glaz narzutowy"
    ]
  },
  {
    "id": "R03_GEO_08",
    "section": "Budowa geologiczna i surowce",
    "type": "odd_one_out",
    "prompt": "Wskaż nazwę niebędącą formą polodowcową: morena, oz, kem, komin kopalniany.",
    "options": null,
    "answer": "komin kopalniany",
    "explanation": "Morena, oz i kem wiążą się z działalnością lądolodu; komin kopalniany jest konstrukcją przemysłową."
  },
  {
    "id": "R03_GEO_09",
    "section": "Budowa geologiczna i surowce",
    "type": "scenario",
    "prompt": "Na zdjęciu zakładu górniczego widać rozległą odkrywkę, zdejmowanie nadkładu i wielkie koparki. Który surowiec energetyczny wydobywa się w Polsce w ten sposób?",
    "options": [
      "węgiel kamienny",
      "gaz ziemny",
      "ropa naftowa",
      "sól kamienna",
      "ruda miedzi",
      "węgiel brunatny"
    ],
    "answer": 5,
    "explanation": "Odkrywkowa eksploatacja węgla brunatnego jest charakterystyczna m.in. dla zagłębi Bełchatowskiego i Turoszowskiego.",
    "image": "r03_kopalnia_odkrywkowa.jpg"
  },
  {
    "id": "R03_GEO_10",
    "section": "Budowa geologiczna i surowce",
    "type": "match",
    "prompt": "Połącz zasób mineralny z obszarem jego występowania lub eksploatacji.",
    "options": null,
    "answer": {
      "węgiel kamienny": "Górnośląskie Zagłębie Węglowe",
      "miedź": "okręg legnicko-głogowski",
      "cynk i ołów": "okolice Olkusza",
      "sól kamienna": "Wieliczka i Bochnia"
    },
    "explanation": "Różne surowce występują w określonych obszarach geologicznych Polski i są tam eksploatowane.",
    "left": [
      "węgiel kamienny",
      "miedź",
      "cynk i ołów",
      "sól kamienna"
    ],
    "right": [
      "Wieliczka i Bochnia",
      "okolice Olkusza",
      "okręg legnicko-głogowski",
      "Górnośląskie Zagłębie Węglowe"
    ]
  },
  {
    "id": "R03_GEO_11",
    "section": "Budowa geologiczna i surowce",
    "type": "sort",
    "prompt": "Podziel przykłady zasobów naturalnych na odnawialne i nieodnawialne.",
    "options": null,
    "answer": {
      "odnawialne": [
        "drewno",
        "płody rolne",
        "biogaz"
      ],
      "nieodnawialne": [
        "węgiel kamienny",
        "ropa naftowa",
        "rudy metali"
      ]
    },
    "explanation": "Drewno, płody rolne i biogaz są odnawialne, a złoża kopalin mineralnych są nieodnawialne.",
    "items": [
      "drewno",
      "biogaz",
      "ropa naftowa",
      "płody rolne",
      "węgiel kamienny",
      "rudy metali"
    ],
    "categories": [
      "odnawialne",
      "nieodnawialne"
    ]
  },
  {
    "id": "R03_GEO_12",
    "section": "Budowa geologiczna i surowce",
    "type": "sequence",
    "prompt": "Ułóż etapy przekształcania śniegu w lód lodowcowy i ruch lodowca.",
    "options": null,
    "answer": [
      "nagromadzenie śniegu",
      "powstanie firnu",
      "powstanie lodu firnowego",
      "powstanie lodu lodowcowego",
      "spływ jęzora lodowca"
    ],
    "explanation": "Śnieg gromadzi się i przechodzi przez fazę firnu i lodu firnowego w lód lodowcowy, który może spływać jęzorem.",
    "items": [
      "powstanie lodu firnowego",
      "powstanie lodu lodowcowego",
      "spływ jęzora lodowca",
      "nagromadzenie śniegu",
      "powstanie firnu"
    ],
    "image": "r03_lodowiec_gorski.jpg"
  },
  {
    "id": "R03_KLG_01",
    "section": "Klimat i gleby Polski",
    "type": "single_choice",
    "prompt": "Jak określa się klimat Polski w strefie umiarkowanej ciepłej?",
    "options": [
      "wybitnie kontynentalny",
      "przejściowy",
      "równikowy wilgotny",
      "podzwrotnikowy suchy",
      "polarny",
      "monsunowy"
    ],
    "answer": 1,
    "explanation": "Polska ma klimat umiarkowany ciepły przejściowy, łączący wpływy morskie i kontynentalne."
  },
  {
    "id": "R03_KLG_02",
    "section": "Klimat i gleby Polski",
    "type": "single_choice",
    "prompt": "Jaki wiatr wieje z gór w stronę dolin i jest ciepły oraz suchy?",
    "options": [
      "bryza morska",
      "pasat",
      "monsun",
      "mistral",
      "halny",
      "bora"
    ],
    "answer": 4,
    "explanation": "Halny jest wiatrem ciepłym i suchym, wiejącym z gór ku dolinom."
  },
  {
    "id": "R03_KLG_03",
    "section": "Klimat i gleby Polski",
    "type": "single_choice",
    "prompt": "Które gleby należą w Polsce do najbardziej żyznych i tworzą się na lessach?",
    "options": [
      "bielice",
      "czarnoziemy",
      "mady",
      "rędziny",
      "gleby rdzawe",
      "gleby bagienne"
    ],
    "answer": 1,
    "explanation": "Czarnoziemy rozwinęły się na lessach i zaliczają się do najbardziej żyznych gleb w Polsce.",
    "image": "r03_profil_glebowy.jpg"
  },
  {
    "id": "R03_KLG_04",
    "section": "Klimat i gleby Polski",
    "type": "multi_select",
    "prompt": "Wybierz czynniki wpływające na klimat Polski.",
    "options": [
      "szerokość geograficzna",
      "ukształtowanie terenu",
      "odległość od mórz i oceanów",
      "napływ mas powietrza",
      "kolor flagi państwowej",
      "układy baryczne"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      5
    ],
    "explanation": "Klimat zależy od położenia, rzeźby terenu, wpływu zbiorników wodnych, mas powietrza i ośrodków ciśnienia."
  },
  {
    "id": "R03_KLG_05",
    "section": "Klimat i gleby Polski",
    "type": "true_false",
    "prompt": "Wpływ Morza Bałtyckiego sprawia, że na polskim wybrzeżu lata są na ogół chłodniejsze, a zimy cieplejsze.",
    "options": null,
    "answer": true,
    "explanation": "Klimat morski zmniejsza roczne amplitudy temperatury: chłodzi latem i łagodzi zimy."
  },
  {
    "id": "R03_KLG_06",
    "section": "Klimat i gleby Polski",
    "type": "fill_in",
    "prompt": "W bielicach szczególnie silnie rozwinięty jest poziom wymywania oznaczany literą __________.",
    "options": null,
    "answer": [
      "E"
    ],
    "explanation": "W piaskach i żwirach woda łatwo przesiąka, dlatego poziom wymywania E jest charakterystyczny dla bielic.",
    "altAnswers": [
      [
        "E",
        "e"
      ]
    ],
    "image": "r03_profil_glebowy.jpg"
  },
  {
    "id": "R03_KLG_07",
    "section": "Klimat i gleby Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się gleba tworząca się z rzecznych namułów zwanych aluwiami?",
    "options": null,
    "answer": "mada",
    "explanation": "Mady powstają w dolinach i deltach rzek z osadzanych namułów; rozległe mady występują na Żuławach Wiślanych.",
    "altAnswers": [
      "mada",
      "mady"
    ]
  },
  {
    "id": "R03_KLG_08",
    "section": "Klimat i gleby Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż glebę strefową spośród pozostałych gleb astrefowych: mada, rędzina, gleba bagienna, bielica.",
    "options": null,
    "answer": "bielica",
    "explanation": "Bielice są związane głównie z warunkami klimatycznymi, podczas gdy mady, rędziny i gleby bagienne są astrefowe."
  },
  {
    "id": "R03_KLG_09",
    "section": "Klimat i gleby Polski",
    "type": "scenario",
    "prompt": "Jest letni dzień nad Bałtykiem. Ląd nagrzewa się szybciej niż woda, a lekki wiatr wieje od morza ku plaży. Jak nazywa się ten lokalny wiatr?",
    "options": [
      "halny",
      "pasat",
      "monsun",
      "wiatr fenowy",
      "wyż azorski",
      "bryza"
    ],
    "answer": 5,
    "explanation": "W dzień bryza na wybrzeżu wieje od morza ku lądowi; w nocy kierunek jest odwrotny.",
    "image": "r03_bryza_nadmorska.jpg"
  },
  {
    "id": "R03_KLG_10",
    "section": "Klimat i gleby Polski",
    "type": "match",
    "prompt": "Połącz masę powietrza z jej typowym wpływem na pogodę.",
    "options": null,
    "answer": {
      "polarne morskie latem": "ochłodzenie i opady",
      "polarne kontynentalne zimą": "pogoda słoneczna i mroźna",
      "arktyczne wiosną": "ochłodzenie i przymrozki",
      "zwrotnikowe kontynentalne latem": "susze i upały"
    },
    "explanation": "Masy powietrza napływające znad Atlantyku, wschodniej Europy, Arktyki i obszarów zwrotnikowych różnie wpływają na pogodę w Polsce.",
    "left": [
      "polarne morskie latem",
      "polarne kontynentalne zimą",
      "arktyczne wiosną",
      "zwrotnikowe kontynentalne latem"
    ],
    "right": [
      "susze i upały",
      "ochłodzenie i przymrozki",
      "pogoda słoneczna i mroźna",
      "ochłodzenie i opady"
    ],
    "image": "r03_masy_powietrza_polska.jpg"
  },
  {
    "id": "R03_KLG_11",
    "section": "Klimat i gleby Polski",
    "type": "sort",
    "prompt": "Podziel typy gleb Polski na strefowe i astrefowe.",
    "options": null,
    "answer": {
      "strefowe": [
        "brunatne",
        "płowe",
        "czarnoziemy",
        "bielice"
      ],
      "astrefowe": [
        "mady",
        "rędziny",
        "bagienne"
      ]
    },
    "explanation": "Strefowe wiążą się przede wszystkim z klimatem; astrefowe zależą szczególnie od podłoża i stosunków wodnych.",
    "items": [
      "brunatne",
      "czarnoziemy",
      "mady",
      "bagienne",
      "płowe",
      "bielice",
      "rędziny"
    ],
    "categories": [
      "strefowe",
      "astrefowe"
    ]
  },
  {
    "id": "R03_KLG_12",
    "section": "Klimat i gleby Polski",
    "type": "sequence",
    "prompt": "Ułóż charakterystyczne poziomy profilu gleby bielicowej od powierzchni do skały macierzystej.",
    "options": null,
    "answer": [
      "poziom próchniczny A",
      "poziom wymywania E",
      "poziom wzbogacania B",
      "skała macierzysta C"
    ],
    "explanation": "W profilu bielicowym pod poziomem A leży wyraźny poziom wymywania E, dalej B i skała macierzysta C.",
    "items": [
      "poziom wzbogacania B",
      "skała macierzysta C",
      "poziom próchniczny A",
      "poziom wymywania E"
    ],
    "image": "r03_profil_glebowy.jpg"
  },
  {
    "id": "R03_BAL_01",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Który park narodowy chroni ruchome wydmy na polskim wybrzeżu?",
    "options": [
      "Biebrzański",
      "Słowiński",
      "Pieniński",
      "Tatrzański",
      "Roztoczański",
      "Ojcowski"
    ],
    "answer": 1,
    "explanation": "Ruchome wydmy są charakterystycznym walorem Słowińskiego Parku Narodowego."
  },
  {
    "id": "R03_BAL_02",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Ile wynosi średnie zasolenie Morza Bałtyckiego?",
    "options": [
      "około 35‰",
      "około 20‰",
      "około 1‰",
      "około 60‰",
      "około 7‰",
      "około 80‰"
    ],
    "answer": 4,
    "explanation": "Bałtyk jest morzem słonawym; jego średnie zasolenie wynosi około 7‰."
  },
  {
    "id": "R03_BAL_03",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "W którym porcie morskim od 2015 roku działa terminal LNG?",
    "options": [
      "Gdańsku",
      "Świnoujściu",
      "Gdyni",
      "Kołobrzegu",
      "Helu",
      "Ustce"
    ],
    "answer": 1,
    "explanation": "Terminal do odbioru skroplonego gazu ziemnego działa w Świnoujściu od 2015 roku."
  },
  {
    "id": "R03_BAL_04",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "multi_select",
    "prompt": "Wskaż cele ochrony przyrody.",
    "options": [
      "zachowanie różnorodności biologicznej",
      "utrzymanie stabilności ekosystemów",
      "ochrona dziedzictwa geologicznego",
      "zapewnienie ciągłości istnienia gatunków",
      "osuszenie wszystkich mokradeł",
      "przekształcanie parków narodowych w kopalnie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ochrona przyrody obejmuje różnorodność gatunków, siedliska, ekosystemy oraz dziedzictwo geologiczne."
  },
  {
    "id": "R03_BAL_05",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "true_false",
    "prompt": "Średnie zasolenie Morza Bałtyckiego jest większe niż średnie zasolenie oceanów.",
    "options": null,
    "answer": false,
    "explanation": "W Bałtyku wynosi około 7‰, a w oceanach około 35‰."
  },
  {
    "id": "R03_BAL_06",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "fill_in",
    "prompt": "Park narodowy w Polsce powinien mieć powierzchnię co najmniej __________ hektarów.",
    "options": null,
    "answer": [
      "1000"
    ],
    "explanation": "Park narodowy w Polsce obejmuje obszar o powierzchni nie mniejszej niż 1000 ha.",
    "altAnswers": [
      [
        "1000",
        "1 000",
        "tysiąc"
      ]
    ]
  },
  {
    "id": "R03_BAL_07",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "riddle",
    "prompt": "Jak nazywa się przeżyźnienie wód związkami azotu i fosforu, prowadzące do wzmożonego rozwoju glonów i sinic?",
    "options": null,
    "answer": "eutrofizacja",
    "explanation": "Eutrofizacja sprzyja zakwitom, a rozkład szczątków obumarłych organizmów zużywa tlen w wodzie.",
    "altAnswers": [
      "eutrofizacja"
    ],
    "image": "r03_eutrofizacja_baltyku.jpg"
  },
  {
    "id": "R03_BAL_08",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt niebędący parkiem narodowym: Biebrzański, Białowieski, Woliński, Zatoka Gdańska.",
    "options": null,
    "answer": "Zatoka Gdańska",
    "explanation": "Zatoka Gdańska jest częścią Bałtyku; pozostałe nazwy odnoszą się do polskich parków narodowych."
  },
  {
    "id": "R03_BAL_09",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "scenario",
    "prompt": "Do Bałtyku spływają z pól duże ilości związków azotu i fosforu. Następuje masowy zakwit sinic, a później ich rozkład zużywa tlen przy dnie. Jaki problem środowiskowy opisano?",
    "options": [
      "erozję wietrzną",
      "orogenezę",
      "ruchy pływowe",
      "sukcesję wydmową",
      "zlodowacenie",
      "eutrofizację"
    ],
    "answer": 5,
    "explanation": "Wzrost dopływu biogenów wywołuje eutrofizację, której skutkiem może być niedotlenienie wód i tzw. pustynie siarkowodorowe.",
    "image": "r03_eutrofizacja_baltyku.jpg"
  },
  {
    "id": "R03_BAL_10",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "match",
    "prompt": "Połącz park narodowy z charakterystycznym chronionym elementem przyrody.",
    "options": null,
    "answer": {
      "Białowieski": "żubry i lasy zbliżone do pierwotnych",
      "Biebrzański": "bagna i torfowiska",
      "Pieniński": "przełom Dunajca",
      "Świętokrzyski": "gołoborza"
    },
    "explanation": "Każdy park narodowy chroni charakterystyczne dla swojego obszaru walory przyrodnicze.",
    "left": [
      "Białowieski",
      "Biebrzański",
      "Pieniński",
      "Świętokrzyski"
    ],
    "right": [
      "gołoborza",
      "przełom Dunajca",
      "bagna i torfowiska",
      "żubry i lasy zbliżone do pierwotnych"
    ],
    "image": "r03_parki_krajobrazy.jpg"
  },
  {
    "id": "R03_BAL_11",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "sort",
    "prompt": "Podziel działania związane z Bałtykiem na źródła presji środowiskowej i przykłady gospodarki morskiej.",
    "options": null,
    "answer": {
      "presja środowiskowa": [
        "wycieki ropy",
        "spływ nawozów z pól",
        "hałas od statków"
      ],
      "gospodarka morska": [
        "rybołówstwo",
        "terminal LNG",
        "remonty statków"
      ]
    },
    "explanation": "Wycieki, biogeny i hałas obciążają środowisko; pozostałe przykłady odnoszą się do morskich sektorów gospodarki.",
    "items": [
      "wycieki ropy",
      "hałas od statków",
      "terminal LNG",
      "spływ nawozów z pól",
      "rybołówstwo",
      "remonty statków"
    ],
    "categories": [
      "presja środowiskowa",
      "gospodarka morska"
    ]
  },
  {
    "id": "R03_BAL_12",
    "section": "Ochrona przyrody i Morze Bałtyckie",
    "type": "sequence",
    "prompt": "Ułóż etapy eutrofizacji Bałtyku w kolejności przyczynowo-skutkowej.",
    "options": null,
    "answer": [
      "dopływ azotu i fosforu",
      "masowy rozwój glonów i sinic",
      "obumieranie organizmów i opadanie szczątków",
      "zużywanie tlenu podczas rozkładu",
      "powstawanie obszarów beztlenowych"
    ],
    "explanation": "Eutrofizacja obejmuje dopływ biogenów, zakwit glonów, obumieranie organizmów, zużycie tlenu i powstawanie stref beztlenowych.",
    "items": [
      "obumieranie organizmów i opadanie szczątków",
      "zużywanie tlenu podczas rozkładu",
      "powstawanie obszarów beztlenowych",
      "dopływ azotu i fosforu",
      "masowy rozwój glonów i sinic"
    ],
    "image": "r03_eutrofizacja_baltyku.jpg"
  },
  {
    "id": "R03_LUD_01",
    "section": "Ludność Polski",
    "type": "single_choice",
    "prompt": "Która grupa wieku była w 2019 roku najliczniejsza w Polsce?",
    "options": [
      "osoby w wieku 5 lat",
      "osoby w wieku 36 lat",
      "osoby w wieku 15 lat",
      "osoby w wieku 55 lat",
      "osoby w wieku 75 lat",
      "osoby w wieku 90 lat"
    ],
    "answer": 1,
    "explanation": "W rozkładzie ludności Polski według wieku z 2019 roku najliczniejsi byli 36-latkowie."
  },
  {
    "id": "R03_LUD_02",
    "section": "Ludność Polski",
    "type": "single_choice",
    "prompt": "Jak oblicza się przyrost naturalny ludności?",
    "options": [
      "liczba zgonów minus liczba urodzeń",
      "liczba przyjazdów minus wyjazdów",
      "urodzenia plus saldo migracji",
      "liczba ludności razy 1000",
      "liczba urodzeń minus liczba zgonów",
      "urodzenia plus zgony"
    ],
    "answer": 4,
    "explanation": "Przyrost naturalny to różnica między liczbą urodzeń i zgonów: PN = U − Z."
  },
  {
    "id": "R03_LUD_03",
    "section": "Ludność Polski",
    "type": "single_choice",
    "prompt": "Ile w przybliżeniu kobiet przypadało w Polsce na 100 mężczyzn?",
    "options": [
      "około 90",
      "około 108",
      "około 100",
      "około 120",
      "około 150",
      "około 80"
    ],
    "answer": 1,
    "explanation": "Współczynnik feminizacji wynosił około 108 kobiet na 100 mężczyzn."
  },
  {
    "id": "R03_LUD_04",
    "section": "Ludność Polski",
    "type": "multi_select",
    "prompt": "Jakie informacje można odczytywać z piramidy płci i wieku?",
    "options": [
      "liczebność kobiet w danym wieku",
      "liczebność mężczyzn w danym wieku",
      "udział młodszych i starszych roczników",
      "wyże i niże demograficzne",
      "rodzaje kopalin w podłożu",
      "położenie granic państwowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Piramida przedstawia liczbę osób według płci i wieku i pozwala rozpoznać wyże oraz niże demograficzne.",
    "image": "r03_piramida_plci_wieku.jpg"
  },
  {
    "id": "R03_LUD_05",
    "section": "Ludność Polski",
    "type": "true_false",
    "prompt": "Na typowej piramidzie wieku ludności lewa strona odpowiada kobietom, a prawa mężczyznom.",
    "options": null,
    "answer": false,
    "explanation": "Na typowej piramidzie wieku mężczyzn przedstawia się po lewej stronie, a kobiety po prawej.",
    "image": "r03_piramida_plci_wieku.jpg"
  },
  {
    "id": "R03_LUD_06",
    "section": "Ludność Polski",
    "type": "fill_in",
    "prompt": "Współczynnik przyrostu naturalnego jest podawany w promilach, czyli w przeliczeniu na __________ mieszkańców.",
    "options": null,
    "answer": [
      "1000"
    ],
    "explanation": "Współczynnik przyrostu naturalnego oblicza się na 1000 mieszkańców.",
    "altAnswers": [
      [
        "1000",
        "1 000",
        "tysiąc"
      ]
    ]
  },
  {
    "id": "R03_LUD_07",
    "section": "Ludność Polski",
    "type": "riddle",
    "prompt": "Jak nazywa się różnica między liczbą osób przyjeżdżających do danego miejsca a liczbą osób stamtąd wyjeżdżających?",
    "options": null,
    "answer": "saldo migracji",
    "explanation": "Dodatnie saldo oznacza przewagę napływu, ujemne przewagę odpływu ludności.",
    "altAnswers": [
      "saldo migracji"
    ]
  },
  {
    "id": "R03_LUD_08",
    "section": "Ludność Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż pojęcie niezwiązane z demografią: urodzenia, zgony, przyrost naturalny, orogeneza alpejska.",
    "options": null,
    "answer": "orogeneza alpejska",
    "explanation": "Orogeneza alpejska jest procesem górotwórczym, a pozostałe pojęcia dotyczą zmian liczby ludności."
  },
  {
    "id": "R03_LUD_09",
    "section": "Ludność Polski",
    "type": "scenario",
    "prompt": "W gminie więcej młodych osób wyjechało, niż do niej przyjechało. Jaki proces demograficzny może się tam nasilić?",
    "options": [
      "odmłodzenie populacji",
      "przyrost liczby dzieci spowodowany samymi wyjazdami",
      "zanik emigracji",
      "wzrost liczby kobiet na skutek odpływu kobiet",
      "rozwój krajobrazu młodoglacjalnego",
      "starzenie się społeczeństwa"
    ],
    "answer": 5,
    "explanation": "Odpływ młodych osób sprzyja starzeniu się społeczności lokalnej i zmniejsza jej liczebność.",
    "image": "r03_migracje_ludnosci.jpg"
  },
  {
    "id": "R03_LUD_10",
    "section": "Ludność Polski",
    "type": "match",
    "prompt": "Dopasuj termin demograficzny do definicji.",
    "options": null,
    "answer": {
      "przyrost naturalny": "urodzenia minus zgony",
      "saldo migracji": "przyjazdy minus wyjazdy",
      "przyrost rzeczywisty": "przyrost naturalny plus saldo migracji",
      "wyż demograficzny": "liczne roczniki ludności"
    },
    "explanation": "Stosuje się wzory PN = U − Z i P = PN + SM; piramida wieku pomaga rozpoznawać wyże i niże demograficzne.",
    "left": [
      "przyrost naturalny",
      "saldo migracji",
      "przyrost rzeczywisty",
      "wyż demograficzny"
    ],
    "right": [
      "liczne roczniki ludności",
      "przyrost naturalny plus saldo migracji",
      "przyjazdy minus wyjazdy",
      "urodzenia minus zgony"
    ]
  },
  {
    "id": "R03_LUD_11",
    "section": "Ludność Polski",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do ruchu naturalnego ludności lub migracji.",
    "options": null,
    "answer": {
      "ruch naturalny": [
        "urodzenia",
        "zgony",
        "przyrost naturalny"
      ],
      "migracje": [
        "emigracja",
        "imigracja",
        "saldo migracji"
      ]
    },
    "explanation": "Ruch naturalny wynika z urodzeń i zgonów, a migracje ze zmian miejsca zamieszkania.",
    "items": [
      "urodzenia",
      "przyrost naturalny",
      "imigracja",
      "zgony",
      "emigracja",
      "saldo migracji"
    ],
    "categories": [
      "ruch naturalny",
      "migracje"
    ]
  },
  {
    "id": "R03_LUD_12",
    "section": "Ludność Polski",
    "type": "sequence",
    "prompt": "Ułóż etapy zmian demograficznych Polski od najstarszego do najnowszego.",
    "options": null,
    "answer": [
      "powojenny wyż lat 50.",
      "niż demograficzny lat 70.",
      "wtórny wyż lat 80.",
      "ujemny przyrost naturalny od 2013 roku"
    ],
    "explanation": "Kolejne zjawiska to wyż powojenny, niż lat 70., echo wyżu lat 80. i ujemny przyrost naturalny notowany od 2013 r.",
    "items": [
      "wtórny wyż lat 80.",
      "ujemny przyrost naturalny od 2013 roku",
      "powojenny wyż lat 50.",
      "niż demograficzny lat 70."
    ]
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile godzin i minut trwa najdłuższy dzień w roku na równoleżniku 54°50′N?",
    "options": [
      "16 godzin 9 minut",
      "17 godzin 17 minut",
      "8 godzin 9 minut",
      "7 godzin 5 minut",
      "15 godzin 17 minut",
      "18 godzin 9 minut"
    ],
    "answer": 1,
    "explanation": "Na północy Polski najdłuższy dzień trwa około 17 godzin 17 minut; na 49°N 16 godzin 9 minut."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Długość granicy Polski z Litwą wynosi około __________ km, a z Czechami około __________ km.",
    "options": null,
    "answer": [
      "104",
      "796"
    ],
    "explanation": "Mapa granic pokazuje 104 km przy Litwie i 796 km przy Czechach.",
    "altAnswers": [
      [
        "104",
        "104 km"
      ],
      [
        "796",
        "796 km"
      ]
    ]
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które obiekty znajdują się na granicy Polski z Niemcami?",
    "options": [
      "Odra",
      "Nysa Łużycka",
      "Zalew Szczeciński",
      "Bug",
      "Tatry",
      "Zalew Wiślany"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Zachodnią granicę z Niemcami tworzą m.in. Odra i Nysa Łużycka, a także obszary Zalewu Szczecińskiego."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj wydarzenia wpływające na położenie geopolityczne Polski do lat.",
    "options": null,
    "answer": {
      "chrzest Polski": "966",
      "wstąpienie do NATO": "1999",
      "wejście do Unii Europejskiej": "2004",
      "wejście do strefy Schengen": "2007"
    },
    "explanation": "Ważne daty dotyczące Polski i Europy to 966, 1999, 2004 i 2007 rok.",
    "left": [
      "chrzest Polski",
      "wstąpienie do NATO",
      "wejście do Unii Europejskiej",
      "wejście do strefy Schengen"
    ],
    "right": [
      "2007",
      "2004",
      "1999",
      "966"
    ]
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "W której miejscowości znajduje się głaz narzutowy o nazwie Trygław?",
    "options": null,
    "answer": "Tychowo",
    "explanation": "Głaz narzutowy Trygław znajduje się w Tychowie.",
    "altAnswers": [
      "Tychowo",
      "w Tychowie"
    ]
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj formy i procesy do wydarzeń geologicznych.",
    "options": null,
    "answer": {
      "fałdowania paleozoiczne": [
        "Góry Świętokrzyskie",
        "Sudety"
      ],
      "fałdowania alpejskie": [
        "Karpaty",
        "zapadlisko przedkarpackie"
      ],
      "zlodowacenia plejstoceńskie": [
        "sandry",
        "głazy narzutowe"
      ]
    },
    "explanation": "Góry Świętokrzyskie i Sudety wiążą się z orogenezami paleozoicznymi, Karpaty z alpejską, a sandry i eratyki z lądolodem.",
    "items": [
      "Góry Świętokrzyskie",
      "Karpaty",
      "sandry",
      "Sudety",
      "zapadlisko przedkarpackie",
      "głazy narzutowe"
    ],
    "categories": [
      "fałdowania paleozoiczne",
      "fałdowania alpejskie",
      "zlodowacenia plejstoceńskie"
    ],
    "image": "r03_jednostki_tektoniczne.jpg"
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W obszarze krasowym na wapieniach rozwija się gleba żyzna, ale często kamienista i trudna do uprawy. Która gleba pasuje do tego opisu?",
    "options": [
      "czarnoziem",
      "rędzina",
      "mada",
      "bielica",
      "gleba bagienna",
      "gleba płowa"
    ],
    "answer": 1,
    "explanation": "Rędziny są glebami astrefowymi rozwijającymi się na skałach węglanowych, w tym wapieniach."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które zestawienia masy powietrza i jej skutków w Polsce są poprawne?",
    "options": [
      "polarne morskie zimą — odwilż",
      "polarne kontynentalne latem — upały i susze",
      "arktyczne wiosną — przymrozki",
      "zwrotnikowe kontynentalne latem — susze i upały",
      "polarne morskie latem — długotrwałe mrozy",
      "arktyczne zimą — stale gorąco"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Powietrze morskie sprzyja zimowym odwilżom, kontynentalne może przynosić susze i upały, a arktyczne powoduje ochłodzenia."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Gleby brunatne i płowe zajmują około __________% powierzchni Polski, a czarnoziemy około __________%.",
    "options": null,
    "answer": [
      "52",
      "1"
    ],
    "explanation": "Gleby brunatne i płowe zajmują około 52% powierzchni Polski, a czarnoziemy około 1%.",
    "altAnswers": [
      [
        "52",
        "52%"
      ],
      [
        "1",
        "1%"
      ]
    ]
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz krainę geograficzną z charakterystycznym dla niej typem gleby.",
    "options": null,
    "answer": {
      "Nizina Podlaska": "bagienne",
      "Żuławy Wiślane": "mady",
      "Wyżyna Lubelska": "czarnoziemy",
      "Pojezierze Mazurskie": "brunatne"
    },
    "explanation": "Krainy geograficzne Polski cechują się różnymi typami gleb, zależnie m.in. od podłoża i warunków przyrodniczych.",
    "left": [
      "Nizina Podlaska",
      "Żuławy Wiślane",
      "Wyżyna Lubelska",
      "Pojezierze Mazurskie"
    ],
    "right": [
      "brunatne",
      "czarnoziemy",
      "mady",
      "bagienne"
    ]
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż typy terenu od powstania na skutek działalności lodowca do krajobrazu po jego ustąpieniu.",
    "options": null,
    "answer": [
      "nasuwanie lądolodu",
      "osadzanie glin oraz piasków i żwirów",
      "cofanie się czoła lądolodu",
      "pozostawienie moren i zagłębień",
      "wypełnienie części zagłębień wodą jeziorną"
    ],
    "explanation": "Ruchy i topnienie lądolodu pozostawiły osady, moreny, zagłębienia i jeziora krajobrazu młodoglacjalnego.",
    "items": [
      "cofanie się czoła lądolodu",
      "pozostawienie moren i zagłębień",
      "wypełnienie części zagłębień wodą jeziorną",
      "nasuwanie lądolodu",
      "osadzanie glin oraz piasków i żwirów"
    ]
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który park narodowy chroni labirynty skalne powstałe w górach o charakterystycznej budowie piaskowcowej?",
    "options": [
      "Ojcowski Park Narodowy",
      "Woliński Park Narodowy",
      "Biebrzański Park Narodowy",
      "Białowieski Park Narodowy",
      "Park Narodowy Gór Stołowych",
      "Słowiński Park Narodowy"
    ],
    "answer": 4,
    "explanation": "Park Narodowy Gór Stołowych wyróżnia się labiryntami skalnymi.",
    "image": "r03_parki_krajobrazy.jpg"
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W pewnej gminie było 800 urodzeń i 1000 zgonów, a przyjechało 500 mieszkańców i wyjechało 800. Ile wyniósł przyrost rzeczywisty?",
    "options": [
      "−200 osób",
      "−500 osób",
      "+300 osób",
      "+500 osób",
      "−300 osób",
      "0 osób"
    ],
    "answer": 1,
    "explanation": "Przyrost naturalny: 800 − 1000 = −200. Saldo migracji: 500 − 800 = −300. Przyrost rzeczywisty: −200 + (−300) = −500."
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się wytworzona podczas orogenezy alpejskiej jednostka geologiczna leżąca przy Karpatach?",
    "options": null,
    "answer": "zapadlisko przedkarpackie",
    "explanation": "W wyniku orogenezy alpejskiej uformowały się Karpaty i zapadlisko przedkarpackie.",
    "altAnswers": [
      "zapadlisko przedkarpackie"
    ]
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W mieście liczącym 200 000 mieszkańców urodziło się w roku 1600 dzieci, a zmarło 2000 osób. Ile wynosił współczynnik przyrostu naturalnego?",
    "options": [
      "+2‰",
      "−4‰",
      "+4‰",
      "−0,2‰",
      "0‰",
      "−2‰"
    ],
    "answer": 5,
    "explanation": "Różnica urodzeń i zgonów to −400; (−400 / 200 000) × 1000 = −2‰."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r03",
  "number": 3,
  "title": "Geografia Polski – środowisko przyrodnicze i ludność",
  "icon": "🇵🇱",
  "sectionOrder": [
    "Położenie i krajobrazy Polski",
    "Budowa geologiczna i surowce",
    "Klimat i gleby Polski",
    "Ochrona przyrody i Morze Bałtyckie",
    "Ludność Polski"
  ],
  "sectionIcons": {
    "Położenie i krajobrazy Polski": "🗺️",
    "Budowa geologiczna i surowce": "⛏️",
    "Klimat i gleby Polski": "🌦️",
    "Ochrona przyrody i Morze Bałtyckie": "🌊",
    "Ludność Polski": "👥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
