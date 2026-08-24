// Skróty sekcji (do identyfikatorów ćwiczeń):
//   HMT  = Homeostaza i termoregulacja
//   NAW  = Nawodnienie i równowaga organizmu
//   OBS  = Obserwacja organizmu
//   LEK  = Leki, suplementy i ulotka
//   ANT  = Antybiotyki i bezpieczne leczenie
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R07_HMT_01",
    "section": "Homeostaza i termoregulacja",
    "type": "single_choice",
    "prompt": "Czym jest homeostaza?",
    "options": [
      "Zdolnością organizmu do utrzymywania stabilnych warunków wewnętrznych",
      "Stałym zwiększaniem temperatury ciała",
      "Procesem trawienia pokarmu",
      "Wyłącznie obroną przed bakteriami",
      "Zdolnością do zatrzymywania całej wody w organizmie",
      "Jednorazową reakcją na wysiłek"
    ],
    "answer": 0,
    "explanation": "Homeostaza to zdolność organizmu do utrzymywania stanu wewnętrznej równowagi mimo zmian warunków wewnętrznych i zewnętrznych."
  },
  {
    "id": "R07_HMT_02",
    "section": "Homeostaza i termoregulacja",
    "type": "multi_select",
    "prompt": "Zaznacz parametry środowiska wewnętrznego, których stały poziom pomaga utrzymać homeostazę.",
    "options": [
      "temperatura ciała",
      "poziom glukozy we krwi",
      "poziom tlenu we krwi",
      "nawodnienie",
      "kolor włosów",
      "wzrost ciała"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do warunków wymagających stabilizacji należą m.in. temperatura około 36,6°C, poziom glukozy i tlenu we krwi oraz odpowiednie nawodnienie."
  },
  {
    "id": "R07_HMT_03",
    "section": "Homeostaza i termoregulacja",
    "type": "true_false",
    "prompt": "Utrzymanie homeostazy jest wspólnym celem współpracy układów i narządów organizmu.",
    "options": null,
    "answer": true,
    "explanation": "Współpraca wielu układów i narządów pozwala utrzymywać stabilne warunki wewnętrzne organizmu."
  },
  {
    "id": "R07_HMT_04",
    "section": "Homeostaza i termoregulacja",
    "type": "fill_in",
    "prompt": "Optymalna temperatura ciała wynosi około __________ °C.",
    "options": null,
    "answer": [
      "36,6"
    ],
    "altAnswers": [
      [
        "36,6",
        "36.6"
      ]
    ],
    "explanation": "Optymalna temperatura ciała wynosi około 36,6°C."
  },
  {
    "id": "R07_HMT_05",
    "section": "Homeostaza i termoregulacja",
    "type": "riddle",
    "prompt": "Jak nazywa się przywracanie optymalnej temperatury ciała?",
    "options": null,
    "answer": "termoregulacja",
    "altAnswers": [
      "termoregulacja"
    ],
    "image": "r07_termometr_skora_zimno.jpg",
    "explanation": "Termoregulacja to mechanizm przywracania optymalnej temperatury ciała."
  },
  {
    "id": "R07_HMT_06",
    "section": "Homeostaza i termoregulacja",
    "type": "odd_one_out",
    "prompt": "Wskaż element nieuczestniczący w termoregulacji: receptory temperatury w skórze, układ nerwowy, układ krwionośny, gruczoły potowe, szkliwo zębów.",
    "options": null,
    "answer": "szkliwo zębów",
    "explanation": "Receptory temperatury, układ nerwowy, naczynia krwionośne, gruczoły potowe i mięśnie uczestniczą w termoregulacji; szkliwo zębów nie jest elementem tego mechanizmu."
  },
  {
    "id": "R07_HMT_07",
    "section": "Homeostaza i termoregulacja",
    "type": "scenario",
    "prompt": "Podczas upału temperatura ciała zaczyna rosnąć powyżej 37°C. Która reakcja pomaga oddać więcej ciepła do otoczenia?",
    "options": [
      "Rozszerzenie naczyń krwionośnych w skórze",
      "Zwężenie naczyń krwionośnych w skórze",
      "Zatrzymanie wydzielania potu",
      "Wywołanie dreszczy",
      "Zmniejszenie przepływu krwi przez skórę",
      "Zahamowanie parowania wody ze skóry"
    ],
    "answer": 0,
    "image": "r07_upal_pocenie.jpg",
    "explanation": "Przy przegrzaniu naczynia krwionośne w skórze rozszerzają się, dzięki czemu organizm oddaje do otoczenia więcej ciepła."
  },
  {
    "id": "R07_HMT_08",
    "section": "Homeostaza i termoregulacja",
    "type": "match",
    "prompt": "Połącz sytuację termiczną z reakcją organizmu.",
    "options": null,
    "left": [
      "wyziębienie",
      "przegrzanie",
      "dreszcze",
      "parowanie potu"
    ],
    "right": [
      "zwężenie naczyń w skórze",
      "rozszerzenie naczyń w skórze",
      "wytwarzanie energii do ogrzania ciała",
      "ochładzanie skóry"
    ],
    "answer": {
      "wyziębienie": "zwężenie naczyń w skórze",
      "przegrzanie": "rozszerzenie naczyń w skórze",
      "dreszcze": "wytwarzanie energii do ogrzania ciała",
      "parowanie potu": "ochładzanie skóry"
    },
    "explanation": "Przy wyziębieniu naczynia skórne się zwężają i pojawiają się dreszcze; przy przegrzaniu naczynia się rozszerzają, a parowanie potu ochładza skórę."
  },
  {
    "id": "R07_HMT_09",
    "section": "Homeostaza i termoregulacja",
    "type": "sort",
    "prompt": "Przyporządkuj reakcje do wyziębienia lub przegrzania.",
    "options": null,
    "items": [
      "zwężenie naczyń krwionośnych",
      "brak wydzielania potu",
      "dreszcze",
      "rozszerzenie naczyń krwionośnych",
      "wydzielanie potu"
    ],
    "categories": [
      "wyziębienie",
      "przegrzanie"
    ],
    "answer": {
      "wyziębienie": [
        "zwężenie naczyń krwionośnych",
        "brak wydzielania potu",
        "dreszcze"
      ],
      "przegrzanie": [
        "rozszerzenie naczyń krwionośnych",
        "wydzielanie potu"
      ]
    },
    "explanation": "W zimnie organizm ogranicza utratę ciepła i wytwarza je dzięki dreszczom, a w przegrzaniu zwiększa oddawanie ciepła i chłodzi skórę potem."
  },
  {
    "id": "R07_HMT_10",
    "section": "Homeostaza i termoregulacja",
    "type": "sequence",
    "prompt": "Ułóż etapy reakcji termoregulacyjnej od wykrycia zmiany do działania narządów wykonawczych.",
    "options": null,
    "items": [
      "Mózg uruchamia odpowiednią reakcję",
      "Receptory temperatury wykrywają zmianę",
      "Naczynia skórne gruczoły potowe lub mięśnie zmieniają działanie",
      "Informacja o zmianie dociera do mózgu"
    ],
    "answer": [
      "Receptory temperatury wykrywają zmianę",
      "Informacja o zmianie dociera do mózgu",
      "Mózg uruchamia odpowiednią reakcję",
      "Naczynia skórne gruczoły potowe lub mięśnie zmieniają działanie"
    ],
    "explanation": "Receptory najpierw wykrywają zmianę temperatury i przekazują informację do mózgu, który uruchamia naczynia krwionośne w skórze, gruczoły potowe lub mięśnie."
  },
  {
    "id": "R07_HMT_11",
    "section": "Homeostaza i termoregulacja",
    "type": "single_choice",
    "prompt": "Co dzieje się z gruczołami potowymi podczas wyziębienia?",
    "options": [
      "Nie wydzielają potu",
      "Wydzielają więcej potu",
      "Zaczynają produkować glukozę",
      "Rozszerzają naczynia krwionośne",
      "Wywołują uczucie głodu",
      "Zwiększają oddawanie moczu"
    ],
    "answer": 0,
    "image": "r07_termometr_skora_zimno.jpg",
    "explanation": "Przy wyziębieniu gruczoły potowe nie wydzielają potu, aby parowanie nie ochładzało skóry."
  },
  {
    "id": "R07_NAW_01",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "single_choice",
    "prompt": "Dlaczego utrzymanie odpowiedniego nawodnienia jest ważne?",
    "options": [
      "Woda wchodzi w skład każdej komórki i jest potrzebna do procesów w organizmie",
      "Woda jest potrzebna tylko do chłodzenia skóry",
      "Woda występuje wyłącznie we krwi",
      "Woda nie bierze udziału w procesach komórkowych",
      "Woda służy jedynie do wydalania moczu",
      "Woda jest magazynowana tylko w płucach"
    ],
    "answer": 0,
    "image": "r07_szklanka_wody.jpg",
    "explanation": "Woda wchodzi w skład każdej komórki i jest potrzebna do przebiegu procesów zachodzących w organizmie."
  },
  {
    "id": "R07_NAW_02",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "multi_select",
    "prompt": "Które narządy lub struktury przede wszystkim biorą udział w regulowaniu zawartości wody w organizmie?",
    "options": [
      "nerki",
      "skóra",
      "płuca",
      "włosy",
      "paznokcie"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "W regulowaniu zawartości wody w organizmie biorą udział przede wszystkim nerki, skóra i płuca."
  },
  {
    "id": "R07_NAW_03",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "true_false",
    "prompt": "Długotrwałe pocenie się podczas upału lub wysokiej gorączki może doprowadzić do odwodnienia.",
    "options": null,
    "answer": true,
    "explanation": "Utrata zbyt dużej ilości wody, np. przez długotrwałe pocenie się, może prowadzić do odwodnienia."
  },
  {
    "id": "R07_NAW_04",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "fill_in",
    "prompt": "Utrata zbyt dużej ilości wody prowadzi do __________.",
    "options": null,
    "answer": [
      "odwodnienia"
    ],
    "altAnswers": [
      [
        "odwodnienia",
        "odwodnienie"
      ]
    ],
    "image": "r07_szklanka_wody.jpg",
    "explanation": "Odwodnienie jest skutkiem utraty zbyt dużej ilości wody z organizmu."
  },
  {
    "id": "R07_NAW_05",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "riddle",
    "prompt": "Jakie uczucie uruchamia mózg, gdy organizm potrzebuje uzupełnić wodę?",
    "options": null,
    "answer": "pragnienie",
    "altAnswers": [
      "pragnienie",
      "uczucie pragnienia"
    ],
    "explanation": "Przy zbyt niskim poziomie wody i spadku ciśnienia krwi mózg może uruchomić ośrodek pragnienia."
  },
  {
    "id": "R07_NAW_06",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "odd_one_out",
    "prompt": "Wskaż przyczynę niepasującą do typowych przyczyn odwodnienia: długotrwałe pocenie się, wymioty, biegunka, picie wody.",
    "options": null,
    "answer": "picie wody",
    "explanation": "Długotrwałe pocenie się, wymioty i biegunka mogą powodować utratę wody; picie wody pomaga ją uzupełniać."
  },
  {
    "id": "R07_NAW_07",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "scenario",
    "prompt": "Po długim pobycie w upale ktoś intensywnie się pocił i ma zbyt niski poziom wody. Która reakcja nerek pomaga odzyskać równowagę?",
    "options": [
      "Zagęszczanie moczu i rzadsze wydalanie",
      "Rozcieńczanie moczu i częstsze wydalanie",
      "Zwiększanie utraty wody przez skórę",
      "Zatrzymanie odczuwania pragnienia",
      "Rozszerzanie naczyń tylko w płucach",
      "Zwiększanie wydzielania potu"
    ],
    "answer": 0,
    "explanation": "W odpowiedzi na niedobór wody nerki zagęszczają mocz i zmniejszają częstotliwość jego wydalania."
  },
  {
    "id": "R07_NAW_08",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "match",
    "prompt": "Połącz zmianę z jej skutkiem lub reakcją organizmu.",
    "options": null,
    "left": [
      "zbyt niski poziom wody",
      "obniżenie ciśnienia krwi",
      "ośrodek pragnienia",
      "nerki"
    ],
    "right": [
      "odwodnienie",
      "wolniejsze dostarczanie tlenu i glukozy",
      "sięgnięcie po wodę",
      "zagęszczenie moczu"
    ],
    "answer": {
      "zbyt niski poziom wody": "odwodnienie",
      "obniżenie ciśnienia krwi": "wolniejsze dostarczanie tlenu i glukozy",
      "ośrodek pragnienia": "sięgnięcie po wodę",
      "nerki": "zagęszczenie moczu"
    },
    "explanation": "Niedobór wody prowadzi do odwodnienia i może obniżyć ciśnienie krwi; mózg wywołuje pragnienie, a nerki ograniczają utratę wody."
  },
  {
    "id": "R07_NAW_09",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do przyczyn odwodnienia lub reakcji przywracających nawodnienie.",
    "options": null,
    "items": [
      "długotrwałe pocenie się",
      "wymioty",
      "biegunka",
      "uczucie pragnienia",
      "zagęszczenie moczu",
      "rzadsze oddawanie moczu"
    ],
    "categories": [
      "przyczyny odwodnienia",
      "reakcje przywracające nawodnienie"
    ],
    "answer": {
      "przyczyny odwodnienia": [
        "długotrwałe pocenie się",
        "wymioty",
        "biegunka"
      ],
      "reakcje przywracające nawodnienie": [
        "uczucie pragnienia",
        "zagęszczenie moczu",
        "rzadsze oddawanie moczu"
      ]
    },
    "explanation": "Pocenie się, wymioty i biegunka zwiększają utratę wody, natomiast pragnienie i działanie nerek pomagają ją uzupełnić lub ograniczyć dalsze straty."
  },
  {
    "id": "R07_NAW_10",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "sequence",
    "prompt": "Ułóż ciąg zdarzeń prowadzący od niedoboru wody do reakcji przywracającej nawodnienie.",
    "options": null,
    "items": [
      "Mózg uruchamia ośrodek pragnienia i reakcję nerek",
      "Poziom wody w organizmie spada",
      "Pojawia się sięgnięcie po wodę i ograniczenie jej utraty",
      "Ciśnienie krwi może się obniżyć"
    ],
    "answer": [
      "Poziom wody w organizmie spada",
      "Ciśnienie krwi może się obniżyć",
      "Mózg uruchamia ośrodek pragnienia i reakcję nerek",
      "Pojawia się sięgnięcie po wodę i ograniczenie jej utraty"
    ],
    "explanation": "Niedobór wody może obniżyć ciśnienie krwi, co jest sygnałem dla mózgu do uruchomienia pragnienia i działań nerek ograniczających utratę wody."
  },
  {
    "id": "R07_NAW_11",
    "section": "Nawodnienie i równowaga organizmu",
    "type": "multi_select",
    "prompt": "Zaznacz objawy lub sygnały, które mogą towarzyszyć odwodnieniu.",
    "options": [
      "pragnienie",
      "sucha skóra",
      "rzadkie oddawanie moczu",
      "ból głowy",
      "pęcherze na skórze",
      "dokuczliwe swędzenie"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do sygnałów odwodnienia należą m.in. pragnienie, sucha skóra, rzadkie oddawanie moczu i ból głowy."
  },
  {
    "id": "R07_OBS_01",
    "section": "Obserwacja organizmu",
    "type": "single_choice",
    "prompt": "Po co warto obserwować swój organizm?",
    "options": [
      "Aby znać jego typowe funkcjonowanie i zauważać niepokojące zmiany",
      "Aby samodzielnie stawiać diagnozy",
      "Aby każdą zmianę uznawać za chorobę",
      "Aby unikać rozmowy z lekarzem",
      "Aby zastąpić badania medyczne",
      "Aby szukać w Internecie najgroźniejszej choroby"
    ],
    "answer": 0,
    "explanation": "Regularna obserwacja pomaga poznać typowe samopoczucie i zauważyć nagłe, długotrwałe lub nieuzasadnione zmiany, które warto skonsultować."
  },
  {
    "id": "R07_OBS_02",
    "section": "Obserwacja organizmu",
    "type": "multi_select",
    "prompt": "Które sygnały organizmu mogą wymagać szczególnej uwagi, gdy są nietypowe lub długotrwałe?",
    "options": [
      "zmiany na skórze",
      "nagłe wahania wagi",
      "przewlekłe zmęczenie",
      "długotrwały ból",
      "zmiany w funkcjonowaniu organizmu",
      "stały kolor oczu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Warto zwracać uwagę na nietypowe zmiany skóry, wagi, przewlekłe zmęczenie i ból oraz zmiany w funkcjonowaniu organizmu."
  },
  {
    "id": "R07_OBS_03",
    "section": "Obserwacja organizmu",
    "type": "true_false",
    "prompt": "Internetowa wyszukiwarka może zastąpić konsultację z lekarzem i badania diagnostyczne.",
    "options": null,
    "answer": false,
    "explanation": "Diagnozy nie należy opierać na wyszukiwarce internetowej; problem może potwierdzić lub wykluczyć lekarz na podstawie rozmowy i odpowiednich badań."
  },
  {
    "id": "R07_OBS_04",
    "section": "Obserwacja organizmu",
    "type": "fill_in",
    "prompt": "Pierwszą osobą medyczną, do której należy zgłosić się w razie obaw o zdrowie, jest lekarz __________.",
    "options": null,
    "answer": [
      "rodzinny"
    ],
    "altAnswers": [
      [
        "rodzinny",
        "rodzinny lekarz",
        "podstawowej opieki zdrowotnej",
        "POZ"
      ]
    ],
    "image": "r07_konsultacja_lekarska.jpg",
    "explanation": "Lekarz podstawowej opieki zdrowotnej, nazywany lekarzem rodzinnym, jest pierwszą osobą, do której należy zgłosić się w razie obaw o zdrowie."
  },
  {
    "id": "R07_OBS_05",
    "section": "Obserwacja organizmu",
    "type": "riddle",
    "prompt": "Które badanie obrazowe, obok badania krwi i moczu, może pomóc potwierdzić lub wykluczyć problem?",
    "options": null,
    "answer": "USG",
    "altAnswers": [
      "USG",
      "usg"
    ],
    "explanation": "Do badań pomocnych w ocenie problemu należą m.in. badanie krwi, badanie moczu oraz USG."
  },
  {
    "id": "R07_OBS_06",
    "section": "Obserwacja organizmu",
    "type": "odd_one_out",
    "prompt": "Wskaż zachowanie niezgodne z zalecanym postępowaniem po zauważeniu niepokojącej zmiany: rozmowa z zaufanym dorosłym, konsultacja z lekarzem, wykonanie zaleconych badań, zatrzymanie się na diagnozie z wyszukiwarki internetowej.",
    "options": null,
    "answer": "zatrzymanie się na diagnozie z wyszukiwarki internetowej",
    "explanation": "Nie należy poprzestawać na internetowej diagnozie; obawy warto omówić z zaufanym dorosłym i lekarzem."
  },
  {
    "id": "R07_OBS_07",
    "section": "Obserwacja organizmu",
    "type": "scenario",
    "prompt": "Od kilku tygodni czujesz głębokie zmęczenie, które nie mija po odpoczynku. Co jest najlepszym kolejnym krokiem?",
    "options": [
      "Powiedzieć zaufanemu dorosłemu i skonsultować się z lekarzem",
      "Zignorować objaw przez kilka kolejnych miesięcy",
      "Uznać samodzielnie że to konkretna choroba",
      "Przyjmować przypadkowe suplementy bez konsultacji",
      "Opierać się wyłącznie na wynikach wyszukiwarki",
      "Ukrywać objaw przed opiekunem"
    ],
    "answer": 0,
    "image": "r07_konsultacja_lekarska.jpg",
    "explanation": "Przewlekłe zmęczenie, które nie mija po odpoczynku, jest sygnałem wartym konsultacji z zaufanym dorosłym i lekarzem."
  },
  {
    "id": "R07_OBS_08",
    "section": "Obserwacja organizmu",
    "type": "match",
    "prompt": "Połącz rodzaj niepokojącej zmiany z przykładem.",
    "options": null,
    "left": [
      "zmiany na skórze",
      "przewlekłe zmęczenie i ból",
      "zmiany wagi",
      "zmiany w funkcjonowaniu organizmu"
    ],
    "right": [
      "szybka zmiana wyglądu znamienia",
      "ból bez urazu który długo nie mija",
      "szybkie chudnięcie bez zmiany diety",
      "nagła zmiana rytmu wypróżnień"
    ],
    "answer": {
      "zmiany na skórze": "szybka zmiana wyglądu znamienia",
      "przewlekłe zmęczenie i ból": "ból bez urazu który długo nie mija",
      "zmiany wagi": "szybkie chudnięcie bez zmiany diety",
      "zmiany w funkcjonowaniu organizmu": "nagła zmiana rytmu wypróżnień"
    },
    "explanation": "Niepokój mogą budzić m.in. zmieniające się znamiona, przewlekły ból, nieuzasadnione wahania wagi oraz nagłe zmiany rytmu wypróżnień."
  },
  {
    "id": "R07_OBS_09",
    "section": "Obserwacja organizmu",
    "type": "sort",
    "prompt": "Przyporządkuj sygnały do odpowiednich grup obserwacji.",
    "options": null,
    "items": [
      "nietypowe znamię",
      "długotrwała wysypka",
      "głębokie zmęczenie",
      "ból bez urazu",
      "szybkie chudnięcie",
      "niewyjaśniony wzrost masy ciała"
    ],
    "categories": [
      "skóra",
      "zmęczenie i ból",
      "waga"
    ],
    "answer": {
      "skóra": [
        "nietypowe znamię",
        "długotrwała wysypka"
      ],
      "zmęczenie i ból": [
        "głębokie zmęczenie",
        "ból bez urazu"
      ],
      "waga": [
        "szybkie chudnięcie",
        "niewyjaśniony wzrost masy ciała"
      ]
    },
    "explanation": "Podczas obserwacji organizmu warto rozróżniać zmiany skórne, długotrwałe zmęczenie i ból oraz nieuzasadnione zmiany masy ciała."
  },
  {
    "id": "R07_OBS_10",
    "section": "Obserwacja organizmu",
    "type": "sequence",
    "prompt": "Ułóż zalecane działania po zauważeniu niepokojącej zmiany w organizmie.",
    "options": null,
    "items": [
      "Skonsultuj sprawę z lekarzem i wykonaj potrzebne badania",
      "Zauważ i zapamiętaj lub opisz zmianę",
      "Powiedz o obserwacji zaufanemu dorosłemu",
      "Nie zatrzymuj się na diagnozie znalezionej w Internecie"
    ],
    "answer": [
      "Zauważ i zapamiętaj lub opisz zmianę",
      "Powiedz o obserwacji zaufanemu dorosłemu",
      "Skonsultuj sprawę z lekarzem i wykonaj potrzebne badania",
      "Nie zatrzymuj się na diagnozie znalezionej w Internecie"
    ],
    "explanation": "Najpierw warto świadomie zauważyć zmianę i powiedzieć o niej zaufanemu dorosłemu, a następnie skonsultować ją z lekarzem; internetowa diagnoza nie zastępuje badania."
  },
  {
    "id": "R07_OBS_11",
    "section": "Obserwacja organizmu",
    "type": "multi_select",
    "prompt": "Na jakie cechy znamion warto zwracać uwagę podczas oglądania skóry?",
    "options": [
      "kształt",
      "kolor",
      "wielkość",
      "czy jest płaskie czy wypukłe",
      "symetria i brzegi",
      "marka kosmetyku użytego tego dnia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r07_obserwacja_znamion.jpg",
    "explanation": "Podczas obserwacji znamion warto oceniać ich kształt, kolor, wielkość, wypukłość, symetrię oraz wygląd brzegów."
  },
  {
    "id": "R07_LEK_01",
    "section": "Leki, suplementy i ulotka",
    "type": "single_choice",
    "prompt": "Które stwierdzenie najlepiej opisuje lek?",
    "options": [
      "Leczy choroby lub łagodzi ich objawy",
      "Jest wyłącznie produktem spożywczym uzupełniającym dietę",
      "Nie zawiera substancji czynnej",
      "Nie wymaga badań potwierdzających działanie",
      "Można go rozpoznać wyłącznie po kolorze opakowania",
      "Zawsze ma postać tabletki"
    ],
    "answer": 0,
    "image": "r07_leki_i_suplementy_opakowania.jpg",
    "explanation": "Lek ma działanie lecznicze: leczy choroby lub łagodzi ich objawy, np. ból czy gorączkę."
  },
  {
    "id": "R07_LEK_02",
    "section": "Leki, suplementy i ulotka",
    "type": "multi_select",
    "prompt": "Które cechy dotyczą suplementu diety?",
    "options": [
      "nie leczy chorób",
      "może uzupełniać niedobór składników",
      "jest produktem spożywczym",
      "zawiera składniki odżywcze",
      "musi mieć udowodnione działanie lecznicze w wieloletnich badaniach klinicznych",
      "jest zawsze przepisywany przez lekarza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Suplement diety jest produktem spożywczym, ma działanie odżywcze i może uzupełniać niedobory składników, ale nie leczy chorób."
  },
  {
    "id": "R07_LEK_03",
    "section": "Leki, suplementy i ulotka",
    "type": "true_false",
    "prompt": "Lek i suplement diety można wiarygodnie odróżnić tylko po nazwie, wyglądzie i reklamie.",
    "options": null,
    "answer": false,
    "explanation": "Lek i suplement mogą wyglądać bardzo podobnie, dlatego należy sprawdzać ich oznaczenia, status, skład i informacje na opakowaniu."
  },
  {
    "id": "R07_LEK_04",
    "section": "Leki, suplementy i ulotka",
    "type": "fill_in",
    "prompt": "Składnik leku o działaniu leczniczym to substancja __________.",
    "options": null,
    "answer": [
      "czynna"
    ],
    "altAnswers": [
      [
        "czynna",
        "substancja czynna"
      ]
    ],
    "explanation": "W leku znajduje się substancja czynna o działaniu leczniczym, a jej dawka jest dokładnie określona."
  },
  {
    "id": "R07_LEK_05",
    "section": "Leki, suplementy i ulotka",
    "type": "riddle",
    "prompt": "Jak nazywa się stan wywołany przyjęciem zbyt dużych dawek witamin?",
    "options": null,
    "answer": "hiperwitaminoza",
    "altAnswers": [
      "hiperwitaminoza"
    ],
    "image": "r07_tabletki_w_dloni.jpg",
    "explanation": "Zbyt duże dawki witamin mogą doprowadzić do hiperwitaminozy, której objawami mogą być m.in. osłabienie, ból głowy, wymioty, biegunka lub zaparcia."
  },
  {
    "id": "R07_LEK_06",
    "section": "Leki, suplementy i ulotka",
    "type": "odd_one_out",
    "prompt": "Wskaż element niebędący kluczową informacją z ulotki leku: skład, wskazania, przeciwwskazania, dawkowanie, działania niepożądane, kolor pudełka.",
    "options": null,
    "answer": "kolor pudełka",
    "image": "r07_ulotka_leku.jpg",
    "explanation": "W ulotce trzeba zwrócić uwagę na skład, wskazania, przeciwwskazania, dawkowanie i możliwe działania niepożądane; kolor pudełka nie jest informacją medyczną."
  },
  {
    "id": "R07_LEK_07",
    "section": "Leki, suplementy i ulotka",
    "type": "scenario",
    "prompt": "Masz dwa leki przeciwbólowe o różnych nazwach handlowych. Oba zawierają ibuprofen. Co jest najważniejszym zagrożeniem przy zażyciu ich razem?",
    "options": [
      "Przedawkowanie tej samej substancji czynnej",
      "Zmiana koloru opakowania",
      "Brak jakiegokolwiek działania",
      "Natychmiastowe odwodnienie",
      "Zwiększenie liczby witamin w diecie",
      "Powstanie infekcji wirusowej"
    ],
    "answer": 0,
    "explanation": "Różne leki mogą zawierać tę samą substancję czynną; przyjęcie kilku naraz może spowodować przekroczenie bezpiecznej dawki."
  },
  {
    "id": "R07_LEK_08",
    "section": "Leki, suplementy i ulotka",
    "type": "match",
    "prompt": "Połącz cechę z produktem, którego dotyczy.",
    "options": null,
    "left": [
      "działanie lecznicze",
      "produkt spożywczy",
      "substancja czynna",
      "składniki odżywcze"
    ],
    "right": [
      "lek",
      "suplement diety",
      "lek zawiera ją w określonej dawce",
      "suplement może je dostarczać"
    ],
    "answer": {
      "działanie lecznicze": "lek",
      "produkt spożywczy": "suplement diety",
      "substancja czynna": "lek zawiera ją w określonej dawce",
      "składniki odżywcze": "suplement może je dostarczać"
    },
    "explanation": "Lek ma działanie lecznicze i zawiera substancję czynną, natomiast suplement jest produktem spożywczym dostarczającym składniki odżywcze lub inne substancje bez działania leczniczego."
  },
  {
    "id": "R07_LEK_09",
    "section": "Leki, suplementy i ulotka",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do leku lub suplementu diety.",
    "options": null,
    "items": [
      "produkt leczniczy",
      "rygorystyczna kontrola działania",
      "substancja czynna",
      "produkt spożywczy",
      "nie leczy chorób",
      "składniki odżywcze"
    ],
    "categories": [
      "lek",
      "suplement diety"
    ],
    "answer": {
      "lek": [
        "produkt leczniczy",
        "rygorystyczna kontrola działania",
        "substancja czynna"
      ],
      "suplement diety": [
        "produkt spożywczy",
        "nie leczy chorób",
        "składniki odżywcze"
      ]
    },
    "explanation": "Lek jest produktem leczniczym z substancją czynną i musi mieć potwierdzone działanie; suplement jest produktem spożywczym i nie leczy chorób."
  },
  {
    "id": "R07_LEK_10",
    "section": "Leki, suplementy i ulotka",
    "type": "sequence",
    "prompt": "Ułóż rozsądną kolejność działań przed zastosowaniem nowego preparatu lub leku.",
    "options": null,
    "items": [
      "Zastosuj preparat zgodnie z informacjami i zaleceniami",
      "Sprawdź czy to lek czy suplement",
      "Przeczytaj kluczowe informacje na opakowaniu lub w ulotce",
      "W razie wątpliwości porozmawiaj z lekarzem lub farmaceutą"
    ],
    "answer": [
      "Sprawdź czy to lek czy suplement",
      "Przeczytaj kluczowe informacje na opakowaniu lub w ulotce",
      "W razie wątpliwości porozmawiaj z lekarzem lub farmaceutą",
      "Zastosuj preparat zgodnie z informacjami i zaleceniami"
    ],
    "explanation": "Bezpieczne stosowanie zaczyna się od rozpoznania rodzaju produktu i przeczytania informacji; wątpliwości należy omówić ze specjalistą, a lek stosować zgodnie z dawkowaniem."
  },
  {
    "id": "R07_LEK_11",
    "section": "Leki, suplementy i ulotka",
    "type": "multi_select",
    "prompt": "Dlaczego przed zakupem suplementu warto porozmawiać z lekarzem lub farmaceutą?",
    "options": [
      "aby omówić przyjmowane leki",
      "aby ocenić potrzebę suplementacji",
      "ponieważ suplement może wchodzić w niekorzystne połączenia z lekami",
      "aby dobrać preparat wyłącznie po reklamie",
      "aby celowo zwiększyć dawkę ponad zalecenia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r07_apteka_farmaceuta.jpg",
    "explanation": "Przed suplementacją warto omówić z lekarzem lub farmaceutą przyjmowane leki i rzeczywistą potrzebę suplementacji, ponieważ łączenie preparatów może powodować powikłania lub osłabiać działanie leku."
  },
  {
    "id": "R07_ANT_01",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "single_choice",
    "prompt": "Na jakie drobnoustroje działają antybiotyki?",
    "options": [
      "bakterie",
      "wirusy",
      "wszystkie patogeny bez wyjątku",
      "wyłącznie grzyby",
      "wyłącznie pasożyty",
      "komórki skóry"
    ],
    "answer": 0,
    "image": "r07_szalka_antybiotyk.jpg",
    "explanation": "Antybiotyki zwalczają bakterie; nie działają na wirusy."
  },
  {
    "id": "R07_ANT_02",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "multi_select",
    "prompt": "W których infekcjach antybiotyk nie zadziała na przyczynę choroby, jeśli są wywołane przez wirusy?",
    "options": [
      "przeziębienie",
      "grypa",
      "COVID-19",
      "angina bakteryjna"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Antybiotyki nie działają na wirusy, dlatego nie leczą przyczyny przeziębienia, grypy ani COVID-19."
  },
  {
    "id": "R07_ANT_03",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "true_false",
    "prompt": "Kurację antybiotykiem można bezpiecznie przerwać od razu po ustąpieniu objawów.",
    "options": null,
    "answer": false,
    "explanation": "Nie należy samodzielnie przerywać kuracji. Po ustąpieniu objawów część bakterii może nadal pozostawać i uzyskać szansę na rozwinięcie oporności."
  },
  {
    "id": "R07_ANT_04",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "fill_in",
    "prompt": "Antybiotyki zwalczają tylko __________.",
    "options": null,
    "answer": [
      "bakterie"
    ],
    "altAnswers": [
      [
        "bakterie",
        "bakterii"
      ]
    ],
    "explanation": "Antybiotyki działają na bakterie, a nie na wirusy."
  },
  {
    "id": "R07_ANT_05",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "riddle",
    "prompt": "Jak nazwano bakterie oporne na antybiotyki, które mogą stanowić zagrożenie dla wielu osób?",
    "options": null,
    "answer": "superbakterie",
    "altAnswers": [
      "superbakterie",
      "superbakteria"
    ],
    "explanation": "Przerywanie kuracji sprzyja przeżyciu i uodpornieniu części bakterii, co może prowadzić do powstawania tzw. superbakterii."
  },
  {
    "id": "R07_ANT_06",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, która nie jest infekcją wirusową: przeziębienie, grypa, COVID-19, angina bakteryjna.",
    "options": null,
    "answer": "angina bakteryjna",
    "explanation": "Przeziębienie, grypa i COVID-19 są infekcjami wirusowymi, natomiast angina bakteryjna jest chorobą bakteryjną leczoną antybiotykiem."
  },
  {
    "id": "R07_ANT_07",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "scenario",
    "prompt": "Lekarz stwierdził infekcję wirusową z katarem i kaszlem. Pacjent domaga się antybiotyku, żeby szybciej wyzdrowieć. Kto ma rację?",
    "options": [
      "Lekarz ponieważ antybiotyk nie działa na wirusy",
      "Pacjent ponieważ antybiotyk działa na wszystkie infekcje",
      "Pacjent ponieważ antybiotyk zawsze skraca katar",
      "Oboje ponieważ działanie antybiotyku nie zależy od przyczyny choroby",
      "Nikt ponieważ leków nie stosuje się w infekcjach",
      "Pacjent ponieważ antybiotyk zwalcza gorączkę niezależnie od drobnoustroju"
    ],
    "answer": 0,
    "image": "r07_infekcja_odpoczynek.jpg",
    "explanation": "Przy infekcji wirusowej antybiotyk nie zwalcza przyczyny choroby, ponieważ działa na bakterie, a nie na wirusy."
  },
  {
    "id": "R07_ANT_08",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "match",
    "prompt": "Połącz sytuację z właściwą oceną.",
    "options": null,
    "left": [
      "przeziębienie wirusowe",
      "angina bakteryjna",
      "samodzielne przerwanie kuracji",
      "pełna kuracja zalecona przez lekarza"
    ],
    "right": [
      "antybiotyk nie zwalcza przyczyny",
      "antybiotyk może być wskazany przez lekarza",
      "sprzyja rozwojowi oporności",
      "należy ją dokończyć zgodnie z zaleceniem"
    ],
    "answer": {
      "przeziębienie wirusowe": "antybiotyk nie zwalcza przyczyny",
      "angina bakteryjna": "antybiotyk może być wskazany przez lekarza",
      "samodzielne przerwanie kuracji": "sprzyja rozwojowi oporności",
      "pełna kuracja zalecona przez lekarza": "należy ją dokończyć zgodnie z zaleceniem"
    },
    "explanation": "Antybiotyki stosuje się przeciw bakteriom, a zaleconej kuracji nie powinno się samodzielnie skracać."
  },
  {
    "id": "R07_ANT_09",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "sort",
    "prompt": "Przyporządkuj sytuacje do właściwej kategorii.",
    "options": null,
    "items": [
      "grypa",
      "COVID-19",
      "przeziębienie",
      "angina bakteryjna",
      "zalecona terapia przeciw bakterii"
    ],
    "categories": [
      "antybiotyk nie działa na przyczynę",
      "antybiotyk może być stosowany zgodnie z zaleceniem lekarza"
    ],
    "answer": {
      "antybiotyk nie działa na przyczynę": [
        "grypa",
        "COVID-19",
        "przeziębienie"
      ],
      "antybiotyk może być stosowany zgodnie z zaleceniem lekarza": [
        "angina bakteryjna",
        "zalecona terapia przeciw bakterii"
      ]
    },
    "explanation": "W infekcjach wirusowych antybiotyk nie działa na przyczynę; może być stosowany przy chorobach bakteryjnych, jeśli zaleci go lekarz."
  },
  {
    "id": "R07_ANT_10",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "sequence",
    "prompt": "Ułóż ciąg zdarzeń pokazujący ryzyko samodzielnego przerwania antybiotykoterapii.",
    "options": null,
    "items": [
      "Pozostałe bakterie mogą stać się oporne",
      "Objawy słabną po kilku dniach",
      "Pacjent samodzielnie odstawia antybiotyk",
      "Część bakterii została zwalczona",
      "Choroba może wrócić trudniejsza do leczenia"
    ],
    "answer": [
      "Część bakterii została zwalczona",
      "Objawy słabną po kilku dniach",
      "Pacjent samodzielnie odstawia antybiotyk",
      "Pozostałe bakterie mogą stać się oporne",
      "Choroba może wrócić trudniejsza do leczenia"
    ],
    "explanation": "Poprawa samopoczucia nie oznacza usunięcia wszystkich bakterii; przedwczesne odstawienie leku daje pozostałym szansę na rozwinięcie oporności."
  },
  {
    "id": "R07_ANT_11",
    "section": "Antybiotyki i bezpieczne leczenie",
    "type": "scenario",
    "prompt": "Pan Bartek ma brać antybiotyk przez 7 dni, ale po 4 dniach czuje się dobrze. Co powinien zrobić?",
    "options": [
      "Kontynuować kurację zgodnie z zaleceniem lekarza",
      "Samodzielnie odstawić lek",
      "Zachować pozostałe tabletki na inną chorobę",
      "Podwoić dawkę i zakończyć wcześniej",
      "Przekazać lek innej osobie",
      "Zamienić antybiotyk na suplement"
    ],
    "answer": 0,
    "explanation": "Antybiotykoterapię należy prowadzić przez czas zalecony przez lekarza; samodzielne skrócenie kuracji sprzyja oporności bakterii."
  },
  {
    "id": "R07_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która graniczna wartość temperatury została powiązana z uruchomieniem reakcji na wyziębienie?",
    "options": [
      "spadek poniżej 36°C",
      "spadek poniżej 37°C",
      "wzrost powyżej 36°C",
      "wzrost powyżej 37°C",
      "dokładnie 35°C",
      "dokładnie 38°C"
    ],
    "answer": 0,
    "image": "r07_termometr_skora_zimno.jpg",
    "explanation": "Receptory zimna wykrywają spadek temperatury ciała poniżej 36°C; receptory ciepła reagują na wzrost powyżej 37°C."
  },
  {
    "id": "R07_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które elementy współpracują przy utrzymaniu stałej temperatury ciała?",
    "options": [
      "receptory temperatury w skórze",
      "układ nerwowy",
      "układ krwionośny",
      "układ wydalniczy",
      "układ mięśniowy",
      "układ rozrodczy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Stała temperatura ciała jest utrzymywana dzięki współpracy receptorów temperatury w skórze oraz układów: nerwowego, krwionośnego, wydalniczego i mięśniowego."
  },
  {
    "id": "R07_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Osoba jest wyziębiona. Który zestaw reakcji jest zgodny z mechanizmem termoregulacji?",
    "options": [
      "zwężenie naczyń w skórze brak potu dreszcze",
      "rozszerzenie naczyń w skórze obfity pot brak dreszczy",
      "rozszerzenie naczyń brak potu dreszcze",
      "zwężenie naczyń obfity pot brak dreszczy"
    ],
    "answer": 0,
    "explanation": "Przy wyziębieniu naczynia w skórze się zwężają, gruczoły potowe nie wydzielają potu, a dreszcze wytwarzają energię do ogrzania ciała."
  },
  {
    "id": "R07_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż ciąg następstw odwodnienia i reakcji organizmu.",
    "options": null,
    "items": [
      "Mózg uruchamia pragnienie i działanie nerek",
      "Krew wolniej dostarcza tlen i glukozę",
      "Dochodzi do nadmiernej utraty wody",
      "Ciśnienie krwi się obniża",
      "Nerki zagęszczają mocz"
    ],
    "answer": [
      "Dochodzi do nadmiernej utraty wody",
      "Ciśnienie krwi się obniża",
      "Krew wolniej dostarcza tlen i glukozę",
      "Mózg uruchamia pragnienie i działanie nerek",
      "Nerki zagęszczają mocz"
    ],
    "explanation": "Niedobór wody może obniżyć ciśnienie krwi i spowolnić dostarczanie tlenu i glukozy; mózg uruchamia wtedy reakcje przywracające nawodnienie, m.in. działanie nerek."
  },
  {
    "id": "R07_HARD_05",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz sygnał lub zmianę z właściwym obszarem obserwacji organizmu.",
    "options": null,
    "left": [
      "krew przy oddawaniu moczu",
      "zmiana wyglądu starego znamienia",
      "ból brzucha bez urazu który długo nie mija",
      "niewyjaśniony wzrost masy ciała"
    ],
    "right": [
      "funkcjonowanie organizmu",
      "skóra",
      "przewlekły ból",
      "waga"
    ],
    "answer": {
      "krew przy oddawaniu moczu": "funkcjonowanie organizmu",
      "zmiana wyglądu starego znamienia": "skóra",
      "ból brzucha bez urazu który długo nie mija": "przewlekły ból",
      "niewyjaśniony wzrost masy ciała": "waga"
    },
    "explanation": "Krew w moczu to zmiana w funkcjonowaniu organizmu, zmiana znamienia dotyczy skóry, długotrwały ból bez urazu wymaga uwagi, a niewyjaśniony przyrost masy to zmiana wagi."
  },
  {
    "id": "R07_HARD_06",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które czynności należą do świadomej obserwacji znamion z użyciem dwóch luster?",
    "options": [
      "obejrzenie twarzy szyi ramion rąk tułowia nóg i stóp",
      "sprawdzenie skóry między palcami",
      "poproszenie o pomoc przy oglądaniu pleców i skóry głowy",
      "porównanie kształtu koloru wielkości i brzegów znamion",
      "samodzielne rozpoznanie choroby na podstawie wyglądu znamienia"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r07_obserwacja_znamion.jpg",
    "explanation": "Świadoma obserwacja znamion obejmuje dokładne oglądanie całego ciała, także trudno dostępnych miejsc, oraz porównywanie cech znamion; nie służy do samodzielnego diagnozowania chorób."
  },
  {
    "id": "R07_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która informacja najlepiej odróżnia kontrolę leku od kontroli suplementu diety?",
    "options": [
      "Producent leku musi udowodnić działanie lecznicze w badaniach klinicznych",
      "Producent suplementu zawsze musi udowodnić działanie lecznicze",
      "Ani lek ani suplement nie podlegają żadnej kontroli",
      "Suplement zawsze przechodzi bardziej rygorystyczne badania niż lek",
      "Lek jest kontrolowany wyłącznie pod względem smaku",
      "Kontrola obu produktów jest identyczna"
    ],
    "answer": 0,
    "explanation": "Lek przechodzi rygorystyczną kontrolę, a producent musi udowodnić jego działanie lecznicze w wieloletnich badaniach klinicznych; dla suplementu skuteczność nie musi być udowodniona w ten sam sposób."
  },
  {
    "id": "R07_HARD_08",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Rapidofen Forte zawiera 400 mg ibuprofenu w tabletce. Maksymalna dawka to 3 tabletki na dobę. Ile ibuprofenu wynosi dawka maksymalna?",
    "options": [
      "1200 mg",
      "400 mg",
      "800 mg",
      "1600 mg",
      "2000 mg",
      "2400 mg"
    ],
    "answer": 0,
    "image": "r07_ulotka_leku.jpg",
    "explanation": "Trzy tabletki po 400 mg dają łącznie 1200 mg ibuprofenu, czyli maksymalną dawkę dobową w tym zadaniu."
  },
  {
    "id": "R07_HARD_09",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Jedenastoletnie dziecko skarży się na ból zęba. Rapidofen Forte jest przeciwwskazany dla osób poniżej 12 roku życia. Co należy zrobić?",
    "options": [
      "Nie należy podawać mu tego leku",
      "Można podać podwójną dawkę",
      "Można podać lek tylko na czczo",
      "Wiek nie ma znaczenia",
      "Trzeba połączyć go z drugim lekiem z ibuprofenem",
      "Należy pominąć ulotkę"
    ],
    "answer": 0,
    "explanation": "Preparatu nie stosuje się u pacjentów poniżej 12 roku życia, więc jedenastolatek nie powinien go przyjmować."
  },
  {
    "id": "R07_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pan Jan wziął 1 tabletkę Rapidofenu o 8:00. O 12:00 ból wrócił. Ulotka zaleca 1 tabletkę co 6 godzin. Czy może już zażyć kolejną tabletkę?",
    "options": [
      "Nie ponieważ od poprzedniej dawki minęły tylko 4 godziny",
      "Tak ponieważ ból wrócił",
      "Tak ponieważ lek jest dostępny bez recepty",
      "Tak pod warunkiem przyjęcia dwóch tabletek",
      "Nie ponieważ lek wolno przyjmować tylko raz na dobę",
      "Nie ponieważ ibuprofenu nie stosuje się przeciwbólowo"
    ],
    "answer": 0,
    "explanation": "Od 8:00 do 12:00 minęły tylko 4 godziny, a ulotka zaleca odstęp 6 godzin między kolejnymi tabletkami."
  },
  {
    "id": "R07_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które z poniższych są przeciwwskazaniami do stosowania Rapidofen Forte?",
    "options": [
      "uczulenie na ibuprofen",
      "choroba wrzodowa żołądka",
      "wiek poniżej 12 lat",
      "katar",
      "ból zęba",
      "migrena"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przeciwwskazaniami do stosowania Rapidofen Forte są uczulenie na ibuprofen, choroba wrzodowa żołądka oraz wiek poniżej 12 lat."
  },
  {
    "id": "R07_HARD_12",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Fikcyjny Rapidofen Forte zawiera __________ mg ibuprofenu w jednej tabletce, a maksymalna dawka dobowa to __________ mg.",
    "options": null,
    "answer": [
      "400",
      "1200"
    ],
    "altAnswers": [
      [
        "400",
        "400 mg"
      ],
      [
        "1200",
        "1200 mg"
      ]
    ],
    "explanation": "Jedna tabletka fikcyjnego preparatu zawiera 400 mg ibuprofenu, a maksymalna dawka dobowa wynosi 1200 mg."
  },
  {
    "id": "R07_HARD_13",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest przeciwwskazaniem ani interakcją dotyczącą Rapidofen Forte: uczulenie na ibuprofen, choroba wrzodowa żołądka, wiek poniżej 12 lat, równoczesne stosowanie kwasu acetylosalicylowego, spożycie szklanki wody.",
    "options": null,
    "answer": "spożycie szklanki wody",
    "explanation": "Do przeciwwskazań i interakcji dotyczących Rapidofen Forte należą uczulenie na ibuprofen, choroba wrzodowa, wiek poniżej 12 lat oraz łączenie z kwasem acetylosalicylowym; wypicie wody nie jest przeciwwskazaniem."
  },
  {
    "id": "R07_HARD_14",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż logiczny ciąg prowadzący do powstania bakterii opornych po przerwaniu kuracji.",
    "options": null,
    "items": [
      "Choroba może wrócić",
      "Antybiotyk zwalcza część bakterii",
      "Pozostałe bakterie mają szansę się uodpornić",
      "Pacjent czuje poprawę i przedwcześnie odstawia lek",
      "Powstaje szczep odporny na dany antybiotyk"
    ],
    "answer": [
      "Antybiotyk zwalcza część bakterii",
      "Pacjent czuje poprawę i przedwcześnie odstawia lek",
      "Pozostałe bakterie mają szansę się uodpornić",
      "Powstaje szczep odporny na dany antybiotyk",
      "Choroba może wrócić"
    ],
    "explanation": "Po częściowym zniszczeniu bakterii poprawa może skłonić do zbyt wczesnego odstawienia leku, a wtedy pozostałe bakterie mogą rozwinąć oporność i spowodować nawrót choroby."
  },
  {
    "id": "R07_HARD_15",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz pojęcie z jego najtrafniejszym opisem.",
    "options": null,
    "left": [
      "homeostaza",
      "hiperwitaminoza",
      "przeciwwskazanie",
      "oporność bakterii",
      "suplement diety"
    ],
    "right": [
      "utrzymywanie stabilnych warunków wewnętrznych",
      "skutek zbyt dużych dawek witamin",
      "warunek wykluczający zastosowanie leku",
      "brak skuteczności danego antybiotyku wobec bakterii",
      "produkt spożywczy o działaniu odżywczym"
    ],
    "answer": {
      "homeostaza": "utrzymywanie stabilnych warunków wewnętrznych",
      "hiperwitaminoza": "skutek zbyt dużych dawek witamin",
      "przeciwwskazanie": "warunek wykluczający zastosowanie leku",
      "oporność bakterii": "brak skuteczności danego antybiotyku wobec bakterii",
      "suplement diety": "produkt spożywczy o działaniu odżywczym"
    },
    "explanation": "Te pojęcia łączą najważniejsze zagadnienia działu: równowagę organizmu, bezpieczne stosowanie preparatów i właściwe używanie antybiotyków."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r07",
  number: 7,
  title: "Jak zachować zdrowie?",
  icon: "❤️",
  sectionOrder: [
    "Homeostaza i termoregulacja",
    "Nawodnienie i równowaga organizmu",
    "Obserwacja organizmu",
    "Leki, suplementy i ulotka",
    "Antybiotyki i bezpieczne leczenie"
  ],
  sectionIcons: {
    "Homeostaza i termoregulacja": "🌡️",
    "Nawodnienie i równowaga organizmu": "💧",
    "Obserwacja organizmu": "👀",
    "Leki, suplementy i ulotka": "💊",
    "Antybiotyki i bezpieczne leczenie": "🦠"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
