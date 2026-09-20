// Skróty sekcji (do identyfikatorów ćwiczeń):
//   HOM  = Homeostaza i współpraca układów
//   ZDR  = Zdrowie i profilaktyka
//   LEK  = Leki i antybiotyki
//   TER  = Kontrola i temperatura ciała
//   GLW  = Glukoza i gospodarka wodna
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R11_HOM_01",
    "section": "Homeostaza i współpraca układów",
    "type": "single_choice",
    "prompt": "Czym jest homeostaza?",
    "options": [
      "Równowagą wewnętrzną organizmu",
      "Wyłącznie stałą temperaturą ciała",
      "Procesem trawienia pokarmu",
      "Tylko pracą układu nerwowego",
      "Sposobem usuwania moczu",
      "Okresowym wzrostem ciśnienia krwi"
    ],
    "answer": 0,
    "explanation": "Homeostaza to zdolność organizmu do utrzymywania stabilnego, względnie stałego środowiska wewnętrznego mimo zmieniających się warunków zewnętrznych.",
    "image": "r11_biegacz_homeostaza.jpg"
  },
  {
    "id": "R11_HOM_02",
    "section": "Homeostaza i współpraca układów",
    "type": "multi_select",
    "prompt": "Zaznacz parametry środowiska wewnętrznego, które organizm reguluje i kontroluje.",
    "options": [
      "Stężenie glukozy we krwi",
      "Wartość pH",
      "Objętość płynów ustrojowych",
      "Ciśnienie krwi",
      "Temperatura ciała",
      "Długość włosów"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do regulowanych parametrów należą m.in. stężenie glukozy we krwi, pH, objętość płynów ustrojowych, ciśnienie krwi i temperatura ciała."
  },
  {
    "id": "R11_HOM_03",
    "section": "Homeostaza i współpraca układów",
    "type": "true_false",
    "prompt": "Do zachowania homeostazy potrzebna jest współpraca wszystkich układów i narządów.",
    "options": null,
    "answer": true,
    "explanation": "Równowaga wewnętrzna organizmu zależy od prawidłowego współdziałania układów i narządów."
  },
  {
    "id": "R11_HOM_04",
    "section": "Homeostaza i współpraca układów",
    "type": "fill_in",
    "prompt": "Homeostaza to __________ organizmu.",
    "options": null,
    "answer": [
      "równowaga wewnętrzna"
    ],
    "altAnswers": [
      [
        "równowaga wewnętrzna",
        "wewnętrzna równowaga"
      ]
    ],
    "explanation": "Homeostaza oznacza równowagę wewnętrzną organizmu."
  },
  {
    "id": "R11_HOM_05",
    "section": "Homeostaza i współpraca układów",
    "type": "match",
    "prompt": "Połącz układ z jego rolą w drodze glukozy od pokarmu do komórek.",
    "options": null,
    "left": [
      "Układ pokarmowy",
      "Układ hormonalny",
      "Układ krwionośny"
    ],
    "right": [
      "Trawi pokarm",
      "Reguluje stężenie glukozy we krwi",
      "Transportuje glukozę do komórek ciała"
    ],
    "answer": {
      "Układ pokarmowy": "Trawi pokarm",
      "Układ hormonalny": "Reguluje stężenie glukozy we krwi",
      "Układ krwionośny": "Transportuje glukozę do komórek ciała"
    },
    "explanation": "Układ pokarmowy trawi pokarm, układ hormonalny reguluje stężenie glukozy we krwi, a układ krwionośny rozprowadza glukozę do komórek."
  },
  {
    "id": "R11_HOM_06",
    "section": "Homeostaza i współpraca układów",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odpowiedniej roli w funkcjonowaniu organizmu.",
    "options": null,
    "items": [
      "glukoza",
      "tlen",
      "pot",
      "mocz",
      "wydychane powietrze"
    ],
    "categories": [
      "Dostarczane komórkom",
      "Drogi usuwania szkodliwych produktów przemian"
    ],
    "answer": {
      "Dostarczane komórkom": [
        "glukoza",
        "tlen"
      ],
      "Drogi usuwania szkodliwych produktów przemian": [
        "pot",
        "mocz",
        "wydychane powietrze"
      ]
    },
    "explanation": "Komórki potrzebują glukozy i tlenu do oddychania komórkowego, a szkodliwe produkty przemian są usuwane m.in. z potem, moczem i wydychanym powietrzem."
  },
  {
    "id": "R11_HOM_07",
    "section": "Homeostaza i współpraca układów",
    "type": "scenario",
    "prompt": "Po posiłku wzrosło stężenie glukozy we krwi. Który układ bezpośrednio reguluje ten parametr za pomocą hormonów?",
    "options": [
      "Układ hormonalny",
      "Układ szkieletowy",
      "Układ rozrodczy",
      "Układ limfatyczny",
      "Układ oddechowy",
      "Układ mięśniowy"
    ],
    "answer": 0,
    "explanation": "Hormony wydzielane przez trzustkę należącą do układu hormonalnego regulują stężenie glukozy we krwi.",
    "image": "r11_posilek_jablko.jpg"
  },
  {
    "id": "R11_HOM_08",
    "section": "Homeostaza i współpraca układów",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest parametrem homeostazy: temperatura ciała, stężenie glukozy we krwi, ciśnienie krwi, długość włosów.",
    "options": null,
    "answer": "długość włosów",
    "explanation": "Temperatura ciała, stężenie glukozy i ciśnienie krwi są kontrolowanymi parametrami środowiska wewnętrznego; długość włosów do nich nie należy."
  },
  {
    "id": "R11_HOM_09",
    "section": "Homeostaza i współpraca układów",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia prowadzące od odczucia głodu do pojawienia się glukozy we krwi.",
    "options": null,
    "items": [
      "Jesz",
      "Odczuwasz głód",
      "Glukoza zostaje wchłonięta do krwi",
      "Sięgasz po jedzenie",
      "Układ pokarmowy trawi pokarm"
    ],
    "answer": [
      "Odczuwasz głód",
      "Sięgasz po jedzenie",
      "Jesz",
      "Układ pokarmowy trawi pokarm",
      "Glukoza zostaje wchłonięta do krwi"
    ],
    "explanation": "Najpierw pojawia się głód i sięgasz po jedzenie, następnie jesz, pokarm jest trawiony, a glukoza zostaje wchłonięta do krwi."
  },
  {
    "id": "R11_HOM_10",
    "section": "Homeostaza i współpraca układów",
    "type": "riddle",
    "prompt": "Jak nazywa się zdolność organizmu do utrzymywania stabilnego środowiska wewnętrznego mimo zmian warunków zewnętrznych?",
    "options": null,
    "answer": "homeostaza",
    "altAnswers": [
      "homeostaza",
      "równowaga wewnętrzna",
      "równowaga wewnętrzna organizmu"
    ],
    "explanation": "Tę zdolność organizmu nazywa się homeostazą, czyli równowagą wewnętrzną."
  },
  {
    "id": "R11_ZDR_01",
    "section": "Zdrowie i profilaktyka",
    "type": "single_choice",
    "prompt": "Który zestaw obejmuje trzy aspekty zdrowia?",
    "options": [
      "Fizyczne, psychiczne i społeczne",
      "Fizyczne, hormonalne i oddechowe",
      "Psychiczne, pokarmowe i społeczne",
      "Społeczne, krwionośne i nerwowe",
      "Fizyczne, wzrokowe i słuchowe",
      "Psychiczne, ruchowe i odpornościowe"
    ],
    "answer": 0,
    "explanation": "Na dobre samopoczucie składają się zdrowie fizyczne, psychiczne i społeczne."
  },
  {
    "id": "R11_ZDR_02",
    "section": "Zdrowie i profilaktyka",
    "type": "match",
    "prompt": "Połącz rodzaj zdrowia z jego charakterystyką.",
    "options": null,
    "left": [
      "Zdrowie fizyczne",
      "Zdrowie psychiczne",
      "Zdrowie społeczne"
    ],
    "right": [
      "Zachowana homeostaza i prawidłowa praca układów i narządów",
      "Jasne myślenie, radzenie sobie ze stresem i rozpoznawanie uczuć",
      "Nawiązywanie, rozwijanie i podtrzymywanie prawidłowych relacji"
    ],
    "answer": {
      "Zdrowie fizyczne": "Zachowana homeostaza i prawidłowa praca układów i narządów",
      "Zdrowie psychiczne": "Jasne myślenie, radzenie sobie ze stresem i rozpoznawanie uczuć",
      "Zdrowie społeczne": "Nawiązywanie, rozwijanie i podtrzymywanie prawidłowych relacji"
    },
    "explanation": "Zdrowie obejmuje wymiar fizyczny, psychiczny i społeczny, a każdy z nich opisuje inny obszar prawidłowego funkcjonowania człowieka.",
    "image": "r11_relacje_spoleczne.jpg"
  },
  {
    "id": "R11_ZDR_03",
    "section": "Zdrowie i profilaktyka",
    "type": "true_false",
    "prompt": "Choroba jest zaburzeniem homeostazy.",
    "options": null,
    "answer": true,
    "explanation": "Stałe zaburzenie równowagi prowadzi do rozwoju choroby; choroba jest zaburzeniem homeostazy."
  },
  {
    "id": "R11_ZDR_04",
    "section": "Zdrowie i profilaktyka",
    "type": "fill_in",
    "prompt": "Działania zapobiegające chorobom oraz służące ich wczesnemu wykrywaniu to __________.",
    "options": null,
    "answer": [
      "profilaktyka"
    ],
    "altAnswers": [
      [
        "profilaktyka",
        "profilaktyka zdrowotna"
      ]
    ],
    "explanation": "Profilaktyka obejmuje zapobieganie chorobom i ich wczesne wykrywanie."
  },
  {
    "id": "R11_ZDR_05",
    "section": "Zdrowie i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz ogólne zasady profilaktyki.",
    "options": [
      "Aktywność fizyczna",
      "Zdrowe odżywianie",
      "Regularny sen",
      "Higiena",
      "Regularne badania",
      "Zażywanie leków bez potrzeby"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do ogólnych zasad profilaktyki należą aktywność fizyczna, zdrowe odżywianie, regularny sen, higiena i regularne badania.",
    "image": "r11_szczepienie.jpg"
  },
  {
    "id": "R11_ZDR_06",
    "section": "Zdrowie i profilaktyka",
    "type": "single_choice",
    "prompt": "Jak często należy wykonywać badanie krwi i moczu?",
    "options": [
      "Co najmniej raz w roku",
      "Wyłącznie raz w życiu",
      "Co dziesięć lat",
      "Tylko po ukończeniu 60 lat",
      "Tylko podczas pobytu w szpitalu",
      "Codziennie"
    ],
    "answer": 0,
    "explanation": "Badanie krwi i moczu należy wykonywać co najmniej raz w roku.",
    "image": "r11_badanie_krwi.jpg"
  },
  {
    "id": "R11_ZDR_07",
    "section": "Zdrowie i profilaktyka",
    "type": "single_choice",
    "prompt": "Jak często należy wykonywać badanie stomatologiczne?",
    "options": [
      "Dwa razy w roku",
      "Raz na pięć lat",
      "Raz na dziesięć lat",
      "Codziennie",
      "Tylko w razie silnego bólu",
      "Raz w życiu"
    ],
    "answer": 0,
    "explanation": "Badanie stomatologiczne należy wykonywać dwa razy w roku."
  },
  {
    "id": "R11_ZDR_08",
    "section": "Zdrowie i profilaktyka",
    "type": "sort",
    "prompt": "Przyporządkuj działania profilaktyczne do miejsca ich wykonywania.",
    "options": null,
    "items": [
      "badanie ginekologiczne lub urologiczne",
      "badanie krwi i moczu",
      "badanie znamion skórnych",
      "badanie wzroku",
      "badanie stomatologiczne",
      "pomiar ciśnienia krwi i pulsu",
      "kontrola masy ciała",
      "samobadanie piersi lub jąder"
    ],
    "categories": [
      "U lekarza",
      "Samodzielnie"
    ],
    "answer": {
      "U lekarza": [
        "badanie ginekologiczne lub urologiczne",
        "badanie krwi i moczu",
        "badanie znamion skórnych",
        "badanie wzroku",
        "badanie stomatologiczne"
      ],
      "Samodzielnie": [
        "pomiar ciśnienia krwi i pulsu",
        "kontrola masy ciała",
        "samobadanie piersi lub jąder"
      ]
    },
    "explanation": "Do badań wykonywanych u lekarza należą m.in. badania ginekologiczne lub urologiczne, krwi i moczu, znamion, wzroku i stomatologiczne; samodzielnie można m.in. mierzyć ciśnienie i puls, kontrolować masę ciała oraz wykonywać samobadanie."
  },
  {
    "id": "R11_ZDR_09",
    "section": "Zdrowie i profilaktyka",
    "type": "odd_one_out",
    "prompt": "Wskaż działanie, które nie jest zasadą profilaktyki: regularny sen, higiena, aktywność fizyczna, zażywanie leków bez potrzeby.",
    "options": null,
    "answer": "zażywanie leków bez potrzeby",
    "explanation": "Leki i suplementy nie powinny być stosowane bez wyraźnej potrzeby, natomiast sen, higiena i aktywność fizyczna wspierają profilaktykę."
  },
  {
    "id": "R11_ZDR_10",
    "section": "Zdrowie i profilaktyka",
    "type": "scenario",
    "prompt": "Uczeń czuje się zdrowo, ale raz w roku wykonuje badanie krwi i moczu. Jak najlepiej nazwać takie działanie?",
    "options": [
      "Profilaktyka",
      "Antybiotykoterapia",
      "Oddychanie komórkowe",
      "Termoregulacja",
      "Trawienie",
      "Antybiotykooporność"
    ],
    "answer": 0,
    "explanation": "Regularne badania służą wczesnemu wykrywaniu problemów zdrowotnych i są elementem profilaktyki."
  },
  {
    "id": "R11_ZDR_11",
    "section": "Zdrowie i profilaktyka",
    "type": "multi_select",
    "prompt": "Zaznacz choroby wywoływane przez wirusy.",
    "options": [
      "Świnka",
      "AIDS",
      "Różyczka",
      "Ospa wietrzna",
      "Malaria",
      "Toksoplazmoza"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Świnka, AIDS, różyczka i ospa wietrzna są chorobami wirusowymi; malaria i toksoplazmoza są wywoływane przez protisty."
  },
  {
    "id": "R11_LEK_01",
    "section": "Leki i antybiotyki",
    "type": "single_choice",
    "prompt": "W leczeniu jakich chorób ważnym narzędziem są antybiotyki?",
    "options": [
      "Chorób bakteryjnych",
      "Wszystkich chorób wirusowych",
      "Wyłącznie chorób pasożytniczych",
      "Wyłącznie chorób grzybiczych",
      "Każdej gorączki",
      "Każdego bólu"
    ],
    "answer": 0,
    "explanation": "Antybiotyki służą do zwalczania chorób bakteryjnych."
  },
  {
    "id": "R11_LEK_02",
    "section": "Leki i antybiotyki",
    "type": "true_false",
    "prompt": "Antybiotyki działają na wirusy powodujące przeziębienie i katar.",
    "options": null,
    "answer": false,
    "explanation": "Antybiotyki nie działają na wirusy, dlatego leczenie nimi przeziębienia, kataru lub innych chorób wirusowych jest bezcelowe."
  },
  {
    "id": "R11_LEK_03",
    "section": "Leki i antybiotyki",
    "type": "multi_select",
    "prompt": "Zaznacz zasady prawidłowego stosowania antybiotyku.",
    "options": [
      "Przyjmować go o określonych godzinach",
      "Nie pomijać dawek",
      "Nie skracać czasu leczenia",
      "Przestrzegać zaleconej dawki",
      "Odstawić lek od razu po pierwszej poprawie",
      "Samodzielnie zmieniać godziny przyjmowania"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Antybiotyk należy przyjmować zgodnie z zaleceniem: w odpowiednich dawkach, o określonych godzinach i przez cały zalecony czas.",
    "image": "r11_antybiotyk_zegar.jpg"
  },
  {
    "id": "R11_LEK_04",
    "section": "Leki i antybiotyki",
    "type": "fill_in",
    "prompt": "Zdolność bakterii do przeciwstawiania się działaniu antybiotyku to __________.",
    "options": null,
    "answer": [
      "antybiotykooporność"
    ],
    "altAnswers": [
      [
        "antybiotykooporność",
        "antybiotykoopornosc"
      ]
    ],
    "explanation": "Nieprzestrzeganie zaleceń dotyczących czasu terapii i dawki może sprzyjać antybiotykooporności bakterii."
  },
  {
    "id": "R11_LEK_05",
    "section": "Leki i antybiotyki",
    "type": "scenario",
    "prompt": "Osoba ma przeziębienie wywołane przez wirusy i chce rozpocząć antybiotyk bez konsultacji. Która ocena jest prawidłowa?",
    "options": [
      "To bezcelowe, bo antybiotyki nie działają na wirusy",
      "To właściwe, bo antybiotyk działa na każdy drobnoustrój",
      "To konieczne przy każdym katarze",
      "Antybiotyk zastępuje regularny sen",
      "Antybiotyk służy do uzupełniania diety",
      "Antybiotyk zawsze obniża temperaturę ciała"
    ],
    "answer": 0,
    "explanation": "Antybiotyki nie działają na wirusy, dlatego nie są właściwym leczeniem chorób wirusowych."
  },
  {
    "id": "R11_LEK_06",
    "section": "Leki i antybiotyki",
    "type": "single_choice",
    "prompt": "Dlaczego nie należy zażywać leków bez wyraźnej potrzeby?",
    "options": [
      "Niewłaściwa ilość może zaszkodzić, a leki mogą powodować działania niepożądane",
      "Każdy lek działa wyłącznie na bakterie",
      "Leki zawsze powodują antybiotykooporność",
      "Leki blokują wszystkie mechanizmy homeostazy",
      "Każdy lek wymaga pobytu w szpitalu",
      "Leki nigdy nie pomagają w chorobie"
    ],
    "answer": 0,
    "explanation": "Każda substancja w nieodpowiedniej ilości może zaszkodzić, a leki mogą wywoływać niekorzystne i niezamierzone działania."
  },
  {
    "id": "R11_LEK_07",
    "section": "Leki i antybiotyki",
    "type": "riddle",
    "prompt": "Jak nazywa się niekorzystne i niezamierzone działanie preparatu, które może wystąpić po przyjęciu leku?",
    "options": null,
    "answer": "działanie niepożądane",
    "altAnswers": [
      "działanie niepożądane",
      "działania niepożądane"
    ],
    "explanation": "Niekorzystne i niezamierzone działanie preparatu określa się jako działanie niepożądane."
  },
  {
    "id": "R11_LEK_08",
    "section": "Leki i antybiotyki",
    "type": "match",
    "prompt": "Połącz rodzaj informacji z tym, czego można szukać w ulotce leku.",
    "options": null,
    "left": [
      "Wskazania",
      "Ostrzeżenia",
      "Działania niepożądane",
      "Przechowywanie"
    ],
    "right": [
      "Przypadki, w których można stosować lek",
      "Informacje dotyczące szczególnych grup użytkowników",
      "Możliwe niekorzystne i niezamierzone skutki",
      "Opis warunków przechowywania leku"
    ],
    "answer": {
      "Wskazania": "Przypadki, w których można stosować lek",
      "Ostrzeżenia": "Informacje dotyczące szczególnych grup użytkowników",
      "Działania niepożądane": "Możliwe niekorzystne i niezamierzone skutki",
      "Przechowywanie": "Opis warunków przechowywania leku"
    },
    "explanation": "Ulotka zawiera m.in. wskazania, ostrzeżenia, opis możliwych działań niepożądanych i warunki przechowywania.",
    "image": "r11_ulotka_leku.jpg"
  },
  {
    "id": "R11_LEK_09",
    "section": "Leki i antybiotyki",
    "type": "odd_one_out",
    "prompt": "Wskaż chorobę, na którą antybiotyk nie będzie skuteczny: borelioza, tężec, angina, grypa.",
    "options": null,
    "answer": "grypa",
    "explanation": "Borelioza, tężec i angina są chorobami bakteryjnymi, natomiast grypa jest chorobą wirusową."
  },
  {
    "id": "R11_LEK_10",
    "section": "Leki i antybiotyki",
    "type": "scenario",
    "prompt": "Pacjent po kilku dniach antybiotykoterapii czuje wyraźną poprawę, ale lekarz zalecił dłuższą kurację. Co powinien zrobić?",
    "options": [
      "Kontynuować lek przez cały zalecony czas",
      "Przerwać leczenie natychmiast",
      "Pomijać co drugą dawkę",
      "Zmniejszyć dawkę bez konsultacji",
      "Brać lek tylko wtedy, gdy wróci ból",
      "Zastąpić antybiotyk suplementem diety"
    ],
    "answer": 0,
    "explanation": "Nie wolno skracać czasu leczenia nawet wtedy, gdy poprawa pojawia się wcześniej; należy przestrzegać zaleceń dotyczących dawki, godzin i długości kuracji."
  },
  {
    "id": "R11_TER_01",
    "section": "Kontrola i temperatura ciała",
    "type": "single_choice",
    "prompt": "Który układ odgrywa kluczową rolę w mechanizmach regulacyjnych homeostazy?",
    "options": [
      "Ośrodkowy układ nerwowy",
      "Układ szkieletowy",
      "Układ rozrodczy",
      "Układ pokarmowy",
      "Układ limfatyczny",
      "Układ ruchu"
    ],
    "answer": 0,
    "explanation": "Receptory przekazują informacje do ośrodkowego układu nerwowego, który je analizuje i w razie potrzeby uruchamia efektory."
  },
  {
    "id": "R11_TER_02",
    "section": "Kontrola i temperatura ciała",
    "type": "match",
    "prompt": "Połącz element mechanizmu homeostazy z jego rolą.",
    "options": null,
    "left": [
      "Receptor",
      "Ośrodkowy układ nerwowy",
      "Efektor"
    ],
    "right": [
      "Odbiera informację o stanie organizmu",
      "Analizuje i weryfikuje informację oraz podejmuje decyzję",
      "Wywołuje reakcję przywracającą równowagę"
    ],
    "answer": {
      "Receptor": "Odbiera informację o stanie organizmu",
      "Ośrodkowy układ nerwowy": "Analizuje i weryfikuje informację oraz podejmuje decyzję",
      "Efektor": "Wywołuje reakcję przywracającą równowagę"
    },
    "explanation": "Receptor wykrywa zmianę, ośrodkowy układ nerwowy analizuje informację, a efektor wykonuje reakcję przywracającą równowagę."
  },
  {
    "id": "R11_TER_03",
    "section": "Kontrola i temperatura ciała",
    "type": "true_false",
    "prompt": "Efektorami w mechanizmach homeostazy mogą być mięśnie lub gruczoły.",
    "options": null,
    "answer": true,
    "explanation": "Efektory to mięśnie lub gruczoły wywołujące pożądane reakcje organizmu."
  },
  {
    "id": "R11_TER_04",
    "section": "Kontrola i temperatura ciała",
    "type": "fill_in",
    "prompt": "Temperatura ciała zdrowego człowieka powinna wynosić między __________ a __________ °C.",
    "options": null,
    "answer": [
      "36,4",
      "37"
    ],
    "altAnswers": [
      [
        "36,4",
        "36.4",
        "36,4°C",
        "36,4 °C"
      ],
      [
        "37",
        "37,0",
        "37.0",
        "37°C",
        "37 °C"
      ]
    ],
    "explanation": "Człowiek jest organizmem stałocieplnym, a jego temperatura ciała powinna mieścić się między 36,4 a 37°C, z niewielkimi zmianami zależnymi m.in. od pory doby."
  },
  {
    "id": "R11_TER_05",
    "section": "Kontrola i temperatura ciała",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, od których mogą zależeć różnice w normach temperatury ciała.",
    "options": [
      "Miejsce pomiaru",
      "Wiek",
      "Płeć",
      "Pora doby",
      "Poziom aktywności fizycznej",
      "Faza cyklu miesiączkowego",
      "Kolor oczu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Na wynik i normę temperatury mogą wpływać miejsce pomiaru, wiek, płeć, pora doby, aktywność fizyczna oraz u kobiet faza cyklu miesiączkowego."
  },
  {
    "id": "R11_TER_06",
    "section": "Kontrola i temperatura ciała",
    "type": "sort",
    "prompt": "Przyporządkuj reakcje organizmu do sytuacji, w której temperatura ciała jest za niska albo za wysoka.",
    "options": null,
    "items": [
      "gruczoły potowe przestają wydzielać pot",
      "naczynia krwionośne skóry zwężają się",
      "zwiększa się szybkość przemiany materii",
      "gruczoły potowe wydzielają więcej potu",
      "naczynia krwionośne skóry rozszerzają się"
    ],
    "categories": [
      "Temperatura za niska",
      "Temperatura za wysoka"
    ],
    "answer": {
      "Temperatura za niska": [
        "gruczoły potowe przestają wydzielać pot",
        "naczynia krwionośne skóry zwężają się",
        "zwiększa się szybkość przemiany materii"
      ],
      "Temperatura za wysoka": [
        "gruczoły potowe wydzielają więcej potu",
        "naczynia krwionośne skóry rozszerzają się"
      ]
    },
    "explanation": "Przy wychłodzeniu organizm ogranicza utratę ciepła i zwiększa jego wytwarzanie, a przy przegrzaniu nasila pocenie i przepływ krwi przez skórę.",
    "image": "r11_zimno_skora.jpg"
  },
  {
    "id": "R11_TER_07",
    "section": "Kontrola i temperatura ciała",
    "type": "scenario",
    "prompt": "Podczas intensywnych ćwiczeń mięśnie wytwarzają więcej ciepła i temperatura ciała rośnie. Który zestaw reakcji pomaga ją obniżyć?",
    "options": [
      "Większe wydzielanie potu i rozszerzenie naczyń skóry",
      "Zatrzymanie pocenia i zwężenie naczyń skóry",
      "Zwiększenie szybkości przemiany materii i zatrzymanie pocenia",
      "Zmniejszenie przepływu krwi przez skórę i wzrost przemiany materii",
      "Zmniejszenie oddawania ciepła i brak potu",
      "Zwężenie naczyń skóry i zatrzymanie utraty ciepła"
    ],
    "answer": 0,
    "explanation": "Parowanie potu chłodzi skórę, a rozszerzenie naczyń zwiększa przepływ krwi i oddawanie ciepła na zewnątrz.",
    "image": "r11_biegacz_homeostaza.jpg"
  },
  {
    "id": "R11_TER_08",
    "section": "Kontrola i temperatura ciała",
    "type": "true_false",
    "prompt": "Przekroczenie około 41°C podczas gorączki może zagrażać życiu, ponieważ grozi uszkodzeniem białek w komórkach nerwowych.",
    "options": null,
    "answer": true,
    "explanation": "W czasie gorączki granica normy może zostać czasowo przesunięta do maksymalnie 41°C; przekroczenie tej wartości grozi uszkodzeniem białek w komórkach nerwowych.",
    "image": "r11_goraczka.jpg"
  },
  {
    "id": "R11_TER_09",
    "section": "Kontrola i temperatura ciała",
    "type": "sequence",
    "prompt": "Ułóż elementy mechanizmu przywracania homeostazy w kolejności działania.",
    "options": null,
    "items": [
      "Efektor wywołuje reakcję",
      "Receptor odbiera informację o zmianie",
      "Stan równowagi zostaje przywrócony",
      "Ośrodkowy układ nerwowy analizuje informację"
    ],
    "answer": [
      "Receptor odbiera informację o zmianie",
      "Ośrodkowy układ nerwowy analizuje informację",
      "Efektor wywołuje reakcję",
      "Stan równowagi zostaje przywrócony"
    ],
    "explanation": "Informacja o zmianie trafia od receptora do ośrodkowego układu nerwowego, który uruchamia efektor; reakcja efektora przywraca równowagę."
  },
  {
    "id": "R11_TER_10",
    "section": "Kontrola i temperatura ciała",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest efektorem: mięsień, gruczoł, gruczoł potowy, receptor.",
    "options": null,
    "answer": "receptor",
    "explanation": "Efektorami są mięśnie lub gruczoły, natomiast receptor odbiera informacje o stanie organizmu."
  },
  {
    "id": "R11_GLW_01",
    "section": "Glukoza i gospodarka wodna",
    "type": "single_choice",
    "prompt": "Które dwa hormony trzustki regulują stężenie glukozy we krwi?",
    "options": [
      "Insulina i glukagon",
      "Insulina i adrenalina",
      "Glukagon i tyroksyna",
      "Adrenalina i tyroksyna",
      "Insulina i melatonina",
      "Glukagon i melatonina"
    ],
    "answer": 0,
    "explanation": "W regulacji stężenia glukozy we krwi ważną rolę odgrywają insulina i glukagon produkowane przez trzustkę."
  },
  {
    "id": "R11_GLW_02",
    "section": "Glukoza i gospodarka wodna",
    "type": "match",
    "prompt": "Połącz element regulacji glukozy z właściwym skutkiem.",
    "options": null,
    "left": [
      "Insulina",
      "Glukagon",
      "Za wysokie stężenie glukozy",
      "Za niskie stężenie glukozy"
    ],
    "right": [
      "Sprzyja przekształcaniu glukozy w glikogen",
      "Sprzyja przekształcaniu glikogenu w glukozę",
      "Komórki wchłaniają więcej glukozy",
      "Komórki wchłaniają mniej glukozy"
    ],
    "answer": {
      "Insulina": "Sprzyja przekształcaniu glukozy w glikogen",
      "Glukagon": "Sprzyja przekształcaniu glikogenu w glukozę",
      "Za wysokie stężenie glukozy": "Komórki wchłaniają więcej glukozy",
      "Za niskie stężenie glukozy": "Komórki wchłaniają mniej glukozy"
    },
    "explanation": "Przy wysokim stężeniu glukozy komórki pobierają jej więcej, a insulina sprzyja tworzeniu glikogenu; przy niskim stężeniu pobieranie spada, a glukagon sprzyja uwalnianiu glukozy z glikogenu."
  },
  {
    "id": "R11_GLW_03",
    "section": "Glukoza i gospodarka wodna",
    "type": "multi_select",
    "prompt": "Zaznacz reakcje związane ze zbyt wysokim stężeniem glukozy we krwi.",
    "options": [
      "Zwiększa się zużycie nadmiaru glukozy",
      "Komórki wchłaniają więcej glukozy",
      "Glukoza pod wpływem insuliny przekształca się w glikogen",
      "Glikogen pod wpływem glukagonu przekształca się w glukozę",
      "Komórki wchłaniają mniej glukozy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przy nadmiarze glukozy zwiększa się jej zużycie i pobieranie przez komórki, a pod wpływem insuliny glukoza jest przekształcana w glikogen.",
    "image": "r11_posilek_jablko.jpg"
  },
  {
    "id": "R11_GLW_04",
    "section": "Glukoza i gospodarka wodna",
    "type": "multi_select",
    "prompt": "Zaznacz reakcje związane ze zbyt niskim stężeniem glukozy we krwi.",
    "options": [
      "Spada tempo zużycia glukozy",
      "Komórki wchłaniają mniej glukozy",
      "Glikogen pod wpływem glukagonu przekształca się w glukozę",
      "Glukoza pod wpływem insuliny przekształca się w glikogen",
      "Komórki wchłaniają więcej glukozy"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przy niedoborze glukozy organizm ogranicza jej zużycie i pobieranie przez komórki, a glukagon sprzyja przekształcaniu glikogenu w glukozę."
  },
  {
    "id": "R11_GLW_05",
    "section": "Glukoza i gospodarka wodna",
    "type": "riddle",
    "prompt": "Jaki narząd produkuje insulinę i glukagon?",
    "options": null,
    "answer": "trzustka",
    "altAnswers": [
      "trzustka",
      "trzustkę"
    ],
    "explanation": "Insulina i glukagon są hormonami produkowanymi przez trzustkę."
  },
  {
    "id": "R11_GLW_06",
    "section": "Glukoza i gospodarka wodna",
    "type": "fill_in",
    "prompt": "Organizm czerpie wodę z __________ i przyjmowanych płynów, a także wytwarza ją w procesie __________.",
    "options": null,
    "answer": [
      "pokarmu",
      "oddychania komórkowego"
    ],
    "altAnswers": [
      [
        "pokarmu",
        "pożywienia"
      ],
      [
        "oddychania komórkowego",
        "oddychanie komórkowe"
      ]
    ],
    "explanation": "Woda pochodzi z pokarmu i płynów, a organizm wytwarza ją również podczas oddychania komórkowego."
  },
  {
    "id": "R11_GLW_07",
    "section": "Glukoza i gospodarka wodna",
    "type": "single_choice",
    "prompt": "Na czym opiera się homeostaza gospodarki wodnej?",
    "options": [
      "Na równowadze między przyjmowaniem wody a jej wydalaniem",
      "Na całkowitym zatrzymaniu wody w organizmie",
      "Na całkowitym wyłączeniu pracy nerek",
      "Wyłącznie na piciu podczas posiłków",
      "Wyłącznie na poceniu się",
      "Na stałym zwiększaniu ilości wody we krwi"
    ],
    "answer": 0,
    "explanation": "Podstawą gospodarki wodnej jest równowaga między przyjmowaniem wody, kontrolowanym przez pragnienie, a jej wydalaniem m.in. z moczem."
  },
  {
    "id": "R11_GLW_08",
    "section": "Glukoza i gospodarka wodna",
    "type": "scenario",
    "prompt": "W organizmie jest za mało wody. Który zestaw reakcji pomaga zatrzymać wodę?",
    "options": [
      "Pragnienie, mniejsze wydalanie wody przez nerki i większe uwalnianie hormonu zatrzymującego wodę",
      "Brak pragnienia, większe wydalanie wody i mniej hormonu",
      "Większe wydalanie wody i bardziej rozcieńczony mocz",
      "Brak zmian w pracy nerek i brak reakcji mózgu",
      "Większe pocenie i rozszerzenie naczyń skóry",
      "Przekształcanie glukozy w glikogen"
    ],
    "answer": 0,
    "explanation": "Przy niedoborze wody pojawia się pragnienie, mniej wody opuszcza nerki i do krwiobiegu uwalnia się więcej hormonu odpowiedzialnego za zatrzymanie wody.",
    "image": "r11_woda_pragnienie.jpg"
  },
  {
    "id": "R11_GLW_09",
    "section": "Glukoza i gospodarka wodna",
    "type": "sort",
    "prompt": "Przyporządkuj reakcje gospodarki wodnej do sytuacji: za mało albo za dużo wody w organizmie.",
    "options": null,
    "items": [
      "odczuwanie pragnienia",
      "mniej wody opuszcza nerki",
      "więcej hormonu odpowiedzialnego za gospodarkę wodną",
      "więcej wody opuszcza nerki",
      "bardziej rozcieńczony mocz",
      "mniej hormonu odpowiedzialnego za gospodarkę wodną"
    ],
    "categories": [
      "Za mało wody",
      "Za dużo wody"
    ],
    "answer": {
      "Za mało wody": [
        "odczuwanie pragnienia",
        "mniej wody opuszcza nerki",
        "więcej hormonu odpowiedzialnego za gospodarkę wodną"
      ],
      "Za dużo wody": [
        "więcej wody opuszcza nerki",
        "bardziej rozcieńczony mocz",
        "mniej hormonu odpowiedzialnego za gospodarkę wodną"
      ]
    },
    "explanation": "Niedobór wody uruchamia mechanizmy jej zatrzymywania, a nadmiar zwiększa wydalanie przez nerki i prowadzi do powstawania bardziej rozcieńczonego moczu."
  },
  {
    "id": "R11_GLW_10",
    "section": "Glukoza i gospodarka wodna",
    "type": "true_false",
    "prompt": "Gdy wody w organizmie jest za dużo, więcej wody opuszcza nerki, a mocz staje się bardziej rozcieńczony.",
    "options": null,
    "answer": true,
    "explanation": "Przy nadmiarze wody nerki wydalają jej więcej, co prowadzi do bardziej rozcieńczonego moczu."
  },
  {
    "id": "R11_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz zaburzenie parametru z reakcją pomagającą przywrócić równowagę.",
    "options": null,
    "left": [
      "Za wysoka temperatura ciała",
      "Za niska temperatura ciała",
      "Za niskie stężenie glukozy",
      "Za mało wody"
    ],
    "right": [
      "Gruczoły potowe wydzielają więcej potu",
      "Naczynia krwionośne skóry zwężają się",
      "Glikogen przekształca się w glukozę pod wpływem glukagonu",
      "Mniej wody opuszcza nerki"
    ],
    "answer": {
      "Za wysoka temperatura ciała": "Gruczoły potowe wydzielają więcej potu",
      "Za niska temperatura ciała": "Naczynia krwionośne skóry zwężają się",
      "Za niskie stężenie glukozy": "Glikogen przekształca się w glukozę pod wpływem glukagonu",
      "Za mało wody": "Mniej wody opuszcza nerki"
    },
    "explanation": "Każdy z mechanizmów przeciwdziała konkretnemu odchyleniu parametru od normy: przegrzaniu, wychłodzeniu, niedoborowi glukozy lub wody."
  },
  {
    "id": "R11_HARD_02",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Po obfitym posiłku uczeń zaczyna intensywnie ćwiczyć. Jednocześnie wzrasta stężenie glukozy we krwi i temperatura ciała. Która para reakcji pomaga przywrócić oba parametry do normy?",
    "options": [
      "Przekształcanie glukozy w glikogen pod wpływem insuliny oraz zwiększone wydzielanie potu",
      "Przekształcanie glikogenu w glukozę oraz zatrzymanie pocenia",
      "Zmniejszenie pobierania glukozy przez komórki oraz zwężenie naczyń skóry",
      "Zwiększenie uwalniania glukagonu oraz zahamowanie oddawania ciepła",
      "Zmniejszenie zużycia glukozy oraz wzrost przemiany materii",
      "Większe wydalanie wody przez nerki oraz zwężenie naczyń skóry"
    ],
    "answer": 0,
    "explanation": "Przy wysokim stężeniu glukozy insulina sprzyja tworzeniu glikogenu, a przy wzroście temperatury wydzielanie potu pomaga ochłodzić ciało."
  },
  {
    "id": "R11_HARD_03",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Po posiłku może wzrosnąć __________, a podczas ćwiczeń może wzrosnąć __________.",
    "options": null,
    "answer": [
      "stężenie glukozy we krwi",
      "temperatura ciała"
    ],
    "altAnswers": [
      [
        "stężenie glukozy we krwi",
        "poziom glukozy we krwi"
      ],
      [
        "temperatura ciała",
        "temperatura"
      ]
    ],
    "explanation": "Posiłek zwiększa dopływ glukozy do krwi, natomiast pracujące mięśnie podczas ćwiczeń zwiększają produkcję ciepła."
  },
  {
    "id": "R11_HARD_04",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż pełny ciąg reakcji regulacyjnej od zmiany parametru do odzyskania równowagi.",
    "options": null,
    "items": [
      "Efektor wywołuje reakcję",
      "Pojawia się zaburzenie parametru",
      "Ośrodkowy układ nerwowy analizuje informację",
      "Równowaga zostaje przywrócona",
      "Receptor odbiera informację o zmianie"
    ],
    "answer": [
      "Pojawia się zaburzenie parametru",
      "Receptor odbiera informację o zmianie",
      "Ośrodkowy układ nerwowy analizuje informację",
      "Efektor wywołuje reakcję",
      "Równowaga zostaje przywrócona"
    ],
    "explanation": "Zmiana parametru jest wykrywana przez receptor, informacja trafia do ośrodkowego układu nerwowego, a aktywowany efektor wywołuje reakcję prowadzącą do równowagi."
  },
  {
    "id": "R11_HARD_05",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż reakcję, która nie pasuje do zbyt wysokiego stężenia glukozy: większe zużycie glukozy, większe wchłanianie glukozy przez komórki, przekształcanie glukozy w glikogen, przekształcanie glikogenu w glukozę.",
    "options": null,
    "answer": "przekształcanie glikogenu w glukozę",
    "explanation": "Przekształcanie glikogenu w glukozę zachodzi przy zbyt niskim stężeniu glukozy i jest związane z działaniem glukagonu."
  },
  {
    "id": "R11_HARD_06",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Stoisz przy otwartym oknie, na zewnątrz jest mróz. Który zestaw zmian pomaga ograniczyć wychłodzenie?",
    "options": [
      "Zatrzymanie wydzielania potu, zwężenie naczyń skóry i wzrost szybkości przemiany materii",
      "Większe wydzielanie potu, rozszerzenie naczyń skóry i spadek przemiany materii",
      "Większe wydalanie wody przez nerki i rozszerzenie naczyń skóry",
      "Większe pobieranie glukozy przez komórki i silniejsze pocenie",
      "Rozszerzenie naczyń skóry i zwiększone oddawanie ciepła",
      "Zatrzymanie wody w nerkach i większe wydzielanie potu"
    ],
    "answer": 0,
    "explanation": "Przy zbyt niskiej temperaturze organizm ogranicza utratę ciepła przez zatrzymanie pocenia i zwężenie naczyń skóry oraz zwiększa wytwarzanie ciepła przez szybszą przemianę materii.",
    "image": "r11_zimno_skora.jpg"
  },
  {
    "id": "R11_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz informacje, które mogą znajdować się w ulotce leku.",
    "options": [
      "Nazwa leku i zawartych w nim substancji czynnych",
      "Wskazania do stosowania",
      "Informacje potrzebne przed rozpoczęciem stosowania",
      "Ostrzeżenia dotyczące szczególnych grup użytkowników",
      "Opis możliwych działań niepożądanych",
      "Warunki przechowywania",
      "Gwarantowana data całkowitego wyleczenia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Ulotka zawiera informacje o leku, wskazania, ważne informacje przed użyciem, ostrzeżenia, możliwe działania niepożądane i warunki przechowywania; nie gwarantuje daty wyleczenia.",
    "image": "r11_ulotka_leku.jpg"
  },
  {
    "id": "R11_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Suplementy diety mają uzupełniać dietę, a nie leczyć dolegliwości.",
    "options": null,
    "answer": true,
    "explanation": "Zadaniem suplementów diety jest uzupełnienie diety, nie leczenie dolegliwości."
  },
  {
    "id": "R11_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj choroby do rodzaju czynnika, który je wywołuje.",
    "options": null,
    "items": [
      "AIDS",
      "odra",
      "borelioza",
      "tężec",
      "malaria",
      "toksoplazmoza",
      "tasiemczyca",
      "włośnica"
    ],
    "categories": [
      "Wirusy",
      "Bakterie",
      "Protisty",
      "Pasożyty zwierzęce"
    ],
    "answer": {
      "Wirusy": [
        "AIDS",
        "odra"
      ],
      "Bakterie": [
        "borelioza",
        "tężec"
      ],
      "Protisty": [
        "malaria",
        "toksoplazmoza"
      ],
      "Pasożyty zwierzęce": [
        "tasiemczyca",
        "włośnica"
      ]
    },
    "explanation": "AIDS i odra są chorobami wirusowymi, borelioza i tężec bakteryjnymi, malaria i toksoplazmoza są wywoływane przez protisty, a tasiemczyca i włośnica przez pasożyty zwierzęce."
  },
  {
    "id": "R11_HARD_10",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz badanie profilaktyczne z odpowiednią informacją.",
    "options": null,
    "left": [
      "Badanie stomatologiczne",
      "Badanie krwi i moczu",
      "Badania ginekologiczne u kobiet",
      "Badania urologiczne u mężczyzn"
    ],
    "right": [
      "Dwa razy w roku",
      "Co najmniej raz w roku",
      "M.in. profilaktyka raka piersi i raka szyjki macicy",
      "M.in. profilaktyka raka prostaty"
    ],
    "answer": {
      "Badanie stomatologiczne": "Dwa razy w roku",
      "Badanie krwi i moczu": "Co najmniej raz w roku",
      "Badania ginekologiczne u kobiet": "M.in. profilaktyka raka piersi i raka szyjki macicy",
      "Badania urologiczne u mężczyzn": "M.in. profilaktyka raka prostaty"
    },
    "explanation": "Badanie stomatologiczne wykonuje się dwa razy w roku, badanie krwi i moczu co najmniej raz w roku, a badania ginekologiczne i urologiczne służą m.in. profilaktyce nowotworowej.",
    "image": "r11_gabinet_lekarski.jpg"
  },
  {
    "id": "R11_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaka wartość stanowi podaną maksymalną granicę czasowo przesuniętej normy podczas gorączki?",
    "options": [
      "41°C",
      "37°C",
      "36,4°C",
      "35°C",
      "45°C",
      "30°C"
    ],
    "answer": 0,
    "explanation": "Podczas gorączki granica normy może być czasowo przesunięta do maksymalnie 41°C; przekroczenie tej wartości jest niebezpieczne.",
    "image": "r11_goraczka.jpg"
  },
  {
    "id": "R11_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Ulotka leku przeciwbólowego mówi, że nie wolno podawać go dzieciom poniżej 12. roku życia. Ania ma 11 lat i bardzo boli ją głowa. Czy powinna przyjąć ten lek?",
    "options": [
      "Nie, ponieważ ma mniej niż 12 lat",
      "Tak, bo ból głowy znosi każde przeciwwskazanie",
      "Tak, jeśli weźmie podwójną dawkę",
      "Tak, bo wiek nie ma znaczenia",
      "Nie, bo każdy lek jest zakazany dla dzieci",
      "Tak, jeśli pominie ulotkę"
    ],
    "answer": 0,
    "explanation": "Leku nie można podawać dzieciom poniżej 12. roku życia, więc 11-letnia Ania nie powinna go przyjąć.",
    "image": "r11_ulotka_leku.jpg"
  },
  {
    "id": "R11_HARD_13",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz choroby, na które antybiotyk może być skuteczny.",
    "options": [
      "Borelioza",
      "Tężec",
      "Angina",
      "Gruźlica",
      "Grypa",
      "Glistnica"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Borelioza, tężec, angina i gruźlica są chorobami bakteryjnymi; grypa jest wirusowa, a glistnica jest chorobą pasożytniczą.",
    "image": "r11_antybiotyk_zegar.jpg"
  },
  {
    "id": "R11_HARD_14",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem mięśniem lub gruczołem. Po sygnale z układu nerwowego wywołuję reakcję, która pomaga przywrócić równowagę. Jak się nazywam?",
    "options": null,
    "answer": "efektor",
    "altAnswers": [
      "efektor",
      "efektory"
    ],
    "explanation": "Efektor to mięsień lub gruczoł wywołujący reakcję potrzebną do przywrócenia homeostazy."
  }
];

const chapter = {
  id: "r11",
  number: 11,
  title: "Homeostaza",
  icon: "⚖️",
  sectionOrder: [
    "Homeostaza i współpraca układów",
    "Zdrowie i profilaktyka",
    "Leki i antybiotyki",
    "Kontrola i temperatura ciała",
    "Glukoza i gospodarka wodna"
  ],
  sectionIcons: {
    "Homeostaza i współpraca układów": "⚖️",
    "Zdrowie i profilaktyka": "🩺",
    "Leki i antybiotyki": "💊",
    "Kontrola i temperatura ciała": "🌡️",
    "Glukoza i gospodarka wodna": "💧"
  },
  exercises: ALL_EXERCISES
};

export default chapter;
