// Skróty sekcji (do identyfikatorów ćwiczeń):
//   PRZY = Środowisko przyrodnicze
//   ROL = Rolnictwo Azji
//   JAP = Japonia
//   CHI = Chiny
//   IND = Indie
//   BLI = Bliski Wschód
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_PRZY_01",
    "section": "Środowisko przyrodnicze",
    "type": "single_choice",
    "prompt": "Jaki udział powierzchni Azji zajmują wyżyny i góry?",
    "options": [
      "około 25%",
      "około 40%",
      "około 50%",
      "około 60%",
      "około 75%",
      "około 90%"
    ],
    "answer": 4,
    "image": "r01_himalaje.jpg",
    "explanation": "Azja jest kontynentem wyżynno-górskim, a wyżyny i góry zajmują około 75% jej obszaru."
  },
  {
    "id": "R01_PRZY_02",
    "section": "Środowisko przyrodnicze",
    "type": "multi_select",
    "prompt": "Zaznacz rzeki Azji, które odpływają w kierunku Oceanu Spokojnego.",
    "options": [
      "Jangcy",
      "Huang He",
      "Amur",
      "Indus",
      "Ganges"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do Oceanu Spokojnego odpływają między innymi Jangcy, Huang He i Amur. Indus i Ganges płyną do Oceanu Indyjskiego."
  },
  {
    "id": "R01_PRZY_03",
    "section": "Środowisko przyrodnicze",
    "type": "true_false",
    "prompt": "Wszystkie czternaście ośmiotysięczników znajduje się w Azji.",
    "options": null,
    "answer": true,
    "explanation": "Na świecie jest 14 szczytów przekraczających 8000 m n.p.m. i wszystkie leżą w Azji."
  },
  {
    "id": "R01_PRZY_04",
    "section": "Środowisko przyrodnicze",
    "type": "fill_in",
    "prompt": "Najwyższy szczyt Ziemi to __________ o wysokości __________ m n.p.m., a najgłębsza depresja Azji leży na wybrzeżu __________.",
    "options": null,
    "answer": [
      "Mount Everest",
      "8848",
      "Morza Martwego"
    ],
    "altAnswers": [
      [
        "Mount Everest",
        "Everest",
        "Czomolungma",
        "Czomolungmą"
      ],
      [
        "8848",
        "8848 m"
      ],
      [
        "Morza Martwego",
        "Morze Martwe"
      ]
    ],
    "image": "r01_morze_martwe.jpg",
    "explanation": "Mount Everest ma 8848 m n.p.m., a wybrzeże Morza Martwego leży 430 m p.p.m. Różnica wysokości między tymi punktami wynosi 9278 m."
  },
  {
    "id": "R01_PRZY_05",
    "section": "Środowisko przyrodnicze",
    "type": "riddle",
    "prompt": "Jak nazywa się najgłębsze jezioro świata, położone w azjatyckiej części Rosji?",
    "options": null,
    "answer": "Bajkał",
    "altAnswers": [
      "Bajkał",
      "Bajkal"
    ],
    "image": "r01_bajkal.jpg",
    "explanation": "Bajkał ma 1620 m głębokości i jest również największym zbiornikiem słodkiej wody na Ziemi pod względem objętości."
  },
  {
    "id": "R01_PRZY_06",
    "section": "Środowisko przyrodnicze",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest łańcuchem górskim: Himalaje, Karakorum, Hindukusz, Gobi.",
    "options": null,
    "answer": "Gobi",
    "explanation": "Himalaje, Karakorum i Hindukusz to łańcuchy górskie, natomiast Gobi jest pustynią."
  },
  {
    "id": "R01_PRZY_07",
    "section": "Środowisko przyrodnicze",
    "type": "scenario",
    "prompt": "Latem nad rozgrzanym lądem Azji powstaje niż baryczny, a nad chłodniejszymi oceanami wyż. Wilgotne powietrze płynie znad oceanów nad ląd i przynosi obfite opady. Jaki wiatr występuje w takiej sytuacji?",
    "options": [
      "monsun letni",
      "monsun zimowy",
      "tajfun",
      "bryza lądowa",
      "pasat",
      "fen"
    ],
    "answer": 0,
    "explanation": "To monsun letni. Latem wieje znad oceanów nad rozgrzany kontynent i przynosi obfite opady deszczu."
  },
  {
    "id": "R01_PRZY_08",
    "section": "Środowisko przyrodnicze",
    "type": "match",
    "prompt": "Połącz rzekę z oceanem, do którego odpływa.",
    "options": null,
    "left": [
      "Indus",
      "Jangcy",
      "Lena"
    ],
    "right": [
      "Ocean Arktyczny",
      "Ocean Spokojny",
      "Ocean Indyjski"
    ],
    "answer": {
      "Indus": "Ocean Indyjski",
      "Jangcy": "Ocean Spokojny",
      "Lena": "Ocean Arktyczny"
    },
    "explanation": "Indus płynie do Oceanu Indyjskiego, Jangcy do Oceanu Spokojnego, a Lena do Oceanu Arktycznego."
  },
  {
    "id": "R01_PRZY_09",
    "section": "Środowisko przyrodnicze",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania niszczącego tsunami przy wybrzeżu po podmorskim trzęsieniu ziemi.",
    "options": null,
    "items": [
      "Fala dociera do strefy brzegowej",
      "Dochodzi do podmorskiego trzęsienia ziemi",
      "Woda zalewa obszary przybrzeżne",
      "Na otwartym oceanie powstaje fala o niewielkiej wysokości",
      "Wysokość fali gwałtownie wzrasta"
    ],
    "answer": [
      "Dochodzi do podmorskiego trzęsienia ziemi",
      "Na otwartym oceanie powstaje fala o niewielkiej wysokości",
      "Fala dociera do strefy brzegowej",
      "Wysokość fali gwałtownie wzrasta",
      "Woda zalewa obszary przybrzeżne"
    ],
    "explanation": "Podmorskie trzęsienie ziemi może wzbudzić falę tsunami. Na otwartym oceanie jest ona niska, lecz przy brzegu jej wysokość gwałtownie rośnie i woda zalewa obszary przybrzeżne."
  },
  {
    "id": "R01_PRZY_10",
    "section": "Środowisko przyrodnicze",
    "type": "sort",
    "prompt": "Przyporządkuj łańcuchy górskie do gór starych lub młodych.",
    "options": null,
    "items": [
      "Sajany",
      "zachodnia część Tienszanu",
      "Kaukaz",
      "Hindukusz",
      "Himalaje"
    ],
    "categories": [
      "góry stare",
      "góry młode"
    ],
    "answer": {
      "góry stare": [
        "Sajany",
        "zachodnia część Tienszanu"
      ],
      "góry młode": [
        "Kaukaz",
        "Hindukusz",
        "Himalaje"
      ]
    },
    "explanation": "Do najstarszych gór Azji należą Sajany i zachodnia część Tienszanu. Młode góry alpejskie obejmują między innymi Kaukaz, Hindukusz i Himalaje."
  },
  {
    "id": "R01_ROL_01",
    "section": "Rolnictwo Azji",
    "type": "single_choice",
    "prompt": "Gdzie w Azji występują bardzo korzystne warunki do prowadzenia działalności rolniczej?",
    "options": [
      "na Półwyspie Arabskim",
      "w zachodniej części Chin",
      "w Indiach",
      "na północy Syberii",
      "na Wyżynie Tybetańskiej",
      "na pustyni Gobi"
    ],
    "answer": 2,
    "explanation": "Bardzo korzystne warunki rolnicze występują w Indiach, we wschodniej części Chin oraz na Półwyspie Indochińskim."
  },
  {
    "id": "R01_ROL_02",
    "section": "Rolnictwo Azji",
    "type": "multi_select",
    "prompt": "Zaznacz pozaprzyrodnicze czynniki zwiększające wydajność rolnictwa w Azji.",
    "options": [
      "mechanizacja",
      "nawożenie",
      "stosowanie środków ochrony roślin",
      "wysokość opadów",
      "długość okresu wegetacyjnego"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wydajność rolnictwa zwiększają między innymi mechanizacja, nawożenie i stosowanie środków ochrony roślin."
  },
  {
    "id": "R01_ROL_03",
    "section": "Rolnictwo Azji",
    "type": "true_false",
    "prompt": "Przeciętne plony ryżu w Japonii są około dwa razy wyższe niż w Indiach.",
    "options": null,
    "answer": true,
    "explanation": "Nowoczesne i silnie zmechanizowane rolnictwo Japonii osiąga przeciętne plony ryżu około dwukrotnie wyższe niż rolnictwo Indii."
  },
  {
    "id": "R01_ROL_04",
    "section": "Rolnictwo Azji",
    "type": "fill_in",
    "prompt": "Ilość płodów rolnych uzyskanych z jednostki powierzchni to __________, a całkowita ilość płodów zebrana z danej powierzchni to __________.",
    "options": null,
    "answer": [
      "plony",
      "zbiory"
    ],
    "altAnswers": [
      [
        "plony",
        "Plony"
      ],
      [
        "zbiory",
        "Zbiory"
      ]
    ],
    "explanation": "Plony podaje się najczęściej w dt/ha, natomiast zbiory oznaczają całkowitą ilość zebranych płodów rolnych, najczęściej wyrażaną w tonach."
  },
  {
    "id": "R01_ROL_05",
    "section": "Rolnictwo Azji",
    "type": "riddle",
    "prompt": "Jak nazywa się odmiana ryżu uprawiana na polach pokrytych kilkunastocentymetrową warstwą wody?",
    "options": null,
    "answer": "ryż mokry",
    "altAnswers": [
      "ryż mokry",
      "mokry",
      "ryż nizinny",
      "nizinny"
    ],
    "image": "r01_pola_ryzowe_tarasy.jpg",
    "explanation": "Ryż mokry, nazywany też nizinnym, uprawia się na polach pokrytych wodą. Potrzebuje żyznych gleb i wysokiej temperatury."
  },
  {
    "id": "R01_ROL_06",
    "section": "Rolnictwo Azji",
    "type": "odd_one_out",
    "prompt": "Który duży producent ryżu leży poza Azją: Chiny, Indie, Wietnam czy Brazylia?",
    "options": null,
    "answer": "Brazylia",
    "explanation": "W pierwszej dziesiątce największych producentów ryżu znajduje się tylko jedno państwo spoza Azji — Brazylia."
  },
  {
    "id": "R01_ROL_07",
    "section": "Rolnictwo Azji",
    "type": "scenario",
    "prompt": "W pewnym regionie Azji monsun letni nadchodzi późno i przynosi zbyt mało deszczu. Co jest najbardziej prawdopodobnym skutkiem dla nienawadnianych pól ryżowych?",
    "options": [
      "wysychanie pól i spadek zbiorów",
      "czterokrotny wzrost plonów",
      "zamarzanie pól",
      "wzrost zasolenia przez monsun zimowy",
      "powstawanie tundry",
      "stały wzrost temperatury gleby"
    ],
    "answer": 0,
    "explanation": "Gdy monsun letni przynosi za mało deszczu, nienawadniane pola ryżu wysychają, a zbiory maleją. Może to prowadzić do niedoborów żywności."
  },
  {
    "id": "R01_ROL_08",
    "section": "Rolnictwo Azji",
    "type": "match",
    "prompt": "Połącz produkt lub zwierzę z państwem oraz właściwą pozycją w azjatyckim rolnictwie.",
    "options": null,
    "left": [
      "ryż",
      "kawa",
      "bydło"
    ],
    "right": [
      "Indie — 2. miejsce pod względem pogłowia",
      "Chiny — 1. miejsce w produkcji",
      "Wietnam — 2. miejsce w produkcji"
    ],
    "answer": {
      "ryż": "Chiny — 1. miejsce w produkcji",
      "kawa": "Wietnam — 2. miejsce w produkcji",
      "bydło": "Indie — 2. miejsce pod względem pogłowia"
    },
    "explanation": "Chiny zajmują pierwsze miejsce w produkcji ryżu, Wietnam jest drugim producentem kawy, a Indie zajmują drugie miejsce pod względem pogłowia bydła."
  },
  {
    "id": "R01_ROL_09",
    "section": "Rolnictwo Azji",
    "type": "sort",
    "prompt": "Podziel czynniki rozwoju rolnictwa na przyrodnicze i pozaprzyrodnicze.",
    "options": null,
    "items": [
      "żyzne gleby",
      "suma opadów",
      "długość okresu wegetacyjnego",
      "mechanizacja",
      "nawożenie"
    ],
    "categories": [
      "przyrodnicze",
      "pozaprzyrodnicze"
    ],
    "answer": {
      "przyrodnicze": [
        "żyzne gleby",
        "suma opadów",
        "długość okresu wegetacyjnego"
      ],
      "pozaprzyrodnicze": [
        "mechanizacja",
        "nawożenie"
      ]
    },
    "explanation": "Żyzność gleb, opady i długość okresu wegetacyjnego są czynnikami przyrodniczymi. Mechanizacja i nawożenie zależą od poziomu rozwoju rolnictwa."
  },
  {
    "id": "R01_ROL_10",
    "section": "Rolnictwo Azji",
    "type": "sequence",
    "prompt": "Ułóż typowy roczny rytm uprawy ryżu związany z cyrkulacją monsunową.",
    "options": null,
    "items": [
      "Nadchodzi suchy monsun zimowy",
      "Rolnicy sadzą ryż",
      "Pola leżą odłogiem lub służą mniej wymagającym roślinom",
      "Nadchodzi wilgotny monsun letni",
      "Trwa okres obfitych opadów"
    ],
    "answer": [
      "Nadchodzi wilgotny monsun letni",
      "Rolnicy sadzą ryż",
      "Trwa okres obfitych opadów",
      "Nadchodzi suchy monsun zimowy",
      "Pola leżą odłogiem lub służą mniej wymagającym roślinom"
    ],
    "image": "r01_pola_ryzowe_tarasy.jpg",
    "explanation": "Sadzenie ryżu zaczyna się wraz z nadejściem monsunu letniego, który zwykle przynosi obfite opady od czerwca do października. Podczas suchego monsunu zimowego pola mogą leżeć odłogiem lub być przeznaczane pod mniej wymagające rośliny."
  },
  {
    "id": "R01_JAP_01",
    "section": "Japonia",
    "type": "single_choice",
    "prompt": "Który dział gospodarki odgrywa dominującą rolę w Japonii?",
    "options": [
      "górnictwo",
      "przetwórstwo przemysłowe",
      "rolnictwo ekstensywne",
      "leśnictwo",
      "hodowla koczownicza",
      "wydobycie ropy naftowej"
    ],
    "answer": 1,
    "explanation": "Ze względu na niedobór surowców Japonia importuje je i przetwarza na zaawansowane dobra. Dominującą rolę odgrywa przetwórstwo przemysłowe."
  },
  {
    "id": "R01_JAP_02",
    "section": "Japonia",
    "type": "multi_select",
    "prompt": "Zaznacz bariery przyrodnicze i przestrzenne utrudniające rozwój gospodarczy Japonii.",
    "options": [
      "wyspiarskie położenie",
      "górzystość",
      "niedobór surowców mineralnych",
      "częste trzęsienia ziemi",
      "rozległe niziny",
      "duże zasoby ropy naftowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do ważnych utrudnień należą wyspiarskie położenie, górzystość, mała ilość terenów przydatnych do zagospodarowania, niedobór surowców mineralnych i geozagrożenia."
  },
  {
    "id": "R01_JAP_03",
    "section": "Japonia",
    "type": "true_false",
    "prompt": "Grunty orne zajmują w Japonii zaledwie około 11% powierzchni kraju.",
    "options": null,
    "answer": true,
    "explanation": "Górzystość ogranicza powierzchnię rolniczą Japonii. Grunty orne zajmują około 11% obszaru państwa."
  },
  {
    "id": "R01_JAP_04",
    "section": "Japonia",
    "type": "fill_in",
    "prompt": "Cztery największe wyspy Japonii to __________, __________, __________ i __________.",
    "options": null,
    "answer": [
      "Honsiu",
      "Hokkaido",
      "Kiusiu",
      "Sikoku"
    ],
    "altAnswers": [
      [
        "Honsiu",
        "Honshu"
      ],
      [
        "Hokkaido",
        "Hokkaidō"
      ],
      [
        "Kiusiu",
        "Kyushu",
        "Kiusiu"
      ],
      [
        "Sikoku",
        "Shikoku"
      ]
    ],
    "explanation": "Honsiu, Hokkaido, Kiusiu i Sikoku stanowią łącznie około 98% powierzchni Japonii."
  },
  {
    "id": "R01_JAP_05",
    "section": "Japonia",
    "type": "riddle",
    "prompt": "Jak nazywa się najbardziej znany japoński wulkan, który jest zarazem najwyższym szczytem kraju?",
    "options": null,
    "answer": "Fudżi",
    "altAnswers": [
      "Fudżi",
      "Fuji",
      "Fudzi"
    ],
    "image": "r01_fudzi.jpg",
    "explanation": "Fudżi ma 3776 m n.p.m. i jest zarówno najbardziej znanym wulkanem Japonii, jak i najwyższym szczytem tego państwa."
  },
  {
    "id": "R01_JAP_06",
    "section": "Japonia",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest wyrobem przemysłu zaawansowanych technologii Japonii: urządzenia elektroniczne, urządzenia optyczne, wyroby farmaceutyczne, węgiel kamienny.",
    "options": null,
    "answer": "węgiel kamienny",
    "explanation": "Do ważnych branż high-tech Japonii należą produkcja urządzeń elektronicznych, optycznych i wyrobów farmaceutycznych. Węgiel kamienny jest surowcem mineralnym."
  },
  {
    "id": "R01_JAP_07",
    "section": "Japonia",
    "type": "scenario",
    "prompt": "Chcesz przejechać między dużymi miastami Japonii pociągiem poruszającym się ze średnią prędkością ponad 300 km/h. Z jakiej kolei skorzystasz?",
    "options": [
      "Shinkansen",
      "chiński system kolei dużych prędkości",
      "linia Pekin–Hongkong",
      "japońska flota handlowa"
    ],
    "answer": 0,
    "image": "r01_shinkansen.jpg",
    "explanation": "Duże miasta Japonii łączą linie kolei Shinkansen, których pociągi osiągają średnią prędkość ponad 300 km/h."
  },
  {
    "id": "R01_JAP_08",
    "section": "Japonia",
    "type": "match",
    "prompt": "Połącz problem przestrzenny Japonii z rozwiązaniem stosowanym w tym kraju.",
    "options": null,
    "left": [
      "wyspiarskie położenie",
      "górzysty teren",
      "brak terenów pod inwestycje"
    ],
    "right": [
      "budowa sztucznych wysp",
      "budowa mostów",
      "budowa tuneli"
    ],
    "answer": {
      "wyspiarskie położenie": "budowa mostów",
      "górzysty teren": "budowa tuneli",
      "brak terenów pod inwestycje": "budowa sztucznych wysp"
    },
    "explanation": "Japonia pokonuje bariery przestrzenne przez budowę mostów między wyspami, tuneli w górach oraz sztucznych wysp i innych terenów odzyskiwanych z morza."
  },
  {
    "id": "R01_JAP_09",
    "section": "Japonia",
    "type": "sort",
    "prompt": "Przyporządkuj produkty do rolnictwa lub przemysłu Japonii.",
    "options": null,
    "items": [
      "ryż",
      "pszenica",
      "owoce cytrusowe",
      "urządzenia elektroniczne",
      "urządzenia optyczne",
      "wyroby farmaceutyczne"
    ],
    "categories": [
      "rolnictwo",
      "przemysł"
    ],
    "answer": {
      "rolnictwo": [
        "ryż",
        "pszenica",
        "owoce cytrusowe"
      ],
      "przemysł": [
        "urządzenia elektroniczne",
        "urządzenia optyczne",
        "wyroby farmaceutyczne"
      ]
    },
    "explanation": "W Japonii uprawia się między innymi ryż, pszenicę i owoce cytrusowe, a przemysł wytwarza między innymi urządzenia elektroniczne, optyczne i wyroby farmaceutyczne."
  },
  {
    "id": "R01_JAP_10",
    "section": "Japonia",
    "type": "sequence",
    "prompt": "Ułóż etapy przemian gospodarczych Japonii od początku XX wieku do końca lat 60. XX wieku.",
    "options": null,
    "items": [
      "Koniec okupacji amerykańskiej w 1952 r.",
      "Japonia staje się drugą gospodarką świata pod względem PKB",
      "Japonia jest krajem rolniczym ze słabo rozwiniętym przemysłem",
      "Po II wojnie światowej napływa pomoc finansowa i inwestycje USA"
    ],
    "answer": [
      "Japonia jest krajem rolniczym ze słabo rozwiniętym przemysłem",
      "Po II wojnie światowej napływa pomoc finansowa i inwestycje USA",
      "Koniec okupacji amerykańskiej w 1952 r.",
      "Japonia staje się drugą gospodarką świata pod względem PKB"
    ],
    "explanation": "Na początku XX wieku Japonia była krajem rolniczym ze słabo rozwiniętym przemysłem. Po II wojnie światowej otrzymała pomoc i inwestycje USA; okupacja amerykańska trwała do 1952 r., a pod koniec lat 60. Japonia stała się drugą gospodarką świata pod względem PKB."
  },
  {
    "id": "R01_CHI_01",
    "section": "Chiny",
    "type": "single_choice",
    "prompt": "W której części Chin mieszka około 95% ludności kraju?",
    "options": [
      "we wschodniej",
      "w zachodniej",
      "w północno-zachodniej",
      "wyłącznie w Tybecie",
      "wyłącznie na pustyni Gobi",
      "równomiernie w całym kraju"
    ],
    "answer": 0,
    "image": "r01_nizina_chinska.jpg",
    "explanation": "Około 95% ludności Chin zamieszkuje wschodnie regiony, gdzie występują łagodniejszy klimat, równinna rzeźba terenu i żyzne gleby."
  },
  {
    "id": "R01_CHI_02",
    "section": "Chiny",
    "type": "multi_select",
    "prompt": "Zaznacz społeczne skutki programu kontroli urodzeń w Chinach.",
    "options": [
      "zachwianie równowagi płci",
      "szybkie starzenie się społeczeństwa",
      "rosnąca liczba emerytów",
      "stały wzrost liczby dzieci w rodzinach",
      "zanik migracji do miast"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Polityka kontroli urodzeń doprowadziła do dużej nadwyżki liczby mężczyzn nad liczbą kobiet oraz do szybkiego starzenia się społeczeństwa."
  },
  {
    "id": "R01_CHI_03",
    "section": "Chiny",
    "type": "true_false",
    "prompt": "W 2015 roku władze Chin podjęły decyzję o odejściu od polityki jednego dziecka.",
    "options": null,
    "answer": true,
    "explanation": "W 2015 roku rząd Chin odszedł od polityki jednego dziecka i dopuścił możliwość posiadania dwojga dzieci przez małżeństwa."
  },
  {
    "id": "R01_CHI_04",
    "section": "Chiny",
    "type": "fill_in",
    "prompt": "Wschodnie Chiny są gęsto zaludnione, ponieważ występują tam łagodny __________, równinna __________ terenu i żyzne __________.",
    "options": null,
    "answer": [
      "klimat",
      "rzeźba",
      "gleby"
    ],
    "altAnswers": [
      [
        "klimat",
        "klimat monsunowy"
      ],
      [
        "rzeźba",
        "rzeźba terenu"
      ],
      [
        "gleby",
        "gleby żyzne"
      ]
    ],
    "explanation": "Łagodny klimat, równinna rzeźba terenu i żyzne gleby sprzyjają osadnictwu oraz rolnictwu we wschodniej części Chin."
  },
  {
    "id": "R01_CHI_05",
    "section": "Chiny",
    "type": "riddle",
    "prompt": "Jak nazywa się typ obszaru utworzonego w Chinach po reformach gospodarczych, gdzie zagraniczne firmy mogły liczyć m.in. na ulgi podatkowe i niskie ceny dzierżawy gruntów?",
    "options": null,
    "answer": "specjalna strefa rozwoju gospodarczego",
    "altAnswers": [
      "specjalna strefa rozwoju gospodarczego",
      "specjalne strefy rozwoju gospodarczego",
      "strefa rozwoju gospodarczego"
    ],
    "explanation": "Reformy rozpoczęte w latach 70. XX wieku doprowadziły do utworzenia specjalnych stref rozwoju gospodarczego, które przyciągały inwestorów zagranicznych."
  },
  {
    "id": "R01_CHI_06",
    "section": "Chiny",
    "type": "odd_one_out",
    "prompt": "Która z pozycji nie należy do ważnych roślin przemysłowych i używek w Chinach: bawełna, rzepak, tytoń, herbata, ryż?",
    "options": null,
    "answer": "ryż",
    "explanation": "Bawełna, rzepak, tytoń i herbata należą do ważnych roślin przemysłowych i używek w Chinach. Ryż należy do podstawowych roślin żywieniowych."
  },
  {
    "id": "R01_CHI_07",
    "section": "Chiny",
    "type": "scenario",
    "prompt": "Zagraniczna firma wybiera miejsce inwestycji w Chinach. Zależy jej na ulgach podatkowych, taniej sile roboczej i niskiej cenie dzierżawy gruntu. Gdzie powinna szukać lokalizacji?",
    "options": [
      "w specjalnej strefie rozwoju gospodarczego",
      "na obszarze niezamieszkanym Tybetu",
      "wyłącznie w gospodarstwie rolnym",
      "na pustyni bez infrastruktury",
      "w parku narodowym",
      "w kopalni węgla"
    ],
    "answer": 0,
    "explanation": "Takie udogodnienia dla inwestorów oferowały specjalne strefy rozwoju gospodarczego utworzone w wyniku reform gospodarczych."
  },
  {
    "id": "R01_CHI_08",
    "section": "Chiny",
    "type": "match",
    "prompt": "Połącz obszar Chin z charakterystyczną informacją o zaludnieniu.",
    "options": null,
    "left": [
      "Nizina Chińska",
      "Hongkong",
      "zachodnie i północne Chiny"
    ],
    "right": [
      "do około 7000 os./km²",
      "często do 5 os./km²",
      "około 500 os./km²"
    ],
    "answer": {
      "Nizina Chińska": "około 500 os./km²",
      "Hongkong": "do około 7000 os./km²",
      "zachodnie i północne Chiny": "często do 5 os./km²"
    },
    "explanation": "Nizina Chińska jest najgęściej zaludnionym dużym obszarem kraju, w Hongkongu gęstość dochodzi do około 7000 os./km², a na zachodzie i północy często nie przekracza 5 os./km²."
  },
  {
    "id": "R01_CHI_09",
    "section": "Chiny",
    "type": "sort",
    "prompt": "Przyporządkuj produkty do rolnictwa lub przemysłu Chin.",
    "options": null,
    "items": [
      "ryż",
      "herbata",
      "wieprzowina",
      "telewizory",
      "komputery",
      "telefony komórkowe"
    ],
    "categories": [
      "rolnictwo",
      "przemysł"
    ],
    "answer": {
      "rolnictwo": [
        "ryż",
        "herbata",
        "wieprzowina"
      ],
      "przemysł": [
        "telewizory",
        "komputery",
        "telefony komórkowe"
      ]
    },
    "explanation": "Chińskie rolnictwo dostarcza między innymi ryżu, herbaty i wieprzowiny, a przemysł produkuje na wielką skalę telewizory, komputery i telefony komórkowe."
  },
  {
    "id": "R01_CHI_10",
    "section": "Chiny",
    "type": "sequence",
    "prompt": "Ułóż proces przemian chińskiej gospodarki od rozpoczęcia reform do rozwoju sektorów opartych na innowacjach i nowoczesnych technologiach.",
    "options": null,
    "items": [
      "Rozwój sektorów opartych na innowacjach i nowoczesnych technologiach",
      "Napływ inwestycji zagranicznych i prywatyzacja",
      "Rozpoczęcie reform gospodarczych w latach 70. XX wieku",
      "Szybki wzrost gospodarczy i awans do światowej czołówki"
    ],
    "answer": [
      "Rozpoczęcie reform gospodarczych w latach 70. XX wieku",
      "Napływ inwestycji zagranicznych i prywatyzacja",
      "Szybki wzrost gospodarczy i awans do światowej czołówki",
      "Rozwój sektorów opartych na innowacjach i nowoczesnych technologiach"
    ],
    "explanation": "Reformy rozpoczęte w latach 70. XX wieku otworzyły gospodarkę na inwestycje zagraniczne. Rozwój stref, prywatyzacja i inwestycje przyspieszyły wzrost, a później zwiększono nacisk na innowacje, badania i wysokie technologie."
  },
  {
    "id": "R01_IND_01",
    "section": "Indie",
    "type": "single_choice",
    "prompt": "Jak nazywa się wyżyna zajmująca centralną część Półwyspu Indyjskiego?",
    "options": [
      "Dekan",
      "Tybetańska",
      "Irańska",
      "Anatolijska",
      "Środkowosyberyjska",
      "Mongolska"
    ],
    "answer": 0,
    "explanation": "Centralną część Półwyspu Indyjskiego zajmuje wyżyna Dekan."
  },
  {
    "id": "R01_IND_02",
    "section": "Indie",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające dynamicznemu rozwojowi gospodarki Indii.",
    "options": [
      "ogromny rynek zbytu",
      "duży udział młodej ludności",
      "tania i wykształcona anglojęzyczna kadra",
      "reformy gospodarcze z lat 90. XX wieku",
      "brak dużych miast",
      "bardzo mała liczba ludności"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Potencjał Indii wzmacniają ogromny rynek zbytu, duży udział młodych ludzi, tania i wykształcona anglojęzyczna kadra oraz reformy gospodarcze rozpoczęte w latach 90. XX wieku."
  },
  {
    "id": "R01_IND_03",
    "section": "Indie",
    "type": "true_false",
    "prompt": "Około 25% mieszkańców Indii nie potrafi czytać ani pisać.",
    "options": null,
    "answer": true,
    "explanation": "Około 350 mln mieszkańców Indii, czyli około 25% społeczeństwa, nie potrafi czytać ani pisać."
  },
  {
    "id": "R01_IND_04",
    "section": "Indie",
    "type": "fill_in",
    "prompt": "Najważniejszy indyjski ośrodek high-tech nazywany Silicon Plateau leży w okolicach miasta __________, a jedną z rozwiniętych tam dziedzin są technologie __________.",
    "options": null,
    "answer": [
      "Bangalur",
      "informatyczne"
    ],
    "altAnswers": [
      [
        "Bangalur",
        "Bangaluru",
        "Bangalore"
      ],
      [
        "informatyczne",
        "IT"
      ]
    ],
    "image": "r01_silicon_plateau.jpg",
    "explanation": "Silicon Plateau rozwinęło się w okolicach Bangaluru. Działają tam branże elektroniczne, biotechnologiczne, lotnicze, informatyczne i kosmiczne."
  },
  {
    "id": "R01_IND_05",
    "section": "Indie",
    "type": "riddle",
    "prompt": "Jak nazywa się warstwa społeczna, do której w tradycyjnym systemie hinduistycznym człowiek jest przypisywany w chwili narodzin?",
    "options": null,
    "answer": "kasta",
    "altAnswers": [
      "kasta",
      "kasty"
    ],
    "explanation": "W systemie kastowym człowiek od narodzin jest przypisany do określonej kasty, czyli warstwy społecznej o ustalonym miejscu w hierarchii."
  },
  {
    "id": "R01_IND_06",
    "section": "Indie",
    "type": "odd_one_out",
    "prompt": "Który element nie jest ważną rośliną uprawną Indii: ryż, herbata, bawełna, tytoń, ropa naftowa?",
    "options": null,
    "answer": "ropa naftowa",
    "explanation": "Ryż, herbata, bawełna i tytoń są ważnymi roślinami uprawnymi Indii. Ropa naftowa jest surowcem mineralnym."
  },
  {
    "id": "R01_IND_07",
    "section": "Indie",
    "type": "scenario",
    "prompt": "Międzynarodowa firma chce przenieść centrum obsługi telefonicznej do kraju z dużą liczbą tanich, dobrze wykształconych i anglojęzycznych pracowników. Które z omawianych państw najlepiej pasuje do tej sytuacji?",
    "options": [
      "Indie",
      "Japonia",
      "Mongolia",
      "Nepal",
      "Kuwejt",
      "Sri Lanka"
    ],
    "answer": 0,
    "image": "r01_silicon_plateau.jpg",
    "explanation": "Indie rozwinęły sektor nowoczesnych usług dzięki taniej, wykształconej i anglojęzycznej kadrze. Wielkie korporacje przenoszą tam między innymi centra obsługi telefonicznej."
  },
  {
    "id": "R01_IND_08",
    "section": "Indie",
    "type": "match",
    "prompt": "Połącz pojęcie związane z Indiami z jego opisem.",
    "options": null,
    "left": [
      "zielona rewolucja",
      "Silicon Plateau",
      "slamsy"
    ],
    "right": [
      "dzielnice najuboższej ludności miejskiej",
      "ośrodek high-tech koło Bangaluru",
      "wprowadzenie wydajniejszych odmian ryżu i pszenicy"
    ],
    "answer": {
      "zielona rewolucja": "wprowadzenie wydajniejszych odmian ryżu i pszenicy",
      "Silicon Plateau": "ośrodek high-tech koło Bangaluru",
      "slamsy": "dzielnice najuboższej ludności miejskiej"
    },
    "explanation": "Zielona rewolucja zwiększyła wydajność odmian ryżu i pszenicy, Silicon Plateau jest ośrodkiem high-tech koło Bangaluru, a slamsy to dzielnice wielkich miast zamieszkane przez najuboższych."
  },
  {
    "id": "R01_IND_09",
    "section": "Indie",
    "type": "sort",
    "prompt": "Podziel cechy indyjskich gospodarstw rolnych na tradycyjne i nowoczesne.",
    "options": null,
    "items": [
      "prymitywne narzędzia",
      "bawoły jako siła pociągowa",
      "niewielka powierzchnia",
      "wysoki poziom mechanizacji",
      "duże zużycie nawozów sztucznych",
      "wielkoobszarowość"
    ],
    "categories": [
      "tradycyjne gospodarstwa",
      "nowoczesne gospodarstwa"
    ],
    "answer": {
      "tradycyjne gospodarstwa": [
        "prymitywne narzędzia",
        "bawoły jako siła pociągowa",
        "niewielka powierzchnia"
      ],
      "nowoczesne gospodarstwa": [
        "wysoki poziom mechanizacji",
        "duże zużycie nawozów sztucznych",
        "wielkoobszarowość"
      ]
    },
    "explanation": "Na indyjskiej wsi obok nowoczesnych, wielkoobszarowych gospodarstw o wyższym poziomie mechanizacji i nawożenia istnieją niewielkie gospodarstwa używające prymitywnych narzędzi i bawołów jako siły pociągowej."
  },
  {
    "id": "R01_IND_10",
    "section": "Indie",
    "type": "sequence",
    "prompt": "Ułóż łańcuch przyczynowo-skutkowy prowadzący do rozwoju slamsów w wielkich miastach Indii.",
    "options": null,
    "items": [
      "Powstawanie i rozwój slamsów",
      "Migracja ludności do dużych miast",
      "Szybki wzrost liczby ludności",
      "Trudności z zaspokojeniem potrzeb żywnościowych na wsi",
      "Niekontrolowany wzrost liczby mieszkańców miast"
    ],
    "answer": [
      "Szybki wzrost liczby ludności",
      "Trudności z zaspokojeniem potrzeb żywnościowych na wsi",
      "Migracja ludności do dużych miast",
      "Niekontrolowany wzrost liczby mieszkańców miast",
      "Powstawanie i rozwój slamsów"
    ],
    "image": "r01_slumsy_indie.jpg",
    "explanation": "Szybki wzrost ludności i trudności z zaspokojeniem potrzeb żywnościowych na wsi sprzyjają migracji do miast. Niekontrolowany wzrost liczby mieszkańców miast prowadzi do powstawania i rozwoju slamsów."
  },
  {
    "id": "R01_BLI_01",
    "section": "Bliski Wschód",
    "type": "single_choice",
    "prompt": "Na pograniczu których trzech kontynentów leży Bliski Wschód?",
    "options": [
      "Azji, Afryki i Europy",
      "Azji, Europy i Ameryki Północnej",
      "Afryki, Europy i Ameryki Południowej",
      "Azji, Australii i Europy",
      "Afryki, Australii i Azji",
      "Europy, Australii i Ameryki Północnej"
    ],
    "answer": 0,
    "explanation": "Bliski Wschód leży na pograniczu Azji, Afryki i Europy."
  },
  {
    "id": "R01_BLI_02",
    "section": "Bliski Wschód",
    "type": "multi_select",
    "prompt": "Zaznacz państwa Bliskiego Wschodu mające bogate złoża ropy naftowej.",
    "options": [
      "Arabia Saudyjska",
      "Iran",
      "Irak",
      "Kuwejt",
      "Jordania",
      "Liban"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_szyby_naftowe.jpg",
    "explanation": "Bogate złoża ropy naftowej mają między innymi Arabia Saudyjska, Iran, Irak i Kuwejt. Jordania i Liban dysponują niewielkimi zasobami."
  },
  {
    "id": "R01_BLI_03",
    "section": "Bliski Wschód",
    "type": "true_false",
    "prompt": "Około 95% mieszkańców państw Bliskiego Wschodu stanowią wyznawcy islamu.",
    "options": null,
    "answer": true,
    "explanation": "Państwa Bliskiego Wschodu zamieszkuje około 420 mln ludzi, z czego prawie 95% stanowią muzułmanie."
  },
  {
    "id": "R01_BLI_04",
    "section": "Bliski Wschód",
    "type": "fill_in",
    "prompt": "Na Bliskim Wschodzie znajduje się blisko __________% światowych zasobów ropy naftowej i około __________% światowych zasobów gazu ziemnego.",
    "options": null,
    "answer": [
      "50",
      "40"
    ],
    "altAnswers": [
      [
        "50",
        "50%",
        "blisko 50"
      ],
      [
        "40",
        "40%"
      ]
    ],
    "explanation": "Region ma blisko połowę światowych zasobów ropy naftowej oraz około 40% zasobów gazu ziemnego."
  },
  {
    "id": "R01_BLI_05",
    "section": "Bliski Wschód",
    "type": "riddle",
    "prompt": "Jak nazywa się organizacja krajów eksportujących ropę naftową, na której forum ustala się między innymi wielkość wydobycia i poziom cen surowca?",
    "options": null,
    "answer": "OPEC",
    "altAnswers": [
      "OPEC"
    ],
    "image": "r01_szyby_naftowe.jpg",
    "explanation": "OPEC zrzesza kraje eksportujące ropę naftową i służy między innymi koordynowaniu wielkości wydobycia oraz polityki cenowej."
  },
  {
    "id": "R01_BLI_06",
    "section": "Bliski Wschód",
    "type": "odd_one_out",
    "prompt": "Wskaż państwo o niewielkich zasobach ropy naftowej w porównaniu z pozostałymi: Arabia Saudyjska, Iran, Irak, Kuwejt, Jordania.",
    "options": null,
    "answer": "Jordania",
    "explanation": "Arabia Saudyjska, Iran, Irak i Kuwejt mają bogate złoża ropy naftowej. Jordania dysponuje niewielkimi zasobami tego surowca."
  },
  {
    "id": "R01_BLI_07",
    "section": "Bliski Wschód",
    "type": "scenario",
    "prompt": "Od wschodu do zachodu słońca wierny nie je ani nie pije. Który obowiązek religijny właśnie wypełnia?",
    "options": [
      "post w czasie ramadanu",
      "pielgrzymkę do Mekki",
      "modlitwę z twarzą zwróconą ku Mekce",
      "zakaz spożywania wieprzowiny"
    ],
    "answer": 0,
    "image": "r01_meczet_mekka.jpg",
    "explanation": "W czasie ramadanu muzułmanów od wschodu do zachodu słońca obowiązuje post, czyli zakaz jedzenia i picia."
  },
  {
    "id": "R01_BLI_08",
    "section": "Bliski Wschód",
    "type": "match",
    "prompt": "Połącz miejsce lub obiekt Bliskiego Wschodu z informacją.",
    "options": null,
    "left": [
      "Mekka",
      "Doha",
      "Dubaj"
    ],
    "right": [
      "stolica Kataru",
      "święte miasto islamu",
      "miasto z Burdż Chalifa"
    ],
    "answer": {
      "Mekka": "święte miasto islamu",
      "Doha": "stolica Kataru",
      "Dubaj": "miasto z Burdż Chalifa"
    },
    "explanation": "Mekka jest świętym miastem islamu, Doha jest stolicą Kataru, a w Dubaju znajduje się Burdż Chalifa o wysokości 828 m."
  },
  {
    "id": "R01_BLI_09",
    "section": "Bliski Wschód",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do skutków dochodów z eksportu ropy lub skutków konfliktów zbrojnych na Bliskim Wschodzie.",
    "options": null,
    "items": [
      "darmowa edukacja w części państw",
      "rozwój nowoczesnej infrastruktury miejskiej",
      "zniszczenia dróg i szpitali",
      "migracje ludności",
      "wzrost cen ropy"
    ],
    "categories": [
      "skutki dochodów z ropy",
      "skutki konfliktów"
    ],
    "answer": {
      "skutki dochodów z ropy": [
        "darmowa edukacja w części państw",
        "rozwój nowoczesnej infrastruktury miejskiej"
      ],
      "skutki konfliktów": [
        "zniszczenia dróg i szpitali",
        "migracje ludności",
        "wzrost cen ropy"
      ]
    },
    "explanation": "Dochody z ropy finansują między innymi edukację, opiekę medyczną i modernizację miast. Konflikty prowadzą do zniszczeń infrastruktury, migracji i wzrostu cen ropy."
  },
  {
    "id": "R01_BLI_10",
    "section": "Bliski Wschód",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z konfliktami na Bliskim Wschodzie w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Rozpoczęcie wojny w Iraku",
      "Początek konfliktu izraelsko-arabskiego",
      "Działalność tzw. Państwa Islamskiego",
      "Początek wojny domowej w Syrii"
    ],
    "answer": [
      "Początek konfliktu izraelsko-arabskiego",
      "Rozpoczęcie wojny w Iraku",
      "Początek wojny domowej w Syrii",
      "Działalność tzw. Państwa Islamskiego"
    ],
    "explanation": "Konflikt izraelsko-arabski trwa od 1948 r., wojna w Iraku rozpoczęła się w 2003 r., wojna domowa w Syrii zaczęła się w 2011 r., a tzw. Państwo Islamskie działało głównie w latach 2014-2019."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest różnica wysokości między Mount Everestem (8848 m n.p.m.) a wybrzeżem Morza Martwego (430 m p.p.m.)?",
    "options": [
      "8848 m",
      "8918 m",
      "9278 m",
      "9300 m",
      "10 916 m",
      "12 000 m"
    ],
    "answer": 2,
    "image": "r01_himalaje.jpg",
    "explanation": "Mount Everest ma 8848 m n.p.m., a wybrzeże Morza Martwego leży 430 m p.p.m., co daje różnicę 9278 m."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Rów Mariański ma ponad __________ km długości, a w najgłębszym miejscu osiąga __________ m.",
    "options": null,
    "answer": [
      "2000",
      "10 916"
    ],
    "altAnswers": [
      [
        "2000",
        "2 000",
        "ponad 2000"
      ],
      [
        "10 916",
        "10916"
      ]
    ],
    "explanation": "Rów Mariański ciągnie się łukiem o długości ponad 2000 km, a jego największa głębokość wynosi 10 916 m."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz mniejsze płyty litosfery, na których leży część Azji.",
    "options": [
      "filipińska",
      "indyjska",
      "irańska",
      "arabska",
      "karaibska",
      "kokosowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Poza wielkimi płytami eurazjatycką i północnoamerykańską część Azji leży na płytach filipińskiej, indyjskiej, irańskiej i arabskiej."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz azjatycki obiekt geograficzny ze światowym rekordem.",
    "options": null,
    "left": [
      "Półwysep Arabski",
      "Archipelag Malajski",
      "Wyżyna Tybetańska",
      "Bajkał"
    ],
    "right": [
      "najgłębsze jezioro",
      "najwyżej położona wyżyna",
      "największy archipelag",
      "największy półwysep"
    ],
    "answer": {
      "Półwysep Arabski": "największy półwysep",
      "Archipelag Malajski": "największy archipelag",
      "Wyżyna Tybetańska": "najwyżej położona wyżyna",
      "Bajkał": "najgłębsze jezioro"
    },
    "explanation": "Półwysep Arabski jest największym półwyspem, Archipelag Malajski największym archipelagiem, Wyżyna Tybetańska najwyżej położoną wyżyną, a Bajkał najgłębszym jeziorem świata."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas trzęsienia ziemi naukowcy wskazują punkt we wnętrzu Ziemi, z którego rozchodzą się fale sejsmiczne, oraz punkt na powierzchni położony bezpośrednio nad nim. Jak nazywają się te punkty?",
    "options": [
      "hipocentrum i epicentrum",
      "epicentrum i krater",
      "krater i kaldera",
      "lawa i magma",
      "rów i grzbiet",
      "płyta i uskok"
    ],
    "answer": 0,
    "explanation": "Punkt we wnętrzu Ziemi to hipocentrum, czyli ognisko wstrząsów, a punkt na powierzchni bezpośrednio nad nim to epicentrum."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż obiekt, który nie jest rowem oceanicznym: Rów Tonga, Rów Izu-Ogasawara, Rów Kurylsko-Kamczacki, Rów Filipiński, Morze Kaspijskie.",
    "options": null,
    "answer": "Morze Kaspijskie",
    "explanation": "Rów Tonga, Izu-Ogasawara, Kurylsko-Kamczacki i Filipiński to wielkie rowy oceaniczne. Morze Kaspijskie jest ogromnym jeziorem."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania Himalajów podczas kolizji fragmentu Gondwany z Azją.",
    "options": null,
    "items": [
      "Dalszy napór powoduje wypiętrzenie sfałdowanych osadów",
      "Dochodzi do kolizji fragmentu Gondwany z kontynentem azjatyckim",
      "Osady znajdujące się na dnie morza ulegają sfałdowaniu"
    ],
    "answer": [
      "Dochodzi do kolizji fragmentu Gondwany z kontynentem azjatyckim",
      "Osady znajdujące się na dnie morza ulegają sfałdowaniu",
      "Dalszy napór powoduje wypiętrzenie sfałdowanych osadów"
    ],
    "explanation": "Himalaje powstały w wyniku kolizji fragmentu Gondwany, dzisiejszego Półwyspu Indyjskiego, z kontynentem azjatyckim. Osady dna morza zostały sfałdowane, a dalszy napór doprowadził do ich wypiętrzenia."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile mniej więcej wulkanów znajduje się w Japonii i ile z nich jest czynnych?",
    "options": [
      "około 40 i wszystkie czynne",
      "blisko 80 i około 20 czynnych",
      "blisko 160 i około 40 czynnych",
      "około 300 i około 200 czynnych",
      "około 500 i około 50 czynnych",
      "ponad 1000 i około 160 czynnych"
    ],
    "answer": 2,
    "image": "r01_fudzi.jpg",
    "explanation": "W Japonii znajduje się blisko 160 wulkanów, z czego około 40 to wulkany czynne."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje liczbowe charakteryzujące rolnictwo i wyżywienie Japonii.",
    "options": [
      "grunty orne zajmują około 11% kraju",
      "wiele gospodarstw ma powierzchnię nieprzekraczającą 1 ha",
      "rolnictwo pokrywa około 50% potrzeb żywnościowych",
      "grunty orne zajmują ponad 50% kraju",
      "rolnictwo pokrywa niemal 100% potrzeb"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Grunty orne zajmują około 11% kraju, wiele gospodarstw ma nie więcej niż 1 ha, a krajowe rolnictwo pokrywa około 50% potrzeb żywnościowych mieszkańców."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Chiński system kolei dużych prędkości obejmuje ponad __________ km tras, czyli około __________% wszystkich takich tras na świecie, a linia Pekin–Hongkong ma około __________ km.",
    "options": null,
    "answer": [
      "35 000",
      "70",
      "2440"
    ],
    "altAnswers": [
      [
        "35 000",
        "35000",
        "ponad 35 000"
      ],
      [
        "70",
        "70%"
      ],
      [
        "2440",
        "2 440"
      ]
    ],
    "explanation": "Chiński system kolei dużych prędkości obejmuje ponad 35 000 km tras, około 70% światowej sieci tego typu, a linia Pekin–Hongkong ma około 2440 km."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Około 45% mieszkańców Indii ma mniej niż 25 lat.",
    "options": null,
    "answer": true,
    "explanation": "Duży udział młodej ludności — około 45% mieszkańców poniżej 25 lat — zwiększa zasoby pracy i atrakcyjność Indii dla inwestorów."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Który XVII-wieczny władca Indii polecił wznieść Tadż Mahal jako grobowiec dla Mumtaz Mahal?",
    "options": null,
    "answer": "Szahdżahan",
    "altAnswers": [
      "Szahdżahan",
      "Szahdżahan I",
      "Shah Jahan"
    ],
    "image": "r01_tadz_mahal.jpg",
    "explanation": "Szahdżahan polecił zbudować dla zmarłej żony Mumtaz Mahal ogromny grobowiec z białego marmuru. Budowa trwała 22 lata."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie związane z konfliktami Bliskiego Wschodu z właściwym rokiem lub okresem.",
    "options": null,
    "left": [
      "początek konfliktu izraelsko-arabskiego",
      "początek wojny w Iraku",
      "arabska wiosna",
      "kulminacja migracji do Europy"
    ],
    "right": [
      "2015",
      "2003",
      "1948",
      "2011-2013"
    ],
    "answer": {
      "początek konfliktu izraelsko-arabskiego": "1948",
      "początek wojny w Iraku": "2003",
      "arabska wiosna": "2011-2013",
      "kulminacja migracji do Europy": "2015"
    },
    "explanation": "Konflikt izraelsko-arabski trwa od 1948 r., wojna w Iraku rozpoczęła się w 2003 r., arabska wiosna przypada na lata 2011-2013, a kulminacja kryzysu migracyjnego do Europy nastąpiła w 2015 r."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj szczegółowe dane do Japonii, Chin, Indii lub Bliskiego Wschodu.",
    "options": null,
    "items": [
      "około 11% powierzchni to grunty orne",
      "średnio około 1,5 tys. trzęsień ziemi rocznie",
      "około 95% ludności mieszka na wschodzie",
      "około 25% zatrudnionych pracuje w rolnictwie",
      "około 25% społeczeństwa to analfabeci",
      "około 45% ludności ma mniej niż 25 lat",
      "prawie 95% mieszkańców to muzułmanie",
      "blisko 50% światowych zasobów ropy naftowej"
    ],
    "categories": [
      "Japonia",
      "Chiny",
      "Indie",
      "Bliski Wschód"
    ],
    "answer": {
      "Japonia": [
        "około 11% powierzchni to grunty orne",
        "średnio około 1,5 tys. trzęsień ziemi rocznie"
      ],
      "Chiny": [
        "około 95% ludności mieszka na wschodzie",
        "około 25% zatrudnionych pracuje w rolnictwie"
      ],
      "Indie": [
        "około 25% społeczeństwa to analfabeci",
        "około 45% ludności ma mniej niż 25 lat"
      ],
      "Bliski Wschód": [
        "prawie 95% mieszkańców to muzułmanie",
        "blisko 50% światowych zasobów ropy naftowej"
      ]
    },
    "explanation": "Dane liczbowe pokazują silne kontrasty między omawianymi regionami i państwami: Japonia ma mało gruntów ornych i wiele trzęsień ziemi, Chiny skupiają ludność na wschodzie, Indie mają duży udział młodych ludzi i analfabetów, a Bliski Wschód wyróżnia się udziałem muzułmanów i zasobami ropy."
  }
];

const chapter = {
  id: "r01",
  number: 1,
  title: "Azja",
  icon: "🌏",
  sectionOrder: [
    "Środowisko przyrodnicze",
    "Rolnictwo Azji",
    "Japonia",
    "Chiny",
    "Indie",
    "Bliski Wschód"
  ],
  sectionIcons: {
    "Środowisko przyrodnicze": "🌋",
    "Rolnictwo Azji": "🌾",
    "Japonia": "🚄",
    "Chiny": "🏭",
    "Indie": "💻",
    "Bliski Wschód": "🛢️"
  },
  exercises: ALL_EXERCISES
};

export default chapter;
