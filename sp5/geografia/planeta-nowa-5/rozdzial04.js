// Skróty sekcji:
//   STR = Strefowość i piętrowość klimatyczno-roślinna
//   ROW = Wilgotne lasy równikowe
//   LAS = Lasy strefy umiarkowanej
//   SAW = Sawanna i step
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_STR_01",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "single_choice",
    "prompt": "Gdzie powierzchnia Ziemi otrzymuje najwięcej energii słonecznej?",
    "options": [
      "Między zwrotnikami",
      "Wokół biegunów",
      "Na obszarach podbiegunowych",
      "Wyłącznie nad oceanami",
      "W strefie umiarkowanej chłodnej",
      "Na najwyższych górach"
    ],
    "answer": 0,
    "explanation": "Najwięcej energii słonecznej dociera do obszarów położonych między zwrotnikami."
  },
  {
    "id": "R04_STR_02",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "true_false",
    "prompt": "Strefy klimatyczne i roślinne na Ziemi układają się równoleżnikowo, czyli ze wschodu na zachód.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że strefy klimatyczne i roślinne rozciągają się wzdłuż równoleżników."
  },
  {
    "id": "R04_STR_03",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "fill_in",
    "prompt": "Temperatura powietrza zależy od ilości __________ docierającej do powierzchni Ziemi.",
    "options": null,
    "answer": [
      "energii słonecznej"
    ],
    "altAnswers": [
      [
        "energii słonecznej",
        "energii slonecznej"
      ]
    ],
    "explanation": "Im więcej energii słonecznej dociera do danego obszaru, tym wyższa jest zwykle temperatura powietrza."
  },
  {
    "id": "R04_STR_04",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "match",
    "prompt": "Połącz formację roślinną z warunkami, w których występuje.",
    "options": null,
    "left": [
      "wilgotne lasy równikowe",
      "sawanna",
      "pustynia gorąca",
      "tundra"
    ],
    "right": [
      "gorąco i bardzo wilgotno przez cały rok",
      "mniej opadów i regularne pory suche",
      "wysoka temperatura i bardzo mało opadów",
      "karłowate drzewa, mchy i porosty"
    ],
    "answer": {
      "wilgotne lasy równikowe": "gorąco i bardzo wilgotno przez cały rok",
      "sawanna": "mniej opadów i regularne pory suche",
      "pustynia gorąca": "wysoka temperatura i bardzo mało opadów",
      "tundra": "karłowate drzewa, mchy i porosty"
    },
    "image": "/img/r04_strefy_krajobrazowe_schemat.jpg",
    "explanation": "Formacje roślinne wynikają z warunków klimatycznych, zwłaszcza temperatury i opadów."
  },
  {
    "id": "R04_STR_05",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "sequence",
    "prompt": "Ułóż formacje roślinne w kolejności od okolic równika ku obszarom najzimniejszym.",
    "options": null,
    "items": [
      "pustynie lodowe",
      "sawanny",
      "lasy liściaste i mieszane",
      "wilgotne lasy równikowe",
      "pustynie gorące",
      "tundra"
    ],
    "answer": [
      "wilgotne lasy równikowe",
      "sawanny",
      "pustynie gorące",
      "lasy liściaste i mieszane",
      "tundra",
      "pustynie lodowe"
    ],
    "image": "/img/r04_strefy_krajobrazowe_schemat.jpg",
    "explanation": "Wraz z oddalaniem się od równika spada ilość energii słonecznej, a krajobrazy zmieniają się strefowo."
  },
  {
    "id": "R04_STR_06",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: sawanna, step, tundra, klimatogram.",
    "options": null,
    "answer": "klimatogram",
    "explanation": "Sawanna, step i tundra to formacje roślinne, a klimatogram jest wykresem elementów klimatu."
  },
  {
    "id": "R04_STR_07",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "multi_select",
    "prompt": "Zaznacz zdania zgodne z podsumowaniem lekcji o strefowości i piętrowości.",
    "options": [
      "Temperatura powietrza zależy od ilości energii słonecznej docierającej do powierzchni Ziemi.",
      "Warunki klimatyczne decydują o tym, jakie rośliny i zwierzęta można spotkać w danej strefie.",
      "Strefy klimatyczne i roślinne układają się wzdłuż równoleżników.",
      "Piętra klimatyczne w górach układają się podobnie do stref klimatycznych na Ziemi.",
      "Wszystkie miejsca na Ziemi nagrzewają się jednakowo.",
      "Najcieplej przez cały rok jest w strefach podbiegunowych."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W podsumowaniu wskazano zależność temperatury od energii słonecznej, równoleżnikowy układ stref oraz podobieństwo pięter w górach do stref klimatycznych."
  },
  {
    "id": "R04_STR_08",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "scenario",
    "prompt": "Turysta wspina się wysoko w górach. U podnóża widzi bujną roślinność, wyżej las staje się rzadszy, następnie pojawiają się łąki bez drzew, a jeszcze wyżej lód i śnieg. Jak nazywa się to zjawisko?",
    "options": [
      "Piętrowość klimatyczno-roślinna",
      "Próchnica glebowa",
      "Pora deszczowa",
      "Krajobraz rolniczy"
    ],
    "answer": 0,
    "image": "/img/r04_pietrowosc_roslinnosci_gory.jpg",
    "explanation": "Wysoko w górach roślinność zmienia się wraz z wysokością, co nazywa się piętrowością klimatyczno-roślinną."
  },
  {
    "id": "R04_STR_09",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "riddle",
    "prompt": "Formacja roślinna z klimatu okołobiegunowego, w której nie rosną duże drzewa, lecz mchy, porosty i karłowate odmiany drzew, to...",
    "options": null,
    "answer": "tundra",
    "altAnswers": [
      "tundra",
      "Tundra"
    ],
    "explanation": "Taką formację roślinną podręcznik nazywa tundrą."
  },
  {
    "id": "R04_STR_10",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do stref klimatycznych.",
    "options": null,
    "items": [
      "wilgotne lasy równikowe",
      "sawanna",
      "pustynia gorąca",
      "roślinność śródziemnomorska",
      "lasy liściaste i mieszane",
      "step",
      "tundra",
      "pustynia lodowa"
    ],
    "categories": [
      "równikowa",
      "zwrotnikowa i podzwrotnikowa",
      "umiarkowana",
      "okołobiegunowa"
    ],
    "answer": {
      "równikowa": [
        "wilgotne lasy równikowe",
        "sawanna"
      ],
      "zwrotnikowa i podzwrotnikowa": [
        "pustynia gorąca",
        "roślinność śródziemnomorska"
      ],
      "umiarkowana": [
        "lasy liściaste i mieszane",
        "step"
      ],
      "okołobiegunowa": [
        "tundra",
        "pustynia lodowa"
      ]
    },
    "explanation": "Każda strefa klimatyczna ma typowe formacje krajobrazowo-roślinne."
  },
  {
    "id": "R04_STR_11",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "true_false",
    "prompt": "Na obszarach o najzimniejszych klimatach na Ziemi nie występują rośliny, a grunt jest stale zamarznięty.",
    "options": null,
    "answer": true,
    "explanation": "Takie obszary podręcznik opisuje jako pustynie lodowe."
  },
  {
    "id": "R04_STR_12",
    "section": "Strefowość i piętrowość klimatyczno-roślinna",
    "type": "fill_in",
    "prompt": "W górach wraz ze wzrostem wysokości klimat staje się zwykle bardziej __________, a roślinność się __________.",
    "options": null,
    "answer": [
      "chłodny",
      "zmienia"
    ],
    "altAnswers": [
      [
        "chłodny",
        "chlodny",
        "chłodniejszy",
        "chlodniejszy"
      ],
      [
        "zmienia",
        "zmienia się",
        "zmienia sie"
      ]
    ],
    "image": "/img/r04_pietrowosc_roslinnosci_gory.jpg",
    "explanation": "W wyższych partiach gór panują trudniejsze warunki, dlatego piętra roślinne zmieniają się wraz z wysokością."
  },
  {
    "id": "R04_ROW_01",
    "section": "Wilgotne lasy równikowe",
    "type": "single_choice",
    "prompt": "Który zestaw obejmuje trzy główne obszary występowania wilgotnych lasów równikowych wymienione w podręczniku?",
    "options": [
      "Amazonia, Kotlina Konga, Archipelag Malajski",
      "Sahara, Himalaje, Grenlandia",
      "Europa Zachodnia, Patagonia, Alaska",
      "Kotlina Konga, Sahara, stepy Azji",
      "Australia, Antarktyda, Półwysep Arabski",
      "Amazonia, tundra, tajga"
    ],
    "answer": 0,
    "explanation": "Podręcznik wskazuje Amazonię, Kotlinę Konga i Archipelag Malajski."
  },
  {
    "id": "R04_ROW_02",
    "section": "Wilgotne lasy równikowe",
    "type": "true_false",
    "prompt": "Wilgotne lasy równikowe leżą w strefie rozciągającej się wzdłuż równika.",
    "options": null,
    "answer": true,
    "explanation": "Nazwa tej formacji wynika z jej położenia w pobliżu równika."
  },
  {
    "id": "R04_ROW_03",
    "section": "Wilgotne lasy równikowe",
    "type": "fill_in",
    "prompt": "Wilgotny las równikowy nazywa się także lasem __________, ponieważ przez cały rok występują tam znaczne opady.",
    "options": null,
    "answer": [
      "deszczowym"
    ],
    "altAnswers": [
      [
        "deszczowym",
        "deszczowy",
        "deszczowym lasem"
      ]
    ],
    "explanation": "Duża ilość opadów przez cały rok sprawia, że lasy te określa się jako deszczowe."
  },
  {
    "id": "R04_ROW_04",
    "section": "Wilgotne lasy równikowe",
    "type": "multi_select",
    "prompt": "Zaznacz cechy klimatu równikowego opisane w podręczniku.",
    "options": [
      "Bardzo wysoka wilgotność.",
      "Częste burze.",
      "Brak pór roku innych niż lato.",
      "Rocznie spada 4-5 razy więcej deszczu niż w Polsce.",
      "Długa mroźna zima.",
      "Kilkumiesięczna pora bez opadów."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Klimat równikowy jest gorący i bardzo wilgotny, bez pór roku innych niż lato, z częstymi burzami i bardzo dużymi opadami."
  },
  {
    "id": "R04_ROW_05",
    "section": "Wilgotne lasy równikowe",
    "type": "riddle",
    "prompt": "Rośliny, które wyrastają na pniach innych drzew, aby mieć lepszy dostęp do światła, to...",
    "options": null,
    "answer": "epifity",
    "altAnswers": [
      "epifity",
      "epifit",
      "Epifity"
    ],
    "explanation": "Epifity, na przykład storczyki, wykorzystują inne rośliny jako podpory."
  },
  {
    "id": "R04_ROW_06",
    "section": "Wilgotne lasy równikowe",
    "type": "match",
    "prompt": "Połącz zwierzę z obszarem, dla którego jest typowe w lekcji o lasach równikowych.",
    "options": null,
    "left": [
      "kapucynka",
      "goryl",
      "orangutan",
      "anakonda zielona"
    ],
    "right": [
      "Ameryka Południowa",
      "Afryka",
      "Azja",
      "rozlewiska Amazonki"
    ],
    "answer": {
      "kapucynka": "Ameryka Południowa",
      "goryl": "Afryka",
      "orangutan": "Azja",
      "anakonda zielona": "rozlewiska Amazonki"
    },
    "image": "/img/r04_zwierzeta_lasu_rownikowego.jpg",
    "explanation": "Skład gatunkowy lasów równikowych różni się między kontynentami."
  },
  {
    "id": "R04_ROW_07",
    "section": "Wilgotne lasy równikowe",
    "type": "sequence",
    "prompt": "Ułóż warstwy wilgotnego lasu równikowego od najwyższej do najniższej.",
    "options": null,
    "items": [
      "runo leśne",
      "drzewa o gęstych koronach",
      "podszyt",
      "pojedyncze drzewa olbrzymy",
      "niskie drzewa"
    ],
    "answer": [
      "pojedyncze drzewa olbrzymy",
      "drzewa o gęstych koronach",
      "niskie drzewa",
      "podszyt",
      "runo leśne"
    ],
    "image": "/img/r04_warstwy_lasu_rownikowego.jpg",
    "explanation": "Warstwy lasu równikowego obejmują najwyżej drzewa olbrzymy, a najniżej runo leśne."
  },
  {
    "id": "R04_ROW_08",
    "section": "Wilgotne lasy równikowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: liana, epifit, korzeń podporowy, czarnoziem.",
    "options": null,
    "answer": "czarnoziem",
    "explanation": "Liany, epifity i korzenie podporowe wiążą się z wilgotnym lasem równikowym, a czarnoziem z żyznymi glebami stepów."
  },
  {
    "id": "R04_ROW_09",
    "section": "Wilgotne lasy równikowe",
    "type": "scenario",
    "prompt": "Roślina w dolnej warstwie lasu ma za mało światła. Nie rośnie samodzielnie wysoko, lecz wspina się po pniach i gałęziach drzew. Jaką strategię wykorzystuje?",
    "options": [
      "Jest lianą",
      "Zrzuca liście na zimę",
      "Magazynuje wodę w pniu",
      "Tworzy czarnoziem"
    ],
    "answer": 0,
    "image": "/img/r04_warstwy_lasu_rownikowego.jpg",
    "explanation": "Liany wspinają się po pniach i gałęziach, aby dotrzeć do bardziej nasłonecznionych miejsc."
  },
  {
    "id": "R04_ROW_10",
    "section": "Wilgotne lasy równikowe",
    "type": "sort",
    "prompt": "Podziel przykłady na rośliny i zwierzęta wilgotnego lasu równikowego.",
    "options": null,
    "items": [
      "liany",
      "epifity",
      "mahoniowce",
      "kakaowce",
      "goryle",
      "orangutany",
      "kapucynki",
      "anakondy"
    ],
    "categories": [
      "rośliny",
      "zwierzęta"
    ],
    "answer": {
      "rośliny": [
        "liany",
        "epifity",
        "mahoniowce",
        "kakaowce"
      ],
      "zwierzęta": [
        "goryle",
        "orangutany",
        "kapucynki",
        "anakondy"
      ]
    },
    "explanation": "Wilgotny las równikowy wyróżnia się ogromnym bogactwem zarówno roślin, jak i zwierząt."
  },
  {
    "id": "R04_ROW_11",
    "section": "Wilgotne lasy równikowe",
    "type": "true_false",
    "prompt": "Wilgotne lasy równikowe w różnych częściach świata mają identyczny skład gatunkowy.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik zaznacza, że lasy równikowe w różnych częściach świata nie są identyczne pod względem składu gatunkowego."
  },
  {
    "id": "R04_ROW_12",
    "section": "Wilgotne lasy równikowe",
    "type": "scenario",
    "prompt": "W wiosce w lesie równikowym domy buduje się z drewna, gliny i liści, a okoliczne rośliny wykorzystuje się oszczędnie, aby nie doprowadzić do ich wyginięcia. Co najlepiej opisuje taki sposób życia?",
    "options": [
      "Życie w zgodzie z przyrodą",
      "Przemysłowa wycinka lasu",
      "Rolnictwo na czarnoziemach",
      "Pasterstwo koczownicze"
    ],
    "answer": 0,
    "explanation": "Część rdzennych mieszkańców wilgotnych lasów równikowych żyje w zgodzie z przyrodą i korzysta z lokalnych zasobów oszczędnie."
  },
  {
    "id": "R04_LAS_01",
    "section": "Lasy strefy umiarkowanej",
    "type": "single_choice",
    "prompt": "W których częściach świata występują lasy strefy umiarkowanej według podręcznika?",
    "options": [
      "W Europie, Azji i Ameryce Północnej",
      "Wyłącznie w Amazonii",
      "Tylko na Antarktydzie",
      "Wyłącznie w Afryce równikowej",
      "Tylko na wyspach Oceanii",
      "Wyłącznie na Saharze"
    ],
    "answer": 0,
    "explanation": "Klimat umiarkowany i lasy tej strefy występują m.in. w Europie, Azji i Ameryce Północnej."
  },
  {
    "id": "R04_LAS_02",
    "section": "Lasy strefy umiarkowanej",
    "type": "true_false",
    "prompt": "W klimacie umiarkowanym występują termiczne pory roku.",
    "options": null,
    "answer": true,
    "explanation": "Termiczne pory roku są jedną z cech klimatu umiarkowanego omawianych w lekcji."
  },
  {
    "id": "R04_LAS_03",
    "section": "Lasy strefy umiarkowanej",
    "type": "fill_in",
    "prompt": "Wiele roślin w klimacie umiarkowanym pozbywa się liści, chroniąc się przed __________.",
    "options": null,
    "answer": [
      "przemarznięciem"
    ],
    "altAnswers": [
      [
        "przemarznięciem",
        "przemarznieciem",
        "mrozem",
        "zamarznięciem",
        "zamarznieciem"
      ]
    ],
    "explanation": "Zrzucanie liści pomaga roślinom przetrwać chłodny okres roku."
  },
  {
    "id": "R04_LAS_04",
    "section": "Lasy strefy umiarkowanej",
    "type": "multi_select",
    "prompt": "Zaznacz zwierzęta wymienione jako żyjące w lasach strefy umiarkowanej.",
    "options": [
      "jeleń",
      "wilk",
      "dzik",
      "rzekotka drzewna",
      "orangutan",
      "lew"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W lasach strefy umiarkowanej spotyka się m.in. jelenie, wilki, dziki, rzekotki, zaskrońce, puszczyki i zięby."
  },
  {
    "id": "R04_LAS_05",
    "section": "Lasy strefy umiarkowanej",
    "type": "match",
    "prompt": "Połącz termiczną porę roku w Polsce z zakresem temperatury podanym w lekcji.",
    "options": null,
    "left": [
      "lato",
      "zima",
      "wiosna i jesień",
      "przedwiośnie i przedzimie"
    ],
    "right": [
      "powyżej 15°C",
      "poniżej 0°C",
      "od 5 do 15°C",
      "od 0 do 5°C"
    ],
    "answer": {
      "lato": "powyżej 15°C",
      "zima": "poniżej 0°C",
      "wiosna i jesień": "od 5 do 15°C",
      "przedwiośnie i przedzimie": "od 0 do 5°C"
    },
    "image": "/img/r04_las_umiarkowany_pory_roku.jpg",
    "explanation": "Diagram w lekcji opisuje pory roku w Polsce według temperatury powietrza."
  },
  {
    "id": "R04_LAS_06",
    "section": "Lasy strefy umiarkowanej",
    "type": "sequence",
    "prompt": "Ułóż proces przemiany krajobrazu leśnego w rolniczy w strefie umiarkowanej.",
    "options": null,
    "items": [
      "Ludzie wykarczowali wiele lasów.",
      "Drzewa liściaste zrzucają liście.",
      "Z rozłożonych szczątków powstaje próchnica.",
      "Gleba bogata w próchnicę jest żyzna.",
      "Opadłe liście rozkładają organizmy glebowe."
    ],
    "answer": [
      "Drzewa liściaste zrzucają liście.",
      "Opadłe liście rozkładają organizmy glebowe.",
      "Z rozłożonych szczątków powstaje próchnica.",
      "Gleba bogata w próchnicę jest żyzna.",
      "Ludzie wykarczowali wiele lasów."
    ],
    "image": "/img/r04_przemiana_lasu_w_pole.jpg",
    "explanation": "W strefie umiarkowanej opadłe liście tworzą próchnicę, a żyzne gleby sprzyjały zamianie lasów w pola."
  },
  {
    "id": "R04_LAS_07",
    "section": "Lasy strefy umiarkowanej",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: dąb, buk, sosna, baobab.",
    "options": null,
    "answer": "baobab",
    "explanation": "Dąb, buk i sosna występują w lasach strefy umiarkowanej, a baobab jest kojarzony z sawanną."
  },
  {
    "id": "R04_LAS_08",
    "section": "Lasy strefy umiarkowanej",
    "type": "scenario",
    "prompt": "Porównujesz dwa miejsca w klimacie umiarkowanym. Jedno leży blisko morza i ma bardziej wyrównaną temperaturę w ciągu roku, drugie leży głęboko w lądzie i ma większą zmienność sezonową. Co wyjaśnia tę różnicę?",
    "options": [
      "Odległość od wybrzeża morskiego",
      "Występowanie lian",
      "Stałe zamarznięcie gruntu",
      "Brak organizmów glebowych"
    ],
    "answer": 0,
    "explanation": "Miejsca położone blisko wybrzeży morskich mają bardziej wyrównaną temperaturę niż obszary położone w głębi lądu."
  },
  {
    "id": "R04_LAS_09",
    "section": "Lasy strefy umiarkowanej",
    "type": "riddle",
    "prompt": "Składnik gleby powstający z rozłożonych szczątków organizmów to...",
    "options": null,
    "answer": "próchnica",
    "altAnswers": [
      "próchnica",
      "prochnica",
      "Próchnica"
    ],
    "explanation": "Próchnica powstaje z rozłożonych szczątków organizmów i zwiększa żyzność gleby."
  },
  {
    "id": "R04_LAS_10",
    "section": "Lasy strefy umiarkowanej",
    "type": "sort",
    "prompt": "Podziel przykłady na rośliny i zwierzęta lasów strefy umiarkowanej.",
    "options": null,
    "items": [
      "dąb",
      "buk",
      "sosna",
      "narecznica samcza",
      "jeleń",
      "wilk",
      "dzik",
      "puszczyk"
    ],
    "categories": [
      "rośliny",
      "zwierzęta"
    ],
    "answer": {
      "rośliny": [
        "dąb",
        "buk",
        "sosna",
        "narecznica samcza"
      ],
      "zwierzęta": [
        "jeleń",
        "wilk",
        "dzik",
        "puszczyk"
      ]
    },
    "explanation": "Lekcja wymienia zarówno rośliny, jak i liczne zwierzęta charakterystyczne dla lasów umiarkowanych."
  },
  {
    "id": "R04_LAS_11",
    "section": "Lasy strefy umiarkowanej",
    "type": "true_false",
    "prompt": "W klimacie umiarkowanym opady występują przez cały rok, ale ich wysokość nie wszędzie jest jednakowa.",
    "options": null,
    "answer": true,
    "explanation": "Wysokość opadów rośnie m.in. w miarę zbliżania się do wybrzeży oraz na terenach wyżej położonych."
  },
  {
    "id": "R04_LAS_12",
    "section": "Lasy strefy umiarkowanej",
    "type": "fill_in",
    "prompt": "W cieplejszej odmianie klimatu umiarkowanego naturalną roślinność stanowią __________, a w chłodnej odmianie przeważają lasy iglaste, czyli __________.",
    "options": null,
    "answer": [
      "lasy liściaste i mieszane",
      "tajga"
    ],
    "altAnswers": [
      [
        "lasy liściaste i mieszane",
        "lasy lisciaste i mieszane"
      ],
      [
        "tajga",
        "tajgą",
        "tajge",
        "tajgę"
      ]
    ],
    "explanation": "Podręcznik odróżnia lasy liściaste i mieszane od lasów iglastych nazywanych tajgą."
  },
  {
    "id": "R04_SAW_01",
    "section": "Sawanna i step",
    "type": "single_choice",
    "prompt": "Dlaczego na sawannie i stepie rośnie niewiele drzew?",
    "options": [
      "Z powodu niedostatku wody",
      "Z powodu codziennych mrozów przez cały rok",
      "Z powodu całkowitego braku światła",
      "Z powodu stałego lodu na powierzchni",
      "Z powodu zbyt dużej liczby epifitów",
      "Z powodu bardzo głębokiego oceanu"
    ],
    "answer": 0,
    "explanation": "Najważniejszym ograniczeniem na sawannie i stepie jest niedostatek wody."
  },
  {
    "id": "R04_SAW_02",
    "section": "Sawanna i step",
    "type": "sequence",
    "prompt": "Ułóż typy sawanny w kolejności oddalania się od równika.",
    "options": null,
    "items": [
      "sawanna sucha",
      "sawanna parkowa",
      "sawanna akacjowa"
    ],
    "answer": [
      "sawanna parkowa",
      "sawanna akacjowa",
      "sawanna sucha"
    ],
    "image": "/img/r04_sawanna_pora_sucha_deszczowa.jpg",
    "explanation": "Wraz z oddalaniem się od równika krajobraz przechodzi od sawanny parkowej przez akacjową do suchej."
  },
  {
    "id": "R04_SAW_03",
    "section": "Sawanna i step",
    "type": "true_false",
    "prompt": "Na sawannie wyraźnie zaznacza się pora sucha i pora deszczowa.",
    "options": null,
    "answer": true,
    "image": "/img/r04_sawanna_pora_sucha_deszczowa.jpg",
    "explanation": "W porze suchej przez kilka miesięcy nie pada deszcz, a w porze deszczowej trawy odradzają się."
  },
  {
    "id": "R04_SAW_04",
    "section": "Sawanna i step",
    "type": "fill_in",
    "prompt": "W porze suchej trawy na sawannie __________, a wraz z nadejściem pory deszczowej __________.",
    "options": null,
    "answer": [
      "wysychają",
      "odradzają się"
    ],
    "altAnswers": [
      [
        "wysychają",
        "wysychaja"
      ],
      [
        "odradzają się",
        "odradzaja sie",
        "odrastają",
        "odrastaja"
      ]
    ],
    "image": "/img/r04_sawanna_pora_sucha_deszczowa.jpg",
    "explanation": "Brak wody powoduje wysychanie traw, ale po powrocie opadów roślinność się odradza."
  },
  {
    "id": "R04_SAW_05",
    "section": "Sawanna i step",
    "type": "multi_select",
    "prompt": "Zaznacz zwierzęta żyjące na sawannie wymienione w lekcji.",
    "options": [
      "antylopa",
      "zebra",
      "słoń",
      "nosorożec",
      "lew",
      "suhak"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Na sawannie żyją m.in. antylopy, zebry, słonie, nosorożce oraz drapieżniki, takie jak lwy i gepardy."
  },
  {
    "id": "R04_SAW_06",
    "section": "Sawanna i step",
    "type": "match",
    "prompt": "Połącz nazwę obszaru trawiastego z miejscem, w którym używa się tej nazwy.",
    "options": null,
    "left": [
      "step",
      "preria",
      "pampa",
      "sawanna"
    ],
    "right": [
      "Europa i Azja",
      "Ameryka Północna",
      "Ameryka Południowa",
      "ciepłe obszary z porą suchą i deszczową"
    ],
    "answer": {
      "step": "Europa i Azja",
      "preria": "Ameryka Północna",
      "pampa": "Ameryka Południowa",
      "sawanna": "ciepłe obszary z porą suchą i deszczową"
    },
    "explanation": "Step ma regionalne nazwy: w Ameryce Północnej nazywa się prerią, a w Ameryce Południowej pampą."
  },
  {
    "id": "R04_SAW_07",
    "section": "Sawanna i step",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: zebra, żyrafa, słoń, drop.",
    "options": null,
    "answer": "drop",
    "explanation": "Zebra, żyrafa i słoń są typowe dla sawanny, a drop jest wymieniony jako zwierzę stepu."
  },
  {
    "id": "R04_SAW_08",
    "section": "Sawanna i step",
    "type": "scenario",
    "prompt": "Pasterz w suchym regionie przenosi się ze stadami tam, gdzie spadł deszcz i wyrosła trawa. Jak nazywa się taki wędrowny tryb życia?",
    "options": [
      "Koczowniczy tryb życia",
      "Życie osiadłe w mieście",
      "Piętrowość roślinna",
      "Zbieractwo w lesie równikowym"
    ],
    "answer": 0,
    "image": "/img/r04_step_jurta_i_pasterstwo.jpg",
    "explanation": "Ludzi prowadzących koczowniczy, wędrowny tryb życia podręcznik nazywa nomadami."
  },
  {
    "id": "R04_SAW_09",
    "section": "Sawanna i step",
    "type": "riddle",
    "prompt": "Przenośny dom przypominający namiot, zbudowany z drewna, tkanin i skór zwierzęcych, typowy dla azjatyckich stepów, to...",
    "options": null,
    "answer": "jurta",
    "altAnswers": [
      "jurta",
      "Jurta"
    ],
    "image": "/img/r04_step_jurta_i_pasterstwo.jpg",
    "explanation": "Jurta jest domem, który można łatwo rozłożyć i przenieść w inne miejsce."
  },
  {
    "id": "R04_SAW_10",
    "section": "Sawanna i step",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do sawanny albo stepu.",
    "options": null,
    "items": [
      "przez cały rok gorąco",
      "pora sucha i deszczowa",
      "akacje i baobaby",
      "zima bywa mroźna",
      "czarnoziemy",
      "preria i pampa"
    ],
    "categories": [
      "sawanna",
      "step"
    ],
    "answer": {
      "sawanna": [
        "przez cały rok gorąco",
        "pora sucha i deszczowa",
        "akacje i baobaby"
      ],
      "step": [
        "zima bywa mroźna",
        "czarnoziemy",
        "preria i pampa"
      ]
    },
    "image": "/img/r04_formacje_porownanie.jpg",
    "explanation": "Sawanna jest gorąca przez cały rok i ma porę suchą oraz deszczową, a step leży w klimacie umiarkowanym i może mieć mroźne zimy."
  },
  {
    "id": "R04_SAW_11",
    "section": "Sawanna i step",
    "type": "fill_in",
    "prompt": "Bardzo żyzne gleby stepowe to __________; uprawia się na nich m.in. pszenicę, kukurydzę, rzepak i __________.",
    "options": null,
    "answer": [
      "czarnoziemy",
      "słoneczniki"
    ],
    "altAnswers": [
      [
        "czarnoziemy",
        "czarnoziem",
        "czarnoziemach"
      ],
      [
        "słoneczniki",
        "sloneczniki",
        "słonecznik",
        "slonecznik"
      ]
    ],
    "explanation": "W łagodniejszych częściach stepów czarnoziemy wykorzystuje się pod uprawy, m.in. słoneczników."
  },
  {
    "id": "R04_SAW_12",
    "section": "Sawanna i step",
    "type": "true_false",
    "prompt": "Stepy w Europie zostały w większości przekształcone w pola uprawne.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podkreśla, że europejskie stepy w dużej części zamieniono w pola, m.in. dzięki żyznym czarnoziemom."
  },
  {
    "id": "R04_MIE_01",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz formację roślinną z jej charakterystyczną cechą.",
    "options": null,
    "left": [
      "wilgotny las równikowy",
      "las strefy umiarkowanej",
      "sawanna",
      "step"
    ],
    "right": [
      "brak pór roku innych niż lato",
      "drzewa zrzucają liście na zimę",
      "pora sucha i deszczowa",
      "czarnoziemy i obszary trawiaste"
    ],
    "answer": {
      "wilgotny las równikowy": "brak pór roku innych niż lato",
      "las strefy umiarkowanej": "drzewa zrzucają liście na zimę",
      "sawanna": "pora sucha i deszczowa",
      "step": "czarnoziemy i obszary trawiaste"
    },
    "image": "/img/r04_formacje_porownanie.jpg",
    "explanation": "Powtórka łączy najważniejsze cechy krajobrazów opisanych w rozdziale."
  },
  {
    "id": "R04_MIE_02",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do krajobrazu, z którym najściślej się kojarzą.",
    "options": null,
    "items": [
      "liany",
      "epifity",
      "akacje",
      "baobaby",
      "próchnica",
      "pory roku",
      "czarnoziemy",
      "jurta"
    ],
    "categories": [
      "las równikowy",
      "sawanna",
      "las umiarkowany",
      "step"
    ],
    "answer": {
      "las równikowy": [
        "liany",
        "epifity"
      ],
      "sawanna": [
        "akacje",
        "baobaby"
      ],
      "las umiarkowany": [
        "próchnica",
        "pory roku"
      ],
      "step": [
        "czarnoziemy",
        "jurta"
      ]
    },
    "explanation": "Każde pojęcie pochodzi z jednej z czterech głównych lekcji rozdziału."
  },
  {
    "id": "R04_MIE_03",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż etapy zmiany krajobrazu od równika ku północnej części Kamerunu opisane w podróży przez Afrykę.",
    "options": null,
    "items": [
      "sucha sawanna z pożółkłymi trawami",
      "wilgotny las równikowy",
      "rzadszy las z krzewami i trawą",
      "sawanna przypominająca park"
    ],
    "answer": [
      "wilgotny las równikowy",
      "rzadszy las z krzewami i trawą",
      "sawanna przypominająca park",
      "sucha sawanna z pożółkłymi trawami"
    ],
    "image": "/img/r04_sawanna_pora_sucha_deszczowa.jpg",
    "explanation": "W podróży z Gabonu do północnego Kamerunu bujny las przechodzi stopniowo w krajobraz sawanny."
  },
  {
    "id": "R04_MIE_04",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Uczeń porównuje dwa lasy. W pierwszym rośliny utrzymują liście przez cały rok, a temperatura nocą rzadko spada poniżej 20°C. W drugim wiele roślin zrzuca liście na zimę. Jakie lasy porównuje?",
    "options": [
      "Wilgotny las równikowy i las strefy umiarkowanej",
      "Sawannę i step",
      "Tundrę i pustynię lodową",
      "Tajgę i sawannę"
    ],
    "answer": 0,
    "image": "/img/r04_formacje_porownanie.jpg",
    "explanation": "Pierwszy opis dotyczy wilgotnego lasu równikowego, a drugi lasu strefy umiarkowanej."
  },
  {
    "id": "R04_MIE_05",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które w rozdziale wpływają na zróżnicowanie klimatu i roślinności.",
    "options": [
      "Ilość energii słonecznej docierającej do powierzchni Ziemi.",
      "Temperatura powietrza.",
      "Wysokość opadów.",
      "Wysokość nad poziomem morza.",
      "Położenie względem wybrzeży morskich.",
      "Kolor piór ptaków."
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rozdział opisuje wpływ energii słonecznej, temperatury, opadów, wysokości nad poziomem morza oraz położenia względem wybrzeży."
  },
  {
    "id": "R04_MIE_06",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Amazonia, Kotlina Konga, Archipelag Malajski, Serengeti.",
    "options": null,
    "answer": "Serengeti",
    "explanation": "Amazonia, Kotlina Konga i Archipelag Malajski to główne obszary wilgotnych lasów równikowych, a Serengeti jest parkiem sawanny we wschodniej Afryce."
  },
  {
    "id": "R04_MIE_07",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "Niedostatek wody jest dużym problemem zarówno na stepie, jak i na sawannie.",
    "options": null,
    "answer": true,
    "explanation": "Podsumowanie lekcji o sawannie i stepie wskazuje niedostatek wody jako wspólne wyzwanie."
  },
  {
    "id": "R04_MIE_08",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Klimatogram przedstawia przebieg średnich miesięcznych __________ oraz średnią miesięczną wysokość __________.",
    "options": null,
    "answer": [
      "temperatur powietrza",
      "opadów"
    ],
    "altAnswers": [
      [
        "temperatur powietrza",
        "temperatur",
        "temperatury powietrza"
      ],
      [
        "opadów",
        "opadow",
        "opadów atmosferycznych",
        "opadow atmosferycznych"
      ]
    ],
    "explanation": "Klimatogram służy do graficznego przedstawiania temperatury powietrza i opadów."
  },
  {
    "id": "R04_MIE_09",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Który krajobraz pasuje do opisu: bardzo gorąco i wilgotno przez cały rok, prawie codzienne opady, brak pór roku innych niż lato?",
    "options": [
      "Wilgotny las równikowy",
      "Step",
      "Pustynia lodowa",
      "Las strefy umiarkowanej",
      "Tundra",
      "Sucha sawanna"
    ],
    "answer": 0,
    "explanation": "Takie warunki są typowe dla wilgotnego lasu równikowego."
  },
  {
    "id": "R04_MIE_10",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz zwierzę z krajobrazem, w którym zostało omówione.",
    "options": null,
    "left": [
      "goryl",
      "wilk",
      "lew",
      "nieświszczuk"
    ],
    "right": [
      "wilgotny las równikowy",
      "las strefy umiarkowanej",
      "sawanna",
      "step"
    ],
    "answer": {
      "goryl": "wilgotny las równikowy",
      "wilk": "las strefy umiarkowanej",
      "lew": "sawanna",
      "nieświszczuk": "step"
    },
    "explanation": "Zwierzęta pomagają odróżnić omawiane krajobrazy: las równikowy, las umiarkowany, sawannę i step."
  },
  {
    "id": "R04_MIE_11",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Zdobywanie pożywienia dzięki polowaniu na zwierzęta to...",
    "options": null,
    "answer": "łowiectwo",
    "altAnswers": [
      "łowiectwo",
      "lowiectwo",
      "Łowiectwo"
    ],
    "explanation": "Słowniczek rozdziału definiuje łowiectwo jako zdobywanie pożywienia dzięki polowaniu na zwierzęta."
  },
  {
    "id": "R04_MIE_12",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj działania człowieka do krajobrazu, w którym zostały opisane.",
    "options": null,
    "items": [
      "budowanie domów z drewna, gliny i liści",
      "łowiectwo i zbieractwo",
      "wycinanie lasów pod pola uprawne",
      "pozyskiwanie drewna",
      "kopanie dołków dla wody",
      "wędrówki ze stadami"
    ],
    "categories": [
      "wilgotny las równikowy",
      "las strefy umiarkowanej",
      "sawanna i step"
    ],
    "answer": {
      "wilgotny las równikowy": [
        "budowanie domów z drewna, gliny i liści",
        "łowiectwo i zbieractwo"
      ],
      "las strefy umiarkowanej": [
        "wycinanie lasów pod pola uprawne",
        "pozyskiwanie drewna"
      ],
      "sawanna i step": [
        "kopanie dołków dla wody",
        "wędrówki ze stadami"
      ]
    },
    "explanation": "W różnych krajobrazach ludzie inaczej korzystają z zasobów przyrody."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które dwa miejsca podręcznik wymienia jako należące do najbardziej suchych na Ziemi?",
    "options": [
      "Pustynia Atacama i Antarktyda",
      "Amazonia i Kotlina Konga",
      "Kuala Lumpur i Warszawa",
      "Serengeti i Borneo",
      "Londyn i Berlin",
      "Ukraina i Mongolia"
    ],
    "answer": 0,
    "explanation": "W ciekawostce wskazano pustynię Atacama w Ameryce Południowej oraz Antarktydę."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W centralnych częściach Antarktydy opady są bardzo skąpe i występują niemal wyłącznie w postaci śniegu.",
    "options": null,
    "answer": true,
    "explanation": "Tak opisano centralne części Antarktydy w ciekawostce o najbardziej suchych miejscach na Ziemi."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Winnice u podnóży Andów wymagają klimatu __________ i __________, natomiast wysoko w górach klimat jest dużo chłodniejszy.",
    "options": null,
    "answer": [
      "łagodnego",
      "ciepłego"
    ],
    "altAnswers": [
      [
        "łagodnego",
        "lagodnego",
        "łagodny",
        "lagodny"
      ],
      [
        "ciepłego",
        "cieplego",
        "ciepły",
        "cieply"
      ]
    ],
    "image": "/img/r04_pietrowosc_roslinnosci_gory.jpg",
    "explanation": "Przykład Andów pokazuje, że wysokość nad poziomem morza wpływa na warunki klimatyczne."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz rośliny wymienione w tabeli jako typowe dla mieszanego lasu strefy umiarkowanej.",
    "options": [
      "dąb",
      "buk",
      "klon",
      "sosna",
      "liana",
      "kakaowiec"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W porównaniu lasów wymieniono m.in. dąb, buk, lipę, grab, klon, sosnę, świerk, modrzew i paprocie."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz opis miejsca z właściwą cechą klimatu lub opadów.",
    "options": null,
    "left": [
      "miejsce blisko wybrzeża morskiego",
      "obszar położony w głębi lądu",
      "teren bardziej wzniesiony",
      "klimat równikowy"
    ],
    "right": [
      "bardziej wyrównana temperatura w ciągu roku",
      "duża sezonowa zmienność temperatury",
      "większe opady",
      "brak pór roku innych niż lato"
    ],
    "answer": {
      "miejsce blisko wybrzeża morskiego": "bardziej wyrównana temperatura w ciągu roku",
      "obszar położony w głębi lądu": "duża sezonowa zmienność temperatury",
      "teren bardziej wzniesiony": "większe opady",
      "klimat równikowy": "brak pór roku innych niż lato"
    },
    "explanation": "Lekcja o klimacie umiarkowanym porównuje wybrzeża, wnętrza lądów i obszary wzniesione."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: łowiectwo, zbieractwo, oszczędne korzystanie z roślin, przemysłowa wycinka drzew.",
    "options": null,
    "answer": "przemysłowa wycinka drzew",
    "explanation": "Pierwsze trzy elementy pasują do życia części rdzennych mieszkańców lasów równikowych w zgodzie z przyrodą, a przemysłowa wycinka zagraża tym lasom."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na klimatogramie sawanny w Maroua prawie brak opadów od listopada do marca, a od kwietnia do października opady są wyraźnie większe. Jak należy nazwać te dwa okresy?",
    "options": [
      "Listopad-marzec: pora sucha; kwiecień-październik: pora deszczowa",
      "Listopad-marzec: pora deszczowa; kwiecień-październik: pora sucha",
      "Cały rok: zima",
      "Cały rok: pora lodowa"
    ],
    "answer": 0,
    "image": "/img/r04_klimatogram_sawanny.jpg",
    "explanation": "Dla sawanny charakterystyczne są pora sucha i pora deszczowa."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Naturalna właściwość gleby zapewniająca roślinom odpowiednie warunki rozwoju, zwłaszcza obecność składników odżywczych, to...",
    "options": null,
    "answer": "żyzność gleby",
    "altAnswers": [
      "żyzność gleby",
      "zyznosc gleby",
      "żyzność",
      "zyznosc"
    ],
    "explanation": "Słowniczek rozdziału definiuje tę właściwość jako żyzność gleby."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż ciąg przyczynowo-skutkowy prowadzący do powstania pól uprawnych w strefie umiarkowanej.",
    "options": null,
    "items": [
      "Powstaje próchnica.",
      "Rolnicy wykorzystują żyzne gleby.",
      "Opadłe liście są rozkładane.",
      "Drzewa zrzucają liście na zimę.",
      "Lasy zostają zamienione w pola."
    ],
    "answer": [
      "Drzewa zrzucają liście na zimę.",
      "Opadłe liście są rozkładane.",
      "Powstaje próchnica.",
      "Rolnicy wykorzystują żyzne gleby.",
      "Lasy zostają zamienione w pola."
    ],
    "image": "/img/r04_przemiana_lasu_w_pole.jpg",
    "explanation": "Żyzne gleby powstałe dzięki próchnicy sprzyjały wykorzystywaniu dawnych terenów leśnych rolniczo."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Gleby wilgotnego lasu równikowego są szczególnie bogate w składniki pokarmowe, ponieważ obfite deszcze ich nie wypłukują.",
    "options": null,
    "answer": false,
    "explanation": "W tabeli porównawczej wskazano odwrotnie: obfite deszcze wypłukują z gleby cenne składniki."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do obszaru, którego dotyczą najściślej.",
    "options": null,
    "items": [
      "korzenie podporowe",
      "epifity",
      "próchnica",
      "zrzucanie liści",
      "pora sucha",
      "pora deszczowa",
      "jurta",
      "nomadzi"
    ],
    "categories": [
      "wilgotny las równikowy",
      "las strefy umiarkowanej",
      "sawanna",
      "step"
    ],
    "answer": {
      "wilgotny las równikowy": [
        "korzenie podporowe",
        "epifity"
      ],
      "las strefy umiarkowanej": [
        "próchnica",
        "zrzucanie liści"
      ],
      "sawanna": [
        "pora sucha",
        "pora deszczowa"
      ],
      "step": [
        "jurta",
        "nomadzi"
      ]
    },
    "explanation": "To zadanie łączy słowniczek i porównania z kilku miejsc rozdziału."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz nazwę z regionem lub kontynentem wskazanym w rozdziale.",
    "options": null,
    "left": [
      "Amazonia",
      "Kotlina Konga",
      "Archipelag Malajski",
      "Serengeti",
      "Ułan Bator"
    ],
    "right": [
      "Ameryka Południowa",
      "Afryka",
      "Azja Południowo-Wschodnia",
      "wschodnia Afryka",
      "Mongolia"
    ],
    "answer": {
      "Amazonia": "Ameryka Południowa",
      "Kotlina Konga": "Afryka",
      "Archipelag Malajski": "Azja Południowo-Wschodnia",
      "Serengeti": "wschodnia Afryka",
      "Ułan Bator": "Mongolia"
    },
    "explanation": "Rozdział podaje przykłady miejsc występowania lasów równikowych, sawann i stepów."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Krajobrazy świata, część 1",
  icon: "🌍",
  sectionOrder: [
  "Strefowość i piętrowość klimatyczno-roślinna",
  "Wilgotne lasy równikowe",
  "Lasy strefy umiarkowanej",
  "Sawanna i step",
  "Powtórka mieszana",
  "Super trudne"
],
  sectionIcons: {
  "Strefowość i piętrowość klimatyczno-roślinna": "🌐",
  "Wilgotne lasy równikowe": "🌳",
  "Lasy strefy umiarkowanej": "🍂",
  "Sawanna i step": "🦁",
  "Powtórka mieszana": "🧭",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
