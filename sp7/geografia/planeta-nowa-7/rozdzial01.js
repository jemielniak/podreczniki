// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POL  = Położenie i budowa geologiczna
//   RZE  = Rzeźba terenu i surowce
//   KLI  = Klimat Polski
//   WOD  = Wody i Morze Bałtyckie
//   PRZ  = Gleby, lasy i ochrona przyrody
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_POL_01",
    "section": "Położenie i budowa geologiczna",
    "type": "single_choice",
    "prompt": "W której części Europy leży Polska?",
    "options": [
      "W centralnej części Europy",
      "Na skrajnym zachodzie Europy",
      "Na skrajnym wschodzie Europy",
      "W północnej części Skandynawii",
      "Na Półwyspie Iberyjskim",
      "Na południu Półwyspu Bałkańskiego"
    ],
    "answer": 0,
    "explanation": "Polska leży w centralnej części Europy, w dużej części na Nizinie Środkowoeuropejskiej."
  },
  {
    "id": "R01_POL_02",
    "section": "Położenie i budowa geologiczna",
    "type": "multi_select",
    "prompt": "Zaznacz państwa, które graniczą z Polską.",
    "options": [
      "Czechy",
      "Słowacja",
      "Litwa",
      "Rosja",
      "Łotwa",
      "Węgry"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Polska ma siedmiu sąsiadów: Niemcy, Czechy, Słowację, Ukrainę, Białoruś, Litwę i Rosję."
  },
  {
    "id": "R01_POL_03",
    "section": "Położenie i budowa geologiczna",
    "type": "match",
    "prompt": "Połącz skrajny kierunek z odpowiednim miejscem w Polsce.",
    "options": null,
    "left": [
      "najdalej na północ",
      "najdalej na południe",
      "najdalej na zachód",
      "najdalej na wschód"
    ],
    "right": [
      "brzeg morza w Jastrzębiej Górze",
      "szczyt Opołonek",
      "zakole Odry koło Cedyni",
      "zakole Bugu koło Hrubieszowa"
    ],
    "answer": {
      "najdalej na północ": "brzeg morza w Jastrzębiej Górze",
      "najdalej na południe": "szczyt Opołonek",
      "najdalej na zachód": "zakole Odry koło Cedyni",
      "najdalej na wschód": "zakole Bugu koło Hrubieszowa"
    },
    "explanation": "Skrajne punkty Polski wyznaczają Jastrzębia Góra na północy, Opołonek na południu, okolice Cedyni na zachodzie i okolice Hrubieszowa na wschodzie.",
    "image": "r01_skrajne_punkty_polski.jpg"
  },
  {
    "id": "R01_POL_04",
    "section": "Położenie i budowa geologiczna",
    "type": "fill_in",
    "prompt": "Całkowita powierzchnia Polski wynosi około __________ tys. km², a Polska ma __________ sąsiadów.",
    "options": null,
    "answer": [
      "322,7",
      "7"
    ],
    "altAnswers": [
      [
        "322,7",
        "322.7"
      ],
      [
        "7",
        "siedmiu",
        "siedem"
      ]
    ],
    "explanation": "Całkowita powierzchnia Polski wynosi około 322,7 tys. km², a kraj graniczy z siedmioma państwami."
  },
  {
    "id": "R01_POL_05",
    "section": "Położenie i budowa geologiczna",
    "type": "true_false",
    "prompt": "Południową granicę Polski tworzą między innymi Sudety i Karpaty.",
    "options": null,
    "answer": true,
    "explanation": "Południowa granica Polski przebiega wzdłuż pasm górskich Sudetów i Karpat."
  },
  {
    "id": "R01_POL_06",
    "section": "Położenie i budowa geologiczna",
    "type": "single_choice",
    "prompt": "Jaką szerokość ma polskie morze terytorialne?",
    "options": [
      "12 mil morskich",
      "3 mile morskie",
      "6 mil morskich",
      "24 mile morskie",
      "50 mil morskich",
      "100 mil morskich"
    ],
    "answer": 0,
    "explanation": "Morze terytorialne Polski to pas wód o szerokości 12 mil morskich od linii brzegowej."
  },
  {
    "id": "R01_POL_07",
    "section": "Położenie i budowa geologiczna",
    "type": "riddle",
    "prompt": "Ile metrów ma jedna mila morska?",
    "options": null,
    "answer": "1852 m",
    "altAnswers": [
      "1852 m",
      "1852",
      "1 852 m"
    ],
    "explanation": "Mila morska jest jednostką długości używaną w żegludze i ma 1852 m."
  },
  {
    "id": "R01_POL_08",
    "section": "Położenie i budowa geologiczna",
    "type": "sequence",
    "prompt": "Ułóż skrajne punkty Polski od najbardziej na północ do najbardziej na południe.",
    "options": null,
    "items": [
      "szczyt Opołonek",
      "zakole Bugu koło Hrubieszowa",
      "brzeg morza w Jastrzębiej Górze",
      "zakole Odry koło Cedyni"
    ],
    "answer": [
      "brzeg morza w Jastrzębiej Górze",
      "zakole Odry koło Cedyni",
      "zakole Bugu koło Hrubieszowa",
      "szczyt Opołonek"
    ],
    "explanation": "Ich szerokości geograficzne maleją od Jastrzębiej Góry przez okolice Cedyni i Hrubieszowa do Opołonka.",
    "image": "r01_skrajne_punkty_polski.jpg"
  },
  {
    "id": "R01_POL_09",
    "section": "Położenie i budowa geologiczna",
    "type": "single_choice",
    "prompt": "Na której głównej jednostce geologicznej leży północno-wschodnia część Polski?",
    "options": [
      "Na platformie wschodnioeuropejskiej",
      "Na platformie paleozoicznej",
      "W strefie fałdowań alpejskich"
    ],
    "answer": 0,
    "explanation": "Północno-wschodnia część Polski leży na prekambryjskiej platformie wschodnioeuropejskiej.",
    "image": "r01_jednostki_geologiczne_polski.jpg"
  },
  {
    "id": "R01_POL_10",
    "section": "Położenie i budowa geologiczna",
    "type": "true_false",
    "prompt": "Karpaty zostały sfałdowane w wyniku alpejskich ruchów górotwórczych.",
    "options": null,
    "answer": true,
    "explanation": "Alpejskie ruchy górotwórcze rozpoczęły się pod koniec mezozoiku, a na początku kenozoiku doprowadziły do sfałdowania Karpat."
  },
  {
    "id": "R01_POL_11",
    "section": "Położenie i budowa geologiczna",
    "type": "match",
    "prompt": "Połącz erę z wydarzeniem charakterystycznym dla przeszłości geologicznej Polski.",
    "options": null,
    "left": [
      "paleozoik",
      "mezozoik",
      "kenozoik"
    ],
    "right": [
      "początek powstawania pokładów węgla kamiennego",
      "powstawanie wapieni z organizmów morskich",
      "sfałdowanie Karpat"
    ],
    "answer": {
      "paleozoik": "początek powstawania pokładów węgla kamiennego",
      "mezozoik": "powstawanie wapieni z organizmów morskich",
      "kenozoik": "sfałdowanie Karpat"
    },
    "explanation": "W karbonie paleozoiku zaczęły powstawać pokłady węgla kamiennego, w mezozoiku tworzyły się wapienie, a w kenozoiku sfałdowano Karpaty."
  },
  {
    "id": "R01_POL_12",
    "section": "Położenie i budowa geologiczna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ruchy kaledońskie, ruchy hercyńskie, ruchy alpejskie, zlodowacenie Wisły.",
    "options": null,
    "answer": "zlodowacenie Wisły",
    "explanation": "Kaledońskie, hercyńskie i alpejskie to ruchy górotwórcze, natomiast zlodowacenie Wisły było etapem plejstoceńskich zlodowaceń."
  },
  {
    "id": "R01_RZE_01",
    "section": "Rzeźba terenu i surowce",
    "type": "single_choice",
    "prompt": "Które zlodowacenie miało największy zasięg na obszarze Polski?",
    "options": [
      "Sanu",
      "Odry",
      "Wisły"
    ],
    "answer": 0,
    "explanation": "Największy zasięg miały zlodowacenia Sanu, które objęły prawie cały dzisiejszy obszar Polski."
  },
  {
    "id": "R01_RZE_02",
    "section": "Rzeźba terenu i surowce",
    "type": "match",
    "prompt": "Połącz formę polodowcową z jej opisem.",
    "options": null,
    "left": [
      "wzgórze moreny czołowej",
      "sandr",
      "pradolina",
      "rynna"
    ],
    "right": [
      "wzniesienie z materiału osadzonego u czoła lądolodu",
      "równina z piasków i żwirów nanoszonych przez wody roztopowe",
      "szeroka dolina utworzona wzdłuż czoła lądolodu",
      "podłużne zagłębienie wyżłobione przez wodę płynącą pod lądolodem"
    ],
    "answer": {
      "wzgórze moreny czołowej": "wzniesienie z materiału osadzonego u czoła lądolodu",
      "sandr": "równina z piasków i żwirów nanoszonych przez wody roztopowe",
      "pradolina": "szeroka dolina utworzona wzdłuż czoła lądolodu",
      "rynna": "podłużne zagłębienie wyżłobione przez wodę płynącą pod lądolodem"
    },
    "explanation": "Formy polodowcowe powstawały zarówno wskutek osadzania materiału przez lądolód, jak i działalności wód roztopowych.",
    "image": "r01_formy_polodowcowe.jpg"
  },
  {
    "id": "R01_RZE_03",
    "section": "Rzeźba terenu i surowce",
    "type": "true_false",
    "prompt": "Rynny polodowcowe powstały w wyniku erozyjnej działalności wody płynącej pod lądolodem.",
    "options": null,
    "answer": true,
    "explanation": "Woda pod lądolodem żłobiła podłużne zagłębienia, z których wiele jest dziś wypełnionych wodą jako jeziora rynnowe.",
    "image": "r01_formy_polodowcowe.jpg"
  },
  {
    "id": "R01_RZE_04",
    "section": "Rzeźba terenu i surowce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: sandr, pradolina, rynna, kocioł lodowcowy.",
    "options": null,
    "answer": "kocioł lodowcowy",
    "explanation": "Sandry, pradoliny i rynny wiążą się z działalnością lądolodu i jego wód roztopowych, a kotły lodowcowe są charakterystyczne dla lodowców górskich.",
    "image": "r01_formy_polodowcowe.jpg"
  },
  {
    "id": "R01_RZE_05",
    "section": "Rzeźba terenu i surowce",
    "type": "fill_in",
    "prompt": "Lodowiec górski przekształca dolinę __________ w dolinę __________.",
    "options": null,
    "answer": [
      "V-kształtną",
      "U-kształtną"
    ],
    "altAnswers": [
      [
        "V-kształtną",
        "V kształtną",
        "V-ksztaltną"
      ],
      [
        "U-kształtną",
        "U kształtną",
        "U-ksztaltną"
      ]
    ],
    "explanation": "Przed zlodowaceniem doliny rzeczne mają przekrój V-kształtny, a lodowiec górski poszerza je i pogłębia, nadając im przekrój U-kształtny."
  },
  {
    "id": "R01_RZE_06",
    "section": "Rzeźba terenu i surowce",
    "type": "sequence",
    "prompt": "Ułóż pasy rzeźby terenu Polski od północy ku południu.",
    "options": null,
    "items": [
      "Wyżyny Polskie",
      "pobrzeża",
      "góry",
      "Niziny Środkowopolskie",
      "Kotliny Podkarpackie",
      "pojezierza"
    ],
    "answer": [
      "pobrzeża",
      "pojezierza",
      "Niziny Środkowopolskie",
      "Wyżyny Polskie",
      "Kotliny Podkarpackie",
      "góry"
    ],
    "explanation": "Rzeźba Polski ma pasowy układ: pobrzeża, pojezierza, niziny, wyżyny, kotliny podkarpackie i góry.",
    "image": "r01_pasy_rzezby_polski.jpg"
  },
  {
    "id": "R01_RZE_07",
    "section": "Rzeźba terenu i surowce",
    "type": "true_false",
    "prompt": "Obszary nizinne stanowią około 9/10 powierzchni Polski.",
    "options": null,
    "answer": true,
    "explanation": "Polska jest krajem nizinnym, a obszary nizinne zajmują około 9/10 jej terytorium."
  },
  {
    "id": "R01_RZE_08",
    "section": "Rzeźba terenu i surowce",
    "type": "match",
    "prompt": "Połącz pas rzeźby terenu z krainą należącą do tego pasa.",
    "options": null,
    "left": [
      "pobrzeża",
      "pojezierza",
      "Niziny Środkowopolskie",
      "Kotliny Podkarpackie"
    ],
    "right": [
      "Pobrzeże Gdańskie",
      "Pojezierze Mazurskie",
      "Nizina Mazowiecka",
      "Kotlina Sandomierska"
    ],
    "answer": {
      "pobrzeża": "Pobrzeże Gdańskie",
      "pojezierza": "Pojezierze Mazurskie",
      "Niziny Środkowopolskie": "Nizina Mazowiecka",
      "Kotliny Podkarpackie": "Kotlina Sandomierska"
    },
    "explanation": "Każdy pas rzeźby obejmuje charakterystyczne krainy geograficzne, a każda z tych krain należy do odpowiedniego pasa.",
    "image": "r01_pasy_rzezby_polski.jpg"
  },
  {
    "id": "R01_RZE_09",
    "section": "Rzeźba terenu i surowce",
    "type": "single_choice",
    "prompt": "Jaki jest najwyższy szczyt Polski?",
    "options": [
      "Rysy",
      "Śnieżka",
      "Łysica",
      "Wieżyca",
      "Dylewska Góra",
      "Góra Kamieńska"
    ],
    "answer": 0,
    "explanation": "Najwyższym szczytem Polski są Rysy, osiągające 2499 m n.p.m."
  },
  {
    "id": "R01_RZE_10",
    "section": "Rzeźba terenu i surowce",
    "type": "sort",
    "prompt": "Przyporządkuj surowce mineralne do grup według ich wykorzystania.",
    "options": null,
    "items": [
      "rudy miedzi",
      "wapień",
      "węgiel brunatny",
      "sól kamienna",
      "granit",
      "gaz ziemny",
      "siarka",
      "rudy cynku i ołowiu"
    ],
    "categories": [
      "metaliczne",
      "skalne",
      "energetyczne",
      "chemiczne"
    ],
    "answer": {
      "metaliczne": [
        "rudy miedzi",
        "rudy cynku i ołowiu"
      ],
      "skalne": [
        "wapień",
        "granit"
      ],
      "energetyczne": [
        "węgiel brunatny",
        "gaz ziemny"
      ],
      "chemiczne": [
        "sól kamienna",
        "siarka"
      ]
    },
    "explanation": "Surowce dzieli się na metaliczne, skalne, energetyczne i chemiczne według ich gospodarczego wykorzystania.",
    "image": "r01_surowce_mineralne_polski.jpg"
  },
  {
    "id": "R01_RZE_11",
    "section": "Rzeźba terenu i surowce",
    "type": "scenario",
    "prompt": "Geolog pracuje w rejonie Lubina i Głogowa na Nizinie Śląskiej. Interesuje go surowiec metaliczny wydobywany tam z domieszką srebra. O jaki surowiec chodzi?",
    "options": [
      "rudy miedzi",
      "rudy żelaza",
      "sól kamienna",
      "węgiel brunatny",
      "wapień",
      "ropa naftowa"
    ],
    "answer": 0,
    "explanation": "W okolicach Lubina i Głogowa wydobywa się rudy miedzi z domieszką srebra.",
    "image": "r01_surowce_mineralne_polski.jpg"
  },
  {
    "id": "R01_RZE_12",
    "section": "Rzeźba terenu i surowce",
    "type": "multi_select",
    "prompt": "Zaznacz surowce zaliczane do energetycznych.",
    "options": [
      "węgiel kamienny",
      "węgiel brunatny",
      "ropa naftowa",
      "gaz ziemny",
      "sól kamienna",
      "wapień"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do surowców energetycznych zalicza się węgiel kamienny, węgiel brunatny, ropę naftową i gaz ziemny.",
    "image": "r01_surowce_mineralne_polski.jpg"
  },
  {
    "id": "R01_KLI_01",
    "section": "Klimat Polski",
    "type": "single_choice",
    "prompt": "Jak określa się klimat Polski?",
    "options": [
      "umiarkowany ciepły przejściowy",
      "równikowy wilgotny",
      "zwrotnikowy suchy",
      "umiarkowany chłodny morski",
      "podzwrotnikowy śródziemnomorski",
      "okołobiegunowy"
    ],
    "answer": 0,
    "explanation": "Klimat Polski ma cechy pośrednie między morskim i kontynentalnym, dlatego określa się go jako umiarkowany ciepły przejściowy."
  },
  {
    "id": "R01_KLI_02",
    "section": "Klimat Polski",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki kształtujące klimat Polski.",
    "options": [
      "ilość energii słonecznej",
      "położenie między Atlantykiem a Azją",
      "ciepłe prądy morskie",
      "Morze Bałtyckie",
      "ukształtowanie powierzchni",
      "napływ mas powietrza"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Na klimat Polski wpływają położenie, energia słoneczna, sąsiedztwo Atlantyku i Azji, ciepłe prądy morskie, Bałtyk, rzeźba terenu i napływ mas powietrza."
  },
  {
    "id": "R01_KLI_03",
    "section": "Klimat Polski",
    "type": "true_false",
    "prompt": "Na wschodzie Polski roczna amplituda temperatury jest większa niż na zachodzie.",
    "options": null,
    "answer": true,
    "explanation": "Na zachodnich krańcach roczna amplituda wynosi około 19°C, a na wschodzie przekracza 22°C, co wiąże się ze wzrostem kontynentalizmu."
  },
  {
    "id": "R01_KLI_04",
    "section": "Klimat Polski",
    "type": "match",
    "prompt": "Połącz masę powietrza z typową pogodą, którą może przynosić do Polski.",
    "options": null,
    "left": [
      "powietrze polarne morskie zimą",
      "powietrze polarne kontynentalne zimą",
      "powietrze arktyczne wiosną",
      "powietrze zwrotnikowe morskie",
      "powietrze zwrotnikowe kontynentalne"
    ],
    "right": [
      "ocieplenie i odwilż",
      "mroźna i słoneczna pogoda",
      "przymrozki i majowe ochłodzenia",
      "ciepła wilgotna pogoda i burze",
      "gorąca sucha i zapylona pogoda"
    ],
    "answer": {
      "powietrze polarne morskie zimą": "ocieplenie i odwilż",
      "powietrze polarne kontynentalne zimą": "mroźna i słoneczna pogoda",
      "powietrze arktyczne wiosną": "przymrozki i majowe ochłodzenia",
      "powietrze zwrotnikowe morskie": "ciepła wilgotna pogoda i burze",
      "powietrze zwrotnikowe kontynentalne": "gorąca sucha i zapylona pogoda"
    },
    "explanation": "Różne masy powietrza mają odmienne temperaturę i wilgotność, dlatego powodują charakterystyczne zmiany pogody.",
    "image": "r01_masy_powietrza_polska.jpg"
  },
  {
    "id": "R01_KLI_05",
    "section": "Klimat Polski",
    "type": "fill_in",
    "prompt": "Okres wegetacyjny trwa wtedy, gdy średnia dobowa temperatura powietrza przekracza __________°C.",
    "options": null,
    "answer": [
      "5"
    ],
    "altAnswers": [
      [
        "5",
        "5°C",
        "5 stopni"
      ]
    ],
    "explanation": "Okres wegetacyjny to część roku, podczas której średnia dobowa temperatura powietrza przekracza 5°C."
  },
  {
    "id": "R01_KLI_06",
    "section": "Klimat Polski",
    "type": "single_choice",
    "prompt": "Ile wynosi w przybliżeniu średnia roczna suma opadów atmosferycznych w Polsce?",
    "options": [
      "600 mm",
      "200 mm",
      "400 mm",
      "1000 mm",
      "1400 mm",
      "2000 mm"
    ],
    "answer": 0,
    "explanation": "Średnia roczna suma opadów atmosferycznych w Polsce wynosi około 600 mm."
  },
  {
    "id": "R01_KLI_07",
    "section": "Klimat Polski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: przedwiośnie, wiosna, lato, okres wegetacyjny.",
    "options": null,
    "answer": "okres wegetacyjny",
    "explanation": "Przedwiośnie, wiosna i lato należą do sześciu termicznych pór roku wyróżnianych w Polsce, a okres wegetacyjny jest częścią roku wyznaczaną przez temperaturę powyżej 5°C."
  },
  {
    "id": "R01_KLI_08",
    "section": "Klimat Polski",
    "type": "match",
    "prompt": "Połącz termiczną porę roku z zakresem średniej dobowej temperatury.",
    "options": null,
    "left": [
      "zima",
      "przedwiośnie",
      "wiosna",
      "lato"
    ],
    "right": [
      "poniżej 0°C",
      "0-5°C",
      "5-15°C",
      "powyżej 15°C"
    ],
    "answer": {
      "zima": "poniżej 0°C",
      "przedwiośnie": "0-5°C",
      "wiosna": "5-15°C",
      "lato": "powyżej 15°C"
    },
    "explanation": "Termiczne pory roku wyznacza się na podstawie średniej dobowej temperatury powietrza."
  },
  {
    "id": "R01_KLI_09",
    "section": "Klimat Polski",
    "type": "scenario",
    "prompt": "Jest słoneczny dzień nad Bałtykiem. Ląd nagrzewa się szybciej niż morze, powietrze nad lądem unosi się, a wiatr zaczyna wiać od morza ku lądowi. Jaki to wiatr?",
    "options": [
      "bryza dzienna",
      "bryza nocna",
      "halny",
      "wiatr zachodni"
    ],
    "answer": 0,
    "explanation": "W dzień ląd nagrzewa się szybciej od morza, dlatego bryza dzienna wieje od morza w stronę lądu.",
    "image": "r01_wiatry_lokalne.jpg"
  },
  {
    "id": "R01_KLI_10",
    "section": "Klimat Polski",
    "type": "true_false",
    "prompt": "Halny jest ciepłym, suchym i porywistym wiatrem wiejącym w Tatrach z południa.",
    "options": null,
    "answer": true,
    "explanation": "Halny powstaje przy dużej różnicy ciśnienia po obu stronach Tatr i po północnej stronie gór jest ciepły, suchy i porywisty.",
    "image": "r01_wiatry_lokalne.jpg"
  },
  {
    "id": "R01_KLI_11",
    "section": "Klimat Polski",
    "type": "single_choice",
    "prompt": "Gdzie należą do najmniejszych roczne sumy opadów w Polsce?",
    "options": [
      "Na Pojezierzu Wielkopolskim i Nizinie Mazowieckiej",
      "W Tatrach",
      "W Karkonoszach",
      "W Bieszczadach",
      "Na najwyższych partiach Sudetów",
      "Na Kasprowym Wierchu"
    ],
    "answer": 0,
    "explanation": "Na Pojezierzu Wielkopolskim i Nizinie Mazowieckiej roczne sumy opadów spadają poniżej 550 mm."
  },
  {
    "id": "R01_KLI_12",
    "section": "Klimat Polski",
    "type": "multi_select",
    "prompt": "Zaznacz skutki zmiennej pogody dla gospodarki.",
    "options": [
      "gołoledź utrudniająca transport drogowy",
      "mgła utrudniająca ruch lotniczy",
      "wiosenne przymrozki uszkadzające uprawy",
      "załamania pogody ograniczające turystykę nad Bałtykiem",
      "stałe zwiększanie zasolenia gleb przez pogodę",
      "całkowity brak wpływu na rolnictwo"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zmienna pogoda może utrudniać transport, szkodzić rolnictwu i ograniczać ruch turystyczny."
  },
  {
    "id": "R01_WOD_01",
    "section": "Wody i Morze Bałtyckie",
    "type": "fill_in",
    "prompt": "Obszar, z którego wody spływają do jednego systemu rzecznego, to __________, a obszar odprowadzający wody do jednego morza to __________.",
    "options": null,
    "answer": [
      "dorzecze",
      "zlewisko"
    ],
    "altAnswers": [
      [
        "dorzecze"
      ],
      [
        "zlewisko"
      ]
    ],
    "explanation": "Dorzecze obejmuje obszar jednego systemu rzecznego, natomiast zlewisko obejmuje obszary odprowadzające wody do jednego morza.",
    "image": "r01_siec_rzeczna_polski.jpg"
  },
  {
    "id": "R01_WOD_02",
    "section": "Wody i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Która rzeka jest najdłuższa w Polsce?",
    "options": [
      "Wisła",
      "Odra",
      "Warta",
      "Bug",
      "Narew",
      "San"
    ],
    "answer": 0,
    "explanation": "Wisła ma 1022 km długości i jest najdłuższą rzeką Polski.",
    "image": "r01_siec_rzeczna_polski.jpg"
  },
  {
    "id": "R01_WOD_03",
    "section": "Wody i Morze Bałtyckie",
    "type": "true_false",
    "prompt": "Dorzecza Wisły i Odry są asymetryczne, a ich części prawobrzeżne są większe od lewobrzeżnych.",
    "options": null,
    "answer": true,
    "explanation": "Asymetria dorzeczy Wisły i Odry wynika z nachylenia powierzchni Polski ku północnemu zachodowi.",
    "image": "r01_siec_rzeczna_polski.jpg"
  },
  {
    "id": "R01_WOD_04",
    "section": "Wody i Morze Bałtyckie",
    "type": "match",
    "prompt": "Połącz informację o rzece z właściwą wartością lub miejscem.",
    "options": null,
    "left": [
      "Wisła - długość",
      "Wisła - źródła",
      "Odra - długość",
      "Odra - źródła"
    ],
    "right": [
      "1022 km",
      "stoki Baraniej Góry",
      "841 km",
      "Góry Odrzańskie w Czechach"
    ],
    "answer": {
      "Wisła - długość": "1022 km",
      "Wisła - źródła": "stoki Baraniej Góry",
      "Odra - długość": "841 km",
      "Odra - źródła": "Góry Odrzańskie w Czechach"
    },
    "explanation": "Wisła ma 1022 km i wypływa ze stoków Baraniej Góry, a Odra ma 841 km i wypływa z Gór Odrzańskich w Czechach.",
    "image": "r01_siec_rzeczna_polski.jpg"
  },
  {
    "id": "R01_WOD_05",
    "section": "Wody i Morze Bałtyckie",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o zasilaniu polskich rzek.",
    "options": [
      "mają zasilanie deszczowo-śnieżne",
      "wysokie przepływy występują wczesną wiosną podczas roztopów",
      "wysokie przepływy mogą występować latem po obfitych opadach",
      "woda pochodzi wyłącznie z topnienia lodowców górskich",
      "najwyższe przepływy zawsze występują zimą",
      "opady deszczu nie wpływają na przepływ"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Polskie rzeki są zasilane opadami deszczu i topniejącym śniegiem, dlatego wezbrania są częste wiosną oraz po letnich ulewach."
  },
  {
    "id": "R01_WOD_06",
    "section": "Wody i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Jaką część powierzchni Polski zajmują jeziora?",
    "options": [
      "około 1%",
      "około 10%",
      "około 20%",
      "około 30%",
      "około 50%",
      "ponad 70%"
    ],
    "answer": 0,
    "explanation": "Jeziora zajmują zaledwie około 1% obszaru Polski, mimo że jest ich około 9 tysięcy."
  },
  {
    "id": "R01_WOD_07",
    "section": "Wody i Morze Bałtyckie",
    "type": "match",
    "prompt": "Połącz typ jeziora z jeziorem należącym do tego typu.",
    "options": null,
    "left": [
      "jezioro przybrzeżne",
      "jezioro morenowe",
      "jezioro rynnowe",
      "jezioro cyrkowe"
    ],
    "right": [
      "Gardno",
      "Śniardwy",
      "Gopło",
      "Czarny Staw pod Rysami"
    ],
    "answer": {
      "jezioro przybrzeżne": "Gardno",
      "jezioro morenowe": "Śniardwy",
      "jezioro rynnowe": "Gopło",
      "jezioro cyrkowe": "Czarny Staw pod Rysami"
    },
    "explanation": "Gardno jest jeziorem przybrzeżnym, Śniardwy morenowym, Gopło rynnowym, a Czarny Staw pod Rysami cyrkowym.",
    "image": "r01_typy_jezior.jpg"
  },
  {
    "id": "R01_WOD_08",
    "section": "Wody i Morze Bałtyckie",
    "type": "scenario",
    "prompt": "Samorząd planuje zagospodarowanie niezabudowanego terenu nadrzecznego, który regularnie może być zalewany. Które działanie najlepiej odpowiada zasadom kompleksowej ochrony przeciwpowodziowej?",
    "options": [
      "Ograniczyć zabudowę i pozostawić miejsce dla retencji oraz rozlewania się wody",
      "Gęsto zabudować teren i liczyć wyłącznie na wał",
      "Całkowicie wyprostować każde koryto rzeki",
      "Zlikwidować wszystkie obszary leśne",
      "Zasypać poldery powodziowe",
      "Zabudować naturalne obniżenia terenu"
    ],
    "answer": 0,
    "explanation": "Na terenach szczególnie zagrożonych powodzią należy ograniczać zabudowę, wspierać retencję naturalną i umożliwiać bezpieczne rozlewanie się wody."
  },
  {
    "id": "R01_WOD_09",
    "section": "Wody i Morze Bałtyckie",
    "type": "multi_select",
    "prompt": "Zaznacz działania należące do kompleksowej ochrony przeciwpowodziowej.",
    "options": [
      "właściwe zagospodarowanie terenów nadrzecznych",
      "przywracanie retencji naturalnej",
      "budowa polderów powodziowych",
      "unikanie regulacji koryt tam, gdzie nie jest konieczna",
      "zabudowywanie terenów najbardziej zagrożonych",
      "likwidowanie lasów nadrzecznych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kompleksowa ochrona przeciwpowodziowa obejmuje planowanie przestrzenne, retencję, poldery i ograniczanie zbędnej regulacji rzek."
  },
  {
    "id": "R01_WOD_10",
    "section": "Wody i Morze Bałtyckie",
    "type": "single_choice",
    "prompt": "Jaka jest średnia głębokość Morza Bałtyckiego?",
    "options": [
      "52 m",
      "12 m",
      "25 m",
      "100 m",
      "459 m",
      "1000 m"
    ],
    "answer": 0,
    "explanation": "Średnia głębokość Bałtyku wynosi 52 m; 459 m osiąga najgłębsza Głębia Landsort.",
    "image": "r01_baltyk_mapa_glebokosci.jpg"
  },
  {
    "id": "R01_WOD_11",
    "section": "Wody i Morze Bałtyckie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Sund, Wielki Bełt, Mały Bełt, Głębia Landsort.",
    "options": null,
    "answer": "Głębia Landsort",
    "explanation": "Sund, Wielki Bełt i Mały Bełt należą do systemu cieśnin łączących Bałtyk z Morzem Północnym, natomiast Głębia Landsort jest najgłębszym miejscem Bałtyku."
  },
  {
    "id": "R01_WOD_12",
    "section": "Wody i Morze Bałtyckie",
    "type": "match",
    "prompt": "Połącz formę lub typ wybrzeża z procesem lub genezą.",
    "options": null,
    "left": [
      "klif",
      "mierzeja",
      "wybrzeże szkierowe"
    ],
    "right": [
      "abrazja fal morskich",
      "akumulacja materiału przez prądy przybrzeżne",
      "zatopienie polodowcowego obszaru z wygładzonymi wzniesieniami"
    ],
    "answer": {
      "klif": "abrazja fal morskich",
      "mierzeja": "akumulacja materiału przez prądy przybrzeżne",
      "wybrzeże szkierowe": "zatopienie polodowcowego obszaru z wygładzonymi wzniesieniami"
    },
    "explanation": "Klify są niszczone przez abrazję, mierzeje powstają dzięki akumulacji osadów, a wybrzeża szkierowe są związane z zatopieniem rzeźby polodowcowej.",
    "image": "r01_wybrzeza_baltyku.jpg"
  },
  {
    "id": "R01_PRZ_01",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "single_choice",
    "prompt": "Jak nazywa się zewnętrzna warstwa litosfery obejmująca gleby?",
    "options": [
      "pedosfera",
      "hydrosfera",
      "atmosfera",
      "biosfera",
      "kriosfera",
      "jonosfera"
    ],
    "answer": 0,
    "explanation": "Sferę gleb nazywa się pedosferą; jest to zewnętrzna warstwa litosfery o grubości do kilku metrów."
  },
  {
    "id": "R01_PRZ_02",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "sequence",
    "prompt": "Ułóż typowe poziomy profilu glebowego od powierzchni ku dołowi.",
    "options": null,
    "items": [
      "poziom wmywania",
      "skała macierzysta",
      "ściółka",
      "poziom wymywania",
      "poziom próchniczny"
    ],
    "answer": [
      "ściółka",
      "poziom próchniczny",
      "poziom wymywania",
      "poziom wmywania",
      "skała macierzysta"
    ],
    "explanation": "W typowym profilu od góry występują ściółka, poziom próchniczny, poziom wymywania, poziom wmywania i skała macierzysta.",
    "image": "r01_profile_glebowe.jpg"
  },
  {
    "id": "R01_PRZ_03",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "match",
    "prompt": "Połącz typ gleby z charakterystyczną cechą.",
    "options": null,
    "left": [
      "gleba bielicowa",
      "gleba brunatna",
      "rędzina",
      "czarnoziem"
    ],
    "right": [
      "cienki poziom próchniczny i mała żyzność",
      "średnia żyzność i proces brunatnienia",
      "żyzna lecz trudna w uprawie z powodu odłamków skalnych",
      "gruby poziom próchniczny i bardzo duża żyzność"
    ],
    "answer": {
      "gleba bielicowa": "cienki poziom próchniczny i mała żyzność",
      "gleba brunatna": "średnia żyzność i proces brunatnienia",
      "rędzina": "żyzna lecz trudna w uprawie z powodu odłamków skalnych",
      "czarnoziem": "gruby poziom próchniczny i bardzo duża żyzność"
    },
    "explanation": "Profile gleb różnią się grubością poziomu próchnicznego, materiałem skalnym i żyznością.",
    "image": "r01_profile_glebowe.jpg"
  },
  {
    "id": "R01_PRZ_04",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "true_false",
    "prompt": "Większość gleb w Polsce odznacza się średnią lub małą żyznością.",
    "options": null,
    "answer": true,
    "explanation": "Największą powierzchnię zajmują między innymi gleby brunatne, płowe i bielicowe, które mają średnią lub małą żyzność."
  },
  {
    "id": "R01_PRZ_05",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "sort",
    "prompt": "Przyporządkuj gleby do grup według ich żyzności.",
    "options": null,
    "items": [
      "czarnoziem",
      "czarna ziemia",
      "mada",
      "gleba brunatna",
      "gleba płowa",
      "gleba bielicowa"
    ],
    "categories": [
      "żyzne",
      "średnia lub mała żyzność"
    ],
    "answer": {
      "żyzne": [
        "czarnoziem",
        "czarna ziemia",
        "mada"
      ],
      "średnia lub mała żyzność": [
        "gleba brunatna",
        "gleba płowa",
        "gleba bielicowa"
      ]
    },
    "explanation": "Czarnoziemy, czarne ziemie i mady są żyzne, natomiast brunatne, płowe i bielicowe należą do gleb o średniej lub małej żyzności."
  },
  {
    "id": "R01_PRZ_06",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "single_choice",
    "prompt": "Jaki typ lasu jest najbardziej rozpowszechniony w Polsce?",
    "options": [
      "bór sosnowy",
      "grąd",
      "łęg",
      "ols",
      "bór świerkowy",
      "las bukowy"
    ],
    "answer": 0,
    "explanation": "Najbardziej rozpowszechnione są bory sosnowe, często rosnące na piaszczystych obszarach z glebami bielicowymi.",
    "image": "r01_typy_lasow.jpg"
  },
  {
    "id": "R01_PRZ_07",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "match",
    "prompt": "Połącz typ lasu z charakterystycznym siedliskiem lub składem.",
    "options": null,
    "left": [
      "bór sosnowy",
      "grąd",
      "łęg",
      "ols"
    ],
    "right": [
      "sosna na mało żyznych piaszczystych glebach",
      "dąb i grab na żyznych glebach",
      "jesion wierzba i topola w okresowo zalewanych dolinach",
      "olsza brzoza wierzba i jesion w stale podmokłych obniżeniach"
    ],
    "answer": {
      "bór sosnowy": "sosna na mało żyznych piaszczystych glebach",
      "grąd": "dąb i grab na żyznych glebach",
      "łęg": "jesion wierzba i topola w okresowo zalewanych dolinach",
      "ols": "olsza brzoza wierzba i jesion w stale podmokłych obniżeniach"
    },
    "explanation": "Typy lasów zależą od warunków siedliska i dominujących gatunków drzew.",
    "image": "r01_typy_lasow.jpg"
  },
  {
    "id": "R01_PRZ_08",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje lasów.",
    "options": [
      "ochrona gleby",
      "oczyszczanie powietrza",
      "magazynowanie wody",
      "źródło drewna",
      "miejsce wypoczynku i rekreacji",
      "zwiększanie gwałtownego spływu wód"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Lasy chronią glebę, oczyszczają powietrze, magazynują wodę, dostarczają drewna i służą rekreacji."
  },
  {
    "id": "R01_PRZ_09",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "true_false",
    "prompt": "Współcześnie lasy zajmują około 30% powierzchni Polski.",
    "options": null,
    "answer": true,
    "explanation": "Obecnie lasy zajmują około 30% powierzchni Polski."
  },
  {
    "id": "R01_PRZ_10",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "single_choice",
    "prompt": "W której formie ochrony przyrody chroni się całą przyrodę na obszarze o wybitnych walorach przyrodniczych i krajobrazowych?",
    "options": [
      "w parku narodowym",
      "w parku krajobrazowym",
      "w rezerwacie przyrody",
      "w ochronie gatunkowej",
      "w pomniku przyrody"
    ],
    "answer": 0,
    "explanation": "W parkach narodowych chroni się całą przyrodę na terenach o wybitnych walorach przyrodniczych i krajobrazowych.",
    "image": "r01_parki_narodowe_polski.jpg"
  },
  {
    "id": "R01_PRZ_11",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: park narodowy, rezerwat przyrody, park krajobrazowy, ekosystem.",
    "options": null,
    "answer": "ekosystem",
    "explanation": "Park narodowy, rezerwat przyrody i park krajobrazowy są formami ochrony przyrody, natomiast ekosystem oznacza powiązane elementy nieożywione i organizmy żyjące na danym terenie."
  },
  {
    "id": "R01_PRZ_12",
    "section": "Gleby, lasy i ochrona przyrody",
    "type": "scenario",
    "prompt": "Na niewielkim obszarze trzeba objąć ścisłą ochroną cenną roślinność i zakazać działalności gospodarczej. Jaka forma ochrony najlepiej odpowiada temu opisowi?",
    "options": [
      "rezerwat przyrody",
      "park krajobrazowy",
      "park narodowy",
      "pomnik przyrody",
      "ochrona gatunkowa"
    ],
    "answer": 0,
    "explanation": "Rezerwaty tworzy się między innymi dla ochrony roślinności, zwierząt, budowy geologicznej lub lasów, a działalność gospodarcza jest tam zakazana."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rozciągłość południkowa Polski wyrażona w stopniach kątowych wynosi __________.",
    "options": null,
    "answer": [
      "5°50'"
    ],
    "altAnswers": [
      [
        "5°50'",
        "5 stopni 50 minut",
        "5° 50'"
      ]
    ],
    "explanation": "Różnica szerokości geograficznej między Jastrzębią Górą (54°50'N) a Opołonkiem (49°00'N) wynosi 5°50'.",
    "image": "r01_skrajne_punkty_polski.jpg"
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z przeszłości geologicznej Polski od najstarszego do najmłodszego.",
    "options": null,
    "items": [
      "wkroczenie lądolodu w plejstocenie",
      "powstawanie wapieni w morzach mezozoicznych",
      "początek powstawania węgla kamiennego w karbonie",
      "sfałdowanie Karpat w kenozoiku"
    ],
    "answer": [
      "początek powstawania węgla kamiennego w karbonie",
      "powstawanie wapieni w morzach mezozoicznych",
      "sfałdowanie Karpat w kenozoiku",
      "wkroczenie lądolodu w plejstocenie"
    ],
    "explanation": "Karbon należy do paleozoiku, po nim nastąpił mezozoik, następnie kenozoiczne ruchy alpejskie, a plejstoceńskie zlodowacenia są najmłodsze z tych wydarzeń."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazwano dinozaury odkryte w województwie opolskim, które żyły około 230 mln lat temu?",
    "options": null,
    "answer": "silezaury",
    "altAnswers": [
      "silezaury",
      "silezaur",
      "silezaury (Silesaurus)"
    ],
    "explanation": "Odkryte na Opolszczyźnie zwierzęta nazwano silezaurami od łacińskiej nazwy Śląska - Silesia."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj formy polodowcowe do dominującego procesu ich powstania.",
    "options": null,
    "items": [
      "wzgórze moreny czołowej",
      "obszar moreny dennej",
      "sandr",
      "pradolina",
      "rynna"
    ],
    "categories": [
      "akumulacja lądolodu",
      "działalność wód roztopowych"
    ],
    "answer": {
      "akumulacja lądolodu": [
        "wzgórze moreny czołowej",
        "obszar moreny dennej"
      ],
      "działalność wód roztopowych": [
        "sandr",
        "pradolina",
        "rynna"
      ]
    },
    "explanation": "Moreny powstają z materiału osadzanego przez lądolód, natomiast sandry, pradoliny i rynny wiążą się z działalnością wód roztopowych.",
    "image": "r01_formy_polodowcowe.jpg"
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które wzniesienie moreny czołowej osiąga 329 m n.p.m.?",
    "options": [
      "Wieżyca",
      "Dylewska Góra",
      "Łysica",
      "Śnieżka",
      "Rysy",
      "Góra Kamieńska"
    ],
    "answer": 0,
    "explanation": "Wieżyca ma 329 m n.p.m.; Dylewska Góra, również będąca wzniesieniem morenowym, ma 312 m n.p.m."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po południowej stronie Tatr wznoszące się wilgotne powietrze ochładza się średnio o __________°C na 100 m, a opadając po północnej stronie ogrzewa się średnio o __________°C na 100 m.",
    "options": null,
    "answer": [
      "0,6",
      "1"
    ],
    "altAnswers": [
      [
        "0,6",
        "0.6"
      ],
      [
        "1",
        "1,0",
        "1.0"
      ]
    ],
    "explanation": "Przy powstawaniu halnego wilgotne powietrze ochładza się o około 0,6°C na 100 m podczas wznoszenia, a suche opadające ogrzewa się o około 1°C na 100 m.",
    "image": "r01_wiatry_lokalne.jpg"
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się najgłębsze miejsce Morza Bałtyckiego, osiągające 459 m?",
    "options": null,
    "answer": "Głębia Landsort",
    "altAnswers": [
      "Głębia Landsort",
      "glebia Landsort",
      "Landsort"
    ],
    "explanation": "Najgłębszym miejscem Bałtyku jest Głębia Landsort o głębokości 459 m.",
    "image": "r01_baltyk_mapa_glebokosci.jpg"
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które jezioro jest największe w Polsce i ma powierzchnię około 113,4 km²?",
    "options": [
      "Śniardwy",
      "Mamry",
      "Hańcza",
      "Jeziorak",
      "Gopło",
      "Czarny Staw pod Rysami"
    ],
    "answer": 0,
    "explanation": "Śniardwy są największym jeziorem Polski i zajmują około 113,4 km².",
    "image": "r01_typy_jezior.jpg"
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny małego zasolenia Morza Bałtyckiego.",
    "options": [
      "utrudniona wymiana wód z oceanem przez wąskie cieśniny",
      "dopływ dużych ilości słodkiej wody z rzek",
      "niewielkie parowanie wynikające z niskiej temperatury wody",
      "bardzo silne parowanie przez cały rok",
      "brak dopływu rzek",
      "bezpośrednie szerokie połączenie z Atlantykiem"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Małe zasolenie Bałtyku wynika z ograniczonej wymiany z oceanem, dużego dopływu wód rzecznych i niewielkiego parowania.",
    "image": "r01_baltyk_mapa_glebokosci.jpg"
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaka żyzna gleba ma warstwowaną skałę macierzystą z osadów rzecznych i występuje między innymi na Żuławach Wiślanych?",
    "options": null,
    "answer": "mada",
    "altAnswers": [
      "mada",
      "mady"
    ],
    "explanation": "Mady powstają z osadów rzecznych, mają charakterystyczne warstwowanie i należą do gleb żyznych.",
    "image": "r01_profile_glebowe.jpg"
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile parków narodowych znajduje się w Polsce?",
    "options": [
      "23",
      "12",
      "16",
      "30",
      "46",
      "126"
    ],
    "answer": 0,
    "explanation": "W Polsce istnieją 23 parki narodowe.",
    "image": "r01_parki_narodowe_polski.jpg"
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące Białowieskiego Parku Narodowego.",
    "options": [
      "znajduje się tam ostatni w Europie las pierwotny",
      "symbolem parku jest żubr",
      "park został wpisany na Listę UNESCO",
      "jest położony nad Morzem Bałtyckim",
      "jego symbolem jest foka szara",
      "obejmuje Głębię Landsort"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Białowieski Park Narodowy chroni ostatni w Europie las pierwotny, jego symbolem jest żubr, a park został wpisany na Listę UNESCO."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Środowisko przyrodnicze Polski",
  icon: "🌍",
  sectionOrder: [
      "Położenie i budowa geologiczna",
      "Rzeźba terenu i surowce",
      "Klimat Polski",
      "Wody i Morze Bałtyckie",
      "Gleby, lasy i ochrona przyrody"
  ],
  sectionIcons: {
      "Położenie i budowa geologiczna": "🧭",
      "Rzeźba terenu i surowce": "🪨",
      "Klimat Polski": "🌦️",
      "Wody i Morze Bałtyckie": "🌊",
      "Gleby, lasy i ochrona przyrody": "🌲"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
