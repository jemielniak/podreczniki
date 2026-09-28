// Skróty sekcji (do identyfikatorów ćwiczeń):
//   UKS  = Ukształtowanie terenu
//   DZIE = Dzieje obszaru dzisiejszej Polski
//   GOR  = Powstawanie i cechy gór
//   LOD  = Wpływ lądolodu na rzeźbę terenu
//   SUR  = Surowce mineralne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R02_UKS_01",
    section: "Ukształtowanie terenu",
    type: "single_choice",
    prompt: "Ile pasów krajobrazowych wyróżnia się w Polsce?",
    options: ["Cztery", "Pięć", "Sześć", "Siedem", "Osiem", "Dziewięć"],
    answer: 2,
    explanation: "W Polsce wyróżnia się sześć pasów krajobrazowych ułożonych równoleżnikowo.",
    image: "r02_pasy_krajobrazowe.jpg"
  },
  {
    id: "R02_UKS_02",
    section: "Ukształtowanie terenu",
    type: "sequence",
    prompt: "Ułóż pasy krajobrazowe Polski od północy ku południu.",
    options: null,
    items: ["pas wyżyn", "pas pobrzeży", "pas gór", "pas nizin", "pas kotlin", "pas pojezierzy"],
    answer: ["pas pobrzeży", "pas pojezierzy", "pas nizin", "pas wyżyn", "pas kotlin", "pas gór"],
    explanation: "Od Bałtyku ku południu występują kolejno pobrzeża, pojezierza, niziny, wyżyny, kotliny i góry.",
    image: "r02_pasy_krajobrazowe.jpg"
  },
  {
    id: "R02_UKS_03",
    section: "Ukształtowanie terenu",
    type: "true_false",
    prompt: "Większa część powierzchni Polski leży nie wyżej niż 300 m n.p.m.",
    options: null,
    answer: true,
    explanation: "W Polsce przeważają tereny położone nie wyżej niż 300 m n.p.m., dlatego kraj ma charakter nizinny."
  },
  {
    id: "R02_UKS_04",
    section: "Ukształtowanie terenu",
    type: "fill_in",
    prompt: "Najniżej położony punkt Polski znajduje się w __________ na Żuławach Wiślanych i leży 2,2 m poniżej poziomu morza.",
    options: null,
    answer: ["Marzęcinie"],
    altAnswers: [["Marzęcinie", "Marzęcino", "Marzecinie", "Marzecino"]],
    explanation: "Najniższy punkt kraju leży w Marzęcinie na Żuławach Wiślanych i ma wysokość 2,2 m p.p.m.",
    image: "r02_marzecino_zulawy.jpg"
  },
  {
    id: "R02_UKS_05",
    section: "Ukształtowanie terenu",
    type: "match",
    prompt: "Połącz pas krajobrazowy z jego cechą.",
    options: null,
    left: ["pobrzeża", "pojezierza", "kotliny", "góry"],
    right: ["styk lądu z Bałtykiem", "największa liczba jezior", "położenie między wyżynami a górami", "Karpaty i Sudety"],
    answer: {
      "pobrzeża": "styk lądu z Bałtykiem",
      "pojezierza": "największa liczba jezior",
      "kotliny": "położenie między wyżynami a górami",
      "góry": "Karpaty i Sudety"
    },
    explanation: "Każdy z pasów ma charakterystyczne położenie lub cechę krajobrazu."
  },
  {
    id: "R02_UKS_06",
    section: "Ukształtowanie terenu",
    type: "single_choice",
    prompt: "Jaką informację przedstawia mapa hipsometryczna za pomocą kolorów?",
    options: ["Gęstość zaludnienia", "Wysokość nad poziomem morza", "Roczne opady", "Rodzaje gleb", "Temperaturę powietrza", "Granice województw"],
    answer: 1,
    explanation: "Mapa hipsometryczna pokazuje zróżnicowanie wysokości bezwzględnej, przypisując zakresom wysokości odpowiednie barwy.",
    image: "r02_mapa_hipsometryczna_polski.jpg"
  },
  {
    id: "R02_UKS_07",
    section: "Ukształtowanie terenu",
    type: "multi_select",
    prompt: "Zaznacz pasy krajobrazowe, które również zalicza się do nizin.",
    options: ["pobrzeża", "pojezierza", "wyżyny", "kotliny", "góry"],
    answer: [0, 1],
    explanation: "Pobrzeża i pojezierza są zaliczane do nizin, podobnie jak właściwy pas nizin."
  },
  {
    id: "R02_UKS_08",
    section: "Ukształtowanie terenu",
    type: "riddle",
    prompt: "Obszar leżący poniżej poziomu morza to...",
    options: null,
    answer: "depresja",
    altAnswers: ["depresja", "obszar depresyjny"],
    explanation: "Depresją nazywa się obszar położony poniżej poziomu morza."
  },
  {
    id: "R02_UKS_09",
    section: "Ukształtowanie terenu",
    type: "scenario",
    prompt: "Turysta stanął na południowo-zachodnim wierzchołku szczytu położonego w Tatrach na granicy ze Słowacją. Znajduje się na wysokości 2499 m n.p.m. Gdzie jest?",
    options: ["Na Śnieżce", "Na Łysicy", "Na Rysach", "Na Ostrzycy"],
    answer: 2,
    explanation: "Najwyższym punktem Polski jest południowo-zachodni wierzchołek Rysów o wysokości 2499 m n.p.m.",
    image: "r02_rysy_tatry.jpg"
  },
  {
    id: "R02_UKS_10",
    section: "Ukształtowanie terenu",
    type: "odd_one_out",
    prompt: "Wskaż pas niepasujący do pozostałych pod względem położenia na południu Polski: wyżyny, kotliny, góry, pobrzeża.",
    options: null,
    answer: "pobrzeża",
    explanation: "Wyżyny, kotliny i góry występują w południowej części kraju, natomiast pobrzeża leżą nad Bałtykiem."
  },
  {
    id: "R02_UKS_11",
    section: "Ukształtowanie terenu",
    type: "single_choice",
    prompt: "Jakim kolorem na mapach hipsometrycznych Polski najczęściej oznacza się wyżyny?",
    options: ["Żółtym", "Niebieskim", "Fioletowym", "Czarnym", "Białym", "Szarym"],
    answer: 0,
    explanation: "Wyżyny, zwykle położone na wysokości 300-500 m n.p.m., najczęściej oznacza się kolorem żółtym.",
    image: "r02_mapa_hipsometryczna_polski.jpg"
  },

  {
    id: "R02_DZIE_01",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "single_choice",
    prompt: "Ile wynosi w przybliżeniu wiek Ziemi?",
    options: ["4,5 mln lat", "45 mln lat", "450 mln lat", "4,5 mld lat", "13,8 mld lat", "45 mld lat"],
    answer: 3,
    explanation: "Dzieje Ziemi liczą około 4,5 miliarda lat."
  },
  {
    id: "R02_DZIE_02",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "sequence",
    prompt: "Ułóż jednostki dziejów Ziemi od najdłuższej do najkrótszej.",
    options: null,
    items: ["epoka", "eon", "okres", "era"],
    answer: ["eon", "era", "okres", "epoka"],
    explanation: "Dzieje Ziemi dzieli się wielostopniowo na eony, ery, okresy i epoki."
  },
  {
    id: "R02_DZIE_03",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "fill_in",
    prompt: "Najstarsze skały w Polsce znajdują się w Masywie __________ na Dolnym Śląsku.",
    options: null,
    answer: ["Strzelińskim"],
    altAnswers: [["Strzelińskim", "Strzelinskim", "Masywie Strzelińskim"]],
    explanation: "Skały Masywu Strzelińskiego mają około 568-600 mln lat i pochodzą z prekambru.",
    image: "r02_skaly_masywu_strzelinskiego.jpg"
  },
  {
    id: "R02_DZIE_04",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "true_false",
    prompt: "Węgiel kamienny powstał ze szczątków roślin lasu tropikalnego rosnącego na terenach dzisiejszej Polski w paleozoiku.",
    options: null,
    answer: true,
    explanation: "Ze szczątków paproci, skrzypów i widłaków paleozoicznego lasu tropikalnego powstał później węgiel kamienny.",
    image: "r02_paleozoiczny_las.jpg"
  },
  {
    id: "R02_DZIE_05",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "match",
    prompt: "Połącz przedział czasu z odpowiednią częścią dziejów Ziemi.",
    options: null,
    left: ["prekambr", "paleozoik", "mezozoik", "kenozoik"],
    right: ["4,6 mld-542 mln lat temu", "542-252 mln lat temu", "252-66 mln lat temu", "od 66 mln lat temu do dziś"],
    answer: {
      "prekambr": "4,6 mld-542 mln lat temu",
      "paleozoik": "542-252 mln lat temu",
      "mezozoik": "252-66 mln lat temu",
      "kenozoik": "od 66 mln lat temu do dziś"
    },
    explanation: "Prekambr obejmuje najdłuższy odcinek dziejów, po nim następują paleozoik, mezozoik i trwający obecnie kenozoik."
  },
  {
    id: "R02_DZIE_06",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "multi_select",
    prompt: "Zaznacz wydarzenia charakterystyczne dla mezozoiku.",
    options: ["Ciepły klimat", "Życie dinozaurów", "Początek orogenezy alpejskiej", "Pojawienie się człowieka współczesnego", "Wielokrotne zlodowacenia czwartorzędowe"],
    answer: [0, 1, 2],
    explanation: "W mezozoiku panował ciepły klimat, żyły dinozaury i rozpoczęła się trwająca do dziś orogeneza alpejska.",
    image: "r02_morze_mezozoiczne.jpg"
  },
  {
    id: "R02_DZIE_07",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "riddle",
    prompt: "Proces powstawania gór to...",
    options: null,
    answer: "orogeneza",
    altAnswers: ["orogeneza", "ruchy górotwórcze", "proces górotwórczy"],
    explanation: "Orogenezą nazywa się proces powstawania gór."
  },
  {
    id: "R02_DZIE_08",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "scenario",
    prompt: "Geolog bada warstwy utworzone w suchym klimacie z silnie parujących wód morskich, gdy obszar Polski znajdował się przy zwrotniku Raka. Jakiego surowca powinien szukać?",
    options: ["Węgla brunatnego", "Soli kamiennej", "Ropy naftowej", "Gliny"],
    answer: 1,
    explanation: "W suchym klimacie paleozoiku z wysychających wód morskich odłożyła się sól kamienna.",
    image: "r02_paleozoiczny_las.jpg"
  },
  {
    id: "R02_DZIE_09",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do pozostałych jako skutek orogenezy alpejskiej: Karpaty, Alpy, Himalaje, Góry Kaledońskie.",
    options: null,
    answer: "Góry Kaledońskie",
    explanation: "Karpaty, Alpy i Himalaje powstały podczas orogenezy alpejskiej, a Góry Kaledońskie podczas kaledońskiej."
  },
  {
    id: "R02_DZIE_10",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "single_choice",
    prompt: "Około kiedy pojawił się człowiek współczesny?",
    options: ["Około 300 tys. lat temu", "Około 3 mln lat temu", "Około 30 mln lat temu", "Około 66 mln lat temu", "Około 252 mln lat temu", "Około 542 mln lat temu"],
    answer: 0,
    explanation: "Człowiek współczesny pojawił się około 300 tysięcy lat temu."
  },
  {
    id: "R02_DZIE_11",
    section: "Dzieje obszaru dzisiejszej Polski",
    type: "multi_select",
    prompt: "Zaznacz skutki zmian klimatu w czwartorzędzie.",
    options: ["Powstawanie lądolodów w okresach chłodnych", "Topnienie lądolodów w okresach ciepłych", "Powstanie pierwszej atmosfery", "Narodziny oceanów w prekambrze", "Zanik wszystkich gór"],
    answer: [0, 1],
    explanation: "W czwartorzędzie chłodne okresy powodowały zlodowacenia, a ciepłe - topnienie lądolodów i lodowców górskich."
  },

  {
    id: "R02_GOR_01",
    section: "Powstawanie i cechy gór",
    type: "single_choice",
    prompt: "Który z polskich łańcuchów górskich obejmuje Tatry?",
    options: ["Sudety", "Karpaty", "Góry Świętokrzyskie", "Himalaje", "Alpy", "Wogezy"],
    answer: 1,
    explanation: "Tatry są najwyższym pasmem Karpat.",
    image: "r02_sudety_i_karpaty.jpg"
  },
  {
    id: "R02_GOR_02",
    section: "Powstawanie i cechy gór",
    type: "multi_select",
    prompt: "Zaznacz trzy łańcuchy górskie znajdujące się w Polsce.",
    options: ["Karpaty", "Sudety", "Góry Świętokrzyskie", "Alpy", "Pireneje", "Karakorum"],
    answer: [0, 1, 2],
    explanation: "W Polsce znajdują się Karpaty, Sudety oraz Góry Świętokrzyskie."
  },
  {
    id: "R02_GOR_03",
    section: "Powstawanie i cechy gór",
    type: "true_false",
    prompt: "Góry Świętokrzyskie leżą w pasie gór Polski.",
    options: null,
    answer: false,
    explanation: "Góry Świętokrzyskie są łańcuchem górskim położonym w pasie wyżyn."
  },
  {
    id: "R02_GOR_04",
    section: "Powstawanie i cechy gór",
    type: "match",
    prompt: "Połącz łańcuch górski z najwyższym wymienionym szczytem.",
    options: null,
    left: ["Karpaty", "Sudety", "Góry Świętokrzyskie"],
    right: ["Rysy", "Śnieżka", "Łysica"],
    answer: {
      "Karpaty": "Rysy",
      "Sudety": "Śnieżka",
      "Góry Świętokrzyskie": "Łysica"
    },
    explanation: "Rysy są najwyższym punktem polskiej części Tatr, Śnieżka Sudetów, a Łysica Gór Świętokrzyskich."
  },
  {
    id: "R02_GOR_05",
    section: "Powstawanie i cechy gór",
    type: "sort",
    prompt: "Przyporządkuj przykłady do typów gór.",
    options: null,
    items: ["Karpaty", "Himalaje", "Góry Bardzkie", "Wogezy", "Ostrzyca", "Etna"],
    categories: ["fałdowe", "zrębowe", "wulkaniczne"],
    answer: {
      "fałdowe": ["Karpaty", "Himalaje"],
      "zrębowe": ["Góry Bardzkie", "Wogezy"],
      "wulkaniczne": ["Ostrzyca", "Etna"]
    },
    explanation: "Karpaty i Himalaje są fałdowe, Góry Bardzkie i Wogezy zrębowe, a Ostrzyca i Etna wulkaniczne."
  },
  {
    id: "R02_GOR_06",
    section: "Powstawanie i cechy gór",
    type: "fill_in",
    prompt: "W górach zrębowych segmenty skalne są pocięte pęknięciami nazywanymi __________.",
    options: null,
    answer: ["uskokami"],
    altAnswers: [["uskokami", "uskoki", "uskok"]],
    explanation: "Wzdłuż uskoków jedne fragmenty litosfery przesuwają się w górę, a inne w dół."
  },
  {
    id: "R02_GOR_07",
    section: "Powstawanie i cechy gór",
    type: "scenario",
    prompt: "Wędrowiec widzi szeroką górską dolinę, której przekrój przypomina literę U. Co najbardziej prawdopodobnie ją przekształciło?",
    options: ["Lodowiec górski", "Wiatr pustynny", "Wulkan", "Fale morskie"],
    answer: 0,
    explanation: "Jęzor lodowcowy poszerzał dawną dolinę V-kształtną, nadając jej przekrój w kształcie litery U.",
    image: "r02_dolina_u_ksztaltna.jpg"
  },
  {
    id: "R02_GOR_08",
    section: "Powstawanie i cechy gór",
    type: "riddle",
    prompt: "Głębokie zagłębienie w miejscu dawnego pola firnowego, zwane też cyrkiem lub karem, to...",
    options: null,
    answer: "kocioł polodowcowy",
    altAnswers: ["kocioł polodowcowy", "cyrk polodowcowy", "kar polodowcowy", "cyrk", "kar"],
    explanation: "Po stopnieniu lodowca w miejscu pola firnowego pozostaje kocioł polodowcowy, w którym może powstać jezioro cyrkowe.",
    image: "r02_dolina_u_ksztaltna.jpg"
  },
  {
    id: "R02_GOR_09",
    section: "Powstawanie i cechy gór",
    type: "odd_one_out",
    prompt: "Wskaż przykład niepasujący do pozostałych jako góra wulkaniczna: Etna, Wezuwiusz, Fudżi, Karpaty.",
    options: null,
    answer: "Karpaty",
    explanation: "Etna, Wezuwiusz i Fudżi są górami wulkanicznymi, natomiast Karpaty są górami fałdowymi."
  },
  {
    id: "R02_GOR_10",
    section: "Powstawanie i cechy gór",
    type: "single_choice",
    prompt: "Podczas której orogenezy dzisiejsze Sudety wypiętrzyły się ponownie jako góry zrębowe?",
    options: ["Kaledońskiej", "Hercyńskiej", "Alpejskiej", "Paleozoicznej", "Czwartorzędowej", "Prekambryjskiej"],
    answer: 2,
    explanation: "W kenozoiku, podczas orogenezy alpejskiej, Sudety ponownie się wypiętrzyły, tym razem jako góry zrębowe.",
    image: "r02_sudety_i_karpaty.jpg"
  },
  {
    id: "R02_GOR_11",
    section: "Powstawanie i cechy gór",
    type: "sequence",
    prompt: "Ułóż orogenezy od najstarszej do najmłodszej.",
    options: null,
    items: ["orogeneza alpejska", "orogeneza kaledońska", "orogeneza hercyńska"],
    answer: ["orogeneza kaledońska", "orogeneza hercyńska", "orogeneza alpejska"],
    explanation: "Najpierw nastąpiła orogeneza kaledońska, potem hercyńska, a najmłodsza alpejska trwa do dziś."
  },

  {
    id: "R02_LOD_01",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "single_choice",
    prompt: "W której epoce czwartorzędu wielokrotnie dochodziło do zlodowaceń?",
    options: ["Holocenie", "Plejstocenie", "Paleogenie", "Neogenie", "Mezozoiku", "Prekambrze"],
    answer: 1,
    explanation: "Zlodowacenia występowały w plejstocenie, trwającym od około 2,5 mln do około 12 tys. lat temu."
  },
  {
    id: "R02_LOD_02",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "multi_select",
    prompt: "Zaznacz cztery główne grupy zlodowaceń wyróżnione na obszarze Polski.",
    options: ["podlaskie", "południowopolskie", "środkowopolskie", "północnopolskie", "karpackie", "bałtyckie"],
    answer: [0, 1, 2, 3],
    explanation: "Zlodowacenia Polski dzieli się na podlaskie, południowopolskie, środkowopolskie i północnopolskie."
  },
  {
    id: "R02_LOD_03",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "true_false",
    prompt: "Głazy narzutowe zostały przetransportowane na duże odległości przez lądolód.",
    options: null,
    answer: true,
    explanation: "Lądolód zabierał skały z podłoża, transportował je i porzucał podczas topnienia.",
    image: "r02_glazy_narzutowe.jpg"
  },
  {
    id: "R02_LOD_04",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "fill_in",
    prompt: "Ciepły okres między glacjałami, gdy zasięg lądolodu się zmniejsza, to __________.",
    options: null,
    answer: ["interglacjał"],
    altAnswers: [["interglacjał", "interglacjal", "okres międzylodowcowy"]],
    explanation: "Interglacjał to cieplejszy okres rozdzielający glacjały, podczas którego lądolód topnieje i sublimuje."
  },
  {
    id: "R02_LOD_05",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "match",
    prompt: "Połącz formę polodowcową z jej opisem.",
    options: null,
    left: ["morena czołowa", "sandr", "pradolina", "rynna polodowcowa"],
    right: ["wzgórze przy dawnym czole lądolodu", "płaski teren z piasku i żwiru przed moreną", "szerokie i długie obniżenie równoległe do moreny", "długie wąskie i głębokie zagłębienie"],
    answer: {
      "morena czołowa": "wzgórze przy dawnym czole lądolodu",
      "sandr": "płaski teren z piasku i żwiru przed moreną",
      "pradolina": "szerokie i długie obniżenie równoległe do moreny",
      "rynna polodowcowa": "długie wąskie i głębokie zagłębienie"
    },
    explanation: "Formy te powstały wskutek działalności lądolodu albo wód polodowcowych.",
    image: "r02_formy_polodowcowe.jpg"
  },
  {
    id: "R02_LOD_06",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "sort",
    prompt: "Przyporządkuj cechy do typów jezior polodowcowych.",
    options: null,
    items: ["wąskie i wydłużone", "dużo głębsze od morenowych", "duże i płytkie", "liczne zatoki i wyspy", "niewielkie i owalne", "płytkie"],
    categories: ["rynnowe", "morenowe", "oczka polodowcowe"],
    answer: {
      "rynnowe": ["wąskie i wydłużone", "dużo głębsze od morenowych"],
      "morenowe": ["duże i płytkie", "liczne zatoki i wyspy"],
      "oczka polodowcowe": ["niewielkie i owalne", "płytkie"]
    },
    explanation: "Jeziora rynnowe są długie i głębokie, morenowe duże i urozmaicone, a oczka polodowcowe niewielkie i płytkie.",
    image: "r02_jeziora_polodowcowe.jpg"
  },
  {
    id: "R02_LOD_07",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "riddle",
    prompt: "Długi pagórek z piasku i żwiru naniesionych przez wodę płynącą w tunelu pod lądolodem to...",
    options: null,
    answer: "oz",
    altAnswers: ["oz", "ozy"],
    explanation: "Oz jest fluwioglacjalną formą akumulacyjną zbudowaną z piasku i żwiru."
  },
  {
    id: "R02_LOD_08",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "scenario",
    prompt: "Badacz ogląda krajobraz z licznymi dobrze zachowanymi wzgórzami polodowcowymi i jeziorami. Jaki typ rzeźby rozpoznaje?",
    options: ["Młodoglacjalną", "Staroglacjalną", "Wulkaniczną", "Krasową"],
    answer: 0,
    explanation: "Rzeźba młodoglacjalna zachowała wyraźne formy z ostatniego zlodowacenia i występuje głównie w pasie pojezierzy.",
    image: "r02_formy_polodowcowe.jpg"
  },
  {
    id: "R02_LOD_09",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do osadów transportowanych przez lądolód: piasek, żwir, glina, bazaltowa lawa.",
    options: null,
    answer: "bazaltowa lawa",
    explanation: "Lądolód transportował m.in. piaski, żwiry, gliny, iły, pyły i głazy, a lawa jest produktem działalności wulkanicznej."
  },
  {
    id: "R02_LOD_10",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "single_choice",
    prompt: "Które jezioro jest najgłębsze w Polsce?",
    options: ["Śniardwy", "Jeziorak", "Hańcza", "Mamry", "Łebsko", "Gopło"],
    answer: 2,
    explanation: "Hańcza jest jeziorem rynnowym o maksymalnej głębokości 108,5 m.",
    image: "r02_jeziora_polodowcowe.jpg"
  },
  {
    id: "R02_LOD_11",
    section: "Wpływ lądolodu na rzeźbę terenu",
    type: "multi_select",
    prompt: "Zaznacz zmiany typowe dla staroglacjalnej rzeźby terenu.",
    options: ["Spłaszczenie wzniesień polodowcowych", "Zamulanie i zarastanie jezior", "Powstawanie świeżych moren czołowych", "Zachowanie licznych głębokich rynien bez zmian", "Zanik polodowcowego charakteru krajobrazu"],
    answer: [0, 1, 4],
    explanation: "W rzeźbie staroglacjalnej dawne formy ulegają deformacji, wzniesienia się spłaszczają, jeziora zarastają, a polodowcowy charakter zanika."
  },

  {
    id: "R02_SUR_01",
    section: "Surowce mineralne",
    type: "single_choice",
    prompt: "Jak nazywa się pozyskiwanie surowców mineralnych?",
    options: ["Eksploatacja", "Sublimacja", "Orogeneza", "Akumulacja", "Erozja", "Zlodowacenie"],
    answer: 0,
    explanation: "Pozyskiwanie surowców mineralnych ze złóż nazywa się eksploatacją.",
    image: "r02_kopalnie_w_polsce.jpg"
  },
  {
    id: "R02_SUR_02",
    section: "Surowce mineralne",
    type: "multi_select",
    prompt: "Zaznacz cztery grupy surowców mineralnych.",
    options: ["energetyczne", "metaliczne", "chemiczne", "skalne", "organiczne", "atmosferyczne"],
    answer: [0, 1, 2, 3],
    explanation: "Surowce mineralne dzieli się na energetyczne, metaliczne, chemiczne i skalne."
  },
  {
    id: "R02_SUR_03",
    section: "Surowce mineralne",
    type: "true_false",
    prompt: "Kopalnia odkrywkowa dociera do złoża przez usuwanie kolejnych warstw podłoża.",
    options: null,
    answer: true,
    explanation: "Eksploatacja odkrywkowa odbywa się na powierzchni i tworzy zagłębienie nazywane wyrobiskiem."
  },
  {
    id: "R02_SUR_04",
    section: "Surowce mineralne",
    type: "fill_in",
    prompt: "Nagromadzenie w jednym miejscu dużej ilości konkretnego surowca to __________.",
    options: null,
    answer: ["złoże"],
    altAnswers: [["złoże", "zloze"]],
    explanation: "Złożem nazywa się nagromadzenie dużej ilości określonego surowca."
  },
  {
    id: "R02_SUR_05",
    section: "Surowce mineralne",
    type: "match",
    prompt: "Połącz surowiec z grupą, do której należy.",
    options: null,
    left: ["węgiel brunatny", "miedź", "sól kamienna", "granit"],
    right: ["energetyczne", "metaliczne", "chemiczne", "skalne"],
    answer: {
      "węgiel brunatny": "energetyczne",
      "miedź": "metaliczne",
      "sól kamienna": "chemiczne",
      "granit": "skalne"
    },
    explanation: "Węgiel jest surowcem energetycznym, miedź metalicznym, sól chemicznym, a granit skalnym.",
    image: "r02_surowce_mineralne_polski.jpg"
  },
  {
    id: "R02_SUR_06",
    section: "Surowce mineralne",
    type: "sort",
    prompt: "Przyporządkuj surowce do sposobu ich wydobycia w Polsce.",
    options: null,
    items: ["węgiel kamienny", "ropa naftowa", "sól kamienna", "węgiel brunatny", "wapienie", "granit"],
    categories: ["głębinowo", "odkrywkowo"],
    answer: {
      "głębinowo": ["węgiel kamienny", "ropa naftowa", "sól kamienna"],
      "odkrywkowo": ["węgiel brunatny", "wapienie", "granit"]
    },
    explanation: "Wymienione surowce energetyczne i chemiczne wydobywa się głębinowo, natomiast węgiel brunatny oraz skały budowlane odkrywkowo."
  },
  {
    id: "R02_SUR_07",
    section: "Surowce mineralne",
    type: "riddle",
    prompt: "Teren z dużymi złożami surowca, na którym prowadzi się intensywną eksploatację, to...",
    options: null,
    answer: "zagłębie",
    altAnswers: ["zagłębie", "zaglebie", "zagłębie surowcowe"],
    explanation: "Zagłębiem nazywa się obszar dużych złóż danego surowca i ich intensywnej eksploatacji."
  },
  {
    id: "R02_SUR_08",
    section: "Surowce mineralne",
    type: "scenario",
    prompt: "Pracownik zjeżdża szybem do podziemnych korytarzy, aby dotrzeć do złoża. Jaki to typ kopalni?",
    options: ["Głębinową", "Odkrywkową", "Piaskownię", "Kamieniołom"],
    answer: 0,
    explanation: "W kopalni głębinowej do złoża dociera się szybami lub korytarzami drążonymi pod ziemią.",
    image: "r02_kopalnie_w_polsce.jpg"
  },
  {
    id: "R02_SUR_09",
    section: "Surowce mineralne",
    type: "odd_one_out",
    prompt: "Wskaż surowiec niepasujący do pozostałych jako energetyczny: węgiel kamienny, ropa naftowa, gaz ziemny, sól kamienna.",
    options: null,
    answer: "sól kamienna",
    explanation: "Węgiel kamienny, ropa naftowa i gaz ziemny są surowcami energetycznymi, a sól kamienna chemicznym."
  },
  {
    id: "R02_SUR_10",
    section: "Surowce mineralne",
    type: "single_choice",
    prompt: "W którym zagłębiu wydobywa się najwięcej węgla brunatnego w Polsce?",
    options: ["Bełchatowskim", "Konińskim", "Turoszowskim", "Lubelskim", "Górnośląskim", "Tarnobrzeskim"],
    answer: 0,
    explanation: "Najwięcej węgla brunatnego wydobywa się w Zagłębiu Bełchatowskim."
  },
  {
    id: "R02_SUR_11",
    section: "Surowce mineralne",
    type: "multi_select",
    prompt: "Zaznacz obszary występowania niewielkich złóż ropy naftowej i gazu ziemnego w Polsce.",
    options: ["Wielkopolska", "Pomorze Zachodnie", "Podkarpacie", "polska część Bałtyku", "Wyżyna Krakowsko-Częstochowska", "Żuławy Wiślane"],
    answer: [0, 1, 2, 3],
    explanation: "Niewielkie złoża ropy i gazu występują w Wielkopolsce, na Pomorzu Zachodnim, Podkarpaciu i pod polską częścią Bałtyku.",
    image: "r02_surowce_mineralne_polski.jpg"
  },

  {
    id: "R02_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Która wartość jest poprawnym zapisem wysokości najniższego punktu Polski?",
    options: ["2,2 m n.p.m.", "2,2 m p.p.m.", "22 m p.p.m.", "-22 m n.p.m.", "2499 m p.p.m.", "300 m p.p.m."],
    answer: 1,
    explanation: "Najniższy punkt w Marzęcinie leży 2,2 m poniżej poziomu morza, czyli 2,2 m p.p.m.",
    image: "r02_mapa_hipsometryczna_polski.jpg"
  },
  {
    id: "R02_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne pary szczyt - wysokość.",
    options: ["Rysy - 2499 m n.p.m.", "Śnieżka - 1603 m n.p.m.", "Łysica - 614 m n.p.m.", "Rysy - 1603 m n.p.m.", "Śnieżka - 614 m n.p.m."],
    answer: [0, 1, 2],
    explanation: "Rysy mają 2499 m n.p.m., Śnieżka 1603 m n.p.m., a Łysica 614 m n.p.m.",
    image: "r02_rysy_tatry.jpg"
  },
  {
    id: "R02_HARD_03",
    section: "Super trudne",
    type: "true_false",
    prompt: "Najstarsze skały w Masywie Strzelińskim są starsze niż początek paleozoiku.",
    options: null,
    answer: true,
    explanation: "Mają około 568-600 mln lat, a paleozoik rozpoczął się około 542 mln lat temu."
  },
  {
    id: "R02_HARD_04",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Wapienie na Wyżynie Krakowsko-Częstochowskiej powstały ze szczątków organizmów żyjących w ciepłych morzach ery __________.",
    options: null,
    answer: ["mezozoicznej"],
    altAnswers: [["mezozoicznej", "mezozoik", "ery mezozoicznej"]],
    explanation: "W mezozoiku morze wielokrotnie zalewało tereny dzisiejszej Polski, a ze szczątków organizmów powstawały wapienie.",
    image: "r02_morze_mezozoiczne.jpg"
  },
  {
    id: "R02_HARD_05",
    section: "Super trudne",
    type: "scenario",
    prompt: "Geolog bada polskie góry zbudowane częściowo ze starych skał. Ustala, że dawniej były fałdowe, zostały zrównane, a później ponownie wypiętrzyły się jako zrębowe. Jakie góry bada?",
    options: ["Karpaty", "Sudety", "Góry Świętokrzyskie", "Tatry"],
    answer: 1,
    explanation: "Dawne Sudety powstały w orogenezie hercyńskiej, zostały zrównane, a podczas alpejskiej wypiętrzyły się jako góry zrębowe.",
    image: "r02_sudety_i_karpaty.jpg"
  },
  {
    id: "R02_HARD_06",
    section: "Super trudne",
    type: "riddle",
    prompt: "Miejsce gromadzenia śniegu, który z czasem zmienia się w lód i zasila lodowiec górski, to...",
    options: null,
    answer: "pole firnowe",
    altAnswers: ["pole firnowe", "firnowe pole"],
    explanation: "W polu firnowym gromadzi się śnieg przekształcający się w lód lodowcowy.",
    image: "r02_dolina_u_ksztaltna.jpg"
  },
  {
    id: "R02_HARD_07",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy przemiany doliny górskiej pod wpływem lodowca.",
    options: null,
    items: ["powstanie doliny U-kształtnej", "gromadzenie śniegu w polu firnowym", "przesuwanie się jęzora lodowcowego", "istnienie doliny V-kształtnej"],
    answer: ["istnienie doliny V-kształtnej", "gromadzenie śniegu w polu firnowym", "przesuwanie się jęzora lodowcowego", "powstanie doliny U-kształtnej"],
    explanation: "Lodowiec powstały ze śniegu i lodu przesuwał się dawną doliną V-kształtną, poszerzając ją do kształtu U."
  },
  {
    id: "R02_HARD_08",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz formę z czynnikiem i rodzajem działalności, które ją utworzyły.",
    options: null,
    left: ["morena czołowa", "morena denna", "oz", "rynna polodowcowa"],
    right: ["lądolód - akumulacja przy czole", "lądolód - akumulacja pod lodem", "wody polodowcowe - akumulacja", "wody polodowcowe - erozja"],
    answer: {
      "morena czołowa": "lądolód - akumulacja przy czole",
      "morena denna": "lądolód - akumulacja pod lodem",
      "oz": "wody polodowcowe - akumulacja",
      "rynna polodowcowa": "wody polodowcowe - erozja"
    },
    explanation: "Moreny są glacjalnymi formami akumulacyjnymi, a oz i rynna powstały odpowiednio przez akumulację i erozję wód polodowcowych.",
    image: "r02_formy_polodowcowe.jpg"
  },
  {
    id: "R02_HARD_09",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które zestawienie jeziora i jego cechy jest poprawne?",
    options: ["Hańcza - największa powierzchnia", "Śniardwy - największa głębokość", "Jeziorak - największa długość", "Jeziorak - największa powierzchnia", "Hańcza - największa długość", "Śniardwy - najmniejsza głębokość"],
    answer: 2,
    explanation: "Jeziorak jest najdłuższym jeziorem w Polsce i ma ponad 27 km długości; Śniardwy są największe, a Hańcza najgłębsza.",
    image: "r02_jeziora_polodowcowe.jpg"
  },
  {
    id: "R02_HARD_10",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż element niepasujący do składu gliny: ił, pył, piasek, srebro.",
    options: null,
    answer: "srebro",
    explanation: "Glina jest mieszaniną m.in. iłów, pyłów, piasków i żwirów, ale nie srebra.",
    image: "r02_glazy_narzutowe.jpg"
  },
  {
    id: "R02_HARD_11",
    section: "Super trudne",
    type: "true_false",
    prompt: "Na terenach objętych ostatnim zlodowaceniem warstwa osadów polodowcowych często przekracza 100 m.",
    options: null,
    answer: true,
    explanation: "Na obszarach ostatniego zlodowacenia osady tworzą grubszą warstwę, często powyżej 100 m."
  },
  {
    id: "R02_HARD_12",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Najgłębszy szyb kopalni w Polsce ma 1490 m i znajduje się w kopalni węgla kamiennego __________ na Śląsku.",
    options: null,
    answer: ["Budryk"],
    altAnswers: [["Budryk", "kopalnia Budryk", "kopalni Budryk"]],
    explanation: "Najgłębszy polski szyb ma 1490 m i znajduje się w kopalni Budryk.",
    image: "r02_kopalnie_w_polsce.jpg"
  },
  {
    id: "R02_HARD_13",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz poprawne informacje o soli kamiennej w Polsce.",
    options: ["Wieliczka i Bochnia są dziś udostępnione turystom", "Eksploatację prowadzi się w Inowrocławiu", "Największa kopalnia soli znajduje się w Kłodawie", "Sól wydobywa się wyłącznie odkrywkowo", "Kłodawa leży w Sudetach"],
    answer: [0, 1, 2],
    explanation: "Dawne kopalnie w Wieliczce i Bochni są atrakcjami turystycznymi, a współczesne wydobycie prowadzi się m.in. w Inowrocławiu i Kłodawie.",
    image: "r02_surowce_mineralne_polski.jpg"
  },
  {
    id: "R02_HARD_14",
    section: "Super trudne",
    type: "riddle",
    prompt: "Okręg położony na zachód od Wrocławia, w którym wydobywa się rudy miedzi i srebra, to...",
    options: null,
    answer: "Legnicko-Głogowski Okręg Miedziowy",
    altAnswers: ["Legnicko-Głogowski Okręg Miedziowy", "Legnicko-Glogowski Okreg Miedziowy", "LGOM"],
    explanation: "Duże polskie złoża rud miedzi i srebra eksploatuje się w Legnicko-Głogowskim Okręgu Miedziowym.",
    image: "r02_surowce_mineralne_polski.jpg"
  },
  {
    id: "R02_HARD_15",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile rudy miedzi trzeba wydobyć, aby uzyskać 1 kg czystej miedzi?",
    options: ["Mniej niż 1 kg", "Około 5 kg", "Około 10 kg", "Ponad 50 kg", "Dokładnie 500 kg", "Ponad 5 ton"],
    answer: 3,
    explanation: "Czysty metal stanowi niewielką część rudy, dlatego uzyskanie 1 kg miedzi wymaga wydobycia ponad 50 kg rudy."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Środowisko przyrodnicze Polski",
  icon: "🌍",
  sectionOrder: [
    "Ukształtowanie terenu",
    "Dzieje obszaru dzisiejszej Polski",
    "Powstawanie i cechy gór",
    "Wpływ lądolodu na rzeźbę terenu",
    "Surowce mineralne"
  ],
  sectionIcons: {
    "Ukształtowanie terenu": "🗺️",
    "Dzieje obszaru dzisiejszej Polski": "🌋",
    "Powstawanie i cechy gór": "⛰️",
    "Wpływ lądolodu na rzeźbę terenu": "🧊",
    "Surowce mineralne": "⛏️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
