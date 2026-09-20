// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BFS  = Budowa i funkcje szkieletu
//   OSI  = Szkielet osiowy
//   KON  = Kończyny i obręcze
//   KOS  = Budowa kości
//   MIE  = Praca mięśni szkieletowych
//   HIG  = Choroby i higiena aparatu ruchu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_BFS_01",
    "section": "Budowa i funkcje szkieletu",
    "type": "single_choice",
    "prompt": "Które dwa układy tworzą układ ruchu człowieka?",
    "options": [
      "układ kostny i układ mięśniowy",
      "układ kostny i układ nerwowy",
      "układ mięśniowy i układ pokarmowy",
      "układ oddechowy i układ kostny",
      "układ mięśniowy i układ krwionośny",
      "układ nerwowy i układ pokarmowy"
    ],
    "answer": 0,
    "explanation": "Układ ruchu tworzą wspólnie układ kostny, czyli szkielet, oraz układ mięśniowy."
  },
  {
    "id": "R02_BFS_02",
    "section": "Budowa i funkcje szkieletu",
    "type": "true_false",
    "prompt": "Szkielet stanowi część bierną układu ruchu, a układ mięśniowy część czynną.",
    "options": null,
    "answer": true,
    "explanation": "Szkielet jest częścią bierną, ponieważ stanowi rusztowanie i miejsce przyczepu mięśni. Mięśnie są częścią czynną, ponieważ mają zdolność kurczenia się."
  },
  {
    "id": "R02_BFS_03",
    "section": "Budowa i funkcje szkieletu",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje szkieletu.",
    "options": [
      "utrzymywanie pionowej postawy ciała",
      "ochrona narządów",
      "magazynowanie soli mineralnych",
      "produkcja elementów krwi",
      "miejsce przyczepu mięśni",
      "regulowanie temperatury ciała"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Szkielet wpływa na postawę i kształt ciała, chroni narządy, stanowi miejsce przyczepu mięśni, magazynuje sole mineralne i uczestniczy w wytwarzaniu elementów krwi."
  },
  {
    "id": "R02_BFS_04",
    "section": "Budowa i funkcje szkieletu",
    "type": "fill_in",
    "prompt": "Szkielet człowieka dzieli się na __________ oraz __________.",
    "options": null,
    "answer": [
      "szkielet osiowy",
      "szkielet kończyn z obręczami"
    ],
    "altAnswers": [
      [
        "szkielet osiowy"
      ],
      [
        "szkielet kończyn z obręczami",
        "szkielet kończyn i obręczy"
      ]
    ],
    "explanation": "W szkielecie wyróżnia się szkielet osiowy oraz szkielet kończyn wraz z obręczami."
  },
  {
    "id": "R02_BFS_05",
    "section": "Budowa i funkcje szkieletu",
    "type": "match",
    "prompt": "Połącz element szkieletu osiowego z chronionym narządem lub narządami.",
    "options": null,
    "left": [
      "czaszka",
      "kręgosłup",
      "klatka piersiowa"
    ],
    "right": [
      "mózg",
      "rdzeń kręgowy",
      "serce i płuca"
    ],
    "answer": {
      "czaszka": "mózg",
      "kręgosłup": "rdzeń kręgowy",
      "klatka piersiowa": "serce i płuca"
    },
    "explanation": "Czaszka chroni mózg, kręgosłup osłania rdzeń kręgowy, a klatka piersiowa chroni serce i płuca.",
    "image": "r02_szkielet_czlowieka.jpg"
  },
  {
    "id": "R02_BFS_06",
    "section": "Budowa i funkcje szkieletu",
    "type": "scenario",
    "prompt": "Uczeń mówi, że mięśnie są czynną częścią układu ruchu. Które uzasadnienie jest poprawne?",
    "options": [
      "Mięśnie mają zdolność kurczenia się i aktywnie działają.",
      "Mięśnie magazynują sole mineralne.",
      "Mięśnie tworzą szwy czaszki.",
      "Mięśnie są nieruchomym rusztowaniem ciała.",
      "Mięśnie produkują wszystkie elementy krwi.",
      "Mięśnie budują klatkę piersiową."
    ],
    "answer": 0,
    "explanation": "Czynna rola mięśni wynika z ich zdolności do skurczu, dzięki któremu mogą wywoływać ruch."
  },
  {
    "id": "R02_BFS_07",
    "section": "Budowa i funkcje szkieletu",
    "type": "odd_one_out",
    "prompt": "Co nie należy do elementów szkieletu człowieka: szkielet osiowy, obręcz barkowa, obręcz miedniczna, układ pokarmowy.",
    "options": null,
    "answer": "układ pokarmowy",
    "explanation": "Szkielet tworzą szkielet osiowy oraz szkielet kończyn z obręczami barkową i miedniczną. Układ pokarmowy nie jest częścią szkieletu."
  },
  {
    "id": "R02_BFS_08",
    "section": "Budowa i funkcje szkieletu",
    "type": "riddle",
    "prompt": "Jestem częścią bierną układu ruchu, tworzę rusztowanie ciała i stanowię miejsce przyczepu mięśni. Co to?",
    "options": null,
    "answer": "szkielet",
    "altAnswers": [
      "szkielet",
      "układ kostny"
    ],
    "explanation": "Szkielet, czyli układ kostny, jest bierną częścią układu ruchu."
  },
  {
    "id": "R02_BFS_09",
    "section": "Budowa i funkcje szkieletu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odpowiednich części szkieletu.",
    "options": null,
    "items": [
      "czaszka",
      "kręgosłup",
      "klatka piersiowa",
      "obręcz barkowa",
      "obręcz miedniczna",
      "kończyna górna",
      "kończyna dolna"
    ],
    "categories": [
      "szkielet osiowy",
      "szkielet kończyn z obręczami"
    ],
    "answer": {
      "szkielet osiowy": [
        "czaszka",
        "kręgosłup",
        "klatka piersiowa"
      ],
      "szkielet kończyn z obręczami": [
        "obręcz barkowa",
        "obręcz miedniczna",
        "kończyna górna",
        "kończyna dolna"
      ]
    },
    "explanation": "Szkielet osiowy obejmuje czaszkę, kręgosłup i klatkę piersiową. Kończyny łączą się ze szkieletem osiowym za pośrednictwem obręczy.",
    "image": "r02_szkielet_czlowieka.jpg"
  },
  {
    "id": "R02_BFS_10",
    "section": "Budowa i funkcje szkieletu",
    "type": "single_choice",
    "prompt": "Ile kości ma w przybliżeniu układ kostny osoby dorosłej?",
    "options": [
      "206",
      "270",
      "356",
      "12",
      "8",
      "5"
    ],
    "answer": 0,
    "explanation": "Układ kostny osoby dorosłej składa się z około 206 kości."
  },
  {
    "id": "R02_OSI_01",
    "section": "Szkielet osiowy",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie elementy szkieletu osiowego?",
    "options": [
      "czaszka, kręgosłup, klatka piersiowa",
      "czaszka, obręcz barkowa, kończyna górna",
      "kręgosłup, obręcz miedniczna, stopa",
      "klatka piersiowa, kość udowa, czaszka",
      "czaszka, ręka, stopa",
      "kręgosłup, obojczyk, kość ramienna"
    ],
    "answer": 0,
    "explanation": "Szkielet osiowy tworzą czaszka, kręgosłup i klatka piersiowa.",
    "image": "r02_szkielet_czlowieka.jpg"
  },
  {
    "id": "R02_OSI_02",
    "section": "Szkielet osiowy",
    "type": "fill_in",
    "prompt": "Czaszka dzieli się na __________ oraz __________.",
    "options": null,
    "answer": [
      "mózgoczaszkę",
      "twarzoczaszkę"
    ],
    "altAnswers": [
      [
        "mózgoczaszkę",
        "mózgoczaszka"
      ],
      [
        "twarzoczaszkę",
        "twarzoczaszka",
        "trzewioczaszkę",
        "trzewioczaszka"
      ]
    ],
    "explanation": "W czaszce wyróżnia się mózgoczaszkę oraz twarzoczaszkę, nazywaną też trzewioczaszką.",
    "image": "r02_czaszka.jpg"
  },
  {
    "id": "R02_OSI_03",
    "section": "Szkielet osiowy",
    "type": "multi_select",
    "prompt": "Zaznacz kości należące do mózgoczaszki.",
    "options": [
      "kość czołowa",
      "kości ciemieniowe",
      "kości skroniowe",
      "kość klinowa",
      "kości nosowe",
      "żuchwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do mózgoczaszki należą m.in. kość czołowa, kości ciemieniowe, kości skroniowe, kość potyliczna i kość klinowa.",
    "image": "r02_czaszka.jpg"
  },
  {
    "id": "R02_OSI_04",
    "section": "Szkielet osiowy",
    "type": "multi_select",
    "prompt": "Zaznacz kości należące do twarzoczaszki.",
    "options": [
      "szczęki",
      "żuchwa",
      "kości jarzmowe",
      "kości nosowe",
      "kość potyliczna",
      "kość klinowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do twarzoczaszki należą m.in. szczęki, żuchwa, kości jarzmowe i kości nosowe.",
    "image": "r02_czaszka.jpg"
  },
  {
    "id": "R02_OSI_05",
    "section": "Szkielet osiowy",
    "type": "true_false",
    "prompt": "Żuchwa jest kością twarzoczaszki i jako jedyna kość czaszki ma zdolność poruszania się.",
    "options": null,
    "answer": true,
    "explanation": "Niemal wszystkie kości czaszki łączą się nieruchomo szwami. Ruchoma żuchwa umożliwia m.in. rozdrabnianie pokarmu i wydawanie dźwięków."
  },
  {
    "id": "R02_OSI_06",
    "section": "Szkielet osiowy",
    "type": "match",
    "prompt": "Połącz odcinek kręgosłupa z liczbą kręgów.",
    "options": null,
    "left": [
      "odcinek szyjny",
      "odcinek piersiowy",
      "odcinek lędźwiowy",
      "odcinek krzyżowy",
      "odcinek guziczny"
    ],
    "right": [
      "7",
      "12",
      "5",
      "5 zrośniętych",
      "4-5 zrośniętych"
    ],
    "answer": {
      "odcinek szyjny": "7",
      "odcinek piersiowy": "12",
      "odcinek lędźwiowy": "5",
      "odcinek krzyżowy": "5 zrośniętych",
      "odcinek guziczny": "4-5 zrośniętych"
    },
    "explanation": "Odcinek szyjny ma 7 kręgów, piersiowy 12, lędźwiowy 5, krzyżowy tworzy 5 zrośniętych kręgów, a guziczny 4-5 zrośniętych kręgów.",
    "image": "r02_kregoslup.jpg"
  },
  {
    "id": "R02_OSI_07",
    "section": "Szkielet osiowy",
    "type": "sequence",
    "prompt": "Ułóż odcinki kręgosłupa od najwyżej położonego do najniżej położonego.",
    "options": null,
    "items": [
      "odcinek lędźwiowy",
      "odcinek szyjny",
      "odcinek guziczny",
      "odcinek piersiowy",
      "odcinek krzyżowy"
    ],
    "answer": [
      "odcinek szyjny",
      "odcinek piersiowy",
      "odcinek lędźwiowy",
      "odcinek krzyżowy",
      "odcinek guziczny"
    ],
    "explanation": "Od góry kręgosłup tworzą kolejno odcinki: szyjny, piersiowy, lędźwiowy, krzyżowy i guziczny.",
    "image": "r02_kregoslup.jpg"
  },
  {
    "id": "R02_OSI_08",
    "section": "Szkielet osiowy",
    "type": "single_choice",
    "prompt": "Dlaczego człowiek ma 12 par żeber?",
    "options": [
      "Ponieważ odcinek piersiowy kręgosłupa ma 12 kręgów.",
      "Ponieważ odcinek szyjny kręgosłupa ma 12 kręgów.",
      "Ponieważ odcinek lędźwiowy kręgosłupa ma 12 kręgów.",
      "Ponieważ mostek składa się z 12 kości.",
      "Ponieważ czaszka składa się z 12 kości.",
      "Ponieważ obręcz barkowa ma 12 kości."
    ],
    "answer": 0,
    "explanation": "Żebra łączą się z odcinkiem piersiowym kręgosłupa, który składa się z 12 kręgów, dlatego żeber jest 12 par.",
    "image": "r02_klatka_piersiowa.jpg"
  },
  {
    "id": "R02_OSI_09",
    "section": "Szkielet osiowy",
    "type": "scenario",
    "prompt": "Po urazie trzeba wskazać element szkieletu osiowego, wewnątrz którego przebiega rdzeń kręgowy. Który to element?",
    "options": [
      "kręgosłup",
      "czaszka",
      "mostek",
      "obręcz barkowa",
      "obręcz miedniczna",
      "kość udowa"
    ],
    "answer": 0,
    "explanation": "Rdzeń kręgowy przebiega wewnątrz kręgosłupa, który go chroni.",
    "image": "r02_kregoslup.jpg"
  },
  {
    "id": "R02_OSI_10",
    "section": "Szkielet osiowy",
    "type": "odd_one_out",
    "prompt": "Co nie należy do klatki piersiowej: mostek, żebra, odcinek piersiowy kręgosłupa, kość udowa.",
    "options": null,
    "answer": "kość udowa",
    "explanation": "Klatkę piersiową tworzą odcinek piersiowy kręgosłupa, żebra i mostek. Kość udowa należy do kończyny dolnej.",
    "image": "r02_klatka_piersiowa.jpg"
  },
  {
    "id": "R02_KON_01",
    "section": "Kończyny i obręcze",
    "type": "single_choice",
    "prompt": "Które kości tworzą przedramię?",
    "options": [
      "kość promieniowa i kość łokciowa",
      "kość ramienna i kość promieniowa",
      "kość udowa i kość piszczelowa",
      "kość piszczelowa i kość strzałkowa",
      "łopatka i obojczyk",
      "kość promieniowa i kość udowa"
    ],
    "answer": 0,
    "explanation": "Przedramię tworzą kość promieniowa i kość łokciowa.",
    "image": "r02_konczyna_gorna.jpg"
  },
  {
    "id": "R02_KON_02",
    "section": "Kończyny i obręcze",
    "type": "match",
    "prompt": "Połącz część kończyny górnej z jej budową.",
    "options": null,
    "left": [
      "ramię",
      "przedramię",
      "ręka"
    ],
    "right": [
      "kość ramienna",
      "kość promieniowa i kość łokciowa",
      "kości nadgarstka, śródręcza i palców"
    ],
    "answer": {
      "ramię": "kość ramienna",
      "przedramię": "kość promieniowa i kość łokciowa",
      "ręka": "kości nadgarstka, śródręcza i palców"
    },
    "explanation": "Ramię buduje kość ramienna, przedramię kości promieniowa i łokciowa, a rękę kości nadgarstka, śródręcza i palców.",
    "image": "r02_konczyna_gorna.jpg"
  },
  {
    "id": "R02_KON_03",
    "section": "Kończyny i obręcze",
    "type": "single_choice",
    "prompt": "Które kości tworzą podudzie?",
    "options": [
      "kość piszczelowa i kość strzałkowa",
      "kość udowa i kość piszczelowa",
      "kość promieniowa i kość łokciowa",
      "kość udowa i kość strzałkowa",
      "kość ramienna i kość łokciowa",
      "kości stępu i kości śródstopia"
    ],
    "answer": 0,
    "explanation": "Podudzie składa się z kości piszczelowej i kości strzałkowej.",
    "image": "r02_konczyna_dolna.jpg"
  },
  {
    "id": "R02_KON_04",
    "section": "Kończyny i obręcze",
    "type": "sort",
    "prompt": "Przyporządkuj kości do kończyny górnej lub dolnej.",
    "options": null,
    "items": [
      "kość ramienna",
      "kość promieniowa",
      "kość łokciowa",
      "kość udowa",
      "kość piszczelowa",
      "kość strzałkowa",
      "kości stępu",
      "kości nadgarstka"
    ],
    "categories": [
      "kończyna górna",
      "kończyna dolna"
    ],
    "answer": {
      "kończyna górna": [
        "kość ramienna",
        "kość promieniowa",
        "kość łokciowa",
        "kości nadgarstka"
      ],
      "kończyna dolna": [
        "kość udowa",
        "kość piszczelowa",
        "kość strzałkowa",
        "kości stępu"
      ]
    },
    "explanation": "Kończynę górną tworzą m.in. kość ramienna, promieniowa, łokciowa i kości nadgarstka. Do kończyny dolnej należą m.in. kość udowa, piszczelowa, strzałkowa i kości stępu."
  },
  {
    "id": "R02_KON_05",
    "section": "Kończyny i obręcze",
    "type": "true_false",
    "prompt": "Obręcz barkowa jest zbudowana z dwóch łopatek i dwóch obojczyków.",
    "options": null,
    "answer": true,
    "explanation": "Obręcz barkową tworzą dwie łopatki i dwa obojczyki; łączy ona kończynę górną ze szkieletem osiowym."
  },
  {
    "id": "R02_KON_06",
    "section": "Kończyny i obręcze",
    "type": "fill_in",
    "prompt": "Obręcz miedniczna składa się z dwóch __________, a wraz z kością krzyżową tworzy __________.",
    "options": null,
    "answer": [
      "kości miednicznych",
      "miednicę"
    ],
    "altAnswers": [
      [
        "kości miednicznych",
        "dwie kości miedniczne"
      ],
      [
        "miednicę",
        "miednica"
      ]
    ],
    "explanation": "W obręczy miednicznej znajdują się dwie kości miedniczne. Obręcz miedniczna wraz z kością krzyżową tworzy miednicę."
  },
  {
    "id": "R02_KON_07",
    "section": "Kończyny i obręcze",
    "type": "scenario",
    "prompt": "Na modelu kończyny górnej szukasz kości biegnącej od strony kciuka w kierunku łokcia. Którą kość wskazujesz?",
    "options": [
      "kość promieniową",
      "kość łokciową",
      "kość ramienną",
      "kość piszczelową",
      "kość strzałkową",
      "kość udową"
    ],
    "answer": 0,
    "explanation": "Kość promieniowa leży po stronie kciuka i biegnie w kierunku łokcia.",
    "image": "r02_konczyna_gorna.jpg"
  },
  {
    "id": "R02_KON_08",
    "section": "Kończyny i obręcze",
    "type": "odd_one_out",
    "prompt": "Która kość nie należy do kończyny górnej: kość ramienna, kość promieniowa, kość łokciowa, kość piszczelowa.",
    "options": null,
    "answer": "kość piszczelowa",
    "explanation": "Kość piszczelowa należy do podudzia kończyny dolnej. Pozostałe kości należą do kończyny górnej."
  },
  {
    "id": "R02_KON_09",
    "section": "Kończyny i obręcze",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budujące stopę.",
    "options": [
      "kości stępu",
      "kości śródstopia",
      "kości palców",
      "kości nadgarstka",
      "kości śródręcza",
      "kość ramienna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Stopa obejmuje kości stępu, kości śródstopia oraz kości palców, czyli paliczki.",
    "image": "r02_konczyna_dolna.jpg"
  },
  {
    "id": "R02_KON_10",
    "section": "Kończyny i obręcze",
    "type": "riddle",
    "prompt": "Ułatwia chwytanie i jest cechą kończyny górnej człowieka. O jaki palec chodzi?",
    "options": null,
    "answer": "kciuk",
    "altAnswers": [
      "kciuk",
      "przeciwstawny kciuk"
    ],
    "explanation": "Kończyna górna służy do chwytania, a ułatwia to przeciwstawny kciuk."
  },
  {
    "id": "R02_KOS_01",
    "section": "Budowa kości",
    "type": "match",
    "prompt": "Połącz kształt kości z przykładem.",
    "options": null,
    "left": [
      "kość krótka",
      "kość długa",
      "kość różnokształtna",
      "kość płaska"
    ],
    "right": [
      "kość nadgarstka",
      "kość udowa",
      "kręg",
      "łopatka"
    ],
    "answer": {
      "kość krótka": "kość nadgarstka",
      "kość długa": "kość udowa",
      "kość różnokształtna": "kręg",
      "kość płaska": "łopatka"
    },
    "explanation": "Kości nadgarstka są krótkie, kość udowa jest długa, kręg ma kształt różnokształtny, a łopatka jest kością płaską."
  },
  {
    "id": "R02_KOS_02",
    "section": "Budowa kości",
    "type": "single_choice",
    "prompt": "Jak nazywa się zasadnicza środkowa część kości długiej?",
    "options": [
      "trzon",
      "nasada",
      "okostna",
      "powierzchnia stawowa",
      "jama stawowa",
      "ścięgno"
    ],
    "answer": 0,
    "explanation": "Zasadniczą część kości długiej stanowi trzon, a jego rozszerzone końce to nasady.",
    "image": "r02_budowa_kosci_dlugiej.jpg"
  },
  {
    "id": "R02_KOS_03",
    "section": "Budowa kości",
    "type": "true_false",
    "prompt": "Powierzchnia stawowa kości jest pokryta tkanką chrzęstną, która chroni kość przed ścieraniem podczas ruchu.",
    "options": null,
    "answer": true,
    "explanation": "Tkanka chrzęstna pokrywająca powierzchnie stawowe zmniejsza ścieranie kości podczas wykonywania ruchu.",
    "image": "r02_budowa_kosci_dlugiej.jpg"
  },
  {
    "id": "R02_KOS_04",
    "section": "Budowa kości",
    "type": "multi_select",
    "prompt": "Zaznacz elementy budowy wewnętrznej kości.",
    "options": [
      "istota zbita",
      "istota gąbczasta",
      "szpik kostny",
      "jama szpikowa",
      "obojczyk",
      "ścięgno"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wewnątrz kości wyróżnia się istotę zbitą, istotę gąbczastą oraz jamę szpikową wypełnioną szpikiem kostnym.",
    "image": "r02_budowa_kosci_dlugiej.jpg"
  },
  {
    "id": "R02_KOS_05",
    "section": "Budowa kości",
    "type": "fill_in",
    "prompt": "Błona otaczająca kość to __________. Odpowiada ona za tworzenie nowych __________.",
    "options": null,
    "answer": [
      "okostna",
      "komórek kości"
    ],
    "altAnswers": [
      [
        "okostna"
      ],
      [
        "komórek kości",
        "komórek kostnych"
      ]
    ],
    "explanation": "Okostna otacza kość i uczestniczy w tworzeniu nowych komórek kości.",
    "image": "r02_budowa_kosci_dlugiej.jpg"
  },
  {
    "id": "R02_KOS_06",
    "section": "Budowa kości",
    "type": "match",
    "prompt": "Połącz składnik kości z jego właściwością lub funkcją.",
    "options": null,
    "left": [
      "istota zbita",
      "istota gąbczasta",
      "szpik czerwony",
      "szpik żółty"
    ],
    "right": [
      "wytrzymałość na uszkodzenia mechaniczne",
      "odporność na naprężenia i siły nacisku",
      "tworzenie elementów krwi",
      "zawiera tkankę tłuszczową"
    ],
    "answer": {
      "istota zbita": "wytrzymałość na uszkodzenia mechaniczne",
      "istota gąbczasta": "odporność na naprężenia i siły nacisku",
      "szpik czerwony": "tworzenie elementów krwi",
      "szpik żółty": "zawiera tkankę tłuszczową"
    },
    "explanation": "Istota zbita wzmacnia kość, istota gąbczasta jest odporna na naprężenia i nacisk, szpik czerwony tworzy elementy krwi, a szpik żółty zawiera tkankę tłuszczową.",
    "image": "r02_tkanka_kostna.jpg"
  },
  {
    "id": "R02_KOS_07",
    "section": "Budowa kości",
    "type": "single_choice",
    "prompt": "Co przede wszystkim nadaje kości twardość?",
    "options": [
      "sole mineralne",
      "związki organiczne",
      "tkanka tłuszczowa",
      "maź stawowa",
      "ścięgno",
      "torebka stawowa"
    ],
    "answer": 0,
    "explanation": "Sole mineralne obecne w substancji międzykomórkowej tkanki kostnej odpowiadają za twardość kości.",
    "image": "r02_tkanka_kostna.jpg"
  },
  {
    "id": "R02_KOS_08",
    "section": "Budowa kości",
    "type": "scenario",
    "prompt": "Kość z kurczaka przez dłuższy czas znajduje się w occie, który usuwa sole mineralne. Która zmiana najlepiej wynika z tego doświadczenia?",
    "options": [
      "Kość traci twardość i sztywność.",
      "Kość staje się twardsza dzięki soli mineralnej.",
      "Kość zaczyna wytwarzać więcej szpiku żółtego.",
      "Kość zmienia się w chrząstkę stawową.",
      "Kość tworzy więcej obojczyków.",
      "Kość przestaje mieć nasady."
    ],
    "answer": 0,
    "explanation": "Sole mineralne nadają kości twardość i sztywność, więc ich usunięcie w occie osłabia te właściwości."
  },
  {
    "id": "R02_KOS_09",
    "section": "Budowa kości",
    "type": "scenario",
    "prompt": "Podgrzanie kości niszczy zawarte w niej białka. Jakiej właściwości będzie wtedy brakować przede wszystkim?",
    "options": [
      "elastyczności i odporności na kruszenie",
      "twardości nadawanej przez sole mineralne",
      "zdolności tworzenia stawu kolanowego",
      "liczby nasad",
      "obecności jamy szpikowej",
      "kształtu kości długiej"
    ],
    "answer": 0,
    "explanation": "Białka, czyli związki organiczne, nadają kości elastyczność i odporność na kruszenie."
  },
  {
    "id": "R02_KOS_10",
    "section": "Budowa kości",
    "type": "odd_one_out",
    "prompt": "Co nie jest nazwą kształtu kości: długa, krótka, płaska, różnokształtna, elastyczna.",
    "options": null,
    "answer": "elastyczna",
    "explanation": "Kości dzieli się ze względu na kształt na długie, krótkie, płaskie i różnokształtne. Elastyczność jest właściwością, a nie kształtem kości."
  },
  {
    "id": "R02_MIE_01",
    "section": "Praca mięśni szkieletowych",
    "type": "single_choice",
    "prompt": "Z jakiej tkanki zbudowane są mięśnie szkieletowe?",
    "options": [
      "z tkanki mięśniowej poprzecznie prążkowanej szkieletowej",
      "z tkanki kostnej",
      "z tkanki chrzęstnej",
      "z tkanki tłuszczowej",
      "z mazi stawowej",
      "z okostnej"
    ],
    "answer": 0,
    "explanation": "Mięśnie szkieletowe są zbudowane z tkanki mięśniowej poprzecznie prążkowanej szkieletowej."
  },
  {
    "id": "R02_MIE_02",
    "section": "Praca mięśni szkieletowych",
    "type": "match",
    "prompt": "Połącz element mięśnia szkieletowego z jego cechą.",
    "options": null,
    "left": [
      "ścięgno",
      "brzusiec"
    ],
    "right": [
      "niekurczliwe i przyczepia mięsień do kości",
      "kurczy się i skraca podczas skurczu"
    ],
    "answer": {
      "ścięgno": "niekurczliwe i przyczepia mięsień do kości",
      "brzusiec": "kurczy się i skraca podczas skurczu"
    },
    "explanation": "Ścięgno jest niekurczliwe i łączy mięsień z kością. Brzusiec jest kurczliwą częścią mięśnia.",
    "image": "r02_miesien_szkieletowy.jpg"
  },
  {
    "id": "R02_MIE_03",
    "section": "Praca mięśni szkieletowych",
    "type": "true_false",
    "prompt": "Ścięgno jest niekurczliwym elementem mięśnia szkieletowego.",
    "options": null,
    "answer": true,
    "explanation": "Ścięgno zbudowane z tkanki łącznej nie kurczy się; umożliwia przyczep mięśnia do kości.",
    "image": "r02_miesien_szkieletowy.jpg"
  },
  {
    "id": "R02_MIE_04",
    "section": "Praca mięśni szkieletowych",
    "type": "fill_in",
    "prompt": "Biceps to mięsień __________ ramienia i ma dwa brzuśce, a triceps to mięsień __________ ramienia i ma trzy brzuśce.",
    "options": null,
    "answer": [
      "dwugłowy",
      "trójgłowy"
    ],
    "altAnswers": [
      [
        "dwugłowy"
      ],
      [
        "trójgłowy"
      ]
    ],
    "explanation": "Biceps jest mięśniem dwugłowym ramienia, a triceps mięśniem trójgłowym ramienia.",
    "image": "r02_miesien_szkieletowy.jpg"
  },
  {
    "id": "R02_MIE_05",
    "section": "Praca mięśni szkieletowych",
    "type": "scenario",
    "prompt": "Zginasz rękę w stawie łokciowym. Co dzieje się z bicepsem i tricepsem?",
    "options": [
      "Biceps jest w skurczu, a triceps w rozkurczu.",
      "Biceps i triceps są jednocześnie w skurczu.",
      "Biceps jest w rozkurczu, a triceps w skurczu.",
      "Oba mięśnie pozostają w rozkurczu.",
      "Kurczy się tylko ścięgno bicepsa.",
      "Kurczy się tylko torebka stawowa."
    ],
    "answer": 0,
    "explanation": "Podczas zginania ręki kurczy się biceps, a działający antagonistycznie triceps pozostaje w rozkurczu.",
    "image": "r02_ruch_reki.jpg"
  },
  {
    "id": "R02_MIE_06",
    "section": "Praca mięśni szkieletowych",
    "type": "scenario",
    "prompt": "Prostujesz rękę w stawie łokciowym. Który opis jest poprawny?",
    "options": [
      "Triceps jest w skurczu, a biceps w rozkurczu.",
      "Biceps jest w skurczu, a triceps w rozkurczu.",
      "Oba mięśnie są jednocześnie w skurczu.",
      "Kurczy się wyłącznie ścięgno bicepsa.",
      "Kości poruszają się bez udziału mięśni.",
      "Torebka stawowa skraca się jak brzusiec."
    ],
    "answer": 0,
    "explanation": "Podczas prostowania ręki kurczy się triceps, a biceps znajduje się w rozkurczu.",
    "image": "r02_ruch_reki.jpg"
  },
  {
    "id": "R02_MIE_07",
    "section": "Praca mięśni szkieletowych",
    "type": "match",
    "prompt": "Połącz element stawu z jego rolą.",
    "options": null,
    "left": [
      "torebka stawowa",
      "chrząstka stawowa",
      "maź stawowa"
    ],
    "right": [
      "chroni przed czynnikami zewnętrznymi i niekontrolowanym przesuwaniem",
      "chroni nasady kości przed ścieraniem",
      "wypełnia jamę stawową i wraz z chrząstką ogranicza ścieranie"
    ],
    "answer": {
      "torebka stawowa": "chroni przed czynnikami zewnętrznymi i niekontrolowanym przesuwaniem",
      "chrząstka stawowa": "chroni nasady kości przed ścieraniem",
      "maź stawowa": "wypełnia jamę stawową i wraz z chrząstką ogranicza ścieranie"
    },
    "explanation": "Torebka stawowa osłania staw, a chrząstka stawowa i maź chronią nasady kości przed ścieraniem."
  },
  {
    "id": "R02_MIE_08",
    "section": "Praca mięśni szkieletowych",
    "type": "sequence",
    "prompt": "Ułóż etapy prowadzące do ruchu kości podczas zginania ręki.",
    "options": null,
    "items": [
      "ścięgno ciągnie kości",
      "brzusiec mięśnia kurczy się",
      "kości poruszają się względem siebie w stawie",
      "siła skurczu przechodzi na ścięgno"
    ],
    "answer": [
      "brzusiec mięśnia kurczy się",
      "siła skurczu przechodzi na ścięgno",
      "ścięgno ciągnie kości",
      "kości poruszają się względem siebie w stawie"
    ],
    "explanation": "Skurcz brzuśca przekazuje siłę na ścięgno, ścięgno pociąga kości, a kości przemieszczają się względem siebie w stawie.",
    "image": "r02_ruch_reki.jpg"
  },
  {
    "id": "R02_MIE_09",
    "section": "Praca mięśni szkieletowych",
    "type": "odd_one_out",
    "prompt": "Co nie jest elementem budowy mięśnia szkieletowego: brzusiec, ścięgno, kość udowa.",
    "options": null,
    "answer": "kość udowa",
    "explanation": "Mięsień szkieletowy składa się z brzuśca i ścięgien. Kość udowa jest elementem szkieletu kończyny dolnej."
  },
  {
    "id": "R02_MIE_10",
    "section": "Praca mięśni szkieletowych",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o antagonistycznej pracy mięśni.",
    "options": [
      "mięśnie pracują przeciwstawnie",
      "gdy jeden mięsień się kurczy, drugi jest w rozkurczu",
      "mięśnie pracują na zmianę",
      "aktywnym ruchem mięśnia jest skurcz",
      "oba mięśnie zawsze kurczą się jednocześnie",
      "ścięgno wykonuje skurcz zamiast brzuśca"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mięśnie antagonistyczne działają przeciwstawnie i na zmianę. Mięsień aktywnie wykonuje skurcz, a rozkurcz wymaga pracy mięśnia przeciwstawnego."
  },
  {
    "id": "R02_HIG_01",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "match",
    "prompt": "Połącz wadę postawy z opisem.",
    "options": null,
    "left": [
      "nadmierna kifoza",
      "nadmierna lordoza",
      "skolioza",
      "płaskostopie"
    ],
    "right": [
      "nadmierne wygięcie kręgosłupa do tyłu",
      "nadmierne wygięcie kręgosłupa do przodu",
      "wygięcie kręgosłupa najczęściej do boku",
      "brak lub niewielkie wysklepienie stopy"
    ],
    "answer": {
      "nadmierna kifoza": "nadmierne wygięcie kręgosłupa do tyłu",
      "nadmierna lordoza": "nadmierne wygięcie kręgosłupa do przodu",
      "skolioza": "wygięcie kręgosłupa najczęściej do boku",
      "płaskostopie": "brak lub niewielkie wysklepienie stopy"
    },
    "explanation": "Nadmierna kifoza to nadmierne wygięcie do tyłu, nadmierna lordoza do przodu, skolioza najczęściej do boku, a płaskostopie oznacza brak lub małe wysklepienie stopy."
  },
  {
    "id": "R02_HIG_02",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "true_false",
    "prompt": "Kręgosłup ma cztery naturalne wygięcia, które pomagają zapewnić równowagę i stabilność ciała.",
    "options": null,
    "answer": true,
    "explanation": "Cztery naturalne wygięcia kręgosłupa pomagają utrzymać równowagę i stabilność ciała.",
    "image": "r02_skrzywienia_kregoslupa.jpg"
  },
  {
    "id": "R02_HIG_03",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "single_choice",
    "prompt": "Czym charakteryzuje się płaskostopie?",
    "options": [
      "brakiem lub niewielkim wysklepieniem stopy",
      "nadmiernym wygięciem kręgosłupa do tyłu",
      "nadmiernym wygięciem kręgosłupa do przodu",
      "wygięciem kręgosłupa do boku",
      "zmniejszeniem liczby żeber",
      "zrośnięciem kości przedramienia"
    ],
    "answer": 0,
    "explanation": "Płaskostopie jest deformacją stopy, w której wysklepienie stopy jest niewielkie albo nie występuje.",
    "image": "r02_plaskostopie.jpg"
  },
  {
    "id": "R02_HIG_04",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające wadom postawy.",
    "options": [
      "garbienie się",
      "brak aktywności fizycznej",
      "nadwaga",
      "nieodpowiednie obuwie",
      "niewłaściwe noszenie ciężaru",
      "regularna aktywność fizyczna"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do czynników sprzyjających wadom postawy należą m.in. garbienie się, brak ruchu, nadwaga, nieodpowiednie obuwie i niewłaściwe noszenie ciężaru."
  },
  {
    "id": "R02_HIG_05",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz zasady pomagające zapobiegać wadom i chorobom aparatu ruchu.",
    "options": [
      "regularna aktywność fizyczna",
      "utrzymywanie wyprostowanej postawy ciała",
      "dieta bogata w sole mineralne i witaminę D",
      "przebywanie na słońcu",
      "właściwe noszenie ciężaru",
      "garbienie się"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Profilaktyka obejmuje ruch, prawidłową postawę, właściwe noszenie ciężaru, odpowiednią dietę oraz ekspozycję na słońce."
  },
  {
    "id": "R02_HIG_06",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "single_choice",
    "prompt": "Jaka jest najczęstsza przyczyna krzywicy?",
    "options": [
      "niedobór witaminy D",
      "nadmiar witaminy D",
      "nadmiar aktywności fizycznej",
      "zbyt duża liczba kręgów",
      "brak mazi stawowej",
      "nadmiar soli mineralnych"
    ],
    "answer": 0,
    "explanation": "Krzywica jest najczęściej spowodowana niedoborem witaminy D i pojawia się głównie u dzieci do trzeciego roku życia."
  },
  {
    "id": "R02_HIG_07",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "single_choice",
    "prompt": "Który opis najlepiej pasuje do osteoporozy?",
    "options": [
      "Z wiekiem może zmniejszać się ilość soli mineralnych w kościach, a kości stają się bardziej podatne na złamania.",
      "Dotyczy głównie dzieci do trzeciego roku życia i zwykle wynika z nadmiaru witaminy D.",
      "Jest wyłącznie bocznym skrzywieniem kręgosłupa.",
      "Polega na braku wysklepienia stopy.",
      "Powoduje zwiększenie grubości beleczek kostnych.",
      "Jest naturalnym wygięciem kręgosłupa do przodu."
    ],
    "answer": 0,
    "explanation": "W osteoporozie wraz z wiekiem może spadać ilość soli mineralnych w kościach, beleczki kostne stają się cieńsze, a kości są bardziej podatne na złamania."
  },
  {
    "id": "R02_HIG_08",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "true_false",
    "prompt": "Witamina D jest wytwarzana w organizmie pod wpływem promieni słonecznych, a część jest dostarczana z pokarmem.",
    "options": null,
    "answer": true,
    "explanation": "Promieniowanie słoneczne umożliwia wytwarzanie witaminy D w organizmie, a część tej witaminy pochodzi także z pożywienia."
  },
  {
    "id": "R02_HIG_09",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "scenario",
    "prompt": "U osoby obserwuje się plecy okrągłe związane z nadmiernym wygięciem kręgosłupa do tyłu. Jak nazywa się ta wada?",
    "options": [
      "nadmierna kifoza",
      "nadmierna lordoza",
      "skolioza",
      "płaskostopie",
      "krzywica",
      "osteoporoza"
    ],
    "answer": 0,
    "explanation": "Plecy okrągłe są przykładem wady postawy związanej z nadmierną kifozą.",
    "image": "r02_skrzywienia_kregoslupa.jpg"
  },
  {
    "id": "R02_HIG_10",
    "section": "Choroby i higiena aparatu ruchu",
    "type": "odd_one_out",
    "prompt": "Co nie jest skrzywieniem kręgosłupa: nadmierna kifoza, skolioza, nadmierna lordoza, płaskostopie.",
    "options": null,
    "answer": "płaskostopie",
    "explanation": "Płaskostopie jest deformacją stopy. Nadmierna kifoza, skolioza i nadmierna lordoza są skrzywieniami kręgosłupa.",
    "image": "r02_skrzywienia_kregoslupa.jpg"
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która liczba najlepiej odpowiada liczbie kości w szkielecie osoby dorosłej?",
    "options": [
      "około 206",
      "około 270",
      "około 12",
      "około 8",
      "około 5",
      "około 4"
    ],
    "answer": 0,
    "explanation": "U osoby dorosłej układ kostny składa się z około 206 kości. Liczba kości zmienia się wraz z wiekiem m.in. wskutek kostnienia i zrastania kości."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe informacje o liczbie wybranych kości mózgoczaszki.",
    "options": [
      "kość czołowa - 1",
      "kości ciemieniowe - 2",
      "kości skroniowe - 2",
      "kość potyliczna - 1",
      "kość klinowa - 1",
      "kości nosowe - 1"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Mózgoczaszka obejmuje jedną kość czołową, dwie ciemieniowe, dwie skroniowe, jedną potyliczną i jedną klinową. Kości nosowe należą do twarzoczaszki.",
    "image": "r02_czaszka.jpg"
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Odcinek szyjny ma __________ kręgów, piersiowy __________, lędźwiowy __________, krzyżowy __________, a guziczny __________.",
    "options": null,
    "answer": [
      "7",
      "12",
      "5",
      "5",
      "4-5"
    ],
    "altAnswers": [
      [
        "7"
      ],
      [
        "12"
      ],
      [
        "5"
      ],
      [
        "5"
      ],
      [
        "4-5",
        "4–5",
        "4 do 5"
      ]
    ],
    "explanation": "Liczby kręgów w kolejnych odcinkach to 7, 12, 5, 5 oraz 4-5.",
    "image": "r02_kregoslup.jpg"
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz część szkieletu osiowego z jej główną funkcją ochronną.",
    "options": null,
    "left": [
      "mózgoczaszka",
      "kręgosłup",
      "klatka piersiowa"
    ],
    "right": [
      "ochrona mózgu",
      "ochrona rdzenia kręgowego",
      "ochrona serca i płuc"
    ],
    "answer": {
      "mózgoczaszka": "ochrona mózgu",
      "kręgosłup": "ochrona rdzenia kręgowego",
      "klatka piersiowa": "ochrona serca i płuc"
    },
    "explanation": "Mózgoczaszka osłania mózg, kręgosłup rdzeń kręgowy, a klatka piersiowa serce i płuca."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż odcinki kręgosłupa wraz z liczbą kręgów od góry do dołu.",
    "options": null,
    "items": [
      "lędźwiowy - 5",
      "guziczny - 4-5",
      "szyjny - 7",
      "krzyżowy - 5",
      "piersiowy - 12"
    ],
    "answer": [
      "szyjny - 7",
      "piersiowy - 12",
      "lędźwiowy - 5",
      "krzyżowy - 5",
      "guziczny - 4-5"
    ],
    "explanation": "Od góry występują kolejno: odcinek szyjny (7 kręgów), piersiowy (12), lędźwiowy (5), krzyżowy (5) i guziczny (4–5).",
    "image": "r02_kregoslup.jpg"
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz kości, w których u dorosłego człowieka występuje czerwony szpik kostny.",
    "options": [
      "łopatka",
      "mostek",
      "kości miednicy",
      "nasady kości długich",
      "kości śródstopia",
      "kości palców"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "U dorosłych czerwony szpik kostny występuje m.in. w łopatce, mostku, kościach miednicy oraz w nasadach kości długich.",
    "image": "r02_budowa_kosci_dlugiej.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj składniki tkanki kostnej do właściwości, na które wpływają.",
    "options": null,
    "items": [
      "sole mineralne",
      "związki organiczne"
    ],
    "categories": [
      "twardość i wytrzymałość mechaniczna",
      "elastyczność i odporność na odkształcenia"
    ],
    "answer": {
      "twardość i wytrzymałość mechaniczna": [
        "sole mineralne"
      ],
      "elastyczność i odporność na odkształcenia": [
        "związki organiczne"
      ]
    },
    "explanation": "Sole mineralne, w tym sole wapnia, odpowiadają za twardość i wytrzymałość mechaniczną kości, a związki organiczne, np. białka, za elastyczność i odporność na odkształcenia.",
    "image": "r02_tkanka_kostna.jpg"
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W nadgarstku człowieka znajduje się __________ kości ułożonych w __________ szeregach.",
    "options": null,
    "answer": [
      "8",
      "dwóch"
    ],
    "altAnswers": [
      [
        "8",
        "osiem"
      ],
      [
        "dwóch",
        "2",
        "dwu"
      ]
    ],
    "explanation": "W nadgarstku wyróżnia się 8 kości ułożonych w dwóch szeregach."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rodzaj połączenia kości z przykładem.",
    "options": null,
    "left": [
      "połączenie nieruchome",
      "połączenie półruchome",
      "połączenie ruchome"
    ],
    "right": [
      "szwy w czaszce",
      "połączenie żeber z mostkiem",
      "staw kolanowy"
    ],
    "answer": {
      "połączenie nieruchome": "szwy w czaszce",
      "połączenie półruchome": "połączenie żeber z mostkiem",
      "połączenie ruchome": "staw kolanowy"
    },
    "explanation": "Szwy czaszki są połączeniami nieruchomymi, połączenia żeber z mostkiem są półruchome, a staw kolanowy jest połączeniem ruchomym."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zestawienie naturalnego wygięcia kręgosłupa z kierunkiem i przykładem jest poprawne?",
    "options": [
      "kifoza - wygięcie do tyłu - kifoza piersiowa",
      "kifoza - wygięcie do przodu - kifoza piersiowa",
      "lordoza - wygięcie do tyłu - lordoza lędźwiowa",
      "lordoza - wygięcie do boku - lordoza lędźwiowa",
      "skolioza - naturalne wygięcie do przodu - skolioza lędźwiowa",
      "płaskostopie - naturalne wygięcie do tyłu - płaskostopie piersiowe"
    ],
    "answer": 0,
    "explanation": "Kifoza jest naturalnym wygięciem kręgosłupa do tyłu, a jej przykładem jest kifoza piersiowa. Lordoza jest naturalnym wygięciem do przodu.",
    "image": "r02_skrzywienia_kregoslupa.jpg"
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dziecko do trzeciego roku życia ma zniekształcenia kości, a przyczyną jest niedobór witaminy D. Które rozpoznanie najlepiej pasuje do tego opisu?",
    "options": [
      "krzywica",
      "osteoporoza",
      "skolioza",
      "płaskostopie",
      "nadmierna lordoza",
      "nadmierna kifoza"
    ],
    "answer": 0,
    "explanation": "Krzywica najczęściej występuje u dzieci do trzeciego roku życia i jest zwykle związana z niedoborem witaminy D."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do krzywicy lub osteoporozy.",
    "options": null,
    "items": [
      "częściej dotyczy dzieci do trzeciego roku życia",
      "często wiąże się z niedoborem witaminy D",
      "może powodować zniekształcenia układu kostnego",
      "częściej dotyczy osób starszych",
      "kości stają się bardziej podatne na złamania",
      "beleczki kostne stają się cieńsze"
    ],
    "categories": [
      "krzywica",
      "osteoporoza"
    ],
    "answer": {
      "krzywica": [
        "częściej dotyczy dzieci do trzeciego roku życia",
        "często wiąże się z niedoborem witaminy D",
        "może powodować zniekształcenia układu kostnego"
      ],
      "osteoporoza": [
        "częściej dotyczy osób starszych",
        "kości stają się bardziej podatne na złamania",
        "beleczki kostne stają się cieńsze"
      ]
    },
    "explanation": "Krzywica dotyczy głównie małych dzieci i jest najczęściej związana z niedoborem witaminy D. Osteoporoza częściej występuje u osób starszych, a cieńsze beleczki kostne zwiększają podatność kości na złamania."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Układ ruchu",
  icon: "🦴",
  sectionOrder: [
    "Budowa i funkcje szkieletu",
    "Szkielet osiowy",
    "Kończyny i obręcze",
    "Budowa kości",
    "Praca mięśni szkieletowych",
    "Choroby i higiena aparatu ruchu"
  ],
  sectionIcons: {
    "Budowa i funkcje szkieletu": "🦴",
    "Szkielet osiowy": "🧠",
    "Kończyny i obręcze": "🦵",
    "Budowa kości": "🔬",
    "Praca mięśni szkieletowych": "💪",
    "Choroby i higiena aparatu ruchu": "🏃"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
