// Skróty sekcji (do identyfikatorów ćwiczeń):
//   ORG  = Organizacja ciała i tkanki
//   HOM  = Narządy, układy i homeostaza
//   SKO  = Budowa i funkcje skóry
//   REC  = Receptory i wytwory naskórka
//   CHS  = Higiena, choroby i urazy skóry
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_ORG_01",
    "section": "Organizacja ciała i tkanki",
    "type": "single_choice",
    "prompt": "Jaka jest podstawowa jednostka budulcowa i czynnościowa organizmu człowieka?",
    "options": [
      "tkanka",
      "komórka",
      "narząd",
      "układ narządów",
      "organizm",
      "substancja międzykomórkowa"
    ],
    "answer": 1,
    "explanation": "Podstawową jednostką budulcową i czynnościową organizmu człowieka jest komórka."
  },
  {
    "id": "R01_ORG_02",
    "section": "Organizacja ciała i tkanki",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji ciała człowieka od najprostszego do najbardziej złożonego.",
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
    "explanation": "Komórki tworzą tkanki, tkanki budują narządy, narządy łączą się w układy narządów, a wszystkie układy współtworzą organizm."
  },
  {
    "id": "R01_ORG_03",
    "section": "Organizacja ciała i tkanki",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki z charakterystyczną cechą jej budowy lub działania.",
    "options": null,
    "left": [
      "tkanka nabłonkowa",
      "tkanka mięśniowa",
      "tkanka nerwowa",
      "tkanka łączna"
    ],
    "right": [
      "komórki ściśle do siebie przylegają",
      "elementy kurczą się i rozkurczają",
      "odbiera informacje i koordynuje pracę organizmu",
      "komórki są luźno rozrzucone w substancji międzykomórkowej"
    ],
    "answer": {
      "tkanka nabłonkowa": "komórki ściśle do siebie przylegają",
      "tkanka mięśniowa": "elementy kurczą się i rozkurczają",
      "tkanka nerwowa": "odbiera informacje i koordynuje pracę organizmu",
      "tkanka łączna": "komórki są luźno rozrzucone w substancji międzykomórkowej"
    },
    "image": "r01_tkanki_mikroskop.jpg",
    "explanation": "Tkanka nabłonkowa ma ściśle przylegające komórki, mięśniowa kurczy się i rozkurcza, nerwowa odbiera informacje, a łączna ma komórki luźno rozmieszczone w substancji międzykomórkowej."
  },
  {
    "id": "R01_ORG_04",
    "section": "Organizacja ciała i tkanki",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady tkanek zaliczanych do tkanki łącznej.",
    "options": [
      "tkanka kostna",
      "tkanka chrzęstna",
      "tkanka tłuszczowa",
      "krew",
      "tkanka nerwowa",
      "tkanka nabłonkowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do tkanki łącznej należą między innymi tkanka kostna, chrzęstna, tłuszczowa oraz krew."
  },
  {
    "id": "R01_ORG_05",
    "section": "Organizacja ciała i tkanki",
    "type": "true_false",
    "prompt": "Tkanka łączna jest najbardziej zróżnicowaną pod względem budowy i funkcji tkanką zwierzęcą.",
    "options": null,
    "answer": true,
    "explanation": "Tkanka łączna obejmuje bardzo różne tkanki, między innymi kostną, chrzęstną, tłuszczową i krew."
  },
  {
    "id": "R01_ORG_06",
    "section": "Organizacja ciała i tkanki",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do przykładów tkanki łącznej: tkanka kostna, tkanka chrzęstna, tkanka tłuszczowa, tkanka nerwowa.",
    "options": null,
    "answer": "tkanka nerwowa",
    "explanation": "Tkanka nerwowa jest jednym z czterech podstawowych rodzajów tkanek zwierzęcych, ale nie jest tkanką łączną."
  },
  {
    "id": "R01_ORG_07",
    "section": "Organizacja ciała i tkanki",
    "type": "fill_in",
    "prompt": "Narząd to część organizmu zbudowana z __________, pełniąca określone __________.",
    "options": null,
    "answer": [
      "tkanek",
      "funkcje"
    ],
    "altAnswers": [
      [
        "tkanek",
        "tkanki"
      ],
      [
        "funkcje",
        "funkcję"
      ]
    ],
    "explanation": "Narządy są zbudowane z tkanek i pełnią określone funkcje."
  },
  {
    "id": "R01_ORG_08",
    "section": "Organizacja ciała i tkanki",
    "type": "single_choice",
    "prompt": "Która tkanka buduje ściany jelita cienkiego i dzięki skurczom umożliwia przesuwanie pokarmu?",
    "options": [
      "tkanka mięśniowa gładka",
      "tkanka kostna",
      "tkanka chrzęstna",
      "tkanka tłuszczowa",
      "tkanka nerwowa",
      "krew"
    ],
    "answer": 0,
    "explanation": "Ściany jelita cienkiego są zbudowane z tkanki mięśniowej gładkiej, której skurcze przesuwają pokarm."
  },
  {
    "id": "R01_ORG_09",
    "section": "Organizacja ciała i tkanki",
    "type": "scenario",
    "prompt": "Pod mikroskopem widać wiele warstw komórek ściśle do siebie przylegających. Który rodzaj tkanki najlepiej pasuje do tego obrazu?",
    "options": [
      "tkanka nabłonkowa",
      "tkanka mięśniowa",
      "tkanka nerwowa",
      "tkanka łączna"
    ],
    "answer": 0,
    "image": "r01_tkanka_nablonkowa.jpg",
    "explanation": "Tkanka nabłonkowa jest zbudowana z jednej, kilku lub kilkunastu warstw ściśle przylegających komórek."
  },
  {
    "id": "R01_ORG_10",
    "section": "Organizacja ciała i tkanki",
    "type": "riddle",
    "prompt": "Jak nazywa się dział biologii zajmujący się budową narządów i układów narządów?",
    "options": null,
    "answer": "anatomia",
    "altAnswers": [
      "anatomia",
      "Anatomia"
    ],
    "explanation": "Dział biologii zajmujący się budową narządów i układów narządów to anatomia."
  },
  {
    "id": "R01_ORG_11",
    "section": "Organizacja ciała i tkanki",
    "type": "multi_select",
    "prompt": "Zaznacz rodzaje tkanek występujące w sercu.",
    "options": [
      "tkanka mięśniowa poprzecznie prążkowana",
      "tkanka nabłonkowa",
      "tkanka łączna",
      "tkanka nerwowa",
      "tkanka chrzęstna",
      "tkanka kostna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r01_serce_tkanki.jpg",
    "explanation": "Serce jest zbudowane z tkanki mięśniowej poprzecznie prążkowanej, nabłonkowej, łącznej i nerwowej."
  },
  {
    "id": "R01_HOM_01",
    "section": "Narządy, układy i homeostaza",
    "type": "match",
    "prompt": "Połącz układ narządów z jego główną funkcją.",
    "options": null,
    "left": [
      "układ szkieletowy",
      "układ mięśniowy",
      "układ pokarmowy",
      "układ krwionośny",
      "układ oddechowy"
    ],
    "right": [
      "rusztowanie ciała i ochrona narządów",
      "przemieszczanie ciała i zmiana położenia jego części",
      "pobieranie i trawienie pokarmu oraz wchłanianie substancji odżywczych",
      "transport gazów oddechowych i substancji",
      "dostarczanie tlenu i usuwanie dwutlenku węgla"
    ],
    "answer": {
      "układ szkieletowy": "rusztowanie ciała i ochrona narządów",
      "układ mięśniowy": "przemieszczanie ciała i zmiana położenia jego części",
      "układ pokarmowy": "pobieranie i trawienie pokarmu oraz wchłanianie substancji odżywczych",
      "układ krwionośny": "transport gazów oddechowych i substancji",
      "układ oddechowy": "dostarczanie tlenu i usuwanie dwutlenku węgla"
    },
    "image": "r01_uklady_narzadow.jpg",
    "explanation": "Każdy układ narządów jest przystosowany do pełnienia określonych funkcji i współpracuje z pozostałymi."
  },
  {
    "id": "R01_HOM_02",
    "section": "Narządy, układy i homeostaza",
    "type": "single_choice",
    "prompt": "Który układ reguluje i koordynuje pracę innych układów za pośrednictwem substancji wydzielanych do krwi?",
    "options": [
      "układ hormonalny",
      "układ szkieletowy",
      "układ pokarmowy",
      "układ limfatyczny",
      "układ mięśniowy",
      "układ oddechowy"
    ],
    "answer": 0,
    "explanation": "Układ hormonalny reguluje i koordynuje pracę innych układów za pośrednictwem substancji wydzielanych do krwi."
  },
  {
    "id": "R01_HOM_03",
    "section": "Narządy, układy i homeostaza",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje układu wydalniczego.",
    "options": [
      "usuwanie szkodliwych i zbędnych substancji",
      "regulacja ilości wody",
      "regulacja ilości soli mineralnych",
      "trawienie pokarmu",
      "koordynacja pracy narządów przez bodźce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Układ wydalniczy usuwa szkodliwe i zbędne substancje oraz reguluje ilość wody i soli mineralnych."
  },
  {
    "id": "R01_HOM_04",
    "section": "Narządy, układy i homeostaza",
    "type": "true_false",
    "prompt": "Układ limfatyczny uczestniczy w reakcjach obronnych organizmu i transportuje między innymi tłuszcze oraz wodę.",
    "options": null,
    "answer": true,
    "explanation": "Układ limfatyczny bierze udział w obronie organizmu i transporcie niektórych substancji, na przykład tłuszczów i wody."
  },
  {
    "id": "R01_HOM_05",
    "section": "Narządy, układy i homeostaza",
    "type": "fill_in",
    "prompt": "Zdolność organizmu do zachowania równowagi __________ nazywamy __________.",
    "options": null,
    "answer": [
      "wewnętrznej",
      "homeostazą"
    ],
    "altAnswers": [
      [
        "wewnętrznej",
        "wewnetrznej"
      ],
      [
        "homeostazą",
        "homeostaza"
      ]
    ],
    "explanation": "Homeostaza to zdolność organizmu do zachowania równowagi wewnętrznej."
  },
  {
    "id": "R01_HOM_06",
    "section": "Narządy, układy i homeostaza",
    "type": "multi_select",
    "prompt": "Zaznacz parametry środowiska wewnętrznego, których właściwy poziom jest ważny dla homeostazy.",
    "options": [
      "temperatura ciała",
      "ilość wody w organizmie",
      "stężenie glukozy we krwi",
      "ciśnienie krwi",
      "zawartość tlenu i dwutlenku węgla we krwi",
      "kolor oczu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do najważniejszych parametrów środowiska wewnętrznego należą zawartość tlenu i dwutlenku węgla we krwi, temperatura ciała, ilość wody, stężenie glukozy i ciśnienie krwi."
  },
  {
    "id": "R01_HOM_07",
    "section": "Narządy, układy i homeostaza",
    "type": "scenario",
    "prompt": "Podczas biegu mięśnie potrzebują więcej tlenu. Która para układów bezpośrednio uczestniczy w pobraniu tlenu i dostarczeniu go do mięśni?",
    "options": [
      "układ oddechowy i krwionośny",
      "układ szkieletowy i rozrodczy",
      "układ pokarmowy i limfatyczny",
      "układ wydalniczy i szkieletowy"
    ],
    "answer": 0,
    "explanation": "Układ oddechowy pobiera tlen, a układ krwionośny dostarcza go do pracujących mięśni."
  },
  {
    "id": "R01_HOM_08",
    "section": "Narządy, układy i homeostaza",
    "type": "single_choice",
    "prompt": "Które dwa układy regulują mechanizmy pomagające utrzymać homeostazę mimo zmian w środowisku?",
    "options": [
      "nerwowy i hormonalny",
      "szkieletowy i mięśniowy",
      "pokarmowy i oddechowy",
      "limfatyczny i rozrodczy",
      "wydalniczy i szkieletowy",
      "pokarmowy i rozrodczy"
    ],
    "answer": 0,
    "explanation": "Mechanizmy utrzymujące homeostazę są regulowane przez układ nerwowy i układ hormonalny."
  },
  {
    "id": "R01_HOM_09",
    "section": "Narządy, układy i homeostaza",
    "type": "true_false",
    "prompt": "Żaden z układów narządów człowieka nie może prawidłowo pracować całkowicie samodzielnie.",
    "options": null,
    "answer": true,
    "explanation": "Układy narządów pełnią różne funkcje, ale współpracują ze sobą i są wzajemnie zależne."
  },
  {
    "id": "R01_HOM_10",
    "section": "Narządy, układy i homeostaza",
    "type": "odd_one_out",
    "prompt": "Wskaż element z innego poziomu organizacji ciała: układ szkieletowy, układ mięśniowy, układ pokarmowy, tkanka nerwowa.",
    "options": null,
    "answer": "tkanka nerwowa",
    "explanation": "Tkanka nerwowa jest tkanką, a pozostałe elementy są układami narządów."
  },
  {
    "id": "R01_HOM_11",
    "section": "Narządy, układy i homeostaza",
    "type": "match",
    "prompt": "Połącz narząd z jego funkcją.",
    "options": null,
    "left": [
      "nerki",
      "płuca",
      "mózg",
      "jajniki"
    ],
    "right": [
      "usuwanie z organizmu szkodliwych substancji",
      "dostarczanie tlenu i usuwanie dwutlenku węgla",
      "koordynowanie pracy narządów",
      "wytwarzanie żeńskich komórek płciowych i hormonów płciowych"
    ],
    "answer": {
      "nerki": "usuwanie z organizmu szkodliwych substancji",
      "płuca": "dostarczanie tlenu i usuwanie dwutlenku węgla",
      "mózg": "koordynowanie pracy narządów",
      "jajniki": "wytwarzanie żeńskich komórek płciowych i hormonów płciowych"
    },
    "explanation": "Nerki usuwają szkodliwe substancje, płuca uczestniczą w wymianie gazowej, mózg koordynuje pracę narządów, a jajniki wytwarzają żeńskie komórki płciowe i hormony płciowe."
  },
  {
    "id": "R01_SKO_01",
    "section": "Budowa i funkcje skóry",
    "type": "single_choice",
    "prompt": "Z ilu warstw składa się skóra i jakie są ich nazwy?",
    "options": [
      "z dwóch: naskórka i skóry właściwej",
      "z dwóch: skóry właściwej i warstwy podskórnej",
      "z trzech: naskórka, skóry właściwej i warstwy podskórnej",
      "z jednej: naskórka"
    ],
    "answer": 0,
    "image": "r01_skora_przekroj.jpg",
    "explanation": "Skóra składa się z dwóch warstw: naskórka i skóry właściwej. Warstwa podskórna leży pod skórą i nie jest jej częścią."
  },
  {
    "id": "R01_SKO_02",
    "section": "Budowa i funkcje skóry",
    "type": "sequence",
    "prompt": "Ułóż elementy od powierzchni ciała ku głębiej położonym warstwom.",
    "options": null,
    "items": [
      "skóra właściwa",
      "warstwa podskórna",
      "warstwa rogowa naskórka",
      "warstwa rozrodcza naskórka"
    ],
    "answer": [
      "warstwa rogowa naskórka",
      "warstwa rozrodcza naskórka",
      "skóra właściwa",
      "warstwa podskórna"
    ],
    "explanation": "Na powierzchni leży warstwa rogowa naskórka, głębiej warstwa rozrodcza naskórka, następnie skóra właściwa, a pod skórą warstwa podskórna."
  },
  {
    "id": "R01_SKO_03",
    "section": "Budowa i funkcje skóry",
    "type": "match",
    "prompt": "Połącz część powłoki ciała z jej charakterystyczną budową.",
    "options": null,
    "left": [
      "naskórek",
      "skóra właściwa",
      "warstwa podskórna"
    ],
    "right": [
      "tkanka nabłonkowa",
      "tkanka łączna z włóknami kolagenu",
      "głównie tkanka tłuszczowa"
    ],
    "answer": {
      "naskórek": "tkanka nabłonkowa",
      "skóra właściwa": "tkanka łączna z włóknami kolagenu",
      "warstwa podskórna": "głównie tkanka tłuszczowa"
    },
    "explanation": "Naskórek jest zbudowany z tkanki nabłonkowej, skóra właściwa z tkanki łącznej zawierającej kolagen, a warstwa podskórna głównie z tkanki tłuszczowej."
  },
  {
    "id": "R01_SKO_04",
    "section": "Budowa i funkcje skóry",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje skóry.",
    "options": [
      "ochrona organizmu",
      "termoregulacja",
      "wydalanie zbędnych produktów przemiany materii",
      "synteza witaminy D",
      "odbieranie bodźców",
      "trawienie pokarmu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Skóra chroni organizm, uczestniczy w termoregulacji, wydalaniu i wydzielaniu, syntezie witaminy D oraz odbieraniu bodźców."
  },
  {
    "id": "R01_SKO_05",
    "section": "Budowa i funkcje skóry",
    "type": "fill_in",
    "prompt": "Komórki barwnikowe w warstwie rozrodczej produkują __________, które nadają barwę skórze, włosom i oczom oraz chronią przed promieniowaniem UV.",
    "options": null,
    "answer": [
      "melaniny"
    ],
    "altAnswers": [
      [
        "melaniny",
        "melaninę",
        "melanina"
      ]
    ],
    "image": "r01_melanina_skora.jpg",
    "explanation": "Komórki barwnikowe produkują melaniny. Ich ilość wpływa na barwę skóry, włosów i oczu, a melaniny pomagają chronić przed szkodliwym działaniem UV."
  },
  {
    "id": "R01_SKO_06",
    "section": "Budowa i funkcje skóry",
    "type": "true_false",
    "prompt": "Warstwa podskórna nie jest częścią skóry, choć pełni podobnie jak ona funkcję ochronną.",
    "options": null,
    "answer": true,
    "explanation": "Warstwa podskórna leży pod skórą i zabezpiecza organizm między innymi przed zimnem oraz urazami."
  },
  {
    "id": "R01_SKO_07",
    "section": "Budowa i funkcje skóry",
    "type": "single_choice",
    "prompt": "Jaki składnik skóry właściwej nadaje jej sprężystość, elastyczność i odporność na rozerwanie?",
    "options": [
      "kolagen",
      "melanina",
      "łój",
      "pot",
      "keratyna",
      "glukoza"
    ],
    "answer": 0,
    "explanation": "Skóra właściwa zawiera włókna białka zwanego kolagenem, które odpowiadają za sprężystość, elastyczność i odporność na rozerwanie."
  },
  {
    "id": "R01_SKO_08",
    "section": "Budowa i funkcje skóry",
    "type": "scenario",
    "prompt": "Organizmowi jest zbyt ciepło. Co dzieje się z naczyniami krwionośnymi skóry, aby zwiększyć oddawanie ciepła?",
    "options": [
      "rozszerzają się",
      "zwężają się",
      "znikają",
      "przestają przewodzić krew"
    ],
    "answer": 0,
    "explanation": "Gdy jest zbyt ciepło, naczynia krwionośne skóry rozszerzają się, zwiększa się przepływ krwi i więcej ciepła może zostać oddane do otoczenia."
  },
  {
    "id": "R01_SKO_09",
    "section": "Budowa i funkcje skóry",
    "type": "scenario",
    "prompt": "Organizmowi jest zimno. Która reakcja naczyń krwionośnych skóry pomaga zatrzymać ciepło?",
    "options": [
      "zwężenie naczyń",
      "rozszerzenie naczyń",
      "zwiększenie liczby receptorów",
      "zwiększenie ilości melaniny"
    ],
    "answer": 0,
    "explanation": "W zimnie naczynia krwionośne skóry zwężają się, przepływa przez nie mniej krwi i ciepło pozostaje w organizmie."
  },
  {
    "id": "R01_SKO_10",
    "section": "Budowa i funkcje skóry",
    "type": "riddle",
    "prompt": "Jak nazywają się barwniki skóry, których ilość zwiększa się pod wpływem promieni słonecznych?",
    "options": null,
    "answer": "melaniny",
    "altAnswers": [
      "melaniny",
      "melanina",
      "melaninę"
    ],
    "explanation": "Ilość melanin w skórze zwiększa się pod wpływem promieni słonecznych, co prowadzi do przejściowej zmiany zabarwienia skóry."
  },
  {
    "id": "R01_SKO_11",
    "section": "Budowa i funkcje skóry",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do warstw powłoki ciała: naskórek, skóra właściwa, warstwa podskórna, mięsień sercowy.",
    "options": null,
    "answer": "mięsień sercowy",
    "explanation": "Mięsień sercowy nie należy do warstw powłoki ciała. Skóra obejmuje naskórek i skórę właściwą, a pod nią leży warstwa podskórna."
  },
  {
    "id": "R01_REC_01",
    "section": "Receptory i wytwory naskórka",
    "type": "multi_select",
    "prompt": "Zaznacz wytwory naskórka.",
    "options": [
      "włosy",
      "paznokcie",
      "gruczoły potowe",
      "gruczoły łojowe",
      "gruczoły sutkowe",
      "skóra właściwa"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r01_wlosy_paznokcie.jpg",
    "explanation": "Wytworami naskórka są włosy, paznokcie oraz gruczoły potowe, łojowe i sutkowe."
  },
  {
    "id": "R01_REC_02",
    "section": "Receptory i wytwory naskórka",
    "type": "match",
    "prompt": "Połącz wytwór naskórka z jego funkcją.",
    "options": null,
    "left": [
      "włosy",
      "paznokcie",
      "gruczoły potowe",
      "gruczoły łojowe",
      "gruczoły sutkowe"
    ],
    "right": [
      "izolowanie wrażliwych okolic ciała",
      "ochrona opuszek palców",
      "wydzielanie potu i udział w termoregulacji",
      "wydzielanie łoju chroniącego skórę i włosy",
      "wydzielanie mleka"
    ],
    "answer": {
      "włosy": "izolowanie wrażliwych okolic ciała",
      "paznokcie": "ochrona opuszek palców",
      "gruczoły potowe": "wydzielanie potu i udział w termoregulacji",
      "gruczoły łojowe": "wydzielanie łoju chroniącego skórę i włosy",
      "gruczoły sutkowe": "wydzielanie mleka"
    },
    "explanation": "Włosy izolują wrażliwe okolice, paznokcie chronią opuszki, gruczoły potowe uczestniczą w termoregulacji i wydalaniu, łojowe chronią skórę i włosy łojem, a sutkowe wydzielają mleko."
  },
  {
    "id": "R01_REC_03",
    "section": "Receptory i wytwory naskórka",
    "type": "single_choice",
    "prompt": "Które gruczoły wydzielają tłustą, gęstą substancję chroniącą skórę i włosy przed wysychaniem?",
    "options": [
      "gruczoły łojowe",
      "gruczoły potowe",
      "gruczoły sutkowe",
      "receptory",
      "naczynia krwionośne",
      "gruczoły trawienne"
    ],
    "answer": 0,
    "explanation": "Gruczoły łojowe wydzielają łój, który chroni skórę i włosy przed wysychaniem oraz utrudnia wnikanie drobnoustrojów."
  },
  {
    "id": "R01_REC_04",
    "section": "Receptory i wytwory naskórka",
    "type": "true_false",
    "prompt": "Gruczoły potowe uczestniczą w termoregulacji, wydalaniu zbędnych substancji i usuwaniu nadmiaru wody.",
    "options": null,
    "answer": true,
    "explanation": "Pot wydostaje się na powierzchnię skóry przez otwory gruczołów potowych, co pomaga w termoregulacji, wydalaniu i usuwaniu nadmiaru wody."
  },
  {
    "id": "R01_REC_05",
    "section": "Receptory i wytwory naskórka",
    "type": "fill_in",
    "prompt": "Najwięcej receptorów skórnych występuje między innymi na __________ palców oraz na __________.",
    "options": null,
    "answer": [
      "opuszkach",
      "wargach"
    ],
    "altAnswers": [
      [
        "opuszkach",
        "opuszkach palców"
      ],
      [
        "wargach",
        "wargi"
      ]
    ],
    "image": "r01_opuszki_palca.jpg",
    "explanation": "Miejsca z dużą liczbą receptorów są szczególnie wrażliwe na bodźce. Należą do nich opuszki palców i wargi."
  },
  {
    "id": "R01_REC_06",
    "section": "Receptory i wytwory naskórka",
    "type": "single_choice",
    "prompt": "Które miejsce jest szczególnie wrażliwe na bodźce z powodu dużej liczby receptorów?",
    "options": [
      "opuszki palców",
      "warstwa podskórna",
      "kość ramienna",
      "mięsień sercowy",
      "jelito cienkie",
      "płuco"
    ],
    "answer": 0,
    "image": "r01_opuszki_palca.jpg",
    "explanation": "Dużo receptorów występuje na opuszkach palców i wargach, dlatego miejsca te są szczególnie wrażliwe."
  },
  {
    "id": "R01_REC_07",
    "section": "Receptory i wytwory naskórka",
    "type": "true_false",
    "prompt": "Receptory dotyku są rozmieszczone w skórze równomiernie.",
    "options": null,
    "answer": false,
    "explanation": "Gęstość rozmieszczenia receptorów dotyku różni się w różnych częściach ciała."
  },
  {
    "id": "R01_REC_08",
    "section": "Receptory i wytwory naskórka",
    "type": "scenario",
    "prompt": "W badaniu dwoma końcówkami drutu osoba rozróżnia dwa punkty przy mniejszej odległości na opuszce palca niż na karku. Co z tego wynika?",
    "options": [
      "na opuszce palca receptory są rozmieszczone gęściej",
      "na karku receptory są rozmieszczone gęściej",
      "receptory są rozmieszczone wszędzie jednakowo",
      "na opuszce palca nie ma receptorów"
    ],
    "answer": 0,
    "explanation": "Mniejsza odległość potrzebna do rozróżnienia dwóch punktów oznacza większą gęstość receptorów dotyku. Opuszki palców mają ich więcej niż kark."
  },
  {
    "id": "R01_REC_09",
    "section": "Receptory i wytwory naskórka",
    "type": "riddle",
    "prompt": "Jak potocznie nazywa się reakcja polegająca na nastroszeniu włosów wskutek skurczu mięśnia przywłosowego?",
    "options": null,
    "answer": "gęsia skórka",
    "altAnswers": [
      "gęsia skórka",
      "gesia skorka"
    ],
    "image": "r01_gesia_skorka.jpg",
    "explanation": "Skurcz mięśnia przywłosowego powoduje nastroszenie włosa. U człowieka reakcję tę nazywa się gęsią skórką."
  },
  {
    "id": "R01_REC_10",
    "section": "Receptory i wytwory naskórka",
    "type": "scenario",
    "prompt": "Dłoń przez kilkanaście sekund pozostaje w ciepłej wodzie i po pewnym czasie woda wydaje się chłodniejsza, chociaż jej temperatura się nie zmieniła. Jakie zjawisko to wyjaśnia?",
    "options": [
      "adaptacja receptorów",
      "synteza melaniny",
      "wydzielanie łoju",
      "krzepnięcie krwi"
    ],
    "answer": 0,
    "explanation": "Receptory słabiej reagują na bodziec działający przez dłuższy czas. To przykład adaptacji receptorów."
  },
  {
    "id": "R01_REC_11",
    "section": "Receptory i wytwory naskórka",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest bodźcem odbieranym przez receptory skóry: ciepło, zimno, dotyk, trawienie.",
    "options": null,
    "answer": "trawienie",
    "explanation": "Receptory skóry odbierają między innymi ciepło, zimno, dotyk i ból. Trawienie nie jest bodźcem skórnym."
  },
  {
    "id": "R01_CHS_01",
    "section": "Higiena, choroby i urazy skóry",
    "type": "true_false",
    "prompt": "Używanie cudzych ręczników i przyborów toaletowych może sprzyjać przenoszeniu bakterii, zarodników grzybów i jaj pasożytów.",
    "options": null,
    "answer": true,
    "explanation": "Na cudzych ręcznikach i przyborach toaletowych mogą znajdować się bakterie, zarodniki grzybów i jaja pasożytów."
  },
  {
    "id": "R01_CHS_02",
    "section": "Higiena, choroby i urazy skóry",
    "type": "match",
    "prompt": "Połącz chorobę skóry z jej przyczyną.",
    "options": null,
    "left": [
      "opryszczka",
      "łupież",
      "grzybica",
      "świerzb",
      "wszawica"
    ],
    "right": [
      "wirus",
      "nadmierny rozwój grzybów na powierzchni ciała",
      "grzyby chorobotwórcze",
      "świerzbowiec",
      "wszy"
    ],
    "answer": {
      "opryszczka": "wirus",
      "łupież": "nadmierny rozwój grzybów na powierzchni ciała",
      "grzybica": "grzyby chorobotwórcze",
      "świerzb": "świerzbowiec",
      "wszawica": "wszy"
    },
    "image": "r01_wesz_na_wlosie.jpg",
    "explanation": "Opryszczkę wywołuje wirus, łupież wiąże się głównie z nadmiernym rozwojem grzybów, grzybice powodują grzyby chorobotwórcze, świerzb wywołuje świerzbowiec, a wszawicę wszy."
  },
  {
    "id": "R01_CHS_03",
    "section": "Higiena, choroby i urazy skóry",
    "type": "single_choice",
    "prompt": "Jak nazywają się jaja wszy widoczne na włosach?",
    "options": [
      "gnidy",
      "pęcherze",
      "znamiona",
      "zaskórniki",
      "zarodniki",
      "łuski"
    ],
    "answer": 0,
    "image": "r01_wesz_na_wlosie.jpg",
    "explanation": "Jaja wszy przytwierdzone do włosów nazywają się gnidami."
  },
  {
    "id": "R01_CHS_04",
    "section": "Higiena, choroby i urazy skóry",
    "type": "multi_select",
    "prompt": "Zaznacz drogi, którymi może dojść do zakażenia wszami.",
    "options": [
      "bezpośredni kontakt z chorym",
      "przedmioty osobistego użytku",
      "promieniowanie UV",
      "picie zimnej wody",
      "zwężenie naczyń krwionośnych"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Wszami można zarazić się przez bezpośredni kontakt z chorym oraz przez przedmioty osobistego użytku."
  },
  {
    "id": "R01_CHS_05",
    "section": "Higiena, choroby i urazy skóry",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca, które świerzbowiec atakuje najczęściej.",
    "options": [
      "między palcami",
      "zgięcia łokciowe",
      "brzuch",
      "owłosiona skóra głowy",
      "paznokcie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Świerzbowiec najczęściej atakuje skórę między palcami, w zgięciach łokciowych i na brzuchu."
  },
  {
    "id": "R01_CHS_06",
    "section": "Higiena, choroby i urazy skóry",
    "type": "scenario",
    "prompt": "Nastolatek ma trądzik i chce poprawić stan skóry. Którego działania powinien unikać?",
    "options": [
      "wyciskania krost",
      "unikania zbyt długiego przebywania na słońcu",
      "stosowania zaleconego leczenia",
      "delikatnego oczyszczania skóry"
    ],
    "answer": 0,
    "explanation": "Wyciskanie krost może prowadzić do powstawania blizn. Skóry nie należy też nadmiernie przesuszać ani zbyt często myć."
  },
  {
    "id": "R01_CHS_07",
    "section": "Higiena, choroby i urazy skóry",
    "type": "multi_select",
    "prompt": "Zaznacz zalecenia wspierające pielęgnację skóry trądzikowej.",
    "options": [
      "nie wyciskać krost",
      "unikać zbyt długiego przebywania na słońcu",
      "ograniczyć słodycze i tłuszcze",
      "często przesuszać skórę silnymi środkami",
      "myć skórę więcej niż trzy razy dziennie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przy trądziku nie należy wyciskać krost ani nadmiernie przesuszać skóry. Zaleca się unikanie długiego opalania i stosowanie odpowiedniej diety z ograniczeniem słodyczy i tłuszczów."
  },
  {
    "id": "R01_CHS_08",
    "section": "Higiena, choroby i urazy skóry",
    "type": "single_choice",
    "prompt": "Jaki skutek może mieć nadmiar promieniowania UV na komórki skóry?",
    "options": [
      "uszkodzenie DNA i zwiększenie ryzyka czerniaka",
      "zwiększenie liczby kości",
      "zatrzymanie krążenia krwi w skórze",
      "trwałe zahamowanie wydzielania potu",
      "zwiększenie liczby receptorów",
      "przyspieszenie trawienia"
    ],
    "answer": 0,
    "image": "r01_ochrona_uv.jpg",
    "explanation": "Nadmiar promieniowania UV uszkadza DNA komórek skóry i może prowadzić do rozwoju czerniaka."
  },
  {
    "id": "R01_CHS_09",
    "section": "Higiena, choroby i urazy skóry",
    "type": "match",
    "prompt": "Połącz literę alfabetu czerniaka z cechą niepokojącej zmiany barwnikowej.",
    "options": null,
    "left": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "right": [
      "asymetria",
      "nieregularne lub poszarpane brzegi",
      "ciemny kolor i różne odcienie brązu",
      "średnica powyżej 6 mm",
      "zmiana kształtu, koloru lub wielkości"
    ],
    "answer": {
      "A": "asymetria",
      "B": "nieregularne lub poszarpane brzegi",
      "C": "ciemny kolor i różne odcienie brązu",
      "D": "średnica powyżej 6 mm",
      "E": "zmiana kształtu, koloru lub wielkości"
    },
    "image": "r01_zmiana_barwnikowa.jpg",
    "explanation": "W alfabecie czerniaka A oznacza asymetrię, B nieregularne brzegi, C ciemny lub zróżnicowany kolor, D dużą średnicę powyżej 6 mm, a E ewolucję zmiany."
  },
  {
    "id": "R01_CHS_10",
    "section": "Higiena, choroby i urazy skóry",
    "type": "scenario",
    "prompt": "Ktoś lekko oparzył dłoń gorącym przedmiotem. Jak powinien postąpić bezpośrednio po urazie?",
    "options": [
      "schładzać skórę zimną wodą przez co najmniej 10 minut",
      "posmarować świeże oparzenie tłustą maścią",
      "przekłuć pęcherze",
      "intensywnie rozcierać skórę"
    ],
    "answer": 0,
    "image": "r01_pierwsza_pomoc_oparzenie.jpg",
    "explanation": "Lekkie oparzenie należy schładzać pod strumieniem zimnej wody przez co najmniej 10 minut. Świeżego oparzenia nie należy smarować maścią ani przekłuwać pęcherzy."
  },
  {
    "id": "R01_CHS_11",
    "section": "Higiena, choroby i urazy skóry",
    "type": "scenario",
    "prompt": "Osoba ma odmrożone dłonie po długim przebywaniu na mrozie. Które postępowanie jest właściwe?",
    "options": [
      "włożyć dłonie do letniej wody i stopniowo podnosić jej temperaturę",
      "od razu zanurzyć dłonie we wrzątku",
      "intensywnie nacierać odmrożone miejsca",
      "pozostawić osobę bez okrycia"
    ],
    "answer": 0,
    "explanation": "Osobę z odmrożeniem należy ogrzać, podać gorący napój, a odmrożone kończyny włożyć do letniej wody i bardzo powoli podnosić jej temperaturę. Ciężkie odmrożenia wymagają lekarza."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż przykład hierarchii organizacji ciała od najprostszego elementu do całego organizmu.",
    "options": null,
    "items": [
      "organizm",
      "tkanka kostna",
      "układ szkieletowy",
      "komórka kostna",
      "kość ramienna"
    ],
    "answer": [
      "komórka kostna",
      "tkanka kostna",
      "kość ramienna",
      "układ szkieletowy",
      "organizm"
    ],
    "explanation": "Komórki kostne tworzą tkankę kostną, ta buduje kości, kości tworzą układ szkieletowy, a układ szkieletowy wraz z innymi układami współtworzy organizm."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego lewe płuco ma dwa płaty, a prawe trzy?",
    "options": [
      "po lewej stronie znajduje się serce",
      "lewe płuco nie uczestniczy w wymianie gazowej",
      "prawe płuco jest częścią układu krwionośnego",
      "lewe płuco nie zawiera tkanki nabłonkowej",
      "prawe płuco usuwa wodę z organizmu",
      "lewe płuco jest narządem nieparzystym"
    ],
    "answer": 0,
    "explanation": "Lewe płuco jest mniejsze, ponieważ po lewej stronie klatki piersiowej znajduje się serce."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz narządy parzyste.",
    "options": [
      "nerki",
      "płuca",
      "jądra",
      "jajniki",
      "układ szkieletowy",
      "tkanka nerwowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do narządów parzystych należą między innymi nerki, płuca, jądra i jajniki."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W nabłonku jelita w ciągu około __________ powstaje i złuszcza się prawie tyle komórek, ile jest w całym organizmie.",
    "options": null,
    "answer": [
      "dwóch miesięcy"
    ],
    "altAnswers": [
      [
        "dwóch miesięcy",
        "2 miesięcy",
        "dwa miesiące"
      ]
    ],
    "explanation": "Komórki niektórych nabłonków odnawiają się bardzo intensywnie; w nabłonku jelita taki przykład dotyczy około dwóch miesięcy."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jajniki należą jednocześnie do układu hormonalnego i układu rozrodczego.",
    "options": null,
    "answer": true,
    "explanation": "Jajniki wytwarzają żeńskie komórki płciowe oraz wydzielają hormony płciowe, dlatego należą do obu tych układów."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do tkanki nabłonkowej lub mięśniowej.",
    "options": null,
    "items": [
      "ściśle przylegające komórki",
      "wchłanianie substancji",
      "kurczenie i rozkurczanie",
      "przesuwanie pokarmu w jelitach"
    ],
    "categories": [
      "tkanka nabłonkowa",
      "tkanka mięśniowa"
    ],
    "answer": {
      "tkanka nabłonkowa": [
        "ściśle przylegające komórki",
        "wchłanianie substancji"
      ],
      "tkanka mięśniowa": [
        "kurczenie i rozkurczanie",
        "przesuwanie pokarmu w jelitach"
      ]
    },
    "explanation": "Tkanka nabłonkowa ma ściśle przylegające komórki i może pełnić funkcje ochronne oraz związane z wchłanianiem. Tkanka mięśniowa kurczy się i umożliwia ruch oraz przesuwanie pokarmu."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz część serca lub jego działanie z rodzajem tkanki.",
    "options": null,
    "left": [
      "główna tkanka budująca serce",
      "jedna z tkanek okrywających powierzchnię serca",
      "druga tkanka okrywająca powierzchnię serca",
      "tkanka kontrolująca pracę serca"
    ],
    "right": [
      "tkanka mięśniowa poprzecznie prążkowana",
      "tkanka nabłonkowa",
      "tkanka łączna",
      "tkanka nerwowa"
    ],
    "answer": {
      "główna tkanka budująca serce": "tkanka mięśniowa poprzecznie prążkowana",
      "jedna z tkanek okrywających powierzchnię serca": "tkanka nabłonkowa",
      "druga tkanka okrywająca powierzchnię serca": "tkanka łączna",
      "tkanka kontrolująca pracę serca": "tkanka nerwowa"
    },
    "image": "r01_serce_tkanki.jpg",
    "explanation": "Najważniejszą tkanką serca jest mięśniowa poprzecznie prążkowana. Powierzchnię okrywają tkanka nabłonkowa i łączna, a pracę serca kontroluje tkanka nerwowa."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Paznokcie mają grubość nieprzekraczającą około __________.",
    "options": null,
    "answer": [
      "1 mm"
    ],
    "altAnswers": [
      [
        "1 mm",
        "jednego milimetra",
        "1 milimetra"
      ]
    ],
    "explanation": "Paznokcie są twardymi płytkami chroniącymi opuszki palców, a ich grubość nie przekracza około jednego milimetra."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile jaj może złożyć samica wszy ludzkiej?",
    "options": [
      "około 300",
      "około 30",
      "około 3",
      "około 3000",
      "około 10",
      "około 1000"
    ],
    "answer": 0,
    "image": "r01_wesz_na_wlosie.jpg",
    "explanation": "Samica wszy ludzkiej może złożyć nawet około 300 jaj, które przytwierdza do włosów kleistą substancją."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż miejsce, które nie należy do najczęściej atakowanych przez świerzbowca: przestrzenie między palcami, zgięcia łokciowe, brzuch, owłosiona skóra głowy.",
    "options": null,
    "answer": "owłosiona skóra głowy",
    "explanation": "Świerzbowiec najczęściej atakuje przestrzenie między palcami, zgięcia łokciowe i brzuch. Owłosiona skóra głowy jest typowym miejscem bytowania wszy."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki procent wymiany gazowej człowieka zachodzi przez skórę?",
    "options": [
      "około 1%",
      "około 10%",
      "około 25%",
      "około 50%",
      "około 75%",
      "około 100%"
    ],
    "answer": 0,
    "explanation": "Przez skórę człowieka zachodzi tylko około 1% wymiany gazowej."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które mogą zmniejszać efektywność syntezy witaminy D pod wpływem Słońca.",
    "options": [
      "starzenie się skóry",
      "większa ilość melanin",
      "jasna karnacja",
      "większa liczba receptorów dotyku",
      "wydzielanie łoju"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r01_melanina_skora.jpg",
    "explanation": "Efektywność syntezy witaminy D może być mniejsza wraz ze starzeniem się skóry oraz przy większej ilości melanin; u osób o jasnej karnacji synteza zachodzi szybciej."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W skład potu wchodzi przede wszystkim woda, stanowiąca około 99% jego zawartości.",
    "options": null,
    "answer": true,
    "explanation": "Woda stanowi około 99% zawartości potu; poza nią występują między innymi mocznik, kwas mlekowy, węglowodany, tłuszcze i związki mineralne."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Głównym składnikiem potu jest __________, a jednym z pozostałych składników obecnym także w moczu jest __________.",
    "options": null,
    "answer": [
      "woda",
      "mocznik"
    ],
    "altAnswers": [
      [
        "woda",
        "wodę"
      ],
      [
        "mocznik",
        "mocznika"
      ]
    ],
    "explanation": "Pot składa się głównie z wody. Do jego pozostałych składników należy między innymi mocznik."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Dwie populacje o podobnie jasnej karnacji różnią się ekspozycją na Słońce. W populacji bardziej nasłonecznionej zachorowalność na czerniaka jest większa. Jaki wniosek najlepiej pasuje do tych danych?",
    "options": [
      "większa ekspozycja na promieniowanie UV zwiększa ryzyko czerniaka",
      "promieniowanie UV nie ma związku z czerniakiem",
      "jasna karnacja całkowicie chroni przed czerniakiem",
      "czerniak występuje tylko w chłodnym klimacie"
    ],
    "answer": 0,
    "image": "r01_ochrona_uv.jpg",
    "explanation": "Porównanie populacji o podobnym typie karnacji, ale różnej ekspozycji na Słońce, wskazuje na związek większej ekspozycji na promieniowanie UV z większym ryzykiem czerniaka."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Organizm człowieka. Skóra - powłoka organizmu",
  icon: "🧬",
  sectionOrder: [
    "Organizacja ciała i tkanki",
    "Narządy, układy i homeostaza",
    "Budowa i funkcje skóry",
    "Receptory i wytwory naskórka",
    "Higiena, choroby i urazy skóry"
  ],
  sectionIcons: {
    "Organizacja ciała i tkanki": "🔬",
    "Narządy, układy i homeostaza": "🫀",
    "Budowa i funkcje skóry": "🧴",
    "Receptory i wytwory naskórka": "✋",
    "Higiena, choroby i urazy skóry": "🩹"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
