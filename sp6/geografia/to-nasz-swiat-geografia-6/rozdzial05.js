// Skróty sekcji (do identyfikatorów ćwiczeń):
//   NIE  = Niemcy: gospodarka i przemysł
//   CZS  = Czechy i Słowacja
//   UKR  = Ukraina: wojna i społeczeństwo
//   BIL  = Białoruś i Litwa
//   ROS  = Rosja i relacje z sąsiadami
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_NIE_01",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "single_choice",
    "prompt": "Jaka jest stolica Niemiec?",
    "options": [
      "Berlin",
      "Frankfurt nad Menem",
      "Kolonia",
      "Monachium",
      "Hamburg",
      "Dortmund"
    ],
    "answer": 0,
    "explanation": "Stolicą Niemiec jest Berlin. Frankfurt nad Menem jest ważnym centrum finansowym Unii Europejskiej, ale nie jest stolicą państwa."
  },
  {
    "id": "R05_NIE_02",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "fill_in",
    "prompt": "Granica Polski z Niemcami przebiega głównie wzdłuż Odry i __________.",
    "options": null,
    "answer": [
      "Nysy Łużyckiej"
    ],
    "altAnswers": [
      [
        "Nysy Łużyckiej",
        "Nysa Łużycka",
        "Nysą Łużycką"
      ]
    ],
    "explanation": "Granica między Polską a Niemcami biegnie głównie wzdłuż Odry i Nysy Łużyckiej."
  },
  {
    "id": "R05_NIE_03",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "true_false",
    "prompt": "Niemcy są państwem związkowym, czyli federacją złożoną z landów.",
    "options": null,
    "answer": true,
    "explanation": "Niemcy składają się z 16 krajów związkowych zwanych landami. Każdy land ma własne władze, ale wszystkie podlegają rządowi centralnemu."
  },
  {
    "id": "R05_NIE_04",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "multi_select",
    "prompt": "Zaznacz informacje pasujące do gospodarki Niemiec.",
    "options": [
      "Jest najsilniejszą gospodarką w Europie.",
      "Jej główną część stanowi sektor usług.",
      "Opiera się przede wszystkim na wydobyciu ropy naftowej.",
      "Rozwinęły się w niej branże przemysłu high-tech.",
      "Niemcy są znane z produkcji samochodów.",
      "Niemcy nie należą do Unii Europejskiej ani NATO."
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Gospodarka Niemiec jest najsilniejsza w Europie, ważny jest sektor usług, rozwinął się przemysł high-tech, a kraj słynie z marek samochodów."
  },
  {
    "id": "R05_NIE_05",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "riddle",
    "prompt": "Jak nazywa się land, w którym znajduje się Zagłębie Ruhry?",
    "options": null,
    "answer": "Nadrenia Północna-Westfalia",
    "altAnswers": [
      "Nadrenia Północna-Westfalia",
      "Nadrenia Polnocna-Westfalia",
      "Nadrenia Północna Westfalia",
      "Nadrenia Polnocna Westfalia"
    ],
    "explanation": "Zagłębie Ruhry leży w Nadrenii Północnej-Westfalii, jednym z najbardziej zaludnionych i najlepiej rozwiniętych landów Niemiec."
  },
  {
    "id": "R05_NIE_06",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwą informacją.",
    "options": null,
    "left": [
      "Zugspitze",
      "Ren",
      "Frankfurt nad Menem",
      "Zagłębie Ruhry"
    ],
    "right": [
      "najdłuższa rzeka Niemiec",
      "najwyższy szczyt Niemiec",
      "najważniejsze centrum finansowe Unii Europejskiej",
      "region przemysłowy w Nadrenii Północnej-Westfalii"
    ],
    "answer": {
      "Zugspitze": "najwyższy szczyt Niemiec",
      "Ren": "najdłuższa rzeka Niemiec",
      "Frankfurt nad Menem": "najważniejsze centrum finansowe Unii Europejskiej",
      "Zagłębie Ruhry": "region przemysłowy w Nadrenii Północnej-Westfalii"
    },
    "image": "r05_alpy_niemcy.jpg",
    "explanation": "Zugspitze ma 2962 m n.p.m., Ren jest najdłuższą rzeką Niemiec, Frankfurt nad Menem jest centrum finansowym UE, a Zagłębie Ruhry to region przemysłowy."
  },
  {
    "id": "R05_NIE_07",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "sort",
    "prompt": "Przyporządkuj cechy Zagłębia Ruhry do okresu przed przemianami i do współczesności.",
    "options": null,
    "items": [
      "górnictwo",
      "hutnictwo",
      "przemysł high-tech",
      "rozwinięty sektor kultury",
      "zakłady silnie zanieczyszczające środowisko",
      "technologie przyjaźniejsze dla środowiska"
    ],
    "categories": [
      "dawniej",
      "dziś"
    ],
    "answer": {
      "dawniej": [
        "górnictwo",
        "hutnictwo",
        "zakłady silnie zanieczyszczające środowisko"
      ],
      "dziś": [
        "przemysł high-tech",
        "rozwinięty sektor kultury",
        "technologie przyjaźniejsze dla środowiska"
      ]
    },
    "explanation": "Dawniej Zagłębie Ruhry kojarzyło się z górnictwem, hutnictwem i silnym zanieczyszczeniem. Obecnie ważne są nowe technologie, kultura i rozwiązania przyjaźniejsze środowisku."
  },
  {
    "id": "R05_NIE_08",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do niemieckich marek samochodów: Audi, BMW, Porsche, Bayer, Volkswagen.",
    "options": null,
    "answer": "Bayer",
    "explanation": "Audi, BMW, Porsche i Volkswagen to marki samochodów. Bayer jest firmą farmaceutyczną."
  },
  {
    "id": "R05_NIE_09",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "scenario",
    "prompt": "Uczeń opisuje region, w którym od XIX wieku rozwijały się kopalnie i huty, a miasta Dortmund, Essen, Bochum i Duisburg utworzyły konurbację. O jaki region chodzi?",
    "options": [
      "Zagłębie Ruhry",
      "Pojezierze Mazurskie",
      "Alpy Bawarskie",
      "Nizina Nadkaspijska",
      "Morawski Kras",
      "Słowacki Raj"
    ],
    "answer": 0,
    "image": "r05_zaglebie_ruhry_przemysl.jpg",
    "explanation": "Opis dotyczy Zagłębia Ruhry w Nadrenii Północnej-Westfalii. Nazwa regionu pochodzi od rzeki Ruhry."
  },
  {
    "id": "R05_NIE_10",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "sequence",
    "prompt": "Ułóż pasy krajobrazowe Niemiec od północy ku południu.",
    "options": null,
    "items": [
      "wyżyny",
      "pojezierza",
      "góry",
      "pobrzeża",
      "niziny"
    ],
    "answer": [
      "pobrzeża",
      "pojezierza",
      "niziny",
      "wyżyny",
      "góry"
    ],
    "explanation": "W Niemczech, podobnie jak w Polsce, na północy występują pobrzeża, a dalej ku południu pojezierza, niziny, wyżyny i góry."
  },
  {
    "id": "R05_NIE_11",
    "section": "Niemcy: gospodarka i przemysł",
    "type": "single_choice",
    "prompt": "Co stało się z częścią dawnych obiektów przemysłowych w Zagłębiu Ruhry?",
    "options": [
      "Przekształcono je na muzea usługowo-kulturalne.",
      "Zamieniono je wyłącznie na pola uprawne.",
      "Zalano je wodami Morza Północnego.",
      "Przeniesiono je do Syberii.",
      "Pozostawiono je jako czynne kopalnie węgla.",
      "Zmieniono je w graniczne przejścia z Polską."
    ],
    "answer": 0,
    "image": "r05_zaglebie_ruhry_przemysl.jpg",
    "explanation": "Część dawnych obiektów przemysłowych przekształcono na muzea usługowo-kulturalne."
  },
  {
    "id": "R05_CZS_01",
    "section": "Czechy i Słowacja",
    "type": "single_choice",
    "prompt": "Jaka jest stolica Czech?",
    "options": [
      "Praga",
      "Brno",
      "Bratysława",
      "Kijów",
      "Wilno",
      "Mińsk"
    ],
    "answer": 0,
    "explanation": "Stolicą Czech jest Praga, najpopularniejsze turystycznie miejsce w kraju."
  },
  {
    "id": "R05_CZS_02",
    "section": "Czechy i Słowacja",
    "type": "true_false",
    "prompt": "Czechy i Słowacja należą do Unii Europejskiej i NATO.",
    "options": null,
    "answer": true,
    "explanation": "Oba państwa są członkami Unii Europejskiej i NATO."
  },
  {
    "id": "R05_CZS_03",
    "section": "Czechy i Słowacja",
    "type": "match",
    "prompt": "Połącz obiekt z właściwym państwem lub informacją.",
    "options": null,
    "left": [
      "Śnieżka",
      "Gerlach",
      "Dunaj",
      "Wełtawa"
    ],
    "right": [
      "najwyższy szczyt Czech",
      "najwyższy szczyt Słowacji i Tatr",
      "rzeka przepływająca przez Bratysławę",
      "rzeka w Pradze z Mostem Karola"
    ],
    "answer": {
      "Śnieżka": "najwyższy szczyt Czech",
      "Gerlach": "najwyższy szczyt Słowacji i Tatr",
      "Dunaj": "rzeka przepływająca przez Bratysławę",
      "Wełtawa": "rzeka w Pradze z Mostem Karola"
    },
    "explanation": "Śnieżka jest najwyższym szczytem Czech, Gerlach najwyższym szczytem Słowacji, Dunaj płynie przez Bratysławę, a Most Karola znajduje się na Wełtawie."
  },
  {
    "id": "R05_CZS_04",
    "section": "Czechy i Słowacja",
    "type": "multi_select",
    "prompt": "Zaznacz walory przyrodnicze Czech.",
    "options": [
      "Adrszpaskie Skalne Miasto",
      "Hradczany z Zamkiem Praskim",
      "Morawski Kras",
      "Most Karola",
      "Czeska Szwajcaria",
      "Karlowe Wary"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Do walorów przyrodniczych Czech należą Adrszpaskie Skalne Miasto, Morawski Kras i Czeska Szwajcaria. Pozostałe odpowiedzi to walory kulturowe lub miejscowość uzdrowiskowa."
  },
  {
    "id": "R05_CZS_05",
    "section": "Czechy i Słowacja",
    "type": "single_choice",
    "prompt": "Co wyróżnia Morawski Kras?",
    "options": [
      "Ponad 1600 jaskiń, z których cztery udostępniono zwiedzającym.",
      "Najwyższy szczyt Tatr i całych Karpat.",
      "Najważniejszy ośrodek narciarski w Niżnych Tatrach.",
      "Najstarszy port Litwy nad Bałtykiem.",
      "Najgłębsze jezioro na świecie.",
      "Konurbacja miast przemysłowych."
    ],
    "answer": 0,
    "explanation": "Morawski Kras to czeski walor przyrodniczy z ponad 1600 jaskiniami, z czego cztery są udostępnione zwiedzającym."
  },
  {
    "id": "R05_CZS_06",
    "section": "Czechy i Słowacja",
    "type": "riddle",
    "prompt": "Jak nazywa się zdobiony most z XIV wieku na Wełtawie w Pradze?",
    "options": null,
    "answer": "Most Karola",
    "altAnswers": [
      "Most Karola",
      "most Karola",
      "Karolowy Most"
    ],
    "image": "r05_praga_most_karola.jpg",
    "explanation": "Most Karola na Wełtawie należy do najsłynniejszych zabytków Pragi."
  },
  {
    "id": "R05_CZS_07",
    "section": "Czechy i Słowacja",
    "type": "sort",
    "prompt": "Przyporządkuj miejsca i obiekty do właściwego kraju.",
    "options": null,
    "items": [
      "Hradczany",
      "Karlowe Wary",
      "Czeski Krumlow",
      "Zamek Orawski",
      "Słowacki Raj",
      "Demianowska Jaskinia Lodowa"
    ],
    "categories": [
      "Czechy",
      "Słowacja"
    ],
    "answer": {
      "Czechy": [
        "Hradczany",
        "Karlowe Wary",
        "Czeski Krumlow"
      ],
      "Słowacja": [
        "Zamek Orawski",
        "Słowacki Raj",
        "Demianowska Jaskinia Lodowa"
      ]
    },
    "explanation": "Hradczany, Karlowe Wary i Czeski Krumlow leżą w Czechach. Zamek Orawski, Słowacki Raj i Demianowska Jaskinia Lodowa znajdują się na Słowacji."
  },
  {
    "id": "R05_CZS_08",
    "section": "Czechy i Słowacja",
    "type": "scenario",
    "prompt": "Turysta na Słowacji idzie szlakiem po platformach i drabinach wśród skalnych ścian, wodospadów i potoków. Jak nazywa się to popularne miejsce?",
    "options": [
      "Słowacki Raj",
      "Morawski Kras",
      "Czeska Szwajcaria",
      "Zagłębie Ruhry",
      "Mierzeja Kurońska",
      "Puszcza Białowieska"
    ],
    "answer": 0,
    "image": "r05_slowacki_raj_szlak.jpg",
    "explanation": "Opis odpowiada Słowackiemu Rajowi, znanemu ze szlaków z platformami i drabinami wśród skał, wodospadów i potoków."
  },
  {
    "id": "R05_CZS_09",
    "section": "Czechy i Słowacja",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do słowackich pasm górskich: Tatry, Niżne Tatry, Wielka Fatra, Rudawy, Bieszczady.",
    "options": null,
    "answer": "Rudawy",
    "explanation": "Rudawy należą do gór otaczających Czechy. Pozostałe nazwy to pasma górskie Słowacji."
  },
  {
    "id": "R05_CZS_10",
    "section": "Czechy i Słowacja",
    "type": "fill_in",
    "prompt": "Najwyższy szczyt Słowacji, Tatr i całych Karpat to __________, mający __________ m n.p.m.",
    "options": null,
    "answer": [
      "Gerlach",
      "2655"
    ],
    "altAnswers": [
      [
        "Gerlach"
      ],
      [
        "2655",
        "2655 m",
        "2655 m n.p.m."
      ]
    ],
    "explanation": "Gerlach ma 2655 m n.p.m. i jest najwyższym szczytem Słowacji, Tatr oraz całych Karpat."
  },
  {
    "id": "R05_CZS_11",
    "section": "Czechy i Słowacja",
    "type": "fill_in",
    "prompt": "Bratysława graniczy z dwoma państwami: __________ od zachodu i __________ od południa.",
    "options": null,
    "answer": [
      "Austrią",
      "Węgrami"
    ],
    "altAnswers": [
      [
        "Austrią",
        "Austria"
      ],
      [
        "Węgrami",
        "Węgry"
      ]
    ],
    "explanation": "Bratysława jest stolicą Słowacji i graniczy z Austrią od zachodu oraz z Węgrami od południa."
  },
  {
    "id": "R05_UKR_01",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "single_choice",
    "prompt": "Jaka jest stolica Ukrainy?",
    "options": [
      "Kijów",
      "Odessa",
      "Lwów",
      "Donieck",
      "Mińsk",
      "Moskwa"
    ],
    "answer": 0,
    "explanation": "Stolicą Ukrainy jest Kijów, położony nad Dnieprem."
  },
  {
    "id": "R05_UKR_02",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "fill_in",
    "prompt": "Ukraina ogłosiła niepodległość w __________ r., a w grudniu tego samego roku formalnie rozwiązano ZSRR.",
    "options": null,
    "answer": [
      "1991"
    ],
    "altAnswers": [
      [
        "1991",
        "1991 r."
      ]
    ],
    "explanation": "Ukraina ogłosiła niepodległość latem 1991 r.; w grudniu 1991 r. formalnie rozwiązano ZSRR."
  },
  {
    "id": "R05_UKR_03",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia z najnowszej historii Ukrainy w kolejności chronologicznej.",
    "options": null,
    "items": [
      "pełnoskalowa inwazja Rosji na Ukrainę",
      "ogłoszenie niepodległości Ukrainy",
      "Euromajdan i odsunięcie prorosyjskich władz",
      "zajęcie Krymu i początek walk w Donbasie"
    ],
    "answer": [
      "ogłoszenie niepodległości Ukrainy",
      "Euromajdan i odsunięcie prorosyjskich władz",
      "zajęcie Krymu i początek walk w Donbasie",
      "pełnoskalowa inwazja Rosji na Ukrainę"
    ],
    "explanation": "Niepodległość Ukrainy ogłoszono w 1991 r. W 2014 r. doszło do Euromajdanu, a następnie do zajęcia Krymu i walk w Donbasie. Pełnoskalowa inwazja Rosji rozpoczęła się w 2022 r."
  },
  {
    "id": "R05_UKR_04",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "true_false",
    "prompt": "Południowa część Ukrainy leży nad Morzem Czarnym, a jednym ze znanych miast portowych jest Odessa.",
    "options": null,
    "answer": true,
    "image": "r05_odessa_port_morze_czarne.jpg",
    "explanation": "Południowa część Ukrainy leży nad Morzem Czarnym, a znanym dużym miastem z portem jest Odessa."
  },
  {
    "id": "R05_UKR_05",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "multi_select",
    "prompt": "Zaznacz powody osłabienia gospodarki Ukrainy.",
    "options": [
      "Zniszczenie lub zatrzymanie części elementów gospodarki.",
      "Przeznaczanie środków finansowych na zbrojenia.",
      "Całkowity brak czarnoziemów w kraju.",
      "Zmniejszenie liczby pracowników przez wojsko, śmierć i emigrację.",
      "Trudności w transporcie produktów rolnych.",
      "Położenie całego kraju poza Europą."
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "image": "r05_ukraina_pola_czarnoziem.jpg",
    "explanation": "Wojna spowodowała zniszczenia, wydatki na zbrojenia, zmniejszenie liczby pracowników i trudności w transporcie produktów rolnych. Ukraina ma rozległe czarnoziemy i leży w Europie."
  },
  {
    "id": "R05_UKR_06",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "riddle",
    "prompt": "Jak nazywa się Donieckie Zagłębie Węglowe, ważny region przemysłowy Ukrainy?",
    "options": null,
    "answer": "Donbas",
    "altAnswers": [
      "Donbas",
      "donbas"
    ],
    "explanation": "Donieckie Zagłębie Węglowe jest nazywane Donbasem. To ważny region przemysłowy z dużymi złożami surowców mineralnych."
  },
  {
    "id": "R05_UKR_07",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "scenario",
    "prompt": "Po inwazji Rosji inne państwa dostarczają Ukrainie wodę, żywność i leki, aby ratować i chronić życie ludzi. Jak nazywa się taki rodzaj pomocy?",
    "options": [
      "pomoc humanitarna",
      "konurbacja",
      "land",
      "depresja",
      "pustynia lodowa",
      "strefa podzwrotnikowa"
    ],
    "answer": 0,
    "explanation": "Pomoc humanitarna oznacza ratowanie i ochronę życia w czasie klęsk, katastrof i wojny, między innymi przez dostarczanie wody, żywności i leków."
  },
  {
    "id": "R05_UKR_08",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do właściwego zagadnienia dotyczącego Ukrainy.",
    "options": null,
    "items": [
      "emigracja ekonomiczna",
      "uchodźstwo wojenne",
      "mała liczba dzieci",
      "czarnoziemy",
      "korzystny klimat dla upraw",
      "sprzedaż produktów rolnych za granicę"
    ],
    "categories": [
      "spadek liczby ludności",
      "rolnictwo"
    ],
    "answer": {
      "spadek liczby ludności": [
        "emigracja ekonomiczna",
        "uchodźstwo wojenne",
        "mała liczba dzieci"
      ],
      "rolnictwo": [
        "czarnoziemy",
        "korzystny klimat dla upraw",
        "sprzedaż produktów rolnych za granicę"
      ]
    },
    "explanation": "Spadek liczby ludności Ukrainy wiąże się z emigracją, uchodźstwem i małą liczbą dzieci. Rolnictwu sprzyjają czarnoziemy i klimat, a sprzedaż produktów rolnych daje zyski."
  },
  {
    "id": "R05_UKR_09",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do największych miast zajętych przez okupanta: Donieck, Ługańsk, Mariupol, Symferopol, Kijów.",
    "options": null,
    "answer": "Kijów",
    "explanation": "Do największych miast zajętych przez okupanta należą Donieck, Ługańsk, Sewastopol, Mariupol i Symferopol. Kijów jest stolicą Ukrainy, ale nie znajduje się na tej liście."
  },
  {
    "id": "R05_UKR_10",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "match",
    "prompt": "Połącz obiekt geograficzny lub miasto z właściwą informacją o Ukrainie.",
    "options": null,
    "left": [
      "Kijów",
      "Dniepr",
      "Howerla",
      "Odessa"
    ],
    "right": [
      "najdłuższa rzeka Ukrainy",
      "stolica Ukrainy",
      "najwyższy szczyt Ukrainy",
      "duże miasto portowe nad Morzem Czarnym"
    ],
    "answer": {
      "Kijów": "stolica Ukrainy",
      "Dniepr": "najdłuższa rzeka Ukrainy",
      "Howerla": "najwyższy szczyt Ukrainy",
      "Odessa": "duże miasto portowe nad Morzem Czarnym"
    },
    "explanation": "Kijów jest stolicą, Dniepr najdłuższą rzeką, Howerla najwyższym szczytem, a Odessa ważnym portem nad Morzem Czarnym."
  },
  {
    "id": "R05_UKR_11",
    "section": "Ukraina: wojna i społeczeństwo",
    "type": "single_choice",
    "prompt": "Dlaczego wielu Ukraińców wybiera Polskę jako kraj emigracji lub uchodźstwa?",
    "options": [
      "Bo Polska jest sąsiadem, ma podobny język i kulturę oraz należy do UE i NATO.",
      "Bo Polska leży za Cieśniną Beringa.",
      "Bo Polska jest największym państwem na świecie.",
      "Bo w Polsce znajduje się Donieckie Zagłębie Węglowe.",
      "Bo Polska nie graniczy z Ukrainą.",
      "Bo Polska i Ukraina tworzyły land federalny."
    ],
    "answer": 0,
    "explanation": "Ukraińcy często wybierają Polskę, ponieważ jest krajem sąsiednim, o podobnym języku i kulturze, a członkostwo w UE i NATO daje większe poczucie bezpieczeństwa i stabilności."
  },
  {
    "id": "R05_BIL_01",
    "section": "Białoruś i Litwa",
    "type": "single_choice",
    "prompt": "Jaka jest stolica Białorusi?",
    "options": [
      "Mińsk",
      "Wilno",
      "Kijów",
      "Ryga",
      "Grodno",
      "Kowno"
    ],
    "answer": 0,
    "explanation": "Stolicą Białorusi jest Mińsk."
  },
  {
    "id": "R05_BIL_02",
    "section": "Białoruś i Litwa",
    "type": "fill_in",
    "prompt": "Największą rzeką przepływającą przez Białoruś i Litwę jest __________.",
    "options": null,
    "answer": [
      "Niemen"
    ],
    "altAnswers": [
      [
        "Niemen"
      ]
    ],
    "explanation": "Niemen jest największą rzeką przepływającą zarówno przez Białoruś, jak i przez Litwę."
  },
  {
    "id": "R05_BIL_03",
    "section": "Białoruś i Litwa",
    "type": "true_false",
    "prompt": "Litwa należy do Unii Europejskiej i NATO oraz ma dostęp do Morza Bałtyckiego.",
    "options": null,
    "answer": true,
    "explanation": "Litwa leży nad Morzem Bałtyckim i jest członkiem Unii Europejskiej oraz NATO."
  },
  {
    "id": "R05_BIL_04",
    "section": "Białoruś i Litwa",
    "type": "multi_select",
    "prompt": "Zaznacz walory przyrodnicze Białorusi.",
    "options": [
      "Puszcza Białowieska",
      "Park Narodowy Jeziora Brasławskie",
      "Prypecki Park Narodowy",
      "Naroczański Park Narodowy",
      "Zamek w Trokach",
      "Stare Miasto w Wilnie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_puszcza_bialowieska.jpg",
    "explanation": "Do walorów przyrodniczych Białorusi należą Puszcza Białowieska oraz parki narodowe: Jeziora Brasławskie, Prypecki i Naroczański. Zamek w Trokach i Stare Miasto w Wilnie dotyczą Litwy."
  },
  {
    "id": "R05_BIL_05",
    "section": "Białoruś i Litwa",
    "type": "match",
    "prompt": "Połącz miejsce lub obiekt z właściwą informacją.",
    "options": null,
    "left": [
      "Dzierżyńska Góra",
      "Góra Auksztocka",
      "Mierzeja Kurońska",
      "Puszcza Białowieska"
    ],
    "right": [
      "najwyższe wzniesienie Białorusi",
      "najwyższe wzniesienie Litwy",
      "wydmy, lasy i tereny podmokłe nad Bałtykiem",
      "puszcza z fragmentami o charakterze pierwotnym"
    ],
    "answer": {
      "Dzierżyńska Góra": "najwyższe wzniesienie Białorusi",
      "Góra Auksztocka": "najwyższe wzniesienie Litwy",
      "Mierzeja Kurońska": "wydmy, lasy i tereny podmokłe nad Bałtykiem",
      "Puszcza Białowieska": "puszcza z fragmentami o charakterze pierwotnym"
    },
    "explanation": "Dzierżyńska Góra ma 345 m n.p.m., Góra Auksztocka około 294 m n.p.m., Mierzeja Kurońska ma wydmy, lasy i mokradła, a Puszcza Białowieska zawiera fragmenty pierwotne."
  },
  {
    "id": "R05_BIL_06",
    "section": "Białoruś i Litwa",
    "type": "riddle",
    "prompt": "Jak nazywało się państwo, które Polska i Litwa tworzyły wspólnie przez ponad 200 lat?",
    "options": null,
    "answer": "Rzeczpospolita Obojga Narodów",
    "altAnswers": [
      "Rzeczpospolita Obojga Narodów",
      "Rzeczpospolita Obojga Narodow",
      "Rzeczpospolita"
    ],
    "explanation": "Polska i Litwa przez ponad 200 lat stanowiły jedno państwo nazywane Rzeczpospolitą Obojga Narodów, co tłumaczy liczne powiązania historyczne."
  },
  {
    "id": "R05_BIL_07",
    "section": "Białoruś i Litwa",
    "type": "sort",
    "prompt": "Przyporządkuj elementy dziedzictwa kulturowego i kuchni do Białorusi lub Litwy.",
    "options": null,
    "items": [
      "zabytkowe cerkwie",
      "zamek w Nieświeżu",
      "draniki",
      "zamek w Trokach",
      "Stare Miasto w Wilnie",
      "kartacze"
    ],
    "categories": [
      "Białoruś",
      "Litwa"
    ],
    "answer": {
      "Białoruś": [
        "zabytkowe cerkwie",
        "zamek w Nieświeżu",
        "draniki"
      ],
      "Litwa": [
        "zamek w Trokach",
        "Stare Miasto w Wilnie",
        "kartacze"
      ]
    },
    "image": "r05_zamek_troki.jpg",
    "explanation": "Białoruś kojarzy się z cerkwiami, zamkiem w Nieświeżu i daniami takimi jak draniki. Litwa ma zamek w Trokach, Stare Miasto w Wilnie i potrawy takie jak kartacze."
  },
  {
    "id": "R05_BIL_08",
    "section": "Białoruś i Litwa",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do litewskich walorów kulturowych: zamek w Trokach, Stare Miasto w Wilnie, Stare Miasto w Kownie, zamek w Nieświeżu.",
    "options": null,
    "answer": "zamek w Nieświeżu",
    "explanation": "Zamek w Nieświeżu jest walorem kulturowym Białorusi. Zamek w Trokach oraz stare miasta w Wilnie i Kownie są walorami kulturowymi Litwy."
  },
  {
    "id": "R05_BIL_09",
    "section": "Białoruś i Litwa",
    "type": "scenario",
    "prompt": "Wędrowiec na Litwie ogląda długą mierzeję z wydmami, lasami i terenami podmokłymi. Jej część leży w Rosji, a litewski fragment objęto parkiem narodowym. Jak nazywa się to miejsce?",
    "options": [
      "Mierzeja Kurońska",
      "Puszcza Białowieska",
      "Morawski Kras",
      "Słowacki Raj",
      "Zagłębie Ruhry",
      "Donbas"
    ],
    "answer": 0,
    "image": "r05_mierzeja_kuronska.jpg",
    "explanation": "Opis dotyczy Mierzei Kurońskiej, jednego z najcenniejszych przyrodniczo miejsc na Litwie."
  },
  {
    "id": "R05_BIL_10",
    "section": "Białoruś i Litwa",
    "type": "single_choice",
    "prompt": "Które litewskie miasto jest najstarsze w kraju i ma ważny port nad Bałtykiem?",
    "options": [
      "Kłajpeda",
      "Wilno",
      "Kowno",
      "Troki",
      "Mińsk",
      "Grodno"
    ],
    "answer": 0,
    "explanation": "Kłajpeda jest najstarszym miastem Litwy, leży nad Bałtykiem i ma ważny port zbudowany w średniowieczu."
  },
  {
    "id": "R05_BIL_11",
    "section": "Białoruś i Litwa",
    "type": "fill_in",
    "prompt": "Na Litwie mieszka około __________ tys. Polaków, a Polska i Litwa przez ponad __________ lat stanowiły jedno państwo.",
    "options": null,
    "answer": [
      "180",
      "200"
    ],
    "altAnswers": [
      [
        "180",
        "180 tys.",
        "około 180"
      ],
      [
        "200",
        "200 lat"
      ]
    ],
    "explanation": "W 2024 r. na Litwie mieszka około 180 tys. Polaków, a dawna wspólna państwowość Polski i Litwy trwała ponad 200 lat."
  },
  {
    "id": "R05_ROS_01",
    "section": "Rosja i relacje z sąsiadami",
    "type": "single_choice",
    "prompt": "Jaka jest stolica Rosji?",
    "options": [
      "Moskwa",
      "Petersburg",
      "Kazań",
      "Nowosybirsk",
      "Kijów",
      "Mińsk"
    ],
    "answer": 0,
    "image": "r05_kreml_moskwa.jpg",
    "explanation": "Stolicą Rosji jest Moskwa, położona w europejskiej części kraju."
  },
  {
    "id": "R05_ROS_02",
    "section": "Rosja i relacje z sąsiadami",
    "type": "true_false",
    "prompt": "Rosja leży na dwóch kontynentach: w Europie i Azji.",
    "options": null,
    "answer": true,
    "explanation": "Mniejsza, zachodnia część Rosji znajduje się w Europie, a większa część kraju leży w Azji."
  },
  {
    "id": "R05_ROS_03",
    "section": "Rosja i relacje z sąsiadami",
    "type": "riddle",
    "prompt": "Jak nazywa się ogromna kraina w azjatyckiej części Rosji, rozciągająca się od Uralu daleko na wschód?",
    "options": null,
    "answer": "Syberia",
    "altAnswers": [
      "Syberia",
      "syberia"
    ],
    "explanation": "Syberia zajmuje ogromną część azjatyckiej Rosji i rozciąga się od gór Ural na zachodzie ku wschodnim obszarom państwa."
  },
  {
    "id": "R05_ROS_04",
    "section": "Rosja i relacje z sąsiadami",
    "type": "match",
    "prompt": "Połącz obiekt z informacją o Rosji.",
    "options": null,
    "left": [
      "Kaukaz",
      "Elbrus",
      "Wołga",
      "Bajkał"
    ],
    "right": [
      "najwyższy łańcuch górski Rosji",
      "najwyższy szczyt Rosji",
      "najdłuższa rzeka Europy",
      "najgłębsze jezioro świata"
    ],
    "answer": {
      "Kaukaz": "najwyższy łańcuch górski Rosji",
      "Elbrus": "najwyższy szczyt Rosji",
      "Wołga": "najdłuższa rzeka Europy",
      "Bajkał": "najgłębsze jezioro świata"
    },
    "image": "r05_bajkal_jezioro.jpg",
    "explanation": "Najwyższym łańcuchem górskim Rosji jest Kaukaz, najwyższym szczytem Elbrus, Wołga jest najdłuższą rzeką Europy, a Bajkał najgłębszym jeziorem świata."
  },
  {
    "id": "R05_ROS_05",
    "section": "Rosja i relacje z sąsiadami",
    "type": "multi_select",
    "prompt": "Zaznacz surowce mineralne wydobywane w Rosji i sprzedawane za granicę.",
    "options": [
      "ropa naftowa",
      "gaz ziemny",
      "kakao",
      "węgiel kamienny",
      "uran",
      "złoto",
      "banany"
    ],
    "answer": [
      0,
      1,
      3,
      4,
      5
    ],
    "explanation": "Do rosyjskich surowców należą między innymi ropa naftowa, gaz ziemny, węgiel kamienny, uran, żelazo, miedź, nikiel, złoto i diamenty. Kakao i banany nie są surowcami mineralnymi."
  },
  {
    "id": "R05_ROS_06",
    "section": "Rosja i relacje z sąsiadami",
    "type": "sort",
    "prompt": "Przyporządkuj strefy krajobrazowe i cechy do odpowiednich części Rosji.",
    "options": null,
    "items": [
      "stepy",
      "żyzne gleby pól uprawnych",
      "tajga",
      "tundra",
      "pustynia lodowa"
    ],
    "categories": [
      "południe Rosji",
      "ponad połowa kraju",
      "północ Rosji"
    ],
    "answer": {
      "południe Rosji": [
        "stepy",
        "żyzne gleby pól uprawnych"
      ],
      "ponad połowa kraju": [
        "tajga"
      ],
      "północ Rosji": [
        "tundra",
        "pustynia lodowa"
      ]
    },
    "image": "r05_syberia_tajga.jpg",
    "explanation": "Na południu Rosji występują stepy z żyznymi glebami. Ponad połowę kraju zajmuje tajga, a na północy rozciągają się tundra i miejscami pustynia lodowa."
  },
  {
    "id": "R05_ROS_07",
    "section": "Rosja i relacje z sąsiadami",
    "type": "single_choice",
    "prompt": "Która cieśnina oddziela północno-wschodnią część Rosji od Stanów Zjednoczonych?",
    "options": [
      "Cieśnina Beringa",
      "Cieśnina Gibraltarska",
      "Cieśnina Bosfor",
      "Cieśnina Duńska",
      "Cieśnina Kaletańska",
      "Cieśnina Mesyńska"
    ],
    "answer": 0,
    "explanation": "Za Cieśniną Beringa, przy północno-wschodniej części Rosji, znajdują się Stany Zjednoczone."
  },
  {
    "id": "R05_ROS_08",
    "section": "Rosja i relacje z sąsiadami",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do mórz oblewających wschodnie wybrzeża Rosji: Morze Beringa, Morze Ochockie, Morze Japońskie, Morze Czarne.",
    "options": null,
    "answer": "Morze Czarne",
    "explanation": "Wschodnie wybrzeża Rosji leżą nad morzami Beringa, Ochockim i Japońskim. Morze Czarne znajduje się przy europejskiej części Rosji."
  },
  {
    "id": "R05_ROS_09",
    "section": "Rosja i relacje z sąsiadami",
    "type": "scenario",
    "prompt": "Opis dotyczy sąsiada Polski, który nie należy do NATO ani Unii Europejskiej, nie szanuje wartości takich jak demokracja i prawa człowieka, a relacje polityczne z Polską są bardzo złe. O jakim kraju mowa?",
    "options": [
      "Białoruś",
      "Litwa",
      "Czechy",
      "Słowacja",
      "Niemcy",
      "Ukraina"
    ],
    "answer": 0,
    "explanation": "Białoruś nie należy do NATO ani UE, nie przestrzega demokracji, wolności słowa i praw człowieka oraz prowadzi wrogie działania na granicy z Polską."
  },
  {
    "id": "R05_ROS_10",
    "section": "Rosja i relacje z sąsiadami",
    "type": "sequence",
    "prompt": "Ułóż typy klimatu Rosji od północy ku południu.",
    "options": null,
    "items": [
      "umiarkowany ciepły kontynentalny",
      "podzwrotnikowy nad Morzem Czarnym",
      "biegunowy i podbiegunowy",
      "umiarkowany chłodny kontynentalny"
    ],
    "answer": [
      "biegunowy i podbiegunowy",
      "umiarkowany chłodny kontynentalny",
      "umiarkowany ciepły kontynentalny",
      "podzwrotnikowy nad Morzem Czarnym"
    ],
    "explanation": "Na północy Rosji występują klimaty biegunowy i podbiegunowy. Dalej dominują klimaty umiarkowane kontynentalne, a niewielki obszar nad Morzem Czarnym leży w strefie podzwrotnikowej."
  },
  {
    "id": "R05_ROS_11",
    "section": "Rosja i relacje z sąsiadami",
    "type": "single_choice",
    "prompt": "Który sąsiad Polski jest nazwany głównym partnerem handlowym Polski?",
    "options": [
      "Niemcy",
      "Białoruś",
      "Rosja",
      "Słowacja",
      "Ukraina",
      "Litwa"
    ],
    "answer": 0,
    "explanation": "Niemcy są głównym partnerem handlowym Polski."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw miast tworzy konurbację w Zagłębiu Ruhry?",
    "options": [
      "Dortmund, Essen, Bochum i Duisburg",
      "Berlin, Monachium, Hamburg i Kolonia",
      "Praga, Brno, Ostrawa i Pilzno",
      "Kijów, Odessa, Donieck i Lwów",
      "Wilno, Kowno, Kłajpeda i Troki",
      "Moskwa, Petersburg, Kazań i Omsk"
    ],
    "answer": 0,
    "explanation": "Dortmund, Essen, Bochum i Duisburg tworzą konurbację w Zagłębiu Ruhry."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz pozytywne skutki przemian przemysłu w Zagłębiu Ruhry.",
    "options": [
      "Powstanie licznych uczelni wyższych.",
      "Powstanie instytucji kulturalnych.",
      "Poprawa stanu środowiska naturalnego.",
      "Przekształcenie części dawnych obiektów przemysłowych w muzea usługowo-kulturalne.",
      "Utrata pracy przez wiele osób.",
      "Wzrost znaczenia zakładów silnie zanieczyszczających środowisko."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_zaglebie_ruhry_przemysl.jpg",
    "explanation": "Pozytywne skutki przemian to rozwój uczelni, instytucji kultury, poprawa środowiska i nowe funkcje dawnych obiektów przemysłowych. Utrata pracy była skutkiem negatywnym."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "W Morawskim Krasie znajduje się ponad 1600 jaskiń, a cztery z nich udostępniono zwiedzającym.",
    "options": null,
    "answer": true,
    "explanation": "Morawski Kras ma ponad 1600 jaskiń, w tym cztery udostępnione dla zwiedzających."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Jednym z najważniejszych ośrodków narciarskich Słowacji jest __________ w __________ Tatrach.",
    "options": null,
    "answer": [
      "Jasna",
      "Niżnych"
    ],
    "altAnswers": [
      [
        "Jasna",
        "Jasná"
      ],
      [
        "Niżnych",
        "Niznych",
        "Niżne",
        "Nizne"
      ]
    ],
    "explanation": "Jasna w Niżnych Tatrach jest jednym z najważniejszych słowackich ośrodków narciarskich."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jak nazywa się ukraiński półwysep nielegalnie zajęty przez Rosję w 2014 roku?",
    "options": null,
    "answer": "Krym",
    "altAnswers": [
      "Krym",
      "Półwysep Krymski",
      "Polwysep Krymski"
    ],
    "explanation": "W 2014 r. Rosja nielegalnie zajęła należący do Ukrainy Półwysep Krymski, czyli Krym."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz wydarzenie z rokiem.",
    "options": null,
    "left": [
      "ogłoszenie niepodległości Ukrainy",
      "Euromajdan i odsunięcie prorosyjskich władz",
      "pełnoskalowa inwazja Rosji na Ukrainę"
    ],
    "right": [
      "1991",
      "2014",
      "2022"
    ],
    "answer": {
      "ogłoszenie niepodległości Ukrainy": "1991",
      "Euromajdan i odsunięcie prorosyjskich władz": "2014",
      "pełnoskalowa inwazja Rosji na Ukrainę": "2022"
    },
    "explanation": "Ukraina ogłosiła niepodległość w 1991 r., Euromajdan doprowadził do odsunięcia prorosyjskich władz w 2014 r., a pełnoskalowa inwazja rozpoczęła się w 2022 r."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do elementów kultury ludowej i kuchni Białorusi: Maslenica, draniki, babka ziemniaczana, kartacze.",
    "options": null,
    "answer": "kartacze",
    "explanation": "Kartacze są tradycyjną potrawą litewską. Maslenica, draniki i babka ziemniaczana są elementami kultury Białorusi."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Park narodowy obejmuje obszar pojezierny z 74 jeziorami w północno-zachodniej części Białorusi. Który to park?",
    "options": [
      "Park Narodowy Jeziora Brasławskie",
      "Prypecki Park Narodowy",
      "Naroczański Park Narodowy",
      "Park Narodowy Puszcza Białowieska",
      "Słowacki Raj",
      "Mierzeja Kurońska"
    ],
    "answer": 0,
    "image": "r05_jeziora_braslawskie.jpg",
    "explanation": "Park Narodowy Jeziora Brasławskie obejmuje pojezierny obszar z 74 jeziorami w północno-zachodniej części Białorusi."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj sąsiadów Polski do relacji.",
    "options": null,
    "items": [
      "Niemcy",
      "Czechy",
      "Słowacja",
      "Litwa",
      "Rosja",
      "Białoruś",
      "Ukraina"
    ],
    "categories": [
      "sojusz i partnerstwo",
      "wrogie relacje",
      "bliska pomoc podczas wojny"
    ],
    "answer": {
      "sojusz i partnerstwo": [
        "Niemcy",
        "Czechy",
        "Słowacja",
        "Litwa"
      ],
      "wrogie relacje": [
        "Rosja",
        "Białoruś"
      ],
      "bliska pomoc podczas wojny": [
        "Ukraina"
      ]
    },
    "explanation": "Niemcy, Czechy, Słowacja i Litwa są opisane jako partnerzy lub sojusznicy Polski. Relacje z Rosją i Białorusią są wrogie, a Ukraina jest krajem, któremu Polska mocno pomaga podczas wojny."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Rosja ma dostęp do Morza Kaspijskiego, które nazwano największym jeziorem na świecie.",
    "options": null,
    "answer": true,
    "image": "r05_morze_kaspijskie.jpg",
    "explanation": "Rosja ma dostęp do Morza Kaspijskiego, czyli największego jeziora na świecie."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia związane z Ukrainą od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "inwazja Rosji w 2022 r.",
      "rozpad ZSRR i niepodległość Ukrainy",
      "zajęcie Krymu przez Rosję",
      "Euromajdan w Kijowie"
    ],
    "answer": [
      "rozpad ZSRR i niepodległość Ukrainy",
      "Euromajdan w Kijowie",
      "zajęcie Krymu przez Rosję",
      "inwazja Rosji w 2022 r."
    ],
    "explanation": "Najpierw Ukraina uzyskała niepodległość po rozpadzie ZSRR w 1991 r. Następnie w 2014 r. doszło do Euromajdanu i zajęcia Krymu, a w 2022 r. Rosja rozpoczęła pełnoskalową inwazję."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o wodach Rosji.",
    "options": [
      "W europejskiej części Rosja ma dostęp do Morza Bałtyckiego i Morza Czarnego.",
      "Wołga jest najdłuższą rzeką Europy.",
      "Bajkał ma 1642 m głębokości.",
      "Cieśnina Beringa oddziela Rosję od obszaru Stanów Zjednoczonych.",
      "Najdłuższą rzeką Rosji jest Dunaj.",
      "Rosja nie ma dostępu do żadnego morza."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r05_bajkal_jezioro.jpg",
    "explanation": "Rosja ma dostęp do wielu mórz, Wołga jest najdłuższą rzeką Europy, Bajkał ma 1642 m głębokości, a za Cieśniną Beringa znajdują się Stany Zjednoczone."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Kraje sąsiadujące z Polską",
  icon: "🗺️",
  sectionOrder: [
    "Niemcy: gospodarka i przemysł",
    "Czechy i Słowacja",
    "Ukraina: wojna i społeczeństwo",
    "Białoruś i Litwa",
    "Rosja i relacje z sąsiadami"
  ],
  sectionIcons: {
    "Niemcy: gospodarka i przemysł": "🏭",
    "Czechy i Słowacja": "🏰",
    "Ukraina: wojna i społeczeństwo": "🌻",
    "Białoruś i Litwa": "🌲",
    "Rosja i relacje z sąsiadami": "🌍"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
