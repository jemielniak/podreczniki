// Skróty sekcji (do identyfikatorów ćwiczeń):
//   HIE  = Hierarchiczna budowa organizmu
//   TKA  = Tkanki zwierzęce
//   SKO  = Budowa i funkcje skóry
//   WYT  = Wytwory naskórka i termoregulacja
//   CHO  = Choroby i higiena skóry
//   HARD = Super trudne
const ALL_EXERCISES = [
  {
    "id": "R01_HIE_01",
    "section": "Hierarchiczna budowa organizmu",
    "type": "single_choice",
    "prompt": "Która kolejność przedstawia poziomy budowy organizmu człowieka od najmniejszego do największego?",
    "options": [
      "komórka → tkanka → narząd → układ narządów → organizm",
      "tkanka → komórka → narząd → organizm → układ narządów",
      "komórka → narząd → tkanka → układ narządów → organizm",
      "narząd → tkanka → komórka → układ narządów → organizm",
      "komórka → tkanka → układ narządów → narząd → organizm",
      "organizm → układ narządów → narząd → tkanka → komórka"
    ],
    "answer": 0,
    "image": "r01_hierarchia_organizmu.jpg",
    "explanation": "Komórki tworzą tkanki, tkanki tworzą narządy, narządy łączą się w układy narządów, a wszystkie układy tworzą organizm."
  },
  {
    "id": "R01_HIE_02",
    "section": "Hierarchiczna budowa organizmu",
    "type": "true_false",
    "prompt": "Człowiek jest zbudowany z komórek zwierzęcych.",
    "options": null,
    "answer": true,
    "explanation": "Człowiek należy do królestwa zwierząt, dlatego jego ciało jest zbudowane z komórek zwierzęcych."
  },
  {
    "id": "R01_HIE_03",
    "section": "Hierarchiczna budowa organizmu",
    "type": "match",
    "prompt": "Połącz poziom hierarchicznej budowy organizmu z jego opisem.",
    "options": null,
    "left": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów"
    ],
    "right": [
      "podstawowa jednostka budująca organizm",
      "zespół komórek o podobnej budowie i funkcjach",
      "część organizmu najczęściej zbudowana z różnych tkanek",
      "grupa połączonych funkcjonalnie narządów"
    ],
    "answer": {
      "komórka": "podstawowa jednostka budująca organizm",
      "tkanka": "zespół komórek o podobnej budowie i funkcjach",
      "narząd": "część organizmu najczęściej zbudowana z różnych tkanek",
      "układ narządów": "grupa połączonych funkcjonalnie narządów"
    },
    "explanation": "Komórka jest podstawową jednostką budowy, tkanka jest zespołem podobnych komórek, narząd jest zwykle zbudowany z różnych tkanek, a układ narządów to grupa funkcjonalnie połączonych narządów."
  },
  {
    "id": "R01_HIE_04",
    "section": "Hierarchiczna budowa organizmu",
    "type": "single_choice",
    "prompt": "Który przykład przedstawia narząd?",
    "options": [
      "żołądek",
      "tkanka kostna",
      "komórka nerwowa",
      "układ oddechowy",
      "organizm człowieka",
      "tkanka nabłonkowa"
    ],
    "answer": 0,
    "explanation": "Żołądek jest narządem. Narządy są zbudowane z tkanek i wykonują określone czynności w organizmie."
  },
  {
    "id": "R01_HIE_05",
    "section": "Hierarchiczna budowa organizmu",
    "type": "multi_select",
    "prompt": "Zaznacz układy narządów, które rozprowadzają substancje po organizmie lub biorą udział w walce z drobnoustrojami.",
    "options": [
      "układ krwionośny",
      "układ limfatyczny",
      "układ pokarmowy",
      "układ mięśniowy",
      "układ rozrodczy"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Układ krwionośny i układ limfatyczny rozprowadzają substancje po organizmie oraz uczestniczą w walce z drobnoustrojami."
  },
  {
    "id": "R01_HIE_06",
    "section": "Hierarchiczna budowa organizmu",
    "type": "fill_in",
    "prompt": "Komórki tworzą __________, te tworzą __________, a narządy łączą się w __________.",
    "options": null,
    "answer": [
      "tkanki",
      "narządy",
      "układy narządów"
    ],
    "altAnswers": [
      [
        "tkanki"
      ],
      [
        "narządy",
        "narzady"
      ],
      [
        "układy narządów",
        "uklady narzadow"
      ]
    ],
    "explanation": "Kolejne poziomy organizacji to: komórka, tkanka, narząd, układ narządów i organizm."
  },
  {
    "id": "R01_HIE_07",
    "section": "Hierarchiczna budowa organizmu",
    "type": "riddle",
    "prompt": "Grupa połączonych funkcjonalnie narządów to...",
    "options": null,
    "answer": "układ narządów",
    "altAnswers": [
      "układ narządów",
      "uklad narzadow"
    ],
    "explanation": "Układ narządów tworzą narządy współpracujące w wykonywaniu określonych funkcji."
  },
  {
    "id": "R01_HIE_08",
    "section": "Hierarchiczna budowa organizmu",
    "type": "scenario",
    "prompt": "Trzustka wytwarza enzymy trawienne, a także wydziela hormony. Do których dwóch układów narządów należy?",
    "options": [
      "pokarmowego i hormonalnego",
      "oddechowego i nerwowego",
      "kostnego i mięśniowego",
      "moczowego i odpornościowego",
      "krwionośnego i limfatycznego",
      "rozrodczego i oddechowego"
    ],
    "answer": 0,
    "image": "r01_trzustka.jpg",
    "explanation": "Trzustka należy do układu pokarmowego, ponieważ wytwarza enzymy trawienne, oraz do układu hormonalnego, ponieważ wydziela hormony."
  },
  {
    "id": "R01_HIE_09",
    "section": "Hierarchiczna budowa organizmu",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odpowiednich poziomów hierarchicznej budowy organizmu.",
    "options": null,
    "items": [
      "komórka kostna",
      "tkanka kostna",
      "kość",
      "układ kostny"
    ],
    "categories": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów"
    ],
    "answer": {
      "komórka": [
        "komórka kostna"
      ],
      "tkanka": [
        "tkanka kostna"
      ],
      "narząd": [
        "kość"
      ],
      "układ narządów": [
        "układ kostny"
      ]
    },
    "explanation": "Komórka kostna jest komórką, tkanka kostna jest tkanką, kość jest narządem, a układ kostny jest układem narządów."
  },
  {
    "id": "R01_HIE_10",
    "section": "Hierarchiczna budowa organizmu",
    "type": "sequence",
    "prompt": "Ułóż poziomy budowy organizmu od najwyższego do najniższego.",
    "options": null,
    "items": [
      "tkanka",
      "organizm",
      "komórka",
      "narząd",
      "układ narządów"
    ],
    "answer": [
      "organizm",
      "układ narządów",
      "narząd",
      "tkanka",
      "komórka"
    ],
    "explanation": "Od poziomu najwyższego do najniższego kolejność jest następująca: organizm, układ narządów, narząd, tkanka, komórka."
  },
  {
    "id": "R01_HIE_11",
    "section": "Hierarchiczna budowa organizmu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: żołądek, serce, kość, tkanka kostna.",
    "options": null,
    "answer": "tkanka kostna",
    "explanation": "Żołądek, serce i kość są narządami, natomiast tkanka kostna jest tkanką."
  },
  {
    "id": "R01_TKA_01",
    "section": "Tkanki zwierzęce",
    "type": "single_choice",
    "prompt": "Ile podstawowych rodzajów tkanek zwierzęcych wyróżnia się w ciele człowieka?",
    "options": [
      "cztery",
      "dwa",
      "trzy",
      "pięć",
      "sześć",
      "osiem"
    ],
    "answer": 0,
    "image": "r01_tkanki_mikroskopowe.jpg",
    "explanation": "Wyróżnia się cztery rodzaje tkanek zwierzęcych: nabłonkową, mięśniową, nerwową i łączną."
  },
  {
    "id": "R01_TKA_02",
    "section": "Tkanki zwierzęce",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki z jej ogólną funkcją.",
    "options": null,
    "left": [
      "tkanka nabłonkowa",
      "tkanka mięśniowa",
      "tkanka nerwowa",
      "tkanka łączna"
    ],
    "right": [
      "okrywa powierzchnię ciała i wyścieła narządy",
      "umożliwia wykonywanie ruchów dzięki kurczeniu się",
      "odbiera i przesyła impulsy nerwowe",
      "zapewnia podporę i ochronę oraz może transportować substancje"
    ],
    "answer": {
      "tkanka nabłonkowa": "okrywa powierzchnię ciała i wyścieła narządy",
      "tkanka mięśniowa": "umożliwia wykonywanie ruchów dzięki kurczeniu się",
      "tkanka nerwowa": "odbiera i przesyła impulsy nerwowe",
      "tkanka łączna": "zapewnia podporę i ochronę oraz może transportować substancje"
    },
    "explanation": "Tkanka nabłonkowa okrywa i wyścieła, mięśniowa kurczy się, nerwowa odbiera i przesyła impulsy, a łączna m.in. podpiera, chroni i transportuje."
  },
  {
    "id": "R01_TKA_03",
    "section": "Tkanki zwierzęce",
    "type": "true_false",
    "prompt": "Komórki tkanki nabłonkowej ściśle do siebie przylegają.",
    "options": null,
    "answer": true,
    "explanation": "Ścisłe przyleganie komórek jest charakterystyczną cechą tkanki nabłonkowej."
  },
  {
    "id": "R01_TKA_04",
    "section": "Tkanki zwierzęce",
    "type": "fill_in",
    "prompt": "Tkanka łączna składa się z __________ oraz znajdującej się między nimi __________.",
    "options": null,
    "answer": [
      "komórek",
      "substancji międzykomórkowej"
    ],
    "altAnswers": [
      [
        "komórek",
        "komorek"
      ],
      [
        "substancji międzykomórkowej",
        "substancji miedzykomorkowej"
      ]
    ],
    "explanation": "W tkance łącznej komórki są zwykle rozproszone w substancji międzykomórkowej."
  },
  {
    "id": "R01_TKA_05",
    "section": "Tkanki zwierzęce",
    "type": "single_choice",
    "prompt": "Która tkanka mięśniowa działa zależnie od woli człowieka?",
    "options": [
      "poprzecznie prążkowana szkieletowa",
      "gładka",
      "poprzecznie prążkowana serca",
      "nerwowa",
      "kostna",
      "chrzęstna"
    ],
    "answer": 0,
    "explanation": "Tkanka mięśniowa poprzecznie prążkowana szkieletowa działa zależnie od woli i umożliwia ruch części ciała oraz całego organizmu."
  },
  {
    "id": "R01_TKA_06",
    "section": "Tkanki zwierzęce",
    "type": "scenario",
    "prompt": "W ścianie żołądka potrzebna jest tkanka, która kurczy się niezależnie od woli i przesuwa treść pokarmową. Jaki to rodzaj tkanki?",
    "options": [
      "mięśniowa gładka",
      "mięśniowa poprzecznie prążkowana szkieletowa",
      "nerwowa",
      "nabłonkowa walcowata",
      "kostna",
      "chrzęstna"
    ],
    "answer": 0,
    "image": "r01_zoladek_i_serce.jpg",
    "explanation": "Tkanka mięśniowa gładka działa niezależnie od woli i umożliwia m.in. przesuwanie treści w przewodzie pokarmowym."
  },
  {
    "id": "R01_TKA_07",
    "section": "Tkanki zwierzęce",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje, które może pełnić krew jako tkanka łączna.",
    "options": [
      "transport tlenu",
      "ochrona przed drobnoustrojami",
      "udział w gojeniu się ran",
      "wytwarzanie ruchów kończyn",
      "oczyszczanie powietrza w drogach oddechowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Krew transportuje substancje, chroni przed drobnoustrojami i uczestniczy w gojeniu się ran."
  },
  {
    "id": "R01_TKA_08",
    "section": "Tkanki zwierzęce",
    "type": "riddle",
    "prompt": "Komórki tej tkanki nazywa się neuronami, a jej zadaniem jest odbieranie i przesyłanie impulsów. To tkanka...",
    "options": null,
    "answer": "nerwowa",
    "altAnswers": [
      "nerwowa",
      "tkanka nerwowa"
    ],
    "explanation": "Tkanka nerwowa jest zbudowana z neuronów i umożliwia reagowanie na bodźce."
  },
  {
    "id": "R01_TKA_09",
    "section": "Tkanki zwierzęce",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: tkanka kostna, tkanka chrzęstna, tkanka tłuszczowa, tkanka nerwowa.",
    "options": null,
    "answer": "tkanka nerwowa",
    "explanation": "Tkanka kostna, chrzęstna i tłuszczowa są rodzajami tkanki łącznej. Tkanka nerwowa stanowi osobny rodzaj tkanki."
  },
  {
    "id": "R01_TKA_10",
    "section": "Tkanki zwierzęce",
    "type": "sort",
    "prompt": "Przyporządkuj funkcję do właściwego rodzaju nabłonka.",
    "options": null,
    "items": [
      "wymiana gazowa",
      "oczyszczanie powietrza w drogach oddechowych",
      "wchłanianie substancji w jelicie cienkim"
    ],
    "categories": [
      "jednowarstwowy płaski",
      "orzęsiony",
      "walcowaty"
    ],
    "answer": {
      "jednowarstwowy płaski": [
        "wymiana gazowa"
      ],
      "orzęsiony": [
        "oczyszczanie powietrza w drogach oddechowych"
      ],
      "walcowaty": [
        "wchłanianie substancji w jelicie cienkim"
      ]
    },
    "explanation": "Nabłonek jednowarstwowy płaski uczestniczy w wymianie gazowej, orzęsiony oczyszcza powietrze w drogach oddechowych, a walcowaty umożliwia wchłanianie w jelicie cienkim."
  },
  {
    "id": "R01_TKA_11",
    "section": "Tkanki zwierzęce",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki mięśniowej z przykładem jej działania.",
    "options": null,
    "left": [
      "poprzecznie prążkowana szkieletowa",
      "poprzecznie prążkowana serca",
      "gładka"
    ],
    "right": [
      "ruch części ciała",
      "skurcze serca",
      "przesuwanie treści w przewodzie pokarmowym"
    ],
    "answer": {
      "poprzecznie prążkowana szkieletowa": "ruch części ciała",
      "poprzecznie prążkowana serca": "skurcze serca",
      "gładka": "przesuwanie treści w przewodzie pokarmowym"
    },
    "explanation": "Tkanka szkieletowa porusza ciałem, tkanka mięśniowa serca umożliwia skurcze serca, a gładka działa w ścianach narządów, np. żołądka."
  },
  {
    "id": "R01_SKO_01",
    "section": "Budowa i funkcje skóry",
    "type": "single_choice",
    "prompt": "Jakim narządem pod względem wielkości jest skóra?",
    "options": [
      "największym narządem",
      "najmniejszym narządem",
      "jedynym narządem z tkanki łącznej",
      "narządem układu pokarmowego",
      "narządem występującym tylko u dorosłych",
      "narządem bez receptorów"
    ],
    "answer": 0,
    "explanation": "Skóra jest największym narządem organizmu człowieka."
  },
  {
    "id": "R01_SKO_02",
    "section": "Budowa i funkcje skóry",
    "type": "fill_in",
    "prompt": "Powierzchnia skóry dorosłego człowieka wynosi około __________, a jej grubość zależnie od okolicy ciała wynosi od __________.",
    "options": null,
    "answer": [
      "1,8 m²",
      "0,1 do 5 mm"
    ],
    "altAnswers": [
      [
        "1,8 m²",
        "1,8 m2",
        "ok. 1,8 m²"
      ],
      [
        "0,1 do 5 mm",
        "0,1-5 mm",
        "0,1–5 mm"
      ]
    ],
    "explanation": "Powierzchnia skóry dorosłego człowieka wynosi około 1,8 m², a grubość od około 0,1 do 5 mm."
  },
  {
    "id": "R01_SKO_03",
    "section": "Budowa i funkcje skóry",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje skóry.",
    "options": [
      "ochrona organizmu",
      "termoregulacja",
      "odbieranie bodźców",
      "wytwarzanie witaminy D",
      "trawienie białek",
      "wytwarzanie czerwonych krwinek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skóra chroni organizm, uczestniczy w termoregulacji, wydziela pot i łój, usuwa część zbędnych produktów przemiany materii, odbiera bodźce i uczestniczy w syntezie witaminy D."
  },
  {
    "id": "R01_SKO_04",
    "section": "Budowa i funkcje skóry",
    "type": "true_false",
    "prompt": "Skóra jest zbudowana z naskórka i skóry właściwej.",
    "options": null,
    "answer": true,
    "image": "r01_model_przekroju_skory.jpg",
    "explanation": "Dwie warstwy skóry to naskórek i skóra właściwa. Tkanka podskórna leży pod skórą."
  },
  {
    "id": "R01_SKO_05",
    "section": "Budowa i funkcje skóry",
    "type": "match",
    "prompt": "Połącz część skóry z właściwym opisem.",
    "options": null,
    "left": [
      "naskórek",
      "skóra właściwa",
      "tkanka podskórna"
    ],
    "right": [
      "zewnętrzna warstwa z tkanki nabłonkowej wielowarstwowej",
      "warstwa z tkanki łącznej zawierająca m.in. receptory i naczynia",
      "warstwa zawierająca tkankę tłuszczową i chroniąca głębiej położone narządy"
    ],
    "answer": {
      "naskórek": "zewnętrzna warstwa z tkanki nabłonkowej wielowarstwowej",
      "skóra właściwa": "warstwa z tkanki łącznej zawierająca m.in. receptory i naczynia",
      "tkanka podskórna": "warstwa zawierająca tkankę tłuszczową i chroniąca głębiej położone narządy"
    },
    "explanation": "Naskórek jest zewnętrzną warstwą z tkanki nabłonkowej, skóra właściwa jest zbudowana z tkanki łącznej, a tkanka podskórna zawiera tkankę tłuszczową i pełni m.in. funkcję termoizolacyjną."
  },
  {
    "id": "R01_SKO_06",
    "section": "Budowa i funkcje skóry",
    "type": "riddle",
    "prompt": "Jest zewnętrzną warstwą skóry, a jego komórki tworzą kilka warstw i ściśle do siebie przylegają. To...",
    "options": null,
    "answer": "naskórek",
    "altAnswers": [
      "naskórek",
      "naskorek"
    ],
    "explanation": "Naskórek jest zewnętrzną warstwą skóry i jest zbudowany z tkanki nabłonkowej wielowarstwowej."
  },
  {
    "id": "R01_SKO_07",
    "section": "Budowa i funkcje skóry",
    "type": "scenario",
    "prompt": "Dotykasz bardzo gorącego przedmiotu i natychmiast odczuwasz temperaturę oraz ból. Które elementy skóry odebrały te bodźce?",
    "options": [
      "receptory czuciowe",
      "gruczoły łojowe",
      "melaniny",
      "włókna kolagenowe",
      "paznokcie",
      "gruczoły sutkowe"
    ],
    "answer": 0,
    "image": "r01_receptory_skory.jpg",
    "explanation": "Receptory czuciowe w skórze właściwej odbierają bodźce dotyku, bólu, ucisku i temperatury."
  },
  {
    "id": "R01_SKO_08",
    "section": "Budowa i funkcje skóry",
    "type": "single_choice",
    "prompt": "Co nadaje skórze właściwej elastyczność i wytrzymałość na uszkodzenia mechaniczne?",
    "options": [
      "włókna kolagenu",
      "melaniny",
      "mocznik",
      "łój",
      "sole mineralne potu",
      "keratyna paznokci"
    ],
    "answer": 0,
    "explanation": "Skóra właściwa zawiera włókna kolagenu, które nadają jej elastyczność i wytrzymałość."
  },
  {
    "id": "R01_SKO_09",
    "section": "Budowa i funkcje skóry",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do warstwy, w której występują.",
    "options": null,
    "items": [
      "komórki barwnikowe",
      "receptory czuciowe",
      "gruczoły łojowe",
      "korzenie włosów"
    ],
    "categories": [
      "naskórek",
      "skóra właściwa"
    ],
    "answer": {
      "naskórek": [
        "komórki barwnikowe"
      ],
      "skóra właściwa": [
        "receptory czuciowe",
        "gruczoły łojowe",
        "korzenie włosów"
      ]
    },
    "explanation": "Komórki barwnikowe znajdują się w naskórku, natomiast receptory czuciowe, gruczoły łojowe i korzenie włosów znajdują się w skórze właściwej."
  },
  {
    "id": "R01_SKO_10",
    "section": "Budowa i funkcje skóry",
    "type": "odd_one_out",
    "prompt": "Wskaż funkcję, której nie pełni skóra: ochrona organizmu, termoregulacja, synteza witaminy D, trawienie białek i cukrów.",
    "options": null,
    "answer": "trawienie białek i cukrów",
    "explanation": "Skóra nie trawi białek i cukrów. Pełni natomiast funkcję ochronną, termoregulacyjną i uczestniczy w syntezie witaminy D."
  },
  {
    "id": "R01_SKO_11",
    "section": "Budowa i funkcje skóry",
    "type": "sequence",
    "prompt": "Ułóż etapy przemieszczania się komórek naskórka od ich powstania do złuszczenia.",
    "options": null,
    "items": [
      "komórki obumierają",
      "komórki dzielą się u podstawy naskórka",
      "warstwa rogowa się złuszcza",
      "komórki przesuwają się ku powierzchni",
      "do komórek dociera coraz mniej substancji odżywczych"
    ],
    "answer": [
      "komórki dzielą się u podstawy naskórka",
      "komórki przesuwają się ku powierzchni",
      "do komórek dociera coraz mniej substancji odżywczych",
      "komórki obumierają",
      "warstwa rogowa się złuszcza"
    ],
    "explanation": "Komórki powstają w warstwie rozrodczej, przesuwają się ku powierzchni, otrzymują coraz mniej substancji odżywczych, obumierają i tworzą złuszczającą się warstwę rogową."
  },
  {
    "id": "R01_WYT_01",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "match",
    "prompt": "Połącz strukturę z wytwarzaną substancją lub jej funkcją.",
    "options": null,
    "left": [
      "gruczoł potowy",
      "gruczoł łojowy",
      "gruczoł sutkowy",
      "paznokieć"
    ],
    "right": [
      "wydziela pot",
      "wydziela łój",
      "może wydzielać mleko",
      "chroni opuszkę palca"
    ],
    "answer": {
      "gruczoł potowy": "wydziela pot",
      "gruczoł łojowy": "wydziela łój",
      "gruczoł sutkowy": "może wydzielać mleko",
      "paznokieć": "chroni opuszkę palca"
    },
    "image": "r01_wytwory_naskorka.jpg",
    "explanation": "Gruczoły potowe wydzielają pot, gruczoły łojowe wydzielają łój, a gruczoły sutkowe u kobiet po urodzeniu dziecka wydzielają mleko."
  },
  {
    "id": "R01_WYT_02",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "true_false",
    "prompt": "Pot składa się w około 99% z wody.",
    "options": null,
    "answer": true,
    "explanation": "Pot składa się w około 99% z wody."
  },
  {
    "id": "R01_WYT_03",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "single_choice",
    "prompt": "Jakie składniki dominują w pocie?",
    "options": [
      "woda i sole mineralne",
      "białka i wapń",
      "łój i melaniny",
      "mleko i keratyna",
      "kolagen i tłuszcz",
      "glukoza i tlen"
    ],
    "answer": 0,
    "explanation": "Pot zawiera głównie wodę i sole mineralne."
  },
  {
    "id": "R01_WYT_04",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "fill_in",
    "prompt": "Gdy temperatura otoczenia jest wysoka, wydzielanie potu się __________, a parująca woda __________ powierzchnię skóry.",
    "options": null,
    "answer": [
      "zwiększa",
      "chłodzi"
    ],
    "altAnswers": [
      [
        "zwiększa",
        "zwieksza"
      ],
      [
        "chłodzi",
        "chlodzi"
      ]
    ],
    "image": "r01_termoregulacja.jpg",
    "explanation": "Wysoka temperatura zwiększa wydzielanie potu. Odparowująca woda chłodzi powierzchnię skóry i chroni organizm przed przegrzaniem."
  },
  {
    "id": "R01_WYT_05",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "multi_select",
    "prompt": "Zaznacz składniki potu inne niż woda.",
    "options": [
      "mocznik",
      "węglowodany",
      "tłuszcze",
      "związki mineralne",
      "melaniny",
      "kolagen"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Oprócz wody w pocie występują m.in. mocznik, węglowodany, tłuszcze i związki mineralne."
  },
  {
    "id": "R01_WYT_06",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "riddle",
    "prompt": "Tłuszczowa wydzielina, która chroni skórę przed wysychaniem i utrudnia wnikanie drobnoustrojów, to...",
    "options": null,
    "answer": "łój",
    "altAnswers": [
      "łój",
      "loj"
    ],
    "explanation": "Łój jest wytwarzany przez gruczoły łojowe i tworzy warstwę ochronną na skórze."
  },
  {
    "id": "R01_WYT_07",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "scenario",
    "prompt": "U nastolatka szczególnie w okolicach czoła, nosa i brody wydziela się dużo tłustej substancji. Które gruczoły są najbardziej aktywne?",
    "options": [
      "gruczoły łojowe",
      "gruczoły potowe",
      "gruczoły sutkowe",
      "receptory czuciowe",
      "melanocyty",
      "naczynia krwionośne"
    ],
    "answer": 0,
    "image": "r01_gruczoly_skory.jpg",
    "explanation": "Łój jest najobficiej wydzielany w okresie dojrzewania, szczególnie w okolicach czoła, nosa i brody."
  },
  {
    "id": "R01_WYT_08",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie jest wytworem naskórka: włosy, paznokcie, gruczoły potowe, receptory czuciowe.",
    "options": null,
    "answer": "receptory czuciowe",
    "explanation": "Włosy, paznokcie i gruczoły potowe są wytworami naskórka. Receptory czuciowe znajdują się w skórze właściwej."
  },
  {
    "id": "R01_WYT_09",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "single_choice",
    "prompt": "Gruczoły sutkowe są zmodyfikowanymi gruczołami...",
    "options": [
      "potowymi",
      "łojowymi",
      "trawiennymi",
      "hormonalnymi",
      "ślinowymi",
      "łzowymi"
    ],
    "answer": 0,
    "explanation": "Gruczoły sutkowe są parzystymi, największymi gruczołami skórnymi i są zmodyfikowanymi gruczołami potowymi."
  },
  {
    "id": "R01_WYT_10",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "sequence",
    "prompt": "Ułóż kolejne zdarzenia podczas chłodzenia organizmu w wysokiej temperaturze otoczenia.",
    "options": null,
    "items": [
      "woda z potu paruje",
      "gruczoły potowe wydzielają więcej potu",
      "skóra oddaje więcej ciepła",
      "naczynia krwionośne skóry rozszerzają się"
    ],
    "answer": [
      "naczynia krwionośne skóry rozszerzają się",
      "gruczoły potowe wydzielają więcej potu",
      "woda z potu paruje",
      "skóra oddaje więcej ciepła"
    ],
    "explanation": "W gorącu naczynia krwionośne skóry rozszerzają się, gruczoły potowe wydzielają więcej potu, woda z potu paruje i chłodzi skórę."
  },
  {
    "id": "R01_WYT_11",
    "section": "Wytwory naskórka i termoregulacja",
    "type": "sort",
    "prompt": "Przyporządkuj wydzielinę do odpowiedniego gruczołu.",
    "options": null,
    "items": [
      "pot",
      "łój",
      "mleko"
    ],
    "categories": [
      "gruczoły potowe",
      "gruczoły łojowe",
      "gruczoły sutkowe"
    ],
    "answer": {
      "gruczoły potowe": [
        "pot"
      ],
      "gruczoły łojowe": [
        "łój"
      ],
      "gruczoły sutkowe": [
        "mleko"
      ]
    },
    "explanation": "Gruczoły potowe wydzielają pot, łojowe łój, a sutkowe mleko."
  },
  {
    "id": "R01_CHO_01",
    "section": "Choroby i higiena skóry",
    "type": "single_choice",
    "prompt": "Co powoduje grzybicę skóry?",
    "options": [
      "grzyby chorobotwórcze",
      "wirusy",
      "melaniny",
      "nadmiar kolagenu",
      "brak receptorów",
      "zbyt mała ilość potu"
    ],
    "answer": 0,
    "image": "r01_grzybica_stopy.jpg",
    "explanation": "Grzybica skóry jest zakaźną chorobą wywoływaną przez grzyby chorobotwórcze."
  },
  {
    "id": "R01_CHO_02",
    "section": "Choroby i higiena skóry",
    "type": "multi_select",
    "prompt": "Zaznacz objawy grzybicy skóry.",
    "options": [
      "swędzenie",
      "pieczenie skóry",
      "łuszcząca się skóra",
      "krostki",
      "ciemna asymetryczna zmiana barwnikowa",
      "krwawienie z rany po skaleczeniu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do objawów grzybicy należą m.in. swędzenie, pieczenie, wysypka, krostki i łuszczenie się skóry."
  },
  {
    "id": "R01_CHO_03",
    "section": "Choroby i higiena skóry",
    "type": "scenario",
    "prompt": "Uczeń idzie na basen. Które zachowanie najlepiej zmniejszy ryzyko grzybicy stóp?",
    "options": [
      "noszenie własnych klapek",
      "chodzenie boso pod prysznicem",
      "pożyczanie ręcznika",
      "noszenie wilgotnych skarpet",
      "korzystanie ze wspólnego obuwia",
      "długie przebywanie w mokrych ubraniach"
    ],
    "answer": 0,
    "explanation": "Na basenie należy nosić własne klapki i używać własnych przyborów higienicznych."
  },
  {
    "id": "R01_CHO_04",
    "section": "Choroby i higiena skóry",
    "type": "true_false",
    "prompt": "Wszawica zawsze jest oznaką braku higieny.",
    "options": null,
    "answer": false,
    "explanation": "Wszawica występuje na całym świecie i nie zawsze jest oznaką braku higieny."
  },
  {
    "id": "R01_CHO_05",
    "section": "Choroby i higiena skóry",
    "type": "match",
    "prompt": "Połącz chorobę z jej bezpośrednią przyczyną.",
    "options": null,
    "left": [
      "wszawica",
      "świerzb",
      "grzybica skóry",
      "trądzik"
    ],
    "right": [
      "wesz ludzka",
      "świerzbowiec",
      "grzyby chorobotwórcze",
      "zmiany hormonalne i nadmiar łoju"
    ],
    "answer": {
      "wszawica": "wesz ludzka",
      "świerzb": "świerzbowiec",
      "grzybica skóry": "grzyby chorobotwórcze",
      "trądzik": "zmiany hormonalne i nadmiar łoju"
    },
    "image": "r01_pasozyty_skory.jpg",
    "explanation": "Wszawicę powoduje wesz ludzka, świerzb niewielki pajęczak - świerzbowiec, grzybicę grzyby chorobotwórcze, a trądzik wiąże się ze zmianami hormonalnymi i nadmiernym wydzielaniem łoju."
  },
  {
    "id": "R01_CHO_06",
    "section": "Choroby i higiena skóry",
    "type": "fill_in",
    "prompt": "Świerzb wywołuje __________. Zarazić się można m.in. przez bezpośredni kontakt z osobą chorą albo przez używanie jej __________.",
    "options": null,
    "answer": [
      "świerzbowiec",
      "ręczników i pościeli"
    ],
    "altAnswers": [
      [
        "świerzbowiec",
        "swierzbowiec"
      ],
      [
        "ręczników i pościeli",
        "recznikow i poscieli",
        "pościeli i ręczników",
        "poscieli i recznikow"
      ]
    ],
    "explanation": "Świerzb powoduje świerzbowiec. Do zakażenia może dojść przez bezpośredni kontakt lub używanie ręczników i pościeli osoby chorej."
  },
  {
    "id": "R01_CHO_07",
    "section": "Choroby i higiena skóry",
    "type": "riddle",
    "prompt": "Złośliwy nowotwór skóry, który może rozwinąć się z melanocytów, to...",
    "options": null,
    "answer": "czerniak",
    "altAnswers": [
      "czerniak"
    ],
    "image": "r01_czerniak_znamie.jpg",
    "explanation": "Czerniak jest nowotworem złośliwym skóry i może rozwijać się z melanocytów."
  },
  {
    "id": "R01_CHO_08",
    "section": "Choroby i higiena skóry",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, której nie wywołuje pasożyt: wszawica, świerzb, grzybica skóry.",
    "options": null,
    "answer": "grzybica skóry",
    "explanation": "Wszawicę wywołuje wesz ludzka, świerzb - świerzbowiec, natomiast grzybicę powodują grzyby chorobotwórcze."
  },
  {
    "id": "R01_CHO_09",
    "section": "Choroby i higiena skóry",
    "type": "multi_select",
    "prompt": "Zaznacz działania zmniejszające ryzyko czerniaka.",
    "options": [
      "używanie kremów z filtrem UV",
      "unikanie solarium",
      "kontrolowanie znamion",
      "unikanie słońca w godzinach 11.00-16.00",
      "drażnienie znamion",
      "długie opalanie w południe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyka czerniaka obejmuje unikanie silnego słońca, stosowanie kremów z filtrem UV, rezygnację z solarium i kontrolowanie znamion."
  },
  {
    "id": "R01_CHO_10",
    "section": "Choroby i higiena skóry",
    "type": "scenario",
    "prompt": "W okresie dojrzewania gruczoły łojowe wydzielają nadmierną ilość łoju. Łój miesza się ze złuszczonymi komórkami naskórka i zatyka ujścia przewodów. Co może powstać?",
    "options": [
      "zaskórniki",
      "melaniny",
      "paznokcie",
      "włókna kolagenu",
      "receptory czuciowe",
      "gruczoły sutkowe"
    ],
    "answer": 0,
    "explanation": "Zatkane ujścia gruczołów prowadzą do powstawania zaskórników, które mogą stać się podłożem do rozwoju bakterii i stanu zapalnego."
  },
  {
    "id": "R01_CHO_11",
    "section": "Choroby i higiena skóry",
    "type": "sort",
    "prompt": "Przyporządkuj działanie profilaktyczne do choroby, przed którą szczególnie pomaga się chronić.",
    "options": null,
    "items": [
      "noszenie klapek na basenie",
      "niepożyczanie grzebienia",
      "używanie kremu z filtrem UV",
      "unikanie solarium"
    ],
    "categories": [
      "grzybica skóry",
      "wszawica",
      "czerniak"
    ],
    "answer": {
      "grzybica skóry": [
        "noszenie klapek na basenie"
      ],
      "wszawica": [
        "niepożyczanie grzebienia"
      ],
      "czerniak": [
        "używanie kremu z filtrem UV",
        "unikanie solarium"
      ]
    },
    "explanation": "Klapki na basenie ograniczają ryzyko grzybicy, własne grzebienie i nakrycia głowy pomagają zapobiegać wszawicy, a filtr UV i unikanie solarium zmniejszają ryzyko czerniaka."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W której okolicy skóra jest najgrubsza?",
    "options": [
      "na podeszwach stóp",
      "na powiekach",
      "na wargach",
      "na opuszkach palców",
      "na czole",
      "na nosie"
    ],
    "answer": 0,
    "explanation": "Skóra jest najcieńsza na powiekach i wargach, a najgrubsza na podeszwach stóp."
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki łącznej z funkcją.",
    "options": null,
    "left": [
      "tkanka kostna",
      "tkanka chrzęstna",
      "tkanka tłuszczowa",
      "krew"
    ],
    "right": [
      "buduje kości i magazynuje związki wapnia i fosforu",
      "łączy kości i chroni je przed ścieraniem",
      "magazynuje tłuszcz i chroni narządy przed urazami",
      "transportuje substancje i uczestniczy w obronie organizmu"
    ],
    "answer": {
      "tkanka kostna": "buduje kości i magazynuje związki wapnia i fosforu",
      "tkanka chrzęstna": "łączy kości i chroni je przed ścieraniem",
      "tkanka tłuszczowa": "magazynuje tłuszcz i chroni narządy przed urazami",
      "krew": "transportuje substancje i uczestniczy w obronie organizmu"
    },
    "explanation": "Tkanka kostna buduje kości i magazynuje związki wapnia i fosforu, chrzęstna łączy kości i chroni je przed ścieraniem, tłuszczowa magazynuje tłuszcz i chroni narządy, a krew transportuje substancje i uczestniczy w obronie."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W jednym narządzie tkanka nabłonkowa wydziela enzymy do jego wnętrza, a tkanka mięśniowa gładka powoduje skurcze jego ścian. O jaki narząd chodzi?",
    "options": [
      "żołądek",
      "serce",
      "kość",
      "płuco",
      "nerka",
      "mózg"
    ],
    "answer": 0,
    "image": "r01_zoladek_i_serce.jpg",
    "explanation": "W żołądku nabłonek wydziela enzymy trawienne, a mięśnie gładkie odpowiadają za skurcze jego ścian."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Paznokcie u rąk rosną około __________ na tydzień, a zerwany paznokieć potrzebuje około __________ na odrośnięcie.",
    "options": null,
    "answer": [
      "1 mm",
      "160 dni"
    ],
    "altAnswers": [
      [
        "1 mm",
        "około 1 mm",
        "ok. 1 mm"
      ],
      [
        "160 dni",
        "około 160 dni",
        "ok. 160 dni"
      ]
    ],
    "explanation": "Paznokcie u rąk rosną około 1 mm na tydzień, a zerwany paznokieć odrasta około 160 dni."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy lub cechy związane ze skórą właściwą.",
    "options": [
      "włókna kolagenowe",
      "receptory czuciowe",
      "naczynia krwionośne",
      "korzenie włosów",
      "warstwa rogowa naskórka",
      "komórki barwnikowe naskórka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skóra właściwa jest zbudowana z tkanki łącznej, zawiera włókna kolagenowe, naczynia krwionośne, receptory czuciowe, gruczoły potowe i łojowe oraz korzenie włosów."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania zmian trądzikowych.",
    "options": null,
    "items": [
      "powstaje stan zapalny",
      "zwiększa się wydzielanie łoju",
      "powstają zaskórniki",
      "łój i złuszczone komórki zatykają ujścia gruczołów",
      "nadmiar bakterii rozwija się w zaskórnikach"
    ],
    "answer": [
      "zwiększa się wydzielanie łoju",
      "łój i złuszczone komórki zatykają ujścia gruczołów",
      "powstają zaskórniki",
      "nadmiar bakterii rozwija się w zaskórnikach",
      "powstaje stan zapalny"
    ],
    "explanation": "Zmiany hormonalne zwiększają wydzielanie łoju. Łój ze złuszczonymi komórkami zatyka ujścia gruczołów, powstają zaskórniki, namnażają się bakterie i rozwija się stan zapalny."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Promieniowanie słoneczne może zwiększać produkcję melanin przez melanocyty, dlatego latem skóra może przyjmować brązowawy odcień.",
    "options": null,
    "answer": true,
    "explanation": "Melanocyty produkują melaniny, a promieniowanie słoneczne zwiększa ich produkcję."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz układ narządów z funkcją.",
    "options": null,
    "left": [
      "układ kostny",
      "układ pokarmowy",
      "układ oddechowy",
      "układ moczowy",
      "układ nerwowy"
    ],
    "right": [
      "tworzy rusztowanie organizmu i chroni narządy",
      "wchłania substancje odżywcze z pokarmu",
      "wprowadza tlen i usuwa dwutlenek węgla",
      "usuwa zbędne produkty przemiany materii i nadmiar wody",
      "odbiera i przetwarza bodźce oraz kontroluje pracę narządów"
    ],
    "answer": {
      "układ kostny": "tworzy rusztowanie organizmu i chroni narządy",
      "układ pokarmowy": "wchłania substancje odżywcze z pokarmu",
      "układ oddechowy": "wprowadza tlen i usuwa dwutlenek węgla",
      "układ moczowy": "usuwa zbędne produkty przemiany materii i nadmiar wody",
      "układ nerwowy": "odbiera i przetwarza bodźce oraz kontroluje pracę narządów"
    },
    "explanation": "Układ kostny stanowi rusztowanie i chroni narządy, pokarmowy wchłania substancje odżywcze, oddechowy dostarcza tlen i usuwa dwutlenek węgla, moczowy usuwa zbędne produkty przemiany materii i nadmiar wody, a nerwowy odbiera i przetwarza bodźce."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Składnik potu, który sprawia, że zdrowa skóra ma kwaśny odczyn, to...",
    "options": null,
    "answer": "mocznik",
    "altAnswers": [
      "mocznik"
    ],
    "explanation": "Wraz z potem usuwany jest m.in. mocznik. To on sprawia, że zdrowa skóra ma odczyn kwasowy."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie jest rodzajem tkanki łącznej: tkanka kostna, tkanka chrzęstna, tkanka tłuszczowa, tkanka nerwowa, krew.",
    "options": null,
    "answer": "tkanka nerwowa",
    "explanation": "Tkanka kostna, chrzęstna, tłuszczowa i krew należą do tkanek łącznych. Tkanka nerwowa jest osobnym rodzajem tkanki."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Latem między 11.00 a 16.00 zauważasz u siebie ciemne znamię, które stało się asymetryczne i zmieniło kształt. Co jest najwłaściwszym działaniem?",
    "options": [
      "skonsultować znamię z dermatologiem i ograniczyć ekspozycję na silne słońce",
      "korzystać częściej z solarium",
      "drażnić znamię, aby sprawdzić reakcję",
      "zakryć znamię tylko na jeden dzień",
      "zrezygnować z kremu z filtrem",
      "wydłużyć opalanie w południe"
    ],
    "answer": 0,
    "image": "r01_czerniak_znamie.jpg",
    "explanation": "Zmiany wielkości, koloru i kształtu znamion oraz ból, świąd czy krwawienie wymagają kontroli. Należy unikać najsilniejszego słońca i odbywać wizyty u dermatologa."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Trzustka należy do układu __________, ponieważ wytwarza enzymy trawienne, oraz do układu __________, ponieważ wydziela hormony.",
    "options": null,
    "answer": [
      "pokarmowego",
      "hormonalnego"
    ],
    "altAnswers": [
      [
        "pokarmowego"
      ],
      [
        "hormonalnego"
      ]
    ],
    "explanation": "Trzustka jest przykładem narządu należącego do więcej niż jednego układu: pokarmowego i hormonalnego."
  },
  {
    "id": "R01_HARD_13",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do naskórka, skóry właściwej lub tkanki podskórnej.",
    "options": null,
    "items": [
      "melanocyty",
      "warstwa rogowa",
      "receptory czuciowe",
      "gruczoły łojowe",
      "tkanka tłuszczowa"
    ],
    "categories": [
      "naskórek",
      "skóra właściwa",
      "tkanka podskórna"
    ],
    "answer": {
      "naskórek": [
        "melanocyty",
        "warstwa rogowa"
      ],
      "skóra właściwa": [
        "receptory czuciowe",
        "gruczoły łojowe"
      ],
      "tkanka podskórna": [
        "tkanka tłuszczowa"
      ]
    },
    "explanation": "Melanocyty i warstwa rogowa należą do naskórka; receptory i gruczoły łojowe występują w skórze właściwej; tkanka tłuszczowa jest charakterystyczna dla tkanki podskórnej."
  },
  {
    "id": "R01_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające rozwojowi czerniaka.",
    "options": [
      "nadmierne opalanie się",
      "korzystanie z solarium",
      "drażnienie znamion",
      "czynniki genetyczne",
      "noszenie klapek na basenie",
      "używanie własnego ręcznika"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do czynników sprzyjających czerniakowi należą nadmierne opalanie, korzystanie z solarium, drażnienie znamion oraz czynniki genetyczne. Najistotniejszym czynnikiem ryzyka jest ekspozycja na promieniowanie UV."
  },
  {
    "id": "R01_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz chorobę lub problem z odpowiednim sposobem postępowania.",
    "options": null,
    "left": [
      "wszawica",
      "świerzb",
      "grzybica skóry",
      "podejrzane znamię"
    ],
    "right": [
      "preparat z apteki i dezynfekcja przedmiotów osobistych",
      "maść przepisana przez lekarza i higiena otoczenia",
      "dokładne osuszanie ciała i własne przybory higieniczne",
      "kontrola u dermatologa"
    ],
    "answer": {
      "wszawica": "preparat z apteki i dezynfekcja przedmiotów osobistych",
      "świerzb": "maść przepisana przez lekarza i higiena otoczenia",
      "grzybica skóry": "dokładne osuszanie ciała i własne przybory higieniczne",
      "podejrzane znamię": "kontrola u dermatologa"
    },
    "explanation": "Wszawicę leczy się specjalnymi preparatami i dezynfekuje przedmioty osobiste, świerzb wymaga specjalnej kuracji i maści przepisanych przez lekarza, grzybicy zapobiega m.in. dokładne osuszanie skóry, a przy podejrzanym znamieniu potrzebna jest konsultacja dermatologiczna."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Hierarchiczna budowa organizmu. Skóra",
  icon: "🧬",
  sectionOrder: [
    "Hierarchiczna budowa organizmu",
    "Tkanki zwierzęce",
    "Budowa i funkcje skóry",
    "Wytwory naskórka i termoregulacja",
    "Choroby i higiena skóry"
  ],
  sectionIcons: {
    "Hierarchiczna budowa organizmu": "🧍",
    "Tkanki zwierzęce": "🔬",
    "Budowa i funkcje skóry": "🧴",
    "Wytwory naskórka i termoregulacja": "🌡️",
    "Choroby i higiena skóry": "🩺"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
