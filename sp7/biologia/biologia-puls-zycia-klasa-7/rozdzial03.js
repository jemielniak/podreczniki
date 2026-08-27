// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POK  = Pokarm - budulec i źródło energii
//   WIT  = Witaminy, sole mineralne, woda
//   BUD  = Budowa i rola układu pokarmowego
//   HIG  = Higiena i choroby układu pokarmowego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_POK_01",
    "section": "Pokarm - budulec i źródło energii",
    "type": "single_choice",
    "prompt": "Która grupa obejmuje podstawowe substancje odżywcze?",
    "options": [
      "Białka, węglowodany i tłuszcze",
      "Witaminy, woda i sole mineralne",
      "Białka, witaminy i woda",
      "Węglowodany, woda i witaminy",
      "Tłuszcze, sole mineralne i woda",
      "Błonnik, woda i witaminy"
    ],
    "answer": 0,
    "explanation": "Do podstawowych substancji odżywczych należą białka, węglowodany i tłuszcze."
  },
  {
    "id": "R03_POK_02",
    "section": "Pokarm - budulec i źródło energii",
    "type": "true_false",
    "prompt": "Białka są zbudowane z aminokwasów.",
    "options": null,
    "answer": true,
    "explanation": "Białka powstają przez połączenie setek, a nawet tysięcy aminokwasów."
  },
  {
    "id": "R03_POK_03",
    "section": "Pokarm - budulec i źródło energii",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje pełnione przez białka w organizmie.",
    "options": [
      "Budują struktury komórek",
      "Przyspieszają reakcje jako enzymy",
      "Transportują substancje",
      "Uczestniczą w obronie przed drobnoustrojami",
      "Są wyłącznie materiałem zapasowym",
      "Zawsze tworzą ściany komórek roślinnych"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_bialka_funkcje.jpg",
    "explanation": "Białka pełnią między innymi funkcję budulcową, enzymatyczną, transportową, obronną, sygnałową, receptorową i motoryczną."
  },
  {
    "id": "R03_POK_04",
    "section": "Pokarm - budulec i źródło energii",
    "type": "fill_in",
    "prompt": "Aminokwasy, których organizm człowieka nie potrafi sam wytworzyć, to aminokwasy __________ i muszą być dostarczane z __________.",
    "options": null,
    "answer": [
      "egzogenne",
      "pożywienia"
    ],
    "altAnswers": [
      [
        "egzogenne"
      ],
      [
        "pożywienia",
        "pokarmu"
      ]
    ],
    "explanation": "Aminokwasy egzogenne nie są wytwarzane przez organizm człowieka, dlatego trzeba je pobierać z pożywienia."
  },
  {
    "id": "R03_POK_05",
    "section": "Pokarm - budulec i źródło energii",
    "type": "single_choice",
    "prompt": "Co wyróżnia pokarm pełnowartościowy pod względem białka?",
    "options": [
      "Zawiera wszystkie aminokwasy egzogenne",
      "Zawiera wyłącznie tłuszcze roślinne",
      "Nie zawiera żadnych aminokwasów",
      "Zawiera tylko cukry proste",
      "Składa się wyłącznie z błonnika",
      "Nie ma wartości energetycznej"
    ],
    "answer": 0,
    "image": "r03_bialka_produkty.jpg",
    "explanation": "Pokarm pełnowartościowy zawiera wszystkie aminokwasy egzogenne potrzebne człowiekowi."
  },
  {
    "id": "R03_POK_06",
    "section": "Pokarm - budulec i źródło energii",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych jako przykład pokarmu pełnowartościowego: mięso, jaja, mleko, kasza gryczana.",
    "options": null,
    "answer": "kasza gryczana",
    "image": "r03_bialka_produkty.jpg",
    "explanation": "Mięso, jaja i mleko są pokarmami pełnowartościowymi pochodzenia zwierzęcego, a kasza gryczana jest pokarmem roślinnym."
  },
  {
    "id": "R03_POK_07",
    "section": "Pokarm - budulec i źródło energii",
    "type": "match",
    "prompt": "Połącz rodzaj białka z odpowiednim przykładem.",
    "options": null,
    "left": [
      "Białko receptorowe",
      "Białka motoryczne",
      "Białko budulcowe",
      "Białko transportowe"
    ],
    "right": [
      "rodopsyna",
      "aktyna i miozyna",
      "kolagen",
      "hemoglobina"
    ],
    "answer": {
      "Białko receptorowe": "rodopsyna",
      "Białka motoryczne": "aktyna i miozyna",
      "Białko budulcowe": "kolagen",
      "Białko transportowe": "hemoglobina"
    },
    "image": "r03_bialka_funkcje.jpg",
    "explanation": "Rodopsyna jest białkiem receptorowym, aktyna i miozyna są motoryczne, kolagen jest budulcowy, a hemoglobina transportowa."
  },
  {
    "id": "R03_POK_08",
    "section": "Pokarm - budulec i źródło energii",
    "type": "true_false",
    "prompt": "U zwierząt glukoza jest magazynowana w postaci glikogenu, a u roślin w postaci skrobi.",
    "options": null,
    "answer": true,
    "explanation": "Glikogen jest cukrem zapasowym zwierząt i jest magazynowany między innymi w wątrobie, natomiast rośliny przechowują glukozę w postaci skrobi."
  },
  {
    "id": "R03_POK_09",
    "section": "Pokarm - budulec i źródło energii",
    "type": "sequence",
    "prompt": "Ułóż wydarzenia po zjedzeniu dużej ilości słodyczy od najwcześniejszego do najpóźniejszego.",
    "options": null,
    "items": [
      "Pojawia się uczucie głodu",
      "Cukry proste trafiają do krwi",
      "Stężenie glukozy szybko spada",
      "Cukry proste są szybko zużywane"
    ],
    "answer": [
      "Cukry proste trafiają do krwi",
      "Cukry proste są szybko zużywane",
      "Stężenie glukozy szybko spada",
      "Pojawia się uczucie głodu"
    ],
    "explanation": "Cukry proste szybko trafiają do krwi, są szybko zużywane, ich stężenie spada i niedługo potem pojawia się uczucie głodu."
  },
  {
    "id": "R03_POK_10",
    "section": "Pokarm - budulec i źródło energii",
    "type": "riddle",
    "prompt": "Nie jest trawiony przez człowieka, zawiera głównie celulozę, chłonie wodę i ułatwia przesuwanie pokarmu w jelitach. Co to jest?",
    "options": null,
    "answer": "błonnik pokarmowy",
    "altAnswers": [
      "błonnik pokarmowy",
      "błonnik"
    ],
    "image": "r03_zboza_i_blonnik.jpg",
    "explanation": "Błonnik pokarmowy, którego głównym składnikiem jest celuloza, wchłania dużo wody i ułatwia przesuwanie pożywienia w jelitach."
  },
  {
    "id": "R03_POK_11",
    "section": "Pokarm - budulec i źródło energii",
    "type": "multi_select",
    "prompt": "Zaznacz główne źródła błonnika pokarmowego.",
    "options": [
      "Owoce",
      "Warzywa",
      "Ziarna zbóż",
      "Masło",
      "Tłuste mięso",
      "Jaja"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_zboza_i_blonnik.jpg",
    "explanation": "Błonnik występuje przede wszystkim w pokarmach roślinnych, zwłaszcza w owocach, warzywach i ziarnach zbóż."
  },
  {
    "id": "R03_POK_12",
    "section": "Pokarm - budulec i źródło energii",
    "type": "true_false",
    "prompt": "Z jednego grama tłuszczu można uzyskać około dwa razy więcej energii niż z tej samej ilości cukru lub białka.",
    "options": null,
    "answer": true,
    "explanation": "Tłuszcze są związkami wysokoenergetycznymi, ponieważ z jednego grama tłuszczu powstaje dwa razy więcej energii niż z grama cukru lub białka."
  },
  {
    "id": "R03_POK_13",
    "section": "Pokarm - budulec i źródło energii",
    "type": "sort",
    "prompt": "Przyporządkuj produkty do źródeł tłuszczów roślinnych lub zwierzęcych.",
    "options": null,
    "items": [
      "olej",
      "nasiona",
      "orzechy",
      "masło",
      "tłuste mięso"
    ],
    "categories": [
      "tłuszcze roślinne",
      "tłuszcze zwierzęce"
    ],
    "answer": {
      "tłuszcze roślinne": [
        "olej",
        "nasiona",
        "orzechy"
      ],
      "tłuszcze zwierzęce": [
        "masło",
        "tłuste mięso"
      ]
    },
    "image": "r03_tluszcze_zrodla.jpg",
    "explanation": "Tłuszcze roślinne występują głównie w olejach, nasionach i orzechach, a tłuszcze zwierzęce między innymi w maśle i tłustym mięsie."
  },
  {
    "id": "R03_POK_14",
    "section": "Pokarm - budulec i źródło energii",
    "type": "scenario",
    "prompt": "Osoba przez dłuższy czas spożywa więcej cukrów, niż potrzebuje jej organizm. Co może stać się z ich nadmiarem?",
    "options": [
      "Może zostać przekształcony w tłuszcze",
      "Zawsze zostaje natychmiast wydalony",
      "Zmienia się wyłącznie w białka",
      "Jest magazynowany tylko jako witamina C",
      "Zostaje zamieniony wyłącznie w wodę",
      "Nie wpływa na ilość tkanki tłuszczowej"
    ],
    "answer": 0,
    "explanation": "Nadmiar cukrów może być przekształcany w tłuszcze, co sprzyja rozwojowi otyłości."
  },
  {
    "id": "R03_WIT_01",
    "section": "Witaminy, sole mineralne, woda",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera wyłącznie witaminy rozpuszczalne w tłuszczach?",
    "options": [
      "A, D, E, K",
      "C, B6, B9, B12",
      "A, C, D, B6",
      "B6, D, K, C",
      "C, E, B9, A",
      "B12, C, K, B6"
    ],
    "answer": 0,
    "image": "r03_witaminy_zrodla.jpg",
    "explanation": "Do witamin rozpuszczalnych w tłuszczach należą A, D, E i K."
  },
  {
    "id": "R03_WIT_02",
    "section": "Witaminy, sole mineralne, woda",
    "type": "multi_select",
    "prompt": "Zaznacz witaminy rozpuszczalne w wodzie.",
    "options": [
      "C",
      "B6",
      "B9",
      "B12",
      "A",
      "K"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "image": "r03_witaminy_zrodla.jpg",
    "explanation": "Do witamin rozpuszczalnych w wodzie należą C, B6, B9 i B12."
  },
  {
    "id": "R03_WIT_03",
    "section": "Witaminy, sole mineralne, woda",
    "type": "true_false",
    "prompt": "Witaminy A, D, E i K mogą być magazynowane w organizmie, a ich nadmiar może prowadzić do zatrucia i uszkodzeń wątroby.",
    "options": null,
    "answer": true,
    "explanation": "Witaminy rozpuszczalne w tłuszczach są magazynowane w organizmie, dlatego ich nadmiar może być groźny."
  },
  {
    "id": "R03_WIT_04",
    "section": "Witaminy, sole mineralne, woda",
    "type": "single_choice",
    "prompt": "Który skutek jest charakterystyczny dla niedoboru witaminy C?",
    "options": [
      "Szkorbut",
      "Kurza ślepota",
      "Krzywica",
      "Zaburzenia krzepnięcia krwi",
      "Nieprawidłowa praca mięśnia sercowego",
      "Próchnica wynikająca z niedoboru fluoru"
    ],
    "answer": 0,
    "image": "r03_witaminy_zrodla.jpg",
    "explanation": "Niedobór witaminy C może powodować zmniejszoną odporność, owrzodzenie dziąseł i wypadanie zębów, czyli objawy szkorbutu."
  },
  {
    "id": "R03_WIT_05",
    "section": "Witaminy, sole mineralne, woda",
    "type": "match",
    "prompt": "Połącz witaminę z charakterystycznym skutkiem jej niedoboru.",
    "options": null,
    "left": [
      "Witamina A",
      "Witamina D",
      "Witamina K",
      "Witamina C"
    ],
    "right": [
      "kurza ślepota",
      "krzywica",
      "zaburzenia krzepnięcia krwi",
      "szkorbut"
    ],
    "answer": {
      "Witamina A": "kurza ślepota",
      "Witamina D": "krzywica",
      "Witamina K": "zaburzenia krzepnięcia krwi",
      "Witamina C": "szkorbut"
    },
    "explanation": "Niedobór witaminy A może powodować kurzą ślepotę, D - krzywicę, K - zaburzenia krzepnięcia krwi, a C - szkorbut."
  },
  {
    "id": "R03_WIT_06",
    "section": "Witaminy, sole mineralne, woda",
    "type": "sort",
    "prompt": "Przyporządkuj witaminy do sposobu rozpuszczania.",
    "options": null,
    "items": [
      "A",
      "D",
      "E",
      "K",
      "C",
      "B6",
      "B9",
      "B12"
    ],
    "categories": [
      "rozpuszczalne w tłuszczach",
      "rozpuszczalne w wodzie"
    ],
    "answer": {
      "rozpuszczalne w tłuszczach": [
        "A",
        "D",
        "E",
        "K"
      ],
      "rozpuszczalne w wodzie": [
        "C",
        "B6",
        "B9",
        "B12"
      ]
    },
    "explanation": "Witaminy C, B6, B9 i B12 są rozpuszczalne w wodzie, natomiast A, D, E i K w tłuszczach."
  },
  {
    "id": "R03_WIT_07",
    "section": "Witaminy, sole mineralne, woda",
    "type": "riddle",
    "prompt": "Ta witamina może powstawać w skórze pod wpływem promieniowania słonecznego. Jaka to witamina?",
    "options": null,
    "answer": "witamina D",
    "altAnswers": [
      "witamina D",
      "D"
    ],
    "explanation": "Pod wpływem promieniowania słonecznego w skórze powstaje witamina D."
  },
  {
    "id": "R03_WIT_08",
    "section": "Witaminy, sole mineralne, woda",
    "type": "multi_select",
    "prompt": "Zaznacz produkty będące źródłami witaminy B12.",
    "options": [
      "Wątroba",
      "Mięso",
      "Jaja",
      "Mleko",
      "Ryby",
      "Owoce cytrusowe"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r03_witaminy_zrodla.jpg",
    "explanation": "Witamina B12 występuje między innymi w wątrobie, mięsie, jajach, mleku i rybach."
  },
  {
    "id": "R03_WIT_09",
    "section": "Witaminy, sole mineralne, woda",
    "type": "fill_in",
    "prompt": "Makroelementy to pierwiastki, których ilość __________ 0,01% suchej masy, a mikroelementy to pierwiastki, których ilość nie __________ 0,01% suchej masy.",
    "options": null,
    "answer": [
      "przekracza",
      "przekracza"
    ],
    "altAnswers": [
      [
        "przekracza"
      ],
      [
        "przekracza"
      ]
    ],
    "explanation": "Granica podziału wynosi 0,01% suchej masy: makroelementów jest więcej niż ta wartość, a mikroelementów nie więcej."
  },
  {
    "id": "R03_WIT_10",
    "section": "Witaminy, sole mineralne, woda",
    "type": "match",
    "prompt": "Połącz składnik mineralny z charakterystycznym skutkiem jego niedoboru.",
    "options": null,
    "left": [
      "Żelazo",
      "Jod",
      "Fluor",
      "Magnez"
    ],
    "right": [
      "niedokrwistość",
      "zaburzenia wzrostu i choroby układu nerwowego",
      "próchnica zębów",
      "nieprawidłowa praca mięśnia sercowego i innych mięśni"
    ],
    "answer": {
      "Żelazo": "niedokrwistość",
      "Jod": "zaburzenia wzrostu i choroby układu nerwowego",
      "Fluor": "próchnica zębów",
      "Magnez": "nieprawidłowa praca mięśnia sercowego i innych mięśni"
    },
    "image": "r03_mineraly_zrodla.jpg",
    "explanation": "Niedobór żelaza wiąże się z niedokrwistością, jodu z zaburzeniami wzrostu i układu nerwowego, fluoru z próchnicą, a magnezu z nieprawidłową pracą mięśni."
  },
  {
    "id": "R03_WIT_11",
    "section": "Witaminy, sole mineralne, woda",
    "type": "single_choice",
    "prompt": "Który zestaw zawiera produkty będące źródłami wapnia?",
    "options": [
      "Mleko, sery, jaja",
      "Cytrusy, kapusta, truskawki",
      "Ryby morskie, owoce morza, herbata",
      "Orzechy, kakao, pestki dyni",
      "Wątroba, drożdże, soja",
      "Oleje roślinne, kiełki zbóż, jaja"
    ],
    "answer": 0,
    "image": "r03_mineraly_zrodla.jpg",
    "explanation": "Mleko, sery i jaja są źródłami wapnia."
  },
  {
    "id": "R03_WIT_12",
    "section": "Witaminy, sole mineralne, woda",
    "type": "true_false",
    "prompt": "Woda stanowi około 70% masy ciała człowieka.",
    "options": null,
    "answer": true,
    "explanation": "Do prawidłowego funkcjonowania organizmu potrzebna jest odpowiednia ilość wody, która stanowi około 70% masy ciała."
  },
  {
    "id": "R03_WIT_13",
    "section": "Witaminy, sole mineralne, woda",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje wody w organizmie.",
    "options": [
      "Jest środowiskiem wielu reakcji chemicznych",
      "Umożliwia transport rozpuszczonych substancji",
      "Uczestniczy w regulacji temperatury ciała",
      "Umożliwia usuwanie szkodliwych produktów przemiany materii",
      "Jest jedynym materiałem budulcowym kości",
      "Zastępuje wszystkie sole mineralne"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Woda jest środowiskiem reakcji chemicznych, rozpuszczalnikiem wielu związków, uczestniczy w transporcie, termoregulacji i usuwaniu szkodliwych produktów przemiany materii."
  },
  {
    "id": "R03_WIT_14",
    "section": "Witaminy, sole mineralne, woda",
    "type": "scenario",
    "prompt": "Uczeń wykonuje intensywny wysiłek fizyczny w wysokiej temperaturze i silnie się poci. Co powinien szczególnie uzupełniać?",
    "options": [
      "Wodę i sole mineralne",
      "Wyłącznie tłuszcze zwierzęce",
      "Tylko cukry proste",
      "Wyłącznie witaminy rozpuszczalne w tłuszczach",
      "Tylko błonnik",
      "Wyłącznie białko"
    ],
    "answer": 0,
    "image": "r03_nawadnianie_wysilek.jpg",
    "explanation": "Przy wysokiej temperaturze i dużym wysiłku, gdy pocenie jest intensywne, należy uzupełniać wodę i sole mineralne."
  },
  {
    "id": "R03_BUD_01",
    "section": "Budowa i rola układu pokarmowego",
    "type": "sequence",
    "prompt": "Ułóż odcinki przewodu pokarmowego zgodnie z drogą pokarmu.",
    "options": null,
    "items": [
      "Żołądek",
      "Jelito grube",
      "Jama ustna",
      "Przełyk",
      "Jelito cienkie",
      "Gardło"
    ],
    "answer": [
      "Jama ustna",
      "Gardło",
      "Przełyk",
      "Żołądek",
      "Jelito cienkie",
      "Jelito grube"
    ],
    "image": "r03_narzady_ukladu_pokarmowego.jpg",
    "explanation": "Pokarm przechodzi kolejno przez jamę ustną, gardło, przełyk, żołądek, jelito cienkie i jelito grube."
  },
  {
    "id": "R03_BUD_02",
    "section": "Budowa i rola układu pokarmowego",
    "type": "single_choice",
    "prompt": "Które zęby służą przede wszystkim do odgryzania kawałków jedzenia?",
    "options": [
      "Siekacze",
      "Kły",
      "Przedtrzonowe",
      "Trzonowe",
      "Zęby mleczne jako grupa",
      "Korzenie zębów"
    ],
    "answer": 0,
    "image": "r03_rodzaje_zebow.jpg",
    "explanation": "Siekacze służą do odgryzania kawałków jedzenia."
  },
  {
    "id": "R03_BUD_03",
    "section": "Budowa i rola układu pokarmowego",
    "type": "match",
    "prompt": "Połącz rodzaj zęba z jego główną rolą w mechanicznej obróbce pokarmu.",
    "options": null,
    "left": [
      "Siekacze",
      "Kły",
      "Zęby przedtrzonowe i trzonowe"
    ],
    "right": [
      "odgryzanie kawałków jedzenia",
      "pomaganie w rozgryzaniu",
      "rozcieranie pokarmu"
    ],
    "answer": {
      "Siekacze": "odgryzanie kawałków jedzenia",
      "Kły": "pomaganie w rozgryzaniu",
      "Zęby przedtrzonowe i trzonowe": "rozcieranie pokarmu"
    },
    "image": "r03_rodzaje_zebow.jpg",
    "explanation": "Siekacze odgryzają, kły pomagają rozgryzać, a zęby przedtrzonowe i trzonowe rozcierają pokarm."
  },
  {
    "id": "R03_BUD_04",
    "section": "Budowa i rola układu pokarmowego",
    "type": "fill_in",
    "prompt": "Część zęba wystająca ponad dziąsło to __________. Pokrywa ją twarde __________, pod którym znajduje się zębina.",
    "options": null,
    "answer": [
      "korona",
      "szkliwo"
    ],
    "altAnswers": [
      [
        "korona"
      ],
      [
        "szkliwo"
      ]
    ],
    "explanation": "Część zęba wystająca na zewnątrz to korona. Koronę pokrywa szkliwo, a pod nim znajduje się zębina."
  },
  {
    "id": "R03_BUD_05",
    "section": "Budowa i rola układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz gruczoły trawienne układu pokarmowego.",
    "options": [
      "Ślinianki",
      "Wątroba",
      "Trzustka",
      "Żołądek",
      "Jelito cienkie",
      "Przełyk"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_narzady_ukladu_pokarmowego.jpg",
    "explanation": "Do gruczołów trawiennych należą ślinianki, wątroba i trzustka."
  },
  {
    "id": "R03_BUD_06",
    "section": "Budowa i rola układu pokarmowego",
    "type": "match",
    "prompt": "Połącz odcinek przewodu pokarmowego z jego funkcją.",
    "options": null,
    "left": [
      "Jama ustna",
      "Przełyk",
      "Żołądek",
      "Jelito grube"
    ],
    "right": [
      "mechaniczne rozdrabnianie i wstępne trawienie cukrów",
      "przesuwanie pokarmu do żołądka",
      "częściowe trawienie białek",
      "wchłanianie wody i formowanie kału"
    ],
    "answer": {
      "Jama ustna": "mechaniczne rozdrabnianie i wstępne trawienie cukrów",
      "Przełyk": "przesuwanie pokarmu do żołądka",
      "Żołądek": "częściowe trawienie białek",
      "Jelito grube": "wchłanianie wody i formowanie kału"
    },
    "explanation": "W jamie ustnej pokarm jest rozdrabniany i mieszany ze śliną, przełyk przesuwa go do żołądka, w żołądku zaczyna się trawienie białek, a w jelicie grubym wchłaniana jest woda i formuje się kał."
  },
  {
    "id": "R03_BUD_07",
    "section": "Budowa i rola układu pokarmowego",
    "type": "riddle",
    "prompt": "Jest składnikiem śliny i rozkłada cukry złożone. Jaki to enzym?",
    "options": null,
    "answer": "amylaza ślinowa",
    "altAnswers": [
      "amylaza ślinowa",
      "amylaza"
    ],
    "explanation": "Ślina zawiera amylazę ślinową, która rozpoczyna trawienie cukrów złożonych."
  },
  {
    "id": "R03_BUD_08",
    "section": "Budowa i rola układu pokarmowego",
    "type": "true_false",
    "prompt": "Pepsyna trawi częściowo białka w żołądku i staje się aktywna pod wpływem kwasu solnego.",
    "options": null,
    "answer": true,
    "explanation": "W żołądku pepsyna częściowo trawi białka, a kwas solny ją aktywuje i działa także bakteriobójczo."
  },
  {
    "id": "R03_BUD_09",
    "section": "Budowa i rola układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz poprawne pary enzym trzustki - trawiony składnik.",
    "options": [
      "Trypsyna - białka",
      "Amylaza trzustkowa - cukry złożone",
      "Lipaza trzustkowa - tłuszcze",
      "Trypsyna - tłuszcze",
      "Lipaza trzustkowa - białka",
      "Amylaza trzustkowa - sole mineralne"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Trzustka wydziela trypsynę trawiącą białka, amylazę trzustkową trawiącą cukry złożone i lipazę trzustkową rozkładającą tłuszcze."
  },
  {
    "id": "R03_BUD_10",
    "section": "Budowa i rola układu pokarmowego",
    "type": "single_choice",
    "prompt": "Jaką rolę pełni żółć w trawieniu tłuszczów?",
    "options": [
      "Rozbija duże krople tłuszczu na mniejsze",
      "Rozkłada białka na aminokwasy",
      "Rozkłada skrobię na cukry proste",
      "Aktywuje pepsynę w żołądku",
      "Wchłania wodę w jelicie grubym",
      "Tworzy kosmki jelitowe"
    ],
    "answer": 0,
    "explanation": "Żółć wytwarzana w wątrobie rozbija duże krople tłuszczu na mniejsze, co ułatwia działanie enzymów trzustki."
  },
  {
    "id": "R03_BUD_11",
    "section": "Budowa i rola układu pokarmowego",
    "type": "sort",
    "prompt": "Przyporządkuj składnik pokarmowy do miejsca, w którym rozpoczyna się jego trawienie.",
    "options": null,
    "items": [
      "cukry",
      "białka",
      "tłuszcze"
    ],
    "categories": [
      "jama ustna",
      "żołądek",
      "jelito cienkie"
    ],
    "answer": {
      "jama ustna": [
        "cukry"
      ],
      "żołądek": [
        "białka"
      ],
      "jelito cienkie": [
        "tłuszcze"
      ]
    },
    "explanation": "Trawienie cukrów rozpoczyna się w jamie ustnej, białek w żołądku, a tłuszczów w jelicie cienkim."
  },
  {
    "id": "R03_BUD_12",
    "section": "Budowa i rola układu pokarmowego",
    "type": "match",
    "prompt": "Połącz składnik pokarmowy z końcowymi produktami jego trawienia.",
    "options": null,
    "left": [
      "Cukry",
      "Białka",
      "Tłuszcze"
    ],
    "right": [
      "cukry proste",
      "aminokwasy",
      "glicerol i kwasy tłuszczowe"
    ],
    "answer": {
      "Cukry": "cukry proste",
      "Białka": "aminokwasy",
      "Tłuszcze": "glicerol i kwasy tłuszczowe"
    },
    "explanation": "W wyniku trawienia cukrów powstają cukry proste, białek - aminokwasy, a tłuszczów - glicerol i kwasy tłuszczowe."
  },
  {
    "id": "R03_BUD_13",
    "section": "Budowa i rola układu pokarmowego",
    "type": "true_false",
    "prompt": "Produkty trawienia białek i cukrów są wchłaniane bezpośrednio do krwi, natomiast kwasy tłuszczowe trafiają najpierw do limfy.",
    "options": null,
    "answer": true,
    "explanation": "Produkty trawienia trafiają do krwi, a kwasy tłuszczowe najpierw do limfy, a dopiero potem do krwi."
  },
  {
    "id": "R03_BUD_14",
    "section": "Budowa i rola układu pokarmowego",
    "type": "scenario",
    "prompt": "U pacjenta doszło do znacznego uszkodzenia kosmków jelita cienkiego. Który proces będzie przez to szczególnie utrudniony?",
    "options": [
      "Wchłanianie produktów trawienia",
      "Odgryzanie pokarmu",
      "Przesuwanie pokarmu przez przełyk",
      "Formowanie szkliwa zęba",
      "Wytwarzanie śliny przez ślinianki",
      "Magazynowanie glikogenu w wątrobie"
    ],
    "answer": 0,
    "image": "r03_kosmki_jelitowe.jpg",
    "explanation": "Kosmki znacznie zwiększają powierzchnię wchłaniania substancji odżywczych, więc ich uszkodzenie ogranicza wchłanianie produktów trawienia."
  },
  {
    "id": "R03_HIG_01",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "single_choice",
    "prompt": "Co oznacza pojęcie dieta?",
    "options": [
      "Sposób odżywiania się",
      "Wyłącznie jadłospis bez tłuszczu",
      "Jednorazowy posiłek",
      "Wyłącznie liczba wypitych płynów",
      "Lista witamin w suplemencie",
      "Sposób przechowywania żywności"
    ],
    "answer": 0,
    "explanation": "Dieta to sposób odżywiania się, który powinien dostarczać odpowiednią ilość energii i potrzebnych składników pokarmowych."
  },
  {
    "id": "R03_HIG_02",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "true_false",
    "prompt": "Wartość energetyczna posiłków powinna odpowiadać ilości energii zużywanej w ciągu dnia.",
    "options": null,
    "answer": true,
    "explanation": "Prawidłowa dieta powinna dostarczać tyle energii, ile organizm potrzebuje i zużywa."
  },
  {
    "id": "R03_HIG_03",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz czynniki wpływające na zapotrzebowanie organizmu na energię.",
    "options": [
      "Wiek",
      "Płeć",
      "Rodzaj wykonywanej pracy",
      "Tryb życia",
      "Kolor oczu",
      "Grupa krwi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Zapotrzebowanie energetyczne zależy między innymi od wieku, płci, wykonywanej pracy i trybu życia."
  },
  {
    "id": "R03_HIG_04",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "single_choice",
    "prompt": "Jak interpretować położenie produktu wysoko w piramidzie zdrowego żywienia?",
    "options": [
      "Należy spożywać go mniej",
      "Należy spożywać go najwięcej",
      "Należy spożywać go wyłącznie rano",
      "Nie ma znaczenia, ile go spożywamy",
      "Należy spożywać go tylko po wysiłku",
      "Oznacza to brak wartości odżywczej"
    ],
    "answer": 0,
    "explanation": "Im wyżej w piramidzie umieszczony jest dany pokarm, tym mniej należy go spożywać."
  },
  {
    "id": "R03_HIG_05",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz zasady zgodne z piramidą zdrowego żywienia i stylu życia.",
    "options": [
      "Warzywa i owoce powinny stanowić największą część pożywienia",
      "Warto wybierać pełnoziarniste produkty zbożowe",
      "Należy ograniczać czerwone mięso",
      "Tłuszcze zwierzęce można zastępować olejami roślinnymi",
      "Regularna aktywność fizyczna jest podstawą zdrowego stylu życia",
      "Należy zwiększać spożycie soli i cukru"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r03_zdrowy_posilek.jpg",
    "explanation": "Zaleca się dużą ilość warzyw i owoców, pełnoziarniste produkty zbożowe, ograniczanie czerwonego mięsa, zastępowanie tłuszczów zwierzęcych olejami roślinnymi, około 2 l płynów dziennie i regularną aktywność fizyczną."
  },
  {
    "id": "R03_HIG_06",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "scenario",
    "prompt": "Osoba na diecie wegetariańskiej je głównie produkty zbożowe. Co może zrobić, aby łatwiej uzyskać pełnowartościowe białko?",
    "options": [
      "Łączyć produkty zbożowe z nasionami roślin strączkowych",
      "Jeść wyłącznie cukier",
      "Całkowicie zrezygnować z białka",
      "Zastąpić produkty roślinne samą wodą",
      "Jeść wyłącznie masło",
      "Ograniczyć wszystkie produkty zawierające aminokwasy"
    ],
    "answer": 0,
    "explanation": "Nasiona roślin strączkowych zawierają wiele aminokwasów egzogennych, których brakuje w roślinach zbożowych. Łączenie tych produktów może dostarczyć pełnowartościowego białka."
  },
  {
    "id": "R03_HIG_07",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz zasady higieny pomagające ograniczyć ryzyko chorób układu pokarmowego.",
    "options": [
      "Mycie rąk przed przygotowaniem i po zjedzeniu posiłku",
      "Starannie mycie warzyw, owoców i jaj",
      "Przechowywanie łatwo psującej się żywności w chłodzie",
      "Sprawdzanie terminu przydatności do spożycia",
      "Kupowanie mięsa z pewnego źródła",
      "Ponowne zamrażanie rozmrożonego jedzenia"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r03_higiena_kuchenna.jpg",
    "explanation": "Do ważnych zasad należą mycie rąk i produktów, utrzymywanie czystości w kuchni, prawidłowe chłodzenie żywności, sprawdzanie terminu przydatności i wybieranie produktów z pewnych źródeł."
  },
  {
    "id": "R03_HIG_08",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "true_false",
    "prompt": "Rozmrożonego pożywienia nie powinno się ponownie zamrażać, ponieważ po rozmrożeniu mogą się w nim rozmnażać chorobotwórcze bakterie.",
    "options": null,
    "answer": true,
    "explanation": "Po rozmrożeniu jedzenie powinno zostać szybko spożyte; ponowne zamrażanie zwiększa ryzyko związane z namnażaniem bakterii."
  },
  {
    "id": "R03_HIG_09",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "single_choice",
    "prompt": "Co bezpośrednio uszkadza szkliwo podczas rozwoju próchnicy?",
    "options": [
      "Kwas powstający podczas rozkładu cukru przez bakterie",
      "Ślina bez enzymów",
      "Błonnik pokarmowy",
      "Witamina D",
      "Woda pitna",
      "Glikogen w wątrobie"
    ],
    "answer": 0,
    "image": "r03_prochnica_zeba.jpg",
    "explanation": "Bakterie rozkładają cukier na powierzchni zębów, a powstający podczas tych reakcji kwas uszkadza szkliwo."
  },
  {
    "id": "R03_HIG_10",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz działania pomagające zapobiegać próchnicy.",
    "options": [
      "Regularne mycie zębów",
      "Kontrole u stomatologa co najmniej dwa razy w roku",
      "Spożywanie produktów bogatych w wapń, fosfor, fluor i witaminę D",
      "Częste spożywanie cukru między posiłkami",
      "Rezygnacja z mycia zębów po słodyczach",
      "Unikanie produktów będących źródłem wapnia"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r03_prochnica_zeba.jpg",
    "explanation": "Profilaktyka próchnicy obejmuje regularne mycie zębów, kontrolę uzębienia u stomatologa oraz dietę bogatą w wapń, fosfor, fluor i witaminę D."
  },
  {
    "id": "R03_HIG_11",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "match",
    "prompt": "Połącz chorobę z jej główną przyczyną.",
    "options": null,
    "left": [
      "Choroba wrzodowa żołądka i dwunastnicy",
      "Rak jelita grubego",
      "Wirusowe zapalenie wątroby",
      "Zatrucie pokarmowe"
    ],
    "right": [
      "zakażenie Helicobacter pylori oraz czynniki uszkadzające ochronę błony śluzowej",
      "zmiany genetyczne komórek błony śluzowej jelita grubego",
      "zakażenie wirusami HAV, HBV lub HCV",
      "zakażenie bakteriami lub działanie ich toksyn"
    ],
    "answer": {
      "Choroba wrzodowa żołądka i dwunastnicy": "zakażenie Helicobacter pylori oraz czynniki uszkadzające ochronę błony śluzowej",
      "Rak jelita grubego": "zmiany genetyczne komórek błony śluzowej jelita grubego",
      "Wirusowe zapalenie wątroby": "zakażenie wirusami HAV, HBV lub HCV",
      "Zatrucie pokarmowe": "zakażenie bakteriami lub działanie ich toksyn"
    },
    "explanation": "Choroba wrzodowa wiąże się między innymi z Helicobacter pylori, rak jelita grubego ze zmianami materiału genetycznego i czynnikami stylu życia, WZW z wirusami, a zatrucia pokarmowe z bakteriami lub ich toksynami."
  },
  {
    "id": "R03_HIG_12",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "sort",
    "prompt": "Przyporządkuj sposoby zakażenia lub profilaktyki do WZW A albo do WZW B i C.",
    "options": null,
    "items": [
      "droga pokarmowa",
      "gotowanie wody przed wypiciem",
      "mycie owoców i warzyw",
      "kontakt z krwią osoby zakażonej",
      "kontakty seksualne"
    ],
    "categories": [
      "WZW A",
      "WZW B i C"
    ],
    "answer": {
      "WZW A": [
        "droga pokarmowa",
        "gotowanie wody przed wypiciem",
        "mycie owoców i warzyw"
      ],
      "WZW B i C": [
        "kontakt z krwią osoby zakażonej",
        "kontakty seksualne"
      ]
    },
    "image": "r03_wzw_watroba.jpg",
    "explanation": "WZW A szerzy się drogą pokarmową, dlatego profilaktyka obejmuje między innymi gotowanie wody i mycie żywności. WZW B i C mogą szerzyć się przez krew i kontakty seksualne, dlatego ważne jest unikanie kontaktu z krwią osoby zakażonej i przypadkowych kontaktów seksualnych."
  },
  {
    "id": "R03_HIG_13",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "scenario",
    "prompt": "Kilka godzin po zjedzeniu źle przechowywanego produktu osoba ma gorączkę, silne bóle brzucha, biegunkę, nudności i wymioty. Jaki problem najlepiej pasuje do takiego zestawu objawów?",
    "options": [
      "Zatrucie pokarmowe",
      "Anoreksja",
      "Próchnica",
      "Krzywica",
      "Niedobór witaminy K",
      "Kurza ślepota"
    ],
    "answer": 0,
    "image": "r03_higiena_kuchenna.jpg",
    "explanation": "Gorączka, silne bóle brzucha, biegunka, nudności i wymioty są wymieniane jako objawy zatrucia pokarmowego wywołanego bakteriami lub ich toksynami."
  },
  {
    "id": "R03_HIG_14",
    "section": "Higiena i choroby układu pokarmowego",
    "type": "riddle",
    "prompt": "To zaburzenie odżywiania objawia się napadami żarłoczności, po których chory może stosować głodówkę lub wywoływać wymioty. Jak się nazywa?",
    "options": null,
    "answer": "bulimia",
    "altAnswers": [
      "bulimia"
    ],
    "explanation": "Bulimia objawia się napadami żarłoczności, a po okresie objadania chory może stosować głodówkę lub wywoływać wymioty."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Które białko receptorowe jest niezbędne w procesie widzenia?",
    "options": [
      "Rodopsyna",
      "Kolagen",
      "Hemoglobina",
      "Aktyna",
      "Miozyna",
      "Pepsyna"
    ],
    "answer": 0,
    "image": "r03_bialka_funkcje.jpg",
    "explanation": "Rodopsyna znajdująca się w komórkach oka jest przykładem białka receptorowego potrzebnego w procesie widzenia."
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz witaminę z charakterystycznym skutkiem jej niedoboru.",
    "options": null,
    "left": [
      "Witamina B6",
      "Witamina B9",
      "Witamina B12",
      "Witamina E"
    ],
    "right": [
      "nadmierna pobudliwość i drgawki",
      "zwiększone ryzyko urodzenia dziecka z wadami układu nerwowego",
      "zaburzenia funkcjonowania układu nerwowego",
      "osłabienie i zanik mięśni"
    ],
    "answer": {
      "Witamina B6": "nadmierna pobudliwość i drgawki",
      "Witamina B9": "zwiększone ryzyko urodzenia dziecka z wadami układu nerwowego",
      "Witamina B12": "zaburzenia funkcjonowania układu nerwowego",
      "Witamina E": "osłabienie i zanik mięśni"
    },
    "image": "r03_witaminy_zrodla.jpg",
    "explanation": "Niedobór B6 może wiązać się z nadmierną pobudliwością, B9 ze zwiększonym ryzykiem wad układu nerwowego u dziecka, B12 z zaburzeniami funkcjonowania układu nerwowego, a E z osłabieniem i zanikiem mięśni."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Co nie pasuje do pozostałych pod względem klasyfikacji składników mineralnych: fosfor, wapń, magnez, żelazo.",
    "options": null,
    "answer": "żelazo",
    "image": "r03_mineraly_zrodla.jpg",
    "explanation": "Fosfor, wapń i magnez są makroelementami, natomiast żelazo jest mikroelementem."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Pierwiastek jest makroelementem, gdy jego ilość __________ 0,01% suchej masy, a mikroelementem, gdy nie __________ tej wartości.",
    "options": null,
    "answer": [
      "przekracza",
      "przekracza"
    ],
    "altAnswers": [
      [
        "przekracza"
      ],
      [
        "przekracza"
      ]
    ],
    "explanation": "Podział na makro- i mikroelementy opiera się na granicy 0,01% suchej masy."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W upalny dzień po intensywnym treningu sportowiec wypił samą wodę, ale nie uzupełnił soli mineralnych. Którego zalecenia dotyczącego dużego wysiłku i wysokiej temperatury nie zastosował w pełni?",
    "options": [
      "Uzupełniania wody i soli mineralnych",
      "Spożywania wyłącznie tłuszczów",
      "Unikania wszystkich płynów",
      "Zwiększania ilości cukru w każdym posiłku",
      "Całkowitej rezygnacji z minerałów",
      "Spożywania jedynie witaminy A"
    ],
    "answer": 0,
    "image": "r03_nawadnianie_wysilek.jpg",
    "explanation": "Przy intensywnym poceniu należy uzupełniać zarówno wodę, jak i sole mineralne."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż etapy trawienia cukrów od rozpoczęcia procesu do powstania cukrów prostych.",
    "options": null,
    "items": [
      "Enzymy jelitowe doprowadzają do powstania cukrów prostych",
      "Amylaza trzustkowa działa w jelicie cienkim",
      "Amylaza ślinowa rozpoczyna trawienie w jamie ustnej"
    ],
    "answer": [
      "Amylaza ślinowa rozpoczyna trawienie w jamie ustnej",
      "Amylaza trzustkowa działa w jelicie cienkim",
      "Enzymy jelitowe doprowadzają do powstania cukrów prostych"
    ],
    "explanation": "Trawienie cukrów zaczyna się w jamie ustnej dzięki amylazie ślinowej, jest kontynuowane w jelicie cienkim przez amylazę trzustkową, a enzymy jelitowe prowadzą do powstania cukrów prostych."
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz enzym z miejscem lub warunkiem jego działania.",
    "options": null,
    "left": [
      "Amylaza ślinowa",
      "Pepsyna",
      "Trypsyna",
      "Lipaza trzustkowa"
    ],
    "right": [
      "jama ustna",
      "żołądek i aktywacja przez kwas solny",
      "dwunastnica - trawienie białek",
      "dwunastnica - trawienie tłuszczów"
    ],
    "answer": {
      "Amylaza ślinowa": "jama ustna",
      "Pepsyna": "żołądek i aktywacja przez kwas solny",
      "Trypsyna": "dwunastnica - trawienie białek",
      "Lipaza trzustkowa": "dwunastnica - trawienie tłuszczów"
    },
    "image": "r03_narzady_ukladu_pokarmowego.jpg",
    "explanation": "Amylaza ślinowa działa w jamie ustnej, pepsyna w żołądku po aktywacji przez kwas solny, a trypsyna i lipaza trzustkowa trafiają do dwunastnicy z wydzieliną trzustki."
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje wątroby.",
    "options": [
      "Wytwarza żółć",
      "Unieszkodliwia substancje toksyczne",
      "Wytwarza ponad 90% białek osocza krwi",
      "Magazynuje glukozę w postaci glikogenu",
      "Wytwarza szkliwo zębów",
      "Formuje kał"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Wątroba wytwarza żółć, unieszkodliwia substancje toksyczne, wytwarza ponad 90% białek osocza krwi i magazynuje glukozę w postaci glikogenu."
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Jelito cienkie może osiągać około 6 m długości, a ponad 10 mln kosmków może zwiększać jego powierzchnię chłonną do około 200 m².",
    "options": null,
    "answer": true,
    "image": "r03_kosmki_jelitowe.jpg",
    "explanation": "Jelito cienkie może mieć około 6 m długości, zawiera ponad 10 mln kosmków, a jego powierzchnia chłonna wynosi około 200 m²."
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego laseczki jadu kiełbasianego często wiążą się z przetworami i konserwami?",
    "options": [
      "Żyją w środowisku beztlenowym",
      "Potrzebują silnego światła",
      "Rozwijają się wyłącznie na świeżych owocach",
      "Wymagają bardzo dużej ilości tlenu",
      "Nie wytwarzają toksyn",
      "Rozwijają się tylko w jamie ustnej"
    ],
    "answer": 0,
    "explanation": "Laseczki jadu kiełbasianego żyją w środowisku beztlenowym, dlatego często występują w przetworach i konserwach. Wydzielają toksynę atakującą układ nerwowy."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który zestaw profilaktyki najlepiej odpowiada rakowi jelita grubego?",
    "options": [
      "Dużo błonnika, prawidłowa masa ciała, niepalenie",
      "Wspólne naczynia i częste palenie",
      "Unikanie błonnika i mała aktywność",
      "Wyłącznie gotowanie wody",
      "Wyłącznie szczepienie przeciw WZW A",
      "Ponowne zamrażanie rozmrożonych potraw"
    ],
    "answer": 0,
    "image": "r03_zdrowy_posilek.jpg",
    "explanation": "Profilaktyka raka jelita grubego obejmuje unikanie palenia papierosów, jedzenie pokarmów bogatych w błonnik, utrzymywanie prawidłowej masy ciała i zdrowy tryb życia."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Osoba ma masę 90 kg i wzrost 1,80 m. Korzystając ze wzoru BMI = masa ciała / wzrost², jej BMI wynosi około 27,8. Do której kategorii należy?",
    "options": [
      "Nadwaga",
      "Niedowaga",
      "Waga prawidłowa",
      "Otyłość",
      "Otyłość znacznego stopnia",
      "Nie da się określić na podstawie BMI"
    ],
    "answer": 0,
    "explanation": "Wartość BMI większa niż 25 oznacza nadwagę, a większa niż 30 otyłość. BMI około 27,8 mieści się więc w zakresie nadwagi."
  }
];

const chapter = {
  id: "r03",
  number: 3,
  title: "Układ pokarmowy",
  icon: "🍽️",
  sectionOrder: [
    "Pokarm - budulec i źródło energii",
    "Witaminy, sole mineralne, woda",
    "Budowa i rola układu pokarmowego",
    "Higiena i choroby układu pokarmowego"
  ],
  sectionIcons: {
    "Pokarm - budulec i źródło energii": "🍞",
    "Witaminy, sole mineralne, woda": "💧",
    "Budowa i rola układu pokarmowego": "🦷",
    "Higiena i choroby układu pokarmowego": "🥗"
  },
  exercises: ALL_EXERCISES
};

export default chapter;
