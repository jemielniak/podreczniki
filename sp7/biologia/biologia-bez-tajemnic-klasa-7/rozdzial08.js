// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SMAK = Smak, węch i dotyk
//   OKO  = Powstawanie obrazu w oku
//   UCHO = Działanie narządu słuchu i równowagi
//   HIG  = Choroby i higiena oka oraz ucha
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R08_SMAK_01",
    "section": "Smak, węch i dotyk",
    "type": "single_choice",
    "prompt": "Gdzie znajdują się receptory węchu?",
    "options": [
      "W polu węchowym w górnej części jamy nosowej",
      "Na powierzchni rogówki",
      "W ślimaku ucha wewnętrznego",
      "W plamce żółtej siatkówki",
      "W jamie bębenkowej",
      "W soczewce oka"
    ],
    "answer": 0,
    "explanation": "Receptory węchowe znajdują się w polu węchowym, czyli w górnej części jamy nosowej.",
    "image": "r08_wech_kwiat.jpg"
  },
  {
    "id": "R08_SMAK_02",
    "section": "Smak, węch i dotyk",
    "type": "multi_select",
    "prompt": "Zaznacz pięć podstawowych smaków rozpoznawanych przez komórki smakowe.",
    "options": [
      "słodki",
      "słony",
      "kwaśny",
      "gorzki",
      "umami",
      "ostry"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Rozróżnia się pięć podstawowych smaków: słodki, słony, kwaśny, gorzki i umami. Wrażenie ostrości odbierają receptory bólowe.",
    "image": "r08_jezyk_brodawki.jpg"
  },
  {
    "id": "R08_SMAK_03",
    "section": "Smak, węch i dotyk",
    "type": "true_false",
    "prompt": "Kubki smakowe znajdują się głównie na języku, w brodawkach smakowych.",
    "options": null,
    "answer": true,
    "explanation": "Kubki smakowe są skupiskami receptorów smaku zlokalizowanymi głównie na języku, w brodawkach smakowych."
  },
  {
    "id": "R08_SMAK_04",
    "section": "Smak, węch i dotyk",
    "type": "fill_in",
    "prompt": "Receptory smaku reagują na substancje chemiczne rozpuszczone w __________.",
    "options": null,
    "answer": [
      "ślinie"
    ],
    "explanation": "Substancje wywołujące smak muszą być rozpuszczone w ślinie, aby pobudzić receptory smaku."
  },
  {
    "id": "R08_SMAK_05",
    "section": "Smak, węch i dotyk",
    "type": "riddle",
    "prompt": "Jak nazywa się obszar w górnej części jamy nosowej, w którym znajdują się receptory węchu?",
    "options": null,
    "answer": "pole węchowe",
    "altAnswers": [
      "pole węchowe",
      "nabłonek węchowy"
    ],
    "explanation": "Pole węchowe, nazywane też nabłonkiem węchowym, zawiera komórki węchowe odbierające substancje zapachowe.",
    "image": "r08_wech_kwiat.jpg"
  },
  {
    "id": "R08_SMAK_06",
    "section": "Smak, węch i dotyk",
    "type": "odd_one_out",
    "prompt": "Wskaż bodziec, który nie jest odbierany przez receptory w skórze: ucisk, ból, ciepło, światło.",
    "options": null,
    "answer": "światło",
    "explanation": "Receptory w skórze odbierają m.in. ucisk, ból oraz temperaturę. Światło odbierają fotoreceptory w siatkówce oka."
  },
  {
    "id": "R08_SMAK_07",
    "section": "Smak, węch i dotyk",
    "type": "scenario",
    "prompt": "W kuchni wyczuwasz niepokojący zapach ulatniającego się gazu. Która funkcja węchu ma w tej sytuacji największe znaczenie?",
    "options": [
      "Ostrzeganie przed niebezpiecznymi substancjami",
      "Regulowanie ilości światła w oku",
      "Wyrównywanie ciśnienia w uchu",
      "Rozpoznawanie barw",
      "Utrzymywanie kulistego kształtu oka",
      "Odbieranie drgań błony bębenkowej"
    ],
    "answer": 0,
    "explanation": "Węch ostrzega przed niebezpiecznymi substancjami w otoczeniu, np. ulatniającym się gazem, i pomaga zlokalizować źródło zagrożenia."
  },
  {
    "id": "R08_SMAK_08",
    "section": "Smak, węch i dotyk",
    "type": "match",
    "prompt": "Połącz zmysł z miejscem, w którym znajdują się jego receptory.",
    "options": null,
    "left": [
      "smak",
      "węch",
      "dotyk",
      "wzrok"
    ],
    "right": [
      "kubki smakowe na języku",
      "pole węchowe jamy nosowej",
      "skóra",
      "siatkówka oka"
    ],
    "answer": {
      "smak": "kubki smakowe na języku",
      "węch": "pole węchowe jamy nosowej",
      "dotyk": "skóra",
      "wzrok": "siatkówka oka"
    },
    "explanation": "Receptory smaku są w kubkach smakowych, węchu w polu węchowym, dotyku w skórze, a wzroku w siatkówce oka."
  },
  {
    "id": "R08_SMAK_09",
    "section": "Smak, węch i dotyk",
    "type": "sort",
    "prompt": "Przyporządkuj odczucia do właściwej grupy.",
    "options": null,
    "items": [
      "słodki",
      "umami",
      "kwaśny",
      "ucisk",
      "ból",
      "zimno"
    ],
    "categories": [
      "smaki",
      "bodźce odbierane przez skórę"
    ],
    "answer": {
      "smaki": [
        "słodki",
        "umami",
        "kwaśny"
      ],
      "bodźce odbierane przez skórę": [
        "ucisk",
        "ból",
        "zimno"
      ]
    },
    "explanation": "Słodki, umami i kwaśny to smaki, natomiast ucisk, ból i zimno mogą być odbierane przez receptory w skórze."
  },
  {
    "id": "R08_SMAK_10",
    "section": "Smak, węch i dotyk",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania wrażenia węchowego we właściwej kolejności.",
    "options": null,
    "items": [
      "Impuls trafia do korowych ośrodków węchowych",
      "Cząsteczki zapachowe dostają się do jamy nosowej",
      "Receptory węchu zostają pobudzone",
      "Cząsteczki rozpuszczają się w śluzie",
      "Powstaje wrażenie węchowe"
    ],
    "answer": [
      "Cząsteczki zapachowe dostają się do jamy nosowej",
      "Cząsteczki rozpuszczają się w śluzie",
      "Receptory węchu zostają pobudzone",
      "Impuls trafia do korowych ośrodków węchowych",
      "Powstaje wrażenie węchowe"
    ],
    "explanation": "Lotne cząsteczki zapachowe dostają się do jamy nosowej, rozpuszczają w śluzie, pobudzają receptory, a impuls jest przekazywany do ośrodków węchowych mózgu."
  },
  {
    "id": "R08_SMAK_11",
    "section": "Smak, węch i dotyk",
    "type": "single_choice",
    "prompt": "W którym miejscu receptory dotyku są rozmieszczone szczególnie gęsto?",
    "options": [
      "W opuszkach palców",
      "W kości ramiennej",
      "W soczewce oka",
      "W jamie bębenkowej",
      "W ślimaku",
      "W twardówce"
    ],
    "answer": 0,
    "explanation": "Najgęściej receptory dotyku są rozmieszczone m.in. w opuszkach palców, a także w skórze warg i na koniuszku języka.",
    "image": "r08_opuszki_palca.jpg"
  },
  {
    "id": "R08_SMAK_12",
    "section": "Smak, węch i dotyk",
    "type": "multi_select",
    "prompt": "Zaznacz bodźce, które mogą odbierać receptory znajdujące się w skórze.",
    "options": [
      "dotyk",
      "ucisk",
      "ból",
      "temperatura",
      "światło",
      "fala dźwiękowa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Receptory w skórze odbierają m.in. dotyk i ucisk, ból oraz bodźce temperaturowe, czyli ciepło i zimno."
  },
  {
    "id": "R08_SMAK_13",
    "section": "Smak, węch i dotyk",
    "type": "scenario",
    "prompt": "Uczeń ma zasłonięte oczy i zatkany nos. Próbuje rozpoznać kilka produktów spożywczych i radzi sobie gorzej niż wtedy, gdy nos nie jest zatkany. Co najlepiej wyjaśnia ten wynik?",
    "options": [
      "Wrażenia smakowe i węchowe współdziałają przy ocenie pokarmu",
      "Węch odpowiada za widzenie barw",
      "Smak zależy wyłącznie od słuchu",
      "Zatkany nos zwiększa liczbę kubków smakowych",
      "Węch działa tylko podczas patrzenia na pokarm",
      "Język przestaje odbierać temperaturę"
    ],
    "answer": 0,
    "explanation": "Rozpoznawanie pokarmów jest możliwe dzięki zintegrowaniu wrażeń smakowych i węchowych. Zatkanie nosa ogranicza udział węchu.",
    "image": "r08_smaki_produkty.jpg"
  },
  {
    "id": "R08_OKO_01",
    "section": "Powstawanie obrazu w oku",
    "type": "single_choice",
    "prompt": "Która część gałki ocznej nadaje jej kształt i chroni przed urazami?",
    "options": [
      "twardówka",
      "siatkówka",
      "źrenica",
      "soczewka",
      "plamka żółta",
      "nerw wzrokowy"
    ],
    "answer": 0,
    "explanation": "Twardówka otacza gałkę oczną od zewnątrz, nadaje jej kształt i chroni ją przed urazami.",
    "image": "r08_oko_zblizenie.jpg"
  },
  {
    "id": "R08_OKO_02",
    "section": "Powstawanie obrazu w oku",
    "type": "match",
    "prompt": "Połącz element oka z jego funkcją.",
    "options": null,
    "left": [
      "rogówka",
      "źrenica",
      "soczewka",
      "naczyniówka"
    ],
    "right": [
      "przepuszcza i załamuje światło",
      "reguluje ilość światła wpadającego do oka",
      "skupia światło na siatkówce",
      "odżywia gałkę oczną i dostarcza tlen"
    ],
    "answer": {
      "rogówka": "przepuszcza i załamuje światło",
      "źrenica": "reguluje ilość światła wpadającego do oka",
      "soczewka": "skupia światło na siatkówce",
      "naczyniówka": "odżywia gałkę oczną i dostarcza tlen"
    },
    "explanation": "Rogówka przepuszcza i załamuje światło, źrenica reguluje jego ilość, soczewka skupia je na siatkówce, a naczyniówka odżywia gałkę oczną."
  },
  {
    "id": "R08_OKO_03",
    "section": "Powstawanie obrazu w oku",
    "type": "true_false",
    "prompt": "Czopki umożliwiają widzenie barw, a pręciki nie rozróżniają barw.",
    "options": null,
    "answer": true,
    "explanation": "Czopki są czułe na barwy i działają najlepiej przy dobrym oświetleniu. Pręciki są bardziej czułe na światło, ale nie rozróżniają barw."
  },
  {
    "id": "R08_OKO_04",
    "section": "Powstawanie obrazu w oku",
    "type": "fill_in",
    "prompt": "Miejsce najostrzejszego widzenia na siatkówce to __________.",
    "options": null,
    "answer": [
      "plamka żółta"
    ],
    "altAnswers": [
      [
        "plamka żółta",
        "plamka zolta"
      ]
    ],
    "explanation": "Plamka żółta jest obszarem najostrzejszego widzenia i zawiera największe zagęszczenie czopków."
  },
  {
    "id": "R08_OKO_05",
    "section": "Powstawanie obrazu w oku",
    "type": "sequence",
    "prompt": "Ułóż drogę promieni świetlnych przechodzących przez gałkę oczną.",
    "options": null,
    "items": [
      "soczewka",
      "siatkówka",
      "rogówka",
      "ciało szkliste",
      "źrenica"
    ],
    "answer": [
      "rogówka",
      "źrenica",
      "soczewka",
      "ciało szkliste",
      "siatkówka"
    ],
    "explanation": "Światło przechodzi kolejno przez rogówkę, źrenicę, soczewkę i ciało szkliste, a następnie trafia na siatkówkę."
  },
  {
    "id": "R08_OKO_06",
    "section": "Powstawanie obrazu w oku",
    "type": "multi_select",
    "prompt": "Zaznacz elementy aparatu ochronnego oka.",
    "options": [
      "powieki",
      "rzęsy",
      "brwi",
      "gruczoł łzowy",
      "kowadełko",
      "kanały półkoliste"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do aparatu ochronnego oka należą m.in. powieki, rzęsy, brwi, spojówka i gruczoł łzowy."
  },
  {
    "id": "R08_OKO_07",
    "section": "Powstawanie obrazu w oku",
    "type": "scenario",
    "prompt": "Wchodzisz z ciemnego korytarza do bardzo jasno oświetlonego pomieszczenia. Co dzieje się ze źrenicą?",
    "options": [
      "Zwęża się",
      "Rozszerza się",
      "Zmienia się w plamkę żółtą",
      "Przesuwa się na siatkówkę",
      "Staje się soczewką",
      "Przestaje reagować na światło"
    ],
    "answer": 0,
    "explanation": "W silnym oświetleniu źrenica zwęża się, ograniczając ilość światła wpadającego do oka. Jest to element adaptacji oka.",
    "image": "r08_zrenica_swiatlo.jpg"
  },
  {
    "id": "R08_OKO_08",
    "section": "Powstawanie obrazu w oku",
    "type": "riddle",
    "prompt": "Jak nazywa się miejsce na siatkówce pozbawione receptorów światła, w którym zaczyna się nerw wzrokowy?",
    "options": null,
    "answer": "tarcza nerwu wzrokowego",
    "altAnswers": [
      "tarcza nerwu wzrokowego",
      "plamka ślepa",
      "plamka slepa"
    ],
    "explanation": "Tarcza nerwu wzrokowego jest pozbawiona fotoreceptorów, dlatego światło padające w to miejsce nie jest rejestrowane."
  },
  {
    "id": "R08_OKO_09",
    "section": "Powstawanie obrazu w oku",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie należy do narządu wzroku: rogówka, soczewka, siatkówka, strzemiączko.",
    "options": null,
    "answer": "strzemiączko",
    "explanation": "Strzemiączko jest kosteczką słuchową w uchu środkowym. Pozostałe elementy należą do oka."
  },
  {
    "id": "R08_OKO_10",
    "section": "Powstawanie obrazu w oku",
    "type": "single_choice",
    "prompt": "Jaki obraz powstaje na siatkówce?",
    "options": [
      "Odwrócony i pomniejszony",
      "Prosty i powiększony",
      "Odwrócony i powiększony",
      "Prosty i tej samej wielkości",
      "Wyłącznie czarno-biały",
      "Zawsze nieostry"
    ],
    "answer": 0,
    "explanation": "Na siatkówce powstaje obraz odwrócony i pomniejszony. Mózg interpretuje impulsy wzrokowe, dzięki czemu postrzegamy otoczenie prawidłowo."
  },
  {
    "id": "R08_OKO_11",
    "section": "Powstawanie obrazu w oku",
    "type": "true_false",
    "prompt": "Akomodacja oka polega na zmianie kształtu soczewki, a adaptacja na dostosowaniu oka do różnych warunków oświetlenia.",
    "options": null,
    "answer": true,
    "explanation": "Akomodacja umożliwia ostre widzenie przedmiotów z różnych odległości dzięki zmianie kształtu soczewki. Adaptacja dotyczy warunków oświetlenia."
  },
  {
    "id": "R08_OKO_12",
    "section": "Powstawanie obrazu w oku",
    "type": "scenario",
    "prompt": "Patrzysz z bliska na tekst w książce. Jak zmienia się soczewka podczas akomodacji?",
    "options": [
      "Uwypukla się",
      "Spłaszcza się",
      "Znika jej przezroczystość",
      "Zmienia się w rogówkę",
      "Przesuwa się do nerwu wzrokowego",
      "Nie zmienia kształtu"
    ],
    "answer": 0,
    "explanation": "Podczas patrzenia na obiekt z bliska soczewka uwypukla się. Przy patrzeniu w dal spłaszcza się.",
    "image": "r08_akomodacja_czytanie.jpg"
  },
  {
    "id": "R08_OKO_13",
    "section": "Powstawanie obrazu w oku",
    "type": "match",
    "prompt": "Połącz strukturę siatkówki z właściwym opisem.",
    "options": null,
    "left": [
      "czopki",
      "pręciki",
      "plamka żółta",
      "tarcza nerwu wzrokowego"
    ],
    "right": [
      "rozróżniają barwy",
      "umożliwiają widzenie przy słabym oświetleniu bez rozróżniania barw",
      "obszar najostrzejszego widzenia",
      "miejsce pozbawione receptorów światła"
    ],
    "answer": {
      "czopki": "rozróżniają barwy",
      "pręciki": "umożliwiają widzenie przy słabym oświetleniu bez rozróżniania barw",
      "plamka żółta": "obszar najostrzejszego widzenia",
      "tarcza nerwu wzrokowego": "miejsce pozbawione receptorów światła"
    },
    "explanation": "Czopki odpowiadają za barwy, pręciki za widzenie przy słabym oświetleniu, plamka żółta za najostrzejsze widzenie, a tarcza nerwu wzrokowego nie ma fotoreceptorów."
  },
  {
    "id": "R08_UCHO_01",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "single_choice",
    "prompt": "Które elementy tworzą ucho zewnętrzne?",
    "options": [
      "Małżowina uszna i przewód słuchowy zewnętrzny",
      "Ślimak i kanały półkoliste",
      "Jama bębenkowa i trąbka słuchowa",
      "Młoteczek i ślimak",
      "Tęczówka i źrenica",
      "Siatkówka i nerw wzrokowy"
    ],
    "answer": 0,
    "explanation": "Ucho zewnętrzne składa się z małżowiny usznej i przewodu słuchowego zewnętrznego, który dochodzi do błony bębenkowej.",
    "image": "r08_malzowina_uszna.jpg"
  },
  {
    "id": "R08_UCHO_02",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "match",
    "prompt": "Połącz element ucha z częścią, w której się znajduje.",
    "options": null,
    "left": [
      "małżowina uszna",
      "młoteczek",
      "ślimak",
      "kanały półkoliste"
    ],
    "right": [
      "ucho zewnętrzne",
      "ucho środkowe",
      "ucho wewnętrzne - słuch",
      "ucho wewnętrzne - równowaga"
    ],
    "answer": {
      "małżowina uszna": "ucho zewnętrzne",
      "młoteczek": "ucho środkowe",
      "ślimak": "ucho wewnętrzne - słuch",
      "kanały półkoliste": "ucho wewnętrzne - równowaga"
    },
    "explanation": "Małżowina należy do ucha zewnętrznego, kosteczki słuchowe do środkowego, a ślimak i kanały półkoliste do ucha wewnętrznego."
  },
  {
    "id": "R08_UCHO_03",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "true_false",
    "prompt": "Trąbka słuchowa pomaga wyrównywać ciśnienie między uchem środkowym a otoczeniem.",
    "options": null,
    "answer": true,
    "explanation": "Trąbka słuchowa łączy jamę bębenkową z gardłem i służy do wyrównywania ciśnienia po obu stronach błony bębenkowej."
  },
  {
    "id": "R08_UCHO_04",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "sequence",
    "prompt": "Ułóż drogę bodźca prowadzącą do powstania wrażenia słuchowego.",
    "options": null,
    "items": [
      "kosteczki słuchowe drgają",
      "małżowina uszna wychwytuje falę",
      "komórki zmysłowe w ślimaku wytwarzają impulsy",
      "błona bębenkowa drga",
      "impulsy docierają do ośrodków słuchowych mózgu",
      "płyn w ślimaku zostaje wprawiony w ruch"
    ],
    "answer": [
      "małżowina uszna wychwytuje falę",
      "błona bębenkowa drga",
      "kosteczki słuchowe drgają",
      "płyn w ślimaku zostaje wprawiony w ruch",
      "komórki zmysłowe w ślimaku wytwarzają impulsy",
      "impulsy docierają do ośrodków słuchowych mózgu"
    ],
    "explanation": "Fala dźwiękowa przechodzi przez ucho zewnętrzne, porusza błonę bębenkową i kosteczki, następnie płyn w ślimaku i receptory słuchu, a impulsy trafiają do mózgu."
  },
  {
    "id": "R08_UCHO_05",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "multi_select",
    "prompt": "Zaznacz elementy należące do ucha środkowego.",
    "options": [
      "jama bębenkowa",
      "młoteczek",
      "kowadełko",
      "strzemiączko",
      "trąbka słuchowa",
      "małżowina uszna"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Ucho środkowe obejmuje jamę bębenkową, trzy kosteczki słuchowe oraz trąbkę słuchową. Małżowina uszna należy do ucha zewnętrznego."
  },
  {
    "id": "R08_UCHO_06",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "riddle",
    "prompt": "W jakiej części ucha wewnętrznego znajduje się właściwy narząd słuchu z orzęsionymi komórkami zmysłowymi?",
    "options": null,
    "answer": "ślimak",
    "altAnswers": [
      "ślimak",
      "slimak"
    ],
    "explanation": "Właściwy narząd słuchu znajduje się w ślimaku ucha wewnętrznego."
  },
  {
    "id": "R08_UCHO_07",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "scenario",
    "prompt": "Podczas lądowania samolotu odczuwasz zatkanie i ucisk w uszach. Co pomaga wyrównać ciśnienie w uchu środkowym?",
    "options": [
      "Przełykanie śliny lub ziewanie",
      "Mocne zaciskanie powiek",
      "Patrzenie w dal",
      "Zatykanie obu oczu",
      "Pocieranie języka",
      "Szybkie obracanie głową"
    ],
    "answer": 0,
    "explanation": "Przełykanie śliny, ziewanie i ćwiczenia otwierające trąbkę słuchową pomagają wyrównać ciśnienie między uchem środkowym a otoczeniem.",
    "image": "r08_samolot_ucisk_ucha.jpg"
  },
  {
    "id": "R08_UCHO_08",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest kosteczką słuchową: młoteczek, kowadełko, strzemiączko, małżowina uszna.",
    "options": null,
    "answer": "małżowina uszna",
    "explanation": "Młoteczek, kowadełko i strzemiączko to trzy kosteczki słuchowe. Małżowina uszna należy do ucha zewnętrznego."
  },
  {
    "id": "R08_UCHO_09",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "single_choice",
    "prompt": "Jaki zakres częstotliwości fal dźwiękowych odbiera ludzkie ucho?",
    "options": [
      "16-20 000 Hz",
      "1-10 Hz",
      "20 000-50 000 Hz",
      "130-200 Hz",
      "500-1 000 Hz",
      "2-8 Hz"
    ],
    "answer": 0,
    "explanation": "Ludzkie ucho odbiera fale dźwiękowe w zakresie około 16-20 000 Hz."
  },
  {
    "id": "R08_UCHO_10",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odpowiednich części ucha.",
    "options": null,
    "items": [
      "małżowina uszna",
      "przewód słuchowy zewnętrzny",
      "jama bębenkowa",
      "kowadełko",
      "trąbka słuchowa",
      "ślimak",
      "kanały półkoliste"
    ],
    "categories": [
      "ucho zewnętrzne",
      "ucho środkowe",
      "ucho wewnętrzne"
    ],
    "answer": {
      "ucho zewnętrzne": [
        "małżowina uszna",
        "przewód słuchowy zewnętrzny"
      ],
      "ucho środkowe": [
        "jama bębenkowa",
        "kowadełko",
        "trąbka słuchowa"
      ],
      "ucho wewnętrzne": [
        "ślimak",
        "kanały półkoliste"
      ]
    },
    "explanation": "Ucho zewnętrzne wychwytuje dźwięki, środkowe przekazuje drgania, a wewnętrzne zawiera ślimak oraz kanały półkoliste."
  },
  {
    "id": "R08_UCHO_11",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "scenario",
    "prompt": "Po zejściu z szybko kręcącej się karuzeli czujesz zawroty głowy i trudno ci utrzymać równowagę. Co zostało silnie pobudzone podczas jazdy?",
    "options": [
      "Receptory narządu równowagi w kanałach półkolistych",
      "Kubki smakowe na języku",
      "Czopki w plamce żółtej",
      "Receptory węchu",
      "Gruczoły łzowe",
      "Kosteczki słuchowe jako receptory smaku"
    ],
    "answer": 0,
    "explanation": "Podczas kręcenia się na karuzeli receptory narządu równowagi są stale i silnie drażnione, dlatego po zejściu mogą wystąpić zawroty głowy.",
    "image": "r08_karuzela_rownowaga.jpg"
  },
  {
    "id": "R08_UCHO_12",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje woskowiny i włosków w przewodzie słuchowym zewnętrznym.",
    "options": [
      "zatrzymywanie zanieczyszczeń",
      "zatrzymywanie drobnoustrojów",
      "nawilżanie przewodu przez woskowinę",
      "rozróżnianie barw",
      "skupianie światła na siatkówce"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Włoski i woskowina pełnią funkcję ochronną, zatrzymują zanieczyszczenia i drobnoustroje, a woskowina dodatkowo nawilża przewód słuchowy."
  },
  {
    "id": "R08_UCHO_13",
    "section": "Działanie narządu słuchu i równowagi",
    "type": "true_false",
    "prompt": "Trzy kanały półkoliste są ułożone w trzech prostopadłych do siebie płaszczyznach i uczestniczą w rejestrowaniu ruchów głowy.",
    "options": null,
    "answer": true,
    "explanation": "Kanały półkoliste są rozmieszczone w trzech prostopadłych płaszczyznach, co pozwala rejestrować różne kierunki ruchów głowy."
  },
  {
    "id": "R08_HIG_01",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "single_choice",
    "prompt": "Co jest typowe dla krótkowzroczności?",
    "options": [
      "Promienie skupiają się przed siatkówką, a dobrze widać z bliska",
      "Promienie skupiają się za siatkówką, a dobrze widać z bliska",
      "Światło skupia się w wielu punktach i dobrze widać z każdej odległości",
      "Soczewka mętnieje, ale obraz pozostaje ostry",
      "Nerw wzrokowy jest całkowicie zdrowy przy zwężonym polu widzenia",
      "Źrenica nie reaguje na światło"
    ],
    "answer": 0,
    "explanation": "W krótkowzroczności promienie skupiają się przed siatkówką. Osoba widzi wyraźnie obiekty położone blisko, a gorzej te dalekie.",
    "image": "r08_okulary_optyk.jpg"
  },
  {
    "id": "R08_HIG_02",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "single_choice",
    "prompt": "Jakimi soczewkami koryguje się dalekowzroczność?",
    "options": [
      "wypukłymi oznaczanymi znakiem +",
      "wklęsłymi oznaczanymi znakiem -",
      "cylindrycznymi",
      "płaskimi bez mocy optycznej",
      "wyłącznie ciemnymi",
      "wyłącznie barwnymi"
    ],
    "answer": 0,
    "explanation": "Dalekowzroczność koryguje się soczewkami wypukłymi, oznaczanymi znakiem plus."
  },
  {
    "id": "R08_HIG_03",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny wad wzroku.",
    "options": [
      "nieprawidłowy kształt gałki ocznej",
      "nieprawidłowy kształt soczewki",
      "nierówności elementów załamujących światło",
      "zbyt duża liczba kubków smakowych",
      "brak woskowiny w uchu",
      "krótkotrwałe mrugnięcie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wady wzroku mogą wynikać z nieprawidłowego kształtu gałki ocznej lub soczewki oraz z nierówności elementów załamujących światło."
  },
  {
    "id": "R08_HIG_04",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "match",
    "prompt": "Połącz wadę wzroku z typową soczewką korygującą.",
    "options": null,
    "left": [
      "krótkowzroczność",
      "dalekowzroczność",
      "astygmatyzm"
    ],
    "right": [
      "soczewka wklęsła",
      "soczewka wypukła",
      "soczewka cylindryczna"
    ],
    "answer": {
      "krótkowzroczność": "soczewka wklęsła",
      "dalekowzroczność": "soczewka wypukła",
      "astygmatyzm": "soczewka cylindryczna"
    },
    "explanation": "Krótkowzroczność korygują soczewki wklęsłe, dalekowzroczność wypukłe, a astygmatyzm cylindryczne.",
    "image": "r08_okulary_optyk.jpg"
  },
  {
    "id": "R08_HIG_05",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "true_false",
    "prompt": "Astygmatyzm może wynikać z nieregularnego kształtu rogówki lub soczewki.",
    "options": null,
    "answer": true,
    "explanation": "Nieregularny kształt rogówki lub soczewki powoduje rozproszenie światła i skupianie promieni w różnych punktach na siatkówce."
  },
  {
    "id": "R08_HIG_06",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "riddle",
    "prompt": "Jak nazywa się choroba oka spowodowana zmętnieniem soczewki, dająca mgliste i nieostre widzenie?",
    "options": null,
    "answer": "zaćma",
    "altAnswers": [
      "zaćma",
      "zacma"
    ],
    "explanation": "Zaćma jest skutkiem zmętnienia soczewki. Może powodować nieostre, mgliste widzenie i zaburzać ocenę odległości."
  },
  {
    "id": "R08_HIG_07",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "riddle",
    "prompt": "Jak nazywa się choroba, w której postępujące uszkodzenie nerwu wzrokowego może prowadzić do zwężenia pola widzenia?",
    "options": null,
    "answer": "jaskra",
    "explanation": "Jaskra jest postępującym uszkodzeniem nerwu wzrokowego; ważnym czynnikiem jest zbyt wysokie ciśnienie wewnątrzgałkowe."
  },
  {
    "id": "R08_HIG_08",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "scenario",
    "prompt": "Osoba po 40. roku życia stopniowo traci zdolność wyraźnego widzenia z bliskiej odległości. Jak nazywa się to zjawisko?",
    "options": [
      "starczowzroczność",
      "krótkowzroczność",
      "zez",
      "jaskra",
      "zapalenie spojówek",
      "daltonizm"
    ],
    "answer": 0,
    "explanation": "Starczowzroczność to naturalna, stopniowa utrata zdolności widzenia z bliska, zwykle pojawiająca się po 40. roku życia."
  },
  {
    "id": "R08_HIG_09",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "multi_select",
    "prompt": "Zaznacz zalecenia pomagające dbać o wzrok podczas codziennej pracy.",
    "options": [
      "robić regularne przerwy od komputera",
      "patrzeć w dal podczas przerw",
      "dbać o prawidłowe oświetlenie",
      "często mrugać",
      "pracować stale w ciemności",
      "unikać badań wzroku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Oczy warto odciążać regularnymi przerwami, patrzeniem w dal, prawidłowym oświetleniem i częstym mruganiem. Ważne są też regularne badania wzroku.",
    "image": "r08_komputer_higiena_wzroku.jpg"
  },
  {
    "id": "R08_HIG_10",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "scenario",
    "prompt": "Po długim wpatrywaniu się w monitor czujesz pieczenie oczu i wrażenie piasku pod powiekami. Jaka bezpośrednia przyczyna jest najbardziej prawdopodobna?",
    "options": [
      "Rzadsze mruganie i słabsze nawilżenie gałki ocznej",
      "Zwiększenie liczby pręcików",
      "Wzrost liczby kosteczek słuchowych",
      "Zanik kubków smakowych",
      "Stałe rozszerzenie przewodu słuchowego",
      "Pobudzenie kanałów półkolistych"
    ],
    "answer": 0,
    "explanation": "Podczas wpatrywania się w ekran mrugamy rzadziej, przez co powierzchnia oka jest słabiej nawilżana i może piec.",
    "image": "r08_komputer_higiena_wzroku.jpg"
  },
  {
    "id": "R08_HIG_11",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "true_false",
    "prompt": "Dźwięki o natężeniu powyżej 130 dB mogą najpierw powodować ból, a następnie uszkodzenie słuchu.",
    "options": null,
    "answer": true,
    "explanation": "Natężenie powyżej 130 dB przekracza próg bólu i może prowadzić do uszkodzenia słuchu."
  },
  {
    "id": "R08_HIG_12",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "multi_select",
    "prompt": "Zaznacz możliwe skutki długotrwałego hałasu.",
    "options": [
      "upośledzenie lub utrata słuchu",
      "zaburzenia snu",
      "obniżenie koncentracji",
      "bóle głowy",
      "zakłócenia zmysłu równowagi",
      "poprawa akomodacji oka"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Hałas może uszkadzać słuch, zaburzać sen i równowagę, obniżać koncentrację oraz powodować bóle głowy. Może też wpływać na układ krążenia i pokarmowy."
  },
  {
    "id": "R08_HIG_13",
    "section": "Choroby i higiena oka oraz ucha",
    "type": "scenario",
    "prompt": "Ktoś codziennie słucha bardzo głośnej muzyki przez słuchawki wkładane do przewodu słuchowego. Jakie zagrożenie wiąże się z takim nawykiem?",
    "options": [
      "Uszkodzenie błony bębenkowej lub słuchu oraz większe ryzyko infekcji ucha",
      "Lepsze działanie trąbki słuchowej",
      "Wzrost liczby komórek słuchowych",
      "Poprawa równowagi",
      "Lepsze nawilżenie oka",
      "Wzmocnienie soczewki"
    ],
    "answer": 0,
    "explanation": "Głośne słuchanie przez słuchawki może uszkodzić błonę bębenkową i słuch, a zanieczyszczenia przenoszone przez słuchawki mogą sprzyjać infekcjom.",
    "image": "r08_sluchawki_glosna_muzyka.jpg"
  },
  {
    "id": "R08_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Na jakie trzy barwy reagują komórki światłoczułe odpowiedzialne za rozpoznawanie kolorów?",
    "options": [
      "niebieską, zieloną i czerwoną",
      "żółtą, czarną i białą",
      "fioletową, pomarańczową i brązową",
      "czerwoną, czarną i szarą",
      "niebieską, białą i czarną",
      "zieloną, żółtą i czarną"
    ],
    "answer": 0,
    "explanation": "Komórki światłoczułe rozpoznają barwy niebieską, zieloną i czerwoną, a ich kombinacje pozwalają widzieć pozostałe kolory światła widzialnego."
  },
  {
    "id": "R08_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Największe zagęszczenie czopków znajduje się w __________, a miejsce pozbawione receptorów światła to __________.",
    "options": null,
    "answer": [
      "plamce żółtej",
      "tarcza nerwu wzrokowego"
    ],
    "altAnswers": [
      [
        "plamce żółtej",
        "plamka żółta",
        "plamce zoltej"
      ],
      [
        "tarcza nerwu wzrokowego",
        "tarczy nerwu wzrokowego",
        "plamka ślepa",
        "plamka slepa"
      ]
    ],
    "explanation": "Plamka żółta jest miejscem najostrzejszego widzenia, natomiast tarcza nerwu wzrokowego nie zawiera fotoreceptorów."
  },
  {
    "id": "R08_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz błonę gałki ocznej z jej charakterystyczną funkcją.",
    "options": null,
    "left": [
      "twardówka",
      "naczyniówka",
      "siatkówka"
    ],
    "right": [
      "chroni gałkę oczną i nadaje jej kształt",
      "odżywia gałkę oczną dzięki naczyniom krwionośnym",
      "zawiera czopki i pręciki"
    ],
    "answer": {
      "twardówka": "chroni gałkę oczną i nadaje jej kształt",
      "naczyniówka": "odżywia gałkę oczną dzięki naczyniom krwionośnym",
      "siatkówka": "zawiera czopki i pręciki"
    },
    "explanation": "Twardówka pełni głównie funkcję ochronną, naczyniówka odżywia gałkę oczną, a siatkówka zawiera fotoreceptory."
  },
  {
    "id": "R08_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pełną drogę informacji węchowej od bodźca do powstania wrażenia.",
    "options": null,
    "items": [
      "interpretacja w korowych ośrodkach węchowych",
      "rozpuszczenie cząsteczek w śluzie",
      "wejście lotnych cząsteczek do jamy nosowej",
      "powstanie impulsu elektrycznego w receptorach",
      "pobudzenie receptorów pola węchowego"
    ],
    "answer": [
      "wejście lotnych cząsteczek do jamy nosowej",
      "rozpuszczenie cząsteczek w śluzie",
      "pobudzenie receptorów pola węchowego",
      "powstanie impulsu elektrycznego w receptorach",
      "interpretacja w korowych ośrodkach węchowych"
    ],
    "explanation": "Bodziec węchowy musi dostać się do jamy nosowej, rozpuścić w śluzie, pobudzić receptory i zostać zamieniony na impuls interpretowany w mózgu."
  },
  {
    "id": "R08_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W próbie z dwoma ołówkami badana osoba rozróżnia dwa punkty przy znacznie mniejszej odległości na opuszce palca niż na łopatce. Jaki wniosek jest prawidłowy?",
    "options": [
      "W opuszce palca receptory dotyku są rozmieszczone gęściej",
      "Na łopatce nie ma żadnych receptorów dotyku",
      "Receptory dotyku są rozmieszczone jednakowo w całej skórze",
      "Opuszka palca odbiera wyłącznie ból",
      "Łopatka zawiera wyłącznie receptory temperatury",
      "Gęstość receptorów zależy tylko od wieku badanej osoby"
    ],
    "answer": 0,
    "explanation": "Im gęściej rozmieszczone są receptory dotyku, tym mniejszą odległość między dwoma punktami można rozróżnić. Receptory nie są rozmieszczone równomiernie.",
    "image": "r08_opuszki_palca.jpg"
  },
  {
    "id": "R08_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W jakiej odległości od siebie są ułożone wypukłe punkty alfabetu Braille'a?",
    "options": [
      "2,3 mm",
      "0,5 mm",
      "3 mm",
      "8 mm",
      "25 mm",
      "16 mm"
    ],
    "answer": 0,
    "explanation": "W alfabecie Braille'a wypukłe punkty są ułożone w odległości 2,3 mm od siebie."
  },
  {
    "id": "R08_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż określenie, które nie jest jednym z pięciu podstawowych smaków: słodki, słony, umami, ostry.",
    "options": null,
    "answer": "ostry",
    "explanation": "Ostry nie jest podstawowym smakiem. Wrażenie ostrości, np. pieprzu lub ostrej papryki, odbierają receptory bólowe."
  },
  {
    "id": "R08_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne informacje o wybranych smakach.",
    "options": [
      "Słodki może sygnalizować kaloryczny pokarm",
      "Umami bywa określany jako smak mięsny",
      "Kwaśny i gorzki mogą ostrzegać przed niedojrzałym lub trującym pokarmem roślinnym",
      "Ostry jest szóstym podstawowym smakiem",
      "Umami jest wywoływany przez brak bodźców chemicznych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Słodki może sygnalizować pokarm kaloryczny, umami jest określany jako smak mięsny, a kwaśny i gorzki mogą pełnić funkcję ostrzegawczą."
  },
  {
    "id": "R08_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Ucho odbiera fale dźwiękowe w zakresie około __________ Hz, a impulsy słuchowe są interpretowane w płacie __________ kory mózgowej.",
    "options": null,
    "answer": [
      "16-20 000",
      "skroniowym"
    ],
    "altAnswers": [
      [
        "16-20 000",
        "16–20 000",
        "16-20000",
        "16–20000"
      ],
      [
        "skroniowym"
      ]
    ],
    "explanation": "Zakres słyszalnych częstotliwości wynosi około 16-20 000 Hz, a ośrodki słuchowe znajdują się w płacie skroniowym kory mózgowej."
  },
  {
    "id": "R08_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz ruch głowy z kanałem półkolistym, który go wykrywa.",
    "options": null,
    "left": [
      "potakiwanie głową",
      "przechylanie głowy do ramienia",
      "obracanie głowy"
    ],
    "right": [
      "kanał półkolisty górny",
      "kanał półkolisty tylny",
      "kanał półkolisty poziomy"
    ],
    "answer": {
      "potakiwanie głową": "kanał półkolisty górny",
      "przechylanie głowy do ramienia": "kanał półkolisty tylny",
      "obracanie głowy": "kanał półkolisty poziomy"
    },
    "explanation": "Kanał górny wykrywa ruchy w przód i w tył, tylny ruchy na boki przy przechylaniu, a poziomy ruch obrotowy głowy.",
    "image": "r08_karuzela_rownowaga.jpg"
  },
  {
    "id": "R08_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która kosteczka słuchowa ma około 3 mm długości?",
    "options": [
      "strzemiączko",
      "młoteczek",
      "kowadełko",
      "ślimak",
      "małżowina uszna",
      "trąbka słuchowa"
    ],
    "answer": 0,
    "explanation": "Strzemiączko ma około 3 mm długości. Młoteczek ma około 8 mm."
  },
  {
    "id": "R08_HARD_12",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Kosteczki słuchowe są całkowicie ukształtowane już w chwili narodzin i nie zwiększają swoich rozmiarów podczas wzrostu organizmu.",
    "options": null,
    "answer": true,
    "explanation": "Młoteczek, kowadełko i strzemiączko są ukształtowane przy narodzinach i jako jedyne kości nie zmieniają rozmiaru podczas wzrostu."
  },
  {
    "id": "R08_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Starsza osoba widzi obraz jak przez mgłę, ma trudność z oceną odległości, a czasem występuje u niej podwójne widzenie jednym okiem. Która choroba najlepiej pasuje do opisu?",
    "options": [
      "zaćma",
      "jaskra",
      "jęczmień",
      "zez",
      "daltonizm",
      "krótkowzroczność"
    ],
    "answer": 0,
    "explanation": "Zmętnienie soczewki w zaćmie powoduje mgliste, nieostre widzenie, może zaburzać ocenę odległości i powodować podwójne widzenie jednym okiem."
  },
  {
    "id": "R08_HARD_14",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do adaptacji albo akomodacji oka.",
    "options": null,
    "items": [
      "zmiana średnicy źrenicy",
      "zależność od natężenia światła",
      "zmiana kształtu soczewki",
      "ostre widzenie z różnych odległości"
    ],
    "categories": [
      "adaptacja",
      "akomodacja"
    ],
    "answer": {
      "adaptacja": [
        "zmiana średnicy źrenicy",
        "zależność od natężenia światła"
      ],
      "akomodacja": [
        "zmiana kształtu soczewki",
        "ostre widzenie z różnych odległości"
      ]
    },
    "explanation": "Adaptacja dostosowuje oko do oświetlenia m.in. przez zmianę średnicy źrenicy, a akomodacja zmienia kształt soczewki, by ostro widzieć z różnych odległości."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r08",
  number: 8,
  title: "Narządy zmysłów",
  icon: "👁️",
  sectionOrder: [
    "Smak, węch i dotyk",
    "Powstawanie obrazu w oku",
    "Działanie narządu słuchu i równowagi",
    "Choroby i higiena oka oraz ucha"
  ],
  sectionIcons: {
    "Smak, węch i dotyk": "👅",
    "Powstawanie obrazu w oku": "👁️",
    "Działanie narządu słuchu i równowagi": "👂",
    "Choroby i higiena oka oraz ucha": "🩺"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
