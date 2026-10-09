// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MEZ  = Mezopotamia
//   EGI  = Egipt i Izrael
//   POL  = Greckie polis i wojny
//   KUL  = Kultura Greków i hellenizm
//   RZY  = Rzym: republika i cesarstwo
//   CHR  = Kultura Rzymu i chrześcijaństwo
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R01_MEZ_01",
    section: "Mezopotamia",
    type: "single_choice",
    prompt: "Między którymi rzekami leżała Mezopotamia?",
    options: [
      "Nilem i Jordanem",
      "Eufratem i Tygrysem",
      "Dunajem i Renem",
      "Indusem i Gangesem",
      "Tygrysem i Nilem",
      "Eufratem i Jordanem"
    ],
    answer: 1,
    image: "r01_mezopotamia_rzeki.jpg",
    explanation: "Mezopotamia to Międzyrzecze położone w Azji między Eufratem a Tygrysem."
  },
  {
    id: "R01_MEZ_02",
    section: "Mezopotamia",
    type: "true_false",
    prompt: "Sumerowie tworzyli państwa-miasta, do których należały Ur i Uruk.",
    options: null,
    answer: true,
    explanation: "W Mezopotamii Sumerowie rozwijali niezależne państwa-miasta, m.in. Ur i Uruk."
  },
  {
    id: "R01_MEZ_03",
    section: "Mezopotamia",
    type: "multi_select",
    prompt: "Które z poniższych osiągnięć pochodzą ze starożytnej Mezopotamii?",
    options: [
      "Pismo klinowe",
      "Koło garncarskie",
      "Zikkuraty",
      "Alfabet łaciński",
      "System irygacyjny",
      "Demokracja ateńska"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    image: "r01_tabliczka_klinowa.jpg",
    explanation: "Sumerowie i inne ludy Mezopotamii rozwijały pismo klinowe, koło garncarskie, świątynie zikkuraty i sieć kanałów nawadniających."
  },
  {
    id: "R01_MEZ_04",
    section: "Mezopotamia",
    type: "riddle",
    prompt: "Jak nazywały się wielopoziomowe świątynie wznoszone w Mezopotamii?",
    options: null,
    answer: "zikkuraty",
    altAnswers: [
      "zikkuraty",
      "zikkurat",
      "zigguraty"
    ],
    explanation: "Zikkuraty były wielopiętrowymi budowlami świątynnymi charakterystycznymi dla Mezopotamii."
  },
  {
    id: "R01_MEZ_05",
    section: "Mezopotamia",
    type: "fill_in",
    prompt: "Zbiór praw babilońskiego władcy nosi nazwę __________.",
    options: null,
    answer: [
      "Kodeks Hammurabiego"
    ],
    altAnswers: [
      [
        "Kodeks Hammurabiego",
        "kodeks Hammurabiego"
      ]
    ],
    explanation: "Najbardziej znanym władcą Babilonii był Hammurabi, którego kodeks stosował zasadę oko za oko, ząb za ząb."
  },
  {
    id: "R01_MEZ_06",
    section: "Mezopotamia",
    type: "odd_one_out",
    prompt: "Wskaż obiekt niezwiązany z osiągnięciami ludów Mezopotamii: zikkurat, koło garncarskie, pismo klinowe, piramida Cheopsa.",
    options: null,
    answer: "piramida Cheopsa",
    explanation: "Piramidę Cheopsa wzniesiono w Egipcie; pozostałe elementy wiążą się z Mezopotamią."
  },
  {
    id: "R01_MEZ_07",
    section: "Mezopotamia",
    type: "scenario",
    prompt: "Jesteś rolnikiem w gorącej Mezopotamii. Wiosenne wylewy rzek trzeba wykorzystać do nawadniania pól i ograniczyć ich niszczycielską siłę. Jakie rozwiązanie stosujesz?",
    options: [
      "Sieć kanałów i wałów",
      "Budowę kamiennych teatrów",
      "Osuszanie całej rzeki",
      "Zastąpienie pól pustynią"
    ],
    answer: 0,
    explanation: "Mieszkańcy Mezopotamii budowali kanały irygacyjne i wały oraz oczyszczali kanały z mułu."
  },
  {
    id: "R01_MEZ_08",
    section: "Mezopotamia",
    type: "match",
    prompt: "Połącz wynalazek lub budowlę z jej zastosowaniem.",
    options: null,
    left: [
      "Pismo klinowe",
      "Koło garncarskie",
      "Kanały irygacyjne",
      "Zikkurat"
    ],
    right: [
      "Świątynia",
      "Nawadnianie pól",
      "Wytwarzanie naczyń",
      "Utrwalanie informacji"
    ],
    answer: {
      "Pismo klinowe": "Utrwalanie informacji",
      "Koło garncarskie": "Wytwarzanie naczyń",
      "Kanały irygacyjne": "Nawadnianie pól",
      "Zikkurat": "Świątynia"
    },
    explanation: "Pismo służyło zapisywaniu, koło garncarskie produkcji naczyń, irygacja uprawom, a zikkurat kultowi religijnemu."
  },
  {
    id: "R01_MEZ_09",
    section: "Mezopotamia",
    type: "sort",
    prompt: "Przyporządkuj osiągnięcia lub cechy do Mezopotamskich państw i ludów.",
    options: null,
    categories: [
      "Sumerowie",
      "Babilonia",
      "Asyria"
    ],
    items: [
      "Armia asyryjska",
      "Państwo na północy Mezopotamii",
      "Hammurabi",
      "Kodeks Hammurabiego",
      "Ur i Uruk",
      "Pismo klinowe"
    ],
    answer: {
      "Sumerowie": [
        "Ur i Uruk",
        "Pismo klinowe"
      ],
      "Babilonia": [
        "Hammurabi",
        "Kodeks Hammurabiego"
      ],
      "Asyria": [
        "Armia asyryjska",
        "Państwo na północy Mezopotamii"
      ]
    },
    explanation: "Sumerowie zakładali miasta i rozwijali pismo; Babilonia kojarzy się z Hammurabim, a Asyria z potężną armią na północy Mezopotamii."
  },
  {
    id: "R01_MEZ_10",
    section: "Mezopotamia",
    type: "sequence",
    prompt: "Ułóż rodzaje pisma chronologicznie — od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Alfabet fenicki (około 1050 p.n.e.)",
      "Alfabet grecki (około 800 p.n.e.)",
      "Sumeryjskie pismo obrazkowe (około 4000 p.n.e.)",
      "Sumeryjskie pismo klinowe (około 3500 p.n.e.)"
    ],
    answer: [
      "Sumeryjskie pismo obrazkowe (około 4000 p.n.e.)",
      "Sumeryjskie pismo klinowe (około 3500 p.n.e.)",
      "Alfabet fenicki (około 1050 p.n.e.)",
      "Alfabet grecki (około 800 p.n.e.)"
    ],
    explanation: "Pismo obrazkowe poprzedzało pismo klinowe, po którym rozwinęły się alfabet fenicki i alfabet grecki."
  },
  {
    id: "R01_EGI_01",
    section: "Egipt i Izrael",
    type: "single_choice",
    prompt: "Która rzeka dostarczała egipskim polom żyznego mułu podczas wylewów?",
    options: [
      "Jordan",
      "Tygrys",
      "Eufrat",
      "Nil",
      "Dunaj",
      "Indus"
    ],
    answer: 3,
    image: "r01_nad_nilem.jpg",
    explanation: "Coroczne wylewy Nilu osadzały żyzny muł na polach, dzięki czemu można było uprawiać ziemię."
  },
  {
    id: "R01_EGI_02",
    section: "Egipt i Izrael",
    type: "true_false",
    prompt: "Egipt Dolny znajdował się na północy, a Egipt Górny na południu.",
    options: null,
    answer: true,
    explanation: "Nazwy Górny i Dolny odnoszą się do biegu Nilu; Egipt Dolny leżał na północy."
  },
  {
    id: "R01_EGI_03",
    section: "Egipt i Izrael",
    type: "multi_select",
    prompt: "Zaznacz osiągnięcia starożytnych Egipcjan.",
    options: [
      "Papirus",
      "Hieroglify",
      "Kalendarz obejmujący 365 dni",
      "Koło garncarskie wynalezione przez Sumerów",
      "System irygacyjny",
      "Pismo łacińskie"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    explanation: "Egipcjanie używali papirusu i hieroglifów, tworzyli kalendarz na 365 dni oraz budowali systemy nawadniające."
  },
  {
    id: "R01_EGI_04",
    section: "Egipt i Izrael",
    type: "match",
    prompt: "Połącz egipskie bóstwa z ich funkcjami.",
    options: null,
    left: [
      "Re",
      "Horus",
      "Ozyrys",
      "Anubis"
    ],
    right: [
      "Bóg-sędzia zmarłych",
      "Bóg natury i śmierci",
      "Bóg nieba",
      "Bóg słońca"
    ],
    answer: {
      "Re": "Bóg słońca",
      "Horus": "Bóg nieba",
      "Ozyrys": "Bóg natury i śmierci",
      "Anubis": "Bóg-sędzia zmarłych"
    },
    explanation: "Re był bogiem słońca, Horus bogiem nieba, Ozyrys bogiem natury i śmierci, a Anubis sędzią zmarłych."
  },
  {
    id: "R01_EGI_05",
    section: "Egipt i Izrael",
    type: "fill_in",
    prompt: "Najsłynniejsze piramidy w Gizie wzniesiono dla faraonów: __________, __________ i __________.",
    options: null,
    answer: [
      "Cheopsa",
      "Chefrena",
      "Mykerinosa"
    ],
    altAnswers: [
      [
        "Cheopsa",
        "Cheops"
      ],
      [
        "Chefrena",
        "Chefren"
      ],
      [
        "Mykerinosa",
        "Mykerinos"
      ]
    ],
    image: "r01_piramidy_w_gizie.jpg",
    explanation: "W pobliżu Gizy powstały piramidy będące grobowcami Cheopsa, Chefrena i Mykerinosa."
  },
  {
    id: "R01_EGI_06",
    section: "Egipt i Izrael",
    type: "odd_one_out",
    prompt: "Wskaż budowlę spoza tradycji egipskiej: mastaba, piramida, sfinks, zikkurat.",
    options: null,
    answer: "zikkurat",
    explanation: "Zikkuraty były świątyniami Mezopotamii; mastaby, piramidy i sfinks występowały w Egipcie."
  },
  {
    id: "R01_EGI_07",
    section: "Egipt i Izrael",
    type: "scenario",
    prompt: "Jesteś mieszkańcem starożytnej Jerozolimy. Władca poleca zbudować świątynię dla Jahwe, w której ma spoczywać Arka Przymierza. Który król wydał to polecenie?",
    options: [
      "Dawid",
      "Saul",
      "Salomon",
      "Hammurabi",
      "Nabuchodonozor",
      "Ramzes II"
    ],
    answer: 2,
    image: "r01_menora_izrael.jpg",
    explanation: "Salomon zbudował świątynię w Jerozolimie, w której przechowywano Arkę Przymierza z tablicami Dekalogu."
  },
  {
    id: "R01_EGI_08",
    section: "Egipt i Izrael",
    type: "riddle",
    prompt: "Jak nazywa się zbiór dziesięciu przykazań Bożych w judaizmie?",
    options: null,
    answer: "Dekalog",
    altAnswers: [
      "Dekalog",
      "dziesięć przykazań",
      "10 przykazań"
    ],
    explanation: "Dekalog to dziesięć przykazań, które według Biblii Mojżesz otrzymał na górze Synaj."
  },
  {
    id: "R01_EGI_09",
    section: "Egipt i Izrael",
    type: "sort",
    prompt: "Przyporządkuj pojęcia do starożytnego Egiptu lub judaizmu.",
    options: null,
    categories: [
      "Egipt",
      "Judaizm"
    ],
    items: [
      "Jahwe",
      "Tora",
      "Menora",
      "Synagoga",
      "Horus",
      "Re",
      "Mumifikacja zwłok",
      "Faraon"
    ],
    answer: {
      "Egipt": [
        "Horus",
        "Re",
        "Mumifikacja zwłok",
        "Faraon"
      ],
      "Judaizm": [
        "Jahwe",
        "Tora",
        "Menora",
        "Synagoga"
      ]
    },
    explanation: "Egipcjanie czcili wielu bogów i mumifikowali zmarłych; judaizm opierał się na wierze w Jahwe, Torze i praktykach religijnych w synagogach."
  },
  {
    id: "R01_EGI_10",
    section: "Egipt i Izrael",
    type: "sequence",
    prompt: "Ułóż wydarzenia z dziejów Izraela w kolejności chronologicznej.",
    options: null,
    items: [
      "Panowanie pierwszego króla Saula",
      "Budowa świątyni w Jerozolimie przez Salomona",
      "Niewola babilońska",
      "Wędrówka Abrahama do Palestyny",
      "Wyprowadzenie Izraelitów z Egiptu przez Mojżesza"
    ],
    answer: [
      "Wędrówka Abrahama do Palestyny",
      "Wyprowadzenie Izraelitów z Egiptu przez Mojżesza",
      "Panowanie pierwszego króla Saula",
      "Budowa świątyni w Jerozolimie przez Salomona",
      "Niewola babilońska"
    ],
    explanation: "Dzieje Abrahama i Mojżesza poprzedzały zjednoczenie pod władzą Saula, budowę świątyni Salomona i niewolę babilońską."
  },
  {
    id: "R01_POL_01",
    section: "Greckie polis i wojny",
    type: "single_choice",
    prompt: "Co oznaczało greckie słowo polis?",
    options: [
      "Świątynię",
      "Miasto-państwo",
      "Rodzinę królewską",
      "Oddział wojskowy",
      "Wielkie imperium",
      "Wspólnotę kupców"
    ],
    answer: 1,
    image: "r01_agora_atenska.jpg",
    explanation: "Polis było greckim miastem-państwem; Grecy nie tworzyli jednego państwa."
  },
  {
    id: "R01_POL_02",
    section: "Greckie polis i wojny",
    type: "true_false",
    prompt: "W starożytności wszyscy mieszkańcy Aten, także kobiety i niewolnicy, mieli jednakowe prawa polityczne.",
    options: null,
    answer: false,
    explanation: "Prawa polityczne w demokracji ateńskiej mieli pełnoletni wolni mężczyźni będący obywatelami Aten."
  },
  {
    id: "R01_POL_03",
    section: "Greckie polis i wojny",
    type: "multi_select",
    prompt: "Które grupy wchodziły w skład społeczeństwa Sparty?",
    options: [
      "Spartiaci",
      "Periojkowie",
      "Heloci",
      "Patrycjusze",
      "Plebejusze",
      "Westalki"
    ],
    answer: [
      0,
      1,
      2
    ],
    image: "r01_spartanscy_wojownicy.jpg",
    explanation: "Społeczeństwo Sparty dzieliło się na pełnoprawnych spartiatów, wolnych periojków bez praw politycznych oraz niewolnych helotów."
  },
  {
    id: "R01_POL_04",
    section: "Greckie polis i wojny",
    type: "scenario",
    prompt: "Jesteś wolnym, dorosłym Ateńczykiem, urodzonym w Atenach. W mieście trwa głosowanie nad sprawami wojny i pokoju. W jakiej instytucji możesz uczestniczyć?",
    options: [
      "Zgromadzenie Ludowe",
      "Geruzja",
      "Senat rzymski",
      "Rada eforów"
    ],
    answer: 0,
    explanation: "W demokracji ateńskiej wolni, dorośli obywatele uczestniczyli w zgromadzeniu ludowym, które rozstrzygało sprawy polis."
  },
  {
    id: "R01_POL_05",
    section: "Greckie polis i wojny",
    type: "match",
    prompt: "Połącz instytucję lub zwyczaj z jego funkcją w greckiej polis.",
    options: null,
    left: [
      "Eforzy",
      "Geruzja",
      "Apella",
      "Ostracyzm"
    ],
    right: [
      "Ateński sąd skorupkowy",
      "Spartańskie zgromadzenie ludowe",
      "Rada starszych Sparty",
      "Kontrola królów Sparty"
    ],
    answer: {
      "Eforzy": "Kontrola królów Sparty",
      "Geruzja": "Rada starszych Sparty",
      "Apella": "Spartańskie zgromadzenie ludowe",
      "Ostracyzm": "Ateński sąd skorupkowy"
    },
    explanation: "Spartą współrządzili eforzy, geruzja i apella; w Atenach ostracyzm pozwalał usuwać osoby uznane za zagrożenie dla demokracji."
  },
  {
    id: "R01_POL_06",
    section: "Greckie polis i wojny",
    type: "riddle",
    prompt: "Jak nazywano ateński sąd skorupkowy, który mógł skazać obywatela na dziesięcioletnie wygnanie?",
    options: null,
    answer: "ostracyzm",
    altAnswers: [
      "ostracyzm",
      "sąd skorupkowy"
    ],
    explanation: "Ostracyzm był głosowaniem, podczas którego imiona zagrożeń dla demokracji zapisywano na ostrakonach."
  },
  {
    id: "R01_POL_07",
    section: "Greckie polis i wojny",
    type: "fill_in",
    prompt: "Sparta leżała w krainie __________, a Ateny w krainie __________.",
    options: null,
    answer: [
      "Lakonii",
      "Attyce"
    ],
    altAnswers: [
      [
        "Lakonii",
        "Lakonia"
      ],
      [
        "Attyce",
        "Attyka"
      ]
    ],
    explanation: "Sparta znajdowała się w Lakonii na Peloponezie, a Ateny w Attyce."
  },
  {
    id: "R01_POL_08",
    section: "Greckie polis i wojny",
    type: "odd_one_out",
    prompt: "Wskaż pojęcie, które nie dotyczy ustroju ani społeczeństwa greckich polis: eforzy, heloci, ostracyzm, konsul.",
    options: null,
    answer: "konsul",
    explanation: "Konsul był urzędnikiem republiki rzymskiej, pozostałe pojęcia wiązały się ze Spartą lub Atenami."
  },
  {
    id: "R01_POL_09",
    section: "Greckie polis i wojny",
    type: "sort",
    prompt: "Przyporządkuj instytucje i pojęcia do właściwego greckiego miasta-państwa.",
    options: null,
    categories: [
      "Sparta",
      "Ateny"
    ],
    items: [
      "Ostracyzm",
      "Demokracja ateńska",
      "Drakońskie prawa",
      "Akropol ateński",
      "Geruzja",
      "Eforzy",
      "Heloci",
      "Apella"
    ],
    answer: {
      "Sparta": [
        "Geruzja",
        "Eforzy",
        "Heloci",
        "Apella"
      ],
      "Ateny": [
        "Ostracyzm",
        "Demokracja ateńska",
        "Drakońskie prawa",
        "Akropol ateński"
      ]
    },
    explanation: "Geruzja i eforzy wiązali się ze Spartą, a ostracyzm, demokracja, prawo Drakona i Akropol z Atenami."
  },
  {
    id: "R01_POL_10",
    section: "Greckie polis i wojny",
    type: "sequence",
    prompt: "Ułóż wydarzenia w kolejności chronologicznej.",
    options: null,
    items: [
      "Bitwa pod Cheroneą (338 p.n.e.)",
      "Bitwa pod Gaugamelą (331 p.n.e.)",
      "Pierwsze igrzyska w Olimpii (776 p.n.e.)",
      "Rozwój demokracji ateńskiej (VI w. p.n.e.)"
    ],
    answer: [
      "Pierwsze igrzyska w Olimpii (776 p.n.e.)",
      "Rozwój demokracji ateńskiej (VI w. p.n.e.)",
      "Bitwa pod Cheroneą (338 p.n.e.)",
      "Bitwa pod Gaugamelą (331 p.n.e.)"
    ],
    explanation: "Najstarsze są igrzyska z 776 r. p.n.e., potem demokracja ateńska, zwycięstwo Filipa II pod Cheroneą i bitwa Aleksandra pod Gaugamelą."
  },
  {
    id: "R01_KUL_01",
    section: "Kultura Greków i hellenizm",
    type: "single_choice",
    prompt: "Który zestaw wymienia trzy greckie porządki architektoniczne?",
    options: [
      "Dorycki, joński, koryncki",
      "Romański, gotycki, barokowy",
      "Dorycki, romański, joński",
      "Koryncki, gotycki, klasycystyczny",
      "Joński, egipski, romański",
      "Dorycki, renesansowy, barokowy"
    ],
    answer: 0,
    image: "r01_kolumny_greckie.jpg",
    explanation: "Greccy budowniczowie rozwinęli porządki dorycki, joński i koryncki, rozpoznawalne szczególnie po kolumnach."
  },
  {
    id: "R01_KUL_02",
    section: "Kultura Greków i hellenizm",
    type: "multi_select",
    prompt: "Wskaż twórców i utwory należące do literatury greckiej.",
    options: [
      "Homer - Iliada",
      "Homer - Odyseja",
      "Safona - poezja",
      "Wergiliusz - Eneida",
      "Ezop - bajki",
      "Horacy - Satyry"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    explanation: "Homer napisał Iliadę i Odyseję, Safona była poetką, a Ezop autorem bajek; Wergiliusz i Horacy należeli do literatury rzymskiej."
  },
  {
    id: "R01_KUL_03",
    section: "Kultura Greków i hellenizm",
    type: "match",
    prompt: "Połącz greckiego twórcę z jego dziełem lub osiągnięciem.",
    options: null,
    left: [
      "Myron",
      "Euklides",
      "Pitagoras",
      "Hipokrates"
    ],
    right: [
      "Kodeks etyczny lekarzy",
      "Twierdzenie o trójkątach prostokątnych",
      "Elementy",
      "Dyskobol"
    ],
    answer: {
      "Myron": "Dyskobol",
      "Euklides": "Elementy",
      "Pitagoras": "Twierdzenie o trójkątach prostokątnych",
      "Hipokrates": "Kodeks etyczny lekarzy"
    },
    explanation: "Myron stworzył Dyskobola, Euklides napisał Elementy, Pitagoras sformułował znane twierdzenie, a Hipokrates opracował zasady etyki lekarskiej."
  },
  {
    id: "R01_KUL_04",
    section: "Kultura Greków i hellenizm",
    type: "fill_in",
    prompt: "Kolista część greckiego teatru z ołtarzem nazywała się __________.",
    options: null,
    answer: [
      "orchestra"
    ],
    altAnswers: [
      [
        "orchestra",
        "orchestrą",
        "orchestry"
      ]
    ],
    image: "r01_teatr_grecki.jpg",
    explanation: "W starożytnym teatrze greckim wyróżniano orchestrę, theatron, skene i proskenion."
  },
  {
    id: "R01_KUL_05",
    section: "Kultura Greków i hellenizm",
    type: "riddle",
    prompt: "Którego greckiego uczonego nazywa się ojcem medycyny?",
    options: null,
    answer: "Hipokrates",
    altAnswers: [
      "Hipokrates",
      "Hipokratesa"
    ],
    explanation: "Hipokrates zajmował się rozpoznawaniem stanu zdrowia i stworzył kodeks etyczny lekarzy."
  },
  {
    id: "R01_KUL_06",
    section: "Kultura Greków i hellenizm",
    type: "true_false",
    prompt: "Starożytne igrzyska w Olimpii urządzano co cztery lata ku czci Zeusa.",
    options: null,
    answer: true,
    explanation: "Pierwsze igrzyska odbyły się w Olimpii w 776 r. p.n.e. i powtarzano je co cztery lata ku czci Zeusa."
  },
  {
    id: "R01_KUL_07",
    section: "Kultura Greków i hellenizm",
    type: "odd_one_out",
    prompt: "Wskaż bóstwo, którego imię należy do religii rzymskiej: Zeus, Atena, Apollo, Merkury.",
    options: null,
    answer: "Merkury",
    explanation: "Merkury był rzymskim odpowiednikiem greckiego Hermesa; pozostałe imiona należą do mitologii greckiej."
  },
  {
    id: "R01_KUL_08",
    section: "Kultura Greków i hellenizm",
    type: "scenario",
    prompt: "Bierzesz udział w starożytnych igrzyskach w Olimpii. Przed zawodami składasz przysięgę przed posągiem boga, ku czci którego odbywają się zawody. Komu oddajesz cześć?",
    options: [
      "Apollinowi",
      "Aresowi",
      "Zeusowi",
      "Hermesowi",
      "Posejdonowi",
      "Hadesowi"
    ],
    answer: 2,
    explanation: "Igrzyska olimpijskie były obchodzone ku czci Zeusa, a zawodnicy ślubowali przestrzeganie reguł przed jego posągiem."
  },
  {
    id: "R01_KUL_09",
    section: "Kultura Greków i hellenizm",
    type: "sort",
    prompt: "Przyporządkuj greckie postaci do dziedzin ich działalności.",
    options: null,
    categories: [
      "Filozofia i nauka",
      "Literatura i sztuka"
    ],
    items: [
      "Homer",
      "Safona",
      "Myron",
      "Fidiasz",
      "Sokrates",
      "Platon",
      "Arystoteles",
      "Tales",
      "Archimedes"
    ],
    answer: {
      "Filozofia i nauka": [
        "Sokrates",
        "Platon",
        "Arystoteles",
        "Tales",
        "Archimedes"
      ],
      "Literatura i sztuka": [
        "Homer",
        "Safona",
        "Myron",
        "Fidiasz"
      ]
    },
    explanation: "Sokrates, Platon i Arystoteles byli filozofami, Tales i Archimedes uczonymi; Homer i Safona tworzyli literaturę, a Myron i Fidiasz rzeźby."
  },
  {
    id: "R01_KUL_10",
    section: "Kultura Greków i hellenizm",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z Macedonią i Aleksandrem Wielkim w porządku chronologicznym.",
    options: null,
    items: [
      "Aleksander pokonuje Persów pod Gaugamelą",
      "Aleksander walczy nad rzeką Hydaspes",
      "Filip II zwycięża Greków pod Cheroneą",
      "Aleksander Wielki zostaje królem Macedonii"
    ],
    answer: [
      "Filip II zwycięża Greków pod Cheroneą",
      "Aleksander Wielki zostaje królem Macedonii",
      "Aleksander pokonuje Persów pod Gaugamelą",
      "Aleksander walczy nad rzeką Hydaspes"
    ],
    image: "r01_wyprawa_aleksandra.jpg",
    explanation: "Filip II pokonał Greków w 338 r. p.n.e.; następnie władzę objął Aleksander, który zwyciężył pod Gaugamelą w 331 r. p.n.e. i nad Hydaspesem w 326 r. p.n.e."
  },
  {
    id: "R01_RZY_01",
    section: "Rzym: republika i cesarstwo",
    type: "single_choice",
    prompt: "Na którym półwyspie leży Rzym?",
    options: [
      "Bałkańskim",
      "Iberyjskim",
      "Apenińskim",
      "Skandynawskim",
      "Krymskim",
      "Synajskim"
    ],
    answer: 2,
    explanation: "Rzym powstał na Półwyspie Apenińskim, którego klimat był śródziemnomorski."
  },
  {
    id: "R01_RZY_02",
    section: "Rzym: republika i cesarstwo",
    type: "true_false",
    prompt: "Republika rzymska została ustanowiona w 509 r. p.n.e.",
    options: null,
    answer: true,
    explanation: "Po obaleniu ostatniego króla Tarkwiniusza Pysznego w Rzymie ustanowiono republikę w 509 r. p.n.e."
  },
  {
    id: "R01_RZY_03",
    section: "Rzym: republika i cesarstwo",
    type: "multi_select",
    prompt: "Które grupy należały do społeczeństwa starożytnego Rzymu?",
    options: [
      "Patrycjusze",
      "Plebejusze",
      "Wyzwoleńcy",
      "Niewolnicy",
      "Heloci",
      "Spartiaci"
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Do społeczeństwa rzymskiego należeli patrycjusze, plebejusze, wyzwoleńcy i niewolnicy; heloci i spartiaci żyli w Sparcie."
  },
  {
    id: "R01_RZY_04",
    section: "Rzym: republika i cesarstwo",
    type: "match",
    prompt: "Połącz urząd republiki rzymskiej z jego głównym zadaniem.",
    options: null,
    left: [
      "Konsul",
      "Pretor",
      "Cenzor",
      "Trybun ludowy"
    ],
    right: [
      "Obrona praw plebejuszy",
      "Spis obywateli",
      "Sprawy sądownictwa",
      "Dowodzenie armią"
    ],
    answer: {
      "Konsul": "Dowodzenie armią",
      "Pretor": "Sprawy sądownictwa",
      "Cenzor": "Spis obywateli",
      "Trybun ludowy": "Obrona praw plebejuszy"
    },
    explanation: "Konsulowie dowodzili armią, pretorzy sprawowali funkcje sądowe, cenzorzy prowadzili spisy, a trybuni ludowi chronili plebejuszy."
  },
  {
    id: "R01_RZY_05",
    section: "Rzym: republika i cesarstwo",
    type: "scenario",
    prompt: "W republice rzymskiej plebejusze obawiają się uchwały krzywdzącej ich interesy. Ich urzędnik może zastosować prawo weta. Kto powinien interweniować?",
    options: [
      "Cenzor",
      "Pretor",
      "Trybun ludowy",
      "Kwestor",
      "Edyl",
      "Liktor"
    ],
    answer: 2,
    image: "r01_forum_romanum.jpg",
    explanation: "Trybun ludowy bronił praw plebejuszy, korzystał z prawa weta i nietykalności osobistej."
  },
  {
    id: "R01_RZY_06",
    section: "Rzym: republika i cesarstwo",
    type: "fill_in",
    prompt: "Juliusz Cezar został zamordowany w roku __________ p.n.e., a pierwszym cesarzem Rzymu był __________.",
    options: null,
    answer: [
      "44",
      "Oktawian August"
    ],
    altAnswers: [
      [
        "44",
        "44 r."
      ],
      [
        "Oktawian August",
        "Oktawian",
        "August"
      ]
    ],
    explanation: "Cezar zginął 15 marca 44 r. p.n.e. Później pierwszym cesarzem został Oktawian August."
  },
  {
    id: "R01_RZY_07",
    section: "Rzym: republika i cesarstwo",
    type: "riddle",
    prompt: "Jak nazywano terytorium podbite i przyłączone przez Rzymian do imperium?",
    options: null,
    answer: "prowincja",
    altAnswers: [
      "prowincja",
      "prowincją"
    ],
    explanation: "Prowincja była obszarem zdobytym przez Rzym i włączonym do Imperium Rzymskiego."
  },
  {
    id: "R01_RZY_08",
    section: "Rzym: republika i cesarstwo",
    type: "odd_one_out",
    prompt: "Wskaż urząd niezwiązany z republiką rzymską: senat, konsul, pretor, faraon.",
    options: null,
    answer: "faraon",
    explanation: "Faraon rządził Egiptem, podczas gdy senat, konsul i pretor byli związani z instytucjami republiki rzymskiej."
  },
  {
    id: "R01_RZY_09",
    section: "Rzym: republika i cesarstwo",
    type: "sort",
    prompt: "Przyporządkuj rozwiązania ustrojowe do republiki rzymskiej lub cesarstwa.",
    options: null,
    categories: [
      "Republika",
      "Cesarstwo"
    ],
    items: [
      "Oktawian August jako pierwszy cesarz",
      "Pryncypat",
      "Pax romana za Augusta",
      "Dwaj konsulowie wybierani na rok",
      "Trybun ludowy z prawem weta",
      "Dyktator powoływany na sześć miesięcy"
    ],
    answer: {
      "Republika": [
        "Dwaj konsulowie wybierani na rok",
        "Trybun ludowy z prawem weta",
        "Dyktator powoływany na sześć miesięcy"
      ],
      "Cesarstwo": [
        "Oktawian August jako pierwszy cesarz",
        "Pryncypat",
        "Pax romana za Augusta"
      ]
    },
    explanation: "W republice funkcjonowali wybieralni urzędnicy i nadzwyczajny dyktator; August wprowadził pryncypat i czas pokoju rzymskiego."
  },
  {
    id: "R01_RZY_10",
    section: "Rzym: republika i cesarstwo",
    type: "sequence",
    prompt: "Ułóż wydarzenia dziejów państwa rzymskiego od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Panowanie Oktawiana Augusta",
      "Podział cesarstwa (395 n.e.)",
      "Upadek cesarstwa zachodniorzymskiego (476 n.e.)",
      "Ustanowienie republiki (509 p.n.e.)",
      "Zabójstwo Juliusza Cezara (44 p.n.e.)"
    ],
    answer: [
      "Ustanowienie republiki (509 p.n.e.)",
      "Zabójstwo Juliusza Cezara (44 p.n.e.)",
      "Panowanie Oktawiana Augusta",
      "Podział cesarstwa (395 n.e.)",
      "Upadek cesarstwa zachodniorzymskiego (476 n.e.)"
    ],
    explanation: "Republika powstała w 509 r. p.n.e., Cezar zginął w 44 r. p.n.e., potem rządził August; podział cesarstwa nastąpił w 395 r., a upadek Zachodu w 476 r."
  },
  {
    id: "R01_CHR_01",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "single_choice",
    prompt: "Do czego służyły rzymskie akwedukty?",
    options: [
      "Do transportowania wody do miast",
      "Do wystawiania sztuk teatralnych",
      "Do przechowywania zboża",
      "Do przeprowadzania wyborów",
      "Do pochówku cesarzy",
      "Do wyścigów rydwanów"
    ],
    answer: 0,
    image: "r01_akwedukt_rzymski.jpg",
    explanation: "Akwedukty były wodociągami dostarczającymi wodę do rzymskich miast."
  },
  {
    id: "R01_CHR_02",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "multi_select",
    prompt: "Które obiekty i rozwiązania należą do osiągnięć starożytnych Rzymian?",
    options: [
      "Termy publiczne",
      "Sieć dróg",
      "Ogrzewanie podłogowe (hypokaustum)",
      "Zikkuraty",
      "Bazyliki",
      "Piramidy faraonów"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    explanation: "Rzymianie budowali termy, drogi i bazyliki oraz używali ogrzewania podłogowego; zikkuraty i piramidy należały do innych cywilizacji."
  },
  {
    id: "R01_CHR_03",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "match",
    prompt: "Połącz rzymskich bogów z odpowiadającymi im bóstwami greckimi.",
    options: null,
    left: [
      "Wenus",
      "Minerwa",
      "Merkury",
      "Pluton"
    ],
    right: [
      "Hades",
      "Hermes",
      "Atena",
      "Afrodyta"
    ],
    answer: {
      "Wenus": "Afrodyta",
      "Minerwa": "Atena",
      "Merkury": "Hermes",
      "Pluton": "Hades"
    },
    explanation: "Rzymianie przejęli wiele wierzeń Greków, nadając bogom inne imiona: Wenus, Minerwa, Merkury i Pluton odpowiadali Afrodycie, Atenie, Hermesowi i Hadesowi."
  },
  {
    id: "R01_CHR_04",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "fill_in",
    prompt: "W roku __________ cesarz __________ wydał edykt mediolański zapewniający tolerancję chrześcijanom.",
    options: null,
    answer: [
      "313",
      "Konstantyn Wielki"
    ],
    altAnswers: [
      [
        "313",
        "313 r."
      ],
      [
        "Konstantyn Wielki",
        "Konstantyn",
        "Konstantyna Wielkiego"
      ]
    ],
    image: "r01_pierwsi_chrzescijanie.jpg",
    explanation: "Edykt mediolański z 313 r. ogłosił cesarz Konstantyn Wielki, zapewniając tolerancję dla chrześcijan."
  },
  {
    id: "R01_CHR_05",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "odd_one_out",
    prompt: "Wskaż budowlę pochodzącą z innej cywilizacji niż pozostałe: Koloseum, Panteon, akwedukt, Partenon.",
    options: null,
    answer: "Partenon",
    explanation: "Partenon był świątynią grecką w Atenach, zaś Koloseum, Panteon i akwedukty to przykłady budowli rzymskich."
  },
  {
    id: "R01_CHR_06",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "riddle",
    prompt: "Jaki tytuł nosi najwyższy biskup chrześcijański, czyli biskup Rzymu?",
    options: null,
    answer: "papież",
    altAnswers: [
      "papież",
      "papieza",
      "papieża"
    ],
    explanation: "W organizacji Kościoła najwyższym biskupem jest papież, biskup Rzymu."
  },
  {
    id: "R01_CHR_07",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "true_false",
    prompt: "W 64 r. n.e. cesarz Neron oskarżył chrześcijan o podpalenie Rzymu.",
    options: null,
    answer: true,
    explanation: "W 64 r. n.e. Neron oskarżył chrześcijan o pożar Rzymu, co doprowadziło do ich prześladowań."
  },
  {
    id: "R01_CHR_08",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "scenario",
    prompt: "Jesteś w starożytnym Rzymie i widzisz kapłanki pilnujące, aby ogień w świątyni nigdy nie zgasł. Której bogini służą te kapłanki?",
    options: [
      "Minerwie",
      "Wenus",
      "Weście",
      "Ceres",
      "Dianie",
      "Junonie"
    ],
    answer: 2,
    explanation: "Westalki były kapłankami Westy, bogini ogniska domowego, i strzegły wiecznego ognia."
  },
  {
    id: "R01_CHR_09",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "sort",
    prompt: "Przyporządkuj pojęcia do tradycyjnej religii rzymskiej lub do chrześcijaństwa.",
    options: null,
    categories: [
      "Tradycyjna religia rzymska",
      "Chrześcijaństwo"
    ],
    items: [
      "Jezus Chrystus",
      "Sąd Ostateczny",
      "Biskup Rzymu",
      "Synod",
      "Westalki",
      "Mars",
      "Wenus",
      "Merkury"
    ],
    answer: {
      "Tradycyjna religia rzymska": [
        "Westalki",
        "Mars",
        "Wenus",
        "Merkury"
      ],
      "Chrześcijaństwo": [
        "Jezus Chrystus",
        "Sąd Ostateczny",
        "Biskup Rzymu",
        "Synod"
      ]
    },
    explanation: "Dawni Rzymianie czcili m.in. Marsa, Wenus i Merkurego; chrześcijaństwo głosi naukę Jezusa, Sąd Ostateczny i tworzy wspólnotę Kościoła."
  },
  {
    id: "R01_CHR_10",
    section: "Kultura Rzymu i chrześcijaństwo",
    type: "sequence",
    prompt: "Ułóż w kolejności chronologicznej wydarzenia związane z początkami chrześcijaństwa.",
    options: null,
    items: [
      "Prześladowania za Nerona (64 n.e.)",
      "Edykt mediolański (313 n.e.)",
      "Narodziny Jezusa w Betlejem",
      "Działalność i nauczanie Jezusa"
    ],
    answer: [
      "Narodziny Jezusa w Betlejem",
      "Działalność i nauczanie Jezusa",
      "Prześladowania za Nerona (64 n.e.)",
      "Edykt mediolański (313 n.e.)"
    ],
    explanation: "Najpierw żył i nauczał Jezus, później nastąpiły represje za Nerona w 64 r., a w 313 r. wydano edykt mediolański."
  },
  {
    id: "R01_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który faraon był mężem Nefertari pochowanej w Dolinie Królowych?",
    options: [
      "Cheops",
      "Ramzes II",
      "Dżeser",
      "Chefren",
      "Mykerinos",
      "Tutenchamon"
    ],
    answer: 1,
    explanation: "Nefertari była żoną Ramzesa II; jej grobowiec znajduje się w Dolinie Królowych."
  },
  {
    id: "R01_HARD_02",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz rodzaj pisma z przybliżoną datą jego pojawienia się.",
    options: null,
    left: [
      "Pismo klinowe",
      "Hieroglify egipskie",
      "Alfabet fenicki",
      "Alfabet grecki",
      "Alfabet łaciński"
    ],
    right: [
      "około 700 r. p.n.e.",
      "około 800 r. p.n.e.",
      "około 1050 r. p.n.e.",
      "około 3100-3000 r. p.n.e.",
      "około 3500 r. p.n.e."
    ],
    answer: {
      "Pismo klinowe": "około 3500 r. p.n.e.",
      "Hieroglify egipskie": "około 3100-3000 r. p.n.e.",
      "Alfabet fenicki": "około 1050 r. p.n.e.",
      "Alfabet grecki": "około 800 r. p.n.e.",
      "Alfabet łaciński": "około 700 r. p.n.e."
    },
    explanation: "Pismo klinowe pojawiło się około 3500 r. p.n.e., egipskie hieroglify około 3100–3000 r. p.n.e., alfabet fenicki około 1050 r. p.n.e., grecki około 800 r. p.n.e., a łaciński około 700 r. p.n.e."
  },
  {
    id: "R01_HARD_03",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Wskaż zasady należące do dziedzictwa prawa rzymskiego.",
    options: [
      "Prawo nie działa wstecz",
      "Domniemanie niewinności",
      "Wysłuchanie drugiej strony",
      "Karanie dwa razy za ten sam czyn",
      "Zakaz dwukrotnego karania za to samo przestępstwo",
      "Kary zawsze niezależne od pozycji społecznej"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    explanation: "Do zasad prawa rzymskiego należą zakaz wstecznego działania prawa, domniemanie niewinności, wysłuchanie obu stron i zakaz dwukrotnego karania."
  },
  {
    id: "R01_HARD_04",
    section: "Super trudne",
    type: "true_false",
    prompt: "Ostatnie starożytne igrzyska olimpijskie odbyły się w 393 r. n.e.",
    options: null,
    answer: true,
    explanation: "Pierwsze starożytne igrzyska olimpijskie odbyły się w 776 r. p.n.e., a ostatnie w 393 r. n.e."
  },
  {
    id: "R01_HARD_05",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Filip II pokonał Greków pod Cheroneą w __________ r. p.n.e., a Aleksander zwyciężył Persów pod Gaugamelą w __________ r. p.n.e.",
    options: null,
    answer: [
      "338",
      "331"
    ],
    altAnswers: [
      [
        "338",
        "338 r."
      ],
      [
        "331",
        "331 r."
      ]
    ],
    image: "r01_wyprawa_aleksandra.jpg",
    explanation: "Filip II zwyciężył pod Cheroneą w 338 r. p.n.e., a jego syn Aleksander pod Gaugamelą w 331 r. p.n.e."
  },
  {
    id: "R01_HARD_06",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywał się rzymski system ogrzewania podłogowego?",
    options: null,
    answer: "hypokaustum",
    altAnswers: [
      "hypokaustum",
      "hypocaustum"
    ],
    explanation: "Rzymianie stosowali ogrzewanie podłogowe nazywane hypokaustum."
  },
  {
    id: "R01_HARD_07",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Które bóstwo nie należy do egipskiego panteonu: Re, Horus, Thot, Hermes?",
    options: null,
    answer: "Hermes",
    explanation: "Re, Horus i Thot to bóstwa egipskie, natomiast Hermes był bogiem greckim."
  },
  {
    id: "R01_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "Republika rzymska. Urzędnik aktualizuje listę senatorów, przeprowadza spis obywateli i zajmuje się sprawami finansowymi. Jaki urząd pełni?",
    options: [
      "Kwestor",
      "Edyl",
      "Pretor",
      "Cenzor",
      "Trybun ludowy",
      "Konsul"
    ],
    answer: 3,
    explanation: "Cenzorzy sprawowali urząd przez 18 miesięcy; ustalali listę senatorów, przeprowadzali spisy obywateli i zajmowali się finansami."
  },
  {
    id: "R01_HARD_09",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj miejsca do właściwych cywilizacji.",
    options: null,
    categories: [
      "Egipt",
      "Grecja",
      "Rzym",
      "Izrael"
    ],
    items: [
      "Jerozolima",
      "Betlejem",
      "Forum Romanum",
      "Koloseum",
      "Olimpia",
      "Delfy",
      "Giza",
      "Teby"
    ],
    answer: {
      "Egipt": [
        "Giza",
        "Teby"
      ],
      "Grecja": [
        "Olimpia",
        "Delfy"
      ],
      "Rzym": [
        "Forum Romanum",
        "Koloseum"
      ],
      "Izrael": [
        "Jerozolima",
        "Betlejem"
      ]
    },
    explanation: "W Egipcie znajdowały się Giza i Teby; w Grecji Olimpia i Delfy; w Rzymie Forum Romanum i Koloseum; w dziejach Izraela występują Jerozolima i Betlejem."
  },
  {
    id: "R01_HARD_10",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia rzymskie i chrześcijańskie we właściwej kolejności chronologicznej.",
    options: null,
    items: [
      "Prześladowania chrześcijan za Nerona (64 n.e.)",
      "Edykt mediolański (313 n.e.)",
      "Podział cesarstwa (395 n.e.)",
      "Upadek zachodniego cesarstwa (476 n.e.)",
      "Ustanowienie republiki rzymskiej (509 p.n.e.)",
      "Śmierć Juliusza Cezara (44 p.n.e.)"
    ],
    answer: [
      "Ustanowienie republiki rzymskiej (509 p.n.e.)",
      "Śmierć Juliusza Cezara (44 p.n.e.)",
      "Prześladowania chrześcijan za Nerona (64 n.e.)",
      "Edykt mediolański (313 n.e.)",
      "Podział cesarstwa (395 n.e.)",
      "Upadek zachodniego cesarstwa (476 n.e.)"
    ],
    explanation: "Kolejnym wydarzeniom chronologicznie odpowiadają lata: 509 i 44 p.n.e. oraz 64, 313, 395 i 476 n.e."
  },
  {
    id: "R01_HARD_11",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jak nazywała się rada starszych w Sparcie, do której należeli mężczyźni po ukończeniu 60 lat?",
    options: [
      "Apella",
      "Geruzja",
      "Areopag",
      "Senat",
      "Bule",
      "Eforat"
    ],
    answer: 1,
    explanation: "Geruzja była spartańską radą starszych, pełniącą funkcje doradcze i sądownicze."
  },
  {
    id: "R01_HARD_12",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz prawidłowe zestawienia urzędu rzymskiego i długości kadencji.",
    options: [
      "Konsul - jeden rok",
      "Dyktator - sześć miesięcy",
      "Cenzor - osiemnaście miesięcy",
      "Senator - dożywotnio",
      "Pretor - dziesięć lat",
      "Edyl - pięć lat"
    ],
    answer: [
      0,
      1,
      2,
      3
    ],
    explanation: "Kadencja konsula wynosiła rok, dyktatora sześć miesięcy, cenzora osiemnaście miesięcy; senator piastował funkcję dożywotnio."
  }
];

const KID_PROMPTS = {
  "R01_MEZ_01": "Jakie dwie rzeki płynęły przez Mezopotamię?",
  "R01_MEZ_05": "Jak nazywał się zbiór praw króla Hammurabiego: __________.",
  "R01_EGI_01": "Która rzeka nawadniała pola w Egipcie?",
  "R01_EGI_08": "Jak nazywa się 10 przykazań w judaizmie?",
  "R01_POL_01": "Co to jest greckie polis?",
  "R01_POL_06": "Jak nazywał się ateński sąd skorupkowy?",
  "R01_KUL_05": "Kogo nazywamy ojcem medycyny?",
  "R01_RZY_01": "Na którym półwyspie znajduje się Rzym?",
  "R01_RZY_07": "Jak Rzymianie nazywali podbitą ziemię przyłączoną do imperium?",
  "R01_CHR_01": "Po co Rzymianom były akwedukty?",
  "R01_CHR_06": "Jak nazywa się najwyższy biskup chrześcijan?",
  "R01_HARD_06": "Jak nazywało się rzymskie ogrzewanie podłóg?"
};

const chapter = {
  id: "r01",
  number: 1,
  title: "Starożytność",
  icon: "🏺",
  sectionOrder: [
  "Mezopotamia",
  "Egipt i Izrael",
  "Greckie polis i wojny",
  "Kultura Greków i hellenizm",
  "Rzym: republika i cesarstwo",
  "Kultura Rzymu i chrześcijaństwo"
],
  sectionIcons: {
  "Mezopotamia": "🏺",
  "Egipt i Izrael": "🏜️",
  "Greckie polis i wojny": "🛡️",
  "Kultura Greków i hellenizm": "🏛️",
  "Rzym: republika i cesarstwo": "🦅",
  "Kultura Rzymu i chrześcijaństwo": "✝️"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
