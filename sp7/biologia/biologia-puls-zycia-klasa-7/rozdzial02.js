// Skróty sekcji (do identyfikatorów ćwiczeń):
//   APU  = Aparat ruchu i budowa szkieletu
//   KOS  = Budowa kości
//   OSI  = Szkielet osiowy
//   KST  = Szkielet kończyn i stawy
//   MIE  = Budowa i praca mięśni
//   HIG  = Higiena i choroby aparatu ruchu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_APU_01",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "single_choice",
    "prompt": "Który układ stanowi czynną część aparatu ruchu?",
    "options": [
      "układ mięśniowy",
      "układ szkieletowy",
      "szkielet osiowy",
      "szkielet kończyn",
      "klatka piersiowa",
      "obręcz barkowa"
    ],
    "answer": 0,
    "explanation": "Układ mięśniowy jest czynną częścią aparatu ruchu, ponieważ skurcze mięśni przesuwają kości."
  },
  {
    "id": "R02_APU_02",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "true_false",
    "prompt": "Układ szkieletowy jest bierną częścią aparatu ruchu.",
    "options": null,
    "answer": true,
    "explanation": "Kości same nie zmieniają swojego położenia; ruch jest możliwy dzięki pracy mięśni."
  },
  {
    "id": "R02_APU_03",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje układu szkieletowego.",
    "options": [
      "dźwiganie ciężaru ciała",
      "nadawanie organizmowi kształtu",
      "ochrona narządów przed urazami",
      "wytwarzanie komórek krwi",
      "gromadzenie substancji mineralnych",
      "wytwarzanie ciepła"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Układ szkieletowy dźwiga ciężar ciała, nadaje organizmowi kształt, chroni narządy, wytwarza komórki krwi i gromadzi substancje mineralne. Wytwarzanie ciepła jest jedną z funkcji mięśni szkieletowych."
  },
  {
    "id": "R02_APU_04",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "match",
    "prompt": "Połącz część szkieletu z jej podstawową funkcją.",
    "options": null,
    "left": [
      "czaszka",
      "klatka piersiowa",
      "obręcz barkowa",
      "obręcz miedniczna"
    ],
    "right": [
      "ochrania mózg i inne narządy głowy",
      "chroni serce i płuca",
      "łączy kończyny górne ze szkieletem osiowym",
      "łączy kończyny dolne z kręgosłupem"
    ],
    "answer": {
      "czaszka": "ochrania mózg i inne narządy głowy",
      "klatka piersiowa": "chroni serce i płuca",
      "obręcz barkowa": "łączy kończyny górne ze szkieletem osiowym",
      "obręcz miedniczna": "łączy kończyny dolne z kręgosłupem"
    },
    "image": "r02_szkielet_czlowieka.jpg",
    "explanation": "Czaszka chroni narządy głowy, klatka piersiowa osłania serce i płuca, obręcz barkowa łączy kończyny górne ze szkieletem osiowym, a obręcz miedniczna łączy kończyny dolne z kręgosłupem."
  },
  {
    "id": "R02_APU_05",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do szkieletu osiowego albo szkieletu kończyn.",
    "options": null,
    "items": [
      "czaszka",
      "kręgosłup",
      "klatka piersiowa",
      "kończyna górna z obręczą barkową",
      "kończyna dolna z obręczą miedniczną"
    ],
    "categories": [
      "szkielet osiowy",
      "szkielet kończyn"
    ],
    "answer": {
      "szkielet osiowy": [
        "czaszka",
        "kręgosłup",
        "klatka piersiowa"
      ],
      "szkielet kończyn": [
        "kończyna górna z obręczą barkową",
        "kończyna dolna z obręczą miedniczną"
      ]
    },
    "explanation": "Szkielet osiowy tworzą czaszka, kręgosłup i klatka piersiowa. Szkielet kończyn obejmuje kończyny górne i dolne wraz z ich obręczami."
  },
  {
    "id": "R02_APU_06",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "fill_in",
    "prompt": "Szkielet człowieka dzieli się na szkielet __________ i szkielet __________.",
    "options": null,
    "answer": [
      "osiowy",
      "kończyn"
    ],
    "altAnswers": [
      [
        "osiowy"
      ],
      [
        "kończyn"
      ]
    ],
    "explanation": "Dwie główne części szkieletu człowieka to szkielet osiowy i szkielet kończyn."
  },
  {
    "id": "R02_APU_07",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest kością: kość udowa, łopatka, kość nadgarstka, kręg, ścięgno.",
    "options": null,
    "answer": "ścięgno",
    "image": "r02_ksztalty_kosci.jpg",
    "explanation": "Ścięgno jest pasmem tkanki łącznej przymocowującym mięsień do kości. Pozostałe elementy są kośćmi."
  },
  {
    "id": "R02_APU_08",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "scenario",
    "prompt": "Badana kość ma dużą powierzchnię i pełni przede wszystkim funkcję ochronną. Do której grupy kości pod względem kształtu najprawdopodobniej należy?",
    "options": [
      "kości płaskie",
      "kości długie",
      "kości krótkie",
      "kości różnokształtne",
      "kości palców",
      "kości obręczy"
    ],
    "answer": 0,
    "image": "r02_ksztalty_kosci.jpg",
    "explanation": "Kości płaskie, takie jak łopatka, mają dużą powierzchnię i pełnią przede wszystkim funkcje ochronne."
  },
  {
    "id": "R02_APU_09",
    "section": "Aparat ruchu i budowa szkieletu",
    "type": "riddle",
    "prompt": "Jest najdłuższą kością w ciele człowieka i wchodzi w skład kończyny dolnej. Co to za kość?",
    "options": null,
    "answer": "kość udowa",
    "altAnswers": [
      "kość udowa",
      "udowa"
    ],
    "image": "r02_ksztalty_kosci.jpg",
    "explanation": "Najdłuższą kością człowieka jest kość udowa; może osiągać nawet około pół metra długości."
  },
  {
    "id": "R02_KOS_01",
    "section": "Budowa kości",
    "type": "single_choice",
    "prompt": "Które składniki substancji międzykomórkowej tkanki kostnej nadają kości sztywność i twardość?",
    "options": [
      "związki mineralne",
      "białka",
      "maź stawowa",
      "włókna mięśniowe",
      "tkanka tłuszczowa",
      "ścięgna"
    ],
    "answer": 0,
    "explanation": "Sztywność i twardość kości wynikają z obecności związków mineralnych, przede wszystkim związków wapnia i fosforu."
  },
  {
    "id": "R02_KOS_02",
    "section": "Budowa kości",
    "type": "multi_select",
    "prompt": "Zaznacz składniki budujące tkankę kostną.",
    "options": [
      "komórki kostne",
      "związki wapnia i fosforu",
      "białka",
      "maź stawowa",
      "włókna mięśniowe",
      "więzadła"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tkanka kostna składa się z komórek kostnych i substancji międzykomórkowej zawierającej związki mineralne oraz organiczne, głównie białka."
  },
  {
    "id": "R02_KOS_03",
    "section": "Budowa kości",
    "type": "true_false",
    "prompt": "Tkanka chrzęstna nie zawiera związków mineralnych, dlatego jest elastyczna i sprężysta.",
    "options": null,
    "answer": true,
    "explanation": "Brak związków mineralnych sprawia, że tkanka chrzęstna jest bardziej elastyczna i sprężysta niż tkanka kostna."
  },
  {
    "id": "R02_KOS_04",
    "section": "Budowa kości",
    "type": "fill_in",
    "prompt": "Okostna umożliwia przyrost kości na __________, a chrząstka nasadowa jest miejscem wzrostu kości na __________.",
    "options": null,
    "answer": [
      "grubość",
      "długość"
    ],
    "altAnswers": [
      [
        "grubość"
      ],
      [
        "długość"
      ]
    ],
    "explanation": "Okostna odpowiada za przyrost kości na grubość, natomiast chrząstka nasadowa w kościach długich dziecka umożliwia wzrost na długość."
  },
  {
    "id": "R02_KOS_05",
    "section": "Budowa kości",
    "type": "match",
    "prompt": "Połącz element budowy kości z właściwą cechą lub funkcją.",
    "options": null,
    "left": [
      "okostna",
      "tkanka kostna zbita",
      "tkanka kostna gąbczasta",
      "tkanka chrzęstna na nasadach"
    ],
    "right": [
      "umożliwia przyrost kości na grubość",
      "buduje głównie trzon kości długiej",
      "buduje głównie nasady kości długiej",
      "chroni powierzchnie kości przed ścieraniem"
    ],
    "answer": {
      "okostna": "umożliwia przyrost kości na grubość",
      "tkanka kostna zbita": "buduje głównie trzon kości długiej",
      "tkanka kostna gąbczasta": "buduje głównie nasady kości długiej",
      "tkanka chrzęstna na nasadach": "chroni powierzchnie kości przed ścieraniem"
    },
    "image": "r02_kosc_dluga_przekroj.jpg",
    "explanation": "Okostna chroni kość i umożliwia jej wzrost na grubość. Tkanka zbita leży głównie pod okostną i buduje trzon, tkanka gąbczasta wypełnia wnętrze i nasady, a chrząstka chroni nasady przed ścieraniem."
  },
  {
    "id": "R02_KOS_06",
    "section": "Budowa kości",
    "type": "sort",
    "prompt": "Przyporządkuj składniki i właściwości do związków mineralnych albo organicznych tkanki kostnej.",
    "options": null,
    "items": [
      "wapń i fosfor",
      "twardość i sztywność",
      "białka",
      "sprężystość",
      "odporność na odkształcenia"
    ],
    "categories": [
      "związki mineralne",
      "związki organiczne"
    ],
    "answer": {
      "związki mineralne": [
        "wapń i fosfor",
        "twardość i sztywność"
      ],
      "związki organiczne": [
        "białka",
        "sprężystość",
        "odporność na odkształcenia"
      ]
    },
    "image": "r02_kosc_dluga_przekroj.jpg",
    "explanation": "Związki mineralne obejmują między innymi związki wapnia i fosforu i nadają kości twardość. Związki organiczne to głównie białka, które nadają sprężystość i odporność na odkształcenia."
  },
  {
    "id": "R02_KOS_07",
    "section": "Budowa kości",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest częścią budowy kości długiej: nasada, trzon, okostna, tkanka kostna gąbczasta, ścięgno.",
    "options": null,
    "answer": "ścięgno",
    "image": "r02_kosc_dluga_przekroj.jpg",
    "explanation": "Ścięgno należy do budowy mięśnia szkieletowego i przymocowuje go do kości. Pozostałe elementy dotyczą budowy kości długiej."
  },
  {
    "id": "R02_KOS_08",
    "section": "Budowa kości",
    "type": "scenario",
    "prompt": "Kość kurczaka przez kilka dni była zanurzona w occie, który rozpuścił sole mineralne. Jakiej cechy kości będzie wtedy najbardziej brakować?",
    "options": [
      "twardości i sztywności",
      "sprężystości nadawanej przez białka",
      "zdolności mięśnia do skurczu",
      "mazi stawowej",
      "więzadeł",
      "okostnej"
    ],
    "answer": 0,
    "image": "r02_kosc_dluga_przekroj.jpg",
    "explanation": "Sole mineralne nadają kości twardość i sztywność. Po ich usunięciu kość staje się znacznie bardziej giętka."
  },
  {
    "id": "R02_KOS_09",
    "section": "Budowa kości",
    "type": "riddle",
    "prompt": "W kościach powstają w nim komórki krwi i płytki krwi. Jak nazywa się ten rodzaj szpiku?",
    "options": null,
    "answer": "szpik kostny czerwony",
    "altAnswers": [
      "szpik kostny czerwony",
      "czerwony szpik kostny",
      "szpik czerwony"
    ],
    "explanation": "Komórki krwi i płytki krwi powstają w szpiku kostnym czerwonym."
  },
  {
    "id": "R02_OSI_01",
    "section": "Szkielet osiowy",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie elementy szkieletu osiowego?",
    "options": [
      "czaszka, kręgosłup, klatka piersiowa",
      "czaszka, obręcz barkowa, klatka piersiowa",
      "kręgosłup, kończyna górna, klatka piersiowa",
      "czaszka, obręcz miedniczna, kręgosłup",
      "kończyna dolna, kręgosłup, czaszka",
      "obręcz barkowa, obręcz miedniczna, kręgosłup"
    ],
    "answer": 0,
    "explanation": "Szkielet osiowy składa się z czaszki, kręgosłupa i klatki piersiowej."
  },
  {
    "id": "R02_OSI_02",
    "section": "Szkielet osiowy",
    "type": "multi_select",
    "prompt": "Zaznacz kości należące do mózgoczaszki.",
    "options": [
      "kość czołowa",
      "kość potyliczna",
      "kość skroniowa",
      "kość ciemieniowa",
      "kość nosowa",
      "żuchwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r02_czaszka.jpg",
    "explanation": "Do mózgoczaszki należą między innymi kości czołowa, potyliczna, skroniowe i ciemieniowe. Kość nosowa i żuchwa należą do trzewioczaszki."
  },
  {
    "id": "R02_OSI_03",
    "section": "Szkielet osiowy",
    "type": "true_false",
    "prompt": "Żuchwa jest jedyną kością czaszki połączoną z innymi kośćmi ruchomo.",
    "options": null,
    "answer": true,
    "image": "r02_czaszka.jpg",
    "explanation": "Większość kości czaszki łączy się nieruchomo szwami, a żuchwa jest jej jedyną kością połączoną ruchomo."
  },
  {
    "id": "R02_OSI_04",
    "section": "Szkielet osiowy",
    "type": "fill_in",
    "prompt": "Kręgosłup dzieli się na odcinki: __________, __________, __________, __________ i __________.",
    "options": null,
    "answer": [
      "szyjny",
      "piersiowy",
      "lędźwiowy",
      "krzyżowy",
      "ogonowy"
    ],
    "altAnswers": [
      [
        "szyjny"
      ],
      [
        "piersiowy"
      ],
      [
        "lędźwiowy"
      ],
      [
        "krzyżowy"
      ],
      [
        "ogonowy"
      ]
    ],
    "image": "r02_kregoslup.jpg",
    "explanation": "Pięć odcinków kręgosłupa to: szyjny, piersiowy, lędźwiowy, krzyżowy i ogonowy."
  },
  {
    "id": "R02_OSI_05",
    "section": "Szkielet osiowy",
    "type": "match",
    "prompt": "Połącz odcinek kręgosłupa z jego opisem.",
    "options": null,
    "left": [
      "szyjny",
      "piersiowy",
      "lędźwiowy",
      "krzyżowy",
      "ogonowy"
    ],
    "right": [
      "7 kręgów",
      "12 kręgów",
      "5 najbardziej masywnych kręgów",
      "kość krzyżowa z 5 zrośniętych kręgów",
      "kość guziczna z 4 lub 5 zrośniętych kręgów"
    ],
    "answer": {
      "szyjny": "7 kręgów",
      "piersiowy": "12 kręgów",
      "lędźwiowy": "5 najbardziej masywnych kręgów",
      "krzyżowy": "kość krzyżowa z 5 zrośniętych kręgów",
      "ogonowy": "kość guziczna z 4 lub 5 zrośniętych kręgów"
    },
    "image": "r02_kregoslup.jpg",
    "explanation": "Odcinek szyjny ma 7 kręgów, piersiowy 12, lędźwiowy 5 masywnych kręgów, krzyżowy tworzy kość krzyżowa z 5 zrośniętych kręgów, a ogonowy kość guziczna z 4 lub 5 zrośniętych kręgów."
  },
  {
    "id": "R02_OSI_06",
    "section": "Szkielet osiowy",
    "type": "sequence",
    "prompt": "Ułóż odcinki kręgosłupa od położonego najwyżej do położonego najniżej.",
    "options": null,
    "items": [
      "lędźwiowy",
      "szyjny",
      "ogonowy",
      "piersiowy",
      "krzyżowy"
    ],
    "answer": [
      "szyjny",
      "piersiowy",
      "lędźwiowy",
      "krzyżowy",
      "ogonowy"
    ],
    "image": "r02_kregoslup.jpg",
    "explanation": "Od podstawy czaszki ku dołowi występują kolejno odcinki: szyjny, piersiowy, lędźwiowy, krzyżowy i ogonowy."
  },
  {
    "id": "R02_OSI_07",
    "section": "Szkielet osiowy",
    "type": "single_choice",
    "prompt": "Ile par żeber wolnych nie ma połączenia z mostkiem?",
    "options": [
      "2",
      "3",
      "5",
      "7",
      "10",
      "12"
    ],
    "answer": 0,
    "image": "r02_klatka_piersiowa.jpg",
    "explanation": "Dwie pary żeber wolnych nie łączą się z mostkiem."
  },
  {
    "id": "R02_OSI_08",
    "section": "Szkielet osiowy",
    "type": "sort",
    "prompt": "Przyporządkuj kości do mózgoczaszki albo trzewioczaszki.",
    "options": null,
    "items": [
      "kość czołowa",
      "kość potyliczna",
      "kość ciemieniowa",
      "kość skroniowa",
      "kość nosowa",
      "kość jarzmowa",
      "szczęka",
      "żuchwa"
    ],
    "categories": [
      "mózgoczaszka",
      "trzewioczaszka"
    ],
    "answer": {
      "mózgoczaszka": [
        "kość czołowa",
        "kość potyliczna",
        "kość ciemieniowa",
        "kość skroniowa"
      ],
      "trzewioczaszka": [
        "kość nosowa",
        "kość jarzmowa",
        "szczęka",
        "żuchwa"
      ]
    },
    "image": "r02_czaszka.jpg",
    "explanation": "Mózgoczaszkę tworzą między innymi kości czołowa, potyliczna, ciemieniowa i skroniowa. Do trzewioczaszki należą między innymi kości nosowe, jarzmowe, szczęki i żuchwa."
  },
  {
    "id": "R02_OSI_09",
    "section": "Szkielet osiowy",
    "type": "riddle",
    "prompt": "Otwory kręgowe wszystkich kręgów tworzą przestrzeń, w której biegnie rdzeń kręgowy. Jak nazywa się ta przestrzeń?",
    "options": null,
    "answer": "kanał kręgowy",
    "altAnswers": [
      "kanał kręgowy",
      "kanał"
    ],
    "image": "r02_kregoslup.jpg",
    "explanation": "Otwory kręgowe ustawione jeden nad drugim tworzą kanał kręgowy, w którym przebiega rdzeń kręgowy."
  },
  {
    "id": "R02_KST_01",
    "section": "Szkielet kończyn i stawy",
    "type": "single_choice",
    "prompt": "Która kość tworzy ramię kończyny górnej?",
    "options": [
      "kość ramienna",
      "kość łokciowa",
      "kość promieniowa",
      "kość udowa",
      "kość piszczelowa",
      "obojczyk"
    ],
    "answer": 0,
    "image": "r02_konczyna_gorna.jpg",
    "explanation": "Ramię tworzy kość ramienna. Przedramię budują kości łokciowa i promieniowa."
  },
  {
    "id": "R02_KST_02",
    "section": "Szkielet kończyn i stawy",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do szkieletu ręki w znaczeniu anatomicznym.",
    "options": [
      "kości nadgarstka",
      "kości śródręcza",
      "paliczki",
      "kość ramienna",
      "kość łokciowa",
      "obojczyk"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r02_konczyna_gorna.jpg",
    "explanation": "Ręka obejmuje nadgarstek, śródręcze i palce zbudowane z paliczków."
  },
  {
    "id": "R02_KST_03",
    "section": "Szkielet kończyn i stawy",
    "type": "fill_in",
    "prompt": "Przeciwstawny kciuk składa się z __________ paliczków, a każdy z pozostałych palców ręki z __________ paliczków.",
    "options": null,
    "answer": [
      "2",
      "3"
    ],
    "altAnswers": [
      [
        "2",
        "dwóch"
      ],
      [
        "3",
        "trzech"
      ]
    ],
    "explanation": "Kciuk ma dwa paliczki, natomiast pozostałe palce ręki mają po trzy paliczki."
  },
  {
    "id": "R02_KST_04",
    "section": "Szkielet kończyn i stawy",
    "type": "match",
    "prompt": "Połącz część kończyny z kośćmi, które ją budują.",
    "options": null,
    "left": [
      "ramię",
      "przedramię",
      "udo",
      "podudzie"
    ],
    "right": [
      "kość ramienna",
      "kość łokciowa i promieniowa",
      "kość udowa",
      "kość piszczelowa i strzałkowa"
    ],
    "answer": {
      "ramię": "kość ramienna",
      "przedramię": "kość łokciowa i promieniowa",
      "udo": "kość udowa",
      "podudzie": "kość piszczelowa i strzałkowa"
    },
    "explanation": "Ramię tworzy kość ramienna, przedramię kości łokciowa i promieniowa, udo kość udowa, a podudzie kości piszczelowa i strzałkowa."
  },
  {
    "id": "R02_KST_05",
    "section": "Szkielet kończyn i stawy",
    "type": "sort",
    "prompt": "Przyporządkuj kości do kończyny górnej albo dolnej.",
    "options": null,
    "items": [
      "kość ramienna",
      "kość promieniowa",
      "kości nadgarstka",
      "kość udowa",
      "kość piszczelowa",
      "kości stępu"
    ],
    "categories": [
      "kończyna górna",
      "kończyna dolna"
    ],
    "answer": {
      "kończyna górna": [
        "kość ramienna",
        "kość promieniowa",
        "kości nadgarstka"
      ],
      "kończyna dolna": [
        "kość udowa",
        "kość piszczelowa",
        "kości stępu"
      ]
    },
    "image": "r02_konczyna_dolna.jpg",
    "explanation": "Kończyna górna obejmuje między innymi kość ramienną, łokciową, promieniową i kości ręki. Kończyna dolna obejmuje kość udową, piszczelową, strzałkową i kości stopy."
  },
  {
    "id": "R02_KST_06",
    "section": "Szkielet kończyn i stawy",
    "type": "single_choice",
    "prompt": "Co wypełnia jamę stawową i zmniejsza tarcie powierzchni stawowych?",
    "options": [
      "maź stawowa",
      "szpik czerwony",
      "tkanka kostna zbita",
      "okostna",
      "ścięgno",
      "chrząstka nasadowa"
    ],
    "answer": 0,
    "image": "r02_staw.jpg",
    "explanation": "Jama stawowa jest wypełniona mazią, która nawilża powierzchnie stawowe i zapobiega ich ścieraniu."
  },
  {
    "id": "R02_KST_07",
    "section": "Szkielet kończyn i stawy",
    "type": "match",
    "prompt": "Połącz rodzaj stawu z przykładem i zakresem ruchu.",
    "options": null,
    "left": [
      "staw zawiasowy",
      "staw kulisty",
      "staw obrotowy"
    ],
    "right": [
      "staw łokciowy - ruch w jednej płaszczyźnie",
      "staw biodrowy - ruch we wszystkich kierunkach",
      "połączenie pierwszych dwóch kręgów - obracanie"
    ],
    "answer": {
      "staw zawiasowy": "staw łokciowy - ruch w jednej płaszczyźnie",
      "staw kulisty": "staw biodrowy - ruch we wszystkich kierunkach",
      "staw obrotowy": "połączenie pierwszych dwóch kręgów - obracanie"
    },
    "image": "r02_staw.jpg",
    "explanation": "Staw zawiasowy, np. łokciowy, umożliwia ruch w jednej płaszczyźnie. Staw kulisty, np. biodrowy, pozwala na ruch we wszystkich kierunkach, a staw obrotowy między pierwszymi kręgami umożliwia obracanie."
  },
  {
    "id": "R02_KST_08",
    "section": "Szkielet kończyn i stawy",
    "type": "true_false",
    "prompt": "Staw kolanowy jest największym stawem człowieka, łączy kość udową z piszczelową i jest dodatkowo chroniony przez rzepkę.",
    "options": null,
    "answer": true,
    "image": "r02_konczyna_dolna.jpg",
    "explanation": "Staw kolanowy łączy kość udową z piszczelową. Jest bardzo obciążony i narażony na urazy, dlatego od przodu chroni go rzepka."
  },
  {
    "id": "R02_KST_09",
    "section": "Szkielet kończyn i stawy",
    "type": "scenario",
    "prompt": "Powierzchnia stawowa jednej kości ma kształt zbliżony do kuli, a druga tworzy wklęsłą panewkę. Ruch jest możliwy we wszystkich kierunkach. Jaki to rodzaj stawu?",
    "options": [
      "staw kulisty",
      "staw zawiasowy",
      "staw obrotowy",
      "szew",
      "chrząstkozrost",
      "staw kolanowy"
    ],
    "answer": 0,
    "image": "r02_staw.jpg",
    "explanation": "Taką budowę ma staw kulisty, którego przykładem jest staw biodrowy."
  },
  {
    "id": "R02_MIE_01",
    "section": "Budowa i praca mięśni",
    "type": "single_choice",
    "prompt": "Która tkanka buduje mięśnie szkieletowe?",
    "options": [
      "tkanka mięśniowa poprzecznie prążkowana szkieletowa",
      "tkanka mięśniowa gładka",
      "tkanka mięśniowa poprzecznie prążkowana serca",
      "tkanka kostna zbita",
      "tkanka kostna gąbczasta",
      "tkanka chrzęstna"
    ],
    "answer": 0,
    "explanation": "Mięśnie szkieletowe są zbudowane z tkanki mięśniowej poprzecznie prążkowanej szkieletowej."
  },
  {
    "id": "R02_MIE_02",
    "section": "Budowa i praca mięśni",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki mięśniowej z właściwą cechą.",
    "options": null,
    "left": [
      "tkanka mięśniowa gładka",
      "tkanka mięśniowa poprzecznie prążkowana szkieletowa",
      "tkanka mięśniowa poprzecznie prążkowana serca"
    ],
    "right": [
      "buduje mięśnie gładkie i kurczy się wolno",
      "buduje mięśnie szkieletowe i kurczy się szybko i silnie",
      "buduje mięsień sercowy i pracuje niezależnie od woli"
    ],
    "answer": {
      "tkanka mięśniowa gładka": "buduje mięśnie gładkie i kurczy się wolno",
      "tkanka mięśniowa poprzecznie prążkowana szkieletowa": "buduje mięśnie szkieletowe i kurczy się szybko i silnie",
      "tkanka mięśniowa poprzecznie prążkowana serca": "buduje mięsień sercowy i pracuje niezależnie od woli"
    },
    "explanation": "Tkanka gładka buduje między innymi mięśnie ścian naczyń i pracuje niezależnie od woli. Tkanka szkieletowa buduje mięśnie zależne zwykle od woli, a tkanka serca buduje mięsień sercowy."
  },
  {
    "id": "R02_MIE_03",
    "section": "Budowa i praca mięśni",
    "type": "true_false",
    "prompt": "Ścięgna są mocnymi pasmami tkanki łącznej, które przymocowują mięsień szkieletowy do kości.",
    "options": null,
    "answer": true,
    "image": "r02_miesien_szkieletowy.jpg",
    "explanation": "Ścięgna znajdują się na końcach brzuśca mięśnia i przenoszą siłę jego skurczu na kości."
  },
  {
    "id": "R02_MIE_04",
    "section": "Budowa i praca mięśni",
    "type": "fill_in",
    "prompt": "Kurczliwe komórki mięśnia szkieletowego tworzą __________, a na jego końcach znajdują się __________.",
    "options": null,
    "answer": [
      "brzusiec",
      "ścięgna"
    ],
    "altAnswers": [
      [
        "brzusiec"
      ],
      [
        "ścięgna",
        "ścięgno"
      ]
    ],
    "image": "r02_miesien_szkieletowy.jpg",
    "explanation": "Kurczliwe komórki tworzą brzusiec mięśnia, a na końcach brzuśca znajdują się ścięgna."
  },
  {
    "id": "R02_MIE_05",
    "section": "Budowa i praca mięśni",
    "type": "scenario",
    "prompt": "Zginasz rękę w stawie łokciowym. Który mięsień ramienia działa wtedy jako zginacz?",
    "options": [
      "mięsień dwugłowy ramienia",
      "mięsień trójgłowy ramienia",
      "mięsień czworogłowy uda",
      "mięsień dwugłowy uda",
      "mięsień prosty brzucha",
      "mięsień brzuchaty łydki"
    ],
    "answer": 0,
    "image": "r02_antagonisci_ramienia.jpg",
    "explanation": "Mięsień dwugłowy ramienia, czyli biceps, jest zginaczem; jego skurcz powoduje zgięcie ręki w łokciu."
  },
  {
    "id": "R02_MIE_06",
    "section": "Budowa i praca mięśni",
    "type": "match",
    "prompt": "Połącz mięsień z ruchem, w którym uczestniczy.",
    "options": null,
    "left": [
      "mięsień dwugłowy ramienia",
      "mięsień trójgłowy ramienia",
      "mięsień czworogłowy uda",
      "mięsień dwugłowy uda"
    ],
    "right": [
      "zgina kończynę górną w stawie łokciowym",
      "prostuje kończynę górną w stawie łokciowym",
      "uczestniczy w prostowaniu kończyny dolnej",
      "uczestniczy w zginaniu kończyny dolnej"
    ],
    "answer": {
      "mięsień dwugłowy ramienia": "zgina kończynę górną w stawie łokciowym",
      "mięsień trójgłowy ramienia": "prostuje kończynę górną w stawie łokciowym",
      "mięsień czworogłowy uda": "uczestniczy w prostowaniu kończyny dolnej",
      "mięsień dwugłowy uda": "uczestniczy w zginaniu kończyny dolnej"
    },
    "image": "r02_antagonisci_ramienia.jpg",
    "explanation": "Biceps ramienia zgina kończynę w łokciu, triceps ją prostuje. Mięsień czworogłowy uda jest prostownikiem, a dwugłowy uda zginaczem."
  },
  {
    "id": "R02_MIE_07",
    "section": "Budowa i praca mięśni",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o pozyskiwaniu energii przez mięśnie.",
    "options": [
      "mięśnie potrzebują do pracy dużej ilości tlenu",
      "głównym źródłem energii jest oddychanie tlenowe",
      "przy niedoborze tlenu mogą zachodzić procesy beztlenowe",
      "w warunkach beztlenowych może powstawać kwas mlekowy",
      "mięśnie zawsze pracują bez udziału tlenu",
      "kwas mlekowy powstaje wyłącznie podczas odpoczynku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mięśnie uzyskują energię głównie w oddychaniu tlenowym. Przy długim lub intensywnym wysiłku i niedoborze tlenu korzystają z procesów beztlenowych, a w komórkach powstaje wtedy kwas mlekowy."
  },
  {
    "id": "R02_MIE_08",
    "section": "Budowa i praca mięśni",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest rodzajem tkanki mięśniowej: tkanka mięśniowa gładka, tkanka mięśniowa poprzecznie prążkowana szkieletowa, tkanka mięśniowa poprzecznie prążkowana serca, tkanka kostna.",
    "options": null,
    "answer": "tkanka kostna",
    "explanation": "Tkanka kostna należy do budowy szkieletu, a pozostałe trzy pozycje są rodzajami tkanki mięśniowej."
  },
  {
    "id": "R02_MIE_09",
    "section": "Budowa i praca mięśni",
    "type": "riddle",
    "prompt": "Jeden mięsień zgina kończynę, a drugi ją prostuje. Jak nazywa się para mięśni działających w taki przeciwny sposób?",
    "options": null,
    "answer": "mięśnie antagonistyczne",
    "altAnswers": [
      "mięśnie antagonistyczne",
      "antagonistyczne",
      "antagoniści"
    ],
    "image": "r02_antagonisci_ramienia.jpg",
    "explanation": "Mięśnie działające przeciwstawnie, na przykład zginacz i prostownik, nazywa się mięśniami antagonistycznymi."
  },
  {
    "id": "R02_HIG_01",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz działania pomagające dbać o aparat ruchu.",
    "options": [
      "dieta bogata w wapń, białko i witaminę D",
      "umiarkowana aktywność fizyczna",
      "utrzymywanie prawidłowej postawy ciała",
      "regularne badania lekarskie",
      "długotrwałe siedzenie bez ruchu",
      "noszenie ciężkiej torby stale na jednym ramieniu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Prawidłowa dieta, aktywność fizyczna, właściwa postawa i regularne badania lekarskie pomagają utrzymać aparat ruchu w dobrym stanie."
  },
  {
    "id": "R02_HIG_02",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "true_false",
    "prompt": "Lordozy są naturalnymi wygięciami kręgosłupa do przodu, a kifozy - do tyłu.",
    "options": null,
    "answer": true,
    "explanation": "Naturalne krzywizny kręgosłupa obejmują lordozy skierowane do przodu i kifozy skierowane do tyłu."
  },
  {
    "id": "R02_HIG_03",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "match",
    "prompt": "Połącz wadę postawy z jej opisem.",
    "options": null,
    "left": [
      "skolioza",
      "nadmierna lordoza",
      "nadmierna kifoza",
      "płaskostopie"
    ],
    "right": [
      "boczne skrzywienie kręgosłupa",
      "nadmierne wygięcie kręgosłupa do przodu",
      "nadmierne wygięcie kręgosłupa do tyłu",
      "prawie cała podeszwa przylega do podłoża"
    ],
    "answer": {
      "skolioza": "boczne skrzywienie kręgosłupa",
      "nadmierna lordoza": "nadmierne wygięcie kręgosłupa do przodu",
      "nadmierna kifoza": "nadmierne wygięcie kręgosłupa do tyłu",
      "płaskostopie": "prawie cała podeszwa przylega do podłoża"
    },
    "image": "r02_wady_postawy.jpg",
    "explanation": "Skolioza to boczne skrzywienie kręgosłupa, nadmierna lordoza oznacza zbyt duże wygięcie w stronę brzuszną, nadmierna kifoza - w stronę grzbietową, a płaskostopie powoduje przyleganie prawie całej stopy do podłoża."
  },
  {
    "id": "R02_HIG_04",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "scenario",
    "prompt": "Uczeń codziennie przez długi czas nosi ciężką torbę na jednym ramieniu. Jakiej wadzie postawy sprzyja taki nawyk?",
    "options": [
      "skoliozie",
      "płaskostopiu",
      "krzywicy",
      "osteoporozie",
      "skręceniu stawu",
      "złamaniu kości"
    ],
    "answer": 0,
    "image": "r02_wady_postawy.jpg",
    "explanation": "Nierównomierne obciążanie kręgosłupa, na przykład ciężką torbą noszoną na jednym ramieniu, może sprzyjać skoliozie."
  },
  {
    "id": "R02_HIG_05",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "single_choice",
    "prompt": "Która cecha jest charakterystyczna dla płaskostopia?",
    "options": [
      "prawie cała podeszwa stopy przylega do podłoża",
      "stopa opiera się wyłącznie na palcach",
      "kości stopy są połączone nieruchomo",
      "palce stopy nie mają paliczków",
      "stopa ma wyższe sklepienie niż prawidłowo",
      "staw skokowy nie zawiera mazi"
    ],
    "answer": 0,
    "image": "r02_plaskostopie.jpg",
    "explanation": "Przy płaskostopiu prawie cała stopa przylega podeszwą do podłoża, a charakterystyczne sklepienie stopy jest obniżone."
  },
  {
    "id": "R02_HIG_06",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz zalecenia pomagające zapobiegać wadom budowy stóp.",
    "options": [
      "noszenie dobrze dopasowanego obuwia",
      "unikanie butów z bardzo wąskimi czubkami",
      "unikanie wysokich obcasów",
      "niepozostawanie zbyt długo w jednej pozycji stojącej",
      "ćwiczenia wzmacniające mięśnie stóp",
      "stałe noszenie zbyt ciasnych butów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r02_plaskostopie.jpg",
    "explanation": "Dobrze dopasowane obuwie, unikanie bardzo wąskich czubków i wysokich obcasów, ograniczanie długiego stania oraz ćwiczenia wzmacniające mięśnie stóp pomagają zapobiegać lub korygować płaskostopie."
  },
  {
    "id": "R02_HIG_07",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "single_choice",
    "prompt": "Jaka jest główna przyczyna krzywicy?",
    "options": [
      "zbyt mała ilość witaminy D i soli mineralnych",
      "nadmiar białka w diecie",
      "zbyt duża aktywność fizyczna",
      "nadmiar mazi stawowej",
      "zbyt duża liczba kręgów",
      "zbyt mała liczba mięśni"
    ],
    "answer": 0,
    "explanation": "Krzywica jest związana ze zbyt małą ilością witaminy D i soli mineralnych w organizmie i dotyczy głównie dzieci w okresie wzrostu."
  },
  {
    "id": "R02_HIG_08",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "scenario",
    "prompt": "Po potknięciu staw skokowy jest silnie bolesny i obrzęknięty, ale nie doszło do przemieszczenia powierzchni stawowych ani przerwania ciągłości kości. Który uraz jest najbardziej prawdopodobny?",
    "options": [
      "skręcenie stawu",
      "zwichnięcie stawu",
      "złamanie kości",
      "płaskostopie",
      "skolioza",
      "krzywica"
    ],
    "answer": 0,
    "image": "r02_urazy_aparatu_ruchu.jpg",
    "explanation": "Skręcenie polega na naciągnięciu lub rozerwaniu torebki stawowej albo więzadeł i często powoduje obrzęk."
  },
  {
    "id": "R02_HIG_09",
    "section": "Higiena i choroby aparatu ruchu",
    "type": "match",
    "prompt": "Połącz uraz z jego opisem.",
    "options": null,
    "left": [
      "skręcenie stawu",
      "zwichnięcie stawu",
      "złamanie kości"
    ],
    "right": [
      "naciągnięcie lub rozerwanie torebki stawowej albo więzadeł",
      "nieprawidłowe ułożenie powierzchni stawowych",
      "przerwanie ciągłości kości"
    ],
    "answer": {
      "skręcenie stawu": "naciągnięcie lub rozerwanie torebki stawowej albo więzadeł",
      "zwichnięcie stawu": "nieprawidłowe ułożenie powierzchni stawowych",
      "złamanie kości": "przerwanie ciągłości kości"
    },
    "image": "r02_urazy_aparatu_ruchu.jpg",
    "explanation": "Skręcenie dotyczy naciągnięcia lub rozerwania torebki stawowej albo więzadeł. Zwichnięcie oznacza nieprawidłowe ułożenie powierzchni stawowych, a złamanie - przerwanie ciągłości kości."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W masie tkanki kostnej związki mineralne stanowią blisko __________%, białka około __________%, a komórki kostne około __________%.",
    "options": null,
    "answer": [
      "70",
      "25",
      "5"
    ],
    "altAnswers": [
      [
        "70",
        "70%"
      ],
      [
        "25",
        "25%"
      ],
      [
        "5",
        "5%"
      ]
    ],
    "explanation": "Związki mineralne stanowią blisko 70% masy tkanki kostnej, białka około 25%, a komórki kostne około 5%."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z ilu kości składa się szkielet dorosłego człowieka?",
    "options": [
      "206-208",
      "180-182",
      "196-198",
      "216-218",
      "226-228",
      "236-238"
    ],
    "answer": 0,
    "explanation": "Szkielet dorosłego człowieka składa się z 206-208 kości."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ma około 3 mm długości i jest najkrótszą kością człowieka. Jak się nazywa?",
    "options": null,
    "answer": "strzemiączko",
    "altAnswers": [
      "strzemiączko"
    ],
    "explanation": "Najkrótszą kością człowieka jest strzemiączko, jedna z kosteczek słuchowych."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około jaką część długości ciała może stanowić kość udowa?",
    "options": [
      "25%",
      "10%",
      "15%",
      "20%",
      "35%",
      "50%"
    ],
    "answer": 0,
    "explanation": "Kość udowa mierzy około 25% długości ciała i jest najcięższą oraz najbardziej wytrzymałą kością szkieletu."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz odcinek kręgosłupa z dokładną liczbą lub sposobem połączenia jego kręgów.",
    "options": null,
    "left": [
      "szyjny",
      "piersiowy",
      "lędźwiowy",
      "krzyżowy",
      "ogonowy"
    ],
    "right": [
      "7 kręgów",
      "12 kręgów",
      "5 najbardziej masywnych kręgów",
      "5 zrośniętych kręgów tworzących kość krzyżową",
      "4 lub 5 zrośniętych kręgów tworzących kość guziczną"
    ],
    "answer": {
      "szyjny": "7 kręgów",
      "piersiowy": "12 kręgów",
      "lędźwiowy": "5 najbardziej masywnych kręgów",
      "krzyżowy": "5 zrośniętych kręgów tworzących kość krzyżową",
      "ogonowy": "4 lub 5 zrośniętych kręgów tworzących kość guziczną"
    },
    "image": "r02_kregoslup.jpg",
    "explanation": "Kręgosłup ma 7 kręgów szyjnych, 12 piersiowych, 5 lędźwiowych, kość krzyżową z 5 zrośniętych kręgów oraz kość guziczną z 4 lub 5 zrośniętych kręgów."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż informację niezgodną z budową klatki piersiowej: 7 par żeber prawdziwych, 3 pary żeber rzekomych, 2 pary żeber wolnych, 5 par żeber prawdziwych.",
    "options": null,
    "answer": "5 par żeber prawdziwych",
    "image": "r02_klatka_piersiowa.jpg",
    "explanation": "Klatka piersiowa ma 12 par żeber: 7 par prawdziwych, 3 pary rzekomych i 2 pary wolnych. Informacja o 5 parach żeber prawdziwych nie pasuje."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Szkielet jednej kończyny górnej jest zbudowany z __________ kości, z czego __________ kości wchodzi w skład ręki.",
    "options": null,
    "answer": [
      "32",
      "27"
    ],
    "altAnswers": [
      [
        "32"
      ],
      [
        "27"
      ]
    ],
    "image": "r02_konczyna_gorna.jpg",
    "explanation": "Szkielet kończyny górnej ma 32 kości, a 27 z nich znajduje się w ręce."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Mięśnie szkieletowe stanowią około jaką część masy dorosłego człowieka?",
    "options": [
      "40%",
      "20%",
      "25%",
      "30%",
      "50%",
      "60%"
    ],
    "answer": 0,
    "explanation": "W organizmie jest ponad 600 mięśni szkieletowych, które stanowią około 40% masy dorosłego człowieka."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jakie jest dzienne zapotrzebowanie na wapń u młodzieży?",
    "options": [
      "1300 mg",
      "800 mg",
      "1000 mg",
      "1100 mg",
      "1200 mg",
      "1500 mg"
    ],
    "answer": 0,
    "explanation": "Dzienne zapotrzebowanie na wapń u młodzieży wynosi 1300 mg."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pod wpływem światła słonecznego organizm może uzyskać około __________% wymaganej dawki witaminy D, a pozostałe około __________% trzeba dostarczyć z pożywieniem.",
    "options": null,
    "answer": [
      "80",
      "20"
    ],
    "altAnswers": [
      [
        "80",
        "80%"
      ],
      [
        "20",
        "20%"
      ]
    ],
    "explanation": "Około 80% wymaganej dawki witaminy D organizm może uzyskać dzięki światłu słonecznemu, a około 20% wraz z pożywieniem."
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Około 99% wapnia znajdującego się w organizmie człowieka jest zgromadzone w kościach.",
    "options": null,
    "answer": true,
    "explanation": "W organizmie człowieka jest ponad kilogram wapnia, a 99% tego makroelementu znajduje się w kościach."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Kość została poddana wysokiej temperaturze tak długo, że białka straciły swoje właściwości. Która cecha kości zostanie szczególnie osłabiona?",
    "options": [
      "sprężystość i odporność na odkształcenia",
      "twardość nadawana przez sole mineralne",
      "zdolność szpiku do tworzenia krwi",
      "ruchomość stawu kulistego",
      "liczba kręgów",
      "kształt czaszki"
    ],
    "answer": 0,
    "explanation": "Białka nadają kościom sprężystość i odporność na odkształcenia. Po ich zniszczeniu kość staje się bardziej krucha."
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy prowadzące od skurczu mięśnia szkieletowego do ruchu kości.",
    "options": null,
    "items": [
      "ścięgna pociągają kości",
      "brzusiec mięśnia kurczy się",
      "kości zostają wprawione w ruch",
      "siła skurczu jest przekazywana na ścięgna"
    ],
    "answer": [
      "brzusiec mięśnia kurczy się",
      "siła skurczu jest przekazywana na ścięgna",
      "ścięgna pociągają kości",
      "kości zostają wprawione w ruch"
    ],
    "image": "r02_miesien_szkieletowy.jpg",
    "explanation": "Skurcz brzuśca jest przekazywany przez ścięgna. Ścięgna pociągają kości i w ten sposób kości zostają wprawione w ruch."
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie poprawne informacje liczbowe.",
    "options": [
      "kość udowa może osiągać około pół metra długości",
      "strzemiączko ma około 3 mm długości",
      "kości palców mogą zrastać się około 2-3 tygodni",
      "kość piszczelowa może zrastać się około 8-12 tygodni",
      "strzemiączko ma około 3 cm długości",
      "kość piszczelowa zrasta się zawsze w 2-3 dni"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kość udowa może osiągać około pół metra długości, strzemiączko ma około 3 mm, kości palców zrastają się około 2-3 tygodni, a kość piszczelowa około 8-12 tygodni."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Aparat ruchu",
  icon: "🦴",
  sectionOrder: [
    "Aparat ruchu i budowa szkieletu",
    "Budowa kości",
    "Szkielet osiowy",
    "Szkielet kończyn i stawy",
    "Budowa i praca mięśni",
    "Higiena i choroby aparatu ruchu"
  ],
  sectionIcons: {
    "Aparat ruchu i budowa szkieletu": "🦴",
    "Budowa kości": "🔬",
    "Szkielet osiowy": "🩻",
    "Szkielet kończyn i stawy": "🦵",
    "Budowa i praca mięśni": "💪",
    "Higiena i choroby aparatu ruchu": "🩺"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
