// Skróty sekcji (do identyfikatorów ćwiczeń):
//   BUD  = Budowa układu hormonalnego
//   DZI  = Działanie hormonów i układ nerwowy
//   GRU  = Gruczoły i ich hormony
//   GLU  = Regulacja glukozy
//   ZAB  = Zaburzenia pracy układu hormonalnego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R09_BUD_01",
    "section": "Budowa układu hormonalnego",
    "type": "single_choice",
    "prompt": "Dlaczego układ hormonalny nazywa się również układem dokrewnym?",
    "options": [
      "Ponieważ gruczoły wydzielają hormony bezpośrednio do krwi",
      "Ponieważ wszystkie gruczoły są połączone przewodami",
      "Ponieważ hormony są wydzielane wyłącznie na powierzchnię skóry",
      "Ponieważ układ ten składa się z komórek nerwowych",
      "Ponieważ hormony działają tylko w miejscu ich powstania",
      "Ponieważ gruczoły nie są unaczynione"
    ],
    "answer": 0,
    "explanation": "Gruczoły dokrewne wydzielają hormony bezpośrednio do krwi, dlatego układ hormonalny jest nazywany także dokrewnym."
  },
  {
    "id": "R09_BUD_02",
    "section": "Budowa układu hormonalnego",
    "type": "true_false",
    "prompt": "Gruczoły dokrewne są ze sobą bezpośrednio połączone.",
    "options": null,
    "answer": false,
    "explanation": "Gruczoły dokrewne nie są ze sobą połączone, choć ich działanie może być wzajemnie powiązane i zależne."
  },
  {
    "id": "R09_BUD_03",
    "section": "Budowa układu hormonalnego",
    "type": "multi_select",
    "prompt": "Zaznacz gruczoły należące do układu hormonalnego.",
    "options": [
      "przysadka mózgowa",
      "gruczoł potowy",
      "tarczyca",
      "gruczoł łojowy",
      "nadnercza",
      "trzustka"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "explanation": "Do układu hormonalnego należą m.in. przysadka mózgowa, tarczyca, nadnercza i trzustka. Gruczoły potowe i łojowe wydzielają substancje na zewnątrz organizmu.",
    "image": "r09_gruczoly_dokrewne_sylwetki.jpg"
  },
  {
    "id": "R09_BUD_04",
    "section": "Budowa układu hormonalnego",
    "type": "fill_in",
    "prompt": "Gruczoły dokrewne wydzielają hormony bezpośrednio do __________, a hormony docierają do komórek __________.",
    "options": null,
    "answer": [
      "krwi",
      "docelowych"
    ],
    "altAnswers": [
      [
        "krwi"
      ],
      [
        "docelowych",
        "docelowych komórek"
      ]
    ],
    "explanation": "Hormony trafiają bezpośrednio do krwi, która przenosi je do komórek docelowych posiadających odpowiednie receptory."
  },
  {
    "id": "R09_BUD_05",
    "section": "Budowa układu hormonalnego",
    "type": "match",
    "prompt": "Połącz gruczoł z jego położeniem.",
    "options": null,
    "left": [
      "Przysadka mózgowa",
      "Tarczyca",
      "Nadnercza"
    ],
    "right": [
      "mózg",
      "nasada szyi",
      "górne bieguny nerek"
    ],
    "answer": {
      "Przysadka mózgowa": "mózg",
      "Tarczyca": "nasada szyi",
      "Nadnercza": "górne bieguny nerek"
    },
    "explanation": "Przysadka znajduje się w mózgu, tarczyca u nasady szyi, a nadnercza na górnych biegunach obu nerek."
  },
  {
    "id": "R09_BUD_06",
    "section": "Budowa układu hormonalnego",
    "type": "riddle",
    "prompt": "Chemiczny sygnalizator produkowany przez gruczoły dokrewne to...",
    "options": null,
    "answer": "hormon",
    "altAnswers": [
      "hormon",
      "hormony"
    ],
    "explanation": "Hormony są chemicznymi sygnalizatorami wytwarzanymi przez gruczoły dokrewne."
  },
  {
    "id": "R09_BUD_07",
    "section": "Budowa układu hormonalnego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych: przysadka mózgowa, tarczyca, nadnercza, gruczoł potowy.",
    "options": null,
    "answer": "gruczoł potowy",
    "explanation": "Przysadka, tarczyca i nadnercza są gruczołami dokrewnymi, natomiast gruczoł potowy wydziela substancje na zewnątrz organizmu."
  },
  {
    "id": "R09_BUD_08",
    "section": "Budowa układu hormonalnego",
    "type": "scenario",
    "prompt": "Badany gruczoł nie ma przewodu wyprowadzającego. Wytwarzane przez niego cząsteczki trafiają od razu do naczyń krwionośnych. Jaki to typ gruczołu?",
    "options": [
      "gruczoł dokrewny",
      "gruczoł potowy",
      "gruczoł łojowy",
      "gruczoł mlekowy",
      "gruczoł zewnątrzwydzielniczy",
      "gruczoł wydzielający tylko enzymy"
    ],
    "answer": 0,
    "explanation": "Gruczoły dokrewne nie mają przewodów wyprowadzających i wydzielają hormony bezpośrednio do krwi.",
    "image": "r09_gruczol_dokrewny_naczynia.jpg"
  },
  {
    "id": "R09_BUD_09",
    "section": "Budowa układu hormonalnego",
    "type": "single_choice",
    "prompt": "Która para zawiera gruczoł występujący tylko u kobiety oraz gruczoł występujący tylko u mężczyzny?",
    "options": [
      "jajniki i jądra",
      "tarczyca i nadnercza",
      "trzustka i tarczyca",
      "przysadka i trzustka",
      "nadnercza i przysadka",
      "tarczyca i przysadka"
    ],
    "answer": 0,
    "explanation": "Jajniki występują u kobiet, a jądra u mężczyzn. Pozostałe gruczoły występują u obu płci.",
    "image": "r09_gruczoly_dokrewne_sylwetki.jpg"
  },
  {
    "id": "R09_BUD_10",
    "section": "Budowa układu hormonalnego",
    "type": "sequence",
    "prompt": "Ułóż etapy działania hormonu w prawidłowej kolejności.",
    "options": null,
    "items": [
      "Komórka docelowa rozpoznaje hormon dzięki receptorowi",
      "Gruczoł wydziela hormon",
      "Powstaje reakcja organizmu",
      "Hormon jest przenoszony z krwią"
    ],
    "answer": [
      "Gruczoł wydziela hormon",
      "Hormon jest przenoszony z krwią",
      "Komórka docelowa rozpoznaje hormon dzięki receptorowi",
      "Powstaje reakcja organizmu"
    ],
    "explanation": "Hormon powstaje w gruczole, trafia do krwi, dociera do komórki docelowej z odpowiednim receptorem i wywołuje reakcję."
  },
  {
    "id": "R09_DZI_01",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "single_choice",
    "prompt": "Dlaczego hormon działa tylko na określone komórki docelowe?",
    "options": [
      "Ponieważ tylko te komórki mają odpowiednie receptory",
      "Ponieważ hormony nie są przenoszone przez krew",
      "Ponieważ każdy hormon działa wyłącznie w gruczole",
      "Ponieważ komórki docelowe nie mają błon",
      "Ponieważ hormony działają tylko na mięśnie",
      "Ponieważ wszystkie komórki mają identyczne receptory"
    ],
    "answer": 0,
    "explanation": "Każdy hormon jest specyficzny i wpływa na komórki mające receptory pasujące do tego hormonu."
  },
  {
    "id": "R09_DZI_02",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "true_false",
    "prompt": "Hormon krążący we krwi wywołuje taki sam efekt we wszystkich komórkach organizmu.",
    "options": null,
    "answer": false,
    "explanation": "Hormon działa na konkretne komórki i tkanki mające odpowiednie receptory, a nie na wszystkie komórki organizmu."
  },
  {
    "id": "R09_DZI_03",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "multi_select",
    "prompt": "Zaznacz procesy, w których uczestniczy układ hormonalny.",
    "options": [
      "reakcja na stres",
      "regulacja bicia serca i ciśnienia krwi",
      "wzrost i rozwój organizmu",
      "dojrzewanie układu rozrodczego",
      "bezpośrednia analiza bodźców ze środowiska zewnętrznego"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Układ hormonalny uczestniczy m.in. w reakcji na stres, regulacji pracy serca i ciśnienia, wzroście i rozwoju oraz dojrzewaniu układu rozrodczego."
  },
  {
    "id": "R09_DZI_04",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "fill_in",
    "prompt": "W układzie hormonalnym sygnałem jest __________, a w układzie nerwowym sygnałem może być neuroprzekaźnik lub __________ nerwowy.",
    "options": null,
    "answer": [
      "hormon",
      "impuls"
    ],
    "altAnswers": [
      [
        "hormon"
      ],
      [
        "impuls",
        "impuls nerwowy"
      ]
    ],
    "explanation": "Układ hormonalny przekazuje informacje za pomocą hormonów, a układ nerwowy za pomocą neuroprzekaźników lub impulsów nerwowych."
  },
  {
    "id": "R09_DZI_05",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "match",
    "prompt": "Połącz cechę z właściwym opisem.",
    "options": null,
    "left": [
      "Układ hormonalny – sygnał",
      "Układ hormonalny – szybkość przekazywania",
      "Układ nerwowy – szybkość przekazywania",
      "Układ nerwowy – reakcja"
    ],
    "right": [
      "hormon",
      "wolne przekazywanie",
      "szybkie przekazywanie",
      "natychmiastowa reakcja"
    ],
    "answer": {
      "Układ hormonalny – sygnał": "hormon",
      "Układ hormonalny – szybkość przekazywania": "wolne przekazywanie",
      "Układ nerwowy – szybkość przekazywania": "szybkie przekazywanie",
      "Układ nerwowy – reakcja": "natychmiastowa reakcja"
    },
    "explanation": "Sygnałem układu hormonalnego jest hormon i jest on przekazywany wolniej. Układ nerwowy przekazuje sygnały szybko i może wywołać natychmiastową reakcję."
  },
  {
    "id": "R09_DZI_06",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "riddle",
    "prompt": "Swoiste miejsce w komórce docelowej, dzięki któremu rozpoznaje ona hormon, to...",
    "options": null,
    "answer": "receptor",
    "altAnswers": [
      "receptor",
      "receptory"
    ],
    "explanation": "Komórki docelowe rozpoznają hormony dzięki receptorom swoistym dla danego hormonu."
  },
  {
    "id": "R09_DZI_07",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do wspólnych zadań układu hormonalnego i nerwowego: kontrola pracy narządów wewnętrznych, reagowanie na bodźce, utrzymanie równowagi w organizmie, wydzielanie potu na zewnątrz organizmu.",
    "options": null,
    "answer": "wydzielanie potu na zewnątrz organizmu",
    "explanation": "Oba układy koordynują pracę narządów, reagują na bodźce i pomagają utrzymać równowagę organizmu. Wydzielanie potu na zewnątrz nie jest ich wspólną cechą."
  },
  {
    "id": "R09_DZI_08",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "scenario",
    "prompt": "Po bodźcu sygnał dociera do mięśnia w ciągu milisekund i wywołuje natychmiastową reakcję. Który układ odpowiada za tak szybkie przekazywanie informacji?",
    "options": [
      "układ nerwowy",
      "układ hormonalny",
      "układ dokrewny",
      "układ gruczołów dokrewnych",
      "układ oparty wyłącznie na hormonach",
      "układ wydzielania wewnętrznego"
    ],
    "answer": 0,
    "explanation": "Neuroprzekaźniki i impulsy nerwowe działają bardzo szybko, nawet w ciągu milisekund, dlatego natychmiastowa reakcja jest charakterystyczna dla układu nerwowego."
  },
  {
    "id": "R09_DZI_09",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "single_choice",
    "prompt": "Jak długo może utrzymywać się efekt działania hormonu?",
    "options": [
      "Tak długo, jak hormon pozostaje we krwi",
      "Zawsze krócej niż milisekundę",
      "Tylko do chwili opuszczenia gruczołu",
      "Wyłącznie podczas snu",
      "Tylko do momentu dotarcia do naczynia krwionośnego",
      "Zawsze dokładnie jedną minutę"
    ],
    "answer": 0,
    "explanation": "Efekt hormonalny może pojawić się po czasie i utrzymuje się tak długo, jak hormon pozostaje we krwi."
  },
  {
    "id": "R09_DZI_10",
    "section": "Działanie hormonów i układ nerwowy",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do odpowiedniej kategorii.",
    "options": null,
    "items": [
      "kontrola pracy narządów wewnętrznych",
      "reagowanie na bodźce",
      "utrzymanie równowagi w organizmie",
      "sygnałem jest hormon",
      "wolne przekazywanie sygnału",
      "sygnałem jest neuroprzekaźnik lub impuls nerwowy",
      "szybkie przekazywanie sygnału"
    ],
    "categories": [
      "Cechy wspólne",
      "Układ hormonalny",
      "Układ nerwowy"
    ],
    "answer": {
      "Cechy wspólne": [
        "kontrola pracy narządów wewnętrznych",
        "reagowanie na bodźce",
        "utrzymanie równowagi w organizmie"
      ],
      "Układ hormonalny": [
        "sygnałem jest hormon",
        "wolne przekazywanie sygnału"
      ],
      "Układ nerwowy": [
        "sygnałem jest neuroprzekaźnik lub impuls nerwowy",
        "szybkie przekazywanie sygnału"
      ]
    },
    "explanation": "Oba układy koordynują pracę organizmu, ale hormonalny przekazuje wolniejsze sygnały za pomocą hormonów, a nerwowy szybkie sygnały za pomocą impulsów i neuroprzekaźników."
  },
  {
    "id": "R09_GRU_01",
    "section": "Gruczoły i ich hormony",
    "type": "single_choice",
    "prompt": "Który hormon przysadki mózgowej stymuluje wzrost organizmu i wydłużanie się kości?",
    "options": [
      "hormon wzrostu",
      "tyroksyna",
      "adrenalina",
      "insulina",
      "glukagon",
      "testosteron"
    ],
    "answer": 0,
    "explanation": "Przysadka mózgowa produkuje hormon wzrostu, który m.in. powoduje wydłużanie się kości i stymuluje wzrost organizmu.",
    "image": "r09_przysadka_mozg.jpg"
  },
  {
    "id": "R09_GRU_02",
    "section": "Gruczoły i ich hormony",
    "type": "match",
    "prompt": "Połącz gruczoł z hormonem, który wytwarza.",
    "options": null,
    "left": [
      "Przysadka mózgowa",
      "Tarczyca",
      "Nadnercza",
      "Trzustka",
      "Jądra"
    ],
    "right": [
      "hormon wzrostu",
      "tyroksyna",
      "adrenalina",
      "insulina",
      "testosteron"
    ],
    "answer": {
      "Przysadka mózgowa": "hormon wzrostu",
      "Tarczyca": "tyroksyna",
      "Nadnercza": "adrenalina",
      "Trzustka": "insulina",
      "Jądra": "testosteron"
    },
    "explanation": "Przysadka wytwarza hormon wzrostu, tarczyca tyroksynę, nadnercza adrenalinę, trzustka insulinę, a jądra testosteron."
  },
  {
    "id": "R09_GRU_03",
    "section": "Gruczoły i ich hormony",
    "type": "multi_select",
    "prompt": "Zaznacz skutki działania adrenaliny w sytuacji zagrożenia.",
    "options": [
      "wzrost ciśnienia krwi",
      "przyspieszenie bicia serca",
      "rozszerzenie oskrzeli",
      "rozszerzenie źrenic",
      "zwolnienie bicia serca",
      "zwężenie źrenic"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Adrenalina mobilizuje organizm w sytuacji zagrożenia: zwiększa ciśnienie krwi, przyspiesza bicie serca oraz rozszerza oskrzela i źrenice."
  },
  {
    "id": "R09_GRU_04",
    "section": "Gruczoły i ich hormony",
    "type": "fill_in",
    "prompt": "Tarczyca wytwarza __________, która pobudza i podtrzymuje tempo przemiany __________.",
    "options": null,
    "answer": [
      "tyroksynę",
      "materii"
    ],
    "altAnswers": [
      [
        "tyroksynę",
        "tyroksyna"
      ],
      [
        "materii",
        "przemiany materii"
      ]
    ],
    "explanation": "Tyroksyna jest hormonem tarczycy pobudzającym i podtrzymującym tempo przemiany materii.",
    "image": "r09_tarczyca_szyja.jpg"
  },
  {
    "id": "R09_GRU_05",
    "section": "Gruczoły i ich hormony",
    "type": "riddle",
    "prompt": "Gruczoły położone na górnych biegunach obu nerek, produkujące m.in. adrenalinę, to...",
    "options": null,
    "answer": "nadnercza",
    "altAnswers": [
      "nadnercza",
      "nadnercze"
    ],
    "explanation": "Nadnercza leżą na górnych biegunach nerek i wytwarzają m.in. adrenalinę.",
    "image": "r09_nadnercza_nerki.jpg"
  },
  {
    "id": "R09_GRU_06",
    "section": "Gruczoły i ich hormony",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do hormonów wytwarzanych przez trzustkę: insulina, glukagon, adrenalina.",
    "options": null,
    "answer": "adrenalina",
    "explanation": "Trzustka wytwarza insulinę i glukagon. Adrenalinę produkują nadnercza."
  },
  {
    "id": "R09_GRU_07",
    "section": "Gruczoły i ich hormony",
    "type": "scenario",
    "prompt": "Pod wpływem silnych emocji u osoby wzrasta ciśnienie krwi, serce bije szybciej, a oskrzela i źrenice się rozszerzają. Który hormon wywołuje taki efekt?",
    "options": [
      "adrenalina",
      "tyroksyna",
      "insulina",
      "glukagon",
      "progesteron",
      "hormon wzrostu"
    ],
    "answer": 0,
    "explanation": "Silne emocje zwiększają wydzielanie adrenaliny, która przygotowuje organizm do reakcji walki lub ucieczki.",
    "image": "r09_adrenalina_stres.jpg"
  },
  {
    "id": "R09_GRU_08",
    "section": "Gruczoły i ich hormony",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera hormony wytwarzane przez jajniki?",
    "options": [
      "estrogeny i progesteron",
      "insulina i glukagon",
      "adrenalina i tyroksyna",
      "testosteron i adrenalina",
      "hormon wzrostu i tyroksyna",
      "glukagon i progesteron"
    ],
    "answer": 0,
    "explanation": "Jajniki wytwarzają żeńskie hormony płciowe, m.in. estrogeny i progesteron."
  },
  {
    "id": "R09_GRU_09",
    "section": "Gruczoły i ich hormony",
    "type": "true_false",
    "prompt": "Testosteron jest hormonem płciowym wytwarzanym przez jądra.",
    "options": null,
    "answer": true,
    "explanation": "Jądra są gonadami męskimi i wytwarzają testosteron, który warunkuje rozwój męskich cech płciowych."
  },
  {
    "id": "R09_GRU_10",
    "section": "Gruczoły i ich hormony",
    "type": "sort",
    "prompt": "Przyporządkuj hormony do gruczołów, które je wytwarzają.",
    "options": null,
    "items": [
      "hormon wzrostu",
      "tyroksyna",
      "adrenalina",
      "insulina",
      "glukagon"
    ],
    "categories": [
      "Przysadka mózgowa",
      "Tarczyca",
      "Nadnercza",
      "Trzustka"
    ],
    "answer": {
      "Przysadka mózgowa": [
        "hormon wzrostu"
      ],
      "Tarczyca": [
        "tyroksyna"
      ],
      "Nadnercza": [
        "adrenalina"
      ],
      "Trzustka": [
        "insulina",
        "glukagon"
      ]
    },
    "explanation": "Przysadka produkuje hormon wzrostu, tarczyca tyroksynę, nadnercza adrenalinę, a trzustka insulinę i glukagon."
  },
  {
    "id": "R09_GLU_01",
    "section": "Regulacja glukozy",
    "type": "single_choice",
    "prompt": "Jak insulina wpływa na stężenie glukozy we krwi?",
    "options": [
      "obniża je",
      "podwyższa je",
      "nie wpływa na nie",
      "zawsze podwaja je",
      "działa tylko na temperaturę ciała",
      "zwiększa wydzielanie adrenaliny"
    ],
    "answer": 0,
    "explanation": "Insulina obniża stężenie glukozy we krwi, m.in. sprzyjając magazynowaniu glukozy w postaci glikogenu."
  },
  {
    "id": "R09_GLU_02",
    "section": "Regulacja glukozy",
    "type": "single_choice",
    "prompt": "Jak glukagon wpływa na stężenie glukozy we krwi?",
    "options": [
      "podwyższa je",
      "obniża je",
      "nie wpływa na nie",
      "zatrzymuje wydzielanie hormonów",
      "zmniejsza tempo metabolizmu",
      "powoduje powstawanie testosteronu"
    ],
    "answer": 0,
    "explanation": "Glukagon podwyższa stężenie glukozy we krwi, m.in. pobudzając rozkład glikogenu do glukozy."
  },
  {
    "id": "R09_GLU_03",
    "section": "Regulacja glukozy",
    "type": "true_false",
    "prompt": "Insulina i glukagon działają antagonistycznie.",
    "options": null,
    "answer": true,
    "explanation": "Insulina obniża stężenie glukozy we krwi, a glukagon je podwyższa, dlatego działają przeciwstawnie."
  },
  {
    "id": "R09_GLU_04",
    "section": "Regulacja glukozy",
    "type": "multi_select",
    "prompt": "Co dzieje się po wzroście stężenia glukozy we krwi po posiłku?",
    "options": [
      "trzustka zwiększa wydzielanie insuliny",
      "wątroba magazynuje glukozę w postaci glikogenu",
      "stężenie glukozy wraca w stronę poziomu optymalnego",
      "trzustka zwiększa wydzielanie glukagonu",
      "wątroba uwalnia glukozę z glikogenu do krwi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wysokie stężenie glukozy pobudza wydzielanie insuliny. Pod jej wpływem wątroba magazynuje glukozę jako glikogen, co obniża poziom glukozy we krwi.",
    "image": "r09_trzustka_watroba.jpg"
  },
  {
    "id": "R09_GLU_05",
    "section": "Regulacja glukozy",
    "type": "fill_in",
    "prompt": "Przy niskim stężeniu glukozy trzustka zwiększa wydzielanie __________, a wątroba rozkłada __________ do glukozy.",
    "options": null,
    "answer": [
      "glukagonu",
      "glikogen"
    ],
    "altAnswers": [
      [
        "glukagonu",
        "glukagon"
      ],
      [
        "glikogen"
      ]
    ],
    "explanation": "Niski poziom glukozy pobudza wydzielanie glukagonu, który prowadzi do rozkładu glikogenu do glukozy."
  },
  {
    "id": "R09_GLU_06",
    "section": "Regulacja glukozy",
    "type": "match",
    "prompt": "Połącz hormon lub proces z jego skutkiem.",
    "options": null,
    "left": [
      "Insulina – efekt",
      "Insulina – magazynowanie",
      "Glukagon – efekt",
      "Glukagon – rozkład"
    ],
    "right": [
      "obniża stężenie glukozy",
      "powstawanie glikogenu",
      "podwyższa stężenie glukozy",
      "rozkład glikogenu do glukozy"
    ],
    "answer": {
      "Insulina – efekt": "obniża stężenie glukozy",
      "Insulina – magazynowanie": "powstawanie glikogenu",
      "Glukagon – efekt": "podwyższa stężenie glukozy",
      "Glukagon – rozkład": "rozkład glikogenu do glukozy"
    },
    "explanation": "Insulina sprzyja magazynowaniu glukozy jako glikogenu i obniża glikemię, a glukagon pobudza rozkład glikogenu i podwyższa glikemię."
  },
  {
    "id": "R09_GLU_07",
    "section": "Regulacja glukozy",
    "type": "scenario",
    "prompt": "Po zjedzeniu banana we krwi pojawia się dużo glukozy. Który hormon trzustki powinien być wtedy wydzielany w większej ilości?",
    "options": [
      "insulina",
      "glukagon",
      "adrenalina",
      "tyroksyna",
      "testosteron",
      "progesteron"
    ],
    "answer": 0,
    "explanation": "Wzrost stężenia glukozy po posiłku pobudza trzustkę do zwiększenia wydzielania insuliny.",
    "image": "r09_trzustka_watroba.jpg"
  },
  {
    "id": "R09_GLU_08",
    "section": "Regulacja glukozy",
    "type": "sequence",
    "prompt": "Ułóż etapy obniżania stężenia glukozy po posiłku.",
    "options": null,
    "items": [
      "Wątroba magazynuje glukozę w postaci glikogenu",
      "Wzrasta stężenie glukozy we krwi",
      "Stężenie glukozy obniża się",
      "Trzustka zwiększa wydzielanie insuliny"
    ],
    "answer": [
      "Wzrasta stężenie glukozy we krwi",
      "Trzustka zwiększa wydzielanie insuliny",
      "Wątroba magazynuje glukozę w postaci glikogenu",
      "Stężenie glukozy obniża się"
    ],
    "explanation": "Po posiłku wzrost glukozy pobudza wydzielanie insuliny, która sprzyja magazynowaniu glukozy jako glikogenu i obniża jej stężenie we krwi."
  },
  {
    "id": "R09_GLU_09",
    "section": "Regulacja glukozy",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do bezpośredniej regulacji stężenia glukozy przez insulinę i glukagon: glukoza, glikogen, insulina, adrenalina.",
    "options": null,
    "answer": "adrenalina",
    "explanation": "Glukoza, glikogen i insulina uczestniczą bezpośrednio w mechanizmie regulacji glikemii. Adrenalina jest hormonem nadnerczy związanym m.in. z reakcją stresową."
  },
  {
    "id": "R09_GLU_10",
    "section": "Regulacja glukozy",
    "type": "sort",
    "prompt": "Przyporządkuj zjawiska do sytuacji wysokiego lub niskiego stężenia glukozy we krwi.",
    "options": null,
    "items": [
      "zwiększenie wydzielania insuliny",
      "magazynowanie glukozy jako glikogenu",
      "zwiększenie wydzielania glukagonu",
      "rozkład glikogenu do glukozy",
      "uwalnianie glukozy do krwi"
    ],
    "categories": [
      "Wysokie stężenie glukozy",
      "Niskie stężenie glukozy"
    ],
    "answer": {
      "Wysokie stężenie glukozy": [
        "zwiększenie wydzielania insuliny",
        "magazynowanie glukozy jako glikogenu"
      ],
      "Niskie stężenie glukozy": [
        "zwiększenie wydzielania glukagonu",
        "rozkład glikogenu do glukozy",
        "uwalnianie glukozy do krwi"
      ]
    },
    "explanation": "Przy wysokiej glikemii dominuje działanie insuliny i magazynowanie glukozy, a przy niskiej — glukagon, rozkład glikogenu i uwalnianie glukozy do krwi."
  },
  {
    "id": "R09_ZAB_01",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "single_choice",
    "prompt": "Co oznacza nadczynność gruczołu dokrewnego?",
    "options": [
      "wydzielanie zbyt dużej ilości hormonu",
      "wydzielanie zbyt małej ilości hormonu",
      "całkowity brak naczyń krwionośnych",
      "wydzielanie substancji na zewnątrz organizmu",
      "zawsze prawidłową pracę gruczołu",
      "brak receptorów we wszystkich komórkach"
    ],
    "answer": 0,
    "explanation": "Nadczynność oznacza, że gruczoł produkuje i wydziela za dużo hormonu."
  },
  {
    "id": "R09_ZAB_02",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "true_false",
    "prompt": "Niedoczynność gruczołu oznacza zbyt małe wydzielanie hormonu.",
    "options": null,
    "answer": true,
    "explanation": "Niedoczynność występuje wtedy, gdy gruczoł wydziela za mało hormonu."
  },
  {
    "id": "R09_ZAB_03",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "match",
    "prompt": "Połącz zaburzenie z jego przyczyną.",
    "options": null,
    "left": [
      "Karłowatość przysadkowa",
      "Gigantyzm",
      "Akromegalia",
      "Cukrzyca typu I",
      "Cukrzyca typu II"
    ],
    "right": [
      "zbyt mało hormonu wzrostu w dzieciństwie",
      "zbyt dużo hormonu wzrostu w dzieciństwie",
      "zbyt dużo hormonu wzrostu po okresie dojrzewania",
      "niedobór insuliny",
      "zmniejszona zdolność komórek do reagowania na insulinę"
    ],
    "answer": {
      "Karłowatość przysadkowa": "zbyt mało hormonu wzrostu w dzieciństwie",
      "Gigantyzm": "zbyt dużo hormonu wzrostu w dzieciństwie",
      "Akromegalia": "zbyt dużo hormonu wzrostu po okresie dojrzewania",
      "Cukrzyca typu I": "niedobór insuliny",
      "Cukrzyca typu II": "zmniejszona zdolność komórek do reagowania na insulinę"
    },
    "explanation": "Zaburzenia wzrostu zależą od poziomu hormonu wzrostu i wieku, a dwa typy cukrzycy różnią się niedoborem insuliny lub osłabioną reakcją komórek na insulinę."
  },
  {
    "id": "R09_ZAB_04",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "multi_select",
    "prompt": "Zaznacz objawy niedoczynności tarczycy.",
    "options": [
      "senność i problemy z koncentracją",
      "częsty wzrost masy ciała",
      "zła tolerancja na zimno",
      "nadpobudliwość",
      "spadek masy ciała",
      "podwyższenie temperatury organizmu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Niedoczynność tarczycy może powodować senność, problemy z koncentracją, wzrost masy ciała i złą tolerancję na zimno."
  },
  {
    "id": "R09_ZAB_05",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "fill_in",
    "prompt": "Nadczynność tarczycy może powodować __________, spadek masy ciała i podwyższenie __________ organizmu.",
    "options": null,
    "answer": [
      "nadpobudliwość",
      "temperatury"
    ],
    "altAnswers": [
      [
        "nadpobudliwość"
      ],
      [
        "temperatury",
        "temperaturę"
      ]
    ],
    "explanation": "Nadczynność tarczycy daje objawy przeciwne do niedoczynności, m.in. nadpobudliwość, spadek masy ciała i podwyższenie temperatury organizmu."
  },
  {
    "id": "R09_ZAB_06",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "scenario",
    "prompt": "U dziecka stwierdzono zbyt wysokie stężenie hormonu wzrostu. Dziecko rośnie nadmiernie, ale zachowuje proporcje ciała. Jak nazywa się to zaburzenie?",
    "options": [
      "gigantyzm",
      "akromegalia",
      "karłowatość przysadkowa",
      "niedoczynność tarczycy",
      "cukrzyca typu I",
      "cukrzyca typu II"
    ],
    "answer": 0,
    "explanation": "Nadmiar hormonu wzrostu w dzieciństwie prowadzi do gigantyzmu, który objawia się nadmiernym wzrostem przy zachowaniu proporcji ciała."
  },
  {
    "id": "R09_ZAB_07",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "riddle",
    "prompt": "Lekarz specjalizujący się w problemach z pracą gruczołów dokrewnych to...",
    "options": null,
    "answer": "endokrynolog",
    "altAnswers": [
      "endokrynolog",
      "lekarz endokrynolog"
    ],
    "explanation": "Zaburzeniami pracy gruczołów dokrewnych zajmuje się endokrynolog."
  },
  {
    "id": "R09_ZAB_08",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "single_choice",
    "prompt": "Co jest charakterystyczne dla cukrzycy typu II?",
    "options": [
      "zmniejszona zdolność komórek do reagowania na insulinę",
      "zawsze całkowity brak insuliny od urodzenia",
      "zbyt wysokie stężenie hormonu wzrostu w dzieciństwie",
      "nadczynność tarczycy",
      "zbyt małe wydzielanie tyroksyny",
      "nadmiar adrenaliny po posiłku"
    ],
    "answer": 0,
    "explanation": "W cukrzycy typu II komórki mają zmniejszoną zdolność reagowania na insulinę. Początkowo insuliny może być wydzielana odpowiednia lub nawet zbyt duża ilość."
  },
  {
    "id": "R09_ZAB_09",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy postępowania przy podejrzeniu zaburzeń hormonalnych.",
    "options": null,
    "items": [
      "Lekarz dobiera leczenie i dawkę",
      "Oznaczenie stężenia hormonów we krwi",
      "Stałe monitorowanie terapii",
      "Ocena wyniku przez lekarza"
    ],
    "answer": [
      "Oznaczenie stężenia hormonów we krwi",
      "Ocena wyniku przez lekarza",
      "Lekarz dobiera leczenie i dawkę",
      "Stałe monitorowanie terapii"
    ],
    "explanation": "Stężenie hormonów oznacza się we krwi, wynik ocenia lekarz, a w razie potrzeby dobiera leczenie i dawkę. Terapia hormonalna wymaga stałego monitorowania.",
    "image": "r09_badanie_krwi_hormony.jpg"
  },
  {
    "id": "R09_ZAB_10",
    "section": "Zaburzenia pracy układu hormonalnego",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do typowych cech cukrzycy typu I: częsty rozwój w młodym wieku, niedobór insuliny, mała liczba komórek trzustki produkujących insulinę, nadwaga i otyłość sprzyjające chorobie.",
    "options": null,
    "answer": "nadwaga i otyłość sprzyjające chorobie",
    "explanation": "Nadwaga i otyłość sprzyjają cukrzycy typu II. Typ I często rozwija się w młodym wieku i wiąże się z niedoborem insuliny oraz małą liczbą komórek trzustki produkujących ten hormon."
  },
  {
    "id": "R09_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Szczytowe stężenie melatoniny występuje od godziny __________ do __________ w nocy.",
    "options": null,
    "answer": [
      "24.00",
      "3.00"
    ],
    "altAnswers": [
      [
        "24.00",
        "24:00",
        "24"
      ],
      [
        "3.00",
        "3:00",
        "3"
      ]
    ],
    "explanation": "Szczytowe stężenie melatoniny przypada na okres od godziny 24.00 do 3.00 w nocy.",
    "image": "r09_szyszynka_mozg.jpg"
  },
  {
    "id": "R09_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która zmiana hormonalna zachodzi rano zgodnie z dobowym rytmem snu i czuwania?",
    "options": [
      "spada poziom melatoniny, a rośnie stężenie kortyzolu",
      "rośnie poziom melatoniny i spada stężenie kortyzolu",
      "rośnie poziom insuliny niezależnie od posiłku",
      "spada poziom tyroksyny do zera",
      "rośnie poziom testosteronu wyłącznie z powodu światła",
      "spada poziom adrenaliny do zera"
    ],
    "answer": 0,
    "explanation": "Rano poziom melatoniny spada, a rośnie stężenie kortyzolu produkowanego przez nadnercza."
  },
  {
    "id": "R09_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które substancje mogą zaburzać gospodarkę hormonalną?",
    "options": [
      "ftalany",
      "parabeny",
      "fenole",
      "toksyczne metale",
      "glukoza",
      "glikogen"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Ftalany, parabeny, fenole i toksyczne metale mogą zaburzać syntezę, regulację, transport i metabolizm hormonów."
  },
  {
    "id": "R09_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U osoby uczulonej na jad pszczeli po użądleniu rozwija się wstrząs anafilaktyczny. W którą część ciała podanie adrenaliny zwiększa szansę na ratunek?",
    "options": [
      "boczna część uda",
      "czubek palca",
      "skóra głowy",
      "okolica łokcia",
      "grzbiet stopy",
      "małżowina uszna"
    ],
    "answer": 0,
    "explanation": "W przypadku wstrząsu anafilaktycznego adrenalinę podaje się w boczną część uda."
  },
  {
    "id": "R09_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka jest podstawowa funkcja pompy insulinowej?",
    "options": [
      "stałe podskórne podawanie insuliny w sposób zbliżony do jej wydzielania u osoby zdrowej",
      "stałe podawanie glukagonu do żyły",
      "mierzenie wyłącznie temperatury ciała",
      "zastępowanie tarczycy",
      "zwiększanie wydzielania adrenaliny",
      "hamowanie pracy wszystkich gruczołów dokrewnych"
    ],
    "answer": 0,
    "explanation": "Pompa insulinowa umożliwia stałe podskórne podawanie insuliny w sposób zbliżony do jej wydzielania u osoby zdrowej.",
    "image": "r09_pompa_insulinowa.jpg"
  },
  {
    "id": "R09_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W początkowych etapach cukrzycy typu II organizm może wydzielać odpowiednią lub zbyt dużą ilość insuliny.",
    "options": null,
    "answer": true,
    "explanation": "W cukrzycy typu II problemem jest zmniejszona zdolność komórek do reagowania na insulinę, a początkowo ilość wydzielanej insuliny może być odpowiednia lub zbyt duża."
  },
  {
    "id": "R09_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do cukrzycy typu I lub typu II.",
    "options": null,
    "items": [
      "często rozwija się w młodym wieku",
      "niedobór insuliny",
      "mała liczba komórek trzustki produkujących insulinę",
      "sprzyjają jej nadwaga i otyłość",
      "komórki słabo reagują na insulinę",
      "rozwija się powoli"
    ],
    "categories": [
      "Cukrzyca typu I",
      "Cukrzyca typu II"
    ],
    "answer": {
      "Cukrzyca typu I": [
        "często rozwija się w młodym wieku",
        "niedobór insuliny",
        "mała liczba komórek trzustki produkujących insulinę"
      ],
      "Cukrzyca typu II": [
        "sprzyjają jej nadwaga i otyłość",
        "komórki słabo reagują na insulinę",
        "rozwija się powoli"
      ]
    },
    "explanation": "Typ I wiąże się z niedoborem insuliny i często zaczyna się w młodym wieku. Typ II rozwija się powoli, sprzyjają mu nadwaga i otyłość, a komórki słabiej reagują na insulinę."
  },
  {
    "id": "R09_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które narządy lub układy mogą ulec uszkodzeniu wskutek przewlekłej hiperglikemii?",
    "options": [
      "oczy",
      "nerki",
      "serce",
      "naczynia krwionośne",
      "paznokcie",
      "małżowina uszna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Przewlekła hiperglikemia może uszkadzać m.in. oczy, nerki, serce i naczynia krwionośne."
  },
  {
    "id": "R09_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Prawidłowe stężenie glukozy na czczo mieści się w zakresie __________–__________ mg/dl.",
    "options": null,
    "answer": [
      "70",
      "99"
    ],
    "altAnswers": [
      [
        "70"
      ],
      [
        "99"
      ]
    ],
    "explanation": "Zakres 70–99 mg/dl na czczo oznacza wynik prawidłowy."
  },
  {
    "id": "R09_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Godzinę po wypiciu glukozy wynik badania wynosi 180 mg/dl. Jak należy zinterpretować ten wynik?",
    "options": [
      "stan przedcukrzycowy",
      "wynik prawidłowy",
      "cukrzyca",
      "niedoczynność tarczycy",
      "nadczynność przysadki",
      "brak możliwości interpretacji"
    ],
    "answer": 0,
    "explanation": "Godzinę po wypiciu glukozy wynik 140–200 mg/dl odpowiada stanowi przedcukrzycowemu, więc 180 mg/dl mieści się w tym zakresie."
  },
  {
    "id": "R09_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia związane z dobowym rytmem melatoniny i kortyzolu.",
    "options": null,
    "items": [
      "Rano rośnie stężenie kortyzolu",
      "Nadchodzi zmierzch i pojawia się senność",
      "Rano spada poziom melatoniny",
      "Melatonina osiąga szczytowe stężenie między 24.00 a 3.00"
    ],
    "answer": [
      "Nadchodzi zmierzch i pojawia się senność",
      "Melatonina osiąga szczytowe stężenie między 24.00 a 3.00",
      "Rano spada poziom melatoniny",
      "Rano rośnie stężenie kortyzolu"
    ],
    "explanation": "Melatonina sprzyja senności po zmierzchu i osiąga maksimum w nocy. Rano jej poziom spada, a rośnie stężenie kortyzolu.",
    "image": "r09_szyszynka_mozg.jpg"
  },
  {
    "id": "R09_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do objawów nadczynności tarczycy: nadpobudliwość, spadek masy ciała, podwyższenie temperatury organizmu, zła tolerancja na zimno.",
    "options": null,
    "answer": "zła tolerancja na zimno",
    "explanation": "Zła tolerancja na zimno jest objawem niedoczynności tarczycy. Nadczynność może powodować nadpobudliwość, spadek masy ciała i podwyższenie temperatury organizmu."
  },
  {
    "id": "R09_HARD_13",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz hormon z jego funkcją.",
    "options": null,
    "left": [
      "Tyroksyna",
      "Progesteron",
      "Estrogeny",
      "Adrenalina",
      "Hormon wzrostu"
    ],
    "right": [
      "stymuluje i podtrzymuje przemianę materii",
      "odpowiada za rozwój zarodka i płodu",
      "regulują cykl miesiączkowy",
      "mobilizuje organizm w sytuacji stresowej",
      "odpowiada za wzrost ciała"
    ],
    "answer": {
      "Tyroksyna": "stymuluje i podtrzymuje przemianę materii",
      "Progesteron": "odpowiada za rozwój zarodka i płodu",
      "Estrogeny": "regulują cykl miesiączkowy",
      "Adrenalina": "mobilizuje organizm w sytuacji stresowej",
      "Hormon wzrostu": "odpowiada za wzrost ciała"
    },
    "explanation": "Tyroksyna reguluje tempo przemiany materii, progesteron wspiera rozwój zarodka i płodu, estrogeny regulują cykl miesiączkowy, adrenalina mobilizuje w stresie, a hormon wzrostu odpowiada za wzrost ciała."
  },
  {
    "id": "R09_HARD_14",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "U osoby dorosłej obserwuje się nadmierny wzrost kości twarzy, rąk i stóp oraz powiększenie niektórych narządów wewnętrznych. Jak nazywa się to zaburzenie?",
    "options": [
      "akromegalia",
      "gigantyzm",
      "karłowatość przysadkowa",
      "cukrzyca typu I",
      "niedoczynność tarczycy",
      "cukrzyca typu II"
    ],
    "answer": 0,
    "explanation": "Nadmiar hormonu wzrostu po okresie dojrzewania prowadzi do akromegalii, która obejmuje m.in. rozrost kości twarzy, rąk i stóp oraz powiększenie narządów."
  },
  {
    "id": "R09_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Dlaczego terapię hormonalną należy prowadzić pod kontrolą lekarza?",
    "options": [
      "potrzebna dawka różni się między osobami",
      "dawkę ustala się na podstawie badań krwi",
      "terapia wymaga stałego monitorowania",
      "leki hormonalne mogą wywołać poważne skutki uboczne",
      "każdy hormon działa natychmiast i tylko przez milisekundy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dawka leków hormonalnych zależy od osoby i wyników badań krwi, terapia wymaga monitorowania, a niewłaściwe stosowanie może prowadzić do poważnych skutków ubocznych."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r09",
  number: 9,
  title: "Układ hormonalny",
  icon: "🧬",
  sectionOrder: [
    "Budowa układu hormonalnego",
    "Działanie hormonów i układ nerwowy",
    "Gruczoły i ich hormony",
    "Regulacja glukozy",
    "Zaburzenia pracy układu hormonalnego"
  ],
  sectionIcons: {
    "Budowa układu hormonalnego": "🧩",
    "Działanie hormonów i układ nerwowy": "📡",
    "Gruczoły i ich hormony": "🧪",
    "Regulacja glukozy": "🍬",
    "Zaburzenia pracy układu hormonalnego": "🩺"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
