// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BUD  = Budowa i podział układu nerwowego
//   OUN  = Działanie ośrodkowego układu nerwowego
//   OBW  = Funkcjonowanie obwodowego układu nerwowego
//   HIG  = Choroby i higiena układu nerwowego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_BUD_01",
    "section": "Budowa i podział układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje układu nerwowego.",
    "options": [
      "Odbieranie bodźców z otoczenia i wnętrza organizmu",
      "Przesyłanie impulsów nerwowych",
      "Wywoływanie reakcji na odbierane bodźce",
      "Trawienie pokarmu",
      "Rozprowadzanie tlenu w organizmie",
      "Wytwarzanie kości"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Układ nerwowy odbiera bodźce z otoczenia i wnętrza organizmu, przesyła impulsy nerwowe oraz wywołuje reakcje na odbierane bodźce."
  },
  {
    "id": "R07_BUD_02",
    "section": "Budowa i podział układu nerwowego",
    "type": "single_choice",
    "prompt": "Jaka komórka jest podstawową jednostką strukturalną i funkcjonalną układu nerwowego?",
    "options": [
      "Neuron",
      "Receptor",
      "Efektor",
      "Nerw rdzeniowy",
      "Nerw czaszkowy",
      "Opona mózgowo-rdzeniowa"
    ],
    "answer": 0,
    "explanation": "Podstawowymi jednostkami strukturalnymi i funkcjonalnymi układu nerwowego są komórki nerwowe, czyli neurony.",
    "image": "r07_neuron.jpg"
  },
  {
    "id": "R07_BUD_03",
    "section": "Budowa i podział układu nerwowego",
    "type": "match",
    "prompt": "Połącz element neuronu z jego opisem.",
    "options": null,
    "left": [
      "Dendryt",
      "Akson",
      "Osłonka mielinowa"
    ],
    "right": [
      "Przesyła impuls w kierunku ciała komórki",
      "Kieruje impuls od ciała komórki",
      "Chroni akson i przyspiesza przewodzenie impulsu"
    ],
    "answer": {
      "Dendryt": "Przesyła impuls w kierunku ciała komórki",
      "Akson": "Kieruje impuls od ciała komórki",
      "Osłonka mielinowa": "Chroni akson i przyspiesza przewodzenie impulsu"
    },
    "explanation": "Dendryty odbierają impulsy i kierują je do ciała komórki. Akson przewodzi impuls od ciała komórki, a osłonka mielinowa chroni akson i przyspiesza przewodzenie impulsu.",
    "image": "r07_neuron.jpg"
  },
  {
    "id": "R07_BUD_04",
    "section": "Budowa i podział układu nerwowego",
    "type": "true_false",
    "prompt": "Dendryty są zwykle liczne i rozgałęzione, natomiast akson jest pojedynczą wypustką komórki nerwowej.",
    "options": null,
    "answer": true,
    "explanation": "Dendryty są licznymi, krótkimi i rozgałęzionymi wypustkami, a akson jest pojedynczą wypustką komórki nerwowej.",
    "image": "r07_neuron.jpg"
  },
  {
    "id": "R07_BUD_05",
    "section": "Budowa i podział układu nerwowego",
    "type": "sequence",
    "prompt": "Ułóż etapy przekazywania sygnału w synapsie chemicznej.",
    "options": null,
    "items": [
      "W neuronie odbierającym ponownie powstaje impuls elektryczny",
      "Impuls elektryczny dociera do zakończenia pierwszego neuronu",
      "Neuroprzekaźnik zostaje uwolniony do szczeliny synaptycznej",
      "Neuroprzekaźnik oddziałuje z receptorami neuronu odbierającego"
    ],
    "answer": [
      "Impuls elektryczny dociera do zakończenia pierwszego neuronu",
      "Neuroprzekaźnik zostaje uwolniony do szczeliny synaptycznej",
      "Neuroprzekaźnik oddziałuje z receptorami neuronu odbierającego",
      "W neuronie odbierającym ponownie powstaje impuls elektryczny"
    ],
    "explanation": "W synapsie chemicznej impuls elektryczny zostaje zamieniony na sygnał chemiczny przenoszony przez neuroprzekaźnik, a w neuronie odbierającym ponownie na impuls elektryczny.",
    "image": "r07_synapsa_chemiczna.jpg"
  },
  {
    "id": "R07_BUD_06",
    "section": "Budowa i podział układu nerwowego",
    "type": "single_choice",
    "prompt": "Jak może być przekazywane pobudzenie pomiędzy neuronami?",
    "options": [
      "Przez neuroprzekaźniki w synapsie chemicznej lub bezpośredni impuls w synapsie elektrycznej",
      "Wyłącznie przez osłonkę mielinową",
      "Wyłącznie przez płyn mózgowo-rdzeniowy",
      "Tylko przez nerwy rdzeniowe",
      "Tylko przez mięśnie szkieletowe",
      "Wyłącznie przez hormony"
    ],
    "answer": 0,
    "explanation": "Pomiędzy neuronami pobudzenie może być przekazywane przy udziale neuroprzekaźników w synapsie chemicznej albo jako bezpośredni impuls elektryczny w synapsie elektrycznej.",
    "image": "r07_synapsa_chemiczna.jpg"
  },
  {
    "id": "R07_BUD_07",
    "section": "Budowa i podział układu nerwowego",
    "type": "fill_in",
    "prompt": "Ze względu na budowę układ nerwowy dzieli się na układ __________ oraz układ __________.",
    "options": null,
    "answer": [
      "ośrodkowy",
      "obwodowy"
    ],
    "altAnswers": [
      [
        "ośrodkowy",
        "osrodkowy"
      ],
      [
        "obwodowy"
      ]
    ],
    "explanation": "Strukturalnie układ nerwowy składa się z ośrodkowego układu nerwowego i obwodowego układu nerwowego."
  },
  {
    "id": "R07_BUD_08",
    "section": "Budowa i podział układu nerwowego",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do ośrodkowego lub obwodowego układu nerwowego.",
    "options": null,
    "items": [
      "mózgowie",
      "rdzeń kręgowy",
      "nerwy czaszkowe",
      "nerwy rdzeniowe"
    ],
    "categories": [
      "Ośrodkowy układ nerwowy",
      "Obwodowy układ nerwowy"
    ],
    "answer": {
      "Ośrodkowy układ nerwowy": [
        "mózgowie",
        "rdzeń kręgowy"
      ],
      "Obwodowy układ nerwowy": [
        "nerwy czaszkowe",
        "nerwy rdzeniowe"
      ]
    },
    "explanation": "Ośrodkowy układ nerwowy tworzą mózgowie i rdzeń kręgowy, a do obwodowego układu nerwowego należą nerwy czaszkowe i rdzeniowe.",
    "image": "r07_uklad_nerwowy.jpg"
  },
  {
    "id": "R07_BUD_09",
    "section": "Budowa i podział układu nerwowego",
    "type": "single_choice",
    "prompt": "Która część obwodowego układu nerwowego odpowiada za czynności zwykle zależne od woli, na przykład ruchy mięśni szkieletowych?",
    "options": [
      "Układ somatyczny",
      "Układ autonomiczny",
      "Układ współczulny",
      "Układ przywspółczulny",
      "Rdzeń kręgowy",
      "Pień mózgu"
    ],
    "answer": 0,
    "explanation": "Układ somatyczny przekazuje sygnały do mięśni szkieletowych i odpowiada za czynności zwykle zależne od woli człowieka."
  },
  {
    "id": "R07_BUD_10",
    "section": "Budowa i podział układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz reakcje związane z pobudzeniem układu współczulnego.",
    "options": [
      "Przyspieszenie akcji serca",
      "Rozszerzenie oskrzeli",
      "Spowolnienie pracy narządów układu pokarmowego",
      "Zwolnienie akcji serca",
      "Zwężenie oskrzeli",
      "Pobudzenie ruchów jelit"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Układ współczulny mobilizuje organizm: przyspiesza akcję serca, rozszerza oskrzela i ogranicza aktywność układu pokarmowego."
  },
  {
    "id": "R07_BUD_11",
    "section": "Budowa i podział układu nerwowego",
    "type": "scenario",
    "prompt": "Uczeń spokojnie czyta książkę przed snem. Jego organizm nie jest mobilizowany do wysiłku, akcja serca zwalnia, a układ pokarmowy może pracować aktywniej. Która część autonomicznego układu nerwowego dominuje?",
    "options": [
      "Układ przywspółczulny",
      "Układ współczulny",
      "Układ somatyczny",
      "Nerwy rdzeniowe",
      "Móżdżek",
      "Kora mózgowa"
    ],
    "answer": 0,
    "explanation": "Układ przywspółczulny przywraca organizmowi spokój po mobilizacji, spowalnia akcję serca i pobudza elementy układu pokarmowego."
  },
  {
    "id": "R07_BUD_12",
    "section": "Budowa i podział układu nerwowego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: układ współczulny, układ przywspółczulny, układ autonomiczny, układ somatyczny.",
    "options": null,
    "answer": "układ somatyczny",
    "explanation": "Układ współczulny i przywspółczulny są częściami układu autonomicznego. Układ somatyczny stanowi odrębną część obwodowego układu nerwowego."
  },
  {
    "id": "R07_OUN_01",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "single_choice",
    "prompt": "Co wchodzi w skład ośrodkowego układu nerwowego?",
    "options": [
      "Mózgowie i rdzeń kręgowy",
      "Nerwy czaszkowe i nerwy rdzeniowe",
      "Mózg i nerwy rdzeniowe",
      "Móżdżek i nerwy czaszkowe",
      "Receptory i efektory",
      "Układ współczulny i przywspółczulny"
    ],
    "answer": 0,
    "explanation": "Ośrodkowy układ nerwowy składa się z mózgowia i rdzenia kręgowego.",
    "image": "r07_uklad_nerwowy.jpg"
  },
  {
    "id": "R07_OUN_02",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz elementy chroniące mózgowie i rdzeń kręgowy.",
    "options": [
      "Czaszka i kręgi kręgosłupa",
      "Opony mózgowo-rdzeniowe",
      "Płyn mózgowo-rdzeniowy",
      "Nerwy czaszkowe",
      "Nerwy rdzeniowe",
      "Efektory"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mózgowie i rdzeń kręgowy chronią elementy szkieletu, trzy opony mózgowo-rdzeniowe oraz płyn mózgowo-rdzeniowy, który amortyzuje wstrząsy."
  },
  {
    "id": "R07_OUN_03",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "fill_in",
    "prompt": "Mózgowie składa się z mózgu, __________ i __________.",
    "options": null,
    "answer": [
      "móżdżku",
      "pnia mózgu"
    ],
    "altAnswers": [
      [
        "móżdżku",
        "mozdzku",
        "móżdżek",
        "mozdzek"
      ],
      [
        "pnia mózgu",
        "pnia mozgu",
        "pień mózgu",
        "pien mozgu"
      ]
    ],
    "explanation": "Mózgowie jest złożone z mózgu, móżdżku i pnia mózgu.",
    "image": "r07_mozgowie.jpg"
  },
  {
    "id": "R07_OUN_04",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "true_false",
    "prompt": "Mózg składa się z dwóch półkul, a każda z nich kontroluje przeciwną stronę ciała.",
    "options": null,
    "answer": true,
    "explanation": "Mózg ma prawą i lewą półkulę, a każda półkula kontroluje przeciwną stronę ciała.",
    "image": "r07_mozgowie.jpg"
  },
  {
    "id": "R07_OUN_05",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "match",
    "prompt": "Połącz rodzaj komórki lub struktury mózgu z opisem.",
    "options": null,
    "left": [
      "Neurony",
      "Komórki glejowe",
      "Kora mózgowa"
    ],
    "right": [
      "Komórki nerwowe",
      "Pełnią funkcję podporową ochronną i odżywczą",
      "Największa zewnętrzna struktura mózgu"
    ],
    "answer": {
      "Neurony": "Komórki nerwowe",
      "Komórki glejowe": "Pełnią funkcję podporową ochronną i odżywczą",
      "Kora mózgowa": "Największa zewnętrzna struktura mózgu"
    },
    "explanation": "Mózg zawiera neurony i komórki glejowe. Komórki glejowe pełnią funkcje podporowe, ochronne i odżywcze, a kora mózgowa jest największą zewnętrzną strukturą mózgu."
  },
  {
    "id": "R07_OUN_06",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "sort",
    "prompt": "Przyporządkuj położenie istoty szarej i białej do mózgowia albo rdzenia kręgowego.",
    "options": null,
    "items": [
      "istota szara na zewnątrz",
      "istota biała wewnątrz",
      "istota biała na zewnątrz",
      "istota szara wewnątrz"
    ],
    "categories": [
      "Mózgowie",
      "Rdzeń kręgowy"
    ],
    "answer": {
      "Mózgowie": [
        "istota szara na zewnątrz",
        "istota biała wewnątrz"
      ],
      "Rdzeń kręgowy": [
        "istota biała na zewnątrz",
        "istota szara wewnątrz"
      ]
    },
    "explanation": "W mózgowiu istota szara znajduje się na zewnątrz, a biała wewnątrz. W rdzeniu kręgowym układ jest odwrotny.",
    "image": "r07_rdzen_kregowy.jpg"
  },
  {
    "id": "R07_OUN_07",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "single_choice",
    "prompt": "Za co odpowiada móżdżek?",
    "options": [
      "Za koordynację ruchową, równowagę i napięcie mięśni",
      "Za odbieranie bodźców z receptorów skóry całego ciała",
      "Za przewodzenie impulsów wyłącznie do mięśni twarzy",
      "Za wytwarzanie neuroprzekaźników w każdej synapsie",
      "Za ochronę rdzenia kręgowego przez kręgi",
      "Za wyłącznie świadome sterowanie sercem"
    ],
    "answer": 0,
    "explanation": "Móżdżek odpowiada za koordynację ruchową, zachowanie równowagi oraz napięcie mięśni.",
    "image": "r07_mozgowie.jpg"
  },
  {
    "id": "R07_OUN_08",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz czynności nadzorowane przez pień mózgu niezależnie od woli człowieka.",
    "options": [
      "Oddychanie",
      "Połykanie",
      "Utrzymywanie odpowiedniego ciśnienia krwi",
      "Rytm pracy serca",
      "Czytanie",
      "Pisanie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pień mózgu jest automatycznym centrum kontroli wielu czynności niezależnych od woli, m.in. oddychania, połykania, ciśnienia krwi i rytmu pracy serca."
  },
  {
    "id": "R07_OUN_09",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "match",
    "prompt": "Połącz płat kory mózgowej z funkcją.",
    "options": null,
    "left": [
      "Płat ciemieniowy",
      "Płat potyliczny"
    ],
    "right": [
      "Dotyk i orientacja przestrzenna",
      "Wzrok i interpretacja widzianego obrazu"
    ],
    "answer": {
      "Płat ciemieniowy": "Dotyk i orientacja przestrzenna",
      "Płat potyliczny": "Wzrok i interpretacja widzianego obrazu"
    },
    "explanation": "Płat ciemieniowy wiąże się m.in. z dotykiem, orientacją przestrzenną i czuciem bólu, a płat potyliczny ze wzrokiem i interpretacją widzianego obrazu.",
    "image": "r07_platy_mozgu.jpg"
  },
  {
    "id": "R07_OUN_10",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "true_false",
    "prompt": "W przekroju poprzecznym rdzenia kręgowego istota szara ma charakterystyczny kształt litery H.",
    "options": null,
    "answer": true,
    "explanation": "Centralnie położona istota szara rdzenia kręgowego w przekroju poprzecznym tworzy charakterystyczny kształt litery H.",
    "image": "r07_rdzen_kregowy.jpg"
  },
  {
    "id": "R07_OUN_11",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje rdzenia kręgowego.",
    "options": [
      "Odbieranie sygnałów z obwodowego układu nerwowego",
      "Przewodzenie impulsów z mózgu do ciała",
      "Generowanie prostych odruchów",
      "Tworzenie wspomnień",
      "Odczuwanie emocji",
      "Interpretowanie widzianego obrazu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Rdzeń kręgowy odbiera sygnały z obwodowego układu nerwowego, przewodzi impulsy z mózgu do ciała i generuje proste odruchy."
  },
  {
    "id": "R07_OUN_12",
    "section": "Działanie ośrodkowego układu nerwowego",
    "type": "scenario",
    "prompt": "Doszło do przerwania rdzenia kręgowego. Informacje z miejsc unerwianych przez nerwy odchodzące poniżej uszkodzenia nie mogą dotrzeć do mózgowia. Jaki skutek jest zgodny z takim uszkodzeniem?",
    "options": [
      "Utrata czucia i paraliż mięśniowy w obszarach poniżej uszkodzenia",
      "Wyłącznie lepsza koordynacja ruchowa",
      "Zwiększenie powierzchni kory mózgowej",
      "Przyspieszenie przewodzenia w osłonce mielinowej",
      "Powstanie dodatkowej półkuli mózgu",
      "Stałe pobudzenie płata potylicznego"
    ],
    "answer": 0,
    "explanation": "Przerwanie rdzenia kręgowego może spowodować utratę czucia z obszaru skóry i mięśni oraz paraliż mięśniowy poniżej miejsca uszkodzenia.",
    "image": "r07_rdzen_kregowy.jpg"
  },
  {
    "id": "R07_OBW_01",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "single_choice",
    "prompt": "Jakie nerwy obejmuje obwodowy układ nerwowy?",
    "options": [
      "Nerwy czaszkowe i nerwy rdzeniowe",
      "Mózg i móżdżek",
      "Mózgowie i rdzeń kręgowy",
      "Pień mózgu i kora mózgowa",
      "Opony i płyn mózgowo-rdzeniowy",
      "Dendryty i aksony"
    ],
    "answer": 0,
    "explanation": "Obwodowy układ nerwowy obejmuje nerwy czaszkowe i nerwy rdzeniowe.",
    "image": "r07_nerwy_obwodowe.jpg"
  },
  {
    "id": "R07_OBW_02",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "match",
    "prompt": "Połącz rodzaj nerwów z obszarem, który unerwiają.",
    "options": null,
    "left": [
      "Nerwy czaszkowe",
      "Nerwy rdzeniowe"
    ],
    "right": [
      "Głównie okolice głowy i szyi",
      "Skóra tułowia i kończyn oraz mięśnie i narządy wewnętrzne"
    ],
    "answer": {
      "Nerwy czaszkowe": "Głównie okolice głowy i szyi",
      "Nerwy rdzeniowe": "Skóra tułowia i kończyn oraz mięśnie i narządy wewnętrzne"
    },
    "explanation": "Nerwy czaszkowe unerwiają okolice głowy i szyi, a nerwy rdzeniowe mięśnie, narządy wewnętrzne i skórę tułowia oraz kończyn.",
    "image": "r07_nerwy_obwodowe.jpg"
  },
  {
    "id": "R07_OBW_03",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "true_false",
    "prompt": "Nerwy rdzeniowe przewodzą zarówno informacje czuciowe, jak i ruchowe.",
    "options": null,
    "answer": true,
    "explanation": "Nerwy rdzeniowe przewodzą informacje czuciowe do ośrodkowego układu nerwowego oraz odpowiedzi ruchowe do narządów wykonawczych."
  },
  {
    "id": "R07_OBW_04",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "match",
    "prompt": "Połącz element drogi nerwowej z jego rolą.",
    "options": null,
    "left": [
      "Receptor",
      "Neuron czuciowy",
      "Neuron ruchowy",
      "Efektor"
    ],
    "right": [
      "Odbiera bodziec",
      "Przesyła impuls od receptora do ośrodkowego układu nerwowego",
      "Przesyła impuls od ośrodkowego układu nerwowego do efektora",
      "Wykonuje odpowiedź organizmu"
    ],
    "answer": {
      "Receptor": "Odbiera bodziec",
      "Neuron czuciowy": "Przesyła impuls od receptora do ośrodkowego układu nerwowego",
      "Neuron ruchowy": "Przesyła impuls od ośrodkowego układu nerwowego do efektora",
      "Efektor": "Wykonuje odpowiedź organizmu"
    },
    "explanation": "Receptor odbiera bodziec, neuron czuciowy przewodzi impuls do ośrodkowego układu nerwowego, neuron ruchowy prowadzi sygnał do efektora, a efektor wykonuje reakcję."
  },
  {
    "id": "R07_OBW_05",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "sequence",
    "prompt": "Ułóż elementy łuku odruchowego w kolejności przepływu impulsu nerwowego.",
    "options": null,
    "items": [
      "efektor",
      "neuron ruchowy",
      "receptor",
      "neuron pośredniczący",
      "neuron czuciowy"
    ],
    "answer": [
      "receptor",
      "neuron czuciowy",
      "neuron pośredniczący",
      "neuron ruchowy",
      "efektor"
    ],
    "explanation": "Łuk odruchowy prowadzi od receptora przez neuron czuciowy i pośredniczący do neuronu ruchowego, a następnie do efektora.",
    "image": "r07_luk_odruchowy.jpg"
  },
  {
    "id": "R07_OBW_06",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "fill_in",
    "prompt": "Łuk odruchowy to droga, jaką impuls nerwowy pokonuje od __________ do __________.",
    "options": null,
    "answer": [
      "receptora",
      "efektora"
    ],
    "altAnswers": [
      [
        "receptora",
        "receptor"
      ],
      [
        "efektora",
        "efektor"
      ]
    ],
    "explanation": "Łuk odruchowy jest drogą impulsu nerwowego od receptora do efektora."
  },
  {
    "id": "R07_OBW_07",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odruchów bezwarunkowych i warunkowych.",
    "options": null,
    "items": [
      "kichanie",
      "kaszel",
      "wydzielanie śliny w trakcie jedzenia",
      "jazda na rowerze",
      "włączanie światła przed wejściem do ciemnego pokoju",
      "zamykanie drzwi po wyjściu z domu"
    ],
    "categories": [
      "Bezwarunkowe",
      "Warunkowe"
    ],
    "answer": {
      "Bezwarunkowe": [
        "kichanie",
        "kaszel",
        "wydzielanie śliny w trakcie jedzenia"
      ],
      "Warunkowe": [
        "jazda na rowerze",
        "włączanie światła przed wejściem do ciemnego pokoju",
        "zamykanie drzwi po wyjściu z domu"
      ]
    },
    "explanation": "Odruchy bezwarunkowe są wrodzone. Odruchy warunkowe są nabyte i powstają w ciągu życia."
  },
  {
    "id": "R07_OBW_08",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "single_choice",
    "prompt": "Które zdanie opisuje odruch warunkowy?",
    "options": [
      "Jest wyuczoną reakcją na wielokrotnie powtarzany bodziec i może zanikać bez powtarzania bodźca",
      "Jest zawsze wrodzony i najczęściej niezmienny przez całe życie",
      "Powstaje wyłącznie w płacie potylicznym",
      "Nie ma związku z działaniem układu nerwowego",
      "Jest reakcją wykonywaną wyłącznie świadomie",
      "Zawsze wymaga uszkodzenia rdzenia kręgowego"
    ],
    "answer": 0,
    "explanation": "Odruch nabyty, czyli warunkowy, jest wyuczoną reakcją na powtarzany bodziec i może zanikać, jeśli bodziec przestaje być powtarzany."
  },
  {
    "id": "R07_OBW_09",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "scenario",
    "prompt": "Pies wielokrotnie słyszy dźwięk dzwonka podczas podawania pokarmu. Po pewnym czasie zaczyna wydzielać ślinę już na sam dźwięk dzwonka. Jaki odruch został wytworzony?",
    "options": [
      "Warunkowy",
      "Bezwarunkowy",
      "Kolanowy",
      "Źreniczny",
      "Chwytny",
      "Wyłącznie dowolny"
    ],
    "answer": 0,
    "explanation": "Iwan Pawłow wykazał, że po wielokrotnym łączeniu dźwięku dzwonka z pokarmem pies może zacząć ślinić się na sam dźwięk. Jest to odruch warunkowy.",
    "image": "r07_pawlow.jpg"
  },
  {
    "id": "R07_OBW_10",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "true_false",
    "prompt": "Odruch kolanowy jest odruchem bezwarunkowym, czyli wrodzonym.",
    "options": null,
    "answer": true,
    "explanation": "W doświadczeniu dotyczącym odruchu kolanowego przyjęto, że jest on odruchem bezwarunkowym, czyli wrodzonym.",
    "image": "r07_odruch_kolanowy.jpg"
  },
  {
    "id": "R07_OBW_11",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "scenario",
    "prompt": "Po dotknięciu gorącego przedmiotu człowiek bardzo szybko cofa rękę, zanim świadomie przeanalizuje sytuację. Co najlepiej opisuje tę reakcję?",
    "options": [
      "Automatyczny odruch ochronny",
      "Odruch warunkowy wyuczony przez powtarzanie",
      "Świadome planowanie ruchu",
      "Proces tworzenia wspomnienia",
      "Działanie wyłącznie kory potylicznej",
      "Reakcja niezwiązana z układem nerwowym"
    ],
    "answer": 0,
    "explanation": "Odruch jest automatyczną i szybką reakcją na bodziec. Cofnięcie ręki po dotknięciu gorącego przedmiotu ogranicza ryzyko uszkodzenia ciała.",
    "image": "r07_luk_odruchowy.jpg"
  },
  {
    "id": "R07_OBW_12",
    "section": "Funkcjonowanie obwodowego układu nerwowego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: kichanie, kaszel, wydzielanie śliny podczas jedzenia, jazda na rowerze.",
    "options": null,
    "answer": "jazda na rowerze",
    "explanation": "Kichanie, kaszel i wydzielanie śliny podczas jedzenia są przykładami odruchów bezwarunkowych. Jazda na rowerze jest reakcją nabytą."
  },
  {
    "id": "R07_HIG_01",
    "section": "Choroby i higiena układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz działania sprzyjające prawidłowej kondycji układu nerwowego.",
    "options": [
      "Regularny sen",
      "Zdrowa zbilansowana dieta",
      "Pokarmy bogate w kwasy tłuszczowe omega-3",
      "Unikanie alkoholu i innych używek",
      "Regularne zarywanie nocy",
      "Sięganie po substancje psychoaktywne w stresie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mózg potrzebuje odpoczynku i regeneracji. Kondycji układu nerwowego sprzyjają regularny sen, zbilansowana dieta z kwasami omega-3 oraz unikanie alkoholu i innych używek."
  },
  {
    "id": "R07_HIG_02",
    "section": "Choroby i higiena układu nerwowego",
    "type": "single_choice",
    "prompt": "Jak może działać umiarkowany stres na początku trudnej sytuacji?",
    "options": [
      "Może mobilizować do działania",
      "Zawsze powoduje trwały paraliż",
      "Zawsze prowadzi do depresji",
      "Natychmiast wyłącza pracę serca",
      "Zawsze poprawia sen",
      "Nie wywołuje żadnych zmian w organizmie"
    ],
    "answer": 0,
    "explanation": "Początkowo umiarkowany stres może mobilizować do działania, pomagać pokonać przeszkody i osiągnąć cel.",
    "image": "r07_stres.jpg"
  },
  {
    "id": "R07_HIG_03",
    "section": "Choroby i higiena układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz objawy lub skutki długotrwałego stresu.",
    "options": [
      "Problemy z pamięcią i koncentracją",
      "Zaburzenia snu",
      "Zmęczenie i wyczerpanie",
      "Zwiększona podatność na infekcje",
      "Stała poprawa koncentracji",
      "Trwałe zwiększenie odporności"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Długotrwały stres może powodować problemy z pamięcią i koncentracją, zaburzenia snu, zmęczenie i wyczerpanie oraz zwiększać podatność na infekcje."
  },
  {
    "id": "R07_HIG_04",
    "section": "Choroby i higiena układu nerwowego",
    "type": "true_false",
    "prompt": "Zbyt duży lub długotrwały stres może przyczyniać się między innymi do zaburzeń lękowych i depresji.",
    "options": null,
    "answer": true,
    "explanation": "Zbyt duży lub długotrwały stres może zaburzać pracę układu nerwowego i przyczyniać się m.in. do zaburzeń lękowych oraz depresji."
  },
  {
    "id": "R07_HIG_05",
    "section": "Choroby i higiena układu nerwowego",
    "type": "single_choice",
    "prompt": "Które zalecenie dotyczące snu pomaga dbać o układ nerwowy?",
    "options": [
      "Śpij 8-10 godzin",
      "Śpij dokładnie 4 godziny",
      "Śpij wyłącznie w dzień",
      "Codziennie zmieniaj porę zasypiania",
      "Korzystaj z telefonu aż do zaśnięcia",
      "Rezygnuj ze snu przed nauką"
    ],
    "answer": 0,
    "explanation": "Dla prawidłowego funkcjonowania układu nerwowego zaleca się 8-10 godzin snu, w miarę możliwości zasypianie o stałej porze i sen w nocy.",
    "image": "r07_sen.jpg"
  },
  {
    "id": "R07_HIG_06",
    "section": "Choroby i higiena układu nerwowego",
    "type": "scenario",
    "prompt": "Uczeń nie spał ponad 36 godzin bez przerwy. Który skutek może wystąpić w takiej sytuacji?",
    "options": [
      "Obniżona koncentracja i zdolność zapamiętywania",
      "Trwałe zwiększenie koncentracji",
      "Natychmiastowa poprawa pamięci",
      "Zwiększenie liczby neuronów",
      "Lepsza koordynacja ruchowa niezależnie od zmęczenia",
      "Brak jakiegokolwiek wpływu na pracę mózgu"
    ],
    "answer": 0,
    "explanation": "U osób, które nie spały ponad 36 godzin bez przerwy, zaobserwowano obniżoną koncentrację oraz zdolność do zapamiętywania.",
    "image": "r07_sen.jpg"
  },
  {
    "id": "R07_HIG_07",
    "section": "Choroby i higiena układu nerwowego",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do substancji lub grup substancji.",
    "options": null,
    "items": [
      "kawa",
      "herbata",
      "napoje energetyczne",
      "kleje",
      "aerozole",
      "benzyna"
    ],
    "categories": [
      "Źródła kofeiny",
      "Wziewne środki odurzające"
    ],
    "answer": {
      "Źródła kofeiny": [
        "kawa",
        "herbata",
        "napoje energetyczne"
      ],
      "Wziewne środki odurzające": [
        "kleje",
        "aerozole",
        "benzyna"
      ]
    },
    "explanation": "Kofeina występuje m.in. w kawie, herbacie i napojach energetycznych. Do wziewnych środków odurzających należą m.in. kleje, aerozole i benzyna.",
    "image": "r07_substancje_psychoaktywne.jpg"
  },
  {
    "id": "R07_HIG_08",
    "section": "Choroby i higiena układu nerwowego",
    "type": "match",
    "prompt": "Połącz substancję z informacją o jej działaniu.",
    "options": null,
    "left": [
      "Nikotyna",
      "Alkohol",
      "Kofeina"
    ],
    "right": [
      "Silnie uzależnia",
      "Może uszkadzać między innymi mózg",
      "W małej ilości działa pobudzająco"
    ],
    "answer": {
      "Nikotyna": "Silnie uzależnia",
      "Alkohol": "Może uszkadzać między innymi mózg",
      "Kofeina": "W małej ilości działa pobudzająco"
    },
    "explanation": "Nikotyna silnie uzależnia. Alkohol może uszkadzać m.in. mózg, wątrobę i serce. Kofeina w małej ilości działa pobudzająco.",
    "image": "r07_substancje_psychoaktywne.jpg"
  },
  {
    "id": "R07_HIG_09",
    "section": "Choroby i higiena układu nerwowego",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania uzależnienia od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "regularne zażywanie",
      "uzależnienie fizyczne i psychiczne",
      "eksperymentowanie",
      "okazjonalne zażywanie"
    ],
    "answer": [
      "eksperymentowanie",
      "okazjonalne zażywanie",
      "regularne zażywanie",
      "uzależnienie fizyczne i psychiczne"
    ],
    "explanation": "Etapy powstawania uzależnienia to kolejno eksperymentowanie, okazjonalne zażywanie, regularne zażywanie oraz uzależnienie fizyczne i psychiczne."
  },
  {
    "id": "R07_HIG_10",
    "section": "Choroby i higiena układu nerwowego",
    "type": "true_false",
    "prompt": "Nawet beznikotynowe e-papierosy mogą być szkodliwe, ponieważ mogą uszkadzać naczynia krwionośne.",
    "options": null,
    "answer": true,
    "explanation": "Beznikotynowe e-papierosy także mogą być szkodliwe, ponieważ mogą uszkadzać naczynia krwionośne."
  },
  {
    "id": "R07_HIG_11",
    "section": "Choroby i higiena układu nerwowego",
    "type": "single_choice",
    "prompt": "Na czym polega doping?",
    "options": [
      "Na sztucznym wzmacnianiu wydolności organizmu przez substancje lub zabiegi medyczne",
      "Na naturalnym odpoczynku po wysiłku",
      "Na regularnym śnie",
      "Na wykonywaniu odruchów bezwarunkowych",
      "Na pobudzaniu wyłącznie płata potylicznego",
      "Na spożywaniu zbilansowanych posiłków"
    ],
    "answer": 0,
    "explanation": "Doping polega na sztucznym wzmacnianiu wydolności organizmu poprzez określone substancje lub zabiegi medyczne. Jego stosowanie jest nielegalne."
  },
  {
    "id": "R07_HIG_12",
    "section": "Choroby i higiena układu nerwowego",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: kawa, herbata, napój energetyczny, benzyna.",
    "options": null,
    "answer": "benzyna",
    "explanation": "Kawa, herbata i napoje energetyczne są źródłami kofeiny. Benzyna może działać jako wziewny środek odurzający."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz element neuronu z kierunkiem przewodzenia impulsu.",
    "options": null,
    "left": [
      "Dendryt",
      "Akson"
    ],
    "right": [
      "W kierunku ciała komórki",
      "Od ciała komórki"
    ],
    "answer": {
      "Dendryt": "W kierunku ciała komórki",
      "Akson": "Od ciała komórki"
    },
    "explanation": "Dendryty przesyłają impulsy w kierunku ciała komórki, natomiast akson kieruje impuls od ciała komórki do innego neuronu lub narządu wykonawczego.",
    "image": "r07_neuron.jpg"
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż przemiany sygnału w synapsie chemicznej.",
    "options": null,
    "items": [
      "sygnał chemiczny w szczelinie synaptycznej",
      "impuls elektryczny w neuronie odbierającym",
      "impuls elektryczny w pierwszym neuronie"
    ],
    "answer": [
      "impuls elektryczny w pierwszym neuronie",
      "sygnał chemiczny w szczelinie synaptycznej",
      "impuls elektryczny w neuronie odbierającym"
    ],
    "explanation": "W synapsie chemicznej impuls elektryczny zostaje zamieniony na sygnał chemiczny, a następnie w neuronie odbierającym ponownie na impuls elektryczny.",
    "image": "r07_synapsa_chemiczna.jpg"
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj reakcje do układu współczulnego lub przywspółczulnego.",
    "options": null,
    "items": [
      "przyspieszenie akcji serca",
      "rozszerzenie oskrzeli",
      "spowolnienie pracy układu pokarmowego",
      "spowolnienie akcji serca",
      "zwężenie oskrzeli",
      "pobudzenie ruchów jelit"
    ],
    "categories": [
      "Współczulny",
      "Przywspółczulny"
    ],
    "answer": {
      "Współczulny": [
        "przyspieszenie akcji serca",
        "rozszerzenie oskrzeli",
        "spowolnienie pracy układu pokarmowego"
      ],
      "Przywspółczulny": [
        "spowolnienie akcji serca",
        "zwężenie oskrzeli",
        "pobudzenie ruchów jelit"
      ]
    },
    "explanation": "Układ współczulny mobilizuje organizm, a przywspółczulny przywraca spokój i aktywuje układ pokarmowy."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje płynu mózgowo-rdzeniowego.",
    "options": [
      "Amortyzowanie wstrząsów",
      "Tworzenie odpowiedniego środowiska dla funkcjonowania komórek nerwowych",
      "Przewodzenie impulsów od receptora do efektora",
      "Wytwarzanie odruchów warunkowych",
      "Unerwianie mięśni twarzy",
      "Zastępowanie opon mózgowo-rdzeniowych"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Płyn mózgowo-rdzeniowy amortyzuje wstrząsy i stanowi odpowiednie środowisko dla funkcjonowania komórek nerwowych."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje komórek glejowych.",
    "options": [
      "Podporowa",
      "Ochronna",
      "Odżywcza",
      "Wytwarzanie wszystkich odruchów",
      "Unerwianie skóry kończyn",
      "Tworzenie kręgów"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Komórki glejowe pełnią funkcję podporową, ochronną i odżywczą."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pofałdowanie kory mózgowej zwiększa powierzchnię mózgu.",
    "options": null,
    "answer": true,
    "explanation": "Kora mózgowa jest pofałdowana, a jej pofałdowanie zwiększa powierzchnię mózgu.",
    "image": "r07_mozgowie.jpg"
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U pacjenta zaburzona jest przede wszystkim koordynacja ruchowa i utrzymywanie równowagi. Który element mózgowia jest najbardziej związany z tymi funkcjami?",
    "options": [
      "Móżdżek",
      "Pień mózgu",
      "Płat potyliczny",
      "Rdzeń kręgowy",
      "Nerw rdzeniowy",
      "Opona mózgowo-rdzeniowa"
    ],
    "answer": 0,
    "explanation": "Móżdżek odpowiada m.in. za koordynację ruchową, zachowanie równowagi i napięcie mięśni.",
    "image": "r07_mozgowie.jpg"
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uszkodzono obszar kory związany ze wzrokiem i interpretacją widzianego obrazu. Którego płata dotyczy uszkodzenie?",
    "options": [
      "Płat potyliczny",
      "Płat ciemieniowy",
      "Móżdżek",
      "Pień mózgu",
      "Rdzeń kręgowy",
      "Nerw czaszkowy"
    ],
    "answer": 0,
    "explanation": "Płat potyliczny jest związany ze wzrokiem i interpretacją widzianego obrazu.",
    "image": "r07_platy_mozgu.jpg"
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W rdzeniu kręgowym istota __________ leży na zewnątrz, a istota __________ wewnątrz.",
    "options": null,
    "answer": [
      "biała",
      "szara"
    ],
    "altAnswers": [
      [
        "biała",
        "biala"
      ],
      [
        "szara"
      ]
    ],
    "explanation": "Rdzeń kręgowy ma zewnętrzną warstwę istoty białej i centralnie położoną istotę szarą.",
    "image": "r07_rdzen_kregowy.jpg"
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jest częścią ośrodkowego układu nerwowego. Przewodzi informacje do mózgowia i z mózgowia oraz może generować proste odruchy. Co to?",
    "options": null,
    "answer": "rdzeń kręgowy",
    "altAnswers": [
      "rdzeń kręgowy",
      "rdzen kregowy"
    ],
    "explanation": "Rdzeń kręgowy pośredniczy w przewodzeniu informacji między mózgowiem a resztą ciała oraz odpowiada za proste odruchy.",
    "image": "r07_rdzen_kregowy.jpg"
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pełną drogę reakcji od bodźca do narządu wykonawczego.",
    "options": null,
    "items": [
      "neuron pośredniczący",
      "bodziec",
      "efektor",
      "neuron ruchowy",
      "receptor",
      "neuron czuciowy"
    ],
    "answer": [
      "bodziec",
      "receptor",
      "neuron czuciowy",
      "neuron pośredniczący",
      "neuron ruchowy",
      "efektor"
    ],
    "explanation": "Bodziec pobudza receptor. Impuls biegnie neuronem czuciowym do neuronu pośredniczącego, następnie neuronem ruchowym do efektora.",
    "image": "r07_luk_odruchowy.jpg"
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "To wyuczona reakcja na wielokrotnie powtarzany bodziec. Może zanikać, jeśli bodziec nie jest powtarzany. Jak się nazywa?",
    "options": null,
    "answer": "odruch warunkowy",
    "altAnswers": [
      "odruch warunkowy",
      "odruch nabyty"
    ],
    "explanation": "Odruch nabyty, czyli warunkowy, jest wyuczoną reakcją i może zanikać, gdy bodziec przestaje być powtarzany."
  },
  {
    "id": "R07_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kiedy Iwan Pawłow opisał mechanizm odruchów warunkowych?",
    "options": [
      "Na początku XX wieku",
      "Na początku XVIII wieku",
      "W połowie XVIII wieku",
      "Pod koniec XVIII wieku",
      "Na początku XIX wieku",
      "Pod koniec XXI wieku"
    ],
    "answer": 0,
    "explanation": "Na początku XX wieku Iwan Pawłow opisał mechanizm odruchów warunkowych na podstawie obserwacji reakcji psów.",
    "image": "r07_pawlow.jpg"
  },
  {
    "id": "R07_HARD_14",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz ilość kofeiny z odpowiednią informacją dotyczącą osoby dorosłej.",
    "options": null,
    "left": [
      "Poniżej 300 mg",
      "Około 500 mg",
      "Około 2000 mg"
    ],
    "right": [
      "Bezpieczna dawka",
      "Poziom związany z przedawkowaniem",
      "Poziom będący przyczyną zatrucia kofeiną"
    ],
    "answer": {
      "Poniżej 300 mg": "Bezpieczna dawka",
      "Około 500 mg": "Poziom związany z przedawkowaniem",
      "Około 2000 mg": "Poziom będący przyczyną zatrucia kofeiną"
    },
    "explanation": "Dla osoby dorosłej za bezpieczną uznaje się dawkę kofeiny poniżej 300 mg; około 500 mg wiąże się z przedawkowaniem, a około 2000 mg z zatruciem."
  },
  {
    "id": "R07_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz objawy zatrucia kofeiną.",
    "options": [
      "Zawroty głowy",
      "Pobudzenie nerwowe",
      "Drgawki",
      "Bezsenność",
      "Paraliż mięśniowy",
      "Utrata czucia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Objawy zatrucia kofeiną mogą obejmować zawroty głowy, pobudzenie nerwowe, drgawki i bezsenność."
  },
  {
    "id": "R07_HARD_16",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zjawisko z informacją.",
    "options": null,
    "left": [
      "Uzależnienie",
      "Doping",
      "Wziewne środki odurzające"
    ],
    "right": [
      "Silna potrzeba przyjmowania substancji uzależniającej",
      "Sztuczne wzmacnianie wydolności organizmu",
      "Mogą zawierać substancje trujące uszkadzające między innymi mózg"
    ],
    "answer": {
      "Uzależnienie": "Silna potrzeba przyjmowania substancji uzależniającej",
      "Doping": "Sztuczne wzmacnianie wydolności organizmu",
      "Wziewne środki odurzające": "Mogą zawierać substancje trujące uszkadzające między innymi mózg"
    },
    "explanation": "Uzależnienie wiąże się z silną potrzebą przyjmowania substancji. Doping sztucznie wzmacnia wydolność, a wziewne środki odurzające mogą zawierać substancje trujące uszkadzające m.in. mózg."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Układ nerwowy",
  icon: "🧠",
  sectionOrder: [
    "Budowa i podział układu nerwowego",
    "Działanie ośrodkowego układu nerwowego",
    "Funkcjonowanie obwodowego układu nerwowego",
    "Choroby i higiena układu nerwowego"
  ],
  sectionIcons: {
    "Budowa i podział układu nerwowego": "🧠",
    "Działanie ośrodkowego układu nerwowego": "🎯",
    "Funkcjonowanie obwodowego układu nerwowego": "⚡",
    "Choroby i higiena układu nerwowego": "🌙"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
