// Skróty sekcji (do identyfikatorów ćwiczeń):
//   SKL  = Składniki pokarmowe: białka, cukry i tłuszcze
//   WIT  = Sole mineralne, witaminy i woda
//   BUD  = Budowa układu pokarmowego
//   TRA  = Trawienie pokarmu
//   HIG  = Choroby i higiena układu pokarmowego
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R03_SKL_01",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "single_choice",
    "prompt": "Do jakich cząsteczek muszą zostać rozłożone białka z pożywienia, aby organizm mógł wykorzystać je do budowy własnych białek?",
    "options": [
      "aminokwasów",
      "cukrów prostych",
      "glicerolu",
      "kwasów tłuszczowych",
      "soli mineralnych",
      "witaminy C"
    ],
    "answer": 0,
    "explanation": "Białka z pożywienia są trawione do pojedynczych cząsteczek - aminokwasów. Dopiero aminokwasy mogą być wykorzystane do budowy własnych białek organizmu.",
    "image": "r03_zrodla_bialek.jpg"
  },
  {
    "id": "R03_SKL_02",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "multi_select",
    "prompt": "Zaznacz roślinne źródła białka.",
    "options": [
      "groch",
      "soja",
      "soczewica",
      "fasola",
      "mleko",
      "jajka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Do roślinnych źródeł białka należą m.in. groch, soja, soczewica, fasola i kasza gryczana. Mleko i jajka są źródłami zwierzęcymi."
  },
  {
    "id": "R03_SKL_03",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "true_false",
    "prompt": "Cukry proste, takie jak glukoza, mogą zostać wchłonięte bezpośrednio z jelita do krwi.",
    "options": null,
    "answer": true,
    "explanation": "Cukry proste mają budowę umożliwiającą ich wchłanianie. Cukry złożone muszą wcześniej zostać rozbite na mniejsze cząsteczki."
  },
  {
    "id": "R03_SKL_04",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "fill_in",
    "prompt": "Tłuszcze są zbudowane z __________ i __________.",
    "options": null,
    "answer": [
      "glicerolu",
      "kwasów tłuszczowych"
    ],
    "altAnswers": [
      [
        "glicerolu",
        "glicerol"
      ],
      [
        "kwasów tłuszczowych",
        "kwasy tłuszczowe"
      ]
    ],
    "explanation": "Tłuszcze powstają z połączenia glicerolu i kwasów tłuszczowych.",
    "image": "r03_zrodla_tluszczow.jpg"
  },
  {
    "id": "R03_SKL_05",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "riddle",
    "prompt": "Jestem cukrem złożonym magazynowanym przez rośliny, na przykład w bulwach ziemniaka. Co to za związek?",
    "options": null,
    "answer": "skrobia",
    "altAnswers": [
      "skrobia"
    ],
    "explanation": "Skrobia jest cukrem złożonym pełniącym u roślin funkcję zapasową, m.in. w bulwach ziemniaka."
  },
  {
    "id": "R03_SKL_06",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "odd_one_out",
    "prompt": "Wskaż produkt, który nie pasuje do pozostałych jako roślinne źródło białka: groch, soja, soczewica, oliwa.",
    "options": null,
    "answer": "oliwa",
    "explanation": "Groch, soja i soczewica są roślinnymi źródłami białka. Oliwa jest źródłem tłuszczów."
  },
  {
    "id": "R03_SKL_07",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "scenario",
    "prompt": "Uczeń chce wskazać produkt będący źródłem cukrów. Który z poniższych produktów pasuje do tej grupy?",
    "options": [
      "pieczywo",
      "masło",
      "ryba",
      "jajka",
      "ser żółty",
      "mięso"
    ],
    "answer": 0,
    "explanation": "Pieczywo jest źródłem cukrów. Pozostałe produkty są przede wszystkim źródłami tłuszczów lub białek."
  },
  {
    "id": "R03_SKL_08",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "match",
    "prompt": "Połącz składnik pokarmowy z charakterystyczną funkcją.",
    "options": null,
    "left": [
      "białka",
      "cukry",
      "tłuszcze"
    ],
    "right": [
      "główna funkcja budulcowa",
      "główne źródło energii",
      "materiał zapasowy i ochrona przed utratą ciepła"
    ],
    "answer": {
      "białka": "główna funkcja budulcowa",
      "cukry": "główne źródło energii",
      "tłuszcze": "materiał zapasowy i ochrona przed utratą ciepła"
    },
    "explanation": "Białka pełnią głównie funkcję budulcową, cukry są głównym źródłem energii, a tłuszcze są wysokoenergetycznym materiałem zapasowym i pomagają chronić przed utratą ciepła.",
    "image": "r03_skladniki_pokarmowe.jpg"
  },
  {
    "id": "R03_SKL_09",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "sort",
    "prompt": "Przyporządkuj źródła tłuszczów do pochodzenia roślinnego lub zwierzęcego.",
    "options": null,
    "items": [
      "awokado",
      "oliwa",
      "nasiona słonecznika",
      "orzechy i migdały",
      "masło",
      "ryby",
      "ser żółty",
      "jajka"
    ],
    "categories": [
      "roślinne",
      "zwierzęce"
    ],
    "answer": {
      "roślinne": [
        "awokado",
        "oliwa",
        "nasiona słonecznika",
        "orzechy i migdały"
      ],
      "zwierzęce": [
        "masło",
        "ryby",
        "ser żółty",
        "jajka"
      ]
    },
    "explanation": "Do roślinnych źródeł tłuszczów należą m.in. awokado, oliwa, nasiona słonecznika oraz orzechy i migdały. Do zwierzęcych należą m.in. masło, ryby, ser żółty i jajka."
  },
  {
    "id": "R03_SKL_10",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "sequence",
    "prompt": "Ułóż etapy badania obecności skrobi w kolejności zgodnej z doświadczeniem.",
    "options": null,
    "items": [
      "Dodać płyn Lugola do badanych produktów",
      "Przygotować próbę kontrolną z mąki ziemniaczanej i wody",
      "Porównać zabarwienie próby kontrolnej z próbami badawczymi",
      "Rozłożyć badane produkty na osobnych naczyniach"
    ],
    "answer": [
      "Rozłożyć badane produkty na osobnych naczyniach",
      "Przygotować próbę kontrolną z mąki ziemniaczanej i wody",
      "Dodać płyn Lugola do badanych produktów",
      "Porównać zabarwienie próby kontrolnej z próbami badawczymi"
    ],
    "explanation": "W doświadczeniu produkty umieszcza się osobno, przygotowuje próbę kontrolną ze skrobią, dodaje płyn Lugola do próbek, a następnie porównuje ich zabarwienie."
  },
  {
    "id": "R03_SKL_11",
    "section": "Składniki pokarmowe: białka, cukry i tłuszcze",
    "type": "single_choice",
    "prompt": "Jaką rolę pełni błonnik pokarmowy w przewodzie pokarmowym?",
    "options": [
      "ułatwia przesuwanie pokarmu przez jelita",
      "jest trawiony do aminokwasów",
      "magazynuje żółć",
      "uaktywnia pepsynę",
      "buduje szkliwo zębów",
      "wytwarza witaminę D"
    ],
    "answer": 0,
    "explanation": "Błonnik zawiera m.in. celulozę, której człowiek nie trawi. Ułatwia przesuwanie pokarmu przez jelita i pomaga zapobiegać zaleganiu niestrawionych resztek."
  },
  {
    "id": "R03_WIT_01",
    "section": "Sole mineralne, witaminy i woda",
    "type": "single_choice",
    "prompt": "Który składnik mineralny jest mikroelementem?",
    "options": [
      "żelazo",
      "wapń",
      "magnez",
      "woda",
      "witamina A",
      "witamina C"
    ],
    "answer": 0,
    "explanation": "Żelazo jest mikroelementem, czyli pierwiastkiem występującym w organizmie w małej ilości. Wapń i magnez są makroelementami."
  },
  {
    "id": "R03_WIT_02",
    "section": "Sole mineralne, witaminy i woda",
    "type": "multi_select",
    "prompt": "Zaznacz witaminy rozpuszczalne w tłuszczach.",
    "options": [
      "A",
      "D",
      "E",
      "K",
      "C",
      "B12"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Witaminy A, D, E i K są rozpuszczalne w tłuszczach. Witamina C oraz witaminy z grupy B są rozpuszczalne w wodzie.",
    "image": "r03_witaminy_produkty.jpg"
  },
  {
    "id": "R03_WIT_03",
    "section": "Sole mineralne, witaminy i woda",
    "type": "true_false",
    "prompt": "Nadmiar witamin rozpuszczalnych w wodzie jest zwykle usuwany z moczem, dlatego rzadko dochodzi do ich przedawkowania.",
    "options": null,
    "answer": true,
    "explanation": "Nadmiar witamin rozpuszczalnych w wodzie jest usuwany z moczem. Inaczej jest z witaminami rozpuszczalnymi w tłuszczach, które mogą odkładać się w organizmie."
  },
  {
    "id": "R03_WIT_04",
    "section": "Sole mineralne, witaminy i woda",
    "type": "fill_in",
    "prompt": "Dobowe zapotrzebowanie organizmu na wodę wynosi około __________ litra, co odpowiada mniej więcej __________ szklankom wody.",
    "options": null,
    "answer": [
      "1,5",
      "6"
    ],
    "altAnswers": [
      [
        "1,5",
        "1.5",
        "1,5 litra"
      ],
      [
        "6",
        "sześciu",
        "6 szklankom"
      ]
    ],
    "explanation": "Dobowe zapotrzebowanie na wodę wynosi około 1,5 litra. Aby je zaspokoić, należy wypić około 6 szklanek wody."
  },
  {
    "id": "R03_WIT_05",
    "section": "Sole mineralne, witaminy i woda",
    "type": "riddle",
    "prompt": "Mój niedobór może powodować kurzą ślepotę i choroby skóry, a ja wspomagam prawidłowe widzenie. Jaką jestem witaminą?",
    "options": null,
    "answer": "witamina A",
    "altAnswers": [
      "witamina A",
      "A"
    ],
    "explanation": "Witamina A odpowiada m.in. za zdrową skórę i wspomaga prawidłowe widzenie. Jej niedobór może prowadzić do kurzej ślepoty."
  },
  {
    "id": "R03_WIT_06",
    "section": "Sole mineralne, witaminy i woda",
    "type": "odd_one_out",
    "prompt": "Wskaż produkt, który nie pasuje do pozostałych jako źródło witaminy C: nać pietruszki, porzeczki, kiszona kapusta, tran.",
    "options": null,
    "answer": "tran",
    "explanation": "Nać pietruszki, porzeczki i kiszona kapusta są źródłami witaminy C. Tran jest źródłem witaminy D."
  },
  {
    "id": "R03_WIT_07",
    "section": "Sole mineralne, witaminy i woda",
    "type": "scenario",
    "prompt": "U osoby występują skurcze mięśni, zaburzenia pracy serca i bóle głowy. Niedoboru którego składnika mineralnego mogą dotyczyć te objawy?",
    "options": [
      "magnezu",
      "żelaza",
      "wapnia",
      "witaminy C",
      "witaminy K",
      "wody"
    ],
    "answer": 0,
    "explanation": "Skurcze mięśni, zaburzenia pracy serca i bóle głowy mogą być skutkami niedoboru magnezu."
  },
  {
    "id": "R03_WIT_08",
    "section": "Sole mineralne, witaminy i woda",
    "type": "match",
    "prompt": "Połącz witaminę rozpuszczalną w tłuszczach z jej funkcją.",
    "options": null,
    "left": [
      "witamina A",
      "witamina D",
      "witamina K",
      "witamina E"
    ],
    "right": [
      "wspomaga prawidłowe widzenie",
      "odpowiada za prawidłową budowę kości i zębów",
      "odpowiada za prawidłowe krzepnięcie krwi",
      "wpływa na pracę mięśni i płodność oraz jest przeciwutleniaczem"
    ],
    "answer": {
      "witamina A": "wspomaga prawidłowe widzenie",
      "witamina D": "odpowiada za prawidłową budowę kości i zębów",
      "witamina K": "odpowiada za prawidłowe krzepnięcie krwi",
      "witamina E": "wpływa na pracę mięśni i płodność oraz jest przeciwutleniaczem"
    },
    "explanation": "Witaminy A, D, K i E pełnią różne funkcje: A wspomaga widzenie, D budowę kości i zębów, K krzepnięcie krwi, a E pracę mięśni i płodność oraz działa jako przeciwutleniacz."
  },
  {
    "id": "R03_WIT_09",
    "section": "Sole mineralne, witaminy i woda",
    "type": "sort",
    "prompt": "Przyporządkuj witaminy do grup według rozpuszczalności.",
    "options": null,
    "items": [
      "A",
      "D",
      "E",
      "K",
      "C",
      "B6",
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
        "B12"
      ]
    },
    "explanation": "W tłuszczach rozpuszczają się witaminy A, D, E i K, natomiast w wodzie witamina C oraz witaminy z grupy B, m.in. B6 i B12."
  },
  {
    "id": "R03_WIT_10",
    "section": "Sole mineralne, witaminy i woda",
    "type": "sequence",
    "prompt": "Ułóż etapy życia od największego do najmniejszego procentowego udziału wody w ciele.",
    "options": null,
    "items": [
      "osoba dorosła",
      "płód",
      "osoba starsza",
      "dziecko",
      "niemowlę"
    ],
    "answer": [
      "płód",
      "niemowlę",
      "dziecko",
      "osoba dorosła",
      "osoba starsza"
    ],
    "explanation": "Udział wody w ciele maleje z wiekiem: około 90% u płodu, 80% u niemowlęcia, 70% u dziecka, 65% u osoby dorosłej i 55% u osoby starszej.",
    "image": "r03_woda_wiek.jpg"
  },
  {
    "id": "R03_WIT_11",
    "section": "Sole mineralne, witaminy i woda",
    "type": "single_choice",
    "prompt": "Co warto dodać do sałatki z marchewki, papryki, brokułu lub pomidora, aby witaminy rozpuszczalne w tłuszczach zostały lepiej przyswojone?",
    "options": [
      "olej lub oliwę",
      "wodę",
      "cukier",
      "sól kuchenną",
      "mąkę ziemniaczaną",
      "sok żołądkowy"
    ],
    "answer": 0,
    "explanation": "Skropienie warzyw olejem lub oliwą ułatwia wchłanianie zawartych w nich witamin rozpuszczalnych w tłuszczach."
  },
  {
    "id": "R03_BUD_01",
    "section": "Budowa układu pokarmowego",
    "type": "single_choice",
    "prompt": "Który odcinek rozpoczyna przewód pokarmowy?",
    "options": [
      "jama ustna",
      "gardło",
      "przełyk",
      "żołądek",
      "jelito cienkie",
      "jelito grube"
    ],
    "answer": 0,
    "explanation": "Przewód pokarmowy rozpoczyna się w jamie ustnej, gdzie pokarm jest rozdrabniany, nawilżany i rozpoczyna się wstępne trawienie cukrów.",
    "image": "r03_uklad_pokarmowy.jpg"
  },
  {
    "id": "R03_BUD_02",
    "section": "Budowa układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz gruczoły trawienne.",
    "options": [
      "ślinianki",
      "wątroba",
      "trzustka",
      "przełyk",
      "jelito grube",
      "odbyt"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Do gruczołów trawiennych należą ślinianki, wątroba i trzustka. Pozostałe elementy są odcinkami przewodu pokarmowego."
  },
  {
    "id": "R03_BUD_03",
    "section": "Budowa układu pokarmowego",
    "type": "true_false",
    "prompt": "Gardło jest wspólnym odcinkiem układu pokarmowego i układu oddechowego.",
    "options": null,
    "answer": true,
    "explanation": "Zwilżony pokarm z jamy ustnej przechodzi przez gardło, które jest wspólnym odcinkiem układu pokarmowego i oddechowego."
  },
  {
    "id": "R03_BUD_04",
    "section": "Budowa układu pokarmowego",
    "type": "fill_in",
    "prompt": "U człowieka występuje __________ zębów mlecznych i __________ zęby stałe.",
    "options": null,
    "answer": [
      "20",
      "32"
    ],
    "altAnswers": [
      [
        "20",
        "dwadzieścia"
      ],
      [
        "32",
        "trzydzieści dwa"
      ]
    ],
    "explanation": "Zębów mlecznych jest 20, a zębów stałych 32. Zęby mleczne są później zastępowane zębami stałymi.",
    "image": "r03_budowa_zeba.jpg"
  },
  {
    "id": "R03_BUD_05",
    "section": "Budowa układu pokarmowego",
    "type": "riddle",
    "prompt": "Jestem najszerszym odcinkiem przewodu pokarmowego i okresowym zbiornikiem pokarmu. Co to za narząd?",
    "options": null,
    "answer": "żołądek",
    "altAnswers": [
      "żołądek",
      "zoladek"
    ],
    "explanation": "Żołądek jest najszerszym odcinkiem przewodu pokarmowego i pełni funkcję okresowego zbiornika pokarmu.",
    "image": "r03_zoladek.jpg"
  },
  {
    "id": "R03_BUD_06",
    "section": "Budowa układu pokarmowego",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest odcinkiem przewodu pokarmowego: jama ustna, przełyk, żołądek, wątroba.",
    "options": null,
    "answer": "wątroba",
    "explanation": "Jama ustna, przełyk i żołądek są odcinkami przewodu pokarmowego. Wątroba jest gruczołem trawiennym."
  },
  {
    "id": "R03_BUD_07",
    "section": "Budowa układu pokarmowego",
    "type": "scenario",
    "prompt": "Po połknięciu kęs pokarmu przesuwa się do żołądka dzięki niezależnym od woli skurczom mięśni gładkich ściany pewnego odcinka przewodu pokarmowego. O jaki odcinek chodzi?",
    "options": [
      "przełyk",
      "gardło",
      "jama ustna",
      "jelito grube",
      "odbyt",
      "wątroba"
    ],
    "answer": 0,
    "explanation": "Ściany przełyku zawierają mięśnie gładkie, których skurcze niezależne od woli przesuwają kęsy pożywienia w kierunku żołądka."
  },
  {
    "id": "R03_BUD_08",
    "section": "Budowa układu pokarmowego",
    "type": "match",
    "prompt": "Połącz odcinek przewodu pokarmowego z charakterystyczną funkcją.",
    "options": null,
    "left": [
      "jama ustna",
      "przełyk",
      "żołądek",
      "jelito grube"
    ],
    "right": [
      "rozdrabnianie i wstępne trawienie cukrów",
      "przesuwanie pokarmu do żołądka",
      "trawienie białek",
      "wchłanianie wody i tworzenie mas kałowych"
    ],
    "answer": {
      "jama ustna": "rozdrabnianie i wstępne trawienie cukrów",
      "przełyk": "przesuwanie pokarmu do żołądka",
      "żołądek": "trawienie białek",
      "jelito grube": "wchłanianie wody i tworzenie mas kałowych"
    },
    "explanation": "Jama ustna rozdrabnia pokarm i rozpoczyna trawienie cukrów, przełyk transportuje pokarm do żołądka, żołądek jest miejscem trawienia białek, a jelito grube wchłania wodę i uczestniczy w tworzeniu mas kałowych."
  },
  {
    "id": "R03_BUD_09",
    "section": "Budowa układu pokarmowego",
    "type": "sort",
    "prompt": "Przyporządkuj elementy do przewodu pokarmowego albo do gruczołów trawiennych.",
    "options": null,
    "items": [
      "jama ustna",
      "gardło",
      "przełyk",
      "żołądek",
      "jelito cienkie",
      "jelito grube",
      "ślinianki",
      "wątroba",
      "trzustka"
    ],
    "categories": [
      "przewód pokarmowy",
      "gruczoły trawienne"
    ],
    "answer": {
      "przewód pokarmowy": [
        "jama ustna",
        "gardło",
        "przełyk",
        "żołądek",
        "jelito cienkie",
        "jelito grube"
      ],
      "gruczoły trawienne": [
        "ślinianki",
        "wątroba",
        "trzustka"
      ]
    },
    "explanation": "Przewód pokarmowy tworzą kolejne odcinki, m.in. jama ustna, gardło, przełyk, żołądek i jelita. Gruczołami trawiennymi są ślinianki, wątroba i trzustka."
  },
  {
    "id": "R03_BUD_10",
    "section": "Budowa układu pokarmowego",
    "type": "sequence",
    "prompt": "Ułóż odcinki przewodu pokarmowego w kolejności, w jakiej przechodzi przez nie pokarm.",
    "options": null,
    "items": [
      "jelito cienkie",
      "przełyk",
      "jama ustna",
      "jelito grube",
      "żołądek",
      "gardło"
    ],
    "answer": [
      "jama ustna",
      "gardło",
      "przełyk",
      "żołądek",
      "jelito cienkie",
      "jelito grube"
    ],
    "explanation": "Pokarm przechodzi kolejno przez jamę ustną, gardło, przełyk, żołądek, jelito cienkie i jelito grube.",
    "image": "r03_uklad_pokarmowy.jpg"
  },
  {
    "id": "R03_BUD_11",
    "section": "Budowa układu pokarmowego",
    "type": "single_choice",
    "prompt": "Co zwiększa powierzchnię wchłaniania w jelicie cienkim?",
    "options": [
      "pofałdowanie błony śluzowej i kosmki jelitowe",
      "szkliwo i zębina",
      "kwas solny i śluz",
      "pęcherzyk żółciowy",
      "kubki smakowe",
      "mięśnie przełyku"
    ],
    "answer": 0,
    "explanation": "Błona śluzowa jelita cienkiego jest pofałdowana i pokryta kosmkami jelitowymi, co zwiększa powierzchnię wchłaniania.",
    "image": "r03_kosmki_jelitowe.jpg"
  },
  {
    "id": "R03_TRA_01",
    "section": "Trawienie pokarmu",
    "type": "single_choice",
    "prompt": "W którym miejscu rozpoczyna się trawienie cukrów złożonych, np. skrobi?",
    "options": [
      "w jamie ustnej",
      "w żołądku",
      "w jelicie grubym",
      "w odbycie",
      "w przełyku",
      "w pęcherzyku żółciowym"
    ],
    "answer": 0,
    "explanation": "W jamie ustnej ślina zawiera enzymy rozkładające cukry złożone, np. skrobię, na mniejsze cząsteczki."
  },
  {
    "id": "R03_TRA_02",
    "section": "Trawienie pokarmu",
    "type": "multi_select",
    "prompt": "Zaznacz końcowe produkty trawienia białek, cukrów i tłuszczów.",
    "options": [
      "aminokwasy",
      "cukry proste",
      "glicerol",
      "kwasy tłuszczowe",
      "skrobia",
      "długie łańcuchy białkowe"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Białka są rozkładane do aminokwasów, cukry do cukrów prostych, a tłuszcze do glicerolu i kwasów tłuszczowych."
  },
  {
    "id": "R03_TRA_03",
    "section": "Trawienie pokarmu",
    "type": "true_false",
    "prompt": "Żółć jest enzymem trawiennym rozkładającym tłuszcze do glicerolu i kwasów tłuszczowych.",
    "options": null,
    "answer": false,
    "explanation": "Żółć nie jest enzymem. Rozbija duże krople tłuszczu na mniejsze w procesie emulgacji, ułatwiając późniejsze działanie enzymu trzustkowego."
  },
  {
    "id": "R03_TRA_04",
    "section": "Trawienie pokarmu",
    "type": "fill_in",
    "prompt": "Końcowym produktem trawienia białek są __________, a tłuszczów - __________ i __________.",
    "options": null,
    "answer": [
      "aminokwasy",
      "glicerol",
      "kwasy tłuszczowe"
    ],
    "altAnswers": [
      [
        "aminokwasy"
      ],
      [
        "glicerol"
      ],
      [
        "kwasy tłuszczowe"
      ]
    ],
    "explanation": "Białka są rozkładane do aminokwasów, a tłuszcze do glicerolu i kwasów tłuszczowych."
  },
  {
    "id": "R03_TRA_05",
    "section": "Trawienie pokarmu",
    "type": "riddle",
    "prompt": "Jak nazywa się proces rozbijania dużych kropel tłuszczu na mniejsze, który poprzedza ich trawienie?",
    "options": null,
    "answer": "emulgacja",
    "altAnswers": [
      "emulgacja"
    ],
    "explanation": "Emulgacja to rozbijanie dużych kropel tłuszczu na małe krople. Proces zachodzi dzięki żółci w dwunastnicy."
  },
  {
    "id": "R03_TRA_06",
    "section": "Trawienie pokarmu",
    "type": "odd_one_out",
    "prompt": "Wskaż element, który nie jest enzymem trawiennym: amylaza, pepsyna, trypsyna, żółć.",
    "options": null,
    "answer": "żółć",
    "explanation": "Amylaza, pepsyna i trypsyna są enzymami trawiennymi. Żółć pełni rolę emulgatora tłuszczów, ale nie jest enzymem."
  },
  {
    "id": "R03_TRA_07",
    "section": "Trawienie pokarmu",
    "type": "scenario",
    "prompt": "Gdyby ślina nie zawierała enzymów trawiennych, który proces zachodzący w jamie ustnej zostałby zaburzony?",
    "options": [
      "wstępne trawienie cukrów złożonych",
      "trawienie białek do aminokwasów",
      "emulgacja tłuszczów",
      "wchłanianie wody",
      "tworzenie mas kałowych",
      "magazynowanie żółci"
    ],
    "answer": 0,
    "explanation": "Enzymy śliny rozpoczynają trawienie cukrów złożonych, takich jak skrobia, już w jamie ustnej."
  },
  {
    "id": "R03_TRA_08",
    "section": "Trawienie pokarmu",
    "type": "match",
    "prompt": "Połącz enzym z jego działaniem.",
    "options": null,
    "left": [
      "amylaza ze śliny",
      "pepsyna",
      "trypsyna",
      "lipaza"
    ],
    "right": [
      "rozkład cukrów złożonych na mniejsze cząsteczki",
      "rozkład długich łańcuchów białkowych na krótsze",
      "rozkład krótkich łańcuchów białkowych do aminokwasów",
      "trawienie tłuszczów po emulgacji"
    ],
    "answer": {
      "amylaza ze śliny": "rozkład cukrów złożonych na mniejsze cząsteczki",
      "pepsyna": "rozkład długich łańcuchów białkowych na krótsze",
      "trypsyna": "rozkład krótkich łańcuchów białkowych do aminokwasów",
      "lipaza": "trawienie tłuszczów po emulgacji"
    },
    "explanation": "Amylaza ślinowa działa na cukry złożone, pepsyna na białka w żołądku, trypsyna rozkłada krótsze łańcuchy białkowe w dwunastnicy, a lipaza trawi tłuszcze."
  },
  {
    "id": "R03_TRA_09",
    "section": "Trawienie pokarmu",
    "type": "sort",
    "prompt": "Przyporządkuj proces trawienny do miejsca, w którym zachodzi.",
    "options": null,
    "items": [
      "wstępne trawienie cukrów złożonych",
      "rozkład długich łańcuchów białkowych na krótsze",
      "emulgacja tłuszczów",
      "dalsze trawienie dwucukrów",
      "rozkład krótkich łańcuchów białkowych do aminokwasów"
    ],
    "categories": [
      "jama ustna",
      "żołądek",
      "dwunastnica"
    ],
    "answer": {
      "jama ustna": [
        "wstępne trawienie cukrów złożonych"
      ],
      "żołądek": [
        "rozkład długich łańcuchów białkowych na krótsze"
      ],
      "dwunastnica": [
        "emulgacja tłuszczów",
        "dalsze trawienie dwucukrów",
        "rozkład krótkich łańcuchów białkowych do aminokwasów"
      ]
    },
    "explanation": "W jamie ustnej zaczyna się trawienie cukrów, w żołądku białek, a w dwunastnicy zachodzą m.in. emulgacja tłuszczów oraz dalsze trawienie cukrów i białek.",
    "image": "r03_dwunastnica.jpg"
  },
  {
    "id": "R03_TRA_10",
    "section": "Trawienie pokarmu",
    "type": "sequence",
    "prompt": "Ułóż kolejne etapy trawienia białek.",
    "options": null,
    "items": [
      "krótkie łańcuchy białkowe",
      "aminokwasy",
      "działanie pepsyny w żołądku",
      "długi łańcuch białkowy",
      "działanie trypsyny w dwunastnicy"
    ],
    "answer": [
      "długi łańcuch białkowy",
      "działanie pepsyny w żołądku",
      "krótkie łańcuchy białkowe",
      "działanie trypsyny w dwunastnicy",
      "aminokwasy"
    ],
    "explanation": "Pepsyna w żołądku rozcina długie łańcuchy białkowe na krótsze, a trypsyna w dwunastnicy rozkłada je do aminokwasów."
  },
  {
    "id": "R03_TRA_11",
    "section": "Trawienie pokarmu",
    "type": "single_choice",
    "prompt": "Dlaczego tylko związki o prostej budowie mogą zostać wchłonięte do krwi i limfy przez kosmki jelita cienkiego?",
    "options": [
      "zbyt duże cząsteczki nie mogą przejść przez ścianę jelita cienkiego",
      "duże cząsteczki są zawsze usuwane z moczem",
      "kosmki jelitowe występują tylko w żołądku",
      "ślina niszczy wszystkie duże cząsteczki",
      "żółć zamienia wszystkie składniki w wodę",
      "jelito grube wchłania wszystkie składniki odżywcze"
    ],
    "answer": 0,
    "explanation": "Zbyt duże cząsteczki nie mogą przejść przez ścianę jelita cienkiego. Dlatego trawienie rozkłada złożone składniki na mniejsze cząsteczki możliwe do wchłonięcia.",
    "image": "r03_kosmki_jelitowe.jpg"
  },
  {
    "id": "R03_HIG_01",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "single_choice",
    "prompt": "Która grupa produktów powinna zajmować szczególnie dużą część codziennej diety, przy czym należy jeść więcej warzyw niż owoców?",
    "options": [
      "warzywa i owoce",
      "słodycze",
      "czerwone mięso",
      "napoje słodzone",
      "żywność typu fast food",
      "sól kuchenna"
    ],
    "answer": 0,
    "explanation": "Talerz zdrowego żywienia podkreśla duży udział warzyw i owoców, z przewagą warzyw."
  },
  {
    "id": "R03_HIG_02",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "multi_select",
    "prompt": "Zaznacz produkty lub składniki, których spożycie należy ograniczać.",
    "options": [
      "sól kuchenna",
      "mięso czerwone",
      "cukier i słodzone napoje",
      "żywność typu fast food",
      "warzywa",
      "owoce"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Należy ograniczać sól kuchenną, czerwone mięso, cukier i słodzone napoje oraz żywność typu fast food.",
    "image": "r03_talerz_zdrowego_zywienia.jpg"
  },
  {
    "id": "R03_HIG_03",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "true_false",
    "prompt": "U osoby dorosłej wartość BMI w przedziale 18,5-24,99 oznacza masę ciała w normie.",
    "options": null,
    "answer": true,
    "explanation": "U osoby dorosłej wartość BMI od 18,5 do 24,99 odpowiada masie ciała w normie."
  },
  {
    "id": "R03_HIG_04",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "fill_in",
    "prompt": "Na codzienną aktywność fizyczną należy poświęcić co najmniej __________ minut, a w ciągu dnia zaleca się jeść __________ posiłków.",
    "options": null,
    "answer": [
      "30",
      "5"
    ],
    "altAnswers": [
      [
        "30",
        "trzydzieści"
      ],
      [
        "5",
        "pięć"
      ]
    ],
    "explanation": "Zalecenia wskazują co najmniej 30 minut aktywności fizycznej dziennie oraz pięć posiłków każdego dnia.",
    "image": "r03_aktywnosc_fizyczna.jpg"
  },
  {
    "id": "R03_HIG_05",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "riddle",
    "prompt": "Mogę rozwinąć się po zjedzeniu surowego mięsa zawierającego larwy pasożyta. Jak nazywa się ta choroba?",
    "options": null,
    "answer": "tasiemczyca",
    "altAnswers": [
      "tasiemczyca"
    ],
    "explanation": "Tasiemczycą można zarazić się po zjedzeniu surowego mięsa zawierającego larwy tasiemca."
  },
  {
    "id": "R03_HIG_06",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "odd_one_out",
    "prompt": "Wskaż zachowanie, które nie należy do zasad higieny żywności: mycie rąk przed posiłkiem, mycie owoców i warzyw, sprawdzanie terminu ważności, ponowne zamrażanie rozmrożonej żywności.",
    "options": null,
    "answer": "ponowne zamrażanie rozmrożonej żywności",
    "explanation": "Rozmrożonej żywności nie należy ponownie zamrażać, ponieważ zmienia ona swoją strukturę i może nie nadawać się do spożycia."
  },
  {
    "id": "R03_HIG_07",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "scenario",
    "prompt": "Dziecko zjadło nieumyte warzywo, na którego powierzchni znajdowały się jaja pasożyta. Która choroba może rozwinąć się w takiej sytuacji?",
    "options": [
      "glistnica",
      "tasiemczyca",
      "próchnica",
      "choroba wrzodowa",
      "otyłość",
      "anoreksja"
    ],
    "answer": 0,
    "explanation": "Glistnicą można zarazić się po zjedzeniu nieumytych owoców lub warzyw, na których znajdują się jaja glisty ludzkiej.",
    "image": "r03_higiena_zywnosci.jpg"
  },
  {
    "id": "R03_HIG_08",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "match",
    "prompt": "Połącz chorobę z przykładowym sposobem profilaktyki.",
    "options": null,
    "left": [
      "próchnica",
      "WZW typu A",
      "WZW typu B i C",
      "tasiemczyca"
    ],
    "right": [
      "ograniczenie cukru i regularne mycie zębów",
      "mycie żywności w czystej wodzie",
      "unikanie kontaktu z zakażoną krwią i przypadkowych kontaktów seksualnych",
      "spożywanie mięsa po obróbce termicznej"
    ],
    "answer": {
      "próchnica": "ograniczenie cukru i regularne mycie zębów",
      "WZW typu A": "mycie żywności w czystej wodzie",
      "WZW typu B i C": "unikanie kontaktu z zakażoną krwią i przypadkowych kontaktów seksualnych",
      "tasiemczyca": "spożywanie mięsa po obróbce termicznej"
    },
    "explanation": "Profilaktyka zależy od drogi zakażenia lub przyczyny choroby: próchnicy zapobiega higiena zębów i ograniczanie cukru, WZW A - czysta żywność i woda, WZW B i C - unikanie kontaktu z zakażoną krwią i przypadkowych kontaktów seksualnych, a tasiemczycy - obróbka termiczna mięsa."
  },
  {
    "id": "R03_HIG_09",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "sort",
    "prompt": "Przyporządkuj cechy do większego lub mniejszego zapotrzebowania energetycznego.",
    "options": null,
    "items": [
      "mężczyzna",
      "kobieta",
      "dziecko",
      "senior",
      "osoba aktywna fizycznie",
      "osoba nieaktywna fizycznie",
      "praca fizyczna",
      "praca siedząca"
    ],
    "categories": [
      "większe zapotrzebowanie",
      "mniejsze zapotrzebowanie"
    ],
    "answer": {
      "większe zapotrzebowanie": [
        "mężczyzna",
        "dziecko",
        "osoba aktywna fizycznie",
        "praca fizyczna"
      ],
      "mniejsze zapotrzebowanie": [
        "kobieta",
        "senior",
        "osoba nieaktywna fizycznie",
        "praca siedząca"
      ]
    },
    "explanation": "Na zapotrzebowanie energetyczne wpływają m.in. płeć, wiek, aktywność fizyczna i rodzaj pracy. Większe zapotrzebowanie dotyczy mężczyzny, dziecka, osoby aktywnej fizycznie i pracy fizycznej."
  },
  {
    "id": "R03_HIG_10",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "sequence",
    "prompt": "Ułóż kategorie masy ciała według BMI od najniższych do najwyższych wartości.",
    "options": null,
    "items": [
      "otyłość",
      "masa ciała w normie",
      "nadwaga",
      "niedowaga"
    ],
    "answer": [
      "niedowaga",
      "masa ciała w normie",
      "nadwaga",
      "otyłość"
    ],
    "explanation": "BMI poniżej 18,5 wskazuje niedowagę, 18,5-24,99 masę w normie, 25-29,99 nadwagę, a wartość powyżej 30 - otyłość."
  },
  {
    "id": "R03_HIG_11",
    "section": "Choroby i higiena układu pokarmowego",
    "type": "single_choice",
    "prompt": "Z jaką chorobą wiąże się mała ilość błonnika, zaleganie resztek pokarmowych i możliwość powstawania mutacji komórek jelita grubego?",
    "options": [
      "rakiem jelita grubego",
      "próchnicą",
      "glistnicą",
      "tasiemczycą",
      "WZW typu A",
      "chorobą wrzodową żołądka"
    ],
    "answer": 0,
    "explanation": "Mała ilość błonnika może sprzyjać zaleganiu resztek pokarmowych i wiązać się ze zwiększonym ryzykiem raka jelita grubego."
  },
  {
    "id": "R03_HARD_01",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz funkcję białek z przykładem jej realizacji w organizmie.",
    "options": null,
    "left": [
      "enzymatyczna",
      "regulatorowa",
      "obronna",
      "transportowa"
    ],
    "right": [
      "enzymy przyspieszają reakcje chemiczne",
      "hormony regulują pracę organizmu",
      "przeciwciała działają w układzie odpornościowym",
      "hemoglobina wchodzi w skład krwinek czerwonych"
    ],
    "answer": {
      "enzymatyczna": "enzymy przyspieszają reakcje chemiczne",
      "regulatorowa": "hormony regulują pracę organizmu",
      "obronna": "przeciwciała działają w układzie odpornościowym",
      "transportowa": "hemoglobina wchodzi w skład krwinek czerwonych"
    },
    "explanation": "Białka pełnią wiele funkcji: enzymatyczną, regulatorową, obronną i transportową. Przykładami są odpowiednio enzymy, hormony, przeciwciała i hemoglobina.",
    "image": "r03_zrodla_bialek.jpg"
  },
  {
    "id": "R03_HARD_02",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz prawdziwe informacje o cukrach złożonych.",
    "options": [
      "skrobia jest materiałem zapasowym roślin",
      "glikogen jest magazynowany m.in. w wątrobie człowieka",
      "celuloza buduje ścianę komórkową roślin",
      "chityna buduje m.in. ścianę komórkową grzybów",
      "glukoza jest cukrem złożonym",
      "celuloza jest rozkładana przez układ pokarmowy człowieka"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Skrobia jest zapasowym cukrem roślin, glikogen zapasowym cukrem zwierząt, celuloza buduje ściany komórkowe roślin, a chityna m.in. ściany komórkowe grzybów. Glukoza jest cukrem prostym, a celuloza nie jest trawiona przez człowieka."
  },
  {
    "id": "R03_HARD_03",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "W doświadczeniu uczeń chce sprawdzić obecność skrobi w bananie, ziemniaku, chlebie i szynce. Która próba powinna pełnić funkcję kontrolną?",
    "options": [
      "mąka ziemniaczana zmieszana z wodą i płynem Lugola",
      "szynka z wodą",
      "banan z wodą",
      "chleb bez odczynnika",
      "ziemniak bez płynu Lugola",
      "sama woda bez skrobi"
    ],
    "answer": 0,
    "explanation": "W doświadczeniu próbą kontrolną jest mąka ziemniaczana zmieszana z wodą, do której dodaje się płyn Lugola. Mąka ziemniaczana zawiera skrobię."
  },
  {
    "id": "R03_HARD_04",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Z którą witaminą magnez jest lepiej przyswajany przez organizm?",
    "options": [
      "B6",
      "A",
      "D",
      "K",
      "C",
      "E"
    ],
    "answer": 0,
    "explanation": "Magnez jest lepiej przyswajany, gdy dostarczany jest wraz z witaminą B6."
  },
  {
    "id": "R03_HARD_05",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz objawy odwodnienia.",
    "options": [
      "suchość w ustach",
      "poczucie pragnienia",
      "zmęczenie",
      "zawroty głowy",
      "ciemny mocz",
      "bóle głowy"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "explanation": "Do objawów odwodnienia należą suchość w ustach, pragnienie, zmęczenie, zawroty głowy, ciemny mocz i bóle głowy."
  },
  {
    "id": "R03_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz etap życia z przybliżonym udziałem wody w masie ciała.",
    "options": null,
    "left": [
      "płód",
      "niemowlę",
      "dziecko",
      "osoba dorosła",
      "osoba starsza"
    ],
    "right": [
      "90%",
      "80%",
      "70%",
      "65%",
      "55%"
    ],
    "answer": {
      "płód": "90%",
      "niemowlę": "80%",
      "dziecko": "70%",
      "osoba dorosła": "65%",
      "osoba starsza": "55%"
    },
    "explanation": "Udział wody w masie ciała maleje z wiekiem: od około 90% u płodu do około 55% u osoby starszej.",
    "image": "r03_woda_wiek.jpg"
  },
  {
    "id": "R03_HARD_07",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Którego rodzaju zębów nie ma w uzębieniu mlecznym?",
    "options": [
      "zębów przedtrzonowych",
      "siekaczy",
      "kłów",
      "zębów trzonowych",
      "zębów stałych",
      "szkliwa"
    ],
    "answer": 0,
    "explanation": "Uzębienie mleczne nie zawiera zębów przedtrzonowych ani ostatnich zębów trzonowych. Zębów mlecznych jest 20.",
    "image": "r03_budowa_zeba.jpg"
  },
  {
    "id": "R03_HARD_08",
    "section": "Super trudne",
    "type": "riddle",
    "prompt": "Jestem bakterią zdolną przetrwać w kwaśnym środowisku żołądka i mogę odpowiadać za powstawanie wrzodów. Jak się nazywam?",
    "options": null,
    "answer": "Helicobacter pylori",
    "altAnswers": [
      "Helicobacter pylori",
      "helicobacter pylori"
    ],
    "explanation": "Helicobacter pylori potrafi przetrwać w kwaśnym środowisku żołądka i może odpowiadać za powstawanie wrzodów żołądka.",
    "image": "r03_zoladek.jpg"
  },
  {
    "id": "R03_HARD_09",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Od czego pochodzi nazwa dwunastnicy?",
    "options": [
      "od długości odpowiadającej około 12 szerokościom palców",
      "od 12 rodzajów enzymów",
      "od 12 litrów soku trzustkowego",
      "od 12 warstw ściany jelita",
      "od 12 kosmków jelitowych",
      "od 12 zębów trzonowych"
    ],
    "answer": 0,
    "explanation": "Nazwa dwunastnicy pochodzi od jej długości, odpowiadającej około 12 szerokościom palców.",
    "image": "r03_dwunastnica.jpg"
  },
  {
    "id": "R03_HARD_10",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Zaznacz funkcje wątroby.",
    "options": [
      "wytwarza żółć",
      "magazynuje cukier w postaci glikogenu",
      "uczestniczy w neutralizacji toksyn",
      "magazynuje żółć",
      "wytwarza ślinę",
      "przesuwa pokarm do żołądka"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Wątroba wytwarza żółć, magazynuje cukier w postaci glikogenu i uczestniczy w neutralizacji toksyn. Żółć jest czasowo magazynowana w pęcherzyku żółciowym."
  },
  {
    "id": "R03_HARD_11",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Jelito cienkie osiąga około __________ metrów długości, a jelito grube około __________ metra.",
    "options": null,
    "answer": [
      "4-6",
      "1,5"
    ],
    "altAnswers": [
      [
        "4-6",
        "4–6",
        "4 do 6"
      ],
      [
        "1,5",
        "1.5"
      ]
    ],
    "explanation": "Jelito cienkie osiąga około 4-6 metrów długości, natomiast jelito grube ma około 1,5 metra."
  },
  {
    "id": "R03_HARD_12",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz enzym trzustkowy z produktem końcowym trawienia danego składnika.",
    "options": null,
    "left": [
      "amylaza",
      "trypsyna",
      "lipaza"
    ],
    "right": [
      "cukry proste",
      "aminokwasy",
      "glicerol i kwasy tłuszczowe"
    ],
    "answer": {
      "amylaza": "cukry proste",
      "trypsyna": "aminokwasy",
      "lipaza": "glicerol i kwasy tłuszczowe"
    },
    "explanation": "Amylaza trzustkowa prowadzi do powstawania cukrów prostych, trypsyna do aminokwasów, a lipaza do glicerolu i kwasów tłuszczowych."
  },
  {
    "id": "R03_HARD_13",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Żywność została umyta w wodzie zanieczyszczonej wydalinami. Którego typu wirusowego zapalenia wątroby dotyczy opisana droga zakażenia?",
    "options": [
      "WZW typu A",
      "WZW typu B",
      "WZW typu C",
      "próchnicy",
      "glistnicy",
      "tasiemczycy"
    ],
    "answer": 0,
    "explanation": "WZW typu A może szerzyć się przez żywność umytą w wodzie zanieczyszczonej wydalinami. Typy B i C wiążą się m.in. z kontaktem z zakażoną krwią, a także kontaktami seksualnymi.",
    "image": "r03_higiena_zywnosci.jpg"
  },
  {
    "id": "R03_HARD_14",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Który skutek może wystąpić przy nadmiarze witaminy D odkładanej w organizmie?",
    "options": [
      "bóle głowy i nudności",
      "kurza ślepota",
      "szkorbut",
      "krzywica",
      "anemia",
      "zaburzenia krzepnięcia krwi"
    ],
    "answer": 0,
    "explanation": "Nadmiar witaminy D może powodować m.in. bóle głowy i nudności. Witamina D należy do witamin rozpuszczalnych w tłuszczach, których nadmiar może odkładać się w organizmie."
  },
  {
    "id": "R03_HARD_15",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Przyporządkuj skutki do nadmiernej albo zbyt małej masy ciała.",
    "options": null,
    "items": [
      "większe ryzyko nabytej cukrzycy",
      "większe ryzyko chorób sercowo-naczyniowych",
      "niedobory witamin",
      "apatia",
      "brak energii"
    ],
    "categories": [
      "nadwaga lub otyłość",
      "niedowaga"
    ],
    "answer": {
      "nadwaga lub otyłość": [
        "większe ryzyko nabytej cukrzycy",
        "większe ryzyko chorób sercowo-naczyniowych"
      ],
      "niedowaga": [
        "niedobory witamin",
        "apatia",
        "brak energii"
      ]
    },
    "explanation": "Osoby z nadwagą lub otyłością są częściej narażone na nabytą cukrzycę i choroby sercowo-naczyniowe. Niedowaga może wiązać się z niedoborami witamin, apatią i brakiem energii."
  }
];

const KID_PROMPTS = {};

const chapter = {
  id: "r03",
  number: 3,
  title: "Układ pokarmowy",
  icon: "🍽️",
  sectionOrder: [
    "Składniki pokarmowe: białka, cukry i tłuszcze",
    "Sole mineralne, witaminy i woda",
    "Budowa układu pokarmowego",
    "Trawienie pokarmu",
    "Choroby i higiena układu pokarmowego"
  ],
  sectionIcons: {
    "Składniki pokarmowe: białka, cukry i tłuszcze": "🥗",
    "Sole mineralne, witaminy i woda": "💧",
    "Budowa układu pokarmowego": "🫀",
    "Trawienie pokarmu": "🧪",
    "Choroby i higiena układu pokarmowego": "🪥"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
