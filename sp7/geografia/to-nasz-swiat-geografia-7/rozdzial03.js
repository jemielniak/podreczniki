// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KLI  = Pogoda i klimat
//   BAL  = Morze Bałtyckie
//   RZE  = Rzeki i powodzie
//   GLE  = Gleby
//   LAS  = Lasy
//   OCH  = Ochrona środowiska
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R03_KLI_01",
    section: "Pogoda i klimat",
    type: "single_choice",
    prompt: "Czym jest pogoda?",
    options: ["Warunkami atmosferycznymi w danym miejscu i momencie", "Średnią temperaturą z jednego miesiąca", "Stałym układem pór roku", "Wieloletnim przebiegiem zjawisk atmosferycznych", "Wyłącznie stanem zachmurzenia", "Rodzajem strefy krajobrazowej"],
    answer: 0,
    explanation: "Pogoda opisuje warunki atmosferyczne panujące w konkretnym miejscu i momencie. Może zmienić się nawet w ciągu kilku minut lub godzin."
  },
  {
    id: "R03_KLI_02",
    section: "Pogoda i klimat",
    type: "true_false",
    prompt: "Do określenia klimatu wykorzystuje się dane z co najmniej 30 lat pomiarów i obserwacji.",
    options: null,
    answer: true,
    explanation: "Klimat określa się na podstawie wieloletnich danych. Przyjmuje się okres obejmujący co najmniej 30 lat."
  },
  {
    id: "R03_KLI_03",
    section: "Pogoda i klimat",
    type: "match",
    prompt: "Połącz pojęcie z jego znaczeniem.",
    options: null,
    left: ["meteorologia", "klimatologia", "synoptyka", "synoptyk"],
    right: ["nauka o klimacie", "osoba przygotowująca prognozy pogody", "nauka o pogodzie", "dział meteorologii zajmujący się przewidywaniem pogody"],
    answer: {
      "meteorologia": "nauka o pogodzie",
      "klimatologia": "nauka o klimacie",
      "synoptyka": "dział meteorologii zajmujący się przewidywaniem pogody",
      "synoptyk": "osoba przygotowująca prognozy pogody"
    },
    explanation: "Meteorologia bada pogodę, klimatologia bada klimat, a synoptyka jest działem meteorologii poświęconym prognozowaniu. Prognozy przygotowują synoptycy."
  },
  {
    id: "R03_KLI_04",
    section: "Pogoda i klimat",
    type: "multi_select",
    prompt: "Zaznacz czynniki kształtujące klimat Polski.",
    options: ["Szerokość geograficzna", "Odległość od Atlantyku i Bałtyku", "Ciepłe prądy morskie", "Wysokość nad poziomem morza", "Ruchy mas powietrza", "Liczba mieszkańców kraju"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Klimat Polski kształtują położenie, wpływ mórz i prądów morskich, wysokość i rzeźba terenu oraz napływające masy powietrza."
  },
  {
    id: "R03_KLI_05",
    section: "Pogoda i klimat",
    type: "sort",
    prompt: "Przyporządkuj opis do właściwej masy powietrza.",
    options: null,
    image: "r03_masy_powietrza_nad_polska.jpg",
    items: ["napływa z zachodu i przynosi zachmurzenie oraz opady", "nadciąga ze wschodu i zimą przynosi silne mrozy", "płynie z północy i wywołuje ochłodzenie", "płynie z południa i jest bardzo ciepłe"],
    categories: ["powietrze polarno-morskie", "powietrze polarno-kontynentalne", "powietrze arktyczne", "powietrze zwrotnikowe"],
    answer: {
      "powietrze polarno-morskie": ["napływa z zachodu i przynosi zachmurzenie oraz opady"],
      "powietrze polarno-kontynentalne": ["nadciąga ze wschodu i zimą przynosi silne mrozy"],
      "powietrze arktyczne": ["płynie z północy i wywołuje ochłodzenie"],
      "powietrze zwrotnikowe": ["płynie z południa i jest bardzo ciepłe"]
    },
    explanation: "Kierunek napływu masy powietrza oraz obszar jej powstania decydują o przynoszonej przez nią pogodzie."
  },
  {
    id: "R03_KLI_06",
    section: "Pogoda i klimat",
    type: "scenario",
    prompt: "Sadownik słyszy w prognozie o nocnym spadku temperatury poniżej zera w czasie kwitnienia drzew. Jakie zjawisko może zniszczyć kwiaty i zmniejszyć plony?",
    options: ["Wiosenny przymrozek", "Sztorm", "Bryza morska", "Cień opadowy", "Odwilż", "Eutrofizacja"],
    answer: 0,
    explanation: "Wiosenne przymrozki mogą uszkodzić kwitnące rośliny uprawne. To przykład silnego wpływu pogody na rolnictwo."
  },
  {
    id: "R03_KLI_07",
    section: "Pogoda i klimat",
    type: "fill_in",
    prompt: "W Polsce panuje klimat __________ __________ __________.",
    options: null,
    answer: ["umiarkowany", "ciepły", "przejściowy"],
    altAnswers: [["umiarkowany"], ["ciepły"], ["przejściowy"]],
    explanation: "Polska leży w strefie klimatów umiarkowanych, a jej klimat łączy cechy morskie i kontynentalne, dlatego jest umiarkowany ciepły przejściowy."
  },
  {
    id: "R03_KLI_08",
    section: "Pogoda i klimat",
    type: "sequence",
    prompt: "Ułóż termiczne pory roku od początku roku kalendarzowego.",
    options: null,
    items: ["lato", "przedwiośnie", "zima", "jesień", "wiosna", "przedzimie"],
    answer: ["zima", "przedwiośnie", "wiosna", "lato", "jesień", "przedzimie"],
    explanation: "W Polsce wyróżnia się sześć termicznych pór roku: zimę, przedwiośnie, wiosnę, lato, jesień i przedzimie."
  },
  {
    id: "R03_KLI_09",
    section: "Pogoda i klimat",
    type: "single_choice",
    prompt: "Jaka średnia dobowa temperatura powietrza umożliwia rozwój roślin i wyznacza okres wegetacyjny, jeśli wilgotność jest odpowiednia?",
    options: ["Co najmniej 5°C", "Dokładnie 0°C", "Co najmniej 15°C", "Poniżej -5°C", "Dokładnie 20°C", "Nie więcej niż 10°C"],
    answer: 0,
    explanation: "Okres wegetacyjny trwa wtedy, gdy średnia dobowa temperatura wynosi co najmniej 5°C i rośliny mają odpowiednią wilgotność."
  },
  {
    id: "R03_KLI_10",
    section: "Pogoda i klimat",
    type: "multi_select",
    prompt: "Zaznacz skutki ocieplania się klimatu odczuwane lub przewidywane w Polsce.",
    options: ["Częstsze i długotrwałe susze", "Więcej fal upałów", "Wzrost zagrożenia powodziowego", "Częstsze niebezpieczne zjawiska pogodowe", "Stały spadek poziomu Bałtyku", "Całkowity zanik opadów latem"],
    answer: [0, 1, 2, 3],
    explanation: "Ocieplenie klimatu zwiększa ryzyko susz, fal upałów, gwałtownych zjawisk i powodzi. Zagraża też ludziom, rolnictwu oraz wielu gatunkom.",
    image: "r03_susza_i_niski_stan_wisly.jpg"
  },

  {
    id: "R03_BAL_01",
    section: "Morze Bałtyckie",
    type: "single_choice",
    prompt: "W której części Europy leży Morze Bałtyckie?",
    options: ["W północnej Europie", "W południowej Europie", "W zachodniej Afryce", "W Azji Centralnej", "Na Półwyspie Iberyjskim", "Na Oceanie Indyjskim"],
    answer: 0,
    explanation: "Morze Bałtyckie leży w północnej Europie i przez cieśniny łączy się z Morzem Północnym."
  },
  {
    id: "R03_BAL_02",
    section: "Morze Bałtyckie",
    type: "multi_select",
    prompt: "Zaznacz państwa mające dostęp do Morza Bałtyckiego.",
    options: ["Polska", "Szwecja", "Estonia", "Litwa", "Czechy", "Norwegia"],
    answer: [0, 1, 2, 3],
    explanation: "Nad Bałtykiem leży dziewięć państw: Polska, Niemcy, Dania, Szwecja, Finlandia, Estonia, Łotwa, Litwa i Rosja. Czechy i Norwegia nie mają do niego dostępu."
  },
  {
    id: "R03_BAL_03",
    section: "Morze Bałtyckie",
    type: "true_false",
    prompt: "Bałtyk powstał po ustąpieniu ostatniego zlodowacenia około 12 tysięcy lat temu.",
    options: null,
    answer: true,
    explanation: "Bałtyk jest młodym morzem. Uformował się po ustąpieniu ostatniego zlodowacenia około 12 tysięcy lat temu."
  },
  {
    id: "R03_BAL_04",
    section: "Morze Bałtyckie",
    type: "match",
    prompt: "Połącz cechę Bałtyku z właściwą wartością.",
    options: null,
    left: ["powierzchnia", "średnia głębokość", "maksymalna głębokość", "średnie zasolenie"],
    right: ["459 m", "około 415 tys. km²", "7‰", "52,3 m"],
    answer: {
      "powierzchnia": "około 415 tys. km²",
      "średnia głębokość": "52,3 m",
      "maksymalna głębokość": "459 m",
      "średnie zasolenie": "7‰"
    },
    explanation: "Bałtyk ma około 415 tys. km² powierzchni, średnio 52,3 m głębokości, maksymalnie 459 m i średnie zasolenie 7‰."
  },
  {
    id: "R03_BAL_05",
    section: "Morze Bałtyckie",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych: Zatoka Botnicka, Zatoka Fińska, Zatoka Ryska, Gotlandia.",
    options: null,
    answer: "Gotlandia",
    explanation: "Gotlandia jest wyspą, a pozostałe elementy są zatokami Morza Bałtyckiego.",
    image: "r03_wybrzeze_baltyku.jpg"
  },
  {
    id: "R03_BAL_06",
    section: "Morze Bałtyckie",
    type: "multi_select",
    prompt: "Zaznacz przyczyny niskiego zasolenia Bałtyku.",
    options: ["Niewielka wymiana wód z Morzem Północnym", "Duży dopływ słodkiej wody z rzek", "Małe parowanie", "Częste opady", "Bardzo wysoka temperatura wody", "Brak rzek uchodzących do morza"],
    answer: [0, 1, 2, 3],
    explanation: "Bałtyk ma ograniczoną wymianę z bardziej słonym morzem, otrzymuje dużo wody rzecznej i opadowej, a w chłodnym klimacie parowanie jest niewielkie."
  },
  {
    id: "R03_BAL_07",
    section: "Morze Bałtyckie",
    type: "single_choice",
    prompt: "Który bałtycki ssak spokrewniony z delfinami jest zagrożony wyginięciem i objęty ścisłą ochroną?",
    options: ["Morświn zwyczajny", "Żubr europejski", "Bóbr europejski", "Świstak tatrzański", "Ryś euroazjatycki", "Niedźwiedź brunatny"],
    answer: 0,
    explanation: "Morświn zwyczajny jest bałtyckim krewnym delfinów. Jego populacja jest zagrożona wyginięciem.",
    image: "r03_zwierzeta_baltyku.jpg"
  },
  {
    id: "R03_BAL_08",
    section: "Morze Bałtyckie",
    type: "scenario",
    prompt: "Do morza spływa dużo nawozów rolniczych. Woda wzbogaca się w substancje odżywcze, gwałtownie rozwijają się glony, a przy dnie zaczyna brakować tlenu. Jak nazywa się ten proces?",
    options: ["Eutrofizacja", "Parowanie", "Abrazja", "Zlodowacenie", "Meandrowanie", "Wietrzenie"],
    answer: 0,
    explanation: "Eutrofizacja to nadmierny wzrost ilości substancji odżywczych w wodzie. Prowadzi do zakwitów glonów i niedoboru tlenu przy dnie.",
    image: "r03_eutrofizacja_baltyku.jpg"
  },
  {
    id: "R03_BAL_09",
    section: "Morze Bałtyckie",
    type: "fill_in",
    prompt: "Bałtyk jest morzem __________, a z Morzem Północnym łączy się przez wąskie __________ __________.",
    options: null,
    answer: ["wewnątrzkontynentalnym", "Cieśniny", "Duńskie"],
    altAnswers: [["wewnątrzkontynentalnym"], ["Cieśniny", "cieśniny"], ["Duńskie", "duńskie"]],
    explanation: "Bałtyk jest prawie ze wszystkich stron otoczony lądem, dlatego jest morzem wewnątrzkontynentalnym. Z Morzem Północnym łączą go Cieśniny Duńskie i Skagerrak."
  },

  {
    id: "R03_RZE_01",
    section: "Rzeki i powodzie",
    type: "match",
    prompt: "Połącz pojęcie związane z systemem rzecznym z definicją.",
    options: null,
    left: ["rzeka główna", "dopływ", "dorzecze", "dział wodny"],
    right: ["granica między dorzeczami", "rzeka wpadająca do morza oceanu lub jeziora", "teren z którego dopływy spływają do rzeki głównej", "rzeka wpadająca do innej rzeki"],
    answer: {
      "rzeka główna": "rzeka wpadająca do morza oceanu lub jeziora",
      "dopływ": "rzeka wpadająca do innej rzeki",
      "dorzecze": "teren z którego dopływy spływają do rzeki głównej",
      "dział wodny": "granica między dorzeczami"
    },
    explanation: "System rzeczny obejmuje rzekę główną i jej dopływy, a dorzecze jest obszarem ich zasilania. Sąsiednie dorzecza oddziela dział wodny."
  },
  {
    id: "R03_RZE_02",
    section: "Rzeki i powodzie",
    type: "single_choice",
    prompt: "Jakie dwa główne typy ujść rzek wyróżnia się na świecie?",
    options: ["Deltowe i lejkowate", "Skaliste i piaszczyste", "Górskie i nizinne", "Stałe i okresowe", "Słone i słodkie", "Naturalne i sztuczne"],
    answer: 0,
    explanation: "Ujścia rzek dzieli się przede wszystkim na deltowe, czyli delty, oraz lejkowate, czyli estuaria."
  },
  {
    id: "R03_RZE_03",
    section: "Rzeki i powodzie",
    type: "multi_select",
    prompt: "Zaznacz cechy ujścia deltowego.",
    options: ["Osady niesione przez rzekę tworzą nowy ląd", "Rzeka rozdziela się na odnogi", "Rzeka uchodzi do akwenu w kilku miejscach", "Woda morska poszerza ujście w kształt lejka", "Osady są całkowicie wymywane", "Ujście zawsze wysycha"],
    answer: [0, 1, 2],
    explanation: "Delta powstaje przez odkładanie osadów. Na utworzonym lądzie rzeka rozwidla się i uchodzi kilkoma odnogami.",
    image: "r03_delta_rzeki_z_lotu_ptaka.jpg"
  },
  {
    id: "R03_RZE_04",
    section: "Rzeki i powodzie",
    type: "true_false",
    prompt: "Zdecydowana większość polskich rzek należy do zlewiska Morza Bałtyckiego.",
    options: null,
    answer: true,
    explanation: "Większość rzek Polski odprowadza wodę do Bałtyku. Największą część kraju zajmują dorzecza Wisły i Odry."
  },
  {
    id: "R03_RZE_05",
    section: "Rzeki i powodzie",
    type: "fill_in",
    prompt: "Wisła ma __________ km długości, a jej źródła znajdują się na stokach __________ __________.",
    options: null,
    answer: ["1022", "Baraniej", "Góry"],
    altAnswers: [["1022", "1022 km"], ["Baraniej"], ["Góry", "Góry w Beskidzie Śląskim"]],
    explanation: "Wisła jest najdłuższą rzeką Polski i ma 1022 km. Jej źródła znajdują się na zachodnich stokach Baraniej Góry w Beskidzie Śląskim.",
    image: "r03_wisla_meandry_i_zulawy.jpg"
  },
  {
    id: "R03_RZE_06",
    section: "Rzeki i powodzie",
    type: "sequence",
    prompt: "Ułóż miasta w kolejności, w jakiej mija je Wisła od źródeł ku ujściu.",
    options: null,
    items: ["Toruń", "Gdańsk", "Kraków", "Warszawa"],
    answer: ["Kraków", "Warszawa", "Toruń", "Gdańsk"],
    explanation: "Wisła płynie z południa ku północy przez Kraków, Warszawę i Toruń, a następnie uchodzi w rejonie Gdańska."
  },
  {
    id: "R03_RZE_07",
    section: "Rzeki i powodzie",
    type: "single_choice",
    prompt: "Która rzeka jest główną śródlądową drogą wodną Polski?",
    options: ["Odra", "Wisła", "Narew", "Bug", "San", "Warta"],
    answer: 0,
    explanation: "Koryto Odry pogłębiano, prostowano i umacniano, dzięki czemu rzeka stała się głównym śródlądowym szlakiem transportowym Polski."
  },
  {
    id: "R03_RZE_08",
    section: "Rzeki i powodzie",
    type: "scenario",
    prompt: "Po długotrwałych opadach woda w rzece wystąpiła z koryta, zalała zabudowany teren i zniszczyła drogi oraz budynki. Jak należy nazwać to zdarzenie?",
    options: ["Powódź", "Zwykłe wezbranie", "Odpływ", "Susza", "Bryza", "Eutrofizacja"],
    answer: 0,
    explanation: "Powódź to powodujące zniszczenia zalanie przez wodę obszaru zagospodarowanego przez człowieka. Sam wzrost ilości wody w rzece jest wezbraniem.",
    image: "r03_powodz_i_retencja.jpg"
  },
  {
    id: "R03_RZE_09",
    section: "Rzeki i powodzie",
    type: "multi_select",
    prompt: "Dlaczego południowa i południowo-zachodnia Polska są szczególnie zagrożone powodziami?",
    options: ["W górach występują duże opady", "Skalne podłoże słabo przepuszcza wodę", "Po stromych stokach woda szybko spływa", "Obszar leży wyłącznie poniżej poziomu morza", "Nie występują tam rzeki", "Opady zdarzają się tylko zimą"],
    answer: [0, 1, 2],
    explanation: "Duże opady, słabo przepuszczalne skały i szybki spływ po nachylonych stokach powodują gwałtowne przybieranie wody w rzekach."
  },
  {
    id: "R03_RZE_10",
    section: "Rzeki i powodzie",
    type: "odd_one_out",
    prompt: "Co nie pasuje do pozostałych: wały przeciwpowodziowe, poldery, zbiorniki retencyjne, osuszanie mokradeł.",
    options: null,
    answer: "osuszanie mokradeł",
    explanation: "Wały, poldery i zbiorniki ograniczają zagrożenie powodziowe. Mokradła magazynują wodę, więc ich osuszanie zwiększa ryzyko powodzi."
  },

  {
    id: "R03_GLE_01",
    section: "Gleby",
    type: "single_choice",
    prompt: "Czym jest gleba?",
    options: ["Najbardziej wierzchnią warstwą skorupy ziemskiej", "Wyłącznie warstwą litej skały", "Podziemnym zbiornikiem wody", "Warstwą atmosfery", "Rodzajem osadu morskiego", "Dolną częścią płaszcza Ziemi"],
    answer: 0,
    explanation: "Gleba jest najbardziej wierzchnią warstwą skorupy ziemskiej. Zawiera między innymi szczątki organizmów, cząstki skał, minerały, wodę i powietrze."
  },
  {
    id: "R03_GLE_02",
    section: "Gleby",
    type: "multi_select",
    prompt: "Zaznacz czynniki glebotwórcze.",
    options: ["Skała macierzysta", "Klimat", "Woda", "Roślinność", "Działalność człowieka", "Fazy Księżyca"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Do czynników glebotwórczych należą skała macierzysta, klimat, woda, rzeźba terenu, organizmy oraz działalność człowieka."
  },
  {
    id: "R03_GLE_03",
    section: "Gleby",
    type: "match",
    prompt: "Połącz poziom glebowy z jego opisem.",
    options: null,
    image: "r03_naturalny_profil_glebowy.jpg",
    left: ["ściółka", "poziom próchniczny", "poziom wymywania", "skała macierzysta"],
    right: ["materiał na którym rozwija się gleba", "opadłe liście igły gałęzie i szczątki organizmów", "warstwa ze szczątkami organicznymi w różnym stopniu rozkładu", "warstwa z której woda usuwa składniki mineralne i odżywcze"],
    answer: {
      "ściółka": "opadłe liście igły gałęzie i szczątki organizmów",
      "poziom próchniczny": "warstwa ze szczątkami organicznymi w różnym stopniu rozkładu",
      "poziom wymywania": "warstwa z której woda usuwa składniki mineralne i odżywcze",
      "skała macierzysta": "materiał na którym rozwija się gleba"
    },
    explanation: "Profil glebowy tworzą warstwy różniące się składem i właściwościami. Próchnica zawiera rozkładającą się materię organiczną, a woda wymywa składniki z położonego niżej poziomu."
  },
  {
    id: "R03_GLE_04",
    section: "Gleby",
    type: "true_false",
    prompt: "Im grubszy jest poziom próchniczny, tym gleba jest zazwyczaj żyźniejsza.",
    options: null,
    answer: true,
    explanation: "Gruby poziom próchniczny zwiększa zdolność gleby do dostarczania roślinom składników pokarmowych, wody i powietrza."
  },
  {
    id: "R03_GLE_05",
    section: "Gleby",
    type: "sort",
    prompt: "Przyporządkuj typy gleb do ich ogólnej żyzności.",
    options: null,
    items: ["gleby bielicowe", "gleby górskie", "gleby brunatne", "rędziny", "czarnoziemy", "mady rzeczne"],
    categories: ["mało żyzne", "żyzne", "bardzo żyzne"],
    answer: {
      "mało żyzne": ["gleby bielicowe", "gleby górskie"],
      "żyzne": ["gleby brunatne", "rędziny"],
      "bardzo żyzne": ["czarnoziemy", "mady rzeczne"]
    },
    explanation: "Gleby bielicowe i górskie są mało żyzne, brunatne i rędziny są żyzne, a czarnoziemy oraz mady należą do gleb bardzo żyznych."
  },
  {
    id: "R03_GLE_06",
    section: "Gleby",
    type: "riddle",
    prompt: "Jestem żyzną glebą powstającą na skałach wapiennych. Skała macierzysta zalega płytko, dlatego trudno mnie uprawiać. Jak się nazywam?",
    options: null,
    answer: "rędzina",
    altAnswers: ["rędzina", "rędziny", "gleba rędzinowa"],
    explanation: "Rędziny powstają na wapieniach. Są żyzne, ale płytko zalegająca skała utrudnia ich uprawę."
  },
  {
    id: "R03_GLE_07",
    section: "Gleby",
    type: "single_choice",
    prompt: "Na jakim podłożu powstają gleby bielicowe?",
    options: ["Na piaskach i żwirach", "Na skałach lessowych", "Na wapieniach", "Na osadach rzecznych", "Na podmokłych glinach", "Na litej skale w górach"],
    answer: 0,
    explanation: "Gleby bielicowe powstają na piaskach i żwirach, mają bardzo mały poziom próchniczny i są mało żyzne."
  },
  {
    id: "R03_GLE_08",
    section: "Gleby",
    type: "fill_in",
    prompt: "Gleby __________ i __________ zajmują łącznie ponad połowę powierzchni Polski.",
    options: null,
    answer: ["brunatne", "płowe"],
    altAnswers: [["brunatne"], ["płowe"]],
    explanation: "Gleby brunatne i płowe są najbardziej rozpowszechnione w Polsce i zajmują ponad połowę powierzchni kraju."
  },
  {
    id: "R03_GLE_09",
    section: "Gleby",
    type: "odd_one_out",
    prompt: "Która gleba nie pasuje pod względem bardzo dużej żyzności: czarnoziemy, czarne ziemie, mady rzeczne, gleby bielicowe.",
    options: null,
    answer: "gleby bielicowe",
    explanation: "Czarnoziemy, czarne ziemie i mady są bardzo żyzne. Gleby bielicowe mają mało próchnicy i są mało żyzne."
  },

  {
    id: "R03_LAS_01",
    section: "Lasy",
    type: "riddle",
    prompt: "Jak nazywa się procentowy udział powierzchni leśnej w całkowitej powierzchni danego obszaru?",
    options: null,
    answer: "lesistość",
    altAnswers: ["lesistość", "wskaźnik lesistości"],
    explanation: "Lesistość wyraża w procentach, jaką część powierzchni danego obszaru pokrywają lasy."
  },
  {
    id: "R03_LAS_02",
    section: "Lasy",
    type: "single_choice",
    prompt: "Ile wynosiła lesistość Polski w 2024 roku?",
    options: ["Prawie 30%", "Około 5%", "Ponad 70%", "Dokładnie 50%", "Około 90%", "Mniej niż 1%"],
    answer: 0,
    explanation: "W 2024 roku lasy zajmowały prawie 30% powierzchni Polski. Od połowy XX wieku lesistość stopniowo rośnie."
  },
  {
    id: "R03_LAS_03",
    section: "Lasy",
    type: "true_false",
    prompt: "Największą lesistość ma województwo lubuskie, a najmniejszą województwo łódzkie.",
    options: null,
    answer: true,
    explanation: "Województwo lubuskie jest najbardziej zalesione, natomiast łódzkie ma najmniejszy udział lasów."
  },
  {
    id: "R03_LAS_04",
    section: "Lasy",
    type: "sort",
    prompt: "Przyporządkuj opis do rodzaju lasu.",
    options: null,
    image: "r03_typy_polskich_lasow.jpg",
    items: ["bór sosnowy", "bór świerkowy", "grąd", "łęg", "ols", "las z licznymi drzewami iglastymi i liściastymi"],
    categories: ["lasy iglaste", "lasy liściaste", "lasy mieszane"],
    answer: {
      "lasy iglaste": ["bór sosnowy", "bór świerkowy"],
      "lasy liściaste": ["grąd", "łęg", "ols"],
      "lasy mieszane": ["las z licznymi drzewami iglastymi i liściastymi"]
    },
    explanation: "Bory są lasami iglastymi, grądy, łęgi i olsy liściastymi, a w lasach mieszanych licznie występują drzewa obu grup."
  },
  {
    id: "R03_LAS_05",
    section: "Lasy",
    type: "match",
    prompt: "Połącz typ lasu liściastego z charakterystycznym miejscem lub składem.",
    options: null,
    left: ["grąd", "łęg", "ols"],
    right: ["teren podmokły z dominacją olszy czarnej", "żyzna gleba z dominacją grabów i dębów", "sąsiedztwo rzek i obszary okresowo zalewane"],
    answer: {
      "grąd": "żyzna gleba z dominacją grabów i dębów",
      "łęg": "sąsiedztwo rzek i obszary okresowo zalewane",
      "ols": "teren podmokły z dominacją olszy czarnej"
    },
    explanation: "Grądy rosną na żyznych glebach, łęgi przy rzekach i na terenach zalewowych, a olsy na obszarach podmokłych."
  },
  {
    id: "R03_LAS_06",
    section: "Lasy",
    type: "multi_select",
    prompt: "Zaznacz funkcje pełnione przez lasy.",
    options: ["Są siedliskiem organizmów", "Dostarczają drewna i owoców leśnych", "Umożliwiają wypoczynek", "Pochłaniają część zanieczyszczeń", "Zwiększają erozję gleby", "Uniemożliwiają magazynowanie wody"],
    answer: [0, 1, 2, 3],
    explanation: "Lasy pełnią funkcje ekologiczne, gospodarcze i społeczne. Chronią środowisko, dostarczają surowców i tworzą przestrzeń wypoczynku."
  },
  {
    id: "R03_LAS_07",
    section: "Lasy",
    type: "single_choice",
    prompt: "Który gatunek drzewa jest najliczniejszy w polskich lasach?",
    options: ["Sosna zwyczajna", "Olsza czarna", "Grab pospolity", "Dąb szypułkowy", "Wierzba biała", "Topola czarna"],
    answer: 0,
    explanation: "Najliczniejszym gatunkiem drzewa w Polsce jest sosna zwyczajna. Wiele borów sosnowych zasadził człowiek do celów gospodarczych."
  },
  {
    id: "R03_LAS_08",
    section: "Lasy",
    type: "odd_one_out",
    prompt: "Które drzewo nie pasuje do pozostałych: grab, dąb, olsza czarna, sosna zwyczajna.",
    options: null,
    answer: "sosna zwyczajna",
    explanation: "Sosna zwyczajna jest drzewem iglastym. Grab, dąb i olsza czarna są drzewami liściastymi."
  },

  {
    id: "R03_OCH_01",
    section: "Ochrona środowiska",
    type: "multi_select",
    prompt: "Zaznacz cele ochrony przyrody.",
    options: ["Zachowanie różnorodności gatunków i krajobrazów", "Zapobieganie wyginięciu gatunków", "Ograniczanie zanieczyszczeń", "Przeciwdziałanie zmianie klimatu", "Zwiększanie eksploatacji surowców", "Zmniejszanie liczby obszarów naturalnych"],
    answer: [0, 1, 2, 3],
    explanation: "Ochrona przyrody służy zachowaniu jej cennych elementów, ograniczeniu degradacji środowiska i zabezpieczeniu zasobów dla przyszłych pokoleń.",
    image: "r03_puszcza_bialowieska.jpg"
  },
  {
    id: "R03_OCH_02",
    section: "Ochrona środowiska",
    type: "single_choice",
    prompt: "Ile parków narodowych znajdowało się w Polsce w marcu 2025 roku?",
    options: ["23", "10", "16", "32", "126", "1600"],
    answer: 0,
    explanation: "W marcu 2025 roku w Polsce istniały 23 parki narodowe. Chronią one najcenniejsze przyrodniczo obszary kraju."
  },
  {
    id: "R03_OCH_03",
    section: "Ochrona środowiska",
    type: "match",
    prompt: "Połącz formę ochrony przyrody z jej opisem.",
    options: null,
    left: ["park narodowy", "rezerwat przyrody", "park krajobrazowy", "pomnik przyrody", "ochrona gatunkowa"],
    right: ["ochrona rzadkich i zagrożonych gatunków", "pojedynczy cenny obiekt lub grupa obiektów", "rozległy najcenniejszy obszar z silnym ograniczeniem działalności człowieka", "mniejszy cenny obszar z dużymi ograniczeniami", "obszar zachowujący walory przyrodnicze kulturowe i historyczne"],
    answer: {
      "park narodowy": "rozległy najcenniejszy obszar z silnym ograniczeniem działalności człowieka",
      "rezerwat przyrody": "mniejszy cenny obszar z dużymi ograniczeniami",
      "park krajobrazowy": "obszar zachowujący walory przyrodnicze kulturowe i historyczne",
      "pomnik przyrody": "pojedynczy cenny obiekt lub grupa obiektów",
      "ochrona gatunkowa": "ochrona rzadkich i zagrożonych gatunków"
    },
    explanation: "Formy ochrony różnią się wielkością chronionego obiektu, zakresem ograniczeń i celem ochrony."
  },
  {
    id: "R03_OCH_04",
    section: "Ochrona środowiska",
    type: "true_false",
    prompt: "Rezerwaty przyrody są zwykle znacznie mniejsze od parków narodowych.",
    options: null,
    answer: true,
    explanation: "Rezerwaty, podobnie jak parki narodowe, chronią bardzo cenne obszary, lecz mają zazwyczaj znacznie mniejszą powierzchnię."
  },
  {
    id: "R03_OCH_05",
    section: "Ochrona środowiska",
    type: "scenario",
    prompt: "W gminie rośnie wyjątkowo stare i okazałe drzewo. Władze chcą objąć ochroną właśnie ten pojedynczy obiekt. Jaka forma ochrony jest najwłaściwsza?",
    options: ["Pomnik przyrody", "Park narodowy", "Park krajobrazowy", "Rezerwat biosfery", "Ochrona całego województwa", "Obszar przemysłowy"],
    answer: 0,
    explanation: "Pomniki przyrody obejmują pojedyncze cenne obiekty lub ich grupy, najczęściej drzewa, ale także skały, jaskinie i źródła.",
    image: "r03_stary_dab_pomnikowy.jpg"
  },
  {
    id: "R03_OCH_06",
    section: "Ochrona środowiska",
    type: "match",
    prompt: "Połącz park narodowy z charakterystycznym elementem jego przyrody.",
    options: null,
    image: "r03_gory_stolowe_formacje_skalne.jpg",
    left: ["Białowieski Park Narodowy", "Wigierski Park Narodowy", "Tatrzański Park Narodowy", "Park Narodowy Gór Stołowych"],
    right: ["góry płytowe i ociosane formacje skalne", "pierwotne fragmenty puszczy i żubry", "jeziora polodowcowe i bobry", "rzeźba alpejska oraz kozice i świstaki"],
    answer: {
      "Białowieski Park Narodowy": "pierwotne fragmenty puszczy i żubry",
      "Wigierski Park Narodowy": "jeziora polodowcowe i bobry",
      "Tatrzański Park Narodowy": "rzeźba alpejska oraz kozice i świstaki",
      "Park Narodowy Gór Stołowych": "góry płytowe i ociosane formacje skalne"
    },
    explanation: "Każdy z parków chroni inny wyjątkowy krajobraz i związane z nim gatunki."
  },
  {
    id: "R03_OCH_07",
    section: "Ochrona środowiska",
    type: "single_choice",
    prompt: "Który park krajobrazowy jest najstarszy w Polsce?",
    options: ["Suwalski Park Krajobrazowy", "Park Krajobrazowy Gór Sowich", "Białowieski Park Narodowy", "Tatrzański Park Narodowy", "Wigierski Park Narodowy", "Ojcowski Park Narodowy"],
    answer: 0,
    explanation: "Suwalski Park Krajobrazowy utworzono w 1976 roku. Chroni krajobraz polodowcowy."
  },
  {
    id: "R03_OCH_08",
    section: "Ochrona środowiska",
    type: "multi_select",
    prompt: "Które działania mogą być wyjątkowo dopuszczone na obszarze ochrony ścisłej?",
    options: ["Akcje ratunkowe", "Badania naukowe", "Prace związane z ochroną przyrody", "Działania obronne kraju", "Budowa osiedli", "Wydobywanie surowców na dużą skalę"],
    answer: [0, 1, 2, 3],
    explanation: "Ochrona ścisła zasadniczo wyklucza działalność człowieka, ale dopuszcza niezbędne akcje ratunkowe, ochronne, naukowe i obronne."
  },
  {
    id: "R03_OCH_09",
    section: "Ochrona środowiska",
    type: "fill_in",
    prompt: "Przetrwaniu rzadkich i zagrożonych zwierząt, roślin oraz grzybów służy ochrona __________.",
    options: null,
    answer: ["gatunkowa"],
    altAnswers: [["gatunkowa", "ochrona gatunkowa"]],
    explanation: "Ochrona gatunkowa ma zapewnić przetrwanie i dobrostan rzadkich oraz zagrożonych wyginięciem gatunków."
  },
  {
    id: "R03_OCH_10",
    section: "Ochrona środowiska",
    type: "odd_one_out",
    prompt: "Co nie jest prawną formą ochrony przyrody: park narodowy, rezerwat przyrody, park krajobrazowy, elektrownia cieplna.",
    options: null,
    answer: "elektrownia cieplna",
    explanation: "Parki narodowe, rezerwaty i parki krajobrazowe są prawnymi formami ochrony przyrody. Elektrownia cieplna jest obiektem przemysłowym."
  },

  {
    id: "R03_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Ile wynosi średnia roczna suma opadów dla całej Polski?",
    options: ["680 mm", "250 mm", "420 mm", "1000 mm", "1500 mm", "52,3 mm"],
    answer: 0,
    explanation: "Średnia roczna suma opadów dla Polski wynosi 680 mm, choć na większości obszaru kraju jest to około 550-600 mm."
  },
  {
    id: "R03_HARD_02",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Wraz ze wzrostem wysokości o każde 100 m temperatura powietrza spada średnio o około __________°C.",
    options: null,
    answer: ["0,6"],
    altAnswers: [["0,6", "0.6", "0,6°C", "0.6°C"]],
    explanation: "W górach temperatura spada przeciętnie o około 0,6°C na każde 100 m wysokości, a suma opadów rośnie."
  },
  {
    id: "R03_HARD_03",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz miejscowość z wyróżniającą ją cechą klimatyczną.",
    options: null,
    left: ["Kołobrzeg", "Białystok", "Poznań", "Zakopane"],
    right: ["mroźne zimy pod wpływem klimatu kontynentalnego", "duże opady i łagodzący wpływ Bałtyku", "cień opadowy w środkowej Polsce", "chłód i duże opady związane z wysokością"],
    answer: {
      "Kołobrzeg": "duże opady i łagodzący wpływ Bałtyku",
      "Białystok": "mroźne zimy pod wpływem klimatu kontynentalnego",
      "Poznań": "cień opadowy w środkowej Polsce",
      "Zakopane": "chłód i duże opady związane z wysokością"
    },
    explanation: "Lokalne różnice klimatu wynikają z odległości od morza, wpływów kontynentalnych, cienia opadowego i wysokości nad poziomem morza."
  },
  {
    id: "R03_HARD_04",
    section: "Super trudne",
    type: "true_false",
    prompt: "W dzień bryza morska wieje od morza ku lądowi, ponieważ ląd nagrzewa się szybciej niż woda.",
    options: null,
    answer: true,
    explanation: "W dzień cieplejsze powietrze nad lądem unosi się, a jego miejsce zajmuje chłodniejsze powietrze znad morza. Nocą kierunek bryzy się odwraca."
  },
  {
    id: "R03_HARD_05",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Jaką wysokość miała najwyższa odnotowana fala na Bałtyku?",
    options: ["14 m", "5 m", "52,3 m", "459 m", "7 m", "2 m"],
    answer: 0,
    explanation: "Fale Bałtyku zwykle nie przekraczają 5 m, ale podczas sztormu najwyższa odnotowana fala osiągnęła 14 m."
  },
  {
    id: "R03_HARD_06",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które zjawiska są związane z degradacją i eutrofizacją Bałtyku?",
    image: "r03_eutrofizacja_baltyku.jpg",
    options: ["Spływ nawozów i ścieków rzekami", "Intensywna działalność przemysłowa i transportowa", "Niewielka wymiana wód z Morzem Północnym", "Nadmierny rozwój glonów", "Bardzo szybka wymiana z oceanem", "Brak działalności człowieka w zlewisku"],
    answer: [0, 1, 2, 3],
    explanation: "Zanieczyszczenia i nadmiar substancji odżywczych trafiają do Bałtyku ze zlewiska, a ograniczona wymiana wód utrudnia ich usuwanie. Skutkiem są między innymi zakwity glonów."
  },
  {
    id: "R03_HARD_07",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Cztery odnogi ujścia Wisły to Przekop Wisły, Wisła __________, Wisła __________ i __________.",
    options: null,
    answer: ["Martwa", "Śmiała", "Nogat"],
    altAnswers: [["Martwa", "martwa"], ["Śmiała", "śmiała"], ["Nogat", "nogat"]],
    explanation: "W delcie Wisła rozdziela się na Przekop Wisły, Wisłę Martwą, Wisłę Śmiałą i Nogat. Dużą część delty zajmują Żuławy Wiślane."
  },
  {
    id: "R03_HARD_08",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który zestaw poprawnie podaje długość Odry oraz długość jej odcinka leżącego w Polsce lub na granicy z Niemcami?",
    options: ["Ponad 854 km i 742 km", "1022 km i 854 km", "808 km i 742 km", "742 km i 459 km", "415 km i 52 km", "1600 km i 126 km"],
    answer: 0,
    explanation: "Odra ma ponad 854 km, z czego 742 km leżą w Polsce albo na granicy polsko-niemieckiej. Pozostały odcinek znajduje się w Czechach."
  },
  {
    id: "R03_HARD_09",
    section: "Super trudne",
    type: "scenario",
    prompt: "Rolnik bada żyzną glebę na wapiennym podłożu. Profil jest płytki, a zalegająca tuż pod powierzchnią skała utrudnia orkę. Jaki to typ gleby?",
    options: ["Rędzina", "Czarnoziem", "Mada rzeczna", "Gleba bielicowa", "Czarna ziemia", "Gleba bagienna"],
    answer: 0,
    explanation: "Rędziny tworzą się na skałach wapiennych. Są żyzne, lecz płytkie i trudne w uprawie."
  },
  {
    id: "R03_HARD_10",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz okres z lesistością obszaru dzisiejszej Polski.",
    options: null,
    left: ["około 1000 lat temu", "połowa XX wieku", "rok 2024"],
    right: ["około 21%", "prawie 30%", "około 75%"],
    answer: {
      "około 1000 lat temu": "około 75%",
      "połowa XX wieku": "około 21%",
      "rok 2024": "prawie 30%"
    },
    explanation: "Lasy pokrywały około 75% obszaru tysiąc lat temu. Do połowy XX wieku udział spadł do około 21%, a później wzrósł do prawie 30% w 2024 roku."
  },
  {
    id: "R03_HARD_11",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz formę ochrony przyrody z jej liczbą w Polsce w marcu 2025 roku.",
    options: null,
    left: ["parki narodowe", "rezerwaty przyrody", "parki krajobrazowe", "pomniki przyrody"],
    right: ["ponad 34 tys.", "23", "prawie 1600", "126"],
    answer: {
      "parki narodowe": "23",
      "rezerwaty przyrody": "prawie 1600",
      "parki krajobrazowe": "126",
      "pomniki przyrody": "ponad 34 tys."
    },
    explanation: "W marcu 2025 roku w Polsce były 23 parki narodowe, prawie 1600 rezerwatów, 126 parków krajobrazowych i ponad 34 tysiące pomników przyrody."
  },
  {
    id: "R03_HARD_12",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy powstawania delty rzecznej.",
    options: null,
    items: ["rzeka rozwidla się na odnogi", "osady tworzą nowy ląd", "rzeka niesie materiał ku ujściu", "materiał odkłada się przy ujściu"],
    answer: ["rzeka niesie materiał ku ujściu", "materiał odkłada się przy ujściu", "osady tworzą nowy ląd", "rzeka rozwidla się na odnogi"],
    explanation: "Rzeka transportuje materiał, odkłada go przy ujściu, buduje nowy ląd, a następnie rozdziela się na odnogi płynące przez deltę."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 2,
  title: "Środowisko przyrodnicze Polski",
  icon: "🌿",
  sectionOrder: [
    "Pogoda i klimat",
    "Morze Bałtyckie",
    "Rzeki i powodzie",
    "Gleby",
    "Lasy",
    "Ochrona środowiska"
  ],
  sectionIcons: {
    "Pogoda i klimat": "🌦️",
    "Morze Bałtyckie": "🌊",
    "Rzeki i powodzie": "🏞️",
    "Gleby": "🌱",
    "Lasy": "🌲",
    "Ochrona środowiska": "🛡️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
