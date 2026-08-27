// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BUD  = Budowa układu oddechowego
//   WEN  = Wentylacja płuc
//   WYM  = Wymiana gazowa
//   KOM  = Oddychanie komórkowe
//   HIG  = Higiena i choroby
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_BUD_01",
    "section": "Budowa układu oddechowego",
    "type": "single_choice",
    "prompt": "Z jakich dwóch głównych części jest zbudowany układ oddechowy?",
    "options": [
      "Z dróg oddechowych i płuc",
      "Z serca i naczyń krwionośnych",
      "Z jamy ustnej i przełyku",
      "Z płuc i nerek",
      "Z oskrzeli i jelit",
      "Z gardła i żołądka"
    ],
    "answer": 0,
    "explanation": "Układ oddechowy tworzą drogi oddechowe oraz płuca, w których zachodzi wymiana gazowa.",
    "image": "r05_uklad_oddechowy.jpg"
  },
  {
    "id": "R05_BUD_02",
    "section": "Budowa układu oddechowego",
    "type": "sequence",
    "prompt": "Ułóż pięć odcinków dróg oddechowych w kolejności, w jakiej przepływa przez nie wdychane powietrze.",
    "options": null,
    "items": [
      "tchawica",
      "jama nosowa",
      "oskrzela",
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
    "explanation": "Wdychane powietrze przechodzi kolejno przez jamę nosową, gardło, krtań, tchawicę i oskrzela.",
    "image": "r05_uklad_oddechowy.jpg"
  },
  {
    "id": "R05_BUD_03",
    "section": "Budowa układu oddechowego",
    "type": "match",
    "prompt": "Połącz element układu oddechowego z jego cechą lub funkcją.",
    "options": null,
    "left": [
      "jama nosowa",
      "gardło",
      "tchawica",
      "oskrzela",
      "nagłośnia"
    ],
    "right": [
      "początkowy odcinek dróg oddechowych",
      "wspólny odcinek dróg oddechowych i pokarmowych",
      "elastyczna rura wzmocniona chrząstkami",
      "rozgałęzienia tchawicy",
      "zamyka wejście do krtani podczas połykania"
    ],
    "answer": {
      "jama nosowa": "początkowy odcinek dróg oddechowych",
      "gardło": "wspólny odcinek dróg oddechowych i pokarmowych",
      "tchawica": "elastyczna rura wzmocniona chrząstkami",
      "oskrzela": "rozgałęzienia tchawicy",
      "nagłośnia": "zamyka wejście do krtani podczas połykania"
    },
    "explanation": "Każdy z tych elementów ma charakterystyczną budowę i pełni określoną funkcję w drogach oddechowych."
  },
  {
    "id": "R05_BUD_04",
    "section": "Budowa układu oddechowego",
    "type": "true_false",
    "prompt": "Nagłośnia zamyka wejście do krtani podczas połykania pokarmu.",
    "options": null,
    "answer": true,
    "explanation": "Nagłośnia jest chrząstką krtani, która podczas połykania zamyka wejście do krtani."
  },
  {
    "id": "R05_BUD_05",
    "section": "Budowa układu oddechowego",
    "type": "single_choice",
    "prompt": "Co znajduje się na końcach odgałęzień oskrzelików?",
    "options": [
      "Pęcherzyki płucne",
      "Zatoki przynosowe",
      "Fałdy głosowe",
      "Nagłośnia",
      "Migdałki",
      "Przepona"
    ],
    "answer": 0,
    "explanation": "Na końcach oskrzelików znajdują się pęcherzyki płucne, które tworzą dużą powierzchnię wymiany gazowej.",
    "image": "r05_pecherzyki_plucne.jpg"
  },
  {
    "id": "R05_BUD_06",
    "section": "Budowa układu oddechowego",
    "type": "fill_in",
    "prompt": "Prawe płuco składa się z __________ płatów, a lewe z __________ płatów.",
    "options": null,
    "answer": [
      "trzech",
      "dwóch"
    ],
    "altAnswers": [
      [
        "trzech",
        "3"
      ],
      [
        "dwóch",
        "2"
      ]
    ],
    "explanation": "Prawe płuco ma trzy płaty, a lewe dwa."
  },
  {
    "id": "R05_BUD_07",
    "section": "Budowa układu oddechowego",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje dróg oddechowych.",
    "options": [
      "Doprowadzanie powietrza do płuc",
      "Oczyszczanie powietrza",
      "Nawilżanie powietrza",
      "Ogrzewanie powietrza",
      "Pompowanie krwi",
      "Trawienie białek"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Drogi oddechowe doprowadzają powietrze do płuc, a po drodze je oczyszczają, nawilżają i ogrzewają."
  },
  {
    "id": "R05_BUD_08",
    "section": "Budowa układu oddechowego",
    "type": "single_choice",
    "prompt": "W której części krtani powstaje głos?",
    "options": [
      "W głośni",
      "W tchawicy",
      "W opłucnej",
      "W oskrzelikach",
      "W zatokach",
      "W pęcherzykach płucnych"
    ],
    "answer": 0,
    "explanation": "Głos powstaje w głośni. Przepływające powietrze wprawia fałdy głosowe w drgania.",
    "image": "r05_glosnia_faldy.jpg"
  },
  {
    "id": "R05_BUD_09",
    "section": "Budowa układu oddechowego",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do dróg oddechowych: jama nosowa, gardło, tchawica, pęcherzyk płucny.",
    "options": null,
    "answer": "pęcherzyk płucny",
    "explanation": "Pęcherzyki płucne należą do płuc i są miejscem wymiany gazowej; pozostałe elementy są odcinkami dróg oddechowych."
  },
  {
    "id": "R05_BUD_10",
    "section": "Budowa układu oddechowego",
    "type": "match",
    "prompt": "Połącz strukturę z opisem.",
    "options": null,
    "left": [
      "rzęski",
      "śluz",
      "opłucna",
      "fałdy głosowe"
    ],
    "right": [
      "przesuwają zanieczyszczenia w stronę gardła",
      "nawilża powietrze i ułatwia zatrzymywanie zanieczyszczeń",
      "cienka błona chroniąca płuca",
      "drgają pod wpływem wydychanego powietrza"
    ],
    "answer": {
      "rzęski": "przesuwają zanieczyszczenia w stronę gardła",
      "śluz": "nawilża powietrze i ułatwia zatrzymywanie zanieczyszczeń",
      "opłucna": "cienka błona chroniąca płuca",
      "fałdy głosowe": "drgają pod wpływem wydychanego powietrza"
    },
    "explanation": "Rzęski i śluz pomagają oczyszczać drogi oddechowe, opłucna chroni płuca, a fałdy głosowe uczestniczą w powstawaniu głosu."
  },
  {
    "id": "R05_WEN_01",
    "section": "Wentylacja płuc",
    "type": "true_false",
    "prompt": "Wentylacja płuc polega na naprzemiennych wdechach i wydechach i zachodzi niezależnie od woli człowieka.",
    "options": null,
    "answer": true,
    "explanation": "Wentylacja płuc to cykliczna wymiana powietrza w płucach dzięki kolejnym wdechom i wydechom; jej podstawowe tempo jest niezależne od woli."
  },
  {
    "id": "R05_WEN_02",
    "section": "Wentylacja płuc",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia zachodzące podczas wdechu w poprawnej kolejności.",
    "options": null,
    "items": [
      "zwiększa się objętość klatki piersiowej",
      "powietrze napływa do płuc",
      "przepona kurczy się i spłaszcza",
      "mięśnie międzyżebrowe kurczą się",
      "żebra unoszą się i rozsuwają na boki"
    ],
    "answer": [
      "mięśnie międzyżebrowe kurczą się",
      "żebra unoszą się i rozsuwają na boki",
      "przepona kurczy się i spłaszcza",
      "zwiększa się objętość klatki piersiowej",
      "powietrze napływa do płuc"
    ],
    "explanation": "Skurcz mięśni oddechowych zwiększa objętość klatki piersiowej, dzięki czemu płuca zasysają powietrze.",
    "image": "r05_wdech_wydech.jpg"
  },
  {
    "id": "R05_WEN_03",
    "section": "Wentylacja płuc",
    "type": "single_choice",
    "prompt": "Co dzieje się z przeponą podczas spokojnego wydechu?",
    "options": [
      "Rozkurcza się i uwypukla ku górze",
      "Kurczy się i spłaszcza",
      "Przesuwa się na boki",
      "Zamyka tchawicę",
      "Drga jak fałdy głosowe",
      "Nie zmienia położenia"
    ],
    "answer": 0,
    "explanation": "Podczas wydechu przepona się rozkurcza i uwypukla, a objętość klatki piersiowej maleje."
  },
  {
    "id": "R05_WEN_04",
    "section": "Wentylacja płuc",
    "type": "fill_in",
    "prompt": "Najważniejsze mięśnie oddechowe to mięśnie __________ oraz __________.",
    "options": null,
    "answer": [
      "międzyżebrowe",
      "przepona"
    ],
    "altAnswers": [
      [
        "międzyżebrowe",
        "mięśnie międzyżebrowe"
      ],
      [
        "przepona",
        "przepona"
      ]
    ],
    "explanation": "W wentylacji płuc najważniejszą rolę odgrywają mięśnie międzyżebrowe i przepona."
  },
  {
    "id": "R05_WEN_05",
    "section": "Wentylacja płuc",
    "type": "sort",
    "prompt": "Przyporządkuj zmiany do wdechu lub wydechu.",
    "options": null,
    "items": [
      "skurcz mięśni międzyżebrowych",
      "uniesienie żeber",
      "spłaszczenie przepony",
      "rozkurcz mięśni międzyżebrowych",
      "opadanie żeber",
      "uwypuklenie przepony"
    ],
    "categories": [
      "wdech",
      "wydech"
    ],
    "answer": {
      "wdech": [
        "skurcz mięśni międzyżebrowych",
        "uniesienie żeber",
        "spłaszczenie przepony"
      ],
      "wydech": [
        "rozkurcz mięśni międzyżebrowych",
        "opadanie żeber",
        "uwypuklenie przepony"
      ]
    },
    "explanation": "Wdech wiąże się ze skurczem mięśni oddechowych i zwiększeniem objętości klatki piersiowej, a wydech z ich rozkurczem i zmniejszeniem tej objętości.",
    "image": "r05_wdech_wydech.jpg"
  },
  {
    "id": "R05_WEN_06",
    "section": "Wentylacja płuc",
    "type": "scenario",
    "prompt": "Po intensywnym biegu uczeń oddycha znacznie częściej niż przed wysiłkiem. Które wyjaśnienie najlepiej opisuje przyczynę tej zmiany?",
    "options": [
      "Podczas wysiłku szybciej zużywany jest tlen i powstaje więcej dwutlenku węgla",
      "Podczas wysiłku płuca przestają zawierać azot",
      "Podczas wysiłku krew przestaje przepływać przez płuca",
      "Podczas wysiłku zamyka się nagłośnia",
      "Podczas wysiłku zmniejsza się zapotrzebowanie na energię",
      "Podczas wysiłku przepona przestaje pracować"
    ],
    "answer": 0,
    "explanation": "Wysiłek zwiększa zużycie tlenu i wytwarzanie dwutlenku węgla, dlatego wentylacja płuc staje się częstsza."
  },
  {
    "id": "R05_WEN_07",
    "section": "Wentylacja płuc",
    "type": "single_choice",
    "prompt": "Ile średnio wdechów i wydechów na minutę wykonuje dorosły człowiek podczas spoczynku?",
    "options": [
      "12",
      "2",
      "5",
      "25",
      "40",
      "60"
    ],
    "answer": 0,
    "explanation": "Podczas spoczynku dorosły człowiek wykonuje średnio około 12 wdechów i wydechów na minutę."
  },
  {
    "id": "R05_WEN_08",
    "section": "Wentylacja płuc",
    "type": "multi_select",
    "prompt": "Zaznacz sposoby, dzięki którym człowiek może w niewielkim stopniu wpływać na wentylację płuc.",
    "options": [
      "Wstrzymanie wydechu po głębokim wdechu",
      "Spowolnienie rozkurczu przepony",
      "Całkowite zatrzymanie pracy płuc na dowolnie długi czas",
      "Wyłączenie wymiany gazowej w pęcherzykach",
      "Zmiana szybkości wydechu"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Można na krótko wstrzymać wydech i kontrolować jego szybkość, między innymi przez spowalnianie rozkurczu przepony."
  },
  {
    "id": "R05_WEN_09",
    "section": "Wentylacja płuc",
    "type": "scenario",
    "prompt": "W doświadczeniu jedna grupa wykonuje 30 przysiadów, a druga w tym czasie odpoczywa. Która grupa jest próbą badawczą?",
    "options": [
      "Grupa wykonująca przysiady",
      "Grupa odpoczywająca",
      "Obie grupy jednocześnie są próbą kontrolną",
      "Żadna grupa",
      "Tylko osoby z najniższą częstością oddechu",
      "Tylko osoby z najwyższą częstością oddechu"
    ],
    "answer": 0,
    "explanation": "Próba badawcza jest poddawana badanemu czynnikowi, czyli wysiłkowi fizycznemu w postaci przysiadów."
  },
  {
    "id": "R05_WEN_10",
    "section": "Wentylacja płuc",
    "type": "true_false",
    "prompt": "Po spokojnym wydechu w płucach pozostaje pewna ilość powietrza.",
    "options": null,
    "answer": true,
    "explanation": "Pozostałe po wydechu powietrze umożliwia dalsze przenikanie tlenu do krwi i zapobiega zlepianiu się wilgotnych ścian pęcherzyków płucnych."
  },
  {
    "id": "R05_WYM_01",
    "section": "Wymiana gazowa",
    "type": "single_choice",
    "prompt": "Na czym polega dyfuzja gazów?",
    "options": [
      "Na przenikaniu cząsteczek ze środowiska o wyższym stężeniu do środowiska o niższym stężeniu",
      "Na aktywnym pompowaniu gazów przez przeponę",
      "Na rozkładaniu tlenu w mitochondriach",
      "Na ogrzewaniu powietrza w jamie nosowej",
      "Na wiązaniu dwutlenku węgla przez rzęski",
      "Na zamykaniu krtani przez nagłośnię"
    ],
    "answer": 0,
    "explanation": "Dyfuzja jest swobodnym przenikaniem cząsteczek zgodnie z różnicą stężeń - z miejsca o wyższym stężeniu do miejsca o niższym."
  },
  {
    "id": "R05_WYM_02",
    "section": "Wymiana gazowa",
    "type": "true_false",
    "prompt": "W pęcherzykach płucnych tlen przenika do krwi, a dwutlenek węgla z krwi do wnętrza pęcherzyków.",
    "options": null,
    "answer": true,
    "explanation": "Taki kierunek ruchu gazów wynika z różnic ich stężeń między powietrzem pęcherzykowym a krwią."
  },
  {
    "id": "R05_WYM_03",
    "section": "Wymiana gazowa",
    "type": "match",
    "prompt": "Połącz miejsce wymiany gazowej z kierunkiem ruchu gazów.",
    "options": null,
    "left": [
      "tlen w płucach",
      "dwutlenek węgla w płucach",
      "tlen w tkankach",
      "dwutlenek węgla w tkankach"
    ],
    "right": [
      "z pęcherzyków płucnych do krwi",
      "z krwi do pęcherzyków płucnych",
      "z krwi do komórek",
      "z komórek do krwi"
    ],
    "answer": {
      "tlen w płucach": "z pęcherzyków płucnych do krwi",
      "dwutlenek węgla w płucach": "z krwi do pęcherzyków płucnych",
      "tlen w tkankach": "z krwi do komórek",
      "dwutlenek węgla w tkankach": "z komórek do krwi"
    },
    "explanation": "W płucach krew pobiera tlen i oddaje dwutlenek węgla, a w tkankach oddaje tlen komórkom i odbiera od nich dwutlenek węgla.",
    "image": "r05_wymiana_gazowa.jpg"
  },
  {
    "id": "R05_WYM_04",
    "section": "Wymiana gazowa",
    "type": "sort",
    "prompt": "Przyporządkuj procesy do wymiany gazowej w płucach lub w tkankach.",
    "options": null,
    "items": [
      "tlen przechodzi z pęcherzyków do krwi",
      "dwutlenek węgla przechodzi z krwi do pęcherzyków",
      "tlen przechodzi z krwi do komórek",
      "dwutlenek węgla przechodzi z komórek do krwi"
    ],
    "categories": [
      "w płucach",
      "w tkankach"
    ],
    "answer": {
      "w płucach": [
        "tlen przechodzi z pęcherzyków do krwi",
        "dwutlenek węgla przechodzi z krwi do pęcherzyków"
      ],
      "w tkankach": [
        "tlen przechodzi z krwi do komórek",
        "dwutlenek węgla przechodzi z komórek do krwi"
      ]
    },
    "explanation": "Wymiana gazowa zachodzi w dwóch miejscach: między pęcherzykami i krwią oraz między krwią i komórkami ciała."
  },
  {
    "id": "R05_WYM_05",
    "section": "Wymiana gazowa",
    "type": "fill_in",
    "prompt": "Tlen we krwi jest wiązany przez __________ znajdującą się w krwinkach czerwonych.",
    "options": null,
    "answer": [
      "hemoglobinę"
    ],
    "altAnswers": [
      [
        "hemoglobinę",
        "hemoglobina"
      ]
    ],
    "explanation": "Po przejściu z pęcherzyków płucnych do krwi tlen wiąże się z hemoglobiną w krwinkach czerwonych."
  },
  {
    "id": "R05_WYM_06",
    "section": "Wymiana gazowa",
    "type": "multi_select",
    "prompt": "Zaznacz cechy płuc, które zwiększają wydajność wymiany gazowej.",
    "options": [
      "Ogromna liczba pęcherzyków płucnych",
      "Duża powierzchnia wymiany",
      "Bardzo cienkie ściany pęcherzyków",
      "Gęsta sieć naczyń włosowatych",
      "Grube ściany pęcherzyków",
      "Brak naczyń krwionośnych przy pęcherzykach"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Miliony pęcherzyków zwiększają powierzchnię wymiany, a ich cienkie ściany i gęsta sieć naczyń ułatwiają dyfuzję gazów.",
    "image": "r05_pecherzyki_plucne.jpg"
  },
  {
    "id": "R05_WYM_07",
    "section": "Wymiana gazowa",
    "type": "scenario",
    "prompt": "Dwie osoby przebywają 10 minut w identycznych szczelnych pomieszczeniach. Jedna stoi, druga cały czas biegnie w miejscu. W którym pomieszczeniu po badaniu będzie mniej tlenu?",
    "options": [
      "W pomieszczeniu osoby biegnącej",
      "W pomieszczeniu osoby stojącej",
      "W obu będzie dokładnie tyle samo tlenu",
      "Nie da się tego powiązać z aktywnością",
      "W pomieszczeniu osoby o wolniejszym oddechu",
      "Tlen zniknie całkowicie w obu"
    ],
    "answer": 0,
    "explanation": "Osoba aktywna zużywa więcej tlenu i oddaje więcej dwutlenku węgla, ponieważ jej wentylacja płuc i zapotrzebowanie energetyczne są większe."
  },
  {
    "id": "R05_WYM_08",
    "section": "Wymiana gazowa",
    "type": "single_choice",
    "prompt": "Która wartość opisuje zawartość tlenu w powietrzu wydychanym?",
    "options": [
      "16%",
      "21%",
      "78%",
      "4,5%",
      "0,03%",
      "0,57%"
    ],
    "answer": 0,
    "explanation": "Powietrze wydychane zawiera około 16% tlenu, czyli mniej niż powietrze wdychane, które zawiera około 21% tlenu."
  },
  {
    "id": "R05_WYM_09",
    "section": "Wymiana gazowa",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie opisuje dyfuzji gazów: wyższe stężenie, niższe stężenie, swobodne przenikanie cząsteczek, skurcz przepony.",
    "options": null,
    "answer": "skurcz przepony",
    "explanation": "Skurcz przepony uczestniczy w wentylacji płuc, natomiast dyfuzja zależy od różnicy stężeń i swobodnego przenikania cząsteczek."
  },
  {
    "id": "R05_WYM_10",
    "section": "Wymiana gazowa",
    "type": "sequence",
    "prompt": "Ułóż drogę tlenu od pęcherzyka płucnego do komórek ciała.",
    "options": null,
    "items": [
      "tętnice krwiobiegu dużego",
      "pęcherzyk płucny",
      "komórki ciała",
      "serce",
      "krew w naczyniach włosowatych płuc"
    ],
    "answer": [
      "pęcherzyk płucny",
      "krew w naczyniach włosowatych płuc",
      "serce",
      "tętnice krwiobiegu dużego",
      "komórki ciała"
    ],
    "explanation": "Tlen dyfunduje z pęcherzyków do krwi, wraz z krwią dociera do serca, a następnie tętnicami do tkanek i komórek.",
    "image": "r05_wymiana_gazowa.jpg"
  },
  {
    "id": "R05_KOM_01",
    "section": "Oddychanie komórkowe",
    "type": "single_choice",
    "prompt": "W jakich organellach zachodzi oddychanie komórkowe?",
    "options": [
      "W mitochondriach",
      "W rybosomach",
      "W jądrze komórkowym",
      "W aparacie Golgiego",
      "W lizosomach",
      "W wodniczkach"
    ],
    "answer": 0,
    "explanation": "Oddychanie komórkowe zachodzi w mitochondriach, gdzie podczas utleniania substancji pokarmowych uwalniana jest energia."
  },
  {
    "id": "R05_KOM_02",
    "section": "Oddychanie komórkowe",
    "type": "fill_in",
    "prompt": "W uproszczeniu oddychanie komórkowe można zapisać: glukoza + __________ -> dwutlenek węgla + __________ + energia.",
    "options": null,
    "answer": [
      "tlen",
      "woda"
    ],
    "altAnswers": [
      [
        "tlen",
        "O2"
      ],
      [
        "woda",
        "H2O"
      ]
    ],
    "explanation": "W obecności tlenu glukoza jest rozkładana do dwutlenku węgla i wody, a jednocześnie uwalniana jest energia."
  },
  {
    "id": "R05_KOM_03",
    "section": "Oddychanie komórkowe",
    "type": "true_false",
    "prompt": "Podczas oddychania komórkowego organizm zużywa przede wszystkim glukozę.",
    "options": null,
    "answer": true,
    "explanation": "Glukoza jest podstawową substancją pokarmową wykorzystywaną w oddychaniu komórkowym."
  },
  {
    "id": "R05_KOM_04",
    "section": "Oddychanie komórkowe",
    "type": "match",
    "prompt": "Połącz rodzaj energii z przykładem jej wykorzystania przez organizm.",
    "options": null,
    "left": [
      "energia mechaniczna",
      "energia elektryczna",
      "energia chemiczna"
    ],
    "right": [
      "skurcze mięśni",
      "powstawanie impulsów nerwowych",
      "wytwarzanie związków organicznych"
    ],
    "answer": {
      "energia mechaniczna": "skurcze mięśni",
      "energia elektryczna": "powstawanie impulsów nerwowych",
      "energia chemiczna": "wytwarzanie związków organicznych"
    },
    "explanation": "Energia uwalniana w oddychaniu komórkowym może być wykorzystywana jako mechaniczna, elektryczna lub chemiczna.",
    "image": "r05_energia_organizmu.jpg"
  },
  {
    "id": "R05_KOM_05",
    "section": "Oddychanie komórkowe",
    "type": "multi_select",
    "prompt": "Zaznacz produkty i rezultat oddychania komórkowego glukozy w obecności tlenu.",
    "options": [
      "Dwutlenek węgla",
      "Woda",
      "Uwolniona energia",
      "Tlen",
      "Glukoza",
      "Azot"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W wyniku oddychania komórkowego powstają dwutlenek węgla i woda, a energia zawarta w glukozie zostaje uwolniona."
  },
  {
    "id": "R05_KOM_06",
    "section": "Oddychanie komórkowe",
    "type": "riddle",
    "prompt": "Jak nazywa się proces utleniania substancji pokarmowych w mitochondriach, w którym uwalniana jest energia?",
    "options": null,
    "answer": "oddychanie komórkowe",
    "altAnswers": [
      "oddychanie komórkowe",
      "oddychanie komorkowe"
    ],
    "explanation": "Utlenianie substancji pokarmowych zachodzące w mitochondriach nazywamy oddychaniem komórkowym."
  },
  {
    "id": "R05_KOM_07",
    "section": "Oddychanie komórkowe",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest wymieniany jako substancja pokarmowa mogąca być zużywana w oddychaniu komórkowym: glukoza, tłuszcze, białka, azot.",
    "options": null,
    "answer": "azot",
    "explanation": "Organizm wykorzystuje przede wszystkim glukozę, a przy niedoborze cukrów także tłuszcze i w razie potrzeby białka. Azot nie jest paliwem wykorzystywanym w oddychaniu komórkowym."
  },
  {
    "id": "R05_KOM_08",
    "section": "Oddychanie komórkowe",
    "type": "scenario",
    "prompt": "W organizmie brakuje cukrów potrzebnych do oddychania komórkowego. Które substancje mogą zostać wykorzystane jako kolejne źródło?",
    "options": [
      "Najpierw tłuszcze, a w razie potrzeby białka",
      "Najpierw azot, potem woda",
      "Wyłącznie dwutlenek węgla",
      "Tylko sole mineralne",
      "Najpierw białka, a tłuszcze nigdy",
      "Wyłącznie tlen"
    ],
    "answer": 0,
    "explanation": "Przy braku cukrów organizm może zużywać tłuszcze, a w razie potrzeby także białka."
  },
  {
    "id": "R05_KOM_09",
    "section": "Oddychanie komórkowe",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "oddychanie płucne",
      "oddychanie tkankowe",
      "oddychanie komórkowe"
    ],
    "right": [
      "wymiana gazowa w pęcherzykach płucnych",
      "wymiana gazowa między krwią a komórkami",
      "uwalnianie energii podczas utleniania substancji pokarmowych"
    ],
    "answer": {
      "oddychanie płucne": "wymiana gazowa w pęcherzykach płucnych",
      "oddychanie tkankowe": "wymiana gazowa między krwią a komórkami",
      "oddychanie komórkowe": "uwalnianie energii podczas utleniania substancji pokarmowych"
    },
    "explanation": "Termin oddychanie może odnosić się do wymiany gazowej w płucach, wymiany gazowej w tkankach albo do procesu uwalniania energii w komórkach."
  },
  {
    "id": "R05_KOM_10",
    "section": "Oddychanie komórkowe",
    "type": "true_false",
    "prompt": "Sprawna wymiana gazowa jest potrzebna do prawidłowego przebiegu oddychania komórkowego.",
    "options": null,
    "answer": true,
    "explanation": "Wymiana gazowa dostarcza komórkom tlen potrzebny do utleniania substancji pokarmowych i umożliwia usuwanie powstającego dwutlenku węgla."
  },
  {
    "id": "R05_HIG_01",
    "section": "Higiena i choroby",
    "type": "multi_select",
    "prompt": "Zaznacz zasady pomagające chronić układ oddechowy.",
    "options": [
      "Oddychanie przez nos",
      "Ubieranie się stosownie do pogody",
      "Częste przebywanie na świeżym powietrzu",
      "Unikanie kontaktu z chorymi",
      "Unikanie dymu papierosowego i pyłów",
      "Celowe wdychanie dymu papierosowego"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Profilaktyce sprzyjają między innymi oddychanie przez nos, odpowiedni ubiór, świeże powietrze oraz unikanie chorych, dymu i pyłów."
  },
  {
    "id": "R05_HIG_02",
    "section": "Higiena i choroby",
    "type": "match",
    "prompt": "Połącz chorobę z charakterystyczną informacją.",
    "options": null,
    "left": [
      "grypa",
      "angina",
      "gruźlica",
      "rak płuc"
    ],
    "right": [
      "choroba wirusowa szybko osłabiająca organizm",
      "często bakteryjna choroba z silnym bólem gardła",
      "choroba wywoływana przez prątki",
      "choroba nowotworowa silnie związana z paleniem tytoniu"
    ],
    "answer": {
      "grypa": "choroba wirusowa szybko osłabiająca organizm",
      "angina": "często bakteryjna choroba z silnym bólem gardła",
      "gruźlica": "choroba wywoływana przez prątki",
      "rak płuc": "choroba nowotworowa silnie związana z paleniem tytoniu"
    },
    "explanation": "Grypa jest wirusowa, angina często bakteryjna, gruźlicę wywołują prątki gruźlicy, a palenie tytoniu jest głównym czynnikiem sprzyjającym rakowi płuc."
  },
  {
    "id": "R05_HIG_03",
    "section": "Higiena i choroby",
    "type": "single_choice",
    "prompt": "Która choroba jest wirusowa, szybko się rozwija i bardzo osłabia organizm?",
    "options": [
      "Grypa",
      "Angina",
      "Gruźlica",
      "Pylica",
      "Rak płuc",
      "Rozedma płuc"
    ],
    "answer": 0,
    "explanation": "Grypa jest chorobą wirusową, która rozwija się szybko i silnie osłabia organizm."
  },
  {
    "id": "R05_HIG_04",
    "section": "Higiena i choroby",
    "type": "scenario",
    "prompt": "Podczas ataku u chorego zwęża się światło dróg oddechowych, mięśnie gładkie są skurczone, a śluz utrudnia przepływ powietrza. O jakiej chorobie mowa?",
    "options": [
      "Astma",
      "Gruźlica",
      "Angina",
      "Katar",
      "Rak płuc",
      "Pylica"
    ],
    "answer": 0,
    "explanation": "Podczas ataku astmy zwężenie dróg oddechowych i obecność śluzu utrudniają przepływ powietrza, a część powietrza może zostać uwięziona w pęcherzykach.",
    "image": "r05_astma_drogi_oddechowe.jpg"
  },
  {
    "id": "R05_HIG_05",
    "section": "Higiena i choroby",
    "type": "single_choice",
    "prompt": "Dlaczego tlenek węgla, czyli czad, jest szczególnie niebezpieczny?",
    "options": [
      "Łączy się z hemoglobiną i utrudnia przenoszenie tlenu",
      "Zwiększa ilość hemoglobiny",
      "Rozszerza pęcherzyki płucne i poprawia wymianę gazową",
      "Jest łatwo wyczuwalny węchem",
      "Zamienia tlen w azot",
      "Działa wyłącznie na skórę"
    ],
    "answer": 0,
    "explanation": "Czad wiąże się z hemoglobiną w krwinkach czerwonych, co uniemożliwia prawidłowe przenoszenie tlenu i prowadzi do niedotlenienia.",
    "image": "r05_czad_czujnik.jpg"
  },
  {
    "id": "R05_HIG_06",
    "section": "Higiena i choroby",
    "type": "multi_select",
    "prompt": "Zaznacz skutki zanieczyszczeń powietrza dla układu oddechowego.",
    "options": [
      "Tlenki azotu i siarki drażnią błonę śluzową",
      "Pyły mogą prowadzić do pylicy",
      "Pyły mogą sprzyjać nowotworom układu oddechowego",
      "Czad może powodować niedotlenienie",
      "Zanieczyszczenia zawsze zwiększają wydolność płuc",
      "Smog jest obojętny dla zdrowia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Gazy drażnią drogi oddechowe, czad zaburza transport tlenu, a pyły mogą prowadzić do pylicy i sprzyjać nowotworom."
  },
  {
    "id": "R05_HIG_07",
    "section": "Higiena i choroby",
    "type": "true_false",
    "prompt": "W Polsce smog powstaje szczególnie zimą, a gdy się pojawia, zaleca się ograniczenie aktywności na zewnątrz.",
    "options": null,
    "answer": true,
    "explanation": "Smog zawiera szkodliwe gazy i pyły; w Polsce jest szczególnie częsty zimą i stanowi zagrożenie dla zdrowia.",
    "image": "r05_smog_miasto.jpg"
  },
  {
    "id": "R05_HIG_08",
    "section": "Higiena i choroby",
    "type": "single_choice",
    "prompt": "Które zachowanie ma największe znaczenie w profilaktyce raka płuc?",
    "options": [
      "Niepalenie tytoniu i unikanie biernego palenia",
      "Oddychanie wyłącznie przez usta",
      "Unikanie wszelkiej aktywności fizycznej",
      "Picie bardzo zimnych napojów",
      "Zamykanie okien przez cały rok",
      "Wstrzymywanie oddechu"
    ],
    "answer": 0,
    "explanation": "Najważniejsze jest niepalenie tytoniu, unikanie biernego palenia oraz miejsc o bardzo zanieczyszczonym powietrzu.",
    "image": "r05_pluca_palacza.jpg"
  },
  {
    "id": "R05_HIG_09",
    "section": "Higiena i choroby",
    "type": "fill_in",
    "prompt": "Substancją w dymie papierosowym powodującą uzależnienie jest __________, a tlenek węgla prowadzi do __________ organizmu.",
    "options": null,
    "answer": [
      "nikotyna",
      "niedotlenienia"
    ],
    "altAnswers": [
      [
        "nikotyna",
        "nikotyna"
      ],
      [
        "niedotlenienia",
        "niedotlenienie"
      ]
    ],
    "explanation": "Nikotyna powoduje uzależnienie, natomiast tlenek węgla zaburza transport tlenu i prowadzi do niedotlenienia."
  },
  {
    "id": "R05_HIG_10",
    "section": "Higiena i choroby",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, która nie jest chorobą zakaźną: katar, grypa, angina, pylica.",
    "options": null,
    "answer": "pylica",
    "explanation": "Pylica rozwija się wskutek wdychania pyłów, a nie zakażenia drobnoustrojami."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw poprawnie porównuje zawartość tlenu w powietrzu wdychanym i wydychanym?",
    "options": [
      "21% i 16%",
      "16% i 21%",
      "78% i 16%",
      "21% i 4,5%",
      "0,03% i 4,5%",
      "78% i 78%"
    ],
    "answer": 0,
    "explanation": "Powietrze wdychane zawiera około 21% tlenu, a wydychane około 16%."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Każde płuco zawiera około __________ pęcherzyków płucnych, ich łączna powierzchnia wynosi około __________, a średnica pojedynczego pęcherzyka to około __________.",
    "options": null,
    "answer": [
      "300 mln",
      "100 m2",
      "150-200 µm"
    ],
    "altAnswers": [
      [
        "300 mln",
        "300 milionów",
        "300 milionow"
      ],
      [
        "100 m2",
        "100 m²",
        "około 100 m2"
      ],
      [
        "150-200 µm",
        "150-200 um",
        "150–200 µm"
      ]
    ],
    "explanation": "W każdym płucu znajduje się około 300 mln pęcherzyków; ich łączna powierzchnia to około 100 m2, a średnica wynosi około 150-200 µm."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz składnik dymu papierosowego z jego działaniem.",
    "options": null,
    "left": [
      "nikotyna",
      "tlenek węgla",
      "kadm",
      "substancje smoliste"
    ],
    "right": [
      "powoduje uzależnienie",
      "prowadzi do niedotlenienia",
      "wywołuje nowotwory",
      "uszkadzają naczynia krwionośne"
    ],
    "answer": {
      "nikotyna": "powoduje uzależnienie",
      "tlenek węgla": "prowadzi do niedotlenienia",
      "kadm": "wywołuje nowotwory",
      "substancje smoliste": "uszkadzają naczynia krwionośne"
    },
    "explanation": "W dymie papierosowym występują liczne substancje szkodliwe o różnych działaniach, między innymi uzależniającym, toksycznym i rakotwórczym."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Chory ma wysoką temperaturę, silny kaszel i duszność. Stan zapalny obejmuje pęcherzyki płucne i utrudnia wymianę gazową. Która diagnoza najlepiej pasuje?",
    "options": [
      "Zapalenie płuc",
      "Nieżyt nosa",
      "Angina",
      "Pylica",
      "Astma",
      "Gruźlica"
    ],
    "answer": 0,
    "explanation": "Zapalenie płuc jest stanem zapalnym pęcherzyków płucnych, który utrudnia wymianę gazową i może powodować wysoką temperaturę, silny kaszel oraz duszność."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz objawy charakterystyczne dla gruźlicy.",
    "options": [
      "Suchy kaszel",
      "Spadek masy ciała",
      "Zmęczenie",
      "Nadmierne pocenie się",
      "Biały nalot na migdałkach",
      "Katar"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do objawów gruźlicy należą między innymi suchy kaszel, spadek masy ciała, gorączka, zmęczenie, brak apetytu i nadmierne pocenie się."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż czynności pierwszej pomocy przy utracie przytomności we właściwej kolejności.",
    "options": null,
    "items": [
      "wykonaj 30 uciśnięć klatki piersiowej",
      "odchyl głowę poszkodowanego do tyłu",
      "dwukrotnie wdmuchaj powietrze do ust",
      "ułóż poszkodowanego na plecach i sprawdź czy oddycha"
    ],
    "answer": [
      "ułóż poszkodowanego na plecach i sprawdź czy oddycha",
      "odchyl głowę poszkodowanego do tyłu",
      "wykonaj 30 uciśnięć klatki piersiowej",
      "dwukrotnie wdmuchaj powietrze do ust"
    ],
    "explanation": "Właściwa kolejność to: ułożenie poszkodowanego i sprawdzenie oddechu, odchylenie głowy, 30 uciśnięć, a następnie dwa wdmuchnięcia powietrza."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W dwóch pojemnikach umieszczono zapalone świece. Pojemnik 1 zawiera powietrze wydychane, a pojemnik 2 powietrze atmosferyczne. W którym pojemniku świeca powinna palić się krócej i dlaczego?",
    "options": [
      "W pojemniku 1, bo jest w nim mniej tlenu i więcej dwutlenku węgla",
      "W pojemniku 2, bo jest w nim mniej tlenu",
      "W pojemniku 1, bo jest w nim więcej tlenu",
      "W obu równie długo, bo skład powietrza jest identyczny",
      "W pojemniku 2, bo nie ma w nim azotu",
      "W pojemniku 1, bo nie ma w nim pary wodnej"
    ],
    "answer": 0,
    "explanation": "Powietrze wydychane ma mniej tlenu i więcej dwutlenku węgla niż atmosferyczne, dlatego gorzej podtrzymuje spalanie."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W krwiobiegu dużym punkt 1 oznacza tętnicę doprowadzającą krew do tkanek, punkt 3 naczynia włosowate, a punkt 2 żyłę wracającą do serca. Która zależność zawartości dwutlenku węgla jest poprawna?",
    "options": [
      "1 < 3 < 2",
      "1 < 2 < 3",
      "2 < 3 < 1",
      "3 < 2 < 1",
      "1 = 2 = 3",
      "2 < 1 < 3"
    ],
    "answer": 0,
    "explanation": "W tkankach dwutlenek węgla przechodzi z komórek do krwi, dlatego jego zawartość rośnie od tętnicy przez naczynia włosowate do żyły."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz skutki rozedmy płuc.",
    "options": [
      "Powierzchnia wymiany gazowej staje się mniejsza",
      "Wydolność organizmu się zmniejsza",
      "Objętość pęcherzyków płucnych się zwiększa",
      "Pęcherzyki stają się bardziej elastyczne",
      "Objętość pęcherzyków się zmniejsza"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W rozedmie drobne pęcherzyki powiększają się, ich ściany pękają, powierzchnia wymiany maleje i spada wydolność organizmu.",
    "image": "r05_rozedma_pecherzyki.jpg"
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W badaniu średnia pojemność płuc wynosiła 3900 ml u palaczy nieuprawiających sportu, 4400 ml u niepalących nieuprawiających sportu i 6000 ml u niepalących intensywnie uprawiających sport. Który wniosek jest najlepiej uzasadniony?",
    "options": [
      "Pojemność płuc zależy od trybu życia, a aktywność fizyczna sprzyja jej zwiększeniu",
      "Palenie nie ma żadnego związku z pojemnością płuc",
      "Sport zawsze zmniejsza pojemność płuc",
      "Tryb życia nie ma wpływu na płuca",
      "Wyniki dowodzą, że palacze mają największą pojemność płuc",
      "Niepalący bez sportu mają większą pojemność niż sportowcy"
    ],
    "answer": 0,
    "explanation": "Wyniki wskazują związek pojemności płuc z trybem życia: najwyższą średnią uzyskała grupa niepaląca i intensywnie uprawiająca sport."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj choroby do głównej grupy ich przyczyn.",
    "options": null,
    "items": [
      "katar",
      "grypa",
      "angina",
      "gruźlica",
      "pylica",
      "rak płuc"
    ],
    "categories": [
      "wirusowe",
      "bakteryjne",
      "niezakaźne"
    ],
    "answer": {
      "wirusowe": [
        "katar",
        "grypa"
      ],
      "bakteryjne": [
        "angina",
        "gruźlica"
      ],
      "niezakaźne": [
        "pylica",
        "rak płuc"
      ]
    },
    "explanation": "Katar i grypa są chorobami wirusowymi, angina i gruźlica bakteryjnymi, a pylica i rak płuc nie są chorobami zakaźnymi."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz substancję obecną w papierosie z odpowiadającym jej zakresem ilości.",
    "options": null,
    "left": [
      "ołów",
      "kadm",
      "nikotyna",
      "tlenek węgla"
    ],
    "right": [
      "10-15 µg",
      "2-3 µg",
      "0,6-1 mg",
      "7-10 mg"
    ],
    "answer": {
      "ołów": "10-15 µg",
      "kadm": "2-3 µg",
      "nikotyna": "0,6-1 mg",
      "tlenek węgla": "7-10 mg"
    },
    "explanation": "W jednym papierosie mogą występować orientacyjnie określone ilości szkodliwych substancji, między innymi ołowiu, kadmu, nikotyny i tlenku węgla."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki odsetek wszystkich osób chorych na nowotwory złośliwe stanowią chorzy na raka płuc wśród mężczyzn i kobiet?",
    "options": [
      "Około 20% mężczyzn i około 10% kobiet",
      "Około 10% mężczyzn i około 20% kobiet",
      "Około 5% mężczyzn i około 5% kobiet",
      "Około 40% mężczyzn i około 30% kobiet",
      "Około 1% mężczyzn i około 1% kobiet",
      "Około 50% mężczyzn i około 50% kobiet"
    ],
    "answer": 0,
    "explanation": "Rak płuc dotyczy około 20% mężczyzn i około 10% kobiet spośród osób chorych na nowotwory złośliwe."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jest bezwonny, powstaje podczas spalania przy ograniczonym dopływie tlenu i może doprowadzić do niedotlenienia. Jaki to gaz?",
    "options": null,
    "answer": "tlenek węgla",
    "altAnswers": [
      "tlenek węgla",
      "czad",
      "CO"
    ],
    "explanation": "Tlenek węgla, nazywany czadem, jest bezwonny i wiąże się z hemoglobiną, utrudniając transport tlenu.",
    "image": "r05_czad_czujnik.jpg"
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz składnik powietrza z jego zawartością w powietrzu wdychanym lub wydychanym.",
    "options": null,
    "left": [
      "tlen w powietrzu wdychanym",
      "tlen w powietrzu wydychanym",
      "dwutlenek węgla w powietrzu wdychanym",
      "dwutlenek węgla w powietrzu wydychanym"
    ],
    "right": [
      "21%",
      "16%",
      "0,03%",
      "4,5%"
    ],
    "answer": {
      "tlen w powietrzu wdychanym": "21%",
      "tlen w powietrzu wydychanym": "16%",
      "dwutlenek węgla w powietrzu wdychanym": "0,03%",
      "dwutlenek węgla w powietrzu wydychanym": "4,5%"
    },
    "explanation": "Wdychane powietrze zawiera około 21% tlenu i 0,03% dwutlenku węgla, a wydychane około 16% tlenu i 4,5% dwutlenku węgla."
  }
];

const KID_PROMPTS = {
  "R05_BUD_02": "Ułóż po kolei drogę powietrza od nosa do oskrzeli.",
  "R05_WEN_02": "Ułóż po kolei, co dzieje się podczas wdechu.",
  "R05_WYM_01": "Co dzieje się z gazem podczas dyfuzji?",
  "R05_KOM_01": "Gdzie w komórce zachodzi oddychanie komórkowe?",
  "R05_HIG_01": "Które zachowania pomagają dbać o układ oddechowy?"
};

const chapter = {
  id: "r05",
  number: 5,
  title: "Układ oddechowy",
  icon: "🫁",
  sectionOrder: [
    "Budowa układu oddechowego",
    "Wentylacja płuc",
    "Wymiana gazowa",
    "Oddychanie komórkowe",
    "Higiena i choroby"
  ],
  sectionIcons: {
    "Budowa układu oddechowego": "🫁",
    "Wentylacja płuc": "🌬️",
    "Wymiana gazowa": "🔄",
    "Oddychanie komórkowe": "⚡",
    "Higiena i choroby": "🛡️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
