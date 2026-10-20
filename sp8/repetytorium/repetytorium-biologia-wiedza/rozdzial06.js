// Skróty sekcji (do identyfikatorów ćwiczeń):
//   MOC = Układ moczowy i wydalanie
//   NER = Układ nerwowy
//   ZMY = Narządy zmysłów
//   HOR = Układ hormonalny
//   ROZ = Układ rozrodczy i rozwój człowieka
//   HOM = Homeostaza i zdrowie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_MOC_01",
    "section": "Układ moczowy i wydalanie",
    "type": "single_choice",
    "prompt": "Który narząd filtruje krew i wytwarza mocz?",
    "options": [
      "Nerka",
      "Pęcherz moczowy",
      "Moczowód",
      "Cewka moczowa",
      "Wątroba",
      "Śledziona"
    ],
    "answer": 0,
    "explanation": "Nerki usuwają z krwi zbędne produkty przemiany materii i odzyskują część wody.",
    "image": "r06_nerka_przekroj.jpg"
  },
  {
    "id": "R06_MOC_02",
    "section": "Układ moczowy i wydalanie",
    "type": "multi_select",
    "prompt": "Zaznacz substancje, które mogą być wydalane z moczem.",
    "options": [
      "Mocznik",
      "Kwas moczowy",
      "Nadmiar wody",
      "Dwutlenek węgla",
      "Produkty rozkładu leków",
      "Tlen"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Mocz usuwa m.in. nadmiar wody, mocznik, kwas moczowy oraz produkty rozkładu leków."
  },
  {
    "id": "R06_MOC_03",
    "section": "Układ moczowy i wydalanie",
    "type": "true_false",
    "prompt": "Kora nerki stanowi jej warstwę zewnętrzną i zawiera ciałka nerkowe.",
    "options": null,
    "answer": true,
    "explanation": "Kora nerki jest zewnętrzną warstwą miąższu, a rdzeń zawiera kanaliki i cewki zbiorcze.",
    "image": "r06_nerka_przekroj.jpg"
  },
  {
    "id": "R06_MOC_04",
    "section": "Układ moczowy i wydalanie",
    "type": "fill_in",
    "prompt": "Podstawową jednostką funkcjonalną nerki jest __________.",
    "options": null,
    "answer": [
      "nefron"
    ],
    "altAnswers": [
      [
        "nefron",
        "nefronem"
      ]
    ],
    "explanation": "Nefron obejmuje ciałko nerkowe i kanalik nerkowy, dzięki którym powstaje mocz.",
    "image": "r06_nefron_schemat.jpg"
  },
  {
    "id": "R06_MOC_05",
    "section": "Układ moczowy i wydalanie",
    "type": "riddle",
    "prompt": "Jak nazywa się naczynie doprowadzające krew do nerki?",
    "options": null,
    "answer": "tętnica nerkowa",
    "altAnswers": [
      "tętnica nerkowa",
      "tętnicą nerkową"
    ],
    "explanation": "Tętnica nerkowa doprowadza krew, natomiast żyła nerkowa odprowadza krew po filtracji."
  },
  {
    "id": "R06_MOC_06",
    "section": "Układ moczowy i wydalanie",
    "type": "odd_one_out",
    "prompt": "Wskaż element nienależący do dróg moczowych: moczowód, pęcherz moczowy, cewka moczowa, neuron.",
    "options": null,
    "answer": "neuron",
    "explanation": "Neuron jest komórką układu nerwowego; pozostałe elementy tworzą drogi moczowe."
  },
  {
    "id": "R06_MOC_07",
    "section": "Układ moczowy i wydalanie",
    "type": "scenario",
    "prompt": "W moczu pierwotnym znajdują się glukoza, aminokwasy i dużo wody. W której części nefronu odzyskiwane są te potrzebne substancje?",
    "options": [
      "W kanalikach nerkowych",
      "W pęcherzu moczowym",
      "W moczowodach",
      "W cewce moczowej"
    ],
    "answer": 0,
    "explanation": "Wchłanianie zwrotne w kanalikach nerkowych pozwala odzyskać wodę, glukozę, jony i aminokwasy.",
    "image": "r06_nefron_schemat.jpg"
  },
  {
    "id": "R06_MOC_08",
    "section": "Układ moczowy i wydalanie",
    "type": "match",
    "prompt": "Połącz element układu moczowego z funkcją.",
    "options": null,
    "left": [
      "nerki",
      "moczowody",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "right": [
      "transport moczu do pęcherza",
      "wyprowadzanie moczu na zewnątrz",
      "filtrowanie krwi",
      "gromadzenie moczu"
    ],
    "answer": {
      "nerki": "filtrowanie krwi",
      "moczowody": "transport moczu do pęcherza",
      "pęcherz moczowy": "gromadzenie moczu",
      "cewka moczowa": "wyprowadzanie moczu na zewnątrz"
    },
    "explanation": "Nerki tworzą mocz, który płynie moczowodami do pęcherza, a następnie opuszcza organizm cewką."
  },
  {
    "id": "R06_MOC_09",
    "section": "Układ moczowy i wydalanie",
    "type": "sort",
    "prompt": "Podziel składniki na te, które przechodzą do moczu pierwotnego, oraz te, które do niego nie przechodzą.",
    "options": null,
    "items": [
      "krwinki",
      "aminokwasy",
      "glukoza",
      "mocznik",
      "woda",
      "białka"
    ],
    "categories": [
      "przechodzą do moczu pierwotnego",
      "nie przechodzą do moczu pierwotnego"
    ],
    "answer": {
      "przechodzą do moczu pierwotnego": [
        "glukoza",
        "mocznik",
        "aminokwasy",
        "woda"
      ],
      "nie przechodzą do moczu pierwotnego": [
        "krwinki",
        "białka"
      ]
    },
    "explanation": "W kłębuszku filtrują się małe cząsteczki, natomiast krwinki i białka zostają we krwi."
  },
  {
    "id": "R06_MOC_10",
    "section": "Układ moczowy i wydalanie",
    "type": "sequence",
    "prompt": "Ułóż drogę odpływu moczu od nefronu na zewnątrz ciała.",
    "options": null,
    "items": [
      "pęcherz moczowy",
      "miedniczka nerkowa",
      "kanaliki zbiorcze",
      "moczowód",
      "cewka moczowa"
    ],
    "answer": [
      "kanaliki zbiorcze",
      "miedniczka nerkowa",
      "moczowód",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "explanation": "Mocz przechodzi z kanalików zbiorczych do miedniczki, moczowodu, pęcherza i cewki."
  },
  {
    "id": "R06_MOC_11",
    "section": "Układ moczowy i wydalanie",
    "type": "true_false",
    "prompt": "Regularne opróżnianie pęcherza moczowego pomaga zapobiegać zakażeniom układu moczowego.",
    "options": null,
    "answer": true,
    "explanation": "Niezatrzymywanie moczu ogranicza ryzyko zakażeń bakteryjnych dróg moczowych."
  },
  {
    "id": "R06_NER_01",
    "section": "Układ nerwowy",
    "type": "single_choice",
    "prompt": "Która część neuronu przewodzi impulsy od ciała komórki w stronę zakończeń?",
    "options": [
      "akson",
      "dendryt",
      "jądro komórkowe",
      "osłonka mielinowa",
      "ciało komórki",
      "synapsa"
    ],
    "answer": 0,
    "explanation": "W neuronie impuls zwykle biegnie od dendrytów przez ciało komórki do aksonu.",
    "image": "r06_neuron_budowa.jpg"
  },
  {
    "id": "R06_NER_02",
    "section": "Układ nerwowy",
    "type": "multi_select",
    "prompt": "Wybierz struktury należące do ośrodkowego układu nerwowego.",
    "options": [
      "mózgowie",
      "rdzeń kręgowy",
      "nerwy czaszkowe",
      "nerwy rdzeniowe",
      "móżdżek jako część mózgowia"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Ośrodkowy układ nerwowy obejmuje mózgowie (w tym móżdżek) i rdzeń kręgowy."
  },
  {
    "id": "R06_NER_03",
    "section": "Układ nerwowy",
    "type": "true_false",
    "prompt": "Osłonka mielinowa umożliwia szybsze skokowe przewodzenie impulsu między przewężeniami Ranviera.",
    "options": null,
    "answer": true,
    "explanation": "We włóknach mielinowych impuls przewodzony jest skokowo, a we włóknach bezmielinowych w sposób ciągły.",
    "image": "r06_neuron_budowa.jpg"
  },
  {
    "id": "R06_NER_04",
    "section": "Układ nerwowy",
    "type": "fill_in",
    "prompt": "Połączenie przekazujące sygnał z jednego neuronu do drugiego nazywa się __________.",
    "options": null,
    "answer": [
      "synapsą"
    ],
    "altAnswers": [
      [
        "synapsą",
        "synapsa",
        "synapsie"
      ]
    ],
    "explanation": "W synapsie neuroprzekaźniki przenoszą informację przez szczelinę synaptyczną."
  },
  {
    "id": "R06_NER_05",
    "section": "Układ nerwowy",
    "type": "riddle",
    "prompt": "Który płat kory mózgowej jest ośrodkiem wzroku?",
    "options": null,
    "answer": "potyliczny",
    "altAnswers": [
      "potyliczny",
      "płat potyliczny"
    ],
    "explanation": "Ośrodek wzroku znajduje się w płacie potylicznym.",
    "image": "r06_mozg_platy.jpg"
  },
  {
    "id": "R06_NER_06",
    "section": "Układ nerwowy",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę niezwiązaną z budową neuronu: dendryt, akson, osłonka mielinowa, miedniczka nerkowa.",
    "options": null,
    "answer": "miedniczka nerkowa",
    "explanation": "Miedniczka nerkowa należy do nerki; pozostałe to elementy neuronu."
  },
  {
    "id": "R06_NER_07",
    "section": "Układ nerwowy",
    "type": "scenario",
    "prompt": "Ktoś dotyka gorącego naczynia i szybko cofa rękę, zanim świadomie przeanalizuje zagrożenie. Jaki mechanizm umożliwia taką reakcję?",
    "options": [
      "odruch z udziałem łuku odruchowego",
      "aktywacja kubków smakowych",
      "filtracja w nefronach",
      "skurcz przedsionków serca"
    ],
    "answer": 0,
    "explanation": "Łuk odruchowy umożliwia szybki przebieg informacji od receptora do efektora.",
    "image": "r06_luk_odruchowy.jpg"
  },
  {
    "id": "R06_NER_08",
    "section": "Układ nerwowy",
    "type": "match",
    "prompt": "Połącz płat mózgu z przypisaną mu funkcją.",
    "options": null,
    "left": [
      "czołowy",
      "ciemieniowy",
      "skroniowy",
      "potyliczny"
    ],
    "right": [
      "czucie i orientacja przestrzenna",
      "wzrok",
      "czynności ruchowe i psychiczne",
      "mowa i słuch"
    ],
    "answer": {
      "czołowy": "czynności ruchowe i psychiczne",
      "ciemieniowy": "czucie i orientacja przestrzenna",
      "skroniowy": "mowa i słuch",
      "potyliczny": "wzrok"
    },
    "explanation": "Poszczególne płaty mózgu odpowiadają za różne funkcje, m.in. ruch, czucie, widzenie i słyszenie.",
    "image": "r06_mozg_platy.jpg"
  },
  {
    "id": "R06_NER_09",
    "section": "Układ nerwowy",
    "type": "sort",
    "prompt": "Przyporządkuj reakcje do części autonomicznego układu nerwowego.",
    "options": null,
    "items": [
      "spowolnienie pracy serca",
      "hamowanie trawienia",
      "rozszerzenie źrenic",
      "przyspieszenie pracy serca",
      "zwężenie źrenic",
      "pobudzanie trawienia"
    ],
    "categories": [
      "współczulny",
      "przywspółczulny"
    ],
    "answer": {
      "współczulny": [
        "rozszerzenie źrenic",
        "przyspieszenie pracy serca",
        "hamowanie trawienia"
      ],
      "przywspółczulny": [
        "zwężenie źrenic",
        "spowolnienie pracy serca",
        "pobudzanie trawienia"
      ]
    },
    "explanation": "Układ współczulny mobilizuje organizm, a przywspółczulny sprzyja czynnościom odpoczynku i trawienia."
  },
  {
    "id": "R06_NER_10",
    "section": "Układ nerwowy",
    "type": "sequence",
    "prompt": "Ułóż elementy łuku odruchowego zgodnie z drogą impulsu.",
    "options": null,
    "items": [
      "neuron ruchowy",
      "neuron czuciowy",
      "receptor",
      "ośrodek nerwowy",
      "efektor"
    ],
    "answer": [
      "receptor",
      "neuron czuciowy",
      "ośrodek nerwowy",
      "neuron ruchowy",
      "efektor"
    ],
    "explanation": "Impuls przechodzi od receptora przez neuron czuciowy i ośrodek nerwowy do neuronu ruchowego i efektora.",
    "image": "r06_luk_odruchowy.jpg"
  },
  {
    "id": "R06_NER_11",
    "section": "Układ nerwowy",
    "type": "single_choice",
    "prompt": "Która część mózgowia odpowiada za równowagę i koordynację ruchów?",
    "options": [
      "móżdżek",
      "płat potyliczny",
      "rdzeń przedłużony",
      "płat skroniowy",
      "spoidło wielkie",
      "przysadka mózgowa"
    ],
    "answer": 0,
    "explanation": "Móżdżek odpowiada za równowagę, koordynację ruchów i napięcie mięśni szkieletowych."
  },
  {
    "id": "R06_NER_12",
    "section": "Układ nerwowy",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje snu.",
    "options": [
      "utrwalanie pamięci",
      "regeneracja komórek nerwowych",
      "odpoczynek układu nerwowego",
      "całkowite wyłączenie działania mózgu",
      "wydzielanie hormonu wzrostu"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Sen pozwala odpocząć układowi nerwowemu, wspiera pamięć i regenerację oraz wydzielanie hormonu wzrostu."
  },
  {
    "id": "R06_NER_13",
    "section": "Układ nerwowy",
    "type": "true_false",
    "prompt": "W uzależnieniu człowiek może dalej przyjmować substancję mimo wiedzy o jej szkodliwym działaniu.",
    "options": null,
    "answer": true,
    "explanation": "Uzależnienie wiąże się z silną potrzebą przyjmowania substancji pomimo negatywnych konsekwencji."
  },
  {
    "id": "R06_ZMY_01",
    "section": "Narządy zmysłów",
    "type": "single_choice",
    "prompt": "Która błona oka zawiera czopki i pręciki?",
    "options": [
      "siatkówka",
      "twardówka",
      "naczyniówka",
      "rogówka",
      "spojówka",
      "tęczówka"
    ],
    "answer": 0,
    "explanation": "Siatkówka jest błoną wewnętrzną oka i zawiera receptory wzrokowe.",
    "image": "r06_oko_przekroj.jpg"
  },
  {
    "id": "R06_ZMY_02",
    "section": "Narządy zmysłów",
    "type": "multi_select",
    "prompt": "Zaznacz elementy aparatu ochronnego oka.",
    "options": [
      "rzęsy",
      "powieki",
      "gruczoł łzowy",
      "spojówka",
      "siatkówka",
      "nerw wzrokowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Aparat ochronny oka tworzą m.in. brwi, rzęsy, powieki, gruczoł łzowy i spojówka."
  },
  {
    "id": "R06_ZMY_03",
    "section": "Narządy zmysłów",
    "type": "true_false",
    "prompt": "Pręciki pozwalają widzieć w słabym oświetleniu i rozróżniać stopnie szarości.",
    "options": null,
    "answer": true,
    "explanation": "Pręciki działają w słabym świetle, a czopki odpowiadają za widzenie barw."
  },
  {
    "id": "R06_ZMY_04",
    "section": "Narządy zmysłów",
    "type": "fill_in",
    "prompt": "W oku ośrodek najostrzejszego widzenia znajduje się w plamce __________.",
    "options": null,
    "answer": [
      "żółtej"
    ],
    "altAnswers": [
      [
        "żółtej",
        "żółta"
      ]
    ],
    "explanation": "Najwięcej czopków występuje w plamce żółtej."
  },
  {
    "id": "R06_ZMY_05",
    "section": "Narządy zmysłów",
    "type": "riddle",
    "prompt": "Jak nazywa się zmiana kształtu soczewki zapewniająca ostre widzenie z różnych odległości?",
    "options": null,
    "answer": "akomodacja",
    "altAnswers": [
      "akomodacja",
      "akomodację"
    ],
    "explanation": "Akomodacja polega na zmianie krzywizny soczewki zależnie od odległości obserwowanego przedmiotu."
  },
  {
    "id": "R06_ZMY_06",
    "section": "Narządy zmysłów",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę nienależącą do ucha: młoteczek, kowadełko, strzemiączko, soczewka.",
    "options": null,
    "answer": "soczewka",
    "explanation": "Soczewka jest częścią oka, a pozostałe elementy są kosteczkami słuchowymi."
  },
  {
    "id": "R06_ZMY_07",
    "section": "Narządy zmysłów",
    "type": "scenario",
    "prompt": "Uczeń wyraźnie widzi książkę trzymaną blisko, ale ma trudność z dostrzeżeniem napisów na tablicy. Jaką wadę wzroku opisuje ten przypadek?",
    "options": [
      "krótkowzroczność",
      "dalekowzroczność",
      "astygmatyzm",
      "zaćma"
    ],
    "answer": 0,
    "explanation": "W krótkowzroczności promienie skupiają się przed siatkówką, a odległe obiekty są niewyraźne."
  },
  {
    "id": "R06_ZMY_08",
    "section": "Narządy zmysłów",
    "type": "match",
    "prompt": "Dopasuj część ucha do jej funkcji.",
    "options": null,
    "left": [
      "małżowina uszna",
      "kosteczki słuchowe",
      "ślimak",
      "kanały półkoliste"
    ],
    "right": [
      "przenoszą i wzmacniają drgania",
      "rejestrują zmiany położenia ciała",
      "wychwytuje dźwięki",
      "zawiera komórki słuchowe"
    ],
    "answer": {
      "małżowina uszna": "wychwytuje dźwięki",
      "kosteczki słuchowe": "przenoszą i wzmacniają drgania",
      "ślimak": "zawiera komórki słuchowe",
      "kanały półkoliste": "rejestrują zmiany położenia ciała"
    },
    "explanation": "Zewnętrzne ucho zbiera dźwięki, środkowe je przenosi, a wewnętrzne odbiera drgania i ruchy.",
    "image": "r06_ucho_budowa.jpg"
  },
  {
    "id": "R06_ZMY_09",
    "section": "Narządy zmysłów",
    "type": "sort",
    "prompt": "Podziel narządy i receptory według odbieranego bodźca.",
    "options": null,
    "items": [
      "komórki słuchowe",
      "komórki smakowe",
      "czopki",
      "pręciki",
      "receptory węchowe",
      "receptory równowagi"
    ],
    "categories": [
      "bodźce świetlne",
      "bodźce chemiczne",
      "bodźce mechaniczne lub położenie"
    ],
    "answer": {
      "bodźce świetlne": [
        "czopki",
        "pręciki"
      ],
      "bodźce chemiczne": [
        "komórki smakowe",
        "receptory węchowe"
      ],
      "bodźce mechaniczne lub położenie": [
        "komórki słuchowe",
        "receptory równowagi"
      ]
    },
    "explanation": "Receptory oka odbierają światło, węchu i smaku — związki chemiczne, a ucha — drgania i zmiany położenia."
  },
  {
    "id": "R06_ZMY_10",
    "section": "Narządy zmysłów",
    "type": "sequence",
    "prompt": "Ułóż kolejno struktury uczestniczące w przewodzeniu dźwięku.",
    "options": null,
    "items": [
      "kosteczki słuchowe",
      "przewód słuchowy zewnętrzny",
      "małżowina uszna",
      "błona bębenkowa",
      "ślimak"
    ],
    "answer": [
      "małżowina uszna",
      "przewód słuchowy zewnętrzny",
      "błona bębenkowa",
      "kosteczki słuchowe",
      "ślimak"
    ],
    "explanation": "Dźwięk przechodzi przez ucho zewnętrzne, pobudza błonę bębenkową i kosteczki, a następnie ślimak.",
    "image": "r06_ucho_budowa.jpg"
  },
  {
    "id": "R06_ZMY_11",
    "section": "Narządy zmysłów",
    "type": "single_choice",
    "prompt": "Która substancja musi rozpuścić cząsteczki zapachowe, aby pobudziły receptory w nosie?",
    "options": [
      "śluz",
      "łzy",
      "krew",
      "pot",
      "żółć",
      "mocz"
    ],
    "answer": 0,
    "explanation": "Cząsteczki zapachowe muszą rozpuścić się w śluzie nabłonka węchowego przed przyłączeniem do receptorów."
  },
  {
    "id": "R06_HOR_01",
    "section": "Układ hormonalny",
    "type": "single_choice",
    "prompt": "Który gruczoł wydziela tyroksynę?",
    "options": [
      "tarczyca",
      "trzustka",
      "przysadka",
      "nadnercza",
      "jajniki",
      "jądra"
    ],
    "answer": 0,
    "explanation": "Tyroksyna jest hormonem tarczycy i reguluje przemianę materii.",
    "image": "r06_gruczoly_dokrewne.jpg"
  },
  {
    "id": "R06_HOR_02",
    "section": "Układ hormonalny",
    "type": "multi_select",
    "prompt": "Zaznacz hormony wydzielane przez trzustkę.",
    "options": [
      "insulina",
      "glukagon",
      "tyroksyna",
      "progesteron",
      "hormon wzrostu"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Insulina i glukagon to hormony trzustki działające antagonistycznie na poziom glukozy."
  },
  {
    "id": "R06_HOR_03",
    "section": "Układ hormonalny",
    "type": "true_false",
    "prompt": "Insulina obniża poziom glukozy we krwi, a glukagon go podwyższa.",
    "options": null,
    "answer": true,
    "explanation": "Insulina sprzyja magazynowaniu glukozy w postaci glikogenu, a glukagon uwalnianiu glukozy do krwi."
  },
  {
    "id": "R06_HOR_04",
    "section": "Układ hormonalny",
    "type": "fill_in",
    "prompt": "Gruczołem w mózgowiu regulowanym przez podwzgórze jest __________.",
    "options": null,
    "answer": [
      "przysadka"
    ],
    "altAnswers": [
      [
        "przysadka",
        "przysadka mózgowa",
        "przysadkę"
      ]
    ],
    "explanation": "Podwzgórze reguluje wydzielanie hormonów przysadki, a ta oddziałuje na inne gruczoły."
  },
  {
    "id": "R06_HOR_05",
    "section": "Układ hormonalny",
    "type": "riddle",
    "prompt": "Jak nazywa się mechanizm, w którym wzrost poziomu tyroksyny hamuje dalsze pobudzanie tarczycy?",
    "options": null,
    "answer": "ujemne sprzężenie zwrotne",
    "altAnswers": [
      "ujemne sprzężenie zwrotne",
      "sprzężenie zwrotne ujemne"
    ],
    "explanation": "Duże stężenie tyroksyny powoduje osłabienie sygnałów pobudzających jej wydzielanie."
  },
  {
    "id": "R06_HOR_06",
    "section": "Układ hormonalny",
    "type": "odd_one_out",
    "prompt": "Wskaż hormon niewydzielany przez narządy rozrodcze: estrogeny, progesteron, testosteron, tyroksyna.",
    "options": null,
    "answer": "tyroksyna",
    "explanation": "Tyroksyna jest wydzielana przez tarczycę, a pozostałe hormony przez jajniki lub jądra."
  },
  {
    "id": "R06_HOR_07",
    "section": "Układ hormonalny",
    "type": "scenario",
    "prompt": "Po posiłku wzrasta poziom glukozy we krwi. Który hormon odpowiada za jego obniżenie?",
    "options": [
      "insulina",
      "glukagon",
      "adrenalina",
      "tyroksyna"
    ],
    "answer": 0,
    "explanation": "Insulina wspomaga przekształcanie glukozy w glikogen i obniża stężenie cukru we krwi."
  },
  {
    "id": "R06_HOR_08",
    "section": "Układ hormonalny",
    "type": "match",
    "prompt": "Połącz gruczoły dokrewne z wydzielanymi przez nie hormonami.",
    "options": null,
    "left": [
      "przysadka",
      "tarczyca",
      "trzustka",
      "jajniki"
    ],
    "right": [
      "tyroksyna",
      "progesteron",
      "hormon wzrostu",
      "insulina"
    ],
    "answer": {
      "przysadka": "hormon wzrostu",
      "tarczyca": "tyroksyna",
      "trzustka": "insulina",
      "jajniki": "progesteron"
    },
    "explanation": "Hormon wzrostu wydziela przysadka, tyroksynę tarczyca, insulinę trzustka, a progesteron jajniki.",
    "image": "r06_gruczoly_dokrewne.jpg"
  },
  {
    "id": "R06_HOR_09",
    "section": "Układ hormonalny",
    "type": "sort",
    "prompt": "Podziel opisane zaburzenia według poziomu wydzielania hormonu.",
    "options": null,
    "items": [
      "zbyt dużo wydzielanego hormonu",
      "zbyt mało wydzielanego hormonu",
      "obniżone wydzielanie gruczołu",
      "nadmierne wydzielanie gruczołu"
    ],
    "categories": [
      "niedoczynność",
      "nadczynność"
    ],
    "answer": {
      "niedoczynność": [
        "zbyt mało wydzielanego hormonu",
        "obniżone wydzielanie gruczołu"
      ],
      "nadczynność": [
        "zbyt dużo wydzielanego hormonu",
        "nadmierne wydzielanie gruczołu"
      ]
    },
    "explanation": "Niedoczynność oznacza zbyt małe, a nadczynność zbyt duże wydzielanie hormonów."
  },
  {
    "id": "R06_HOR_10",
    "section": "Układ hormonalny",
    "type": "true_false",
    "prompt": "Hormony działają jednakowo na każdą komórkę organizmu, niezależnie od receptorów.",
    "options": null,
    "answer": false,
    "explanation": "Hormony oddziałują tylko na komórki mające odpowiednie receptory."
  },
  {
    "id": "R06_ROZ_01",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "single_choice",
    "prompt": "W którym narządzie męskim wytwarzane są plemniki?",
    "options": [
      "jądro",
      "najądrze",
      "nasieniowód",
      "pęcherzyk nasienny",
      "prostata",
      "prącie"
    ],
    "answer": 0,
    "explanation": "Plemniki powstają w kanalikach nasiennych jąder, a dojrzewają w najądrzach."
  },
  {
    "id": "R06_ROZ_02",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "multi_select",
    "prompt": "Wybierz prawidłowe funkcje elementów plemnika.",
    "options": [
      "akrosom zawiera enzymy ułatwiające wniknięcie do komórki jajowej",
      "wstawka zawiera liczne mitochondria",
      "witka umożliwia ruch",
      "jądro komórkowe znajduje się w główce",
      "witka produkuje progesteron"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Główka niesie materiał genetyczny i akrosom, wstawka dostarcza energii, a witka umożliwia ruch.",
    "image": "r06_plemnik_budowa.jpg"
  },
  {
    "id": "R06_ROZ_03",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "true_false",
    "prompt": "Do zapłodnienia u człowieka dochodzi zwykle w jajowodzie.",
    "options": null,
    "answer": true,
    "explanation": "Zapłodnienie następuje najczęściej w bańce jajowodu, gdzie plemnik łączy się z komórką jajową.",
    "image": "r06_uklad_rozrodczy_zenski.jpg"
  },
  {
    "id": "R06_ROZ_04",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "fill_in",
    "prompt": "Pęknięcie pęcherzyka jajnikowego i uwolnienie dojrzałej komórki jajowej to __________.",
    "options": null,
    "answer": [
      "owulacja"
    ],
    "altAnswers": [
      [
        "owulacja",
        "jajeczkowanie",
        "owulację"
      ]
    ],
    "explanation": "Owulacja, zwana jajeczkowaniem, następuje pod wpływem hormonów FSH i LH."
  },
  {
    "id": "R06_ROZ_05",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "riddle",
    "prompt": "Jaki hormon wydziela ciałko żółte w fazie poowulacyjnej?",
    "options": null,
    "answer": "progesteron",
    "altAnswers": [
      "progesteron",
      "progesteronu"
    ],
    "explanation": "Ciałko żółte wydziela progesteron, podtrzymując przygotowanie błony śluzowej macicy."
  },
  {
    "id": "R06_ROZ_06",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "odd_one_out",
    "prompt": "Wskaż strukturę nienależącą do żeńskiego układu rozrodczego: jajnik, jajowód, macica, nasieniowód.",
    "options": null,
    "answer": "nasieniowód",
    "explanation": "Nasieniowód jest elementem męskiego układu rozrodczego."
  },
  {
    "id": "R06_ROZ_07",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "scenario",
    "prompt": "Zygota przemieszcza się ku macicy, dzieli się i po około tygodniu zagnieżdża w jej błonie śluzowej. Jak nazywa się ten proces osadzenia zarodka?",
    "options": [
      "implantacja (zagnieżdżenie)",
      "owulacja",
      "menstruacja",
      "menopauza"
    ],
    "answer": 0,
    "explanation": "Zarodek zagnieżdża się w błonie śluzowej macicy około siódmego dnia po zapłodnieniu."
  },
  {
    "id": "R06_ROZ_08",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "match",
    "prompt": "Dopasuj narząd żeńskiego układu rozrodczego do funkcji.",
    "options": null,
    "left": [
      "jajniki",
      "jajowody",
      "macica",
      "pochwa"
    ],
    "right": [
      "transport komórki jajowej i zapłodnienie",
      "kanał rodny",
      "produkcja komórek jajowych",
      "rozwój zarodka i płodu"
    ],
    "answer": {
      "jajniki": "produkcja komórek jajowych",
      "jajowody": "transport komórki jajowej i zapłodnienie",
      "macica": "rozwój zarodka i płodu",
      "pochwa": "kanał rodny"
    },
    "explanation": "Jajniki wytwarzają gamety, jajowody je transportują, macica umożliwia rozwój ciąży, a pochwa tworzy kanał rodny.",
    "image": "r06_uklad_rozrodczy_zenski.jpg"
  },
  {
    "id": "R06_ROZ_09",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do męskiego lub żeńskiego układu rozrodczego.",
    "options": null,
    "items": [
      "jajowód",
      "nasieniowód",
      "jądro",
      "najądrze",
      "jajnik",
      "macica"
    ],
    "categories": [
      "męski układ rozrodczy",
      "żeński układ rozrodczy"
    ],
    "answer": {
      "męski układ rozrodczy": [
        "jądro",
        "najądrze",
        "nasieniowód"
      ],
      "żeński układ rozrodczy": [
        "jajnik",
        "jajowód",
        "macica"
      ]
    },
    "explanation": "Jądra, najądrza i nasieniowody należą do układu męskiego; jajniki, jajowody i macica do żeńskiego."
  },
  {
    "id": "R06_ROZ_10",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "sequence",
    "prompt": "Ułóż opisane etapy rozwoju przedurodzeniowego w kolejności.",
    "options": null,
    "items": [
      "różnicowanie tkanek i narządów",
      "podziały zygoty",
      "zapłodnienie",
      "zagnieżdżenie zarodka",
      "rozwój płodowy"
    ],
    "answer": [
      "zapłodnienie",
      "podziały zygoty",
      "zagnieżdżenie zarodka",
      "różnicowanie tkanek i narządów",
      "rozwój płodowy"
    ],
    "explanation": "Rozwój zarodkowy zaczyna się od zapłodnienia; następują podziały, zagnieżdżenie i różnicowanie, a następnie okres płodowy.",
    "image": "r06_rozwoj_plodu.jpg"
  },
  {
    "id": "R06_ROZ_11",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "single_choice",
    "prompt": "Która błona płodowa wraz ze ścianą macicy bierze udział w tworzeniu łożyska?",
    "options": [
      "kosmówka",
      "owodnia",
      "omocznia",
      "osłonka przejrzysta",
      "twardówka",
      "siatkówka"
    ],
    "answer": 0,
    "explanation": "Zewnętrzna błona płodowa, kosmówka, współtworzy łożysko wraz ze ścianą macicy.",
    "image": "r06_rozwoj_plodu.jpg"
  },
  {
    "id": "R06_ROZ_12",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "true_false",
    "prompt": "Krew matki i krew płodu bezpośrednio mieszają się w łożysku.",
    "options": null,
    "answer": false,
    "explanation": "W łożysku następuje wymiana substancji, ale naczynia krwionośne matki i dziecka nie łączą się."
  },
  {
    "id": "R06_ROZ_13",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "multi_select",
    "prompt": "Zaznacz zjawiska opisane dla okresu dojrzewania człowieka.",
    "options": [
      "przyspieszenie wzrostu",
      "rozwój narządów rozrodczych",
      "ujawnienie trzeciorzędowych cech płciowych",
      "duże wahania nastroju",
      "zanik wszelkich hormonów płciowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Dojrzewanie obejmuje skok wzrostowy, rozwój narządów płciowych i cech płciowych oraz zmiany nastroju."
  },
  {
    "id": "R06_ROZ_14",
    "section": "Układ rozrodczy i rozwój człowieka",
    "type": "single_choice",
    "prompt": "Który etap rozwoju pozapłodowego trwa od drugiego miesiąca do końca pierwszego roku życia?",
    "options": [
      "okres niemowlęcy",
      "okres noworodkowy",
      "okres poniemowlęcy",
      "dojrzewanie"
    ],
    "answer": 0,
    "explanation": "Okres niemowlęcy trwa od drugiego miesiąca do końca pierwszego roku życia; wcześniej jest okres noworodkowy."
  },
  {
    "id": "R06_HOM_01",
    "section": "Homeostaza i zdrowie",
    "type": "single_choice",
    "prompt": "Czym jest homeostaza?",
    "options": [
      "utrzymywaniem równowagi wewnętrznej organizmu",
      "wyłącznie produkcją ciepła",
      "wydalaniem jedynie mocznika",
      "procesem wzrastania kości",
      "odruchem warunkowym",
      "jedynie oddychaniem"
    ],
    "answer": 0,
    "explanation": "Homeostaza polega na utrzymywaniu stabilnych warunków wewnątrz organizmu pomimo zmian środowiska."
  },
  {
    "id": "R06_HOM_02",
    "section": "Homeostaza i zdrowie",
    "type": "multi_select",
    "prompt": "Wybierz reakcje organizmu na zimno.",
    "options": [
      "zwężenie naczyń krwionośnych skóry",
      "dreszcze",
      "zmniejszenie wydzielania potu",
      "zwiększenie tempa metabolizmu",
      "rozszerzenie naczyń krwionośnych skóry"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Podczas zimna organizm ogranicza utratę ciepła i zwiększa jego wytwarzanie.",
    "image": "r06_termoregulacja.jpg"
  },
  {
    "id": "R06_HOM_03",
    "section": "Homeostaza i zdrowie",
    "type": "true_false",
    "prompt": "Podczas upału rozszerzają się naczynia krwionośne skóry i rośnie wydzielanie potu.",
    "options": null,
    "answer": true,
    "explanation": "Obie reakcje zwiększają oddawanie ciepła do otoczenia.",
    "image": "r06_termoregulacja.jpg"
  },
  {
    "id": "R06_HOM_04",
    "section": "Homeostaza i zdrowie",
    "type": "fill_in",
    "prompt": "Ośrodek termoregulacji znajduje się w __________.",
    "options": null,
    "answer": [
      "podwzgórzu"
    ],
    "altAnswers": [
      [
        "podwzgórzu",
        "podwzgórze"
      ]
    ],
    "explanation": "Podwzgórze odbiera informację od receptorów i kieruje reakcjami regulującymi temperaturę."
  },
  {
    "id": "R06_HOM_05",
    "section": "Homeostaza i zdrowie",
    "type": "riddle",
    "prompt": "Jak nazywa się stan zbyt niskiego poziomu glukozy we krwi?",
    "options": null,
    "answer": "hipoglikemia",
    "altAnswers": [
      "hipoglikemia",
      "hipoglikemią"
    ],
    "explanation": "Hipoglikemia to obniżenie poziomu glukozy, w przeciwieństwie do hiperglikemii."
  },
  {
    "id": "R06_HOM_06",
    "section": "Homeostaza i zdrowie",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest reakcją na niedobór wody: pragnienie, nasilone odzyskiwanie wody w nerkach, zmniejszenie pocenia, zwiększenie ilości moczu.",
    "options": null,
    "answer": "zwiększenie ilości moczu",
    "explanation": "Przy niedoborze wody organizm ją oszczędza; więcej moczu wydala podczas jej nadmiaru."
  },
  {
    "id": "R06_HOM_07",
    "section": "Homeostaza i zdrowie",
    "type": "scenario",
    "prompt": "Po długim wysiłku bez picia ktoś czuje silne pragnienie, ma suche usta i oddaje mniej moczu. Który mechanizm opisuje tę reakcję?",
    "options": [
      "oszczędzanie wody w organizmie",
      "wzmożone usuwanie nadmiaru wody",
      "zwiększanie wydzielania moczu",
      "wyłączenie ośrodka pragnienia"
    ],
    "answer": 0,
    "explanation": "Podwzgórze wywołuje pragnienie, a nerki odzyskują więcej wody przy jej niedoborze."
  },
  {
    "id": "R06_HOM_08",
    "section": "Homeostaza i zdrowie",
    "type": "match",
    "prompt": "Połącz rodzaj zdrowia z jego opisem.",
    "options": null,
    "left": [
      "fizyczne",
      "psychiczne",
      "społeczne"
    ],
    "right": [
      "radzenie sobie ze stresem i uczuciami",
      "harmonijna praca organizmu",
      "prawidłowe relacje międzyludzkie"
    ],
    "answer": {
      "fizyczne": "harmonijna praca organizmu",
      "psychiczne": "radzenie sobie ze stresem i uczuciami",
      "społeczne": "prawidłowe relacje międzyludzkie"
    },
    "explanation": "Zdrowie ma trzy powiązane wymiary: fizyczny, psychiczny i społeczny."
  },
  {
    "id": "R06_HOM_09",
    "section": "Homeostaza i zdrowie",
    "type": "multi_select",
    "prompt": "Które czynniki sprzyjają rozwojowi chorób cywilizacyjnych?",
    "options": [
      "niewłaściwa dieta",
      "siedzący tryb życia",
      "stres",
      "zanieczyszczenie środowiska",
      "regularne badania profilaktyczne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do rozwoju chorób cywilizacyjnych przyczyniają się m.in. stres, brak ruchu, nieprawidłowe żywienie i zanieczyszczenia."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które elementy krwi nie przechodzą przez błony filtracyjne kłębuszków nerkowych?",
    "options": [
      "białka i krwinki",
      "glukoza i aminokwasy",
      "woda i jony",
      "mocznik i kwas moczowy"
    ],
    "answer": 0,
    "explanation": "Mocz pierwotny zawiera drobne substancje, ale krwinki i białka pozostają we krwi.",
    "image": "r06_nefron_schemat.jpg"
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wybierz prawidłowe pary liczby nerwów obwodowych i ich rodzaju.",
    "options": [
      "12 par nerwów czaszkowych",
      "31 par nerwów rdzeniowych",
      "8 par nerwów szyjnych",
      "12 par nerwów piersiowych",
      "4 pary nerwów guzicznych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Od mózgowia odchodzi 12 par nerwów czaszkowych, a od rdzenia kręgowego 31 par nerwów rdzeniowych, w tym 8 par szyjnych i 12 par piersiowych."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Mózgowie z rdzeniem kręgowym tworzy __________ układ nerwowy, a nerwy czaszkowe i rdzeniowe — układ __________.",
    "options": null,
    "answer": [
      "ośrodkowy",
      "obwodowy"
    ],
    "altAnswers": [
      [
        "ośrodkowy",
        "ośrodkowym"
      ],
      [
        "obwodowy",
        "obwodowym"
      ]
    ],
    "explanation": "Ośrodkowy układ nerwowy obejmuje mózgowie i rdzeń kręgowy; układ obwodowy obejmuje nerwy."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczennica patrzy z bliska na drobny napis, a chwilę później na odległy budynek. Jak powinna zmienić się soczewka oka przy przeniesieniu wzroku na budynek?",
    "options": [
      "staje się bardziej płaska",
      "staje się bardziej wypukła",
      "zmienia się w rogówkę",
      "przestaje przepuszczać światło"
    ],
    "answer": 0,
    "explanation": "Przy obserwacji dalekich obiektów soczewka jest bardziej płaska i słabiej załamuje światło.",
    "image": "r06_oko_przekroj.jpg"
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz cechę z fazą lub zjawiskiem.",
    "options": null,
    "left": [
      "REM",
      "SEM",
      "odruch warunkowy",
      "odruch bezwarunkowy"
    ],
    "right": [
      "głęboki sen z wolnymi ruchami gałek ocznych",
      "wrodzony i nie wymaga uczenia",
      "szybkie ruchy gałek ocznych i marzenia senne",
      "powstaje w wyniku uczenia i powtarzania"
    ],
    "answer": {
      "REM": "szybkie ruchy gałek ocznych i marzenia senne",
      "SEM": "głęboki sen z wolnymi ruchami gałek ocznych",
      "odruch warunkowy": "powstaje w wyniku uczenia i powtarzania",
      "odruch bezwarunkowy": "wrodzony i nie wymaga uczenia"
    },
    "explanation": "Sen obejmuje fazy REM i NREM, natomiast odruchy dzieli się na wrodzone i nabyte."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż hormon, który nie reguluje bezpośrednio cyklu menstruacyjnego: FSH, LH, estrogeny, glukagon.",
    "options": null,
    "answer": "glukagon",
    "explanation": "FSH, LH i estrogeny uczestniczą w regulacji cyklu; glukagon reguluje stężenie glukozy."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia cyklu miesiączkowego w prawidłowej kolejności.",
    "options": null,
    "items": [
      "powstanie ciałka żółtego",
      "dojrzewanie pęcherzyka jajnikowego",
      "miesiączka",
      "owulacja",
      "zanik ciałka żółtego przy braku zapłodnienia"
    ],
    "answer": [
      "miesiączka",
      "dojrzewanie pęcherzyka jajnikowego",
      "owulacja",
      "powstanie ciałka żółtego",
      "zanik ciałka żółtego przy braku zapłodnienia"
    ],
    "explanation": "Po menstruacji dojrzewa pęcherzyk, następuje owulacja, a potem faza ciałka żółtego i jego zanik bez zapłodnienia."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Bliźnięta jednojajowe mogą mieć osobne lub wspólne łożysko w zależności od momentu podziału zarodka.",
    "options": null,
    "answer": true,
    "explanation": "U bliźniąt jednojajowych możliwe są różne układy łożysk i worków owodniowych, zależnie od momentu podziału zarodka.",
    "image": "r06_rozwoj_plodu.jpg"
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj procesy do fazy rozwoju przedurodzeniowego.",
    "options": null,
    "items": [
      "ostateczne wykształcanie narządów",
      "różnicowanie tkanek i narządów",
      "zagnieżdżenie w macicy",
      "powstawanie błon płodowych",
      "intensywny wzrost płodu"
    ],
    "categories": [
      "rozwój zarodkowy",
      "rozwój płodowy"
    ],
    "answer": {
      "rozwój zarodkowy": [
        "zagnieżdżenie w macicy",
        "powstawanie błon płodowych",
        "różnicowanie tkanek i narządów"
      ],
      "rozwój płodowy": [
        "intensywny wzrost płodu",
        "ostateczne wykształcanie narządów"
      ]
    },
    "explanation": "Etap zarodkowy obejmuje implantację i tworzenie podstaw budowy, a płodowy intensywny wzrost i dojrzewanie narządów."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który element mechanizmu utrzymywania homeostazy wykonuje reakcję przywracającą równowagę?",
    "options": [
      "efektor",
      "receptor",
      "bodziec",
      "ośrodek odbierający informację"
    ],
    "answer": 0,
    "explanation": "Receptor wykrywa odchylenie, ośrodek steruje odpowiedzią, a efektor wykonuje reakcję."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Podczas zimna pojawiają się dreszcze, a jednocześnie skórne naczynia krwionośne zwężają się. Jaki jest wspólny cel tych reakcji?",
    "options": [
      "utrzymanie temperatury organizmu",
      "zwiększenie utraty ciepła",
      "zahamowanie produkcji ciepła",
      "przyspieszenie pocenia"
    ],
    "answer": 0,
    "explanation": "Dreszcze wytwarzają ciepło, a zwężone naczynia skórne ograniczają jego utratę.",
    "image": "r06_termoregulacja.jpg"
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Która część układu nerwowego steruje podstawowymi funkcjami niezależnymi od woli, takimi jak oddychanie i praca serca, według opisu pnia mózgu?",
    "options": null,
    "answer": "rdzeń przedłużony",
    "altAnswers": [
      "rdzeń przedłużony",
      "rdzenia przedłużonego"
    ],
    "explanation": "Rdzeń przedłużony jest częścią pnia mózgu; kontroluje między innymi oddychanie i pracę serca."
  }
];

const KID_PROMPTS = {
  "R06_MOC_01": "Co oczyszcza krew i robi mocz?",
  "R06_NER_07": "Dlaczego szybko cofamy rękę od gorącego naczynia?",
  "R06_ZMY_07": "Jaką wadę wzroku ma ktoś, kto widzi dobrze z bliska, ale słabo z daleka?",
  "R06_HOR_07": "Co obniża cukier we krwi po posiłku?",
  "R06_ROZ_04": "Jak się nazywa uwolnienie komórki jajowej z jajnika?",
  "R06_HOM_01": "Co to jest homeostaza?"
};

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "Organizm człowieka – część 2",
  "icon": "🧬",
  "sectionOrder": [
    "Układ moczowy i wydalanie",
    "Układ nerwowy",
    "Narządy zmysłów",
    "Układ hormonalny",
    "Układ rozrodczy i rozwój człowieka",
    "Homeostaza i zdrowie"
  ],
  "sectionIcons": {
    "Układ moczowy i wydalanie": "💧",
    "Układ nerwowy": "🧠",
    "Narządy zmysłów": "👁️",
    "Układ hormonalny": "⚗️",
    "Układ rozrodczy i rozwój człowieka": "👶",
    "Homeostaza i zdrowie": "🌡️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
