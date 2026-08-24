// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SKL  = Składniki pokarmowe i ich rola
//   POK  = Budowa i funkcje układu pokarmowego
//   CHO  = Gdy układ pokarmowy choruje
//   MOC  = Budowa i funkcje układu moczowego
//   PRO  = Jak dbać o układ moczowy?
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R02_SKL_01",
    "section": "Składniki pokarmowe i ich rola",
    "type": "single_choice",
    "prompt": "Który składnik pokarmowy jest głównym materiałem wykorzystywanym do budowy własnych komórek organizmu?",
    "options": [
      "Białka",
      "Cukry",
      "Tłuszcze",
      "Witaminy",
      "Woda",
      "Błonnik"
    ],
    "answer": 0,
    "explanation": "Organizm pozyskuje aminokwasy z białek zawartych w pożywieniu i wykorzystuje je do budowy własnych komórek.",
    "image": "r02_skladniki_pokarmowe.jpg"
  },
  {
    "id": "R02_SKL_02",
    "section": "Składniki pokarmowe i ich rola",
    "type": "match",
    "prompt": "Połącz składnik pokarmowy z jego rolą w organizmie.",
    "options": null,
    "left": [
      "białka",
      "cukry",
      "tłuszcze",
      "witamina D"
    ],
    "right": [
      "budowa komórek",
      "szybkie źródło energii",
      "zapas energii i pomoc we wchłanianiu witamin A D E K",
      "zdrowe kości i zęby"
    ],
    "answer": {
      "białka": "budowa komórek",
      "cukry": "szybkie źródło energii",
      "tłuszcze": "zapas energii i pomoc we wchłanianiu witamin A D E K",
      "witamina D": "zdrowe kości i zęby"
    },
    "explanation": "Białka pełnią funkcje budulcowe, cukry są ważnym źródłem energii, tłuszcze stanowią jej zapas i ułatwiają przyswajanie witamin A, D, E i K, a witamina D wspiera zdrowie kości i zębów."
  },
  {
    "id": "R02_SKL_03",
    "section": "Składniki pokarmowe i ich rola",
    "type": "true_false",
    "prompt": "Woda pomaga organizmowi utrzymywać stałą temperaturę ciała.",
    "options": null,
    "answer": true,
    "explanation": "Woda uczestniczy w regulacji temperatury ciała, a także w transporcie substancji, oczyszczaniu organizmu i wchłanianiu składników odżywczych.",
    "image": "r02_nawodnienie.jpg"
  },
  {
    "id": "R02_SKL_04",
    "section": "Składniki pokarmowe i ich rola",
    "type": "fill_in",
    "prompt": "Orientacyjne dobowe zapotrzebowanie na wodę wynosi około __________ l na kilogram masy ciała.",
    "options": null,
    "answer": [
      "0,03"
    ],
    "altAnswers": [
      [
        "0,03",
        "0.03"
      ]
    ],
    "explanation": "Orientacyjne zapotrzebowanie wynosi około 0,03 l wody na każdy kilogram masy ciała na dobę."
  },
  {
    "id": "R02_SKL_05",
    "section": "Składniki pokarmowe i ich rola",
    "type": "multi_select",
    "prompt": "Zaznacz objawy, które mogą świadczyć o odwodnieniu.",
    "options": [
      "uczucie pragnienia",
      "suche usta",
      "ból i zawroty głowy",
      "rzadkie oddawanie moczu",
      "osłabienie lub omdlenie",
      "częste oddawanie bardzo jasnego moczu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do objawów odwodnienia należą pragnienie, suche usta, ból i zawroty głowy, rzadkie oddawanie moczu oraz osłabienie lub omdlenia.",
    "image": "r02_nawodnienie.jpg"
  },
  {
    "id": "R02_SKL_06",
    "section": "Składniki pokarmowe i ich rola",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest typowym źródłem błonnika: fasola, płatki owsiane, chleb razowy, słodzony napój.",
    "options": null,
    "answer": "słodzony napój",
    "explanation": "Błonnik występuje m.in. w roślinach strączkowych, ziarnach zbóż, pieczywie pełnoziarnistym i płatkach owsianych."
  },
  {
    "id": "R02_SKL_07",
    "section": "Składniki pokarmowe i ich rola",
    "type": "scenario",
    "prompt": "W upalny dzień Lena długo ćwiczy na boisku. Jak powinna zmienić ilość wypijanych płynów w porównaniu ze zwykłym dniem?",
    "options": [
      "Pić dużo więcej niż zwykle",
      "Pić mniej niż zwykle",
      "Nie zmieniać ilości płynów",
      "Pić dopiero po zakończeniu całego dnia"
    ],
    "answer": 0,
    "explanation": "W czasie upału i wysiłku organizm traci więcej wody, dlatego trzeba pić więcej niż zwykle."
  },
  {
    "id": "R02_SKL_08",
    "section": "Składniki pokarmowe i ich rola",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady cukrów do odpowiednich grup.",
    "options": null,
    "items": [
      "glukoza",
      "skrobia",
      "glikogen"
    ],
    "categories": [
      "cukry proste",
      "cukry złożone"
    ],
    "answer": {
      "cukry proste": [
        "glukoza"
      ],
      "cukry złożone": [
        "skrobia",
        "glikogen"
      ]
    },
    "explanation": "Glukoza jest cukrem prostym, natomiast skrobia i glikogen to cukry złożone."
  },
  {
    "id": "R02_SKL_09",
    "section": "Składniki pokarmowe i ich rola",
    "type": "riddle",
    "prompt": "Nie jest trawiony ani wchłaniany, chłonie wodę, pęcznieje i przyspiesza ruchy jelit. Co to jest?",
    "options": null,
    "answer": "błonnik",
    "altAnswers": [
      "błonnik",
      "blonnik",
      "błonnik pokarmowy",
      "blonnik pokarmowy"
    ],
    "explanation": "Błonnik przechodzi przez układ pokarmowy niestrawiony, chłonie wodę, zwiększa objętość treści pokarmowej i pomaga zapobiegać zaparciom."
  },
  {
    "id": "R02_SKL_10",
    "section": "Składniki pokarmowe i ich rola",
    "type": "multi_select",
    "prompt": "Zaznacz zmiany zgodne z zasadami zdrowej diety.",
    "options": [
      "zamiana jasnego pieczywa na pełnoziarniste",
      "zamiana słodkich napojów na wodę",
      "częstsze jedzenie warzyw",
      "częstsze jedzenie roślin strączkowych",
      "zastępowanie ryb czerwonym mięsem",
      "ograniczanie produktów z pełnego ziarna"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Warto jeść dużo warzyw, roślin strączkowych i produktów z pełnego ziarna oraz zastępować słodkie napoje wodą i jasne pieczywo pełnoziarnistym."
  },
  {
    "id": "R02_POK_01",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "sequence",
    "prompt": "Ułóż wybrane odcinki przewodu pokarmowego w kolejności zgodnej z drogą pokarmu.",
    "options": null,
    "items": [
      "żołądek",
      "odbyt",
      "jama ustna",
      "jelito grube",
      "przełyk",
      "dwunastnica"
    ],
    "answer": [
      "jama ustna",
      "przełyk",
      "żołądek",
      "dwunastnica",
      "jelito grube",
      "odbyt"
    ],
    "explanation": "Pokarm trafia kolejno z jamy ustnej przez przełyk do żołądka, następnie do początkowego odcinka jelita cienkiego, dalej do jelita grubego i na końcu do odbytu.",
    "image": "r02_uklad_pokarmowy.jpg"
  },
  {
    "id": "R02_POK_02",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "match",
    "prompt": "Połącz gruczoł trawienny z jego działaniem.",
    "options": null,
    "left": [
      "ślinianki",
      "wątroba",
      "trzustka"
    ],
    "right": [
      "wytwarzają ślinę z enzymami trawiącymi cukry",
      "wytwarza żółć umożliwiającą trawienie tłuszczów",
      "wytwarza enzymy trawiące białka cukry i tłuszcze"
    ],
    "answer": {
      "ślinianki": "wytwarzają ślinę z enzymami trawiącymi cukry",
      "wątroba": "wytwarza żółć umożliwiającą trawienie tłuszczów",
      "trzustka": "wytwarza enzymy trawiące białka cukry i tłuszcze"
    },
    "explanation": "Ślinianki produkują ślinę z enzymami trawiącymi cukry, wątroba wytwarza żółć potrzebną przy trawieniu tłuszczów, a trzustka dostarcza enzymy trawiące białka, cukry i tłuszcze."
  },
  {
    "id": "R02_POK_03",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "single_choice",
    "prompt": "W którym odcinku przewodu pokarmowego wchłaniana jest do krwi większość składników odżywczych?",
    "options": [
      "W jelicie cienkim",
      "W przełyku",
      "W jelicie grubym",
      "W odbycie",
      "W jamie ustnej",
      "W gardle"
    ],
    "answer": 0,
    "explanation": "Jelito cienkie jest najdłuższym odcinkiem przewodu pokarmowego i to w nim zachodzi wchłanianie do krwi większości składników odżywczych.",
    "image": "r02_uklad_pokarmowy.jpg"
  },
  {
    "id": "R02_POK_04",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "true_false",
    "prompt": "Ruchy perystaltyczne to skurcze mięśni przewodu pokarmowego, które przesuwają pokarm od przełyku w kierunku odbytu.",
    "options": null,
    "answer": true,
    "explanation": "Skurcze mięśni gładkich przewodu pokarmowego przesuwają treść pokarmową, tworząc ruchy nazywane perystaltyką."
  },
  {
    "id": "R02_POK_05",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "fill_in",
    "prompt": "Dzieci mają __________ zębów mlecznych.",
    "options": null,
    "answer": [
      "20"
    ],
    "altAnswers": [
      [
        "20",
        "dwadzieścia"
      ]
    ],
    "explanation": "Uzębienie mleczne człowieka liczy 20 zębów.",
    "image": "r02_rodzaje_zebow.jpg"
  },
  {
    "id": "R02_POK_06",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "match",
    "prompt": "Połącz rodzaj zęba z jego główną funkcją.",
    "options": null,
    "left": [
      "siekacze",
      "kły",
      "trzonowce"
    ],
    "right": [
      "odgryzanie kawałków pożywienia",
      "rozrywanie pokarmu",
      "miażdżenie i rozdrabnianie pokarmu"
    ],
    "answer": {
      "siekacze": "odgryzanie kawałków pożywienia",
      "kły": "rozrywanie pokarmu",
      "trzonowce": "miażdżenie i rozdrabnianie pokarmu"
    },
    "explanation": "Ostra krawędź siekaczy służy do odgryzania, spiczaste kły pomagają rozrywać pokarm, a duża powierzchnia trzonowców umożliwia jego miażdżenie i rozdrabnianie.",
    "image": "r02_rodzaje_zebow.jpg"
  },
  {
    "id": "R02_POK_07",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz działania pomagające zapobiegać próchnicy.",
    "options": [
      "szczotkowanie zębów przynajmniej dwa razy dziennie",
      "używanie pasty z fluorem",
      "nitkowanie przestrzeni między zębami",
      "regularne wizyty u stomatologa",
      "częste picie słodzonych napojów gazowanych",
      "zwiększanie ilości słodyczy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyka próchnicy obejmuje regularne szczotkowanie, pastę z fluorem, nitkowanie i kontrole stomatologiczne oraz ograniczanie słodyczy i napojów gazowanych.",
    "image": "r02_prochnica_zeba.jpg"
  },
  {
    "id": "R02_POK_08",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest częścią budowy zęba: szkliwo, zębina, miazga, moczowód.",
    "options": null,
    "answer": "moczowód",
    "explanation": "Do budowy zęba należą m.in. szkliwo, zębina i miazga. Moczowód jest elementem układu moczowego."
  },
  {
    "id": "R02_POK_09",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "scenario",
    "prompt": "U ucznia bakterie wykorzystują cukry z resztek pokarmowych i wytwarzają kwasy niszczące szkliwo oraz zębinę. Jaki proces chorobowy opisano?",
    "options": [
      "próchnicę",
      "kamień nerkowy",
      "WZW A",
      "odwodnienie"
    ],
    "answer": 0,
    "explanation": "Próchnica polega na niszczeniu twardych tkanek zęba przez kwasy wytwarzane przez bakterie korzystające z cukrów z resztek pokarmowych."
  },
  {
    "id": "R02_POK_10",
    "section": "Budowa i funkcje układu pokarmowego",
    "type": "single_choice",
    "prompt": "Co dzieje się przede wszystkim w jelicie grubym?",
    "options": [
      "Odzyskiwana jest woda i formuje się kał",
      "Rozpoczyna się trawienie cukrów",
      "Powstaje żółć",
      "Pokarm jest odgryzany przez zęby",
      "Wytwarzana jest ślina",
      "Większość składników odżywczych trafia do krwi"
    ],
    "answer": 0,
    "explanation": "W jelicie grubym odzyskiwana jest woda, a z niestrawionych resztek formuje się kał.",
    "image": "r02_uklad_pokarmowy.jpg"
  },
  {
    "id": "R02_CHO_01",
    "section": "Gdy układ pokarmowy choruje",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki, które mogą zaburzać działanie układu pokarmowego.",
    "options": [
      "nieprawidłowe nawyki żywieniowe",
      "stres",
      "brak higieny",
      "zakażenia wirusami bakteriami lub pasożytami",
      "nadmiar używek",
      "regularne mycie rąk"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Układowi pokarmowemu mogą szkodzić niewłaściwa dieta, stres, używki, brak higieny oraz zakażenia wirusami, bakteriami i pasożytami."
  },
  {
    "id": "R02_CHO_02",
    "section": "Gdy układ pokarmowy choruje",
    "type": "sort",
    "prompt": "Przyporządkuj informacje do odpowiedniej drogi zakażenia wirusowym zapaleniem wątroby.",
    "options": null,
    "items": [
      "zakażone jedzenie lub woda",
      "kontakt z płynami ustrojowymi",
      "mycie rąk przed jedzeniem",
      "używanie sterylnych igieł"
    ],
    "categories": [
      "WZW A",
      "WZW B i C"
    ],
    "answer": {
      "WZW A": [
        "zakażone jedzenie lub woda",
        "mycie rąk przed jedzeniem"
      ],
      "WZW B i C": [
        "kontakt z płynami ustrojowymi",
        "używanie sterylnych igieł"
      ]
    },
    "explanation": "WZW A szerzy się m.in. przez zakażoną żywność i wodę, dlatego ważna jest higiena rąk. WZW B i C przenoszą się przez płyny ustrojowe, więc profilaktyka obejmuje używanie sterylnych igieł.",
    "image": "r02_wirusowe_zapalenie_watroby.jpg"
  },
  {
    "id": "R02_CHO_03",
    "section": "Gdy układ pokarmowy choruje",
    "type": "true_false",
    "prompt": "Istnieje szczepionka chroniąca przed wirusowym zapaleniem wątroby typu C.",
    "options": null,
    "answer": false,
    "explanation": "Nie ma szczepionki przeciw WZW C. W profilaktyce ważne jest unikanie kontaktu z zakażonymi płynami ustrojowymi i używanie sterylnego sprzętu.",
    "image": "r02_wirusowe_zapalenie_watroby.jpg"
  },
  {
    "id": "R02_CHO_04",
    "section": "Gdy układ pokarmowy choruje",
    "type": "single_choice",
    "prompt": "Które działanie pomaga zmniejszać ryzyko raka jelita grubego?",
    "options": [
      "Dieta bogata w błonnik",
      "Zwiększenie ilości czerwonego mięsa",
      "Ograniczenie warzyw",
      "Unikanie produktów pełnoziarnistych",
      "Częste picie słodzonych napojów",
      "Dieta uboga w błonnik"
    ],
    "answer": 0,
    "explanation": "W profilaktyce raka jelita grubego zalecana jest dieta bogata w błonnik oraz unikanie nadmiernej ilości czerwonego mięsa i tłuszczów."
  },
  {
    "id": "R02_CHO_05",
    "section": "Gdy układ pokarmowy choruje",
    "type": "match",
    "prompt": "Połącz grupę bakterii jelitowych z opisaną rolą.",
    "options": null,
    "left": [
      "bifidobakterie",
      "bakterie kwasu mlekowego",
      "pałeczka okrężnicy",
      "bakterie beztlenowe"
    ],
    "right": [
      "pomagają trawić błonnik",
      "wytwarzają kwas mlekowy i chronią przed bakteriami chorobotwórczymi",
      "w niewielkiej ilości wspomaga produkcję witaminy K",
      "rozkładają niestrawione resztki pokarmowe"
    ],
    "answer": {
      "bifidobakterie": "pomagają trawić błonnik",
      "bakterie kwasu mlekowego": "wytwarzają kwas mlekowy i chronią przed bakteriami chorobotwórczymi",
      "pałeczka okrężnicy": "w niewielkiej ilości wspomaga produkcję witaminy K",
      "bakterie beztlenowe": "rozkładają niestrawione resztki pokarmowe"
    },
    "explanation": "Różne grupy bakterii jelitowych mają odmienne role: wspomagają trawienie, produkcję witamin, ochronę przed patogenami i rozkład niestrawionych resztek.",
    "image": "r02_flora_jelitowa.jpg"
  },
  {
    "id": "R02_CHO_06",
    "section": "Gdy układ pokarmowy choruje",
    "type": "fill_in",
    "prompt": "Jogurt, kefir i kiszonki dostarczają __________, a cebula, czosnek i banany dostarczają __________.",
    "options": null,
    "answer": [
      "probiotyki",
      "prebiotyki"
    ],
    "altAnswers": [
      [
        "probiotyki",
        "probiotyków"
      ],
      [
        "prebiotyki",
        "prebiotyków"
      ]
    ],
    "explanation": "Probiotyki to pożyteczne bakterie pomagające odbudowywać florę jelitową. Prebiotyki odżywiają dobre bakterie i wspierają ich wzrost."
  },
  {
    "id": "R02_CHO_07",
    "section": "Gdy układ pokarmowy choruje",
    "type": "scenario",
    "prompt": "Antek przyjmuje antybiotyk. Który zestaw produktów najlepiej wspiera odbudowę flory jelitowej podczas leczenia?",
    "options": [
      "jogurt kefir i kiszonki",
      "słodycze chipsy i cola",
      "biały chleb i cukier",
      "wyłącznie czerwone mięso"
    ],
    "answer": 0,
    "explanation": "Antybiotyki niszczą także pożyteczne bakterie jelitowe, dlatego warto spożywać produkty zawierające probiotyki, np. jogurt, kefir i kiszonki.",
    "image": "r02_flora_jelitowa.jpg"
  },
  {
    "id": "R02_CHO_08",
    "section": "Gdy układ pokarmowy choruje",
    "type": "odd_one_out",
    "prompt": "Wskaż objaw, który nie należy do typowych objawów wirusowego zapalenia wątroby (WZW): biegunka, wymioty, zażółcenie skóry, ból zęba.",
    "options": null,
    "answer": "ból zęba",
    "explanation": "Do typowych objawów WZW należą m.in. biegunka, wymioty i zażółcenie skóry. Ból zęba nie należy do tego zestawu objawów."
  },
  {
    "id": "R02_CHO_09",
    "section": "Gdy układ pokarmowy choruje",
    "type": "multi_select",
    "prompt": "Zaznacz problemy, które mogą pojawić się przy zaburzeniu flory jelitowej.",
    "options": [
      "zaparcia",
      "biegunki",
      "osłabiona odporność",
      "większa podatność na infekcje",
      "choroby zapalne jelit",
      "pewniejsza ochrona przed infekcjami"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Zaburzenie składu flory jelitowej może prowadzić m.in. do zaparć, biegunek, chorób zapalnych jelit, osłabienia odporności i większej podatności na infekcje."
  },
  {
    "id": "R02_CHO_10",
    "section": "Gdy układ pokarmowy choruje",
    "type": "riddle",
    "prompt": "To zestaw różnych bakterii żyjących w jelitach, które wspierają trawienie, produkcję witamin i odporność. Jak nazywa się ta społeczność?",
    "options": null,
    "answer": "flora jelitowa",
    "altAnswers": [
      "flora jelitowa",
      "mikroflora jelitowa"
    ],
    "explanation": "Flora jelitowa to zespół bakterii żyjących w jelitach i wspierających m.in. trawienie oraz ochronę organizmu."
  },
  {
    "id": "R02_MOC_01",
    "section": "Budowa i funkcje układu moczowego",
    "type": "match",
    "prompt": "Połącz narząd lub układ z charakterystyczną substancją usuwaną z organizmu.",
    "options": null,
    "left": [
      "skóra",
      "płuca",
      "nerki"
    ],
    "right": [
      "kwas mlekowy w pocie",
      "dwutlenek węgla",
      "produkty rozkładu leków w moczu"
    ],
    "answer": {
      "skóra": "kwas mlekowy w pocie",
      "płuca": "dwutlenek węgla",
      "nerki": "produkty rozkładu leków w moczu"
    },
    "explanation": "Skóra usuwa z potem m.in. kwas mlekowy, płuca usuwają dwutlenek węgla, a nerki wraz z moczem m.in. produkty rozkładu leków."
  },
  {
    "id": "R02_MOC_02",
    "section": "Budowa i funkcje układu moczowego",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie wydalanie?",
    "options": [
      "Usuwanie z organizmu substancji zbędnych szkodliwych lub nadmiarowych",
      "Rozdrabnianie pokarmu w jamie ustnej",
      "Wchłanianie składników odżywczych do krwi",
      "Magazynowanie moczu w nerkach",
      "Produkcję śliny",
      "Rozkład cukrów złożonych"
    ],
    "answer": 0,
    "explanation": "Wydalanie to proces usuwania z organizmu substancji zbędnych, szkodliwych lub występujących w nadmiarze."
  },
  {
    "id": "R02_MOC_03",
    "section": "Budowa i funkcje układu moczowego",
    "type": "sequence",
    "prompt": "Ułóż narządy układu moczowego zgodnie z drogą moczu od miejsca jego powstawania na zewnątrz ciała.",
    "options": null,
    "items": [
      "pęcherz moczowy",
      "cewka moczowa",
      "nerki",
      "moczowody"
    ],
    "answer": [
      "nerki",
      "moczowody",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "explanation": "Mocz powstaje w nerkach, moczowodami płynie do pęcherza, a następnie jest wyprowadzany przez cewkę moczową.",
    "image": "r02_uklad_moczowy.jpg"
  },
  {
    "id": "R02_MOC_04",
    "section": "Budowa i funkcje układu moczowego",
    "type": "match",
    "prompt": "Połącz element układu moczowego z jego funkcją.",
    "options": null,
    "left": [
      "nerki",
      "moczowody",
      "pęcherz moczowy",
      "cewka moczowa"
    ],
    "right": [
      "filtrują krew i produkują mocz",
      "transportują mocz do pęcherza",
      "gromadzi i magazynuje mocz",
      "wyprowadza mocz na zewnątrz"
    ],
    "answer": {
      "nerki": "filtrują krew i produkują mocz",
      "moczowody": "transportują mocz do pęcherza",
      "pęcherz moczowy": "gromadzi i magazynuje mocz",
      "cewka moczowa": "wyprowadza mocz na zewnątrz"
    },
    "explanation": "Nerki wytwarzają mocz, moczowody go transportują, pęcherz magazynuje, a cewka moczowa wyprowadza na zewnątrz.",
    "image": "r02_uklad_moczowy.jpg"
  },
  {
    "id": "R02_MOC_05",
    "section": "Budowa i funkcje układu moczowego",
    "type": "true_false",
    "prompt": "U kobiet cewka moczowa jest krótsza niż u mężczyzn.",
    "options": null,
    "answer": true,
    "explanation": "Cewka moczowa kobiety jest krótka, natomiast u mężczyzny jest znacznie dłuższa i wspólna dla układu moczowego i rozrodczego."
  },
  {
    "id": "R02_MOC_06",
    "section": "Budowa i funkcje układu moczowego",
    "type": "sequence",
    "prompt": "Ułóż etapy powstawania moczu w prawidłowej kolejności.",
    "options": null,
    "items": [
      "wydzielanie toksyn i leków",
      "mocz ostateczny",
      "filtracja krwi",
      "ponowne wchłanianie potrzebnych substancji",
      "mocz pierwotny"
    ],
    "answer": [
      "filtracja krwi",
      "mocz pierwotny",
      "ponowne wchłanianie potrzebnych substancji",
      "wydzielanie toksyn i leków",
      "mocz ostateczny"
    ],
    "explanation": "Najpierw krew jest filtrowana i powstaje mocz pierwotny, następnie potrzebne składniki wracają do krwi, do płynu wydzielane są szkodliwe substancje i powstaje mocz ostateczny.",
    "image": "r02_powstawanie_moczu.jpg"
  },
  {
    "id": "R02_MOC_07",
    "section": "Budowa i funkcje układu moczowego",
    "type": "fill_in",
    "prompt": "Mocz w około __________ składa się z wody.",
    "options": null,
    "answer": [
      "95%"
    ],
    "altAnswers": [
      [
        "95%",
        "95 %",
        "95 procent"
      ]
    ],
    "explanation": "Około 95% moczu stanowi woda, a pozostałe 5% to głównie mocznik oraz niewielkie ilości innych substancji."
  },
  {
    "id": "R02_MOC_08",
    "section": "Budowa i funkcje układu moczowego",
    "type": "multi_select",
    "prompt": "Zaznacz substancje, które mogą występować w moczu ostatecznym.",
    "options": [
      "woda",
      "mocznik",
      "sole mineralne",
      "barwniki",
      "toksyny lub resztki leków",
      "duże kawałki niestrawionego pokarmu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Mocz ostateczny zawiera przede wszystkim wodę, mocznik, niewielkie ilości soli mineralnych i barwników oraz inne zbędne substancje, np. toksyny i resztki leków."
  },
  {
    "id": "R02_MOC_09",
    "section": "Budowa i funkcje układu moczowego",
    "type": "scenario",
    "prompt": "Osoba zauważyła różowy lub czerwony mocz, ale nie ma innych dolegliwości. Który zjedzony produkt może być prostym wyjaśnieniem zmiany koloru?",
    "options": [
      "buraki",
      "biały ryż",
      "chleb razowy",
      "jogurt"
    ],
    "answer": 0,
    "explanation": "Buraki mogą nadawać moczowi różowy lub czerwony kolor. Zmiana koloru może wynikać z diety i nie zawsze oznacza chorobę."
  },
  {
    "id": "R02_MOC_10",
    "section": "Budowa i funkcje układu moczowego",
    "type": "riddle",
    "prompt": "Powstaje w wyniku rozkładu białek i jest jedną z głównych szkodliwych substancji usuwanych z moczem. Co to jest?",
    "options": null,
    "answer": "mocznik",
    "altAnswers": [
      "mocznik"
    ],
    "explanation": "Mocznik powstaje w wyniku rozkładu białek dostarczanych z pożywieniem i jest usuwany z organizmu wraz z moczem."
  },
  {
    "id": "R02_PRO_01",
    "section": "Jak dbać o układ moczowy?",
    "type": "multi_select",
    "prompt": "Zaznacz nawyki sprzyjające zdrowiu układu moczowego.",
    "options": [
      "picie odpowiedniej ilości płynów",
      "ograniczanie nadmiaru soli",
      "jedzenie warzyw i owoców",
      "oddawanie moczu gdy pojawia się potrzeba",
      "dbanie o higienę osobistą",
      "długie wstrzymywanie moczu"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Zdrowiu układu moczowego sprzyjają nawodnienie, ograniczenie nadmiaru soli, warzywa i owoce, higiena oraz niewstrzymywanie moczu."
  },
  {
    "id": "R02_PRO_02",
    "section": "Jak dbać o układ moczowy?",
    "type": "single_choice",
    "prompt": "Co sprzyja powstawaniu kamicy nerkowej?",
    "options": [
      "Zbyt duże stężenie soli mineralnych w moczu",
      "Zbyt mała ilość bakterii jelitowych",
      "Niedobór śliny",
      "Nadmiar błonnika",
      "Częste szczotkowanie zębów",
      "Zwiększona perystaltyka jelit"
    ],
    "answer": 0,
    "explanation": "Kamienie mogą powstawać, gdy w moczu jest zbyt duże stężenie soli mineralnych, np. przy diecie bogatej w sól i małej podaży płynów.",
    "image": "r02_kamica_nerkowa.jpg"
  },
  {
    "id": "R02_PRO_03",
    "section": "Jak dbać o układ moczowy?",
    "type": "multi_select",
    "prompt": "Zaznacz objawy kamicy nerkowej.",
    "options": [
      "silny ból pleców",
      "krew w moczu",
      "wymioty",
      "zażółcenie skóry",
      "krwawienie z dziąseł"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Przy kamicy nerkowej mogą wystąpić silny ból pleców, krew w moczu i wymioty.",
    "image": "r02_kamica_nerkowa.jpg"
  },
  {
    "id": "R02_PRO_04",
    "section": "Jak dbać o układ moczowy?",
    "type": "multi_select",
    "prompt": "Zaznacz objawy zakażenia dróg moczowych.",
    "options": [
      "ból i pieczenie podczas oddawania moczu",
      "częste oddawanie małych ilości moczu",
      "gorączka",
      "krew w moczu",
      "ostra krawędź siekaczy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zakażenie dróg moczowych może powodować ból i pieczenie przy oddawaniu moczu, częste oddawanie małych ilości moczu, gorączkę, a czasem także krew w moczu."
  },
  {
    "id": "R02_PRO_05",
    "section": "Jak dbać o układ moczowy?",
    "type": "scenario",
    "prompt": "Dlaczego zakażenia dróg moczowych występują częściej u kobiet?",
    "options": [
      "Ponieważ cewka moczowa jest krótsza i leży bliżej odbytu",
      "Ponieważ kobiety mają tylko jedną nerkę",
      "Ponieważ pęcherz moczowy nie magazynuje moczu",
      "Ponieważ nerki kobiet nie filtrują krwi"
    ],
    "answer": 0,
    "explanation": "Krótsza cewka moczowa i jej położenie bliżej odbytu ułatwiają bakteriom przedostawanie się do pęcherza moczowego."
  },
  {
    "id": "R02_PRO_06",
    "section": "Jak dbać o układ moczowy?",
    "type": "match",
    "prompt": "Połącz nieprawidłowość w badaniu moczu z możliwą przyczyną.",
    "options": null,
    "left": [
      "glukoza w moczu",
      "liczne bakterie",
      "liczne kryształy soli mineralnych",
      "liczne białko"
    ],
    "right": [
      "niewyrównana cukrzyca",
      "zakażenie dróg moczowych",
      "kamica nerkowa",
      "choroby nerek"
    ],
    "answer": {
      "glukoza w moczu": "niewyrównana cukrzyca",
      "liczne bakterie": "zakażenie dróg moczowych",
      "liczne kryształy soli mineralnych": "kamica nerkowa",
      "liczne białko": "choroby nerek"
    },
    "explanation": "W ogólnym badaniu moczu glukoza może wskazywać na niewyrównaną cukrzycę, bakterie na zakażenie dróg moczowych, liczne kryształy soli na kamicę, a duża ilość białka na choroby nerek.",
    "image": "r02_badanie_moczu.jpg"
  },
  {
    "id": "R02_PRO_07",
    "section": "Jak dbać o układ moczowy?",
    "type": "true_false",
    "prompt": "Ogólne badanie moczu warto wykonywać profilaktycznie raz w roku.",
    "options": null,
    "answer": true,
    "explanation": "Regularne badanie moczu pomaga wcześnie wykrywać nieprawidłowości i może być częścią corocznych badań profilaktycznych."
  },
  {
    "id": "R02_PRO_08",
    "section": "Jak dbać o układ moczowy?",
    "type": "odd_one_out",
    "prompt": "Wskaż zachowanie, które nie pomaga zapobiegać zakażeniom dróg moczowych: picie dużej ilości wody, dbanie o higienę osobistą, unikanie długiego wstrzymywania moczu, ograniczanie picia wody.",
    "options": null,
    "answer": "ograniczanie picia wody",
    "explanation": "Przy profilaktyce zakażeń dróg moczowych zaleca się picie dużej ilości wody, higienę osobistą i niewstrzymywanie moczu."
  },
  {
    "id": "R02_PRO_09",
    "section": "Jak dbać o układ moczowy?",
    "type": "fill_in",
    "prompt": "Podstawowa zasada profilaktyki układu moczowego zaleca około __________ l wody dziennie.",
    "options": null,
    "answer": [
      "1,5-2"
    ],
    "altAnswers": [
      [
        "1,5-2",
        "1,5–2",
        "1.5-2",
        "1,5 do 2"
      ]
    ],
    "explanation": "W profilaktyce układu moczowego zaleca się orientacyjnie około 1,5-2 l wody dziennie."
  },
  {
    "id": "R02_PRO_10",
    "section": "Jak dbać o układ moczowy?",
    "type": "scenario",
    "prompt": "Pacjent często i boleśnie oddaje mocz. W badaniu stwierdzono liczne bakterie oraz podwyższoną liczbę leukocytów. Na co najbardziej wskazuje taki wynik?",
    "options": [
      "zakażenie dróg moczowych",
      "próchnicę",
      "WZW A",
      "odwodnienie skóry"
    ],
    "answer": 0,
    "explanation": "Liczne bakterie wskazują na zakażenie dróg moczowych, a podwyższona liczba leukocytów świadczy o stanie zapalnym.",
    "image": "r02_badanie_moczu.jpg"
  },
  {
    "id": "R02_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Która z wymienionych tkanek lub płynów ma największą zawartość wody?",
    "options": [
      "krew około 83%",
      "mózg około 75%",
      "kości około 22%",
      "wszystkie mają tyle samo"
    ],
    "answer": 0,
    "explanation": "Krew zawiera około 83% wody, mózg około 75%, a kości około 22%.",
    "image": "r02_nawodnienie.jpg"
  },
  {
    "id": "R02_HARD_02",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Przy zaleceniu 0,03 l wody na kilogram masy ciała osoba ważąca 50 kg powinna wypijać około __________ l wody na dobę.",
    "options": null,
    "answer": [
      "1,5"
    ],
    "altAnswers": [
      [
        "1,5",
        "1.5",
        "1,5 l",
        "1.5 l"
      ]
    ],
    "explanation": "50 × 0,03 l = 1,5 l, więc dla osoby o masie 50 kg orientacyjna ilość wynosi około 1,5 l na dobę."
  },
  {
    "id": "R02_HARD_03",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż zdarzenia zachodzące podczas trawienia i wchłaniania w logicznej kolejności.",
    "options": null,
    "items": [
      "wchłanianie większości składników odżywczych w jelicie cienkim",
      "mieszanie pokarmu z sokiem żołądkowym",
      "rozdrabnianie i mieszanie ze śliną",
      "odzyskiwanie wody w jelicie grubym",
      "dopływ enzymów trzustki i żółci do dwunastnicy"
    ],
    "answer": [
      "rozdrabnianie i mieszanie ze śliną",
      "mieszanie pokarmu z sokiem żołądkowym",
      "dopływ enzymów trzustki i żółci do dwunastnicy",
      "wchłanianie większości składników odżywczych w jelicie cienkim",
      "odzyskiwanie wody w jelicie grubym"
    ],
    "explanation": "Proces rozpoczyna się w jamie ustnej, jest kontynuowany w żołądku, następnie w dwunastnicy działają enzymy trzustki i żółć, dalej składniki są wchłaniane w jelicie cienkim, a w jelicie grubym odzyskuje się wodę.",
    "image": "r02_uklad_pokarmowy.jpg"
  },
  {
    "id": "R02_HARD_04",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary gruczoł trawienny - produkt lub działanie.",
    "options": [
      "ślinianki - ślina z enzymami trawiącymi cukry",
      "wątroba - żółć ułatwiająca trawienie tłuszczów",
      "trzustka - enzymy trawiące białka cukry i tłuszcze",
      "wątroba - ślina",
      "ślinianki - żółć",
      "trzustka - magazynowanie kału"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Ślinianki wytwarzają ślinę z enzymami trawiącymi cukry, wątroba produkuje żółć, a trzustka enzymy trawiące białka, cukry i tłuszcze."
  },
  {
    "id": "R02_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Którego rodzaju zębów nie ma w uzębieniu mlecznym pokazanym na ilustracji porównującej zęby mleczne i stałe?",
    "options": [
      "przedtrzonowców",
      "siekaczy",
      "kłów",
      "trzonowców"
    ],
    "answer": 0,
    "explanation": "Uzębienie mleczne obejmuje siekacze, kły i trzonowce. Przedtrzonowce pojawiają się w uzębieniu stałym.",
    "image": "r02_rodzaje_zebow.jpg"
  },
  {
    "id": "R02_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz typ WZW z cechą najlepiej go odróżniającą.",
    "options": null,
    "left": [
      "WZW A",
      "WZW B",
      "WZW C"
    ],
    "right": [
      "zakażone jedzenie lub woda i dostępne szczepienie",
      "płyny ustrojowe i dostępne szczepienie",
      "płyny ustrojowe i brak szczepionki"
    ],
    "answer": {
      "WZW A": "zakażone jedzenie lub woda i dostępne szczepienie",
      "WZW B": "płyny ustrojowe i dostępne szczepienie",
      "WZW C": "płyny ustrojowe i brak szczepionki"
    },
    "explanation": "WZW A szerzy się głównie przez zakażoną żywność lub wodę i można mu zapobiegać szczepieniem. WZW B i C przenoszą się przez płyny ustrojowe, ale szczepionki przeciw WZW C nie ma.",
    "image": "r02_wirusowe_zapalenie_watroby.jpg"
  },
  {
    "id": "R02_HARD_07",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje przypisywane florze jelitowej.",
    "options": [
      "pomoc w rozkładaniu błonnika i niektórych węglowodanów",
      "wytwarzanie witaminy K i niektórych witamin z grupy B",
      "ochrona przed szkodliwymi bakteriami",
      "wspieranie układu odpornościowego",
      "wytwarzanie żółci",
      "produkcja moczu"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Flora jelitowa wspomaga trawienie niektórych składników, uczestniczy w produkcji wybranych witamin, chroni przed patogenami i wspiera odporność.",
    "image": "r02_flora_jelitowa.jpg"
  },
  {
    "id": "R02_HARD_08",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Pałeczka okrężnicy może być pożyteczna w jelitach, ale w innych miejscach organizmu może powodować choroby.",
    "options": null,
    "answer": true,
    "explanation": "W niewielkiej ilości pałeczka okrężnicy wspomaga w jelitach produkcję witaminy K, natomiast poza jelitami może wywoływać choroby."
  },
  {
    "id": "R02_HARD_09",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj substancję do drogi, którą może być wydalana z organizmu.",
    "options": null,
    "items": [
      "dwutlenek węgla",
      "kwas mlekowy",
      "produkty rozkładu leków"
    ],
    "categories": [
      "płuca",
      "skóra",
      "nerki"
    ],
    "answer": {
      "płuca": [
        "dwutlenek węgla"
      ],
      "skóra": [
        "kwas mlekowy"
      ],
      "nerki": [
        "produkty rozkładu leków"
      ]
    },
    "explanation": "Płuca usuwają dwutlenek węgla, skóra wraz z potem m.in. kwas mlekowy, a nerki z moczem m.in. produkty rozkładu leków."
  },
  {
    "id": "R02_HARD_10",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "U kobiet cewka moczowa ma około __________, a u mężczyzn około __________.",
    "options": null,
    "answer": [
      "3-5 cm",
      "15-20 cm"
    ],
    "altAnswers": [
      [
        "3-5 cm",
        "3–5 cm",
        "3 do 5 cm"
      ],
      [
        "15-20 cm",
        "15–20 cm",
        "15 do 20 cm"
      ]
    ],
    "explanation": "Cewka moczowa kobiety ma około 3-5 cm, a mężczyzny około 15-20 cm.",
    "image": "r02_uklad_moczowy.jpg"
  },
  {
    "id": "R02_HARD_11",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy tworzenia moczu od krwi dopływającej do nerek do moczu ostatecznego.",
    "options": null,
    "items": [
      "wydzielanie toksyn leków i innych szkodliwych substancji",
      "ponowne wchłanianie wody i potrzebnych soli mineralnych",
      "filtracja krwi",
      "mocz ostateczny",
      "mocz pierwotny"
    ],
    "answer": [
      "filtracja krwi",
      "mocz pierwotny",
      "ponowne wchłanianie wody i potrzebnych soli mineralnych",
      "wydzielanie toksyn leków i innych szkodliwych substancji",
      "mocz ostateczny"
    ],
    "explanation": "Po filtracji krwi powstaje mocz pierwotny. Następnie potrzebne składniki wracają do krwi, do płynu trafiają szkodliwe substancje i powstaje mocz ostateczny.",
    "image": "r02_powstawanie_moczu.jpg"
  },
  {
    "id": "R02_HARD_12",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj nieprawidłowość w badaniu moczu do najbardziej charakterystycznego problemu zdrowotnego.",
    "options": null,
    "items": [
      "glukoza",
      "liczne bakterie",
      "liczne kryształy soli mineralnych",
      "liczne białko"
    ],
    "categories": [
      "niewyrównana cukrzyca",
      "zakażenie dróg moczowych",
      "kamica nerkowa",
      "choroby nerek"
    ],
    "answer": {
      "niewyrównana cukrzyca": [
        "glukoza"
      ],
      "zakażenie dróg moczowych": [
        "liczne bakterie"
      ],
      "kamica nerkowa": [
        "liczne kryształy soli mineralnych"
      ],
      "choroby nerek": [
        "liczne białko"
      ]
    },
    "explanation": "Glukoza może wskazywać na niewyrównaną cukrzycę, bakterie na zakażenie dróg moczowych, kryształy soli na kamicę, a liczne białko na choroby nerek.",
    "image": "r02_badanie_moczu.jpg"
  },
  {
    "id": "R02_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Tomek prawie nie pije wody i często je mocno słone przekąski. Który mechanizm najlepiej wyjaśnia, dlaczego zwiększa ryzyko kamicy nerkowej?",
    "options": [
      "Rośnie stężenie soli mineralnych w moczu i łatwiej tworzą się złogi",
      "W jelicie cienkim zanika perystaltyka",
      "Bakterie jelitowe zaczynają wytwarzać żółć",
      "Szkliwo zębów zatrzymuje wodę"
    ],
    "answer": 0,
    "explanation": "Mała ilość płynów i duża ilość soli sprzyjają wysokiemu stężeniu soli mineralnych w moczu, z których mogą tworzyć się osady i kamienie.",
    "image": "r02_kamica_nerkowa.jpg"
  },
  {
    "id": "R02_HARD_14",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż substancję, która nie jest typowym składnikiem moczu ostatecznego w prawidłowych warunkach: mocznik, sole mineralne, barwniki, glukoza.",
    "options": null,
    "answer": "glukoza",
    "explanation": "Mocz ostateczny zawiera m.in. mocznik, niewielkie ilości soli mineralnych i barwniki. Glukoza pojawia się w moczu pierwotnym, a jej obecność w badaniu moczu może wskazywać na nieprawidłowość."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r02",
  number: 2,
  title: "Układ pokarmowy i układ moczowy",
  icon: "🧬",
  sectionOrder: [
    "Składniki pokarmowe i ich rola",
    "Budowa i funkcje układu pokarmowego",
    "Gdy układ pokarmowy choruje",
    "Budowa i funkcje układu moczowego",
    "Jak dbać o układ moczowy?"
  ],
  sectionIcons: {
    "Składniki pokarmowe i ich rola": "🍎",
    "Budowa i funkcje układu pokarmowego": "🥣",
    "Gdy układ pokarmowy choruje": "🦠",
    "Budowa i funkcje układu moczowego": "💧",
    "Jak dbać o układ moczowy?": "🩺"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
