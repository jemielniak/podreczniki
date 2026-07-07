// Skróty sekcji:
//   POL = Starożytna Grecja i polis
//   DEM = Demokracja ateńska
//   MIT = Mitologia grecka
//   OSI = Osiągnięcia Greków
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_POL_01",
    "section": "Starożytna Grecja i polis",
    "type": "single_choice",
    "prompt": "Gdzie leży Grecja?",
    "options": [
      "Na północy Europy",
      "Na południu Europy",
      "W środkowej Azji",
      "W Afryce Północnej",
      "Na Półwyspie Apenińskim",
      "Na Wyspach Brytyjskich"
    ],
    "answer": 1,
    "explanation": "Podręcznik podaje, że Grecja leży na południu Europy."
  },
  {
    "id": "R02_POL_02",
    "section": "Starożytna Grecja i polis",
    "type": "multi_select",
    "prompt": "Zaznacz elementy krajobrazu i warunków życia w starożytnej Grecji opisane w podręczniku.",
    "options": [
      "Górzysty kraj",
      "Ubogie, skaliste ziemie",
      "Rozległe żyzne równiny nad Nilem",
      "Osady w dolinach i nad morzem",
      "Ponad dwa tysiące wysp i wysepek",
      "Całkowity brak dostępu do morza"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Grecja była górzysta, miała ubogą skalistą ziemię, a Grecy osiedlali się w dolinach i nad morzem."
  },
  {
    "id": "R02_POL_03",
    "section": "Starożytna Grecja i polis",
    "type": "true_false",
    "prompt": "Starożytni Grecy utworzyli jedno wspólne państwo obejmujące całą Helladę.",
    "options": null,
    "answer": false,
    "explanation": "Góry oddzielały doliny, więc Grecy nie utworzyli jednego państwa."
  },
  {
    "id": "R02_POL_04",
    "section": "Starożytna Grecja i polis",
    "type": "fill_in",
    "prompt": "Miasta-państwa w starożytnej Grecji nazywano __________.",
    "options": null,
    "answer": [
      "polis"
    ],
    "altAnswers": [
      [
        "polis",
        "poleis"
      ]
    ],
    "explanation": "Polis to greckie miasto-państwo, zwykle obejmujące miasto z okolicą albo wyspę."
  },
  {
    "id": "R02_POL_05",
    "section": "Starożytna Grecja i polis",
    "type": "single_choice",
    "prompt": "Jak Grecy nazywali swój kraj?",
    "options": [
      "Helladą",
      "Itaką",
      "Troją",
      "Olimpią",
      "Delfami",
      "Ateną"
    ],
    "answer": 0,
    "explanation": "Grecy nazywali swój kraj Helladą, a siebie Hellenami."
  },
  {
    "id": "R02_POL_06",
    "section": "Starożytna Grecja i polis",
    "type": "single_choice",
    "prompt": "Jak Grecy nazywali samych siebie?",
    "options": [
      "Hellenami",
      "Rzymianami",
      "Egipcjanami",
      "Persami",
      "Barbarzyńcami",
      "Fenicianami"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że Grecy nazywali siebie Hellenami."
  },
  {
    "id": "R02_POL_07",
    "section": "Starożytna Grecja i polis",
    "type": "riddle",
    "prompt": "Jedno greckie miasto-państwo, czyli miasto z okolicą albo wyspa, to...",
    "options": null,
    "answer": "polis",
    "altAnswers": [
      "polis",
      "poleis"
    ],
    "explanation": "Jedna polis zajmowała zwykle obszar miasta z okolicą albo wyspę."
  },
  {
    "id": "R02_POL_08",
    "section": "Starożytna Grecja i polis",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: zboże, oliwki, winorośl, piramidy.",
    "options": null,
    "answer": "piramidy",
    "explanation": "Zboże, oliwki i winorośl wiążą się z uprawami Greków, a piramidy nie należą do tego zestawu."
  },
  {
    "id": "R02_POL_09",
    "section": "Starożytna Grecja i polis",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "Hellada",
      "Hellenowie",
      "barbarzyńcy",
      "polis"
    ],
    "right": [
      "greckie miasto-państwo",
      "nazwa kraju Greków",
      "nazwa Greków dla siebie",
      "nazwa nie-Greków"
    ],
    "answer": {
      "Hellada": "nazwa kraju Greków",
      "Hellenowie": "nazwa Greków dla siebie",
      "barbarzyńcy": "nazwa nie-Greków",
      "polis": "greckie miasto-państwo"
    },
    "explanation": "Hellada, Hellenowie, barbarzyńcy i polis to podstawowe pojęcia z opisu starożytnej Grecji."
  },
  {
    "id": "R02_POL_10",
    "section": "Starożytna Grecja i polis",
    "type": "scenario",
    "prompt": "Uczeń tłumaczy, dlaczego w Helladzie powstało wiele niezależnych polis. Które wyjaśnienie najlepiej pasuje do podręcznika?",
    "options": [
      "Doliny oddzielały góry, więc mieszkańcy spotykali się rzadko.",
      "Grecy mieszkali wyłącznie na pustyni.",
      "Grecy nie znali uprawy zboża.",
      "Wszystkie polis leżały nad Nilem."
    ],
    "answer": 0,
    "image": "/img/r02_greckie_polis_krajobraz.jpg",
    "explanation": "Podręcznik wyjaśnia, że górzysty teren oddzielał doliny i utrudniał częste kontakty."
  },
  {
    "id": "R02_POL_11",
    "section": "Starożytna Grecja i polis",
    "type": "sort",
    "prompt": "Przyporządkuj nazwy do kategorii.",
    "options": null,
    "items": [
      "Hellada",
      "Hellenowie",
      "barbarzyńcy",
      "polis"
    ],
    "categories": [
      "nazwa kraju",
      "nazwa ludzi",
      "forma państwa"
    ],
    "answer": {
      "nazwa kraju": [
        "Hellada"
      ],
      "nazwa ludzi": [
        "Hellenowie",
        "barbarzyńcy"
      ],
      "forma państwa": [
        "polis"
      ]
    },
    "explanation": "Grecy używali nazw Hellada i Hellenowie dla siebie i swojego kraju, a nie-Greków nazywali barbarzyńcami."
  },
  {
    "id": "R02_POL_12",
    "section": "Starożytna Grecja i polis",
    "type": "true_false",
    "prompt": "Słowo „antyczny” oznacza w podręczniku „starożytny” w odniesieniu do Grecji i Rzymu.",
    "options": null,
    "answer": true,
    "explanation": "W przypisie wyjaśniono, że antyczny znaczy starożytny w odniesieniu do Grecji i Rzymu."
  },
  {
    "id": "R02_DEM_01",
    "section": "Demokracja ateńska",
    "type": "single_choice",
    "prompt": "Co oznacza greckie słowo „demokracja”?",
    "options": [
      "rządy ludu",
      "rządy króla",
      "rządy kapłanów",
      "rządy wojskowych",
      "rządy bogów",
      "rządy cudzoziemców"
    ],
    "answer": 0,
    "explanation": "Demokracja oznacza po grecku „rządy ludu”."
  },
  {
    "id": "R02_DEM_02",
    "section": "Demokracja ateńska",
    "type": "single_choice",
    "prompt": "Która polis była według podręcznika pierwszą demokracją w dziejach świata?",
    "options": [
      "Ateny",
      "Sparta",
      "Troja",
      "Delfy",
      "Olimpia",
      "Bizancjum"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że pierwszą demokracją w dziejach świata były Ateny."
  },
  {
    "id": "R02_DEM_03",
    "section": "Demokracja ateńska",
    "type": "multi_select",
    "prompt": "Zaznacz trzy podstawowe instytucje demokracji ateńskiej.",
    "options": [
      "zgromadzenie ludowe",
      "rada pięciuset",
      "sąd ludowy",
      "senat rzymski",
      "faraon",
      "wyrocznia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podstawę demokracji ateńskiej stanowiły zgromadzenie ludowe, rada pięciuset i sąd ludowy."
  },
  {
    "id": "R02_DEM_04",
    "section": "Demokracja ateńska",
    "type": "true_false",
    "prompt": "W zgromadzeniu ludowym mogli brać udział wszyscy mieszkańcy Aten, także kobiety, niewolnicy i cudzoziemcy.",
    "options": null,
    "answer": false,
    "explanation": "Udział mieli tylko obywatele, czyli wolni mężczyźni mający rodziców Ateńczyków."
  },
  {
    "id": "R02_DEM_05",
    "section": "Demokracja ateńska",
    "type": "fill_in",
    "prompt": "Rada pięciuset składała się z __________ Ateńczyków wylosowanych na jeden rok.",
    "options": null,
    "answer": [
      "500"
    ],
    "altAnswers": [
      [
        "500",
        "pięciuset",
        "piecuset"
      ]
    ],
    "explanation": "Radę tworzyło 500 Ateńczyków wylosowanych spośród chętnych obywateli."
  },
  {
    "id": "R02_DEM_06",
    "section": "Demokracja ateńska",
    "type": "single_choice",
    "prompt": "Czym zajmowała się rada pięciuset?",
    "options": [
      "codziennymi sprawami polis",
      "wyłącznie pisaniem mitów",
      "przewożeniem dusz przez Styks",
      "organizowaniem wypraw Odyseusza",
      "leczeniem chorych",
      "rzeźbieniem posągów"
    ],
    "answer": 0,
    "explanation": "Rada pięciuset była rządem Aten i zajmowała się codziennymi sprawami polis."
  },
  {
    "id": "R02_DEM_07",
    "section": "Demokracja ateńska",
    "type": "single_choice",
    "prompt": "Ilu sędziów liczył ateński sąd ludowy?",
    "options": [
      "6 tysięcy",
      "500",
      "40 tysięcy",
      "201",
      "501",
      "10"
    ],
    "answer": 0,
    "explanation": "Sąd ludowy składał się z 6 tysięcy sędziów losowanych na jeden rok."
  },
  {
    "id": "R02_DEM_08",
    "section": "Demokracja ateńska",
    "type": "riddle",
    "prompt": "Praktyka zapisywania na glinianych skorupkach imienia osoby zagrażającej demokracji to...",
    "options": null,
    "answer": "ostracyzm",
    "altAnswers": [
      "ostracyzm",
      "ostracyzmem"
    ],
    "explanation": "Skorupka to po grecku ostrakon, dlatego praktykę nazwano ostracyzmem."
  },
  {
    "id": "R02_DEM_09",
    "section": "Demokracja ateńska",
    "type": "single_choice",
    "prompt": "Na ile lat musiała opuścić Ateny osoba wskazana w ostracyzmie?",
    "options": [
      "10 lat",
      "1 rok",
      "5 lat",
      "20 lat",
      "do końca życia",
      "3 miesiące"
    ],
    "answer": 0,
    "explanation": "Osoba wskazana przez największą liczbę głosujących opuszczała Ateny na 10 lat."
  },
  {
    "id": "R02_DEM_10",
    "section": "Demokracja ateńska",
    "type": "multi_select",
    "prompt": "Zaznacz cechy demokracji ateńskiej różniące ją od dzisiejszej demokracji w Polsce według podręcznika.",
    "options": [
      "Kobiety, niewolnicy i cudzoziemcy nie mieli prawa głosu.",
      "Była demokracją bezpośrednią.",
      "Większość urzędów obsadzano przez losowanie.",
      "Wszyscy dorośli mieszkańcy zawsze głosowali.",
      "Obywatele wybierali wyłącznie posłów do parlamentu."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podręcznik wskazuje m.in. brak praw głosu kobiet, niewolników i cudzoziemców, demokrację bezpośrednią oraz losowanie wielu urzędów."
  },
  {
    "id": "R02_DEM_11",
    "section": "Demokracja ateńska",
    "type": "scenario",
    "prompt": "Ateńczyk chce zabrać głos na zgromadzeniu ludowym. Jest wolnym mężczyzną, a jego rodzice są Ateńczykami. Czy spełnia warunki opisane w podręczniku?",
    "options": [
      "Tak, spełnia warunki obywatela.",
      "Nie, bo głosować mogli tylko niewolnicy.",
      "Nie, bo głosowały tylko kobiety.",
      "Nie, bo zgromadzenie było wyłącznie dla cudzoziemców."
    ],
    "answer": 0,
    "image": "/img/r02_zgromadzenie_pnyks.jpg",
    "explanation": "Obywatelem był wolny mężczyzna, który miał rodziców Ateńczyków; taki obywatel mógł przemawiać i głosować."
  },
  {
    "id": "R02_DEM_12",
    "section": "Demokracja ateńska",
    "type": "match",
    "prompt": "Połącz instytucję z funkcją.",
    "options": null,
    "left": [
      "zgromadzenie ludowe",
      "rada pięciuset",
      "sąd ludowy"
    ],
    "right": [
      "rozstrzygał większość spraw sądowych",
      "decydowało o najważniejszych sprawach państwa",
      "zajmowała się codziennymi sprawami polis"
    ],
    "answer": {
      "zgromadzenie ludowe": "decydowało o najważniejszych sprawach państwa",
      "rada pięciuset": "zajmowała się codziennymi sprawami polis",
      "sąd ludowy": "rozstrzygał większość spraw sądowych"
    },
    "explanation": "Każda z trzech instytucji demokracji ateńskiej miała inne zadania."
  },
  {
    "id": "R02_DEM_13",
    "section": "Demokracja ateńska",
    "type": "sort",
    "prompt": "Przyporządkuj grupy mieszkańców Aten do kategorii.",
    "options": null,
    "items": [
      "wolni mężczyźni z rodzicami Ateńczykami",
      "kobiety",
      "niewolnicy",
      "cudzoziemcy"
    ],
    "categories": [
      "obywatele",
      "nie byli obywatelami"
    ],
    "answer": {
      "obywatele": [
        "wolni mężczyźni z rodzicami Ateńczykami"
      ],
      "nie byli obywatelami": [
        "kobiety",
        "niewolnicy",
        "cudzoziemcy"
      ]
    },
    "explanation": "Obywatelami byli wolni mężczyźni z rodzicami Ateńczykami; kobiety, niewolnicy i cudzoziemcy nie byli obywatelami."
  },
  {
    "id": "R02_DEM_14",
    "section": "Demokracja ateńska",
    "type": "single_choice",
    "prompt": "Jaką część mieszkańców ateńskiej polis stanowili niewolnicy?",
    "options": [
      "jedną trzecią",
      "połowę",
      "jedną dziesiątą",
      "wszyscy mieszkańcy",
      "dwie trzecie",
      "jedną setną"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że niewolnicy stanowili jedną trzecią mieszkańców ateńskiej polis."
  },
  {
    "id": "R02_MIT_01",
    "section": "Mitologia grecka",
    "type": "single_choice",
    "prompt": "Jaką religię wyznawali starożytni Grecy?",
    "options": [
      "politeizm",
      "monoteizm",
      "ateizm",
      "buddyzm",
      "islam",
      "judaizm"
    ],
    "answer": 0,
    "explanation": "Starożytni Grecy wyznawali politeizm, czyli wiarę w wielu bogów."
  },
  {
    "id": "R02_MIT_02",
    "section": "Mitologia grecka",
    "type": "single_choice",
    "prompt": "Gdzie według Greków mieszkali bogowie olimpijscy?",
    "options": [
      "na Olimpie",
      "w Hadesie",
      "w Troi",
      "na Itace",
      "w kopalniach srebra",
      "na Pnyksie"
    ],
    "answer": 0,
    "image": "/img/r02_bogowie_olimpijscy.jpg",
    "explanation": "Siedziba bogów olimpijskich znajdowała się według Greków na najwyższym szczycie góry Olimp."
  },
  {
    "id": "R02_MIT_03",
    "section": "Mitologia grecka",
    "type": "multi_select",
    "prompt": "Zaznacz cechy greckich bogów odróżniające ich od ludzi.",
    "options": [
      "nieśmiertelność",
      "wieczna młodość",
      "brak ludzkiej postaci",
      "życie bez uczuć i sporów",
      "ludzka postać",
      "śmiertelność"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Bogowie byli nieśmiertelni i wiecznie młodzi, choć mieli ludzką postać i żyli podobnie jak ludzie."
  },
  {
    "id": "R02_MIT_04",
    "section": "Mitologia grecka",
    "type": "match",
    "prompt": "Połącz bóstwo z opisem z podręcznika.",
    "options": null,
    "left": [
      "Zeus",
      "Posejdon",
      "Hades",
      "Atena",
      "Hera",
      "Afrodyta"
    ],
    "right": [
      "władca mórz",
      "władca świata i król bogów",
      "opiekunka małżeństw",
      "bogini mądrości i sprawiedliwej wojny",
      "bogini miłości i piękności",
      "władca podziemnego królestwa"
    ],
    "answer": {
      "Zeus": "władca świata i król bogów",
      "Posejdon": "władca mórz",
      "Hades": "władca podziemnego królestwa",
      "Atena": "bogini mądrości i sprawiedliwej wojny",
      "Hera": "opiekunka małżeństw",
      "Afrodyta": "bogini miłości i piękności"
    },
    "explanation": "Podręcznik wymienia funkcje najważniejszych bogów i bogiń olimpijskich."
  },
  {
    "id": "R02_MIT_05",
    "section": "Mitologia grecka",
    "type": "fill_in",
    "prompt": "Zbiór mitów nazywamy __________.",
    "options": null,
    "answer": [
      "mitologią"
    ],
    "altAnswers": [
      [
        "mitologią",
        "mitologia"
      ]
    ],
    "explanation": "Mitologia to zbiór mitów, czyli opowieści o bogach i bohaterach."
  },
  {
    "id": "R02_MIT_06",
    "section": "Mitologia grecka",
    "type": "single_choice",
    "prompt": "Co według podręcznika jest mitem?",
    "options": [
      "wymyślona opowieść o bogach i bohaterach",
      "urzędowy spis obywateli",
      "prawo uchwalone przez radę pięciuset",
      "miejsce obrad sądu",
      "grecki poemat o obwodzie koła",
      "rodzaj ostracyzmu"
    ],
    "answer": 0,
    "explanation": "Mit to wymyślona opowieść o bogach i bohaterach wyjaśniająca m.in. początki świata i sens życia ludzi."
  },
  {
    "id": "R02_MIT_07",
    "section": "Mitologia grecka",
    "type": "scenario",
    "prompt": "Prometeusz wykrada dla ludzi ogień z Olimpu. Jaka kara spotyka go według mitu opisanego w podręczniku?",
    "options": [
      "Został przykuty do skały, a orzeł rozszarpywał mu wątrobę.",
      "Musiał na zawsze wtaczać kamień pod górę.",
      "Został przewoźnikiem na Styksie.",
      "Musiał opuścić Ateny na 10 lat."
    ],
    "answer": 0,
    "image": "/img/r02_prometeusz_orzel.jpg",
    "explanation": "Zeus kazał przykuć Prometeusza do skały, a orzeł codziennie rozszarpywał mu wątrobę."
  },
  {
    "id": "R02_MIT_08",
    "section": "Mitologia grecka",
    "type": "single_choice",
    "prompt": "Kim byli herosi?",
    "options": [
      "dziećmi bogów i ludzi",
      "sędziami sądu ludowego",
      "uczestnikami rady pięciuset",
      "kapłanami w Delfach",
      "twórcami Iliady",
      "niewolnikami w kopalniach"
    ],
    "answer": 0,
    "explanation": "Herosi byli dziećmi bogów i ludzi; byli śmiertelni, ale mieli nadludzkie cechy."
  },
  {
    "id": "R02_MIT_09",
    "section": "Mitologia grecka",
    "type": "true_false",
    "prompt": "Herakles był przykładem herosa.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik podaje Heraklesa jako herosa, syna Zeusa i ziemskiej kobiety."
  },
  {
    "id": "R02_MIT_10",
    "section": "Mitologia grecka",
    "type": "single_choice",
    "prompt": "Kto według wierzeń greckich przewoził dusze zmarłych przez Styks?",
    "options": [
      "Charon",
      "Sokrates",
      "Fidiasz",
      "Perykles",
      "Homer",
      "Myron"
    ],
    "answer": 0,
    "explanation": "Dusze zmarłych zabierał na łódź ponury starzec Charon."
  },
  {
    "id": "R02_MIT_11",
    "section": "Mitologia grecka",
    "type": "single_choice",
    "prompt": "Jak nazywało się podziemne królestwo zmarłych?",
    "options": [
      "Hades",
      "Olimp",
      "Akropol",
      "Pnyks",
      "Hellada",
      "Itaka"
    ],
    "answer": 0,
    "explanation": "Podziemne królestwo, do którego trafiały dusze zmarłych, nazywano Hadesem."
  },
  {
    "id": "R02_MIT_12",
    "section": "Mitologia grecka",
    "type": "scenario",
    "prompt": "Syzyf próbuje wtoczyć kamień na stromą górę, ale kamień za każdym razem stacza się w dół. Za co został ukarany?",
    "options": [
      "Za próbę oszukania śmierci.",
      "Za zbudowanie Partenonu.",
      "Za napisanie Odysei.",
      "Za udział w zgromadzeniu ludowym."
    ],
    "answer": 0,
    "image": "/img/r02_syzyf_kamien.jpg",
    "explanation": "Podręcznik podaje, że Syzyf został ukarany za próbę oszukania śmierci."
  },
  {
    "id": "R02_MIT_13",
    "section": "Mitologia grecka",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby czczenia bogów przez Hellenów opisane w podręczniku.",
    "options": [
      "modły",
      "ofiary",
      "procesje",
      "igrzyska",
      "budowanie świątyń",
      "głosowanie na sędziów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Grecy modlili się, składali ofiary, organizowali procesje i igrzyska oraz budowali świątynie."
  },
  {
    "id": "R02_MIT_14",
    "section": "Mitologia grecka",
    "type": "riddle",
    "prompt": "Miejsce, w którym według Greków bogowie udzielali rad i przepowiadali przyszłość, to...",
    "options": null,
    "answer": "wyrocznia",
    "altAnswers": [
      "wyrocznia",
      "wyrocznią"
    ],
    "explanation": "Takie miejsce nazywano wyrocznią; najważniejsza była wyrocznia Apollina w Delfach."
  },
  {
    "id": "R02_OSI_01",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Czym był Akropol w Atenach?",
    "options": [
      "wzgórzem z najpiękniejszymi budowlami Aten",
      "podziemnym królestwem zmarłych",
      "łodzią Charona",
      "targiem niewolników",
      "greckim alfabetem",
      "rzeką w Hadesie"
    ],
    "answer": 0,
    "image": "/img/r02_akropol_partenon.jpg",
    "explanation": "Akropol był skalnym wzgórzem z najpiękniejszymi budowlami Aten."
  },
  {
    "id": "R02_OSI_02",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Jak nazywała się najważniejsza świątynia na Akropolu?",
    "options": [
      "Partenon",
      "Hades",
      "Odyseja",
      "Dyskobol",
      "Tartar",
      "Pnyks"
    ],
    "answer": 0,
    "image": "/img/r02_akropol_partenon.jpg",
    "explanation": "Najważniejszą budowlą Akropolu był Partenon, świątynia bogini Ateny."
  },
  {
    "id": "R02_OSI_03",
    "section": "Osiągnięcia Greków",
    "type": "true_false",
    "prompt": "Partenon był świątynią bogini Ateny.",
    "options": null,
    "answer": true,
    "explanation": "Partenon to świątynia Ateny na ateńskim Akropolu."
  },
  {
    "id": "R02_OSI_04",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Co zrobili architekci, aby Partenon wydawał się lekki i harmonijny?",
    "options": [
      "pochylili kolumny trochę ku środkowi",
      "usunęli wszystkie kolumny",
      "zbudowali go z drewna",
      "ukryli go pod ziemią",
      "pomalowali go wyłącznie na czarno",
      "postawili go w Hadesie"
    ],
    "answer": 0,
    "explanation": "Kolumny Partenonu pochylono trochę ku środkowi budowli."
  },
  {
    "id": "R02_OSI_05",
    "section": "Osiągnięcia Greków",
    "type": "multi_select",
    "prompt": "Zaznacz informacje o rzeźbach Fidiasza podane w podręczniku.",
    "options": [
      "Posąg Ateny miał 12 metrów.",
      "Posąg Zeusa miał 13 metrów.",
      "Posągi pokryto złotem i kością słoniową.",
      "Dzieła te dotrwały w całości do naszych czasów.",
      "Fidiasz wyrzeźbił Dyskobola."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Fidiasz wyrzeźbił posąg Ateny w Partenonie i Zeusa w Olimpii; oba były pokryte złotem i kością słoniową."
  },
  {
    "id": "R02_OSI_06",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Kto wyrzeźbił Dyskobola?",
    "options": [
      "Myron",
      "Fidiasz",
      "Sofokles",
      "Homer",
      "Sokrates",
      "Hipokrates"
    ],
    "answer": 0,
    "explanation": "Dyskobola wyrzeźbił Myron."
  },
  {
    "id": "R02_OSI_07",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Z jakimi występami wiążą się początki greckiego teatru?",
    "options": [
      "z występami chóru ku czci Dionizosa",
      "z obradami rady pięciuset",
      "z procesem Sokratesa",
      "z pracami Archimedesa",
      "z walką Heraklesa",
      "z targiem niewolników"
    ],
    "answer": 0,
    "image": "/img/r02_teatr_grecki_chor.jpg",
    "explanation": "Początki teatru wiążą się z występami chóru podczas świąt ku czci Dionizosa."
  },
  {
    "id": "R02_OSI_08",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Czym była tragedia w teatrze greckim?",
    "options": [
      "sztuką o bohaterze w sytuacji bez wyjścia",
      "wesołą sztuką z pomyślnym zakończeniem",
      "spisem praw ateńskich",
      "zbiorem mitów",
      "rodzajem rady obywateli",
      "miejscem przepowiedni"
    ],
    "answer": 0,
    "explanation": "Tragedia to sztuka o człowieku w sytuacji bez wyjścia, w której bohater ponosi klęskę, często śmierć."
  },
  {
    "id": "R02_OSI_09",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Czym była komedia według podręcznika?",
    "options": [
      "wesołym przedstawieniem z pomyślnym zakończeniem",
      "sztuką zawsze kończącą się śmiercią bohatera",
      "rzeźbą nagiego ciała",
      "poematem o wojnie trojańskiej",
      "mową Peryklesa",
      "głosowaniem przez ostrakony"
    ],
    "answer": 0,
    "explanation": "Komedia była wesołym przedstawieniem o żywej akcji i pomyślnym zakończeniu."
  },
  {
    "id": "R02_OSI_10",
    "section": "Osiągnięcia Greków",
    "type": "match",
    "prompt": "Połącz postać z osiągnięciem.",
    "options": null,
    "left": [
      "Sofokles",
      "Homer",
      "Sokrates",
      "Archimedes",
      "Hipokrates",
      "Fidiasz"
    ],
    "right": [
      "ojciec medycyny",
      "filozof mówiący o dobru i prawdzie",
      "autor tragedii Antygona i Król Edyp",
      "przypisywano mu Iliadę i Odyseję",
      "twórca posągów Ateny i Zeusa",
      "ułożył wzór na pole i obwód koła"
    ],
    "answer": {
      "Sofokles": "autor tragedii Antygona i Król Edyp",
      "Homer": "przypisywano mu Iliadę i Odyseję",
      "Sokrates": "filozof mówiący o dobru i prawdzie",
      "Archimedes": "ułożył wzór na pole i obwód koła",
      "Hipokrates": "ojciec medycyny",
      "Fidiasz": "twórca posągów Ateny i Zeusa"
    },
    "explanation": "Podręcznik wymienia najważniejsze greckie osiągnięcia i związane z nimi postacie."
  },
  {
    "id": "R02_OSI_11",
    "section": "Osiągnięcia Greków",
    "type": "fill_in",
    "prompt": "Dwa wielkie poematy powstałe w Helladzie w VIII w. p.n.e. to __________ i __________.",
    "options": null,
    "answer": [
      "Iliada",
      "Odyseja"
    ],
    "altAnswers": [
      [
        "Iliada",
        "Iliadę"
      ],
      [
        "Odyseja",
        "Odyseję"
      ]
    ],
    "explanation": "Podręcznik wymienia Iliadę i Odyseję."
  },
  {
    "id": "R02_OSI_12",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "O czym opowiada Iliada?",
    "options": [
      "o ostatnich 50 dniach wojny trojańskiej",
      "o tułaczce Odyseusza na Itakę",
      "o procesie Sokratesa",
      "o budowie Partenonu",
      "o głosowaniu ostracyzmu",
      "o życiu niewolników w kopalni"
    ],
    "answer": 0,
    "explanation": "Iliada opowiada o wydarzeniach ostatnich 50 dni wojny trojańskiej."
  },
  {
    "id": "R02_OSI_13",
    "section": "Osiągnięcia Greków",
    "type": "single_choice",
    "prompt": "Co oznacza greckie słowo „filozofia”?",
    "options": [
      "umiłowanie mądrości",
      "rządy ludu",
      "mały głos",
      "podziemne królestwo",
      "gliniana skorupka",
      "władza króla"
    ],
    "answer": 0,
    "explanation": "Filozofia oznacza „umiłowanie mądrości”."
  },
  {
    "id": "R02_OSI_14",
    "section": "Osiągnięcia Greków",
    "type": "multi_select",
    "prompt": "Zaznacz osiągnięcia naukowe Greków opisane w podręczniku.",
    "options": [
      "Archimedes ułożył wzór na pole i obwód koła.",
      "Uczeni dowiedli, że Ziemia jest kulą.",
      "Hipokrates odrzucił magiczne sposoby leczenia.",
      "Sokrates wyrzeźbił Dyskobola.",
      "Homer zbudował Akropol."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podręcznik wymienia m.in. wzory Archimedesa, dowód kulistości Ziemi i dokonania Hipokratesa."
  },
  {
    "id": "R02_MIE_01",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia lub zjawiska w porządku chronologicznym według dat z rozdziału.",
    "options": null,
    "items": [
      "śmierć Sokratesa",
      "Perykles przywódcą Aten",
      "kształtowanie się demokracji ateńskiej",
      "śmierć Sofoklesa"
    ],
    "answer": [
      "kształtowanie się demokracji ateńskiej",
      "Perykles przywódcą Aten",
      "śmierć Sofoklesa",
      "śmierć Sokratesa"
    ],
    "explanation": "Najpierw kształtowała się demokracja ateńska, potem Perykles przewodził Atenom, później zmarł Sofokles, a na końcu Sokrates."
  },
  {
    "id": "R02_MIE_02",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do lekcji, z którą najbardziej się łączą.",
    "options": null,
    "items": [
      "ostracyzm",
      "rada pięciuset",
      "Olimp",
      "Charon",
      "Partenon",
      "Sofokles"
    ],
    "categories": [
      "demokracja ateńska",
      "mitologia grecka",
      "osiągnięcia Greków"
    ],
    "answer": {
      "demokracja ateńska": [
        "ostracyzm",
        "rada pięciuset"
      ],
      "mitologia grecka": [
        "Olimp",
        "Charon"
      ],
      "osiągnięcia Greków": [
        "Partenon",
        "Sofokles"
      ]
    },
    "explanation": "Pojęcia pochodzą z trzech głównych części rozdziału: demokracji, mitologii oraz osiągnięć Greków."
  },
  {
    "id": "R02_MIE_03",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Zeus, Posejdon, Hades, Sokrates.",
    "options": null,
    "answer": "Sokrates",
    "explanation": "Zeus, Posejdon i Hades to bogowie, a Sokrates był filozofem."
  },
  {
    "id": "R02_MIE_04",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: zgromadzenie ludowe, rada pięciuset, sąd ludowy, Partenon.",
    "options": null,
    "answer": "Partenon",
    "explanation": "Pierwsze trzy to instytucje demokracji ateńskiej, a Partenon był świątynią."
  },
  {
    "id": "R02_MIE_05",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz liczbę z informacją z rozdziału.",
    "options": null,
    "left": [
      "500",
      "6 tysięcy",
      "10 lat",
      "12 metrów",
      "24 godziny"
    ],
    "right": [
      "recytacja całej Iliady",
      "posąg Ateny w Partenonie",
      "wygnanie w ostracyzmie",
      "członkowie rady pięciuset",
      "sędziowie sądu ludowego"
    ],
    "answer": {
      "500": "członkowie rady pięciuset",
      "6 tysięcy": "sędziowie sądu ludowego",
      "10 lat": "wygnanie w ostracyzmie",
      "12 metrów": "posąg Ateny w Partenonie",
      "24 godziny": "recytacja całej Iliady"
    },
    "explanation": "Rozdział zawiera kilka ważnych liczb dotyczących Aten, ostracyzmu i literatury."
  },
  {
    "id": "R02_MIE_06",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "W rozdziale Akropol, Olimp i Pnyks oznaczają to samo miejsce.",
    "options": null,
    "answer": false,
    "explanation": "To różne miejsca: Akropol był wzgórzem z budowlami Aten, Olimp siedzibą bogów, a Pnyks miejscem zgromadzeń."
  },
  {
    "id": "R02_MIE_07",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie postacie wymienione w części o osiągnięciach Greków?",
    "options": [
      "Fidiasz, Sofokles, Hipokrates",
      "Zeus, Hera, Posejdon",
      "Perykles, Charon, Syzyf",
      "Atena, Afrodyta, Hades",
      "Krezus, Pytia, Prometeusz",
      "Temistokles, Hera, Odyseusz"
    ],
    "answer": 0,
    "explanation": "Fidiasz, Sofokles i Hipokrates pojawiają się w części o architekturze, teatrze, literaturze, filozofii i nauce."
  },
  {
    "id": "R02_MIE_08",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Przewodnik pokazuje turystom ruiny świątyni Ateny na Akropolu. Którą nazwę powinien podać?",
    "options": [
      "Partenon",
      "Tartar",
      "Hades",
      "Odyseja"
    ],
    "answer": 0,
    "image": "/img/r02_akropol_partenon.jpg",
    "explanation": "Świątynia Ateny na Akropolu to Partenon."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W jakich latach Perykles był przywódcą Aten według osi czasu w rozdziale?",
    "options": [
      "ok. 461–429 p.n.e.",
      "594–508/507 p.n.e.",
      "406–399 p.n.e.",
      "VIII w. p.n.e.",
      "VI w. n.e.",
      "ok. 495–429 n.e."
    ],
    "answer": 0,
    "explanation": "Oś czasu podaje okres ok. 461–429 p.n.e."
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki minimalny udział obywateli był potrzebny, aby głosowanie ostracyzmu było ważne?",
    "options": [
      "co najmniej 6 tysięcy",
      "dokładnie 500",
      "201 albo 501",
      "40 tysięcy",
      "300 tysięcy",
      "12 metrów"
    ],
    "answer": 0,
    "explanation": "W głosowaniu musiało uczestniczyć co najmniej 6 tysięcy obywateli."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak zwykle liczne były składy sądu ludowego rozstrzygające sprawy?",
    "options": [
      "201 albo 501 sędziów",
      "10 sędziów",
      "5000 albo 6000 sędziów",
      "tylko jeden sędzia",
      "40 tysięcy sędziów",
      "12 sędziów olimpijskich"
    ],
    "answer": 0,
    "explanation": "Zwykle sądziło kilkuset sędziów, np. 201 albo 501."
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Ateński ostracyzm zawsze pozbawiał wygnanego majątku.",
    "options": null,
    "answer": false,
    "explanation": "Wygnany musiał opuścić Ateny na 10 lat, ale nie tracił majątku."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto w wyroczni delfickiej wypowiadał słowa uznawane za pochodzące od Apollina?",
    "options": [
      "Pytia",
      "Ksantypa",
      "Atena",
      "Hera",
      "Persefona",
      "Afrodyta"
    ],
    "answer": 0,
    "explanation": "W podziemnej sali siedziała kapłanka zwana Pytią."
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz stwierdzenia zgodne z opisem Partenonu.",
    "options": [
      "Wzniesiono go z potężnych marmurowych bloków.",
      "Kolumny pochylono ku środkowi.",
      "Grecy malowali świątynie jaskrawymi farbami.",
      "Od początku był piaskowy lub biały jak dzisiejsze ruiny.",
      "Był świątynią Hadesa."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "/img/r02_akropol_partenon.jpg",
    "explanation": "Partenon zbudowano z marmuru, otaczały go lekko pochylone kolumny, a greckie świątynie malowano jaskrawymi farbami."
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak długo, według podręcznika, zajęłaby recytacja całej Iliady?",
    "options": [
      "około 24 godzin",
      "około 10 minut",
      "około 12 dni",
      "około 50 dni",
      "około 6 tysięcy godzin",
      "około 500 godzin"
    ],
    "answer": 0,
    "explanation": "Podręcznik podaje, że recytacja całej Iliady zajmuje około 24 godzin."
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Sokrates chodzi po Atenach w podartym ubraniu, dyskutuje o prawdzie i dobru oraz powtarza, że wie, iż nic nie wie. Co najlepiej opisuje jego zainteresowania?",
    "options": [
      "Człowiek i ocena ludzkiego postępowania.",
      "Wyłącznie sztormy i trzęsienia ziemi.",
      "Budowanie marmurowych świątyń.",
      "Wyłącznie przepowiadanie przyszłości w Delfach."
    ],
    "answer": 0,
    "image": "/img/r02_sokrates_rozmowa.jpg",
    "explanation": "Sokrates mniej zajmował się przyrodą, a bardziej człowiekiem i oceną ludzkiego postępowania."
  }
];

const KID_PROMPTS = {
  "R02_POL_01": "Gdzie leży Grecja?",
  "R02_POL_02": "Zaznacz elementy krajobrazu i warunków życia w starożytnej Grecji .",
  "R02_POL_03": "Starożytni Grecy utworzyli jedno wspólne państwo obejmujące całą Helladę.",
  "R02_POL_04": "Miasta-państwa w starożytnej Grecji nazywano __________.",
  "R02_POL_05": "Jak Grecy nazywali swój kraj?",
  "R02_POL_06": "Jak Grecy nazywali samych siebie?",
  "R02_POL_07": "Jedno greckie miasto-państwo, czyli miasto z okolicą albo wyspa, to...",
  "R02_POL_08": "Wskaż, co nie pasuje do pozostałych: zboże, oliwki, winorośl, piramidy.",
  "R02_POL_09": "Połącz pojęcie z wyjaśnieniem.",
  "R02_POL_10": "Uczeń tłumaczy, dlaczego w Helladzie powstało wiele niezależnych polis. Które wyjaśnienie najlepiej pasuje do podręcznika?",
  "R02_POL_11": "Przyporządkuj nazwy do kategorii.",
  "R02_POL_12": "Słowo „antyczny” oznacza w podręczniku „starożytny” w odniesieniu do Grecji i Rzymu.",
  "R02_DEM_01": "Co oznacza greckie słowo „demokracja”?",
  "R02_DEM_02": "Która polis była  pierwszą demokracją w dziejach świata?",
  "R02_DEM_03": "Zaznacz trzy podstawowe instytucje demokracji ateńskiej.",
  "R02_DEM_04": "W zgromadzeniu ludowym mogli brać udział wszyscy mieszkańcy Aten, także kobiety, niewolnicy i cudzoziemcy.",
  "R02_DEM_05": "Rada pięciuset składała się z __________ Ateńczyków wylosowanych na jeden rok.",
  "R02_DEM_06": "Czym zajmowała się rada pięciuset?",
  "R02_DEM_07": "Ilu sędziów liczył ateński sąd ludowy?",
  "R02_DEM_08": "Praktyka zapisywania na glinianych skorupkach imienia osoby zagrażającej demokracji to...",
  "R02_DEM_09": "Na ile lat musiała opuścić Ateny osoba wskazana w ostracyzmie?",
  "R02_DEM_10": "Zaznacz cechy demokracji ateńskiej różniące ją od dzisiejszej demokracji w Polsce .",
  "R02_DEM_11": "Ateńczyk chce zabrać głos na zgromadzeniu ludowym. Jest wolnym mężczyzną, a jego rodzice są Ateńczykami. Czy spełnia warunki ?",
  "R02_DEM_12": "Połącz instytucję z funkcją.",
  "R02_DEM_13": "Przyporządkuj grupy mieszkańców Aten do kategorii.",
  "R02_DEM_14": "Jaką część mieszkańców ateńskiej polis stanowili niewolnicy?",
  "R02_MIT_01": "Jaką religię wyznawali starożytni Grecy?",
  "R02_MIT_02": "Gdzie według Greków mieszkali bogowie olimpijscy?",
  "R02_MIT_03": "Zaznacz cechy greckich bogów odróżniające ich od ludzi.",
  "R02_MIT_04": "Połącz bóstwo z opisem z podręcznika.",
  "R02_MIT_05": "Zbiór mitów nazywamy __________.",
  "R02_MIT_06": "Co  jest mitem?",
  "R02_MIT_07": "Prometeusz wykrada dla ludzi ogień z Olimpu. Jaka kara spotyka go według mitu opisanego w podręczniku?",
  "R02_MIT_08": "Kim byli herosi?",
  "R02_MIT_09": "Herakles był przykładem herosa.",
  "R02_MIT_10": "Kto według wierzeń greckich przewoził dusze zmarłych przez Styks?",
  "R02_MIT_11": "Jak nazywało się podziemne królestwo zmarłych?",
  "R02_MIT_12": "Syzyf próbuje wtoczyć kamień na stromą górę, ale kamień za każdym razem stacza się w dół. Za co został ukarany?",
  "R02_MIT_13": "Zaznacz sposoby czczenia bogów przez Hellenów .",
  "R02_MIT_14": "Miejsce, w którym według Greków bogowie udzielali rad i przepowiadali przyszłość, to...",
  "R02_OSI_01": "Czym był Akropol w Atenach?",
  "R02_OSI_02": "Jak nazywała się najważniejsza świątynia na Akropolu?",
  "R02_OSI_03": "Partenon był świątynią bogini Ateny.",
  "R02_OSI_04": "Co zrobili architekci, aby Partenon wydawał się lekki i harmonijny?",
  "R02_OSI_05": "Zaznacz informacje o rzeźbach Fidiasza podane w podręczniku.",
  "R02_OSI_06": "Kto wyrzeźbił Dyskobola?",
  "R02_OSI_07": "Z jakimi występami wiążą się początki greckiego teatru?",
  "R02_OSI_08": "Czym była tragedia w teatrze greckim?",
  "R02_OSI_09": "Czym była komedia ?",
  "R02_OSI_10": "Połącz postać z osiągnięciem.",
  "R02_OSI_11": "Dwa wielkie poematy powstałe w Helladzie w VIII w. p.n.e. to __________ i __________.",
  "R02_OSI_12": "O czym opowiada Iliada?",
  "R02_OSI_13": "Co oznacza greckie słowo „filozofia”?",
  "R02_OSI_14": "Zaznacz osiągnięcia naukowe Greków .",
  "R02_MIE_01": "Ułóż wydarzenia lub zjawiska w porządku chronologicznym według dat .",
  "R02_MIE_02": "Przyporządkuj pojęcia do lekcji, z którą najbardziej się łączą.",
  "R02_MIE_03": "Wskaż, co nie pasuje do pozostałych: Zeus, Posejdon, Hades, Sokrates.",
  "R02_MIE_04": "Wskaż, co nie pasuje do pozostałych: zgromadzenie ludowe, rada pięciuset, sąd ludowy, Partenon.",
  "R02_MIE_05": "Połącz liczbę z informacją .",
  "R02_MIE_06": "W rozdziale Akropol, Olimp i Pnyks oznaczają to samo miejsce.",
  "R02_MIE_07": "Który zestaw zawiera wyłącznie postacie wymienione w części o osiągnięciach Greków?",
  "R02_MIE_08": "Przewodnik pokazuje turystom ruiny świątyni Ateny na Akropolu. Którą nazwę powinien podać?",
  "R02_HARD_01": "W jakich latach Perykles był przywódcą Aten według osi czasu w rozdziale?",
  "R02_HARD_02": "Jaki minimalny udział obywateli był potrzebny, aby głosowanie ostracyzmu było ważne?",
  "R02_HARD_03": "Jak zwykle liczne były składy sądu ludowego rozstrzygające sprawy?",
  "R02_HARD_04": "Ateński ostracyzm zawsze pozbawiał wygnanego majątku.",
  "R02_HARD_05": "Kto w wyroczni delfickiej wypowiadał słowa uznawane za pochodzące od Apollina?",
  "R02_HARD_06": "Zaznacz stwierdzenia zgodne z opisem Partenonu.",
  "R02_HARD_07": "Jak długo, , zajęłaby recytacja całej Iliady?",
  "R02_HARD_08": "Sokrates chodzi po Atenach w podartym ubraniu, dyskutuje o prawdzie i dobru oraz powtarza, że wie, iż nic nie wie. Co najlepiej opisuje jego zainteresowania?"
};

const chapter = {
  id: "r02",
  number: 2,
  title: "Starożytna Grecja",
  icon: "🏺",
  sectionOrder: [
    "Starożytna Grecja i polis",
    "Demokracja ateńska",
    "Mitologia grecka",
    "Osiągnięcia Greków",
    "Powtórka mieszana",
    "Super trudne"
],
  sectionIcons: {
    "Starożytna Grecja i polis": "🏺",
    "Demokracja ateńska": "🗳️",
    "Mitologia grecka": "⚡",
    "Osiągnięcia Greków": "🎭",
    "Powtórka mieszana": "🔁",
    "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
