// Skróty sekcji:
//   SLA = Wyżyna Śląska
//   LUB = Wyżyna Lubelska
//   JUR = Wyżyna Krakowsko-Częstochowska
//   TAT = Tatry i Podhale
//   OCE = Ocena krajobrazu
//   MIE = Powtórka mieszana
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_SLA_01",
    "section": "Wyżyna Śląska",
    "type": "single_choice",
    "prompt": "Która kraina geograficzna jest najdalej na zachód wysunięta w pasie polskich wyżyn?",
    "options": [
      "Wyżyna Lubelska",
      "Wyżyna Śląska",
      "Wyżyna Małopolska",
      "Wyżyna Krakowsko-Częstochowska",
      "Tatry",
      "Podhale"
    ],
    "answer": 1,
    "explanation": "Wyżyna Śląska leży w zachodniej części pasa wyżyn, między doliną Odry a Wyżyną Krakowsko-Częstochowską."
  },
  {
    "id": "R03_SLA_02",
    "section": "Wyżyna Śląska",
    "type": "fill_in",
    "prompt": "Węgiel kamienny powstał około __________ milionów lat temu ze szczątków obumarłych __________.",
    "options": null,
    "answer": [
      "300",
      "roślin"
    ],
    "altAnswers": [
      [
        "300",
        "300."
      ],
      [
        "roślin",
        "roslin",
        "rośliny"
      ]
    ],
    "explanation": "Podręcznik wyjaśnia, że węgiel kamienny jest skałą osadową powstałą około 300 milionów lat temu ze szczątków roślin."
  },
  {
    "id": "R03_SLA_03",
    "section": "Wyżyna Śląska",
    "type": "multi_select",
    "prompt": "Zaznacz gałęzie przemysłu ciężkiego, które rozwinęły się na Wyżynie Śląskiej dzięki dostępności węgla.",
    "options": [
      "górniczy",
      "hutniczy",
      "energetyczny",
      "chemiczny",
      "rybacki",
      "uzdrowiskowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Na Wyżynie Śląskiej rozwinął się przede wszystkim przemysł górniczy, hutniczy, energetyczny, maszynowy i chemiczny."
  },
  {
    "id": "R03_SLA_04",
    "section": "Wyżyna Śląska",
    "type": "true_false",
    "prompt": "Zanim na Wyżynie Śląskiej rozpoczęto intensywne wydobycie węgla, duże obszary tej krainy porastały lasy.",
    "options": null,
    "answer": true,
    "explanation": "Naturalny krajobraz Wyżyny Śląskiej był dawniej leśny, a później został silnie przekształcony przez działalność człowieka."
  },
  {
    "id": "R03_SLA_05",
    "section": "Wyżyna Śląska",
    "type": "riddle",
    "prompt": "Jak nazywa się wzniesienie usypane z odpadów górniczych i przemysłowych?",
    "options": null,
    "answer": "hałda",
    "altAnswers": [
      "hałda",
      "halda",
      "hałdy",
      "haldy"
    ],
    "image": "/img/r03_wieza_kopalniana_halda.jpg",
    "explanation": "Hałdy są jedną z najbardziej charakterystycznych antropogenicznych form terenu w krajobrazie Wyżyny Śląskiej."
  },
  {
    "id": "R03_SLA_06",
    "section": "Wyżyna Śląska",
    "type": "single_choice",
    "prompt": "Jak nazywa się dawne robotnicze osiedle w Katowicach, zbudowane dla górników pracujących w pobliskiej kopalni?",
    "options": [
      "Nałęczów",
      "Nikiszowiec",
      "Kazimierz Dolny",
      "Podhale",
      "Olsztyn",
      "Rabsztyn"
    ],
    "answer": 1,
    "explanation": "Nikiszowiec jest zabytkową częścią Katowic, znaną z familoków, czyli wielorodzinnych budynków z czerwonej cegły."
  },
  {
    "id": "R03_SLA_07",
    "section": "Wyżyna Śląska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: kopalnie, huty, zakłady energetyczne, pola lessowe",
    "options": null,
    "answer": "pola lessowe",
    "explanation": "Pola lessowe kojarzą się z krajobrazem rolniczym Wyżyny Lubelskiej, a pozostałe elementy są typowe dla krajobrazu miejsko-przemysłowego."
  },
  {
    "id": "R03_SLA_08",
    "section": "Wyżyna Śląska",
    "type": "match",
    "prompt": "Połącz gałąź przemysłu z jej opisem.",
    "options": null,
    "left": [
      "przemysł górniczy",
      "przemysł hutniczy",
      "przemysł energetyczny",
      "przemysł maszynowy"
    ],
    "right": [
      "wydobycie surowców mineralnych",
      "wytapianie metali",
      "wytwarzanie energii elektrycznej",
      "produkcja maszyn"
    ],
    "answer": {
      "przemysł górniczy": "wydobycie surowców mineralnych",
      "przemysł hutniczy": "wytapianie metali",
      "przemysł energetyczny": "wytwarzanie energii elektrycznej",
      "przemysł maszynowy": "produkcja maszyn"
    },
    "explanation": "Przemysł ciężki na Wyżynie Śląskiej obejmuje różne dziedziny związane z wydobyciem i przetwarzaniem zasobów."
  },
  {
    "id": "R03_SLA_09",
    "section": "Wyżyna Śląska",
    "type": "sequence",
    "prompt": "Ułóż etapy przemian krajobrazu Wyżyny Śląskiej od najdawniejszego do współczesnego.",
    "options": null,
    "items": [
      "rozwój przemysłu i miast",
      "obszary leśne",
      "nowoczesna aglomeracja",
      "pierwsze kopalnie"
    ],
    "answer": [
      "obszary leśne",
      "pierwsze kopalnie",
      "rozwój przemysłu i miast",
      "nowoczesna aglomeracja"
    ],
    "explanation": "Krajobraz Wyżyny Śląskiej przeszedł drogę od obszarów leśnych przez kopalnie i przemysł do współczesnej aglomeracji z usługami i rewitalizacją."
  },
  {
    "id": "R03_SLA_10",
    "section": "Wyżyna Śląska",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie „konurbacja górnośląska”?",
    "options": [
      "pojedynczą kopalnię węgla",
      "skupisko blisko położonych miast o podobnym znaczeniu",
      "pasmo górskie przy granicy Polski",
      "sieć wąwozów lessowych",
      "obszar chroniony w Tatrach",
      "pole uprawne na czarnoziemie"
    ],
    "answer": 1,
    "explanation": "Konurbacja to aglomeracja, w której występuje wiele miast o podobnej wielkości i liczbie ludności, położonych bardzo blisko siebie."
  },
  {
    "id": "R03_SLA_11",
    "section": "Wyżyna Śląska",
    "type": "multi_select",
    "prompt": "Zaznacz negatywne skutki rozwoju przemysłu na Wyżynie Śląskiej.",
    "options": [
      "hałdy",
      "szkody górnicze",
      "zanieczyszczenie powietrza i wody",
      "pękanie ścian budynków i nawierzchni dróg",
      "powstawanie stalaktytów",
      "rozwój pól lawendowych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Rozwój przemysłu doprowadził m.in. do powstawania hałd, szkód górniczych oraz zanieczyszczenia powietrza i wody."
  },
  {
    "id": "R03_SLA_12",
    "section": "Wyżyna Śląska",
    "type": "scenario",
    "prompt": "Na terenie dawnej kopalni powstaje muzeum, centrum kultury i miejsce spacerów. Jak nazywa się taka odnowa architektury wraz ze zmianą jej funkcji?",
    "options": [
      "krasowienie",
      "rewitalizacja",
      "wypas kulturowy",
      "halny",
      "skamienienie",
      "melioracja"
    ],
    "answer": 1,
    "image": "/img/r03_wieza_kopalniana_halda.jpg",
    "explanation": "Rewitalizacja polega na nadaniu dawnym obiektom lub obszarom nowej funkcji, np. kulturalnej, handlowej albo rekreacyjnej."
  },
  {
    "id": "R03_LUB_01",
    "section": "Wyżyna Lubelska",
    "type": "single_choice",
    "prompt": "Gdzie względem doliny Wisły rozciąga się Wyżyna Lubelska?",
    "options": [
      "na zachód od doliny Wisły",
      "na wschód od doliny Wisły",
      "na północ od Bałtyku",
      "w środku Tatr",
      "w dolinie Odry",
      "na południe od Sudetów"
    ],
    "answer": 1,
    "explanation": "Wyżyna Lubelska leży na wschód od doliny Wisły."
  },
  {
    "id": "R03_LUB_02",
    "section": "Wyżyna Lubelska",
    "type": "riddle",
    "prompt": "Miękka skała osadowa zbudowana z bardzo drobnych ziarenek pyłu o żółtej barwie to...",
    "options": null,
    "answer": "less",
    "altAnswers": [
      "less",
      "les"
    ],
    "image": "/img/r03_wawoz_lessowy_pola.jpg",
    "explanation": "Less pokrywa znaczną część Wyżyny Lubelskiej i łatwo ulega wymywaniu przez wody opadowe."
  },
  {
    "id": "R03_LUB_03",
    "section": "Wyżyna Lubelska",
    "type": "true_false",
    "prompt": "Less łatwo podlega wymywaniu przez wody opadowe, dlatego na Wyżynie Lubelskiej powstają wąwozy.",
    "options": null,
    "answer": true,
    "image": "/img/r03_wawoz_lessowy_pola.jpg",
    "explanation": "Wąwozy lessowe powstają, gdy bruzdy wymywane przez wodę stają się coraz głębsze i szersze."
  },
  {
    "id": "R03_LUB_04",
    "section": "Wyżyna Lubelska",
    "type": "fill_in",
    "prompt": "Wąwóz to wydłużona, __________ forma terenu o stromych zboczach i płaskim __________.",
    "options": null,
    "answer": [
      "wklęsła",
      "dnie"
    ],
    "altAnswers": [
      [
        "wklęsła",
        "wklesla"
      ],
      [
        "dnie",
        "dno"
      ]
    ],
    "explanation": "Podręcznik opisuje wąwóz jako wydłużoną, wklęsłą formę terenu o stromych zboczach i płaskim dnie."
  },
  {
    "id": "R03_LUB_05",
    "section": "Wyżyna Lubelska",
    "type": "single_choice",
    "prompt": "Jaka najżyźniejsza gleba w Polsce utworzyła się na lessach Wyżyny Lubelskiej?",
    "options": [
      "bielica",
      "czarnoziem",
      "rędzina górska",
      "gleba brunatna",
      "mada rzeczna",
      "torf"
    ],
    "answer": 1,
    "explanation": "Czarnoziem ma grubą warstwę próchnicy i bardzo duże wartości dla rolnictwa."
  },
  {
    "id": "R03_LUB_06",
    "section": "Wyżyna Lubelska",
    "type": "multi_select",
    "prompt": "Zaznacz cechy krajobrazu wiejskiego opisane w rozdziale.",
    "options": [
      "małe zaludnienie",
      "niska, jednorodzinna i rozproszona zabudowa",
      "przewaga pól uprawnych, łąk, pastwisk i sadów",
      "obecność zwierząt hodowlanych i zabudowań gospodarskich",
      "gęsta zabudowa familoków",
      "liczne wieże szybowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Krajobraz wiejski wyróżnia się m.in. małym zaludnieniem, rozproszoną zabudową oraz przewagą pól, łąk, pastwisk i sadów."
  },
  {
    "id": "R03_LUB_07",
    "section": "Wyżyna Lubelska",
    "type": "match",
    "prompt": "Połącz roślinę uprawną z produktem lub przeznaczeniem.",
    "options": null,
    "left": [
      "burak cukrowy",
      "tytoń",
      "rzepak",
      "pszenica",
      "len",
      "chmiel"
    ],
    "right": [
      "cukier",
      "papierosy",
      "olej i biopaliwo",
      "mąka",
      "włókno i olej",
      "składnik piwa"
    ],
    "answer": {
      "burak cukrowy": "cukier",
      "tytoń": "papierosy",
      "rzepak": "olej i biopaliwo",
      "pszenica": "mąka",
      "len": "włókno i olej",
      "chmiel": "składnik piwa"
    },
    "explanation": "Żyzne gleby Wyżyny Lubelskiej sprzyjają uprawie roślin przetwarzanych w pobliskich zakładach."
  },
  {
    "id": "R03_LUB_08",
    "section": "Wyżyna Lubelska",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do roślin uprawnych i zwierząt hodowlanych Wyżyny Lubelskiej.",
    "options": null,
    "items": [
      "pszenica",
      "tytoń",
      "chmiel",
      "bydło",
      "drób",
      "trzoda chlewna"
    ],
    "categories": [
      "rośliny uprawne",
      "zwierzęta hodowlane"
    ],
    "answer": {
      "rośliny uprawne": [
        "pszenica",
        "tytoń",
        "chmiel"
      ],
      "zwierzęta hodowlane": [
        "bydło",
        "drób",
        "trzoda chlewna"
      ]
    },
    "explanation": "Na Wyżynie Lubelskiej uprawia się m.in. pszenicę, tytoń i chmiel, a także prowadzi chów bydła, drobiu i trzody chlewnej."
  },
  {
    "id": "R03_LUB_09",
    "section": "Wyżyna Lubelska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Lublin, Zamość, Kazimierz Dolny, Katowice, Nałęczów",
    "options": null,
    "answer": "Katowice",
    "explanation": "Katowice leżą na Wyżynie Śląskiej, a pozostałe miejsca są wskazane jako warte odwiedzenia na Wyżynie Lubelskiej."
  },
  {
    "id": "R03_LUB_10",
    "section": "Wyżyna Lubelska",
    "type": "single_choice",
    "prompt": "Które miasto jest największym miastem Wyżyny Lubelskiej?",
    "options": [
      "Zamość",
      "Lublin",
      "Nałęczów",
      "Kazimierz Dolny",
      "Łęczna",
      "Chełm"
    ],
    "answer": 1,
    "explanation": "Największym miastem tej krainy geograficznej jest Lublin."
  },
  {
    "id": "R03_LUB_11",
    "section": "Wyżyna Lubelska",
    "type": "true_false",
    "prompt": "Na Wyżynie Lubelskiej, niedaleko Lublina, znajduje się kopalnia węgla kamiennego „Bogdanka”.",
    "options": null,
    "answer": true,
    "explanation": "Kopalnia „Bogdanka” leży koło Łęcznej i pokazuje, że Wyżyna Lubelska to nie tylko pola uprawne."
  },
  {
    "id": "R03_LUB_12",
    "section": "Wyżyna Lubelska",
    "type": "scenario",
    "prompt": "Rolnik gospodaruje na żyznych czarnoziemach Wyżyny Lubelskiej. Który zestaw roślin najlepiej pasuje do upraw o wysokich wymaganiach glebowych wymienionych w rozdziale?",
    "options": [
      "pszenica, buraki cukrowe, tytoń, chmiel",
      "ryż, kawa, bawełna, herbata",
      "limonki, banany, kakao, palma kokosowa",
      "sosna, świerk, kosodrzewina, limba",
      "mchy, porosty, trawy turniowe, krokusy",
      "granity, wapienie, lessy, węgle"
    ],
    "answer": 0,
    "explanation": "Na Wyżynie Lubelskiej uprawia się m.in. pszenicę, buraki cukrowe, tytoń i chmiel."
  },
  {
    "id": "R03_JUR_01",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "single_choice",
    "prompt": "Między którymi miastami rozciąga się wąski obszar Wyżyny Krakowsko-Częstochowskiej?",
    "options": [
      "Katowicami i Bytomiem",
      "Częstochową i Krakowem",
      "Lublinem i Zamościem",
      "Zakopanem i Nowym Targiem",
      "Nałęczowem i Łęczną",
      "Wrocławiem i Kłodzkiem"
    ],
    "answer": 1,
    "explanation": "Wyżyna Krakowsko-Częstochowska jest wąskim obszarem między Częstochową na północy a Krakowem na południu."
  },
  {
    "id": "R03_JUR_02",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "fill_in",
    "prompt": "Ponad __________ milionów lat temu, w okresie jury, na obszarze dzisiejszej Jury Krakowsko-Częstochowskiej znajdowało się płytkie __________.",
    "options": null,
    "answer": [
      "150",
      "morze"
    ],
    "altAnswers": [
      [
        "150",
        "150."
      ],
      [
        "morze",
        "morzu"
      ]
    ],
    "explanation": "Skały wapienne Wyżyny Krakowsko-Częstochowskiej powstały z muszli i szkieletów organizmów żyjących w płytkim morzu."
  },
  {
    "id": "R03_JUR_03",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "riddle",
    "prompt": "Proces rozpuszczania skał wapiennych przez wodę zawierającą dwutlenek węgla to...",
    "options": null,
    "answer": "krasowienie",
    "altAnswers": [
      "krasowienie",
      "proces krasowienia"
    ],
    "explanation": "Krasowienie prowadzi do powstawania form terenu typowych dla krajobrazu krasowego."
  },
  {
    "id": "R03_JUR_04",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "multi_select",
    "prompt": "Zaznacz formy krasu powierzchniowego.",
    "options": [
      "ostańce krasowe",
      "żłobki krasowe",
      "ponory",
      "wywierzyska",
      "stalaktyty",
      "stalagmity"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do form krasu powierzchniowego należą m.in. ostańce, żłobki krasowe, ponory i wywierzyska."
  },
  {
    "id": "R03_JUR_05",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "match",
    "prompt": "Połącz formę krasową z opisem.",
    "options": null,
    "left": [
      "ponor",
      "wywierzysko",
      "stalaktyt",
      "stalagmit",
      "stalagnat"
    ],
    "right": [
      "otwór, którym woda wpływa pod powierzchnię",
      "miejsce wypływu wód podziemnych na powierzchnię",
      "sopel zwisający ze stropu jaskini",
      "forma narastająca od dna jaskini",
      "kolumna z połączenia stalaktytu i stalagmitu"
    ],
    "answer": {
      "ponor": "otwór, którym woda wpływa pod powierzchnię",
      "wywierzysko": "miejsce wypływu wód podziemnych na powierzchnię",
      "stalaktyt": "sopel zwisający ze stropu jaskini",
      "stalagmit": "forma narastająca od dna jaskini",
      "stalagnat": "kolumna z połączenia stalaktytu i stalagmitu"
    },
    "explanation": "Formy krasowe powstają, gdy woda rozpuszcza skały wapienne na powierzchni lub pod ziemią."
  },
  {
    "id": "R03_JUR_06",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "single_choice",
    "prompt": "Która forma naciekowa zwisa ze stropu jaskini?",
    "options": [
      "stalaktyt",
      "stalagmit",
      "ponor",
      "wywierzysko",
      "żleb",
      "grań"
    ],
    "answer": 0,
    "image": "/img/r03_jaskinia_formy_naciekowe.jpg",
    "explanation": "Stalaktyt jest naciekiem zwisającym ze stropu, a stalagmit rośnie od dna jaskini."
  },
  {
    "id": "R03_JUR_07",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "true_false",
    "prompt": "Ojcowski Park Narodowy powstał w południowej części Wyżyny Krakowsko-Częstochowskiej, a jego symbolem jest nietoperz.",
    "options": null,
    "answer": true,
    "explanation": "W jaskiniach krasowych Ojcowskiego Parku Narodowego żyje wiele gatunków nietoperzy."
  },
  {
    "id": "R03_JUR_08",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Maczuga Herkulesa, Brama Krakowska, Dolina Prądnika, Nikiszowiec",
    "options": null,
    "answer": "Nikiszowiec",
    "explanation": "Nikiszowiec to osiedle robotnicze w Katowicach, a pozostałe obiekty wiążą się z Ojcowskim Parkiem Narodowym i krajobrazem krasowym."
  },
  {
    "id": "R03_JUR_09",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "scenario",
    "prompt": "Wędrujesz szlakiem, który łączy średniowieczne zamki i warownie zbudowane na trudno dostępnych wapiennych wzniesieniach. Jaki to szlak?",
    "options": [
      "Szlak Orlich Gniazd",
      "Orla Perć",
      "Szlak Zabytków Techniki",
      "Dolina Kościeliska",
      "Dolina Prądnika",
      "Szlak Kopalni Bogdanka"
    ],
    "answer": 0,
    "explanation": "Szlak Orlich Gniazd łączy większość zachowanych zamków i warowni Jury Krakowsko-Częstochowskiej."
  },
  {
    "id": "R03_JUR_10",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania krajobrazu krasowego w logicznej kolejności.",
    "options": null,
    "items": [
      "powstają jaskinie i ostańce",
      "woda z dwutlenkiem węgla tworzy roztwór",
      "woda rozpuszcza skały wapienne",
      "w jaskiniach odkłada się kalcyt w formach naciekowych"
    ],
    "answer": [
      "woda z dwutlenkiem węgla tworzy roztwór",
      "woda rozpuszcza skały wapienne",
      "powstają jaskinie i ostańce",
      "w jaskiniach odkłada się kalcyt w formach naciekowych"
    ],
    "explanation": "Krajobraz krasowy powstaje wtedy, gdy woda z dwutlenkiem węgla rozpuszcza wapienie, tworząc formy na powierzchni i pod ziemią."
  },
  {
    "id": "R03_JUR_11",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "multi_select",
    "prompt": "Zaznacz miejsca, które podręcznik wskazuje jako możliwe do zobaczenia w Ojcowskim Parku Narodowym.",
    "options": [
      "Brama Krakowska",
      "Dolina Prądnika",
      "Jaskinia Łokietka",
      "Maczuga Herkulesa",
      "Morskie Oko",
      "Nikiszowiec"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W Ojcowskim Parku Narodowym można zobaczyć m.in. Bramę Krakowską, Dolinę Prądnika, Jaskinię Łokietka, Maczugę Herkulesa i zamek w Pieskowej Skale."
  },
  {
    "id": "R03_JUR_12",
    "section": "Wyżyna Krakowsko-Częstochowska",
    "type": "fill_in",
    "prompt": "Wapienie mają zwykle białą, żółtą lub szarawą barwę, a w ich wnętrzu można spotkać __________, czyli szczątki organizmów sprzed milionów __________.",
    "options": null,
    "answer": [
      "skamieniałości",
      "lat"
    ],
    "altAnswers": [
      [
        "skamieniałości",
        "skamienialosci"
      ],
      [
        "lat"
      ]
    ],
    "explanation": "Skamieniałości są pozostałościami organizmów zachowanymi w skałach, np. w wapieniach."
  },
  {
    "id": "R03_TAT_01",
    "section": "Tatry i Podhale",
    "type": "single_choice",
    "prompt": "Na jakiej wysokości położone są w Polsce obszary górskie według rozdziału?",
    "options": [
      "poniżej 100 m n.p.m.",
      "100-300 m n.p.m.",
      "300-500 m n.p.m.",
      "powyżej 500 m n.p.m.",
      "dokładnie 300 m n.p.m.",
      "tylko powyżej 2000 m n.p.m."
    ],
    "answer": 3,
    "explanation": "W podręczniku podano, że góry to obszary położone powyżej 500 m n.p.m."
  },
  {
    "id": "R03_TAT_02",
    "section": "Tatry i Podhale",
    "type": "fill_in",
    "prompt": "Południowa granica Polski przebiega wzdłuż dwóch łańcuchów górskich: __________ i __________.",
    "options": null,
    "answer": [
      "Sudetów",
      "Karpat"
    ],
    "altAnswers": [
      [
        "Sudetów",
        "Sudety"
      ],
      [
        "Karpat",
        "Karpaty"
      ]
    ],
    "explanation": "Sudety leżą na południowym zachodzie Polski, a Karpaty na południu i południowym wschodzie."
  },
  {
    "id": "R03_TAT_03",
    "section": "Tatry i Podhale",
    "type": "true_false",
    "prompt": "Tatry są jedynymi górami w Polsce, w których występuje krajobraz wysokogórski o charakterze alpejskim.",
    "options": null,
    "answer": true,
    "image": "/img/r03_turnie_i_stawy_tatrzanskie.jpg",
    "explanation": "W Tatrach występują strome zbocza dolin, ostre granie i skaliste szczyty, dlatego mają charakter alpejski."
  },
  {
    "id": "R03_TAT_04",
    "section": "Tatry i Podhale",
    "type": "single_choice",
    "prompt": "Który szczyt jest najwyższy po polskiej stronie Tatr?",
    "options": [
      "Giewont",
      "Rysy",
      "Kasprowy Wierch",
      "Starorobociański Wierch",
      "Śnieżka",
      "Wielka Siklawa"
    ],
    "answer": 1,
    "explanation": "Najwyższym szczytem po polskiej stronie Tatr są Rysy, osiągające 2499 m n.p.m."
  },
  {
    "id": "R03_TAT_05",
    "section": "Tatry i Podhale",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do Tatr Zachodnich i Tatr Wysokich.",
    "options": null,
    "items": [
      "skały wapienne",
      "skały granitowe",
      "łagodniejsze szczyty",
      "ostre granie i turnie",
      "liczne jaskinie",
      "stawy polodowcowe"
    ],
    "categories": [
      "Tatry Zachodnie",
      "Tatry Wysokie"
    ],
    "answer": {
      "Tatry Zachodnie": [
        "skały wapienne",
        "łagodniejsze szczyty",
        "liczne jaskinie"
      ],
      "Tatry Wysokie": [
        "skały granitowe",
        "ostre granie i turnie",
        "stawy polodowcowe"
      ]
    },
    "explanation": "Tatry Zachodnie są głównie wapienne i niższe, natomiast Tatry Wysokie są głównie granitowe i mają ostrzejszą rzeźbę."
  },
  {
    "id": "R03_TAT_06",
    "section": "Tatry i Podhale",
    "type": "match",
    "prompt": "Połącz formę terenu wysokogórskiego z opisem.",
    "options": null,
    "left": [
      "grań",
      "przełęcz",
      "turnia",
      "kocioł lodowcowy",
      "stożek piargowy",
      "żleb"
    ],
    "right": [
      "wąski grzbiet górski",
      "obniżenie między szczytami",
      "ostry, skalisty szczyt",
      "zagłębienie często wypełnione wodą stawu",
      "odłamki skalne usypane poniżej wylotu żlebu",
      "pionowe wcięcie w stoku"
    ],
    "answer": {
      "grań": "wąski grzbiet górski",
      "przełęcz": "obniżenie między szczytami",
      "turnia": "ostry, skalisty szczyt",
      "kocioł lodowcowy": "zagłębienie często wypełnione wodą stawu",
      "stożek piargowy": "odłamki skalne usypane poniżej wylotu żlebu",
      "żleb": "pionowe wcięcie w stoku"
    },
    "image": "/img/r03_turnie_i_stawy_tatrzanskie.jpg",
    "explanation": "W krajobrazie wysokogórskim Tatr występują m.in. granie, przełęcze, turnie, kotły lodowcowe, stożki piargowe i żleby."
  },
  {
    "id": "R03_TAT_07",
    "section": "Tatry i Podhale",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe cechy pogody w górach opisane w podręczniku.",
    "options": [
      "temperatura spada wraz z wysokością",
      "opadów jest więcej wraz z wysokością",
      "mgły mogą ograniczać widoczność",
      "halny jest silnym i porywistym wiatrem",
      "pogoda jest zawsze stała i przewidywalna",
      "na szczytach latem zawsze jest bardzo gorąco"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W górach im wyżej, tym chłodniej i zwykle więcej opadów, a dodatkowym zagrożeniem mogą być mgły oraz wiatr halny."
  },
  {
    "id": "R03_TAT_08",
    "section": "Tatry i Podhale",
    "type": "sequence",
    "prompt": "Ułóż piętra roślinności w Tatrach od najniższego do najwyższego.",
    "options": null,
    "items": [
      "kosodrzewina",
      "pogórze",
      "turnie",
      "regiel górny",
      "hale",
      "regiel dolny"
    ],
    "answer": [
      "pogórze",
      "regiel dolny",
      "regiel górny",
      "kosodrzewina",
      "hale",
      "turnie"
    ],
    "image": "/img/r03_pietra_roslinnosci_tatr.jpg",
    "explanation": "Roślinność w Tatrach ma układ piętrowy: od pogórza przez regle i kosodrzewinę po hale i turnie."
  },
  {
    "id": "R03_TAT_09",
    "section": "Tatry i Podhale",
    "type": "single_choice",
    "prompt": "Jak nazywają się łąki wysokogórskie w Tatrach?",
    "options": [
      "pogórze",
      "regiel dolny",
      "hale",
      "turnie",
      "wąwozy",
      "familoki"
    ],
    "answer": 2,
    "image": "/img/r03_pietra_roslinnosci_tatr.jpg",
    "explanation": "Hale to piętro łąk wysokogórskich, na którym występują trawy i zioła."
  },
  {
    "id": "R03_TAT_10",
    "section": "Tatry i Podhale",
    "type": "true_false",
    "prompt": "W Tatrzańskim Parku Narodowym chroniona jest cała przyroda: ożywiona i nieożywiona.",
    "options": null,
    "answer": true,
    "explanation": "Na terenie Tatrzańskiego Parku Narodowego chroni się rośliny, zwierzęta oraz elementy przyrody nieożywionej."
  },
  {
    "id": "R03_TAT_11",
    "section": "Tatry i Podhale",
    "type": "multi_select",
    "prompt": "Zaznacz organizmy wymienione w rozdziale jako występujące w Tatrach.",
    "options": [
      "krokus",
      "goryczka krótkołodygowa",
      "kozica tatrzańska",
      "świstak tatrzański",
      "tytoń",
      "burak cukrowy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "W rozdziale pokazano m.in. krokusa, goryczkę, kozicę tatrzańską, niedźwiedzia brunatnego i świstaka tatrzańskiego."
  },
  {
    "id": "R03_TAT_12",
    "section": "Tatry i Podhale",
    "type": "riddle",
    "prompt": "Jak nazywa się znany regionalny ser wyrabiany głównie z owczego mleka na Podhalu?",
    "options": null,
    "answer": "oscypek",
    "altAnswers": [
      "oscypek",
      "oszczypek"
    ],
    "explanation": "Oscypek jest produktem regionalnym związanym z kulturą Podhala i tradycyjnym wypasem owiec."
  },
  {
    "id": "R03_TAT_13",
    "section": "Tatry i Podhale",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Morskie Oko, Dolina Pięciu Stawów Polskich, Rysy, Nałęczów",
    "options": null,
    "answer": "Nałęczów",
    "explanation": "Nałęczów to uzdrowisko na Wyżynie Lubelskiej, a pozostałe miejsca leżą w Tatrach."
  },
  {
    "id": "R03_TAT_14",
    "section": "Tatry i Podhale",
    "type": "scenario",
    "prompt": "Podczas wycieczki widzisz strome skaliste szczyty, ostre granie, granitowe skały i duże jeziora polodowcowe nazywane stawami. Którą część Tatr opisano?",
    "options": [
      "Tatry Wysokie",
      "Tatry Zachodnie",
      "Wyżyna Lubelska",
      "Wyżyna Śląska",
      "Podhale bez Tatr",
      "Ojcowski Park Narodowy"
    ],
    "answer": 0,
    "image": "/img/r03_turnie_i_stawy_tatrzanskie.jpg",
    "explanation": "Takie cechy są typowe dla Tatr Wysokich, które są wyższe i bardziej skaliste od Tatr Zachodnich."
  },
  {
    "id": "R03_OCE_01",
    "section": "Ocena krajobrazu",
    "type": "single_choice",
    "prompt": "Do czego jednostki samorządu terytorialnego wykorzystują ocenę krajobrazu?",
    "options": [
      "do tworzenia planów zagospodarowania przestrzennego",
      "do wyznaczania pięter roślinności w górach",
      "do wydobywania węgla kamiennego",
      "do krasowienia wapieni",
      "do produkcji oscypka",
      "do wyrobu cegieł z lessu"
    ],
    "answer": 0,
    "explanation": "Ocena krajobrazu pomaga gminom, powiatom i województwom podczas tworzenia planów zagospodarowania przestrzennego."
  },
  {
    "id": "R03_OCE_02",
    "section": "Ocena krajobrazu",
    "type": "true_false",
    "prompt": "Ocena krajobrazu pomaga lepiej planować działania, które mogą poprawić jakość życia i środowiska.",
    "options": null,
    "answer": true,
    "explanation": "Dzięki ocenie krajobrazu łatwiej dostrzec problemy i zaproponować korzystne zmiany w najbliższej okolicy."
  },
  {
    "id": "R03_OCE_03",
    "section": "Ocena krajobrazu",
    "type": "multi_select",
    "prompt": "Zaznacz elementy, które warto brać pod uwagę podczas oceny najbliższego krajobrazu.",
    "options": [
      "elementy przyrodnicze",
      "elementy architektoniczne",
      "wykorzystanie przestrzeni",
      "estetyka otoczenia",
      "elementy kulturowe",
      "ruch planet"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Podczas oceny krajobrazu zwraca się uwagę m.in. na czynniki przyrodnicze, architektoniczne, przestrzenne, estetyczne i kulturowe."
  },
  {
    "id": "R03_OCE_04",
    "section": "Ocena krajobrazu",
    "type": "sequence",
    "prompt": "Ułóż działania w przykładowym planie oceny krajobrazu wokół szkoły.",
    "options": null,
    "items": [
      "zaproponowanie rozwiązań",
      "określenie położenia szkoły",
      "lekcja terenowa i obserwacje",
      "wyznaczenie obszaru oraz trasy obserwacji",
      "zebranie i porównanie ocen grup"
    ],
    "answer": [
      "określenie położenia szkoły",
      "wyznaczenie obszaru oraz trasy obserwacji",
      "lekcja terenowa i obserwacje",
      "zebranie i porównanie ocen grup",
      "zaproponowanie rozwiązań"
    ],
    "image": "/img/r03_otoczenie_szkoly_ocena.jpg",
    "explanation": "Ocena najbliższego krajobrazu zaczyna się od określenia położenia i obszaru obserwacji, a kończy porównaniem ocen i zaproponowaniem zmian."
  },
  {
    "id": "R03_OCE_05",
    "section": "Ocena krajobrazu",
    "type": "scenario",
    "prompt": "Uczniowie zauważyli zaśmiecony teren przy szkole, zorganizowali sprzątanie i zaproponowali posadzenie drzew. Jaki jest główny cel takich działań?",
    "options": [
      "poprawa najbliższego krajobrazu",
      "powstanie wąwozu lessowego",
      "zwiększenie szkód górniczych",
      "utworzenie stożka piargowego",
      "wydobycie wapienia",
      "budowa Szlaku Orlich Gniazd"
    ],
    "answer": 0,
    "image": "/img/r03_otoczenie_szkoly_ocena.jpg",
    "explanation": "Takie działania służą poprawie estetyki i jakości najbliższego otoczenia."
  },
  {
    "id": "R03_OCE_06",
    "section": "Ocena krajobrazu",
    "type": "fill_in",
    "prompt": "Program finansowania lokalnych projektów, dzięki któremu mieszkańcy mogą wpływać na zmiany w okolicy, to __________ __________.",
    "options": null,
    "answer": [
      "budżet",
      "obywatelski"
    ],
    "altAnswers": [
      [
        "budżet",
        "budzet"
      ],
      [
        "obywatelski"
      ]
    ],
    "explanation": "Budżet obywatelski może pomóc w realizacji lokalnych pomysłów poprawiających jakość życia."
  },
  {
    "id": "R03_OCE_07",
    "section": "Ocena krajobrazu",
    "type": "single_choice",
    "prompt": "Które pytanie najlepiej dotyczy elementów architektonicznych podczas oceny krajobrazu?",
    "options": [
      "Czy w okolicy znajdują się zadbane budynki?",
      "Czy w jaskini rosną stalagmity?",
      "Czy less ma żółtą barwę?",
      "Czy Tatry są wyższe od Sudetów?",
      "Czy węgiel powstał ze szczątków roślin?",
      "Czy pszenica daje mąkę?"
    ],
    "answer": 0,
    "explanation": "Elementy architektoniczne dotyczą przede wszystkim budynków, ich wyglądu, stanu i funkcjonalności."
  },
  {
    "id": "R03_OCE_08",
    "section": "Ocena krajobrazu",
    "type": "match",
    "prompt": "Połącz element oceny krajobrazu z przykładowym pytaniem pomocniczym.",
    "options": null,
    "left": [
      "elementy przyrodnicze",
      "elementy architektoniczne",
      "wykorzystanie przestrzeni",
      "estetyka"
    ],
    "right": [
      "Czy jest dużo drzew, krzewów i zwierząt?",
      "Jak wyglądają budynki i czy są zadbane?",
      "Czy są ławki, place zabaw lub boiska?",
      "Czy otoczenie jest czyste i pozbawione chaosu?"
    ],
    "answer": {
      "elementy przyrodnicze": "Czy jest dużo drzew, krzewów i zwierząt?",
      "elementy architektoniczne": "Jak wyglądają budynki i czy są zadbane?",
      "wykorzystanie przestrzeni": "Czy są ławki, place zabaw lub boiska?",
      "estetyka": "Czy otoczenie jest czyste i pozbawione chaosu?"
    },
    "explanation": "Kwestionariusz oceny krajobrazu porządkuje obserwacje według elementów przyrodniczych, architektonicznych, przestrzennych i estetycznych."
  },
  {
    "id": "R03_OCE_09",
    "section": "Ocena krajobrazu",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: drzewa, krzewy, ptaki, chodniki",
    "options": null,
    "answer": "chodniki",
    "explanation": "Chodniki są elementem zagospodarowania przestrzeni przez człowieka, a drzewa, krzewy i ptaki to elementy przyrodnicze."
  },
  {
    "id": "R03_OCE_10",
    "section": "Ocena krajobrazu",
    "type": "riddle",
    "prompt": "Jak nazywa się metoda pracy z pytaniami: „Jaki jest stan obecny?”, „Jak powinno być?”, „Dlaczego nie jest tak, jak być powinno?” i „Wnioski”?",
    "options": null,
    "answer": "metaplan",
    "altAnswers": [
      "metaplan",
      "metoda metaplanu"
    ],
    "explanation": "Metaplan pomaga uporządkować dyskusję o problemie i możliwych rozwiązaniach."
  },
  {
    "id": "R03_MIE_01",
    "section": "Powtórka mieszana",
    "type": "match",
    "prompt": "Połącz typ krajobrazu z krainą, w której został omówiony.",
    "options": null,
    "left": [
      "krajobraz miejsko-przemysłowy",
      "krajobraz rolniczy",
      "krajobraz krasowy",
      "krajobraz wysokogórski"
    ],
    "right": [
      "Wyżyna Śląska",
      "Wyżyna Lubelska",
      "Wyżyna Krakowsko-Częstochowska",
      "Tatry"
    ],
    "answer": {
      "krajobraz miejsko-przemysłowy": "Wyżyna Śląska",
      "krajobraz rolniczy": "Wyżyna Lubelska",
      "krajobraz krasowy": "Wyżyna Krakowsko-Częstochowska",
      "krajobraz wysokogórski": "Tatry"
    },
    "explanation": "Rozdział pokazuje różne przykłady krajobrazów: miejsko-przemysłowy, rolniczy, krasowy i wysokogórski."
  },
  {
    "id": "R03_MIE_02",
    "section": "Powtórka mieszana",
    "type": "sort",
    "prompt": "Przyporządkuj skały lub surowce do krain, z którymi są najmocniej związane w rozdziale.",
    "options": null,
    "items": [
      "węgiel kamienny",
      "less",
      "wapień",
      "granit"
    ],
    "categories": [
      "Wyżyna Śląska",
      "Wyżyna Lubelska",
      "Wyżyna Krakowsko-Częstochowska",
      "Tatry Wysokie"
    ],
    "answer": {
      "Wyżyna Śląska": [
        "węgiel kamienny"
      ],
      "Wyżyna Lubelska": [
        "less"
      ],
      "Wyżyna Krakowsko-Częstochowska": [
        "wapień"
      ],
      "Tatry Wysokie": [
        "granit"
      ]
    },
    "explanation": "Węgiel kamienny jest kluczowy dla Wyżyny Śląskiej, less dla Wyżyny Lubelskiej, wapień dla Jury, a granit dla Tatr Wysokich."
  },
  {
    "id": "R03_MIE_03",
    "section": "Powtórka mieszana",
    "type": "odd_one_out",
    "prompt": "Wskaż, co nie pasuje do pozostałych: Ślązacy, górale podhalańscy, gwara śląska, gwara podhalańska, skamieniałości",
    "options": null,
    "answer": "skamieniałości",
    "explanation": "Skamieniałości dotyczą skał, a pozostałe elementy odnoszą się do mieszkańców regionów i ich kultury."
  },
  {
    "id": "R03_MIE_04",
    "section": "Powtórka mieszana",
    "type": "single_choice",
    "prompt": "Które działanie jest przykładem pozytywnej zmiany krajobrazu związanej z działalnością człowieka?",
    "options": [
      "rewitalizacja terenów poprzemysłowych",
      "zaśmiecanie gór",
      "zadeptywanie roślinności",
      "zanieczyszczanie wód przez przemysł",
      "powstawanie szkód górniczych",
      "wycinanie lasów pod uprawy"
    ],
    "answer": 0,
    "explanation": "Pozytywne zmiany obejmują m.in. rewitalizację terenów poprzemysłowych i tworzenie zadbanych przestrzeni publicznych."
  },
  {
    "id": "R03_MIE_05",
    "section": "Powtórka mieszana",
    "type": "sequence",
    "prompt": "Ułóż wyżyny w kolejności od najbardziej wysuniętej na zachód do najbardziej wysuniętej na wschód.",
    "options": null,
    "items": [
      "Wyżyna Lubelska",
      "Wyżyna Śląska",
      "Wyżyna Małopolska",
      "Wyżyna Krakowsko-Częstochowska"
    ],
    "answer": [
      "Wyżyna Śląska",
      "Wyżyna Krakowsko-Częstochowska",
      "Wyżyna Małopolska",
      "Wyżyna Lubelska"
    ],
    "explanation": "Pas wyżyn w Polsce obejmuje kolejno od zachodu m.in. Wyżynę Śląską, Krakowsko-Częstochowską, Małopolską i Lubelską."
  },
  {
    "id": "R03_MIE_06",
    "section": "Powtórka mieszana",
    "type": "multi_select",
    "prompt": "Zaznacz parki narodowe wymienione w rozdziale.",
    "options": [
      "Ojcowski Park Narodowy",
      "Tatrzański Park Narodowy",
      "Białowieski Park Narodowy",
      "Słowiński Park Narodowy",
      "Woliński Park Narodowy",
      "Kampinoski Park Narodowy"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "W rozdziale pojawiają się Ojcowski Park Narodowy i Tatrzański Park Narodowy."
  },
  {
    "id": "R03_MIE_07",
    "section": "Powtórka mieszana",
    "type": "fill_in",
    "prompt": "Krajobraz tworzą składniki __________ oraz składniki __________.",
    "options": null,
    "answer": [
      "przyrodnicze",
      "antropogeniczne"
    ],
    "altAnswers": [
      [
        "przyrodnicze",
        "przyrodniczy"
      ],
      [
        "antropogeniczne",
        "antropogeniczny",
        "stworzone przez człowieka"
      ]
    ],
    "explanation": "Przy ocenie krajobrazu należy brać pod uwagę zarówno elementy przyrodnicze, jak i antropogeniczne, czyli stworzone przez człowieka."
  },
  {
    "id": "R03_MIE_08",
    "section": "Powtórka mieszana",
    "type": "true_false",
    "prompt": "W Polsce wyżyny są zwykle położone na wysokości 300-500 m n.p.m., a góry powyżej 500 m n.p.m.",
    "options": null,
    "answer": true,
    "explanation": "Rozdział podaje taki podział wysokościowy wyżyn i gór."
  },
  {
    "id": "R03_MIE_09",
    "section": "Powtórka mieszana",
    "type": "scenario",
    "prompt": "Widzisz pofałdowany krajobraz z licznymi wąwozami, lessami, czarnoziemami i rozległymi polami uprawnymi. Którą krainę opisano?",
    "options": [
      "Wyżyna Lubelska",
      "Wyżyna Śląska",
      "Tatry Wysokie",
      "Podhale",
      "Ojcowski Park Narodowy",
      "Karkonosze"
    ],
    "answer": 0,
    "image": "/img/r03_wawoz_lessowy_pola.jpg",
    "explanation": "Wąwozy lessowe, czarnoziemy i rolnictwo są typowe dla Wyżyny Lubelskiej."
  },
  {
    "id": "R03_MIE_10",
    "section": "Powtórka mieszana",
    "type": "riddle",
    "prompt": "Odnowa architektury wraz ze zmianą jej funkcji, np. dawnej kopalni w muzeum, to...",
    "options": null,
    "answer": "rewitalizacja",
    "altAnswers": [
      "rewitalizacja",
      "rewitalizacją"
    ],
    "explanation": "Rewitalizacja jest częsta w miastach poprzemysłowych, gdzie dawne zakłady otrzymują nowe funkcje."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Którą kopalnię w Katowicach pokazano w rozdziale jako przykład kopalni węgla kamiennego?",
    "options": [
      "Kopalnia „Murcki”",
      "Kopalnia „Bogdanka”",
      "Kopalnia Guido",
      "Wielka Jaskinia Śnieżna",
      "Muzeum Wsi Lubelskiej",
      "Zamek w Bobolicach"
    ],
    "answer": 0,
    "explanation": "W części o Wyżynie Śląskiej podpisano zdjęcie Kopalni „Murcki” w Katowicach."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Barbórka przypada __________ grudnia, w dzień świętej __________, patronki górników.",
    "options": null,
    "answer": [
      "4",
      "Barbary"
    ],
    "altAnswers": [
      [
        "4",
        "4.",
        "czwartego"
      ],
      [
        "Barbary",
        "świętej Barbary",
        "swietej Barbary"
      ]
    ],
    "explanation": "Barbórka jest górniczym świętem obchodzonym 4 grudnia w dzień św. Barbary."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Granica między Tatrami Zachodnimi i Tatrami Wysokimi przebiega przez Przełęcz Liliowe niedaleko Kasprowego Wierchu.",
    "options": null,
    "answer": true,
    "explanation": "Podręcznik wskazuje Przełęcz Liliowe jako granicę między tymi częściami Tatr."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki jest najwyższy szczyt polskiej części Tatr Zachodnich według rozdziału?",
    "options": [
      "Starorobociański Wierch",
      "Rysy",
      "Giewont",
      "Kasprowy Wierch",
      "Śnieżka",
      "Maczuga Herkulesa"
    ],
    "answer": 0,
    "explanation": "Najwyższym szczytem polskiej części Tatr Zachodnich jest Starorobociański Wierch, mający 2176 m n.p.m."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz surowiec lub produkt węglowy z przykładem jego wykorzystania podanym w rozdziale.",
    "options": null,
    "left": [
      "węgiel kamienny",
      "koks",
      "smoła i gaz opałowy",
      "barwniki",
      "środki ochrony roślin i nawozy"
    ],
    "right": [
      "energia elektryczna i ciepło",
      "wytop stali lub paliwo przemysłowe",
      "paliwa i produkty opałowe",
      "barwienie tkanin",
      "zastosowania w rolnictwie"
    ],
    "answer": {
      "węgiel kamienny": "energia elektryczna i ciepło",
      "koks": "wytop stali lub paliwo przemysłowe",
      "smoła i gaz opałowy": "paliwa i produkty opałowe",
      "barwniki": "barwienie tkanin",
      "środki ochrony roślin i nawozy": "zastosowania w rolnictwie"
    },
    "explanation": "Z węgla kamiennego i jego przetwarzania uzyskuje się m.in. energię, koks, smołę, gaz opałowy, paliwa, barwniki i nawozy."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz dziedziny, których obiekty tworzą Szlak Zabytków Techniki województwa śląskiego według rozdziału.",
    "options": [
      "górnictwo",
      "hutnictwo",
      "energetyka",
      "kolejnictwo",
      "włókiennictwo",
      "sadownictwo lessowe"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Szlak Zabytków Techniki obejmuje obiekty związane m.in. z tradycją górniczą, hutniczą, energetyczną, kolejnictwem, włókiennictwem i wodociągami."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jaki minerał z węglanu wapnia tworzy formy naciekowe w jaskiniach?",
    "options": null,
    "answer": "kalcyt",
    "altAnswers": [
      "kalcyt",
      "calcite"
    ],
    "image": "/img/r03_jaskinia_formy_naciekowe.jpg",
    "explanation": "Kalcyt powstaje z osadzającego się węglanu wapnia i buduje stalaktyty, stalagmity oraz stalagnaty."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania form naciekowych w jaskini.",
    "options": null,
    "items": [
      "węglan wapnia osadza się jako kalcyt",
      "woda skapuje ze stropu jaskini",
      "woda rozpuszcza węglan wapnia w skałach",
      "powstają stalaktyty, stalagmity i stalagnaty"
    ],
    "answer": [
      "woda rozpuszcza węglan wapnia w skałach",
      "woda skapuje ze stropu jaskini",
      "węglan wapnia osadza się jako kalcyt",
      "powstają stalaktyty, stalagmity i stalagnaty"
    ],
    "image": "/img/r03_jaskinia_formy_naciekowe.jpg",
    "explanation": "Formy naciekowe powstają bardzo powoli, gdy woda z rozpuszczonym węglanem wapnia kapie i osadza kalcyt."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Krajobrazy wyżynne i górskie Polski",
  icon: "⛰️",
  sectionOrder: [
    "Wyżyna Śląska",
    "Wyżyna Lubelska",
    "Wyżyna Krakowsko-Częstochowska",
    "Tatry i Podhale",
    "Ocena krajobrazu",
    "Powtórka mieszana",
    "Super trudne"
  ],
  sectionIcons: {
    "Wyżyna Śląska": "🏭",
    "Wyżyna Lubelska": "🌾",
    "Wyżyna Krakowsko-Częstochowska": "🪨",
    "Tatry i Podhale": "⛰️",
    "Ocena krajobrazu": "🔎",
    "Powtórka mieszana": "🧭",
    "Super trudne": "🔥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
