// Skróty sekcji (do identyfikatorów ćwiczeń):
//   POK = Ekosystem i zależności pokarmowe
//   KON = Konkurencja i pasożytnictwo
//   DRA = Roślinożerność i drapieżnictwo
//   NIE = Oddziaływania nieantagonistyczne
//   HARD = Super trudne

const ALL_EXERCISES = [
  {
    "id": "R04_POK_01",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "single_choice",
    "prompt": "Która para obejmuje wyłącznie nieożywione składniki ekosystemu?",
    "options": [
      "woda i światło",
      "trawa i żaba",
      "grzyb i gleba",
      "konik łąkowy i woda",
      "bakteria i światło",
      "mysz i roślina"
    ],
    "answer": 0,
    "explanation": "Woda i światło należą do części nieożywionej; rośliny, grzyby i zwierzęta są częścią żywą.",
    "image": "r04_laka_rosliny_owady.jpg"
  },
  {
    "id": "R04_POK_02",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "multi_select",
    "prompt": "Które z podanych organizmów mogą pełnić rolę producentów?",
    "options": [
      "trawa",
      "mysz leśna",
      "sinica",
      "grzyb rozkładający szczątki",
      "euglena",
      "żaba trawna"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Rośliny oraz niektóre bakterie, np. sinice, i protisty roślinopodobne przeprowadzają fotosyntezę."
  },
  {
    "id": "R04_POK_03",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "true_false",
    "prompt": "Strzałka w łańcuchu pokarmowym biegnie od organizmu zjadającego do zjadanego.",
    "options": null,
    "answer": false,
    "explanation": "Strzałka biegnie od zjadanego organizmu do organizmu, który go zjada."
  },
  {
    "id": "R04_POK_04",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "sequence",
    "prompt": "Ułóż ogniwa łańcucha spasania od producenta do ostatniego konsumenta.",
    "options": null,
    "answer": [
      "kostrzewa łąkowa",
      "konik łąkowy",
      "żaba trawna",
      "zaskroniec zwyczajny"
    ],
    "explanation": "Roślina jest producentem, konik zjada roślinę, żaba może zjeść konika, a zaskroniec zjada żabę.",
    "items": [
      "żaba trawna",
      "kostrzewa łąkowa",
      "zaskroniec zwyczajny",
      "konik łąkowy"
    ],
    "image": "r04_laka_rosliny_owady.jpg"
  },
  {
    "id": "R04_POK_05",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "sort",
    "prompt": "Podziel składniki ekosystemu według ich roli.",
    "options": null,
    "answer": {
      "producenci": [
        "trawa",
        "sinice"
      ],
      "konsumenci": [
        "konik łąkowy",
        "żaba trawna"
      ],
      "destruenci": [
        "bakterie rozkładające szczątki",
        "grzyby rozkładające szczątki"
      ]
    },
    "explanation": "Organizmy fotosyntetyzujące tworzą materię organiczną, zwierzęta pobierają pokarm, a destruenci rozkładają szczątki.",
    "items": [
      "żaba trawna",
      "trawa",
      "grzyby rozkładające szczątki",
      "konik łąkowy",
      "sinice",
      "bakterie rozkładające szczątki"
    ],
    "categories": [
      "producenci",
      "konsumenci",
      "destruenci"
    ],
    "image": "r04_grzyby_na_szczatkach.jpg"
  },
  {
    "id": "R04_POK_06",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "fill_in",
    "prompt": "Energia __________ przez ekosystem, a materia w nim __________.",
    "options": null,
    "answer": [
      "przepływa",
      "krąży"
    ],
    "explanation": "Energia jest stopniowo rozpraszana, natomiast materia zmienia postać i powraca do obiegu.",
    "altAnswers": [
      [
        "przepływa",
        "przechodzi"
      ],
      [
        "krąży",
        "obieguje"
      ]
    ]
  },
  {
    "id": "R04_POK_07",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "scenario",
    "prompt": "Na łące żaba zjada konika łąkowego, który żywił się trawą. Jaki poziom konsumenta zajmuje w tym łańcuchu żaba?",
    "options": [
      "producent",
      "konsument II rzędu",
      "konsument I rzędu",
      "destruent",
      "konsument III rzędu",
      "składnik nieożywiony"
    ],
    "answer": 1,
    "explanation": "Konik jest konsumentem I rzędu, więc żaba zjadająca konika jest konsumentem II rzędu.",
    "image": "r04_laka_rosliny_owady.jpg"
  },
  {
    "id": "R04_POK_08",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "match",
    "prompt": "Połącz proces z jego rolą w ekosystemie.",
    "options": null,
    "answer": {
      "fotosynteza producentów": "wytwarzanie związków organicznych",
      "zjadanie roślin przez roślinożerców": "przekazywanie pokarmu konsumentom I rzędu",
      "rozkład szczątków przez destruentów": "uwalnianie prostych składników mineralnych"
    },
    "explanation": "Producenci wytwarzają pokarm, konsumenci go pobierają, a destruenci rozkładają martwą materię.",
    "left": [
      "rozkład szczątków przez destruentów",
      "fotosynteza producentów",
      "zjadanie roślin przez roślinożerców"
    ],
    "right": [
      "przekazywanie pokarmu konsumentom I rzędu",
      "uwalnianie prostych składników mineralnych",
      "wytwarzanie związków organicznych"
    ]
  },
  {
    "id": "R04_POK_09",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "riddle",
    "prompt": "Jak nazywa się miejsce organizmu w łańcuchu lub sieci pokarmowej?",
    "options": null,
    "answer": "poziom troficzny",
    "explanation": "Poziom troficzny wskazuje sposób pozyskiwania pokarmu przez organizm.",
    "altAnswers": [
      "poziom troficzny",
      "poziomu troficznego"
    ]
  },
  {
    "id": "R04_POK_10",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "odd_one_out",
    "prompt": "Wskaż organizm o innej roli niż pozostałe: trawa, sinica, euglena, żaba trawna.",
    "options": null,
    "answer": "żaba trawna",
    "explanation": "Żaba jest konsumentem; trawa, sinica i euglena mogą być producentami."
  },
  {
    "id": "R04_POK_11",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "single_choice",
    "prompt": "Co tworzy sieć pokarmową w ekosystemie?",
    "options": [
      "jedno ogniwo łańcucha",
      "wyłącznie producenci",
      "sama część nieożywiona",
      "krzyżujące się łańcuchy pokarmowe",
      "same destruenty",
      "wyłącznie organizmy tego samego gatunku"
    ],
    "answer": 3,
    "explanation": "Krzyżujące się łańcuchy pokarmowe pokazują różne powiązania żywieniowe."
  },
  {
    "id": "R04_POK_12",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "true_false",
    "prompt": "Na kolejnych poziomach troficznych ilość dostępnej energii zwykle maleje.",
    "options": null,
    "answer": true,
    "explanation": "Organizmy zużywają energię na czynności życiowe, a część rozprasza się jako ciepło."
  },
  {
    "id": "R04_POK_13",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "multi_select",
    "prompt": "Które stwierdzenia o destruentach i obiegu materii są poprawne?",
    "options": [
      "Destruenci wytwarzają światło słoneczne.",
      "Niektóre bakterie i grzyby są destruentami.",
      "Materia w ekosystemie jest całkowicie tracona.",
      "Destruenci rozkładają martwe szczątki.",
      "Proste składniki mineralne mogą zostać wykorzystane przez rośliny."
    ],
    "answer": [
      1,
      3,
      4
    ],
    "explanation": "Destruenci rozkładają szczątki do składników, które mogą zostać wykorzystane przez producentów.",
    "image": "r04_grzyby_na_szczatkach.jpg"
  },
  {
    "id": "R04_POK_14",
    "section": "Ekosystem i zależności pokarmowe",
    "type": "sequence",
    "prompt": "Ułóż etapy obiegu materii od pobrania składników przez roślinę.",
    "options": null,
    "answer": [
      "pobranie składników mineralnych przez roślinę",
      "wytworzenie materii organicznej przez producenta",
      "zjedzenie rośliny przez konsumenta",
      "rozkład szczątków przez destruentów"
    ],
    "explanation": "Roślina tworzy materię organiczną, przekazuje ją konsumentom, a destruenci przywracają składniki mineralne.",
    "items": [
      "zjedzenie rośliny przez konsumenta",
      "rozkład szczątków przez destruentów",
      "pobranie składników mineralnych przez roślinę",
      "wytworzenie materii organicznej przez producenta"
    ]
  },
  {
    "id": "R04_KON_01",
    "section": "Konkurencja i pasożytnictwo",
    "type": "single_choice",
    "prompt": "Kiedy dochodzi do konkurencji między organizmami?",
    "options": [
      "gdy jeden rozkłada szczątki drugiego",
      "gdy zasobów jest zawsze pod dostatkiem",
      "gdy rywalizują o ograniczony zasób",
      "gdy oba gatunki nie mają wspólnych potrzeb",
      "gdy jeden zapyla roślinę",
      "gdy żaden organizm nie korzysta z zasobów"
    ],
    "answer": 2,
    "explanation": "Konkurencja zachodzi przy podobnych wymaganiach i ograniczonej ilości wspólnych zasobów.",
    "image": "r04_zyto_i_chaber.jpg"
  },
  {
    "id": "R04_KON_02",
    "section": "Konkurencja i pasożytnictwo",
    "type": "scenario",
    "prompt": "Dwa tulipany tego samego gatunku rosną gęsto obok siebie i rywalizują o światło oraz wodę. Jaki rodzaj konkurencji zachodzi?",
    "options": [
      "wewnątrzgatunkowa",
      "międzygatunkowa",
      "komensalizm",
      "pasożytnictwo",
      "mutualizm fakultatywny",
      "drapieżnictwo"
    ],
    "answer": 0,
    "explanation": "Osobniki należą do tego samego gatunku, więc jest to konkurencja wewnątrzgatunkowa."
  },
  {
    "id": "R04_KON_03",
    "section": "Konkurencja i pasożytnictwo",
    "type": "true_false",
    "prompt": "Żyto i chaber rywalizujące o wodę na polu to przykład konkurencji międzygatunkowej.",
    "options": null,
    "answer": true,
    "explanation": "Żyto i chaber należą do różnych gatunków i mogą potrzebować tych samych zasobów.",
    "image": "r04_zyto_i_chaber.jpg"
  },
  {
    "id": "R04_KON_04",
    "section": "Konkurencja i pasożytnictwo",
    "type": "multi_select",
    "prompt": "Które zasoby mogą być przedmiotem konkurencji między zwierzętami?",
    "options": [
      "pokarm",
      "woda",
      "wytworzone przez siebie sole mineralne",
      "schronienie",
      "partner do rozrodu"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Zwierzęta mogą rywalizować o pokarm, wodę, schronienie i dostęp do partnera."
  },
  {
    "id": "R04_KON_05",
    "section": "Konkurencja i pasożytnictwo",
    "type": "sort",
    "prompt": "Przyporządkuj zdarzenia do rodzaju konkurencji.",
    "options": null,
    "answer": {
      "wewnątrzgatunkowa": [
        "dwa jelenie walczące o samicę",
        "dwa tulipany tego samego gatunku rywalizujące o światło"
      ],
      "międzygatunkowa": [
        "żyto i chaber rywalizujące o wodę",
        "dwa różne gatunki ptaków rywalizujące o miejsce na gniazdo"
      ]
    },
    "explanation": "Kryterium podziału jest przynależność rywalizujących organizmów do jednego albo różnych gatunków.",
    "items": [
      "żyto i chaber rywalizujące o wodę",
      "dwa jelenie walczące o samicę",
      "dwa różne gatunki ptaków rywalizujące o miejsce na gniazdo",
      "dwa tulipany tego samego gatunku rywalizujące o światło"
    ],
    "categories": [
      "wewnątrzgatunkowa",
      "międzygatunkowa"
    ],
    "image": "r04_jelenie_rykowisko.jpg"
  },
  {
    "id": "R04_KON_06",
    "section": "Konkurencja i pasożytnictwo",
    "type": "fill_in",
    "prompt": "Organizm odnoszący korzyści w pasożytnictwie to __________, a organizm ponoszący straty to __________.",
    "options": null,
    "answer": [
      "pasożyt",
      "żywiciel"
    ],
    "explanation": "Pasożyt pobiera zasoby od żywiciela, a żywiciel ponosi straty.",
    "altAnswers": [
      [
        "pasożyt",
        "pasozyt"
      ],
      [
        "żywiciel",
        "zywiciel"
      ]
    ]
  },
  {
    "id": "R04_KON_07",
    "section": "Konkurencja i pasożytnictwo",
    "type": "single_choice",
    "prompt": "Który organizm jest pasożytem wewnętrznym?",
    "options": [
      "kleszcz",
      "wesz",
      "pijawka",
      "komar",
      "tasiemiec",
      "pchła"
    ],
    "answer": 4,
    "explanation": "Tasiemiec żyje wewnątrz organizmu żywiciela, natomiast kleszcz, wesz, pijawka, komar i pchła przebywają na powierzchni ciała lub pobierają pokarm z zewnątrz.",
    "image": "r04_tasiemiec_budowa.jpg"
  },
  {
    "id": "R04_KON_08",
    "section": "Konkurencja i pasożytnictwo",
    "type": "match",
    "prompt": "Połącz pasożyta z miejscem jego bytowania.",
    "options": null,
    "answer": {
      "kleszcz": "powierzchnia ciała żywiciela",
      "tasiemiec": "wnętrze przewodu pokarmowego żywiciela",
      "kanianka": "łodyga i tkanki rośliny żywicielskiej"
    },
    "explanation": "Kleszcz jest pasożytem zewnętrznym, tasiemiec wewnętrznym, a kanianka pobiera substancje z rośliny.",
    "left": [
      "kanianka",
      "kleszcz",
      "tasiemiec"
    ],
    "right": [
      "wnętrze przewodu pokarmowego żywiciela",
      "łodyga i tkanki rośliny żywicielskiej",
      "powierzchnia ciała żywiciela"
    ],
    "image": "r04_kleszcz_na_skorze.jpg"
  },
  {
    "id": "R04_KON_09",
    "section": "Konkurencja i pasożytnictwo",
    "type": "riddle",
    "prompt": "Jak nazywa się relacja, w której organizm pobiera substancje od żywiciela i go osłabia?",
    "options": null,
    "answer": "pasożytnictwo",
    "explanation": "W pasożytnictwie pasożyt korzysta, a żywiciel ponosi straty.",
    "altAnswers": [
      "pasożytnictwo",
      "pasozytnictwo"
    ]
  },
  {
    "id": "R04_KON_10",
    "section": "Konkurencja i pasożytnictwo",
    "type": "odd_one_out",
    "prompt": "Wskaż pasożyta żyjącego w innym miejscu niż pozostałe: kleszcz, pijawka, wesz, owsik.",
    "options": null,
    "answer": "owsik",
    "explanation": "Owsik żyje wewnątrz ciała żywiciela, a pozostałe przebywają na jego powierzchni."
  },
  {
    "id": "R04_KON_11",
    "section": "Konkurencja i pasożytnictwo",
    "type": "multi_select",
    "prompt": "Które cechy mogą pomagać pasożytom wewnętrznym przeżyć w ciele żywiciela?",
    "options": [
      "ochronna powłoka odporna na enzymy trawienne",
      "bardzo rozbudowany wzrok",
      "aparat czepny",
      "oddychanie beztlenowe",
      "silne skrzydła do lotu",
      "wytwarzanie wielu jaj"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Powłoka ochronna, aparat czepny, oddychanie beztlenowe i wytwarzanie licznych jaj ułatwiają pasożytom wewnętrznym życie w organizmie żywiciela.",
    "image": "r04_tasiemiec_budowa.jpg"
  },
  {
    "id": "R04_KON_12",
    "section": "Konkurencja i pasożytnictwo",
    "type": "true_false",
    "prompt": "Pasożyt zwykle dąży do szybkiej śmierci żywiciela, bo wtedy zyskuje trwałe źródło pokarmu.",
    "options": null,
    "answer": false,
    "explanation": "Śmierć żywiciela pozbawia pasożyta źródła pokarmu i miejsca życia."
  },
  {
    "id": "R04_KON_13",
    "section": "Konkurencja i pasożytnictwo",
    "type": "scenario",
    "prompt": "Na polu jeden z dwóch gatunków roślin zostaje wyparty z zajmowanego miejsca po długiej rywalizacji o wodę i światło. Jaka relacja doprowadziła do wyparcia?",
    "options": [
      "komensalizm",
      "konkurencja międzygatunkowa",
      "mutualizm obligatoryjny",
      "roślinożerność",
      "pasożytnictwo",
      "drapieżnictwo"
    ],
    "answer": 1,
    "explanation": "Wyparcie słabszego gatunku może być skutkiem konkurencji międzygatunkowej.",
    "image": "r04_zyto_i_chaber.jpg"
  },
  {
    "id": "R04_KON_14",
    "section": "Konkurencja i pasożytnictwo",
    "type": "multi_select",
    "prompt": "Które skutki może wywołać konkurencja wewnątrzgatunkowa?",
    "options": [
      "podział przestrzeni na terytoria",
      "powstanie dwóch różnych gatunków natychmiast",
      "ustalenie hierarchii w stadzie",
      "migracja części osobników",
      "całkowity brak strat u rywalizujących"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "explanation": "Rywalizacja osobników jednego gatunku może prowadzić do podziału terytoriów, hierarchii i migracji.",
    "image": "r04_jelenie_rykowisko.jpg"
  },
  {
    "id": "R04_DRA_01",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "single_choice",
    "prompt": "Jaką rolę troficzną pełni zwierzę odżywiające się głównie roślinami?",
    "options": [
      "konsument I rzędu",
      "destruent",
      "producent",
      "konsument III rzędu",
      "nieożywiony składnik",
      "konsument II rzędu"
    ],
    "answer": 0,
    "explanation": "Roślinożerca zjada producentów, więc jest konsumentem I rzędu.",
    "image": "r04_przezuwacz_na_lace.jpg"
  },
  {
    "id": "R04_DRA_02",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "match",
    "prompt": "Połącz przystosowanie roślinożercy z jego funkcją.",
    "options": null,
    "answer": {
      "szerokie zęby trzonowe": "rozcieranie twardego pokarmu roślinnego",
      "długi przewód pokarmowy": "efektywniejsze trawienie i wchłanianie",
      "mikroorganizmy w żołądku przeżuwacza": "pomoc w rozkładzie celulozy"
    },
    "explanation": "Zęby rozcierają pokarm, długi przewód pomaga w jego wykorzystaniu, a symbiotyczne mikroorganizmy rozkładają celulozę.",
    "left": [
      "mikroorganizmy w żołądku przeżuwacza",
      "szerokie zęby trzonowe",
      "długi przewód pokarmowy"
    ],
    "right": [
      "pomoc w rozkładzie celulozy",
      "rozcieranie twardego pokarmu roślinnego",
      "efektywniejsze trawienie i wchłanianie"
    ],
    "image": "r04_przezuwacz_na_lace.jpg"
  },
  {
    "id": "R04_DRA_03",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "multi_select",
    "prompt": "Które cechy chronią rośliny przed zjedzeniem przez roślinożerców?",
    "options": [
      "ciernie głogu",
      "bardzo szybki bieg",
      "włoski parzące pokrzywy",
      "wytwarzanie toksyn",
      "ostre kły",
      "upodabnianie się do kamieni"
    ],
    "answer": [
      0,
      2,
      3,
      5
    ],
    "explanation": "Ciernie, drażniące substancje, toksyny i kamuflaż mogą zniechęcić roślinożercę.",
    "image": "r04_jezyna_i_pokrzywa.jpg"
  },
  {
    "id": "R04_DRA_04",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "true_false",
    "prompt": "Szarańcza ma aparat gębowy gryzący, a motyl może pobierać nektar aparatem ssącym.",
    "options": null,
    "answer": true,
    "explanation": "Różne aparaty gębowe pozwalają pobierać różne rodzaje pokarmu roślinnego."
  },
  {
    "id": "R04_DRA_05",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "odd_one_out",
    "prompt": "Wskaż element o innej funkcji niż pozostałe: kły drapieżnika, ostre pazury drapieżnika, gruczoł jadowy drapieżnika, ciernie głogu.",
    "options": null,
    "answer": "ciernie głogu",
    "explanation": "Ciernie głogu chronią roślinę, a pozostałe cechy pomagają drapieżnikowi zdobyć ofiarę.",
    "image": "r04_jezyna_i_pokrzywa.jpg"
  },
  {
    "id": "R04_DRA_06",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "fill_in",
    "prompt": "Drapieżnik __________ i zjada ofiarę, natomiast roślinożerca żywi się głównie __________.",
    "options": null,
    "answer": [
      "zabija",
      "roślinami"
    ],
    "explanation": "Drapieżnictwo obejmuje zabicie ofiary; roślinożerność polega na pobieraniu całych roślin lub ich części.",
    "altAnswers": [
      [
        "zabija",
        "uśmierca"
      ],
      [
        "roślinami",
        "rośliną"
      ]
    ]
  },
  {
    "id": "R04_DRA_07",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "scenario",
    "prompt": "Populacja drapieżników rośnie, więc zjadają one więcej ofiar. Po pewnym czasie liczba ofiar maleje. Co może się wtedy stać z liczebnością drapieżników?",
    "options": [
      "rośnie bez końca",
      "pozostaje zawsze niezmienna",
      "wszyscy drapieżnicy stają się producentami",
      "może spaść",
      "ofiary przestają być konsumentami",
      "zmienia się tylko liczba roślin"
    ],
    "answer": 3,
    "explanation": "Niedobór ofiar zmniejsza dostępność pokarmu i może spowodować spadek liczebności drapieżników.",
    "image": "r04_wilk_i_stado_jeleni.jpg"
  },
  {
    "id": "R04_DRA_08",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "sort",
    "prompt": "Podziel cechy według roli w relacji drapieżnik–ofiara.",
    "options": null,
    "answer": {
      "zdobywanie ofiary": [
        "ostre kły wilka",
        "polowanie w stadzie wilków",
        "przywabianie ofiary przez rybę głębinową"
      ],
      "unikanie drapieżnika": [
        "kamuflaż patyczaka",
        "przebywanie w stadzie jeleni",
        "udawanie martwego przez padalca"
      ]
    },
    "explanation": "Drapieżniki poszukują i chwytają ofiarę, a ofiary wykorzystują maskowanie, zachowania grupowe i zmylenie przeciwnika.",
    "items": [
      "przebywanie w stadzie jeleni",
      "polowanie w stadzie wilków",
      "udawanie martwego przez padalca",
      "ostre kły wilka",
      "kamuflaż patyczaka",
      "przywabianie ofiary przez rybę głębinową"
    ],
    "categories": [
      "zdobywanie ofiary",
      "unikanie drapieżnika"
    ],
    "image": "r04_wilk_i_stado_jeleni.jpg"
  },
  {
    "id": "R04_DRA_09",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "single_choice",
    "prompt": "Jaką rolę spełniają mikroorganizmy w żołądku przeżuwacza?",
    "options": [
      "umożliwiają fotosyntezę przeżuwacza",
      "polują na drapieżniki",
      "tworzą ciernie roślin",
      "rozpoznają ofiary za pomocą dźwięku",
      "pomagają rozkładać celulozę",
      "wytwarzają wyłącznie jad"
    ],
    "answer": 4,
    "explanation": "Symbiotyczne bakterie i protisty pomagają rozłożyć celulozę zawartą w ścianach komórkowych roślin."
  },
  {
    "id": "R04_DRA_10",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "riddle",
    "prompt": "Jak nazywa się maskowanie organizmu przez upodobnienie do otoczenia?",
    "options": null,
    "answer": "kamuflaż",
    "explanation": "Kamuflaż pomaga ofiarom uniknąć wykrycia, a drapieżnikom zbliżyć się do ofiary.",
    "altAnswers": [
      "kamuflaż",
      "maskowanie",
      "kamuflaz"
    ]
  },
  {
    "id": "R04_DRA_11",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "true_false",
    "prompt": "Roślinożercy mogą zapobiegać zarastaniu łąk.",
    "options": null,
    "answer": true,
    "explanation": "Zjadanie roślin przez roślinożerców pomaga utrzymać otwartą łąkę i daje szansę roślinom wolniej rosnącym."
  },
  {
    "id": "R04_DRA_12",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "multi_select",
    "prompt": "Które strategie mogą zwiększyć szansę zwierzęcia na uniknięcie schwytania?",
    "options": [
      "wytwarzanie przez ofiarę własnej sieci pokarmowej",
      "kamuflaż",
      "przebywanie w stadzie",
      "polowanie z ostrymi kłami",
      "udawanie martwego",
      "odrzucanie ogona przez jaszczurkę"
    ],
    "answer": [
      1,
      2,
      4,
      5
    ],
    "explanation": "Ofiary mogą maskować się, żyć w stadach, udawać martwe lub odrzucać ogon, by zmylić drapieżnika.",
    "image": "r04_wilk_i_stado_jeleni.jpg"
  },
  {
    "id": "R04_DRA_13",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "scenario",
    "prompt": "Jaszczurka odrzuca ogon podczas ataku, a drapieżnik chwyta za ten ogon. Co jest bezpośrednią korzyścią dla jaszczurki?",
    "options": [
      "czas na ucieczkę",
      "szybsze trawienie pokarmu",
      "większa ilość światła",
      "zdobycie ofiary",
      "wytworzenie jadu",
      "pobranie składników mineralnych"
    ],
    "answer": 0,
    "explanation": "Odrzucony ogon odwraca uwagę napastnika i daje jaszczurce czas na ucieczkę."
  },
  {
    "id": "R04_DRA_14",
    "section": "Roślinożerność i drapieżnictwo",
    "type": "match",
    "prompt": "Połącz przykład z metodą zdobywania pokarmu lub obrony.",
    "options": null,
    "answer": {
      "motyl pobierający nektar": "ssący aparat gębowy",
      "szarańcza zjadająca liście": "gryzący aparat gębowy",
      "pająk łowiący owady": "tworzenie pułapki",
      "śledzie w ławicy": "obrona w grupie"
    },
    "explanation": "Nektar wymaga aparatu ssącego, liście gryzącego; sieć łapie ofiary, a ławica zwiększa bezpieczeństwo.",
    "left": [
      "pająk łowiący owady",
      "śledzie w ławicy",
      "motyl pobierający nektar",
      "szarańcza zjadająca liście"
    ],
    "right": [
      "gryzący aparat gębowy",
      "obrona w grupie",
      "tworzenie pułapki",
      "ssący aparat gębowy"
    ]
  },
  {
    "id": "R04_NIE_01",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "single_choice",
    "prompt": "Jaką relację opisuje sytuacja, gdy oba organizmy korzystają ze współpracy, lecz mogą przeżyć oddzielnie?",
    "options": [
      "komensalizm",
      "mutualizm fakultatywny",
      "pasożytnictwo",
      "drapieżnictwo",
      "konkurencja",
      "neutralizm"
    ],
    "answer": 1,
    "explanation": "Mutualizm fakultatywny przynosi obopólne korzyści, ale nie jest niezbędny do przeżycia.",
    "image": "r04_pustelnik_i_ukwial.jpg"
  },
  {
    "id": "R04_NIE_02",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "true_false",
    "prompt": "W komensalizmie jeden organizm odnosi korzyść, a drugi nie odnosi korzyści ani nie ponosi straty.",
    "options": null,
    "answer": true,
    "explanation": "To podstawowy bilans korzyści w komensalizmie."
  },
  {
    "id": "R04_NIE_03",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "match",
    "prompt": "Połącz rodzaj oddziaływania z bilansem korzyści.",
    "options": null,
    "answer": {
      "mutualizm obligatoryjny": "obopólna korzyść i konieczność współpracy",
      "mutualizm fakultatywny": "obopólna korzyść bez konieczności współpracy",
      "komensalizm": "korzyść jednego organizmu i obojętność drugiego"
    },
    "explanation": "Oba mutualizmy są korzystne dla partnerów, lecz różnią się koniecznością współpracy; w komensalizmie korzyść odnosi tylko jeden.",
    "left": [
      "komensalizm",
      "mutualizm obligatoryjny",
      "mutualizm fakultatywny"
    ],
    "right": [
      "obopólna korzyść bez konieczności współpracy",
      "korzyść jednego organizmu i obojętność drugiego",
      "obopólna korzyść i konieczność współpracy"
    ]
  },
  {
    "id": "R04_NIE_04",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "multi_select",
    "prompt": "Które pary przedstawiają mutualizm fakultatywny?",
    "options": [
      "pustelnik i ukwiał",
      "tasiemiec i człowiek",
      "bąkojad i ssak",
      "rekin i podnawka",
      "mrówki i mszyce"
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Pustelnik z ukwiałem, bąkojad ze ssakiem i mrówki z mszycami odnoszą wzajemne korzyści bez konieczności stałego współżycia.",
    "image": "r04_pustelnik_i_ukwial.jpg"
  },
  {
    "id": "R04_NIE_05",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "scenario",
    "prompt": "Pustelnik zyskuje ochronę dzięki ukwiałowi przyczepionemu do jego muszli. Ukwiał może się przemieszczać i zdobywać resztki pokarmu. Oba organizmy mogą też żyć osobno. Jaka to relacja?",
    "options": [
      "mutualizm fakultatywny",
      "mutualizm obligatoryjny",
      "komensalizm",
      "pasożytnictwo",
      "konkurencja",
      "drapieżnictwo"
    ],
    "answer": 0,
    "explanation": "Współpraca obu stron przynosi korzyści, ale nie warunkuje ich przeżycia.",
    "image": "r04_pustelnik_i_ukwial.jpg"
  },
  {
    "id": "R04_NIE_06",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "sort",
    "prompt": "Przyporządkuj pary do relacji nieantagonistycznej.",
    "options": null,
    "answer": {
      "mutualizm obligatoryjny": [
        "glon i grzyb w poroście",
        "człowiek i symbiotyczne bakterie jelitowe"
      ],
      "mutualizm fakultatywny": [
        "pustelnik i ukwiał",
        "mrówki i mszyce"
      ],
      "komensalizm": [
        "rekin i podnawka",
        "lew i hiena jedząca resztki ofiary"
      ]
    },
    "explanation": "Porost i bakterie jelitowe są przykładami ścisłej współpracy, pustelnik i mrówki współpracują fakultatywnie, a podnawka i hiena korzystają bez wpływu na partnera.",
    "items": [
      "rekin i podnawka",
      "mrówki i mszyce",
      "glon i grzyb w poroście",
      "lew i hiena jedząca resztki ofiary",
      "pustelnik i ukwiał",
      "człowiek i symbiotyczne bakterie jelitowe"
    ],
    "categories": [
      "mutualizm obligatoryjny",
      "mutualizm fakultatywny",
      "komensalizm"
    ],
    "image": "r04_porost_na_korze.jpg"
  },
  {
    "id": "R04_NIE_07",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "fill_in",
    "prompt": "Porost tworzą współpracujące ze sobą __________ i __________.",
    "options": null,
    "answer": [
      "glon",
      "grzyb"
    ],
    "explanation": "Glon produkuje substancje pokarmowe, a grzyb chroni go przed wysychaniem oraz dostarcza wodę i sole mineralne.",
    "altAnswers": [
      [
        "glon",
        "glony"
      ],
      [
        "grzyb",
        "grzyby"
      ]
    ],
    "image": "r04_porost_na_korze.jpg"
  },
  {
    "id": "R04_NIE_08",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "odd_one_out",
    "prompt": "Wskaż parę reprezentującą inny typ relacji niż pozostałe: rekin i podnawka, drzewo i storczyk epifityczny, lew i hiena żywiąca się resztkami, bąkojad i bawół.",
    "options": null,
    "answer": "bąkojad i bawół",
    "explanation": "Bąkojad i bawół odnoszą wzajemne korzyści, a pozostałe pary ilustrują komensalizm.",
    "image": "r04_storczyk_na_drzewie.jpg"
  },
  {
    "id": "R04_NIE_09",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "riddle",
    "prompt": "Jak nazywa się relacja korzystna dla jednego gatunku i obojętna dla drugiego?",
    "options": null,
    "answer": "komensalizm",
    "explanation": "Komensalizm nazywa się również współbiesiadnictwem.",
    "altAnswers": [
      "komensalizm",
      "współbiesiadnictwo"
    ]
  },
  {
    "id": "R04_NIE_10",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "true_false",
    "prompt": "Epifit pobiera pokarm z tkanek drzewa, na którym rośnie, dlatego jest jego pasożytem.",
    "options": null,
    "answer": false,
    "explanation": "Epifit wykorzystuje drzewo jako miejsce do życia, a wodę i składniki mineralne czerpie ze spływającej wody; dla drzewa jest obojętny.",
    "image": "r04_storczyk_na_drzewie.jpg"
  },
  {
    "id": "R04_NIE_11",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "single_choice",
    "prompt": "Co otrzymuje grzyb od glonu tworzącego z nim porost?",
    "options": [
      "ochronę przed swoimi enzymami",
      "pokarm zwierzęcy",
      "gotowe nasiona",
      "jad",
      "pióra",
      "substancje pokarmowe z fotosyntezy"
    ],
    "answer": 5,
    "explanation": "Glon przeprowadza fotosyntezę i dzieli się z grzybem wytworzonymi substancjami pokarmowymi.",
    "image": "r04_porost_na_korze.jpg"
  },
  {
    "id": "R04_NIE_12",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "multi_select",
    "prompt": "Które korzyści mogą odnosić partnerzy relacji nieantagonistycznych?",
    "options": [
      "schronienie",
      "pokarm",
      "szkoda ponoszona przez obie strony",
      "ochrona przed zagrożeniem",
      "transport"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Współpraca może dostarczać schronienia, pokarmu, ochrony lub transportu; nie zakłada szkody dla partnera."
  },
  {
    "id": "R04_NIE_13",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "scenario",
    "prompt": "Podnawka przyczepia się do rekina, podróżuje razem z nim i zjada resztki jego pożywienia. Rekin nie odnosi ani korzyści, ani strat. Jaką nazwę ma ta relacja?",
    "options": [
      "mutualizm obligatoryjny",
      "komensalizm",
      "konkurencja",
      "pasożytnictwo",
      "drapieżnictwo",
      "mutualizm fakultatywny"
    ],
    "answer": 1,
    "explanation": "Podnawka odnosi korzyść, a wpływ na rekina jest obojętny, co odpowiada komensalizmowi."
  },
  {
    "id": "R04_NIE_14",
    "section": "Oddziaływania nieantagonistyczne",
    "type": "match",
    "prompt": "Połącz partnera z korzyścią, którą otrzymuje.",
    "options": null,
    "answer": {
      "glon w poroście": "woda i ochrona przed wysychaniem",
      "grzyb w poroście": "substancje pokarmowe z fotosyntezy",
      "bąkojad przy ssaku": "pokarm w postaci pasożytów",
      "ssak z bąkojadem": "oczyszczenie skóry z pasożytów"
    },
    "explanation": "Grzyb i glon wymieniają potrzebne zasoby, zaś ssak i bąkojad obustronnie korzystają z usuwania pasożytów.",
    "left": [
      "ssak z bąkojadem",
      "grzyb w poroście",
      "glon w poroście",
      "bąkojad przy ssaku"
    ],
    "right": [
      "substancje pokarmowe z fotosyntezy",
      "pokarm w postaci pasożytów",
      "oczyszczenie skóry z pasożytów",
      "woda i ochrona przed wysychaniem"
    ]
  },
  {
    "id": "R04_HARD_01",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Myszołów zjada mysz leśną, która żywiła się roślinami. Innym razem myszołów zjada zaskrońca, który zjadł mysz leśną. Jak zmienia się rząd konsumenta, do którego należy myszołów w tych dwóch łańcuchach?",
    "options": [
      "z II na III rzędu",
      "z I na II rzędu",
      "z III na I rzędu",
      "pozostaje zawsze producentem",
      "z destruentów na producentów",
      "pozostaje zawsze konsumentem I rzędu"
    ],
    "answer": 0,
    "explanation": "Gdy zjada roślinożerną mysz, jest konsumentem II rzędu; gdy zjada zaskrońca po myszy, jest konsumentem III rzędu."
  },
  {
    "id": "R04_HARD_02",
    "section": "Super trudne",
    "type": "sequence",
    "prompt": "Ułóż ogniwa przykładowego łańcucha od producenta do konsumenta III rzędu.",
    "options": null,
    "answer": [
      "wiechlina spłaszczona",
      "mysz leśna",
      "zaskroniec zwyczajny",
      "myszołów zwyczajny"
    ],
    "explanation": "Wiechlina jest producentem, mysz konsumentem I rzędu, zaskroniec II, a myszołów III rzędu.",
    "items": [
      "zaskroniec zwyczajny",
      "wiechlina spłaszczona",
      "myszołów zwyczajny",
      "mysz leśna"
    ]
  },
  {
    "id": "R04_HARD_03",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "W ekosystemie spada liczba producentów. Które skutki mogą z tego wynikać?",
    "options": [
      "Mniej pokarmu może trafić do roślinożerców.",
      "Energia zaczyna krążyć bez utraty ciepła.",
      "Mniejsza produkcja pokarmu może wpłynąć na wyższe poziomy troficzne.",
      "Destruenci przestają rozkładać materię na zawsze.",
      "Producenci mogą wytwarzać mniej materii organicznej."
    ],
    "answer": [
      0,
      2,
      4
    ],
    "explanation": "Producenci rozpoczynają łańcuch spasania; ich spadek ogranicza wytwarzanie pokarmu i może wpłynąć także na wyższe poziomy troficzne."
  },
  {
    "id": "R04_HARD_04",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Na skórze łosia żeruje dużo kleszczy. Osłabiony łoś może łatwiej paść ofiarą wilków. Który opis najlepiej łączy oba oddziaływania?",
    "options": [
      "sam komensalizm",
      "dwa mutualizmy",
      "konkurencja dwóch roślin",
      "pasożytnictwo kleszczy i drapieżnictwo wilków",
      "fotosynteza i symbioza",
      "dwie relacje neutralne"
    ],
    "answer": 3,
    "explanation": "Kleszcze czerpią korzyści kosztem łosia, a wilki mogą wykorzystać jego osłabienie podczas polowania.",
    "image": "r04_kleszcz_na_skorze.jpg"
  },
  {
    "id": "R04_HARD_05",
    "section": "Super trudne",
    "type": "sort",
    "prompt": "Podziel sytuacje według skutku dla stron relacji.",
    "options": null,
    "answer": {
      "korzyść jednej strony i strata drugiej": [
        "tasiemiec i człowiek",
        "wilk i jeleń"
      ],
      "korzyść obu stron": [
        "pustelnik i ukwiał",
        "bąkojad i bawół"
      ],
      "korzyść jednej strony i obojętność drugiej": [
        "podnawka i rekin",
        "storczyk epifityczny i drzewo"
      ],
      "strata obu rywalizujących stron": [
        "dwa jelenie walczące o samicę",
        "żyto i chaber rywalizujące o światło"
      ]
    },
    "explanation": "Pasożytnictwo i drapieżnictwo przynoszą stratę jednej stronie, fakultatywny mutualizm zysk obu, komensalizm zysk jednej, a konkurencja stratę obu.",
    "items": [
      "podnawka i rekin",
      "wilk i jeleń",
      "dwa jelenie walczące o samicę",
      "bąkojad i bawół",
      "tasiemiec i człowiek",
      "storczyk epifityczny i drzewo",
      "żyto i chaber rywalizujące o światło",
      "pustelnik i ukwiał"
    ],
    "categories": [
      "korzyść jednej strony i strata drugiej",
      "korzyść obu stron",
      "korzyść jednej strony i obojętność drugiej",
      "strata obu rywalizujących stron"
    ]
  },
  {
    "id": "R04_HARD_06",
    "section": "Super trudne",
    "type": "match",
    "prompt": "Połącz konkretne zachowanie z jego ekologicznie uzasadnionym skutkiem.",
    "options": null,
    "answer": {
      "wzrost liczby drapieżników": "większa presja na ofiary",
      "spadek liczby ofiar": "możliwy późniejszy spadek liczby drapieżników",
      "rozpad martwych szczątków": "ponowne udostępnienie składników mineralnych",
      "zjadanie roślin na łące": "ograniczenie zarastania łąki"
    },
    "explanation": "W łańcuchu pokarmowym i obiegu materii skutki oddziaływań rozchodzą się na kolejne organizmy.",
    "left": [
      "zjadanie roślin na łące",
      "rozpad martwych szczątków",
      "wzrost liczby drapieżników",
      "spadek liczby ofiar"
    ],
    "right": [
      "możliwy późniejszy spadek liczby drapieżników",
      "ograniczenie zarastania łąki",
      "ponowne udostępnienie składników mineralnych",
      "większa presja na ofiary"
    ]
  },
  {
    "id": "R04_HARD_07",
    "section": "Super trudne",
    "type": "fill_in",
    "prompt": "Grzyb w poroście dostarcza glonowi __________ i sole mineralne, natomiast glon dostarcza grzybowi __________ wytworzone podczas fotosyntezy.",
    "options": null,
    "answer": [
      "wodę",
      "substancje pokarmowe"
    ],
    "explanation": "Wymiana zasobów umożliwia ścisłą współpracę w poroście.",
    "altAnswers": [
      [
        "wodę",
        "woda"
      ],
      [
        "substancje pokarmowe",
        "pokarm"
      ]
    ],
    "image": "r04_porost_na_korze.jpg"
  },
  {
    "id": "R04_HARD_08",
    "section": "Super trudne",
    "type": "odd_one_out",
    "prompt": "Wskaż parę o odmiennym bilansie korzyści niż pozostałe: człowiek i bakterie jelitowe, glon i grzyb w poroście, pustelnik i ukwiał, rekin i podnawka.",
    "options": null,
    "answer": "rekin i podnawka",
    "explanation": "W pierwszych trzech parach obie strony korzystają, a w relacji rekina z podnawką korzyść odnosi tylko podnawka."
  },
  {
    "id": "R04_HARD_09",
    "section": "Super trudne",
    "type": "true_false",
    "prompt": "Obecność licznych roślinożerców może ograniczyć zarastanie łąki, ale upodobania pokarmowe mogą też prowadzić do zaniku części gatunków roślin.",
    "options": null,
    "answer": true,
    "explanation": "Roślinożerność sprzyja utrzymaniu otwartej łąki, choć intensywne zjadanie niektórych roślin może im szkodzić."
  },
  {
    "id": "R04_HARD_10",
    "section": "Super trudne",
    "type": "scenario",
    "prompt": "Kanianka wrasta ssawkami w łodygę lnu i pobiera od niego substancje odżywcze, podczas gdy storczyk rośnie na konarze drzewa i korzysta z wody spływającej po korze. Jak różnią się te relacje?",
    "options": [
      "obie są pasożytnictwem",
      "obie są mutualizmem obligatoryjnym",
      "kanianka to pasożyt; storczyk jest komensalem",
      "kanianka jest producentem; storczyk jest drapieżnikiem",
      "obie są konkurencją",
      "storczyk jest pasożytem; kanianka jest komensalem"
    ],
    "answer": 2,
    "explanation": "Kanianka czerpie zasoby z żywiciela i mu szkodzi, zaś epifit korzysta z drzewa jako miejsca do życia bez szkody dla niego.",
    "image": "r04_storczyk_na_drzewie.jpg"
  },
  {
    "id": "R04_HARD_11",
    "section": "Super trudne",
    "type": "multi_select",
    "prompt": "Które sytuacje mogą zmienić możliwości zdobycia pokarmu przez inne organizmy w ekosystemie?",
    "options": [
      "wyparcie rośliny przez konkurencyjny gatunek",
      "zmniejszenie liczby ofiar po wzroście liczby drapieżników",
      "całkowity brak powiązań między organizmami",
      "rozkład szczątków przez destruentów",
      "fotosynteza producentów"
    ],
    "answer": [
      0,
      1,
      3,
      4
    ],
    "explanation": "Rywalizacja o zasoby, spadek liczby ofiar, rozkład szczątków i produkcja materii przez rośliny wpływają na zasoby dostępne dla innych."
  },
  {
    "id": "R04_HARD_12",
    "section": "Super trudne",
    "type": "single_choice",
    "prompt": "Dlaczego nawet rozbudowana sieć pokarmowa wymaga stałego dopływu energii słonecznej?",
    "options": [
      "ponieważ destruenci niszczą wszystkie pierwiastki",
      "ponieważ materia nie zmienia postaci",
      "ponieważ rośliny nie potrzebują światła",
      "ponieważ każda ofiara jest producentem",
      "ponieważ energia rozprasza się przy kolejnych przekazaniach",
      "ponieważ konkurencja wytwarza światło"
    ],
    "answer": 4,
    "explanation": "Energia przechodzi przez poziomy troficzne i stopniowo rozprasza się jako ciepło, więc musi być stale uzupełniana."
  }
];

const KID_PROMPTS = {};

const chapter = {
  "id": "r04",
  "number": 4,
  "title": "Oddziaływania w ekosystemie",
  "icon": "🌱",
  "sectionOrder": [
    "Ekosystem i zależności pokarmowe",
    "Konkurencja i pasożytnictwo",
    "Roślinożerność i drapieżnictwo",
    "Oddziaływania nieantagonistyczne"
  ],
  "sectionIcons": {
    "Ekosystem i zależności pokarmowe": "🌿",
    "Konkurencja i pasożytnictwo": "🦠",
    "Roślinożerność i drapieżnictwo": "🐺",
    "Oddziaływania nieantagonistyczne": "🤝"
  },
  exercises: ALL_EXERCISES,
  kidPrompts: KID_PROMPTS
};

export default chapter;
