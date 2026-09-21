// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POZ  = Położenie i pokrywy lodowe
//   KLI  = Klimat, fauna i ludność
//   ZMI  = Zmiany w środowisku
//   BAD  = Badania polarne
//   POL  = Polacy i status prawny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    id: "R05_POZ_01",
    section: "Położenie i pokrywy lodowe",
    type: "single_choice",
    prompt: "Który zestaw najlepiej opisuje zasięg Arktyki?",
    options: [
      "Ocean Arktyczny, jego wyspy oraz północne krańce Europy, Azji i Ameryki Północnej",
      "Antarktyda i Ocean Południowy wraz z wyspami",
      "Tylko Grenlandia i Ocean Arktyczny",
      "Tylko północne krańce Europy, Azji i Ameryki Północnej",
      "Ocean Arktyczny i Antarktyda",
      "Grenlandia i Ocean Południowy"
    ],
    answer: 0,
    explanation: "Arktyka obejmuje Ocean Arktyczny, położone na nim wyspy oraz północne obszary Europy, Azji i Ameryki Północnej.",
    image: "r05_mapa_arktyki.jpg"
  },
  {
    id: "R05_POZ_02",
    section: "Położenie i pokrywy lodowe",
    type: "multi_select",
    prompt: "Zaznacz elementy należące do Arktyki.",
    options: ["Ocean Arktyczny", "Grenlandia", "północne krańce Europy", "północne krańce Azji", "Antarktyda", "Ocean Południowy"],
    answer: [0, 1, 2, 3],
    explanation: "Do Arktyki zalicza się Ocean Arktyczny i jego wyspy, w tym Grenlandię, oraz północne części Europy, Azji i Ameryki Północnej."
  },
  {
    id: "R05_POZ_03",
    section: "Położenie i pokrywy lodowe",
    type: "true_false",
    prompt: "Umowną granicą Arktyki jest koło podbiegunowe północne, czyli równoleżnik 66°34′N.",
    options: null,
    answer: true,
    explanation: "Koło podbiegunowe północne, położone na 66°34′N, jest astronomicznie wyznaczoną umowną granicą Arktyki."
  },
  {
    id: "R05_POZ_04",
    section: "Położenie i pokrywy lodowe",
    type: "fill_in",
    prompt: "Znaczną część Grenlandii zajmuje __________, którego grubość dochodzi do __________ m.",
    options: null,
    answer: ["lądolód", "3500"],
    altAnswers: [
      ["lądolód", "lądolod"],
      ["3500", "3500 m"]
    ],
    explanation: "Lądolód Grenlandii ma powierzchnię ponad 1,8 mln km², a jego grubość dochodzi do 3500 m."
  },
  {
    id: "R05_POZ_05",
    section: "Położenie i pokrywy lodowe",
    type: "riddle",
    prompt: "Jak nazywa się wieloletni pływający lód morski pokrywający większość Oceanu Arktycznego?",
    options: null,
    answer: "pak lodowy",
    altAnswers: ["pak lodowy", "pak"],
    explanation: "Wieloletni pływający lód morski Oceanu Arktycznego nazywa się pakiem lodowym.",
    image: "r05_pak_lodowy.jpg"
  },
  {
    id: "R05_POZ_06",
    section: "Położenie i pokrywy lodowe",
    type: "match",
    prompt: "Połącz nazwę obszaru z właściwym opisem.",
    options: null,
    left: ["Arktyka", "Antarktyka", "Antarktyda"],
    right: ["obszar wokół bieguna północnego", "obszar wokół bieguna południowego", "kontynent wchodzący w skład Antarktyki"],
    answer: {
      Arktyka: "obszar wokół bieguna północnego",
      Antarktyka: "obszar wokół bieguna południowego",
      Antarktyda: "kontynent wchodzący w skład Antarktyki"
    },
    explanation: "Arktyka otacza biegun północny, Antarktyka biegun południowy, a Antarktyda jest kontynentem należącym do Antarktyki."
  },
  {
    id: "R05_POZ_07",
    section: "Położenie i pokrywy lodowe",
    type: "sort",
    prompt: "Przyporządkuj elementy do Arktyki lub Antarktyki.",
    options: null,
    items: ["Ocean Arktyczny", "Grenlandia", "Antarktyda", "Ocean Południowy", "północne krańce Ameryki Północnej", "Wyspa Króla Jerzego"],
    categories: ["Arktyka", "Antarktyka"],
    answer: {
      Arktyka: ["Ocean Arktyczny", "Grenlandia", "północne krańce Ameryki Północnej"],
      Antarktyka: ["Antarktyda", "Ocean Południowy", "Wyspa Króla Jerzego"]
    },
    explanation: "Arktyka obejmuje Ocean Arktyczny, jego wyspy i północne części kontynentów. Antarktyka obejmuje Antarktydę oraz otaczający ją Ocean Południowy z wyspami."
  },
  {
    id: "R05_POZ_08",
    section: "Położenie i pokrywy lodowe",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych elementów Arktyki: Grenlandia, Ocean Arktyczny, północna Europa, Antarktyda.",
    options: null,
    answer: "Antarktyda",
    explanation: "Antarktyda leży w Antarktyce wokół bieguna południowego, a pozostałe elementy należą do Arktyki."
  },
  {
    id: "R05_POZ_09",
    section: "Położenie i pokrywy lodowe",
    type: "scenario",
    prompt: "Badacz opisuje część świata obejmującą kontynent Antarktydy oraz otaczające go wody Oceanu Południowego wraz z wyspami. Jak nazywa ten obszar?",
    options: ["Antarktyka", "Arktyka", "Grenlandia", "Ocean Arktyczny", "Tundra", "Półwysep Kolski"],
    answer: 0,
    explanation: "Antarktyka obejmuje Antarktydę oraz otaczające ją wody Oceanu Południowego wraz z wyspami.",
    image: "r05_mapa_antarktyki.jpg"
  },
  {
    id: "R05_POZ_10",
    section: "Położenie i pokrywy lodowe",
    type: "true_false",
    prompt: "Lądolód pokrywa około 99,5% powierzchni Antarktydy.",
    options: null,
    answer: true,
    explanation: "Antarktyda ma około 14 mln km² powierzchni, a około 99,5% jej obszaru pokrywa lądolód.",
    image: "r05_ladolod_antarktydy.jpg"
  },
  {
    id: "R05_KLI_01",
    section: "Klimat, fauna i ludność",
    type: "single_choice",
    prompt: "Gdzie w Arktyce występuje najniższa średnia temperatura powietrza w styczniu?",
    options: [
      "we wnętrzu Grenlandii",
      "na południowych krańcach Arktyki",
      "na Spitsbergenie Zachodnim",
      "na północy Alaski",
      "na Półwyspie Kolskim",
      "na wybrzeżach Grenlandii"
    ],
    answer: 0,
    explanation: "We wnętrzu Grenlandii średnia temperatura najchłodniejszego miesiąca, stycznia, spada poniżej -50°C."
  },
  {
    id: "R05_KLI_02",
    section: "Klimat, fauna i ludność",
    type: "single_choice",
    prompt: "Który obszar jest najzimniejszym regionem na Ziemi?",
    options: ["Antarktyda", "Arktyka", "Grenlandia", "Spitsbergen", "Półwysep Kolski", "Alaska"],
    answer: 0,
    explanation: "Antarktyda jest najzimniejszym regionem na Ziemi; we wnętrzu kontynentu temperatura przez cały rok jest ujemna."
  },
  {
    id: "R05_KLI_03",
    section: "Klimat, fauna i ludność",
    type: "multi_select",
    prompt: "Zaznacz zwierzęta występujące w Arktyce.",
    options: ["niedźwiedź polarny", "mors", "foka", "wieloryb", "pingwin", "tygrys"],
    answer: [0, 1, 2, 3],
    explanation: "W Arktyce występują między innymi niedźwiedzie polarne, morsy, foki i wieloryby. Pingwiny są charakterystyczne dla Antarktyki.",
    image: "r05_zwierzeta_polarne.jpg"
  },
  {
    id: "R05_KLI_04",
    section: "Klimat, fauna i ludność",
    type: "true_false",
    prompt: "Niedźwiedzie polarne występują na wolności jedynie w Arktyce.",
    options: null,
    answer: true,
    explanation: "Niedźwiedzie polarne żyją na wolności w Arktyce; przed zimnem chroni je między innymi bardzo grube i gęste futro."
  },
  {
    id: "R05_KLI_05",
    section: "Klimat, fauna i ludność",
    type: "fill_in",
    prompt: "Na stacji Wostok w 1983 roku zanotowano temperaturę __________°C, najniższą zmierzoną temperaturę powietrza na Ziemi.",
    options: null,
    answer: ["-89,2"],
    altAnswers: [
      ["-89,2", "-89.2", "−89,2"]
    ],
    explanation: "W 1983 roku na stacji Wostok zanotowano -89,2°C."
  },
  {
    id: "R05_KLI_06",
    section: "Klimat, fauna i ludność",
    type: "riddle",
    prompt: "Jak nazywa się pojedyncze wzniesienie lub grzbiet górski wystający ponad pokrywę lodową Antarktydy?",
    options: null,
    answer: "nunatak",
    altAnswers: ["nunatak", "nunatakami"],
    explanation: "Ponad lądolód Antarktydy wystają miejscami wzniesienia i grzbiety górskie nazywane nunatakami."
  },
  {
    id: "R05_KLI_07",
    section: "Klimat, fauna i ludność",
    type: "match",
    prompt: "Połącz element środowiska z obszarem, dla którego jest charakterystyczny.",
    options: null,
    left: ["tundra", "mchy, porosty i glony", "Inuici, Lapończycy i Nieńcy"],
    right: ["niezlodowacone obszary Arktyki", "niezlodowacone fragmenty wybrzeży Antarktydy", "rdzenna ludność Arktyki"],
    answer: {
      tundra: "niezlodowacone obszary Arktyki",
      "mchy, porosty i glony": "niezlodowacone fragmenty wybrzeży Antarktydy",
      "Inuici, Lapończycy i Nieńcy": "rdzenna ludność Arktyki"
    },
    explanation: "Arktyczne obszary niezlodowacone porasta tundra, na antarktycznych wybrzeżach występują głównie mchy, porosty i glony, a Inuici, Lapończycy i Nieńcy należą do rdzennej ludności Arktyki."
  },
  {
    id: "R05_KLI_08",
    section: "Klimat, fauna i ludność",
    type: "sort",
    prompt: "Przyporządkuj zwierzęta do obszarów ich występowania.",
    options: null,
    items: ["niedźwiedź polarny", "pingwin", "foka"],
    categories: ["tylko Arktyka", "tylko Antarktyka", "Arktyka i Antarktyka"],
    answer: {
      "tylko Arktyka": ["niedźwiedź polarny"],
      "tylko Antarktyka": ["pingwin"],
      "Arktyka i Antarktyka": ["foka"]
    },
    explanation: "Niedźwiedzie polarne występują na wolności jedynie w Arktyce, pingwiny są związane z Antarktyką, a foki żyją w obu obszarach okołobiegunowych.",
    image: "r05_zwierzeta_polarne.jpg"
  },
  {
    id: "R05_KLI_09",
    section: "Klimat, fauna i ludność",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do nazw rdzennej ludności Arktyki: Inuici, Lapończycy, Nieńcy, pingwiny.",
    options: null,
    answer: "pingwiny",
    explanation: "Inuici, Lapończycy i Nieńcy należą do rdzennej ludności Arktyki, a pingwiny są zwierzętami."
  },
  {
    id: "R05_KLI_10",
    section: "Klimat, fauna i ludność",
    type: "scenario",
    prompt: "Mieszkańcy arktycznych wybrzeży Grenlandii utrzymują się między innymi z rybołówstwa i myślistwa. Do jakiej rdzennej ludności należą mieszkańcy wschodnich i zachodnich wybrzeży tej wyspy?",
    options: ["Inuici", "Lapończycy", "Nieńcy", "badacze polarni"],
    answer: 0,
    explanation: "Wschodnie i zachodnie wybrzeża Grenlandii są zamieszkiwane przez Inuitów."
  },
  {
    id: "R05_ZMI_01",
    section: "Zmiany w środowisku",
    type: "single_choice",
    prompt: "Na czym polega globalne ocieplenie?",
    options: [
      "na wzroście średniej temperatury powietrza na Ziemi",
      "na spadku zawartości ozonu w atmosferze",
      "na topnieniu pokryw lodowych",
      "na wzroście poziomu wszechoceanu",
      "na emisji gazów cieplarnianych",
      "na zmniejszaniu zasięgu paku lodowego"
    ],
    answer: 0,
    explanation: "Globalne ocieplenie to wzrost średniej temperatury powietrza na Ziemi."
  },
  {
    id: "R05_ZMI_02",
    section: "Zmiany w środowisku",
    type: "multi_select",
    prompt: "Zaznacz gazy cieplarniane przyczyniające się do nasilenia globalnego ocieplenia.",
    options: ["dwutlenek węgla", "tlenek azotu", "metan", "freony", "hel", "argon"],
    answer: [0, 1, 2, 3],
    explanation: "Do gazów cieplarnianych nasilających globalne ocieplenie należą między innymi dwutlenek węgla, tlenek azotu, metan i freony."
  },
  {
    id: "R05_ZMI_03",
    section: "Zmiany w środowisku",
    type: "true_false",
    prompt: "Topnienie pokryw lodowych przyczynia się do podnoszenia poziomu wszechoceanu.",
    options: null,
    answer: true,
    explanation: "Topnienie pokryw lodowych jest jednym z następstw globalnego ocieplenia i prowadzi do wzrostu poziomu wszechoceanu."
  },
  {
    id: "R05_ZMI_04",
    section: "Zmiany w środowisku",
    type: "fill_in",
    prompt: "Ozon jest skoncentrowany głównie na wysokości __________ km nad powierzchnią Ziemi i pochłania większość promieniowania __________.",
    options: null,
    answer: ["20-25", "ultrafioletowego"],
    altAnswers: [
      ["20-25", "20–25", "20 do 25"],
      ["ultrafioletowego", "UV", "ultrafioletowego (UV)"]
    ],
    explanation: "Ozonosfera znajduje się głównie na wysokości 20-25 km i pochłania większość szkodliwego promieniowania ultrafioletowego."
  },
  {
    id: "R05_ZMI_05",
    section: "Zmiany w środowisku",
    type: "riddle",
    prompt: "W jakiej porze roku na Antarktydzie następuje największy spadek zawartości ozonu?",
    options: null,
    answer: "wiosną",
    altAnswers: ["wiosną", "wiosna", "antarktyczną wiosną", "od września do listopada", "wrzesień-listopad"],
    explanation: "Największy spadek ozonu nad Antarktydą występuje podczas antarktycznej wiosny, od września do listopada.",
    image: "r05_dziura_ozonowa.jpg"
  },
  {
    id: "R05_ZMI_06",
    section: "Zmiany w środowisku",
    type: "match",
    prompt: "Połącz zjawisko lub działalność z jego skutkiem.",
    options: null,
    left: ["globalne ocieplenie", "spadek zawartości ozonu", "wydobycie surowców w Arktyce"],
    right: ["topnienie pokryw lodowych", "dziura ozonowa", "lokalne zanieczyszczenia środowiska"],
    answer: {
      "globalne ocieplenie": "topnienie pokryw lodowych",
      "spadek zawartości ozonu": "dziura ozonowa",
      "wydobycie surowców w Arktyce": "lokalne zanieczyszczenia środowiska"
    },
    explanation: "Ocieplenie nasila topnienie lodu, spadek zawartości ozonu tworzy dziurę ozonową, a działalność wydobywcza powoduje zanieczyszczenia w wielu rejonach Arktyki."
  },
  {
    id: "R05_ZMI_07",
    section: "Zmiany w środowisku",
    type: "sort",
    prompt: "Przyporządkuj zjawiska do odpowiedniej kategorii.",
    options: null,
    items: ["globalne ocieplenie", "dziura ozonowa", "wydobycie ropy na północy Alaski", "kopalnie węgla na Spitsbergenie"],
    categories: ["zjawiska o zasięgu globalnym", "lokalna działalność gospodarcza w Arktyce"],
    answer: {
      "zjawiska o zasięgu globalnym": ["globalne ocieplenie", "dziura ozonowa"],
      "lokalna działalność gospodarcza w Arktyce": ["wydobycie ropy na północy Alaski", "kopalnie węgla na Spitsbergenie"]
    },
    explanation: "Globalne ocieplenie i spadek ozonu wynikają z procesów obejmujących atmosferę w skali globalnej, natomiast wydobycie ropy i węgla to lokalna działalność gospodarcza w Arktyce."
  },
  {
    id: "R05_ZMI_08",
    section: "Zmiany w środowisku",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do miejsc silnie zanieczyszczonych przez działalność gospodarczą w Arktyce: północ Alaski, Półwysep Kolski, Spitsbergen, wnętrze Antarktydy.",
    options: null,
    answer: "wnętrze Antarktydy",
    explanation: "Północ Alaski, Półwysep Kolski i Spitsbergen należą do obszarów zanieczyszczonych w związku z wydobyciem surowców w Arktyce."
  },
  {
    id: "R05_ZMI_09",
    section: "Zmiany w środowisku",
    type: "scenario",
    prompt: "Badacz porównuje zasięg paku lodowego we wrześniu 1979 i 2016 roku i widzi wyraźne zmniejszenie jego powierzchni. Który proces obserwuje?",
    options: [
      "szybkie topnienie Arktyki",
      "powstawanie nowego lądolodu",
      "rozszerzanie tundry na Antarktydzie",
      "wzrost grubości paku lodowego",
      "zanik Oceanu Arktycznego",
      "powiększanie lądolodu Grenlandii"
    ],
    answer: 0,
    explanation: "Arktyka jest regionem, w którym pokrywa lodowa topnieje wyjątkowo szybko; w ostatnich dziesięcioleciach zmniejszyła się także średnia grubość paku lodowego.",
    image: "r05_topnienie_arktyki.jpg"
  },
  {
    id: "R05_ZMI_10",
    section: "Zmiany w środowisku",
    type: "sequence",
    prompt: "Ułóż ciąg przyczynowo-skutkowy dotyczący globalnego ocieplenia.",
    options: null,
    items: [
      "topnienie pokryw lodowych",
      "wzrost poziomu wszechoceanu",
      "większa ilość gazów cieplarnianych w atmosferze",
      "wzrost średniej temperatury powietrza na Ziemi"
    ],
    answer: [
      "większa ilość gazów cieplarnianych w atmosferze",
      "wzrost średniej temperatury powietrza na Ziemi",
      "topnienie pokryw lodowych",
      "wzrost poziomu wszechoceanu"
    ],
    explanation: "Gazy cieplarniane pochłaniają promieniowanie cieplne, co sprzyja wzrostowi temperatury. Ocieplenie nasila topnienie pokryw lodowych, a to podnosi poziom wszechoceanu."
  },
  {
    id: "R05_BAD_01",
    section: "Badania polarne",
    type: "single_choice",
    prompt: "Kiedy rozpoczęły się badania naukowe obszarów okołobiegunowych?",
    options: ["w XIX wieku", "po II wojnie światowej", "na początku lat 60. XX wieku", "w 1909 roku", "w 1911 roku", "w 1959 roku"],
    answer: 0,
    explanation: "Badania naukowe obszarów okołobiegunowych rozpoczęły się w XIX wieku, a ich intensywny rozwój nastąpił po II wojnie światowej."
  },
  {
    id: "R05_BAD_02",
    section: "Badania polarne",
    type: "multi_select",
    prompt: "Zaznacz współczesne zakresy badań obszarów okołobiegunowych.",
    options: ["fauna i flora", "pogoda i klimat", "lodowce i lądolody", "zmiany klimatu", "zasoby wodne", "budowa średniowiecznych zamków"],
    answer: [0, 1, 2, 3, 4],
    explanation: "Do zakresów badań polarnych należą między innymi fauna i flora, pogoda i klimat, lodowce i lądolody, zmiany klimatu oraz zasoby wodne."
  },
  {
    id: "R05_BAD_03",
    section: "Badania polarne",
    type: "true_false",
    prompt: "Od początku lat 60. XX wieku głównym celem wypraw na obszary okołobiegunowe są przede wszystkim badania naukowe środowiska przyrodniczego.",
    options: null,
    answer: true,
    explanation: "Na początku lat 60. XX wieku zmienił się charakter wypraw polarnych; odtąd ich najważniejszym celem stały się badania naukowe środowiska."
  },
  {
    id: "R05_BAD_04",
    section: "Badania polarne",
    type: "fill_in",
    prompt: "Biegun północny jako pierwszy zdobył __________, a biegun południowy __________.",
    options: null,
    answer: ["Robert Edwin Peary", "Roald Amundsen"],
    altAnswers: [
      ["Robert Edwin Peary", "Robert Peary", "Peary"],
      ["Roald Amundsen", "Amundsen"]
    ],
    explanation: "Robert Edwin Peary dotarł najdalej na północ 6 kwietnia 1909 r. i został uznany za zdobywcę bieguna północnego, a Roald Amundsen stanął na biegunie południowym 14 grudnia 1911 r.",
    image: "r05_badacze_polarni.jpg"
  },
  {
    id: "R05_BAD_05",
    section: "Badania polarne",
    type: "riddle",
    prompt: "Jak nazywa się jedyna polska stacja w Arktyce działająca przez cały rok?",
    options: null,
    answer: "Polska Stacja Polarna im. Stanisława Siedleckiego",
    altAnswers: ["Polska Stacja Polarna im. Stanisława Siedleckiego", "Stacja im. Stanisława Siedleckiego", "stacja Siedleckiego"],
    explanation: "Spośród pięciu polskich stacji w Arktyce tylko Polska Stacja Polarna im. Stanisława Siedleckiego na Spitsbergenie Zachodnim działa przez cały rok.",
    image: "r05_stacja_siedleckiego.jpg"
  },
  {
    id: "R05_BAD_06",
    section: "Badania polarne",
    type: "match",
    prompt: "Połącz stację z właściwą informacją.",
    options: null,
    left: ["Polska Stacja Polarna im. Stanisława Siedleckiego", "Polska Stacja Antarktyczna im. H. Arctowskiego", "Neumayer III"],
    right: ["Spitsbergen Zachodni", "Wyspa Króla Jerzego", "platforma podnoszona hydraulicznymi podnośnikami"],
    answer: {
      "Polska Stacja Polarna im. Stanisława Siedleckiego": "Spitsbergen Zachodni",
      "Polska Stacja Antarktyczna im. H. Arctowskiego": "Wyspa Króla Jerzego",
      "Neumayer III": "platforma podnoszona hydraulicznymi podnośnikami"
    },
    explanation: "Stacja Siedleckiego leży na Spitsbergenie Zachodnim, Arctowskiego na Wyspie Króla Jerzego, a Neumayer III zbudowano na podnoszonej platformie."
  },
  {
    id: "R05_BAD_07",
    section: "Badania polarne",
    type: "sort",
    prompt: "Przyporządkuj trudności życia na stacji polarnej do kategorii.",
    options: null,
    items: ["ekstremalnie niska temperatura", "bardzo silne wiatry", "noc polarna", "wielomiesięczna rozłąka z bliskimi"],
    categories: ["warunki przyrodnicze", "trudność społeczna"],
    answer: {
      "warunki przyrodnicze": ["ekstremalnie niska temperatura", "bardzo silne wiatry", "noc polarna"],
      "trudność społeczna": ["wielomiesięczna rozłąka z bliskimi"]
    },
    explanation: "Pracę utrudniają niska temperatura, silne wiatry i noc polarna, a mieszkańcom stacji dodatkowo doskwiera długotrwała rozłąka z bliskimi."
  },
  {
    id: "R05_BAD_08",
    section: "Badania polarne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do zakresów badań polarnych: fauna i flora, pogoda i klimat, zasoby wodne, historia średniowiecznych zamków.",
    options: null,
    answer: "historia średniowiecznych zamków",
    explanation: "Badania polarne obejmują między innymi faunę i florę, pogodę i klimat oraz zasoby wodne."
  },
  {
    id: "R05_BAD_09",
    section: "Badania polarne",
    type: "scenario",
    prompt: "Stacja Neumayer III stoi na platformie z hydraulicznymi podnośnikami. Dlaczego konstrukcja jest okresowo podnoszona lub opuszczana?",
    options: [
      "aby utrzymywać stację około 6 m nad powierzchnią lodu mimo narastającego śniegu",
      "aby ułatwiać badania lodowców i lądolodów",
      "aby chronić mieszkańców przed nocą polarną",
      "aby zapewniać miejsce do pobierania próbek",
      "aby umożliwiać działanie tylko w sezonie letnim",
      "aby zastąpić laboratoria i sale konferencyjne"
    ],
    answer: 0,
    explanation: "Hydrauliczne podnośniki pozwalają utrzymywać stację na stałej wysokości około 6 m nad powierzchnią lodu i chronią ją przed naporem narastającej pokrywy śnieżnej.",
    image: "r05_stacja_neumayer.jpg"
  },
  {
    id: "R05_BAD_10",
    section: "Badania polarne",
    type: "sequence",
    prompt: "Ułóż wydarzenia związane z rozwojem badań polarnych od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "Roald Amundsen zdobywa biegun południowy",
      "Henryk Arctowski i Antoni Dobrowolski uczestniczą w wyprawie antarktycznej",
      "intensywny rozwój badań po II wojnie światowej",
      "Robert Edwin Peary zostaje uznany za zdobywcę bieguna północnego",
      "od początku lat 60. głównym celem wypraw stają się badania naukowe"
    ],
    answer: [
      "Henryk Arctowski i Antoni Dobrowolski uczestniczą w wyprawie antarktycznej",
      "Robert Edwin Peary zostaje uznany za zdobywcę bieguna północnego",
      "Roald Amundsen zdobywa biegun południowy",
      "intensywny rozwój badań po II wojnie światowej",
      "od początku lat 60. głównym celem wypraw stają się badania naukowe"
    ],
    explanation: "Wyprawa Arctowskiego i Dobrowolskiego odbyła się w 1898 r., Peary dotarł daleko na północ w 1909 r., Amundsen zdobył biegun południowy w 1911 r., a późniejsze etapy to rozwój badań po II wojnie i zmiana ich celu na początku lat 60."
  },
  {
    id: "R05_POL_01",
    section: "Polacy i status prawny",
    type: "single_choice",
    prompt: "Gdzie znajduje się Polska Stacja Antarktyczna im. H. Arctowskiego?",
    options: [
      "na Wyspie Króla Jerzego",
      "na Spitsbergenie Zachodnim",
      "we wnętrzu Grenlandii",
      "na biegunie południowym",
      "na Półwyspie Kolskim",
      "na północy Alaski"
    ],
    answer: 0,
    explanation: "Polska Stacja Antarktyczna im. H. Arctowskiego leży na Wyspie Króla Jerzego w archipelagu Szetlandów Południowych.",
    image: "r05_stacja_arctowskiego.jpg"
  },
  {
    id: "R05_POL_02",
    section: "Polacy i status prawny",
    type: "multi_select",
    prompt: "Zaznacz osoby, które znacząco przyczyniły się do poznania obszarów okołobiegunowych.",
    options: ["Henryk Arctowski", "Antoni Dobrowolski", "Marek Kamiński", "Paweł Strzelecki", "Tony Halik", "Jacek Pałkiewicz"],
    answer: [0, 1, 2],
    explanation: "Do najbardziej znanych polskich badaczy i podróżników związanych z obszarami polarnymi należą Henryk Arctowski, Antoni Dobrowolski i Marek Kamiński."
  },
  {
    id: "R05_POL_03",
    section: "Polacy i status prawny",
    type: "true_false",
    prompt: "Marek Kamiński jako pierwszy człowiek na świecie zdobył oba bieguny Ziemi w ciągu jednego roku.",
    options: null,
    answer: true,
    explanation: "Marek Kamiński jako pierwszy człowiek na świecie zdobył w jednym roku zarówno biegun północny, jak i południowy."
  },
  {
    id: "R05_POL_04",
    section: "Polacy i status prawny",
    type: "fill_in",
    prompt: "Układ Antarktyczny podpisano w roku __________ w __________, a protokół o ochronie środowiska w roku __________ w __________.",
    options: null,
    answer: ["1959", "Waszyngtonie", "1991", "Madrycie"],
    altAnswers: [
      ["1959", "1959 r."],
      ["Waszyngtonie", "Waszyngton"],
      ["1991", "1991 r."],
      ["Madrycie", "Madryt"]
    ],
    explanation: "Układ Antarktyczny podpisano w 1959 r. w Waszyngtonie, a protokół madrycki w 1991 r. w Madrycie.",
    image: "r05_uklad_antarktyczny.jpg"
  },
  {
    id: "R05_POL_05",
    section: "Polacy i status prawny",
    type: "riddle",
    prompt: "Jak określa się pięć państw mających terytoria sięgające Oceanu Arktycznego: Rosję, Stany Zjednoczone, Kanadę, Danię i Norwegię?",
    options: null,
    answer: "arktyczna piątka",
    altAnswers: ["arktyczna piątka", "Arktyczna Piątka"],
    explanation: "Rosja, Stany Zjednoczone, Kanada, Dania i Norwegia są określane jako arktyczna piątka."
  },
  {
    id: "R05_POL_06",
    section: "Polacy i status prawny",
    type: "match",
    prompt: "Połącz umowę z właściwym postanowieniem.",
    options: null,
    left: ["Układ Antarktyczny", "protokół madrycki"],
    right: [
      "Antarktyka jako obszar międzynarodowy i swoboda badań naukowych",
      "zakaz wydobywania surowców co najmniej do 2048 r. i ochrona środowiska"
    ],
    answer: {
      "Układ Antarktyczny": "Antarktyka jako obszar międzynarodowy i swoboda badań naukowych",
      "protokół madrycki": "zakaz wydobywania surowców co najmniej do 2048 r. i ochrona środowiska"
    },
    explanation: "Układ Antarktyczny uregulował status regionu i zagwarantował swobodę badań, a protokół madrycki wzmocnił ochronę środowiska, między innymi zakazując wydobycia surowców co najmniej do 2048 r."
  },
  {
    id: "R05_POL_07",
    section: "Polacy i status prawny",
    type: "sort",
    prompt: "Przyporządkuj działania do kategorii zgodnie z zasadami obowiązującymi w Antarktyce.",
    options: null,
    items: [
      "prowadzenie badań naukowych",
      "wydobywanie surowców mineralnych",
      "składowanie odpadów",
      "zgłaszanie nowych roszczeń terytorialnych"
    ],
    categories: ["dozwolone", "zakazane lub wykluczone"],
    answer: {
      dozwolone: ["prowadzenie badań naukowych"],
      "zakazane lub wykluczone": ["wydobywanie surowców mineralnych", "składowanie odpadów", "zgłaszanie nowych roszczeń terytorialnych"]
    },
    explanation: "W Antarktyce można prowadzić badania naukowe, ale zakazane jest wydobywanie surowców i składowanie odpadów, a państwa-strony zrzekły się zgłaszania nowych roszczeń terytorialnych."
  },
  {
    id: "R05_POL_08",
    section: "Polacy i status prawny",
    type: "odd_one_out",
    prompt: "Wskaż państwo, które nie należy do arktycznej piątki: Rosja, Stany Zjednoczone, Kanada, Dania, Norwegia, Niemcy.",
    options: null,
    answer: "Niemcy",
    explanation: "Arktyczną piątkę tworzą Rosja, Stany Zjednoczone, Kanada, Dania i Norwegia."
  },
  {
    id: "R05_POL_09",
    section: "Polacy i status prawny",
    type: "scenario",
    prompt: "Państwo chce rozpocząć wydobycie węgla kamiennego na Antarktydzie. Która odpowiedź najlepiej opisuje tę sytuację?",
    options: [
      "wydobycie jest objęte zakazem",
      "wydobycie jest dozwolone jako badanie naukowe",
      "wydobycie jest dozwolone po udostępnieniu wyników badań",
      "wydobycie jest dozwolone, ponieważ Antarktyka jest obszarem międzynarodowym",
      "wydobycie jest dozwolone po zgłoszeniu roszczenia terytorialnego",
      "wydobycie jest dozwolone w ramach swobody badań naukowych"
    ],
    answer: 0,
    explanation: "Umowy międzynarodowe dotyczące Antarktyki zakazują wydobywania surowców mineralnych; protokół madrycki utrzymuje ten zakaz co najmniej do 2048 r."
  },
  {
    id: "R05_POL_10",
    section: "Polacy i status prawny",
    type: "sequence",
    prompt: "Ułóż wydarzenia od najwcześniejszego do najpóźniejszego.",
    options: null,
    items: [
      "podpisanie protokołu madryckiego",
      "założenie Polskiej Stacji Antarktycznej im. H. Arctowskiego",
      "podpisanie Układu Antarktycznego",
      "rok 2048 — koniec minimalnego okresu obowiązywania zakazu wydobycia surowców z protokołu madryckiego"
    ],
    answer: [
      "podpisanie Układu Antarktycznego",
      "założenie Polskiej Stacji Antarktycznej im. H. Arctowskiego",
      "podpisanie protokołu madryckiego",
      "rok 2048 — koniec minimalnego okresu obowiązywania zakazu wydobycia surowców z protokołu madryckiego"
    ],
    explanation: "Układ Antarktyczny podpisano w 1959 r., stację Arctowskiego założono w 1977 r., protokół madrycki podpisano w 1991 r., a zakaz wydobycia surowców ma obowiązywać co najmniej do 2048 r."
  },
  {
    id: "R05_HARD_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który zestaw poprawnie podaje typową grubość paku lodowego i jego przybliżoną powierzchnię latem oraz zimą?",
    options: [
      "2-5 m; około 8 mln km² latem i 11 mln km² zimą",
      "20-50 m; około 11 mln km² latem i 8 mln km² zimą",
      "2-5 m; około 14 mln km² latem i 50 mln km² zimą",
      "1880 m; około 8 mln km² latem i 11 mln km² zimą",
      "3500 m; około 8 mln km² latem i 14 mln km² zimą",
      "4800 m; około 11 mln km² latem i 8 mln km² zimą"
    ],
    answer: 0,
    explanation: "Grubość paku lodowego wynosi zwykle 2-5 m, a jego powierzchnia zmienia się od około 8 mln km² latem do około 11 mln km² zimą."
  },
  {
    id: "R05_HARD_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz kryteria, według których można wyznaczać granicę Arktyki.",
    options: [
      "koło podbiegunowe północne",
      "izoterma +10°C w najcieplejszym miesiącu",
      "północna granica lasów iglastych",
      "zasięg zlodzenia na morzach",
      "równik",
      "południk 0°"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Granica Arktyki może być wyznaczana astronomicznie przez koło podbiegunowe, klimatycznie przez izotermę +10°C w najcieplejszym miesiącu oraz botanicznie przez północną granicę lasów i zasięg zlodzenia mórz."
  },
  {
    id: "R05_HARD_03",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Lądolód pokrywa około __________% powierzchni Antarktydy, ma średnią grubość __________ m i zawiera prawie __________% światowych zasobów wody słodkiej.",
    options: null,
    answer: ["99,5", "1880", "75"],
    altAnswers: [
      ["99,5", "99.5", "99,5%"],
      ["1880", "1880 m"],
      ["75", "75%"]
    ],
    explanation: "Lądolód pokrywa około 99,5% Antarktydy, ma średnią grubość 1880 m i stanowi prawie 75% światowych zasobów wody słodkiej."
  },
  {
    id: "R05_HARD_04",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jak nazywa się najwyższy szczyt Antarktydy, mający 4892 m n.p.m.?",
    options: null,
    answer: "Masyw Vinsona",
    altAnswers: ["Masyw Vinsona", "Vinson", "Mount Vinson"],
    explanation: "Najwyższym szczytem Antarktydy jest Masyw Vinsona w Górach Ellswortha, osiągający 4892 m n.p.m."
  },
  {
    id: "R05_HARD_05",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz obszar lub pokrywę lodową z właściwą wielkością.",
    options: null,
    left: ["Antarktyda", "Antarktyka", "lądolód Grenlandii"],
    right: ["około 14 mln km²", "ponad 50 mln km²", "ponad 1,8 mln km²"],
    answer: {
      Antarktyda: "około 14 mln km²",
      Antarktyka: "ponad 50 mln km²",
      "lądolód Grenlandii": "ponad 1,8 mln km²"
    },
    explanation: "Antarktyda ma około 14 mln km², cała Antarktyka ponad 50 mln km², a lądolód Grenlandii ponad 1,8 mln km²."
  },
  {
    id: "R05_HARD_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy prowadzące do powstania góry lodowej u wybrzeży Antarktydy.",
    options: null,
    items: [
      "od lodowca szelfowego odrywa się góra lodowa",
      "lód wypływa na powierzchnię w pewnej odległości od brzegu",
      "masy lodu spływają z wnętrza kontynentu ku wybrzeżu",
      "powstaje lodowiec szelfowy",
      "lód wchodzi do morza i przemieszcza się przy dnie"
    ],
    answer: [
      "masy lodu spływają z wnętrza kontynentu ku wybrzeżu",
      "lód wchodzi do morza i przemieszcza się przy dnie",
      "lód wypływa na powierzchnię w pewnej odległości od brzegu",
      "powstaje lodowiec szelfowy",
      "od lodowca szelfowego odrywa się góra lodowa"
    ],
    explanation: "Lądolód spływa ku wybrzeżu, wchodzi do morza, następnie wypływa na powierzchnię, tworzy lodowiec szelfowy, a z jego krawędzi odrywają się góry lodowe."
  },
  {
    id: "R05_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Dlaczego Antarktyda bywa nazywana lodową pustynią?",
    options: [
      "we wnętrzu roczna suma opadów jest bardzo mała i nie przekracza 100 mm",
      "niemal całą powierzchnię pokrywa lądolód",
      "średnia wysokość kontynentu wynosi 2030 m n.p.m.",
      "zanotowano tam temperaturę -89,2°C",
      "występują tam bardzo silne wiatry",
      "występują tam dzień polarny i noc polarna"
    ],
    answer: 0,
    explanation: "Mimo ogromnej pokrywy lodowej wnętrze Antarktydy otrzymuje bardzo mało opadów, poniżej 100 mm rocznie, czyli mniej niż niektóre części Sahary."
  },
  {
    id: "R05_HARD_08",
    section: "Super trudne",
    type: "scenario",
    prompt: "Dwie stacje na Antarktydzie leżą w różnych warunkach: jedna we wnętrzu kontynentu, druga przy wybrzeżu. Które porównanie ich klimatu jest prawidłowe?",
    options: [
      "wnętrze ma surowy klimat kontynentalny, a wybrzeże łagodniejszy klimat o cechach morskich",
      "wnętrze ma klimat morski, a wybrzeże kontynentalny",
      "oba miejsca mają identyczny klimat",
      "wybrzeże jest zawsze chłodniejsze od wnętrza",
      "wnętrze nie ma ujemnych temperatur",
      "wybrzeże nie doświadcza wiatrów"
    ],
    answer: 0,
    explanation: "Wnętrze Antarktydy odznacza się bardzo surowym klimatem kontynentalnym, natomiast wybrzeża mają klimat nieco łagodniejszy, o cechach morskich."
  },
  {
    id: "R05_HARD_09",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Zaznacz miejsca i rodzaje działalności gospodarczej wywierające presję na środowisko Arktyki.",
    options: [
      "wydobycie ropy na północy Alaski",
      "kopalnie niklu i fosforytów na Półwyspie Kolskim",
      "kopalnie węgla kamiennego na Spitsbergenie",
      "koncentracja przemysłu na północnej Syberii",
      "wydobycie węgla na Antarktydzie",
      "składowanie odpadów na Wyspie Króla Jerzego"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Przykłady presji gospodarczej w Arktyce obejmują północ Alaski, Półwysep Kolski, Spitsbergen i przemysłowe obszary północnej Syberii."
  },
  {
    id: "R05_HARD_10",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Podczas wyprawy na biegun południowy Marek Kamiński pokonał bez pomocy z zewnątrz około __________ km, a dotarcie do celu zajęło mu __________ dni.",
    options: null,
    answer: ["1400", "53"],
    altAnswers: [
      ["1400", "1400 km"],
      ["53", "53 dni"]
    ],
    explanation: "W wyprawie na biegun południowy Marek Kamiński pokonał około 1400 km i dotarł do celu po 53 dniach walki z mrozem i wiatrem."
  },
  {
    id: "R05_HARD_11",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz polarnika z właściwą informacją.",
    options: null,
    left: ["Robert Edwin Peary", "Roald Amundsen", "Marek Kamiński", "Henryk Arctowski i Antoni Dobrowolski"],
    right: [
      "został uznany za zdobywcę bieguna północnego mimo pomyłki około 30 km",
      "stanął na biegunie południowym 14 grudnia 1911 r.",
      "zdobył oba bieguny w ciągu jednego roku",
      "uczestniczyli w wyprawie antarktycznej w 1898 r."
    ],
    answer: {
      "Robert Edwin Peary": "został uznany za zdobywcę bieguna północnego mimo pomyłki około 30 km",
      "Roald Amundsen": "stanął na biegunie południowym 14 grudnia 1911 r.",
      "Marek Kamiński": "zdobył oba bieguny w ciągu jednego roku",
      "Henryk Arctowski i Antoni Dobrowolski": "uczestniczyli w wyprawie antarktycznej w 1898 r."
    },
    explanation: "Peary został uznany za zdobywcę bieguna północnego mimo błędu około 30 km, Amundsen zdobył biegun południowy w 1911 r., Kamiński oba bieguny w jednym roku, a Arctowski i Dobrowolski uczestniczyli w wyprawie z 1898 r."
  },
  {
    id: "R05_HARD_12",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do postanowień chroniących środowisko Antarktyki: zakaz wydobywania surowców, zakaz składowania odpadów, ochrona fauny i flory, podział kontynentu między siedem państw.",
    options: null,
    answer: "podział kontynentu między siedem państw",
    explanation: "Układ Antarktyczny i protokół madrycki chronią środowisko, a Antarktyka pozostaje obszarem międzynarodowym, niepodzielonym między państwa."
  },
  {
    id: "R05_HARD_13",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj informacje do sytuacji prawnej Arktyki albo Antarktyki.",
    options: null,
    items: [
      "brak jednej umowy międzynarodowej regulującej status",
      "roszczenia państw arktycznej piątki poza ich strefą ekonomiczną",
      "obszar międzynarodowy",
      "zakaz wydobywania surowców mineralnych",
      "swoboda prowadzenia badań naukowych"
    ],
    categories: ["Arktyka", "Antarktyka"],
    answer: {
      Arktyka: ["brak jednej umowy międzynarodowej regulującej status", "roszczenia państw arktycznej piątki poza ich strefą ekonomiczną"],
      Antarktyka: ["obszar międzynarodowy", "zakaz wydobywania surowców mineralnych", "swoboda prowadzenia badań naukowych"]
    },
    explanation: "Status Arktyki nie jest regulowany jednym traktatem i występują tam roszczenia państw, natomiast Antarktyka ma status międzynarodowy, jest chroniona przed eksploatacją surowców i pozostaje otwarta dla badań."
  },
  {
    id: "R05_HARD_14",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż wydarzenia rocznego cyklu oświetlenia na biegunie północnym od marca do grudnia.",
    options: null,
    items: [
      "22 grudnia trwa noc polarna",
      "23 września rozpoczyna się noc polarna",
      "21 marca rozpoczyna się dzień polarny",
      "22 czerwca Słońce góruje najwyżej"
    ],
    answer: [
      "21 marca rozpoczyna się dzień polarny",
      "22 czerwca Słońce góruje najwyżej",
      "23 września rozpoczyna się noc polarna",
      "22 grudnia trwa noc polarna"
    ],
    explanation: "Na biegunie północnym dzień polarny zaczyna się około 21 marca, Słońce góruje najwyżej około 22 czerwca, a około 23 września rozpoczyna się noc polarna, która trwa także 22 grudnia."
  }
];

const KID_PROMPTS = {
  R05_POZ_01: "Co należy do Arktyki?",
  R05_POZ_09: "Jak nazywa się obszar wokół bieguna południowego?",
  R05_KLI_10: "Kto mieszka na wschodnim i zachodnim wybrzeżu Grenlandii?",
  R05_ZMI_06: "Połącz każde zjawisko z jego skutkiem.",
  R05_BAD_09: "Po co stacja Neumayer III ma podnośniki?",
  R05_POL_07: "Podziel działania na dozwolone i zakazane w Antarktyce.",
  R05_HARD_06: "Ułóż po kolei, jak powstaje góra lodowa.",
  R05_HARD_08: "Gdzie klimat jest surowszy: we wnętrzu Antarktydy czy na wybrzeżu?",
  R05_HARD_11: "Połącz polarnika z jego osiągnięciem.",
  R05_HARD_13: "Podziel informacje na dotyczące Arktyki i Antarktyki."
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Obszary okołobiegunowe",
  icon: "🧊",
  sectionOrder: ["Położenie i pokrywy lodowe", "Klimat, fauna i ludność", "Zmiany w środowisku", "Badania polarne", "Polacy i status prawny"],
  sectionIcons: {
    "Położenie i pokrywy lodowe": "🧭",
    "Klimat, fauna i ludność": "🐧",
    "Zmiany w środowisku": "🌡️",
    "Badania polarne": "🔬",
    "Polacy i status prawny": "🇵🇱"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
