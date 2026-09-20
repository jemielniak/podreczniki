// Skróty sekcji (do identyfikatorów ćwiczeń):
//   KRE  = Krew i grupy krwi
//   SER  = Naczynia i serce
//   KRA  = Krążenie i zdrowie
//   LIM  = Układ limfatyczny
//   ODP  = Odporność
//   ZAB  = Zaburzenia odporności
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R05_KRE_01",
    "section": "Krew i grupy krwi",
    "type": "single_choice",
    "prompt": "Który składnik stanowi około 55% objętości krwi człowieka?",
    "options": [
      "Krwinki czerwone",
      "Osocze",
      "Krwinki białe",
      "Płytki krwi",
      "Hemoglobina",
      "Limfa"
    ],
    "answer": 1,
    "image": "r05_krew_po_odwirowaniu.jpg",
    "explanation": "Osocze stanowi około 55% krwi; krwinki czerwone około 44%, a krwinki białe i płytki krwi około 1%."
  },
  {
    "id": "R05_KRE_02",
    "section": "Krew i grupy krwi",
    "type": "multi_select",
    "prompt": "Zaznacz elementy morfotyczne krwi.",
    "options": [
      "Krwinki czerwone",
      "Krwinki białe",
      "Płytki krwi",
      "Osocze",
      "Limfa"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do elementów morfotycznych krwi należą krwinki czerwone, krwinki białe i płytki krwi."
  },
  {
    "id": "R05_KRE_03",
    "section": "Krew i grupy krwi",
    "type": "true_false",
    "prompt": "Krwinki czerwone mają jądro komórkowe, które ułatwia im transport tlenu.",
    "options": null,
    "answer": false,
    "image": "r05_erytrocyty_mikroskop.jpg",
    "explanation": "Krwinki czerwone są pozbawione jądra komórkowego, dzięki czemu mają więcej miejsca na hemoglobinę wiążącą tlen."
  },
  {
    "id": "R05_KRE_04",
    "section": "Krew i grupy krwi",
    "type": "match",
    "prompt": "Połącz składnik krwi z jego główną funkcją.",
    "options": null,
    "left": [
      "Krwinki czerwone",
      "Krwinki białe",
      "Płytki krwi",
      "Osocze"
    ],
    "right": [
      "Transport gazów oddechowych",
      "Ochrona przed drobnoustrojami",
      "Udział w krzepnięciu",
      "Transport rozpuszczonych substancji"
    ],
    "answer": {
      "Krwinki czerwone": "Transport gazów oddechowych",
      "Krwinki białe": "Ochrona przed drobnoustrojami",
      "Płytki krwi": "Udział w krzepnięciu",
      "Osocze": "Transport rozpuszczonych substancji"
    },
    "explanation": "Erytrocyty transportują gazy oddechowe, leukocyty chronią przed drobnoustrojami, płytki krwi uczestniczą w krzepnięciu, a osocze transportuje rozpuszczone substancje."
  },
  {
    "id": "R05_KRE_05",
    "section": "Krew i grupy krwi",
    "type": "fill_in",
    "prompt": "Czerwony barwnik zawierający żelazo, który wiąże tlen, to __________.",
    "options": null,
    "answer": [
      "hemoglobina"
    ],
    "altAnswers": [
      [
        "hemoglobina",
        "Hemoglobina"
      ]
    ],
    "explanation": "Hemoglobina znajduje się w krwinkach czerwonych i umożliwia przyłączanie tlenu na czas jego transportu."
  },
  {
    "id": "R05_KRE_06",
    "section": "Krew i grupy krwi",
    "type": "single_choice",
    "prompt": "Osoba z grupą krwi A może otrzymać krew w układzie ABO od dawcy z grupą:",
    "options": [
      "B lub AB",
      "AB lub 0",
      "A lub 0",
      "B lub 0",
      "A lub AB",
      "tylko AB"
    ],
    "answer": 2,
    "image": "r05_dawstwo_krwi.jpg",
    "explanation": "Osoba z grupą A może być biorcą krwi od osób z grupą A lub 0."
  },
  {
    "id": "R05_KRE_07",
    "section": "Krew i grupy krwi",
    "type": "multi_select",
    "prompt": "Które stwierdzenia poprawnie opisują grupę krwi AB?",
    "options": [
      "Na erytrocytach występuje antygen A",
      "Na erytrocytach występuje antygen B",
      "W osoczu są przeciwciała anty-A",
      "W osoczu są przeciwciała anty-B",
      "Może otrzymać krew A, B, AB lub 0"
    ],
    "answer": [
      0,
      1,
      4
    ],
    "explanation": "Erytrocyty osoby z grupą AB mają antygeny A i B, a w osoczu nie ma przeciwciał anty-A ani anty-B."
  },
  {
    "id": "R05_KRE_08",
    "section": "Krew i grupy krwi",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do pozostałych: erytrocyt, leukocyt, trombocyt, osocze.",
    "options": null,
    "answer": "osocze",
    "explanation": "Osocze jest płynną substancją międzykomórkową krwi, a pozostałe elementy to elementy morfotyczne."
  },
  {
    "id": "R05_KRE_09",
    "section": "Krew i grupy krwi",
    "type": "scenario",
    "prompt": "Kobieta ma krew Rh-, a rozwijający się płód ma Rh+. Jakie zjawisko może wystąpić w tej sytuacji?",
    "options": [
      "Miażdżyca",
      "Konflikt serologiczny",
      "Aglutynacja fizjologiczna",
      "Białaczka",
      "Anemia",
      "Zakrzep w żyle"
    ],
    "answer": 1,
    "explanation": "Konflikt serologiczny może pojawić się, gdy układ odpornościowy matki Rh- reaguje na czynnik Rh obecny na krwinkach płodu Rh+."
  },
  {
    "id": "R05_KRE_10",
    "section": "Krew i grupy krwi",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do grup krwi w układzie ABO.",
    "options": null,
    "items": [
      "antygen A",
      "antygen B",
      "antygeny A i B",
      "brak antygenów A i B"
    ],
    "categories": [
      "A",
      "B",
      "AB",
      "0"
    ],
    "answer": {
      "A": [
        "antygen A"
      ],
      "B": [
        "antygen B"
      ],
      "AB": [
        "antygeny A i B"
      ],
      "0": [
        "brak antygenów A i B"
      ]
    },
    "explanation": "Grupa A ma antygen A, grupa B antygen B, grupa AB oba antygeny, a grupa 0 nie ma antygenów A ani B."
  },
  {
    "id": "R05_SER_01",
    "section": "Naczynia i serce",
    "type": "single_choice",
    "prompt": "W których naczyniach krew płynie pod największym ciśnieniem?",
    "options": [
      "W żyłach",
      "W naczyniach włosowatych",
      "W tętnicach",
      "W naczyniach limfatycznych",
      "W żyłkach",
      "We wszystkich jednakowo"
    ],
    "answer": 2,
    "image": "r05_tetnica_i_zyla.jpg",
    "explanation": "Największe ciśnienie panuje w tętnicach, dlatego ich ściany są grube i odporne na rozerwanie."
  },
  {
    "id": "R05_SER_02",
    "section": "Naczynia i serce",
    "type": "multi_select",
    "prompt": "Zaznacz cechy żył.",
    "options": [
      "Mają zastawki",
      "Mają cieńsze ściany niż tętnice",
      "Płynie w nich krew pod mniejszym ciśnieniem niż w tętnicach",
      "Mają najgrubszą warstwę mięśniową",
      "Są miejscem głównej wymiany substancji"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Żyły mają cieńsze ściany niż tętnice, krew płynie w nich pod mniejszym ciśnieniem, a zastawki zapobiegają cofaniu się krwi."
  },
  {
    "id": "R05_SER_03",
    "section": "Naczynia i serce",
    "type": "true_false",
    "prompt": "Naczynia włosowate mają bardzo cienkie ściany, co ułatwia wymianę substancji między krwią a komórkami ciała.",
    "options": null,
    "answer": true,
    "explanation": "Ściana naczyń włosowatych jest bardzo cienka, dlatego możliwa jest wymiana substancji z otaczającymi tkankami."
  },
  {
    "id": "R05_SER_04",
    "section": "Naczynia i serce",
    "type": "match",
    "prompt": "Połącz rodzaj naczynia z właściwą cechą.",
    "options": null,
    "left": [
      "Tętnica",
      "Żyła",
      "Naczynie włosowate"
    ],
    "right": [
      "Gruba ściana i wysokie ciśnienie",
      "Zastawki i przepływ do serca",
      "Wymiana substancji z tkankami"
    ],
    "answer": {
      "Tętnica": "Gruba ściana i wysokie ciśnienie",
      "Żyła": "Zastawki i przepływ do serca",
      "Naczynie włosowate": "Wymiana substancji z tkankami"
    },
    "explanation": "Tętnice wyprowadzają krew z serca i mają grube ściany, żyły doprowadzają krew do serca i mają zastawki, a naczynia włosowate umożliwiają wymianę substancji."
  },
  {
    "id": "R05_SER_05",
    "section": "Naczynia i serce",
    "type": "single_choice",
    "prompt": "Ile jam tworzy serce człowieka?",
    "options": [
      "Dwie",
      "Trzy",
      "Cztery",
      "Pięć",
      "Sześć",
      "Osiem"
    ],
    "answer": 2,
    "image": "r05_serce_anatomiczne.jpg",
    "explanation": "Serce człowieka ma cztery jamy: dwa przedsionki i dwie komory."
  },
  {
    "id": "R05_SER_06",
    "section": "Naczynia i serce",
    "type": "fill_in",
    "prompt": "Do przedsionków krew wpływa __________, a z komór wypływa __________.",
    "options": null,
    "answer": [
      "żyłami",
      "tętnicami"
    ],
    "altAnswers": [
      [
        "żyłami",
        "zylami"
      ],
      [
        "tętnicami",
        "tetnicami"
      ]
    ],
    "explanation": "Do przedsionków krew wpływa żyłami, natomiast z komór jest wyprowadzana tętnicami."
  },
  {
    "id": "R05_SER_07",
    "section": "Naczynia i serce",
    "type": "sequence",
    "prompt": "Ułóż drogę krwi przez prawą stronę serca.",
    "options": null,
    "items": [
      "prawa komora",
      "pień płucny",
      "żyła główna",
      "prawy przedsionek"
    ],
    "answer": [
      "żyła główna",
      "prawy przedsionek",
      "prawa komora",
      "pień płucny"
    ],
    "explanation": "Krew wpływa żyłą główną do prawego przedsionka, przepływa do prawej komory i wypływa pniem płucnym."
  },
  {
    "id": "R05_SER_08",
    "section": "Naczynia i serce",
    "type": "sequence",
    "prompt": "Ułóż drogę krwi przez lewą stronę serca.",
    "options": null,
    "items": [
      "aorta",
      "lewy przedsionek",
      "żyła płucna",
      "lewa komora"
    ],
    "answer": [
      "żyła płucna",
      "lewy przedsionek",
      "lewa komora",
      "aorta"
    ],
    "explanation": "Krew z żył płucnych wpływa do lewego przedsionka, następnie do lewej komory i dalej do aorty."
  },
  {
    "id": "R05_SER_09",
    "section": "Naczynia i serce",
    "type": "riddle",
    "prompt": "Błona tworząca worek otaczający serce i chroniąca je między innymi przed ocieraniem o inne narządy to...",
    "options": null,
    "answer": "osierdzie",
    "altAnswers": [
      "osierdzie",
      "Osierdzie"
    ],
    "explanation": "Serce osłania osierdzie. Wraz z płynem osierdziowym tworzy ochronę dla serca."
  },
  {
    "id": "R05_SER_10",
    "section": "Naczynia i serce",
    "type": "scenario",
    "prompt": "W zastawce serca pojawia się wada, przez którą nie zamyka się ona prawidłowo. Jaki problem może wtedy wystąpić?",
    "options": [
      "Cofanie się krwi",
      "Wytwarzanie przeciwciał",
      "Powstawanie limfy",
      "Rozpad erytrocytów w płucach",
      "Zwiększenie liczby jam serca",
      "Zatrzymanie krzepnięcia"
    ],
    "answer": 0,
    "explanation": "Zastawki zapewniają jednokierunkowy przepływ krwi. Ich nieprawidłowe działanie może powodować cofanie się krwi."
  },
  {
    "id": "R05_KRA_01",
    "section": "Krążenie i zdrowie",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy małego obiegu krwi.",
    "options": null,
    "items": [
      "lewy przedsionek",
      "naczynia włosowate płuc",
      "prawa komora",
      "żyły płucne",
      "pień płucny"
    ],
    "answer": [
      "prawa komora",
      "pień płucny",
      "naczynia włosowate płuc",
      "żyły płucne",
      "lewy przedsionek"
    ],
    "explanation": "Mały obieg prowadzi od prawej komory przez pień płucny do naczyń włosowatych płuc, a następnie żyłami płucnymi do lewego przedsionka."
  },
  {
    "id": "R05_KRA_02",
    "section": "Krążenie i zdrowie",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy dużego obiegu krwi.",
    "options": null,
    "items": [
      "prawy przedsionek",
      "aorta",
      "żyły główne",
      "lewa komora",
      "naczynia włosowate narządów"
    ],
    "answer": [
      "lewa komora",
      "aorta",
      "naczynia włosowate narządów",
      "żyły główne",
      "prawy przedsionek"
    ],
    "explanation": "Duży obieg prowadzi z lewej komory przez aortę do naczyń włosowatych narządów, a następnie żyłami głównymi do prawego przedsionka."
  },
  {
    "id": "R05_KRA_03",
    "section": "Krążenie i zdrowie",
    "type": "match",
    "prompt": "Połącz naczynie lub miejsce z właściwym kierunkiem transportu gazów.",
    "options": null,
    "left": [
      "Naczynia włosowate płuc",
      "Naczynia włosowate narządów",
      "Tętnice wieńcowe",
      "Żyły wieńcowe"
    ],
    "right": [
      "Krew pobiera tlen i oddaje dwutlenek węgla",
      "Krew oddaje tlen i pobiera dwutlenek węgla",
      "Dostarczają tlen do mięśnia sercowego",
      "Odbierają dwutlenek węgla z mięśnia sercowego"
    ],
    "answer": {
      "Naczynia włosowate płuc": "Krew pobiera tlen i oddaje dwutlenek węgla",
      "Naczynia włosowate narządów": "Krew oddaje tlen i pobiera dwutlenek węgla",
      "Tętnice wieńcowe": "Dostarczają tlen do mięśnia sercowego",
      "Żyły wieńcowe": "Odbierają dwutlenek węgla z mięśnia sercowego"
    },
    "explanation": "W płucach krew oddaje dwutlenek węgla i pobiera tlen, w narządach oddaje tlen i pobiera dwutlenek węgla. Tętnice wieńcowe dostarczają tlen do mięśnia sercowego, a żyły wieńcowe odbierają z niego dwutlenek węgla i inne zbędne substancje."
  },
  {
    "id": "R05_KRA_04",
    "section": "Krążenie i zdrowie",
    "type": "single_choice",
    "prompt": "Jaka jest główna rola tętnic wieńcowych?",
    "options": [
      "Dostarczanie tlenu i substancji odżywczych do mięśnia sercowego",
      "Transport limfy do żył",
      "Wytwarzanie krwinek czerwonych",
      "Oczyszczanie krwi z patogenów",
      "Łączenie obu przedsionków",
      "Krzepnięcie krwi"
    ],
    "answer": 0,
    "image": "r05_naczynia_wiencowe.jpg",
    "explanation": "Tętnice wieńcowe dostarczają komórkom mięśnia sercowego tlen i substancje odżywcze."
  },
  {
    "id": "R05_KRA_05",
    "section": "Krążenie i zdrowie",
    "type": "true_false",
    "prompt": "Podczas intensywnego wysiłku fizycznego tętno wzrasta, ponieważ mięśnie potrzebują więcej tlenu i energii.",
    "options": null,
    "answer": true,
    "image": "r05_pomiar_tetna_po_wysilku.jpg",
    "explanation": "Podczas wysiłku mięśnie potrzebują więcej energii i tlenu, dlatego oddychamy szybciej, tętno wzrasta i krew krąży szybciej."
  },
  {
    "id": "R05_KRA_06",
    "section": "Krążenie i zdrowie",
    "type": "single_choice",
    "prompt": "Jakie tętno jest uznawane za prawidłowe dla dorosłego człowieka?",
    "options": [
      "około 30 uderzeń/min",
      "około 50 uderzeń/min",
      "około 70 uderzeń/min",
      "około 100 uderzeń/min",
      "około 120 uderzeń/min",
      "około 140 uderzeń/min"
    ],
    "answer": 2,
    "explanation": "Prawidłowe tętno dorosłego człowieka wynosi około 70 uderzeń na minutę."
  },
  {
    "id": "R05_KRA_07",
    "section": "Krążenie i zdrowie",
    "type": "single_choice",
    "prompt": "Jakie ciśnienie krwi jest uznawane za optymalne dla dorosłego człowieka?",
    "options": [
      "80/40 mmHg",
      "100/60 mmHg",
      "120/80 mmHg",
      "140/100 mmHg",
      "160/120 mmHg",
      "70/50 mmHg"
    ],
    "answer": 2,
    "explanation": "Optymalne ciśnienie dorosłego człowieka wynosi około 120/80 mmHg."
  },
  {
    "id": "R05_KRA_08",
    "section": "Krążenie i zdrowie",
    "type": "match",
    "prompt": "Połącz chorobę z opisem.",
    "options": null,
    "left": [
      "Anemia",
      "Białaczka",
      "Miażdżyca",
      "Zawał serca"
    ],
    "right": [
      "Niedobór erytrocytów lub hemoglobiny",
      "Przewaga niedojrzałych nieprawidłowych krwinek białych",
      "Odkładanie blaszek i zwężanie tętnic",
      "Obumieranie komórek serca wskutek niedotlenienia"
    ],
    "answer": {
      "Anemia": "Niedobór erytrocytów lub hemoglobiny",
      "Białaczka": "Przewaga niedojrzałych nieprawidłowych krwinek białych",
      "Miażdżyca": "Odkładanie blaszek i zwężanie tętnic",
      "Zawał serca": "Obumieranie komórek serca wskutek niedotlenienia"
    },
    "image": "r05_blaska_miazdzycowa.jpg",
    "explanation": "Anemia wiąże się z niedoborem erytrocytów lub hemoglobiny, białaczka z nieprawidłowymi krwinkami białymi, miażdżyca ze zwężaniem tętnic przez blaszki, a zawał z niedotlenieniem i obumieraniem komórek serca."
  },
  {
    "id": "R05_KRA_09",
    "section": "Krążenie i zdrowie",
    "type": "multi_select",
    "prompt": "Zaznacz działania zmniejszające ryzyko chorób układu krwionośnego.",
    "options": [
      "Zdrowa dieta",
      "Regularna aktywność fizyczna",
      "Badania profilaktyczne",
      "Palenie papierosów",
      "Unikanie używek",
      "Brak ruchu"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Zdrowa dieta, regularna aktywność fizyczna, badania profilaktyczne i unikanie używek sprzyjają zdrowiu układu krwionośnego."
  },
  {
    "id": "R05_KRA_10",
    "section": "Krążenie i zdrowie",
    "type": "scenario",
    "prompt": "W badaniu morfologii stwierdzono zbyt małą liczbę erytrocytów. Na jakie zagrożenie wskazuje taki wynik?",
    "options": [
      "Anemia",
      "Białaczka",
      "Miażdżyca",
      "Nadciśnienie tętnicze",
      "AIDS",
      "Alergia"
    ],
    "answer": 0,
    "explanation": "Zbyt niska wartość erytrocytów może wskazywać na anemię."
  },
  {
    "id": "R05_LIM_01",
    "section": "Układ limfatyczny",
    "type": "multi_select",
    "prompt": "Zaznacz elementy układu limfatycznego.",
    "options": [
      "Naczynia limfatyczne",
      "Węzły chłonne",
      "Śledziona",
      "Grasica",
      "Migdałki",
      "Aorta"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "image": "r05_uklad_limfatyczny.jpg",
    "explanation": "Do układu limfatycznego należą m.in. naczynia limfatyczne, węzły chłonne, śledziona, grasica i migdałki."
  },
  {
    "id": "R05_LIM_02",
    "section": "Układ limfatyczny",
    "type": "true_false",
    "prompt": "Układ limfatyczny jest układem otwartym.",
    "options": null,
    "answer": true,
    "explanation": "Naczynia limfatyczne nie tworzą zamkniętego obiegu jak naczynia krwionośne; układ limfatyczny jest układem otwartym."
  },
  {
    "id": "R05_LIM_03",
    "section": "Układ limfatyczny",
    "type": "fill_in",
    "prompt": "Płyn tkankowy, który przedostał się do naczyń limfatycznych, nazywa się __________.",
    "options": null,
    "answer": [
      "limfą"
    ],
    "altAnswers": [
      [
        "limfą",
        "limfa",
        "chłonką",
        "chłonka",
        "chlonka"
      ]
    ],
    "explanation": "Płyn tkankowy po wejściu do naczyń limfatycznych staje się limfą, czyli chłonką."
  },
  {
    "id": "R05_LIM_04",
    "section": "Układ limfatyczny",
    "type": "match",
    "prompt": "Połącz narząd układu limfatycznego z jego funkcją.",
    "options": null,
    "left": [
      "Migdałki",
      "Grasica",
      "Śledziona",
      "Węzły chłonne"
    ],
    "right": [
      "Likwidacja drobnoustrojów wnikających drogą pokarmową lub oddechową",
      "Dojrzewanie jednego z rodzajów białych krwinek",
      "Filtrowanie i oczyszczanie krwi",
      "Kontrola limfy pod kątem drobnoustrojów"
    ],
    "answer": {
      "Migdałki": "Likwidacja drobnoustrojów wnikających drogą pokarmową lub oddechową",
      "Grasica": "Dojrzewanie jednego z rodzajów białych krwinek",
      "Śledziona": "Filtrowanie i oczyszczanie krwi",
      "Węzły chłonne": "Kontrola limfy pod kątem drobnoustrojów"
    },
    "image": "r05_wezel_chlonny.jpg",
    "explanation": "Migdałki zwalczają drobnoustroje wnikające przez gardło, grasica jest miejscem dojrzewania części białych krwinek, śledziona oczyszcza krew, a węzły chłonne kontrolują limfę."
  },
  {
    "id": "R05_LIM_05",
    "section": "Układ limfatyczny",
    "type": "single_choice",
    "prompt": "Który narząd jest największym narządem układu limfatycznego?",
    "options": [
      "Grasica",
      "Migdałki",
      "Śledziona",
      "Węzeł chłonny",
      "Serce",
      "Wątroba"
    ],
    "answer": 2,
    "explanation": "Śledziona jest największym narządem układu limfatycznego."
  },
  {
    "id": "R05_LIM_06",
    "section": "Układ limfatyczny",
    "type": "multi_select",
    "prompt": "Których elementów nie ma w limfie, choć występują we krwi?",
    "options": [
      "Krwinki czerwone",
      "Płytki krwi",
      "Krwinki białe",
      "Woda",
      "Białka"
    ],
    "answer": [
      0,
      1
    ],
    "explanation": "Limfa nie zawiera krwinek czerwonych ani płytek krwi; przypomina osocze i zawiera krwinki białe."
  },
  {
    "id": "R05_LIM_07",
    "section": "Układ limfatyczny",
    "type": "sequence",
    "prompt": "Ułóż drogę płynu od przestrzeni między komórkami do układu krwionośnego.",
    "options": null,
    "items": [
      "żyły układu krwionośnego",
      "węzeł chłonny",
      "płyn tkankowy między komórkami",
      "naczynia limfatyczne"
    ],
    "answer": [
      "płyn tkankowy między komórkami",
      "naczynia limfatyczne",
      "węzeł chłonny",
      "żyły układu krwionośnego"
    ],
    "explanation": "Płyn tkankowy wpływa do naczyń limfatycznych i staje się limfą, przechodzi przez węzeł chłonny, a oczyszczona limfa trafia do większych naczyń i następnie do żył."
  },
  {
    "id": "R05_LIM_08",
    "section": "Układ limfatyczny",
    "type": "single_choice",
    "prompt": "Co zapobiega cofaniu się limfy w naczyniach limfatycznych?",
    "options": [
      "Przegroda serca",
      "Zastawki",
      "Hemoglobina",
      "Płytki krwi",
      "Antygeny",
      "Aorta"
    ],
    "answer": 1,
    "explanation": "W naczyniach limfatycznych znajdują się zastawki, które zapobiegają cofaniu się limfy."
  },
  {
    "id": "R05_LIM_09",
    "section": "Układ limfatyczny",
    "type": "true_false",
    "prompt": "Ruch mięśni szkieletowych może wspomagać przepływ limfy.",
    "options": null,
    "answer": true,
    "explanation": "Układ limfatyczny nie ma pompy podobnej do serca; przepływ limfy wspomagają m.in. ruchy mięśni szkieletowych."
  },
  {
    "id": "R05_LIM_10",
    "section": "Układ limfatyczny",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do układu krwionośnego i limfatycznego.",
    "options": null,
    "items": [
      "układ zamknięty",
      "układ otwarty",
      "serce jako pompa",
      "śledziona",
      "zastawki w naczyniach krwionośnych i limfatycznych"
    ],
    "categories": [
      "Układ krwionośny",
      "Układ limfatyczny",
      "Oba układy"
    ],
    "answer": {
      "Układ krwionośny": [
        "układ zamknięty",
        "serce jako pompa"
      ],
      "Układ limfatyczny": [
        "układ otwarty",
        "śledziona"
      ],
      "Oba układy": [
        "zastawki w naczyniach krwionośnych i limfatycznych"
      ]
    },
    "explanation": "Układ krwionośny jest zamknięty i ma serce, a limfatyczny jest otwarty i obejmuje m.in. śledzionę. Zastawki występują w obu układach."
  },
  {
    "id": "R05_ODP_01",
    "section": "Odporność",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do odporności wrodzonej i nabytej.",
    "options": null,
    "items": [
      "skóra",
      "łzy",
      "makrofagi",
      "limfocyty",
      "przeciwciała"
    ],
    "categories": [
      "Odporność wrodzona",
      "Odporność nabyta"
    ],
    "answer": {
      "Odporność wrodzona": [
        "skóra",
        "łzy",
        "makrofagi"
      ],
      "Odporność nabyta": [
        "limfocyty",
        "przeciwciała"
      ]
    },
    "explanation": "Odporność wrodzoną tworzą m.in. bariery, wydzieliny i fagocyty, a odporność nabyta opiera się na wyspecjalizowanych limfocytach i przeciwciałach."
  },
  {
    "id": "R05_ODP_02",
    "section": "Odporność",
    "type": "single_choice",
    "prompt": "Jak nazywa się proces, w którym makrofag pochłania bakterię?",
    "options": [
      "Aglutynacja",
      "Fagocytoza",
      "Krzepnięcie",
      "Transplantacja",
      "Saturacja",
      "Dializa"
    ],
    "answer": 1,
    "image": "r05_fagocytoza.jpg",
    "explanation": "Makrofagi należą do fagocytów i pochłaniają drobnoustroje w procesie fagocytozy."
  },
  {
    "id": "R05_ODP_03",
    "section": "Odporność",
    "type": "multi_select",
    "prompt": "Zaznacz zadania limfocytów.",
    "options": [
      "Rozpoznawanie patogenów",
      "Wzywanie innych krwinek białych",
      "Niszczenie komórek nowotworowych",
      "Produkcja przeciwciał",
      "Transport tlenu",
      "Krzepnięcie krwi"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Limfocyty rozpoznają patogeny, wzywają inne krwinki białe, niszczą komórki nowotworowe i produkują przeciwciała."
  },
  {
    "id": "R05_ODP_04",
    "section": "Odporność",
    "type": "true_false",
    "prompt": "Odporność nabyta jest ukierunkowana na konkretny czynnik chorobotwórczy.",
    "options": null,
    "answer": true,
    "explanation": "Odporność nabyta jest swoista i bardzo precyzyjna: wyspecjalizowane krwinki rozpoznają konkretnego wroga."
  },
  {
    "id": "R05_ODP_05",
    "section": "Odporność",
    "type": "match",
    "prompt": "Połącz sposób nabywania odporności z przykładem.",
    "options": null,
    "left": [
      "Czynna naturalna",
      "Czynna sztuczna",
      "Bierna naturalna",
      "Bierna sztuczna"
    ],
    "right": [
      "Przebycie choroby",
      "Szczepionka",
      "Mleko matki",
      "Surowica"
    ],
    "answer": {
      "Czynna naturalna": "Przebycie choroby",
      "Czynna sztuczna": "Szczepionka",
      "Bierna naturalna": "Mleko matki",
      "Bierna sztuczna": "Surowica"
    },
    "explanation": "Przebycie choroby daje odporność czynną naturalną, szczepionka czynną sztuczną, mleko matki bierną naturalną, a surowica bierną sztuczną."
  },
  {
    "id": "R05_ODP_06",
    "section": "Odporność",
    "type": "single_choice",
    "prompt": "Co zawiera surowica stosowana po kontakcie z niebezpiecznym czynnikiem?",
    "options": [
      "Gotowe przeciwciała",
      "Wyłącznie krwinki czerwone",
      "Płytki krwi",
      "Hemoglobinę",
      "Osłabione erytrocyty",
      "Limfę"
    ],
    "answer": 0,
    "image": "r05_surowica_i_szczepionka.jpg",
    "explanation": "Surowica zawiera gotowe przeciwciała, dlatego działa natychmiastowo."
  },
  {
    "id": "R05_ODP_07",
    "section": "Odporność",
    "type": "single_choice",
    "prompt": "Dlaczego szczepionka prowadzi do odporności czynnej?",
    "options": [
      "Dostarcza gotowe przeciwciała",
      "Pobudza organizm do wytwarzania własnych przeciwciał",
      "Niszczy wszystkie leukocyty",
      "Zastępuje skórę jako barierę",
      "Zmienia grupę krwi",
      "Hamuje pracę limfocytów"
    ],
    "answer": 1,
    "explanation": "Szczepionka zawiera osłabione czynniki chorobotwórcze lub ich fragmenty i pobudza organizm do produkcji własnych przeciwciał."
  },
  {
    "id": "R05_ODP_08",
    "section": "Odporność",
    "type": "scenario",
    "prompt": "Osoba została ukąszona przez żmiję zygzakowatą i potrzebuje szybkiego zneutralizowania toksyn z jadu. Co należy zastosować?",
    "options": [
      "Surowicę",
      "Szczepionkę",
      "Morfologię krwi",
      "Pulsoksymetr",
      "Antygen A",
      "Limfę"
    ],
    "answer": 0,
    "explanation": "Surowica działa natychmiastowo dzięki gotowym przeciwciałom i jest stosowana m.in. do neutralizacji toksyn z jadu węża."
  },
  {
    "id": "R05_ODP_09",
    "section": "Odporność",
    "type": "odd_one_out",
    "prompt": "Wskaż element niepasujący do odporności wrodzonej: skóra, łzy, makrofag, limfocyt B.",
    "options": null,
    "answer": "limfocyt B",
    "explanation": "Limfocyt B należy do mechanizmów odporności nabytej, natomiast skóra, łzy i makrofagi należą do odporności wrodzonej."
  },
  {
    "id": "R05_ODP_10",
    "section": "Odporność",
    "type": "fill_in",
    "prompt": "Białka obronne produkowane przez limfocyty to __________.",
    "options": null,
    "answer": [
      "przeciwciała"
    ],
    "altAnswers": [
      [
        "przeciwciała",
        "przeciwciala"
      ]
    ],
    "explanation": "Przeciwciała są białkami obronnymi wytwarzanymi przez limfocyty i skierowanymi przeciw konkretnym antygenom."
  },
  {
    "id": "R05_ZAB_01",
    "section": "Zaburzenia odporności",
    "type": "single_choice",
    "prompt": "Dlaczego może dojść do odrzucenia przeszczepionego narządu?",
    "options": [
      "Z powodu niezgodności tkankowej",
      "Z powodu braku hemoglobiny w osoczu",
      "Z powodu zbyt dużej liczby zastawek",
      "Z powodu obecności aorty",
      "Z powodu działania płytek krwi",
      "Z powodu niskiej saturacji dawcy"
    ],
    "answer": 0,
    "image": "r05_transplantacja.jpg",
    "explanation": "Jeśli antygeny komórek dawcy znacznie różnią się od antygenów biorcy, układ odpornościowy może rozpoznać przeszczep jako obcy i go zaatakować."
  },
  {
    "id": "R05_ZAB_02",
    "section": "Zaburzenia odporności",
    "type": "true_false",
    "prompt": "Duże podobieństwo antygenów komórek dawcy i biorcy zwiększa szansę przyjęcia przeszczepu.",
    "options": null,
    "answer": true,
    "explanation": "Tkanki dawcy i biorcy dobiera się pod względem zgodności tkankowej, aby zmniejszyć ryzyko odpowiedzi odpornościowej i odrzucenia przeszczepu."
  },
  {
    "id": "R05_ZAB_03",
    "section": "Zaburzenia odporności",
    "type": "single_choice",
    "prompt": "Czym jest alergia?",
    "options": [
      "Przesadną odpowiedzią na nieszkodliwy alergen",
      "Brakiem krwinek czerwonych",
      "Zatrzymaniem przepływu w tętnicy",
      "Prawidłową reakcją na każdy patogen",
      "Rodzajem krzepnięcia krwi",
      "Chorobą wywołaną wyłącznie przez bakterie"
    ],
    "answer": 0,
    "image": "r05_reakcja_alergiczna.jpg",
    "explanation": "Alergia to przesadna odpowiedź układu odpornościowego na nieszkodliwe czynniki, czyli alergeny."
  },
  {
    "id": "R05_ZAB_04",
    "section": "Zaburzenia odporności",
    "type": "multi_select",
    "prompt": "Zaznacz możliwe objawy reakcji alergicznej.",
    "options": [
      "Kichanie",
      "Łzawienie oczu",
      "Swędzenie",
      "Wysypka",
      "Zaczerwienienie skóry",
      "Zwiększenie liczby jam serca"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do objawów alergii należą m.in. kichanie, łzawienie, swędzenie, wysypka, zaczerwienienie skóry i katar sienny."
  },
  {
    "id": "R05_ZAB_05",
    "section": "Zaburzenia odporności",
    "type": "single_choice",
    "prompt": "Jak nazywa się najbardziej ostra i gwałtowna reakcja na alergen?",
    "options": [
      "Wstrząs anafilaktyczny",
      "Aglutynacja",
      "Anemia",
      "Miażdżyca",
      "Fagocytoza",
      "Saturacja"
    ],
    "answer": 0,
    "explanation": "Najbardziej ostrą i gwałtowną reakcją alergiczną jest wstrząs anafilaktyczny."
  },
  {
    "id": "R05_ZAB_06",
    "section": "Zaburzenia odporności",
    "type": "true_false",
    "prompt": "Wirus HIV może przenosić się przez zwykłe codzienne kontakty i korzystanie z tej samej łazienki.",
    "options": null,
    "answer": false,
    "explanation": "HIV nie przenosi się przez codzienne kontakty, pocałunki, wspólne przybory kuchenne, wspólną łazienkę, pracę ani mieszkanie."
  },
  {
    "id": "R05_ZAB_07",
    "section": "Zaburzenia odporności",
    "type": "multi_select",
    "prompt": "Zaznacz drogi zakażenia wirusem HIV.",
    "options": [
      "Kontakt z zakażoną krwią",
      "Przeniknięcie przez łożysko w okresie ciąży",
      "Stosunek płciowy z zakażoną osobą",
      "Pocałunek",
      "Korzystanie z tej samej łazienki",
      "Wspólna praca"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "image": "r05_hiv_limfocyt.jpg",
    "explanation": "Do dróg zakażenia HIV należą kontakt z zakażoną krwią, przeniknięcie wirusa przez łożysko oraz stosunek płciowy z zakażoną osobą."
  },
  {
    "id": "R05_ZAB_08",
    "section": "Zaburzenia odporności",
    "type": "match",
    "prompt": "Połącz pojęcie z właściwym opisem.",
    "options": null,
    "left": [
      "HIV",
      "AIDS",
      "Alergia",
      "Transplantacja"
    ],
    "right": [
      "Wirus uszkadzający układ odpornościowy",
      "Zespół nabytego niedoboru odporności",
      "Przesadna odpowiedź na alergen",
      "Przeszczepianie narządów"
    ],
    "answer": {
      "HIV": "Wirus uszkadzający układ odpornościowy",
      "AIDS": "Zespół nabytego niedoboru odporności",
      "Alergia": "Przesadna odpowiedź na alergen",
      "Transplantacja": "Przeszczepianie narządów"
    },
    "explanation": "HIV to wirus atakujący układ odpornościowy; AIDS to zespół nabytego niedoboru odporności; alergia to nadmierna reakcja na alergen; transplantacja to przeszczepianie narządów."
  },
  {
    "id": "R05_ZAB_09",
    "section": "Zaburzenia odporności",
    "type": "scenario",
    "prompt": "Po użądleniu przez owada u osoby nagle pojawiają się poważne trudności w oddychaniu i zaburzenia przepływu krwi. Co może się rozwijać?",
    "options": [
      "Wstrząs anafilaktyczny",
      "Anemia",
      "Białaczka",
      "Miażdżyca",
      "Konflikt serologiczny",
      "Nadciśnienie tętnicze"
    ],
    "answer": 0,
    "explanation": "Wstrząs anafilaktyczny jest gwałtowną reakcją na alergen; może prowadzić do niemożności oddychania i braku przepływu krwi."
  },
  {
    "id": "R05_ZAB_10",
    "section": "Zaburzenia odporności",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest drogą zakażenia HIV: zakażona krew, łożysko, stosunek płciowy, pocałunek.",
    "options": null,
    "answer": "pocałunek",
    "explanation": "Pocałunek nie jest drogą zakażenia HIV; wirus może być przenoszony m.in. przez zakażoną krew, łożysko i kontakty płciowe."
  },
  {
    "id": "R05_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki udział objętości krwi stanowią łącznie krwinki białe i płytki krwi?",
    "options": [
      "około 1%",
      "około 10%",
      "około 44%",
      "około 55%",
      "około 90%",
      "około 99%"
    ],
    "answer": 0,
    "explanation": "Krwinki białe i płytki krwi stanowią łącznie około 1% objętości krwi."
  },
  {
    "id": "R05_HARD_02",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz grupę krwi z przeciwciałami obecnymi w osoczu.",
    "options": null,
    "left": [
      "A",
      "B",
      "AB",
      "0"
    ],
    "right": [
      "przeciwciała anty-B",
      "przeciwciała anty-A",
      "brak przeciwciał anty-A i anty-B",
      "przeciwciała anty-A i anty-B"
    ],
    "answer": {
      "A": "przeciwciała anty-B",
      "B": "przeciwciała anty-A",
      "AB": "brak przeciwciał anty-A i anty-B",
      "0": "przeciwciała anty-A i anty-B"
    },
    "explanation": "W osoczu grupy A są przeciwciała anty-B, grupy B anty-A, grupy AB nie ma przeciwciał anty-A ani anty-B, a grupa 0 ma oba rodzaje przeciwciał."
  },
  {
    "id": "R05_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pacjent ma grupę krwi 0 Rh-. Który dawca może oddać mu krew, uwzględniając układ ABO i czynnik Rh?",
    "options": [
      "0 Rh-",
      "0 Rh+",
      "A Rh-",
      "B Rh-",
      "AB Rh-",
      "A Rh+"
    ],
    "answer": 0,
    "explanation": "Osoba z grupą 0 może otrzymać krew tylko grupy 0, a osoba Rh- nie powinna otrzymywać krwi Rh+. Dlatego zgodny jest dawca 0 Rh-."
  },
  {
    "id": "R05_HARD_04",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Osocze składa się głównie z wody, której jest około __________ procent.",
    "options": null,
    "answer": [
      "90"
    ],
    "altAnswers": [
      [
        "90",
        "90%",
        "90 %"
      ]
    ],
    "explanation": "W osoczu woda stanowi około 90%."
  },
  {
    "id": "R05_HARD_05",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż trasę krwinki od prawej komory aż do lewej komory.",
    "options": null,
    "items": [
      "lewa komora",
      "żyły płucne",
      "naczynia włosowate płuc",
      "prawa komora",
      "lewy przedsionek",
      "pień płucny"
    ],
    "answer": [
      "prawa komora",
      "pień płucny",
      "naczynia włosowate płuc",
      "żyły płucne",
      "lewy przedsionek",
      "lewa komora"
    ],
    "explanation": "Z prawej komory krew płynie pniem płucnym do naczyń włosowatych płuc, następnie żyłami płucnymi do lewego przedsionka i lewej komory."
  },
  {
    "id": "R05_HARD_06",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Po ilu minutach całkowitego niedotlenienia mózgu może nastąpić utrata przytomności i śpiączka?",
    "options": [
      "po około 30 sekundach",
      "po około 1 minucie",
      "po około 3-4 minutach",
      "po około 10 minutach",
      "po około 30 minutach",
      "po około godzinie"
    ],
    "answer": 2,
    "explanation": "Przy całkowitym niedotlenieniu mózgu po około 3-4 minutach może dojść do utraty przytomności i śpiączki."
  },
  {
    "id": "R05_HARD_07",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W morfologii krwi liczba leukocytów wynosi 12 tys./µl, a zakres referencyjny wynosi 3,8-10,0 tys./µl. Z jakim zagrożeniem może wiązać się taki wynik?",
    "options": [
      "Białaczka",
      "Anemia",
      "Miażdżyca",
      "Alergia",
      "Nadciśnienie",
      "Konflikt serologiczny"
    ],
    "answer": 0,
    "explanation": "Podwyższona liczba leukocytów może być związana z białaczką."
  },
  {
    "id": "R05_HARD_08",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jak często średnio wykonywana jest dializa u pacjenta wymagającego takiego leczenia?",
    "options": [
      "raz w miesiącu",
      "raz w tygodniu",
      "2-3 razy w tygodniu",
      "codziennie",
      "5-7 razy dziennie",
      "tylko raz w życiu"
    ],
    "answer": 2,
    "explanation": "Dializa jest wykonywana średnio 2-3 razy w tygodniu po 3-5 godzin."
  },
  {
    "id": "R05_HARD_09",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które funkcje pełni śledziona?",
    "options": [
      "Filtrowanie krwi",
      "Usuwanie starych elementów morfotycznych",
      "Niszczenie drobnoustrojów",
      "Magazynowanie krwi",
      "Pompowanie krwi do aorty",
      "Produkcja żółci"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Śledziona filtruje i oczyszcza krew ze starych elementów morfotycznych i drobnoustrojów oraz pełni funkcję magazynu krwi."
  },
  {
    "id": "R05_HARD_10",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Po usunięciu śledziony część jej funkcji mogą przejąć wątroba i węzły chłonne, ale odporność może być osłabiona.",
    "options": null,
    "answer": true,
    "explanation": "Człowiek może żyć bez śledziony; część jej funkcji przejmują wątroba i węzły chłonne, jednak wzrasta podatność na infekcje."
  },
  {
    "id": "R05_HARD_11",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz rodzaj odporności z tym, skąd pochodzą przeciwciała lub jak powstają.",
    "options": null,
    "left": [
      "czynna naturalna",
      "czynna sztuczna",
      "bierna naturalna",
      "bierna sztuczna"
    ],
    "right": [
      "własne przeciwciała po chorobie",
      "własne przeciwciała po szczepieniu",
      "gotowe przeciwciała z mlekiem matki",
      "gotowe przeciwciała z surowicy"
    ],
    "answer": {
      "czynna naturalna": "własne przeciwciała po chorobie",
      "czynna sztuczna": "własne przeciwciała po szczepieniu",
      "bierna naturalna": "gotowe przeciwciała z mlekiem matki",
      "bierna sztuczna": "gotowe przeciwciała z surowicy"
    },
    "explanation": "Odporność czynna oznacza produkcję własnych przeciwciał, a bierna wykorzystuje gotowe przeciwciała; naturalne przykłady to choroba i mleko matki, a sztuczne to szczepionka i surowica."
  },
  {
    "id": "R05_HARD_12",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Pacjent otrzymuje narząd dawcy o znacznie różniących się antygenach powierzchniowych. Jaka reakcja jest najbardziej prawdopodobna?",
    "options": [
      "Odrzucenie przeszczepu",
      "Powstanie grupy krwi AB",
      "Zanik zastawek żylnych",
      "Wzrost liczby erytrocytów",
      "Powstanie limfy w aorcie",
      "Zatrzymanie fagocytozy"
    ],
    "answer": 0,
    "explanation": "Znaczne różnice antygenów komórek dawcy i biorcy mogą uruchomić odpowiedź odpornościową i doprowadzić do odrzucenia przeszczepu."
  },
  {
    "id": "R05_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego przeszczep rogówki udaje się niemal zawsze?",
    "options": [
      "Niemal nie ma naczyń krwionośnych i limfatycznych",
      "Nie zawiera żadnych komórek",
      "Ma zawsze identyczne antygeny u wszystkich ludzi",
      "Jest częścią układu limfatycznego",
      "Wytwarza gotowe przeciwciała",
      "Nie styka się z układem odpornościowym w żadnych warunkach"
    ],
    "answer": 0,
    "explanation": "Rogówka niemal nie ma naczyń krwionośnych i limfatycznych, którymi mogłyby napływać krwinki białe pobudzające odpowiedź odpornościową."
  },
  {
    "id": "R05_HARD_14",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o HIV i AIDS są prawdziwe?",
    "options": [
      "HIV jest wirusem",
      "AIDS jest zespołem nabytego niedoboru odporności",
      "HIV może uszkadzać układ odpornościowy",
      "HIV przenosi się przez wspólną łazienkę",
      "Pocałunek jest typową drogą zakażenia HIV"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "HIV jest wirusem uszkadzającym układ odpornościowy, a AIDS jest zespołem nabytego niedoboru odporności rozwijającym się w wyniku zakażenia HIV. HIV nie przenosi się przez zwykłe codzienne kontakty."
  },
  {
    "id": "R05_HARD_15",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj przykłady do sytuacji, w których układ odpornościowy działa zbyt słabo albo zbyt mocno.",
    "options": null,
    "items": [
      "zakażenie HIV",
      "katar sienny",
      "wstrząs anafilaktyczny",
      "odrzucenie przeszczepu"
    ],
    "categories": [
      "Zbyt słaba odpowiedź",
      "Zbyt mocna lub niekorzystna odpowiedź"
    ],
    "answer": {
      "Zbyt słaba odpowiedź": [
        "zakażenie HIV"
      ],
      "Zbyt mocna lub niekorzystna odpowiedź": [
        "katar sienny",
        "wstrząs anafilaktyczny",
        "odrzucenie przeszczepu"
      ]
    },
    "explanation": "Zakażenie HIV osłabia działanie układu odpornościowego. Alergia, wstrząs anafilaktyczny i odrzucenie przeszczepu są przykładami nadmiernej lub niekorzystnej odpowiedzi odpornościowej."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r05",
  number: 5,
  title: "Układ krążenia i odporność",
  icon: "❤️",
  sectionOrder: [
  "Krew i grupy krwi",
  "Naczynia i serce",
  "Krążenie i zdrowie",
  "Układ limfatyczny",
  "Odporność",
  "Zaburzenia odporności"
],
  sectionIcons: {
  "Krew i grupy krwi": "🩸",
  "Naczynia i serce": "❤️",
  "Krążenie i zdrowie": "🫀",
  "Układ limfatyczny": "🟢",
  "Odporność": "🛡️",
  "Zaburzenia odporności": "⚕️"
},
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
