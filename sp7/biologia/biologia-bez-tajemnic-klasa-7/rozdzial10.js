// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MESK = Męski układ rozrodczy
//   ZENS = Żeński układ rozrodczy
//   CYKL = Cykl miesiączkowy
//   CHOR = Choroby i higiena układu rozrodczego
//   POCZ = Rozwój od poczęcia do narodzin
//   NARO = Od narodzin do starości
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R10_MESK_01",
    "section": "Męski układ rozrodczy",
    "type": "single_choice",
    "prompt": "Który narząd wytwarza plemniki i produkuje testosteron?",
    "options": [
      "Jądra",
      "Najądrza",
      "Nasieniowody",
      "Gruczoł krokowy",
      "Pęcherzyki nasienne",
      "Moszna"
    ],
    "answer": 0,
    "explanation": "Jądra są gonadami męskimi: wytwarzają plemniki i produkują testosteron.",
    "image": "r10_meski_uklad_anatomia.jpg"
  },
  {
    "id": "R10_MESK_02",
    "section": "Męski układ rozrodczy",
    "type": "multi_select",
    "prompt": "Zaznacz zewnętrzne narządy płciowe mężczyzny.",
    "options": [
      "Prącie",
      "Moszna",
      "Jądra",
      "Najądrza",
      "Nasieniowody"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Do zewnętrznych narządów płciowych mężczyzny należą prącie i moszna. Jądra, najądrza i nasieniowody są narządami wewnętrznymi."
  },
  {
    "id": "R10_MESK_03",
    "section": "Męski układ rozrodczy",
    "type": "true_false",
    "prompt": "Plemniki powstają w jądrach, a dojrzewają w najądrzach.",
    "options": null,
    "answer": true,
    "explanation": "Miejscem powstawania plemników są jądra, natomiast ich dojrzewanie zachodzi w najądrzach."
  },
  {
    "id": "R10_MESK_04",
    "section": "Męski układ rozrodczy",
    "type": "fill_in",
    "prompt": "Plemnik jest zbudowany z __________, __________ i __________.",
    "options": null,
    "answer": [
      "główki",
      "wstawki",
      "witki"
    ],
    "altAnswers": [
      [
        "główki",
        "główka"
      ],
      [
        "wstawki",
        "wstawka"
      ],
      [
        "witki",
        "witka"
      ]
    ],
    "explanation": "Trzy podstawowe części plemnika to główka, wstawka i witka. We wstawce znajdują się liczne mitochondria, a witka umożliwia ruch.",
    "image": "r10_plemnik_budowa.jpg"
  },
  {
    "id": "R10_MESK_05",
    "section": "Męski układ rozrodczy",
    "type": "riddle",
    "prompt": "Jest przewodem, którym podczas ejakulacji plemniki przemieszczają się z najądrza do cewki moczowej. Co to za narząd?",
    "options": null,
    "answer": "nasieniowód",
    "altAnswers": [
      "nasieniowód",
      "nasieniowod"
    ],
    "explanation": "Nasieniowody wyprowadzają plemniki z najądrzy w kierunku cewki moczowej."
  },
  {
    "id": "R10_MESK_06",
    "section": "Męski układ rozrodczy",
    "type": "match",
    "prompt": "Połącz narząd męskiego układu rozrodczego z jego funkcją.",
    "options": null,
    "left": [
      "jądra",
      "najądrza",
      "nasieniowody",
      "gruczoł krokowy i pęcherzyki nasienne"
    ],
    "right": [
      "wytwarzanie plemników i testosteronu",
      "dojrzewanie plemników",
      "wyprowadzanie plemników z najądrzy",
      "wytwarzanie wydzieliny wchodzącej w skład spermy"
    ],
    "answer": {
      "jądra": "wytwarzanie plemników i testosteronu",
      "najądrza": "dojrzewanie plemników",
      "nasieniowody": "wyprowadzanie plemników z najądrzy",
      "gruczoł krokowy i pęcherzyki nasienne": "wytwarzanie wydzieliny wchodzącej w skład spermy"
    },
    "explanation": "Jądra wytwarzają plemniki i testosteron, najądrza odpowiadają za dojrzewanie plemników, nasieniowody je wyprowadzają, a prostata i pęcherzyki nasienne produkują składniki spermy.",
    "image": "r10_meski_uklad_anatomia.jpg"
  },
  {
    "id": "R10_MESK_07",
    "section": "Męski układ rozrodczy",
    "type": "sort",
    "prompt": "Przyporządkuj narządy do grup: zewnętrzne i wewnętrzne.",
    "options": null,
    "items": [
      "prącie",
      "moszna",
      "jądra",
      "najądrza",
      "nasieniowody",
      "gruczoł krokowy"
    ],
    "categories": [
      "zewnętrzne",
      "wewnętrzne"
    ],
    "answer": {
      "zewnętrzne": [
        "prącie",
        "moszna"
      ],
      "wewnętrzne": [
        "jądra",
        "najądrza",
        "nasieniowody",
        "gruczoł krokowy"
      ]
    },
    "explanation": "Prącie i moszna znajdują się na zewnątrz organizmu. Pozostałe narządy należą do wewnętrznych narządów płciowych."
  },
  {
    "id": "R10_MESK_08",
    "section": "Męski układ rozrodczy",
    "type": "sequence",
    "prompt": "Ułóż drogę plemników od miejsca ich wytwarzania do wyprowadzenia nasienia z organizmu.",
    "options": null,
    "items": [
      "cewka moczowa",
      "najądrza",
      "jądra",
      "nasieniowody"
    ],
    "answer": [
      "jądra",
      "najądrza",
      "nasieniowody",
      "cewka moczowa"
    ],
    "explanation": "Plemniki powstają w jądrach, dojrzewają w najądrzach, następnie przemieszczają się nasieniowodami do cewki moczowej."
  },
  {
    "id": "R10_MESK_09",
    "section": "Męski układ rozrodczy",
    "type": "scenario",
    "prompt": "W próbce nasienia stwierdzono plemniki oraz płyn zawierający substancje odżywcze, który pobudza plemniki do ruchu. Które narządy wytwarzają ten składnik spermy?",
    "options": [
      "Gruczoł krokowy i pęcherzyki nasienne",
      "Jądra i najądrza",
      "Moszna i prącie",
      "Nasieniowody i cewka moczowa"
    ],
    "answer": 0,
    "explanation": "Gruczoł krokowy i pęcherzyki nasienne wytwarzają wydzielinę zawierającą m.in. substancje odżywcze dla plemników."
  },
  {
    "id": "R10_ZENS_01",
    "section": "Żeński układ rozrodczy",
    "type": "single_choice",
    "prompt": "W którym narządzie żeńskiego układu rozrodczego najczęściej dochodzi do zapłodnienia?",
    "options": [
      "Jajowód",
      "Macica",
      "Jajnik",
      "Pochwa",
      "Srom",
      "Szyjka macicy"
    ],
    "answer": 0,
    "explanation": "Miejscem zapłodnienia jest jajowód, którym komórka jajowa przemieszcza się w kierunku macicy.",
    "image": "r10_zenski_uklad_anatomia.jpg"
  },
  {
    "id": "R10_ZENS_02",
    "section": "Żeński układ rozrodczy",
    "type": "multi_select",
    "prompt": "Zaznacz wewnętrzne narządy płciowe kobiety.",
    "options": [
      "Jajniki",
      "Jajowody",
      "Macica",
      "Pochwa",
      "Łechtaczka",
      "Wargi sromowe większe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do wewnętrznych narządów płciowych kobiety należą jajniki, jajowody, macica i pochwa."
  },
  {
    "id": "R10_ZENS_03",
    "section": "Żeński układ rozrodczy",
    "type": "true_false",
    "prompt": "Komórka jajowa ma zdolność samodzielnego poruszania się podobnie jak plemnik.",
    "options": null,
    "answer": false,
    "explanation": "Komórka jajowa nie ma zdolności poruszania się. Jest transportowana m.in. dzięki ruchom nabłonka wyściełającego jajowód.",
    "image": "r10_komorka_jajowa.jpg"
  },
  {
    "id": "R10_ZENS_04",
    "section": "Żeński układ rozrodczy",
    "type": "fill_in",
    "prompt": "Jajniki wytwarzają żeńskie komórki rozrodcze, czyli __________, oraz hormony płciowe, m.in. __________ i __________.",
    "options": null,
    "answer": [
      "komórki jajowe",
      "estrogeny",
      "progesteron"
    ],
    "altAnswers": [
      [
        "komórki jajowe",
        "komórka jajowa"
      ],
      [
        "estrogeny",
        "estrogen"
      ],
      [
        "progesteron"
      ]
    ],
    "explanation": "Jajniki są żeńskimi gonadami. Wytwarzają komórki jajowe oraz hormony płciowe, m.in. estrogeny i progesteron."
  },
  {
    "id": "R10_ZENS_05",
    "section": "Żeński układ rozrodczy",
    "type": "riddle",
    "prompt": "Jest silnie umięśnionym narządem, w którym podczas ciąży rozwija się płód. Co to za narząd?",
    "options": null,
    "answer": "macica",
    "altAnswers": [
      "macica"
    ],
    "explanation": "Macica tworzy przestrzeń dla zagnieżdżenia zarodka i rozwoju płodu."
  },
  {
    "id": "R10_ZENS_06",
    "section": "Żeński układ rozrodczy",
    "type": "match",
    "prompt": "Połącz żeński narząd płciowy z jego funkcją.",
    "options": null,
    "left": [
      "jajniki",
      "jajowody",
      "macica",
      "pochwa"
    ],
    "right": [
      "wytwarzanie i dojrzewanie komórek jajowych",
      "transport komórki jajowej i miejsce zapłodnienia",
      "miejsce rozwoju zarodka i płodu",
      "kanał łączący szyjkę macicy z zewnętrzną częścią ciała"
    ],
    "answer": {
      "jajniki": "wytwarzanie i dojrzewanie komórek jajowych",
      "jajowody": "transport komórki jajowej i miejsce zapłodnienia",
      "macica": "miejsce rozwoju zarodka i płodu",
      "pochwa": "kanał łączący szyjkę macicy z zewnętrzną częścią ciała"
    },
    "explanation": "Każdy z tych narządów ma inną rolę: jajniki wytwarzają gamety, jajowody je transportują, macica umożliwia rozwój potomstwa, a pochwa łączy szyjkę macicy z zewnętrzną częścią ciała.",
    "image": "r10_zenski_uklad_anatomia.jpg"
  },
  {
    "id": "R10_ZENS_07",
    "section": "Żeński układ rozrodczy",
    "type": "sort",
    "prompt": "Przyporządkuj elementy żeńskiego układu rozrodczego do narządów zewnętrznych i wewnętrznych.",
    "options": null,
    "items": [
      "wargi sromowe większe",
      "wargi sromowe mniejsze",
      "łechtaczka",
      "jajniki",
      "jajowody",
      "macica",
      "pochwa"
    ],
    "categories": [
      "zewnętrzne",
      "wewnętrzne"
    ],
    "answer": {
      "zewnętrzne": [
        "wargi sromowe większe",
        "wargi sromowe mniejsze",
        "łechtaczka"
      ],
      "wewnętrzne": [
        "jajniki",
        "jajowody",
        "macica",
        "pochwa"
      ]
    },
    "explanation": "Wargi sromowe i łechtaczka tworzą zewnętrzne narządy płciowe, a jajniki, jajowody, macica i pochwa znajdują się wewnątrz ciała."
  },
  {
    "id": "R10_ZENS_08",
    "section": "Żeński układ rozrodczy",
    "type": "scenario",
    "prompt": "Podczas porodu dziecko przechodzi z macicy przez elastyczny kanał łączący szyjkę macicy z zewnętrzną częścią ciała. O jaki narząd chodzi?",
    "options": [
      "Pochwa",
      "Jajowód",
      "Jajnik",
      "Srom",
      "Pęcherzyk jajnikowy"
    ],
    "answer": 0,
    "explanation": "Pochwa jest rozciągliwym kanałem łączącym szyjkę macicy z zewnętrzną częścią ciała i stanowi drogę porodu."
  },
  {
    "id": "R10_ZENS_09",
    "section": "Żeński układ rozrodczy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: jajniki, jajowody, macica, moszna.",
    "options": null,
    "answer": "moszna",
    "explanation": "Jajniki, jajowody i macica należą do żeńskiego układu rozrodczego, a moszna jest zewnętrznym narządem płciowym mężczyzny."
  },
  {
    "id": "R10_CYKL_01",
    "section": "Cykl miesiączkowy",
    "type": "single_choice",
    "prompt": "Jak wyznacza się długość cyklu miesiączkowego?",
    "options": [
      "Od pierwszego dnia krwawienia do dnia poprzedzającego kolejne krwawienie",
      "Od końca krwawienia do następnej owulacji",
      "Od owulacji do pierwszego dnia następnego krwawienia",
      "Od pierwszego do ostatniego dnia krwawienia",
      "Od 13. do 15. dnia każdego miesiąca"
    ],
    "answer": 0,
    "explanation": "Cykl miesiączkowy trwa od pierwszego dnia krwawienia do dnia poprzedzającego kolejne krwawienie."
  },
  {
    "id": "R10_CYKL_02",
    "section": "Cykl miesiączkowy",
    "type": "true_false",
    "prompt": "Przeciętny cykl miesiączkowy trwa około 28 dni, a prawidłowe cykle mogą trwać od 21 do 35 dni.",
    "options": null,
    "answer": true,
    "explanation": "Przeciętny cykl miesiączkowy trwa około 28 dni, a prawidłowy zakres wynosi 21-35 dni."
  },
  {
    "id": "R10_CYKL_03",
    "section": "Cykl miesiączkowy",
    "type": "fill_in",
    "prompt": "Cykl miesiączkowy jest regulowany przez hormony, m.in. __________ i __________.",
    "options": null,
    "answer": [
      "estrogeny",
      "progesteron"
    ],
    "altAnswers": [
      [
        "estrogeny",
        "estrogen"
      ],
      [
        "progesteron"
      ]
    ],
    "explanation": "Estrogeny i progesteron należą do hormonów regulujących zmiany zachodzące w cyklu miesiączkowym."
  },
  {
    "id": "R10_CYKL_04",
    "section": "Cykl miesiączkowy",
    "type": "match",
    "prompt": "Połącz fazę cyklu miesiączkowego z charakterystycznym wydarzeniem.",
    "options": null,
    "left": [
      "krwawienie miesiączkowe",
      "faza pęcherzykowa",
      "owulacja",
      "faza poowulacyjna"
    ],
    "right": [
      "złuszczanie błony śluzowej macicy",
      "dojrzewanie pęcherzyka jajnikowego",
      "uwolnienie komórki jajowej do jajowodu",
      "przekształcenie pustego pęcherzyka w ciałko żółte"
    ],
    "answer": {
      "krwawienie miesiączkowe": "złuszczanie błony śluzowej macicy",
      "faza pęcherzykowa": "dojrzewanie pęcherzyka jajnikowego",
      "owulacja": "uwolnienie komórki jajowej do jajowodu",
      "faza poowulacyjna": "przekształcenie pustego pęcherzyka w ciałko żółte"
    },
    "explanation": "Krwawienie wiąże się ze złuszczaniem błony śluzowej macicy, faza pęcherzykowa z dojrzewaniem pęcherzyka, owulacja z uwolnieniem komórki jajowej, a faza poowulacyjna z powstaniem ciałka żółtego."
  },
  {
    "id": "R10_CYKL_05",
    "section": "Cykl miesiączkowy",
    "type": "sequence",
    "prompt": "Ułóż fazy cyklu miesiączkowego w kolejności od pierwszego dnia cyklu.",
    "options": null,
    "items": [
      "owulacja",
      "faza poowulacyjna",
      "krwawienie miesiączkowe",
      "faza pęcherzykowa"
    ],
    "answer": [
      "krwawienie miesiączkowe",
      "faza pęcherzykowa",
      "owulacja",
      "faza poowulacyjna"
    ],
    "explanation": "Cykl rozpoczyna krwawienie miesiączkowe, po nim następuje faza pęcherzykowa, następnie owulacja i faza poowulacyjna."
  },
  {
    "id": "R10_CYKL_06",
    "section": "Cykl miesiączkowy",
    "type": "multi_select",
    "prompt": "Zaznacz procesy zachodzące w fazie pęcherzykowej.",
    "options": [
      "Dojrzewanie pęcherzyka jajnikowego",
      "Regeneracja błony śluzowej macicy",
      "Przekształcenie pęcherzyka w ciałko żółte",
      "Uwolnienie komórki jajowej do jajowodu",
      "Złuszczanie błony śluzowej macicy"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "W fazie pęcherzykowej dojrzewa pęcherzyk jajnikowy, a błona śluzowa macicy odbudowuje się."
  },
  {
    "id": "R10_CYKL_07",
    "section": "Cykl miesiączkowy",
    "type": "riddle",
    "prompt": "Dojrzały pęcherzyk pęka, a komórka jajowa zostaje uwolniona do jajowodu. Jak nazywa się to zjawisko?",
    "options": null,
    "answer": "owulacja",
    "altAnswers": [
      "owulacja",
      "jajeczkowanie"
    ],
    "explanation": "Owulacja, czyli jajeczkowanie, to uwolnienie komórki jajowej do jajowodu.",
    "image": "r10_pecherzyk_jajnikowy.jpg"
  },
  {
    "id": "R10_CYKL_08",
    "section": "Cykl miesiączkowy",
    "type": "scenario",
    "prompt": "U osoby z regularnym 28-dniowym cyklem trwa właśnie środkowa część cyklu, około 13.-15. dnia. Które wydarzenie jest wtedy najbardziej typowe?",
    "options": [
      "Owulacja",
      "Rozpoczęcie miesiączki",
      "Zanik błony śluzowej macicy w fazie pęcherzykowej",
      "Początek dojrzewania płciowego"
    ],
    "answer": 0,
    "explanation": "Owulacja występuje zazwyczaj w połowie cyklu, między 13. a 15. dniem.",
    "image": "r10_pecherzyk_jajnikowy.jpg"
  },
  {
    "id": "R10_CYKL_09",
    "section": "Cykl miesiączkowy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: krwawienie miesiączkowe, faza pęcherzykowa, owulacja, implantacja, faza poowulacyjna.",
    "options": null,
    "answer": "implantacja",
    "explanation": "Krwawienie, faza pęcherzykowa, owulacja i faza poowulacyjna są fazami cyklu miesiączkowego. Implantacja oznacza zagnieżdżenie zarodka w macicy."
  },
  {
    "id": "R10_CHOR_01",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "single_choice",
    "prompt": "Zakażenie którym wirusem zwiększa ryzyko raka szyjki macicy?",
    "options": [
      "HPV",
      "HSV",
      "wirus grypy",
      "wirus odry",
      "wirus świnki"
    ],
    "answer": 0,
    "explanation": "Zakażenie wirusem brodawczaka ludzkiego, czyli HPV, zwiększa ryzyko rozwoju raka szyjki macicy."
  },
  {
    "id": "R10_CHOR_02",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "multi_select",
    "prompt": "Zaznacz choroby przenoszone drogą płciową.",
    "options": [
      "Chlamydioza",
      "Rzeżączka",
      "Kiła",
      "Opryszczka narządów płciowych",
      "Rzęsistkowica",
      "Rak prostaty"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Chlamydioza, rzeżączka, kiła, opryszczka narządów płciowych i rzęsistkowica należą do chorób przenoszonych drogą płciową. Rak prostaty jest chorobą nowotworową."
  },
  {
    "id": "R10_CHOR_03",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "true_false",
    "prompt": "Wiele chorób przenoszonych drogą płciową może przebiegać bez objawów lub z bardzo nieznacznymi objawami.",
    "options": null,
    "answer": true,
    "explanation": "Brak wyraźnych objawów sprawia, że osoba zakażona może nieświadomie zarażać kolejne osoby."
  },
  {
    "id": "R10_CHOR_04",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "match",
    "prompt": "Połącz czynnik chorobotwórczy z chorobą.",
    "options": null,
    "left": [
      "krętek blady",
      "Chlamydia trachomatis",
      "wirus HSV",
      "wirus HPV"
    ],
    "right": [
      "kiła",
      "chlamydioza",
      "opryszczka narządów płciowych",
      "brodawki płciowe"
    ],
    "answer": {
      "krętek blady": "kiła",
      "Chlamydia trachomatis": "chlamydioza",
      "wirus HSV": "opryszczka narządów płciowych",
      "wirus HPV": "brodawki płciowe"
    },
    "explanation": "Krętek blady wywołuje kiłę, Chlamydia trachomatis chlamydiozę, HSV opryszczkę narządów płciowych, a HPV może powodować brodawki płciowe."
  },
  {
    "id": "R10_CHOR_05",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "scenario",
    "prompt": "Kobieta chce wykonać badanie profilaktyczne polegające na mikroskopowej ocenie materiału pobranego z szyjki macicy. Jak nazywa się to badanie?",
    "options": [
      "Cytologia",
      "Mammografia",
      "USG piersi",
      "Badanie nasienia",
      "Radioterapia"
    ],
    "answer": 0,
    "explanation": "Badanie cytologiczne polega na mikroskopowej ocenie materiału pobranego z szyjki macicy i służy profilaktyce raka szyjki macicy.",
    "image": "r10_badanie_cytologiczne.jpg"
  },
  {
    "id": "R10_CHOR_06",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "sort",
    "prompt": "Przyporządkuj działania do higieny intymnej albo profilaktyki zakażeń i chorób.",
    "options": null,
    "items": [
      "codzienne mycie narządów płciowych",
      "codzienna zmiana bielizny",
      "unikanie przypadkowych kontaktów seksualnych",
      "używanie prezerwatywy podczas kontaktów seksualnych",
      "regularne badania kontrolne"
    ],
    "categories": [
      "higiena intymna",
      "profilaktyka zakażeń i chorób"
    ],
    "answer": {
      "higiena intymna": [
        "codzienne mycie narządów płciowych",
        "codzienna zmiana bielizny"
      ],
      "profilaktyka zakażeń i chorób": [
        "unikanie przypadkowych kontaktów seksualnych",
        "używanie prezerwatywy podczas kontaktów seksualnych",
        "regularne badania kontrolne"
      ]
    },
    "explanation": "Higiena intymna obejmuje codzienne mycie i zmianę bielizny. Ryzyko zakażeń i ciężkich chorób zmniejszają także bezpieczniejsze kontakty seksualne oraz regularne badania."
  },
  {
    "id": "R10_CHOR_07",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "single_choice",
    "prompt": "Które badanie wykorzystuje promienie rentgenowskie do profilaktycznego wykrywania raka piersi?",
    "options": [
      "Mammografia",
      "Cytologia",
      "Badanie nasienia",
      "Samobadanie jąder",
      "Badanie hormonów płciowych"
    ],
    "answer": 0,
    "explanation": "Mammografia jest badaniem piersi wykorzystującym promienie rentgenowskie.",
    "image": "r10_badanie_mammograficzne.jpg"
  },
  {
    "id": "R10_CHOR_08",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "riddle",
    "prompt": "Połączenie plemnika z komórką jajową poza organizmem kobiety, w warunkach laboratoryjnych, to...",
    "options": null,
    "answer": "zapłodnienie in vitro",
    "altAnswers": [
      "zapłodnienie in vitro",
      "in vitro"
    ],
    "explanation": "Zapłodnienie in vitro polega na połączeniu gamet poza organizmem kobiety; do jej ciała wprowadzane są później zarodki."
  },
  {
    "id": "R10_CHOR_09",
    "section": "Choroby i higiena układu rozrodczego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: bakterie, wirusy, grzyby, progesteron.",
    "options": null,
    "answer": "progesteron",
    "explanation": "Bakterie, wirusy i grzyby mogą być czynnikami chorobotwórczymi atakującymi układ rozrodczy. Progesteron jest hormonem płciowym."
  },
  {
    "id": "R10_POCZ_01",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "single_choice",
    "prompt": "Jak nazywa się pierwsza komórka nowego organizmu powstała w wyniku zapłodnienia?",
    "options": [
      "Zygota",
      "Zarodek",
      "Płód",
      "Komórka jajowa",
      "Pęcherzyk jajnikowy"
    ],
    "answer": 0,
    "explanation": "Zygota jest pierwszą komórką nowego organizmu i powstaje po połączeniu plemnika z komórką jajową."
  },
  {
    "id": "R10_POCZ_02",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju od zapłodnienia do etapu płodowego.",
    "options": null,
    "items": [
      "płód",
      "zygota",
      "zapłodnienie",
      "zarodek"
    ],
    "answer": [
      "zapłodnienie",
      "zygota",
      "zarodek",
      "płód"
    ],
    "explanation": "Po zapłodnieniu powstaje zygota, z jej podziałów rozwija się zarodek, a po zakończeniu etapu zarodkowego rozpoczyna się etap płodowy."
  },
  {
    "id": "R10_POCZ_03",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "true_false",
    "prompt": "Ciąża rozpoczyna się w momencie zagnieżdżenia zarodka w macicy.",
    "options": null,
    "answer": true,
    "explanation": "Początek ciąży wiąże się z implantacją, czyli zagnieżdżeniem zarodka w ścianie macicy."
  },
  {
    "id": "R10_POCZ_04",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "match",
    "prompt": "Połącz błonę płodową z jej funkcją.",
    "options": null,
    "left": [
      "owodnia",
      "omocznia",
      "kosmówka"
    ],
    "right": [
      "tworzy wodne środowisko i chroni przed wstrząsami oraz wyschnięciem",
      "gromadzi produkty przemiany materii zarodka i płodu",
      "bierze udział w tworzeniu łożyska"
    ],
    "answer": {
      "owodnia": "tworzy wodne środowisko i chroni przed wstrząsami oraz wyschnięciem",
      "omocznia": "gromadzi produkty przemiany materii zarodka i płodu",
      "kosmówka": "bierze udział w tworzeniu łożyska"
    },
    "explanation": "Owodnia otacza rozwijający się organizm i tworzy wodne środowisko, omocznia gromadzi produkty przemiany materii, a kosmówka uczestniczy w tworzeniu łożyska."
  },
  {
    "id": "R10_POCZ_05",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje łożyska.",
    "options": [
      "Umożliwia wymianę substancji między matką a dzieckiem",
      "Przekazuje pod koniec ciąży przeciwciała od matki",
      "Produkuje m.in. estrogeny i progesteron",
      "Jest miejscem powstawania komórek jajowych",
      "Magazynuje plemniki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Łożysko pośredniczy w wymianie substancji, może przekazywać przeciwciała oraz pełni funkcję gruczołu dokrewnego produkującego m.in. estrogeny i progesteron.",
    "image": "r10_lozysko_i_pepowina.jpg"
  },
  {
    "id": "R10_POCZ_06",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "fill_in",
    "prompt": "Ciąża trwa około __________ miesięcy, czyli około __________ tygodni.",
    "options": null,
    "answer": [
      "9",
      "40"
    ],
    "altAnswers": [
      [
        "9",
        "dziewięć",
        "9 miesięcy"
      ],
      [
        "40",
        "czterdzieści",
        "40 tygodni"
      ]
    ],
    "explanation": "Ciąża trwa około 9 miesięcy, a podsumowanie etapu podaje około 40 tygodni."
  },
  {
    "id": "R10_POCZ_07",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "scenario",
    "prompt": "Narząd między organizmem matki a rozwijającym się dzieckiem przekazuje tlen i substancje odżywcze do płodu, a w przeciwną stronę produkty przemiany materii i dwutlenek węgla. Co to za narząd?",
    "options": [
      "Łożysko",
      "Jajowód",
      "Jajnik",
      "Pęcherzyk jajnikowy",
      "Gruczoł krokowy"
    ],
    "answer": 0,
    "explanation": "Łożysko służy do wymiany substancji między matką a dzieckiem. Krew matki i płodu nie miesza się ze sobą.",
    "image": "r10_lozysko_i_pepowina.jpg"
  },
  {
    "id": "R10_POCZ_08",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "single_choice",
    "prompt": "Kiedy kończy się etap zarodkowy i rozpoczyna etap płodowy?",
    "options": [
      "Po około 9 tygodniach",
      "Po około 7 dniach",
      "W 18. tygodniu",
      "W 24. tygodniu",
      "Dopiero podczas porodu"
    ],
    "answer": 0,
    "explanation": "Po około 9 tygodniach kończy się etap zarodkowy, a rozpoczyna etap płodowy, w którym trwa dalszy rozwój narządów i wzrost organizmu.",
    "image": "r10_plod_w_macicy.jpg"
  },
  {
    "id": "R10_POCZ_09",
    "section": "Rozwój od poczęcia do narodzin",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: alkohol, nikotyna, narkotyki i dopalacze, smog, bawełniana bielizna.",
    "options": null,
    "answer": "bawełniana bielizna",
    "explanation": "Alkohol, nikotyna, narkotyki, dopalacze oraz smog mogą negatywnie wpływać na rozwój dziecka w czasie ciąży. Bawełniana bielizna dotyczy higieny intymnej."
  },
  {
    "id": "R10_NARO_01",
    "section": "Od narodzin do starości",
    "type": "sequence",
    "prompt": "Ułóż etapy rozwoju człowieka po urodzeniu od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "dojrzewania",
      "niemowlęcy",
      "dorosłości",
      "noworodkowy",
      "przedszkolny i szkolny",
      "poniemowlęcy"
    ],
    "answer": [
      "noworodkowy",
      "niemowlęcy",
      "poniemowlęcy",
      "przedszkolny i szkolny",
      "dojrzewania",
      "dorosłości"
    ],
    "explanation": "Po narodzinach następują kolejno etapy: noworodkowy, niemowlęcy, poniemowlęcy, przedszkolny i szkolny, dojrzewania oraz dorosłości.",
    "image": "r10_etapy_zycia.jpg"
  },
  {
    "id": "R10_NARO_02",
    "section": "Od narodzin do starości",
    "type": "single_choice",
    "prompt": "W jakim wieku zazwyczaj rozpoczyna się dojrzewanie u dziewczynek?",
    "options": [
      "Około 9.-10. roku życia",
      "Około 3. roku życia",
      "Około 15.-16. roku życia",
      "Około 20.-25. roku życia",
      "Po 50. roku życia"
    ],
    "answer": 0,
    "explanation": "Dojrzewanie u dziewczynek rozpoczyna się zwykle wcześniej niż u chłopców, około 9.-10. roku życia."
  },
  {
    "id": "R10_NARO_03",
    "section": "Od narodzin do starości",
    "type": "true_false",
    "prompt": "Dojrzewanie u chłopców rozpoczyna się zwykle około 11.-12. roku życia.",
    "options": null,
    "answer": true,
    "explanation": "Chłopcy zaczynają dojrzewać nieco później niż dziewczynki, zwykle w wieku 11-12 lat."
  },
  {
    "id": "R10_NARO_04",
    "section": "Od narodzin do starości",
    "type": "multi_select",
    "prompt": "Zaznacz cechy charakterystyczne dla etapu dojrzewania.",
    "options": [
      "Zwiększona produkcja hormonów płciowych",
      "Szybki rozwój narządów rozrodczych",
      "Częste zmiany nastroju",
      "Miesiączkowanie u dziewcząt",
      "Mutacja u chłopców",
      "Pojawienie się menopauzy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Dojrzewaniu towarzyszą zmiany fizyczne i psychiczne, m.in. wzrost produkcji hormonów płciowych, rozwój narządów rozrodczych, wahania nastroju, miesiączkowanie u dziewcząt i mutacja u chłopców."
  },
  {
    "id": "R10_NARO_05",
    "section": "Od narodzin do starości",
    "type": "match",
    "prompt": "Połącz etap dzieciństwa z jego czasem trwania.",
    "options": null,
    "left": [
      "noworodkowy",
      "niemowlęcy",
      "poniemowlęcy",
      "przedszkolny i szkolny"
    ],
    "right": [
      "pierwsze 4 tygodnie życia",
      "do ukończenia 1. roku życia",
      "do 3. roku życia",
      "od 3. do 9.-11. roku życia"
    ],
    "answer": {
      "noworodkowy": "pierwsze 4 tygodnie życia",
      "niemowlęcy": "do ukończenia 1. roku życia",
      "poniemowlęcy": "do 3. roku życia",
      "przedszkolny i szkolny": "od 3. do 9.-11. roku życia"
    },
    "explanation": "Etap noworodkowy obejmuje pierwsze 4 tygodnie, niemowlęcy trwa do końca 1. roku życia, poniemowlęcy do 3. roku życia, a etap przedszkolny i szkolny od 3. do około 9.-11. roku życia."
  },
  {
    "id": "R10_NARO_06",
    "section": "Od narodzin do starości",
    "type": "fill_in",
    "prompt": "U kobiet okres zmian związany z zatrzymaniem cykli miesiączkowych to __________, a u mężczyzn odpowiednikiem jest __________.",
    "options": null,
    "answer": [
      "menopauza",
      "andropauza"
    ],
    "altAnswers": [
      [
        "menopauza"
      ],
      [
        "andropauza"
      ]
    ],
    "explanation": "W okresie przekwitania u kobiet pojawia się menopauza, a u mężczyzn andropauza."
  },
  {
    "id": "R10_NARO_07",
    "section": "Od narodzin do starości",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych cech dorosłości: największa sprawność organizmu, koniec procesu wzrostu, gotowość do podjęcia pracy, miesiączkowanie u dziewcząt.",
    "options": null,
    "answer": "miesiączkowanie u dziewcząt",
    "explanation": "Miesiączkowanie u dziewcząt jest cechą okresu dojrzewania. Pozostałe elementy są cechami dorosłości."
  },
  {
    "id": "R10_NARO_08",
    "section": "Od narodzin do starości",
    "type": "scenario",
    "prompt": "Osoba ma około 65 lat. Pojawiają się siwe włosy i zmarszczki, spada sprawność fizyczna, a kości są bardziej podatne na złamania. Który etap rozwoju najlepiej opisuje tę sytuację?",
    "options": [
      "Starość",
      "Dojrzewanie",
      "Etap niemowlęcy",
      "Dorosłość wczesna",
      "Etap poniemowlęcy"
    ],
    "answer": 0,
    "explanation": "Starość rozpoczyna się mniej więcej w 60. roku życia i wiąże się m.in. ze spadkiem sprawności, siwieniem oraz większą podatnością kości na złamania.",
    "image": "r10_etapy_zycia.jpg"
  },
  {
    "id": "R10_NARO_09",
    "section": "Od narodzin do starości",
    "type": "sort",
    "prompt": "Przyporządkuj cechy dojrzewania do rozwoju fizycznego, psychicznego lub społecznego.",
    "options": null,
    "items": [
      "rozwój narządów płciowych",
      "pojawienie się miesiączki u dziewcząt",
      "wahania nastroju",
      "kształtowanie osobowości",
      "duży wpływ grupy rówieśniczej"
    ],
    "categories": [
      "rozwój fizyczny",
      "rozwój psychiczny",
      "rozwój społeczny"
    ],
    "answer": {
      "rozwój fizyczny": [
        "rozwój narządów płciowych",
        "pojawienie się miesiączki u dziewcząt"
      ],
      "rozwój psychiczny": [
        "wahania nastroju",
        "kształtowanie osobowości"
      ],
      "rozwój społeczny": [
        "duży wpływ grupy rówieśniczej"
      ]
    },
    "explanation": "W dojrzewaniu zmiany fizyczne obejmują rozwój narządów płciowych i pojawienie się miesiączki, psychiczne obejmują wahania nastroju i kształtowanie osobowości, a społecznie silnie oddziałuje grupa rówieśnicza."
  },
  {
    "id": "R10_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Moszna utrzymuje temperaturę jąder o około __________ °C niższą od temperatury ciała, a przeciętny cykl miesiączkowy trwa około __________ dni.",
    "options": null,
    "answer": [
      "2",
      "28"
    ],
    "altAnswers": [
      [
        "2",
        "dwa"
      ],
      [
        "28",
        "dwadzieścia osiem"
      ]
    ],
    "explanation": "Niższa o około 2°C temperatura jąder sprzyja rozwojowi plemników, a przeciętny cykl miesiączkowy trwa około 28 dni."
  },
  {
    "id": "R10_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie narządy, które są gonadami i jednocześnie wytwarzają gamety oraz hormony płciowe.",
    "options": [
      "Jądra",
      "Jajniki",
      "Najądrza",
      "Jajowody",
      "Gruczoł krokowy",
      "Macica"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Gonadami są jądra u mężczyzn i jajniki u kobiet. Oba rodzaje gonad wytwarzają gamety oraz hormony płciowe."
  },
  {
    "id": "R10_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz komórkę rozrodczą lub jej część z właściwą cechą.",
    "options": null,
    "left": [
      "główka plemnika",
      "wstawka plemnika",
      "witka plemnika",
      "komórka jajowa"
    ],
    "right": [
      "zawiera jądro z informacją genetyczną od ojca",
      "zawiera liczne mitochondria dostarczające energii",
      "umożliwia ruch w kierunku komórki jajowej",
      "zawiera substancje zapasowe w cytoplazmie"
    ],
    "answer": {
      "główka plemnika": "zawiera jądro z informacją genetyczną od ojca",
      "wstawka plemnika": "zawiera liczne mitochondria dostarczające energii",
      "witka plemnika": "umożliwia ruch w kierunku komórki jajowej",
      "komórka jajowa": "zawiera substancje zapasowe w cytoplazmie"
    },
    "explanation": "Główka przenosi informację genetyczną ojca, wstawka zawiera mitochondria, witka umożliwia ruch, a komórka jajowa ma w cytoplazmie substancje zapasowe.",
    "image": "r10_plemnik_budowa.jpg"
  },
  {
    "id": "R10_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia od owulacji do początku ciąży.",
    "options": null,
    "items": [
      "implantacja zarodka w macicy",
      "powstanie zygoty",
      "uwolnienie komórki jajowej do jajowodu",
      "podziały zygoty i powstanie zarodka",
      "zapłodnienie w jajowodzie"
    ],
    "answer": [
      "uwolnienie komórki jajowej do jajowodu",
      "zapłodnienie w jajowodzie",
      "powstanie zygoty",
      "podziały zygoty i powstanie zarodka",
      "implantacja zarodka w macicy"
    ],
    "explanation": "Po owulacji komórka jajowa trafia do jajowodu. Jeśli dochodzi tam do zapłodnienia, powstaje zygota, która dzieli się w drodze do macicy, a zarodek następnie się w niej zagnieżdża."
  },
  {
    "id": "R10_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Para ma problem z uzyskaniem ciąży. Badania wykazały niedrożność jajowodów, a lekarz rozważa metodę, w której gamety łączy się poza organizmem kobiety. Która metoda odpowiada temu opisowi?",
    "options": [
      "Zapłodnienie in vitro",
      "Sztuczne unasienianie",
      "Metoda naturalna",
      "Mammografia",
      "Cytologia"
    ],
    "answer": 0,
    "explanation": "Niedrożność jajowodów jest jednym ze wskazań do zapłodnienia in vitro, w którym gamety łączy się w warunkach laboratoryjnych."
  },
  {
    "id": "R10_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co dzieje się z ciałkiem żółtym, jeśli nie doszło do zapłodnienia?",
    "options": [
      "Zanika po około 14 dniach od owulacji",
      "Przekształca się w jajowód",
      "Staje się komórką jajową",
      "Przenosi się do macicy",
      "Tworzy pępowinę"
    ],
    "answer": 0,
    "explanation": "Jeśli nie doszło do zapłodnienia, po około 14 dniach od owulacji ciałko żółte zanika, co prowadzi do zmian kończących się kolejnym krwawieniem.",
    "image": "r10_pecherzyk_jajnikowy.jpg"
  },
  {
    "id": "R10_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W łożysku krew matki miesza się bezpośrednio z krwią płodu.",
    "options": null,
    "answer": false,
    "explanation": "Krew matki i płodu nie miesza się. Wymiana substancji przez łożysko zachodzi na drodze dyfuzji.",
    "image": "r10_lozysko_i_pepowina.jpg"
  },
  {
    "id": "R10_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje prawidłowo opisujące łożysko.",
    "options": [
      "Dostarcza dziecku tlen i substancje odżywcze",
      "Odbiera od dziecka dwutlenek węgla i produkty przemiany materii",
      "Pod koniec ciąży przekazuje dziecku przeciwciała od matki",
      "Produkuje m.in. estrogeny i progesteron",
      "Jest miejscem dojrzewania plemników",
      "Powstaje wyłącznie z komórek płodu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Łożysko uczestniczy w wymianie gazów i substancji, przekazuje przeciwciała oraz produkuje hormony. Jest wytworzone ze ściany macicy i kosmówki.",
    "image": "r10_lozysko_i_pepowina.jpg"
  },
  {
    "id": "R10_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz tydzień ciąży z wydarzeniem rozwoju płodowego.",
    "options": null,
    "left": [
      "18. tydzień",
      "24. tydzień",
      "32. tydzień",
      "39. tydzień"
    ],
    "right": [
      "bicie serca dziecka staje się słyszalne",
      "widoczne są brwi i rzęsy",
      "dziecko otwiera i zamyka oczy",
      "płód jest w pełni ukształtowany"
    ],
    "answer": {
      "18. tydzień": "bicie serca dziecka staje się słyszalne",
      "24. tydzień": "widoczne są brwi i rzęsy",
      "32. tydzień": "dziecko otwiera i zamyka oczy",
      "39. tydzień": "płód jest w pełni ukształtowany"
    },
    "explanation": "W 18. tygodniu bicie serca staje się słyszalne, w 24. widoczne są brwi i rzęsy, w 32. dziecko otwiera i zamyka oczy, a w 39. tygodniu płód jest w pełni ukształtowany.",
    "image": "r10_plod_w_macicy.jpg"
  },
  {
    "id": "R10_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz chorobę z charakterystycznym objawem lub cechą.",
    "options": null,
    "left": [
      "kiła",
      "rzeżączka",
      "chlamydioza",
      "opryszczka narządów płciowych"
    ],
    "right": [
      "początkowo bezbolesne owrzodzenia a później wysypka",
      "ropna wydzielina z cewki moczowej oraz ból i pieczenie u mężczyzn",
      "pieczenie przy oddawaniu moczu oraz upławy i świąd",
      "nawracające pęcherzyki i owrzodzenia w okolicy narządów płciowych"
    ],
    "answer": {
      "kiła": "początkowo bezbolesne owrzodzenia a później wysypka",
      "rzeżączka": "ropna wydzielina z cewki moczowej oraz ból i pieczenie u mężczyzn",
      "chlamydioza": "pieczenie przy oddawaniu moczu oraz upławy i świąd",
      "opryszczka narządów płciowych": "nawracające pęcherzyki i owrzodzenia w okolicy narządów płciowych"
    },
    "explanation": "Objawy różnią się między zakażeniami: kiła może zaczynać się od bezbolesnych owrzodzeń, rzeżączka u mężczyzn daje m.in. ropną wydzielinę, chlamydioza może powodować pieczenie i upławy, a opryszczka nawracające pęcherzyki i owrzodzenia."
  },
  {
    "id": "R10_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj opis lub przykład do metody kontroli płodności.",
    "options": null,
    "items": [
      "unikanie stosunku podczas dni płodnych",
      "prezerwatywa",
      "tabletki antykoncepcyjne"
    ],
    "categories": [
      "metoda naturalna",
      "metoda mechaniczna",
      "metoda hormonalna"
    ],
    "answer": {
      "metoda naturalna": [
        "unikanie stosunku podczas dni płodnych"
      ],
      "metoda mechaniczna": [
        "prezerwatywa"
      ],
      "metoda hormonalna": [
        "tabletki antykoncepcyjne"
      ]
    },
    "explanation": "Metody naturalne wykorzystują znajomość cyklu, mechaniczne tworzą barierę dla gamet, a hormonalne wpływają na stężenie hormonów i hamują dojrzewanie komórki jajowej."
  },
  {
    "id": "R10_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: owodnia, omocznia, kosmówka, ciałko żółte.",
    "options": null,
    "answer": "ciałko żółte",
    "explanation": "Owodnia, omocznia i kosmówka są błonami płodowymi. Ciałko żółte powstaje z pustego pęcherzyka jajnikowego po owulacji."
  },
  {
    "id": "R10_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Przekwitanie rozpoczyna się po osiągnięciu około __________ roku życia, a starość mniej więcej około __________ roku życia.",
    "options": null,
    "answer": [
      "45.",
      "60."
    ],
    "altAnswers": [
      [
        "45.",
        "45",
        "45 roku życia"
      ],
      [
        "60.",
        "60",
        "60 roku życia"
      ]
    ],
    "explanation": "Przekwitanie zaczyna się po około 45. roku życia, natomiast starość rozpoczyna się mniej więcej w 60. roku życia.",
    "image": "r10_etapy_zycia.jpg"
  },
  {
    "id": "R10_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U nastolatki każdej miesiączce towarzyszy bardzo silny ból. Jaki problem zdrowotny warto w takiej sytuacji wcześnie wykluczyć u ginekologa?",
    "options": [
      "Endometriozę",
      "Raka prostaty",
      "Rzeżączkę",
      "Brodawki płciowe",
      "Andropauzę"
    ],
    "answer": 0,
    "explanation": "Bardzo silny ból menstruacyjny może być jednym z objawów endometriozy, dlatego warto skonsultować go z ginekologiem."
  }
];

const chapter = {
  id: "r10",
  number: 10,
  title: "Układ rozrodczy",
  icon: "🧬",
  sectionOrder: [
    "Męski układ rozrodczy",
    "Żeński układ rozrodczy",
    "Cykl miesiączkowy",
    "Choroby i higiena układu rozrodczego",
    "Rozwój od poczęcia do narodzin",
    "Od narodzin do starości"
  ],
  sectionIcons: {
    "Męski układ rozrodczy": "♂️",
    "Żeński układ rozrodczy": "♀️",
    "Cykl miesiączkowy": "🗓️",
    "Choroby i higiena układu rozrodczego": "🩺",
    "Rozwój od poczęcia do narodzin": "🤰",
    "Od narodzin do starości": "🌱"
  },
  exercises: ALL_EXERCISES
};

export default chapter;
