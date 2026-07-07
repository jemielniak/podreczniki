const ALL_EXERCISES = [
  {
    id: "R01_ORG_01",
    section: "Jak są zbudowane organizmy?",
    type: "single_choice",
    prompt: "Spójrz na schemat. Który poziom budowy jest najmniejszy?",
    image: "/img/bbt_r01_poziomy_budowy.jpg",
    options: [
      "komórka",
      "tkanka",
      "narząd",
      "organizm"
    ],
    answer: 0,
    explanation: "Komórka to najprostszy i najmniejszy poziom budowy organizmu. Z komórek powstają tkanki, potem narządy, układy narządów i cały organizm."
  },
  {
    id: "R01_ORG_02",
    section: "Jak są zbudowane organizmy?",
    type: "multi_select",
    prompt: "Zaznacz czynności życiowe organizmów.",
    options: [
      "odżywianie",
      "oddychanie",
      "rozmnażanie",
      "malowanie",
      "reakcja na bodźce"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    explanation: "Organizmy odżywiają się, oddychają, rozmnażają się i reagują na bodźce. Malowanie nie jest czynnością życiową."
  },
  {
    id: "R01_ORG_03",
    section: "Jak są zbudowane organizmy?",
    type: "true_false",
    prompt: "Tkanka jest zbudowana z podobnych komórek.",
    options: null,
    answer: true,
    explanation: "To prawda. Tkanka to grupa komórek o podobnej budowie, które wykonują podobne zadania."
  },
  {
    id: "R01_ORG_04",
    section: "Jak są zbudowane organizmy?",
    type: "fill_in",
    prompt: "Organizm jest zbudowany z __________ i wykonuje podstawowe __________ życiowe.",
    options: null,
    answer: [
      "komórek",
      "czynności"
    ],
    altAnswers: [
      [
        "komórek",
        "komórki",
        "komorka",
        "komorki"
      ],
      [
        "czynności",
        "czynnosci",
        "czynność",
        "czynnosc"
      ]
    ],
    explanation: "Każdy organizm ma budowę komórkową i wykonuje czynności życiowe, takie jak odżywianie, oddychanie czy rozmnażanie."
  },
  {
    id: "R01_ORG_05",
    section: "Jak są zbudowane organizmy?",
    type: "match",
    prompt: "Połącz przykład z odpowiednim poziomem budowy organizmu.",
    options: null,
    left: [
      "komórka mięśniowa",
      "tkanka nerwowa",
      "serce",
      "układ krwionośny",
      "kot domowy"
    ],
    right: [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    answer: {
      "komórka mięśniowa": "komórka",
      "tkanka nerwowa": "tkanka",
      serce: "narząd",
      "układ krwionośny": "układ narządów",
      "kot domowy": "organizm"
    },
    explanation: "Poziomy budowy idą od komórki do całego organizmu. Każdy przykład pasuje do innego poziomu."
  },
  {
    id: "R01_ORG_06",
    section: "Jak są zbudowane organizmy?",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: komórka, tkanka, narząd, łodyga, układ narządów.",
    options: null,
    answer: "łodyga",
    explanation: "Komórka, tkanka, narząd i układ narządów to nazwy poziomów budowy. Łodyga jest przykładem narządu rośliny, a nie nazwą poziomu."
  },
  {
    id: "R01_ORG_07",
    section: "Jak są zbudowane organizmy?",
    type: "sequence",
    prompt: "Ułóż poziomy budowy od najprostszego do najbardziej złożonego.",
    options: null,
    items: [
      "organizm",
      "narząd",
      "komórka",
      "układ narządów",
      "tkanka"
    ],
    answer: [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    explanation: "Najpierw jest komórka. Z komórek powstaje tkanka, z tkanek narząd, z narządów układ narządów, a z układów cały organizm."
  },
  {
    id: "R01_ORG_08",
    section: "Jak są zbudowane organizmy?",
    type: "scenario",
    prompt: "Kuba dotknął bardzo zimnej butelki i od razu cofnął rękę. Która czynność życiowa zadziałała w tej sytuacji?",
    options: [
      "rozmnażanie",
      "reakcja na bodźce",
      "wydalanie",
      "wzrost"
    ],
    answer: 1,
    explanation: "Nagły ruch po dotknięciu zimnego przedmiotu to reakcja na bodziec z otoczenia."
  },
  {
    id: "R01_CHEM_01",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "single_choice",
    prompt: "Którego związku chemicznego jest zwykle najwięcej w organizmie?",
    image: "/img/bbt_r01_zwiazki_chemiczne.jpg",
    options: [
      "wody",
      "białek",
      "tłuszczów",
      "kwasów nukleinowych"
    ],
    answer: 0,
    explanation: "Woda stanowi bardzo dużą część organizmów. Pomaga transportować substancje i utrzymywać odpowiednią temperaturę."
  },
  {
    id: "R01_CHEM_02",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "multi_select",
    prompt: "Wybierz pierwiastki chemiczne.",
    options: [
      "tlen",
      "azot",
      "białko",
      "woda",
      "siarka"
    ],
    answer: [
      0,
      1,
      4
    ],
    explanation: "Tlen, azot i siarka to pierwiastki. Białko i woda to związki chemiczne."
  },
  {
    id: "R01_CHEM_03",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "true_false",
    prompt: "Białka w organizmach pełnią między innymi funkcję budulcową.",
    options: null,
    answer: true,
    explanation: "To prawda. Białka pomagają budować ciało, na przykład mięśnie i wiele innych struktur."
  },
  {
    id: "R01_CHEM_04",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "fill_in",
    prompt: "Woda pomaga utrzymać właściwą __________ organizmu i transportuje różne __________.",
    options: null,
    answer: [
      "temperaturę",
      "substancje"
    ],
    altAnswers: [
      [
        "temperaturę",
        "temperatura",
        "temperatury",
        "temperature"
      ],
      [
        "substancje",
        "substancja",
        "substancji"
      ]
    ],
    explanation: "Woda jest głównym składnikiem płynów w organizmie. Dzięki niej mogą być przenoszone różne substancje, a temperatura ciała jest łatwiej utrzymywana."
  },
  {
    id: "R01_CHEM_05",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "match",
    prompt: "Połącz związek chemiczny z jego główną rolą.",
    options: null,
    left: [
      "białka",
      "cukry",
      "tłuszcze",
      "kwasy nukleinowe"
    ],
    right: [
      "budują ciało",
      "dają energię",
      "chronią przed chłodem",
      "przechowują informacje"
    ],
    answer: {
      "białka": "budują ciało",
      cukry: "dają energię",
      "tłuszcze": "chronią przed chłodem",
      "kwasy nukleinowe": "przechowują informacje"
    },
    explanation: "Każdy związek chemiczny ma swoje zadanie. Białka są budulcem, cukry dają energię, tłuszcze chronią i magazynują energię, a kwasy nukleinowe niosą informację."
  },
  {
    id: "R01_CHEM_06",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "sort",
    prompt: "Posortuj nazwy do właściwej kategorii.",
    options: null,
    items: [
      "węgiel",
      "woda",
      "żelazo",
      "tłuszcze",
      "azot",
      "białka"
    ],
    categories: [
      "pierwiastki",
      "związki chemiczne"
    ],
    answer: {
      pierwiastki: [
        "węgiel",
        "żelazo",
        "azot"
      ],
      "związki chemiczne": [
        "woda",
        "tłuszcze",
        "białka"
      ]
    },
    explanation: "Pierwiastki to substancje proste, a związki chemiczne powstają z połączenia różnych pierwiastków."
  },
  {
    id: "R01_CHEM_07",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: białko, tłuszcz, cukier, żelazo.",
    options: null,
    answer: "żelazo",
    explanation: "Żelazo jest pierwiastkiem, a białko, tłuszcz i cukier to związki chemiczne."
  },
  {
    id: "R01_CHEM_08",
    section: "Jaki jest skład chemiczny organizmów?",
    type: "scenario",
    prompt: "Foka ma pod skórą grubą warstwę tłuszczu. Po co jest jej taka warstwa?",
    image: "/img/bbt_r01_funkcje_zwiazkow.jpg",
    options: [
      "żeby szybciej rosnąć",
      "żeby chronić przed zimnem i mieć zapas energii",
      "żeby przechowywać DNA",
      "żeby robić fotosyntezę"
    ],
    answer: 1,
    explanation: "Tłuszcze pomagają chronić organizm przed utratą ciepła i są zapasem energii."
  },
  {
    id: "R01_MIC_01",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "single_choice",
    prompt: "Po co używa się mikroskopu?",
    image: "/img/bbt_r01_mikroskop_budowa.jpg",
    options: [
      "żeby ważyć przedmioty",
      "żeby oglądać bardzo małe obiekty",
      "żeby mierzyć temperaturę",
      "żeby suszyć preparat"
    ],
    answer: 1,
    explanation: "Mikroskop pozwala oglądać obiekty tak małe, że nie widać ich gołym okiem."
  },
  {
    id: "R01_MIC_02",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "multi_select",
    prompt: "Które elementy mikroskopu pomagają ustawić ostrość obrazu?",
    options: [
      "śruba makrometryczna",
      "śruba mikrometryczna",
      "stolik",
      "rewolwer"
    ],
    answer: [
      0,
      1
    ],
    explanation: "Ostrość ustawia się śrubą makrometryczną i mikrometryczną. Stolik służy do położenia preparatu, a rewolwer do zmiany obiektywu."
  },
  {
    id: "R01_MIC_03",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "true_false",
    prompt: "Obserwację pod mikroskopem zaczyna się od największego powiększenia.",
    options: null,
    answer: false,
    explanation: "To fałsz. Zaczyna się od najmniejszego powiększenia, bo wtedy łatwiej znaleźć obiekt i ustawić ostrość."
  },
  {
    id: "R01_MIC_04",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "fill_in",
    prompt: "Obserwację zaczynamy od __________ powiększenia, a ostrość dokładnie poprawiamy śrubą __________.",
    options: null,
    answer: [
      "najmniejszego",
      "mikrometryczną"
    ],
    altAnswers: [
      [
        "najmniejszego",
        "małego",
        "najmniejsze",
        "najmniejszym"
      ],
      [
        "mikrometryczną",
        "mikrometryczna",
        "śrubą mikrometryczną",
        "sruba mikrometryczna",
        "mikrometrycznej"
      ]
    ],
    explanation: "Na początku używa się najmniejszego powiększenia. Dokładną ostrość ustawia śruba mikrometryczna."
  },
  {
    id: "R01_MIC_05",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "match",
    prompt: "Połącz część mikroskopu z jej zadaniem.",
    options: null,
    left: [
      "okular",
      "rewolwer",
      "stolik",
      "źródło światła"
    ],
    right: [
      "powiększa obraz",
      "zmienia obiektywy",
      "miejsce na preparat",
      "oświetla preparat"
    ],
    answer: {
      okular: "powiększa obraz",
      rewolwer: "zmienia obiektywy",
      stolik: "miejsce na preparat",
      "źródło światła": "oświetla preparat"
    },
    explanation: "Każda część mikroskopu ma własne zadanie. Dzięki temu można dobrze obejrzeć preparat."
  },
  {
    id: "R01_MIC_06",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "sequence",
    prompt: "Ułóż kroki przygotowania prostego preparatu z kropli wody.",
    image: "/img/bbt_r01_preparat_kropla_wody.jpg",
    options: null,
    items: [
      "przykryj kroplę szkiełkiem nakrywkowym",
      "nabierz wodę zakraplaczem",
      "odsącz nadmiar wody",
      "daj kroplę na szkiełko",
      "umieść badany materiał w kropli"
    ],
    answer: [
      "nabierz wodę zakraplaczem",
      "daj kroplę na szkiełko",
      "umieść badany materiał w kropli",
      "przykryj kroplę szkiełkiem nakrywkowym",
      "odsącz nadmiar wody"
    ],
    explanation: "Najpierw trzeba pobrać kroplę i nanieść ją na szkiełko. Dopiero potem dodaje się materiał, przykrywa preparat i odsącza nadmiar wody."
  },
  {
    id: "R01_MIC_07",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "scenario",
    prompt: "Ola robi preparat ze skórki cebuli. Czym najwygodniej przeniesie cienki kawałek skórki na szkiełko?",
    image: "/img/bbt_r01_skorka_cebuli_prep.jpg",
    options: [
      "pęsetą",
      "linijką",
      "gumką",
      "termometrem"
    ],
    answer: 0,
    explanation: "Do chwytania cienkiego kawałka skórki cebuli najlepiej użyć pęsety."
  },
  {
    id: "R01_MIC_08",
    section: "Jak zajrzeć do wnętrza komórki?",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: okular, obiektyw, rewolwer, chloroplast.",
    options: null,
    answer: "chloroplast",
    explanation: "Okular, obiektyw i rewolwer są częściami mikroskopu. Chloroplast jest elementem komórki roślinnej."
  },
  {
    id: "R01_CELL_01",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "single_choice",
    prompt: "Który obiekt jest przykładem bardzo dużej komórki, którą można zobaczyć bez mikroskopu?",
    options: [
      "jajo strusia",
      "ziarno piasku",
      "serce kota",
      "łodyga"
    ],
    answer: 0,
    explanation: "Jajo strusia jest pojedynczą komórką jajową i jest tak duże, że widać je gołym okiem.",
    image: "/img/bbt_r01_ksztalty_komorek.jpg"
  },
  {
    id: "R01_CELL_02",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "multi_select",
    prompt: "Które elementy występują we wszystkich typach komórek z tego rozdziału?",
    options: [
      "błona komórkowa",
      "cytozol",
      "chloroplast",
      "jądro komórkowe"
    ],
    answer: [
      0,
      1
    ],
    explanation: "Błona komórkowa i cytozol są obecne we wszystkich opisanych typach komórek. Chloroplast nie występuje u zwierząt, a jądro komórkowe nie występuje u bakterii."
  },
  {
    id: "R01_CELL_03",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "true_false",
    prompt: "Chloroplasty występują w komórkach zwierzęcych.",
    options: null,
    answer: false,
    explanation: "To fałsz. Chloroplasty występują w komórkach roślinnych i to w nich zachodzi fotosynteza."
  },
  {
    id: "R01_CELL_04",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "fill_in",
    prompt: "Chloroplast zawiera zielony barwnik - __________ - i przeprowadza __________.",
    options: null,
    answer: [
      "chlorofil",
      "fotosyntezę"
    ],
    altAnswers: [
      [
        "chlorofil",
        "chlorofilu",
        "chlorofilem"
      ],
      [
        "fotosyntezę",
        "fotosynteza",
        "fotosyntezy"
      ]
    ],
    explanation: "Chlorofil pochłania światło. Dzięki chloroplastom komórka roślinna może przeprowadzać fotosyntezę."
  },
  {
    id: "R01_CELL_05",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "match",
    prompt: "Połącz typ komórki z elementem, który go dobrze wyróżnia.",
    options: null,
    left: [
      "komórka roślinna",
      "komórka zwierzęca",
      "komórka bakteryjna"
    ],
    right: [
      "chloroplast",
      "brak chloroplastów",
      "substancja jądrowa zamiast jądra"
    ],
    answer: {
      "komórka roślinna": "chloroplast",
      "komórka zwierzęca": "brak chloroplastów",
      "komórka bakteryjna": "substancja jądrowa zamiast jądra"
    },
    explanation: "Komórka roślinna ma chloroplasty, zwierzęca ich nie ma, a bakteryjna nie ma jądra komórkowego - ma substancję jądrową."
  },
  {
    id: "R01_CELL_06",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "sort",
    prompt: "Przyporządkuj elementy do właściwego typu komórki.",
    image: "/img/bbt_r01_porownanie_komorek.jpg",
    options: null,
    items: [
      "chloroplast",
      "wakuola",
      "jądro komórkowe",
      "substancja jądrowa",
      "ściana komórkowa"
    ],
    categories: [
      "roślinna",
      "zwierzęca",
      "bakteryjna"
    ],
    answer: {
      "roślinna": [
        "chloroplast",
        "wakuola",
        "ściana komórkowa"
      ],
      "zwierzęca": [
        "jądro komórkowe"
      ],
      bakteryjna: [
        "substancja jądrowa"
      ]
    },
    explanation: "Rośliny mają chloroplasty, wakuolę i ścianę komórkową. Zwierzęta mają jądro komórkowe, a bakterie mają substancję jądrową zamiast jądra."
  },
  {
    id: "R01_CELL_07",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "riddle",
    prompt: "Jestem nazywane komórkową elektrownią. To we mnie uwalnia się energia. Kim jestem?",
    options: null,
    answer: "mitochondrium",
    altAnswers: [
      "mitochondrium",
      "mitochondria",
      "mitochondriom",
      "mitochondriów"
    ],
    explanation: "Mitochondrium uwalnia energię potrzebną komórce do życia."
  },
  {
    id: "R01_CELL_08",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "scenario",
    prompt: "Antek ogląda komórkę z liścia i widzi w niej zielone małe struktury. Co najpewniej widzi?",
    image: "/img/bbt_r01_model_komorki_roslinnej.jpg",
    options: [
      "mitochondria",
      "chloroplasty",
      "wić",
      "skrzele"
    ],
    answer: 1,
    explanation: "W komórkach liścia zielone struktury to zwykle chloroplasty. To one zawierają chlorofil."
  },
  {
    id: "R01_CELL_09",
    section: "Z jakich elementów są zbudowane komórki?",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: chloroplast, wakuola, ściana komórkowa, płuca.",
    options: null,
    answer: "płuca",
    explanation: "Chloroplast, wakuola i ściana komórkowa to elementy komórki. Płuca są narządem."
  },
  {
    id: "R01_FOT_01",
    section: "Co to jest fotosynteza?",
    type: "single_choice",
    prompt: "W jakim elemencie komórki roślinnej zachodzi fotosynteza?",
    image: "/img/bbt_r01_fotosynteza_schemat.jpg",
    options: [
      "w jądrze komórkowym",
      "w chloroplaście",
      "w mitochondrium",
      "w błonie komórkowej"
    ],
    answer: 1,
    explanation: "Fotosynteza zachodzi w chloroplastach. To w nich znajduje się chlorofil."
  },
  {
    id: "R01_FOT_02",
    section: "Co to jest fotosynteza?",
    type: "multi_select",
    prompt: "Co jest potrzebne do fotosyntezy?",
    options: [
      "światło",
      "woda",
      "dwutlenek węgla",
      "alkohol etylowy",
      "chlorofil"
    ],
    answer: [
      0,
      1,
      2,
      4
    ],
    explanation: "Do fotosyntezy potrzebne są światło, woda, dwutlenek węgla i chlorofil. Alkohol etylowy nie jest tu potrzebny."
  },
  {
    id: "R01_FOT_03",
    section: "Co to jest fotosynteza?",
    type: "true_false",
    prompt: "Tlen jest produktem fotosyntezy.",
    options: null,
    answer: true,
    explanation: "To prawda. W czasie fotosyntezy roślina wytwarza glukozę i uwalnia tlen."
  },
  {
    id: "R01_FOT_04",
    section: "Co to jest fotosynteza?",
    type: "fill_in",
    prompt: "W czasie fotosyntezy roślina wytwarza __________ i uwalnia do otoczenia __________.",
    options: null,
    answer: [
      "glukozę",
      "tlen"
    ],
    altAnswers: [
      [
        "glukozę",
        "glukozę",
        "glukoza",
        "glukozy"
      ],
      [
        "tlen",
        "tlenu",
        "tlenem"
      ]
    ],
    explanation: "Glukoza jest pokarmem rośliny, a tlen jest uwalniany do otoczenia."
  },
  {
    id: "R01_FOT_05",
    section: "Co to jest fotosynteza?",
    type: "match",
    prompt: "Połącz składnik lub produkt fotosyntezy z jego opisem.",
    options: null,
    left: [
      "dwutlenek węgla",
      "woda",
      "glukoza",
      "tlen"
    ],
    right: [
      "roślina pobiera go z powietrza",
      "roślina pobiera ją z gleby",
      "pokarm wytwarzany przez roślinę",
      "gaz uwalniany do otoczenia"
    ],
    answer: {
      "dwutlenek węgla": "roślina pobiera go z powietrza",
      woda: "roślina pobiera ją z gleby",
      glukoza: "pokarm wytwarzany przez roślinę",
      tlen: "gaz uwalniany do otoczenia"
    },
    explanation: "W fotosyntezie roślina pobiera wodę i dwutlenek węgla, a wytwarza glukozę i tlen."
  },
  {
    id: "R01_FOT_06",
    section: "Co to jest fotosynteza?",
    type: "sort",
    prompt: "Podziel organizmy na samożywne i cudzożywne.",
    image: "/img/bbt_r01_samozywne_cudzozywne.jpg",
    options: null,
    items: [
      "dąb",
      "koń",
      "pieczarka",
      "trawa"
    ],
    categories: [
      "samożywne",
      "cudzożywne"
    ],
    answer: {
      "samożywne": [
        "dąb",
        "trawa"
      ],
      "cudzożywne": [
        "koń",
        "pieczarka"
      ]
    },
    explanation: "Rośliny, takie jak dąb i trawa, same wytwarzają pokarm. Koń i pieczarka pobierają gotowy pokarm z otoczenia."
  },
  {
    id: "R01_FOT_07",
    section: "Co to jest fotosynteza?",
    type: "scenario",
    prompt: "Dwie takie same rośliny stoją w różnych miejscach. Jedna ma dużo światła, druga stoi w ciemnej szafce. W której fotosynteza będzie przebiegała lepiej?",
    options: [
      "w tej w ciemnej szafce",
      "w tej, która ma dużo światła",
      "w obu tak samo",
      "w żadnej, bo światło nie ma znaczenia"
    ],
    answer: 1,
    explanation: "Światło jest potrzebne do fotosyntezy. Gdy jest go więcej, proces może zachodzić sprawniej."
  },
  {
    id: "R01_FOT_08",
    section: "Co to jest fotosynteza?",
    type: "single_choice",
    prompt: "Na ilustracji pokazano trzy ważne czynniki. Który z nich NIE wpływa na intensywność fotosyntezy według tego tematu?",
    image: "/img/bbt_r01_czynniki_fotosyntezy.jpg",
    options: [
      "ilość światła",
      "ilość dwutlenku węgla",
      "temperatura",
      "kolor zeszytu leżącego obok rośliny"
    ],
    answer: 3,
    explanation: "Na intensywność fotosyntezy wpływają między innymi światło, dwutlenek węgla i temperatura. Kolor zeszytu nie ma tu znaczenia."
  },
  {
    id: "R01_ODD_01",
    section: "Jak organizmy oddychają?",
    type: "single_choice",
    prompt: "Po co organizmy oddychają?",
    image: "/img/bbt_r01_oddychanie_tlenowe.jpg",
    options: [
      "żeby zdobyć energię",
      "żeby wytworzyć chlorofil",
      "żeby stać się większe w jednej sekundzie",
      "żeby zrobić preparat"
    ],
    answer: 0,
    explanation: "Oddychanie komórkowe służy do uwalniania energii ze składników pokarmowych."
  },
  {
    id: "R01_ODD_02",
    section: "Jak organizmy oddychają?",
    type: "multi_select",
    prompt: "Które z poniższych są produktami oddychania tlenowego?",
    options: [
      "woda",
      "dwutlenek węgla",
      "energia",
      "tlen"
    ],
    answer: [
      0,
      1,
      2
    ],
    explanation: "W oddychaniu tlenowym powstają woda, dwutlenek węgla i energia. Tlen jest składnikiem, a nie produktem."
  },
  {
    id: "R01_ODD_03",
    section: "Jak organizmy oddychają?",
    type: "true_false",
    prompt: "Fermentacja daje więcej energii niż oddychanie tlenowe.",
    options: null,
    answer: false,
    explanation: "To fałsz. Fermentacja daje mniej energii, bo glukoza rozkłada się tylko częściowo."
  },
  {
    id: "R01_ODD_04",
    section: "Jak organizmy oddychają?",
    type: "fill_in",
    prompt: "Oddychanie tlenowe zachodzi w __________, a fermentacja alkoholowa - w __________.",
    options: null,
    answer: [
      "mitochondriach",
      "cytozolu"
    ],
    altAnswers: [
      [
        "mitochondriach",
        "mitochondrium",
        "mitochondria"
      ],
      [
        "cytozolu",
        "cytozol",
        "cytozole"
      ]
    ],
    explanation: "Oddychanie tlenowe przebiega w mitochondriach, a fermentacja alkoholowa w cytozolu komórki."
  },
  {
    id: "R01_ODD_05",
    section: "Jak organizmy oddychają?",
    type: "match",
    prompt: "Połącz proces z miejscem lub produktem, który do niego pasuje.",
    options: null,
    left: [
      "oddychanie tlenowe",
      "fermentacja alkoholowa",
      "mitochondrium",
      "alkohol etylowy"
    ],
    right: [
      "daje dużo energii",
      "zachodzi bez udziału tlenu",
      "miejsce oddychania tlenowego",
      "produkt fermentacji"
    ],
    answer: {
      "oddychanie tlenowe": "daje dużo energii",
      "fermentacja alkoholowa": "zachodzi bez udziału tlenu",
      mitochondrium: "miejsce oddychania tlenowego",
      "alkohol etylowy": "produkt fermentacji"
    },
    explanation: "Oddychanie tlenowe wymaga tlenu i daje dużo energii. Fermentacja zachodzi bez tlenu, a jej produktem może być alkohol etylowy."
  },
  {
    id: "R01_ODD_06",
    section: "Jak organizmy oddychają?",
    type: "scenario",
    prompt: "Ciasto drożdżowe rośnie. Co powoduje powstawanie pęcherzyków i unoszenie się ciasta?",
    image: "/img/bbt_r01_fermentacja_drozdzy.jpg",
    options: [
      "powstający dwutlenek węgla",
      "powstająca woda",
      "chlorofil",
      "mikroskop"
    ],
    answer: 0,
    explanation: "W czasie fermentacji alkoholowej drożdży wydziela się dwutlenek węgla. To właśnie ten gaz tworzy pęcherzyki w cieście."
  },
  {
    id: "R01_ODD_07",
    section: "Jak organizmy oddychają?",
    type: "sort",
    prompt: "Posortuj wyrazy do odpowiedniego procesu.",
    image: "/img/bbt_r01_porownanie_oddychania.jpg",
    options: null,
    items: [
      "tlen",
      "alkohol etylowy",
      "mitochondria",
      "cytozol",
      "woda",
      "dużo energii"
    ],
    categories: [
      "oddychanie tlenowe",
      "fermentacja"
    ],
    answer: {
      "oddychanie tlenowe": [
        "tlen",
        "mitochondria",
        "woda",
        "dużo energii"
      ],
      fermentacja: [
        "alkohol etylowy",
        "cytozol"
      ]
    },
    explanation: "Oddychanie tlenowe wymaga tlenu, zachodzi w mitochondriach i daje dużo energii. Fermentacja zachodzi w cytozolu i może prowadzić do powstania alkoholu etylowego."
  },
  {
    id: "R01_ODD_08",
    section: "Jak organizmy oddychają?",
    type: "riddle",
    prompt: "Jestem gazem potrzebnym w oddychaniu tlenowym, a rośliny oddają mnie podczas fotosyntezy. Kim jestem?",
    options: null,
    answer: "tlen",
    altAnswers: [
      "tlen",
      "tlenu",
      "tlenem"
    ],
    explanation: "Tlen jest potrzebny do oddychania tlenowego. Rośliny uwalniają go w czasie fotosyntezy."
  },
  {
    id: "R01_ODD_09",
    section: "Jak organizmy oddychają?",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do oddychania tlenowego: tlen, woda, dwutlenek węgla, alkohol etylowy.",
    options: null,
    answer: "alkohol etylowy",
    explanation: "Alkohol etylowy jest związany z fermentacją alkoholową, a nie z oddychaniem tlenowym."
  },
  {
    id: "R01_HARD_01",
    section: "Super trudne",
    type: "sequence",
    prompt: "Na ilustracji pokazano poziomy budowy. Ułóż przykłady od najprostszego do najbardziej złożonego.",
    image: "/img/bbt_r01_roslina_zwierze_poziomy.jpg",
    options: null,
    items: [
      "układ krwionośny",
      "kot domowy",
      "serce",
      "tkanka mięśniowa",
      "komórka mięśniowa"
    ],
    answer: [
      "komórka mięśniowa",
      "tkanka mięśniowa",
      "serce",
      "układ krwionośny",
      "kot domowy"
    ],
    explanation: "Najpierw jest komórka, potem tkanka, narząd, układ narządów i cały organizm."
  },
  {
    id: "R01_HARD_02",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz przykład z właściwym poziomem budowy albo typem obiektu.",
    options: null,
    left: [
      "liść",
      "system korzeniowy",
      "dąb",
      "komórka przewodząca"
    ],
    right: [
      "narząd",
      "układ organów",
      "organizm",
      "komórka"
    ],
    answer: {
      "liść": "narząd",
      "system korzeniowy": "układ organów",
      "dąb": "organizm",
      "komórka przewodząca": "komórka"
    },
    explanation: "U roślin też można wyróżnić komórki, narządy, układy organów i cały organizm."
  },
  {
    id: "R01_HARD_03",
    section: "Super trudne",
    type: "sort",
    prompt: "Posortuj pojęcia do właściwego procesu.",
    options: null,
    items: [
      "chlorofil",
      "tlen",
      "alkohol etylowy",
      "mitochondria",
      "dwutlenek węgla",
      "cytozol"
    ],
    categories: [
      "fotosynteza",
      "oddychanie komórkowe"
    ],
    answer: {
      fotosynteza: [
        "chlorofil",
        "tlen",
        "dwutlenek węgla"
      ],
      "oddychanie komórkowe": [
        "alkohol etylowy",
        "mitochondria",
        "cytozol"
      ]
    },
    explanation: "Chlorofil, tlen i dwutlenek węgla kojarzą się z fotosyntezą. Alkohol etylowy, mitochondria i cytozol wiążą się z oddychaniem komórkowym lub jego odmianami."
  },
  {
    id: "R01_HARD_04",
    section: "Super trudne",
    type: "scenario",
    prompt: "Dwie rośliny stoją przy tym samym oknie. Jedna ma zielone liście, druga została szczelnie przykryta czarnym pudełkiem. U której po kilku godzinach fotosynteza będzie słabsza?",
    options: [
      "u tej pod pudełkiem",
      "u tej stojącej przy oknie",
      "u obu tak samo",
      "u żadnej"
    ],
    answer: 0,
    explanation: "Bez światła fotosynteza bardzo słabnie albo ustaje. Dlatego roślina przykryta pudełkiem ma gorsze warunki."
  },
  {
    id: "R01_HARD_05",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Bakteria nie ma __________ komórkowego, lecz ma __________ jądrową.",
    options: null,
    answer: [
      "jądra",
      "substancję"
    ],
    altAnswers: [
      [
        "jądra",
        "jądro",
        "jadra",
        "jadro"
      ],
      [
        "substancję",
        "substancja",
        "substancję jądrową",
        "substancja jadrowa",
        "substancję jadrową"
      ]
    ],
    explanation: "Komórka bakteryjna nie ma jądra komórkowego. Zamiast niego ma substancję jądrową."
  },
  {
    id: "R01_HARD_06",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Które zmiany mogą osłabić fotosyntezę u większości roślin?",
    options: [
      "mniej światła",
      "za mało dwutlenku węgla",
      "odpowiednia temperatura",
      "zbyt niska temperatura"
    ],
    answer: [
      0,
      1,
      3
    ],
    explanation: "Fotosynteza słabnie, gdy jest za mało światła, za mało dwutlenku węgla albo temperatura nie jest odpowiednia. Odpowiednia temperatura pomaga, a nie szkodzi."
  },
  {
    id: "R01_HARD_07",
    section: "Super trudne",
    type: "single_choice",
    prompt: "Na ilustracji widzisz trzy typy komórek. Która z nich może mieć chloroplasty?",
    image: "/img/bbt_r01_porownanie_komorek.jpg",
    options: [
      "roślinna",
      "zwierzęca",
      "bakteryjna",
      "żadna"
    ],
    answer: 0,
    explanation: "Chloroplasty występują w komórkach roślinnych. To one pozwalają na fotosyntezę."
  },
  {
    id: "R01_HARD_08",
    section: "Super trudne",
    type: "true_false",
    prompt: "W fermentacji alkoholowej drożdży powstają alkohol etylowy, dwutlenek węgla i energia.",
    options: null,
    answer: true,
    explanation: "To prawda. Drożdże rozkładają glukozę bez udziału tlenu i powstają między innymi alkohol etylowy oraz dwutlenek węgla."
  },
  {
    id: "R01_HARD_09",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz proces z pasującym zdaniem.",
    options: null,
    left: [
      "fotosynteza",
      "oddychanie tlenowe",
      "fermentacja alkoholowa",
      "woda"
    ],
    right: [
      "wymaga światła",
      "daje dużo energii",
      "zachodzi bez tlenu",
      "jeden ze składników fotosyntezy"
    ],
    answer: {
      fotosynteza: "wymaga światła",
      "oddychanie tlenowe": "daje dużo energii",
      "fermentacja alkoholowa": "zachodzi bez tlenu",
      woda: "jeden ze składników fotosyntezy"
    },
    explanation: "Każdy proces ma inne warunki i produkty. Woda jest ważnym składnikiem fotosyntezy."
  },
  {
    id: "R01_HARD_10",
    section: "Super trudne",
    type: "riddle",
    prompt: "Jestem zielonym barwnikiem, który pomaga pochłaniać światło. Bez mnie fotosynteza nie ruszy. Kim jestem?",
    options: null,
    answer: "chlorofil",
    altAnswers: [
      "chlorofil",
      "chlorofilu",
      "chlorofilem"
    ],
    explanation: "Chlorofil to zielony barwnik obecny w chloroplastach. To on pomaga pochłaniać światło."
  },
  {
    id: "R01_HARD_11",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: białka, cukry, tłuszcze, jądro komórkowe.",
    options: null,
    answer: "jądro komórkowe",
    explanation: "Białka, cukry i tłuszcze to związki chemiczne. Jądro komórkowe jest elementem komórki."
  },
  {
    id: "R01_HARD_12",
    section: "Super trudne",
    type: "scenario",
    prompt: "Krwinka czerwona ma inny kształt niż komórka nerwowa. Co najlepiej wyjaśnia tę różnicę?",
    options: [
      "komórki zawsze mają identyczny kształt",
      "kształt komórki zależy od jej funkcji",
      "komórki zmieniają kształt tylko nocą",
      "krwinka nie jest komórką"
    ],
    answer: 1,
    explanation: "Kształt komórki jest związany z jej zadaniem. Dlatego różne komórki wyglądają inaczej."
  },
  {
    id: "R01_HARD_13",
    section: "Super trudne",
    type: "sequence",
    prompt: "Ułóż czynności podczas obserwacji mikroskopowej w dobrej kolejności.",
    image: "/img/bbt_r01_obserwacja_mikroskop.jpg",
    options: null,
    items: [
      "zmień na większe powiększenie, jeśli trzeba",
      "ustaw najmniejszy obiektyw",
      "połóż preparat na stoliku",
      "ustaw ostrość",
      "włącz światło"
    ],
    answer: [
      "połóż preparat na stoliku",
      "ustaw najmniejszy obiektyw",
      "włącz światło",
      "ustaw ostrość",
      "zmień na większe powiększenie, jeśli trzeba"
    ],
    explanation: "Najpierw trzeba położyć preparat, ustawić małe powiększenie i oświetlenie, potem wyostrzyć obraz, a dopiero później można przejść na większe powiększenie."
  },
  {
    id: "R01_HARD_14",
    section: "Super trudne",
    type: "multi_select",
    prompt: "Wybierz prawdziwe zdania o wodzie w organizmach.",
    options: [
      "transportuje różne substancje",
      "pomaga utrzymać temperaturę",
      "jest zawsze szkodliwa",
      "jest ważnym składnikiem płynów organizmu"
    ],
    answer: [
      0,
      1,
      3
    ],
    explanation: "Woda jest bardzo ważna. Pomaga transportować substancje, utrzymywać temperaturę i stanowi dużą część płynów organizmu."
  },
  {
    id: "R01_HARD_15",
    section: "Super trudne",
    type: "sort",
    prompt: "Posortuj związki chemiczne według ich głównej roli.",
    options: null,
    items: [
      "białka",
      "cukry",
      "tłuszcze",
      "kwasy nukleinowe"
    ],
    categories: [
      "budulec",
      "energia / zapas",
      "informacja"
    ],
    answer: {
      budulec: [
        "białka"
      ],
      "energia / zapas": [
        "cukry",
        "tłuszcze"
      ],
      informacja: [
        "kwasy nukleinowe"
      ]
    },
    explanation: "Białka są głównie budulcem, cukry i tłuszcze wiążą się z energią, a kwasy nukleinowe przechowują informację."
  },
  {
    id: "R01_HARD_16",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Komórka roślinna ma zwykle __________ komórkową, a komórka bakteryjna nie ma prawdziwego __________ komórkowego.",
    options: null,
    answer: [
      "ścianę",
      "jądra"
    ],
    altAnswers: [
      [
        "ścianę",
        "ściana",
        "ścianę komórkową",
        "sciane",
        "sciana"
      ],
      [
        "jądra",
        "jądro",
        "jadra",
        "jadro"
      ]
    ],
    explanation: "Komórka roślinna ma ścianę komórkową. Komórka bakteryjna nie ma prawdziwego jądra komórkowego."
  },
  {
    id: "R01_HARD_17",
    section: "Super trudne",
    type: "fill_in",
    prompt: "Na schemacie fotosyntezy brak dwóch słów. Uzupełnij: dwutlenek węgla + __________ + światło -> glukoza + __________.",
    image: "/img/bbt_r01_fotosynteza_schemat.jpg",
    options: null,
    answer: [
      "woda",
      "tlen"
    ],
    altAnswers: [
      [
        "woda",
        "wody"
      ],
      [
        "tlen",
        "tlenu"
      ]
    ],
    explanation: "Roślina wykorzystuje wodę i dwutlenek węgla, a wytwarza glukozę i tlen."
  },
  {
    id: "R01_HARD_18",
    section: "Super trudne",
    type: "match",
    prompt: "Połącz część mikroskopu z pytaniem, na które odpowiada.",
    image: "/img/bbt_r01_mikroskop_budowa.jpg",
    options: null,
    left: [
      "okular",
      "stolik",
      "rewolwer",
      "źródło światła"
    ],
    right: [
      "gdzie kładę preparat?",
      "co oświetla preparat?",
      "co zmienia obiektywy?",
      "co pomaga powiększyć obraz?"
    ],
    answer: {
      okular: "co pomaga powiększyć obraz?",
      stolik: "gdzie kładę preparat?",
      rewolwer: "co zmienia obiektywy?",
      "źródło światła": "co oświetla preparat?"
    },
    explanation: "Dobra znajomość części mikroskopu pomaga sprawnie wykonywać obserwacje."
  },
  {
    id: "R01_HARD_19",
    section: "Super trudne",
    type: "scenario",
    prompt: "Przygotowano dwa naczynia z drożdżami i ciepłą wodą. Do jednego dodano cukier, do drugiego nie. W którym naczyniu szybciej pojawią się pęcherzyki gazu?",
    image: "/img/bbt_r01_fermentacja_drozdzy.jpg",
    options: [
      "w tym z cukrem",
      "w tym bez cukru",
      "w obu tak samo",
      "w żadnym"
    ],
    answer: 0,
    explanation: "Drożdże potrzebują glukozy jako źródła energii. Gdy dostają cukier, fermentacja zachodzi łatwiej i szybciej pojawiają się pęcherzyki dwutlenku węgla."
  },
  {
    id: "R01_HARD_20",
    section: "Super trudne",
    type: "odd_one_out",
    prompt: "Wskaż, co nie pasuje do pozostałych: chloroplast, mitochondrium, jądro komórkowe, płuca.",
    image: "/img/bbt_r01_funkcje_organelli.jpg",
    options: null,
    answer: "płuca",
    explanation: "Chloroplast, mitochondrium i jądro komórkowe są elementami komórki. Płuca są narządem organizmu."
  }
];
const KID_PROMPTS = {};
const chapter = {
  id: "r01",
  number: 1,
  title: "Budowa i czynności organizmów",
  icon: "🧫",
  sectionOrder: [
    "Jak są zbudowane organizmy?",
    "Jaki jest skład chemiczny organizmów?",
    "Jak zajrzeć do wnętrza komórki?",
    "Z jakich elementów są zbudowane komórki?",
    "Co to jest fotosynteza?",
    "Jak organizmy oddychają?"
  ],
  sectionIcons: {
    "Jak są zbudowane organizmy?": "🧩",
    "Jaki jest skład chemiczny organizmów?": "⚗️",
    "Jak zajrzeć do wnętrza komórki?": "🔬",
    "Z jakich elementów są zbudowane komórki?": "🦠",
    "Co to jest fotosynteza?": "🌿",
    "Jak organizmy oddychają?": "💨"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS,
};

export default chapter;
