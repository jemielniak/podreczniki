// Skróty sekcji:
//   POG = Pogoda i klimat
//   STR = Strefy klimatyczne i krajobrazowe
//   LAS = Lasy świata
//   SPS = Sawanny, stepy i pustynie
//   SRO = Krajobraz śródziemnomorski
//   TTG = Tajga, tundra i góry
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_POG_01",
    "section": "Pogoda i klimat",
    "type": "single_choice",
    "prompt": "Czym jest pogoda?",
    "options": [
      "Stan atmosfery w określonym miejscu i czasie",
      "Średnie warunki z wielu lat",
      "Układ stref roślinnych na Ziemi",
      "Roczna suma opadów w całym kraju",
      "Stała cecha klimatu kontynentu",
      "Mapa wysokości terenu"
    ],
    "answer": 0,
    "explanation": "Pogoda to stan atmosfery w określonym miejscu i czasie."
  },
  {
    "id": "R04_POG_02",
    "section": "Pogoda i klimat",
    "type": "multi_select",
    "prompt": "Zaznacz składniki pogody wymienione w podręczniku.",
    "options": [
      "temperatura powietrza",
      "zachmurzenie",
      "kierunek i prędkość wiatru",
      "liczba mieszkańców",
      "barwa gleby",
      "ciśnienie atmosferyczne"
    ],
    "answer": [
      0,
      1,
      2,
      5
    ],
    "explanation": "Do składników pogody należą między innymi temperatura, zachmurzenie, opady, ciśnienie i wiatr."
  },
  {
    "id": "R04_POG_03",
    "section": "Pogoda i klimat",
    "type": "single_choice",
    "prompt": "Co przedstawia klimatogram?",
    "options": [
      "Temperaturę i opady w kolejnych miesiącach",
      "Tylko kierunki wiatrów",
      "Ukształtowanie powierzchni",
      "Rozmieszczenie ludności",
      "Granice państw",
      "Wysokość gór"
    ],
    "answer": 0,
    "image": "/img/r04_klimatogram_schemat.jpg",
    "explanation": "Klimatogram pokazuje średnie miesięczne wartości temperatury powietrza i miesięczne sumy opadów."
  },
  {
    "id": "R04_POG_04",
    "section": "Pogoda i klimat",
    "type": "true_false",
    "prompt": "Klimat danego miejsca można określić na podstawie obserwacji pogody prowadzonych przez 30 lat lub dłużej.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku podano, że pomiary prowadzone przez 30 lat lub dłużej pozwalają określić klimat."
  },
  {
    "id": "R04_POG_05",
    "section": "Pogoda i klimat",
    "type": "fill_in",
    "prompt": "Klimatem nazywamy warunki pogodowe występujące na danym obszarze w ciągu __________ i powtarzające się w kolejnych __________.",
    "options": null,
    "answer": [
      "roku",
      "latach"
    ],
    "altAnswers": [
      [
        "roku"
      ],
      [
        "latach"
      ]
    ],
    "explanation": "Klimat opisuje warunki w ciągu roku, które powtarzają się w następnych latach."
  },
  {
    "id": "R04_POG_06",
    "section": "Pogoda i klimat",
    "type": "scenario",
    "prompt": "Uczeń odczytuje z klimatogramu słupki i linię. Który element zwykle pokazują słupki?",
    "options": [
      "miesięczne sumy opadów",
      "średnie roczne ciśnienie",
      "wysokość nad poziomem morza",
      "kierunek wiatru"
    ],
    "answer": 0,
    "image": "/img/r04_klimatogram_schemat.jpg",
    "explanation": "Na klimatogramach słupki przedstawiają miesięczne sumy opadów."
  },
  {
    "id": "R04_POG_07",
    "section": "Pogoda i klimat",
    "type": "riddle",
    "prompt": "Różnica między średnią temperaturą najcieplejszego i najzimniejszego miesiąca to średnia roczna...",
    "options": null,
    "answer": "amplituda temperatury",
    "altAnswers": [
      "amplituda",
      "amplituda temperatury",
      "średnia roczna amplituda temperatury"
    ],
    "explanation": "Amplituda temperatury pokazuje, jak duża jest różnica między najcieplejszym i najzimniejszym miesiącem."
  },
  {
    "id": "R04_POG_08",
    "section": "Pogoda i klimat",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: temperatura powietrza, opady atmosferyczne, ciśnienie atmosferyczne, liczba ludności.",
    "options": null,
    "answer": "liczba ludności",
    "explanation": "Liczba ludności nie jest składnikiem pogody."
  },
  {
    "id": "R04_POG_09",
    "section": "Pogoda i klimat",
    "type": "match",
    "prompt": "Połącz pojęcie z opisem.",
    "options": null,
    "left": [
      "pogoda",
      "klimat",
      "klimatogram",
      "roczna suma opadów"
    ],
    "right": [
      "stan atmosfery w miejscu i czasie",
      "warunki pogodowe powtarzające się w latach",
      "wykres temperatury i opadów",
      "suma opadów z 12 miesięcy"
    ],
    "answer": {
      "pogoda": "stan atmosfery w miejscu i czasie",
      "klimat": "warunki pogodowe powtarzające się w latach",
      "klimatogram": "wykres temperatury i opadów",
      "roczna suma opadów": "suma opadów z 12 miesięcy"
    },
    "explanation": "Pogoda dotyczy krótkiego czasu, klimat opisuje wieloletnią powtarzalność, a klimatogram jest wykresem danych klimatycznych."
  },
  {
    "id": "R04_POG_10",
    "section": "Pogoda i klimat",
    "type": "sequence",
    "prompt": "Ułóż czynności potrzebne do obliczenia rocznej sumy opadów.",
    "options": null,
    "items": [
      "Dodaj wszystkie miesięczne sumy opadów",
      "Odczytaj sumy opadów dla kolejnych miesięcy",
      "Zapisz wynik w milimetrach"
    ],
    "answer": [
      "Odczytaj sumy opadów dla kolejnych miesięcy",
      "Dodaj wszystkie miesięczne sumy opadów",
      "Zapisz wynik w milimetrach"
    ],
    "explanation": "Roczną sumę opadów otrzymuje się przez odczytanie i dodanie opadów ze wszystkich miesięcy."
  },
  {
    "id": "R04_STR_01",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "single_choice",
    "prompt": "Jak układają się strefy klimatyczne na Ziemi?",
    "options": [
      "Mniej więcej równoleżnikowo",
      "Wyłącznie wzdłuż południków",
      "Tylko wokół oceanów",
      "Promieniście od najwyższych gór",
      "Zawsze zgodnie z granicami państw",
      "Losowo, bez związku z szerokością geograficzną"
    ],
    "answer": 0,
    "explanation": "Strefy klimatyczne tworzą pasy rozciągające się mniej więcej wzdłuż równoleżników."
  },
  {
    "id": "R04_STR_02",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "true_false",
    "prompt": "Strefy krajobrazowe wydzielono przede wszystkim na podstawie zróżnicowania roślinności.",
    "options": null,
    "answer": true,
    "image": "/img/r04_strefy_krajobrazowe_pas.jpg",
    "explanation": "Roślinność jest charakterystycznym elementem krajobrazu, dlatego była podstawą wydzielenia stref krajobrazowych."
  },
  {
    "id": "R04_STR_03",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki różnicujące klimat w obrębie stref klimatycznych.",
    "options": [
      "ukształtowanie powierzchni",
      "odległość od mórz i oceanów",
      "wysokość bezwzględna",
      "kolor flagi państwowej",
      "liczba języków urzędowych",
      "nazwy kontynentów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podręcznik wskazuje ukształtowanie powierzchni oraz odległość od mórz i oceanów jako ważne czynniki różnicujące klimat."
  },
  {
    "id": "R04_STR_04",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "fill_in",
    "prompt": "Wraz ze wzrostem wysokości bezwzględnej średnia roczna temperatura powietrza __________, a roczne sumy opadów zwykle __________.",
    "options": null,
    "answer": [
      "maleje",
      "zwiększają się"
    ],
    "altAnswers": [
      [
        "maleje",
        "spada",
        "obniża się"
      ],
      [
        "zwiększają się",
        "rosną",
        "wzrastają"
      ]
    ],
    "explanation": "W górach wraz z wysokością temperatura maleje, a opady są większe."
  },
  {
    "id": "R04_STR_05",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "single_choice",
    "prompt": "Który opis najlepiej pasuje do klimatu morskiego?",
    "options": [
      "Chłodne lata, dużo opadów i łagodne zimy",
      "Bardzo gorące lata i całkowity brak opadów",
      "Mroźne zimy i brak wpływu oceanów",
      "Stała temperatura poniżej zera przez cały rok",
      "Upały tylko podczas nocy polarnej",
      "Wyłącznie opady śniegu"
    ],
    "answer": 0,
    "explanation": "Klimat morski cechuje się chłodnymi latami z dużą ilością opadów oraz łagodnymi zimami."
  },
  {
    "id": "R04_STR_06",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do klimatu morskiego lub kontynentalnego.",
    "options": null,
    "items": [
      "łagodne zimy",
      "chłodne lata z opadami",
      "skąpe opady",
      "cieplejsze lata niż na wybrzeżu",
      "zimą niższa temperatura niż na wybrzeżu"
    ],
    "categories": [
      "klimat morski",
      "klimat kontynentalny"
    ],
    "answer": {
      "klimat morski": [
        "łagodne zimy",
        "chłodne lata z opadami"
      ],
      "klimat kontynentalny": [
        "skąpe opady",
        "cieplejsze lata niż na wybrzeżu",
        "zimą niższa temperatura niż na wybrzeżu"
      ]
    },
    "image": "/img/r04_strefy_krajobrazowe_pas.jpg",
    "explanation": "Klimat morski łagodzi temperatury, a kontynentalny ma skąpe opady, cieplejsze lata i chłodniejsze zimy."
  },
  {
    "id": "R04_STR_07",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "riddle",
    "prompt": "Pasy terenu o podobnych warunkach klimatycznych to...",
    "options": null,
    "answer": "strefy klimatyczne",
    "altAnswers": [
      "strefa klimatyczna",
      "strefy klimatyczne"
    ],
    "explanation": "Takie pasy nazywamy strefami klimatycznymi."
  },
  {
    "id": "R04_STR_08",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: tajga, tundra, sawanna, klimatogram.",
    "options": null,
    "answer": "klimatogram",
    "explanation": "Tajga, tundra i sawanna to strefy krajobrazowe, a klimatogram jest wykresem klimatycznym."
  },
  {
    "id": "R04_STR_09",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "true_false",
    "prompt": "Układ stref krajobrazowych jest mniej regularny niż układ stref klimatycznych.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że strefy krajobrazowe nie układają się tak regularnie jak klimatyczne."
  },
  {
    "id": "R04_STR_10",
    "section": "Strefy klimatyczne i krajobrazowe",
    "type": "single_choice",
    "prompt": "Jak działalność człowieka zmieniła wiele naturalnych krajobrazów Ziemi?",
    "options": [
      "Przekształciła je w krajobrazy rolnicze, miejskie i przemysłowe",
      "Sprawiła, że wszędzie powstały pustynie lodowe",
      "Usunęła wszystkie różnice klimatyczne",
      "Zamieniła oceany w góry",
      "Zatrzymała zmiany pogody",
      "Zlikwidowała strefy klimatyczne"
    ],
    "answer": 0,
    "explanation": "Wiele obszarów naturalnych przekształcono w krajobrazy rolnicze, miejskie i przemysłowe."
  },
  {
    "id": "R04_LAS_01",
    "section": "Lasy świata",
    "type": "single_choice",
    "prompt": "Gdzie znajdują się największe obszary wilgotnych lasów równikowych?",
    "options": [
      "Nizina Amazonki, Kotlina Konga i Archipelag Malajski",
      "Grenlandia, Antarktyda i Svalbard",
      "Sahara, Gobi i Atakama",
      "Alpy, Tatry i Himalaje",
      "Europa Zachodnia i środkowa Australia",
      "Wyłącznie okolice Morza Śródziemnego"
    ],
    "answer": 0,
    "explanation": "Największe obszary leżą na Nizinie Amazonki, w Kotlinie Konga oraz na wyspach Archipelagu Malajskiego."
  },
  {
    "id": "R04_LAS_02",
    "section": "Lasy świata",
    "type": "true_false",
    "prompt": "W strefie wilgotnych lasów równikowych występują wyraźne cztery pory roku.",
    "options": null,
    "answer": false,
    "image": "/img/r04_wilgotny_las_warstwy.jpg",
    "explanation": "Duża ilość opadów i wysoka temperatura utrzymują się tam przez cały rok, dlatego nie ma wyraźnych pór roku."
  },
  {
    "id": "R04_LAS_03",
    "section": "Lasy świata",
    "type": "fill_in",
    "prompt": "Codzienne ulewne opady w pobliżu równika nazywa się deszczami __________.",
    "options": null,
    "answer": [
      "zenitalnymi"
    ],
    "altAnswers": [
      [
        "zenitalnymi",
        "zenitalne"
      ]
    ],
    "explanation": "Deszcze zenitalne powstają, gdy para wodna unosi się, ochładza i skrapla."
  },
  {
    "id": "R04_LAS_04",
    "section": "Lasy świata",
    "type": "multi_select",
    "prompt": "Zaznacz zwierzęta wymienione przy wilgotnych lasach równikowych.",
    "options": [
      "małpy",
      "jaguary",
      "tapiry",
      "kolibry",
      "niedźwiedzie polarne",
      "pingwiny"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W podręczniku przy lasach równikowych pojawiają się między innymi małpy, ptaki, tapiry i jaguary."
  },
  {
    "id": "R04_LAS_05",
    "section": "Lasy świata",
    "type": "match",
    "prompt": "Połącz warstwę wilgotnego lasu równikowego z opisem.",
    "options": null,
    "left": [
      "pojedyncze drzewa",
      "drzewa 30–40 m",
      "drzewa 5–20 m",
      "krzewy i runo"
    ],
    "right": [
      "50–70 m wysokości",
      "zwarta warstwa koron",
      "niższe drzewa, np. kakaowce",
      "półmrok i rośliny cieniolubne"
    ],
    "answer": {
      "pojedyncze drzewa": "50–70 m wysokości",
      "drzewa 30–40 m": "zwarta warstwa koron",
      "drzewa 5–20 m": "niższe drzewa, np. kakaowce",
      "krzewy i runo": "półmrok i rośliny cieniolubne"
    },
    "image": "/img/r04_wilgotny_las_warstwy.jpg",
    "explanation": "W wilgotnym lesie równikowym drzewa tworzą kilka pięter, od pojedynczych najwyższych drzew po warstwę krzewów i runa."
  },
  {
    "id": "R04_LAS_06",
    "section": "Lasy świata",
    "type": "single_choice",
    "prompt": "Dlaczego tradycyjne domy Indian w Amazonii często buduje się na palach?",
    "options": [
      "Aby chroniły przed zalaniem i jadowitymi zwierzętami",
      "Aby łatwiej ogrzewać je zimą",
      "Aby zatrzymywać śnieg na dachu",
      "Aby ukryć się przed wiatrem polarnym",
      "Aby przechowywać lód",
      "Aby stały na piaskowych wydmach"
    ],
    "answer": 0,
    "explanation": "Domy na palach chronią mieszkańców przed okresowym zalewaniem i jadowitymi zwierzętami."
  },
  {
    "id": "R04_LAS_07",
    "section": "Lasy świata",
    "type": "riddle",
    "prompt": "Podstawowa roślina uprawiana przez część Indian w wilgotnych lasach równikowych to...",
    "options": null,
    "answer": "maniok",
    "altAnswers": [
      "maniok"
    ],
    "explanation": "Maniok jest podstawowym pożywieniem mieszkańców tej strefy."
  },
  {
    "id": "R04_LAS_08",
    "section": "Lasy świata",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do lasów równikowych lub lasów liściastych i mieszanych.",
    "options": null,
    "items": [
      "wysoka temperatura przez cały rok",
      "cztery pory roku",
      "deszcze zenitalne",
      "występują w Ameryce Północnej, Europie i Azji",
      "wiecznie zielone lasy liściaste",
      "w Polsce przeważają lasy mieszane"
    ],
    "categories": [
      "wilgotne lasy równikowe",
      "lasy liściaste i mieszane"
    ],
    "answer": {
      "wilgotne lasy równikowe": [
        "wysoka temperatura przez cały rok",
        "deszcze zenitalne",
        "wiecznie zielone lasy liściaste"
      ],
      "lasy liściaste i mieszane": [
        "cztery pory roku",
        "występują w Ameryce Północnej, Europie i Azji",
        "w Polsce przeważają lasy mieszane"
      ]
    },
    "explanation": "Lasy równikowe są gorące i wilgotne cały rok, a lasy liściaste i mieszane rosną w klimacie umiarkowanym z czterema porami roku."
  },
  {
    "id": "R04_LAS_09",
    "section": "Lasy świata",
    "type": "true_false",
    "prompt": "Strefa lasów liściastych i mieszanych występuje przede wszystkim w Ameryce Północnej, Europie i Azji.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje te trzy kontynenty jako główne obszary lasów liściastych i mieszanych."
  },
  {
    "id": "R04_LAS_10",
    "section": "Lasy świata",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: wyjec, czepiak, tapir, renifer.",
    "options": null,
    "answer": "renifer",
    "explanation": "Wyjec, czepiak i tapir występują w wilgotnych lasach równikowych, a renifer jest kojarzony ze strefą tajgi i tundry."
  },
  {
    "id": "R04_SPS_01",
    "section": "Sawanny, stepy i pustynie",
    "type": "single_choice",
    "prompt": "Co jest wspólną cechą krajobrazu sawanny i stepu?",
    "options": [
      "Dominacja traw",
      "Stała pokrywa lodowa",
      "Gęsty las równikowy",
      "Brak jakiejkolwiek roślinności",
      "Wyłącznie wysokie drzewa iglaste",
      "Codzienne deszcze zenitalne"
    ],
    "answer": 0,
    "explanation": "Sawanny i stepy są rozległymi obszarami porośniętymi głównie trawami."
  },
  {
    "id": "R04_SPS_02",
    "section": "Sawanny, stepy i pustynie",
    "type": "true_false",
    "prompt": "Na sawannie występują pora deszczowa i pora sucha.",
    "options": null,
    "answer": true,
    "image": "/img/r04_sawanna_pora_sucha.jpg",
    "explanation": "Klimat sawanny cechuje się naprzemiennym występowaniem pory deszczowej i suchej."
  },
  {
    "id": "R04_SPS_03",
    "section": "Sawanny, stepy i pustynie",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny charakterystyczne dla sawanny wymienione w rozdziale.",
    "options": [
      "trawy",
      "baobaby",
      "akacje",
      "mchy i porosty",
      "jodły",
      "cedry"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Na sawannie występują trawy oraz pojedyncze drzewa, między innymi baobaby i akacje."
  },
  {
    "id": "R04_SPS_04",
    "section": "Sawanny, stepy i pustynie",
    "type": "single_choice",
    "prompt": "Dlaczego na stepach prawie nie rosną drzewa?",
    "options": [
      "Z powodu zbyt małej ilości opadów",
      "Z powodu całorocznej pokrywy lodowej",
      "Ponieważ gleby są zawsze zalane wodą",
      "Ponieważ codziennie padają deszcze zenitalne",
      "Bo step leży wyłącznie na wybrzeżach",
      "Bo rosną tam tylko palmy"
    ],
    "answer": 0,
    "explanation": "Na stepach opady są zbyt małe, aby drzewa mogły powszechnie rosnąć."
  },
  {
    "id": "R04_SPS_05",
    "section": "Sawanny, stepy i pustynie",
    "type": "match",
    "prompt": "Połącz strefę z cechą klimatu.",
    "options": null,
    "left": [
      "sawanna",
      "step",
      "pustynia gorąca",
      "pustynia lodowa"
    ],
    "right": [
      "pora deszczowa i sucha",
      "suchy klimat umiarkowany kontynentalny",
      "bardzo małe opady i upały",
      "bardzo niska temperatura"
    ],
    "answer": {
      "sawanna": "pora deszczowa i sucha",
      "step": "suchy klimat umiarkowany kontynentalny",
      "pustynia gorąca": "bardzo małe opady i upały",
      "pustynia lodowa": "bardzo niska temperatura"
    },
    "explanation": "Sawanna leży w klimacie z porą deszczową i suchą, step w klimacie umiarkowanym kontynentalnym, pustynia gorąca ma skrajnie mało opadów, a pustynia lodowa bardzo niską temperaturę."
  },
  {
    "id": "R04_SPS_06",
    "section": "Sawanny, stepy i pustynie",
    "type": "riddle",
    "prompt": "Miejsce na pustyni, gdzie dzięki dostępowi do wody możliwa jest uprawa roślin, to...",
    "options": null,
    "answer": "oaza",
    "altAnswers": [
      "oaza",
      "oazy"
    ],
    "image": "/img/r04_pustynia_oaza_wydmy.jpg",
    "explanation": "Oazy umożliwiają uprawę roślin w strefie pustyń gorących."
  },
  {
    "id": "R04_SPS_07",
    "section": "Sawanny, stepy i pustynie",
    "type": "single_choice",
    "prompt": "Która forma terenu jest typowa dla pustyni piaszczystej?",
    "options": [
      "wydmy",
      "lodowce górskie",
      "granie",
      "piętro krzewów",
      "tajga",
      "runo leśne"
    ],
    "answer": 0,
    "image": "/img/r04_pustynia_oaza_wydmy.jpg",
    "explanation": "Na pustyniach piaszczystych wiatr usypuje wydmy."
  },
  {
    "id": "R04_SPS_08",
    "section": "Sawanny, stepy i pustynie",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady przystosowań roślin pustyń gorących do suszy.",
    "options": [
      "długie korzenie",
      "magazynowanie wody",
      "ograniczanie parowania",
      "zrzucanie igieł na zimę",
      "tworzenie lodowców",
      "codzienne kwitnienie w deszczu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rośliny pustyń ograniczają utratę wody i sięgają po nią głęboko korzeniami lub magazynują ją w pędach."
  },
  {
    "id": "R04_SPS_09",
    "section": "Sawanny, stepy i pustynie",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: baobab, akacja, trawy, świerk.",
    "options": null,
    "answer": "świerk",
    "explanation": "Baobab, akacja i trawy są charakterystyczne dla sawanny, a świerk dla lasów iglastych."
  },
  {
    "id": "R04_SPS_10",
    "section": "Sawanny, stepy i pustynie",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do sawanny lub pustyni gorącej.",
    "options": null,
    "items": [
      "baobaby",
      "stada antylop",
      "wydmy",
      "oazy",
      "akacje",
      "bardzo skąpa roślinność"
    ],
    "categories": [
      "sawanna",
      "pustynia gorąca"
    ],
    "answer": {
      "sawanna": [
        "baobaby",
        "stada antylop",
        "akacje"
      ],
      "pustynia gorąca": [
        "wydmy",
        "oazy",
        "bardzo skąpa roślinność"
      ]
    },
    "explanation": "Sawanna ma trawy i pojedyncze drzewa oraz duże stada zwierząt, a pustynia gorąca ma skąpą roślinność, wydmy i oazy."
  },
  {
    "id": "R04_SPS_11",
    "section": "Sawanny, stepy i pustynie",
    "type": "true_false",
    "prompt": "Pustynie lodowe obejmują obszary leżące wokół biegunów Ziemi.",
    "options": null,
    "answer": true,
    "explanation": "Strefa pustyń lodowych występuje w rejonach polarnych, między innymi na Antarktydzie i Grenlandii."
  },
  {
    "id": "R04_SPS_12",
    "section": "Sawanny, stepy i pustynie",
    "type": "fill_in",
    "prompt": "Na pustyniach lodowych roślinność pojawia się głównie na niepokrytych lodem __________, gdzie mogą rosnąć mchy i __________.",
    "options": null,
    "answer": [
      "wybrzeżach",
      "porosty"
    ],
    "altAnswers": [
      [
        "wybrzeżach",
        "brzegach"
      ],
      [
        "porosty",
        "porostów"
      ]
    ],
    "explanation": "Na obrzeżach pustyń lodowych występują mchy i porosty."
  },
  {
    "id": "R04_SRO_01",
    "section": "Krajobraz śródziemnomorski",
    "type": "single_choice",
    "prompt": "Gdzie występuje krajobraz śródziemnomorski?",
    "options": [
      "Głównie wokół Morza Śródziemnego",
      "Wyłącznie wokół bieguna południowego",
      "Tylko w centrum Antarktydy",
      "Na całej Nizinie Amazonki",
      "Tylko na szczytach Himalajów",
      "W każdym miejscu na równiku"
    ],
    "answer": 0,
    "explanation": "Strefa krajobrazu śródziemnomorskiego obejmuje głównie obszary wokół Morza Śródziemnego."
  },
  {
    "id": "R04_SRO_02",
    "section": "Krajobraz śródziemnomorski",
    "type": "fill_in",
    "prompt": "Klimat śródziemnomorski ma __________ i suche lata oraz łagodne, wilgotne __________.",
    "options": null,
    "answer": [
      "gorące",
      "zimy"
    ],
    "altAnswers": [
      [
        "gorące",
        "ciepłe",
        "upalne"
      ],
      [
        "zimy",
        "zime"
      ]
    ],
    "explanation": "Latem w tej strefie jest gorąco i sucho, a zimą łagodnie i bardziej wilgotno."
  },
  {
    "id": "R04_SRO_03",
    "section": "Krajobraz śródziemnomorski",
    "type": "riddle",
    "prompt": "Gęste, twardolistne zarośla strefy śródziemnomorskiej to...",
    "options": null,
    "answer": "makia",
    "altAnswers": [
      "makia",
      "makią"
    ],
    "image": "/img/r04_makia_roslinnosc.jpg",
    "explanation": "Roślinność występująca w krajobrazie śródziemnomorskim jest nazywana makią."
  },
  {
    "id": "R04_SRO_04",
    "section": "Krajobraz śródziemnomorski",
    "type": "multi_select",
    "prompt": "Zaznacz cechy roślinności śródziemnomorskiej pomagające przetrwać suszę.",
    "options": [
      "skórzaste liście",
      "kolce",
      "rozbudowane korzenie",
      "liście opadające pod śniegiem",
      "brak korzeni",
      "igły pokryte lodem"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rośliny makii mają między innymi skórzaste liście, kolce i rozbudowane korzenie."
  },
  {
    "id": "R04_SRO_05",
    "section": "Krajobraz śródziemnomorski",
    "type": "true_false",
    "prompt": "W strefie śródziemnomorskiej turystyka jest ważnym zajęciem ludności.",
    "options": null,
    "answer": true,
    "explanation": "Ciepły klimat, morze i zabytki sprzyjają rozwojowi turystyki w tej strefie."
  },
  {
    "id": "R04_SRO_06",
    "section": "Krajobraz śródziemnomorski",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: oliwka, cytrusy, winorośl, świerk.",
    "options": null,
    "answer": "świerk",
    "explanation": "Oliwki, cytrusy i winorośl są kojarzone z rolnictwem śródziemnomorskim, a świerk z lasami iglastymi."
  },
  {
    "id": "R04_SRO_07",
    "section": "Krajobraz śródziemnomorski",
    "type": "scenario",
    "prompt": "Rodzina planuje wakacje nad Morzem Śródziemnym w lipcu. Jakich warunków powinna się spodziewać według opisu klimatu tej strefy?",
    "options": [
      "gorącego i suchego lata",
      "mroźnej zimy z wieloletnią zmarzliną",
      "codziennych deszczów zenitalnych",
      "nocy polarnej i lądolodu"
    ],
    "answer": 0,
    "explanation": "Lata w strefie śródziemnomorskiej są gorące i suche."
  },
  {
    "id": "R04_SRO_08",
    "section": "Krajobraz śródziemnomorski",
    "type": "match",
    "prompt": "Połącz element krajobrazu śródziemnomorskiego z opisem.",
    "options": null,
    "left": [
      "klimat",
      "makia",
      "turystyka",
      "rolnictwo"
    ],
    "right": [
      "gorące suche lata i łagodne wilgotne zimy",
      "twardolistne zarośla",
      "ważne zajęcie mieszkańców",
      "uprawa m.in. oliwek i winorośli"
    ],
    "answer": {
      "klimat": "gorące suche lata i łagodne wilgotne zimy",
      "makia": "twardolistne zarośla",
      "turystyka": "ważne zajęcie mieszkańców",
      "rolnictwo": "uprawa m.in. oliwek i winorośli"
    },
    "explanation": "Klimat, makia, turystyka i rolnictwo są głównymi elementami opisu tej strefy w podręczniku."
  },
  {
    "id": "R04_TTG_01",
    "section": "Tajga, tundra i góry",
    "type": "single_choice",
    "prompt": "Na której półkuli występują strefy tajgi i tundry?",
    "options": [
      "północnej",
      "południowej",
      "wschodniej",
      "zachodniej",
      "tylko oceanicznej",
      "tylko równikowej"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że tajga i tundra występują tylko na półkuli północnej."
  },
  {
    "id": "R04_TTG_02",
    "section": "Tajga, tundra i góry",
    "type": "fill_in",
    "prompt": "W strefach tajgi i tundry występuje wieloletnia __________.",
    "options": null,
    "answer": [
      "zmarzlina"
    ],
    "altAnswers": [
      [
        "zmarzlina",
        "zmarzliny"
      ]
    ],
    "image": "/img/r04_tajga_tundra_porownanie.jpg",
    "explanation": "Wieloletnia zmarzlina jest wspólną cechą tajgi i tundry."
  },
  {
    "id": "R04_TTG_03",
    "section": "Tajga, tundra i góry",
    "type": "multi_select",
    "prompt": "Zaznacz drzewa charakterystyczne dla tajgi.",
    "options": [
      "świerki",
      "sosny",
      "jodły",
      "modrzewie",
      "palmy daktylowe",
      "baobaby"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Tajgę tworzą głównie lasy iglaste, w których rosną świerki, sosny, jodły i modrzewie."
  },
  {
    "id": "R04_TTG_04",
    "section": "Tajga, tundra i góry",
    "type": "single_choice",
    "prompt": "Dlaczego w tundrze nie rosną wysokie drzewa?",
    "options": [
      "Z powodu niskiej temperatury i wieloletniej zmarzliny",
      "Z powodu codziennych opadów zenitalnych",
      "Ponieważ gleba jest stale zbyt gorąca",
      "Bo tundra leży tylko w oazach",
      "Bo wszędzie rosną wysokie palmy",
      "Z powodu braku zimy"
    ],
    "answer": 0,
    "explanation": "Niska temperatura, krótki okres wegetacyjny i wieloletnia zmarzlina utrudniają wzrost drzew."
  },
  {
    "id": "R04_TTG_05",
    "section": "Tajga, tundra i góry",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny i zwierzęta do tajgi lub tundry.",
    "options": null,
    "items": [
      "świerki",
      "niedźwiedzie",
      "mchy i porosty",
      "renifery",
      "karłowate wierzby",
      "łosie"
    ],
    "categories": [
      "tajga",
      "tundra"
    ],
    "answer": {
      "tajga": [
        "świerki",
        "niedźwiedzie",
        "łosie"
      ],
      "tundra": [
        "mchy i porosty",
        "renifery",
        "karłowate wierzby"
      ]
    },
    "image": "/img/r04_tajga_tundra_porownanie.jpg",
    "explanation": "Tajga to lasy iglaste z dużymi ssakami, a tundra ma niską roślinność, mchy, porosty i zwierzęta przystosowane do zimna."
  },
  {
    "id": "R04_TTG_06",
    "section": "Tajga, tundra i góry",
    "type": "true_false",
    "prompt": "Krajobraz wysokogórski występuje tylko w Himalajach.",
    "options": null,
    "answer": false,
    "explanation": "Krajobraz wysokogórski występuje we wszystkich strefach klimatycznych, a Himalaje są jednym z przykładów."
  },
  {
    "id": "R04_TTG_07",
    "section": "Tajga, tundra i góry",
    "type": "single_choice",
    "prompt": "Co dzieje się z temperaturą powietrza wraz ze wzrostem wysokości w górach?",
    "options": [
      "obniża się",
      "rośnie bez ograniczeń",
      "pozostaje zawsze taka sama",
      "zmienia się w zasolenie wody",
      "występuje tylko nocą",
      "zależy od nazw szczytów"
    ],
    "answer": 0,
    "explanation": "W górach temperatura powietrza obniża się wraz ze wzrostem wysokości."
  },
  {
    "id": "R04_TTG_08",
    "section": "Tajga, tundra i góry",
    "type": "sequence",
    "prompt": "Ułóż piętra roślinności Himalajów od najniższego do najwyższego.",
    "options": null,
    "items": [
      "piętro lasów iglastych",
      "piętro śnieżne",
      "piętro wiecznie zielonych lasów",
      "piętro krzewów",
      "piętro lasów liściastych",
      "piętro górskich łąk"
    ],
    "answer": [
      "piętro wiecznie zielonych lasów",
      "piętro lasów liściastych",
      "piętro lasów iglastych",
      "piętro krzewów",
      "piętro górskich łąk",
      "piętro śnieżne"
    ],
    "image": "/img/r04_pietra_roslinnosci_himalaje.jpg",
    "explanation": "W Himalajach kolejne piętra to wiecznie zielone lasy, lasy liściaste, lasy iglaste, krzewy, górskie łąki i piętro śnieżne."
  },
  {
    "id": "R04_TTG_09",
    "section": "Tajga, tundra i góry",
    "type": "riddle",
    "prompt": "Najwyższy szczyt Himalajów i całej Ziemi to...",
    "options": null,
    "answer": "Mount Everest",
    "altAnswers": [
      "Mount Everest",
      "Everest"
    ],
    "explanation": "Podręcznik podaje, że najwyższym szczytem jest Mount Everest."
  },
  {
    "id": "R04_TTG_10",
    "section": "Tajga, tundra i góry",
    "type": "multi_select",
    "prompt": "Zaznacz zajęcia Szerpów wymienione w rozdziale.",
    "options": [
      "hodowla jaków, owiec i kóz",
      "uprawa roślin na niższych wysokościach",
      "praca jako tragarze i przewodnicy",
      "połów ryb w oceanie",
      "uprawa manioku w Amazonii",
      "budowanie igloo na lądolodzie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Szerpowie zajmują się pasterstwem, uprawą ziemi oraz obsługą turystów."
  },
  {
    "id": "R04_TTG_11",
    "section": "Tajga, tundra i góry",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: turnia, grań, żleb, sawanna.",
    "options": null,
    "answer": "sawanna",
    "explanation": "Turnia, grań i żleb to formy rzeźby wysokogórskiej, a sawanna jest strefą krajobrazową."
  },
  {
    "id": "R04_TTG_12",
    "section": "Tajga, tundra i góry",
    "type": "match",
    "prompt": "Połącz piętro Himalajów z przykładem roślinności lub cechą.",
    "options": null,
    "left": [
      "wiecznie zielone lasy",
      "lasy iglaste",
      "górskie łąki",
      "piętro śnieżne"
    ],
    "right": [
      "bambusy i figowce",
      "jodły, sosny, cedry i świerki",
      "trawy, zioła i krzewinki",
      "lodowce górskie i brak roślin na stokach"
    ],
    "answer": {
      "wiecznie zielone lasy": "bambusy i figowce",
      "lasy iglaste": "jodły, sosny, cedry i świerki",
      "górskie łąki": "trawy, zioła i krzewinki",
      "piętro śnieżne": "lodowce górskie i brak roślin na stokach"
    },
    "image": "/img/r04_pietra_roslinnosci_himalaje.jpg",
    "explanation": "Wraz z wysokością w Himalajach zmieniają się piętra roślinności od lasów po piętro śnieżne."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dla Oslo najcieplejszym miesiącem na klimatogramie w podręczniku jest lipiec. Jaki miesiąc jest najzimniejszy?",
    "options": [
      "luty",
      "styczeń",
      "marzec",
      "grudzień",
      "październik",
      "lipiec"
    ],
    "answer": 0,
    "image": "/img/r04_klimatogram_schemat.jpg",
    "explanation": "W przykładzie z Oslo najniższa średnia temperatura występuje w lutym."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na podstawie danych dla Oslo średnia roczna temperatura wynosi około __________°C, a roczna suma opadów __________ mm.",
    "options": null,
    "answer": [
      "4,0",
      "845"
    ],
    "altAnswers": [
      [
        "4,0",
        "4",
        "3,97"
      ],
      [
        "845",
        "845 mm"
      ]
    ],
    "explanation": "Podręcznik pokazuje obliczenia: 47,6 : 12 ≈ 4,0°C oraz suma opadów 845 mm."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W Oslo najwyższa miesięczna suma opadów w przykładzie z podręcznika przypada na październik.",
    "options": null,
    "answer": true,
    "explanation": "W opisie klimatogramu Oslo podano najwyższe opady w październiku."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw poprawnie łączy podobieństwo stref krajobrazowych i pięter roślinności w górach?",
    "options": [
      "pustynie lodowe — piętro śnieżne",
      "sawanna — piętro śnieżne",
      "tundra — piętro wiecznie zielonych lasów",
      "tajga — piętro górskich łąk",
      "makia — lodowiec górski",
      "step — piętro śnieżne"
    ],
    "answer": 0,
    "explanation": "Podręcznik porównuje pustynie lodowe z piętrem śnieżnym, tundrę z piętrem górskich łąk, a tajgę z piętrem lasów iglastych."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strefę lub piętro z najbardziej podobnym odpowiednikiem.",
    "options": null,
    "left": [
      "pustynie lodowe",
      "tundra",
      "tajga",
      "strefa wilgotnych lasów podzwrotnikowych"
    ],
    "right": [
      "piętro śnieżne",
      "piętro górskich łąk",
      "piętro lasów iglastych",
      "piętro wiecznie zielonych lasów"
    ],
    "answer": {
      "pustynie lodowe": "piętro śnieżne",
      "tundra": "piętro górskich łąk",
      "tajga": "piętro lasów iglastych",
      "strefa wilgotnych lasów podzwrotnikowych": "piętro wiecznie zielonych lasów"
    },
    "explanation": "Roślinność niektórych stref krajobrazowych przypomina roślinność wybranych pięter w górach."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż krajobrazy od równika ku biegunowi na półkuli północnej zgodnie z uproszczonym schematem z podręcznika.",
    "options": null,
    "items": [
      "tajga",
      "wilgotne lasy równikowe",
      "pustynie lodowe",
      "sawanny",
      "lasy liściaste i mieszane",
      "pustynie gorące",
      "tundra"
    ],
    "answer": [
      "wilgotne lasy równikowe",
      "sawanny",
      "pustynie gorące",
      "lasy liściaste i mieszane",
      "tajga",
      "tundra",
      "pustynie lodowe"
    ],
    "explanation": "Schemat pokazuje kolejność od wilgotnych lasów równikowych przez sawanny, pustynie gorące, roślinność śródziemnomorską, lasy, tajgę, tundrę do pustyń lodowych."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zdania prawdziwe o Himalajach według podręcznika.",
    "options": [
      "Mount Everest ma 8848 m n.p.m.",
      "w najwyższych partiach pada prawie wyłącznie śnieg",
      "występują tam lodowce górskie",
      "piętra roślinności są jednakowe po obu stronach gór",
      "Szerpowie mieszkają wyłącznie na poziomie morza",
      "Himalaje leżą w Afryce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r04_pietra_roslinnosci_himalaje.jpg",
    "explanation": "Himalaje mają najwyższe szczyty Ziemi, lodowce górskie i wyraźne piętra roślinności szczególnie na stokach południowych."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Reinhold Messner, Jerzy Kukuczka, Mount Everest, makia.",
    "options": null,
    "answer": "makia",
    "explanation": "Messner, Kukuczka i Mount Everest występują w ciekawostce lub opisie Himalajów, a makia dotyczy strefy śródziemnomorskiej."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Lądolód pokrywający niemal cały kontynent występuje przede wszystkim na...",
    "options": null,
    "answer": "Antarktydzie",
    "altAnswers": [
      "Antarktyda",
      "Antarktydzie"
    ],
    "explanation": "Antarktyda jest przykładem obszaru pustyń lodowych pokrytego lądolodem."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz porównuje dwa miejsca w tej samej strefie klimatycznej. Jedno leży przy oceanie, drugie głęboko we wnętrzu kontynentu. W którym miejscu zimy będą zwykle łagodniejsze?",
    "options": [
      "przy oceanie",
      "we wnętrzu kontynentu",
      "zawsze w miejscu wyżej położonym",
      "zawsze tam, gdzie są pustynie gorące"
    ],
    "answer": 0,
    "explanation": "Bliskość mórz i oceanów łagodzi zimy, dlatego łagodniejsze zimy występują przy wybrzeżu."
  }
];

const KID_PROMPTS = {
  "R04_POG_01": "Co to jest pogoda?",
  "R04_POG_03": "Co pokazuje klimatogram?",
  "R04_STR_01": "Jak układają się strefy klimatyczne?",
  "R04_LAS_02": "Czy w lesie równikowym są cztery pory roku?",
  "R04_SPS_01": "Co łączy sawannę i step?",
  "R04_SRO_03": "Jak nazywają się śródziemnomorskie zarośla?",
  "R04_TTG_07": "Co dzieje się z temperaturą wysoko w górach?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Krajobrazy świata",
  icon: "🌍",
  sectionOrder: [
  "Pogoda i klimat",
  "Strefy klimatyczne i krajobrazowe",
  "Lasy świata",
  "Sawanny, stepy i pustynie",
  "Krajobraz śródziemnomorski",
  "Tajga, tundra i góry",
  "Super trudne"
],
  sectionIcons: {
  "Pogoda i klimat": "🌦️",
  "Strefy klimatyczne i krajobrazowe": "🌍",
  "Lasy świata": "🌳",
  "Sawanny, stepy i pustynie": "🏜️",
  "Krajobraz śródziemnomorski": "🌿",
  "Tajga, tundra i góry": "🏔️",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
