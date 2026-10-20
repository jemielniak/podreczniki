// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TKAN = Tkanki zwierzęce
//   GPAR = Gąbki i parzydełkowce
//   ROBA = Płazińce, nicienie i pierścienice
//   STMI = Stawonogi i mięczaki
//   RYPG = Ryby, płazy i gady
//   PTSS = Ptaki i ssaki
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_TKAN_01",
    "section": "Tkanki zwierzęce",
    "type": "single_choice",
    "prompt": "Która tkanka zwierzęca jest wyspecjalizowana w kurczeniu się?",
    "options": [
      "Tkanka nerwowa",
      "Tkanka mięśniowa",
      "Tkanka nabłonkowa",
      "Tkanka kostna",
      "Tkanka tłuszczowa",
      "Tkanka chrzęstna"
    ],
    "answer": 1,
    "explanation": "Kurczenie się jest podstawową właściwością tkanki mięśniowej; umożliwiają je między innymi aktyna i miozyna."
  },
  {
    "id": "R04_TKAN_02",
    "section": "Tkanki zwierzęce",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje przypisywane tkance nabłonkowej.",
    "options": [
      "Ochrona organizmu",
      "Wydzielanie substancji",
      "Wchłanianie substancji",
      "Odbieranie bodźców",
      "Wytwarzanie czerwonych krwinek",
      "Magazynowanie wapnia w kościach"
    ],
    "image": "r04_rodzaje_nablonkow.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Nabłonki ochraniają, wydzielają, wchłaniają i mogą odbierać bodźce; nie odpowiadają za magazynowanie wapnia w kościach."
  },
  {
    "id": "R04_TKAN_03",
    "section": "Tkanki zwierzęce",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki z jej podstawową funkcją.",
    "options": null,
    "left": [
      "Nabłonkowa",
      "Mięśniowa",
      "Łączna",
      "Nerwowa"
    ],
    "right": [
      "Przewodzenie impulsów",
      "Łączenie i podpieranie tkanek",
      "Wywoływanie skurczu",
      "Okrywanie i wyściełanie powierzchni"
    ],
    "answer": {
      "Nabłonkowa": "Okrywanie i wyściełanie powierzchni",
      "Mięśniowa": "Wywoływanie skurczu",
      "Łączna": "Łączenie i podpieranie tkanek",
      "Nerwowa": "Przewodzenie impulsów"
    },
    "explanation": "Nabłonek osłania powierzchnie, mięśnie kurczą się, tkanka łączna łączy inne tkanki, a nerwowa przewodzi impulsy."
  },
  {
    "id": "R04_TKAN_04",
    "section": "Tkanki zwierzęce",
    "type": "true_false",
    "prompt": "Komórki nabłonka szybko się dzielą, dlatego tkanka nabłonkowa dobrze się regeneruje.",
    "options": null,
    "answer": true,
    "explanation": "Komórki nabłonkowe zachowują zdolność do podziałów, dlatego nabłonek może szybko się regenerować."
  },
  {
    "id": "R04_TKAN_05",
    "section": "Tkanki zwierzęce",
    "type": "fill_in",
    "prompt": "Dwa białka miofibryli umożliwiające skurcz mięśni to __________ i __________.",
    "options": null,
    "altAnswers": [
      [
        "aktyna",
        "aktynę"
      ],
      [
        "miozyna",
        "miozynę"
      ]
    ],
    "answer": [
      "aktyna",
      "miozyna"
    ],
    "explanation": "Miofibryle zawierają aktynę i miozynę, które mogą przesuwać się względem siebie, doprowadzając do skurczu."
  },
  {
    "id": "R04_TKAN_06",
    "section": "Tkanki zwierzęce",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest rodzajem nabłonka: płaski, sześcienny, walcowaty, kostny.",
    "options": null,
    "image": "r04_rodzaje_nablonkow.jpg",
    "answer": "kostny",
    "explanation": "Płaski, sześcienny i walcowaty opisują kształt komórek nabłonkowych; tkanka kostna jest tkanką łączną."
  },
  {
    "id": "R04_TKAN_07",
    "section": "Tkanki zwierzęce",
    "type": "single_choice",
    "prompt": "Gdzie występuje tkanka mięśniowa gładka?",
    "options": [
      "W ścianie jelit",
      "W ścięgnach",
      "W kościach czaszki",
      "W naskórku",
      "W rdzeniu kręgowym",
      "W chrząstce małżowiny usznej"
    ],
    "answer": 0,
    "explanation": "Tkanka mięśniowa gładka buduje między innymi ściany jelit, dróg oddechowych i naczyń krwionośnych."
  },
  {
    "id": "R04_TKAN_08",
    "section": "Tkanki zwierzęce",
    "type": "riddle",
    "prompt": "Jak nazywa się komórka tkanki nerwowej przekazująca impulsy?",
    "options": null,
    "altAnswers": [
      "neuron",
      "komórka nerwowa"
    ],
    "image": "r04_neuron_schemat.jpg",
    "answer": "neuron",
    "explanation": "Neurony odbierają i przekazują impulsy, a komórki glejowe zapewniają im m.in. ochronę i odżywianie."
  },
  {
    "id": "R04_TKAN_09",
    "section": "Tkanki zwierzęce",
    "type": "sort",
    "prompt": "Podziel tkanki łączne na stałe oraz płynne.",
    "options": null,
    "items": [
      "chrzęstna",
      "tłuszczowa",
      "limfa",
      "kostna",
      "krew"
    ],
    "categories": [
      "Stałe",
      "Płynne"
    ],
    "answer": {
      "Stałe": [
        "chrzęstna",
        "kostna",
        "tłuszczowa"
      ],
      "Płynne": [
        "krew",
        "limfa"
      ]
    },
    "explanation": "Do stałych tkanek łącznych należą m.in. chrzęstna, kostna i tłuszczowa, a do płynnych krew i limfa."
  },
  {
    "id": "R04_TKAN_10",
    "section": "Tkanki zwierzęce",
    "type": "scenario",
    "prompt": "Po złamaniu kości organizm odbudowuje uszkodzony składnik szkieletu. O którą tkankę łączną chodzi?",
    "options": [
      "Tkanka tłuszczowa",
      "Tkanka chrzęstna",
      "Tkanka kostna",
      "Krew",
      "Limfa",
      "Tkanka nerwowa"
    ],
    "answer": 2,
    "explanation": "Tkanka kostna buduje szkielet kręgowców; jej substancja międzykomórkowa zawiera sole mineralne i kolagen."
  },
  {
    "id": "R04_TKAN_11",
    "section": "Tkanki zwierzęce",
    "type": "sequence",
    "prompt": "Ułóż elementy w kolejności przepływu impulsu w typowym neuronie.",
    "options": null,
    "items": [
      "zakończenie aksonu",
      "akson",
      "ciało komórkowe",
      "dendryty",
      "synapsa"
    ],
    "image": "r04_neuron_schemat.jpg",
    "answer": [
      "dendryty",
      "ciało komórkowe",
      "akson",
      "zakończenie aksonu",
      "synapsa"
    ],
    "explanation": "Dendryty odbierają impulsy i przekazują je do ciała komórkowego, skąd biegną aksonem do jego zakończenia i dalej przez synapsę."
  },
  {
    "id": "R04_GPAR_01",
    "section": "Gąbki i parzydełkowce",
    "type": "true_false",
    "prompt": "Wszystkie zwierzęta są cudzożywnymi organizmami wielokomórkowymi.",
    "options": null,
    "answer": true,
    "explanation": "Wielokomórkowość i cudzożywność to wspólne cechy zwierząt."
  },
  {
    "id": "R04_GPAR_02",
    "section": "Gąbki i parzydełkowce",
    "type": "single_choice",
    "prompt": "Które z wymienionych zwierząt nie wykształciły tkanek?",
    "options": [
      "Koralowce",
      "Gąbki",
      "Płazińce",
      "Nicienie",
      "Pierścienice",
      "Małże"
    ],
    "answer": 1,
    "explanation": "Gąbki zalicza się do beztkankowców, ponieważ nie wykształciły tkanek ani narządów."
  },
  {
    "id": "R04_GPAR_03",
    "section": "Gąbki i parzydełkowce",
    "type": "multi_select",
    "prompt": "Które stwierdzenia dotyczą gąbek?",
    "options": [
      "Prowadzą osiadły tryb życia",
      "Odżywiają się przez filtrowanie wody",
      "Mają duże zdolności regeneracji",
      "Występują wyłącznie na lądzie",
      "Ich ciało posiada liczne otwory umożliwiające przepływ wody"
    ],
    "image": "r04_gabka_przekroj.jpg",
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Gąbki żyją w wodzie, osiadle, filtrują przepływającą wodę i potrafią regenerować uszkodzone fragmenty ciała."
  },
  {
    "id": "R04_GPAR_04",
    "section": "Gąbki i parzydełkowce",
    "type": "fill_in",
    "prompt": "Osiadła postać parzydełkowca nazywa się __________, a swobodnie żyjąca postać to __________.",
    "options": null,
    "altAnswers": [
      [
        "polip",
        "polipem"
      ],
      [
        "meduza",
        "meduzą"
      ]
    ],
    "image": "r04_polip_meduza.jpg",
    "answer": [
      "polip",
      "meduza"
    ],
    "explanation": "Parzydełkowce mogą występować w postaci osiadłego polipa oraz wolno żyjącej meduzy."
  },
  {
    "id": "R04_GPAR_05",
    "section": "Gąbki i parzydełkowce",
    "type": "match",
    "prompt": "Połącz pojęcia związane z parzydełkowcami z opisami.",
    "options": null,
    "left": [
      "Polip",
      "Meduza",
      "Mezoglea",
      "Jama gastralna"
    ],
    "right": [
      "Przestrzeń, w której rozpoczyna się trawienie",
      "Galaretowata warstwa między ektodermą i endodermą",
      "Postać swobodnie pływająca",
      "Postać osiadła"
    ],
    "image": "r04_polip_meduza.jpg",
    "answer": {
      "Polip": "Postać osiadła",
      "Meduza": "Postać swobodnie pływająca",
      "Mezoglea": "Galaretowata warstwa między ektodermą i endodermą",
      "Jama gastralna": "Przestrzeń, w której rozpoczyna się trawienie"
    },
    "explanation": "Polip jest osiadły, meduza pływa, mezoglea leży między warstwami komórek, a jama gastralna uczestniczy w trawieniu."
  },
  {
    "id": "R04_GPAR_06",
    "section": "Gąbki i parzydełkowce",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm spoza parzydełkowców: stułbiopław, krążkopław, koralowiec, małż.",
    "options": null,
    "answer": "małż",
    "explanation": "Stułbiopławy, krążkopławy i koralowce to grupy parzydełkowców; małże należą do mięczaków."
  },
  {
    "id": "R04_GPAR_07",
    "section": "Gąbki i parzydełkowce",
    "type": "scenario",
    "prompt": "Zwierzę siedzi przytwierdzone do podłoża i pobiera z wody zawieszone drobinki pokarmu, przepuszczając ją przez otwory w ciele. Jak się odżywia?",
    "options": [
      "Poluje przy pomocy zębów",
      "Filtruje wodę",
      "Prowadzi fotosyntezę",
      "Wysysa krew żywiciela",
      "Odżywia się przez tarkę",
      "Połyka całe rośliny"
    ],
    "answer": 1,
    "explanation": "Gąbki filtrują wodę; pokarm trafia do komórek, w których jest trawiony."
  },
  {
    "id": "R04_GPAR_08",
    "section": "Gąbki i parzydełkowce",
    "type": "riddle",
    "prompt": "Jak nazywają się komórki parzydełkowców służące do obrony i obezwładniania zdobyczy?",
    "options": null,
    "altAnswers": [
      "komórki parzydełkowe",
      "parzydełkowe"
    ],
    "image": "r04_polip_meduza.jpg",
    "answer": "komórki parzydełkowe",
    "explanation": "Komórki parzydełkowe zawierają nić i toksyny, które są uwalniane podczas podrażnienia."
  },
  {
    "id": "R04_GPAR_09",
    "section": "Gąbki i parzydełkowce",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do gąbek albo parzydełkowców.",
    "options": null,
    "items": [
      "brak wykształconych tkanek",
      "liczne otwory w ciele",
      "postać polipa lub meduzy",
      "filtrowanie wody",
      "komórki parzydełkowe",
      "ektoderma i endoderma"
    ],
    "categories": [
      "Gąbki",
      "Parzydełkowce"
    ],
    "answer": {
      "Gąbki": [
        "brak wykształconych tkanek",
        "filtrowanie wody",
        "liczne otwory w ciele"
      ],
      "Parzydełkowce": [
        "komórki parzydełkowe",
        "postać polipa lub meduzy",
        "ektoderma i endoderma"
      ]
    },
    "explanation": "Gąbki nie mają tkanek i filtrują wodę; parzydełkowce mają komórki parzydełkowe i dwie warstwy wyspecjalizowanych komórek."
  },
  {
    "id": "R04_GPAR_10",
    "section": "Gąbki i parzydełkowce",
    "type": "sequence",
    "prompt": "Ułóż wybrane etapy przemiany pokoleń chełbi modrej w kolejności od gamet do nowej meduzy.",
    "options": null,
    "items": [
      "polip",
      "ruchliwa larwa",
      "zygota",
      "gamety",
      "młoda meduza"
    ],
    "answer": [
      "gamety",
      "zygota",
      "ruchliwa larwa",
      "polip",
      "młoda meduza"
    ],
    "explanation": "Z zapłodnionych gamet powstaje zygota, następnie larwa i polip, a z polipa w wyniku strobilizacji powstają młode meduzy."
  },
  {
    "id": "R04_ROBA_01",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "single_choice",
    "prompt": "Jaki kształt ciała jest charakterystyczny dla płazińców?",
    "options": [
      "Spłaszczony grzbietobrzusznie",
      "Walcowaty i okrągły w przekroju",
      "Pokryty wapienną muszlą",
      "Zbudowany z dwóch skrzydeł",
      "Oparty na chitynowym pancerzu",
      "Wyposażony w płetwy"
    ],
    "answer": 0,
    "explanation": "Płazińce mają ciało spłaszczone grzbietobrzusznie i wykazują symetrię dwuboczną."
  },
  {
    "id": "R04_ROBA_02",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "multi_select",
    "prompt": "Wybierz przystosowania tasiemca do pasożytniczego trybu życia.",
    "options": [
      "Aparaty czepne na główce",
      "Pobieranie pokarmu całą powierzchnią ciała",
      "Odporność na enzymy trawienne żywiciela",
      "Wytwarzanie wielu jaj",
      "Skrzela do oddychania w wodzie",
      "Wykształcenie chitynowych skrzydeł"
    ],
    "image": "r04_tasiemiec_budowa.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Tasiemce przyczepiają się do jelita, nie mają własnego układu pokarmowego, są odporne na enzymy i wytwarzają liczne jaja."
  },
  {
    "id": "R04_ROBA_03",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "fill_in",
    "prompt": "Żywicielem pośrednim tasiemca uzbrojonego jest __________, a tasiemca nieuzbrojonego __________.",
    "options": null,
    "altAnswers": [
      [
        "świnia",
        "świnie",
        "świni"
      ],
      [
        "krowa",
        "krowie",
        "bydło"
      ]
    ],
    "answer": [
      "świnia",
      "krowa"
    ],
    "explanation": "W cyklu tasiemca uzbrojonego larwy rozwijają się w świni, a nieuzbrojonego w krowie; człowiek jest żywicielem ostatecznym."
  },
  {
    "id": "R04_ROBA_04",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "true_false",
    "prompt": "Tasiemiec dorosły ma własny układ pokarmowy z otworem gębowym i odbytem.",
    "options": null,
    "image": "r04_tasiemiec_budowa.jpg",
    "answer": false,
    "explanation": "Tasiemce nie mają układu pokarmowego; pobierają substancje odżywcze całą powierzchnią ciała."
  },
  {
    "id": "R04_ROBA_05",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "match",
    "prompt": "Połącz pasożyta z jego żywicielem lub miejscem bytowania.",
    "options": null,
    "left": [
      "Tasiemiec uzbrojony – larwy",
      "Tasiemiec nieuzbrojony – larwy",
      "Owsik ludzki – dorosłe osobniki",
      "Glista ludzka – osobnik dojrzały"
    ],
    "right": [
      "Jelito cienkie człowieka",
      "Jelito grube człowieka",
      "Krowa",
      "Świnia"
    ],
    "answer": {
      "Tasiemiec uzbrojony – larwy": "Świnia",
      "Tasiemiec nieuzbrojony – larwy": "Krowa",
      "Owsik ludzki – dorosłe osobniki": "Jelito grube człowieka",
      "Glista ludzka – osobnik dojrzały": "Jelito cienkie człowieka"
    },
    "explanation": "Wągry obu tasiemców powstają odpowiednio u świni i krowy, owsiki żyją w jelicie grubym, a dojrzałe glisty w jelicie cienkim człowieka."
  },
  {
    "id": "R04_ROBA_06",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "single_choice",
    "prompt": "Jakie ciało mają nicienie w przekroju poprzecznym?",
    "options": [
      "Spłaszczone jak taśma",
      "Okrągłe",
      "Trójkątne",
      "Gwiaździste",
      "Czworokątne",
      "Podzielone na muszle"
    ],
    "answer": 1,
    "explanation": "Ciało nicieni jest nitkowate i obłe, w przekroju poprzecznym okrągłe."
  },
  {
    "id": "R04_ROBA_07",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest pasożytem: glista ludzka, owsik ludzki, dżdżownica, tasiemiec uzbrojony.",
    "options": null,
    "answer": "dżdżownica",
    "explanation": "Dżdżownica jest wolno żyjącym skąposzczetem odżywiającym się materią organiczną, a pozostałe przykłady to pasożyty człowieka."
  },
  {
    "id": "R04_ROBA_08",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "scenario",
    "prompt": "Uczeń chce ograniczyć ryzyko zarażenia glistą ludzką. Który nawyk szczególnie mu w tym pomoże?",
    "options": [
      "Jedzenie nieumytych owoców",
      "Picie nieprzegotowanej wody",
      "Dokładne mycie warzyw i rąk",
      "Chodzenie boso po śniegu",
      "Unikanie snu zimą",
      "Zakładanie okularów ochronnych"
    ],
    "answer": 2,
    "explanation": "Jaja glisty mogą trafić do przewodu pokarmowego z zanieczyszczoną żywnością lub wodą; ważna jest higiena."
  },
  {
    "id": "R04_ROBA_09",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "riddle",
    "prompt": "Jaka substancja wydzielana przez pijawki zapobiega krzepnięciu krwi?",
    "options": null,
    "altAnswers": [
      "hirudyna",
      "hirudynę"
    ],
    "answer": "hirudyna",
    "explanation": "Pijawki wydzielają hirudynę, która utrudnia krzepnięcie krwi pobieranej od żywiciela."
  },
  {
    "id": "R04_ROBA_10",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "sort",
    "prompt": "Przyporządkuj cechy przedstawicielom pierścienic.",
    "options": null,
    "items": [
      "parapodia po bokach segmentów",
      "nieliczne szczecinki",
      "przyssawki na obu końcach ciała",
      "głównie organizmy morskie",
      "przykładem jest dżdżownica",
      "wydzielanie hirudyny"
    ],
    "categories": [
      "Wieloszczety",
      "Skąposzczety",
      "Pijawki"
    ],
    "image": "r04_dzdzownica_segmenty.jpg",
    "answer": {
      "Wieloszczety": [
        "parapodia po bokach segmentów",
        "głównie organizmy morskie"
      ],
      "Skąposzczety": [
        "nieliczne szczecinki",
        "przykładem jest dżdżownica"
      ],
      "Pijawki": [
        "przyssawki na obu końcach ciała",
        "wydzielanie hirudyny"
      ]
    },
    "explanation": "Wieloszczety mają parapodia, skąposzczety m.in. drobne szczecinki, a pijawki przyssawki i hirudynę."
  },
  {
    "id": "R04_ROBA_11",
    "section": "Płazińce, nicienie i pierścienice",
    "type": "sequence",
    "prompt": "Ułóż etapy wędrówki larwy glisty ludzkiej w organizmie po uwolnieniu jej w jelicie.",
    "options": null,
    "items": [
      "płuca",
      "serce",
      "wątroba",
      "naczynia krwionośne",
      "jelito cienkie",
      "tchawica i gardło"
    ],
    "answer": [
      "jelito cienkie",
      "naczynia krwionośne",
      "wątroba",
      "serce",
      "płuca",
      "tchawica i gardło"
    ],
    "explanation": "Larwy glisty wydostają się z jelita do krwi, wędrują przez wątrobę i serce do płuc, a następnie do tchawicy i gardła, skąd są połykane."
  },
  {
    "id": "R04_STMI_01",
    "section": "Stawonogi i mięczaki",
    "type": "single_choice",
    "prompt": "Od czego pochodzi nazwa stawonogów?",
    "options": [
      "Od ramion pokrytych piórami",
      "Od członowanych odnóży połączonych stawami",
      "Od ciała w jednej muszli",
      "Od przyssawek na głowie",
      "Od obecności kręgosłupa",
      "Od odnóży bez stawów"
    ],
    "image": "r04_stawonog_budowa.jpg",
    "answer": 1,
    "explanation": "Stawonogi mają członowane odnóża, których człony łączą stawy, umożliwiając sprawny ruch."
  },
  {
    "id": "R04_STMI_02",
    "section": "Stawonogi i mięczaki",
    "type": "true_false",
    "prompt": "Stawonogi w czasie wzrostu zrzucają zbyt mały chitynowy pancerz, czyli linieją.",
    "options": null,
    "answer": true,
    "explanation": "Chitynowy oskórek nie rośnie razem z ciałem; stawonóg musi go okresowo zrzucić i wytworzyć nowy."
  },
  {
    "id": "R04_STMI_03",
    "section": "Stawonogi i mięczaki",
    "type": "sort",
    "prompt": "Przyporządkuj zwierzęta do grup stawonogów.",
    "options": null,
    "items": [
      "rak",
      "pszczoła",
      "pająk",
      "skorpion",
      "krab",
      "mrówka",
      "kleszcz"
    ],
    "categories": [
      "Skorupiaki",
      "Owady",
      "Pajęczaki"
    ],
    "answer": {
      "Skorupiaki": [
        "rak",
        "krab"
      ],
      "Owady": [
        "pszczoła",
        "mrówka"
      ],
      "Pajęczaki": [
        "pająk",
        "kleszcz",
        "skorpion"
      ]
    },
    "explanation": "Rak i krab to skorupiaki; pszczoła i mrówka są owadami; pająk, kleszcz i skorpion należą do pajęczaków."
  },
  {
    "id": "R04_STMI_04",
    "section": "Stawonogi i mięczaki",
    "type": "fill_in",
    "prompt": "Owady mają __________ pary odnóży krocznych, natomiast pajęczaki mają ich __________.",
    "options": null,
    "altAnswers": [
      [
        "trzy",
        "3"
      ],
      [
        "cztery",
        "4"
      ]
    ],
    "answer": [
      "trzy",
      "cztery"
    ],
    "explanation": "Owady mają trzy pary odnóży krocznych na tułowiu; pajęczaki cztery pary na głowotułowiu."
  },
  {
    "id": "R04_STMI_05",
    "section": "Stawonogi i mięczaki",
    "type": "multi_select",
    "prompt": "Wybierz cechy budowy typowego dorosłego owada.",
    "options": [
      "Głowa",
      "Tułów",
      "Odwłok",
      "Trzy pary odnóży krocznych",
      "Cztery pary odnóży krocznych",
      "Wewnętrzny szkielet kostny"
    ],
    "image": "r04_stawonog_budowa.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ciało owada tworzą głowa, tułów i odwłok; na tułowiu znajdują się trzy pary nóg."
  },
  {
    "id": "R04_STMI_06",
    "section": "Stawonogi i mięczaki",
    "type": "match",
    "prompt": "Połącz część ciała stawonoga z jej rolą.",
    "options": null,
    "left": [
      "Chitynowy oskórek",
      "Czułki",
      "Odnóża kroczne",
      "Kądziołki przędne pająka"
    ],
    "right": [
      "Wytwarzają nici pajęcze",
      "Umożliwiają przemieszczanie się",
      "Odbierają bodźce z otoczenia",
      "Osłania i tworzy szkielet zewnętrzny"
    ],
    "answer": {
      "Chitynowy oskórek": "Osłania i tworzy szkielet zewnętrzny",
      "Czułki": "Odbierają bodźce z otoczenia",
      "Odnóża kroczne": "Umożliwiają przemieszczanie się",
      "Kądziołki przędne pająka": "Wytwarzają nici pajęcze"
    },
    "explanation": "Pancerz pełni rolę ochronną i szkieletową, czułki odbierają bodźce, odnóża służą ruchowi, a kądziołki wytwarzają nici."
  },
  {
    "id": "R04_STMI_07",
    "section": "Stawonogi i mięczaki",
    "type": "scenario",
    "prompt": "U motyla z jaja wylęga się gąsienica, która później zmienia się w nieruchomą poczwarkę, a następnie w postać dorosłą. Jaki to typ przeobrażenia?",
    "options": [
      "Proste",
      "Niezupełne",
      "Zupełne",
      "Bez rozmnażania",
      "Strobilizacja",
      "Pączkowanie"
    ],
    "image": "r04_owad_przeobrazenie.jpg",
    "answer": 2,
    "explanation": "Przeobrażenie zupełne obejmuje stadium larwy niepodobnej do osobnika dorosłego i stadium poczwarki."
  },
  {
    "id": "R04_STMI_08",
    "section": "Stawonogi i mięczaki",
    "type": "sequence",
    "prompt": "Ułóż stadia rozwoju motyla z przeobrażeniem zupełnym.",
    "options": null,
    "items": [
      "poczwarka",
      "larwa",
      "jajo",
      "owad dorosły"
    ],
    "image": "r04_owad_przeobrazenie.jpg",
    "answer": [
      "jajo",
      "larwa",
      "poczwarka",
      "owad dorosły"
    ],
    "explanation": "W przeobrażeniu zupełnym po jaju i larwie następuje poczwarka, z której powstaje owad dorosły."
  },
  {
    "id": "R04_STMI_09",
    "section": "Stawonogi i mięczaki",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie należy do pajęczaków: pająk, kleszcz, skorpion, chrząszcz.",
    "options": null,
    "answer": "chrząszcz",
    "explanation": "Chrząszcz jest owadem; pająki, kleszcze i skorpiony zalicza się do pajęczaków."
  },
  {
    "id": "R04_STMI_10",
    "section": "Stawonogi i mięczaki",
    "type": "single_choice",
    "prompt": "Jak małże pobierają pokarm?",
    "options": [
      "Filtrują wodę wpływającą do jamy płaszczowej",
      "Polują żądłem jadowym",
      "Łapią zdobycz siecią pajęczą",
      "Rozcierają liście zębami",
      "Korzystają z fotosyntezy",
      "Pobierają pokarm wyłącznie przez skórę"
    ],
    "image": "r04_malz_syfony.jpg",
    "answer": 0,
    "explanation": "Małże filtrują wodę przez skrzela i przesuwają zatrzymany pokarm do otworu gębowego."
  },
  {
    "id": "R04_STMI_11",
    "section": "Stawonogi i mięczaki",
    "type": "riddle",
    "prompt": "Jak nazywa się narząd głowonogów, przez który wyrzucają wodę podczas ruchu odrzutowego?",
    "options": null,
    "altAnswers": [
      "lejek",
      "lejkiem"
    ],
    "answer": "lejek",
    "explanation": "Głowonogi wypychają wodę z jamy płaszczowej przez lejek, dzięki czemu poruszają się ruchem odrzutowym."
  },
  {
    "id": "R04_STMI_12",
    "section": "Stawonogi i mięczaki",
    "type": "match",
    "prompt": "Połącz grupę mięczaków z charakterystyczną cechą budowy.",
    "options": null,
    "left": [
      "Ślimaki",
      "Małże",
      "Głowonogi"
    ],
    "right": [
      "Ramiona z przyssawkami i lejek",
      "Dwie połówki muszli i syfony",
      "Umięśniona noga umożliwiająca pełzanie"
    ],
    "image": "r04_malz_syfony.jpg",
    "answer": {
      "Ślimaki": "Umięśniona noga umożliwiająca pełzanie",
      "Małże": "Dwie połówki muszli i syfony",
      "Głowonogi": "Ramiona z przyssawkami i lejek"
    },
    "explanation": "Ślimaki pełzają dzięki nodze, małże posiadają dwuczęściową muszlę i syfony, a głowonogi przekształcone ramiona oraz lejek."
  },
  {
    "id": "R04_RYPG_01",
    "section": "Ryby, płazy i gady",
    "type": "single_choice",
    "prompt": "Za pomocą jakiego narządu ryby pobierają tlen rozpuszczony w wodzie?",
    "options": [
      "Płuc",
      "Skrzeli",
      "Tchawek",
      "Worków powietrznych",
      "Przepony",
      "Jamy płaszczowej"
    ],
    "image": "r04_ryba_pletwy.jpg",
    "answer": 1,
    "explanation": "Ryby oddychają przez skrzela, których blaszki są silnie ukrwione."
  },
  {
    "id": "R04_RYPG_02",
    "section": "Ryby, płazy i gady",
    "type": "multi_select",
    "prompt": "Wskaż nieparzyste płetwy ryb.",
    "options": [
      "Grzbietowa",
      "Ogonowa",
      "Odbytowa",
      "Piersiowe",
      "Brzuszne"
    ],
    "image": "r04_ryba_pletwy.jpg",
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do płetw nieparzystych należą grzbietowa, ogonowa i odbytowa; piersiowe i brzuszne występują parami."
  },
  {
    "id": "R04_RYPG_03",
    "section": "Ryby, płazy i gady",
    "type": "match",
    "prompt": "Połącz narząd lub część ciała ryby z jej funkcją.",
    "options": null,
    "left": [
      "Skrzela",
      "Linia naboczna",
      "Łuski",
      "Płetwa ogonowa"
    ],
    "right": [
      "Wspomaganie napędu podczas pływania",
      "Ochrona ciała przed urazami",
      "Wykrywanie ruchów wody",
      "Wymiana gazowa w wodzie"
    ],
    "answer": {
      "Skrzela": "Wymiana gazowa w wodzie",
      "Linia naboczna": "Wykrywanie ruchów wody",
      "Łuski": "Ochrona ciała przed urazami",
      "Płetwa ogonowa": "Wspomaganie napędu podczas pływania"
    },
    "explanation": "Skrzela odpowiadają za oddychanie, linia naboczna reaguje na ruch wody, pęcherz pławny pomaga utrzymywać się w wodzie, a ogon napędza rybę."
  },
  {
    "id": "R04_RYPG_04",
    "section": "Ryby, płazy i gady",
    "type": "true_false",
    "prompt": "Serce ryby ma jeden przedsionek i jedną komorę.",
    "options": null,
    "answer": true,
    "explanation": "U ryb występuje zamknięty układ krwionośny z jednym obiegiem krwi, a serce ma jedną komorę i jeden przedsionek."
  },
  {
    "id": "R04_RYPG_05",
    "section": "Ryby, płazy i gady",
    "type": "scenario",
    "prompt": "Dwie ryby żyją w różnych częściach zbiornika. Jedna szybko przemieszcza się w otwartej wodzie. Jaki kształt ciała będzie dla niej typowy?",
    "options": [
      "Opływowy i wydłużony",
      "Silnie spłaszczony jak płaszczka",
      "Kulisty z kolcami",
      "Złożony z pierścieni",
      "Wyposażony w skrzydła",
      "Dwuczęściowa muszla"
    ],
    "answer": 0,
    "explanation": "U szybko pływających ryb, np. tuńczyka, ciało jest wydłużone i opływowe."
  },
  {
    "id": "R04_RYPG_06",
    "section": "Ryby, płazy i gady",
    "type": "sort",
    "prompt": "Podziel wymienione kręgowce według sposobu regulowania temperatury ciała.",
    "options": null,
    "items": [
      "ryby",
      "gady",
      "ssaki",
      "płazy",
      "ptaki"
    ],
    "categories": [
      "Zmiennocieplne",
      "Stałocieplne"
    ],
    "answer": {
      "Zmiennocieplne": [
        "ryby",
        "płazy",
        "gady"
      ],
      "Stałocieplne": [
        "ptaki",
        "ssaki"
      ]
    },
    "explanation": "Ryby, płazy i gady są zmiennocieplne, natomiast ptaki i ssaki utrzymują stałą temperaturę ciała."
  },
  {
    "id": "R04_RYPG_07",
    "section": "Ryby, płazy i gady",
    "type": "fill_in",
    "prompt": "Larwy płazów, czyli kijanki, oddychają przede wszystkim za pomocą __________.",
    "options": null,
    "altAnswers": [
      [
        "skrzeli",
        "skrzela"
      ]
    ],
    "answer": [
      "skrzeli"
    ],
    "explanation": "Kijanki oddychają skrzelami; u dorosłych płazów w oddychaniu uczestniczą płuca i wilgotna skóra."
  },
  {
    "id": "R04_RYPG_08",
    "section": "Ryby, płazy i gady",
    "type": "sequence",
    "prompt": "Ułóż stadia rozwoju żaby od jaj do dorosłego osobnika.",
    "options": null,
    "items": [
      "młoda żaba z ogonem",
      "kijanka z tylnymi kończynami",
      "kijanka",
      "zapłodnione jaja",
      "dorosła żaba"
    ],
    "image": "r04_zaba_rozwoj.jpg",
    "answer": [
      "zapłodnione jaja",
      "kijanka",
      "kijanka z tylnymi kończynami",
      "młoda żaba z ogonem",
      "dorosła żaba"
    ],
    "explanation": "Żaba przechodzi rozwój złożony: z jaj wykluwają się kijanki, którym wyrastają kończyny, a następnie stopniowo zanika ogon."
  },
  {
    "id": "R04_RYPG_09",
    "section": "Ryby, płazy i gady",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę niezaliczane do gadów: żółw, krokodyl, jaszczurka, salamandra.",
    "options": null,
    "answer": "salamandra",
    "explanation": "Salamandra jest płazem ogoniastym, natomiast pozostałe organizmy należą do gadów."
  },
  {
    "id": "R04_RYPG_10",
    "section": "Ryby, płazy i gady",
    "type": "multi_select",
    "prompt": "Które cechy pomagają gadom żyć na lądzie?",
    "options": [
      "Sucha skóra z łuskami lub tarczkami",
      "Oddychanie płucami",
      "Jaja chronione przed wyschnięciem",
      "Obecność błon płodowych",
      "Oddychanie przez stale wilgotną skórę",
      "Zewnętrzne skrzela dorosłych"
    ],
    "image": "r04_jajo_gada.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sucha skóra i osłonki jaj chronią przed utratą wody; płuca i błony płodowe ułatwiają życie oraz rozmnażanie na lądzie."
  },
  {
    "id": "R04_RYPG_11",
    "section": "Ryby, płazy i gady",
    "type": "single_choice",
    "prompt": "Jaki główny produkt przemiany azotowej gady wydalają, oszczędzając wodę?",
    "options": [
      "Amoniak",
      "Mocznik",
      "Kwas moczowy",
      "Glukozę",
      "Tlen",
      "Dwutlenek węgla"
    ],
    "answer": 2,
    "explanation": "Wydalanie kwasu moczowego pozwala gadom ograniczać utratę wody."
  },
  {
    "id": "R04_RYPG_12",
    "section": "Ryby, płazy i gady",
    "type": "scenario",
    "prompt": "Zwierzę ma nagą skórę pokrytą śluzem, jego larwy oddychają skrzelami, a dorosłe osobniki także płucami i skórą. Do której grupy kręgowców należy?",
    "options": [
      "Ryb",
      "Płazów",
      "Gadów",
      "Ptaków",
      "Ssaków",
      "Głowonogów"
    ],
    "answer": 1,
    "explanation": "Opis odpowiada płazom, których rozwój larwalny wiąże się z wodą, a dorosłe zwierzęta oddychają również płucami."
  },
  {
    "id": "R04_PTSS_01",
    "section": "Ptaki i ssaki",
    "type": "fill_in",
    "prompt": "Pióra na skrzydłach służące do lotu to __________, a pióra ogona pomagające sterować lotem to __________.",
    "options": null,
    "altAnswers": [
      [
        "lotki",
        "lotkami"
      ],
      [
        "sterówki",
        "sterówkami"
      ]
    ],
    "image": "r04_ptak_piora.jpg",
    "answer": [
      "lotki",
      "sterówki"
    ],
    "explanation": "Lotki zwiększają powierzchnię skrzydeł; sterówki są na ogonie i ułatwiają sterowanie lotem."
  },
  {
    "id": "R04_PTSS_02",
    "section": "Ptaki i ssaki",
    "type": "single_choice",
    "prompt": "Która struktura współpracuje z rurkowatymi płucami ptaków i magazynuje powietrze?",
    "options": [
      "Pęcherz pławny",
      "Worki powietrzne",
      "Wole",
      "Przepona",
      "Skrzela",
      "Jama gastralna"
    ],
    "answer": 1,
    "explanation": "Ptaki mają płuca rurkowate i worki powietrzne, dzięki którym natlenione powietrze przepływa przez płuca podczas wdechu i wydechu."
  },
  {
    "id": "R04_PTSS_03",
    "section": "Ptaki i ssaki",
    "type": "true_false",
    "prompt": "Ptaki mają pęcherz moczowy, w którym gromadzą mocz przed wydaleniem.",
    "options": null,
    "answer": false,
    "explanation": "Ptaki nie mają pęcherza moczowego, co ogranicza masę ich ciała i sprzyja przystosowaniu do lotu."
  },
  {
    "id": "R04_PTSS_04",
    "section": "Ptaki i ssaki",
    "type": "match",
    "prompt": "Połącz rodzaj ptasich piór z ich funkcją.",
    "options": null,
    "left": [
      "Puchowe",
      "Okrywowe",
      "Lotki",
      "Sterówki"
    ],
    "right": [
      "Zmiana kierunku i wysokości lotu",
      "Zwiększanie powierzchni skrzydeł podczas lotu",
      "Osłona ciała i nadawanie opływowego kształtu",
      "Ochrona przed utratą ciepła"
    ],
    "image": "r04_ptak_piora.jpg",
    "answer": {
      "Puchowe": "Ochrona przed utratą ciepła",
      "Okrywowe": "Osłona ciała i nadawanie opływowego kształtu",
      "Lotki": "Zwiększanie powierzchni skrzydeł podczas lotu",
      "Sterówki": "Zmiana kierunku i wysokości lotu"
    },
    "explanation": "Puch izoluje, pióra okrywowe osłaniają, lotki wspomagają lot, a sterówki kierowanie nim."
  },
  {
    "id": "R04_PTSS_05",
    "section": "Ptaki i ssaki",
    "type": "sort",
    "prompt": "Rozdziel przykłady ptaków na gniazdowniki i zagniazdowniki.",
    "options": null,
    "items": [
      "wróbel",
      "bocian biały",
      "gołąb",
      "kaczka"
    ],
    "categories": [
      "Gniazdowniki",
      "Zagniazdowniki"
    ],
    "answer": {
      "Gniazdowniki": [
        "wróbel",
        "gołąb",
        "bocian biały"
      ],
      "Zagniazdowniki": [
        "kaczka"
      ]
    },
    "explanation": "Pisklęta gniazdowników rodzą się mało samodzielne; kaczki jako zagniazdowniki wcześnie chodzą i pływają."
  },
  {
    "id": "R04_PTSS_06",
    "section": "Ptaki i ssaki",
    "type": "single_choice",
    "prompt": "Jaka cecha jest związana z nazwą gromady ssaków?",
    "options": [
      "Obecność chitynowych skrzydeł",
      "Wydzielanie mleka przez gruczoły mlekowe",
      "Oddychanie przez skrzela",
      "Posiadanie muszli",
      "Brak kręgosłupa",
      "Posiadanie dwóch par czułków"
    ],
    "answer": 1,
    "explanation": "Ssaki odżywiają młode mlekiem wytwarzanym przez gruczoły mlekowe."
  },
  {
    "id": "R04_PTSS_07",
    "section": "Ptaki i ssaki",
    "type": "multi_select",
    "prompt": "Które gruczoły znajdują się w skórze ssaków?",
    "options": [
      "Potowe",
      "Łojowe",
      "Mlekowe",
      "Zapachowe",
      "Parzydełkowe",
      "Przędne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W skórze ssaków występują gruczoły potowe, łojowe, mlekowe i zapachowe; gruczoły przędne to nie cecha ssaków."
  },
  {
    "id": "R04_PTSS_08",
    "section": "Ptaki i ssaki",
    "type": "scenario",
    "prompt": "Kot bada najbliższe otoczenie długimi włosami czuciowymi przy pysku. Jaką pełnią one funkcję?",
    "options": [
      "Pomagają odbierać bodźce dotykowe",
      "Produkują mleko",
      "Wytwarzają pot",
      "Umożliwiają lot",
      "Rozcierają pokarm",
      "Tworzą pazury"
    ],
    "image": "r04_ssak_konczyny.jpg",
    "answer": 0,
    "explanation": "Wibrysy są włosami czuciowymi ssaków, m.in. kotów, i służą odbieraniu bodźców."
  },
  {
    "id": "R04_PTSS_09",
    "section": "Ptaki i ssaki",
    "type": "match",
    "prompt": "Połącz trzy grupy ssaków z cechami rozrodu.",
    "options": null,
    "left": [
      "Stekowce",
      "Torbacze",
      "Łożyskowce"
    ],
    "right": [
      "Rozwój zarodka z udziałem łożyska",
      "Dalszy rozwój młodych w torbie lęgowej",
      "Składanie jaj i obecność steku"
    ],
    "answer": {
      "Stekowce": "Składanie jaj i obecność steku",
      "Torbacze": "Dalszy rozwój młodych w torbie lęgowej",
      "Łożyskowce": "Rozwój zarodka z udziałem łożyska"
    },
    "explanation": "Stekowce, takie jak dziobak, składają jaja; torbacze mają torbę lęgową, a łożyskowce wytwarzają łożysko."
  },
  {
    "id": "R04_PTSS_10",
    "section": "Ptaki i ssaki",
    "type": "fill_in",
    "prompt": "Ruchy klatki piersiowej oraz skurcze __________ umożliwiają wentylację płuc ssaków.",
    "options": null,
    "altAnswers": [
      [
        "przepony",
        "przepona"
      ]
    ],
    "answer": [
      "przepony"
    ],
    "explanation": "U ssaków powietrze trafia do pęcherzykowatych płuc między innymi dzięki skurczom przepony."
  },
  {
    "id": "R04_PTSS_11",
    "section": "Ptaki i ssaki",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest ssakiem: dziobak, kolczatka, koala, żółw.",
    "options": null,
    "answer": "żółw",
    "explanation": "Dziobak i kolczatka są stekowcami, a koala torbaczem; żółw jest gadem."
  },
  {
    "id": "R04_PTSS_12",
    "section": "Ptaki i ssaki",
    "type": "riddle",
    "prompt": "Jak nazywają się specjalne włosy czuciowe ssaków, występujące np. u kota?",
    "options": null,
    "altAnswers": [
      "wibrysy",
      "wibrys"
    ],
    "image": "r04_ssak_konczyny.jpg",
    "answer": "wibrysy",
    "explanation": "Wibrysy to wyspecjalizowane włosy czuciowe ssaków, które pomagają odbierać bodźce dotykowe."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Porównujesz dwie tkanki: jedna tworzy cienką warstwę pęcherzyków płucnych i ułatwia dyfuzję, druga wyściela skórę i chroni przed urazami. Który typ nabłonka najlepiej odpowiada pierwszej funkcji?",
    "options": [
      "Jednowarstwowy płaski",
      "Wielowarstwowy płaski",
      "Wielowarstwowy sześcienny",
      "Wielowarstwowy walcowaty",
      "Przejściowy",
      "Gruczołowy"
    ],
    "image": "r04_rodzaje_nablonkow.jpg",
    "answer": 0,
    "explanation": "Cienki nabłonek jednowarstwowy płaski umożliwia szybką dyfuzję w pęcherzykach płucnych, zaś wielowarstwowy płaski chroni m.in. skórę."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz wszystkie poprawne porównania zwierząt i ich sposobów oddychania.",
    "options": [
      "Dorosły płaz – płuca i wilgotna skóra",
      "Ryba – skrzela",
      "Dorosły gad – płuca",
      "Ptak – płuca rurkowate i worki powietrzne",
      "Dorosły płaz – wyłącznie skrzela",
      "Dorosły gad – wyłącznie wilgotna skóra"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ryby oddychają skrzelami, dorosłe płazy także przez skórę, gady mają płuca, a u ptaków działają płuca rurkowate z workami powietrznymi."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Powiąż grupę z charakterystycznym sposobem rozmnażania lub rozwoju.",
    "options": null,
    "left": [
      "Chełbia modra",
      "Dżdżownica",
      "Motyl",
      "Żaba"
    ],
    "right": [
      "Rozwój złożony z kijanką",
      "Przeobrażenie zupełne z poczwarką",
      "Zapłodnienie krzyżowe u obojnaków",
      "Przemiana pokoleń polipa i meduzy"
    ],
    "answer": {
      "Chełbia modra": "Przemiana pokoleń polipa i meduzy",
      "Dżdżownica": "Zapłodnienie krzyżowe u obojnaków",
      "Motyl": "Przeobrażenie zupełne z poczwarką",
      "Żaba": "Rozwój złożony z kijanką"
    },
    "explanation": "U chełbi występuje przemiana pokoleń, u dżdżownic zapłodnienie krzyżowe, u motyli stadium poczwarki, a u żab stadium kijanki."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż najważniejsze zdarzenia cyklu tasiemca od wydalenia jaj przez człowieka do odtworzenia dorosłego pasożyta.",
    "options": null,
    "items": [
      "zjedzenie surowego lub niedogotowanego mięsa przez człowieka",
      "larwy w mięśniach tworzą wągry",
      "połknięcie jaj przez żywiciela pośredniego",
      "jaja wydalone z kałem człowieka",
      "dojrzewanie tasiemca w jelicie człowieka"
    ],
    "image": "r04_tasiemiec_budowa.jpg",
    "answer": [
      "jaja wydalone z kałem człowieka",
      "połknięcie jaj przez żywiciela pośredniego",
      "larwy w mięśniach tworzą wągry",
      "zjedzenie surowego lub niedogotowanego mięsa przez człowieka",
      "dojrzewanie tasiemca w jelicie człowieka"
    ],
    "explanation": "Żywiciel pośredni pobiera jaja, larwy osiadają w jego mięśniach jako wągry, a człowiek zaraża się przez niedogotowane mięso."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Serce dorosłego płaza ma dwa przedsionki i __________, natomiast u większości gadów ta komora ma __________.",
    "options": null,
    "altAnswers": [
      [
        "jedną komorę",
        "jedna komora"
      ],
      [
        "częściową przegrodę",
        "przegrodę częściową"
      ]
    ],
    "answer": [
      "jedną komorę",
      "częściową przegrodę"
    ],
    "explanation": "Płazy mają serce z jedną komorą i dwoma przedsionkami, a większość gadów ma częściową przegrodę komory; krokodyle są wyjątkiem."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które gady stanowią wyjątek, ponieważ ich serce ma dwie komory?",
    "options": [
      "Węże",
      "Jaszczurki",
      "Żółwie",
      "Krokodyle",
      "Kameleony",
      "Beznogie jaszczurki"
    ],
    "answer": 3,
    "explanation": "U większości gadów występuje jedna komora serca z częściową przegrodą, lecz krokodyle mają dwie komory."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel opisane cechy na charakterystyczne dla ptaków lub ssaków.",
    "options": null,
    "items": [
      "lotki i sterówki",
      "brak pęcherza moczowego",
      "gruczoły mlekowe",
      "płuca pęcherzykowate",
      "worki powietrzne",
      "gruczoł kuprowy",
      "przepona",
      "wibrysy"
    ],
    "categories": [
      "Ptaki",
      "Ssaki"
    ],
    "answer": {
      "Ptaki": [
        "lotki i sterówki",
        "worki powietrzne",
        "brak pęcherza moczowego",
        "gruczoł kuprowy"
      ],
      "Ssaki": [
        "gruczoły mlekowe",
        "przepona",
        "płuca pęcherzykowate",
        "wibrysy"
      ]
    },
    "explanation": "Ptaki mają pióra i worki powietrzne, nie mają pęcherza moczowego; ssaki wytwarzają mleko, mają przeponę i pęcherzykowate płuca."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaka błona płodowa gadów i ptaków otacza zarodek i chroni go w środowisku wodnym wewnątrz jaja?",
    "options": null,
    "altAnswers": [
      "owodnia",
      "owodnią"
    ],
    "image": "r04_jajo_gada.jpg",
    "answer": "owodnia",
    "explanation": "Owodnia, omocznia i kosmówka to błony płodowe, które chronią zarodek lub uczestniczą w jego rozwoju."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe skojarzenia narządu z jego rolą.",
    "options": [
      "Linia naboczna ryby – wykrywanie ruchów wody",
      "Wole ptaka – nawilżanie i zmiękczanie pokarmu",
      "Żołądek mięśniowy ptaka – rozcieranie pokarmu",
      "Hirudyna pijawki – przeciwdziałanie krzepnięciu krwi",
      "Gruczoł kuprowy – produkcja mleka",
      "Pęcherz pławny ryby – wydzielanie jadu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Linia naboczna odbiera drgania wody, wole gromadzi pokarm, żołądek mięśniowy rozdrabnia pokarm, a hirudyna zapobiega krzepnięciu krwi. Mleko wytwarzają gruczoły mlekowe, natomiast pęcherz pławny nie wydziela jadu."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kolejne odcinki przewodu pokarmowego ptaka, którymi podąża zjedzony pokarm.",
    "options": null,
    "items": [
      "jelito cienkie",
      "żołądek mięśniowy",
      "żołądek gruczołowy",
      "wole",
      "przełyk",
      "jelito grube"
    ],
    "answer": [
      "przełyk",
      "wole",
      "żołądek gruczołowy",
      "żołądek mięśniowy",
      "jelito cienkie",
      "jelito grube"
    ],
    "explanation": "Pokarm przechodzi przez przełyk i wole, następnie żołądek gruczołowy oraz mięśniowy, a później jelita."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż ssaka, który jest wyjątkiem od typowej liczby siedmiu kręgów szyjnych: pies, kot, leniwiec, nietoperz.",
    "options": null,
    "answer": "leniwiec",
    "explanation": "Większość ssaków ma siedem kręgów szyjnych, ale u niektórych leniwców występuje ich dziewięć."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Obserwujesz morskiego drapieżnika, który porusza się ruchem odrzutowym, ma ramiona z przyssawkami i nie ma nawet zredukowanej muszli wewnętrznej. Który to mięczak?",
    "options": [
      "Kałamarnica",
      "Mątwa",
      "Ośmiornica",
      "Małż",
      "Winniczek",
      "Szczeżuja"
    ],
    "answer": 2,
    "explanation": "Ośmiornice nie mają muszli, natomiast kałamarnice i mątwy zachowały zredukowaną muszlę wewnętrzną."
  }
];

const KID_PROMPTS = {
  "R04_TKAN_02": "Które zadania wykonują nabłonki? Zaznacz wszystkie poprawne.",
  "R04_TKAN_11": "W jakiej kolejności impuls przechodzi przez neuron?",
  "R04_GPAR_03": "Co jest prawdą o gąbkach? Zaznacz poprawne zdania.",
  "R04_GPAR_10": "Jak zmienia się chełbia modra od zapłodnienia do młodej meduzy?",
  "R04_ROBA_02": "Co pomaga tasiemcowi żyć w ciele żywiciela?",
  "R04_ROBA_11": "Jaką drogą larwa glisty wędruje po organizmie?",
  "R04_STMI_07": "Motyl przechodzi przez gąsienicę i poczwarkę. Jak nazywa się ten rozwój?",
  "R04_STMI_08": "Ułóż etapy rozwoju motyla we właściwej kolejności.",
  "R04_RYPG_06": "Które zwierzęta mają temperaturę ciała zależną od otoczenia?",
  "R04_RYPG_08": "Jak rozwija się żaba? Ułóż etapy po kolei.",
  "R04_PTSS_04": "Do czego służą różne rodzaje piór?",
  "R04_PTSS_09": "Dopasuj grupy ssaków do sposobu rozwoju ich młodych.",
  "R04_HARD_03": "Połącz cztery zwierzęta z tym, jak powstają ich młode.",
  "R04_HARD_10": "Jaką drogę przechodzi pokarm przez przewód pokarmowy ptaka?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Zwierzęta",
  icon: "🐾",
  sectionOrder: [
  "Tkanki zwierzęce",
  "Gąbki i parzydełkowce",
  "Płazińce, nicienie i pierścienice",
  "Stawonogi i mięczaki",
  "Ryby, płazy i gady",
  "Ptaki i ssaki"
],
  sectionIcons: {
  "Tkanki zwierzęce": "🔬",
  "Gąbki i parzydełkowce": "🪼",
  "Płazińce, nicienie i pierścienice": "🪱",
  "Stawonogi i mięczaki": "🦋",
  "Ryby, płazy i gady": "🐟",
  "Ptaki i ssaki": "🦅"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
