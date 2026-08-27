// Skróty sekcji (do identyfikatorów ćwiczeń):
//   HOM  = Homeostaza i gospodarka wodna
//   TER  = Termoregulacja i glukoza
//   ZDR  = Zdrowie i profilaktyka
//   CYW  = Choroby cywilizacyjne
//   ZAK  = Choroby zakaźne i leczenie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R10_HOM_01",
    "section": "Homeostaza i gospodarka wodna",
    "type": "single_choice",
    "prompt": "Czym jest homeostaza?",
    "options": [
      "Szybkim wzrostem organizmu",
      "Równowagą wewnętrzną organizmu",
      "Tylko regulacją temperatury ciała",
      "Wytwarzaniem energii w mięśniach",
      "Odpornością na wszystkie choroby",
      "Wyłącznie pracą układu nerwowego"
    ],
    "answer": 1,
    "explanation": "Homeostaza to utrzymywanie równowagi wewnętrznej organizmu, niezbędnej do jego prawidłowego funkcjonowania."
  },
  {
    "id": "R10_HOM_02",
    "section": "Homeostaza i gospodarka wodna",
    "type": "multi_select",
    "prompt": "Zaznacz parametry, których utrzymywanie na odpowiednim poziomie opisują mechanizmy regulacyjne organizmu.",
    "options": [
      "Ilość wody w organizmie",
      "Temperatura ciała",
      "Stężenie glukozy",
      "Stężenie tlenu",
      "Kolor włosów",
      "Długość kości udowej"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Mechanizmy regulacyjne utrzymują między innymi ilość wody, temperaturę ciała oraz stężenia różnych związków, takich jak glukoza i tlen."
  },
  {
    "id": "R10_HOM_03",
    "section": "Homeostaza i gospodarka wodna",
    "type": "match",
    "prompt": "Połącz element mechanizmu regulacyjnego z jego rolą.",
    "options": null,
    "answer": {
      "Receptory": "Rejestrują odchylenie wartości parametru od normy",
      "Centrum kontroli": "Odbiera informację i wysyła polecenie",
      "Efektory": "Wykonują reakcję przywracającą prawidłową wartość parametru"
    },
    "explanation": "Receptory wykrywają zmianę, centrum kontroli ją przetwarza i kieruje odpowiedź, a efektory wykonują reakcję korygującą.",
    "left": [
      "Receptory",
      "Centrum kontroli",
      "Efektory"
    ],
    "right": [
      "Wykonują reakcję przywracającą prawidłową wartość parametru",
      "Rejestrują odchylenie wartości parametru od normy",
      "Odbiera informację i wysyła polecenie"
    ]
  },
  {
    "id": "R10_HOM_04",
    "section": "Homeostaza i gospodarka wodna",
    "type": "sequence",
    "prompt": "Ułóż etapy regulacji parametru wewnętrznego od pojawienia się odchylenia do przywrócenia normy.",
    "options": null,
    "answer": [
      "Wartość parametru odchyla się od normy",
      "Receptory rejestrują zmianę",
      "Informacja trafia do centrum kontroli",
      "Centrum kontroli wysyła polecenie do efektorów",
      "Efektory przywracają prawidłową wartość parametru"
    ],
    "explanation": "Mechanizm regulacyjny przebiega od wykrycia odchylenia przez receptory, przez centrum kontroli, do reakcji efektorów przywracającej normę.",
    "items": [
      "Centrum kontroli wysyła polecenie do efektorów",
      "Receptory rejestrują zmianę",
      "Efektory przywracają prawidłową wartość parametru",
      "Wartość parametru odchyla się od normy",
      "Informacja trafia do centrum kontroli"
    ]
  },
  {
    "id": "R10_HOM_05",
    "section": "Homeostaza i gospodarka wodna",
    "type": "scenario",
    "prompt": "Po długim wysiłku i małej ilości wypitych płynów organizm ma niedobór wody. Która reakcja jest wtedy prawidłowa?",
    "options": [
      "Zwiększone odzyskiwanie wody w nerkach i zagęszczenie moczu",
      "Zwiększenie objętości moczu i częstsze jego wydalanie",
      "Zmniejszenie odczuwania pragnienia",
      "Rozszerzenie naczyń krwionośnych skóry",
      "Zwiększenie wydzielania potu",
      "Zahamowanie pracy nerek"
    ],
    "answer": 0,
    "explanation": "Przy niedoborze wody wzrasta jej odzyskiwanie w nerkach, a mocz staje się bardziej zagęszczony.",
    "image": "r10_woda_pragnienie.jpg"
  },
  {
    "id": "R10_HOM_06",
    "section": "Homeostaza i gospodarka wodna",
    "type": "true_false",
    "prompt": "Woda jest usuwana z organizmu z moczem, potem oraz z wydychanym powietrzem.",
    "options": null,
    "answer": true,
    "explanation": "Organizm traci wodę kilkoma drogami, między innymi przez mocz, pot i wydychane powietrze."
  },
  {
    "id": "R10_HOM_07",
    "section": "Homeostaza i gospodarka wodna",
    "type": "fill_in",
    "prompt": "Przy niedoborze wody odczuwamy __________, a zwiększone odzyskiwanie wody w nerkach prowadzi do __________ moczu.",
    "options": null,
    "answer": [
      "pragnienie",
      "zagęszczenia"
    ],
    "explanation": "Niedobór wody wywołuje pragnienie, a nerki odzyskują więcej wody, przez co mocz się zagęszcza.",
    "image": "r10_woda_pragnienie.jpg",
    "altAnswers": [
      [
        "pragnienie",
        "pragnienia"
      ],
      [
        "zagęszczenia",
        "zagęszczenie"
      ]
    ]
  },
  {
    "id": "R10_HOM_08",
    "section": "Homeostaza i gospodarka wodna",
    "type": "riddle",
    "prompt": "Gdzie znajdują się receptory odbierające informację o ilości wody w organizmie?",
    "options": null,
    "answer": "w naczyniach krwionośnych",
    "explanation": "Receptory wrażliwe na ilość wody znajdują się w naczyniach krwionośnych i przekazują informację do mózgowia.",
    "altAnswers": [
      "w naczyniach krwionośnych",
      "naczynia krwionośne",
      "w ścianach naczyń krwionośnych",
      "ściany naczyń krwionośnych"
    ]
  },
  {
    "id": "R10_HOM_09",
    "section": "Homeostaza i gospodarka wodna",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do reakcji organizmu na niedobór wody: pragnienie, zagęszczenie moczu, zwiększone odzyskiwanie wody w nerkach, zwiększenie objętości moczu.",
    "options": null,
    "answer": "zwiększenie objętości moczu",
    "explanation": "Zwiększenie objętości moczu występuje przy nadmiarze wody, a nie przy jej niedoborze."
  },
  {
    "id": "R10_HOM_10",
    "section": "Homeostaza i gospodarka wodna",
    "type": "single_choice",
    "prompt": "Co dzieje się z moczem, gdy w organizmie występuje nadmiar wody?",
    "options": [
      "Staje się zawsze ciemniejszy",
      "Jego objętość maleje",
      "Jego objętość rośnie i jest wydalany częściej",
      "Przestaje być produkowany",
      "Zwiększa się jego stężenie glukozy",
      "Nie zachodzi żadna zmiana"
    ],
    "answer": 2,
    "explanation": "Przy nadmiarze wody zwiększa się tempo jej usuwania, dlatego rośnie objętość moczu i częstość jego wydalania."
  },
  {
    "id": "R10_HOM_11",
    "section": "Homeostaza i gospodarka wodna",
    "type": "sort",
    "prompt": "Przyporządkuj reakcje organizmu do niedoboru albo nadmiaru wody.",
    "options": null,
    "answer": {
      "niedobór wody": [
        "odczuwanie pragnienia",
        "większe odzyskiwanie wody w nerkach",
        "zagęszczenie moczu"
      ],
      "nadmiar wody": [
        "większa objętość moczu",
        "częstsze wydalanie moczu"
      ]
    },
    "explanation": "Niedobór wody uruchamia oszczędzanie wody i pragnienie, natomiast nadmiar nasila jej wydalanie z moczem.",
    "items": [
      "większa objętość moczu",
      "odczuwanie pragnienia",
      "częstsze wydalanie moczu",
      "zagęszczenie moczu",
      "większe odzyskiwanie wody w nerkach"
    ],
    "categories": [
      "niedobór wody",
      "nadmiar wody"
    ]
  },
  {
    "id": "R10_HOM_12",
    "section": "Homeostaza i gospodarka wodna",
    "type": "true_false",
    "prompt": "Informacja o ilości wody w organizmie jest przekazywana z receptorów w naczyniach krwionośnych do mózgowia.",
    "options": null,
    "answer": true,
    "explanation": "Receptory w naczyniach krwionośnych odbierają informację o ilości wody i przekazują ją do mózgowia."
  },
  {
    "id": "R10_TER_01",
    "section": "Termoregulacja i glukoza",
    "type": "single_choice",
    "prompt": "Jaki jest prawidłowy zakres temperatury ciała?",
    "options": [
      "34-35°C",
      "35,5-37°C",
      "37,5-39°C",
      "39-41°C",
      "32-34°C",
      "40-42°C"
    ],
    "answer": 1,
    "explanation": "Dla prawidłowej pracy organizmu temperatura ciała powinna utrzymywać się w granicach 35,5-37°C."
  },
  {
    "id": "R10_TER_02",
    "section": "Termoregulacja i glukoza",
    "type": "match",
    "prompt": "Połącz element termoregulacji z jego funkcją.",
    "options": null,
    "answer": {
      "Receptory zimna i ciepła w skórze": "Rejestrują temperaturę na powierzchni ciała",
      "Receptory temperatury krwi": "Rejestrują temperaturę krwi",
      "Ośrodek termoregulacji w mózgowiu": "Odbiera informacje i kieruje reakcją narządów"
    },
    "explanation": "Informacje o temperaturze docierają do ośrodka termoregulacji z receptorów skórnych oraz receptorów rejestrujących temperaturę krwi.",
    "left": [
      "Receptory zimna i ciepła w skórze",
      "Receptory temperatury krwi",
      "Ośrodek termoregulacji w mózgowiu"
    ],
    "right": [
      "Odbiera informacje i kieruje reakcją narządów",
      "Rejestrują temperaturę krwi",
      "Rejestrują temperaturę na powierzchni ciała"
    ]
  },
  {
    "id": "R10_TER_03",
    "section": "Termoregulacja i glukoza",
    "type": "multi_select",
    "prompt": "Zaznacz reakcje organizmu chroniące przed wychłodzeniem.",
    "options": [
      "Zwężenie naczyń krwionośnych skóry",
      "Ograniczenie wydzielania potu",
      "Zmniejszenie częstości oddechów",
      "Mimowolne skurcze mięśni",
      "Zwiększenie szybkości przemiany materii",
      "Rozszerzenie naczyń krwionośnych skóry"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Przed wychłodzeniem chronią zwężenie naczyń skóry, ograniczenie potu, spadek częstości oddechów, drżenie mięśni i szybsza przemiana materii.",
    "image": "r10_termoregulacja_zimno.jpg"
  },
  {
    "id": "R10_TER_04",
    "section": "Termoregulacja i glukoza",
    "type": "multi_select",
    "prompt": "Zaznacz reakcje organizmu chroniące przed przegrzaniem.",
    "options": [
      "Rozszerzenie naczyń krwionośnych skóry",
      "Zwiększenie wydzielania potu",
      "Wzrost częstości oddechów",
      "Zwężenie naczyń krwionośnych skóry",
      "Mimowolne skurcze mięśni",
      "Ograniczenie wydzielania potu"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przy przegrzaniu naczynia skóry rozszerzają się, gruczoły potowe wydzielają więcej potu, a częstość oddechów wzrasta.",
    "image": "r10_termoregulacja_upal.jpg"
  },
  {
    "id": "R10_TER_05",
    "section": "Termoregulacja i glukoza",
    "type": "sort",
    "prompt": "Przyporządkuj reakcje termoregulacyjne do obrony przed wychłodzeniem albo przegrzaniem.",
    "options": null,
    "answer": {
      "wychłodzenie": [
        "zwężenie naczyń skóry",
        "drżenie mięśni",
        "ograniczenie wydzielania potu",
        "zmniejszenie częstości oddechów"
      ],
      "przegrzanie": [
        "rozszerzenie naczyń skóry",
        "zwiększenie wydzielania potu",
        "wzrost częstości oddechów"
      ]
    },
    "explanation": "Organizm ogranicza utratę ciepła i zwiększa jego wytwarzanie na zimnie, a w upale nasila oddawanie ciepła.",
    "items": [
      "zwiększenie wydzielania potu",
      "drżenie mięśni",
      "rozszerzenie naczyń skóry",
      "zmniejszenie częstości oddechów",
      "zwężenie naczyń skóry",
      "wzrost częstości oddechów",
      "ograniczenie wydzielania potu"
    ],
    "categories": [
      "wychłodzenie",
      "przegrzanie"
    ]
  },
  {
    "id": "R10_TER_06",
    "section": "Termoregulacja i glukoza",
    "type": "scenario",
    "prompt": "W upalny dzień temperatura ciała zaczyna rosnąć. Który zestaw reakcji pomaga zwiększyć oddawanie ciepła?",
    "options": [
      "Zwężenie naczyń i ograniczenie potu",
      "Drżenie mięśni i szybsza przemiana materii",
      "Rozszerzenie naczyń i zwiększenie wydzielania potu",
      "Zmniejszenie częstości oddechów i drżenie mięśni",
      "Zagęszczenie moczu i pragnienie",
      "Pobudzenie ośrodka głodu"
    ],
    "answer": 2,
    "explanation": "Rozszerzenie naczyń skóry zwiększa przepływ krwi przez skórę, a większe wydzielanie potu nasila utratę ciepła podczas parowania.",
    "image": "r10_termoregulacja_upal.jpg"
  },
  {
    "id": "R10_TER_07",
    "section": "Termoregulacja i glukoza",
    "type": "scenario",
    "prompt": "Osoba przebywa w zimnym otoczeniu i zaczyna mimowolnie drżeć. Jaki jest skutek tych skurczów mięśni?",
    "options": [
      "Zmniejszenie ilości wytwarzanego ciepła",
      "Powstawanie ciepła",
      "Zwiększenie utraty wody z moczem",
      "Obniżenie stężenia glukozy po posiłku",
      "Zahamowanie przepływu limfy",
      "Zmniejszenie liczby krwinek czerwonych"
    ],
    "answer": 1,
    "explanation": "Mimowolne skurcze mięśni szkieletowych powodują powstawanie ciepła i pomagają chronić organizm przed wychłodzeniem.",
    "image": "r10_termoregulacja_zimno.jpg"
  },
  {
    "id": "R10_TER_08",
    "section": "Termoregulacja i glukoza",
    "type": "fill_in",
    "prompt": "Informacje o temperaturze trafiają do ośrodka termoregulacji w __________, między innymi z receptorów __________ i ciepła w skórze.",
    "options": null,
    "answer": [
      "mózgowiu",
      "zimna"
    ],
    "explanation": "Ośrodek termoregulacji znajduje się w mózgowiu, a informacje z powierzchni ciała dostarczają receptory zimna i ciepła w skórze.",
    "altAnswers": [
      [
        "mózgowiu",
        "mózgowie"
      ],
      [
        "zimna",
        "zimno"
      ]
    ]
  },
  {
    "id": "R10_TER_09",
    "section": "Termoregulacja i glukoza",
    "type": "sequence",
    "prompt": "Ułóż reakcję organizmu na wzrost temperatury ciała.",
    "options": null,
    "answer": [
      "Temperatura ciała wzrasta",
      "Informacja dociera do ośrodka termoregulacji",
      "Zwiększa się wydzielanie potu i rozszerzają się naczynia skóry",
      "Organizm oddaje więcej ciepła",
      "Temperatura wraca w stronę prawidłowej wartości"
    ],
    "explanation": "Wzrost temperatury jest wykrywany, ośrodek termoregulacji uruchamia reakcje zwiększające utratę ciepła, a temperatura zbliża się do normy.",
    "items": [
      "Organizm oddaje więcej ciepła",
      "Temperatura ciała wzrasta",
      "Temperatura wraca w stronę prawidłowej wartości",
      "Informacja dociera do ośrodka termoregulacji",
      "Zwiększa się wydzielanie potu i rozszerzają się naczynia skóry"
    ]
  },
  {
    "id": "R10_TER_10",
    "section": "Termoregulacja i glukoza",
    "type": "single_choice",
    "prompt": "Dlaczego stężenie glukozy we krwi powinno być utrzymywane na stałym poziomie?",
    "options": [
      "Jest głównym źródłem energii dla organizmu",
      "Jest głównym składnikiem kości",
      "Tworzy gruczoły potowe",
      "Zastępuje wodę w komórkach",
      "Odpowiada za barwę krwi",
      "Jest jedynym składnikiem moczu"
    ],
    "answer": 0,
    "explanation": "Glukoza jest głównym źródłem energii dla organizmu, dlatego jej stężenie podlega regulacji.",
    "image": "r10_posilek_glukoza.jpg"
  },
  {
    "id": "R10_TER_11",
    "section": "Termoregulacja i glukoza",
    "type": "sequence",
    "prompt": "Ułóż kolejne zdarzenia regulacji stężenia glukozy od jego spadku do pobudzenia ośrodka sytości po posiłku.",
    "options": null,
    "answer": [
      "Spada stężenie glukozy we krwi",
      "Aktywuje się ośrodek głodu",
      "Pojawia się łaknienie i zostaje spożyty posiłek",
      "Wzrasta stężenie glukozy we krwi",
      "Aktywuje się ośrodek sytości i hamuje ośrodek głodu"
    ],
    "explanation": "Spadek glukozy pobudza ośrodek głodu, a po posiłku wzrost glukozy pobudza ośrodek sytości i hamuje ośrodek głodu.",
    "image": "r10_posilek_glukoza.jpg",
    "items": [
      "Wzrasta stężenie glukozy we krwi",
      "Aktywuje się ośrodek głodu",
      "Aktywuje się ośrodek sytości i hamuje ośrodek głodu",
      "Spada stężenie glukozy we krwi",
      "Pojawia się łaknienie i zostaje spożyty posiłek"
    ]
  },
  {
    "id": "R10_TER_12",
    "section": "Termoregulacja i glukoza",
    "type": "match",
    "prompt": "Połącz zmianę stężenia glukozy z reakcją ośrodków w mózgowiu.",
    "options": null,
    "answer": {
      "Niedostateczna ilość glukozy we krwi": "Aktywacja ośrodka głodu",
      "Wzrost stężenia glukozy po posiłku": "Aktywacja ośrodka sytości",
      "Pobudzenie ośrodka sytości": "Hamowanie ośrodka głodu"
    },
    "explanation": "Niski poziom glukozy pobudza ośrodek głodu, a wzrost po posiłku pobudza ośrodek sytości, który hamuje ośrodek głodu.",
    "left": [
      "Niedostateczna ilość glukozy we krwi",
      "Wzrost stężenia glukozy po posiłku",
      "Pobudzenie ośrodka sytości"
    ],
    "right": [
      "Hamowanie ośrodka głodu",
      "Aktywacja ośrodka głodu",
      "Aktywacja ośrodka sytości"
    ]
  },
  {
    "id": "R10_ZDR_01",
    "section": "Zdrowie i profilaktyka",
    "type": "single_choice",
    "prompt": "Które zdanie najlepiej opisuje zdrowie?",
    "options": [
      "Brak jakiegokolwiek zmęczenia",
      "Wyłącznie prawidłowa praca mięśni",
      "Tylko dobre samopoczucie psychiczne",
      "Równowaga wewnętrzna z prawidłową pracą narządów i dobrym samopoczuciem",
      "Całkowity brak kontaktu z drobnoustrojami",
      "Wyłącznie prawidłowa masa ciała"
    ],
    "answer": 3,
    "explanation": "Zdrowie to stan równowagi wewnętrznej, w którym narządy działają prawidłowo, a człowiek ma dobre samopoczucie."
  },
  {
    "id": "R10_ZDR_02",
    "section": "Zdrowie i profilaktyka",
    "type": "match",
    "prompt": "Połącz rodzaj zdrowia z jego opisem.",
    "options": null,
    "answer": {
      "Zdrowie fizyczne": "Prawidłowa praca wszystkich narządów",
      "Zdrowie psychiczne": "Cieszenie się z życia i radzenie sobie z codziennymi trudnościami",
      "Zdrowie społeczne": "Nawiązywanie pozytywnych relacji z ludźmi"
    },
    "explanation": "Zdrowie obejmuje wymiar fizyczny, psychiczny i społeczny, a każdy z nich dotyczy innego obszaru funkcjonowania człowieka.",
    "left": [
      "Zdrowie fizyczne",
      "Zdrowie psychiczne",
      "Zdrowie społeczne"
    ],
    "right": [
      "Nawiązywanie pozytywnych relacji z ludźmi",
      "Prawidłowa praca wszystkich narządów",
      "Cieszenie się z życia i radzenie sobie z codziennymi trudnościami"
    ]
  },
  {
    "id": "R10_ZDR_03",
    "section": "Zdrowie i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz elementy zrównoważonego trybu życia wspierające zdrowie.",
    "options": [
      "Odpowiedni sposób odżywiania",
      "Regularna aktywność fizyczna",
      "Równowaga między pracą i wypoczynkiem",
      "Higiena osobista",
      "Stały brak snu",
      "Długotrwały silny stres"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zdrowiu sprzyjają właściwe odżywianie, regularna aktywność fizyczna, odpowiednia ilość czasu na pracę i wypoczynek oraz higiena osobista."
  },
  {
    "id": "R10_ZDR_04",
    "section": "Zdrowie i profilaktyka",
    "type": "true_false",
    "prompt": "Na czynniki dziedziczne wpływające na zdrowie nie mamy bezpośredniego wpływu.",
    "options": null,
    "answer": true,
    "explanation": "Czynniki dziedziczne zależą między innymi od występowania chorób w rodzinie i nie możemy ich zmienić."
  },
  {
    "id": "R10_ZDR_05",
    "section": "Zdrowie i profilaktyka",
    "type": "scenario",
    "prompt": "W rodzinie pewnej osoby występowała określona choroba. Co może zrobić, skoro nie ma wpływu na czynniki dziedziczne?",
    "options": [
      "Zignorować wszystkie zalecenia zdrowotne",
      "Całkowicie usunąć czynniki dziedziczne",
      "Ograniczać oddziaływanie szkodliwych czynników",
      "Przestać wykonywać badania profilaktyczne",
      "Unikać wszelkiej aktywności fizycznej",
      "Stosować dowolne suplementy bez potrzeby"
    ],
    "answer": 2,
    "explanation": "Ograniczanie szkodliwych czynników może zmniejszyć ryzyko wystąpienia wielu chorób mimo obciążeń dziedzicznych."
  },
  {
    "id": "R10_ZDR_06",
    "section": "Zdrowie i profilaktyka",
    "type": "single_choice",
    "prompt": "Czym jest profilaktyka?",
    "options": [
      "Leczeniem wyłącznie antybiotykami",
      "Usuwaniem wszystkich drobnoustrojów z otoczenia",
      "Wyłącznie leczeniem nowotworów",
      "Zwiększaniem aktywności chorobotwórczych bakterii",
      "Działaniami zapobiegającymi chorobom",
      "Stosowaniem leków po terminie ważności"
    ],
    "answer": 4,
    "explanation": "Profilaktyka obejmuje działania zapobiegające chorobom, w tym badania pozwalające wcześnie wykrywać nieprawidłowości.",
    "image": "r10_badanie_profilaktyczne.jpg"
  },
  {
    "id": "R10_ZDR_07",
    "section": "Zdrowie i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady badań profilaktycznych.",
    "options": [
      "Badanie ogólne krwi",
      "Badanie ogólne moczu",
      "Badania w kierunku raka piersi",
      "Badania w kierunku raka szyjki macicy",
      "Badania w kierunku raka prostaty",
      "Pomiar długości włosów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do badań profilaktycznych zaliczono badania ogólne krwi i moczu oraz badania służące wczesnemu wykrywaniu raka piersi, szyjki macicy i prostaty.",
    "image": "r10_badanie_profilaktyczne.jpg"
  },
  {
    "id": "R10_ZDR_08",
    "section": "Zdrowie i profilaktyka",
    "type": "riddle",
    "prompt": "Jak nazywa się badanie wykonywane po to, aby możliwie wcześnie wykryć ewentualną chorobę?",
    "options": null,
    "answer": "badanie profilaktyczne",
    "explanation": "Badania profilaktyczne wykonuje się po to, by jak najwcześniej wykrywać ewentualne choroby.",
    "altAnswers": [
      "badanie profilaktyczne",
      "badania profilaktyczne",
      "profilaktyczne"
    ]
  },
  {
    "id": "R10_ZDR_09",
    "section": "Zdrowie i profilaktyka",
    "type": "single_choice",
    "prompt": "Jak zmienia się oddychanie podczas wysiłku fizycznego?",
    "options": [
      "Oddechy całkowicie ustają",
      "Maleje tylko głębokość oddechów",
      "Maleją i częstotliwość i głębokość oddechów",
      "Zmienia się tylko temperatura powietrza",
      "Nie zachodzi żadna zmiana",
      "Wzrastają częstotliwość i głębokość oddechów"
    ],
    "answer": 5,
    "explanation": "Podczas ruchu wzrastają częstotliwość i głębokość oddechów, ponieważ pracujące mięśnie potrzebują więcej tlenu i związków dostarczających energii.",
    "image": "r10_bieganie.jpg"
  },
  {
    "id": "R10_ZDR_10",
    "section": "Zdrowie i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz skutki regularnej aktywności fizycznej.",
    "options": [
      "Wzrost gęstości kości",
      "Zwiększenie pojemności płuc",
      "Wzrost elastyczności naczyń krwionośnych",
      "Zwiększenie sprawności mięśnia sercowego",
      "Lepsze dotlenienie mózgu",
      "Zmniejszenie wytrzymałości ścięgien"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Regularny ruch zwiększa między innymi gęstość kości, pojemność płuc, elastyczność naczyń, sprawność mięśnia sercowego i dotlenienie mózgu.",
    "image": "r10_bieganie.jpg"
  },
  {
    "id": "R10_ZDR_11",
    "section": "Zdrowie i profilaktyka",
    "type": "sort",
    "prompt": "Przyporządkuj wybrane skutki aktywności fizycznej do obszaru organizmu, którego dotyczą.",
    "options": null,
    "answer": {
      "układ ruchu": [
        "wzrost gęstości kości",
        "wzmocnienie mięśni grzbietu",
        "wzrost wytrzymałości ścięgien"
      ],
      "układ krążenia": [
        "wzrost liczby krwinek czerwonych",
        "wzrost elastyczności naczyń krwionośnych",
        "większa sprawność mięśnia sercowego"
      ],
      "układ oddechowy": [
        "zwiększenie pojemności płuc"
      ]
    },
    "explanation": "Aktywność fizyczna korzystnie wpływa jednocześnie na kości i mięśnie, układ krążenia oraz układ oddechowy.",
    "items": [
      "wzrost elastyczności naczyń krwionośnych",
      "wzmocnienie mięśni grzbietu",
      "zwiększenie pojemności płuc",
      "wzrost gęstości kości",
      "większa sprawność mięśnia sercowego",
      "wzrost wytrzymałości ścięgien",
      "wzrost liczby krwinek czerwonych"
    ],
    "categories": [
      "układ ruchu",
      "układ krążenia",
      "układ oddechowy"
    ]
  },
  {
    "id": "R10_ZDR_12",
    "section": "Zdrowie i profilaktyka",
    "type": "odd_one_out",
    "prompt": "Co nie jest jednym z trzech rodzajów zdrowia: zdrowie fizyczne, zdrowie psychiczne, zdrowie społeczne, termoregulacja.",
    "options": null,
    "answer": "termoregulacja",
    "explanation": "Wyróżniono zdrowie fizyczne, psychiczne i społeczne. Termoregulacja jest mechanizmem utrzymywania stałej temperatury ciała."
  },
  {
    "id": "R10_CYW_01",
    "section": "Choroby cywilizacyjne",
    "type": "single_choice",
    "prompt": "Jak nazywa się choroby związane ze zmianami środowiska i stylu życia towarzyszącymi rozwojowi cywilizacji?",
    "options": [
      "Choroby cywilizacyjne",
      "Wyłącznie choroby zakaźne",
      "Choroby pasożytnicze",
      "Tylko choroby dziedziczne",
      "Choroby termiczne",
      "Choroby sezonowe"
    ],
    "answer": 0,
    "explanation": "Choroby cywilizacyjne są wiązane ze zmianami stylu życia oraz środowiska zachodzącymi wraz z rozwojem cywilizacji."
  },
  {
    "id": "R10_CYW_02",
    "section": "Choroby cywilizacyjne",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki sprzyjające chorobom cywilizacyjnym.",
    "options": [
      "Nieprawidłowe odżywianie",
      "Zbyt mała aktywność fizyczna",
      "Zanieczyszczenie środowiska",
      "Długotrwały silny stres",
      "Regularny wypoczynek",
      "Dbanie o higienę"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Nieprawidłowe odżywianie, mała aktywność fizyczna, zanieczyszczenie środowiska oraz długotrwały silny stres mogą sprzyjać chorobom cywilizacyjnym.",
    "image": "r10_fast_food.jpg"
  },
  {
    "id": "R10_CYW_03",
    "section": "Choroby cywilizacyjne",
    "type": "match",
    "prompt": "Połącz czynnik z możliwym skutkiem zdrowotnym.",
    "options": null,
    "answer": {
      "Nadmiar tłuszczów i cholesterolu w diecie": "Choroby układu krążenia",
      "Złe odżywianie i zbyt mała aktywność fizyczna": "Otyłość",
      "Brak ruchu i siedzący tryb życia": "Wady kręgosłupa",
      "Kontakt z różnymi związkami chemicznymi z zanieczyszczeń": "Alergie"
    },
    "explanation": "Różne elementy stylu życia i środowiska prowadzą do odmiennych problemów: chorób krążenia, otyłości, wad kręgosłupa lub alergii.",
    "image": "r10_fast_food.jpg",
    "left": [
      "Nadmiar tłuszczów i cholesterolu w diecie",
      "Złe odżywianie i zbyt mała aktywność fizyczna",
      "Brak ruchu i siedzący tryb życia",
      "Kontakt z różnymi związkami chemicznymi z zanieczyszczeń"
    ],
    "right": [
      "Wady kręgosłupa",
      "Alergie",
      "Choroby układu krążenia",
      "Otyłość"
    ]
  },
  {
    "id": "R10_CYW_04",
    "section": "Choroby cywilizacyjne",
    "type": "true_false",
    "prompt": "Alergia jest nadmierną reakcją organizmu na substancje, które dla zdrowych osób są nieszkodliwe.",
    "options": null,
    "answer": true,
    "explanation": "Alergia jest nadmierną reakcją organizmu na substancje zwykle nieszkodliwe dla zdrowych osób."
  },
  {
    "id": "R10_CYW_05",
    "section": "Choroby cywilizacyjne",
    "type": "multi_select",
    "prompt": "Zaznacz objawy, które mogą towarzyszyć alergii.",
    "options": [
      "Katar",
      "Wysypka",
      "Napady duszności",
      "Nawracające dolegliwości żołądkowe",
      "Zawsze złamanie kości",
      "Zawsze utrata słuchu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Alergii mogą towarzyszyć katar, wysypka, napady duszności i nawracające dolegliwości żołądkowe."
  },
  {
    "id": "R10_CYW_06",
    "section": "Choroby cywilizacyjne",
    "type": "scenario",
    "prompt": "Osoba od dłuższego czasu żyje w pośpiechu i silnym stresie. Odczuwa lęk, napięcie, bóle głowy i ma zaburzenia snu. Na jaką chorobę mogą wskazywać te objawy?",
    "options": [
      "Gruźlica",
      "Salmonelloza",
      "Tężec",
      "Nerwica",
      "Malaria",
      "Różyczka"
    ],
    "answer": 3,
    "explanation": "Długotrwały silny stres może prowadzić do nerwicy, której towarzyszą zaburzenia emocjonalne oraz dolegliwości fizyczne."
  },
  {
    "id": "R10_CYW_07",
    "section": "Choroby cywilizacyjne",
    "type": "riddle",
    "prompt": "Jak nazywa się skupienie zmienionych komórek organizmu, które rosną i dzielą się w sposób niekontrolowany?",
    "options": null,
    "answer": "nowotwór",
    "explanation": "Nowotwory są skupieniami zmienionych komórek, które rosną i dzielą się w sposób niekontrolowany przez organizm.",
    "image": "r10_komorki_nowotworowe.jpg",
    "altAnswers": [
      "nowotwór",
      "nowotwor",
      "nowotwory"
    ]
  },
  {
    "id": "R10_CYW_08",
    "section": "Choroby cywilizacyjne",
    "type": "single_choice",
    "prompt": "Która metoda leczenia nowotworów polega na niszczeniu nowotworu promieniowaniem jonizującym?",
    "options": [
      "Szczepienie",
      "Antybiotykoterapia",
      "Radioterapia",
      "Profilaktyka",
      "Termoregulacja",
      "Suplementacja"
    ],
    "answer": 2,
    "explanation": "Radioterapia wykorzystuje promieniowanie jonizujące do niszczenia nowotworu."
  },
  {
    "id": "R10_CYW_09",
    "section": "Choroby cywilizacyjne",
    "type": "single_choice",
    "prompt": "Która metoda leczenia nowotworów polega na niszczeniu nowotworu za pomocą związków chemicznych?",
    "options": [
      "Radioterapia",
      "Szczepienie ochronne",
      "Badanie profilaktyczne",
      "Zabieg chirurgiczny",
      "Chemioterapia",
      "Termoregulacja"
    ],
    "answer": 4,
    "explanation": "Chemioterapia polega na niszczeniu nowotworu za pomocą związków chemicznych."
  },
  {
    "id": "R10_CYW_10",
    "section": "Choroby cywilizacyjne",
    "type": "match",
    "prompt": "Połącz metodę leczenia nowotworów z jej opisem.",
    "options": null,
    "answer": {
      "Zabieg chirurgiczny": "Usunięcie zmienionych chorobowo tkanek",
      "Radioterapia": "Niszczenie nowotworu promieniowaniem jonizującym",
      "Chemioterapia": "Niszczenie nowotworu związkami chemicznymi"
    },
    "explanation": "Leczenie nowotworów może obejmować zabieg chirurgiczny, radioterapię i chemioterapię, które działają w odmienny sposób.",
    "left": [
      "Zabieg chirurgiczny",
      "Radioterapia",
      "Chemioterapia"
    ],
    "right": [
      "Niszczenie nowotworu związkami chemicznymi",
      "Usunięcie zmienionych chorobowo tkanek",
      "Niszczenie nowotworu promieniowaniem jonizującym"
    ]
  },
  {
    "id": "R10_CYW_11",
    "section": "Choroby cywilizacyjne",
    "type": "multi_select",
    "prompt": "Zaznacz grupy czynników sprzyjających powstawaniu nowotworów.",
    "options": [
      "Dieta i styl życia",
      "Tytoń i inne używki",
      "Infekcje",
      "Promieniowanie UV i skażenie środowiska",
      "Czynniki dziedziczne i inne",
      "Regularna aktywność fizyczna"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do czynników sprzyjających powstawaniu nowotworów należą dieta i styl życia, tytoń i inne używki, infekcje, promieniowanie UV i skażenie środowiska oraz czynniki dziedziczne i inne.",
    "image": "r10_komorki_nowotworowe.jpg"
  },
  {
    "id": "R10_CYW_12",
    "section": "Choroby cywilizacyjne",
    "type": "fill_in",
    "prompt": "Nowotwory są skupieniami __________ komórek, które rosną i dzielą się w sposób __________.",
    "options": null,
    "answer": [
      "zmienionych",
      "niekontrolowany"
    ],
    "explanation": "Nowotwór tworzą zmienione komórki, których wzrost i podziały nie są prawidłowo kontrolowane przez organizm.",
    "image": "r10_komorki_nowotworowe.jpg",
    "altAnswers": [
      [
        "zmienionych",
        "zmienione"
      ],
      [
        "niekontrolowany",
        "niekontrolowany sposób"
      ]
    ]
  },
  {
    "id": "R10_ZAK_01",
    "section": "Choroby zakaźne i leczenie",
    "type": "multi_select",
    "prompt": "Zaznacz grupy czynników chorobotwórczych mogących wywoływać choroby zakaźne.",
    "options": [
      "Wirusy",
      "Bakterie",
      "Grzyby",
      "Protisty",
      "Zwierzęta pasożytnicze",
      "Krwinki czerwone"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Choroby zakaźne mogą być wywoływane przez wirusy, bakterie, grzyby, protisty oraz zwierzęta pasożytnicze."
  },
  {
    "id": "R10_ZAK_02",
    "section": "Choroby zakaźne i leczenie",
    "type": "match",
    "prompt": "Połącz przykład z odpowiednią grupą czynnika chorobotwórczego.",
    "options": null,
    "answer": {
      "Grypa": "Wirusy",
      "Gruźlica": "Bakterie",
      "Grzybica skóry": "Grzyby",
      "Malaria": "Protisty",
      "Tasiemce": "Zwierzęta pasożytnicze"
    },
    "explanation": "Grypa jest wywoływana przez wirusy, gruźlica przez bakterie, grzybice przez grzyby, malaria przez protisty, a tasiemce należą do zwierząt pasożytniczych.",
    "left": [
      "Grypa",
      "Gruźlica",
      "Grzybica skóry",
      "Malaria",
      "Tasiemce"
    ],
    "right": [
      "Protisty",
      "Bakterie",
      "Zwierzęta pasożytnicze",
      "Wirusy",
      "Grzyby"
    ]
  },
  {
    "id": "R10_ZAK_03",
    "section": "Choroby zakaźne i leczenie",
    "type": "match",
    "prompt": "Połącz chorobę z drogą jej przenoszenia.",
    "options": null,
    "answer": {
      "Grypa": "Droga kropelkowa",
      "Salmonelloza": "Droga pokarmowa",
      "Kiła": "Kontakty seksualne",
      "Malaria": "Przez krew"
    },
    "explanation": "Grypa przenosi się drogą kropelkową, salmonelloza drogą pokarmową, kiła przez kontakty seksualne, a malaria przez krew.",
    "left": [
      "Grypa",
      "Salmonelloza",
      "Kiła",
      "Malaria"
    ],
    "right": [
      "Przez krew",
      "Droga pokarmowa",
      "Droga kropelkowa",
      "Kontakty seksualne"
    ]
  },
  {
    "id": "R10_ZAK_04",
    "section": "Choroby zakaźne i leczenie",
    "type": "single_choice",
    "prompt": "Które działanie może zapobiegać niektórym chorobom zakaźnym?",
    "options": [
      "Przerywanie kuracji antybiotykowej",
      "Stosowanie leków po terminie ważności",
      "Unikanie czytania ulotek",
      "Zwiększanie dawki leku samodzielnie",
      "Rezygnacja z profilaktyki",
      "Szczepienia ochronne"
    ],
    "answer": 5,
    "explanation": "Niektórym chorobom zakaźnym można zapobiegać dzięki szczepieniom ochronnym.",
    "image": "r10_szczepienie.jpg"
  },
  {
    "id": "R10_ZAK_05",
    "section": "Choroby zakaźne i leczenie",
    "type": "multi_select",
    "prompt": "Zaznacz choroby objęte w Polsce obowiązkowymi szczepieniami dzieci.",
    "options": [
      "Gruźlica",
      "Odra",
      "Różyczka",
      "Grypa",
      "Malaria",
      "Salmonelloza"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do obowiązkowych szczepień dzieci należą między innymi szczepienia przeciw gruźlicy, odrze i różyczce.",
    "image": "r10_szczepienie.jpg"
  },
  {
    "id": "R10_ZAK_06",
    "section": "Choroby zakaźne i leczenie",
    "type": "scenario",
    "prompt": "Przed nadejściem chłodów wzrasta ryzyko kontaktu z wirusem grypy. Jakie działanie profilaktyczne zmniejsza ryzyko zachorowania?",
    "options": [
      "Przerwanie wszystkich szczepień",
      "Szczepienie przeciw grypie",
      "Przyjmowanie antybiotyku bez zaleceń",
      "Stosowanie przeterminowanych leków",
      "Unikanie badań profilaktycznych",
      "Zwiększenie dawki suplementów"
    ],
    "answer": 1,
    "explanation": "Przed okresem zwiększonego ryzyka zachorowania na grypę zalecono rozważenie szczepienia nieobowiązkowego przeciw grypie.",
    "image": "r10_szczepienie.jpg"
  },
  {
    "id": "R10_ZAK_07",
    "section": "Choroby zakaźne i leczenie",
    "type": "single_choice",
    "prompt": "Na jakie czynniki chorobotwórcze działają antybiotyki?",
    "options": [
      "Bakterie",
      "Wirusy",
      "Wszystkie pasożyty",
      "Wyłącznie protisty",
      "Pył PM2,5",
      "Komórki kości"
    ],
    "answer": 0,
    "explanation": "Antybiotyki są substancjami działającymi antybakteryjnie, czyli przeciw bakteriom.",
    "image": "r10_antybiotyk.jpg"
  },
  {
    "id": "R10_ZAK_08",
    "section": "Choroby zakaźne i leczenie",
    "type": "sequence",
    "prompt": "Ułóż możliwy ciąg zdarzeń po zbyt wczesnym przerwaniu kuracji antybiotykowej.",
    "options": null,
    "answer": [
      "Objawy choroby ustępują",
      "Kuracja zostaje przerwana przedwcześnie",
      "Nie wszystkie chorobotwórcze bakterie zostają zniszczone",
      "Ocalałe bakterie mogą uodpornić się na antybiotyk",
      "Choroba może po pewnym czasie pojawić się ponownie i być trudniejsza do zwalczenia"
    ],
    "explanation": "Przerwanie kuracji po ustąpieniu objawów może pozostawić żywe bakterie, które mogą nabyć odporność i ponownie wywołać chorobę.",
    "image": "r10_antybiotyk.jpg",
    "items": [
      "Nie wszystkie chorobotwórcze bakterie zostają zniszczone",
      "Objawy choroby ustępują",
      "Choroba może po pewnym czasie pojawić się ponownie i być trudniejsza do zwalczenia",
      "Kuracja zostaje przerwana przedwcześnie",
      "Ocalałe bakterie mogą uodpornić się na antybiotyk"
    ]
  },
  {
    "id": "R10_ZAK_09",
    "section": "Choroby zakaźne i leczenie",
    "type": "true_false",
    "prompt": "Kuracji antybiotykowej nie należy przerywać tylko dlatego, że ustąpiły objawy choroby.",
    "options": null,
    "answer": true,
    "explanation": "Antybiotyk trzeba przyjmować zgodnie z zaleceniami lekarza, także po ustąpieniu objawów, aby zniszczyć chorobotwórcze bakterie.",
    "image": "r10_antybiotyk.jpg"
  },
  {
    "id": "R10_ZAK_10",
    "section": "Choroby zakaźne i leczenie",
    "type": "scenario",
    "prompt": "Osoba chce przyjąć ogólnodostępny lek na ból głowy. Co powinna zrobić przed jego zażyciem?",
    "options": [
      "Zawsze podwoić dawkę",
      "Sprawdzić tylko kolor opakowania",
      "Połączyć go z dowolnym suplementem",
      "Uważnie przeczytać ulotkę",
      "Zignorować termin ważności",
      "Przerwać wszystkie inne zalecenia lekarskie"
    ],
    "answer": 3,
    "explanation": "Przed zażyciem leku ogólnodostępnego należy uważnie przeczytać dołączoną ulotkę, ponieważ lek może powodować skutki uboczne i ma określone zasady stosowania.",
    "image": "r10_ulotka_leku.jpg"
  },
  {
    "id": "R10_ZAK_11",
    "section": "Choroby zakaźne i leczenie",
    "type": "multi_select",
    "prompt": "Jakie informacje znajdują się w ulotkach dołączanych do leków i suplementów diety?",
    "options": [
      "Skład",
      "Bezpieczny sposób stosowania",
      "Możliwe skutki uboczne",
      "Prognoza pogody",
      "Plan lekcji",
      "Wyniki zawodów sportowych"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ulotka zawiera między innymi informacje o składzie, bezpiecznym sposobie stosowania oraz możliwych skutkach ubocznych.",
    "image": "r10_ulotka_leku.jpg"
  },
  {
    "id": "R10_ZAK_12",
    "section": "Choroby zakaźne i leczenie",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do zasad bezpiecznego stosowania leków i suplementów: przeczytać ulotkę, sprawdzić termin ważności, stosować tylko gdy jest potrzeba, samodzielnie podwoić dawkę.",
    "options": null,
    "answer": "samodzielnie podwoić dawkę",
    "explanation": "Leków nie należy przyjmować w większej dawce według własnego uznania. Trzeba przestrzegać zasad bezpiecznego stosowania i zaleceń lekarza.",
    "image": "r10_ulotka_leku.jpg"
  },
  {
    "id": "R10_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki udział procentowy w czynnikach sprzyjających powstawaniu nowotworów ma dieta i styl życia?",
    "options": [
      "4%",
      "21%",
      "35%",
      "5%",
      "50%",
      "65%"
    ],
    "answer": 2,
    "explanation": "Dieta i styl życia stanowią 35% czynników sprzyjających powstawaniu nowotworów."
  },
  {
    "id": "R10_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki udział procentowy w czynnikach sprzyjających powstawaniu nowotworów ma tytoń i inne używki?",
    "options": [
      "5%",
      "21%",
      "35%",
      "4%",
      "10%",
      "70%"
    ],
    "answer": 2,
    "explanation": "Tytoń i inne używki stanowią 35% czynników sprzyjających powstawaniu nowotworów."
  },
  {
    "id": "R10_HARD_03",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę czynników sprzyjających nowotworom z jej udziałem procentowym.",
    "options": null,
    "answer": {
      "Infekcje": "5%",
      "Promieniowanie UV i skażenie środowiska": "4%",
      "Czynniki dziedziczne i inne": "21%",
      "Dieta i styl życia": "35%"
    },
    "explanation": "Infekcje stanowią 5%, promieniowanie UV i skażenie środowiska 4%, czynniki dziedziczne i inne 21%, a dieta i styl życia 35%.",
    "left": [
      "Infekcje",
      "Promieniowanie UV i skażenie środowiska",
      "Czynniki dziedziczne i inne",
      "Dieta i styl życia"
    ],
    "right": [
      "35%",
      "4%",
      "21%",
      "5%"
    ]
  },
  {
    "id": "R10_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które reakcje na zimno przede wszystkim zmniejszają oddawanie ciepła do otoczenia?",
    "options": [
      "Zwężenie naczyń krwionośnych skóry",
      "Ograniczenie wydzielania potu",
      "Zmniejszenie częstości oddechów",
      "Mimowolne skurcze mięśni",
      "Zwiększenie szybkości przemiany materii",
      "Pobudzenie ośrodka sytości"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Zwężenie naczyń skóry, ograniczenie wydzielania potu i zmniejszenie częstości oddechów ograniczają utratę ciepła. Drżenie mięśni i szybsza przemiana materii zwiększają jego wytwarzanie.",
    "image": "r10_termoregulacja_zimno.jpg"
  },
  {
    "id": "R10_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel reakcje obronne przed wychłodzeniem na te, które ograniczają utratę ciepła, i te, które zwiększają jego wytwarzanie.",
    "options": null,
    "answer": {
      "ograniczają utratę ciepła": [
        "zwężenie naczyń skóry",
        "ograniczenie wydzielania potu",
        "zmniejszenie częstości oddechów"
      ],
      "zwiększają wytwarzanie ciepła": [
        "mimowolne skurcze mięśni",
        "zwiększenie szybkości przemiany materii"
      ]
    },
    "explanation": "Na zimnie organizm zarówno ogranicza utratę ciepła, jak i zwiększa jego produkcję przez pracę mięśni i szybszą przemianę materii.",
    "image": "r10_termoregulacja_zimno.jpg",
    "items": [
      "mimowolne skurcze mięśni",
      "zwężenie naczyń skóry",
      "zwiększenie szybkości przemiany materii",
      "zmniejszenie częstości oddechów",
      "ograniczenie wydzielania potu"
    ],
    "categories": [
      "ograniczają utratę ciepła",
      "zwiększają wytwarzanie ciepła"
    ]
  },
  {
    "id": "R10_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Co może się dziać przy gorączce około 38-38,5°C?",
    "options": [
      "Mechanizmy odpornościowe zostają całkowicie wyłączone",
      "Mechanizmy odpornościowe zwiększają aktywność i przyspiesza metabolizm",
      "Zawsze dochodzi do nieodwracalnego uszkodzenia mózgu",
      "Temperatura automatycznie spada do 35°C",
      "Zatrzymuje się przemiana materii",
      "Zawsze dochodzi do uszkodzenia wszystkich tkanek"
    ],
    "answer": 1,
    "explanation": "Przy temperaturze 38-38,5°C mechanizmy odpornościowe są pobudzane do większej aktywności, a metabolizm przyspiesza."
  },
  {
    "id": "R10_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki skutek przypisano temperaturze ciała około 42-43°C?",
    "options": [
      "Wyłącznie wzrost apetytu",
      "Tylko zwiększenie potliwości bez innych skutków",
      "Zwiększenie gęstości kości",
      "Pobudzenie ośrodka sytości",
      "Zaburzenie mechanizmów termoregulacji i nieodwracalne uszkodzenie mózgu",
      "Zmniejszenie liczby bakterii bez ryzyka dla organizmu"
    ],
    "answer": 4,
    "explanation": "Temperatura około 42-43°C może zaburzać mechanizmy regulacyjne ośrodka termoregulacji i prowadzić do nieodwracalnego uszkodzenia mózgu."
  },
  {
    "id": "R10_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Trzustka produkuje zbyt mało insuliny albo komórki przestają na nią reagować. Co stanie się ze stężeniem glukozy we krwi?",
    "options": [
      "Wzrośnie",
      "Zawsze spadnie do zera",
      "Nie może się zmienić",
      "Zamieni się w temperaturę ciała",
      "Spadnie wyłącznie wskutek pocenia",
      "Zależy tylko od ilości wody w organizmie"
    ],
    "answer": 0,
    "explanation": "Insulina wytwarzana przez trzustkę reguluje przenikanie cukru ze strawionego pokarmu do komórek. Jej niedobór lub brak reakcji komórek powoduje wzrost poziomu glukozy we krwi.",
    "image": "r10_posilek_glukoza.jpg"
  },
  {
    "id": "R10_HARD_09",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz część organizmu ze skutkiem regularnej aktywności fizycznej.",
    "options": null,
    "answer": {
      "Mózg": "Lepsze dotlenienie i większa efektywność myślenia",
      "Mięsień sercowy": "Większa wytrzymałość i sprawność",
      "Płuca": "Większa pojemność",
      "Węzły chłonne": "Większy przepływ limfy usprawniający reakcje obronne"
    },
    "explanation": "Regularny ruch poprawia dotlenienie mózgu, sprawność serca, pojemność płuc i przepływ limfy przez węzły chłonne.",
    "image": "r10_bieganie.jpg",
    "left": [
      "Mózg",
      "Mięsień sercowy",
      "Płuca",
      "Węzły chłonne"
    ],
    "right": [
      "Większa pojemność",
      "Lepsze dotlenienie i większa efektywność myślenia",
      "Większy przepływ limfy usprawniający reakcje obronne",
      "Większa wytrzymałość i sprawność"
    ]
  },
  {
    "id": "R10_HARD_10",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do odpowiedniej drogi przenoszenia.",
    "options": null,
    "answer": {
      "droga kropelkowa": [
        "grypa",
        "gruźlica"
      ],
      "droga pokarmowa": [
        "salmonelloza",
        "tasiemce"
      ],
      "przez krew": [
        "malaria",
        "tężec"
      ],
      "kontakty seksualne": [
        "kiła",
        "rzeżączka"
      ]
    },
    "explanation": "Tabela łączy grypę i gruźlicę z drogą kropelkową, salmonellozę i tasiemce z drogą pokarmową, malarię i tężec z krwią, a kiłę i rzeżączkę z kontaktami seksualnymi.",
    "items": [
      "malaria",
      "grypa",
      "rzeżączka",
      "salmonelloza",
      "tężec",
      "kiła",
      "gruźlica",
      "tasiemce"
    ],
    "categories": [
      "droga kropelkowa",
      "droga pokarmowa",
      "przez krew",
      "kontakty seksualne"
    ]
  },
  {
    "id": "R10_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Prawidłowa temperatura ciała mieści się w granicach __________, a ośrodek odpowiedzialny za jej regulację znajduje się w __________.",
    "options": null,
    "answer": [
      "35,5-37°C",
      "mózgowiu"
    ],
    "explanation": "Prawidłowa temperatura ciała wynosi 35,5-37°C, a ośrodek termoregulacji znajduje się w mózgowiu.",
    "altAnswers": [
      [
        "35,5-37°C",
        "35,5–37°C",
        "35,5-37 C",
        "35,5–37 C"
      ],
      [
        "mózgowiu",
        "mózgowie"
      ]
    ]
  },
  {
    "id": "R10_HARD_12",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Która choroba nie pasuje do przykładów obowiązkowych szczepień dzieci: gruźlica, odra, różyczka, grypa.",
    "options": null,
    "answer": "grypa",
    "explanation": "Szczepienia przeciw gruźlicy, odrze i różyczce są obowiązkowe, natomiast szczepienie przeciw grypie może być nieobowiązkowe i zalecane przy zwiększonym ryzyku."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r10",
  "number": 10,
  "title": "Równowaga wewnętrzna organizmu",
  "icon": "⚖️",
  "sectionOrder": [
    "Homeostaza i gospodarka wodna",
    "Termoregulacja i glukoza",
    "Zdrowie i profilaktyka",
    "Choroby cywilizacyjne",
    "Choroby zakaźne i leczenie"
  ],
  "sectionIcons": {
    "Homeostaza i gospodarka wodna": "⚖️",
    "Termoregulacja i glukoza": "🌡️",
    "Zdrowie i profilaktyka": "❤️",
    "Choroby cywilizacyjne": "🏙️",
    "Choroby zakaźne i leczenie": "🛡️"
  },
  "exercises": ALL_EXERCISES,
  "kidPrompts": KID_PROMPTS
};

export default chapter;
