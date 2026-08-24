// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SER  = Serce i naczynia krwionośne
//   KRE  = Krew, grupy krwi i krwiodawstwo
//   PRO  = Profilaktyka i choroby układu krwionośnego
//   LIM  = Układ limfatyczny i odporność organizmu
//   ODP  = Odporność wrodzona, nabyta i szczepienia
//   PROB = Problemy z odpornością
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_SER_01",
    "section": "Serce i naczynia krwionośne",
    "type": "single_choice",
    "prompt": "Którym rodzajem naczyń krew wypływa z serca?",
    "options": [
      "Żyłami",
      "Tętnicami",
      "Naczyniami limfatycznymi",
      "Przewodami żółciowymi",
      "Moczowodami",
      "Oskrzeliami"
    ],
    "answer": 1,
    "explanation": "Tętnicami krew wypływa z serca, natomiast żyłami dopływa do serca."
  },
  {
    "id": "R04_SER_02",
    "section": "Serce i naczynia krwionośne",
    "type": "multi_select",
    "prompt": "Zaznacz cechy żył.",
    "options": [
      "Doprowadzają krew do serca",
      "Mają cieńsze ściany niż tętnice",
      "Mogą mieć zastawki zapobiegające cofaniu krwi",
      "Krew płynie w nich pod mniejszym ciśnieniem niż w tętnicach",
      "Zawsze odprowadzają krew z serca",
      "Mają najgrubsze i najbardziej elastyczne ściany"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Żyły doprowadzają krew do serca. Mają cieńsze ściany, krew płynie w nich wolniej i pod mniejszym ciśnieniem, a zastawki zapobiegają jej cofaniu.",
    "image": "r04_naczynia_przekroje.jpg"
  },
  {
    "id": "R04_SER_03",
    "section": "Serce i naczynia krwionośne",
    "type": "true_false",
    "prompt": "Naczynia włosowate umożliwiają wymianę gazów i substancji między krwią a komórkami.",
    "options": null,
    "answer": true,
    "explanation": "Cienkie ściany naczyń włosowatych umożliwiają wymianę gazów i różnych substancji między krwią a komórkami."
  },
  {
    "id": "R04_SER_04",
    "section": "Serce i naczynia krwionośne",
    "type": "fill_in",
    "prompt": "Serce wprawia krew w ruch dzięki rytmicznym, naprzemiennym skurczom __________ i __________.",
    "options": null,
    "answer": [
      "przedsionków",
      "komór"
    ],
    "altAnswers": [
      [
        "przedsionków",
        "przedsionki"
      ],
      [
        "komór",
        "komory"
      ]
    ],
    "explanation": "Serce pracuje bez przerwy, wykonując rytmiczne naprzemienne skurcze przedsionków i komór."
  },
  {
    "id": "R04_SER_05",
    "section": "Serce i naczynia krwionośne",
    "type": "match",
    "prompt": "Połącz rodzaj naczynia z jego główną rolą.",
    "options": null,
    "left": [
      "tętnica",
      "żyła",
      "naczynie włosowate"
    ],
    "right": [
      "odprowadza krew z serca",
      "doprowadza krew do serca",
      "umożliwia wymianę między krwią a komórkami"
    ],
    "answer": {
      "tętnica": "odprowadza krew z serca",
      "żyła": "doprowadza krew do serca",
      "naczynie włosowate": "umożliwia wymianę między krwią a komórkami"
    },
    "explanation": "Tętnice prowadzą krew z serca, żyły do serca, a naczynia włosowate są miejscem wymiany gazów i substancji."
  },
  {
    "id": "R04_SER_06",
    "section": "Serce i naczynia krwionośne",
    "type": "sequence",
    "prompt": "Ułóż drogę krwi w małym obiegu, zaczynając od prawej komory serca.",
    "options": null,
    "items": [
      "żyły płucne",
      "prawa komora serca",
      "naczynia włosowate oplatające pęcherzyki płucne",
      "lewy przedsionek serca",
      "tętnica płucna"
    ],
    "answer": [
      "prawa komora serca",
      "tętnica płucna",
      "naczynia włosowate oplatające pęcherzyki płucne",
      "żyły płucne",
      "lewy przedsionek serca"
    ],
    "explanation": "W małym obiegu krew płynie z prawej komory tętnicą płucną do naczyń włosowatych płuc, a po natlenieniu wraca żyłami płucnymi do lewego przedsionka."
  },
  {
    "id": "R04_SER_07",
    "section": "Serce i naczynia krwionośne",
    "type": "scenario",
    "prompt": "Uczeń zmierzył tętno w spoczynku, a potem po 5 minutach intensywnych ćwiczeń. Po wysiłku tętno było wyższe. Które wyjaśnienie najlepiej pasuje do roli serca i krwi?",
    "options": [
      "Serce szybciej pompuje krew, aby zwiększyć transport potrzebnych substancji do pracujących komórek",
      "Serce zatrzymuje na chwilę przepływ krwi przez mięśnie",
      "Żyły zamieniają się podczas wysiłku w tętnice",
      "Naczynia włosowate przestają wymieniać substancje",
      "Krew przestaje docierać do komórek mięśni",
      "Zastawki serca przestają działać"
    ],
    "answer": 0,
    "explanation": "Układ krwionośny dostarcza komórkom tlen i składniki odżywcze. Podczas wysiłku szybsza praca serca zwiększa przepływ krwi i wspiera ten transport."
  },
  {
    "id": "R04_SER_08",
    "section": "Serce i naczynia krwionośne",
    "type": "riddle",
    "prompt": "Liczba skurczów serca w ciągu minuty to...",
    "options": null,
    "answer": "tętno",
    "altAnswers": [
      "tętno",
      "puls"
    ],
    "explanation": "Tętno, nazywane też pulsem, to liczba skurczów serca w ciągu minuty.",
    "image": "r04_puls_nadgarstek.jpg"
  },
  {
    "id": "R04_SER_09",
    "section": "Serce i naczynia krwionośne",
    "type": "single_choice",
    "prompt": "Która część serca wtłacza krew bogatą w tlen do aorty i rozpoczyna duży obieg krwi?",
    "options": [
      "Prawy przedsionek",
      "Prawa komora",
      "Lewy przedsionek",
      "Lewa komora",
      "Przegroda serca",
      "Zastawka żylna"
    ],
    "answer": 3,
    "explanation": "Duży obieg zaczyna się w lewej komorze. Stamtąd krew bogata w tlen jest wtłaczana do aorty, a potem do mniejszych tętnic.",
    "image": "r04_serce_anatomia.jpg"
  },
  {
    "id": "R04_KRE_01",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "match",
    "prompt": "Połącz składnik krwi z jego funkcją.",
    "options": null,
    "left": [
      "erytrocyty",
      "leukocyty",
      "trombocyty",
      "osocze"
    ],
    "right": [
      "transport tlenu dzięki hemoglobinie",
      "obrona przed bakteriami i wirusami",
      "udział w krzepnięciu krwi",
      "transport składników krwi i rozpuszczonych substancji"
    ],
    "answer": {
      "erytrocyty": "transport tlenu dzięki hemoglobinie",
      "leukocyty": "obrona przed bakteriami i wirusami",
      "trombocyty": "udział w krzepnięciu krwi",
      "osocze": "transport składników krwi i rozpuszczonych substancji"
    },
    "explanation": "Erytrocyty przenoszą tlen, leukocyty chronią organizm, trombocyty uczestniczą w krzepnięciu, a osocze transportuje składniki krwi i różne substancje.",
    "image": "r04_krew_mikroskop.jpg"
  },
  {
    "id": "R04_KRE_02",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "single_choice",
    "prompt": "Jak nazywa się białko w krwinkach czerwonych, które wiąże tlen?",
    "options": [
      "Hemoglobina",
      "Insulina",
      "Kolagen",
      "Fibryna",
      "Keratyna",
      "Melanina"
    ],
    "answer": 0,
    "explanation": "Krwinki czerwone zawierają hemoglobinę, która wiąże tlen pobrany w płucach.",
    "image": "r04_krew_mikroskop.jpg"
  },
  {
    "id": "R04_KRE_03",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "true_false",
    "prompt": "Głównym składnikiem osocza jest woda, a osocze transportuje m.in. składniki odżywcze, hormony i dwutlenek węgla.",
    "options": null,
    "answer": true,
    "explanation": "Osocze to żółtawy płyn złożony głównie z wody. Przenosi składniki krwi oraz m.in. składniki odżywcze, hormony i dwutlenek węgla."
  },
  {
    "id": "R04_KRE_04",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "sort",
    "prompt": "Przyporządkuj składniki krwi do odpowiednich kategorii.",
    "options": null,
    "items": [
      "erytrocyty",
      "leukocyty",
      "trombocyty",
      "osocze"
    ],
    "categories": [
      "elementy zanurzone w osoczu",
      "płynny składnik krwi"
    ],
    "answer": {
      "elementy zanurzone w osoczu": [
        "erytrocyty",
        "leukocyty",
        "trombocyty"
      ],
      "płynny składnik krwi": [
        "osocze"
      ]
    },
    "explanation": "Krew składa się z płynnego osocza oraz zanurzonych w nim krwinek czerwonych, białych i płytek krwi."
  },
  {
    "id": "R04_KRE_05",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "multi_select",
    "prompt": "Zaznacz informacje dotyczące grupy krwi AB w układzie ABO.",
    "options": [
      "Erytrocyty mają antygen A",
      "Erytrocyty mają antygen B",
      "W osoczu nie powstają przeciwciała anty-A ani anty-B",
      "Erytrocyty nie mają antygenów A ani B",
      "W osoczu są jednocześnie przeciwciała anty-A i anty-B"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Krwinki grupy AB mają oba antygeny: A i B. Dlatego organizm nie wytwarza przeciwciał anty-A ani anty-B przeciw własnym erytrocytom."
  },
  {
    "id": "R04_KRE_06",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "fill_in",
    "prompt": "Erytrocyty grupy 0 nie mają antygenów __________ ani __________, a w osoczu znajdują się przeciwciała anty-A i anty-B.",
    "options": null,
    "answer": [
      "A",
      "B"
    ],
    "altAnswers": [
      [
        "A",
        "a"
      ],
      [
        "B",
        "b"
      ]
    ],
    "explanation": "Krew grupy 0 nie ma na erytrocytach antygenów A ani B, a jej osocze zawiera przeciwciała anty-A i anty-B."
  },
  {
    "id": "R04_KRE_07",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "scenario",
    "prompt": "W sytuacji kryzysowej rozważa się przetoczenie erytrocytów dawcy z grupą A, pomijając na chwilę czynnik Rh. Którzy biorcy mogą je otrzymać zgodnie z zasadami zgodności grup ABO?",
    "options": [
      "Tylko osoby z grupą 0",
      "Osoby z grupą A lub AB",
      "Osoby z grupą B lub 0",
      "Tylko osoby z grupą B",
      "Wszyscy niezależnie od grupy",
      "Tylko osoby z grupą AB"
    ],
    "answer": 1,
    "explanation": "Erytrocyty grupy A mają antygen A. Mogą być przetoczone biorcom z grupą A lub AB, ponieważ te grupy nie wytwarzają przeciwciał anty-A przeciw takim krwinkom."
  },
  {
    "id": "R04_KRE_08",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "riddle",
    "prompt": "Dobrowolne i bezpłatne oddawanie krwi lub jej składników to...",
    "options": null,
    "answer": "krwiodawstwo",
    "altAnswers": [
      "krwiodawstwo",
      "honorowe krwiodawstwo"
    ],
    "explanation": "Krwiodawstwo oznacza dobrowolne, bezpłatne oddawanie krwi lub jej składników.",
    "image": "r04_krwiodawstwo.jpg"
  },
  {
    "id": "R04_KRE_09",
    "section": "Krew, grupy krwi i krwiodawstwo",
    "type": "single_choice",
    "prompt": "Który zestaw spełnia podstawowe kryteria dawcy krwi?",
    "options": [
      "18-65 lat i co najmniej 50 kg",
      "12-17 lat i co najmniej 40 kg",
      "18-80 lat bez względu na masę ciała",
      "21-65 lat i co najmniej 35 kg",
      "16-60 lat i dokładnie 50 kg",
      "Każdy wiek i dowolna masa ciała"
    ],
    "answer": 0,
    "explanation": "Krew lub jej składniki mogą oddawać osoby w wieku 18-65 lat, o masie co najmniej 50 kg i bez poważnych schorzeń.",
    "image": "r04_krwiodawstwo.jpg"
  },
  {
    "id": "R04_PRO_01",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "multi_select",
    "prompt": "Zaznacz działania wspierające zdrowie serca i naczyń krwionośnych.",
    "options": [
      "Regularna aktywność fizyczna",
      "Dieta z dużą ilością warzyw i owoców",
      "Odpowiednia ilość snu",
      "Regularne pomiary ciśnienia i badania krwi",
      "Palenie tytoniu",
      "Nadmiar soli i tłustych potraw"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Profilaktyka obejmuje codzienny ruch, zdrową dietę, odpowiednią ilość snu i badania kontrolne. Tytoń oraz nadmiar soli i tłustych potraw działają niekorzystnie.",
    "image": "r04_zdrowy_styl_zycia.jpg"
  },
  {
    "id": "R04_PRO_02",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "true_false",
    "prompt": "Nikotyna zwiększa ciśnienie tętnicze oraz ryzyko powstawania zakrzepów.",
    "options": null,
    "answer": true,
    "explanation": "Nikotyna znacznie zwiększa ciśnienie tętnicze i ryzyko powstawania zakrzepów, dlatego unikanie tytoniu jest elementem profilaktyki."
  },
  {
    "id": "R04_PRO_03",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "single_choice",
    "prompt": "Co odkłada się wewnątrz tętnic w miażdżycy?",
    "options": [
      "M.in. cholesterol i wapń",
      "Wyłącznie glukoza",
      "Tylko woda",
      "Hemoglobina i tlen",
      "Ślina i enzymy",
      "Limfa i przeciwciała"
    ],
    "answer": 0,
    "explanation": "W miażdżycy wewnątrz tętnic odkładają się m.in. cholesterol i wapń, przez co tętnice zwężają się i tracą elastyczność."
  },
  {
    "id": "R04_PRO_04",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "fill_in",
    "prompt": "W miażdżycy tętnice stają się __________ i mniej __________, co utrudnia przepływ krwi.",
    "options": null,
    "answer": [
      "węższe",
      "elastyczne"
    ],
    "altAnswers": [
      [
        "węższe",
        "wezsze"
      ],
      [
        "elastyczne",
        "sprężyste"
      ]
    ],
    "explanation": "Odkładanie się blaszki miażdżycowej zwęża tętnice i zmniejsza ich elastyczność, utrudniając przepływ krwi."
  },
  {
    "id": "R04_PRO_05",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "scenario",
    "prompt": "Osoba ma silny ból w klatce piersiowej, siną i spoconą skórę, bladą twarz, trudności z oddychaniem oraz silny niepokój. Które zdarzenie najlepiej pasuje do tych objawów?",
    "options": [
      "Zawał serca",
      "Alergia kontaktowa",
      "Zwykłe skaleczenie",
      "Krótkotrwały katar",
      "Powiększenie węzła chłonnego",
      "Krzepnięcie krwi w ranie"
    ],
    "answer": 0,
    "explanation": "Wymienione objawy są charakterystyczne dla zawału serca. Zawał oznacza uszkodzenie obszaru serca wskutek braku dopływu krwi i tlenu."
  },
  {
    "id": "R04_PRO_06",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "sequence",
    "prompt": "Ułóż możliwy ciąg prowadzący od miażdżycy do zawału serca.",
    "options": null,
    "items": [
      "niedotlenienie części serca",
      "odkładanie się blaszki miażdżycowej",
      "zawał serca",
      "zwężenie tętnicy",
      "utrudniony dopływ krwi"
    ],
    "answer": [
      "odkładanie się blaszki miażdżycowej",
      "zwężenie tętnicy",
      "utrudniony dopływ krwi",
      "niedotlenienie części serca",
      "zawał serca"
    ],
    "explanation": "Miażdżyca zwęża tętnice i utrudnia przepływ krwi. Niedokrwienie i niedotlenienie mięśnia sercowego mogą doprowadzić do zawału."
  },
  {
    "id": "R04_PRO_07",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "match",
    "prompt": "Połącz grupę wiekową z prawidłową wartością ciśnienia krwi w spoczynku.",
    "options": null,
    "left": [
      "dzieci w wieku szkolnym",
      "młodzież",
      "dorośli"
    ],
    "right": [
      "100/60 mmHg",
      "110/70 mmHg",
      "120/80 mmHg"
    ],
    "answer": {
      "dzieci w wieku szkolnym": "100/60 mmHg",
      "młodzież": "110/70 mmHg",
      "dorośli": "120/80 mmHg"
    },
    "explanation": "Prawidłowe wartości ciśnienia w spoczynku wynoszą około 100/60 mmHg dla dzieci w wieku szkolnym, 110/70 mmHg dla młodzieży i 120/80 mmHg dla dorosłych.",
    "image": "r04_pomiar_cisnienia.jpg"
  },
  {
    "id": "R04_PRO_08",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie pasuje do działań profilaktycznych: codzienny ruch, zdrowa dieta, regularny pomiar ciśnienia, palenie tytoniu.",
    "options": null,
    "answer": "palenie tytoniu",
    "explanation": "Palenie tytoniu nie jest działaniem profilaktycznym. Unikanie używek, ruch, zdrowa dieta i badania kontrolne wspierają układ krwionośny."
  },
  {
    "id": "R04_PRO_09",
    "section": "Profilaktyka i choroby układu krwionośnego",
    "type": "single_choice",
    "prompt": "Co należy zrobić przed pomiarem ciśnienia tętniczego?",
    "options": [
      "Usiąść wygodnie i odpocząć przez kilka minut",
      "Wykonać intensywny sprint",
      "Położyć rękę dużo niżej niż serce",
      "Rozmawiać przez cały pomiar",
      "Stać na jednej nodze",
      "Napinać mięśnie ręki"
    ],
    "answer": 0,
    "explanation": "Przed pomiarem należy wygodnie usiąść i odpocząć kilka minut. Podczas pomiaru ręka powinna być na wysokości serca, a badany nie powinien się ruszać ani rozmawiać.",
    "image": "r04_pomiar_cisnienia.jpg"
  },
  {
    "id": "R04_LIM_01",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "single_choice",
    "prompt": "Z czego składa się układ limfatyczny?",
    "options": [
      "Z naczyń limfatycznych, węzłów chłonnych i narządów limfatycznych",
      "Wyłącznie z tętnic i żył",
      "Tylko z serca i aorty",
      "Wyłącznie z erytrocytów",
      "Z płuc i oskrzeli",
      "Z żołądka i jelit"
    ],
    "answer": 0,
    "explanation": "Układ limfatyczny tworzą naczynia limfatyczne z węzłami chłonnymi oraz narządy limfatyczne, m.in. migdałki, grasica i śledziona."
  },
  {
    "id": "R04_LIM_02",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "match",
    "prompt": "Połącz element układu limfatycznego z jego zadaniem.",
    "options": null,
    "left": [
      "węzeł chłonny",
      "śledziona",
      "migdałki",
      "szpik kostny"
    ],
    "right": [
      "filtruje limfę i wytwarza przeciwciała",
      "magazynuje limfocyty",
      "niszczą patogeny i wytwarzają przeciwciała oraz limfocyty",
      "produkuje limfocyty"
    ],
    "answer": {
      "węzeł chłonny": "filtruje limfę i wytwarza przeciwciała",
      "śledziona": "magazynuje limfocyty",
      "migdałki": "niszczą patogeny i wytwarzają przeciwciała oraz limfocyty",
      "szpik kostny": "produkuje limfocyty"
    },
    "explanation": "Węzły filtrują limfę i wytwarzają przeciwciała, śledziona magazynuje limfocyty, migdałki niszczą patogeny, a szpik kostny produkuje limfocyty."
  },
  {
    "id": "R04_LIM_03",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "true_false",
    "prompt": "Limfa przypomina osocze krwi, ale zawiera mniej białek i zawiera limfocyty.",
    "options": null,
    "answer": true,
    "explanation": "Limfa jest płynem ustrojowym podobnym do osocza krwi, lecz zawiera mniej białek; zawiera też wodę i limfocyty."
  },
  {
    "id": "R04_LIM_04",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "fill_in",
    "prompt": "W układzie krwionośnym krąży __________, a w układzie limfatycznym __________. Razem te układy tworzą układ __________.",
    "options": null,
    "answer": [
      "krew",
      "limfa",
      "krążenia"
    ],
    "altAnswers": [
      [
        "krew"
      ],
      [
        "limfa"
      ],
      [
        "krążenia",
        "krazenia"
      ]
    ],
    "explanation": "W układzie krwionośnym krąży krew, a w limfatycznym limfa. Oba układy razem tworzą układ krążenia."
  },
  {
    "id": "R04_LIM_05",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "riddle",
    "prompt": "Podczas infekcji mogą być wyczuwalne jako powiększone guzki na szyi, pod pachami lub w pachwinach. To...",
    "options": null,
    "answer": "węzły chłonne",
    "altAnswers": [
      "węzły chłonne",
      "wezly chlonne",
      "węzły limfatyczne"
    ],
    "explanation": "Powiększone węzły chłonne podczas choroby są oznaką aktywności układu odpornościowego.",
    "image": "r04_wezly_chlonne.jpg"
  },
  {
    "id": "R04_LIM_06",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "multi_select",
    "prompt": "Zaznacz elementy tworzące system odpornościowy człowieka.",
    "options": [
      "Skóra i błony śluzowe",
      "Wydzielane substancje, np. pot i łzy",
      "Białe krwinki we krwi i limfie",
      "Elementy układu limfatycznego",
      "Szkliwo zębów jako jedyny mechanizm obronny",
      "Wyłącznie czerwone krwinki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "System odpornościowy obejmuje bariery fizyczne, wydzieliny, białe krwinki oraz elementy układu limfatycznego."
  },
  {
    "id": "R04_LIM_07",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "scenario",
    "prompt": "Lekarz podczas infekcji dotykiem bada szyję i okolice pod żuchwą. Czego przede wszystkim szuka?",
    "options": [
      "Powiększonych węzłów chłonnych",
      "Złamania kości udowej",
      "Zastawek serca",
      "Płytek krwi",
      "Pęcherzyków płucnych",
      "Erytrocytów pod skórą"
    ],
    "answer": 0,
    "explanation": "W czasie infekcji węzły chłonne mogą się powiększać, dlatego lekarz często bada okolice szyi i pod żuchwą.",
    "image": "r04_wezly_chlonne.jpg"
  },
  {
    "id": "R04_LIM_08",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest narządem limfatycznym: migdałki, grasica, śledziona, aorta.",
    "options": null,
    "answer": "aorta",
    "explanation": "Migdałki, grasica i śledziona są narządami limfatycznymi. Aorta jest dużą tętnicą układu krwionośnego."
  },
  {
    "id": "R04_LIM_09",
    "section": "Układ limfatyczny i odporność organizmu",
    "type": "single_choice",
    "prompt": "Jakie są główne zadania układu limfatycznego?",
    "options": [
      "Wspieranie odporności i utrzymanie równowagi płynów w organizmie",
      "Trawienie białek i tłuszczów",
      "Wytwarzanie moczu",
      "Wymiana gazowa w płucach",
      "Sterowanie ruchami szkieletu",
      "Produkcja żółci"
    ],
    "answer": 0,
    "explanation": "Układ limfatyczny wspiera odporność i pomaga utrzymać równowagę płynów w organizmie."
  },
  {
    "id": "R04_ODP_01",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "sort",
    "prompt": "Przyporządkuj mechanizmy do odporności wrodzonej lub nabytej.",
    "options": null,
    "items": [
      "skóra",
      "kwas żołądkowy",
      "makrofagi",
      "gorączka",
      "limfocyty B",
      "limfocyty T"
    ],
    "categories": [
      "odporność wrodzona",
      "odporność nabyta"
    ],
    "answer": {
      "odporność wrodzona": [
        "skóra",
        "kwas żołądkowy",
        "makrofagi",
        "gorączka"
      ],
      "odporność nabyta": [
        "limfocyty B",
        "limfocyty T"
      ]
    },
    "explanation": "Odporność wrodzona obejmuje bariery, wydzieliny, makrofagi i gorączkę. Odporność nabyta wykorzystuje m.in. limfocyty B i T."
  },
  {
    "id": "R04_ODP_02",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "single_choice",
    "prompt": "Jak nazywamy czynniki chorobotwórcze, do których należą m.in. bakterie, wirusy, pasożyty, grzyby i toksyny?",
    "options": [
      "Patogeny",
      "Hormony",
      "Enzymy",
      "Erytrocyty",
      "Trombocyty",
      "Antygeny grup krwi"
    ],
    "answer": 0,
    "explanation": "Czynniki chorobotwórcze nazywa się patogenami. Należą do nich m.in. bakterie, wirusy, pasożyty, grzyby i toksyny."
  },
  {
    "id": "R04_ODP_03",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "multi_select",
    "prompt": "Zaznacz mechanizmy odporności wrodzonej.",
    "options": [
      "Skóra",
      "Ślina",
      "Kwas żołądkowy",
      "Makrofagi",
      "Stan zapalny",
      "Limfocyty B jako wyspecjalizowana odpowiedź na konkretny patogen"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "explanation": "Do odporności wrodzonej należą bariery fizyczne, wydzieliny, makrofagi oraz mechanizmy takie jak stan zapalny i gorączka."
  },
  {
    "id": "R04_ODP_04",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "match",
    "prompt": "Połącz komórkę odpornościową z jej działaniem.",
    "options": null,
    "left": [
      "limfocyt B",
      "limfocyt T",
      "makrofag"
    ],
    "right": [
      "wytwarza przeciwciała oznaczające patogen",
      "rozpoznaje i niszczy konkretny patogen",
      "pochłania patogeny"
    ],
    "answer": {
      "limfocyt B": "wytwarza przeciwciała oznaczające patogen",
      "limfocyt T": "rozpoznaje i niszczy konkretny patogen",
      "makrofag": "pochłania patogeny"
    },
    "explanation": "Limfocyty B wytwarzają przeciwciała, limfocyty T rozpoznają i niszczą konkretne patogeny, a makrofagi je pochłaniają.",
    "image": "r04_odpornosc_komorki.jpg"
  },
  {
    "id": "R04_ODP_05",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "true_false",
    "prompt": "Przy kolejnym kontakcie z tym samym patogenem reakcja odporności nabytej jest szybsza niż przy pierwszym kontakcie.",
    "options": null,
    "answer": true,
    "explanation": "Odporność nabyta uczy się rozpoznawać patogen. Przy ponownym kontakcie reakcja obronna jest szybsza, a walka z patogenem krótsza."
  },
  {
    "id": "R04_ODP_06",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "fill_in",
    "prompt": "Szczepionki zwykle zawierają __________ albo ich __________, które organizm rozpoznaje jako obce.",
    "options": null,
    "answer": [
      "osłabione drobnoustroje",
      "fragmenty"
    ],
    "altAnswers": [
      [
        "osłabione drobnoustroje",
        "oslabione drobnoustroje"
      ],
      [
        "fragmenty",
        "fragmenty drobnoustrojów"
      ]
    ],
    "explanation": "Szczepionki umożliwiają nabycie odporności na konkretną chorobę. Zwykle zawierają osłabione drobnoustroje lub ich fragmenty rozpoznawane przez organizm jako obce.",
    "image": "r04_szczepienie.jpg"
  },
  {
    "id": "R04_ODP_07",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "sequence",
    "prompt": "Ułóż etapy działania szczepienia od pierwszego kontrolowanego kontaktu do szybszej reakcji przy późniejszym zakażeniu.",
    "options": null,
    "items": [
      "przy kolejnym kontakcie organizm reaguje szybciej",
      "organizm rozpoznaje materiał szczepionki jako obcy",
      "organizm zapamiętuje rozpoznanego intruza",
      "następuje kontrolowany kontakt z materiałem szczepionki",
      "powstają przeciwciała pomagające w zwalczaniu patogenu"
    ],
    "answer": [
      "następuje kontrolowany kontakt z materiałem szczepionki",
      "organizm rozpoznaje materiał szczepionki jako obcy",
      "organizm zapamiętuje rozpoznanego intruza",
      "powstają przeciwciała pomagające w zwalczaniu patogenu",
      "przy kolejnym kontakcie organizm reaguje szybciej"
    ],
    "explanation": "Szczepienie przypomina trening odporności: kontrolowany kontakt pozwala rozpoznać i zapamiętać zagrożenie oraz wytworzyć przeciwciała, dzięki czemu późniejsza reakcja jest szybsza."
  },
  {
    "id": "R04_ODP_08",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "scenario",
    "prompt": "W społeczeństwie większość osób jest zaszczepiona przeciw danej chorobie, więc patogen ma trudność z rozprzestrzenianiem się. Korzystają z tego także osoby, które z ważnych powodów nie mogą się zaszczepić. Jak nazywa się ten efekt?",
    "options": [
      "Odporność zbiorowa",
      "Krzepnięcie krwi",
      "Konflikt serologiczny",
      "Miażdżyca",
      "Transfuzja",
      "Nadciśnienie"
    ],
    "answer": 0,
    "explanation": "Odporność zbiorowa powstaje, gdy duża część społeczeństwa jest odporna, co ogranicza rozprzestrzenianie patogenu i pomaga chronić osoby, które nie mogą się zaszczepić.",
    "image": "r04_szczepienie.jpg"
  },
  {
    "id": "R04_ODP_09",
    "section": "Odporność wrodzona, nabyta i szczepienia",
    "type": "riddle",
    "prompt": "Odporność uzyskana po przejściu choroby albo wskutek szczepienia to odporność...",
    "options": null,
    "answer": "nabyta",
    "altAnswers": [
      "nabyta",
      "odporność nabyta"
    ],
    "explanation": "Odporność nabyta rozwija się w ciągu życia po kontakcie z patogenem lub wskutek szczepienia."
  },
  {
    "id": "R04_PROB_01",
    "section": "Problemy z odpornością",
    "type": "single_choice",
    "prompt": "Czym jest alergia?",
    "options": [
      "Przesadną reakcją organizmu na nieszkodliwe substancje",
      "Brakiem krwinek czerwonych po wysiłku",
      "Zawsze zakażeniem wirusowym",
      "Prawidłową reakcją na każdy patogen",
      "Rodzajem transfuzji",
      "Chorobą tętnic związaną z cholesterolem"
    ],
    "answer": 0,
    "explanation": "Alergia to nadwrażliwość układu odpornościowego, w której organizm reaguje zbyt silnie na nieszkodliwe substancje, nazywane alergenami."
  },
  {
    "id": "R04_PROB_02",
    "section": "Problemy z odpornością",
    "type": "multi_select",
    "prompt": "Zaznacz przykłady alergenów.",
    "options": [
      "Pyłki roślin",
      "Kurz",
      "Sierść zwierząt",
      "Niektóre pokarmy",
      "Woda jako taka",
      "Tlen w powietrzu jako taki"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Alergenami mogą być m.in. pyłki roślin, kurz, sierść zwierząt i niektóre pokarmy.",
    "image": "r04_alergia.jpg"
  },
  {
    "id": "R04_PROB_03",
    "section": "Problemy z odpornością",
    "type": "true_false",
    "prompt": "Wstrząs anafilaktyczny może powodować m.in. opuchliznę, duszność, gwałtowny spadek ciśnienia i utratę przytomności.",
    "options": null,
    "answer": true,
    "explanation": "Wstrząs anafilaktyczny jest gwałtowną reakcją alergiczną. Może prowadzić do opuchlizny, duszności, spadku ciśnienia, utraty przytomności, a nawet zatrzymania krążenia lub oddechu."
  },
  {
    "id": "R04_PROB_04",
    "section": "Problemy z odpornością",
    "type": "scenario",
    "prompt": "Po użądleniu owada u osoby szybko pojawiają się opuchlizna, duszność i gwałtowny spadek ciśnienia. Co jest najbardziej prawdopodobne?",
    "options": [
      "Wstrząs anafilaktyczny",
      "Morfologia krwi",
      "Fizjologiczny wzrost tętna po wysiłku",
      "Krzepnięcie małej rany",
      "Duży obieg krwi",
      "Prawidłowa reakcja na chłód"
    ],
    "answer": 0,
    "explanation": "Gwałtowna reakcja alergiczna z opuchlizną, dusznością i spadkiem ciśnienia odpowiada wstrząsowi anafilaktycznemu i wymaga natychmiastowej pomocy medycznej.",
    "image": "r04_alergia.jpg"
  },
  {
    "id": "R04_PROB_05",
    "section": "Problemy z odpornością",
    "type": "fill_in",
    "prompt": "Wirus __________ uszkadza białe krwinki i może wywołać chorobę __________, czyli zespół nabytego niedoboru odporności.",
    "options": null,
    "answer": [
      "HIV",
      "AIDS"
    ],
    "altAnswers": [
      [
        "HIV",
        "hiv"
      ],
      [
        "AIDS",
        "aids"
      ]
    ],
    "explanation": "HIV to wirus niedoboru odporności. Uszkadza białe krwinki i może doprowadzić do AIDS, czyli zespołu nabytego niedoboru odporności.",
    "image": "r04_hiv_laboratorium.jpg"
  },
  {
    "id": "R04_PROB_06",
    "section": "Problemy z odpornością",
    "type": "odd_one_out",
    "prompt": "Wskaż sposób, który nie jest drogą zakażenia HIV: kontakt z zakażoną krwią, kontakt seksualny z zakażoną osobą, zakażenie z matki na dziecko, przytulenie.",
    "options": null,
    "answer": "przytulenie",
    "explanation": "HIV może przenosić się m.in. przez zakażoną krew, kontakty seksualne i z matki na dziecko. Nie przenosi się przez dotyk ani przytulenie."
  },
  {
    "id": "R04_PROB_07",
    "section": "Problemy z odpornością",
    "type": "multi_select",
    "prompt": "Zaznacz płyny ustrojowe, przez które może przenosić się HIV.",
    "options": [
      "Krew",
      "Sperma",
      "Wydzielina z pochwy",
      "Mleko matki",
      "Pot",
      "Łzy"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "HIV może przenosić się przez krew, spermę, wydzielinę z pochwy i mleko matki.",
    "image": "r04_hiv_laboratorium.jpg"
  },
  {
    "id": "R04_PROB_08",
    "section": "Problemy z odpornością",
    "type": "match",
    "prompt": "Połącz rodzaj dawcy z przykładami tkanek lub narządów, które mogą od niego pochodzić.",
    "options": null,
    "left": [
      "dawca żyjący",
      "dawca zmarły"
    ],
    "right": [
      "szpik kostny lub nerka",
      "serce lub płuca"
    ],
    "answer": {
      "dawca żyjący": "szpik kostny lub nerka",
      "dawca zmarły": "serce lub płuca"
    },
    "explanation": "Od dawcy żyjącego mogą pochodzić np. szpik kostny lub nerka, a od dawcy zmarłego np. serce lub płuca.",
    "image": "r04_transplantacja.jpg"
  },
  {
    "id": "R04_PROB_09",
    "section": "Problemy z odpornością",
    "type": "single_choice",
    "prompt": "Dlaczego pacjent po przeszczepie może otrzymywać leki immunosupresyjne?",
    "options": [
      "Aby osłabić reakcję odpornościową i zmniejszyć ryzyko odrzucenia przeszczepu",
      "Aby zwiększyć ciśnienie krwi do bardzo wysokich wartości",
      "Aby przyspieszyć krzepnięcie każdej krwi",
      "Aby wytworzyć więcej erytrocytów z antygenem A",
      "Aby zastąpić transfuzję krwi",
      "Aby wywołać alergię"
    ],
    "answer": 0,
    "explanation": "Układ odpornościowy może uznać przeszczepiony narząd za obcy. Leki immunosupresyjne osłabiają tę reakcję, ale zwiększają podatność pacjenta na infekcje.",
    "image": "r04_transplantacja.jpg"
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaki zakres tętna w spoczynku jest prawidłowy dla zdrowego człowieka?",
    "options": [
      "60-90 skurczów na minutę",
      "10-20 skurczów na minutę",
      "30-40 skurczów na minutę",
      "100-130 skurczów na minutę",
      "140-170 skurczów na minutę",
      "200-240 skurczów na minutę"
    ],
    "answer": 0,
    "explanation": "Prawidłowe tętno spoczynkowe wynosi 60-90 skurczów serca na minutę."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile krwi ma w przybliżeniu dorosły człowiek?",
    "options": [
      "Około 5-6 litrów",
      "Około 0,5 litra",
      "Około 1 litra",
      "Około 12-15 litrów",
      "Około 25 litrów",
      "Około 50 litrów"
    ],
    "answer": 0,
    "explanation": "Dorosły człowiek ma około 5-6 litrów krwi."
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile waży w przybliżeniu serce człowieka?",
    "options": [
      "Około 300 g",
      "Około 30 g",
      "Około 3 g",
      "Około 1 kg",
      "Około 3 kg",
      "Około 10 kg"
    ],
    "answer": 0,
    "explanation": "Serce jest narządem wielkości pięści i waży około 300 gramów."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Jaką łączną długość mają w przybliżeniu naczynia krwionośne w ciele człowieka?",
    "options": [
      "Około 100 000 km",
      "Około 100 km",
      "Około 1 000 km",
      "Około 10 000 km",
      "Około 1 000 000 km",
      "Około 10 km"
    ],
    "answer": 0,
    "explanation": "Łączna długość naczyń krwionośnych w ciele człowieka wynosi około 100 000 km."
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Ile krwi na minutę może pompować każda komora serca podczas wysiłku?",
    "options": [
      "Do 25 litrów",
      "Do 2 litrów",
      "Do 5 litrów",
      "Do 10 litrów",
      "Do 60 litrów",
      "Do 100 litrów"
    ],
    "answer": 0,
    "explanation": "Każda komora serca pompuje około 5 litrów krwi na minutę w spoczynku i do 25 litrów na minutę w czasie wysiłku; u sportowców wartość może sięgać do 40 litrów na minutę."
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Krew stanowi około __________ procent masy ludzkiego ciała.",
    "options": null,
    "answer": [
      "10"
    ],
    "altAnswers": [
      [
        "10",
        "10%",
        "10 procent"
      ]
    ],
    "explanation": "Krew stanowi około 10% masy ludzkiego ciała."
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Krew może pokonać drogę z serca do palca stopy i z powrotem w około 20-30 sekund.",
    "options": null,
    "answer": true,
    "explanation": "Krew może pokonać drogę z serca do palca stopy i z powrotem w około 20-30 sekund."
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz składnik krwi z jego przybliżonym udziałem objętościowym.",
    "options": null,
    "left": [
      "osocze",
      "erytrocyty",
      "inne składniki, np. leukocyty i trombocyty"
    ],
    "right": [
      "około 55%",
      "około 44%",
      "około 1%"
    ],
    "answer": {
      "osocze": "około 55%",
      "erytrocyty": "około 44%",
      "inne składniki, np. leukocyty i trombocyty": "około 1%"
    },
    "explanation": "Osocze stanowi około 55% objętości krwi, erytrocyty około 44%, a pozostałe składniki około 1%."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Podstawowe kryteria dawcy krwi obejmują wiek od __________ do __________ lat i masę ciała co najmniej __________ kg.",
    "options": null,
    "answer": [
      "18",
      "65",
      "50"
    ],
    "altAnswers": [
      [
        "18"
      ],
      [
        "65"
      ],
      [
        "50",
        "50 kg"
      ]
    ],
    "explanation": "Krew lub jej składniki mogą oddawać osoby w wieku 18-65 lat, o masie co najmniej 50 kg i bez poważnych schorzeń."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Po przekroczeniu jakiego stopnia zwężenia naczyń mogą pojawić się objawy miażdżycy?",
    "options": [
      "70%",
      "10%",
      "20%",
      "30%",
      "50%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Początkowo miażdżyca może nie dawać objawów. Objawy mogą pojawić się, gdy zwężenie naczyń przekroczy 70%."
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Nadciśnienie tętnicze rozpoznaje się, gdy ciśnienie utrzymuje się na poziomie równym lub wyższym niż __________ mmHg.",
    "options": null,
    "answer": [
      "140/90"
    ],
    "altAnswers": [
      [
        "140/90",
        "140 na 90"
      ]
    ],
    "explanation": "Nadciśnienie tętnicze rozpoznaje się, gdy ciśnienie utrzymuje się na poziomie równym lub wyższym niż 140/90 mmHg.",
    "image": "r04_pomiar_cisnienia.jpg"
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż trzy podstawowe kroki poprawnego pomiaru ciśnienia we właściwej kolejności.",
    "options": null,
    "items": [
      "nie ruszaj się i nie rozmawiaj w trakcie pomiaru",
      "połóż rękę na wysokości serca",
      "usiądź wygodnie i odpocznij przez kilka minut"
    ],
    "answer": [
      "usiądź wygodnie i odpocznij przez kilka minut",
      "połóż rękę na wysokości serca",
      "nie ruszaj się i nie rozmawiaj w trakcie pomiaru"
    ],
    "explanation": "Najpierw należy odpocząć w pozycji siedzącej, następnie ułożyć rękę na wysokości serca, a podczas pomiaru nie ruszać się i nie rozmawiać.",
    "image": "r04_pomiar_cisnienia.jpg"
  },
  {
    "id": "R04_HARD_13",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "W którym roku odnotowano ostatni przypadek ospy prawdziwej?",
    "options": [
      "1978",
      "1918",
      "1945",
      "1960",
      "1989",
      "2001"
    ],
    "answer": 0,
    "explanation": "Ostatni przypadek ospy prawdziwej odnotowano w 1978 roku."
  },
  {
    "id": "R04_HARD_14",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Przed wyeliminowaniem ospy prawdziwej zarażał się nią prawie każdy, a około co trzeci chory umierał.",
    "options": null,
    "answer": true,
    "explanation": "Przed wyeliminowaniem ospy prawdziwej zarażał się nią prawie każdy, a około co trzeci chory umierał."
  },
  {
    "id": "R04_HARD_15",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj sytuacje związane z HIV do kategorii: zakażenie możliwe lub zakażenie tą drogą nie zachodzi.",
    "options": null,
    "items": [
      "kontakt z zakażoną krwią",
      "kontakt seksualny z zakażoną osobą",
      "przeniesienie z matki na dziecko",
      "dotyk i przytulenie",
      "zwykłe kontakty",
      "wspólne naczynia i przybory"
    ],
    "categories": [
      "zakażenie możliwe",
      "zakażenie tą drogą nie zachodzi"
    ],
    "answer": {
      "zakażenie możliwe": [
        "kontakt z zakażoną krwią",
        "kontakt seksualny z zakażoną osobą",
        "przeniesienie z matki na dziecko"
      ],
      "zakażenie tą drogą nie zachodzi": [
        "dotyk i przytulenie",
        "zwykłe kontakty",
        "wspólne naczynia i przybory"
      ]
    },
    "explanation": "HIV może przenosić się przez zakażoną krew, kontakty seksualne oraz z matki na dziecko. Nie przenosi się przez dotyk, zwykłe kontakty ani wspólne naczynia czy przybory."
  },
  {
    "id": "R04_HARD_16",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Lekarze mówią, że dawca i biorca są potocznie \"genetycznymi bliźniakami\". Co to oznacza w kontekście przeszczepu?",
    "options": [
      "Mają tak podobną strukturę białek oznaczających komórki, że układ odpornościowy biorcy ma mniejsze ryzyko uznania przeszczepu za obcy",
      "Muszą być biologicznymi bliźniętami jednojajowymi",
      "Mają zawsze identyczną grupę krwi 0 Rh- i nic więcej nie ma znaczenia",
      "Ich serca biją w identycznym tempie",
      "Oboje przeszli te same szczepienia w tym samym dniu",
      "Mają identyczną masę ciała"
    ],
    "answer": 0,
    "explanation": "Potoczne określenie \"genetyczny bliźniak\" dotyczy zgodności tkankowej: podobnej struktury białek oznaczających komórki dawcy i biorcy, co zmniejsza ryzyko odrzucenia przeszczepu.",
    "image": "r04_transplantacja.jpg"
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r04",
  number: 4,
  title: "Układ krwionośny i układ odpornościowy",
  icon: "❤️",
  sectionOrder: [
    "Serce i naczynia krwionośne",
    "Krew, grupy krwi i krwiodawstwo",
    "Profilaktyka i choroby układu krwionośnego",
    "Układ limfatyczny i odporność organizmu",
    "Odporność wrodzona, nabyta i szczepienia",
    "Problemy z odpornością"
  ],
  sectionIcons: {
    "Serce i naczynia krwionośne": "❤️",
    "Krew, grupy krwi i krwiodawstwo": "🩸",
    "Profilaktyka i choroby układu krwionośnego": "🩺",
    "Układ limfatyczny i odporność organizmu": "🧬",
    "Odporność wrodzona, nabyta i szczepienia": "🛡️",
    "Problemy z odpornością": "⚕️"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
