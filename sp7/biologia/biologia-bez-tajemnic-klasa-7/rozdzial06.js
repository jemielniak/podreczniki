// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WYD  = Wydalanie i substancje wydalane
//   BUD  = Budowa układu moczowego
//   NER  = Nerki i nefron
//   CHO  = Choroby i profilaktyka
//   ANA  = Analiza moczu
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_WYD_01",
    "section": "Wydalanie i substancje wydalane",
    "type": "single_choice",
    "prompt": "Na czym polega wydalanie?",
    "options": [
      "Na usuwaniu zbędnych i szkodliwych produktów przemian chemicznych",
      "Na czasowym gromadzeniu moczu w pęcherzu moczowym",
      "Na odprowadzaniu moczu z nerek do pęcherza",
      "Na wyprowadzaniu moczu z pęcherza na zewnątrz",
      "Na filtracji krwi zachodzącej w nefronach",
      "Na utrzymywaniu stałego składu płynów w organizmie"
    ],
    "answer": 0,
    "explanation": "Wydalanie to proces usuwania z organizmu zbędnych i szkodliwych produktów przemian chemicznych zachodzących w organizmie."
  },
  {
    "id": "R06_WYD_02",
    "section": "Wydalanie i substancje wydalane",
    "type": "multi_select",
    "prompt": "Które narządy biorą udział w usuwaniu nadmiaru wody z organizmu?",
    "options": [
      "nerki",
      "skóra",
      "płuca",
      "pęcherz moczowy",
      "moczowody"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r06_narzady_wydalania.jpg",
    "explanation": "Nadmiar wody jest usuwany przez nerki, skórę oraz płuca."
  },
  {
    "id": "R06_WYD_03",
    "section": "Wydalanie i substancje wydalane",
    "type": "match",
    "prompt": "Połącz substancję z narządem lub narządami biorącymi udział w jej usuwaniu.",
    "options": null,
    "left": [
      "dwutlenek węgla",
      "mocznik",
      "woda"
    ],
    "right": [
      "płuca",
      "nerki i skóra",
      "nerki, skóra i płuca"
    ],
    "answer": {
      "dwutlenek węgla": "płuca",
      "mocznik": "nerki i skóra",
      "woda": "nerki, skóra i płuca"
    },
    "image": "r06_narzady_wydalania.jpg",
    "explanation": "Dwutlenek węgla jest usuwany przez płuca, mocznik przez nerki i skórę, a woda przez nerki, skórę i płuca."
  },
  {
    "id": "R06_WYD_04",
    "section": "Wydalanie i substancje wydalane",
    "type": "true_false",
    "prompt": "W procesie wydalania organizm usuwa niestrawione resztki pokarmu.",
    "options": null,
    "answer": false,
    "explanation": "Wydalanie dotyczy zbędnych i szkodliwych produktów przemian chemicznych, a nie niestrawionych resztek pokarmu."
  },
  {
    "id": "R06_WYD_05",
    "section": "Wydalanie i substancje wydalane",
    "type": "fill_in",
    "prompt": "Mocznik jest końcowym produktem przemian __________ w organizmie.",
    "options": null,
    "answer": [
      "białek"
    ],
    "altAnswers": [
      [
        "białek",
        "bialek"
      ]
    ],
    "explanation": "Mocznik jest końcowym produktem przemian białek i jest usuwany wraz z moczem oraz potem."
  },
  {
    "id": "R06_WYD_06",
    "section": "Wydalanie i substancje wydalane",
    "type": "riddle",
    "prompt": "Jest gazem obecnym w wydychanym powietrzu i jest usuwany z organizmu przez płuca. Co to za substancja?",
    "options": null,
    "answer": "dwutlenek węgla",
    "altAnswers": [
      "dwutlenek węgla",
      "CO2",
      "co2"
    ],
    "explanation": "Dwutlenek węgla jest usuwany z organizmu przez płuca."
  },
  {
    "id": "R06_WYD_07",
    "section": "Wydalanie i substancje wydalane",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: woda, mocznik, dwutlenek węgla, niestrawione resztki pokarmu.",
    "options": null,
    "answer": "niestrawione resztki pokarmu",
    "explanation": "Woda, mocznik i dwutlenek węgla są substancjami usuwanymi w procesie wydalania. Niestrawione resztki pokarmu nie należą do produktów wydalania."
  },
  {
    "id": "R06_WYD_08",
    "section": "Wydalanie i substancje wydalane",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do układu moczowego albo do innych narządów uczestniczących w wydalaniu.",
    "options": null,
    "items": [
      "nerki",
      "moczowody",
      "pęcherz moczowy",
      "cewka moczowa",
      "skóra",
      "płuca"
    ],
    "categories": [
      "układ moczowy",
      "inne narządy uczestniczące w wydalaniu"
    ],
    "answer": {
      "układ moczowy": [
        "nerki",
        "moczowody",
        "pęcherz moczowy",
        "cewka moczowa"
      ],
      "inne narządy uczestniczące w wydalaniu": [
        "skóra",
        "płuca"
      ]
    },
    "explanation": "Układ moczowy tworzą nerki i drogi moczowe: moczowody, pęcherz moczowy i cewka moczowa. Skóra i płuca także uczestniczą w wydalaniu, ale nie są elementami układu moczowego."
  },
  {
    "id": "R06_WYD_09",
    "section": "Wydalanie i substancje wydalane",
    "type": "scenario",
    "prompt": "Podczas oddychania pewna substancja powstająca w przemianach organizmu opuszcza ciało w wydychanym powietrzu. Który narząd bierze udział w jej wydalaniu?",
    "options": [
      "płuca",
      "nerki",
      "skóra",
      "pęcherz moczowy",
      "moczowody",
      "cewka moczowa"
    ],
    "answer": 0,
    "image": "r06_narzady_wydalania.jpg",
    "explanation": "Dwutlenek węgla znajdujący się w wydychanym powietrzu jest wydalany przez płuca."
  },
  {
    "id": "R06_WYD_10",
    "section": "Wydalanie i substancje wydalane",
    "type": "multi_select",
    "prompt": "Które substancje mogą być usuwane przez skórę?",
    "options": [
      "woda",
      "mocznik",
      "sole mineralne",
      "dwutlenek węgla",
      "glukoza"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skóra uczestniczy w usuwaniu wody, mocznika wraz z potem oraz soli mineralnych."
  },
  {
    "id": "R06_WYD_11",
    "section": "Wydalanie i substancje wydalane",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej opisuje znaczenie układu moczowego?",
    "options": [
      "Odgrywa najważniejszą rolę w wydalaniu i pomaga utrzymywać stały skład płynów",
      "Służy wyłącznie do czasowego magazynowania moczu",
      "Usuwa wyłącznie dwutlenek węgla",
      "Odpowiada tylko za trawienie białek",
      "Składa się wyłącznie z pęcherza i cewki moczowej",
      "Nie uczestniczy w usuwaniu nadmiaru wody"
    ],
    "answer": 0,
    "explanation": "Układ moczowy odgrywa najważniejszą rolę w procesie wydalania i pomaga utrzymywać stały skład płynów w organizmie."
  },
  {
    "id": "R06_BUD_01",
    "section": "Budowa układu moczowego",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wszystkie podstawowe elementy układu moczowego?",
    "options": [
      "nerki, moczowody, pęcherz moczowy, cewka moczowa",
      "nerki, płuca, pęcherz moczowy, skóra",
      "nerki, moczowody, pęcherz moczowy, skóra",
      "płuca, moczowody, pęcherz moczowy, cewka moczowa",
      "nerki, skóra, pęcherz moczowy, cewka moczowa",
      "nerki, moczowody, płuca, cewka moczowa"
    ],
    "answer": 0,
    "image": "r06_uklad_moczowy.jpg",
    "explanation": "Układ moczowy składa się z parzystych nerek i moczowodów oraz pęcherza moczowego i cewki moczowej."
  },
  {
    "id": "R06_BUD_02",
    "section": "Budowa układu moczowego",
    "type": "sequence",
    "prompt": "Ułóż drogę moczu od miejsca jego powstania do usunięcia na zewnątrz organizmu.",
    "options": null,
    "items": [
      "pęcherz moczowy",
      "cewka moczowa",
      "nerki",
      "moczowody"
    ],
    "answer": [
      "nerki",
      "moczowody",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "explanation": "Mocz powstaje w nerkach, płynie moczowodami do pęcherza moczowego, a następnie jest usuwany przez cewkę moczową."
  },
  {
    "id": "R06_BUD_03",
    "section": "Budowa układu moczowego",
    "type": "match",
    "prompt": "Połącz element układu moczowego z jego funkcją.",
    "options": null,
    "left": [
      "nerki",
      "moczowody",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "right": [
      "filtracja krwi i wytwarzanie moczu",
      "odprowadzanie moczu do pęcherza",
      "gromadzenie moczu",
      "wyprowadzanie moczu na zewnątrz"
    ],
    "answer": {
      "nerki": "filtracja krwi i wytwarzanie moczu",
      "moczowody": "odprowadzanie moczu do pęcherza",
      "pęcherz moczowy": "gromadzenie moczu",
      "cewka moczowa": "wyprowadzanie moczu na zewnątrz"
    },
    "image": "r06_uklad_moczowy.jpg",
    "explanation": "Nerki filtrują krew i wytwarzają mocz, moczowody odprowadzają mocz do pęcherza, pęcherz gromadzi mocz, a cewka wyprowadza go na zewnątrz."
  },
  {
    "id": "R06_BUD_04",
    "section": "Budowa układu moczowego",
    "type": "true_false",
    "prompt": "Moczowody są parzystymi przewodami długości około 30 cm.",
    "options": null,
    "answer": true,
    "explanation": "Moczowody to długie, około 30-centymetrowe, parzyste przewody odchodzące od nerek."
  },
  {
    "id": "R06_BUD_05",
    "section": "Budowa układu moczowego",
    "type": "fill_in",
    "prompt": "Moczowody odprowadzają mocz z __________ do __________.",
    "options": null,
    "answer": [
      "nerek",
      "pęcherza moczowego"
    ],
    "altAnswers": [
      [
        "nerek"
      ],
      [
        "pęcherza moczowego",
        "pecherza moczowego"
      ]
    ],
    "explanation": "Moczowody prowadzą mocz z nerek do pęcherza moczowego."
  },
  {
    "id": "R06_BUD_06",
    "section": "Budowa układu moczowego",
    "type": "riddle",
    "prompt": "Jest mięśniowym workiem o elastycznych ścianach. Gromadzi się w nim mocz. Jaki to narząd?",
    "options": null,
    "answer": "pęcherz moczowy",
    "altAnswers": [
      "pęcherz moczowy",
      "pecherz moczowy",
      "pęcherz"
    ],
    "image": "r06_pecherz_moczowy.jpg",
    "explanation": "Pęcherz moczowy czasowo gromadzi mocz i rozciąga się w miarę wypełniania."
  },
  {
    "id": "R06_BUD_07",
    "section": "Budowa układu moczowego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych elementów układu moczowego: nerka, moczowód, pęcherz moczowy, płuco.",
    "options": null,
    "answer": "płuco",
    "explanation": "Nerka, moczowód i pęcherz moczowy należą do układu moczowego. Płuco uczestniczy w wydalaniu, ale nie jest jego elementem."
  },
  {
    "id": "R06_BUD_08",
    "section": "Budowa układu moczowego",
    "type": "scenario",
    "prompt": "Mocz właśnie opuścił nerkę i ma zostać przetransportowany do pęcherza moczowego. Do którego przewodu trafia?",
    "options": [
      "moczowodu",
      "cewki moczowej",
      "pęcherza moczowego",
      "tętnicy nerkowej",
      "żyły nerkowej",
      "kanalika nerkowego"
    ],
    "answer": 0,
    "explanation": "Moczowody odprowadzają mocz z nerek do pęcherza moczowego."
  },
  {
    "id": "R06_BUD_09",
    "section": "Budowa układu moczowego",
    "type": "multi_select",
    "prompt": "Które elementy tworzą drogi moczowe?",
    "options": [
      "moczowody",
      "pęcherz moczowy",
      "cewka moczowa",
      "nerki",
      "płuca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r06_uklad_moczowy.jpg",
    "explanation": "Do dróg moczowych należą moczowody, pęcherz moczowy i cewka moczowa."
  },
  {
    "id": "R06_BUD_10",
    "section": "Budowa układu moczowego",
    "type": "true_false",
    "prompt": "U kobiet cewka moczowa jest krótsza niż u mężczyzn i służy wyłącznie do usuwania moczu.",
    "options": null,
    "answer": true,
    "explanation": "U kobiet cewka moczowa jest krótsza i służy wyłącznie do usuwania moczu."
  },
  {
    "id": "R06_BUD_11",
    "section": "Budowa układu moczowego",
    "type": "fill_in",
    "prompt": "U mężczyzn cewka moczowa służy do usuwania moczu, a także do wyprowadzania __________.",
    "options": null,
    "answer": [
      "nasienia"
    ],
    "altAnswers": [
      [
        "nasienia"
      ]
    ],
    "explanation": "U mężczyzn cewka moczowa jest dłuższa i służy także do wyprowadzania nasienia."
  },
  {
    "id": "R06_NER_01",
    "section": "Nerki i nefron",
    "type": "single_choice",
    "prompt": "Jaki jest podstawowy element budulcowy i funkcjonalny nerki?",
    "options": [
      "nefron",
      "moczowód",
      "pęcherz moczowy",
      "cewka moczowa",
      "miedniczka nerkowa",
      "kanalik nerkowy"
    ],
    "answer": 0,
    "image": "r06_nefron.jpg",
    "explanation": "Podstawowym elementem budulcowym i funkcjonalnym nerki jest nefron."
  },
  {
    "id": "R06_NER_02",
    "section": "Nerki i nefron",
    "type": "multi_select",
    "prompt": "Z jakich dwóch głównych części składa się nefron?",
    "options": [
      "ciałko nerkowe",
      "kanalik nerkowy",
      "miedniczka nerkowa",
      "moczowód",
      "pęcherz moczowy"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r06_nefron.jpg",
    "explanation": "Każdy nefron składa się z ciałka nerkowego i kanalika nerkowego."
  },
  {
    "id": "R06_NER_03",
    "section": "Nerki i nefron",
    "type": "match",
    "prompt": "Połącz element z jego rolą w nerce.",
    "options": null,
    "left": [
      "ciałko nerkowe",
      "kanalik nerkowy",
      "miedniczka nerkowa"
    ],
    "right": [
      "filtrowanie krwi",
      "zwrot potrzebnych substancji do krwi i usuwanie zbędnych",
      "odprowadzanie moczu do moczowodów"
    ],
    "answer": {
      "ciałko nerkowe": "filtrowanie krwi",
      "kanalik nerkowy": "zwrot potrzebnych substancji do krwi i usuwanie zbędnych",
      "miedniczka nerkowa": "odprowadzanie moczu do moczowodów"
    },
    "image": "r06_nefron.jpg",
    "explanation": "Ciałko nerkowe filtruje krew, kanalik zwraca potrzebne substancje do krwi i usuwa zbędne lub szkodliwe, a miedniczka nerkowa uczestniczy w odprowadzaniu moczu do moczowodów."
  },
  {
    "id": "R06_NER_04",
    "section": "Nerki i nefron",
    "type": "true_false",
    "prompt": "W jednej nerce znajduje się około miliona nefronów.",
    "options": null,
    "answer": true,
    "explanation": "W jednej nerce znajduje się około miliona nefronów."
  },
  {
    "id": "R06_NER_05",
    "section": "Nerki i nefron",
    "type": "fill_in",
    "prompt": "Krew jest doprowadzana do nerki __________, a odprowadzana z nerki __________.",
    "options": null,
    "answer": [
      "tętnicą",
      "żyłą"
    ],
    "altAnswers": [
      [
        "tętnicą",
        "tetnica"
      ],
      [
        "żyłą",
        "zyla"
      ]
    ],
    "explanation": "Do nerki krew wpływa tętnicą, a odpływa żyłą."
  },
  {
    "id": "R06_NER_06",
    "section": "Nerki i nefron",
    "type": "riddle",
    "prompt": "Jest zewnętrzną, jaśniejszą w przekroju częścią nerki. Jak się nazywa?",
    "options": null,
    "answer": "kora nerki",
    "altAnswers": [
      "kora nerki",
      "kora"
    ],
    "image": "r06_przekroj_nerki.jpg",
    "explanation": "Zewnętrzną, jaśniejszą w przekroju częścią nerki jest kora nerki."
  },
  {
    "id": "R06_NER_07",
    "section": "Nerki i nefron",
    "type": "odd_one_out",
    "prompt": "Co nie jest częścią nerki widoczną na jej przekroju: kora nerki, rdzeń nerki, miedniczka nerkowa, pęcherz moczowy.",
    "options": null,
    "answer": "pęcherz moczowy",
    "image": "r06_przekroj_nerki.jpg",
    "explanation": "Kora, rdzeń i miedniczka nerkowa są elementami nerki. Pęcherz moczowy jest osobnym narządem układu moczowego."
  },
  {
    "id": "R06_NER_08",
    "section": "Nerki i nefron",
    "type": "scenario",
    "prompt": "Podczas filtracji krwi w nefronie wyodrębniono substancje potrzebne oraz zbędne i szkodliwe. Co dzieje się z substancjami potrzebnymi?",
    "options": [
      "Wracają do krwi",
      "Są zawsze usuwane z moczem",
      "Są magazynowane w pęcherzu",
      "Przechodzą do płuc",
      "Są usuwane przez cewkę bez udziału nerek",
      "Zamieniają się w mocznik"
    ],
    "answer": 0,
    "explanation": "Najbardziej wartościowe substancje są zatrzymywane i wracają do krwi."
  },
  {
    "id": "R06_NER_09",
    "section": "Nerki i nefron",
    "type": "true_false",
    "prompt": "Prawa nerka leży nieco niżej niż lewa.",
    "options": null,
    "answer": true,
    "image": "r06_nerki_polozenie.jpg",
    "explanation": "Prawa nerka leży nieco niżej niż lewa."
  },
  {
    "id": "R06_NER_10",
    "section": "Nerki i nefron",
    "type": "single_choice",
    "prompt": "Gdzie znajdują się nerki?",
    "options": [
      "Po obu stronach kręgosłupa na tylnej ścianie jamy brzusznej",
      "Tylko po prawej stronie kręgosłupa",
      "Tylko po lewej stronie kręgosłupa",
      "Wewnątrz pęcherza moczowego",
      "Wzdłuż moczowodów poniżej pęcherza",
      "W cewce moczowej poniżej pęcherza"
    ],
    "answer": 0,
    "image": "r06_nerki_polozenie.jpg",
    "explanation": "Nerki leżą po obu stronach kręgosłupa, między jego odcinkiem piersiowym i lędźwiowym, na tylnej ścianie jamy brzusznej."
  },
  {
    "id": "R06_NER_11",
    "section": "Nerki i nefron",
    "type": "multi_select",
    "prompt": "Które stwierdzenia opisują nerki?",
    "options": [
      "Są narządami parzystymi",
      "Kształtem przypominają nasiona fasoli",
      "Są wielkości zaciśniętej dłoni",
      "Gromadzą mocz jak pęcherz",
      "Są przewodami długości około 30 cm"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r06_nerki_polozenie.jpg",
    "explanation": "Nerki są parzystymi narządami kształtem przypominającymi nasiona fasoli i są wielkości zaciśniętej dłoni."
  },
  {
    "id": "R06_CHO_01",
    "section": "Choroby i profilaktyka",
    "type": "single_choice",
    "prompt": "Co jest bezpośrednią przyczyną powstawania kamicy nerkowej?",
    "options": [
      "Nagromadzenie osadów soli mineralnych",
      "Zakażenie dróg moczowych wywołane głównie przez bakterie",
      "Obecność glukozy w moczu",
      "Obecność erytrocytów w moczu",
      "Duży wysiłek fizyczny",
      "Przewlekła infekcja gardła"
    ],
    "answer": 0,
    "image": "r06_kamienie_nerkowe.jpg",
    "explanation": "Kamica nerkowa rozwija się wskutek nagromadzenia w nerkach osadów soli mineralnych tworzących złogi, czyli kamienie moczowe."
  },
  {
    "id": "R06_CHO_02",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Które czynniki sprzyjają tworzeniu się kamieni nerkowych?",
    "options": [
      "przyjmowanie zbyt małej ilości płynów",
      "dieta bogata w produkty z dużą ilością białka i wapnia",
      "nadużywanie soli kuchennej",
      "nadwaga",
      "regularne opróżnianie pęcherza",
      "picie odpowiedniej ilości płynów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r06_kamienie_nerkowe.jpg",
    "explanation": "Ryzyko kamicy zwiększają zbyt mała ilość płynów, dieta bogata w produkty z dużą ilością białka i wapnia, nadużywanie soli kuchennej oraz nadwaga."
  },
  {
    "id": "R06_CHO_03",
    "section": "Choroby i profilaktyka",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "zakażenie dróg moczowych",
      "kamica nerkowa",
      "dializa"
    ],
    "right": [
      "infekcja wywoływana głównie przez bakterie",
      "nagromadzenie złogów z osadów soli mineralnych",
      "zabieg oczyszczania krwi"
    ],
    "answer": {
      "zakażenie dróg moczowych": "infekcja wywoływana głównie przez bakterie",
      "kamica nerkowa": "nagromadzenie złogów z osadów soli mineralnych",
      "dializa": "zabieg oczyszczania krwi"
    },
    "explanation": "Zakażenia dróg moczowych są najczęściej wywoływane przez bakterie, kamica polega na gromadzeniu złogów z soli mineralnych, a dializa oczyszcza krew przy niewłaściwej pracy nerek."
  },
  {
    "id": "R06_CHO_04",
    "section": "Choroby i profilaktyka",
    "type": "true_false",
    "prompt": "Zakażenia dróg moczowych są najczęściej wywoływane przez bakterie, a rzadziej przez wirusy lub grzyby.",
    "options": null,
    "answer": true,
    "image": "r06_bakterie_paleczki.jpg",
    "explanation": "Najczęstszą przyczyną zakażeń dróg moczowych są bakterie; wirusy i grzyby występują rzadziej."
  },
  {
    "id": "R06_CHO_05",
    "section": "Choroby i profilaktyka",
    "type": "fill_in",
    "prompt": "Kobiety częściej chorują na zakażenia dróg moczowych, ponieważ ich cewka moczowa jest znacznie __________ niż u mężczyzn.",
    "options": null,
    "answer": [
      "krótsza"
    ],
    "altAnswers": [
      [
        "krótsza",
        "krotsza"
      ]
    ],
    "explanation": "Krótsza cewka moczowa u kobiet ułatwia bakteriom przemieszczanie się w górę dróg moczowych."
  },
  {
    "id": "R06_CHO_06",
    "section": "Choroby i profilaktyka",
    "type": "riddle",
    "prompt": "Jak nazywa się urządzenie służące do wykonywania dializy?",
    "options": null,
    "answer": "dializator",
    "altAnswers": [
      "dializator"
    ],
    "image": "r06_dializa.jpg",
    "explanation": "Urządzenie do wykonywania dializy to dializator."
  },
  {
    "id": "R06_CHO_07",
    "section": "Choroby i profilaktyka",
    "type": "odd_one_out",
    "prompt": "Co nie jest sposobem zapobiegania zakażeniom dróg moczowych: picie odpowiedniej ilości płynów, regularne opróżnianie pęcherza, codzienna higiena osobista, wstrzymywanie moczu.",
    "options": null,
    "answer": "wstrzymywanie moczu",
    "explanation": "Picie odpowiedniej ilości płynów, regularne opróżnianie pęcherza i codzienna higiena zmniejszają ryzyko zakażenia. Wstrzymywanie moczu nie jest zalecaną profilaktyką."
  },
  {
    "id": "R06_CHO_08",
    "section": "Choroby i profilaktyka",
    "type": "scenario",
    "prompt": "Osoba odczuwa ból i pieczenie podczas oddawania moczu, częste parcie, ucisk w dole brzucha i ma gorączkę. Która choroba najlepiej pasuje do tego opisu?",
    "options": [
      "zakażenie dróg moczowych",
      "kamica nerkowa",
      "niewydolność obu nerek",
      "zapalenie zatok",
      "próchnica zębów",
      "choroba wątroby"
    ],
    "answer": 0,
    "image": "r06_bakterie_paleczki.jpg",
    "explanation": "Ból i pieczenie przy oddawaniu moczu, nagła potrzeba oddania moczu, ucisk w dole brzucha i gorączka należą do częstych objawów zakażenia dróg moczowych."
  },
  {
    "id": "R06_CHO_09",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Które działania pomagają dbać o układ moczowy?",
    "options": [
      "picie odpowiedniej ilości płynów",
      "regularne opróżnianie pęcherza",
      "codzienna higiena i zmiana bielizny",
      "regularne badania moczu",
      "nadużywanie soli",
      "wstrzymywanie moczu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyka obejmuje między innymi picie odpowiedniej ilości płynów, regularne opróżnianie pęcherza, codzienną higienę i zmianę bielizny oraz regularne badania moczu."
  },
  {
    "id": "R06_CHO_10",
    "section": "Choroby i profilaktyka",
    "type": "true_false",
    "prompt": "Jedna sprawna nerka może pracować za dwie.",
    "options": null,
    "answer": true,
    "explanation": "Jedna nerka może przejąć pracę dwóch, natomiast niewydolność obu nerek stanowi zagrożenie dla życia."
  },
  {
    "id": "R06_CHO_11",
    "section": "Choroby i profilaktyka",
    "type": "scenario",
    "prompt": "U pacjenta obie nerki nie funkcjonują właściwie i trzeba oczyszczać jego krew za pomocą specjalnego urządzenia. Jaki zabieg jest wykonywany?",
    "options": [
      "dializa",
      "analiza składu moczu",
      "badanie moczu testem paskowym",
      "regularne badanie moczu",
      "regularne opróżnianie pęcherza",
      "filtracja krwi w nefronie"
    ],
    "answer": 0,
    "image": "r06_dializa.jpg",
    "explanation": "U osób z niewłaściwie funkcjonującymi nerkami wykonuje się dializę, czyli zabieg oczyszczania krwi za pomocą dializatora."
  },
  {
    "id": "R06_ANA_01",
    "section": "Analiza moczu",
    "type": "single_choice",
    "prompt": "Czym jest analiza składu moczu?",
    "options": [
      "Nieinwazyjnym badaniem diagnostycznym",
      "Zabiegiem oczyszczania krwi",
      "Procesem filtracji krwi w nefronie",
      "Czasowym gromadzeniem moczu w pęcherzu",
      "Odprowadzaniem moczu przez moczowody",
      "Wyprowadzaniem moczu przez cewkę moczową"
    ],
    "answer": 0,
    "image": "r06_badanie_moczu.jpg",
    "explanation": "Analiza składu moczu jest jednym z podstawowych nieinwazyjnych badań diagnostycznych i może pomóc wykrywać choroby układu moczowego oraz inne choroby."
  },
  {
    "id": "R06_ANA_02",
    "section": "Analiza moczu",
    "type": "multi_select",
    "prompt": "Które składniki nie powinny znajdować się w moczu zdrowego człowieka?",
    "options": [
      "białko",
      "glukoza",
      "erytrocyty",
      "duża ilość bakterii",
      "mocznik"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W moczu zdrowego człowieka nie powinny występować białko, glukoza, erytrocyty ani duża ilość bakterii."
  },
  {
    "id": "R06_ANA_03",
    "section": "Analiza moczu",
    "type": "match",
    "prompt": "Połącz nieprawidłowy wynik badania moczu z tym, o czym może świadczyć.",
    "options": null,
    "left": [
      "białko w moczu",
      "glukoza w moczu",
      "duża ilość bakterii",
      "erytrocyty w moczu"
    ],
    "right": [
      "choroby nerek lub duży wysiłek fizyczny",
      "stan przedcukrzycowy lub cukrzyca",
      "infekcja bakteryjna lub niewłaściwe pobranie próbki",
      "uszkodzenie nerek"
    ],
    "answer": {
      "białko w moczu": "choroby nerek lub duży wysiłek fizyczny",
      "glukoza w moczu": "stan przedcukrzycowy lub cukrzyca",
      "duża ilość bakterii": "infekcja bakteryjna lub niewłaściwe pobranie próbki",
      "erytrocyty w moczu": "uszkodzenie nerek"
    },
    "image": "r06_badanie_moczu.jpg",
    "explanation": "Białko może wskazywać na choroby nerek lub duży wysiłek, glukoza na stan przedcukrzycowy lub cukrzycę, dużo bakterii na infekcję bakteryjną albo niewłaściwe pobranie próbki, a erytrocyty na uszkodzenie nerek."
  },
  {
    "id": "R06_ANA_04",
    "section": "Analiza moczu",
    "type": "true_false",
    "prompt": "Wartość pH moczu może zmieniać się zależnie od przyjmowanych pokarmów.",
    "options": null,
    "answer": true,
    "explanation": "Odczyn pH moczu może zmieniać się w zależności od przyjmowanych pokarmów."
  },
  {
    "id": "R06_ANA_05",
    "section": "Analiza moczu",
    "type": "fill_in",
    "prompt": "Barwa moczu może zmienić się w przebiegu chorób __________ lub pod wpływem barwników zawartych na przykład w __________.",
    "options": null,
    "answer": [
      "wątroby",
      "burakach"
    ],
    "altAnswers": [
      [
        "wątroby",
        "watroby"
      ],
      [
        "burakach",
        "buraków",
        "burakow"
      ]
    ],
    "explanation": "Barwa moczu może zmieniać się w przebiegu chorób wątroby albo pod wpływem barwników z pokarmów, na przykład buraków."
  },
  {
    "id": "R06_ANA_06",
    "section": "Analiza moczu",
    "type": "riddle",
    "prompt": "Który parametr moczu może zmieniać się zależnie od przyjmowanych pokarmów, a jego nieprawidłowe wartości mogą towarzyszyć zakażeniu dróg moczowych lub kamieniom nerkowym?",
    "options": null,
    "answer": "pH",
    "altAnswers": [
      "pH",
      "ph",
      "odczyn pH"
    ],
    "explanation": "Takim parametrem jest odczyn pH moczu."
  },
  {
    "id": "R06_ANA_07",
    "section": "Analiza moczu",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do prawidłowego wyniku moczu: żółta barwa, przejrzystość, brak glukozy, obecne białko.",
    "options": null,
    "answer": "obecne białko",
    "explanation": "W prawidłowym wyniku mocz jest żółty i przejrzysty, a glukoza i białko nie powinny być obecne."
  },
  {
    "id": "R06_ANA_08",
    "section": "Analiza moczu",
    "type": "scenario",
    "prompt": "Po bardzo dużym wysiłku fizycznym w badaniu moczu wykryto białko. Które wyjaśnienie jest zgodne z możliwymi przyczynami takiego wyniku?",
    "options": [
      "Duży wysiłek fizyczny może być przyczyną obecności białka",
      "Białko oznacza prawidłowy wynik moczu",
      "Białko jest tym samym składnikiem co glukoza",
      "Białko zawsze wynika z barwników zawartych w burakach",
      "Białko dowodzi wyłącznie zakażenia dróg moczowych",
      "Białko zawsze wynika z niewłaściwego pobrania próbki"
    ],
    "answer": 0,
    "image": "r06_badanie_moczu.jpg",
    "explanation": "Obecność białka w moczu może świadczyć o chorobach nerek, ale może też być spowodowana dużym wysiłkiem fizycznym."
  },
  {
    "id": "R06_ANA_09",
    "section": "Analiza moczu",
    "type": "single_choice",
    "prompt": "Po co regularnie wykonywać badanie moczu?",
    "options": [
      "Aby stale kontrolować stan układu moczowego",
      "Aby zwiększać pojemność pęcherza",
      "Aby wydłużać moczowody",
      "Aby zmieniać położenie nerek",
      "Aby zastąpić opróżnianie pęcherza",
      "Aby usuwać dwutlenek węgla"
    ],
    "answer": 0,
    "image": "r06_badanie_moczu.jpg",
    "explanation": "Regularne wykonywanie badania moczu pozwala na stałą kontrolę stanu układu moczowego."
  },
  {
    "id": "R06_ANA_10",
    "section": "Analiza moczu",
    "type": "true_false",
    "prompt": "Spożycie buraków może zmienić barwę moczu.",
    "options": null,
    "answer": true,
    "explanation": "Barwniki zawarte w pokarmach, na przykład w burakach, mogą wpływać na barwę moczu."
  },
  {
    "id": "R06_ANA_11",
    "section": "Analiza moczu",
    "type": "multi_select",
    "prompt": "Które cechy odpowiadają prawidłowemu wynikowi ogólnego badania moczu?",
    "options": [
      "żółta barwa",
      "przejrzystość",
      "brak białka",
      "brak glukozy",
      "brak hemoglobiny",
      "obecność białka"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "W prawidłowym wyniku mocz jest żółty i przejrzysty, a białko, glukoza i hemoglobina są nieobecne."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką przybliżoną długość mają moczowody?",
    "options": [
      "około 30 cm",
      "około 3 cm",
      "około 10 cm",
      "około 50 cm",
      "około 1 m",
      "około 5 mm"
    ],
    "answer": 0,
    "explanation": "Moczowody to parzyste przewody o długości około 30 cm."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest przybliżona pojemność pęcherza moczowego u zdrowej osoby dorosłej?",
    "options": [
      "około 0,5 l",
      "około 0,25 l",
      "około 1,5 l",
      "około 3 l",
      "około 0,05 l",
      "około 2,5 l"
    ],
    "answer": 0,
    "image": "r06_pecherz_moczowy.jpg",
    "explanation": "U zdrowej osoby dorosłej pojemność pęcherza moczowego wynosi około 0,5 l."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Około jaka objętość moczu w pęcherzu powoduje uczucie parcia na mocz?",
    "options": [
      "250 ml",
      "25 ml",
      "50 ml",
      "500 ml",
      "1,5 l",
      "3 l"
    ],
    "answer": 0,
    "image": "r06_pecherz_moczowy.jpg",
    "explanation": "Wypełnienie pęcherza około 250 ml moczu powoduje uczucie parcia na mocz."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Do jakiej wartości może dochodzić maksymalna pojemność pęcherza moczowego u zdrowej osoby dorosłej?",
    "options": [
      "około 1,5 l",
      "około 0,25 l",
      "około 0,5 l",
      "około 3 l",
      "około 0,05 l",
      "około 2,5 l"
    ],
    "answer": 0,
    "image": "r06_pecherz_moczowy.jpg",
    "explanation": "Choć typowa pojemność wynosi około 0,5 l, maksymalnie pęcherz zdrowej osoby dorosłej może pomieścić nawet około 1,5 l."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Nerki są mniej więcej wielkości zaciśniętej dłoni.",
    "options": null,
    "answer": true,
    "image": "r06_nerki_polozenie.jpg",
    "explanation": "Nerki są wielkości zaciśniętej dłoni."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Lewa nerka leży nieco niżej niż prawa.",
    "options": null,
    "answer": false,
    "image": "r06_nerki_polozenie.jpg",
    "explanation": "To prawa nerka leży nieco niżej niż lewa."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W jednej nerce znajduje się około __________ nefronów.",
    "options": null,
    "answer": [
      "miliona"
    ],
    "altAnswers": [
      [
        "miliona",
        "milion",
        "1 000 000",
        "1000000"
      ]
    ],
    "explanation": "W jednej nerce znajduje się około miliona nefronów."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz część nerki z jej cechą lub funkcją.",
    "options": null,
    "left": [
      "kora nerki",
      "rdzeń nerki",
      "miedniczka nerkowa"
    ],
    "right": [
      "zewnętrzna i jaśniejsza część",
      "wewnętrzna i ciemniejsza część",
      "odprowadzanie moczu do moczowodów"
    ],
    "answer": {
      "kora nerki": "zewnętrzna i jaśniejsza część",
      "rdzeń nerki": "wewnętrzna i ciemniejsza część",
      "miedniczka nerkowa": "odprowadzanie moczu do moczowodów"
    },
    "image": "r06_przekroj_nerki.jpg",
    "explanation": "Kora jest zewnętrzną i jaśniejszą częścią nerki, rdzeń jest wewnętrzną i ciemniejszą, a miedniczka nerkowa uczestniczy w odprowadzaniu moczu do moczowodów."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pacjent ma niewydolne obie nerki. Trzeba zastąpić ich zdolność oczyszczania krwi zabiegiem wykonywanym za pomocą specjalnego urządzenia. Co należy zastosować?",
    "options": [
      "dializę",
      "analizę składu moczu",
      "badanie moczu testem paskowym",
      "regularne badanie moczu",
      "regularne opróżnianie pęcherza",
      "filtrację krwi w nefronie"
    ],
    "answer": 0,
    "image": "r06_dializa.jpg",
    "explanation": "Gdy nerki nie funkcjonują właściwie, wykonuje się dializę, czyli zabieg oczyszczania krwi za pomocą dializatora."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które sytuacje mogą być związane z zakażeniem dróg moczowych?",
    "options": [
      "wprowadzenie bakterii do ujścia cewki z okolicy pochwy",
      "wprowadzenie bakterii do ujścia cewki z okolicy odbytu",
      "przewlekła infekcja gardła",
      "przewlekła infekcja zatok",
      "próchnica zębów",
      "regularne opróżnianie pęcherza"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r06_bakterie_paleczki.jpg",
    "explanation": "Do zakażenia może dojść po wprowadzeniu bakterii do ujścia cewki z okolicy pochwy lub odbytu, a zakażenia mogą być też skutkiem przewlekłych infekcji gardła, zatok czy próchnicy zębów."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż drogę, którą bakterie mogą przemieszczać się w górę układu moczowego podczas zakażenia.",
    "options": null,
    "items": [
      "pęcherz moczowy",
      "nerki",
      "ujście cewki moczowej",
      "cewka moczowa"
    ],
    "answer": [
      "ujście cewki moczowej",
      "cewka moczowa",
      "pęcherz moczowy",
      "nerki"
    ],
    "explanation": "Bakterie mogą dostać się do ujścia cewki moczowej, przemieszczać się w górę cewki do pęcherza, a następnie nawet do nerek."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Który objaw nie jest typowy dla kamicy nerkowej: ból w okolicy lędźwiowej, wymioty, krwiomocz, nieprzyjemny zapach moczu.",
    "options": null,
    "answer": "nieprzyjemny zapach moczu",
    "image": "r06_kamienie_nerkowe.jpg",
    "explanation": "Ból w okolicy lędźwiowej, wymioty i krwiomocz mogą występować w kamicy nerkowej. Nieprzyjemny zapach moczu może towarzyszyć zakażeniu dróg moczowych."
  },
  {
    "id": "R06_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz substancję z pełnym zestawem narządów uczestniczących w jej wydalaniu.",
    "options": null,
    "left": [
      "woda",
      "mocznik",
      "dwutlenek węgla"
    ],
    "right": [
      "nerki, skóra i płuca",
      "nerki i skóra",
      "płuca"
    ],
    "answer": {
      "woda": "nerki, skóra i płuca",
      "mocznik": "nerki i skóra",
      "dwutlenek węgla": "płuca"
    },
    "image": "r06_narzady_wydalania.jpg",
    "explanation": "Wodę usuwają nerki, skóra i płuca; mocznik nerki i skóra; dwutlenek węgla płuca."
  },
  {
    "id": "R06_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W ogólnym badaniu moczu próbka jest żółta i przejrzysta, glukoza jest nieobecna, ale wykryto białko. Która interpretacja jest właściwa?",
    "options": [
      "Obecność białka jest nieprawidłowa i może wiązać się z chorobą nerek lub dużym wysiłkiem",
      "Nieobecność glukozy oznacza cukrzycę",
      "Żółta barwa oznacza zakażenie dróg moczowych",
      "Przejrzystość moczu świadczy o kamicy nerkowej",
      "Białko jest prawidłowym składnikiem moczu zdrowego człowieka",
      "Obecność białka oznacza wyłącznie niewłaściwe pobranie próbki"
    ],
    "answer": 0,
    "image": "r06_badanie_moczu.jpg",
    "explanation": "Białko nie powinno występować w moczu zdrowego człowieka; jego obecność może świadczyć o chorobach nerek albo być związana z dużym wysiłkiem fizycznym."
  },
  {
    "id": "R06_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które pary substancja - narząd są prawidłowe?",
    "options": [
      "dwutlenek węgla - płuca",
      "mocznik - nerki",
      "mocznik - skóra",
      "woda - płuca",
      "woda - nerki",
      "dwutlenek węgla - pęcherz moczowy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Dwutlenek węgla jest usuwany przez płuca, mocznik przez nerki i skórę, a woda przez nerki, skórę oraz płuca."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r06",
  number: 6,
  title: "Układ moczowy",
  icon: "💧",
  sectionOrder: [
    "Wydalanie i substancje wydalane",
    "Budowa układu moczowego",
    "Nerki i nefron",
    "Choroby i profilaktyka",
    "Analiza moczu"
  ],
  sectionIcons: {
    "Wydalanie i substancje wydalane": "♻️",
    "Budowa układu moczowego": "🫗",
    "Nerki i nefron": "🫘",
    "Choroby i profilaktyka": "🛡️",
    "Analiza moczu": "🧪"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
