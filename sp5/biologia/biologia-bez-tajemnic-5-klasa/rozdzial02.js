// Skróty sekcji (do identyfikatorów ćwiczeń):
//   CECH = Cechy organizmów
//   CHEM = Skład chemiczny organizmów
//   KOM  = Budowa komórek
//   FOTO = Fotosynteza
//   ODD  = Oddychanie komórkowe
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_CECH_01",
    "section": "Cechy organizmów",
    "type": "single_choice",
    "prompt": "Na czym polega hierarchiczna budowa organizmu?",
    "options": [
      "Organizm składa się z mniejszych, prostszych elementów tworzących bardziej złożone struktury",
      "Każdy organizm jest zbudowany wyłącznie z jednej komórki",
      "Wszystkie części organizmu mają identyczną budowę i funkcję",
      "Organizm nie ma poziomów organizacji",
      "Najmniejsze elementy organizmu są bardziej złożone od całego organizmu",
      "Hierarchiczna budowa występuje tylko u zwierząt"
    ],
    "answer": 0,
    "explanation": "Organizm ma budowę hierarchiczną: mniejsze i prostsze elementy łączą się w coraz większe oraz bardziej złożone struktury."
  },
  {
    "id": "R02_CECH_02",
    "section": "Cechy organizmów",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji ciała człowieka od najmniejszego do największego.",
    "options": null,
    "items": [
      "narząd",
      "organizm",
      "komórka",
      "układ narządów",
      "tkanka"
    ],
    "answer": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    "explanation": "Komórki tworzą tkanki, tkanki budują narządy, narządy współpracują w układach narządów, a wszystkie układy tworzą organizm.",
    "image": "r02_hierarchia_organizmu.jpg"
  },
  {
    "id": "R02_CECH_03",
    "section": "Cechy organizmów",
    "type": "match",
    "prompt": "Połącz przykład z właściwym poziomem organizacji ciała człowieka.",
    "options": null,
    "left": [
      "komórka mięśniowa",
      "tkanka mięśniowa",
      "mięsień",
      "układ mięśniowy"
    ],
    "right": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów"
    ],
    "answer": {
      "komórka mięśniowa": "komórka",
      "tkanka mięśniowa": "tkanka",
      "mięsień": "narząd",
      "układ mięśniowy": "układ narządów"
    },
    "explanation": "Przykłady pokazują kolejne poziomy hierarchicznej budowy organizmu: od pojedynczej komórki do współpracującego układu narządów.",
    "image": "r02_hierarchia_organizmu.jpg"
  },
  {
    "id": "R02_CECH_04",
    "section": "Cechy organizmów",
    "type": "true_false",
    "prompt": "Tkanka jest grupą komórek o podobnej budowie, które pełnią tę samą funkcję.",
    "options": null,
    "answer": true,
    "explanation": "W podręczniku tkankę zdefiniowano jako grupę podobnie zbudowanych komórek wykonujących tę samą funkcję."
  },
  {
    "id": "R02_CECH_05",
    "section": "Cechy organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz czynności życiowe wykonywane przez wszystkie organizmy.",
    "options": [
      "oddychanie",
      "wydalanie",
      "ruch",
      "fotosynteza",
      "wzrost i rozwój",
      "budowanie gniazda"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Do czynności życiowych należą między innymi oddychanie, wydalanie, ruch oraz wzrost i rozwój. Fotosyntezy nie wykonują wszystkie organizmy, a budowanie gniazda nie jest powszechną czynnością życiową.",
    "image": "r02_czynnosci_zyciowe.jpg"
  },
  {
    "id": "R02_CECH_06",
    "section": "Cechy organizmów",
    "type": "fill_in",
    "prompt": "W procesie __________ organizm uwalnia ze związków chemicznych __________ potrzebną do wykonywania innych czynności życiowych.",
    "options": null,
    "answer": [
      "oddychania",
      "energię"
    ],
    "altAnswers": [
      [
        "oddychania",
        "oddychanie"
      ],
      [
        "energię",
        "energia"
      ]
    ],
    "explanation": "Oddychanie polega na uwalnianiu energii zgromadzonej w związkach chemicznych. Energia ta napędza pozostałe czynności życiowe."
  },
  {
    "id": "R02_CECH_07",
    "section": "Cechy organizmów",
    "type": "riddle",
    "prompt": "Jak nazywa się czynność życiowa polegająca na usuwaniu z organizmu substancji zbędnych lub szkodliwych?",
    "options": null,
    "answer": "wydalanie",
    "altAnswers": [
      "wydalanie",
      "proces wydalania"
    ],
    "explanation": "Wydalanie usuwa związki zbędne albo szkodliwe, które powstają podczas przemian zachodzących w organizmie."
  },
  {
    "id": "R02_CECH_08",
    "section": "Cechy organizmów",
    "type": "odd_one_out",
    "prompt": "Co nie jest czynnością życiową wszystkich organizmów: oddychanie, wydalanie, fotosynteza, rozmnażanie się.",
    "options": null,
    "answer": "fotosynteza",
    "explanation": "Fotosyntezę przeprowadzają organizmy samożywne, natomiast pozostałe wymienione czynności należą do czynności życiowych wszystkich organizmów."
  },
  {
    "id": "R02_CECH_09",
    "section": "Cechy organizmów",
    "type": "scenario",
    "prompt": "Gdy na oczy człowieka pada bardzo silne światło, człowiek je zamyka. Którą czynność życiową przedstawia ta reakcja?",
    "options": [
      "wrażliwość na bodźce",
      "wydalanie",
      "rozmnażanie się",
      "odżywianie się",
      "oddychanie",
      "wzrost i rozwój"
    ],
    "answer": 0,
    "explanation": "Silne światło jest bodźcem, a zamknięcie oczu jest reakcją organizmu na ten bodziec."
  },
  {
    "id": "R02_CECH_10",
    "section": "Cechy organizmów",
    "type": "sort",
    "prompt": "Przyporządkuj organizmy lub grupy organizmów do sposobu odżywiania.",
    "options": null,
    "items": [
      "roślina prowadząca fotosyntezę",
      "roślinożerca",
      "mięsożerca",
      "pasożyt",
      "organizm odżywiający się szczątkami"
    ],
    "categories": [
      "samożywne",
      "cudzożywne"
    ],
    "answer": {
      "samożywne": [
        "roślina prowadząca fotosyntezę"
      ],
      "cudzożywne": [
        "roślinożerca",
        "mięsożerca",
        "pasożyt",
        "organizm odżywiający się szczątkami"
      ]
    },
    "explanation": "Organizmy samożywne same wytwarzają związki złożone, a cudzożywne pobierają je z otoczenia. Do cudzożywnych należą między innymi roślinożercy, mięsożercy, pasożyty i organizmy żywiące się szczątkami."
  },
  {
    "id": "R02_CECH_11",
    "section": "Cechy organizmów",
    "type": "true_false",
    "prompt": "W wyniku rozmnażania powstają osobniki potomne, dlatego liczba osobników może się zwiększać.",
    "options": null,
    "answer": true,
    "explanation": "Rozmnażanie prowadzi do powstawania potomstwa i umożliwia zwiększanie liczby osobników danego gatunku."
  },
  {
    "id": "R02_CECH_12",
    "section": "Cechy organizmów",
    "type": "scenario",
    "prompt": "Po podziale komórki potomne nie rozdzielają się, żyją obok siebie, a z czasem różne grupy komórek specjalizują się w innych funkcjach. Do powstania jakiej formy organizacji może prowadzić taki proces?",
    "options": [
      "organizmu wielokomórkowego",
      "pojedynczego pierwiastka",
      "układu okresowego",
      "martwej materii",
      "wyłącznie komórki bakteryjnej",
      "substancji mineralnej"
    ],
    "answer": 0,
    "explanation": "Według opisu ewolucyjnego kolonie komórek, w których grupy komórek zaczęły się specjalizować, dały początek pierwszym organizmom wielokomórkowym."
  },
  {
    "id": "R02_CHEM_01",
    "section": "Skład chemiczny organizmów",
    "type": "single_choice",
    "prompt": "Jaki związek chemiczny jest głównym składnikiem organizmów?",
    "options": [
      "woda",
      "białko",
      "tłuszcz",
      "cukier",
      "sól mineralna",
      "kwas nukleinowy"
    ],
    "answer": 0,
    "explanation": "Woda stanowi największą część masy organizmu człowieka i jest głównym składnikiem organizmów.",
    "image": "r02_zwiazki_chemiczne.jpg"
  },
  {
    "id": "R02_CHEM_02",
    "section": "Skład chemiczny organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz pierwiastki należące do najważniejszych pierwiastków budujących organizmy.",
    "options": [
      "węgiel",
      "wodór",
      "tlen",
      "azot",
      "żelazo",
      "magnez"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do najważniejszych pierwiastków budujących organizmy należą węgiel, wodór, azot, tlen, fosfor i siarka. Żelazo i magnez nie znajdują się na tej podstawowej liście w rozdziale."
  },
  {
    "id": "R02_CHEM_03",
    "section": "Skład chemiczny organizmów",
    "type": "true_false",
    "prompt": "Tlen stanowi około 65 procent masy organizmu człowieka i jest w nim pierwiastkiem dominującym.",
    "options": null,
    "answer": true,
    "explanation": "Na wykresie zawartość tlenu w organizmie człowieka wynosi 65 procent, czyli najwięcej spośród pokazanych pierwiastków.",
    "image": "r02_sklad_ciala_czlowieka.jpg"
  },
  {
    "id": "R02_CHEM_04",
    "section": "Skład chemiczny organizmów",
    "type": "fill_in",
    "prompt": "Międzynarodowy symbol węgla to __________, wodoru to __________, tlenu to __________, a azotu to __________.",
    "options": null,
    "answer": [
      "C",
      "H",
      "O",
      "N"
    ],
    "altAnswers": [
      [
        "C",
        "c"
      ],
      [
        "H",
        "h"
      ],
      [
        "O",
        "o"
      ],
      [
        "N",
        "n"
      ]
    ],
    "explanation": "W układzie okresowym węgiel oznacza się symbolem C, wodór H, tlen O, a azot N."
  },
  {
    "id": "R02_CHEM_05",
    "section": "Skład chemiczny organizmów",
    "type": "riddle",
    "prompt": "Jak nazywa się grupa związków chemicznych, które zawierają informację genetyczną i uczestniczą w dziedziczeniu cech?",
    "options": null,
    "answer": "kwasy nukleinowe",
    "altAnswers": [
      "kwasy nukleinowe",
      "kwas nukleinowy"
    ],
    "explanation": "Kwasy nukleinowe przechowują informację genetyczną, uczestniczą w dziedziczeniu cech i kierują procesami życiowymi organizmów."
  },
  {
    "id": "R02_CHEM_06",
    "section": "Skład chemiczny organizmów",
    "type": "match",
    "prompt": "Połącz związek chemiczny z jedną z jego funkcji w organizmie.",
    "options": null,
    "left": [
      "Woda",
      "Białka",
      "Tłuszcze",
      "Kwasy nukleinowe"
    ],
    "right": [
      "rozpuszczalnik i środowisko reakcji",
      "budowa struktur oraz regulacja procesów",
      "zapas energii i ochrona przed utratą ciepła",
      "przechowywanie informacji genetycznej"
    ],
    "answer": {
      "Woda": "rozpuszczalnik i środowisko reakcji",
      "Białka": "budowa struktur oraz regulacja procesów",
      "Tłuszcze": "zapas energii i ochrona przed utratą ciepła",
      "Kwasy nukleinowe": "przechowywanie informacji genetycznej"
    },
    "explanation": "Woda rozpuszcza wiele substancji, białka budują i regulują, tłuszcze magazynują energię oraz izolują, a kwasy nukleinowe zawierają informację genetyczną.",
    "image": "r02_zwiazki_chemiczne.jpg"
  },
  {
    "id": "R02_CHEM_07",
    "section": "Skład chemiczny organizmów",
    "type": "sort",
    "prompt": "Przyporządkuj przykład materiału zapasowego do właściwej grupy związków chemicznych.",
    "options": null,
    "items": [
      "substancja zapasowa w nasionach fasoli",
      "warstwa pod skórą zwierząt",
      "skrobia u roślin"
    ],
    "categories": [
      "białka",
      "tłuszcze",
      "cukry"
    ],
    "answer": {
      "białka": [
        "substancja zapasowa w nasionach fasoli"
      ],
      "tłuszcze": [
        "warstwa pod skórą zwierząt"
      ],
      "cukry": [
        "skrobia u roślin"
      ]
    },
    "explanation": "Białka mogą być zapasem w nasionach fasoli, tłuszcze są magazynowane między innymi pod skórą zwierząt, a skrobia jest zapasowym cukrem roślin."
  },
  {
    "id": "R02_CHEM_08",
    "section": "Skład chemiczny organizmów",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest pierwiastkiem chemicznym: węgiel, tlen, woda, azot.",
    "options": null,
    "answer": "woda",
    "explanation": "Węgiel, tlen i azot są pierwiastkami. Woda jest związkiem chemicznym zbudowanym z więcej niż jednego pierwiastka."
  },
  {
    "id": "R02_CHEM_09",
    "section": "Skład chemiczny organizmów",
    "type": "scenario",
    "prompt": "Zwierzę żyjące w chłodnym środowisku ma pod skórą grubą warstwę substancji, która stanowi zapas energii i ogranicza utratę ciepła. Jaka grupa związków tworzy tę warstwę?",
    "options": [
      "tłuszcze",
      "kwasy nukleinowe",
      "sole mineralne",
      "woda",
      "białka wyłącznie enzymatyczne",
      "pierwiastki gazowe"
    ],
    "answer": 0,
    "explanation": "Warstwa tłuszczu pod skórą jest materiałem zapasowym i chroni zwierzę przed utratą ciepła."
  },
  {
    "id": "R02_CHEM_10",
    "section": "Skład chemiczny organizmów",
    "type": "sequence",
    "prompt": "Ułóż pierwiastki od największej do najmniejszej zawartości w organizmie człowieka.",
    "options": null,
    "items": [
      "azot",
      "wodór",
      "tlen",
      "węgiel"
    ],
    "answer": [
      "tlen",
      "węgiel",
      "wodór",
      "azot"
    ],
    "explanation": "W organizmie człowieka pokazane wartości wynoszą: tlen 65 procent, węgiel 18 procent, wodór 10 procent, azot 3 procent.",
    "image": "r02_sklad_ciala_czlowieka.jpg"
  },
  {
    "id": "R02_CHEM_11",
    "section": "Skład chemiczny organizmów",
    "type": "single_choice",
    "prompt": "Do której grupy związków chemicznych należy celuloza budująca ściany komórkowe roślin?",
    "options": [
      "cukry",
      "tłuszcze",
      "białka",
      "kwasy nukleinowe",
      "sole mineralne",
      "woda"
    ],
    "answer": 0,
    "explanation": "Celuloza jest cukrem pełniącym funkcję budulcową w ścianach komórkowych roślin."
  },
  {
    "id": "R02_CHEM_12",
    "section": "Skład chemiczny organizmów",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje soli mineralnych opisane w rozdziale.",
    "options": [
      "uczestniczą w procesach zachodzących w komórkach",
      "przechowują całą informację genetyczną",
      "budują między innymi kości, zęby i muszle",
      "są głównym rozpuszczalnikiem",
      "zawsze stanowią główne źródło energii"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Sole mineralne są potrzebne w wielu procesach komórkowych i pełnią funkcję budulcową, na przykład w kościach, zębach oraz muszlach."
  },
  {
    "id": "R02_KOM_01",
    "section": "Budowa komórek",
    "type": "single_choice",
    "prompt": "Czym jest komórka?",
    "options": [
      "najmniejszą samodzielną jednostką budującą wszystkie organizmy",
      "grupą narządów o podobnej funkcji",
      "wyłącznie częścią ciała zwierząt",
      "związkiem chemicznym złożonym z pierwiastków",
      "największym poziomem organizacji życia",
      "układem tkanek występującym tylko u roślin"
    ],
    "answer": 0,
    "explanation": "Komórka jest najmniejszą samodzielną jednostką budującą wszystkie organizmy."
  },
  {
    "id": "R02_KOM_02",
    "section": "Budowa komórek",
    "type": "sort",
    "prompt": "Przyporządkuj przykładowe organizmy do liczby komórek budujących ich ciało.",
    "options": null,
    "items": [
      "pełzak odmieniec",
      "ważka"
    ],
    "categories": [
      "jednokomórkowe",
      "wielokomórkowe"
    ],
    "answer": {
      "jednokomórkowe": [
        "pełzak odmieniec"
      ],
      "wielokomórkowe": [
        "ważka"
      ]
    },
    "explanation": "Pełzak odmieniec jest organizmem jednokomórkowym, a ważka jest zbudowana z wielu wyspecjalizowanych komórek."
  },
  {
    "id": "R02_KOM_03",
    "section": "Budowa komórek",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które występują lub mogą występować w komórce bakterii.",
    "options": [
      "ściana komórkowa",
      "błona komórkowa",
      "cytozol",
      "nić DNA",
      "otoczka śluzowa",
      "rzęska",
      "jądro komórkowe",
      "chloroplast"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Komórka bakterii ma ścianę, błonę, cytozol i nić DNA, a u niektórych bakterii występują też otoczka śluzowa oraz rzęski. Nie ma jądra komórkowego ani chloroplastów.",
    "image": "r02_komorka_bakteryjna.jpg"
  },
  {
    "id": "R02_KOM_04",
    "section": "Budowa komórek",
    "type": "true_false",
    "prompt": "Komórki bakterii są bezjądrowe, a ich nić DNA znajduje się bezpośrednio w cytozolu.",
    "options": null,
    "answer": true,
    "explanation": "Bakterie nie mają jądra komórkowego. Materiał genetyczny w postaci nici DNA leży bezpośrednio w cytozolu."
  },
  {
    "id": "R02_KOM_05",
    "section": "Budowa komórek",
    "type": "fill_in",
    "prompt": "Błona komórkowa oddziela wnętrze komórki od __________, a ściana komórkowa nadaje komórce __________.",
    "options": null,
    "answer": [
      "środowiska zewnętrznego",
      "sztywność"
    ],
    "altAnswers": [
      [
        "środowiska zewnętrznego",
        "otoczenia",
        "środowiska"
      ],
      [
        "sztywność",
        "sztywny kształt"
      ]
    ],
    "explanation": "Błona komórkowa wyznacza granicę między wnętrzem komórki i otoczeniem, natomiast ściana komórkowa usztywnia komórkę i ją chroni."
  },
  {
    "id": "R02_KOM_06",
    "section": "Budowa komórek",
    "type": "match",
    "prompt": "Połącz element komórki z jego funkcją.",
    "options": null,
    "left": [
      "jądro komórkowe",
      "mitochondrium",
      "chloroplast",
      "wakuola"
    ],
    "right": [
      "zawiera DNA i kieruje procesami",
      "uwalnianie energii podczas oddychania",
      "miejsce fotosyntezy",
      "magazynowanie wody i różnych substancji"
    ],
    "answer": {
      "jądro komórkowe": "zawiera DNA i kieruje procesami",
      "mitochondrium": "uwalnianie energii podczas oddychania",
      "chloroplast": "miejsce fotosyntezy",
      "wakuola": "magazynowanie wody i różnych substancji"
    },
    "explanation": "Jądro zawiera materiał genetyczny, mitochondrium jest miejscem oddychania tlenowego, chloroplast prowadzi fotosyntezę, a wakuola magazynuje wodę i substancje.",
    "image": "r02_komorka_roslinna.jpg"
  },
  {
    "id": "R02_KOM_07",
    "section": "Budowa komórek",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest charakterystyczny dla komórki roślinnej: chloroplast, wakuola, ściana komórkowa, wodniczka.",
    "options": null,
    "answer": "wodniczka",
    "explanation": "Komórka roślinna ma chloroplasty, ścianę komórkową i zwykle jedną dużą wakuolę. Wodniczki opisano przy komórce zwierzęcej.",
    "image": "r02_komorka_roslinna.jpg"
  },
  {
    "id": "R02_KOM_08",
    "section": "Budowa komórek",
    "type": "scenario",
    "prompt": "Pod mikroskopem widzisz komórkę z jądrem, ścianą komórkową, chloroplastami i jedną dużą wakuolą. Jaki to typ komórki?",
    "options": [
      "roślinna",
      "zwierzęca",
      "bakteryjna",
      "bezjądrowa",
      "wyłącznie grzybowa",
      "mineralna"
    ],
    "answer": 0,
    "explanation": "Zestaw cech obejmujący jądro, ścianę komórkową, chloroplasty i dużą wakuolę jest charakterystyczny dla komórki roślinnej.",
    "image": "r02_komorka_roslinna.jpg"
  },
  {
    "id": "R02_KOM_09",
    "section": "Budowa komórek",
    "type": "riddle",
    "prompt": "Jak nazywa się zielony barwnik znajdujący się w chloroplastach i potrzebny do fotosyntezy?",
    "options": null,
    "answer": "chlorofil",
    "altAnswers": [
      "chlorofil",
      "zielony barwnik chlorofil"
    ],
    "explanation": "Chlorofil pochłania energię światła słonecznego i umożliwia przebieg fotosyntezy."
  },
  {
    "id": "R02_KOM_10",
    "section": "Budowa komórek",
    "type": "sequence",
    "prompt": "Ułóż elementy komórki bakterii od najbardziej zewnętrznego do położonego wewnątrz.",
    "options": null,
    "items": [
      "cytozol",
      "błona komórkowa",
      "otoczka śluzowa",
      "ściana komórkowa"
    ],
    "answer": [
      "otoczka śluzowa",
      "ściana komórkowa",
      "błona komórkowa",
      "cytozol"
    ],
    "explanation": "U bakterii mającej otoczkę śluzową leży ona na zewnątrz ściany komórkowej, pod ścianą znajduje się błona, a wnętrze wypełnia cytozol.",
    "image": "r02_komorka_bakteryjna.jpg"
  },
  {
    "id": "R02_KOM_11",
    "section": "Budowa komórek",
    "type": "match",
    "prompt": "Połącz wyspecjalizowaną komórkę z pełnioną funkcją.",
    "options": null,
    "left": [
      "włośnik",
      "komórka nerwowa",
      "komórka mięśniowa",
      "plemnik"
    ],
    "right": [
      "pobieranie wody z solami mineralnymi",
      "przekazywanie informacji",
      "kurczenie się i umożliwianie ruchu",
      "przekazywanie materiału genetycznego potomstwu"
    ],
    "answer": {
      "włośnik": "pobieranie wody z solami mineralnymi",
      "komórka nerwowa": "przekazywanie informacji",
      "komórka mięśniowa": "kurczenie się i umożliwianie ruchu",
      "plemnik": "przekazywanie materiału genetycznego potomstwu"
    },
    "explanation": "Kształt i budowa wyspecjalizowanych komórek są związane z ich zadaniami: pobieraniem, przewodzeniem informacji, ruchem albo rozmnażaniem.",
    "image": "r02_komorki_wyspecjalizowane.jpg"
  },
  {
    "id": "R02_KOM_12",
    "section": "Budowa komórek",
    "type": "true_false",
    "prompt": "Komórki roślinne i zwierzęce są komórkami jądrowymi.",
    "options": null,
    "answer": true,
    "explanation": "Oba typy komórek mają jądro komórkowe zawierające DNA, dlatego należą do komórek jądrowych.",
    "image": "r02_komorka_zwierzeca.jpg"
  },
  {
    "id": "R02_FOTO_01",
    "section": "Fotosynteza",
    "type": "single_choice",
    "prompt": "W jakim elemencie komórki roślinnej zachodzi fotosynteza?",
    "options": [
      "chloroplaście",
      "mitochondrium",
      "jądrze komórkowym",
      "wakuoli",
      "błonie komórkowej",
      "ścianie komórkowej"
    ],
    "answer": 0,
    "explanation": "Fotosynteza zachodzi w chloroplastach, ponieważ zawierają chlorofil pochłaniający energię światła.",
    "image": "r02_schemat_fotosyntezy.jpg"
  },
  {
    "id": "R02_FOTO_02",
    "section": "Fotosynteza",
    "type": "fill_in",
    "prompt": "W fotosyntezie z __________ i __________ powstają __________ oraz __________.",
    "options": null,
    "answer": [
      "dwutlenku węgla",
      "wody",
      "cukry",
      "tlen"
    ],
    "altAnswers": [
      [
        "dwutlenku węgla",
        "dwutlenek węgla",
        "CO2"
      ],
      [
        "wody",
        "woda",
        "H2O"
      ],
      [
        "cukry",
        "cukier",
        "glukoza"
      ],
      [
        "tlen",
        "O2"
      ]
    ],
    "explanation": "Substratami fotosyntezy są dwutlenek węgla i woda, a produktami cukry, głównie glukoza, oraz tlen.",
    "image": "r02_schemat_fotosyntezy.jpg"
  },
  {
    "id": "R02_FOTO_03",
    "section": "Fotosynteza",
    "type": "sequence",
    "prompt": "Ułóż etapy wykorzystania wody i powstawania cukru w roślinie.",
    "options": null,
    "items": [
      "cukier jest transportowany do organów rośliny",
      "woda dociera do liści",
      "korzenie pobierają wodę z solami mineralnymi",
      "w chloroplastach powstaje cukier"
    ],
    "answer": [
      "korzenie pobierają wodę z solami mineralnymi",
      "woda dociera do liści",
      "w chloroplastach powstaje cukier",
      "cukier jest transportowany do organów rośliny"
    ],
    "explanation": "Korzenie pobierają wodę, która dociera do liści. W chloroplastach liści zachodzi fotosynteza, a wytworzony cukier jest rozprowadzany do innych organów."
  },
  {
    "id": "R02_FOTO_04",
    "section": "Fotosynteza",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki wpływające na przebieg fotosyntezy wymienione w rozdziale.",
    "options": [
      "światło",
      "dwutlenek węgla",
      "woda",
      "temperatura",
      "sole mineralne",
      "alkohol etylowy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Na fotosyntezę wpływają światło, ilość dwutlenku węgla, dostęp do wody, temperatura oraz sole mineralne potrzebne między innymi do wytwarzania chlorofilu.",
    "image": "r02_czynniki_fotosyntezy.jpg"
  },
  {
    "id": "R02_FOTO_05",
    "section": "Fotosynteza",
    "type": "true_false",
    "prompt": "Chlorofil pochłania energię światła słonecznego i przekształca ją w energię potrzebną do wytworzenia cukru.",
    "options": null,
    "answer": true,
    "explanation": "Zielony barwnik chlorofil umożliwia wykorzystanie energii światła podczas fotosyntezy."
  },
  {
    "id": "R02_FOTO_06",
    "section": "Fotosynteza",
    "type": "match",
    "prompt": "Połącz sposób wykorzystania cukrów przez roślinę z odpowiednim opisem.",
    "options": null,
    "left": [
      "źródło energii",
      "materiał budulcowy",
      "materiał zapasowy"
    ],
    "right": [
      "zużycie w procesie oddychania",
      "przekształcanie w związki budujące ciało",
      "magazynowanie do późniejszego wykorzystania"
    ],
    "answer": {
      "źródło energii": "zużycie w procesie oddychania",
      "materiał budulcowy": "przekształcanie w związki budujące ciało",
      "materiał zapasowy": "magazynowanie do późniejszego wykorzystania"
    },
    "explanation": "Cukry mogą zostać utlenione w oddychaniu, przekształcone w materiały budujące roślinę albo zmagazynowane jako zapas."
  },
  {
    "id": "R02_FOTO_07",
    "section": "Fotosynteza",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który jest produktem fotosyntezy, a nie czynnikiem potrzebnym do jej przebiegu: światło, woda, dwutlenek węgla, tlen.",
    "options": null,
    "answer": "tlen",
    "explanation": "Światło, woda i dwutlenek węgla są potrzebne do fotosyntezy, natomiast tlen powstaje w jej wyniku."
  },
  {
    "id": "R02_FOTO_08",
    "section": "Fotosynteza",
    "type": "scenario",
    "prompt": "W szklarni zwiększono zawartość dwutlenku węgla, ale roślinom nie zapewniono wystarczającej ilości światła. Dlaczego plony mogą nie wzrosnąć?",
    "options": [
      "ponieważ niedobór innego czynnika może ograniczać fotosyntezę",
      "ponieważ dwutlenek węgla zawsze zatrzymuje fotosyntezę",
      "ponieważ światło jest produktem fotosyntezy",
      "ponieważ rośliny nie pobierają dwutlenku węgla",
      "ponieważ fotosynteza zachodzi wyłącznie nocą",
      "ponieważ cukier jest pobierany przez korzenie"
    ],
    "answer": 0,
    "explanation": "Zwiększenie ilości dwutlenku węgla pomaga tylko wtedy, gdy roślina ma również odpowiednio dużo światła, wody, soli mineralnych i właściwą temperaturę."
  },
  {
    "id": "R02_FOTO_09",
    "section": "Fotosynteza",
    "type": "single_choice",
    "prompt": "Dlaczego fotosynteza jest ważna dla większości organizmów na Ziemi?",
    "options": [
      "dostarcza pokarmu organizmom samożywnym i tlenu wykorzystywanego przez wiele organizmów",
      "usuwa z komórek cały materiał genetyczny",
      "zamienia wszystkie sole mineralne w wodę",
      "zachodzi w płucach i ogrzewa ciało",
      "wytwarza wyłącznie dwutlenek węgla",
      "zastępuje wszystkie pozostałe czynności życiowe"
    ],
    "answer": 0,
    "explanation": "Fotosynteza dostarcza związki pokarmowe organizmom samożywnym, a uwalniany tlen jest potrzebny do oddychania większości organizmów."
  },
  {
    "id": "R02_FOTO_10",
    "section": "Fotosynteza",
    "type": "sort",
    "prompt": "Przyporządkuj rośliny do ich zapotrzebowania na światło.",
    "options": null,
    "items": [
      "słonecznik",
      "zawilec",
      "przylaszczka"
    ],
    "categories": [
      "światłolubne",
      "cieniolubne"
    ],
    "answer": {
      "światłolubne": [
        "słonecznik"
      ],
      "cieniolubne": [
        "zawilec",
        "przylaszczka"
      ]
    },
    "explanation": "Słonecznik wymaga dużej ilości światła, natomiast zawilec i przylaszczka mogą rosnąć w cieniu leśnych drzew.",
    "image": "r02_rosliny_swiatlolubne_cieniolubne.jpg"
  },
  {
    "id": "R02_FOTO_11",
    "section": "Fotosynteza",
    "type": "scenario",
    "prompt": "Fragment moczarki umieszczono w wodzie o temperaturze około 50-60 stopni Celsjusza. W probówce zebrało się mało gazu. Jaki wniosek najlepiej pasuje do obserwacji?",
    "options": [
      "zbyt wysoka temperatura ogranicza lub zatrzymuje fotosyntezę",
      "wysoka temperatura zawsze maksymalnie przyspiesza fotosyntezę",
      "roślina zaczęła pobierać tlen jako produkt fotosyntezy",
      "chlorofil został zastąpiony wodą",
      "dwutlenek węgla przestał być potrzebny",
      "fotosynteza zachodzi tylko w korzeniach"
    ],
    "answer": 0,
    "explanation": "W zbyt wysokiej temperaturze fotosynteza nie zachodzi prawidłowo. Rozdział podaje, że podobnie jak w bardzo niskiej temperaturze, może się zatrzymać, na przykład powyżej 50 stopni Celsjusza.",
    "image": "r02_czynniki_fotosyntezy.jpg"
  },
  {
    "id": "R02_FOTO_12",
    "section": "Fotosynteza",
    "type": "true_false",
    "prompt": "Niektóre rośliny iglaste mogą prowadzić fotosyntezę w temperaturze poniżej 0 stopni Celsjusza.",
    "options": null,
    "answer": true,
    "explanation": "Poszczególne gatunki są przystosowane do różnych temperatur; w rozdziale podano, że rośliny iglaste mogą fotosyntetyzować poniżej 0 stopni Celsjusza."
  },
  {
    "id": "R02_ODD_01",
    "section": "Oddychanie komórkowe",
    "type": "single_choice",
    "prompt": "Na czym polega oddychanie komórkowe?",
    "options": [
      "na uwalnianiu energii ze związków pokarmowych w reakcjach zachodzących w komórkach",
      "na samym wdychaniu i wydychaniu powietrza",
      "na wytwarzaniu cukru z dwutlenku węgla i wody",
      "na transportowaniu tlenu wyłącznie przez płuca",
      "na magazynowaniu całej wody w wakuoli",
      "na usuwaniu materiału genetycznego z komórki"
    ],
    "answer": 0,
    "explanation": "Oddychanie to zachodzący w komórkach proces uwalniania energii ze złożonych związków chemicznych, na przykład cukrów."
  },
  {
    "id": "R02_ODD_02",
    "section": "Oddychanie komórkowe",
    "type": "fill_in",
    "prompt": "W oddychaniu tlenowym cukier reaguje z __________, a powstają energia, __________ i __________.",
    "options": null,
    "answer": [
      "tlenem",
      "dwutlenek węgla",
      "woda"
    ],
    "altAnswers": [
      [
        "tlenem",
        "tlen",
        "O2"
      ],
      [
        "dwutlenek węgla",
        "CO2"
      ],
      [
        "woda",
        "H2O"
      ]
    ],
    "explanation": "Schemat oddychania tlenowego to: cukier i tlen prowadzą do uwolnienia energii oraz powstania dwutlenku węgla i wody.",
    "image": "r02_schemat_oddychania_tlenowego.jpg"
  },
  {
    "id": "R02_ODD_03",
    "section": "Oddychanie komórkowe",
    "type": "match",
    "prompt": "Połącz proces z miejscem jego zachodzenia.",
    "options": null,
    "left": [
      "oddychanie tlenowe u roślin i zwierząt",
      "fermentacja",
      "oddychanie tlenowe u bakterii"
    ],
    "right": [
      "mitochondria",
      "cytozol",
      "cytozol komórki bakteryjnej"
    ],
    "answer": {
      "oddychanie tlenowe u roślin i zwierząt": "mitochondria",
      "fermentacja": "cytozol",
      "oddychanie tlenowe u bakterii": "cytozol komórki bakteryjnej"
    },
    "explanation": "U organizmów jądrowych większość etapów oddychania tlenowego zachodzi w mitochondriach, fermentacja przebiega w cytozolu, a bakterie nie mają mitochondriów, więc oddychają w cytozolu."
  },
  {
    "id": "R02_ODD_04",
    "section": "Oddychanie komórkowe",
    "type": "true_false",
    "prompt": "Oddychanie komórkowe zachodzi w płucach.",
    "options": null,
    "answer": false,
    "explanation": "Oddychanie zachodzi w komórkach. Płuca służą do pobierania tlenu i usuwania dwutlenku węgla, ale nie są miejscem samego procesu komórkowego."
  },
  {
    "id": "R02_ODD_05",
    "section": "Oddychanie komórkowe",
    "type": "multi_select",
    "prompt": "Zaznacz procesy, do których organizm może wykorzystać energię uwolnioną podczas oddychania.",
    "options": [
      "wzrost",
      "poruszanie się",
      "rozmnażanie się",
      "reakcje chemiczne w komórkach",
      "utrzymywanie stałej temperatury ciała",
      "wytwarzanie światła słonecznego"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Energia z oddychania napędza czynności życiowe i reakcje komórkowe, a u części zwierząt pomaga także utrzymywać stałą temperaturę ciała."
  },
  {
    "id": "R02_ODD_06",
    "section": "Oddychanie komórkowe",
    "type": "odd_one_out",
    "prompt": "Wskaż substancję, która jest potrzebna do oddychania tlenowego, a nie powstaje w jego wyniku: energia, dwutlenek węgla, woda, tlen.",
    "options": null,
    "answer": "tlen",
    "explanation": "Tlen jest substratem oddychania tlenowego. Energia, dwutlenek węgla i woda są przedstawione jako wyniki tego procesu."
  },
  {
    "id": "R02_ODD_07",
    "section": "Oddychanie komórkowe",
    "type": "scenario",
    "prompt": "Do butelki z ciepłą wodą, cukrem i drożdżami założono balon. Po pewnym czasie balon się napełnił. Jaki gaz wytworzyły drożdże?",
    "options": [
      "dwutlenek węgla",
      "tlen",
      "azot",
      "wodór",
      "para chlorofilu",
      "ozon"
    ],
    "answer": 0,
    "explanation": "Podczas fermentacji alkoholowej drożdże wytwarzają dwutlenek węgla, który może napełnić balon.",
    "image": "r02_doswiadczenie_drozdze.jpg"
  },
  {
    "id": "R02_ODD_08",
    "section": "Oddychanie komórkowe",
    "type": "single_choice",
    "prompt": "Jak fermentacja wypada pod względem ilości uzyskanej energii w porównaniu z oddychaniem tlenowym?",
    "options": [
      "dostarcza mniej energii",
      "dostarcza zawsze więcej energii",
      "dostarcza dokładnie tyle samo energii",
      "nie uwalnia żadnej energii",
      "wytwarza wyłącznie energię świetlną",
      "zachodzi tylko wtedy, gdy jest bardzo dużo tlenu"
    ],
    "answer": 0,
    "explanation": "Fermentacja jest mniej wydajna od oddychania tlenowego, dlatego z tej samej ilości cukru organizm uzyskuje mniej energii."
  },
  {
    "id": "R02_ODD_09",
    "section": "Oddychanie komórkowe",
    "type": "sequence",
    "prompt": "Ułóż etapy doświadczenia sprawdzającego, czy drożdże wytwarzają dwutlenek węgla.",
    "options": null,
    "items": [
      "gaz z balonu wprowadza się do wody wapiennej",
      "przygotowuje się próbę kontrolną bez drożdży",
      "na butelkę zakłada się balon",
      "obserwuje się zmętnienie wody wapiennej",
      "do ciepłej wody z cukrem dodaje się drożdże"
    ],
    "answer": [
      "do ciepłej wody z cukrem dodaje się drożdże",
      "przygotowuje się próbę kontrolną bez drożdży",
      "na butelkę zakłada się balon",
      "gaz z balonu wprowadza się do wody wapiennej",
      "obserwuje się zmętnienie wody wapiennej"
    ],
    "explanation": "Próba badawcza zawiera drożdże, a kontrolna ich nie zawiera. Zebrany w balonie gaz bada się wodą wapienną, która mętnieje pod wpływem dwutlenku węgla.",
    "image": "r02_doswiadczenie_drozdze.jpg"
  },
  {
    "id": "R02_ODD_10",
    "section": "Oddychanie komórkowe",
    "type": "sort",
    "prompt": "Przyporządkuj elementy schematu oddychania tlenowego do substratów i wyników procesu.",
    "options": null,
    "items": [
      "cukier",
      "tlen",
      "dwutlenek węgla",
      "woda",
      "energia"
    ],
    "categories": [
      "substraty",
      "wyniki procesu"
    ],
    "answer": {
      "substraty": [
        "cukier",
        "tlen"
      ],
      "wyniki procesu": [
        "dwutlenek węgla",
        "woda",
        "energia"
      ]
    },
    "explanation": "W oddychaniu tlenowym zużywane są cukier i tlen, a uwalnia się energia oraz powstają dwutlenek węgla i woda.",
    "image": "r02_schemat_oddychania_tlenowego.jpg"
  },
  {
    "id": "R02_ODD_11",
    "section": "Oddychanie komórkowe",
    "type": "riddle",
    "prompt": "Jak nazywa się płyn, który mętnieje w kontakcie z dwutlenkiem węgla i służy do wykrywania tego gazu w doświadczeniu z drożdżami?",
    "options": null,
    "answer": "woda wapienna",
    "altAnswers": [
      "woda wapienna",
      "wody wapiennej"
    ],
    "explanation": "Woda wapienna mętnieje pod wpływem dwutlenku węgla, dlatego pozwala wykazać obecność gazu powstałego podczas oddychania drożdży."
  },
  {
    "id": "R02_ODD_12",
    "section": "Oddychanie komórkowe",
    "type": "true_false",
    "prompt": "Organizmy lądowe pobierają tlen z powietrza, a organizmy wodne korzystają z tlenu rozpuszczonego w wodzie.",
    "options": null,
    "answer": true,
    "explanation": "Źródło tlenu zależy od środowiska życia: na lądzie jest nim powietrze, a w wodzie tlen rozpuszczony."
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pierwiastek z jego przybliżoną zawartością w organizmie człowieka.",
    "options": null,
    "left": [
      "tlen",
      "węgiel",
      "wodór",
      "azot"
    ],
    "right": [
      "65 procent",
      "18 procent",
      "10 procent",
      "3 procent"
    ],
    "answer": {
      "tlen": "65 procent",
      "węgiel": "18 procent",
      "wodór": "10 procent",
      "azot": "3 procent"
    },
    "explanation": "Wykres podaje odpowiednio: tlen 65 procent, węgiel 18 procent, wodór 10 procent i azot 3 procent masy organizmu człowieka.",
    "image": "r02_sklad_ciala_czlowieka.jpg"
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania organizmów wielokomórkowych zgodnie z opisem ewolucyjnym w rozdziale.",
    "options": null,
    "items": [
      "specjalizacja grup komórek",
      "powstanie organizmów wielokomórkowych",
      "życie komórek w koloniach",
      "pierwsze organizmy jednokomórkowe"
    ],
    "answer": [
      "pierwsze organizmy jednokomórkowe",
      "życie komórek w koloniach",
      "specjalizacja grup komórek",
      "powstanie organizmów wielokomórkowych"
    ],
    "explanation": "Najpierw istniały organizmy jednokomórkowe, potem część komórek pozostawała razem w koloniach, grupy komórek specjalizowały się i w ten sposób powstały organizmy wielokomórkowe."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W szklarni zwiększono ilość dwutlenku węgla, zapewniono wodę i sole mineralne, ale temperatura przez długi czas przekraczała 50 stopni Celsjusza. Jaki skutek jest najbardziej prawdopodobny?",
    "options": [
      "fotosynteza będzie silnie ograniczona mimo dużej ilości dwutlenku węgla",
      "fotosynteza zawsze osiągnie maksymalną intensywność",
      "rośliny zaczną prowadzić fermentację zamiast wszystkich innych procesów",
      "chloroplasty zamienią się w mitochondria",
      "tlen stanie się substratem fotosyntezy",
      "rośliny przestaną potrzebować światła"
    ],
    "answer": 0,
    "explanation": "Zbyt wysoka temperatura może zatrzymać fotosyntezę. Zwiększenie jednego czynnika nie usuwa ograniczenia spowodowanego niewłaściwą temperaturą.",
    "image": "r02_czynniki_fotosyntezy.jpg"
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do typu komórki, dla którego są charakterystyczne w rozdziale.",
    "options": null,
    "items": [
      "nić DNA bezpośrednio w cytozolu",
      "otoczka śluzowa",
      "chloroplast",
      "jedna duża wakuola",
      "wodniczka"
    ],
    "categories": [
      "komórka bakteryjna",
      "komórka roślinna",
      "komórka zwierzęca"
    ],
    "answer": {
      "komórka bakteryjna": [
        "nić DNA bezpośrednio w cytozolu",
        "otoczka śluzowa"
      ],
      "komórka roślinna": [
        "chloroplast",
        "jedna duża wakuola"
      ],
      "komórka zwierzęca": [
        "wodniczka"
      ]
    },
    "explanation": "Bakterie mają DNA poza jądrem i mogą mieć otoczkę śluzową, rośliny mają chloroplasty oraz dużą wakuolę, a przy komórce zwierzęcej opisano wodniczki.",
    "image": "r02_porownanie_komorek.jpg"
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne zależności między fotosyntezą a oddychaniem tlenowym.",
    "options": [
      "glukoza jest produktem fotosyntezy i substratem oddychania",
      "tlen jest produktem fotosyntezy i substratem oddychania",
      "dwutlenek węgla jest substratem fotosyntezy i produktem oddychania",
      "woda jest substratem fotosyntezy i produktem oddychania",
      "oba procesy zachodzą wyłącznie w mitochondriach",
      "oba procesy polegają na uwalnianiu energii z cukru"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Produkty fotosyntezy mogą być substratami oddychania, a produkty oddychania mogą być substratami fotosyntezy. Procesy zachodzą w innych strukturach i mają odmienny kierunek przemian energii.",
    "image": "r02_fotosynteza_i_oddychanie.jpg"
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Fotosynteza zachodzi w __________ dzięki obecności __________, a oddychanie tlenowe u roślin zachodzi głównie w __________.",
    "options": null,
    "answer": [
      "chloroplastach",
      "chlorofilu",
      "mitochondriach"
    ],
    "altAnswers": [
      [
        "chloroplastach",
        "chloroplast"
      ],
      [
        "chlorofilu",
        "chlorofilowi",
        "chlorofil"
      ],
      [
        "mitochondriach",
        "mitochondrium"
      ]
    ],
    "explanation": "Chloroplasty zawierają chlorofil potrzebny do fotosyntezy, natomiast mitochondria są miejscem większości etapów oddychania tlenowego u roślin.",
    "image": "r02_fotosynteza_i_oddychanie.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie występuje zarówno w komórce roślinnej, jak i zwierzęcej: jądro komórkowe, mitochondrium, cytozol, chloroplast.",
    "options": null,
    "answer": "chloroplast",
    "explanation": "Jądro, mitochondria i cytozol występują w komórkach roślinnych i zwierzęcych. Chloroplasty są charakterystyczne dla komórek roślinnych.",
    "image": "r02_porownanie_komorek.jpg"
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu z moczarką przygotowano trzy zestawy: około 0 stopni Celsjusza, około 22 stopni Celsjusza i około 50-60 stopni Celsjusza. Najwięcej gazu zebrało się w temperaturze pokojowej. Co wynika z tego dla hipotezy, że wysoka temperatura zawsze zwiększa intensywność fotosyntezy?",
    "options": [
      "hipotezę należy odrzucić",
      "hipotezę należy bezwarunkowo potwierdzić",
      "doświadczenie dowodzi, że światło nie jest potrzebne",
      "gazem na pewno był dwutlenek węgla",
      "temperatura nie ma żadnego wpływu",
      "fotosynteza zachodzi tylko przy 0 stopni Celsjusza"
    ],
    "answer": 0,
    "explanation": "Najlepszy wynik w temperaturze pośredniej pokazuje, że zarówno zbyt niska, jak i zbyt wysoka temperatura ograniczają proces. Nie można więc uznać, że im wyższa temperatura, tym intensywniejsza fotosynteza."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji rośliny od najmniejszego do największego.",
    "options": null,
    "items": [
      "system pędowy",
      "tkanka liścia",
      "sosna",
      "komórka liścia",
      "liść"
    ],
    "answer": [
      "komórka liścia",
      "tkanka liścia",
      "liść",
      "system pędowy",
      "sosna"
    ],
    "explanation": "Komórki tworzą tkanki, tkanki budują organ, jakim jest liść, organy tworzą system pędowy, a systemy składają się na cały organizm rośliny.",
    "image": "r02_hierarchia_organizmu.jpg"
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przykład z grupą związku chemicznego i pełnioną funkcją.",
    "options": null,
    "left": [
      "skrobia u roślin",
      "celuloza ściany komórkowej",
      "warstwa pod skórą zwierzęcia",
      "zapas w nasionach fasoli"
    ],
    "right": [
      "cukier jako materiał zapasowy",
      "cukier jako materiał budulcowy",
      "tłuszcz jako zapas i izolacja",
      "białko jako materiał zapasowy"
    ],
    "answer": {
      "skrobia u roślin": "cukier jako materiał zapasowy",
      "celuloza ściany komórkowej": "cukier jako materiał budulcowy",
      "warstwa pod skórą zwierzęcia": "tłuszcz jako zapas i izolacja",
      "zapas w nasionach fasoli": "białko jako materiał zapasowy"
    },
    "explanation": "Ten sam typ związku może pełnić różne funkcje. Cukry mogą być zapasem albo budulcem, tłuszcze magazynują energię i izolują, a białka mogą być zapasem w nasionach.",
    "image": "r02_zwiazki_chemiczne.jpg"
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie informacje prawdziwe o fermentacji alkoholowej opisanej w rozdziale.",
    "options": [
      "zachodzi w cytozolu",
      "dostarcza mniej energii niż oddychanie tlenowe",
      "może być prowadzona przez drożdże",
      "powstają dwutlenek węgla i alkohol etylowy",
      "wymaga dużej ilości tlenu",
      "zachodzi w chloroplastach"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Fermentacja alkoholowa przebiega bez udziału tlenu w cytozolu, jest mniej wydajna niż oddychanie tlenowe, a drożdże wytwarzają w niej dwutlenek węgla i alkohol etylowy."
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pantofelek i euglena są zbudowane z jednej komórki. Dlaczego można je nazwać jednocześnie komórką i całym organizmem?",
    "options": [
      "ponieważ jedna komórka wykonuje u nich wszystkie czynności życiowe",
      "ponieważ nie wykonują żadnych czynności życiowych",
      "ponieważ każda z nich jest tkanką",
      "ponieważ mają wiele układów narządów",
      "ponieważ są zbudowane wyłącznie z soli mineralnych",
      "ponieważ nie zawierają materiału genetycznego"
    ],
    "answer": 0,
    "explanation": "Organizm jednokomórkowy składa się z jednej komórki, która samodzielnie wykonuje wszystkie czynności życiowe, dlatego ta sama struktura jest komórką i całym organizmem."
  }
];

const KID_PROMPTS = {
  "R02_CECH_01": "Co znaczy, że organizm ma budowę hierarchiczną?",
  "R02_CHEM_01": "Czego jest najwięcej w organizmie?",
  "R02_KOM_01": "Czym jest komórka?",
  "R02_FOTO_01": "Gdzie w komórce rośliny zachodzi fotosynteza?",
  "R02_ODD_01": "Co dzieje się podczas oddychania w komórkach?"
};

const chapter = {
  "id": "r02",
  "number": 2,
  "title": "Organizacja i chemizm życia",
  "icon": "🧬",
  "sectionOrder": [
    "Cechy organizmów",
    "Skład chemiczny organizmów",
    "Budowa komórek",
    "Fotosynteza",
    "Oddychanie komórkowe"
  ],
  "sectionIcons": {
    "Cechy organizmów": "🌱",
    "Skład chemiczny organizmów": "⚗️",
    "Budowa komórek": "🔬",
    "Fotosynteza": "☀️",
    "Oddychanie komórkowe": "⚡"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
