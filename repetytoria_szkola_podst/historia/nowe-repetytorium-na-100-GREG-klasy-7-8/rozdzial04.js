// Skróty sekcji (do identyfikatorów ćwiczeń):
//   WOP  = Wojna obronna Polski i okupacja
//   PPP  = Polskie Państwo Podziemne i ruch oporu
//   SPR  = Sprawa polska i Polacy na frontach
//   PRZ  = Przebieg II wojny światowej
//   EKS  = Eksterminacja, Wielka Trójka i skutki wojny
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_WOP_01",
    "section": "Wojna obronna Polski i okupacja",
    "type": "single_choice",
    "prompt": "Kto dowodził obroną Westerplatte?",
    "options": [
      "Henryk Sucharski",
      "Władysław Raginis",
      "Tadeusz Kutrzeba",
      "Franciszek Kleeberg",
      "Walerian Czuma",
      "Julian Filipowicz"
    ],
    "answer": 0,
    "image": "r04_westerplatte.jpg",
    "explanation": "Obroną Wojskowej Składnicy Tranzytowej na Westerplatte dowodził mjr Henryk Sucharski."
  },
  {
    "id": "R04_WOP_02",
    "section": "Wojna obronna Polski i okupacja",
    "type": "true_false",
    "prompt": "Westerplatte miało bronić się przez 6 godzin, a broniło się przez 7 dni.",
    "options": null,
    "answer": true,
    "image": "r04_westerplatte.jpg",
    "explanation": "Załoga Westerplatte miała utrzymać składnicę przez 6 godzin, lecz opór trwał 7 dni."
  },
  {
    "id": "R04_WOP_03",
    "section": "Wojna obronna Polski i okupacja",
    "type": "match",
    "prompt": "Połącz bitwę kampanii wrześniowej z dowódcą wojsk polskich.",
    "options": null,
    "left": [
      "Mokra",
      "Wizna",
      "Bzura",
      "Kock"
    ],
    "right": [
      "Franciszek Kleeberg",
      "Tadeusz Kutrzeba",
      "Julian Filipowicz",
      "Władysław Raginis"
    ],
    "answer": {
      "Mokra": "Julian Filipowicz",
      "Wizna": "Władysław Raginis",
      "Bzura": "Tadeusz Kutrzeba",
      "Kock": "Franciszek Kleeberg"
    },
    "image": "r04_kampania_wrzesniowa_mapa.jpg",
    "explanation": "Pod Mokrą dowodził płk Julian Filipowicz, pod Wizną kpt. Władysław Raginis, nad Bzurą gen. Tadeusz Kutrzeba, a pod Kockiem gen. Franciszek Kleeberg."
  },
  {
    "id": "R04_WOP_04",
    "section": "Wojna obronna Polski i okupacja",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia kampanii 1939 roku w porządku chronologicznym.",
    "options": null,
    "items": [
      "Kapitulacja Warszawy",
      "Bitwa pod Kockiem",
      "Obrona Poczty Polskiej w Gdańsku",
      "Agresja ZSRS na Polskę"
    ],
    "answer": [
      "Obrona Poczty Polskiej w Gdańsku",
      "Agresja ZSRS na Polskę",
      "Kapitulacja Warszawy",
      "Bitwa pod Kockiem"
    ],
    "image": "r04_kampania_wrzesniowa_mapa.jpg",
    "explanation": "Obrona Poczty Polskiej rozpoczęła się 1 IX, ZSRS zaatakował 17 IX, Warszawa skapitulowała 28 IX, a bitwa pod Kockiem trwała 2-6 X 1939 r."
  },
  {
    "id": "R04_WOP_05",
    "section": "Wojna obronna Polski i okupacja",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny klęski kampanii wrześniowej.",
    "options": [
      "Ogromna różnica sił między Polską a Niemcami",
      "Agresja Armii Czerwonej",
      "Długa linia graniczna do obrony",
      "Brak pomocy z zewnątrz",
      "Przewaga polskiego lotnictwa",
      "Zbyt wczesne ogłoszenie mobilizacji"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przyczyn klęski należały m.in. ogromna różnica sił, agresja Armii Czerwonej, długa linia graniczna, zbyt późna mobilizacja, błędy dowodzenia i brak pomocy z zewnątrz."
  },
  {
    "id": "R04_WOP_06",
    "section": "Wojna obronna Polski i okupacja",
    "type": "fill_in",
    "prompt": "Dnia __________ wojska sowieckie przekroczyły wschodnią granicę Polski, a Naczelnym Wodzem był wówczas __________.",
    "options": null,
    "answer": [
      "17 IX 1939 r.",
      "Edward Rydz-Śmigły"
    ],
    "altAnswers": [
      [
        "17 IX 1939 r.",
        "17 IX 1939",
        "17 września 1939 r."
      ],
      [
        "Edward Rydz-Śmigły",
        "Rydz-Śmigły",
        "Edward Rydz Śmigły"
      ]
    ],
    "explanation": "Agresja ZSRS nastąpiła 17 IX 1939 r. Naczelnym Wodzem był Edward Rydz-Śmigły."
  },
  {
    "id": "R04_WOP_07",
    "section": "Wojna obronna Polski i okupacja",
    "type": "riddle",
    "prompt": "Ostatnia bitwa kampanii wrześniowej, stoczona 2-6 X 1939 r., to bitwa pod...",
    "options": null,
    "answer": "Kockiem",
    "altAnswers": [
      "Kockiem",
      "Kock"
    ],
    "explanation": "Ostatnią bitwą kampanii wrześniowej była bitwa pod Kockiem. Dowodził gen. Franciszek Kleeberg."
  },
  {
    "id": "R04_WOP_08",
    "section": "Wojna obronna Polski i okupacja",
    "type": "odd_one_out",
    "prompt": "Wskaż wydarzenie, które nie należało do kampanii wrześniowej w Polsce: Westerplatte, Wizna, Bzura, Pearl Harbour.",
    "options": null,
    "answer": "Pearl Harbour",
    "explanation": "Pearl Harbour było miejscem japońskiego ataku na bazę USA w 1941 r.; pozostałe nazwy odnoszą się do walk kampanii wrześniowej 1939 r."
  },
  {
    "id": "R04_WOP_09",
    "section": "Wojna obronna Polski i okupacja",
    "type": "scenario",
    "prompt": "Jest początek października 1939 r. Dowodzisz Samodzielną Grupą Operacyjną Polesie w ostatniej bitwie kampanii wrześniowej. Kim jesteś?",
    "options": [
      "Franciszek Kleeberg",
      "Tadeusz Kutrzeba",
      "Władysław Langner",
      "Juliusz Rómmel",
      "Stanisław Dąbek",
      "Wiktor Thromme"
    ],
    "answer": 0,
    "explanation": "Samodzielną Grupą Operacyjną Polesie w bitwie pod Kockiem dowodził gen. Franciszek Kleeberg."
  },
  {
    "id": "R04_WOP_10",
    "section": "Wojna obronna Polski i okupacja",
    "type": "single_choice",
    "prompt": "Kto sprawował naczelną władzę w Generalnym Gubernatorstwie?",
    "options": [
      "Hans Frank",
      "Heinrich Himmler",
      "Erwin Rommel",
      "Karl Dönitz",
      "Alfred Jodl",
      "Heinz Guderian"
    ],
    "answer": 0,
    "image": "r04_okupacja_polski_mapa.jpg",
    "explanation": "Naczelną władzę w Generalnym Gubernatorstwie sprawował generalny gubernator Hans Frank, którego siedzibą był Wawel w Krakowie."
  },
  {
    "id": "R04_WOP_11",
    "section": "Wojna obronna Polski i okupacja",
    "type": "true_false",
    "prompt": "Siedziba Hansa Franka jako generalnego gubernatora znajdowała się na Wawelu w Krakowie.",
    "options": null,
    "answer": true,
    "explanation": "Hans Frank sprawował władzę w Generalnym Gubernatorstwie i miał siedzibę na Wawelu."
  },
  {
    "id": "R04_WOP_12",
    "section": "Wojna obronna Polski i okupacja",
    "type": "sort",
    "prompt": "Przyporządkuj pojęcia do okupacji niemieckiej albo sowieckiej.",
    "options": null,
    "items": [
      "Generalne Gubernatorstwo",
      "Hans Frank",
      "Kozielsk",
      "Starobielsk",
      "Ostaszków",
      "Wawel jako siedziba okupacyjnej administracji"
    ],
    "categories": [
      "okupacja niemiecka",
      "okupacja sowiecka"
    ],
    "answer": {
      "okupacja niemiecka": [
        "Generalne Gubernatorstwo",
        "Hans Frank",
        "Wawel jako siedziba okupacyjnej administracji"
      ],
      "okupacja sowiecka": [
        "Kozielsk",
        "Starobielsk",
        "Ostaszków"
      ]
    },
    "image": "r04_okupacja_polski_mapa.jpg",
    "explanation": "Generalne Gubernatorstwo i Hans Frank wiążą się z okupacją niemiecką, a Kozielsk, Starobielsk i Ostaszków z sowieckim systemem jenieckim i represjami."
  },
  {
    "id": "R04_PPP_01",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "single_choice",
    "prompt": "Co oznaczała dolna część znaku Polski Walczącej w kształcie litery W?",
    "options": [
      "walkę",
      "wolność",
      "Warszawę",
      "wojsko",
      "Westerplatte",
      "wywiad"
    ],
    "answer": 0,
    "image": "r04_polska_walczaca_symbol.jpg",
    "explanation": "Znak Polski Walczącej miał kształt kotwicy: litera P oznaczała Polskę, a litera W - walkę."
  },
  {
    "id": "R04_PPP_02",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "match",
    "prompt": "Połącz organizację wojskową Polskiego Państwa Podziemnego z datą jej powstania.",
    "options": null,
    "left": [
      "Służba Zwycięstwu Polski",
      "Związek Walki Zbrojnej",
      "Armia Krajowa"
    ],
    "right": [
      "14 II 1942 r.",
      "XI 1939 r.",
      "26/27 IX 1939 r."
    ],
    "answer": {
      "Służba Zwycięstwu Polski": "26/27 IX 1939 r.",
      "Związek Walki Zbrojnej": "XI 1939 r.",
      "Armia Krajowa": "14 II 1942 r."
    },
    "explanation": "SZP powstała 26/27 IX 1939 r., ZWZ w XI 1939 r., a Armia Krajowa 14 II 1942 r."
  },
  {
    "id": "R04_PPP_03",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "true_false",
    "prompt": "Armia Krajowa powstała 14 II 1942 r. po rozwiązaniu Związku Walki Zbrojnej.",
    "options": null,
    "answer": true,
    "explanation": "Armię Krajową utworzono 14 II 1942 r. po rozwiązaniu ZWZ."
  },
  {
    "id": "R04_PPP_04",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "multi_select",
    "prompt": "Zaznacz zadania Delegatury Rządu na Kraj.",
    "options": [
      "Wspieranie zakazanego szkolnictwa i kultury",
      "Pomoc ludności żydowskiej",
      "Ochrona dorobku kulturalnego i gospodarczego",
      "Przeciwdziałanie propagandzie okupacyjnej",
      "Kierowanie Luftwaffe",
      "Tworzenie administracji Generalnego Gubernatorstwa"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Delegatura wspierała tajne szkolnictwo, kulturę, opiekę społeczną i sądownictwo, chroniła dorobek kraju, zwalczała propagandę okupanta i pomagała ludności żydowskiej."
  },
  {
    "id": "R04_PPP_05",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "sort",
    "prompt": "Przyporządkuj formy oporu do działań cywilnych albo wojskowych.",
    "options": null,
    "items": [
      "tajne nauczanie",
      "prasa konspiracyjna",
      "sabotaż w gospodarce",
      "wysadzanie mostów",
      "odbijanie więźniów",
      "walka partyzancka"
    ],
    "categories": [
      "działania cywilne",
      "działania wojskowe"
    ],
    "answer": {
      "działania cywilne": [
        "tajne nauczanie",
        "prasa konspiracyjna",
        "sabotaż w gospodarce"
      ],
      "działania wojskowe": [
        "wysadzanie mostów",
        "odbijanie więźniów",
        "walka partyzancka"
      ]
    },
    "explanation": "Tajne nauczanie, prasa konspiracyjna i sabotaż w gospodarce należały do działań cywilnych, natomiast wysadzanie mostów, odbijanie więźniów i walka partyzancka miały charakter wojskowy."
  },
  {
    "id": "R04_PPP_06",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "single_choice",
    "prompt": "Kim byli cichociemni?",
    "options": [
      "Żołnierzami zrzucanymi do okupowanej Polski",
      "Niemieckimi lotnikami nocnymi",
      "Członkami administracji Generalnego Gubernatorstwa",
      "Sowieckimi spadochroniarzami",
      "Polskimi marynarzami eskortującymi konwoje",
      "Dziennikarzami rządu emigracyjnego"
    ],
    "answer": 0,
    "explanation": "Cichociemni byli żołnierzami Polskich Sił Zbrojnych zrzucanymi na spadochronach do okupowanej Polski, aby walczyć z okupantem oraz organizować i szkolić ruch oporu."
  },
  {
    "id": "R04_PPP_07",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "riddle",
    "prompt": "Jaki kryptonim nosiła konspiracyjna Organizacja Harcerzy działająca w latach 1939-1945?",
    "options": null,
    "answer": "Szare Szeregi",
    "altAnswers": [
      "Szare Szeregi"
    ],
    "explanation": "Organizacja Harcerzy przyjęła kryptonim Szare Szeregi."
  },
  {
    "id": "R04_PPP_08",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "scenario",
    "prompt": "Jest rok 1944. Kierownictwo podziemia chce uderzyć na Niemców w chwili osłabienia ich sił, przejąć władzę przed wkroczeniem Armii Czerwonej i wystąpić wobec niej jako gospodarz. Jaki plan realizuje?",
    "options": [
      "Burza",
      "Overlord",
      "Market-Garden",
      "Barbarossa",
      "Fall Gelb",
      "Lew Morski"
    ],
    "answer": 0,
    "explanation": "Takie cele miał plan Burza, realizowany od stycznia 1944 r.; jego częścią była m.in. operacja Ostra Brama."
  },
  {
    "id": "R04_PPP_09",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy rozwoju głównej konspiracji wojskowej w okupowanej Polsce.",
    "options": null,
    "items": [
      "Armia Krajowa",
      "Rozwiązanie Armii Krajowej 19 I 1945 r.",
      "Służba Zwycięstwu Polski",
      "Związek Walki Zbrojnej"
    ],
    "answer": [
      "Służba Zwycięstwu Polski",
      "Związek Walki Zbrojnej",
      "Armia Krajowa",
      "Rozwiązanie Armii Krajowej 19 I 1945 r."
    ],
    "explanation": "Kolejność była następująca: Służba Zwycięstwu Polski, Związek Walki Zbrojnej, Armia Krajowa, a następnie rozwiązanie AK 19 I 1945 r."
  },
  {
    "id": "R04_PPP_10",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "single_choice",
    "prompt": "Ile dni trwało powstanie warszawskie?",
    "options": [
      "63 dni",
      "7 dni",
      "14 dni",
      "30 dni",
      "90 dni",
      "120 dni"
    ],
    "answer": 0,
    "image": "r04_powstanie_warszawskie.jpg",
    "explanation": "Powstanie warszawskie upadło po 63 dniach walk."
  },
  {
    "id": "R04_PPP_11",
    "section": "Polskie Państwo Podziemne i ruch oporu",
    "type": "multi_select",
    "prompt": "Zaznacz skutki powstania warszawskiego.",
    "options": [
      "Śmierć ponad 16 tys. żołnierzy AK",
      "Śmierć około 150 tys. cywilów",
      "Zniszczenie około 85% Warszawy",
      "Przesiedlenie warszawiaków do innych miast",
      "Natychmiastowe wyzwolenie całej Polski",
      "Kapitulacja Niemiec w Europie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_powstanie_warszawskie.jpg",
    "explanation": "Do skutków powstania należały m.in. śmierć ponad 16 tys. żołnierzy AK i około 150 tys. cywilów, wysiedlenie mieszkańców oraz zniszczenie około 85% Warszawy."
  },
  {
    "id": "R04_SPR_01",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "single_choice",
    "prompt": "Kto był Prezydentem RP na wychodźstwie w latach 1939-1947?",
    "options": [
      "Władysław Raczkiewicz",
      "Władysław Sikorski",
      "Stanisław Mikołajczyk",
      "Tomasz Arciszewski",
      "Kazimierz Sosnkowski",
      "Władysław Anders"
    ],
    "answer": 0,
    "image": "r04_rzad_na_wychodzstwie.jpg",
    "explanation": "Prezydentem RP na wychodźstwie w latach 1939-1947 był Władysław Raczkiewicz."
  },
  {
    "id": "R04_SPR_02",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "true_false",
    "prompt": "W czerwcu 1940 r. siedzibę rządu polskiego na wychodźstwie przeniesiono do Londynu.",
    "options": null,
    "answer": true,
    "image": "r04_rzad_na_wychodzstwie.jpg",
    "explanation": "Po klęsce Francji w VI 1940 r. siedzibę rządu polskiego przeniesiono do Londynu."
  },
  {
    "id": "R04_SPR_03",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "match",
    "prompt": "Połącz wydarzenie dotyczące sprawy polskiej z datą.",
    "options": null,
    "left": [
      "Układ Sikorski-Majski",
      "Umowa wojskowa polsko-sowiecka",
      "Ewakuacja armii Andersa",
      "Śmierć Władysława Sikorskiego"
    ],
    "right": [
      "VIII 1942 r.",
      "4 VII 1943 r.",
      "14 VIII 1941 r.",
      "30 VII 1941 r."
    ],
    "answer": {
      "Układ Sikorski-Majski": "30 VII 1941 r.",
      "Umowa wojskowa polsko-sowiecka": "14 VIII 1941 r.",
      "Ewakuacja armii Andersa": "VIII 1942 r.",
      "Śmierć Władysława Sikorskiego": "4 VII 1943 r."
    },
    "explanation": "Układ Sikorski-Majski podpisano 30 VII 1941 r., umowę wojskową 14 VIII 1941 r., armię Andersa ewakuowano w VIII 1942 r., a Sikorski zginął 4 VII 1943 r."
  },
  {
    "id": "R04_SPR_04",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia układu Sikorski-Majski.",
    "options": [
      "Nawiązanie stosunków dyplomatycznych Polski z ZSRS",
      "Wzajemna pomoc w walce z Niemcami",
      "Zgoda na utworzenie armii polskiej w ZSRS",
      "Amnestia dla Polaków przebywających w ZSRS",
      "Przekazanie Polski pod bezpośrednią administrację ZSRS",
      "Rozwiązanie wszystkich polskich sił zbrojnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Układ przewidywał m.in. unieważnienie przez ZSRS paktu Ribbentrop-Mołotow, nawiązanie stosunków dyplomatycznych, wzajemną pomoc w walce z Niemcami, zgodę na armię polską w ZSRS oraz amnestię dla Polaków w ZSRS."
  },
  {
    "id": "R04_SPR_05",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "scenario",
    "prompt": "Po układzie z ZSRS w 1941 r. masz objąć dowództwo nad tworzoną na terenie Związku Sowieckiego armią polską. Kim jesteś?",
    "options": [
      "Władysław Anders",
      "Stanisław Maczek",
      "Stanisław Sosabowski",
      "Bronisław Duch",
      "Michał Rola-Żymierski",
      "Tadeusz Bór-Komorowski"
    ],
    "answer": 0,
    "explanation": "Na dowódcę armii polskiej tworzonej w ZSRS powołano gen. Władysława Andersa."
  },
  {
    "id": "R04_SPR_06",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "riddle",
    "prompt": "W jakim miejscu 4 VII 1943 r. doszło do katastrofy samolotu z Władysławem Sikorskim?",
    "options": null,
    "answer": "Gibraltar",
    "altAnswers": [
      "Gibraltar",
      "Gibraltarze"
    ],
    "explanation": "Samolot B-24 Liberator z Sikorskim runął do morza tuż po starcie z Gibraltaru."
  },
  {
    "id": "R04_SPR_07",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "sort",
    "prompt": "Przyporządkuj polskie formacje do dowódców.",
    "options": null,
    "items": [
      "1 Dywizja Pancerna",
      "1 Samodzielna Brygada Spadochronowa",
      "Armia tworzona w ZSRS"
    ],
    "categories": [
      "Stanisław Maczek",
      "Stanisław Sosabowski",
      "Władysław Anders"
    ],
    "answer": {
      "Stanisław Maczek": [
        "1 Dywizja Pancerna"
      ],
      "Stanisław Sosabowski": [
        "1 Samodzielna Brygada Spadochronowa"
      ],
      "Władysław Anders": [
        "Armia tworzona w ZSRS"
      ]
    },
    "image": "r04_polacy_na_frontach.jpg",
    "explanation": "1 Dywizją Pancerną dowodził gen. Stanisław Maczek, 1 Samodzielną Brygadą Spadochronową gen. Stanisław Sosabowski, a armią tworzoną w ZSRS gen. Władysław Anders."
  },
  {
    "id": "R04_SPR_08",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "fill_in",
    "prompt": "Dowódcą 1 Dywizji Pancernej był gen. __________, a 1 Samodzielnej Brygady Spadochronowej gen. __________.",
    "options": null,
    "answer": [
      "Stanisław Maczek",
      "Stanisław Sosabowski"
    ],
    "altAnswers": [
      [
        "Stanisław Maczek",
        "Maczek",
        "gen. Stanisław Maczek"
      ],
      [
        "Stanisław Sosabowski",
        "Sosabowski",
        "gen. Stanisław Sosabowski"
      ]
    ],
    "image": "r04_polacy_na_frontach.jpg",
    "explanation": "Polską 1 Dywizją Pancerną dowodził Stanisław Maczek, a 1 Samodzielną Brygadą Spadochronową Stanisław Sosabowski."
  },
  {
    "id": "R04_SPR_09",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "single_choice",
    "prompt": "Jaki polski wynalazek alianci wykorzystali w 1942 r. pod El Alamein?",
    "options": [
      "Elektroniczny wykrywacz min",
      "Radar okrętowy",
      "Silnik odrzutowy",
      "Radiostacja polowa",
      "Most pontonowy",
      "Torpeda kierowana"
    ],
    "answer": 0,
    "explanation": "Pod El Alamein alianci użyli elektronicznego wykrywacza min, wynalazku polskich inżynierów Józefa Kosackiego i Andrzeja Garbosia."
  },
  {
    "id": "R04_SPR_10",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "match",
    "prompt": "Połącz obszar walk z polską formacją lub rodzajem udziału.",
    "options": null,
    "left": [
      "Francja",
      "Tobruk",
      "Holandia",
      "Atlantyk"
    ],
    "right": [
      "1 Dywizja Pancerna gen. Maczka",
      "Samodzielna Brygada Strzelców Karpackich",
      "1 Dywizja Grenadierów",
      "polskie niszczyciele eskortujące konwoje"
    ],
    "answer": {
      "Francja": "1 Dywizja Grenadierów",
      "Tobruk": "Samodzielna Brygada Strzelców Karpackich",
      "Holandia": "1 Dywizja Pancerna gen. Maczka",
      "Atlantyk": "polskie niszczyciele eskortujące konwoje"
    },
    "image": "r04_polacy_na_frontach.jpg",
    "explanation": "Polacy walczyli we Francji w 1 Dywizji Grenadierów, pod Tobrukiem w Samodzielnej Brygadzie Strzelców Karpackich, w Holandii m.in. w 1 Dywizji Pancernej, a na Atlantyku polskie niszczyciele eskortowały konwoje."
  },
  {
    "id": "R04_SPR_11",
    "section": "Sprawa polska i Polacy na frontach",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia dotyczące władz i sił polskich na wychodźstwie w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Układ Sikorski-Majski",
      "Przeniesienie siedziby rządu do Londynu",
      "Śmierć Władysława Sikorskiego",
      "Ewakuacja armii Andersa",
      "Opuszczenie Polski przez najwyższe władze",
      "Przeniesienie siedziby rządu do Angers"
    ],
    "answer": [
      "Opuszczenie Polski przez najwyższe władze",
      "Przeniesienie siedziby rządu do Angers",
      "Przeniesienie siedziby rządu do Londynu",
      "Układ Sikorski-Majski",
      "Ewakuacja armii Andersa",
      "Śmierć Władysława Sikorskiego"
    ],
    "explanation": "Władze opuściły kraj 17/18 IX 1939 r., siedzibę rządu przeniesiono do Angers w XI 1939 r., do Londynu w VI 1940 r., układ Sikorski-Majski zawarto 30 VII 1941 r., armię Andersa ewakuowano w VIII 1942 r., a Sikorski zginął 4 VII 1943 r."
  },
  {
    "id": "R04_PRZ_01",
    "section": "Przebieg II wojny światowej",
    "type": "single_choice",
    "prompt": "Przez jaki obszar Niemcy obeszli linię Maginota podczas ataku na Francję w maju 1940 r.?",
    "options": [
      "Ardeny",
      "Alpy",
      "Pireneje",
      "Normandię",
      "Bretanię",
      "Lotaryngię"
    ],
    "answer": 0,
    "explanation": "Niemcy uderzyli przez Ardeny, co pozwoliło im obejść ufortyfikowaną linię Maginota."
  },
  {
    "id": "R04_PRZ_02",
    "section": "Przebieg II wojny światowej",
    "type": "true_false",
    "prompt": "W dniach 26 V-3 VI 1940 r. około 340 tys. żołnierzy brytyjskich i francuskich ewakuowano spod Dunkierki.",
    "options": null,
    "answer": true,
    "explanation": "W dniach 26 V-3 VI 1940 r. ewakuowano spod Dunkierki około 340 tys. żołnierzy."
  },
  {
    "id": "R04_PRZ_03",
    "section": "Przebieg II wojny światowej",
    "type": "single_choice",
    "prompt": "Kiedy Niemcy zaatakowały ZSRS?",
    "options": [
      "22 VI 1941 r.",
      "1 IX 1939 r.",
      "10 V 1940 r.",
      "7 XII 1941 r.",
      "5 VII 1943 r.",
      "6 VI 1944 r."
    ],
    "answer": 0,
    "image": "r04_front_wschodni_mapa.jpg",
    "explanation": "Agresja Niemiec na ZSRS rozpoczęła się 22 VI 1941 r."
  },
  {
    "id": "R04_PRZ_04",
    "section": "Przebieg II wojny światowej",
    "type": "match",
    "prompt": "Połącz niemiecką grupę armii z jej głównym celem podczas ataku na ZSRS.",
    "options": null,
    "left": [
      "Armia Północ",
      "Armia Środek",
      "Armia Południe"
    ],
    "right": [
      "Ukraina oraz okolice Morza Czarnego i Kaspijskiego",
      "Białoruś i Moskwa",
      "kraje bałtyckie i Leningrad"
    ],
    "answer": {
      "Armia Północ": "kraje bałtyckie i Leningrad",
      "Armia Środek": "Białoruś i Moskwa",
      "Armia Południe": "Ukraina oraz okolice Morza Czarnego i Kaspijskiego"
    },
    "image": "r04_front_wschodni_mapa.jpg",
    "explanation": "Armia Północ miała opanować kraje bałtyckie i Leningrad, Armia Środek Białoruś i Moskwę, a Armia Południe Ukrainę i okolice Morza Czarnego oraz Kaspijskiego."
  },
  {
    "id": "R04_PRZ_05",
    "section": "Przebieg II wojny światowej",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia frontu wschodniego w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Bitwa na łuku kurskim",
      "Bitwa o Moskwę",
      "Wkroczenie Armii Czerwonej do Chełma i Lublina",
      "Początek bitwy o Stalingrad"
    ],
    "answer": [
      "Bitwa o Moskwę",
      "Początek bitwy o Stalingrad",
      "Bitwa na łuku kurskim",
      "Wkroczenie Armii Czerwonej do Chełma i Lublina"
    ],
    "explanation": "Bitwa o Moskwę przypadła na 1941 r., bitwa o Stalingrad rozpoczęła się w 1942 r., bitwa na łuku kurskim odbyła się w VII 1943 r., a Armia Czerwona wkroczyła do Chełma i Lublina w VII 1944 r."
  },
  {
    "id": "R04_PRZ_06",
    "section": "Przebieg II wojny światowej",
    "type": "single_choice",
    "prompt": "Kto dowodził wojskami brytyjskimi podczas walk pod El Alamein w 1942 r.?",
    "options": [
      "Bernard Montgomery",
      "Erwin Rommel",
      "Dwight Eisenhower",
      "George Patton",
      "Heinz Guderian",
      "Gieorgij Żukow"
    ],
    "answer": 0,
    "explanation": "Pod El Alamein wojskami brytyjskimi dowodził gen. Bernard Montgomery, a siłami niemiecko-włoskimi feldmarszałek Erwin Rommel."
  },
  {
    "id": "R04_PRZ_07",
    "section": "Przebieg II wojny światowej",
    "type": "scenario",
    "prompt": "Jest 7 XII 1941 r. Japońskie lotnictwo atakuje hawajską bazę amerykańskiej floty, co prowadzi do wejścia USA do wojny. Jak nazywa się ta baza?",
    "options": [
      "Pearl Harbour",
      "Midway",
      "Guam",
      "Okinawa",
      "Singapur",
      "Wake"
    ],
    "answer": 0,
    "image": "r04_pearl_harbour.jpg",
    "explanation": "Atak nastąpił na bazę Pearl Harbour na Hawajach. Po nim USA i Wielka Brytania wypowiedziały wojnę Japonii."
  },
  {
    "id": "R04_PRZ_08",
    "section": "Przebieg II wojny światowej",
    "type": "true_false",
    "prompt": "Bitwa o Midway w dniach 4-7 VI 1942 r. zakończyła się przełomowym zwycięstwem Amerykanów.",
    "options": null,
    "answer": true,
    "image": "r04_pearl_harbour.jpg",
    "explanation": "Bitwa pod Midway była przełomowym zwycięstwem USA, po którym Japonia przeszła do obrony."
  },
  {
    "id": "R04_PRZ_09",
    "section": "Przebieg II wojny światowej",
    "type": "riddle",
    "prompt": "Jak nazywano amerykańską taktykę opanowywania tylko strategicznie najważniejszych wysp i archipelagów na Pacyfiku?",
    "options": null,
    "answer": "żabie skoki",
    "altAnswers": [
      "żabie skoki",
      "taktyka żabich skoków"
    ],
    "explanation": "Amerykanie stosowali taktykę żabich skoków: zajmowali najważniejsze wyspy, tworzyli bazy i odcinali wojska japońskie od zaopatrzenia."
  },
  {
    "id": "R04_PRZ_10",
    "section": "Przebieg II wojny światowej",
    "type": "multi_select",
    "prompt": "Zaznacz przyczyny klęski państw Osi.",
    "options": [
      "Brak współdziałania i wzajemnej pomocy państw Osi",
      "Jednoczesna walka na kilku frontach",
      "Wyczerpanie możliwości gospodarczych i przemysłowych",
      "Wciągnięcie do wojny Stanów Zjednoczonych",
      "Stała przewaga gospodarcza państw Osi",
      "Wycofanie ZSRS z wojny w 1941 r."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do przyczyn klęski państw Osi należały brak współdziałania, błędne decyzje Hitlera, walka na kilku frontach, wyczerpanie gospodarcze oraz wejście USA do wojny."
  },
  {
    "id": "R04_PRZ_11",
    "section": "Przebieg II wojny światowej",
    "type": "match",
    "prompt": "Połącz nazwę operacji lub wydarzenia z właściwym opisem.",
    "options": null,
    "left": [
      "Overlord",
      "Market-Garden",
      "Falaise",
      "Monte Cassino"
    ],
    "right": [
      "lądowanie aliantów w Normandii",
      "próba opanowania mostów na Renie",
      "udział 1 Dywizji Pancernej gen. Maczka",
      "udział 2 Korpusu Polskiego"
    ],
    "answer": {
      "Overlord": "lądowanie aliantów w Normandii",
      "Market-Garden": "próba opanowania mostów na Renie",
      "Falaise": "udział 1 Dywizji Pancernej gen. Maczka",
      "Monte Cassino": "udział 2 Korpusu Polskiego"
    },
    "image": "r04_normandia_i_front_zachodni.jpg",
    "explanation": "Overlord oznaczał lądowanie aliantów w Normandii, Market-Garden próbę opanowania mostów na Renie, pod Falaise walczyła polska 1 Dywizja Pancerna, a pod Monte Cassino walczył 2 Korpus Polski."
  },
  {
    "id": "R04_EKS_01",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "riddle",
    "prompt": "Jak nazywano odizolowaną część miasta, w której Niemcy przymusowo zamykali ludność żydowską?",
    "options": null,
    "answer": "getto",
    "altAnswers": [
      "getto"
    ],
    "explanation": "Getto to odizolowana część miasta, której mieszkańcy nie mogli swobodnie opuszczać."
  },
  {
    "id": "R04_EKS_02",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "true_false",
    "prompt": "Niemieckie obozy koncentracyjne położone na okupowanych ziemiach polskich można poprawnie nazywać polskimi obozami koncentracyjnymi.",
    "options": null,
    "answer": false,
    "image": "r04_auschwitz_birkenau.jpg",
    "explanation": "Były to niemieckie obozy i nie należy nazywać ich polskimi obozami koncentracyjnymi."
  },
  {
    "id": "R04_EKS_03",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "multi_select",
    "prompt": "Zaznacz działania represyjne wobec Żydów.",
    "options": [
      "Nakaz noszenia opasek z gwiazdą Dawida",
      "Grabież majątku żydowskiego",
      "Przymus pracy",
      "Tworzenie gett",
      "Pełna swoboda korzystania z kolei",
      "Prawo do swobodnego opuszczania getta"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_auschwitz_birkenau.jpg",
    "explanation": "Represje obejmowały m.in. obowiązek noszenia opasek z gwiazdą Dawida, grabież majątku, pracę przymusową, tworzenie gett oraz masowe rozstrzeliwania."
  },
  {
    "id": "R04_EKS_04",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "single_choice",
    "prompt": "W którym roku powstała Rada Pomocy Żydom Żegota?",
    "options": [
      "1942",
      "1939",
      "1940",
      "1941",
      "1943",
      "1945"
    ],
    "answer": 0,
    "explanation": "Rada Pomocy Żydom Żegota powstała w 1942 r."
  },
  {
    "id": "R04_EKS_05",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "eksterminacja",
      "getto",
      "Żegota",
      "ŻOB"
    ],
    "right": [
      "Rada Pomocy Żydom",
      "Żydowska Organizacja Bojowa",
      "odizolowana część miasta",
      "celowe i planowe zabijanie określonych grup ludzi"
    ],
    "answer": {
      "eksterminacja": "celowe i planowe zabijanie określonych grup ludzi",
      "getto": "odizolowana część miasta",
      "Żegota": "Rada Pomocy Żydom",
      "ŻOB": "Żydowska Organizacja Bojowa"
    },
    "explanation": "Eksterminacja oznacza planowe zabijanie grup ludzi, getto było odizolowaną częścią miasta, Żegota niosła pomoc Żydom, a ŻOB była żydowską organizacją bojową działającą w getcie warszawskim."
  },
  {
    "id": "R04_EKS_06",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "single_choice",
    "prompt": "Ilu Żydów zamordowali Niemcy w obozach i poza nimi?",
    "options": [
      "około 6 mln",
      "około 600 tys.",
      "około 60 tys.",
      "około 12 mln",
      "około 1 mln",
      "około 20 mln"
    ],
    "answer": 0,
    "explanation": "Niemcy zamordowali około 6 mln Żydów w obozach i poza nimi."
  },
  {
    "id": "R04_EKS_07",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "single_choice",
    "prompt": "Na której konferencji Wielkiej Trójki zdecydowano o utworzeniu drugiego frontu w Normandii?",
    "options": [
      "w Teheranie",
      "w Jałcie",
      "w Poczdamie",
      "w San Francisco",
      "w Dumbarton Oaks",
      "w Monachium"
    ],
    "answer": 0,
    "image": "r04_wielka_trojka.jpg",
    "explanation": "Na konferencji w Teheranie ustalono utworzenie drugiego frontu w Europie Zachodniej, w Normandii."
  },
  {
    "id": "R04_EKS_08",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "sequence",
    "prompt": "Ułóż konferencje Wielkiej Trójki w kolejności chronologicznej.",
    "options": null,
    "items": [
      "Poczdam",
      "Teheran",
      "Jałta"
    ],
    "answer": [
      "Teheran",
      "Jałta",
      "Poczdam"
    ],
    "image": "r04_wielka_trojka.jpg",
    "explanation": "Teheran odbył się na przełomie XI i XII 1943 r., Jałta w II 1945 r., a Poczdam w VII-VIII 1945 r."
  },
  {
    "id": "R04_EKS_09",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "multi_select",
    "prompt": "Zaznacz postanowienia konferencji poczdamskiej.",
    "options": [
      "Zachodnia granica Polski na Odrze i Nysie Łużyckiej",
      "Wschodnia granica Polski na linii Curzona",
      "Demilitaryzacja i denazyfikacja Niemiec",
      "Wysiedlenie Niemców z ziem włączonych do Polski",
      "Przywrócenie granic Polski z 1938 r.",
      "Rozwiązanie ONZ"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_polska_po_wojnie_mapa.jpg",
    "explanation": "W Poczdamie uzgodniono m.in. zachodnią granicę Polski na Odrze i Nysie Łużyckiej, wschodnią na linii Curzona, zasady 4D wobec Niemiec oraz wysiedlenie Niemców z ziem przyznanych Polsce w sposób pokojowy i humanitarny."
  },
  {
    "id": "R04_EKS_10",
    "section": "Eksterminacja, Wielka Trójka i skutki wojny",
    "type": "sort",
    "prompt": "Przyporządkuj następstwa II wojny światowej do odpowiedniej kategorii.",
    "options": null,
    "items": [
      "zimna wojna",
      "masowe migracje ludności",
      "zniszczenie miast i transportu",
      "zniszczenie bibliotek i dzieł sztuki",
      "podział Niemiec na dwa państwa",
      "procesy zbrodniarzy wojennych",
      "rozwój przemysłu wojskowego",
      "śmierć wielu pisarzy i artystów"
    ],
    "categories": [
      "polityczne",
      "społeczne",
      "gospodarcze",
      "kulturowe"
    ],
    "answer": {
      "polityczne": [
        "zimna wojna",
        "podział Niemiec na dwa państwa"
      ],
      "społeczne": [
        "masowe migracje ludności",
        "procesy zbrodniarzy wojennych"
      ],
      "gospodarcze": [
        "zniszczenie miast i transportu",
        "rozwój przemysłu wojskowego"
      ],
      "kulturowe": [
        "zniszczenie bibliotek i dzieł sztuki",
        "śmierć wielu pisarzy i artystów"
      ]
    },
    "image": "r04_polska_po_wojnie_mapa.jpg",
    "explanation": "Następstwa wojny można podzielić na polityczne, społeczne, gospodarcze i kulturowe."
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak nazywał się niemiecki pancernik, który 1 IX 1939 r. ostrzelał Westerplatte?",
    "options": [
      "Schleswig-Holstein",
      "Bismarck",
      "Tirpitz",
      "Admiral Graf Spee",
      "Gneisenau",
      "Scharnhorst"
    ],
    "answer": 0,
    "image": "r04_westerplatte.jpg",
    "explanation": "Westerplatte zostało zaatakowane przez pancernik Schleswig-Holstein, który wcześniej wpłynął do Gdańska z wizytą kurtuazyjną."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pod Wizną około __________ polskich żołnierzy walczyło przeciwko około __________ żołnierzy niemieckich.",
    "options": null,
    "answer": [
      "720",
      "42 000"
    ],
    "altAnswers": [
      [
        "720",
        "około 720"
      ],
      [
        "42 000",
        "42000",
        "42 tys.",
        "około 42 000"
      ]
    ],
    "explanation": "Pod Wizną około 720 żołnierzy polskich walczyło przeciwko około 42 000 Niemców."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz wydarzenia dotyczące obrony Warszawy, które miały miejsce w drugiej połowie września 1939 r.",
    "options": [
      "21 IX - stolicę opuścili ostatni dyplomaci",
      "27 IX - powstała Służba Zwycięstwu Polski",
      "28 IX - podpisano kapitulację Warszawy",
      "1 IX - rozpoczęła się bitwa pod Kockiem",
      "7 XII - zaatakowano Pearl Harbour"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "21 IX stolicę opuścili ostatni dyplomaci, 27 IX powstała Służba Zwycięstwu Polski, a 28 IX podpisano kapitulację Warszawy."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Trzynastoletni obrońca Grodna, użyty przez Sowietów jako żywa tarcza, to...",
    "options": null,
    "answer": "Tadzik Jasiński",
    "altAnswers": [
      "Tadzik Jasiński",
      "Tadeusz Jasiński",
      "Jasiński"
    ],
    "explanation": "Symbolem obrony Grodna stał się trzynastoletni Tadzik Jasiński."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sowiecki obóz jeniecki z miejscem zamordowania jego jeńców.",
    "options": null,
    "left": [
      "Kozielsk",
      "Starobielsk",
      "Ostaszków"
    ],
    "right": [
      "Miednoje",
      "Katyń",
      "Charków"
    ],
    "answer": {
      "Kozielsk": "Katyń",
      "Starobielsk": "Charków",
      "Ostaszków": "Miednoje"
    },
    "explanation": "Jeńcy z Kozielska zginęli w Katyniu, ze Starobielska w Charkowie, a z Ostaszkowa w Miednoje."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z czyjej inicjatywy powstała Służba Zwycięstwu Polski 26/27 IX 1939 r.?",
    "options": [
      "Michała Karaszewicza-Tokarzewskiego",
      "Stefana Roweckiego",
      "Kazimierza Sosnkowskiego",
      "Leopolda Okulickiego",
      "Tadeusza Komorowskiego",
      "Franciszka Kamińskiego"
    ],
    "answer": 0,
    "explanation": "SZP powstała w oblężonej Warszawie z inicjatywy gen. Michała Karaszewicza-Tokarzewskiego."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz dowódcę podziemia z używanym pseudonimem.",
    "options": null,
    "left": [
      "Stefan Rowecki",
      "Tadeusz Komorowski",
      "Leopold Okulicki",
      "Michał Żymierski"
    ],
    "right": [
      "Rola",
      "Bór",
      "Grot",
      "Niedźwiadek"
    ],
    "answer": {
      "Stefan Rowecki": "Grot",
      "Tadeusz Komorowski": "Bór",
      "Leopold Okulicki": "Niedźwiadek",
      "Michał Żymierski": "Rola"
    },
    "explanation": "Stefan Rowecki używał pseudonimu Grot, Tadeusz Komorowski - Bór, Leopold Okulicki - Niedźwiadek, a Michał Żymierski - Rola."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto kierował Biurem Informacji i Propagandy?",
    "options": [
      "Jan Rzepecki",
      "Franciszek Kamiński",
      "Tadeusz Kurcyusz",
      "Jan Mazurkiewicz",
      "Aleksander Kamiński",
      "Stefan Rowecki"
    ],
    "answer": 0,
    "explanation": "Dowódcą Biura Informacji i Propagandy był Jan Rzepecki."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która grupa Szarych Szeregów obejmowała harcerzy w wieku 13-16 lat?",
    "options": [
      "Zawiszacy",
      "Bojowe Szkoły",
      "Grupy Szturmowe",
      "Parasol",
      "Zośka",
      "Wawer"
    ],
    "answer": 0,
    "explanation": "W Szarych Szeregach Zawiszacy mieli 13-16 lat, Bojowe Szkoły 16-18 lat, a Grupy Szturmowe skupiały starszych."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz fakty o katastrofie, w której zginął Władysław Sikorski.",
    "options": [
      "Katastrofa wydarzyła się 4 VII 1943 r.",
      "Samolotem był B-24 Liberator",
      "Do katastrofy doszło po starcie z Gibraltaru",
      "Przeżył pierwszy pilot Eduard Prchal",
      "Katastrofa wydarzyła się pod Monte Cassino",
      "Samolotem był myśliwiec Spitfire"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Sikorski zginął 4 VII 1943 r. po starcie z Gibraltaru w samolocie B-24 Liberator; przeżył pierwszy pilot Eduard Prchal."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który polski niszczyciel uczestniczył 27 V 1941 r. w zatopieniu niemieckiego pancernika Bismarck?",
    "options": [
      "Piorun",
      "Grom",
      "Błyskawica",
      "Burza",
      "Wicher",
      "Gryf"
    ],
    "answer": 0,
    "explanation": "W zatopieniu Bismarcka uczestniczył m.in. polski niszczyciel Piorun."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Kto był współtwórcą elektronicznego wykrywacza min użytego przez aliantów pod El Alamein?",
    "options": [
      "Józef Kosacki i Andrzej Garboś",
      "Stanisław Maczek i Stanisław Sosabowski",
      "Władysław Anders i Bronisław Duch",
      "Jan Rzepecki i Franciszek Kamiński",
      "Michał Żymierski i Karol Świerczewski",
      "Tadeusz Kutrzeba i Walerian Czuma"
    ],
    "answer": 0,
    "explanation": "Polscy inżynierowie Józef Kosacki i Andrzej Garboś byli twórcami wykrywacza min."
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jest 17 IX 1944 r. Bierzesz udział w alianckiej operacji mającej opanować mosty na Renie i umożliwić wkroczenie do Niemiec. W polskiej 1 Samodzielnej Brygadzie Spadochronowej dowodzi gen. Sosabowski. Jaka to operacja?",
    "options": [
      "Market-Garden",
      "Overlord",
      "Barbarossa",
      "Ostra Brama",
      "Burza",
      "Torch"
    ],
    "answer": 0,
    "image": "r04_normandia_i_front_zachodni.jpg",
    "explanation": "Była to operacja Market-Garden. Jej celem było przejęcie mostów na Renie; zakończyła się porażką aliantów."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "W nocy 2/3 VIII 1944 r. w Birkenau zamordowano __________ Romów, a Dzień Pamięci o Zagładzie Romów i Sinti obchodzony jest __________.",
    "options": null,
    "answer": [
      "2897",
      "2 VIII"
    ],
    "altAnswers": [
      [
        "2897",
        "2 897"
      ],
      [
        "2 VIII",
        "2 sierpnia"
      ]
    ],
    "explanation": "Tej nocy zginęło 2897 osób, a 2 VIII obchodzony jest Dzień Pamięci o Zagładzie Romów i Sinti."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz dane dotyczące Polski po II wojnie światowej.",
    "options": [
      "Obszar około 311 tys. km²",
      "Ludność około 24 mln",
      "Granica zachodnia na Odrze i Nysie Łużyckiej",
      "Granica wschodnia na Bugu",
      "Obszar około 500 tys. km²",
      "Ludność około 60 mln"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r04_polska_po_wojnie_mapa.jpg",
    "explanation": "Po wojnie obszar Polski wynosił około 311 tys. km², mieszkało w niej około 24 mln ludzi, granicę zachodnią wyznaczały Odra i Nysa Łużycka, a wschodnią Bug."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "II wojna światowa",
  "icon": "🌍",
  "sectionOrder": [
    "Wojna obronna Polski i okupacja",
    "Polskie Państwo Podziemne i ruch oporu",
    "Sprawa polska i Polacy na frontach",
    "Przebieg II wojny światowej",
    "Eksterminacja, Wielka Trójka i skutki wojny"
  ],
  "sectionIcons": {
    "Wojna obronna Polski i okupacja": "🛡️",
    "Polskie Państwo Podziemne i ruch oporu": "⚓",
    "Sprawa polska i Polacy na frontach": "🇵🇱",
    "Przebieg II wojny światowej": "🌐",
    "Eksterminacja, Wielka Trójka i skutki wojny": "🕊️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
