// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KRO  = Królestwo zwierząt
//   NAB  = Tkanka nabłonkowa
//   MIN  = Tkanka mięśniowa i nerwowa
//   LAC  = Tkanka łączna i krew
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R01_KRO_01",
    "section": "Królestwo zwierząt",
    "type": "single_choice",
    "prompt": "Która cecha jest wspólna dla wszystkich zwierząt opisanych w rozdziale?",
    "options": [
      "Są cudzożywne",
      "Mają chloroplasty",
      "Są jednokomórkowe",
      "Mają ścianę komórkową",
      "Wytwarzają pokarm ze światła",
      "Żyją wyłącznie na lądzie"
    ],
    "answer": 0,
    "explanation": "Zwierzęta są organizmami cudzożywnymi, ponieważ nie mają chloroplastów i nie wytwarzają samodzielnie pokarmu.",
    "image": "r01_komorka_zwierzeca.jpg"
  },
  {
    "id": "R01_KRO_02",
    "section": "Królestwo zwierząt",
    "type": "multi_select",
    "prompt": "Zaznacz cechy komórek zwierzęcych wymienione w rozdziale.",
    "options": [
      "Mają jądro komórkowe",
      "Nie mają chloroplastów",
      "Nie mają ściany komórkowej",
      "Zawsze mają celulozową ścianę komórkową",
      "Zawsze zawierają chlorofil"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Komórki zwierzęce mają jądro komórkowe, ale nie mają chloroplastów ani ściany komórkowej."
  },
  {
    "id": "R01_KRO_03",
    "section": "Królestwo zwierząt",
    "type": "sequence",
    "prompt": "Ułóż poziomy organizacji ciała zwierząt od najmniejszego do największego.",
    "options": null,
    "items": [
      "układ narządów",
      "komórka",
      "organizm",
      "narząd",
      "tkanka"
    ],
    "answer": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów",
      "organizm"
    ],
    "explanation": "Komórki tworzą tkanki, tkanki budują narządy, narządy tworzą układy narządów, a współpracujące układy narządów tworzą organizm.",
    "image": "r01_poziomy_organizacji.jpg"
  },
  {
    "id": "R01_KRO_04",
    "section": "Królestwo zwierząt",
    "type": "match",
    "prompt": "Połącz poziom organizacji z przykładem z rozdziału.",
    "options": null,
    "left": [
      "komórka",
      "tkanka",
      "narząd",
      "układ narządów"
    ],
    "right": [
      "serce",
      "komórka mięśniowa serca",
      "układ krwionośny",
      "tkanka mięśniowa serca"
    ],
    "answer": {
      "komórka": "komórka mięśniowa serca",
      "tkanka": "tkanka mięśniowa serca",
      "narząd": "serce",
      "układ narządów": "układ krwionośny"
    },
    "explanation": "Rozdział pokazuje hierarchię na przykładzie komórki mięśniowej serca, tkanki mięśniowej serca, serca i układu krwionośnego."
  },
  {
    "id": "R01_KRO_05",
    "section": "Królestwo zwierząt",
    "type": "true_false",
    "prompt": "Kręgowce mają sztywny szkielet wewnętrzny, którego ważnymi częściami są czaszka i kręgosłup.",
    "options": null,
    "answer": true,
    "explanation": "Kręgowce mają szkielet wewnętrzny, a jego głównymi częściami są czaszka i kręgosłup zbudowany z kręgów.",
    "image": "r01_kregowiec_i_bezkregowiec.jpg"
  },
  {
    "id": "R01_KRO_06",
    "section": "Królestwo zwierząt",
    "type": "sort",
    "prompt": "Przyporządkuj grupy zwierząt do kręgowców albo bezkręgowców.",
    "options": null,
    "items": [
      "ryby",
      "płazy",
      "gady",
      "ptaki",
      "ssaki",
      "stawonogi",
      "mięczaki",
      "pierścienice"
    ],
    "categories": [
      "kręgowce",
      "bezkręgowce"
    ],
    "answer": {
      "kręgowce": [
        "ryby",
        "płazy",
        "gady",
        "ptaki",
        "ssaki"
      ],
      "bezkręgowce": [
        "stawonogi",
        "mięczaki",
        "pierścienice"
      ]
    },
    "explanation": "Do kręgowców należą ryby, płazy, gady, ptaki i ssaki. Stawonogi, mięczaki i pierścienice należą do bezkręgowców."
  },
  {
    "id": "R01_KRO_07",
    "section": "Królestwo zwierząt",
    "type": "single_choice",
    "prompt": "Które zwierzęta mają ciało o zwykle opływowym kształcie, płetwy i skórę wytwarzającą łuski?",
    "options": [
      "Ryby",
      "Płazy",
      "Gady",
      "Ptaki",
      "Ssaki",
      "Parzydełkowce"
    ],
    "answer": 0,
    "explanation": "W rozdziale ryby opisano jako kręgowce o zwykle opływowym kształcie ciała, wyposażone w płetwy i łuski.",
    "image": "r01_grupy_kregowcow.jpg"
  },
  {
    "id": "R01_KRO_08",
    "section": "Królestwo zwierząt",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: ryby, płazy, gady, mięczaki, ssaki.",
    "options": null,
    "answer": "mięczaki",
    "explanation": "Ryby, płazy, gady i ssaki są kręgowcami, a mięczaki należą do bezkręgowców."
  },
  {
    "id": "R01_KRO_09",
    "section": "Królestwo zwierząt",
    "type": "fill_in",
    "prompt": "Zwierzęta, które nie mają sztywnego szkieletu wewnętrznego, nazywamy __________.",
    "options": null,
    "answer": [
      "bezkręgowcami"
    ],
    "altAnswers": [
      [
        "bezkręgowcami",
        "bezkręgowce",
        "zwierzętami bezkręgowymi"
      ]
    ],
    "explanation": "Bezkręgowce to zwierzęta bez sztywnego szkieletu wewnętrznego."
  },
  {
    "id": "R01_KRO_10",
    "section": "Królestwo zwierząt",
    "type": "match",
    "prompt": "Połącz grupę kręgowców z jej cechą.",
    "options": null,
    "left": [
      "płazy",
      "gady",
      "ptaki",
      "ssaki"
    ],
    "right": [
      "gruba i sucha skóra z łuskami i tarczkami",
      "cienka stale wilgotna naga skóra",
      "włosy i karmienie potomstwa mlekiem",
      "kończyny przednie przekształcone w skrzydła i pióra"
    ],
    "answer": {
      "płazy": "cienka stale wilgotna naga skóra",
      "gady": "gruba i sucha skóra z łuskami i tarczkami",
      "ptaki": "kończyny przednie przekształcone w skrzydła i pióra",
      "ssaki": "włosy i karmienie potomstwa mlekiem"
    },
    "explanation": "Każda z tych grup kręgowców ma charakterystyczne cechy budowy wymienione w rozdziale."
  },
  {
    "id": "R01_KRO_11",
    "section": "Królestwo zwierząt",
    "type": "scenario",
    "prompt": "Uczeń ogląda zwierzę o miękkim, delikatnym ciele, częściowo okrytym muszlą. Do której grupy bezkręgowców powinien je zaliczyć?",
    "options": [
      "Mięczaki",
      "Pierścienice",
      "Nicienie",
      "Płazińce",
      "Gady",
      "Ryby"
    ],
    "answer": 0,
    "explanation": "Mięczaki mają delikatne, miękkie ciało, a u niektórych z nich jest ono okryte muszlą."
  },
  {
    "id": "R01_KRO_12",
    "section": "Królestwo zwierząt",
    "type": "riddle",
    "prompt": "Jak nazywa się szereg mniejszych elementów szkieletu, czyli kręgów, występujący u kręgowców?",
    "options": null,
    "answer": "kręgosłup",
    "altAnswers": [
      "kręgosłup",
      "kregoslup"
    ],
    "explanation": "Kręgosłup składa się z kręgów i jest jedną z głównych części szkieletu kręgowców."
  },
  {
    "id": "R01_NAB_01",
    "section": "Tkanka nabłonkowa",
    "type": "single_choice",
    "prompt": "Która tkanka występuje na powierzchni ciała zwierząt i wyścieła niektóre narządy wewnętrzne?",
    "options": [
      "Tkanka nabłonkowa",
      "Tkanka kostna",
      "Tkanka tłuszczowa",
      "Tkanka chrzęstna",
      "Krew",
      "Tkanka glejowa"
    ],
    "answer": 0,
    "explanation": "Tkanka nabłonkowa występuje na powierzchni ciała zwierząt oraz wyścieła niektóre narządy wewnętrzne."
  },
  {
    "id": "R01_NAB_02",
    "section": "Tkanka nabłonkowa",
    "type": "multi_select",
    "prompt": "Zaznacz główne zadania nabłonków wymienione w rozdziale.",
    "options": [
      "Ochrona ciała przed drobnymi uszkodzeniami",
      "Wchłanianie różnych substancji",
      "Wytwarzanie i wydzielanie różnych substancji",
      "Magazynowanie soli mineralnych",
      "Tworzenie kręgów kręgosłupa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Nabłonki chronią ciało, wchłaniają różne substancje oraz wytwarzają i wydzielają na przykład enzymy, mleko lub śluz."
  },
  {
    "id": "R01_NAB_03",
    "section": "Tkanka nabłonkowa",
    "type": "true_false",
    "prompt": "Komórki tkanki nabłonkowej ściśle do siebie przylegają.",
    "options": null,
    "answer": true,
    "explanation": "Nabłonek jest zbudowany z komórek, które zawsze ściśle do siebie przylegają."
  },
  {
    "id": "R01_NAB_04",
    "section": "Tkanka nabłonkowa",
    "type": "fill_in",
    "prompt": "Ze względu na kształt komórek nabłonki dzielimy na płaskie, sześcienne i __________.",
    "options": null,
    "answer": [
      "walcowate"
    ],
    "altAnswers": [
      [
        "walcowate",
        "walcowaty"
      ]
    ],
    "explanation": "Podział nabłonków według kształtu komórek obejmuje nabłonki płaskie, sześcienne i walcowate."
  },
  {
    "id": "R01_NAB_05",
    "section": "Tkanka nabłonkowa",
    "type": "match",
    "prompt": "Połącz rodzaj nabłonka z miejscem występowania.",
    "options": null,
    "left": [
      "jednowarstwowy płaski",
      "jednowarstwowy sześcienny",
      "jednowarstwowy walcowaty",
      "wielowarstwowy płaski"
    ],
    "right": [
      "zewnętrzna warstwa skóry",
      "kanaliki budujące nerki",
      "ściany pęcherzyków płucnych",
      "wnętrze jelita cienkiego"
    ],
    "answer": {
      "jednowarstwowy płaski": "ściany pęcherzyków płucnych",
      "jednowarstwowy sześcienny": "kanaliki budujące nerki",
      "jednowarstwowy walcowaty": "wnętrze jelita cienkiego",
      "wielowarstwowy płaski": "zewnętrzna warstwa skóry"
    },
    "explanation": "Rozdział podaje przykłady występowania czterech typów nabłonków w płucach, nerkach, jelicie cienkim i skórze.",
    "image": "r01_nablonki_rodzaje.jpg"
  },
  {
    "id": "R01_NAB_06",
    "section": "Tkanka nabłonkowa",
    "type": "single_choice",
    "prompt": "Który nabłonek umożliwia transport tlenu i dwutlenku węgla między wnętrzem pęcherzyka płucnego a krwią?",
    "options": [
      "Jednowarstwowy płaski",
      "Jednowarstwowy sześcienny",
      "Jednowarstwowy walcowaty",
      "Wielowarstwowy płaski",
      "Tkanka kostna",
      "Tkanka tłuszczowa"
    ],
    "answer": 0,
    "explanation": "Nabłonek jednowarstwowy płaski buduje ściany pęcherzyków płucnych i umożliwia wymianę gazów."
  },
  {
    "id": "R01_NAB_07",
    "section": "Tkanka nabłonkowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: płaski, sześcienny, walcowaty, kostny.",
    "options": null,
    "answer": "kostny",
    "explanation": "Płaski, sześcienny i walcowaty to określenia kształtu komórek nabłonka, a kostny odnosi się do tkanki łącznej."
  },
  {
    "id": "R01_NAB_08",
    "section": "Tkanka nabłonkowa",
    "type": "scenario",
    "prompt": "W preparacie widać wiele warstw komórek tworzących zewnętrzną warstwę skóry. Jaki typ nabłonka obserwujesz?",
    "options": [
      "Wielowarstwowy płaski",
      "Jednowarstwowy płaski",
      "Jednowarstwowy sześcienny",
      "Jednowarstwowy walcowaty",
      "Tkanka chrzęstna",
      "Krew"
    ],
    "answer": 0,
    "explanation": "Zewnętrzną warstwę skóry tworzy nabłonek wielowarstwowy płaski."
  },
  {
    "id": "R01_NAB_09",
    "section": "Tkanka nabłonkowa",
    "type": "true_false",
    "prompt": "Nabłonki wielowarstwowe występują wyłącznie u zwierząt kręgowych.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że nabłonki jednowarstwowe występują u wszystkich zwierząt, a wielowarstwowe wyłącznie u kręgowców."
  },
  {
    "id": "R01_NAB_10",
    "section": "Tkanka nabłonkowa",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do funkcji tkanki nabłonkowej.",
    "options": null,
    "items": [
      "zewnętrzna warstwa skóry",
      "pęcherzyki płucne",
      "jelito cienkie",
      "wydzielanie śluzu",
      "wydzielanie enzymów trawiennych"
    ],
    "categories": [
      "ochrona",
      "wchłanianie lub transport",
      "wytwarzanie i wydzielanie"
    ],
    "answer": {
      "ochrona": [
        "zewnętrzna warstwa skóry"
      ],
      "wchłanianie lub transport": [
        "pęcherzyki płucne",
        "jelito cienkie"
      ],
      "wytwarzanie i wydzielanie": [
        "wydzielanie śluzu",
        "wydzielanie enzymów trawiennych"
      ]
    },
    "explanation": "Nabłonek skóry chroni, nabłonki pęcherzyków i jelita uczestniczą w transporcie lub wchłanianiu, a inne nabłonki wydzielają śluz i enzymy."
  },
  {
    "id": "R01_NAB_11",
    "section": "Tkanka nabłonkowa",
    "type": "riddle",
    "prompt": "Jak nazywają się liczne wypustki nabłonka dróg oddechowych, które usuwają zanieczyszczenia z wdychanego powietrza?",
    "options": null,
    "answer": "rzęski",
    "altAnswers": [
      "rzęski",
      "rzeski"
    ],
    "explanation": "Nabłonek wyściełający drogi oddechowe kręgowców ma rzęski usuwające zanieczyszczenia."
  },
  {
    "id": "R01_NAB_12",
    "section": "Tkanka nabłonkowa",
    "type": "single_choice",
    "prompt": "Który nabłonek występuje w kanalikach budujących nerki i umożliwia wchłanianie niektórych substancji z moczu do krwi?",
    "options": [
      "Jednowarstwowy sześcienny",
      "Jednowarstwowy walcowaty",
      "Wielowarstwowy płaski",
      "Jednowarstwowy płaski",
      "Tkanka mięśniowa serca",
      "Tkanka tłuszczowa"
    ],
    "answer": 0,
    "explanation": "Nabłonek jednowarstwowy sześcienny występuje w kanalikach budujących nerki i umożliwia wchłanianie niektórych substancji, na przykład glukozy."
  },
  {
    "id": "R01_MIN_01",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "single_choice",
    "prompt": "Z czego wynika podstawowa funkcja tkanki mięśniowej?",
    "options": [
      "Zdolności jej elementów do kurczenia się i rozkurczania",
      "Obecności hemoglobiny",
      "Dużej ilości soli mineralnych",
      "Ścisłego przylegania komórek",
      "Obecności komórek parzydełkowych",
      "Wytwarzania muszli"
    ],
    "answer": 0,
    "explanation": "Elementy tkanki mięśniowej mogą się kurczyć i rozkurczać, dlatego umożliwiają ruchy organizmu i narządów."
  },
  {
    "id": "R01_MIN_02",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki mięśniowej z miejscem występowania.",
    "options": null,
    "left": [
      "gładka",
      "poprzecznie prążkowana serca",
      "poprzecznie prążkowana szkieletowa"
    ],
    "right": [
      "ściany serca",
      "mięśnie szkieletowe kończyn",
      "ściany żołądka i jelit"
    ],
    "answer": {
      "gładka": "ściany żołądka i jelit",
      "poprzecznie prążkowana serca": "ściany serca",
      "poprzecznie prążkowana szkieletowa": "mięśnie szkieletowe kończyn"
    },
    "explanation": "Tkanka gładka buduje ściany narządów wewnętrznych, tkanka serca buduje serce, a tkanka szkieletowa buduje mięśnie szkieletowe.",
    "image": "r01_tkanka_miesniowa_typy.jpg"
  },
  {
    "id": "R01_MIN_03",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "true_false",
    "prompt": "Tkanka mięśniowa gładka pracuje zależnie od woli.",
    "options": null,
    "answer": false,
    "explanation": "Tkanka mięśniowa gładka kurczy się wolno i pracuje niezależnie od woli."
  },
  {
    "id": "R01_MIN_04",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "multi_select",
    "prompt": "Zaznacz cechy tkanki mięśniowej poprzecznie prążkowanej szkieletowej.",
    "options": [
      "Buduje mięśnie szkieletowe",
      "Jej włókna mają liczne jądra przy powierzchni",
      "Pracuje zależnie od woli",
      "Kurczy się wolno",
      "Buduje ściany serca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tkanka szkieletowa buduje mięśnie szkieletowe, ma włókna z licznymi jądrami przy powierzchni i pracuje zależnie od woli."
  },
  {
    "id": "R01_MIN_05",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "fill_in",
    "prompt": "Podstawowym zadaniem komórki nerwowej jest odbieranie i przesyłanie informacji w postaci __________.",
    "options": null,
    "answer": [
      "impulsu nerwowego"
    ],
    "altAnswers": [
      [
        "impulsu nerwowego",
        "impulsów nerwowych",
        "impuls nerwowy"
      ]
    ],
    "explanation": "Komórki nerwowe odbierają i przesyłają informacje w postaci impulsów nerwowych."
  },
  {
    "id": "R01_MIN_06",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "single_choice",
    "prompt": "Jak nazywa się pojedyncza długa wypustka komórki nerwowej, zwykle rozgałęziona na końcu?",
    "options": [
      "Akson",
      "Dendryt",
      "Osocze",
      "Jądro",
      "Płytka krwi",
      "Włókno kolagenowe"
    ],
    "answer": 0,
    "explanation": "Akson to pojedyncza długa wypustka neuronu, która zwykle rozgałęzia się w końcowej części.",
    "image": "r01_neuron_budowa.jpg"
  },
  {
    "id": "R01_MIN_07",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "scenario",
    "prompt": "Podczas obserwacji mikroskopowej uczeń widzi komórki walcowate, rozgałęzione, tępo zakończone, z jednym lub dwoma jądrami w środku. Jaki typ tkanki rozpoznaje?",
    "options": [
      "Tkankę mięśniową poprzecznie prążkowaną serca",
      "Tkankę mięśniową gładką",
      "Tkankę mięśniową poprzecznie prążkowaną szkieletową",
      "Tkankę kostną",
      "Nabłonek jednowarstwowy płaski",
      "Krew"
    ],
    "answer": 0,
    "explanation": "Takie komórki są charakterystyczne dla tkanki mięśniowej poprzecznie prążkowanej serca."
  },
  {
    "id": "R01_MIN_08",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do komórki nerwowej albo komórek gleju.",
    "options": null,
    "items": [
      "dendryty",
      "akson",
      "ciało komórki",
      "ochrona neuronów",
      "dostarczanie substancji odżywczych"
    ],
    "categories": [
      "komórka nerwowa",
      "komórki gleju"
    ],
    "answer": {
      "komórka nerwowa": [
        "dendryty",
        "akson",
        "ciało komórki"
      ],
      "komórki gleju": [
        "ochrona neuronów",
        "dostarczanie substancji odżywczych"
      ]
    },
    "explanation": "Neuron składa się z ciała komórki, dendrytów i aksonu, a komórki gleju chronią neurony i dostarczają im substancji odżywczych."
  },
  {
    "id": "R01_MIN_09",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "true_false",
    "prompt": "Osłonka aksonu chroni go i zwiększa szybkość przesyłania impulsu nerwowego.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wyjaśnia, że osłonka chroni akson i zwiększa szybkość przesyłania impulsu nerwowego."
  },
  {
    "id": "R01_MIN_10",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: akson, dendryt, ciało komórki nerwowej, osocze.",
    "options": null,
    "answer": "osocze",
    "explanation": "Akson, dendryt i ciało komórki nerwowej są częściami neuronu, a osocze jest składnikiem krwi."
  },
  {
    "id": "R01_MIN_11",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "riddle",
    "prompt": "Jak nazywamy komórkę nerwową?",
    "options": null,
    "answer": "neuron",
    "altAnswers": [
      "neuron",
      "komórka nerwowa",
      "komorka nerwowa"
    ],
    "explanation": "Komórki nerwowe są nazywane neuronami."
  },
  {
    "id": "R01_MIN_12",
    "section": "Tkanka mięśniowa i nerwowa",
    "type": "sequence",
    "prompt": "Ułóż drogę impulsu nerwowego przez opisaną w rozdziale komórkę nerwową.",
    "options": null,
    "items": [
      "akson",
      "dendryty",
      "inna komórka",
      "ciało komórki"
    ],
    "answer": [
      "dendryty",
      "ciało komórki",
      "akson",
      "inna komórka"
    ],
    "explanation": "Dendryty przewodzą impuls do ciała komórki, a akson przesyła go z ciała komórki do innej komórki."
  },
  {
    "id": "R01_LAC_01",
    "section": "Tkanka łączna i krew",
    "type": "single_choice",
    "prompt": "Co jest charakterystyczną cechą budowy tkanki łącznej?",
    "options": [
      "Luźno rozrzucone komórki w substancji międzykomórkowej",
      "Ściśle przylegające komórki w wielu warstwach",
      "Obecność wyłącznie włókien mięśniowych",
      "Brak substancji międzykomórkowej",
      "Obecność chloroplastów",
      "Budowa tylko z aksonów"
    ],
    "answer": 0,
    "explanation": "Tkanka łączna składa się z komórek luźno rozrzuconych w substancji międzykomórkowej."
  },
  {
    "id": "R01_LAC_02",
    "section": "Tkanka łączna i krew",
    "type": "multi_select",
    "prompt": "Zaznacz rodzaje tkanki łącznej wymienione w rozdziale.",
    "options": [
      "Tkanka chrzęstna",
      "Tkanka kostna",
      "Tkanka tłuszczowa",
      "Krew",
      "Tkanka nabłonkowa walcowata",
      "Tkanka mięśniowa serca"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W rozdziale wymieniono między innymi tkankę chrzęstną, kostną, tłuszczową i krew jako rodzaje tkanki łącznej.",
    "image": "r01_tkanka_laczna_typy.jpg"
  },
  {
    "id": "R01_LAC_03",
    "section": "Tkanka łączna i krew",
    "type": "fill_in",
    "prompt": "Substancja międzykomórkowa krwi ma postać płynu o słomkowym zabarwieniu i nosi nazwę __________.",
    "options": null,
    "answer": [
      "osocza krwi"
    ],
    "altAnswers": [
      [
        "osocza krwi",
        "osocze",
        "osocza"
      ]
    ],
    "explanation": "Płynna substancja międzykomórkowa krwi to osocze krwi."
  },
  {
    "id": "R01_LAC_04",
    "section": "Tkanka łączna i krew",
    "type": "match",
    "prompt": "Połącz rodzaj tkanki łącznej z funkcją.",
    "options": null,
    "left": [
      "tkanka chrzęstna",
      "tkanka kostna",
      "tkanka tłuszczowa",
      "krew"
    ],
    "right": [
      "transportuje tlen i dwutlenek węgla",
      "chroni powierzchnie kości w stawach przed ścieraniem",
      "magazynuje sole mineralne",
      "chroni przed utratą ciepła i stanowi materiał zapasowy"
    ],
    "answer": {
      "tkanka chrzęstna": "chroni powierzchnie kości w stawach przed ścieraniem",
      "tkanka kostna": "magazynuje sole mineralne",
      "tkanka tłuszczowa": "chroni przed utratą ciepła i stanowi materiał zapasowy",
      "krew": "transportuje tlen i dwutlenek węgla"
    },
    "explanation": "Tkanki łączne pełnią różne funkcje: chrząstka chroni powierzchnie stawowe, kość magazynuje sole, tłuszcz jest zapasem energii, a krew transportuje substancje."
  },
  {
    "id": "R01_LAC_05",
    "section": "Tkanka łączna i krew",
    "type": "true_false",
    "prompt": "Tkanka chrzęstna jest bardzo elastyczna i sprężysta dzięki dużej zawartości włókien białkowych.",
    "options": null,
    "answer": true,
    "explanation": "Substancja międzykomórkowa tkanki chrzęstnej jest bogata we włókna białkowe, dlatego tkanka jest elastyczna i sprężysta."
  },
  {
    "id": "R01_LAC_06",
    "section": "Tkanka łączna i krew",
    "type": "single_choice",
    "prompt": "Dzięki czemu tkanka kostna jest twarda?",
    "options": [
      "Dzięki solom mineralnym",
      "Dzięki kroplom tłuszczu",
      "Dzięki rzęskom",
      "Dzięki komórkom parzydełkowym",
      "Dzięki chloroplastom",
      "Dzięki osłonkom aksonów"
    ],
    "answer": 0,
    "explanation": "Substancja międzykomórkowa tkanki kostnej jest bogata w sole mineralne, które nadają jej twardość."
  },
  {
    "id": "R01_LAC_07",
    "section": "Tkanka łączna i krew",
    "type": "scenario",
    "prompt": "Zwierzę gromadzi pod skórą tkankę, która chroni przed utratą ciepła i zawiera komórki niemal w całości wypełnione dużą kroplą tłuszczu. Jaka to tkanka?",
    "options": [
      "Tkanka tłuszczowa",
      "Tkanka chrzęstna",
      "Tkanka kostna",
      "Tkanka nerwowa",
      "Nabłonek jednowarstwowy",
      "Tkanka mięśniowa gładka"
    ],
    "answer": 0,
    "explanation": "Tkanka tłuszczowa występuje przede wszystkim pod skórą i wokół narządów, chroni przed utratą ciepła i stanowi materiał zapasowy."
  },
  {
    "id": "R01_LAC_08",
    "section": "Tkanka łączna i krew",
    "type": "sort",
    "prompt": "Przyporządkuj składniki krwi do ich funkcji lub cech.",
    "options": null,
    "items": [
      "osocze",
      "płytki krwi",
      "krwinki czerwone",
      "krwinki białe"
    ],
    "categories": [
      "transport gazów",
      "krzepnięcie krwi",
      "obrona organizmu",
      "płynna substancja międzykomórkowa"
    ],
    "answer": {
      "transport gazów": [
        "krwinki czerwone"
      ],
      "krzepnięcie krwi": [
        "płytki krwi"
      ],
      "obrona organizmu": [
        "krwinki białe"
      ],
      "płynna substancja międzykomórkowa": [
        "osocze"
      ]
    },
    "explanation": "Krwinki czerwone transportują gazy dzięki hemoglobinie, płytki krwi odpowiadają za krzepnięcie, krwinki białe unieszkodliwiają drobnoustroje, a osocze jest płynną substancją międzykomórkową.",
    "image": "r01_sklad_krwi.jpg"
  },
  {
    "id": "R01_LAC_09",
    "section": "Tkanka łączna i krew",
    "type": "riddle",
    "prompt": "Jak nazywa się czerwony barwnik krwinek czerwonych umożliwiający transport tlenu i dwutlenku węgla?",
    "options": null,
    "answer": "hemoglobina",
    "altAnswers": [
      "hemoglobina",
      "hemoglobinę",
      "hemoglobiny"
    ],
    "explanation": "Krwinki czerwone zawierają hemoglobinę, czyli czerwony barwnik umożliwiający transport tlenu i dwutlenku węgla."
  },
  {
    "id": "R01_LAC_10",
    "section": "Tkanka łączna i krew",
    "type": "true_false",
    "prompt": "Osocze krwi składa się w 90% z wody.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje, że osocze jest głównym składnikiem krwi i składa się w 90% z wody."
  },
  {
    "id": "R01_LAC_11",
    "section": "Tkanka łączna i krew",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: osocze, płytki krwi, krwinki czerwone, dendryty.",
    "options": null,
    "answer": "dendryty",
    "explanation": "Osocze, płytki krwi i krwinki czerwone są składnikami krwi, a dendryty są wypustkami komórki nerwowej."
  },
  {
    "id": "R01_LAC_12",
    "section": "Tkanka łączna i krew",
    "type": "single_choice",
    "prompt": "Która tkanka łączna łączy niektóre kości, na przykład żebra z mostkiem?",
    "options": [
      "Tkanka chrzęstna",
      "Tkanka kostna",
      "Tkanka tłuszczowa",
      "Krew",
      "Tkanka nerwowa",
      "Nabłonek wielowarstwowy"
    ],
    "answer": 0,
    "explanation": "Tkanka chrzęstna łączy niektóre kości, na przykład żebra z mostkiem."
  },
  {
    "id": "R01_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które zwierzęta opisano jako jedyne, które nie wykształcają tkanek, narządów i układów?",
    "options": [
      "Gąbki",
      "Parzydełkowce",
      "Płazińce",
      "Nicienie",
      "Pierścienice",
      "Mięczaki"
    ],
    "answer": 0,
    "explanation": "Gąbki są opisane jako jedyne zwierzęta, które nie wykształcają tkanek, narządów i układów.",
    "image": "r01_gabki_morskie.jpg"
  },
  {
    "id": "R01_HARD_02",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Każda komórka gąbki może przekształcić się w komórkę innego typu, co wiąże się z ich dużą zdolnością regeneracji.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział wyjaśnia, że komórki gąbek mogą zmieniać typ, dzięki czemu gąbki potrafią odbudować cały organizm nawet z mikroskopijnych fragmentów ciała."
  },
  {
    "id": "R01_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Włókna najliczniej występujące w substancji międzykomórkowej są zbudowane z białka nazywanego __________.",
    "options": null,
    "answer": [
      "kolagenem"
    ],
    "altAnswers": [
      [
        "kolagenem",
        "kolagen"
      ]
    ],
    "explanation": "W substancji międzykomórkowej najliczniejsze są włókna zbudowane z kolagenu."
  },
  {
    "id": "R01_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje prawdziwe o tkance mięśniowej poprzecznie prążkowanej serca.",
    "options": [
      "Buduje ściany serca",
      "Jej komórki są rozgałęzione",
      "Kurczy się szybko",
      "Pracuje zależnie od woli",
      "Ma liczne jądra przy powierzchni włókna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tkanka mięśniowa serca buduje ściany serca, ma rozgałęzione komórki i kurczy się szybko, ale pracuje niezależnie od woli."
  },
  {
    "id": "R01_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz nabłonek z funkcją podaną w rozdziale.",
    "options": null,
    "left": [
      "jednowarstwowy płaski",
      "jednowarstwowy sześcienny",
      "jednowarstwowy walcowaty",
      "wielowarstwowy płaski"
    ],
    "right": [
      "wydziela enzymy trawienne",
      "chroni przed drobnymi uszkodzeniami i drobnoustrojami",
      "umożliwia transport tlenu i dwutlenku węgla między pęcherzykiem a krwią",
      "umożliwia wchłanianie glukozy z moczu do krwi"
    ],
    "answer": {
      "jednowarstwowy płaski": "umożliwia transport tlenu i dwutlenku węgla między pęcherzykiem a krwią",
      "jednowarstwowy sześcienny": "umożliwia wchłanianie glukozy z moczu do krwi",
      "jednowarstwowy walcowaty": "wydziela enzymy trawienne",
      "wielowarstwowy płaski": "chroni przed drobnymi uszkodzeniami i drobnoustrojami"
    },
    "explanation": "Przykłady funkcji nabłonków w rozdziale dotyczą pęcherzyków płucnych, kanalików nerkowych, jelita cienkiego i skóry."
  },
  {
    "id": "R01_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który składnik krwi jest fragmentem cytoplazmy otoczonym błoną komórkową?",
    "options": [
      "Płytki krwi",
      "Krwinki czerwone",
      "Krwinki białe",
      "Osocze",
      "Hemoglobina",
      "Włókna kolagenowe"
    ],
    "answer": 0,
    "explanation": "Płytki krwi to fragmenty cytoplazmy otoczone błoną komórkową i odpowiadają za krzepnięcie krwi."
  },
  {
    "id": "R01_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz obserwuje tkankę łączną, której substancja międzykomórkowa zawiera sole mineralne i włókna białkowe. Tkanka jest twarda, ale także elastyczna. Co obserwuje?",
    "options": [
      "Tkankę kostną",
      "Tkankę chrzęstną",
      "Tkankę tłuszczową",
      "Krew",
      "Tkankę nerwową",
      "Nabłonek walcowaty"
    ],
    "answer": 0,
    "explanation": "Tkanka kostna jest twarda dzięki solom mineralnym, a elastyczna dzięki włóknom białkowym."
  },
  {
    "id": "R01_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Rozdziel przykłady według tego, czy dotyczą kręgowców czy bezkręgowców.",
    "options": null,
    "items": [
      "nabłonki wielowarstwowe",
      "czaszkę i kręgosłup",
      "pancerz raka",
      "muszlę ślimaka",
      "komórki parzydełkowe"
    ],
    "categories": [
      "kręgowce",
      "bezkręgowce"
    ],
    "answer": {
      "kręgowce": [
        "nabłonki wielowarstwowe",
        "czaszkę i kręgosłup"
      ],
      "bezkręgowce": [
        "pancerz raka",
        "muszlę ślimaka",
        "komórki parzydełkowe"
      ]
    },
    "explanation": "Nabłonki wielowarstwowe oraz czaszka i kręgosłup są w rozdziale powiązane z kręgowcami, a pancerz raka, muszla ślimaka i komórki parzydełkowe z bezkręgowcami."
  },
  {
    "id": "R01_HARD_09",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się płyn o słomkowym zabarwieniu, który stanowi substancję międzykomórkową krwi?",
    "options": null,
    "answer": "osocze krwi",
    "altAnswers": [
      "osocze krwi",
      "osocze",
      "osocza krwi",
      "osocze krwi"
    ],
    "explanation": "Substancja międzykomórkowa krwi ma postać płynu o słomkowym zabarwieniu i nazywa się osoczem krwi."
  },
  {
    "id": "R01_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: płazińce, nicienie, pierścienice, płazy.",
    "options": null,
    "answer": "płazy",
    "explanation": "Płazińce, nicienie i pierścienice są bezkręgowcami, a płazy są kręgowcami."
  },
  {
    "id": "R01_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż elementy przykładu z sercem od najmniejszego poziomu organizacji do największego.",
    "options": null,
    "items": [
      "serce",
      "układ krwionośny",
      "tkanka mięśniowa serca",
      "komórka mięśniowa serca"
    ],
    "answer": [
      "komórka mięśniowa serca",
      "tkanka mięśniowa serca",
      "serce",
      "układ krwionośny"
    ],
    "explanation": "Przykład w rozdziale pokazuje przejście od komórki mięśniowej serca przez tkankę i narząd do układu krwionośnego."
  },
  {
    "id": "R01_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz składniki osocza krwi wymienione w rozdziale.",
    "options": [
      "Woda",
      "Sole mineralne",
      "Białka",
      "Cukry",
      "Tłuszcze",
      "Chloroplasty"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Osocze składa się w 90% z wody, a poza tym zawiera sole mineralne, białka, cukry i tłuszcze."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r01",
  number: 1,
  title: "Świat zwierząt",
  icon: "🦁",
  sectionOrder: [
    "Królestwo zwierząt",
    "Tkanka nabłonkowa",
    "Tkanka mięśniowa i nerwowa",
    "Tkanka łączna i krew"
  ],
  sectionIcons: {
    "Królestwo zwierząt": "🐾",
    "Tkanka nabłonkowa": "🧱",
    "Tkanka mięśniowa i nerwowa": "💪",
    "Tkanka łączna i krew": "🩸"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
