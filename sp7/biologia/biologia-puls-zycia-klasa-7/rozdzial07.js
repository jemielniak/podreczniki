// Skróty sekcji (do identyfikatorów ćwiczeń):
//   HOR  = Budowa i funkcjonowanie układu hormonalnego
//   ZAB  = Zaburzenia funkcjonowania układu hormonalnego
//   NER  = Budowa i rola układu nerwowego
//   OUN  = Ośrodkowy układ nerwowy
//   ODR  = Obwodowy układ nerwowy. Odruchy
//   HIG  = Higiena układu nerwowego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_HOR_01",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "single_choice",
    "prompt": "Jaka jest główna funkcja układu hormonalnego?",
    "options": [
      "Przekazywanie informacji za pomocą hormonów wydzielanych do krwi",
      "Przewodzenie impulsów nerwowych przez neurony",
      "Mechaniczne pompowanie krwi do narządów",
      "Wymiana gazowa między krwią a powietrzem",
      "Trawienie pokarmu w przewodzie pokarmowym",
      "Wytwarzanie komórek krwi"
    ],
    "answer": 0,
    "explanation": "Układ hormonalny przekazuje informacje określonym komórkom za pośrednictwem hormonów wydzielanych do krwi. Działa wolniej niż układ nerwowy, ale jego efekty utrzymują się dłużej."
  },
  {
    "id": "R07_HOR_02",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "multi_select",
    "prompt": "Zaznacz gruczoły, które wytwarzają hormony związane z cechami płciowymi.",
    "options": [
      "jajniki",
      "jądra",
      "tarczyca",
      "trzustka",
      "nadnercza"
    ],
    "answer": [
      0,
      1
    ],
    "image": "r07_gruczoly_dokrewne.jpg",
    "explanation": "Jajniki produkują estrogeny, a jądra testosteron. Hormony te odpowiadają za powstawanie odpowiednio żeńskich i męskich cech płciowych."
  },
  {
    "id": "R07_HOR_03",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "true_false",
    "prompt": "Hormony działają tylko na komórki mające odpowiednie receptory.",
    "options": null,
    "answer": true,
    "explanation": "Hormony krążą po całym organizmie, ale wywołują reakcję tylko w komórkach mających właściwe receptory."
  },
  {
    "id": "R07_HOR_04",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "fill_in",
    "prompt": "Przysadka wydziela __________ oraz __________, które wpływają na pracę innych gruczołów dokrewnych.",
    "options": null,
    "answer": [
      "hormon wzrostu",
      "hormony tropowe"
    ],
    "altAnswers": [
      [
        "hormon wzrostu"
      ],
      [
        "hormony tropowe",
        "hormony tropowe przysadki"
      ]
    ],
    "explanation": "Przysadka wydziela hormon wzrostu oraz hormony tropowe. Hormony tropowe pobudzają pracę innych gruczołów dokrewnych."
  },
  {
    "id": "R07_HOR_05",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "riddle",
    "prompt": "Pełnię nadrzędną funkcję wśród gruczołów dokrewnych i wydzielam hormon wzrostu oraz hormony tropowe. Co to za gruczoł?",
    "options": null,
    "answer": "przysadka",
    "altAnswers": [
      "przysadka",
      "przysadka mózgowa"
    ],
    "image": "r07_gruczoly_dokrewne.jpg",
    "explanation": "Przysadka pełni nadrzędną funkcję wśród gruczołów dokrewnych i wpływa na pracę innych gruczołów."
  },
  {
    "id": "R07_HOR_06",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "match",
    "prompt": "Połącz gruczoł z wydzielanym przez niego hormonem.",
    "options": null,
    "left": [
      "tarczyca",
      "nadnercza",
      "jądra",
      "jajniki"
    ],
    "right": [
      "progesteron",
      "adrenalina",
      "tyroksyna",
      "testosteron"
    ],
    "answer": {
      "tarczyca": "tyroksyna",
      "nadnercza": "adrenalina",
      "jądra": "testosteron",
      "jajniki": "progesteron"
    },
    "explanation": "Tarczyca wydziela tyroksynę, nadnercza adrenalinę, jądra testosteron, a jajniki progesteron."
  },
  {
    "id": "R07_HOR_07",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "sort",
    "prompt": "Przyporządkuj hormony trzustki do ich wpływu na stężenie glukozy we krwi.",
    "options": null,
    "items": [
      "insulina",
      "glukagon"
    ],
    "categories": [
      "zmniejsza stężenie glukozy",
      "zwiększa stężenie glukozy"
    ],
    "answer": {
      "zmniejsza stężenie glukozy": [
        "insulina"
      ],
      "zwiększa stężenie glukozy": [
        "glukagon"
      ]
    },
    "explanation": "Insulina zmniejsza stężenie glukozy we krwi, a glukagon je zwiększa, dlatego działają antagonistycznie."
  },
  {
    "id": "R07_HOR_08",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "sequence",
    "prompt": "Ułóż etapy regulacji stężenia glukozy po posiłku.",
    "options": null,
    "items": [
      "Wątroba magazynuje glukozę w postaci glikogenu",
      "We krwi znajduje się dużo glukozy",
      "Powrót do optymalnego poziomu glukozy",
      "Trzustka zwiększa wydzielanie insuliny"
    ],
    "answer": [
      "We krwi znajduje się dużo glukozy",
      "Trzustka zwiększa wydzielanie insuliny",
      "Wątroba magazynuje glukozę w postaci glikogenu",
      "Powrót do optymalnego poziomu glukozy"
    ],
    "image": "r07_insulina_glukagon.jpg",
    "explanation": "Po posiłku wzrasta stężenie glukozy. Trzustka zwiększa wydzielanie insuliny, a wątroba magazynuje glukozę w postaci glikogenu, co pomaga przywrócić optymalny poziom glukozy."
  },
  {
    "id": "R07_HOR_09",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "scenario",
    "prompt": "Od dłuższego czasu nie jadłeś i we krwi znajduje się mało glukozy. Który hormon trzustki powinien być wydzielany intensywniej?",
    "options": [
      "glukagon",
      "insulina",
      "tyroksyna",
      "testosteron",
      "progesteron",
      "hormon wzrostu"
    ],
    "answer": 0,
    "image": "r07_insulina_glukagon.jpg",
    "explanation": "Przy niedoborze glukozy trzustka zwiększa wydzielanie glukagonu. Pod jego wpływem wątroba rozkłada glikogen i uwalnia glukozę do krwi."
  },
  {
    "id": "R07_HOR_10",
    "section": "Budowa i funkcjonowanie układu hormonalnego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: insulina, glukagon, tyroksyna, trzustka.",
    "options": null,
    "answer": "trzustka",
    "explanation": "Insulina, glukagon i tyroksyna są hormonami. Trzustka jest gruczołem dokrewnym."
  },
  {
    "id": "R07_ZAB_01",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "single_choice",
    "prompt": "Kiedy mówimy o nadczynności gruczołu dokrewnego?",
    "options": [
      "Gdy gruczoł wydziela zbyt dużo hormonów",
      "Gdy gruczoł wydziela zbyt mało hormonów",
      "Gdy hormon nie trafia do krwi",
      "Gdy w organizmie nie ma receptorów",
      "Gdy krew nie przepływa przez gruczoł",
      "Gdy hormon działa tylko w nocy"
    ],
    "answer": 0,
    "explanation": "Nadczynność oznacza, że gruczoł wydziela zbyt dużo hormonów. Zbyt mała produkcja hormonów to niedoczynność."
  },
  {
    "id": "R07_ZAB_02",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "multi_select",
    "prompt": "Które czynniki mogą zakłócać równowagę hormonalną?",
    "options": [
      "stres",
      "intensywne odchudzanie",
      "przyjmowanie leków hormonalnych bez konsultacji z lekarzem",
      "sen w ciemnym pomieszczeniu",
      "spacerowanie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Równowagę hormonalną mogą zakłócać między innymi stres, intensywne odchudzanie oraz przyjmowanie preparatów i leków hormonalnych bez konsultacji z lekarzem."
  },
  {
    "id": "R07_ZAB_03",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "true_false",
    "prompt": "Niedobór hormonu wzrostu w dzieciństwie może prowadzić do karłowatości przysadkowej.",
    "options": null,
    "answer": true,
    "explanation": "Karłowatość przysadkowa wynika z niedoboru hormonu wzrostu w dzieciństwie i objawia się niskim, ale proporcjonalnym wzrostem."
  },
  {
    "id": "R07_ZAB_04",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "fill_in",
    "prompt": "Nadmiar hormonu wzrostu w dzieciństwie powoduje __________, a jego nadmiar u osoby dorosłej może prowadzić do __________.",
    "options": null,
    "answer": [
      "gigantyzm",
      "akromegalii"
    ],
    "altAnswers": [
      [
        "gigantyzm"
      ],
      [
        "akromegalii",
        "akromegalia"
      ]
    ],
    "explanation": "Nadmiar hormonu wzrostu w dzieciństwie jest przyczyną gigantyzmu, a u dorosłych prowadzi do akromegalii."
  },
  {
    "id": "R07_ZAB_05",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "riddle",
    "prompt": "Choroba, której głównym objawem jest nadmiar glukozy we krwi, to...",
    "options": null,
    "answer": "cukrzyca",
    "altAnswers": [
      "cukrzyca"
    ],
    "image": "r07_cukrzyca_pomiary.jpg",
    "explanation": "Głównym objawem cukrzycy jest nadmiar glukozy we krwi. Wyróżnia się cukrzycę typu I oraz typu II."
  },
  {
    "id": "R07_ZAB_06",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "match",
    "prompt": "Połącz typ cukrzycy z jego przyczyną.",
    "options": null,
    "left": [
      "cukrzyca typu I",
      "cukrzyca typu II"
    ],
    "right": [
      "oporność komórek ciała na insulinę",
      "niedobór insuliny wskutek uszkodzenia trzustki"
    ],
    "answer": {
      "cukrzyca typu I": "niedobór insuliny wskutek uszkodzenia trzustki",
      "cukrzyca typu II": "oporność komórek ciała na insulinę"
    },
    "explanation": "Cukrzyca typu I wiąże się z niedoborem insuliny spowodowanym uszkodzeniem trzustki. W typie II komórki są oporne na działanie insuliny."
  },
  {
    "id": "R07_ZAB_07",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do odpowiedniego typu cukrzycy.",
    "options": null,
    "items": [
      "nagłe i silne objawy u osób do 30. roku życia",
      "niedobór insuliny wskutek uszkodzenia trzustki",
      "objawy narastające powoli u osób po 35. roku życia",
      "oporność komórek ciała na insulinę"
    ],
    "categories": [
      "cukrzyca typu I",
      "cukrzyca typu II"
    ],
    "answer": {
      "cukrzyca typu I": [
        "nagłe i silne objawy u osób do 30. roku życia",
        "niedobór insuliny wskutek uszkodzenia trzustki"
      ],
      "cukrzyca typu II": [
        "objawy narastające powoli u osób po 35. roku życia",
        "oporność komórek ciała na insulinę"
      ]
    },
    "explanation": "W cukrzycy typu I objawy pojawiają się zwykle u dzieci i młodych osób, są nagłe i silne, a przyczyną jest niedobór insuliny. W typie II objawy często rozwijają się powoli po 35. roku życia i wiążą się z opornością komórek na insulinę."
  },
  {
    "id": "R07_ZAB_08",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "sequence",
    "prompt": "Ułóż etapy działania pompy insulinowej.",
    "options": null,
    "items": [
      "Dostarczenie insuliny do tkanki podskórnej",
      "Dobranie odpowiedniej dawki insuliny",
      "Pomiar stężenia glukozy przez czujnik",
      "Odczyt zmiany stężenia glukozy po działaniu insuliny"
    ],
    "answer": [
      "Pomiar stężenia glukozy przez czujnik",
      "Dobranie odpowiedniej dawki insuliny",
      "Dostarczenie insuliny do tkanki podskórnej",
      "Odczyt zmiany stężenia glukozy po działaniu insuliny"
    ],
    "explanation": "Pompa najpierw mierzy stężenie glukozy, następnie dobiera dawkę insuliny, dostarcza ją do tkanki podskórnej, a czujnik odczytuje zmianę stężenia glukozy."
  },
  {
    "id": "R07_ZAB_09",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "scenario",
    "prompt": "U osoby występują nadpobudliwość, spadek masy ciała, przyspieszona praca serca i powiększenie tarczycy. Które zaburzenie najlepiej pasuje do tych objawów?",
    "options": [
      "nadczynność tarczycy",
      "niedoczynność tarczycy",
      "karłowatość przysadkowa",
      "gigantyzm",
      "akromegalia",
      "cukrzyca typu I"
    ],
    "answer": 0,
    "image": "r07_tarczyca_zaburzenia.jpg",
    "explanation": "Takie objawy są charakterystyczne dla nadczynności tarczycy."
  },
  {
    "id": "R07_ZAB_10",
    "section": "Zaburzenia funkcjonowania układu hormonalnego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do objawów niedoczynności tarczycy: wysuszenie skóry, obrzęki, wzrost masy ciała, przyspieszona praca serca.",
    "options": null,
    "answer": "przyspieszona praca serca",
    "image": "r07_tarczyca_zaburzenia.jpg",
    "explanation": "Przyspieszona praca serca jest objawem nadczynności tarczycy. Niedoczynności towarzyszą między innymi wysuszenie skóry, obrzęki i wzrost masy ciała."
  },
  {
    "id": "R07_NER_01",
    "section": "Budowa i rola układu nerwowego",
    "type": "single_choice",
    "prompt": "Jak dzielimy układ nerwowy ze względu na sposób działania?",
    "options": [
      "na somatyczny i autonomiczny",
      "na ośrodkowy i obwodowy",
      "na mózgowie i rdzeń kręgowy",
      "na czuciowy i ruchowy",
      "na współczulny i ośrodkowy",
      "na czaszkowy i rdzeniowy"
    ],
    "answer": 0,
    "explanation": "Ze względu na sposób działania układ nerwowy dzieli się na somatyczny i autonomiczny."
  },
  {
    "id": "R07_NER_02",
    "section": "Budowa i rola układu nerwowego",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje układu nerwowego.",
    "options": [
      "odbieranie i analizowanie bodźców",
      "wywoływanie odpowiednich reakcji organizmu",
      "kontrolowanie i koordynowanie pracy innych układów",
      "wydzielanie insuliny",
      "magazynowanie glukozy jako glikogenu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Układ nerwowy odbiera i analizuje bodźce, wywołuje odpowiednie reakcje oraz kontroluje i koordynuje pracę pozostałych układów."
  },
  {
    "id": "R07_NER_03",
    "section": "Budowa i rola układu nerwowego",
    "type": "true_false",
    "prompt": "Działanie autonomicznego układu nerwowego nie zależy od naszej woli.",
    "options": null,
    "answer": true,
    "explanation": "Autonomiczny układ nerwowy kieruje pracą narządów wewnętrznych i przemianą materii, a jego działanie nie zależy od naszej woli."
  },
  {
    "id": "R07_NER_04",
    "section": "Budowa i rola układu nerwowego",
    "type": "fill_in",
    "prompt": "Ze względu na budowę układ nerwowy dzielimy na układ __________ i układ __________.",
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
    "explanation": "Pod względem budowy wyróżnia się ośrodkowy układ nerwowy, złożony z mózgowia i rdzenia kręgowego, oraz obwodowy układ nerwowy, który tworzą nerwy."
  },
  {
    "id": "R07_NER_05",
    "section": "Budowa i rola układu nerwowego",
    "type": "riddle",
    "prompt": "Mała przestrzeń, w której odbywa się przekazywanie sygnału między neuronami, to...",
    "options": null,
    "answer": "synapsa",
    "altAnswers": [
      "synapsa"
    ],
    "image": "r07_synapsa.jpg",
    "explanation": "Łączność między neuronami odbywa się w synapsie. Obejmuje ona zakończenie aksonu jednej komórki, początek dendrytu kolejnej i szczelinę synaptyczną."
  },
  {
    "id": "R07_NER_06",
    "section": "Budowa i rola układu nerwowego",
    "type": "match",
    "prompt": "Połącz część autonomicznego układu nerwowego z jej działaniem na narząd.",
    "options": null,
    "left": [
      "współczulny - źrenice",
      "przywspółczulny - źrenice",
      "współczulny - serce",
      "przywspółczulny - żołądek i jelita"
    ],
    "right": [
      "zwężanie",
      "pobudzanie aktywności",
      "przyspieszanie akcji",
      "rozszerzanie"
    ],
    "answer": {
      "współczulny - źrenice": "rozszerzanie",
      "przywspółczulny - źrenice": "zwężanie",
      "współczulny - serce": "przyspieszanie akcji",
      "przywspółczulny - żołądek i jelita": "pobudzanie aktywności"
    },
    "image": "r07_autonomiczny_uklad_nerwowy.jpg",
    "explanation": "Układ współczulny przygotowuje organizm do działania, a przywspółczulny sprzyja odpoczynkowi. Ich wpływ na narządy jest przeciwstawny."
  },
  {
    "id": "R07_NER_07",
    "section": "Budowa i rola układu nerwowego",
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
      "ośrodkowy układ nerwowy",
      "obwodowy układ nerwowy"
    ],
    "answer": {
      "ośrodkowy układ nerwowy": [
        "mózgowie",
        "rdzeń kręgowy"
      ],
      "obwodowy układ nerwowy": [
        "nerwy czaszkowe",
        "nerwy rdzeniowe"
      ]
    },
    "explanation": "Ośrodkowy układ nerwowy tworzą mózgowie i rdzeń kręgowy. Obwodowy układ nerwowy tworzą nerwy, w tym czaszkowe i rdzeniowe."
  },
  {
    "id": "R07_NER_08",
    "section": "Budowa i rola układu nerwowego",
    "type": "sequence",
    "prompt": "Ułóż drogę przekazywania sygnału od jednego neuronu do następnego.",
    "options": null,
    "items": [
      "neuroprzekaźniki w szczelinie synaptycznej",
      "dendryt pierwszego neuronu",
      "dendryt następnego neuronu",
      "akson pierwszego neuronu"
    ],
    "answer": [
      "dendryt pierwszego neuronu",
      "akson pierwszego neuronu",
      "neuroprzekaźniki w szczelinie synaptycznej",
      "dendryt następnego neuronu"
    ],
    "image": "r07_neuron.jpg",
    "explanation": "W obrębie neuronu impuls biegnie od dendrytu do aksonu. W synapsie neuroprzekaźniki uwolnione z zakończenia aksonu docierają do dendrytu następnej komórki i wzbudzają w niej impuls."
  },
  {
    "id": "R07_NER_09",
    "section": "Budowa i rola układu nerwowego",
    "type": "scenario",
    "prompt": "W sytuacji zagrożenia rozszerzają się źrenice, przyspiesza akcja serca i rozszerzają się oskrzela. Która część autonomicznego układu nerwowego odpowiada za taki stan?",
    "options": [
      "współczulna",
      "przywspółczulna",
      "somatyczna",
      "ośrodkowa",
      "obwodowa",
      "czuciowa"
    ],
    "answer": 0,
    "image": "r07_autonomiczny_uklad_nerwowy.jpg",
    "explanation": "Część współczulna aktywuje się w sytuacji zagrożenia i przygotowuje organizm do działania."
  },
  {
    "id": "R07_NER_10",
    "section": "Budowa i rola układu nerwowego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do elementów układu nerwowego: mózgowie, rdzeń kręgowy, nerwy, trzustka.",
    "options": null,
    "answer": "trzustka",
    "explanation": "Mózgowie, rdzeń kręgowy i nerwy tworzą układ nerwowy. Trzustka jest gruczołem dokrewnym."
  },
  {
    "id": "R07_OUN_01",
    "section": "Ośrodkowy układ nerwowy",
    "type": "single_choice",
    "prompt": "Która część mózgowia odpowiada między innymi za utrzymywanie równowagi i koordynowanie ruchów?",
    "options": [
      "móżdżek",
      "pień mózgu",
      "rdzeń kręgowy",
      "płat potyliczny",
      "tarczyca",
      "przysadka"
    ],
    "answer": 0,
    "image": "r07_mozgowie.jpg",
    "explanation": "Móżdżek odpowiada za utrzymywanie równowagi, regulowanie siły skurczów mięśni i koordynowanie ruchów."
  },
  {
    "id": "R07_OUN_02",
    "section": "Ośrodkowy układ nerwowy",
    "type": "multi_select",
    "prompt": "Którymi czynnościami kieruje pień mózgu?",
    "options": [
      "oddychanie",
      "praca serca i regulacja ciśnienia krwi",
      "trawienie",
      "utrzymywanie odpowiedniej temperatury ciała",
      "uczenie się i zapamiętywanie",
      "koordynowanie ruchów"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pień mózgu kontroluje wiele czynności niezależnych od woli, między innymi oddychanie, pracę serca i ciśnienie krwi, trawienie oraz temperaturę ciała."
  },
  {
    "id": "R07_OUN_03",
    "section": "Ośrodkowy układ nerwowy",
    "type": "true_false",
    "prompt": "Mózg jest największą częścią mózgowia.",
    "options": null,
    "answer": true,
    "explanation": "Największą częścią mózgowia jest mózg. Pozostałe główne części to móżdżek i pień mózgu."
  },
  {
    "id": "R07_OUN_04",
    "section": "Ośrodkowy układ nerwowy",
    "type": "fill_in",
    "prompt": "Mózgowie składa się z trzech głównych części: __________, __________ oraz __________.",
    "options": null,
    "answer": [
      "mózgu",
      "móżdżku",
      "pnia mózgu"
    ],
    "altAnswers": [
      [
        "mózgu",
        "mózg"
      ],
      [
        "móżdżku",
        "móżdżek"
      ],
      [
        "pnia mózgu",
        "pień mózgu"
      ]
    ],
    "explanation": "Trzy główne części mózgowia to mózg, móżdżek i pień mózgu."
  },
  {
    "id": "R07_OUN_05",
    "section": "Ośrodkowy układ nerwowy",
    "type": "riddle",
    "prompt": "W którym płacie kory mózgu znajduje się ośrodek wzroku?",
    "options": null,
    "answer": "płat potyliczny",
    "altAnswers": [
      "płat potyliczny",
      "potyliczny"
    ],
    "image": "r07_platy_kory_mozgu.jpg",
    "explanation": "Ośrodek wzroku znajduje się w płacie potylicznym i odbiera informacje o kolorach, kształtach i natężeniu światła."
  },
  {
    "id": "R07_OUN_06",
    "section": "Ośrodkowy układ nerwowy",
    "type": "match",
    "prompt": "Połącz płat kory mózgu z charakterystyczną funkcją.",
    "options": null,
    "left": [
      "płat czołowy",
      "płat skroniowy",
      "płat ciemieniowy",
      "płat potyliczny"
    ],
    "right": [
      "ośrodek wzroku",
      "ośrodki czuciowe dotyku i temperatury",
      "ośrodki słuchu i pamięci słuchowej",
      "ośrodki mowy myślenia i emocji"
    ],
    "answer": {
      "płat czołowy": "ośrodki mowy myślenia i emocji",
      "płat skroniowy": "ośrodki słuchu i pamięci słuchowej",
      "płat ciemieniowy": "ośrodki czuciowe dotyku i temperatury",
      "płat potyliczny": "ośrodek wzroku"
    },
    "image": "r07_platy_kory_mozgu.jpg",
    "explanation": "Płat czołowy wiąże się między innymi z mową, myśleniem i emocjami; skroniowy ze słuchem; ciemieniowy z czuciem; potyliczny ze wzrokiem."
  },
  {
    "id": "R07_OUN_07",
    "section": "Ośrodkowy układ nerwowy",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do istoty szarej lub istoty białej mózgu.",
    "options": null,
    "items": [
      "ciała komórek nerwowych",
      "tworzy korę mózgu",
      "włókna nerwowe",
      "przewodzi impulsy między częściami mózgu"
    ],
    "categories": [
      "istota szara",
      "istota biała"
    ],
    "answer": {
      "istota szara": [
        "ciała komórek nerwowych",
        "tworzy korę mózgu"
      ],
      "istota biała": [
        "włókna nerwowe",
        "przewodzi impulsy między częściami mózgu"
      ]
    },
    "image": "r07_rdzen_kregowy.jpg",
    "explanation": "Istota szara składa się z ciał komórek nerwowych, leży na powierzchni i tworzy korę mózgu. Istota biała składa się z włókien nerwowych i przewodzi impulsy między częściami mózgu."
  },
  {
    "id": "R07_OUN_08",
    "section": "Ośrodkowy układ nerwowy",
    "type": "sequence",
    "prompt": "Ułóż struktury od najszerszego poziomu do coraz mniejszej części układu nerwowego.",
    "options": null,
    "items": [
      "mózg",
      "ośrodkowy układ nerwowy",
      "kora mózgu",
      "mózgowie"
    ],
    "answer": [
      "ośrodkowy układ nerwowy",
      "mózgowie",
      "mózg",
      "kora mózgu"
    ],
    "explanation": "Ośrodkowy układ nerwowy obejmuje mózgowie, w mózgowiu znajduje się mózg, a powierzchnię mózgu tworzy kora mózgu."
  },
  {
    "id": "R07_OUN_09",
    "section": "Ośrodkowy układ nerwowy",
    "type": "scenario",
    "prompt": "Po urazie dana osoba ma trudności z utrzymaniem równowagi i koordynacją ruchów. Która część mózgowia mogła zostać uszkodzona?",
    "options": [
      "móżdżek",
      "płat potyliczny",
      "pień mózgu",
      "rdzeń kręgowy",
      "płat skroniowy",
      "tarczyca"
    ],
    "answer": 0,
    "image": "r07_mozgowie.jpg",
    "explanation": "Za równowagę i koordynację ruchów odpowiada móżdżek."
  },
  {
    "id": "R07_OUN_10",
    "section": "Ośrodkowy układ nerwowy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do czynności kontrolowanych przez pień mózgu: oddychanie, trawienie, regulacja ciśnienia krwi, zapamiętywanie.",
    "options": null,
    "answer": "zapamiętywanie",
    "explanation": "Pień mózgu kieruje oddychaniem, trawieniem i regulacją ciśnienia krwi. Uczenie się i zapamiętywanie należą do głównych zadań mózgu."
  },
  {
    "id": "R07_ODR_01",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "single_choice",
    "prompt": "Ile par nerwów czaszkowych występuje u człowieka?",
    "options": [
      "12",
      "31",
      "8",
      "5",
      "1",
      "120"
    ],
    "answer": 0,
    "explanation": "W organizmie człowieka występuje 12 par nerwów czaszkowych oraz 31 par nerwów rdzeniowych."
  },
  {
    "id": "R07_ODR_02",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "multi_select",
    "prompt": "Zaznacz zadania nerwów rdzeniowych.",
    "options": [
      "odbieranie bodźców ze skóry tułowia i kończyn",
      "pobudzanie do skurczu mięśni tułowia i kończyn",
      "odbieranie bodźców z narządów zmysłów głowy",
      "umożliwianie zmiany wyrazu twarzy",
      "wydzielanie hormonów do krwi"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Nerwy rdzeniowe odbierają bodźce ze skóry, głównie tułowia i kończyn, oraz pobudzają do skurczu przede wszystkim mięśnie tułowia i kończyn."
  },
  {
    "id": "R07_ODR_03",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "true_false",
    "prompt": "Nerwy czuciowe przewodzą impulsy od receptorów do ośrodkowego układu nerwowego.",
    "options": null,
    "answer": true,
    "explanation": "Nerwy czuciowe prowadzą impulsy od receptorów do ośrodkowego układu nerwowego, a nerwy ruchowe w przeciwnym kierunku - do mięśni i gruczołów."
  },
  {
    "id": "R07_ODR_04",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "fill_in",
    "prompt": "W łuku odruchowym impuls biegnie od receptora przez __________, __________ i __________ do efektora.",
    "options": null,
    "answer": [
      "neuron czuciowy",
      "neuron pośredniczący",
      "neuron ruchowy"
    ],
    "altAnswers": [
      [
        "neuron czuciowy"
      ],
      [
        "neuron pośredniczący"
      ],
      [
        "neuron ruchowy"
      ]
    ],
    "image": "r07_luk_odruchowy.jpg",
    "explanation": "Kolejność elementów łuku odruchowego to: receptor, neuron czuciowy, neuron pośredniczący, neuron ruchowy, efektor."
  },
  {
    "id": "R07_ODR_05",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "riddle",
    "prompt": "Automatyczna reakcja organizmu na bodziec to...",
    "options": null,
    "answer": "odruch",
    "altAnswers": [
      "odruch"
    ],
    "explanation": "Automatyczną reakcję organizmu na bodziec nazywamy odruchem."
  },
  {
    "id": "R07_ODR_06",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "match",
    "prompt": "Połącz element z jego rolą w przekazywaniu impulsu.",
    "options": null,
    "left": [
      "nerw czuciowy",
      "nerw ruchowy",
      "efektor"
    ],
    "right": [
      "wykonuje czynność",
      "od receptora do OUN",
      "z OUN do mięśni lub gruczołów"
    ],
    "answer": {
      "nerw czuciowy": "od receptora do OUN",
      "nerw ruchowy": "z OUN do mięśni lub gruczołów",
      "efektor": "wykonuje czynność"
    },
    "explanation": "Nerw czuciowy przewodzi impuls od receptora do OUN, nerw ruchowy z OUN do mięśni lub gruczołów, a efektor wykonuje właściwą czynność."
  },
  {
    "id": "R07_ODR_07",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odruchów bezwarunkowych lub warunkowych.",
    "options": null,
    "items": [
      "kichanie po podrażnieniu błony śluzowej nosa",
      "wydzielanie śliny w czasie jedzenia",
      "szukanie włącznika po wejściu do ciemnego pokoju",
      "wydzielanie śliny na widok kwaśnych cytryn"
    ],
    "categories": [
      "odruchy bezwarunkowe",
      "odruchy warunkowe"
    ],
    "answer": {
      "odruchy bezwarunkowe": [
        "kichanie po podrażnieniu błony śluzowej nosa",
        "wydzielanie śliny w czasie jedzenia"
      ],
      "odruchy warunkowe": [
        "szukanie włącznika po wejściu do ciemnego pokoju",
        "wydzielanie śliny na widok kwaśnych cytryn"
      ]
    },
    "image": "r07_odruchy.jpg",
    "explanation": "Odruchy bezwarunkowe są wrodzone, a warunkowe powstają w czasie życia dzięki powtarzaniu. Kichanie i ślinienie podczas jedzenia są bezwarunkowe, a szukanie włącznika i ślinienie na widok kwaśnych cytryn - warunkowe."
  },
  {
    "id": "R07_ODR_08",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "sequence",
    "prompt": "Ułóż elementy łuku odruchowego w kolejności przepływu impulsu.",
    "options": null,
    "items": [
      "neuron ruchowy",
      "receptor",
      "efektor",
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
    "image": "r07_luk_odruchowy.jpg",
    "explanation": "Impuls przechodzi kolejno przez receptor, neuron czuciowy, neuron pośredniczący, neuron ruchowy i dociera do efektora."
  },
  {
    "id": "R07_ODR_09",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "scenario",
    "prompt": "Lekarz lekko uderza młotkiem tuż poniżej rzepki, a noga wykonuje ruch bez świadomej decyzji badanego. Jakiego rodzaju reakcja zachodzi?",
    "options": [
      "odruch bezwarunkowy",
      "odruch warunkowy",
      "świadoma czynność somatyczna",
      "reakcja hormonalna",
      "wydzielanie neuroprzekaźnika bez odruchu",
      "praca tarczycy"
    ],
    "answer": 0,
    "image": "r07_odruchy.jpg",
    "explanation": "Odruch kolanowy jest odruchem bezwarunkowym, czyli wrodzoną reakcją niezależną od naszej woli."
  },
  {
    "id": "R07_ODR_10",
    "section": "Obwodowy układ nerwowy. Odruchy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do liczby nerwów rdzeniowych wychodzących z każdej strony rdzenia: 8 szyjnych, 12 piersiowych, 5 lędźwiowych, 5 krzyżowych, 12 guzicznych.",
    "options": null,
    "answer": "12 guzicznych",
    "explanation": "Z każdej strony rdzenia wychodzi 1 nerw guziczny, a nie 12. Pozostałe liczby są zgodne z opisem odcinków rdzenia."
  },
  {
    "id": "R07_HIG_01",
    "section": "Higiena układu nerwowego",
    "type": "single_choice",
    "prompt": "Jaka forma odpoczynku najlepiej umożliwia regenerację układu nerwowego po długotrwałym stresie?",
    "options": [
      "sen",
      "intensywna nauka",
      "nadużywanie kofeiny",
      "palenie papierosów",
      "picie alkoholu",
      "rezygnacja z odpoczynku"
    ],
    "answer": 0,
    "explanation": "Najlepszą formą odpoczynku dla układu nerwowego jest sen. W czasie snu zmniejsza się aktywność organizmu i liczba docierających bodźców."
  },
  {
    "id": "R07_HIG_02",
    "section": "Higiena układu nerwowego",
    "type": "multi_select",
    "prompt": "Które działania pomagają radzić sobie ze stresem?",
    "options": [
      "przygotowanie się do trudnej sytuacji",
      "rozmowa z bliską osobą",
      "bieganie lub gimnastyka",
      "nadużywanie leków uspokajających",
      "sięganie po alkohol"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pomocne są między innymi przygotowywanie się do trudnych sytuacji, rozmowa z bliską osobą oraz aktywność fizyczna, która pomaga rozładować negatywne emocje."
  },
  {
    "id": "R07_HIG_03",
    "section": "Higiena układu nerwowego",
    "type": "true_false",
    "prompt": "Dorosły człowiek potrzebuje zwykle 7-8 godzin snu na dobę, a osoba młoda może potrzebować nawet 9 godzin.",
    "options": null,
    "answer": true,
    "explanation": "Odpowiednio długi sen jest ważny dla regeneracji. Dorosły człowiek potrzebuje zwykle 7-8 godzin snu na dobę, a osoba młoda może potrzebować nawet 9 godzin."
  },
  {
    "id": "R07_HIG_04",
    "section": "Higiena układu nerwowego",
    "type": "fill_in",
    "prompt": "W sytuacji stresowej zwiększa się wydzielanie między innymi __________ i __________.",
    "options": null,
    "answer": [
      "adrenaliny",
      "kortyzolu"
    ],
    "altAnswers": [
      [
        "adrenaliny",
        "adrenalina"
      ],
      [
        "kortyzolu",
        "kortyzol"
      ]
    ],
    "image": "r07_stres_organizm.jpg",
    "explanation": "W stresie wzrasta wydzielanie adrenaliny i kortyzolu. Adrenalina zwiększa aktywność w początkowej fazie, a kortyzol jest uwalniany przy dłużej trwającym stresie."
  },
  {
    "id": "R07_HIG_05",
    "section": "Higiena układu nerwowego",
    "type": "riddle",
    "prompt": "Przewlekła choroba układu nerwowego, której główną cechą jest niekontrolowane dążenie do ciągłego zażywania coraz większych ilości danej substancji, to...",
    "options": null,
    "answer": "uzależnienie",
    "altAnswers": [
      "uzależnienie",
      "uzaleznienie"
    ],
    "explanation": "Taki stan nazywa się uzależnieniem."
  },
  {
    "id": "R07_HIG_06",
    "section": "Higiena układu nerwowego",
    "type": "match",
    "prompt": "Połącz substancję z jej działaniem.",
    "options": null,
    "left": [
      "kofeina",
      "nikotyna",
      "alkohol"
    ],
    "right": [
      "działa odurzająco i niszczy neurony",
      "działa pobudzająco",
      "silnie uzależnia i znajduje się w dymie tytoniowym"
    ],
    "answer": {
      "kofeina": "działa pobudzająco",
      "nikotyna": "silnie uzależnia i znajduje się w dymie tytoniowym",
      "alkohol": "działa odurzająco i niszczy neurony"
    },
    "explanation": "Kofeina działa pobudzająco, nikotyna silnie uzależnia i szkodzi organizmowi, a alkohol działa odurzająco i uszkadza neurony."
  },
  {
    "id": "R07_HIG_07",
    "section": "Higiena układu nerwowego",
    "type": "sort",
    "prompt": "Przyporządkuj skutki do stresu krótkotrwałego lub długotrwałego.",
    "options": null,
    "items": [
      "mobilizacja do większego wysiłku",
      "większa aktywność organizmu w początkowej fazie",
      "przewlekłe zmęczenie",
      "możliwy rozwój chorób układu nerwowego"
    ],
    "categories": [
      "stres krótkotrwały",
      "stres długotrwały"
    ],
    "answer": {
      "stres krótkotrwały": [
        "mobilizacja do większego wysiłku",
        "większa aktywność organizmu w początkowej fazie"
      ],
      "stres długotrwały": [
        "przewlekłe zmęczenie",
        "możliwy rozwój chorób układu nerwowego"
      ]
    },
    "explanation": "Krótkotrwały stres może mobilizować do wysiłku i działania. Długotrwały stres prowadzi do przewlekłego zmęczenia, poczucia przytłoczenia i może sprzyjać chorobom układu nerwowego."
  },
  {
    "id": "R07_HIG_08",
    "section": "Higiena układu nerwowego",
    "type": "sequence",
    "prompt": "Ułóż uproszczony ciąg reakcji organizmu w początkowej fazie stresu.",
    "options": null,
    "items": [
      "wzrost aktywności organizmu",
      "zadziałanie stresora",
      "zwiększone wydzielanie adrenaliny",
      "przyspieszenie pracy serca i wentylacji płuc"
    ],
    "answer": [
      "zadziałanie stresora",
      "zwiększone wydzielanie adrenaliny",
      "wzrost aktywności organizmu",
      "przyspieszenie pracy serca i wentylacji płuc"
    ],
    "image": "r07_stres_organizm.jpg",
    "explanation": "Stresor wywołuje reakcję stresową. Zwiększa się wydzielanie adrenaliny, a pod jej wpływem rośnie aktywność organizmu, między innymi przyspiesza praca serca i wentylacja płuc."
  },
  {
    "id": "R07_HIG_09",
    "section": "Higiena układu nerwowego",
    "type": "scenario",
    "prompt": "Osoba stale przyjmuje leki przeciwbólowe lub nasenne nie po to, by łagodzić objawy choroby, lecz głównie w celu poprawy nastroju. Jak nazywa się takie uzależnienie?",
    "options": [
      "lekomania",
      "nikotynizm",
      "alkoholizm",
      "cukrzyca",
      "akromegalia",
      "niedoczynność tarczycy"
    ],
    "answer": 0,
    "explanation": "Nałogowe używanie niektórych leków w celu poprawy nastroju określa się jako lekomanię."
  },
  {
    "id": "R07_HIG_10",
    "section": "Higiena układu nerwowego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do substancji wywołujących uzależnienie: kofeina, nikotyna, alkohol, glukagon.",
    "options": null,
    "answer": "glukagon",
    "explanation": "Kofeina, nikotyna i alkohol mogą wywoływać uzależnienie. Glukagon jest hormonem trzustki regulującym stężenie glukozy we krwi."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest masa przysadki?",
    "options": [
      "około 0,5 g",
      "około 5 g",
      "10-20 g",
      "30-60 g",
      "do 120 g",
      "około 150 g"
    ],
    "answer": 0,
    "explanation": "Masa przysadki wynosi około 0,5 g."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe informacje o dobowym wydzielaniu hormonów.",
    "options": [
      "około szóstej rano wzrasta poziom hormonów nadnerczy",
      "poziom hormonów nadnerczy jest najniższy około północy",
      "hormon wzrostu jest najintensywniej produkowany nocą",
      "stężenie hormonu wzrostu jest najwyższe u noworodków",
      "hormon wzrostu jest najintensywniej produkowany w południe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r07_rytmy_hormonow.jpg",
    "explanation": "Około szóstej rano rośnie poziom hormonów nadnerczy, około północy jest on najniższy, hormon wzrostu jest najintensywniej produkowany nocą, a jego stężenie jest najwyższe u noworodków."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Trzustka jest największym gruczołem dokrewnym i może ważyć do 120 g oraz mieć do 14 cm długości.",
    "options": null,
    "answer": true,
    "explanation": "Trzustka jest największym gruczołem dokrewnym; może ważyć do 120 g i mieć do 14 cm długości."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Na czczo wynik prawidłowy to __________ mg/100 ml krwi, podwyższony to __________ mg/100 ml, a wynik nieprawidłowy zaczyna się powyżej __________ mg/100 ml.",
    "options": null,
    "answer": [
      "70-99",
      "100-125",
      "126"
    ],
    "altAnswers": [
      [
        "70-99",
        "70–99"
      ],
      [
        "100-125",
        "100–125"
      ],
      [
        "126",
        ">126",
        "powyżej 126"
      ]
    ],
    "image": "r07_cukrzyca_pomiary.jpg",
    "explanation": "Zakres prawidłowy wynosi 70-99 mg/100 ml krwi, podwyższony 100-125 mg/100 ml, a wynik nieprawidłowy zaczyna się powyżej 126 mg/100 ml."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jakie stężenie alkoholu we krwi stanowi dawkę zagrażającą życiu człowieka?",
    "options": null,
    "answer": "4 promile",
    "altAnswers": [
      "4 promile",
      "4‰",
      "4 promil"
    ],
    "explanation": "Już 4 promile alkoholu we krwi to dawka zagrażająca życiu."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz cechę zaburzenia tarczycy z właściwą informacją.",
    "options": null,
    "left": [
      "nadczynność - przyczyna",
      "nadczynność - objaw",
      "niedoczynność - przyczyna",
      "niedoczynność - leczenie"
    ],
    "right": [
      "spadek masy ciała",
      "niedobór jodu w organizmie",
      "nadmiar jodu lub guzki tarczycy",
      "stałe przyjmowanie hormonów tarczycy"
    ],
    "answer": {
      "nadczynność - przyczyna": "nadmiar jodu lub guzki tarczycy",
      "nadczynność - objaw": "spadek masy ciała",
      "niedoczynność - przyczyna": "niedobór jodu w organizmie",
      "niedoczynność - leczenie": "stałe przyjmowanie hormonów tarczycy"
    },
    "image": "r07_tarczyca_zaburzenia.jpg",
    "explanation": "Nadczynność może wiązać się z nadmiarem jodu lub guzkami i objawiać się spadkiem masy ciała. Niedoczynność może wynikać z niedoboru jodu, a w leczeniu stosuje się hormony tarczycy i - przy niedoborze - jod."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj działania do części współczulnej lub przywspółczulnej autonomicznego układu nerwowego.",
    "options": null,
    "items": [
      "rozszerzanie źrenic",
      "przyspieszanie akcji serca",
      "hamowanie aktywności żołądka i jelit",
      "zwężanie źrenic",
      "zwalnianie akcji serca",
      "pobudzanie aktywności żołądka i jelit"
    ],
    "categories": [
      "układ współczulny",
      "układ przywspółczulny"
    ],
    "answer": {
      "układ współczulny": [
        "rozszerzanie źrenic",
        "przyspieszanie akcji serca",
        "hamowanie aktywności żołądka i jelit"
      ],
      "układ przywspółczulny": [
        "zwężanie źrenic",
        "zwalnianie akcji serca",
        "pobudzanie aktywności żołądka i jelit"
      ]
    },
    "image": "r07_autonomiczny_uklad_nerwowy.jpg",
    "explanation": "Część współczulna rozszerza źrenice i oskrzela, przyspiesza serce oraz hamuje aktywność żołądka i jelit. Przywspółczulna działa przeciwnie."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy regulacji stężenia glukozy podczas głodu.",
    "options": null,
    "items": [
      "wątroba rozkłada glikogen do glukozy",
      "trzustka zwiększa wydzielanie glukagonu",
      "we krwi znajduje się mało glukozy",
      "glukoza jest uwalniana do krwi",
      "powrót do optymalnego poziomu glukozy"
    ],
    "answer": [
      "we krwi znajduje się mało glukozy",
      "trzustka zwiększa wydzielanie glukagonu",
      "wątroba rozkłada glikogen do glukozy",
      "glukoza jest uwalniana do krwi",
      "powrót do optymalnego poziomu glukozy"
    ],
    "image": "r07_insulina_glukagon.jpg",
    "explanation": "Gdy glukozy jest mało, trzustka zwiększa wydzielanie glukagonu. Wątroba rozkłada glikogen do glukozy i uwalnia ją do krwi, co pomaga przywrócić właściwe stężenie."
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po uszkodzeniu pewnego płata kory mózgu pojawiły się zaburzenia widzenia. Który płat jest najbardziej prawdopodobnym miejscem uszkodzenia?",
    "options": [
      "płat potyliczny",
      "płat czołowy",
      "płat skroniowy",
      "płat ciemieniowy",
      "pień mózgu",
      "móżdżek"
    ],
    "answer": 0,
    "image": "r07_platy_kory_mozgu.jpg",
    "explanation": "Ośrodek wzroku znajduje się w płacie potylicznym."
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż nieprawidłową informację o zawartości kofeiny: filiżanka kawy 85 mg, filiżanka herbaty 30 mg, kubek kakao 4 mg, puszka coli 40 mg, puszka napoju energetycznego 8 mg.",
    "options": null,
    "answer": "puszka napoju energetycznego 8 mg",
    "image": "r07_kofeina_napoje.jpg",
    "explanation": "Puszka napoju energetycznego zawiera około 80 mg kofeiny, nie 8 mg. Pozostałe wartości są prawidłowe."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz odcinek rdzenia z liczbą nerwów wychodzących z każdej jego strony.",
    "options": null,
    "left": [
      "szyjny",
      "piersiowy",
      "lędźwiowy",
      "guziczny"
    ],
    "right": [
      "1",
      "5",
      "8",
      "12"
    ],
    "answer": {
      "szyjny": "8",
      "piersiowy": "12",
      "lędźwiowy": "5",
      "guziczny": "1"
    },
    "explanation": "Z każdej strony rdzenia wychodzi 8 nerwów szyjnych, 12 piersiowych, 5 lędźwiowych i 1 guziczny."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawidłowe dane liczbowe dotyczące nerwów i przewodzenia impulsów.",
    "options": [
      "łączna długość nerwów dorosłego człowieka to około 150 tys. km",
      "we włóknie bez osłonki mielinowej szybkość może wynosić 2 m/s",
      "we włóknie z osłonką mielinową szybkość może sięgać 120 m/s",
      "osłonka mielinowa zmniejsza szybkość przewodzenia impulsu",
      "człowiek ma 120 par nerwów czaszkowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r07_neuron.jpg",
    "explanation": "Łączna długość nerwów dorosłego człowieka to około 150 tys. km. Impuls we włóknie bez osłonki mielinowej może być przewodzony z szybkością 2 m/s, a z osłonką nawet 120 m/s."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Regulacja nerwowo-hormonalna",
  icon: "🧠",
  sectionOrder: [
    "Budowa i funkcjonowanie układu hormonalnego",
    "Zaburzenia funkcjonowania układu hormonalnego",
    "Budowa i rola układu nerwowego",
    "Ośrodkowy układ nerwowy",
    "Obwodowy układ nerwowy. Odruchy",
    "Higiena układu nerwowego"
  ],
  sectionIcons: {
    "Budowa i funkcjonowanie układu hormonalnego": "🧪",
    "Zaburzenia funkcjonowania układu hormonalnego": "⚕️",
    "Budowa i rola układu nerwowego": "⚡",
    "Ośrodkowy układ nerwowy": "🧠",
    "Obwodowy układ nerwowy. Odruchy": "🔁",
    "Higiena układu nerwowego": "🌙"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
