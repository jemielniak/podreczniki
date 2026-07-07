// Skróty sekcji:
//   ROZ = Rozbicie dzielnicowe
//   SLA = Polska w XIII wieku (Śląsk, kolonizacja, gospodarka)
//   JED = Dążenie do jedności
//   ZJE = Zjednoczona Polska
//   KAZ = Polska Kazimierza Wielkiego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_ROZ_01",
    "section": "Rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "Co nazywamy rozbiciem dzielnicowym Polski?",
    "options": [
      "Podbój Polski przez Krzyżaków",
      "Rozpad państwa na niezależne księstwa",
      "Przeniesienie stolicy z Gniezna do Krakowa",
      "Utrata korony przez Piastów",
      "Najazd Mongołów na Śląsk",
      "Lokowanie miast na prawie niemieckim"
    ],
    "answer": 1,
    "explanation": "Rozbicie dzielnicowe oznaczało rozpad Polski na niezależne księstwa rządzone przez książąt piastowskich.",
    "image": "/img/r07_testament_krzywoustego.jpg"
  },
  {
    "id": "R07_ROZ_02",
    "section": "Rozbicie dzielnicowe",
    "type": "true_false",
    "prompt": "Rozbicie dzielnicowe zaczęło się po śmierci Bolesława Krzywoustego w 1138 roku.",
    "options": null,
    "answer": true,
    "explanation": "Po śmierci Krzywoustego jego ustawa sukcesyjna doprowadziła do podziału władzy między synów."
  },
  {
    "id": "R07_ROZ_03",
    "section": "Rozbicie dzielnicowe",
    "type": "fill_in",
    "prompt": "Najstarszy syn Bolesława Krzywoustego, Władysław __________, został seniorem dynastii Piastów.",
    "options": null,
    "answer": [
      "Wygnaniec"
    ],
    "altAnswers": [
      [
        "Wygnaniec",
        "Wygnańcem",
        "Władysław Wygnaniec"
      ]
    ],
    "explanation": "Władysław, zwany później Wygnańcem, otrzymał dzielnicę senioralną z Krakowem i Śląsk jako dzielnicę dziedziczną."
  },
  {
    "id": "R07_ROZ_04",
    "section": "Rozbicie dzielnicowe",
    "type": "multi_select",
    "prompt": "Zaznacz grupy, które korzystały z rozbicia dzielnicowego.",
    "options": [
      "Piastowscy książęta",
      "Możnowładcy",
      "Urzędnicy na licznych dworach",
      "Prusowie",
      "Mongołowie",
      "Węgrzy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Książęta woleli rządzić własnymi księstewkami, możnowładcy zyskiwali wpływy, a urzędnicy robili kariery na wielu dworach."
  },
  {
    "id": "R07_ROZ_05",
    "section": "Rozbicie dzielnicowe",
    "type": "match",
    "prompt": "Połącz utraconą ziemię lub obszar z państwem albo zależnością.",
    "options": null,
    "left": [
      "Pomorze Zachodnie",
      "Księstwa śląskie",
      "Ziemia lubuska"
    ],
    "right": [
      "Cesarstwo rzymskie",
      "Czechy",
      "Brandenburgia"
    ],
    "answer": {
      "Pomorze Zachodnie": "Cesarstwo rzymskie",
      "Księstwa śląskie": "Czechy",
      "Ziemia lubuska": "Brandenburgia"
    },
    "explanation": "Podczas rozbicia dzielnicowego Polska traciła ziemie i wpływy na rzecz sąsiadów."
  },
  {
    "id": "R07_ROZ_06",
    "section": "Rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "Kto sprowadził Krzyżaków do Polski?",
    "options": [
      "Henryk Brodaty",
      "Konrad Mazowiecki",
      "Władysław Łokietek",
      "Przemysł II",
      "Kazimierz Wielki",
      "Bolesław Śmiały"
    ],
    "answer": 1,
    "explanation": "Konrad Mazowiecki nadał Krzyżakom ziemię chełmińską, licząc na obronę Mazowsza przed Prusami.",
    "image": "/img/r07_krzyzacy_zamek.jpg"
  },
  {
    "id": "R07_ROZ_07",
    "section": "Rozbicie dzielnicowe",
    "type": "single_choice",
    "prompt": "W jakim celu powstał zakon krzyżacki w Palestynie?",
    "options": [
      "Dla obrony pielgrzymów z Europy przed muzułmanami",
      "Dla koronowania królów Polski",
      "Dla lokowania miast na prawie niemieckim",
      "Dla handlu solą z Wieliczki",
      "Dla obrony Krakowa przed Czechami",
      "Dla zakładania uniwersytetów"
    ],
    "answer": 0,
    "explanation": "Krzyżacy byli zakonem rycerskim założonym przez Niemców w 1190 roku w Palestynie."
  },
  {
    "id": "R07_ROZ_08",
    "section": "Rozbicie dzielnicowe",
    "type": "fill_in",
    "prompt": "Pierwsi rycerze zakonni przybyli do ziemi chełmińskiej w roku __________, a do 1283 roku podbili całe __________.",
    "options": null,
    "answer": [
      "1230",
      "Prusy"
    ],
    "altAnswers": [
      [
        "1230",
        "1230 r."
      ],
      [
        "Prusy",
        "Prus",
        "Prusami"
      ]
    ],
    "explanation": "Krzyżacy rozpoczęli podbój Prus po osiedleniu się w ziemi chełmińskiej."
  },
  {
    "id": "R07_ROZ_09",
    "section": "Rozbicie dzielnicowe",
    "type": "sort",
    "prompt": "Przyporządkuj hasła do tematów.",
    "options": null,
    "items": [
      "zasada senioratu",
      "ziemia chełmińska",
      "Prusowie",
      "dzielnica senioralna",
      "Brandenburgia",
      "zamek w Kwidzynie"
    ],
    "categories": [
      "rozbicie dzielnicowe",
      "Krzyżacy"
    ],
    "answer": {
      "rozbicie dzielnicowe": [
        "zasada senioratu",
        "dzielnica senioralna",
        "Brandenburgia"
      ],
      "Krzyżacy": [
        "ziemia chełmińska",
        "Prusowie",
        "zamek w Kwidzynie"
      ]
    },
    "explanation": "Pierwsze pojęcia wiążą się z podziałem Polski i stratami terytorialnymi, a drugie z początkiem państwa zakonnego."
  },
  {
    "id": "R07_ROZ_10",
    "section": "Rozbicie dzielnicowe",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Prusowie, Krzyżacy, ziemia chełmińska, Akademia Krakowska.",
    "options": null,
    "answer": "Akademia Krakowska",
    "explanation": "Akademia Krakowska dotyczy reform Kazimierza Wielkiego, a pozostałe pojęcia wiążą się ze sprowadzeniem Krzyżaków."
  },
  {
    "id": "R07_ROZ_11",
    "section": "Rozbicie dzielnicowe",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Zakończenie podboju Prus przez Krzyżaków",
      "Śmierć Bolesława Krzywoustego",
      "Sprowadzenie Krzyżaków do Polski",
      "Upadek zasady senioratu"
    ],
    "answer": [
      "Śmierć Bolesława Krzywoustego",
      "Upadek zasady senioratu",
      "Sprowadzenie Krzyżaków do Polski",
      "Zakończenie podboju Prus przez Krzyżaków"
    ],
    "explanation": "Najpierw zmarł Krzywousty w 1138 roku, później upadła zasada senioratu, w 1230 roku przybyli Krzyżacy, a w 1283 roku podbili Prusy."
  },
  {
    "id": "R07_ROZ_12",
    "section": "Rozbicie dzielnicowe",
    "type": "scenario",
    "prompt": "Jesteś księciem mazowieckim. Twoje ziemie są pustoszone przez pogańskich Prusów, więc zapraszasz zakon rycerski i nadajesz mu ziemię chełmińską. Jak nazywasz się w podręczniku?",
    "options": [
      "Konrad Mazowiecki",
      "Henryk Pobożny",
      "Wacław II",
      "Przemysł II"
    ],
    "answer": 0,
    "explanation": "Tak postąpił Konrad Mazowiecki, który liczył na pomoc Krzyżaków w obronie Mazowsza."
  },
  {
    "id": "R07_SLA_01",
    "section": "Polska w XIII wieku",
    "type": "single_choice",
    "prompt": "Która dzielnica Polski była najlepiej rozwinięta w pierwszej połowie XIII wieku?",
    "options": [
      "Śląsk",
      "Mazowsze",
      "Pomorze Gdańskie",
      "Ruś Halicka",
      "Ziemia dobrzyńska",
      "Ziemia lubuska"
    ],
    "answer": 0,
    "explanation": "Podręcznik podkreśla, że w pierwszej połowie XIII wieku najlepiej rozwiniętą dzielnicą był Śląsk."
  },
  {
    "id": "R07_SLA_02",
    "section": "Polska w XIII wieku",
    "type": "single_choice",
    "prompt": "Kto rządził Śląskiem od 1201 roku i ściągał tam osadników?",
    "options": [
      "Henryk Brodaty",
      "Henryk Pobożny",
      "Władysław Wygnaniec",
      "Kazimierz Wielki",
      "Konrad Mazowiecki",
      "Janisław"
    ],
    "answer": 0,
    "explanation": "Henryk Brodaty wspierał rozwój Śląska, sprowadzał osadników i zakładał klasztory.",
    "image": "/img/r07_osadnicy_slask.jpg"
  },
  {
    "id": "R07_SLA_03",
    "section": "Polska w XIII wieku",
    "type": "fill_in",
    "prompt": "Okres zwolnienia osadników z czynszu nazywano __________.",
    "options": null,
    "answer": [
      "wolnizną"
    ],
    "altAnswers": [
      [
        "wolnizną",
        "wolnizna",
        "wolniznę"
      ]
    ],
    "explanation": "Wolnizna zachęcała przybyszów do osiedlania się i zagospodarowywania ziemi."
  },
  {
    "id": "R07_SLA_04",
    "section": "Polska w XIII wieku",
    "type": "multi_select",
    "prompt": "Zaznacz skutki kolonizacji niemieckiej opisane w podręczniku.",
    "options": [
      "Wprowadzenie żelaznego pługa",
      "Lokacje wsi i miast na prawie niemieckim",
      "Wzrost liczby mieszkańców",
      "Zanik wszystkich miast w Polsce",
      "Pojawienie się konfliktów z osadnikami",
      "Natychmiastowe zjednoczenie Polski"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Kolonizacja przyniosła nowe metody gospodarowania i rozwój osad, ale także konflikty narodowościowe."
  },
  {
    "id": "R07_SLA_05",
    "section": "Polska w XIII wieku",
    "type": "true_false",
    "prompt": "Kolonizacja niemiecka dotyczyła wyłącznie wsi i nie obejmowała miast.",
    "options": null,
    "answer": false,
    "explanation": "Niemieccy osadnicy przybywali także do miast, między innymi do Krakowa, Gdańska i Wrocławia."
  },
  {
    "id": "R07_SLA_06",
    "section": "Polska w XIII wieku",
    "type": "single_choice",
    "prompt": "Co oznaczała lokacja wsi lub miasta na prawie niemieckim?",
    "options": [
      "Spisanie umowy określającej prawa i obowiązki mieszkańców",
      "Przymus opuszczenia ziemi przez wszystkich Polaków",
      "Zamianę każdej wsi w zamek",
      "Wprowadzenie wyłącznie handlu wymiennego",
      "Zakaz używania pieniędzy",
      "Podporządkowanie miejscowości Mongołom"
    ],
    "answer": 0,
    "explanation": "Prawo niemieckie wymagało spisania umowy między księciem a mieszkańcami i było korzystniejsze niż wcześniejsze ustne zasady."
  },
  {
    "id": "R07_SLA_07",
    "section": "Polska w XIII wieku",
    "type": "match",
    "prompt": "Połącz pojęcie z wyjaśnieniem.",
    "options": null,
    "left": [
      "czynsz",
      "radło",
      "gospodarka towarowo-pieniężna",
      "prawo składu"
    ],
    "right": [
      "opłata za użytkowanie ziemi",
      "proste narzędzie do spulchniania ziemi",
      "płacenie pieniędzmi za towary",
      "obowiązek wystawienia towarów na sprzedaż w mieście"
    ],
    "answer": {
      "czynsz": "opłata za użytkowanie ziemi",
      "radło": "proste narzędzie do spulchniania ziemi",
      "gospodarka towarowo-pieniężna": "płacenie pieniędzmi za towary",
      "prawo składu": "obowiązek wystawienia towarów na sprzedaż w mieście"
    },
    "explanation": "Te pojęcia opisują przemiany gospodarcze XIII-wiecznej Polski."
  },
  {
    "id": "R07_SLA_08",
    "section": "Polska w XIII wieku",
    "type": "fill_in",
    "prompt": "W gospodarce towarowo-pieniężnej za towar płaci się __________.",
    "options": null,
    "answer": [
      "pieniędzmi"
    ],
    "altAnswers": [
      [
        "pieniędzmi",
        "pieniądzem",
        "monetami"
      ]
    ],
    "explanation": "Gospodarka towarowo-pieniężna zastępowała prostą wymianę towaru za towar."
  },
  {
    "id": "R07_SLA_09",
    "section": "Polska w XIII wieku",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do dziedzin zmian w XIII wieku.",
    "options": null,
    "items": [
      "żelazny pług",
      "miejskie targi",
      "warsztaty rzemieślników",
      "nawożenie ziemi",
      "prawo składu",
      "ulepszone narzędzia"
    ],
    "categories": [
      "rolnictwo",
      "rzemiosło",
      "handel"
    ],
    "answer": {
      "rolnictwo": [
        "żelazny pług",
        "nawożenie ziemi"
      ],
      "rzemiosło": [
        "warsztaty rzemieślników",
        "ulepszone narzędzia"
      ],
      "handel": [
        "miejskie targi",
        "prawo składu"
      ]
    },
    "explanation": "Lepsze rolnictwo zwiększało produkcję, rozwój narzędzi wspierał rzemiosło, a miasta i targi napędzały handel."
  },
  {
    "id": "R07_SLA_10",
    "section": "Polska w XIII wieku",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: żelazny pług, nawożenie ziemi, rozwinięta hodowla, rzeź Gdańska.",
    "options": null,
    "answer": "rzeź Gdańska",
    "explanation": "Rzeź Gdańska dotyczy konfliktu z Krzyżakami, a pozostałe elementy są skutkami rozwoju rolnictwa."
  },
  {
    "id": "R07_SLA_11",
    "section": "Polska w XIII wieku",
    "type": "scenario",
    "prompt": "Kupiec przejeżdża przez miasto i musi przez kilka dni wystawić swoje towary na sprzedaż, zanim pojedzie dalej. Jakie prawo obowiązuje w tym mieście?",
    "options": [
      "prawo składu",
      "zasada senioratu",
      "wolnizna",
      "statut wiślicki"
    ],
    "answer": 0,
    "explanation": "Prawo składu zmuszało kupców przejeżdżających przez miasto do czasowego wystawienia towarów na sprzedaż."
  },
  {
    "id": "R07_SLA_12",
    "section": "Polska w XIII wieku",
    "type": "sequence",
    "prompt": "Ułóż ciąg przemian gospodarczych w logicznej kolejności.",
    "options": null,
    "items": [
      "Rozwija się handel",
      "Chłopi produkują więcej żywności",
      "Rzemieślnicy wytwarzają więcej narzędzi",
      "Pojawiają się lepsze metody rolnicze"
    ],
    "answer": [
      "Pojawiają się lepsze metody rolnicze",
      "Chłopi produkują więcej żywności",
      "Rzemieślnicy wytwarzają więcej narzędzi",
      "Rozwija się handel"
    ],
    "explanation": "Lepsze rolnictwo zwiększało plony, to pobudzało rzemiosło, a rozwój miast i produkcji prowadził do handlu."
  },
  {
    "id": "R07_JED_01",
    "section": "Dążenie do jedności",
    "type": "single_choice",
    "prompt": "Jak nazywano Mongołów w średniowiecznej Europie?",
    "options": [
      "Tatarami",
      "Prusami",
      "Rusinami",
      "Brandenburczykami",
      "Kawalerami mieczowymi",
      "Starostami"
    ],
    "answer": 0,
    "explanation": "W Europie Mongołów nazywano Tatarami.",
    "image": "/img/r07_lucznik_mongolski.jpg"
  },
  {
    "id": "R07_JED_02",
    "section": "Dążenie do jedności",
    "type": "true_false",
    "prompt": "Najazd Mongołów w 1241 roku rozbił państwo Henryków śląskich.",
    "options": null,
    "answer": true,
    "explanation": "Najazd spustoszył południe Polski i zakończył próbę zjednoczenia kraju przez Henryków śląskich."
  },
  {
    "id": "R07_JED_03",
    "section": "Dążenie do jedności",
    "type": "single_choice",
    "prompt": "Kto zginął w bitwie pod Legnicą w 1241 roku?",
    "options": [
      "Henryk Pobożny",
      "Henryk Brodaty",
      "Przemysł II",
      "Wacław II",
      "Konrad Mazowiecki",
      "Kazimierz Wielki"
    ],
    "answer": 0,
    "explanation": "Henryk Pobożny dostał się do niewoli po klęsce pod Legnicą i został ścięty."
  },
  {
    "id": "R07_JED_04",
    "section": "Dążenie do jedności",
    "type": "multi_select",
    "prompt": "Zaznacz przewagi wojsk mongolskich nad europejskim rycerstwem opisane w podręczniku.",
    "options": [
      "Doskonały wywiad",
      "Ruchliwe konne oddziały",
      "Umiejętność pozorowanej ucieczki",
      "Wykorzystywanie prochu i gazów trujących",
      "Obowiązkowa walka wodza w pierwszym szeregu",
      "Zakaz strzelania z łuku"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mongołowie byli ruchliwi, dobrze poinformowani i korzystali z osiągnięć podbitych cywilizacji."
  },
  {
    "id": "R07_JED_05",
    "section": "Dążenie do jedności",
    "type": "fill_in",
    "prompt": "Widomym znakiem jedności podzielonej Polski było arcybiskupstwo __________.",
    "options": null,
    "answer": [
      "gnieźnieńskie"
    ],
    "altAnswers": [
      [
        "gnieźnieńskie",
        "gnieznienskie",
        "w Gnieźnie",
        "Gniezno"
      ]
    ],
    "explanation": "Arcybiskupstwo gnieźnieńskie obejmowało całą Polskę mimo podziału politycznego."
  },
  {
    "id": "R07_JED_06",
    "section": "Dążenie do jedności",
    "type": "match",
    "prompt": "Połącz grupę społeczną z powodem popierania zjednoczenia.",
    "options": null,
    "left": [
      "niektórzy książęta",
      "Kościół",
      "chłopi i mieszczanie"
    ],
    "right": [
      "chcieli rządzić całym państwem",
      "cierpiał przez różne granice diecezji i księstw oraz wojny",
      "pragnęli silnego władcy i ochrony przed najazdami"
    ],
    "answer": {
      "niektórzy książęta": "chcieli rządzić całym państwem",
      "Kościół": "cierpiał przez różne granice diecezji i księstw oraz wojny",
      "chłopi i mieszczanie": "pragnęli silnego władcy i ochrony przed najazdami"
    },
    "explanation": "Różne grupy miały różne interesy, ale coraz częściej uznawały zjednoczenie za korzystne."
  },
  {
    "id": "R07_JED_07",
    "section": "Dążenie do jedności",
    "type": "single_choice",
    "prompt": "Jakich patronów Polski głosił Kościół, wspierając poczucie jedności?",
    "options": [
      "św. Wojciecha i św. Stanisława",
      "św. Jadwigę i św. Kingę",
      "św. Piotra i św. Pawła",
      "św. Jerzego i św. Mikołaja",
      "św. Benedykta i św. Franciszka",
      "św. Cyryla i św. Metodego"
    ],
    "answer": 0,
    "explanation": "Kult św. Wojciecha i św. Stanisława pomagał utrzymywać wspólną polską pamięć i kulturę."
  },
  {
    "id": "R07_JED_08",
    "section": "Dążenie do jedności",
    "type": "riddle",
    "prompt": "Kronikę polską, która pielęgnowała pamięć o dziejach kraju, napisał mistrz...",
    "options": null,
    "answer": "Wincenty Kadłubek",
    "altAnswers": [
      "Wincenty Kadłubek",
      "Kadłubek",
      "mistrz Wincenty",
      "Wincenty zwany Kadłubkiem"
    ],
    "explanation": "Wincenty zwany Kadłubkiem był autorem jednej z najważniejszych średniowiecznych kronik Polski."
  },
  {
    "id": "R07_JED_09",
    "section": "Dążenie do jedności",
    "type": "sort",
    "prompt": "Przyporządkuj hasła do kategorii.",
    "options": null,
    "items": [
      "Czyngis-chan",
      "bitwa pod Legnicą",
      "św. Stanisław",
      "Kronika polska",
      "konni łucznicy",
      "arcybiskupstwo gnieźnieńskie"
    ],
    "categories": [
      "najazd Mongołów",
      "rola Kościoła"
    ],
    "answer": {
      "najazd Mongołów": [
        "Czyngis-chan",
        "bitwa pod Legnicą",
        "konni łucznicy"
      ],
      "rola Kościoła": [
        "św. Stanisław",
        "Kronika polska",
        "arcybiskupstwo gnieźnieńskie"
      ]
    },
    "explanation": "Pierwsze elementy wiążą się z Mongołami, drugie z kościelnym wsparciem jedności Polski."
  },
  {
    "id": "R07_JED_10",
    "section": "Dążenie do jedności",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Czyngis-chan, konny łucznik, bitwa pod Legnicą, pokój kaliski.",
    "options": null,
    "answer": "pokój kaliski",
    "explanation": "Pokój kaliski dotyczy rządów Kazimierza Wielkiego, a pozostałe elementy wiążą się z Mongołami."
  },
  {
    "id": "R07_JED_11",
    "section": "Dążenie do jedności",
    "type": "scenario",
    "prompt": "Jesteś mieszczaninem w drugiej połowie XIII wieku. Cierpisz przez wojny książąt i najazdy, a liczysz na silnego władcę, który zaprowadzi porządek. Jakiego celu najpewniej popierasz?",
    "options": [
      "zjednoczenie Polski",
      "rozbicie państwa na jeszcze mniejsze księstwa",
      "podbój Prus przez Krzyżaków",
      "utrzymanie osobnych praw każdej dzielnicy"
    ],
    "answer": 0,
    "explanation": "Chłopi i mieszczanie popierali zjednoczenie, bo liczyli na bezpieczeństwo i lepszą ochronę swoich praw."
  },
  {
    "id": "R07_JED_12",
    "section": "Dążenie do jedności",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Bitwa pod Legnicą",
      "Zniszczenie Kijowa przez Mongołów",
      "Objęcie rządów przez Henryka Pobożnego",
      "Zjednoczenie plemion mongolskich przez Czyngis-chana"
    ],
    "answer": [
      "Zjednoczenie plemion mongolskich przez Czyngis-chana",
      "Objęcie rządów przez Henryka Pobożnego",
      "Zniszczenie Kijowa przez Mongołów",
      "Bitwa pod Legnicą"
    ],
    "explanation": "Czyngis-chan zjednoczył Mongołów wcześniej, Henryk Pobożny rządził od 1238 roku, Kijów zniszczono w 1240 roku, a bitwa pod Legnicą odbyła się w 1241 roku."
  },
  {
    "id": "R07_ZJE_01",
    "section": "Zjednoczona Polska",
    "type": "single_choice",
    "prompt": "Który książę został koronowany na króla Polski w 1295 roku?",
    "options": [
      "Przemysł II",
      "Wacław II",
      "Władysław Łokietek",
      "Kazimierz Wielki",
      "Henryk Pobożny",
      "Konrad Mazowiecki"
    ],
    "answer": 0,
    "explanation": "Przemysł II został królem w 1295 roku, choć jego państwo obejmowało tylko Wielkopolskę i Pomorze Gdańskie."
  },
  {
    "id": "R07_ZJE_02",
    "section": "Zjednoczona Polska",
    "type": "true_false",
    "prompt": "Przemysł II rządził po koronacji przez wiele lat i spokojnie przekazał tron synowi.",
    "options": null,
    "answer": false,
    "explanation": "Panowanie Przemysła II trwało tylko kilka miesięcy, bo został zamordowany w 1296 roku."
  },
  {
    "id": "R07_ZJE_03",
    "section": "Zjednoczona Polska",
    "type": "single_choice",
    "prompt": "Kto został koronowany w Gnieźnie na króla Polski w 1300 roku?",
    "options": [
      "Wacław II",
      "Władysław Łokietek",
      "Kazimierz Wielki",
      "Henryk Brodaty",
      "Przemysł II",
      "Janisław"
    ],
    "answer": 0,
    "explanation": "Wacław II, król Czech, zjednoczył znaczną część ziem polskich i koronował się w 1300 roku."
  },
  {
    "id": "R07_ZJE_04",
    "section": "Zjednoczona Polska",
    "type": "multi_select",
    "prompt": "Zaznacz fakty dotyczące rządów Wacława II w Polsce.",
    "options": [
      "Wytępił licznych rabusiów",
      "Wprowadził urząd starosty",
      "Obsadzał stanowiska Czechami i Niemcami",
      "Został koronowany w 1300 roku",
      "Stoczył bitwę pod Płowcami",
      "Założył Akademię Krakowską"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wacław II przywrócił porządek i wprowadził starostów, ale faworyzował Czechów i Niemców."
  },
  {
    "id": "R07_ZJE_05",
    "section": "Zjednoczona Polska",
    "type": "fill_in",
    "prompt": "W listopadzie 1308 roku Krzyżacy dokonali rzezi __________, a w 1309 roku zajęli całe Pomorze Gdańskie.",
    "options": null,
    "answer": [
      "Gdańska"
    ],
    "altAnswers": [
      [
        "Gdańska",
        "Gdańsk",
        "w Gdańsku"
      ]
    ],
    "explanation": "Rzeź Gdańska poprzedziła zajęcie całego Pomorza Gdańskiego przez zakon."
  },
  {
    "id": "R07_ZJE_06",
    "section": "Zjednoczona Polska",
    "type": "match",
    "prompt": "Połącz osobę z wydarzeniem.",
    "options": null,
    "left": [
      "Przemysł II",
      "Wacław II",
      "Władysław Łokietek"
    ],
    "right": [
      "koronacja w 1295 roku i szybka śmierć",
      "koronacja w Gnieźnie w 1300 roku",
      "koronacja w Krakowie w 1320 roku"
    ],
    "answer": {
      "Przemysł II": "koronacja w 1295 roku i szybka śmierć",
      "Wacław II": "koronacja w Gnieźnie w 1300 roku",
      "Władysław Łokietek": "koronacja w Krakowie w 1320 roku"
    },
    "explanation": "Te trzy koronacje pokazują kolejne etapy odbudowy Królestwa Polskiego.",
    "image": "/img/r07_koronacja_lokietka.jpg"
  },
  {
    "id": "R07_ZJE_07",
    "section": "Zjednoczona Polska",
    "type": "single_choice",
    "prompt": "Co było skutkiem zajęcia Pomorza Gdańskiego przez Krzyżaków?",
    "options": [
      "Polska straciła dostęp do morza",
      "Polska odzyskała Ruś Halicką",
      "Krzyżacy rozwiązali swoje państwo",
      "Łokietek założył uniwersytet",
      "Czechy zrzekły się tronu polskiego",
      "Mazowsze zostało przyłączone do Polski"
    ],
    "answer": 0,
    "explanation": "Po zajęciu Pomorza Gdańskiego Polska utraciła dostęp do Bałtyku."
  },
  {
    "id": "R07_ZJE_08",
    "section": "Zjednoczona Polska",
    "type": "true_false",
    "prompt": "Bitwa pod Płowcami w 1331 roku była dla Polaków ważna, bo pokazała, że Krzyżacy nie są niepokonani.",
    "options": null,
    "answer": true,
    "explanation": "Choć bitwa pozostała nierozstrzygnięta, sukces Łokietka podniósł morale Polaków."
  },
  {
    "id": "R07_ZJE_09",
    "section": "Zjednoczona Polska",
    "type": "riddle",
    "prompt": "Urządnik wprowadzony przez Wacława II, który rządził danym obszarem, ściągał podatki, sądził i dowodził wojskiem, to...",
    "options": null,
    "answer": "starosta",
    "altAnswers": [
      "starosta",
      "starostą"
    ],
    "explanation": "Starosta był urzędnikiem zarządzającym określonym terenem w imieniu króla."
  },
  {
    "id": "R07_ZJE_10",
    "section": "Zjednoczona Polska",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do władców.",
    "options": null,
    "items": [
      "został zamordowany w 1296 roku",
      "wprowadził urząd starosty",
      "stoczył bitwę pod Płowcami",
      "koronował się w Krakowie",
      "obsadzał stanowiska Czechami i Niemcami",
      "rządził Wielkopolską i Pomorzem Gdańskim"
    ],
    "categories": [
      "Przemysł II",
      "Wacław II",
      "Władysław Łokietek"
    ],
    "answer": {
      "Przemysł II": [
        "został zamordowany w 1296 roku",
        "rządził Wielkopolską i Pomorzem Gdańskim"
      ],
      "Wacław II": [
        "wprowadził urząd starosty",
        "obsadzał stanowiska Czechami i Niemcami"
      ],
      "Władysław Łokietek": [
        "stoczył bitwę pod Płowcami",
        "koronował się w Krakowie"
      ]
    },
    "explanation": "Każdy z tych władców odegrał inną rolę w drodze do zjednoczenia Polski."
  },
  {
    "id": "R07_ZJE_11",
    "section": "Zjednoczona Polska",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "Koronacja Władysława Łokietka",
      "Koronacja Przemysła II",
      "Rzeź Gdańska",
      "Bitwa pod Płowcami",
      "Koronacja Wacława II"
    ],
    "answer": [
      "Koronacja Przemysła II",
      "Koronacja Wacława II",
      "Rzeź Gdańska",
      "Koronacja Władysława Łokietka",
      "Bitwa pod Płowcami"
    ],
    "explanation": "Kolejność to: 1295, 1300, 1308, 1320 i 1331 rok."
  },
  {
    "id": "R07_ZJE_12",
    "section": "Zjednoczona Polska",
    "type": "scenario",
    "prompt": "Jesteś Władysławem Łokietkiem po utracie Pomorza Gdańskiego. Najpierw próbujesz odzyskać ziemię przed sądem papieskim, a potem walczysz z zakonem. O jaką ziemię głównie zabiegasz?",
    "options": [
      "Pomorze Gdańskie",
      "Ruś Halicką",
      "Śląsk",
      "Ziemię chełmińską"
    ],
    "answer": 0,
    "explanation": "Łokietek bezskutecznie próbował odzyskać Pomorze Gdańskie utracone na rzecz Krzyżaków."
  },
  {
    "id": "R07_KAZ_01",
    "section": "Polska Kazimierza Wielkiego",
    "type": "single_choice",
    "prompt": "W którym roku Kazimierz Wielki został królem Polski?",
    "options": [
      "1333",
      "1320",
      "1343",
      "1364",
      "1370",
      "1309"
    ],
    "answer": 0,
    "explanation": "Kazimierz Wielki koronował się w kwietniu 1333 roku."
  },
  {
    "id": "R07_KAZ_02",
    "section": "Polska Kazimierza Wielkiego",
    "type": "multi_select",
    "prompt": "Zaznacz zagrożenia zewnętrzne Polski w 1333 roku.",
    "options": [
      "Możliwa wojna z Krzyżakami",
      "Pretensje króla Czech do polskiego tronu",
      "Wrogość Brandenburgii",
      "Łupieskie napady pogańskiej Litwy",
      "Najazd Normanów",
      "Wojna z cesarstwem bizantyjskim"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Kazimierz obejmował państwo otoczone przeciwnikami, a przyjazne stosunki utrzymywał głównie z Węgrami."
  },
  {
    "id": "R07_KAZ_03",
    "section": "Polska Kazimierza Wielkiego",
    "type": "true_false",
    "prompt": "Na początku rządów Kazimierza Wielkiego Małopolska i Wielkopolska miały identyczne prawa, obyczaje i monetę.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik podkreśla, że Małopolska i Wielkopolska różniły się prawem, obyczajami i monetą."
  },
  {
    "id": "R07_KAZ_04",
    "section": "Polska Kazimierza Wielkiego",
    "type": "single_choice",
    "prompt": "Co postanowiono w pokoju wieczystym w Kaliszu w 1343 roku?",
    "options": [
      "Polska odzyskała Kujawy i ziemię dobrzyńską, a Krzyżacy zatrzymali Pomorze Gdańskie jako wieczystą jałmużnę",
      "Krzyżacy oddali Polsce całe Pomorze Gdańskie bez warunków",
      "Polska oddała Krzyżakom Kraków",
      "Czechy przejęły Mazowsze",
      "Kazimierz zrzekł się wszystkich ziem na wschodzie",
      "Zakon krzyżacki został rozwiązany"
    ],
    "answer": 0,
    "explanation": "Pokój kaliski dał Polsce czas na wzmocnienie i zwrócił Kujawy oraz ziemię dobrzyńską."
  },
  {
    "id": "R07_KAZ_05",
    "section": "Polska Kazimierza Wielkiego",
    "type": "fill_in",
    "prompt": "W 1364 roku Kazimierz Wielki założył pierwszy w Polsce uniwersytet, nazwany później Akademią __________.",
    "options": null,
    "answer": [
      "Krakowską"
    ],
    "altAnswers": [
      [
        "Krakowską",
        "Krakowska",
        "Akademią Krakowską"
      ]
    ],
    "explanation": "Akademia Krakowska kształciła przede wszystkim prawników potrzebnych państwu.",
    "image": "/img/r07_akademia_krakowska.jpg"
  },
  {
    "id": "R07_KAZ_06",
    "section": "Polska Kazimierza Wielkiego",
    "type": "match",
    "prompt": "Połącz działanie Kazimierza Wielkiego ze skutkiem.",
    "options": null,
    "left": [
      "jedna moneta",
      "lokacja miast i wsi",
      "budowa zamków",
      "statuty praw"
    ],
    "right": [
      "łatwiejsze podatki i większe dochody",
      "wzrost osadnictwa i gospodarki",
      "większa obronność państwa",
      "krok ku jednemu prawu w Polsce"
    ],
    "answer": {
      "jedna moneta": "łatwiejsze podatki i większe dochody",
      "lokacja miast i wsi": "wzrost osadnictwa i gospodarki",
      "budowa zamków": "większa obronność państwa",
      "statuty praw": "krok ku jednemu prawu w Polsce"
    },
    "explanation": "Reformy Kazimierza wzmacniały państwo gospodarczo, prawnie i wojskowo.",
    "image": "/img/r07_zamek_kazimierza.jpg"
  },
  {
    "id": "R07_KAZ_07",
    "section": "Polska Kazimierza Wielkiego",
    "type": "single_choice",
    "prompt": "Jaką ziemię Kazimierz Wielki zaczął zdobywać po 1340 roku na podstawie testamentu tamtejszego księcia?",
    "options": [
      "Ruś Halicką",
      "Pomorze Zachodnie",
      "Ziemię lubuską",
      "Prusy",
      "Śląsk",
      "Inflanty"
    ],
    "answer": 0,
    "explanation": "Książę Rusi Halickiej zapisał swoje państwo Kazimierzowi, a po jego śmierci król rozpoczął wyprawy na Ruś.",
    "image": "/img/r07_polska_1333_1370_mapa.jpg"
  },
  {
    "id": "R07_KAZ_08",
    "section": "Polska Kazimierza Wielkiego",
    "type": "single_choice",
    "prompt": "Jaką politykę religijną prowadził Kazimierz Wielki wobec prawosławnych Rusinów?",
    "options": [
      "Zachował tolerancję religijną i nie narzucał katolicyzmu",
      "Nakazał wszystkim przyjąć katolicyzm",
      "Wypędził wszystkich Rusinów z kraju",
      "Oddał Ruś Halicką Krzyżakom",
      "Zakazał używania języka ruskiego",
      "Zlikwidował wszystkie miasta na Rusi"
    ],
    "answer": 0,
    "explanation": "Kazimierz nie narzucał Rusinom katolicyzmu, bo zależało mu na pokoju wewnętrznym."
  },
  {
    "id": "R07_KAZ_09",
    "section": "Polska Kazimierza Wielkiego",
    "type": "fill_in",
    "prompt": "Powiedzenie głosi, że Kazimierz Wielki zastał Polskę __________, a zostawił __________.",
    "options": null,
    "answer": [
      "drewnianą",
      "murowaną"
    ],
    "altAnswers": [
      [
        "drewnianą",
        "drewniana"
      ],
      [
        "murowaną",
        "murowana"
      ]
    ],
    "explanation": "Powiedzenie odnosi się do budowy zamków i murów miejskich za Kazimierza Wielkiego."
  },
  {
    "id": "R07_KAZ_10",
    "section": "Polska Kazimierza Wielkiego",
    "type": "true_false",
    "prompt": "Kazimierz Wielki był ostatnim królem Polski z dynastii Piastów.",
    "options": null,
    "answer": true,
    "explanation": "Po śmierci Kazimierza w 1370 roku zakończyło się ponad 400 lat panowania dynastii Piastów w Polsce."
  },
  {
    "id": "R07_KAZ_11",
    "section": "Polska Kazimierza Wielkiego",
    "type": "sort",
    "prompt": "Przyporządkuj działania Kazimierza Wielkiego do obszarów polityki.",
    "options": null,
    "items": [
      "pokój w Kaliszu",
      "przyłączenie większości Rusi Halickiej",
      "założenie Akademii Krakowskiej",
      "budowa 53 zamków",
      "statuty dla Wielkopolski i Małopolski",
      "zjazd monarchów w Krakowie"
    ],
    "categories": [
      "polityka zagraniczna",
      "wzmocnienie wewnętrzne",
      "nauka i prawo"
    ],
    "answer": {
      "polityka zagraniczna": [
        "pokój w Kaliszu",
        "przyłączenie większości Rusi Halickiej",
        "zjazd monarchów w Krakowie"
      ],
      "wzmocnienie wewnętrzne": [
        "budowa 53 zamków"
      ],
      "nauka i prawo": [
        "założenie Akademii Krakowskiej",
        "statuty dla Wielkopolski i Małopolski"
      ]
    },
    "explanation": "Kazimierz działał jednocześnie na zewnątrz państwa, wewnątrz kraju oraz w dziedzinie prawa i edukacji."
  },
  {
    "id": "R07_KAZ_12",
    "section": "Polska Kazimierza Wielkiego",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z czasów Kazimierza Wielkiego w porządku chronologicznym.",
    "options": null,
    "items": [
      "Założenie Akademii Krakowskiej",
      "Pokój wieczysty w Kaliszu",
      "Śmierć Kazimierza Wielkiego",
      "Koronacja Kazimierza Wielkiego",
      "Początek wypraw na Ruś Halicką"
    ],
    "answer": [
      "Koronacja Kazimierza Wielkiego",
      "Początek wypraw na Ruś Halicką",
      "Pokój wieczysty w Kaliszu",
      "Założenie Akademii Krakowskiej",
      "Śmierć Kazimierza Wielkiego"
    ],
    "explanation": "Kolejność to: 1333, 1340, 1343, 1364 i 1370 rok."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zdania, które najlepiej wyjaśniają, dlaczego rozbicie dzielnicowe osłabiło Polskę.",
    "options": [
      "Książęta toczyli wojny domowe",
      "Granice księstw często się zmieniały",
      "Sąsiedzi przejmowali lub uzależniali ziemie polskie",
      "Wszyscy książęta zgodnie podporządkowali się jednemu królowi",
      "Polska straciła znaczenie międzynarodowe",
      "Zakon krzyżacki został natychmiast usunięty z Prus"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wojny, niestabilne granice i straty terytorialne doprowadziły do spadku znaczenia Polski."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Analizujesz decyzję Konrada Mazowieckiego. W krótkiej perspektywie chciał ochronić Mazowsze przed Prusami, ale w dłuższej powstało potężne państwo zakonne. Jaki wniosek najlepiej pasuje do podręcznika?",
    "options": [
      "Decyzja rozwiązała jeden problem, lecz stworzyła groźniejszego sąsiada",
      "Decyzja natychmiast zjednoczyła Polskę",
      "Krzyżacy pozostali tylko zakonem szpitalnym bez państwa",
      "Prusowie dobrowolnie utworzyli polskie księstwo"
    ],
    "answer": 0,
    "explanation": "Krzyżacy obronili się na ziemi chełmińskiej i w Prusach, ale stworzyli zaborcze państwo zakonne."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz przyczynę ze skutkiem w przemianach XIII wieku.",
    "options": null,
    "left": [
      "kolonizacja niemiecka",
      "lepsze narzędzia rolnicze",
      "rozwój rzemiosła",
      "rozwój handlu"
    ],
    "right": [
      "lokacje i napływ osadników",
      "większe plony",
      "więcej warsztatów w miastach",
      "gospodarka towarowo-pieniężna"
    ],
    "answer": {
      "kolonizacja niemiecka": "lokacje i napływ osadników",
      "lepsze narzędzia rolnicze": "większe plony",
      "rozwój rzemiosła": "więcej warsztatów w miastach",
      "rozwój handlu": "gospodarka towarowo-pieniężna"
    },
    "explanation": "Przemiany gospodarcze wzajemnie się napędzały: osadnictwo, rolnictwo, rzemiosło i handel tworzyły łańcuch zmian."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego Kościół miał szczególne znaczenie dla zachowania jedności Polski mimo rozbicia dzielnicowego?",
    "options": [
      "Bo jego struktury i kultura obejmowały ziemie ponad granicami księstw",
      "Bo zakazał wszystkim książętom prowadzenia wojen i był zawsze posłuszny Czechom",
      "Bo zastąpił wszystkich książąt własnymi biskupami",
      "Bo założył państwo zakonne w Prusach",
      "Bo zlikwidował różnice między Małopolską a Wielkopolską",
      "Bo wprowadził jedną monetę za Kazimierza"
    ],
    "answer": 0,
    "explanation": "Arcybiskupstwo gnieźnieńskie, język polski w duszpasterstwie, kult patronów i kroniki podtrzymywały wspólnotę ponad podziałami."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj wydarzenia do procesu historycznego.",
    "options": null,
    "items": [
      "koronacja Przemysła II",
      "rzeź Gdańska",
      "koronacja Łokietka",
      "pokój kaliski",
      "założenie Akademii Krakowskiej",
      "przyłączenie Rusi Halickiej"
    ],
    "categories": [
      "odbudowa Królestwa Polskiego",
      "konflikt z Krzyżakami",
      "wzmocnienie państwa Kazimierza"
    ],
    "answer": {
      "odbudowa Królestwa Polskiego": [
        "koronacja Przemysła II",
        "koronacja Łokietka"
      ],
      "konflikt z Krzyżakami": [
        "rzeź Gdańska",
        "pokój kaliski"
      ],
      "wzmocnienie państwa Kazimierza": [
        "założenie Akademii Krakowskiej",
        "przyłączenie Rusi Halickiej"
      ]
    },
    "explanation": "Te wydarzenia pokazują trzy główne wątki rozdziału: jednoczenie, spór z zakonem i reformy Kazimierza."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż główne etapy dziejów Polski z rozdziału w porządku chronologicznym.",
    "options": null,
    "items": [
      "Reformy Kazimierza Wielkiego",
      "Rozbicie dzielnicowe po 1138 roku",
      "Koronacja Łokietka",
      "Najazd Mongołów",
      "Koronacja Przemysła II"
    ],
    "answer": [
      "Rozbicie dzielnicowe po 1138 roku",
      "Najazd Mongołów",
      "Koronacja Przemysła II",
      "Koronacja Łokietka",
      "Reformy Kazimierza Wielkiego"
    ],
    "explanation": "Rozdział prowadzi od rozbicia po 1138 roku przez XIII-wieczne kryzysy do odrodzenia królestwa i reform Kazimierza."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: jedna moneta, statuty praw, budowa zamków, zasada senioratu.",
    "options": null,
    "answer": "zasada senioratu",
    "explanation": "Zasada senioratu dotyczy ustawy Krzywoustego, a pozostałe pojęcia są reformami Kazimierza Wielkiego."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Hasło przypisywane reformom Kazimierza Wielkiego można streścić słowami: jeden król, jedno __________, jedna __________.",
    "options": null,
    "answer": [
      "prawo",
      "moneta"
    ],
    "altAnswers": [
      [
        "prawo"
      ],
      [
        "moneta",
        "monetę"
      ]
    ],
    "explanation": "Kazimierz dążył do wzmocnienia państwa przez wspólną władzę, porządkowanie prawa i ujednolicenie pieniądza."
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego pokój kaliski można uznać za sukces mimo pozostawienia Pomorza Gdańskiego Krzyżakom?",
    "options": [
      "Polska odzyskała Kujawy i ziemię dobrzyńską oraz zyskała czas na wzmocnienie",
      "Polska zrzekła się wszystkich roszczeń do ziem utraconych na zawsze",
      "Krzyżacy natychmiast stali się lennikami Kazimierza",
      "Czechy przejęły Pomorze Gdańskie od zakonu",
      "Litwa przestała istnieć jako zagrożenie",
      "Zakon oddał Polsce Malbork"
    ],
    "answer": 0,
    "explanation": "Pokój pozwolił uniknąć wojny, odzyskać część ziem i przygotować państwo do przyszłych działań."
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Według podręcznika Kazimierz Wielki wzmocnił Polskę głównie przez jednorazowe zwycięstwo militarne nad Krzyżakami.",
    "options": null,
    "answer": false,
    "explanation": "Kazimierz wzmocnił państwo przede wszystkim przez dyplomację, reformy, budowę obronności, lokacje, prawo i rozwój nauki."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Uczeń twierdzi: „Kazimierz Wielki był ważny tylko dlatego, że powiększył państwo”. Która odpowiedź najlepiej uzupełnia obraz z podręcznika?",
    "options": [
      "Powiększył państwo, ale także je ujednolicił, umocnił obronnie, zreformował prawo i założył uniwersytet",
      "Nie powiększył państwa i nie prowadził reform",
      "Jego jedynym osiągnięciem była bitwa pod Płowcami",
      "Zasłynął głównie ze sprowadzenia Krzyżaków do Polski"
    ],
    "answer": 0,
    "explanation": "Podręcznik pokazuje Kazimierza jako władcę, który jednocześnie prowadził politykę zagraniczną, reformy wewnętrzne i rozwój kultury."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Zjazd monarchów w Krakowie w 1364 roku świadczył o wzroście międzynarodowego znaczenia...",
    "options": null,
    "answer": "Polski",
    "altAnswers": [
      "Polski",
      "państwa polskiego",
      "Królestwa Polskiego"
    ],
    "explanation": "Taki zjazd nie byłby możliwy na początku rządów Kazimierza, gdy Polska była słaba i mało znacząca."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Polska rozbita na dzielnice i zjednoczona",
  icon: "👑",
  sectionOrder: [
  "Rozbicie dzielnicowe",
  "Polska w XIII wieku",
  "Dążenie do jedności",
  "Zjednoczona Polska",
  "Polska Kazimierza Wielkiego",
  "Super trudne"
],
  sectionIcons: {
  "Rozbicie dzielnicowe": "🧩",
  "Polska w XIII wieku": "🌾",
  "Dążenie do jedności": "🧭",
  "Zjednoczona Polska": "👑",
  "Polska Kazimierza Wielkiego": "🏰",
  "Super trudne": "🔥"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
