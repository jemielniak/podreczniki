// Skróty sekcji (do identyfikatorów ćwiczeń):
//   TKAN = Tkanki i organizacja ciała
//   RUCH = Układ ruchu
//   DIET = Składniki pokarmowe i dieta
//   TRAW = Układ pokarmowy i trawienie
//   ODDE = Układ oddechowy
//   KRWI = Układ krwionośny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_TKAN_01",
    "section": "Tkanki i organizacja ciała",
    "type": "single_choice",
    "prompt": "Który szereg prawidłowo przedstawia organizację ciała człowieka od najmniejszej do największej jednostki?",
    "options": [
      "tkanka → komórka → narząd → układ → organizm",
      "komórka → tkanka → narząd → układ → organizm",
      "komórka → narząd → tkanka → układ → organizm",
      "narząd → komórka → tkanka → układ → organizm",
      "komórka → tkanka → układ → narząd → organizm",
      "tkanka → narząd → komórka → organizm → układ"
    ],
    "answer": 1,
    "explanation": "Komórki tworzą tkanki, tkanki narządy, narządy układy, a współdziałanie układów buduje organizm."
  },
  {
    "id": "R04_TKAN_02",
    "section": "Tkanki i organizacja ciała",
    "type": "multi_select",
    "prompt": "Które tkanki należą do czterech podstawowych rodzajów tkanek zwierzęcych?",
    "options": [
      "nerwowa",
      "nabłonkowa",
      "łączna",
      "drewniana",
      "mięśniowa",
      "korkowa"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wyróżnia się tkanki nerwową, nabłonkową, łączną i mięśniową."
  },
  {
    "id": "R04_TKAN_03",
    "section": "Tkanki i organizacja ciała",
    "type": "true_false",
    "prompt": "Komórki tkanki nabłonkowej ściśle do siebie przylegają, a sama tkanka nie jest unaczyniona.",
    "options": null,
    "answer": true,
    "explanation": "Taka budowa jest cechą nabłonka, który okrywa ciało i wyścieła narządy.",
    "image": "r04_rodzaje_nablonkow.jpg"
  },
  {
    "id": "R04_TKAN_04",
    "section": "Tkanki i organizacja ciała",
    "type": "match",
    "prompt": "Dopasuj rodzaj nabłonka do wskazanego miejsca występowania.",
    "options": null,
    "answer": {
      "jednowarstwowy płaski": "pęcherzyki płucne",
      "jednowarstwowy sześcienny": "kanaliki nerkowe",
      "jednowarstwowy walcowaty": "jelito cienkie",
      "wielowarstwowy płaski rogowaciejący": "powierzchnia skóry"
    },
    "left": [
      "jednowarstwowy płaski",
      "jednowarstwowy sześcienny",
      "jednowarstwowy walcowaty",
      "wielowarstwowy płaski rogowaciejący"
    ],
    "right": [
      "jelito cienkie",
      "powierzchnia skóry",
      "pęcherzyki płucne",
      "kanaliki nerkowe"
    ],
    "explanation": "Nabłonki mają różne funkcje i lokalizacje: odpowiednio wymiana gazowa, transport substancji, wchłanianie i ochrona.",
    "image": "r04_rodzaje_nablonkow.jpg"
  },
  {
    "id": "R04_TKAN_05",
    "section": "Tkanki i organizacja ciała",
    "type": "single_choice",
    "prompt": "Który rodzaj tkanki mięśniowej buduje ściany serca?",
    "options": [
      "tkanka mięśniowa gładka",
      "tkanka łączna zbita",
      "tkanka mięśniowa poprzecznie prążkowana sercowa",
      "tkanka mięśniowa poprzecznie prążkowana szkieletowa",
      "tkanka nerwowa",
      "tkanka chrzęstna"
    ],
    "answer": 2,
    "explanation": "Serce tworzy tkanka poprzecznie prążkowana sercowa, pracująca niezależnie od naszej woli.",
    "image": "r04_typy_miesni.jpg"
  },
  {
    "id": "R04_TKAN_06",
    "section": "Tkanki i organizacja ciała",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący rodzajem tkanki: tkanka nerwowa, tkanka nabłonkowa, tkanka mięśniowa, wątroba.",
    "options": null,
    "answer": "wątroba",
    "explanation": "Wątroba to narząd, a pozostałe pozycje to rodzaje tkanek."
  },
  {
    "id": "R04_TKAN_07",
    "section": "Tkanki i organizacja ciała",
    "type": "fill_in",
    "prompt": "Dwa białka kurczliwe budujące miofibryle to __________ i __________.",
    "options": null,
    "answer": [
      "aktyna",
      "miozyna"
    ],
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
    "explanation": "W miofibrylach włókien mięśniowych znajdują się białka kurczliwe: aktyna i miozyna."
  },
  {
    "id": "R04_TKAN_08",
    "section": "Tkanki i organizacja ciała",
    "type": "sort",
    "prompt": "Przyporządkuj wskazane elementy do właściwego rodzaju tkanki.",
    "options": null,
    "answer": {
      "tkanka łączna": [
        "chrząstka",
        "kość",
        "krew"
      ],
      "tkanka mięśniowa": [
        "mięsień szkieletowy",
        "mięsień sercowy",
        "mięsień gładki"
      ]
    },
    "items": [
      "mięsień sercowy",
      "kość",
      "mięsień gładki",
      "krew",
      "chrząstka",
      "mięsień szkieletowy"
    ],
    "categories": [
      "tkanka łączna",
      "tkanka mięśniowa"
    ],
    "explanation": "Chrząstka, kość i krew należą do tkanki łącznej; pozostałe trzy pozycje opisują rodzaje tkanki mięśniowej."
  },
  {
    "id": "R04_TKAN_09",
    "section": "Tkanki i organizacja ciała",
    "type": "riddle",
    "prompt": "Jak nazywa się długa wypustka neuronu, przewodząca impuls do kolejnej komórki?",
    "options": null,
    "answer": "akson",
    "altAnswers": [
      "akson",
      "neuryt"
    ],
    "explanation": "Neuron ma wiele krótkich dendrytów i jeden długi akson, zwany też neurytem.",
    "image": "r04_neuron_schemat.jpg"
  },
  {
    "id": "R04_TKAN_10",
    "section": "Tkanki i organizacja ciała",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji organizmu człowieka od najmniejszego do największego.",
    "options": null,
    "answer": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    "items": [
      "organizm",
      "narząd",
      "komórka",
      "układ narządów",
      "tkanka"
    ],
    "explanation": "Kolejność poziomów organizacji ciała człowieka to: komórka → tkanka → narząd → układ narządów → organizm."
  },
  {
    "id": "R04_RUCH_01",
    "section": "Układ ruchu",
    "type": "single_choice",
    "prompt": "Ile kości wchodzi w skład szkieletu dorosłego człowieka?",
    "options": [
      "198",
      "204",
      "208",
      "206",
      "212",
      "220"
    ],
    "answer": 3,
    "explanation": "Szkielet dorosłego człowieka składa się z około 206 kości."
  },
  {
    "id": "R04_RUCH_02",
    "section": "Układ ruchu",
    "type": "true_false",
    "prompt": "Szkielet człowieka pełni funkcję krwiotwórczą, ponieważ w szpiku kostnym powstają komórki krwi.",
    "options": null,
    "answer": true,
    "explanation": "Szpik kostny znajdujący się wewnątrz niektórych kości produkuje komórki krwi."
  },
  {
    "id": "R04_RUCH_03",
    "section": "Układ ruchu",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje szkieletu.",
    "options": [
      "ochrona narządów wewnętrznych",
      "nadawanie ciału kształtu",
      "wydzielanie soku żołądkowego",
      "magazynowanie soli mineralnych",
      "współudział w poruszaniu ciałem",
      "wymiana gazowa w pęcherzykach"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Szkielet podpiera ciało, chroni narządy, współdziała z mięśniami i stanowi rezerwuar soli mineralnych."
  },
  {
    "id": "R04_RUCH_04",
    "section": "Układ ruchu",
    "type": "riddle",
    "prompt": "Jaka błona pokrywa kość od zewnątrz, odżywia ją i uczestniczy w jej regeneracji?",
    "options": null,
    "answer": "okostna",
    "altAnswers": [
      "okostna",
      "okostnę"
    ],
    "explanation": "Okostna jest silnie unaczynioną i unerwioną błoną ochronną kości.",
    "image": "r04_kosc_dluga.jpg"
  },
  {
    "id": "R04_RUCH_05",
    "section": "Układ ruchu",
    "type": "match",
    "prompt": "Połącz rodzaj kości z przykładem.",
    "options": null,
    "answer": {
      "kość długa": "kość udowa",
      "kość krótka": "kość nadgarstka",
      "kość płaska": "łopatka",
      "kość różnokształtna": "kręg"
    },
    "left": [
      "kość długa",
      "kość krótka",
      "kość płaska",
      "kość różnokształtna"
    ],
    "right": [
      "kręg",
      "łopatka",
      "kość udowa",
      "kość nadgarstka"
    ],
    "explanation": "Ze względu na kształt wyróżnia się kości długie, krótkie, płaskie i różnokształtne."
  },
  {
    "id": "R04_RUCH_06",
    "section": "Układ ruchu",
    "type": "sort",
    "prompt": "Przyporządkuj kości do szkieletu osiowego lub szkieletu kończyn i obręczy.",
    "options": null,
    "answer": {
      "szkielet osiowy": [
        "czaszka",
        "mostek",
        "żebra",
        "kręgosłup"
      ],
      "szkielet kończyn i obręczy": [
        "kość ramienna",
        "łopatka",
        "kość udowa",
        "kość piszczelowa"
      ]
    },
    "items": [
      "łopatka",
      "mostek",
      "kość piszczelowa",
      "czaszka",
      "kość udowa",
      "żebra",
      "kość ramienna",
      "kręgosłup"
    ],
    "categories": [
      "szkielet osiowy",
      "szkielet kończyn i obręczy"
    ],
    "explanation": "Szkielet osiowy obejmuje czaszkę, kręgosłup i klatkę piersiową; pozostałe wymienione kości należą do kończyn lub obręczy."
  },
  {
    "id": "R04_RUCH_07",
    "section": "Układ ruchu",
    "type": "scenario",
    "prompt": "Podczas zginania ręki w łokciu jeden mięsień kurczy się, a drugi rozluźnia. Który mięsień działa jako zginacz?",
    "options": [
      "mięsień dwugłowy ramienia",
      "mięsień trójgłowy ramienia",
      "mięsień czworogłowy uda",
      "mięsień naramienny",
      "mięsień brzuchaty łydki",
      "mięsień prosty brzucha"
    ],
    "answer": 0,
    "explanation": "Przy zginaniu w łokciu kurczy się mięsień dwugłowy; mięsień trójgłowy odpowiada za prostowanie."
  },
  {
    "id": "R04_RUCH_08",
    "section": "Układ ruchu",
    "type": "odd_one_out",
    "prompt": "Wskaż kość spoza szkieletu osiowego: kość czołowa, mostek, kręg piersiowy, kość udowa.",
    "options": null,
    "answer": "kość udowa",
    "explanation": "Kość udowa należy do kończyny dolnej; czaszka, mostek i kręgi wchodzą w skład szkieletu osiowego."
  },
  {
    "id": "R04_RUCH_09",
    "section": "Układ ruchu",
    "type": "fill_in",
    "prompt": "Ruchome połączenie kości nazywamy __________, a płyn zmniejszający tarcie w jego jamie to __________.",
    "options": null,
    "answer": [
      "stawem",
      "maź stawowa"
    ],
    "altAnswers": [
      [
        "stawem",
        "staw"
      ],
      [
        "maź stawowa",
        "maź stawową"
      ]
    ],
    "explanation": "Staw to ruchome połączenie kości. W jamie stawowej znajduje się maź ograniczająca ścieranie powierzchni stawowych.",
    "image": "r04_staw_schemat.jpg"
  },
  {
    "id": "R04_RUCH_10",
    "section": "Układ ruchu",
    "type": "single_choice",
    "prompt": "Jak nazywa się uraz, przy którym powierzchnie stawowe ustawiają się nieprawidłowo względem siebie?",
    "options": [
      "złamanie otwarte",
      "skręcenie",
      "pęknięcie ścięgna",
      "stłuczenie",
      "zwichnięcie",
      "krzywica"
    ],
    "answer": 4,
    "explanation": "Zwichnięcie oznacza nieprawidłowe położenie powierzchni stawowych; skręcenie dotyczy naciągnięcia lub rozerwania torebki stawowej czy więzadeł.",
    "image": "r04_staw_schemat.jpg"
  },
  {
    "id": "R04_DIET_01",
    "section": "Składniki pokarmowe i dieta",
    "type": "single_choice",
    "prompt": "Która grupa składników pokarmowych stanowi główne źródło energii?",
    "options": [
      "witaminy",
      "sole mineralne",
      "woda",
      "błonnik",
      "węglowodany",
      "enzymy"
    ],
    "answer": 4,
    "explanation": "Węglowodany są głównym źródłem energii dla organizmu."
  },
  {
    "id": "R04_DIET_02",
    "section": "Składniki pokarmowe i dieta",
    "type": "multi_select",
    "prompt": "Zaznacz produkty będące źródłem witaminy C.",
    "options": [
      "czarna porzeczka",
      "masło",
      "cytrusy",
      "natka pietruszki",
      "słonina",
      "aronia"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Źródłami witaminy C są m.in. cytrusy, czarna porzeczka, aronia i natka pietruszki."
  },
  {
    "id": "R04_DIET_03",
    "section": "Składniki pokarmowe i dieta",
    "type": "true_false",
    "prompt": "Błonnik pokarmowy jest trawiony przez człowieka do glukozy.",
    "options": null,
    "answer": false,
    "explanation": "Błonnik nie jest trawiony w przewodzie pokarmowym człowieka; usprawnia pracę jelit i wiąże wodę."
  },
  {
    "id": "R04_DIET_04",
    "section": "Składniki pokarmowe i dieta",
    "type": "match",
    "prompt": "Połącz witaminę z jej rolą w organizmie.",
    "options": null,
    "answer": {
      "witamina A": "prawidłowe widzenie o zmierzchu",
      "witamina D": "gospodarka wapniowo-fosforanowa i budowa kości",
      "witamina K": "prawidłowe krzepnięcie krwi",
      "witamina C": "odporność i gojenie ran"
    },
    "left": [
      "witamina A",
      "witamina D",
      "witamina K",
      "witamina C"
    ],
    "right": [
      "odporność i gojenie ran",
      "prawidłowe krzepnięcie krwi",
      "gospodarka wapniowo-fosforanowa i budowa kości",
      "prawidłowe widzenie o zmierzchu"
    ],
    "explanation": "Witaminy A, D, K i C pełnią różne funkcje, m.in. wspierają wzrok, kości, krzepnięcie krwi i tkankę łączną."
  },
  {
    "id": "R04_DIET_05",
    "section": "Składniki pokarmowe i dieta",
    "type": "fill_in",
    "prompt": "Wielocukier stanowiący zapasowy materiał roślinny to __________, a przykładem cukru prostego jest __________.",
    "options": null,
    "answer": [
      "skrobia",
      "glukoza"
    ],
    "altAnswers": [
      [
        "skrobia",
        "skrobię"
      ],
      [
        "glukoza",
        "glukozę"
      ]
    ],
    "explanation": "Skrobia gromadzi się w roślinach, a jej rozkład dostarcza m.in. glukozy."
  },
  {
    "id": "R04_DIET_06",
    "section": "Składniki pokarmowe i dieta",
    "type": "riddle",
    "prompt": "Który niestrawny składnik produktów roślinnych wchłania wodę i ułatwia przesuwanie pokarmu w jelitach?",
    "options": null,
    "answer": "błonnik",
    "altAnswers": [
      "błonnik",
      "błonnik pokarmowy"
    ],
    "explanation": "Błonnik reguluje pracę jelit i pomaga usuwać zalegające resztki pokarmowe."
  },
  {
    "id": "R04_DIET_07",
    "section": "Składniki pokarmowe i dieta",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest witaminą: witamina A, witamina D, żelazo, witamina K, witamina C.",
    "options": null,
    "answer": "żelazo",
    "explanation": "Żelazo to składnik mineralny, ważny m.in. jako składnik hemoglobiny; pozostałe pozycje są witaminami."
  },
  {
    "id": "R04_DIET_08",
    "section": "Składniki pokarmowe i dieta",
    "type": "sort",
    "prompt": "Podziel podane źródła tłuszczu według ich pochodzenia.",
    "options": null,
    "answer": {
      "pochodzenie roślinne": [
        "oliwa",
        "olej roślinny",
        "masło kakaowe"
      ],
      "pochodzenie zwierzęce": [
        "słonina",
        "tran",
        "masło"
      ]
    },
    "items": [
      "tran",
      "oliwa",
      "masło kakaowe",
      "masło",
      "olej roślinny",
      "słonina"
    ],
    "categories": [
      "pochodzenie roślinne",
      "pochodzenie zwierzęce"
    ],
    "explanation": "Do tłuszczów roślinnych należą oliwa, oleje i masło kakaowe, a do zwierzęcych – masło, tran i słonina."
  },
  {
    "id": "R04_DIET_09",
    "section": "Składniki pokarmowe i dieta",
    "type": "scenario",
    "prompt": "Uczeń chce ułożyć jadłospis według zasad zdrowego żywienia. Co powinien robić najczęściej?",
    "options": [
      "jeść przede wszystkim czerwone mięso",
      "ograniczyć warzywa i owoce",
      "regularnie być aktywnym fizycznie i często jeść warzywa oraz owoce",
      "zastępować wodę słodzonymi napojami",
      "wykluczać wszystkie produkty zbożowe",
      "unikać codziennego ruchu"
    ],
    "answer": 2,
    "explanation": "W piramidzie zdrowego żywienia podstawą jest aktywność fizyczna, a w diecie ważne są warzywa, owoce i produkty pełnoziarniste."
  },
  {
    "id": "R04_DIET_10",
    "section": "Składniki pokarmowe i dieta",
    "type": "sequence",
    "prompt": "Ułóż kolejne czynności w doświadczeniu wykrywającym witaminę C w soku z cytryny.",
    "options": null,
    "answer": [
      "Przygotuj dwie identyczne próbki wody z kleikiem skrobiowym",
      "Dodaj jodynę do obu próbek",
      "Do próbki badawczej dodaj sok z cytryny",
      "Porównaj barwy próbki badawczej i kontrolnej"
    ],
    "items": [
      "Porównaj barwy próbki badawczej i kontrolnej",
      "Dodaj jodynę do obu próbek",
      "Przygotuj dwie identyczne próbki wody z kleikiem skrobiowym",
      "Do próbki badawczej dodaj sok z cytryny"
    ],
    "explanation": "W doświadczeniu skrobia z jodyną barwi się na granatowo, a dodanie soku z cytryny do próby badawczej powoduje odbarwienie.",
    "image": "r04_witamina_c_doswiadczenie.jpg"
  },
  {
    "id": "R04_TRAW_01",
    "section": "Układ pokarmowy i trawienie",
    "type": "sequence",
    "prompt": "Ułóż odcinki przewodu pokarmowego w kolejności przechodzenia przez nie pokarmu.",
    "options": null,
    "answer": [
      "jama ustna",
      "gardło",
      "przełyk",
      "żołądek",
      "jelito cienkie",
      "jelito grube"
    ],
    "items": [
      "żołądek",
      "jama ustna",
      "jelito grube",
      "przełyk",
      "gardło",
      "jelito cienkie"
    ],
    "explanation": "Pokarm przemieszcza się przez jamę ustną, gardło, przełyk, żołądek oraz jelita, kończąc drogę w odbytnicy.",
    "image": "r04_uklad_pokarmowy.jpg"
  },
  {
    "id": "R04_TRAW_02",
    "section": "Układ pokarmowy i trawienie",
    "type": "single_choice",
    "prompt": "Jaki enzym zawarty w ślinie rozpoczyna trawienie cukrów złożonych?",
    "options": [
      "pepsyna",
      "amylaza ślinowa",
      "lipaza trzustkowa",
      "trypsyna",
      "chymotrypsyna",
      "fibrynogen"
    ],
    "answer": 1,
    "explanation": "Amylaza ślinowa rozpoczyna rozkład skrobi już w jamie ustnej."
  },
  {
    "id": "R04_TRAW_03",
    "section": "Układ pokarmowy i trawienie",
    "type": "multi_select",
    "prompt": "Które z wymienionych procesów zachodzą w przewodzie pokarmowym?",
    "options": [
      "mechaniczne rozdrabnianie pokarmu",
      "wytwarzanie erytrocytów",
      "trawienie substancji odżywczych",
      "wchłanianie składników pokarmowych",
      "wymiana tlenu w płucach",
      "usuwanie niestrawionych resztek"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Przewód pokarmowy rozdrabnia i nawilża pokarm, trawi go, wchłania składniki oraz usuwa pozostałości."
  },
  {
    "id": "R04_TRAW_04",
    "section": "Układ pokarmowy i trawienie",
    "type": "true_false",
    "prompt": "Przełyk transportuje pokarm do żołądka dzięki ruchom robaczkowym mięśni gładkich.",
    "options": null,
    "answer": true,
    "explanation": "Ruchy perystaltyczne przełyku przesuwają kęsy pokarmowe w kierunku żołądka."
  },
  {
    "id": "R04_TRAW_05",
    "section": "Układ pokarmowy i trawienie",
    "type": "match",
    "prompt": "Połącz enzym trawienny ze składnikiem pokarmowym, na który działa.",
    "options": null,
    "answer": {
      "amylaza ślinowa": "cukry złożone w jamie ustnej",
      "pepsyna": "białka w żołądku",
      "lipaza trzustkowa": "tłuszcze w dwunastnicy",
      "trypsyna": "białka w dwunastnicy"
    },
    "left": [
      "amylaza ślinowa",
      "pepsyna",
      "lipaza trzustkowa",
      "trypsyna"
    ],
    "right": [
      "białka w dwunastnicy",
      "tłuszcze w dwunastnicy",
      "cukry złożone w jamie ustnej",
      "białka w żołądku"
    ],
    "explanation": "Amylaza rozkłada węglowodany, pepsyna i trypsyna – białka, a lipaza – tłuszcze."
  },
  {
    "id": "R04_TRAW_06",
    "section": "Układ pokarmowy i trawienie",
    "type": "riddle",
    "prompt": "Jak nazywają się palczaste wypustki jelita cienkiego zwiększające powierzchnię wchłaniania?",
    "options": null,
    "answer": "kosmki jelitowe",
    "altAnswers": [
      "kosmki jelitowe",
      "kosmki"
    ],
    "explanation": "Kosmki i mikrokosmki zwiększają powierzchnię wchłaniania składników odżywczych w jelicie cienkim.",
    "image": "r04_kosmek_jelitowy.jpg"
  },
  {
    "id": "R04_TRAW_07",
    "section": "Układ pokarmowy i trawienie",
    "type": "odd_one_out",
    "prompt": "Która struktura nie należy do przewodu pokarmowego: przełyk, żołądek, tchawica, jelito cienkie, jelito grube.",
    "options": null,
    "answer": "tchawica",
    "explanation": "Tchawica należy do układu oddechowego; pozostałe struktury tworzą przewód pokarmowy.",
    "image": "r04_uklad_pokarmowy.jpg"
  },
  {
    "id": "R04_TRAW_08",
    "section": "Układ pokarmowy i trawienie",
    "type": "fill_in",
    "prompt": "Największym gruczołem pokarmowym człowieka jest __________, która produkuje __________ emulgującą tłuszcze.",
    "options": null,
    "answer": [
      "wątroba",
      "żółć"
    ],
    "altAnswers": [
      [
        "wątroba",
        "wątroby"
      ],
      [
        "żółć",
        "żółci"
      ]
    ],
    "explanation": "Wątroba wytwarza żółć, a żółć rozbija duże krople tłuszczu na mniejsze, ułatwiając działanie enzymów."
  },
  {
    "id": "R04_TRAW_09",
    "section": "Układ pokarmowy i trawienie",
    "type": "scenario",
    "prompt": "W doświadczeniu do kawałka pieczywa dodano jodynę, a jego fragment zabarwił się na granatowo. Obecność czego potwierdza obserwacja?",
    "options": [
      "białka",
      "witamina D",
      "żelazo",
      "skrobia",
      "tłuszcz",
      "witamina K"
    ],
    "answer": 3,
    "explanation": "Jodyna barwi skrobię na granatowo, dlatego służy do wykrywania jej obecności w żywności."
  },
  {
    "id": "R04_TRAW_10",
    "section": "Układ pokarmowy i trawienie",
    "type": "sort",
    "prompt": "Podziel podane narządy na odcinki przewodu pokarmowego i gruczoły wspomagające trawienie.",
    "options": null,
    "answer": {
      "odcinki przewodu pokarmowego": [
        "przełyk",
        "żołądek",
        "jelito cienkie"
      ],
      "gruczoły trawienne": [
        "ślinianki",
        "wątroba",
        "trzustka"
      ]
    },
    "items": [
      "wątroba",
      "jelito cienkie",
      "ślinianki",
      "żołądek",
      "trzustka",
      "przełyk"
    ],
    "categories": [
      "odcinki przewodu pokarmowego",
      "gruczoły trawienne"
    ],
    "explanation": "Pokarm przechodzi przez przełyk, żołądek i jelito cienkie; ślinianki, wątroba i trzustka wytwarzają wydzieliny wspomagające trawienie."
  },
  {
    "id": "R04_ODDE_01",
    "section": "Układ oddechowy",
    "type": "single_choice",
    "prompt": "W której części płuc zachodzi bezpośrednia wymiana gazowa między powietrzem a krwią?",
    "options": [
      "pęcherzykach płucnych",
      "jamie nosowej",
      "krtani",
      "tchawicy",
      "oskrzelach głównych",
      "gardle"
    ],
    "answer": 0,
    "explanation": "Pęcherzyki płucne mają cienkie ściany i otacza je sieć naczyń włosowatych; przez te ściany zachodzi wymiana gazowa.",
    "image": "r04_pecherzyki_plucne.jpg"
  },
  {
    "id": "R04_ODDE_02",
    "section": "Układ oddechowy",
    "type": "multi_select",
    "prompt": "Jakie funkcje pełni jama nosowa wobec wdychanego powietrza?",
    "options": [
      "oczyszcza je",
      "ogrzewa je",
      "zamienia azot w tlen",
      "nawilża je",
      "produkuje erytrocyty",
      "wytwarza żółć"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Jama nosowa oczyszcza, ogrzewa i nawilża powietrze; dlatego zaleca się oddychanie przez nos."
  },
  {
    "id": "R04_ODDE_03",
    "section": "Układ oddechowy",
    "type": "true_false",
    "prompt": "Prawe płuco człowieka ma trzy płaty, a lewe dwa.",
    "options": null,
    "answer": true,
    "explanation": "Prawe płuco ma trzy płaty, a lewe dwa, ponieważ po lewej stronie klatki piersiowej znajduje się serce."
  },
  {
    "id": "R04_ODDE_04",
    "section": "Układ oddechowy",
    "type": "match",
    "prompt": "Dopasuj strukturę układu oddechowego do jej zadania.",
    "options": null,
    "answer": {
      "krtań": "powstawanie głosu",
      "oskrzela": "doprowadzanie powietrza do płuc",
      "pęcherzyki płucne": "wymiana gazowa z krwią",
      "przepona": "zmiana objętości klatki piersiowej"
    },
    "left": [
      "krtań",
      "oskrzela",
      "pęcherzyki płucne",
      "przepona"
    ],
    "right": [
      "wymiana gazowa z krwią",
      "powstawanie głosu",
      "zmiana objętości klatki piersiowej",
      "doprowadzanie powietrza do płuc"
    ],
    "explanation": "Krtań służy tworzeniu dźwięków, oskrzela przewodzą powietrze, pęcherzyki wymieniają gazy, a przepona uczestniczy w wentylacji."
  },
  {
    "id": "R04_ODDE_05",
    "section": "Układ oddechowy",
    "type": "fill_in",
    "prompt": "Do krwi z pęcherzyków płucnych przenika __________, a z krwi do pęcherzyków __________.",
    "options": null,
    "answer": [
      "tlen",
      "dwutlenek węgla"
    ],
    "altAnswers": [
      [
        "tlen",
        "tlenu"
      ],
      [
        "dwutlenek węgla",
        "dwutlenku węgla",
        "CO2"
      ]
    ],
    "explanation": "Dyfuzja tlenu do krwi i dwutlenku węgla w przeciwnym kierunku umożliwia wymianę gazową.",
    "image": "r04_pecherzyki_plucne.jpg"
  },
  {
    "id": "R04_ODDE_06",
    "section": "Układ oddechowy",
    "type": "riddle",
    "prompt": "Jaki mięsień oddziela klatkę piersiową od jamy brzusznej i spłaszcza się podczas wdechu?",
    "options": null,
    "answer": "przepona",
    "altAnswers": [
      "przepona",
      "przeponę"
    ],
    "explanation": "Podczas wdechu przepona kurczy się, spłaszcza i opada, powiększając objętość klatki piersiowej.",
    "image": "r04_wdech_wydech.jpg"
  },
  {
    "id": "R04_ODDE_07",
    "section": "Układ oddechowy",
    "type": "odd_one_out",
    "prompt": "Wskaż element nienależący do dróg oddechowych: jama nosowa, krtań, tchawica, oskrzela, przełyk.",
    "options": null,
    "answer": "przełyk",
    "explanation": "Przełyk prowadzi pokarm do żołądka, a pozostałe pozycje są elementami drogi powietrza."
  },
  {
    "id": "R04_ODDE_08",
    "section": "Układ oddechowy",
    "type": "scenario",
    "prompt": "Podczas doświadczenia uczeń wdmuchuje wydychane powietrze przez rurkę do wody wapiennej. Woda wapienna szybko mętnieje. Jaki gaz wykrywa?",
    "options": [
      "tlen",
      "dwutlenek węgla",
      "azot",
      "wodór",
      "argon",
      "ozon"
    ],
    "answer": 1,
    "explanation": "Dwutlenek węgla powoduje mętnienie wody wapiennej; w powietrzu wydychanym jest go więcej niż w atmosferycznym."
  },
  {
    "id": "R04_ODDE_09",
    "section": "Układ oddechowy",
    "type": "sequence",
    "prompt": "Ułóż drogę wdychanego powietrza od nosa do miejsca wymiany gazowej.",
    "options": null,
    "answer": [
      "jama nosowa",
      "gardło",
      "krtań",
      "tchawica",
      "oskrzela",
      "pęcherzyki płucne"
    ],
    "items": [
      "oskrzela",
      "gardło",
      "pęcherzyki płucne",
      "jama nosowa",
      "tchawica",
      "krtań"
    ],
    "explanation": "Droga powietrza biegnie przez górne i dolne drogi oddechowe aż do pęcherzyków płucnych.",
    "image": "r04_uklad_oddechowy.jpg"
  },
  {
    "id": "R04_ODDE_10",
    "section": "Układ oddechowy",
    "type": "sort",
    "prompt": "Przyporządkuj zdarzenia do wdechu lub wydechu spoczynkowego.",
    "options": null,
    "answer": {
      "wdech": [
        "przepona kurczy się i opada",
        "żebra unoszą się",
        "objętość klatki piersiowej rośnie"
      ],
      "wydech": [
        "przepona rozkurcza się i unosi",
        "żebra opadają",
        "objętość klatki piersiowej maleje"
      ]
    },
    "items": [
      "żebra opadają",
      "przepona kurczy się i opada",
      "objętość klatki piersiowej maleje",
      "żebra unoszą się",
      "objętość klatki piersiowej rośnie",
      "przepona rozkurcza się i unosi"
    ],
    "categories": [
      "wdech",
      "wydech"
    ],
    "explanation": "Wdech jest związany ze skurczem przepony i unoszeniem żeber; przy wydechu następują ruchy przeciwne.",
    "image": "r04_wdech_wydech.jpg"
  },
  {
    "id": "R04_KRWI_01",
    "section": "Układ krwionośny",
    "type": "single_choice",
    "prompt": "Jaką część objętości krwi stanowi osocze?",
    "options": [
      "około 30%",
      "około 45%",
      "około 55%",
      "około 65%",
      "około 75%",
      "około 90%"
    ],
    "answer": 2,
    "explanation": "Osocze stanowi 55% objętości krwi, a elementy morfotyczne 45%.",
    "image": "r04_krwinki.jpg"
  },
  {
    "id": "R04_KRWI_02",
    "section": "Układ krwionośny",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje krwi.",
    "options": [
      "transport tlenu",
      "udział w reakcjach odpornościowych",
      "udział w regulacji temperatury",
      "produkcja żółci",
      "udział w krzepnięciu i gojeniu ran",
      "mechaniczne rozdrabnianie pokarmu"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Krew uczestniczy w transporcie, odporności, regulacji temperatury i hemostazie."
  },
  {
    "id": "R04_KRWI_03",
    "section": "Układ krwionośny",
    "type": "true_false",
    "prompt": "Dojrzałe krwinki czerwone człowieka nie mają jądra komórkowego.",
    "options": null,
    "answer": true,
    "explanation": "Dojrzałe erytrocyty ssaków są pozbawione jądra i mają kształt dwuwklęsłych dysków.",
    "image": "r04_krwinki.jpg"
  },
  {
    "id": "R04_KRWI_04",
    "section": "Układ krwionośny",
    "type": "match",
    "prompt": "Połącz składnik krwi z jego podstawową rolą.",
    "options": null,
    "answer": {
      "erytrocyty": "transport tlenu",
      "leukocyty": "obrona organizmu",
      "płytki krwi": "krzepnięcie krwi",
      "osocze": "transport rozpuszczonych substancji"
    },
    "left": [
      "erytrocyty",
      "leukocyty",
      "płytki krwi",
      "osocze"
    ],
    "right": [
      "krzepnięcie krwi",
      "transport rozpuszczonych substancji",
      "obrona organizmu",
      "transport tlenu"
    ],
    "explanation": "Czerwone krwinki przewożą tlen, białe odpowiadają za odporność, płytki za krzepnięcie, osocze przenosi różne substancje."
  },
  {
    "id": "R04_KRWI_05",
    "section": "Układ krwionośny",
    "type": "fill_in",
    "prompt": "Podczas krzepnięcia rozpuszczalny __________ przekształca się we włóknistą __________.",
    "options": null,
    "answer": [
      "fibrynogen",
      "fibrynę"
    ],
    "altAnswers": [
      [
        "fibrynogen",
        "fibrynogenu"
      ],
      [
        "fibrynę",
        "fibryna"
      ]
    ],
    "explanation": "Przy udziale płytek krwi fibrynogen zmienia się w fibrynę, której sieć buduje skrzep."
  },
  {
    "id": "R04_KRWI_06",
    "section": "Układ krwionośny",
    "type": "riddle",
    "prompt": "Jak nazywa się błona otaczająca serce i chroniąca je przed urazami mechanicznymi?",
    "options": null,
    "answer": "osierdzie",
    "altAnswers": [
      "osierdzie",
      "osierdziem"
    ],
    "explanation": "Osierdzie to błona ochronna otaczająca serce.",
    "image": "r04_serce_schemat.jpg"
  },
  {
    "id": "R04_KRWI_07",
    "section": "Układ krwionośny",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest naczyniem krwionośnym: tętnica, żyła, oskrzele, naczynie włosowate.",
    "options": null,
    "answer": "oskrzele",
    "explanation": "Oskrzele przewodzi powietrze; tętnice, żyły i naczynia włosowate są naczyniami krwionośnymi."
  },
  {
    "id": "R04_KRWI_08",
    "section": "Układ krwionośny",
    "type": "scenario",
    "prompt": "Lekarz opisuje naczynie o grubej warstwie mięśni gładkich, w którym krew przemieszcza się od serca pod wysokim ciśnieniem. Jakie to naczynie?",
    "options": [
      "tętnica",
      "żyła",
      "naczynie włosowate",
      "oskrzelik",
      "przewód żółciowy",
      "naczynie limfatyczne"
    ],
    "answer": 0,
    "explanation": "Tętnice odprowadzają krew z serca i mają grubsze ściany niż żyły."
  },
  {
    "id": "R04_KRWI_09",
    "section": "Układ krwionośny",
    "type": "sequence",
    "prompt": "Ułóż etapy prawidłowego przepływu krwi od dużej tętnicy do dużej żyły.",
    "options": null,
    "answer": [
      "duża tętnica",
      "mała tętnica",
      "naczynia włosowate",
      "małe żyłki",
      "duża żyła"
    ],
    "items": [
      "naczynia włosowate",
      "duża żyła",
      "duża tętnica",
      "małe żyłki",
      "mała tętnica"
    ],
    "explanation": "Krew wypływa z serca przez duże i drobniejsze tętnice, przechodzi przez włośniczki, a następnie przez żyłki wraca dużymi żyłami.",
    "image": "r04_serce_schemat.jpg"
  },
  {
    "id": "R04_KRWI_10",
    "section": "Układ krwionośny",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do rodzaju naczynia krwionośnego.",
    "options": null,
    "answer": {
      "tętnica": [
        "odprowadza krew od serca",
        "zwykle wysokie ciśnienie krwi"
      ],
      "żyła": [
        "prowadzi krew do serca",
        "może mieć zastawki"
      ],
      "naczynie włosowate": [
        "ściana z jednej warstwy komórek",
        "miejsce wymiany substancji z tkankami"
      ]
    },
    "items": [
      "może mieć zastawki",
      "odprowadza krew od serca",
      "miejsce wymiany substancji z tkankami",
      "zwykle wysokie ciśnienie krwi",
      "prowadzi krew do serca",
      "ściana z jednej warstwy komórek"
    ],
    "categories": [
      "tętnica",
      "żyła",
      "naczynie włosowate"
    ],
    "explanation": "Tętnice, żyły i naczynia włosowate różnią się kierunkiem przepływu, budową oraz funkcją."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj komórkę tkanki kostnej do jej charakterystycznej funkcji.",
    "options": null,
    "answer": {
      "osteocyt": "dojrzała komórka kostna",
      "osteoblast": "wytwarzanie substancji międzykomórkowej kości",
      "osteoklast": "rozpuszczanie tkanki kostnej"
    },
    "left": [
      "osteocyt",
      "osteoblast",
      "osteoklast"
    ],
    "right": [
      "rozpuszczanie tkanki kostnej",
      "dojrzała komórka kostna",
      "wytwarzanie substancji międzykomórkowej kości"
    ],
    "explanation": "Osteocyty są komórkami kostnymi, osteoblasty budują kość, a osteoklasty uczestniczą w jej resorpcji."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Odcinek szyjny kręgosłupa liczy __________ kręgów, a piersiowy __________ kręgów.",
    "options": null,
    "answer": [
      "7",
      "12"
    ],
    "altAnswers": [
      [
        "7",
        "siedem"
      ],
      [
        "12",
        "dwanaście"
      ]
    ],
    "explanation": "Kręgosłup człowieka ma 7 kręgów szyjnych i 12 piersiowych."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu jedną kość z kurczaka poddano działaniu wysokiej temperatury, a drugą pozostawiono bez zmian. Pierwsza stała się krucha. Co najlepiej wyjaśnia wynik?",
    "options": [
      "Przybyło chrząstki w kości",
      "Powstało więcej komórek kostnych",
      "Wzrosła ilość osocza w kości",
      "Sole mineralne przekształciły się w tłuszcz",
      "Białka kości utraciły swoje właściwości",
      "Tkanka nerwowa uległa rozrostowi"
    ],
    "answer": 4,
    "explanation": "Doświadczenie z palnikiem pokazało, że białka odpowiadają za elastyczność i giętkość kości; po ogrzaniu kość stała się krucha.",
    "image": "r04_kosc_dluga.jpg"
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj lokalizacje do rodzaju chrząstki.",
    "options": null,
    "answer": {
      "chrząstka szklista": [
        "przegroda nosa",
        "tchawica"
      ],
      "chrząstka sprężysta": [
        "małżowina uszna",
        "nagłośnia"
      ],
      "chrząstka włóknista": [
        "krążki międzykręgowe",
        "spojenie łonowe"
      ]
    },
    "items": [
      "nagłośnia",
      "przegroda nosa",
      "spojenie łonowe",
      "małżowina uszna",
      "tchawica",
      "krążki międzykręgowe"
    ],
    "categories": [
      "chrząstka szklista",
      "chrząstka sprężysta",
      "chrząstka włóknista"
    ],
    "explanation": "Tkanka chrzęstna występuje w odmianie szklistej, sprężystej i włóknistej, różniących się budową oraz lokalizacją."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj szczegółową cechę komórki mięśniowej do rodzaju tkanki.",
    "options": null,
    "answer": {
      "szkieletowa poprzecznie prążkowana": "wiele jąder na obrzeżach",
      "sercowa poprzecznie prążkowana": "jedno lub dwa jądra centralnie",
      "gładka": "jedno jądro centralnie i brak prążkowania"
    },
    "left": [
      "szkieletowa poprzecznie prążkowana",
      "sercowa poprzecznie prążkowana",
      "gładka"
    ],
    "right": [
      "jedno jądro centralnie i brak prążkowania",
      "wiele jąder na obrzeżach",
      "jedno lub dwa jądra centralnie"
    ],
    "explanation": "Trzy rodzaje tkanki mięśniowej różnią się liczbą i położeniem jąder komórkowych oraz obecnością prążkowania.",
    "image": "r04_typy_miesni.jpg"
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy doświadczenia z kością sprawdzającego rolę soli mineralnych.",
    "options": null,
    "answer": [
      "Przygotuj dwie podobne kości kurczaka",
      "Umieść jedną kość w occie i drugą w wodzie",
      "Pozostaw kości w cieczach do obserwacji zmian",
      "Porównaj twardość i giętkość obu kości"
    ],
    "items": [
      "Porównaj twardość i giętkość obu kości",
      "Umieść jedną kość w occie i drugą w wodzie",
      "Przygotuj dwie podobne kości kurczaka",
      "Pozostaw kości w cieczach do obserwacji zmian"
    ],
    "explanation": "Próba badawcza z octem i kontrolna z wodą pokazują, że usunięcie soli mineralnych sprawia, iż kość staje się miękka i giętka."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która witamina uczestniczy w syntezie kwasów nukleinowych, a jej niedobór zwiększa ryzyko wad rozwojowych płodu?",
    "options": [
      "witamina A",
      "witamina D",
      "witamina E",
      "witamina K",
      "witamina B12",
      "witamina B9 (kwas foliowy)"
    ],
    "answer": 5,
    "explanation": "Kwas foliowy (witamina B9) uczestniczy w syntezie kwasów nukleinowych i jest ważny dla prawidłowego rozwoju płodu."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W 1 mm³ krwi liczba leukocytów wynosi około __________ tysięcy, a płytek krwi około __________ tysięcy.",
    "options": null,
    "answer": [
      "4–10",
      "200–400"
    ],
    "altAnswers": [
      [
        "4–10",
        "4-10",
        "4 do 10"
      ],
      [
        "200–400",
        "200-400",
        "200 do 400"
      ]
    ],
    "explanation": "W 1 mm³ krwi zwykle znajduje się około 4–10 tys. leukocytów i 200–400 tys. płytek krwi.",
    "image": "r04_krwinki.jpg"
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które substancje są magazynowane w wątrobie?",
    "options": [
      "glikogen",
      "żelazo",
      "pepsyna",
      "witamina A",
      "witamina D",
      "amylaza ślinowa"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Wątroba magazynuje m.in. glikogen, żelazo oraz witaminy A i D."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Do dwóch identycznych naczyń z wodą wapienną skierowano różne próbki powietrza. W naczyniu z powietrzem wydychanym zmętnienie pojawiło się szybciej. Który wniosek jest zgodny z doświadczeniem?",
    "options": [
      "Powietrze wdychane nie zawiera azotu",
      "Powietrze wydychane zawiera więcej dwutlenku węgla",
      "Powietrze wydychane zawiera więcej tlenu",
      "Woda wapienna wykrywa glukozę",
      "Płuca produkują wodę wapienną",
      "Powietrze atmosferyczne nie zawiera tlenu"
    ],
    "answer": 1,
    "explanation": "W doświadczeniu próbka z powietrzem wydychanym powoduje szybsze mętnienie, ponieważ jest w nim więcej CO₂."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Każde płuco człowieka zawiera około 300 milionów pęcherzyków płucnych.",
    "options": null,
    "answer": true,
    "explanation": "W jednym płucu człowieka znajduje się około 300 milionów pęcherzyków płucnych.",
    "image": "r04_pecherzyki_plucne.jpg"
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się połączenie tętniczo-tętnicze występujące w nerce?",
    "options": null,
    "answer": "sieć dziwna",
    "altAnswers": [
      "sieć dziwna",
      "siecią dziwną"
    ],
    "explanation": "Połączenie tętniczo-tętnicze w nerce to sieć dziwna; układ wrotny wątroby łączy naczynia żylne."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż składnik, który nie uczestniczy bezpośrednio w krzepnięciu krwi: witamina K, fibrynogen, hemoglobina, płytki krwi.",
    "options": null,
    "answer": "hemoglobina",
    "explanation": "Witamina K, fibrynogen i płytki uczestniczą w krzepnięciu; hemoglobina jest barwnikiem erytrocytów transportującym tlen."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy erytrocytów do czterech grup krwi w układzie ABO.",
    "options": null,
    "answer": {
      "grupa A": [
        "antygen A na erytrocytach",
        "przeciwciała anty-B w osoczu"
      ],
      "grupa B": [
        "antygen B na erytrocytach",
        "przeciwciała anty-A w osoczu"
      ],
      "grupa AB": [
        "antygeny A i B na erytrocytach",
        "brak przeciwciał anty-A i anty-B w osoczu"
      ],
      "grupa O": [
        "brak antygenów A i B na erytrocytach",
        "przeciwciała anty-A i anty-B w osoczu"
      ]
    },
    "items": [
      "przeciwciała anty-A w osoczu",
      "antygen A na erytrocytach",
      "brak antygenów A i B na erytrocytach",
      "brak przeciwciał anty-A i anty-B w osoczu",
      "antygeny A i B na erytrocytach",
      "przeciwciała anty-B w osoczu",
      "antygen B na erytrocytach",
      "przeciwciała anty-A i anty-B w osoczu"
    ],
    "categories": [
      "grupa A",
      "grupa B",
      "grupa AB",
      "grupa O"
    ],
    "explanation": "O podziale ABO decydują antygeny na erytrocytach i odpowiednie przeciwciała osocza."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj zjawisko do miejsca lub struktury, w której występuje.",
    "options": null,
    "answer": {
      "tworzenie komórek krwi": "czerwony szpik kostny",
      "dyfuzja tlenu do krwi": "ściana pęcherzyka płucnego",
      "wchłanianie substancji odżywczych": "kosmki jelitowe",
      "powstawanie impulsów kierujących rytmem serca": "specjalne komórki serca"
    },
    "left": [
      "tworzenie komórek krwi",
      "dyfuzja tlenu do krwi",
      "wchłanianie substancji odżywczych",
      "powstawanie impulsów kierujących rytmem serca"
    ],
    "right": [
      "kosmki jelitowe",
      "specjalne komórki serca",
      "czerwony szpik kostny",
      "ściana pęcherzyka płucnego"
    ],
    "explanation": "Trzeba powiązać wiadomości z różnych fragmentów: szpik, jelito, pęcherzyki i komórki kierujące pracą serca."
  }
];

const KID_PROMPTS = {
  "R04_TKAN_01": "Który zapis pokazuje części ciała od najmniejszej do największej?",
  "R04_TKAN_09": "Jak nazywa się długa wypustka komórki nerwowej?",
  "R04_RUCH_04": "Co otacza kość i pomaga jej się goić?",
  "R04_RUCH_07": "Który mięsień zgina rękę w łokciu?",
  "R04_DIET_06": "Co w jedzeniu pomaga jelitom przesuwać pokarm?",
  "R04_TRAW_01": "Ułóż części przewodu pokarmowego w kolejności drogi pokarmu.",
  "R04_TRAW_06": "Jak nazywają się małe wypustki w jelicie pomagające wchłaniać pokarm?",
  "R04_ODDE_08": "Jaki gaz sprawia, że woda wapienna robi się mętna?",
  "R04_KRWI_06": "Jaka błona otacza serce i je chroni?",
  "R04_KRWI_08": "Jak nazywa się naczynie, którym krew płynie od serca?"
};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Organizm człowieka – część 1",
  "icon": "🧍",
  "sectionOrder": [
    "Tkanki i organizacja ciała",
    "Układ ruchu",
    "Składniki pokarmowe i dieta",
    "Układ pokarmowy i trawienie",
    "Układ oddechowy",
    "Układ krwionośny"
  ],
  "sectionIcons": {
    "Tkanki i organizacja ciała": "🧬",
    "Układ ruchu": "🦴",
    "Składniki pokarmowe i dieta": "🥗",
    "Układ pokarmowy i trawienie": "🍽️",
    "Układ oddechowy": "🫁",
    "Układ krwionośny": "🫀"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
