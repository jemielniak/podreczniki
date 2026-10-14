// Skróty sekcji (do identyfikatorów ćwiczeń):
//   AZJ = Azja – kontrasty i cywilizacje
//   CHJ = Chiny i Japonia
//   IND = Indie i Bliski Wschód
//   AFR = Afryka – środowisko i gospodarka
//   SAH = Sahara, Sahel i problemy Afryki
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R06_AZJ_01",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "single_choice",
    "prompt": "Które jezioro w Azji jest najgłębsze na świecie?",
    "options": [
      "Jezioro Wiktorii",
      "Morze Kaspijskie",
      "Morze Martwe",
      "Bajkał",
      "Jezioro Aralskie",
      "Jezioro Nasera"
    ],
    "answer": 3,
    "image": "r06_jezioro_bajkal.jpg",
    "explanation": "Bajkał ma 1642 m głębokości i jest najgłębszym jeziorem świata."
  },
  {
    "id": "R06_AZJ_02",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "multi_select",
    "prompt": "Wskaż przykłady kontrastów przyrodniczych Azji.",
    "options": [
      "Brak aktywności wulkanicznej",
      "Występowanie klimatu równikowego i okołobiegunowego",
      "Najgłębsze jezioro świata",
      "Liczne obszary pustynne i wilgotne regiony",
      "Jednolity krajobraz roślinny"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "image": "r06_kontrasty_krajobrazu_azji.jpg",
    "explanation": "Azja obejmuje wszystkie strefy klimatyczne, rozległe pustynie i obszary wilgotne oraz jezioro Bajkał o rekordowej głębokości."
  },
  {
    "id": "R06_AZJ_03",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "true_false",
    "prompt": "Morze Kaspijskie jest jeziorem o największej powierzchni na świecie.",
    "options": null,
    "answer": true,
    "explanation": "Morze Kaspijskie zajmuje około 370 tys. km², choć jego powierzchnia ulega zmianom."
  },
  {
    "id": "R06_AZJ_04",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "fill_in",
    "prompt": "Najwyższy szczyt świata to __________, a najwyższa wyżyna świata to __________.",
    "options": null,
    "answer": [
      "Mount Everest",
      "Wyżyna Tybetańska"
    ],
    "altAnswers": [
      [
        "Mount Everest",
        "Everest",
        "Mount Everest (8848 m)"
      ],
      [
        "Wyżyna Tybetańska",
        "Wyżyna Tybetańska (Tybet)",
        "Tybet"
      ]
    ],
    "image": "r06_himalaje_i_wyzyna_tybeta.jpg",
    "explanation": "Mount Everest osiąga około 8848 m n.p.m., a Wyżyna Tybetańska jest najwyższą wyżyną świata."
  },
  {
    "id": "R06_AZJ_05",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "riddle",
    "prompt": "Jak nazywa się najgłębszy rów oceaniczny świata?",
    "options": null,
    "answer": "Rów Mariański",
    "altAnswers": [
      "Rów Mariański",
      "Rów Marianski"
    ],
    "explanation": "Rów Mariański znajduje się w strefie styku płyty pacyficznej i filipińskiej."
  },
  {
    "id": "R06_AZJ_06",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "odd_one_out",
    "prompt": "Który obiekt nie jest pustynią wymienioną w Azji: Gobi, Takla-Makan, Kara-Kum, Himalaje.",
    "options": null,
    "answer": "Himalaje",
    "explanation": "Himalaje są górami, a Gobi, Takla-Makan i Kara-Kum są pustyniami."
  },
  {
    "id": "R06_AZJ_07",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "match",
    "prompt": "Połącz starożytną cywilizację z jej dokonaniem lub miejscem rozwoju.",
    "options": null,
    "left": [
      "Sumerowie",
      "Cywilizacja doliny Indusu",
      "Cywilizacja chińska"
    ],
    "right": [
      "wynalezienie papieru",
      "pismo dotąd nierozszyfrowane",
      "dolina Tygrysu i Eufratu"
    ],
    "answer": {
      "Sumerowie": "dolina Tygrysu i Eufratu",
      "Cywilizacja doliny Indusu": "pismo dotąd nierozszyfrowane",
      "Cywilizacja chińska": "wynalezienie papieru"
    },
    "image": "r06_starozytna_mezopotamia.jpg",
    "explanation": "Sumerowie rozwijali się w Mezopotamii, pismo cywilizacji doliny Indusu pozostaje nierozszyfrowane, a wynalezienie papieru jest osiągnięciem cywilizacji chińskiej."
  },
  {
    "id": "R06_AZJ_08",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "sort",
    "prompt": "Przyporządkuj obiekty do właściwych typów geograficznych.",
    "options": null,
    "items": [
      "Kaukaz",
      "Jangcy",
      "Ganges",
      "Indus",
      "Morze Kaspijskie",
      "Bajkał",
      "Himalaje"
    ],
    "categories": [
      "rzeki",
      "jeziora",
      "pasma górskie"
    ],
    "answer": {
      "rzeki": [
        "Ganges",
        "Indus",
        "Jangcy"
      ],
      "jeziora": [
        "Bajkał",
        "Morze Kaspijskie"
      ],
      "pasma górskie": [
        "Himalaje",
        "Kaukaz"
      ]
    },
    "explanation": "Ganges, Indus i Jangcy to rzeki; Bajkał i Morze Kaspijskie są jeziorami, natomiast Himalaje i Kaukaz to pasma górskie."
  },
  {
    "id": "R06_AZJ_09",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "sequence",
    "prompt": "Uporządkuj etapy opisujące powstanie trzęsienia ziemi wskutek ruchu płyt.",
    "options": null,
    "items": [
      "Gwałtowne uwolnienie energii",
      "Rozchodzenie się fal sejsmicznych",
      "Ruch i wzajemne naciskanie płyt",
      "Narastanie naprężeń we wnętrzu Ziemi"
    ],
    "answer": [
      "Ruch i wzajemne naciskanie płyt",
      "Narastanie naprężeń we wnętrzu Ziemi",
      "Gwałtowne uwolnienie energii",
      "Rozchodzenie się fal sejsmicznych"
    ],
    "explanation": "Ruch płyt powoduje naprężenia, których uwolnienie wywołuje drgania rozchodzące się jako fale sejsmiczne."
  },
  {
    "id": "R06_AZJ_10",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "scenario",
    "prompt": "Podróżnik zwiedza starożytne osady nad Tygrysem i Eufratem. Zbiera informacje o kulturze, której jednym z osiągnięć był kodeks Hammurabiego. W jakim regionie się znajduje?",
    "options": [
      "Wyżyna Irańska",
      "Mezopotamia",
      "Wyżyna Tybetańska",
      "Nizina Chińska",
      "Półwysep Indochiński",
      "Dolina Indusu"
    ],
    "answer": 1,
    "image": "r06_starozytna_mezopotamia.jpg",
    "explanation": "Cywilizacje Mezopotamii rozwinęły się w dolinach Tygrysu i Eufratu; tam powstał m.in. kodeks Hammurabiego."
  },
  {
    "id": "R06_AZJ_11",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "single_choice",
    "prompt": "Które miasto było ważnym ośrodkiem na dawnym Jedwabnym Szlaku?",
    "options": [
      "Pekin",
      "Tokio",
      "Aleksandria",
      "Waranasi",
      "Nowe Delhi",
      "Samarkanda"
    ],
    "answer": 5,
    "explanation": "Samarkanda, dawniej Marakanda, rozwinęła się dzięki jedwabnemu szlakowi łączącemu Chiny z Europą i Bliskim Wschodem."
  },
  {
    "id": "R06_AZJ_12",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "true_false",
    "prompt": "Starożytne cywilizacje Azji rozwijały się najczęściej z dala od dużych rzek.",
    "options": null,
    "answer": false,
    "explanation": "Najstarsze cywilizacje azjatyckie powstawały głównie w dolinach wielkich rzek, które zapewniały wodę i możliwości transportu."
  },
  {
    "id": "R06_AZJ_13",
    "section": "Azja – kontrasty i cywilizacje",
    "type": "multi_select",
    "prompt": "Które działania pomagają ograniczać skutki trzęsień ziemi i wybuchów wulkanów?",
    "options": [
      "Zatrzymywanie ruchu płyt litosfery",
      "Monitorowanie aktywności wulkanicznej",
      "Stosowanie odporniejszych rozwiązań budowlanych",
      "Ewakuacja zagrożonej ludności",
      "Edukacja dotycząca zachowania w czasie zagrożeń"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "explanation": "Monitoring, ewakuacja, nowoczesne budownictwo i edukacja pomagają ograniczać skutki katastrof; nie można natomiast zatrzymać ruchów płyt tektonicznych."
  },
  {
    "id": "R06_CHJ_01",
    "section": "Chiny i Japonia",
    "type": "single_choice",
    "prompt": "W której części Chin skupia się ludność dzięki ciepłemu klimatowi monsunowemu i nizinom?",
    "options": [
      "W Himalajach",
      "Na Wyżynie Tybetańskiej",
      "Na pustyni Takla-Makan",
      "W górach Kunlun",
      "W zachodniej",
      "We wschodniej"
    ],
    "answer": 5,
    "image": "r06_krajobraz_wschodnich_chin.jpg",
    "explanation": "Gęste zaludnienie występuje we wschodnich Chinach, m.in. na Nizinie Chińskiej, dzięki korzystnemu klimatowi, glebom i dostępowi wody."
  },
  {
    "id": "R06_CHJ_02",
    "section": "Chiny i Japonia",
    "type": "multi_select",
    "prompt": "Które czynniki sprzyjają dużej gęstości zaludnienia na wschodzie Chin?",
    "options": [
      "Rozległe pustynie",
      "Nizinna rzeźba terenu",
      "Ciepły klimat monsunowy",
      "Wysokie i surowe góry",
      "Żyzne gleby lessowe",
      "Duża dostępność wody"
    ],
    "answer": [
      1,
      2,
      4,
      5
    ],
    "image": "r06_krajobraz_wschodnich_chin.jpg",
    "explanation": "Rozwojowi rolnictwa we wschodnich Chinach sprzyjają żyzne gleby lessowe, ciepły klimat, niziny i obfite opady."
  },
  {
    "id": "R06_CHJ_03",
    "section": "Chiny i Japonia",
    "type": "true_false",
    "prompt": "Zachodnie Chiny są słabo zaludnione m.in. z powodu wysokich gór i pustyń.",
    "options": null,
    "answer": true,
    "explanation": "Na zachodzie Chin znajdują się m.in. Tybet, pasma Himalajów i Kunlun oraz pustynia Takla-Makan."
  },
  {
    "id": "R06_CHJ_04",
    "section": "Chiny i Japonia",
    "type": "fill_in",
    "prompt": "Stolicą Chin jest __________, a stolicą Japonii jest __________.",
    "options": null,
    "answer": [
      "Pekin",
      "Tokio"
    ],
    "altAnswers": [
      [
        "Pekin",
        "Beijing",
        "Beijing/Pekin"
      ],
      [
        "Tokio",
        "Tokyo"
      ]
    ],
    "explanation": "Stolicą Chin jest Pekin (Beijing), a stolicą Japonii Tokio."
  },
  {
    "id": "R06_CHJ_05",
    "section": "Chiny i Japonia",
    "type": "riddle",
    "prompt": "Jak nazywa się przemieszczanie jednej płyty litosfery pod drugą, powodujące m.in. trzęsienia ziemi i wulkanizm?",
    "options": null,
    "answer": "subdukcja",
    "altAnswers": [
      "subdukcja",
      "subdukcji"
    ],
    "image": "r06_japonski_wulkan.jpg",
    "explanation": "Japonia znajduje się w strefie subdukcji na styku płyt litosfery."
  },
  {
    "id": "R06_CHJ_06",
    "section": "Chiny i Japonia",
    "type": "odd_one_out",
    "prompt": "Wskaż wyspę nienależącą do czterech głównych wysp Japonii: Honsiu, Kiusiu, Hokkaido, Borneo.",
    "options": null,
    "answer": "Borneo",
    "explanation": "Cztery największe wyspy Japonii to Hokkaido, Honsiu, Kiusiu i Sikoku; Borneo leży w Azji Południowo-Wschodniej."
  },
  {
    "id": "R06_CHJ_07",
    "section": "Chiny i Japonia",
    "type": "match",
    "prompt": "Połącz termin z jego opisem.",
    "options": null,
    "left": [
      "lawa",
      "lapille",
      "popiół wulkaniczny"
    ],
    "right": [
      "najdrobniejsze cząstki produktów erupcji",
      "drobne zastygłe fragmenty lawy",
      "płynne stopione skały na powierzchni"
    ],
    "answer": {
      "lawa": "płynne stopione skały na powierzchni",
      "lapille": "drobne zastygłe fragmenty lawy",
      "popiół wulkaniczny": "najdrobniejsze cząstki produktów erupcji"
    },
    "image": "r06_przekroj_wulkanu.jpg",
    "explanation": "Lawa to stopione skały wypływające na powierzchnię, lapille to drobne fragmenty lawy, a popiół to jej najdrobniejsze zastygłe cząstki."
  },
  {
    "id": "R06_CHJ_08",
    "section": "Chiny i Japonia",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do Chin lub Japonii.",
    "options": null,
    "items": [
      "polityka jednego dziecka",
      "cztery główne wyspy",
      "ważny producent węgla kamiennego",
      "Nizina Chińska",
      "niewielkie zasoby surowców mineralnych",
      "nowoczesny przemysł precyzyjny"
    ],
    "categories": [
      "Chiny",
      "Japonia"
    ],
    "answer": {
      "Chiny": [
        "Nizina Chińska",
        "polityka jednego dziecka",
        "ważny producent węgla kamiennego"
      ],
      "Japonia": [
        "cztery główne wyspy",
        "niewielkie zasoby surowców mineralnych",
        "nowoczesny przemysł precyzyjny"
      ]
    },
    "explanation": "Charakterystyczne dla Chin są gęsto zaludnione niziny, polityka demograficzna i wydobycie surowców, natomiast Japonię wyróżniają wyspiarskie położenie i zaawansowane technologie."
  },
  {
    "id": "R06_CHJ_09",
    "section": "Chiny i Japonia",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia w kolejności prowadzącej do erupcji wulkanu.",
    "options": null,
    "items": [
      "Wydostawanie się lawy i gazów przez krater",
      "Zastyganie części wyrzuconej lawy",
      "Wzrost ciśnienia magmy w głębi Ziemi",
      "Przemieszczanie magmy ku powierzchni kominem"
    ],
    "answer": [
      "Wzrost ciśnienia magmy w głębi Ziemi",
      "Przemieszczanie magmy ku powierzchni kominem",
      "Wydostawanie się lawy i gazów przez krater",
      "Zastyganie części wyrzuconej lawy"
    ],
    "explanation": "Erupcja następuje wskutek wysokiego ciśnienia magmy, która wydostaje się na powierzchnię i może tam zastygać."
  },
  {
    "id": "R06_CHJ_10",
    "section": "Chiny i Japonia",
    "type": "scenario",
    "prompt": "Japońska fabryka sprowadza surowce z zagranicy, wykorzystuje wykwalifikowanych inżynierów i wytwarza zaawansowaną elektronikę na eksport. Co najlepiej wyjaśnia ten model rozwoju?",
    "options": [
      "Przewaga przemysłu wydobywczego",
      "Inwestycje w naukę i nowoczesne technologie",
      "Powszechność wielkich nizin rolniczych",
      "Brak klęsk naturalnych",
      "Izolacja od rynku światowego",
      "Niewyczerpane krajowe zasoby ropy"
    ],
    "answer": 1,
    "explanation": "Przy ubogiej bazie surowcowej Japonia postawiła na edukację, przetwarzanie importowanych surowców i eksport nowoczesnych wyrobów."
  },
  {
    "id": "R06_CHJ_11",
    "section": "Chiny i Japonia",
    "type": "single_choice",
    "prompt": "W którym roku w Chinach zezwolono na posiadanie dwojga dzieci?",
    "options": [
      "1989",
      "2019",
      "2024",
      "2015",
      "1945",
      "2001"
    ],
    "answer": 3,
    "explanation": "W 2015 roku w Chinach zezwolono na posiadanie dwojga dzieci w odpowiedzi na problemy demograficzne."
  },
  {
    "id": "R06_CHJ_12",
    "section": "Chiny i Japonia",
    "type": "true_false",
    "prompt": "Ponad 90% trzęsień ziemi ma genezę tektoniczną.",
    "options": null,
    "answer": true,
    "explanation": "Trzęsienia tektoniczne są najczęstsze i stanowią ponad 90% wszystkich trzęsień ziemi."
  },
  {
    "id": "R06_CHJ_13",
    "section": "Chiny i Japonia",
    "type": "multi_select",
    "prompt": "Które z podanych trudności przyrodniczych występują w Japonii?",
    "options": [
      "Górzysta rzeźba terenu",
      "Tajfuny",
      "Rozległe obszary pustyń",
      "Trzęsienia ziemi i tsunami",
      "Małe zasoby surowców mineralnych",
      "Brak dostępu do morza"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Japonia jest wyspiarska, górzysta, narażona na zagrożenia sejsmiczne i tajfuny oraz uboga w surowce mineralne."
  },
  {
    "id": "R06_IND_01",
    "section": "Indie i Bliski Wschód",
    "type": "single_choice",
    "prompt": "Które miasto jest stolicą Indii?",
    "options": [
      "Madras",
      "Bombaj",
      "Kalkuta",
      "Waranasi",
      "Nowe Delhi",
      "Bangalore"
    ],
    "answer": 4,
    "explanation": "Stolicą Indii jest Nowe Delhi."
  },
  {
    "id": "R06_IND_02",
    "section": "Indie i Bliski Wschód",
    "type": "multi_select",
    "prompt": "Wskaż zjawiska lub cechy życia społecznego Indii.",
    "options": [
      "Dominacja hinduizmu",
      "Znaczenie rzeki Ganges w religii",
      "Jednakowy poziom życia wszystkich mieszkańców",
      "Duże kontrasty między bogactwem a biedą",
      "Istnienie pozostałości systemu kastowego"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Życie społeczne Indii wiąże się m.in. z hinduizmem, tradycją systemu kastowego, świętymi miastami nad Gangesem i znacznymi nierównościami społecznymi."
  },
  {
    "id": "R06_IND_03",
    "section": "Indie i Bliski Wschód",
    "type": "true_false",
    "prompt": "Latem monsun w Indiach wieje z oceanu na ląd i przynosi wilgotne powietrze.",
    "options": null,
    "answer": true,
    "image": "r06_pola_ryzowe_i_monsun.jpg",
    "explanation": "Latem nad rozgrzanym lądem tworzy się niż, a wilgotne powietrze napływa znad oceanu."
  },
  {
    "id": "R06_IND_04",
    "section": "Indie i Bliski Wschód",
    "type": "fill_in",
    "prompt": "Monsun letni wieje z __________ na __________.",
    "options": null,
    "answer": [
      "oceanu",
      "ląd"
    ],
    "altAnswers": [
      [
        "oceanu",
        "oceanu indyjskiego"
      ],
      [
        "ląd",
        "lad",
        "kontynent"
      ]
    ],
    "explanation": "Monsun letni przenosi wilgotne powietrze znad oceanu nad rozgrzany ląd, co wywołuje opady."
  },
  {
    "id": "R06_IND_05",
    "section": "Indie i Bliski Wschód",
    "type": "riddle",
    "prompt": "Jak nazywa się znany indyjski ośrodek produkcji filmowej?",
    "options": null,
    "answer": "Bollywood",
    "altAnswers": [
      "Bollywood"
    ],
    "explanation": "Bollywood jest prężnie działającą częścią indyjskiej gospodarki usługowej."
  },
  {
    "id": "R06_IND_06",
    "section": "Indie i Bliski Wschód",
    "type": "odd_one_out",
    "prompt": "Wskaż roślinę, której nie uprawia się powszechnie w Indiach: ryż, pszenica, herbata, baobab.",
    "options": null,
    "answer": "baobab",
    "explanation": "W Indiach uprawia się m.in. ryż, pszenicę i herbatę. Baobaby rosną na sawannie afrykańskiej."
  },
  {
    "id": "R06_IND_07",
    "section": "Indie i Bliski Wschód",
    "type": "match",
    "prompt": "Połącz region lub miejscowość z opisem.",
    "options": null,
    "left": [
      "Nizina Gangesu",
      "Waranasi",
      "Agra",
      "Dubaj"
    ],
    "right": [
      "rozwój turystyki obok dochodów z ropy",
      "miejsce położenia Tadź Mahal",
      "święte miasto nad Gangesem",
      "gęsto zaludniony obszar Indii"
    ],
    "answer": {
      "Nizina Gangesu": "gęsto zaludniony obszar Indii",
      "Waranasi": "święte miasto nad Gangesem",
      "Agra": "miejsce położenia Tadź Mahal",
      "Dubaj": "rozwój turystyki obok dochodów z ropy"
    },
    "explanation": "Nizina Gangesu jest gęsto zaludniona, Waranasi to ośrodek hinduizmu, w Agrze znajduje się Tadź Mahal, a Dubaj rozwija gospodarkę również poza sektorem naftowym."
  },
  {
    "id": "R06_IND_08",
    "section": "Indie i Bliski Wschód",
    "type": "sort",
    "prompt": "Podziel wskazane cechy na dotyczące Indii lub Bliskiego Wschodu.",
    "options": null,
    "items": [
      "Bollywood",
      "hinduizm jako religia dominująca",
      "OPEC jako organizacja związana z rynkiem ropy",
      "spory o ziemię i zasoby",
      "uprawa ryżu związana z monsunami",
      "duże zasoby ropy naftowej"
    ],
    "categories": [
      "Indie",
      "Bliski Wschód"
    ],
    "answer": {
      "Indie": [
        "hinduizm jako religia dominująca",
        "Bollywood",
        "uprawa ryżu związana z monsunami"
      ],
      "Bliski Wschód": [
        "duże zasoby ropy naftowej",
        "spory o ziemię i zasoby",
        "OPEC jako organizacja związana z rynkiem ropy"
      ]
    },
    "explanation": "Indie wyróżniają m.in. hinduizm, uprawy ryżu i duży sektor usług, a Bliski Wschód zasoby ropy, konflikty i działalność OPEC."
  },
  {
    "id": "R06_IND_09",
    "section": "Indie i Bliski Wschód",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania letniego monsunu i opadów w Indiach.",
    "options": null,
    "items": [
      "Napływ wilgotnego powietrza znad oceanu",
      "Wystąpienie opadów monsunowych",
      "Silne nagrzewanie się lądu latem",
      "Unoszenie się cieplejszego powietrza nad lądem"
    ],
    "answer": [
      "Silne nagrzewanie się lądu latem",
      "Unoszenie się cieplejszego powietrza nad lądem",
      "Napływ wilgotnego powietrza znad oceanu",
      "Wystąpienie opadów monsunowych"
    ],
    "image": "r06_pola_ryzowe_i_monsun.jpg",
    "explanation": "Latem szybko nagrzewający się ląd sprzyja powstaniu niżu i napływowi wilgotnego powietrza znad oceanu, co przynosi deszcze."
  },
  {
    "id": "R06_IND_10",
    "section": "Indie i Bliski Wschód",
    "type": "scenario",
    "prompt": "Rolnik w Indiach czeka na deszcze. Gdy wilgotny wiatr znad oceanu nadejdzie późno, zbiory ryżu będą mniejsze. Z jakim zjawiskiem wiąże się ta sytuacja?",
    "options": [
      "Wystąpieniem monsunu zimowego",
      "Opóźnieniem monsunu letniego",
      "Zmianą pasa wiatrów polarnych",
      "Zmianą pory suchej na Saharze",
      "Przejściem tajfunu przez Japonię",
      "Erupcją wulkanu"
    ],
    "answer": 1,
    "image": "r06_pola_ryzowe_i_monsun.jpg",
    "explanation": "Opóźnienie monsunu letniego może obniżyć plony ryżu i zagrozić bezpieczeństwu żywnościowemu."
  },
  {
    "id": "R06_IND_11",
    "section": "Indie i Bliski Wschód",
    "type": "single_choice",
    "prompt": "Jak nazywa się organizacja państw wpływająca na wydobycie i ceny ropy naftowej?",
    "options": [
      "OPEC",
      "UNESCO",
      "ASEAN",
      "NATO",
      "WHO",
      "ONZ"
    ],
    "answer": 0,
    "image": "r06_wydobycie_ropy_bliski_wschod.jpg",
    "explanation": "OPEC zrzesza producentów ropy i odgrywa ważną rolę w jej wydobyciu oraz kształtowaniu cen światowych."
  },
  {
    "id": "R06_IND_12",
    "section": "Indie i Bliski Wschód",
    "type": "true_false",
    "prompt": "Konflikty zbrojne na Bliskim Wschodzie powodują jedynie straty wojskowe, bez wpływu na ludność cywilną.",
    "options": null,
    "answer": false,
    "explanation": "Wojny powodują ofiary cywilne, niszczenie domów i infrastruktury, załamanie gospodarcze oraz uchodźstwo."
  },
  {
    "id": "R06_IND_13",
    "section": "Indie i Bliski Wschód",
    "type": "multi_select",
    "prompt": "Które zjawiska są następstwami konfliktów zbrojnych?",
    "options": [
      "Zniszczenie pól uprawnych i transportu",
      "Uchodźstwo",
      "Zniszczenie szkół i szpitali",
      "Automatyczny wzrost produkcji żywności",
      "Utrata życia i zdrowia"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Wojny prowadzą m.in. do cierpienia ludzi, niszczenia infrastruktury i pól uprawnych, spadku aktywności gospodarczej i przymusowych migracji."
  },
  {
    "id": "R06_AFR_01",
    "section": "Afryka – środowisko i gospodarka",
    "type": "single_choice",
    "prompt": "Który kontynent jest drugi na świecie pod względem powierzchni?",
    "options": [
      "Europa",
      "Afryka",
      "Ameryka Południowa",
      "Antarktyda",
      "Azja",
      "Australia"
    ],
    "answer": 1,
    "explanation": "Afryka jest drugim pod względem powierzchni kontynentem świata."
  },
  {
    "id": "R06_AFR_02",
    "section": "Afryka – środowisko i gospodarka",
    "type": "multi_select",
    "prompt": "Które cechy odpowiadają wilgotnemu lasowi równikowemu Afryki?",
    "options": [
      "Długa pora bezdeszczowa",
      "Gęsty drzewostan",
      "Liany i epifity",
      "Bardzo obfite całoroczne opady",
      "Wysoka temperatura przez cały rok",
      "Dominacja wydm piaszczystych"
    ],
    "answer": [
      1,
      2,
      3,
      4
    ],
    "image": "r06_afryka_las_sawanna_pustynia.jpg",
    "explanation": "Las równikowy ma wilgotny, gorący klimat i bogatą roślinność, w tym liany oraz epifity."
  },
  {
    "id": "R06_AFR_03",
    "section": "Afryka – środowisko i gospodarka",
    "type": "true_false",
    "prompt": "Pasaty powstają w związku z różnicą ciśnienia między wyżami zwrotnikowymi a niżem równikowym.",
    "options": null,
    "answer": true,
    "explanation": "Powietrze przemieszcza się od wyżów zwrotnikowych w kierunku równikowego niżu ciśnienia."
  },
  {
    "id": "R06_AFR_04",
    "section": "Afryka – środowisko i gospodarka",
    "type": "fill_in",
    "prompt": "W afrykańskiej strefie sawanny dominują trawy i pojedyncze drzewa, m.in. __________ oraz __________.",
    "options": null,
    "answer": [
      "akacje",
      "baobaby"
    ],
    "altAnswers": [
      [
        "akacje",
        "akacja",
        "akacji"
      ],
      [
        "baobaby",
        "baobab",
        "baobabów"
      ]
    ],
    "image": "r06_sawanna_baobab_akacja.jpg",
    "explanation": "Sawanna to formacja trawiasta z pojedynczymi drzewami, takimi jak akacje i baobaby."
  },
  {
    "id": "R06_AFR_05",
    "section": "Afryka – środowisko i gospodarka",
    "type": "riddle",
    "prompt": "Jak nazywa się charakterystyczna twardolistna roślinność śródziemnomorska, złożona głównie z krzewów i zarośli?",
    "options": null,
    "answer": "makia",
    "altAnswers": [
      "makia",
      "makią"
    ],
    "explanation": "W śródziemnomorskiej strefie roślinnej Afryki występuje makia."
  },
  {
    "id": "R06_AFR_06",
    "section": "Afryka – środowisko i gospodarka",
    "type": "odd_one_out",
    "prompt": "Wskaż zwierzę, które nie jest typowym przedstawicielem sawanny: lew, żyrafa, zebra, krokodyl.",
    "options": null,
    "answer": "krokodyl",
    "explanation": "Lew, żyrafa i zebra są typowymi zwierzętami sawanny; krokodyle żyją głównie w pobliżu zbiorników i cieków wodnych."
  },
  {
    "id": "R06_AFR_07",
    "section": "Afryka – środowisko i gospodarka",
    "type": "match",
    "prompt": "Dopasuj strefę roślinną Afryki do charakterystycznych gleb.",
    "options": null,
    "left": [
      "las równikowy",
      "sawanna",
      "pustynie i półpustynie",
      "roślinność śródziemnomorska"
    ],
    "right": [
      "gleby cynamonowe",
      "szaroziemy",
      "gleby czerwonobrunatne",
      "gleby laterytowe"
    ],
    "answer": {
      "las równikowy": "gleby laterytowe",
      "sawanna": "gleby czerwonobrunatne",
      "pustynie i półpustynie": "szaroziemy",
      "roślinność śródziemnomorska": "gleby cynamonowe"
    },
    "explanation": "Poszczególnym strefom roślinnym Afryki odpowiadają m.in. gleby laterytowe, czerwonobrunatne, pustynne i szaroziemy oraz cynamonowe."
  },
  {
    "id": "R06_AFR_08",
    "section": "Afryka – środowisko i gospodarka",
    "type": "sort",
    "prompt": "Przyporządkuj formacje i elementy krajobrazu do stref Afryki.",
    "options": null,
    "items": [
      "mahoniowce",
      "liany",
      "fenki",
      "makia",
      "szaroziemy",
      "baobaby",
      "wysokie trawy",
      "cyprysy"
    ],
    "categories": [
      "las równikowy",
      "sawanna",
      "pustynie i półpustynie",
      "roślinność śródziemnomorska"
    ],
    "answer": {
      "las równikowy": [
        "liany",
        "mahoniowce"
      ],
      "sawanna": [
        "baobaby",
        "wysokie trawy"
      ],
      "pustynie i półpustynie": [
        "fenki",
        "szaroziemy"
      ],
      "roślinność śródziemnomorska": [
        "makia",
        "cyprysy"
      ]
    },
    "image": "r06_afryka_las_sawanna_pustynia.jpg",
    "explanation": "Formacje roślinne i cechy środowiska zmieniają się od wilgotnego równika, przez sawanny i pustynie, po obszary śródziemnomorskie."
  },
  {
    "id": "R06_AFR_09",
    "section": "Afryka – środowisko i gospodarka",
    "type": "sequence",
    "prompt": "Ułóż opis cyrkulacji prowadzącej do powstawania pasatów.",
    "options": null,
    "items": [
      "Przemieszczanie się ochłodzonego powietrza ku zwrotnikom",
      "Opadanie powietrza i powstanie wyżów zwrotnikowych",
      "Napływ pasatów od wyżów ku niżowi",
      "Silne nagrzewanie powietrza nad równikiem",
      "Wznoszenie wilgotnego powietrza i utworzenie niżu"
    ],
    "answer": [
      "Silne nagrzewanie powietrza nad równikiem",
      "Wznoszenie wilgotnego powietrza i utworzenie niżu",
      "Przemieszczanie się ochłodzonego powietrza ku zwrotnikom",
      "Opadanie powietrza i powstanie wyżów zwrotnikowych",
      "Napływ pasatów od wyżów ku niżowi"
    ],
    "explanation": "Pasaty są częścią cyrkulacji między zwrotnikowymi wyżami a równikowym niżem ciśnienia."
  },
  {
    "id": "R06_AFR_10",
    "section": "Afryka – środowisko i gospodarka",
    "type": "scenario",
    "prompt": "Turysta odwiedza Kenię, aby obserwować lwy i żyrafy w naturalnym środowisku. Jaka forma turystyki została opisana?",
    "options": [
      "Turystyka pustyń lodowych",
      "Safari",
      "Rejs arktyczny",
      "Turystyka narciarska",
      "Turystyka polarna",
      "Zwiedzanie kopalń"
    ],
    "answer": 1,
    "image": "r06_safari_w_kenii.jpg",
    "explanation": "Safari jest popularną atrakcją turystyczną Kenii, umożliwiającą obserwowanie dzikich zwierząt."
  },
  {
    "id": "R06_AFR_11",
    "section": "Afryka – środowisko i gospodarka",
    "type": "single_choice",
    "prompt": "Który sektor gospodarki stanowi podstawę utrzymania ludności w wielu krajach Afryki?",
    "options": [
      "Przemysł lotniczy",
      "Produkcja półprzewodników",
      "Rolnictwo",
      "Usługi finansowe",
      "Informatyka",
      "Przemysł kosmiczny"
    ],
    "answer": 2,
    "explanation": "Mimo rozwoju innych sektorów rolnictwo nadal utrzymuje wielu mieszkańców Afryki."
  },
  {
    "id": "R06_AFR_12",
    "section": "Afryka – środowisko i gospodarka",
    "type": "true_false",
    "prompt": "W Afryce nie występują bogate złoża surowców mineralnych.",
    "options": null,
    "answer": false,
    "explanation": "Wśród surowców mineralnych Afryki znajdują się m.in. diamenty, ropa naftowa, gaz ziemny, platyna, kobalt, uran i rudy miedzi."
  },
  {
    "id": "R06_AFR_13",
    "section": "Afryka – środowisko i gospodarka",
    "type": "multi_select",
    "prompt": "Jakie czynniki utrudniają rozwój gospodarczy państw Afryki?",
    "options": [
      "Wysoki analfabetyzm",
      "Brak kapitału na inwestycje",
      "Powszechny nadmiar wykwalifikowanych pracowników",
      "Konflikty zbrojne",
      "Słaba infrastruktura transportowa"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Brak finansowania, niewystarczający transport, ograniczenia edukacyjne i wojny hamują rozwój gospodarczy wielu państw."
  },
  {
    "id": "R06_SAH_01",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "single_choice",
    "prompt": "Jak nazywa się piaszczysta pustynia z licznymi wydmami?",
    "options": [
      "szott",
      "hamada",
      "serir",
      "erg",
      "wadi",
      "takyr"
    ],
    "answer": 3,
    "image": "r06_rodzaje_powierzchni_pustyn.jpg",
    "explanation": "Pustynię piaszczystą z lotnym piaskiem i wydmami określono jako erg."
  },
  {
    "id": "R06_SAH_02",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "multi_select",
    "prompt": "Wskaż typy pustyń wyróżniane ze względu na ich genezę.",
    "options": [
      "Górnicze",
      "Zwrotnikowe",
      "Lodowe",
      "Kasztanowe",
      "Nadmorskie",
      "Kontynentalne"
    ],
    "answer": [
      1,
      2,
      4,
      5
    ],
    "image": "r06_rodzaje_powierzchni_pustyn.jpg",
    "explanation": "Podział genetyczny obejmuje pustynie zwrotnikowe, kontynentalne, nadmorskie i lodowe."
  },
  {
    "id": "R06_SAH_03",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "true_false",
    "prompt": "Pustynie piaszczyste zajmują mniej niż 20% powierzchni Sahary.",
    "options": null,
    "answer": true,
    "explanation": "Sahara obejmuje różne typy powierzchni pustynnych; piaszczyste stanowią mniej niż 20% jej obszaru."
  },
  {
    "id": "R06_SAH_04",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "fill_in",
    "prompt": "Półpustynny pas na południe od Sahary to __________, a proces powiększania obszarów pustynnych to __________.",
    "options": null,
    "answer": [
      "Sahel",
      "pustynnienie"
    ],
    "altAnswers": [
      [
        "Sahel",
        "Sahelu"
      ],
      [
        "pustynnienie",
        "desertyfikacja",
        "pustynnienia"
      ]
    ],
    "image": "r06_suchy_krajobraz_sahelu.jpg",
    "explanation": "Sahel położony jest na południe od Sahary i jest zagrożony pustynnieniem, czyli desertyfikacją."
  },
  {
    "id": "R06_SAH_05",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "riddle",
    "prompt": "Jak nazywa się okresowa dolina rzeczna na pustyni, w której woda pojawia się po opadach?",
    "options": null,
    "answer": "wadi",
    "altAnswers": [
      "wadi",
      "ued",
      "uedi"
    ],
    "image": "r06_sucha_dolina_wadi.jpg",
    "explanation": "Dolina rzeki epizodycznej na pustyni nazywa się wadi lub ued."
  },
  {
    "id": "R06_SAH_06",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "odd_one_out",
    "prompt": "Wskaż pustynię, która nie należy do pustyń kontynentalnych: Gobi, Takla-Makan, Kara-Kum, Namib.",
    "options": null,
    "answer": "Namib",
    "explanation": "Gobi, Takla-Makan i Kara-Kum to pustynie kontynentalne. Namib jest pustynią nadmorską związaną z zimnym prądem morskim."
  },
  {
    "id": "R06_SAH_07",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "match",
    "prompt": "Dopasuj typ powierzchni pustynnej do nazwy.",
    "options": null,
    "left": [
      "piaszczysta",
      "żwirowa",
      "skalista",
      "ilasta"
    ],
    "right": [
      "takyr",
      "hamada",
      "serir",
      "erg"
    ],
    "answer": {
      "piaszczysta": "erg",
      "żwirowa": "serir",
      "skalista": "hamada",
      "ilasta": "takyr"
    },
    "image": "r06_rodzaje_powierzchni_pustyn.jpg",
    "explanation": "Pustynia piaszczysta to erg, żwirowa to serir, skalista to hamada, a ilasta — takyr."
  },
  {
    "id": "R06_SAH_08",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "sort",
    "prompt": "Podziel wskazane przyczyny głodu w Etiopii na przyrodnicze i społeczno-ekonomiczne.",
    "options": null,
    "items": [
      "słaby rozwój gospodarczy",
      "susze i powodzie",
      "słabe i wyjałowione gleby",
      "duży przyrost naturalny",
      "plagi szkodników"
    ],
    "categories": [
      "przyrodnicze",
      "społeczno-ekonomiczne"
    ],
    "answer": {
      "przyrodnicze": [
        "susze i powodzie",
        "słabe i wyjałowione gleby",
        "plagi szkodników"
      ],
      "społeczno-ekonomiczne": [
        "duży przyrost naturalny",
        "słaby rozwój gospodarczy"
      ]
    },
    "explanation": "Przyrodnicze przyczyny głodu obejmują niekorzystne warunki klimatyczne, glebowe i biologiczne, a społeczno-ekonomiczne — wysoki przyrost ludności i słabo rozwiniętą gospodarkę."
  },
  {
    "id": "R06_SAH_09",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "sequence",
    "prompt": "Ułóż w kolejności łańcuch zjawisk prowadzących do pustynnienia w Sahelu.",
    "options": null,
    "items": [
      "Nasilenie użytkowania pozostałych gruntów",
      "Zubożenie gleb i postępujące pustynnienie",
      "Wieloletnie susze i niedobór wody",
      "Kurczenie się obszarów dogodnych do wypasu"
    ],
    "answer": [
      "Wieloletnie susze i niedobór wody",
      "Kurczenie się obszarów dogodnych do wypasu",
      "Nasilenie użytkowania pozostałych gruntów",
      "Zubożenie gleb i postępujące pustynnienie"
    ],
    "explanation": "Wieloletnie susze wraz z rosnącą presją na grunty i nadmiernym wypasem przyspieszają pustynnienie Sahelu."
  },
  {
    "id": "R06_SAH_10",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "scenario",
    "prompt": "Pasterze w Sahelu mają coraz mniej miejsc do wypasu. Wioski powiększają pola uprawne, a wieloletnie susze ograniczają zasoby wody. Jaki proces nasila się na tym terenie?",
    "options": [
      "Transgresja morska",
      "Subdukcja",
      "Zlodowacenie",
      "Powstawanie lasu równikowego",
      "Desertyfikacja",
      "Urbanizacja wybrzeża"
    ],
    "answer": 4,
    "image": "r06_suchy_krajobraz_sahelu.jpg",
    "explanation": "Desertyfikacja to pustynnienie, które w Sahelu jest nasilane przez susze i nadmierne użytkowanie ziemi."
  },
  {
    "id": "R06_SAH_11",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "single_choice",
    "prompt": "Która choroba stanowi szczególnie poważny problem zdrowotny w Afryce na południe od Sahary?",
    "options": [
      "Malaria wyłącznie w Japonii",
      "Ospa wyłącznie w Ameryce Północnej",
      "Denga",
      "Dżuma wyłącznie w Europie",
      "Szkorbut wyłącznie w Australii",
      "AIDS"
    ],
    "answer": 5,
    "explanation": "W Afryce Subsaharyjskiej poważnym zagrożeniem zdrowotnym pozostają zakażenia HIV i zachorowania na AIDS."
  },
  {
    "id": "R06_SAH_12",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "true_false",
    "prompt": "Miraż jest zjawiskiem optycznym związanym z załamywaniem promieni świetlnych w powietrzu.",
    "options": null,
    "answer": true,
    "explanation": "Fatamorgana, czyli miraż, powstaje wskutek załamywania światła w przyziemnych warstwach powietrza."
  },
  {
    "id": "R06_SAH_13",
    "section": "Sahara, Sahel i problemy Afryki",
    "type": "multi_select",
    "prompt": "Które czynniki utrudniają rozwój turystyki w Kenii?",
    "options": [
      "Słaba infrastruktura turystyczna",
      "Zagrożenie chorobami",
      "Brak dzikiej przyrody",
      "Konflikty zbrojne i terroryzm",
      "Przestępczość"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "image": "r06_safari_w_kenii.jpg",
    "explanation": "Opis Kenii wskazuje na bogactwo przyrody jako atut, a konflikty, zagrożenia zdrowotne, przestępczość i słaby rozwój infrastruktury jako bariery."
  },
  {
    "id": "R06_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W której miejscowości odnotowano w 1861 roku rekord rocznych opadów 22 987 mm?",
    "options": [
      "Czerapundźi",
      "Tomtor",
      "Ojmiakon",
      "Tirat Cewi",
      "Masira",
      "Timbuktu"
    ],
    "answer": 0,
    "explanation": "W Czerapundźi w 1861 r. zanotowano roczne opady wynoszące 22 987 mm."
  },
  {
    "id": "R06_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Wskaż wynalazki lub rozwiązania, które powstały w cywilizacji chińskiej.",
    "options": [
      "Kodeks Hammurabiego",
      "Druk z ruchomą czcionką z gliny",
      "Papier z włókien konopi",
      "Pismo doliny Indusu",
      "Sejsmograf",
      "Proch strzelniczy"
    ],
    "answer": [
      1,
      2,
      4,
      5
    ],
    "explanation": "Chińczykom przypisuje się wynalezienie papieru, druku, sejsmografu i prochu. Kodeksy znano w Mezopotamii, a nierozszyfrowane pismo występowało w cywilizacji doliny Indusu."
  },
  {
    "id": "R06_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Dopasuj erupcję lub decyzję do roku.",
    "options": null,
    "left": [
      "Erupcja Tambory",
      "Erupcja Krakatau",
      "Dopuszczenie dwojga dzieci w Chinach"
    ],
    "right": [
      "2015",
      "1883",
      "1815"
    ],
    "answer": {
      "Erupcja Tambory": "1815",
      "Erupcja Krakatau": "1883",
      "Dopuszczenie dwojga dzieci w Chinach": "2015"
    },
    "explanation": "Ważne daty to erupcja Tambory w 1815 r., Krakatau w 1883 r. i zmiana polityki dotyczącej dwojga dzieci w Chinach w 2015 r."
  },
  {
    "id": "R06_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Uporządkuj wydarzenia od najstarszego do najnowszego.",
    "options": null,
    "items": [
      "Erupcja wulkanu Tambora w 1815 r.",
      "Erupcja wulkanu Krakatau w 1883 r.",
      "Powstanie Marakandy w VI w. p.n.e.",
      "Rozkwit Samarkandy jako ośrodka kultury w XV w."
    ],
    "answer": [
      "Powstanie Marakandy w VI w. p.n.e.",
      "Rozkwit Samarkandy jako ośrodka kultury w XV w.",
      "Erupcja wulkanu Tambora w 1815 r.",
      "Erupcja wulkanu Krakatau w 1883 r."
    ],
    "explanation": "Marakanda powstała w VI w. p.n.e., świetność Samarkandy przypadała m.in. na XV w., a erupcje Tambory i Krakatau nastąpiły w XIX w."
  },
  {
    "id": "R06_HARD_05",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Wysokość Mount Everestu wynosi około __________ m n.p.m., a głębokość Bajkału __________ m.",
    "options": null,
    "answer": [
      "8848",
      "1642"
    ],
    "altAnswers": [
      [
        "8848",
        "8 848"
      ],
      [
        "1642",
        "1 642"
      ]
    ],
    "explanation": "Mount Everest osiąga około 8848 m n.p.m., a głębokość Bajkału wynosi 1642 m."
  },
  {
    "id": "R06_HARD_06",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się dawny przyrząd używany w chińskiej kartografii obok kompasu?",
    "options": null,
    "answer": "gnomon",
    "altAnswers": [
      "gnomon"
    ],
    "explanation": "Do osiągnięć chińskiej kartografii zalicza się kompas, gnomon oraz rozwój zasad niwelacji."
  },
  {
    "id": "R06_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Badacz analizuje japońskie trzęsienie ziemi, które przesunęło Honsiu o około 2,5 m i doprowadziło do awarii elektrowni Fukushima. Jakie katastrofalne zjawisko wystąpiło wówczas na wybrzeżu?",
    "options": [
      "Tsunami",
      "Desertyfikacja",
      "Miraż",
      "Erg",
      "Szkwał piaskowy",
      "Monsun zimowy"
    ],
    "answer": 0,
    "explanation": "Japońskie trzęsienie ziemi wywołało niszczycielskie tsunami, które przyczyniło się do awarii elektrowni Fukushima."
  },
  {
    "id": "R06_HARD_08",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel pustynie na grupy według ich genezy.",
    "options": null,
    "items": [
      "Takla-Makan",
      "Kalahari",
      "Atacama",
      "Gobi",
      "Namib",
      "Sahara"
    ],
    "categories": [
      "zwrotnikowe",
      "kontynentalne",
      "nadmorskie"
    ],
    "answer": {
      "zwrotnikowe": [
        "Sahara",
        "Kalahari"
      ],
      "kontynentalne": [
        "Gobi",
        "Takla-Makan"
      ],
      "nadmorskie": [
        "Namib",
        "Atacama"
      ]
    },
    "explanation": "Sahara i Kalahari są zwrotnikowe, Gobi i Takla-Makan kontynentalne, a Namib i Atacama związane z zimnymi prądami morskimi."
  },
  {
    "id": "R06_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Morze Kaspijskie jest jeziorem bezodpływowym, do którego uchodzi Wołga.",
    "options": null,
    "answer": true,
    "explanation": "Wołga uchodzi do Morza Kaspijskiego, będącego w istocie bezodpływowym jeziorem."
  },
  {
    "id": "R06_HARD_10",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż miejscowość, która nie jest znana z rekordów klimatycznych Azji: Tomtor, Tirat Cewi, Czerapundźi, Samarkanda.",
    "options": null,
    "answer": "Samarkanda",
    "explanation": "Tomtor wiąże się z rekordowym mrozem, Tirat Cewi z upałem, Czerapundźi z opadami, a Samarkanda to historyczne miasto na jedwabnym szlaku."
  },
  {
    "id": "R06_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywa się zmiana położenia osi obrotu Ziemi wywołana silnym trzęsieniem ziemi?",
    "options": [
      "Pustynnienie",
      "Monsun",
      "Kołysanie Chandlera",
      "Niwelacja",
      "Niż równikowy",
      "Subdukcja"
    ],
    "answer": 2,
    "explanation": "Kołysanie Chandlera to niewielkie wahania położenia osi obrotu Ziemi względem jej powierzchni."
  },
  {
    "id": "R06_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które pary stref roślinnych Afryki i typów gleb są prawidłowe?",
    "options": [
      "Sawanna — gleby cynamonowe",
      "Pustynie — szaroziemy",
      "Sawanna — gleby czerwonobrunatne",
      "Las równikowy — szaroziemy",
      "Roślinność śródziemnomorska — gleby cynamonowe",
      "Wilgotny las równikowy — gleby laterytowe"
    ],
    "answer": [
      1,
      2,
      4,
      5
    ],
    "explanation": "W lasach równikowych występują gleby laterytowe, na sawannach czerwonobrunatne, na pustyniach szaroziemy, a w strefie śródziemnomorskiej gleby cynamonowe."
  }
];

const KID_PROMPTS = {
  "R06_AZJ_01": "Które jezioro jest najgłębsze na świecie?",
  "R06_AZJ_05": "Jak nazywa się najgłębszy rów oceaniczny?",
  "R06_CHJ_01": "Gdzie w Chinach mieszka najwięcej ludzi: na wschodzie czy na zachodzie?",
  "R06_CHJ_05": "Jak nazywa się wsuwanie jednej płyty Ziemi pod drugą?",
  "R06_IND_01": "Jakie miasto jest stolicą Indii?",
  "R06_IND_10": "Rolnik czeka na letni deszcz znad oceanu. Co się spóźnia?",
  "R06_AFR_10": "Jak nazywa się w Kenii oglądanie dzikich zwierząt na wycieczce?",
  "R06_SAH_01": "Jak nazywa się pustynia z piaskiem i wydmami?",
  "R06_SAH_05": "Jak nazywa się sucha dolina na pustyni, którą czasem płynie woda?",
  "R06_HARD_11": "Jak nazywa się zmiana osi Ziemi po silnym trzęsieniu?"
};

const chapter = {
  "id": "r06",
  "number": 6,
  "title": "Azja i Afryka",
  "icon": "🌍",
  "sectionOrder": [
    "Azja – kontrasty i cywilizacje",
    "Chiny i Japonia",
    "Indie i Bliski Wschód",
    "Afryka – środowisko i gospodarka",
    "Sahara, Sahel i problemy Afryki"
  ],
  "sectionIcons": {
    "Azja – kontrasty i cywilizacje": "🌏",
    "Chiny i Japonia": "🏯",
    "Indie i Bliski Wschód": "🕌",
    "Afryka – środowisko i gospodarka": "🌍",
    "Sahara, Sahel i problemy Afryki": "🏜️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
