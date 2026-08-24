// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BUD  = Budowa układu oddechowego
//   WEN  = Wentylacja płuc
//   GAZ  = Wymiana gazowa
//   CHO  = Choroby i profilaktyka
//   SZK  = Palenie i zanieczyszczenia
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_BUD_01",
    "section": "Budowa układu oddechowego",
    "type": "single_choice",
    "prompt": "Który element dróg oddechowych znajduje się bezpośrednio po gardle na drodze wdychanego powietrza?",
    "options": [
      "Krtań",
      "Tchawica",
      "Oskrzela",
      "Oskrzeliki",
      "Pęcherzyki płucne",
      "Przepona"
    ],
    "answer": 0,
    "explanation": "Powietrze z jamy nosowej lub ustnej przechodzi przez gardło do krtani, a następnie do tchawicy.",
    "image": "r03_drogi_oddechowe.jpg"
  },
  {
    "id": "R03_BUD_02",
    "section": "Budowa układu oddechowego",
    "type": "sequence",
    "prompt": "Ułóż drogę wdychanego powietrza od jamy nosowej do pęcherzyków płucnych.",
    "options": null,
    "items": [
      "tchawica",
      "oskrzeliki",
      "jama nosowa",
      "pęcherzyki płucne",
      "krtań",
      "oskrzela",
      "gardło"
    ],
    "answer": [
      "jama nosowa",
      "gardło",
      "krtań",
      "tchawica",
      "oskrzela",
      "oskrzeliki",
      "pęcherzyki płucne"
    ],
    "explanation": "Wdychane powietrze przepływa kolejno przez jamę nosową, gardło, krtań, tchawicę, oskrzela i oskrzeliki, po czym dociera do pęcherzyków płucnych.",
    "image": "r03_drogi_oddechowe.jpg"
  },
  {
    "id": "R03_BUD_03",
    "section": "Budowa układu oddechowego",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do górnych dróg oddechowych.",
    "options": [
      "jama nosowa",
      "jama ustna",
      "gardło",
      "krtań",
      "tchawica",
      "oskrzela"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do górnych dróg oddechowych należą jama nosowa, jama ustna i gardło. Krtań, tchawica, oskrzela i oskrzeliki tworzą dolne drogi oddechowe."
  },
  {
    "id": "R03_BUD_04",
    "section": "Budowa układu oddechowego",
    "type": "true_false",
    "prompt": "Tchawica jest długą, elastyczną rurką zbudowaną z chrząstek.",
    "options": null,
    "answer": true,
    "explanation": "Tchawica jest długą, elastyczną rurką zbudowaną z chrząstek."
  },
  {
    "id": "R03_BUD_05",
    "section": "Budowa układu oddechowego",
    "type": "match",
    "prompt": "Połącz element układu oddechowego z jego opisem.",
    "options": null,
    "left": [
      "jama nosowa",
      "tchawica",
      "oskrzela",
      "oskrzeliki"
    ],
    "right": [
      "wyścielona błoną śluzową ze śluzem i rzęskami",
      "długa elastyczna rurka z chrząstek",
      "dwa rozgałęzienia tchawicy prowadzące do płuc",
      "liczne rozgałęzienia oskrzeli tworzące drzewo oskrzelowe"
    ],
    "answer": {
      "jama nosowa": "wyścielona błoną śluzową ze śluzem i rzęskami",
      "tchawica": "długa elastyczna rurka z chrząstek",
      "oskrzela": "dwa rozgałęzienia tchawicy prowadzące do płuc",
      "oskrzeliki": "liczne rozgałęzienia oskrzeli tworzące drzewo oskrzelowe"
    },
    "explanation": "Jama nosowa ma błonę śluzową ze śluzem i rzęskami; tchawica jest elastyczną rurką z chrząstek; oskrzela są dwoma odgałęzieniami tchawicy, a oskrzeliki ich licznymi rozgałęzieniami."
  },
  {
    "id": "R03_BUD_06",
    "section": "Budowa układu oddechowego",
    "type": "fill_in",
    "prompt": "Powietrze z tchawicy trafia do __________, następnie do __________, a stamtąd do pęcherzyków płucnych.",
    "options": null,
    "answer": [
      "oskrzeli",
      "oskrzelików"
    ],
    "altAnswers": [
      [
        "oskrzeli",
        "oskrzela"
      ],
      [
        "oskrzelików",
        "oskrzeliki"
      ]
    ],
    "explanation": "Tchawica rozdziela się na oskrzela, które dalej rozgałęziają się w oskrzeliki prowadzące do pęcherzyków płucnych.",
    "image": "r03_drogi_oddechowe.jpg"
  },
  {
    "id": "R03_BUD_07",
    "section": "Budowa układu oddechowego",
    "type": "riddle",
    "prompt": "Jest mięśniem w kształcie kopuły położonym tuż pod płucami. Jego skurcz umożliwia wdech. Co to jest?",
    "options": null,
    "answer": "przepona",
    "altAnswers": [
      "przepona",
      "przeponą"
    ],
    "explanation": "Przepona leży tuż pod płucami. Jej skurcz pomaga zwiększyć objętość klatki piersiowej podczas wdechu."
  },
  {
    "id": "R03_BUD_08",
    "section": "Budowa układu oddechowego",
    "type": "single_choice",
    "prompt": "Z czego zbudowana jest ściana pęcherzyka płucnego?",
    "options": [
      "Z jednej warstwy nabłonka płaskiego",
      "Z wielu warstw chrząstki",
      "Z tkanki kostnej",
      "Z grubej warstwy mięśniowej",
      "Z warstwy tłuszczowej",
      "Z kilku warstw naskórka"
    ],
    "answer": 0,
    "explanation": "Pęcherzyki płucne są zbudowane z jednej warstwy nabłonka płaskiego i są oplecione siecią naczyń włosowatych.",
    "image": "r03_pecherzyki_plucne.jpg"
  },
  {
    "id": "R03_BUD_09",
    "section": "Budowa układu oddechowego",
    "type": "true_false",
    "prompt": "Podczas przełykania nagłośnia zamyka wejście do dróg oddechowych.",
    "options": null,
    "answer": true,
    "explanation": "Na czas przełykania nagłośnia działa jak klapka i zamyka wejście do dróg oddechowych, aby nie dostało się tam jedzenie.",
    "image": "r03_naglosnia.jpg"
  },
  {
    "id": "R03_BUD_10",
    "section": "Budowa układu oddechowego",
    "type": "scenario",
    "prompt": "Uczeń mówi podczas przełykania kęsa jedzenia. Dlaczego taka sytuacja zwiększa ryzyko zadławienia?",
    "options": [
      "Kęs może zablokować drogę do płuc",
      "Przepona przestaje pracować na kilka minut",
      "Tchawica zamienia się w przełyk",
      "Pęcherzyki płucne wypełniają się wodą",
      "Oskrzela całkowicie się zamykają podczas mówienia",
      "Krew przestaje przepływać przez płuca"
    ],
    "answer": 0,
    "explanation": "Drogi oddechowe i przewód pokarmowy łączą się w gardle. Podczas przełykania nagłośnia powinna zamknąć wejście do dróg oddechowych; kęs, który tam trafi, może zablokować drogę do płuc.",
    "image": "r03_naglosnia.jpg"
  },
  {
    "id": "R03_WEN_01",
    "section": "Wentylacja płuc",
    "type": "single_choice",
    "prompt": "Co dzieje się z przeponą podczas wdechu?",
    "options": [
      "Kurczy się i obniża",
      "Rozluźnia się i unosi",
      "Nie zmienia położenia",
      "Kurczy się i unosi",
      "Rozluźnia się i obniża",
      "Zamyka krtań"
    ],
    "answer": 0,
    "explanation": "Podczas wdechu przepona kurczy się i obniża, a żebra unoszą się, dzięki czemu zwiększa się objętość klatki piersiowej.",
    "image": "r03_wdech_wydech.jpg"
  },
  {
    "id": "R03_WEN_02",
    "section": "Wentylacja płuc",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia zachodzące podczas wdechu w kolejności przyczynowo-skutkowej.",
    "options": null,
    "items": [
      "powietrze zostaje wciągnięte do płuc",
      "zwiększa się objętość klatki piersiowej",
      "kurczą się mięśnie międzyżebrowe i przepona",
      "obniża się ciśnienie powietrza w płucach",
      "żebra unoszą się a przepona obniża"
    ],
    "answer": [
      "kurczą się mięśnie międzyżebrowe i przepona",
      "żebra unoszą się a przepona obniża",
      "zwiększa się objętość klatki piersiowej",
      "obniża się ciśnienie powietrza w płucach",
      "powietrze zostaje wciągnięte do płuc"
    ],
    "explanation": "Skurcz mięśni międzyżebrowych i przepony zwiększa objętość klatki piersiowej. Ciśnienie w płucach spada, dlatego powietrze napływa z zewnątrz."
  },
  {
    "id": "R03_WEN_03",
    "section": "Wentylacja płuc",
    "type": "true_false",
    "prompt": "Wentylacja płuc to wymiana powietrza między płucami a otoczeniem.",
    "options": null,
    "answer": true,
    "explanation": "Wentylacja płuc polega na naprzemiennym wdechu i wydechu, czyli wymianie powietrza między płucami a otoczeniem."
  },
  {
    "id": "R03_WEN_04",
    "section": "Wentylacja płuc",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do wdechu albo wydechu.",
    "options": null,
    "items": [
      "skurcz przepony",
      "żebra unoszą się",
      "większa objętość klatki piersiowej",
      "niższe ciśnienie w płucach",
      "rozluźnienie mięśni oddechowych",
      "mniejsza objętość klatki piersiowej",
      "wypchnięcie powietrza z płuc"
    ],
    "categories": [
      "wdech",
      "wydech"
    ],
    "answer": {
      "wdech": [
        "skurcz przepony",
        "żebra unoszą się",
        "większa objętość klatki piersiowej",
        "niższe ciśnienie w płucach"
      ],
      "wydech": [
        "rozluźnienie mięśni oddechowych",
        "mniejsza objętość klatki piersiowej",
        "wypchnięcie powietrza z płuc"
      ]
    },
    "explanation": "Wdech jest skutkiem skurczu mięśni oddechowych i zwiększenia objętości klatki piersiowej. Przy wydechu mięśnie się rozluźniają, objętość klatki maleje i powietrze jest wypychane.",
    "image": "r03_wdech_wydech.jpg"
  },
  {
    "id": "R03_WEN_05",
    "section": "Wentylacja płuc",
    "type": "fill_in",
    "prompt": "Wdech jest możliwy dzięki skurczowi mięśni __________ oraz __________.",
    "options": null,
    "answer": [
      "międzyżebrowych",
      "przepony"
    ],
    "altAnswers": [
      [
        "międzyżebrowych",
        "miedzyzebrowych"
      ],
      [
        "przepony",
        "przepona"
      ]
    ],
    "explanation": "Wentylację płuc umożliwiają mięśnie międzyżebrowe i przepona. Ich skurcz prowadzi do wdechu."
  },
  {
    "id": "R03_WEN_06",
    "section": "Wentylacja płuc",
    "type": "multi_select",
    "prompt": "Zaznacz skutki skurczu mięśni oddechowych podczas wdechu.",
    "options": [
      "zwiększenie objętości klatki piersiowej",
      "obniżenie ciśnienia powietrza w płucach",
      "wciągnięcie powietrza do płuc",
      "zmniejszenie objętości klatki piersiowej",
      "wypchnięcie powietrza z płuc",
      "uniesienie przepony"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Skurcz mięśni międzyżebrowych i przepony zwiększa objętość klatki piersiowej, obniża ciśnienie w płucach i powoduje napływ powietrza.",
    "image": "r03_wdech_wydech.jpg"
  },
  {
    "id": "R03_WEN_07",
    "section": "Wentylacja płuc",
    "type": "riddle",
    "prompt": "Jak nazywa się proces obejmujący wdechy i wydechy, dzięki któremu powietrze jest wymieniane między płucami a otoczeniem?",
    "options": null,
    "answer": "wentylacja płuc",
    "altAnswers": [
      "wentylacja płuc",
      "wentylacja pluc",
      "wentylacja"
    ],
    "explanation": "Proces wdechów i wydechów nazywa się wentylacją płuc."
  },
  {
    "id": "R03_WEN_08",
    "section": "Wentylacja płuc",
    "type": "true_false",
    "prompt": "Wentylacja płuc przebiega automatycznie i jest procesem niezależnym od woli.",
    "options": null,
    "answer": true,
    "explanation": "Wdychanie i wydychanie powietrza jest procesem niezależnym od woli; jego tempo może się zmieniać zależnie od zawartości dwutlenku węgla we krwi."
  },
  {
    "id": "R03_WEN_09",
    "section": "Wentylacja płuc",
    "type": "scenario",
    "prompt": "W modelu płuc z butelki pociągnięto gumową rękawiczkę zamykającą dół butelki w dół, a balon wewnątrz zaczął napełniać się powietrzem. Jaki proces i jaki mięsień naśladuje ten ruch?",
    "options": [
      "Wdech i pracę przepony",
      "Wydech i pracę przepony",
      "Wdech i pracę nagłośni",
      "Wydech i pracę tchawicy",
      "Wymianę gazową i pracę oskrzeli",
      "Oddychanie komórkowe i pracę mięśni międzyżebrowych"
    ],
    "answer": 0,
    "explanation": "Pociągnięcie rękawiczki w dół zwiększa przestrzeń wewnątrz modelu, dlatego balon napełnia się powietrzem. Rękawiczka jest odpowiednikiem przepony, a sytuacja naśladuje wdech.",
    "image": "r03_model_pluc.jpg"
  },
  {
    "id": "R03_WEN_10",
    "section": "Wentylacja płuc",
    "type": "odd_one_out",
    "prompt": "Wskaż zdarzenie, które nie pasuje do wdechu: skurcz przepony, uniesienie żeber, spadek ciśnienia w płucach, wypchnięcie powietrza z płuc.",
    "options": null,
    "answer": "wypchnięcie powietrza z płuc",
    "explanation": "Wypchnięcie powietrza z płuc zachodzi podczas wydechu. Pozostałe zjawiska dotyczą wdechu."
  },
  {
    "id": "R03_GAZ_01",
    "section": "Wymiana gazowa",
    "type": "single_choice",
    "prompt": "Jaka jest przybliżona zawartość tlenu w powietrzu wdychanym?",
    "options": [
      "21%",
      "16%",
      "78%",
      "5,04%",
      "0,04%",
      "0,96%"
    ],
    "answer": 0,
    "explanation": "Na wykresie składu powietrza wdychanego tlen stanowi około 21%.",
    "image": "r03_sklad_powietrza.jpg"
  },
  {
    "id": "R03_GAZ_02",
    "section": "Wymiana gazowa",
    "type": "single_choice",
    "prompt": "Jaka jest przybliżona zawartość tlenu w powietrzu wydychanym?",
    "options": [
      "16%",
      "21%",
      "78%",
      "5,04%",
      "0,04%",
      "0,96%"
    ],
    "answer": 0,
    "explanation": "Powietrze wydychane zawiera około 16% tlenu, czyli mniej niż powietrze wdychane.",
    "image": "r03_sklad_powietrza.jpg"
  },
  {
    "id": "R03_GAZ_03",
    "section": "Wymiana gazowa",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe porównania powietrza wydychanego z wdychanym.",
    "options": [
      "zawiera mniej tlenu",
      "zawiera więcej dwutlenku węgla",
      "zawiera więcej pary wodnej",
      "zawiera taki sam odsetek azotu (78%)",
      "zawiera więcej tlenu",
      "zawiera mniej dwutlenku węgla"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Powietrze wydychane ma mniej tlenu, więcej dwutlenku węgla i pary wodnej. Azot stanowi około 78% zarówno w powietrzu wdychanym, jak i wydychanym."
  },
  {
    "id": "R03_GAZ_04",
    "section": "Wymiana gazowa",
    "type": "sort",
    "prompt": "Przyporządkuj kierunki przemieszczania gazów do miejsca wymiany gazowej.",
    "options": null,
    "items": [
      "tlen z pęcherzyków płucnych do krwi",
      "dwutlenek węgla z krwi do pęcherzyków płucnych",
      "tlen z krwi do komórek ciała",
      "dwutlenek węgla z komórek ciała do krwi"
    ],
    "categories": [
      "w płucach",
      "w tkankach"
    ],
    "answer": {
      "w płucach": [
        "tlen z pęcherzyków płucnych do krwi",
        "dwutlenek węgla z krwi do pęcherzyków płucnych"
      ],
      "w tkankach": [
        "tlen z krwi do komórek ciała",
        "dwutlenek węgla z komórek ciała do krwi"
      ]
    },
    "explanation": "W płucach tlen przechodzi do krwi, a dwutlenek węgla do pęcherzyków. W tkankach tlen przechodzi z krwi do komórek, a dwutlenek węgla z komórek do krwi.",
    "image": "r03_wymiana_gazowa.jpg"
  },
  {
    "id": "R03_GAZ_05",
    "section": "Wymiana gazowa",
    "type": "true_false",
    "prompt": "Pęcherzyki płucne są oplecione siecią naczyń włosowatych.",
    "options": null,
    "answer": true,
    "explanation": "Pęcherzyki płucne są otoczone siecią naczyń włosowatych, co umożliwia wymianę gazową między powietrzem a krwią.",
    "image": "r03_pecherzyki_plucne.jpg"
  },
  {
    "id": "R03_GAZ_06",
    "section": "Wymiana gazowa",
    "type": "fill_in",
    "prompt": "W płucach tlen przenika z __________ do __________, a dwutlenek węgla z __________ do __________.",
    "options": null,
    "answer": [
      "pęcherzyków płucnych",
      "krwi",
      "krwi",
      "pęcherzyków płucnych"
    ],
    "altAnswers": [
      [
        "pęcherzyków płucnych",
        "pecherzykow plucnych",
        "pęcherzyków"
      ],
      [
        "krwi",
        "krew"
      ],
      [
        "krwi",
        "krew"
      ],
      [
        "pęcherzyków płucnych",
        "pecherzykow plucnych",
        "pęcherzyków"
      ]
    ],
    "explanation": "Wymiana gazowa w płucach przebiega w przeciwnych kierunkach: tlen przechodzi z pęcherzyków do krwi, a dwutlenek węgla z krwi do pęcherzyków."
  },
  {
    "id": "R03_GAZ_07",
    "section": "Wymiana gazowa",
    "type": "riddle",
    "prompt": "Jaki gaz powstaje w procesie oddychania komórkowego, trafia z komórek do krwi, a następnie jest usuwany przez płuca?",
    "options": null,
    "answer": "dwutlenek węgla",
    "altAnswers": [
      "dwutlenek węgla",
      "CO2",
      "co2",
      "dwutlenek wegla"
    ],
    "explanation": "Dwutlenek węgla powstaje podczas oddychania komórkowego. Z komórek przechodzi do krwi, a w płucach z krwi do pęcherzyków płucnych."
  },
  {
    "id": "R03_GAZ_08",
    "section": "Wymiana gazowa",
    "type": "single_choice",
    "prompt": "Dlaczego cienkie ściany pęcherzyków płucnych i naczyń włosowatych są ważne dla wymiany gazowej?",
    "options": [
      "Gazy mogą przez nie przenikać między powietrzem a krwią",
      "Zatrzymują całkowicie tlen w pęcherzykach",
      "Wytwarzają dwutlenek węgla",
      "Pompują krew jak serce",
      "Magazynują tlen na wiele godzin",
      "Zamykają drogi oddechowe podczas przełykania"
    ],
    "answer": 0,
    "explanation": "Wymiana gazowa polega na przenikaniu gazów przez cienkie ściany pęcherzyków płucnych i naczyń włosowatych.",
    "image": "r03_wymiana_gazowa.jpg"
  },
  {
    "id": "R03_GAZ_09",
    "section": "Wymiana gazowa",
    "type": "scenario",
    "prompt": "Po chuchnięciu na lusterko pojawiła się cienka wilgotna warstwa. Obecność czego w wydychanym powietrzu pokazuje to doświadczenie?",
    "options": [
      "Pary wodnej",
      "Azotu",
      "Smoły",
      "Tlenu w większej ilości niż przy wdechu",
      "Pyłu zawieszonego",
      "Nikotyny"
    ],
    "answer": 0,
    "explanation": "Wilgotna warstwa powstaje z pary wodnej obecnej w wydychanym powietrzu."
  },
  {
    "id": "R03_GAZ_10",
    "section": "Wymiana gazowa",
    "type": "odd_one_out",
    "prompt": "Wskaż kierunek, który nie pasuje do prawidłowej wymiany gazowej: tlen z pęcherzyków do krwi, dwutlenek węgla z krwi do pęcherzyków, tlen z krwi do komórek, dwutlenek węgla z krwi do komórek.",
    "options": null,
    "answer": "dwutlenek węgla z krwi do komórek",
    "explanation": "W tkankach dwutlenek węgla przemieszcza się z komórek do krwi, a nie z krwi do komórek."
  },
  {
    "id": "R03_CHO_01",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz działania pomagające chronić układ oddechowy przed infekcjami i innymi zagrożeniami.",
    "options": [
      "regularne mycie rąk",
      "unikanie kontaktu z osobami chorymi",
      "dbanie o odporność przez zdrowe odżywianie i ruch",
      "unikanie dymu papierosowego",
      "częste przebywanie w mocno zanieczyszczonym powietrzu",
      "ignorowanie szczepień ochronnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyka obejmuje między innymi mycie rąk, unikanie osób chorych, dbanie o odporność, szczepienia oraz unikanie dymu tytoniowego i zanieczyszczonego powietrza."
  },
  {
    "id": "R03_CHO_02",
    "section": "Choroby i profilaktyka",
    "type": "single_choice",
    "prompt": "Co najczęściej wywołuje anginę ropną u dzieci?",
    "options": [
      "Bakterie z rodzaju paciorkowców",
      "Prątki gruźlicy",
      "Smoła z dymu tytoniowego",
      "Pył zawieszony",
      "Tlenek węgla",
      "Alergeny roślinne"
    ],
    "answer": 0,
    "explanation": "Angina może być wywoływana przez wirusy lub bakterie, a u dzieci anginę ropną najczęściej powodują bakterie z rodzaju paciorkowców.",
    "image": "r03_angina_migdalki.jpg"
  },
  {
    "id": "R03_CHO_03",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz typowe objawy anginy.",
    "options": [
      "silny ból gardła szczególnie przy przełykaniu",
      "gorączka i dreszcze",
      "powiększone czerwone migdałki z białym nalotem",
      "kaszel trwający ponad 3 tygodnie",
      "krwioplucie",
      "utrata masy ciała bez wyraźnego powodu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do objawów anginy należą silny ból gardła, zwłaszcza przy przełykaniu, gorączka i dreszcze oraz powiększone, czerwone migdałki pokryte białym nalotem.",
    "image": "r03_angina_migdalki.jpg"
  },
  {
    "id": "R03_CHO_04",
    "section": "Choroby i profilaktyka",
    "type": "single_choice",
    "prompt": "Który czynnik często sprzyja rozwojowi raka płuc?",
    "options": [
      "Długotrwałe palenie papierosów",
      "Picie dużej ilości wody",
      "Krótki spacer",
      "Oddychanie przez nos",
      "Jedzenie warzyw i owoców",
      "Szczepienie przeciw gruźlicy"
    ],
    "answer": 0,
    "explanation": "Rak płuc może rozwijać się przez długi czas, często w wyniku długotrwałego palenia papierosów lub wdychania szkodliwych substancji, na przykład zanieczyszczeń powietrza.",
    "image": "r03_rak_pluc.jpg"
  },
  {
    "id": "R03_CHO_05",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz typowe objawy raka płuc.",
    "options": [
      "kaszel który nie ustępuje",
      "duszności i ból w klatce piersiowej",
      "utrata wagi bez wyraźnego powodu",
      "biały nalot na migdałkach",
      "katar przez jeden dzień",
      "ból gardła tylko podczas przełykania"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wśród wymienionych objawów raka płuc są uporczywy kaszel, duszności i ból w klatce piersiowej oraz utrata wagi bez wyraźnego powodu.",
    "image": "r03_rak_pluc.jpg"
  },
  {
    "id": "R03_CHO_06",
    "section": "Choroby i profilaktyka",
    "type": "single_choice",
    "prompt": "Co wywołuje gruźlicę?",
    "options": [
      "Bakterie zwane prątkami gruźlicy",
      "Paciorkowce wywołujące anginę",
      "Sama mgła",
      "Nikotyna",
      "Niedobór pary wodnej",
      "Zbyt częste wdechy"
    ],
    "answer": 0,
    "explanation": "Gruźlica jest chorobą wywoływaną przez bakterie nazywane prątkami gruźlicy.",
    "image": "r03_pluca_gruzlica.jpg"
  },
  {
    "id": "R03_CHO_07",
    "section": "Choroby i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz typowe objawy gruźlicy.",
    "options": [
      "kaszel trwający ponad 3 tygodnie z odkrztuszaniem wydzieliny",
      "gorączka i nocne poty",
      "osłabienie i brak apetytu",
      "krwioplucie",
      "powiększone migdałki z białym nalotem",
      "wyłącznie krótki katar"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Gruźlica może powodować długotrwały kaszel z odkrztuszaniem, gorączkę i nocne poty, osłabienie, brak apetytu, krwioplucie i inne objawy ogólne.",
    "image": "r03_pluca_gruzlica.jpg"
  },
  {
    "id": "R03_CHO_08",
    "section": "Choroby i profilaktyka",
    "type": "true_false",
    "prompt": "Gruźlica może przenosić się drogą kropelkową, gdy osoba chora kaszle, kicha lub mówi.",
    "options": null,
    "answer": true,
    "explanation": "Gruźlica przenosi się drogą kropelkową, gdy osoba chora kaszle, kicha lub mówi."
  },
  {
    "id": "R03_CHO_09",
    "section": "Choroby i profilaktyka",
    "type": "fill_in",
    "prompt": "W Polsce szczepienie przeciwko gruźlicy jest __________ i wykonuje się je przed __________ noworodka ze szpitala.",
    "options": null,
    "answer": [
      "obowiązkowe",
      "wypisaniem"
    ],
    "altAnswers": [
      [
        "obowiązkowe",
        "obowiazkowe"
      ],
      [
        "wypisaniem",
        "wypisem"
      ]
    ],
    "explanation": "Szczepienie przeciwko gruźlicy jest w Polsce obowiązkowe i wykonuje się je przed wypisaniem noworodka ze szpitala."
  },
  {
    "id": "R03_CHO_10",
    "section": "Choroby i profilaktyka",
    "type": "sort",
    "prompt": "Przyporządkuj objawy do chorób.",
    "options": null,
    "items": [
      "silny ból gardła przy przełykaniu",
      "migdałki z białym nalotem",
      "kaszel ponad 3 tygodnie z odkrztuszaniem",
      "nocne poty",
      "kaszel który nie ustępuje",
      "utrata wagi bez wyraźnego powodu"
    ],
    "categories": [
      "angina",
      "gruźlica",
      "rak płuc"
    ],
    "answer": {
      "angina": [
        "silny ból gardła przy przełykaniu",
        "migdałki z białym nalotem"
      ],
      "gruźlica": [
        "kaszel ponad 3 tygodnie z odkrztuszaniem",
        "nocne poty"
      ],
      "rak płuc": [
        "kaszel który nie ustępuje",
        "utrata wagi bez wyraźnego powodu"
      ]
    },
    "explanation": "Angina dotyczy gardła i migdałków, gruźlica może powodować ponad trzytygodniowy kaszel i nocne poty, a rak płuc może dawać uporczywy kaszel i niewyjaśnioną utratę wagi."
  },
  {
    "id": "R03_SZK_01",
    "section": "Palenie i zanieczyszczenia",
    "type": "single_choice",
    "prompt": "Jak działa nikotyna zawarta w dymie papierosowym?",
    "options": [
      "Uzależnia i przyspiesza pracę serca",
      "Ułatwia transport tlenu",
      "Usuwa smołę z płuc",
      "Zwiększa wymianę gazową",
      "Chroni przed rakiem płuc",
      "Neutralizuje metale ciężkie"
    ],
    "answer": 0,
    "explanation": "Nikotyna uzależnia i przyspiesza pracę serca.",
    "image": "r03_dym_papierosowy.jpg"
  },
  {
    "id": "R03_SZK_02",
    "section": "Palenie i zanieczyszczenia",
    "type": "match",
    "prompt": "Połącz składnik dymu papierosowego z jego działaniem.",
    "options": null,
    "left": [
      "substancje rakotwórcze",
      "smoła",
      "nikotyna",
      "tlenek węgla",
      "metale ciężkie"
    ],
    "right": [
      "zwiększają ryzyko raka płuc i innych chorób",
      "osadza się w płucach i utrudnia wymianę gazową",
      "uzależnia i przyspiesza pracę serca",
      "utrudnia transport tlenu w organizmie",
      "są toksyczne dla organizmu"
    ],
    "answer": {
      "substancje rakotwórcze": "zwiększają ryzyko raka płuc i innych chorób",
      "smoła": "osadza się w płucach i utrudnia wymianę gazową",
      "nikotyna": "uzależnia i przyspiesza pracę serca",
      "tlenek węgla": "utrudnia transport tlenu w organizmie",
      "metale ciężkie": "są toksyczne dla organizmu"
    },
    "explanation": "Dym papierosowy zawiera wiele szkodliwych substancji. Każda z wymienionych działa na organizm w inny niekorzystny sposób.",
    "image": "r03_dym_papierosowy.jpg"
  },
  {
    "id": "R03_SZK_03",
    "section": "Palenie i zanieczyszczenia",
    "type": "true_false",
    "prompt": "Bierne palenie to wdychanie dymu papierosowego przez osoby przebywające w pobliżu palacza.",
    "options": null,
    "answer": true,
    "explanation": "Bierne palenie dotyczy osób, które same nie palą, ale wdychają dym papierosowy w otoczeniu palacza.",
    "image": "r03_dym_papierosowy.jpg"
  },
  {
    "id": "R03_SZK_04",
    "section": "Palenie i zanieczyszczenia",
    "type": "multi_select",
    "prompt": "Zaznacz argumenty pokazujące, że e-papieros nie jest tylko nieszkodliwą parą wodną.",
    "options": [
      "zawiera nikotynę która uzależnia",
      "może zawierać glikol i glicerynę",
      "wpływ glikolu i gliceryny na organizm nie został zbadany",
      "nie zawiera żadnych substancji poza wodą",
      "nikotyna w e-papierosie nie uzależnia",
      "zawsze poprawia pracę płuc"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "E-papieros zawiera nikotynę, która uzależnia, a także inne substancje, na przykład glikol i glicerynę, których wpływ na organizm nie został zbadany.",
    "image": "r03_dym_papierosowy.jpg"
  },
  {
    "id": "R03_SZK_05",
    "section": "Palenie i zanieczyszczenia",
    "type": "riddle",
    "prompt": "Jak nazywa się palenie, gdy dana osoba sama pali papierosy?",
    "options": null,
    "answer": "czynne palenie",
    "altAnswers": [
      "czynne palenie",
      "palenie czynne"
    ],
    "explanation": "Czynne palenie oznacza, że ktoś sam pali papierosy."
  },
  {
    "id": "R03_SZK_06",
    "section": "Palenie i zanieczyszczenia",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest szkodliwym składnikiem dymu papierosowego: nikotyna, smoła, tlenek węgla, tlen.",
    "options": null,
    "answer": "tlen",
    "explanation": "Nikotyna, smoła i tlenek węgla są szkodliwymi składnikami dymu papierosowego. Tlen nie należy do tej grupy."
  },
  {
    "id": "R03_SZK_07",
    "section": "Palenie i zanieczyszczenia",
    "type": "single_choice",
    "prompt": "Jak powstaje smog?",
    "options": [
      "Gdy spaliny z samochodów fabryk i domów mieszają się z mgłą",
      "Gdy czyste powietrze miesza się wyłącznie z parą wodną",
      "Gdy tlen miesza się z azotem",
      "Gdy powietrze przechodzi przez jamę nosową",
      "Gdy w płucach zachodzi wymiana gazowa",
      "Gdy pada deszcz bez zanieczyszczeń"
    ],
    "answer": 0,
    "explanation": "Smog to zanieczyszczone powietrze powstające, gdy spaliny z samochodów, fabryk i domów mieszają się z mgłą.",
    "image": "r03_smog_miasto.jpg"
  },
  {
    "id": "R03_SZK_08",
    "section": "Palenie i zanieczyszczenia",
    "type": "multi_select",
    "prompt": "Zaznacz możliwe skutki wdychania zanieczyszczeń pyłowych.",
    "options": [
      "podrażnienie dróg oddechowych i kaszel",
      "zmniejszenie ilości tlenu pobieranego przez organizm",
      "poważne choroby płuc takie jak astma",
      "natychmiastowe zwiększenie pojemności płuc",
      "oczyszczanie oskrzeli z pyłu",
      "zwiększenie transportu tlenu przez tlenek węgla"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Zanieczyszczenia pyłowe mogą podrażniać drogi oddechowe i wywoływać kaszel, zmniejszać ilość tlenu pobieranego przez organizm oraz prowadzić do poważnych chorób płuc, na przykład astmy.",
    "image": "r03_smog_miasto.jpg"
  },
  {
    "id": "R03_SZK_09",
    "section": "Palenie i zanieczyszczenia",
    "type": "true_false",
    "prompt": "W Polsce najwięcej smogu jest w miastach, zwłaszcza zimą, gdy ludzie palą w piecach, ogrzewając domy.",
    "options": null,
    "answer": true,
    "explanation": "Smog jest szczególnie częsty w miastach zimą, gdy do zanieczyszczeń komunikacyjnych i przemysłowych dochodzą spaliny z ogrzewania domów.",
    "image": "r03_smog_miasto.jpg"
  },
  {
    "id": "R03_SZK_10",
    "section": "Palenie i zanieczyszczenia",
    "type": "scenario",
    "prompt": "Otrzymujesz ostrzeżenie o bardzo złej jakości powietrza. Które zachowanie najlepiej odpowiada zasadom ochrony układu oddechowego?",
    "options": [
      "Nie wychodzić bez potrzeby nie otwierać okien i w razie konieczności użyć maski antysmogowej",
      "Otworzyć wszystkie okna i ćwiczyć intensywnie na zewnątrz",
      "Palić papierosy tylko przy zamkniętym oknie",
      "Spędzić jak najwięcej czasu przy ruchliwej ulicy",
      "Zrezygnować z mycia rąk",
      "Oddychać wyłącznie przez usta"
    ],
    "answer": 0,
    "explanation": "Przy ostrzeżeniu o mocno zanieczyszczonym powietrzu zaleca się nie wychodzić bez potrzeby, nie otwierać okien i używać masek antysmogowych.",
    "image": "r03_smog_miasto.jpg"
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż drogę tlenu od kontaktu powietrza z płucami do jego wykorzystania w komórce.",
    "options": null,
    "items": [
      "tlen jest zużywany w oddychaniu komórkowym",
      "tlen przechodzi z krwi do komórek",
      "wentylacja doprowadza świeże powietrze do płuc",
      "tlen przechodzi z pęcherzyków płucnych do krwi"
    ],
    "answer": [
      "wentylacja doprowadza świeże powietrze do płuc",
      "tlen przechodzi z pęcherzyków płucnych do krwi",
      "tlen przechodzi z krwi do komórek",
      "tlen jest zużywany w oddychaniu komórkowym"
    ],
    "explanation": "Najpierw wentylacja doprowadza powietrze do płuc. Potem tlen przechodzi do krwi, z krwi do komórek i jest zużywany w oddychaniu komórkowym.",
    "image": "r03_drogi_oddechowe.jpg"
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W szczelnym modelu płuc pociągnięto elastyczną błonę na dole butelki w dół. Który opis najlepiej wyjaśnia napełnienie balonu powietrzem?",
    "options": [
      "Zwiększyła się objętość wnętrza modelu spadło ciśnienie i powietrze napłynęło do balonu",
      "Zmniejszyła się objętość wnętrza modelu wzrosło ciśnienie i powietrze napłynęło do balonu",
      "Błona zamknęła słomkę i zatrzymała powietrze",
      "Balon sam wytworzył tlen",
      "Wzrosło ciśnienie na zewnątrz butelki bez zmiany jej objętości",
      "Ruch błony naśladował zamknięcie nagłośni"
    ],
    "answer": 0,
    "explanation": "Pociągnięcie błony w dół naśladuje skurcz i obniżenie przepony. Zwiększenie objętości powoduje spadek ciśnienia, dlatego powietrze jest zasysane do balonu.",
    "image": "r03_model_pluc.jpg"
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw danych o pęcherzykach płucnych jest prawidłowy?",
    "options": [
      "około 300-500 mln pęcherzyków i do 0,6 mm średnicy",
      "około 30-50 mln pęcherzyków i do 6 mm średnicy",
      "około 3-5 mln pęcherzyków i do 0,06 mm średnicy",
      "około 700-900 mln pęcherzyków i do 6 cm średnicy",
      "około 300-500 tys. pęcherzyków i do 6 mm średnicy",
      "około 30-50 tys. pęcherzyków i do 0,6 cm średnicy"
    ],
    "answer": 0,
    "explanation": "Płuca zawierają około 300-500 mln pęcherzyków płucnych, a pojedynczy pęcherzyk ma do około 0,6 mm średnicy.",
    "image": "r03_pecherzyki_plucne.jpg"
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wszystkie informacje, które razem opisują warunki wymiany gazowej w płucach.",
    "options": [
      "pęcherzyki są zbudowane z jednej warstwy nabłonka płaskiego",
      "pęcherzyki są oplecione siecią naczyń włosowatych",
      "tlen przenika z pęcherzyków do krwi",
      "dwutlenek węgla przenika z krwi do pęcherzyków",
      "tlen przenika z krwi do pęcherzyków",
      "dwutlenek węgla przenika z pęcherzyków do krwi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Cienka ściana pęcherzyków oraz sieć naczyń włosowatych umożliwiają przenikanie tlenu do krwi i dwutlenku węgla z krwi do pęcherzyków.",
    "image": "r03_wymiana_gazowa.jpg"
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na wykresach powietrze wdychane zawiera około __________ tlenu i __________ dwutlenku węgla, a wydychane około __________ tlenu i __________ dwutlenku węgla.",
    "options": null,
    "answer": [
      "21%",
      "0,04%",
      "16%",
      "5,04%"
    ],
    "altAnswers": [
      [
        "21%",
        "21 %",
        "21"
      ],
      [
        "0,04%",
        "0.04%",
        "0,04"
      ],
      [
        "16%",
        "16 %",
        "16"
      ],
      [
        "5,04%",
        "5.04%",
        "5,04"
      ]
    ],
    "explanation": "Powietrze wdychane zawiera około 21% tlenu i 0,04% dwutlenku węgla, a wydychane około 16% tlenu i 5,04% dwutlenku węgla.",
    "image": "r03_sklad_powietrza.jpg"
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Na wykresach składu powietrza nie uwzględniono pary wodnej, ponieważ jej ilość jest zmienna i w wilgotnych strefach może sięgać około 4%.",
    "options": null,
    "answer": true,
    "explanation": "Para wodna jest zmiennym składnikiem powietrza zależnym od klimatu i środowiska, dlatego nie została uwzględniona na wykresach; w wilgotnych strefach może sięgać około 4%."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zagrożenie lub chorobę z odpowiednim działaniem profilaktycznym.",
    "options": null,
    "left": [
      "gruźlica",
      "angina",
      "rak płuc",
      "mocno zanieczyszczone powietrze"
    ],
    "right": [
      "szczepienie oraz higiena",
      "mycie rąk i unikanie chorych",
      "niepalenie i unikanie dymu tytoniowego",
      "ograniczenie wychodzenia i użycie maski antysmogowej"
    ],
    "answer": {
      "gruźlica": "szczepienie oraz higiena",
      "angina": "mycie rąk i unikanie chorych",
      "rak płuc": "niepalenie i unikanie dymu tytoniowego",
      "mocno zanieczyszczone powietrze": "ograniczenie wychodzenia i użycie maski antysmogowej"
    },
    "explanation": "Szczepienie jest podstawową metodą zapobiegania gruźlicy; przy anginie ważna jest higiena i unikanie chorych; ryzyko raka płuc zmniejsza unikanie palenia, a przy złej jakości powietrza należy ograniczać ekspozycję."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż działania pierwszej pomocy przy zadławieniu we właściwej kolejności.",
    "options": null,
    "items": [
      "zastosować 5 uciśnięć nad brzuchem chwytem Heimlicha",
      "mocno pochylić osobę do przodu głową w dół",
      "wezwać pomoc na przykład pod numer 112",
      "5 razy uderzyć między łopatkami"
    ],
    "answer": [
      "mocno pochylić osobę do przodu głową w dół",
      "5 razy uderzyć między łopatkami",
      "zastosować 5 uciśnięć nad brzuchem chwytem Heimlicha",
      "wezwać pomoc na przykład pod numer 112"
    ],
    "explanation": "Najpierw należy mocno pochylić osobę do przodu i 5 razy uderzyć między łopatkami. Jeśli to nie pomoże, zastosować 5 uciśnięć nad brzuchem chwytem Heimlicha i wezwać pomoc.",
    "image": "r03_pierwsza_pomoc_zadlawienie.jpg"
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw poprawnie przedstawia dane dotyczące gruźlicy na świecie w 2021 roku?",
    "options": [
      "około 10 mln zachorowań około 1,6 mln zgonów i około 3 mln niezdiagnozowanych przypadków",
      "około 1 mln zachorowań około 10 tys. zgonów i brak niezdiagnozowanych przypadków",
      "około 100 mln zachorowań około 16 mln zgonów i około 30 mln niezdiagnozowanych przypadków",
      "około 10 tys. zachorowań około 1,6 tys. zgonów i około 3 tys. niezdiagnozowanych przypadków",
      "około 3 mln zachorowań około 10 mln zgonów i około 1,6 mln niezdiagnozowanych przypadków",
      "około 1,6 mln zachorowań około 3 mln zgonów i około 10 mln niezdiagnozowanych przypadków"
    ],
    "answer": 0,
    "explanation": "W 2021 roku na gruźlicę zachorowało około 10 mln ludzi, zmarło około 1,6 mln, a u około 3 mln choroba prawdopodobnie nie została zdiagnozowana i leczona.",
    "image": "r03_pluca_gruzlica.jpg"
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż parę, która nie pasuje do pozostałych: smoła - utrudnia wymianę gazową, nikotyna - uzależnia, tlenek węgla - utrudnia transport tlenu, metale ciężkie - poprawiają pracę płuc.",
    "options": null,
    "answer": "metale ciężkie - poprawiają pracę płuc",
    "explanation": "Metale ciężkie są toksyczne dla organizmu. Pozostałe pary prawidłowo łączą składniki dymu papierosowego z ich działaniem."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "We krwi wzrasta zawartość dwutlenku węgla. Jak powinno zareagować tempo oddychania?",
    "options": [
      "Powinno wzrosnąć",
      "Powinno spaść do zera",
      "Nie może się zmienić",
      "Powinno zależeć wyłącznie od ilości azotu",
      "Powinno zatrzymać wydechy",
      "Powinno zamknąć nagłośnię"
    ],
    "answer": 0,
    "explanation": "Tempo wentylacji płuc rośnie wraz ze wzrostem zawartości dwutlenku węgla we krwi."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o zanieczyszczeniach powietrza i smogu.",
    "options": [
      "zanieczyszczenia pyłowe mogą podrażniać drogi oddechowe i wywoływać kaszel",
      "smog powstaje gdy spaliny mieszają się z mgłą",
      "w Polsce najwięcej smogu jest w miastach zwłaszcza zimą",
      "w Londynie w 1952 roku smog ograniczył widoczność do kilku metrów i tysiące osób zachorowało na poważne choroby płuc",
      "zanieczyszczenia pyłowe zwiększają ilość tlenu pobieranego przez organizm",
      "smog jest mieszaniną wyłącznie tlenu i azotu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zanieczyszczenia pyłowe szkodzą drogom oddechowym. Smog powstaje z mieszaniny spalin i mgły, w Polsce nasila się w miastach zimą, a londyński smog z 1952 roku ograniczył widoczność i spowodował liczne zachorowania.",
    "image": "r03_smog_miasto.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Układ oddechowy",
  icon: "🫁",
  sectionOrder: [
  "Budowa układu oddechowego",
  "Wentylacja płuc",
  "Wymiana gazowa",
  "Choroby i profilaktyka",
  "Palenie i zanieczyszczenia"
],
  sectionIcons: {
  "Budowa układu oddechowego": "🫁",
  "Wentylacja płuc": "🌬️",
  "Wymiana gazowa": "🩸",
  "Choroby i profilaktyka": "🛡️",
  "Palenie i zanieczyszczenia": "🚭"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
