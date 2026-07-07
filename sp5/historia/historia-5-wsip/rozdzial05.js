// Skróty sekcji:
//   RYC = Rycerstwo i system lenny
//   WIE = Średniowieczna wieś i stany
//   MIA = Średniowieczne miasto
//   KOS = Kościół, zakony i kultura
//   SPO = Spór cesarstwa z papiestwem
//   WYP = Wyprawy krzyżowe
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_RYC_01",
    "section": "Rycerstwo i system lenny",
    "type": "single_choice",
    "prompt": "Czym było lenno w średniowiecznym systemie lennym?",
    "options": [
      "Ziemią nadaną wasalowi w zamian za służbę seniorowi",
      "Podatkiem płaconym przez mieszczan radzie miejskiej",
      "Zbiorem zasad życia zakonnego",
      "Sądem działającym we wsi",
      "Turniejem urządzanym na dworze",
      "Wyprawą do Ziemi Świętej"
    ],
    "answer": 0,
    "explanation": "Lenno było majątkiem ziemskim nadawanym wasalowi w zamian za służbę, przy zachowaniu zwierzchniej własności seniora."
  },
  {
    "id": "R05_RYC_02",
    "section": "Rycerstwo i system lenny",
    "type": "true_false",
    "prompt": "Wasal miał obowiązek dochować wierności seniorowi, walczyć pod jego dowództwem i służyć mu radą.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wymienia właśnie wierność, służbę wojskową i służenie radą jako podstawowe obowiązki wasala."
  },
  {
    "id": "R05_RYC_03",
    "section": "Rycerstwo i system lenny",
    "type": "multi_select",
    "prompt": "Zaznacz obowiązki seniora wobec wasala.",
    "options": [
      "Wspieranie wasala",
      "Chronienie wasala",
      "Przekazywanie mu władzy nad lennem",
      "Odrabianie pańszczyzny na polu wasala",
      "Płacenie dziesięciny wasalowi",
      "Przepisywanie ksiąg dla wasala"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Senior nadawał lenno, przekazywał władzę nad nim oraz miał wspierać i chronić swojego lennika."
  },
  {
    "id": "R05_RYC_04",
    "section": "Rycerstwo i system lenny",
    "type": "fill_in",
    "prompt": "Akt nadania lenna zaczynał się od __________, podczas którego wasal klękał przed seniorem, a potem następowała __________, czyli przekazanie władzy nad lennem.",
    "options": null,
    "answer": [
      "hołdu",
      "inwestytura"
    ],
    "altAnswers": [
      [
        "hołdu",
        "hołd",
        "hold",
        "holdu"
      ],
      [
        "inwestytura",
        "inwestytury"
      ]
    ],
    "image": "/img/r05_ceremonia_holdu.jpg",
    "explanation": "Najpierw odbywał się hołd lenny, a następnie inwestytura, symbolizowana np. wręczeniem włóczni lub chorągwi."
  },
  {
    "id": "R05_RYC_05",
    "section": "Rycerstwo i system lenny",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym objaśnieniem.",
    "options": null,
    "left": [
      "senior",
      "wasal",
      "lenno",
      "inwestytura"
    ],
    "right": [
      "zwierzchnik nadający lenno",
      "lennik zobowiązany do służby",
      "majątek ziemski nadany za służbę",
      "przekazanie władzy nad lennem"
    ],
    "answer": {
      "senior": "zwierzchnik nadający lenno",
      "wasal": "lennik zobowiązany do służby",
      "lenno": "majątek ziemski nadany za służbę",
      "inwestytura": "przekazanie władzy nad lennem"
    },
    "explanation": "Te pojęcia tworzą podstawowy słownik średniowiecznego systemu lennego."
  },
  {
    "id": "R05_RYC_06",
    "section": "Rycerstwo i system lenny",
    "type": "sequence",
    "prompt": "Ułóż etapy drogi młodego człowieka do stanu rycerskiego.",
    "options": null,
    "items": [
      "pasowanie na rycerza",
      "służba jako giermek",
      "pobyt na dworze jako paź",
      "opanowanie rycerskiego rzemiosła"
    ],
    "answer": [
      "pobyt na dworze jako paź",
      "służba jako giermek",
      "opanowanie rycerskiego rzemiosła",
      "pasowanie na rycerza"
    ],
    "explanation": "Chłopiec najpierw był paziem, potem giermkiem, a po opanowaniu rycerskiego rzemiosła mógł zostać pasowany na rycerza."
  },
  {
    "id": "R05_RYC_07",
    "section": "Rycerstwo i system lenny",
    "type": "scenario",
    "prompt": "Możny pan mieszka w zamku, ściąga daniny z okolicznych chłopów, wymusza posłuszeństwo, karze przestępców i broni poddanych podczas najazdu. Jaką funkcję pełni taki zamek w X-XI wieku?",
    "options": [
      "Ośrodka skutecznej władzy seniora",
      "Siedziby samorządu miejskiego",
      "Miejsca obrad uniwersytetu",
      "Klasztornego skryptorium",
      "Targowiska kupców włoskich",
      "Siedziby zakonu żebraczego"
    ],
    "answer": 0,
    "explanation": "W okresie słabej władzy królewskiej zamki możnowładców stały się lokalnymi ośrodkami rządów."
  },
  {
    "id": "R05_RYC_08",
    "section": "Rycerstwo i system lenny",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: hołd, inwestytura, lenno, pańszczyzna.",
    "options": null,
    "answer": "pańszczyzna",
    "explanation": "Pańszczyzna była przymusową pracą chłopów na rzecz pana wsi, a pozostałe pojęcia dotyczą systemu lennego."
  },
  {
    "id": "R05_RYC_09",
    "section": "Rycerstwo i system lenny",
    "type": "riddle",
    "prompt": "Wędrowny poeta i pieśniarz występujący na dworach, który popularyzował opowieści o miłości dworskiej i czynach rycerskich, to...",
    "options": null,
    "answer": "trubadur",
    "altAnswers": [
      "trubadur",
      "trubadurowie",
      "trubadura"
    ],
    "explanation": "Trubadurzy występowali na dworach i utrwalali wzory kultury rycerskiej."
  },
  {
    "id": "R05_RYC_10",
    "section": "Rycerstwo i system lenny",
    "type": "multi_select",
    "prompt": "Zaznacz elementy zamku, które służyły przede wszystkim obronie.",
    "options": [
      "mury obronne",
      "fosa",
      "most zwodzony",
      "umocniona brama wjazdowa",
      "budynki gospodarcze",
      "dziedziniec"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "/img/r05_zamek_rycerski.jpg",
    "explanation": "Obronie zamku służyły zwłaszcza mury, fosa, podnoszony most i umocniona brama."
  },
  {
    "id": "R05_WIE_01",
    "section": "Średniowieczna wieś i stany",
    "type": "single_choice",
    "prompt": "Gdzie w pierwszych wiekach średniowiecza żyła prawie cała ludność Europy Zachodniej?",
    "options": [
      "Na wsi",
      "W wielkich miastach",
      "W klasztorach",
      "Na dworach królewskich",
      "W portach morskich",
      "W zamkach krzyżowców"
    ],
    "answer": 0,
    "image": "/img/r05_gospodarstwo_chlopskie.jpg",
    "explanation": "Po upadku miast u schyłku starożytności większość mieszkańców Europy Zachodniej żyła na wsi."
  },
  {
    "id": "R05_WIE_02",
    "section": "Średniowieczna wieś i stany",
    "type": "true_false",
    "prompt": "Większość średniowiecznych chłopów była niezależnymi ludźmi i posiadała na własność uprawianą ziemię.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik podkreśla, że większość chłopów była poddanymi właścicieli majątków ziemskich i nie posiadała ziemi na własność."
  },
  {
    "id": "R05_WIE_03",
    "section": "Średniowieczna wieś i stany",
    "type": "fill_in",
    "prompt": "Za prawo do uprawiania roli chłopi płacili panu __________, a przymusową pracę na jego polach nazywano __________.",
    "options": null,
    "answer": [
      "czynsz",
      "pańszczyzną"
    ],
    "altAnswers": [
      [
        "czynsz",
        "czynszu"
      ],
      [
        "pańszczyzną",
        "pańszczyzna",
        "panszczyzna",
        "panszczyzna"
      ]
    ],
    "explanation": "Czynsz był świadczeniem za użytkowanie ziemi, a pańszczyzna oznaczała przymusową pracę na rzecz pana wsi."
  },
  {
    "id": "R05_WIE_04",
    "section": "Średniowieczna wieś i stany",
    "type": "multi_select",
    "prompt": "Zaznacz obowiązki i ograniczenia średniowiecznego chłopa wobec pana wsi lub Kościoła.",
    "options": [
      "płacenie czynszu",
      "odrabianie pańszczyzny",
      "płacenie dziesięciny",
      "podleganie sądowi pana",
      "dowodzenie wasalami seniora",
      "zasiadanie w radzie miejskiej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Chłopi płacili czynsz i dziesięcinę, odrabiali pańszczyznę oraz podlegali władzy sądowniczej pana."
  },
  {
    "id": "R05_WIE_05",
    "section": "Średniowieczna wieś i stany",
    "type": "match",
    "prompt": "Połącz członków chłopskiej rodziny z typowymi zajęciami opisanymi w podręczniku.",
    "options": null,
    "left": [
      "mężczyźni",
      "kobiety",
      "starsze dzieci",
      "cała rodzina"
    ],
    "right": [
      "uprawa ziemi, wyrąb lasu i wytwarzanie narzędzi",
      "opieka nad najmłodszymi, gotowanie i wyrób ubrań",
      "pomoc dorosłym i pasienie zwierząt",
      "udział w pracach gospodarskich"
    ],
    "answer": {
      "mężczyźni": "uprawa ziemi, wyrąb lasu i wytwarzanie narzędzi",
      "kobiety": "opieka nad najmłodszymi, gotowanie i wyrób ubrań",
      "starsze dzieci": "pomoc dorosłym i pasienie zwierząt",
      "cała rodzina": "udział w pracach gospodarskich"
    },
    "image": "/img/r05_gospodarstwo_chlopskie.jpg",
    "explanation": "Prace gospodarskie angażowały całą rodzinę, ale podręcznik wskazuje różne typowe zadania mężczyzn, kobiet i starszych dzieci."
  },
  {
    "id": "R05_WIE_06",
    "section": "Średniowieczna wieś i stany",
    "type": "single_choice",
    "prompt": "Które narzędzie upowszechnione w XI-XII wieku orało ziemię głębiej niż radło i pomagało zwiększać plony?",
    "options": [
      "pług",
      "sierp",
      "krosno",
      "kołowrót",
      "miecz",
      "pastorał"
    ],
    "answer": 0,
    "explanation": "Pług głębiej spulchniał i użyźniał glebę, dzięki czemu ziemia dawała większe plony."
  },
  {
    "id": "R05_WIE_07",
    "section": "Średniowieczna wieś i stany",
    "type": "scenario",
    "prompt": "Osadnicy przybywają do nowej wsi założonej po wyrębie lasu. Chcą pewności, że pan nie zmieni im samowolnie opłat i że będą mogli dziedziczyć użytkowaną ziemię. Jakie warunki najlepiej odpowiadają temu opisowi?",
    "options": [
      "dziedziczne prawo do ziemi i stały czynsz",
      "obowiązek zostania rycerzem",
      "zakaz samorządu wiejskiego",
      "praca wyłącznie w skryptorium",
      "udział w radzie miejskiej",
      "wyprawa krzyżowa"
    ],
    "answer": 0,
    "explanation": "Nowi osadnicy otrzymywali m.in. dziedziczne prawo do uprawianej ziemi, stały czynsz i pewne prawa samorządowe."
  },
  {
    "id": "R05_WIE_08",
    "section": "Średniowieczna wieś i stany",
    "type": "riddle",
    "prompt": "Danina polegająca na przekazywaniu jednej dziesiątej plonów na rzecz Kościoła to...",
    "options": null,
    "answer": "dziesięcina",
    "altAnswers": [
      "dziesięcina",
      "dziesiecina",
      "dziesięciny",
      "dziesieciny"
    ],
    "explanation": "Dziesięcina była świadczeniem oddawanym Kościołowi, niezależnym od czynszu płaconego panu wsi."
  },
  {
    "id": "R05_WIE_09",
    "section": "Średniowieczna wieś i stany",
    "type": "sort",
    "prompt": "Przyporządkuj stany średniowiecznego społeczeństwa do funkcji, które im przypisywano.",
    "options": null,
    "items": [
      "modlitwa",
      "służba wojskowa",
      "praca na roli",
      "handel i rzemiosło"
    ],
    "categories": [
      "duchowieństwo",
      "rycerstwo",
      "chłopi",
      "mieszczanie"
    ],
    "answer": {
      "duchowieństwo": [
        "modlitwa"
      ],
      "rycerstwo": [
        "służba wojskowa"
      ],
      "chłopi": [
        "praca na roli"
      ],
      "mieszczanie": [
        "handel i rzemiosło"
      ]
    },
    "explanation": "Duchownym przypisywano modlitwę, rycerzom walkę, chłopom pracę na roli, a wraz z rozwojem miast wyodrębniano także mieszczaństwo."
  },
  {
    "id": "R05_WIE_10",
    "section": "Średniowieczna wieś i stany",
    "type": "true_false",
    "prompt": "Ława wiejska była złożonym z chłopów sądem, który rozstrzygał sąsiedzkie konflikty i karał za niektóre przestępstwa.",
    "options": null,
    "answer": true,
    "explanation": "Ława wiejska była najważniejszym organem samorządu wiejskiego."
  },
  {
    "id": "R05_MIA_01",
    "section": "Średniowieczne miasto",
    "type": "single_choice",
    "prompt": "Kiedy na zachodzie Europy zaczęły odradzać się miasta po upadku świata starożytnego?",
    "options": [
      "w XI wieku",
      "w V wieku",
      "w VII wieku",
      "w XIII wieku",
      "w XV wieku",
      "dopiero po upadku Akki"
    ],
    "answer": 0,
    "explanation": "Podręcznik wskazuje, że miasta na zachodzie Europy zaczęły odradzać się dopiero w XI wieku."
  },
  {
    "id": "R05_MIA_02",
    "section": "Średniowieczne miasto",
    "type": "match",
    "prompt": "Połącz element samorządu lub przestrzeni miejskiej z jego funkcją.",
    "options": null,
    "left": [
      "ława miejska",
      "rada miejska",
      "ratusz",
      "rynek"
    ],
    "right": [
      "sądziła przestępców i rozstrzygała spory",
      "uchwalała prawa, pobierała podatki i zarządzała miastem",
      "siedziba władz miejskich",
      "główny plac handlowy w centrum miasta"
    ],
    "answer": {
      "ława miejska": "sądziła przestępców i rozstrzygała spory",
      "rada miejska": "uchwalała prawa, pobierała podatki i zarządzała miastem",
      "ratusz": "siedziba władz miejskich",
      "rynek": "główny plac handlowy w centrum miasta"
    },
    "explanation": "Typowy samorząd miejski składał się z ławy i rady, a jego władze urzędowały w ratuszu przy rynku."
  },
  {
    "id": "R05_MIA_03",
    "section": "Średniowieczne miasto",
    "type": "multi_select",
    "prompt": "Zaznacz charakterystyczne elementy przestrzeni średniowiecznego miasta.",
    "options": [
      "mury obronne",
      "bramy i baszty",
      "rynek",
      "ratusz",
      "gęsta zabudowa",
      "pola trójpolówki poza każdym domem"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "/img/r05_plan_miasta_sredniowiecznego.jpg",
    "explanation": "Średniowieczne miasta otaczały mury, miały bramy, baszty, gęstą zabudowę oraz rynek z ratuszem."
  },
  {
    "id": "R05_MIA_04",
    "section": "Średniowieczne miasto",
    "type": "true_false",
    "prompt": "Mieszczanie, w przeciwieństwie do chłopów, byli ludźmi wolnymi.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wyraźnie przeciwstawia wolnych mieszczan poddanym chłopom."
  },
  {
    "id": "R05_MIA_05",
    "section": "Średniowieczne miasto",
    "type": "fill_in",
    "prompt": "Najbogatszych mieszkańców miasta nazywano __________, najliczniejszą grupę obywateli tworzyło __________, a najbiedniejsi należeli do __________.",
    "options": null,
    "answer": [
      "patrycjuszami",
      "pospólstwo",
      "plebsu"
    ],
    "altAnswers": [
      [
        "patrycjuszami",
        "patrycjat",
        "patrycjusze"
      ],
      [
        "pospólstwo",
        "pospolstwo",
        "pospólstwem"
      ],
      [
        "plebsu",
        "plebs",
        "plebsem"
      ]
    ],
    "explanation": "Społeczeństwo dużego miasta dzieliło się na patrycjuszy, pospólstwo i plebs."
  },
  {
    "id": "R05_MIA_06",
    "section": "Średniowieczne miasto",
    "type": "riddle",
    "prompt": "Zrzeszenie rzemieślników jednego zawodu, np. piekarzy lub szewców, to...",
    "options": null,
    "answer": "cech",
    "altAnswers": [
      "cech",
      "cechu",
      "cechy"
    ],
    "explanation": "Każdy rzemieślnik musiał należeć do cechu, który regulował produkcję i dbał o jakość wyrobów."
  },
  {
    "id": "R05_MIA_07",
    "section": "Średniowieczne miasto",
    "type": "sequence",
    "prompt": "Ułóż typową drogę nauki rzemiosła w średniowiecznym mieście.",
    "options": null,
    "items": [
      "zdanie egzaminu i zostanie czeladnikiem",
      "praca jako uczeń u mistrza",
      "posiadanie własnego warsztatu",
      "przyjęcie do cechu jako mistrz"
    ],
    "answer": [
      "praca jako uczeń u mistrza",
      "zdanie egzaminu i zostanie czeladnikiem",
      "posiadanie własnego warsztatu",
      "przyjęcie do cechu jako mistrz"
    ],
    "image": "/img/r05_warsztat_rzemieslniczy.jpg",
    "explanation": "Naukę zaczynano jako uczeń, potem zostawano czeladnikiem, a nieliczni po zdobyciu warsztatu i zdaniu egzaminu zostawali mistrzami."
  },
  {
    "id": "R05_MIA_08",
    "section": "Średniowieczne miasto",
    "type": "single_choice",
    "prompt": "Jak nazywały się zrzeszenia średniowiecznych kupców podobne do cechów rzemieślniczych?",
    "options": [
      "gildie",
      "lenna",
      "opactwa",
      "ławy wiejskie",
      "zakony rycerskie",
      "skryptoria"
    ],
    "answer": 0,
    "explanation": "Kupcy łączyli się w gildie, które pełniły wobec nich rolę podobną do cechów rzemieślniczych."
  },
  {
    "id": "R05_MIA_09",
    "section": "Średniowieczne miasto",
    "type": "scenario",
    "prompt": "Mieszkaniec miasta nie ma praw miejskich, wynajmuje izbę i najmuje się do pracy w cudzych warsztatach. Do której grupy społecznej najpewniej należy?",
    "options": [
      "plebs",
      "patrycjusze",
      "rada miejska",
      "możnowładcy",
      "rycerstwo",
      "duchowieństwo"
    ],
    "answer": 0,
    "explanation": "Plebs obejmował najbiedniejszych mieszkańców miasta, często pozbawionych praw miejskich i pracujących u innych."
  },
  {
    "id": "R05_MIA_10",
    "section": "Średniowieczne miasto",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: cech, mistrz, czeladnik, wasal.",
    "options": null,
    "answer": "wasal",
    "explanation": "Cech, mistrz i czeladnik dotyczą miejskiego rzemiosła, a wasal należy do systemu lennego."
  },
  {
    "id": "R05_KOS_01",
    "section": "Kościół, zakony i kultura",
    "type": "single_choice",
    "prompt": "Kto założył na początku VI wieku wspólnotę zakonną na Monte Cassino i ułożył jej regułę?",
    "options": [
      "św. Benedykt",
      "św. Franciszek",
      "św. Dominik",
      "Grzegorz VII",
      "Urban II",
      "Otton I"
    ],
    "answer": 0,
    "explanation": "Święty Benedykt założył wspólnotę na Monte Cassino, a jego regułę przyjęli benedyktyni."
  },
  {
    "id": "R05_KOS_02",
    "section": "Kościół, zakony i kultura",
    "type": "true_false",
    "prompt": "Po upadku cywilizacji rzymskiej duchowni na zachodzie Europy należeli do nielicznych ludzi wykształconych, umieli czytać i pisać oraz znali łacinę.",
    "options": null,
    "answer": true,
    "explanation": "Kościół był wtedy najważniejszą instytucją troszczącą się o edukację, szkoły i księgozbiory."
  },
  {
    "id": "R05_KOS_03",
    "section": "Kościół, zakony i kultura",
    "type": "fill_in",
    "prompt": "Benedyktyńską zasadę życia zakonnego streszczały słowa: „__________ się i __________”.",
    "options": null,
    "answer": [
      "Módl",
      "pracuj"
    ],
    "altAnswers": [
      [
        "Módl",
        "módl",
        "modl"
      ],
      [
        "pracuj"
      ]
    ],
    "explanation": "Dzień mnicha dzielono na modlitwę, pracę i odpoczynek, przy czym pracą była także działalność umysłowa."
  },
  {
    "id": "R05_KOS_04",
    "section": "Kościół, zakony i kultura",
    "type": "match",
    "prompt": "Połącz zakon lub grupę zakonną z charakterystyczną informacją z rozdziału.",
    "options": null,
    "left": [
      "benedyktyni",
      "cystersi",
      "franciszkanie",
      "dominikanie"
    ],
    "right": [
      "najstarszy zakon zachodni oparty na regule św. Benedykta",
      "zakon oparty na zaostrzonej regule benedyktyńskiej i znany z gospodarowania",
      "zakon żebraczy podkreślający ubóstwo i pokorę",
      "zakon żebraczy słynący z kazań"
    ],
    "answer": {
      "benedyktyni": "najstarszy zakon zachodni oparty na regule św. Benedykta",
      "cystersi": "zakon oparty na zaostrzonej regule benedyktyńskiej i znany z gospodarowania",
      "franciszkanie": "zakon żebraczy podkreślający ubóstwo i pokorę",
      "dominikanie": "zakon żebraczy słynący z kazań"
    },
    "explanation": "Zakony różniły się sposobem działania: od pracy klasztornej i gospodarczej po kaznodziejstwo w miastach."
  },
  {
    "id": "R05_KOS_05",
    "section": "Kościół, zakony i kultura",
    "type": "multi_select",
    "prompt": "Zaznacz dziedziny wykładane na średniowiecznych uniwersytetach według podręcznika.",
    "options": [
      "teologia",
      "filozofia",
      "prawo",
      "medycyna",
      "mechanika samochodowa",
      "informatyka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na średniowiecznych uniwersytetach wykładano teologię, filozofię, prawo i medycynę."
  },
  {
    "id": "R05_KOS_06",
    "section": "Kościół, zakony i kultura",
    "type": "riddle",
    "prompt": "Klasztorne pomieszczenie, w którym mnisi ręcznie przepisywali księgi, to...",
    "options": null,
    "answer": "skryptorium",
    "altAnswers": [
      "skryptorium",
      "scriptorium"
    ],
    "image": "/img/r05_skryptorium.jpg",
    "explanation": "W skryptorium przepisywano księgi, a takie zajęcie było długotrwałe i żmudne."
  },
  {
    "id": "R05_KOS_07",
    "section": "Kościół, zakony i kultura",
    "type": "single_choice",
    "prompt": "Jaki materiał był podstawowym materiałem do pisania ksiąg w średniowieczu?",
    "options": [
      "pergamin",
      "papier gazetowy",
      "tabliczki gliniane",
      "papirus z Nilu",
      "miedź",
      "płótno żaglowe"
    ],
    "answer": 0,
    "image": "/img/r05_skryptorium.jpg",
    "explanation": "Podstawowym materiałem do pisania był pergamin sporządzany ze skór zwierzęcych."
  },
  {
    "id": "R05_KOS_08",
    "section": "Kościół, zakony i kultura",
    "type": "sort",
    "prompt": "Przyporządkuj cechy architektury do stylu romańskiego albo gotyckiego.",
    "options": null,
    "items": [
      "grube kamienne mury",
      "małe wąskie okna",
      "łuk pełny",
      "cieńsze i wyższe mury",
      "wielkie okna z witrażami",
      "łuk ostry"
    ],
    "categories": [
      "styl romański",
      "styl gotycki"
    ],
    "answer": {
      "styl romański": [
        "grube kamienne mury",
        "małe wąskie okna",
        "łuk pełny"
      ],
      "styl gotycki": [
        "cieńsze i wyższe mury",
        "wielkie okna z witrażami",
        "łuk ostry"
      ]
    },
    "image": "/img/r05_style_romanski_gotycki.jpg",
    "explanation": "Styl romański kojarzy się z masywnością i małymi oknami, a gotycki z wysokością, ostrołukami i witrażami."
  },
  {
    "id": "R05_KOS_09",
    "section": "Kościół, zakony i kultura",
    "type": "scenario",
    "prompt": "Widzisz wysoką świątynię o cieńszych murach, ogromnych oknach wypełnionych witrażami i portalach zamkniętych łukiem ostrym. Jaki styl opisano?",
    "options": [
      "gotycki",
      "romański",
      "karoliński",
      "bizantyjski",
      "renesansowy",
      "barokowy"
    ],
    "answer": 0,
    "image": "/img/r05_style_romanski_gotycki.jpg",
    "explanation": "Opis wskazuje na styl gotycki, który umożliwił wznoszenie wyższych budowli z dużymi oknami."
  },
  {
    "id": "R05_KOS_10",
    "section": "Kościół, zakony i kultura",
    "type": "true_false",
    "prompt": "Rzeźby, płaskorzeźby i malowidła w kościołach pomagały niepiśmiennym wiernym poznawać zasady chrześcijaństwa.",
    "options": null,
    "answer": true,
    "explanation": "Sztuka kościelna przedstawiała sceny religijne i postacie świętych, dzięki czemu pełniła funkcję pouczającą."
  },
  {
    "id": "R05_SPO_01",
    "section": "Spór cesarstwa z papiestwem",
    "type": "single_choice",
    "prompt": "Który władca w 962 roku zajął Rzym, odnowił Cesarstwo Rzymskie i uzależnił od siebie papieża?",
    "options": [
      "Otton I",
      "Henryk IV",
      "Grzegorz VII",
      "Urban II",
      "Saladyn",
      "św. Benedykt"
    ],
    "answer": 0,
    "explanation": "Otton I odnowił Cesarstwo Rzymskie na Zachodzie i przez długi czas cesarze wpływali na obsadę papiestwa."
  },
  {
    "id": "R05_SPO_02",
    "section": "Spór cesarstwa z papiestwem",
    "type": "true_false",
    "prompt": "We wczesnym średniowieczu o tym, kto zostanie biskupem Rzymu, często decydowały możne rody Italii.",
    "options": null,
    "answer": true,
    "explanation": "Rywalizacja możnych rodów Italii o wybór papieża osłabiała powagę urzędu papieskiego."
  },
  {
    "id": "R05_SPO_03",
    "section": "Spór cesarstwa z papiestwem",
    "type": "multi_select",
    "prompt": "Zaznacz postulaty ruchu reformy Kościoła powstałego w klasztorach benedyktyńskich.",
    "options": [
      "niezależność biskupów i opatów od władzy świeckiej",
      "podleganie duchownych papieżowi",
      "zakaz kupowania godności kościelnych",
      "przestrzeganie celibatu",
      "przyjmowanie godności kościelnych z rąk każdego możnego",
      "zniesienie urzędu papieża"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Reformatorzy chcieli uniezależnić Kościół od świeckich władców, zwalczyć kupowanie urzędów i wymagać celibatu."
  },
  {
    "id": "R05_SPO_04",
    "section": "Spór cesarstwa z papiestwem",
    "type": "fill_in",
    "prompt": "W XI wieku ostry konflikt wybuchł między papieżem __________ VII a władcą niemieckim __________ IV.",
    "options": null,
    "answer": [
      "Grzegorzem",
      "Henrykiem"
    ],
    "altAnswers": [
      [
        "Grzegorzem",
        "Grzegorz",
        "Grzegorza"
      ],
      [
        "Henrykiem",
        "Henryk",
        "Henryka"
      ]
    ],
    "image": "/img/r05_kanossa.jpg",
    "explanation": "Grzegorz VII domagał się reformy Kościoła, a Henryk IV i związani z nim biskupi sprzeciwili się jego żądaniom."
  },
  {
    "id": "R05_SPO_05",
    "section": "Spór cesarstwa z papiestwem",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia sporu cesarstwa z papiestwem w porządku chronologicznym.",
    "options": null,
    "items": [
      "konkordat w Wormacji",
      "ukorzenie się Henryka IV w Kanossie",
      "odnowienie cesarstwa przez Ottona I",
      "rzucenie klątwy na Henryka IV"
    ],
    "answer": [
      "odnowienie cesarstwa przez Ottona I",
      "rzucenie klątwy na Henryka IV",
      "ukorzenie się Henryka IV w Kanossie",
      "konkordat w Wormacji"
    ],
    "explanation": "Najpierw Otton I odnowił cesarstwo w 962 roku, potem Grzegorz VII obłożył Henryka IV klątwą, nastąpiła Kanossa w 1077 roku, a spór uregulowano w Wormacji w 1122 roku."
  },
  {
    "id": "R05_SPO_06",
    "section": "Spór cesarstwa z papiestwem",
    "type": "riddle",
    "prompt": "Kara kościelna, która wykluczała władcę ze wspólnoty Kościoła i pozwalała poddanym odmówić mu posłuszeństwa, to...",
    "options": null,
    "answer": "klątwa kościelna",
    "altAnswers": [
      "klątwa kościelna",
      "klątwa",
      "ekskomunika",
      "klatwa koscielna"
    ],
    "image": "/img/r05_kanossa.jpg",
    "explanation": "Po klątwie rzuconej przez Grzegorza VII poddani Henryka IV mieli odmówić mu posłuszeństwa."
  },
  {
    "id": "R05_SPO_07",
    "section": "Spór cesarstwa z papiestwem",
    "type": "match",
    "prompt": "Połącz pojęcia związane ze sporem cesarstwa z papiestwem z objaśnieniami.",
    "options": null,
    "left": [
      "świecki",
      "celibat",
      "kardynał",
      "konkordat"
    ],
    "right": [
      "niebędący osobą duchowną",
      "niezawieranie małżeństw przez duchownych",
      "najwyższy po papieżu dostojnik Kościoła",
      "porozumienie między Kościołem katolickim a państwem"
    ],
    "answer": {
      "świecki": "niebędący osobą duchowną",
      "celibat": "niezawieranie małżeństw przez duchownych",
      "kardynał": "najwyższy po papieżu dostojnik Kościoła",
      "konkordat": "porozumienie między Kościołem katolickim a państwem"
    },
    "explanation": "Te pojęcia pomagają zrozumieć program reformy Kościoła i treść konkordatu wormackiego."
  },
  {
    "id": "R05_SPO_08",
    "section": "Spór cesarstwa z papiestwem",
    "type": "scenario",
    "prompt": "Władca mianuje biskupa i nadaje mu dobra ziemskie jako lenno. Reformatorzy Kościoła uważają, że duchowni nie powinni przyjmować takich godności z rąk świeckich. Czego dotyczy spór?",
    "options": [
      "inwestytury dostojników kościelnych",
      "zakładania cechów rzemieślniczych",
      "osadnictwa wiejskiego",
      "wprowadzenia dziesięciny",
      "tworzenia zakonów rycerskich",
      "budowy stylu gotyckiego"
    ],
    "answer": 0,
    "explanation": "Spór dotyczył między innymi tego, kto ma prawo nadawać wysokie godności kościelne i związane z nimi lenna."
  },
  {
    "id": "R05_SPO_09",
    "section": "Spór cesarstwa z papiestwem",
    "type": "single_choice",
    "prompt": "Co ustalono w konkordacie wormackim z 1122 roku?",
    "options": [
      "Biskupi mieli być wybierani zgodnie z prawem kościelnym, a cesarz zachowywał prawo nadawania im lenn",
      "Papież miał być odtąd mianowany wyłącznie przez cesarza",
      "Biskupi mieli zrezygnować z wszelkich majątków",
      "Cechy miejskie miały bronić murów",
      "Krzyżacy mieli objąć Rzym",
      "Zniesiono wszystkie zakony"
    ],
    "answer": 0,
    "explanation": "Konkordat był kompromisem: wybór biskupów miał przebiegać według prawa kościelnego, ale cesarz nadal nadawał im majątki ziemskie jako lenna."
  },
  {
    "id": "R05_SPO_10",
    "section": "Spór cesarstwa z papiestwem",
    "type": "true_false",
    "prompt": "Konkordat w Wormacji całkowicie zakończył rywalizację między papiestwem a cesarstwem w kolejnych wiekach.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik podkreśla, że konkordat nie zakończył całej rywalizacji; spory trwały także później."
  },
  {
    "id": "R05_WYP_01",
    "section": "Wyprawy krzyżowe",
    "type": "single_choice",
    "prompt": "Jak chrześcijanie nazywali Palestynę, czyli miejsce związane z życiem Jezusa?",
    "options": [
      "Ziemia Święta",
      "Państwo Kościelne",
      "Cesarstwo Rzymskie",
      "Królestwo Italii",
      "Monte Cassino",
      "Wormacja"
    ],
    "answer": 0,
    "explanation": "Palestynę nazywano Ziemią Świętą, ponieważ znajdowały się tam miejsca związane z życiem Jezusa."
  },
  {
    "id": "R05_WYP_02",
    "section": "Wyprawy krzyżowe",
    "type": "true_false",
    "prompt": "Arabscy zdobywcy Palestyny zwykle prześladowali chrześcijan i utrudniali im dostęp do Ziemi Świętej.",
    "options": null,
    "answer": false,
    "explanation": "Podręcznik stwierdza, że Arabowie zwykle nie prześladowali chrześcijan i nie utrudniali im dostępu do Palestyny."
  },
  {
    "id": "R05_WYP_03",
    "section": "Wyprawy krzyżowe",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny i motywy udziału w pierwszych wyprawach krzyżowych opisane w podręczniku.",
    "options": [
      "prześladowanie chrześcijan przez Turków seldżuckich",
      "prośba Bizancjum o zbrojną pomoc",
      "wezwanie papieża Urbana II",
      "pobożność i pragnienie odpuszczenia kar za grzechy",
      "dążenie do zdobycia bogactwa i władzy",
      "chęć wprowadzenia samorządu miejskiego w Europie"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do krucjat prowadziły zarówno motywy religijne i wezwanie papieskie, jak i interesy polityczne oraz materialne."
  },
  {
    "id": "R05_WYP_04",
    "section": "Wyprawy krzyżowe",
    "type": "fill_in",
    "prompt": "Pierwsza wyprawa krzyżowa wyruszyła w roku __________, a po zdobyciu Jerozolimy w roku __________ krzyżowcy utworzyli Królestwo Jerozolimskie.",
    "options": null,
    "answer": [
      "1096",
      "1099"
    ],
    "altAnswers": [
      [
        "1096",
        "1096 r.",
        "1096 roku"
      ],
      [
        "1099",
        "1099 r.",
        "1099 roku"
      ]
    ],
    "image": "/img/r05_mapa_krucjat.jpg",
    "explanation": "Pierwsza krucjata rozpoczęła się w 1096 roku, a Jerozolima została zdobyta przez krzyżowców w 1099 roku."
  },
  {
    "id": "R05_WYP_05",
    "section": "Wyprawy krzyżowe",
    "type": "riddle",
    "prompt": "Inna nazwa wyprawy krzyżowej to...",
    "options": null,
    "answer": "krucjata",
    "altAnswers": [
      "krucjata",
      "krucjaty"
    ],
    "explanation": "Wyprawę nazywano krzyżową, ponieważ uczestnicy przyszywali do szat znak krzyża; używano też nazwy krucjata."
  },
  {
    "id": "R05_WYP_06",
    "section": "Wyprawy krzyżowe",
    "type": "match",
    "prompt": "Połącz zakon rycerski lub grupę z informacją z rozdziału.",
    "options": null,
    "left": [
      "templariusze",
      "joannici",
      "Krzyżacy",
      "zakony rycerskie"
    ],
    "right": [
      "jeden z trzech najważniejszych zakonów rycerskich w Ziemi Świętej",
      "zakon przedstawiany także jako opiekujący się pielgrzymami",
      "jeden z zakonów, które po klęsce państw krzyżowców działały dalej w Europie",
      "łączyły życie według reguły z obowiązkiem walki"
    ],
    "answer": {
      "templariusze": "jeden z trzech najważniejszych zakonów rycerskich w Ziemi Świętej",
      "joannici": "zakon przedstawiany także jako opiekujący się pielgrzymami",
      "Krzyżacy": "jeden z zakonów, które po klęsce państw krzyżowców działały dalej w Europie",
      "zakony rycerskie": "łączyły życie według reguły z obowiązkiem walki"
    },
    "image": "/img/r05_zakony_rycerskie.jpg",
    "explanation": "Zakony rycerskie łączyły śluby i wspólne życie zakonne z walką z muzułmanami oraz ochroną pielgrzymów."
  },
  {
    "id": "R05_WYP_07",
    "section": "Wyprawy krzyżowe",
    "type": "scenario",
    "prompt": "Rycerz z zachodniej Europy przyszywa do szaty znak krzyża i rusza do Palestyny, aby walczyć z muzułmanami oraz odbyć pielgrzymkę. Jak można go nazwać?",
    "options": [
      "krzyżowiec",
      "wasal miejski",
      "czeladnik",
      "opat",
      "patrycjusz",
      "ławniczy"
    ],
    "answer": 0,
    "explanation": "Uczestników wypraw, którzy nosili znak krzyża, nazywano krzyżowcami."
  },
  {
    "id": "R05_WYP_08",
    "section": "Wyprawy krzyżowe",
    "type": "single_choice",
    "prompt": "Który władca muzułmański zjednoczył Turków i Arabów, rozgromił krzyżowców i w 1187 roku zdobył Jerozolimę?",
    "options": [
      "Saladyn",
      "Urban II",
      "Henryk IV",
      "Otton I",
      "św. Dominik",
      "Roland"
    ],
    "answer": 0,
    "explanation": "W XII wieku sułtan Saladyn zjednoczył siły muzułmanów i zdobył Jerozolimę w 1187 roku."
  },
  {
    "id": "R05_WYP_09",
    "section": "Wyprawy krzyżowe",
    "type": "true_false",
    "prompt": "Czwarta wyprawa krzyżowa zamiast do Palestyny skierowała się przeciw chrześcijańskiemu Bizancjum i doprowadziła do zdobycia Konstantynopola.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik nazywa czwartą krucjatę zaprzeczeniem idei krucjat, ponieważ krzyżowcy złupili Konstantynopol."
  },
  {
    "id": "R05_WYP_10",
    "section": "Wyprawy krzyżowe",
    "type": "multi_select",
    "prompt": "Zaznacz skutki krucjat opisane w rozdziale.",
    "options": [
      "utrwalenie wrogości między chrześcijanami i muzułmanami",
      "nawiązanie ściślejszych relacji handlowych przez kupców włoskich",
      "utrwalenie wzoru średniowiecznego rycerza w kulturze europejskiej",
      "trwałe utrzymanie całej Palestyny przez krzyżowców",
      "pogłębienie kontaktów między obiema religiami",
      "zniknięcie zakonów rycerskich"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Krucjaty utrwaliły wrogość religijną, sprzyjały kontaktom handlowym kupców włoskich i wzmocniły wzór rycerza, ale nie zapewniły trwałej kontroli nad Palestyną."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W systemie lennym władca był uważany za najwyższego __________, natomiast __________, choć utrzymywali możnych i rycerstwo, pozostawali poza tym systemem.",
    "options": null,
    "answer": [
      "seniora",
      "chłopi"
    ],
    "altAnswers": [
      [
        "seniora",
        "senior"
      ],
      [
        "chłopi",
        "chlopy",
        "chłopstwo",
        "chlopi"
      ]
    ],
    "explanation": "Władca stał na szczycie zależności lennych, ale chłopi nie byli uczestnikami systemu lennego."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz zadania rady miejskiej, a nie ławy miejskiej.",
    "options": [
      "uchwalanie nowych praw",
      "nakładanie i pobieranie podatków",
      "decydowanie o wydatkach miasta",
      "reprezentowanie miasta na zewnątrz",
      "sądzenie przestępców",
      "rozstrzyganie sporów między mieszczanami"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rada zarządzała miastem, natomiast ława miejska była przede wszystkim sądem."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Padwa, Bolonia, Paryż, Monte Cassino.",
    "options": null,
    "answer": "Monte Cassino",
    "explanation": "Padwa, Bolonia i Paryż są wymienione jako ośrodki najstarszych uniwersytetów, a Monte Cassino wiąże się z początkiem benedyktynów."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po ugodzie w Wormacji duchowny otrzymuje godność kościelną zgodnie z prawem Kościoła, ale świecki monarcha nadal nadaje mu majątek ziemski jako lenno. Jak najtrafniej ocenić tę ugodę?",
    "options": [
      "Był to kompromis między papiestwem i cesarstwem",
      "Było to całkowite zwycięstwo cesarza",
      "Było to zniesienie wszystkich lenn kościelnych",
      "Było to powołanie zakonu rycerskiego",
      "Było to przywrócenie władzy rodów Italii nad papieżem",
      "Było to utworzenie rady miejskiej"
    ],
    "answer": 0,
    "explanation": "Konkordat wormacki rozdzielał wybór kościelny od nadania lenna, dlatego można go uznać za kompromis."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia w porządku chronologicznym.",
    "options": null,
    "items": [
      "konkordat w Wormacji",
      "początek pierwszej krucjaty",
      "upadek Akki",
      "ukorzenie się Henryka IV w Kanossie",
      "powstanie Królestwa Jerozolimskiego"
    ],
    "answer": [
      "ukorzenie się Henryka IV w Kanossie",
      "początek pierwszej krucjaty",
      "powstanie Królestwa Jerozolimskiego",
      "konkordat w Wormacji",
      "upadek Akki"
    ],
    "image": "/img/r05_mapa_krucjat.jpg",
    "explanation": "Kolejność dat to: 1077, 1096, 1099, 1122 i 1291."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Franciszkanie i dominikanie nazywani byli zakonami żebraczymi, ponieważ utrzymywali się z jałmużny, czyli dobrowolnych ofiar wiernych.",
    "options": null,
    "answer": true,
    "explanation": "Oba zakony powstały w XIII wieku w miastach i utrzymywały się dzięki ofiarom składanym przez wiernych."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj działania do typów zgromadzeń opisanych w rozdziale.",
    "options": null,
    "items": [
      "przepisywanie ksiąg",
      "zagospodarowywanie nieużytków",
      "głoszenie kazań prostym językiem",
      "utrzymywanie się z jałmużny",
      "walka z muzułmanami",
      "ochrona pielgrzymów"
    ],
    "categories": [
      "benedyktyni i cystersi",
      "zakony żebracze",
      "zakony rycerskie"
    ],
    "answer": {
      "benedyktyni i cystersi": [
        "przepisywanie ksiąg",
        "zagospodarowywanie nieużytków"
      ],
      "zakony żebracze": [
        "głoszenie kazań prostym językiem",
        "utrzymywanie się z jałmużny"
      ],
      "zakony rycerskie": [
        "walka z muzułmanami",
        "ochrona pielgrzymów"
      ]
    },
    "explanation": "Rozdział pokazuje różne formy życia zakonnego: klasztorne, żebracze i rycerskie."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz symbol lub znak z sytuacją, w której występuje w rozdziale.",
    "options": null,
    "left": [
      "włócznia lub chorągiew",
      "pastorał i pierścień",
      "berło",
      "krzyż na szacie"
    ],
    "right": [
      "symbol inwestytury lennej",
      "symbol nadania godności kościelnej",
      "znak władzy nad majątkiem ziemskim",
      "znak uczestnika wyprawy krzyżowej"
    ],
    "answer": {
      "włócznia lub chorągiew": "symbol inwestytury lennej",
      "pastorał i pierścień": "symbol nadania godności kościelnej",
      "berło": "znak władzy nad majątkiem ziemskim",
      "krzyż na szacie": "znak uczestnika wyprawy krzyżowej"
    },
    "image": "/img/r05_ceremonia_holdu.jpg",
    "explanation": "W rozdziale symbole pomagają rozpoznać różne ceremonie i role: inwestyturę lenną, godność kościelną, świeckie lenno i krucjatę."
  }
];

const KID_PROMPTS = {
  "R05_RYC_01": "Co to było lenno?",
  "R05_WIE_03": "Jak nazywała się opłata chłopa i jego praca dla pana?",
  "R05_MIA_06": "Jak nazywała się grupa rzemieślników jednego zawodu?",
  "R05_KOS_06": "Gdzie mnisi przepisywali księgi?",
  "R05_SPO_09": "Co ustalono w Wormacji?",
  "R05_WYP_05": "Jak inaczej nazywa się wyprawa krzyżowa?"
};

const chapter = {
  "id": "r05",
  "number": 5,
  "title": "Społeczeństwo, władza i kultura średniowiecznej Europy",
  "icon": "🏰",
  "sectionOrder": [
    "Rycerstwo i system lenny",
    "Średniowieczna wieś i stany",
    "Średniowieczne miasto",
    "Kościół, zakony i kultura",
    "Spór cesarstwa z papiestwem",
    "Wyprawy krzyżowe",
    "Super trudne"
  ],
  "sectionIcons": {
    "Rycerstwo i system lenny": "🛡️",
    "Średniowieczna wieś i stany": "🌾",
    "Średniowieczne miasto": "🏘️",
    "Kościół, zakony i kultura": "⛪",
    "Spór cesarstwa z papiestwem": "👑",
    "Wyprawy krzyżowe": "✝️",
    "Super trudne": "🔥"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
