// Skróty sekcji (do identyfikatorów ćwiczeń):
//   LIM = Układ limfatyczny i odporność
//   WYD = Układ wydalniczy
//   NER = Układ nerwowy i narządy zmysłów
//   HOR = Układ hormonalny i skóra
//   ROZ = Rozmnażanie i rozwój człowieka
//   ZDR = Homeostaza i zdrowie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_LIM_01",
    "section": "Układ limfatyczny i odporność",
    "type": "single_choice",
    "prompt": "Jaki płyn krąży w naczyniach układu limfatycznego?",
    "options": [
      "osocze krwi",
      "limfa (chłonka)",
      "żółć",
      "mocz",
      "płyn mózgowo-rdzeniowy",
      "ślina"
    ],
    "image": "r05_narzady_limfatyczne.jpg",
    "answer": 1,
    "explanation": "W naczyniach limfatycznych krąży limfa (chłonka), będąca przesączem krwi i zawierająca m.in. białe krwinki."
  },
  {
    "id": "R05_LIM_02",
    "section": "Układ limfatyczny i odporność",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje układu limfatycznego.",
    "options": [
      "Odprowadzanie nadmiaru wody z tkanek",
      "Transport tłuszczów",
      "Wytwarzanie żółci",
      "Udział w obronie organizmu",
      "Produkcja tyroksyny",
      "Odprowadzanie przesączonego osocza do krwi"
    ],
    "answer": [
      0,
      1,
      3,
      5
    ],
    "explanation": "Układ limfatyczny odprowadza nadmiar wody, transportuje tłuszcze, zwraca przesączone osocze do krwi i uczestniczy w obronie przed drobnoustrojami."
  },
  {
    "id": "R05_LIM_03",
    "section": "Układ limfatyczny i odporność",
    "type": "true_false",
    "prompt": "Węzły chłonne filtrują przepływającą przez nie limfę.",
    "options": null,
    "image": "r05_narzady_limfatyczne.jpg",
    "answer": true,
    "explanation": "Węzły chłonne filtrują limfę, zatrzymują patogeny i biorą udział w reakcjach odpornościowych."
  },
  {
    "id": "R05_LIM_04",
    "section": "Układ limfatyczny i odporność",
    "type": "fill_in",
    "prompt": "Przeciwciała wytwarzają limfocyty __________.",
    "options": null,
    "altAnswers": [
      [
        "B",
        "b"
      ]
    ],
    "image": "r05_przeciwciala_antygen.jpg",
    "answer": [
      "B"
    ],
    "explanation": "Limfocyty B wytwarzają przeciwciała i uczestniczą w pamięci immunologicznej."
  },
  {
    "id": "R05_LIM_05",
    "section": "Układ limfatyczny i odporność",
    "type": "riddle",
    "prompt": "Jak nazywa się odporność uzyskiwana przez dziecko wraz z mlekiem matki?",
    "options": null,
    "altAnswers": [
      "odporność naturalna bierna",
      "naturalna bierna",
      "bierna naturalna"
    ],
    "answer": "odporność naturalna bierna",
    "explanation": "Dziecko otrzymuje z mlekiem matki gotowe przeciwciała, dlatego jest to odporność bierna nabyta naturalnie."
  },
  {
    "id": "R05_LIM_06",
    "section": "Układ limfatyczny i odporność",
    "type": "odd_one_out",
    "prompt": "Wskaż narząd, który nie należy do układu limfatycznego: migdałki, grasica, śledziona, trzustka.",
    "options": null,
    "image": "r05_narzady_limfatyczne.jpg",
    "answer": "trzustka",
    "explanation": "Migdałki, grasica i śledziona należą do narządów limfatycznych. Trzustka pełni funkcje związane z trawieniem i gospodarką hormonalną."
  },
  {
    "id": "R05_LIM_07",
    "section": "Układ limfatyczny i odporność",
    "type": "scenario",
    "prompt": "Osoba wyzdrowiała po zakażeniu i od tej pory jej organizm sam szybciej zwalcza ten sam drobnoustrój. Jaki rodzaj odporności nabyła?",
    "options": [
      "odporność naturalna czynna",
      "odporność naturalna bierna",
      "odporność sztuczna czynna",
      "odporność sztuczna bierna"
    ],
    "answer": 0,
    "explanation": "Odporność naturalna czynna powstaje po przebyciu choroby lub zakażenia, kiedy organizm sam wytwarza odpowiedź immunologiczną."
  },
  {
    "id": "R05_LIM_08",
    "section": "Układ limfatyczny i odporność",
    "type": "match",
    "prompt": "Połącz komórkę lub narząd z jego zadaniem.",
    "options": null,
    "left": [
      "Makrofag",
      "Limfocyt T",
      "Limfocyt B",
      "Węzeł chłonny"
    ],
    "right": [
      "Wytwarzanie przeciwciał",
      "Filtrowanie limfy",
      "Pochłanianie drobnoustrojów",
      "Rozpoznawanie antygenów i przekazywanie informacji"
    ],
    "image": "r05_przeciwciala_antygen.jpg",
    "answer": {
      "Makrofag": "Pochłanianie drobnoustrojów",
      "Limfocyt T": "Rozpoznawanie antygenów i przekazywanie informacji",
      "Limfocyt B": "Wytwarzanie przeciwciał",
      "Węzeł chłonny": "Filtrowanie limfy"
    },
    "explanation": "Makrofagi mają właściwości żerne, limfocyty T rozpoznają zagrożenia, limfocyty B wytwarzają przeciwciała, a węzły chłonne filtrują limfę."
  },
  {
    "id": "R05_LIM_09",
    "section": "Układ limfatyczny i odporność",
    "type": "sort",
    "prompt": "Podziel mechanizmy obronne na odporność wrodzoną i nabytą.",
    "options": null,
    "items": [
      "Wytwarzanie swoistych przeciwciał",
      "Zdrowa skóra",
      "Pamięć immunologiczna limfocytów B",
      "Kwas solny w żołądku",
      "Rozpoznawanie konkretnych antygenów",
      "Rzęski nabłonka oddechowego"
    ],
    "categories": [
      "odporność wrodzona (nieswoista)",
      "odporność nabyta (swoista)"
    ],
    "answer": {
      "odporność wrodzona (nieswoista)": [
        "Zdrowa skóra",
        "Kwas solny w żołądku",
        "Rzęski nabłonka oddechowego"
      ],
      "odporność nabyta (swoista)": [
        "Rozpoznawanie konkretnych antygenów",
        "Wytwarzanie swoistych przeciwciał",
        "Pamięć immunologiczna limfocytów B"
      ]
    },
    "explanation": "Zdrowa skóra, wydzieliny i rzęski działają nieswoiście, a limfocyty i przeciwciała uczestniczą w odporności swoistej."
  },
  {
    "id": "R05_LIM_10",
    "section": "Układ limfatyczny i odporność",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia odpowiedzi odpornościowej swoistej w logicznej kolejności.",
    "options": null,
    "items": [
      "Wytworzenie przeciwciał przez limfocyty B",
      "Połączenie przeciwciał z czynnikiem chorobotwórczym",
      "Wniknięcie drobnoustroju do organizmu",
      "Rozpoznanie obcego antygenu przez limfocyty T"
    ],
    "answer": [
      "Wniknięcie drobnoustroju do organizmu",
      "Rozpoznanie obcego antygenu przez limfocyty T",
      "Wytworzenie przeciwciał przez limfocyty B",
      "Połączenie przeciwciał z czynnikiem chorobotwórczym"
    ],
    "explanation": "Limfocyty T pomagają rozpoznać zagrożenie, a limfocyty B wytwarzają przeciwciała łączące się z obcym czynnikiem."
  },
  {
    "id": "R05_WYD_01",
    "section": "Układ wydalniczy",
    "type": "single_choice",
    "prompt": "Jak nazywa się podstawowa jednostka strukturalno-funkcjonalna nerki?",
    "options": [
      "moczowód",
      "miedniczka nerkowa",
      "nefron",
      "pęcherz moczowy",
      "kora nerki",
      "cewka moczowa"
    ],
    "image": "r05_nefron_schemat.jpg",
    "answer": 2,
    "explanation": "Nefron składa się z ciałka nerkowego i kanalików nerkowych. W nim powstaje mocz."
  },
  {
    "id": "R05_WYD_02",
    "section": "Układ wydalniczy",
    "type": "multi_select",
    "prompt": "Zaznacz składniki moczu ostatecznego.",
    "options": [
      "woda",
      "mocznik",
      "sole mineralne",
      "glukoza",
      "krwinki czerwone",
      "aminokwasy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Mocz ostateczny zawiera wodę, mocznik i sole mineralne; glukoza i aminokwasy zwykle są odzyskiwane podczas resorpcji."
  },
  {
    "id": "R05_WYD_03",
    "section": "Układ wydalniczy",
    "type": "true_false",
    "prompt": "Wydalanie zbędnych produktów przemiany materii i defekacja oznaczają to samo.",
    "options": null,
    "answer": false,
    "explanation": "Wydalanie usuwa zbędne produkty przemiany materii powstające w komórkach, natomiast defekacja usuwa niestrawione resztki pokarmowe."
  },
  {
    "id": "R05_WYD_04",
    "section": "Układ wydalniczy",
    "type": "fill_in",
    "prompt": "Mocz z nerek do pęcherza moczowego transportują __________.",
    "options": null,
    "altAnswers": [
      [
        "moczowody"
      ]
    ],
    "image": "r05_uklad_moczowy.jpg",
    "answer": [
      "moczowody"
    ],
    "explanation": "Moczowody są parzystymi przewodami, którymi mocz przepływa z miedniczek nerkowych do pęcherza."
  },
  {
    "id": "R05_WYD_05",
    "section": "Układ wydalniczy",
    "type": "riddle",
    "prompt": "Jak nazywa się torebka otaczająca kłębuszek nerkowy?",
    "options": null,
    "altAnswers": [
      "torebka Bowmana",
      "torebka kłębuszka",
      "torebka kłębuszka nerkowego"
    ],
    "image": "r05_nefron_schemat.jpg",
    "answer": "torebka Bowmana",
    "explanation": "Torebka Bowmana, czyli torebka kłębuszka, jest częścią ciałka nerkowego; trafia do niej mocz pierwotny."
  },
  {
    "id": "R05_WYD_06",
    "section": "Układ wydalniczy",
    "type": "odd_one_out",
    "prompt": "Wskaż narząd, który nie należy do układu wydalniczego: nerka, moczowód, pęcherz moczowy, tchawica.",
    "options": null,
    "image": "r05_uklad_moczowy.jpg",
    "answer": "tchawica",
    "explanation": "Tchawica należy do układu oddechowego. Pozostałe elementy należą do układu wydalniczego."
  },
  {
    "id": "R05_WYD_07",
    "section": "Układ wydalniczy",
    "type": "scenario",
    "prompt": "W kanalikach nerkowych z moczu pierwotnego do organizmu wracają glukoza, sole mineralne i część wody. Jaki proces zachodzi?",
    "options": [
      "filtracja",
      "resorpcja",
      "sekrecja",
      "defekacja"
    ],
    "image": "r05_nefron_schemat.jpg",
    "answer": 1,
    "explanation": "Resorpcja to ponowne wchłanianie substancji potrzebnych organizmowi z moczu pierwotnego."
  },
  {
    "id": "R05_WYD_08",
    "section": "Układ wydalniczy",
    "type": "match",
    "prompt": "Połącz element układu wydalniczego z jego rolą.",
    "options": null,
    "left": [
      "Ciałko nerkowe",
      "Moczowód",
      "Pęcherz moczowy",
      "Cewka moczowa"
    ],
    "right": [
      "Usuwanie moczu na zewnątrz ciała",
      "Transport moczu do pęcherza",
      "Filtracja krwi i powstawanie moczu pierwotnego",
      "Czasowe magazynowanie moczu"
    ],
    "answer": {
      "Ciałko nerkowe": "Filtracja krwi i powstawanie moczu pierwotnego",
      "Moczowód": "Transport moczu do pęcherza",
      "Pęcherz moczowy": "Czasowe magazynowanie moczu",
      "Cewka moczowa": "Usuwanie moczu na zewnątrz ciała"
    },
    "explanation": "Ciałko nerkowe filtruje krew, a kolejne odcinki dróg moczowych transportują, gromadzą i wyprowadzają mocz."
  },
  {
    "id": "R05_WYD_09",
    "section": "Układ wydalniczy",
    "type": "sort",
    "prompt": "Dopasuj proces do miejsca w układzie wydalniczym.",
    "options": null,
    "items": [
      "Wyprowadzanie moczu poza ciało",
      "Odzyskiwanie glukozy",
      "Filtracja krwi",
      "Przepływ moczu do pęcherza",
      "Ponowne wchłanianie wody",
      "Powstawanie moczu pierwotnego"
    ],
    "categories": [
      "ciałko nerkowe",
      "kanaliki nerkowe",
      "drogi moczowe"
    ],
    "answer": {
      "ciałko nerkowe": [
        "Filtracja krwi",
        "Powstawanie moczu pierwotnego"
      ],
      "kanaliki nerkowe": [
        "Odzyskiwanie glukozy",
        "Ponowne wchłanianie wody"
      ],
      "drogi moczowe": [
        "Przepływ moczu do pęcherza",
        "Wyprowadzanie moczu poza ciało"
      ]
    },
    "explanation": "W ciałku nerkowym zachodzi filtracja, w kanalikach resorpcja, a drogi moczowe służą do przemieszczania i usuwania moczu."
  },
  {
    "id": "R05_WYD_10",
    "section": "Układ wydalniczy",
    "type": "sequence",
    "prompt": "Ułóż drogę moczu od miedniczki nerkowej do wydalenia z organizmu.",
    "options": null,
    "items": [
      "Cewka moczowa",
      "Pęcherz moczowy",
      "Miedniczka nerkowa",
      "Moczowód"
    ],
    "image": "r05_uklad_moczowy.jpg",
    "answer": [
      "Miedniczka nerkowa",
      "Moczowód",
      "Pęcherz moczowy",
      "Cewka moczowa"
    ],
    "explanation": "Mocz spływa z miedniczki nerkowej moczowodem do pęcherza i jest wydalany przez cewkę moczową."
  },
  {
    "id": "R05_NER_01",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "single_choice",
    "prompt": "Które elementy tworzą ośrodkowy układ nerwowy?",
    "options": [
      "mózgowie i rdzeń kręgowy",
      "nerwy czaszkowe i rdzeniowe",
      "receptory skóry i języka",
      "mięśnie i gruczoły",
      "oko i ucho",
      "naczynia limfatyczne i węzły chłonne"
    ],
    "answer": 0,
    "explanation": "Ośrodkowy układ nerwowy obejmuje mózgowie i rdzeń kręgowy."
  },
  {
    "id": "R05_NER_02",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "multi_select",
    "prompt": "Które zadania pełni rdzeń kręgowy?",
    "options": [
      "Przewodzenie impulsów nerwowych między mózgowiem a ciałem",
      "Udział w reakcjach odruchowych",
      "Wytwarzanie tyroksyny",
      "Wydzielanie żółci",
      "Uczestnictwo w sterowaniu ruchami mięśni kończyn i tułowia"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Rdzeń kręgowy przewodzi impulsy między mózgowiem a ciałem, uczestniczy w odruchach i zawiera ośrodki ruchów mięśni kończyn oraz tułowia."
  },
  {
    "id": "R05_NER_03",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "true_false",
    "prompt": "Akson jest zwykle pojedynczą długą wypustką komórki nerwowej.",
    "options": null,
    "image": "r05_neuron_schemat.jpg",
    "answer": true,
    "explanation": "Neuron ma liczne krótkie dendryty oraz zwykle jedną długą wypustkę, czyli akson."
  },
  {
    "id": "R05_NER_04",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "fill_in",
    "prompt": "Miejsce przekazywania informacji między komórkami nerwowymi nazywamy __________.",
    "options": null,
    "altAnswers": [
      [
        "synapsą",
        "synapsa"
      ]
    ],
    "image": "r05_neuron_schemat.jpg",
    "answer": [
      "synapsą"
    ],
    "explanation": "Synapsa to miejsce połączenia funkcjonalnego komórek nerwowych, przez które przekazywany jest sygnał."
  },
  {
    "id": "R05_NER_05",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "riddle",
    "prompt": "Jak nazywają się receptory siatkówki, które umożliwiają rozpoznawanie barw?",
    "options": null,
    "altAnswers": [
      "czopki"
    ],
    "image": "r05_oko_schemat.jpg",
    "answer": "czopki",
    "explanation": "Czopki służą do widzenia barw, a pręciki są szczególnie ważne przy słabym oświetleniu."
  },
  {
    "id": "R05_NER_06",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest kosteczką słuchową: młoteczek, kowadełko, strzemiączko, soczewka.",
    "options": null,
    "image": "r05_ucho_schemat.jpg",
    "answer": "soczewka",
    "explanation": "Młoteczek, kowadełko i strzemiączko to kosteczki ucha środkowego, natomiast soczewka jest częścią oka."
  },
  {
    "id": "R05_NER_07",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "scenario",
    "prompt": "Podczas badania lekarz lekko uderza młoteczkiem pod rzepką, a podudzie odruchowo się prostuje bez świadomej decyzji pacjenta. Jaki to odruch?",
    "options": [
      "warunkowy nabyty",
      "bezwarunkowy wrodzony",
      "wyuczony na skutek treningu",
      "świadomy ruch dowolny"
    ],
    "answer": 1,
    "explanation": "Odruch kolanowy jest przykładem odruchu wrodzonego, czyli bezwarunkowego."
  },
  {
    "id": "R05_NER_08",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "match",
    "prompt": "Połącz narząd lub strukturę ze zmysłem, w którym uczestniczy.",
    "options": null,
    "left": [
      "Siatkówka oka",
      "Ślimak w uchu",
      "Kubki smakowe",
      "Receptory skóry"
    ],
    "right": [
      "dotyk",
      "słuch",
      "wzrok",
      "smak"
    ],
    "image": "r05_oko_schemat.jpg",
    "answer": {
      "Siatkówka oka": "wzrok",
      "Ślimak w uchu": "słuch",
      "Kubki smakowe": "smak",
      "Receptory skóry": "dotyk"
    },
    "explanation": "Siatkówka odbiera światło, ślimak drgania dźwiękowe, kubki smakowe substancje smakowe, a receptory skóry m.in. bodźce dotykowe."
  },
  {
    "id": "R05_NER_09",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do części układu nerwowego.",
    "options": null,
    "items": [
      "Nerwy rdzeniowe",
      "Mózgowie",
      "Nerwy czaszkowe",
      "Rdzeń kręgowy"
    ],
    "categories": [
      "ośrodkowy układ nerwowy",
      "obwodowy układ nerwowy"
    ],
    "answer": {
      "ośrodkowy układ nerwowy": [
        "Mózgowie",
        "Rdzeń kręgowy"
      ],
      "obwodowy układ nerwowy": [
        "Nerwy czaszkowe",
        "Nerwy rdzeniowe"
      ]
    },
    "explanation": "Układ ośrodkowy tworzą mózgowie i rdzeń kręgowy, natomiast obwodowy to nerwy poza tymi ośrodkami."
  },
  {
    "id": "R05_NER_10",
    "section": "Układ nerwowy i narządy zmysłów",
    "type": "sequence",
    "prompt": "Ułóż struktury na drodze dźwięku od ucha zewnętrznego do odbioru drgań w uchu wewnętrznym.",
    "options": null,
    "items": [
      "Kosteczki słuchowe",
      "Małżowina uszna",
      "Ślimak",
      "Błona bębenkowa"
    ],
    "image": "r05_ucho_schemat.jpg",
    "answer": [
      "Małżowina uszna",
      "Błona bębenkowa",
      "Kosteczki słuchowe",
      "Ślimak"
    ],
    "explanation": "Małżowina wychwytuje fale, błona bębenkowa drga, kosteczki przenoszą drgania, a ślimak uczestniczy w ich odbiorze."
  },
  {
    "id": "R05_HOR_01",
    "section": "Układ hormonalny i skóra",
    "type": "single_choice",
    "prompt": "Który hormon produkowany przez trzustkę obniża stężenie glukozy we krwi?",
    "options": [
      "glukagon",
      "adrenalina",
      "tyroksyna",
      "insulina",
      "kortyzol",
      "progesteron"
    ],
    "image": "r05_gruczoly_dokrewne.jpg",
    "answer": 3,
    "explanation": "Insulina przyspiesza transport glukozy do komórek i sprzyja jej magazynowaniu, co obniża poziom cukru we krwi."
  },
  {
    "id": "R05_HOR_02",
    "section": "Układ hormonalny i skóra",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje skóry.",
    "options": [
      "Ochrona przed uszkodzeniami i drobnoustrojami",
      "Regulacja temperatury ciała",
      "Odbiór bodźców dotykowych",
      "Udział w powstawaniu witaminy D",
      "Produkcja moczu pierwotnego",
      "Wytwarzanie czerwonych krwinek"
    ],
    "image": "r05_przekroj_skory.jpg",
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skóra chroni organizm, uczestniczy w termoregulacji, odbiera bodźce i wytwarza witaminę D pod wpływem promieniowania słonecznego."
  },
  {
    "id": "R05_HOR_03",
    "section": "Układ hormonalny i skóra",
    "type": "true_false",
    "prompt": "W naskórku znajdują się naczynia krwionośne odpowiedzialne za regulację temperatury ciała.",
    "options": null,
    "image": "r05_przekroj_skory.jpg",
    "answer": false,
    "explanation": "Naskórek nie ma naczyń krwionośnych. Naczynia uczestniczące w termoregulacji znajdują się w skórze właściwej."
  },
  {
    "id": "R05_HOR_04",
    "section": "Układ hormonalny i skóra",
    "type": "fill_in",
    "prompt": "Barwnik skóry chroniący jej głębsze warstwy przed promieniowaniem UV to __________.",
    "options": null,
    "altAnswers": [
      [
        "melanina"
      ]
    ],
    "image": "r05_przekroj_skory.jpg",
    "answer": [
      "melanina"
    ],
    "explanation": "Melanina to barwnik produkowany przez melanocyty; pochłania promieniowanie UV."
  },
  {
    "id": "R05_HOR_05",
    "section": "Układ hormonalny i skóra",
    "type": "riddle",
    "prompt": "Jak nazywa się gruczoł wydzielający tyroksynę, której działanie wpływa na metabolizm i rozwój organizmu?",
    "options": null,
    "altAnswers": [
      "tarczyca"
    ],
    "image": "r05_gruczoly_dokrewne.jpg",
    "answer": "tarczyca",
    "explanation": "Tarczyca produkuje hormony, w tym tyroksynę, regulujące metabolizm oraz wzrost i rozwój."
  },
  {
    "id": "R05_HOR_06",
    "section": "Układ hormonalny i skóra",
    "type": "odd_one_out",
    "prompt": "Wskaż gruczoł, który wydziela substancję na powierzchnię skóry zamiast hormonu do krwi: przysadka mózgowa, tarczyca, nadnercza, gruczoł potowy.",
    "options": null,
    "answer": "gruczoł potowy",
    "explanation": "Gruczoł potowy wyprowadza pot na powierzchnię skóry. Pozostałe wymienione gruczoły należą do układu dokrewnego."
  },
  {
    "id": "R05_HOR_07",
    "section": "Układ hormonalny i skóra",
    "type": "scenario",
    "prompt": "Podczas nagłego przestrachu człowiekowi przyspiesza akcja serca i wzrasta ciśnienie krwi. Który hormon odpowiada za taką reakcję?",
    "options": [
      "melatonina",
      "insulina",
      "adrenalina",
      "progesteron",
      "tyroksyna"
    ],
    "answer": 2,
    "explanation": "Adrenalina jest hormonem walki lub ucieczki; przyspiesza bicie serca i podnosi ciśnienie krwi."
  },
  {
    "id": "R05_HOR_08",
    "section": "Układ hormonalny i skóra",
    "type": "match",
    "prompt": "Połącz gruczoł dokrewny z wydzielanym przez niego hormonem.",
    "options": null,
    "left": [
      "Trzustka",
      "Tarczyca",
      "Nadnercza",
      "Przysadka mózgowa"
    ],
    "right": [
      "adrenalina",
      "hormon wzrostu",
      "tyroksyna",
      "insulina"
    ],
    "image": "r05_gruczoly_dokrewne.jpg",
    "answer": {
      "Trzustka": "insulina",
      "Tarczyca": "tyroksyna",
      "Nadnercza": "adrenalina",
      "Przysadka mózgowa": "hormon wzrostu"
    },
    "explanation": "Trzustka wydziela m.in. insulinę, tarczyca tyroksynę, nadnercza adrenalinę, a przysadka mózgowa hormon wzrostu."
  },
  {
    "id": "R05_HOR_09",
    "section": "Układ hormonalny i skóra",
    "type": "sort",
    "prompt": "Przyporządkuj struktury do warstw skóry.",
    "options": null,
    "items": [
      "Receptory dotyku",
      "Komórki tłuszczowe",
      "Melanocyty",
      "Gruczoły potowe",
      "Magazyn tkanki tłuszczowej",
      "Zrogowaciałe komórki"
    ],
    "categories": [
      "naskórek",
      "skóra właściwa",
      "tkanka podskórna"
    ],
    "image": "r05_przekroj_skory.jpg",
    "answer": {
      "naskórek": [
        "Zrogowaciałe komórki",
        "Melanocyty"
      ],
      "skóra właściwa": [
        "Gruczoły potowe",
        "Receptory dotyku"
      ],
      "tkanka podskórna": [
        "Komórki tłuszczowe",
        "Magazyn tkanki tłuszczowej"
      ]
    },
    "explanation": "Naskórek zawiera warstwę rogową i melanocyty; skóra właściwa gruczoły oraz receptory; w tkance podskórnej jest tkanka tłuszczowa."
  },
  {
    "id": "R05_HOR_10",
    "section": "Układ hormonalny i skóra",
    "type": "sequence",
    "prompt": "Ułóż kolejne zdarzenia obniżające poziom glukozy we krwi po posiłku.",
    "options": null,
    "items": [
      "Obniżenie poziomu glukozy we krwi",
      "Pobieranie glukozy przez komórki i magazynowanie w wątrobie",
      "Wzrost poziomu glukozy we krwi",
      "Wydzielanie insuliny przez trzustkę"
    ],
    "answer": [
      "Wzrost poziomu glukozy we krwi",
      "Wydzielanie insuliny przez trzustkę",
      "Pobieranie glukozy przez komórki i magazynowanie w wątrobie",
      "Obniżenie poziomu glukozy we krwi"
    ],
    "explanation": "Insulina wydzielana przy wyższym poziomie glukozy ułatwia jej wykorzystanie i odkładanie w postaci glikogenu."
  },
  {
    "id": "R05_ROZ_01",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "single_choice",
    "prompt": "W którym narządzie zwykle dochodzi do zapłodnienia komórki jajowej u człowieka?",
    "options": [
      "jajnik",
      "macica",
      "jajowód",
      "pochwa",
      "szyjka macicy"
    ],
    "image": "r05_gamety_ludzkie.jpg",
    "answer": 2,
    "explanation": "Zapłodnienie jest wewnętrzne i zachodzi w jajowodzie."
  },
  {
    "id": "R05_ROZ_02",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz wewnętrzne narządy żeńskiego układu rozrodczego.",
    "options": [
      "jajniki",
      "jajowody",
      "macica",
      "pochwa",
      "moszna",
      "prostata"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Jajniki, jajowody, macica i pochwa należą do wewnętrznych narządów żeńskiego układu rozrodczego."
  },
  {
    "id": "R05_ROZ_03",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "true_false",
    "prompt": "Łożysko umożliwia wymianę substancji między matką a płodem, lecz ich krew nie miesza się.",
    "options": null,
    "image": "r05_lozysko_schemat.jpg",
    "answer": true,
    "explanation": "Łożysko pośredniczy w wymianie m.in. tlenu i substancji odżywczych; krew matki i dziecka nie miesza się."
  },
  {
    "id": "R05_ROZ_04",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "fill_in",
    "prompt": "Komórka powstała z połączenia plemnika i komórki jajowej to __________.",
    "options": null,
    "altAnswers": [
      [
        "zygota"
      ]
    ],
    "image": "r05_gamety_ludzkie.jpg",
    "answer": [
      "zygota"
    ],
    "explanation": "Po zapłodnieniu powstaje zygota, która następnie ulega podziałom i daje początek zarodkowi."
  },
  {
    "id": "R05_ROZ_05",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "riddle",
    "prompt": "Jaki hormon wydzielany przez ciałko żółte przygotowuje błonę śluzową macicy na zagnieżdżenie zarodka?",
    "options": null,
    "altAnswers": [
      "progesteron"
    ],
    "answer": "progesteron",
    "explanation": "Ciałko żółte w jajniku produkuje progesteron, który pomaga utrzymać błonę śluzową macicy."
  },
  {
    "id": "R05_ROZ_06",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż narząd niebędący częścią żeńskiego układu rozrodczego: jajnik, jajowód, macica, najądrze.",
    "options": null,
    "answer": "najądrze",
    "explanation": "Najądrze należy do męskiego układu rozrodczego, a pozostałe narządy do żeńskiego."
  },
  {
    "id": "R05_ROZ_07",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "scenario",
    "prompt": "Po cyklu bez zapłodnienia złuszcza się błona śluzowa macicy i występuje krwawienie. Jak nazywa się to zjawisko?",
    "options": [
      "owulacja",
      "miesiączka",
      "implantacja",
      "zapłodnienie"
    ],
    "answer": 1,
    "explanation": "Miesiączka (menstruacja) wiąże się ze złuszczaniem błony śluzowej macicy, gdy nie dojdzie do zapłodnienia."
  },
  {
    "id": "R05_ROZ_08",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "match",
    "prompt": "Połącz narząd układu rozrodczego z jego podstawową funkcją.",
    "options": null,
    "left": [
      "Jądra",
      "Najądrza",
      "Jajniki",
      "Macica"
    ],
    "right": [
      "Miejsce rozwoju zarodka i płodu",
      "Dojrzewanie i odżywianie plemników",
      "Wytwarzanie plemników",
      "Wytwarzanie komórek jajowych"
    ],
    "answer": {
      "Jądra": "Wytwarzanie plemników",
      "Najądrza": "Dojrzewanie i odżywianie plemników",
      "Jajniki": "Wytwarzanie komórek jajowych",
      "Macica": "Miejsce rozwoju zarodka i płodu"
    },
    "explanation": "Jądra wytwarzają plemniki, najądrza są miejscem ich dojrzewania, jajniki produkują komórki jajowe, a w macicy rozwija się dziecko."
  },
  {
    "id": "R05_ROZ_09",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "sort",
    "prompt": "Podziel etapy rozwoju człowieka według tego, czy zachodzą przed urodzeniem czy po nim.",
    "options": null,
    "items": [
      "Dojrzewanie",
      "Rozwój płodowy",
      "Dorosłość",
      "Rozwój zarodkowy",
      "Niemowlęctwo"
    ],
    "categories": [
      "okres prenatalny",
      "okres postnatalny"
    ],
    "answer": {
      "okres prenatalny": [
        "Rozwój zarodkowy",
        "Rozwój płodowy"
      ],
      "okres postnatalny": [
        "Niemowlęctwo",
        "Dojrzewanie",
        "Dorosłość"
      ]
    },
    "explanation": "Okres prenatalny obejmuje rozwój przed urodzeniem, a postnatalny wszystkie etapy po narodzinach."
  },
  {
    "id": "R05_ROZ_10",
    "section": "Rozmnażanie i rozwój człowieka",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia wczesnego rozwoju człowieka we właściwej kolejności.",
    "options": null,
    "items": [
      "Początek tworzenia łożyska",
      "Zapłodnienie w jajowodzie",
      "Okres płodowy",
      "Zagnieżdżenie zarodka w macicy",
      "Pierwsze podziały zygoty"
    ],
    "image": "r05_lozysko_schemat.jpg",
    "answer": [
      "Zapłodnienie w jajowodzie",
      "Pierwsze podziały zygoty",
      "Zagnieżdżenie zarodka w macicy",
      "Początek tworzenia łożyska",
      "Okres płodowy"
    ],
    "explanation": "Po zapłodnieniu zygota dzieli się, zarodek zagnieżdża się w macicy, tworzy się łożysko, a później rozpoczyna się okres płodowy."
  },
  {
    "id": "R05_ZDR_01",
    "section": "Homeostaza i zdrowie",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie homeostazy?",
    "options": [
      "wytwarzanie wszystkich hormonów w organizmie",
      "utrzymywanie równowagi wewnętrznej organizmu",
      "całkowity brak drobnoustrojów na skórze",
      "jedynie zdolność do zapamiętywania bodźców",
      "wyłącznie regulacja pracy mięśni"
    ],
    "answer": 1,
    "explanation": "Homeostaza to zdolność organizmu do utrzymywania równowagi wewnętrznej mimo zmian warunków."
  },
  {
    "id": "R05_ZDR_02",
    "section": "Homeostaza i zdrowie",
    "type": "multi_select",
    "prompt": "Które parametry organizmu są regulowane przez mechanizmy homeostazy?",
    "options": [
      "temperatura ciała",
      "ciśnienie krwi",
      "skład chemiczny tkanek",
      "kolor tęczówki oka",
      "liczba kości szkieletu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do regulowanych parametrów należą temperatura ciała, ciśnienie krwi i skład chemiczny tkanek."
  },
  {
    "id": "R05_ZDR_03",
    "section": "Homeostaza i zdrowie",
    "type": "true_false",
    "prompt": "Gdy temperatura ciała rośnie, ośrodek termoregulacji wywołuje zwężenie skórnych naczyń krwionośnych.",
    "options": null,
    "image": "r05_termoregulacja.jpg",
    "answer": false,
    "explanation": "Wzrost temperatury prowadzi do rozszerzenia naczyń i pocenia się. Zwężenie naczyń występuje przy ochłodzeniu."
  },
  {
    "id": "R05_ZDR_04",
    "section": "Homeostaza i zdrowie",
    "type": "fill_in",
    "prompt": "Ośrodek termoregulacji jest położony w __________.",
    "options": null,
    "altAnswers": [
      [
        "podwzgórzu",
        "podwzgórze"
      ]
    ],
    "image": "r05_termoregulacja.jpg",
    "answer": [
      "podwzgórzu"
    ],
    "explanation": "Ośrodek termoregulacji organizmu znajduje się w podwzgórzu."
  },
  {
    "id": "R05_ZDR_05",
    "section": "Homeostaza i zdrowie",
    "type": "riddle",
    "prompt": "Jak nazywa się badanie profilaktyczne służące do oceny komórek szyjki macicy?",
    "options": null,
    "altAnswers": [
      "cytologia",
      "badanie cytologiczne"
    ],
    "answer": "cytologia",
    "explanation": "Cytologia pozwala wykrywać zmiany w komórkach szyjki macicy i jest opisana jako element profilaktyki."
  },
  {
    "id": "R05_ZDR_06",
    "section": "Homeostaza i zdrowie",
    "type": "odd_one_out",
    "prompt": "Wskaż określenie, które nie jest jednym z trzech wymiarów zdrowia: zdrowie fizyczne, zdrowie psychiczne, zdrowie społeczne, zdrowie wydalnicze.",
    "options": null,
    "answer": "zdrowie wydalnicze",
    "explanation": "Zdrowie obejmuje trzy wymiary: fizyczny, psychiczny i społeczny."
  },
  {
    "id": "R05_ZDR_07",
    "section": "Homeostaza i zdrowie",
    "type": "scenario",
    "prompt": "Podczas upału organizm zwiększa wydzielanie potu i rozszerza naczynia krwionośne skóry. Jaki jest główny cel tych reakcji?",
    "options": [
      "zwiększenie oddawania nadmiaru ciepła",
      "podwyższenie poziomu glukozy we krwi",
      "spowolnienie oddychania",
      "zatrzymanie wszystkich płynów w organizmie"
    ],
    "image": "r05_termoregulacja.jpg",
    "answer": 0,
    "explanation": "Pocenie się i rozszerzenie naczyń skórnych zwiększają oddawanie ciepła, pomagając obniżyć temperaturę."
  },
  {
    "id": "R05_ZDR_08",
    "section": "Homeostaza i zdrowie",
    "type": "match",
    "prompt": "Połącz drogę zakażenia z przykładową sytuacją.",
    "options": null,
    "left": [
      "droga kropelkowa",
      "droga pokarmowa",
      "droga płciowa",
      "poprzez krew"
    ],
    "right": [
      "Kontakt z zakażoną krwią",
      "Zjedzenie skażonych owoców",
      "Wdychanie kropelek wydzieliny po kichnięciu",
      "Kontakt seksualny z osobą zakażoną"
    ],
    "answer": {
      "droga kropelkowa": "Wdychanie kropelek wydzieliny po kichnięciu",
      "droga pokarmowa": "Zjedzenie skażonych owoców",
      "droga płciowa": "Kontakt seksualny z osobą zakażoną",
      "poprzez krew": "Kontakt z zakażoną krwią"
    },
    "explanation": "Wyróżnia się m.in. drogę zakażenia kropelkową, pokarmową, płciową i przez krew."
  },
  {
    "id": "R05_ZDR_09",
    "section": "Homeostaza i zdrowie",
    "type": "sort",
    "prompt": "Przyporządkuj działania profilaktyczne do głównego celu.",
    "options": null,
    "items": [
      "Badania prostaty",
      "Mycie warzyw i owoców",
      "Badanie cytologiczne",
      "Szczepienia ochronne",
      "Regularne badania piersi",
      "Unikanie kontaktów z chorymi"
    ],
    "categories": [
      "ograniczanie zakażeń",
      "wczesne wykrywanie nowotworów"
    ],
    "answer": {
      "ograniczanie zakażeń": [
        "Szczepienia ochronne",
        "Mycie warzyw i owoców",
        "Unikanie kontaktów z chorymi"
      ],
      "wczesne wykrywanie nowotworów": [
        "Badanie cytologiczne",
        "Regularne badania piersi",
        "Badania prostaty"
      ]
    },
    "explanation": "Szczepienia i higiena pomagają ograniczać zakażenia; badania narządów mogą umożliwić wcześniejsze wykrycie nowotworu."
  },
  {
    "id": "R05_ZDR_10",
    "section": "Homeostaza i zdrowie",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia reakcji na spadek temperatury ciała.",
    "options": null,
    "items": [
      "Przywracanie temperatury ciała do normy",
      "Zwężenie naczyń skóry i drżenie mięśni",
      "Spadek temperatury ciała",
      "Pobudzenie ośrodka termoregulacji w podwzgórzu"
    ],
    "image": "r05_termoregulacja.jpg",
    "answer": [
      "Spadek temperatury ciała",
      "Pobudzenie ośrodka termoregulacji w podwzgórzu",
      "Zwężenie naczyń skóry i drżenie mięśni",
      "Przywracanie temperatury ciała do normy"
    ],
    "explanation": "Przy ochłodzeniu skórne naczynia zwężają się, a mięśnie zaczynają drżeć, co ogranicza utratę ciepła i wspiera jego produkcję."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż wszystkie sposoby uzyskania odporności czynnej.",
    "options": [
      "Przebycie choroby zakaźnej",
      "Otrzymanie przeciwciał z mlekiem matki",
      "Przyjęcie szczepionki",
      "Podanie surowicy z gotowymi przeciwciałami",
      "Otrzymanie gotowych przeciwciał od innego organizmu"
    ],
    "answer": [
      0,
      2
    ],
    "explanation": "Odporność czynna powstaje po chorobie lub zakażeniu, albo po szczepieniu, ponieważ organizm sam uruchamia odpowiedź obronną."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sposób nabycia odporności z jego nazwą.",
    "options": null,
    "left": [
      "Przebycie zakażenia",
      "Przeciwciała z mleka matki",
      "Szczepienie",
      "Podanie surowicy"
    ],
    "right": [
      "sztuczna bierna",
      "naturalna czynna",
      "sztuczna czynna",
      "naturalna bierna"
    ],
    "answer": {
      "Przebycie zakażenia": "naturalna czynna",
      "Przeciwciała z mleka matki": "naturalna bierna",
      "Szczepienie": "sztuczna czynna",
      "Podanie surowicy": "sztuczna bierna"
    },
    "explanation": "Podział odporności nabytej uwzględnia pochodzenie bodźca (naturalne lub sztuczne) i to, czy organizm sam wytwarza przeciwciała (czynna czy bierna)."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Lekarze dobierają dawcę przeszczepu nerki. Antygeny na komórkach dawcy i biorcy znacznie się różnią. Jaka reakcja może grozić biorcy?",
    "options": [
      "powstanie dodatkowej nerki",
      "automatyczne zahamowanie odporności",
      "odrzucenie przeszczepu",
      "zwiększenie produkcji melaniny"
    ],
    "image": "r05_narzady_limfatyczne.jpg",
    "answer": 2,
    "explanation": "Przy niedostatecznej zgodności tkankowej układ odpornościowy może uznać przeszczep za obcy i go odrzucić."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj elementy nefronu do ciałka nerkowego lub drogi dalszego przepływu przesączu.",
    "options": null,
    "items": [
      "Cewka zbiorcza",
      "Torebka Bowmana",
      "Kanalik nerkowy",
      "Kłębuszek nerkowy"
    ],
    "categories": [
      "ciałko nerkowe",
      "dalsza droga przesączu"
    ],
    "image": "r05_nefron_schemat.jpg",
    "answer": {
      "ciałko nerkowe": [
        "Kłębuszek nerkowy",
        "Torebka Bowmana"
      ],
      "dalsza droga przesączu": [
        "Kanalik nerkowy",
        "Cewka zbiorcza"
      ]
    },
    "explanation": "Kłębuszek z torebką Bowmana tworzą ciałko nerkowe. Przesącz przechodzi dalej przez kanalik nerkowy do cewki zbiorczej."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile nefronów znajduje się w przybliżeniu w jednej nerce?",
    "options": [
      "około stu",
      "około tysiąca",
      "około stu tysięcy",
      "około miliona",
      "około stu milionów"
    ],
    "image": "r05_nefron_schemat.jpg",
    "answer": 3,
    "explanation": "Nerka ma około miliona nefronów."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Ile par nerwów rdzeniowych występuje u człowieka?",
    "options": null,
    "altAnswers": [
      "31",
      "31 par",
      "trzydzieści jeden"
    ],
    "answer": "31",
    "explanation": "U człowieka występuje 12 par nerwów czaszkowych i 31 par nerwów rdzeniowych."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W rdzeniu kręgowym istota __________ leży wewnątrz, a istota __________ na zewnątrz.",
    "options": null,
    "altAnswers": [
      [
        "szara"
      ],
      [
        "biała"
      ]
    ],
    "answer": [
      "szara",
      "biała"
    ],
    "explanation": "W rdzeniu kręgowym istota szara znajduje się wewnątrz i przypomina literę H, natomiast biała jest na zewnątrz."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż elementy łuku odruchowego od odbioru bodźca do wykonania reakcji.",
    "options": null,
    "items": [
      "Efektor",
      "Neuron pośredniczący",
      "Receptor",
      "Neuron ruchowy",
      "Neuron czuciowy"
    ],
    "image": "r05_neuron_schemat.jpg",
    "answer": [
      "Receptor",
      "Neuron czuciowy",
      "Neuron pośredniczący",
      "Neuron ruchowy",
      "Efektor"
    ],
    "explanation": "Receptor odbiera bodziec, impuls biegnie neuronem czuciowym przez ośrodek nerwowy, następnie neuronem ruchowym do efektora."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń wyraźnie widzi przedmioty blisko oczu, lecz odległe napisy są dla niego niewyraźne. Jaką wadę wzroku opisuje taka sytuacja?",
    "options": [
      "krótkowzroczność",
      "dalekowzroczność",
      "ślepota barw",
      "zaćma"
    ],
    "image": "r05_oko_schemat.jpg",
    "answer": 0,
    "explanation": "Przy krótkowzroczności przedmioty dalekie są widziane nieostro; obraz powstaje przed siatkówką."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż prawdziwe stwierdzenia o insulinie i glukagonie.",
    "options": [
      "Insulina ułatwia pobieranie glukozy przez komórki.",
      "Glukagon sprzyja uwalnianiu glukozy z wątroby.",
      "Pod wpływem insuliny glukoza może być zamieniana w glikogen.",
      "Glukagon jest wydzielany przez gruczoły potowe.",
      "Insulina jest hormonem podnoszącym poziom glukozy we krwi."
    ],
    "image": "r05_gruczoly_dokrewne.jpg",
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Insulina sprzyja pobieraniu i magazynowaniu glukozy, natomiast glukagon zwiększa dostępność glukozy przez uwalnianie jej z zapasów w wątrobie."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz gruczoły z hormonami. Zwróć uwagę na podobne funkcje niektórych z nich.",
    "options": null,
    "left": [
      "Przysadka mózgowa",
      "Nadnercza",
      "Trzustka",
      "Jajniki"
    ],
    "right": [
      "glukagon",
      "estrogeny",
      "kortyzol",
      "hormon wzrostu"
    ],
    "image": "r05_gruczoly_dokrewne.jpg",
    "answer": {
      "Przysadka mózgowa": "hormon wzrostu",
      "Nadnercza": "kortyzol",
      "Trzustka": "glukagon",
      "Jajniki": "estrogeny"
    },
    "explanation": "Przysadka wydziela m.in. hormon wzrostu, nadnercza kortyzol, trzustka glukagon, a jajniki estrogeny."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Zagnieżdżenie zarodka w ścianie macicy rozpoczyna się około siódmego dnia od zapłodnienia.",
    "options": null,
    "image": "r05_lozysko_schemat.jpg",
    "answer": true,
    "explanation": "Zagnieżdżenie zarodka rozpoczyna się około siódmego dnia po zapłodnieniu, a rozwój łożyska zaczyna się później."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po owulacji z pozostałości pęcherzyka jajnikowego powstaje __________, które wydziela progesteron.",
    "options": null,
    "altAnswers": [
      [
        "ciałko żółte"
      ]
    ],
    "answer": [
      "ciałko żółte"
    ],
    "explanation": "Ciałko żółte powstaje z pęcherzyka po uwolnieniu komórki jajowej i wytwarza progesteron przygotowujący błonę śluzową macicy."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę, która nie wchodzi w skład ciałka nerkowego: kłębuszek nerkowy, torebka Bowmana, naczynia włosowate kłębuszka, kanalik nerkowy.",
    "options": null,
    "image": "r05_nefron_schemat.jpg",
    "answer": "kanalik nerkowy",
    "explanation": "Ciałko nerkowe tworzą kłębuszek naczyń włosowatych i torebka Bowmana. Kanalik nerkowy jest kolejnym odcinkiem nefronu."
  }
];

const KID_PROMPTS = {
  "R05_LIM_01": "Co płynie w naczyniach limfatycznych?",
  "R05_LIM_02": "Co robi układ limfatyczny? Wybierz wszystkie dobre odpowiedzi.",
  "R05_WYD_01": "Jak nazywa się najmniejsza część nerki, która tworzy mocz?",
  "R05_WYD_07": "Jak nazywa się odzyskiwanie wody i glukozy w nerce?",
  "R05_NER_01": "Co należy do ośrodkowego układu nerwowego?",
  "R05_NER_05": "Które komórki oka pomagają widzieć kolory?",
  "R05_HOR_01": "Jaki hormon trzustki obniża cukier we krwi?",
  "R05_HOR_03": "Czy naskórek ma naczynia krwionośne?",
  "R05_ROZ_01": "Gdzie plemnik łączy się z komórką jajową?",
  "R05_ROZ_04": "Jak nazywa się pierwsza komórka nowego człowieka po zapłodnieniu?",
  "R05_ZDR_01": "Jak nazywa się utrzymywanie równowagi wewnątrz ciała?",
  "R05_ZDR_07": "Dlaczego w upale pocimy się i rozszerzają się naczynia skóry?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Organizm człowieka – część 2",
  icon: "🧬",
  sectionOrder: [
    "Układ limfatyczny i odporność",
    "Układ wydalniczy",
    "Układ nerwowy i narządy zmysłów",
    "Układ hormonalny i skóra",
    "Rozmnażanie i rozwój człowieka",
    "Homeostaza i zdrowie"
  ],
  sectionIcons: {
    "Układ limfatyczny i odporność": "🛡️",
    "Układ wydalniczy": "💧",
    "Układ nerwowy i narządy zmysłów": "🧠",
    "Układ hormonalny i skóra": "🧪",
    "Rozmnażanie i rozwój człowieka": "👶",
    "Homeostaza i zdrowie": "❤️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
