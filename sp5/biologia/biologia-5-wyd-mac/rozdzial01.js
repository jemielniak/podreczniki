const ALL_EXERCISES = [
  {
    id: "R01_WSO_01",
    section: "W świecie organizmów",
    type: "single_choice",
    prompt: "Na ilustracji widać bobra. Który dział biologii zajmuje się badaniem życia takich zwierząt?",
    image: "/img/bbt_r01_bobr_organizm.jpg",
    options: ["zoologia", "botanika", "mikrobiologia", "systematyka"],
    answer: 0,
    explanation: "Zoologia zajmuje się zwierzętami. Bóbr jest zwierzęciem, więc bada go zoolog."
  },
  {
    id: "R01_WSO_02",
    section: "W świecie organizmów",
    type: "match",
    prompt: "Połącz dział biologii z tym, czym się zajmuje.",
    options: null,
    left: ["zoolog", "botanik", "ekolog", "mikrobiolog", "paleobiolog"],
    right: [
      "zwierzęta",
      "rośliny",
      "zależności między organizmami i środowiskiem",
      "bardzo małe organizmy, np. bakterie",
      "organizmy dawno wymarłe"
    ],
    answer: {
      zoolog: "zwierzęta",
      botanik: "rośliny",
      ekolog: "zależności między organizmami i środowiskiem",
      mikrobiolog: "bardzo małe organizmy, np. bakterie",
      paleobiolog: "organizmy dawno wymarłe"
    },
    explanation: "Różni biolodzy badają różne grupy organizmów albo zależności między nimi."
  },
  {
    id: "R01_WSO_03",
    section: "W świecie organizmów",
    type: "true_false",
    prompt: "Biologia zdobywa wiedzę głównie dzięki doświadczeniom i obserwacjom.",
    options: null,
    answer: true,
    explanation: "To prawda. Biologia jest nauką doświadczalną, a obserwacje też są w niej bardzo ważne."
  },
  {
    id: "R01_WSO_04",
    section: "W świecie organizmów",
    type: "fill_in",
    prompt: "Biologia bada organizmy __________ i __________.",
    options: null,
    answer: ["wymarłe", "żyjące obecnie"],
    altAnswers: [
      ["wymarłe", "wymarłych", "wymarłymi"],
      ["żyjące obecnie", "żyjące", "obecnie żyjące", "współczesne"]
    ],
    explanation: "Biologów interesują organizmy, które żyły dawniej, i te, które żyją teraz."
  },
  {
    id: "R01_WSO_05",
    section: "W świecie organizmów",
    type: "single_choice",
    prompt: "Który zestaw najlepiej pokazuje wspólne potrzeby życiowe organizmów?",
    options: [
      "woda, pokarm i odpowiednie warunki otoczenia",
      "telefon, prąd i internet",
      "farby, papier i nożyczki",
      "piłka, rower i hulajnoga"
    ],
    answer: 0,
    explanation: "Wszystkie organizmy potrzebują wody, pokarmu i odpowiednich warunków, żeby przeżyć i działać."
  },
  {
    id: "R01_WSO_06",
    section: "W świecie organizmów",
    type: "multi_select",
    prompt: "Zaznacz czynności, które należą do podstawowych czynności życiowych organizmów.",
    image: "/img/bbt_r01_czynnosci_zyciowe_kot.jpg",
    options: ["odżywianie", "oddychanie", "wzrost", "rozmnażanie", "wysyłanie wiadomości"],
    answer: [0, 1, 2, 3],
    explanation: "Organizmy odżywiają się, oddychają, rosną i rozmnażają. Wysyłanie wiadomości nie jest czynnością życiową."
  },
  {
    id: "R01_WSO_07",
    section: "W świecie organizmów",
    type: "scenario",
    prompt: "Kasia ogląda ilustrację z eugleną i zwierzętami domowymi. Chce wskazać organizm zbudowany tylko z jednej komórki. Co powinna wybrać?",
    image: "/img/bbt_r01_jedno_i_wielokomorkowe.jpg",
    options: ["euglenę", "kota", "psa", "królika"],
    answer: 0,
    explanation: "Euglena jest organizmem jednokomórkowym. Zwierzęta domowe są wielokomórkowe."
  },
  {
    id: "R01_WSO_08",
    section: "W świecie organizmów",
    type: "sequence",
    prompt: "Ułóż od najmniejszego poziomu budowy do największego.",
    image: "/img/bbt_r01_hierarchia_budowy.jpg",
    options: null,
    items: ["układ narządów", "komórka", "narząd", "tkanka"],
    answer: ["komórka", "tkanka", "narząd", "układ narządów"],
    explanation: "W organizmie wielokomórkowym komórki tworzą tkanki, tkanki tworzą narządy, a narządy tworzą układy narządów."
  },
  {
    id: "R01_BO_01",
    section: "Budowa organizmów",
    type: "scenario",
    prompt: "Na ilustracji pokazano kilka typów komórek. Które komórki mają charakterystyczne wypustki i rozgałęzienia?",
    image: "/img/bbt_r01_ksztalty_komorek.jpg",
    options: ["komórki nerwowe", "komórki jelita", "komórki wątroby", "komórki serca"],
    answer: 0,
    explanation: "Komórki nerwowe mają długie wypustki i rozgałęzienia, dzięki którym mogą przekazywać informacje."
  },
  {
    id: "R01_BO_02",
    section: "Budowa organizmów",
    type: "multi_select",
    prompt: "Zaznacz elementy charakterystyczne dla komórki roślinnej.",
    options: ["chloroplast", "ściana komórkowa", "duża wakuola", "rzęska"],
    answer: [0, 1, 2],
    explanation: "Komórkę roślinną wyróżniają chloroplasty, ściana komórkowa i duża wakuola."
  },
  {
    id: "R01_BO_03",
    section: "Budowa organizmów",
    type: "sort",
    prompt: "Przyporządkuj elementy do właściwej kategorii.",
    options: null,
    items: ["błona komórkowa", "cytoplazma", "materiał genetyczny", "jądro komórkowe", "mitochondrium", "chloroplast"],
    categories: ["występuje w komórce bakteryjnej", "brak w komórce bakteryjnej"],
    answer: {
      "występuje w komórce bakteryjnej": ["błona komórkowa", "cytoplazma", "materiał genetyczny"],
      "brak w komórce bakteryjnej": ["jądro komórkowe", "mitochondrium", "chloroplast"]
    },
    explanation: "Komórka bakteryjna ma błonę, cytoplazmę i materiał genetyczny, ale nie ma jądra, mitochondriów ani chloroplastów."
  },
  {
    id: "R01_BO_04",
    section: "Budowa organizmów",
    type: "fill_in",
    prompt: "We wszystkich rodzajach komórek występują __________, __________ i materiał genetyczny.",
    options: null,
    answer: ["cytoplazma", "błona komórkowa"],
    altAnswers: [
      ["cytoplazma", "cytoplazmę", "cytoplazmie"],
      ["błona komórkowa", "błona", "błonę komórkową", "błonie komórkowej"]
    ],
    explanation: "Komórki roślinne, zwierzęce i bakteryjne mają cytoplazmę, błonę komórkową oraz materiał genetyczny."
  },
  {
    id: "R01_BO_05",
    section: "Budowa organizmów",
    type: "single_choice",
    prompt: "Który element komórki roślinnej pomaga roślinie wykorzystywać energię światła?",
    image: "/img/bbt_r01_komorka_roslinna.jpg",
    options: ["chloroplast", "mitochondrium", "wakuola", "ściana komórkowa"],
    answer: 0,
    explanation: "Chloroplast to miejsce fotosyntezy. To w nim roślina wykorzystuje energię światła."
  },
  {
    id: "R01_BO_06",
    section: "Budowa organizmów",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: chloroplast, mitochondrium, wakuola, skrzela.",
    options: null,
    answer: "skrzela",
    explanation: "Skrzela są narządem, a pozostałe wyrazy oznaczają elementy komórki."
  },
  {
    id: "R01_BO_07",
    section: "Budowa organizmów",
    type: "true_false",
    prompt: "W komórce bakteryjnej materiał genetyczny znajduje się bezpośrednio w cytoplazmie.",
    options: null,
    answer: true,
    explanation: "To prawda. Komórka bakteryjna nie ma jądra komórkowego, więc materiał genetyczny leży w cytoplazmie."
  },
  {
    id: "R01_BO_08",
    section: "Budowa organizmów",
    type: "single_choice",
    prompt: "Spójrz na ilustrację. Która komórka nie ma jądra komórkowego?",
    image: "/img/bbt_r01_komorka_zwierzeca_i_bakteryjna.jpg",
    options: ["komórka bakteryjna", "komórka zwierzęca", "obie komórki", "żadna z nich"],
    answer: 0,
    explanation: "Jądra komórkowego nie ma komórka bakteryjna. Komórka zwierzęca ma jądro."
  },
  {
    id: "R01_BO_09",
    section: "Budowa organizmów",
    type: "match",
    prompt: "Połącz substancję z jej główną rolą.",
    options: null,
    left: ["białka", "cukry", "tłuszcze", "kwasy nukleinowe", "woda", "sole mineralne"],
    right: [
      "podstawowy budulec organizmu",
      "podstawowe źródło energii",
      "zapas energii i ochrona przed utratą ciepła",
      "instrukcja budowy i działania komórki",
      "ułatwia transport substancji i przebieg procesów życiowych",
      "między innymi budują kości"
    ],
    answer: {
      "białka": "podstawowy budulec organizmu",
      cukry: "podstawowe źródło energii",
      "tłuszcze": "zapas energii i ochrona przed utratą ciepła",
      "kwasy nukleinowe": "instrukcja budowy i działania komórki",
      woda: "ułatwia transport substancji i przebieg procesów życiowych",
      "sole mineralne": "między innymi budują kości"
    },
    explanation: "Różne związki chemiczne pełnią w organizmie różne zadania: jedne budują, inne dostarczają energii albo pomagają w działaniu komórek."
  },
  {
    id: "R01_BO_10",
    section: "Budowa organizmów",
    type: "multi_select",
    prompt: "Zaznacz pierwiastki biogenne.",
    options: [
      "węgiel",
      "tlen",
      "wodór",
      "azot",
      "siarka",
      "fosfor",
      "złoto",
      "srebro"
    ],
    answer: [0, 1, 2, 3, 4, 5],
    explanation: "Do pierwiastków biogennych należą węgiel, tlen, wodór, azot, siarka i fosfor. To one budują najważniejsze związki chemiczne organizmów."
  },
  {
    id: "R01_OM_01",
    section: "Obserwacje mikroskopowe",
    type: "single_choice",
    prompt: "Jak nazywa się przyrząd pokazany na ilustracji?",
    image: "/img/bbt_r01_mikroskop_swietlny.jpg",
    options: ["mikroskop", "teleskop", "termometr", "waga"],
    answer: 0,
    explanation: "To mikroskop świetlny. Używa się go do oglądania bardzo małych obiektów."
  },
  {
    id: "R01_OM_02",
    section: "Obserwacje mikroskopowe",
    type: "match",
    prompt: "Połącz element mikroskopu z jego funkcją.",
    options: null,
    left: ["okular", "obiektyw", "stolik", "źródło światła"],
    right: ["umożliwia obserwację obrazu", "powiększa oglądany obiekt", "tu umieszcza się preparat", "oświetla preparat"],
    answer: {
      okular: "umożliwia obserwację obrazu",
      obiektyw: "powiększa oglądany obiekt",
      stolik: "tu umieszcza się preparat",
      "źródło światła": "oświetla preparat"
    },
    explanation: "Każda część mikroskopu ma inne zadanie. Dzięki nim obraz jest widoczny i ostry."
  },
  {
    id: "R01_OM_03",
    section: "Obserwacje mikroskopowe",
    type: "sequence",
    prompt: "Ułóż podstawowe kroki korzystania z mikroskopu we właściwej kolejności.",
    options: null,
    items: [
      "włącz światło i ustaw preparat w polu widzenia",
      "ustaw obiektyw o najmniejszym powiększeniu",
      "połóż preparat na stoliku",
      "wyostrz obraz śrubą mikrometryczną",
      "najpierw znajdź obraz śrubą makrometryczną"
    ],
    answer: [
      "połóż preparat na stoliku",
      "ustaw obiektyw o najmniejszym powiększeniu",
      "włącz światło i ustaw preparat w polu widzenia",
      "najpierw znajdź obraz śrubą makrometryczną",
      "wyostrz obraz śrubą mikrometryczną"
    ],
    explanation: "Najpierw przygotowuje się mikroskop i preparat, potem znajduje obraz, a na końcu ustawia go dokładnie."
  },
  {
    id: "R01_OM_04",
    section: "Obserwacje mikroskopowe",
    type: "true_false",
    prompt: "W preparacie mikroskopowym oglądany obiekt znajduje się między szkiełkiem podstawowym a nakrywkowym.",
    options: null,
    answer: true,
    explanation: "To prawda. Tak właśnie przygotowuje się prosty preparat do obserwacji."
  },
  {
    id: "R01_OM_05",
    section: "Obserwacje mikroskopowe",
    type: "fill_in",
    prompt: "Do prostego preparatu mikroskopowego potrzebne są szkiełko __________ i szkiełko __________.",
    options: null,
    answer: ["podstawowe", "nakrywkowe"],
    altAnswers: [
      ["podstawowe", "podstawowym", "podstawowego"],
      ["nakrywkowe", "nakrywkowym", "nakrywkowego"]
    ],
    explanation: "Obiekt kładzie się na szkiełku podstawowym, a potem przykrywa szkiełkiem nakrywkowym."
  },
  {
    id: "R01_OM_06",
    section: "Obserwacje mikroskopowe",
    type: "scenario",
    prompt: "Na ilustracji widać dwa rodzaje szkiełek. Które z nich przykrywa obiekt i jest mniejsze?",
    image: "/img/bbt_r01_preparat_mikroskopowy.jpg",
    options: ["szkiełko nakrywkowe", "szkiełko podstawowe", "obiektyw", "okular"],
    answer: 0,
    explanation: "Mniejsze szkiełko nakrywkowe przykrywa obiekt umieszczony na szkiełku podstawowym."
  },
  {
    id: "R01_OM_07",
    section: "Obserwacje mikroskopowe",
    type: "multi_select",
    prompt: "Zaznacz zasady bezpiecznego i poprawnego korzystania z mikroskopu.",
    options: [
      "obchodzę się z nim delikatnie",
      "zaczynam od największego powiększenia",
      "na początku ustawiam najmniejszy obiektyw",
      "ostrożnie reguluję ostrość śrubami",
      "kręcę wszystkim naraz bardzo szybko"
    ],
    answer: [0, 2, 3],
    explanation: "Z mikroskopem trzeba obchodzić się delikatnie, zaczynać od najmniejszego powiększenia i spokojnie ustawiać ostrość."
  },
  {
    id: "R01_ODZ_01",
    section: "Odżywianie się organizmów",
    type: "single_choice",
    prompt: "Człowiek należy do organizmów:",
    options: ["cudzożywnych", "samożywnych", "jednokomórkowych", "beztlenowych"],
    answer: 0,
    explanation: "Człowiek nie wytwarza sam pokarmu z prostych substancji. Musi go pobierać, więc jest cudzożywny."
  },
  {
    id: "R01_ODZ_02",
    section: "Odżywianie się organizmów",
    type: "match",
    prompt: "Połącz pojęcie z właściwym opisem.",
    options: null,
    left: ["organizm samożywny", "organizm cudzożywny", "chlorofil", "chloroplast"],
    right: [
      "sam wytwarza pokarm",
      "pobiera pokarm z otoczenia",
      "barwnik pochłaniający światło",
      "miejsce, w którym zachodzi fotosynteza"
    ],
    answer: {
      "organizm samożywny": "sam wytwarza pokarm",
      "organizm cudzożywny": "pobiera pokarm z otoczenia",
      chlorofil: "barwnik pochłaniający światło",
      chloroplast: "miejsce, w którym zachodzi fotosynteza"
    },
    explanation: "Rośliny są samożywne, zwierzęta cudzożywne, a chlorofil i chloroplasty pomagają roślinom w fotosyntezie."
  },
  {
    id: "R01_ODZ_03",
    section: "Odżywianie się organizmów",
    type: "single_choice",
    prompt: "Który gaz powstaje podczas fotosyntezy i jest uwalniany do otoczenia?",
    image: "/img/bbt_r01_fotosynteza_schemat.jpg",
    options: ["tlen", "azot", "dwutlenek węgla", "para wodna"],
    answer: 0,
    explanation: "Podczas fotosyntezy roślina wytwarza cukier i tlen. Tlen jest oddawany do otoczenia."
  },
  {
    id: "R01_ODZ_04",
    section: "Odżywianie się organizmów",
    type: "fill_in",
    prompt: "W fotosyntezie z __________ i __________ powstają __________ i __________.",
    options: null,
    answer: ["wody", "dwutlenku węgla", "cukier", "tlen"],
    altAnswers: [
      ["wody", "woda"],
      ["dwutlenku węgla", "dwutlenek węgla", "co2"],
      ["cukier", "cukru", "glukoza", "glukozę"],
      ["tlen", "tlenu", "o2"]
    ],
    explanation: "Roślina pobiera wodę i dwutlenek węgla, a przy udziale światła wytwarza cukier oraz tlen."
  },
  {
    id: "R01_ODZ_05",
    section: "Odżywianie się organizmów",
    type: "multi_select",
    prompt: "Które czynniki mogą wpływać na intensywność fotosyntezy?",
    options: ["natężenie światła", "temperatura", "dostępność wody", "dostępność soli mineralnych", "kolor zeszytu"],
    answer: [0, 1, 2, 3],
    explanation: "Na fotosyntezę wpływają warunki życia rośliny, na przykład światło, temperatura, woda i sole mineralne."
  },
  {
    id: "R01_ODZ_06",
    section: "Odżywianie się organizmów",
    type: "scenario",
    prompt: "W doświadczeniu z trzema zestawami B1, B2 i K roślina miała najwięcej światła w jednym zestawie. W którym powstanie najwięcej tlenu?",
    image: "/img/bbt_r01_doswiadczenie_fotosynteza_swiatlo.jpg",
    options: ["w zestawie B2", "w zestawie B1", "w zestawie K", "we wszystkich tyle samo"],
    answer: 0,
    explanation: "Im większe natężenie światła, tym intensywniej zachodzi fotosynteza, więc najwięcej tlenu powstanie w dobrze oświetlonym zestawie B2."
  },
  {
    id: "R01_ODZ_07",
    section: "Odżywianie się organizmów",
    type: "true_false",
    prompt: "Chlorofil pomaga roślinie pochłaniać światło potrzebne do fotosyntezy.",
    options: null,
    answer: true,
    explanation: "To prawda. Chlorofil jest barwnikiem fotosyntetycznym, który pochłania światło."
  },
  {
    id: "R01_ODZ_08",
    section: "Odżywianie się organizmów",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: światło, woda, dwutlenek węgla, skóra.",
    options: null,
    answer: "skóra",
    explanation: "Światło, woda i dwutlenek węgla są związane z fotosyntezą. Skóra nie jest potrzebna do tego procesu."
  },
  {
    id: "R01_ODD_01",
    section: "Oddychanie organizmów",
    type: "single_choice",
    prompt: "W którym elemencie komórki zachodzi oddychanie tlenowe?",
    image: "/img/bbt_r01_oddychanie_tlenowe.jpg",
    options: ["w mitochondrium", "w chloroplaście", "w ścianie komórkowej", "w wakuoli"],
    answer: 0,
    explanation: "Oddychanie tlenowe zachodzi w mitochondriach. To tam komórka uzyskuje energię z cukru."
  },
  {
    id: "R01_ODD_02",
    section: "Oddychanie organizmów",
    type: "fill_in",
    prompt: "W oddychaniu tlenowym cukier łączy się z __________, a powstają energia, __________ i __________.",
    options: null,
    answer: ["tlenem", "dwutlenek węgla", "woda"],
    altAnswers: [
      ["tlenem", "tlen", "tlenu", "o2"],
      ["dwutlenek węgla", "dwutlenku węgla", "co2"],
      ["woda", "wody"]
    ],
    explanation: "W oddychaniu tlenowym cukier reaguje z tlenem. Dzięki temu komórka uzyskuje energię, a powstają też dwutlenek węgla i woda."
  },
  {
    id: "R01_ODD_03",
    section: "Oddychanie organizmów",
    type: "true_false",
    prompt: "Fermentacja pozwala uzyskać mniej energii niż oddychanie tlenowe.",
    options: null,
    answer: true,
    explanation: "To prawda. Fermentacja uwalnia tylko część energii zawartej w cukrze."
  },
  {
    id: "R01_ODD_04",
    section: "Oddychanie organizmów",
    type: "match",
    prompt: "Połącz przykład z odpowiednim rodzajem fermentacji.",
    image: "/img/bbt_r01_fermentacja_dwa_typy.jpg",
    options: null,
    left: ["mięśnie podczas dużego wysiłku", "drożdże w cieście"],
    right: ["fermentacja mlekowa", "fermentacja alkoholowa"],
    answer: {
      "mięśnie podczas dużego wysiłku": "fermentacja mlekowa",
      "drożdże w cieście": "fermentacja alkoholowa"
    },
    explanation: "Gdy do mięśni dociera za mało tlenu, może zachodzić fermentacja mlekowa. Drożdże przeprowadzają fermentację alkoholową."
  },
  {
    id: "R01_ODD_05",
    section: "Oddychanie organizmów",
    type: "single_choice",
    prompt: "Co może zachodzić w mięśniach człowieka podczas bardzo dużego wysiłku, gdy brakuje tlenu?",
    options: ["fermentacja mlekowa", "fotosynteza", "budowa ściany komórkowej", "tworzenie chlorofilu"],
    answer: 0,
    explanation: "Przy niedoborze tlenu w mięśniach może zachodzić fermentacja mlekowa."
  },
  {
    id: "R01_ODD_06",
    section: "Oddychanie organizmów",
    type: "multi_select",
    prompt: "Zaznacz produkty fermentacji alkoholowej.",
    options: ["alkohol etylowy", "dwutlenek węgla", "energia", "chlorofil"],
    answer: [0, 1, 2],
    explanation: "W fermentacji alkoholowej powstają alkohol etylowy, dwutlenek węgla i trochę energii."
  },
  {
    id: "R01_ODD_07",
    section: "Oddychanie organizmów",
    type: "scenario",
    prompt: "Zwierzę stałocieplne znalazło się w bardzo zimnym miejscu. Dlaczego jego oddychanie może stać się intensywniejsze?",
    options: [
      "żeby wytworzyć więcej energii i ciepła",
      "żeby przeprowadzać fotosyntezę",
      "żeby zbudować ścianę komórkową",
      "żeby zamienić się w organizm jednokomórkowy"
    ],
    answer: 0,
    explanation: "Oddychanie dostarcza energii. Część tej energii ma postać ciepła, więc w chłodzie oddychanie może się nasilać."
  },
  {
    id: "R01_PSO_01",
    section: "Podział świata organizmów",
    type: "single_choice",
    prompt: "Które zdanie najlepiej wyjaśnia, czym jest gatunek?",
    image: "/img/bbt_r01_gatunek_i_podobienstwo.jpg",
    options: [
      "to grupa organizmów o wielu wspólnych cechach, przekazujących je potomstwu",
      "to każdy organizm, który potrafi latać",
      "to tylko zwierzęta mieszkające w lesie",
      "to nazwa wszystkich organizmów jednokomórkowych"
    ],
    answer: 0,
    explanation: "Gatunek to grupa organizmów podobnych do siebie, które przekazują swoje cechy potomstwu."
  },
  {
    id: "R01_PSO_02",
    section: "Podział świata organizmów",
    type: "sort",
    prompt: "Przyporządkuj organizmy do królestw.",
    options: null,
    items: ["brzoza", "muchomor", "kot", "euglena", "bakteria glebowa"],
    categories: ["rośliny", "grzyby", "zwierzęta", "protisty", "bakterie"],
    answer: {
      "rośliny": ["brzoza"],
      grzyby: ["muchomor"],
      "zwierzęta": ["kot"],
      protisty: ["euglena"],
      bakterie: ["bakteria glebowa"]
    },
    explanation: "Organizmy dzieli się na królestwa według ich cech i pokrewieństwa."
  },
  {
    id: "R01_PSO_03",
    section: "Podział świata organizmów",
    type: "fill_in",
    prompt: "Największą grupą w tej klasyfikacji jest __________, a dział biologii zajmujący się klasyfikacją organizmów to __________.",
    options: null,
    answer: ["królestwo", "systematyka"],
    altAnswers: [
      ["królestwo", "królestwem", "królestwa"],
      ["systematyka", "systematykę", "systematyce"]
    ],
    explanation: "Królestwo to największa grupa w tym szkolnym podziale, a systematyka zajmuje się porządkowaniem organizmów."
  },
  {
    id: "R01_PSO_04",
    section: "Podział świata organizmów",
    type: "sequence",
    prompt: "Ułóż poziomy klasyfikacji od najmniejszego do największego.",
    options: null,
    items: ["rodzaj", "królestwo", "gatunek", "gromada", "rząd", "rodzina"],
    answer: ["gatunek", "rodzaj", "rodzina", "rząd", "gromada", "królestwo"],
    explanation: "Najpierw jest gatunek, a potem kolejne coraz większe grupy: rodzaj, rodzina, rząd, gromada i królestwo."
  },
  {
    id: "R01_PSO_05",
    section: "Podział świata organizmów",
    type: "true_false",
    prompt: "Wszystkie gatunki żyjące dziś na Ziemi pochodzą od wspólnego przodka.",
    options: null,
    answer: true,
    explanation: "To prawda. Gatunki są ze sobą bliżej lub dalej spokrewnione, bo pochodzą od dawnych wspólnych przodków."
  },
  {
    id: "R01_PSO_06",
    section: "Podział świata organizmów",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: lis, nietoperz, delfin, brzoza.",
    options: null,
    answer: "brzoza",
    explanation: "Lis, nietoperz i delfin to zwierzęta. Brzoza jest rośliną."
  },
  {
    id: "R01_WIR_01",
    section: "Wirusy",
    type: "single_choice",
    prompt: "Dlaczego wirusów nie zalicza się do organizmów?",
    image: "/img/bbt_r01_wirusy_ksztalty.jpg",
    options: [
      "bo nie mają budowy komórkowej i nie wykonują samodzielnie czynności życiowych",
      "bo są za małe, by je nazwać organizmami",
      "bo mają tylko jeden kolor",
      "bo żyją wyłącznie w wodzie"
    ],
    answer: 0,
    explanation: "Wirusy nie mają budowy komórkowej i same nie wykonują czynności życiowych, dlatego nie zalicza się ich do organizmów."
  },
  {
    id: "R01_WIR_02",
    section: "Wirusy",
    type: "fill_in",
    prompt: "Wirus jest zbudowany z materiału __________ i osłonki __________.",
    options: null,
    answer: ["genetycznego", "białkowej"],
    altAnswers: [
      ["genetycznego", "genetyczny", "genetyczna"],
      ["białkowej", "białkowa", "z białek", "białkowej osłonki"]
    ],
    explanation: "Wirus ma materiał genetyczny otoczony osłonką z białek."
  },
  {
    id: "R01_WIR_03",
    section: "Wirusy",
    type: "multi_select",
    prompt: "Zaznacz drogi, którymi mogą rozprzestrzeniać się wirusy.",
    options: [
      "drogą powietrzno-kropelkową",
      "drogą pokarmową",
      "przez kontakt z zakażoną krwią lub drogą płciową",
      "za pośrednictwem zwierząt",
      "przez czytanie książek"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Wirusy mogą przenosić się na kilka sposobów, na przykład drogą kropelkową, pokarmową, przez krew i przez zwierzęta."
  },
  {
    id: "R01_WIR_04",
    section: "Wirusy",
    type: "true_false",
    prompt: "Szczepionki pomagają organizmowi przygotować się do walki z niektórymi wirusami.",
    options: null,
    answer: true,
    explanation: "To prawda. Szczepionki pobudzają organizm do wytworzenia odporności przeciwko określonym wirusom."
  },
  {
    id: "R01_ST_01",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Na ilustracji pokazano pierwiastki ważne podczas wysiłku. Który z nich sportowiec szczególnie traci wraz z potem?",
    image: "/img/bbt_r01_pierwiastki_dla_sportowca.jpg",
    options: ["sód", "wapń", "magnez", "fosfor"],
    answer: 0,
    explanation: "Sód jest tracony z potem, dlatego przy dużym wysiłku jego uzupełnianie może być ważne."
  },
  {
    id: "R01_ST_02",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Spójrz na ilustrację i zaznacz zdania prawdziwe.",
    image: "/img/bbt_r01_fermentacja_dwa_typy.jpg",
    options: [
      "Fermentacja mlekowa może zachodzić w mięśniach podczas dużego wysiłku.",
      "Drożdże przeprowadzają fermentację alkoholową.",
      "Oba typy fermentacji zachodzą bez udziału tlenu.",
      "W obu typach fermentacji powstaje chlorofil."
    ],
    answer: [0, 1, 2],
    explanation: "Fermentacja mlekowa może zachodzić w mięśniach, drożdże przeprowadzają fermentację alkoholową, a obie fermentacje zachodzą bez tlenu. Chlorofil nie ma z nimi związku."
  },
  {
    id: "R01_ST_03",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Który zapis pokazuje poprawną kolejność poziomów klasyfikacji od najmniejszego do największego?",
    image: "/img/bbt_r01_klasyfikacja_organizmow.jpg",
    options: [
      "gatunek → rodzaj → rodzina → rząd → gromada → królestwo",
      "królestwo → gromada → rząd → rodzina → rodzaj → gatunek",
      "rodzina → gatunek → królestwo → rząd → rodzaj → gromada",
      "gatunek → rodzina → rodzaj → rząd → królestwo → gromada"
    ],
    answer: 0,
    explanation: "W klasyfikacji zaczyna się od najmniejszej grupy, czyli gatunku, a kończy na coraz większych grupach."
  },
  {
    id: "R01_ST_04",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Na ilustracji są ptaki i ssaki. Która para jest zwykle bliżej spokrewniona?",
    image: "/img/bbt_r01_gatunek_i_podobienstwo.jpg",
    options: ["dwa ptaki", "ptak i ssak", "brzoza i ptak", "bakteria i ssak"],
    answer: 0,
    explanation: "Organizmy należące do tej samej dużej grupy, na przykład do ptaków, są zwykle bliżej spokrewnione niż organizmy z bardzo różnych grup."
  },
  {
    id: "R01_ST_05",
    section: "Super trudne",
    type: "sort",
    prompt: "Przyporządkuj organizmy do właściwego królestwa.",
    image: "/img/bbt_r01_krolestwa_organizmow.jpg",
    options: null,
    items: ["sarna", "pałeczka okrężnicy", "morszczyn", "koźlarz", "koniczyna"],
    categories: ["zwierzęta", "bakterie", "protisty", "grzyby", "rośliny"],
    answer: {
      "zwierzęta": ["sarna"],
      bakterie: ["pałeczka okrężnicy"],
      protisty: ["morszczyn"],
      grzyby: ["koźlarz"],
      "rośliny": ["koniczyna"]
    },
    explanation: "Każdy z tych organizmów należy do innego królestwa."
  },
  {
    id: "R01_ST_06",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż etapy namnażania się wirusa w komórce we właściwej kolejności.",
    image: "/img/bbt_r01_cykl_infekcji_wirusa.jpg",
    options: null,
    items: [
      "z komórki wydostają się nowe wirusy",
      "wirus wnika do komórki",
      "komórka zaczyna produkować części wirusa",
      "materiał wirusa przejmuje kontrolę nad komórką"
    ],
    answer: [
      "wirus wnika do komórki",
      "materiał wirusa przejmuje kontrolę nad komórką",
      "komórka zaczyna produkować części wirusa",
      "z komórki wydostają się nowe wirusy"
    ],
    explanation: "Najpierw wirus wnika do komórki, potem przejmuje nad nią kontrolę, komórka produkuje nowe wirusy, a na końcu wirusy się wydostają."
  },
  {
    id: "R01_ST_07",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Na ilustracji pokazano trzy różne komórki. Co mają wspólnego wszystkie te komórki?",
    image: "/img/bbt_r01_wspolne_elementy_komorki.jpg",
    options: ["błona komórkowa", "cytoplazma", "materiał genetyczny", "chloroplasty"],
    answer: [0, 1, 2],
    explanation: "Wspólne dla komórek roślinnych, zwierzęcych i bakteryjnych są błona komórkowa, cytoplazma oraz materiał genetyczny. Chloroplasty mają tylko komórki roślinne."
  },
  {
    id: "R01_ST_08",
    section: "Super trudne",
    type: "true_false",
    prompt: "Wirus może namnażać się całkowicie sam, bez żadnej komórki gospodarza.",
    options: null,
    answer: false,
    explanation: "To fałsz. Wirus potrzebuje zaatakowanej komórki, bo sam nie potrafi się namnażać."
  },
  {
    id: "R01_ST_09",
    section: "Super trudne",
    type: "fill_in",
    prompt: "W organizmie jednokomórkowym wszystkie podstawowe czynności życiowe zachodzą w __________ komórce.",
    options: null,
    answer: ["jednej"],
    altAnswers: [
      ["jednej", "jedna", "tej samej", "pojedynczej"]
    ],
    explanation: "Organizm jednokomórkowy składa się tylko z jednej komórki, więc właśnie w niej zachodzą wszystkie czynności życiowe."
  },
  {
    id: "R01_ST_10",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz proces z miejscem, w którym zachodzi.",
    options: null,
    left: ["fotosynteza", "oddychanie tlenowe", "fermentacja", "obserwacja pod mikroskopem"],
    right: ["chloroplast", "mitochondrium", "cytoplazma", "preparat mikroskopowy"],
    answer: {
      fotosynteza: "chloroplast",
      "oddychanie tlenowe": "mitochondrium",
      fermentacja: "cytoplazma",
      "obserwacja pod mikroskopem": "preparat mikroskopowy"
    },
    explanation: "Każdy z tych procesów ma swoje typowe miejsce: fotosynteza w chloroplaście, oddychanie tlenowe w mitochondrium, fermentacja w cytoplazmie, a obserwacja w preparacie."
  },
  {
    id: "R01_ST_11",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: węgiel, tlen, azot, złoto.",
    options: null,
    answer: "złoto",
    explanation: "Węgiel, tlen i azot to pierwiastki biogenne. Złoto do nich nie należy."
  },
  {
    id: "R01_ST_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Ola chce obejrzeć pod mikroskopem komórki skórki cebuli. Który zestaw rzeczy będzie najbardziej potrzebny?",
    options: [
      "mikroskop, skórka cebuli, szkiełko podstawowe, szkiełko nakrywkowe i kropla wody",
      "linijka, nożyczki i kredki",
      "mikroskop i piłka",
      "tylko zeszyt i długopis"
    ],
    answer: 0,
    explanation: "Do wykonania prostego preparatu potrzeba obiektu do obserwacji, mikroskopu, szkiełek i zwykle kropli wody."
  },
  {
    id: "R01_ST_13",
    section: "Super trudne",
    type: "multi_select",
    prompt: "W doświadczeniu z fotosyntezą wybierz zdania prawdziwe.",
    options: [
      "B1 i B2 to próby badawcze.",
      "K to próba kontrolna.",
      "Im więcej światła, tym zwykle więcej tlenu powstaje w probówce.",
      "W ciemności fotosynteza zachodzi najintensywniej."
    ],
    answer: [0, 1, 2],
    explanation: "W doświadczeniu B1 i B2 są próbami badawczymi, K jest próbą kontrolną, a większe natężenie światła zwykle zwiększa intensywność fotosyntezy."
  },
  {
    id: "R01_ST_14",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Kilka podobnych gatunków tworzy __________, a kilka podobnych rodzajów tworzy __________.",
    options: null,
    answer: ["rodzaj", "rodzinę"],
    altAnswers: [
      ["rodzaj", "rodzaju"],
      ["rodzinę", "rodzina", "rodziny"]
    ],
    explanation: "W klasyfikacji kilka podobnych gatunków łączy się w rodzaj, a kilka podobnych rodzajów w rodzinę."
  },
  {
    id: "R01_ST_15",
    section: "Super trudne",
    type: "riddle",
    prompt: "Nie mam budowy komórkowej. Żeby się rozmnożyć, muszę przejąć cudzą komórkę. Kim jestem?",
    options: null,
    answer: "wirus",
    altAnswers: ["wirus", "wirusem", "wirusa", "wirusy"],
    explanation: "Tak działa wirus. Sam nie rozmnaża się, tylko wykorzystuje zaatakowaną komórkę."
  },
  {
    id: "R01_ST_16",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jestem zielonym organellum. To we mnie roślina wytwarza cukier z udziałem światła. Kim jestem?",
    options: null,
    answer: "chloroplast",
    altAnswers: ["chloroplast", "chloroplasty", "chloroplaście", "chloroplastem"],
    explanation: "Chloroplast jest miejscem fotosyntezy w komórce roślinnej."
  },
  {
    id: "R01_ST_17",
    section: "Super trudne",
    type: "scenario",
    prompt: "Roślina przez długi czas nie ma wody. Dlaczego jej fotosynteza może wyraźnie osłabnąć?",
    options: [
      "bo do życia i do fotosyntezy potrzebuje wody",
      "bo woda zmienia się wtedy w kości",
      "bo bez wody roślina staje się wirusem",
      "bo woda jest potrzebna tylko zwierzętom"
    ],
    answer: 0,
    explanation: "Woda jest jednym z substratów fotosyntezy i jest roślinie potrzebna do prawidłowego działania."
  },
  {
    id: "R01_ST_18",
    section: "Super trudne",
    type: "true_false",
    prompt: "W bardzo silnym świetle chloroplasty mogą zmieniać położenie w komórce, żeby ograniczyć pobieranie energii.",
    options: null,
    answer: true,
    explanation: "To prawda. Chloroplasty mogą przemieszczać się w komórce zależnie od natężenia światła."
  },
  {
    id: "R01_ST_19",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz proces z produktami, które wtedy powstają.",
    options: null,
    left: ["oddychanie tlenowe", "fermentacja mlekowa", "fermentacja alkoholowa"],
    right: ["energia, dwutlenek węgla i woda", "kwas mlekowy i energia", "alkohol etylowy, dwutlenek węgla i energia"],
    answer: {
      "oddychanie tlenowe": "energia, dwutlenek węgla i woda",
      "fermentacja mlekowa": "kwas mlekowy i energia",
      "fermentacja alkoholowa": "alkohol etylowy, dwutlenek węgla i energia"
    },
    explanation: "Produkty zależą od procesu. Właśnie po nich można odróżnić oddychanie tlenowe i dwa typy fermentacji."
  },
  {
    id: "R01_ST_20",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Które zachowanie najmniej pomaga ograniczać rozprzestrzenianie się chorób wirusowych?",
    options: [
      "częste mycie rąk",
      "szczepienia",
      "używanie tej samej butelki po napoju z osobą chorą",
      "unikanie bliskiego kontaktu z chorym"
    ],
    answer: 2,
    explanation: "Wspólne używanie butelki z osobą chorą może ułatwiać przenoszenie wirusów, więc nie pomaga ograniczać zakażeń."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Podstawy biologii",
  icon: "🧬",
  sectionOrder: [
    "W świecie organizmów",
    "Budowa organizmów",
    "Obserwacje mikroskopowe",
    "Odżywianie się organizmów",
    "Oddychanie organizmów",
    "Podział świata organizmów",
    "Wirusy"
  ],
  sectionIcons: {
    "W świecie organizmów": "🌍",
    "Budowa organizmów": "🧫",
    "Obserwacje mikroskopowe": "🔬",
    "Odżywianie się organizmów": "🌿",
    "Oddychanie organizmów": "💨",
    "Podział świata organizmów": "🌳",
    Wirusy: "🦠"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
