// Skróty sekcji (do identyfikatorów ćwiczeń):
//   DRO  = Drogi oddechowe i płuca
//   WEN  = Wentylacja płuc
//   GAZ  = Wymiana gazowa i skład powietrza
//   KOM  = Oddychanie komórkowe
//   PRO  = Choroby i profilaktyka
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_DRO_01",
    "section": "Drogi oddechowe i płuca",
    "type": "single_choice",
    "prompt": "Który narząd znajduje się na drodze powietrza bezpośrednio po gardle?",
    "options": [
      "jama nosowa",
      "krtań",
      "tchawica",
      "oskrzela",
      "oskrzeliki",
      "pęcherzyki płucne"
    ],
    "answer": 1,
    "image": "r04_drogi_oddechowe.jpg",
    "explanation": "Powietrze z gardła przedostaje się do krtani, a następnie do tchawicy."
  },
  {
    "id": "R04_DRO_02",
    "section": "Drogi oddechowe i płuca",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje jamy nosowej związane z wdychanym powietrzem.",
    "options": [
      "oczyszczanie powietrza",
      "ogrzewanie powietrza",
      "nawilżanie powietrza",
      "wymiana gazowa z krwią",
      "wytwarzanie energii"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_nablonek_migawkowy.jpg",
    "explanation": "W jamie nosowej powietrze jest oczyszczane, ogrzewane i nawilżane. Znajduje się tam także pole węchowe."
  },
  {
    "id": "R04_DRO_03",
    "section": "Drogi oddechowe i płuca",
    "type": "true_false",
    "prompt": "Lewe płuco jest mniejsze od prawego ze względu na położenie serca w klatce piersiowej.",
    "options": null,
    "answer": true,
    "explanation": "Lewe płuco jest mniejsze, ponieważ w jego pobliżu w klatce piersiowej znajduje się serce."
  },
  {
    "id": "R04_DRO_04",
    "section": "Drogi oddechowe i płuca",
    "type": "fill_in",
    "prompt": "Powietrze z krtani trafia do __________, która przy końcu rozgałęzia się na dwa __________ główne.",
    "options": null,
    "answer": [
      "tchawicy",
      "oskrzela"
    ],
    "altAnswers": [
      [
        "tchawicy",
        "tchawica"
      ],
      [
        "oskrzela",
        "oskrzela główne"
      ]
    ],
    "explanation": "Tchawica jest długą rurą zbudowaną głównie z chrząstek i rozgałęzia się na dwa oskrzela główne."
  },
  {
    "id": "R04_DRO_05",
    "section": "Drogi oddechowe i płuca",
    "type": "riddle",
    "prompt": "Jestem chrząstką krtani. Podczas połykania zamykam drogę do układu oddechowego, aby pokarm trafił do przełyku. Jak się nazywam?",
    "options": null,
    "answer": "nagłośnia",
    "altAnswers": [
      "nagłośnia",
      "naglosnia"
    ],
    "image": "r04_naglosnia.jpg",
    "explanation": "Nagłośnia znajduje się na górze krtani i podczas połykania zamyka wejście do dróg oddechowych."
  },
  {
    "id": "R04_DRO_06",
    "section": "Drogi oddechowe i płuca",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do dróg oddechowych: jama nosowa, gardło, krtań, tchawica, pęcherzyki płucne.",
    "options": null,
    "answer": "pęcherzyki płucne",
    "explanation": "Do dróg oddechowych należą jama nosowa, gardło, krtań, tchawica i oskrzela. Pęcherzyki płucne są zakończeniami najdrobniejszych oskrzelików w płucach."
  },
  {
    "id": "R04_DRO_07",
    "section": "Drogi oddechowe i płuca",
    "type": "match",
    "prompt": "Połącz element układu oddechowego z jego funkcją.",
    "options": null,
    "left": [
      "jama nosowa",
      "gardło",
      "tchawica",
      "oskrzela"
    ],
    "right": [
      "oczyszczanie, ogrzewanie i nawilżanie powietrza",
      "transport powietrza do krtani",
      "transport powietrza do oskrzeli",
      "transport powietrza do płuc"
    ],
    "answer": {
      "jama nosowa": "oczyszczanie, ogrzewanie i nawilżanie powietrza",
      "gardło": "transport powietrza do krtani",
      "tchawica": "transport powietrza do oskrzeli",
      "oskrzela": "transport powietrza do płuc"
    },
    "explanation": "Jama nosowa przygotowuje powietrze, gardło przewodzi je do krtani, tchawica do oskrzeli, a oskrzela do płuc."
  },
  {
    "id": "R04_DRO_08",
    "section": "Drogi oddechowe i płuca",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odpowiedniej grupy.",
    "options": null,
    "items": [
      "jama nosowa",
      "gardło",
      "krtań",
      "tchawica",
      "oskrzela",
      "oskrzeliki",
      "pęcherzyki płucne"
    ],
    "categories": [
      "drogi oddechowe",
      "drobne struktury płucne"
    ],
    "answer": {
      "drogi oddechowe": [
        "jama nosowa",
        "gardło",
        "krtań",
        "tchawica",
        "oskrzela"
      ],
      "drobne struktury płucne": [
        "oskrzeliki",
        "pęcherzyki płucne"
      ]
    },
    "explanation": "Drogi oddechowe przewodzą powietrze do płuc. Wewnątrz płuc oskrzela rozgałęziają się na oskrzeliki zakończone pęcherzykami płucnymi."
  },
  {
    "id": "R04_DRO_09",
    "section": "Drogi oddechowe i płuca",
    "type": "sequence",
    "prompt": "Ułóż elementy w kolejności, w jakiej przepływa przez nie wdychane powietrze.",
    "options": null,
    "items": [
      "oskrzela",
      "jama nosowa",
      "tchawica",
      "krtań",
      "gardło"
    ],
    "answer": [
      "jama nosowa",
      "gardło",
      "krtań",
      "tchawica",
      "oskrzela"
    ],
    "image": "r04_drogi_oddechowe.jpg",
    "explanation": "Powietrze przechodzi kolejno przez jamę nosową, gardło, krtań, tchawicę i oskrzela, a dalej przez oskrzeliki do pęcherzyków płucnych."
  },
  {
    "id": "R04_DRO_10",
    "section": "Drogi oddechowe i płuca",
    "type": "scenario",
    "prompt": "Uczeń podczas jedzenia zaczyna mówić i kawałek pokarmu trafia w niewłaściwą stronę. Która struktura mogła się nie domknąć?",
    "options": [
      "nagłośnia",
      "opłucna",
      "przepona",
      "oskrzelik",
      "pęcherzyk płucny",
      "pole węchowe"
    ],
    "answer": 0,
    "image": "r04_naglosnia.jpg",
    "explanation": "Podczas połykania nagłośnia zamyka wejście do dróg oddechowych. Mówienie w trakcie jedzenia może utrudnić jej prawidłowe domknięcie."
  },
  {
    "id": "R04_DRO_11",
    "section": "Drogi oddechowe i płuca",
    "type": "single_choice",
    "prompt": "Jaki nabłonek buduje ściany pęcherzyków płucnych?",
    "options": [
      "nabłonek jednowarstwowy płaski",
      "nabłonek migawkowy",
      "nabłonek wielowarstwowy walcowaty",
      "nabłonek z kosmkami",
      "tkanka chrzęstna",
      "tkanka kostna"
    ],
    "answer": 0,
    "image": "r04_pecherzyki_plucne.jpg",
    "explanation": "Pęcherzyki płucne są zbudowane z bardzo cienkiego nabłonka jednowarstwowego płaskiego, co umożliwia przenikanie gazów."
  },
  {
    "id": "R04_WEN_01",
    "section": "Wentylacja płuc",
    "type": "single_choice",
    "prompt": "Który etap wentylacji płuc jest aktem czynnym?",
    "options": [
      "wdech",
      "wydech",
      "wymiana gazowa",
      "oddychanie komórkowe",
      "kaszel",
      "kichanie"
    ],
    "answer": 0,
    "image": "r04_wdech.jpg",
    "explanation": "Wdech jest aktem czynnym, ponieważ mięśnie oddechowe kurczą się i są napięte."
  },
  {
    "id": "R04_WEN_02",
    "section": "Wentylacja płuc",
    "type": "true_false",
    "prompt": "Podczas spokojnego wydechu mięśnie oddechowe kurczą się, dlatego wydech jest aktem czynnym.",
    "options": null,
    "answer": false,
    "image": "r04_wydech.jpg",
    "explanation": "Wydech jest aktem biernym: mięśnie oddechowe rozluźniają się, przepona podnosi się, a objętość klatki piersiowej maleje."
  },
  {
    "id": "R04_WEN_03",
    "section": "Wentylacja płuc",
    "type": "fill_in",
    "prompt": "Podczas wdechu przepona __________ i obniża się, a podczas wydechu __________ i podnosi się.",
    "options": null,
    "answer": [
      "kurczy się",
      "rozluźnia się"
    ],
    "altAnswers": [
      [
        "kurczy się",
        "napina się"
      ],
      [
        "rozluźnia się",
        "rozkurcza się"
      ]
    ],
    "explanation": "Przy wdechu przepona kurczy się i obniża. Przy wydechu rozluźnia się i wraca ku górze."
  },
  {
    "id": "R04_WEN_04",
    "section": "Wentylacja płuc",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany zachodzące podczas wdechu.",
    "options": [
      "przepona obniża się",
      "mięśnie międzyżebrowe kurczą się",
      "objętość klatki piersiowej zwiększa się",
      "powietrze dostaje się do dróg oddechowych",
      "przepona podnosi się",
      "objętość klatki piersiowej zmniejsza się"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_wdech.jpg",
    "explanation": "Podczas wdechu przepona się obniża, mięśnie międzyżebrowe kurczą się, objętość klatki piersiowej zwiększa się, a powietrze napływa do dróg oddechowych."
  },
  {
    "id": "R04_WEN_05",
    "section": "Wentylacja płuc",
    "type": "odd_one_out",
    "prompt": "Wskaż zmianę, która nie zachodzi podczas wdechu: przepona obniża się, mięśnie międzyżebrowe kurczą się, objętość klatki piersiowej zwiększa się, mięśnie oddechowe rozluźniają się.",
    "options": null,
    "answer": "mięśnie oddechowe rozluźniają się",
    "image": "r04_wydech.jpg",
    "explanation": "Podczas wdechu mięśnie oddechowe kurczą się. Ich rozluźnienie jest charakterystyczne dla wydechu."
  },
  {
    "id": "R04_WEN_06",
    "section": "Wentylacja płuc",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia podczas wdechu w logicznej kolejności.",
    "options": null,
    "items": [
      "płuca wypełniają się powietrzem",
      "mięśnie oddechowe kurczą się",
      "powietrze dostaje się do dróg oddechowych",
      "objętość klatki piersiowej zwiększa się"
    ],
    "answer": [
      "mięśnie oddechowe kurczą się",
      "objętość klatki piersiowej zwiększa się",
      "płuca wypełniają się powietrzem",
      "powietrze dostaje się do dróg oddechowych"
    ],
    "explanation": "Skurcz mięśni oddechowych zwiększa objętość klatki piersiowej, płuca wypełniają się powietrzem i powietrze napływa do dróg oddechowych."
  },
  {
    "id": "R04_WEN_07",
    "section": "Wentylacja płuc",
    "type": "match",
    "prompt": "Połącz element z jego zachowaniem podczas wdechu albo wydechu.",
    "options": null,
    "left": [
      "przepona podczas wdechu",
      "przepona podczas wydechu",
      "mięśnie międzyżebrowe podczas wdechu",
      "mięśnie międzyżebrowe podczas wydechu"
    ],
    "right": [
      "kurczy się i obniża",
      "rozluźnia się i podnosi",
      "kurczą się",
      "rozkurczają się"
    ],
    "answer": {
      "przepona podczas wdechu": "kurczy się i obniża",
      "przepona podczas wydechu": "rozluźnia się i podnosi",
      "mięśnie międzyżebrowe podczas wdechu": "kurczą się",
      "mięśnie międzyżebrowe podczas wydechu": "rozkurczają się"
    },
    "explanation": "Przepona i mięśnie międzyżebrowe pracują przeciwnie podczas wdechu i wydechu."
  },
  {
    "id": "R04_WEN_08",
    "section": "Wentylacja płuc",
    "type": "scenario",
    "prompt": "W modelu układu oddechowego dwa małe baloniki w butelce napełniają się, gdy duży balonik na dole zostaje pociągnięty w dół. Jaką strukturę człowieka naśladuje dolny balonik?",
    "options": [
      "przeponę",
      "tchawicę",
      "krtań",
      "opłucną",
      "nagłośnię",
      "oskrzela"
    ],
    "answer": 0,
    "image": "r04_model_oddechowy.jpg",
    "explanation": "W takim modelu dolny balonik naśladuje przeponę. Jej obniżenie podczas wdechu zwiększa objętość klatki piersiowej."
  },
  {
    "id": "R04_WEN_09",
    "section": "Wentylacja płuc",
    "type": "single_choice",
    "prompt": "Które mięśnie pełnią funkcję mięśni oddechowych?",
    "options": [
      "przepona i mięśnie międzyżebrowe",
      "mięśnie ramienia i przepona",
      "mięśnie brzucha i gardła",
      "mięśnie nóg i oskrzela",
      "fałdy głosowe i przepona",
      "mięśnie szyi i pęcherzyki płucne"
    ],
    "answer": 0,
    "explanation": "Mięśnie oddechowe obejmują przeponę i mięśnie międzyżebrowe."
  },
  {
    "id": "R04_WEN_10",
    "section": "Wentylacja płuc",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które pełnią ważne funkcje podczas wdechu i wydechu.",
    "options": [
      "drogi oddechowe",
      "płuca",
      "przepona",
      "mięśnie międzyżebrowe",
      "jelito cienkie",
      "żołądek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W wentylacji płuc uczestniczą drogi oddechowe, płuca oraz mięśnie oddechowe: przepona i mięśnie międzyżebrowe."
  },
  {
    "id": "R04_WEN_11",
    "section": "Wentylacja płuc",
    "type": "riddle",
    "prompt": "Rytmiczne wdechy i wydechy, dzięki którym powietrze jest wprowadzane do płuc i z nich usuwane, to...",
    "options": null,
    "answer": "wentylacja płuc",
    "altAnswers": [
      "wentylacja płuc",
      "wentylacja pluc",
      "wentylacja"
    ],
    "explanation": "Rytmiczne wdechy i wydechy tworzą mechanizm wentylacji płuc."
  },
  {
    "id": "R04_GAZ_01",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "single_choice",
    "prompt": "Jaka jest przybliżona zawartość tlenu w powietrzu wdychanym?",
    "options": [
      "21%",
      "16%",
      "78%",
      "4%",
      "0,04%",
      "2%"
    ],
    "answer": 0,
    "explanation": "Powietrze wdychane zawiera około 21% tlenu."
  },
  {
    "id": "R04_GAZ_02",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "single_choice",
    "prompt": "Jaka jest przybliżona zawartość dwutlenku węgla w powietrzu wydychanym?",
    "options": [
      "4%",
      "0,04%",
      "16%",
      "21%",
      "78%",
      "2%"
    ],
    "answer": 0,
    "explanation": "W powietrzu wydychanym dwutlenek węgla stanowi około 4%."
  },
  {
    "id": "R04_GAZ_03",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "true_false",
    "prompt": "Azot stanowi około 78% zarówno powietrza wdychanego, jak i wydychanego.",
    "options": null,
    "answer": true,
    "explanation": "Na wykresie składu powietrza azot ma wartość 78% w obu przypadkach."
  },
  {
    "id": "R04_GAZ_04",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "fill_in",
    "prompt": "Powietrze wdychane zawiera około __________ tlenu, a wydychane około __________ tlenu.",
    "options": null,
    "answer": [
      "21%",
      "16%"
    ],
    "altAnswers": [
      [
        "21%",
        "21 %",
        "21"
      ],
      [
        "16%",
        "16 %",
        "16"
      ]
    ],
    "explanation": "Po wymianie gazowej udział tlenu spada z około 21% w powietrzu wdychanym do około 16% w wydychanym."
  },
  {
    "id": "R04_GAZ_05",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe porównania powietrza wydychanego z wdychanym.",
    "options": [
      "jest mniej tlenu",
      "jest więcej dwutlenku węgla",
      "udział azotu pozostaje około 78%",
      "jest więcej pozostałych gazów, w tym pary wodnej",
      "jest więcej tlenu",
      "jest mniej dwutlenku węgla"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W powietrzu wydychanym jest mniej tlenu, więcej dwutlenku węgla i większy udział pozostałych gazów, w tym pary wodnej. Udział azotu pozostaje na poziomie 78%."
  },
  {
    "id": "R04_GAZ_06",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "match",
    "prompt": "Połącz składnik powietrza wdychanego z jego udziałem procentowym.",
    "options": null,
    "left": [
      "azot",
      "tlen",
      "dwutlenek węgla",
      "pozostałe gazy"
    ],
    "right": [
      "78%",
      "21%",
      "0,04%",
      "0,96%"
    ],
    "answer": {
      "azot": "78%",
      "tlen": "21%",
      "dwutlenek węgla": "0,04%",
      "pozostałe gazy": "0,96%"
    },
    "explanation": "Powietrze wdychane zawiera około 78% azotu, 21% tlenu, 0,04% dwutlenku węgla i 0,96% pozostałych gazów."
  },
  {
    "id": "R04_GAZ_07",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "sort",
    "prompt": "Przyporządkuj wartości do powietrza wdychanego lub wydychanego.",
    "options": null,
    "items": [
      "tlen 21%",
      "dwutlenek węgla 0,04%",
      "tlen 16%",
      "dwutlenek węgla 4%"
    ],
    "categories": [
      "powietrze wdychane",
      "powietrze wydychane"
    ],
    "answer": {
      "powietrze wdychane": [
        "tlen 21%",
        "dwutlenek węgla 0,04%"
      ],
      "powietrze wydychane": [
        "tlen 16%",
        "dwutlenek węgla 4%"
      ]
    },
    "explanation": "Udział tlenu spada z 21% do 16%, a dwutlenku węgla rośnie z 0,04% do 4%."
  },
  {
    "id": "R04_GAZ_08",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "scenario",
    "prompt": "Do dwóch szklanek wlano wodę wapienną. Do jednej przez słomkę wdmuchiwano powietrze z płuc i ta próba zmętniała. Obecność którego gazu wykazała obserwacja?",
    "options": [
      "dwutlenku węgla",
      "tlenu",
      "azotu",
      "wodoru",
      "helu",
      "ozonu"
    ],
    "answer": 0,
    "image": "r04_woda_wapienna.jpg",
    "explanation": "Woda wapienna mętnieje pod wpływem dwutlenku węgla, więc zmętnienie po wdmuchiwaniu powietrza z płuc potwierdza obecność tego gazu w wydychanym powietrzu."
  },
  {
    "id": "R04_GAZ_09",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "sequence",
    "prompt": "Ułóż drogę tlenu od miejsca wymiany gazowej w płucach do komórek ciała.",
    "options": null,
    "items": [
      "komórki ciała",
      "krew",
      "pęcherzyki płucne"
    ],
    "answer": [
      "pęcherzyki płucne",
      "krew",
      "komórki ciała"
    ],
    "image": "r04_pecherzyki_naczynia.jpg",
    "explanation": "Tlen przechodzi z pęcherzyków płucnych do krwi, a następnie wraz z krwią jest transportowany do komórek ciała."
  },
  {
    "id": "R04_GAZ_10",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest gazem występującym na wykresie składu powietrza: tlen, azot, dwutlenek węgla, glukoza.",
    "options": null,
    "answer": "glukoza",
    "explanation": "Tlen, azot i dwutlenek węgla są składnikami powietrza. Glukoza jest cukrem i substratem oddychania komórkowego."
  },
  {
    "id": "R04_GAZ_11",
    "section": "Wymiana gazowa i skład powietrza",
    "type": "riddle",
    "prompt": "Proces polegający na wymianie tlenu i dwutlenku węgla między pęcherzykami płucnymi a krwią oraz między krwią a komórkami ciała to...",
    "options": null,
    "answer": "wymiana gazowa",
    "altAnswers": [
      "wymiana gazowa"
    ],
    "image": "r04_pecherzyki_naczynia.jpg",
    "explanation": "Wymiana gazowa zachodzi w płucach między pęcherzykami a krwią oraz w tkankach między krwią a komórkami."
  },
  {
    "id": "R04_KOM_01",
    "section": "Oddychanie komórkowe",
    "type": "single_choice",
    "prompt": "Gdzie zachodzi oddychanie komórkowe?",
    "options": [
      "w mitochondriach",
      "w pęcherzykach płucnych",
      "w tchawicy",
      "w jamie nosowej",
      "w oskrzelach",
      "w opłucnej"
    ],
    "answer": 0,
    "image": "r04_mitochondria.jpg",
    "explanation": "Oddychanie komórkowe jest procesem biochemicznym zachodzącym w mitochondriach komórek."
  },
  {
    "id": "R04_KOM_02",
    "section": "Oddychanie komórkowe",
    "type": "multi_select",
    "prompt": "Zaznacz substraty oddychania komórkowego.",
    "options": [
      "tlen",
      "glukoza",
      "dwutlenek węgla",
      "woda",
      "energia"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Substratami oddychania komórkowego są tlen oraz cukier, czyli glukoza."
  },
  {
    "id": "R04_KOM_03",
    "section": "Oddychanie komórkowe",
    "type": "multi_select",
    "prompt": "Zaznacz produkty oddychania komórkowego.",
    "options": [
      "dwutlenek węgla",
      "woda",
      "energia",
      "tlen",
      "glukoza"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W oddychaniu komórkowym powstają dwutlenek węgla i woda, a także uwalniana jest energia."
  },
  {
    "id": "R04_KOM_04",
    "section": "Oddychanie komórkowe",
    "type": "true_false",
    "prompt": "W wyniku oddychania komórkowego uwalniana jest energia potrzebna organizmowi do życia.",
    "options": null,
    "answer": true,
    "explanation": "Oddychanie komórkowe umożliwia uwolnienie energii z udziałem glukozy i tlenu."
  },
  {
    "id": "R04_KOM_05",
    "section": "Oddychanie komórkowe",
    "type": "fill_in",
    "prompt": "W oddychaniu komórkowym substratami są tlen i __________, a jednym z produktów jest __________ węgla.",
    "options": null,
    "answer": [
      "cukier",
      "dwutlenek"
    ],
    "altAnswers": [
      [
        "cukier",
        "glukoza",
        "cukier - glukoza"
      ],
      [
        "dwutlenek",
        "dwutlenek"
      ]
    ],
    "explanation": "Cukier, czyli glukoza, oraz tlen są substratami. Wśród produktów znajduje się dwutlenek węgla."
  },
  {
    "id": "R04_KOM_06",
    "section": "Oddychanie komórkowe",
    "type": "match",
    "prompt": "Połącz substancję lub efekt z jego rolą w oddychaniu komórkowym.",
    "options": null,
    "left": [
      "tlen",
      "cukier",
      "dwutlenek węgla",
      "woda"
    ],
    "right": [
      "substrat pobierany dzięki układowi oddechowemu",
      "substrat wchłaniany przez układ pokarmowy",
      "produkt usuwany podczas wydechu",
      "produkt częściowo usuwany jako para wodna"
    ],
    "answer": {
      "tlen": "substrat pobierany dzięki układowi oddechowemu",
      "cukier": "substrat wchłaniany przez układ pokarmowy",
      "dwutlenek węgla": "produkt usuwany podczas wydechu",
      "woda": "produkt częściowo usuwany jako para wodna"
    },
    "explanation": "Tlen i cukier są substratami, a dwutlenek węgla i woda produktami. Dwutlenek węgla jest usuwany podczas wydechu, a część wody jako para wodna."
  },
  {
    "id": "R04_KOM_07",
    "section": "Oddychanie komórkowe",
    "type": "sort",
    "prompt": "Podziel elementy na substraty i produkty oddychania komórkowego.",
    "options": null,
    "items": [
      "tlen",
      "cukier",
      "dwutlenek węgla",
      "woda",
      "energia"
    ],
    "categories": [
      "substraty",
      "produkty"
    ],
    "answer": {
      "substraty": [
        "tlen",
        "cukier"
      ],
      "produkty": [
        "dwutlenek węgla",
        "woda",
        "energia"
      ]
    },
    "explanation": "Tlen i cukier są substratami. Dwutlenek węgla, woda i uwolniona energia są produktami procesu."
  },
  {
    "id": "R04_KOM_08",
    "section": "Oddychanie komórkowe",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia prowadzące od pobrania tlenu do uwolnienia energii w komórce.",
    "options": null,
    "items": [
      "tlen trafia z krwią do komórek",
      "w mitochondriach zachodzi oddychanie komórkowe",
      "tlen przechodzi z pęcherzyków płucnych do krwi",
      "uwalniana jest energia"
    ],
    "answer": [
      "tlen przechodzi z pęcherzyków płucnych do krwi",
      "tlen trafia z krwią do komórek",
      "w mitochondriach zachodzi oddychanie komórkowe",
      "uwalniana jest energia"
    ],
    "explanation": "Wymiana gazowa dostarcza tlen do krwi, krew transportuje go do komórek, a w mitochondriach zachodzi oddychanie komórkowe i uwalniana jest energia."
  },
  {
    "id": "R04_KOM_09",
    "section": "Oddychanie komórkowe",
    "type": "scenario",
    "prompt": "Franek nie jadł od rana, a potem wykonywał wyczerpujące ćwiczenia na WF. Którego substratu oddychania komórkowego mogło mu brakować z powodu braku posiłku?",
    "options": [
      "glukozy",
      "dwutlenku węgla",
      "wody",
      "azotu",
      "pary wodnej",
      "śluzu"
    ],
    "answer": 0,
    "explanation": "Cukier, czyli glukoza, jest substratem oddychania komórkowego i jest pozyskiwany z pokarmu. Bez niego uzyskiwanie energii jest utrudnione."
  },
  {
    "id": "R04_KOM_10",
    "section": "Oddychanie komórkowe",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest substratem ani produktem oddychania komórkowego: tlen, cukier, dwutlenek węgla, oskrzele.",
    "options": null,
    "answer": "oskrzele",
    "explanation": "Tlen i cukier są substratami oddychania komórkowego, a dwutlenek węgla jest jego produktem. Oskrzele należy do dróg oddechowych."
  },
  {
    "id": "R04_KOM_11",
    "section": "Oddychanie komórkowe",
    "type": "riddle",
    "prompt": "Jestem procesem biochemicznym zachodzącym w mitochondriach. Z udziałem cukru i tlenu uwalniam energię. Jak się nazywam?",
    "options": null,
    "answer": "oddychanie komórkowe",
    "altAnswers": [
      "oddychanie komórkowe",
      "oddychanie komorkowe"
    ],
    "image": "r04_mitochondria.jpg",
    "explanation": "Opis dotyczy oddychania komórkowego."
  },
  {
    "id": "R04_PRO_01",
    "section": "Choroby i profilaktyka",
    "type": "single_choice",
    "prompt": "Na czym polega palenie bierne?",
    "options": [
      "na wdychaniu dymu tytoniowego w pobliżu palacza",
      "na paleniu papierosa bez filtra",
      "na oddychaniu przez usta",
      "na przebywaniu w smogu bez palaczy",
      "na kaszlu podczas infekcji",
      "na wykonywaniu badań profilaktycznych"
    ],
    "answer": 0,
    "image": "r04_palenie_bierne.jpg",
    "explanation": "Palenie bierne to wdychanie dymu tytoniowego podczas przebywania w pobliżu osoby palącej."
  },
  {
    "id": "R04_PRO_02",
    "section": "Choroby i profilaktyka",
    "type": "true_false",
    "prompt": "Rakiem płuca można zarazić się od chorej osoby drogą kropelkową.",
    "options": null,
    "answer": false,
    "explanation": "Rak płuca jest chorobą nowotworową i nie jest chorobą zakaźną."
  },
  {
    "id": "R04_PRO_03",
    "section": "Choroby i profilaktyka",
    "type": "match",
    "prompt": "Połącz chorobę z czynnikiem będącym jej przyczyną.",
    "options": null,
    "left": [
      "angina",
      "gruźlica",
      "COVID-19",
      "rak płuca"
    ],
    "right": [
      "bakterie paciorkowce",
      "bakterie prątki",
      "wirus SARS-CoV-2",
      "dym tytoniowy i zanieczyszczenia powietrza"
    ],
    "answer": {
      "angina": "bakterie paciorkowce",
      "gruźlica": "bakterie prątki",
      "COVID-19": "wirus SARS-CoV-2",
      "rak płuca": "dym tytoniowy i zanieczyszczenia powietrza"
    },
    "explanation": "Anginę najczęściej wywołują paciorkowce, gruźlicę prątki, COVID-19 wirus SARS-CoV-2, a do raka płuca przyczyniają się między innymi dym tytoniowy i zanieczyszczenia powietrza."
  },
  {
    "id": "R04_PRO_04",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz zasady profilaktyki chorób układu oddechowego.",
    "options": [
      "szczepienia ochronne",
      "badania profilaktyczne",
      "niepalenie papierosów",
      "wdechy nosem",
      "unikanie zanieczyszczeń powietrza",
      "palenie bierne"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do profilaktyki należą między innymi szczepienia, badania profilaktyczne, niepalenie papierosów, oddychanie nosem, higiena i unikanie zanieczyszczeń."
  },
  {
    "id": "R04_PRO_05",
    "section": "Choroby i profilaktyka",
    "type": "fill_in",
    "prompt": "Profilaktyka oznacza __________ chorobom.",
    "options": null,
    "answer": [
      "zapobieganie"
    ],
    "altAnswers": [
      [
        "zapobieganie"
      ]
    ],
    "explanation": "Profilaktyka to zapobieganie chorobom."
  },
  {
    "id": "R04_PRO_06",
    "section": "Choroby i profilaktyka",
    "type": "scenario",
    "prompt": "Na przystanku obok ciebie ktoś pali papierosa, a ty wdychasz dym. Jak nazywa się ta sytuacja?",
    "options": [
      "palenie bierne",
      "palenie czynne",
      "wymiana gazowa",
      "wentylacja płuc",
      "profilaktyka",
      "oddychanie komórkowe"
    ],
    "answer": 0,
    "image": "r04_palenie_bierne.jpg",
    "explanation": "Wdychanie dymu tytoniowego w pobliżu osoby palącej to palenie bierne, które jest szkodliwe dla zdrowia."
  },
  {
    "id": "R04_PRO_07",
    "section": "Choroby i profilaktyka",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, która nie jest zakaźna: angina, gruźlica, COVID-19, rak płuca.",
    "options": null,
    "answer": "rak płuca",
    "explanation": "Angina, gruźlica i COVID-19 są chorobami zakaźnymi. Rak płuca jest chorobą nowotworową."
  },
  {
    "id": "R04_PRO_08",
    "section": "Choroby i profilaktyka",
    "type": "sort",
    "prompt": "Podziel choroby na zakaźne i niezakaźne.",
    "options": null,
    "items": [
      "angina",
      "gruźlica",
      "COVID-19",
      "rak płuca"
    ],
    "categories": [
      "choroby zakaźne",
      "choroby niezakaźne"
    ],
    "answer": {
      "choroby zakaźne": [
        "angina",
        "gruźlica",
        "COVID-19"
      ],
      "choroby niezakaźne": [
        "rak płuca"
      ]
    },
    "explanation": "Angina, gruźlica i COVID-19 mogą być przenoszone między ludźmi. Rak płuca nie jest chorobą zakaźną."
  },
  {
    "id": "R04_PRO_09",
    "section": "Choroby i profilaktyka",
    "type": "sequence",
    "prompt": "Ułóż etapy przykładowego zakażenia drogą kropelkową.",
    "options": null,
    "items": [
      "drobnoustroje dostają się do organizmu drugiej osoby",
      "chory kaszle, kicha lub mówi",
      "w powietrzu pojawiają się kropelki śliny z drobnoustrojami"
    ],
    "answer": [
      "chory kaszle, kicha lub mówi",
      "w powietrzu pojawiają się kropelki śliny z drobnoustrojami",
      "drobnoustroje dostają się do organizmu drugiej osoby"
    ],
    "explanation": "Podczas kaszlu, kichania lub mówienia chorego drobnoustroje mogą znaleźć się na kropelkach śliny i przedostać się do organizmu innej osoby."
  },
  {
    "id": "R04_PRO_10",
    "section": "Choroby i profilaktyka",
    "type": "single_choice",
    "prompt": "Przeciw której chorobie stosuje się szczepionkę BCG, obowiązkową w Polsce dla dzieci i młodzieży?",
    "options": [
      "gruźlicy",
      "anginie",
      "rakowi płuca",
      "pylicy",
      "smogowi",
      "zakrztuszeniu"
    ],
    "answer": 0,
    "explanation": "Szczepionka BCG jest szczepieniem przeciw gruźlicy."
  },
  {
    "id": "R04_PRO_11",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Co pomaga ograniczyć szkodliwy wpływ zanieczyszczonego powietrza i pyłów?",
    "options": [
      "monitorowanie jakości powietrza",
      "ograniczenie przebywania na dworze przy złej jakości powietrza",
      "unikanie zanieczyszczeń",
      "stosowanie masek ochronnych w silnie zapylonych miejscach",
      "palenie papierosów",
      "wdechy ustami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_smog.jpg",
    "explanation": "Warto śledzić jakość powietrza, ograniczać przebywanie na dworze przy złej jakości powietrza, unikać zanieczyszczeń i w zapylonych miejscach stosować ochronę dróg oddechowych."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest przybliżona łączna powierzchnia ścian pęcherzyków płucnych jednego człowieka?",
    "options": [
      "około 100 m²",
      "około 10 m²",
      "około 1 m²",
      "około 500 m²",
      "około 1000 m²",
      "około 0,1 m²"
    ],
    "answer": 0,
    "image": "r04_pecherzyki_plucne.jpg",
    "explanation": "Łączna powierzchnia ścian pęcherzyków płucnych wynosi około 100 m²."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Do jakiej powierzchni porównano łączną powierzchnię ścian pęcherzyków płucnych jednego człowieka?",
    "options": [
      "do połowy kortu tenisowego",
      "do całego boiska piłkarskiego",
      "do powierzchni stołu",
      "do dwóch kortów tenisowych",
      "do kartki zeszytu",
      "do powierzchni basenu olimpijskiego"
    ],
    "answer": 0,
    "explanation": "Około 100 m² powierzchni ścian pęcherzyków płucnych porównano do połowy kortu tenisowego."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co dzieje się z fałdami głosowymi w okresie dojrzewania, gdy głos może się obniżyć?",
    "options": [
      "grubieją i wydłużają się",
      "stają się cieńsze i krótsze",
      "zanikają",
      "przenoszą się do tchawicy",
      "pokrywają się nabłonkiem płaskim",
      "zamieniają się w nagłośnię"
    ],
    "answer": 0,
    "image": "r04_faldy_glosowe.jpg",
    "explanation": "W okresie dojrzewania fałdy głosowe grubieją i wydłużają się. Zmianę głosu nazywa się mutacją."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Natężenie wydawanego dźwięku zależy od siły powietrza przepływającego przez szparę głośni.",
    "options": null,
    "answer": true,
    "image": "r04_faldy_glosowe.jpg",
    "explanation": "Podczas wydawania dźwięku fałdy głosowe są napięte, szpara głośni się zmniejsza, a natężenie dźwięku zależy od siły przepływającego powietrza."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Gdy oddychamy lub mówimy, nagłośnia jest __________, a gdy przełykamy jedzenie lub picie, nagłośnia się __________.",
    "options": null,
    "answer": [
      "otwarta",
      "zamyka"
    ],
    "altAnswers": [
      [
        "otwarta"
      ],
      [
        "zamyka",
        "zamknięta"
      ]
    ],
    "explanation": "Nagłośnia jest otwarta podczas oddychania i mówienia, natomiast podczas połykania zamyka wejście do dróg oddechowych."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz strukturę z cechą budowy lub funkcją.",
    "options": null,
    "left": [
      "nabłonek migawkowy",
      "nabłonek jednowarstwowy płaski",
      "fałdy głosowe",
      "opłucna"
    ],
    "right": [
      "rzęski wychwytujące zanieczyszczenia",
      "bardzo cienka warstwa umożliwiająca przenikanie gazów",
      "umożliwiają wydawanie głosu",
      "błona osłaniająca płuca z zewnątrz"
    ],
    "answer": {
      "nabłonek migawkowy": "rzęski wychwytujące zanieczyszczenia",
      "nabłonek jednowarstwowy płaski": "bardzo cienka warstwa umożliwiająca przenikanie gazów",
      "fałdy głosowe": "umożliwiają wydawanie głosu",
      "opłucna": "błona osłaniająca płuca z zewnątrz"
    },
    "image": "r04_nablonek_migawkowy.jpg",
    "explanation": "Rzęski nabłonka migawkowego wychwytują zanieczyszczenia, cienki nabłonek płaski pęcherzyków ułatwia wymianę gazową, fałdy głosowe służą wydawaniu głosu, a opłucna osłania płuca z zewnątrz."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż kolejne elementy drogi tlenu od wdychanego powietrza do miejsca oddychania komórkowego.",
    "options": null,
    "items": [
      "mitochondria",
      "krew",
      "pęcherzyki płucne",
      "drogi oddechowe",
      "komórki ciała"
    ],
    "answer": [
      "drogi oddechowe",
      "pęcherzyki płucne",
      "krew",
      "komórki ciała",
      "mitochondria"
    ],
    "explanation": "Tlen dociera drogami oddechowymi do pęcherzyków płucnych, przechodzi do krwi, jest transportowany do komórek i trafia do mitochondriów."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek nowotworów złośliwych u mężczyzn w Polsce w 2019 r. stanowiły nowotwory oskrzela i płuca na pokazanym wykresie?",
    "options": [
      "20,6%",
      "26,1%",
      "8%",
      "6,8%",
      "6,4%",
      "42,1%"
    ],
    "answer": 0,
    "explanation": "Na wykresie dla mężczyzn nowotwory oskrzela i płuca stanowiły 20,6% i były drugie pod względem częstości po nowotworach gruczołu krokowego."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas reanimacji metodą usta-usta do płuc drugiej osoby trafia powietrze wydychane przez ratownika. Dlaczego to powietrze nadal może dostarczać tlen?",
    "options": [
      "nadal zawiera około 16% tlenu",
      "zawiera 0% tlenu, ale 78% dwutlenku węgla",
      "ma więcej tlenu niż powietrze wdychane",
      "składa się wyłącznie z azotu",
      "zawiera około 4% tlenu",
      "tlen powstaje dopiero w jamie ustnej"
    ],
    "answer": 0,
    "explanation": "Powietrze wydychane nadal zawiera około 16% tlenu, więc mimo mniejszej zawartości niż w powietrzu wdychanym wciąż może dostarczać tlen."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz sprzęt i materiały potrzebne w doświadczeniu badającym obecność dwutlenku węgla w wydychanym powietrzu.",
    "options": [
      "woda wapienna",
      "dwie szklanki",
      "słomka",
      "lusterko",
      "stoper",
      "baloniki"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r04_woda_wapienna.jpg",
    "explanation": "W doświadczeniu użyto wody wapiennej, dwóch szklanek i słomki."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które pomagają zwiększyć objętość klatki piersiowej podczas wdechu.",
    "options": [
      "skurcz przepony",
      "skurcz mięśni międzyżebrowych",
      "elastyczne chrząstki łączące żebra z mostkiem",
      "rozluźnienie przepony",
      "zmniejszenie objętości klatki piersiowej"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Podczas wdechu pracują przepona i mięśnie międzyżebrowe. Zwiększenie objętości klatki piersiowej ułatwia też elastyczna tkanka chrzęstna łącząca żebra z mostkiem."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który należy do innego doświadczenia niż pozostałe: woda wapienna, dwie szklanki, słomka, lusterko.",
    "options": null,
    "answer": "lusterko",
    "image": "r04_woda_wapienna.jpg",
    "explanation": "Woda wapienna, dwie szklanki i słomka służą do badania dwutlenku węgla w wydychanym powietrzu. Lusterko wykorzystuje się do badania obecności pary wodnej."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Osoba podczas przełykania próbuje jednocześnie wykonać wdech. Dlaczego te czynności nie zachodzą swobodnie w tym samym momencie?",
    "options": [
      "nagłośnia zamyka wejście do dróg oddechowych",
      "przepona przestaje istnieć",
      "oskrzela zamykają się na stałe",
      "pęcherzyki płucne wypełniają się pokarmem",
      "opłucna otwiera przełyk",
      "jama nosowa zatrzymuje pracę"
    ],
    "answer": 0,
    "image": "r04_naglosnia.jpg",
    "explanation": "Podczas przełykania nagłośnia zamyka wejście do dróg oddechowych, aby pokarm nie dostał się do nich. Dlatego przepływ powietrza jest wtedy czasowo odcięty."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do właściwego nabłonka układu oddechowego.",
    "options": null,
    "items": [
      "ma rzęski",
      "występuje w drogach oddechowych",
      "wychwytuje zanieczyszczenia",
      "jest bardzo cienki",
      "buduje ściany pęcherzyków płucnych",
      "umożliwia przenikanie gazów"
    ],
    "categories": [
      "nabłonek migawkowy",
      "nabłonek jednowarstwowy płaski"
    ],
    "answer": {
      "nabłonek migawkowy": [
        "ma rzęski",
        "występuje w drogach oddechowych",
        "wychwytuje zanieczyszczenia"
      ],
      "nabłonek jednowarstwowy płaski": [
        "jest bardzo cienki",
        "buduje ściany pęcherzyków płucnych",
        "umożliwia przenikanie gazów"
      ]
    },
    "image": "r04_nablonek_migawkowy.jpg",
    "explanation": "Nabłonek migawkowy ma rzęski wychwytujące zanieczyszczenia w drogach oddechowych. Nabłonek jednowarstwowy płaski jest bardzo cienki i buduje pęcherzyki płucne."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Zimą monitoring wskazuje bardzo złą jakość powietrza z dużą ilością drobnych pyłów. Które zachowanie jest zgodne z zasadami ochrony układu oddechowego?",
    "options": [
      "ograniczyć przebywanie na dworze",
      "celowo oddychać wyłącznie ustami",
      "zacząć palić papierosy",
      "zrezygnować z monitorowania jakości powietrza",
      "długo ćwiczyć na zewnątrz przy smogu",
      "przebywać blisko źródeł dymu"
    ],
    "answer": 0,
    "image": "r04_smog.jpg",
    "explanation": "Przy złej jakości powietrza zaleca się ograniczyć przebywanie na dworze, ponieważ rzęski dróg oddechowych nie są w stanie zatrzymać całego pyłu."
  }
];

const KID_PROMPTS = {
  "R04_DRO_10": "Podczas jedzenia ktoś mówi i pokarm trafia w złą stronę. Co mogło się nie zamknąć?",
  "R04_WEN_08": "W modelu płuc dolny balonik jest ciągnięty w dół. Jaki mięsień człowieka udaje?",
  "R04_GAZ_08": "Woda wapienna zmętniała po wdmuchnięciu powietrza z płuc. Jaki gaz to wykrywa?",
  "R04_KOM_09": "Franek nie jadł, a potem mocno ćwiczył. Jakiego cukru potrzebnego do oddychania komórkowego mogło mu brakować?",
  "R04_PRO_06": "Stoisz obok palacza i wdychasz jego dym. Jak to się nazywa?",
  "R04_HARD_13": "Dlaczego podczas przełykania nie da się swobodnie zrobić wdechu?"
};

const chapter = {
  id: "r04",
  number: 4,
  title: "Układ oddechowy",
  icon: "🫁",
  sectionOrder: [
    "Drogi oddechowe i płuca",
    "Wentylacja płuc",
    "Wymiana gazowa i skład powietrza",
    "Oddychanie komórkowe",
    "Choroby i profilaktyka"
  ],
  sectionIcons: {
    "Drogi oddechowe i płuca": "🫁",
    "Wentylacja płuc": "🌬️",
    "Wymiana gazowa i skład powietrza": "🔄",
    "Oddychanie komórkowe": "⚡",
    "Choroby i profilaktyka": "🛡️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
